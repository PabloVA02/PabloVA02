import type { Short } from "../shorts";

/* ==========================================================================
   Trenes.

   El primer transporte que fue más rápido que un caballo, y el que obligó a
   inventar la puntualidad. El riesgo del tema es el aficionado: modelos de
   locomotora, potencias y matrículas, que no le importan a nadie más.

   La regla del tema: se cuenta LO QUE EL TREN OBLIGÓ A CAMBIAR. Una medida
   entre raíles que decide con quién comercia un país durante siglo y medio.
   Un miedo médico a la velocidad que hoy hace gracia. Un túnel bajo una
   ciudad excavado a mano con la gente viviendo encima.

   Y siempre se dice la velocidad en términos comparables: no «cincuenta por
   hora», sino «el doble que un caballo al galope, que no aguanta un minuto».
   ========================================================================== */

export const TRENES: Short[] = [
  {
    id: "ancho-iberico",
    titulo: "España eligió unas vías más anchas que Europa",
    gancho: "Durante siglo y medio hubo que cambiar de tren en la frontera. La razón no fue militar, aunque eso se repita.",
    categoria: "Trenes",
    color: "var(--ochre)",
    encargo: "Dos raíles de acero perdiéndose en la distancia sobre balasto gris.",
    entrada:
      "Madrid, 1844. España va a construir su primer ferrocarril y una comisión de ingenieros tiene que decidir la distancia entre los dos raíles, una medida que después no se puede cambiar sin rehacer la red entera. En Europa se está imponiendo un ancho de metro y medio escaso. La comisión española recomienda seis pies castellanos, casi veinte centímetros más.",
    paginas: [
      {
        rotulo: "El informe",
        texto:
          "El argumento del informe fue técnico y, en su momento, razonable. España tiene mucha montaña, y los ingenieros pensaron que harían falta locomotoras más grandes y pesadas para subir aquellas pendientes; una caldera mayor necesitaba más sitio entre las ruedas, y con el ancho europeo no cabía. Se equivocaron en la previsión: la técnica avanzó y en pocas décadas se construían máquinas potentísimas dentro del ancho normal. La versión de que se hizo para frenar una invasión francesa circula desde entonces, pero no aparece por ninguna parte en el documento.",
        destacado: { tipo: "frase", frase: "La versión de la invasión no aparece en el informe. Fue por las cuestas." },
      },
      {
        rotulo: "La frontera",
        texto:
          "La consecuencia se pagó durante siglo y medio. Todo lo que entraba o salía por tierra tenía que descargarse y volver a cargarse en la frontera, o cambiar de vagón, y los viajeros bajaban de un tren y subían a otro en la estación de Irún o de Portbou en mitad de la noche. Se llegaron a construir vagones con ejes ajustables que se ensanchaban al pasar por una instalación especial, un invento español de los años sesenta que sigue usándose y que permite hacer el cambio en marcha lenta, sin parar.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "centímetros más anchas que las europeas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El problema se resolvió a partir de 1988 construyendo las líneas de alta velocidad directamente con el ancho europeo, así que hoy España tiene dos redes que conviven, con miles de kilómetros de cada una, y estaciones donde llegan trenes de las dos. Portugal comparte el ancho ibérico y tiene el mismo asunto pendiente. La medida original no fue ni arbitraria ni tonta: respondía a un problema real de 1844 que dejó de existir treinta años más tarde, justo cuando ya había miles de kilómetros tendidos y volver atrás costaba más que el ferrocarril entero. Casi todas las decisiones de infraestructura funcionan así.",
      },
    ],
  },

  {
    id: "miedo-velocidad",
    titulo: "Los médicos temían que la velocidad matara",
    gancho: "Se advirtió de que a cincuenta por hora el cuerpo se desharía y de que los túneles provocarían locura.",
    categoria: "Trenes",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una locomotora de vapor antigua vista de frente, con vapor saliendo por los lados.",
    entrada:
      "Inglaterra, 1830. Se inaugura la primera línea de ferrocarril del mundo para pasajeros entre dos ciudades, y los trenes alcanzan unos cuarenta kilómetros por hora. Es la primera vez en la historia que un ser humano se mueve más deprisa que un caballo al galope durante más de un minuto seguido, y nadie sabe qué le hace eso al cuerpo.",
    paginas: [
      {
        rotulo: "Los avisos",
        texto:
          "Se publicaron advertencias muy serias. Algunos médicos sostuvieron que a partir de cierta velocidad el cuerpo no aguantaría la presión del aire y se desharía, que los huesos se descolocarían por la vibración continua y que las mujeres embarazadas perderían el embarazo. Se temía también que el paisaje pasando deprisa por la ventanilla dañara la vista de forma permanente, y varios tratados describieron una dolencia nueva de los pasajeros, con temblores e insomnio, atribuida al traqueteo. Ninguna de esas cosas ocurrió, pero se discutieron en revistas médicas serias durante décadas.",
        destacado: { tipo: "frase", frase: "Se avisó de que el paisaje pasando deprisa estropearía la vista." },
      },
      {
        rotulo: "Los túneles",
        texto:
          "El miedo más extendido fueron los túneles. Se creía que la oscuridad repentina y el aire cargado de humo provocarían desmayos, ataques de nervios y hasta locura, y hubo compañías que instalaron faroles de aceite en los vagones solo para calmar a los viajeros de esos tramos. Otro temor era la privacidad: un compartimento cerrado, con desconocidos y sin visibilidad, se consideró un peligro moral y una invitación al crimen, así que en los primeros trenes se llegaron a poner mirillas entre compartimentos y a exigir que las mujeres viajaran acompañadas.",
        destacado: { tipo: "cifra", cifra: "40", unidad: "km/h daban miedo en 1830" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En la inauguración de aquella línea murió un diputado atropellado por la locomotora al bajarse a saludar en una parada, lo que dio munición a los agoreros durante años; fue la primera víctima ferroviaria de la historia. Aun así, en veinte años Inglaterra tenía diez mil kilómetros de vía. Y quedó una expresión que se sigue usando: los primeros vagones de tercera clase eran plataformas descubiertas donde se viajaba de pie, sin techo, sin asientos y sin nada a lo que agarrarse cuando el tren frenaba. De ahí viene lo de viajar como ganado, que entonces era una descripción literal.",
      },
    ],
  },

  {
    id: "metro-londres",
    titulo: "El primer metro del mundo iba con vapor",
    gancho: "Locomotoras de carbón en un túnel cerrado bajo la ciudad. El humo era el problema y no lo resolvieron.",
    categoria: "Trenes",
    color: "var(--plum)",
    encargo: "Un andén subterráneo abovedado de ladrillo, iluminado con lámparas de gas.",
    entrada:
      "Londres, enero de 1863. Se inaugura la primera línea de ferrocarril subterráneo del mundo, seis kilómetros bajo el centro de una ciudad de tres millones de habitantes que está colapsada de carruajes. La electricidad todavía no existe como fuerza motriz, así que los trenes que van a circular por ese túnel cerrado son locomotoras de vapor alimentadas con carbón.",
    paginas: [
      {
        rotulo: "La zanja",
        texto:
          "No se excavó en profundidad: se abrió una zanja enorme por el medio de las calles, se construyó el túnel dentro con bóveda de ladrillo y se volvió a tapar, un método que obligó a derribar cientos de casas y a desviar alcantarillas y tuberías de gas por el camino. Durante las obras reventó un colector y el túnel se llenó de agua sucia, retrasando todo meses. Aun así, el día de la inauguración viajaron treinta y ocho mil personas, y en el primer año se vendieron nueve millones y medio de billetes.",
        destacado: { tipo: "cifra", cifra: "38.000", unidad: "viajeros el primer día" },
      },
      {
        rotulo: "El humo",
        texto:
          "El problema del aire nunca llegó a resolverse. Se diseñaron locomotoras que retenían el vapor en un depósito para soltarlo al aire libre, se abrieron rejillas en las calles y se dejaron tramos descubiertos, y aun así los túneles se llenaban de una niebla espesa y sulfurosa que picaba en los ojos. La compañía sostenía en público que aquel ambiente era saludable y bueno para el asma; hubo empleados que declararon lo contrario ante una comisión parlamentaria. Se recomendaba a los viajeros dejarse crecer la barba para filtrar el aire.",
        destacado: { tipo: "frase", frase: "Se aconsejaba dejarse barba para filtrar el aire del túnel." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La electrificación llegó en 1890 con una línea nueva, esta sí excavada en profundidad con un escudo giratorio, y de aquellos túneles estrechos y redondos viene el apodo con el que los londinenses llaman a su metro. La red tiene hoy más de cuatrocientos kilómetros y sigue usando tramos de aquel primer túnel de 1863. Y el mapa que todo el mundo conoce, con las líneas de colores en ángulos rectos, no es un plano de la ciudad: lo dibujó en 1931 un delineante de circuitos eléctricos que aplicó la lógica de un esquema de cables. Las distancias son falsas y la geografía también, y funciona mucho mejor así.",
      },
    ],
  },
];
