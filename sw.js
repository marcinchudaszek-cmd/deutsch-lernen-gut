// Service Worker dla Deutsch Lernen PWA
const CACHE_NAME = 'deutsch-lernen-v2';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './words.js',
    './grammar.js',
    './achievements.js',
    './ai-chat.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Instalacja
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Cache error:', err))
    );
    self.skipWaiting();
});

// Aktywacja
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch - strategia Network First dla API, Cache First dla statycznych
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Dla API Gemini - zawsze sieć
    if (url.hostname.includes('googleapis.com')) {
        event.respondWith(fetch(event.request));
        return;
    }
    
    // Dla reszty - Cache First z fallback na sieć
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    });
            })
            .catch(() => {
                // Offline fallback
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});
