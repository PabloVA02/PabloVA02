# Curva — lo que hay que saber antes de tocar nada

Esto se lee solo al empezar cualquier sesión. Está escrito para que, después de
un borrado de contexto, no haya que preguntarle nada a Pablo.

El proyecto vive en **`prototipo-microaprendizaje/`**. Es una app de
micro-aprendizaje con dos mitades: **Libros** (201 resúmenes) y **Shorts** (761
historias ilustradas).

## LO PRIMERO, Y NO ES NEGOCIABLE: cómo se redacta

**Antes de escribir o tocar un solo libro, se lee
`prototipo-microaprendizaje/REDACCION.md` entero.**

Ese documento manda sobre cualquier otra instrucción de estilo, venga de donde
venga: de un comentario de código, de un recuerdo, de una conversación vieja o
de lo que parezca razonable.

**Y las pruebas están en `prototipo-microaprendizaje/referencia/`**: las ocho
tandas de capturas de Headway que mandó Pablo, guardadas para que no se pierdan
con la ventana de contexto. Su `README.md` dice qué enseña cada una. Si hay
tiempo para mirar una sola, la de `odisea/`, que es la mejor escrita.

Pablo lo dijo el 21 de agosto:

> «Debes saber, sin que te lo diga yo, que tienes que obedecer este tipo de
> redacción, gramática, etc.»
> «Cuando se te acabe la ventana de contexto debes ver todos estos ejemplos
> para seguir haciéndolos así, que nunca se te olvide.»

Sale de sus capturas de Headway y de sus correcciones sobre nuestro texto, y se
actualiza cada vez que llega una captura nueva: **lo que enseñe una captura se
escribe ahí, no se guarda en la conversación.** Lo que está en la conversación
se pierde; lo que está en el repositorio, no.

Lo mínimo, para que nada se escriba mal ni por descuido:

- **El titular afirma** algo discutible. En narrativa vale el título corto de
  imagen, y entonces la afirmación va en la primera frase. Apartados 3 y 3 bis.
- **Una idea por página**, 260-320 palabras, y su caja del rayo.
- **Ocho, doce o dieciséis páginas** según cuántos argumentos independientes
  tenga el libro. Nunca se engordan las páginas para alargar. Apartado 2 ter.
- **La conclusión dice DÓNDE FALLA el libro**, y qué pasó después de publicarse.
  Es lo que nos separa de una contraportada, y Headway no lo hace nunca.
- **Nada de «Prueba esto»** ni listas de deberes. Lo quitó Pablo expresamente.
- **El texto viejo autogenerado se BORRA** al reescribir un libro. Apartado
  2 quater.

## Lo primero bis: cómo llegan los temas escritos

Desde el 28 de agosto por la noche, los `.md` que manda Pablo traen **cabecera**
entre dos `---` —`titulo`, `categoria`, `serie`, `orden`, `portada`,
`credito_portada`, `frase_portada`— y marcas propias en el cuerpo: `> ⚡` para
el insight, `> ❞` para una cita, `> 💡` para el «¿Sabías que…?» y `> 🖼️` para
un encargo de imagen que **no se pinta nunca**.

**El formato lo escribió él y está en
`prototipo-microaprendizaje/referencia/textos-de-pablo/FORMATO.md`.** Se lee
antes de meter un tema nuevo. Lo lee `scripts/temas.mjs`, y de ahí sale todo:
el identificador del tema es el de `portada` sin extensión, porque si él dice
cómo se llama la imagen, así se llama el tema.

Una advertencia sobre ese fichero: su última sección, «Reglas de maquetado»,
pide una **franja inferior de 56 pt** con indicador de página y chevron. Se hizo
y Pablo la quitó al verla —«déjalo como estaba antes, que estaba mucho mejor»—.
Manda lo que dijo después. Está contado en la hoja de paginado.

## LO SEGUNDO, Y TAMPOCO SE NEGOCIA: cómo se pagina una pantalla

**Antes de tocar la maqueta de un short, el reparto del texto en pantallas o
cualquier medida de letra, se lee `.claude/skills/paginado-shorts/SKILL.md`.**

Son siete reglas que puso Pablo el 28 de agosto después de cinco vueltas sobre
lo mismo: el alto exacto de la pantalla, nada de scroll dentro de un tema, el
reparto calculado en tiempo de ejecución y no por un guion, los cortes solo
entre párrafos, y qué hacer cuando un párrafo no cabe —avisar, no cortarlo—.

## Lo tercero: dónde estamos y cómo se trabaja

`prototipo-microaprendizaje/ESTADO.md` — el estado real, los scripts, el orden
en que se escriben los libros y las trampas del contenedor. También se lee.

Los otros documentos cerrados: `DISENO.md` (la pantalla de lectura),
`FOTOS.md` (de dónde salen las imágenes), `src/historias/MOLDE.md` (los shorts).

## Lo tercero bis: Portadas — calidad y almacenamiento

Lo puso Pablo el 28 de agosto y **se aplica siempre a partir de ahora**, a toda
portada nueva. El guion que lo hace todo es
`prototipo-microaprendizaje/scripts/portadas.mjs`.

### Calidad: manda la imagen, no el peso

- **Proporción vertical 9:16**, y de ancho **lo que dé el original hasta 2160**
  —o sea, como mucho 2160 × 3840, el vertical de 4K—.

  Son dos reglas y las dos las dijo él el 29 de agosto: «que se vean lo mejor
  que se puede, la máxima resolución que te pase, pues esa, o la máxima que
  permitan los mejores móviles del mundo y los que vendrán».

  **Nunca se estira.** Si una foto solo da 1800 px útiles después de recortarla
  a 9:16, la portada sale a 1800. Agrandar no añade detalle: añade peso y
  emborrona los bordes.

  **Y el suelo de «espléndida» son 1644 px**, que es el ancho del Xperia 1, el
  móvil más fino que se vende. Por debajo de eso la imagen se estira en ese
  teléfono y se nota. `scripts/portadas.mjs` las canta al terminar, con su
  nombre y cuánto les falta, y entonces **hay que decírselo a Pablo**: él lo
  dejó dicho —«si hay alguna que no es de esa calidad me lo dices y la
  eliminamos»—, así que la decisión es suya, no del guion. Lo que no vale es
  subirla en silencio.

  El número anterior era 1440 y venía de la primera tanda.
- **AVIF calidad 80** como formato principal.
- **WebP calidad 90** de respaldo, para lo que no admita AVIF.
- **Sin límite estricto de peso.** Lo normal serán 300-500 kB y está bien.

  Los dos primeros números eran 65 y 85, de la primera tanda. Los subió él el
  29 de agosto: «ya siempre sabes que las portadas deben ir a la máxima calidad
  que permite un móvil, que se vea lo mejor posible a la mejor calidad
  posible». Con «sin límite estricto de peso» escrito justo debajo, 65 se
  quedaba corto sin ganar nada.

- **Y una imagen pequeña no se sube «tal cual» aunque la mande él.** Si no
  llega al suelo de 1644, estirarla se ve, y estirarla es exactamente lo
  contrario de lo que pide. El 29 de agosto llegaron cinco AVIF de 900 px de
  ancho justos —la marca de una imagen guardada de una vista previa y no
  descargada del original—; una de ellas, la de los nudillos, daba 338 px
  útiles y no entró.
- **El recorte va POR EL CENTRO**, y cuando no acierta se dice a mano en
  `assets/recortes.json`. Estuvo en modo «busca la zona con más detalle» y
  Pablo lo cazó el 30 de agosto con tres ejemplos —«la del flato se ve muy de
  cerca, la cerveza sale cortada, la de la calavera no está bien centrada;
  ponlas más o menos tal como te las paso»—. Ese modo mueve el encuadre a donde
  hay textura, no a donde está el motivo. Sus fotos vienen con el motivo en
  medio: recortar por el centro respeta su encuadre en vez de inventar otro.

  **Y esto no lo canta ningún número.** Las tres salían a 2160 × 3840 y por
  encima del suelo de calidad, o sea perfectas en el informe, y estaban mal.
  Para verlo hay que mirar: `scripts/compara-portada.mjs` pone el original al
  lado de la portada, y `scripts/encuadre.mjs` dibuja sobre la foto la ventana
  que se va a quedar y una rejilla para leer el `x`/`y` del ajuste.

- **Una foto apaisada o cuadrada pierde muchísimo, y hay que decirlo.** Para
  llenar una pantalla de móvil hace falta 9:16; una foto 3:4 pierde la cuarta
  parte de cada lado y una 3:2 se queda en un tercio del ancho. Por eso algunas
  «se ven de cerca» aunque el recorte esté bien centrado: no es un fallo, es la
  forma de la fotografía. Cuando pase con una que importe, lo que hay que
  pedirle es esa misma escena en vertical, no tocar el recorte.

- **El nombre, idéntico al del tema**: `como-funciona-la-gravedad.md` →
  `como-funciona-la-gravedad.avif`.

### Almacenamiento

- Las imágenes **no se empaquetan dentro de la app**: van en **Cloudflare R2** y
  se bajan cuando hacen falta.
- En los datos de cada tema se guarda **la URL** de la portada, no una ruta.
- La app **cachea** cada imagen en el dispositivo tras la primera descarga.
- **Solo los diez primeros temas llevan la portada empaquetada**, para que la
  pantalla de entrada se vea al instante aunque la conexión vaya lenta.

**Y una excepción que no es negociable: el simulador que Pablo abre.** Los dos
artefactos son un solo fichero HTML con la política de seguridad cerrada, y ahí
una imagen servida desde R2 **no carga**: no es que tarde, es que el navegador
la bloquea sin decir nada. Así que `scripts/movil.mjs` sigue empotrando las
portadas en el paquete del simulador, y R2 vale para la app de verdad. Las dos
cosas conviven: el dato de cada tema lleva la URL, y `urlFoto` prefiere la
empotrada cuando existe.

### Qué va al repositorio y qué no

- **`originales/`** → los archivos sin procesar. **Nunca se borran**, y —al
  revés de lo que decía la primera versión de esta regla— **sí se commitean**.
  El motivo está entero en el `.gitignore`: esto no corre en el ordenador de
  Pablo, corre en un contenedor que se recicla al terminar la sesión, así que
  «no commitear» aquí no significa «se quedan en disco», significa «se borran
  esta noche». El día que esté montado R2 se mueven allí y vuelve la regla
  original. Una portada retirada no se tira: se va a `originales/retirados/`,
  donde el guion no la vuelve a procesar.
- **`assets/portadas.csv`** → una fila por imagen, con nombre de archivo,
  fuente, URL original, licencia y fecha de descarga. **Se commitea y se
  actualiza siempre.** Es la prueba de que cada imagen se obtuvo legalmente, y
  sin su fila una portada no entra.
- **El guion de procesado y subida**, `scripts/portadas.mjs`.

### Al terminar cada tanda, se le dice a Pablo

Cuántas imágenes se procesaron, **su peso medio**, **cuántas llegan al techo de
2160** y, sobre todo, **cuáles se quedan por debajo del suelo de 1644** porque
el original no daba para más.

Esa última lista la imprime el guion solo y **hay que pasársela a Pablo con
nombres**. Él lo dejó dicho: «si hay alguna que no es de esa calidad me lo dices
y la eliminamos». O sea que la decisión —cambiar la foto o quitar el short— es
suya. Lo que no vale es meterla en silencio y que se entere viéndola borrosa.

## Lo cuarto: al terminar CUALQUIER cambio

1. **Rehacer el simulador y publicarlo** en el artefacto de siempre —el enlace
   está en `ESTADO.md`—, porque `movil.html` es lo único que Pablo ve.
2. **Empujar a GitHub** (`claude/app-development-xpo6fx`) cada pocos commits, y
   guardar copia en los otros sitios. La lista está en `ESTADO.md`.
