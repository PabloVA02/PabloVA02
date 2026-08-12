import type { Short } from "../shorts";

/* ==========================================================================
   Especias.

   El riesgo del tema es el exotismo: caravanas, aromas, Oriente. Postal
   sin información.

   La regla del tema: una especia se cuenta como MONOPOLIO. Todo el valor
   venía de que creciera en pocos sitios, y en cuanto dejó de crecer solo
   allí el precio se hundió. Así que hay que decir siempre cuánto costaba
   comparado con algo y qué pasó el día que se rompió el monopolio.

   Y la explicación popular —que servían para tapar la carne podrida— se
   desmonta con la aritmética, que es como se desmonta bien.
   ========================================================================== */

export const ESPECIAS: Short[] = [
  {
    id: "isla-por-manhattan",
    titulo: "Manhattan por una isla",
    gancho: "En 1667 pareció un negocio excelente. La isla medía tres kilómetros y tenía nuez moscada.",
    categoria: "Especias",
    color: "var(--ochre)",
    encargo: "Nueces moscadas abiertas con su envoltura roja sobre una mesa de madera.",
    fotos: [
      {
        archivo: "Nutmeg fruit with mace.jpg",
        autor: "El fruto de la nuez moscada abierto en el árbol, con el macis rojo envolviendo la semilla. Fotografía de Schlawensko.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nutmeg_fruit_with_mace.jpg",
        foco: "50% 50%",
        alt: "Un fruto amarillo partido colgando de una rama, con una red de tiras rojas brillantes envolviendo la semilla oscura.",
      },
      {
        archivo: "Nutmeg on Tree.jpg",
        autor: "Frutos de nuez moscada todavía cerrados en la mata. Fotografía de Joe Ravi.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Nutmeg_on_Tree.jpg",
        foco: "50% 50%",
        alt: "Dos frutos redondos y amarillentos colgando entre hojas verdes y lustrosas.",
      },
      {
        archivo: "Manhattan skyline south by Don Ramey Logan.jpg",
        autor: "El sur de Manhattan, la isla que los ingleses recibieron a cambio. Fotografía de Don Ramey Logan.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Manhattan_skyline_south_by_Don_Ramey_Logan.jpg",
        foco: "50% 50%",
        alt: "La punta sur de Manhattan vista desde el agua, con los rascacielos apretados sobre la isla.",
      },
      {
        archivo: "Drying nutmeg.jpg",
        autor: "Nuez moscada puesta a secar en Indonesia. Fotografía de Arie Basuki.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Drying_nutmeg.jpg",
        foco: "50% 50%",
        alt: "Una extensión de nueces pardas secándose al sol sobre una superficie plana.",
      },
    ],
    entrada:
      "Molucas, en la actual Indonesia, 1667. Holandeses e ingleses firman un tratado para acabar una guerra que llevaba años costándoles barcos y hombres, y de paso se intercambian territorios para dejar las cuentas claras. Los ingleses ceden una islita de tres kilómetros de largo, cubierta de árboles de nuez moscada, que los holandeses llevaban tiempo queriendo. A cambio se quedan con una isla lejana y bastante poco rentable del otro lado del mundo, llamada entonces Nueva Ámsterdam. En aquel momento nadie dudó de quién había salido ganando.",
    paginas: [
      {
        rotulo: "El monopolio",
        texto:
          "En aquel momento el trato tenía toda la lógica del mundo. La nuez moscada solo crecía en un puñado de islas de aquel archipiélago y se pagaba en Europa a precios delirantes, porque además de condimento se consideraba medicina contra la peste. Los holandeses controlaban ya todas las islas menos aquella, y hacerse con la última les daba el monopolio completo de una especia que multiplicaba su valor por varios miles entre el árbol y el mercado europeo. Para sostener el precio llegaron a arrasar plantaciones enteras y a ejecutar a quien las cultivara sin permiso.",
        destacado: { tipo: "frase", frase: "Arrasaban plantaciones enteras para mantener el precio alto." },
      },
      {
        rotulo: "El otro lado",
        texto:
          "La isla que recibieron los ingleses a cambio estaba en la costa este de América, tenía un puerto excelente y unos pocos miles de habitantes repartidos por su extremo sur. Le cambiaron el nombre por el de un duque inglés y la llamaron Nueva York. El monopolio de la nuez moscada, mientras tanto, duró poco más de un siglo: en 1770 un francés consiguió sacar plantones a escondidas y llevarlos a otras colonias, y hacia 1800 la especia ya se cultivaba en varios continentes y el precio se desplomó sin remedio para los holandeses.",
        destacado: { tipo: "cifra", cifra: "3", unidad: "kilómetros medía la isla cambiada" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella isla sigue habitada por unas dos mil personas, se llega en barco desde otra isla mayor cuando el mar lo permite y vive del cultivo de la misma nuez moscada, que hoy se compra en cualquier supermercado por unos céntimos el gramo. No tiene aeropuerto ni hoteles. Es el ejemplo que se cita siempre para explicar que el valor de un recurso depende del monopolio y no del recurso: la isla no cambió, cambió el hecho de que dejara de ser el único sitio del mundo donde crecía aquel árbol.",
      },
    ],
  },

  {
    id: "mito-carne-podrida",
    titulo: "No servían para tapar la podredumbre",
    gancho: "Quien podía pagar pimienta podía pagar carne fresca. El mito lo inventaron en el siglo XIX.",
    categoria: "Especias",
    color: "var(--clay)",
    curioso: true,
    encargo: "Un mostrador de mercado con montoncitos de especias de colores en cuencos.",
    entrada:
      "Europa, siglos XIII a XVI. Las especias asiáticas llegan por tierra y por mar y cuestan una fortuna: un puñado de pimienta puede valer lo que varios días de jornal de un obrero. La explicación que se repite en clase es que servían para disimular el sabor de la carne en mal estado. La cuenta, sencillamente, no sale por ningún lado.",
    paginas: [
      {
        rotulo: "El precio",
        texto:
          "El argumento económico es demoledor: quien podía permitirse comprar pimienta, canela o clavo estaba entre la gente más rica de su ciudad, y esa misma gente tenía acceso a carne fresca sin ningún problema, con ganado propio y matarife cerca. Nadie compra un condimento carísimo para salvar un alimento barato en mal estado; sale más a cuenta tirar la carne. Además existían métodos de conservación buenos y accesibles, el salado, el ahumado y el curado, y los recetarios de la época dan instrucciones detalladas para comprobar que una pieza está fresca.",
        destacado: { tipo: "frase", frase: "Sale más barato tirar la carne que echarle pimienta." },
      },
      {
        rotulo: "De dónde sale",
        texto:
          "El mito aparece en el siglo XIX, en obras de divulgación histórica que buscaban explicar de forma sencilla por qué Europa se lanzó al mar, y de ahí se coló en los libros escolares hasta hoy. Los usos reales eran otros: exhibir riqueza delante de los invitados, porque un plato muy especiado era caro y se notaba en el primer bocado; la cocina medicinal, ya que la medicina de la época clasificaba los alimentos por sus cualidades y las especias corregían el equilibrio; y el aroma en sí, que es lo mismo que buscamos hoy con la canela.",
        destacado: { tipo: "cifra", cifra: "1", unidad: "puñado de pimienta valía días de jornal" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella carrera por las especias sí explica una parte enorme de la historia: la ruta de Portugal alrededor de África, los viajes hacia el oeste, las compañías comerciales, las guerras coloniales y buena parte de la cartografía moderna salieron de intentar saltarse a los intermediarios de un negocio muy rentable. Hoy la pimienta cuesta unos céntimos y está en todas las mesas, y precisamente por eso cuesta imaginar el motivo verdadero. No se buscaban para tapar nada: se buscaban porque eran caras y porque tenerlas se notaba, y eso, entonces como ahora, es motivo suficiente.",
      },
    ],
  },

  {
    id: "pimienta-como-moneda",
    titulo: "Roma pagó en pimienta",
    gancho: "Mil quinientas libras de pimienta, junto al oro y la plata exigidos para levantar el asedio.",
    categoria: "Especias",
    color: "var(--slate)",
    encargo: "Granos de pimienta negra amontonados en el platillo de una balanza antigua.",
    entrada:
      "Roma, año 408. Un ejército godo rodea la ciudad y corta el suministro de comida durante semanas. Tras un asedio largo y con hambre dentro de las murallas, el senado negocia la retirada y acepta pagar un rescate enorme: cinco mil libras de oro, treinta mil de plata, cuatro mil túnicas de seda y mil quinientas libras de pimienta.",
    paginas: [
      {
        rotulo: "El pago",
        texto:
          "Que la pimienta apareciera en una lista junto al oro y la seda no era un detalle pintoresco: era una moneda más. Llegaba desde la India por barco hasta el mar Rojo y desde allí por tierra, se conservaba durante años sin estropearse, se podía pesar con precisión y todo el mundo aceptaba su valor, que son exactamente las propiedades que hacen falta para que algo funcione como dinero. Roma importaba cantidades enormes y los almacenes del puerto tenían depósitos construidos específicamente para especias, vigilados con el mismo cuidado que un tesoro en monedas.",
        destacado: { tipo: "cifra", cifra: "1.500", unidad: "libras de pimienta en el rescate" },
      },
      {
        rotulo: "La renta anual",
        texto:
          "La costumbre siguió durante siglos en Europa. Hay contratos medievales de alquiler en los que la renta anual se fija en libras de pimienta, dotes matrimoniales pagadas en especias y multas municipales expresadas en la misma unidad de peso. En Inglaterra quedó incluso una figura legal, el alquiler simbólico de un grano de pimienta al año, que servía para dejar constancia de que existía un contrato aunque no se cobrara nada, y que todavía aparece de vez en cuando en documentos como fórmula heredada. La expresión sobrevivió al motivo que la creó.",
        destacado: { tipo: "frase", frase: "Había alquileres cuya renta anual se pagaba en pimienta." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquella pimienta del rescate no salvó la ciudad: dos años después, en 410, el mismo ejército volvió y la saqueó, en un episodio que sacudió al mundo antiguo entero y del que se habló durante siglos. Y la especia dejó de ser dinero en cuanto se hizo abundante, que es lo que le ocurre a cualquier cosa que se use como moneda. Hoy está en un molinillo encima de la mesa y no se le presta ninguna atención, salvo cuando se acaba. Costó lo mismo que el oro exactamente mientras fue igual de difícil de conseguir.",
      },
    ],
  },
];
