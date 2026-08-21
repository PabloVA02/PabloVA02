# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs` y de
`node scripts/coteja-fotos.mjs`.

| | hecho | queda |
|---|---|---|
| shorts escritos | 757 | 243 para llegar a 1000 |
| shorts con sus cuatro fotos | 532 | 225 |
| imágenes puestas | 2139, verificadas hasta 1854 | |
| portadas de los libros | 200 de 200 | 0 |
| libros con resumen escrito a mano | 223 de 223 | 0 |
| resúmenes antiguos generados | 0 | 0 |
| títulos que no caben en una línea | | 0 |
| entradas que dejan hueco abajo | 228 alargadas | 0 |

`revisa-shorts.mjs --flojos` marca todavía un título largo, «El sitio más
lejos de tierra», porque cuenta letras y pasa de 27. La regla de verdad es
`scripts/cabe.mjs`, que lo mide en 361 puntos sobre un tope de 363: cabe.

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
     --ancho 240 --calidad 0.55 --tope 1.6
```

Dos maneras de comprobar que no ha pasado otra vez, antes de publicar:

- `ls -la dist-uno/assets/` y mirar la fecha. Si no es de hoy, no se ha
  compilado.
- `grep -c "<algo escrito hoy>" movil.html`. Si sale cero, el paquete es viejo.

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

## OJO: el contenedor puede arrancar con el repo atrasado

Ha pasado tres veces en un mismo día: la copia de trabajo aparece en un commit
de hace semanas, con el trabajo reciente solo en el remoto. **Antes de tocar
nada**, `git log --oneline -1` y comparar con
`git ls-remote origin refs/heads/<rama>`. Si no coinciden:

    git fetch origin <rama> && git merge --ff-only origin/<rama>

Los ficheros sin seguimiento sobreviven, así que lo escrito en la sesión no se
pierde; lo que se pierde es el tiempo de descubrirlo a la mitad.

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

**Van 50 de 121 archivados**, que son las tandas del 21 de agosto. Las otras 71
—las anteriores a esa fecha— solo existen a 480 de ancho, y sus originales se
perdieron con los contenedores de aquellos días. Si Pablo los conserva, merece
la pena que los vuelva a mandar; si no, la app funciona igual, pero esas
cubiertas no se podrán volver a generar a otro tamaño nunca.

Los cuatro sitios, y qué va en cada uno:

1. **GitHub**, rama `claude/app-development-xpo6fx`. Es la copia buena y
   completa. `git push -u origin claude/app-development-xpo6fx` funciona desde
   el contenedor (comprobado el 20 de agosto; antes daba 403). **Se empuja cada
   pocos commits, no al final de la sesión.**
2. **Google Drive**, carpeta «Curva — copias de seguridad». Ahí van los
   documentos que no se pueden reconstruir —`REDACCION.md` y `ESTADO.md`— con
   el conector de Drive. Se suben con `mcp__Google_Drive__create_file` pasando
   el texto entero; para binarios grandes no sirve.
3. **El chat con Pablo.** Un `tar.gz` de la fuente enviado por el chat es la
   copia que sobrevive a todo, porque queda en su dispositivo. Excluyendo
   `node_modules`, `.git`, `dist*`, `fotos-cache`, `movil.html`, el vídeo,
   `referencia/` y `cubiertas-originales/` salen unos 8,6 MB; con `referencia`
   dentro se va a 41 MB y ya no es cómodo de mandar.
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
