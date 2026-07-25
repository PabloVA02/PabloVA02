# Cómo se escribe un libro para la app

Este fichero y el comentario de cabecera de `src/libros/tipos.ts` son **la
fuente de la verdad**. Cualquier instrucción suelta de una conversación que
contradiga lo de aquí está caducada.

---

## El prompt

Para retomar el trabajo en una sesión nueva, sin contexto previo, basta con
pegar esto:

> Sigue añadiendo libros al prototipo de `prototipo-microaprendizaje`.
> Antes de escribir nada, lee `LIBROS.md` y el comentario de cabecera de
> `src/libros/tipos.ts`: ahí está el estándar completo y no hay que
> negociarlo. Coge los siguientes títulos pendientes de `src/libros/catalogo.ts`,
> escríbelos con ese estándar, mide cada capítulo con `minutosParte()` antes
> de darlo por bueno, engánchalos en `src/libros/indice.ts`, comprueba con
> `comprobar()` que el catálogo no miente, pasa `npx tsc --noEmit` y haz
> commit. Ve libro a libro y no pares hasta que te lo diga.

El prompt es corto **a propósito**. Un prompt largo se pierde con la ventana
de contexto; un fichero en el repositorio no.

---

## El estándar, en una pantalla

| | |
|---|---|
| Capítulos por libro | **5** (6 solo si el material lo pide) |
| Palabras por capítulo | **~1.000** |
| Minutos por capítulo | **~5**, medidos con `minutosParte()` |
| Libro entero | ~5.000 palabras, ~25 minutos |
| Tarjetas por capítulo | 19-20, de unas 50 palabras |
| Tarjetas `clave` | ~5 por libro, una por capítulo |
| Ilustraciones | 2-3 por capítulo, solo donde ayudan |

Un capítulo de 2 minutos no es un capítulo corto: es un capítulo sin escribir.
Esto es lo que más se incumple, porque escribir 1.000 palabras que aguanten
cuesta y escribir 400 no.

---

## Los capítulos son paradas de un viaje

El título de un capítulo es un sitio al que se llega, no una etiqueta de
archivador. Se tiene que ver el recorrido leyendo solo el índice:

```
Crimen y castigo    El estudiante del ático → El hacha → Porfiri → Sonia → Siberia
La Odisea           Un hijo sin padre → El astuto → La isla → El mendigo → El arco → La cama
```

**Prohibido** terminar en «Cómo leerlo», «Qué nos enseña», «Lo que él mismo
corrigió» o cualquier otro cajón de sastre. El último capítulo es el destino:
adonde llega el personaje, o adonde te deja la idea.

Cada capítulo tiene su propio arco —abre con una escena concreta, desarrolla,
cierra— porque en la app se lee solo, un día cada uno.

---

## Las reglas de escritura

1. **Empieza por la escena, no por la tesis.** Marco Aurelio escribiendo de
   noche en una tienda de campaña engancha; «el estoicismo sostiene que…» no.
   La tesis va después, cuando ya hay dónde colgarla.

2. **Una idea por tarjeta.** Si en una tarjeta hay dos, ninguna se recuerda.

3. **Detalle concreto antes que adjetivo.** Una cifra, un nombre, una fecha,
   un objeto. «Dostoievski escribió con el plazo del editor encima y la casa
   empeñada» vale más que «escribió en circunstancias difíciles».

4. **Se dice dónde falla.** Todo libro tiene una parte floja, un dato que
   envejeció mal o una fama que no se corresponde con lo que hay dentro.
   Decirlo es lo que separa esto de una contraportada. Nada de «el autor nos
   invita a reflexionar».

5. **Español natural**, del que se lee en voz alta sin tropezar. Frases
   cortas. Sin anglicismos de manual de autoayuda.

6. **Nunca cerrar una tarjeta en punto final del todo.** Lo que hace pasar a
   la siguiente es que la anterior deje algo abierto. Es la única técnica que
   comparten todos los formatos que enganchan.

---

## Qué libros entran

Famosos y muy vendidos, de los que alguien reconoce el título aunque no lo
haya leído. Que se entiendan sin formación previa. Que tengan una historia
detrás —del libro o del autor— que se pueda contar.

Las ocho categorías son **exactamente** las del onboarding, ni una más:
Psicología, Economía, Filosofía, Ciencia, Salud, Literatura, Arte, Historia.

`catalogo.ts` manda: es el registro de qué existe y en qué estado.
`indice.ts` comprueba que no mienta.

---

## La cadena de producción

```
1. CATÁLOGO    coger los siguientes pendientes de catalogo.ts
2. RECORRIDO   escribir los 5 títulos de capítulo ANTES que el texto.
               Si leídos seguidos no se ve un viaje, no se empieza
3. ESCRITURA   capítulo a capítulo, ~19 tarjetas de ~50 palabras
4. MEDIDA      minutosParte() en cada capítulo. Por debajo de 4, se amplía
5. ENGANCHE    exportar en su fichero de categoría, importar en indice.ts,
               marcar "escrito" en catalogo.ts
6. COMPROBAR   comprobar() → las dos listas vacías
7. COMPILAR    npx tsc --noEmit
8. COMMIT
```

Errores que ya han pasado y no hace falta repetir:

- `arte:` solo acepta los valores de la unión `Arte` en `src/lesson.ts`
  (`estanteria | lectora | escritor | museo | aprendizaje | explorar | mapa |
  memoria | noche`). Cualquier otro compila mal o revienta en pantalla.
- Los tonos `--*-deep` de la paleta desaparecen sobre el fondo oscuro. En
  `puente.ts` se usan las variantes claras.
- Nada de tarjetas de relleno tipo `forma: "text" as never, texto: ""`.
  Si un capítulo está a medias, se deja sin marcar como escrito.

---

## Estado (última medida)

- **76 resúmenes escritos** de **121 fichas** en el catálogo.
- **11 a escala larga** (~25 min): Crimen y castigo, El extranjero, El
  retrato de Dorian Gray, El arte de la guerra, El señor de las moscas,
  Homo Deus, Drácula, El viejo y el mar, La Odisea, La sombra del viento,
  El nombre de la rosa.
- **65 pendientes de ampliar** a la escala nueva: se escribieron cuando el
  estándar era de 1 minuto por capítulo. Funcionan, pero se quedan cortos.

| Categoría | Escritos | Total |
|---|---|---|
| Literatura | 22 | 29 |
| Filosofía | 10 | 14 |
| Psicología | 9 | 12 |
| Economía | 9 | 14 |
| Historia | 7 | 14 |
| Ciencia | 7 | 14 |
| Salud | 7 | 12 |
| Arte | 5 | 12 |

Actualizar esta tabla con:

```bash
npx tsx scripts/estado.mjs
```
