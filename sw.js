const CACHE_NAME = 'kronos-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './offline.html',
  './live.html',
  './live3d.html',
  './design-system/glass.css',
  './manifest.webmanifest',
  './apps/web/gold.js',
  './apps/web/index.js',
  './apps/web/security/trace.js',
  './shaders/gold.vert',
  './shaders/gold.frag'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./offline.html'))));
});
