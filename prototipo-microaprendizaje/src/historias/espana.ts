import type { Short } from "../shorts";

/* ==========================================================================
   España.

   El tema de casa, y por eso el que más fácil se estropea por dos lados: el
   orgullo de bar y la queja de bar. Ni lo uno ni lo otro.

   La regla del tema: se cuenta lo que un español da por hecho de su propio
   país SIN SABER POR QUÉ. Comer a las tres. Un himno sin letra. La hora que
   marca el reloj. Cosas que están delante de la cara todos los días y que
   tienen detrás una decisión concreta, tomada por alguien, en una fecha.

   Y se cuenta para que lo entienda también quien no ha pisado España, que es
   la prueba de que está bien contado.
   ========================================================================== */

export const ESPANA: Short[] = [
  {
    id: "hora-espana",
    titulo: "España vive en la hora que no le toca",
    gancho: "Por geografía nos corresponde la hora de Londres. Tenemos la de Berlín desde 1940 y nadie la ha cambiado.",
    categoria: "España",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un mapa de husos horarios de Europa con la franja de España desplazada.",
    entrada:
      "La hora de un país no la decide la naturaleza: la decide un gobierno, y en España la decidió uno en 1940. El mundo está dividido en franjas verticales, y a España, que está a la misma altura que Inglaterra y Portugal, le tocaría su misma hora. Pero nuestros relojes marcan lo mismo que los de Berlín, mil quinientos kilómetros más al este.",
    paginas: [
      {
        rotulo: "El cambio",
        texto:
          "Ocurrió en marzo de <strong>1940</strong>. La Guerra Civil había terminado hacía menos de un año, la Segunda Guerra Mundial acababa de empezar y el gobierno de Franco adelantó los relojes sesenta minutos para ponerlos en hora con la Alemania de Hitler. La orden se publicó como una medida temporal, y en su texto ni siquiera se explicaba el motivo: decía solo que convenía adaptarse a la situación internacional. Portugal, que está en la misma franja y también tuvo dictadura, hizo lo mismo un tiempo y luego volvió atrás. España no volvió nunca.",
        destacado: { tipo: "cifra", cifra: "1940", unidad: "el año en que se adelantó el reloj" },
      },
      {
        rotulo: "Lo que cambia",
        texto:
          "Vivir una hora por delante del sol tiene consecuencias que se notan a diario y que en el resto de Europa sorprenden. En España se come a las dos o las tres y se cena a las nueve o las diez, cuando lo normal en el continente es comer a las doce y cenar a las siete. Medida por el sol, sin embargo, la comida española cae a la una y la cena a las ocho, que ya no suena tan raro. Los telediarios de la noche empiezan a las nueve. Y la jornada se estira hasta las siete o las ocho, con una pausa larga que ya casi nadie usa para dormir.",
        destacado: { tipo: "frase", frase: "Medida por el sol, la cena española es a las ocho. No es tan tarde." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "La idea de volver a la hora que toca reaparece cada pocos años. Una comisión del Congreso la recomendó en 2013 argumentando que ayudaría a dormir más y a acabar antes de trabajar; después se encargaron informes, se anunciaron estudios y no se hizo nada. El cálculo político pesa: cambiar la hora significa que en invierno amanecería sobre las siete y media en vez de las ocho y media, y que las tardes de verano se acortarían una hora entera. Ochenta y cinco años después, seguimos con una decisión que se tomó pensando en otra cosa.",
      },
    ],
  },

  {
    id: "himno-sin-letra",
    titulo: "El himno de España no tiene letra",
    gancho: "Es uno de los cuatro del mundo sin palabras. Se ha intentado ponérselas al menos cinco veces.",
    categoria: "España",
    color: "var(--clay)",
    curioso: true,
    encargo: "Una partitura antigua sobre paño rojo, con la tinta desvaída.",
    entrada:
      "Cuando suena el himno de España en una final, los jugadores mueven la boca o no la mueven, pero no cantan: no hay nada que cantar. Es uno de los cuatro del mundo sin letra oficial. Y no es que se perdiera: desde 1928 se ha intentado escribirla al menos cinco veces, y las cinco han acabado retiradas.",
    paginas: [
      {
        rotulo: "De dónde sale",
        texto:
          "La música es vieja y su origen no está claro del todo. Aparece impresa por primera vez en 1761, en un libro de toques militares, con el nombre de «Marcha granadera»: una marcha corta que servía para que la tropa desfilara, no para emocionar a nadie. Carlos III la nombró marcha de honor en 1770 y desde entonces se fue usando en los actos con el rey delante hasta convertirse en himno de hecho, sin que ninguna ley lo dijera. Es de las pocas melodías nacionales que no compuso nadie a propósito.",
        destacado: { tipo: "cifra", cifra: "1761", unidad: "la primera vez que aparece impresa" },
      },
      {
        rotulo: "Los intentos",
        texto:
          "Letras ha habido, y varias. En 1928 se le puso una que hablaba de gloria y de patria; se cantó durante la dictadura de aquellos años y quedó marcada por ella. Durante el franquismo circuló otra, del mismo estilo, que hoy nadie quiere ni citar. En 2007 el Comité Olímpico organizó un concurso, recibió miles de propuestas y eligió una que empezaba con «¡Viva España!»; duró cinco días. Se filtró antes de tiempo, la mitad del país la encontró ridícula y la otra mitad la encontró sospechosa, y el propio comité la retiró.",
        destacado: { tipo: "cifra", cifra: "5", unidad: "días duró la última letra propuesta" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "El problema no es escribir versos: es que cualquier letra tiene que decir algo sobre qué es España, y ahí no hay acuerdo. Una que hable de una sola nación molesta en Cataluña y en el País Vasco; una que hable de varias molesta en otro sitio; una que no diga nada no vale para cantarla. Así que se ha quedado como está, y hay quien defiende que es la solución más elegante posible: un himno que suena para todos precisamente porque no afirma nada que alguien pueda no firmar.",
      },
    ],
  },

  {
    id: "elcano",
    titulo: "Elcano dio la vuelta al mundo, no Magallanes",
    gancho: "Magallanes murió a mitad de camino. Volvieron dieciocho hombres de doscientos cuarenta, en un barco que hacía agua.",
    categoria: "España",
    color: "var(--slate)",
    encargo: "Un galeón pequeño y castigado entrando en un puerto al amanecer.",
    entrada:
      "Sevilla, agosto de 1519. Cinco barcos zarpan con doscientos cuarenta hombres a bordo y una idea que suena razonable: llegar a las islas de las especias por el oeste, dando la vuelta al continente americano, y ahorrarse la ruta portuguesa. Manda un marino portugués al servicio del rey de España, Magallanes. Nadie ha hecho ese viaje antes, así que nadie sabe cuánto se tarda ni si se puede.",
    paginas: [
      {
        rotulo: "El paso",
        texto:
          "Tardaron catorce meses en encontrar el paso al otro océano, en el extremo sur de América: un laberinto de canales helados de más de quinientos kilómetros que hoy lleva el nombre de Magallanes. Por el camino se les amotinó media flota, perdieron un barco encallado y otro desertó y volvió a España. Al salir al Pacífico creyeron que estaban cerca. Estuvieron tres meses y veinte días sin pisar tierra ni ver una isla, comiendo serrín, cuero cocido y las ratas que cazaban, que se vendían entre ellos a medio ducado. Murieron de hambre y de escorbuto una treintena.",
        destacado: { tipo: "frase", frase: "Las ratas se vendían entre ellos a medio ducado la pieza." },
      },
      {
        rotulo: "La muerte del jefe",
        texto:
          "Llegaron a Filipinas en marzo de 1521 y allí Magallanes cometió el error que le costó la vida. Se metió a mediar en una pelea entre jefes locales, desembarcó con cincuenta hombres para dar un escarmiento y se encontró enfrente a más de mil guerreros. Murió en la orilla, con el agua por las rodillas y una lanza en la cara, mientras los suyos remaban de vuelta a los barcos sin poder hacer nada. Ya no quedaba gente para tripular tres naves, así que quemaron una. Al frente de lo que restaba acabó quedando un marino vasco llamado Elcano.",
        destacado: { tipo: "frase", frase: "No quedaba gente para tripular tres barcos. Quemaron uno." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Elcano cargó especias, decidió seguir hacia el oeste en vez de volver por donde habían venido y se pasó un año esquivando puertos portugueses, porque atracar significaba la cárcel. El 6 de septiembre de 1522 entró en un puerto de Cádiz un solo barco, con las bombas de achique funcionando día y noche y <strong>18 hombres</strong> a bordo, tan débiles que hubo que ayudarles a bajar. Habían tardado tres años y once días. La carga de clavo que traían dio para pagar la expedición entera, los cinco barcos incluidos, y aún sobró dinero.",
      },
    ],
  },
];
