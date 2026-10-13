// ==================== CZAT AI Z GOOGLE GEMINI ====================

// Klucz API
function getGeminiApiKey() { 
    return localStorage.getItem('geminiApiKey') || ''; 
}

function setGeminiApiKey(key) { 
    localStorage.setItem('geminiApiKey', key); 
}

function hasApiKey() { 
    return getGeminiApiKey().length > 10; 
}

// Modele w kolejności preferencji.
// 'gemini-flash-latest' to alias, który Google sam przestawia na aktualny model —
// dzięki temu apka przeżyje kolejne wycofania (stare modele zwracają 404
// "no longer available to new users" dla nowo utworzonych kluczy API).
const GEMINI_MODELS = ['gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.6-flash', 'gemini-2.5-flash'];

// Modele 3.x domyślnie "myślą" na poziomie medium — w czacie to kilka sekund
// czekania na 2 zdania. Low wystarcza; 2.5 wyłącza myślenie budżetem 0.
function thinkingConfigFor(model) {
    if (/^gemini-2\.5/.test(model)) return { thinkingBudget: 0 };
    return { thinkingLevel: 'low' };
}

// Czy błąd oznacza "ten model nie działa" (warto spróbować następnego)?
function isModelUnavailable(status, message) {
    if (status === 404) return true;
    return /no longer available|not available|not found|not supported|unsupported/i.test(message || '');
}

// Czy model jest chwilowo przeciążony / wyczerpał limit?
// Warto wtedy sięgnąć po inny model (każdy ma własną pulę) i powtórzyć próbę.
function isOverloaded(status, message) {
    if (status === 503 || status === 429) return true;
    return /high demand|overloaded|try again later|temporarily|rate limit|quota|exhausted/i.test(message || '');
}

function geminiSleep(ms) {
    return new Promise(function(resolve) { setTimeout(resolve, ms); });
}

// Krótki komunikat po polsku — na fiszce jest mało miejsca,
// a surowe błędy Google potrafią mieć kilka linijek po angielsku.
// Pełna treść i tak trafia do konsoli w geminiGenerate().
function shortAiError(message) {
    const m = message || '';
    if (/api key not valid|api_key_invalid|invalid api key/i.test(m)) {
        return 'Nieprawidłowy klucz API — sprawdź go w Opcjach';
    }
    if (/no longer available|not found|not supported/i.test(m)) {
        return 'Model niedostępny — zaktualizuj aplikację';
    }
    if (/przeciążone|high demand|overloaded|quota|rate limit|exhausted/i.test(m)) {
        return 'Serwery AI przeciążone — spróbuj za chwilę';
    }
    if (/permission|denied|forbidden/i.test(m)) {
        return 'Brak dostępu — sprawdź klucz API w Opcjach';
    }
    if (/network|failed to fetch|połączenia/i.test(m)) {
        return 'Brak połączenia z internetem';
    }
    return m.length > 70 ? m.slice(0, 70) + '…' : m;
}

// Wspólne wywołanie Gemini z automatycznym fallbackiem modelu.
// Zapamiętuje działający model, żeby nie próbować za każdym razem od nowa.
// promptText — pojedyncze polecenie; albo opts.system + opts.contents (rozmowa wieloturowa).
async function geminiGenerate(promptText, opts) {
    opts = opts || {};
    const contents = opts.contents || [{ role: 'user', parts: [{ text: promptText }] }];
    const apiKey = getGeminiApiKey();
    if (!apiKey) return { success: false, error: 'Brak klucza API. Ustaw go w Opcjach.' };

    const saved = localStorage.getItem('geminiModel') || '';
    const models = saved
        ? [saved].concat(GEMINI_MODELS.filter(function(m) { return m !== saved; }))
        : GEMINI_MODELS.slice();

    let lastError = 'Nieznany błąd';
    let sawOverload = false;

    // Dwie tury — przeciążenia serwerów Google są zwykle chwilowe.
    for (let attempt = 0; attempt < 2; attempt++) {
        if (attempt > 0) {
            if (!sawOverload) break;     // powtarzamy wyłącznie przy przeciążeniu
            await geminiSleep(1500);
        }

        for (let i = 0; i < models.length; i++) {
            const model = models[i];
            try {
                const body = { contents: contents };
                if (opts.system) body.systemInstruction = { parts: [{ text: opts.system }] };
                const withThinking = Object.assign({}, body, { generationConfig: { thinkingConfig: thinkingConfigFor(model) } });

                const send = function(b) {
                    return fetch(
                        'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey,
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(b)
                        }
                    );
                };

                let response = await send(withThinking);
                let data = await response.json();

                // Model nie zna tego ustawienia myślenia → ta sama prośba bez niego
                if (data.error && response.status === 400 && /thinking/i.test(data.error.message || '')) {
                    console.warn('Gemini (' + model + '): bez thinkingConfig —', data.error.message);
                    response = await send(body);
                    data = await response.json();
                }

                if (data.error) {
                    lastError = data.error.message || 'Błąd API';
                    console.warn('Gemini (' + model + '):', lastError);

                    // Model wycofany → następny model
                    if (isModelUnavailable(response.status, lastError)) continue;

                    // Model przeciążony → następny model, a potem jeszcze jedna tura
                    if (isOverloaded(response.status, lastError)) {
                        sawOverload = true;
                        continue;
                    }

                    // Błąd klucza itp. — zmiana modelu nic nie da
                    return { success: false, error: lastError };
                }

                const c = data.candidates && data.candidates[0];
                const text = c && c.content && c.content.parts
                    ? c.content.parts.filter(function(p) { return p.text && !p.thought; })
                        .map(function(p) { return p.text; }).join('')
                    : '';

                if (text) {
                    localStorage.setItem('geminiModel', model);
                    return { success: true, response: text };
                }
                lastError = 'Brak odpowiedzi od AI';
            } catch (e) {
                lastError = e.message || 'Brak połączenia z internetem';
                console.error('Gemini (' + model + '):', e);
            }
        }
    }

    localStorage.removeItem('geminiModel');

    if (sawOverload) {
        return { success: false, error: 'Serwery AI są chwilowo przeciążone. Spróbuj ponownie za chwilę.' };
    }
    return { success: false, error: lastError };
}

// ==================== JĘZYK UCZNIA (PL/DE) ====================
// W trybie 🇵🇱 mikrofon słucha po polsku, a AI podaje gotowe zdanie po niemiecku.
// Pisać po polsku można w obu trybach — AI samo rozpozna język wiadomości.

function getChatLang() {
    try { return localStorage.getItem('chatLang') === 'pl' ? 'pl' : 'de'; } catch (e) { return 'de'; }
}

function updateChatLangUI() {
    var lang = getChatLang();
    var btn = document.getElementById('chatLangBtn');
    if (btn) {
        btn.textContent = lang === 'pl' ? '🇵🇱' : '🇩🇪';
        btn.classList.toggle('pl', lang === 'pl');
    }
    var input = document.getElementById('chatInput');
    if (input) {
        input.placeholder = lang === 'pl'
            ? 'Napisz po polsku — AI powie, jak to po niemiecku'
            : 'Napisz po niemiecku...';
    }
}

function toggleChatLang() {
    var lang = getChatLang() === 'pl' ? 'de' : 'pl';
    try { localStorage.setItem('chatLang', lang); } catch (e) {}
    updateChatLangUI();
    if (typeof showToast === 'function') {
        showToast(lang === 'pl'
            ? '🇵🇱 Mów po polsku — AI podpowie po niemiecku'
            : '🇩🇪 Mów po niemiecku');
    }
    if (lang === 'pl' && !hasApiKey()) showApiKeyPopup();
}

// ==================== HISTORIA ROZMOWY ====================
// AI dostaje kilka ostatnich wymian, żeby rozmowa trzymała się kupy.

var aiChatHistory = [];
var AI_HISTORY_MAX = 10;

function resetAIChatHistory() {
    aiChatHistory = [];
}

function pushAIChatHistory(who, text) {
    aiChatHistory.push({ who: who, text: text });
    if (aiChatHistory.length > AI_HISTORY_MAX) aiChatHistory.shift();
}

function stripHtmlAI(html) {
    var div = document.createElement('div');
    div.innerHTML = html.replace(/<br\s*\/?>/gi, ' ');
    return (div.textContent || '').trim();
}

// Wywołanie API Gemini (czat)
async function callGeminiAI(userMessage) {
    var scenarioKey = (typeof state !== 'undefined' && state.chatScenario) || 'free';
    var scenario = (typeof chatScenarios !== 'undefined' && chatScenarios[scenarioKey]) || null;
    var level = (typeof state !== 'undefined' && state.currentLanguageLevel) || 'A1';

    var context = '';
    if (scenario && scenario.mission) {
        context = 'Scenka: ' + scenarioKey + ' (zadanie ucznia: ' + scenario.mission.title + '). Grasz drugą osobę w tej scence. ';
    }

    var greeting = scenario && scenario.greeting
        ? 'Rozmowę zacząłeś od powitania: "' + stripHtmlAI(scenario.greeting) + '".\n'
        : '';

    const system =
        'Jesteś nauczycielem niemieckiego i rozmawiasz z uczniem z Polski (poziom ' + level + '). ' + context + '\n' + greeting +
        'Zasady dotyczące OSTATNIEJ wiadomości ucznia:\n' +
        '1. Jeśli jest po polsku (w całości lub częściowo), uczeń nie wie, jak to powiedzieć po niemiecku. ' +
        'Pierwsza linia odpowiedzi to: [DE] <naturalne, poprawne zdanie po niemiecku wyrażające dokładnie to, co uczeń chciał powiedzieć, ' +
        'dopasowane do rozmowy (forma Sie/du jak w rozmowie) i do poziomu ' + level + '>. ' +
        'Potem odpowiadasz tak, jakby uczeń powiedział to zdanie po niemiecku.\n' +
        '2. Jeśli jest po niemiecku, ale z błędami, pierwsza linia to: [FIX] <poprawiona wersja zdania ucznia>, ' +
        'a druga: 💡 <krótkie wyjaśnienie błędu po polsku>.\n' +
        '3. Jeśli jest poprawna po niemiecku, nie dodawaj linii [DE] ani [FIX].\n' +
        'Twoja własna odpowiedź: po niemiecku, 1-3 krótkie zdania, a pod nią linia (pol: tłumaczenie). ' +
        'Nie używaj markdown ani gwiazdek. Linia [DE] lub [FIX] zawiera tylko niemieckie zdanie, bez tłumaczenia.\n' +
        'Przykład dla wiadomości "Poproszę kawę":\n[DE] Einen Kaffee, bitte.\nGerne! Mit Milch?\n(pol: Chętnie! Z mlekiem?)';

    // Historia jako prawdziwa rozmowa (user/model) — model lepiej trzyma wątek i format
    var contents = aiChatHistory.map(function(h) {
        return { role: h.who === 'user' ? 'user' : 'model', parts: [{ text: h.text }] };
    });
    contents.push({ role: 'user', parts: [{ text: userMessage }] });

    return geminiGenerate(null, { system: system, contents: contents });
}

// Rozbija odpowiedź AI na wersję niemiecką zdania ucznia ([DE]/[FIX]) i resztę.
function parseAIReply(text) {
    var lines = (text || '').split('\n');
    var tag = '';
    var sentence = '';
    var rest = [];
    for (var i = 0; i < lines.length; i++) {
        var clean = lines[i].replace(/\*\*/g, '').trim();
        var m = !tag && clean.match(/^\[(DE|FIX)\]\s*:?\s*(.+)$/i);
        if (m) {
            tag = m[1].toUpperCase();
            sentence = m[2].trim();
            // Gdyby AI mimo wszystko dodało tłumaczenie zaraz pod spodem — pomiń je
            if (i + 1 < lines.length && /^\((pol|pl):/i.test(lines[i + 1].trim())) i++;
            continue;
        }
        rest.push(lines[i]);
    }
    return { tag: tag, sentence: sentence, reply: rest.join('\n').trim() };
}

// Wyślij wiadomość
async function sendAIMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    if (!hasApiKey()) { 
        showApiKeyPopup(); 
        return; 
    }
    
    input.value = '';
    addAIChatBubble(message, 'user');
    showAITyping();
    
    const result = await callGeminiAI(message);
    hideAITyping();

    if (result.success) {
        const parsed = parseAIReply(result.response);
        addAIChatBubble(result.response, 'bot');
        if (typeof addXP === 'function') addXP(5);

        // Do historii trafia niemiecka wersja zdania ucznia, jeśli AI ją podało
        const germanSentence = parsed.tag ? parsed.sentence : message;
        pushAIChatHistory('user', germanSentence);
        pushAIChatHistory('bot', parsed.reply);

        // Postęp misji liczony z niemieckiej wersji (działa też, gdy uczeń pisał po polsku)
        if (typeof checkMissionProgress === 'function') checkMissionProgress(germanSentence);

        // Auto-wymowa: najpierw jak powiedzieć zdanie ucznia, potem odpowiedź
        const german = extractGerman(parsed.reply);
        const toSpeak = (parsed.sentence ? parsed.sentence + ' ' : '') + german;
        if (toSpeak.trim() && typeof state !== 'undefined' && state.autoSpeak && typeof speak === 'function') {
            setTimeout(function() { speak(toSpeak.trim()); }, 500);
        }
    } else {
        addAIChatBubble('❌ ' + result.error, 'bot');
    }
}

// Wyciągnij niemiecki tekst z odpowiedzi
function extractGerman(text) {
    if (!text) return '';
    var lines = text.split('\n');
    var german = '';
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.toLowerCase().indexOf('(pol:') === 0) continue;
        if (line.toLowerCase().indexOf('(pl:') === 0) continue;
        if (line.indexOf('💡') === 0) continue;
        if (line.trim()) german += line + ' ';
    }
    return german.replace(/\(pol:[^)]+\)/gi, '').replace(/\(PL:[^)]+\)/gi, '').trim();
}

// Dodaj wiadomość do czatu
function addAIChatBubble(text, type) {
    var container = document.getElementById('chatContainer');
    if (!container) return;
    
    var div = document.createElement('div');
    div.className = 'chat-message ' + type;
    
    if (type === 'user') {
        div.innerHTML = '<span>' + escapeHtmlAI(text) + '</span>';
    } else {
        var parsed = parseAIReply(text);
        text = parsed.reply;

        var deBox = '';
        if (parsed.sentence) {
            deBox = '<span class="ai-de-version">' +
                '<span class="ai-de-label">' + (parsed.tag === 'FIX' ? '✏️ Poprawnie:' : '🇩🇪 Po niemiecku powiesz:') + '</span>' +
                '<strong>' + escapeHtmlAI(parsed.sentence) + '</strong>' +
                '<button class="ai-de-speak-btn" title="Posłuchaj">🔊</button>' +
                '</span>';
        }

        var formatted = escapeHtmlAI(text)
            .replace(/\n/g, '<br>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\(pol:([^)]+)\)/gi, '<br><small style="color:#888;font-style:italic">(🇵🇱$1)</small>')
            .replace(/\(PL:([^)]+)\)/gi, '<br><small style="color:#888;font-style:italic">(🇵🇱$1)</small>')
            .replace(/💡([^<\n]+)/g, '<br><span style="color:#ed8936">💡$1</span>');

        var german = extractGerman(text);

        div.innerHTML = deBox + '<span>' + formatted + '</span>' +
            '<div class="message-actions" style="margin-top:8px">' +
            '<button class="ai-speak-btn" style="background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;margin-right:5px">🔊</button>' +
            '<button class="ai-speak-slow-btn" style="background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer">🐢</button>' +
            '</div>';

        var speakBtn = div.querySelector('.ai-speak-btn');
        var slowBtn = div.querySelector('.ai-speak-slow-btn');
        speakBtn.addEventListener('click', function() { speakText(german); });
        slowBtn.addEventListener('click', function() { speakTextSlow(german); });

        var deBtn = div.querySelector('.ai-de-speak-btn');
        if (deBtn) deBtn.addEventListener('click', function() { speakText(parsed.sentence); });
    }
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Funkcje wymowy dla czatu
function speakText(text) {
    if (typeof speak === 'function') {
        speak(text);
    } else {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        speechSynthesis.speak(utterance);
    }
}

function speakTextSlow(text) {
    if (typeof speakSlow === 'function') {
        speakSlow(text);
    } else {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.6;
        speechSynthesis.speak(utterance);
    }
}

// Escape HTML
function escapeHtmlAI(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Wskaźnik pisania
function showAITyping() {
    var container = document.getElementById('chatContainer');
    if (!container) return;
    
    var div = document.createElement('div');
    div.className = 'chat-message bot';
    div.id = 'aiTyping';
    div.innerHTML = '<span style="color:#888">🤖 AI pisze<span class="typing-dots">...</span></span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function hideAITyping() {
    var el = document.getElementById('aiTyping');
    if (el) el.remove();
}

// ==================== MIKROFON ====================

function startChatSpeech() {
    var micBtn = document.querySelector('.mic-btn-small');

    // Uwaga: .mic-btn-small ma w CSS background z !important,
    // więc podświetlenie ustawiamy klasą .listening, nie stylem inline.
    function resetBtn() {
        if (micBtn) {
            micBtn.classList.remove('listening');
            micBtn.innerHTML = '🎤';
        }
    }

    // Wspólny helper z app.js — na Androidzie natywny plugin, w przeglądarce Web Speech API
    if (typeof recognizeSpeech !== 'function') {
        if (typeof showToast === 'function') showToast('❌ Rozpoznawanie mowy niedostępne');
        return;
    }

    var lang = getChatLang();

    recognizeSpeech({
        lang: lang === 'pl' ? 'pl-PL' : 'de-DE',
        onStart: function() {
            if (micBtn) {
                micBtn.classList.add('listening');
                micBtn.innerHTML = '🎙️';
            }
            if (typeof showToast === 'function') showToast(lang === 'pl' ? '🎤 Mów po polsku...' : '🎤 Mów po niemiecku...');
        },
        onEnd: resetBtn,
        onResult: function(transcript) {
            resetBtn();
            var input = document.getElementById('chatInput');
            if (input) {
                input.value = transcript;
                input.focus();
            }
            if (typeof showToast === 'function') showToast('✅ Rozpoznano: ' + transcript);
        },
        onError: function(msg) {
            resetBtn();
            if (typeof showToast === 'function') showToast('❌ ' + msg);
            else alert(msg);
        }
    });
}

// ==================== POPUP KLUCZA API ====================

function showApiKeyPopup() {
    var existing = document.querySelector('.api-popup');
    if (existing) existing.remove();

    var currentKey = getGeminiApiKey();

    var popup = document.createElement('div');
    popup.className = 'api-popup';
    popup.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px';

    popup.innerHTML =
        '<div style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:25px;border-radius:20px;max-width:380px;width:100%;border:1px solid rgba(102,126,234,0.3)">' +
            '<h3 style="margin:0 0 15px;color:white;text-align:center">🔑 Klucz API Gemini</h3>' +
            '<p style="color:#aaa;font-size:14px;margin-bottom:15px">Aby korzystać z czatu AI, potrzebujesz darmowego klucza:</p>' +
            '<ol style="color:#ccc;font-size:14px;padding-left:20px;margin-bottom:15px">' +
                '<li style="margin-bottom:8px">Wejdź na <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#667eea">aistudio.google.com</a></li>' +
                '<li style="margin-bottom:8px">Zaloguj się kontem Google</li>' +
                '<li style="margin-bottom:8px">Kliknij "Create API key in new project"</li>' +
                '<li>Skopiuj klucz i wklej poniżej</li>' +
            '</ol>' +
            '<input type="text" id="apiKeyField" placeholder="AIzaSy..." style="width:100%;padding:14px;border-radius:10px;border:1px solid #444;background:#2a2a4a;color:white;font-size:15px;box-sizing:border-box">' +
            '<div style="display:flex;gap:10px;margin-top:15px">' +
                '<button id="apiKeySaveBtn" style="flex:1;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);border:none;border-radius:10px;color:white;font-size:16px;cursor:pointer;font-weight:bold">💾 Zapisz</button>' +
                '<button id="apiKeyCancelBtn" style="flex:1;padding:14px;background:#444;border:none;border-radius:10px;color:white;font-size:16px;cursor:pointer">❌ Anuluj</button>' +
            '</div>' +
            '<p style="font-size:12px;color:#666;margin-top:12px;text-align:center">🔒 Klucz zapisany tylko na Twoim urządzeniu</p>' +
        '</div>';

    document.body.appendChild(popup);

    var input = document.getElementById('apiKeyField');
    if (input) {
        input.value = currentKey;
        setTimeout(function() { input.focus(); }, 100);
    }

    document.getElementById('apiKeySaveBtn').addEventListener('click', saveApiKey);
    document.getElementById('apiKeyCancelBtn').addEventListener('click', closeApiPopup);
}

function saveApiKey() {
    var input = document.getElementById('apiKeyField');
    var key = input ? input.value.trim() : '';
    
    if (key && key.indexOf('AIza') === 0) {
        setGeminiApiKey(key);
        closeApiPopup();
        if (typeof showToast === 'function') {
            showToast('✅ Klucz API zapisany!');
        }
    } else {
        alert('Nieprawidłowy klucz! Musi zaczynać się od "AIza"');
    }
}

function closeApiPopup() {
    var popup = document.querySelector('.api-popup');
    if (popup) popup.remove();
}

// ==================== SCENARIUSZE ====================

function startAIScenario(scenario) {
    // Zapisz scenariusz
    if (typeof state !== 'undefined') {
        state.chatScenario = scenario;
    }
    
    // Zaznacz aktywny przycisk
    var buttons = document.querySelectorAll('.scenario-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Wyczyść czat
    var container = document.getElementById('chatContainer');
    if (!container) return;
    container.innerHTML = '';
    
    // Powitania dla różnych scenariuszy
    var greetings = {
        free: {
            de: "Hallo! Worüber möchtest du heute sprechen?",
            pl: "Cześć! O czym chcesz dziś porozmawiać?"
        },
        cafe: {
            de: "Guten Tag! Willkommen im Café. Was darf ich Ihnen bringen?",
            pl: "Dzień dobry! Witamy w kawiarni. Co mogę podać?"
        },
        shop: {
            de: "Hallo! Kann ich Ihnen helfen? Suchen Sie etwas Bestimmtes?",
            pl: "Cześć! Mogę pomóc? Szuka Pan/Pani czegoś konkretnego?"
        },
        doctor: {
            de: "Guten Tag! Was führt Sie heute zu mir? Wie kann ich Ihnen helfen?",
            pl: "Dzień dobry! Co Pana/Panią do mnie sprowadza?"
        },
        hotel: {
            de: "Guten Abend! Willkommen in unserem Hotel. Haben Sie eine Reservierung?",
            pl: "Dobry wieczór! Witamy w naszym hotelu. Ma Pan/Pani rezerwację?"
        },
        restaurant: {
            de: "Guten Abend! Willkommen in unserem Restaurant. Hier ist die Speisekarte.",
            pl: "Dobry wieczór! Witamy w naszej restauracji. Oto menu."
        },
        work: {
            de: "Guten Morgen, Kollege! Wie geht es dir? Bereit für das Meeting?",
            pl: "Dzień dobry, kolego! Jak się masz? Gotowy na spotkanie?"
        },
        date: {
            de: "Hey! Schön dich zu sehen! Du siehst toll aus heute!",
            pl: "Hej! Miło cię widzieć! Świetnie dziś wyglądasz!"
        }
    };
    
    var greeting = greetings[scenario] || greetings.free;
    
    // Dodaj powitanie
    var div = document.createElement('div');
    div.className = 'chat-message bot';
    div.innerHTML = '<span>' + greeting.de + '<br><small style="color:#888;font-style:italic">(🇵🇱 ' + greeting.pl + ')</small></span>';
    container.appendChild(div);
    
    // Auto-wymowa powitania
    if (typeof state !== 'undefined' && state.autoSpeak && typeof speak === 'function') {
        setTimeout(function() { speak(greeting.de); }, 300);
    }
    
    // Aktualizuj sugestie
    updateAISuggestions(scenario);
    
    // Dźwięk kliknięcia
    if (typeof playClickSound === 'function') {
        playClickSound();
    }
}

function updateAISuggestions(scenario) {
    var div = document.getElementById('chatSuggestions');
    if (!div) return;
    
    var suggestions = {
        free: ["Wie geht es dir?", "Ich lerne Deutsch", "Was machst du gern?", "Woher kommst du?"],
        cafe: ["Einen Kaffee, bitte", "Was kostet das?", "Die Rechnung, bitte", "Mit Milch, bitte"],
        shop: ["Ich suche eine Jacke", "Haben Sie das in Größe M?", "Wie viel kostet das?", "Kann ich das anprobieren?"],
        doctor: ["Ich habe Kopfschmerzen", "Mir ist schlecht", "Seit gestern", "Brauche ich ein Rezept?"],
        hotel: ["Ich habe reserviert", "Ein Zimmer für zwei Nächte", "Mit Frühstück?", "Wo ist der Aufzug?"],
        restaurant: ["Die Speisekarte, bitte", "Ich nehme das Schnitzel", "Ein Bier, bitte", "Die Rechnung, bitte"],
        work: ["Wann ist das Meeting?", "Ich habe eine Frage", "Können wir das besprechen?", "Bis später!"],
        date: ["Du siehst toll aus!", "Was machst du gern?", "Möchtest du etwas trinken?", "Das war ein schöner Abend!"]
    };
    
    var items = suggestions[scenario] || suggestions.free;
    
    div.innerHTML = '';
    items.forEach(function(text) {
        var btn = document.createElement('button');
        btn.textContent = text;
        btn.onclick = function() {
            var input = document.getElementById('chatInput');
            if (input) {
                input.value = text;
                input.focus();
            }
        };
        div.appendChild(btn);
    });
}

// Inicjalizacja przy załadowaniu
document.addEventListener('DOMContentLoaded', function() {
    updateChatLangUI();

    // Jeśli jest klucz API i jesteśmy na stronie czatu
    if (hasApiKey()) {
        console.log('Klucz API znaleziony');
    }
});
