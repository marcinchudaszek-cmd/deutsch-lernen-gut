// ==================== CZAT AI Z GOOGLE GEMINI ====================

// Klucz API (przechowywany lokalnie na urządzeniu użytkownika)
function getGeminiApiKey() {
    return localStorage.getItem('geminiApiKey') || '';
}

function setGeminiApiKey(key) {
    localStorage.setItem('geminiApiKey', key);
}

function hasApiKey() {
    return getGeminiApiKey().length > 10;
}

// Historia rozmowy dla kontekstu
let aiConversationHistory = [];

function getAIChatHistory() {
    return aiConversationHistory.slice(-6).map(msg => 
        `${msg.role === 'user' ? 'Uczeń' : 'Nauczyciel'}: ${msg.text}`
    ).join('\n');
}

function addToAIHistory(role, text) {
    aiConversationHistory.push({ role, text });
    if (aiConversationHistory.length > 10) {
        aiConversationHistory.shift();
    }
}

function clearAIHistory() {
    aiConversationHistory = [];
}

// Prompt systemowy
function getAISystemPrompt() {
    const level = state.currentLanguageLevel || 'A1';
    const scenario = state.chatScenario || 'free';
    
    const contexts = {
        cafe: "Jesteś kelnerem w kawiarni.",
        shop: "Jesteś sprzedawcą w sklepie.",
        travel: "Jesteś pracownikiem dworca.",
        work: "Jesteś kolegą z pracy.",
        doctor: "Jesteś lekarzem.",
        hotel: "Jesteś recepcjonistą w hotelu.",
        airport: "Jesteś pracownikiem lotniska.",
        date: "Jesteś na randce.",
        interview: "Przeprowadzasz rozmowę kwalifikacyjną.",
        restaurant: "Jesteś kelnerem w restauracji.",
        free: "Prowadzisz swobodną rozmowę."
    };
    
    return `Jesteś nauczycielem niemieckiego. ${contexts[scenario] || contexts.free}

ZASADY:
1. Odpowiadaj PO NIEMIECKU
2. Pod spodem daj tłumaczenie: (pol: ...)
3. Poziom ucznia: ${level}
4. Jeśli uczeń zrobi błąd - popraw: 💡 Poprawka: ...
5. Zadawaj pytania
6. Max 3 zdania po niemiecku
7. Bądź miły i pomocny

Poziomy:
- A1: bardzo proste zdania, podstawowe słowa
- A2: proste rozmowy, Perfekt
- B1: dłuższe wypowiedzi, zdania złożone
- B2: zaawansowane, idiomy`;
}

// Wywołanie API - AKTUALNE MODELE GEMINI 2025
async function callGeminiAI(userMessage) {
    const apiKey = getGeminiApiKey();
    
    if (!apiKey) {
        return { success: false, error: 'Brak klucza API' };
    }
    
    const prompt = getAISystemPrompt() + "\n\nHistoria:\n" + getAIChatHistory() + "\n\nUczeń: " + userMessage;
    
    // AKTUALNE modele Gemini (styczeń 2025)
    const models = [
        'gemini-2.0-flash-exp',
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest'
    ];
    
    let lastError = '';
    
    for (const model of models) {
        try {
            console.log('Próbuję model:', model);
            
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ 
                            parts: [{ text: prompt }] 
                        }],
                        generationConfig: {
                            temperature: 0.8,
                            maxOutputTokens: 300
                        }
                    })
                }
            );
            
            const data = await response.json();
            
            console.log('Odpowiedź API:', data);
            
            if (!response.ok) {
                lastError = data.error?.message || 'Błąd API';
                console.log('Błąd dla modelu', model, ':', lastError);
                continue; // Spróbuj następny model
            }
            
            if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                console.log('Sukces z modelem:', model);
                return { success: true, response: data.candidates[0].content.parts[0].text };
            }
            
            // Jeśli odpowiedź jest zablokowana
            if (data.candidates?.[0]?.finishReason === 'SAFETY') {
                return { success: true, response: 'Entschuldigung, ich kann darauf nicht antworten.\n(pol: Przepraszam, nie mogę na to odpowiedzieć.)' };
            }
            
            lastError = 'Pusta odpowiedź';
            
        } catch (error) {
            console.error('Błąd fetch:', error);
            lastError = 'Błąd połączenia: ' + error.message;
        }
    }
    
    return { success: false, error: lastError };
}

// Wyślij wiadomość do AI
async function sendAIMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    if (!hasApiKey()) {
        showApiKeyPopup();
        return;
    }
    
    input.value = '';
    
    // Wiadomość użytkownika
    addAIChatBubble(message, 'user');
    addToAIHistory('user', message);
    
    // Wskaźnik pisania
    showAITyping();
    
    // Wywołaj AI
    const result = await callGeminiAI(message);
    
    hideAITyping();
    
    if (result.success) {
        addAIChatBubble(result.response, 'bot');
        addToAIHistory('assistant', result.response);
        addXP(5);
        
        // Auto-wymowa
        const german = extractGerman(result.response);
        if (german && state.autoSpeak) {
            setTimeout(() => speak(german), 300);
        }
    } else {
        addAIChatBubble('❌ ' + result.error + '\n\nSprawdź klucz API w ustawieniach.', 'bot');
    }
}

// Wyciągnij niemiecki tekst
function extractGerman(text) {
    const lines = text.split('\n');
    let german = '';
    for (const line of lines) {
        if (line.toLowerCase().startsWith('(pol:') || line.startsWith('💡') || line.toLowerCase().startsWith('(pl')) continue;
        if (line.match(/^\([^)]+\)$/)) continue;
        if (line.trim()) german += line + ' ';
    }
    return german.trim();
}

// Dodaj wiadomość do czatu
function addAIChatBubble(text, type) {
    const container = document.getElementById('chatContainer');
    const div = document.createElement('div');
    div.className = 'chat-message ' + type;
    
    let html = '';
    
    if (type === 'user') {
        html = `<span>${escapeHtml(text)}</span>`;
    } else {
        // Formatuj odpowiedź AI
        let formatted = text
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/💡([^<\n]+)/g, '<span class="ai-tip">💡$1</span>')
            .replace(/\(pol:([^)]+)\)/gi, '<small class="ai-pl">(🇵🇱$1)</small>')
            .replace(/\(PL:([^)]+)\)/gi, '<small class="ai-pl">(🇵🇱$1)</small>');
        
        const german = extractGerman(text).replace(/'/g, "\\'");
        
        html = `
            <span>${formatted}</span>
            <div class="message-actions">
                <button onclick="speak('${german}')">🔊</button>
                <button onclick="speakSlow('${german}')">🐢</button>
            </div>
        `;
    }
    
    div.innerHTML = html;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Wskaźnik pisania
function showAITyping() {
    const container = document.getElementById('chatContainer');
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.id = 'aiTyping';
    div.innerHTML = '<span class="typing-anim">🤖 AI pisze<span>.</span><span>.</span><span>.</span></span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function hideAITyping() {
    const el = document.getElementById('aiTyping');
    if (el) el.remove();
}

// Popup klucza API
function showApiKeyPopup() {
    const existing = document.querySelector('.api-popup');
    if (existing) existing.remove();
    
    const currentKey = getGeminiApiKey();
    
    const popup = document.createElement('div');
    popup.className = 'api-popup';
    popup.innerHTML = `
        <div class="api-popup-content">
            <h3>🔑 Klucz API Gemini</h3>
            <p>Potrzebujesz darmowego klucza Google:</p>
            <ol>
                <li><a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#667eea">👉 aistudio.google.com/app/apikey</a></li>
                <li>Zaloguj się kontem Google</li>
                <li>Kliknij "Create API Key"</li>
                <li>Skopiuj i wklej poniżej:</li>
            </ol>
            <input type="text" id="apiKeyField" placeholder="AIzaSy..." value="${currentKey}" style="width:100%;padding:12px;border-radius:8px;border:1px solid #444;background:#2a2a4a;color:white;font-size:14px;">
            <div style="display:flex;gap:10px;margin-top:15px;">
                <button onclick="saveApiKey()" style="flex:1;padding:12px;background:linear-gradient(135deg,#667eea,#764ba2);border:none;border-radius:8px;color:white;font-size:16px;cursor:pointer;">💾 Zapisz</button>
                <button onclick="closeApiPopup()" style="flex:1;padding:12px;background:#444;border:none;border-radius:8px;color:white;font-size:16px;cursor:pointer;">❌ Anuluj</button>
            </div>
            <p style="font-size:12px;color:#888;margin-top:10px;">🔒 Klucz zapisany tylko na Twoim urządzeniu</p>
        </div>
    `;
    document.body.appendChild(popup);
}

function saveApiKey() {
    const key = document.getElementById('apiKeyField').value.trim();
    if (key && key.startsWith('AIza')) {
        setGeminiApiKey(key);
        closeApiPopup();
        showToast('✅ Klucz zapisany! Możesz rozmawiać z AI');
    } else {
        showToast('❌ Klucz musi zaczynać się od "AIza"');
    }
}

function closeApiPopup() {
    const popup = document.querySelector('.api-popup');
    if (popup) popup.remove();
}

// Nowy scenariusz AI
function startAIScenario(scenario) {
    state.chatScenario = scenario;
    clearAIHistory();
    
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
    if (event?.target) event.target.classList.add('active');
    
    const container = document.getElementById('chatContainer');
    container.innerHTML = '';
    
    // Powitanie
    const greetings = {
        cafe: "Guten Tag! Willkommen im Café. Was darf ich Ihnen bringen?<br><small class='ai-pl'>(🇵🇱 Dzień dobry! Witamy w kawiarni. Co mogę podać?)</small>",
        shop: "Hallo! Kann ich Ihnen helfen?<br><small class='ai-pl'>(🇵🇱 Cześć! Mogę pomóc?)</small>",
        travel: "Wohin möchten Sie reisen?<br><small class='ai-pl'>(🇵🇱 Dokąd chce Pan/Pani jechać?)</small>",
        work: "Guten Morgen, Kollege! Wie geht's?<br><small class='ai-pl'>(🇵🇱 Dzień dobry, kolego! Jak leci?)</small>",
        doctor: "Guten Tag! Was führt Sie zu mir?<br><small class='ai-pl'>(🇵🇱 Dzień dobry! Co Pana/Panią sprowadza?)</small>",
        hotel: "Guten Abend! Willkommen. Haben Sie reserviert?<br><small class='ai-pl'>(🇵🇱 Dobry wieczór! Witamy. Ma Pan/Pani rezerwację?)</small>",
        date: "Hey! Schön dich zu sehen! Du siehst toll aus!<br><small class='ai-pl'>(🇵🇱 Hej! Miło cię widzieć! Świetnie wyglądasz!)</small>",
        restaurant: "Guten Abend! Hier ist die Speisekarte.<br><small class='ai-pl'>(🇵🇱 Dobry wieczór! Oto menu.)</small>",
        free: "Hallo! Worüber möchtest du sprechen?<br><small class='ai-pl'>(🇵🇱 Cześć! O czym chcesz porozmawiać?)</small>"
    };
    
    const greeting = greetings[scenario] || greetings.free;
    
    // Dodaj powitanie
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.innerHTML = `<span>${greeting}</span>`;
    container.appendChild(div);
    
    // Aktualizuj sugestie
    updateAISuggestions(scenario);
    
    // Auto-wymowa
    const germanGreeting = extractGerman(greeting.replace(/<[^>]*>/g, ''));
    if (state.autoSpeak && germanGreeting) {
        setTimeout(() => speak(germanGreeting), 300);
    }
    
    playClickSound();
}

function updateAISuggestions(scenario) {
    const div = document.getElementById('chatSuggestions');
    if (!div) return;
    
    const suggestions = {
        cafe: ["Einen Kaffee, bitte", "Was kostet das?", "Die Rechnung, bitte"],
        shop: ["Ich suche...", "Haben Sie das in Größe M?", "Wie viel kostet das?"],
        doctor: ["Ich habe Kopfschmerzen", "Seit gestern", "Ich brauche ein Rezept"],
        hotel: ["Ich habe reserviert", "Ein Zimmer für 2 Nächte", "Mit Frühstück?"],
        date: ["Du siehst gut aus!", "Was machst du gern?", "Möchtest du etwas trinken?"],
        restaurant: ["Die Speisekarte, bitte", "Ich nehme...", "Die Rechnung, bitte"],
        work: ["Wann ist das Meeting?", "Ich habe eine Frage", "Bis später!"],
        free: ["Wie geht es dir?", "Ich lerne Deutsch", "Was machst du gern?"]
    };
    
    div.innerHTML = '';
    (suggestions[scenario] || suggestions.free).forEach(s => {
        const btn = document.createElement('button');
        btn.textContent = s;
        btn.onclick = () => {
            document.getElementById('chatInput').value = s;
            document.getElementById('chatInput').focus();
        };
        div.appendChild(btn);
    });
}

// Rozpoznawanie mowy
function startChatSpeech() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('❌ Użyj Chrome dla rozpoznawania mowy');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';
    
    const micBtn = document.querySelector('.mic-btn-small');
    if (micBtn) {
        micBtn.classList.add('listening');
        micBtn.textContent = '🎙️';
    }
    
    showToast('🎤 Mów po niemiecku...');
    
    recognition.onresult = function(event) {
        document.getElementById('chatInput').value = event.results[0][0].transcript;
        if (micBtn) {
            micBtn.classList.remove('listening');
            micBtn.textContent = '🎤';
        }
    };
    
    recognition.onend = function() {
        if (micBtn) {
            micBtn.classList.remove('listening');
            micBtn.textContent = '🎤';
        }
    };
    
    recognition.onerror = function() {
        if (micBtn) {
            micBtn.classList.remove('listening');
            micBtn.textContent = '🎤';
        }
        showToast('❌ Spróbuj ponownie');
    };
    
    recognition.start();
}

// Inicjalizacja czatu przy starcie
function initAIChat() {
    if (hasApiKey()) {
        startAIScenario('free');
    }
}
