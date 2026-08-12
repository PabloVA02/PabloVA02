import type { Short } from "../shorts";

/* ==========================================================================
   Las gasolineras.

   El local más repetido del planeta y uno de los peor mirados. El tema se
   estropea si se cuenta como historia del automóvil, que ya está en
   motor.ts, o como queja sobre el precio del combustible.

   La regla del tema: cada short arranca de ALGO QUE EL LECTOR HA HECHO
   CIEN VECES (poner el caño, oír el clic, pagar dentro) y explica el
   mecanismo o la cuenta que hay detrás. Nada de nostalgia de carretera.
   ========================================================================== */

export const GASOLINERAS: Short[] = [
  {
    id: "la-primera-gasolinera",
    titulo: "Gasolina en la droguería",
    gancho: "Se compraba en latas, como un producto de limpieza, y se volcaba en el depósito con un embudo.",
    categoria: "Historia",
    color: "var(--clay)",
    encargo: "Surtidor antiguo con cilindro de cristal graduado en lo alto, junto a un coche de época.",
    fotos: [
      {
        archivo: "Hungary Fortepan 94719.jpg",
        autor: "Un surtidor de gasolina en Hungría, 1968. Fortepan.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Hungary_Fortepan_94719.jpg",
        foco: "50% 45%",
        alt: "Un surtidor rojo y blanco con la manguera enrollada en el suelo, ante una estación de líneas rectas.",
      },
      {
        archivo: "1913 Ford T pic1.JPG",
        autor: "Un Ford T de 1913, de los coches que había que llenar a mano con latas y un embudo. Fotografía de Alf van Beem.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:1913_Ford_T_pic1.JPG",
        foco: "50% 45%",
        alt: "Un automóvil antiguo granate con radiador de latón, capota de lona y ruedas de radios de madera.",
      },
      {
        archivo: "FtLauderdaleAntiqueCarMusuemAug08GasPumpsPackardParts.jpg",
        autor: "Dos surtidores antiguos con el cilindro de cristal graduado a la vista. Museo del Automóvil de Fort Lauderdale. Fotografía de Infrogmation.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:FtLauderdaleAntiqueCarMusuemAug08GasPumpsPackardParts.jpg",
        foco: "50% 55%",
        alt: "Dos columnas rojas rematadas por un cilindro de cristal con marcas de litros, con mangueras colgando.",
      },
      {
        archivo: "DZ6 2617 Empty Shell station at night - bright lights and clean pumps ready for early-morning customers. (55017570203).jpg",
        autor: "Una estación de servicio vacía de madrugada. Fotografía de PattayaPatrol.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DZ6_2617_Empty_Shell_station_at_night_-_bright_lights_and_clean_pumps_ready_for_early-morning_customers._(55017570203).jpg",
        foco: "50% 62%",
        alt: "Una marquesina iluminada sobre varias islas de surtidores en una explanada vacía por la noche.",
      },
    ],
    entrada:
      "Estados Unidos, 1905. Hay ya decenas de miles de automóviles circulando por el país y no existe todavía ni un solo sitio pensado para llenarlos. Nadie ha construido nunca uno porque a nadie se le ha ocurrido que haga falta: la gasolina se compra en latas, en droguerías, en farmacias y en ferreterías, junto a los productos de limpieza, y se vuelca en el depósito con un embudo en mitad de la calle. Aquel año abre en una ciudad del medio oeste el primer local dedicado únicamente a despachar combustible, y con él empieza a inventarse todo lo demás.",
    paginas: [
      {
        rotulo: "Latas y embudos",
        texto:
          "Durante los primeros veinte años del automóvil, repostar consistió en comprar latas y vaciarlas con un embudo. La gasolina se vendía en farmacias, en droguerías y en ferreterías, porque su uso normal era disolver grasa. Era un residuo molesto de las refinerías, que buscaban sobre todo queroseno para las lámparas de casa. El sistema tenía todos los inconvenientes imaginables, empezando por el riesgo de manejar un líquido inflamable con un embudo. También era imposible saber qué te vendían, porque cada lata traía una mezcla distinta y muchas venían sucias. El filtro de un motor de entonces se atascaba cada pocos cientos de kilómetros por ese motivo.",
        destacado: { tipo: "frase", frase: "La gasolina era un residuo molesto de las refinerías." },
      },
      {
        rotulo: "El surtidor",
        texto:
          "El aparato que cambió todo fue una bomba con manguera conectada a un depósito enterrado bajo la acera. Los primeros modelos eran de manivela y llevaban encima un cilindro de cristal graduado a la vista. El empleado subía la gasolina hasta llenar el cilindro, y el cliente veía con sus ojos cuánto le echaban. Ese cristal no era decoración, sino la respuesta a una desconfianza justificada por años de latas turbias. Enterrar el depósito resolvía además el problema de la seguridad, porque los vapores pesan más que el aire y se acumulan. Bajo tierra la temperatura es estable y no hay chispa posible, y por eso siguen ahí hoy.",
        destacado: { tipo: "cifra", cifra: "1905", unidad: "el año del primer local solo para repostar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un tipo de local que se ha copiado igual en todo el planeta, con la marquesina, las islas y la tienda. Quedó también un oficio que ha desaparecido casi por completo, el del empleado que llenaba el depósito y limpiaba el parabrisas. El autoservicio se impuso desde los años setenta, aunque en algún estado de Estados Unidos sigue prohibido llenarlo uno mismo. Y quedó una lección comercial que se repite con cada tecnología nueva, porque el invento no basta. Hace falta además la red que lo alimenta, y el coche no despegó hasta que hubo dónde llenarlo.",
      },
    ],
  },
  {
    id: "por-que-el-surtidor-se-para",
    titulo: "La pistola que se para sola",
    gancho: "No hay sensor ni electrónica. Hay un tubito que respira aire, y en cuanto se tapa el mecanismo se suelta.",
    categoria: "Tecnología",
    color: "var(--slate)",
    encargo: "Pistola de surtidor metida en el depósito de un coche, vista desde arriba.",
    fotos: [
      {
        archivo: "Petrol pump mp3h0354.jpg",
        autor: "Pistola de surtidor metida en la boca del depósito de un coche. Fotografía de Rama.",
        licencia: "CC BY-SA 2.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Petrol_pump_mp3h0354.jpg",
        foco: "50% 50%",
        alt: "Pistola verde de gasolinera encajada en el depósito de un coche gris, vista de cerca.",
      },
      {
        archivo: "Petrol pump mp3h0355.jpg",
        autor: "La misma pistola de surtidor, desde otro ángulo. Fotografía de Rama.",
        licencia: "CC BY-SA 2.0 fr",
        fuente: "https://commons.wikimedia.org/wiki/File:Petrol_pump_mp3h0355.jpg",
        foco: "50% 50%",
        alt: "Detalle del caño y el gatillo de una pistola de gasolinera apoyada en el coche.",
      },
      {
        archivo: "DZ6 2617 Empty Shell station at night - bright lights and clean pumps ready for early-morning customers. (55017570203).jpg",
        autor: "Una gasolinera vacía de madrugada, con los surtidores iluminados.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:DZ6_2617_Empty_Shell_station_at_night_-_bright_lights_and_clean_pumps_ready_for_early-morning_customers._(55017570203).jpg",
        foco: "50% 50%",
        alt: "Estación de servicio vacía de noche, con la marquesina encendida y los surtidores alineados.",
      },
      {
        archivo: "SPBU Pertamina 2022.jpg",
        autor: "Surtidores de una estación de servicio. Fotografía de Henri Aja.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:SPBU_Pertamina_2022.jpg",
        foco: "50% 50%",
        alt: "Fila de surtidores de combustible bajo la marquesina de una gasolinera.",
      },
    ],
    entrada:
      "Estados Unidos, 1939. Repostar sigue exigiendo que alguien vigile el depósito para que no se desborde, y los derrames son constantes, sucios y peligrosos, porque la gasolina en el suelo arde con cualquier chispa. Un ingeniero patenta entonces una pistola que se cierra sola en el instante exacto en que el líquido llega al borde, sin que nadie tenga que estar mirando dentro. Lo llamativo del invento es lo que no lleva: no hay electricidad, no hay sensores y no hay nada que se pueda quedar sin batería. Funciona con la presión del aire y un diafragma de goma, y sigue funcionando igual casi noventa años después.",
    paginas: [
      {
        rotulo: "El tubito",
        texto:
          "Dentro del caño de la pistola hay un tubo muy fino que baja hasta la punta y termina en un agujerito. El otro extremo de ese tubo llega a una cámara cerrada por una membrana de goma flexible. Cuando la gasolina corre por el caño, arrastra el aire del tubito y crea una succión pequeña. Mientras el agujerito de la punta esté al aire libre, entra aire de sobra y la succión no llega a nada. En cuanto el nivel del depósito sube y tapa ese agujero, el aire deja de entrar de golpe. La succión vacía entonces la cámara, la membrana se hunde y suelta el gatillo, todo en menos de un segundo.",
        destacado: { tipo: "frase", frase: "Se tapa un agujerito y el gatillo se suelta solo." },
      },
      {
        rotulo: "Por qué falla",
        texto:
          "El sistema explica de paso los dos comportamientos raros que conoce cualquiera que reposte a menudo. El primero es el corte prematuro, que ocurre cuando la espuma o un chorro salpicado tapan el agujero antes de tiempo. Suele arreglarse metiendo la pistola un poco menos o echando más despacio, porque así no salpica. El segundo es la costumbre de seguir echando después del corte, para redondear el importe a un número entero. Los fabricantes lo desaconsejan, porque ese exceso llena el hueco reservado para que el combustible se dilate con el calor. Cuando se dilata, la gasolina de más acaba en el filtro de vapores y lo estropea.",
        destacado: { tipo: "cifra", cifra: "1939", unidad: "el año de la pistola que se cierra sola" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una pieza que casi nadie sabe que es un invento, porque parece que la máquina sepa por sí sola cuándo parar. Quedó también el gancho de la pistola, que permitía dejarla puesta mientras el conductor hacía otra cosa. Varios países lo han prohibido después, porque un depósito llenándose sin nadie delante ha provocado más de un incendio. Quedó además la funda de goma del caño, que no está para proteger la pintura del coche. Sirve para atrapar los vapores que salen del depósito mientras se llena y devolverlos al tanque enterrado de abajo.",
      },
    ],
  },
  {
    id: "la-gasolinera-que-vende-cafe",
    titulo: "La gasolinera vive del café",
    gancho: "El margen del combustible son céntimos por litro. El de un café pasa del cincuenta por ciento.",
    categoria: "Empresas",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Interior de tienda de gasolinera con la máquina de café y la caja al fondo.",
    entrada:
      "Todo el mundo, con el modelo de tienda consolidado desde los años ochenta del siglo XX. Un conductor entra a echar cincuenta euros de combustible y sale con un café de dos. La cuenta parece obvia y está al revés, porque el margen que deja el combustible es de unos pocos céntimos por litro y el del café pasa del cincuenta por ciento.",
    paginas: [
      {
        rotulo: "El margen",
        texto:
          "El precio de un litro de combustible se compone casi todo de impuestos y del coste del crudo. Lo que se queda la estación son unos pocos céntimos, y encima con el dinero adelantado durante días. Un café cuesta unos veinte céntimos de producto y se vende por más de un euro. La bolsa de patatas, el bocadillo y la bebida fría funcionan con proporciones parecidas o mejores. Por eso el negocio real de una estación moderna está dentro y no fuera, y el surtidor es el reclamo. En muchas cadenas la tienda aporta más de la mitad del beneficio ocupando una fracción del terreno.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "% del beneficio sale de la tienda" },
      },
      {
        rotulo: "El diseño",
        texto:
          "Todo el local está montado alrededor de esa cuenta, y se nota en cuanto uno se fija. El pago casi nunca está junto a la puerta, sino al fondo, para que haya que cruzar la tienda entera. La máquina de café se coloca a la vista desde el surtidor, y el olor se deja escapar a propósito. Los productos de capricho van a la altura de los ojos y junto a la caja, donde se decide sin pensar. Hasta el baño limpio y gratis tiene una función comercial, porque obliga a entrar y multiplica las paradas. Las cadenas que peor lo hacen son las que tratan la tienda como un añadido del surtidor.",
        destacado: { tipo: "frase", frase: "El pago está al fondo para cruzar la tienda entera." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un modelo que se está poniendo a prueba con el coche eléctrico, porque el tiempo de parada cambia. Llenar un depósito lleva cinco minutos y cargar una batería lleva veinte o más, aunque sea rápida. Eso multiplica el tiempo que el cliente pasa dentro, y las cadenas lo están recibiendo como una buena noticia. Las estaciones nuevas se diseñan ya con mesas, con enchufes y con carta, más parecidas a una cafetería que a un taller. Y quedó el círculo cerrado, porque el sitio que nació para vender un disolvente de farmacia acaba vendiendo bocadillos.",
      },
    ],
  },
];
