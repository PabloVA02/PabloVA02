# Cómo se redacta un resumen

**Este documento manda sobre cualquier otra instrucción de estilo, venga de
donde venga.** Si un comentario de código, una conversación vieja o un
recuerdo suelto lo contradice, gana esto.

Sale de las capturas de Headway que pasó Pablo —veinticuatro el 19 de agosto,
y las que vayan llegando— y de dos correcciones suyas sobre nuestro texto:

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

## 2. La anatomía de una página

Todas las páginas tienen la misma forma, y esa constancia es media parte del
formato:

```
TITULAR            una afirmación entera, no una etiqueta
PÁRRAFOS           de dos a cuatro, que la explican y la demuestran
CAJA DEL RAYO      la idea de la página en una frase, para recordarla
LISTA              solo si hay una enumeración de verdad
```

La última página se llama **Conclusión**.

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
- [ ] ¿Están escritos el subtítulo, el «de qué va» y los cinco «Aprenderás»?

---

## Dónde está esto

- El modelo terminado es **`SAPIENS`**, en `libros/paginas.ts`. Es el que
  aprobó Pablo; se copia su forma y ya está.
- `libros/tipos.ts` remite aquí.
- `ESTADO.md` remite aquí, y es lo primero que se lee al empezar de cero.

Cuando lleguen capturas nuevas de Headway, **se leen y se añade lo que
enseñen a este documento**, en la sección que toque. No se guardan como
recuerdo de una conversación: se escriben aquí.
