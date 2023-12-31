self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('Neocean').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/style copie.css',
      '/app copie.js',
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
