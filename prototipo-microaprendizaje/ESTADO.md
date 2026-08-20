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

**EL ARTEFACTO ES ESTE Y NO OTRO:**

    Curva · la app entera, en un móvil
    https://claude.ai/code/artifact/b8c9ffd9-e1f0-4e9e-a89f-0c69e0027ae2

Lo tiene abierto en el móvil. Se actualiza EN ESE MISMO ENLACE —publicando
`movil.html` con esa `url`—, no se crea uno nuevo: si sale otro enlace, él
sigue mirando el viejo y parece que no se ha hecho nada. Pasó: se le mandó el
fichero suelto tres veces mientras él miraba el artefacto de hacía una semana.
Y antes de publicar hay que leer lo que está publicado, que es como se
comprueba desde qué versión se parte.

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
    node scripts/revisa-fichas.mjs    a qué libro le falta una pieza de ficha
    node scripts/mete-libro.mjs       mete un borrador JSON en paginas.ts
    node scripts/ficha-libro.mjs      escribe las tres piezas de la ficha
    node scripts/retira-viejo.mjs     borra el texto viejo y su cargador
    node scripts/faltan-cubiertas.mjs qué cubiertas faltan, por prioridad
    node scripts/mete-cubiertas.mjs   mete una tanda de cubiertas de Pablo
    node scripts/hoja-cubiertas.mjs   la estantería entera en una página

### EN QUÉ ORDEN SE ESCRIBEN

No por gusto ni por orden alfabético. Por lo que más se ve, que es:

1. **Los veinte de «Tendencias».** Salen grandes en la primera pantalla de
   Explorar y con una PROMESA escrita debajo. Un texto malo bajo una promesa
   es lo peor que puede haber. *Hechos los veinte.*
2. **Los que tienen cubierta dibujada de Pablo.** Dibujo bueno y texto
   automático es la segunda peor combinación: la cubierta invita a entrar y el
   texto devuelve al lector.
3. **Los conocidos** del resto del catálogo.
4. **El resto**, por categorías.

`faltan-cubiertas.mjs` usa exactamente ese orden para las cubiertas, así que
las dos listas van a la par.

## Lo que está cerrado y no se toca

- `DISENO.md` — la pantalla de lectura. Ojo a la lista de **lo que NO se
  hace**: es la parte que se ha colado una y otra vez.
- `src/historias/MOLDE.md` — cómo se escribe un short.
- `FOTOS.md` — de dónde salen las imágenes y qué se puede afirmar de ellas.

## GitHub — CÓMO SE GUARDA EL TRABAJO

Comprobado el 11 de agosto de 2026:

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
