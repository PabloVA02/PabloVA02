import type { Short } from "../shorts";

/* ==========================================================================
   Plástico.

   Un material que hoy asociamos a la basura y que nació, literalmente, para
   salvar elefantes y tortugas. El riesgo del tema es el panfleto ecológico:
   toneladas, islas de residuos y culpa. Todo eso es verdad y no cuenta nada
   que el lector no sepa ya.

   La regla del tema: se cuenta QUÉ SUSTITUYÓ. Cada plástico apareció para
   reemplazar algo que se había vuelto carísimo o escaso —marfil, laca de
   insecto, caparazón de tortuga, seda— y durante décadas fue el material
   caro y milagroso, no el barato. Ese giro es la historia.

   Y el final siempre aterriza en un objeto que el lector tiene en casa.
   ========================================================================== */

export const PLASTICO: Short[] = [
  {
    id: "bolas-de-billar",
    titulo: "El primer plástico se hizo para salvar elefantes",
    gancho: "Las bolas de billar se hacían de marfil y se acababan los colmillos. Ofrecieron un premio.",
    categoria: "Plástico",
    color: "var(--ochre)",
    encargo: "Bolas de billar viejas amontonadas sobre un paño verde gastado.",
    entrada:
      "Estados Unidos, 1863. El billar se ha puesto de moda y las bolas se fabrican con marfil de colmillo de elefante, la única materia con la dureza y el rebote adecuados. De cada colmillo salen tres o cuatro bolas buenas. Un fabricante de Nueva York, harto de que le falte material, ofrece diez mil dólares a quien encuentre un sustituto.",
    paginas: [
      {
        rotulo: "El premio",
        texto:
          "Diez mil dólares de entonces eran una fortuna, el sueldo de muchos años de trabajo, y el anuncio corrió por los periódicos. Lo intentó un impresor joven de un pueblo del norte que ni siquiera era químico y que trabajaba en el cobertizo de detrás de su casa. Partió de un material conocido, una pasta hecha con algodón tratado con ácido, y probó a mezclarlo con alcanfor, una resina que huele a farmacia antigua. La masa resultante se ablandaba con el calor, se dejaba moldear y al enfriarse quedaba dura y brillante. La patentó en 1869 con un nombre que aún se usa: celuloide.",
        destacado: { tipo: "cifra", cifra: "10.000", unidad: "dólares por sustituir el marfil" },
      },
      {
        rotulo: "El defecto",
        texto:
          "Nunca cobró el premio, porque las bolas de celuloide tenían un problema serio: el material es tan inflamable que se usaba también para fabricar explosivos. Un dueño de salón le escribió contando que, cuando dos bolas chocaban fuerte, saltaba un chasquido parecido a un disparo y todos los vaqueros de la sala sacaban el revólver. Aquella carta puede ser una exageración comercial, pero el peligro era real: hubo peines que ardieron en manos de sus dueñas y salas de cine que se quemaron enteras, porque la película que se proyectaba era del mismo material.",
        destacado: { tipo: "frase", frase: "Al chocar dos bolas sonaba como un disparo." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El celuloide no sirvió para el billar, pero sirvió para casi todo lo demás. Sustituyó al carey de las tortugas en los peines y en las monturas de gafas, al marfil en las teclas de piano y en los mangos de cuchillo, y sobre todo se convirtió en el soporte de la fotografía y del cine durante casi un siglo. La palabra celuloide todavía se usa como sinónimo de película. Y aquellas bolas de billar que empezaron todo esto se fabrican hoy con otra resina, ya sin peligro de incendio, en fábricas que no han visto un colmillo de elefante en su vida.",
      },
    ],
  },

  {
    id: "baquelita",
    titulo: "El plástico moderno nació buscando barniz",
    gancho: "Un químico quería imitar la resina que sueltan unos insectos. Le salió un material que no existía.",
    categoria: "Plástico",
    color: "var(--slate)",
    encargo: "Un teléfono negro de sobremesa de los años treinta sobre madera oscura.",
    entrada:
      "Nueva York, 1907. Un químico belga instalado en Estados Unidos trabaja en el laboratorio del jardín de su casa. Busca un sustituto de la goma laca, un barniz aislante que se obtiene de las secreciones de un insecto del sudeste asiático y del que hacen falta cien mil bichos para reunir medio kilo. La industria eléctrica, que crece a toda velocidad, lo necesita a toneladas.",
    paginas: [
      {
        rotulo: "El accidente útil",
        texto:
          "Mezcló dos sustancias baratas y conocidas, un derivado del alquitrán y el formol de los conservantes, y las calentó a presión dentro de una olla de acero que él mismo se había mandado construir. Lo que salió no fue un barniz: fue un sólido de color ámbar oscuro que no se ablandaba con el calor, no ardía con facilidad, no conducía la electricidad y no lo atacaban ni los ácidos ni el agua. Tampoco se podía volver a fundir. Una vez formado, aquello era para siempre, y esa era exactamente la propiedad que no tenía ningún material anterior.",
        destacado: { tipo: "frase", frase: "Una vez endurecido, no había manera de deshacerlo." },
      },
      {
        rotulo: "El material de todo",
        texto:
          "Fue el primer plástico enteramente artificial, sin nada de origen vegetal ni animal en su composición, y se anunció con una frase que hoy suena a advertencia: el material de los mil usos. Con él se hicieron los enchufes, los interruptores y los cuadros eléctricos de medio mundo, y también teléfonos, carcasas de radio, mangos de sartén, ceniceros, bolas de billar, joyería barata y las primeras cámaras fotográficas populares. En 1930 se producían miles de toneladas al año. Su inventor vendió la empresa por unos veinte millones de dólares y se retiró a vivir en un barco.",
        destacado: { tipo: "cifra", cifra: "1907", unidad: "el primer plástico totalmente artificial" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquel material abrió la puerta a todos los demás: en las tres décadas siguientes llegaron el nailon, el metacrilato, el poliestireno y el polietileno de las bolsas, y a partir de ahí el objeto barato dejó de ser una imitación pobre de otra cosa. Los aparatos de aquellos años se buscan hoy entre coleccionistas precisamente porque el material aguanta: siguen enteros noventa años después. Es el mismo motivo por el que una bolsa de la compra sigue entera en el fondo del mar. Lo que se vendió como la gran virtud del invento resultó ser, con el tiempo, su principal problema.",
      },
    ],
  },

  {
    id: "tupperware",
    titulo: "El táper no se vendió en las tiendas",
    gancho: "El cierre era genial y nadie lo compraba, porque en la tienda nadie te enseñaba a cerrarlo.",
    categoria: "Plástico",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un recipiente de plástico translúcido de los años cincuenta sobre un mantel de cuadros.",
    entrada:
      "Estados Unidos, 1946. Un inventor que trabajaba en una fábrica de plásticos saca al mercado unos recipientes de cocina con una idea nueva: una tapa que se cierra a presión, como la de un bote de pintura, y deja el aire fuera. En una época sin frigorífico en muchas casas, aquello alarga días la vida de la comida. No los compra prácticamente nadie.",
    paginas: [
      {
        rotulo: "El problema",
        texto:
          "El fallo no era el producto, era el mostrador. Puesto en un estante, aquel recipiente parecía un cacharro caro y raro, y la gente no entendía qué tenía de especial ni sabía cerrarlo: había que apretar el borde y levantar una esquina de la tapa para que saliera el aire, un gesto que hay que ver hacer una vez. Sin esa demostración, el comprador se llevaba a casa una fiambrera cara que no cerraba bien, y no repetía. El invento llevaba cinco años en las tiendas y su fabricante estaba a punto de tirar la toalla.",
        destacado: { tipo: "frase", frase: "Había que ver el gesto una vez para entenderlo." },
      },
      {
        rotulo: "Las reuniones",
        texto:
          "Una vendedora divorciada y con un hijo se dio cuenta antes que nadie y empezó a vender los recipientes en casas particulares, reuniendo a las vecinas por la tarde: enseñaba el cierre, tiraba el recipiente lleno de líquido contra el suelo o lo lanzaba por los aires y no se derramaba nada. Vendía más ella sola que muchas tiendas juntas. El fabricante la contrató, retiró el producto de los comercios en 1951 y montó todo el negocio alrededor de aquellas reuniones. Las ventas se dispararon, y decenas de miles de mujeres empezaron a ganar un dinero propio en un país donde muchas no tenían cuenta bancaria.",
        destacado: { tipo: "cifra", cifra: "1951", unidad: "se retiró de las tiendas y despegó" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La vendedora llegó a ser la primera mujer en la portada de la principal revista de negocios del país. Discutió con el fabricante, que no llevaba bien que ella fuera más famosa que él, y la despidió en 1958 con una indemnización pequeña; él vendió la empresa poco después por dieciséis millones de dólares. La marca acabó convertida en nombre común: en España y en media Europa un táper es cualquier fiambrera, sea de la marca que sea. Y sigue siendo el ejemplo que se pone cuando un producto excelente fracasa por venderse en el sitio equivocado.",
      },
    ],
  },
];
