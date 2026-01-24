// CZAT AI Z GOOGLE GEMINI
function getGeminiApiKey() { return localStorage.getItem('geminiApiKey') || ''; }
function setGeminiApiKey(key) { localStorage.setItem('geminiApiKey', key); }
function hasApiKey() { return getGeminiApiKey().length > 10; }

let aiConversationHistory = [];
function clearAIHistory() { aiConversationHistory = []; }
function addToAIHistory(role, text) {
    aiConversationHistory.push({ role, text });
    if (aiConversationHistory.length > 10) aiConversationHistory.shift();
}
function getAIChatHistory() {
    return aiConversationHistory.slice(-6).map(msg => 
        `${msg.role === 'user' ? 'Uczeń' : 'Nauczyciel'}: ${msg.text}`
    ).join('\n');
}

function getAISystemPrompt() {
    const level = state.currentLanguageLevel || 'A1';
    const scenario = state.chatScenario || 'free';
    const contexts = {
        cafe: "Jesteś kelnerem w kawiarni.", shop: "Jesteś sprzedawcą w sklepie.",
        doctor: "Jesteś lekarzem.", hotel: "Jesteś recepcjonistą w hotelu.",
        restaurant: "Jesteś kelnerem w restauracji.", work: "Jesteś kolegą z pracy.",
        date: "Jesteś na randce.", free: "Prowadzisz swobodną rozmowę."
    };
    return `Jesteś nauczycielem niemieckiego. ${contexts[scenario] || contexts.free}
ZASADY: 1. Odpowiadaj PO NIEMIECKU 2. Pod spodem tłumaczenie: (pol: ...) 3. Poziom: ${level}
4. Poprawiaj błędy: 💡 Poprawka: ... 5. Zadawaj pytania 6. Max 3 zdania 7. Bądź miły`;
}

async function callGeminiAI(userMessage) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) return { success: false, error: 'Brak klucza API' };
    
    const prompt = getAISystemPrompt() + "\n\nHistoria:\n" + getAIChatHistory() + "\n\nUczeń: " + userMessage;
    
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.8, maxOutputTokens: 300 }
                })
            }
        );
        const data = await response.json();
        console.log('API Response:', data);
        
        if (!response.ok) return { success: false, error: data.error?.message || 'Błąd API' };
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return { success: true, response: data.candidates[0].content.parts[0].text };
        }
        return { success: false, error: 'Pusta odpowiedź' };
    } catch (error) {
        console.error('Fetch error:', error);
        return { success: false, error: 'Błąd połączenia' };
    }
}

async function sendAIMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    if (!hasApiKey()) { showApiKeyPopup(); return; }
    
    input.value = '';
    addAIChatBubble(message, 'user');
    addToAIHistory('user', message);
    showAITyping();
    
    const result = await callGeminiAI(message);
    hideAITyping();
    
    if (result.success) {
        addAIChatBubble(result.response, 'bot');
        addToAIHistory('assistant', result.response);
        addXP(5);
        const german = extractGerman(result.response);
        if (german && state.autoSpeak) setTimeout(() => speak(german), 300);
    } else {
        addAIChatBubble('❌ ' + result.error, 'bot');
    }
}

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

function addAIChatBubble(text, type) {
    const container = document.getElementById('chatContainer');
    const div = document.createElement('div');
    div.className = 'chat-message ' + type;
    
    if (type === 'user') {
        div.innerHTML = `<span>${escapeHtml(text)}</span>`;
    } else {
        let formatted = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')
            .replace(/💡([^<\n]+)/g, '<span class="ai-tip">💡$1</span>')
            .replace(/\(pol:([^)]+)\)/gi, '<small class="ai-pl">(🇵🇱$1)</small>');
        const german = extractGerman(text).replace(/'/g, "\\'");
        div.innerHTML = `<span>${formatted}</span><div class="message-actions"><button onclick="speak('${german}')">🔊</button><button onclick="speakSlow('${german}')">🐢</button></div>`;
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showAITyping() {
    const container = document.getElementById('chatContainer');
    const div = document.createElement('div');
    div.className = 'chat-message bot'; div.id = 'aiTyping';
    div.innerHTML = '<span>🤖 AI pisze...</span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
function hideAITyping() { const el = document.getElementById('aiTyping'); if (el) el.remove(); }

function showApiKeyPopup() {
    const existing = document.querySelector('.api-popup'); if (existing) existing.remove();
    const popup = document.createElement('div');
    popup.className = 'api-popup';
    popup.innerHTML = `<div class="api-popup-content"><h3>🔑 Klucz API Gemini</h3>
        <p>1. Wejdź na <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#667eea">aistudio.google.com/app/apikey</a></p>
        <p>2. Zaloguj się Google i kliknij "Create API Key"</p>
        <input type="text" id="apiKeyField" placeholder="AIzaSy..." value="${getGeminiApiKey()}" style="width:100%;padding:12px;border-radius:8px;border:1px solid #444;background:#2a2a4a;color:white;margin:10px 0;">
        <div style="display:flex;gap:10px;"><button onclick="saveApiKey()" style="flex:1;padding:12px;background:#667eea;border:none;border-radius:8px;color:white;cursor:pointer;">💾 Zapisz</button>
        <button onclick="closeApiPopup()" style="flex:1;padding:12px;background:#444;border:none;border-radius:8px;color:white;cursor:pointer;">❌ Anuluj</button></div></div>`;
    document.body.appendChild(popup);
}
function saveApiKey() {
    const key = document.getElementById('apiKeyField').value.trim();
    if (key && key.startsWith('AIza')) { setGeminiApiKey(key); closeApiPopup(); showToast('✅ Klucz zapisany!'); }
    else showToast('❌ Klucz musi zaczynać się od "AIza"');
}
function closeApiPopup() { const popup = document.querySelector('.api-popup'); if (popup) popup.remove(); }

function startAIScenario(scenario) {
    state.chatScenario = scenario; clearAIHistory();
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
    if (event?.target) event.target.classList.add('active');
    const container = document.getElementById('chatContainer'); container.innerHTML = '';
    const greetings = {
        cafe: "Guten Tag! Was darf ich Ihnen bringen?<br><small class='ai-pl'>(🇵🇱 Co mogę podać?)</small>",
        shop: "Hallo! Kann ich Ihnen helfen?<br><small class='ai-pl'>(🇵🇱 Mogę pomóc?)</small>",
        doctor: "Guten Tag! Was führt Sie zu mir?<br><small class='ai-pl'>(🇵🇱 Co Pana/Panią sprowadza?)</small>",
        hotel: "Willkommen! Haben Sie reserviert?<br><small class='ai-pl'>(🇵🇱 Ma Pan/Pani rezerwację?)</small>",
        restaurant: "Guten Abend! Hier ist die Speisekarte.<br><small class='ai-pl'>(🇵🇱 Oto menu.)</small>",
        work: "Guten Morgen! Wie geht's?<br><small class='ai-pl'>(🇵🇱 Jak leci?)</small>",
        date: "Hey! Du siehst toll aus!<br><small class='ai-pl'>(🇵🇱 Świetnie wyglądasz!)</small>",
        free: "Hallo! Worüber möchtest du sprechen?<br><small class='ai-pl'>(🇵🇱 O czym chcesz porozmawiać?)</small>"
    };
    const div = document.createElement('div'); div.className = 'chat-message bot';
    div.innerHTML = `<span>${greetings[scenario] || greetings.free}</span>`;
    container.appendChild(div);
    updateAISuggestions(scenario);
}

function updateAISuggestions(scenario) {
    const div = document.getElementById('chatSuggestions'); if (!div) return;
    const suggestions = {
        cafe: ["Einen Kaffee, bitte", "Was kostet das?", "Die Rechnung, bitte"],
        shop: ["Ich suche...", "Wie viel kostet das?", "Haben Sie das in M?"],
        doctor: ["Ich habe Kopfschmerzen", "Seit gestern", "Brauche ich ein Rezept?"],
        hotel: ["Ich habe reserviert", "Ein Zimmer für 2 Nächte", "Mit Frühstück?"],
        restaurant: ["Ich nehme...", "Was empfehlen Sie?", "Die Rechnung, bitte"],
        work: ["Wann ist das Meeting?", "Ich habe eine Frage", "Bis später!"],
        date: ["Du siehst gut aus!", "Was machst du gern?", "Möchtest du etwas trinken?"],
        free: ["Wie geht es dir?", "Ich lerne Deutsch", "Was machst du gern?"]
    };
    div.innerHTML = '';
    (suggestions[scenario] || suggestions.free).forEach(s => {
        const btn = document.createElement('button'); btn.textContent = s;
        btn.onclick = () => { document.getElementById('chatInput').value = s; };
        div.appendChild(btn);
    });
}

function startChatSpeech() {
    if (!('webkitSpeechRecognition' in window)) { showToast('❌ Użyj Chrome'); return; }
    const recognition = new webkitSpeechRecognition(); recognition.lang = 'de-DE';
    showToast('🎤 Mów po niemiecku...');
    recognition.onresult = e => { document.getElementById('chatInput').value = e.results[0][0].transcript; };
    recognition.start();
}
