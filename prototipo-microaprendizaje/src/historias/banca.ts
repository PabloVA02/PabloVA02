import type { Short } from "../shorts";

/* ==========================================================================
   Banca y seguros.

   El riesgo del tema es el tecnicismo financiero: derivados, apalancamiento,
   coberturas. En cuanto entra una palabra así, el lector se va.

   La regla del tema: se cuenta EL PAPEL Y LA FIRMA. Un documento que un
   peregrino lleva en el bolsillo en lugar de oro. Una hoja donde varios
   comerciantes escriben su nombre debajo. Una cuenta contable donde se
   esconden las pérdidas. Toda la banca es, físicamente, papel: quién lo
   escribe, quién lo revisa y quién no lo mira nunca.

   Y las cantidades se traducen a algo: un jornal, una casa, un banco.
   ========================================================================== */

export const BANCA: Short[] = [
  {
    id: "templarios-credito",
    titulo: "Templarios y crédito",
    gancho: "Un peregrino depositaba el oro en París y lo cobraba en Jerusalén, sin llevarlo por el camino.",
    categoria: "Banca",
    color: "var(--ochre)",
    encargo: "Un documento antiguo doblado con sellos de cera sobre una mesa de madera.",
    fotos: [
      {
        archivo: "Temple Church is a late 12th-century church.jpg",
        autor: "La iglesia del Temple de Londres, de planta redonda, construida para los templarios a finales del siglo XII.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Temple_Church_is_a_late_12th-century_church.jpg",
        foco: "50% 45%",
        alt: "Un templo circular de piedra dorada con ventanas de arco de medio punto y un remate almenado, bajo un cielo azul.",
      },
      {
        archivo: "Medieval coin hoard, Pennies of Henry II to Henry III (FindID 576061).jpg",
        autor: "Tesorillo de peniques de plata ingleses acuñados entre 1180 y 1247, hallado en Staffordshire. Portable Antiquities Scheme.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Medieval_coin_hoard,_Pennies_of_Henry_II_to_Henry_III_(FindID_576061).jpg",
        foco: "50% 50%",
        alt: "Una decena de monedas de plata medievales, desgastadas y con la cruz marcada, colocadas en filas.",
      },
      {
        archivo: "Triforium of the Temple Church, London.jpg",
        autor: "El triforio circular de la misma iglesia por dentro. Fotografía de Shortenfs.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Triforium_of_the_Temple_Church,_London.jpg",
        foco: "50% 50%",
        alt: "Una galería de arcos apoyados en columnas dobles de mármol, recorriendo en círculo el interior del templo.",
      },
      {
        archivo: "Seal matrix wax impression (FindID 480917).jpg",
        autor: "Matriz de sello medieval con su impresión en cera, el modo de autenticar un documento. Portable Antiquities Scheme.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Seal_matrix_wax_impression_(FindID_480917).jpg",
        foco: "50% 45%",
        alt: "Un sello de metal junto al disco de cera donde ha dejado grabado su dibujo y una inscripción alrededor.",
      },
    ],
    entrada:
      "Europa, siglo XII. Ir en peregrinación a Tierra Santa supone tres o cuatro mil kilómetros de camino con todo el dinero encima, por rutas llenas de bandidos y de señores con peaje donde nadie puede defender su bolsa más de una vez. Una orden militar de monjes soldados encuentra una solución que parece obvia y que en aquel momento no lo era en absoluto: que el dinero no viaje. El peregrino deja su oro en una casa de la orden antes de salir y recibe a cambio un documento doblado que no vale nada para quien se lo robe.",
    paginas: [
      {
        rotulo: "El papel",
        texto:
          "El documento describía la cantidad depositada y llevaba marcas de autenticidad que solo los miembros de la orden sabían leer. Al llegar a destino, el peregrino lo presentaba en otra casa de la misma orden y le entregaban allí el equivalente en moneda local, descontada una comisión. Por el camino no llevaba encima nada que robarle. Aquello exigía algo que casi nadie tenía en la Europa de entonces: una red de sedes repartidas por varios reinos, con contabilidad común, personal formado y confianza suficiente entre ellas para pagarse unas a otras sin discutir.",
        destacado: { tipo: "frase", frase: "El dinero se quedaba quieto; lo que viajaba era el papel." },
      },
      {
        rotulo: "El banco",
        texto:
          "De ahí en adelante la orden fue asumiendo funciones que hoy reconoceríamos sin dudar: custodia de joyas y de documentos, préstamos a nobles y a reyes con intereses disimulados para esquivar la prohibición eclesiástica de cobrar por el dinero, gestión de rentas y de impuestos, e incluso la administración del tesoro real francés durante décadas. Sus casas fuertes eran los sitios más seguros del continente. Llegaron a tener unas nueve mil propiedades repartidas por Europa y una flota propia, y prestaban a la vez a bandos enfrentados en la misma guerra.",
        destacado: { tipo: "cifra", cifra: "9.000", unidad: "propiedades repartidas por Europa" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El final fue tan financiero como el resto. En 1307, el rey de Francia, que les debía una fortuna y necesitaba dinero con urgencia, ordenó detener a todos los templarios del reino en un mismo día, los acusó de herejía y consiguió que el papa disolviera la orden siete años más tarde. Buena parte de sus bienes acabó en otras manos y las deudas se esfumaron. Los mecanismos, en cambio, no desaparecieron: los banqueros italianos ya los estaban usando, y la letra de cambio que salió de ahí sigue siendo la base de cualquier transferencia.",
      },
    ],
  },

  {
    id: "seguro-en-cafeteria",
    titulo: "El seguro nació en un café",
    gancho: "Los marinos iban allí a enterarse de qué barcos habían llegado. El dueño empezó a imprimir listas.",
    categoria: "Banca",
    color: "var(--slate)",
    encargo: "Un salón de café del siglo XVII con mesas largas, papeles y hombres de pie discutiendo.",
    fotos: [
      {
        archivo: "Interior of Royal Exchange, London 2025-09-20 (1).jpg",
        autor: "Patio cubierto de la Royal Exchange de Londres, el sitio donde se reunían los comerciantes de la City.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AInterior%20of%20Royal%20Exchange%2C%20London%202025-09-20%20(1).jpg",
        foco: "50% 28%",
        alt: "Patio interior de piedra clara con dos plantas de arcos y ventanas, cubierto por una claraboya de vidrio.",
      },
      {
        archivo: "Ships on the River IJ in front of the Tollhouse near Amsterdam RMG F8704-001.tiff",
        autor: "Óleo de Abraham Storck, hacia 1690: barcos en el río IJ, delante de la aduana de Ámsterdam. Royal Museums Greenwich.",
        licencia: "Public domain",
        pdPorEdad: 1708,
        fuente: "https://commons.wikimedia.org/wiki/File%3AShips%20on%20the%20River%20IJ%20in%20front%20of%20the%20Tollhouse%20near%20Amsterdam%20RMG%20F8704-001.tiff",
        foco: "50% 50%",
        alt: "Puerto pintado al óleo lleno de veleros y barcazas, con gente embarcando en primer plano.",
      },
      {
        archivo: "A Dutch Merchantman Attacked by an English Privateer, off La Rochelle RMG BHC0723.tiff",
        autor: "Óleo de Cornelis Claesz van Wieringen, 1616: un mercante holandés atacado por un corsario inglés frente a La Rochelle.",
        licencia: "Public domain",
        pdPorEdad: 1633,
        fuente: "https://commons.wikimedia.org/wiki/File%3AA%20Dutch%20Merchantman%20Attacked%20by%20an%20English%20Privateer%2C%20off%20La%20Rochelle%20RMG%20BHC0723.tiff",
        foco: "50% 50%",
        alt: "Dos barcos de vela acercándose entre sí con las velas hinchadas y humo de cañón sobre el mar picado.",
      },
      {
        archivo: "Lloyd's Building - Atrium roof.jpg",
        autor: "Cubierta del atrio del edificio de Lloyd\'s en Londres, terminado en 1986.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ALloyd's%20Building%20-%20Atrium%20roof.jpg",
        foco: "50% 50%",
        alt: "Bóveda acristalada vista desde abajo, con una retícula de vigas metálicas y el cielo detrás.",
      },
    ],
    entrada:
      "Londres, 1686. Un hombre abre una cafetería cerca del puerto, en una ciudad donde estos locales acaban de ponerse de moda y funcionan en la práctica como oficinas: se leen los periódicos, se cierran tratos, se firman contratos y se discute de negocios durante horas por el precio de una taza. La suya está bien situada y se llena enseguida de capitanes, armadores, aseguradores y comerciantes que esperan noticias de sus barcos. El dueño no tarda en darse cuenta de que el negocio que tiene delante no es el café que sirve, sino lo que se habla en sus mesas.",
    paginas: [
      {
        rotulo: "Las listas",
        texto:
          "El dueño se dio cuenta de que lo que llevaba a esa gente a su local no era el café, sino la información: qué barcos habían zarpado, cuáles se habían perdido, qué cargamentos venían de camino y qué precios se pagaban en cada puerto. Así que empezó a recogerla en serio, con corresponsales en los muelles que le mandaban noticias por correo, y a imprimir una hoja con los movimientos. Aquella hoja se convirtió en una publicación diaria que todavía existe y que sigue registrando el tráfico de la marina mercante del mundo.",
        destacado: { tipo: "frase", frase: "Lo que buscaban en el local no era café, era información." },
      },
      {
        rotulo: "Las firmas",
        texto:
          "Con la información encima de la mesa apareció el negocio. Un armador que fletaba un barco pasaba por el local con una hoja donde se describían la nave, la carga y la ruta, y los presentes que quisieran cubrir el riesgo escribían debajo su nombre y la parte que asumían, hasta completar entre todos el valor entero del viaje. Si el barco llegaba, se repartían la prima; si se hundía, cada uno pagaba lo suyo. De aquella costumbre de firmar debajo viene la palabra que designa hoy a quien asume un riesgo asegurado.",
        destacado: { tipo: "cifra", cifra: "1686", unidad: "el año en que abrió la cafetería" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El local desapareció, pero el grupo de firmantes se organizó, se mudó varias veces y acabó convertido en una institución con edificio propio que sigue funcionando con la misma lógica: no es una compañía que asegura, es un mercado donde muchos inversores cubren riesgos por partes. Ha asegurado cosas insólitas, desde las piernas de una bailarina hasta cargamentos imposibles, y conserva la campana de un barco naufragado que se tocaba para anunciar noticias importantes. La costumbre de escribir el nombre debajo de la hoja se sigue llamando exactamente igual que hace tres siglos, en inglés y en español.",
      },
    ],
  },

  {
    id: "banco-hundido",
    titulo: "Hundió el banco él solo",
    gancho: "Escondió las pérdidas en una cuenta de errores durante tres años y nadie miró qué había dentro.",
    categoria: "Banca",
    color: "var(--plum)",
    encargo: "Una pantalla de cotizaciones antigua con números en rojo en una oficina vacía.",
    entrada:
      "Singapur, febrero de 1995. Un banco británico con doscientos treinta y tres años de historia, que había financiado guerras, prestado a gobiernos de medio mundo y guardado el dinero de la reina, cierra de un día para otro y se vende entero por una libra. No lo ha hundido una crisis, ni una guerra, ni una decisión del consejo de administración. Lo ha hundido un solo operador de veintiocho años que apostaba en el mercado de futuros desde una oficina pequeña al otro lado del planeta, y que llevaba dos años tapando pérdidas.",
    paginas: [
      {
        rotulo: "La cuenta de errores",
        texto:
          "El hombre tenía dos trabajos incompatibles a la vez: hacía las operaciones y además supervisaba su propia contabilidad, algo que en cualquier banco bien organizado está separado por razones evidentes. Cuando empezó a perder dinero, abrió una cuenta destinada a corregir errores administrativos y fue metiendo allí las pérdidas, apostando cada vez más fuerte para recuperarlas. Desde Londres le mandaban el dinero que pedía sin preguntar demasiado, porque sus beneficios declarados eran espectaculares: figuraba como responsable de una parte enorme de las ganancias anuales del grupo, y a nadie le pareció raro que una oficina pequeña rindiera tanto.",
        destacado: { tipo: "frase", frase: "Hacía las operaciones y revisaba su propia contabilidad." },
      },
      {
        rotulo: "El terremoto",
        texto:
          "La apuesta final consistía en que el índice de la bolsa japonesa se mantuviera estable dentro de una banda estrecha durante unas semanas. El 17 de enero de 1995 un terremoto devastó una ciudad japonesa, la bolsa se desplomó y la posición se volvió impagable en cuestión de días. Intentó recuperarse comprando todavía más, lo que multiplicó el agujero. Cuando huyó dejando una nota de disculpa sobre la mesa, las pérdidas acumuladas superaban los ochocientos millones de libras, más del doble del capital disponible del banco entero. Ya no había manera de taparlo ni de cubrirlo.",
        destacado: { tipo: "cifra", cifra: "800", unidad: "millones de libras de agujero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Lo detuvieron en un aeropuerto alemán, cumplió más de cuatro años de cárcel en Singapur y el banco fue comprado por una entidad holandesa por el precio simbólico de una libra, asumiendo la deuda. El caso cambió las normas de control interno de todo el sector: separar a quien opera de quien contabiliza pasó de recomendación a obligación legal en la mayoría de los países. Aun así ha vuelto a ocurrir varias veces con cifras mayores. Un banco que aguantó doscientos treinta y tres años se fue en tres, por una cuenta que nadie abrió.",
      },
    ],
  },
];
