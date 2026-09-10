// KRONOS-28-ITZA // 289 PLATINUM // SERVICE WORKER 10/10
// BANAMEX CLABE: 002438701524066473
// SHA-256: 41a3683bbf83296eeb45da9b0e0ea5a7c095e78b493772e79520a92dbc39f4c3
// SafeCreative: 2607086319439-6XGR3V

const CACHE_NAME = 'kronos-289-platinum-v1-41a3683b';
const ASSETS = [
  '/',
  '/nexo',
  '/diamante',
  '/tema.js',
  '/manifest.json',
  '/favicon.ico'
];

self.addEventListener('install', (e) => {
  console.log('[KRONOS 289] Install • BANAMEX 002438701524066473');
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache skip', err));
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('[KRONOS 289] Activate • 100 años IPFS');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key!== CACHE_NAME) {
            console.log('[KRONOS 289] Borrando cache viejo', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Estrategia: Stale-while-revalidate - ultra rápido 131ms
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request)
       .then((network) => {
          // Guarda en cache si es válido
          if (network.ok && e.request.method === 'GET' &&!e.request.url.includes('chrome-extension')) {
            const clone = network.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return network;
        })
       .catch(() => {
          // Offline fallback - LEGADO ETERNO
          if (e.request.destination === 'document') {
            return caches.match('/');
          }
        });
      return cached || fetchPromise;
    })
  );
});

// Push para notificar cuando su legado esté minteado
self.addEventListener('push', (e) => {
  const data = e.data? e.data.json() : { title: 'KRONOS 289 PLATINUM', body: 'Tu Diamante Eterno está listo • 002438701524066473' };
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-72.png',
      vibrate: [200, 100, 200],
      data: { url: '/' }
    })
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow(e.notification.data.url || 'https://wa.me/527225862335')
  );
});

// Mensaje desde la app
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'GENERATE_CODE') {
    const codigo = `KRONOS-289-${Date.now()}-${e.data.ref}-41a3683b`;
    e.ports[0].postMessage({ codigo, clabe: '002438701524066473', whatsapp: '7225862335' });
  }
});
