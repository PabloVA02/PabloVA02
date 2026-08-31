---
titulo: "Una red neuronal no guarda información, guarda números"
categoria: "Tecnología"
serie: "como-funciona-la-inteligencia-artificial"
orden: 1
portada: "como-funciona-la-inteligencia-artificial.avif"
credito_portada: ""
frase_portada: "Dentro no hay ni un solo texto de los que leyó"
---

# Una red neuronal no guarda información, guarda números


## Una neurona artificial hace una suma y poco más

La idea es más vieja de lo que parece. En 1958, el psicólogo **Frank Rosenblatt** describió el perceptrón, una de las primeras redes neuronales que llegaron a construirse, financiada por la Oficina de Investigación Naval de Estados Unidos. Hace casi setenta años de eso.

El elemento básico sigue siendo el mismo hoy y es de una simplicidad que descoloca. Una neurona artificial recibe señales de otras neuronas conectadas a ella. Esas señales son números reales, sin más. La neurona las procesa y emite a su vez una señal hacia las siguientes.

El detalle importante está en las conexiones, no en las neuronas. La fuerza de la señal que viaja por cada conexión la determina un número llamado **peso**, y la salida de cada neurona se calcula aplicando al total de sus entradas una función no lineal, que es lo que impide que toda la red se reduzca a una suma gigante.

Cambia los pesos y cambias lo que hace la red entera, sin tocar ni una sola de sus neuronas.

> ⚡ En una red neuronal el conocimiento no está en las piezas, está en la fuerza de las conexiones entre ellas. Las neuronas son idénticas; lo único que distingue a una red que reconoce caras de otra que traduce del ruso son sus números.


## Entrenar significa corregir esos números millones de veces

Entonces, ¿cómo se llega a los números correctos? Nadie los escribe. Se buscan a base de equivocarse.

El procedimiento se llama **retropropagación** y consiste en algo bastante intuitivo cuando se cuenta despacio. Se le da un ejemplo a la red, la red produce una respuesta, y se compara esa respuesta con la correcta. La diferencia entre las dos es el error. Entonces ese error se propaga hacia atrás, desde los nodos de salida hasta los de entrada, ajustando los pesos por el camino.

Para saber en qué dirección moverlos se calcula la pendiente de la función de error respecto a cada peso, es decir, se pregunta a cada número si subiendo un poco el error crece o disminuye, y se le mueve hacia donde disminuye. Repite eso millones de veces, con millones de ejemplos, y los pesos van cayendo hacia una combinación que funciona.

Y aquí está la consecuencia que casi nadie tiene presente. Cuando el entrenamiento termina, lo que queda guardado no son los textos ni las imágenes que se le enseñaron. Es un montón de números. El modelo no contiene una biblioteca que consulta: contiene el resultado de haber sido corregido muchísimas veces mientras la leía.

> ⚡ Un modelo de inteligencia artificial no es un archivo con lo que aprendió dentro. Es la forma en que quedaron sus conexiones después de equivocarse millones de veces, y ese es todo su contenido.
