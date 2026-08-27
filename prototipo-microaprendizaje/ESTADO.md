# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs` y de
`node scripts/coteja-fotos.mjs`.

| | hecho | queda |
|---|---|---|
| shorts escritos | **0** | el muro espera el texto de Pablo, ver abajo |
| libros en el catálogo | 418 | |
| libros con resumen escrito a mano | **400** | 18 para el catálogo entero |
| cubiertas dibujadas por Pablo | **309** | 109 para el catálogo entero |
| emoticonos de las metas | 11 de 16 | Pablo manda los cinco que faltan |
| resúmenes antiguos generados | 0 | 0 |

## EL MURO ESPERA EL TEXTO DE PABLO — 27 de agosto de 2026, por la noche

**No hay ninguna historia escrita, y es a propósito.** `curiosidades.ts` está
vacío esperando. Pablo cambió la manera de trabajar al final del día:

> «Vamos a hacer una cosa mejor: primero te preparo yo el texto y te lo paso;
> por lo tanto quita las imágenes y, en base al texto, ponemos las imágenes.»

Y es mejor, no solo distinto. Escribiendo yo primero y buscando fotos después,
cuando una foto buena no aparecía la tentación era torcer el texto hacia la
foto que sí existía. Con el texto cerrado antes de abrir Commons, manda el
texto.

**Qué hacer cuando llegue su texto**: está escrito en la cabecera de
`src/historias/curiosidades.ts`, paso por paso. En resumen: cortarlo en
pantallas por donde deje algo colgando, pasarlo por `MOLDE.md` sin
corregirle nada por la espalda, y buscar una fotografía por pantalla con el
texto ya delante.

**Lo que había, por si hay que rescatarlo.** Durante el día se escribieron y
reescribieron cuatro shorts —el sol, la lluvia, los aviones y el mar— con
quince fotografías de Commons ya fichadas, y se afinó la maqueta hasta
dejarla como está. Todo eso vive en el commit `931c152`:

    git show 931c152:prototipo-microaprendizaje/src/historias/curiosidades.ts

Las fotografías siguen siendo buenas aunque el texto cambie, así que si Pablo
manda un texto del sol o de la lluvia, lo primero es mirar allí.

**La maqueta NO se ha tocado y está lista**: banda de imagen elástica, sin
rótulos, una sola medida de letra, el pie de foto sobre la imagen. Todo lo
que se decidió hoy sigue en pie; lo único que falta es texto.

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

## Herramientas

| | |
|---|---|
| `scripts/foto.mjs` | buscar (solo con sello), todo, categoria, ficha, ver |
| `scripts/coteja-fotos.mjs` | que el código diga la verdad de cada imagen |
| `scripts/cabe.mjs` | si un título entra en una línea |
| `scripts/hueco.mjs` | cuánto aire queda bajo el texto de las portadas |
| `scripts/choque.mjs` | que el texto no tape el «Seguir» en un móvil bajo |
| `scripts/fotos-al-vuelo.mjs` | sirve las fotos al navegador de pruebas |
| `scripts/revisa-shorts.mjs` | el molde, con `--flojos` para lo pendiente |

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

Dos matices que sí siguen en pie. En su app en español una pone «Grow in
faith», en inglés, que es un descuido suyo: aquí va traducida, «Crecer en tu
fe». Y las cuatro últimas no están en su lista y son nuestras, porque nuestro
catálogo tiene estantes que el suyo no tiene: «Rendir en el deporte»,
«Entender el mundo de hoy», «Leer lo que nunca leíste» y «Saber mirar un
cuadro».

Los dieciséis dibujos de `Temas.tsx` **siguen siendo provisionales**: planos, a
dos tintas —rojo #fa5b4a y oro #f8bb31—, en la familia de los que ya mandó
Pablo. Cambiar uno es cambiar su función y nada más.

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

## LA PANTALLA DE INICIO Y EL PERFIL, DESPUÉS DEL 26 DE AGOSTO

Ese día y el siguiente Pablo rehízo media app a base de capturas de Headway y
de Blinkist. Lo que quedó, y por qué, para que no se deshaga por descuido:

**Inicio.** Libro de hoy → filtros → Recomendados → **Colecciones** →
**Gestiona las recomendaciones**. Se fueron «Retomar» y «Personalizado para
ti».

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

Los cuatro sitios, y qué va en cada uno:

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

   **Y hay que comprobar el tamaño después de subir.** El `ESTADO.md` que hay
   allí del 27 por la mañana pesa 8,5 kB y el de verdad pesa 50: se subió un
   resumen, no el documento, y por fuera no se distingue —tiene el mismo
   nombre y la misma fecha—. Una copia parcial que parece completa es peor que
   no tener copia. La manera de saberlo es un `wc -c` del fichero local y
   mirar el `fileSize` que devuelve la llamada: el `MOLDE.md` subido ese día
   da 24.012 en los dos sitios, y por eso se sabe que está entero.
3. **El chat con Pablo.** Un `tar.gz` de la fuente enviado por el chat es la
   copia que sobrevive a todo, porque queda en su dispositivo. **La lista de
   exclusiones ha crecido y hay que respetarla entera**, porque cada una de
   las tres carpetas gordas es reconstruible y sin ellas no sale a cuenta
   mandar nada:

       tar --exclude=node_modules --exclude=.git --exclude='dist*' \
           --exclude=fotos-cache --exclude=movil.html --exclude=shorts.html \
           --exclude='prototipo-microaprendizaje/referencia' \
           --exclude='prototipo-microaprendizaje/cubiertas-originales' \
           --exclude='prototipo-microaprendizaje/docs' --exclude='*.mp4' \
           -czf <ruta>/curva-<fecha>.tar.gz prototipo-microaprendizaje CLAUDE.md

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
