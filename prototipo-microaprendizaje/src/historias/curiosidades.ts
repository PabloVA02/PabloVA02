import type { Short } from "../shorts";

/* ==========================================================================
   CURIOSIDADES — el texto lo escribe Pablo, aquí se maqueta

   Los dos primeros llegaron el 28 de agosto de 2026 en un zip, con su LEEME:
   «aquí tienes el texto de dos temas; elimina las imágenes de esos temas
   menos las de la portada y pones el texto solo».

   QUÉ SE HA HECHO CON SU TEXTO: NADA. Ni una palabra cambiada, ni una
   quitada, ni una añadida. Lo único que se ha decidido aquí es POR DÓNDE SE
   PARTE en pantallas, que es una decisión de maqueta y no de redacción, y se
   ha tomado siguiendo su propia instrucción: «ni una tarjeta debe requerir
   scroll interno: si no cabe, se parte, nunca se recorta el texto». Los
   cortes caen siempre entre párrafos suyos, nunca dentro de uno.

   Un guion en Python leyó los dos `.md`, los partió por la lista de cortes
   escrita a mano y comprobó dos cosas antes de escribir esto: que cada
   párrafo aparece EXACTAMENTE UNA VEZ —ninguno perdido, ninguno repetido— y
   que los rayos colocados son tantos como los que traía el texto.

   CÓMO SE LEE SU FORMATO AQUÍ

     # Título        → `titulo`, tal cual, sin frase de apoyo
     ## Sección      → `<h3>`, el subtítulo, y además a `rotulo` de esqueleto
     párrafo         → `<p>`
     • viñeta        → `<li>` dentro de un `<ul>`
     **negrita**     → `<strong>`;  *cursiva* → `<em>`
     > rayo          → `<blockquote class="rayo">`, la caja del rayo
     ¿Sabías que…?   → un párrafo más

   Todo eso va dentro de `texto`, que ya no es un párrafo sino LA TIRADA DE
   BLOQUES de esa pantalla. Es el mismo juego de piezas que el lector de los
   resúmenes —subtítulo, párrafo, lista y caja del rayo—, con la misma hoja de
   estilos traducida a `cqw`. Pablo, el 28 por la tarde: «hay subtítulos que
   deberás marcar y poner un poco más grande, como los que ponemos en los
   libros; copia el tipo de letra que tenemos puesto ahí, hazlo todo como está
   en los libros exactamente igual».

   (Los rótulos estuvieron guardados y sin pintar unas horas, porque el 27 por
   la noche había pedido lo contrario —«elimina los títulos esos de cada
   pantalla»—. Aquello era sobre unos rótulos míos de dos palabras que solo
   etiquetaban; los suyos son afirmaciones completas y son parte del texto.)

   EL REPARTO EN PANTALLAS LO HACE `scripts/reparte.mjs`, y no a ojo. Pablo,
   en el mismo mensaje: «el texto debe bajar hasta abajo; en muchas páginas
   hay un montón de hueco, debes ajustarlo hasta abajo del todo». A ojo no se
   puede, porque lo que cabe no depende de las palabras sino de cómo caen los
   renglones. El guion abre la app de verdad, mete cada bloque en una pantalla
   de verdad y pregunta si se sale; después, entre todos los repartos que usan
   el mínimo de pantallas, elige el que deja el hueco más parejo. Los cortes
   van SIEMPRE entre bloques suyos, y una pantalla puede acabar una sección y
   empezar la siguiente —con su subtítulo en medio—, que es lo que hace una
   página de un libro de papel.

   Para rehacerlo cuando cambie algo de la maqueta:

       npx vite build && python3 -m http.server 4173 --directory dist &
       node --experimental-strip-types scripts/reparte.mjs \
            referencia/textos-de-pablo/cuanto-le-queda-al-sol.md

   Y LA FOTOGRAFÍA, SOLO EN LA PORTADA: es `soloPortada: true`. Las páginas de
   dentro no llevan banda de imagen, y de ahí sale el sitio para textos de
   ciento cuarenta palabras.

   LAS FUENTES que da su LEEME, para que no se pierdan con la conversación:
   · Sol — Quanta Magazine (luminosidad) · Schröder y Smith 2008, MNRAS 386,
     155 (gigante roja y engullimiento) · Esseldeurs et al. vía Space.com ·
     arXiv 2409.10714 (extensión de la biosfera).
   · Bostezos — Gallup y Gallup, Frontiers in Neuroscience 2012 (hipótesis
     termorreguladora y experimentos de Provine) · Communications Biology
     2021, s42003-021-02019-y (1.291 bostezos de 101 especies) · Current
     Biology, mayo de 2026, vía Smithsonian (contagio prenatal).

   LAS OTRAS DOS —«Por qué vuelan los aviones» y «Por qué llueve»— siguen con
   la portada puesta y `paginas: []`, esperando su texto.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "cuanto-le-queda-al-sol",
    /* El título es el suyo, letra por letra. El que había —«¿Cuánto le queda
       al sol?»— lo escribí yo en agosto y era una pregunta; el suyo afirma
       menos y promete igual, y sobre todo es el que él eligió. */
    titulo: "Cuánto le queda al Sol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    soloPortada: true,
    textoDePablo: true,
    encargo: "El disco solar entero en ultravioleta, con la corona erizada de arcos.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador y una franja oscura cerca del polo sur.",
      },
    ],
    /* Las tres de dentro —la superficie granulada del Inouye, la Tierra del
       Apolo 17 y la nebulosa de la Hélice— se han ido de aquí porque Pablo
       pidió que se fueran, no porque fueran malas. Están enteras, con su ficha
       y su licencia comprobadas, en el commit 04fd2c2:
           git show 04fd2c2:prototipo-microaprendizaje/src/historias/curiosidades.ts */
    paginas: [
      {
        rotulo: "El Sol tiene mucho más tiempo por delante que nosotros",
        texto:
          "<h3>El Sol tiene mucho más tiempo por delante que nosotros</h3><p>¿Alguna vez has " +
          "mirado al Sol y te has preguntado cuánto tiempo le queda? La mayoría de nosotros damos " +
          "por sentado que estará ahí siempre, o al menos durante tanto tiempo que no merece la " +
          "pena pensarlo. Y en parte es cierto: a nuestra estrella le quedan unos cinco mil " +
          "millones de años por delante.</p><p>Pero hay un detalle que lo cambia todo. La Tierra " +
          "habitable, este planeta con agua líquida y con plantas y animales, tiene un plazo " +
          "mucho más corto: alrededor de mil millones de años. Cinco veces menos. Son dos relojes " +
          "distintos, y el nuestro corre mucho más rápido.</p><p>Para entender por qué, hay que " +
          "aceptar algo que cuesta: el Sol no es una bombilla de intensidad fija. Se está " +
          "volviendo más <strong>brillante</strong>, y lleva haciéndolo desde el día mismo en que " +
          "se encendió.</p>",
      },
      {
        rotulo: "El Sol tiene mucho más tiempo por delante que nosotros",
        texto:
          "<p>El motivo está en su centro. Allí dentro el hidrógeno se fusiona en helio, y el " +
          "helio resultante ocupa menos espacio que el hidrógeno del que procede, así que el " +
          "núcleo se va comprimiendo poco a poco bajo su propio peso. Al comprimirse se calienta, " +
          "al calentarse fusiona más deprisa, y al fusionar más deprisa alumbra más. Es un bucle " +
          "que se alimenta a sí mismo y para el que no existe ningún freno " +
          "posible.</p><blockquote class=\"rayo\"><p>El Sol no necesita morir para acabar con la " +
          "vida en la Tierra. Le basta con seguir haciendo exactamente lo que lleva haciendo " +
          "desde el principio.</p></blockquote><p>¿Sabías que…? Cuando se formó la Tierra, el Sol " +
          "brillaba un treinta por ciento menos que hoy. Si pusiéramos nuestro planeta actual, " +
          "con esta misma atmósfera, bajo aquella estrella más apagada, la temperatura media " +
          "sería de siete grados bajo cero y estaría congelado de polo a polo. La vida no empezó " +
          "bajo un sol como el nuestro, sino bajo uno mucho más tibio, y lleva cuatro mil " +
          "quinientos millones de años con la calefacción subiendo despacio.</p>",
      },
      {
        rotulo: "El final no llegará por fuego, sino por asfixia",
        texto:
          "<h3>El final no llegará por fuego, sino por asfixia</h3><p>Cuando pensamos en el final " +
          "de la vida en la Tierra, casi todos imaginamos lo mismo: un planeta reseco, los " +
          "océanos hirviendo y todo achicharrado bajo un sol implacable. Es una imagen poderosa, " +
          "pero llega mucho más tarde de lo que creemos. Lo primero que ocurre es bastante más " +
          "silencioso, y las primeras en caer serán las plantas.</p><p>El mecanismo es indirecto, " +
          "y por eso resulta tan difícil de anticipar. A medida que el Sol calienta, la roca de " +
          "los continentes se erosiona más deprisa, y esa erosión consume dióxido de carbono del " +
          "aire. Se trata de una reacción química que lleva miles de millones de años funcionando " +
          "como el termostato del planeta: cuanto más calor hace, más rápido trabaja, y más CO₂ " +
          "retira de la atmósfera. Es, en buena medida, lo que nos ha mantenido templados todo " +
          "este tiempo.</p>",
      },
      {
        rotulo: "El final no llegará por fuego, sino por asfixia",
        texto:
          "<p>El problema es que las plantas necesitan ese mismo CO₂ para hacer la " +
          "<strong>fotosíntesis</strong>. Es, literalmente, su comida. Y llega un punto en que el " +
          "termostato ha limpiado el aire de carbono hasta un nivel en el que ya no pueden seguir " +
          "alimentándose. Con ellas se cae todo lo que depende de ellas, que en tierra firme es " +
          "prácticamente todo.</p><p>El cálculo clásico sitúa ese momento dentro de unos mil " +
          "millones de años. Sin embargo, trabajos recientes lo alargan hasta cerca de mil " +
          "ochocientos millones y, de paso, cambian la causa de la muerte: las plantas no " +
          "llegarían a quedarse sin comida, sino que se detendrían de puro calor, por encima de " +
          "los sesenta y cinco grados. Los océanos hierven bastante más tarde, aunque para " +
          "entonces ya no quedará nadie para verlo.</p><blockquote class=\"rayo\"><p>El mismo " +
          "termostato que ha mantenido templada a la Tierra durante miles de millones de años es " +
          "lo que acabará dejando a las plantas sin nada que respirar.</p></blockquote>",
      },
      {
        rotulo: "Antes de apagarse, el Sol se volverá enorme",
        texto:
          "<h3>Antes de apagarse, el Sol se volverá enorme</h3><p>Todo lo anterior ocurrirá con " +
          "un Sol todavía normal, en plena forma. Su propio final llega mucho después, y no se " +
          "parece en nada a apagarse.</p><p>Cuando por fin agote el hidrógeno de su núcleo, el " +
          "Sol hará justo lo contrario: se hinchará. Se convertirá en una <strong>gigante " +
          "roja</strong> de unas doscientas cincuenta y seis veces su tamaño actual, lo que " +
          "significa que su superficie llegará más lejos de donde ahora mismo orbita la " +
          "Tierra.</p><p>Mercurio será el primero en desaparecer. Venus le seguirá unos dos " +
          "millones y medio de años después. Y un millón de años más tarde le tocará el turno a " +
          "nuestra órbita, dentro de siete mil quinientos noventa millones de años.</p><p>Lo que " +
          "no está tan claro es qué se va a encontrar ahí cuando llegue.</p>",
      },
      {
        rotulo: "Antes de apagarse, el Sol se volverá enorme",
        texto:
          "<blockquote class=\"rayo\"><p>El Sol no se irá apagando poco a poco. Antes de eso " +
          "crecerá hasta ser más grande que la órbita en la que hoy gira la " +
          "Tierra.</p></blockquote><h3>La Tierra estará a punto de escapar</h3><p>Aquí ocurre " +
          "algo que parece escrito por un guionista, y es la parte más fascinante de toda la " +
          "historia.</p><p>Para poder hincharse tanto, el Sol tiene que soltar lastre. Perderá " +
          "alrededor de un tercio de su masa, expulsada al espacio en forma de un viento lento y " +
          "continuo durante millones de años. Y menos masa significa menos gravedad: su agarre " +
          "sobre los planetas se irá aflojando poco a poco.</p>",
      },
      {
        rotulo: "La Tierra estará a punto de escapar",
        texto:
          "<p>Así que las órbitas se abren. La Tierra empezará a alejarse, empujada hacia fuera " +
          "por la propia decadencia de la estrella que viene a devorarla. Y aquí está lo " +
          "interesante: ese efecto, por sí solo, bastaría para salvarla. La órbita crecería lo " +
          "justo para quedar por fuera del Sol hinchado.</p><p>Sin embargo, hay una segunda " +
          "fuerza tirando en sentido contrario. La gigante roja levantará mareas sobre la Tierra, " +
          "igual que la Luna las levanta hoy sobre nuestros océanos, y esas mareas frenarán al " +
          "planeta y lo irán arrastrando hacia dentro. Además, para entonces la atmósfera " +
          "exterior del Sol llegará tan lejos que la Tierra tendrá que atravesarla, rozando y " +
          "perdiendo velocidad.</p><p>Dos fuerzas opuestas, y el desenlace depende de cuál de las " +
          "dos gane por muy poco.</p><p>El cálculo más citado, publicado en 2008, concluye que " +
          "ganan las mareas: la Tierra sería engullida medio millón de años antes de que el Sol " +
          "alcance su tamaño máximo. Medio millón de años, después de haber aguantado siete mil " +
          "quinientos millones. Por muy poco.</p>",
      },
      {
        rotulo: "La Tierra estará a punto de escapar",
        texto:
          "<p>Pero modelos más recientes calculan que ese tirón hacia dentro es más débil de lo " +
          "que se creía, y devuelven a la Tierra a la lista de supervivientes. La cuestión no " +
          "está resuelta. La incertidumbre simplemente se ha mudado de sitio: ahora depende de " +
          "cuánta masa pierda exactamente el Sol, que es justo lo que todavía no sabemos medir " +
          "bien en estrellas como la nuestra.</p><blockquote class=\"rayo\"><p>Sabemos con " +
          "precisión la fecha de la cita entre el Sol y la Tierra. Todavía no sabemos cómo " +
          "termina.</p></blockquote><h3>Lo que quede seguirá enfriándose más tiempo del que lleva " +
          "existiendo el universo</h3><p>De lo que no hay ninguna duda es de lo que quedará al " +
          "final.</p>",
      },
      {
        rotulo: "Lo que quede seguirá enfriándose más tiempo del que lleva existiendo el universo",
        texto:
          "<p>Cuando el Sol termine de deshacerse, dejará atrás su propio corazón: una bola de " +
          "materia comprimida, más o menos del tamaño de la Tierra, con la masa de media estrella " +
          "metida dentro. Es lo que los astrónomos llaman una <strong>enana " +
          "blanca</strong>.</p><p>Ahí ya no se fusiona nada. No hay motor, no hay combustible, no " +
          "queda absolutamente nada por quemar. Lo único que hará durante el resto del tiempo es " +
          "enfriarse, muy despacio.</p><p>Y se enfría tan despacio que todavía no ha terminado " +
          "ninguna. En todo el universo observable no existe una sola enana blanca apagada del " +
          "todo, sencillamente porque el universo no lleva existiendo el tiempo suficiente para " +
          "que a ninguna le haya dado tiempo.</p><p>El Sol acabará siendo una brasa. Una brasa " +
          "que seguirá ahí, cada vez más tenue, mucho después de que se hayan apagado todas las " +
          "cosas que hoy sabemos nombrar.</p>",
      },
    ],
  },
  {
    id: "por-que-bostezamos",
    titulo: "Por qué bostezamos",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    soloPortada: true,
    textoDePablo: true,
    encargo: "Un bostezo entero, de perfil, ocupando la pantalla.",
    fotos: [
      {
        /* Un gato y no una persona a propósito: el bostezo lo hacen todos los
           vertebrados, y eso es media respuesta a la pregunta del título. Su
           texto lo dice en la primera frase —«lo hacen las aves, los reptiles
           y todos los mamíferos»—, así que la portada ya no es solo bonita:
           es lo primero que cuenta. */
        archivo: "Tabby cat-yawning-01.jpg",
        autor: "Un gato atigrado bostezando, abril de 2008. Fotografía de Hisashi.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg",
        foco: "50% 40%",
        alt: "Un gato atigrado de perfil con la boca abierta de par en par en mitad de un bostezo, los colmillos y la lengua a la vista y el fondo desenfocado.",
      },
    ],
    paginas: [
      {
        rotulo: "Bostezamos todos los días y nadie sabe por qué",
        texto:
          "<h3>Bostezamos todos los días y nadie sabe por qué</h3><p>¿Cuántas veces has bostezado " +
          "hoy? Seguramente más de las que recuerdas. Es uno de los comportamientos más " +
          "extendidos que existen: lo hacen las aves, los reptiles y todos los mamíferos, y " +
          "nosotros empezamos a hacerlo mucho antes de nacer.</p><p>Y sin embargo, no sabemos " +
          "para qué sirve.</p><p>No es una forma de hablar ni una exageración. Después de décadas " +
          "de estudios, la ciencia todavía no tiene una respuesta con consenso. Hay hipótesis, " +
          "algunas bastante sólidas, pero ninguna se ha impuesto del todo. Es de esas cosas que " +
          "hacemos a diario y que siguen siendo, en el sentido literal de la palabra, un " +
          "misterio.</p><p>Lo que sí sabemos con certeza es que buena parte de lo que nos han " +
          "contado sobre el bostezo es falso.</p>",
      },
      {
        rotulo: "Bostezamos todos los días y nadie sabe por qué",
        texto:
          "<blockquote class=\"rayo\"><p>Bostezamos desde antes de nacer y lo compartimos con " +
          "casi todos los animales de sangre caliente, pero seguimos sin saber para qué " +
          "sirve.</p></blockquote><h3>La explicación del oxígeno lleva décadas " +
          "desmentida</h3><p>Si le preguntas a cualquiera por qué bostezamos, te dirá lo mismo: " +
          "porque al cuerpo le falta oxígeno y el bostezo sirve para coger una bocanada grande de " +
          "aire. Es la respuesta que se enseña en los colegios y la que repite casi todo el " +
          "mundo. También es la que se desmontó hace décadas.</p><p>El psicólogo Robert Provine " +
          "hizo el experimento evidente. Si la teoría fuese cierta, respirar aire cargado de " +
          "oxígeno debería reducir los bostezos, y respirar aire con más dióxido de carbono " +
          "debería dispararlos. Probó las dos cosas.</p>",
      },
      {
        rotulo: "La explicación del oxígeno lleva décadas desmentida",
        texto:
          "<p>No pasó nada. Ni el oxígeno extra los redujo, ni el CO₂ los aumentó. Después lo " +
          "intentó con ejercicio físico, que duplica el ritmo respiratorio, y el resultado fue el " +
          "mismo: la gente respiraba el doble y bostezaba exactamente igual que antes.</p><p>La " +
          "conclusión es incómoda pero clara. El bostezo y la respiración funcionan por " +
          "mecanismos distintos, y uno no está ahí para arreglar al otro.</p><p>Hay además un " +
          "detalle que remata el asunto. Los fetos bostezan dentro del útero, cuando sus pulmones " +
          "todavía no funcionan y el oxígeno les llega por el cordón umbilical. Difícilmente " +
          "pueden estar cogiendo aire.</p><blockquote class=\"rayo\"><p>Respirar oxígeno puro no " +
          "reduce los bostezos, y respirar dióxido de carbono no los aumenta. Bostezar no tiene " +
          "nada que ver con el aire que te falta.</p></blockquote>",
      },
      {
        rotulo: "La hipótesis más sólida es que el bostezo funciona como un radiador",
        texto:
          "<h3>La hipótesis más sólida es que el bostezo funciona como un " +
          "radiador</h3><p>Entonces, ¿qué pasa realmente cuando bostezas? La explicación que más " +
          "fuerza ha ganado en los últimos años es también la más inesperada: <strong>el bostezo " +
          "sirve para enfriarte el cerebro.</strong></p><p>El cerebro es un órgano caro. Consume " +
          "una enorme cantidad de energía, genera mucho calor como consecuencia, y solo funciona " +
          "bien dentro de un margen de temperatura bastante estrecho. La hipótesis " +
          "<strong>termorreguladora</strong> propone que el bostezo es, literalmente, un sistema " +
          "de refrigeración: al abrir la mandíbula del todo se estiran los músculos de la cara y " +
          "aumenta el flujo de sangre hacia la cabeza, entra de golpe una bocanada de aire más " +
          "fresco que el cuerpo, y de paso se ventilan los senos nasales.</p><p>Suena inventado, " +
          "pero las pruebas se van acumulando:</p>",
      },
      {
        rotulo: "La hipótesis más sólida es que el bostezo funciona como un radiador",
        texto:
          "<ul><li>Enfriar la frente reduce los bostezos contagiosos. Respirar por la nariz, que " +
          "también baja la temperatura del cerebro, los reduce igual.</li><li>En ratas, la " +
          "temperatura cerebral sube justo antes del bostezo y baja inmediatamente " +
          "después.</li><li>En personas con bostezos excesivos, la temperatura oral cae unos 0,4 " +
          "grados tras el episodio.</li><li>La frecuencia de bostezos aumenta con la temperatura " +
          "ambiente, pero se desploma cuando el aire de fuera se acerca a la temperatura " +
          "corporal. Tiene sentido: si el aire ya no está más frío que tú, ventilar no sirve de " +
          "nada.</li></ul><p>¿Sabías que…? El estudio más grande que se ha hecho jamás sobre el " +
          "tema analizó 1.291 bostezos de 101 especies distintas, entre mamíferos y aves. " +
          "Encontró que cuanto mayor es el cerebro de un animal, y cuantas más neuronas tiene, " +
          "más dura su bostezo. Un mamífero de cerebro medio bosteza unos 3,4 segundos; un ave, " +
          "apenas 1,5. Encaja exactamente con lo que predice la teoría: un cerebro más grande " +
          "necesita más tiempo de ventilación.</p>",
      },
      {
        rotulo: "La hipótesis más sólida es que el bostezo funciona como un radiador",
        texto:
          "<blockquote class=\"rayo\"><p>Cuanto más grande es el cerebro de un animal, más largo " +
          "es su bostezo. Es una de las pruebas más elegantes de que bostezar sirve para " +
          "enfriarlo.</p></blockquote><h3>El contagio es un misterio aparte</h3><p>Hay una " +
          "segunda cosa rara en los bostezos, y es que se pegan. Probablemente hayas bostezado ya " +
          "una o dos veces leyendo esto. Basta con ver a alguien bostezar, o con oírlo, o incluso " +
          "con leer la palabra, para que se dispare la respuesta.</p><p>Y conviene entender que " +
          "el contagio no es un detalle del primer misterio, sino un misterio distinto. Aunque " +
          "bostezar sirva para enfriar tu cerebro, eso no explica en absoluto por qué el bostezo " +
          "de otra persona tendría que enfriar el tuyo.</p><p>La pista que más se maneja apunta a " +
          "lo social. El contagio es bastante más fuerte entre personas cercanas —familia, " +
          "pareja, amigos— que entre desconocidos, lo que sugiere que está enganchado a los " +
          "mecanismos de empatía y de sincronización dentro de un grupo.</p>",
      },
      {
        rotulo: "El contagio es un misterio aparte",
        texto:
          "<p>Y en mayo de 2026 llegó el dato más desconcertante hasta la fecha. Un equipo " +
          "publicó en <em>Current Biology</em> un experimento con 38 embarazadas en el tercer " +
          "trimestre: les pusieron vídeos de gente bostezando mientras observaban al feto por " +
          "ecografía. El 64 % de las madres bostezó viendo los vídeos. Y alrededor del 53 % de " +
          "los fetos bostezó después, normalmente al minuto y medio de haberlo hecho su " +
          "madre.</p><p>Es un estudio pequeño, y los propios autores admiten que no saben cómo " +
          "ocurre —¿por el movimiento?, ¿por alguna señal hormonal?— ni si esos bostezos " +
          "prenatales sirven para algo en absoluto.</p><p>Así que la situación, resumida, es " +
          "esta: hacemos algo constantemente, empezamos a hacerlo antes de nacer, se nos contagia " +
          "de los demás, y seguimos sin saber por qué ninguna de las tres cosas.</p><blockquote " +
          "class=\"rayo\"><p>El contagio del bostezo empieza antes de nacer. Los fetos bostezan " +
          "poco después de que lo haga su madre, y nadie sabe todavía cómo.</p></blockquote>",
      },
    ],
  },
  /* Y las dos que solo tienen portada, esperando el texto de Pablo. Se
     eligieron sus fotografías el 28 de agosto por la mañana, juzgando cada
     candidata YA RECORTADA al marco de la portada con `scripts/recorte.mjs`:
     375x812 es 0,46 de proporción, y una apaisada normal pierde ahí el setenta
     por ciento de su ancho. */
  {
    id: "por-que-vuelan-los-aviones",
    titulo: "Por qué vuelan los aviones",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "El ala desde la ventanilla, entera y limpia, sobre el azul de crucero.",
    fotos: [
      {
        /* De las cinco candidatas de avión era la única con las dos cosas: el
           ala entrando en diagonal por abajo, que deja todo el cielo libre
           para el título, y 4160x3120, o sea 1441 píxeles de ancho después de
           recortar. El 747 visto desde tierra era más espectacular y se quedó
           fuera por eso: 2200 de ancho no dan más que 693 recortados. */
        archivo: "Airplane wing sky and clouds.jpg",
        autor: "El ala de un avión de línea en vuelo de crucero, agosto de 2016. Fotografía de Tobias1984.",
        licencia: "CC BY-SA 3.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Airplane_wing_sky_and_clouds.jpg",
        foco: "50% 50%",
        alt: "El ala gris de un avión cruzando en diagonal la parte baja de la imagen, con el azul intenso del cielo arriba y un manto de nubes blancas al fondo.",
      },
    ],
    paginas: [],
  },
  {
    id: "por-que-llueve",
    titulo: "Por qué llueve",
    categoria: "Ciencia",
    color: "var(--teal)",
    encargo: "Las gotas en el cristal, con la ciudad desenfocada detrás.",
    fotos: [
      {
        /* Las nubes de tormenta se probaron primero y todas fallaban igual:
           recortadas a una vertical estrecha se quedan en una franja de cielo
           gris sin nada dentro. Esta tiene el asunto repartido por toda la
           altura —gotas arriba, gotas abajo— así que el recorte no le quita
           nada, y además es literalmente el tema: agua que se ha condensado
           sobre una superficie fría. Mumbai, la llegada del monzón. */
        archivo: "Rain Droplets.jpg",
        autor: "Gotas de lluvia en una ventana durante la llegada del monzón a Bombay, junio de 2016. Fotografía de Tony5875.",
        licencia: "CC BY-SA 4.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Rain_Droplets.jpg",
        foco: "50% 50%",
        alt: "Un cristal cubierto de gotas de lluvia de todos los tamaños, con los edificios de una ciudad desenfocados al otro lado.",
      },
    ],
    paginas: [],
  },
];
