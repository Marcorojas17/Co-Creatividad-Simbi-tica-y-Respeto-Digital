// apps/web/sw.js
const CACHE_NAME = 'kronos-pwa-v1';
const OFFLINE_PAGE = './offline.html';
const ASSETS = [
  './',
  './index.html',
  './offline.html',
  './live.html',
  './live3d.html',
  './glass.css',
  './manifest.webmanifest',
  './gold.js',
  './index.js',
  './security/trace.js',
  './shaders/gold.vert',
  './shaders/gold.frag'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      const results = await Promise.allSettled(ASSETS.map(url => cache.add(url)));
      const failures = results.filter(r => r.status === 'rejected');
      if (failures.length > 0) {
        console.error('[SW] Failed assets:', failures);
        if (process.env.NODE_ENV === 'development') {
          throw new Error('Cache failed');
        } else {
          await cache.add(OFFLINE_PAGE);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (request.method === 'GET' && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => {
        if (request.mode === 'navigate') {
          return caches.match(OFFLINE_PAGE);
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
