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
    titulo: "España va con la hora mal",
    gancho: "Por geografía nos corresponde la hora de Londres. Tenemos la de Berlín desde 1940 y nadie la ha cambiado.",
    categoria: "España",
    color: "var(--ochre)",
    curioso: true,
    encargo: "Un mapa de husos horarios de Europa con la franja de España desplazada.",
    entrada:
      "La hora de un país no la decide la naturaleza: la decide un gobierno, y en España la decidió uno en 1940. El mundo está dividido en franjas verticales, y a España, que está a la misma altura que Inglaterra y Portugal, le tocaría su misma hora. Pero nuestros relojes marcan lo mismo que los de Berlín, mil quinientos kilómetros más al este. No es una curiosidad sin consecuencias: explica por qué aquí se come a las dos y media y los telediarios de la noche empiezan cuando en media Europa la gente ya duerme. La jornada partida y las cenas tardías salen en buena parte de una decisión administrativa que no tuvo nada que ver con el sol.",
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
    titulo: "El himno no tiene letra",
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
    titulo: "La vuelta la dio otro",
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
  {
    id: "guernica-vuelta",
    titulo: "El Guernica tardó cuarenta años",
    gancho: "Su autor dejó dicho que no volvería a España mientras no hubiera libertades. Se cumplió.",
    categoria: "España",
    color: "var(--slate)",
    encargo: "Un lienzo enorme en blanco y negro visto de lado, con una sala vacía delante.",
    entrada:
      "París, primavera de 1937. España lleva un año en guerra civil y el gobierno republicano ha encargado un cuadro grande para su pabellón en una exposición internacional. El pintor elegido, malagueño y ya famoso en medio mundo, lleva meses sin empezar. El 26 de abril, la aviación alemana bombardea un pueblo vasco en día de mercado y él encuentra por fin su asunto.",
    paginas: [
      {
        rotulo: "El encargo",
        texto:
          "Lo pintó en cinco semanas, en un desván alquilado del centro de París, sobre un lienzo de casi ocho metros de ancho que no cabía de pie y hubo que inclinar contra la pared para poder llegar arriba con una escalera. Trabajaba sobre todo de noche, con luz artificial, y en parte por eso el cuadro no tiene un solo color: es gris, blanco y negro, como las fotografías de periódico por las que se enteró de lo ocurrido. No hay aviones ni bombas pintados en ninguna parte. Hay un caballo gritando, una madre con un hijo muerto en brazos y una bombilla encendida.",
        destacado: { tipo: "frase", frase: "No hay ni un avión pintado. Hay un caballo gritando y una bombilla." },
      },
      {
        rotulo: "El destierro",
        texto:
          "En el pabellón pasó bastante desapercibido y algunos críticos lo encontraron confuso, demasiado abstracto para denunciar nada. Después empezó a viajar por Europa y por Estados Unidos para recaudar dinero destinado a los refugiados españoles, y cuando la guerra la ganó el otro bando el pintor dejó dicho que aquel cuadro no volvería a España mientras no hubiera libertades públicas. Se quedó depositado en un museo de Nueva York durante cuatro décadas, enrollado en varias ocasiones para moverlo. Él murió en 1973 sin volver tampoco: había jurado no pisar el país mientras gobernara el mismo hombre.",
        destacado: { tipo: "cifra", cifra: "44", unidad: "años estuvo fuera de España" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Llegó a Madrid en septiembre de 1981, seis años después de la muerte del dictador, dentro de una caja blindada y con escolta armada desde el aeropuerto. Se expuso los primeros años tras un cristal antibalas, porque se temían atentados contra él. Hoy cuelga sin protección en un museo del centro de la ciudad y lo miran más de tres millones de personas al año. El pueblo que le da nombre fue reconstruido y en su ayuntamiento hay una copia hecha en azulejos: el original no ha estado allí nunca.",
      },
    ],
  },

  {
    id: "gripe-espanola",
    titulo: "La gripe española no era española",
    gancho: "Se llamó así porque España era el único país que no censuraba a sus periódicos.",
    categoria: "España",
    color: "var(--forest)",
    curioso: true,
    encargo: "Una sala de hospital de 1918 con camas alineadas y enfermeras con mascarilla.",
    entrada:
      "Europa, 1918. El mundo lleva cuatro años en guerra y aparece una gripe que en dos años mata a más gente que las balas: entre veinticinco y cincuenta millones de personas, y hay estimaciones que doblan esa cifra. Se la conoce en todo el planeta como gripe española. No empezó aquí, no fue más grave aquí y probablemente ni siquiera pasó primero por aquí.",
    paginas: [
      {
        rotulo: "La censura",
        texto:
          "España no participó en la Primera Guerra Mundial y por eso su prensa no estaba censurada por motivos militares. En Francia, en Alemania, en Gran Bretaña y en Estados Unidos, los gobiernos prohibieron informar de la epidemia para no hundir la moral de las tropas ni dar pistas al enemigo: los periódicos hablaban de una gripe leve y estacional mientras los hospitales de campaña se llenaban de muertos. Aquí, en cambio, se contó con detalle desde el primer día, y cuando el propio rey enfermó salió en portada. El resto de Europa leyó las noticias españolas y sacó la conclusión más fácil.",
        destacado: { tipo: "frase", frase: "Aquí se contaba porque aquí no había censura de guerra." },
      },
      {
        rotulo: "De dónde salió",
        texto:
          "El origen se sigue discutiendo cien años después. La primera oleada bien documentada apareció en un cuartel de Kansas, en Estados Unidos, en marzo de 1918, entre soldados que estaban a punto de embarcar hacia Europa; hay investigadores que apuntan a China y otros al norte de Francia. Lo que sí está claro es lo raro que era aquel virus: mataba sobre todo a adultos jóvenes y sanos, de veinte a cuarenta años, justo al revés que cualquier gripe corriente, porque el daño lo hacía la reacción desmedida del propio sistema inmunitario del enfermo.",
        destacado: { tipo: "cifra", cifra: "20-40", unidad: "años tenían la mayoría de los muertos" },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Aquí se la llamó el soldado de Nápoles, por una zarzuela de moda cuya melodía se pegaba igual de rápido que la enfermedad. Murieron unas trescientas mil personas en España y en algunos pueblos hubo que abrir fosas comunes porque no daba tiempo a enterrar de uno en uno. El nombre injusto se quedó pegado y sirvió de lección: desde 2015, la Organización Mundial de la Salud pide no bautizar enfermedades con nombres de lugares ni de pueblos, precisamente para que no se repita. Y todo el mundo sigue llamándola española.",
      },
    ],
  },

  {
    id: "colon-asia",
    titulo: "Murió creyendo que era Asia",
    gancho: "Hizo cuatro viajes y en los cuatro siguió buscando China. Obligó a su tripulación a firmarlo.",
    categoria: "España",
    color: "var(--ochre)",
    encargo: "Una carabela pequeña fondeada frente a una costa de arena blanca y palmeras.",
    entrada:
      "Corte de Castilla, 1492. Un marino genovés convence a los reyes de Castilla y de Aragón de financiar un viaje que él considera corto: cruzar el Atlántico hacia el oeste para llegar a las Indias, es decir, a Asia, y traer especias sin tener que pasar por territorio turco. Zarpa con tres barcos y unos noventa hombres. Se equivocaba en casi todos sus cálculos.",
    paginas: [
      {
        rotulo: "El error de cuentas",
        texto:
          "Nadie discutía en 1492 que la Tierra fuese redonda; eso se sabía desde la Antigüedad y se enseñaba en las universidades. Lo que se discutía era su tamaño, y ahí él estaba muy equivocado: calculaba que de Canarias a Japón había unos cuatro mil kilómetros, cuando en realidad hay casi veinte mil. Los expertos de la corte portuguesa habían rechazado el proyecto justo por eso, porque sus cuentas eran mejores que las suyas. Si no llega a haber un continente entero de por medio, aquella expedición se habría muerto de sed a mitad de camino.",
        destacado: { tipo: "cifra", cifra: "4.000", unidad: "km calculó; hay casi 20.000" },
      },
      {
        rotulo: "La insistencia",
        texto:
          "Tocó tierra el 12 de octubre en una isla del Caribe convencido de estar en las afueras de Asia. Hizo cuatro viajes y en todos siguió buscando el paso hacia la China de los emperadores, comparando lo que veía con lo que había leído en los libros de viajes. En el tercero llegó a la costa de la actual Venezuela y escribió que aquello debía de ser el paraíso terrenal. En el cuarto obligó a su tripulación a firmar ante notario un documento jurando que Cuba era tierra firme continental, con una multa para quien se desdijera.",
        destacado: { tipo: "frase", frase: "Hizo firmar ante notario que Cuba era tierra firme." },
      },
      {
        rotulo: "Lo que quedó",
        texto:
          "Murió en Valladolid en 1506, rico pero apartado, sin haber admitido nunca su error y todavía reclamando por escrito los títulos que le habían prometido. El continente acabó llevando el nombre de otro navegante, un florentino que sí escribió que aquello era un mundo nuevo y cuyos textos leyó un cartógrafo alemán que hacía mapas. A los habitantes de aquellas tierras se les sigue llamando indios cinco siglos después, por un destino que nunca fue el suyo. El nombre de las Indias se quedó pegado a un sitio que estaba al otro lado del planeta.",
      },
    ],
  },
];
