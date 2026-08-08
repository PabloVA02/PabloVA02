import type { Short } from "../shorts";

/* ==========================================================================
   Los molinos.

   La primera máquina que trabajó sin músculos, y el negocio más odiado de
   un pueblo. El tema se estropea si repite la rueda hidráulica, que ya
   está en rueda.ts.

   La regla del tema: cada short explica UN MECANISMO CONCRETO (orientar
   el tejado, separar las muelas, cobrar en especie) y termina en lo que
   ese mecanismo provocaba en la gente que vivía alrededor.
   ========================================================================== */

export const MOLINOS: Short[] = [
  {
    id: "el-molino-de-viento",
    titulo: "El molino gira la cabeza",
    gancho: "El viento cambia de dirección todo el rato, y un molino tiene que girar la cabeza entera para seguirlo.",
    categoria: "Tecnología",
    color: "var(--ochre)",
    encargo: "Molino de viento holandés con la rueda pequeña de orientación en la parte trasera del tejado.",
    fotos: [
      {
        archivo: "Nes (NL), Windmühle \"Phenix\" -- 2026 -- 1900.jpg",
        autor: "El molino Phenix, en la isla de Ameland, Países Bajos. Fotografía de Dietmar Rabich.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nes_(NL),_Windm%C3%BChle_%22Phenix%22_--_2026_--_1900.jpg",
        foco: "50% 45%",
        alt: "Un molino de viento de tejado de paja con cuatro aspas de rejilla blanca, recortado contra nubes altas.",
      },
      {
        archivo: "Stock Tower Windmill Essex 1965.jpg",
        autor: "Un molino de torre inglés, con el cuerpo de ladrillo fijo y solo el tejado giratorio. Fotografía de Sludge G, 1965.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Stock_Tower_Windmill_Essex_1965.jpg",
        foco: "50% 45%",
        alt: "Fotografía en blanco y negro de una torre de ladrillo cónica coronada por un tejado curvo de madera.",
      },
      {
        archivo: "Flügel und Windrose Tjücher-Mühle.JPG",
        autor: "La rueda de orientación en la parte de atrás del tejado de un molino de Frisia Oriental. Fotografía de 4028mdk09.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Fl%C3%BCgel_und_Windrose_Tj%C3%BCcher-M%C3%BChle.JPG",
        foco: "50% 40%",
        alt: "Vista desde abajo del tejado de un molino, con una rueda pequeña de palas montada detrás en ángulo recto.",
      },
      {
        archivo: "Wind Turbines, Baltic Sea.jpg",
        autor: "Aerogeneradores en el mar Báltico. Fotografía de John Samuel.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wind_Turbines,_Baltic_Sea.jpg",
        foco: "50% 50%",
        alt: "Varias torres blancas de aerogenerador saliendo del agua, alineadas hasta perderse en la bruma.",
      },
    ],
    entrada:
      "Países Bajos e Inglaterra, siglos XII a XIX. Un molino de viento solo funciona si sus aspas miran de frente al viento, y el viento no tiene ninguna intención de quedarse quieto: cambia de dirección varias veces al día, a veces en cuestión de minutos. Girar un tejado de varias toneladas, con el eje, las aspas y media maquinaria encima, cada vez que rola el viento, es el problema central del invento, y estuvo sin resolver del todo durante seiscientos años. La historia de los molinos, contada de verdad, es la historia de cómo se fue resolviendo eso hasta que dejó de hacer falta nadie.",
    paginas: [
      {
        rotulo: "Girar la casa",
        texto:
          "La primera solución fue montar el molino entero sobre un poste central de madera. El edificio completo, con sus muelas y su grano dentro, giraba empujado por una viga larga desde el suelo. Funcionaba y limitaba mucho el tamaño, porque un molino grande pesa demasiado para moverlo a mano. La segunda solución dejó fijo el cuerpo del edificio y giró solo el tejado con las aspas. Eso permitió construir molinos de piedra de varios pisos con maquinaria pesada dentro. El molinero seguía subiendo a orientar el tejado a mano cada vez que cambiaba el viento.",
        destacado: { tipo: "frase", frase: "Primero giraba el edificio entero; después, solo el tejado." },
      },
      {
        rotulo: "La cola",
        texto:
          "La solución definitiva llegó en 1745 con una pieza que orienta el molino sin que nadie intervenga. Consiste en una rueda de aspas pequeñas montada detrás, en ángulo recto con las aspas grandes. Mientras el molino mira al viento, esa rueda queda de canto y no recibe nada, así que no gira. En cuanto el viento cambia, le da de lado, la rueda empieza a girar y mueve el tejado. El tejado se para solo cuando vuelve a estar de frente, porque la rueda se queda otra vez de canto. Es un sistema que se corrige a sí mismo y no necesita ni electricidad ni vigilancia.",
        destacado: { tipo: "cifra", cifra: "1745", unidad: "el año de la rueda que orienta sola" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el mismo principio en los aerogeneradores modernos, aunque ahora lo hace un motor con sensores. Quedó también una idea que se usa en muchas máquinas y que nació justamente aquí. Un sistema que mide su propio error y se corrige con él se llama realimentación. Poco después apareció el regulador de bolas que controla la velocidad de una máquina de vapor con la misma lógica. De esas dos piezas sale buena parte de la teoría del control automático de hoy. Un termostato hace exactamente lo mismo que aquella rueda de aspas pequeñas.",
      },
    ],
  },
  {
    id: "las-muelas-del-molino",
    titulo: "Dos piedras que no se tocan",
    gancho: "Si se rozaran, el grano saldría quemado y la harina sabría a piedra. El hueco entre las dos es de un pelo.",
    categoria: "Comida",
    color: "var(--clay)",
    encargo: "Muela de molino con sus surcos radiales tallados, apoyada de canto.",
    entrada:
      "Todo el mundo, con el diseño de las muelas estable desde hace más de dos mil años. Un molino tritura el grano entre dos piedras redondas, una fija abajo y otra girando encima. Lo que nadie imagina es que esas dos piedras no se tocan nunca, porque entre ellas queda una separación del grosor de un pelo. Ajustar ese hueco es todo el oficio del molinero.",
    paginas: [
      {
        rotulo: "El hueco justo",
        texto:
          "Si las piedras se tocan, el rozamiento las desgasta y suelta polvo de piedra en la harina. Ese rozamiento genera además calor, y el calor quema el germen del trigo y estropea el sabor. Si el hueco es demasiado grande, el grano pasa entero y no se muele nada. El molinero regula esa distancia con un tornillo mientras el molino está funcionando. La ajusta escuchando el ruido y metiendo la mano en la harina para notar la temperatura. De ese gesto viene una expresión que se sigue usando, porque el molinero tenía buena mano.",
        destacado: { tipo: "frase", frase: "Si las piedras se tocan, la harina sale quemada." },
      },
      {
        rotulo: "Picar la piedra",
        texto:
          "La cara de una muela no es lisa, sino que lleva unos surcos tallados en forma de radios. Esos surcos hacen dos cosas a la vez que nadie diría mirándolos. Cortan el grano como unas tijeras al cruzarse los de una piedra con los de la otra. Y funcionan como canales que van sacando la harina desde el centro hacia el borde. Con el uso esos surcos se redondean, así que cada cierto tiempo hay que volver a tallarlos. Ese trabajo se llama picar la muela y lo hacía un artesano especializado que iba de molino en molino.",
        destacado: { tipo: "cifra", cifra: "2000", unidad: "años lleva la muela con la misma forma" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una harina distinta de la industrial, porque la piedra muele despacio y sin calentar. El molino de rodillos que la sustituyó separa el salvado y el germen, y da una harina más blanca. Esa harina se conserva muchísimo más, porque el germen lleva grasa y la grasa se pone rancia. También pierde buena parte de las vitaminas, y por eso en muchos países se le añaden después. Quedaron unos cuantos molinos de piedra funcionando para panaderías que buscan esa harina completa. Y quedó una etiqueta que ahora se paga cara y que antes era simplemente lo normal.",
      },
    ],
  },
  {
    id: "el-molinero-y-el-pueblo",
    titulo: "El vecino peor visto",
    gancho: "Cobraba en especie, quedándose una parte del grano. Y nadie podía comprobar cuánta se quedaba.",
    categoria: "Historia",
    color: "var(--slate)",
    curioso: true,
    encargo: "Sacos de grano apilados junto a la tolva de un molino de piedra.",
    entrada:
      "Europa, siglos XII a XVIII. En casi todos los pueblos había un solo molino, y en muchos sitios el señor obligaba por ley a moler allí y en ningún otro sitio. El molinero no cobraba en dinero, sino quedándose una parte del grano que le llevaban. Como nadie pesaba nada antes ni después, la desconfianza estaba servida desde el primer día.",
    paginas: [
      {
        rotulo: "El monopolio",
        texto:
          "Aquella obligación de moler en un molino concreto era un privilegio muy rentable para su dueño. El campesino no podía llevarse el grano a otro sitio ni molerlo en casa con un molino de mano. Hay documentos de señores que mandaban registrar las casas para requisar los molinos pequeños. Uno de los primeros pleitos campesinos documentados en Inglaterra va exactamente sobre eso. La parte que se quedaba el molinero estaba fijada por costumbre en torno a una dieciseisava. Comprobarlo era imposible sin una balanza fiable, y una balanza fiable no la tenía nadie.",
        destacado: { tipo: "frase", frase: "Nadie pesaba el grano antes ni después de molerlo." },
      },
      {
        rotulo: "El pulgar",
        texto:
          "De ahí sale una acusación que se repite en toda la literatura medieval europea. Se decía que el molinero apretaba con el pulgar al medir el grano para llevarse de más. El molinero aparece como tramposo en cuentos, en refranes y en las obras de teatro de la época. Parte de esa fama era injusta, porque el oficio exigía habilidad y muchísimas horas de trabajo. Otra parte venía del cargo, ya que el molinero cobraba el impuesto de un señor al que nadie quería. Era el vecino con quien la gente discutía, aunque el dinero acabara en otro bolsillo.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "de cada dieciséis medidas se quedaba el molinero" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron los apellidos, porque el oficio dio uno de los más repetidos de media Europa. En español está Molinero, en inglés y en alemán hay versiones equivalentes igual de comunes. Quedaron también los refranes, que en casi todos los idiomas dicen algo malo del molinero. Y quedó una situación que se repite hoy con otros nombres y con la misma lógica exacta. Cuando un servicio es obligatorio, no tiene competencia y cobra un porcentaje que el cliente no puede medir, la desconfianza aparece sola. No hace falta que nadie robe para que todo el mundo lo sospeche.",
      },
    ],
  },
];
