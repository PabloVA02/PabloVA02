# Los textos que manda Pablo, tal como llegan

Aquí se guarda el original de cada zip antes de tocarlo, con su LEEME. No es
una copia de seguridad: es la única manera de comprobar, dentro de un mes, que
lo que está en `src/historias/curiosidades.ts` dice exactamente lo que él
escribió. Un `diff` contra estos ficheros lo canta en un segundo; la memoria de
una conversación, no.

## 28 de agosto de 2026 — el primer zip

`temas.zip`, con dos temas y su LEEME. Pablo: «aquí tienes el texto de dos
temas; elimina las imágenes de esos temas menos las de la portada y pones el
texto solo».

| fichero | secciones | palabras | pantallas en la app |
|---|---|---|---|
| `cuanto-le-queda-al-sol.md` | 5 | 1.156 | 9 |
| `por-que-bostezamos.md` | 4 | 861 | 7 |

**Su norma de maquetación, que es la que manda sobre estos textos** (viene en
el `LEEME.md`):

- `# Título` es el del tema, el de la portada. Sin frase de apoyo.
- `## Sección` es una tarjeta, y su título es una afirmación completa.
- `> ⚡` es el destacado de esa tarjeta: recuadro aparte, uno por tarjeta.
- «¿Sabías que…?» es un dato lateral. No siempre lo hay.
- Las tarjetas tienen longitudes desiguales **a propósito**.
- **Ni una tarjeta debe requerir scroll interno: si no cabe, se parte, nunca
  se recorta el texto.** Es la regla que decide todo lo demás.
- Indicador de progreso: puntitos tipo stories, nunca minutos de lectura.

## Lo único que se decide al maquetar: por dónde se parte

Los cortes van siempre ENTRE bloques suyos, nunca dentro de uno, y no los
elige nadie a ojo: los calcula `scripts/reparte.mjs` midiendo en la app de
verdad. Mete cada bloque en una pantalla real, pregunta si se sale, y entre
todos los repartos que usan el mínimo de pantallas elige el que deja el hueco
más parejo. Antes de escribir nada comprueba que ningún bloque se ha perdido,
repetido ni movido de sitio.

Una pantalla puede acabar una sección y empezar la siguiente, con el subtítulo
en medio: es lo que hace una página de un libro de papel, y es lo que permite
llenarlas hasta abajo.
