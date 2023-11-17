self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ilearn-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/style.css',
      '/app.js',
      '/background.png',
      '/qr.png',
      '/icone.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
