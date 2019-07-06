var CACHE_VERSION = 1;

var CURRENT_CACHES = {
  static: 'static-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  console.log('[Service worker] Installing service worker....', event);
  event.waitUntil(
    caches.open(CURRENT_CACHES['static'])
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.add('/src/js/app.js');
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service worker] Activating service worker....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
