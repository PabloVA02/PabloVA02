import type { Short } from "../shorts";

/* ==========================================================================
   Las rotondas.

   El cruce que no necesita semáforo. El tema se estropea si se convierte
   en queja de conductor o en anécdota sobre las esculturas del centro.

   La regla del tema: cada short demuestra que EL CAMBIO DECISIVO NO FUE
   TECNOLÓGICO, sino una norma, una forma o un bordillo. Y siempre con la
   cifra de puntos de choque o de accidentes por delante, porque es lo que
   convierte una opinión en un hecho.
   ========================================================================== */

export const ROTONDAS: Short[] = [
  {
    id: "por-que-son-mas-seguras",
    titulo: "La rotonda es más segura por una razón geométrica",
    gancho: "En un cruce normal hay treinta y dos puntos donde dos coches pueden chocar. En una rotonda hay ocho, y ninguno es frontal.",
    categoria: "Ciudades",
    color: "var(--slate)",
    encargo: "Rotonda vista desde el aire con los coches trazando la curva.",
    entrada:
      "Reino Unido, 1966. Hasta ese año las glorietas funcionaban mal, porque el que entraba tenía preferencia y se llenaban hasta bloquearse. Aquel año el país cambió la norma y dio la preferencia al que ya está dentro. Con ese cambio de una sola línea, la rotonda pasó de ser un estorbo a ser el cruce más seguro que existe.",
    paginas: [
      {
        rotulo: "Puntos de choque",
        texto:
          "En un cruce de dos calles hay treinta y dos puntos donde las trayectorias de dos coches se cortan. Cada uno es un choque posible, y los peores son los frontales y los laterales en ángulo recto. En una rotonda esos puntos bajan a ocho, y ninguno es frontal, porque todos los coches giran en el mismo sentido. Los choques que quedan son de refilón y a poca velocidad, que son los que la gente sobrevive. La curva obliga además a bajar a unos treinta por hora, y a esa velocidad un golpe cambia de categoría. Los estudios en varios países coinciden en que sustituir un cruce por una rotonda reduce mucho los heridos graves.",
        destacado: { tipo: "cifra", cifra: "32", unidad: "puntos de choque tiene un cruce normal" },
      },
      {
        rotulo: "La preferencia",
        texto:
          "La regla de dar preferencia al que circula por el anillo parece un detalle y es lo que hace que funcione. Con la norma antigua, el anillo se llenaba de coches que no podían salir porque seguían entrando otros. Con la norma nueva el anillo se vacía siempre, así que nunca llega a bloquearse del todo. Esa diferencia convirtió la rotonda en un cruce que no necesita semáforo y que funciona igual con un apagón. Tiene su límite, porque cuando una de las entradas trae muchísimo más tráfico que las demás, sus coches no encuentran hueco nunca. En esos casos se ponen semáforos dentro de la propia rotonda, que es la solución más fea.",
        destacado: { tipo: "frase", frase: "Sin semáforo, una rotonda funciona igual en un apagón." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron decenas de miles de rotondas repartidas por Europa, con Francia y España a la cabeza del recuento mundial. Quedó también una diferencia cultural curiosa, porque en Estados Unidos tardaron décadas en aceptarlas y allí siguen siendo minoría. Quedó el problema del centro, ese espacio redondo que los ayuntamientos llenan de esculturas, de fuentes y hasta de aviones jubilados sin que nadie sepa muy bien por qué. Y quedó la comprobación de que a veces no hace falta tecnología para arreglar algo, porque el cambio decisivo de 1966 no fue una máquina nueva, sino una frase en el reglamento.",
      },
    ],
  },
  {
    id: "la-rotonda-magica",
    titulo: "Hay una rotonda hecha de cinco rotondas",
    gancho: "Parece un error de diseño y lleva medio siglo funcionando mejor que cualquier cruce normal en ese mismo sitio.",
    categoria: "Ciudades",
    color: "var(--clay)",
    curioso: true,
    encargo: "Vista aérea de cinco rotondas pequeñas dispuestas en círculo alrededor de una grande.",
    entrada:
      "Swindon, Inglaterra, 1972. Un ingeniero de tráfico tiene que resolver un cruce donde confluyen cinco carreteras, y ninguna rotonda normal cabe ni da abasto. Su solución fue montar cinco rotondas pequeñas alrededor de una grande, y hacer que en la grande se circule al revés que en las otras. La llamaron la rotonda mágica y sigue en funcionamiento.",
    paginas: [
      {
        rotulo: "Los dos sentidos",
        texto:
          "En el Reino Unido se circula por la izquierda, así que las rotondas se recorren en sentido horario. Las cinco rotondas pequeñas funcionan así, cada una como un cruce corriente entre una carretera y el anillo. El anillo interior, en cambio, se recorre al revés, de manera que los dos flujos giran en direcciones opuestas. Eso permite al conductor elegir el camino más corto hacia su salida, por dentro o por fuera, según le convenga. El resultado reparte el tráfico en muchos tramos cortos, y ninguno se satura porque siempre hay otra ruta. Visto desde el aire parece un dibujo de broma; desde el coche solo hay que ceder el paso.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "rotondas pequeñas alrededor de una grande" },
      },
      {
        rotulo: "Miedo y estadística",
        texto:
          "Aquel cruce sale cada pocos años en las listas de los sitios más aterradores para conducir de Europa. Los datos dicen justo lo contrario, porque tiene menos accidentes graves que los cruces convencionales de tamaño parecido. La explicación es la misma que en cualquier rotonda, y encima aquí funciona con más fuerza todavía. Un sitio que parece complicado obliga a bajar la velocidad, a mirar más y a no dar nada por hecho. Los ingenieros de tráfico llaman a ese efecto incertidumbre saludable y lo usan a propósito en zonas de peatones. Quitar señales y líneas pintadas hace conducir peor sobre el papel y mejor en la práctica.",
        destacado: { tipo: "frase", frase: "Lo que parece complicado obliga a mirar y a ir despacio." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó funcionando después de medio siglo, con las mismas cinco rotondas y sin haber necesitado ninguna reforma seria. Quedaron unas cuantas copias en otras ciudades inglesas y alguna suelta fuera del país. Quedó también una idea que ha salido de la ingeniería de tráfico y ha entrado en el diseño de muchas otras cosas. Cuando un sistema se vuelve tan cómodo que nadie presta atención, los fallos dejan de avisar antes de ocurrir. Y quedó el consuelo para cualquiera que se pierda allí, porque el diseño está pensado para que dar una vuelta de más no cueste nada.",
      },
    ],
  },
  {
    id: "la-rotonda-en-espiral",
    titulo: "La rotonda holandesa obliga a elegir carril antes",
    gancho: "Los carriles van en espiral y están separados por bordillos, así que dentro del anillo no se puede cambiar.",
    categoria: "Ciudades",
    color: "var(--ochre)",
    encargo: "Turborrotonda holandesa desde el aire, con los carriles en espiral y los bordillos separadores.",
    entrada:
      "Países Bajos, 1996. Un profesor de ingeniería de tráfico estudia los accidentes de las rotondas de dos carriles y descubre que casi todos son iguales. Ocurren cuando un coche del carril de fuera y otro del de dentro se cruzan al salir. Su solución fue diseñar los carriles en espiral y separarlos con un bordillo, de manera que nadie pueda cambiarse dentro del anillo.",
    paginas: [
      {
        rotulo: "El corte",
        texto:
          "En una rotonda de dos carriles, el coche que va por dentro tiene que cruzar el carril exterior para salir. Al mismo tiempo, el que va por fuera puede estar dando la vuelta entera para salir más adelante. Los dos ocupan el mismo trozo de asfalto y ninguno ve bien al otro, porque van casi en paralelo. Ese roce lateral es el accidente típico de las rotondas grandes, y las señales pintadas no lo evitan. La espiral resuelve el problema obligando a decidir antes de entrar, porque cada carril lleva a unas salidas concretas. Una vez dentro no hay elección posible, y el bordillo se encarga de que no la haya.",
        destacado: { tipo: "frase", frase: "Se elige carril fuera; dentro ya no se puede cambiar." },
      },
      {
        rotulo: "Lo que cuesta",
        texto:
          "El diseño tiene un precio y sus autores nunca lo han escondido, porque quien se equivoca de carril acaba en otro sitio. No queda más remedio que salir, dar la vuelta y volver a entrar por el carril correcto. Los ingenieros aceptaron ese coste porque una vuelta de más son dos minutos y un roce lateral es una ambulancia. La señalización es por eso más importante que en cualquier otra rotonda, con flechas en el suelo mucho antes de la entrada. Los primeros años hubo bastantes quejas de conductores desorientados, y las cifras de accidentes bajaron igualmente. Los Países Bajos llevan ya varios cientos construidas y siguen sustituyendo las antiguas por este modelo.",
        destacado: { tipo: "cifra", cifra: "1996", unidad: "el año del primer diseño en espiral" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo que se ha copiado en Bélgica, en Alemania, en Polonia y en varias ciudades españolas. Quedó también un debate abierto sobre las bicicletas, porque un carril separado por bordillos es incómodo para quien pedalea. La solución habitual ha sido sacar del anillo a los ciclistas y darles un carril propio por fuera. Y quedó una manera de pensar que recorre todo este tema, porque las tres rotondas contadas resuelven lo mismo de tres formas distintas. Ninguna añade tecnología: cambian la norma, cambian la forma o ponen un bordillo, y con eso les basta.",
      },
    ],
  },
];
