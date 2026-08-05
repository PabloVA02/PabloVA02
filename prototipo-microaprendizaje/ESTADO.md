# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs`.

| | hecho | queda |
|---|---|---|
| shorts escritos | 757 | 243 para llegar a 1000 |
| portadas con título de una línea y texto que llega abajo | 60 | 697 |
| títulos que no caben en una línea | | 451 |
| entradas que dejan hueco abajo | | 690 |
| fotos con la licencia sin justificar | | 6 |
| shorts con fotografía | 13 | 744 |

## Lo que toca ahora

**Poner fotografías.** Pablo abrió el acceso a Wikimedia justo para esto. El
método está en `FOTOS.md` y la herramienta en `scripts/foto.mjs`.

Dos cosas antes de empezar por lo nuevo: **las seis fotos que dicen «Sin
verificar»** son las únicas que hoy afirman algo que no se puede respaldar
—`node scripts/revisa-shorts.mjs --flojos | grep foto`—, así que van primero.

## Cómo se trabaja un short

**El título y la entrada del mismo short se hacen a la vez.** El título decide
si ocupa una línea o dos, y eso cambia cuántas palabras caben debajo. Hacerlos
por separado obliga a rehacer la entrada; ya pasó dos veces.

1. Título: que quepa en una línea y que **diga de qué va**.
   `node scripts/cabe.mjs "tu título"` — tope 363 puntos. Reglas en
   `src/historias/MOLDE.md`, regla 17.
2. Entrada: que llegue abajo dejando **entre una y tres líneas**. Regla 16.
3. `npx vite build`, servir el `dist` en el 4173 y medir con
   `node scripts/hueco.mjs`.
4. `node scripts/choque.mjs` para que no tape el «Seguir» en un móvil bajo.
5. `node scripts/revisa-shorts.mjs src/historias/…ts` a cero.
6. `npx tsc --noEmit`.
7. Commit desde `/home/user/PabloVA02`, con `git commit -F` y nunca `-m`.

Se va **en orden de lectura**, que es el de `intercala()` en `src/shorts.ts`:
el primer short de cada fichero, en el orden en que están listados. Así lo que
se arregla es lo primero que Pablo ve al abrir la app.

## Lo que está cerrado y no se toca

- `DISENO.md` — la pantalla de lectura, calcada de la maqueta aprobada. Ojo a
  la lista de **lo que NO se hace**: es la parte que se ha colado una y otra
  vez.
- `src/historias/MOLDE.md` — cómo se escribe un short.
- `FOTOS.md` — de dónde salen las imágenes y qué se puede afirmar de ellas.

## Lo que sigue pendiente

- **GitHub.** El push da 403: las credenciales de la sesión son de solo
  lectura, y la API tampoco deja crear ramas. La rama del remoto está parada
  en `cfb69e9`. Lo que hay se salva mandando un bundle
  (`git bundle create x.bundle --all`) y Pablo lo sube con sus credenciales.
  No intentar el push cada turno.
- **Los shorts anteriores al molde** arrastran unos 1250 avisos de ritmo y de
  marco. Se van arreglando al pasar por cada fichero.
