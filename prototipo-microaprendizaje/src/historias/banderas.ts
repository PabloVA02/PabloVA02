import type { Short } from "../shorts";

/* ==========================================================================
   Banderas.

   El riesgo del tema es el simbolismo: la patria, el orgullo, los colores
   que representan valores. Palabrería que no informa de nada.

   La regla del tema: una bandera se cuenta como OBJETO CON FUNCIÓN. Una
   forma que hay que poder dibujar sin ambigüedad, unos colores que se
   distingan con niebla desde otro barco, un registro que determina qué
   leyes se aplican a bordo. La tela sirve para algo concreto, y ese algo
   es la historia.

   Y nunca se opina sobre qué bandera es bonita ni sobre lo que representa.
   ========================================================================== */

export const BANDERAS: Short[] = [
  {
    id: "bandera-no-rectangular",
    titulo: "La bandera que no es rectángulo",
    gancho: "Son dos banderines superpuestos, y su forma exacta viene dibujada en la constitución.",
    categoria: "Banderas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Una bandera con el borde derecho en doble pico ondeando contra el cielo.",
    entrada:
      "Nepal, 1962. La constitución del país fija la bandera nacional con una peculiaridad que no tiene ninguna otra del mundo: no es un rectángulo, sino dos triángulos superpuestos que forman una figura con el borde derecho terminado en doble pico. Además, el texto legal no la describe con palabras sino con instrucciones de dibujo.",
    paginas: [
      {
        rotulo: "El anexo",
        texto:
          "El anexo de la constitución contiene veinticuatro pasos numerados para construir la bandera con regla y compás, empezando por trazar una línea de longitud determinada, levantar una perpendicular, marcar puntos a distancias dadas y unirlos en cierto orden. Siguiendo las instrucciones sale siempre exactamente la misma forma, en cualquier tamaño y sin ninguna ambigüedad. Es una manera de definir un símbolo nacional que no tiene equivalente: casi todos los países describen su bandera con proporciones y colores, y las diferencias de interpretación entre unos fabricantes y otros acaban siendo un problema real que hay que resolver a ojo.",
        destacado: { tipo: "cifra", cifra: "24", unidad: "pasos de dibujo en la constitución" },
      },
      {
        rotulo: "Los dos picos",
        texto:
          "La forma viene de la costumbre local: los banderines triangulares eran habituales en toda la zona y las dos ramas de la familia gobernante usaban uno cada una, hasta que en algún momento se unieron en un solo estandarte con los dos picos superpuestos. Lleva dibujados el sol y la luna, que eran los emblemas de esas dos ramas, y que además se leen como un deseo de que el país dure tanto como los dos astros. El carmesí del fondo y el azul del borde son colores tradicionales que aparecen también en la flor nacional.",
        destacado: { tipo: "frase", frase: "Los dos picos vienen de dos ramas de la misma familia." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La consecuencia práctica es que fabricarla cuesta más y que en las ceremonias internacionales rompe la fila: en cualquier hilera de banderas rectangulares se ve inmediatamente cuál es la suya. También causa problemas a los programas informáticos y a las plantillas de diseño, que dan por supuesto un rectángulo y hay que reprogramar. El país lo ha convertido en un motivo de orgullo y existe hasta una canción escolar dedicada a la bandera. Y sigue siendo la única del mundo, entre casi doscientas, que no cabe en el formato de todas las demás.",
      },
    ],
  },

  {
    id: "codigo-de-banderas",
    titulo: "Cada bandera dice una frase",
    gancho: "Una sola tela izada significa que hay un buzo abajo, o que el barco lleva carga peligrosa.",
    categoria: "Banderas",
    color: "var(--slate)",
    encargo: "Una driza con varias banderas de señales de colores planos izadas en fila.",
    entrada:
      "Mares del mundo, 1857. Se publica un código internacional de señales para que barcos de países distintos puedan entenderse sin compartir ningún idioma. Se basa en un juego de banderas de colores muy contrastados, cada una asociada a una letra y también a un mensaje completo por sí sola. Sigue vigente hoy, actualizado varias veces.",
    paginas: [
      {
        rotulo: "Los colores",
        texto:
          "El diseño está pensado para la distancia y el mal tiempo. Solo se usan cinco colores, el rojo, el azul, el amarillo, el negro y el blanco, elegidos porque se distinguen bien entre ellos incluso con niebla o a contraluz, y las formas son bandas, cuadros y triángulos grandes, sin ningún dibujo fino. Cada bandera vale por una letra, de modo que se pueden deletrear mensajes izando varias en la misma driza, y además cada una tiene un significado propio muy concreto que evita tener que deletrear nada en una emergencia.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "colores en todo el código" },
      },
      {
        rotulo: "Los mensajes",
        texto:
          "Algunos de esos significados se conocen incluso fuera del mar. Una bandera blanca y azul partida en diagonal significa que hay un buzo en el agua y que conviene apartarse. Una completamente amarilla anunciaba antiguamente cuarentena a bordo y hoy significa justo lo contrario, que el barco está sano y pide permiso para entrar en puerto. Una roja y amarilla partida avisa de carga peligrosa. Y hay combinaciones fijas para pedir auxilio, para avisar de que se maniobra con dificultad o para indicar que se están soltando amarras y que el barco va a moverse de inmediato.",
        destacado: { tipo: "frase", frase: "La amarilla significaba cuarentena y hoy significa lo contrario." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La radio y después el satélite han quitado casi todo el trabajo a estas banderas, pero siguen siendo obligatorias a bordo y se siguen usando por dos motivos muy concretos: funcionan sin electricidad y se ven desde otro barco sin necesidad de sintonizar nada ni de saber en qué canal está escuchando el otro. En las regatas y en los puertos deportivos se usan a diario. Y alguna ha salido del mar por la puerta de atrás: la de buzo en el agua es hoy un adhesivo habitual en los coches de los submarinistas.",
      },
    ],
  },

  {
    id: "banderas-de-conveniencia",
    titulo: "El barco elige su país",
    gancho: "Se matricula donde salga barato, aunque el dueño no haya pisado nunca ese país.",
    categoria: "Banderas",
    color: "var(--ochre)",
    encargo: "La popa de un carguero enorme con el nombre del puerto de registro pintado.",
    entrada:
      "Mares del mundo, siglo XXI. Un barco mercante navega bajo la bandera del país donde está registrado, y ese registro determina qué leyes laborales, fiscales y de seguridad se le aplican. Como el armador puede elegir dónde matricularlo, buena parte de la flota mundial navega hoy con banderas de países pequeños y lejanos.",
    paginas: [
      {
        rotulo: "El registro abierto",
        texto:
          "Se llama registro abierto y consiste en que un país permita matricular barcos a propietarios extranjeros sin ninguna vinculación real con él. El armador paga una tasa anual y obtiene a cambio impuestos bajos, menos exigencias sobre la nacionalidad y el salario de la tripulación y, en algunos casos, inspecciones bastante más laxas. Un país sin apenas costa puede tener así una de las flotas mayores del mundo sobre el papel, y los registros más grandes pertenecen a países pequeños que ingresan por esta vía buena parte de su presupuesto.",
        destacado: { tipo: "frase", frase: "Un país casi sin costa puede tener una flota enorme." },
      },
      {
        rotulo: "El problema",
        texto:
          "El sistema empezó a extenderse en los años veinte y hoy cubre la mayoría del tonelaje mundial. Los sindicatos marítimos llevan décadas denunciando lo que implica para los tripulantes: contratos regidos por leyes de países que no van a inspeccionar nada, salarios muy desiguales a bordo del mismo barco y dificultades enormes para reclamar cuando algo va mal. Existe una organización internacional que publica una lista de registros considerados problemáticos y que negocia convenios mínimos, y los puertos inspeccionan a los barcos que llegan, con potestad para inmovilizarlos si encuentran deficiencias graves a bordo.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "registros pequeños concentran la flota" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La bandera de un barco, que empezó siendo una manera rápida de saber a quién había que pedir cuentas, se ha convertido en una decisión comercial que se toma en un despacho con una hoja de cálculo delante. En los accidentes grandes con vertidos la investigación se complica precisamente por eso: el barco es de un país, la empresa de otro, la tripulación de un tercero y el seguro de un cuarto. Se han propuesto reformas durante décadas sin gran resultado, porque cualquier endurecimiento empuja a matricularse en el registro siguiente.",
      },
    ],
  },
];
