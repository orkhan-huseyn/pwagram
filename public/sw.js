self.addEventListener('install', function(event) {
  console.log('[Service worker] Installing service worker....', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service worker] Activating service worker....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
