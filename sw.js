// Service Worker dla Deutsch Lernen PWA
const CACHE_NAME = 'deutsch-lernen-v17';
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

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_FILES))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

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
        // Stale While Revalidate: od razu z cache, w tle pobiera nowÄ… wersjÄ™
        event.respondWith(
            caches.open(CACHE_NAME).then(cache =>
                cache.match(event.request).then(cached => {
                    const fetchPromise = fetch(event.request).then(response => {
                        if (response && response.status === 200) {
                            cache.put(event.request, response.clone());
                        }
                        return response;
                    }).catch(() => cached);

                    return cached || fetchPromise;
                })
            )
        );
    } else {
        // Cache First dla obrazÃ³w
        event.respondWith(
            caches.match(event.request).then(cached =>
                cached || fetch(event.request).then(response => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                })
            )
        );
    }
});
