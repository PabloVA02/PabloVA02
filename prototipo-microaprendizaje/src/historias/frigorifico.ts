import type { Short } from "../shorts";

/* ==========================================================================
   El frigorífico.

   Un electrodoméstico al que nadie mira y que reorganizó la comida, las
   ciudades y la atmósfera del planeta. El riesgo del tema es el manual de
   instrucciones: compresores, ciclos, refrigerantes.

   La regla del tema: el frío se cuenta por EL GAS QUE HAY DENTRO y por a
   quién le explota en la cara. Cada generación de neveras resolvió el
   problema anterior creando el siguiente, y esa cadena —veneno, gas
   milagroso, agujero en el cielo— es la historia entera.

   Y siempre se dice cómo se comía antes de tener uno en casa.
   ========================================================================== */

export const FRIGORIFICO: Short[] = [
  {
    id: "neveras-que-mataban",
    titulo: "Las neveras mataban",
    gancho: "Enfriaban con gases tóxicos y una fuga de noche podía acabar con toda la casa dormida.",
    categoria: "Frigorífico",
    color: "var(--slate)",
    encargo: "Una nevera blanca de los años treinta con el motor redondo encima.",
    fotos: [
      {
        archivo: "General Electric \"Monitor-Top\" refrigerator at Chaim Weizmann mansion.jpg",
        autor: "Un frigorífico Monitor Top de finales de los años veinte, con el compresor redondo a la vista encima del armario. Fotografía de Mr. Shoval.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:General_Electric_%22Monitor-Top%22_refrigerator_at_Chaim_Weizmann_mansion.jpg",
        foco: "50% 35%",
        alt: "Una nevera blanca esmaltada con un tambor redondo encima, en una cocina alicatada de la época.",
      },
      {
        archivo: "Flame from the burner of a gas stove.jpg",
        autor: "La llama de un quemador de gas: la nevera de Einstein y Szilárd se movía con calor, no con un motor.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Flame_from_the_burner_of_a_gas_stove.jpg",
        foco: "50% 50%",
        alt: "Una corona de llamas azules saliendo de un quemador de cocina sobre fondo oscuro.",
      },
      {
        archivo: "1950s kitchen at the Ohio History Center June 2022.jpg",
        autor: "Una cocina americana de los años cincuenta reconstruida en el Ohio History Center. Fotografía de DogsRNice.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:1950s_kitchen_at_the_Ohio_History_Center_June_2022.jpg",
        foco: "50% 50%",
        alt: "Una cocina de época con armarios de colores claros, encimera de formica y electrodomésticos blancos.",
      },
      {
        archivo: "Open refrigerator with food at night.jpg",
        autor: "Un frigorífico abierto de noche, con la comida iluminada por dentro. Fotografía de W. carter.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Open_refrigerator_with_food_at_night.jpg",
        foco: "50% 45%",
        alt: "La puerta abierta de una nevera en una cocina a oscuras, con los estantes llenos y la luz interior encendida.",
      },
    ],
    entrada:
      "Estados Unidos, 1929. Los frigoríficos eléctricos llevan ya una década metiéndose en las casas y funcionan con gases refrigerantes que son venenosos, inflamables o las dos cosas a la vez: amoniaco, cloruro de metilo y dióxido de azufre. Mientras el aparato esté bien cerrado no pasa nada, y el problema es que los aparatos se estropean. Aquel invierno, una fuga en un hospital de Cleveland mata a más de un centenar de personas, y la prensa empieza a recoger casos de familias enteras que aparecen muertas en la cama.",
    paginas: [
      {
        rotulo: "La nevera de Einstein",
        texto:
          "Dos físicos leyeron una de aquellas noticias, la de una familia muerta en Berlín por una fuga, y decidieron diseñar un frigorífico sin piezas móviles ni juntas que se pudieran estropear, movido solo por calor y por un imán. Uno de ellos era el físico más famoso del mundo y el otro un joven húngaro que años después participaría en el proyecto de la bomba atómica. Patentaron varios modelos entre 1926 y 1933 y vendieron los derechos, pero ninguno llegó a fabricarse en serie, porque para entonces la industria ya tenía otra solución en la mano.",
        destacado: { tipo: "frase", frase: "Diseñaron una nevera sin una sola pieza móvil." },
      },
      {
        rotulo: "El gas milagroso",
        texto:
          "Un equipo de una empresa de automóviles buscó por encargo un gas que no fuera tóxico, ni inflamable, ni corrosivo, y dio con una familia de compuestos de cloro y flúor. Para demostrarlo en un congreso, su responsable llenó los pulmones del gas nuevo y apagó con él una vela delante del público, sin despeinarse. Se comercializó en 1930 y en pocos años estaba en todas las neveras y en todos los aparatos de aire acondicionado del mundo, y más tarde en los aerosoles. Parecía la sustancia perfecta: estable, barata y completamente inofensiva.",
        destacado: { tipo: "cifra", cifra: "1930", unidad: "el año del gas que lo resolvió todo" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Justo esa estabilidad era el problema. Como no reacciona con nada, el gas no se descompone abajo y sube hasta la parte alta de la atmósfera, donde la radiación del sol lo rompe y libera cloro, que destruye la capa que nos protege de los rayos ultravioleta. Se descubrió en 1974 y se confirmó en los años ochenta con el agujero sobre la Antártida. El mismo hombre que había respirado el gas delante de un congreso había inventado antes la gasolina con plomo, en una de las carreras profesionales más desafortunadas de la historia.",
      },
    ],
  },

  {
    id: "agujero-de-ozono",
    titulo: "El agujero se cierra",
    gancho: "Es el único problema ambiental global que se ha resuelto, y el tratado se firmó en dos años.",
    categoria: "Frigorífico",
    color: "var(--ochre)",
    encargo: "Un mapa polar en falso color con una mancha oscura centrada sobre el hielo.",
    entrada:
      "Antártida, 1985. Tres investigadores británicos publican unas mediciones que llevaban años haciendo desde una base en el hielo: cada primavera austral, la capa de ozono sobre el continente pierde más de la mitad de su espesor. Los satélites tenían el mismo dato y lo habían descartado como error del aparato, por parecer demasiado grande para ser cierto.",
    paginas: [
      {
        rotulo: "El filtro",
        texto:
          "El ozono es una forma del oxígeno que se concentra en una franja alta de la atmósfera y que absorbe la radiación ultravioleta más dañina, la que provoca cánceres de piel y cataratas y daña las cosechas y el plancton del mar. Sin esa franja, la vida en tierra firme no sería posible tal como la conocemos. Los cálculos de la época estimaban millones de casos adicionales de cáncer si la pérdida continuaba, y lo que más asustó no fue la cifra sino la velocidad: nadie esperaba un agujero de ese tamaño tan pronto.",
        destacado: { tipo: "frase", frase: "Los satélites lo habían medido y lo tomaron por un error." },
      },
      {
        rotulo: "Dos años",
        texto:
          "La reacción fue insólita por lo rápida. En 1987, apenas dos años después de la publicación, se firmó un tratado que obligaba a eliminar los gases responsables con un calendario concreto y con ayudas para los países que no podían permitirse el cambio. Lo han ratificado todos los países del mundo, algo que no ha conseguido ningún otro acuerdo internacional. Ayudó mucho que existiera un sustituto viable, que las empresas fabricantes acabaran apoyándolo porque vendían el reemplazo, y que el problema tuviera una causa única, bien identificada y con nombre y apellidos, en lugar de repartirse entre media economía mundial.",
        destacado: { tipo: "cifra", cifra: "2", unidad: "años entre el hallazgo y el tratado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Las mediciones actuales muestran que la capa se está recuperando y las proyecciones sitúan el cierre del agujero antártico hacia mediados de este siglo. Se estima que el acuerdo ha evitado cientos de millones de casos de cáncer de piel, y de paso ha frenado bastante el calentamiento, porque aquellos gases calientan mucho más que el dióxido de carbono. Se cita constantemente como prueba de que un problema global se puede arreglar, aunque conviene recordar la letra pequeña de aquel éxito: había un sustituto listo para venderse y un único culpable claramente señalado con el dedo.",
      },
    ],
  },

  {
    id: "cadena-de-frio",
    titulo: "La nevera cambió la comida",
    gancho: "Antes había que comprar cada día. Con nevera en casa apareció la compra semanal.",
    categoria: "Frigorífico",
    color: "var(--clay)",
    encargo: "Un mostrador refrigerado de supermercado antiguo con productos alineados.",
    entrada:
      "Estados Unidos, 1930. Una cuarta parte de los hogares tiene ya frigorífico eléctrico, un aparato que costaba lo que un coche pequeño diez años antes y que ahora empieza a estar al alcance de la clase media. La compra diaria, que era obligatoria desde siempre porque la comida se estropeaba, deja de ser necesaria en cuestión de una década.",
    paginas: [
      {
        rotulo: "La compra diaria",
        texto:
          "Hasta entonces, alimentar a una familia exigía salir todos los días: al mercado, a la carnicería, a la lechería. La leche se repartía a domicilio de madrugada porque no aguantaba, la carne se compraba para el mismo día y la fruta se consumía en temporada o no se consumía. La despensa se llenaba de conservas, salazones y encurtidos, que son todos técnicas para no depender del frío. Con una nevera en casa, de pronto se puede comprar para varios días, y eso cambia el tamaño del envase, el tipo de tienda y hasta el coche.",
        destacado: { tipo: "frase", frase: "La leche se repartía de madrugada porque no aguantaba." },
      },
      {
        rotulo: "El supermercado",
        texto:
          "El autoservicio apareció casi a la vez y encajó como una pieza: tiendas grandes con estanterías abiertas y mostradores refrigerados, donde el cliente coge lo que quiere y paga al final, en lugar de pedirle cada cosa a un dependiente por encima del mostrador. Los congelados llegaron después, con un método de congelación rápida copiado de cómo se conserva el pescado en el Ártico, que evita que se formen cristales grandes y estropeen la textura. En los años sesenta ya era normal tener guisantes de junio en el congelador en pleno enero.",
        destacado: { tipo: "cifra", cifra: "25 %", unidad: "de los hogares tenía nevera en 1930" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La cadena de frío es hoy una infraestructura invisible que va del campo al camión, del camión al almacén y del almacén a la nevera de casa sin que la temperatura suba en ningún tramo, y de ella depende buena parte de lo que comemos y también de lo que nos cura: las vacunas viajan igual. Consume una cantidad enorme de la electricidad del mundo. Y aquella compra diaria obligatoria, que estructuraba el día de millones de familias, desapareció en una generación sin que nadie la echara demasiado de menos.",
      },
    ],
  },
];
