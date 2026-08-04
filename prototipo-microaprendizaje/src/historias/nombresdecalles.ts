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
    titulo: "Numerar las casas se hizo para reclutar soldados",
    gancho: "No fue idea del cartero. Fue un ejército que necesitaba saber en qué casa vivía cada hombre en edad de servir.",
    categoria: "Calles",
    color: "var(--slate)",
    encargo: "Un número de casa antiguo, de azulejo pintado, sobre una pared encalada.",
    entrada:
      "Imperio austríaco, 1770. Hasta entonces las casas europeas no tienen número: se localizan por el nombre del propietario, por un cartel pintado o por referencias como la casa del olmo. Ese año, la emperatriz ordena numerarlas todas en sus territorios, y no lo hace por comodidad de nadie, sino porque quiere hacer un censo militar fiable.",
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
    titulo: "Las calles se llamaban como el oficio de allí",
    gancho: "Curtidores, herreros, plateros. El nombre era una dirección real, no un homenaje.",
    categoria: "Calles",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Una placa de calle antigua de cerámica con un nombre de oficio.",
    entrada:
      "Ciudades europeas, siglos XII a XVIII. Antes de que a nadie se le ocurriera dedicar calles a personas, los nombres eran descripciones prácticas de lo que había allí. Ese callejero funcionaba porque los oficios se agrupaban por barrios, en parte por normas de los gremios y en parte por pura conveniencia: quien buscaba un cuchillo sabía a qué calle ir.",
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
    titulo: "La mitad del mundo no tiene dirección postal",
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
