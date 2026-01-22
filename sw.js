// Service Worker dla Deutsch Lernen PWA
const CACHE_NAME = 'deutsch-lernen-v1';
const urlsToCache = [
    './',
    './index.html',
    './app.js',
    './style.css',
    './words.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

// Instalacja Service Worker
self.addEventListener('install', function(event) {
    console.log('Service Worker: Instalacja...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Service Worker: Cachowanie plików');
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

// Aktywacja Service Worker
self.addEventListener('activate', function(event) {
    console.log('Service Worker: Aktywacja...');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Usuwanie starego cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Przechwytywanie żądań sieciowych
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Zwróć z cache jeśli dostępne
                if (response) {
                    return response;
                }
                
                // Jeśli nie ma w cache, pobierz z sieci
                return fetch(event.request).then(function(response) {
                    // Sprawdź czy odpowiedź jest prawidłowa
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Sklonuj odpowiedź (bo można ją użyć tylko raz)
                    var responseToCache = response.clone();
                    
                    // Dodaj do cache
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                });
            })
            .catch(function() {
                // Jeśli offline i nie ma w cache, zwróć stronę offline
                return caches.match('./index.html');
            })
    );
});

// Obsługa powiadomień push (na przyszłość)
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Czas na naukę niemieckiego! 🇩🇪',
        icon: './icons/icon-192.png',
        badge: './icons/icon-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'learn', title: '📚 Ucz się', icon: './icons/icon-72.png' },
            { action: 'close', title: '❌ Zamknij', icon: './icons/icon-72.png' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Deutsch Lernen', options)
    );
});

// Obsługa kliknięcia w powiadomienie
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'learn') {
        event.waitUntil(
            clients.openWindow('./index.html')
        );
    }
});
