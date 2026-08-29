import type { Short } from "../shorts";
/* Las portadas, empotradas: el artefacto que abre Pablo bloquea cualquier
   imagen de fuera, así que la que él ve tiene que viajar dentro. Las de
   Commons no llevan `import`: se piden por red y `movil.mjs` las empotra. */
import p_la_costra_no_esta_curando_nada from "../../portadas/la-costra-no-esta-curando-nada.avif";
import p_la_gravedad_no_es_una_fuerza from "../../portadas/la-gravedad-no-es-una-fuerza.avif";
import p_el_bostezo_no_tiene_que_ver_con_el_oxigeno from "../../portadas/el-bostezo-no-tiene-que-ver-con-el-oxigeno.avif";
import p_no_crecen_la_piel_se_retira from "../../portadas/no-crecen-la-piel-se-retira.avif";
import p_hay_un_sensor_dentro_del_diente from "../../portadas/hay-un-sensor-dentro-del-diente.avif";
import p_el_dolor_no_esta_donde_lo_notas from "../../portadas/el-dolor-no-esta-donde-lo-notas.avif";
import p_no_es_el_acido_lactico from "../../portadas/no-es-el-acido-lactico.avif";
import p_el_chaval_y_el_helado from "../../portadas/el-chaval-y-el-helado.avif";
import p_el_cafe_no_te_da_energia from "../../portadas/el-cafe-no-te-da-energia.avif";
import p_el_cielo_deberia_ser_violeta from "../../portadas/el-cielo-deberia-ser-violeta.avif";
import p_tres_preguntas_tres_ganadores from "../../portadas/tres-preguntas-tres-ganadores.avif";
import p_la_sal_no_viene_del_mar from "../../portadas/la-sal-no-viene-del-mar.avif";
import p_los_dias_no_los_anos_si from "../../portadas/los-dias-no-los-anos-si.avif";
import p_una_molecula_a_partir_de_los_cuarenta from "../../portadas/una-molecula-a-partir-de-los-cuarenta.avif";
import p_la_miel_no_se_conserva from "../../portadas/la-miel-no-se-conserva.avif";
import p_las_rayas_no_son_un_camuflaje from "../../portadas/las-rayas-no-son-un-camuflaje.avif";
import p_el_amarillo_ya_estaba from "../../portadas/el-amarillo-ya-estaba.avif";
import p_la_cebolla_entera_no_lleva_nada from "../../portadas/la-cebolla-entera-no-lleva-nada.avif";
import p_te_ensenaron_mal_como_se_forma_una_nube from "../../portadas/te-ensenaron-mal-como-se-forma-una-nube.avif";
import p_no_invierten_izquierda_derecha from "../../portadas/no-invierten-izquierda-derecha.avif";
import p_un_flamenco_nace_gris from "../../portadas/un-flamenco-nace-gris.avif";
import p_a_los_tres_anos_te_acordabas from "../../portadas/a-los-tres-anos-te-acordabas.avif";
import p_la_unica_especie_que_se_sonroja from "../../portadas/la-unica-especie-que-se-sonroja.avif";
import p_el_picante_no_es_un_sabor from "../../portadas/el-picante-no-es-un-sabor.avif";
import p_el_picor_lo_pones_tu from "../../portadas/el-picor-lo-pones-tu.avif";
import p_un_patinador_no_derrite_el_hielo from "../../portadas/un-patinador-no-derrite-el-hielo.avif";
import p_la_leche_cortada_es_queso_a_medio_empezar from "../../portadas/la-leche-cortada-es-queso-a-medio-empezar.avif";
import p_el_pan_duro_no_se_ha_secado from "../../portadas/el-pan-duro-no-se-ha-secado.avif";
import p_no_es_falta_de_riego from "../../portadas/no-es-falta-de-riego.avif";
import p_el_conductor_no_se_marea_nunca from "../../portadas/el-conductor-no-se-marea-nunca.avif";
import p_la_cicatriz_de_un_dano from "../../portadas/la-cicatriz-de-un-dano.avif";
import p_en_invierno_estamos_mas_cerca_del_sol from "../../portadas/en-invierno-estamos-mas-cerca-del-sol.avif";
import p_erizar_un_pelaje_que_ya_no_tienes from "../../portadas/erizar-un-pelaje-que-ya-no-tienes.avif";
import p_tiritar_desperdiciar_energia from "../../portadas/tiritar-desperdiciar-energia.avif";
import p_nadie_oyo_su_voz_hasta_1877 from "../../portadas/nadie-oyo-su-voz-hasta-1877.avif";
import p_por_que_vuelan_los_aviones_es_falso from "../../portadas/por-que-vuelan-los-aviones-es-falso.avif";

/* ==========================================================================
   CURIOSIDADES — LO ESCRIBE `scripts/catalogo.mjs`, NO SE EDITA A MANO

   Sale de los `.md` de Pablo, que están en
   `referencia/textos-de-pablo/shorts/` con su cabecera. Para
   rehacerlo:

       node scripts/catalogo.mjs > src/historias/curiosidades.ts

   NO HAY PÁGINAS AQUÍ: la historia viene en bloques seguidos y quien la
   reparte en pantallas es la app, midiendo el móvil de quien lee. Es la
   regla 3 de `.claude/skills/paginado-shorts/SKILL.md`.

   Hoy entran 37 de 106: solo los que tienen portada.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [
  {
    id: "la-costra-no-esta-curando-nada",
    titulo: "Cómo cicatrizan las heridas",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «como-cicatrizan-las-heridas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La costra no está curando nada» */
    encargo: "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en los nudillos.",
    fotos: [
      {
        local: p_la_costra_no_esta_curando_nada,
        autor:
          "Fotografía de MART PRODUCTION, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/7699367/",
        alt:
          "Un puño cerrado visto de cerca, con las costras oscuras de dos heridas recientes en " +
          "los nudillos.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Hace 3.600 años ya sabíamos cerrar heridas, no repararlas",
      },
      {
        b: "parrafo",
        texto:
          "El papiro Edwin Smith, escrito en Egipto hacia el 1600 a.C. y probablemente copiado de " +
          "un texto bastante más antiguo, es el documento quirúrgico más viejo que se conserva. " +
          "Describe cuarenta y ocho casos de heridas, sobre todo en cabeza, cuello y torso, y lo " +
          "hace con una frialdad que sigue sorprendiendo: no hay conjuros ni intervención de los " +
          "dioses, sino exploración, diagnóstico, pronóstico y tratamiento, con vendajes, " +
          "entablillados y medidas para evitar que la herida se infecte. Aquellos médicos " +
          "entendían perfectamente que una herida abierta hay que cerrarla, y que cerrarla " +
          "deprisa salva vidas. Lo que no podían saber, porque nadie lo supo hasta que existieron " +
          "los microscopios, es que cerrar y reparar son dos operaciones distintas separadas por " +
          "meses de trabajo.",
      },
      {
        b: "parrafo",
        texto:
          "Porque la costra que se te forma encima de un corte no es la herida curándose. Es una " +
          "tapa provisional, y su única misión es ganar tiempo. Cuando te cortas, lo primero que " +
          "hace el cuerpo no es reparar nada, sino cerrar el grifo: los vasos de la zona se " +
          "contraen en cuestión de segundos para frenar la salida de sangre, y las plaquetas " +
          "acuden en masa al agujero y se enganchan unas a otras hasta taponarlo, formando un " +
          "coágulo que se refuerza con una malla de fibrina. Ese coágulo, al secarse en la " +
          "superficie en contacto con el aire, es exactamente lo que llamamos costra. Sella la " +
          "brecha, impide el paso a las bacterias y protege lo que hay debajo mientras empieza lo " +
          "importante.",
      },
      {
        b: "rayo",
        texto:
          "La costra es un tapón de emergencia. La reparación de verdad ocurre debajo, y tarda " +
          "muchísimo más de lo que parece.",
      },
      {
        b: "rotulo",
        texto:
          "Debajo hay cuatro fases, y se solapan entre sí",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre bajo esa tapa está bastante mejor organizado de lo que uno imagina, y " +
          "sigue un guion en cuatro etapas que no se turnan limpiamente sino que se pisan unas a " +
          "otras.",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Hemostasia.</strong> Inmediata. Los vasos se contraen y se forma el coágulo. " +
            "Es cuestión de minutos, y es la única fase que se ve desde fuera.",
          "<strong>Inflamación.</strong> Arranca enseguida. Las células defensivas llegan a la " +
            "herida dentro de las primeras veinticuatro horas y se quedan trabajando varios días, " +
            "devorando bacterias y retirando los restos de tejido destrozado. Es la fase " +
            "responsable del enrojecimiento, el calor y la hinchazón, así que una herida que se " +
            "inflama un poco no está estropeándose: está haciendo justo lo que toca.",
          "<strong>Proliferación.</strong> Empieza cuando la limpieza está encaminada. Se " +
            "fabrica tejido nuevo, se tienden vasos sanguíneos para alimentarlo y los bordes de " +
            "la herida empiezan a tirar el uno del otro para reducir el hueco que hay que " +
            "rellenar.",
          "<strong>Remodelado.</strong> Arranca hacia la tercera semana, cuando la superficie " +
            "ya parece resuelta. Y puede durar hasta doce meses.",
        ],
      },
      {
        b: "parrafo",
        texto:
          "Ese último número es el que descoloca a todo el mundo. Cuando la herida ya «parece " +
          "curada», cuando la costra se ha caído sola y en su sitio hay una piel rosada de " +
          "aspecto aceptable, el cuerpo lleva apenas unas semanas de trabajo y le queda casi un " +
          "año por delante. Durante todo ese tiempo el tejido se está reorganizando por dentro " +
          "sin que tú notes absolutamente nada: se retira colágeno mal colocado, se deposita " +
          "otro, se reordenan las fibras y se van cerrando los vasos que sobran. Por eso las " +
          "cicatrices cambian de color y de textura durante meses, pasando del rojo intenso al " +
          "rosa y del rosa a un tono más pálido que el de la piel de alrededor, y por eso ningún " +
          "cirujano da una cicatriz por definitiva hasta que ha pasado un año entero desde la " +
          "lesión.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Arrancar la costra antes de tiempo retrasa el proceso de verdad, no solo " +
          "el estético. Al levantarla te llevas pegado el tejido nuevo que se estaba tendiendo " +
          "debajo, con sus vasos recién construidos, y esa parte hay que rehacerla entera desde " +
          "la fase de inflamación. Cada vez que se repite, el resultado final tiende a ser una " +
          "cicatriz más ancha.",
      },
    ],
  },
  {
    id: "la-gravedad-no-es-una-fuerza",
    titulo: "Cómo funciona la gravedad",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «como-funciona-la-gravedad», número 3. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La gravedad no es una fuerza» */
    encargo: "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral hacia un punto oscuro.",
    fotos: [
      {
        local: p_la_gravedad_no_es_una_fuerza,
        autor: "",
        licencia: "Pendiente de confirmar con Pablo",
        alt:
          "Decenas de líneas finas en rojo, magenta y violeta sobre negro, girando en espiral " +
          "hacia un punto oscuro.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    /* Imagen que pide su texto para DENTRO, todavía sin hacer:
       IMAGEN — lámina tensa deformada por una esfera pesada en el centro, en corte lateral, sin fondo estrellado. Lo importante es la deformación de la malla. Diagrama propio en SVG. */
    bloques: [
      {
        b: "rotulo",
        texto:
          "Nada tira de la Tierra",
      },
      {
        b: "parrafo",
        texto:
          "En 1915 Einstein contestó a la pregunta que Newton había dejado abierta doscientos " +
          "años antes, y lo hizo de la manera más radical posible: tirando la pregunta a la " +
          "basura. Newton quería saber qué fuerza produce la gravedad y por qué actúa a " +
          "distancia. Einstein respondió que no hay tal fuerza, de modo que la pregunta estaba " +
          "mal planteada desde el principio.",
      },
      {
        b: "parrafo",
        texto:
          "Su propuesta fue que la gravedad <strong>no es una fuerza que tire de las " +
          "cosas.</strong> No hay nada agarrando la manzana, ni cuerdas invisibles sujetando a la " +
          "Tierra en su órbita, ni acción a distancia que explicar. Lo que hay es espacio y " +
          "tiempo deformados. La masa curva el espacio-tiempo a su alrededor, igual que una bola " +
          "pesada hunde una lona tensada, y los objetos que pasan por ahí no están siendo " +
          "empujados ni atraídos por nada: siguen el camino más recto disponible en un terreno " +
          "que ha dejado de ser plano. Se mueven en línea recta, solo que la línea recta ya no es " +
          "lo que era.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la Tierra no orbita al Sol porque el Sol la sujete de algún modo. Orbita " +
          "porque el Sol ha hundido el espacio a su alrededor, y en ese espacio hundido la " +
          "trayectoria más recta que existe resulta ser una elipse cerrada. Nadie tira de nada; " +
          "el planeta simplemente va todo lo derecho que se puede ir en el sitio donde está.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene avisar de que la metáfora de la lona tiene una trampa importante, y es de " +
          "esas que conviene señalar en voz alta. Para que la bola hunda la tela hace falta que " +
          "algo tire de ella hacia abajo, es decir, hace falta una gravedad previa: la imagen usa " +
          "la gravedad para explicar la gravedad. Sirve estupendamente para hacerse una idea de " +
          "qué significa que un espacio esté deformado, y no sirve en absoluto como explicación " +
          "literal del mecanismo.",
      },
      {
        b: "rayo",
        texto:
          "Según Einstein nada tira de la Tierra. El Sol ha hundido el espacio a su alrededor, y " +
          "la órbita es la línea más recta que queda disponible.",
      },
      {
        b: "rotulo",
        texto:
          "Un eclipse decidió quién tenía razón",
      },
      {
        b: "parrafo",
        texto:
          "Una teoría tan contraria al sentido común necesitaba algo más que elegancia " +
          "matemática, y afortunadamente hacía una predicción que se podía comprobar. Si lo que " +
          "se curva es el espacio, entonces <strong>la luz también debería torcerse</strong> al " +
          "pasar cerca de algo muy masivo, a pesar de no tener masa y de que ninguna fuerza " +
          "gravitatoria clásica pudiera tirar de ella. Y lo mejor es que la predicción no era " +
          "cualitativa sino numérica, así que distinguía a los dos rivales con una cifra: con la " +
          "gravedad de Newton, la luz de una estrella que pasara rozando el borde del Sol debía " +
          "desviarse 0,83 segundos de arco; con la de Einstein, 1,75. Exactamente el doble.",
      },
      {
        b: "parrafo",
        texto:
          "El problema práctico era considerable, porque para ver estrellas justo al lado del Sol " +
          "hace falta que el Sol se apague, y eso solo ocurre durante los pocos minutos de un " +
          "eclipse total. Así que el 29 de mayo de 1919, dos expediciones británicas se " +
          "repartieron el planeta para cazar uno: una viajó a la isla de Príncipe, frente a la " +
          "costa africana, y otra a Sobral, en el interior de Brasil. Fotografiaron las estrellas " +
          "que rodeaban al Sol tapado y compararon después sus posiciones con las que tenían esas " +
          "mismas estrellas en fotografías tomadas meses antes, cuando el Sol estaba en otra " +
          "parte del cielo.",
      },
      {
        b: "parrafo",
        texto:
          "La luz se había desviado. Y se había desviado el doble de lo que decía Newton, que era " +
          "justo lo que Einstein había predicho cuatro años antes sobre el papel. El anuncio de " +
          "los resultados, en noviembre de 1919, convirtió a Einstein en una celebridad mundial " +
          "en cuestión de días, y lo hizo además en un momento muy particular: un científico " +
          "alemán acababa de ser confirmado por astrónomos británicos apenas un año después de " +
          "que sus dos países terminaran de matarse en las trincheras.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Tu móvil depende de esto. Los satélites del GPS llevan relojes que, por " +
          "estar más lejos de la masa de la Tierra, se adelantan respecto a los de la superficie, " +
          "y el efecto de su velocidad orbital los atrasa un poco menos de lo que aquello los " +
          "adelanta. Si no se corrigiera el desfase neto, el mapa se te iría desviando kilómetros " +
          "cada día.",
      },
      {
        b: "rayo",
        texto:
          "En 1919 dos expediciones fotografiaron un eclipse para medir si la luz se torcía. Se " +
          "torció el doble de lo que predecía Newton.",
      },
    ],
  },
  {
    id: "al-sol-le-quedan-cinco-mil-millones",
    titulo: "Cuánto de vida le queda al Sol",
    categoria: "Ciencia",
    color: "var(--ochre)",
    /* Serie «cuanto-le-queda-al-sol», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Al Sol le quedan cinco mil millones de años. A nosotros, mil» */
    encargo: "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes alrededor del ecuador.",
    fotos: [
      {
        archivo: "Solar Orbiter’s widest high-res view of the Sun ESA508430.jpg",
        autor:
          "La corona solar en ultravioleta: doscientas tomas de la sonda Solar Orbiter cosidas en " +
          "una, 9 de marzo de 2025. Agencia Espacial Europea.",
        licencia: "CC BY-SA 3.0 igo",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Solar_Orbiter%E2%80%99s_widest_high-res_view_of_the_Sun_ESA508430.jpg",
        foco: "50% 50%",
        alt:
          "El disco del Sol en amarillo cálido, con la corona erizada de arcos brillantes " +
          "alrededor del ecuador.",
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
          "damos por sentado que estará ahí siempre, o al menos tanto tiempo que no merece la " +
          "pena dedicarle un pensamiento. Y en parte es cierto: a nuestra estrella le quedan unos " +
          "cinco mil millones de años por delante, una cifra tan desproporcionada respecto a " +
          "cualquier cosa humana que efectivamente equivale a «siempre».",
      },
      {
        b: "parrafo",
        texto:
          "Pero hay un detalle que lo cambia todo, y es que la pregunta que nos interesa no es " +
          "esa. La Tierra habitable —este planeta con agua líquida, con plantas, con animales y " +
          "con nosotros— tiene un plazo mucho más corto: <strong>alrededor de mil millones de " +
          "años.</strong> Cinco veces menos. No estamos hablando del mismo reloj, y confundirlos " +
          "es el error que hace que la cifra grande resulte tranquilizadora. Nuestro plazo se " +
          "agota mucho antes de que a la estrella le ocurra absolutamente nada digno de mención; " +
          "para cuando el Sol empiece a tener problemas de verdad, aquí llevará muchísimo tiempo " +
          "sin haber nadie que lo note.",
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
          "Para entender por qué los dos relojes van tan desacompasados hay que aceptar algo que " +
          "cuesta bastante, porque va contra la imagen que todos tenemos de una estrella estable: " +
          "el Sol no es una bombilla de intensidad fija. Lleva volviéndose más brillante desde el " +
          "día mismo en que se encendió, poquito a poco, sin pausa y sin posibilidad de marcha " +
          "atrás.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y por qué le pasa eso? <strong>Es simple:</strong> en su centro el hidrógeno se " +
          "fusiona en helio, y el helio resultante ocupa menos espacio que el hidrógeno del que " +
          "procede, porque cuatro núcleos de hidrógeno se convierten en uno solo de helio. El " +
          "núcleo tiene entonces menos partículas empujando hacia fuera y el mismo peso encima, " +
          "así que se va comprimiendo bajo su propia gravedad. Al comprimirse se calienta, al " +
          "calentarse fusiona más deprisa, y al fusionar más deprisa alumbra más y aprieta " +
          "todavía un poco más el núcleo. Es un bucle que se alimenta a sí mismo y para el que no " +
          "existe freno posible: la propia manera que tiene el Sol de funcionar es la que lo va " +
          "empujando hacia el final.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí es donde el margen se vuelve angosto de una forma que sorprende. No hace falta " +
          "que el Sol cambie de fase ni que haga nada dramático. Falta poco más de un diez por " +
          "ciento de brillo para que la Tierra deje de ser habitable, y ese diez por ciento llega " +
          "dentro de unos mil millones de años. La estrella seguirá siendo, para cualquier " +
          "observador de fuera, exactamente la misma estrella amarilla y tranquila de siempre.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Cuando se formó la Tierra, el Sol brillaba un treinta por ciento menos " +
          "que hoy. Con aquella estrella más apagada y esta misma atmósfera, la temperatura media " +
          "del planeta habría sido de siete grados bajo cero, y sin embargo hay pruebas de que " +
          "había agua líquida y vida. Ese desajuste tiene nombre propio en astronomía, la " +
          "paradoja del Sol joven y débil, y la explicación más aceptada es que la atmósfera de " +
          "entonces retenía muchísimo más calor que la actual.",
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
    id: "el-bostezo-no-tiene-que-ver-con-el-oxigeno",
    titulo: "Por qué bostezamos",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-bostezamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El bostezo no tiene nada que ver con el oxígeno» */
    encargo: "Un gato atigrado bostezando con la boca muy abierta, visto de perfil.",
    fotos: [
      {
        local: p_el_bostezo_no_tiene_que_ver_con_el_oxigeno,
        autor:
          "Fotografía de Jenny Downing.",
        licencia: "CC BY-SA 2.0",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Tabby_cat-yawning-01.jpg",
        alt:
          "Un gato atigrado bostezando con la boca muy abierta, visto de perfil.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre lleva décadas desmentida",
      },
      {
        b: "parrafo",
        texto:
          "Si le preguntas a cualquiera por qué bostezamos, te dirá lo mismo y con bastante " +
          "seguridad: porque al cuerpo le falta oxígeno, y el bostezo sirve para coger una " +
          "bocanada grande de aire que compense el déficit. Es la respuesta que se enseña en los " +
          "colegios, la que aparece en artículos de revistas y la que repite prácticamente todo " +
          "el mundo. También es la que se desmontó hace décadas, con un experimento que " +
          "cualquiera puede seguir sin saber nada de fisiología.",
      },
      {
        b: "parrafo",
        texto:
          "El psicólogo Robert Provine hizo el planteamiento evidente. Si la teoría fuese cierta, " +
          "tenía que cumplirse una predicción muy concreta: respirar aire cargado de oxígeno " +
          "debería reducir el número de bostezos, porque el supuesto déficit quedaría cubierto, y " +
          "respirar aire con más dióxido de carbono debería dispararlos, porque agravaría el " +
          "problema. Probó las dos cosas, midiendo los bostezos de sus sujetos en cada condición.",
      },
      {
        b: "parrafo",
        texto:
          "No pasó nada. Ni el oxígeno extra los redujo, ni el CO₂ los aumentó. La predicción " +
          "falló en las dos direcciones a la vez, que es la peor manera posible de fallar. " +
          "Después lo intentó por otra vía, con ejercicio físico, que duplica el ritmo " +
          "respiratorio y por tanto debería alterar el sistema de manera evidente, y el resultado " +
          "fue igual de tozudo: la gente respiraba el doble y bostezaba exactamente igual que " +
          "antes.",
      },
      {
        b: "rayo",
        texto:
          "Respirar oxígeno puro no reduce los bostezos, y respirar dióxido de carbono no los " +
          "aumenta. El bostezo y la respiración son sistemas distintos.",
      },
      {
        b: "rotulo",
        texto:
          "Y hay un detalle que remata el asunto",
      },
      {
        b: "parrafo",
        texto:
          "Por si quedaba alguna duda, hay una observación que cierra la puerta del todo: los " +
          "fetos bostezan dentro del útero. Se ve con claridad en las ecografías, es un " +
          "movimiento inconfundible y ocurre desde bastante antes del tercer trimestre. Lo hacen " +
          "cuando sus pulmones todavía no funcionan, cuando están llenos de líquido y no de aire, " +
          "y cuando el oxígeno les llega por el cordón umbilical y no por la boca. Difícilmente " +
          "pueden estar cogiendo aire con un aparato respiratorio que aún no ha entrado en " +
          "servicio.",
      },
      {
        b: "parrafo",
        texto:
          "Además, bostezar no es cosa nuestra ni de los mamíferos: lo hacen las aves, los " +
          "reptiles, los peces y prácticamente todos los vertebrados que se han estudiado a " +
          "fondo. Es uno de los comportamientos más antiguos y más extendidos que existen en el " +
          "árbol de la vida, lo cual sugiere que cumple una función bastante básica y bastante " +
          "importante, porque de lo contrario se habría perdido por el camino en alguna de las " +
          "miles de ramas donde persiste.",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí llega lo verdaderamente incómodo. Después de décadas de estudios, de " +
          "experimentos ingeniosos y de varias hipótesis en competencia, <strong>la ciencia " +
          "todavía no tiene una respuesta con consenso</strong> sobre para qué sirve exactamente. " +
          "Hay candidatas, y alguna bastante sólida con pruebas a favor, pero ninguna se ha " +
          "impuesto del todo ni ha silenciado a sus críticos. Es de esas cosas que hacemos varias " +
          "veces al día, desde antes de nacer y en compañía de medio reino animal, y que siguen " +
          "siendo, en el sentido literal de la palabra, un misterio.",
      },
      {
        b: "rayo",
        texto:
          "Los fetos bostezan antes de que sus pulmones funcionen. Sea lo que sea el bostezo, no " +
          "es una forma de respirar.",
      },
    ],
  },
  {
    id: "no-crecen-la-piel-se-retira",
    titulo: "Por qué crecen las uñas después de morir",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-crecen-las-unas-despues-de-morir», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las uñas no siguen creciendo después de morir» */
    encargo: "Las uñas no siguen creciendo después de morir",
    fotos: [
      {
        local: p_no_crecen_la_piel_se_retira,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las uñas no siguen creciendo después de morir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que crece no es la uña: lo que se encoge es la piel",
      },
      {
        b: "parrafo",
        texto:
          "Es de las creencias más repetidas que existen sobre el cuerpo, y tiene además el punto " +
          "macabro que garantiza que se cuente en cualquier sobremesa: que después de morir, el " +
          "pelo y las uñas siguen creciendo un tiempo. Se dice con la seguridad de quien repite " +
          "un dato médico, y suele venir acompañada de la imagen de un cadáver con las uñas " +
          "largas.",
      },
      {
        b: "parrafo",
        texto:
          "No ocurre. Ni el pelo ni las uñas crecen un milímetro después de la muerte, y la razón " +
          "es de una lógica bastante básica. Una uña no es un mineral que se deposite solo: crece " +
          "porque hay células dividiéndose en la matriz, debajo de la piel, y esas células " +
          "necesitan glucosa para funcionar, además de una regulación hormonal que coordina todo " +
          "el proceso. Al morir el organismo, no llega glucosa, no hay circulación y no hay " +
          "señales hormonales. Las células dejan de dividirse en cuestión de poco tiempo, y sin " +
          "división no hay uña nueva. Lo mismo con el folículo del pelo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí pasa, y es lo que la gente ve, es otra cosa completamente distinta. El " +
          "cuerpo pierde agua deprisa, y al deshidratarse la piel se contrae y se retira. Al " +
          "retraerse alrededor del dedo, deja al descubierto una parte de la uña que antes " +
          "quedaba oculta bajo el pliegue. En la cara ocurre igual: la piel se encoge, el pelo " +
          "que estaba dentro del folículo queda más expuesto y aparece una barba de dos días que " +
          "no existía.",
      },
      {
        b: "parrafo",
        texto:
          "Es exactamente la misma ilusión que hace parecer más largos los dientes de una persona " +
          "muy mayor. No le han crecido los dientes: se le han retraído las encías. Aquí es lo " +
          "mismo, acelerado y en otro sitio.",
      },
      {
        b: "rayo",
        texto:
          "No es que la uña avance. Es que la piel se retira y deja a la vista lo que ya estaba " +
          "ahí.",
      },
      {
        b: "rotulo",
        texto:
          "Un dato falso que se sostiene sobre buena literatura",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena preguntarse por qué una creencia tan fácil de desmontar ha llegado " +
          "hasta aquí, y en este caso se puede rastrear parte del camino.",
      },
      {
        b: "parrafo",
        texto:
          "Uno de los responsables es un pasaje muy conocido de <em>Sin novedad en el " +
          "frente</em>, la novela de Erich Maria Remarque publicada en 1929, donde el narrador " +
          "imagina las uñas de un amigo muerto siguiendo su crecimiento bajo tierra. Es una " +
          "imagen literaria potentísima, de esas que se quedan grabadas, y millones de lectores " +
          "la recibieron como si fuera información y no como lo que era. Después la repitieron " +
          "cómicos, guionistas y conversaciones de sobremesa hasta convertirla en un lugar común.",
      },
      {
        b: "parrafo",
        texto:
          "Y funciona tan bien porque tiene el mejor aval posible: hay quien lo ha visto. " +
          "Cualquiera que haya estado presente en una exhumación, o simplemente haya velado un " +
          "cuerpo, puede confirmar que las uñas se ven más largas. La observación es cierta. Lo " +
          "que está mal es la explicación que se le puso encima, que era la única que se le " +
          "ocurría a alguien sin saber que la piel se contrae al deshidratarse.",
      },
      {
        b: "parrafo",
        texto:
          "Ese es el patrón que se repite en casi todos los mitos de esta clase, y merece la pena " +
          "tenerlo a mano: rara vez la gente se inventa lo que ve. Lo que se inventa es el " +
          "porqué.",
      },
      {
        b: "rayo",
        texto:
          "Nadie mintió sobre lo que veía. Las uñas se ven más largas de verdad. Lo inventado fue " +
          "el motivo.",
      },
    ],
  },
  {
    id: "hay-un-sensor-dentro-del-diente",
    titulo: "Por qué duele el frío en un diente",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-duele-el-frio-en-un-diente», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay un sensor de frío dentro de tus dientes» */
    encargo: "Hay un sensor de frío dentro de tus dientes",
    fotos: [
      {
        local: p_hay_un_sensor_dentro_del_diente,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay un sensor de frío dentro de tus dientes",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Durante sesenta años la explicación fue el movimiento de un líquido",
      },
      {
        b: "parrafo",
        texto:
          "Que un sorbo de agua helada te dispare un latigazo en una muela es una experiencia tan " +
          "común que uno da por hecho que está resuelta desde siempre. No lo estaba. Hasta 2021 " +
          "no se supo cómo funciona, y la explicación que se manejaba mientras tanto era muy " +
          "distinta de lo que uno imaginaría.",
      },
      {
        b: "parrafo",
        texto:
          "La versión clásica se llama <strong>teoría hidrodinámica</strong> y viene de los años " +
          "sesenta. La dentina, la capa que hay bajo el esmalte, no es maciza: está atravesada " +
          "por miles de conductos microscópicos llenos de líquido, que van desde la superficie " +
          "hasta la pulpa, donde están los nervios. La idea era que el frío hace que ese líquido " +
          "se mueva dentro de los túbulos, y que ese movimiento arrastra y deforma mecánicamente " +
          "las terminaciones nerviosas del interior, que responden con dolor. Es decir, el diente " +
          "no notaría el frío: notaría un empujón provocado por el frío.",
      },
      {
        b: "parrafo",
        texto:
          "Encajaba bien con lo que se observa. Explica por qué duele más cuando el esmalte está " +
          "desgastado o hay caries, porque entonces los túbulos quedan abiertos al exterior. " +
          "Explica por qué también molesta el aire frío, o el azúcar, que altera el líquido por " +
          "ósmosis. Y explica por qué el dolor es tan inmediato y tan agudo. Durante sesenta años " +
          "fue la respuesta, aunque nadie hubiera encontrado el mecanismo molecular que la " +
          "sostuviera.",
      },
      {
        b: "rayo",
        texto:
          "La explicación clásica decía que el diente no siente el frío: siente un líquido " +
          "moviéndose por dentro por culpa del frío.",
      },
      {
        b: "rotulo",
        texto:
          "Y en 2021 encontraron el detector",
      },
      {
        b: "parrafo",
        texto:
          "En marzo de 2021, un equipo dirigido por Katharina Zimmermann, en la Universidad de " +
          "Erlangen-Núremberg, publicó en <em>Science Advances</em> algo que nadie había buscado " +
          "en ese sitio. Fueron a mirar los <strong>odontoblastos</strong>, unas células que " +
          "forman una capa entre la pulpa y la dentina y cuyo trabajo conocido era fabricar " +
          "dentina. Células de construcción, no de sensores.",
      },
      {
        b: "parrafo",
        texto:
          "Y resulta que llevan encima un canal iónico llamado <strong>TRPC5</strong> que " +
          "responde al frío. Cuando la temperatura baja, ese canal se abre, la célula se activa y " +
          "dispara una señal que llega a los nervios de la pulpa. O sea que en el diente hay un " +
          "detector de frío de verdad, molecular y específico, en unas células que se creían " +
          "dedicadas a otra cosa.",
      },
      {
        b: "parrafo",
        texto:
          "Lo comprobaron por varios lados. En ratones sin ese canal, la sensibilidad al frío en " +
          "los dientes desaparecía, y en dientes con la dentina expuesta la respuesta era mucho " +
          "mayor, que es exactamente el cuadro clínico de un diente sensible.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene decir cómo queda la teoría antigua, porque no ha caído. Los propios autores " +
          "lo dicen con claridad: el hallazgo no descarta el movimiento de líquido en los " +
          "túbulos, sino que añade un mecanismo que hasta ahora faltaba. Lo más probable es que " +
          "las dos cosas ocurran a la vez y se refuercen.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay un detalle que dice mucho sobre lo poco que sabemos de nuestro propio cuerpo. " +
          "Los dientes son de las partes que más nos duelen, la odontología es una profesión " +
          "antiquísima y estas células estaban perfectamente descritas al microscopio desde hace " +
          "más de un siglo. Nadie había pensado en preguntarles si además sentían.",
      },
      {
        b: "rayo",
        texto:
          "Unas células que se creían dedicadas a fabricar dentina llevaban encima un detector de " +
          "frío, y nadie lo había mirado.",
      },
    ],
  },
  {
    id: "el-dolor-no-esta-donde-lo-notas",
    titulo: "Por qué duele la cabeza al comer helado",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «por-que-duele-la-cabeza-al-comer-helado», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El dolor del helado no está donde lo notas» */
    encargo: "El dolor del helado no está donde lo notas",
    fotos: [
      {
        local: p_el_dolor_no_esta_donde_lo_notas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El dolor del helado no está donde lo notas",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Te duele la frente y el problema está en el paladar",
      },
      {
        b: "parrafo",
        texto:
          "El fenómeno es tan universal que tiene nombre médico, y uno de los mejores que " +
          "existen: <strong>ganglioneuralgia esfenopalatina</strong>. Comes un helado demasiado " +
          "rápido, das un trago largo de granizado, y en cuestión de segundos te llega un dolor " +
          "intenso justo detrás de la frente o en las sienes, que dura entre unos segundos y un " +
          "minuto y se va tan rápido como vino.",
      },
      {
        b: "parrafo",
        texto:
          "Lo primero que hay que deshacer es la localización, porque es completamente engañosa. " +
          "En tu frente no ha pasado absolutamente nada. Ahí no ha llegado nada frío, no hay " +
          "ningún tejido dañado y no hay ningún nervio quejándose de su propia situación. El " +
          "problema entero está ocurriendo unos centímetros más abajo, en el " +
          "<strong>paladar</strong>, que es lo que ha tocado el helado.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sientes es lo que en medicina se llama <strong>dolor referido</strong>: una " +
          "señal que se genera en un sitio y que el cerebro coloca en otro. Ocurre porque la " +
          "información de una zona amplia de la cara viaja por el nervio trigémino, que recoge lo " +
          "que pasa en el paladar y también lo que pasa en la frente y las sienes, y todo eso " +
          "llega a un mismo destino. Cuando le entra una señal de alarma brutal desde una zona " +
          "que casi nunca protesta, el cerebro se equivoca al asignarle un origen y la coloca en " +
          "el territorio del que sí recibe quejas habitualmente. Es el mismo motivo por el que un " +
          "infarto se siente en el brazo izquierdo.",
      },
      {
        b: "rayo",
        texto:
          "En tu frente no ha ocurrido nada. Todo pasa en el paladar, y el cerebro se confunde de " +
          "sitio al colocar el dolor.",
      },
      {
        b: "rotulo",
        texto:
          "Y lo que ocurre en el paladar es un vaivén de vasos",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué pasa exactamente ahí arriba? El frío extremo y repentino provoca una reacción " +
          "vascular en dos tiempos.",
      },
      {
        b: "parrafo",
        texto:
          "Primero, los vasos sanguíneos de la zona se contraen de golpe. Es la respuesta normal " +
          "al frío en cualquier parte del cuerpo: cerrar el grifo para no perder calor. Y a " +
          "continuación, en cuanto el estímulo frío pasa y el tejido empieza a recuperar " +
          "temperatura, esos mismos vasos se dilatan bruscamente, con un rebote más grande de lo " +
          "que estaban antes. Ese vaivén rápido, ocurriendo justo al lado de terminaciones " +
          "nerviosas muy sensibles, es lo que dispara la señal.",
      },
      {
        b: "parrafo",
        texto:
          "Esto se ha medido, y esa es la parte que lo eleva de anécdota a fisiología. Usando " +
          "ecografía Doppler transcraneal, que permite ver el flujo de sangre en las arterias del " +
          "interior del cráneo en tiempo real, el investigador Jorge Serrador observó un aumento " +
          "brusco y muy marcado del flujo en la <strong>arteria cerebral anterior</strong> " +
          "coincidiendo con la aparición del dolor. Y el dato que cierra el argumento: cuando esa " +
          "arteria volvía a contraerse, el dolor desaparecía. Aparece con la dilatación y se va " +
          "con la constricción, en tiempo real.",
      },
      {
        b: "parrafo",
        texto:
          "De ahí sale también el remedio que sí funciona, y que ahora se entiende: presionar la " +
          "lengua contra el paladar o beber algo templado. No estás distrayéndote del dolor, " +
          "estás calentando la zona y devolviendo los vasos a su estado normal antes de que se " +
          "produzca el rebote.",
      },
      {
        b: "rayo",
        texto:
          "Se ve en el Doppler: el dolor aparece cuando la arteria se dilata y desaparece cuando " +
          "vuelve a cerrarse.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Ese trabajo no se hizo por curiosidad sobre los helados. Las personas " +
          "que sufren migrañas son más propensas a este dolor, y la sospecha es que parte de lo " +
          "que ocurre aquí se parece a lo que ocurre en una migraña. La gracia es que este se " +
          "puede provocar a voluntad en un laboratorio, en segundos y sin dañar a nadie, y eso lo " +
          "convierte en un modelo utilísimo para estudiar un dolor de cabeza que de otro modo hay " +
          "que esperar a que llegue.",
      },
    ],
  },
  {
    id: "no-es-el-acido-lactico",
    titulo: "Por qué duelen las agujetas",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-duelen-las-agujetas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las agujetas no son ácido láctico, y basta con mirar el reloj» */
    encargo: "Las agujetas no son ácido láctico, y basta con mirar el reloj",
    fotos: [
      {
        local: p_no_es_el_acido_lactico,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las agujetas no son ácido láctico, y basta con mirar el reloj",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El desmentido no necesita laboratorio: necesita un reloj",
      },
      {
        b: "parrafo",
        texto:
          "De todos los mitos que se siguen enseñando en clase de educación física, este es " +
          "probablemente el más resistente. Las agujetas, dice la versión popular, son ácido " +
          "láctico acumulado en el músculo después del esfuerzo. Y en España hay además una " +
          "variante todavía más gráfica: que ese ácido cristaliza formando agujitas microscópicas " +
          "que arañan el músculo por dentro, de donde vendría el nombre. Hay incluso un remedio " +
          "asociado, el del vaso de agua con azúcar, que supuestamente disolvería esos cristales.",
      },
      {
        b: "parrafo",
        texto:
          "Para desmontarlo no hace falta ningún experimento sofisticado. Basta con poner las dos " +
          "cosas en una línea de tiempo. El lactato que produce tu músculo durante un esfuerzo " +
          "intenso se aclara de la sangre en cuestión de minutos, y como mucho de una hora tras " +
          "terminar. Las agujetas, en cambio, ni siquiera han empezado en ese momento: aparecen " +
          "al día siguiente, alcanzan su punto máximo entre las veinticuatro y las setenta y dos " +
          "horas, y pueden durar varios días.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que cuando empieza el dolor hace muchísimo que no queda lactato ahí. Y cuando " +
          "había lactato de sobra, justo al terminar el ejercicio, no dolía nada. La supuesta " +
          "causa desaparece antes de que exista el efecto, y eso, en cualquier investigación, es " +
          "motivo suficiente para descartar a un sospechoso.",
      },
      {
        b: "parrafo",
        texto:
          "Lo de los cristales tiene todavía menos recorrido: el lactato es muy soluble y a la " +
          "temperatura y el pH de un músculo vivo no cristaliza. No hay agujas. Y el azúcar del " +
          "vaso de agua no llega a disolver nada porque no hay nada que disolver.",
      },
      {
        b: "rayo",
        texto:
          "El lactato se ha ido en menos de una hora. Las agujetas llegan al día siguiente. La " +
          "causa desaparece antes de que aparezca el efecto.",
      },
      {
        b: "rotulo",
        texto:
          "De dónde salió la idea, que también tiene su historia",
      },
      {
        b: "parrafo",
        texto:
          "Un mito tan extendido casi siempre tiene un origen respetable, y este lo tiene. A " +
          "principios del siglo XX, el fisiólogo británico Archibald Hill y el alemán Otto " +
          "Meyerhof estudiaron la relación entre el ácido láctico y la contracción muscular, " +
          "trabajando con músculo de rana aislado. Sus experimentos eran buenos y les valieron un " +
          "Nobel; el problema es lo que se hizo después con ellos.",
      },
      {
        b: "parrafo",
        texto:
          "Aquellos resultados describían el comportamiento de un músculo de anfibio separado del " +
          "animal, y se extrapolaron sin más a un mamífero vivo y entero, que es un sistema con " +
          "circulación, con hígado, con corazón y con una capacidad de retirar y reutilizar " +
          "lactato que un músculo aislado en una cubeta no tiene. Y de ahí se dio un segundo " +
          "salto todavía más largo: pasar de «el lactato tiene que ver con la fatiga durante el " +
          "esfuerzo» a «el lactato causa el dolor que aparece dos días después». Son dos " +
          "afirmaciones distintas y solo la primera tenía algo detrás.",
      },
      {
        b: "parrafo",
        texto:
          "Esa explicación fue la aceptada en los círculos científicos hasta los años setenta, y " +
          "el mecanismo real de las agujetas no empezó a perfilarse hasta los ochenta. Es decir, " +
          "no estamos ante una tontería popular: estamos ante una hipótesis científica seria que " +
          "se quedó anticuada y que la cultura general no se ha enterado de jubilar. Cincuenta " +
          "años después sigue en los gimnasios.",
      },
      {
        b: "rayo",
        texto:
          "No es una tontería popular. Es una hipótesis científica de hace un siglo que se jubiló " +
          "en los años setenta y que nadie avisó de retirar.",
      },
    ],
  },
  {
    id: "el-chaval-y-el-helado",
    titulo: "Por qué el agua caliente se congela antes",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-el-agua-caliente-se-congela-antes», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un estudiante al que su profesor humilló tiene su nombre en la física» */
    encargo: "Un estudiante al que su profesor humilló tiene su nombre en la física",
    fotos: [
      {
        local: p_el_chaval_y_el_helado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un estudiante al que su profesor humilló tiene su nombre en la física",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Se saltó un paso porque tenía prisa por coger sitio",
      },
      {
        b: "parrafo",
        texto:
          "En 1963, en un internado de Tanzania, un chaval llamado Erasto Mpemba estaba haciendo " +
          "helado casero en clase de cocina. La receta era sencilla: hervir leche con azúcar, " +
          "dejarla enfriar y meterla en el congelador. El problema era que había un solo " +
          "congelador y muchos alumnos, y ese día el sitio se estaba acabando.",
      },
      {
        b: "parrafo",
        texto:
          "Mpemba se saltó el paso de dejar enfriar. Metió su mezcla directamente hirviendo, " +
          "junto a las bandejas de sus compañeros, que habían hecho las cosas bien. Y cuando " +
          "fueron a mirar, la suya se había convertido en helado mientras las demás seguían " +
          "siendo un líquido espeso.",
      },
      {
        b: "parrafo",
        texto:
          "Le preguntó a su profesor de ciencias cómo era posible aquello. La respuesta que " +
          "recibió está registrada y es de esas que a uno le gustaría no haber dado: le dijo que " +
          "eso sería la física de Mpemba, no la física universal. La frase se convirtió en la " +
          "broma de la clase, y a partir de entonces, cada vez que el chaval se equivocaba en " +
          "algo, sus compañeros lo atribuían a las matemáticas de Mpemba o a la física de Mpemba.",
      },
      {
        b: "rayo",
        texto:
          "«Eso será la física de Mpemba, no la física universal». Es lo que le contestó su " +
          "profesor, y hoy el efecto se llama así.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hizo después es lo que merece contarse",
      },
      {
        b: "parrafo",
        texto:
          "Lo interesante de la historia no es la anécdota del helado, que es una casualidad. Es " +
          "lo que hizo el chico con la burla, que fue exactamente lo contrario de lo que hace " +
          "casi todo el mundo: en vez de dejarlo estar, repitió el experimento. Y no ya con leche " +
          "y azúcar, sino con agua, que era la manera de quitar de en medio los ingredientes y " +
          "quedarse con el fenómeno limpio. Siguió obteniendo el mismo resultado.",
      },
      {
        b: "parrafo",
        texto:
          "Un tiempo después, un físico llamado Denis Osborne visitó el instituto para dar una " +
          "charla, y al terminar Mpemba le hizo la pregunta delante de todos. Y aquí está el " +
          "segundo personaje de la historia, porque Osborne podría haberse reído igual que el " +
          "profesor y no lo hizo: le pareció un asunto interesante, le dijo que no lo sabía y se " +
          "lo llevó al laboratorio de la Universidad de Dar es Salaam para comprobarlo en serio.",
      },
      {
        b: "parrafo",
        texto:
          "En 1969 publicaron juntos un artículo en una revista de enseñanza de la física, " +
          "firmado por los dos, alumno y científico. De ahí viene el nombre con el que el " +
          "fenómeno se conoce en todo el mundo.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene añadir un detalle que le quita solemnidad al asunto y no se la quita al " +
          "chico. La observación no era nueva en absoluto: Aristóteles ya la había recogido, y " +
          "siglos después la mencionaron también Francis Bacon y René Descartes. Llevaba más de " +
          "dos mil años apareciendo y desapareciendo de los textos sin que nadie la resolviera. " +
          "Lo que hizo Mpemba fue devolverla al laboratorio, y lo hizo desde el peor sitio " +
          "posible para que te tomen en serio.",
      },
      {
        b: "rayo",
        texto:
          "Aristóteles ya lo había escrito. Hicieron falta dos mil trescientos años y un " +
          "adolescente al que se rieron para que alguien lo midiera.",
      },
    ],
  },
  {
    id: "el-cafe-no-te-da-energia",
    titulo: "Por qué el café te despierta",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-el-cafe-te-despierta», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El café no te da energía: te tapa el cansancio» */
    encargo: "El café no te da energía: te tapa el cansancio",
    fotos: [
      {
        local: p_el_cafe_no_te_da_energia,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El café no te da energía: te tapa el cansancio",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Un poeta le regaló los granos al químico que la encontró",
      },
      {
        b: "parrafo",
        texto:
          "La cafeína la aisló Friedlieb Ferdinand Runge en 1819, y el encargo se lo hizo Goethe. " +
          "La escena está documentada por el propio Runge y es magnífica: el químico, que " +
          "entonces era un desconocido, le demostró al poeta cómo un extracto de belladona " +
          "dilataba la pupila de un gato. Goethe se quedó impresionado, le dio una caja de granos " +
          "de café y le dijo que también podía usarlos en sus investigaciones. Unos meses " +
          "después, Runge había aislado la sustancia.",
      },
      {
        b: "parrafo",
        texto:
          "Doscientos años más tarde es la droga psicoactiva más consumida del planeta, y casi " +
          "todo el mundo se equivoca sobre lo que hace. La creencia general es que aporta " +
          "energía, que es una especie de gasolina que le echas al organismo por la mañana. Y no " +
          "es eso en absoluto: la cafeína no aporta absolutamente nada. Lo que hace es impedir " +
          "que te enteres de lo cansado que estás.",
      },
      {
        b: "parrafo",
        texto:
          "Para entenderlo hay que conocer a la molécula a la que le roba el sitio. Se llama " +
          "<strong>adenosina</strong>, y es un producto del propio funcionamiento de tus " +
          "neuronas: cuanto más rato llevas despierto y más trabaja tu cerebro, más adenosina se " +
          "va acumulando. Esa adenosina se acopla a unos receptores concretos de las neuronas y, " +
          "al hacerlo, las frena. Ese frenado es exactamente la sensación de sueño. La adenosina " +
          "es el contador que lleva la cuenta de cuánto llevas funcionando, y el sueño es la " +
          "factura.",
      },
      {
        b: "parrafo",
        texto:
          "La cafeína se parece lo bastante a la adenosina como para encajar en esos mismos " +
          "receptores, pero no lo bastante como para activarlos. Entra, ocupa el sitio y no hace " +
          "nada, como una llave que entra en la cerradura y no gira. Mientras esté ahí, la " +
          "adenosina que llega no encuentra dónde acoplarse y el freno no se aplica.",
      },
      {
        b: "rayo",
        texto:
          "La cafeína no te acelera. Ocupa el sitio donde tendría que acoplarse la señal de " +
          "sueño, y esa señal no llega.",
      },
      {
        b: "rotulo",
        texto:
          "El cansancio sigue acumulándose detrás de la puerta",
      },
      {
        b: "parrafo",
        texto:
          "Y aquí está la parte que casi nadie tiene en cuenta, que es lo que ocurre con la " +
          "adenosina bloqueada. Porque no desaparece: sigue produciéndose y sigue acumulándose " +
          "todo el rato que dura el efecto, solo que no puede acoplarse a ningún sitio y por " +
          "tanto no la notas.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando el hígado va metabolizando la cafeína y los receptores empiezan a quedarse " +
          "libres, toda esa adenosina acumulada durante horas encuentra sitio de golpe. Y de " +
          "golpe es la expresión exacta: no vuelves al nivel de cansancio que tenías antes del " +
          "café, sino al que te correspondería por todo el tiempo transcurrido, entregado de una " +
          "vez. Eso es el bajón de media tarde, y no es que el café «se gaste»: es la factura que " +
          "se había quedado esperando en el buzón.",
      },
      {
        b: "parrafo",
        texto:
          "Ese es también el motivo por el que un café a última hora sale caro aunque te ayude en " +
          "el momento. La cafeína tiene una vida media de unas cinco horas, lo que significa que " +
          "la mitad de lo que te tomaste a las cuatro de la tarde sigue circulando a las nueve de " +
          "la noche, y una cuarta parte a las dos de la madrugada. No está haciendo nada bueno " +
          "por ti a esas horas; simplemente sigue ocupando receptores.",
      },
      {
        b: "rayo",
        texto:
          "El bajón de la tarde no es que se te acabe el café. Es toda la adenosina que se había " +
          "quedado esperando, entrando a la vez.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Con el consumo habitual, el cerebro responde a ese bloqueo permanente " +
          "fabricando más receptores de adenosina, para compensar. Eso explica las dos cosas que " +
          "le pasan a cualquier cafetero: que cada vez necesite más para notar lo mismo, y que el " +
          "día que no lo toma le duela la cabeza y se sienta hecho polvo. No es que el café le " +
          "siente bien; es que ya solo con él llega a su estado normal.",
      },
    ],
  },
  {
    id: "el-cielo-deberia-ser-violeta",
    titulo: "Por qué el cielo es azul",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-el-cielo-es-azul», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Según la física, el cielo debería ser violeta» */
    encargo: "Según la física, el cielo debería ser violeta",
    fotos: [
      {
        local: p_el_cielo_deberia_ser_violeta,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Según la física, el cielo debería ser violeta",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La regla que explica el azul explica demasiado",
      },
      {
        b: "parrafo",
        texto:
          "La explicación estándar de por qué el cielo es azul es correcta y se puede resumir en " +
          "una línea: las moléculas del aire dispersan mucho más las longitudes de onda cortas " +
          "que las largas, así que el azul rebota por todo el cielo mientras el rojo sigue de " +
          "largo. La proporción exacta la fijó lord Rayleigh, y es brutal: la dispersión es " +
          "inversamente proporcional a la cuarta potencia de la longitud de onda. Eso significa " +
          "que una diferencia pequeña en el color se convierte en una diferencia enorme en cuánto " +
          "se dispersa.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece en cuanto aplicas esa regla hasta el final, y es una de esas " +
          "objeciones que un niño hace sin esfuerzo y un adulto se salta sin darse cuenta. El " +
          "azul está en torno a los 450 nanómetros. El violeta, en torno a los 400, es decir, " +
          "todavía más corto. Si la regla dice que cuanto más corta es la onda más se dispersa, " +
          "entonces el violeta debería dispersarse aproximadamente una vez y media más que el " +
          "azul. El cielo no debería ser azul: debería ser violeta, y bastante intenso.",
      },
      {
        b: "parrafo",
        texto:
          "Y no lo es. Así que la explicación de manual, siendo cierta, está incompleta, y lo que " +
          "falta no es un detalle: es todo un segundo capítulo.",
      },
      {
        b: "rayo",
        texto:
          "El violeta se dispersa más que el azul. Si la dispersión fuera lo único que cuenta, el " +
          "cielo sería violeta.",
      },
      {
        b: "rotulo",
        texto:
          "Faltan tres cosas, y una de ellas eres tú",
      },
      {
        b: "parrafo",
        texto:
          "La respuesta completa tiene tres piezas, y ninguna está en el aire.",
      },
      {
        b: "parrafo",
        texto:
          "La primera está en el Sol. La luz solar no lleva la misma cantidad de cada color: su " +
          "emisión no es plana, y hay bastante menos violeta que azul saliendo de la estrella. Da " +
          "igual que el violeta se disperse una vez y media mejor si de entrada hay menos violeta " +
          "con el que trabajar. La regla multiplica, pero multiplica sobre lo que hay.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda está en la parte alta de la atmósfera, que absorbe una porción de la luz " +
          "más energética antes de que llegue abajo. Otro mordisco al violeta que ya venía " +
          "escaso.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera está en tu ojo, que es la que hace que esto deje de ser un problema de " +
          "física y pase a ser también un problema de percepción. Tu retina no mide longitudes de " +
          "onda: tiene tres tipos de conos con sensibilidades distintas y solapadas, y el color " +
          "que percibes es el resultado de comparar cuánto se ha excitado cada uno. Ante la " +
          "mezcla que llega del cielo —mucho azul, algo de violeta, un poco de todo lo demás— tus " +
          "conos responden de una manera que el cerebro traduce como azul. La sensibilidad al " +
          "violeta puro, además, es notablemente más baja que al azul.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la pregunta «¿de qué color es el cielo?» no tiene una respuesta que dependa " +
          "solo del cielo. El cielo emite una mezcla concreta de longitudes de onda, y azul es el " +
          "nombre que le pone tu sistema visual a esa mezcla. Un animal con otros conos vería " +
          "otra cosa mirando exactamente el mismo aire.",
      },
      {
        b: "rayo",
        texto:
          "El color del cielo no está solo en el cielo. La mitad de la respuesta está en cómo son " +
          "el Sol y tus ojos.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? De la misma regla salen los atardeceres. Cuando el Sol está bajo, su luz " +
          "atraviesa muchísimo más aire para llegar a ti, y por el camino se va dispersando lo " +
          "que más se dispersa, que es el azul. Lo que sobrevive al viaje y te llega directo es " +
          "lo que menos se dispersaba: el rojo y el naranja. El atardecer no es un fenómeno " +
          "distinto del cielo azul, es el mismo visto desde el otro lado.",
      },
    ],
  },
  {
    id: "tres-preguntas-tres-ganadores",
    titulo: "Por qué el Everest no es la más alta",
    categoria: "Planeta Tierra",
    color: "var(--teal)",
    /* Serie «por-que-el-everest-no-es-la-mas-alta», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El Everest solo gana una de las tres maneras de medir» */
    encargo: "El Everest solo gana una de las tres maneras de medir",
    fotos: [
      {
        local: p_tres_preguntas_tres_ganadores,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El Everest solo gana una de las tres maneras de medir",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta parece una sola y en realidad son tres",
      },
      {
        b: "parrafo",
        texto:
          "«¿Cuál es la montaña más alta del mundo?» suena a pregunta con una respuesta, de esas " +
          "que vienen en los libros de récords y no admiten discusión. Pero esconde una trampa " +
          "que nadie señala, y es que no dice desde dónde se mide. Y resulta que hay tres formas " +
          "razonables de medir la altura de una montaña, cada una responde a una pregunta " +
          "distinta, y cada una tiene un ganador diferente.",
      },
      {
        b: "parrafo",
        texto:
          "La primera es la que todos damos por supuesta: <strong>la altura sobre el nivel del " +
          "mar</strong>. Ahí gana el Everest, con unos 8.848 metros, y por eso es el que sale en " +
          "los libros. Es la medida que le importa a un montañero, porque es la que determina " +
          "cuánto oxígeno hay arriba y lo que cuesta llegar.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda es la que usaría cualquiera que mirase una montaña como se mira un " +
          "edificio: <strong>desde su base hasta su cumbre</strong>. Y ahí el Everest pierde, " +
          "porque su base ya está a más de cinco mil metros de altitud, sobre una meseta que le " +
          "regala la mitad del trabajo. El ganador es el Mauna Kea, en Hawái, que sobresale del " +
          "agua solo unos 4.200 metros pero cuya base está en el fondo del Pacífico. Medido " +
          "entero, de base a cumbre, pasa de los diez mil metros y le saca más de un kilómetro al " +
          "Everest. Lo que ocurre es que casi todo el edificio está bajo el agua.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera es la que haría alguien que mirase el planeta desde fuera: <strong>qué " +
          "punto está más lejos del centro de la Tierra</strong>. Ahí no gana ninguno de los dos.",
      },
      {
        b: "rayo",
        texto:
          "Tres formas de medir una montaña y tres ganadores distintos. El Everest solo gana en " +
          "una.",
      },
      {
        b: "rotulo",
        texto:
          "El punto más alejado del centro está en Ecuador",
      },
      {
        b: "parrafo",
        texto:
          "El tercer ganador es el Chimborazo, un volcán de Ecuador que se queda en 6.268 metros " +
          "sobre el nivel del mar, es decir, más de dos kilómetros y medio por debajo del " +
          "Everest. Y aun así, su cumbre está <strong>2.072 metros más lejos del centro de la " +
          "Tierra</strong> que la del Everest.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación es que la Tierra no es una esfera. Gira, y esa rotación la abomba por " +
          "el ecuador, dejándola más ancha por la cintura que de polo a polo. La diferencia es de " +
          "unos veintiún kilómetros, que sobre el tamaño del planeta es poco en proporción y es " +
          "muchísimo comparado con cualquier montaña. El Chimborazo está prácticamente encima de " +
          "esa panza, a un grado del ecuador, y el Everest está bastante más al norte, sobre una " +
          "zona del planeta que ya se ha estrechado.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el Chimborazo parte con una ventaja enorme antes de empezar a subir: el suelo " +
          "sobre el que se apoya ya está más lejos del centro que la cumbre del Everest. Es una " +
          "carrera en la que uno de los dos empieza dos kilómetros por delante.",
      },
      {
        b: "parrafo",
        texto:
          "Y de ahí sale la frase que mejor lo resume: la cumbre del Chimborazo es el punto de la " +
          "superficie terrestre más cercano al espacio. Si te subes ahí, ningún ser humano en el " +
          "planeta está en ese momento más lejos del centro de la Tierra que tú, ni siquiera el " +
          "que esté haciendo cumbre en el Everest.",
      },
      {
        b: "rayo",
        texto:
          "El Chimborazo es dos kilómetros y medio más bajo que el Everest, y su cumbre está dos " +
          "kilómetros más lejos del centro del planeta.",
      },
    ],
  },
  {
    id: "la-sal-no-viene-del-mar",
    titulo: "Por qué el mar es salado",
    categoria: "Planeta Tierra",
    color: "var(--ochre)",
    /* Serie «por-que-el-mar-es-salado», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La sal del mar no viene del mar» */
    encargo: "La sal del mar no viene del mar",
    fotos: [
      {
        local: p_la_sal_no_viene_del_mar,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La sal del mar no viene del mar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La trajo la lluvia, piedra a piedra",
      },
      {
        b: "parrafo",
        texto:
          "Uno da por hecho que la sal es una propiedad del mar, algo que forma parte de su " +
          "naturaleza igual que el agua o el oleaje. Y no es así en absoluto: casi toda esa sal " +
          "estuvo antes en tierra firme, dentro de las rocas, y hasta el mar la llevaron los " +
          "ríos. Los mismos ríos que llamamos de agua dulce.",
      },
      {
        b: "parrafo",
        texto:
          "El proceso empieza con la lluvia, y empieza porque la lluvia no es agua pura. Al caer, " +
          "el agua disuelve dióxido de carbono de la atmósfera y se vuelve ligeramente ácida. No " +
          "lo bastante para notarlo, pero sí lo bastante para atacar la roca sobre la que cae, " +
          "lentamente y sin parar. Ese ataque va arrancando iones de los minerales —sodio, cloro, " +
          "calcio, magnesio, potasio— y esos iones quedan disueltos en el agua que escurre.",
      },
      {
        b: "parrafo",
        texto:
          "Después llega la parte de logística. El agua de escorrentía baja a los arroyos, los " +
          "arroyos a los ríos y los ríos al mar, arrastrando en disolución todo lo que han ido " +
          "arrancando por el camino. Un río lleva una cantidad de sal tan pequeña que no la notas " +
          "al beber, y por eso lo llamamos dulce; pero lleva algo, y lleva ese algo todos los " +
          "días desde hace miles de millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "Y en el mar ocurre lo que cierra el circuito. El agua se evapora y vuelve a la " +
          "atmósfera, pero la sal no se evapora: se queda. Entra agua con sal disuelta, sale agua " +
          "sin sal, y lo que queda dentro se va concentrando. El océano funciona, en ese sentido, " +
          "como una olla puesta al fuego a la que no dejas de añadirle caldo.",
      },
      {
        b: "rayo",
        texto:
          "El mar no fabrica sal. Lleva miles de millones de años recibiéndola de tierra firme y " +
          "quedándosela cuando el agua se evapora.",
      },
      {
        b: "rotulo",
        texto:
          "Y hay una segunda fuente en el fondo",
      },
      {
        b: "parrafo",
        texto:
          "La historia de los ríos es la principal y es la que explica el grueso del asunto, pero " +
          "se quedaría coja sin la otra mitad, que ocurre donde nadie la ve.",
      },
      {
        b: "parrafo",
        texto:
          "En las dorsales oceánicas, esas cordilleras submarinas donde la corteza se está " +
          "creando, el agua del mar se filtra por las grietas de la roca, baja hasta zonas " +
          "próximas al magma y se calienta muchísimo. El agua caliente y a presión es un " +
          "disolvente extraordinariamente agresivo, así que ataca la roca volcánica que atraviesa " +
          "y le arranca minerales. Y luego vuelve a salir por las fuentes hidrotermales cargada " +
          "con todo eso. Es la misma operación que hace la lluvia sobre los continentes, hecha " +
          "bajo el agua, a temperaturas absurdas y con la roca recién salida del horno.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado global de las dos vías es un mar con unos 35 gramos de sal por cada kilo " +
          "de agua. Esa cifra cuesta de dimensionar hasta que la conviertes en algo que se pueda " +
          "ver, así que aquí va la conversión del Servicio Geológico de Estados Unidos: si " +
          "sacaras toda la sal disuelta en los océanos y la extendieras uniformemente sobre la " +
          "superficie de todas las tierras emergidas del planeta, formaría una capa de más de " +
          "ciento sesenta metros de espesor. Un edificio de cuarenta plantas, sobre cada metro " +
          "cuadrado de tierra firme del mundo.",
      },
      {
        b: "rayo",
        texto:
          "Toda la sal del océano, repartida sobre las tierras emergidas, formaría una capa de " +
          "más de ciento sesenta metros.",
      },
    ],
  },
  {
    id: "los-dias-no-los-anos-si",
    titulo: "Por qué el tiempo pasa más rápido",
    categoria: "Cuerpo humano",
    color: "var(--plum)",
    /* Serie «por-que-el-tiempo-pasa-mas-rapido», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Los días no se te pasan más rápido: se te pasan los años» */
    encargo: "Los días no se te pasan más rápido: se te pasan los años",
    fotos: [
      {
        local: p_los_dias_no_los_anos_si,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Los días no se te pasan más rápido: se te pasan los años",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Una contradicción que casi nadie nota",
      },
      {
        b: "parrafo",
        texto:
          "Hay una frase que la gente repite sin darse cuenta de que se contradice: que los días " +
          "se hacen eternos y los años vuelan. Un martes cualquiera de febrero puede resultar " +
          "interminable, y sin embargo diciembre llega con la sensación de que el año entero ha " +
          "durado tres semanas. Las dos cosas se dicen a la vez y las dos se sienten como verdad.",
      },
      {
        b: "parrafo",
        texto:
          "No es una contradicción: son dos operaciones distintas del cerebro. Una es la " +
          "percepción del tiempo <strong>mientras pasa</strong>, que depende sobre todo de cuánta " +
          "atención le estás prestando al propio paso del tiempo; por eso una cola aburrida se " +
          "hace larguísima y una conversación buena se pasa volando, y por eso mirar el reloj lo " +
          "empeora todo. La otra es el juicio <strong>retrospectivo</strong>, la estimación que " +
          "haces al mirar hacia atrás sobre cuánto ha durado un periodo que ya terminó. Y es en " +
          "esta segunda donde ocurre lo de la edad.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación clásica de por qué los años se aceleran la propuso el filósofo Paul " +
          "Janet en 1877, y es puramente aritmética. Cada año que vives es una fracción menor de " +
          "todo lo que has vivido. Para un niño de cinco años, un año es la quinta parte de su " +
          "vida entera, un bloque enorme. Para alguien de cincuenta es la quincuagésima parte, un " +
          "dos por ciento. Si el cerebro mide los periodos en proporción a lo que ya tiene " +
          "almacenado, cada año se va empequeñeciendo por pura división.",
      },
      {
        b: "rayo",
        texto:
          "Un año es el veinte por ciento de la vida de un niño de cinco años. Para uno de " +
          "cincuenta es el dos por ciento.",
      },
      {
        b: "rotulo",
        texto:
          "Y ahora la parte incómoda: el efecto es más pequeño de lo que crees",
      },
      {
        b: "parrafo",
        texto:
          "La teoría proporcional es elegante, se cuenta muy bien y tiene un problema serio: no " +
          "la respalda gran cosa. Es una analogía matemática, no un mecanismo. Nadie ha " +
          "demostrado que el cerebro divida periodos entre la edad, y de hecho la explicación " +
          "predice una aceleración suave y constante que no encaja del todo con lo que la gente " +
          "describe.",
      },
      {
        b: "parrafo",
        texto:
          "Pero el problema mayor está antes, y afecta al fenómeno entero. En 2005, Marc Wittmann " +
          "y Sandra Lehnhoff hicieron el estudio que faltaba: preguntaron a <strong>499 personas " +
          "de entre catorce y noventa y cuatro años</strong> por su percepción del paso del " +
          "tiempo, tanto en el momento como en retrospectiva. El resultado confirma que la " +
          "sensación existe y que efectivamente aumenta con la edad. Y añade un dato que casi " +
          "nunca se cita: la edad explicaba, como mucho, un diez por ciento de la variación entre " +
          "unas personas y otras.",
      },
      {
        b: "parrafo",
        texto:
          "Léelo despacio, porque cambia bastante el tamaño del asunto. El noventa por ciento " +
          "restante de la diferencia entre una persona que siente que el tiempo vuela y otra que " +
          "no depende de otras cosas: de cómo vive, de cuánta presión tiene, de a qué dedica los " +
          "días. La edad participa, pero no manda. Los propios autores advierten de que sus " +
          "interpretaciones hay que tomarlas con cautela por las limitaciones del método.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que la frase «cuanto mayor eres, más rápido se te pasa el tiempo» es cierta como " +
          "tendencia general y bastante floja como explicación de tu caso concreto. Es un efecto " +
          "real y modesto que se cuenta habitualmente como si fuera una ley.",
      },
      {
        b: "rayo",
        texto:
          "La edad explica como mucho un diez por ciento de la diferencia. El otro noventa " +
          "depende de cómo vives, no de los años que tienes.",
      },
    ],
  },
  {
    id: "una-molecula-a-partir-de-los-cuarenta",
    titulo: "Por qué la gente mayor huele distinto",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-la-gente-mayor-huele-distinto», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Hay una molécula que solo aparece a partir de los cuarenta» */
    encargo: "Hay una molécula que solo aparece a partir de los cuarenta",
    fotos: [
      {
        local: p_una_molecula_a_partir_de_los_cuarenta,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Hay una molécula que solo aparece a partir de los cuarenta",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Lo que parecía una impresión resultó ser un compuesto concreto",
      },
      {
        b: "parrafo",
        texto:
          "Que la gente mayor huele de una manera particular es de esas cosas que todo el mundo " +
          "ha notado alguna vez y casi nadie dice en voz alta. Y lo interesante es que durante " +
          "mucho tiempo se quedó exactamente ahí, en el terreno de la impresión subjetiva y la " +
          "incomodidad social, sin que nadie se molestara en comprobar si había algo medible " +
          "detrás.",
      },
      {
        b: "parrafo",
        texto:
          "Lo hubo. En 2001, un equipo japonés dirigido por Shinichiro Haze publicó en el " +
          "<em>Journal of Investigative Dermatology</em> el resultado de analizar el olor " +
          "corporal de personas de entre veintiséis y setenta y cinco años. Buscaban diferencias " +
          "químicas asociadas a la edad, y encontraron una muy limpia: un compuesto llamado " +
          "<strong>2-nonenal</strong>, un aldehído insaturado que describen con un olor grasiento " +
          "y herbáceo.",
      },
      {
        b: "parrafo",
        texto:
          "El dato que lo convierte en un hallazgo y no en una curiosidad es dónde aparecía. El " +
          "2-nonenal se detectó <strong>únicamente en los sujetos de cuarenta años o " +
          "más</strong>. En los más jóvenes no estaba, y no es que estuviera en menor cantidad: " +
          "no aparecía. Hay un compuesto que sencillamente no formaba parte de tu olor y que en " +
          "algún momento empieza a formar parte de él.",
      },
      {
        b: "rayo",
        texto:
          "No es una impresión ni un prejuicio. Es una molécula concreta que en los menores de " +
          "cuarenta no aparece.",
      },
      {
        b: "rotulo",
        texto:
          "Y sale de la piel oxidándose",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo también quedó bastante claro en el mismo trabajo, y no tiene nada que ver " +
          "con la higiene, que es lo primero que la gente supone.",
      },
      {
        b: "parrafo",
        texto:
          "En la superficie de la piel hay una capa de lípidos, grasas que el propio cuerpo " +
          "segrega y que cumplen su función protectora. Con la edad cambia la composición de esa " +
          "capa: aumentan unos ácidos grasos insaturados concretos, los llamados omega-7, y " +
          "aumentan también los peróxidos lipídicos, que son el producto de que esas grasas se " +
          "vayan oxidando. Los dos crecen con los años, y el estudio encontró que los niveles de " +
          "2-nonenal correlacionan con ambos.",
      },
      {
        b: "parrafo",
        texto:
          "La cadena completa es sencilla: la piel acumula un tipo de grasa que antes tenía en " +
          "menor cantidad, esa grasa se oxida al contacto con el aire, y de esa degradación " +
          "oxidativa sale el 2-nonenal. Es decir, el olor no lo produce ninguna glándula ni " +
          "ninguna bacteria: se produce en la superficie, por oxidación, más o menos igual que se " +
          "pone rancio un aceite. Y por eso no se quita frotando: no es suciedad acumulada, es " +
          "química ocurriendo encima.",
      },
      {
        b: "parrafo",
        texto:
          "Un apunte cultural que dice bastante sobre por qué el estudio salió de allí y no de " +
          "otro sitio. En japonés existe una palabra para esto, <em>kareishu</em>, que se podría " +
          "traducir como olor de la edad, y no es un término técnico sino corriente. Hay toda una " +
          "categoría de productos de higiene dirigida específicamente a ese compuesto, y el " +
          "equipo que publicó el trabajo venía del sector de la cosmética. En otras culturas el " +
          "fenómeno se percibe igual y no se nombra, que es probablemente el motivo de que " +
          "tardara tanto en estudiarse.",
      },
      {
        b: "rayo",
        texto:
          "No es suciedad ni falta de higiene. Es grasa de la piel oxidándose, más parecido a un " +
          "aceite que se pone rancio que a nada que se quite frotando.",
      },
    ],
  },
  {
    id: "la-miel-no-se-conserva",
    titulo: "Por qué la miel nunca caduca",
    categoria: "Cocina",
    color: "var(--clay)",
    /* Serie «por-que-la-miel-nunca-caduca», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La miel no se conserva: mata lo que se le acerca» */
    encargo: "La miel no se conserva: mata lo que se le acerca",
    fotos: [
      {
        local: p_la_miel_no_se_conserva,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La miel no se conserva: mata lo que se le acerca",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tres defensas montadas una encima de otra",
      },
      {
        b: "parrafo",
        texto:
          "Abre el armario de la cocina y compara dos tarros. La mermelada que abriste hace tres " +
          "meses tiene que vivir en la nevera y aun así acabará criando moho en la superficie. El " +
          "bote de miel lleva ahí dos años, a temperatura ambiente, con la cuchara metida más de " +
          "una vez, y no le ha pasado absolutamente nada. Las dos cosas son azúcar disuelto en " +
          "agua, y sin embargo una se estropea y la otra no. La diferencia no es que la miel " +
          "«aguante mejor»: es que la miel es un sitio activamente hostil para cualquier cosa que " +
          "intente vivir en ella.",
      },
      {
        b: "parrafo",
        texto:
          "La primera defensa es el agua, o mejor dicho su ausencia. El néctar que recogen las " +
          "abejas es agua en su mayor parte, en torno a un setenta u ochenta por ciento, y lo que " +
          "sale del panal tiene menos de un veinte. Esa diferencia no la pone el sol: la ponen " +
          "las abejas, que van deshidratando el néctar en las celdas batiendo las alas para mover " +
          "el aire hasta que el líquido se espesa. Lo que importa no es solo cuánta agua queda, " +
          "sino cuánta de esa agua está disponible para alguien más, y esa magnitud tiene nombre " +
          "técnico: la <strong>actividad de agua</strong>. En la miel ronda el 0,56 y el 0,62, " +
          "por debajo del mínimo que necesitan las bacterias y los mohos para funcionar. Una " +
          "bacteria que caiga ahí dentro no solo no encuentra agua: la miel se la saca a ella por " +
          "ósmosis y la deja seca.",
      },
      {
        b: "parrafo",
        texto:
          "La segunda defensa es la acidez. La miel tiene un pH de entre 3,2 y 4,5, más ácida que " +
          "muchas cosas que consideramos ácidas, y a esos niveles la mayor parte de los " +
          "microorganismos que estropean alimentos ni siquiera arrancan.",
      },
      {
        b: "parrafo",
        texto:
          "Y la tercera es la que casi nadie espera. Las abejas, mientras procesan el néctar, le " +
          "añaden una enzima propia llamada <strong>glucosa oxidasa</strong>. Esa enzima está " +
          "inactiva mientras la miel está concentrada, pero en cuanto se diluye un poco entra en " +
          "funcionamiento y produce dos cosas: ácido glucónico, que es de donde viene buena parte " +
          "de esa acidez, y <strong>peróxido de hidrógeno</strong>, que es exactamente el agua " +
          "oxigenada del botiquín. En cantidades pequeñísimas y liberado poco a poco, pero es " +
          "eso.",
      },
      {
        b: "rayo",
        texto:
          "La miel no es un alimento que se conserva bien. Es un desinfectante que además está " +
          "bueno.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso hay miel en los hospitales",
      },
      {
        b: "parrafo",
        texto:
          "Con esa combinación no sorprende que la miel se haya usado sobre heridas desde la " +
          "Antigüedad, y sí sorprende un poco que haya vuelto a hacerlo la medicina moderna " +
          "después de décadas dándola por superstición. Hoy existen apósitos de <strong>miel de " +
          "grado médico</strong> con autorización sanitaria para tratar heridas y quemaduras, y " +
          "se emplean sobre todo en úlceras difíciles y lesiones que no terminan de cerrar.",
      },
      {
        b: "parrafo",
        texto:
          "Conviene subrayar bien la diferencia, porque aquí es fácil hacerse daño. La miel de " +
          "esos apósitos no es la del bote de tu cocina: procede normalmente de un tipo concreto " +
          "de planta, se produce en condiciones controladas y se esteriliza por irradiación antes " +
          "de envasarla. La miel de mesa no está esterilizada, y esa es una distinción con " +
          "consecuencias serias, no un tecnicismo.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, ese mismo detalle está detrás de la única advertencia sanitaria importante " +
          "que arrastra la miel. Puede contener esporas de <em>Clostridium botulinum</em>, que a " +
          "un adulto no le hacen nada porque su flora intestinal las mantiene a raya, pero que en " +
          "un bebé de menos de un año pueden germinar y producir botulismo infantil. Por eso " +
          "ninguna miel, por buena que sea, debe dársele a un niño antes del año de vida. Un " +
          "ambiente que mata bacterias no es lo mismo que un ambiente estéril.",
      },
      {
        b: "rayo",
        texto:
          "La miel impide que las bacterias crezcan, pero no elimina lo que ya trae dentro. Por " +
          "eso ningún bebé de menos de un año debe probarla.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Haz la cuenta de lo que cuesta secar el néctar. Si entra con un setenta " +
          "y cinco por ciento de agua y sale con menos de un veinte, para producir un solo kilo " +
          "de miel las abejas han tenido que evaporar del orden de tres kilos de agua, celda a " +
          "celda y batiendo las alas. Esa deshidratación es la mitad del trabajo de una colmena, " +
          "y es también la mitad de la razón por la que el resultado no se estropea.",
      },
    ],
  },
  {
    id: "las-rayas-no-son-un-camuflaje",
    titulo: "Por qué las cebras tienen rayas",
    categoria: "Naturaleza",
    color: "var(--teal)",
    /* Serie «por-que-las-cebras-tienen-rayas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Las rayas de la cebra no son un camuflaje» */
    encargo: "Las rayas de la cebra no son un camuflaje",
    fotos: [
      {
        local: p_las_rayas_no_son_un_camuflaje,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Las rayas de la cebra no son un camuflaje",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Cinco explicaciones, y cuatro se cayeron",
      },
      {
        b: "parrafo",
        texto:
          "Darwin y Wallace ya discutían sobre esto en el siglo XIX sin ponerse de acuerdo, y " +
          "desde entonces la pregunta ha acumulado una lista de respuestas razonables que " +
          "competían entre sí. Eran básicamente cinco. Que las rayas camuflan a la cebra entre la " +
          "hierba alta y la luz temblona de la sabana. Que confunden al depredador cuando la " +
          "manada arranca a correr, porque un montón de rayas en movimiento cuesta de seguir con " +
          "la vista. Que ayudan a regular la temperatura, creando corrientes de aire entre las " +
          "bandas blancas y las negras. Que sirven para reconocerse unas a otras, ya que el " +
          "patrón es único en cada animal como una huella dactilar. Y una quinta bastante menos " +
          "épica: que espantan a las moscas.",
      },
      {
        b: "parrafo",
        texto:
          "En 2014, un equipo dirigido por Tim Caro las puso a prueba de una manera que no se le " +
          "había ocurrido a nadie. En vez de discutir cuál sonaba mejor, cogieron el mapa. Fueron " +
          "especie por especie y subespecie por subespecie, anotaron cuánta raya tenía cada una y " +
          "en qué parte del cuerpo, y cruzaron ese dato con todo lo que podría explicarlo: la " +
          "presencia de bosque, el área de caza de los grandes depredadores, la temperatura, y la " +
          "distribución geográfica de las moscas que pican.",
      },
      {
        b: "parrafo",
        texto:
          "El resultado fue de una limpieza incómoda. Las rayas no aparecen donde hay más leones. " +
          "No aparecen donde hace más calor. No aparecen donde hay más árboles entre los que " +
          "esconderse. Aparecen exactamente donde se dan varios meses seguidos de condiciones " +
          "ideales para que se reproduzcan los tábanos. Cuatro hipótesis se quedaron sin apoyo, y " +
          "la que ganó fue la única que no tenía ninguna grandeza.",
      },
      {
        b: "rayo",
        texto:
          "Las rayas no coinciden con los leones, ni con el calor, ni con los bosques. Coinciden " +
          "con las moscas.",
      },
      {
        b: "rotulo",
        texto:
          "No es un depredador con dientes: es un insecto",
      },
      {
        b: "parrafo",
        texto:
          "Cuesta aceptar la respuesta porque estropea una imagen buenísima. La cebra rayada " +
          "huyendo de la leona en la sabana dorada es una de las estampas más repetidas de la " +
          "naturaleza, y resulta que las rayas no tienen mucho que ver con eso. De hecho, hay un " +
          "detalle que debería habernos hecho sospechar antes: los leones cazan sobre todo de " +
          "noche y al amanecer, cuando el contraste de las rayas apenas se percibe, y varios " +
          "trabajos han encontrado que a distancias medias un depredador ve la silueta de una " +
          "cebra perfectamente. Como sistema antileones, sería un desastre.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que sí encaja es la otra escala, la pequeña. Los tábanos y las moscas del género " +
          "<em>Glossina</em> no matan de una dentellada: chupan sangre, provocan heridas que se " +
          "infectan y transmiten enfermedades como la tripanosomiasis, que es capaz de arrasar " +
          "poblaciones enteras de ungulados. Una sola de esas moscas no impresiona a nadie. Un " +
          "verano entero con miles de ellas encima puede desangrar y enfermar a un animal grande, " +
          "y eso sí es una presión evolutiva sostenida, todos los días, durante millones de años.",
      },
      {
        b: "parrafo",
        texto:
          "La evolución no premia lo espectacular, premia lo que mata más. Y en la sabana lo que " +
          "mata más no siempre es lo que tiene dientes.",
      },
      {
        b: "rayo",
        texto:
          "El sistema de defensa más llamativo de África no está diseñado contra los leones. Está " +
          "diseñado contra unos insectos de dos centímetros.",
      },
    ],
  },
  {
    id: "el-amarillo-ya-estaba",
    titulo: "Por qué las hojas cambian de color",
    categoria: "Naturaleza",
    color: "var(--sage)",
    /* Serie «por-que-las-hojas-cambian-de-color», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El amarillo llevaba ahí todo el año, escondido» */
    encargo: "El amarillo llevaba ahí todo el año, escondido",
    fotos: [
      {
        local: p_el_amarillo_ya_estaba,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El amarillo llevaba ahí todo el año, escondido",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La hoja no se vuelve amarilla: deja de ser verde",
      },
      {
        b: "parrafo",
        texto:
          "La manera natural de contarlo es decir que en otoño las hojas cambian de color, como " +
          "si el árbol pintara algo encima. Y en el caso del amarillo y del naranja, lo que " +
          "ocurre es exactamente lo contrario: no se añade nada, se quita.",
      },
      {
        b: "parrafo",
        texto:
          "Esos tonos los producen los <strong>carotenoides</strong>, los mismos pigmentos de la " +
          "zanahoria y del pimiento, y están dentro de la hoja durante toda la temporada, desde " +
          "que brota en primavera. Lo que pasa es que no se ven, porque encima hay una cantidad " +
          "enorme de clorofila, que es intensamente verde y lo tapa todo. La hoja del mes de " +
          "julio ya es amarilla por debajo; solo que hay demasiado verde delante.",
      },
      {
        b: "parrafo",
        texto:
          "En otoño, el árbol deja de mantener la clorofila y esta se degrada. Y al desaparecer " +
          "el verde queda a la vista lo que ya había. El álamo que se vuelve dorado en noviembre " +
          "no ha fabricado ese dorado: lo ha destapado.",
      },
      {
        b: "rayo",
        texto:
          "La hoja no se pone amarilla. Se le retira el verde que llevaba encima.",
      },
      {
        b: "rotulo",
        texto:
          "Y no se está muriendo: la están vaciando",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte que cambia por completo la lectura de la escena. Uno mira un bosque en " +
          "otoño y ve una especie de muerte lenta y melancólica, cosa que además la literatura " +
          "lleva siglos alimentando. Lo que hay en realidad es una operación de desmontaje " +
          "bastante fría y muy bien planificada.",
      },
      {
        b: "parrafo",
        texto:
          "Una hoja es una inversión cara, y lo más caro que lleva dentro es el " +
          "<strong>nitrógeno</strong>, un elemento que la planta consigue con dificultad del " +
          "suelo y que necesita para casi todo. Y da la casualidad de que buena parte de ese " +
          "nitrógeno está precisamente en la clorofila. Así que cuando llega el otoño y la hoja " +
          "va a dejar de ser rentable —menos luz, menos horas, riesgo de heladas—, el árbol no la " +
          "abandona sin más: la desmonta pieza a pieza y se lleva el material de vuelta al tronco " +
          "y a las raíces, donde lo guarda para fabricar las hojas del año siguiente.",
      },
      {
        b: "parrafo",
        texto:
          "Es decir, la degradación de la clorofila no es un síntoma del deterioro: es el " +
          "objetivo de la maniobra. El árbol está recuperando su nitrógeno, y el color amarillo " +
          "que tanto nos gusta es simplemente lo que se ve cuando ya se ha llevado casi todo.",
      },
      {
        b: "parrafo",
        texto:
          "Solo cuando el vaciado está hecho, el árbol corta. En la base del pecíolo se forma una " +
          "capa de células de corcho, la <strong>capa de abscisión</strong>, que va cerrando los " +
          "conductos que llevaban agua y minerales hasta la hoja. Cuando termina de sellar, la " +
          "hoja queda desconectada y cae con el primer viento. No se desprende porque esté muerta " +
          "y se suelte: se suelta porque el árbol ha terminado de sacarle lo aprovechable y ha " +
          "decidido soltarla.",
      },
      {
        b: "rayo",
        texto:
          "El otoño no es el árbol muriéndose por partes. Es un desmontaje ordenado para " +
          "recuperar el material antes de tirar la pieza.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Eso explica por qué una helada fuerte y temprana estropea el otoño. Si " +
          "el frío mata la hoja de golpe, el árbol no llega a completar el desmontaje: la hoja se " +
          "queda marrón y cae con el nitrógeno dentro. Los otoños espectaculares son los de los " +
          "descensos de temperatura graduales, que le dan tiempo al árbol a hacer bien su " +
          "trabajo.",
      },
    ],
  },
  {
    id: "la-cebolla-entera-no-lleva-nada",
    titulo: "Por qué lloras al cortar cebolla",
    categoria: "Cocina",
    color: "var(--ochre)",
    /* Serie «por-que-lloras-al-cortar-cebolla», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La cebolla entera no lleva dentro nada que te haga llorar» */
    encargo: "La cebolla entera no lleva dentro nada que te haga llorar",
    fotos: [
      {
        local: p_la_cebolla_entera_no_lleva_nada,
        autor: "",
        licencia: "Pexels License",
        alt:
          "La cebolla entera no lleva dentro nada que te haga llorar",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dos sustancias guardadas en armarios distintos",
      },
      {
        b: "parrafo",
        texto:
          "Coge una cebolla, pélala entera y acércatela a la cara. No pasa nada. Puedes tenerla " +
          "en la mano el rato que quieras, olerla de cerca y seguir con los ojos secos. Ese " +
          "detalle, que parece una tontería, es en realidad la clave de todo el asunto: la " +
          "sustancia que te hace llorar <strong>no está</strong> dentro de la cebolla. Se fabrica " +
          "en el momento en que la rompes, y se fabrica en unos segundos.",
      },
      {
        b: "parrafo",
        texto:
          "El montaje es el de un arma de dos componentes, de esas que se guardan separadas " +
          "precisamente porque juntas son peligrosas. Por un lado, las células de la cebolla " +
          "almacenan un compuesto de azufre bastante inofensivo, un derivado de aminoácido que el " +
          "bulbo ha ido construyendo con el azufre que absorbe del suelo. Por otro lado, en " +
          "compartimentos distintos dentro de la misma célula, guarda una enzima llamada " +
          "<strong>alinasa</strong>. Mientras las paredes celulares están intactas, cada cosa " +
          "vive en su armario y no ocurre absolutamente nada.",
      },
      {
        b: "parrafo",
        texto:
          "El cuchillo rompe esa separación. Al cortar revientas miles de células y mezclas lo " +
          "que estaba separado, la alinasa se encuentra por fin con su sustrato y empieza a " +
          "trabajar. El producto de esa primera reacción es un compuesto inestable que dura " +
          "poquísimo, y ahí entra la segunda enzima, la <strong>sintasa del factor " +
          "lacrimógeno</strong>, que lo transforma en la molécula que de verdad te interesa: el " +
          "<em>syn</em>-propanotial-S-óxido, un gas ligero que se evapora de inmediato y sube " +
          "derecho hacia tu cara.",
      },
      {
        b: "rayo",
        texto:
          "La cebolla no guarda el gas: guarda las piezas por separado y las monta cuando la " +
          "rompes.",
      },
      {
        b: "rotulo",
        texto:
          "Y en el ojo se convierte en ácido",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre cuando ese gas llega a tu ojo también tiene su parte de mala suerte. La " +
          "superficie del ojo está permanentemente cubierta por una película de lágrima, es " +
          "decir, por agua. Y el <em>syn</em>-propanotial-S-óxido reacciona con el agua " +
          "produciendo compuestos ácidos.",
      },
      {
        b: "parrafo",
        texto:
          "O sea que no es que el gas «irrite» de manera vaga: es que al tocarte el ojo se " +
          "convierte en un ácido suave, justo encima de la córnea, que es una de las superficies " +
          "con más terminaciones nerviosas por milímetro cuadrado de todo tu cuerpo. Esas " +
          "terminaciones disparan, el cerebro recibe un aviso de daño químico en el ojo y activa " +
          "la única respuesta rápida que tiene disponible: abrir las glándulas lagrimales y lavar " +
          "la zona a base de líquido. Por eso lloras, y por eso llorar funciona.",
      },
      {
        b: "parrafo",
        texto:
          "Todo esto, además, tiene un motivo desde el punto de vista de la planta, que no está " +
          "pensando en tu cena. Un bulbo pasa la vida enterrado, quieto y lleno de reservas, que " +
          "es exactamente el perfil de la víctima ideal para cualquier animal o insecto que " +
          "excave. No puede huir ni esconderse, así que su defensa consiste en garantizar que " +
          "morderla salga caro: en el instante en que algo le rompe los tejidos, se dispara la " +
          "reacción y el atacante recibe una descarga química en los ojos y en las mucosas. La " +
          "cebolla no te está atacando a ti. Está haciendo lo mismo que lleva haciendo con los " +
          "gusanos del suelo desde mucho antes de que existieran las cocinas.",
      },
      {
        b: "rayo",
        texto:
          "El gas se vuelve ácido al tocar la lágrima. No es una irritación difusa: es una " +
          "quemadura química diminuta sobre la córnea.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? De ahí sale el único truco casero que tiene fundamento real: cortar la " +
          "cebolla fría. El frío ralentiza las enzimas y reduce mucho la evaporación del gas, así " +
          "que una cebolla que ha pasado un rato en la nevera produce menos y lo lanza más " +
          "despacio. Cortarla bajo un chorro de agua funciona por lo mismo, porque el gas se " +
          "disuelve antes de llegar a tu cara.",
      },
    ],
  },
  {
    id: "te-ensenaron-mal-como-se-forma-una-nube",
    titulo: "Por qué llueve",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «por-que-llueve», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Te enseñaron mal cómo se forma una nube» */
    encargo: "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás.",
    fotos: [
      {
        local: p_te_ensenaron_mal_como_se_forma_una_nube,
        autor:
          "Fotografía de Sara Mazin, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/19860993/",
        alt:
          "Gotas de lluvia cubriendo un cristal, con un taxi amarillo desenfocado detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El aire no funciona como una esponja",
      },
      {
        b: "parrafo",
        texto:
          "Casi todos hemos oído la misma explicación, probablemente en el colegio y " +
          "probablemente acompañada de un dibujo con flechas: el aire caliente «aguanta» más " +
          "agua, y cuando se enfría ya no le cabe tanta, así que suelta lo que le sobra en forma " +
          "de lluvia. Es una imagen cómoda, la de una esponja empapada que alguien escurre, y se " +
          "repite en libros de texto, en documentales y en los partes meteorológicos con una " +
          "fidelidad admirable. El problema es que no funciona así, y la imagen de la esponja no " +
          "es una simplificación afortunada sino una idea directamente equivocada.",
      },
      {
        b: "parrafo",
        texto:
          "El aire no aguanta nada, porque no hay nada que aguantar. Es, en su inmensa mayoría, " +
          "espacio vacío con moléculas diminutas volando sueltas a gran velocidad sin llegar casi " +
          "nunca a tocarse. Las moléculas de agua que van ahí dentro no están «sostenidas» por " +
          "las de nitrógeno y oxígeno; simplemente vuelan entre ellas, igual de sueltas. Y ahí " +
          "dentro sobra sitio para muchísima más agua de la que hay en el aire más húmedo que " +
          "hayas respirado nunca: la capacidad no ha sido jamás el problema, ni en un día de " +
          "agosto en Sevilla ni en ningún otro sitio.",
      },
      {
        b: "rayo",
        texto:
          "Las nubes no aparecen porque al aire se le acabe el sitio para el agua. Nunca le falta " +
          "sitio.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que ocurre de verdad es un pulso entre dos bandos",
      },
      {
        b: "parrafo",
        texto:
          "¿Qué pasa entonces? <strong>Es simple:</strong> lo que hay no es una capacidad que se " +
          "llena, sino un forcejeo permanente entre dos procesos que ocurren a la vez y en " +
          "direcciones contrarias.",
      },
      {
        b: "parrafo",
        texto:
          "En todo momento hay moléculas de agua escapándose del estado líquido hacia el aire, " +
          "porque el calor las agita lo suficiente como para romper los enlaces que las mantenían " +
          "unidas a sus vecinas. Y en todo momento hay otras moléculas haciendo exactamente el " +
          "camino inverso, chocando con una superficie de agua o con otras moléculas y quedándose " +
          "pegadas. Las dos direcciones funcionan siempre, día y noche, sin que ninguna llegue a " +
          "detenerse. Lo que llamamos evaporación o condensación no son fenómenos separados: son " +
          "el resultado neto de quién va ganando el pulso.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí es donde entra la temperatura. Cuando hace calor, las moléculas se mueven " +
          "deprisa, se escapan muchas y muy pocas consiguen quedarse pegadas, de modo que gana la " +
          "fuga y el agua se evapora. Cuando el aire se enfría, esas mismas moléculas van más " +
          "lentas, cada vez menos consiguen soltarse y cada vez más se quedan enganchadas al " +
          "chocar, así que el pulso se decanta hacia el bando contrario. Ese momento exacto en " +
          "que empiezan a ganar las que vuelven es cuando aparece una nube. No porque al aire se " +
          "le haya acabado el sitio, sino porque <strong>al agua se le han acabado las fuerzas " +
          "para irse.</strong>",
      },
      {
        b: "parrafo",
        texto:
          "Y como el aire se enfría al subir —porque al ascender se expande y al expandirse se " +
          "enfría— ese punto de equilibrio se cruza siempre en altura. Por eso las nubes se " +
          "forman ahí arriba y no a la altura de tu ventana, aunque el aire de tu ventana lleve " +
          "prácticamente la misma cantidad de agua dentro.",
      },
      {
        b: "rayo",
        texto:
          "Una nube se forma cuando el agua deja de tener fuerza para escaparse, no cuando al " +
          "aire se le acaba el hueco.",
      },
    ],
  },
  {
    id: "no-invierten-izquierda-derecha",
    titulo: "Por qué los espejos invierten",
    categoria: "Ciencia",
    color: "var(--plum)",
    /* Serie «por-que-los-espejos-invierten», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El espejo no te cambia la izquierda por la derecha» */
    encargo: "El espejo no te cambia la izquierda por la derecha",
    fotos: [
      {
        local: p_no_invierten_izquierda_derecha,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El espejo no te cambia la izquierda por la derecha",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La pregunta lleva mal planteada desde el principio",
      },
      {
        b: "parrafo",
        texto:
          "Hay un acertijo clásico que la gente lleva siglos sin resolver del todo: si el espejo " +
          "invierte la izquierda y la derecha, ¿por qué no invierte también arriba y abajo? Tu " +
          "reflejo levanta la mano contraria, sí, pero no está boca abajo. Un espejo no debería " +
          "tener preferencias entre unos ejes y otros, así que algo no cuadra.",
      },
      {
        b: "parrafo",
        texto:
          "Y no cuadra porque la pregunta parte de un error. El espejo <strong>no invierte la " +
          "izquierda y la derecha</strong>. Tampoco invierte arriba y abajo. Solo invierte un " +
          "eje, y es el único que nadie menciona: el de delante y detrás, la profundidad, la " +
          "dirección perpendicular al cristal.",
      },
      {
        b: "parrafo",
        texto:
          "La demostración más limpia la propuso Richard Feynman y se hace en diez segundos " +
          "delante de cualquier espejo. Ponte enfrente y señala hacia el este, es decir, hacia " +
          "uno de los lados, paralelo al cristal. Tu reflejo señala <strong>también hacia el " +
          "este</strong>, no hacia el oeste. Señala hacia arriba: tu reflejo señala hacia arriba. " +
          "Y ahora señala hacia el propio espejo, de frente. Tu reflejo señala hacia ti, es " +
          "decir, en la dirección contraria.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está toda la respuesta. Dos de los tres ejes se conservan intactos y solo uno se " +
          "da la vuelta, y es precisamente el que va de tu pecho al cristal. El espejo no elige " +
          "entre izquierda y derecha, ni entre arriba y abajo, porque no toca ninguno de los dos.",
      },
      {
        b: "rayo",
        texto:
          "Señala a un lado y tu reflejo señala al mismo lado. Señala al espejo y señala al " +
          "revés. Solo se invierte un eje, y es la profundidad.",
      },
      {
        b: "rotulo",
        texto:
          "Tu reflejo no es una persona que se ha dado la vuelta",
      },
      {
        b: "parrafo",
        texto:
          "Si el espejo solo invierte la profundidad, ¿de dónde sale la sensación tan clara de " +
          "que te ha cambiado las manos? De una suposición que haces sin darte cuenta.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando miras tu reflejo, tu cerebro lo interpreta como si fuera otra persona plantada " +
          "delante de ti. Y para que otra persona esté delante de ti mirándote, ha tenido que " +
          "<strong>girar sobre sí misma</strong>. Ese giro, que ocurre solo en tu cabeza, es el " +
          "que cambia la izquierda por la derecha. El espejo no lo ha hecho; lo has hecho tú al " +
          "imaginarte a alguien dándose la vuelta.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que hay en el cristal es otra cosa, y es bastante más rara. Tu reflejo no es una " +
          "copia tuya girada: es una copia tuya <strong>invertida en profundidad</strong>, como " +
          "si te hubieran vuelto del revés igual que un guante. Es una figura que no existe en el " +
          "mundo real y que no se puede obtener girando nada. Por eso, aunque parezca un tipo " +
          "mirándote, no podrías fabricarlo ni con un gemelo idéntico.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí está la prueba de que las manos no se han cambiado: si levantas la mano derecha, " +
          "la mano que se levanta en el espejo está <strong>en el mismo lado del espacio</strong> " +
          "que la tuya. No se ha movido de sitio. Lo único que ocurre es que, en una persona que " +
          "estuviera realmente ahí mirándote de frente, esa posición correspondería a su mano " +
          "izquierda. Estás aplicando a la imagen las reglas de un cuerpo que no está.",
      },
      {
        b: "rayo",
        texto:
          "La mano del espejo está en el mismo lado del espacio que la tuya. Solo la llamas «la " +
          "otra» porque imaginas a alguien girado.",
      },
    ],
  },
  {
    id: "un-flamenco-nace-gris",
    titulo: "Por qué los flamencos son rosas",
    categoria: "Naturaleza",
    color: "var(--slate)",
    /* Serie «por-que-los-flamencos-son-rosas», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un flamenco nace gris y se pinta comiendo» */
    encargo: "Un flamenco nace gris y se pinta comiendo",
    fotos: [
      {
        local: p_un_flamenco_nace_gris,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un flamenco nace gris y se pinta comiendo",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La prueba llegó cuando los flamencos de los zoos se volvieron blancos",
      },
      {
        b: "parrafo",
        texto:
          "Un flamenco recién salido del huevo no tiene nada de rosa. Es una bola de plumón gris, " +
          "con el pico recto y las patas hinchadas y rosadas que se le vuelven negras en cuestión " +
          "de una semana. El color por el que conocemos a la especie no viene de fábrica: se " +
          "adquiere después, y se adquiere comiendo.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, la manera en que se demostró tiene su gracia, porque fue un fracaso el que " +
          "dio la pista. Durante décadas, los flamencos de los zoológicos iban perdiendo el color " +
          "hasta quedarse de un blanco sucio bastante deprimente, y nadie sabía qué estaban " +
          "haciendo mal. Los animales comían, se reproducían y estaban sanos; simplemente dejaban " +
          "de ser rosas. La respuesta estaba en el menú. En libertad, un flamenco filtra agua " +
          "salobre y se alimenta de microalgas y de pequeños crustáceos cargados de " +
          "<strong>carotenoides</strong>, que son los mismos pigmentos que dan color a la " +
          "zanahoria y al pimiento rojo. En un zoo comían pienso, y en el pienso no había nada de " +
          "eso. Desde que se les empezó a suplementar la dieta con esos pigmentos, los flamencos " +
          "de cautividad volvieron a ser rosas.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre por dentro es más interesante que un simple teñido. El flamenco no " +
          "absorbe el color y ya está: su hígado descompone los carotenoides que llegan con la " +
          "comida y va depositando los pigmentos resultantes en las plumas mientras crecen, y " +
          "también en el pico y en las patas. Eso significa que el color se fabrica pluma a " +
          "pluma, con material importado del exterior, y que hay que reponerlo continuamente.",
      },
      {
        b: "rayo",
        texto:
          "El rosa del flamenco no lo produce el animal. Lo importa con la comida y lo va " +
          "colocando en cada pluma que le crece.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso el color dice la verdad sobre el pájaro",
      },
      {
        b: "parrafo",
        texto:
          "Que el color venga de fuera tiene una consecuencia que la evolución no ha dejado " +
          "pasar. Un pigmento que hay que salir a buscar, filtrar del barro y procesar en el " +
          "hígado es caro, y por tanto no todos los individuos pueden permitírselo por igual.",
      },
      {
        b: "parrafo",
        texto:
          "Un flamenco muy rosa está anunciando, sin poder mentir, que come bien, que ocupa una " +
          "buena zona de alimentación y que su organismo está en condiciones de procesar todo ese " +
          "material. Uno pálido está anunciando lo contrario, aunque no quiera. Los biólogos " +
          "llaman a esto una <strong>señal honesta</strong>: una característica que no se puede " +
          "falsificar porque su producción cuesta exactamente aquello que pretende demostrar. Y " +
          "como cabía esperar, los flamencos se fijan. Los individuos más intensos tienden a " +
          "emparejarse antes y a conseguir mejores sitios en la colonia.",
      },
      {
        b: "parrafo",
        texto:
          "Merece la pena quedarse con el mecanismo completo, porque explica de golpe varias " +
          "cosas que parecían inconexas: por qué el color varía tanto entre unas poblaciones y " +
          "otras, por qué un mismo animal cambia de tono a lo largo del año, y por qué se apaga " +
          "cuando el bicho pasa por un mal momento. No es un adorno fijo pintado en el " +
          "nacimiento. Es un informe actualizado del estado del animal, colgado por fuera.",
      },
      {
        b: "rayo",
        texto:
          "Un flamenco pálido no puede fingir estar sano. El color cuesta exactamente lo que " +
          "demuestra.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El mismo principio funciona en tu cocina. La yema de huevo, la carne del " +
          "salmón y la de las truchas de piscifactoría deben su color a carotenoides de la dieta " +
          "del animal, y en todos esos casos se ajusta el pienso para conseguir el tono que el " +
          "comprador espera. Un salmón de piscifactoría sin ese suplemento tendría la carne gris.",
      },
    ],
  },
  {
    id: "a-los-tres-anos-te-acordabas",
    titulo: "Por qué no recuerdas tus primeros años",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-no-recuerdas-tus-primeros-anos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «A los tres años te acordabas perfectamente» */
    encargo: "A los tres años te acordabas perfectamente",
    fotos: [
      {
        local: p_a_los_tres_anos_te_acordabas,
        autor: "",
        licencia: "Pexels License",
        alt:
          "A los tres años te acordabas perfectamente",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No es que no grabaras: es que se te borró después",
      },
      {
        b: "parrafo",
        texto:
          "El nombre del fenómeno se lo puso Freud a principios del siglo XX. Le llamó " +
          "<strong>amnesia infantil</strong> y lo explicó como él explicaba casi todo: nuestros " +
          "primeros años estarían llenos de material tan incómodo que la mente adulta acaba " +
          "reprimiéndolos y sellándolos bajo llave. El nombre se quedó y sigue usándose en los " +
          "congresos de neurociencia; la explicación, en cambio, no ha resistido nada bien el " +
          "paso del tiempo.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que casi todos suponemos hoy es distinto pero igual de intuitivo: que un niño muy " +
          "pequeño todavía no tiene la maquinaria montada para grabar recuerdos, y que por eso no " +
          "queda nada de esa época. Suena razonable, y es fácil de comprobar que es falso. " +
          "Siéntate delante de un niño de tres años y pregúntale por su cumpleaños, por el día " +
          "que fue al zoo o por la vez que se cayó de la bici. Te lo cuenta. Con menos palabras y " +
          "menos orden que un adulto, pero te lo cuenta, y lo cuenta bien. La grabación estaba " +
          "hecha.",
      },
      {
        b: "parrafo",
        texto:
          "La prueba definitiva la montó un equipo dirigido por Patricia Bauer con un diseño que " +
          "resuelve el problema de raíz. Grabaron a 83 niños de tres años charlando con sus " +
          "madres sobre seis cosas que les habían pasado hacía poco: un cumpleaños, una " +
          "excursión, lo de siempre. Esas grabaciones son la clave del asunto, porque documentan " +
          "que el recuerdo existía y qué contenía exactamente. Después, cada niño volvió una sola " +
          "vez, a una edad de entre cinco y nueve años, y le preguntaron por aquellos mismos " +
          "episodios.",
      },
      {
        b: "parrafo",
        texto:
          "Entre los cinco y los siete años, los niños recordaban todavía entre el 63 y el 72 % " +
          "de aquellos sucesos. Entre los ocho y los nueve, la cifra se desplomaba a alrededor " +
          "del 35 %. Es decir, el olvido no ocurre en la cuna. Ocurre bastante más tarde, cuando " +
          "el niño ya va al colegio, ya sabe leer y ya tiene una vida perfectamente consciente.",
      },
      {
        b: "rayo",
        texto:
          "El olvido de tus primeros años no te pasó de bebé. Te pasó alrededor de los siete, " +
          "cuando ya ibas al colegio.",
      },
      {
        b: "rotulo",
        texto:
          "Los que sobreviven son los que se contaron bien",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle del estudio que da un giro interesante al asunto, y es que los " +
          "recuerdos que aguantaban y los que se caían no eran iguales entre sí.",
      },
      {
        b: "parrafo",
        texto:
          "Los niños más pequeños del grupo conservaban muchos más episodios, pero los contaban " +
          "de manera pobre y desordenada, sin fechas ni lugar ni un hilo claro. Los mayores " +
          "conservaban muchísimos menos, y sin embargo los que les quedaban estaban mucho mejor " +
          "construidos, con principio, escenario y desenlace. Dicho de otro modo, lo que ocurre " +
          "entre los cinco y los nueve años no es solamente una pérdida: es una criba. Se cae la " +
          "mayoría del material y sobrevive una minoría que además está mejor montada.",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué distingue a los supervivientes? Es simple: parece que sobrevive lo que se " +
          "convirtió en relato. Los investigadores encontraron que los niños cuyas madres " +
          "charlaban con ellos siguiendo el hilo de lo que el crío contaba, en vez de " +
          "interrogarlos con preguntas cerradas, formaban desde el principio recuerdos más ricos " +
          "y mejor estructurados. Un episodio que se ha contado varias veces, con orden y con " +
          "detalles, se ancla; un episodio que nunca llegó a convertirse en historia se disuelve.",
      },
      {
        b: "parrafo",
        texto:
          "Eso encaja con algo que se sospecha desde hace tiempo: que el lenguaje y la memoria " +
          "autobiográfica crecen juntos, y que un niño empieza a conservar su propia vida cuando " +
          "aprende a narrarla. No es toda la explicación, ni mucho menos, pero es una pieza que " +
          "se puede medir.",
      },
      {
        b: "rayo",
        texto:
          "Los recuerdos que aguantan no son los más intensos. Son los que alguien convirtió en " +
          "una historia contada varias veces.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Este estudio pertenece a una categoría rarísima dentro de la " +
          "investigación sobre la memoria: aquellos en los que los científicos tienen la " +
          "grabación original del recuerdo. Casi siempre hay que fiarse de lo que la persona dice " +
          "que le pasó, sin manera de contrastarlo. Aquí sabían exactamente qué había recordado " +
          "cada niño a los tres años, y podían medir con precisión cuánto quedaba años después.",
      },
    ],
  },
  {
    id: "la-unica-especie-que-se-sonroja",
    titulo: "Por qué nos sonrojamos",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-nos-sonrojamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Somos la única especie que se sonroja» */
    encargo: "Somos la única especie que se sonroja",
    fotos: [
      {
        local: p_la_unica_especie_que_se_sonroja,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Somos la única especie que se sonroja",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Darwin le dedicó un capítulo entero y lo dejó sin resolver",
      },
      {
        b: "parrafo",
        texto:
          "En 1872, en <em>La expresión de las emociones en el hombre y en los animales</em>, " +
          "Darwin se ocupó del rubor con una atención que sorprende. Recopiló testimonios de " +
          "médicos y misioneros de medio mundo para comprobar si ocurría en todas las poblaciones " +
          "humanas, preguntó por los ciegos de nacimiento, se interesó por si se podía provocar a " +
          "voluntad. Y lo describió con una frase que se ha citado desde entonces:",
      },
      {
        b: "cita",
        texto:
          "El rubor es la más peculiar y la más humana de todas las expresiones.",
        autor: "Charles Darwin, <em>La expresión de las emociones en el hombre y en los animales</em>, 1872",
      },
      {
        b: "parrafo",
        texto:
          "No lo decía por hacer literatura. Lo decía porque el rubor es un caso rarísimo dentro " +
          "de su propio marco explicativo. Casi todas las expresiones que estudió tienen " +
          "parientes claros en otros animales: la sonrisa se parece a un gesto de sumisión de los " +
          "primates, el ceño fruncido protege los ojos, el miedo eriza el pelo. El rubor no. " +
          "Ninguna otra especie conocida se pone roja de vergüenza, y no es que sea difícil de " +
          "detectar bajo el pelo: es que el circuito no existe.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una segunda rareza, que es la que lo hace tan incómodo de vivir. No se puede " +
          "fingir y no se puede reprimir. Puedes forzar una sonrisa, puedes fingir sorpresa, " +
          "puedes disimular el miedo con bastante éxito. El rubor no obedece a nadie: aparece " +
          "cuando quiere, normalmente en el peor momento posible, y el esfuerzo por evitarlo " +
          "tiende a empeorarlo. Es la única expresión facial humana que funciona con total " +
          "independencia de tu voluntad.",
      },
      {
        b: "rayo",
        texto:
          "Puedes fingir una sonrisa y disimular el miedo. El rubor es la única expresión que no " +
          "obedece a nadie.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que hace la sangre en tu cara va a contracorriente",
      },
      {
        b: "parrafo",
        texto:
          "El mecanismo también tiene su parte extraña, y para verla hay que compararla con lo " +
          "que hace el resto del cuerpo en la misma situación.",
      },
      {
        b: "parrafo",
        texto:
          "Cuando te llevas un susto o entras en estado de alerta, se activa el sistema nervioso " +
          "simpático, y una de sus órdenes clásicas es cerrar los vasos sanguíneos de la piel. " +
          "Tiene toda la lógica: se retira sangre de la superficie, donde no hace falta, y se " +
          "manda a los músculos y a los órganos, que es donde va a hacer falta si hay que correr " +
          "o pelear. Por eso la gente se queda pálida al asustarse, y por eso se te quedan las " +
          "manos frías.",
      },
      {
        b: "parrafo",
        texto:
          "En la cara ocurre lo contrario. Ante la vergüenza, los vasos de las mejillas, el " +
          "cuello y las orejas se dilatan y dejan pasar más sangre, no menos, y por eso la piel " +
          "se enrojece y notas calor. Es la misma activación general del organismo produciendo, " +
          "en una zona muy concreta, el efecto opuesto al que produce en todas las demás.",
      },
      {
        b: "parrafo",
        texto:
          "Y esa excepción está bien delimitada: el rubor de la vergüenza afecta a la cara, al " +
          "cuello y a la parte alta del pecho, precisamente las zonas que quedan a la vista " +
          "cuando hablas con alguien. No te enrojecen las rodillas. Una respuesta corporal que " +
          "solo aparece donde otro puede verla es una pista bastante clara sobre para qué está.",
      },
      {
        b: "rayo",
        texto:
          "El susto te deja pálido porque el cuerpo retira sangre de la piel. En la cara, la " +
          "vergüenza hace justo lo contrario.",
      },
    ],
  },
  {
    id: "el-picante-no-es-un-sabor",
    titulo: "Por qué pica el picante",
    categoria: "Cuerpo humano",
    color: "var(--clay)",
    /* Serie «por-que-pica-el-picante», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El picante no es un sabor» */
    encargo: "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera.",
    fotos: [
      {
        local: p_el_picante_no_es_un_sabor,
        autor:
          "Fotografía de MacShamim, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/31464525/",
        alt:
          "Cientos de chiles rojos alargados extendidos para secarse, llenando la imagen entera.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "No está en la misma categoría que el dulce o el salado",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por deshacer un malentendido que arrastramos todos, y que además está " +
          "incrustado en el idioma: <strong>el picante no es un sabor.</strong> No pertenece al " +
          "mismo grupo que el dulce, el salado, el ácido, el amargo y el umami, que son los cinco " +
          "que la lengua detecta con papilas gustativas. Cuando decimos que un plato «sabe " +
          "picante» estamos mezclando dos categorías que el cuerpo tiene perfectamente separadas.",
      },
      {
        b: "parrafo",
        texto:
          "Y no es una distinción de manual ni un tecnicismo sin consecuencias, porque se nota en " +
          "la práctica constantemente. El picante lo notas en los labios, que no tienen papilas " +
          "gustativas. Lo notas en la garganta cuando ya has tragado. Lo notas dentro de la nariz " +
          "si el vapor de un guiso te llega ahí arriba. Puedes notarlo en la piel del antebrazo, " +
          "y desde luego lo notas si cortas un chile y luego te tocas la cara o los ojos, que es " +
          "como bastante gente lo descubre de la peor manera posible. Nada de eso ocurre con lo " +
          "dulce: el azúcar en el codo no sabe a nada, porque lo dulce necesita papilas y el " +
          "picante no.",
      },
      {
        b: "parrafo",
        texto:
          "La conclusión es que lo que sientes cuando comes picante no viaja por el sistema del " +
          "gusto en absoluto. Viaja por otro sistema completamente distinto, mucho más antiguo y " +
          "con otra finalidad: el que te avisa de que te estás quemando.",
      },
      {
        b: "rayo",
        texto:
          "El picante no es uno de los cinco sabores. Lo notas en los labios, en la nariz y hasta " +
          "en la piel, porque no usa el sistema del gusto.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cerebro no lo distingue de una quemadura real",
      },
      {
        b: "parrafo",
        texto:
          "Aquí está el mecanismo, y es bastante más literal de lo que nadie espera al oírlo por " +
          "primera vez. Repartidos por tus terminaciones nerviosas hay unos receptores llamados " +
          "<strong>TRPV1</strong>, y su trabajo normal, el que llevan haciendo desde mucho antes " +
          "de que existieran los humanos, es avisarte del calor peligroso. Se activan cuando la " +
          "temperatura de la zona sube por encima de unos cuarenta y tres grados, que es más o " +
          "menos donde el calor deja de ser agradable y empieza a dañar tejido, y mandan al " +
          "cerebro un mensaje muy claro que significa <em>me estoy quemando</em>.",
      },
      {
        b: "parrafo",
        texto:
          "La capsaicina, la molécula responsable del picor de los chiles, encaja en ese mismo " +
          "receptor y lo abre sin necesidad de que haya calor alguno. Léelo despacio, porque el " +
          "matiz es lo importante: la comida picante no <em>se parece</em> a una quemadura, ni te " +
          "<em>recuerda</em> al calor, ni activa algo vagamente similar. Activa el mismo canal " +
          "iónico, dispara la misma señal eléctrica y llega al cerebro por la misma vía nerviosa " +
          "que una plancha ardiendo. Desde el punto de vista de tu sistema nervioso, un chile y " +
          "una sartén caliente son sencillamente indistinguibles.",
      },
      {
        b: "parrafo",
        texto:
          "Y por eso la respuesta de tu cuerpo tampoco es metafórica. Sudas, se te enrojece la " +
          "cara, te lloran los ojos, se te acelera el pulso y a veces te gotea la nariz. No son " +
          "reacciones al sabor: es el organismo entero intentando refrigerarse y protegerse de " +
          "una quemadura que no está ocurriendo, porque ha recibido un aviso que no tiene forma " +
          "de contrastar. Ese hallazgo, por cierto, no fue una curiosidad menor de laboratorio: " +
          "David Julius descubrió el receptor TRPV1 usando precisamente la capsaicina como " +
          "herramienta para localizarlo, y ese trabajo le valió el <strong>Premio Nobel de " +
          "Medicina de 2021</strong>.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Ahí está también la razón por la que el agua no alivia y la leche sí. La " +
          "capsaicina no se disuelve en agua, así que un vaso la reparte por toda la boca en vez " +
          "de arrastrarla. La leche lleva grasa, en la que sí se disuelve, y caseína, una " +
          "proteína que se engancha a la molécula y la despega de los receptores. No es una " +
          "creencia popular: es química.",
      },
      {
        b: "rayo",
        texto:
          "La capsaicina abre el mismo receptor que detecta el calor que quema. Para tu sistema " +
          "nervioso, un chile y una sartén mandan el mismo mensaje.",
      },
    ],
  },
  {
    id: "el-picor-lo-pones-tu",
    titulo: "Por qué pica la picadura de mosquito",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-pica-la-picadura-de-mosquito», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El picor de la picadura lo pones tú, no el mosquito» */
    encargo: "El picor de la picadura lo pones tú, no el mosquito",
    fotos: [
      {
        local: p_el_picor_lo_pones_tu,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El picor de la picadura lo pones tú, no el mosquito",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El pinchazo no duele, y eso ya es una pista",
      },
      {
        b: "parrafo",
        texto:
          "Empecemos por algo que casi nadie se para a pensar: no notas la picadura mientras " +
          "ocurre. Un mosquito te clava un aparato bucal en la piel, perfora hasta encontrar un " +
          "capilar y se pasa un rato considerable bombeando sangre, y tú, mientras tanto, no " +
          "sientes absolutamente nada. Solo te enteras después, cuando ya se ha ido.",
      },
      {
        b: "parrafo",
        texto:
          "Eso no es casualidad ni mala suerte: es diseño. Un insecto que necesita quedarse " +
          "quieto sobre un animal grande durante casi un minuto no puede permitirse que lo noten, " +
          "así que su saliva lleva un cóctel bastante sofisticado. Hay anticoagulantes, para que " +
          "la sangre no se le coagule dentro del tubo mientras bebe. Hay vasodilatadores, para " +
          "que el capilar se abra y el flujo sea más generoso. Y hay compuestos que reducen la " +
          "sensación local durante el proceso. Todo eso lo inyecta antes y durante, y todo eso se " +
          "queda dentro de tu piel cuando termina.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está la respuesta a la pregunta. Lo que te pica no es el agujero, que es minúsculo " +
          "y se cierra solo. Lo que te pica es lo que se quedó dentro: unas cuantas proteínas " +
          "ajenas repartidas en tu tejido.",
      },
      {
        b: "parrafo",
        texto:
          "Por cierto, quien te pica es siempre una hembra. Los machos no pican a nadie y se " +
          "alimentan de néctar; ellas necesitan las proteínas de la sangre para poder producir " +
          "los huevos, y por eso pinchan.",
      },
      {
        b: "rayo",
        texto:
          "No notas el pinchazo porque el mosquito ha invertido en que no lo notes. Lo que sí " +
          "notas es lo que dejó dentro.",
      },
      {
        b: "rotulo",
        texto:
          "Tu sistema inmunitario monta una respuesta desproporcionada",
      },
      {
        b: "parrafo",
        texto:
          "Cuando tu organismo detecta esas proteínas extrañas, hace lo que hace siempre ante " +
          "algo ajeno: reacciona. Y en este caso reacciona bastante más de lo que el problema " +
          "merece.",
      },
      {
        b: "parrafo",
        texto:
          "La saliva del mosquito activa a los mastocitos de tu piel, unas células que guardan " +
          "gránulos cargados de <strong>histamina</strong> y de otros mediadores inflamatorios. " +
          "Al activarse los sueltan de golpe. La histamina dilata los vasos de la zona, que es lo " +
          "que produce el enrojecimiento; aumenta la permeabilidad de esos vasos, así que sale " +
          "líquido al tejido y se forma el habón hinchado; y estimula directamente las " +
          "terminaciones nerviosas responsables del picor.",
      },
      {
        b: "parrafo",
        texto:
          "Hay varias vías por las que puede ocurrir. En una, el cuerpo ha fabricado anticuerpos " +
          "de tipo IgE contra las proteínas de esa saliva y son ellos los que disparan a los " +
          "mastocitos, que es el mismo mecanismo de una alergia clásica. En otra, ciertos " +
          "componentes de la saliva activan a los mastocitos directamente. Y hay además rutas de " +
          "picor que no dependen de la histamina, razón por la cual un antihistamínico ayuda pero " +
          "no siempre lo apaga del todo.",
      },
      {
        b: "parrafo",
        texto:
          "El resumen es incómodo pero exacto: el mosquito te quitó una gota de sangre y se fue, " +
          "y el bulto rojo que llevas tres días rascándote lo has fabricado tú entero. Ni la " +
          "hinchazón, ni el rojo, ni el picor vienen del insecto. Vienen de tu respuesta a algo " +
          "que ya no está haciendo nada.",
      },
      {
        b: "rayo",
        texto:
          "El mosquito se llevó una gota de sangre. El bulto, el rojo y el picor los has " +
          "fabricado tú.",
      },
    ],
  },
  {
    id: "un-patinador-no-derrite-el-hielo",
    titulo: "Por qué resbala el hielo",
    categoria: "Ciencia",
    color: "var(--sage)",
    /* Serie «por-que-resbala-el-hielo», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Un patinador no derrite el hielo que pisa» */
    encargo: "Un patinador no derrite el hielo que pisa",
    fotos: [
      {
        local: p_un_patinador_no_derrite_el_hielo,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Un patinador no derrite el hielo que pisa",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación de siempre lleva un siglo desmontada",
      },
      {
        b: "parrafo",
        texto:
          "La versión que todos hemos oído es tan redonda que da pena tocarla. El hielo resbala, " +
          "dicen, porque el peso del patinador concentrado en el filo de la cuchilla ejerce una " +
          "presión enorme, y esa presión baja el punto de fusión y derrite una película de agua " +
          "sobre la que uno se desliza. Tiene la ventaja de sonar a física de verdad, y encima es " +
          "física de verdad: la idea la propuso James Thomson a mediados del siglo XIX y su " +
          "hermano, que era nada menos que lord Kelvin, la confirmó experimentalmente. El hielo, " +
          "efectivamente, se derrite si lo aprietas lo suficiente.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece cuando alguien se molesta en calcular cuánto es «lo suficiente». " +
          "Lo hizo John Joly en 1886, y el resultado deja el asunto bastante claro. Con la " +
          "presión que ejerce una cuchilla de patinaje, unas 466 atmósferas, el punto de fusión " +
          "del hielo baja hasta los −3,5 °C. Es una bajada real y medible, y es del todo " +
          "insuficiente para explicar lo que vemos, porque el patinaje artístico se practica " +
          "idealmente en torno a los −5,5 °C y el hockey sobre pistas a unos −9 °C. A esas " +
          "temperaturas, según ese mecanismo, el hielo no debería derretirse en absoluto bajo la " +
          "cuchilla, y sin embargo la gente patina. Y si te vas a la nieve, el argumento se hunde " +
          "del todo: se puede esquiar perfectamente a −30 °C, donde harían falta presiones " +
          "absurdas que ningún esquiador podría generar ni acercándose.",
      },
      {
        b: "rayo",
        texto:
          "Con el peso de un patinador el hielo se derrite hasta los −3,5 °C. El hockey se juega " +
          "a −9 °C, y a esa temperatura la presión no derrite nada.",
      },
      {
        b: "rotulo",
        texto:
          "El rozamiento tampoco lo explica del todo",
      },
      {
        b: "parrafo",
        texto:
          "La siguiente candidata parece más sensata, y durante décadas fue la favorita. En 1939, " +
          "Frank Bowden y Terence Hughes propusieron que lo que funde el hielo no es la presión " +
          "sino el calor del rozamiento: al deslizarte generas fricción, la fricción calienta, el " +
          "calor derrite una capa finísima de agua y esa agua te lubrica. Lo pusieron a prueba en " +
          "una cueva de hielo de los Alpes suizos, comparando esquís de metal con esquís de " +
          "madera, y encontraron exactamente lo que la idea predecía, así que el mecanismo existe " +
          "y contribuye de verdad. Nadie discute esa parte.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre es que el rozamiento tiene un fallo de calendario difícil de esquivar. " +
          "Para que el rozamiento caliente hace falta que ya te estés moviendo, y el hielo " +
          "resbala desde el primer instante, antes de que hayas hecho nada. Piénsalo con un " +
          "ejemplo que habrás vivido: te bajas del coche en una mañana helada, apoyas un pie en " +
          "una placa de hielo y te vas al suelo sin haber deslizado un centímetro. Ahí no ha " +
          "habido fricción previa, no ha habido calor, no ha habido tiempo. La superficie ya " +
          "estaba resbaladiza cuando la pisaste.",
      },
      {
        b: "parrafo",
        texto:
          "Así que las dos explicaciones clásicas describen fenómenos reales que sí participan, y " +
          "ninguna de las dos llega a la conclusión. Falta algo que esté ahí antes de que " +
          "aparezca el peso y antes de que aparezca el movimiento, y ese algo tardó bastante en " +
          "tomarse en serio.",
      },
      {
        b: "rayo",
        texto:
          "El rozamiento calienta, pero necesita que ya te estés moviendo. El hielo te tira al " +
          "suelo desde el primer paso.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? Lo de Joly no fue un cálculo teórico de despacho. Fue de los primeros en " +
          "medir experimentalmente la presión real que ejerce el filo de un patín sobre el hielo, " +
          "en vez de suponerla, y precisamente por eso su número resultó tan incómodo para la " +
          "explicación que él mismo estaba comprobando.",
      },
    ],
  },
  {
    id: "la-leche-cortada-es-queso-a-medio-empezar",
    titulo: "Por qué se corta la leche",
    categoria: "Cocina",
    color: "var(--sage)",
    /* Serie «por-que-se-corta-la-leche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «La leche cortada es queso a medio empezar» */
    encargo: "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de ventana.",
    fotos: [
      {
        local: p_la_leche_cortada_es_queso_a_medio_empezar,
        autor:
          "Fotografía de Ly, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/8183877/",
        alt:
          "Una jarra de cristal llena de leche sobre una tabla de madera, con luz suave de " +
          "ventana.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Llevamos 7.500 años cortándola a propósito",
      },
      {
        b: "parrafo",
        texto:
          "En la región de Kuyavia, al norte de Polonia, aparecieron hace décadas unas vasijas de " +
          "barro llenas de agujeros diminutos. Los arqueólogos sospechaban desde 1984 que eran " +
          "coladores de queso, pero era una sospecha basada solo en la forma: aquello se parecía " +
          "mucho a un utensilio de quesería, y punto. Una vasija agujereada puede haber servido " +
          "para otras diez cosas, así que la hipótesis se quedó ahí durante casi treinta años, " +
          "esperando una prueba que nadie sabía cómo conseguir. La prueba llegó en 2013, cuando " +
          "un equipo de la Universidad de Bristol analizó los restos de grasa que habían quedado " +
          "atrapados en los poros de la cerámica. Los lípidos delataron leche, y no leche " +
          "cualquiera: el perfil correspondía a la separación de una cuajada rica en grasa del " +
          "suero líquido que la rodea. Aquellos agujeros habían servido exactamente para lo que " +
          "parecía. Es la prueba directa más antigua que existe de que alguien estaba haciendo " +
          "queso, y tiene unos 7.500 años.",
      },
      {
        b: "parrafo",
        texto:
          "Ahí está el detalle que cambia la manera de mirar un cartón olvidado en la nevera. " +
          "Hacer queso <strong>es</strong> cortar la leche. No es que se parezca, ni que sea un " +
          "primo lejano del proceso: es el mismo fenómeno, la misma proteína separándose del " +
          "mismo líquido, con la única diferencia de que en la quesería ocurre cuando se quiere, " +
          "con las bacterias elegidas y parándolo en el punto exacto. Lo que en tu nevera es un " +
          "accidente desagradable fue durante milenios la principal tecnología de conservación de " +
          "alimentos de media Europa.",
      },
      {
        b: "rayo",
        texto:
          "La leche cortada no es leche rota. Es queso a medio empezar, sin nadie que decidiera " +
          "cuándo parar.",
      },
      {
        b: "rotulo",
        texto:
          "Todo depende de unos pelos de siete nanómetros",
      },
      {
        b: "parrafo",
        texto:
          "¿Y qué significa exactamente que la leche «se corte»? Es simple: es la proteína " +
          "dejando de flotar. La leche no es una disolución transparente, sino una suspensión, y " +
          "su aspecto blanco y opaco viene precisamente de que lleva partículas sólidas en el " +
          "líquido. Buena parte de esas partículas son las <strong>micelas de caseína</strong>, " +
          "unos grumos microscópicos de proteína que en condiciones normales se mantienen " +
          "separados unos de otros y repartidos por todo el vaso. Que sigan repartidos, y no " +
          "apelmazados en el fondo, no es casualidad: hay un mecanismo trabajando para que así " +
          "sea.",
      },
      {
        b: "parrafo",
        texto:
          "Cada micela va recubierta por una capa de cadenas de kappa-caseína que sobresalen " +
          "hacia fuera como pelos, con unos siete nanómetros de largo. Esa pelusa hace dos " +
          "trabajos a la vez, y los dos importan. El primero es puramente físico: los pelos " +
          "estorban, así que dos micelas no llegan nunca a tocarse aunque el azar las acerque. El " +
          "segundo es eléctrico: las cadenas llevan carga negativa, y como todas la llevan del " +
          "mismo signo, las partículas se repelen entre sí igual que dos imanes enfrentados por " +
          "el mismo polo. Mientras la leche se mantiene en su pH habitual, alrededor de 6,6, el " +
          "sistema aguanta sin problemas y todo permanece en suspensión.",
      },
      {
        b: "parrafo",
        texto:
          "Entonces entran en juego las bacterias lácticas, que llegan con la propia leche o del " +
          "aire, y que se dedican a comerse la lactosa. Al digerirla sueltan ácido láctico, y ese " +
          "ácido va acidificando el líquido poco a poco. El pH empieza a bajar desde 6,6 y, a " +
          "medida que baja, va neutralizando la carga negativa de los pelos. Al llegar a " +
          "<strong>4,6</strong>, la neutralización es completa. Las micelas dejan de repelerse, " +
          "chocan entre sí, se pegan unas a otras y acaban formando grumos lo bastante grandes " +
          "como para verse y para irse al fondo. Eso es la leche cortada.",
      },
      {
        b: "parrafo",
        texto:
          "Ese 4,6 no es un número aproximado ni una peculiaridad de la leche vieja: es el punto " +
          "isoeléctrico de la caseína, el pH exacto al que esa proteína tiene carga neta cero y " +
          "es menos soluble que a ningún otro. Es una constante de la molécula, la misma en tu " +
          "nevera que en una quesería de los Alpes o en un laboratorio. Por eso la leche no se " +
          "corta por el tiempo que pasa, sino por el número que alcanza.",
      },
      {
        b: "rayo",
        texto:
          "La leche no se corta porque caduque. Se corta al cruzar un pH exacto, y ese pH es 4,6.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El yogur es este mismo proceso detenido antes de tiempo. Se enfría el " +
          "cultivo en torno a un pH de 4,5, con la cuajada todavía fina y repartida por todo el " +
          "bote, en vez de dejar que siga acidificando hasta separarse del suero. Un yogur al que " +
          "se le escapa el punto acaba con un charco amarillento encima: ese líquido es suero, y " +
          "significa que la separación había empezado.",
      },
    ],
  },
  {
    id: "el-pan-duro-no-se-ha-secado",
    titulo: "Por qué se pone duro el pan",
    categoria: "Cocina",
    color: "var(--slate)",
    /* Serie «por-que-se-pone-duro-el-pan», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El pan duro no se ha secado» */
    encargo: "El pan duro no se ha secado",
    fotos: [
      {
        local: p_el_pan_duro_no_se_ha_secado,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El pan duro no se ha secado",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La prueba está en que se puede resucitar con calor",
      },
      {
        b: "parrafo",
        texto:
          "Todo el mundo explica el pan duro de la misma manera: se ha secado, ha perdido el " +
          "agua, se ha quedado sin humedad. Es la respuesta inmediata y encaja perfectamente con " +
          "la sensación al morderlo, que es de sequedad y de textura correosa.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una manera muy simple de comprobar que no es eso. Coge una barra de ayer, dura " +
          "como una piedra, y métela unos minutos en el horno. Sale blanda otra vez, con la miga " +
          "tierna y la corteza crujiente, casi como recién hecha. El efecto no dura mucho y a las " +
          "pocas horas vuelve a endurecerse, pero mientras dura es real.",
      },
      {
        b: "parrafo",
        texto:
          "Ahora piensa en lo que acabas de hacer. Has metido en un horno un producto " +
          "supuestamente reseco, has aplicado calor —que es exactamente lo que se usa para " +
          "deshidratar cosas— y ha salido más blando. Si el problema hubiera sido la falta de " +
          "agua, el horno tendría que haberlo empeorado. Nada de lo que has secado alguna vez se " +
          "rehidrata metiéndolo en el horno.",
      },
      {
        b: "parrafo",
        texto:
          "Así que la explicación de la sequedad no se sostiene. El pan de ayer conserva buena " +
          "parte del agua que tenía; lo que ha cambiado es dónde está y cómo está colocada.",
      },
      {
        b: "rayo",
        texto:
          "Metes en el horno algo supuestamente reseco y sale más blando. Si fuera falta de agua, " +
          "el horno tendría que empeorarlo.",
      },
      {
        b: "rotulo",
        texto:
          "Lo que pasa se llama retrogradación, y es un problema de orden",
      },
      {
        b: "parrafo",
        texto:
          "Lo que endurece el pan es un fenómeno del almidón, que es el componente mayoritario de " +
          "la harina. Y para entenderlo hay que ver qué le hizo el horneado la primera vez.",
      },
      {
        b: "parrafo",
        texto:
          "El almidón crudo está formado por gránulos con sus moléculas empaquetadas de forma " +
          "ordenada, casi cristalina. Al hornear, con calor y agua, esos gránulos se hinchan y " +
          "esa estructura ordenada se deshace: las moléculas se desordenan, se separan y retienen " +
          "agua entre ellas. Eso es lo que da la textura blanda y esponjosa de un pan recién " +
          "hecho. La miga tierna es almidón desordenado y lleno de agua.",
      },
      {
        b: "parrafo",
        texto:
          "El problema es que ese desorden es un estado inestable. En cuanto el pan se enfría, " +
          "las moléculas empiezan poco a poco a recolocarse en su disposición ordenada de " +
          "siempre, y al hacerlo expulsan el agua que tenían entre ellas. Esa agua no se va del " +
          "pan: migra fuera de los gránulos y se reparte por otros huecos de la miga, e incluso " +
          "hacia la corteza, que por eso pierde el crujiente y se ablanda al mismo tiempo que la " +
          "miga se endurece. Los técnicos lo llaman <strong>retrogradación</strong> del almidón.",
      },
      {
        b: "parrafo",
        texto:
          "Y ahí encaja lo del horno. Al calentar, le devuelves energía al sistema y las " +
          "moléculas vuelven a desordenarse parcialmente, recuperando la textura. No has añadido " +
          "agua: has vuelto a desordenar lo que se había ordenado. Por eso funciona, y por eso el " +
          "efecto es temporal, porque en cuanto se enfría empieza a recolocarse otra vez.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho en corto: el pan duro no es pan seco. Es pan al que se le ha ordenado el " +
          "almidón.",
      },
      {
        b: "rayo",
        texto:
          "La miga blanda es almidón desordenado reteniendo agua. Al enfriarse se recoloca y " +
          "suelta esa agua. Eso, y no la sequedad, es el pan duro.",
      },
    ],
  },
  {
    id: "no-es-falta-de-riego",
    titulo: "Por qué se te duerme una pierna",
    categoria: "Cuerpo humano",
    color: "var(--ochre)",
    /* Serie «por-que-se-te-duerme-una-pierna», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «No es que no te llegue la sangre a la pierna» */
    encargo: "No es que no te llegue la sangre a la pierna",
    fotos: [
      {
        local: p_no_es_falta_de_riego,
        autor: "",
        licencia: "Pexels License",
        alt:
          "No es que no te llegue la sangre a la pierna",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación popular confunde el cable con el motor",
      },
      {
        b: "parrafo",
        texto:
          "Llevas veinte minutos sentado con las piernas cruzadas, te levantas y la pierna no " +
          "responde. Está ahí, la ves, pero no la sientes y no te obedece bien. La explicación " +
          "que da todo el mundo es siempre la misma: se ha cortado la circulación, la sangre no " +
          "llegaba y por eso la pierna «se ha dormido». Suena bien y tiene una parte de verdad, " +
          "pero se equivoca en lo esencial, porque señala al órgano equivocado.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que se ha quedado sin funcionar no es el músculo: es el nervio. Un nervio es un " +
          "cable, y su trabajo consiste en llevar señales eléctricas en las dos direcciones, del " +
          "cerebro a la pierna y de la pierna al cerebro. Cuando pasas mucho rato apoyando el " +
          "peso sobre un punto por el que discurre un nervio grande, lo estás aplastando contra " +
          "un hueso, y un nervio comprimido deja de transmitir. Deja de mandar hacia arriba la " +
          "información del tacto, la presión y la posición, y deja de bajar bien las órdenes de " +
          "movimiento.",
      },
      {
        b: "parrafo",
        texto:
          "La sensación de ausencia, ese vacío raro que no es dolor ni frío ni nada, es " +
          "exactamente eso: la falta de información. El cerebro no está recibiendo el flujo " +
          "constante de datos que le llega de una pierna normal, y esa ausencia se siente como " +
          "una especie de hueco. La pierna sigue perfectamente viva; lo que ha caído es la línea.",
      },
      {
        b: "rayo",
        texto:
          "La que se duerme no es la pierna: es el cable que la conecta con tu cerebro.",
      },
      {
        b: "rotulo",
        texto:
          "La sangre sí interviene, pero no como te la contaron",
      },
      {
        b: "parrafo",
        texto:
          "Ahora la parte honesta, porque la explicación popular no es del todo un disparate. " +
          "Cuando aplastas un nervio, también aplastas los pequeños vasos que lo alimentan a él, " +
          "y un nervio privado de oxígeno y glucosa también deja de conducir. O sea que en la " +
          "práctica intervienen las dos cosas a la vez: la deformación mecánica del nervio y la " +
          "falta de riego de ese mismo nervio.",
      },
      {
        b: "parrafo",
        texto:
          "Pero fíjate en la diferencia, porque cambia por completo la imagen mental del asunto. " +
          "La versión popular imagina una pierna entera desabastecida de sangre, con la carne " +
          "quedándose sin oxígeno; y eso, además de ser mucho más grave, tardaría muchísimo más " +
          "en producirse y no se arreglaría en treinta segundos como se arregla esto. Lo que " +
          "ocurre es algo mucho más localizado: un punto concreto de un cable concreto, del " +
          "grosor de un lápiz, que está siendo pinzado contra un hueso.",
      },
      {
        b: "parrafo",
        texto:
          "De hecho, la prueba está en la velocidad de la recuperación. Cambias de postura y en " +
          "menos de un minuto la pierna vuelve entera. Si el problema fuera un tejido muscular " +
          "privado de riego durante veinte minutos, no se resolvería con levantarse. Un nervio " +
          "que deja de estar pinzado, en cambio, recupera la conducción casi inmediatamente, " +
          "porque no ha habido daño: solo interrupción.",
      },
      {
        b: "rayo",
        texto:
          "Se arregla en medio minuto, y eso ya te dice que no era la carne. Era una " +
          "interrupción, no una avería.",
      },
    ],
  },
  {
    id: "el-conductor-no-se-marea-nunca",
    titulo: "Por qué te mareas en el coche",
    categoria: "Cuerpo humano",
    color: "var(--teal)",
    /* Serie «por-que-te-mareas-en-el-coche», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El conductor no se marea nunca, y eso lo explica todo» */
    encargo: "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en tonos sepia.",
    fotos: [
      {
        local: p_el_conductor_no_se_marea_nunca,
        autor:
          "Fotografía de Elif, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/17729653/",
        alt:
          "Un coche blanco antiguo detenido en una carretera recta que cruza una llanura seca, en " +
          "tonos sepia.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Dos sistemas que dejan de ponerse de acuerdo",
      },
      {
        b: "parrafo",
        texto:
          "Vas de pasajero, sacas el móvil, lees dos mensajes y a los cinco minutos estás pálido, " +
          "sudando frío y pidiendo que bajen la ventanilla. El conductor, sentado a treinta " +
          "centímetros de ti, sometido exactamente al mismo movimiento, a las mismas curvas y a " +
          "los mismos frenazos, está estupendamente y te mira con una mezcla de lástima y " +
          "sospecha. Esa asimetría es la mejor pista que existe sobre lo que está ocurriendo, " +
          "porque descarta de golpe todas las explicaciones basadas en el movimiento del coche: " +
          "si el movimiento fuera la causa, os afectaría a los dos por igual.",
      },
      {
        b: "parrafo",
        texto:
          "La clave está en que tu sentido del equilibrio no vive en los ojos, como suele " +
          "suponerse, sino en el <strong>oído interno</strong>. Ahí dentro tienes tres conductos " +
          "semicirculares llenos de líquido, orientados en los tres planos del espacio, y unas " +
          "bolsas con piedrecitas microscópicas de carbonato de calcio apoyadas sobre células con " +
          "pelos sensibles. Cuando el coche acelera, frena o gira, el líquido se retrasa y las " +
          "piedrecitas se desplazan, y esos movimientos doblan los pelos y generan señales " +
          "nerviosas. Es un sistema mecánico, precioso y antiquísimo, que le va contando al " +
          "cerebro en tiempo real hacia dónde te estás moviendo y con qué intensidad.",
      },
      {
        b: "parrafo",
        texto:
          "El problema aparece cuando esa información no cuadra con lo que ven los ojos. Si estás " +
          "leyendo, tus ojos tienen delante una pantalla quieta a treinta centímetros de la cara, " +
          "que se mueve solidariamente contigo, y por tanto informan de que no te estás " +
          "desplazando en absoluto. Mientras tanto, el oído interno está notificando curvas a la " +
          "izquierda, frenazos, baches y aceleraciones. Dos sistemas que llevan toda tu vida " +
          "contando lo mismo empiezan a contradecirse frontalmente, y el cerebro no tiene manera " +
          "de decidir cuál miente. Eso es lo que se conoce como <strong>conflicto " +
          "sensorial</strong>, y es el punto de partida de todo lo demás.",
      },
      {
        b: "rayo",
        texto:
          "Tus ojos dicen que estás quieto y tu oído interno dice que estás girando. El mareo " +
          "empieza en esa contradicción.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso el volante es la mejor cura",
      },
      {
        b: "parrafo",
        texto:
          "Lo bueno de esta explicación es que no solo cuenta cuándo aparece el mareo: predice " +
          "correctamente todas las maneras de quitarlo, incluidas las que la gente descubrió por " +
          "su cuenta mucho antes de que nadie hablara de conflictos sensoriales.",
      },
      {
        b: "parrafo",
        texto:
          "Explica por qué se alivia mirando al horizonte, que es el consejo clásico de las " +
          "abuelas. Al fijar la vista en un punto lejano y estable, le devuelves a los ojos la " +
          "información de movimiento que les faltaba: ahora sí ven el paisaje desplazarse, y su " +
          "informe vuelve a coincidir con el del oído interno. Explica también por qué leer lo " +
          "empeora tanto, porque es justamente la maniobra contraria: fijas la vista en algo que " +
          "viaja contigo y anulas del todo la señal visual de desplazamiento, con lo que la " +
          "contradicción se hace máxima. Y explica por qué el asiento delantero sienta mejor que " +
          "el trasero, donde el campo de visión es más pobre y el balanceo del coche es mayor.",
      },
      {
        b: "parrafo",
        texto:
          "Pero sobre todo explica por qué el conductor se libra. No es solo que vea la " +
          "carretera, que también. Es que <strong>anticipa</strong> cada giro, porque es él quien " +
          "lo va a dar: su cerebro emite la orden de mover el volante y sabe lo que va a sentir " +
          "un instante antes de sentirlo. Esa predicción llega siempre a tiempo y siempre encaja " +
          "con la sensación, así que en su cabeza nunca hay conflicto que resolver. Por eso, " +
          "cuando alguien se marea sistemáticamente de pasajero, ponerle al volante suele " +
          "funcionar mejor que cualquier pastilla. Y por eso mismo un copiloto que va mirando la " +
          "carretera y adivinando las curvas se marea mucho menos que uno que va mirando el " +
          "móvil.",
      },
      {
        b: "rayo",
        texto:
          "El conductor no se marea porque anticipa cada curva. Su cerebro sabe lo que va a pasar " +
          "antes de que su cuerpo lo sienta.",
      },
    ],
  },
  {
    id: "la-cicatriz-de-un-dano",
    titulo: "Por qué te pones moreno",
    categoria: "Cuerpo humano",
    color: "var(--sage)",
    /* Serie «por-que-te-pones-moreno», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «El bronceado es la señal de un daño que ya está hecho» */
    encargo: "El bronceado es la señal de un daño que ya está hecho",
    fotos: [
      {
        local: p_la_cicatriz_de_un_dano,
        autor: "",
        licencia: "Pexels License",
        alt:
          "El bronceado es la señal de un daño que ya está hecho",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "El orden de los acontecimientos lo cambia todo",
      },
      {
        b: "parrafo",
        texto:
          "Solemos pensar en el bronceado como en una adaptación agradable: te da el sol, la piel " +
          "se pone morena y ese moreno te protege. Un mecanismo de defensa que se activa cuando " +
          "hace falta, más o menos como sudar cuando hace calor.",
      },
      {
        b: "parrafo",
        texto:
          "El orden real de los acontecimientos es otro, y conviene mirarlo despacio porque lo " +
          "cambia todo. La radiación ultravioleta llega a la piel y atraviesa las capas " +
          "superiores hasta alcanzar el núcleo de las células, donde está el ADN. Ahí produce " +
          "lesiones concretas: fragmentos de la cadena que se sueldan mal entre sí y estropean la " +
          "información. Eso ocurre <strong>antes</strong> de que empiece nada más, y ocurre desde " +
          "el primer minuto.",
      },
      {
        b: "parrafo",
        texto:
          "Es entonces cuando la célula detecta el destrozo y activa su sistema de respuesta al " +
          "daño, en el que participa la proteína p53, la misma que se ocupa de vigilar la " +
          "integridad del ADN en todo el cuerpo. Y una de las órdenes que salen de ahí es avisar " +
          "a los melanocitos, las células que fabrican pigmento, para que se pongan a producir " +
          "<strong>melanina</strong>. Esa melanina se reparte a las células vecinas, que la " +
          "colocan formando una especie de sombrilla justo encima de sus núcleos, protegiendo el " +
          "ADN de lo que venga después.",
      },
      {
        b: "parrafo",
        texto:
          "Así que el bronceado no precede al daño: lo sigue. Es la reacción, no el escudo. " +
          "Cuando te ves moreno estás viendo el resultado visible de una alarma que saltó porque " +
          "algo ya se había roto dentro.",
      },
      {
        b: "rayo",
        texto:
          "Primero se daña el ADN y después llega el color. El moreno no evitó nada: es la prueba " +
          "de que hubo algo que reparar.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso tarda días en salir",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle cotidiano que encaja con esto y que casi nadie relaciona: que el " +
          "bronceado de verdad no aparece el mismo día. Vuelves de la playa rojo o ligeramente " +
          "tostado, y el color bueno, el que dura, sale a los dos o tres días.",
      },
      {
        b: "parrafo",
        texto:
          "Ese retraso es exactamente lo que cabe esperar de una respuesta biológica y no de un " +
          "filtro. Hay que detectar el daño, activar la vía de señalización, avisar a los " +
          "melanocitos, fabricar el pigmento y repartirlo célula a célula. Eso lleva días. Un " +
          "filtro que se activara con la luz actuaría al instante; una respuesta que hay que " +
          "montar, no.",
      },
      {
        b: "parrafo",
        texto:
          "Sí existe un oscurecimiento inmediato, que es el que notas al salir del agua, pero es " +
          "otra cosa: es la melanina que ya tenías oxidándose por efecto de la radiación. Cambia " +
          "de tono en minutos, no implica pigmento nuevo, se va en horas y no aporta protección " +
          "apreciable. El moreno de verdad, el que se construye, viene después y viene con " +
          "factura.",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una consecuencia lógica que merece decirse en voz alta, porque va contra el " +
          "sentido común de casi todo el mundo. Si el bronceado es la respuesta a una lesión en " +
          "el ADN, entonces <strong>no existe un bronceado sano</strong>. Puede haber uno que " +
          "duela poco y otro que duela mucho, pero para producir cualquiera de los dos ha tenido " +
          "que haber daño primero. La cantidad varía; el mecanismo no.",
      },
      {
        b: "rayo",
        texto:
          "El moreno tarda días en salir porque hay que fabricarlo. Un filtro actuaría al " +
          "instante; una reparación, no.",
      },
    ],
  },
  {
    id: "en-invierno-estamos-mas-cerca-del-sol",
    titulo: "Por qué tenemos estaciones",
    categoria: "Planeta Tierra",
    color: "var(--sage)",
    /* Serie «por-que-tenemos-estaciones», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «En invierno estamos más cerca del Sol que en verano» */
    encargo: "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los pinos al fondo.",
    fotos: [
      {
        local: p_en_invierno_estamos_mas_cerca_del_sol,
        autor:
          "Fotografía de Canan Cetin, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/29343620/",
        alt:
          "Una rama de hojas amarillas de otoño contra el cielo, con las copas verdes de los " +
          "pinos al fondo.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Recién licenciados por Harvard, y casi ninguno acertó",
      },
      {
        b: "parrafo",
        texto:
          "En 1987, un equipo del Harvard-Smithsonian Center for Astrophysics se plantó con una " +
          "cámara en el día de graduación de Harvard. La idea era sencilla y algo tramposa: parar " +
          "a licenciados con la toga todavía puesta, a antiguos alumnos y a algún profesor, y " +
          "hacerles una pregunta de niño de nueve años. ¿Por qué hay estaciones? La mayoría " +
          "contestó lo mismo, y lo hizo con la seguridad de quien está diciendo una obviedad: en " +
          "verano la Tierra está más cerca del Sol. Casi nadie acertó.",
      },
      {
        b: "parrafo",
        texto:
          "El documental que salió de aquello se llama <em>A Private Universe</em>, y lleva " +
          "décadas usándose para enseñar una idea incómoda a los profesores de ciencias. No " +
          "consiste en que la gente no sepa cosas, sino en algo bastante peor: se puede terminar " +
          "una de las mejores universidades del mundo arrastrando intacta la misma explicación " +
          "equivocada que uno se construyó en el colegio a los ocho años. Las ideas previas no se " +
          "borran cuando llega la información correcta; conviven con ella, y en cuanto te pillan " +
          "desprevenido y sin tiempo para pensar, salen ellas primero.",
      },
      {
        b: "parrafo",
        texto:
          "Y lo interesante es que la explicación equivocada no es absurda. Tiene una lógica " +
          "impecable: si te acercas a una hoguera pasas más calor, luego si la Tierra se acerca " +
          "al Sol debería hacer más calor. El razonamiento es correcto. Lo que falla es el dato " +
          "de partida, porque la órbita sí es ovalada, pero las fechas no son las que la " +
          "intuición supone.",
      },
      {
        b: "rotulo",
        texto:
          "Estamos más cerca en enero y más lejos en julio",
      },
      {
        b: "parrafo",
        texto:
          "La Tierra recorre una elipse, así que tiene un punto de máxima cercanía al Sol y otro " +
          "de máxima lejanía, y pasa por cada uno exactamente una vez al año. El más cercano cae " +
          "a <strong>principios de enero</strong>, a unos 147 millones de kilómetros. El más " +
          "lejano, a <strong>principios de julio</strong>, a unos 152. Léelo otra vez, porque va " +
          "justo al revés de lo que uno esperaría: en pleno invierno del hemisferio norte estamos " +
          "lo más cerca del Sol que vamos a estar en todo el año, y en pleno agosto, con cuarenta " +
          "grados en la calle, estamos lo más lejos.",
      },
      {
        b: "parrafo",
        texto:
          "Esa diferencia de unos cinco millones de kilómetros suena enorme, pero conviene " +
          "ponerla en proporción. Representa apenas un 3 % de la distancia total, y el efecto " +
          "sobre la energía que nos llega es de unos pocos puntos porcentuales. Es un cambio real " +
          "y medible, y es completamente insuficiente para fabricar la diferencia entre una playa " +
          "en agosto y un parabrisas helado en enero.",
      },
      {
        b: "rayo",
        texto:
          "Esos cinco millones de kilómetros de diferencia son apenas un 3 % de la distancia. " +
          "Demasiado poco para fabricar un verano.",
      },
      {
        b: "rotulo",
        texto:
          "El argumento que lo derriba sin un solo número",
      },
      {
        b: "parrafo",
        texto:
          "Y hay una forma de tumbar la idea que no necesita ninguna cifra, ni saber cuándo cae " +
          "el perihelio, ni recordar cuántos millones de kilómetros hay hasta el Sol. Basta con " +
          "mirar un mapa. Cuando en Madrid es agosto y hace cuarenta grados, en Buenos Aires es " +
          "invierno. Y en Sídney también, y en Ciudad del Cabo, y en Santiago de Chile. Medio " +
          "planeta está sacando los abrigos exactamente en el mismo instante en que el otro medio " +
          "se derrite.",
      },
      {
        b: "parrafo",
        texto:
          "Pero la Tierra es una sola. No tiene un hemisferio que orbite por su cuenta: en cada " +
          "momento el planeta entero está a una única distancia del Sol, la misma para Madrid que " +
          "para Sídney, con una diferencia entre ambas de unos pocos miles de kilómetros que no " +
          "significan nada frente a los ciento cincuenta millones que hay hasta el Sol. Si la " +
          "distancia fuera la responsable, todo el planeta tendría verano a la vez y todo el " +
          "planeta tendría invierno a la vez. Y no ocurre eso en absoluto: los dos hemisferios " +
          "tienen las estaciones perfectamente cambiadas, lo cual descarta la distancia como " +
          "causa sin necesidad de medir nada.",
      },
      {
        b: "dato",
        texto:
          "¿Sabías que…? El verano del hemisferio norte ocurre cuando la Tierra está más lejos " +
          "del Sol, y aun así es de media algo más cálido que el del hemisferio sur. La razón no " +
          "tiene que ver con la órbita sino con el reparto de tierra y agua: el norte tiene mucha " +
          "más superficie continental, y el suelo se calienta bastante más deprisa que el océano, " +
          "que se toma su tiempo para todo.",
      },
    ],
  },
  {
    id: "erizar-un-pelaje-que-ya-no-tienes",
    titulo: "Por qué tenemos piel de gallina",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-tenemos-piel-de-gallina», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Se te eriza un pelaje que perdiste hace millones de años» */
    encargo: "Se te eriza un pelaje que perdiste hace millones de años",
    fotos: [
      {
        local: p_erizar_un_pelaje_que_ya_no_tienes,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Se te eriza un pelaje que perdiste hace millones de años",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Darwin ya lo señaló como una reliquia",
      },
      {
        b: "parrafo",
        texto:
          "En 1872, en <em>La expresión de las emociones en el hombre y en los animales</em>, " +
          "Darwin dedicó un buen rato a un detalle que a casi nadie le parecía digno de estudio: " +
          "que a las personas se les erizara el vello. Le interesaba porque era exactamente el " +
          "tipo de rasgo que buscaba, uno que solo tiene sentido si miras a los parientes. Un " +
          "gato asustado se hincha. Un perro levanta el pelo del lomo. Un erizo entero es esa " +
          "idea llevada al extremo. Y nosotros hacemos el mismo gesto, con el mismo mecanismo, " +
          "sin nada que levantar.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que ocurre bajo la piel es de una sencillez casi mecánica. Cada folículo del que " +
          "sale un pelo tiene enganchado un músculo diminuto, el <strong>erector del " +
          "pelo</strong>, y cuando ese músculo se contrae tira de la base del folículo y lo " +
          "endereza. El pelo, que estaba tumbado, se pone de punta. Y como la base del folículo " +
          "se hunde al inclinarse el músculo, la piel de alrededor se abulta en ese punto: eso es " +
          "cada uno de los granitos que ves. La piel de gallina no es una reacción de la piel, es " +
          "el resultado visible de unos cuantos miles de músculos microscópicos tirando a la vez.",
      },
      {
        b: "parrafo",
        texto:
          "En un animal con pelaje, ese gesto hace dos cosas útiles y las hace bien. Con frío, el " +
          "pelo erguido atrapa una capa de aire entre los pelos y contra la piel, y ese aire " +
          "quieto es un aislante excelente: el animal se pone un abrigo más grueso sin cambiar de " +
          "abrigo. Y ante una amenaza, un pelaje erizado multiplica la silueta, que es la manera " +
          "más barata que existe de parecer más grande sin serlo.",
      },
      {
        b: "parrafo",
        texto:
          "En ti no hace ninguna de las dos. El vello que te queda es demasiado corto y demasiado " +
          "escaso para atrapar nada, y desde luego nadie te ha visto nunca más grande por tener " +
          "la piel de gallina. El mecanismo se conserva íntegro y el resultado es puramente " +
          "decorativo, que es la definición de manual de un rasgo vestigial.",
      },
      {
        b: "rayo",
        texto:
          "El músculo funciona perfectamente. Lo que falta es el pelaje que tendría que levantar.",
      },
      {
        b: "rotulo",
        texto:
          "Por eso te pasa con el frío y con el miedo, que no se parecen en nada",
      },
      {
        b: "parrafo",
        texto:
          "Hay un detalle de la piel de gallina que suele pasarse por alto y que encaja " +
          "perfectamente con lo anterior: la disparan cosas que no tienen nada que ver entre sí. " +
          "El frío al salir de la ducha, un susto, una escena de una película, una canción. Si " +
          "fuera un termostato, la segunda mitad de esa lista no debería estar ahí.",
      },
      {
        b: "parrafo",
        texto:
          "La explicación es que el músculo erector del pelo no obedece a la temperatura, sino al " +
          "<strong>sistema nervioso simpático</strong>, que es el que gestiona la respuesta de " +
          "alerta del organismo. Ese sistema se activa cuando hay que producir calor y también " +
          "cuando hay que prepararse para reaccionar deprisa, y en los dos casos ordena lo mismo " +
          "a lo largo de todo el cuerpo: acelerar el corazón, cerrar los vasos de la piel, " +
          "dilatar las pupilas, y de paso erizar el pelo. No son dos mecanismos distintos que " +
          "casualmente coinciden. Es un solo mecanismo con dos motivos para encenderse.",
      },
      {
        b: "parrafo",
        texto:
          "Y eso explica por qué la piel de gallina llega siempre acompañada. Casi nunca aparece " +
          "sola: viene con el escalofrío, con el corazón acelerado o con esa sensación de " +
          "recorrido por la espalda. Estás viendo la parte más visible de una respuesta que está " +
          "ocurriendo entera por debajo.",
      },
      {
        b: "rayo",
        texto:
          "El pelo no lo levanta la temperatura, lo levanta la alarma. Por eso el frío y el miedo " +
          "hacen exactamente lo mismo.",
      },
    ],
  },
  {
    id: "tiritar-desperdiciar-energia",
    titulo: "Por qué tiritamos",
    categoria: "Cuerpo humano",
    color: "var(--slate)",
    /* Serie «por-que-tiritamos», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Tiritar consiste en desperdiciar energía a propósito» */
    encargo: "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada detrás.",
    fotos: [
      {
        local: p_tiritar_desperdiciar_energia,
        autor:
          "Fotografía de Anzhela Svyrydiuk, en Pexels.",
        licencia: "Pexels License",
        fuente:
          "https://www.pexels.com/photo/29023988/",
        alt:
          "Hojas cubiertas de escarcha blanca en primer plano, con la hierba helada difuminada " +
          "detrás.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Tus músculos son máquinas malísimas, y ahí está el truco",
      },
      {
        b: "parrafo",
        texto:
          "¿Te has parado a pensar en lo absurdo que resulta tiritar? Tienes frío, que es una " +
          "situación en la que conviene ahorrar recursos, y la respuesta de tu cuerpo consiste en " +
          "ponerse a temblar sin que tú se lo pidas, quemando energía en un movimiento que no te " +
          "lleva a ninguna parte, no te tapa y ni siquiera te deja sujetar bien una taza. Visto " +
          "de fuera parece un fallo del sistema, una avería nerviosa provocada por el frío. Es " +
          "justo lo contrario: es una de las soluciones más ingeniosas que tiene tu organismo.",
      },
      {
        b: "parrafo",
        texto:
          "Para entenderlo hay que aceptar antes algo poco halagador sobre tus músculos, y es que " +
          "<strong>son máquinas malísimas.</strong> Cuando un músculo se contrae, solo una parte " +
          "de la energía química que consume acaba convertida en movimiento útil; la mayor parte " +
          "se disipa en forma de calor, sin más. Ese es el motivo por el que te acaloras subiendo " +
          "unas escaleras o por el que un gimnasio en invierno no necesita calefacción: hay un " +
          "montón de gente tirando energía por la ventana mientras intenta desplazar unas pesas. " +
          "En circunstancias normales esa ineficiencia es un incordio que hay que compensar " +
          "sudando. Cuando tienes frío, se convierte en la solución.",
      },
      {
        b: "parrafo",
        texto:
          "Porque tiritar consiste exactamente en eso: contraer músculos a toda velocidad, en " +
          "pulsos rápidos y alternos, <strong>sin ninguna intención de desplazarte</strong>, " +
          "precisamente para cobrar el calor sobrante. Es aprovechar el defecto en lugar de " +
          "sufrirlo. El movimiento no es el objetivo, sino el efecto secundario visible; lo que " +
          "de verdad se busca es el desperdicio, y por eso el temblor es rápido, corto y sin " +
          "dirección: no hace falta que vaya a ningún sitio.",
      },
      {
        b: "parrafo",
        texto:
          "La orden sale del <strong>hipotálamo posterior</strong>, la región del cerebro que " +
          "hace de termostato y que compara continuamente tu temperatura interna con el valor que " +
          "debería tener. En cuanto detecta que esa temperatura cae, pone a temblar la " +
          "musculatura empezando por la del tronco y el cuello, que es la más cercana a los " +
          "órganos que hay que proteger. Los dientes castañetean porque la mandíbula también " +
          "entra en el reparto, y las manos y los pies tiemblan al final o no tiemblan, porque " +
          "calentarlos no es prioritario.",
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
          "Los recién nacidos no pueden hacer eso, y tienen otro sistema",
      },
      {
        b: "parrafo",
        texto:
          "Existe una excepción llamativa a todo lo anterior, y son los bebés. Un recién nacido " +
          "apenas puede tiritar, porque no tiene todavía masa muscular suficiente para generar " +
          "calor por esa vía, y sin embargo se enfría muchísimo más rápido que un adulto: tiene " +
          "mucha superficie de piel en proporción a su volumen, que es la peor combinación " +
          "posible para conservar temperatura. Y aun así son perfectamente capaces de mantenerse " +
          "calientes.",
      },
      {
        b: "parrafo",
        texto:
          "Lo hacen con un sistema completamente distinto, la <strong>termogénesis sin " +
          "temblor</strong>, cuyo combustible es un tejido especializado llamado <strong>grasa " +
          "parda</strong>. Se llama parda porque está repleta de mitocondrias, que le dan ese " +
          "color oscuro, y un bebé la tiene concentrada sobre todo en la espalda, el cuello y " +
          "alrededor de los riñones. Cuando se enfría, una señal química la activa, y esas " +
          "mitocondrias hacen algo peculiar: en lugar de usar la energía de la grasa para " +
          "fabricar el combustible celular habitual, la desvían directamente a calor mediante una " +
          "proteína que cortocircuita el proceso a propósito. No hay movimiento, no hay temblor, " +
          "no hay gasto muscular. Es una estufa química funcionando bajo la piel.",
      },
      {
        b: "parrafo",
        texto:
          "Dicho en corto: un adulto genera calor gastando músculo y un recién nacido lo genera " +
          "quemando grasa, dos caminos muy distintos que llegan al mismo sitio. Y durante mucho " +
          "tiempo se creyó que esa grasa parda desaparecía en la infancia, hasta que se comprobó " +
          "que los adultos conservamos depósitos activos, sobre todo en el cuello y por encima de " +
          "las clavículas, y que se encienden cuando pasamos frío de verdad.",
      },
      {
        b: "rayo",
        texto:
          "Un recién nacido casi no puede tiritar. Genera calor quemando grasa parda directamente " +
          "en sus mitocondrias, sin mover un solo músculo.",
      },
    ],
  },
  {
    id: "nadie-oyo-su-voz-hasta-1877",
    titulo: "Por qué tu voz grabada suena rara",
    categoria: "Ciencia",
    color: "var(--clay)",
    /* Serie «por-que-tu-voz-grabada-suena-rara», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Nadie oyó su propia voz hasta 1877» */
    encargo: "Nadie oyó su propia voz hasta 1877",
    fotos: [
      {
        local: p_nadie_oyo_su_voz_hasta_1877,
        autor: "",
        licencia: "Pexels License",
        alt:
          "Nadie oyó su propia voz hasta 1877",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "Doscientas mil generaciones sin saber cómo sonaban",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en todo lo que un ser humano podía saber de sí mismo antes de la tecnología " +
          "moderna. Cómo era su cara, con solo asomarse a un charco quieto o a un espejo de " +
          "bronce. Cómo olía, cómo se movía, cómo eran sus manos. Todo eso estaba disponible " +
          "desde siempre y para cualquiera.",
      },
      {
        b: "parrafo",
        texto:
          "Su voz, no. Durante toda la historia de la especie, ningún ser humano tuvo manera de " +
          "oír su propia voz como la oían los demás. La escuchaba constantemente, desde dentro, " +
          "pero jamás desde fuera. Y como no había con qué compararla, nadie sospechaba siquiera " +
          "que hubiera dos versiones distintas.",
      },
      {
        b: "parrafo",
        texto:
          "Eso terminó en 1877, cuando Edison presentó el fonógrafo, el primer aparato capaz de " +
          "registrar un sonido y volver a reproducirlo. Hubo un intento anterior, el " +
          "fonoautógrafo de Édouard-Léon Scott de Martinville, que en 1857 ya conseguía dibujar " +
          "la forma de una onda sonora sobre papel ahumado, pero no podía reproducirla: servía " +
          "para ver el sonido, no para escucharlo. Con Edison, por primera vez, una persona pudo " +
          "oír su propia voz saliendo de un sitio que no era su cabeza.",
      },
      {
        b: "parrafo",
        texto:
          "Y con ese aparato apareció, de golpe, una sensación que ningún ser humano había tenido " +
          "antes: la de no reconocerse.",
      },
      {
        b: "rayo",
        texto:
          "Una persona podía verse la cara desde que existen los charcos. Oírse la voz solo es " +
          "posible desde hace siglo y medio.",
      },
      {
        b: "rotulo",
        texto:
          "Tu cráneo hace de altavoz de graves",
      },
      {
        b: "parrafo",
        texto:
          "La explicación de por qué no te reconoces está en que tu voz te llega por dos caminos " +
          "a la vez, y solo uno de ellos existe para los demás.",
      },
      {
        b: "parrafo",
        texto:
          "El primero es el evidente: el sonido sale de tu boca, viaja por el aire, entra por el " +
          "conducto auditivo y llega al oído interno. Ese es el único camino que tiene cualquier " +
          "otra persona para oírte, y es también el único que capta un micrófono.",
      },
      {
        b: "parrafo",
        texto:
          "El segundo es interno. Al hablar, las cuerdas vocales hacen vibrar el tejido y los " +
          "<strong>huesos de tu cráneo</strong>, y esa vibración llega directamente al oído " +
          "interno por dentro, sin pasar por el aire. Y aquí está la clave: el hueso no transmite " +
          "todas las frecuencias por igual. Conduce mucho mejor las graves que las agudas, así " +
          "que ese segundo canal te está entregando una versión de tu voz con los graves " +
          "reforzados.",
      },
      {
        b: "parrafo",
        texto:
          "Lo que tú oyes cuando hablas es la suma de las dos cosas: la voz que sale de tu boca, " +
          "más un refuerzo de graves que te entrega tu propio esqueleto. Por eso tu voz te suena " +
          "más grave, más llena y más resonante de lo que es. Y por eso una grabación, que solo " +
          "contiene la mitad aérea, te suena más aguda y más delgada de lo que esperabas. No es " +
          "que el micrófono la deforme: es que le falta el bajo que ponías tú.",
      },
      {
        b: "rayo",
        texto:
          "Tu cráneo te está poniendo un refuerzo de graves que nadie más oye. La grabación no es " +
          "peor: le falta tu esqueleto.",
      },
    ],
  },
  {
    id: "por-que-vuelan-los-aviones-es-falso",
    titulo: "Por qué vuelan los aviones",
    categoria: "Ciencia",
    color: "var(--teal)",
    /* Serie «por-que-vuelan-los-aviones», número 1. Se entiende suelto. */
    /* Su titular, el que trae el .md: «Lo que te enseñaron sobre por qué vuelan los aviones es falso» */
    encargo: "Ocho reactores de la Patrouille de France en formación cerrada, dejando estelas de humo.",
    fotos: [
      {
        local: p_por_que_vuelan_los_aviones_es_falso,
        autor:
          "Fotografía de Łukasz Golowanow.",
        licencia: "Attribution",
        fuente:
          "https://commons.wikimedia.org/wiki/File:Patrouille_de_France_Radom_3_1.JPG",
        alt:
          "Ocho reactores de la Patrouille de France en formación cerrada, dejando estelas de " +
          "humo.",
      },
    ],
    soloPortada: true,
    textoDePablo: true,
    bloques: [
      {
        b: "rotulo",
        texto:
          "La explicación del colegio, y por qué no se sostiene",
      },
      {
        b: "parrafo",
        texto:
          "¿Te acuerdas de cómo te lo contaron? El ala es curva por arriba y más o menos plana " +
          "por abajo, así que el aire que pasa por encima tiene que recorrer un camino más largo " +
          "que el que pasa por debajo. Como ambos deben llegar al final del ala al mismo tiempo, " +
          "el de arriba se ve obligado a ir más rápido, y al ir más rápido su presión baja. Con " +
          "menos presión arriba que abajo, el ala sube. Suena impecable, tiene un dibujo " +
          "estupendo que lo acompaña y está en libros de texto, en carteles de museos de ciencia " +
          "y en la mitad de los vídeos divulgativos de internet.",
      },
      {
        b: "parrafo",
        texto:
          "La propia NASA tiene una página dedicada exclusivamente a explicar por qué está mal, " +
          "lo cual ya dice bastante sobre la extensión del problema. Y los fallos no son matices: " +
          "son bastante gordos.",
      },
      {
        b: "lista",
        puntos: [
          "<strong>Nadie ha dicho que tengan que llegar a la vez.</strong> Esa condición es una " +
            "suposición inventada, sin ningún fundamento físico detrás. No hay ninguna ley que " +
            "obligue a dos moléculas separadas en el borde de ataque a reencontrarse al final. Y " +
            "además resulta que es falsa: cuando se mide, el aire de arriba llega al borde de " +
            "salida <em>antes</em> que el de abajo, no a la vez.",
          "<strong>Las alas simétricas vuelan perfectamente.</strong> Muchos aviones " +
            "acrobáticos llevan perfiles idénticos por arriba y por abajo, sin ninguna curvatura " +
            "diferencial. Según esta teoría no deberían generar la menor sustentación, y sin " +
            "embargo despegan, vuelan y aterrizan como cualquier otro.",
          "<strong>Una plancha completamente plana también vuela.</strong> Un avión de papel no " +
            "tiene curvatura ninguna, y se sostiene sin el menor problema. Una tabla lisa " +
            "inclinada al viento genera sustentación de sobra.",
        ],
      },
      {
        b: "rayo",
        texto:
          "El aire que pasa por encima del ala no espera al de abajo. Llega antes. Toda la " +
          "explicación se apoya en una suposición que nadie comprobó.",
      },
      {
        b: "rotulo",
        texto:
          "Y sobre todo: los aviones vuelan boca abajo",
      },
      {
        b: "parrafo",
        texto:
          "Pero el argumento definitivo no requiere ni medir ni calcular nada, y lo has visto en " +
          "cualquier exhibición aérea a la que hayas ido. Un avión se pone invertido, con la " +
          "panza mirando al cielo, y sigue volando tan tranquilo durante todo el tiempo que le " +
          "apetezca al piloto.",
      },
      {
        b: "parrafo",
        texto:
          "Piensa en lo que eso implica. Si la forma del ala fuese la causa de la sustentación, " +
          "un avión boca abajo tendría el perfil exactamente al revés: la cara curva mirando al " +
          "suelo y la plana al cielo. Según la teoría del colegio, la fuerza resultante apuntaría " +
          "hacia abajo, y el aparato debería salir disparado contra el suelo en cuanto se " +
          "invirtiera. No solo no lo hace, sino que hay pilotos que se pasan buena parte del " +
          "número de espaldas. Ese solo hecho, sin ninguna ecuación, basta para tumbar la " +
          "explicación entera.",
      },
      {
        b: "parrafo",
        texto:
          "Hay incluso un fallo más, más técnico y menos vistoso pero igual de contundente. " +
          "Aunque aceptaras la suposición de partida y te pusieras a echar cuentas con ella, los " +
          "números no cuadran: la velocidad que la teoría predice para el aire de arriba es " +
          "demasiado baja para generar la sustentación que se mide de verdad en un túnel de " +
          "viento. Es decir, que la explicación no solo parte de una premisa inventada, sino que " +
          "además, aun concediéndosela, da un resultado equivocado.",
      },
      {
        b: "rayo",
        texto:
          "Los aviones vuelan boca abajo en cualquier exhibición aérea. Eso, por sí solo, " +
          "desmonta la explicación de la forma del ala.",
      },
    ],
  },
];
