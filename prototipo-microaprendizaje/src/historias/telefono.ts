import type { Short } from "../shorts";

/* ==========================================================================
   Teléfono.

   El riesgo del tema es la cronología de inventores: quién fue primero,
   quién copió a quién, con nombres y fechas amontonados. Aburre y encima
   no se recuerda.

   La regla del tema: el teléfono se cuenta desde EL QUE ESTÁ EN MEDIO. Una
   telefonista que decide a quién conecta. Un funcionario de patentes con
   dos carpetas encima de la mesa. Un traductor tecleando en una sala sin
   ventanas. Toda la historia del teléfono es la historia de quitar
   intermediarios, y cada uno de ellos tenía nombre y horario.

   Y cuando hay una leyenda popular —el teléfono rojo— se desmonta con
   datos, sin quitarle la gracia.
   ========================================================================== */

export const TELEFONO: Short[] = [
  {
    id: "patente-telefono",
    titulo: "El teléfono, por unas horas",
    gancho: "Dos solicitudes el mismo día en la misma oficina. El orden de la cola decidió el invento del siglo.",
    categoria: "Teléfono",
    color: "var(--clay)",
    encargo: "Un aparato telefónico de madera de finales del XIX sobre una mesa de despacho.",
    fotos: [
      {
        archivo: "Antique wall telephone (43917500625).jpg",
        autor: "Un teléfono de pared de manivela, de los primeros que se instalaron en las casas. Fotografía de Ben P L.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Antique_wall_telephone_(43917500625).jpg",
        foco: "55% 45%",
        alt: "Una caja de roble colgada en la pared, con la manivela a un lado, el auricular negro colgando y la bocina de metal.",
      },
      {
        archivo: "Alexander Graham Bell 1895 NPG 77 363.jpg",
        autor: "Alexander Graham Bell retratado en 1895. National Portrait Gallery.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:Alexander_Graham_Bell_1895_NPG_77_363.jpg",
        foco: "50% 30%",
        alt: "Retrato en sepia de un hombre de pelo y barba blancos, con traje oscuro, mirando de lado.",
      },
      {
        archivo: "Wisconsin Bell Telephone Company Switchboard.jpg",
        autor: "Un operador en la centralita de la compañía telefónica de Wisconsin.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Wisconsin_Bell_Telephone_Company_Switchboard.jpg",
        foco: "50% 45%",
        alt: "Un hombre sentado de perfil ante un panel de madera lleno de clavijas, relojes y conmutadores.",
      },
      {
        archivo: "4 women at tel. (i.e., telephone) switchboard LOC matpc.08799.jpg",
        autor: "Cuatro telefonistas conectando llamadas a mano. Colección Matson.",
        licencia: "Dominio público",
        fuente: "https://commons.wikimedia.org/wiki/File:4_women_at_tel._(i.e.,_telephone)_switchboard_LOC_matpc.08799.jpg",
        foco: "58% 62%",
        alt: "Cuatro mujeres con auriculares sentadas en fila frente a un tablero de clavijas y cables cruzados.",
      },
    ],
    entrada:
      "Washington, 14 de febrero de 1876. En la oficina de patentes de Estados Unidos entran ese mismo día dos documentos que describen el mismo asunto: transmitir la voz humana por un hilo eléctrico, una idea que hasta entonces se consideraba poco menos que un disparate porque el telégrafo solo sabía mandar golpes. Los presentan dos inventores que llevan años trabajando en ello por separado, en ciudades distintas, y que no se conocen entre sí ni saben lo que está haciendo el otro. Entre una entrega y la otra pasan solo unas horas, y de esas horas depende todo lo que viene después.",
    paginas: [
      {
        rotulo: "El mismo día",
        texto:
          "El que llegó primero presentó una patente completa; el segundo, un aviso de invención, una figura legal que servía para reservar una idea todavía sin terminar. Los dos describían el mismo principio, y el segundo incluía además un detalle que el primero no tenía resuelto: un transmisor de líquido, un hilo metido en agua con ácido cuya resistencia eléctrica cambia al vibrar. Tres semanas más tarde, el que había ganado la carrera hizo funcionar su aparato por primera vez usando exactamente ese sistema, que no aparecía en el cuerpo de su solicitud y sí en un margen añadido a mano.",
        destacado: { tipo: "frase", frase: "El detalle que lo hizo funcionar estaba escrito en un margen." },
      },
      {
        rotulo: "Los pleitos",
        texto:
          "Aquella coincidencia alimentó unos seiscientos pleitos a lo largo de dieciocho años, con acusaciones de que un empleado de la oficina había filtrado el contenido de una solicitud a cambio de dinero. La empresa creada alrededor de la patente los ganó todos, incluidos dos que llegaron al Tribunal Supremo. Hubo además un tercer inventor, un italiano emigrado que años antes había montado un aparato parecido para hablar desde el taller con su mujer enferma, y que no pudo pagar los diez dólares anuales que costaba mantener vivo su aviso de invención. Murió pobre en 1889.",
        destacado: { tipo: "cifra", cifra: "600", unidad: "pleitos por la misma patente" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella patente se ha descrito muchas veces como la más rentable de la historia. La empresa que la explotó llegó a ser la mayor del mundo y mantuvo el monopolio del teléfono en su país hasta que un juez la partió en pedazos en 1984. Los historiadores siguen discutiendo qué ocurrió de verdad aquel 14 de febrero, y en 2002 el Congreso estadounidense aprobó una resolución reconociendo el trabajo del italiano, un gesto simbólico que no cambió ninguna patente ni devolvió nada a nadie. El invento del siglo se decidió por el orden de una cola.",
      },
    ],
  },

  {
    id: "central-automatica",
    titulo: "Marcar sin telefonista",
    gancho: "Sospechaba que la telefonista mandaba sus encargos a la funeraria de la competencia.",
    categoria: "Teléfono",
    color: "var(--slate)",
    curioso: true,
    encargo: "Un cuadro de conexiones antiguo lleno de clavijas y cables enredados.",
    fotos: [
      {
        archivo: "British-made Antique Rotary Telephone.jpg",
        autor: "Teléfono de columna de latón con disco de marcar, fabricado en Inglaterra.",
        licencia: "CC0",
        fuente: "https://commons.wikimedia.org/wiki/File:British-made_Antique_Rotary_Telephone.jpg",
        foco: "50% 55%",
        alt: "Teléfono antiguo de latón con el auricular en lo alto y un disco de marcar en la base.",
      },
      {
        archivo: "Black Diamond Historical Museum - telephone switchboard 01.jpg",
        autor: "Cuadro de conexiones manual conservado en el museo de Black Diamond, Washington. Fotografía de Joe Mabel.",
        licencia: "CC BY-SA 4.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Black_Diamond_Historical_Museum_-_telephone_switchboard_01.jpg",
        foco: "50% 50%",
        alt: "Cuadro de conexiones de madera lleno de clavijas, cables y pequeños interruptores.",
      },
      {
        archivo: "Orion & Oriola switchboard Elisa Telephone Museum.jpg",
        autor: "Centralita manual expuesta en el museo del teléfono de Elisa, en Finlandia. Fotografía de Antti Leppänen.",
        licencia: "CC BY 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Orion_%26_Oriola_switchboard_Elisa_Telephone_Museum.jpg",
        foco: "50% 50%",
        alt: "Panel de centralita con filas de clavijas numeradas y cables colgando por delante.",
      },
      {
        archivo: "Mandeville Telephone parts.JPG",
        autor: "Piezas de teléfonos viejos amontonadas en una tienda de antigüedades de Luisiana.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Mandeville_Telephone_parts.JPG",
        foco: "50% 50%",
        alt: "Auriculares, discos de marcar y carcasas de teléfonos antiguos amontonados en un estante.",
      },
    ],
    entrada:
      "Kansas, en el centro de Estados Unidos, 1888. Para llamar por teléfono hay que pedirle el número a una operadora, que enchufa los cables a mano en un cuadro y escucha, si quiere, todo lo que se dice. Un hombre que regenta una funeraria empieza a notar que pierde clientes de forma sistemática, siempre de la misma manera: llaman preguntando por él y acaban en la funeraria de al lado. Sospecha de la telefonista del pueblo, que está casada con su competidor directo, y en vez de discutir con ella se pone a diseñar una máquina.",
    paginas: [
      {
        rotulo: "La sospecha",
        texto:
          "Nunca se demostró si aquello ocurría de verdad, pero él lo dio por seguro. Cuando alguien acababa de perder a un familiar y pedía por teléfono una funeraria, bastaba con que la operadora se equivocara de clavija para que el encargo acabara en el otro negocio. Su conclusión fue radical: si el problema era que había una persona en medio, había que quitar a la persona. No sabía nada de electricidad, así que se puso a estudiar por su cuenta y montó el primer prototipo con un cuello de camisa almidonado y unos alfileres, que le hacía de cuadro giratorio para probar la idea.",
        destacado: { tipo: "frase", frase: "El primer modelo lo montó sobre un cuello de camisa." },
      },
      {
        rotulo: "El selector",
        texto:
          "Patentó en 1891 un selector giratorio: un brazo que sube y gira dentro de un cilindro de contactos hasta encontrar la línea buscada, movido por los impulsos eléctricos que manda el aparato desde el que se llama. De ahí salió el disco de marcar, aquella rueda con agujeros que al volver a su sitio soltaba tantos golpes de corriente como el número marcado. La primera central automática se inauguró en 1892 en una ciudad de Indiana, con noventa y nueve abonados, y funcionaba sin que nadie escuchara ni conectara nada por el camino.",
        destacado: { tipo: "cifra", cifra: "1892", unidad: "la primera central sin operadoras" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El sistema se extendió despacio, porque las compañías grandes preferían a las operadoras y desconfiaban de las averías, pero acabó imponiéndose en todo el mundo y estuvo funcionando casi un siglo, hasta que las centrales electrónicas lo jubilaron. En España quedaron centrales de este tipo en pueblos pequeños hasta los años ochenta, con su ruido característico de relés. El enterrador vendió su parte del negocio por ciento ochenta mil dólares y volvió a lo suyo, y la empresa que llevaba su nombre acabó siendo un gigante mundial de la telefonía.",
      },
    ],
  },

  {
    id: "telefono-rojo",
    titulo: "Ni rojo ni teléfono",
    gancho: "La línea directa entre las dos capitales de la Guerra Fría era una máquina de escribir a distancia.",
    categoria: "Teléfono",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un teletipo antiguo con un rollo de papel saliendo, en una sala sin ventanas.",
    entrada:
      "Ginebra, 1963. Un año después de la crisis de los misiles, en la que un malentendido pudo terminar en guerra nuclear, Estados Unidos y la Unión Soviética firman un acuerdo para instalar una comunicación directa entre sus gobiernos. La prensa la bautiza enseguida como el teléfono rojo. En aquella instalación no hubo ningún teléfono.",
    paginas: [
      {
        rotulo: "El teletipo",
        texto:
          "Se instalaron dos teletipos, unas máquinas de escribir conectadas por cable que imprimen en el otro extremo lo que se teclea en este. La razón para no usar la voz era sensata: hablando se improvisa, se malinterpreta un tono y no queda registro, mientras que un texto escrito se traduce con calma, se revisa antes de mandarlo y se archiva. Cada lado escribía en su propio idioma y el traductor del otro lo pasaba al suyo. El aparato estaba en la sala de comunicaciones del ministerio de Defensa, no en el despacho del presidente, y desde luego no era rojo.",
        destacado: { tipo: "frase", frase: "Se escribía, no se hablaba: para que quedara constancia." },
      },
      {
        rotulo: "Las pruebas",
        texto:
          "La línea tenía que estar viva las veinticuatro horas, así que cada hora se mandaba un mensaje de prueba para comprobar que seguía funcionando. Un lado enviaba fragmentos de literatura o listas de palabras, el otro descripciones de paisajes; en la primera prueba oficial se transmitió una frase que contenía todas las letras del alfabeto. El cable atravesaba varios países y se cortó más de una vez: lo partió un agricultor arando en un campo y, en otra ocasión, un barco que echó el ancla justo encima. En un momento de crisis, sin embargo, no falló nunca.",
        destacado: { tipo: "cifra", cifra: "24", unidad: "horas al día mandando pruebas" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Se usó de verdad pocas veces, y casi siempre para avisar de movimientos militares que desde lejos podían malinterpretarse. La línea sigue existiendo, ahora por fibra y con correo cifrado, y el nombre falso también: el teléfono rojo aparece en decenas de películas como un aparato brillante encima de una mesa, a veces con una tapa transparente. La imagen es tan buena que ha sobrevivido sesenta años a la realidad, que resultaba bastante menos vistosa: dos máquinas grises en un sótano y un funcionario tecleando frases de prueba cada hora.",
      },
    ],
  },
];
