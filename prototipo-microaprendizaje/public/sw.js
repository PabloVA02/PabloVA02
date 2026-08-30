/* ==========================================================================
   EL TRABAJADOR DE SERVICIO: que la app abra sin conexión y arranque rápido

   Lo que hace, y no más: guarda en el móvil lo que ya se ha descargado y lo
   sirve de ahí la próxima vez. Sin esto, «añadir a pantalla de inicio» deja un
   icono bonito que se queda en blanco en el metro.

   DOS ESTRATEGIAS, Y LA DIFERENCIA IMPORTA:

   · El documento va a RED PRIMERO. Así, cuando se publique una versión nueva,
     Pablo la ve al abrir y no se queda con la de ayer. Si no hay red, se sirve
     la copia guardada.
   · Todo lo demás —el código, la letra, las fotografías— va a CACHÉ PRIMERO.
     Son ficheros con el hash en el nombre: si cambian, cambia el nombre, así
     que servir el guardado nunca da una versión vieja.

   Y el nombre del caché lleva versión: al cambiarlo se borra el anterior
   entero. Es la manera de no acumular tres compilaciones en el teléfono.
   ========================================================================== */
const CACHE = "curva-v1";

self.addEventListener("install", (e) => {
  /* Sin lista de precarga a propósito: el paquete son decenas de megas de
     fotografías y bajarlas todas de golpe en la instalación es maleducado.
     Se guarda lo que se vaya usando. */
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const pet = e.request;
  if (pet.method !== "GET") return;

  const esDocumento = pet.mode === "navigate";
  if (esDocumento) {
    e.respondWith(
      fetch(pet)
        .then((r) => {
          const copia = r.clone();
          caches.open(CACHE).then((c) => c.put(pet, copia));
          return r;
        })
        .catch(() => caches.match(pet).then((r) => r || caches.match("./index.html"))),
    );
    return;
  }

  e.respondWith(
    caches.match(pet).then((guardado) => {
      if (guardado) return guardado;
      return fetch(pet).then((r) => {
        /* Solo se guarda lo que salió bien y es nuestro o de un sitio que
           responde entero: una respuesta parcial guardada rompe la imagen. */
        if (r.ok && r.status === 200 && (r.type === "basic" || r.type === "cors")) {
          const copia = r.clone();
          caches.open(CACHE).then((c) => c.put(pet, copia));
        }
        return r;
      });
    }),
  );
});
