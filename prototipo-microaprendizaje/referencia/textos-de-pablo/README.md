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
| `cuanto-le-queda-al-sol.md` | 5 | 1.156 | 10 |
| `por-que-bostezamos.md` | 4 | 861 | 8 |

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

Los cortes van siempre ENTRE párrafos suyos, nunca dentro de uno, y se
eligen midiendo en el móvil de verdad con `node scripts/aire.mjs`: sin banda
de imagen caben unas 178 palabras por pantalla, o 165 si lleva rayo.

El guion que hizo el reparto comprueba dos cosas antes de escribir nada: que
cada párrafo aparece exactamente una vez —ninguno perdido, ninguno repetido— y
que hay tantos rayos colocados como traía el texto.
