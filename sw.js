// Service Worker dla Deutsch Lernen PWA
const CACHE_NAME = 'deutsch-lernen-v14';
const STATIC_FILES = [
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
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_FILES))
    );
    self.skipWaiting();
});

// Aktywacja - usuÅ„ stare cache
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Natychmiastowa aktualizacja na Å¼Ä…danie strony
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Fetch - Network First dla JS/CSS/HTML, Cache First dla obrazÃ³w
self.addEventListener('fetch', event => {
    if (event.request.url.startsWith('chrome-extension://')) return;

    const url = new URL(event.request.url);

    // API Gemini - zawsze sieÄ‡
    if (url.hostname.includes('googleapis.com')) {
        event.respondWith(fetch(event.request));
        return;
    }

    const ext = url.pathname.split('.').pop();
    const isAppFile = ['html', 'js', 'css', 'json'].includes(ext) || url.pathname.endsWith('/');

    if (isAppFile) {
        // Network First: zawsze prÃ³buj pobraÄ‡ Å›wieÅ¼Ä… wersjÄ™
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache First dla obrazÃ³w i ikon
        event.respondWith(
            caches.match(event.request).then(cached => {
                return cached || fetch(event.request).then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                });
            })
        );
    }
});
