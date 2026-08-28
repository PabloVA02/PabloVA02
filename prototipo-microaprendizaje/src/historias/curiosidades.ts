import type { Short } from "../shorts";
/* La portada de la gravedad la mandó Pablo el 28 de agosto y no viene de
   Commons, así que va como fichero del proyecto: `import` y que Vite la
   resuelva. En los dos simuladores —que llevan `assetsInlineLimit` al máximo—
   entra empotrada en el HTML, que es la única forma de que se vea ahí: la
   política de seguridad del artefacto bloquea cualquier imagen de fuera.

   El fichero es el que sale de `scripts/portadas.mjs`: 1440 × 2560, AVIF 65,
   recortado a 9:16 desde un original cuadrado de 5000. Al lado queda su
   respaldo en WebP, que es el que irá a R2 para los navegadores sin AVIF. */
import portadaGravedad from "../../portadas/como-funciona-la-gravedad.avif";
/* Y las siete de la tanda del 28 de agosto por la noche, todas de Pexels y
   todas procesadas por `scripts/portadas.mjs`: 1440 × 2560, AVIF 65. Van
   empotradas por lo mismo que la de la gravedad —el artefacto bloquea las
   imágenes de fuera— y su procedencia está en `assets/portadas.csv`. */
import portadaTiritamos from "../../portadas/por-que-tiritamos.avif";
import portadaEstaciones from "../../portadas/por-que-tenemos-estaciones.avif";
import portadaMareas from "../../portadas/por-que-te-mareas-en-el-coche.avif";
import portadaLeche from "../../portadas/por-que-se-corta-la-leche.avif";
import portadaPicante from "../../portadas/por-que-pica-el-picante.avif";
import portadaCicatrices from "../../portadas/como-cicatrizan-las-heridas.avif";
import portadaLluvia from "../../portadas/por-que-llueve.avif";

/* ==========================================================================
   CURIOSIDADES — el texto lo escribe Pablo, aquí se maqueta

   Quince temas, todos del 28 de agosto de 2026. Los originales, tal como los
   mandó, están en `referencia/textos-de-pablo/`, y este fichero se arma con
   `scripts/temas.mjs` leyéndolos: un `diff` contra ellos dice en un segundo si
   aquí falta o sobra algo.

   «CUÁNTO LE QUEDA AL SOL» YA NO EXISTE: son cuatro. Era el tema más largo de
   todos —diez pantallas— y Pablo lo partió esa misma noche en los cuatro que
   llevan `sol-` delante. Es su propia regla: un short cuenta UNA sorpresa, y
   aquel contaba cuatro. Repartido así, cada una compite en el muro con su
   gancho y se termina en tres deslizamientos en vez de en nueve. La fotografía
   de la corona solar se queda con el primero, que es el que abre el asunto;
   los otros tres van con su `encargo` hasta que tengan la suya.

   NO HAY PÁGINAS AQUÍ, y es lo importante. La historia viene en una tirada de
   bloques seguidos y quien la reparte en pantallas es la app, midiendo el
   móvil de quien lee. Es la regla 3 de las siete que puso Pablo:

     «Divide el contenido en páginas midiendo en tiempo de ejecución:
      renderiza los párrafos en un contenedor oculto con el mismo ancho y
      tipografía, acumula alturas, y corta cuando el siguiente no quepa.»

   Están las siete en `.claude/skills/paginado-shorts/SKILL.md` y hay que
   leerlas antes de tocar nada de esto. Hubo aquí páginas fijas, calculadas por
   un guion que abría un navegador; funcionaba y estaba mal, porque unas
   páginas medidas en un móvil de 375 no valen en uno de 430.

   Y DESDE EL 28 DE AGOSTO POR LA NOCHE, los `.md` llegan con cabecera: entre
   dos `---` van `titulo`, `categoria`, `serie`, `orden`, `portada`,
   `credito_portada` y `frase_portada`. El formato lo escribió Pablo y está en
   `referencia/textos-de-pablo/FORMATO.md`. El identificador del tema sale de
   `portada` sin extensión —si él dice cómo se llama la imagen, así se llama el
   tema—, y por eso los cuatro del Sol se llaman como se llaman.

   CÓMO SE LEE SU FORMATO

     # Título          `titulo`
     ## Sección        bloque `rotulo`
     párrafo           bloque `parrafo`
     • viñeta          se juntan en un bloque `lista`
     > ⚡ …            bloque `rayo`
     > ❞ …            bloque `cita`: las palabras de otro, no las nuestras. La
                       línea `> — Autor` de debajo es su firma y va en `autor`.
     > 💡 …            bloque `dato`: el «¿Sabías que…?» al margen. No es un
                       rayo; va en el hilo del texto y solo se le colorea la
                       apertura.
     > 🖼️ …            NO es texto: es el encargo de una imagen para dentro.
                       Va en `encargos` y no se pinta.
     **negrita**       <strong>;  *cursiva* → <em>

   LAS FOTOGRAFÍAS. Cuatro tienen la suya, elegida y comprobada contra Commons.
   Las ocho restantes van con su `encargo` y enseñan el cartel de color mientras
   tanto —para eso existe—, y hay que buscárselas. Las portadas nuevas se
   procesan y se suben con `scripts/portadas.mjs`; las reglas están en el
   `CLAUDE.md`, apartado «Portadas: calidad y almacenamiento». Cada tema trae además, en
   `encargos`, la imagen de DENTRO que pidió Pablo en su texto; esas no se
   pintan todavía porque hoy la fotografía es solo de la portada.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "al-sol-le-quedan-cinco-mil-millones",
    titulo: "Cuánto de vida le queda al Sol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «cuanto-le-queda-al-sol», número 1 de cuatro. Se entiende suelto. */
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
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Son dos relojes distintos y el nuestro corre más rápido",
      },
      {
        b: "parrafo",
        texto:
          "¿Alguna vez has mirado al Sol y te has preguntado cuánto tiempo le queda? La mayoría " +
          "de nosotros damos por sentado que estará ahí siempre, o al menos tanto tiempo que no " +
          "merece la pena pensarlo.",
      },
      {
        b: "parrafo",
        texto:
          "Y en parte es cierto: a nuestra estrella le quedan unos cinco mil millones de años por " +
          "delante.",
      },
      {
        b: "parrafo",
        texto:
          "Pero hay un detalle que lo cambia todo. La Tierra habitable, este planeta con agua " +
          "líquida y con plantas y animales, tiene un plazo mucho más corto: <strong>alrededor de " +
          "mil millones de años.</strong> Cinco veces menos.",
      },
      {
        b: "parrafo",
        texto:
          "No es el mismo reloj. Nuestro plazo se agota mucho antes de que a la estrella le " +
          "ocurra absolutamente nada.",
      },
      {
        b: "rayo",
        texto:
          "La vida en la Tierra se acaba cinco veces antes que el Sol. No compartimos su " +
          "calendario.",
      },
      {
        b: "rotulo",
        texto:
          "El motivo es que el Sol se está volviendo más brillante",
      },
      {
        b: "parrafo",
        texto:
          "Para entender por qué, hay que aceptar algo que cuesta: el Sol no es una bombilla de " +
          "intensidad fija. Lleva volviéndose más brillante desde el día mismo en que se " +
          "encendió.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué le pasa eso? <strong>Es simple:</strong> en su centro el hidrógeno se " +
          "fusiona en helio, y el helio resultante ocupa menos espacio que el hidrógeno del que " +
          "procede. Así que el núcleo se va comprimiendo poco a poco bajo su propio peso.",
      },
      {
        b: "parrafo",
        texto:
          "Al comprimirse se calienta. Al calentarse fusiona más deprisa. Y al fusionar más " +
          "deprisa, alumbra más. Es un bucle que se alimenta a sí mismo y para el que no existe " +
          "ningún freno posible.",
      },
      {
        b: "parrafo",
        texto:
          "Falta poco más de un diez por ciento de brillo para que la Tierra deje de ser " +
          "habitable. Y ese diez por ciento llega dentro de unos mil millones de años.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Cuando se formó la Tierra, el Sol brillaba un treinta por ciento menos " +
          "que hoy. Con aquella estrella más apagada y esta misma atmósfera, la temperatura media " +
          "del planeta sería de siete grados bajo cero. La vida no empezó bajo un sol como el " +
          "nuestro, sino bajo uno mucho más tibio.",
      },
      {
        b: "rayo",
        texto:
          "El Sol no necesita morir para acabar con la vida en la Tierra. Le basta con seguir " +
          "haciendo exactamente lo que lleva haciendo desde el principio.",
      },
    ],
  },
  {
    id: "el-final-no-llegara-por-fuego",
    titulo: "El final de la vida en la Tierra no llegará por fuego, sino por asfixia",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «cuanto-le-queda-al-sol», número 2 de cuatro. Se entiende suelto. */
    encargo: "Un bosque a contraluz con la hoja seca en primer plano: lo que se apaga primero son las plantas, no la piedra.",
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Las primeras en caer serán las plantas",
      },
      {
        b: "parrafo",
        texto:
          "Cuando pensamos en el final de la vida en la Tierra, casi todos imaginamos lo mismo: " +
          "un planeta reseco, los océanos hirviendo y todo achicharrado bajo un sol implacable.",
      },
      {
        b: "parrafo",
        texto:
          "Es una imagen poderosa, pero llega mucho más tarde de lo que creemos. Lo primero que " +
          "ocurre es bastante más silencioso.",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo es indirecto, y por eso resulta tan difícil de anticipar. A medida que el " +
          "Sol calienta —y lleva calentándose desde que se encendió— la roca de los continentes " +
          "se erosiona más deprisa. Y esa erosión consume dióxido de carbono del aire.",
      },
      {
        b: "parrafo",
        texto:
          "Se trata de una reacción química que lleva miles de millones de años funcionando como " +
          "el termostato del planeta: cuanto más calor hace, más rápido trabaja, y más CO₂ retira " +
          "de la atmósfera. Es, en buena medida, lo que nos ha mantenido templados todo este " +
          "tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es que las plantas necesitan ese mismo CO₂ para hacer la " +
          "<strong>fotosíntesis</strong>. Es, literalmente, su comida.",
      },
      {
        b: "parrafo",
        texto:
          "Llega un punto en que el termostato ha limpiado el aire de carbono hasta un nivel en " +
          "el que ya no pueden seguir alimentándose. Y con ellas se cae todo lo que depende de " +
          "ellas, que en tierra firme es prácticamente todo.",
      },
      {
        b: "rayo",
        texto:
          "El mismo termostato que ha mantenido templada a la Tierra durante miles de millones de " +
          "años es lo que acabará dejando a las plantas sin nada que respirar.",
      },
      {
        b: "rotulo",
        texto:
          "Cuándo ocurre, y por qué la fecha se ha movido",
      },
      {
        b: "parrafo",
        texto:
          "El cálculo clásico sitúa ese momento dentro de unos mil millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "Sin embargo, trabajos recientes lo alargan hasta cerca de mil ochocientos millones y, " +
          "de paso, cambian la causa de la muerte. Según esos modelos, las plantas no llegarían a " +
          "quedarse sin comida: se detendrían de puro calor, por encima de los sesenta y cinco " +
          "grados.",
      },
      {
        b: "parrafo",
        texto:
          "Los océanos hierven bastante más tarde, aunque para entonces ya no quedará nadie para " +
          "verlo.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena quedarse con el orden, que es lo contrario de lo que sugiere la " +
          "intuición. Primero se apaga la fotosíntesis. Después desaparece la vida en tierra. Y " +
          "solo mucho después llega el fuego que todos imaginábamos primero.",
      },
      {
        b: "rayo",
        texto:
          "El planeta no arderá con vida dentro. Para cuando lleguen los océanos hirviendo, hará " +
          "cientos de millones de años que no queda nadie.",
      },
    ],
  },
  {
    id: "cuando-el-sol-se-hinche",
    titulo: "Cuando el Sol se hinche, la Tierra estará a punto de escapar",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «cuanto-le-queda-al-sol», número 3 de cuatro. Se entiende suelto. */
    encargo: "Un sol enorme y rojo ocupando media pantalla, con el filo de un planeta pequeño recortado contra él.",
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — comparación de tamaño a escala: el Sol de hoy, minúsculo, dentro de la silueta del Sol convertido en gigante roja, con la órbita actual de la Tierra marcada como una circunferencia que queda por dentro. La cifra de 256 veces no se siente leída; dibujada, sí. Diagrama propio en SVG. */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Primero se convertirá en una gigante roja",
      },
      {
        b: "parrafo",
        texto:
          "Cuando el Sol agote por fin el hidrógeno de su núcleo, hará justo lo contrario de " +
          "apagarse: se hinchará.",
      },
      {
        b: "parrafo",
        texto:
          "Se convertirá en una <strong>gigante roja</strong> de unas doscientas cincuenta y seis " +
          "veces su tamaño actual, lo que significa que su superficie llegará más lejos de donde " +
          "ahora mismo orbita la Tierra.",
      },
      {
        b: "parrafo",
        texto:
          "Mercurio será el primero en desaparecer. Venus le seguirá unos dos millones y medio de " +
          "años después. Y un millón de años más tarde le tocará el turno a nuestra órbita, " +
          "dentro de siete mil quinientos noventa millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que no está tan claro es qué se va a encontrar ahí cuando llegue.",
      },
      {
        b: "rayo",
        texto:
          "El Sol no se irá apagando poco a poco. Antes de eso crecerá hasta ser más grande que " +
          "la órbita en la que hoy gira la Tierra.",
      },
      {
        b: "rotulo",
        texto:
          "Y aquí ocurre algo que parece escrito por un guionista",
      },
      {
        b: "parrafo",
        texto:
          "Para poder hincharse tanto, el Sol tiene que soltar lastre. Perderá alrededor de un " +
          "tercio de su masa, expulsada al espacio en forma de un viento lento y continuo durante " +
          "millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "Y menos masa significa menos gravedad: su agarre sobre los planetas se irá aflojando " +
          "poco a poco.",
      },
      {
        b: "parrafo",
        texto:
          "Así que las órbitas se abren. La Tierra empezará a alejarse, empujada hacia fuera por " +
          "la propia decadencia de la estrella que viene a devorarla. Y aquí está lo interesante: " +
          "<strong>ese efecto, por sí solo, bastaría para salvarla.</strong> La órbita crecería " +
          "lo justo para quedar por fuera del Sol hinchado.",
      },
      {
        b: "parrafo",
        texto:
          "Sin embargo, hay una segunda fuerza tirando en sentido contrario. La gigante roja " +
          "levantará mareas sobre la Tierra, igual que la Luna las levanta hoy sobre nuestros " +
          "océanos, y esas mareas frenarán al planeta y lo irán arrastrando hacia dentro.",
      },
      {
        b: "parrafo",
        texto:
          "Además, para entonces la atmósfera exterior del Sol llegará tan lejos que la Tierra " +
          "tendrá que atravesarla, rozando y perdiendo velocidad.",
      },
      {
        b: "parrafo",
        texto:
          "Dos fuerzas opuestas, y el desenlace depende de cuál de las dos gane por muy poco.",
      },
      {
        b: "parrafo",
        texto:
          "El cálculo más citado, publicado en 2008, concluye que ganan las mareas: la Tierra " +
          "sería engullida medio millón de años antes de que el Sol alcance su tamaño máximo. " +
          "Medio millón de años, después de haber aguantado siete mil quinientos millones. Por " +
          "muy poco.",
      },
      {
        b: "parrafo",
        texto:
          "Pero modelos más recientes calculan que ese tirón hacia dentro es más débil de lo que " +
          "se creía, y devuelven a la Tierra a la lista de supervivientes.",
      },
      {
        b: "parrafo",
        texto:
          "La cuestión no está resuelta. La incertidumbre simplemente se ha mudado de sitio: " +
          "ahora depende de cuánta masa pierda exactamente el Sol, que es justo lo que todavía no " +
          "sabemos medir bien en estrellas como la nuestra.",
      },
      {
        b: "rayo",
        texto:
          "Sabemos con precisión la fecha de la cita entre el Sol y la Tierra. Todavía no sabemos " +
          "cómo termina.",
      },
    ],
  },
  {
    id: "todavia-no-se-ha-apagado-ninguna",
    titulo: "Todavía no se ha apagado del todo ninguna estrella",
    categoria: "Ciencia",
    color: "var(--slate)",
    /* Serie «cuanto-le-queda-al-sol», número 4 de cuatro. Se entiende suelto. */
    encargo: "Una brasa casi apagada en la oscuridad, con el punto de luz todavía dentro. Macro, sin fondo.",
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que quedará del Sol seguirá enfriándose sin terminar nunca",
      },
      {
        b: "parrafo",
        texto:
          "Cuando el Sol acabe de deshacerse, dejará atrás su propio corazón: una bola de materia " +
          "comprimida, más o menos del tamaño de la Tierra, con la masa de media estrella metida " +
          "dentro.",
      },
      {
        b: "parrafo",
        texto:
          "Es lo que los astrónomos llaman una <strong>enana blanca</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí ya no se fusiona nada. No hay motor, no hay combustible, no queda absolutamente " +
          "nada por quemar. Lo único que hará durante el resto del tiempo es enfriarse, muy " +
          "despacio.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y cuánto tarda en enfriarse del todo una enana blanca? <strong>Es simple: más de lo " +
          "que lleva existiendo el universo.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "En todo el universo observable no existe ni una sola enana blanca apagada por " +
          "completo. No es que sean raras: es que no ha pasado tiempo suficiente desde el " +
          "principio de todo para que a ninguna le haya dado tiempo a terminar.",
      },
      {
        b: "parrafo",
        texto:
          "Las estrellas más antiguas que se formaron, hace miles de millones de años, siguen ahí " +
          "fuera enfriándose todavía. Todas.",
      },
      {
        b: "parrafo",
        texto:
          "El Sol acabará siendo una brasa. Una brasa que seguirá ahí, cada vez más tenue, mucho " +
          "después de que se hayan apagado todas las cosas que hoy sabemos nombrar.",
      },
      {
        b: "rayo",
        texto:
          "En todo el universo observable no hay una sola enana blanca apagada del todo. El " +
          "universo no lleva existiendo el tiempo suficiente.",
      },
    ],
  },
  {
    id: "por-que-bostezamos",
    titulo: "Por qué bostezamos",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    encargo: "Un bostezo entero, de perfil, ocupando la pantalla.",
    fotos: [
      {
        archivo: "Tabby cat-yawning-01.jpg",
        autor: "Un gato atigrado bostezando, abril de 2008. Fotografía de Hisashi.",
        licencia: "CC BY-SA 2.0",
        fuente: "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg",
        foco: "50% 40%",
        alt: "Un gato atigrado de perfil con la boca abierta de par en par en mitad de un bostezo, los colmillos y la lengua a la vista y el fondo desenfocado.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «La hipótesis más sólida...». Cuatro o cinco animales ordenados por tamaño de cerebro (ave pequeña, gato, humano, elefante) con la du */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Bostezamos todos los días y nadie sabe por qué",
      },
      {
        b: "parrafo",
        texto:
          "¿Cuántas veces has bostezado hoy? Seguramente más de las que recuerdas. Es uno de los " +
          "comportamientos más extendidos que existen: lo hacen las aves, los reptiles y todos " +
          "los mamíferos, y nosotros empezamos a hacerlo mucho antes de nacer.",
      },
      {
        b: "parrafo",
        texto:
          "Y sin embargo, no sabemos para qué sirve.",
      },
      {
        b: "parrafo",
        texto:
          "No es una forma de hablar ni una exageración. Después de décadas de estudios, la " +
          "ciencia todavía no tiene una respuesta con consenso. Hay hipótesis, algunas bastante " +
          "sólidas, pero ninguna se ha impuesto del todo. Es de esas cosas que hacemos a diario y " +
          "que siguen siendo, en el sentido literal de la palabra, un misterio.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí sabemos con certeza es que buena parte de lo que nos han contado sobre el " +
          "bostezo es falso.",
      },
      {
        b: "rayo",
        texto:
          "Bostezamos desde antes de nacer y lo compartimos con casi todos los animales de sangre " +
          "caliente, pero seguimos sin saber para qué sirve.",
      },
      {
        b: "rotulo",
        texto:
          "La explicación del oxígeno lleva décadas desmentida",
      },
      {
        b: "parrafo",
        texto:
          "Si le preguntas a cualquiera por qué bostezamos, te dirá lo mismo: porque al cuerpo le " +
          "falta oxígeno y el bostezo sirve para coger una bocanada grande de aire. Es la " +
          "respuesta que se enseña en los colegios y la que repite casi todo el mundo. También es " +
          "la que se desmontó hace décadas.",
      },
      {
        b: "parrafo",
        texto:
          "El psicólogo Robert Provine hizo el experimento evidente. Si la teoría fuese cierta, " +
          "respirar aire cargado de oxígeno debería reducir los bostezos, y respirar aire con más " +
          "dióxido de carbono debería dispararlos. Probó las dos cosas.",
      },
      {
        b: "parrafo",
        texto:
          "No pasó nada. Ni el oxígeno extra los redujo, ni el CO₂ los aumentó. Después lo " +
          "intentó con ejercicio físico, que duplica el ritmo respiratorio, y el resultado fue el " +
          "mismo: la gente respiraba el doble y bostezaba exactamente igual que antes.",
      },
      {
        b: "parrafo",
        texto:
          "La conclusión es incómoda pero clara. El bostezo y la respiración funcionan por " +
          "mecanismos distintos, y uno no está ahí para arreglar al otro.",
      },
      {
        b: "parrafo",
        texto:
          "Hay además un detalle que remata el asunto. Los fetos bostezan dentro del útero, " +
          "cuando sus pulmones todavía no funcionan y el oxígeno les llega por el cordón " +
          "umbilical. Difícilmente pueden estar cogiendo aire.",
      },
      {
        b: "rayo",
        texto:
          "Respirar oxígeno puro no reduce los bostezos, y respirar dióxido de carbono no los " +
          "aumenta. Bostezar no tiene nada que ver con el aire que te falta.",
      },
      {
        b: "rotulo",
        texto:
          "La hipótesis más sólida es que el bostezo funciona como un radiador",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿qué pasa realmente cuando bostezas? La explicación que más fuerza ha ganado " +
          "en los últimos años es también la más inesperada: <strong>el bostezo sirve para " +
          "enfriarte el cerebro.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "El cerebro es un órgano caro. Consume una enorme cantidad de energía, genera mucho " +
          "calor como consecuencia, y solo funciona bien dentro de un margen de temperatura " +
          "bastante estrecho.",
      },
      {
        b: "parrafo",
        texto:
          "La hipótesis <strong>termorreguladora</strong> propone que el bostezo es, " +
          "literalmente, un sistema de refrigeración: al abrir la mandíbula del todo se estiran " +
          "los músculos de la cara y aumenta el flujo de sangre hacia la cabeza, entra de golpe " +
          "una bocanada de aire más fresco que el cuerpo, y de paso se ventilan los senos " +
          "nasales.",
      },
      {
        b: "parrafo",
        texto:
          "Suena inventado, pero las pruebas se van acumulando:",
      },
      {
        b: "lista",
        puntos: [
          "Enfriar la frente reduce los bostezos contagiosos. Respirar por la nariz, que " +
            "también baja la temperatura del cerebro, los reduce igual.",
          "En ratas, la temperatura cerebral sube justo antes del bostezo y baja inmediatamente " +
            "después.",
          "En personas con bostezos excesivos, la temperatura oral cae unos 0,4 grados tras el " +
            "episodio.",
          "La frecuencia de bostezos aumenta con la temperatura ambiente, pero se desploma " +
            "cuando el aire de fuera se acerca a la temperatura corporal. Tiene sentido: si el " +
            "aire ya no está más frío que tú, ventilar no sirve de nada.",
        ],
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? El estudio más grande que se ha hecho jamás sobre el tema analizó 1.291 " +
          "bostezos de 101 especies distintas, entre mamíferos y aves. Encontró que cuanto mayor " +
          "es el cerebro de un animal, y cuantas más neuronas tiene, más dura su bostezo.",
      },
      {
        b: "parrafo",
        texto:
          "Un mamífero de cerebro medio bosteza unos 3,4 segundos; un ave, apenas 1,5. Encaja " +
          "exactamente con lo que predice la teoría: un cerebro más grande necesita más tiempo de " +
          "ventilación.",
      },
      {
        b: "rayo",
        texto:
          "Cuanto más grande es el cerebro de un animal, más largo es su bostezo. Es una de las " +
          "pruebas más elegantes de que bostezar sirve para enfriarlo.",
      },
      {
        b: "rotulo",
        texto:
          "El contagio es un misterio aparte",
      },
      {
        b: "parrafo",
        texto:
          "Hay una segunda cosa rara en los bostezos, y es que se pegan. Probablemente hayas " +
          "bostezado ya una o dos veces leyendo esto. Basta con ver a alguien bostezar, o con " +
          "oírlo, o incluso con leer la palabra, para que se dispare la respuesta.",
      },
      {
        b: "parrafo",
        texto:
          "Y conviene entender que el contagio no es un detalle del primer misterio, sino un " +
          "misterio distinto. Aunque bostezar sirva para enfriar tu cerebro, eso no explica en " +
          "absoluto por qué el bostezo de otra persona tendría que enfriar el tuyo.",
      },
      {
        b: "parrafo",
        texto:
          "La pista que más se maneja apunta a lo social. El contagio es bastante más fuerte " +
          "entre personas cercanas —familia, pareja, amigos— que entre desconocidos, lo que " +
          "sugiere que está enganchado a los mecanismos de empatía y de sincronización dentro de " +
          "un grupo.",
      },
      {
        b: "parrafo",
        texto:
          "Y en mayo de 2026 llegó el dato más desconcertante hasta la fecha. Un equipo publicó " +
          "en <em>Current Biology</em> un experimento con 38 embarazadas en el tercer trimestre: " +
          "les pusieron vídeos de gente bostezando mientras observaban al feto por ecografía.",
      },
      {
        b: "parrafo",
        texto:
          "El 64 % de las madres bostezó viendo los vídeos. Y alrededor del 53 % de los fetos " +
          "bostezó después, normalmente al minuto y medio de haberlo hecho su madre.",
      },
      {
        b: "parrafo",
        texto:
          "Es un estudio pequeño, y los propios autores admiten que no saben cómo ocurre —¿por el " +
          "movimiento?, ¿por alguna señal hormonal?— ni si esos bostezos prenatales sirven para " +
          "algo en absoluto.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la situación, resumida, es esta: hacemos algo constantemente, empezamos a " +
          "hacerlo antes de nacer, se nos contagia de los demás, y seguimos sin saber por qué " +
          "ninguna de las tres cosas.",
      },
      {
        b: "rayo",
        texto:
          "El contagio del bostezo empieza antes de nacer. Los fetos bostezan poco después de que " +
          "lo haga su madre, y nadie sabe todavía cómo.",
      },
    ],
  },
  {
    id: "por-que-vuelan-los-aviones",
    titulo: "Por qué vuelan los aviones",
    categoria: "Ciencia",
    color: "var(--slate)",
    encargo: "La patrulla acrobática en formación cerrada, vista desde abajo.",
    fotos: [
      {
        /* La eligió Pablo. Trae los tres sellos de Commons —imagen de calidad,
           destacada en la Wikipedia inglesa e imagen del día el 14 de julio de
           2024— y es vertical, 3059x3642: recortada al marco de la portada
           quedan 1682 píxeles de ancho. El foco va al 38 % y no al centro
           porque la formación cruza en diagonal y el título se apoya abajo.

           LA LICENCIA NO ES CREATIVE COMMONS: Commons la llama «Attribution» y
           detrás hay una plantilla propia, {{Konflikty.pl}}, que pide que se
           diga que la imagen sale de konflikty.pl. Por eso el pie los nombra a
           los dos. El campo `licencia` guarda lo que responde Commons letra por
           letra, que es lo que compara `coteja-fotos.mjs`. */
        archivo: "Patrouille de France Radom 3 1.JPG",
        autor: "La Patrouille de France en el festival aéreo de Radom, 28 de agosto de 2011. Fotografía de Łukasz Golowanow, Konflikty.pl.",
        licencia: "Attribution",
        fuente: "https://commons.wikimedia.org/wiki/File:Patrouille_de_France_Radom_3_1.JPG",
        foco: "50% 38%",
        alt: "Nueve reactores de la patrulla acrobática francesa volando en formación cerrada contra un cielo azul pálido, con las estelas de humo azul, blanco y rojo cruzando la imagen.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «Lo que hace un ala en realidad...». Perfil de un ala en corte con las líneas de flujo del aire entrando rectas y saliendo claramente */
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación que te dieron en el colegio es falsa",
      },
      {
        b: "parrafo",
        texto:
          "¿Te acuerdas de cómo te lo contaron? El ala es curva por arriba y plana por abajo, así " +
          "que el aire que pasa por encima tiene que recorrer más distancia.",
      },
      {
        b: "parrafo",
        texto:
          "Como debe llegar al final al mismo tiempo que el que va por debajo, se ve obligado a " +
          "ir más rápido. Y al ir más rápido baja la presión, así que el ala sube.",
      },
      {
        b: "parrafo",
        texto:
          "Suena impecable. Está en libros de texto, en museos de ciencia y en la mitad de los " +
          "vídeos de internet. Y la propia NASA tiene una página dedicada exclusivamente a " +
          "explicar por qué está mal.",
      },
      {
        b: "parrafo",
        texto:
          "Los fallos son varios, y bastante gordos:",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Nadie ha dicho que tengan que llegar a la vez.</strong> Es una suposición " +
            "inventada, sin ningún fundamento físico detrás. Y además es falsa: el aire de arriba " +
            "llega al borde de salida del ala <em>antes</em> que el de abajo, no a la vez.",
          "<strong>Las alas simétricas vuelan perfectamente.</strong> Muchos aviones " +
            "acrobáticos llevan alas idénticas por arriba y por abajo. Según esta teoría no " +
            "deberían generar sustentación alguna.",
          "<strong>Una plancha completamente plana también vuela.</strong> Un avión de papel no " +
            "tiene curvatura ninguna y se sostiene sin problema.",
          "<strong>Y sobre todo: los aviones vuelan boca abajo.</strong> Ocurre en cualquier " +
            "exhibición aérea. Si la forma del ala fuese la causa, un avión invertido debería " +
            "salir disparado contra el suelo.",
        ],
      },
      {
        b: "parrafo",
        texto:
          "Hay incluso un fallo final, más técnico. Aunque aceptaras la suposición de partida, " +
          "los números no cuadran: la velocidad que predice la teoría es demasiado baja para " +
          "generar la sustentación que se mide de verdad.",
      },
      {
        b: "rayo",
        texto:
          "Los aviones vuelan boca abajo en cualquier exhibición aérea. Eso, por sí solo, " +
          "desmonta la explicación de la forma del ala.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hace un ala en realidad es tirar aire hacia abajo",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿qué está ocurriendo de verdad? <strong>Es simple, y responde a una de las " +
          "leyes más antiguas de la física:</strong> el ala empuja aire hacia abajo, y el aire " +
          "empuja al ala hacia arriba. Acción y reacción, la tercera ley de Newton.",
      },
      {
        b: "parrafo",
        texto:
          "Un ala en movimiento no se limita a cortar el aire, lo desvía. Lo agarra, lo curva y " +
          "lo lanza hacia el suelo en un chorro continuo que los ingenieros llaman " +
          "<strong>downwash</strong>, la estela descendente. Y como el aire recibe un empujón " +
          "hacia abajo, devuelve un empujón idéntico hacia arriba. Eso, y no otra cosa, es la " +
          "sustentación.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que cuesta imaginar es la cantidad de aire implicada. Una avioneta pequeña, del " +
          "tipo Cessna 172, volando a velocidad de crucero, está desviando hacia abajo del orden " +
          "de <strong>dos toneladas y media de aire por segundo</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay cálculos que, contando también el aire que asciende por delante del ala, elevan " +
          "esa cifra hasta las cinco toneladas. Cada segundo. En una avioneta de cuatro plazas.",
      },
      {
        b: "parrafo",
        texto:
          "Un avión de línea, con cientos de toneladas que sostener, mueve una cantidad que ya " +
          "cuesta representarse.",
      },
      {
        b: "parrafo",
        texto:
          "Visto así, la pregunta cambia de sentido. Un avión no es un objeto que desafíe la " +
          "gravedad: es una máquina que empuja hacia abajo, segundo a segundo, muchísimo más aire " +
          "del que nadie imaginaría.",
      },
      {
        b: "rayo",
        texto:
          "Una avioneta pequeña desvía hacia abajo entre dos y cinco toneladas de aire por " +
          "segundo. El aire responde empujándola hacia arriba.",
      },
      {
        b: "rotulo",
        texto:
          "Entonces, ¿Bernoulli estaba equivocado?",
      },
      {
        b: "parrafo",
        texto:
          "Aquí conviene detenerse, porque circula por internet una idea todavía peor que el mito " +
          "original: la de que \"los científicos no saben realmente por qué vuelan los aviones\". " +
          "Eso es sencillamente falso. La física del vuelo se conoce con enorme precisión desde " +
          "hace más de un siglo, y es la que permite diseñar aviones que funcionan a la primera.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que está mal no es la ciencia. Es la versión simplificada que nos cuentan.",
      },
      {
        b: "parrafo",
        texto:
          "El principio de Bernoulli —donde el aire va más rápido, la presión es menor— es " +
          "perfectamente correcto. Si mides la presión sobre un ala en vuelo, encuentras " +
          "efectivamente menos presión arriba y más abajo. Eso es real, es medible y nadie lo " +
          "discute.",
      },
      {
        b: "parrafo",
        texto:
          "El error está en el orden de las cosas. La explicación del colegio dice que el aire se " +
          "acelera <em>porque</em> el camino es más largo, y que esa aceleración genera la " +
          "sustentación. En realidad ocurre justo al revés: <strong>el ala desvía el aire, y ese " +
          "desvío es lo que acelera el flujo y crea la diferencia de presión.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Son dos maneras de describir el mismo fenómeno, no dos teorías rivales. Puedes " +
          "contarlo mirando las presiones o mirando el aire que sale despedido hacia abajo, y los " +
          "números coinciden. Lo que no puedes es explicar por qué el aire se acelera recurriendo " +
          "a un argumento inventado.",
      },
      {
        b: "rayo",
        texto:
          "Bernoulli no estaba equivocado, estaba incompleto. La baja presión sobre el ala no " +
          "causa la sustentación: es la consecuencia de que el ala esté desviando aire.",
      },
      {
        b: "rotulo",
        texto:
          "Todo depende del ángulo, y el ángulo tiene un límite",
      },
      {
        b: "parrafo",
        texto:
          "Si la curvatura del ala no es lo decisivo, ¿qué lo es? Fundamentalmente el " +
          "<strong>ángulo de ataque</strong>: la inclinación del ala respecto al aire que le " +
          "viene de frente.",
      },
      {
        b: "parrafo",
        texto:
          "Cuanto más inclinada está el ala, más bruscamente desvía el aire hacia abajo y más " +
          "sustentación genera. Por eso vuela un avión de papel completamente plano, y por eso " +
          "puede sostenerse un avión invertido: basta con inclinar el morro lo suficiente para " +
          "que el ala siga tirando aire hacia el suelo.",
      },
      {
        b: "parrafo",
        texto:
          "Pero ese margen tiene un final, y llega de forma abrupta. Alrededor de los quince " +
          "grados de inclinación, el aire ya no consigue seguir la superficie del ala: se " +
          "despega, se vuelve turbulento y deja de ser desviado de manera ordenada. En ese " +
          "instante la sustentación se desploma.",
      },
      {
        b: "parrafo",
        texto:
          "Es lo que se conoce como <strong>entrada en pérdida</strong>, y encierra un matiz que " +
          "sorprende a mucha gente: un avión no entra en pérdida por ir despacio, sino por " +
          "superar ese ángulo. Las dos cosas suelen ir juntas —para sostenerse a poca velocidad " +
          "hay que inclinar más el morro—, pero la causa es siempre el ángulo, nunca el " +
          "velocímetro.",
      },
      {
        b: "rayo",
        texto:
          "Un ala deja de volar en torno a los quince grados de inclinación, cuando el aire ya no " +
          "puede seguir su superficie y se despega.",
      },
    ],
  },
  {
    id: "por-que-llueve",
    titulo: "Por qué llueve",
    categoria: "Ciencia",
    color: "var(--teal)",
    encargo: "Las gotas en el cristal, con la ciudad desenfocada detrás.",
    fotos: [
      {
        local: portadaLluvia,
        autor: "Fotografía de Sara Mazin, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/19860993/",
        alt: "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «Cada gota de lluvia se construye alrededor de una china». Corte transversal de una gota con la partícula sólida en el centro, amplia */
    bloques: [
      {
        b: "rotulo",
        texto:
          "El aire no funciona como una esponja",
      },
      {
        b: "parrafo",
        texto:
          "Casi todos hemos oído la misma explicación: el aire caliente \"aguanta\" más agua, y " +
          "cuando se enfría ya no le cabe tanta, así que suelta lo que le sobra en forma de " +
          "lluvia.",
      },
      {
        b: "parrafo",
        texto:
          "Es una imagen cómoda, la de una esponja que escurres, y se repite en libros de texto y " +
          "documentales por igual. El problema es que no funciona así.",
      },
      {
        b: "parrafo",
        texto:
          "El aire no aguanta nada. Es, en su inmensa mayoría, espacio vacío con moléculas " +
          "diminutas volando sueltas sin llegar a tocarse. Ahí dentro sobra sitio para muchísima " +
          "más agua de la que hay: la capacidad nunca ha sido el problema.",
      },
      {
        b: "parrafo",
        texto:
          "¿Qué ocurre entonces de verdad? <strong>Es simple:</strong> existe un pulso permanente " +
          "entre dos cosas que suceden a la vez. En todo momento hay moléculas de agua " +
          "escapándose del líquido hacia el aire, y en todo momento hay otras haciendo el camino " +
          "de vuelta.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando hace calor, las moléculas se mueven deprisa, se escapan muchas y gana la fuga. " +
          "Cuando el aire se enfría van más lentas, se escapan menos, y gana el bando contrario.",
      },
      {
        b: "parrafo",
        texto:
          "Ese momento exacto en que empiezan a ganar las que vuelven es cuando aparece una nube. " +
          "No porque al aire se le haya acabado el sitio, sino porque al agua se le han acabado " +
          "las fuerzas para irse.",
      },
      {
        b: "parrafo",
        texto:
          "Y el aire se enfría al subir. Por eso las nubes se forman ahí arriba y no aquí abajo.",
      },
      {
        b: "rayo",
        texto:
          "Las nubes no aparecen porque al aire se le acabe el sitio para el agua. Aparecen " +
          "porque el agua, al enfriarse, deja de tener fuerza para escaparse.",
      },
      {
        b: "rotulo",
        texto:
          "Cada gota de lluvia se construye alrededor de una china",
      },
      {
        b: "parrafo",
        texto:
          "Aunque el aire se enfríe lo suficiente, el agua todavía no puede juntarse sola. Las " +
          "moléculas chocan ahí arriba y se separan de nuevo, una y otra vez, porque les falta " +
          "algo a lo que agarrarse.",
      },
      {
        b: "parrafo",
        texto:
          "Necesitan una superficie sólida. Una mota, por diminuta que sea.",
      },
      {
        b: "parrafo",
        texto:
          "Sal que el viento arrancó de la superficie del mar. Polvo. Polen. A veces incluso una " +
          "bacteria. Sobre España, muchísimas veces, arena que salió del Sáhara y cruzó el " +
          "Mediterráneo flotando durante días. Cualquiera de esas partículas sirve de semilla, y " +
          "a su alrededor se va condensando el agua poco a poco.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene leerlo dos veces, porque es de las cosas más contraintuitivas que existen " +
          "sobre la lluvia: <strong>en un aire perfectamente limpio no llovería nunca.</strong> " +
          "Lo que cae del cielo es, en su mismísimo centro, suciedad envuelta en agua.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Con millones de esas gotitas se monta una nube, y una nube pesa " +
          "muchísimo más de lo que aparenta. Un cúmulo corriente, de los blancos y gordos de un " +
          "día de verano, carga unas quinientas toneladas de agua: el equivalente a unos cien " +
          "elefantes suspendidos sobre tu cabeza.",
      },
      {
        b: "parrafo",
        texto:
          "Si no se te cae encima es porque las gotitas son tres veces más finas que un pelo y " +
          "descienden a cámara lenta, y porque el aire húmedo de la nube es menos denso que el " +
          "aire seco de debajo. La nube flota encima, igual que el aceite sobre el agua.",
      },
      {
        b: "rayo",
        texto:
          "En un aire perfectamente limpio no llovería jamás. Cada gota necesita una partícula " +
          "sólida en su centro para poder formarse.",
      },
      {
        b: "rotulo",
        texto:
          "Casi toda la lluvia que has visto empezó siendo nieve",
      },
      {
        b: "parrafo",
        texto:
          "Para que una gota llegue a caer tiene que crecer una barbaridad. Dentro de una sola " +
          "gota de lluvia cabe alrededor de <strong>un millón</strong> de esas gotitas " +
          "microscópicas que forman la nube. Un millón. Si tuvieran que unirse de una en una, " +
          "chocando al azar, el proceso tardaría demasiado como para explicar la lluvia que " +
          "vemos.",
      },
      {
        b: "parrafo",
        texto:
          "Así que en latitudes como la nuestra la naturaleza recurre a un atajo, y ese atajo es " +
          "el hielo.",
      },
      {
        b: "parrafo",
        texto:
          "En lo alto de la nube hace un frío extremo. Ahí conviven cristales de hielo y gotas de " +
          "agua líquida que, por sorprendente que resulte, siguen sin congelarse. Y entre esos " +
          "dos vecinos existe un desequilibrio decisivo: al hielo le resulta mucho más fácil " +
          "capturar moléculas de agua del aire de lo que al líquido le resulta retenerlas.",
      },
      {
        b: "parrafo",
        texto:
          "De modo que el hielo roba. Las gotas de alrededor se van evaporando, sus moléculas se " +
          "pegan al cristal, y el cristal crece deprisa, mucho más deprisa de lo que crecería una " +
          "gota chocando con otras. Es lo que los meteorólogos llaman el <strong>proceso de " +
          "Bergeron</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando pesa lo suficiente, se desprende y cae. Al bajar atraviesa la zona templada de " +
          "la nube, se derrite, y llega al suelo convertido en agua.",
      },
      {
        b: "parrafo",
        texto:
          "La lluvia de tu ventana, casi siempre, es nieve que no llegó entera.",
      },
      {
        b: "rayo",
        texto:
          "En latitudes medias, la mayor parte de la lluvia empieza siendo cristales de hielo que " +
          "se derriten de camino al suelo.",
      },
      {
        b: "rotulo",
        texto:
          "El olor de la lluvia no viene de la lluvia",
      },
      {
        b: "parrafo",
        texto:
          "Queda una última cosa, y es probablemente la que te resulte más familiar sin que te " +
          "hayas parado nunca a pensarla: ese olor a tierra mojada de justo cuando empieza a " +
          "llover.",
      },
      {
        b: "parrafo",
        texto:
          "No viene del agua. El agua no huele a nada.",
      },
      {
        b: "parrafo",
        texto:
          "Viene de unas bacterias que viven en el suelo y que fabrican una molécula llamada " +
          "<strong>geosmina</strong>. Se pasan ahí abajo la vida entera, produciéndola y " +
          "esperando.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué las libera? Cuando la primera gota golpea la tierra seca, atrapa debajo " +
          "burbujas de aire minúsculas. Esas burbujas suben por dentro de la gota y estallan " +
          "hacia arriba, lanzando al viento un espray microscópico cargado de geosmina. Cada gota " +
          "que cae funciona, literalmente, como un pulverizador diminuto.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso el olor te llega antes de mojarte. No estás oliendo la lluvia: estás oliendo " +
          "el suelo, pulverizado y puesto en el aire por las primeras gotas.",
      },
      {
        b: "parrafo",
        texto:
          "Y nuestra nariz lo detecta en cantidades ridículas, del orden de cinco partes por " +
          "billón. Es como notar una cucharadita de azúcar disuelta en una piscina olímpica.",
      },
      {
        b: "parrafo",
        texto:
          "Nadie sabe del todo por qué somos tan sensibles precisamente a ese olor. La sospecha " +
          "más extendida resulta incómoda de lo bonita que es: durante casi toda nuestra " +
          "historia, olerlo significaba que había agua cerca. Y el agua significaba seguir vivo.",
      },
      {
        b: "rayo",
        texto:
          "Detectamos el olor de la lluvia en cinco partes por billón: el equivalente a una " +
          "cucharadita de azúcar disuelta en una piscina olímpica.",
      },
    ],
  },
  {
    id: "por-que-tiritamos",
    titulo: "Por qué tiritamos",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    encargo: "Alguien tiritando de frío, envuelto en una manta, con el vaho de la respiración.",
    fotos: [
      {
        local: portadaTiritamos,
        autor: "Fotografía de Anzhela Svyrydiuk, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/29023988/",
        alt: "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección 2. Gráfico sencillo de dos líneas sobre un eje de tiempo: la temperatura corporal subiendo y el punto de consigna del hipotálamo dand */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tiritar consiste en aprovechar el peor defecto de tus músculos",
      },
      {
        b: "parrafo",
        texto:
          "¿Te has parado alguna vez a pensar en lo absurdo que resulta tiritar? Tienes frío, y " +
          "la respuesta de tu cuerpo es ponerse a temblar sin que tú se lo pidas, gastando " +
          "energía en un movimiento que no te lleva a ninguna parte.",
      },
      {
        b: "parrafo",
        texto:
          "Parece un fallo del sistema. Es justo lo contrario: es uno de los trucos más " +
          "ingeniosos que tenemos.",
      },
      {
        b: "parrafo",
        texto:
          "Para entenderlo hay que aceptar antes algo poco halagador sobre tus músculos: " +
          "<strong>son máquinas malísimas.</strong> Cuando un músculo se contrae, solo una parte " +
          "de la energía que consume acaba convertida en movimiento.",
      },
      {
        b: "parrafo",
        texto:
          "La mayor parte se pierde en forma de calor. Es la razón por la que te acaloras " +
          "subiendo unas escaleras: tu cuerpo está tirando energía por la ventana mientras " +
          "intentas moverte.",
      },
      {
        b: "parrafo",
        texto:
          "En circunstancias normales, esa ineficiencia es un incordio. Cuando tienes frío, se " +
          "convierte en la solución.",
      },
      {
        b: "parrafo",
        texto:
          "Tiritar consiste exactamente en eso: contraer músculos a toda velocidad sin ninguna " +
          "intención de desplazarte, precisamente para cobrar el calor sobrante. El movimiento no " +
          "es el objetivo, es el efecto secundario. Lo que buscas es el desperdicio.",
      },
      {
        b: "parrafo",
        texto:
          "La orden sale del <strong>hipotálamo posterior</strong>, una región del cerebro que " +
          "funciona como tu termostato. Detecta que la temperatura interna está cayendo y activa " +
          "un centro motor que pone a temblar la musculatura, empezando por la del tronco y el " +
          "cuello, que es la que está más cerca de los órganos que hay que proteger.",
      },
      {
        b: "rayo",
        texto:
          "Tiritar no es un fallo. Es tu cuerpo explotando a propósito el hecho de que los " +
          "músculos desperdician la mayor parte de su energía en forma de calor.",
      },
      {
        b: "rotulo",
        texto:
          "Cuando tienes fiebre no tiritas porque tengas frío",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está la parte que desmonta lo que casi todos creemos. Estás con gripe, con " +
          "treinta y nueve de fiebre, y tiritas bajo dos mantas. Tu temperatura corporal es más " +
          "alta que la de cualquier persona sana de la habitación, y sin embargo eres tú quien " +
          "tiene frío.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación no es que la fiebre te haga sentir cosas raras. Es que <strong>te han " +
          "movido el termostato.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Cuando una infección entra en el cuerpo se liberan unas sustancias que actúan sobre el " +
          "hipotálamo y le suben el objetivo. Tu termostato deja de apuntar a treinta y siete " +
          "grados y pasa a apuntar a treinta y nueve.",
      },
      {
        b: "parrafo",
        texto:
          "Y a partir de ese instante tu cuerpo se comporta exactamente como se comportaría " +
          "cualquiera que tuviese frío: se compara con el objetivo, se ve por debajo, y enciende " +
          "la maquinaria de calentar.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí las tiriteras. De ahí que te tapes. De ahí que busques una manta con treinta y " +
          "nueve de fiebre. Tu cuerpo no está confundido en absoluto: está calentando a " +
          "propósito, y tú estás colaborando sin saberlo.",
      },
      {
        b: "parrafo",
        texto:
          "Y por eso, cuando la fiebre baja, ocurre justo lo contrario. El termostato vuelve a " +
          "treinta y siete, tu cuerpo se ve de golpe por encima del objetivo y activa el sistema " +
          "de enfriar: empiezas a sudar a chorros. El sudor de la fiebre bajando no es el cuerpo " +
          "\"expulsando\" nada. Es un termostato corrigiendo un exceso.",
      },
      {
        b: "rayo",
        texto:
          "Con fiebre tiritas porque te han subido el objetivo, no porque tengas frío. Tu cuerpo " +
          "está calentando a propósito.",
      },
      {
        b: "rotulo",
        texto:
          "Los recién nacidos casi no tiritan, y tienen otro sistema",
      },
      {
        b: "parrafo",
        texto:
          "Existe una excepción llamativa, y son los bebés. Un recién nacido apenas puede " +
          "tiritar: no tiene todavía masa muscular suficiente para generar calor de esa manera. Y " +
          "sin embargo son perfectamente capaces de mantener su temperatura.",
      },
      {
        b: "parrafo",
        texto:
          "Lo hacen con otro sistema, la <strong>termogénesis sin temblor</strong>, cuyo " +
          "combustible es un tejido especial llamado <strong>grasa parda</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando un bebé se enfría, una señal química activa esa grasa, que quema sus reservas " +
          "dentro de las mitocondrias de un modo peculiar: en lugar de fabricar energía " +
          "aprovechable, la desvía directamente a calor. No hay movimiento, no hay temblor, no " +
          "hay gasto muscular. Es una estufa química.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho de otro modo: un adulto genera calor gastando músculo y un recién nacido lo " +
          "genera quemando grasa. Dos caminos distintos hacia el mismo sitio.",
      },
      {
        b: "rayo",
        texto:
          "Un recién nacido casi no puede tiritar. Genera calor quemando un tejido especial, la " +
          "grasa parda, directamente en sus mitocondrias.",
      },
    ],
  },
  {
    id: "por-que-pica-el-picante",
    titulo: "Por qué pica el picante",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    encargo: "Un montón de chiles rojos muy de cerca, brillantes, llenando la pantalla.",
    fotos: [
      {
        local: portadaPicante,
        autor: "Fotografía de MacShamim, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/31464525/",
        alt: "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «Tu cerebro no distingue el picante...». El receptor TRPV1 dibujado como una única puerta que abren dos llaves distintas: por un lado */
    bloques: [
      {
        b: "rotulo",
        texto:
          "El picante no es un sabor",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por deshacer un malentendido que arrastramos todos: <strong>el picante no es " +
          "un sabor.</strong> No está en la misma categoría que el dulce, el salado, el ácido, el " +
          "amargo o el umami, que son los cinco que detecta la lengua.",
      },
      {
        b: "parrafo",
        texto:
          "Y no es una distinción de manual. El picante lo notas en los labios, en la garganta, " +
          "dentro de la nariz.",
      },
      {
        b: "parrafo",
        texto:
          "Puedes notarlo en la piel si cortas un chile y luego te tocas la cara, y hay quien lo " +
          "descubre de la peor manera posible. Nada de eso ocurre con lo dulce, porque lo dulce " +
          "necesita papilas gustativas y el picante no.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que estás sintiendo cuando comes picante no pertenece al sistema del gusto. " +
          "Pertenece al sistema que te avisa de que te estás quemando.",
      },
      {
        b: "rayo",
        texto:
          "El picante no es uno de los cinco sabores. Lo notas en los labios, en la nariz y hasta " +
          "en la piel, porque no viaja por el sistema del gusto.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cerebro no distingue el picante de una quemadura de verdad",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el mecanismo, y es más literal de lo que nadie espera.",
      },
      {
        b: "parrafo",
        texto:
          "En tus terminaciones nerviosas hay un receptor llamado <strong>TRPV1</strong>. Su " +
          "trabajo normal es avisarte del calor peligroso: se activa cuando la temperatura sube " +
          "hasta niveles que ya duelen, en torno a los cuarenta y tantos grados, y manda al " +
          "cerebro un mensaje muy claro que significa <em>me estoy quemando</em>.",
      },
      {
        b: "parrafo",
        texto:
          "La capsaicina, la molécula responsable del picor de los chiles, encaja en ese mismo " +
          "receptor y lo abre.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo despacio, porque el matiz importa. La comida picante no <em>se parece</em> a una " +
          "quemadura, ni te <em>recuerda</em> al calor. Activa exactamente el mismo canal, " +
          "dispara exactamente la misma señal y llega al cerebro por exactamente la misma vía.",
      },
      {
        b: "parrafo",
        texto:
          "Desde el punto de vista de tu sistema nervioso, un chile y una sartén caliente son " +
          "indistinguibles. Por eso sudas, se te enrojece la cara y tu cuerpo intenta " +
          "refrigerarse: está respondiendo a una quemadura que no existe.",
      },
      {
        b: "parrafo",
        texto:
          "Este hallazgo, por cierto, no es una curiosidad menor. David Julius descubrió el " +
          "receptor TRPV1 usando capsaicina como herramienta para encontrarlo, y ese trabajo le " +
          "valió el <strong>Premio Nobel de Medicina de 2021</strong>, compartido con Ardem " +
          "Patapoutian. El picante fue, literalmente, la llave con la que se abrió la puerta de " +
          "cómo sentimos la temperatura.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Ahí está también la razón por la que el agua no te alivia y la leche sí. " +
          "La capsaicina no se disuelve en agua, así que beber un vaso la reparte por la boca en " +
          "lugar de arrastrarla.",
      },
      {
        b: "parrafo",
        texto:
          "La leche, en cambio, contiene grasa y caseína, una proteína que se une a la capsaicina " +
          "y la despega de los receptores. No es una creencia popular: es química.",
      },
      {
        b: "rayo",
        texto:
          "La capsaicina abre el mismo receptor que detecta el calor que quema. Para tu sistema " +
          "nervioso, un chile y una sartén caliente mandan el mismo mensaje.",
      },
      {
        b: "rotulo",
        texto:
          "El chile no lo hace por ti: lo hace contra ti",
      },
      {
        b: "parrafo",
        texto:
          "Queda la pregunta más interesante de todas. ¿Por qué se molesta una planta en fabricar " +
          "una molécula que provoca dolor?",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta es que el chile no está intentando ser sabroso. Está intentando echarte.",
      },
      {
        b: "parrafo",
        texto:
          "Toda planta con fruto tiene el mismo problema: necesita que alguien se coma el fruto y " +
          "suelte las semillas lejos, pero no todos los comensales le sirven igual.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la clave, porque <strong>las aves no sienten el picante.</strong> Su " +
          "versión del receptor TRPV1 no responde a la capsaicina en absoluto. Un pájaro puede " +
          "comerse el chile más ardiente del mundo y no notar nada.",
      },
      {
        b: "parrafo",
        texto:
          "Los mamíferos sí lo notamos. Y esa diferencia no es casualidad, sino exactamente el " +
          "objetivo.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando un roedor se come un chile, tritura las semillas con las muelas y las destroza: " +
          "las que sobreviven ya no germinan. Cuando se lo come un pájaro, que no mastica, las " +
          "semillas pasan enteras por su tubo digestivo y salen intactas y viables, además de " +
          "bastante lejos de la planta madre.",
      },
      {
        b: "parrafo",
        texto:
          "Un experimento lo dejó clarísimo. A pájaros y roedores les ofrecieron chiles sin " +
          "capsaicina, y ambos comieron sin problema. Al ofrecerles chiles picantes, los pájaros " +
          "siguieron comiendo tan tranquilos y los roedores se negaron a probarlos.",
      },
      {
        b: "parrafo",
        texto:
          "Es lo que los biólogos llaman <strong>disuasión dirigida</strong>: un veneno hecho a " +
          "medida, que solo molesta a quien te destroza las semillas. La planta no reparte dolor " +
          "a ciegas, sino que ha afinado quién lo siente y quién no.",
      },
      {
        b: "parrafo",
        texto:
          "Así que cada vez que comes algo picante, estás ignorando deliberadamente un mensaje " +
          "químico que lleva millones de años perfeccionándose para que animales como tú se " +
          "marchen. Somos, que se sepa, la única especie que se lo salta a propósito.",
      },
      {
        b: "rayo",
        texto:
          "Las aves no sienten el picante. Los chiles fabrican capsaicina precisamente para eso: " +
          "espantar a los mamíferos, que trituran las semillas, sin espantar a los pájaros, que " +
          "las dispersan intactas.",
      },
    ],
  },
  {
    id: "por-que-se-arrugan-los-dedos",
    titulo: "Por qué se te arrugan los dedos en el agua",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    encargo: "Las yemas de unos dedos arrugadas después del baño, a foco muy corto.",
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «La hipótesis: son los neumáticos de tus manos». Macro real de una yema arrugada junto a un primer plano del dibujo de un neumático d */
    bloques: [
      {
        b: "rotulo",
        texto:
          "No es que la piel absorba agua",
      },
      {
        b: "parrafo",
        texto:
          "Todos hemos dado por buena la misma explicación sin pararnos a pensarla: los dedos se " +
          "arrugan porque la piel se empapa, se hincha y le sobra superficie. Suena razonable. Y " +
          "es falsa.",
      },
      {
        b: "parrafo",
        texto:
          "La prueba que lo desmonta es de 1936 y resulta bastante contundente. Unos médicos " +
          "observaron que ciertos pacientes de polio, los que tenían dañado el nervio mediano de " +
          "la mano, no se arrugaban. Metían la mano en agua el tiempo que hiciera falta y los " +
          "dedos seguían lisos.",
      },
      {
        b: "parrafo",
        texto:
          "Piénsalo un momento. Si arrugarse fuese cuestión de absorber agua, un nervio " +
          "estropeado no debería cambiar absolutamente nada: el agua entraría igual. Pero sí " +
          "cambia, y lo cambia todo.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, a partir de los años setenta la cosa dio un giro curioso. Como el efecto " +
          "depende de que el nervio funcione, meter la mano en agua templada y ver si los dedos " +
          "se arrugan se convirtió en una <strong>prueba médica</strong> para detectar ese tipo " +
          "de daño nervioso.",
      },
      {
        b: "parrafo",
        texto:
          "Algo que casi todos hemos visto mil veces en la bañera resultó ser un indicador " +
          "clínico.",
      },
      {
        b: "rayo",
        texto:
          "Los pacientes con el nervio mediano dañado no se arrugan por mucho tiempo que pasen en " +
          "el agua. Eso descarta por completo que sea cuestión de absorción.",
      },
      {
        b: "rotulo",
        texto:
          "Tus dedos no se arrugan: deciden arrugarse",
      },
      {
        b: "parrafo",
        texto:
          "¿Qué ocurre entonces de verdad? <strong>Es simple:</strong> al detectar que estás " +
          "sumergido, tu <strong>sistema nervioso simpático</strong> —la parte que funciona sola, " +
          "sin que tú intervengas— da la orden de estrechar los vasos sanguíneos de los dedos.",
      },
      {
        b: "parrafo",
        texto:
          "Al contraerse los vasos, cae el flujo de sangre y el volumen bajo la piel disminuye. " +
          "La piel de las yemas, que está anclada a los tejidos de debajo, no tiene hacia dónde " +
          "recogerse, así que se pliega. Esas arrugas no son piel hinchada, son piel que se ha " +
          "quedado sin relleno.",
      },
      {
        b: "parrafo",
        texto:
          "Y ese detalle cambia por completo la naturaleza del fenómeno. Arrugarse no es algo que " +
          "le <em>pase</em> a tu cuerpo dentro del agua, como mojarse. Es algo que tu cuerpo " +
          "<em>hace</em> al entrar en contacto con ella, igual que sudar o que se te ponga la " +
          "piel de gallina.",
      },
      {
        b: "parrafo",
        texto:
          "Una respuesta activa, ejecutada en cuestión de minutos, y que solo ocurre en dos " +
          "sitios: las yemas de los dedos y las plantas de los pies.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Un estudio de 2025 comprobó algo que nadie había mirado: el patrón de " +
          "arrugas no es aleatorio. Si metes la misma mano en agua en días distintos, se te " +
          "forman prácticamente los mismos pliegues, en los mismos sitios. Y los autores apuntan " +
          "a que ese dibujo podría ser distinto en cada persona.",
      },
      {
        b: "rayo",
        texto:
          "Arrugarse en el agua no es algo que le pase a tu cuerpo, es algo que tu cuerpo hace. " +
          "Es una respuesta nerviosa activa, como sudar.",
      },
      {
        b: "rotulo",
        texto:
          "La hipótesis: son los neumáticos de tus manos",
      },
      {
        b: "parrafo",
        texto:
          "Si el cuerpo se toma la molestia de montar todo ese operativo, cabe suponer que sirve " +
          "para algo. Y la explicación que más fuerza ha ganado es tan concreta que resulta casi " +
          "graciosa: <strong>las arrugas funcionan como el dibujo de un neumático.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Los surcos que se forman en la yema tienen la misma geometría que los canales de un " +
          "neumático de lluvia: caminos que evacuan el agua hacia los lados para que la " +
          "superficie pueda tocar lo que agarra. Sin ellos, entre tu dedo y el objeto mojado " +
          "queda una película de agua que hace de lubricante.",
      },
      {
        b: "parrafo",
        texto:
          "Hay datos que la respaldan. En experimentos de laboratorio, la gente con los dedos " +
          "arrugados manipulaba objetos mojados mejor que con los dedos lisos, con una mejora de " +
          "en torno al 12 % en velocidad. Encaja además con la anatomía: el efecto solo aparece " +
          "donde agarras cosas, y no en el resto del cuerpo.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora bien, conviene decir lo que no está cerrado. Otros equipos no han logrado " +
          "reproducir esa mejora cuando los objetos eran pequeños y ligeros. Y hay una objeción " +
          "de fondo más incómoda: demostrar que algo mejora una función no demuestra que la " +
          "evolución lo seleccionara para eso. Podría ser un efecto secundario útil de otra cosa.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la situación real es esta: el mecanismo está resuelto y es nervioso, sin " +
          "discusión. El para qué sigue siendo la mejor hipótesis disponible, no un hecho " +
          "probado.",
      },
      {
        b: "rayo",
        texto:
          "Los surcos de un dedo arrugado tienen la misma geometría que los canales de un " +
          "neumático de lluvia: evacuan el agua para que la piel pueda agarrar.",
      },
    ],
  },
  {
    id: "por-que-te-mareas-en-el-coche",
    titulo: "Por qué te mareas en el coche",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    encargo: "El paisaje pasando borroso por la ventanilla de un coche en marcha.",
    fotos: [
      {
        local: portadaMareas,
        autor: "Fotografía de Elif, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/17729653/",
        alt: "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en tonos sepia.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «El conductor no se marea...». Silueta de una cabeza con dos flechas entrando al cerebro y chocando: desde los ojos, «estoy quieto»;  */
    bloques: [
      {
        b: "rotulo",
        texto:
          "El conductor no se marea, y ahí está la pista",
      },
      {
        b: "parrafo",
        texto:
          "Vas de pasajero, sacas el móvil, lees dos mensajes y a los cinco minutos estás pálido, " +
          "sudando frío y con la ventanilla bajada. El conductor, sentado a treinta centímetros " +
          "de ti y sometido exactamente al mismo movimiento, está estupendamente.",
      },
      {
        b: "parrafo",
        texto:
          "Esa asimetría es la mejor pista de lo que está ocurriendo, y apunta a algo bastante " +
          "más raro de lo que parece.",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por el mecanismo. Tu sentido del equilibrio no vive en los ojos, sino en el " +
          "<strong>oído interno</strong>. Ahí dentro tienes unos conductos llenos de líquido y " +
          "unas piedrecitas microscópicas que se desplazan con cada aceleración, cada frenada y " +
          "cada curva. Ese sistema le va contando al cerebro, en tiempo real, hacia dónde te " +
          "estás moviendo.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece cuando esa información no cuadra con lo que ven los ojos. Si estás " +
          "leyendo, tus ojos ven una página quieta a treinta centímetros de la cara y reportan " +
          "que no te mueves. Mientras tanto, el oído interno está notificando curvas, frenazos y " +
          "baches. Dos sistemas que normalmente cuentan lo mismo empiezan a contradecirse.",
      },
      {
        b: "parrafo",
        texto:
          "Eso es lo que se conoce como <strong>conflicto sensorial</strong>, y explica muy bien " +
          "cuándo aparece el mareo. Explica por qué se alivia mirando al horizonte, porque " +
          "devuelves a los ojos la información de movimiento que les faltaba.",
      },
      {
        b: "parrafo",
        texto:
          "Y explica sobre todo por qué el conductor se libra: no solo ve la carretera, sino que " +
          "además anticipa cada giro, porque es él quien lo va a dar. Su cerebro sabe lo que " +
          "viene antes de que llegue.",
      },
      {
        b: "rayo",
        texto:
          "El conductor no se marea porque anticipa cada curva. Su cerebro sabe lo que va a pasar " +
          "antes de que su cuerpo lo sienta.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cerebro cree que te han envenenado",
      },
      {
        b: "parrafo",
        texto:
          "El conflicto sensorial explica cuándo te mareas, pero deja intacta la pregunta " +
          "interesante. Porque de todas las respuestas posibles ante una información " +
          "contradictoria, ¿por qué elige el cerebro exactamente <strong>vomitar</strong>? Podría " +
          "darte sueño, podría darte dolor de cabeza, podría sencillamente ignorar el desajuste. " +
          "Vomitar es una reacción desproporcionada y muy específica.",
      },
      {
        b: "parrafo",
        texto:
          "La hipótesis que mejor lo explica se la debemos al psicólogo Michel Treisman, y es " +
          "incómodamente elegante: el cerebro interpreta ese desajuste como una señal de " +
          "<strong>envenenamiento</strong>.",
      },
      {
        b: "parrafo",
        texto:
          "Piénsalo desde la perspectiva de un cerebro que evolucionó mucho antes de que " +
          "existieran los coches. Durante casi toda nuestra historia, si tus sentidos del " +
          "equilibrio y de la vista dejaban de coincidir, no era porque fueras montado en un " +
          "vehículo: no había vehículos.",
      },
      {
        b: "parrafo",
        texto:
          "Lo más probable con diferencia era que hubieras comido algo que estaba alterando tu " +
          "sistema nervioso. Muchas neurotoxinas naturales producen justamente eso: " +
          "descoordinación, vértigo, percepción distorsionada.",
      },
      {
        b: "parrafo",
        texto:
          "Y ante una sospecha de envenenamiento, la respuesta más útil que tiene el cuerpo a " +
          "mano es vaciar el estómago cuanto antes.",
      },
      {
        b: "parrafo",
        texto:
          "Visto así, el mareo del coche no sería un fallo del organismo, sino un sistema de " +
          "defensa antiquísimo funcionando de forma correcta ante una situación que nadie había " +
          "previsto.",
      },
      {
        b: "parrafo",
        texto:
          "Tu cerebro no sabe lo que es una autovía. Lo único que sabe es que tus sentidos no se " +
          "ponen de acuerdo, y que la última vez que eso pasó, hace cien mil años, convenía " +
          "devolver.",
      },
      {
        b: "parrafo",
        texto:
          "Hay un dato que refuerza la idea. Las personas más propensas a marearse en movimiento " +
          "también lo son a las náuseas de la quimioterapia y a los vómitos posteriores a una " +
          "operación. En los tres casos se estaría disparando la misma alarma antivenenos.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene, eso sí, ser honestos con el estado de la cuestión. La revisión más citada " +
          "sobre susceptibilidad al mareo concluye que el balance de la evidencia favorece esta " +
          "hipótesis del detector de toxinas, pero no todo el mundo está convencido: hay " +
          "investigadores que sostienen que las explicaciones evolutivas de este tipo son relatos " +
          "plausibles e imposibles de comprobar.",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo del conflicto sensorial está firme. El porqué evolutivo es la mejor " +
          "explicación disponible, no un hecho cerrado.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? El mareo no reparte por igual. Las mujeres vomitan durante un viaje con " +
          "una frecuencia notablemente mayor que los hombres, y la susceptibilidad alcanza su " +
          "máximo hacia los nueve o diez años, para ir cayendo después a lo largo de la " +
          "adolescencia. Casi todo el mundo mejora con la edad.",
      },
      {
        b: "rayo",
        texto:
          "Vomitar es la respuesta correcta ante un envenenamiento. El problema es que tu cerebro " +
          "no sabe distinguir un veneno de un asiento trasero.",
      },
    ],
  },
  {
    id: "por-que-tenemos-estaciones",
    titulo: "Por qué tenemos estaciones",
    categoria: "Ciencia",
    color: "var(--ochre)",
    encargo: "El mismo árbol o el mismo paisaje en dos estaciones, o la Tierra inclinada sobre su órbita.",
    fotos: [
      {
        local: portadaEstaciones,
        autor: "Fotografía de Canan Cetin, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/29343620/",
        alt: "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los pinos al fondo.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «La causa real es que la Tierra está torcida». El mismo haz de luz cayendo sobre una superficie de dos maneras: perpendicular, dibuja */
    bloques: [
      {
        b: "rotulo",
        texto:
          "En invierno estamos más cerca del Sol que en verano",
      },
      {
        b: "parrafo",
        texto:
          "¿Por qué hace más calor en verano? Si te lo preguntan por sorpresa, es muy probable " +
          "que respondas lo mismo que casi todo el mundo: porque en verano la Tierra está más " +
          "cerca del Sol.",
      },
      {
        b: "parrafo",
        texto:
          "Es una respuesta que suena impecable, encaja con el sentido común y además se apoya en " +
          "algo verdadero. La órbita de la Tierra no es un círculo perfecto, sino una elipse " +
          "ligeramente aplastada, así que efectivamente hay momentos del año en que estamos más " +
          "cerca y momentos en que estamos más lejos.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es que los meses no coinciden. En absoluto.",
      },
      {
        b: "parrafo",
        texto:
          "La Tierra alcanza su punto más cercano al Sol a principios de enero, y el más lejano a " +
          "principios de julio. Conviene leerlo dos veces: en pleno invierno del hemisferio norte " +
          "estamos lo más cerca que vamos a estar del Sol en todo el año, y en pleno agosto " +
          "español estamos prácticamente en el punto más alejado.",
      },
      {
        b: "parrafo",
        texto:
          "Y existe un argumento todavía más sencillo, que no necesita ni cifras ni órbitas. " +
          "Cuando en Madrid es verano, en Buenos Aires es invierno.",
      },
      {
        b: "parrafo",
        texto:
          "Los dos sitios están en el mismo planeta, a la misma distancia del Sol, en el mismo " +
          "instante. Si la distancia fuese la causa, las estaciones tendrían que ser idénticas en " +
          "todo el mundo a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "Lo más llamativo de este error no es que exista, sino quién lo comete. En 1987, un " +
          "equipo de Harvard grabó un documental que se hizo célebre: pararon a licenciados el " +
          "día de su graduación, con la toga todavía puesta, y les preguntaron por qué hay " +
          "estaciones. La mayoría respondió lo de la distancia.",
      },
      {
        b: "parrafo",
        texto:
          "Gente con una educación excelente, recién salida de una de las mejores universidades " +
          "del mundo, repitiendo un error de primaria. El documental se titula <em>A Private " +
          "Universe</em>, y su conclusión es incómoda: las ideas equivocadas que nos formamos de " +
          "niños resultan sorprendentemente resistentes, y sobreviven intactas a años enteros de " +
          "estudios.",
      },
      {
        b: "rayo",
        texto:
          "En el hemisferio norte tenemos invierno cuando la Tierra está más cerca del Sol, y " +
          "verano cuando está más lejos.",
      },
      {
        b: "rotulo",
        texto:
          "La causa real es que la Tierra está torcida",
      },
      {
        b: "parrafo",
        texto:
          "Entonces, ¿qué provoca las estaciones? <strong>Es simple:</strong> el eje de rotación " +
          "de la Tierra no es perpendicular al plano de su órbita, sino que está inclinado unos " +
          "veintitrés grados y medio.",
      },
      {
        b: "parrafo",
        texto:
          "Y esa inclinación apunta siempre en la misma dirección mientras damos la vuelta al " +
          "Sol, de modo que durante medio año el hemisferio norte queda inclinado hacia él, y " +
          "durante la otra mitad queda inclinado en sentido contrario.",
      },
      {
        b: "parrafo",
        texto:
          "Eso cambia dos cosas a la vez, y las dos empujan en la misma dirección.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es el <strong>ángulo</strong> con el que llega la luz. Cuando el Sol está " +
          "alto, sus rayos caen casi perpendiculares y concentran toda su energía sobre poca " +
          "superficie.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando está bajo, esa misma cantidad de luz llega inclinada y se reparte sobre un área " +
          "mucho mayor, así que cada metro cuadrado de suelo recibe bastante menos. Es " +
          "exactamente lo que ocurre con una linterna: apuntada de frente dibuja un círculo " +
          "pequeño e intenso; inclinada, una mancha grande y pálida.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es la <strong>duración del día</strong>. El hemisferio que mira hacia el " +
          "Sol pasa más horas iluminado, de manera que acumula calor durante más tiempo y le " +
          "queda menos noche para perderlo.",
      },
      {
        b: "parrafo",
        texto:
          "Ninguna de las dos tiene nada que ver con la distancia. Tienen que ver con cómo se " +
          "reparte la misma luz.",
      },
      {
        b: "rayo",
        texto:
          "Las estaciones no dependen de cuánta luz llega, sino del ángulo con el que llega y de " +
          "cuántas horas dura el día.",
      },
      {
        b: "rotulo",
        texto:
          "Las cifras dejan claro cuál de los dos efectos manda",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena poner los números uno al lado del otro, porque el tamaño de cada efecto " +
          "lo resuelve todo.",
      },
      {
        b: "parrafo",
        texto:
          "Entre el punto más cercano y el más lejano de la órbita, la distancia al Sol varía " +
          "unos cinco millones de kilómetros. Suena a muchísimo, pero es sobre un total de unos " +
          "ciento cincuenta millones: apenas un 3 %.",
      },
      {
        b: "parrafo",
        texto:
          "Es una diferencia real, y de hecho tiene efectos medibles sobre el clima, pero se " +
          "queda demasiado pequeña como para explicar por qué en enero te hielas y en julio te " +
          "achicharras.",
      },
      {
        b: "parrafo",
        texto:
          "La inclinación, en cambio, altera el ángulo de la luz de forma drástica a lo largo del " +
          "año, y con él la energía que llega a cada metro cuadrado de terreno. Ahí está toda la " +
          "diferencia entre una estación y otra.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Esa inclinación probablemente no estaba ahí desde el principio. La " +
          "hipótesis más aceptada sostiene que, muy al comienzo de la historia del sistema solar, " +
          "un cuerpo del tamaño de Marte —bautizado como Theia— chocó contra la Tierra.",
      },
      {
        b: "parrafo",
        texto:
          "El impacto nos dejó torcidos, y de los escombros que salieron despedidos se formó la " +
          "Luna. Si esa explicación es correcta, las estaciones y la Luna comparten exactamente " +
          "el mismo origen: el mismo choque.",
      },
      {
        b: "rayo",
        texto:
          "La inclinación que nos regala las estaciones y los escombros que formaron la Luna " +
          "salieron probablemente del mismo impacto.",
      },
    ],
  },
  {
    id: "como-cicatrizan-las-heridas",
    titulo: "Cómo cicatrizan las heridas",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    encargo: "Una cicatriz vieja en la piel, de cerca y con luz rasante.",
    fotos: [
      {
        local: portadaCicatrices,
        autor: "Fotografía de MART PRODUCTION, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/7699367/",
        alt: "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en los nudillos.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección 2. Comparación lado a lado de la disposición del colágeno: a la izquierda, piel sana con fibras entrelazadas en todas direcciones tip */
    bloques: [
      {
        b: "rotulo",
        texto:
          "La costra no es la herida curándose",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos deshaciendo una idea muy extendida: la costra no es la curación. Es una tapa " +
          "provisional.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando te cortas, lo primero que hace el cuerpo no es reparar, sino cerrar el grifo. " +
          "En cuestión de segundos los vasos de la zona se estrechan para reducir el sangrado, y " +
          "las plaquetas acuden a taponar el agujero formando un coágulo.",
      },
      {
        b: "parrafo",
        texto:
          "Ese coágulo, al secarse en la superficie, es la costra. Su función es sellar, impedir " +
          "que entren bacterias y ganar tiempo. La reparación de verdad ocurre debajo, y es un " +
          "proceso mucho más largo y organizado de lo que parece.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que viene después son cuatro fases, y se solapan entre sí:",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Hemostasia.</strong> Inmediata. Los vasos se contraen y se forma el coágulo. " +
            "Cuestión de minutos.",
          "<strong>Inflamación.</strong> Arranca enseguida. Las células defensivas llegan a la " +
            "herida dentro de las primeras veinticuatro horas y se quedan entre dos y cinco días, " +
            "limpiando restos y bacterias. Es la fase que produce el enrojecimiento y la " +
            "hinchazón, así que una herida que se inflama un poco no está estropeándose: está " +
            "trabajando.",
          "<strong>Proliferación.</strong> Empieza entre el tercer y el décimo día. Se fabrica " +
            "tejido nuevo, se tienden vasos sanguíneos y los bordes empiezan a tirar el uno del " +
            "otro para cerrar el hueco.",
          "<strong>Remodelado.</strong> Comienza hacia el día veintiuno. Y aquí está lo que " +
            "casi nadie sabe: puede durar hasta un año entero.",
        ],
      },
      {
        b: "rayo",
        texto:
          "La costra no cura nada. Es una tapa provisional para que la reparación de verdad pueda " +
          "hacerse debajo sin que entren bacterias.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cicatriz sigue cambiando un año después",
      },
      {
        b: "parrafo",
        texto:
          "Cuando una herida ya \"parece curada\", el cuerpo lleva apenas unas semanas de " +
          "trabajo. La fase de remodelado arranca sobre el día veintiuno y puede prolongarse doce " +
          "meses, y durante todo ese tiempo el tejido se reorganiza por dentro sin que tú notes " +
          "nada.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso las cicatrices cambian de color y de textura durante meses, y por eso un " +
          "médico te dirá que una cicatriz no es definitiva hasta pasado un año.",
      },
      {
        b: "parrafo",
        texto:
          "Pero hay un límite que el cuerpo no logra superar. <strong>Una cicatriz nunca recupera " +
          "la fuerza de la piel original.</strong> Con el tiempo alcanza en torno al 80 % de la " +
          "resistencia del tejido al que sustituye, y ahí se queda para siempre. Ese 20 % que " +
          "falta no vuelve.",
      },
      {
        b: "parrafo",
        texto:
          "La razón está en cómo se coloca el <strong>colágeno</strong>, que es la fibra " +
          "estructural de la piel. En la piel sana esas fibras están entrelazadas en varias " +
          "direcciones, como el tejido de una cesta, y eso le da resistencia venga la tensión de " +
          "donde venga.",
      },
      {
        b: "parrafo",
        texto:
          "En una cicatriz, en cambio, el colágeno se deposita en haces densos y paralelos, todos " +
          "alineados en el mismo sentido.",
      },
      {
        b: "parrafo",
        texto:
          "Es la diferencia entre una tela y un montón de hilos pegados uno al lado del otro. El " +
          "segundo aguanta bien en una dirección y mal en todas las demás.",
      },
      {
        b: "parrafo",
        texto:
          "Y explica también por qué las cicatrices se ven distintas: esa alineación uniforme " +
          "refleja la luz de otra manera, y no deja sitio para folículos ni glándulas. Una " +
          "cicatriz no tiene pelo y no suda.",
      },
      {
        b: "rayo",
        texto:
          "Una cicatriz alcanza como mucho el 80 % de la fuerza de la piel original. Ese 20 % que " +
          "falta no se recupera nunca.",
      },
      {
        b: "rotulo",
        texto:
          "Cicatrizar no es un fallo, es un intercambio",
      },
      {
        b: "parrafo",
        texto:
          "Todo lo anterior invita a una pregunta razonable: si el cuerpo sabe fabricar piel " +
          "perfecta mientras se está formando, ¿por qué no la fabrica igual al repararse?",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta es que sí sabe hacerlo. Lo que pasa es que deja de hacerlo muy pronto.",
      },
      {
        b: "parrafo",
        texto:
          "Un feto humano herido antes de las <strong>veintidós semanas</strong> de gestación se " +
          "cura sin dejar cicatriz. El tejido se regenera con la misma arquitectura que tenía " +
          "antes, con el colágeno en red suelta e indistinguible de la piel de alrededor.",
      },
      {
        b: "parrafo",
        texto:
          "A partir de esa fecha esa capacidad se pierde, y pasamos al sistema de cicatrizar que " +
          "nos acompañará el resto de la vida.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué cambia exactamente? Sobre todo la inflamación. En el feto la respuesta " +
          "inflamatoria a una herida es muy reducida, y todo ocurre en un entorno estéril y sin " +
          "ninguna prisa.",
      },
      {
        b: "parrafo",
        texto:
          "En un cuerpo ya nacido, en cambio, cada herida abierta es una puerta por la que pueden " +
          "entrar bacterias, y una infección mata muchísimo más rápido de lo que incomoda una " +
          "cicatriz.",
      },
      {
        b: "parrafo",
        texto:
          "Así que lo que parece una chapuza resulta ser un intercambio deliberado: <strong>el " +
          "cuerpo elige velocidad por encima de calidad.</strong> Un parche resistente colocado " +
          "deprisa le gana a una reparación perfecta que tarda el triple. La cicatriz no es un " +
          "fracaso de la regeneración, es el precio de cerrar a tiempo.",
      },
      {
        b: "rayo",
        texto:
          "Antes de las veintidós semanas de gestación un feto se cura sin cicatriz. Después " +
          "perdemos esa capacidad a cambio de cerrar las heridas mucho más rápido.",
      },
    ],
  },
  {
    id: "como-funciona-la-gravedad",
    titulo: "Cómo funciona la gravedad",
    categoria: "Ciencia",
    color: "var(--plum)",
    encargo: "Una espiral de líneas cayendo hacia un centro oscuro: el espacio-tiempo hundido, sin fondo estrellado.",
    fotos: [
      {
        local: portadaGravedad,
        /* Esta línea se pinta ENCIMA de la portada, así que no puede describir
           lo que ya se ve: contar la imagen en palabras es cerrar la pregunta
           que la portada abre, y eso está prohibido en la hoja de estilo. En
           las de Commons ahí va el pie con su crédito; aquí, hasta que Pablo
           diga de dónde salió, va lo mínimo cierto. La descripción de verdad
           está en `alt`, que es su sitio: la lee quien no ve la imagen.

           La procedencia sigue sin confirmar —el nombre del archivo parece de
           un banco de imágenes— y está anotada como PENDIENTE en
           `assets/portadas.csv`, que es donde vive esa prueba. */
        autor: "Imagen del proyecto.",
        licencia: "Pendiente de confirmar con Pablo",
        alt: "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral hacia un punto oscuro abajo a la derecha, con una curva azul clara cruzando por delante.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «Doscientos años después…». Una lámina tensa deformada por una esfera pesada en el centro, con una segunda esfera pequeña recorriendo la pendiente en espiral. Es la metáfora estándar y funciona, pero dibújala en corte lateral y sin fondo estrellado: lo importante es la deformación de la malla, no que parezca espacio. Diagrama propio. */
    bloques: [
      {
        b: "rotulo",
        texto:
          "La manzana existió, pero no le cayó en la cabeza",
      },
      {
        b: "parrafo",
        texto:
          "La escena la conocemos todos: Newton sentado bajo un árbol, una manzana que le golpea " +
          "la cabeza, y de golpe la ley de la gravitación universal. Es una de las anécdotas más " +
          "repetidas de la historia de la ciencia, y está casi entera equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "Casi. Porque la manzana sí existió.",
      },
      {
        b: "parrafo",
        texto:
          "Sabemos lo que pasó de verdad porque el propio Newton se lo contó a un amigo, el " +
          "anticuario William Stukeley, durante una comida en Kensington el 15 de abril de 1726. " +
          "Stukeley lo puso por escrito poco después, y el manuscrito se conserva.",
      },
      {
        b: "parrafo",
        texto:
          "En él, Newton recuerda estar sentado en actitud contemplativa cuando cayó una manzana, " +
          "y preguntarse: <em>¿por qué esa manzana desciende siempre perpendicularmente al " +
          "suelo?</em>",
      },
      {
        b: "parrafo",
        texto:
          "Ni golpe en la cabeza, ni revelación instantánea. Una pregunta.",
      },
      {
        b: "parrafo",
        texto:
          "Y fíjate en cuál, porque no es la que uno esperaría. Newton no se pregunta por qué cae " +
          "la manzana — eso ya lo sabía todo el mundo. Se pregunta <strong>por qué cae siempre " +
          "hacia el centro de la Tierra</strong>, en línea recta, sin desviarse jamás.",
      },
      {
        b: "rayo",
        texto:
          "Newton no se preguntó por qué caen las cosas. Se preguntó por qué caen siempre " +
          "exactamente hacia el centro de la Tierra.",
      },
      {
        b: "rotulo",
        texto:
          "Su verdadera idea fue que la manzana y la Luna hacen lo mismo",
      },
      {
        b: "parrafo",
        texto:
          "Lo revolucionario no fue descubrir que las cosas caen. Eso lleva a la vista desde " +
          "siempre.",
      },
      {
        b: "parrafo",
        texto:
          "Lo revolucionario fue proponer que <strong>la fuerza que tira de la manzana es la " +
          "misma que mantiene a la Luna en órbita.</strong> Y eso, en el siglo XVII, era una idea " +
          "casi escandalosa.",
      },
      {
        b: "parrafo",
        texto:
          "Hasta entonces el cielo y la Tierra eran dos mundos separados por naturaleza. Aquí " +
          "abajo las cosas se estropeaban, caían y se corrompían. Allá arriba los astros giraban " +
          "eternos y perfectos, obedeciendo reglas distintas. Nadie mezclaba las dos cosas.",
      },
      {
        b: "parrafo",
        texto:
          "Newton las mezcló. Dijo que un planeta y una piedra obedecen exactamente la misma ley, " +
          "y que la diferencia es solo de distancia y de masa.",
      },
      {
        b: "parrafo",
        texto:
          "La Luna, según su idea, está cayendo hacia la Tierra continuamente. Lo que pasa es que " +
          "también se mueve hacia el lado tan rápido que nunca llega a chocar: cae, y la Tierra " +
          "se le curva por debajo. Está cayendo eternamente sin llegar nunca.",
      },
      {
        b: "parrafo",
        texto:
          "Es la misma razón por la que un satélite se mantiene arriba. No está flotando, está " +
          "cayendo y fallando.",
      },
      {
        b: "rayo",
        texto:
          "La Luna está cayendo hacia la Tierra ahora mismo. Se mueve hacia el lado tan deprisa " +
          "que la Tierra se le curva por debajo y nunca llega a alcanzarla.",
      },
      {
        b: "rotulo",
        texto:
          "Newton reconoció por escrito que no sabía qué es la gravedad",
      },
      {
        b: "parrafo",
        texto:
          "Aquí viene la parte que casi nadie conoce, y que a mí me parece la más admirable de " +
          "toda la historia.",
      },
      {
        b: "parrafo",
        texto:
          "Newton escribió unas ecuaciones que predicen el movimiento de los planetas con una " +
          "precisión asombrosa. Funcionaban tan bien que se usaron durante dos siglos sin una " +
          "sola corrección seria, y todavía hoy sirven para calcular la trayectoria de una sonda " +
          "espacial.",
      },
      {
        b: "parrafo",
        texto:
          "Y aun así, <strong>nunca dijo qué era la gravedad.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "No es que se le olvidara. Lo declaró expresamente en la segunda edición de los " +
          "<em>Principia</em>, publicada en 1713:",
      },
      {
        b: "cita",
        texto:
          "No he podido todavía descubrir la causa de estas propiedades de la gravedad a partir " +
          "de los fenómenos, y no invento hipótesis.",
        autor: "Isaac Newton, <em>Principia</em>, Escolio General",
      },
      {
        b: "parrafo",
        texto:
          "Esa última frase, <em>hypotheses non fingo</em>, se hizo célebre. Significa: sé " +
          "describir con exactitud cómo se comporta la gravedad, pero no voy a inventarme una " +
          "explicación de por qué existe.",
      },
      {
        b: "parrafo",
        texto:
          "Piénsalo un momento. El hombre que descifró el movimiento de los cielos reconoció por " +
          "escrito que no entendía la cosa que acababa de describir. Y consideró que decirlo era " +
          "más honesto que rellenar el hueco con una historia bonita.",
      },
      {
        b: "rayo",
        texto:
          "Newton describió la gravedad con una precisión que duró dos siglos, y dejó escrito que " +
          "no tenía ni idea de qué era.",
      },
      {
        b: "rotulo",
        texto:
          "Doscientos años después, Einstein contestó: no es una fuerza",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta llegó en 1915, y consistió en tirar la pregunta a la basura.",
      },
      {
        b: "parrafo",
        texto:
          "Einstein propuso que la gravedad <strong>no es una fuerza que tire de las " +
          "cosas.</strong> No hay nada agarrando la manzana. Lo que hay es espacio y tiempo " +
          "deformados.",
      },
      {
        b: "parrafo",
        texto:
          "Su idea es que la masa curva el espacio-tiempo a su alrededor, como una bola pesada " +
          "hunde una lona tensada. Y los objetos que se mueven por esa región no están siendo " +
          "empujados: simplemente siguen el camino más recto disponible en un terreno que ya no " +
          "es plano.",
      },
      {
        b: "parrafo",
        texto:
          "La Tierra no orbita al Sol porque el Sol la sujete. Orbita porque el Sol ha hundido el " +
          "espacio a su alrededor, y en ese espacio hundido la línea más recta posible resulta " +
          "ser una elipse.",
      },
      {
        b: "parrafo",
        texto:
          "Ojo con la metáfora de la lona, porque tiene trampa: para que la bola hunda la tela " +
          "hace falta una gravedad que tire hacia abajo, así que la imagen usa gravedad para " +
          "explicar la gravedad. Sirve para hacerse una idea, no como explicación literal.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una consecuencia que remata la idea. Si lo que se curva es el espacio, entonces " +
          "<strong>la luz también debería torcerse</strong> al pasar cerca de algo muy masivo. " +
          "Aunque la luz no tenga masa y ninguna fuerza pueda tirar de ella.",
      },
      {
        b: "rayo",
        texto:
          "Según Einstein nada tira de la Tierra. El Sol ha hundido el espacio a su alrededor, y " +
          "la órbita es simplemente la línea más recta que queda disponible.",
      },
      {
        b: "rotulo",
        texto:
          "Un eclipse decidió cuál de los dos tenía razón",
      },
      {
        b: "parrafo",
        texto:
          "La predicción de la luz curvada era comprobable, y además distinguía a los dos rivales " +
          "con un número.",
      },
      {
        b: "parrafo",
        texto:
          "Con la gravedad de Newton, la luz de una estrella que pasara rozando el Sol debía " +
          "desviarse unos 0,83 segundos de arco. Con la de Einstein, 1,75. Exactamente el doble.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es que para ver estrellas junto al Sol hace falta que el Sol se apague. Y " +
          "eso solo ocurre en un eclipse total.",
      },
      {
        b: "parrafo",
        texto:
          "El 29 de mayo de 1919, dos expediciones británicas se repartieron el planeta para " +
          "cazar uno: una a la isla de Príncipe, frente a África, y otra a Sobral, en Brasil. " +
          "Fotografiaron las estrellas alrededor del Sol tapado y compararon sus posiciones con " +
          "las de meses antes.",
      },
      {
        b: "parrafo",
        texto:
          "La luz se había desviado. Y se había desviado el doble de lo que decía Newton.",
      },
      {
        b: "parrafo",
        texto:
          "El anuncio, en noviembre de 1919, convirtió a Einstein en una celebridad mundial de la " +
          "noche a la mañana. Un físico teórico que hasta entonces era conocido en su gremio pasó " +
          "a ocupar las portadas de los periódicos de medio mundo.",
      },
      {
        b: "parrafo",
        texto:
          "¿Sabías que…? Esto no es historia antigua: tu móvil depende de ello. Los satélites de " +
          "GPS llevan relojes que, por la curvatura del espacio-tiempo, se adelantan respecto a " +
          "los de la superficie. Si no se corrigiera ese desfase, la posición que te da el mapa " +
          "se iría desviando kilómetros cada día.",
      },
      {
        b: "rayo",
        texto:
          "En 1919 dos expediciones fotografiaron un eclipse para medir si la luz se torcía. Se " +
          "torció el doble de lo que predecía Newton, y Einstein se hizo famoso en una semana.",
      },
    ],
  },
  {
    id: "por-que-se-corta-la-leche",
    titulo: "Por qué se corta la leche",
    categoria: "Ciencia",
    color: "var(--sage)",
    encargo: "Un chorro de leche cortada cayendo en un vaso, con los grumos separándose del suero a contraluz.",
    fotos: [
      {
        local: portadaLeche,
        autor: "Fotografía de Ly, en Pexels.",
        licencia: "Pexels License",
        fuente: "https://www.pexels.com/photo/8183877/",
        alt: "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de ventana.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* La imagen que pide su texto para DENTRO del tema, todavía sin hacer:
       IMAGEN — sección «El ácido apaga la carga…». Dos viñetas lado a lado: a la izquierda, micelas dispersas con signos negativos y flechas de repulsión entre ellas; a la derecha, las mismas micelas sin carga, apelmazadas en grumos. Es el mecanismo completo del tema en una imagen. Diagrama propio. */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cortar la leche y hacer queso son exactamente lo mismo",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por la parte que lo reordena todo: <strong>cuando se te corta la leche en la " +
          "nevera, está ocurriendo el mismo proceso químico que en una quesería.</strong> No algo " +
          "parecido. El mismo.",
      },
      {
        b: "parrafo",
        texto:
          "La diferencia entre un accidente desagradable y un manjar de doscientos euros el kilo " +
          "no está en la química. Está en quién controla el momento, la temperatura y las " +
          "bacterias implicadas.",
      },
      {
        b: "cita",
        texto:
          "Un queso puede decepcionar. Puede ser soso, puede ser ingenuo, puede ser demasiado " +
          "sofisticado. Y aun así sigue siendo queso: el salto de la leche hacia la inmortalidad.",
        autor: "Clifton Fadiman",
      },
      {
        b: "parrafo",
        texto:
          "Para entender por qué, primero hay que saber qué es la leche, que no es lo que parece.",
      },
      {
        b: "parrafo",
        texto:
          "La leche no es un líquido uniforme. Es una <strong>suspensión</strong>: agua con " +
          "millones de partículas microscópicas flotando dentro, sin llegar a disolverse. Esas " +
          "partículas son grasa y, sobre todo, proteína.",
      },
      {
        b: "parrafo",
        texto:
          "La proteína principal se llama <strong>caseína</strong>, y no anda suelta. Se agrupa " +
          "en paquetes diminutos llamados micelas, que son los que le dan a la leche su color " +
          "blanco opaco. Si no fuera por ellas, la leche sería translúcida.",
      },
      {
        b: "rayo",
        texto:
          "La leche no es un líquido uniforme, sino agua con millones de paquetes de proteína " +
          "flotando. Esos paquetes son los que la vuelven blanca.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que mantiene la leche líquida es la electricidad",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el mecanismo, y es más elegante de lo que uno esperaría de algo que tiene en " +
          "la nevera.",
      },
      {
        b: "parrafo",
        texto:
          "Si millones de partículas de proteína flotan juntas en un vaso, lo lógico sería que " +
          "acabaran chocando y apelmazándose. ¿Por qué no lo hacen? <strong>Es simple:</strong> " +
          "porque se repelen entre sí.",
      },
      {
        b: "parrafo",
        texto:
          "Las micelas de caseína tienen carga eléctrica negativa. Y como dos cargas iguales se " +
          "repelen, cada una empuja a sus vecinas y ninguna consigue pegarse a otra. Ese rechazo " +
          "mutuo, mantenido millones de veces por milímetro cúbico, es lo único que mantiene la " +
          "leche fluida.",
      },
      {
        b: "parrafo",
        texto:
          "Esa carga depende del pH. La leche fresca ronda un pH de 6,6, ligeramente ácido, y a " +
          "ese nivel la caseína está cargada y las micelas se mantienen separadas y en paz.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho de otro modo: la leche no es líquida porque la proteína esté disuelta. Es " +
          "líquida porque la proteína <strong>se está evitando activamente.</strong>",
      },
      {
        b: "rayo",
        texto:
          "La leche se mantiene fluida porque sus partículas de proteína tienen carga negativa y " +
          "se repelen entre ellas. Nada las disuelve: solo se esquivan.",
      },
      {
        b: "rotulo",
        texto:
          "El ácido apaga la carga, y todo se viene abajo",
      },
      {
        b: "parrafo",
        texto:
          "Ahora ya se entiende qué tiene que pasar para que se corte: hay que quitarles la " +
          "carga.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso lo hace el ácido. Concretamente, cuando el pH de la leche baja hasta " +
          "<strong>4,6</strong>, la caseína alcanza lo que los químicos llaman su punto " +
          "isoeléctrico: el nivel en el que su carga neta queda anulada.",
      },
      {
        b: "parrafo",
        texto:
          "Sin carga no hay repulsión. Sin repulsión, las micelas que llevaban toda su existencia " +
          "esquivándose empiezan a chocar y a pegarse unas a otras. Se agrupan en grumos cada vez " +
          "mayores, y esos grumos se separan del agua.",
      },
      {
        b: "parrafo",
        texto:
          "Eso son los cuajos flotando en el suero. Eso es la leche cortada.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y de dónde sale ese ácido? De dos sitios, y esa es la única diferencia entre el " +
          "desastre y el queso.",
      },
      {
        b: "parrafo",
        texto:
          "En la nevera lo fabrican bacterias que llegaron por casualidad. Se comen la lactosa, " +
          "el azúcar de la leche, y expulsan <strong>ácido láctico</strong> como residuo. El pH " +
          "va bajando solo, sin que nadie lo vigile, hasta cruzar el umbral.",
      },
      {
        b: "parrafo",
        texto:
          "En una quesería hacen exactamente eso mismo, pero eligiendo qué bacterias entran, a " +
          "qué temperatura trabajan y cuándo se detiene el proceso. O directamente añadiendo un " +
          "ácido de golpe, que es lo que haces tú al echarle limón a la leche para preparar un " +
          "queso fresco casero.",
      },
      {
        b: "rayo",
        texto:
          "Por debajo de un pH de 4,6 la caseína pierde su carga, deja de repelerse y se " +
          "apelmaza. Ese número es la frontera exacta entre la leche y el queso.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso se corta en el café y no en el vaso",
      },
      {
        b: "parrafo",
        texto:
          "Todo esto explica una escena que habrás visto mil veces: echas leche en el café o en " +
          "el té y aparecen esos grumos en la superficie, aunque la leche estuviera perfectamente " +
          "bien.",
      },
      {
        b: "parrafo",
        texto:
          "No estaba mala. Es que el café es ácido, y el calor acelera el proceso: acerca la " +
          "mezcla al pH crítico mucho más rápido de lo que lo haría en frío.",
      },
      {
        b: "parrafo",
        texto:
          "Por eso la leche recién sacada de la nevera aguanta el café sin problema, y una que " +
          "lleva unos días —con el pH ya un poco más bajo por las bacterias, todavía sin oler " +
          "mal— se corta al primer contacto.",
      },
      {
        b: "parrafo",
        texto:
          "Esa leche del quinto día es tu detector de acidez casero: se corta antes que la fresca " +
          "porque ya venía con parte del camino recorrido.",
      },
      {
        b: "parrafo",
        texto:
          "Y explica también por qué el limón cuaja la leche al instante mientras que en la " +
          "nevera tarda días. No es un fenómeno distinto: es el mismo punto de llegada, alcanzado " +
          "por la vía rápida en lugar de por la lenta.",
      },
      {
        b: "rayo",
        texto:
          "La leche no se corta en el café porque esté mala, sino porque el café es ácido y el " +
          "calor la empuja al pH crítico en segundos.",
      },
    ],
  },
];
