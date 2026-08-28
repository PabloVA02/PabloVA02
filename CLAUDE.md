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

- **Proporción vertical 9:16** y **1440 px de ancho** —o sea 1440 × 2560—, que
  es la resolución nativa del móvil más exigente del mercado.
- **AVIF calidad 65** como formato principal.
- **WebP calidad 85** de respaldo, para lo que no admita AVIF.
- **Sin límite estricto de peso.** Lo normal serán 300-500 kB y está bien.
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

- **`originales/`** → los archivos sin procesar. Está en el `.gitignore`:
  **nunca se commitean y nunca se borran.**
- **`assets/portadas.csv`** → una fila por imagen, con nombre de archivo,
  fuente, URL original, licencia y fecha de descarga. **Se commitea y se
  actualiza siempre.** Es la prueba de que cada imagen se obtuvo legalmente, y
  sin su fila una portada no entra.
- **El guion de procesado y subida**, `scripts/portadas.mjs`.

### Al terminar cada tanda, se le dice a Pablo

Cuántas imágenes se procesaron, **su peso medio**, y **si alguna quedó por
debajo de 1440 px de ancho** porque el original no daba para más. Eso último lo
imprime el guion solo, y es lo que hay que mirar antes de dar una tanda por
buena: una portada estirada desde un original pequeño se ve mal en un móvil
bueno, y es mejor cambiar de imagen que subirla.

## Lo cuarto: al terminar CUALQUIER cambio

1. **Rehacer el simulador y publicarlo** en el artefacto de siempre —el enlace
   está en `ESTADO.md`—, porque `movil.html` es lo único que Pablo ve.
2. **Empujar a GitHub** (`claude/app-development-xpo6fx`) cada pocos commits, y
   guardar copia en los otros sitios. La lista está en `ESTADO.md`.
