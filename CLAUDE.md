# Curva — lo que hay que saber antes de tocar nada

Esto se lee solo al empezar cualquier sesión. Está escrito para que, después de
un borrado de contexto, no haya que preguntarle nada a Pablo.

El proyecto vive en **`prototipo-microaprendizaje/`**. Es una app de
micro-aprendizaje con dos mitades: **Libros** (201 resúmenes) y **Shorts** (761
historias ilustradas).

## LO PRIMERO, Y NO ES NEGOCIABLE: cómo se redacta

**Antes de escribir o tocar un solo libro, se lee
`prototipo-microaprendizaje/REDACCION.md` entero.**

Ese documento manda sobre cualquier otra instrucción de estilo, venga de donde
venga: de un comentario de código, de un recuerdo, de una conversación vieja o
de lo que parezca razonable.

**Y las pruebas están en `prototipo-microaprendizaje/referencia/`**: las ocho
tandas de capturas de Headway que mandó Pablo, guardadas para que no se pierdan
con la ventana de contexto. Su `README.md` dice qué enseña cada una. Si hay
tiempo para mirar una sola, la de `odisea/`, que es la mejor escrita.

Pablo lo dijo el 21 de agosto:

> «Debes saber, sin que te lo diga yo, que tienes que obedecer este tipo de
> redacción, gramática, etc.»
> «Cuando se te acabe la ventana de contexto debes ver todos estos ejemplos
> para seguir haciéndolos así, que nunca se te olvide.»

Sale de sus capturas de Headway y de sus correcciones sobre nuestro texto, y se
actualiza cada vez que llega una captura nueva: **lo que enseñe una captura se
escribe ahí, no se guarda en la conversación.** Lo que está en la conversación
se pierde; lo que está en el repositorio, no.

Lo mínimo, para que nada se escriba mal ni por descuido:

- **El titular afirma** algo discutible. En narrativa vale el título corto de
  imagen, y entonces la afirmación va en la primera frase. Apartados 3 y 3 bis.
- **Una idea por página**, 260-320 palabras, y su caja del rayo.
- **Ocho, doce o dieciséis páginas** según cuántos argumentos independientes
  tenga el libro. Nunca se engordan las páginas para alargar. Apartado 2 ter.
- **La conclusión dice DÓNDE FALLA el libro**, y qué pasó después de publicarse.
  Es lo que nos separa de una contraportada, y Headway no lo hace nunca.
- **Nada de «Prueba esto»** ni listas de deberes. Lo quitó Pablo expresamente.
- **El texto viejo autogenerado se BORRA** al reescribir un libro. Apartado
  2 quater.

## LO SEGUNDO, Y TAMPOCO SE NEGOCIA: cómo se pagina una pantalla

**Antes de tocar la maqueta de un short, el reparto del texto en pantallas o
cualquier medida de letra, se lee `.claude/skills/paginado-shorts/SKILL.md`.**

Son siete reglas que puso Pablo el 28 de agosto después de cinco vueltas sobre
lo mismo: el alto exacto de la pantalla, nada de scroll dentro de un tema, el
reparto calculado en tiempo de ejecución y no por un guion, los cortes solo
entre párrafos, y qué hacer cuando un párrafo no cabe —avisar, no cortarlo—.

## Lo tercero: dónde estamos y cómo se trabaja

`prototipo-microaprendizaje/ESTADO.md` — el estado real, los scripts, el orden
en que se escriben los libros y las trampas del contenedor. También se lee.

Los otros documentos cerrados: `DISENO.md` (la pantalla de lectura),
`FOTOS.md` (de dónde salen las imágenes), `src/historias/MOLDE.md` (los shorts).

## Lo cuarto: al terminar CUALQUIER cambio

1. **Rehacer el simulador y publicarlo** en el artefacto de siempre —el enlace
   está en `ESTADO.md`—, porque `movil.html` es lo único que Pablo ve.
2. **Empujar a GitHub** (`claude/app-development-xpo6fx`) cada pocos commits, y
   guardar copia en los otros sitios. La lista está en `ESTADO.md`.
