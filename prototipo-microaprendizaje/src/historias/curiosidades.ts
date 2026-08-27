import type { Short } from "../shorts";

/* ==========================================================================
   Curiosidades. VACÍO A PROPÓSITO, ESPERANDO EL TEXTO DE PABLO.

   El 27 de agosto por la noche cambiamos de manera de trabajar, y esto no es
   un borrado: es el hueco donde va lo siguiente.

   Pablo: «vamos a hacer una cosa mejor: primero te preparo yo el texto y te
   lo paso; por lo tanto quita las imágenes y, en base al texto, ponemos las
   imágenes».

   POR QUÉ ES MEJOR, Y NO SOLO DISTINTO. Hasta ahora yo escribía y luego
   buscaba fotografías que ilustraran lo escrito, y ese orden tiene un vicio
   escondido: cuando una foto buena no aparece, la tentación es torcer el
   texto hacia la foto que sí existe. Con el texto cerrado antes de abrir
   Commons, el texto manda y la fotografía obedece. Es el mismo orden que ya
   pedía `MOLDE.md` para las pantallas —«primero se cuenta la historia lo
   mejor posible, y después se ajusta»— llevado un paso más atrás.

   QUÉ HAY QUE HACER CUANDO LLEGUE EL TEXTO DE PABLO

   1. Se lee entero y se corta en pantallas por donde deje algo colgando. El
      número de páginas es un resultado, no una decisión previa.
   2. Se pasa por `MOLDE.md`: la respuesta primero, frases de quince a
      veinticinco palabras, ninguna de más de treinta y cinco, los términos
      explicados en la frase en que aparecen, tres cifras por pantalla como
      mucho. Si algo choca con lo que escribió Pablo, MANDA LO QUE ESCRIBIÓ
      PABLO: se le dice y se le pregunta, no se le corrige por la espalda.
   3. Una fotografía por pantalla, buscada YA con el texto delante, y cada
      una tiene que enseñar algo que su párrafo no puede. Hoja de contacto
      antes de elegir: `scripts/foto.mjs buscar` y `scripts/contacto.mjs`.
   4. Ficha con autor y licencia comprobados, nunca de memoria:
      `node scripts/foto.mjs ficha "File:…"`.

   LO QUE HABÍA AQUÍ, POR SI HACE FALTA RESCATARLO. Cuatro shorts escritos y
   reescritos durante el día —«¿Cuánto le queda al sol?», «Por qué llueve»,
   «Por qué vuelan los aviones» y «Por qué el mar es salado»—, con sus quince
   fotografías de Commons ya fichadas. Están enteros en el commit `931c152`, y
   sus fotografías siguen siendo buenas aunque el texto cambie:

       git show 931c152:prototipo-microaprendizaje/src/historias/curiosidades.ts

   La maqueta no se ha tocado y sigue lista: banda de imagen elástica, sin
   rótulos, la letra a una sola medida. En cuanto haya texto, se ve.
   ========================================================================== */

export const CURIOSIDADES: Short[] = [];
