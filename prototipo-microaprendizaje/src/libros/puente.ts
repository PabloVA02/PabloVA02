import type { ComponentType } from "react";
import type { Libro } from "../Biblioteca";
import type { Categoria } from "./catalogo";
import { CATALOGO } from "./catalogo";
import { META_POR_ID } from "./meta";
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

/* Ocho colores distinguibles SOBRE FONDO OSCURO, que es donde vive la
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
      progreso: 0,
      ano: r.ano,
      minutos: r.minutos,
      capitulos: r.capitulos,
      jugable: true,
    } satisfies Libro,
  ];
});

/** Las categorías que tienen al menos un libro escrito, en orden de catálogo. */
export const CATEGORIAS_CON_LIBROS: Categoria[] = [
  ...new Set(LIBROS_RESUMEN.map((l) => l.categoria as Categoria)),
];
