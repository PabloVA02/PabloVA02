---
titulo: "El sensor de tu cámara es daltónico: solo cuenta luz"
categoria: "Tecnología"
serie: "como-funciona-una-camara-de-fotos"
orden: 2
portada: ""
credito_portada: ""
frase_portada: "Dos tercios del color de tus fotos están calculados"
---

# El sensor de tu cámara es daltónico: solo cuenta luz


## Cada píxel mide un solo color, así que le faltan los otros dos

Un sensor digital no es una retina en miniatura. Es una cuadrícula de detectores que solo saben hacer una cosa: contar cuánta luz les llega. Intensidad, y nada más. Del color no distinguen absolutamente nada.

La solución fue poner delante un mosaico de filtros de colores, uno por cada detector. Y de ahí sale la limitación que casi nadie conoce: **cada píxel está filtrado para registrar solo uno de los tres colores**, de modo que el dato de un píxel no puede especificar por sí solo sus valores de rojo, verde y azul.

Léelo otra vez. Cada punto de tu sensor conoce **un tercio** de la información de color que necesita, y desconoce los otros dos tercios.

> ⚡ Tu cámara no ve en color. Ve en gris, a través de un cristal de colores, y de cada punto de la imagen solo sabe una de las tres cosas que hacen falta para pintarlo.


## El resto se rellena mirando a los vecinos

Y ahora cómo se completa lo que falta, que es donde está lo bueno.

El mosaico de filtros se llama **matriz de Bayer** y su reparto no es equitativo: **la mitad de los filtros son verdes**, un cuarto rojos y un cuarto azules. El doble de verdes que de cualquiera de los otros dos.

La razón de ese desequilibrio no es técnica, es fisiológica. **Bryce Bayer** puso el doble de elementos verdes para imitar la fisiología del ojo humano: nuestra percepción de la luminosidad a plena luz del día depende de los conos M y L combinados, que son los más sensibles a la luz verde. Es decir, la cámara le dedica más resolución al verde porque es el color en el que nosotros notamos más el detalle.

Con eso, la imagen final se obtiene por un procedimiento que se llama **interpolación cromática**. Distintos algoritmos calculan el juego completo de valores de rojo, verde y azul de cada píxel usando los píxeles vecinos del color correspondiente para estimar lo que falta.

Detente en la consecuencia, porque es más radical de lo que parece. En cualquier fotografía digital que hayas visto en tu vida, aproximadamente **dos tercios de la información de color son una estimación**. No están medidos: están deducidos a partir de los píxeles de al lado.

¿Sabías que…? Esta solución tiene fecha y número de expediente. Bryce Bayer la patentó en 1976, con la patente estadounidense número 3.971.065, fechada el 20 de julio. Medio siglo después, prácticamente todas las cámaras del mundo, incluida la de tu teléfono, siguen usando su mosaico.

> ⚡ Una fotografía digital no es una copia de lo que había delante. Es una reconstrucción hecha a partir de una cuadrícula de medidas incompletas, y funciona porque los colores del mundo cambian despacio de un punto al siguiente.
