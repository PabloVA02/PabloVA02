/* ==========================================================================
   EL IDIOMA DE LA APLICACIÓN

   Pablo, el 5 de septiembre: «el cambio de idioma me gustaría que fuera como
   una pestaña que se abre y ahí puedes cambiarlo automáticamente en la app».

   QUÉ CAMBIA Y QUÉ NO, dicho aquí arriba para que nadie se lleve un chasco.

   Cambia **la interfaz**: los rótulos de la barra, los ajustes enteros y los
   títulos de las secciones. Se traduce eligiendo idioma y se ve en el acto.

   NO cambia **el contenido**: los 400 resúmenes y las 225 historias están
   escritos en español, uno a uno, a mano. Ningún interruptor traduce eso; es
   volver a escribirlos. Por eso hay DOS filas en los ajustes y no una:

       Idioma de la aplicación   ← esto, y funciona
       Idioma del contenido      ← los libros, y hoy solo hay español

   Confundir las dos es la manera de prometer algo que no existe.

   CÓMO SE AÑADE UNA TRADUCCIÓN. Se copia el bloque `es` entero, se traduce y
   se añade el idioma a `IDIOMAS`. Si a un idioma le falta una clave, se cae al
   español en vez de pintar la clave cruda: un hueco se ve raro, pero una
   pantalla que dice «ajustes.idioma» está rota.
   ========================================================================== */

export type Idioma = "es" | "en" | "pt" | "fr" | "de" | "it";

/** Los que se ofrecen, con su nombre EN SU PROPIO IDIOMA. Un menú de idiomas
 *  que escribe «Inglés» en español no le sirve a quien busca el suyo: quien
 *  no entiende la app tiene que reconocer su idioma escrito como él lo
 *  escribe. Por eso «English» y no «Inglés». */
export const IDIOMAS: { id: Idioma; nombre: string; en_espanol: string }[] = [
  { id: "es", nombre: "Español", en_espanol: "Español" },
  { id: "en", nombre: "English", en_espanol: "Inglés" },
  { id: "pt", nombre: "Português", en_espanol: "Portugués" },
  { id: "fr", nombre: "Français", en_espanol: "Francés" },
  { id: "de", nombre: "Deutsch", en_espanol: "Alemán" },
  { id: "it", nombre: "Italiano", en_espanol: "Italiano" },
];

export const NOMBRE_IDIOMA: Record<Idioma, string> = Object.fromEntries(
  IDIOMAS.map((i) => [i.id, i.nombre]),
) as Record<Idioma, string>;

/* Las claves llevan el nombre de lo que dicen y no de dónde salen: `guardar`
   y no `boton_hoja_3`. Un diccionario con nombres de sitio deja de servir en
   cuanto algo se mueve de sitio. */
const es = {
  /* La barra de abajo */
  "nav.libros": "Libros",
  "nav.shorts": "Shorts",
  "nav.explorar": "Explorar",
  "nav.biblioteca": "Biblioteca",

  /* La pantalla de ajustes */
  "aj.titulo": "Ajustes",
  "aj.volver": "Volver",

  "aj.g.app": "La aplicación",
  "aj.idiomaApp": "Idioma de la aplicación",
  "aj.idiomaContenido": "Idioma del contenido",
  "aj.notificaciones": "Notificaciones",
  "aj.objetivo": "Objetivo diario",

  "aj.g.lectura": "Lectura",
  "aj.apariencia": "Apariencia",
  "aj.texto": "Tamaño del texto",
  "aj.seguidos": "Temas que sigues",

  "aj.g.suscripcion": "Suscripción",
  "aj.gestionar": "Gestionar la suscripción",
  "aj.restaurar": "Restaurar compras",
  "aj.regalar": "Regalar Curva",

  "aj.g.legal": "Legal",
  "aj.privacidad": "Política de privacidad",
  "aj.terminos": "Términos de uso",
  "aj.creditos": "Créditos e imágenes",

  "aj.g.cuenta": "Cuenta",
  "aj.cerrar": "Cerrar sesión",
  "aj.borrar": "Borrar cuenta",

  "aj.soporte": "Contactar con soporte",
  "aj.version": "Versión",

  /* La hoja del idioma */
  "idioma.titulo": "Idioma de la aplicación",
  "idioma.pie": "La interfaz cambia al momento. Los libros y las historias están escritos en español.",
  "idioma.contenido.titulo": "Idioma del contenido",
  "idioma.contenido.pie": "Los resúmenes y las historias. Hoy solo están escritos en español.",
  "idioma.proximamente": "Próximamente",
  "idioma.disponible": "Disponible",

  /* Las secciones del inicio */
  "inicio.seguir": "Seguir leyendo",
  "inicio.gratis": "Libro diario gratis",
  "inicio.parati": "Para ti",
  "inicio.parati.sub": "Según lo que te interesa",
  "inicio.best": "Best sellers",
  "inicio.best.sub": "Los más vendidos de siempre",
  "inicio.gratishoy": "Gratis hoy",

  /* LOS VALORES TAMBIÉN SE TRADUCEN, y esto no es un detalle: con la app en
     inglés, una fila que diga «Appearance — Automática» está a medio traducir
     y se ve peor que si no se hubiera traducido nada. El rótulo y su valor son
     una sola frase. */
  "val.auto": "Automática",
  "val.claro": "Claro",
  "val.oscuro": "Oscuro",
  "val.pequeno": "Pequeño",
  "val.normal": "Normal",
  "val.grande": "Grande",
  "val.enorme": "Enorme",
  "val.min": "min",
  "val.ninguno": "—",
};

export type Clave = keyof typeof es;

const en: Partial<Record<Clave, string>> = {
  "nav.libros": "Books", "nav.shorts": "Shorts", "nav.explorar": "Explore", "nav.biblioteca": "Library",
  "aj.titulo": "Settings", "aj.volver": "Back",
  "aj.g.app": "The app",
  "aj.idiomaApp": "App language",
  "aj.idiomaContenido": "Content language",
  "aj.notificaciones": "Notifications",
  "aj.objetivo": "Daily goal",
  "aj.g.lectura": "Reading",
  "aj.apariencia": "Appearance",
  "aj.texto": "Text size",
  "aj.seguidos": "Topics you follow",
  "aj.g.suscripcion": "Subscription",
  "aj.gestionar": "Manage subscription",
  "aj.restaurar": "Restore purchases",
  "aj.regalar": "Gift Curva",
  "aj.g.legal": "Legal",
  "aj.privacidad": "Privacy policy",
  "aj.terminos": "Terms of use",
  "aj.creditos": "Credits and images",
  "aj.g.cuenta": "Account",
  "aj.cerrar": "Sign out",
  "aj.borrar": "Delete account",
  "aj.soporte": "Contact support",
  "aj.version": "Version",
  "idioma.titulo": "App language",
  "idioma.pie": "The interface changes right away. The books and stories are written in Spanish.",
  "idioma.contenido.titulo": "Content language",
  "idioma.contenido.pie": "The summaries and the stories. For now they are only written in Spanish.",
  "idioma.proximamente": "Coming soon",
  "idioma.disponible": "Available",
  "inicio.seguir": "Keep reading",
  "inicio.gratis": "Free book of the day",
  "inicio.parati": "For you",
  "inicio.parati.sub": "Based on what interests you",
  "inicio.best": "Best sellers",
  "inicio.best.sub": "The biggest sellers of all time",
  "inicio.gratishoy": "Free today",
  "val.auto": "Automatic",
  "val.claro": "Light",
  "val.oscuro": "Dark",
  "val.pequeno": "Small",
  "val.normal": "Normal",
  "val.grande": "Large",
  "val.enorme": "Huge",
  "val.min": "min",
  "val.ninguno": "—",
};

const pt: Partial<Record<Clave, string>> = {
  "nav.libros": "Livros", "nav.shorts": "Shorts", "nav.explorar": "Explorar", "nav.biblioteca": "Biblioteca",
  "aj.titulo": "Definições", "aj.volver": "Voltar",
  "aj.g.app": "A aplicação",
  "aj.idiomaApp": "Idioma da aplicação",
  "aj.idiomaContenido": "Idioma do conteúdo",
  "aj.notificaciones": "Notificações",
  "aj.objetivo": "Objetivo diário",
  "aj.g.lectura": "Leitura",
  "aj.apariencia": "Aparência",
  "aj.texto": "Tamanho do texto",
  "aj.seguidos": "Temas que segues",
  "aj.g.suscripcion": "Subscrição",
  "aj.gestionar": "Gerir a subscrição",
  "aj.restaurar": "Restaurar compras",
  "aj.regalar": "Oferecer Curva",
  "aj.g.legal": "Legal",
  "aj.privacidad": "Política de privacidade",
  "aj.terminos": "Termos de utilização",
  "aj.creditos": "Créditos e imagens",
  "aj.g.cuenta": "Conta",
  "aj.cerrar": "Terminar sessão",
  "aj.borrar": "Eliminar conta",
  "aj.soporte": "Contactar o suporte",
  "aj.version": "Versão",
  "idioma.titulo": "Idioma da aplicação",
  "idioma.pie": "A interface muda de imediato. Os livros e as histórias estão escritos em espanhol.",
  "idioma.contenido.titulo": "Idioma do conteúdo",
  "idioma.contenido.pie": "Os resumos e as histórias. Hoje só estão escritos em espanhol.",
  "idioma.proximamente": "Em breve",
  "idioma.disponible": "Disponível",
  "inicio.seguir": "Continuar a ler",
  "inicio.gratis": "Livro diário grátis",
  "inicio.parati": "Para ti",
  "inicio.parati.sub": "Segundo o que te interessa",
  "inicio.best": "Best sellers",
  "inicio.best.sub": "Os mais vendidos de sempre",
  "inicio.gratishoy": "Grátis hoje",
  "val.auto": "Automática",
  "val.claro": "Claro",
  "val.oscuro": "Escuro",
  "val.pequeno": "Pequeno",
  "val.normal": "Normal",
  "val.grande": "Grande",
  "val.enorme": "Enorme",
  "val.min": "min",
  "val.ninguno": "—",
};

const fr: Partial<Record<Clave, string>> = {
  "nav.libros": "Livres", "nav.shorts": "Shorts", "nav.explorar": "Explorer", "nav.biblioteca": "Bibliothèque",
  "aj.titulo": "Réglages", "aj.volver": "Retour",
  "aj.g.app": "L'application",
  "aj.idiomaApp": "Langue de l'application",
  "aj.idiomaContenido": "Langue du contenu",
  "aj.notificaciones": "Notifications",
  "aj.objetivo": "Objectif quotidien",
  "aj.g.lectura": "Lecture",
  "aj.apariencia": "Apparence",
  "aj.texto": "Taille du texte",
  "aj.seguidos": "Thèmes suivis",
  "aj.g.suscripcion": "Abonnement",
  "aj.gestionar": "Gérer l'abonnement",
  "aj.restaurar": "Restaurer les achats",
  "aj.regalar": "Offrir Curva",
  "aj.g.legal": "Mentions légales",
  "aj.privacidad": "Politique de confidentialité",
  "aj.terminos": "Conditions d'utilisation",
  "aj.creditos": "Crédits et images",
  "aj.g.cuenta": "Compte",
  "aj.cerrar": "Se déconnecter",
  "aj.borrar": "Supprimer le compte",
  "aj.soporte": "Contacter le support",
  "aj.version": "Version",
  "idioma.titulo": "Langue de l'application",
  "idioma.pie": "L'interface change aussitôt. Les livres et les histoires sont écrits en espagnol.",
  "idioma.contenido.titulo": "Langue du contenu",
  "idioma.contenido.pie": "Les résumés et les histoires. Ils ne sont écrits qu'en espagnol pour l'instant.",
  "idioma.proximamente": "Bientôt",
  "idioma.disponible": "Disponible",
  "inicio.seguir": "Reprendre la lecture",
  "inicio.gratis": "Livre gratuit du jour",
  "inicio.parati": "Pour toi",
  "inicio.parati.sub": "Selon ce qui t'intéresse",
  "inicio.best": "Best-sellers",
  "inicio.best.sub": "Les plus vendus de tous les temps",
  "inicio.gratishoy": "Gratuit aujourd'hui",
  "val.auto": "Automatique",
  "val.claro": "Clair",
  "val.oscuro": "Sombre",
  "val.pequeno": "Petit",
  "val.normal": "Normal",
  "val.grande": "Grand",
  "val.enorme": "Très grand",
  "val.min": "min",
  "val.ninguno": "—",
};

const de: Partial<Record<Clave, string>> = {
  "nav.libros": "Bücher", "nav.shorts": "Shorts", "nav.explorar": "Entdecken", "nav.biblioteca": "Bibliothek",
  "aj.titulo": "Einstellungen", "aj.volver": "Zurück",
  "aj.g.app": "Die App",
  "aj.idiomaApp": "Sprache der App",
  "aj.idiomaContenido": "Sprache der Inhalte",
  "aj.notificaciones": "Mitteilungen",
  "aj.objetivo": "Tagesziel",
  "aj.g.lectura": "Lesen",
  "aj.apariencia": "Erscheinungsbild",
  "aj.texto": "Schriftgröße",
  "aj.seguidos": "Themen, denen du folgst",
  "aj.g.suscripcion": "Abo",
  "aj.gestionar": "Abo verwalten",
  "aj.restaurar": "Käufe wiederherstellen",
  "aj.regalar": "Curva verschenken",
  "aj.g.legal": "Rechtliches",
  "aj.privacidad": "Datenschutzerklärung",
  "aj.terminos": "Nutzungsbedingungen",
  "aj.creditos": "Bildnachweise",
  "aj.g.cuenta": "Konto",
  "aj.cerrar": "Abmelden",
  "aj.borrar": "Konto löschen",
  "aj.soporte": "Support kontaktieren",
  "aj.version": "Version",
  "idioma.titulo": "Sprache der App",
  "idioma.pie": "Die Oberfläche wechselt sofort. Die Bücher und Geschichten sind auf Spanisch geschrieben.",
  "idioma.contenido.titulo": "Sprache der Inhalte",
  "idioma.contenido.pie": "Die Zusammenfassungen und Geschichten. Bisher nur auf Spanisch.",
  "idioma.proximamente": "Demnächst",
  "idioma.disponible": "Verfügbar",
  "inicio.seguir": "Weiterlesen",
  "inicio.gratis": "Gratis-Buch des Tages",
  "inicio.parati": "Für dich",
  "inicio.parati.sub": "Nach deinen Interessen",
  "inicio.best": "Bestseller",
  "inicio.best.sub": "Die meistverkauften aller Zeiten",
  "inicio.gratishoy": "Heute gratis",
  "val.auto": "Automatisch",
  "val.claro": "Hell",
  "val.oscuro": "Dunkel",
  "val.pequeno": "Klein",
  "val.normal": "Normal",
  "val.grande": "Groß",
  "val.enorme": "Sehr groß",
  "val.min": "Min.",
  "val.ninguno": "—",
};

const it: Partial<Record<Clave, string>> = {
  "nav.libros": "Libri", "nav.shorts": "Shorts", "nav.explorar": "Esplora", "nav.biblioteca": "Libreria",
  "aj.titulo": "Impostazioni", "aj.volver": "Indietro",
  "aj.g.app": "L'app",
  "aj.idiomaApp": "Lingua dell'app",
  "aj.idiomaContenido": "Lingua dei contenuti",
  "aj.notificaciones": "Notifiche",
  "aj.objetivo": "Obiettivo giornaliero",
  "aj.g.lectura": "Lettura",
  "aj.apariencia": "Aspetto",
  "aj.texto": "Dimensione del testo",
  "aj.seguidos": "Argomenti che segui",
  "aj.g.suscripcion": "Abbonamento",
  "aj.gestionar": "Gestisci l'abbonamento",
  "aj.restaurar": "Ripristina gli acquisti",
  "aj.regalar": "Regala Curva",
  "aj.g.legal": "Note legali",
  "aj.privacidad": "Informativa sulla privacy",
  "aj.terminos": "Termini d'uso",
  "aj.creditos": "Crediti e immagini",
  "aj.g.cuenta": "Account",
  "aj.cerrar": "Esci",
  "aj.borrar": "Elimina l'account",
  "aj.soporte": "Contatta l'assistenza",
  "aj.version": "Versione",
  "idioma.titulo": "Lingua dell'app",
  "idioma.pie": "L'interfaccia cambia subito. I libri e le storie sono scritti in spagnolo.",
  "idioma.contenido.titulo": "Lingua dei contenuti",
  "idioma.contenido.pie": "I riassunti e le storie. Per ora sono scritti solo in spagnolo.",
  "idioma.proximamente": "Prossimamente",
  "idioma.disponible": "Disponibile",
  "inicio.seguir": "Continua a leggere",
  "inicio.gratis": "Libro gratis del giorno",
  "inicio.parati": "Per te",
  "inicio.parati.sub": "In base a ciò che ti interessa",
  "inicio.best": "Best seller",
  "inicio.best.sub": "I più venduti di sempre",
  "inicio.gratishoy": "Gratis oggi",
  "val.auto": "Automatico",
  "val.claro": "Chiaro",
  "val.oscuro": "Scuro",
  "val.pequeno": "Piccolo",
  "val.normal": "Normale",
  "val.grande": "Grande",
  "val.enorme": "Enorme",
  "val.min": "min",
  "val.ninguno": "—",
};

const TABLA: Record<Idioma, Partial<Record<Clave, string>>> = { es, en, pt, fr, de, it };

/** Traduce. Si al idioma le falta la clave, cae al español; si tampoco está
 *  ahí —o sea, una clave inventada— devuelve la propia clave, que es feo pero
 *  se ve y se arregla. Lo que no puede pasar es que la pantalla se rompa. */
export function traduce(idioma: Idioma, clave: Clave): string {
  return TABLA[idioma]?.[clave] ?? es[clave] ?? clave;
}
