# Los textos que manda Pablo, tal como llegan

Aquí se guarda el original de cada tanda antes de tocarlo. No es una copia de
seguridad: es la única manera de comprobar, dentro de un mes, que lo que está
en `src/historias/curiosidades.ts` dice exactamente lo que él escribió. Un
`diff` lo canta en un segundo; la memoria de una conversación, no.

Y de aquí salen los bloques, literalmente:

    node scripts/temas.mjs referencia/textos-de-pablo/28-agosto-tarde/*.md

## `28-agosto-tarde/` — diez temas

| fichero | palabras |
|---|---|
| `cuanto-le-queda-al-sol.md` | 1.374 |
| `por-que-vuelan-los-aviones.md` | 1.091 |
| `por-que-llueve.md` | 1.085 |
| `por-que-bostezamos.md` | 1.060 |
| `por-que-tenemos-estaciones.md` | 905 |
| `como-cicatrizan-las-heridas.md` | 870 |
| `por-que-pica-el-picante.md` | 865 |
| `por-que-se-arrugan-los-dedos.md` | 803 |
| `por-que-te-mareas-en-el-coche.md` | 774 |
| `por-que-tiritamos.md` | 756 |

## Su formato

| en el `.md` | en el código |
|---|---|
| `# Título` | `titulo` |
| `## Sección` | bloque `rotulo` |
| un párrafo | bloque `parrafo` |
| `• viñeta` | se juntan en un bloque `lista` |
| `> ⚡ …` | bloque `rayo`, la caja del rayo |
| `> 🖼️ …` | **no es texto**: es el encargo de una imagen para dentro del tema. Va a `encargos` y no se pinta |
| `**negrita**`, `*cursiva*` | `<strong>`, `<em>` |

## Y el reparto en pantallas NO se hace aquí

Lo hace la app al pintar, midiendo el móvil de quien lee. Las siete reglas
están en `.claude/skills/paginado-shorts/SKILL.md` y hay que leerlas antes de
tocar la maqueta. Lo único que se decide aquí es nada: el texto se pasa entero
y en orden, y el guion comprueba que no se pierde ni se mueve ningún bloque.
