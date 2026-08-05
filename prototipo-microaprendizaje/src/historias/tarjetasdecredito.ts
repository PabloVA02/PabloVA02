import type { Short } from "../shorts";

/* ==========================================================================
   Las tarjetas de credito.

   Un trozo de plastico que es en realidad un acuerdo entre tres partes. El
   tema se estropea si se cuenta como historia de bancos: lo interesante es
   el cacharro, el relieve, el listado de morosos en papel y el numero que
   se comprueba a mano.

   La regla del tema: se explica SIEMPRE QUIEN PAGA A QUIEN antes de contar
   la novedad, porque sin eso no se entiende nada. Y cada pieza va traducida
   antes de nombrarse: la plancha es una bandeja con un rodillo; el digito de
   control es una cifra que no significa nada y solo sirve para avisar. En el
   origen se cuenta que la anecdota famosa la adorno el propio protagonista.
   ========================================================================== */

export const TARJETAS_DE_CREDITO: Short[] = [
  {
    id: "la-cena-sin-cartera",
    titulo: "La primera tarjeta era de cartón",
    gancho: "Solo la aceptaban catorce restaurantes de Nueva York. Y la historia de su origen está adornada.",
    categoria: "Tarjetas",
    color: "var(--clay)",
    encargo: "Una tarjeta de cartulina de 1950 con una lista de restaurantes impresa detras.",
    entrada:
      "Nueva York, 1950. Pagar fuera de casa significa llevar dinero encima o tener cuenta abierta en cada sitio, con su libreta y su fiado, y eso solo funciona en el barrio donde a uno lo conocen. Fuera de ahí no hay crédito posible. Un empresario del sector financiero pone en marcha ese año un sistema distinto. Es una tarjeta que sirve en varios restaurantes a la vez, con una empresa en medio que paga a todos a fin de mes y luego le cobra al cliente.",
    paginas: [
      {
        rotulo: "La anécdota",
        texto:
          "La historia que se cuenta del origen es buena y por eso se ha repetido durante setenta años. Dice que aquel hombre estaba cenando en un restaurante, fue a pagar y se había dejado la cartera en casa. Tuvo que llamar a su mujer para que le llevara dinero, pasó vergüenza y decidió que aquello no volvería a pasarle. Él mismo admitió años después que la escena estaba adornada para vender el producto. La idea venía en realidad de un problema de negocio, que era cómo cobrar comisión a los dos lados. Pero la anécdota funcionaba mejor que la explicación y es la que ha llegado hasta hoy.",
        destacado: { tipo: "frase", frase: "Él mismo admitió que la escena estaba adornada." },
      },
      {
        rotulo: "Catorce sitios",
        texto:
          "La primera tarjeta era un cartoncito con el nombre del cliente impreso y una lista detrás. En esa lista estaban los catorce restaurantes de Nueva York que la aceptaban, y no había más. El sistema se sostiene sobre una idea que hoy parece obvia y entonces no lo era. La empresa cobra un porcentaje al restaurante por traerle clientes y una cuota al cliente por la comodidad. Al restaurante le compensa porque el que paga con tarjeta pide postre y no mira tanto la cuenta. En un año había veinte mil socios, y en cinco la tarjeta se aceptaba en varios países.",
        destacado: { tipo: "cifra", cifra: "14", unidad: "restaurantes la aceptaban al principio" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el modelo de negocio entero, que es el de casi todas las plataformas que existen hoy. Se pone una empresa en medio de dos que ya se entendían y se cobra a las dos por ponerlas en contacto. Quedó el paso siguiente, que fue la tarjeta de un banco en vez de la de una empresa de cenas. Un banco puede prestar el dinero de verdad, así que la tarjeta pasó de aplazar el pago a financiarlo. Y quedó una costumbre que los estudios miden desde hace décadas y que sigue igual. Con tarjeta se gasta más que con billetes, porque soltar un billete se nota y pasar un plástico no.",
      },
    ],
  },
  {
    id: "los-numeros-en-relieve",
    titulo: "Los números en relieve",
    gancho: "Antes de que hubiera teléfono en cada tienda, la tarjeta se copiaba con papel de calco y un rodillo.",
    categoria: "Tarjetas",
    color: "var(--slate)",
    curioso: true,
    encargo: "Una plancha metalica de calcar tarjetas con el rodillo a medio pasar.",
    entrada:
      "Comercios de todo el mundo, entre los años sesenta y los noventa del siglo XX. Una tarjeta de crédito de entonces tiene los números y el nombre abultados hacia fuera, en relieve, y ese relieve no es un adorno ni una manera de que se vea cara. Está ahí porque en la tienda no hay ninguna conexión con el banco: no hay línea de teléfono para consultar, ni ordenador, ni nada parecido. El pago tiene que quedar registrado en papel, y el aparato que lo hace se llama plancha y funciona exactamente como un sello.",
    paginas: [
      {
        rotulo: "La plancha",
        texto:
          "La plancha es una bandeja metálica con un rodillo que se desliza de un lado a otro. El dependiente pone la tarjeta boca arriba en el hueco y encima un juego de tres hojas con papel de calco. Al pasar el rodillo apretando, el relieve de la tarjeta se marca en las tres hojas a la vez. Una copia se la queda la tienda, otra el cliente y la tercera se manda al banco. El ruido de ese rodillo yendo y viniendo fue durante treinta años el sonido de pagar con tarjeta. El sistema es lento y tosco, pero funciona sin electricidad, sin teléfono y sin que se caiga nada.",
        destacado: { tipo: "frase", frase: "Tres hojas con papel de calco y un rodillo encima." },
      },
      {
        rotulo: "El listado",
        texto:
          "Aquel sistema tenía un agujero evidente, y es que la tienda no sabía si la tarjeta valía. Para taparlo, las empresas mandaban cada quince días un cuadernillo impreso a cada comercio. Dentro venían los números de las tarjetas robadas, canceladas o con impagos, en columnas de letra minúscula. El dependiente tenía que buscar el número a mano antes de cobrar, cosa que casi nadie hacía. Por encima de cierta cantidad había además que llamar por teléfono y esperar a que alguien autorizara. Todo eso desapareció cuando la línea llegó a las tiendas y la banda magnética permitió consultar al instante.",
        destacado: { tipo: "cifra", cifra: "15", unidad: "días tardaba en llegar el listado" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó el relieve mucho después de que dejara de hacer falta, por pura costumbre del sector. Se mantuvo décadas como respaldo para los sitios sin cobertura, como un barco o un avión. Ahora está desapareciendo, y las tarjetas nuevas llevan los números impresos en plano o directamente detrás. Quedó también la razón de que el número tenga esa longitud y ese reparto por bloques. Los primeros dígitos dicen qué empresa la emite y cuál es el banco, y el resto identifica la cuenta. Un número de tarjeta no es un número cualquiera: es una dirección con varios tramos, como la de una casa.",
      },
    ],
  },
  {
    id: "el-digito-que-comprueba",
    titulo: "La última cifra de tu tarjeta",
    gancho: "No forma parte de la cuenta. Está para detectar si te has equivocado tecleando, y se comprueba a mano.",
    categoria: "Tarjetas",
    color: "var(--plum)",
    curioso: true,
    encargo: "Un numero de tarjeta grande impreso en papel, con la ultima cifra rodeada a lapiz.",
    entrada:
      "Estados Unidos, 1954. Un ingeniero de una empresa de máquinas de oficina patenta un método para comprobar si una serie de cifras se ha copiado mal. El problema es corriente en cualquier oficina de la época, porque los números se pasan a mano de un papel a otro decenas de veces al día. Basta con teclear un cinco donde había un seis, o cambiar dos cifras de sitio, para que un pago acabe en la cuenta equivocada sin que nadie lo note. Su método sigue funcionando hoy, y lo lleva dentro cualquier tarjeta que tengas en la cartera.",
    paginas: [
      {
        rotulo: "La cuenta",
        texto:
          "El truco consiste en reservar la última cifra del número para que no signifique nada por sí misma. Esa cifra se calcula a partir de todas las demás siguiendo una regla fija y sencilla. Se recorre el número de derecha a izquierda y se dobla el valor de una cifra sí y otra no. Si al doblar sale un resultado de dos cifras, se suman esas dos entre ellas para dejarlo en una. Después se suma todo, y el resultado de un número correcto tiene que acabar en cero. Si no acaba en cero, alguien se ha equivocado tecleando y la operación se rechaza antes de salir.",
        destacado: { tipo: "frase", frase: "La suma de un número bueno siempre acaba en cero." },
      },
      {
        rotulo: "Qué detecta",
        texto:
          "Esa regla no es infalible y no pretende serlo, porque está pensada contra un error humano concreto. Detecta todos los fallos de una sola cifra, que son los más habituales al teclear deprisa. Y detecta casi todos los cambios de orden entre dos cifras seguidas, que es el segundo error típico. Lo que no hace, y conviene decirlo, es comprobar que la tarjeta exista o tenga dinero. Un número inventado que cumpla la regla pasa esta comprobación y lo rechaza después el banco. Por eso una web puede avisar de un número mal escrito al instante, sin preguntarle nada a nadie.",
        destacado: { tipo: "cifra", cifra: "1954", unidad: "el año de la patente" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Quedó la misma regla en casi todas las tarjetas del mundo, setenta años después de patentarse. Quedó también en otros sitios donde hay que teclear números largos sin equivocarse. La llevan los códigos de identificación de los teléfonos móviles y varios números de historia clínica. Quedó además la idea general, que la informática usa continuamente y que se llama dígito de control. Se añade información de más a propósito, para que el propio dato avise cuando llega estropeado. Es lo mismo que hace el código de barras de un producto y el número de una cuenta bancaria.",
      },
    ],
  },
];
