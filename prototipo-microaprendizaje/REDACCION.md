# Cómo se redacta un resumen

**Este documento manda sobre cualquier otra instrucción de estilo, venga de
donde venga.** Si un comentario de código, una conversación vieja o un
recuerdo suelto lo contradice, gana esto.

Sale de las capturas de Headway que pasa Pablo —veinticuatro el 19 de agosto y
treinta y tres el 20, y las que vayan llegando— y de sus correcciones sobre
nuestro texto:

> «Está muy mal redactado, los libros no me gustan.»
> «Lo que aprenderás y tal también está fatal, y de qué se trata igual.»

Lo que sigue es la anatomía de un resumen suyo, descrita para poder repetirla.
Los ejemplos son NUESTROS, de `libros/paginas.ts`: aquí no se copia el texto de
nadie, se copia la forma.

---

## 1. Qué es un resumen

Siete u ocho pantallas de prosa seguida, más una conclusión. No es el libro
encogido ni una lista de ideas: es **el argumento del libro contado entero**,
en el orden en que se sostiene.

Se lee en unos veinte minutos. Ocho páginas de unas 260 palabras.

## 2. La anatomía de un resumen

Ocho páginas, y la primera y la última tienen trabajo propio:

| página | qué hace |
|---|---|
| **1. La entrada** | de dónde parte el libro, con un dato que sorprenda, y **qué se va a recorrer en el resumen**. Se cierra anunciando el camino |
| **2 a 7** | un argumento por página |
| **8. Conclusión** | qué dice el libro en tres líneas, qué aporta y **dónde falla** |

**No se pone «Prueba esto».** La referencia termina con una lista de deberes
—«decídete a…», «reserva cada día…»— y Pablo la quitó expresamente el 20 de
agosto: *«no añadas lo de prueba esto, solo añade una conclusión»*. El bloque
`prueba` sigue existiendo en el código por si algún día vuelve, pero no se usa.

## 2 bis. La anatomía de una página

Todas tienen la misma forma, y esa constancia es media parte del formato:

```
TITULAR            una afirmación entera, no una etiqueta
PÁRRAFOS           de dos a cuatro, que la explican y la demuestran
CAJA DEL RAYO      la idea de la página en una frase, para recordarla
LISTA              solo si hay una enumeración de verdad
```

Recursos que usa la referencia y que conviene usar, con medida:

- **La analogía doméstica.** Explicar el neocórtex por habitaciones de una
  casa, la ficción compartida por un billete. Una por página como mucho.
- **La lista con entradilla.** Un párrafo que termina en dos puntos y debajo
  los puntos, cada uno con su palabra en negrita.
- **La pregunta directa.** «¿Y sabes por qué?» abre una explicación mejor que
  un conector. Una o dos por resumen; más, y suena a locutor.
- **El dato curioso.** Una frase de «¿sabías que…?» con el término en negrita.
  Vale para descansar entre dos argumentos.

Lo que NO se copia de la referencia: los signos de admiración, los «¡vamos por
ello!» y el «en este resumen exploraremos» repetido. Se anuncia el recorrido
una vez, en la entrada, y se sigue.

## 2 ter. Cuánto dura un resumen

**Se escribe contra las palabras, no contra el reloj: 2.100 a 2.500 por libro,
en ocho páginas de 260 a 320.**

**La cifra que enseña la ficha es la de OÍRLO**, no la de leerlo. Decidido con
Pablo el 20 de agosto, y por tres razones: es el mayor de los dos números, así
que quien lea termina antes de lo prometido; en cuanto haya audio de verdad es
un dato medido y no una estimación de velocidad lectora, que varía de una
persona a otra un cincuenta por ciento; y deja la media donde la queremos.

| palabras | ficha (oír, 140 p/m) | leer (200 p/m) |
|---|---|---|
| 2.100 | 15 min ← media | 11 |
| 2.400 | 17 min | 12 |
| 2.700 | 19 min ← techo | 14 |

Comprobado en la competencia: Headway anuncia el tiempo de LEER —«quince
minutos para leer o escuchar»— y su propio audio dura de quince a veinte. O
sea que su número se les queda corto justo en el modo que más crece. Nosotros
enseñamos el otro.

  · **Nada por debajo de 2.000 palabras.** Ahí no caben ocho argumentos con sus
    pruebas: sale un libro de titulares, que es lo que Pablo devolvió.
  · **Nada por encima de 2.700.** Los dos competidores han convergido en los
    quince minutos y el tramo largo de Blinkist —hasta cuarenta— es de otra
    época y es el que la gente no termina. La investigación de microaprendizaje
    pone el punto bueno entre ocho y quince, con la atención cayendo a partir
    de los diez.

Y la razón de oficio de la medida por página: **260-320 palabras es lo que
ocupa una idea explicada y demostrada**. Por debajo de 220 la página es un
titular y relleno; por encima de 350 entran dos ideas y se rompe la regla de
una por página.

Ninguna cifra se escribe a mano: `minutosDePaginas()` cuenta las palabras del
libro y divide por 140. No puede mentir.

### Cómo van los libros escritos

No se cuentan a mano. Dos scripts lo dicen en un segundo:

    node scripts/medir-paginas.mjs    palabras y minutos de cada resumen
    node scripts/revisa-fichas.mjs    a qué libro le falta una pieza de ficha

El 20 de agosto quedaron veintiuno escritos a mano, todos dentro de la
horquilla, y ningún libro de desarrollo personal conserva el texto viejo.

### Y cómo se escribe uno nuevo

El borrador va en JSON, que es donde solo hay que pensar en el contenido, y
tres scripts hacen el resto:

    node scripts/mete-libro.mjs   <borrador.json>   las ocho páginas
    node scripts/ficha-libro.mjs  <ficha.json>      las tres piezas de la ficha
    node scripts/retira-viejo.mjs <id>              borra el texto autogenerado

`ficha-libro.mjs` avisa si un «Aprenderás» pasa de once palabras o empieza en
mayúscula, y `retira-viejo.mjs` se niega a borrar nada si el libro no tiene
páginas nuevas. Después, `generar-meta.mjs` y `estado.mjs`.

## 2 quater. El texto viejo se BORRA

Un libro reescrito a mano deja de tener dos versiones. La vieja —las tarjetas
autogeneradas de `psicologia.ts`, `economia.ts` y compañía— **se borra**, y con
ella su entrada en `indice.ts`. Pablo lo pidió así el 20 de agosto: *«el texto
antiguo que estaba, ya sabes que debes borrarlo y redactarlo como comentamos»*.

No es limpieza: es que mientras conviva con el nuevo, la estantería sigue
pintando la ficha vieja. `META_POR_ID` gana sobre `PAGINAS` en `puente.ts`, así
que el resumen se lee bien pero el subtítulo, el «de qué trata» y los minutos
del listado siguen siendo los de antes. Al borrar la versión vieja el libro cae
en el pase `CON_PAGINAS`, que es el que lee `subtitulos.ts`, `aprenderas.ts` y
cuenta los minutos de verdad.

El orden, que importa:

1. Se escriben las ocho páginas en `paginas.ts` y se registran en `PAGINAS`.
2. Se escriben el subtítulo, el «de qué trata» y los cinco «Aprenderás».
3. Se borra el resumen viejo y su línea de `CARGADORES` en `indice.ts`.
4. `npx tsx scripts/generar-meta.mjs` y `npx tsx scripts/estado.mjs`.

Saltarse el 2 deja el libro sin ficha, porque `CON_PAGINAS` no tiene de dónde
sacarla.

## 3. El titular AFIRMA

Es la regla que más cambia el resultado. Un titular tiene que poder
discutirse: si nadie puede estar en desacuerdo, es una etiqueta.

| así sí | así no |
|---|---|
| La agricultura fue el mayor fraude de la historia | La revolución agrícola |
| Ganamos porque somos capaces de creernos cosas que no existen | El lenguaje |
| Somos mucho más poderosos y no está claro que seamos más felices | La felicidad |

## 4. Las siete reglas de la prosa

1. **Se cuenta el libro, no su historia.** Nada de cómo se escribió, cómo se
   vendió ni quién es el autor, salvo que sea parte del argumento. Si al
   terminar una página el lector no sabe nada nuevo DEL MUNDO, esa página
   sobra. Es el fallo que Pablo devolvió: la primera página de Sapiens contaba
   que a Harari le endosaron una asignatura y cuánto tardó la traducción.

2. **Lo concreto antes que el adjetivo.** Una cifra, un nombre, una fecha, un
   objeto: seis especies humanas, un uno por ciento de ADN neandertal, el
   techo de los ciento cincuenta. Nunca «numerosos», «fascinante», «enorme».

3. **Una idea por página**, y va en la caja del rayo escrita para repetirse en
   una cena: «No fuimos nosotros quienes domesticamos el trigo».

4. **Se explica, no se arenga.** Ni «te invito a reflexionar», ni «el autor
   nos invita a», ni «descubre». El autor se nombra como quien cita una
   fuente, no como un gurú.

5. **Se dice dónde falla.** Todo libro tiene una parte floja, un dato que
   envejeció mal o una fama que no se corresponde. Va en la conclusión, y es
   lo que separa esto de una contraportada.

6. **Español llano**, del que se lee en voz alta sin tropezar. Frases cortas.
   Sin anglicismos de manual de autoayuda.

7. **La segunda persona, solo cuando sirve.** En un libro práctico —hábitos,
   dinero, empresa— se le habla al lector de tú, que es lo que hace Headway.
   En uno de historia o de ciencia, no: ahí suena a folleto.

## 5. La ficha del libro

Se ve ANTES que el resumen y se escribe con el mismo cuidado. Son tres cosas
distintas y cada una vive en su fichero:

| qué | dónde | regla |
|---|---|---|
| Subtítulo | `libros/subtitulos.ts` | el REAL de la cubierta. El que no se sepa, no se inventa: se deja sin línea |
| De qué va | `libros/aprenderas.ts` | dos frases, cuarenta palabras. Abre con un dato, no con un titular de suplemento |
| Aprenderás | `libros/puntos.ts` | cinco puntos, **una línea cada uno**, y cada uno es algo que SABRÁS al terminar |

Los «Aprenderás» no son el índice. «La habitación 101» no dice nada a quien no
ha leído *1984*; «por qué la tortura busca creencia y no información», sí.

Y van **en minúscula**, como en la referencia: detrás del visto no empieza una
frase, se continúa la del rótulo —aprenderás… esto—.

## 6. Lo que ya salió mal, para no repetirlo

- **Contar la historia del libro** en vez del libro. Corregido el 19 de agosto.
- **Poner los títulos de los capítulos como «Aprenderás».** Son cortos y
  concretos, pero cuentan por dónde se pasa, no qué te llevas.
- **Poner las frases de las tarjetas `clave` como «Aprenderás».** Medido: las
  1.476 escritas tienen una mediana de 32 palabras. Son el remate de un
  capítulo, para leerse DESPUÉS de él; sueltas, piden un contexto que no está.
- **Titulares que son etiquetas** («La revolución cognitiva»).

## 7. Antes de dar un libro por terminado

- [ ] ¿Cada titular afirma algo que se pueda discutir?
- [ ] ¿Hay alguna página que hable del libro en vez de su contenido?
- [ ] ¿Cada página tiene su caja del rayo, y se sostiene sola?
- [ ] ¿La conclusión dice dónde falla?
- [ ] ¿Ocho páginas de unas 260 palabras?
- [ ] ¿La primera cuenta de dónde parte el libro y anuncia el recorrido?
- [ ] ¿La última se llama «Conclusión» y NO hay ninguna lista de deberes?
- [ ] ¿Están escritos el subtítulo, el «de qué va» y los cinco «Aprenderás»?

---

## Dónde está esto

- Los modelos terminados son **`SAPIENS`** y **`HOMO_DEUS`**, en
  `libros/paginas.ts`. Se copia su forma y ya está. Homo Deus es el primero
  con la entrada y la conclusión del apartado 2.
- `libros/tipos.ts` remite aquí.
- `ESTADO.md` remite aquí, y es lo primero que se lee al empezar de cero.

Cuando lleguen capturas nuevas de Headway, **se leen y se añade lo que
enseñen a este documento**, en la sección que toque. No se guardan como
recuerdo de una conversación: se escriben aquí.
