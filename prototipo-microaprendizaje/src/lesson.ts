/* ==========================================================================
   Capítulo 1 — La Biblioteca de Alejandría.

   Cada tarjeta declara su FORMA, y la forma manda sobre la maquetación:

     texto   página completa de lectura, tipografía grande y aire alrededor
     clave   idea clave, a página completa
     arte    texto breve arriba + ilustración
     grafico texto breve arriba + gráfico con datos

   Regla que se sigue en todo el capítulo: si una tarjeta no lleva imagen,
   lleva texto suficiente para llenar la página. Una frase suelta en medio de
   una pantalla vacía no es minimalismo, es una página a medio hacer.
   ========================================================================== */

export type Arte =
  | "estanteria"
  | "lectora"
  | "escritor"
  | "museo"
  | "aprendizaje"
  | "explorar"
  | "mapa"
  | "memoria"
  | "noche";

export type Grafico = "cronologia" | "coleccion" | "sofocles" | "supervivencia";

export type Card =
  | { forma: "texto"; texto: string }
  | { forma: "clave"; rotulo: string; frase: string }
  | { forma: "arte"; texto: string; arte: Arte }
  | { forma: "grafico"; texto: string; grafico: Grafico };

export const BOOK = {
  eyebrow: "Historia · Capítulo 1",
  title: "La Biblioteca de Alejandría",
  author: "Lo que se perdió, y por qué importa",
  meta: ["18 tarjetas", "5 min", "+40 XP"],
  learn: [
    "Qué intentaba hacer exactamente Alejandría con los libros del mundo.",
    "Cómo conseguían los rollos: el método era más agresivo de lo que parece.",
    "Por qué la idea del gran incendio es, en buena parte, un mito.",
    "Qué determina de verdad que un texto sobreviva veinte siglos.",
  ],
};

export const MINUTOS_OBJETIVO = 5;
export const TOTAL_XP = 40;

export const CARDS: Card[] = [
  {
    forma: "arte",
    texto: "Durante casi seis siglos, un edificio del norte de Egipto intentó algo que nadie había intentado antes: reunir <em>todos los libros del mundo</em>.",
    arte: "estanteria",
  },
  {
    forma: "texto",
    texto: "No era una biblioteca de barrio ni la colección privada de un rey aficionado.<br /><br />Era un proyecto de Estado, con presupuesto público, personal fijo y una ambición que conviene tomarse al pie de la letra: no querían tener <em>muchos</em> libros. Querían tenerlos <em>todos</em>.",
  },
  {
    forma: "arte",
    texto: "La fundaron los Ptolomeos, la dinastía griega que heredó Egipto tras la muerte de Alejandro Magno, alrededor del año 300 a.C.",
    arte: "mapa",
  },
  {
    forma: "grafico",
    texto: "Estos son los seis siglos que vas a recorrer en este capítulo.",
    grafico: "cronologia",
  },
  {
    forma: "texto",
    texto: "Para llenarla hacía falta un método. Y el que eligieron no era precisamente delicado.<br /><br />Cada barco que entraba en el puerto de Alejandría era registrado por funcionarios. Si llevaba rollos a bordo, se los quedaban. Sin discusión y sin permiso.",
  },
  {
    forma: "arte",
    texto: "Los copiaban en el propio edificio, devolvían <em>la copia</em> al dueño y se quedaban el original.",
    arte: "lectora",
  },
  {
    forma: "texto",
    texto: "A aquellos volúmenes los llamaron «los de los barcos», y no era un apodo cariñoso: era una categoría de catálogo.<br /><br />Se conservan registros contables de las indemnizaciones que la administración pagaba a los dueños. Sabían perfectamente que estaban confiscando. Simplemente les compensaba.",
  },
  {
    forma: "clave",
    rotulo: "Idea clave",
    frase: "No coleccionaban libros. Coleccionaban el derecho a decir que lo tenían todo.",
  },
  {
    forma: "grafico",
    texto: "Con ese método llegaron a una cifra que cuesta situar en su contexto.",
    grafico: "coleccion",
  },
  {
    forma: "texto",
    texto: "Cuatrocientos mil rollos.<br /><br />Para hacerse una idea de lo que significa: ninguna biblioteca europea volvió a acercarse a esa cifra hasta bien entrado el siglo XVIII. Pasaron casi dos mil años antes de que alguien reuniera otra vez tantos textos bajo un mismo techo.",
  },
  {
    forma: "arte",
    texto: "Y aquí llega la parte que casi todo el mundo cuenta mal.",
    arte: "noche",
  },
  {
    forma: "clave",
    rotulo: "Idea clave",
    frase: "La biblioteca no ardió una noche. Se apagó despacio, durante siglos.",
  },
  {
    forma: "texto",
    texto: "Hubo un incendio con Julio César en el año 48 a.C. Es cierto, y está documentado. Pero afectó sobre todo a almacenes del puerto, no al corazón de la institución.<br /><br />Lo que de verdad la mató fue mucho más aburrido: recortes de presupuesto, la expulsión de los sabios extranjeros, guerras civiles y siglos de desinterés administrativo.",
  },
  {
    forma: "arte",
    texto: "Nadie decidió destruirla. Simplemente, generación tras generación, dejó de parecer importante.",
    arte: "museo",
  },
  {
    forma: "grafico",
    texto: "El resultado no tiene nada de aburrido. Lo medimos cada vez que abrimos a un autor clásico.",
    grafico: "sofocles",
  },
  {
    forma: "texto",
    texto: "De Sófocles conservamos siete obras. Escribió más de ciento veinte.<br /><br />Del resto solo nos queda el título, citado de pasada por alguien que sí llegó a leerlas. Sabemos que <em>Los sabuesos</em> existió porque otro autor la mencionó. Nunca sabremos cómo terminaba.",
  },
  {
    forma: "grafico",
    texto: "Lo que sobrevivió no sobrevivió solo. Alguien lo copió a mano. Y luego otro. Y otro.",
    grafico: "supervivencia",
  },
  {
    forma: "texto",
    texto: "Cada copia era una apuesta: meses de trabajo dedicados a un texto sin saber si alguien lo leería.<br /><br />El conocimiento no se conserva por sí mismo. No hay ningún mecanismo automático que lo proteja. Se conserva porque alguien decide, cada cierto tiempo, volver a copiarlo.",
  },
];
