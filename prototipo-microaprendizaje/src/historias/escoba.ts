import type { Short } from "../shorts";

/* ==========================================================================
   La escoba.

   El objeto mas comun de una casa y el que menos se ha mirado. Tres asuntos:
   por que barre mejor plana que redonda, que planta se cultivo solo para
   fabricarla, y de donde sale la bruja voladora.

   La regla del tema: se explica SIEMPRE POR QUE ARRASTRA O NO ARRASTRA la
   suciedad antes de contar la mejora. Ancho de contacto, rigidez y
   flexibilidad de la fibra. En el short de la bruja, se distingue lo que
   dicen los papeles de un juicio de lo que dice un grabado, y se recuerda
   que casi todas esas declaraciones se obtuvieron bajo tortura.
   ========================================================================== */

export const ESCOBA: Short[] = [
  {
    id: "la-escoba-plana",
    titulo: "La escoba era redonda",
    gancho: "Durante siglos fue un manojo redondo que se deshacía en semanas. Alguien la cosió plana y triplicó el ancho.",
    categoria: "Escoba",
    color: "var(--ochre)",
    encargo: "Una escoba de sorgo cosida con dos filas de puntadas, apoyada en una pared.",
    fotos: [
      {
        archivo: "Broom maker in his workshop with a young attendant PK-T-33, PK-T-AW-2367.tiff",
        autor: "Un escobero atando una escoba en su taller, dibujo de Gijsbertus van den Berg, 1799.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Broom_maker_in_his_workshop_with_a_young_attendant_PK-T-33,_PK-T-AW-2367.tiff",
        foco: "50% 55%",
        alt: "Dibujo de un hombre sentado atando un manojo de paja con un torno de cuerda, con escobas redondas en el suelo.",
      },
      {
        archivo: "Broomcorn field in Ain.jpg",
        autor: "Un campo de sorgo escobero, con las panojas ya formadas. Fotografía de Tangopaso.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:Broomcorn_field_in_Ain.jpg",
        foco: "50% 40%",
        alt: "Cañas altas de sorgo con penachos amarillentos en lo alto, apretadas en un bancal.",
      },
      {
        archivo: "June 1962 INTERIOR OF ELDERS' ROOM, SHOWING SHAKER FURNITURE AND STOVE - Shaker Church Family Main Dwelling House, U.S. Route 20, Hancock, Berkshire County, MA HABS MASS,2-HANC,4-32.tif",
        autor: "El cuarto de los ancianos en una casa shaker de Hancock, Massachusetts. Fotografía de Jack Boucher, 1962.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:June_1962_INTERIOR_OF_ELDERS%27_ROOM,_SHOWING_SHAKER_FURNITURE_AND_STOVE_-_Shaker_Church_Family_Main_Dwelling_House,_U.S._Route_20,_Hancock,_Berkshire_County,_MA_HABS_MASS,2-HANC,4-32.tif",
        foco: "45% 48%",
        alt: "Una habitación de tablas con armarios empotrados, cajas redondas apiladas, sillas de anea y una estufa de hierro.",
      },
      {
        archivo: "2014-365-42 Dust My Broom (12475384764).jpg",
        autor: "Una escoba plana gastada por el uso. Fotografía de Alan Levine.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:2014-365-42_Dust_My_Broom_(12475384764).jpg",
        foco: "50% 55%",
        alt: "La cabeza de una escoba de fibra clara, aplastada y abierta en abanico, apoyada contra un escalón.",
      },
    ],
    entrada:
      "Estado de Nueva York, 1798. Una escoba de esa época es un manojo de ramas o de fibras atado alrededor de un palo, con forma redonda, como un pincel gordo. Barre poco porque toca el suelo con una superficie pequeña, y se deshace en pocas semanas porque el atado se afloja y las fibras se van saliendo de una en una. Es un objeto que todo el mundo tiene y que nadie ha mirado con atención. Un miembro de una comunidad religiosa del norte del estado se pone a mirarlo, y le da una vuelta que sigue vigente.",
    paginas: [
      {
        rotulo: "El cosido",
        texto:
          "Lo que hizo fue prensar el manojo entre dos tablas hasta dejarlo plano como un abanico. Después lo cosió con hilo grueso, dando dos filas de puntadas que atraviesan las fibras de lado a lado. Con eso el manojo deja de ser redondo y se convierte en una lámina ancha. Una escoba plana toca el suelo en una línea de treinta centímetros en vez de en un círculo pequeño. Barre casi el triple de suelo en cada pasada y arrastra el polvo por delante en vez de esparcirlo. Y como el cosido sujeta cada fibra, ya no se afloja ni se va deshaciendo por los bordes.",
        destacado: { tipo: "frase", frase: "Prensada entre dos tablas y cosida con dos filas de puntadas." },
      },
      {
        rotulo: "La comunidad",
        texto:
          "La comunidad que lo inventó vivía de fabricar cosas bien hechas y de venderlas fuera. Era un grupo religioso que hacía voto de celibato, así que no tenía hijos a los que dejar nada. Eso les llevó a una costumbre poco corriente en la época: no patentaban casi nada de lo que inventaban. Consideraban que quedarse con el uso exclusivo de una idea útil era una forma de avaricia. La escoba plana se copió por todas partes en pocos años y ellos no cobraron un céntimo. De ese mismo taller salieron también la sierra circular y una lavadora de ropa mecánica.",
        destacado: { tipo: "cifra", cifra: "1798", unidad: "el año de la escoba plana" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la forma, porque cualquier escoba de las de barrer un patio sigue siendo plana y cosida igual. Quedó el ancho como medida del oficio, que es lo primero que mira quien barre para vivir. Quedaron los muebles de aquella comunidad, que hoy se subastan por cifras que ellos habrían encontrado indecentes. Hacían las cosas sin adornos, por una idea religiosa según la cual lo útil ya es bastante bonito. Y quedó la escoba como ejemplo de que una mejora enorme puede caber en un cambio ridículo. Nadie inventó nada nuevo: alguien aplastó lo que ya había y lo cosió para que se quedara así.",
      },
    ],
  },
  {
    id: "la-planta-que-solo-sirve-para-barrer",
    titulo: "El cereal de las escobas",
    gancho: "Se cultiva como el maíz, pero no se come. Lo único que se aprovecha son las ramitas del racimo.",
    categoria: "Escoba",
    color: "var(--clay)",
    curioso: true,
    encargo: "Panojas de sorgo de escobas secandose colgadas boca abajo en un cobertizo.",
    fotos: [
      {
        archivo: "Sorghum bicolor.JPG",
        autor: "Panojas de sorgo (Sorghum bicolor) maduras en el campo.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sorghum_bicolor.JPG",
        foco: "50% 40%",
        alt: "Racimos densos de grano de sorgo en lo alto de sus tallos, recortados contra un cielo azul.",
      },
      {
        archivo: "Sorghum bicolor (Moench).JPG",
        autor: "Detalle de la panoja de sorgo, el racimo que remata el tallo.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sorghum_bicolor_(Moench).JPG",
        foco: "50% 45%",
        alt: "Racimo de sorgo visto de cerca, con las ramitas abiertas y los granos pequeños.",
      },
      {
        archivo: "Sorghum Harvest.jpg",
        autor: "Una cosechadora recogiendo sorgo en Oklahoma, 2014.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Sorghum_Harvest.jpg",
        foco: "50% 50%",
        alt: "Cosechadora avanzando por un campo de sorgo y descargando el grano en un remolque.",
      },
      {
        archivo:
          "Starr-180326-2976-Sorghum sp-recently harvested in old cane field new crop aerial view-Kahului-Maui (41243017371).jpg",
        autor: "Campos de sorgo recién cosechados vistos desde el aire, en Maui. Fotografía de Forest y Kim Starr.",
        licencia: "CC BY 3.0 us",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Starr-180326-2976-Sorghum_sp-recently_harvested_in_old_cane_field_new_crop_aerial_view-Kahului-Maui_(41243017371).jpg",
        foco: "50% 50%",
        alt: "Vista aérea de parcelas de cultivo en franjas, unas segadas y otras todavía verdes.",
      },
    ],
    entrada:
      "Estados Unidos y el sur de Europa, siglo XIX. El sorgo es un cereal africano parecido al maíz que se cultiva en medio mundo para hacer harina y para dar de comer al ganado. Una de sus variedades salió rara: da un grano pequeño y de mal sabor. En cambio produce una panoja enorme, que es el racimo que remata el tallo, llena de ramitas largas, rectas y flexibles. A nadie le servía para comer. Y acabó cultivándose durante un siglo por lo único que hacía bien, que era barrer.",
    paginas: [
      {
        rotulo: "La panoja",
        texto:
          "Una panoja es el racimo que remata el tallo de un cereal y donde va el grano. En el trigo es una espiga apretada, y en este sorgo es un abanico de ramitas de medio metro. Esas ramitas tienen justo lo que hace falta en una escoba y es difícil de conseguir en otra planta. Son rígidas para arrastrar la suciedad y a la vez flexibles para no romperse al doblarse. Además se secan sin volverse quebradizas, que es donde fallan casi todas las hierbas. Se cosechan a mano, se les quita el grano con un peine de metal y se ponen a secar a la sombra.",
        destacado: { tipo: "frase", frase: "Rígidas para arrastrar y flexibles para no romperse." },
      },
      {
        rotulo: "El cultivo",
        texto:
          "Durante el siglo XIX aquello se convirtió en una industria entera en varias comarcas. Pueblos enteros vivían de sembrar sorgo de escobas, cosecharlo y coserlo en talleres familiares. Es un cultivo exigente que se recoge a mano en pocos días, cuando la ramita está en su punto. Si se corta pronto queda blanda y si se corta tarde se vuelve quebradiza y no sirve. Esa dependencia del trabajo manual es lo que acabó con el negocio en los países ricos. Hoy casi toda la escoba vegetal del mundo viene de México y de algunos países del este de Europa.",
        destacado: { tipo: "cifra", cifra: "50", unidad: "centímetros mide una ramita buena" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un cultivo raro, porque casi todas las plantas domesticadas se seleccionaron para comerlas mejor. Esta se seleccionó al revés, empeorando el grano a cambio de mejorar la ramita. Quedaron las escobas de plástico, que ganaron terreno porque se lavan y no se apolillan. La de sorgo sigue vendiéndose porque recoge mejor el polvo fino, ya que la fibra vegetal se carga de electricidad y lo atrae. Y quedó un ejemplo de hasta dónde llega la agricultura cuando le hace falta una pieza. Si no hay ningún material que sirva, se cultiva una planta durante generaciones hasta que sirva.",
      },
    ],
  },
  {
    id: "la-escoba-de-la-bruja",
    titulo: "La escoba de la bruja",
    gancho: "En los juicios por brujería no aparecen escobas volando. La imagen la fabricaron los libros ilustrados.",
    categoria: "Escoba",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un grabado antiguo con figuras montadas en palos y escobas sobre un pueblo.",
    entrada:
      "Europa, siglo XV. Los procesos por brujería llenan miles de folios en tribunales de media Europa, y son en su mayoría contra mujeres pobres del campo, viudas o sin familia que las defendiera. En esos papeles se las acusa de pactos con el diablo, de reuniones nocturnas y de haber echado a perder el ganado del vecino. Lo que apenas aparece en ninguno es una escoba. Y sin embargo es en ese mismo siglo cuando se fija para siempre la imagen de la bruja montada en una, que es la que sigue saliendo en cualquier disfraz.",
    paginas: [
      {
        rotulo: "El dibujo",
        texto:
          "El primer dibujo conocido de mujeres volando en escoba está en un manuscrito francés de 1451. Es una ilustración al margen de un poema, hecha por un copista para acompañar el texto. El poema hablaba de mujeres que iban por el aire a reuniones nocturnas, sin decir en qué. El dibujante tuvo que decidirlo él, y eligió lo primero que tenía a mano en cualquier casa. La escoba era el objeto doméstico femenino por excelencia, el que estaba detrás de todas las puertas. Dibujar a una mujer sobre una escoba decía de un vistazo quién era, sin escribir una palabra.",
        destacado: { tipo: "cifra", cifra: "1451", unidad: "el primer dibujo conocido" },
      },
      {
        rotulo: "Los ungüentos",
        texto:
          "Hay además una parte de los expedientes que se cita mucho y que conviene contar con cuidado. Varias declaraciones mencionan ungüentos que las acusadas se untaban antes de las supuestas reuniones. En las recetas que copiaron algunos jueces aparecen plantas como la belladona o el beleño. Son plantas que en dosis pequeñas producen mareo, visiones y sensación de estar flotando. De ahí sale la explicación de que algunas de aquellas mujeres creyeran de verdad haber volado. Conviene recordar que casi todas esas declaraciones se obtuvieron bajo tortura, así que valen lo que valen.",
        destacado: { tipo: "frase", frase: "Casi todo aquello se declaró bajo tortura." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una imagen que los libros impresos repitieron durante siglos hasta volverla obligatoria. Cuando llegó la imprenta, los tratados sobre brujería salieron ilustrados y todos copiaban el mismo grabado. Quedó también lo que la imagen tapa, que es de lo que iban en realidad aquellos juicios. Se calcula que entre cuarenta y sesenta mil personas fueron ejecutadas en Europa por brujería. La mayoría eran mujeres mayores, pobres, viudas o sin familia que las defendiera. Del expediente de un tribunal a un disfraz de fiesta hay quinientos años y una escoba dibujada al margen.",
      },
    ],
  },
];
