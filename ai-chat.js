function getGeminiApiKey() { return localStorage.getItem('geminiApiKey') || ''; }
function setGeminiApiKey(key) { localStorage.setItem('geminiApiKey', key); }
function hasApiKey() { return getGeminiApiKey().length > 10; }

let aiConversationHistory = [];
function clearAIHistory() { aiConversationHistory = []; }

async function callGeminiAI(userMessage) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) return { success: false, error: 'Brak klucza API' };
    
    const prompt = "Jesteś nauczycielem niemieckiego. Odpowiadaj po niemiecku, dodaj tłumaczenie (pol: ...). Max 2 zdania.\n\nUczeń: " + userMessage;
    
    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=' + apiKey, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        
        const data = await response.json();
        console.log('API:', data);
        
        if (data.error) return { success: false, error: data.error.message };
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return { success: true, response: data.candidates[0].content.parts[0].text };
        }
        return { success: false, error: 'Brak odpowiedzi' };
    } catch (e) {
        return { success: false, error: e.message };
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
        if (typeof addXP === 'function') addXP(5);
    } else {
        addAIChatBubble('❌ ' + result.error, 'bot');
    }
}

function addAIChatBubble(text, type) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'chat-message ' + type;
    
    if (type === 'user') {
        div.innerHTML = '<span>' + text + '</span>';
    } else {
        let formatted = text.replace(/\n/g, '<br>').replace(/\(pol:([^)]+)\)/gi, '<small style="color:#888">(🇵🇱$1)</small>');
        div.innerHTML = '<span>' + formatted + '</span>';
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showAITyping() {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.id = 'aiTyping';
    div.innerHTML = '<span>🤖 AI pisze...</span>';
    container.appendChild(div);
}

function hideAITyping() {
    const el = document.getElementById('aiTyping');
    if (el) el.remove();
}

function showApiKeyPopup() {
    if (document.querySelector('.api-popup')) return;
    const popup = document.createElement('div');
    popup.className = 'api-popup';
    popup.innerHTML = '<div style="background:#1a1a2e;padding:25px;border-radius:15px;max-width:350px;margin:20px;"><h3 style="margin:0 0 15px">🔑 Klucz API</h3><p>Wejdź na <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#667eea">aistudio.google.com</a> i utwórz klucz.</p><input id="apiKeyField" placeholder="AIzaSy..." style="width:100%;padding:12px;margin:15px 0;border-radius:8px;border:1px solid #444;background:#2a2a4a;color:white;"><div style="display:flex;gap:10px"><button onclick="saveApiKey()" style="flex:1;padding:12px;background:#667eea;border:none;border-radius:8px;color:white;cursor:pointer">Zapisz</button><button onclick="closeApiPopup()" style="flex:1;padding:12px;background:#444;border:none;border-radius:8px;color:white;cursor:pointer">Anuluj</button></div></div>';
    popup.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999';
    document.body.appendChild(popup);
}

function saveApiKey() {
    const key = document.getElementById('apiKeyField').value.trim();
    if (key.startsWith('AIza')) {
        setGeminiApiKey(key);
        closeApiPopup();
        if (typeof showToast === 'function') showToast('✅ Zapisano!');
    }
}

function closeApiPopup() {
    const p = document.querySelector('.api-popup');
    if (p) p.remove();
}

function startAIScenario(scenario) {
    const container = document.getElementById('chatContainer');
    if (container) {
        container.innerHTML = '<div class="chat-message bot"><span>Hallo! Wie kann ich dir helfen?<br><small style="color:#888">(🇵🇱 Cześć! Jak mogę ci pomóc?)</small></span></div>';
    }
}

function startChatSpeech() {
    if (typeof showToast === 'function') showToast('🎤 Użyj klawiatury');
}
