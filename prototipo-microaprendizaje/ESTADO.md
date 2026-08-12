# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs` y de
`node scripts/coteja-fotos.mjs`.

| | hecho | queda |
|---|---|---|
| shorts escritos | 757 | 243 para llegar a 1000 |
| shorts con sus cuatro fotos | 515 | 242 |
| imágenes puestas | 2071, verificadas hasta 1854 | |
| títulos que no caben en una línea | | 0 |
| entradas que dejan hueco abajo | | 265 |

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
