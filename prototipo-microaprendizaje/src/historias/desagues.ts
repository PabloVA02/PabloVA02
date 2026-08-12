import type { Short } from "../shorts";

/* ==========================================================================
   Los desagües.

   El sistema que se lleva el agua sucia y que solo existe para el usuario
   cuando falla. El tema se estropea si se cuenta como fontanería.

   La regla del tema: cada short parte de UN GESTO DOMÉSTICO (abrir el
   grifo, tirar una toallita, quitar el tapón) y baja desde ahí hasta la
   física o la infraestructura que hay debajo, sin dar ningún paso por
   sabido. Siempre acaba en algo que el lector puede comprobar en su casa.
   ========================================================================== */

export const DESAGUES: Short[] = [
  {
    id: "el-sifon-del-fregadero",
    titulo: "El sifón del desagüe",
    gancho: "Retiene siempre un dedo de agua, y ese dedo es lo único que impide que el olor de la alcantarilla entre en casa.",
    categoria: "Objetos",
    color: "var(--slate)",
    encargo: "Sifón de fregadero visto de lado, en corte, con el agua retenida en la curva.",
    /* La pieza, la gota que demuestra que retiene agua, el edificio entero con
       su bajante —que es el enemigo del sifón— y el bajo del fregadero, que es
       donde uno se encuentra con todo esto. */
    fotos: [
      {
        archivo: "Brass P trap.jpg",
        autor:
          "Un sifón de latón, el tubo doblado que va debajo de cada desagüe. Fotografía de Raquel Baranow, 2022.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Brass_P_trap.jpg",
        foco: "50% 45%",
        alt: "Un tubo de latón oscurecido, doblado en forma de ese, saliendo de una pared pintada de amarillo.",
      },
      {
        archivo: "Leaking PVC Pipe Under Sink - P Trap (52842956605).jpg",
        autor:
          "Un sifón de plástico bajo un fregadero, con una gota colgando. En la curva se queda siempre un dedo de agua, y ese es todo el invento. Fotografía de Tony Webster, 2023.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Leaking_PVC_Pipe_Under_Sink_-_P_Trap_(52842956605).jpg",
        foco: "50% 50%",
        alt: "Primer plano de un sifón blanco de plástico con sus tuercas, y una gota de agua colgando de la parte baja de la curva.",
      },
      {
        archivo: "Modern plumbing illustrated - a comprehensive and thoroughly practical work on the modern and most approved methods of plumbing construction (1907) (14597192450).jpg",
        autor:
          "Lámina de un manual de fontanería de 1907, de R. M. Starbuck: el desagüe de una casa entera, con la bajante subiendo de la bodega al tejado y un sifón en cada aparato.",
        licencia: "Sin restricciones conocidas",
        fuente: "https://commons.wikimedia.org/wiki/File:Modern_plumbing_illustrated_-_a_comprehensive_and_thoroughly_practical_work_on_the_modern_and_most_approved_methods_of_plumbing_construction_(1907)_(14597192450).jpg",
        foco: "50% 50%",
        alt: "Lámina técnica antigua con el corte de una casa de tres plantas y toda la red de tuberías de desagüe dibujada y rotulada.",
      },
      {
        archivo: "247 Home Rescue back of sink plumbing.jpg",
        autor:
          "El bajo de un fregadero: llaves, tubos y el sifón, que se desenrosca a mano. Ahí es donde aparecen los anillos que se caen por el desagüe. Fotografía de 247 Home Rescue, 2014.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:247_Home_Rescue_back_of_sink_plumbing.jpg",
        foco: "50% 50%",
        alt: "Vista del interior de un mueble de fregadero, con tubos blancos y metálicos y llaves de paso contra la pared alicatada.",
      },
    ],
    entrada:
      "Reino Unido, 1775. Un relojero de Londres patenta una pieza que no parece nada: un tubo doblado en forma de ese que se coloca debajo de cada desagüe. La ciudad huele mal por dentro porque los retretes conectan directamente con las cloacas y el aire de abajo sube por el agujero. Nadie entiende todavía que ese aire transmita enfermedades, pero todo el mundo sabe que la casa apesta. Esa curva tan simple es la que separa el olor de la casa del olor de la alcantarilla, y lo hace sin electricidad, sin piezas móviles y sin gastar nada. Lleva doscientos cincuenta años funcionando igual.",
    paginas: [
      {
        rotulo: "El tapón de agua",
        texto:
          "El sifón funciona con un truco elemental: la curva retiene siempre un poco de agua, que queda ahí al vaciarse el fregadero. Ese dedo de agua tapa el conducto como un tapón, y los gases de la alcantarilla no pueden atravesarlo. Como el agua se renueva cada vez que se abre el grifo, el tapón se mantiene solo. Solo falla si el agua se evapora, que es lo que pasa en una casa cerrada meses y explica el olor al volver de vacaciones. Basta abrir el grifo unos segundos para que todo vuelva a la normalidad. El mismo principio está en el inodoro, en la ducha y en cualquier sumidero de la calle.",
        destacado: { tipo: "frase", frase: "Un dedo de agua separa la casa de la alcantarilla." },
      },
      {
        rotulo: "Y el aire",
        texto:
          "El sifón tiene un enemigo que casi nadie conoce: el caudal del agua que baja por la bajante del edificio. Cuando un vecino de arriba vacía una bañera, esa columna de agua cayendo empuja el aire del tubo y crea una succión. Esa succión puede chupar el agua del sifón de otro piso y dejar el conducto abierto, con el olor entrando. Para evitarlo, los edificios llevan un tubo de ventilación que sube al tejado y deja entrar aire para compensar. Es la razón por la que en muchos tejados asoma un tubo que no es chimenea ni antena. Si ese tubo se obstruye con hojas o con un nido, los desagües empiezan a gorgotear.",
        destacado: { tipo: "cifra", cifra: "1775", unidad: "el año de la patente del sifón" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una pieza que está en todas las casas del mundo desarrollado y que casi nadie sabría nombrar. Quedó también la costumbre de abrirla cuando algo se cae por el fregadero, porque el sifón se desenrosca y allí aparecen los anillos perdidos. Y quedó una idea que se repite en la ingeniería sanitaria, que es resolver un problema grande con un obstáculo pequeño y pasivo. No hace falta una válvula, ni un motor, ni electricidad: basta con doblar un tubo y dejar que el agua se quede quieta en la curva.",
      },
    ],
  },
  {
    id: "el-iceberg-de-grasa",
    titulo: "Un tapón de 250 toneladas",
    gancho: "Bajo una calle de Londres apareció una masa de doscientas cincuenta toneladas, dura como el hormigón.",
    categoria: "Objetos",
    color: "var(--clay)",
    encargo: "Operario con mono y casco frente a un bloque gris compacto que tapa un colector.",
    fotos: [
      {
        archivo: "Fatberg at Museum of London.jpg",
        autor: "Trozo seco del bloque de Whitechapel, expuesto en el Museo de Londres en 2018. Fotografía de Lord Belbury.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fatberg_at_Museum_of_London.jpg",
        foco: "50% 50%",
        alt: "Un pedazo de masa gris y rugosa, del tamaño de un ladrillo grande, sobre una base oscura dentro de una vitrina.",
      },
      {
        archivo: "Musee des Egouts de Paris FRA 002.JPG",
        autor: "Galería del alcantarillado de París, visitable como museo. Fotografía de ignis, 2006.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Musee_des_Egouts_de_Paris_FRA_002.JPG",
        foco: "50% 50%",
        alt: "Una galería abovedada de alcantarilla con un canal de agua corriendo por el centro y pasarelas a los lados.",
      },
      {
        archivo: "Removal of screened solid material (6898385444).jpg",
        autor: "Retirada de los sólidos retenidos en las rejas de una depuradora, Ruai (Kenia), 2011. Fotografía de SuSanA Secretariat.",
        licencia: "CC BY 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Removal_of_screened_solid_material_(6898385444).jpg",
        foco: "50% 50%",
        alt: "Operarios retirando con horcas la masa de residuos que ha quedado atrapada en la reja de entrada de una depuradora.",
      },
      {
        archivo: "Whitechapel Fatberg commemorative manhole cover.jpg",
        autor: "Tapa de alcantarilla conmemorativa colocada en Whitechapel, Londres, donde se deshizo el bloque en 2017. Fotografía de Amanda Slater.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Whitechapel_Fatberg_commemorative_manhole_cover.jpg",
        foco: "50% 50%",
        alt: "Una tapa de registro redonda en la acera con una inscripción que recuerda el bloque de grasa vencido allí en 2017.",
      },
    ],
    entrada:
      "Londres, 2017. Los operarios del alcantarillado encuentran bajo una calle del este de la ciudad un bloque compacto de doscientas cincuenta toneladas y más de doscientos metros de largo, del peso de once autobuses puestos en fila. Está hecho de grasa de cocina, toallitas húmedas, bastoncillos y pañales, todo pegado en una masa dura como el hormigón que hay que romper a golpes. Hacen falta nueve semanas de trabajo con mangueras de alta presión y palas para deshacerlo, y el hallazgo no es una rareza: cada gran ciudad tiene los suyos y todos se forman igual.",
    paginas: [
      {
        rotulo: "Cómo se forma",
        texto:
          "La grasa que se tira caliente por el fregadero se enfría al llegar al colector y se pega al tubo. Ahí se encuentra con las toallitas, hechas de fibra de plástico, que no se deshacen en el agua como el papel. Las fibras se enganchan en la grasa y forman una red que atrapa todo lo que pasa, y el bulto crece solo. Con el tiempo la mezcla reacciona con el calcio del agua y se endurece hasta parecer jabón viejo. El resultado es un tapón que puede llegar a bloquear el colector entero y devolver el agua hacia arriba. Los ingleses lo llaman iceberg de grasa, y el nombre le queda corto.",
        destacado: { tipo: "frase", frase: "La toallita es plástico: no se deshace como el papel." },
      },
      {
        rotulo: "Quién lo paga",
        texto:
          "Desatascar esos bloques cuesta a las compañías de agua cientos de millones de euros al año en todo el mundo. Ese dinero sale de la factura, así que lo paga el mismo vecindario que tiró las toallitas. Los reventones son peores que el gasto, porque cuando el colector se bloquea el agua sucia sale por donde puede. La solución técnica no existe, porque ningún filtro aguanta ese caudal, y las campañas insisten en lo único que funciona: no tirar. La norma cabe en una frase, porque al váter solo van tres cosas y ninguna se compra en un paquete. La grasa se deja enfriar en un bote y va a la basura.",
        destacado: { tipo: "cifra", cifra: "250", unidad: "toneladas pesaba el bloque de una sola calle" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un problema que crece cada año, porque el consumo de toallitas no ha dejado de subir desde que existen. Quedaron también las normas de etiquetado, ya que varios países han prohibido vender como desechable lo que no se deshace en el agua. Un trozo de aquel bloque se expuso en un museo de la ciudad y fue una de las piezas más visitadas de la temporada. Y quedó la lección que se aprende siempre demasiado tarde con las infraestructuras enterradas: mientras funcionan no existen para nadie, y cuando dejan de funcionar aparecen todas a la vez.",
      },
    ],
  },
  {
    id: "el-remolino-del-desague",
    titulo: "El desagüe no gira así",
    gancho: "La fuerza que se invoca para explicarlo existe y mueve los huracanes. En un lavabo es tan pequeña que la tapa cualquier cosa.",
    categoria: "Objetos",
    color: "var(--plum)",
    curioso: true,
    encargo: "Agua girando en el desagüe de un lavabo blanco, vista desde arriba.",
    fotos: [
      {
        archivo: "Staring down a hurricane Florence eye semi-zoom.jpg",
        autor: "El ojo del huracán Florence desde la Estación Espacial, 2018.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File%3AStaring%20down%20a%20hurricane%20Florence%20eye%20semi-zoom.jpg",
        foco: "55% 50%",
        alt: "Ojo de un huracán visto desde arriba, con las nubes formando un pozo circular.",
      },
      {
        archivo: "Staring Down Hurricane Florence.jpg",
        autor: "El huracán Florence fotografiado desde la Estación Espacial, 2018.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AStaring%20Down%20Hurricane%20Florence.jpg",
        foco: "50% 50%",
        alt: "Espiral de nubes de un huracán extendiéndose hasta el horizonte.",
      },
      {
        archivo: "Hurricane Isabel eye from ISS (edit 1).jpg",
        autor: "El ojo del huracán Isabel desde la Estación Espacial, 2003.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3AHurricane%20Isabel%20eye%20from%20ISS%20(edit%201).jpg",
        foco: "50% 50%",
        alt: "Pared de nubes alrededor del ojo despejado de un huracán, vista casi de lado.",
      },
      {
        archivo: "Dennis 2005-07-07 1550Z.jpg",
        autor: "El huracán Dennis visto por satélite, 2005.",
        licencia: "Public domain",
        fuente: "https://commons.wikimedia.org/wiki/File%3ADennis%202005-07-07%201550Z.jpg",
        foco: "50% 40%",
        alt: "Imagen de satélite de un huracán girando sobre el mar con el ojo bien marcado.",
      },
    ],
    entrada:
      "Cualquier cuarto de baño del planeta, con el mito bien asentado desde los años sesenta del siglo XX. Se repite en documentales, en clase y en las guías de viaje que el agua del desagüe gira en un sentido en el hemisferio norte y en el contrario en el sur, y hay quien lo enseña como demostración junto al ecuador. La fuerza que se invoca para explicarlo existe de verdad y es la que hace girar los huracanes. En un lavabo, sin embargo, esa misma fuerza es tan pequeña que cualquier otra cosa la tapa sin esfuerzo.",
    paginas: [
      {
        rotulo: "La fuerza que desvía",
        texto:
          "La Tierra gira, y eso hace que cualquier cosa que se mueve por su superficie se desvíe un poco. El efecto se llama de Coriolis y no es una fuerza real, sino la consecuencia de medir desde un suelo que da vueltas. Se nota cuando el recorrido es largo y lento, como el aire que tarda días en rodear una borrasca. Por eso los huracanes giran en un sentido en el norte y en el otro en el sur, y ahí el mito acierta. El problema es la escala, porque en un lavabo el agua recorre veinte centímetros en segundos. La desviación que produce el giro de la Tierra en ese trayecto es minúscula.",
        destacado: { tipo: "frase", frase: "Coriolis mueve huracanes, no lavabos de veinte centímetros." },
      },
      {
        rotulo: "Lo que manda",
        texto:
          "En un desagüe doméstico, el sentido del giro lo deciden cosas mucho más tontas que la rotación del planeta. La forma del lavabo, la posición del grifo, un arañazo o el movimiento que llevaba el agua al llenarse pesan mil veces más. Por eso el mismo lavabo gira hacia un lado por la mañana y hacia el otro por la tarde. El experimento se ha hecho bien varias veces, con recipientes circulares, agua reposada durante horas y el tapón abierto con cuidado. En esas condiciones el efecto sí aparece, y el agua gira como predice la teoría en cada hemisferio. Pero hace falta un laboratorio, no un cuarto de baño.",
        destacado: { tipo: "cifra", cifra: "20", unidad: "centímetros recorre el agua: demasiado poco" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó un mito tan resistente que hay quien lo monta como espectáculo para turistas junto a la línea del ecuador. El truco consiste en llenar un barreño moviendo el agua a un lado o a otro sin que se note, y funciona siempre. Quedó también un fenómeno real que sigue explicando el tiempo de todo el planeta, desde los huracanes hasta las corrientes del océano. Y quedó una regla útil para cualquier explicación científica que se cuente en un bar: antes de aceptar una causa, conviene preguntar si tiene tamaño suficiente para producir el efecto.",
      },
    ],
  },
];
