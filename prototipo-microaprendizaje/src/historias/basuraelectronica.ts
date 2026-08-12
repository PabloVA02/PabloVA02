import type { Short } from "../shorts";

/* ==========================================================================
   La basura electrónica.

   El residuo que más crece del mundo y el que peor se recicla. El tema se
   estropea si se convierte en sermón o si se queda en la cifra grande.

   La regla del tema: cada short baja de la cifra mundial a UN GESTO O UN
   OBJETO CONCRETO (el cajón de casa, un cable ardiendo, un contacto
   dorado). Los datos van con su matiz cuando lo tienen, sin exagerar para
   convencer.
   ========================================================================== */

export const BASURA_ELECTRONICA: Short[] = [
  {
    id: "la-montana-de-aparatos",
    titulo: "Nueve kilos de aparatos",
    gancho: "Es el flujo de residuos que más crece del planeta y el que peor se recicla de todos.",
    categoria: "Basura",
    color: "var(--slate)",
    encargo: "Montón de aparatos eléctricos viejos apilados en un punto limpio.",
    fotos: [
      {
        archivo: "RS 42471-12 PCB details 01.jpg",
        autor: "Detalle de una placa de circuito impreso de los años setenta. Fotografía de Mister rf.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:RS_42471-12_PCB_details_01.jpg",
        foco: "50% 45%",
        alt: "Condensadores naranjas y transistores plateados en primer plano sobre una placa verde.",
      },
      {
        archivo: "Electronic waste 2.jpg",
        autor: "Un contenedor de aparatos electrónicos en un punto limpio. Fotografía de Tiia Monto.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Electronic_waste_2.jpg",
        foco: "50% 68%",
        alt: "Una caja metálica azul con ordenadores viejos, un monitor y un teclado tirados en el fondo.",
      },
      {
        archivo: "Gold nugget (placer gold) (Pennsylvania Mountain, Alma Mining District, Park County, Colorado, USA) 2 (17062525062).jpg",
        autor: "Una pepita de oro de aluvión de Colorado. Museo de Naturaleza y Ciencia de Denver. Fotografía de James St. John.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Gold_nugget_(placer_gold)_(Pennsylvania_Mountain,_Alma_Mining_District,_Park_County,_Colorado,_USA)_2_(17062525062).jpg",
        foco: "50% 45%",
        alt: "Un grumo de oro macizo de superficie rugosa y brillo intenso sobre fondo negro.",
      },
      {
        archivo: "DFC 4508 A narrow pathway winds through a cluttered scrapyard piled high with discarded metal plastic pipes and other tangled debris.jpg",
        autor: "Un pasillo estrecho entre montones de chatarra en un desguace. Fotografía de PattayaPatrol.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:DFC_4508_A_narrow_pathway_winds_through_a_cluttered_scrapyard_piled_high_with_discarded_metal_plastic_pipes_and_other_tangled_debris.jpg",
        foco: "50% 45%",
        alt: "Pilas altísimas de metal y tubos enredados a los dos lados de un pasillo estrecho.",
      },
    ],
    entrada:
      "Todo el planeta, con el primer recuento mundial publicado en 2014. Cada año se tiran más de sesenta millones de toneladas de aparatos eléctricos y electrónicos, y ahí entra todo: móviles, secadores, portátiles, lavadoras, cargadores sueltos y juguetes con pilas. Salen a unos nueve kilos por habitante del planeta y al año, aunque el reparto real es brutalmente desigual. Es el flujo de residuos que crece más deprisa que ningún otro, más que la población y más que la economía, y se recicla en regla menos de la cuarta parte. El resto acaba en un cajón de casa, en un vertedero o en un contenedor mal etiquetado camino de otro país.",
    paginas: [
      {
        rotulo: "Por qué crece",
        texto:
          "El crecimiento tiene tres causas y ninguna de ellas se está corrigiendo por su cuenta. La primera es que hay más aparatos por casa, porque casi cualquier objeto lleva ya electrónica dentro. Un felpudo con sensor o una zapatilla con luces son basura electrónica en cuanto se rompen. La segunda es que duran menos, en parte por diseño y en parte porque repararlos no compensa. Cambiar una pantalla puede costar la mitad que un aparato nuevo, y ahí la decisión está tomada. La tercera es que la gente guarda lo viejo en un cajón durante años antes de tirarlo.",
        destacado: { tipo: "frase", frase: "Una zapatilla con luces ya es basura electrónica." },
      },
      {
        rotulo: "Lo de dentro",
        texto:
          "Un aparato electrónico mezcla materiales valiosos y materiales peligrosos en cantidades muy pequeñas. Una tonelada de placas de móvil contiene más oro que una tonelada de mineral de una mina. Lleva también cobre, plata, paladio y unas cuantas tierras raras difíciles de conseguir de otra forma. Y lleva plomo, mercurio, cadmio y unos plásticos con retardantes de llama que no conviene quemar. Separar todo eso exige desmontar a mano y después procesos químicos caros y muy controlados. Por eso una parte del residuo europeo acaba en países donde ese trabajo se hace sin ninguna protección.",
        destacado: { tipo: "cifra", cifra: "60", unidad: "millones de toneladas se tiran cada año" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una norma europea que obliga a las tiendas a recoger el aparato viejo cuando venden uno nuevo. Obliga también a aceptar aparatos pequeños sin necesidad de comprar nada, cosa que casi ningún cliente sabe. Quedó el derecho a reparar, que exige a los fabricantes vender recambios durante años y publicar los manuales. Y quedó el cajón de casa como el gesto más fácil de cambiar de toda la cadena entera. Un móvil guardado cinco años ya no tiene valor de reventa y sigue teniendo el mismo oro dentro que el día que se compró.",
      },
    ],
  },
  {
    id: "quemar-cables-para-sacar-cobre",
    titulo: "Queman cable por el cobre",
    gancho: "Es la manera más rápida de separar el metal del plástico, y la que llena el aire de dioxinas.",
    categoria: "Basura",
    color: "var(--clay)",
    encargo: "Humo negro saliendo de un montón de cables ardiendo en un descampado.",
    fotos: [
      {
        archivo: "Agbogbloshie, Ghana - September 2019.jpg",
        autor: "Quema de cables para recuperar el cobre en el desguace de Agbogbloshie, Ghana, en 2019. Fotografía de Muntaka Chasant.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Agbogbloshie,_Ghana_-_September_2019.jpg",
        foco: "50% 45%",
        alt: "Dos hombres junto a una hoguera de cables ardiendo, con humo negro alrededor y un montón de cable en primer plano.",
      },
      {
        archivo: "DFC 4508 A narrow pathway winds through a cluttered scrapyard piled high with discarded metal plastic pipes and other tangled debris.jpg",
        autor: "Pasillo entre montones de chatarra en un desguace.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:DFC_4508_A_narrow_pathway_winds_through_a_cluttered_scrapyard_piled_high_with_discarded_metal_plastic_pipes_and_other_tangled_debris.jpg",
        foco: "50% 50%",
        alt: "Camino estrecho entre pilas de metal, tubos y restos amontonados en un desguace.",
      },
      {
        archivo: "RF Preamplifier for MC3362 NFM receiver (52072009241).jpg",
        autor: "Placa de circuito impreso vista de cerca, con sus pistas y componentes.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:RF_Preamplifier_for_MC3362_NFM_receiver_(52072009241).jpg",
        foco: "50% 50%",
        alt: "Circuito impreso con pistas de cobre y componentes soldados, fotografiado muy de cerca.",
      },
      {
        archivo: "Car parts and scrap metal piled inside a vehicle.jpg",
        autor: "Piezas y chatarra amontonadas dentro de un vehículo desguazado. Fotografía de Shixart1985.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Car_parts_and_scrap_metal_piled_inside_a_vehicle.jpg",
        foco: "50% 50%",
        alt: "Montón de piezas metálicas oxidadas amontonadas sin orden dentro de una carrocería.",
      },
    ],
    entrada:
      "África occidental y el sur de Asia, con el problema documentado desde los años noventa del siglo XX. Millones de aparatos europeos y estadounidenses acaban cada año en desguaces informales de esos países, muchos declarados como donaciones de material usado para saltarse las normas de exportación de residuos. Allí trabajan miles de personas, muchas de ellas menores de edad, desmontando electrónica con martillos y con fuego. Y el método más rentable de todos, que es también el más dañino, consiste en prender fuego al plástico que envuelve los cables para quedarse con el cobre limpio de dentro.",
    paginas: [
      {
        rotulo: "El fuego",
        texto:
          "Un cable eléctrico es cobre por dentro y plástico por fuera, y separarlos a mano lleva tiempo. Quemarlo tarda minutos, porque el plástico arde y el cobre se queda entero en el suelo. El aislante de esos cables lleva cloro, y el cloro quemado a baja temperatura produce dioxinas. Las dioxinas son de las sustancias más tóxicas que se conocen y se acumulan en la grasa del cuerpo. Los análisis hechos en esos barrios encuentran niveles altísimos en el suelo, en los huevos y en la leche materna. Quien trabaja allí respira ese humo sin mascarilla durante jornadas enteras y por muy poco dinero.",
        destacado: { tipo: "frase", frase: "El plástico arde en minutos y el cobre queda entero." },
      },
      {
        rotulo: "Cómo llega",
        texto:
          "Exportar residuo electrónico a un país pobre está prohibido por un convenio internacional desde 1989. La prohibición se esquiva con una palabra, porque un aparato usado no es un residuo si funciona. Los contenedores salen declarados como electrónica de segunda mano destinada a la reventa. Una parte de esa mercancía se vende de verdad y funciona, y otra parte no arranca siquiera. Comprobar contenedor por contenedor cuesta más de lo que ningún puerto está dispuesto a gastar. El resultado es un flujo constante que todos los informes describen y que nadie consigue cortar.",
        destacado: { tipo: "cifra", cifra: "1989", unidad: "el año del convenio que lo prohíbe" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una economía informal que da de comer a mucha gente y que le acorta la vida al mismo tiempo. Prohibirla sin más deja a esas familias sin ingresos, así que los proyectos que funcionan van por otro lado. Consisten en montar naves con herramientas de pelado, extracción de humos y compra del cobre a buen precio. Si sale más rentable pelar que quemar, el fuego se apaga solo sin necesidad de ninguna vigilancia. Y quedó una responsabilidad que empieza mucho antes, en el diseño de un aparato que nadie puede abrir.",
      },
    ],
  },
  {
    id: "el-oro-de-los-moviles",
    titulo: "Tu móvil tiene más oro",
    gancho: "A igualdad de peso, una tonelada de placas viejas rinde más oro que una tonelada de roca extraída.",
    categoria: "Basura",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Placa de circuito impreso vista de cerca con los contactos dorados brillando.",
    entrada:
      "Todo el mundo, con la minería urbana estudiada en serio desde el año 2000. En una mina de oro buena se sacan unos pocos gramos de metal por cada tonelada de roca extraída. En una tonelada de placas de circuito de móviles viejos hay varios cientos de gramos. La comparación es cierta y no significa que recuperarlo sea fácil ni barato.",
    paginas: [
      {
        rotulo: "Por qué hay oro",
        texto:
          "El oro está en la electrónica por una propiedad muy concreta que ningún metal barato tiene. Conduce muy bien la electricidad y no se oxida nunca, ni con humedad ni con el tiempo. Un contacto de cobre se cubre de óxido en meses y deja de hacer buen contacto. Por eso se dora la punta de los conectores, los contactos de las tarjetas y ciertas soldaduras. La capa es finísima, del orden de una micra, así que cada aparato lleva unos pocos miligramos. Multiplicado por los miles de millones de aparatos que hay en el mundo, la cifra se dispara.",
        destacado: { tipo: "frase", frase: "El oro está ahí porque no se oxida nunca." },
      },
      {
        rotulo: "Sacarlo cuesta",
        texto:
          "El problema de la minería urbana no es la concentración, sino la mezcla en la que está el metal. En una roca el oro va acompañado de unos pocos minerales conocidos y siempre los mismos. En una placa va pegado a plástico, a fibra de vidrio, a estaño, a cobre y a diez metales más. Cada modelo de aparato trae una mezcla distinta, así que no hay un proceso único que valga. Las plantas serias trituran, funden y separan químicamente, y solo salen rentables a gran escala. En Europa hay unas pocas capaces de hacerlo bien, y les llega mucho menos material del que podrían tratar.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "micra de oro lleva cada contacto dorado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una expresión que se ha hecho común, porque a los residuos electrónicos se les llama mina urbana. Quedó también un cálculo que aparece cada dos por tres y que conviene leer con cuidado. La comparación con la mina se hace con las placas ya separadas, no con el aparato entero. Contando la carcasa, la batería y la pantalla, la concentración baja muchísimo y el trabajo sube. Y quedó una cifra que sigue impresionando aunque se mire con lupa, porque las medallas de unos Juegos Olímpicos se fabricaron enteras con metal de aparatos donados.",
      },
    ],
  },
];
