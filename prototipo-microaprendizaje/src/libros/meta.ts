/* ==========================================================================
   GENERADO por scripts/generar-meta.mjs — no editar a mano.

   Lo mínimo que hace falta para pintar la biblioteca sin descargar el texto
   de los libros: título, autor, año, las dos frases de la ficha y los minutos
   de cada capítulo, que son los que se ven parada por parada en el mapa del
   camino. El texto entero se pide aparte, al abrir un libro.

   Para regenerarlo:  npx tsx scripts/generar-meta.mjs
   ========================================================================== */

export type CapituloMeta = { titulo: string; minutos: number };

export type FichaMeta = {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  gancho: string;
  porQue: string;
  minutos: number;
  capitulos: CapituloMeta[];
};

export const META: FichaMeta[] = [
  {
    id: "canones-agosto",
    titulo: "Los cañones de agosto",
    autor: "Barbara Tuchman",
    ano: 1962,
    gancho: "Un solo mes de 1914 contado en quinientas páginas. Kennedy lo leyó y lo repartió entre su gabinete justo antes de la crisis de los misiles de Cuba.",
    porQue: "Es el mejor libro que existe sobre cómo unos hombres razonables, con buenos planes, meten a un continente entero en una catástrofe en treinta días.",
    minutos: 21.3,
    capitulos: [
      { titulo: "Nueve reyes a caballo", minutos: 4.3 },
      { titulo: "El plan de un hombre muerto", minutos: 4.2 },
      { titulo: "Bélgica", minutos: 4.2 },
      { titulo: "El día más sangriento de Francia", minutos: 4.3 },
      { titulo: "El despacho de Kennedy", minutos: 4.4 },
    ],
  },
  {
    id: "tatuador",
    titulo: "El tatuador de Auschwitz",
    autor: "Heather Morris",
    ano: 2018,
    gancho: "Un hombre de ochenta y siete años que llevaba cincuenta callado, porque temía que si contaba lo que hizo en Auschwitz lo tomaran por colaborador.",
    porQue: "Porque ha vendido más de ocho millones de ejemplares y es, para mucha gente, su única idea de cómo era Auschwitz. Y porque el propio Museo de Auschwitz publicó un informe enumerando lo que tiene de falso.",
    minutos: 20.9,
    capitulos: [
      { titulo: "El número 32407", minutos: 4.3 },
      { titulo: "El hombre que marcaba brazos", minutos: 4.1 },
      { titulo: "34902", minutos: 4.1 },
      { titulo: "Los diamantes en el dobladillo", minutos: 4.1 },
      { titulo: "Melbourne, 2003", minutos: 4.4 },
    ],
  },
  {
    id: "guerra-civil-thomas",
    titulo: "La guerra civil española",
    autor: "Hugh Thomas",
    ano: 1961,
    gancho: "Un inglés de veintinueve años escribió la primera historia completa de la guerra de España. En España estuvo prohibida y entró de contrabando en maletas.",
    porQue: "Durante quince años fue el único libro donde un español podía leer lo que había pasado en su propio país. Hoy está superado en casi todo, y sigue siendo el mejor sitio para entender la guerra entera de una vez.",
    minutos: 23.4,
    capitulos: [
      { titulo: "Un funcionario que dimite por Suez", minutos: 4.9 },
      { titulo: "El 17 de julio de 1936", minutos: 4.7 },
      { titulo: "El Comité de No Intervención, Londres", minutos: 4.7 },
      { titulo: "El Ebro", minutos: 4.5 },
      { titulo: "Ruedo Ibérico, París, 1962", minutos: 4.6 },
    ],
  },
  {
    id: "auschwitz-rees",
    titulo: "Auschwitz: los nazis y la solución final",
    autor: "Laurence Rees",
    ano: 2005,
    gancho: "En mayo de 1940, el sitio era un cuartel abandonado en un pueblo polaco de doce mil habitantes y estaba pensado para presos políticos polacos. Nadie que estuviera allí aquel día había planeado lo que vendría después, y ese es exactamente el argumento del libro.",
    porQue: "Porque explica, paso a paso y con fechas, cómo se llegó hasta allí sin que exista una sola orden firmada; y porque corrige de raíz las dos cosas que casi todo el mundo cree: la cifra de la placa y la idea de que Auschwitz es donde murió la mayoría.",
    minutos: 26.9,
    capitulos: [
      { titulo: "Un cuartel de artillería en un pueblo polaco", minutos: 5.4 },
      { titulo: "Nadie encontró la orden firmada", minutos: 5.4 },
      { titulo: "La cifra de la placa", minutos: 5.3 },
      { titulo: "Los que intentaron pararlo", minutos: 5.3 },
      { titulo: "El contable que se sentó delante de la cámara", minutos: 5.5 },
    ],
  },
  {
    id: "postguerra",
    titulo: "Postguerra",
    autor: "Tony Judt",
    ano: 2005,
    gancho: "Europa en 1945 era un continente de escombros, hambre y treinta millones de muertos. Cómo salió de ahí es la mejor historia que se ha escrito de nuestro propio siglo.",
    porQue: "Explica de dónde salieron el estado del bienestar, la Unión Europea y la Transición española, y por qué nada de eso era inevitable. Y termina con la idea más incómoda del libro: que Europa se reconstruyó sobre un acuerdo de no recordar.",
    minutos: 24.3,
    capitulos: [
      { titulo: "El año cero", minutos: 5.1 },
      { titulo: "Los treinta años que parecieron normales", minutos: 5.6 },
      { titulo: "La mitad que se quedó al otro lado", minutos: 4.3 },
      { titulo: "1968, 1973 y la vuelta del sur", minutos: 4.6 },
      { titulo: "1989 y la deuda con los muertos", minutos: 4.8 },
    ],
  },
  {
    id: "homo-sovieticus",
    titulo: "El fin del Homo Sovieticus",
    autor: "Svetlana Aleksiévich",
    ano: 2013,
    gancho: "Veinte años grabando a gente corriente del imperio que se cayó. Le dieron el Nobel por ello, y también la llevaron a juicio por lo mismo: por lo que hace con las cintas cuando se sienta a escribir.",
    porQue: "Porque es el mejor retrato que existe de lo que le pasa por dentro a un país cuando se le acaba el mundo. Y porque su título original no dice lo que dice el español: no habla de un final, habla de ropa usada que alguien se ha vuelto a poner.",
    minutos: 25.9,
    capitulos: [
      { titulo: "Un mariscal se ahorca en su despacho del Kremlin", minutos: 5.1 },
      { titulo: "Cien horas de grabación para tres páginas", minutos: 5.2 },
      { titulo: "La libertad resultó ser el salchichón", minutos: 5.2 },
      { titulo: "El juicio de Minsk", minutos: 5.1 },
      { titulo: "Tiempo de segunda mano", minutos: 5.2 },
    ],
  },
  {
    id: "imperiofobia",
    titulo: "Imperiofobia y leyenda negra",
    autor: "María Elvira Roca Barea",
    ano: 2016,
    gancho: "Sostiene que España es el único imperio de la historia que se creyó la propaganda de sus enemigos. Vendió cientos de miles de ejemplares y los historiadores profesionales lo destrozaron.",
    porQue: "Porque lleva razón en muchos datos concretos que casi nadie conoce y usa el mismo método que denuncia. Leerlo bien enseña a la vez historia de España y algo más útil: cómo se fabrica el relato que un país se cuenta de sí mismo.",
    minutos: 24.6,
    capitulos: [
      { titulo: "Un panfleto impreso en Delft", minutos: 5 },
      { titulo: "Los datos que casi nadie conoce", minutos: 5.1 },
      { titulo: "Lo que le contestaron los historiadores", minutos: 4.8 },
      { titulo: "Cómo se fabrica el relato de un país", minutos: 4.9 },
      { titulo: "Qué hacer con un libro así", minutos: 4.8 },
    ],
  },
  {
    id: "arte-sin-hombres",
    titulo: "Historia del arte sin hombres",
    autor: "Katy Hessel",
    ano: 2022,
    gancho: "En una feria de arte de Londres con miles de obras no había ni una sola de una mujer. La que se dio cuenta tenía veintiún años y decidió escribir el otro libro.",
    porQue: "Es la respuesta directa al manual de Gombrich, y no va de opinar: va de enseñar los mecanismos concretos por los que media historia del arte desapareció.",
    minutos: 22,
    capitulos: [
      { titulo: "Una feria sin una sola mujer", minutos: 4.4 },
      { titulo: "El juicio de Artemisia", minutos: 4.4 },
      { titulo: "Las dos que solo están en el cuadro", minutos: 4.3 },
      { titulo: "La abstracción llegó antes", minutos: 4.6 },
      { titulo: "¿Hay que estar desnuda?", minutos: 4.3 },
    ],
  },
  {
    id: "van-gogh-cartas",
    titulo: "Cartas a Theo",
    autor: "Vincent van Gogh",
    ano: 1914,
    gancho: "Pintó unas dos mil obras en diez años y solo se le documenta una venta. Su hermano le pagó cada tubo de pintura.",
    porQue: "Las cartas desmontan el mito del loco que pintaba por instinto: era un lector voraz que razonaba cada color. Y existen porque una viuda de veintiocho años decidió que existieran.",
    minutos: 26.6,
    capitulos: [
      { titulo: "El evangelista despedido de las minas", minutos: 5.2 },
      { titulo: "Ciento cincuenta francos al mes", minutos: 5.5 },
      { titulo: "Por qué este rojo va contra este verde", minutos: 5.2 },
      { titulo: "La oreja de la que no habla", minutos: 5.3 },
      { titulo: "La viuda que inventó a Van Gogh", minutos: 5.3 },
    ],
  },
  {
    id: "vidas-vasari",
    titulo: "Las vidas de los más excelentes pintores, escultores y arquitectos",
    autor: "Giorgio Vasari",
    ano: 1550,
    gancho: "Casi todo lo que crees saber sobre los artistas del Renacimiento lo escribió un pintor de Arezzo que conocía a la mitad de ellos.",
    porQue: "Es el primer libro de historia del arte que se escribió, y sigue siendo la fuente de casi todas las anécdotas que circulan sobre Giotto, Leonardo o Miguel Ángel. También es donde nacieron algunos de los errores que todavía repetimos.",
    minutos: 23.8,
    capitulos: [
      { titulo: "Una cena en casa del cardenal", minutos: 4.8 },
      { titulo: "El niño que dibujaba ovejas", minutos: 4.8 },
      { titulo: "Las puertas del Paraíso", minutos: 4.7 },
      { titulo: "El funeral de San Lorenzo", minutos: 4.8 },
      { titulo: "El muro de la Sala de los Quinientos", minutos: 4.7 },
    ],
  },
  {
    id: "espiritual-arte",
    titulo: "De lo espiritual en el arte",
    autor: "Vasili Kandinsky",
    ano: 1911,
    gancho: "El libro con el que un pintor se dio permiso para dejar de pintar cosas. Su teoría del color es casi toda falsa y aun así cambió lo que se cuelga en las paredes.",
    porQue: "Porque explica de dónde salió el arte abstracto, que es lo que más incomoda al visitante de un museo. Y enseña una manera concreta de mirar un cuadro que no representa nada, que es dejar de preguntar qué es.",
    minutos: 24,
    capitulos: [
      { titulo: "Un cuadro apoyado del revés", minutos: 4.9 },
      { titulo: "El amarillo suena a trompeta", minutos: 4.9 },
      { titulo: "La necesidad interior", minutos: 4.8 },
      { titulo: "La mujer que llegó cuatro años antes", minutos: 4.8 },
      { titulo: "Del Bauhaus a la pared del salón", minutos: 4.7 },
    ],
  },
  {
    id: "reproductibilidad",
    titulo: "La obra de arte en la época de su reproductibilidad técnica",
    autor: "Walter Benjamin",
    ano: 1936,
    gancho: "Un refugiado alemán sin trabajo escribió en un café de París por qué una foto de un cuadro no es el cuadro. Cuatro años después murió en la frontera española.",
    porQue: "Es el ensayo del que salió todo lo que se dice hoy sobre imágenes, copias y originales. Y casi nadie lo lee: se citan cuatro frases suyas, casi siempre al revés de lo que él quería decir.",
    minutos: 22.5,
    capitulos: [
      { titulo: "El Instituto en el exilio", minutos: 4.5 },
      { titulo: "El aura", minutos: 4.8 },
      { titulo: "La sala de montaje", minutos: 4.6 },
      { titulo: "El estadio de Núremberg", minutos: 4.2 },
      { titulo: "Portbou, 26 de septiembre de 1940", minutos: 4.3 },
    ],
  },
  {
    id: "heroe-mil-caras",
    titulo: "El héroe de las mil caras",
    autor: "Joseph Campbell",
    ano: 1949,
    gancho: "Un hombre sin doctorado, que se pasó cinco años sin trabajo leyendo nueve horas al día en una cabaña, escribió el esquema con el que se construyen hoy la mitad de las películas de Hollywood.",
    porQue: "Porque su estructura funciona sorprendentemente bien para escribir historias y es bastante mala como descripción de la mitología del mundo, y casi nadie distingue las dos cosas.",
    minutos: 22,
    capitulos: [
      { titulo: "Cinco años leyendo en una cabaña", minutos: 4.5 },
      { titulo: "El monomito", minutos: 4.2 },
      { titulo: "El rancho Skywalker, 1983", minutos: 4.5 },
      { titulo: "Los mitos que no encajan", minutos: 4.6 },
      { titulo: "La diosa y la tentadora", minutos: 4.1 },
    ],
  },
  {
    id: "el-elemento",
    titulo: "El elemento",
    autor: "Ken Robinson",
    ano: 2009,
    gancho: "La charla más vista de la historia de TED se apoya en una estadística que la NASA nunca hizo. Y el argumento, curiosamente, aguanta igual sin ella.",
    porQue: "Porque es el libro que convenció a media docena de generaciones de que el colegio les había escondido algo. Vale la pena separar lo que Robinson demostró de lo que solo contó bien, porque las dos cosas están mezcladas y la segunda es la que más se repite.",
    minutos: 25,
    capitulos: [
      { titulo: "Una niña que no paraba quieta", minutos: 5 },
      { titulo: "Diecinueve minutos en Monterrey", minutos: 5 },
      { titulo: "El test que la NASA nunca hizo", minutos: 5.1 },
      { titulo: "La escuela que dicen que es una fábrica", minutos: 4.9 },
      { titulo: "Lo que aguanta cuando le quitas las cifras", minutos: 5 },
    ],
  },
];

/** Índice por identificador, que es como lo pide la pantalla. */
export const META_POR_ID: Record<string, FichaMeta> = Object.fromEntries(
  META.map((f) => [f.id, f]),
);
