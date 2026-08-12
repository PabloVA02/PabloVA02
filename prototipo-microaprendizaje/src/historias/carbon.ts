import type { Short } from "../shorts";

/* ==========================================================================
   El carbón.

   La piedra negra que movió el mundo durante dos siglos y que se cuenta casi
   siempre desde arriba: toneladas, chimeneas, revolución industrial. Aquí se
   cuenta desde dentro de la mina, que es donde estaba el problema.

   La regla del tema: todo gira alrededor del AIRE. El carbón mata por lo que
   suelta —gas inflamable, gas que asfixia, polvo que explota—, y cada short
   enseña un invento pensado para saber qué se está respirando. Nada de
   estadísticas de producción: un pájaro en una jaula explica más que una
   tabla.
   ========================================================================== */

export const CARBON: Short[] = [
  {
    id: "canario-en-la-mina",
    titulo: "El canario de la mina",
    gancho: "No se llevaba para que muriera: la jaula tenía una botella de oxígeno para revivirlo.",
    categoria: "Carbón",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una jaula metálica pequeña con puerta de cristal y un grifo de latón en un costado.",
    /* De arriba abajo del short: el pájaro, el hombre al que avisa, la jaula
       con su botella de oxígeno y la mina de hoy. */
    fotos: [
      {
        archivo: "Canari en cage, janvier 2022, DSC 1791.jpg",
        autor: "Un canario doméstico en su jaula. Fotografía de Habib M'henni, 2022.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Canari_en_cage,_janvier_2022,_DSC_1791.jpg",
        foco: "45% 45%",
        alt: "Un canario amarillo anaranjado posado en el barrote de una jaula, de perfil y muy cerca.",
      },
      {
        archivo: "Coal Miner 1958.JPG",
        autor: "Minero de carbón de Bachra, India. Fotografía de Biswarup Ganguly, 2009.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Coal_Miner_1958.JPG",
        foco: "55% 45%",
        alt: "Retrato de un minero con casco blanco y pañuelo al cuello, con montones de carbón desenfocados detrás.",
      },
      {
        archivo: "Canary resuscitator apedale.JPG",
        autor: "Una jaula reanimadora de canarios, con la portezuela de cristal y la botella de oxígeno encima. Apedale Heritage Centre. Fotografía de Geni, 2025.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Canary_resuscitator_apedale.JPG",
        foco: "50% 40%",
        alt: "Una caja metálica con una puerta redonda de cristal y rejilla, y una pequeña botella de gas montada encima.",
      },
      {
        archivo: "Coal miners working at Baikaimskaya mine 2.jpg",
        autor: "Galería de la mina de Baikaimskaya, en Kuzbass, con los mineros trabajando al fondo.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Coal_miners_working_at_Baikaimskaya_mine_2.jpg",
        foco: "45% 50%",
        alt: "Una galería de mina que se pierde en la oscuridad, con una cinta transportadora, focos encendidos y siluetas de mineros a lo lejos.",
      },
    ],
    entrada:
      "Reino Unido, 1911. Un fisiólogo que lleva años estudiando por qué mueren los mineros después de las explosiones publica una recomendación práctica: bajar a la mina con un pájaro pequeño en una jaula. No es una superstición de oficio ni una costumbre antigua, sino una propuesta científica basada en cómo respiran los animales pequeños. El pájaro no va a la mina como amuleto ni como sacrificio: va como instrumento de medida. Y su jaula, que es lo que casi nadie sabe, lleva incorporado un sistema para devolverlo a la vida en cuanto ha dado el aviso: una botellita de oxígeno y una portezuela que se cierra.",
    paginas: [
      {
        rotulo: "Por qué un pájaro",
        texto:
          "El peligro después de un derrumbe o una explosión no es el fuego, sino un gas que queda flotando: monóxido de carbono, invisible, sin olor y que se pega a la sangre impidiendo que transporte oxígeno. Un hombre puede respirarlo un buen rato sin notar nada y caer de golpe. Un canario, en cambio, tiene un metabolismo altísimo y un sistema respiratorio que renueva el aire de los pulmones el doble de rápido, así que acusa el gas mucho antes: se desequilibra en la percha, deja de cantar y cae en cuestión de minutos, cuando la concentración todavía es baja para una persona.",
        destacado: { tipo: "frase", frase: "El pájaro acusa el gas mucho antes que el hombre." },
      },
      {
        rotulo: "La jaula con grifo",
        texto:
          "Lo que casi nadie sabe es que la idea nunca fue sacrificar al animal. Las jaulas que se fabricaron para esto son aparatos ingeniosos: llevan una puerta de cristal que se cierra en cuanto el pájaro se tambalea, un compartimento estanco y una botella pequeña de oxígeno con su grifo, de modo que al aislarlo y abrir el gas el canario se recupera en pocos minutos y puede volver a bajar otro día. Los mineros les ponían nombre y los cuidaban como a un compañero, y los equipos de rescate llevaban dos o tres para poder ir turnándolos.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "veces más rápido respira" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Los canarios se retiraron oficialmente de las minas británicas en 1986, sustituidos por detectores electrónicos que dan una lectura numérica y que, a diferencia del pájaro, dicen cuánto gas hay y no solo si hay. Hubo protestas de mineros veteranos, que argumentaban que a un aparato no se le ve la cara. La expresión sobrevivió a la práctica: llamar a algo el canario en la mina significa hoy la señal que avisa de un peligro antes de que sea visible, y se usa en economía, en medicina y en el clima por gente que nunca ha bajado a un pozo.",
      },
    ],
  },

  {
    id: "lampara-que-no-prende",
    titulo: "La llama no cruza la malla",
    gancho: "La llama sigue ardiendo dentro, pero el fuego no sale. El truco es que el metal roba el calor.",
    categoria: "Carbón",
    color: "var(--slate)",
    encargo: "Una lámpara de minero de latón con el cilindro de malla metálica alrededor de la llama.",
    fotos: [
      {
        archivo: "Pozu Tres Amigos 12.jpg",
        autor: "Sala de máquinas de extracción del pozo Tres Amigos, cuenca minera asturiana. Fotografía de SoyXer.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pozu_Tres_Amigos_12.jpg",
        foco: "50% 50%",
        alt: "La gran rueda de una máquina de extracción minera abandonada, dentro de una nave con las paredes cubiertas de verdín.",
      },
      {
        archivo: "Lampe Lux.jpg",
        autor: "Lámpara de seguridad de minero con su cilindro de tela metálica alrededor de la llama. Fotografía de CéCédille, 2018.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Lampe_Lux.jpg",
        foco: "50% 45%",
        alt: "Una lámpara de minero de latón con la llama encerrada tras una malla metálica fina.",
      },
      {
        archivo: "Coal Miners 2001.JPG",
        autor: "Mineros del carbón saliendo del tajo. Fotografía de Biswarup Ganguly.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Coal_Miners_2001.JPG",
        foco: "50% 45%",
        alt: "Un grupo de mineros con la ropa y la cara tiznadas de carbón.",
      },
      {
        archivo: "Pozu Tres Amigos 06.jpg",
        autor: "Instalaciones abandonadas del pozo Tres Amigos, Asturias. Fotografía de SoyXer.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Pozu_Tres_Amigos_06.jpg",
        foco: "50% 50%",
        alt: "Naves y maquinaria de una mina de carbón cerrada, invadidas por la vegetación.",
      },
    ],
    entrada:
      "Inglaterra, 1815. Una explosión en una mina del norte mata a noventa y dos personas y una asociación de vecinos pide ayuda a los científicos del país. El problema es viejo y conocido por todos los que bajan: en las galerías se acumula un gas inflamable que sale de la propia veta según se pica, no huele a nada y prende con cualquier chispa. Y la única luz disponible bajo tierra es una llama desnuda metida en un candil. Iluminar el tajo y volar por los aires son, hasta ese momento, exactamente la misma operación.",
    paginas: [
      {
        rotulo: "El cilindro de malla",
        texto:
          "La solución que encontró un químico londinense en pocos meses es de una elegancia asombrosa. Rodeó la llama con un cilindro de tela metálica de agujeros finísimos. El gas atraviesa la malla y arde dentro de la lámpara, pero la llama no consigue salir, porque el alambre conduce muy bien el calor y lo disipa: al pasar por los agujeros, los gases quemados se enfrían por debajo de la temperatura que necesitan para seguir ardiendo. Además la lámpara avisa. Si hay gas peligroso alrededor, la llama se alarga y toma un tono azulado dentro de la malla, y el minero sabe que tiene que salir de allí.",
        destacado: { tipo: "frase", frase: "El gas arde dentro de la lámpara, pero el fuego no sale." },
      },
      {
        rotulo: "El resultado inesperado",
        texto:
          "El inventor renunció a patentarla y la cedió al uso público, un gesto que se le agradeció con medallas y homenajes. Lo que pasó después es más incómodo y se estudia hoy en los cursos de seguridad como ejemplo clásico. Con una lámpara segura, las empresas pudieron abrir vetas más profundas y más gaseosas que antes estaban descartadas por imposibles, y mandar allí a más gente durante más horas. El número de accidentes por millón de toneladas bajó, pero el número absoluto de muertos en las minas británicas subió durante las décadas siguientes.",
        destacado: { tipo: "cifra", cifra: "1815", unidad: "el año de la lámpara" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el principio físico, que se usa hoy en cualquier fábrica donde haya vapores inflamables: las carcasas cortafuegos de los equipos eléctricos funcionan igual, dejando que la explosión ocurra dentro de una caja que enfría los gases antes de que salgan. Y quedó la lección económica, que tiene nombre propio en los manuales: cuando una medida hace una actividad más segura, la gente la practica más y el riesgo total puede no bajar. Aquella lámpara de latón y alambre se siguió fabricando hasta el siglo XX y todavía se usa alguna, no para alumbrar sino para detectar gas por el color de la llama.",
      },
    ],
  },

  {
    id: "fuego-bajo-el-pueblo",
    titulo: "Sesenta años ardiendo",
    gancho: "Empezó en el vertedero en 1962, bajó a la veta de carbón y ya no hubo forma de apagarlo.",
    categoria: "Carbón",
    color: "var(--clay)",
    encargo: "Una carretera agrietada con vapor saliendo entre el asfalto roto y hierba amarilla.",
    fotos: [
      {
        archivo: "Bodie ghost town (Explored) - Flickr - M McBey.jpg",
        autor: "El pueblo minero abandonado de Bodie, California, 2013.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ABodie%20ghost%20town%20(Explored)%20-%20Flickr%20-%20M%20McBey.jpg",
        foco: "50% 50%",
        alt: "Casas de madera vacías y descoloridas de un pueblo minero abandonado, bajo un cielo azul.",
      },
      {
        archivo: "Mijnterril Beringen 19-07-2023 17-58-50.jpg",
        autor: "Escombrera de la mina de Beringen, Bélgica, 2023.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AMijnterril%20Beringen%2019-07-2023%2017-58-50.jpg",
        foco: "50% 55%",
        alt: "Montaña artificial de estériles de carbón cubierta a medias de vegetación.",
      },
      {
        archivo: "Abandoned mining town in Bolivia.jpg",
        autor: "Pueblo minero abandonado en Bolivia, 2017.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AAbandoned%20mining%20town%20in%20Bolivia.jpg",
        foco: "50% 50%",
        alt: "Casas vacías de un poblado minero en el altiplano, con la sierra al fondo.",
      },
      {
        archivo: "Glen Davis old Mining town.jpg",
        autor: "Restos del pueblo minero de Glen Davis, Australia, 2014.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AGlen%20Davis%20old%20Mining%20town.jpg",
        foco: "50% 50%",
        alt: "Ruinas de ladrillo de unas instalaciones mineras invadidas por la hierba.",
      },
    ],
    entrada:
      "Pensilvania, mayo de 1962. Un pueblo minero de más de mil habitantes limpia su vertedero antes de las fiestas del Día de los Caídos quemando la basura acumulada, como venía haciendo todos los años sin mayor problema. Lo que nadie tiene en cuenta es que el vertedero ocupa una antigua cantera y que en su fondo hay una grieta abierta que comunica con las galerías abandonadas de la mina, llenas todavía de carbón sin extraer. El fuego baja tranquilamente por esa grieta, prende la veta de carbón que hay debajo del pueblo y ya nadie consigue apagarlo nunca.",
    paginas: [
      {
        rotulo: "Cómo arde una veta",
        texto:
          "Un incendio de carbón subterráneo no se parece a ningún otro. Arde despacio, sin llama visible y a temperaturas que superan los quinientos grados, alimentado por el aire que entra por cualquier grieta o pozo antiguo. Apagarlo exige excavar y retirar todo el carbón que arde, o inundar la veta entera, y en los años sesenta se intentaron varias veces las dos cosas sin conseguirlo, porque el fuego avanzaba por galerías que no estaban cartografiadas. Cada intento fallido costaba una fortuna y el frente se movía unos metros más, siempre por debajo del pueblo.",
        destacado: { tipo: "cifra", cifra: "500", unidad: "grados bajo el pueblo" },
      },
      {
        rotulo: "La grieta",
        texto:
          "Durante veinte años la gente convivió con ello: humo en los sótanos, jardines calientes en invierno, nieve que no cuajaba en algunos puntos. El asunto cambió en 1981, cuando un niño de doce años cayó en un socavón que se abrió de golpe en el jardín de su casa y del que lo sacó su primo agarrándolo del brazo. El agujero echaba monóxido de carbono. Al año siguiente el gobierno aprobó cuarenta y dos millones de dólares para comprar todas las casas y realojar a los vecinos, y las viviendas se fueron demoliendo una a una.",
        destacado: { tipo: "frase", frase: "El socavón se abrió en un jardín, con un niño encima." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedan las calles. El pueblo tiene hoy menos de diez habitantes, que ganaron en los tribunales el derecho a quedarse hasta su muerte, y una retícula de asfalto con aceras, bocas de riego y escalones que ya no llevan a ninguna casa. En 2002 se le retiró el código postal, que es la forma administrativa de dejar de existir. El fuego sigue ardiendo hacia el noreste y los cálculos dicen que hay carbón suficiente para dos siglos más. Todo empezó con la limpieza del vertedero antes de unas fiestas, en una cantera que nadie había tapado bien.",
      },
    ],
  },
];
