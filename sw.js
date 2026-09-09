/**
 * KRONOS-28-ITZA-CYMATIC-ELITE — Service Worker
 * La Autoridad Tranquila de los Autores
 * @author Marco Antonio Rojas Valdovinos — KRONOS 28 ITZA
 * @version 0.3.0 — La Autoridad Tranquila
 * @date 2026-09-09
 */

const CACHE_NAME = 'kronos-v0.3.0-20260909';
const OFFLINE_URL = './offline.html';

// Precarga solo los recursos que realmente existen
const PRECACHE_URLS = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',   // ← YA CORREGIDO
];

// Placeholder para imágenes (SVG minimalista)
const IMAGE_PLACEHOLDER = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="#222" />
  <text x="50%" y="50%" font-family="monospace" font-size="14" fill="#666" text-anchor="middle" dy=".3em">◍</text>
</svg>`;

// Install — El primer borrador se guarda
self.addEventListener('install', (event) => {
  console.log('◍ KRONOS SW: Instalando v0.3.0');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.allSettled(
          PRECACHE_URLS.map(url => 
            cache.add(url).catch(err => {
              console.warn('◍ KRONOS SW: No se pudo precachear', url, err);
              return Promise.resolve();
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate — Revisamos con cuidado qué conservar
self.addEventListener('activate', (event) => {
  console.log('◍ KRONOS SW: Activando y limpiando cachés viejos');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('◍ KRONOS SW: Borrando', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch — Cada request es elegir qué detalle conservar
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) return cached;

        return fetch(request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            return response;
          })
          .catch(() => {
            if (request.destination === 'image') {
              return new Response(IMAGE_PLACEHOLDER, {
                headers: { 'Content-Type': 'image/svg+xml' }
              });
            }
            return new Response('Recurso no disponible offline', { status: 404 });
          });
      })
  );
});

// Mensajes — Para que app.js pueda forzar update
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Opcional: Actualización automática periódica (experimental)
// Nota: Requiere registro desde app.js con navigator.serviceWorker.ready + periodicSync
// Actualmente solo funciona en Chrome con permisos y en contexto seguro.
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'kronos-update') {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return Promise.allSettled(
          PRECACHE_URLS.map(url => 
            fetch(url).then(res => cache.put(url, res)).catch(() => {})
          )
        );
      })
    );
  }
});
