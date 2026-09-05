# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs` y de
`node scripts/coteja-fotos.mjs`.

| | hecho | queda |
|---|---|---|
| shorts con el texto de Pablo | **683** | en 241 series |
| de esos, **vivos en la app** | **225** | los otros 458 esperan portada |
| fotografías guardadas esperando texto | **29** | en `originales/sin-asignar/` |
| libros en el catálogo | 418 | |
| libros con resumen escrito a mano | **339** | 79 para el catálogo entero |
| cubiertas dibujadas por Pablo | **338** | 80 para el catálogo entero |
| emoticonos de las metas | 11 de 16 | Pablo manda los cinco que faltan |
| resúmenes antiguos generados | 0 | 0 |

**El tomo 9 entró el 1 de septiembre**: 48 series y 187 páginas, de las que 47
tienen fotografía —una por serie— y 140 esperan la suya. Ahí se ve la forma que
tiene esto: cada página es un short con su propia imagen, así que una tanda de
texto sin una foto por página entra a medias por definición.

Ese mismo día Pablo mandó **16 series reescritas** porque la primera versión
venía troceada en párrafos de una o dos frases; la v2 los devuelve a prosa
seguida. Cambian 65 páginas. Las 16 series de `16seriesreescritas` estaban
contenidas enteras y sin diferencias dentro de `Shortstomo9v2`, o sea que la
segunda entrega mandaba y la primera no aportaba nada.

Y una trampa al contar: en `referencia/textos-de-pablo/shorts/` hay tres `.md`
que NO son shorts —`FORMATO.md`, `COLA.md` y `FUENTES-IMAGENES.md`, que son
documentos de Pablo—, así que un `find . -name '*.md'` da 686 y lo cierto son
683. Se cuentan solo los de dentro de una carpeta de serie.

Los números se sacan así, y **se vuelven a sacar antes de escribirlos aquí**:

    node scripts/revisa-shorts.mjs                 shorts vivos
    node scripts/nocaben.mjs                       bloques sin sitio, muro ENTERO
    node scripts/catalogo.mjs > /dev/null          dentro / esperando portada
    grep -c '^  "' src/libros/paginas.ts           libros con resumen
    ls cubiertas-originales | wc -l                cubiertas de Pablo

El de los resúmenes estuvo puesto en 400 durante un día y era falso: son 339 y
lo han sido desde antes del 27 de agosto —comprobado con `git show` sobre tres
commits—, así que no se perdió ninguno, se escribió mal el número. Un dato
inventado en este documento es peor que no tenerlo: la siguiente sesión lo lee
como cierto y no lo vuelve a mirar.

## VEINTISÉIS FOTOGRAFÍAS POR DELANTE — 29 de agosto, madrugada

Tres envíos de fotografías —`Archivo_43`, `44` y `45`, con dos repetidas entre
ellos— y un solo texto: «Fuimos la única especie humana». O sea que por primera
vez **van muy por delante las imágenes**: 24 buenas esperando su `.md`.

Entra una serie, y quedan **178 shorts en 79 series, 64 vivos**.

### Las veinticuatro que esperan texto

Veintitrés llegan al techo de 2160 y una da 2052. **Ninguna hay que
descartarla.** Son casi todas de bichos —oso polar, koala, medusa, mamut, dodo,
T-Rex, tiburón, salmón, jirafa, elefante, camello, paloma, abeja, caballo,
perro, gato, arañas, aves migrando, pulpo, dinosaurios, el animal más viejo— y
tres que no lo son: cuánto pesa una nube, el planeta Tierra —que viene justo a
2160 × 3840, la medida exacta— y un asteroide.

Están listadas una a una en `originales/sin-asignar/README.md` con su medida.

### Y dos que no llegan

| archivo | píxeles | 9:16 da | le faltan |
|---|---|---|---|
| `Megalodon.jpg` | 960 × 863 | **485** | 1.159 |
| `Asteroide.jpg` | 2160 × 2700 | **1519** | 125 |

`Megalodon` es de las de 960 px y encima apaisada, así que se queda en menos de
un tercio del listón. `Asteroide` es el mismo caso que las venas azules: una
foto grande —2160 × 2700— pero **no lo bastante alta**, y al recortarla a 9:16
pierde hasta 1519. Ninguna de las dos tiene todavía texto que la espere, así
que no bloquean nada; pero cuando llegue, harán falta otras.

### Cómo queda

64 shorts vivos, 333 pantallas:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en todas
    puntofinal  314 de 333 acaban en punto (94 %)
    rayos       126 rayos pintados, 0 partidos
    huecos      4 pantallas pasan de 3 renglones, por un ⚡ o un 💡

El simulador, en **14,9 MB** con las portadas a 530 y las cubiertas a 232.

## CIENTO SETENTA Y CINCO, SESENTA Y TRES VIVOS — 29 de agosto, cierre

Siete series más —vino, cerveza, alcohol, desiertos, la canción pegada, el
flato y el momento de dormirse— con sus fotografías. Seis entran; **175 shorts
en 78 series, 63 vivos**.

Las seis portadas: **1.064 kB de media y las seis al techo de 2160**.

### La que se queda a 87 píxeles

`NoNosAcordamos-Dormir.jpg` da 1557 de los 1644 del suelo. Son **87 píxeles, un
5 % de estirón**, de lo que no se ve; y aun así no entra, porque él lo dijo
—«si alguna no es de esa calidad me lo dices y no la pones»— y una regla que se
salta cuando el número aprieta poco deja de ser una regla. Está apuntada como
la primera candidata a entrar en cuanto diga que sí, y su short —«Por qué no
recuerdas cuándo te dormiste»— está escrito y esperando solo por eso.

### El simulador ha cabido por los pelos, y es la última vez

15,5 MB de 16, con las cubiertas de los libros ya en 232 px y las portadas del
simulador en 540. El mirador aguanta mejor —10,6 MB— pero sus portadas han
bajado a 940.

**A la siguiente tanda no cabe**, y entonces toca lo que Pablo autorizó: dejar
shorts fuera del escaparate. Cuando llegue el momento, la lista de cuáles se
quedan fuera se escribe a mano en un fichero que se pueda leer —no un «los N
últimos» calculado, porque el catálogo va por orden alfabético de carpeta y ahí
no hay ninguna noción de antigüedad—. Los `.md` y los AVIF no se tocan nunca.

### Cómo queda

63 shorts vivos, 326 pantallas:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en todas
    puntofinal  308 de 326 acaban en punto (94 %)
    rayos       124 rayos pintados, 0 partidos
    huecos      4 pantallas pasan de 3 renglones, por un ⚡ o un 💡

## CIENTO SESENTA Y UN SHORTS, CINCUENTA Y SIETE VIVOS — 29 de agosto, noche

Veinticinco series más —cielo, espacio y bichos— y las diecinueve fotografías
que estaban guardadas eran exactamente las de esos textos. **161 shorts en 71
series, 57 vivos.**

Las diecinueve portadas nuevas: **1.197 kB de media**, catorce llegan al techo
de 2160 y las otras cinco lo dan todo sin llegar —1663, 1688, 1846, 1863 y
1924—, todas por encima del suelo. Ninguna que descartar.

### Lo que falta, y son dos cosas distintas

**Siete shorts escritos esperan una imagen más grande.** Todo lo que queda en
`originales/sin-asignar/` está ahí por eso, no por otra cosa:

| short | la foto da | le faltan |
|---|---|---|
| nudillos | 338 | 1.306 |
| bomba atómica | 645 | 999 |
| huellas dactilares, pelirrojos, resaca | 759 | 885 |
| venas azules | 1.326 | 318 |
| copos de nieve | 1.458 | 186 |

**Y cuatro series no tienen ninguna fotografía**, que no es lo mismo: «Cuál es
el ser vivo más grande», «Por qué el cielo es negro de noche», «Por qué el mar
brilla de noche» y «Por qué la Luna enseña siempre la misma cara».

### El simulador ya no da más de sí, y esta vez toca de verdad

Con 56 portadas empotradas, `movil.html` no cabe por ninguna vía cómoda. Lo que
se ha hecho hoy es apretar por el lado que Pablo no está mirando:

| | antes | ahora |
|---|---|---|
| cubiertas de libros | 296 px · 4,9 MB | **232 px · 3,2 MB** |
| portadas de shorts | 900 px | **540 px** |
| total | — | **15,2 MB** de 16 |

Y las portadas del mirador han bajado de 1440 a **1000**. Ese es el número que
duele, porque el mirador es justo donde se juzga un encuadre.

**A la siguiente tanda hay que dejar shorts fuera del simulador**, que es lo
que él autorizó: «si no caben borras las que teníamos, que esas ya he
comprobado que están bien». No hay más márgenes que apretar sin estropear lo
que se va a mirar. Los `.md` y los AVIF de `portadas/` no se tocan nunca: lo
que se recorta es el escaparate.

### Cómo queda

57 shorts vivos, 294 pantallas:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en todas
    puntofinal  277 de 294 acaban en punto (94 %)
    rayos       112 rayos pintados, 0 partidos
    huecos      4 pantallas pasan de 3 renglones, por un ⚡ o un 💡

## LA RESOLUCIÓN, A TOPE — 29 de agosto, noche

> «Que se vean lo mejor que se puede, la máxima resolución que te pase, pues
> esa, o la máxima que permitan los mejores móviles del mundo y los que
> vendrán; que se vea a una calidad espléndida. Si hay alguna que no es de esa
> calidad me lo dices y no la pones.»

Son dos instrucciones y hacían falta **dos números**, no uno:

| | | por qué |
|---|---|---|
| **techo** | 2160 px de ancho | 2160 × 3840, el vertical de 4K. El móvil más fino que se vende, el Xperia 1, tiene 1644; el iPhone Pro Max, 1320. Margen para los que vengan sin guardar lo que nadie va a ver. |
| **suelo** | 1644 px | Lo que ese Xperia necesita para enseñarla píxel a píxel. Por debajo se estira y se nota. |

Y entre medias, **lo que dé el original, sin estirarlo nunca**. Es la primera
mitad de su frase: si una foto da 1800 útiles, la portada sale a 1800. Antes se
redimensionaba siempre al objetivo, así que un original pequeño salía inflado y
solo se avisaba por consola.

**39 portadas · 944 kB de media · 28 llegan al techo.** El peso se ha
cuadruplicado —eran 262 kB— y es a propósito: «prioriza la imagen sobre el
peso». Si algún día pesa demasiado en datos móviles, bajar el techo a 1644
—el ancho exacto del mejor móvil— deja la mitad sin diferencia visible hoy.

### Las cinco que no llegan al suelo

Están para decidir, y **la decisión es de Pablo**: «me lo dices y no la pones».

| portada | sale a | le faltan | qué es |
|---|---|---|---|
| `por-que-vuelan-los-aviones-es-falso` | 1286 | 358 | un 22 % de estirón, se ve |
| `erizar-un-pelaje-que-ya-no-tienes` | 1406 | 238 | un 15 %, se nota poco |
| `el-cafe-no-te-da-energia` | 1540 | 104 | un 7 %, difícil de ver |
| `el-bostezo-no-tiene-que-ver-con-el-oxigeno` | 1626 | **18** | indistinguible |

**Y una sexta que se arregló sola**: `la-leche-cortada` salía a 1513 no por la
foto sino **por el zoom del encuadre a mano**, que estaba en 1,3. Acercarse
recorta, y lo recortado ya no está para la salida. Bajándolo a 1,15 pasa a
1711 y el encuadre sigue valiendo. Conviene recordarlo: **un zoom en
`recortes.json` cuesta resolución**, y el guion ya lo descuenta al calcular.

### Y catorce fotografías más, guardadas

Llegaron por la noche. Una entra —`Gato.jpg`, 2955 × 3694, que sustituye al
AVIF de 900 px y desbloquea «Por qué ronronean los gatos»—. **Las otras trece
esperan en `originales/sin-asignar/`** con su inventario medido en el README de
ahí: diez dan la talla y esperan texto —aurora, mar, glaciar, luna, estrellas,
galaxia, arcoíris, rayo, cohete, cuánto le queda a la Luna— y tres no llegan al
suelo: `BombaAtómica` (645), `VenasAzules` (1326) y `CopoDeNieve` (1458).

`VenasAzules` es un caso distinto y vale la pena entenderlo: la foto es grande
—2648 × 2358— pero **casi cuadrada**, y al recortarla a 9:16 se queda en 1326.
No es mala imagen, es que no tiene forma de portada. Y bloquea un short que ya
está escrito.

**El `Gato.avif` viejo se ha ido a `originales/retirados/`** como
`Gato-900px.avif`. Retirada no es borrada: ahí el guion no la vuelve a procesar
y el archivo sigue.

### Cómo queda

38 shorts vivos de 106 escritos, 195 pantallas:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en todas
    puntofinal  186 de 195 acaban en punto (95 %)
    rayos       74 rayos pintados, 0 partidos
    huecos      4 pantallas pasan de 3 renglones, por un ⚡ o un 💡

Y los simuladores, cada vez más justos: `movil.html` 15,9 MB con las portadas a
**600** —bajaron de 900 a 700, a 620 y ahora a 600 en un día— y `shorts.html`
12,1 MB con ellas a **1300**, que ya no es el 1440 de antes. La siguiente tanda
no cabe: toca `--cubiertas-ancho` y, después, dejar shorts fuera del escaparate.

## CIENTO SEIS SHORTS, TREINTA Y SIETE VIVOS — 29 de agosto, tarde

Dos envíos más: diecisiete portadas y luego los textos de once temas de su
`COLA.md`. **106 `.md` en 46 series, 37 vivos.**

### La calidad de las portadas sube, y es una orden suya

> «Ya siempre sabes que las portadas deben ir a la máxima calidad que permite
> un móvil, que se vea lo mejor posible a la mejor calidad posible.»

**AVIF pasa de 65 a 80 y WebP de 85 a 90.** El 65 era su número de la primera
tanda, de cuando todavía se pensaba en el peso; con «sin límite estricto de
peso» escrito justo al lado, quedarse en 65 no ganaba nada. La media pasa de
**262 a 468 kB**, dentro de lo que él llamó normal, y los degradados grandes
—el cielo, la miel, el hielo— dejan de bandearse. Está en el `CLAUDE.md`.

### CINCO IMÁGENES DE 900 PX QUE NO ENTRAN, Y POR QUÉ

De las diecisiete de la segunda tanda, **cinco vienen ya en AVIF y las cinco
miden 900 px de ancho justos**. Eso no es casualidad: es la marca de una imagen
guardada de una vista previa —la página de resultados, el visor de un banco de
fotos— en vez de descargada del original. La grande existe; se guardó la chica.

| archivo | píxeles | 9:16 deja | falta |
|---|---|---|---|
| `CRUJIRSENUDILLOS.avif` | 900 × 601 | **338** | 1.102 px |
| `Gato.avif` | 900 × 1125 | **633** | 807 px |
| `HuellaDactilar.avif` | 900 × 1350 | **759** | 681 px |
| `Pelirrojo.avif` | 900 × 1350 | **759** | 681 px |
| `Resaca.avif` | 900 × 1350 | **759** | 681 px |

Estirar la de los nudillos cuatro veces es exactamente lo contrario de lo que
acaba de pedir, así que **no entran**. Están en `originales/sin-asignar/` con
su README explicándolo. **La urgente es la de los nudillos**, porque su texto ya
está escrito y es lo único que le falta para salir.

Y de ahí sale una regla que ahora está en el `CLAUDE.md`: **una imagen pequeña
no se sube «tal cual» aunque la mande él.** El guion lo canta al terminar y hay
que mirarlo antes de dar una tanda por buena.

### El estirón del ⚡ no vale para un ##

Al meter estos textos, `huerfanas.mjs` cantó un subtítulo colgando al pie de la
2 de «Por qué la gente mayor huele distinto». La causa era mía: el estirón que
se añadió anoche para que un ⚡ que no cabe por veinte puntos no dejara medio
hueco detrás **se estaba aplicando a todo lo que no se parte**, y un `rotulo`
también entra por ahí. El rótulo se pasaba de la caja por medio renglón, se
daba por colocado y se quedaba solo, que es justo lo que Pablo prohibió sin
matices. Ahora el estirón es solo para `rayo` y `dato`.

Lo cazó una comprobación, no una lectura. Vale la pena decirlo porque el fallo
era invisible en el diario del reparto: allí todo cuadraba.

### Cómo queda

37 shorts vivos de 106 escritos, 190 pantallas:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en todas
    puntofinal  181 de 190 acaban en punto (95 %), ninguna pisa el indicador
    rayos       72 rayos pintados, 0 partidos
    huecos      4 pantallas pasan de 3 renglones, las cuatro por un ⚡ o un 💡

### Y los dos simuladores van justos de sitio

| | portadas | tamaño | tope |
|---|---|---|---|
| `movil.html` | 36 a 620 px | 15,6 MB | 16 |
| `shorts.html` | 36 a 1440 px | 13,6 MB | 16 |

El ancho de las portadas del simulador ha bajado de 900 a 700 y de 700 a 620 en
un día, solo por meter shorts. **No es una pérdida de calidad donde importa**:
los AVIF de `portadas/` siguen a 1440 y el mirador los lleva a tamaño nativo,
que es donde se juzga un encuadre.

**Pero esto se acaba.** A la siguiente tanda no cabe, y entonces toca, por este
orden: bajar `--portadas-ancho` del mirador de 1440 a 1200, bajar
`--cubiertas-ancho` de 296, y por último dejar shorts fuera del simulador, que
es lo que Pablo autorizó —«si no caben borras las que teníamos, que esas ya he
comprobado que están bien»—. Los `.md` y los AVIF no se borran nunca: lo que se
recorta es el escaparate.

## OCHENTA Y CINCO SHORTS, VEINTICINCO VIVOS — 29 de agosto de 2026

Pablo mandó `shorts2908.zip`: el corpus entero otra vez, **85 `.md` en 24
series**, y catorce fotografías. Los 35 de anoche vienen dentro sin tocar
—comprobado byte a byte—, así que son 50 shorts nuevos.

La carpeta pasa a llamarse **`referencia/textos-de-pablo/shorts/`**, sin fecha:
manda el corpus entero cada vez, y un nombre con fecha envejece al día
siguiente.

### Lo que trae además de los textos

- **`COLA.md`** — su lista de temas, con `[x]` los escritos y `[ ]` los que
  faltan. Quedan once pendientes. Es lo que hay que mirar para saber qué viene.
- **`FUENTES-IMAGENES.md`** — dónde busca las imágenes y qué permite cada
  licencia. Es la respuesta a la pregunta de las portadas, aunque no dice de
  dónde sale CADA una.
- **`FORMATO.md`** actualizado, pero solo en su parte: dónde guarda él los
  ficheros y cómo reconstruye su Word. La cabecera no cambia.

**Esos tres van en la raíz y NO son shorts.** El guion los tomaba por temas
—pedía una portada para «Cola de temas»— porque filtraba por nombre de archivo.
Ahora filtra por la regla que escribió él: un short vive dentro de la carpeta
de su serie, nunca suelto en la raíz.

### Las catorce portadas

Cada `.md` dice en su cabecera cómo se llama su imagen, así que el reparto sale
solo: `Cebolla.jpg` → `la-cebolla-entera-no-lleva-nada.avif`, y así las
catorce. Procesadas a 1440 × 2560, **262 kB de media en AVIF**.

Dos se quedan cortas y hay que saberlo: **`erizar-un-pelaje-que-ya-no-tienes`
(1406 px)** y **`por-que-vuelan-los-aviones-es-falso` (1286 px)**, las dos
porque el original no daba más. La segunda ya estaba así de antes.

**La cebra necesitó encuadre a mano.** La foto es casi 9:16 ya, así que no se
recortaba nada y los animales salían diminutos en medio de la llanura. Con
`{ x: 0.30, y: 0.52, zoom: 1.8 }` llenan la pantalla.

**Y ahí apareció un fallo callado en `assets/recortes.json`:** sus dos entradas
estaban con el nombre VIEJO de las fotos —`por-que-te-mareas-en-el-coche`— y el
guion busca por el nombre del archivo de `originales/`. Se renombraron las fotos
al identificador del tema y las claves se quedaron atrás, así que los dos
encuadres que Pablo dio por buenos se habrían perdido en la siguiente pasada,
sin decir nada. Corregidas, y el `_` del fichero ahora avisa de que la clave es
el nombre del archivo.

### Nada de créditos inventados

La banda de la portada llevaba **«Imagen del proyecto.»** cuando no había
crédito. Eso no es un relleno: es afirmar que la fotografía es nuestra, y de
estas catorce no lo es ninguna. Ahora, sin crédito, **no se pinta la línea**.
Quien avisa de que falta es `portadas.mjs` —lo canta al terminar— y la fila del
CSV, que es donde debe estar.

**Faltan las procedencias de las catorce.** Sin fuente, URL y licencia en
`assets/portadas.csv` una portada no debería entrar; entran porque él las
mandó, pero la fila está a medias y hay que cerrarla.

### El tamaño: caben los veinticinco, y no ha hecho falta borrar nada

Pablo lo dejó dicho por si acaso: «si no caben borras las que teníamos, que esas
ya he comprobado que están bien». **No ha hecho falta.** Con las 24 portadas a
900 de ancho el simulador se iba a 16,8 MB, por encima del tope de 16. Bajando
solo el ancho de las portadas DEL SIMULADOR a 700 —los AVIF de `portadas/`
siguen a 1440— se queda en **15,1 MB** con los veinticinco dentro.

Y la calidad no se pierde donde importa, porque **el mirador de shorts sí las
lleva a 1440**: pesa 8,6 MB de los 16 que puede. Ese es el sitio para juzgar un
encuadre; `movil.html` es para ver la app entera.

**El orden de los recortes, para la próxima vez que no quepa:**

1. `--portadas-ancho` en `movil.html`, que es lo que se acaba de hacer. A 700
   quedan unos 0,9 MB de aire, o sea unas seis portadas más.
2. `--cubiertas-ancho`, hoy en 296 y 4,9 MB. Son las miniaturas de la
   estantería y se ven pequeñas.
3. Y ya sí, dejar shorts fuera del simulador, que es lo que él autorizó. Los
   `.md` y los AVIF no se borran nunca: lo que se recorta es el escaparate.

### Cómo queda

25 shorts vivos de 85 escritos. Todas las comprobaciones en verde:

    huerfanas   0 palabras sueltas, 0 recortadas, mismo margen en las 129
    puntofinal  121 de 129 acaban en punto (94 %), ninguna pisa el indicador
    rayos       48 rayos pintados, 0 partidos
    huecos      3 pantallas pasan de 3 renglones, las tres por un ⚡ o un 💡

## LOS TREINTA Y CINCO SHORTS Y EL PUNTO FINAL — 28 de agosto de 2026, noche

Es el estado de HOY. Lo de debajo —«Diez temas y el paginado en tiempo real»—
es de esta misma tarde y sigue explicando POR QUÉ está hecho así, pero sus
números y sus nombres de carpeta ya no valen.

### De dónde salen los shorts

Pablo escribe los textos en `.md` con cabecera y los manda en carpetas por
serie. Están en **`referencia/textos-de-pablo/shorts/`** —aquella noche eran
doce carpetas y 35 ficheros; el 29 pasaron a 24 y 85—, y el formato lo escribió
él: `FORMATO.md`, dentro de esa misma carpeta.

    node scripts/catalogo.mjs > src/historias/curiosidades.ts

lee TODOS los `.md` y escribe el catálogo entero. **`curiosidades.ts` no se
edita a mano.** Entran solo los que tienen su portada en `portadas/<id>.avif`
—regla de Pablo: «quita el resto de shorts que tienen la portada genérica,
elimínalos»— y el guion imprime al final los que faltan con el nombre de imagen
que espera cada uno.

### Los once que están vivos, con sus títulos

**El título de un short es el de su SERIE, no el titular de la parte.** Lo pidió
él esta noche: «cambia a los títulos que estaban antes: cuánto le queda al Sol,
cómo llueve, por qué se corta la leche, todos los títulos de antes». Sus `.md`
traen en la cabecera el titular de cada parte —«La costra no está curando
nada»—, que está muy bien escrito pero es el titular de un capítulo: doce
seguidos en el muro y la lista deja de poder leerse. `MOLDE.md` ya lo tenía
escrito desde antes: «el título pregunta o nombra la cosa, tres a seis
palabras». La tabla de títulos por serie está en `scripts/catalogo.mjs`, al
lado de la de colores, y avisa si dos shorts vivos acaban llamándose igual.

| serie | título | partes | vivas |
|---|---|---|---|
| `como-cicatrizan-las-heridas` | Cómo cicatrizan las heridas | 3 | 1 |
| `como-funciona-la-gravedad` | Cómo funciona la gravedad | 4 | 1 |
| `cuanto-le-queda-al-sol` | Cuánto de vida le queda al Sol | 4 | 1 |
| `por-que-bostezamos` | Por qué bostezamos | 3 | 1 |
| `por-que-llueve` | Por qué llueve | 4 | 1 |
| `por-que-pica-el-picante` | Por qué pica el picante | 2 | 1 |
| `por-que-se-corta-la-leche` | Por qué se corta la leche | 3 | 1 |
| `por-que-te-mareas-en-el-coche` | Por qué te mareas en el coche | 2 | 1 |
| `por-que-tenemos-estaciones` | Por qué tenemos estaciones | 2 | 1 |
| `por-que-tiritamos` | Por qué tiritamos | 2 | 1 |
| `por-que-vuelan-los-aviones` | Por qué vuelan los aviones | 3 | 1 |
| `por-que-no-puedes-hacerte-cosquillas` | Por qué no puedes hacerte cosquillas | 2 | **0** |
| `sueltos` | — (el del oro, sin serie) | 1 | **0** |

De cada serie solo tiene portada la primera parte. **En cuanto entre una
segunda habrá dos shorts llamados igual en el mismo muro**, y eso hay que
decidirlo con Pablo, no resolverlo por cuenta propia: `catalogo.mjs` lo canta
por la salida de error.

Las cuatro primeras portadas que faltan: `la-manzana-de-newton.avif`,
`el-olor-de-la-lluvia.avif`, `tu-cerebro-apaga-tus-propias-cosquillas.avif` y
`todo-el-oro-choque-de-dos-estrellas.avif`.

### Que cada pantalla acabe en punto

Lo pidió así: «el texto realmente intenta siempre que cada página acabe con un
punto; puedes alargar más el margen o puedes acortarlo, pero es importante que
se intente que acabe con el punto que mejor convenga». Y media hora antes había
tumbado los guiones: «nada, olvídalo, no pongas guiones, hazlo como las
capturas que te pasé de Headway».

De todos los cortes que cierran una frase se coge el que menos se aparta del
que llenaba la página: **hasta dos renglones por delante y dos por detrás**.
Los de delante crecen sobre el margen de pie, que está dimensionado para ellos.
Salen **55 de 60 pantallas acabadas en punto, el 92 %**; las cinco que no
pueden es porque el párrafo no tiene ningún punto a menos de dos renglones.

**El margen de pie está en 96 y el indicador de página en `--barra` + 4.** Los
números están medidos, no elegidos: a 112 salía el 89 % con la caja de texto en
576, y a 96 sale el 92 % con la caja en 592. Más margen no es más seguro, es
menos texto y más blanco al final de las páginas que no se estiran, que es
justo lo que él ve primero. La cuenta entera está en la hoja de paginado.

### Y el fallo que se comía texto sin avisar

`.muro-hoja-cuerpo` llevaba un `overflow: hidden` de antes de que existiera la
paginación —un cinturón para que una portada larga no se pintara encima del
«Seguir»— y **recortaba exactamente a la altura de la caja**. En cuanto el
reparto empezó a pasarse de esa altura a propósito, los renglones de la
tolerancia se calculaban, se daban por colocados y no se pintaban: la pantalla
se veía cortada en «y por tanto» y esas palabras no salían tampoco en la
siguiente, porque el reparto ya las había dado por puestas.

Lo peor no fue el fallo: fue que **todas las comprobaciones decían que estaba
bien**, porque miraban el árbol de la página y allí el párrafo estaba entero y
acababa en punto. Se vio poniendo una captura al lado del número.

El cinturón vive ahora en `.muro-hoja`, que recorta contra el borde de la hoja
entera y deja libre el margen de pie. Y `huerfanas.mjs` ya no cuenta
desbordamiento —desbordar es lo que se quiere— sino que busca al primer
antepasado que recorta y comprueba que el texto no le llega.

### Las cuatro comprobaciones, y hay que pasarlas todas

    npx vite build && npx vite preview --port 4173 &
    node scripts/huecos.mjs      hueco por pantalla, con su razón
    node scripts/huerfanas.mjs   líneas sueltas, texto recortado y márgenes
    node scripts/rayos.mjs       ⚡ partidos; tiene que dar 0
    node scripts/puntofinal.mjs  cuántas acaban en punto, y si alguna pisa

Hoy: 0 palabras sueltas, 0 recortadas, 0 rayos partidos, 92 % de puntos
finales, y **una sola** pantalla con más de tres renglones de hueco —un 💡 que
no cabe y no se parte, que es regla suya—.

El ⚡ y el 💡 siguen sin partirse nunca, pero desde esta noche **sí se
estiran**: uno que no cabe por veinte puntos se pasa de la caja como un
párrafo en vez de irse entero a la pantalla siguiente. Con eso, de cinco
pantallas con hueco grande por su culpa queda una, y con cuatro renglones en
vez de diez.

## DIEZ TEMAS Y EL PAGINADO EN TIEMPO REAL — 28 de agosto de 2026, tarde

Pablo mandó diez temas y, con ellos, **siete requisitos de maquetación**. Están
copiados enteros en **`.claude/skills/paginado-shorts/SKILL.md`** y **hay que
leerlos antes de tocar nada de esto**. En resumen:

1. Cada página ocupa el alto visible: `100dvh` menos la barra menos
   `env(safe-area-inset-bottom)`. Nunca `100vh`.
2. `overflow: hidden`. Dentro de un tema no hay scroll.
3. **El reparto se calcula al pintar**, midiendo en un contenedor oculto.
4. El corte cae siempre entre párrafos.
5. Un título no se separa de su primer párrafo; el rayo no abre página.
6. Se recalcula al girar el móvil o al cambiar el tamaño de letra del sistema.
7. Si un párrafo no cabe entero, **no se corta**: se avisa por consola con el
   nombre del tema para que lo parta él.

### Lo que eso cambió por dentro

**`curiosidades.ts` ya no tiene páginas.** Cada historia es una tirada de
bloques —`rotulo`, `parrafo`, `lista`, `rayo`— y el número de pantallas no está
escrito en ninguna parte: depende del móvil. Un tema que en un teléfono ocupa
doce pantallas ocupa nueve en uno grande, y las dos cosas están bien.

### El reparto llena las pantallas: parte por renglón, no por bloque

Primera versión: cortar solo entre bloques enteros. Pablo la devolvió con el
método para diagnosticarla, y con razón —«añade logs que impriman la altura
disponible, la altura medida de cada párrafo y el acumulado; enséñame esos
números antes de dar nada por bueno»—. Los números descartaron sus dos
sospechas y señalaron la de verdad:

    DISPONIBLE 675,3 · ancho de la caja de medir 343 · ancho de la real 343
    fuentes loaded · 20px/27px "Iowan Old Style" en las dos
    alturas 64, 216, 189, 135, 162… todas múltiplos de 27, el renglón
    pantalla 1: 64+27+216+27+189 = 523 · el siguiente pedía 162 y quedaban 152

O sea: la medición era exacta y el fallo era que **un párrafo entra entero o no
entra**. Fallaba por diez píxeles y dejaba el 23 % de la pantalla en blanco.

Ahora, cuando el siguiente no cabe, **se parte por renglón completo**: se
buscan por bisección las posiciones de espacio del párrafo y se mide con un
`Range`, que devuelve un rectángulo por renglón pintado. Nunca a mitad de
palabra. Las listas se parten entre puntos. Y la regla de que el rayo no abra
pantalla dejó de pagarse a cualquier precio: si arreglarla deja la pantalla por
debajo del 80 %, no se arregla.

    node scripts/llenado.mjs

dice el llenado de cada pantalla. De las diez historias, **setenta pantallas
entre el 91 % y el 100 %** y ocho entre el 79 y el 89, todas por la misma
causa: un subtítulo que no cabía y no se puede partir. Las últimas de cada tema
no cuentan: ahí ya no quedan bloques.

### Y el alto de la pantalla se MIDE

Fue la última corrección, y la más cara: tres rondas. Dos errores encima del
mismo número.

**Uno: la barra de pestañas contada dos veces.** Va con `position: absolute;
bottom: 0`, así que su alto ya cubre el área segura del móvil, y la hoja
reservaba `64 + env(safe-area-inset-bottom)`. En el iPhone de Pablo son treinta
y cuatro puntos restados dos veces; en el navegador de pruebas, con el área
segura a cero, no se veía. Ahora el alto de la barra se declara **una sola
vez**, en `--barra`, y de ahí lo leen la barra y el relleno.

**Dos: dos reglas de `padding-bottom` con la misma especificidad**, una detrás
de otra. Ganaba la de abajo y el número de arriba no hacía nada.

Y lo que evita que vuelva a pasar: **el alto ya no se calcula**. La caja del
texto lleva `flex: 1`, el layout resuelve el hueco y se lee su altura ya
renderizada. Cero aritmética.

**El pie de la última pantalla también ocupaba, y ya no.** Llevaba los dos
botones y el «siguiente short», unos cien puntos, y paginada con el alto de las
demás el texto se metía debajo y aparecía scroll; la hoja de medir llevaba una
copia inerte del pie para leer las dos alturas. **Nada de eso queda**: los
botones se compactaron en una fila de 44 y viven DENTRO del margen de pie, en
`position: absolute`, así que no le quitan sitio a nadie y la caja de texto
mide exactamente lo mismo en la primera pantalla y en la última —que es el
criterio de aceptación que puso Pablo—. El «siguiente short» se cayó: el gesto
vertical ya lo cuenta el muro y no valía cuarenta puntos de margen en TODAS las
pantallas. La copia inerte del pie se ha borrado de la hoja gemela.

**El que reparte es `usePaginas`, en `src/Shorts.tsx`.** Dentro de cada
pantalla se monta una **hoja gemela invisible** —misma clase, mismos rellenos,
misma tipografía— con la historia entera dentro. De ahí salen las alturas de
cada bloque y el alto útil, leídos del elemento y no de una constante. Un
`ResizeObserver` sobre esa hoja vuelve a repartir cuando cambia algo.

Va montada **también en la portada**, porque el número de pantallas hace falta
antes de entrar: para la barra de tramos y para saber si hay algo detrás del
«Seguir».

**Se han borrado `scripts/reparte.mjs` y `scripts/aire.mjs`.** Repartían el
texto en páginas fijas midiendo en un navegador y las escribían en el código.
Funcionaban y estaban mal por la regla 3: no saben nada del móvil de quien lee.
Si algún día vuelve a aparecer algo así, es que alguien se saltó la hoja de
reglas.

**Y el nuevo es `scripts/temas.mjs`**, que lee los `.md` de Pablo y escribe los
bloques. Sin medir nada: eso es de la app.

### Los diez temas

**Esta tabla es de la tarde y ya no vale.** Esa noche Pablo mandó los 35 de
`shorts/` y estos diez se quedaron atrás; los títulos, sin embargo, son
los que él quiso recuperar por la noche, así que aquí están las palabras
exactas. El estado de verdad es el de la sección de arriba.

Los originales están en `referencia/textos-de-pablo/28-agosto-tarde/`.

| | palabras | foto de portada |
|---|---|---|
| Cuánto le queda al Sol | 1.374 | sí |
| Por qué bostezamos | 1.060 | sí |
| Por qué vuelan los aviones | 1.091 | sí |
| Por qué llueve | 1.085 | sí |
| Por qué tiritamos | 756 | **falta** |
| Por qué pica el picante | 865 | **falta** |
| Por qué se te arrugan los dedos en el agua | 803 | **falta** |
| Por qué te mareas en el coche | 774 | **falta** |
| Por qué tenemos estaciones | 905 | **falta** |
| Cómo cicatrizan las heridas | 870 | **falta** |

Las seis sin foto enseñan el cartel de color, que es para lo que existe, y
llevan su `encargo` escrito. **Hay que buscarles portada**, con
`scripts/recorte.mjs` para juzgar el recorte.

**Y cada tema trae, en `encargos`, una imagen para DENTRO** que Pablo describió
en su texto con `> 🖼️`. No se pintan todavía: hoy la fotografía es solo de la
portada. Están guardadas para cuando toque.

## CÓMO SE TRABAJABA HASTA AQUÍ — 27 de agosto de 2026, por la noche

Pablo cambió la manera de trabajar al final de ese día, y sigue siendo la de
ahora:

> «Vamos a hacer una cosa mejor: primero te preparo yo el texto y te lo paso;
> por lo tanto quita las imágenes y, en base al texto, ponemos las imágenes.»

Y es mejor, no solo distinto. Escribiendo yo primero y buscando fotos después,
cuando una foto buena no aparecía la tentación era torcer el texto hacia la
foto que sí existía. Con el texto cerrado antes de abrir Commons, manda el
texto.

**Qué hacer cuando llegue el siguiente**: está escrito arriba y, con más
detalle, en la cabecera de `src/historias/curiosidades.ts`. En resumen:
guardar el original en `referencia/textos-de-pablo/`, cortarlo entre sus
párrafos midiendo con `scripts/aire.mjs`, y NO pasarlo por el molde —eso es
para lo que escribo yo—.

**Lo que se borró aquel día, por si hay que rescatarlo.** Se escribieron y
reescribieron cuatro shorts míos —el sol, la lluvia, los aviones y el mar—
con quince fotografías de Commons ya fichadas. El texto se tiró al llegar el
suyo; las fotografías siguen siendo buenas:

    git show 931c152:prototipo-microaprendizaje/src/historias/curiosidades.ts

Y las tres de dentro del Sol —la superficie del Inouye, la Tierra del Apolo 17
y la nebulosa de la Hélice—, que se quitaron el 28 porque Pablo pidió solo
portada, están en el commit `04fd2c2`.

## TRES PORTADAS SIN TEXTO — 28 de agosto de 2026

Pablo, esa mañana:

> «Ponme la portada así pero de ahora en varios temas: por qué los aviones
> vuelan, por qué llueve, por qué bostezamos. No pongas el texto, que eso te
> lo paso yo ahora; solo quiero ver la portada. Ten en cuenta que la portada
> debe ser bonita, de buena calidad y que se ajuste bien a los límites de
> imagen que tenemos, para que no salga muy cortada y quede fea.»

Están las tres en `curiosidades.ts` con **`paginas: []`**, que a partir de hoy
es una forma válida de short y significa exactamente esto: la fotografía y el
título están elegidos, el texto no ha llegado. No hace falta rellenar con nada
mientras tanto, y el relleno es lo que se queda.

Lo que cambia una portada sin texto respecto de un short entero: no pinta la
barra de tramos, no pinta el «Seguir» —no hay adónde seguir— y no pinta
«Guardar / Compartir / Siguiente short», porque su única pantalla no es la
última de nada. Es un cartel.

**`scripts/recorte.mjs`, y esto es lo que resuelve el encargo.** La portada es
la pantalla entera: 375×812, o sea 0,46 de proporción. Una foto apaisada
normal de 3:2 pierde ahí **el setenta por ciento de su ancho**, y eso no se ve
mirando la foto en Commons: se ve después, ya metida, cortada y fea. La hoja
de contacto de siempre (`contacto.mjs`) enseña la franja de la banda de
imagen, que es otra cosa. Así que:

    node scripts/recorte.mjs hoja.png "File:Una.jpg" "File:Otra.jpg" …

baja las candidatas y las enseña **ya recortadas al marco de la portada**, con
la original en pequeño debajo para saber cuánto se ha perdido. Se juzga el
recorte y no la foto que uno se imagina.

**Las tres reglas con que se eligieron**, de quince candidatas probadas:

1. el asunto tiene que caer dentro de la columna central estrecha;
2. arriba tiene que sobrar aire para el título, sin taparle nada;
3. después de recortar tienen que quedar **más de mil píxeles de ancho**, para
   que en una pantalla de tres veces la densidad no se vea blanda.

Por la tercera se cayó el Boeing 747 visto desde tierra con sus estelas, que
era la más espectacular de las cinco de avión: 2200 de ancho solo dan 693
recortados.

**Y el pie de foto se arregló de paso.** Estaba calculado contra la portada
del Sol, que arriba es negra: letra al 56 % y una sombra floja. Sobre el gris
claro del monzón de Bombay desaparecía, y el pie no es decoración —es la
atribución que exige la CC BY—. Ahora va casi opaco con doble sombra, y el
velo apenas se ha tocado: lo que da el contraste es la sombra, que solo se
nota debajo de las letras y no oscurece un tercio de la fotografía.

### Lo que se aprendió escribiendo los cuatro, y que manda sobre los próximos

· **La respuesta primero.** El título pregunta; la entrada contesta en dos o
  tres frases que entendería cualquiera. Pablo tumbó una versión entera por
  esto: «el usuario solo quiere saber por qué llueve y le explicas cosas
  raras». El científico entra cuando su historia empuja, nunca de puerta.
· **Sin rótulos.** Obligaban a trocear la explicación en apartados
  titulables. Abre la primera frase de cada página.
· **Se escribe seguido y se corta después.** Nada de contar ideas antes de
  escribir: el número de páginas es un resultado.
· **Ninguna frase de más de 35 palabras**, media entre 15 y 20. Lo comprueba
  `revisa-shorts.mjs`, y en la última tanda cazó seis.

## CÓMO ME PASA PABLO UNA FOTOGRAFÍA — 28 de agosto de 2026

Preguntó si valía con pegar la dirección de la miniatura de Commons. **Vale**,
y es la manera más cómoda: de una dirección como

    …/thumb/6/65/Patrouille_de_France_Radom_3_1.JPG/960px-…JPG?utm_source=…

sale el nombre del fichero, y con el nombre se pide a Commons **el original a
tamaño completo** con su autor y su licencia. La miniatura de 960 no se usa
nunca. También valen el nombre a secas y la dirección de la página del fichero.

**Y la licencia se comprueba siempre, aunque la foto la elija él.** Esta es el
ejemplo de por qué: Commons la llama «Attribution» y detrás hay una plantilla
propia, `{{Konflikty.pl}}`, que pide una cosa concreta —que se diga que la
imagen sale de konflikty.pl—. Dando por hecho que era Creative Commons
habríamos publicado un pie incompleto. El campo `licencia` guarda lo que
responde Commons, letra por letra, porque `coteja-fotos.mjs` lo compara; la
condición se cumple en el pie, que es donde se publica.

## LO PRIMERO: la foto tiene que ser bonita

Es la petición más repetida de Pablo y la que más veces se ha incumplido:

> «que sean bonitas, porque hay imágenes que no se aprecia bien qué son»
> «sobre todo que estén bien y sean bonitas, no cualquier cosa»

Bonita **manda sobre exacta**. Que además cuente algo de la historia es
deseable, pero si hay que elegir, se elige la que se puede mirar. Todo el
detalle está en `FOTOS.md`; lo mínimo que hay que saber:

- **`buscar` ya filtra por los sellos de calidad de Commons.** Eso es lo que
  hace que salgan bonitas. Si se usa `todo`, hay que mirar con más cuidado.
- **Bajarla y MIRARLA siempre**, con `foto.mjs ver`. El nombre del fichero
  miente: un «Neodymium magnet» era papel de aluminio en un bol, y una
  cosecha de corcho preciosa traía una marca de agua incrustada.
- **Fuera documentos, tablas, planos y grises apagados.** La banda mide 28 %
  del alto de un móvil: ahí no se lee nada de eso.
- Mínimo 1600 de ancho y 2 megapíxeles. Las reproducciones de cuadros están
  exentas del segundo mínimo.

## Cómo se trabaja un short

**El título y la entrada del mismo short se hacen a la vez.** El título decide
si ocupa una línea o dos, y eso cambia cuántas palabras caben debajo.

1. Título: que quepa en una línea y que **diga de qué va**.
   `node scripts/cabe.mjs "tu título"` — tope 363 puntos. Regla 17 del molde.
2. Entrada: que llegue abajo dejando **entre una y tres líneas**. Regla 16.
3. Cuatro fotos, una por pantalla, cada una hablando de su página.
4. `npx vite build`, servir `dist` en el 4173, y medir:
   `node scripts/hueco.mjs` y `node scripts/choque.mjs`.
5. `node scripts/revisa-shorts.mjs src/historias/…ts` a cero, y
   `node scripts/coteja-fotos.mjs`.
6. `npx tsc --noEmit`.
7. Commit desde `/home/user/PabloVA02`, con `git commit -F` y nunca `-m`.

Se va **en orden de lectura**, el de `intercala()` en `src/shorts.ts`: el
primer short de cada fichero, en el orden en que están listados.

## EL AVISO DE SUSCRIPCIÓN CADUCADA — 28 de agosto de 2026

Pablo mandó la captura de Headway —«Tu acceso Premium / ha expirado», con un
45 % de descuento— y dijo: *«pon esto para cuando la suscripción ha terminado
en un usuario»*.

La tarjeta del perfil (`Suscripcion.tsx`) tenía dos variantes y ahora tiene
tres: **nuevo**, **cancelado** y **caducado**. No es la de cancelado con otras
palabras: cancelar es una decisión y caducar es un accidente, y a quien no
decidió irse no se le pide que vuelva. Por eso es la única de las tres que
lleva oferta encima.

**El descuento es de verdad y llega hasta la caja**, que era la parte que
podía quedar mal: una tarjeta que promete un 45 % y una caja que después
enseña «7 días gratis · 23,99 €/año» se desmiente sola en la pantalla
siguiente. Así que:

· `DESCUENTO_VUELTA` vive en `Suscripcion.tsx` y lo lee `Checkout.tsx`. Está
  escrito una vez: si un día es el 30 %, cambia en los dos sitios o en
  ninguno.
· El que vuelve **se salta la pantalla de la prueba** y va derecho a la caja.
  Esa pantalla es la semana gratis contada día a día, y ya pagó un año.
· La caja en modo vuelta enseña 13,19 € con 23,99 € tachado al lado, el botón
  dice «Volver por 13,19 €» y la nota de abajo dice «Se cobra hoy», no «hoy no
  se te cobra nada».

**Cómo verlo.** Al aviso de caducado NO se llega jugando, y no es un olvido:
una suscripción caduca porque pasa el tiempo o porque falla un cobro, y las
dos cosas ocurren en un servidor que aquí no existe. Se entra por parámetro:

    ?pago=caducado          en el navegador
    node scripts/movil.mjs --pago caducado …     en el artefacto

El artefacto publicado hoy arranca en «caducado», y **eso no quita nada**:
desde ahí se paga y se llega a «activo», y desde «activo» se cancela en los
ajustes y se llega a «cancelado». Al revés no funciona — desde «nuevo» los
otros dos no se alcanzan —, así que arrancar aquí es lo que deja ver los
tres avisos en una sola visita.

## Herramientas

| | |
|---|---|
| `scripts/foto.mjs` | buscar, todo, categoria, ficha, ver |
| `scripts/coteja-fotos.mjs` | que el código diga la verdad de cada imagen |
| `scripts/cabe.mjs` | si un título entra en una línea |
| `scripts/hueco.mjs` | cuánto aire queda bajo el texto de las portadas |
| `scripts/choque.mjs` | que el texto no tape el «Seguir» en un móvil bajo |
| `scripts/fotos-al-vuelo.mjs` | sirve las fotos al navegador de pruebas |
| `scripts/revisa-shorts.mjs` | el molde, con `--flojos` para lo pendiente |
| `scripts/recorte.mjs` | las candidatas **ya recortadas al marco de la portada** |
| `scripts/temas.mjs` | de los `.md` de Pablo a los bloques de `curiosidades.ts` |
| `scripts/llenado.mjs` | cuánto se llena cada pantalla, y falla por debajo del 80 % |

Aquí ponía que `buscar` filtraba «solo con sello» y no es verdad: filtra por
`filetype:bitmap` y nada más. El sello de calidad —Quality image, Featured
picture— es un filtro del buscador de Commons en la web, y es el que le sirve
a Pablo cuando busca fotografías él: **License en «All licenses»** —todas las
de Commons nos valen y la licencia la comprueba `foto.mjs ficha`—, **Image
size en «Large»** —la portada recorta a 0,46 de proporción y hace falta ancho
de sobra— y **Community Assessments en «Quality image»**, que es el sello que
la propia comunidad le pone a las fotografías técnicamente buenas.

**Chromium no llega a Commons desde aquí**: el proxy le corta la conexión. Por
eso existe `fotos-al-vuelo.mjs`, que las baja con curl y se las entrega. Sin
él, las capturas salen con el cartel de respaldo en vez de la foto.

## HAY DOS SIMULADORES, Y NO SE PISAN

Desde el 27 de agosto por la tarde. Pablo lo pidió así: «hazme un simulador
nuevo de móvil para ver cómo saldría exactamente… conserva el simulador que
tenemos ahora, la app entera en un móvil, que es para el resto de cosas. Y
añade la imagen en la parte de los shorts para ver cómo queda».

| | qué es | dónde |
|---|---|---|
| `movil.html` | la app entera. **Es el de siempre y el que se actualiza en cada cambio** | `claude.ai/code/artifact/b8c9ffd9-e1f0-4e9e-a89f-0c69e0027ae2` |
| `shorts.html` | solo el muro, con las fotos a calidad de verdad | `claude.ai/code/artifact/4b5ac353-0efd-4eca-8db3-0bb3c888eb8a` |

Los dos identificadores van **enteros**, no abreviados. Estuvieron con puntos
suspensivos y el 27 de agosto costó una llamada fallida: `4b5ac353-3d02-…`,
inventado para completar el hueco, devuelve «artifact not found». Se recupera
con `Artifact action:"list"`, pero es un rodeo que no hace falta.

**Por qué hacen falta los dos.** El de siempre lleva dentro los 400 resúmenes,
las 309 cubiertas y todos los shorts, y mientras hubo 761 shorts a las
fotografías les quedaban 0,08 MB: entraban 24 de 760, encogidas a 200 puntos
con la calidad al 45 %. O sea que enseñaba bien todo menos justamente las
fotos. Con el muro empezado de cero eso ha dejado de apretar —hoy las cuatro
fotografías del Sol entran a 900 puntos y el fichero sale por 14,7 MB— y
volverá a apretar en cuanto haya cincuenta historias, así que el segundo
simulador se queda.

**Los anchos de abajo están viejos: la receta buena es `node
scripts/escaparate.mjs` y `node scripts/escaparate.mjs --mirador`,** que llevan
dentro los números al día y además recortan el catálogo con la vitrina y lo
dejan entero al terminar. El 31 de agosto, con la tanda del tomo 8 dentro,
hubo que bajarlos otra vez: la app entera va a 175 de cubiertas y 355 de
portadas y sale por 15,1 MB; el mirador a 680 de portadas y sale por 14,6. Con
los anteriores —232/530 y 930— salían por 19,1 y 22,1, y el aviso de
`movil.mjs` salta a los 15,5.

Y la vitrina creció de once shorts a setenta y siete: los del 28 y el 29 de
agosto, que Pablo ya revisó uno a uno. Es lo que él autorizó —«si no caben
borras las que teníamos ya, que esas ya he comprobado que están bien»—, y no
se borra nada: siguen en la app de verdad y en el repositorio. La lista está
en `assets/vitrina.json` y se quita de ahí para volver a meterlos.

    # 1. LA APP ENTERA — se publica en el artefacto b8c9ffd9-…
    npx vite build --config vite.artefacto.config.mjs
    node scripts/muro-demo.mjs 24 > /tmp/muro.json
    node scripts/movil.mjs --dist dist-artefacto --muro /tmp/muro.json \
         --ancho 800 --calidad 0.8 --tope 8 \
         --cubiertas-ancho 296 --cubiertas-calidad 0.74

    # 2. EL MIRADOR DEL MURO — se publica en el artefacto 4b5ac353-…
    npx vite build --config vite.shorts.config.mjs
    node scripts/movil.mjs --dist dist-shorts --muro /tmp/muro.json \
         --pantalla shorts --ancho 1000 --calidad 0.84 --tope 14 \
         --salida shorts.html --titulo "El muro de shorts, con las fotos de verdad" \
         --intro "…"

**Ojo con los nombres: la entrada de vite del mirador es `mirador.html` y la
salida es `shorts.html`.** Se llamaban las dos igual hasta el 27 de agosto y
`movil.mjs --salida shorts.html` escribía encima de la entrada: la compilación
siguiente empaquetaba su propio resultado —una página de catorce megas con las
fotos ya dentro— y el mirador se quedó congelado en el muro de aquel día sin
que nada avisara. `shorts.html` y `dist-shorts/` están ya en el `.gitignore`,
como `movil.html`.

**El ancho de las cubiertas es el que hace o deshace el tope**, y hay que
bajarlo cada vez que entra un short nuevo. Medido el 27 de agosto:

| cubiertas | pesan | con 4 shorts sale por |
|---|---|---|
| 400 | 7,2 MB | 16,3 MB — no se puede publicar |
| 336 | 5,7 MB | 16,0 MB — al filo |
| 296 | 4,9 MB | 14,7 MB |

Se toca ese número, no la calidad de las fotografías: las cubiertas se pintan a
172 puntos como mucho y a 296 sobra ancho hasta en una pantalla de tres.

**Y esto se va a acabar.** Cada short suma unos 0,4 MB de fotografías, así que
con quince o veinte historias no habrá ancho de cubierta que lo salve. La
salida no es seguir apretando: es **GitHub Pages sobre `/docs`**, que no tiene
tope ninguno y solo lo puede activar Pablo. Está en la lista de las tres cosas
que dependen de él.

### EL BUSCADOR DE SHORTS VIVE EN PAGES, NO EN UN ARTEFACTO

Pablo, el 2 de septiembre: «ponme un buscador de shorts para buscarlo, solo eso,
para ver los textos y tal». Es una página sola con los 683 textos dentro y una
caja de búsqueda; lo hace `scripts/buscador.mjs`.

**Se genera DESPUÉS de copiar `docs/`, y en el repositorio de Pages, no aquí.**
`vite.web.config.mjs` lleva `emptyOutDir: true`, o sea que cualquier cosa suelta
en `prototipo-microaprendizaje/docs/` desaparece en la compilación siguiente. El
orden bueno es este:

    npx vite build --config vite.web.config.mjs
    cp -r docs/. /home/user/curva/docs/
    node scripts/buscador.mjs > /home/user/curva/docs/buscador.html

Queda en `pablova02.github.io/curva/buscador.html`, al lado de la app. Y no se
publica como artefacto a propósito: son dos y siguen siendo dos, que es lo que
dice el apartado de aquí abajo.

### SOLO HAY DOS ARTEFACTOS PUBLICADOS, Y NO SE CREAN MÁS

Pablo, el 27 de agosto: «queda estos dos artefactos solo, los demás no sirven
para nada, bórralos, pero ten cuidado que no se pierda nada». Había
veinticinco. Los otros veintitrés eran maquetas de prueba, exploraciones de
diseño y versiones viejas del simulador, de julio y principios de agosto.

**Al publicar, se pasa siempre la `url` de uno de los dos.** Publicar sin
`url` crea un artefacto nuevo en vez de actualizar el de Pablo, y así es como
se llegó a veinticinco. Si hace falta enseñarle algo suelto —una hoja de
contacto, una comparación— se manda como fichero por el chat, no se publica.

**Antes de borrar ninguno se comprueba que el repositorio no dependa de él.**
Se hizo con un `grep` de los veintitrés identificadores por todo el árbol, y
saltó uno: `bef12080-…`, «Un short entero — Las 23 puñaladas de César», que
`DISENO.md` nombraba como el origen del modelo beige y del que se copió regla
a regla el `<style>` a `src/styles.css`. O sea, una fuente de la verdad que
vivía fuera del repositorio. Está guardada en
`referencia/maqueta-aprobada/maqueta-cesar.html`, se abre sola y lleva sus
cuatro fotografías dentro; `DISENO.md` y `styles.css` ya apuntan ahí.

**Borrar un artefacto no lo puede hacer esta sesión**: la herramienta publica,
lee y actualiza, y no tiene borrado. Lo hace Pablo desde
`claude.ai/code/artifacts`, o con `/artifacts` en la terminal.

**Y una avería que salió al montarlo y que afectaba también al de siempre.**
`orden-fotos.mjs` reconstruye el orden del muro parseando `shorts.ts`, y NO
coincide con el que arma la app: el muro se abría en «¿Cuánto le queda al sol?»
y las fotos empotradas eran las del denario de César. Con 24 fotos casi no se
nota; en un mirador que es solo el muro, se nota en la primera pantalla.

La solución no fue afinar la reconstrucción sino no depender de ella:
`muro-demo.mjs` elige las historias PRIMERO y saca sus fotos de la misma
pasada, y `movil.mjs --muro` escribe las dos listas en la página —`__ORDEN`
para las historias y `__FOTOS` para las fotos—, así que no pueden
desincronizarse.

## AL TERMINAR CUALQUIER CAMBIO: rehacer el simulador Y PUBLICARLO

Pablo lo pidió así de claro: «actualízamelo en el artefacto que estamos usando
para que pueda verlo, haz eso siempre que añadas algo». `movil.html` es lo
único que él ve, así que un cambio que no esté ahí no existe todavía.

**`movil.mjs` NO COMPILA. Empaqueta lo que haya en `dist-uno/`.**

Es el fallo más caro que se puede cometer aquí y se cometió el 21 de agosto:
se lanzó `movil.mjs` sin compilar antes, se publicó, y Pablo abrió el
artefacto y vio la app de hacía dos semanas —sin ninguno de los libros nuevos,
sin las cubiertas, sin Deportes y sin Vidas—. El script no avisa: coge el
`dist-uno/` que encuentre, aunque sea del mes pasado, y termina sin error.

**Son TRES órdenes y la primera no se salta nunca:**

```bash
npx vite build --config vite.uno.config.mjs          # ← esta es la que falta
node scripts/orden-fotos.mjs 760 > /tmp/orden-fotos.json
node scripts/movil.mjs --dist dist-uno --lista /tmp/orden-fotos.json \
     --ancho 200 --calidad 0.45 --tope 0.08 \
     --cubiertas-ancho 272 --cubiertas-calidad 0.55

**Y YA NO DA MÁS DE SÍ. Cada tanda de cubiertas obliga a bajar el ancho
otra vez, y esto no tiene arreglo.** El histórico, para que se vea la
pendiente: con 277 cubiertas y `--cubiertas-ancho 340` el paquete daba
16,47 MB y no cabía; bajando a 300 dio 15,6 y cupo; con las 295 del 27 de
agosto por la tarde, a 300 volvía a dar 15,9, a un pelo del tope, y hubo
que bajar a 272. Los parámetros de arriba son los que caben HOY: 15,4 MB
y 24 fotografías de las 760.

La siguiente tanda vuelve a pasarse, y bajar más ya se nota en la
cubierta. La salida es `docs/` y GitHub Pages, que no tiene tope, y es un
clic de Pablo.
```

Dos maneras de comprobar que no ha pasado otra vez, antes de publicar:

- `ls -la dist-uno/assets/` y mirar la fecha. Si no es de hoy, no se ha
  compilado.
- `grep -c "<algo escrito hoy>" movil.html`. Si sale cero, el paquete es viejo.

**Y una tercera, que es la que hay que darle a Pablo: el sello.** El pie del
perfil dice «Prototipo · compilado el 26/8, 18:00». La fecha la inyectan los
cuatro ficheros de Vite con un `define`, así que sale sola en cada compilación.
Existe porque Pablo dijo dos veces «no me sale el cambio» y las dos veces el
fichero publicado LO LLEVABA: era la caché de su navegador. Al publicar hay que
decirle qué hora tiene que ver; si ve otra, es caché y se arregla cerrando la
pestaña, no recompilando.

    grep -o "compilado el [^\"<]\{0,18\}" movil.html | head -1

Y ojo con el segundo paso: `orden-fotos.mjs` escribe una línea de estado por
la salida de error. Si se le pone `2>&1` acaba dentro del JSON y `movil.mjs`
se rompe con un error de sintaxis. Sin `2>&1`.

**EL ARTEFACTO ES ESTE Y NO OTRO:**

    Curva · la app entera, en un móvil
    https://claude.ai/code/artifact/b8c9ffd9-e1f0-4e9e-a89f-0c69e0027ae2

Lo tiene abierto en el móvil. Se actualiza EN ESE MISMO ENLACE —publicando
`movil.html` con esa `url`—, no se crea uno nuevo: si sale otro enlace, él
sigue mirando el viejo y parece que no se ha hecho nada. Pasó: se le mandó el
fichero suelto tres veces mientras él miraba el artefacto de hacía una semana.
Y antes de publicar hay que leer lo que está publicado, que es como se
comprueba desde qué versión se parte. **En un contenedor nuevo esto no es un
consejo: es obligatorio.** Si la sesión no ha leído esa URL, la publicación se
rechaza con «You hadn't viewed the live version of this artifact». Pasó el 21
de agosto. Se arregla leyendo el artefacto —queda guardado en un fichero cuya
ruta indica el propio resultado— y comprobando con unos cuantos `grep` de
frases distintivas que lo publicado es un paquete generado y no una versión
editada a mano; si lo es, se recompila desde el repo, que produce por fuerza un
superconjunto, y se vuelve a publicar.

El tamaño manda: el tope de publicación son 16 MB. Con 223 libros y 757 shorts,
`--tope 1.6` se pasa; con `--tope 1.2`, `--ancho 240` y `--calidad 0.55` el
`movil.html` sale por debajo de 15 MB.

**El 28 de agosto por la noche va por 15,4 MB**, y de eso 14,3 son las
cubiertas dibujadas en base64. Queda medio mega de aire. Las once portadas
nuevas caben porque `movil.mjs` las reescribe a 900 de ancho **solo para el
simulador** —3,8 MB a 1,9—, dejando intactos los AVIF de `portadas/`. Cuando el
número se acerque a 16 lo siguiente que hay que apretar son las cubiertas, no
las portadas: `--cubiertas-ancho 296 --cubiertas-calidad 0.74` es lo que hay
hoy y baja de 17,6 MB a 4,9.

Las órdenes para rehacerlo están en el README, en «Verlo sin instalar nada».
Con el caché de fotos lleno —`fotos-cache/`, que ya no vive en `/tmp`
justamente por esto— tardan un par de minutos.

## VER LA APP ENTERA: `docs/`, que no tiene ningún tope

Pablo lo preguntó el 24 de agosto: *«¿no existe ninguna forma de ir viendo la
aplicación entera, que no sea en el simulador, que tiene poca memoria?»*.

Sí, y hacía falta. **El simulador no puede llevar las 760 fotografías, y no es
cuestión de ajustar el ancho: no cabe de ninguna manera.** La cuenta:

    texto de los libros y los shorts   7,8 MB   irreducible, es el producto
    las 145 cubiertas, ya encogidas    4,9 MB
    tope del artefacto                16,0 MB
    ---------------------------------------------
    queda para fotografías             1,6 MB → unas 74 de 760

Aunque se encogieran las cubiertas a la mitad se llegaría a ciento y pico. Las
760 a 240 de ancho son unos 15 MB ellas solas. **En el artefacto no caben, y
no van a caber nunca.**

La salida es publicarla como una página web normal, porque **la app de verdad
no lleva las fotos dentro: se las pide a Wikimedia Commons según hacen falta**.
Ahí no hay nada que empotrar y no hay ningún límite.

    npx vite build --config vite.web.config.mjs

Eso deja la app en `docs/`, con las rutas relativas —`base: "./"`— para que
funcione servida desde una subcarpeta. `docs/` SÍ va al repositorio: son unos
16 MB por compilación, así que se rehace cuando Pablo lo pide y no en cada
commit.

### Lo que falta, y es un clic de Pablo

GitHub Pages está apagado en el repositorio (`has_pages: false`, comprobado el
24 de agosto). El repositorio es público, así que Pages es gratis. Hay que
entrar una vez en **Settings → Pages** y elegir:

    Source: Deploy from a branch
    Branch: claude/app-development-xpo6fx   ·   carpeta: /docs

Y a los dos minutos la app entera está en una dirección fija, con las 760
fotos, y se actualiza sola cada vez que se empuje una versión nueva de `docs/`.

**Ojo con una cosa antes de decírselo:** `PabloVA02/PabloVA02` es el
repositorio de su PERFIL de GitHub. Encender Pages ahí publica el sitio en
`pablova02.github.io`, que es su dirección personal. Si prefiere no mezclarlo,
la alternativa es un repositorio aparte solo para la app; eso ya no es un clic
y hay que pedírselo.

## OJO: el contenedor puede arrancar con el repo atrasado

Ha pasado tres veces en un mismo día: la copia de trabajo aparece en un commit
de hace semanas, con el trabajo reciente solo en el remoto. **Antes de tocar
nada**, `git log --oneline -1` y comparar con
`git ls-remote origin refs/heads/<rama>`. Si no coinciden:

    git fetch origin <rama> && git merge --ff-only origin/<rama>

Los ficheros sin seguimiento sobreviven, así que lo escrito en la sesión no se
pierde; lo que se pierde es el tiempo de descubrirlo a la mitad.

## Y UN CONTENEDOR NUEVO NO TRAE LAS DEPENDENCIAS

Comprobado el 22 de agosto, al reciclarse el contenedor a media sesión. Aparte
del repositorio atrasado, faltan tres cosas y ninguna avisa con claridad:

1. **`npm install`**, que no está hecho. Sin él, cualquier script muere con
   `ERR_MODULE_NOT_FOUND`.
2. **`sharp` y `playwright` NO están en `package.json`.** Se instalaron a mano
   en sesiones anteriores y hay ocho scripts que los importan. Hace falta
   `npm install --no-save sharp playwright`.
3. **El Chromium de Playwright es el del contenedor y no coincide de versión.**
   Playwright busca el número de compilación que espera su versión y no lo
   encuentra, y sugiere `npx playwright install`, que aquí no hay que ejecutar.
   Todos los scripts que lanzan un navegador llevan ya la ruta puesta:

       chromium.launch({ executablePath:
         process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" })

   Si el contenedor trae otro número, se cambia la variable `CHROMIUM` y no hay
   que tocar ningún fichero.

Y **`fotos-cache/` tampoco sobrevive**: rehacer `movil.html` desde cero vuelve
a bajar las 829 fotografías de Commons y tarda bastante más de diez minutos.
Conviene lanzarlo en segundo plano y no dar por hecho que va a acabar en dos
minutos como cuando el caché está lleno.

## CÓMO SE REDACTA UN RESUMEN: `REDACCION.md`

Es el documento de estilo y manda sobre cualquier instrucción suelta, venga de
donde venga. Sale de las capturas de Headway que pasa Pablo y de sus
correcciones sobre nuestro texto. Antes de escribir o tocar un libro, se lee.
El modelo terminado es `SAPIENS`, en `libros/paginas.ts`.

Cuando lleguen capturas nuevas, lo que enseñen SE ESCRIBE AHÍ. Lo que se queda
en la conversación se pierde con la ventana de contexto; lo que está en el
repositorio, no.

Los resúmenes escritos a mano viven en `libros/paginas.ts`, y el texto
autogenerado por tarjetas de cada uno está BORRADO: Pablo lo pidió
así el 20 de agosto, y además mientras conviven la estantería pinta la ficha
vieja. El procedimiento entero está en `REDACCION.md`.

    node scripts/medir-paginas.mjs    palabras y minutos de cada resumen
    node scripts/concreto.mjs         la prueba de la cifra y el nombre
    node scripts/revisa-fichas.mjs    a qué libro le falta una pieza de ficha
    node scripts/mete-libro.mjs       mete un borrador JSON en paginas.ts
    node scripts/ficha-libro.mjs      escribe las tres piezas de la ficha
    node scripts/retira-viejo.mjs     borra el texto viejo y su cargador
    node scripts/faltan-cubiertas.mjs qué cubiertas faltan, por prioridad
    node scripts/mete-cubiertas.mjs   mete una tanda de cubiertas de Pablo
    node scripts/hoja-cubiertas.mjs   la estantería entera en una página

### EL ENCARGO EN CURSO — LA NOCHE DEL 24 AL 25 DE AGOSTO

**Esto es lo que hay que hacer AHORA. Se lee antes que nada y no se pregunta.**

Pablo, el 24 de agosto de madrugada:

> «Añade más libros de personalidades muy famosas sobre todo muy conocidas, de
> amor y sexo también, que sean comerciales con títulos que vendan. Y libros de
> autoayuda muchos, de cómo ganar dinero, cómo triunfar en la vida, cómo ganar
> amigos, cómo ser atractivo, muchas promesas que tengan títulos así, todos los
> que encuentres. **Añade hasta unos 350 libros**, un poco de todas las
> secciones que tenemos, con las redacciones de Headway, algo parecido, como ya
> hablamos. Y ten cuidado, que no pierdas el contexto y se te olvide lo que
> tienes que hacer. **Trabaja durante toda la noche.**»

O sea, dos cosas y en este orden:

1. **LOS 400 ESTÁN. Se llegó el 27 de agosto por la mañana** con
   «Thinkertoys», de Michael Michalko. El catálogo tiene 418, así que quedan
   dieciocho para tenerlo entero; el objetivo lo subió Pablo de 350 a 400 el
   25 de agosto por la noche, y pidió priorizar autoayuda con promesas de
   dinero y de éxito, personalidades muy conocidas, amor y sexo y superventas.
   Los dieciocho que faltan están en `npx tsx scripts/estado.mjs`.
2. **Escribirlos todos**, con las normas de `REDACCION.md`, sin parar.

### LO QUE ELIGE EL LECTOR SON METAS, NO CATEGORÍAS

Cambió el 27 de agosto, con las capturas de las 12:45 que mandó Pablo. Hasta
entonces la introducción preguntaba «¿Qué temas te interesan?» y salían
nuestras nueve categorías. Ahora pregunta **«¿Qué quieres conseguir?»** y salen
**dieciséis metas**: «Confiar más en ti mismo», «Hacer crecer tu dinero»,
«Cuidar el cuerpo»… Es otra pregunta: una categoría es un estante, una meta es
un motivo para abrir la app.

**Y por debajo NO ha cambiado nada.** La estantería, los filtros y las
colecciones siguen ordenando por CATEGORÍA. Cada meta lleva escrito de qué
estantes tira y `categoriasDe()`, en `src/Temas.tsx`, hace la traducción. En
`App.tsx` viven las metas y de ellas sale `intereses`, que es lo único que baja
a las pantallas. Una meta puede tirar de tres estantes, así que marcar cinco
metas ordena mejor que marcar cinco temas.

Tres sitios enseñan lo mismo y no pueden separarse:

- La introducción, paso «¿Qué quieres conseguir?». Sus opciones salen de
  `NOMBRES_META`, no están copiadas en `Onboarding.tsx`.
- La tarjeta del inicio, que lista las marcadas.
- La pantalla de «Gestionar», que es donde se cambian.

**Los nombres son los de Headway, y esto YA SE HIZO AL REVÉS UNA VEZ.** Pablo
pidió primero que estuvieran «llamadas de diferentes formas algunas, para que
no sea un plagio total», se rebautizaron nueve, y al verlas dijo: «na, pon el
nombre que tienen puesto ellos, que me gusta más la verdad, deja eso». Manda lo
segundo y está decidido: si a alguien le vuelve a parecer que habría que
reescribirlos, ya se probó y se volvió atrás.

Un matiz que sigue en pie: en su app en español una pone «Grow in faith», en
inglés, que es un descuido suyo. Aquí va traducida, «Crecer en tu fe».

### EL BUSCADOR SE QUEDA EN DIEZ GÉNEROS — 4 de septiembre, noche

«En el buscador elimina todos los que no tienen emoticono y añade desarrollo
personal, amor y sexo, deportes, en vidas pon personalidades, productividad,
felicidad, historia, filosofía, ciencia, dinero.»

Eran diecisiete y son diez, en ese orden, y **todos tienen emoticono suyo**:

    Desarrollo personal · Amor y sexo · Deportes · Personalidades ·
    Productividad · Felicidad · Historia · Filosofía · Ciencia ·
    Dinero e inversiones

**«Vidas» pasa a llamarse «Personalidades»**, que es como lo llamó él al mandar
el dibujo de los dos perfiles.

**DOS SON NUEVOS Y HUBO QUE ESCRIBIRLES LA LISTA.** «Productividad» sale de
juntar los dos cajones que se van —«Hábitos y rutinas» y «Concentración»— más
los cuatro del catálogo que iban justo de esto y no estaban en ninguno: la
procrastinación, la disciplina, comprar tiempo y el esencialismo. «Felicidad»
sale de «Sentido de la vida» más los que hablan de estar bien sin prometer que
se arregla todo.

**CUATRO ICONOS ESTÁN PRESTADOS DE LAS METAS**, no copiados: se leen de
`emoticonos-metas.ts` en tiempo de construcción. Duplicar los bytes costaría
veinte kilos por nada y, peor, el día que él mande otro cohete habría dos
cohetes distintos en la app. Cuál lleva cada uno está escrito en la cabecera de
`emoticonos-generos.ts`.

**`glifos-generos.tsx` SE BORRA.** Eran los diecisiete dibujos que hice yo para
esta parrilla; ya no hay ningún género sin emoticono suyo. Está en el historial
de git.

**Y HAY QUE SABER LO QUE SE PIERDE**, que esta vez es mucho: de los 418 libros
del catálogo, **219 ya no se alcanzan desde ningún género del buscador**. Son
72 de Psicología, 60 de Literatura, 41 de Economía, 28 de Salud y 18 de Arte.

No están perdidos —se llega a ellos por la caja de búsqueda y por los filtros
de la pantalla de Libros—, pero la manera de encontrarlos paseando ha
desaparecido. Los tres cajones que más cubrían eran «Novela», «Salud y cuerpo»
y «Arte y creatividad», y devolverlos recupera unos ciento seis de esos 219.

**Salud podría volver ya**, porque su emoticono existe: la manzana de
«Disfrutar de una vida sana». Novela y Arte necesitarían uno nuevo. Está sin
hacer porque él dijo diez y son diez; se decide, no se supone.

### SEIS EMOTICONOS MÁS, Y AL BUSCADOR — 4 de septiembre, noche

«Más emoticonos; los otros los pones en el buscador.» Vinieron siete, y uno de
ellos no era «otro»:

- **el cofre con monedas SUSTITUYE a la hucha** de «Llegar a ser rico», que es
  una meta y ya tenía el suyo;
- **los seis restantes van a los géneros de Explorar**, en
  `src/emoticonos-generos.ts`, con la misma mecánica que las metas: manda el
  suyo cuando lo hay y si no queda el glifo dibujado.

**LA CLAVE ES EL `id` DEL GÉNERO, NO SU NOMBRE**, porque los nombres de sus
ficheros y los nuestros no coinciden y conviene que quede escrito cuál es cuál:

    filosofia   el pensador con la interrogación
    historia    el libro con la pluma
    deportes    el trofeo
    vidas       los dos perfiles — él lo llamó «personalidades»
    mente       la cabeza con el cerebro — él lo llamó «psicología», que es la
                CATEGORÍA; el género que la enseña se llama «Mente y emociones»
    dinero      la balanza — él lo llamó «economía»; el género es «Dinero e
                inversiones»

**FALTAN ONCE Y SE NOTA**, porque los suyos son coral y oro y los míos verdes
de línea: Desarrollo personal, Hábitos y rutinas, Gente y relaciones, Amor y
sexo, Concentración, Liderazgo y empresa, Sentido de la vida, Salud y cuerpo,
Ciencia, Novela y Arte y creatividad. Cuando lleguen, `glifos-generos.tsx` se
borra entero.

**Y de paso, un número que mentía.** El subtítulo de los géneros decía «Catorce
maneras de entrar» y hay diecisiete: estaba escrito a mano y se quedó viejo al
añadir géneros, sin que nada avisara. Ahora se cuenta solo.

### ONCE Y NO DIECISÉIS — 4 de septiembre

Pablo mandó once emoticonos el 27 de agosto y las otras cinco metas llevaban
desde entonces con un dibujo provisional mío. Al pasarle la hoja con los suyos:
«vale, pues borra el resto, que no tienen emoticono».

Se fueron estas cinco, y con ellas los dieciséis dibujos provisionales de
`Temas.tsx`, que ya no los usa nadie —eso era exactamente lo que su propio
comentario decía que había que hacer el día que todas tuvieran emoticono—:

    { nombre: "Triunfar en tu vida profesional", categorias: ["Economía", "Psicología"] },
    { nombre: "Rendir en el deporte",            categorias: ["Deportes", "Salud"] },
    { nombre: "Entender el mundo de hoy",        categorias: ["Historia", "Economía", "Ciencia"] },
    { nombre: "Leer lo que nunca leíste",        categorias: ["Literatura"] },
    { nombre: "Saber mirar un cuadro",           categorias: ["Arte", "Historia"] },

**Y HAY QUE SABER LO QUE SE PIERDE**, porque no son solo cinco filas menos.
Cada meta dice de qué estantes tira, y `categoriasDe()` traduce lo que marca el
lector a lo que el resto de la app ordena. De esas cinco salían las ÚNICAS
menciones a dos estantes:

- **Historia**, que estaba en «Entender el mundo de hoy» y «Saber mirar un
  cuadro». Y es el estante más grande del catálogo.
- **Arte**, que estaba solo en «Saber mirar un cuadro».

O sea que ya nadie puede decir que le interesa la historia ni el arte, y esos
libros no suben nunca en su estantería. Los libros siguen ahí y se llega a
ellos por los filtros y por el buscador; lo que se ha perdido es la manera de
pedirlos desde la introducción.

Se arregla de dos maneras: el día que lleguen esos dos emoticonos, reponiendo
las líneas de arriba; o metiendo Historia y Arte detrás de alguna de las once
que quedan. **Está sin hacer a propósito**, porque lo segundo cambiaría lo que
promete una meta que Pablo ya aprobó, y eso es decisión suya.

## EL RECUADRO Y LA LISTA, MEDIDOS SOBRE LAS CAPTURAS

Pablo pidió el recuadro de «Gestiona las recomendaciones» «exactamente igual,
al 100%», así que está medido píxel a píxel sobre su captura de las 12:42
—750x1624, o sea 2x sobre 375 de ancho— y lo mismo la lista de la pantalla de
dentro sobre las de las 12:45. Las cifras están escritas en `styles.css` junto
a cada regla; lo que hay que saber para no deshacerlo:

- Fondo `#383838`, filete de 1 px `#606060` y radio 12, tanto en la tarjeta
  como en cada fila de la lista. **El texto es BLANCO puro**, no la crema
  `--paper`: en su tarjeta el subtítulo no está atenuado.
- Los cuerpos se sacan de la ALTURA DE MAYÚSCULA de la captura, no a ojo: en
  esta tipografía la mayúscula es el 0,727 del cuerpo, así que una G de 15,5
  son 21,3 de cuerpo. Es la misma cuenta de los rótulos de bloque.
- **El titular va en UNA línea y eso lo garantiza un ajuste en `Temas.tsx`.**
  Su frase ocupa 299 de los 309 de ancho interior escrita en Roboto; nuestra
  pila es más ancha y se partía en dos, cambiando la forma del recuadro
  entero. No hay manera de decir «tan grande como quepa» en CSS y clavar un
  tamaño no vale porque cada aparato resuelve la pila con otra tipografía, así
  que se mide al montar y se baja hasta que cabe.
- Ojo con `.bloque h2`: vale más que `.gestiona-titulo` y le metía 20 de cuerpo
  y dieciséis píxeles de sangrado DENTRO del recuadro. Por eso el titular se
  escribe con dos clases, `.gestiona .gestiona-titulo`.

Y `?temas=Confiar más en ti mismo,Cuidar el cuerpo` deja el inicio con esas
metas marcadas sin pasar por la introducción, que es lo que permite comparar la
tarjeta llena contra la captura. Mismo apaño que `?p=` y `?suscrito`.

## EL DADO DE LA CABECERA Y LA TRAGAPERRAS

El dado es la animación del emoji 🎲 de **Noto Animated Emoji**, de Google, la
misma fuente que la llama de la racha: `src/dado-noto.json`, 122 fotogramas,
178 kB, **CC BY 4.0 con atribución obligatoria** en `CREDITOS-IMAGENES.md` y en
la pantalla de ajustes. El primero era nuestro, plano, y Pablo lo devolvió:
«pon otro mucho más bonito con animación que encuentres por ahí». Aquí sí se
podía bajar hecha —un dado es un dibujo que no necesita saber nada de
nosotros—, al revés que el rodillo, que tiene que llevar nuestras cubiertas
dentro. No va en bucle: rueda al abrir, cada nueve segundos, y al tocarlo.

Donde Headway pone el fuego de la racha, aquí hay un **dado**: lo pidió Pablo
el 27 de agosto. Al pulsarlo se abre un rodillo con nuestras cubiertas que gira
a toda velocidad y para en un libro al azar de los 400 escritos. Está en
`src/Dado.tsx` y el porqué de cada decisión está escrito ahí; lo que no se
puede deshacer sin romperlo:

- **La estela sale de la VELOCIDAD REAL, no de un reloj.** La primera versión
  llevaba un `filter: blur()` de CSS por tiempo y Pablo lo cató a la primera:
  «quita el desenfoque ese, lo suyo es que de girar tan rápido se vea
  difuminado». El `blur()` de CSS es redondo —o sea desenfoque, no
  movimiento—; lo que hay ahora es un filtro SVG con `stdDeviation="0 N"`, que
  solo difumina en vertical, y la `N` la escribe `useVelocity` fotograma a
  fotograma. Cuando para, es cero sin que nadie lo apague.
- **El filtro va sobre la caja de la VENTANA, no sobre la tira.** La ventana
  mide 292 de alto y la tira casi cinco mil: puesto sobre la tira, el navegador
  filtraría cinco mil puntos en cada fotograma para enseñar 292.
- **La frenada es a CINCO tiempos**, como una máquina de verdad: el tirón
  hacia atrás de la palanca, coger velocidad, el crucero en línea recta, la
  frenada y el tope con muelle. Las curvas están CALCULADAS para empalmar sin
  tirón —la pendiente de entrada de una bézier es `y1/x1` y tiene que valer la
  velocidad que trae partida por su media—, y las duraciones salen de una
  velocidad contada EN CASILLAS por segundo, así que no dependen del tamaño y
  el rodillo va igual de rápido en cualquier pantalla. Si se cambia una de
  esas constantes hay que rehacer la cuenta; está escrita al lado.
- **Doce cubiertas distintas repetidas**, no una por casilla. Con veintinueve,
  el navegador tiene que descomprimir veintinueve imágenes en el primer
  fotograma y el rodillo arranca con las casillas en blanco.
- **LA CASILLA ES 2:3 Y NO SE TOCA.** Es la proporción exacta en la que Pablo
  dibuja las cubiertas —1024 × 1536, lo dice la cabecera de `cubiertas.ts`—, y
  con esa misma proporción el `object-fit: cover` de la imagen no recorta
  nada. De aquí venía «los libros siguen sin verse enteros, hay partes
  cortadas»: la casilla era 0,74 y una cubierta de 0,667 metida ahí se corta
  por arriba y por abajo. No era la ventana cortando los libros, era la
  casilla cortando el dibujo. Si algún día cambia la proporción de las
  cubiertas, cambia `FORMA` en `Dado.tsx`.
- **El tamaño lo decide la pantalla, no una cifra a mano.** La ventana medía
  738 fijos y en cuanto la pantalla es más baja —y el visor del artefacto lo
  es— los libros de los extremos se cortan contra el filo. Ahora se mide el
  hueco con un `ResizeObserver` y se reparte en tres casillas exactas:
  comprobado a 812, 700 y 640 de alto, siempre tres libros y siempre enteros.
  Y se reservan 46 arriba para el rótulo y 12 abajo: un libro que toca el
  borde de la pantalla se LEE como cortado aunque esté entero.
- Con el lomo a la izquierda y el canto de las hojas a la derecha.
- **La ventana mide TRES CASILLAS EXACTAS y el número tiene que ser IMPAR.**
  Es lo que hace que no se corte ningún libro: con un número impar el centro de
  la ventana cae en el centro de una casilla, así que el premiado queda
  centrado Y los filos de la ventana caen en las juntas entre casillas. Con un
  número par el centro caería en una junta y habría que partir el premiado por
  la mitad. Si `VENTANA` deja de ser múltiplo de `PASO`, vuelven los libros
  cortados.
- **Y no lleva máscara de degradado**, que era lo que cortaba: empezaba a
  apagar al 17 % del alto, o sea media cabeza del libro de arriba. Lo que apaga
  los extremos es una veladura POR ENCIMA, no un recorte.
- **El rodillo ocupa la pantalla y el resultado flota.** Antes era una columna
  centrada con el resultado debajo en su sitio reservado, y esos doscientos
  puntos de alto se los quitaba al rodillo durante todo el giro para enseñar un
  renglón que dice «Girando…».
- **El marco de oro se centra sobre la CASILLA, no sobre el libro.** La casilla
  mide `PASO` y el libro va centrado dentro de ella; restando el alto del libro
  el rodillo entero queda nueve puntos por debajo del marco, y eso es lo que
  Pablo vio como «mal cuadrado». Sus medidas salen de las mismas constantes
  que el libro, para que no pueda volver a descuadrarse.
- Y el marco NO se centra con `transform: translate(-50%,-50%)`: Framer lo
  anima y escribe `transform` encima. Va con márgenes negativos.

**Cerrar la máquina: tres cosas que estaban mal y una trampa que apuntar.** La
cruz de arriba se veía y NO se podía pulsar: `.trag-caja` va detrás en el
marcado, también está posicionada y no llevaba capa, así que se pintaba encima
y se quedaba con todos los toques. Un botón que se ve y no responde es peor que
no tenerlo. Ahora la cruz lleva `z-index`, mide 44 —el mínimo para acertar con
el pulgar—, la caja no coge toques y el fondo cierra al tocarlo, con el rodillo
y el panel parándole el toque para que no cierre sin querer.

Y **el tambor no llega de borde a borde**, a propósito: ancho del todo no
quedaba fondo que tocar para cerrar.

**Y el fondo es OPACO del todo.** Estaba al 96,5 % y ese 3,5 % bastaba para que
se colara la banda del reloj —que va sobre papel claro— como una raya más clara
pegada al borde de arriba: «en la parte superior no se cierra completamente por
arriba y se ve otra cosa que no es la pantalla».

La cabecera perdió la cifra de la racha: junto a un dado no querría decir nada.
La racha sigue entera en el perfil y en su pantalla.

## UNA COSA QUE HAY QUE PREGUNTARLE A PABLO ANTES DE ESCRIBIRLA

`cuerpo-para-vida` — «Un cuerpo para toda la vida», Marcos Vázquez, 2019 —
está en el catálogo como pendiente y **se dejó sin escribir a propósito el 27
de agosto**. Ese título con ese autor y ese año no se ha podido confirmar:
de Marcos Vázquez sí está confirmado «Invicto» (2021), que ya está escrito,
y «Un cuerpo para toda la vida» es además el título en español con el que se
publicó «Body for Life», de Bill Phillips (1999). Puede ser una confusión de
la captura de la que salió el catálogo.

No se escribe hasta que Pablo diga cuál de los dos libros quiere. Escribir un
resumen sobre un libro que no existe tal cual es peor que no tenerlo, y en
Salud, con la prueba del sustituto del apartado 4 bis de REDACCION, se nota
enseguida. En su lugar se escribió «Thinkertoys», que hizo el número 400.

**Cuántos van y cuántos faltan NO se cuenta de memoria.** Lo dicen estas dos
órdenes, y se ejecutan al empezar cada sesión:

    grep -c 'id: "' src/libros/catalogo.ts     cuántos hay en el catálogo
    node scripts/medir-paginas.mjs | tail -1   cuántos están escritos

Y los que faltan por escribir, con su nombre:

    npx tsx scripts/estado.mjs

### CÓMO SE ESCRIBE CADA UNO, paso a paso

Un libro son ocho pasos y ninguno se salta. `$B` es la carpeta de borradores
del scratchpad; si no existe se crea, y se rehacen `mide.py` y `marca.py` con
lo que dice el apartado «LO QUE ENSEÑÓ ESCRIBIR LOS 223».

    1. Se lee REDACCION.md si no se ha leído en esta sesión.
    2. Se escribe $B/<id>.json y $B/f-<id>.json.
    3. python3 $B/mide.py $B/<id>.json        ANTES de instalar
    4. node scripts/mete-libro.mjs  $B/<id>.json
    5. node scripts/ficha-libro.mjs $B/f-<id>.json
    6. python3 $B/marca.py <id>               pendiente → escrito
    7. npx tsx scripts/generar-meta.mjs
    8. node scripts/medir-paginas.mjs <CONSTANTE>
       node scripts/concreto.mjs · node scripts/revisa-puntos.mjs
       node scripts/revisa-estructura.mjs · npx tsc --noEmit
    9. git add -A && git commit && git push -u origin claude/app-development-xpo6fx

**El push va DESPUÉS DE CADA LIBRO, sin excepción.** El contenedor se recicla
sin avisar —pasó dos veces el 24 de agosto— y un libro escrito y no empujado se
pierde entero.

**Y cada quince o veinte libros: rehacer el simulador y publicarlo**, con las
tres órdenes del apartado de arriba. Es lo único que Pablo ve.

### LA MEDIDA DE LA PÁGINA, que se está quedando corta

Pablo preguntó por la duración el 25 de agosto y al mirarlo salió esto:
**47 de los 207 Breve están por debajo de 2.100 palabras**, que es el suelo de
la horquilla del apartado 2 ter. Pasan el validador —el tope duro son 2.000—
pero apoyados en el suelo, no dentro.

La causa es de oficio y se corrige escribiendo, no con un script: escribiendo
del tirón, los cuatro párrafos de cada página salen de unas 250 palabras en vez
de las 270 que hacen falta. Cuatro párrafos **de 65-70 palabras cada uno**
aterrizan la página en 275-285 y el Breve en 2.200-2.280.

    node scripts/medir-paginas.mjs | grep Breve   sale la lista con sus cifras

Los que están por debajo se repasan cuando termine la tanda, y se alargan
**añadiendo un argumento a una página floja**, nunca engordando párrafos: eso
es exactamente lo que prohíbe el apartado 2 ter.

### LO QUE NO HAY QUE PREGUNTAR

Pablo dijo «trabaja durante toda la noche». No se para a pedir permiso para
seguir, no se pregunta por dónde continuar y no se propone un plan: se escribe
el siguiente libro que aparezca en `estado.mjs`, priorizando lo comercial —las
personalidades, el amor y la autoayuda—, que es lo que pidió.

### EL ENCARGO ESTÁ CUMPLIDO: LOS 223 ESTÁN ESCRITOS

Pablo, el 21 de agosto: *«ve redactando todos los libros que nos faltan, con
todos los ejemplos que te he pasado de Headway, con un estilo muy muy similar;
es muy importante que cojas ese tipo de redacción y sobre todo que esté bien
escrito. De unos 15 minutos a unos 30, siendo mayoritariamente cerca de los
15.»* Y después: *«las redacciones antiguas bórralas todas y haces las nuevas
con las nuevas normas que te pedí, hazlo y no pares hasta escribir todos los
libros.»*

**Terminado.** Los 223 libros del catálogo tienen resumen escrito a mano con
las normas nuevas, no queda ni un texto de los antiguos y no hay un solo aviso
de medida. No se cuenta de memoria; lo dicen estas tres órdenes:

    node scripts/medir-paginas.mjs       223 resúmenes, ningún aviso
    npx tsx scripts/revisa-fichas.mjs    las 223 con ficha completa
    npx tsx scripts/estado.mjs           «Catálogo e índice coinciden»

Reparto por tamaño: **197 Breve, 22 Amplio, 4 Extenso**. Por categoría:
Literatura 40, Historia 24, Filosofía 24, Ciencia 24, Psicología 24,
Economía 24, Arte 21, Salud 21 y Deportes 21.

`meta.ts` se quedó en **0 fichas**, que es como tiene que estar: solo se
generaba a partir de los resúmenes viejos, y ya no queda ninguno. Los ficheros
de texto antiguo se fueron borrando según se reescribían sus libros; el último
en caer fue `src/libros/ciencia.ts`, al instalar Einstein.

### SI PABLO AÑADE LIBROS NUEVOS

No hay que preguntar qué toca: toca el siguiente libro sin texto a mano.
Cuáles faltan lo dice esta orden, que no se equivoca:

    npx tsx -e 'import { PAGINAS } from "./src/libros/paginas.ts";
      import { LIBROS_RESUMEN as L } from "./src/libros/puente.ts";
      const f = L.filter((l) => !PAGINAS[l.id]);
      console.log(f.length + " sin escribir");
      for (const l of f) console.log(`  ${l.id} · ${l.titulo} — ${l.autor}`);'

Ojo: esa consulta solo ve los libros que ya tienen ficha o páginas. Los que
Pablo añada solo a `catalogo.ts` —como pasó con los 19 de Deportes— no salen
ahí; se ven con `npx tsx scripts/estado.mjs`, que compara catálogo e índice.

Y antes de escribir ninguno, **se lee `REDACCION.md` entero** y se mira alguna
de las capturas de `referencia/`, empezando por `referencia/odisea/`. La
proporción de tamaños la manda el apartado 2 ter: siete u ocho Breve de cada
diez, uno o dos Amplio, un Extenso cada quince o veinte.

El orden lo marca lo que más se ve: primero los veinte de «Tendencias», después
los que tienen cubierta dibujada de Pablo —esa lista sale de cruzar
`cubiertas.ts` con `PAGINAS`, y es la misma que usa `faltan-cubiertas.mjs`—,
después los conocidos y al final el resto por categorías.

### LO QUE ENSEÑÓ ESCRIBIR LOS 223

1. **Cuatro párrafos por página, no tres.** Con tres, la página sale de 230
   palabras y el libro se queda corto; con cuatro aterriza sola en su sitio.
   Está apuntado también en REDACCION.md, apartado 2 ter.
2. **Medir el borrador ANTES de instalarlo.** Un script de diez líneas que
   suma las palabras de cada página del JSON ahorra media docena de idas y
   venidas por libro. Se rehace en un minuto: recorre `paginas`, cuenta
   `texto`, los `fuerte`+`texto` de las listas y la `frase` de las citas.
3. **La conclusión SIEMPRE se pasa de 350 palabras a la primera.** Lleva seis
   bloques —síntesis, aporta, caja, dónde falla, y lo que vino después— y no
   caben en 320. Se escribe presupuestando 330 y sabiendo que habrá que
   recortar un bloque concreto, no adelgazando frases al azar.
4. **El suelo del Breve son 2.000 palabras y se roza por abajo.** Ocho páginas
   de 250 dan 2.000 justas. Cuando el total queda en 1.990, `apendice.mjs`
   añade dos frases a una página con sitio y se acabó.
5. **Los «Aprenderás» de doce palabras los rechaza `ficha-libro.mjs`.** El tope
   son once y se pasa constantemente por una preposición. Se comprueba antes
   de instalar o se corrige y se reinstala la ficha, que es barato.
6. **Un libro nuevo que Pablo añada a `catalogo.ts` sigue en `pendiente`.**
   Después de instalarlo hay que cambiarle el estado a `escrito` o `estado.mjs`
   avisa de que «el catálogo miente». Se hace con una sustitución sobre la
   entrada de ese id en `catalogo.ts`.
7. **Se hace `git push` después de cada libro, sin excepción.** El contenedor
   se recicla sin avisar y un libro escrito y no empujado se pierde entero.
   Ya pasó una vez con *Repensar la pobreza*.

## LAS CUBIERTAS DE PABLO NO SE TOCAN SIN QUE ÉL LO DIGA

Son 265, están en `cubiertas-originales/` a 1024 de ancho, y son **lo único
del proyecto que no se puede rehacer**: un resumen mal escrito se reescribe en veinte minutos, un
dibujo no.

El 25 de agosto retiré 81 con `quita-cubiertas.mjs` porque me pareció que
llevaban solo título y autor. Estaban las 81 ilustradas y estaban bien. Pablo
lo vio enseguida —«si portadas teníamos un montón mías, revisa bien»— y se
devolvieron el mismo día: `git checkout <commit>^ -- src/libros/cubiertas.ts`
y los `.webp` de vuelta desde `reemplazadas/`. No se perdió ninguna.

Lo que hay que hacer distinto la próxima vez:

1. **Mirar los dibujos, no la lista de ids.** Hoja de contacto de doce en doce
   con el id debajo, y leerla entera. Un id no enseña un dibujo.
2. **Se retira la que Pablo nombre, por su id.** Nunca un criterio mío aplicado
   a ochenta.
3. **Ante la duda, se deja puesta y se pregunta.**

Y para saber cuántas faltan de verdad, el cruce es entre `catalogo.ts` y
`cubiertas.ts`, separando escritos de pendientes: hoy **265 dibujadas, 50
libros escritos sin dibujo y 103 pendientes de escribir**. La lista con título, autor y año
está en `PORTADAS-QUE-FALTAN.md` y se regenera sola.

## Lo que está cerrado y no se toca

- `DISENO.md` — la pantalla de lectura. Ojo a la lista de **lo que NO se
  hace**: es la parte que se ha colado una y otra vez.
- `src/historias/MOLDE.md` — cómo se escribe un short. **Es el único que
  describe la forma de un short**: la que había en `CONTENIDO.md` estaba
  caducada y se retiró el 21 de agosto.

**`LIBROS.md` ya no existe.** Era la doctrina de cuando un libro se leía por
tarjetas —cinco capítulos, mil palabras cada uno, veinte tarjetas de cincuenta
palabras— y abría diciendo ser «la fuente de la verdad», igual que
`REDACCION.md`. Dos documentos con esa frase y sin coincidir en nada es la
manera más segura de que alguien escriba veinte libros con el formato
equivocado. Lo borró Pablo por orden expresa el 21 de agosto. Si hace falta
consultarlo por algo, está en el historial de git.
- `FOTOS.md` — de dónde salen las imágenes y qué se puede afirmar de ellas.

## «¿SABÍAS QUE…?» ES SHORTS — 2 Y 3 DE SEPTIEMBRE

Nació el 2 como quinta pestaña, para comparar: «añade otra pestaña más, llámala
shorts (v2)», y «la de shorts déjamela en verdad para compararlas». Sobre qué
va dentro: «una frase corta que guste leerla, en grande, con letras grandes y
vistosas, y si quieres profundizar un poco más existirá una pestaña donde se
abrirá más texto […] que divierta el leerlo […] hazlo bonito».

**El 3 se acabó la comparación y ganó esta.** Pablo: «quita los shorts antiguos
pero no los borres, deja los v2, y le cambias el nombre: le pones Shorts con el
rayo». Así que la barra vuelve a tener cuatro pestañas y la segunda es esta,
con el rayo de siempre.

**EL MURO VIEJO NO SE HA BORRADO Y NO SE BORRA.** No se le ha tocado ni una
línea: `Shorts.tsx` entero, los 225 shorts de su catálogo, su buscador, sus
fotos y su maqueta. Lo único que se le ha quitado es la pestaña.

    ?p=shorts         para abrirlo, en el simulador y en la web

Y para devolverle la pestaña basta con reponer su línea en la lista `tabs` de
`App.tsx`, que está escrita ahí mismo en el comentario.

    src/sabias.ts     los datos, con su titular y su explicación
    src/Sabias.tsx    la pantalla
    ?p=sabias         para abrirla suelta

**QUÉ ENTRA AQUÍ Y QUÉ ES UN SHORT.** Un short explica un mecanismo y necesita
varias pantallas; un «¿sabías que…?» se agota en una frase. Si algo pide dos
párrafos para entenderse, es un short.

**Y NO ES TRIVIA.** La regla de la casa —«un dato vale si reordena algo que el
lector creía, no si solo es curioso»— sigue mandando: cada entrada tiene que
dejar pensando «pues yo creía otra cosa». Por eso hay tantos desmentidos —los
vikingos, Napoleón, la muralla china—. Los datos que no se pudieron verificar
bien se cayeron en vez de suavizarse con un «se dice que»: el naranja de la
zanahoria y la casa de Orange se quedaron fuera por eso.

**EL DISEÑO ESTÁ CALCADO DE WISER**, de una captura que mandó Pablo el 2 de
septiembre: «cálcalo todo, excepto lo que para nosotros no es útil». De ahí
salen los tramos de progreso de arriba, la fila de marca con su chapa redonda,
la tarjeta centrada de esquinas muy redondeadas sobre papel crema, el texto en
negrita de palo seco y las pastillas grises separadas por un filete.

Lo que NO se calcó, y por qué: la equis de cerrar —ellos lo enseñan como una
pantalla que se abre encima de la app y aquí es una pestaña— y la tarjeta de
abajo con el libro y el botón «Leer», que es su manera de llevar de la cita al
libro que la contiene; nuestros datos no salen de un libro y ponerla sería
inventarse una procedencia. El azul marino tampoco: es el color de su marca, y
el nuestro es el pardo de Curva sobre el mismo crema.

**«Saber más» ABRE LA TARJETA, no una hoja desde abajo.** La primera versión
era una hoja que subía y Pablo la tumbó: «uno mucho mejor y moderno, que se
abre sobre la propia pantalla». Ahora la tarjeta que estabas mirando crece
hasta llenar la pantalla —`layoutId` de Framer— y el texto aparece dentro. Es
una sola pieza que cambia de tamaño, no dos pantallas que se relevan, y por eso
se entiende sin explicación: lo que se abre es lo que tocaste. El texto entra
con 160 ms de retraso a propósito; entrando a la vez, la caja cambiaría de alto
mientras se mueve y el movimiento saldría a tirones.

**Sin fotografía, a propósito.** Una imagen de archivo al lado de un dato bueno
lo empequeñece. En su sitio va un dibujo, uno por entrada, y es lo único que
avisa de que has cambiado de tema antes de leer una palabra.

**Y AL FINAL NO HAY DIBUJO.** El 4 de septiembre se probaron dos tandas. La
primera, dibujada a mano, la devolvió el mismo día —«están fatal hechos»— y
acertaba: a ese grosor de línea un gato y un perro de frente eran el mismo
bulto. La segunda salió de **Fluent Emoji**, de Microsoft, con una escena de
color detrás de cada uno —el mar sus olas azules, el campo su línea de suelo—.
Estaba bien hecha, y también se cayó: «quita los bocetos, en verdad, de los
shorts; no queda bien».

Y es lo correcto aunque costara dos vueltas verlo: la frase de un «¿sabías
que…?» se sostiene sola —para eso se ha peleado tanto que cuente el dato
entero—, y un dibujo al lado la convierte en el pie de una ilustración.

**NO SE HA BORRADO NADA.** `src/bocetos.tsx` sigue con sus 85 dibujos y sus once
escenas, y cada dato conserva su `boceto` y su `escena`. Cómo reponerlos está
escrito en `Sabias.tsx`, en el hueco donde se pintaban. Y el aviso de copyright
de Fluent Emoji se queda donde está, porque la licencia obliga mientras el
código esté en el repositorio.

**Y LA TARJETA TAMPOCO SE PINTA.** Al quitar el dibujo se probó a reponerla
—«no sé si poner un cuadrado o así que rodee la frase, como antes»—, se le
pasaron cinco acabados con `scripts/tarjeta-sabias.mjs`, y al verla puesta la
devolvió: «yo creo que sin recuadro ni nada, y no subrayes, no hace falta».

Así que en esta pantalla ya no hay NADA dibujado salvo las letras y el filete
de los botones. Ni color, ni dibujo, ni recuadro, ni subrayado. Y el criterio
que lo justifica es el mismo en los cuatro casos: cuando la frase entera cabe
en cuatro palabras, la frase no necesita que nada la señale, la enmarque ni la
acompañe; lo único que puede hacer cualquiera de esas cosas es quitarle sitio.

La única que sobrevive es la tarjeta ABIERTA, la que crece a pantalla completa,
y sobrevive porque ahí el fondo no es un adorno: sin él se verían los datos de
detrás a través del texto.

**El tamaño de la letra no se mide, se elige por tramos** según lo que ocupe la
frase. En los shorts hay un bucle que mide y encoge y cuesta cientos de
milisegundos; aquí no hace falta, porque no hay que llenar una caja exacta.

## EL COMETA QUE FLOTABA EN EL CORCHO — 5 de septiembre

Un fallo de dato, cazado repasando lo que aún no se ha incorporado, y merece
quedar escrito porque enseña de qué se equivoca uno cuando escribe rápido.

El short `03` de la serie `como-se-forma-un-cometa` se titulaba «Rosetta pesó
uno y salió **menos denso que el corcho**», y todo el remate de la página
colgaba de esa comparación. Está mal, y además al revés:

| | densidad |
| --- | --- |
| corcho natural | 120–240 kg/m³, unos 200 de media |
| núcleo de 67P | **533 ± 6 kg/m³** |
| agua | 1000 kg/m³ |

O sea que el cometa es **más del doble de denso que el corcho**, no menos. La
cifra buena es la de Pätzold y los suyos (*Nature*, 2016), medida con el campo
gravitatorio desde la propia sonda; los **470 kg/m³** que traía el texto eran
la estimación primera de 2015, que luego se afinó. La porosidad que sale de
ahí es del 72 al 74 %, o sea **tres cuartas partes**, no «entre setenta y
ochenta».

Lo que sí es verdad y es igual de sorprendente: con 533 contra los mil del
agua, **una montaña helada de cuatro kilómetros flotaría**, y sacando casi la
mitad del cuerpo fuera. Ese es el titular ahora, y el fichero se llama
`03-rosetta-y-el-agua.md`, para que no quede ningún nombre apuntando a una
comparación que retiramos.

**Y en la misma página había un segundo dato falso**, en la caja del rayo:
«hasta 2014 nadie había visto de cerca la superficie de un cometa». Giotto
fotografió el núcleo del Halley en 1986, Stardust pasó junto al Wild 2 en 2004
y Deep Impact llegó a golpear el Tempel 1 en 2005. Lo que Rosetta hizo por
primera vez no fue mirar: fue **quedarse**. Todas las visitas anteriores
duraron horas; ella acompañó al cometa dos años. Eso es lo que dice el rayo
hoy.

De paso, una concordancia en el short `02`: «granos… que solo *siente* el
empujón de la luz» → *sienten*.

**Lo que hay que llevarse de aquí.** Los dos fallos tienen la misma forma: una
comparación bonita que nadie comprueba porque suena bien. «Menos denso que el
corcho» y «nadie lo había visto» son frases que se escriben solas. El
validador `revisa-shorts.mjs` no las coge y no puede cogerlas —mide el molde,
no el mundo—, así que la única defensa es la de siempre: **la cifra se busca
antes de escribir la frase que cuelga de ella**, y no al revés.

Los tres de esta serie siguen sin incorporarse a la app: en `curiosidades.ts`
solo está el número 1. El fallo, por tanto, no llegó a publicarse.

## LA OFERTA Y LOS OBJETIVOS — 4 de septiembre, noche

Pablo: «cambia el texto y pon Escoge tus objetivos o algo así; pones un texto
pequeño que se vea mejor que ahora, de alcanza tus metas o alguna frase así
motivadora que prometa cosas. Y pon este pollo que te paso en el .zip para
nuestra oferta; haz esa parte muy bonita, la de la oferta, con las mejores
técnicas de marketing del mundo para que la gente compre».

### El pollito manda sobre el precio, y no al revés

El dibujo trae **«44 % DE DESCUENTO» pintado dentro**. La oferta estaba en
14,99 sobre 23,99, que son 38. O sea que la pantalla habría dicho dos números
distintos a la vez.

Se ha movido el precio, no el dibujo: **13,49 €/año**, que sobre 23,99 da 43,8
y redondea a 44. **Si algún día cambia el precio hay que mirar esto**, porque
`DESCUENTO` se recalcula solo y el PNG no.

El dibujo venía sobre un gris plano (#1f1f21) sin transparencia. Ese gris se ha
pasado a alfa, así que ahora sirve sobre cualquier fondo —y de hecho va sobre
el papel crema de la oferta, que se ha quedado como estaba—.

Y el titular que contaba «38 % menos» subiendo desde cero **se ha ido**: el
número ya está en el cupón, más grande, y decirlo dos veces en la misma
pantalla es competir consigo mismo. En su sitio hay una frase que dice lo que
el cupón no dice: qué se compra.

### Lo que se le añadió a la oferta, y por qué eso y no otra cosa

Lo que faltaba no era adorno: **era la razón**. La pantalla pedía dinero por una
palabra —«la oferta»— y quien no supiera ya lo que hay dentro de Curva no tenía
con qué comparar el precio. Ahora hay cuatro renglones con lo que te llevas,
uno por línea, y las tres cifras **se cuentan de los propios datos**: el día que
entren cien resúmenes más, la pantalla lo dice sola. Un número escrito a mano
ahí se queda viejo en una semana, y ese número es una afirmación sobre lo que
alguien está comprando.

Lo demás son cuatro cosas que funcionan y que además son verdad:

- **el ancla**: el precio viejo tachado al lado del nuevo, que ya estaba;
- **el precio por mes** —1,12 €— y la comparación con un café, que es literal:
  a ese precio no hay café en España que salga por menos;
- **el botón en primera persona**, «Quiero mi 44 %», que se lee como algo que
  decide el lector y no como algo que le piden;
- **quitar el riesgo debajo del botón**: cancela cuando quieras, sin
  permanencia.

**LO QUE NO SE HA HECHO, Y ES A PROPÓSITO.** Las técnicas que más venden de
verdad son la cuenta atrás, el «quedan 3 plazas», las reseñas de cinco
estrellas y el «1.482 personas se han suscrito hoy». Todas serían mentira aquí,
y Curva vende exactamente lo contrario: somos los que decimos dónde falla cada
libro. Una pantalla de pago que miente se carga esa promesa entera, y se la
carga justo en el momento en que se pide la tarjeta.

Si Pablo quiere urgencia, la honesta existe y no está puesta porque no sé si es
verdad en el producto: si el cupón caduca de verdad, decirlo. Eso hay que
decidirlo, no inventarlo.

### Y los objetivos ya no preguntan

«¿Cambiamos lo que te proponemos?» era una pregunta, y una pregunta en un
rótulo deja al lector decidiendo si contestar en vez de haciendo lo que va a
hacer. Ahora es **«Escoge tus objetivos»**, dentro y en la tarjeta que abre —el
mismo rótulo en los dos sitios, que antes eran dos distintos y obligaban a
comprobar que se había llegado al sitio—.

Y la frase de debajo promete algo **que se cumple**: «Marca a dónde quieres
llegar y ponemos delante los libros que llevan ahí». Es la única manera de
prometer en esta pantalla. Lo que no puede decir, por mucho que anime, es que
haya algo calculado para ti: no lo hay, y esa es la norma de la casa desde que
se quitó «Personalizado para ti».

La de antes era la de Headway palabra por palabra —«Para conseguir nuevas
recomendaciones, tienes que ajustar tus objetivos»—, que es un trámite
explicado.

## LA BIBLIOTECA, CON LA BARRA Y LAS DOS TECLAS — 4 de septiembre

Pablo mandó una captura de Headway y tres cosas: «cópiame la barra azul de
progreso de seguir leyendo, hazla igual o casi casi igual; el botón de guardar
nuestro lo quitas porque en ese caso no tiene sentido y pones lo suyo,
descargar, y los tres puntitos, que tendrán la función de compartir, quitar de
la biblioteca o marcar como terminado».

**LA BARRA, MEDIDA EN SUS PÍXELES** y no a ojo. A 2x: alto 16 —o sea 8—, el
ancho entero de la cubierta, extremos redondos, carril `#4e4e4e` y relleno
`#0097fb` con un degradado vertical mínimo. Diecisiete puntos entre el borde de
abajo de la cubierta y el arranque de la barra, o sea ocho.

Y va DEBAJO de la cubierta, que es la otra mitad del cambio. La nuestra estaba
dentro, flotando sobre el dibujo con un carril blanco translúcido, y ahí tapaba
el pie de la portada, que es donde suele ir impreso el nombre del autor.

**LA BARRA DICE LO QUE HA PASADO DE VERDAD.** No sale de `libro.progreso` —un
número escrito a mano en los datos de muestra que no mueve nadie al leer— sino
de `paginaDe`, la página por la que va, que `App` baja hasta `MiBiblioteca`. Es
la misma cuenta de la barra grande del inicio: páginas enteras pasadas más el
trozo de la de ahora, sobre las que tiene el libro. Un libro terminado no
enseña barra: ya no es algo que estés siguiendo.

**LAS DOS TECLAS DURARON UNA TARDE.** Se hicieron medidas de su captura —39 de
lado, 8 de margen, esquinas de 11 y el gris del marcador— apoyadas en el borde
de abajo de la cubierta, que es donde las pone Headway. Y las devolvió: «lo de
descargar y los tres puntitos quítalo y ponlo en otro lado, que no tape la
portada; lo de descargar quítalo y solo deja los tres puntitos y ya».

Tenía razón en las dos. **Sobre la cubierta estorbaban de verdad**: se comían
justo el pie, que es donde casi todas llevan impreso el nombre del autor. Y
**descargar sobraba**: en un prototipo no hay nada que bajar, así que era un
botón que solo sabía ponerse verde.

Ahora queda **el menú y nada más, en el renglón del autor y a su derecha**. Ese
renglón ya existía y le sobra sitio, así que el menú no cuesta ni un punto de
alto y la cubierta se ve entera. Va sin fondo ni filo: el renglón es texto
pequeño y una tecla con caja al lado pesaría más que el nombre.

**Y el autor pasa a partirse en dos líneas.** En el carrusel iba a una línea con
puntos suspensivos; quitándole 22 puntos para el menú, «Yuval Noah Harari» —el
autor de dos de los libros más vistos— se quedaba en «Yuval Noah Ha…». Un
nombre partido se lee entero; uno cortado, no. Ojo con la regla: `.carrusel
.ficha-autor` pone `nowrap` más abajo en el mismo fichero y con la misma
especificidad, así que ganaba por orden; hay que subir a tres clases.

**Y el marcador desaparece, pero SOLO EN LA BIBLIOTECA.** Es la razón que dio
él y es buena: un libro que ya está dentro no se guarda otra vez. En Inicio y
en Explorar sigue igual, porque allí sí se guarda. Lo que hace falta dentro es
lo contrario —sacarlo—, y eso vive en el menú.

**EL MENÚ VA EN LA HOJA DE SIEMPRE**, no en un globo pegado al botón: son
cubiertas de 148 puntos pegadas al borde de la pantalla, y un globo ahí se sale
o tapa la de al lado. Sus tres filas, en el orden en que se usan: compartir,
marcar como terminado, quitar de la biblioteca. La última en rojo, que es la
única que se deshace peor.

**«Marcar como terminado» apunta el libro y olvida por dónde iba, y nada más.**
No suma minutos ni ideas: esos son de lo que se ha leído de verdad, y marcar
una casilla no es haber leído.

**Y un fallo que este menú destapó:** los colores de la hoja —`--hoja-fondo` y
compañía— vivían dentro de `.ajustes`, que era el único sitio desde donde subía
una. La primera hoja que subió desde otra pantalla salió TRANSPARENTE, con los
rótulos flotando sobre las portadas y sin ningún error por ninguna parte: una
variable que no existe no se queja, simplemente no pinta. Ahora están en
`:root`, con los mismos valores.

### «Para ti», «Best sellers» y las tendencias del 1 al 10

De la misma tanda: «en vez de recomendados quiero que solo ponga Para ti y
debajo otra fila de best sellers; después, en tendencias, enumera poniendo los
números en grande, que esté bien puesto y cuadrado, solo del 1 al 10, y en
tendencias solo pones Tendencias y ya, con el mismo tamaño y la misma letra que
la de libro diario gratis».

**«Para ti» y nada más.** El rótulo decía «Recomendados» a secas para quien no
había elegido temas todavía y «Para ti» para quien sí, con un subtítulo que
explicaba cuál de las dos era. El nombre vale igual en los dos casos, y al lado
hay un botón que dice «Gestionar», que ya cuenta que eso se puede cambiar. Con
un filtro puesto sí queda el rótulo de la categoría y su cuenta, porque ahí el
número es el resultado de lo que acabas de pulsar.

**«Best sellers» es una fila nueva y una lista nueva**, en
`src/libros/superventas.ts`. No se filtra ni se personaliza: son doce títulos de
los que se informan decenas de millones de ejemplares, en el orden de la cifra
que se cita habitualmente. Esa cifra está escrita en el fichero y NO se enseña
en pantalla, porque es una estimación —las ventas de un libro con ochenta años
y cien ediciones no las tiene contadas nadie— y lo que sí se sostiene entero es
lo que se le dice al lector: que son de los más vendidos.

Va debajo de «Para ti» y no encima, que es el orden que él dijo y el que tiene
sentido: primero lo que te podría gustar a ti, después lo que le ha gustado a
todo el mundo. Con un filtro puesto no sale: los tres más vendidos de una
categoría no son best sellers, son los tres primeros de una lista corta.

**Tendencias, del 1 al 10.** Eran veintiuna. Una lista numerada dice cuántos son
por el último número que enseña, y a la vez promete que el diez es mejor que el
once; del undécimo en adelante ese orden ya no lo sostenía nada. Los otros once
siguen en `tendencias.ts` y vuelven subiendo `CUANTAS_TENDENCIAS`.

**Y el número, a 44 puntos.** Estuvo a 250 al modo de Netflix —se comía la
sección— y después a 21 con una raya al lado. Ahora va solo, en la serifa, con
`tabular-nums` y `line-height: 0.82`, alineado con el canto izquierdo de la
cubierta y de la promesa: los tres arrancan en la misma vertical, que es lo que
hace que la tira se lea cuadrada. Encima de la cubierta no va, que ahí taparía
el nombre del autor.

**Y el rótulo, a secas.** Se fue el «Los que prometen algo, y lo cumplen»: la
promesa de cada libro ya está escrita debajo de su cubierta.

**Ojo, que Tendencias vive en EXPLORAR, no en Libros.** Es la única de las
cuatro cosas de esta tanda que no está en la pantalla de Libros.

### La pastilla de la cabecera: se acabó el dado

Pablo, el 4 de septiembre: «el dado no me gusta cómo queda, ¿qué podríamos
poner para que quedase mejor? Prueba cosas. Y el perfil cámbialo, el símbolo,
pon otra cosa más minimalista y bonita; haz esa parte más bonita».

**HAN SIDO CUATRO DADOS Y CUATRO DEVOLUCIONES**, y el cuarto era el que él
mismo había pedido —«quiero que sea en 3D»—, bajado de fuera y bien hecho. La
lista entera está en `Dado.tsx`, encima de `GlyphAzar`.

Así que el problema no era cómo estaba dibujado el dado: era que un objeto de
tres dimensiones con luz, sombra y dos colores está SOLO en una cabecera donde
todo lo demás son trazos blancos de 1,8. Por bien hecho que esté, ahí dentro es
un cuerpo extraño. Por eso esta vez se cambia el SÍMBOLO y no el dibujo.

**Ahora es el de BARAJAR**, dos flechas que se cruzan. Dice lo que hace el botón
—darte un libro al azar— sin dibujar el objeto que lo decide, y es de la misma
familia que la lupa, el marcador y el rayo de la barra. Se le pasaron cinco a
elegir con `scripts/cabecera-iconos.mjs`: el 3D de ahora, un dado a línea,
barajar, una chispa y una brújula.

**Y el dado a línea NO se propuso como recomendación aunque sale en la hoja**,
porque ya se probó y se devolvió en agosto. Repetir una opción descartada sin
decirlo es hacerle perder el tiempo.

**Cómo se mueve.** Un dado rueda; unas flechas, no. Lo honesto con este dibujo
es una sacudida corta —la de quien menea la bolsa antes de sacar la ficha—: dos
idas y venidas y para. Sigue saliendo sola cada nueve segundos, que es lo que
hace que alguien lo toque.

**EL PERFIL PIERDE EL ARO.** Era una persona dentro de un círculo, y el círculo
sobraba por dos razones. La de dibujo: la persona ya vive dentro de la pastilla,
que es redonda por su lado, así que el aro era un segundo círculo dentro del
primero y a veintitrés puntos los dos trazos se juntaban. Y la de sentido: el
aro es lo que se pone cuando dentro va una FOTO tuya, y aquí no hay foto.

**Y LA PASTILLA.** Iba en `#383838` macizo con un filo de `#606060` —un gris
contra otro gris, los dos a mano— y pesaba más que nada de lo que tiene
alrededor: en esa pantalla lo único opaco era ella, y el ojo se le iba antes que
al saludo. Ahora es crema al 8 % con un filo al 14 %, que es lo que ya usan los
filtros y el botón de «Gestionar». El filete de en medio se queda, más corto y
más flojo: sin él los dos botones se leen como un control solo, y son dos cosas
que no tienen nada que ver.

**`src/dado-3d.ts` no se borra.** Nadie lo importa, así que no entra en el
paquete, y sigue ahí por si algún día se vuelve. Su crédito —Fluent Emoji, MIT—
ya estaba puesto por los dibujos de «¿Sabías que…?», que son del mismo sitio.

### Tendencias, sin los textos: el puesto y el crédito en una fila

Pablo, un rato después: «quita el texto de abajo de tendencias, el de "un 1 %
al día"; esos textos quítalos y coloca el número por ahí, y si puedes mejorar
la estética, mejor aún».

Sin la promesa, la cifra se quedaba sola en un renglón entero y la tarjeta
medía cuarenta puntos más para no decir nada. Ahora el puesto y el crédito
comparten fila: la cifra grande a la izquierda y, a su lado, el autor encima de
los minutos. La tarjeta pasa de 356 puntos de alto a 269.

**Las promesas NO se han borrado**: siguen escritas en `libros/tendencias.ts`,
que es donde estaban, con sus reglas de redacción. Lo único que ha cambiado es
que no se pintan en la tira. Si vuelven, vuelven de ahí.

### Fondo blanco o fondo negro en Libros: qué se le contestó

Preguntó el 4 de septiembre —«¿a ver cómo quedaría con fondo blanco en la
sección de libros? ¿me lo recomiendas, o mejor en negro? ¿Qué dice la
psicología?»— y se le pasaron los tres montados sobre la pantalla de verdad con
`scripts/fondo-claro.mjs`: el negro de ahora, blanco puro y el crema de leer.

**La recomendación fue dejarlo en negro, y el motivo no es la moda.** Lo que
dice la investigación es de LEER: con texto largo, tinta oscura sobre fondo
claro gana —se lee con menos errores y algo más rápido, porque la pantalla
clara contrae la pupila y eso aumenta la profundidad de campo—. Pero la
pantalla de Libros no es de leer: es de mirar cubiertas. Ahí la que manda es la
regla contraria, y es la razón por la que Netflix, Spotify o Steam son oscuros:
la cubierta es el producto, y un fondo claro compite con ella.

Y se ve en la propia captura: sobre blanco, las cubiertas de fondo crema —«Por
qué amamos», «La Odisea»— pierden el filo y se derraman en la página.

**Lo que la app ya hace es lo correcto y conviene no romperlo:** oscuro para
buscar, crema para leer. Es la misma división, y cada mitad está del lado que
le toca.

Si algún día se quiere claro, el bueno es el crema `#f2ece1` y no el blanco
puro: es el papel que ya usa la pantalla de lectura, y con él las cubiertas
claras conservan su canto.

### El regalo también es suyo, y el botón se queda sin rótulo

«Pon este regalo donde tenemos el regalo, y donde pone Tu regalo solo pones el
emoticono; haz que quede todo bonito.»

**LA CAJA DEL AVISO.** Aquí había una caja dibujada por mí: isométrica de
verdad —la tapa y el cuerpo compartían puntos de fuga—, con la tapa que salía
despedida al abrirse y un zorro que asomaba por dentro. Se va entera, y con
ella el zorro. Están en el historial de git.

Y no se pierde nada de lo que hacía, porque **ya casi no lo hacía**: desde que
la oferta enseña el pollito, esta caja solo aparecía CERRADA. Toda su
maquinaria de apertura llevaba horas sin que la mirara nadie. Lo que sí se
conserva es el meneo lento, que es lo que pide que la toques.

**EL BOTÓN FLOTANTE PIERDE EL RÓTULO.** Era una pastilla verde de 52 puntos de
alto con un lazo dibujado y las palabras «Tu regalo», y era la pieza más ancha
de la pantalla flotando encima de las cubiertas. Ahora es un botón redondo de
60 con su dibujo dentro y nada más.

**El fondo se queda VERDE aunque el dibujo sea coral y oro**, y no es descuido:
el verde es el color de «esto no cuesta nada» en toda la app —la pestaña
activa, el «Ver libros», el «Gratis hoy»— y este botón es justo eso. Se probó
también en gris y en crema, y en los dos el botón dejaba de pedir que lo
tocaran.

**Y lleva `aria-label`**, porque sin texto no hay nada que leer en voz alta:
quitarle el nombre a un botón es quitárselo a quien no ve el dibujo.

### Y la tira de gratis lleva cuenta atrás

«Ahora un contador en libro diario gratis, uno bonito, no muy aparatoso.»

No aparatoso quiere decir esto: el reloj pequeño y la cifra, en el hueco que ya
deja el rótulo a su derecha. Sin caja, sin fondo, sin verbo y en gris —un color
de alarma para decir que quedan cuatro horas es exagerar—.

Y con el mismo texto que la tarjeta grande del día, que ya tenía cuenta atrás:
`quedaDeHoy()` pasa a exportarse y la usan las dos. Dos maneras de escribir la
misma cuenta en la misma pantalla se leen como dos cuentas distintas.

Se refresca cada veinte segundos, como la otra. Cada segundo obligaría a
repintar la tira sesenta veces por minuto para mover un dígito que casi nunca
cambia.

Es la única urgencia honesta que hay aquí, y por eso está: no hay plazas
limitadas ni ofertas que expiran, hay medianoche. A las doce cambian los tres
libros de verdad.

### El regalo, en un recuadro, y «Gratis hoy» en azul — 5 de septiembre

Pablo: «no pongas el círculo ese verde en el regalo, quítalo, y pon en cambio
un recuadro al lado tu regalo que envuelva todo y quede muy bien y bonito, y lo
de gratis hoy ponlo en azul».

**Tercera forma del botón, y la buena.** Pastilla verde ancha con un lazo
dibujado → círculo verde de 60 con solo el dibujo → marco fino que envuelve el
dibujo y las palabras.

Lo que fallaba en el círculo, dicho con lo que ya sabíamos: **el verde era un
disco de color detrás de un regalo coral y oro**, dos cosas peleando en 60
puntos. Es la misma lección de «¿Sabías que…?» y de la etiqueta de gratis:
cuando la pieza ya tiene color propio, un fondo de color no se lo da, se lo
quita. Ahora el color lo pone el dibujo y la caja solo lo enmarca.

**Los dos colores del marco no se eligieron, se midieron.** Con `sharp`,
contando píxeles opacos del regalo de Pablo: coral `#fb7563` el 40 % del dibujo
y oro `#f6c351` el 23 %. El filete y las letras son ese oro, así que el marco es
el propio lazo del regalo estirado alrededor. Fondo negro cálido —`#241d19` a
`#171310`— y no el gris de la app: contra un naranja, el gris neutro tira a azul
y ensucia el dibujo.

**Y las palabras vuelven, que no es dar marcha atrás.** Sin rótulo, el botón
dependía de que se reconociera un dibujo de 38 puntos. Lo que ocupaba sitio
antes no era el texto: era el relleno verde. Con el marco caben las dos cosas en
147 × 54, menos de lo que medía la pastilla original.

El meneo pasa del botón al dibujo. Latiendo entero, un recuadro con letras se
mueve como un anuncio; moviéndose solo el regalo, llama el regalo.

#### El halo que había que quitar

Llevó media hora un halo coral al 18 % detrás del dibujo, para «asentarlo». Al
ampliarlo a cuatro aumentos se vio lo que era: **sobre un fondo casi negro, un
color translúcido no ilumina, oscurece.** Lo que se pintaba no era un rescoldo,
era una mancha granate alrededor del regalo, como una pegatina despegándose.
Para que un halo alumbre sobre negro tendría que ir casi opaco, y entonces ya
no es un halo: es el disco de color que Pablo acababa de quitar.

Queda escrito porque el fallo no se ve a tamaño real y sí a cuatro aumentos.
**Un adorno de menos de un 25 % de alfa sobre fondo oscuro hay que mirarlo
ampliado o no se sabe qué se ha pintado.**

#### «Gratis hoy» en azul

Él dejó las dos abiertas el 4 —«en verde o azul»— y al verlo eligió azul. Es
`#0099ff`, el que ya lleva la app en la barra de progreso, en los botones y en
la pestaña activa: no entra ningún color nuevo. Sobre `#151515` da **6,1 de
contraste contra los 5,4 del verde**, que a catorce puntos se nota.

Y suelta el verde, que ahora significa una sola cosa. Con «Gratis hoy» en verde,
ese color decía a la vez «esto es gratis» y «esto lo has hecho» —la marca de
leído, el progreso—, o sea que no decía ninguna de las dos.

El rótulo GRATIS HOY de la tarjeta del libro del día **no cambia**: sigue en
crema. Ahí encima hay una cubierta a toda pantalla y dos palabras de color se
pelean con ella; en la tira de abajo el fondo es liso y el color se lee limpio.
El comentario de `LibroDelDia.tsx` decía «en verde» y llevaba tiempo mintiendo
—el CSS era crema desde antes—; queda corregido de paso.

#### Y una trampa de las capturas

**El aviso del regalo sale solo a los pocos segundos y oscurece la pantalla
entera.** Dos capturas seguidas del mismo arranque salieron distintas por eso, y
la segunda parecía un fallo de color. Para mirar el botón hay que disparar
**antes de los 4 segundos**; pasados, lo que se fotografía está detrás del velo.

### OCHO CUBIERTAS NUEVAS, Y LA PARRILLA A LA MEDIDA DE HEADWAY — 5 de septiembre

Pablo: «tengo estas portadas, sustitúyelas por las que ya están y hazlas del
mismo tamaño que las de Headway y tal». Zip
`coleccionelegidaredondeada`, diez PNG de 1024 × 1536 con las esquinas
redondeadas y transparencia real.

**Las ocho, y a qué libro va cada una.** Su `LEEME.txt` las numera y no las
nombra con el id del catálogo, así que la correspondencia va escrita aquí:

| suyo | id del catálogo |
| --- | --- |
| `01-como-ganar-amigos-B` | `amigos-influir` |
| `02-el-poder-del-ahora-B` | `poder-ahora` |
| `03-habitos-atomicos-azul-marino` | `habitos-atomicos` |
| `04-la-psicologia-del-dinero-A` | `psicologia-dinero` |
| `05-el-infinito-en-un-junco-A` | `infinito-junco` |
| `06-el-mundo-de-ayer-A` | `mundo-ayer` |
| `portada-homo-sapiens` | `sapiens` |
| `portada-homo-deus` | `homo-deus` |

De Sapiens y Homo Deus mandó **dos versiones de cada una** —la normal y una de
«fondo suave»— sin decir cuál. Se cogieron **las normales**: las suaves son la
misma ilustración sobre un degradado lavado, y en una estantería de fondo negro
se ven descoloridas al lado del resto. Si prefiere las otras, están en el zip y
es cambiar dos ficheros.

Las ocho anteriores **no se han borrado**: están en
`cubiertas-originales/retiradas/`, con la fecha en el nombre.

#### Las esquinas: se cuadran, y el redondeo lo pone la app

Venían redondeadas de fábrica, con un radio del **7,1 % del ancho**. La app
redondea sola, y las dos cosas juntas dejaban ocho cubiertas visiblemente más
redondas que las otras 330 —se veía a simple vista con «Hábitos atómicos» al
lado de «Los 7 hábitos»—.

`scripts/cuadra-cubiertas.mjs` les devuelve el rectángulo: rellena cada píxel
transparente con el color opaco más cercano de su propia fila, que en fondos
planos como estos es invisible. **Su original con el alfa intacto se guarda en
`cubiertas-originales/`**; lo que se cuadra es solo la copia que sirve la app.

#### «Del mismo tamaño que las de Headway»: eran 148 y ahora son 171

Medido, no estimado. En `referencia/estantes-promesa/`, que es la única
parrilla de Headway que tenemos, sus cubiertas ocupan **233 px de una captura
de 520 de ancho** y llegan a los dos márgenes: unos 168 puntos. Las nuestras
median 148 y dejaban un claro a la derecha.

La culpa era de un `!important`: `.parrilla .portada` clavaba el ancho a
`--ficha-ancho` dentro de una columna que ya valía `1fr`. La columna medía 171
y la cubierta 148, y los 23 que sobraban se sumaban al hueco. Quitado eso salen
**171 × 256**.

El radio pasa de 7 a 8 por pura proporción: los 7 se midieron sobre una
cubierta de 148 —un 4,7 % del ancho— y ese mismo 4,7 % sobre 171 son 8.

**El carrusel NO cambia.** Allí 148 es lo que deja asomar la tercera cubierta
por el borde, que es lo que dice que la tira sigue. Dos medidas para dos cosas
distintas.

#### DOS FALLOS DEL GUION, y uno llevaba tres días callado

**`mete-cubiertas.mjs` escribía en el sitio equivocado.** `RAIZ` es
`src/libros/`, así que un solo `../` dejaba las cubiertas en
`src/cubiertas/servir/` mientras los `import` del módulo —que llevan `../../`—
seguían apuntando a `cubiertas/servir/`, en la raíz. El guion imprimía «8 de
esta tanda · 0,2 MB escritos», terminaba con código 0, y la app seguía pintando
las viejas. **Se cazó mirando la fecha del fichero, no el mensaje del guion.**

Llevaba roto desde el 2 de septiembre, que es cuando las cubiertas dejaron de ir
incrustadas y pasaron a ficheros; no saltó antes porque entre medias no hubo
ninguna tanda. Es el mismo patrón que el de `movil.mjs`: **un guion que no
avisa es peor que uno que falla.**

**Y regeneraba la cabecera de `cubiertas.ts` desde una plantilla vieja**, que
describía el mundo de antes del 2 de septiembre —«incrustadas como texto»— y
borraba la explicación de por qué van en ficheros. Cada tanda deshacía esa
documentación en silencio. La plantilla está puesta al día.

#### Las descripciones había que reescribirlas

El guion conserva el `alt` escrito a mano al regenerar, que normalmente es lo
que se quiere. Aquí no: **la cubierta cambia, así que la descripción de la
cubierta vieja pasa a ser mentira.** El `alt` de Sapiens hablaba de un perfil
humano sobre naranja y la nueva es un puño con una antorcha sobre azul. Las
ocho reescritas a mano mirando las imágenes.

Regla para la próxima tanda: **si el id ya tenía cubierta, su `alt` hay que
volver a escribirlo.** Conservarlo solo vale para una cubierta nueva.

### LA PANTALLA DE LA OFERTA, CALCADA — 5 de septiembre

Pablo mandó una captura de la pantalla de pago de Headway: «la captura házmela
exactamente así o muy parecida, la pantalla del regalo, hazlo exactamente
igual». La captura es de **750 × 1624**, o sea un móvil de 375 × 812 a dos.

**Todo lo de aquí está medido, no mirado.** Con `sharp`, sacando la caja de
tinta de cada bloque y dividiendo por dos:

| | ancho | y | alto |
| --- | --- | --- | --- |
| la X | 15 | 84 | 15 |
| la ilustración | 236 | 154 | **297** |
| pastilla del ahorro | 118 | 496 | 18 |
| fila de precios | 200 | 531 | 20 |
| «solo N al mes» | 136 | 563 | 15 |
| botón | **343** | 605 | **56** |
| línea de la tienda | 156 | 686 | 14 |
| filete | 343 | 717 | 1 |
| los tres enlaces | 317 | 727 | 28 |

Y los colores, muestreados:

    fondo #222222 · botón #0099ff · ahorro #03bb77 · filete #4e4e4e
    letra apagada #7a7a7a · subtítulo del botón #cceaff · radio del botón 8

El fondo es **#222222 y no el #151515 de la app**, y no es descuido suyo: sobre
un negro puro un azul saturado vibra en el borde. Este gris le da suelo.

**El pollito encaja sin tocarlo.** Su cerebro sujeta un cartel morado que dice
«DESCUENTO PARA TI», el número y «DE DESCUENTO»; el cupón que dibujó Pablo el 4
de septiembre trae **esas mismas tres líneas**. O sea que el hueco de su
ilustración lo ocupa la nuestra tal cual. Manda el ALTO —297, que es lo que se
agota en un móvil— y el ancho sale solo: 297 × 0,717 = 213.

#### Lo que se ganó de su pantalla

**La pastilla del ahorro EN EUROS.** Es la pieza que más trabaja y no la
teníamos: el cupón dice el tanto por ciento y esto dice lo mismo en dinero, que
es como se piensa. La cifra se calcula restando los dos precios, así que
cambiar un precio no puede dejarla mintiendo.

**La letra pequeña, DENTRO del botón.** Nuestro «cancela cuando quieras» estaba
debajo, en gris sobre el fondo, que es el sitio exacto donde no lo lee nadie.
Metido en el azul y bajo la palabra, se lee, y quita el miedo justo en el
instante en que se decide.

#### Lo que se fue para que fuera igual

El titular «Todo Curva, un año» y la lista de cuatro puntos con los vistos
verdes. En su captura no hay ninguna de las dos, y no es que sobren: **no
caben.** De los 812 puntos, la ilustración se lleva 297 y el pie 209; cuatro
renglones más obligan a hacer scroll, y una pantalla de pago no puede pedirlo.

Las dos están en el git y son un rato volver a ponerlas. Lo que hay que devolver
también son los cuatro `import` de `Regalo.tsx` —`LIBROS_RESUMEN`,
`CURIOSIDADES`, `DATOS` y `GlyphVisto`—, que es de donde salían las cifras
contadas de los propios datos; queda dicho en un comentario donde estaban.

#### El truco del relleno, que no es obvio

Medido contra su captura, todo el bloque del cuerpo caía **24 puntos alto**. Un
`margin-top` en el primer hijo NO lo arregla: engorda el grupo, y un grupo
centrado se reparte el engorde a partes iguales —baja 12 y sube 12—.

Lo que mueve un grupo centrado es el **relleno del contenedor**, y lo mueve la
mitad: `padding-top: 48` lo baja 24 justos. Con eso las cajas de la ilustración,
la pastilla, los precios y el «al mes» cuadran con las suyas dentro de un punto.

El pie queda **6 puntos más arriba** que el suyo y ahí se deja: la diferencia
sale de que nuestros tres enlaces ocupan 32 de alto y los suyos 28, y cuadrarlo
significaría apretarles el interlineado por debajo de lo que se lee bien.

#### Cómo se comprueba, que es la parte reutilizable

No a ojo. Se mide **lo mismo en las dos**: en la captura, la caja de tinta de
cada bloque con `sharp`; en la nuestra, `getBoundingClientRect()` desde
Playwright con la ventana a 375 × 812. Dos columnas de números al lado, y se
ajusta hasta que coinciden. Mirar dos pantallas parecidas y decidir cuál está
bien es justo lo que no funciona.

### NADA SE MUEVE SOLO — 5 de septiembre

Pablo, al ver la oferta terminada: «quítame las animaciones que pones y deja las
imágenes como están, y quítame las estrellas que añadiste al lado del pollo».

**La regla que queda, y vale para toda la app: nada se mueve solo. Las cosas
responden cuando se las toca.** Lo que se quita es el movimiento en bucle y las
entradas escalonadas; lo que se queda es el `whileTap`, que no es adorno sino el
acuse de que el dedo ha llegado —sin él un botón parece averiado— y la entrada y
salida de cada pantalla, que es la navegación de la app y no de esta pieza.

Lo retirado, con su sitio:

| dónde | qué se movía |
| --- | --- |
| la oferta | el pollito se columpiaba y entraba cayendo |
| la oferta | seis estrellas y diez papelillos disparados desde el centro |
| la oferta | el tachado del precio viejo se dibujaba de izquierda a derecha |
| la oferta | pastilla, precios, «al mes», botón, tienda y enlaces entraban escalonados |
| el aviso | la caja del regalo flotaba y se balanceaba |
| el inicio | el regalo del botón flotante se sacudía cada pocos segundos |
| la cabecera | el símbolo de barajar se sacudía solo cada nueve segundos |

#### Por qué las estrellas sobraban, que es lo que importa

Eran seis de cinco puntas en el rojo del cupón y el amarillo del pollito,
muestreados de su propio dibujo, saliendo del centro escalonadas 45 ms.

Y **su dibujo YA TRAE cuatro destellos** de cuatro puntas repartidos alrededor
del pollito. Las mías, más grandes, no añadían fiesta: tapaban las suyas y
convertían un dibujo terminado en un dibujo con adornos pegados alrededor. Es la
misma lección de «¿Sabías que…?», del recuadro del regalo y de la etiqueta de
«Gratis hoy»: **cuando la pieza ya está resuelta, lo de al lado solo le quita
sitio.** Van cuatro veces seguidas.

#### Lo que se llevó por delante, que es más de lo que parece

`Chispas` y `Confeti` enteras, sus dos colores muestreados, `.regalo-chispa` y
`.regalo-confeti`, y detrás de ellas **el estado `abierta` de la oferta**: un
temporizador de 240 ms cuyo único trabajo era retrasar el estallido para que se
leyera como consecuencia de haber pulsado «Abrir». Sin estrellas que disparar no
encendía nada, y con él se fue el `reducido` que lo ponía a cero —y de paso, el
`reducido` de `AvisoRegalo`, que solo servía para no menear la caja—.

#### Cómo se comprueba que está quieto

Dos capturas de la misma pantalla separadas 1,6 segundos, y se comparan píxel a
píxel. Si son idénticas, no se mueve nada; si no, la comparación da la caja
donde está lo que se mueve y ya se sabe dónde mirar. Así salió el símbolo de
barajar, que no estaba en la lista y se sacudía en 22 × 18 puntos de la
cabecera.

Con eso, **inicio, explorar, biblioteca y la oferta están quietas**. Queda una
sola cosa moviéndose sola en toda la app: **la llama de la racha, en el perfil**,
que parpadea. Es de antes y no se ha tocado, porque quitarle el parpadeo la
convierte en un icono y eso ya no es quitar una animación, es cambiar una pieza.
Si él la quiere quieta también, es un rato.

### «Gratis hoy»: primero pasó a verde, después perdió la etiqueta

«Ponme un verde mejor, que pegue con el fondo y sea bonito.» Se le pasaron
siete con `scripts/verdes-gratis.mjs` y se puso `--verde`, el mismo de la
pestaña activa y del botón de «Ver libros», con la letra oscura: sobre ese
verde el blanco da 1,9 de contraste y no se lee.

**Y un rato después se fue la etiqueta entera:** «quita la etiqueta esa de
gratis hoy y solo pon gratis hoy en verde o azul».

Era una pestaña de 39 puntos, más estrecha que la cubierta, metida por detrás y
asomando por arriba, calcada al píxel de una captura de Headway —está medida en
el comentario de `styles.css`, que se conserva por si vuelve—. Estaba bien
copiada y aun así sobraba, por el mismo motivo que se cayeron los adornos de
«¿Sabías que…?»: la cubierta ya es la pieza que se mira, y una banda de color
encima le quita sitio y le tapa el canto de arriba.

Ahora son dos palabras en verde **debajo** de la cubierta. Arriba obligaba a
que todas las cubiertas de la tira empezaran más abajo; abajo ocupa el sitio
del nombre del autor, que en esta tira no se pone.

Y el orden del DOM es cubierta y después rótulo, con `order` en el CSS para
pintarlo: así quien escucha la pantalla oye primero de qué libro se trata y
luego que hoy es gratis.

**En azul es una línea** —`color: #2f9bff`—, que es el de la referencia. Está en
verde porque es el color de la casa y el azul sería el único de esa pantalla.

## LA PANTALLA DE INICIO Y EL PERFIL, DESPUÉS DEL 26 DE AGOSTO

Ese día y el siguiente Pablo rehízo media app a base de capturas de Headway y
de Blinkist. Lo que quedó, y por qué, para que no se deshaga por descuido:

**Inicio.** Libro de hoy → filtros → Recomendados → **Colecciones** →
**Gestiona las recomendaciones**. Se fueron «Retomar» y «Personalizado para
ti».

**Y desde el 2 de septiembre las colecciones NO SE VEN.** Pablo: «quita las
colecciones de libros de momento». Lo que sigue en este apartado describe algo
que está entero en el código y apagado en la pantalla, y conviene leerlo así.

No se borró nada porque él dijo «de momento». Hay un interruptor —
`COLECCIONES_A_LA_VISTA` en `src/colecciones.ts`, ahora en `false`— y de él
cuelgan los tres únicos sitios donde asomaban: la tira del inicio, el «Aparece
en» de la ficha de un libro y la pantalla de la colección. Encenderlo otra vez
es cambiar esa línea y no hay más que tocar.

Interruptor y no código comentado a propósito: comentado se pudre en cuanto
cambie cualquier cosa alrededor y nadie se entera hasta que hay que
resucitarlo, mientras que así el compilador sigue comprobando que las once
colecciones, su orden por intereses y las dos piezas de `Colecciones.tsx` —la
tira y la pantalla— encajan con el resto de la app mientras están apagadas.

**La regla que gobierna las dos piezas nuevas, y es la importante:** ninguna
promete una personalización que no existe. Blinkist llama a sus colecciones
«elegidas para tus intereses» y Headway «creadas para ti», y las dos mienten el
primer día, cuando el usuario no tiene intereses todavía. Curva no se lo puede
permitir, porque lo que vendemos es que se nos crea —somos los que decimos
dónde falla cada libro—. Así que:

- Las once colecciones (`src/colecciones.ts`) son FIJAS y hechas a mano. Lo
  único que se personaliza es el ORDEN, con los temas que marcó en la
  introducción. El rótulo dice «Colecciones» y el subtítulo «Empezando por lo
  que elegiste», no «para ti».
- «Personalizado para ti» se fue justamente por eso: enseñaba tres libros
  sacados de la lista de siempre bajo un rótulo que prometía un cálculo. En su
  sitio va la tarjeta que enseña la palanca de verdad —los temas y el botón
  para cambiarlos—, con su pantalla en `src/Temas.tsx`.

Los 64 libros de las colecciones están escritos, y hay que comprobarlo al
tocarlas: una colección que lleva a un resumen autogenerado es peor que no
tenerla.

**Perfil.** Suscripción → Cuenta → Racha → Meta → **Estadísticas** (crecimiento
+ temas en una parrilla estilo Apple) → Invitar → Anti-scroll → Soporte. Se
fueron la prueba de nivel, la rejilla de miniaturas y «Mi contenido».

**Los colores, que Pablo ha corregido tres veces y ya están donde los quiere:**

    ideas clave      --cifra-a   amarillo flojo   (la línea sigue en #ffb13d)
    minutos leídos   --cifra-b   naranja          (la línea sigue en #ff6a2a)
    sube / baja      --verde / --rojo
    libros y horas   blanco

La cifra NO lleva el color exacto de su línea a propósito: a 30 de cuerpo dos
naranjas parecidos uno al lado del otro se leen como un número partido en dos.

**Y una trampa de la hoja de estilos que ya ha costado un rato dos veces:**
dentro de `.inicio`, `.explorar` y `.detalle` los tokens están DADOS LA VUELTA
—ahí `--paper` es el fondo y `--ink` el texto—. Un botón pintado con
`var(--paper)` sale negro sobre gris oscuro. Las piezas nuevas usan el valor
literal `#f2ece1`, que no depende de dónde acaben.

**Los dibujos de Pablo.** Manda PNG y aquí se redibujan en SVG, no se pegan:
el candado con la llave, las entradas, las tarjetas rotas de la suscripción y
la mano del anti-scroll (`src/Mano.tsx`, que usan el perfil y la pantalla del
modo). Los colores se muestrean del fichero, no se estiman: rojo (250, 91, 74)
y oro (248, 187, 49). **Los nueve de los temas, en `src/Temas.tsx`, son
PROVISIONALES**: Pablo dijo que manda los suyos.

**La llama de la racha** lleva dos movimientos y hacen falta los dos: el
balanceo lento va en el camino y el temblor del borde en un filtro de
`feTurbulence` + `feDisplacementMap`. Con solo el primero, Pablo dijo que
«quedaba muy de IA», y tenía razón: ningún fuego tiene el borde liso. Está todo
explicado en la cabecera de `src/Racha.tsx`.

## COPIAS EN VARIOS SITIOS, NO SOLO GITHUB

Pablo lo pidió el 20 de agosto: *«acuérdate de ir guardando todo en varios
sitios aparte de github»*. Y tiene motivo: el 11 de agosto se perdieron diez
shorts porque el contenedor se restauró tres veces y se llevó por delante los
commits locales. **Un contenedor se borra; lo que está en cuatro sitios, no.**

### QUÉ ESTÁ GUARDADO DE VERDAD, auditado el 21 de agosto

Pablo lo pidió así: «guarda la aplicación entera para que no se pierda, es
importante». Al comprobarlo aparecieron dos agujeros y se taparon los dos.

**1. `vite.uno.config.mjs` estaba en el `.gitignore` por error.** Son doce
líneas de fuente, no un fichero generado, y es el que compila el simulador que
Pablo ve. Un contenedor reclamado se lo habría llevado y las instrucciones del
README apuntarían a un fichero inexistente. Ya está en el repositorio.

**2. Los dibujos de Pablo vivían solo a 480 de ancho.** Es la única pieza del
proyecto que no se puede rehacer —el texto lo vuelvo a escribir, las fotos se
vuelven a pedir a Commons, la app se recompila— y estaba guardada en la peor
calidad de todas, dentro de `cubiertas.ts` y a la medida justa que necesita la
pantalla. Los PNG originales llegan en un zip a una carpeta de subidas que
dura lo que dura la sesión.

Desde ahora se archivan al llegar, a resolución completa:

    node scripts/archiva-cubiertas.mjs <carpeta-del-zip>

Guarda WebP de 1024 de ancho en `cubiertas-originales/`, unos 150 kB cada uno.
**Se hace SIEMPRE al recibir una tanda, antes de `mete-cubiertas.mjs`**, porque
después el zip ya no está.

**Están archivadas las 265**, auditado el 25 de agosto: `git ls-files
cubiertas-originales | wc -l` da el mismo número que `ls
cubiertas-originales/*.webp | wc -l`, y la rama remota lleva las mismas 265.
Ninguna vive ya solo a 480 de ancho.

El orden al recibir una tanda no se negocia, y es este:

    1. unzip a una carpeta temporal
    2. node scripts/archiva-cubiertas.mjs <carpeta>   ← ANTES QUE NADA
    3. git add cubiertas-originales && git commit && git push
    4. node scripts/mete-cubiertas.mjs <carpeta> --ancho 520 --calidad 0.88
    5. hojas de contacto y ESCRIBIR LAS DESCRIPCIONES alt MIRÁNDOLAS

El paso 5 no se puede saltar: `mete-cubiertas.mjs` deja un texto de relleno y
`revisa-fichas.mjs` lo canta como «descripción demasiado corta». Y no se
inventa: se hace una hoja de contacto de doce en doce y se describe lo que se
ve.

### LAS ETIQUETAS DE GIT NO SE PUEDEN EMPUJAR DESDE AQUÍ

Se intentó el 29 de agosto poner una etiqueta por copia —`copia-2026-08-29`—
para poder volver a un punto sin buscar el commit. **Devuelve HTTP 403**: el
permiso de esta sesión llega a empujar la rama y no a crear etiquetas, y
`git ls-remote --tags` tampoco devuelve nada. No es un fallo de red y no sirve
reintentar.

Así que el punto de recuperación es **el commit**, y por eso se escriben aquí:

| cuándo | commit | qué hay |
|---|---|---|
| 28 ago, tarde | `ddb7c65` | el paginado como un libro, con guiones |
| 28 ago, noche | `b0bf9df` | sin guiones, cada pantalla acaba en punto |
| 28 ago, noche | `7d26a6b` | 35 shorts escritos, 11 vivos, títulos de siempre |
| 29 ago | `9c93893` | 85 shorts en 24 series, 25 vivos, 26 portadas |

Volver a uno es `git checkout <commit>`. Si algún día se conceden etiquetas,
esta tabla sobra y se pone una por copia.

Los sitios, y qué va en cada uno:

1. **GitHub**, rama `claude/app-development-xpo6fx`. Es la copia buena y
   completa. `git push -u origin claude/app-development-xpo6fx` funciona desde
   el contenedor (comprobado el 20 de agosto; antes daba 403). **Se empuja cada
   pocos commits, no al final de la sesión.**
2. **Google Drive**, carpeta «Curva — copias de seguridad».
   **LÍMITE COMPROBADO EL 25 DE AGOSTO:** `create_file` solo admite el texto
   pegado dentro de la propia llamada, así que un fichero grande hay que
   reteclearlo entero, y un documento retecleado es una copia PEOR que el
   fichero exacto. `ESTADO.md` cabe; `REDACCION.md`, de 54 kB, no sale a
   cuenta. Para ese, la copia buena es GitHub y el fichero exacto mandado por
   el chat. Lo que hay en Drive de `REDACCION.md` es del 22 de agosto. Ahí van los
   documentos que no se pueden reconstruir —`REDACCION.md`, `ESTADO.md` y,
   desde el 27 de agosto, `MOLDE.md`— con el conector de Drive. Se suben con
   `mcp__Google_Drive__create_file` pasando el texto entero; para binarios
   grandes no sirve.

   **Y SIN CONVERTIR: `disableConversionToGoogleType: true`.** Sin esa bandera
   el conector convierte un `text/markdown` en documento de Google, y entonces
   `fileSize` vale 1 —los ficheros nativos de Google no tienen tamaño— así que
   la comprobación de abajo deja de servir justo cuando más falta hace. Pasó el
   28 de agosto por la noche: se subió, se vio el 1, se volvió a subir con la
   bandera y salió 2.519, y el convertido se mandó a la papelera.

   **Y hay que comprobar el tamaño después de subir.** El `ESTADO.md` que hay
   allí del 27 por la mañana pesa 8,5 kB y el de verdad pesa 50: se subió un
   resumen, no el documento, y por fuera no se distingue —tiene el mismo
   nombre y la misma fecha—. Una copia parcial que parece completa es peor que
   no tener copia. La manera de saberlo es un `wc -c` del fichero local y
   mirar el `fileSize` que devuelve la llamada: el `MOLDE.md` subido ese día
   da 24.012 en los dos sitios, y por eso se sabe que está entero.
   **Lo que hay hoy en esa carpeta, con su tamaño:** `MOLDE.md` de 24.012 (el
   de verdad ya son 35.165), `REDACCION.md` de 48.834 del 22 de agosto (el de
   verdad son 54.643), y una nota nueva del 28 por la noche —«Curva, dónde está
   cada copia»— que dice el commit, los dos artefactos y los tamaños de los
   cinco documentos, para poder comprobar cualquier copia de un vistazo. Esa
   nota está escrita de cero, no copiada, que es la única manera de que sea
   exacta.

   Y el fichero de 8,5 kB que se llamaba «ESTADO.md — Curva, 27 de agosto» se
   ha **renombrado** a «RESUMEN PARCIAL, NO es el ESTADO.md». Estaba mintiendo
   por el nombre, que es el fallo del que avisa el párrafo de arriba, y
   renombrarlo cuesta una llamada.

3. **El chat con Pablo — RETIRADO el 29 de agosto, y conviene saber por qué.**
   La idea era buena sobre el papel: un `.tar.gz` de la fuente mandado por el
   chat queda en su dispositivo y sobrevive a todo. En la práctica no, y lo dijo
   él: **«yo no guardo eso que me pasas»**. Un sitio de copia que depende de que
   alguien archive a mano un fichero de veinticinco megas cada pocas horas no es
   un sitio de copia: es una casilla que se marca y una tranquilidad falsa, que
   es peor que no tenerla.

   Así que ya no se manda por rutina. **Se manda solo si él lo pide**, y
   entonces con estas exclusiones —las de abajo—, sabiendo que el tope de
   subida son 30 MB:

 Un `tar.gz` de la fuente enviado por el chat es la
   copia que sobrevive a todo, porque queda en su dispositivo. **La lista de
   exclusiones ha crecido y hay que respetarla entera**, porque cada una de
   las tres carpetas gordas es reconstruible y sin ellas no sale a cuenta
   mandar nada:

       tar --exclude=node_modules --exclude=.git --exclude='dist*' \
           --exclude=fotos-cache --exclude=movil.html --exclude=shorts.html \
           --exclude='prototipo-microaprendizaje/referencia' \
           --exclude='prototipo-microaprendizaje/cubiertas-originales' \
           --exclude='prototipo-microaprendizaje/originales' \
           --exclude='prototipo-microaprendizaje/docs' --exclude='*.mp4' \
           -czf <ruta>/curva-<fecha>.tar.gz prototipo-microaprendizaje CLAUDE.md .claude

   **`originales/` se excluye**, y es la única exclusión que NO es de una
   carpeta reconstruible: son las fotografías sin procesar que manda Pablo. Con
   ellas el paquete pasa de 25 a 60 MB. Están enteras en GitHub —commiteadas a
   propósito, ver el `.gitignore`—.

   **Y `.claude` entra**, que antes no: ahí vive la hoja de paginado, y es tan
   difícil de reconstruir como el `REDACCION.md`.

   **De `referencia/` entra SOLO `textos-de-pablo/`.** Las ocho tandas de
   capturas de Headway son 29 MB de PNG y no caben; los 85 `.md` suyos pesan
   nada y son lo único de ahí que no se puede rehacer con un guion. `tar` no
   sabe volver a incluir dentro de algo excluido, así que la lista de
   exclusiones se genera antes:

       ls -d prototipo-microaprendizaje/referencia/*/ \
         | grep -v textos-de-pablo | sed 's|/$||' > /tmp/excluir.txt

   **Y `--exclude='dist*'` con el asterisco**, que se perdió una vez al pasar a
   `--exclude-from` y metió los 27,8 MB de `dist-uno/` sin que se notara hasta
   pesar el resultado.

   **Los `.webp` de `portadas/` también se quedan fuera**: son 9,9 MB de
   respaldo para lo que no admita AVIF, y se rehacen con
   `node scripts/portadas.mjs` en cuanto haya un `originales/`. Los AVIF, que
   son el formato principal, sí van.

   El 27 de agosto salían 19 MB. Sin excluir `cubiertas-originales` (44 MB de
   PNG archivados) son 35, y sin excluir además `docs/` son 80. Los 19 que
   quedan son casi todos `src/libros/cubiertas.ts`: 17,6 MB de base64, que
   comprime poco y que **es** el producto, así que ahí no se puede recortar.
4. **El artefacto publicado**, que es una copia de la app compilada.

Y el bundle de git sigue siendo la salida de emergencia si el push falla:
`git bundle create <ruta>/curva-NNN.bundle --all`, se le manda y lo sube él.

## Historial: cuando el push NO funcionaba

Comprobado el 11 de agosto de 2026, y resuelto desde entonces:

- `git push` desde el contenedor → 403. No es el proxy: `curl
  http://127.0.0.1:45837/__agentproxy/status` no registra ningún fallo de
  salida, así que la petición llega y es GitHub quien la rechaza.
- API del servidor MCP (`create_or_update_file`) → depende de que la app de
  Claude esté **instalada** en la cuenta de Pablo y con acceso a este repo.
  Estaba solo autorizada, no instalada, y por eso devolvía «Resource not
  accessible by integration».

Si la API escribe, **cada short se sube en cuanto pasa `tsc` y
`coteja-fotos`**, fichero a fichero:

1. `git rev-parse origin/claude/app-development-xpo6fx:prototipo-microaprendizaje/src/historias/X.ts`
2. `mcp__github__create_or_update_file` con ese SHA y el contenido completo.

Si no escribe, se entrega en bundle y lo sube Pablo:

```
git bundle create /ruta/scratchpad/curva-NNN.bundle --all
```

```
git clone ~/Downloads/curva-NNN.bundle ~/curvaNNN
cd ~/curvaNNN
git checkout claude/app-development-xpo6fx
git remote set-url origin https://github.com/PabloVA02/PabloVA02.git
git fetch origin
git push -u origin claude/app-development-xpo6fx
```

Dos trampas que costaron un rato: al clonar de un bundle `origin` apunta al
propio fichero (hay que hacer `set-url`), y el clon no deja rama activa (hay
que hacer `git checkout` de la rama).

**Se entrega cada dos o tres shorts, nunca al final.** El 11 de agosto se
perdieron unos diez shorts por acumularlo: el contenedor se restauró a un
punto anterior tres veces seguidas y se llevó por delante los commits locales
y hasta los bundles guardados en el scratchpad. Lo único que sobrevivió fue lo
que ya se le había mandado a Pablo por el chat.
