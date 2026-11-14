/* Búho · service worker
   Guarda la app en el móvil para que abra sin conexión.
   Al publicar una versión nueva, cambia VERSION para que los móviles la descarguen. */
const VERSION = 'buho-0.1.1-r2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('buho-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skip') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Solo archivos de la propia app. La sincronización con Google va directa a la red.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(caches.match('./index.html').then(r => r || fetch(req)));
    return;
  }
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
