# Cómo se redacta un resumen

**Este documento manda sobre cualquier otra instrucción de estilo, venga de
donde venga.** Si un comentario de código, una conversación vieja o un
recuerdo suelto lo contradice, gana esto.

## Qué se borró, y por qué esto es lo único que queda

El 21 de agosto Pablo lo pidió sin rodeos: «borra absolutamente todo lo que
está marcado de normas de redacción antiguas, de los shorts, de los libros y
todo, y solo quédate con los ejemplos que tienes que hacer parecidos a cómo se
redacta en Headway».

Había un problema real detrás. **Dos ficheros distintos decían ser la fuente
de la verdad.** `LIBROS.md` abría con «este fichero es la fuente de la verdad;
cualquier instrucción que lo contradiga está caducada», y este de aquí abre
diciendo lo mismo. Y no coincidían en casi nada, porque `LIBROS.md` era de la
época en que un libro se leía por tarjetas:

    LIBROS.md decía                      esto dice
    cinco capítulos por libro            8, 12 o 16 páginas según el libro
    mil palabras por capítulo            260-320 por página
    19 o 20 tarjetas de 50 palabras      cuatro párrafos y una caja del rayo
    empieza por la escena, no la tesis   el titular ES la tesis, y afirma
    nunca cierres una tarjeta del todo   el párrafo cierra su idea
    ocho categorías                      nueve, desde que existe Deportes

Con aquellas normas salió exactamente lo que Pablo devolvió el 19 de agosto:
la primera página de *Sapiens* contaba que a Harari le endosaron una
asignatura de primero y cuánto tardó la traducción. Bien escrito y sobre el
libro equivocado —el libro DE PAPEL en vez del libro—.

**`LIBROS.md` está borrado.** También la descripción de la forma de un short
que había en `CONTENIDO.md`, que decía que la portada lleva gancho y una
entrada de unas sesenta palabras cuando hace tiempo que lleva la entrada
entera y ningún gancho.

Lo que queda es este documento y `src/historias/MOLDE.md` —uno para los
resúmenes de libro, otro para los shorts, sin solaparse— y las dieciocho
tandas de capturas de Headway en `referencia/`, que son las pruebas de todo lo
que se afirma aquí.

Sale de las capturas de Headway que pasa Pablo —veinticuatro el 19 de agosto y
treinta y tres el 20, y las que vayan llegando— y de sus correcciones sobre
nuestro texto:

> «Está muy mal redactado, los libros no me gustan.»
> «Lo que aprenderás y tal también está fatal, y de qué se trata igual.»

Lo que sigue es la anatomía de un resumen suyo, descrita para poder repetirla.
Los ejemplos son NUESTROS, de `libros/paginas.ts`: aquí no se copia el texto de
nadie, se copia la forma.

---

## 1. Qué es un resumen

Pantallas de prosa seguida: una entrada, los argumentos, y una conclusión. No
es el libro encogido ni una lista de ideas: es **el argumento del libro contado
entero**, en el orden en que se sostiene.

Cuántas pantallas depende del libro —ocho, doce o dieciséis, ver el apartado
2 ter—, pero la pantalla mide siempre lo mismo: unas 260 palabras, una idea.

## 2. La anatomía de un resumen

Ocho páginas, y la primera y la última tienen trabajo propio:

| página | qué hace |
|---|---|
| **La primera: la entrada** | de dónde parte el libro, con un dato que sorprenda, y **qué se va a recorrer en el resumen**. Se cierra anunciando el camino |
| **Las de en medio** | un argumento por página. Seis en un Breve, diez en un Amplio, catorce en un Extenso |
| **La última: conclusión** | qué dice el libro en tres líneas, qué aporta y **dónde falla** |

La entrada y la conclusión son siempre una cada una, sea cual sea el tamaño: lo
que crece es el tramo de en medio.

**No se pone «Prueba esto».** La referencia termina con una lista de deberes
—«decídete a…», «reserva cada día…»— y Pablo la quitó expresamente el 20 de
agosto: *«no añadas lo de prueba esto, solo añade una conclusión»*. El bloque
`prueba` sigue existiendo en el código por si algún día vuelve, pero no se usa.

La prueba de que tenía razón está en la captura de *La gran apuesta*: cuando no
hay ningún deber sensato que poner después de un libro sobre la crisis de 2008,
ese apartado se rellena solo, y lo que escriben es «si este resumen te interesó,
ve la película del mismo título de 2015». Un hueco fijo que hay que llenar
siempre acaba llenándose con cualquier cosa.

## 2 bis. La anatomía de una página

Todas tienen la misma forma, y esa constancia es media parte del formato:

```
TITULAR            una afirmación entera, no una etiqueta
PÁRRAFOS           de dos a cuatro, que la explican y la demuestran
CAJA DEL RAYO      la idea de la página en una frase, para recordarla
LISTA              solo si hay una enumeración de verdad
```

Recursos que usa la referencia y que conviene usar, con medida:

- **La analogía doméstica.** Explicar el neocórtex por habitaciones de una
  casa, la ficción compartida por un billete. Una por página como mucho.
- **La lista con entradilla.** Un párrafo que termina en dos puntos y debajo
  los puntos, cada uno con su palabra en negrita. **Cinco o seis como mucho.**
  *Economía rosquilla* enumera de corrido las doce necesidades de su base
  social —comida, agua, electricidad, educación, sanidad, vivienda, ingresos,
  equidad, voz política, paz, igualdad de género y red de información— sin
  explicar ninguna, y eso ya no es una lista: es un índice. Nadie recuerda
  doce. Si el libro tiene doce, se agrupan en tres o se eligen las que
  sostienen el argumento.
- **La pregunta directa.** «¿Y sabes por qué?» abre una explicación mejor que
  un conector. Una o dos por resumen; más, y suena a locutor.
- **El dato curioso.** Una frase de «¿sabías que…?» con el término en negrita.
  Vale para descansar entre dos argumentos. La captura de *La gran apuesta*
  tiene el mejor ejemplo que hemos visto: Steve Eisman y su mujer estuvieron a
  punto de montar una casa rural cuando no conseguían financiación. Es
  concreto, solo existe en ese libro y humaniza sin rellenar.
- **El diagrama contado con palabras.** Cuando el argumento de un libro ES una
  figura, se dibuja con palabras al principio y todo lo demás cuelga de ahí.
  *Economía rosquilla* es el caso puro: dos anillos concéntricos, dentro del
  interior está la base social que nadie debería cruzar hacia abajo, fuera del
  exterior está el techo ecológico que no se debe cruzar hacia arriba, y la
  economía tiene que caber en la rosquilla de en medio. Explicado así en tres
  frases, el resto del libro se entiende solo. No es lo mismo que la analogía
  doméstica: la analogía compara para explicar una idea, y aquí la figura es
  la idea.

**La cita con autor.** Un bloque aparte, con la frase entre comillas y el
nombre debajo: en *El cerebro de Buda* hay dos, una del Dalái lama y otra de
Marvin Minsky. No es del autor del libro: es de alguien a quien el libro cita.
Una o dos por resumen, y solo si la frase dice algo que la prosa no dice mejor.

**Y tiene que poder rastrearse.** La captura de *El futuro de nuestra mente*,
del 21 de agosto, mete en la página cuarta la frase «el verdadero signo de la
inteligencia no es el conocimiento, sino la imaginación» firmada por Einstein,
que es una de las atribuciones falsas que más circulan por internet; y abre un
libro de Michio Kaku con una cita de Carl Sagan que no viene a cuento. Una cita
que no se puede localizar en una obra concreta no se pone, por buena que suene:
el resumen entero se vuelve menos creíble por una frase de adorno.

### Lo que NO se copia de la referencia

Esta lista crece con cada captura, porque Headway tiene tanto de modelo como de
aviso. De las treinta capturas de *El cerebro de Buda*, del 21 de agosto, salen
cuatro cosas más que no se hacen:

- **Los signos de admiración**, los «¡vamos por ello!» y el «en este resumen
  exploraremos» repetido. Se anuncia el recorrido una vez, en la entrada.
- **«La investigación demuestra que…» sin decir qué investigación.** Aparece
  tres veces en ese resumen y no sostiene nada: es la fórmula con la que se
  afirma cualquier cosa. Si hay un estudio, se dice cuál y de qué año; si no se
  sabe, se escribe la frase sin el respaldo falso. La captura de *El futuro de
  nuestra mente* trae la misma trampa con otro disfraz —«los científicos creen
  que», «según los científicos e investigadores, el cerebro almacena veinte
  categorías de recuerdos»—, y ahí la cifra exacta sin fuente es lo que más
  engaña: parece un dato y es un relleno.
- **La entrada que es un índice.** «Este resumen te explicará el papel que
  desempeña la neurociencia… Verás cómo… Este resumen también destaca…» es la
  primera página entera de ese mismo resumen, y no contiene ni un hecho. La
  entrada abre con algo que se sepa del mundo; el recorrido se anuncia al final
  y en una frase.
- **Los imperativos vagos de crecimiento personal.** «Nunca debes limitarte a
  una sola cultura, explora distintos lugares, intenta descubrir tu identidad.»
  Eso no es el libro: es relleno con forma de consejo. Rompe la regla 1 —al
  terminar la página no se sabe nada nuevo del mundo— y la 4.
- **El titular que da órdenes o que son dos frases.** «El cambio es inevitable.
  Para sobrevivir debes estar preparado y desarrollar estrategias para
  afrontarlo» son dos frases y la segunda manda. Un titular es UNA afirmación
  discutible sobre el libro; ver el apartado 3.
- **La caja del rayo convertida en obviedad.** «La realización personal se
  consigue con tiempo, esfuerzo y habilidad» no la discute nadie, así que no
  dice nada. La caja tiene que poder repetirse en una cena y que alguien
  levante la cabeza.

Y una diferencia de fondo, que es la que más nos separa: **su conclusión no
dice nunca dónde falla el libro.** La de *El cerebro de Buda* resume, añade un
par de ideas nuevas y termina con deberes. La nuestra lleva la regla 5, y por
eso el resumen se puede creer.

## 2 ter. Cuánto dura un resumen

**Se escribe contra las palabras, no contra el reloj. La página mide siempre
260-320 palabras; lo que cambia de un libro a otro es CUÁNTAS PÁGINAS tiene.**

### Los tres tamaños

Pablo lo pidió el 20 de agosto: *«estás poniendo todos los resúmenes en quince
minutos, puede haber un poco más de variedad si el tema o el libro lo
requieren; incluso algún tema denso que sean veinte o treinta minutos»*. Y
tiene razón por dos motivos. Sapiens y El principito no son el mismo tamaño de
asunto, y una biblioteca donde los doscientos títulos duran exactamente lo
mismo se nota fabricada.

| | páginas | palabras | ficha (oír) | para qué |
|---|---|---|---|---|
| **Breve** | 8 | 2.100-2.500 | 15-18 min | la medida por defecto |
| **Amplio** | 12 | 3.100-3.700 | 22-26 min | libros con más argumentos de los que caben en seis |
| **Extenso** | 16 | 4.100-4.700 | 29-34 min | los pocos que sostienen media docena de tesis distintas |

**LO QUE NO SE HACE ES ENGORDAR LAS PÁGINAS.** Un libro de treinta minutos no
son ocho páginas de quinientas palabras: son dieciséis de las de siempre. La
medida de 260-320 no es un capricho de maqueta, es lo que ocupa UNA idea
explicada y demostrada, y si se estira entran dos y se rompe la regla de una
por página. Alargar es añadir argumentos, no añadir párrafos a los que hay.

El lector y la ficha ya cuentan las páginas de verdad, así que un libro de doce
dice «3 de 12» y su ficha dice «12 páginas». No hay nada que ajustar a mano.

### Qué decide el tamaño

**No la fama del libro ni lo que nos guste: cuántos argumentos INDEPENDIENTES
tiene.** La prueba es contarlos antes de escribir. Si al listar lo que el libro
sostiene salen seis cosas, es Breve; si salen diez, es Amplio; si salen catorce
y quitar cualquiera deja el argumento cojo, es Extenso.

Tres señales de que un libro pide tamaño grande:

- **Recorre mucho terreno.** Sapiens va de los neandertales a la ingeniería
  genética; El capital en el siglo XXI, tres siglos de datos de patrimonio.
- **Su tesis se demuestra por acumulación.** Pensar rápido son treinta sesgos y
  cada uno necesita su experimento; con seis no se entiende el argumento.
- **Tiene partes que no se pueden resumir juntas.** Los 7 hábitos son siete, y
  meterlos en seis páginas obliga a juntar dos, que es lo que hace todo el
  mundo y por lo que nadie recuerda cuáles eran.

Y tres de que pide Breve, aunque el libro sea muy famoso:

- **Una sola idea repetida.** Los cuatro acuerdos, El poder del ahora.
- **Una fábula.** El principito, El alquimista, El monje que vendió su Ferrari:
  lo que hay que contar es la historia y lo que sostiene, y estirarlo es
  rellenar.
- **Ya está dicho en su propio subtítulo.** Si el libro cabe en una frase, el
  resumen no lo mejora ocupando cuatro veces más.

**En la duda, Breve.** Un resumen corto y apretado se lee entero; uno largo y
flojo se abandona a la mitad, y el abandono no se ve en ninguna estadística
nuestra pero se nota en si alguien vuelve.

### La proporción de la biblioteca

Que haya variedad no significa que la mitad sean largos. La biblioteca tiene
que seguir siendo de micro-aprendizaje:

    Breve     de cada diez, siete u ocho
    Amplio    uno o dos
    Extenso   uno cada quince o veinte libros, y con motivo

Si los Extensos se multiplican, es que se está alargando por gusto y no por
argumento. Se cuentan con `medir-paginas.mjs`, que marca el tamaño de cada uno.

### Y la cifra de la ficha sigue siendo la de OÍRLO

**La que enseña la ficha es la de oír, no la de leer.** Decidido con Pablo el 20
de agosto, y por tres razones: es el mayor de los dos números, así que quien lea
termina antes de lo prometido; en cuanto haya audio de verdad es un dato medido
y no una estimación de velocidad lectora, que varía de una persona a otra un
cincuenta por ciento; y deja la media donde la queremos.

Comprobado en la competencia: Headway anuncia el tiempo de LEER —«quince
minutos para leer o escuchar»— y su propio audio dura de quince a veinte. O
sea que su número se les queda corto justo en el modo que más crece. Nosotros
enseñamos el otro.

**Nada por debajo de 2.000 palabras, tenga el tamaño que tenga.** Ahí no caben
ocho argumentos con sus pruebas: sale un libro de titulares, que es lo que
Pablo devolvió el 19 de agosto.

Y la razón de oficio de la medida por página: **260-320 palabras es lo que
ocupa una idea explicada y demostrada**. Por debajo de 220 la página es un
titular y relleno; por encima de 350 entran dos ideas y se rompe la regla de
una por página. Esta medida NO cambia con el tamaño del libro: es la unidad.

Ninguna cifra se escribe a mano: `minutosDePaginas()` cuenta las palabras del
libro y divide por 140. No puede mentir.

### Cómo van los libros escritos

No se cuentan a mano. Dos scripts lo dicen en un segundo:

    node scripts/medir-paginas.mjs    palabras y minutos de cada resumen
    node scripts/revisa-fichas.mjs    a qué libro le falta una pieza de ficha

La cifra la da `medir-paginas.mjs` y no hace falta apuntarla aquí. Lo que sí
conviene recordar de la noche del 21 de agosto, escribiendo del tirón: **la
página sale corta si se escriben tres párrafos y sale en su sitio si se
escriben cuatro.** Con cuatro bloques de texto por página, un Breve aterriza
solo entre 2.100 y 2.300 palabras y no hay que retocar nada. Con tres, se
queda en 1.950 y hay que alargarlo después con `scripts/apendice.mjs`.

Y **los 46 libros con cubierta dibujada por Pablo ya no llevan texto
automático**, que era la peor combinación posible: dibujo bueno y relleno
debajo.

Los tres primeros Amplio dicen bien cuándo toca subir de tamaño: *El mundo de
ayer* (cincuenta años de Europa, diez argumentos), *Don Quijote* (dos partes que
funcionan al revés la una de la otra) y *Steve Jobs* (seiscientas páginas de
biografía con diez etapas). Ninguno de los tres cabía en ocho páginas sin
quedarse en lo que ya sabe todo el mundo: el exilio, los molinos, el genio
antipático.

### Y cómo se escribe uno nuevo

El borrador va en JSON, que es donde solo hay que pensar en el contenido, y
tres scripts hacen el resto:

    node scripts/mete-libro.mjs   <borrador.json>   las ocho páginas
    node scripts/ficha-libro.mjs  <ficha.json>      las tres piezas de la ficha
    node scripts/retira-viejo.mjs <id>              borra el texto autogenerado

`ficha-libro.mjs` avisa si un «Aprenderás» pasa de once palabras o empieza en
mayúscula, y `retira-viejo.mjs` se niega a borrar nada si el libro no tiene
páginas nuevas. Después, `generar-meta.mjs` y `estado.mjs`.

## 2 quater. El texto viejo se BORRA

Un libro reescrito a mano deja de tener dos versiones. La vieja —las tarjetas
autogeneradas de `psicologia.ts`, `economia.ts` y compañía— **se borra**, y con
ella su entrada en `indice.ts`. Pablo lo pidió así el 20 de agosto: *«el texto
antiguo que estaba, ya sabes que debes borrarlo y redactarlo como comentamos»*.

No es limpieza: es que mientras conviva con el nuevo, la estantería sigue
pintando la ficha vieja. `META_POR_ID` gana sobre `PAGINAS` en `puente.ts`, así
que el resumen se lee bien pero el subtítulo, el «de qué trata» y los minutos
del listado siguen siendo los de antes. Al borrar la versión vieja el libro cae
en el pase `CON_PAGINAS`, que es el que lee `subtitulos.ts`, `aprenderas.ts` y
cuenta los minutos de verdad.

El orden, que importa:

1. Se escriben las ocho páginas en `paginas.ts` y se registran en `PAGINAS`.
2. Se escriben el subtítulo, el «de qué trata» y los cinco «Aprenderás».
3. Se borra el resumen viejo y su línea de `CARGADORES` en `indice.ts`.
4. `npx tsx scripts/generar-meta.mjs` y `npx tsx scripts/estado.mjs`.

Saltarse el 2 deja el libro sin ficha, porque `CON_PAGINAS` no tiene de dónde
sacarla.

## 3. El titular AFIRMA

Es la regla que más cambia el resultado. Un titular tiene que poder
discutirse: si nadie puede estar en desacuerdo, es una etiqueta.

| así sí | así no |
|---|---|
| La agricultura fue el mayor fraude de la historia | La revolución agrícola |
| Ganamos porque somos capaces de creernos cosas que no existen | El lenguaje |
| Somos mucho más poderosos y no está claro que seamos más felices | La felicidad |
| El cerebro guarda lo malo con velcro y lo bueno con teflón | El sesgo de negatividad |

**Y es UNA frase, en presente y sin mandar.** Dos frases seguidas no son un
titular, son un párrafo corto; y en cuanto aparece un «debes», ha dejado de
afirmar para dar instrucciones, que es cosa de la caja del rayo o de nadie.

## 3 bis. Los dos registros del titular

La captura de *La Odisea*, del 21 de agosto, es la mejor de las que ha mandado
Pablo y usa un titular distinto del de las otras: **títulos cortos de imagen**,
de tres a cinco palabras.

    La historia que sobrevivió
    El mundo antes de las palabras
    Un mapa donde viven los monstruos
    La casa que no se derrumbaba

No contradice el apartado 3: **la afirmación sigue estando, y va en la primera
frase de la página.** «En realidad, el poema no empieza con Odiseo. Empieza con
su hijo Telémaco.» El titular abre y la primera línea afirma.

Cuál se usa:

| | titular | ejemplo |
|---|---|---|
| **Ensayo, ciencia, empresa, historia** | la afirmación entera, discutible | La agricultura fue el mayor fraude de la historia |
| **Novela, poema, clásico, biografía** | el título corto de imagen, y la afirmación en la primera frase | La casa que no se derrumbaba |

La razón es de oficio: en un ensayo, la tesis ES el titular y conviene leerla de
un vistazo. En una narración, una tesis de veinte palabras encima de cada
página convierte el relato en un informe.

### Y en un libro narrativo, la caja del rayo cambia de trabajo

En un ensayo, la caja resume la idea de la página. En *La Odisea*, en cambio,
la caja habla al lector en segunda persona y saca de la escena una lección para
su vida:

> Las cosas que te dan miedo señalan directamente a lo que valoras.
> La paciencia no es pasiva. Es la habilidad que separa a las personas que
> consiguen lo que quieren de las que casi lo lograron.
> La devoción sin discernimiento es solo esperanza.

Es la mejor pieza de ese resumen y la que hace que un poema de dos mil ochocientos
años parezca escrito para el lunes que viene. **En narrativa, la caja se escribe
así**; en ensayo, sigue siendo la idea de la página.

### Los cinco recursos que hacen bueno ese resumen

Están medidos y se pueden repetir:

1. **La etimología.** *Epos* significa canción, así que llamar épico a algo es
   tomar prestado el vocabulario de un poeta que recitaba junto al fuego.
   *Xenía*, la hospitalidad obligatoria. Y el juego de palabras que casi nadie
   conoce: el «nadie» con el que Odiseo engaña al cíclope suena en griego igual
   que *mētis*, astucia, que es la cualidad que lo define. Tres etimologías en
   ocho páginas, y cada una añade algo.
2. **El dato asombroso y comprobable.** Ciento ocho pretendientes. Veinticuatro
   libros. Ningún personaje del poema lee ni escribe jamás.
3. **La frase corta de remate**, de tres a seis palabras, después de un párrafo
   largo: «Se ríen.» «Solo Odiseo sobrevive.» «Y esta historia nunca ha dejado
   de contarse.» Es puro ritmo y se nota muchísimo al leer en voz alta.
4. **El contexto histórico como argumento y no como adorno.** Los monstruos
   están justo donde los griegos estaban fundando colonias; el poema se compuso
   cuando el griego acababa de adoptar el alfabeto fenicio.
5. **La aclaración sin condescendencia, entre paréntesis**: «los años 800 y 700
   a. C. (a. C. significa antes de Cristo)». Se explica lo que haga falta, una
   vez, sin disculparse.

Y una exclamación en todo el resumen, para el dato más raro: «¡Ni uno solo!».
Una. La regla de no usarlas sigue en pie salvo en ese caso exacto.

**Las cursivas se pueden usar**: el texto de una página admite etiquetas HTML y
`<em>` se pinta resaltado. Van para las palabras en otro idioma —*epos*,
*xenía*— y para nada más.

## 4. Las siete reglas de la prosa

1. **Se cuenta el libro, no su historia.** Nada de cómo se escribió, cómo se
   vendió ni quién es el autor, salvo que sea parte del argumento. Si al
   terminar una página el lector no sabe nada nuevo DEL MUNDO, esa página
   sobra. Es el fallo que Pablo devolvió: la primera página de Sapiens contaba
   que a Harari le endosaron una asignatura y cuánto tardó la traducción.

2. **Lo concreto antes que el adjetivo.** Una cifra, un nombre, una fecha, un
   objeto: seis especies humanas, un uno por ciento de ADN neandertal, el
   techo de los ciento cincuenta. Nunca «numerosos», «fascinante», «enorme».

3. **Una idea por página**, y va en la caja del rayo escrita para repetirse en
   una cena: «No fuimos nosotros quienes domesticamos el trigo».

4. **Se explica, no se arenga.** Ni «te invito a reflexionar», ni «el autor
   nos invita a», ni «descubre». El autor se nombra como quien cita una
   fuente, no como un gurú.

5. **Se dice dónde falla.** Todo libro tiene una parte floja, un dato que
   envejeció mal o una fama que no se corresponde. Va en la conclusión, y es
   lo que separa esto de una contraportada.

6. **Español llano**, del que se lee en voz alta sin tropezar. Frases cortas.
   Sin anglicismos de manual de autoayuda.

7. **La segunda persona, solo cuando sirve.** En un libro práctico —hábitos,
   dinero, empresa— se le habla al lector de tú, que es lo que hace Headway.
   En uno de historia o de ciencia, no: ahí suena a folleto.

### La gramática, mirada de cerca

De la captura de *1984* del 21 de agosto —siete páginas— salen las reglas de
forma. Pablo lo dijo al mandarla: *«no te lo paso para que lo copies, es para
que aprendas la forma de redacción gramatical, la forma de contarlo»*. Esto es
lo que se puede copiar sin copiar nada:

1. **Frases cortas y sujeto explícito.** De quince a veinte palabras, una idea
   por frase, casi sin subordinadas encadenadas. Si una frase necesita dos
   comas para respirar, son dos frases.
2. **Presente para lo general, pasado para lo que pasa dentro del libro.** «El
   totalitarismo es un régimen en el que…» va en presente; «en la novela, el
   clasismo dividía a la sociedad» va en pasado. Mezclarlos marea.
3. **El término se define la primera vez, en la misma frase.** «La propaganda
   es un conjunto concertado de mensajes destinados a influir en grandes
   grupos.» Nunca se usa una palabra técnica y se explica dos párrafos después.
4. **El párrafo abre con la afirmación**, no con el contexto. Primera frase, lo
   que se sostiene; las tres siguientes, por qué. Nada de «conviene recordar
   que antes de nada…».
5. **Conectores llanos y pocos**: por eso, en cambio, además, así que. Fuera
   «no obstante», «asimismo», «cabe destacar», «en este sentido».
6. **Los nombres propios del libro, entre comillas la primera vez**: «Gran
   Hermano», «Policía del Pensamiento», «primer dardo». Después, sin ellas.
7. **La segunda persona entra solo donde el texto se vuelve consejo**, y sale
   en cuanto vuelve a explicar. En medio de una explicación histórica, no.
8. **El párrafo cierra la idea**; no se deja colgando para el siguiente. Y el
   último de la página vuelve al titular con otras palabras.
9. **Párrafos de tres a seis líneas de móvil.** Uno de diez líneas no se lee:
   se salta.

Y el aviso que trae esa misma captura, que es la mejor prueba de la regla (a)
del apartado siguiente: en siete páginas sobre *1984* no aparece ni una vez
Winston, ni Julia, ni O\'Brien, ni la habitación 101, ni la neolengua, ni el
final. Es un ensayo correcto sobre el totalitarismo en general que podría
llevar delante el título de otras cinco novelas. La forma es impecable y el
contenido está vacío: **se copia lo primero y se hace lo contrario con lo
segundo.**

## 4 quater. El color de las palabras teñidas SIGNIFICA algo

Norma de Pablo, 3 de septiembre de 2026:

> «Cuando colorees unas palabras deben tener cierto sentido. Por ejemplo, la
> frase donde hablas de Ferrari deberá ser roja, o la frase donde hablas del
> espacio, pues azul galaxia.»

Vale para todo lo que se tiñe en la app: el `realce` de un «¿Sabías que…?», el
de un short y el destacado de la página de un libro.

**Lo que se elige por el color son LAS PALABRAS TEÑIDAS, no el tema.** Es la
única regla que hay que recordar, y es donde se falla. En «hay más árboles en
la Tierra que estrellas en nuestra galaxia» lo que se tiñe es la galaxia: va en
azul, aunque el dato hable de árboles. En «el plátano es una baya y la fresa
no» lo teñido es la fresa: va en rojo, aunque el dato hable del plátano.

Y **no se rota para variar.** Antes de esta norma, los colores se repartían
como los de las categorías de la estantería —cualquiera vale mientras el de al
lado sea otro—, y eso es justo lo que Pablo quitó. Dos datos del espacio
seguidos van los dos en azul galaxia. Si aburre, el problema es el orden de los
datos, no el color.

Los nueve y cuándo va cada uno:

| color | para qué |
|---|---|
| rojo | lo que es rojo de verdad: un Ferrari, una fresa, la sangre, Nintendo |
| naranja | el calor y el fuego: el verano, el Sol, un cañón; el azafrán de la India |
| oro | el oro, la miel, el plátano, la arena, el amarillo de Módena |
| verde | lo que crece: árboles, plantas, selva |
| mar | el agua y el hielo: el mar, una bañera, Groenlandia, la sangre de un pulpo |
| galaxia | lo de ahí arriba: el espacio, la Luna, las estrellas; y el azul de Oxford |
| morado | la púrpura del que manda: imperios, coronas, Napoleón |
| gris | el gris literal —un flamenco que nace gris— y la ceniza |
| tierra | el marrón: la piedra, el barro, la obra |

Los valores están en `src/styles.css`, en el bloque «LOS COLORES QUE SIGNIFICAN
ALGO». **No son los acentos de categoría de siempre**, y no es capricho: el
mismo color se usa a once puntos en el rótulo y de fondo de un botón con letra
blanca encima, y el ocre de la paleta vieja daba 2,1 de contraste sobre el
papel crema. Estos nueve pasan de 4,5 en los tres sitios.

## 4 quinquies. En un «¿sabías que…?», la frase cuenta el dato ENTERO

Norma de Pablo, 4 de septiembre de 2026, con capturas de una app de
curiosidades: «te paso un ejemplo de cómo me gustan, cosas que se entiendan, es
lo que quiero». Y antes, en la misma tanda: «el título se tiene que entender a
la perfección nada más leerlo».

**La frase grande no es un gancho: es el hecho completo.** Se lee, se entiende y
no hace falta pulsar nada. Puede ser larga —hay titulares de 127 caracteres— y
la respuesta suele ir detrás de dos puntos o de un «porque».

| mal, deja la pregunta puesta | bien, cierra el dato |
|---|---|
| El velcro se copió de una planta | El velcro se copió de las bolitas que se le pegaron en el pantalón a un ingeniero suizo volviendo de cazar |
| En la joroba del camello no hay agua | En la joroba del camello no hay agua: hay grasa, y el agua la guarda en la sangre |
| El país con más gente del mundo ya no es China | El país con más gente del mundo ya no es China: desde 2023 es la India |

**Y lo de detrás del botón deja de ser la explicación.** Pasa a ser lo que
siempre debió: la historia, los nombres y la ráfaga.

**Los números van en CIFRA**, en la frase grande y en el texto de dentro: 300
huesos, 30.000 dientes, 800.000 años, las 10:10. Esto va contra el apartado 5
—«en letra cuando se leen de corrido»— y manda esto, que es más nuevo. En una
frase que se lee de un vistazo, un número escrito con letras hay que leerlo dos
veces. Siguen en letra los que no son cifras: «millones de años» cuando quiere
decir muchísimos, «las dos» cuando es pronombre, y «por ciento».

**Nada detrás de la sorpresa.** Pablo devolvió «hay un planeta donde llueve
cristal, y de lado»: «quita ese de lado, no pinta nada ahí». Un añadido que
abre otra pregunta después del remate estropea la frase entera.

### Y la frase, corta; el dibujo, a línea; la página, sin color

Pablo, 4 de septiembre, después de ver los cien contados enteros: «prefiero que
sean más cortos […] por ejemplo que digas solo "los delfines se ponen nombre"».
Y en la misma frase: «los colores esos que ponen realmente no me gustan, me
parece muy ortera; mejora la estética de la página […] intenta hacer como una
especie de boceto sin colores ni nada, solo con líneas, de dibujos de lo que
estamos hablando; por ejemplo un boceto muy simple de delfines por la página».

Así que la sección queda así, y las tres cosas van juntas:

- **Corta por defecto, larga solo si hace falta.** «Los delfines se ponen
  nombre» ya está completo. Cuando la versión corta deja la pregunta puesta
  —«el velcro se copió de una planta»— se alarga lo justo para cerrarla y ni
  una palabra más. Los cien están entre 21 y 61 caracteres, con 40 de media.
- **Un dibujo por dato**, y no hecho por nosotros. Los primeros los dibujé a
  mano y Pablo los devolvió el mismo día: «no me gustan nada los bocetos, están
  fatal hechos». Tenía razón —un gato y un perro de frente, a ese grosor de
  línea, eran el mismo bulto—. Ahora salen de **Fluent Emoji**, de Microsoft,
  en su variante de alto contraste: mil quinientos dibujos monocromos hechos
  por un equipo de verdad y consistentes entre sí, con licencia MIT. Viven en
  `src/bocetos.tsx`, empotrados uno a uno —se usan 85 de los mil quinientos— y
  con el aviso de copyright escrito en la cabecera del fichero, que es la única
  condición que pone esa licencia. Hay menos dibujos que datos a propósito; el
  que no tenga el suyo se queda con el más cercano de su familia.
- **Y la página en dos tintas.** Fuera el color de acento del rótulo, de la
  frase y de los botones. El trozo que sorprende ya no se tiñe: se subraya con
  una línea finísima, que es lo que haría alguien con un lápiz encima de su
  propia letra. Los botones van de contorno, no macizos, porque un botón
  relleno se convierte en la mancha más oscura de la pantalla y se lleva la
  mirada que tenía que ir a la frase.

**Ojo con la contradicción, que es real:** el apartado 4 quater dice que el
color de las palabras teñidas significa algo. Eso sigue mandando EN LOS SHORTS.
En «¿Sabías que…?» no hay color, y no es un olvido.

### El color entró por el dibujo, no por la letra

Pablo, el mismo 4 de septiembre, viendo los dibujos ya profesionales: «puedes
dibujar más si quieres y pones algún color que otro, por ejemplo un delfín y
con las olas del mar azules; sabes, algún detalle en color para que quede
bonito».

O sea que la página se queda en dos tintas —la letra no vuelve a teñirse— y el
color entra por otro sitio: **cada dibujo va sobre una escena**, que es un
círculo de color muy suave y dos o tres trazos encima. El mar lleva sus olas
azules, el campo su línea de suelo, la noche sus estrellas, el motor sus rayas
de velocidad en rojo. El dibujo en sí sigue sin pintarse: va en la tinta de la
página, encima.

Son once escenas para cien datos, y ese número es la gracia: con una por dato
serían cien pegatinas distintas; con once, el conjunto se lee como una
colección. Están en `src/bocetos.tsx`, en `ESCENAS`.

**Y la escena tiene que decir la verdad.** Es la misma norma del 4 quater, solo
que aplicada al dibujo: el atardecer de Marte usa el mismo sol poniente que el
nuestro, y ahí el círculo naranja MIENTE, porque el dato es justamente que allí
el atardecer es azul. Para eso está el campo `escena` de cada dato, que pisa la
del dibujo. A 4 de septiembre hay doce excepciones así, y todas son iguales de
fondo: **cuando el color de la escena discute con el dato, manda el dato.**

### Y en un short es el mismo criterio, con su propia paleta

Pablo, en la misma tanda: «si hablas de Ferrari, que es lo más relevante, pues
tienes que pintar la frase de Ferrari en rojo, y eso hazlo con el resto de
shorts».

La diferencia con un dato es dónde vive el color. En un short **no tiñe solo
unas palabras: tiñe la pantalla** —el degradado del cartel, la barra de
progreso, el «¿Sabías que…?» del final—, y esas pantallas son oscuras. Los
nueve de arriba están calculados para leerse sobre papel crema y ahí se apagan.
Así que los shorts tienen los suyos, los mismos nueve significados con los
tonos claros del sistema:

| significado | dato (papel crema) | short (pantalla oscura) |
|---|---|---|
| rojo | `--dato-rojo` | `--rojo` |
| fuego, calor, Sol | `--dato-naranja` | `--fuego` |
| oro, miel, arena | `--dato-oro` | `--ochre` |
| lo que crece | `--dato-verde` | `--sage` |
| agua, hielo | `--dato-mar` | `--teal` |
| azul de verdad, espacio | `--dato-galaxia` | `--azul` |
| mente, sueños, imperios | `--dato-morado` | `--plum` |
| piedra, metal, máquinas | `--dato-gris` | `--slate` |
| cuerpo, barro, tierra | `--dato-tierra` | `--clay` |

Tres ejemplos de los 225, para ver el criterio funcionando: los tres shorts de
ojos —azules, marrones y verdes— van en azul, tierra y verde; el ejército de
terracota va en `--clay` y la Alhambra también, porque su titular dice que se
llama así por el color del barro; y Marie Curie va en verde, que es de lo que
brillaba el radio en su mesa.

**Dos shorts seguidos pueden repetir color.** Antes eso era un fallo —el
validador lo miraba— y ahora es lo correcto. Si molesta, lo que se cambia es el
orden del muro, no el color.

**Cuando ninguno encaja, no se inventa uno:** se mira qué palabra se está
tiñendo y, si de verdad no tiene color, se cambia el `realce` por el trozo de
la frase que sí lo tiene. Es lo que se hizo con el pulpo —se teñía «tres
corazones» y ahora se tiñe «la sangre azul»—, y de paso el realce mejoró, que
es lo normal: el trozo con color suele ser el trozo con la sorpresa.

## 4 ter. La prueba del título tapado

Es la comprobación más rápida que existe y detecta el fallo más común. **Tapa
el título del resumen y léelo. Si podría ser el de otros cinco libros, está mal
escrito.**

Dos capturas del 21 de agosto lo demuestran, y las dos son de Headway:

- *1984* en siete páginas, sin que aparezca ni una vez Winston, ni Julia, ni la
  habitación 101, ni la neolengua. Es un ensayo correcto sobre el totalitarismo
  en general.
- *El coraje de no gustar* en siete páginas, sin nombrar a Adler, sin decir que
  el libro entero es un diálogo entre un filósofo y un joven, y sin su idea
  central, la separación de tareas. Es un texto de superación personal que
  serviría igual para otros veinte títulos.

Lo que salva la prueba es siempre lo mismo: **nombres propios, cifras, escenas y
palabras que solo existen en ESE libro.** El apéndice de *1984* escrito en
pasado. Los ciento ocho pretendientes. Las dos arrobas de pasas que costó la
traducción del Quijote. Si un resumen no tiene tres o cuatro cosas de esas, no
se ha leído el libro: se ha leído su tema.

### La prueba de la cifra y el nombre

Es la comprobación más tonta que existe y la única que se puede hacer sin
pensar. **Busca en el resumen entero un número y un nombre propio. Si no hay,
no está escrito.**

Sale de la peor captura de las diecisiete: ocho páginas sobre las ciento doce
técnicas de meditación tántrica en las que la única cifra de todo el texto es
ese ciento doce. Ni el siglo en que se escribió el original —que lo tiene—, ni
la lengua, ni el nombre de quien lo comenta, ni un lugar, ni una escuela, ni
una fecha. Las técnicas aparecen flotando, como si nadie las hubiera escrito
nunca en ningún sitio.

Es el grado máximo del fallo del título tapado. Ahí el problema era que el
resumen podía ser el de otros cinco libros; aquí no hay ningún libro dentro.
Y la prosa lo tapa con adjetivos: «un torbellino de obligaciones diarias», «un
tesoro de antiguas técnicas», «su universalidad puede sorprenderte».

La caja del rayo de esa misma página es el otro extremo del apartado 2 bis:
«la sabiduría fluye a través de las generaciones, nutriéndolas». No es una
idea, es un sonido. En una cena nadie levanta la cabeza.

**Y esto vale para las nueve categorías**, no solo para los libros
espirituales. Un resumen de filosofía sin una fecha, uno de arte sin un cuadro
con nombre y uno de psicología sin un experimento y su año tienen exactamente
el mismo problema, aunque se disimule mejor.

Es además el único fallo de redacción de todos los de este documento que una
máquina puede detectar sin equivocarse, así que no se comprueba a mano:

    node scripts/concreto.mjs

Ojo con hacerlo a ojo con una expresión regular: la primera palabra de cada
frase va en mayúscula, y buscar mayúsculas marca como vacío cualquier resumen
que empiece un párrafo con el apellido del autor. El script lo resuelve
descartando las palabras que aparecen en minúscula en algún otro sitio.

### El «nosotros» de autoayuda

Ese mismo resumen de *El coraje de no gustar* está escrito entero en primera del
plural: «nos enfrentamos», «tememos el cambio», «creamos una presión
innecesaria». Es la voz más blanda que hay, porque no compromete a nadie y
suena a folleto de consulta médica.

La regla, que completa la 4.7:

    libro práctico          TÚ
    ensayo, historia, ciencia   tercera persona
    NOSOTROS                solo cuando se habla de verdad de la especie
                            entera —Sapiens, la evolución— y de nada más

**Y ese «de nada más» tiene una frontera exacta**, que enseña la captura del
*Sapiens* de Headway, del 21 de agosto. Ahí el plural empieza bien: «nuestro
cerebro nos ha convertido en el organismo más influyente de la Tierra» habla de
la especie y es legítimo. Tres páginas después ya está escribiendo «hemos
confundido el lujo con la simplicidad», «este deseo va acompañado de una
hipoteca, hijos y el afán de poseer más» y «¿nos sentimos más relajados con
toneladas de mensajes?». Eso ya no es la especie: es un sermón sobre el estilo
de vida de un lector de clase media occidental, escrito en la voz que no
compromete a nadie.

La regla que se saca: **el «nosotros» vale mientras el sujeto sea el Homo
sapiens de los últimos setenta mil años, y deja de valer en cuanto tiene
hipoteca.** Si la frase se puede discutir mirando la vida de alguien concreto,
ya no era la especie.

## 4 bis. Los ocho casos que dan problemas

Estos salieron escribiendo, uno por uno, y cada uno costó una reescritura. Van
aquí para que la siguiente vez se sepan antes de empezar.

### Una NOVELA no se resume como un ensayo

En un ensayo, el titular afirma lo que el libro sostiene. En una novela, la
tentación es ir contando la trama, y entonces sale el resumen que escribe todo
el mundo. **El titular tiene que seguir afirmando sobre el LIBRO** —qué
sostiene, qué demuestra, qué hace— y no etiquetar un capítulo.

| así sí | así no |
|---|---|
| El Partido no quiere que obedezcas: quiere decidir qué es real | La habitación 101 |
| Lo que hace única a una rosa es el tiempo que le has dedicado | El encuentro con el zorro |

Y hay que contar **lo que casi nadie cuenta**, no lo que todo el mundo sabe sin
haber leído el libro. De *1984*, cualquiera sabe lo del Gran Hermano; casi
nadie sabe que el apéndice está escrito en pasado, o sea que aquel régimen
cayó. De *El principito*, todo el mundo recuerda el zorro; casi nadie recuerda
que el final es una muerte.

### La anécdota famosa suele ser una trampa

Cuando un libro tiene una anécdota que circula por todas partes, conviene
mirarla dos veces antes de meterla:

- **A veces el propio libro la desmonta.** *SPQR* dedica un capítulo a explicar
  por qué desconfiar de las historias de emperadores locos, así que llenar el
  resumen con el caballo de Calígula es hacer justo lo que el libro combate.
- **A veces está limada.** La anécdota de Bukowski con la que abre *El sutil
  arte* omite que trabajó de cartero durante años y escribió sin parar.
- **A veces no ocurrió así.** El caso de Kitty Genovese en *Influencia* se
  cuenta con la versión periodística de 1964, que después se corrigió bastante.

Si se usa igual —porque explica bien algo—, se usa **diciendo lo que se sabe de
ella**. Eso no estropea el resumen: lo hace fiable.

### Un libro delicado no admite la segunda persona

Frankl estuvo tres años en cuatro campos y su mujer, su madre, su padre y su
hermano murieron en ellos. Escribir «tú puedes elegir tu actitud» convierte eso
en un lema de taza. **En un libro escrito desde una desgracia real, tercera
persona siempre**, y con cuidado además en la conclusión: hay frases que,
leídas como fórmula de éxito, dicen algo cruel y falso —que quien se hunde no
puso de su parte—. Cuando una frase famosa se ha desgastado así, la conclusión
tiene que decirlo.

### Lo que pasó DESPUÉS de publicarse forma parte del libro

Casi ningún resumen lo cuenta y es lo que más valor añade, porque no está en la
contraportada ni en la solapa. Va en la conclusión, con lo concreto:

- **Correcciones del propio autor.** Dweck denunció en 2016 que casi todo el
  mundo aplicaba mal su libro. Cialdini añadió un séptimo principio en 2016.
  Kahneman escribió en 2017 que su capítulo del *priming* no se sostenía.
- **Revisiones documentadas.** *Por qué dormimos* recibió en 2019 una crítica
  detallada que encontró cifras infladas y una atribución falsa a la OMS, y su
  autor corrigió puntos en su web.
- **Estudios que se cayeron al replicarse.** El experimento de las nubes de
  azúcar de *Mindset*; varios de los clásicos de *Influencia*.
- **Cifras que ya no son las de entonces.** *Cosmos* da quince mil millones de
  años al universo; hoy se estiman trece mil ochocientos.

**Y una advertencia que vale para todos:** que un autor acertara una vez no
convierte en verdad lo demás. Taleb acertó en 2008 y eso no valida su método,
porque quien avisa cada año de una catástrofe acaba coincidiendo con una — que
es exactamente el sesgo que su propio libro enseña a detectar.

### En ECONOMÍA, todo argumento necesita una persona con nombre

Las dos capturas de economía del 21 de agosto son opuestas y por eso se
entienden juntas: *Economía rosquilla* es una tesis y *La gran apuesta* es un
relato, y la segunda funciona mucho mejor.

La razón es una sola. En siete páginas sobre el producto financiero más
enrevesado que se ha inventado, *La gran apuesta* no explica ni un solo
concepto en abstracto: lo explica siempre a través de alguien. Steve Eisman,
que recorrió Europa y Estados Unidos buscando quien le diera cincuenta
millones. Vincent Daniel. Porter Collins, remero olímpico. Danny Moses.
Michael Burry. John Paulson, que compró miles de millones en permutas. Los
chicos de Cornwall Capital. Un nombre por idea, y la idea se queda.

Y hace bien lo más difícil de la categoría: **el término técnico se traduce y
se define la primera vez.** Escribe «permutas de incumplimiento crediticio
sobre bonos hipotecarios *subprime*» en lugar de dejar las siglas inglesas, y
explica qué es apostar en corto antes de usarlo. Eso es la regla 3 de la
gramática aplicada al caso más difícil que hay.

Las tres trampas de la categoría, entonces:

- **El concepto sin nadie dentro.** Si una página explica un mecanismo
  económico y no aparece ni una persona, ni una empresa, ni una fecha, no se
  va a recordar. La economía se cuenta con quién ganó y quién perdió.
- **Las siglas sin traducir.** Nada de dejar en inglés lo que tiene nombre en
  español, y nada de usar un término y explicarlo dos párrafos después.
- **El dato sin fuente ni año.** Aquí *Economía rosquilla* lo hace bien y
  conviene copiarlo: «se espera que la población mundial alcance los once mil
  millones en 2100, según el informe de Naciones Unidas de 2015». Con nombre y
  con año. Así es como se escribe lo que en el apartado 2 bis está prohibido
  escribir como «la investigación demuestra que».

### En SALUD, la trampa es el género: la prueba del sustituto

Las capturas de *Cortisol* y de un libro sobre mitocondrias, las dos del 21 de
agosto, no se entienden por separado y son demoledoras juntas. Son dos libros
distintos, de dos autores distintos, sobre dos moléculas distintas, y el
resumen es el mismo:

    todo se reduce a X · X está saboteado por la vida moderna
    · aquí tienes cinco hábitos · come bien, duerme, muévete

De ahí sale la comprobación, que es la hermana de la prueba del título tapado y
en esta categoría es todavía más rápida. **Tapa el título y sustituye el nombre
de la molécula.** Si la página funciona igual poniendo cortisol, mitocondrias,
inflamación, microbiota, insulina o cadenas de glicina, esa página no cuenta el
libro: cuenta el género.

Las cuatro señales, con su nombre para poder detectarlas:

- **«Todo se reduce a X».** Es literalmente el titular de una de las dos
  capturas. Ningún fisiólogo sostiene que la salud dependa de una sola
  hormona, y un resumen que repite esa frase como titular ha dejado de
  informar para hacer de altavoz. Cuando un libro reduce todo a una causa, eso
  ES la noticia del resumen, y va dicho.
- **El villano con nombre propio.** «HSD, el saboteador oculto» convierte una
  enzima —la 11 beta-hidroxiesteroide deshidrogenasa tipo 1, que existe y hace
  algo mucho más aburrido— en un personaje de novela. Explicar un mecanismo
  está bien; darle intenciones, no.
- **El consejo que vale para cualquier libro.** «Lleva una dieta equilibrada,
  descansa, duerme bien y haz ejercicio con regularidad» es la intersección de
  los veintiún libros de Salud del catálogo. Si al resumir una página queda
  eso, la página estaba vacía. Lo específico de un libro de salud es la
  DISCREPANCIA: en qué se separa de los demás y con qué prueba.
- **Toxinas sin dosis.** «Estamos expuestos a un sinfín de sustancias
  químicas» no es información: no hay ni una sustancia nombrada, ni una
  cantidad, ni un umbral. La frase con la que nace la toxicología es que la
  dosis hace el veneno, así que un tóxico sin dosis no está dicho.

Y una más, que abre la segunda captura y es una técnica de venta:

- **El cuestionario del horóscopo.** «¿Te sientes cansado todo el tiempo? ¿Te
  cuesta ganar peso? ¿Te pones enfermo más a menudo de lo que te gustaría?»
  Son síntomas tan generales que todo el mundo contesta que sí, y sirven para
  que el lector se reconozca antes de que le hayan demostrado nada. Una entrada
  se abre con un hecho, no con un espejo.

**Por eso en Salud la regla 5 no es opcional ni general: es la mitad del
valor.** Y tiene que ser concreta. En el caso del cortisol, lo que hay que
contar es que aquella hipótesis se vendió con suplementos que decían bloquearlo
y que la autoridad de comercio estadounidense actuó contra sus anunciantes por
publicidad engañosa. Ese párrafo es la diferencia entre un resumen y un folleto,
y Headway no lo escribe nunca.

### En HISTORIA, la trampa es la crónica

Es lo que enseña la captura de *Antiguas civilizaciones*, del 21 de agosto, un
resumen sobre mayas, aztecas e incas.

Hace bien la mitad del trabajo, y es la mitad que más cuesta: está llena de
cosas concretas. El año 2600 antes de Cristo, los olmecas del golfo de México,
los zapotecas —la gente de las nubes— y su ciudad de Monte Albán, las chinampas
del lago Texcoco, la Triple Alianza contra los tepanecas, el apogeo maya entre
250 y 900. Cualquiera de esos datos vale más que un párrafo de adjetivos, y en
eso es un modelo.

Y falla en la otra mitad entera: **no afirma nada en ninguna página.** Es una
línea del tiempo. Pasó esto, y después esto otro, y las cosas empezaron a
mejorar para ellos. Los enlaces entre párrafos son de cuento —«pero la suerte de
los aztecas estaba a punto de cambiar», «desafortunadamente no fueron bien
recibidos»— y al terminar no se ha discutido una sola idea: se ha recitado un
orden de acontecimientos que se puede consultar en cualquier sitio.

La historia es la categoría donde más fácil resulta caer en esto, porque el
material ya viene ordenado por fechas y contarlo en orden parece lo natural.
No lo es:

- **La cronología sirve al argumento, no al revés.** Si la página se puede
  resumir como «y entonces pasó tal cosa», sobra.
- **Cada página sigue teniendo su afirmación discutible.** «Tenochtitlán se
  fundó en una isla» es un dato; «los aztecas ganaron porque construyeron
  tierra donde no la había» es un titular.
- **Los conectores narrativos de suspense se quitan.** «La suerte estaba a
  punto de cambiar» no informa: solo empuja a pasar de página.

### Un libro que PREDICE se resume con el marcador puesto

Es la lección de la captura de *El futuro de nuestra mente*, y vale para todo
el estante de futurología, tecnología y tendencias.

Kaku publicó ese libro en **2014** y lo llenó de pronósticos: telepatía por
interfaz cerebro-máquina, grabar recuerdos y volver a meterlos, subir una mente
a un ordenador, ingeniería inversa del cerebro entero. El resumen de Headway lo
cuenta **en presente y sin fecha**, de modo que el lector de hoy no puede saber
si está leyendo un pronóstico cumplido, uno fallado o uno todavía abierto. Once
años después hay marcador de sobra: los implantes cerebrales han llegado a
ensayos con personas, las prótesis de memoria en el hipocampo se probaron en
pacientes con resultados modestos, y descargar una mente sigue exactamente donde
estaba. Nada de eso aparece.

La regla, entonces:

1. **Se dice el año en la primera página.** En un libro de predicciones la
   fecha no es un dato bibliográfico: es la mitad del sentido de cada frase.
2. **El futuro del libro se escribe en pasado.** No «las máquinas permitirán
   mover cosas con la mente», sino «Kaku predijo en 2014 que…». Cambiar el
   tiempo verbal es lo que separa informar de repetir el folleto.
3. **La conclusión pone el marcador**: qué acertó, qué falló y qué sigue
   abierto, con lo que se sepa hoy. Es la regla 5 aplicada al caso más fácil de
   comprobar que existe, y casi nadie la aplica.

Y sirve de aviso general: cuando un resumen no lleva fecha, el lector supone
que es de ahora. Si el libro tiene diez años y habla del futuro, no decirlo no
es una omisión: es engañar sin querer.

## 5. La ficha del libro

Se ve ANTES que el resumen y se escribe con el mismo cuidado. Son tres cosas
distintas y cada una vive en su fichero:

| qué | dónde | regla |
|---|---|---|
| Subtítulo | `libros/subtitulos.ts` | el REAL de la cubierta. El que no se sepa, no se inventa: se deja sin línea |
| De qué va | `libros/aprenderas.ts` | dos frases, cuarenta palabras. Abre con un dato, no con un titular de suplemento |
| Aprenderás | `libros/puntos.ts` | cinco puntos, **una línea cada uno**, y cada uno es algo que SABRÁS al terminar |

**Un libro sin subtítulo lo dice por escrito.** *Don Quijote*, *1984* o *Matar a
un ruiseñor* no llevan subtítulo en su edición, y ahí la tentación es escribir
uno bonito: «Una niña, un pueblo de Alabama y un juicio perdido» suena bien y es
inventado. Esos libros se apuntan en `SIN_SUBTITULO`, al final de
`subtitulos.ts`, y con eso `revisa-fichas.mjs` los da por completos. Declararlo
es lo que distingue *no lo tiene* de *se me olvidó*, que es justo lo que un
validador no puede adivinar.

Los «Aprenderás» no son el índice. «La habitación 101» no dice nada a quien no
ha leído *1984*; «por qué la tortura busca creencia y no información», sí.

Y van **en minúscula**, como en la referencia: detrás del visto no empieza una
frase, se continúa la del rótulo —aprenderás… esto—.

### LA REGLA DE LOS «APRENDERÁS», que costó reescribir los 223

Pablo los devolvió enteros el 22 de agosto, y el ejemplo que puso lo explica
todo: en el *Diario de Ana Frank* había un punto que decía **«qué pasó la
mañana del 4 de agosto»**.

> «Es que eso no tiene ningún sentido, eso no es aprender algo. Aprender algo
> es tipo cómo una niña sobrevivió…, o algo así.»

Tiene razón, y el fallo era sistemático: los cinco puntos de casi todos los
libros estaban escritos como **preguntas de examen sobre el argumento** —«qué
pasó en Anfield el 26 de mayo de 1989», «cómo acabó su amistad con Malcolm
X»— en lugar de como **conocimientos que el lector se lleva**.

    así NO   qué pasó la mañana del 4 de agosto
    así SÍ   cómo se sobrevive dos años escondido en unos pocos metros

**La prueba, y se aplica punto por punto: léelo sin saber nada del libro. ¿Se
entiende? ¿Suena a algo que valga la pena saber?** Si hace falta haber leído
el libro para saber de qué habla —una fecha, un nombre propio, un episodio—,
está mal.

Las cinco fichas que mandó con la corrección están en
`referencia/fichas-aprenderas/` y son el modelo:

| libro | punto |
|---|---|
| *El alquimista* | cómo las pasiones moldean tu futuro |
| *La metamorfosis* | el coste de ser el sostén de la familia |
| *La metamorfosis* | cómo la culpa corroe la identidad |
| *Frankenstein* | por qué saber cuándo parar es una forma de sabiduría |
| *Frankenstein* | cómo el aislamiento transforma la nostalgia en rabia |
| *El gran Gatsby* | el peligro de construir la identidad en torno a un único sueño |
| *Dar y recibir* | los inconvenientes de recibir siempre |

Ninguno exige haber leído nada, y todos hablan del MUNDO y no del argumento:
«el coste de ser el sostén de la familia» es lo que enseña *La metamorfosis*
sin contar que Gregorio amanece convertido en insecto.

De esas fichas salen además dos correcciones de medida:

- **El tope sube de once palabras a CATORCE.** La referencia llega a catorce
  —«por qué no podemos escapar de nuestro pasado por mucho que nos
  reinventemos»— y el tope anterior obligaba a recortes que estropeaban la
  frase. `ficha-libro.mjs` ya avisa a partir de quince.
- **Un nombre propio solo entra si el punto se entiende igual sin saber quién
  es.** «¿Fue Gregorio el único en transformarse?» vale, porque la pregunta se
  sostiene sola. «Cómo acabó su amistad con Malcolm X», no.

Lo que se puede comprobar a máquina —fechas, años, «qué pasó» en pasado,
longitud, imperativos de folleto— lo marca `node scripts/revisa-puntos.mjs`,
y los 223 lo pasan limpios. Lo que no se puede comprobar a máquina es si un
nombre propio se entiende sin contexto: eso se mira con la prueba de arriba.

### 5 bis. EL SUBTÍTULO ES EL QUE PROMETE

Pablo mandó el 25 de agosto dieciséis capturas de cuatro estantes de Explorar
—Productividad, Dinero e inversiones, Amor y sexo, Sociedad y tecnología—, con
unos ochenta títulos comerciales a la vista, y dijo qué había que mirar:

> «Sobre todo eso que tenga un título bueno pero eso que sea prometedor y tal,
> o al menos el título algunas veces no pero el mensaje cortito sí. Pon más,
> sigue poniendo más de todos los tipos, sobre todo muchos que prometan cosas
> que todo el mundo quiere, promesas de productividad, felicidad, etc.»

Están en `referencia/estantes-promesa/`, y lo que enseñan es una cosa que no
estaba escrita en ningún sitio: **en un estante, el título casi nunca promete
nada; quien promete es el subtítulo, y mide entre cuatro y nueve palabras.**

| título | subtítulo, que es donde está la promesa |
|---|---|
| Cuatro mil semanas | Gestión del tiempo para mortales |
| Hábitos atómicos | Cambios pequeños, resultados extraordinarios |
| Te enseñaré a ser rico | Sin sentimiento de culpabilidad, sin excusas, sin tonterías |
| El millonario automático | Un plan poderoso y sencillo para vivir y acabar rico |
| Side Hustle | Crea un negocio propio sin dejar tu trabajo |
| Crea tu segundo cerebro | Un método probado para organizar tu vida digital |
| La alegría de perderse | Vive más haciendo menos |
| Todo empieza contigo | 9 duras verdades sobre el amor que cambiarán tu vida |
| Céntrate | Las cuatro reglas para el éxito en la era de la distracción |
| El club de las 5 de la mañana | Controla tus mañanas, impulsa tu vida |

Cuatro formas se repiten, y valen las cuatro:

- **La cifra**: «9 duras verdades», «las cuatro reglas», «siete sencillos pasos».
  Promete que hay un número acotado de cosas que aprender.
- **La negación triple**: «sin culpa, sin excusas, sin tonterías». Nombra las
  tres objeciones del lector antes de que las piense.
- **El intercambio**: «vive más haciendo menos», «cambios pequeños, resultados
  extraordinarios». Poco a cambio de mucho, dicho en una línea.
- **El para quién**: «gestión del tiempo para mortales», «una guía total para
  principiantes». Rebaja la exigencia y deja entrar al que se creía incapaz.

**Cómo se aplica esto aquí.** Nuestra regla del apartado 5 sigue en pie y no se
toca: el subtítulo que se pone es el REAL de la cubierta, y el que no se sepa
se declara en `SIN_SUBTITULO`. No se inventa uno bonito. Lo que estas capturas
cambian es **qué libros entran en el catálogo**: hay que buscar y meter los
títulos que ya vienen con una promesa puesta de fábrica, porque son los que se
abren. La primera tanda de treinta y ocho salió de estas capturas.

Y el aviso, que es el mismo de siempre: la promesa la trae el libro, no la
escribimos nosotros. Un resumen de «Te enseñaré a ser rico» sigue teniendo que
decir en su conclusión dónde falla el libro, y eso no lo hace ninguna de estas
ochenta fichas.

### Lo que enseñan las veinte fichas del 21 de agosto

Es la única tanda de FICHAS que hay, y la ficha se ve antes que el resumen, así
que decide si alguien entra. De ahí sale esto:

- **Ellos ponen cuatro «Aprenderás» y nosotros cinco.** Se queda en cinco:
  cabe, y el quinto es justo donde entra lo que no es obvio. Pero conviene
  saber que cuatro también funciona y que el quinto no vale si es relleno.
- **Cinco formas válidas, y usarlas todas.** «Cómo el pensamiento ingenioso da
  forma al espíritu empresarial», «por qué la negociación es vital para una
  empresa nueva», «que tu voz importa», «los músculos que te ayudan a mejorar
  la postura», «elegir la actividad física a la que vas a ceñirte». O sea:
  *cómo*, *por qué*, *que*, un sustantivo con su relativo, y un infinitivo.
  Los nuestros abusan de *cómo* y *por qué*; las otras tres dan variedad.
- **Y dos maneras de estropearlo, las dos en esas capturas.** «Las mayores
  lecciones de vida de Michelle Obama» es el índice del libro entero
  disfrazado de punto: no dice ni una. «Que tu voz importa» es una consigna,
  no algo que se sepa al terminar. La prueba sigue siendo la misma: **si no se
  puede contestar con un dato, no es un «Aprenderás».**

Sobre el «de qué va», las veinte fichas confirman nuestra regla al revés.
Todas empiezan con un imperativo dirigido al lector —«Descubre…», «Domina…»,
«Saca provecho…», «Conoce…», «Inspírate…»— y ninguna abre con un hecho. La
única que trae algo concreto, la de Michelle Obama, lo remata igualmente con
«y verás que todo es posible». **El nuestro abre con un dato y no manda.**

## 6. Lo que ya salió mal, para no repetirlo

- **Contar la historia del libro** en vez del libro. Corregido el 19 de agosto.
- **Poner los títulos de los capítulos como «Aprenderás».** Son cortos y
  concretos, pero cuentan por dónde se pasa, no qué te llevas.
- **Poner las frases de las tarjetas `clave` como «Aprenderás».** Medido: las
  1.476 escritas tienen una mediana de 32 palabras. Son el remate de un
  capítulo, para leerse DESPUÉS de él; sueltas, piden un contexto que no está.
- **Titulares que son etiquetas** («La revolución cognitiva»).

## 7. Antes de dar un libro por terminado

- [ ] **La prueba del título tapado**: ¿podría este resumen ser el de otro libro?
- [ ] **La prueba de la cifra y el nombre**: ¿hay en el resumen entero al menos
      un número y un nombre propio? Si no, no está escrito.
- [ ] ¿Cada titular afirma algo que se pueda discutir?
- [ ] ¿Hay alguna página que hable del libro en vez de su contenido?
- [ ] ¿Cada página tiene su caja del rayo, y se sostiene sola?
- [ ] ¿La conclusión dice dónde falla?
- [ ] ¿Y lo que pasó DESPUÉS de publicarse, si pasó algo?
- [ ] Si el libro predice algo, ¿está el año en la primera página y el marcador
      —qué acertó, qué falló— en la conclusión?
- [ ] Si es novela, ¿los titulares afirman sobre el libro y no cuentan la trama?
- [ ] Si es de historia, ¿hay alguna página que sea solo una línea del tiempo?
- [ ] Si es de salud, **la prueba del sustituto**: ¿funcionaría la página
      cambiando el nombre de la molécula por otra?
- [ ] Si es de economía, ¿hay alguna página sin una persona, una empresa o una
      fecha dentro? ¿Está traducido y definido cada término técnico?
- [ ] ¿Alguna anécdota famosa metida sin comprobar de dónde sale?
- [ ] ¿Las páginas que pide su tamaño, y todas de unas 260 palabras?
- [ ] ¿El tamaño sale de contar sus argumentos, y no de lo famoso que sea?
- [ ] ¿La primera cuenta de dónde parte el libro y anuncia el recorrido?
- [ ] ¿La última se llama «Conclusión» y NO hay ninguna lista de deberes?
- [ ] ¿Están escritos el subtítulo, el «de qué va» y los cinco «Aprenderás»?

---

## Las capturas, guardadas

Las ocho tandas que mandó Pablo están en **`referencia/`**, reescritas a WebP
para que quepan, con un índice que dice qué enseña cada una. No son un recuerdo
de una conversación: son las pruebas de este documento, y se pueden volver a
mirar cuando una regla parezca discutible. La de `referencia/odisea/` es la
mejor escrita de todas y la que conviene mirar antes de empezar un libro.

## Dónde está esto

- Los modelos terminados son **`SAPIENS`** y **`HOMO_DEUS`**, en
  `libros/paginas.ts`. Se copia su forma y ya está. Homo Deus es el primero
  con la entrada y la conclusión del apartado 2.
- `libros/tipos.ts` remite aquí.
- `ESTADO.md` remite aquí, y es lo primero que se lee al empezar de cero.

Cuando lleguen capturas nuevas de Headway, **se leen y se añade lo que
enseñen a este documento**, en la sección que toque. No se guardan como
recuerdo de una conversación: se escriben aquí.
