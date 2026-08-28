---
name: paginado-shorts
description: Las reglas de cómo se pagina una pantalla de texto en Curva — alto exacto, sin scroll, cortes solo entre párrafos, y qué hacer cuando un párrafo no cabe. Se lee ANTES de tocar la maqueta de un short, el reparto en pantallas o cualquier medida de texto de `src/Shorts.tsx` y `src/styles.css`.
---

# Cómo se pagina una pantalla de texto

Las puso Pablo el 28 de agosto de 2026, después de cinco vueltas sobre lo
mismo. **No se negocian y no se olvidan.** Si algo de aquí choca con lo que
parezca razonable, manda esto.

## Las siete reglas

1. **Cada página ocupa exactamente el alto visible**: `100dvh` menos la barra
   de pestañas menos `env(safe-area-inset-bottom)`. **Nunca `100vh`** —en un
   móvil `vh` cuenta la barra de direcciones que a veces no está, y la última
   línea se va debajo del borde—.
2. **`overflow: hidden` en la página. El scroll vertical NO existe dentro de un
   tema.** El gesto vertical cambia de short y el horizontal pasa de página.
   Si aparece una barra de scroll, la maqueta está rota.
3. **El reparto se calcula EN TIEMPO DE EJECUCIÓN**, no en un guion que escribe
   páginas fijas. Se renderizan los párrafos en un contenedor oculto con el
   mismo ancho y la misma tipografía, se acumulan alturas, y se corta cuando el
   siguiente no quepa.
4. **El corte cae SIEMPRE entre párrafos, nunca dentro de uno.**
5. **Un título no se separa de su primer párrafo**, y **el bloque ⚡ no empieza
   página**: es la conclusión de lo que se acaba de leer, y suelto arriba no
   dice nada.
6. **Se recalcula al cambiar la orientación o el tamaño de letra del sistema.**
7. **Si un párrafo suelto no cabe entero en una página, NO SE CORTA.** Se avisa
   por consola con el nombre del tema para que Pablo lo parta en el texto.

## Por qué la 7 es la importante

Es la única que no se puede resolver desde el código. Un párrafo más alto que
la pantalla solo tiene dos salidas: partirlo —y entonces se lee media frase y
se pasa página— o encogerlo —y entonces esa pantalla tiene otra letra que las
demás—. Las dos están prohibidas por las reglas de arriba. La salida buena es
que el texto cambie, y el texto lo escribe Pablo: por eso el aviso lleva el
nombre del tema.

## Las medidas del texto no se inventan: se miden

Están en `referencia/lector-headway/README.md`, sacadas en píxeles de las
capturas de Pablo. Hoy: cuerpo 20, interlínea 27, un renglón entero (27) de
blanco entre párrafos, subtítulo 24/32 en negrita, margen lateral 16.

**Cuando diga que el tamaño no es igual, no se discute mirando el CSS: se mide
la imagen.** La mancha de una línea —lo que ocupa de alto una fila de letras
sin palos ni colas— se ve en una captura, y comparándola con la nuestra a 19,
20 y 21 sale el número exacto. Así se encontró que su cuerpo era 20 y el
nuestro 19, después de tres discusiones.

## Y lo que se paginaba antes

Hubo un `scripts/reparte.mjs` que repartía el texto en páginas fijas midiendo
en un navegador y las escribía en `curiosidades.ts`. Funcionaba y está mal por
la regla 3: no sabe nada del móvil de quien lee. Si vuelve a aparecer algo así,
es que alguien se saltó esta hoja.
