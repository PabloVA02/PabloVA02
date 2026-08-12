import type { Short } from "../shorts";

/* ==========================================================================
   Los aparcamientos.

   El sitio donde un coche pasa el noventa por ciento de su vida. El tema
   se estropea si se convierte en queja sobre el tráfico.

   La regla del tema: cada short trata el aparcamiento como lo que es, UN
   PROBLEMA DE SUELO Y DE TIEMPO, con metros cuadrados y minutos por
   delante. La ingeniería (la rampa, la ventilación) se explica antes de
   usarla, y la economía se cuenta con números, no con opiniones.
   ========================================================================== */

export const APARCAMIENTOS: Short[] = [
  {
    id: "el-parquimetro",
    titulo: "El primer parquímetro",
    gancho: "Los empleados dejaban el coche todo el día delante de las tiendas, y los comerciantes se quedaban sin clientes.",
    categoria: "Ciudades",
    color: "var(--clay)",
    encargo: "Parquímetro de los años treinta sobre un poste, con la aguja y la ranura de la moneda.",
    /* De arriba abajo del short: el aparato, la calle que vino a ordenar, lo
       que costaba y en qué se ha convertido. */
    fotos: [
      {
        archivo: "Josh Newton 2015 (Unsplash).jpg",
        autor:
          "Dos parquímetros de moneda con la ventanilla en «tiempo agotado». Fotografía de Josh Newton, 2015.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Josh_Newton_2015_(Unsplash).jpg",
        foco: "50% 45%",
        alt: "Dos parquímetros azules de pintura desconchada, uno al lado del otro, con la esfera de las horas y el letrero de tiempo agotado.",
      },
      {
        archivo: "Cars parked diagonally, Omaha, Nebraska ppmsca.10438u.jpg",
        autor:
          "Coches aparcados en batería junto a los parquímetros. Omaha, Nebraska, noviembre de 1938. Fotografía de John Vachon.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Cars_parked_diagonally,_Omaha,_Nebraska_ppmsca.10438u.jpg",
        foco: "50% 50%",
        alt: "Fotografía en blanco y negro de una fila larga de coches de los años treinta aparcados en diagonal, con un parquímetro delante de cada uno.",
      },
      {
        archivo: "Nostaligic Pricing (52395904850).jpg",
        autor:
          "Parquímetro conservado con la tarifa de 1960: doce minutos por un centavo. Fotografía de Ron Reiring, 2022.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nostaligic_Pricing_(52395904850).jpg",
        foco: "55% 50%",
        alt: "Un parquímetro plateado sobre su poste, con el capó blanco y brillante de un coche antiguo detrás.",
      },
      {
        archivo: "Georgetown, Malaysia (4570232019).jpg",
        autor:
          "Parquímetro doble en George Town, Penang. Fotografía de yeowatzup, 2010.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Georgetown,_Malaysia_(4570232019).jpg",
        foco: "45% 50%",
        alt: "Un parquímetro doble pintado de verde, con los números 13 y 15, delante de una verja roja.",
      },
    ],
    entrada:
      "Oklahoma, Estados Unidos, 1935. En el centro de la ciudad no queda un solo hueco libre, porque los empleados de las oficinas aparcan a las ocho y no mueven el coche hasta las seis. Los comerciantes se quejan de que ningún cliente puede parar a comprar. Un abogado que dirige la cámara de comercio local propone algo que nunca se ha hecho: cobrar por el tiempo que un coche ocupa un hueco. No por aparcar, que era gratis en todas partes, sino por quedarse. La idea es que el que paga por horas se va antes y deja el hueco libre para el siguiente. En 1935 hubo quien lo llevó a los tribunales por considerarlo un impuesto sobre el aire.",
    paginas: [
      {
        rotulo: "Rotar el hueco",
        texto:
          "El problema no era la falta de plazas, sino que las mismas plazas las ocupaba siempre la misma gente. Un hueco que se usa una vez al día sirve a un conductor, y el mismo hueco con rotación sirve a diez. Cobrar por minutos obliga a esa rotación sin necesidad de vigilantes ni de discusiones. El primer aparato era una caja sobre un poste con una ranura para la moneda y una aguja que bajaba. Se instalaron ciento cincuenta en una sola calle y la reacción fue de indignación general. Varios conductores llevaron el asunto a los tribunales alegando que la calle era pública y gratis.",
        destacado: { tipo: "frase", frase: "Un hueco sin rotación sirve a un conductor al día." },
      },
      {
        rotulo: "El pleito",
        texto:
          "El argumento de los denunciantes era sólido y se ha repetido en medio mundo desde entonces. Decían que el ayuntamiento estaba cobrando por usar una vía pública pagada ya con impuestos. Los tribunales respondieron con una distinción que sigue siendo la base legal de todo esto. La calle es pública para circular, y dejar un coche parado durante horas no es circular, sino ocupar. Lo que se cobra no es el paso, sino el uso privativo de un espacio común durante un rato. Con esa sentencia, el invento se extendió a miles de ciudades en menos de diez años.",
        destacado: { tipo: "cifra", cifra: "1935", unidad: "el año del primer parquímetro" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una fuente de ingresos municipales enorme y muy discutida en todas las ciudades del mundo. Quedó también el debate sobre para qué es el dinero, si para recaudar o para ordenar el tráfico. Los estudios de tráfico dicen que una parte notable de los coches del centro no va a ningún sitio. Están dando vueltas buscando aparcamiento, y ese tráfico se puede reducir subiendo el precio hasta que siempre quede un hueco. Y quedó una idea incómoda de aceptar, porque el aparcamiento en superficie casi nunca cubre lo que vale ese suelo.",
      },
    ],
  },
  {
    id: "el-aparcamiento-subterraneo",
    titulo: "El garaje, problema de aire",
    gancho: "Lo difícil no es excavar. Es sacar los gases de cientos de motores de un sitio cerrado sin que se acumulen.",
    categoria: "Ciudades",
    color: "var(--slate)",
    encargo: "Planta de garaje subterráneo vacía, con los conductos de ventilación a la vista en el techo.",
    fotos: [
      {
        archivo: "Spiral Parking Garage Ramp, John Hancock Center, Michigan Avenue, Streeterville, Chicago, IL.jpg",
        autor: "Rampa helicoidal del aparcamiento del John Hancock Center, Chicago, 2024. Fotografía de w_lemay.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Spiral_Parking_Garage_Ramp,_John_Hancock_Center,_Michigan_Avenue,_Streeterville,_Chicago,_IL.jpg",
        foco: "50% 45%",
        alt: "Un cilindro de hormigón con las plantas del aparcamiento enroscadas en espiral, iluminado de noche entre rascacielos.",
      },
      {
        archivo: "East ramp of Alewife parking garage, December 2018.jpg",
        autor: "Rampa del aparcamiento de la estación de Alewife, Cambridge (Massachusetts), 2018. Fotografía de Daderot.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:East_ramp_of_Alewife_parking_garage,_December_2018.jpg",
        foco: "50% 50%",
        alt: "El exterior de una rampa curva de hormigón que sube por fuera de un aparcamiento de varias plantas.",
      },
      {
        archivo: "East spiral ramp at Alewife station parking garage March 2025.jpg",
        autor: "La misma rampa helicoidal de Alewife vista desde abajo, 2025. Fotografía de 4300streetcar.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:East_spiral_ramp_at_Alewife_station_parking_garage_March_2025.jpg",
        foco: "50% 50%",
        alt: "Vista en contrapicado de una rampa en espiral de hormigón que da vueltas sobre sí misma.",
      },
      {
        archivo: "Parking garage spiral Flagstaff AZ 2026-04-07 08-49-48.jpg",
        autor: "Rampa en espiral de un aparcamiento en Flagstaff, Arizona, 2026. Fotografía de G. Edward Johnson.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Parking_garage_spiral_Flagstaff_AZ_2026-04-07_08-49-48.jpg",
        foco: "50% 50%",
        alt: "Una rampa de aparcamiento que desciende girando, con las líneas del suelo marcando la curva.",
      },
    ],
    entrada:
      "Europa y Estados Unidos, con los primeros grandes aparcamientos bajo plaza construidos desde los años cincuenta del siglo XX. Meter coches bajo tierra parece un problema de excavación y de estructura, que es lo que salta a la vista, y en realidad el asunto más serio es otro y no se ve. Un motor de gasolina produce monóxido de carbono, un gas sin olor, sin color y sin sabor que mata en minutos y del que nadie se da cuenta a tiempo. En un sótano cerrado ese gas no se va solo, así que hay que sacarlo a la fuerza y sin parar.",
    paginas: [
      {
        rotulo: "El gas invisible",
        texto:
          "El monóxido de carbono se produce cuando un combustible arde sin oxígeno suficiente, cosa habitual en un motor frío. Es peligroso porque se pega a la sangre en el sitio que le corresponde al oxígeno y no lo suelta. La persona se marea, se le nubla la vista y se desmaya sin haber notado nada raro antes. Por eso todo aparcamiento cerrado lleva por norma un sistema de ventilación forzada con detectores repartidos. Los detectores miden la concentración y encienden los ventiladores por escalones antes de llegar al nivel peligroso. Ese zumbido que se oye en un sótano vacío no es la iluminación: es el aire renovándose.",
        destacado: { tipo: "frase", frase: "El zumbido del sótano vacío es el aire renovándose." },
      },
      {
        rotulo: "La rampa",
        texto:
          "El otro problema serio de un aparcamiento es la geometría, porque bajar un piso ocupa muchísimo suelo. Una rampa no puede pasar de una pendiente determinada o los coches bajos rozan al entrar y al salir. Con tres metros de altura entre plantas, esa rampa necesita más de veinte metros de recorrido. De ahí vienen las rampas en espiral, que resuelven el desnivel dando vueltas en un cilindro estrecho. También explican por qué las plazas de los sótanos son cada vez más estrechas mientras los coches engordan. Un coche familiar de hoy es medio metro más ancho que uno de los años ochenta.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "metros de rampa para bajar un solo piso" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un tipo de espacio que ocupa bajo muchas ciudades más superficie que las propias plazas de arriba. Quedó también un problema de conservación caro, porque el agua salada de las botas en invierno ataca el hormigón. Muchos aparcamientos de los años sesenta han tenido que reforzarse o cerrarse por la corrosión de las armaduras. Y quedó una pregunta abierta en muchos ayuntamientos, porque el coche eléctrico no emite monóxido pero sí puede arder. Un incendio de batería en un sótano es muy difícil de apagar, y varias ciudades ya lo están regulando.",
      },
    ],
  },
  {
    id: "la-plaza-mas-cara",
    titulo: "La plaza cara",
    gancho: "En algunas ciudades una plaza se ha vendido por lo que vale una vivienda entera, y la razón no es el capricho.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Plaza de garaje numerada y vacía entre dos coches, con las líneas muy marcadas.",
    fotos: [
      {
        archivo: "Interior of Rupert Street parking garage - DSC 8057.jpg",
        autor: "Interior del aparcamiento de Rupert Street, Bristol, 2026.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AInterior%20of%20Rupert%20Street%20parking%20garage%20-%20DSC%208057.jpg",
        foco: "50% 55%",
        alt: "Planta de un aparcamiento de hormigón con barandillas amarillas y coches aparcados.",
      },
      {
        archivo: "Interior of Rupert Street parking garage - DSC 8051.jpg",
        autor: "Otra planta del mismo aparcamiento de Bristol, 2026.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AInterior%20of%20Rupert%20Street%20parking%20garage%20-%20DSC%208051.jpg",
        foco: "50% 50%",
        alt: "Hilera de plazas marcadas en el suelo entre pilares de hormigón.",
      },
      {
        archivo: "Interior of Rupert Street parking garage - PXL 20260518 152153849.jpg",
        autor: "Rampa interior del aparcamiento de Rupert Street, 2026.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AInterior%20of%20Rupert%20Street%20parking%20garage%20-%20PXL%2020260518%20152153849.jpg",
        foco: "50% 50%",
        alt: "Rampa curva de un aparcamiento de varias plantas vista desde dentro.",
      },
      {
        archivo: "Parking garage at level K2 of Redi in August 2024.jpg",
        autor: "Aparcamiento subterráneo de Redi, Helsinki, 2024.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AParking%20garage%20at%20level%20K2%20of%20Redi%20in%20August%202024.jpg",
        foco: "50% 50%",
        alt: "Plazas vacías y numeradas en un aparcamiento subterráneo bien iluminado.",
      },
    ],
    entrada:
      "Hong Kong y Londres, con los récords batidos una y otra vez entre 2017 y 2024. En las ciudades más densas del mundo se han vendido plazas de garaje individuales, una sola plaza numerada, por cifras que superan el medio millón de euros. No es una anécdota de ricos aburridos ni un capricho de coleccionista, sino la consecuencia perfectamente lógica de una regla urbanística que casi nadie mira. Cuando una ciudad limita cuánto se puede construir en cada parcela, el suelo se convierte en lo único que no se fabrica, y todo lo que ocupa suelo empieza a pesar.",
    paginas: [
      {
        rotulo: "El suelo escaso",
        texto:
          "Una plaza de garaje ocupa unos doce metros cuadrados, más el pasillo que hace falta para llegar a ella. Contando ese pasillo, cada coche necesita en realidad unos veinticinco metros cuadrados de edificio. Eso es más que muchos estudios de alquiler, y en una ciudad cara ese espacio vale una fortuna. Si además el ayuntamiento limita el número de plazas nuevas, la oferta se congela y la demanda no. El precio se dispara igual que el de cualquier cosa escasa que la gente sigue queriendo. En los edificios antiguos sin garaje, una plaza cercana puede valer más que la reforma del piso entero.",
        destacado: { tipo: "cifra", cifra: "25", unidad: "metros cuadrados necesita cada coche" },
      },
      {
        rotulo: "El mínimo",
        texto:
          "Durante medio siglo, casi todas las ciudades occidentales obligaron a construir un número mínimo de plazas por vivienda. La norma parecía sensata y tuvo efectos que nadie había calculado bien. Construir un sótano encarece muchísimo la obra, y ese coste va al precio de todos los pisos. Quien no tiene coche acaba pagando el garaje del vecino sin usarlo nunca. Además, garantizar aparcamiento barato empuja a tener coche, así que la norma fabricaba el tráfico que quería resolver. Desde hace unos años, muchas ciudades han eliminado esos mínimos y algunas han puesto máximos.",
        destacado: { tipo: "frase", frase: "Quien no tiene coche paga el garaje del vecino." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una discusión que ha cambiado de bando en veinte años, porque hoy se discute cómo quitar plazas. Quedaron también usos nuevos para garajes que se vacían, desde almacenes de reparto hasta huertos y gimnasios. Los aparcamientos construidos en los años setenta se están reconvirtiendo porque su estructura admite otras cosas. Y quedó el dato que resume el asunto entero, porque un coche particular pasa más del noventa por ciento del tiempo parado. Es un objeto caro que se compra para moverse y que en la práctica se compra para ocupar sitio.",
      },
    ],
  },
];
