# Cómo leer estos archivos

Cada `.md` es **un short**. Estructura fija, siempre la misma.

## Cabecera YAML

Va entre `---` al principio del archivo. Todos los campos son obligatorios salvo
`frase_portada`, que puede ir vacío.

| campo | qué es |
|---|---|
| `titulo` | El título del short. Va en la **portada**, sobre la imagen. |
| `categoria` | Etiqueta pequeña encima del título en la portada. |
| `serie` | Shorts que salieron del mismo asunto. Sirve para sugerir "más sobre esto". No se muestra como tal. |
| `orden` | Posición dentro de la serie. No obliga a leerlos en orden: cada short se entiende suelto. |
| `portada` | Nombre del archivo de imagen de portada. |
| `credito_portada` | Texto pequeño de crédito sobre la imagen. Si está vacío, no se muestra nada. |
| `frase_portada` | Frase opcional bajo el título en la portada. **Casi siempre vacío.** Solo se usa si abre una pregunta; si responde al título, sobra. |

## Marcas dentro del texto

| marca | qué es | cómo se muestra |
|---|---|---|
| `# ` | **Título del short.** Aparece una sola vez, al principio. Es el mismo que `titulo`. | Solo en la portada. **No** se repite en la primera pantalla de texto. |
| `## ` | **Subtítulo de sección.** Encabeza un bloque de texto. | Negrita, mismo tipo de letra, un 20% mayor que el cuerpo. Nunca se queda solo al final de una página. |
| texto normal | Párrafos del cuerpo. Pueden ser largos, incluso más altos que la pantalla. | Cuerpo. |
| `**negrita**` | Concepto clave. | Negrita. Respetarla. |
| `*cursiva*` | Títulos de obra y términos científicos. | Cursiva. |
| `> ⚡ ` | **Insight destacado.** Una frase autónoma que resume la sección. | Bloque aparte con el icono. Es conclusión, no cita. |
| `> ❞ ` | **Cita textual** de una persona real. La línea siguiente empieza por `— ` y es el autor. | Bloque aparte, cursiva, línea fina a la izquierda, firma debajo. Si se parte entre páginas, **la firma va siempre con la mitad de abajo**. |
| `> 💡 ` | **Dato curioso lateral.** Empieza por "¿Sabías que…?". | Puede ir como párrafo normal o con estilo propio, a tu criterio. No es un insight. |
| `> 🖼️ ` | **Instrucción de imagen interior.** No es contenido: dice qué imagen va ahí y de qué tipo. | **No se muestra nunca.** Se sustituye por la imagen. |

## Reglas de maquetado

- Ninguna página con scroll vertical. El texto se pagina midiendo.
- Al partir un párrafo entre dos páginas: mínimo 2 líneas a cada lado. Los párrafos largos se parten, no se evitan.
- Márgenes de libro: los mismos a izquierda y derecha, y el inferior igual o algo mayor que el superior. Fijos en todas las páginas. El indicador de página va dentro del margen inferior, sin añadir espacio.
- Los `## ` no se separan de su primer párrafo.

## Dónde se guarda cada short

Cada tema tiene su propia subcarpeta dentro de esta carpeta, con el nombre de su
`serie`, y dentro va un `.md` por short numerado con su `orden`. Por ejemplo:

```
por-que-resbala-el-hielo/01-un-patinador-no-derrite-el-hielo.md
por-que-resbala-el-hielo/02-el-hielo-ya-esta-mojado.md
```

Nunca sueltos en la raíz: el documento Word se construye recorriendo subcarpetas,
y un `.md` suelto en la raíz no aparecería en él.

## Al terminar: reconstruir el documento

Después de guardar los `.md` nuevos y de marcar la cola, hay que ejecutar siempre:

```
cd /Users/administrador/Documents/Shorts && python3 _construir-documento.py
```

Ese script regenera `Shorts.docx` con todos los shorts de todas las subcarpetas.
Es idempotente, así que se puede ejecutar las veces que haga falta, pero nunca
antes de haber guardado los archivos. La línea que imprime dice cuántas series y
cuántos shorts ha metido: comprueba que ahí están los tuyos.
