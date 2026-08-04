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
    titulo: "El parquímetro se inventó contra los oficinistas",
    gancho: "Los empleados dejaban el coche todo el día delante de las tiendas, y los comerciantes se quedaban sin clientes.",
    categoria: "Ciudades",
    color: "var(--clay)",
    encargo: "Parquímetro de los años treinta sobre un poste, con la aguja y la ranura de la moneda.",
    entrada:
      "Oklahoma, Estados Unidos, 1935. En el centro de la ciudad no queda un solo hueco libre, porque los empleados de las oficinas aparcan a las ocho y no mueven el coche hasta las seis. Los comerciantes se quejan de que ningún cliente puede parar a comprar. Un abogado que dirige la cámara de comercio local propone algo que nunca se ha hecho: cobrar por el tiempo.",
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
    titulo: "Un aparcamiento bajo tierra es un problema de aire",
    gancho: "Lo difícil no es excavar. Es sacar los gases de cientos de motores de un sitio cerrado sin que se acumulen.",
    categoria: "Ciudades",
    color: "var(--slate)",
    encargo: "Planta de garaje subterráneo vacía, con los conductos de ventilación a la vista en el techo.",
    entrada:
      "Europa y Estados Unidos, con los primeros grandes aparcamientos bajo plaza construidos desde los años cincuenta del siglo XX. Meter coches bajo tierra parece un problema de excavación y de estructura, y en realidad el asunto más serio es otro. Un motor de gasolina produce monóxido de carbono, un gas sin olor y sin color que mata en minutos. En un sótano cerrado ese gas no se va solo.",
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
    titulo: "Una plaza de garaje cuesta más que un piso",
    gancho: "En algunas ciudades una plaza se ha vendido por lo que vale una vivienda entera, y la razón no es el capricho.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Plaza de garaje numerada y vacía entre dos coches, con las líneas muy marcadas.",
    entrada:
      "Hong Kong y Londres, con los récords batidos entre 2017 y 2024. En las ciudades más densas del mundo se han vendido plazas de garaje individuales por cifras de más de medio millón de euros. No es una anécdota de ricos aburridos, sino la consecuencia lógica de una regla urbanística. Cuando una ciudad limita cuánto se puede construir, el suelo es lo único que no se fabrica.",
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
