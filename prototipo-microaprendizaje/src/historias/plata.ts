import type { Short } from "../shorts";

/* ==========================================================================
   La plata.

   El metal que movió el primer comercio verdaderamente mundial. El dólar y
   su nombre ya se contaron en dinero.ts, así que aquí no se toca: estos tres
   van del metal como mercancía, no como palabra.

   La regla del tema: se sigue el METAL, no a los personajes. De dónde sale,
   quién lo saca, en qué barco viaja y en qué se convierte al llegar. Y se
   dice siempre a qué precio humano, sin adornos y sin sermones: los números
   de una mina explican más que cualquier adjetivo.
   ========================================================================== */

export const PLATA: Short[] = [
  {
    id: "la-montana-de-plata",
    titulo: "El cerro que pagó Europa",
    gancho: "De un cerro cónico de los Andes salió durante dos siglos el metal que pagaba las guerras de Europa.",
    categoria: "Plata",
    color: "var(--slate)",
    encargo: "Un cerro cónico y pelado dominando un pueblo de tejados bajos a gran altitud.",
    fotos: [
      {
        archivo: "Cerro Rico over Potosí, Bolivia.jpg",
        autor: "El Cerro Rico sobre Potosí, en Bolivia: de ahí salió la plata. Fotografía de Jbmurray.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Cerro_Rico_over_Potos%C3%AD,_Bolivia.jpg",
        foco: "50% 40%",
        alt: "Un cerro cónico y pelado, con vetas de colores, levantándose justo detrás de los tejados de una ciudad.",
      },
      {
        archivo: "Potosí - hora Cerro Rico - 4.824 m.n.m. - panoramio.jpg",
        autor: "El Cerro Rico desde otro ángulo, a casi cinco mil metros. Fotografía de Pavel Špindler.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Potos%C3%AD_-_hora_Cerro_Rico_-_4.824_m.n.m._-_panoramio.jpg",
        foco: "50% 45%",
        alt: "La mole del Cerro Rico, agujereada de bocaminas, con la ciudad a sus pies.",
      },
      {
        archivo: "Spanish Eight Reales (FindID 492568).jpg",
        autor: "Un real de a ocho español, la moneda de plata que circuló por medio mundo.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Spanish_Eight_Reales_(FindID_492568).jpg",
        foco: "50% 50%",
        alt: "Las dos caras de una moneda grande de plata con el escudo y las columnas.",
      },
      {
        archivo:
          "Post-Medieval Coin, Colonial Spanish silver 1-real 'cob' piece of Philip III or Philip IV (FindID 898989).jpg",
        autor: "Un real recortado a martillo, de los que se acuñaban en América.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Post-Medieval_Coin,_Colonial_Spanish_silver_1-real_%27cob%27_piece_of_Philip_III_or_Philip_IV_(FindID_898989).jpg",
        foco: "50% 50%",
        alt: "Una moneda de plata irregular, cortada a golpes y con el sello marcado encima.",
      },
    ],
    entrada:
      "Andes, 1545. Un pastor que busca una llama perdida enciende fuego para pasar la noche en la ladera de un cerro y descubre por la mañana un hilo de metal fundido entre las cenizas. La historia es probablemente una leyenda, pero la montaña era real y resultó ser la mayor concentración de plata jamás encontrada. A cuatro mil metros de altura se levantó una ciudad.",
    paginas: [
      {
        rotulo: "La ciudad alta",
        texto:
          "En menos de setenta años aquel poblado a cuatro mil metros, donde el agua hierve a ochenta y cinco grados y no crece un árbol, llegó a tener unos ciento sesenta mil habitantes, tantos como Londres o Sevilla en la misma época y más que ninguna otra ciudad americana. Todo lo que se comía, se vestía y se bebía allí subía en mula desde la costa o desde los valles, y por eso los precios eran disparatados. La ciudad tuvo iglesias con altares de plata, casas de moneda, teatros y una fama tal que se hizo un dicho para decir que algo vale una fortuna.",
        destacado: { tipo: "cifra", cifra: "160.000", unidad: "habitantes a cuatro mil metros" },
      },
      {
        rotulo: "El turno",
        texto:
          "El trabajo se organizó con un sistema de turnos obligatorios heredado de la administración incaica: cada comunidad de una región enorme debía enviar cada año una parte de sus hombres adultos a trabajar a la mina durante meses. Bajaban por escaleras de cuero y madera hasta galerías a doscientos metros, con velas atadas a la frente, y subían el mineral a la espalda en jornadas larguísimas. Al mineral se le añadía después mercurio para separar la plata, y ese proceso, hecho al aire libre y con las manos, envenenaba a quien lo manejaba.",
        destacado: { tipo: "frase", frase: "Subían el mineral a la espalda por escaleras de cuero." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una cifra que ordena tres siglos de historia económica: de aquel cerro salió, según las estimaciones más citadas, en torno a la mitad de toda la plata que se produjo en el mundo entre 1550 y 1800. Con ella se pagaron ejércitos, deudas y flotas, y buena parte terminó al otro lado del planeta comprando seda y porcelana. La montaña sigue ahí, perforada por miles de galerías y visiblemente hundida en la cima, y en ella todavía trabajan cooperativas de mineros. La ciudad tiene hoy menos habitantes que en 1610.",
      },
    ],
  },
  {
    id: "el-galeon-de-manila",
    titulo: "Iba plata, volvía seda",
    gancho: "Doscientos cincuenta años de travesías con plata en un sentido y seda en el otro. Fue el primer comercio global.",
    categoria: "Plata",
    color: "var(--ochre)",
    encargo: "Un galeón antiguo cargado navegando en mar abierto al atardecer.",
    fotos: [
      {
        archivo: "Dutch Ships loading Timber in a Northern Port RMG BHC0750.tiff",
        autor: "«Barcos cargando en un puerto del norte», óleo de Andries van Eertvelt, 1610. Royal Museums Greenwich.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Dutch_Ships_loading_Timber_in_a_Northern_Port_RMG_BHC0750.tiff",
        foco: "50% 50%",
        alt: "Pintura de grandes barcos de vela fondeados en una bahía mientras las barcas llevan carga hacia la orilla.",
      },
      {
        archivo: "Ming Porcelain Vases.jpg",
        autor: "Porcelana china de la dinastía Ming. Fotografía de Gary Todd.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ming_Porcelain_Vases.jpg",
        foco: "50% 45%",
        alt: "Varios jarrones de porcelana blanca y azul alineados, con dibujos de flores y ramas.",
      },
      {
        archivo: "Andries van Eertvelt - The Return to Amsterdam of the Second Expedition to the East Indies on 19th July 1599.jpg",
        autor: "«El regreso a Ámsterdam de la segunda expedición a las Indias Orientales», óleo de Andries van Eertvelt, siglo XVII.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File:Andries_van_Eertvelt_-_The_Return_to_Amsterdam_of_the_Second_Expedition_to_the_East_Indies_on_19th_July_1599.jpg",
        foco: "50% 50%",
        alt: "Pintura de una flota de vuelta de un viaje largo, con las velas recogidas y las barcas saliendo a recibirla.",
      },
      {
        archivo: "Ming Porcelain, Yongle Reign 18.jpg",
        autor: "Pieza de porcelana del reinado Yongle, dinastía Ming. Fotografía de Gary Todd.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Ming_Porcelain,_Yongle_Reign_18.jpg",
        foco: "50% 45%",
        alt: "Un cuenco de porcelana blanca decorado en azul cobalto, visto de cerca.",
      },
    ],
    entrada:
      "Océano Pacífico, 1565. Un marino descubre la ruta de vuelta desde Filipinas hasta la costa americana subiendo hacia el norte a buscar los vientos del oeste, algo que hasta entonces nadie había conseguido y que había costado varias expediciones perdidas. Con esa ruta abierta se establece una línea regular de barcos entre un puerto de la costa mexicana y otro asiático, con uno o dos viajes al año, que funcionará durante dos siglos y medio sin apenas cambios. Es el primer servicio de transporte que une de forma estable dos continentes por el océano más grande del planeta.",
    paginas: [
      {
        rotulo: "Plata por seda",
        texto:
          "La carga era casi siempre la misma en cada sentido. Hacia Asia iban cofres de monedas de plata americana, y de vuelta venían sedas, porcelana, marfil, especias y muebles lacados. El motivo es de aritmética: en China la plata valía mucho más que en Europa, porque el imperio había decidido cobrar los impuestos en ese metal y no tenía minas suficientes. Un comerciante que llevara plata al otro lado del mundo podía comprar mucho más de lo que habría comprado en su casa, y ese desnivel de precios mantuvo la ruta viva durante generaciones.",
        destacado: { tipo: "frase", frase: "La misma plata compraba mucho más en China que en Europa." },
      },
      {
        rotulo: "Seis meses",
        texto:
          "La travesía de vuelta duraba entre cinco y siete meses sin tocar tierra, la más larga que se hacía con regularidad en el mundo. Se subía hasta la altura de Japón para tomar los vientos del oeste y se bajaba luego por la costa americana, y muchas tripulaciones perdían a un tercio de sus hombres por escorbuto en el camino. Los barcos eran enormes y se cargaban hasta lo imprudente, porque cada centímetro de bodega era dinero. Cuando uno se hundía, se hundía con él la economía de una provincia entera durante un par de años.",
        destacado: { tipo: "cifra", cifra: "250", unidad: "años funcionó la línea" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el primer circuito comercial que dio la vuelta completa al planeta, con la plata de una montaña andina comprando seda en Cantón y llegando después a Europa. Quedaron palabras, comidas y apellidos repartidos entre las dos orillas del Pacífico, y una moneda de plata española que se usó como dinero corriente en China durante siglos. Y quedó una idea que la historia económica ha tardado en asumir: aquel comercio no lo movía el gusto europeo por la seda, sino la sed de plata de un imperio asiático que necesitaba metal para cobrar sus impuestos.",
      },
    ],
  },
  {
    id: "la-plata-se-pone-negra",
    titulo: "La plata se ennegrece por azufre",
    gancho: "No es suciedad ni óxido: es azufre. Y de ahí viene la leyenda de que detecta venenos.",
    categoria: "Plata",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una cuchara de plata ennegrecida junto a otra recién pulida, sobre paño blanco.",
    entrada:
      "Cualquier cajón con cubertería de plata, y lo mismo desde el siglo VII antes de Cristo. Un objeto de plata guardado sin usar se cubre de una capa oscura que parece suciedad y no lo es. La plata no se oxida con el aire como el hierro; lo que la ennegrece es otra cosa, y explica de paso una superstición que duró siglos en las mesas de los reyes.",
    paginas: [
      {
        rotulo: "El azufre",
        texto:
          "La culpa la tienen los compuestos de azufre. En el aire hay siempre trazas de ellos, y en algunos alimentos hay muchos: el huevo, la cebolla, la mostaza y las coles están cargados de azufre. Al tocar la plata forman en la superficie una capa finísima de sulfuro de plata, que es negra. No corroe el objeto ni lo estropea, solo lo cubre. Por eso una cuchara con la que se ha comido un huevo pasado por agua se pone oscura en cuestión de minutos, y por eso los cubiertos guardados en un cajón cerrado aguantan mucho más limpios.",
        destacado: { tipo: "frase", frase: "No es óxido: es una capa negrísima de sulfuro." },
      },
      {
        rotulo: "El veneno",
        texto:
          "De ahí sale la creencia de que la plata detecta venenos, que llevó a los poderosos a comer con cubiertos de plata durante siglos. Tiene una parte de verdad casual: el arsénico de la época, obtenido de minerales impuros, venía acompañado de compuestos de azufre, así que un plato envenenado podía efectivamente oscurecer la cuchara. El arsénico puro, en cambio, no hace nada, y tampoco lo hacen la mayoría de los venenos. La costumbre funcionó como funcionan muchas supersticiones: acertaba lo suficiente como para que nadie la pusiera a prueba en serio.",
        destacado: { tipo: "cifra", cifra: "VII", unidad: "el siglo antes de Cristo de las primeras monedas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un truco doméstico que parece magia y es química elemental: si se pone la pieza ennegrecida en un recipiente forrado con papel de aluminio, con agua caliente y una cucharada de bicarbonato, el negro desaparece en un minuto sin frotar. Lo que ocurre es que el aluminio le roba el azufre a la plata, porque se une a él con más ganas, y el metal vuelve a quedar limpio sin perder ni un gramo. Frotar con pasta abrasiva, en cambio, arranca plata cada vez. Y el huevo pasado por agua seguirá ennegreciendo la cuchara mañana.",
      },
    ],
  },
];
