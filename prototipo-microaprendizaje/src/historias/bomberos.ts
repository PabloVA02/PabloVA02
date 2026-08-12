import type { Short } from "../shorts";

/* ==========================================================================
   Bomberos y policía.

   El riesgo del tema es el homenaje: el héroe, el uniforme, el sacrificio.
   Emociona un segundo y no cuenta nada.

   La regla del tema: los servicios de emergencia se cuentan por LA NORMA
   QUE SALIÓ DE UN DESASTRE. Casi todo lo que hoy parece de sentido común
   —que una puerta abra hacia fuera, que se apague el fuego de cualquiera,
   que un agente lleve un número visible— se escribió después de que algo
   saliera muy mal, y se puede fechar.

   Y el short termina siempre en un objeto o un gesto cotidiano, para que
   el lector vea la norma la próxima vez que la use.
   ========================================================================== */

export const BOMBEROS: Short[] = [
  {
    id: "placas-de-seguro",
    titulo: "El seguro nació del fuego",
    gancho: "Cada compañía tenía sus bomberos y su placa. Con la placa de otra, pasaban de largo.",
    categoria: "Bomberos",
    color: "var(--clay)",
    encargo: "Una placa metálica antigua con un emblema clavada en una fachada de ladrillo.",
    fotos: [
      {
        archivo: "Verschuier-fire.jpg",
        autor: "El gran incendio de Londres visto desde el río, óleo de Lieve Verschuier, 1666.",
        licencia: "Dominio público",
        pdPorEdad: 1686,
        fuente: "https://commons.wikimedia.org/wiki/File:Verschuier-fire.jpg",
        foco: "50% 45%",
        alt: "La ciudad ardiendo al fondo con el cielo rojo, y en primer término barcas cargadas de gente huyendo por el agua.",
      },
      {
        archivo: "Great Fire London.jpg",
        autor: "El incendio de 1666 pintado por un artista anónimo hacia 1675. Museum of London.",
        licencia: "Dominio público",
        pdPorEdad: 1700,
        fuente: "https://commons.wikimedia.org/wiki/File:Great_Fire_London.jpg",
        foco: "50% 50%",
        alt: "Una línea entera de casas en llamas junto al Támesis, con el puente de Londres a la izquierda y la Torre a la derecha.",
      },
      {
        archivo: "Two old fire insurance plaques. 11 Princelet Street.jpg",
        autor: "Dos placas de compañías de seguros contra incendios en una fachada de Londres. Fotografía de Maggie Jones.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Two_old_fire_insurance_plaques._11_Princelet_Street.jpg",
        foco: "50% 45%",
        alt: "Dos placas de metal, una verdosa con tres caras y otra con un sol y un número, clavadas en un muro de ladrillo.",
      },
      {
        archivo: "1882 Horse-drawn Shand, Mason & Co. steam fire engine pic2.JPG",
        autor: "Bomba de vapor de incendios tirada por caballos, de 1882. Fotografía de Alf van Beem.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:1882_Horse-drawn_Shand,_Mason_%26_Co._steam_fire_engine_pic2.JPG",
        foco: "50% 62%",
        alt: "Una máquina de latón y hierro sobre ruedas de radios rojos, con la caldera vertical y la manguera enrollada detrás.",
      },
    ],
    entrada:
      "Londres, septiembre de 1666. Un fuego que empieza de madrugada en una panadería de Pudding Lane se extiende con el viento por calles de casas de madera pegadas unas a otras y arde durante cuatro días seguidos. Cuando por fin se apaga han desaparecido trece mil casas, ochenta y siete iglesias y la catedral, y ochenta mil personas se han quedado sin techo, acampadas en los campos de las afueras. No existe ningún servicio de bomberos organizado, sino vecinos con cubos y ganchos para derribar tejados, y tampoco existe ninguna manera de recuperar lo perdido: la reconstrucción hay que pagarla del propio bolsillo.",
    paginas: [
      {
        rotulo: "La póliza",
        texto:
          "Dos años después, un médico y constructor abrió una oficina donde, a cambio de una cantidad anual calculada según el número de chimeneas de la casa, se prometía pagar los daños si la vivienda ardía. Fue el primer seguro de incendios de la historia y el negocio funcionó tan bien que en pocos años había varias compañías compitiendo entre ellas. Todas descubrieron enseguida lo mismo: sale más barato apagar el fuego que indemnizar al cliente. Así que empezaron a mantener sus propias brigadas, con bombas de mano tiradas por caballos y hombres uniformados con los colores de la empresa.",
        destacado: { tipo: "cifra", cifra: "13.000", unidad: "casas ardieron en cuatro días" },
      },
      {
        rotulo: "La placa",
        texto:
          "Para saber a quién había que socorrer, las compañías repartían una placa de metal con su emblema que el asegurado clavaba en la fachada, bien visible desde la calle. La brigada llegaba, miraba la pared y actuaba en consecuencia: hay casos documentados de bomberos que se quedaron parados mirando el incendio, o que dieron media vuelta, porque la placa era de la competencia. Hubo también peleas entre brigadas rivales delante de una casa ardiendo, discutiendo de quién era el cliente. Y el sistema tenía un agujero evidente: las casas sin placa no las apagaba nadie.",
        destacado: { tipo: "frase", frase: "Miraban la placa de la fachada antes de sacar la manguera." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquello duró casi dos siglos. En 1833 las compañías de Londres acabaron juntando sus brigadas en una sola, sencillamente porque duplicar el material salía carísimo, y en 1865 el servicio pasó a ser público y a apagar los incendios de todo el mundo sin mirar la fachada de nadie. El modelo se copió en el resto de Europa a lo largo de las décadas siguientes. Las placas se siguen viendo clavadas en casas antiguas de muchas ciudades británicas y las buscan los coleccionistas. Y el seguro de hogar que pagamos hoy viene en línea recta de aquella panadería.",
      },
    ],
  },

  {
    id: "puertas-hacia-fuera",
    titulo: "La puerta abría al revés",
    gancho: "En un taller de Nueva York murieron ciento cuarenta y seis personas detrás de una puerta atascada.",
    categoria: "Bomberos",
    color: "var(--slate)",
    encargo: "Una barra antipánico metálica en una puerta gris de salida de emergencia.",
    fotos: [
      {
        archivo: "Antique sewing machine (Unsplash).jpg",
        autor: "Máquina de coser de manivela de principios del siglo XX. Fotografía de Annie Spratt.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Antique_sewing_machine_(Unsplash).jpg",
        foco: "50% 45%",
        alt: "Máquina de coser antigua negra con adornos dorados y una bobina de hilo, sobre una mesa de madera.",
      },
      {
        archivo:
          "Fire Escape, Commercial Building, N 1st Avenue and 3rd Street, Warehouse District, Minneapolis, MN - 51762652118.jpg",
        autor: "Escalera de incendios exterior de hierro en un edificio industrial de Minneapolis.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Fire_Escape,_Commercial_Building,_N_1st_Avenue_and_3rd_Street,_Warehouse_District,_Minneapolis,_MN_-_51762652118.jpg",
        foco: "50% 50%",
        alt: "Escalera metálica de incendios en zigzag colgada de la fachada de ladrillo de un edificio antiguo.",
      },
      {
        archivo: "New York - New York City - NARA - 68146037.jpg",
        autor: "Manhattan desde el aire hacia 1920, con los edificios altos de la época. Archivos Nacionales de Estados Unidos.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:New_York_-_New_York_City_-_NARA_-_68146037.jpg",
        foco: "50% 50%",
        alt: "Vista aérea antigua en blanco y negro del bajo Manhattan, con edificios altos apiñados junto al agua.",
      },
      {
        archivo: "Frankfurt, puerta.jpg",
        autor: "Detalle de una puerta con su herraje, en Fráncfort.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Frankfurt,_puerta.jpg",
        foco: "50% 50%",
        alt: "Primer plano del canto de una puerta con su bisagra y su manilla metálica.",
      },
    ],
    entrada:
      "Nueva York, 25 de marzo de 1911. En los tres últimos pisos de un edificio de diez plantas trabajan unas quinientas personas, casi todas mujeres jóvenes y emigrantes, cosiendo blusas en mesas largas rodeadas de retales y de aceite de máquina. A las cuatro y media de la tarde, un sábado, poco antes de terminar la jornada, empieza un fuego en un cubo de recortes de tela debajo de una de las mesas. Lo que pasa en la media hora siguiente cambiará las puertas de todos los edificios del mundo.",
    paginas: [
      {
        rotulo: "Las puertas",
        texto:
          "El fuego corrió por los retales y el aceite de las máquinas en cuestión de minutos. Las escaleras interiores eran estrechas y una de las dos salidas estaba cerrada con llave, una práctica habitual entonces para controlar los robos y las salidas al baño. La otra puerta abría hacia dentro, así que la presión de la gente que empujaba la dejó bloqueada. La escalera de incendios exterior, de hierro y mal anclada al muro, se retorció con el calor y se desprendió con personas encima. Las escaleras de los bomberos llegaban al sexto piso, tres por debajo del taller.",
        destacado: { tipo: "frase", frase: "Una salida cerrada con llave y la otra abriendo hacia dentro." },
      },
      {
        rotulo: "La calle",
        texto:
          "Murieron ciento cuarenta y seis personas en menos de media hora, la mayoría de entre dieciséis y veintitrés años. Muchas saltaron desde las ventanas delante de una multitud que se había parado en la acera y que no podía hacer nada; las lonas de los bomberos se rompían con el impacto. Los dos dueños de la fábrica escaparon por la azotea, fueron juzgados por homicidio y absueltos, y cobraron después del seguro bastante más de lo que pagaron a las familias en indemnizaciones. El entierro colectivo reunió a más de trescientas mil personas bajo la lluvia.",
        destacado: { tipo: "cifra", cifra: "146", unidad: "muertos en menos de media hora" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "En los dos años siguientes se aprobaron decenas de leyes que hoy parecen de cajón: puertas que abren siempre hacia fuera, salidas que no se pueden cerrar con llave mientras haya gente dentro, rociadores automáticos en los techos, simulacros obligatorios y un límite de personas por planta. Se creó además un cuerpo de inspectores con poder para cerrar locales en el acto. El edificio sigue en pie, pertenece a una universidad y tiene una placa en la esquina. Cada vez que alguien empuja una puerta de emergencia y esta cede hacia fuera, está usando aquella tarde.",
      },
    ],
  },

  {
    id: "policia-desarmada",
    titulo: "Policía sin armas",
    gancho: "Londres llevaba cuarenta años rechazando tener policía. Solo la aceptó si parecía inofensiva.",
    categoria: "Bomberos",
    color: "var(--plum)",
    encargo: "Una casaca azul de uniforme del siglo XIX con un número cosido en el cuello.",
    entrada:
      "Londres, 1829. La ciudad tiene un millón y medio de habitantes y ninguna policía. La vigilancia la hacen serenos ancianos y cazarrecompensas que cobran por detenido, un sistema que casi nadie considera fiable. La palabra policía suena a Francia y a espionaje, y el Parlamento lleva cuarenta años rechazando todas las propuestas que llegan.",
    paginas: [
      {
        rotulo: "El uniforme azul",
        texto:
          "El ministro que sacó la ley adelante entendió que el problema era la desconfianza y diseñó el cuerpo entero para desactivarla. Los uniformes se hicieron azules y no rojos, para que no se parecieran a los del ejército; los agentes patrullaban desarmados, con una porra de madera escondida bajo la casaca, y llevaban un número cosido bien visible para que cualquiera pudiera denunciarlos por su actuación. Iban a pie y siempre por la misma ruta, de manera que los vecinos les vieran la cara todos los días. Y tenían prohibido intervenir en asuntos políticos.",
        destacado: { tipo: "frase", frase: "Azules y no rojos, para no parecerse al ejército." },
      },
      {
        rotulo: "Los principios",
        texto:
          "Se les repartió por escrito un conjunto de principios que empezaba con una idea llamativa: que la prueba de que el trabajo está bien hecho no es el número de detenciones, sino la ausencia de delito, y que la policía es el público y el público es la policía, porque los agentes solo hacen a jornada completa lo que corresponde a todos los ciudadanos. Al principio les tiraban piedras y les insultaban por la calle. En pocos años, sin embargo, la delincuencia en la zona central bajó de forma clara y las ciudades vecinas empezaron a copiar el modelo entero.",
        destacado: { tipo: "cifra", cifra: "1829", unidad: "el año de la primera policía moderna" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La costumbre de patrullar sin arma de fuego ha aguantado casi dos siglos: hoy, la inmensa mayoría de los policías británicos siguen saliendo a la calle desarmados, con unidades especializadas para lo demás, y es uno de los pocos países del mundo donde eso ocurre. A los agentes se les sigue llamando por un apodo que salió del nombre de pila de aquel ministro. Y la idea de la que partió todo, que un cuerpo policial funciona cuando la gente no le tiene miedo, sigue apareciendo en los manuales de formación de medio mundo.",
      },
    ],
  },
];
