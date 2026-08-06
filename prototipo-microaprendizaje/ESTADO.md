# Dónde estamos

Escrito para que, después de un borrado de contexto, se pueda seguir sin
preguntar nada. Los números salen de `node scripts/revisa-shorts.mjs`.

| | hecho | queda |
|---|---|---|
| shorts escritos | 757 | 243 para llegar a 1000 |
| **shorts con sus cuatro fotos** | **37** | **720** |
| portadas con título de una línea y texto que llega abajo | 60 | 697 |
| títulos que no caben en una línea | | 451 |
| entradas que dejan hueco abajo | | 690 |
| fotos con la licencia sin justificar | | 0 |

Los dos primeros salen de `node scripts/toca.mjs`, que además lista los
siguientes en orden de lectura. Los demás, de `node scripts/revisa-shorts.mjs`.

## Lo que toca ahora

**Poner fotografías**, cuatro por short y en orden de lectura. Pablo abrió el
acceso a Wikimedia justo para esto. El método está en `FOTOS.md`, y lo primero
que hay que leer de ahí es lo que Pablo pide de la imagen: **bonita, que se
entienda de un vistazo qué es, y la de la portada la más bonita de las
cuatro**. Eso va por delante de que ilustre el párrafo exacto.

## Cómo se pone un short con sus cuatro fotos

Es un cuarto de hora por short y no baja de ahí, porque la mitad del trabajo es
mirar. Con las herramientas puestas salen unos cuatro por tanda.

1. `node scripts/toca.mjs` — cuál va ahora y qué le falta.
2. Leer las cuatro pantallas del short. Cada imagen habla de SU página, así que
   hay que saber qué cuenta cada una antes de buscar nada.
3. `node scripts/foto.mjs tema "asunto"` — categorías y candidatas de una vez.
   Las categorías aciertan mucho más que el texto libre.
4. `node scripts/contacto.mjs hoja.png "File:…" …` con seis u ocho candidatas,
   y **mirar la hoja**. Trae cada una entera y debajo recortada como se vería en
   la banda, así que de paso se elige el `foco`. `--grande` para los detalles
   pequeños: si esa ventana está tapiada de verdad, si eso es un ancla o una
   piedra.
5. `node scripts/foto.mjs ficha "File:…"` de las cuatro elegidas: de ahí salen
   la licencia y el autor, que **no se ponen de memoria**, y la descripción.
6. Escribir el bloque `fotos: [ … ]` entre `encargo` y `entrada`.
7. `npx tsc --noEmit` y `node scripts/coteja-fotos.mjs` a cero.
8. `npx vite build`, servir el `dist` en el 4173 y
   `node scripts/mirar.mjs 11 12 13 14` — las cuatro pantallas de cada uno,
   seguidas, con el aire que queda debajo del texto. Es la comprobación final:
   ahí se ve si el encuadre se come lo importante.
9. Commit desde `/home/user/PabloVA02`, con `git commit -F` y nunca `-m`.

## Y para que Pablo lo vea

```
npx vite build --config vite.uno.config.mjs && node scripts/movil.mjs
```

deja `movil.html`: la app entera dentro de un teléfono, en un solo fichero y
con las fotos empotradas, porque el visor donde se publica tiene la salida a
la red cerrada. Se publica **actualizando el artefacto que ya existe**,
`https://claude.ai/code/artifact/b8c9ffd9-e1f0-4e9e-a89f-0c69e0027ae2`, y no
creando uno nuevo. Abre por el muro de shorts. El tope son 16 MB y la app
compilada ya se come diez, así que el margen lo dan el `--ancho` y la
`--calidad` de las fotos.

Se va **en orden de lectura**, que es el de `intercala()` en `src/shorts.ts`:
el primer short de cada fichero, en el orden en que están listados. Así lo que
se arregla es lo primero que Pablo ve al abrir la app.

## Y cuando se pase del sesenta

Los sesenta primeros ya tienen el título en una línea y la entrada llegando
abajo. Del 61 en adelante hay que hacer las dos cosas a la vez que la foto:

1. Título: que quepa en una línea y que **diga de qué va**.
   `node scripts/cabe.mjs "tu título"` — tope 363 puntos. Regla 17 del molde.
2. Entrada: que llegue abajo dejando **entre una y tres líneas**. Regla 16.
   `mirar.mjs` ya da esa cifra; `hueco.mjs` la da de sesenta seguidos y
   `choque.mjs` comprueba que no tape el «Seguir» en un móvil bajo.
3. `node scripts/revisa-shorts.mjs src/historias/…ts` a cero.

## Lo que está cerrado y no se toca

- `DISENO.md` — la pantalla de lectura, calcada de la maqueta aprobada. Ojo a
  la lista de **lo que NO se hace**: es la parte que se ha colado una y otra
  vez.
- `src/historias/MOLDE.md` — cómo se escribe un short.
- `FOTOS.md` — de dónde salen las imágenes y qué se puede afirmar de ellas.

## Lo que sigue pendiente

- **GitHub.** El push sigue dando 403: las credenciales de la sesión son de
  solo lectura. La rama del remoto está parada en `bf853f9`, doscientos y pico
  commits por detrás. Lo que hay se salva mandando un bundle
  (`git bundle create x.bundle --all`) y Pablo lo sube con sus credenciales.
  No intentar el push cada turno: se ha probado en tres sesiones distintas.
- **Wikipedia, cerrada.** El entorno tiene abiertos `commons.wikimedia.org` y
  `upload.wikimedia.org`, pero no `es.wikipedia.org` ni `en.wikipedia.org`.
  Se nota: las imágenes que un artículo ya ha elegido son mejores que las que
  devuelve buscar por el nombre del fichero, y ahora hay que llegar a ellas por
  categorías. Si Pablo añade `*.wikipedia.org` a la red del entorno
  (claude.ai/code → entorno → engranaje → **Acceso a la red** → Personalizado),
  buscar la foto de cada short baja de tres llamadas a una.
- **Los shorts anteriores al molde** arrastran unos 1250 avisos de ritmo y de
  marco. Se van arreglando al pasar por cada fichero.
