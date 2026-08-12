import type { Short } from "../shorts";

/* ==========================================================================
   El aire acondicionado.

   Uno de los inventos que más ha cambiado dónde y cómo vive la gente, y que
   casi nadie cuenta porque parece un electrodoméstico aburrido. El riesgo es
   contarlo como historia de una máquina.

   La regla del tema: el frío es casi siempre un EFECTO SECUNDARIO. El primer
   aparato se hizo para controlar la humedad, no la temperatura; el primer uso
   masivo fue vender entradas de cine; y su consecuencia más grande no es el
   confort, sino un mapa de población distinto. Se cuenta siempre qué se
   buscaba de verdad, que no era estar fresco.
   ========================================================================== */

export const AIRE_ACONDICIONADO: Short[] = [
  {
    id: "aire-para-una-imprenta",
    titulo: "Nació para secar el papel",
    gancho: "El problema era la humedad, que descolocaba los colores. El frío salió por accidente.",
    categoria: "Aire acondicionado",
    color: "var(--slate)",
    encargo: "Un taller de imprenta antiguo con tuberías metálicas cruzando el techo.",
    fotos: [
      {
        archivo: "Impressora Marinoni e máquina de linotipo na oficina gráfica de O Taquaryense.jpg",
        autor: "Una prensa tipográfica Marinoni de 1910, todavía en uso en el taller de un periódico brasileño. Fotografía de João V Souza P.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Impressora_Marinoni_e_m%C3%A1quina_de_linotipo_na_oficina_gr%C3%A1fica_de_O_Taquaryense.jpg",
        foco: "50% 45%",
        alt: "Una prensa de imprenta de hierro pintada de verde, con ruedas dentadas grandes y rodillos de tinta.",
      },
      {
        archivo: "Lienz SG8.JPG",
        autor: "Niebla de amanecer en el valle del Rin: el vapor de agua que el aire deja de sostener al enfriarse. Fotografía de böhringer friedrich.",
        licencia: "CC BY-SA 2.5",
        fuente: "https://commons.wikimedia.org/wiki/File:Lienz_SG8.JPG",
        foco: "50% 45%",
        alt: "Un valle al amanecer con bancos de niebla baja entre los árboles y montañas azuladas al fondo.",
      },
      {
        archivo: "Puolauskone Finlaysonilla vuonna 1956. Kuva Vapriikin kuva-arkisto. (16248845287).jpg",
        autor: "Una máquina de bobinar en la hilatura de algodón de Finlayson, 1956. Archivo del museo Vapriikki.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Puolauskone_Finlaysonilla_vuonna_1956._Kuva_Vapriikin_kuva-arkisto._(16248845287).jpg",
        foco: "50% 45%",
        alt: "Filas de bobinas de hilo en una máquina de hilatura, fotografiadas en blanco y negro.",
      },
      {
        archivo: "Bonn, Post-Tower -- 2017 -- 2131.jpg",
        autor: "La fachada acristalada de una torre de oficinas en Bonn. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Bonn,_Post-Tower_--_2017_--_2131.jpg",
        foco: "50% 45%",
        alt: "Un edificio alto enteramente de cristal, con el cielo y las nubes reflejados en sus plantas.",
      },
    ],
    entrada:
      "Brooklyn, 1902. Una imprenta que hace tiradas en color tiene un problema que le está costando una fortuna y que nadie sabe cómo atajar: en verano el papel absorbe humedad del aire, se dilata unas décimas de milímetro y las cuatro pasadas de color dejan de encajar entre sí, de modo que las imágenes salen con los bordes desplazados y la tirada entera va a la basura. Han probado a cambiar de papel, de tinta y de horario, y nada. Piden ayuda a una empresa de calefacción, que les manda a un ingeniero de veinticinco años recién salido de la universidad.",
    paginas: [
      {
        rotulo: "Secar enfriando",
        texto:
          "El ingeniero se dio cuenta de que no hacía falta secar el aire con productos químicos, sino aprovechar una propiedad conocida: el aire frío no puede sostener tanto vapor de agua como el caliente. Hizo pasar el aire del taller por una batería de tubos con agua muy fría; el vapor se condensaba sobre el metal y goteaba fuera, y el aire salía con una humedad exacta y controlable. Al enfriarse por el camino, además, refrescaba la sala. Ese era el efecto secundario, y durante casi veinte años se consideró un detalle sin importancia comercial.",
        destacado: { tipo: "frase", frase: "El aire frío no aguanta tanto vapor: por eso se seca." },
      },
      {
        rotulo: "Fábricas primero",
        texto:
          "Los primeros clientes fueron todos industriales, y ninguno buscaba comodidad. Las fábricas de tabaco necesitaban humedad alta para que las hojas no se quebraran; las de pasta y las de chicle, aire seco para que el producto no se pegara; las hilaturas de algodón, un punto exacto para que el hilo no se rompiera en el telar. El propio ingeniero publicó en 1911 unas tablas que relacionaban temperatura, humedad y contenido de agua del aire, las cedió al gremio y siguieron usándose durante décadas como la base de todos los cálculos del sector.",
        destacado: { tipo: "cifra", cifra: "1902", unidad: "el año del primer aparato" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una industria enorme construida sobre un malentendido afortunado: se vendía control de humedad y la gente terminó comprando frío. Y quedó el principio, que es el mismo en cualquier aparato de hoy: el agua que gotea del tubo de un aparato de aire acondicionado en la fachada de un edificio no es una fuga ni un fallo, es exactamente lo que aquella imprenta pagó por conseguir en 1902. Es la humedad del aire de la habitación condensada sobre unos tubos fríos, cayendo a la calle igual que caía sobre el suelo de aquel taller.",
      },
    ],
  },

  {
    id: "cines-de-verano",
    titulo: "Los cines trajeron el frío",
    gancho: "Antes se cerraban en verano por el calor. Al enfriarlos, la gente entraba solo por estar fresca.",
    categoria: "Aire acondicionado",
    color: "var(--clay)",
    encargo: "Una marquesina de cine antigua con carteles y bombillas encendidas de noche.",
    entrada:
      "Estados Unidos, 1925. Las salas de cine son locales cerrados, sin ventanas y con cientos de personas dentro, así que en julio y agosto se vuelven insoportables y muchas simplemente echan el cierre hasta septiembre. Un empresario decide probar lo contrario: gastarse el dinero en refrigerar la sala y anunciarlo en la marquesina, con letras más grandes que el título de la película.",
    paginas: [
      {
        rotulo: "La marquesina",
        texto:
          "Funcionó por encima de cualquier previsión. La gente entraba a ver lo que fuera, y en muchos casos entraba explícitamente a refrescarse, porque en toda la ciudad no había otro sitio público con aire frío. Las marquesinas de la época están llenas de carteles con carámbanos de hielo dibujados y la palabra refrigerado en letras enormes. Los cines empezaron a estrenar en verano las películas grandes, que hasta entonces se reservaban para el invierno, y de ahí viene la costumbre, todavía viva, de guardar los estrenos más taquilleros para los meses de calor.",
        destacado: { tipo: "frase", frase: "Entraban a refrescarse, y de paso veían la película." },
      },
      {
        rotulo: "El problema del reparto",
        texto:
          "La parte técnica no era el frío, sino repartirlo. Los primeros intentos soltaban el aire helado por rejillas en el suelo, y el resultado era una sala con los pies congelados y la cabeza caliente, porque el aire frío pesa más y se queda abajo. La solución fue meterlo por arriba a poca velocidad, en corrientes suaves que bajan mezclándose, un método que se calculó a base de humo de colores y observación, y que sigue siendo el criterio con el que se diseñan hoy los conductos de un teatro, un aula o una oficina grande.",
        destacado: { tipo: "cifra", cifra: "300", unidad: "salas refrigeradas ya en 1930" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "De los cines saltó a los grandes almacenes, a los trenes, a los hoteles y a las oficinas, y en cada sitio pasó lo mismo: al principio se anunciaba como un lujo excepcional y en pocos años se convirtió en algo cuya ausencia se protesta. Quedó también la palabra veraniego aplicada a las películas, y quedó una imagen de aquellos años que resume el asunto entero: familias enteras pasando la tarde del domingo dentro de una sala oscura viendo dos veces la misma película, no porque les gustara tanto, sino porque en casa hacía cuarenta grados.",
      },
    ],
  },

  {
    id: "el-mapa-que-cambio",
    titulo: "El aire acondicionado movió ciudades",
    gancho: "Zonas donde nadie quería vivir por el calor se llenaron en treinta años. Y el reparto del poder cambió con ellas.",
    categoria: "Aire acondicionado",
    color: "var(--plum)",
    encargo: "Un barrio de casas bajas idénticas visto desde el aire, con palmeras y calor.",
    entrada:
      "Estados Unidos, entre 1950 y 1980. Los estados del sur, calurosos y húmedos, llevan un siglo perdiendo población frente al norte industrial. En treinta años eso se da la vuelta por completo y decenas de millones de personas se mudan al sur. Hay muchas causas —el aire acondicionado no es la única—, pero es la que hizo llevaderos los veranos en zonas donde antes se paraba de trabajar.",
    paginas: [
      {
        rotulo: "Donde no se podía",
        texto:
          "El aparato doméstico de ventana se abarató a partir de los años cincuenta y se metió en las casas corrientes. Con él, ciudades que habían crecido despacio se dispararon: se levantaron barrios enteros de casas bajas en zonas de desierto y de pantano, con fábricas que ya podían trabajar todo el año y oficinas que no cerraban en agosto. En treinta años, algunas de aquellas ciudades multiplicaron por diez su población. Los economistas que han estudiado el fenómeno calculan que buena parte de esa migración interna no se explica sin la máquina.",
        destacado: { tipo: "frase", frase: "Se llenaron de gente zonas de desierto y de pantano." },
      },
      {
        rotulo: "El precio eléctrico",
        texto:
          "El coste está en el enchufe. Refrigerar edificios consume ya alrededor de una décima parte de toda la electricidad del mundo, y la demanda crece más deprisa que casi ninguna otra, sobre todo en los países cálidos donde la clase media puede permitírselo por primera vez. Es además un consumo con un problema de forma: se concentra en las tardes de las olas de calor, exactamente cuando la red está más apurada, así que obliga a mantener centrales encendidas solo para esas horas. Y lo que expulsa al exterior es aire caliente, que sube unos grados la temperatura de la calle.",
        destacado: { tipo: "cifra", cifra: "10", unidad: "por ciento de la electricidad mundial" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mapa distinto. Con la población se movieron los escaños del Congreso americano, que se reparten por habitantes, así que un electrodoméstico terminó cambiando el peso político de medio país. Quedó también una dependencia incómoda: en las zonas que crecieron gracias a él, un corte de luz en verano ya no es una molestia sino un problema de salud pública, sobre todo para la gente mayor. Aquel ingeniero de veinticinco años que intentaba que los colores de una imprenta encajaran no tenía forma de imaginar que estaba moviendo a millones de personas a través de un continente.",
      },
    ],
  },
];
