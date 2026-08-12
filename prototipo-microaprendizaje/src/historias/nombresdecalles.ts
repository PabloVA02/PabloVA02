import type { Short } from "../shorts";

/* ==========================================================================
   Los nombres de las calles.

   Cómo se orienta la gente en una ciudad, que parece un asunto menor y es
   una historia de administración, de correo y de política. El tema aburre si
   se convierte en anecdotario de callejero.

   La regla del tema: se cuenta el PROBLEMA PRÁCTICO que resolvió cada
   sistema —cobrar impuestos, repartir cartas, encontrar una casa de noche— y
   quién decidió los nombres. Y se dan ejemplos que el lector pueda comprobar
   saliendo a la calle de su barrio.
   ========================================================================== */

export const NOMBRES_DE_CALLES: Short[] = [
  {
    id: "los-numeros-de-las-casas",
    titulo: "Numerar para reclutar",
    gancho: "No fue idea del cartero. Fue un ejército que necesitaba saber en qué casa vivía cada hombre en edad de servir.",
    categoria: "Calles",
    color: "var(--slate)",
    encargo: "Un número de casa antiguo, de azulejo pintado, sobre una pared encalada.",
    fotos: [
      {
        archivo: "Empress Maria-Theresia De Visch.jpg",
        autor: "La emperatriz María Teresa de Austria, óleo de Matthias de Visch, 1749, según Martin van Meytens.",
        licencia: "Dominio público",
        pdPorEdad: 1765,
        fuente: "https://commons.wikimedia.org/wiki/File:Empress_Maria-Theresia_De_Visch.jpg",
        foco: "50% 38%",
        alt: "Una emperatriz sentada en el trono con un vestido enorme de encaje rosa y plata, la corona sobre un cojín a su lado.",
      },
      {
        archivo: "Paczkow 01.jpg",
        autor: "Paczków, en Silesia, una de las pocas ciudades europeas que conserva casi entera su muralla medieval. Fotografía de Scotch Mist.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Paczkow_01.jpg",
        foco: "50% 50%",
        alt: "Una ciudad pequeña rodeada de muralla, con tejados rojos apretados y la torre de una iglesia sobresaliendo.",
      },
      {
        archivo: "Krāsotāju iela, Красильная улица, Färber Straße, Krahsohtaju eela.jpg",
        autor: "Placa de una calle de Riga con el nombre actual y, debajo, el mismo nombre en las tres lenguas oficiales que tuvo la ciudad. Fotografía de Turaids.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Kr%C4%81sot%C4%81ju_iela,_%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0,_F%C3%A4rber_Stra%C3%9Fe,_Krahsohtaju_eela.jpg",
        foco: "50% 40%",
        alt: "Dos placas rectangulares clavadas en una pared con el nombre de una calle repetido en varios idiomas.",
      },
      {
        archivo: "81 rue Mouffetard, motif de la porte, 5ème arrondissement, Paris. PH24440.jpg",
        autor: "La puerta del número 81 de la rue Mouffetard de París, fotografiada por Charles Lansiaux en 1917.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:81_rue_Mouffetard,_motif_de_la_porte,_5%C3%A8me_arrondissement,_Paris._PH24440.jpg",
        foco: "50% 40%",
        alt: "Una puerta antigua de madera labrada con su número encima, en una fotografía en blanco y negro.",
      },
    ],
    entrada:
      "Imperio austríaco, 1770. Hasta entonces las casas europeas no tienen número y a nadie le hace falta: cada una se localiza por el nombre de quien vive en ella, por un cartel pintado sobre la puerta o por referencias del tipo la casa del olmo o la de detrás de la fragua. Ese año, la emperatriz María Teresa ordena numerarlas todas en sus territorios, una por una y sin excepciones. No lo hace por comodidad del vecindario ni del correo, sino porque quiere un censo militar que no se le pueda falsear.",
    paginas: [
      {
        rotulo: "Contar hombres",
        texto:
          "El ejército necesitaba saber cuántos varones en edad de servir vivía en cada sitio y dónde encontrarlos, y sin direcciones eso era imposible. Se enviaron soldados a pintar números en las fachadas, casa por casa. El recorrido serpenteaba por el pueblo entero: se empezaba en un extremo, se numeraba seguido y se volvía por el otro lado. La población lo entendió perfectamente y en varias zonas hubo resistencia. Aquel número en la pared era el primer paso para que un día llamaran a la puerta a llevarse a un hijo.",
        destacado: { tipo: "frase", frase: "El número en la fachada era el primer paso del reclutamiento." },
      },
      {
        rotulo: "Pares e impares",
        texto:
          "El sistema que hoy nos parece natural es posterior. Los pares a un lado, los impares al otro y la numeración creciendo desde un punto fijo se impusieron porque facilitan el reparto del correo. París lo adoptó a comienzos del siglo XIX, contando desde el río, y otras ciudades tomaron como origen la plaza principal o la puerta de la muralla. En Estados Unidos se fue más lejos con el sistema de bloques: el número indica en qué manzana está el portal, así que un 1400 significa la manzana catorce.",
        destacado: { tipo: "cifra", cifra: "1770", unidad: "el año de la orden de numerar" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron rarezas visibles en cualquier casco antiguo: números repetidos, casas con dos numeraciones distintas pintadas una encima de otra y calles donde el orden salta sin explicación, restos de aquellos recorridos serpenteantes. Y el sistema no es universal ni mucho menos. En Japón las calles no suelen tener nombre: lo que se numera son las manzanas y el orden en que se construyeron las casas dentro de cada una. Encontrar una dirección allí sin mapa desconcierta a cualquier visitante, y los propios japoneses tiran de plano dibujado a mano cuando dan una cita.",
      },
    ],
  },
  {
    id: "las-calles-de-los-oficios",
    titulo: "La calle llevaba su oficio",
    gancho: "Curtidores, herreros, plateros. El nombre era una dirección real, no un homenaje.",
    categoria: "Calles",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una placa de calle antigua de cerámica con un nombre de oficio.",
    fotos: [
      {
        archivo: "Petite France during golden hour.jpg",
        autor: "El barrio de los curtidores de Estrasburgo, con las casas de entramado asomadas al canal.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3APetite%20France%20during%20golden%20hour.jpg",
        foco: "50% 45%",
        alt: "Hilera de casas antiguas de entramado de madera junto a un canal, reflejadas en el agua al atardecer.",
      },
      {
        archivo: "Rouen (30784933502).jpg",
        autor: "Calle del casco antiguo de Ruan, en Normandía, con las fachadas de entramado.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARouen%20(30784933502).jpg",
        foco: "50% 50%",
        alt: "Calle estrecha de casas medievales con vigas de madera a la vista y pisos que vuelan sobre la acera.",
      },
      {
        archivo: "Rouen (30269029424).jpg",
        autor: "Otra calle de Ruan, de las que se llamaban por lo que se hacía en ellas.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3ARouen%20(30269029424).jpg",
        foco: "50% 50%",
        alt: "Callejón antiguo entre casas de entramado, con tiendas en la planta baja.",
      },
      {
        archivo: "Fuento de Cantos Tile signs 22 09 2012.JPG",
        autor: "Rótulo antiguo de azulejo en Fuente de Cantos, en Badajoz.",
        licencia: "CC BY 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AFuento%20de%20Cantos%20Tile%20signs%2022%2009%202012.JPG",
        foco: "50% 50%",
        alt: "Panel de azulejos pintados a mano empotrado en una pared encalada.",
      },
    ],
    entrada:
      "Ciudades europeas, siglos XII a XVIII. Antes de que a nadie se le ocurriera dedicar calles a personas, los nombres eran descripciones prácticas de lo que había allí. Ese callejero funcionaba porque los oficios se agrupaban por barrios, en parte por normas de los gremios y en parte por pura conveniencia, de modo que el nombre de la calle era una indicación literal y no un homenaje a nadie: quien buscaba un cuchillo sabía a qué calle ir, y quien no sabía leer podía preguntar y llegar igual. Ese callejero, además, se hizo solo, sin comisión de nombres ni pleno municipal, y por eso cuenta cosas que ningún archivo cuenta.",
    paginas: [
      {
        rotulo: "Juntos por algo",
        texto:
          "La agrupación no era casual y muchas veces era obligatoria. Los oficios que apestaban o que ensuciaban el agua, como los curtidores y los tintoreros, se mandaban a las afueras y aguas abajo del río. Los que usaban fuego, como los herreros y los alfareros, se apartaban de las zonas de casas de madera por el riesgo de incendio. Y los que vendían objetos caros, como los plateros, se juntaban en calles céntricas y vigiladas. El callejero de un casco antiguo es, leído así, un mapa de olores y de riesgos.",
        destacado: { tipo: "frase", frase: "El callejero antiguo es un mapa de olores y de riesgos." },
      },
      {
        rotulo: "El cambio",
        texto:
          "A partir del siglo XIX los nombres empezaron a usarse para otra cosa: honrar a personas, fechas y batallas. El cambio coincide con los Estados nacionales, que descubrieron algo muy útil: el callejero es un instrumento barato para contar una versión de la historia a gente que pasa por allí todos los días. Desde entonces, cada cambio de régimen ha traído su tanda de placas nuevas. En muchas ciudades europeas todavía se ven rótulos antiguos tapados con cemento, picados o girados del revés, que asoman cuando se cae la pintura.",
        destacado: { tipo: "cifra", cifra: "XIX", unidad: "el siglo del callejero como homenaje" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron miles de calles de oficios en toda Europa, que sirven a los historiadores para reconstruir dónde estaba cada actividad en una ciudad medieval sin necesidad de excavar. Quedó también la costumbre de discutir los nombres, que sigue igual de viva. Cada vez que un ayuntamiento cambia una placa se abre el mismo debate sobre a quién se recuerda y a quién se borra. Y quedó una diferencia curiosa: en esas discusiones nadie ha propuesto jamás cambiar el nombre de la calle de los Herreros o de la de los Curtidores.",
      },
    ],
  },
  {
    id: "la-direccion-que-no-existe",
    titulo: "Sin dirección",
    gancho: "Sin dirección no hay cuenta bancaria, ni ambulancia que te encuentre, ni paquete que llegue.",
    categoria: "Calles",
    color: "var(--plum)",
    encargo: "Un cruce de calles de tierra sin señalizar en un barrio de casas bajas.",
    entrada:
      "Buena parte del planeta, hoy. Doscientos cincuenta años después de aquella orden de 1770, se calcula que la mitad de la población mundial vive en sitios sin dirección postal utilizable. Son barrios crecidos deprisa, aldeas sin nombres de calle y asentamientos que no figuran en ningún registro. No es un problema de comodidad. Sin dirección no se puede abrir una cuenta, recibir una ayuda ni explicar dónde mandar una ambulancia.",
    paginas: [
      {
        rotulo: "Lo que se pierde",
        texto:
          "Las consecuencias son muy concretas y se acumulan. Los servicios de emergencia tardan más, porque hay que guiarlos por teléfono con referencias visuales: la casa azul, después del taller, al fondo del callejón. El comercio a distancia no llega, así que los productos cuestan más caros en la tienda del barrio. Los bancos exigen un domicilio para abrir una cuenta, de modo que sin dirección se queda uno fuera del sistema financiero. Y los censos y las campañas de vacunación se hacen a ciegas, trabajando con estimaciones en lugar de con listas de casas que visitar.",
        destacado: { tipo: "frase", frase: "Sin dirección no hay cuenta en el banco ni ambulancia que te encuentre." },
      },
      {
        rotulo: "Cuadrículas",
        texto:
          "Han aparecido soluciones que se saltan las calles. Varias empresas y organismos han dividido el planeta en cuadrados de tres metros de lado y le han dado a cada uno un código corto, formado por palabras o por letras y números. Con ese código se puede indicar un portal, una entrada de campo o el punto exacto de una playa sin necesidad de que exista ninguna calle. Algunos servicios postales nacionales los han adoptado oficialmente, y varias organizaciones de ayuda humanitaria los usan sobre el terreno para repartir suministros en zonas sin calles.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "metros de lado tiene cada cuadrado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un debate que no es técnico sino político: si conviene depender de un código propiedad de una empresa privada o si los Estados deben construir su propio sistema. Varios países han optado por lo segundo y han lanzado direcciones digitales oficiales, con la ventaja de que también sirven para reconocer legalmente barrios que antes no existían en los mapas. Poner nombre a una calle, o número a una casa, sigue siendo lo que era en 1770: una decisión de quien manda, y una forma de saber quién vive dónde.",
      },
    ],
  },
];
