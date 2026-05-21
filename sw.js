// Service Worker dla Deutsch Lernen PWA
const CACHE_NAME = 'deutsch-lernen-v12';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './words.js',
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

// Natychmiastowa aktualizacja na żądanie strony
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Fetch
self.addEventListener('fetch', event => {
    // Ignoruj rozszerzenia Chrome
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    
    const url = new URL(event.request.url);
    
    // Dla API Gemini - zawsze sieÄ‡
    if (url.hostname.includes('googleapis.com')) {
        event.respondWith(fetch(event.request));
        return;
    }
    
    // Dla reszty - Cache First z fallback na sieÄ‡
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
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});
