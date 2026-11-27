// Aktualizacje z Google Play (In-App Updates) + okienko „Co nowego” po aktualizacji.
// Wtyczki natywne: @capawesome/capacitor-app-update (AppUpdate) i @capacitor/app (App) —
// w aplikacji bez bundlera dostępne jako window.Capacitor.Plugins.
// Ładowany PRZED app.js, żeby sprawdzić, czy aplikacja była już używana, zanim cokolwiek zapisze.
(function () {
    'use strict';

    // Przy każdym wydaniu: APP_VERSION = versionName z android/app/build.gradle
    // i nowy wpis NA POCZĄTKU listy CHANGELOG.
    var APP_VERSION = '2.10.0';

    var CHANGELOG = [
        {
            version: '2.10.0',
            items: [
                'Powiadomienie o nowej wersji — aktualizację pobierzesz prosto z aplikacji',
                'Okienko „Co nowego” po każdej aktualizacji'
            ]
        },
        {
            version: '2.9.0',
            items: [
                'Scenka „Kontrola nad wodą” — rozmowa ze strażnikiem rybackim',
                'Quiz wędkarski przed Fischerprüfung'
            ]
        },
        {
            version: '2.8.0',
            items: [
                'Słówka: wędkarstwo i Fischerprüfung — 7 kategorii, 176 słów'
            ]
        }
    ];

    var SEEN_KEY = 'deutsch.lastSeenVersion';
    var SNOOZE_KEY = 'deutsch.updateSnooze';
    var SNOOZE_MS = 2 * 24 * 3600 * 1000; // „Później” chowa propozycję na 2 dni

    function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bez pamięci */ } }

    // Stan aplikacji (postępy, słówka) albo klucz Gemini = ktoś już z niej korzystał.
    var existingUser = ['deutschAppState', 'geminiApiKey', 'weeklyStats', 'todayWords', 'theme']
        .some(function (k) { return get(k) !== null; });

    function cmp(a, b) {
        var pa = a.split('.').map(Number), pb = b.split('.').map(Number);
        for (var i = 0; i < 3; i++) {
            var d = (pa[i] || 0) - (pb[i] || 0);
            if (d) return d;
        }
        return 0;
    }

    // Wpisy do pokazania; pusta lista = nic. Nowa instalacja tylko zapamiętuje wersję.
    // Użytkownik sprzed 2.10.0 nie ma zapisanej wersji — dostaje dwa ostatnie wydania.
    function pendingChangelog() {
        var seen = get(SEEN_KEY);
        if (seen === APP_VERSION) return [];
        if (!seen && !existingUser) { set(SEEN_KEY, APP_VERSION); return []; }
        var upTo = CHANGELOG.filter(function (e) { return cmp(e.version, APP_VERSION) <= 0; });
        if (!seen) return upTo.slice(0, 2);
        return upTo.filter(function (e) { return cmp(e.version, seen) > 0; }).slice(0, 4);
    }

    function plugins() {
        return (window.Capacitor && window.Capacitor.Plugins) || {};
    }
    function isAndroid() {
        return !!(window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform() === 'android');
    }

    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    var CSS = '' +
        '.upd-backdrop{position:fixed;inset:0;z-index:10050;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.55);padding:12px}' +
        '@media (min-width:640px){.upd-backdrop{align-items:center}}' +
        '.upd-card{width:100%;max-width:440px;max-height:80dvh;overflow-y:auto;background:var(--card-bg,#1a1a2e);color:var(--text,#f1f5f9);border:1px solid var(--card-border,rgba(255,255,255,.08));border-radius:24px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.45);margin-bottom:var(--sa-bottom,0px)}' +
        '.upd-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}' +
        '.upd-ico{width:44px;height:44px;border-radius:16px;background:rgba(99,102,241,.18);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}' +
        '.upd-title{font-size:18px;font-weight:700;margin:0}' +
        '.upd-sub{font-size:12px;color:var(--text-muted,#94a3b8);margin:2px 0 0}' +
        '.upd-ver{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--primary-light,#818cf8);margin:0 0 6px}' +
        '.upd-sec{margin-bottom:14px}' +
        '.upd-list{list-style:none;margin:0;padding:0}' +
        '.upd-list li{display:flex;gap:8px;font-size:14px;line-height:1.4;margin-bottom:6px}' +
        '.upd-list li::before{content:"•";color:var(--primary,#6366f1)}' +
        '.upd-ok{margin-top:8px;width:100%;border:0;border-radius:16px;padding:13px;font-size:15px;font-weight:600;color:#fff;background:linear-gradient(135deg,var(--primary,#6366f1),var(--secondary,#a855f7))}' +
        'body.light-mode .upd-card{background:#fff;color:#1e293b;border-color:#e2e8f0}' +
        'body.light-mode .upd-sub{color:#64748b}' +
        'body.light-mode .upd-ver{color:#4f46e5}' +
        '.upd-bar{position:fixed;left:12px;right:12px;bottom:calc(84px + var(--sa-bottom,0px));z-index:10040;max-width:520px;margin:0 auto;display:flex;align-items:center;gap:12px;border-radius:16px;background:rgba(15,15,26,.96);color:#fff;box-shadow:0 10px 30px rgba(0,0,0,.4);padding:12px 14px;border:1px solid rgba(255,255,255,.1)}' +
        '.upd-bar-ico{width:36px;height:36px;border-radius:50%;background:var(--primary,#6366f1);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:17px}' +
        '.upd-bar-txt{flex:1;min-width:0;font-size:14px}' +
        '.upd-bar-txt b{display:block;font-weight:600}' +
        '.upd-bar-txt span{display:block;font-size:12px;color:rgba(255,255,255,.7)}' +
        '.upd-bar-btn{flex-shrink:0;border:0;border-radius:999px;background:var(--primary,#6366f1);color:#fff;font-weight:600;font-size:14px;padding:7px 12px}' +
        '.upd-bar-x{flex-shrink:0;width:28px;height:28px;border:0;border-radius:50%;background:rgba(255,255,255,.15);color:#fff;font-size:13px}';

    function injectCss() {
        if (document.getElementById('upd-css')) return;
        var st = document.createElement('style');
        st.id = 'upd-css';
        st.textContent = CSS;
        document.head.appendChild(st);
    }

    // ---- Co nowego ----
    var backHandle = null;

    function closeNews() {
        set(SEEN_KEY, APP_VERSION);
        var el = document.getElementById('upd-news');
        if (el) el.remove();
        document.removeEventListener('keydown', onKey);
        if (backHandle) {
            Promise.resolve(backHandle).then(function (h) { if (h && h.remove) h.remove(); });
            backHandle = null;
        }
    }
    function onKey(e) { if (e.key === 'Escape') closeNews(); }

    function showNews(list) {
        injectCss();
        var html = '<div class="upd-card" role="dialog" aria-modal="true" aria-labelledby="upd-title">' +
            '<div class="upd-head"><div class="upd-ico">✨</div><div>' +
            '<h2 class="upd-title" id="upd-title">Co nowego w Deutsch Lernen</h2>' +
            '<p class="upd-sub">Wersja ' + esc(APP_VERSION) + '</p></div></div>';
        list.forEach(function (e) {
            html += '<div class="upd-sec">' +
                (list.length > 1 ? '<p class="upd-ver">Wersja ' + esc(e.version) + '</p>' : '') +
                '<ul class="upd-list">' + e.items.map(function (it) { return '<li><span>' + esc(it) + '</span></li>'; }).join('') + '</ul></div>';
        });
        html += '<button type="button" class="upd-ok">Super, dzięki!</button></div>';

        var wrap = document.createElement('div');
        wrap.id = 'upd-news';
        wrap.className = 'upd-backdrop';
        wrap.innerHTML = html;
        wrap.addEventListener('click', function (e) { if (e.target === wrap) closeNews(); });
        wrap.querySelector('.upd-ok').addEventListener('click', closeNews);
        document.body.appendChild(wrap);
        document.addEventListener('keydown', onKey);

        // Systemowy Wstecz zamyka okienko zamiast całej aplikacji
        var App = plugins().App;
        if (App && App.addListener && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
            try { backHandle = App.addListener('backButton', closeNews); } catch (e) { /* bez wtyczki */ }
        }
    }

    // ---- Aktualizacja z Google Play ----
    // installStatus / updateAvailability to liczby z Play Core:
    // UPDATE_AVAILABLE = 2, DOWNLOADING = 2, DOWNLOADED = 11, FAILED = 5, CANCELED = 6.
    var ST = { DOWNLOADING: 2, DOWNLOADED: 11, FAILED: 5, CANCELED: 6 };
    var UPDATE_AVAILABLE = 2;
    var offer = null;

    function snoozed(code) {
        try {
            var s = JSON.parse(get(SNOOZE_KEY) || 'null');
            return !!s && s.code === code && (s.until || 0) > Date.now();
        } catch (e) { return false; }
    }

    function renderBar() {
        var old = document.getElementById('upd-bar');
        if (old) old.remove();
        if (!offer) return;
        injectCss();
        var bar = document.createElement('div');
        bar.id = 'upd-bar';
        bar.className = 'upd-bar';
        var title, hint, buttons = '';
        if (offer.state === 'available') {
            title = 'Dostępna nowa wersja' + (offer.version ? ' ' + esc(offer.version) : '');
            hint = 'Zaktualizuj, żeby mieć nowe lekcje i poprawki';
            buttons = '<button type="button" class="upd-bar-btn" data-a="update">Aktualizuj</button>' +
                '<button type="button" class="upd-bar-x" data-a="later" aria-label="Później">✕</button>';
        } else if (offer.state === 'downloading') {
            title = 'Pobieranie aktualizacji' + (offer.percent != null ? ' — ' + offer.percent + '%' : '…');
            hint = 'Możesz dalej się uczyć';
        } else {
            title = 'Aktualizacja pobrana';
            hint = 'Uruchom ponownie, żeby ją zainstalować';
            buttons = '<button type="button" class="upd-bar-btn" data-a="restart">Uruchom ponownie</button>';
        }
        bar.innerHTML = '<div class="upd-bar-ico">' + (offer.state === 'ready' ? '🔄' : '⬇️') + '</div>' +
            '<div class="upd-bar-txt"><b>' + title + '</b><span>' + hint + '</span></div>' + buttons;
        bar.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('[data-a]');
            if (!a) return;
            var AppUpdate = plugins().AppUpdate;
            if (a.dataset.a === 'later') {
                set(SNOOZE_KEY, JSON.stringify({ code: offer.code, until: Date.now() + SNOOZE_MS }));
                offer = null;
                renderBar();
            } else if (a.dataset.a === 'update') {
                startUpdate();
            } else if (a.dataset.a === 'restart' && AppUpdate) {
                AppUpdate.completeFlexibleUpdate();
            }
        });
        document.body.appendChild(bar);
    }

    function startUpdate() {
        var AppUpdate = plugins().AppUpdate;
        if (!offer || offer.state !== 'available' || !AppUpdate) return;
        var flexible = offer.flexible;
        offer = flexible ? { state: 'downloading', percent: null } : null;
        renderBar();
        var p = flexible ? AppUpdate.startFlexibleUpdate() : AppUpdate.performImmediateUpdate();
        Promise.resolve(p).catch(function () {
            offer = null;
            renderBar();
            try { AppUpdate.openAppStore(); } catch (e) { /* brak Sklepu Play */ }
        });
    }

    function check() {
        var AppUpdate = plugins().AppUpdate;
        if (!AppUpdate) return;
        AppUpdate.getAppUpdateInfo().then(function (info) {
            if (info.installStatus === ST.DOWNLOADED) {
                offer = { state: 'ready' };
                renderBar();
                return;
            }
            if (info.updateAvailability === UPDATE_AVAILABLE && !snoozed(info.availableVersionCode) && !offer) {
                offer = {
                    state: 'available',
                    version: info.availableVersionName,
                    code: info.availableVersionCode,
                    flexible: info.flexibleUpdateAllowed !== false
                };
                renderBar();
            }
        }).catch(function () { /* aplikacja spoza Sklepu Play albo brak sieci — po cichu */ });
    }

    function startUpdates() {
        if (!isAndroid()) return;
        var p = plugins();
        if (!p.AppUpdate) return;
        try {
            p.AppUpdate.addListener('onFlexibleUpdateStateChange', function (s) {
                if (s.installStatus === ST.DOWNLOADED) offer = { state: 'ready' };
                else if (s.installStatus === ST.DOWNLOADING) {
                    offer = {
                        state: 'downloading',
                        percent: s.totalBytesToDownload ? Math.round(((s.bytesDownloaded || 0) / s.totalBytesToDownload) * 100) : null
                    };
                } else if (s.installStatus === ST.FAILED || s.installStatus === ST.CANCELED) offer = null;
                else return;
                renderBar();
            });
            if (p.App && p.App.addListener) p.App.addListener('resume', check);
        } catch (e) { /* bez wtyczki */ }
        setTimeout(check, 2500); // po starcie, żeby nie spowalniać otwarcia
    }

    function init() {
        var news = pendingChangelog();
        if (news.length) showNews(news);
        startUpdates();
    }

    window.DeutschUpdates = { version: APP_VERSION, changelog: CHANGELOG };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
