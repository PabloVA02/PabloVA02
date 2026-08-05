import type { Short } from "../shorts";

/* ==========================================================================
   Inventos.

   El tema donde más daño hace la versión de colegio: un genio, una idea, una
   fecha. Casi nunca fue así. Los inventos suelen tener varios padres a la vez
   trabajando en países distintos, y el que se lleva el nombre es el que
   resolvió la parte industrial, no el que tuvo la ocurrencia.

   La regla del tema: contar qué había antes. Si antes de Edison ya había
   bombillas —y las había—, la historia no es «quién la inventó» sino «qué le
   faltaba para servir». Esa pregunta tiene respuesta técnica concreta y es
   mucho más interesante que un nombre.

   El accidente afortunado se admite, pero sin trampa: casi todos los
   accidentes famosos le ocurrieron a alguien que llevaba años mirando eso
   mismo. Fleming ya buscaba antibacterianos. Spencer ya trabajaba con radar.
   ========================================================================== */

export const INVENTOS: Short[] = [
  {
    id: "microondas-chocolatina",
    titulo: "Una chocolatina derretida en el bolsillo",
    gancho: "Un ingeniero de radares notó algo pegajoso en el bolsillo y fue a por maíz.",
    categoria: "Inventos",
    color: "var(--clay)",
    encargo: "Un magnetrón antiguo de radar, metal y cobre, sobre fondo neutro.",
    entrada:
      "En 1945, Percy Spencer trabajaba en Raytheon con magnetrones, los tubos que generan las microondas de los radares militares. Un día, de pie junto a uno encendido, notó que la chocolatina que llevaba en el bolsillo del pantalón se había convertido en una pasta. La anécdota es famosa. Lo interesante es lo que hizo a continuación, que fue lo contrario de asustarse.",
    paginas: [
      {
        rotulo: "El maíz",
        texto:
          "Spencer no tenía estudios universitarios; era huérfano, había dejado la escuela a los doce años y aprendió electrónica solo, en la Marina. Al notar la chocolatina no concluyó nada: montó un experimento. Al día siguiente llevó granos de maíz y los puso delante del magnetrón. Saltaron por todo el laboratorio. Al siguiente probó con un huevo dentro de una tetera, y el huevo explotó en la cara de un compañero que se había acercado a mirar. Con eso ya tenía las dos cosas que hacen falta para patentar algo: un efecto reproducible y una idea de para qué sirve.",
        destacado: {
          tipo: "frase",
          frase: "La chocolatina fue el accidente. El maíz fue el método.",
        },
      },
      {
        rotulo: "El armario",
        texto:
          "Raytheon patentó el horno en 1945 y sacó el primer modelo comercial en 1947: el Radarange. Medía casi metro ochenta, pesaba unos <strong>340 kilos</strong>, había que refrigerarlo con agua corriente y costaba alrededor de cinco mil dólares de la época, el precio de una casa pequeña. Se vendió a restaurantes, barcos y comedores de tren, no a hogares. El horno doméstico tardó veinte años: llegó en 1967, ya de sobremesa y por unos quinientos dólares. Lo que hizo posible el salto no fue la idea, sino abaratar y encoger el magnetrón.",
        destacado: { tipo: "cifra", cifra: "340", unidad: "kilos pesaba el primer microondas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El principio sigue siendo el mismo y suele contarse mal: no es que las microondas «hagan vibrar las moléculas de agua a su frecuencia de resonancia», porque eso no es lo que ocurre. El campo eléctrico cambia de sentido miles de millones de veces por segundo y las moléculas de agua, que son polares, intentan reorientarse cada vez; al rozar unas con otras, ese tirón se convierte en calor. Por eso el microondas calienta lo húmedo y deja frío el plato seco, y por eso descongela mal: el hielo tiene las moléculas quietas y le cuesta mucho más girarlas.",
      },
    ],
  },

  {
    id: "posit-pegamento-malo",
    titulo: "Un pegamento que no pegaba",
    gancho: "Tardó doce años en encontrar para qué servía, y lo salvó un coro de iglesia.",
    categoria: "Inventos",
    color: "var(--ochre)",
    encargo: "Un taco de notas adhesivas amarillas, luz lateral, esquina levantada.",
    entrada:
      "En 1968, un químico de 3M llamado Spencer Silver buscaba un adhesivo más fuerte para la industria aeronáutica. Le salió lo contrario: unas microesferas que se pegaban con muy poca fuerza, se despegaban sin dejar rastro y podían volver a pegarse muchas veces. Un fracaso limpio. Silver estaba convencido de que aquello servía para algo, pero no sabía para qué.",
    paginas: [
      {
        rotulo: "Buscando problema",
        texto:
          "Silver pasó cinco años dando charlas internas sobre su pegamento inútil, lo que en 3M se conocía medio en broma como «la solución sin problema». Su mejor idea fue un tablón de anuncios pegajoso al que se le pinchaban papeles normales, y no entusiasmó a nadie. El giro llegó en 1974 por otro lado: Art Fry, otro empleado de la empresa, cantaba en el coro de su parroquia y se hartaba de que los papelitos con los que marcaba los himnos se le cayeran del cantoral. Había oído una de aquellas charlas. Se le ocurrió al revés: el pegamento no en el tablón, en el papel.",
        destacado: {
          tipo: "frase",
          frase: "El invento no fue el pegamento. Fue ponérselo al papel.",
        },
      },
      {
        rotulo: "Boise",
        texto:
          "El producto tampoco arrancó a la primera. Se probó en cuatro ciudades en 1977 con el nombre <em>Press'n Peel</em> y se vendió fatal: explicarlo en un anuncio no funcionaba, porque nadie sabía que necesitaba eso. En 1979, la empresa cambió de táctica y regaló muestras a mansalva en Boise, Idaho. Cuando fueron a preguntar, en torno al <strong>90 %</strong> de quienes los habían probado dijeron que los comprarían. Con esa cifra en la mano, el lanzamiento nacional de 1980 salió adelante. Lo que vendió el pósit no fue la publicidad: fue que la gente lo tuviera en la mano.",
        destacado: { tipo: "cifra", cifra: "90 %", unidad: "de los que lo probaron lo querían" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El amarillo canario, que hoy es una marca reconocible en cualquier oficina del mundo, no lo eligió ningún departamento de diseño: era el color del papel de desecho que había en el laboratorio de al lado. El caso se estudia en escuelas de negocios desde entonces, y no por lo del pegamento, sino por lo que dice de las organizaciones: durante doce años, una empresa entera tuvo el producto delante, en las manos, con muestras repartidas, sin verlo. La invención estaba hecha. Lo que faltaba era que alguien tuviera exactamente el problema que resolvía.",
      },
    ],
  },

  {
    id: "edison-bombilla",
    titulo: "Edison no inventó la bombilla",
    gancho: "Cuando se puso, ya llevaba cuarenta años inventada. Lo que faltaba era otra cosa.",
    categoria: "Inventos",
    color: "var(--plum)",
    encargo: "Una bombilla de filamento de carbono encendida, muy tenue, sobre negro.",
    entrada:
      "La escena de colegio dice que Thomas Edison probó miles de materiales hasta dar con el filamento y que ahí nació la luz eléctrica. La parte de los miles de pruebas es cierta. La de que naciera ahí, no: cuando Edison se puso a ello, en 1878, la lámpara incandescente llevaba cuatro décadas existiendo en laboratorios de media Europa.",
    paginas: [
      {
        rotulo: "Lo que ya había",
        texto:
          "Warren de la Rue había hecho brillar un filamento de platino dentro de un tubo al vacío en 1840; funcionaba, pero el platino era carísimo. Durante los treinta años siguientes, una lista larga de inventores —Frederick de Moleyns, Heinrich Göbel, Alexander Lodyguin— probó variantes que se fundían en minutos. En Inglaterra, Joseph Swan llevaba desde los años cincuenta detrás del problema y en 1878 patentó una lámpara de filamento de carbono; iluminó su propia casa antes que nadie. El problema no era conseguir luz: era conseguir luz durante meses, con un filamento barato y sin que la bombilla se ennegreciera.",
        destacado: { tipo: "cifra", cifra: "1840", unidad: "la primera lámpara incandescente" },
      },
      {
        rotulo: "Lo que aportó",
        texto:
          "El equipo de Menlo Park entendió algo que los demás no: la clave estaba en la resistencia. Un filamento de resistencia alta consume poca corriente, y poca corriente permite cables finos y baratos; con filamentos de resistencia baja habría hecho falta cablear las ciudades con cobre grueso y arruinarse en el intento. En octubre de 1879 lograron un filamento de algodón carbonizado que aguantó unas trece horas y media, y en 1880 uno de bambú que pasó de mil doscientas. Pero lo importante no era la bombilla: era la central eléctrica, los contadores, los fusibles y la red entera, que también diseñaron.",
        destacado: {
          tipo: "frase",
          frase: "No vendía una lámpara. Vendía el sistema que la enchufaba.",
        },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Swan demandó a la compañía de Edison en el Reino Unido por infracción de patente y ganó. El desenlace fue el habitual en estos casos: en 1883 los dos se unieron en una empresa conjunta, la Edison & Swan United Electric Light Company, a la que en Inglaterra se le llamaba Ediswan. La luz eléctrica no la encendió un genio con una idea, sino una pelea de patentes que acabó en sociedad. Y la frase sobre las mil formas de no hacer una bombilla, que se le atribuye siempre, no aparece en ningún documento suyo de la época.",
      },
    ],
  },
];
