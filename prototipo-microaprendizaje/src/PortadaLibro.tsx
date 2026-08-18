/* ==========================================================================
   Las portadas de la biblioteca.

   Las de verdad no se pueden usar: la cubierta de un libro es una obra con
   derechos propia, del diseñador y de la editorial, y de los ciento noventa y
   cuatro resúmenes escritos ciento veintidós son de 1971 en adelante. Solo
   treinta y tres son anteriores a 1930 y tendrían una primera edición libre,
   y con eso no se hace una parrilla: saldrían diecisiete de cada cien fichas
   con fotografía y el resto con dibujo, que parece un fallo y no un estilo.

   Así que se dibujan. Y se dibujan como una colección, no como ilustraciones
   sueltas: el mismo esqueleto en las ciento noventa y cuatro —marco, ceja,
   emblema, título y autor— y lo que cambia es el COLOR y el EMBLEMA, que van
   por categoría. Es lo que hacen las colecciones de bolsillo de toda la vida,
   y resuelve de paso lo que pedía la estantería: que la parrilla se lea por
   bloques. Ocho colores, ocho emblemas, ocho familias reconocibles de un
   vistazo.

   Dentro de cada categoría no son idénticas. Del identificador del libro sale
   un número, y de ese número salen las variaciones del emblema: cuántos
   elementos lleva, cómo se inclina, dónde se apoya. Ocho portadas iguales en
   fila se leen como un error de carga.

   El fondo es el papel de la app y no el color: la estantería es oscura, y un
   campo claro con un emblema de color se recorta ahí como un libro de verdad
   en un estante. El color entra por el emblema, las reglas y la ceja.
   ========================================================================== */

import type { CSSProperties } from "react";
import { urlFoto, type Foto } from "./shorts";
import { PORTADAS_TIPO } from "./libros/tipograficas";

/* Un número estable a partir del identificador: la misma portada siempre para
   el mismo libro, sin guardar nada. */
function semilla(id: string): number {
  let n = 0;
  for (let i = 0; i < id.length; i++) n = (n * 31 + id.charCodeAt(i)) >>> 0;
  return n;
}

/* --------------------------------------------------------------------------
   Los ocho emblemas.

   Se dibujan dentro de un cuadrado de 100 y en un solo color, el de la
   categoría, con trazo grueso y formas grandes: a 148 puntos en la parrilla
   —y a 52 en la lista de «Retomar»— lo que no sea rotundo se convierte en
   suciedad. Nada de detalles finos, nada de texto dentro del dibujo.
   -------------------------------------------------------------------------- */

type Emblema = (s: number, c: string) => ReactSvg;
type ReactSvg = React.ReactNode;

/* Historia: arcos, que es lo que queda en pie de casi todo. */
const arcos: Emblema = (s, c) => {
  const n = 2 + (s % 2);
  return (
    <g stroke={c} strokeWidth="3.4" fill="none">
      {Array.from({ length: n }, (_, i) => {
        const ancho = 58 - i * 15;
        const x = 50 - ancho / 2;
        const alto = 46 - i * 8;
        return (
          <path
            key={i}
            d={`M${x} 76 v-${alto - ancho / 2} a${ancho / 2} ${ancho / 2} 0 0 1 ${ancho} 0 v${alto - ancho / 2}`}
          />
        );
      })}
      <line x1="14" y1="76" x2="86" y2="76" strokeWidth="4" />
    </g>
  );
};

/* Filosofía: círculos concéntricos con uno descentrado, la idea que no acaba
   de encajar en el sistema. */
const circulos: Emblema = (s, c) => {
  const desvio = 6 + (s % 7);
  return (
    <g stroke={c} fill="none" strokeWidth="3.2">
      <circle cx="50" cy="50" r="33" />
      <circle cx="50" cy="50" r="21" />
      <circle cx={50 + desvio} cy={50 - desvio / 2} r="8.5" fill={c} stroke="none" />
    </g>
  );
};

/* Ciencia: una órbita y su cuerpo. */
const orbita: Emblema = (s, c) => {
  const giro = (s % 4) * 45 - 30;
  return (
    <g stroke={c} fill="none" strokeWidth="3.2">
      <g transform={`rotate(${giro} 50 50)`}>
        <ellipse cx="50" cy="50" rx="38" ry="15" />
        <ellipse cx="50" cy="50" rx="15" ry="38" opacity="0.45" />
      </g>
      <circle cx="50" cy="50" r="9.5" fill={c} stroke="none" />
    </g>
  );
};

/* Arte: dos planos que se cruzan, uno lleno y otro al aire. */
const planos: Emblema = (s, c) => {
  const lado = s % 2 ? 1 : -1;
  return (
    <g>
      <circle cx={50 - 11 * lado} cy="44" r="25" fill={c} opacity="0.9" />
      <rect
        x={50 - 14 + 11 * lado}
        y="40"
        width="30"
        height="30"
        fill="none"
        stroke={c}
        strokeWidth="3.4"
        transform={`rotate(${12 * lado} 50 55)`}
      />
    </g>
  );
};

/* Literatura: el bloque de texto, que es la forma que tiene una página desde
   lejos, con una línea corta donde acaba el párrafo. */
const renglones: Emblema = (s, c) => {
  const n = 6;
  const cortas = [3 + (s % 3), n - 1];
  return (
    <g stroke={c} strokeWidth="4.2" strokeLinecap="round">
      {Array.from({ length: n }, (_, i) => {
        const y = 26 + i * 10;
        const largo = cortas.includes(i) ? 30 + ((s >> i) % 14) : 56;
        return <line key={i} x1="22" y1={y} x2={22 + largo} y2={y} />;
      })}
    </g>
  );
};

/* Psicología: la espiral, que va al mismo sitio dando vueltas. */
const espiral: Emblema = (s, c) => {
  const vueltas = 22;
  const sentido = s % 2 ? 1 : -1;
  let d = "M50 50";
  for (let i = 1; i <= vueltas; i++) {
    const a = (i / vueltas) * Math.PI * 3.4 * sentido;
    const r = (i / vueltas) * 34;
    d += ` L${(50 + Math.cos(a) * r).toFixed(1)} ${(50 + Math.sin(a) * r).toFixed(1)}`;
  }
  return <path d={d} stroke={c} strokeWidth="3.4" fill="none" strokeLinecap="round" />;
};

/* Economía: barras, y una que se sale. */
const barras: Emblema = (s, c) => {
  const alturas = [22, 34, 28, 46, 38].map((h, i) => h + ((s >> (i * 2)) % 9));
  return (
    <g>
      {alturas.map((h, i) => (
        <rect
          key={i}
          x={18 + i * 14}
          y={78 - h}
          width="9"
          height={h}
          fill={c}
          opacity={i === alturas.length - 1 ? 1 : 0.55 + i * 0.1}
          rx="1.5"
        />
      ))}
      <line x1="14" y1="80" x2="86" y2="80" stroke={c} strokeWidth="3.4" />
    </g>
  );
};

/* Salud: la onda, que es lo que dice que algo sigue funcionando. */
const onda: Emblema = (s, c) => {
  const alto = 12 + (s % 8);
  return (
    <g stroke={c} strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d={`M14 50 h18 l6 -${alto} l8 ${alto * 2} l7 -${alto * 1.4} l5 ${alto * 0.4} h28`}
      />
      <circle cx="50" cy="50" r="30" opacity="0.28" strokeWidth="2.6" />
    </g>
  );
};

const EMBLEMAS: Record<string, Emblema> = {
  Historia: arcos,
  Filosofía: circulos,
  Ciencia: orbita,
  Arte: planos,
  Literatura: renglones,
  Psicología: espiral,
  Economía: barras,
  Salud: onda,
};

/* --------------------------------------------------------------------------
   La portada
   -------------------------------------------------------------------------- */

export function PortadaLibro({
  id,
  titulo,
  autor,
  categoria,
  color,
  tamano,
  foto,
}: {
  id: string;
  titulo: string;
  autor: string;
  categoria: string;
  color: string;
  tamano: number;
  /* La obra que lleva encima, cuando la tiene. Ver `libros/portadas.ts`. */
  foto?: Foto;
}) {
  const s = semilla(id);
  const emblema = EMBLEMAS[categoria] ?? renglones;

  /* Por debajo de noventa puntos —la lista de «Retomar», el destacado— no cabe
     una palabra que se pueda leer. Ahí queda el emblema solo, que a ese tamaño
     es justo lo que hace falta para reconocer el libro que estabas leyendo. */
  const conTexto = tamano >= 90;

  /* Todo se mide contra el lado de la portada, así que la misma pieza sirve a
     52 y a 150 sin una sola medida escrita a mano dos veces. */
  const u = tamano / 100;
  const estilo = {
    "--u": `${u}px`,
    "--tinta-portada": color,
  } as CSSProperties;

  /* El título largo se encoge antes que partirse en cinco líneas. */
  const largo = titulo.length;
  const escala = largo > 34 ? 0.7 : largo > 22 ? 0.82 : 1;

  /* Sobre obra el título va más pequeño que sobre papel. En la de papel el
     título ES la portada y puede ocupar; encima de un cuadro es una etiqueta,
     y a diez puntos del lado tapaba media pintura. */
  const cuerpo = (foto ? 8.2 : 10) * escala;

  /* Los de autoayuda y dinero van con el título gritado, que es como se
     venden de verdad. Ver `libros/tipograficas.ts`: manda sobre la obra,
     porque a estos una fotografía bonita les quita el aire de libro. */
  const tipo = foto ? undefined : PORTADAS_TIPO[id];
  if (tipo) {
    /* El título ocupa la cubierta entera, así que el cuerpo lo decide cuánto
       texto hay y no una escala fija: cuatro palabras cortas piden el doble
       que catorce largas. */
    const palabras = titulo.toUpperCase().split(/\s+/);
    /* Dos límites, y manda el más estrecho. El primero es cuánto texto hay:
       catorce palabras piden menos cuerpo que tres. El segundo es la palabra
       más larga, que es la que de verdad decide, porque una sola palabra no
       se parte y si no cabe de ancho se sale por el filo —«MILLONARIA» se
       salía con el cuerpo que le tocaba por longitud—. Entre el filete de los
       lados quedan 85 unidades y una versal de esta tipografía ocupa unas
       0,85: de ahí el 92, con su pizca de holgura. */
    const largaPalabra = Math.max(...palabras.map((p) => p.length));
    const porLargo = largo > 40 ? 10.5 : largo > 28 ? 12.5 : largo > 18 ? 15 : 19;
    const cuerpo = Math.max(7.5, Math.min(porLargo, 118 / largaPalabra));
    return (
      <div
        className="port port-tipo"
        style={{ ...estilo, "--fondo-tipo": tipo.fondo, "--tinta-tipo": tipo.tinta,
                 "--acento-tipo": tipo.acento ?? tipo.tinta } as CSSProperties}
        data-texto={conTexto ? "si" : "no"}
      >
        <div className="port-tipo-barra" />
        {conTexto ? (
          <>
            <div className="port-tipo-ceja">{categoria}</div>
            <div
              className="port-tipo-titulo"
              style={{ fontSize: `calc(var(--u) * ${cuerpo})` }}
            >
              {palabras.map((p, i) => (
                <span key={i} className={p === tipo.destaca ? "port-tipo-fuerte" : undefined}>
                  {p}{i < palabras.length - 1 ? " " : ""}
                </span>
              ))}
            </div>
            <div className="port-tipo-autor">{autor}</div>
          </>
        ) : (
          /* A 52 puntos no cabe el título: queda la inicial, que es lo que
             hace falta para reconocer cuál estabas leyendo. */
          <div className="port-tipo-inicial">{titulo.trim()[0]}</div>
        )}
      </div>
    );
  }

  /* Con obra encima, la portada es la obra: ocupa el cuadrado entero y el
     texto se apoya sobre un velo que baja de la nada al negro. Sin obra, la
     de siempre: papel, emblema y título. Las dos comparten la ceja y la
     tipografía, así que la parrilla no se rompe mientras se van llenando. */
  if (foto) {
    /* La obra y nada más. El título iba encima con su velo y tapaba media
       pintura; y encima sobraba, porque en la parrilla y en las fichas el
       título y el autor ya van DEBAJO de la portada, en su sitio. Quitarlo es
       lo que pedía Pablo dos veces: que se vea la imagen. Lo único que se
       queda es la ceja de la categoría, y solo en tamaño grande. */
    return (
      <div
        className="port port-obra"
        style={estilo}
        data-texto={conTexto ? "si" : "no"}
      >
        {/* Las cubiertas dibujadas —las que van como `local`— se enseñan
            ENTERAS: son una composición, y recortarlas se come el título o el
            autor. Con `cover` se rellenaba la casilla a costa de cortar, que
            es justo lo que Pablo no quiere. El hueco que deja `contain` lo
            tapa el color del libro, así que no se ve ningún marco. */}
        <img
          className="port-img"
          src={urlFoto(foto, 520)}
          alt={foto.alt}
          /* Ya no hace falta `contain`: la casilla tiene la proporción de la
             cubierta, así que `cover` no recorta nada. Y sin `contain` no
             quedan bandas de color a los lados. */
          style={{ objectPosition: foto.foco ?? "50% 50%" }}
          loading="lazy"
          decoding="async"
        />
        <div className="port-velo" />
      </div>
    );
  }

  return (
    <div
      className="port"
      style={estilo}
      data-texto={conTexto ? "si" : "no"}
      data-largo={escala < 1 ? "si" : "no"}
    >
      <div className="port-marco" />

      {conTexto && <div className="port-ceja">{categoria}</div>}

      <svg className="port-emblema" viewBox="0 0 100 100" aria-hidden>
        {emblema(s, color)}
      </svg>

      {conTexto && (
        <div className="port-pie">
          <div className="port-regla" />
          <div className="port-titulo" style={{ fontSize: `calc(var(--u) * ${cuerpo})` }}>
            {titulo}
          </div>
          <div className="port-autor">{autor}</div>
        </div>
      )}
    </div>
  );
}
