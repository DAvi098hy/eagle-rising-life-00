// Service Worker para Cache de Longa Duração
const CACHE_NAME = 'eagle-rising-v1';
const STATIC_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 dias

const CACHE_RESOURCES = [
  '/',
  '/index.html',
  '/lofi-ambient.wav',
  '/guarantee-7-days.png',
  '/guarantee-seal.png',
];

// Instala o Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_RESOURCES);
    })
  );
  self.skipWaiting();
});

// Ativa o Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Intercepta requests para implementar cache strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache strategy para assets estáticos
  if (
    request.destination === 'image' ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'audio'
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            // Verifica se o cache não expirou
            const cachedDate = new Date(cachedResponse.headers.get('date'));
            const now = new Date();
            if (now.getTime() - cachedDate.getTime() < STATIC_CACHE_DURATION) {
              return cachedResponse;
            }
          }

          // Busca nova versão e atualiza cache
          return fetch(request).then((response) => {
            if (response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          });
        });
      })
    );
  }

  // Network first para HTML
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(request);
      })
    );
  }
});