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

function getAISystemPrompt() {
    const level = state.currentLanguageLevel || 'A1';
    const scenario = state.chatScenario || 'free';
    return `Jesteś nauczycielem niemieckiego. Odpowiadaj po niemiecku, dodaj tłumaczenie (pol: ...). Poziom: ${level}. Poprawiaj błędy. Max 3 zdania.`;
}

async function callGeminiAI(userMessage) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) return { success: false, error: 'Brak klucza API' };
    
    const prompt = getAISystemPrompt() + "\n\nUczeń: " + userMessage;
    
    // Model który DZIAŁA z darmowym API
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    try {
        console.log('Wysyłam do Gemini...');
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        
        const data = await response.json();
        console.log('Odpowiedź:', data);
        
        if (data.error) {
            return { success: false, error: data.error.message };
        }
        
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return { success: true, response: data.candidates[0].content.parts[0].text };
        }
        
        return { success: false, error: 'Brak odpowiedzi od AI' };
    } catch (error) {
        console.error('Błąd:', error);
        return { success: false, error: 'Błąd połączenia: ' + error.message };
    }
}

async function sendAIMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    if (!hasApiKey()) { showApiKeyPopup(); return; }
    
    input.value = '';
    addAIChatBubble(message, 'user');
    showAITyping();
    
    const result = await callGeminiAI(message);
    hideAITyping();
    
    if (result.success) {
        addAIChatBubble(result.response, 'bot');
        addXP(5);
        const german = extractGerman(result.response);
        if (german && state.autoSpeak) setTimeout(() => speak(german), 300);
    } else {
        addAIChatBubble('❌ ' + result.error, 'bot');
    }
}

function extractGerman(text) {
    let german = text.split('\n')[0] || text;
    german = german.replace(/\(pol:.*?\)/gi, '').replace(/\(PL:.*?\)/gi, '').trim();
    return german;
}

function addAIChatBubble(text, type) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'chat-message ' + type;
    
    if (type === 'user') {
        div.innerHTML = `<span>${text}</span>`;
    } else {
        let formatted = text.replace(/\n/g, '<br>').replace(/\(pol:([^)]+)\)/gi, '<small class="ai-pl">(🇵🇱$1)</small>');
        const german = extractGerman(text).replace(/'/g, "\\'");
        div.innerHTML = `<span>${formatted}</span><div class="message-actions"><button onclick="speak('${german}')">🔊</button><button onclick="speakSlow('${german}')">🐢</button></div>`;
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showAITyping() {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'chat-message bot'; div.id = 'aiTyping';
    div.innerHTML = '<span>🤖 AI pisze...</span>';
    container.appendChild(div);
}
function hideAITyping() { const el = document.getElementById('aiTyping'); if (el) el.remove(); }

function showApiKeyPopup() {
    const existing = document.querySelector('.api-popup'); if (existing) existing.remove();
    const popup = document.createElement('div');
    popup.className = 'api-popup';
    popup.innerHTML = `<div class="api-popup-content"><h3>🔑 Klucz API Gemini</h3>
        <p>1. Wejdź na <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#667eea">aistudio.google.com/app/apikey</a></p>
        <p>2. Zaloguj się i kliknij "Create API Key"</p>
        <input type="text" id="apiKeyField" placeholder="AIzaSy..." value="${getGeminiApiKey()}" style="width:100%;padding:12px;border-radius:8px;border:1px solid #444;background:#2a2a4a;color:white;margin:10px 0;">
        <div style="display:flex;gap:10px;"><button onclick="saveApiKey()" style="flex:1;padding:12px;background:#667eea;border:none;border-radius:8px;color:white;cursor:pointer;">💾 Zapisz</button>
        <button onclick="closeApiPopup()" style="flex:1;padding:12px;background:#444;border:none;border-radius:8px;color:white;cursor:pointer;">❌ Anuluj</button></div></div>`;
    document.body.appendChild(popup);
}
function saveApiKey() {
    const key = document.getElementById('apiKeyField').value.trim();
    if (key && key.startsWith('AIza')) { setGeminiApiKey(key); closeApiPopup(); showToast('✅ Klucz zapisany!'); }
    else showToast('❌ Nieprawidłowy klucz');
}
function closeApiPopup() { const popup = document.querySelector('.api-popup'); if (popup) popup.remove(); }

function startAIScenario(scenario) {
    state.chatScenario = scenario; clearAIHistory();
    document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
    if (event?.target) event.target.classList.add('active');
    const container = document.getElementById('chatContainer'); 
    if (container) container.innerHTML = '';
    const greetings = {
        cafe: "Guten Tag! Was darf es sein?<br><small class='ai-pl'>(🇵🇱 Co podać?)</small>",
        shop: "Hallo! Kann ich helfen?<br><small class='ai-pl'>(🇵🇱 Mogę pomóc?)</small>",
        doctor: "Was führt Sie zu mir?<br><small class='ai-pl'>(🇵🇱 Co Pana sprowadza?)</small>",
        hotel: "Haben Sie reserviert?<br><small class='ai-pl'>(🇵🇱 Ma Pan rezerwację?)</small>",
        free: "Hallo! Worüber möchtest du sprechen?<br><small class='ai-pl'>(🇵🇱 O czym chcesz rozmawiać?)</small>"
    };
    if (container) {
        const div = document.createElement('div'); div.className = 'chat-message bot';
        div.innerHTML = `<span>${greetings[scenario] || greetings.free}</span>`;
        container.appendChild(div);
    }
    updateAISuggestions(scenario);
}

function updateAISuggestions(scenario) {
    const div = document.getElementById('chatSuggestions'); if (!div) return;
    const suggestions = {
        cafe: ["Einen Kaffee, bitte", "Was kostet das?"],
        shop: ["Ich suche...", "Wie viel kostet das?"],
        free: ["Wie geht es dir?", "Ich lerne Deutsch"]
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
    showToast('🎤 Mów...');
    recognition.onresult = e => { document.getElementById('chatInput').value = e.results[0][0].transcript; };
    recognition.start();
}
