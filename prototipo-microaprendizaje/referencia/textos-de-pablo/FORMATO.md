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
| texto normal | Párrafos del cuerpo. Ninguno pasa de 60 palabras. | Cuerpo. |
| `**negrita**` | Concepto clave. | Negrita. Respetarla. |
| `*cursiva*` | Títulos de obra y términos científicos. | Cursiva. |
| `> ⚡ ` | **Insight destacado.** Una frase autónoma que resume la sección. | Bloque aparte con el icono. Es conclusión, no cita. |
| `> ❞ ` | **Cita textual** de una persona real. La línea siguiente empieza por `— ` y es el autor. | Bloque aparte, cursiva, línea fina a la izquierda, firma debajo. Si se parte entre páginas, **la firma va siempre con la mitad de abajo**. |
| `> 💡 ` | **Dato curioso lateral.** Empieza por "¿Sabías que…?". | Puede ir como párrafo normal o con estilo propio, a tu criterio. No es un insight. |
| `> 🖼️ ` | **Instrucción de imagen interior.** No es contenido: dice qué imagen va ahí y de qué tipo. | **No se muestra nunca.** Se sustituye por la imagen. |

## Reglas de maquetado

- Ninguna página con scroll vertical. El texto se pagina midiendo.
- Al partir un párrafo entre dos páginas: mínimo 2 líneas a cada lado.
- Franja inferior de 56 pt reservada, con indicador de página y chevron. El texto no entra ahí.
- Los `## ` no se separan de su primer párrafo.
