import type { ComponentType } from "react";
import type { Libro } from "../Biblioteca";
import type { Categoria } from "./catalogo";
import { CATALOGO } from "./catalogo";
import { META_POR_ID } from "./meta";
import { PAGINAS, minutosDePaginas } from "./paginas";
import { APRENDERAS } from "./aprenderas";
import { SUBTITULOS } from "./subtitulos";
import { PORTADAS_LIBRO } from "./portadas";
import {
  AmanteArte, AmanteArteVB, Analisis, AnalisisVB, ArtistaTrabajando, ArtistaTrabajandoVB,
  Aventura, AventuraVB, Descubrir, DescubrirVB, Docente, DocenteVB, Explorando, ExplorandoVB,
  FormarIdeas, FormarIdeasVB, Graficos, GraficosVB, IdeaConceptual, IdeaConceptualVB,
  LecturaTranquila, LecturaTranquilaVB, Lectora, LectoraVB, Leyendo, LeyendoVB,
  LluviaIdeas, LluviaIdeasVB, LuzLuna, LuzLunaVB, MapaAventura, MapaAventuraVB,
  Memoria, MemoriaVB, Museo, MuseoVB, PensarArte, PensarArteVB, Puntos, PuntosVB,
  TardeNoche, TardeNocheVB, Tendencias, TendenciasVB,
} from "../undraw";

/* ==========================================================================
   El puente entre el catálogo y la pantalla.

   Los resúmenes se escriben como datos puros —sin saber nada de React— y la
   biblioteca necesita fichas con portada, color y capítulos. Aquí se traduce
   lo uno en lo otro, y solo para los libros que están escritos de verdad:
   `META_POR_ID` es la única fuente. Un libro que figure en el catálogo pero
   no tenga texto no aparece en la estantería, que es exactamente lo que hay
   que evitar — una portada bonita que al tocarla no lleva a ninguna parte.

   Se trabaja con los metadatos y no con los resúmenes enteros a propósito:
   pintar la estantería no necesita el texto, y pedirlo obligaba a descargar
   los doscientos libros para enseñar doscientas portadas.

   El color va por categoría, para que la parrilla se lea por bloques, y la
   ilustración rota dentro de cada categoría: ocho portadas idénticas en fila
   se leen como un error de carga, no como un estilo.
   ========================================================================== */

type Pieza = { Comp: ComponentType<{ banda: "fondo" | "medio" | "frente" }>; vb: string };

/* Nueve colores distinguibles SOBRE FONDO OSCURO, que es donde vive la
   estantería. Los tonos «deep» de la paleta se hicieron para el papel: sobre
   el oscuro se hunden y el chip de categoría deja de leerse. */
const PALETA: Record<Categoria, string> = {
  Historia: "var(--clay)",
  Filosofía: "var(--plum-light)",
  Ciencia: "var(--slate)",
  Arte: "var(--clay-light, #d9895f)",
  Literatura: "var(--plum)",
  Psicología: "var(--sage-light, #9aab88)",
  Economía: "var(--ochre)",
  Salud: "var(--sage)",
  Deportes: "var(--teal)",
};

const ARTES: Record<Categoria, Pieza[]> = {
  Historia: [
    { Comp: MapaAventura, vb: MapaAventuraVB },
    { Comp: Aventura, vb: AventuraVB },
    { Comp: Explorando, vb: ExplorandoVB },
  ],
  Filosofía: [
    { Comp: PensarArte, vb: PensarArteVB },
    { Comp: IdeaConceptual, vb: IdeaConceptualVB },
    { Comp: FormarIdeas, vb: FormarIdeasVB },
  ],
  Ciencia: [
    { Comp: Descubrir, vb: DescubrirVB },
    { Comp: LluviaIdeas, vb: LluviaIdeasVB },
    { Comp: Analisis, vb: AnalisisVB },
  ],
  Arte: [
    { Comp: Museo, vb: MuseoVB },
    { Comp: AmanteArte, vb: AmanteArteVB },
    { Comp: ArtistaTrabajando, vb: ArtistaTrabajandoVB },
  ],
  Literatura: [
    { Comp: Lectora, vb: LectoraVB },
    { Comp: Leyendo, vb: LeyendoVB },
    { Comp: LecturaTranquila, vb: LecturaTranquilaVB },
  ],
  Psicología: [
    { Comp: Memoria, vb: MemoriaVB },
    { Comp: Puntos, vb: PuntosVB },
    { Comp: Docente, vb: DocenteVB },
  ],
  Economía: [
    { Comp: Graficos, vb: GraficosVB },
    { Comp: Tendencias, vb: TendenciasVB },
    { Comp: Analisis, vb: AnalisisVB },
  ],
  Salud: [
    { Comp: LuzLuna, vb: LuzLunaVB },
    { Comp: TardeNoche, vb: TardeNocheVB },
    { Comp: LecturaTranquila, vb: LecturaTranquilaVB },
  ],
  /* Deportes no tiene ilustración propia todavía: van las tres de movimiento
     y superación que ya existen, que es mejor que dejarlo sin portada. Si
     Pablo dibuja cubiertas para estos, dejan de verse. */
  Deportes: [
    { Comp: Aventura, vb: AventuraVB },
    { Comp: Explorando, vb: ExplorandoVB },
    { Comp: Tendencias, vb: TendenciasVB },
  ],
};

/** Cuántos van ya de cada categoría, para ir rotando la ilustración. */
const vistos = {} as Record<Categoria, number>;

/* Se recorre el catálogo y no los metadatos a propósito: así el orden de la
   estantería es el del registro —agrupado por categoría— y no el orden
   arbitrario en que se fueron escribiendo los ficheros. */
export const LIBROS_RESUMEN: Libro[] = CATALOGO.flatMap((ficha) => {
  const r = META_POR_ID[ficha.id];
  if (!r) return [];

  const n = (vistos[ficha.categoria] = (vistos[ficha.categoria] ?? 0) + 1);
  const arte = ARTES[ficha.categoria][(n - 1) % ARTES[ficha.categoria].length];

  return [
    {
      id: r.id,
      titulo: r.titulo,
      autor: r.autor,
      /* El gancho es la frase que decide si alguien entra o pasa de largo, así
         que va donde primero se mira: bajo el título, en la ficha. */
      subtitulo: r.gancho,
      gancho: r.porQue,
      categoria: ficha.categoria,
      color: PALETA[ficha.categoria],
      Arte: arte.Comp,
      vb: arte.vb,
      portada: PORTADAS_LIBRO[r.id],
      progreso: 0,
      ano: r.ano,
      minutos: r.minutos,
      capitulos: r.capitulos,
      jugable: true,
    } satisfies Libro,
  ];
});

/* -------------------------------------------------------------------------
   LOS LIBROS DEL FORMATO NUEVO

   `META_POR_ID` sale de los resúmenes por tarjetas, que es el formato viejo.
   Un libro escrito con el molde de `REDACCION.md` —ocho páginas a mano en
   `paginas.ts`— no tiene tarjetas ni tiene por qué tenerlas, y sin esto no
   podría existir: se quedaba fuera de la estantería por no llevar un formato
   que precisamente se está abandonando.

   Así que después del recorrido de arriba se añaden los que están en el
   catálogo, tienen páginas escritas y no tienen tarjetas. Todo lo que la
   estantería necesita sale de sitios que ya existen:

     título, autor, año   del catálogo, que es el registro de verdad
     subtítulo            de `subtitulos.ts`, y si no lo tiene, del catálogo
     gancho               de `aprenderas.ts`, el «de qué trata» de la ficha
     capítulos            de los titulares de sus ocho páginas
     minutos              contando sus palabras a 200 por minuto, que es leer

   Un libro del catálogo sin tarjetas Y SIN PÁGINAS sigue sin aparecer, que es
   lo que hay que evitar: una portada bonita que al tocarla no lleva a ningún
   sitio. */
const CON_PAGINAS: Libro[] = CATALOGO.flatMap((ficha) => {
  if (META_POR_ID[ficha.id]) return [];
  const paginas = PAGINAS[ficha.id];
  if (!paginas?.length) return [];

  const n = (vistos[ficha.categoria] = (vistos[ficha.categoria] ?? 0) + 1);
  const arte = ARTES[ficha.categoria][(n - 1) % ARTES[ficha.categoria].length];

  return [
    {
      id: ficha.id,
      titulo: ficha.titulo,
      autor: ficha.autor,
      subtitulo: SUBTITULOS[ficha.id] ?? ficha.titulo,
      gancho: APRENDERAS[ficha.id] ?? "",
      categoria: ficha.categoria,
      color: PALETA[ficha.categoria],
      Arte: arte.Comp,
      vb: arte.vb,
      portada: PORTADAS_LIBRO[ficha.id],
      progreso: 0,
      ano: ficha.ano,
      /* La cifra de OÍRLO, no la de leer. Estaba contada aquí a mano y
         dividida por 200 —velocidad de lectura—, así que la estantería decía
         13 minutos de un libro cuya ficha decía 18: el mismo libro con dos
         cifras distintas en dos pantallas. La regla está en REDACCION.md,
         apartado 2 ter, y la cuenta buena la hace `minutosDePaginas()`, que
         es la que ya usaba `Biblioteca.tsx`. Corregido el 21 de agosto. */
      minutos: minutosDePaginas(paginas),
      /* Los capítulos son los titulares de las páginas: es lo que se enseña en
         «Aprenderás» cuando un libro no tiene sus cinco puntos escritos. */
      capitulos: paginas
        .map((pag) => pag.bloques.find((b) => b.b === "rotulo"))
        .filter((b) => b?.b === "rotulo")
        .map((b) => ({ titulo: (b as { texto: string }).texto })),
      jugable: true,
    } satisfies Libro,
  ];
});

LIBROS_RESUMEN.push(...CON_PAGINAS);

/** Las categorías que tienen al menos un libro escrito, en orden de catálogo. */
export const CATEGORIAS_CON_LIBROS: Categoria[] = [
  ...new Set(LIBROS_RESUMEN.map((l) => l.categoria as Categoria)),
];
