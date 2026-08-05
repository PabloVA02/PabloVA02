import type { Short } from "../shorts";

/* ==========================================================================
   Los mercados.

   El sitio donde se junta gente a intercambiar cosas, que es a la vez la
   institución económica más antigua y la peor contada. El tema se pierde si
   se convierte en estampa de puestos y verduras.

   La regla del tema: se cuenta CÓMO SE FIJA EL PRECIO y quién vigila que no
   haya trampa. Un mercado no es un montón de puestos: es un conjunto de
   reglas —el día, el sitio, la medida, el pregón— y todas ellas se
   inventaron para resolver un problema de confianza entre desconocidos.
   ========================================================================== */

export const MERCADOS: Short[] = [
  {
    id: "el-dia-de-mercado",
    titulo: "El mercado lo daba el rey",
    gancho: "Era un privilegio escrito que valía dinero, y los pueblos vecinos pleiteaban durante años por conseguirlo.",
    categoria: "Mercados",
    color: "var(--slate)",
    encargo: "Una plaza porticada de pueblo con soportales de piedra y suelo empedrado.",
    entrada:
      "Europa, siglos XI a XV. Un pueblo no puede celebrar mercado porque le apetezca: necesita un privilegio otorgado por el rey o por el señor del lugar, escrito en un documento que fija el día de la semana, el sitio exacto y los impuestos que se cobrarán. Ese papel vale una fortuna, porque un mercado semanal cambia por completo la economía de un lugar.",
    paginas: [
      {
        rotulo: "El calendario",
        texto:
          "Las concesiones se repartían con cuidado para no pisarse. Si un pueblo tenía mercado el martes, al de al lado se le daba el jueves, de modo que los comerciantes ambulantes pudieran hacer un circuito semanal completo pasando por todos. Cuando dos concesiones caían el mismo día y demasiado cerca, empezaban los pleitos, que a veces duraban décadas y llegaban a los tribunales del reino con testigos midiendo distancias a pie. La regla habitual era que dos mercados debían estar separados por la distancia que un hombre pudiera recorrer en un tercio del día.",
        destacado: { tipo: "frase", frase: "Los pleitos se resolvían midiendo el camino a pie." },
      },
      {
        rotulo: "Las reglas",
        texto:
          "El privilegio traía consigo un reglamento minucioso, porque el problema de fondo de cualquier mercado es que compradores y vendedores no se conocen. Se fijaba el uso obligatorio de las medidas oficiales del municipio, guardadas muchas veces talladas en la piedra de un muro para que cualquiera pudiera comprobarlas. Se prohibía comprar la mercancía fuera del pueblo antes de que llegara, para que no se especulara con ella. Y había un tribunal rápido que juzgaba las disputas ese mismo día, antes de que los forasteros se marcharan, porque de nada sirve ganar un pleito a un comerciante que ya está a tres pueblos de distancia.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "día a la semana, fijado por escrito" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedaron las plazas. Las plazas mayores porticadas de media Europa son mercados construidos, con soportales para vender a cubierto, casas de vecinos encima y el edificio del concejo presidiendo, y su forma alargada o cuadrada responde a cómo se colocaban los puestos. Quedaron los días de mercado, que en miles de pueblos siguen siendo el mismo de hace setecientos años. Y quedaron las medidas talladas en las paredes, que todavía pueden verse en algunas iglesias y ayuntamientos, con su hueco para comprobar si la vara del vendedor era la buena.",
      },
    ],
  },
  {
    id: "la-lonja-y-el-precio",
    titulo: "El precio se canta a gritos",
    gancho: "Todo el mundo oye lo que paga el otro. Esa transparencia obligatoria es lo que convierte un sitio en mercado.",
    categoria: "Mercados",
    color: "var(--ochre)",
    encargo: "Una nave de lonja de pescado con cajas de hielo y un panel de precios.",
    entrada:
      "Cualquier puerto pesquero al amanecer, con un procedimiento heredado de las lonjas del siglo XIV del Mediterráneo. Los barcos descargan, las cajas se pesan y se ordenan, y entonces empieza la subasta. Lo llamativo no es el griterío, sino una regla que casi nadie asocia con el mercado: aquí está prohibido negociar en privado, y todos los precios se cantan delante de todos.",
    paginas: [
      {
        rotulo: "A la baja",
        texto:
          "La subasta de pescado funciona al revés de como se imagina la gente. En lugar de empezar bajo y subir, el rematador empieza con un precio alto y va bajando deprisa, y el primero que dice basta se lleva el lote. El motivo es la prisa: el pescado se estropea y hay cientos de lotes que colocar en poco tiempo, y este sistema resuelve cada uno en segundos. Hoy se hace muchas veces con un reloj electrónico cuyo puntero baja girando y con botones en los asientos, pero la mecánica es idéntica.",
        destacado: { tipo: "frase", frase: "El precio empieza alto y baja hasta que alguien lo para." },
      },
      {
        rotulo: "Ver el precio",
        texto:
          "Que el precio sea público no es una cortesía: es lo que hace que el mercado funcione. Si cada comprador negociara aparte, el vendedor podría cobrar mucho más al que tiene prisa o al que no sabe, y nadie sabría cuánto vale realmente lo que compra. Con todos los precios a la vista, cada transacción informa a la siguiente, y el resultado es una referencia que sirve también para los que no están en la sala: el precio de la lonja se publica y con él se pagan contratos en toda la cadena, hasta la pescadería del barrio.",
        destacado: { tipo: "cifra", cifra: "0", unidad: "tratos privados: todo se canta en voz alta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó una idea que se aplica hoy a cosas que no huelen a pescado: las bolsas de valores, las subastas de electricidad y las de deuda pública funcionan con el mismo principio de precio público y reglas iguales para todos. Y quedó la explicación de por qué en un mercado de verdad los precios se parecen tanto entre puestos vecinos: no es que se hayan puesto de acuerdo, es que todos ven lo que hacen los demás. Cuando esa transparencia falta, deja de ser un mercado y pasa a ser otra cosa.",
      },
    ],
  },
  {
    id: "el-primer-mercado-de-futuros",
    titulo: "Vender arroz que aún no existe",
    gancho: "En Osaka, en 1730, se compraban cosechas que todavía no existían, con contratos de papel y sin arroz de por medio.",
    categoria: "Mercados",
    color: "var(--plum)",
    curioso: true,
    encargo: "Sacos de arroz apilados en un almacén de madera antiguo.",
    entrada:
      "Japón, 1730. El gobierno autoriza oficialmente un mercado que llevaba décadas funcionando en la ciudad comercial más rica del país: allí no se compra arroz, se compran promesas de arroz futuro. Los señores feudales cobran sus rentas en grano, lo mandan a los almacenes de la ciudad y venden recibos, y con esos recibos se especula meses antes de la cosecha.",
    paginas: [
      {
        rotulo: "Vender promesas",
        texto:
          "El mecanismo resuelve un problema real. Un señor necesita dinero en primavera y su arroz no llega hasta el otoño; un comerciante quiere asegurarse el precio del grano antes de que suba. Los dos firman ahora un contrato con la cantidad, la calidad y el precio, para entregarlo en una fecha futura. Al estandarizar todos los contratos —mismo tipo de arroz, mismos vencimientos, mismo tamaño de lote— se hicieron intercambiables entre sí, y entonces empezaron a comprarse y venderse por su cuenta, sin que ningún grano se moviera del almacén.",
        destacado: { tipo: "frase", frase: "Los contratos circulaban solos, sin que el grano se moviera." },
      },
      {
        rotulo: "Las velas",
        texto:
          "Aquel mercado inventó también su forma de mirar los precios. Para seguir la evolución de cada jornada, los operadores dibujaban un rectángulo por sesión, con el cuerpo entre el precio de apertura y el de cierre y dos líneas finas arriba y abajo con el máximo y el mínimo, rellenando el cuerpo de un color u otro según hubiera subido o bajado. Ese gráfico de velas es el mismo que aparece hoy en cualquier pantalla de bolsa del mundo, y viene, con muy pocos cambios, de aquellos comerciantes de arroz.",
        destacado: { tipo: "cifra", cifra: "1730", unidad: "el año de la autorización oficial" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el modelo entero. Los mercados de futuros modernos, que empezaron con el trigo y el maíz en el siglo XIX y hoy abarcan desde el petróleo hasta los tipos de interés, funcionan con los mismos ingredientes: contratos estandarizados, una cámara que garantiza que ambas partes cumplan y la posibilidad de deshacer la posición sin tocar la mercancía. Y quedó una paradoja que sigue costando explicar: un mercado donde casi nadie quiere recibir el producto sirve, precisamente, para que quien sí lo necesita sepa a qué precio contar con él.",
      },
    ],
  },
];
