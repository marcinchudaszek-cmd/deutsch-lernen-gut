// ==================== STAN APLIKACJI ====================
let state = {
    currentScreen: 'menu',
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    wordsLearned: [],
    wordsMastered: [],
    quizzesDone: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    achievements: [],
    customWords: [],
    theme: 'dark',
    memoryGamesPlayed: 0,
    memoryBestMoves: {},
    currentCategory: 'basics',
    currentCardIndex: 0,
    currentCards: [],
    quizWords: [],
    quizIndex: 0,
    quizScore: 0,
    listeningWord: null,
    speakingWord: null,
    chatScenario: 'free',
    currentLanguageLevel: 'A1',
    autoSpeak: true,
    reverseMode: false,
    wrongWords: [],
    wordProgress: {}
};

let reviewMode = false;

const levelSystem = [
    { level: 1, title: "🌱 Początkujący", xpRequired: 0 },
    { level: 2, title: "🌿 Uczeń", xpRequired: 100 },
    { level: 3, title: "📗 Student", xpRequired: 250 },
    { level: 4, title: "📘 Zaawansowany", xpRequired: 450 },
    { level: 5, title: "📕 Ekspert", xpRequired: 700 },
    { level: 6, title: "🎓 Absolwent", xpRequired: 1000 },
    { level: 7, title: "👨‍🏫 Nauczyciel", xpRequired: 1400 },
    { level: 8, title: "🏆 Mistrz", xpRequired: 1900 },
    { level: 9, title: "⭐ Gwiazda", xpRequired: 2500 },
    { level: 10, title: "💎 Diament", xpRequired: 3200 },
    { level: 11, title: "🔥 Płomień", xpRequired: 4000 },
    { level: 12, title: "⚡ Błyskawica", xpRequired: 5000 },
    { level: 13, title: "🌟 Supergwiazda", xpRequired: 6200 },
    { level: 14, title: "🎯 Snajper", xpRequired: 7500 },
    { level: 15, title: "🦅 Orzeł", xpRequired: 9000 },
    { level: 16, title: "🐉 Smok", xpRequired: 11000 },
    { level: 17, title: "👑 Król", xpRequired: 13500 },
    { level: 18, title: "🏅 Olimpijczyk", xpRequired: 16500 },
    { level: 19, title: "🌈 Tęcza", xpRequired: 20000 },
    { level: 20, title: "🚀 Legenda", xpRequired: 25000 }
];

let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = 0;
let memoryMoves = 0;
let memoryDifficulty = 'easy';
let memoryLocked = false;

// ==================== SYSTEM DŹWIĘKÓW ====================
let audioContext = null;
let soundEnabled = true;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playCorrectSound() {
    if (!soundEnabled) return;
    try {
        const oscillator = getAudioContext().createOscillator();
        const gainNode = getAudioContext().createGain();
        oscillator.connect(gainNode);
        gainNode.connect(getAudioContext().destination);
        oscillator.frequency.setValueAtTime(523.25, getAudioContext().currentTime);
        oscillator.frequency.setValueAtTime(659.25, getAudioContext().currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, getAudioContext().currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, getAudioContext().currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + 0.4);
        oscillator.start(getAudioContext().currentTime);
        oscillator.stop(getAudioContext().currentTime + 0.4);
    } catch(e) {}
}

function playWrongSound() {
    if (!soundEnabled) return;
    try {
        const oscillator = getAudioContext().createOscillator();
        const gainNode = getAudioContext().createGain();
        oscillator.connect(gainNode);
        gainNode.connect(getAudioContext().destination);
        oscillator.frequency.setValueAtTime(200, getAudioContext().currentTime);
        oscillator.frequency.setValueAtTime(150, getAudioContext().currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.3, getAudioContext().currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + 0.3);
        oscillator.start(getAudioContext().currentTime);
        oscillator.stop(getAudioContext().currentTime + 0.3);
    } catch(e) {}
}

function playClickSound() {
    if (!soundEnabled) return;
    try {
        const oscillator = getAudioContext().createOscillator();
        const gainNode = getAudioContext().createGain();
        oscillator.connect(gainNode);
        gainNode.connect(getAudioContext().destination);
        oscillator.frequency.setValueAtTime(800, getAudioContext().currentTime);
        gainNode.gain.setValueAtTime(0.1, getAudioContext().currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + 0.05);
        oscillator.start(getAudioContext().currentTime);
        oscillator.stop(getAudioContext().currentTime + 0.05);
    } catch(e) {}
}

function playLevelUpSound() {
    if (!soundEnabled) return;
    try {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            const oscillator = getAudioContext().createOscillator();
            const gainNode = getAudioContext().createGain();
            oscillator.connect(gainNode);
            gainNode.connect(getAudioContext().destination);
            oscillator.frequency.setValueAtTime(freq, getAudioContext().currentTime + i * 0.15);
            gainNode.gain.setValueAtTime(0.3, getAudioContext().currentTime + i * 0.15);
            gainNode.gain.exponentialRampToValueAtTime(0.01, getAudioContext().currentTime + i * 0.15 + 0.3);
            oscillator.start(getAudioContext().currentTime + i * 0.15);
            oscillator.stop(getAudioContext().currentTime + i * 0.15 + 0.3);
        });
    } catch(e) {}
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggle');
    if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
    showToast(soundEnabled ? '🔊 Dźwięki włączone' : '🔇 Dźwięki wyłączone');
}

// ==================== ULEPSZONA WYMOWA NATIVE SPEAKER ====================
let speechVoices = [];
let germanVoice = null;

// Załaduj głosy
function loadVoices() {
    speechVoices = speechSynthesis.getVoices();
    
    // Szukaj najlepszego niemieckiego głosu
    const germanVoices = speechVoices.filter(v => v.lang.startsWith('de'));
    
    // Preferuj głosy Google/Microsoft które brzmią najlepiej
    germanVoice = germanVoices.find(v => v.name.includes('Google')) ||
                  germanVoices.find(v => v.name.includes('Microsoft')) ||
                  germanVoices.find(v => v.name.includes('Anna')) ||
                  germanVoices.find(v => v.name.includes('Hans')) ||
                  germanVoices[0] || null;
    
    console.log('🔊 Załadowano głos:', germanVoice?.name || 'domyślny');
}

// Załaduj głosy gdy będą gotowe
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
}

// ULEPSZONA funkcja wymowy
function speak(text, rate = 0.85) {
    if (!('speechSynthesis' in window)) {
        showToast('❌ Twoja przeglądarka nie wspiera wymowy');
        return;
    }
    
    // Anuluj poprzednią wymowę
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Użyj najlepszego głosu jeśli dostępny
    if (germanVoice) {
        utterance.voice = germanVoice;
    }
    
    // Wizualne potwierdzenie
    utterance.onstart = function() {
        document.querySelectorAll('.speaking').forEach(el => el.classList.remove('speaking'));
    };
    
    speechSynthesis.speak(utterance);
}

// Wymowa wolna (do nauki)
function speakSlow(text) {
    speak(text, 0.6);
    showToast('🐢 Wolna wymowa');
}

// Wymowa normalna
function speakNormal(text) {
    speak(text, 0.85);
}

// Wymowa szybka (native speed)
function speakFast(text) {
    speak(text, 1.1);
    showToast('🚀 Szybka wymowa');
}

// Toggle automatycznej wymowy
function toggleAutoSpeak() {
    state.autoSpeak = !state.autoSpeak;
    saveState();
    showToast(state.autoSpeak ? '🔊 Auto-wymowa ON' : '🔇 Auto-wymowa OFF');
}

document.addEventListener('DOMContentLoaded', function() {
    loadState();
    updateUI();
    checkStreak();
    applyTheme();
    displayCustomWords();
    countTotalWords();
    loadVoices();
    updateReviewBadge();
});

function loadState() {
    const saved = localStorage.getItem('deutschAppState');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
}

function saveState() {
    localStorage.setItem('deutschAppState', JSON.stringify(state));
}

function countTotalWords() {
    let total = 0;
    Object.keys(wordDatabase).forEach(function(key) {
        total += wordDatabase[key].length;
    });
    total += state.customWords.length;
    const el = document.getElementById('totalWordsCount');
    if (el) el.textContent = total;
}

function updateUI() {
    document.getElementById('totalXP').textContent = state.xp;
    document.getElementById('streak').textContent = state.streak;
    
    let currentLevelData = levelSystem[0];
    let nextLevelData = levelSystem[1];
    
    for (let i = levelSystem.length - 1; i >= 0; i--) {
        if (state.xp >= levelSystem[i].xpRequired) {
            currentLevelData = levelSystem[i];
            nextLevelData = levelSystem[i + 1] || levelSystem[i];
            break;
        }
    }
    
    state.level = currentLevelData.level;
    
    document.getElementById('userLevel').textContent = 'Poziom ' + state.level;
    document.getElementById('levelTitle').textContent = currentLevelData.title;
    
    const xpInLevel = state.xp - currentLevelData.xpRequired;
    const xpForNext = nextLevelData.xpRequired - currentLevelData.xpRequired;
    const progress = Math.min((xpInLevel / xpForNext) * 100, 100);
    
    document.getElementById('levelProgress').style.width = progress + '%';
    document.getElementById('xpToNext').textContent = Math.max(0, nextLevelData.xpRequired - state.xp);
    
    saveState();
}

function checkStreak() {
    const today = new Date().toDateString();
    if (state.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (state.lastStudyDate === yesterday.toDateString()) {
            state.streak++;
            checkAchievement('week_streak', state.streak >= 7);
            checkAchievement('month_streak', state.streak >= 30);
        } else if (state.lastStudyDate !== null) {
            state.streak = 1;
        } else {
            state.streak = 1;
        }
        state.lastStudyDate = today;
        saveState();
        updateUI();
    }
}

function setLanguageLevel(level, btn) {
    state.currentLanguageLevel = level;
    document.querySelectorAll('.lang-level-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    const el = document.getElementById('currentLangLevel');
    if (el) el.textContent = level;
    saveState();
    showToast('Poziom: ' + level);
}

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

// ==================== SRS + POWTÓRKA BŁĘDÓW ====================

function updateSRS(wordKey, correct) {
    if (!state.wordProgress) state.wordProgress = {};
    const p = state.wordProgress[wordKey] || { correct: 0, wrong: 0, interval: 0, ease: 2.5 };
    if (correct) {
        p.correct++;
        if (p.interval === 0)      p.interval = 1;
        else if (p.interval === 1) p.interval = 4;
        else p.interval = Math.min(Math.round(p.interval * (p.ease || 2.5)), 60);
        p.ease = Math.min(2.5, (p.ease || 2.5) + 0.1);
    } else {
        p.wrong++;
        p.interval = 1;
        p.ease = Math.max(1.3, (p.ease || 2.5) - 0.2);
    }
    const next = new Date();
    next.setDate(next.getDate() + p.interval);
    p.nextReview = next.toISOString().split('T')[0];
    state.wordProgress[wordKey] = p;
}

function getSRSDueWords() {
    if (!state.wordProgress) return [];
    const today = new Date().toISOString().split('T')[0];
    const due = [];
    const found = new Set();
    Object.keys(state.wordProgress).forEach(function(wordKey) {
        const p = state.wordProgress[wordKey];
        if (p.nextReview && p.nextReview <= today && !found.has(wordKey)) {
            Object.keys(wordDatabase).some(function(cat) {
                const w = wordDatabase[cat].find(function(w) { return (w.german || w.de) === wordKey; });
                if (w) { due.push(w); found.add(wordKey); return true; }
                return false;
            });
        }
    });
    return due;
}

function getReviewCount() {
    const allKeys = new Set(state.wrongWords || []);
    getSRSDueWords().forEach(function(w) { allKeys.add(w.german || w.de); });
    return allKeys.size;
}

function updateReviewBadge() {
    const badge = document.getElementById('reviewBadge');
    if (!badge) return;
    const count = getReviewCount();
    badge.textContent = count > 99 ? '99+' : count;
    badge.classList.toggle('hidden', count === 0);
}

function startReview() {
    const allKeys = new Set(state.wrongWords || []);
    getSRSDueWords().forEach(function(w) { allKeys.add(w.german || w.de); });

    if (allKeys.size === 0) {
        showToast('🎉 Brak słówek do powtórki!');
        return;
    }

    const cards = [];
    allKeys.forEach(function(wordKey) {
        let found = null;
        Object.keys(wordDatabase).some(function(cat) {
            const w = wordDatabase[cat].find(function(w) { return (w.german || w.de) === wordKey; });
            if (w) { found = w; return true; }
            return false;
        });
        if (!found) found = (state.customWords || []).find(function(w) { return (w.german || w.de) === wordKey; });
        if (found) cards.push(found);
    });

    if (cards.length === 0) { showToast('❌ Nie znaleziono słówek'); return; }

    state.currentCards = shuffleArray(cards);
    state.currentCardIndex = 0;
    reviewMode = true;

    showScreen('flashcards');
    const ll = document.getElementById('currentLangLevel');
    if (ll) ll.textContent = '🔁 Powtórka (' + cards.length + ')';
    showCurrentCard();
}

function toggleReverseMode() {
    state.reverseMode = !state.reverseMode;
    const btn = document.getElementById('reverseBtn');
    if (btn) {
        btn.textContent = state.reverseMode ? '🔄 DE→PL' : '🔄 PL→DE';
        btn.classList.toggle('active', state.reverseMode);
    }
    saveState();
    showToast(state.reverseMode ? '🔄 Tryb odwrócony: PL→DE' : '🔄 Tryb normalny: DE→PL');
    if (state.currentCards.length > 0) showCurrentCard();
}

function getWordsForCurrentLevel() {
    const maxIdx = LEVEL_ORDER.indexOf(state.currentLanguageLevel);
    let words = [];
    Object.keys(wordDatabase).forEach(function(key) {
        wordDatabase[key].forEach(function(word) {
            const idx = LEVEL_ORDER.indexOf(word.level);
            if (idx === -1 || idx <= maxIdx) words.push(word);
        });
    });
    return words;
}

function filterDictByLevel(level, btn) {
    currentDictLevel = level;
    document.querySelectorAll('.dict-level-btn').forEach(function(b) { 
        b.classList.remove('active'); 
    });
    btn.classList.add('active');
    displayWords();
    showToast('Filtr: ' + (level === 'all' ? 'Wszystkie' : level));
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
    showToast(state.theme === 'light' ? '☀️ Tryb jasny' : '🌙 Tryb ciemny');
}

function applyTheme() {
    if (state.theme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('themeIcon').textContent = '☀️';
        const tt = document.getElementById('themeText');
        if (tt) tt.textContent = '☀️ Jasny';
    } else {
        document.body.classList.remove('light-mode');
        document.getElementById('themeIcon').textContent = '🌙';
        const tt = document.getElementById('themeText');
        if (tt) tt.textContent = '🌙 Ciemny';
    }
}

function goToMenu() {
    showScreen('menu');
}

const screenToTab = {
    menu: 'home', flashcards: 'home', quiz: 'home', memory: 'home',
    grammar: 'home', typing: 'home', listening: 'home', speaking: 'home',
    dictionary: 'dict', mywords: 'dict',
    chat: 'chat',
    progress: 'progress', levels: 'progress',
    reminders: 'settings'
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function(s) {
        s.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;

    const activeTab = screenToTab[screenId] || 'home';
    document.querySelectorAll('.bnav-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.tab === activeTab);
    });
}

// ==================== FISZKI Z ULEPSZONĄ WYMOWĄ ====================
function startFlashcards() {
    showScreen('flashcards');
    loadCategory();
}

function loadCategory() {
    const category = document.getElementById('categorySelect').value;
    state.currentCategory = category;
    
    if (category === 'custom') {
        if (state.customWords.length === 0) {
            showToast('❌ Dodaj najpierw własne słówka!');
            goToMenu();
            return;
        }
        state.currentCards = state.customWords.slice();
    } else {
        if (!wordDatabase[category]) {
            showToast('❌ Kategoria nie istnieje!');
            goToMenu();
            return;
        }
        const maxIdx = LEVEL_ORDER.indexOf(state.currentLanguageLevel);
        const filtered = wordDatabase[category].filter(function(w) {
            const idx = LEVEL_ORDER.indexOf(w.level);
            return idx === -1 || idx <= maxIdx;
        });
        state.currentCards = (filtered.length > 0 ? filtered : wordDatabase[category]).slice();
    }
    
    state.currentCardIndex = 0;
    showCurrentCard();
}

function showCurrentCard() {
    if (state.currentCardIndex >= state.currentCards.length) {
        if (reviewMode) {
            reviewMode = false;
            state.wrongWords = [];
            saveState();
            updateReviewBadge();
            showToast('🎉 Powtórka zakończona!');
        } else {
            showToast('🎉 Ukończono kategorię!');
            addXP(20);
        }
        goToMenu();
        return;
    }

    const card = state.currentCards[state.currentCardIndex];
    const germanWord = card.german || card.de || '?';
    const polishWord = card.polish || card.pl || '?';

    const frontEl = document.getElementById('germanWord');
    const backEl = document.getElementById('polishWord');

    if (state.reverseMode) {
        frontEl.textContent = polishWord;
        backEl.textContent = germanWord;
    } else {
        frontEl.textContent = germanWord;
        backEl.textContent = polishWord;
    }
    document.getElementById('exampleSentence').textContent = card.example || '';
    document.getElementById('cardCounter').textContent =
        (state.currentCardIndex + 1) + ' / ' + state.currentCards.length;

    document.getElementById('flashcardInner').classList.remove('flipped');

    if (state.autoSpeak) {
        setTimeout(() => speak(state.reverseMode ? polishWord : germanWord), 300);
    }
}

function flipCard() {
    document.getElementById('flashcardInner').classList.toggle('flipped');

    const card = state.currentCards[state.currentCardIndex];
    const germanWord = card.german || card.de;

    if (document.getElementById('flashcardInner').classList.contains('flipped')) {
        setTimeout(() => speak(germanWord), 200);
    }
}

function markWord(known) {
    const card = state.currentCards[state.currentCardIndex];
    const wordKey = card.german || card.de;

    if (!wordKey) {
        state.currentCardIndex++;
        showCurrentCard();
        return;
    }

    if (known) {
        addXP(5);
        const wi = (state.wrongWords || []).indexOf(wordKey);
        if (wi !== -1) state.wrongWords.splice(wi, 1);
        if (state.wordsLearned.indexOf(wordKey) === -1) {
            state.wordsLearned.push(wordKey);
            checkAchievement('first_word', true);
            checkAchievement('ten_words', state.wordsLearned.length >= 10);
            checkAchievement('fifty_words', state.wordsLearned.length >= 50);
            checkAchievement('hundred_words', state.wordsLearned.length >= 100);
        }
        state.wordsMastered.push(wordKey);
        addTodayWord(wordKey);
        playCorrectSound();
        updateSRS(wordKey, true);
    } else {
        if (!state.wrongWords) state.wrongWords = [];
        if (state.wrongWords.indexOf(wordKey) === -1) state.wrongWords.push(wordKey);
        playWrongSound();
        updateSRS(wordKey, false);
    }

    state.currentCardIndex++;
    saveState();
    updateReviewBadge();
    showCurrentCard();
}

// ULEPSZONE: Przyciski wymowy dla fiszek
function playSound() {
    const card = state.currentCards[state.currentCardIndex];
    const word = card.german || card.de;
    speak(word);
}

function playSoundSlow() {
    const card = state.currentCards[state.currentCardIndex];
    const word = card.german || card.de;
    speakSlow(word);
}

function playSoundFast() {
    const card = state.currentCards[state.currentCardIndex];
    const word = card.german || card.de;
    speakFast(word);
}

// Wymów przykładowe zdanie
function playExample() {
    const card = state.currentCards[state.currentCardIndex];
    if (card.example) {
        speak(card.example, 0.8);
        showToast('📝 Przykład');
    } else {
        showToast('Brak przykładu');
    }
}

// ==================== MEMORY Z WYMOWĄ ====================
function startMemory() {
    showScreen('memory');
    initMemory();
}

function setMemoryDifficulty(diff, btn) {
    memoryDifficulty = diff;
    document.querySelectorAll('.diff-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    initMemory();
}

function initMemory() {
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = 0;
    memoryMoves = 0;
    memoryLocked = false;
    
    let pairCount = 6;
    if (memoryDifficulty === 'medium') pairCount = 8;
    if (memoryDifficulty === 'hard') pairCount = 12;
    
    document.getElementById('memoryTotal').textContent = pairCount;
    document.getElementById('memoryMoves').textContent = '0';
    document.getElementById('memoryPairs').textContent = '0';
    
    const allWords = getWordsForCurrentLevel();

    const selectedWords = shuffleArray(allWords).slice(0, pairCount);
    
    selectedWords.forEach(function(word, index) {
        memoryCards.push({ 
            id: index * 2, 
            pairId: index, 
            text: word.german || word.de, 
            type: 'de' 
        });
        memoryCards.push({ 
            id: index * 2 + 1, 
            pairId: index, 
            text: word.polish || word.pl, 
            type: 'pl' 
        });
    });
    
    memoryCards = shuffleArray(memoryCards);
    renderMemoryBoard();
}

function renderMemoryBoard() {
    const board = document.getElementById('memoryBoard');
    board.className = 'memory-board ' + memoryDifficulty;
    board.innerHTML = '';
    
    memoryCards.forEach(function(card, index) {
        const div = document.createElement('div');
        div.className = 'memory-card';
        div.innerHTML = '<span class="card-back">?</span>';
        div.onclick = function() { flipMemoryCard(index); };
        board.appendChild(div);
    });
}

function flipMemoryCard(index) {
    if (memoryLocked) return;
    if (memoryFlipped.includes(index)) return;
    if (memoryFlipped.length >= 2) return;
    
    playClickSound();
    
    const cardElements = document.querySelectorAll('.memory-card');
    const card = memoryCards[index];
    
    cardElements[index].classList.add('flipped');
    cardElements[index].innerHTML = '<span>' + card.text + '</span>';
    
    // NOWE: Wymów słowo po odkryciu karty (tylko niemieckie)
    if (card.type === 'de') {
        speak(card.text);
    }
    
    memoryFlipped.push(index);
    
    if (memoryFlipped.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        
        const card1 = memoryCards[memoryFlipped[0]];
        const card2 = memoryCards[memoryFlipped[1]];
        
        if (card1.pairId === card2.pairId && card1.type !== card2.type) {
            memoryMatched++;
            document.getElementById('memoryPairs').textContent = memoryMatched;
            playCorrectSound();
            
            cardElements[memoryFlipped[0]].classList.add('matched');
            cardElements[memoryFlipped[1]].classList.add('matched');
            
            // NOWE: Wymów parę po dopasowaniu
            const germanCard = card1.type === 'de' ? card1 : card2;
            setTimeout(() => speak(germanCard.text), 300);
            
            memoryFlipped = [];
            
            const totalPairs = memoryCards.length / 2;
            if (memoryMatched === totalPairs) {
                setTimeout(function() {
                    memoryWin();
                }, 500);
            }
        } else {
            playWrongSound();
            memoryLocked = true;
            setTimeout(function() {
                cardElements[memoryFlipped[0]].classList.remove('flipped');
                cardElements[memoryFlipped[0]].innerHTML = '<span class="card-back">?</span>';
                cardElements[memoryFlipped[1]].classList.remove('flipped');
                cardElements[memoryFlipped[1]].innerHTML = '<span class="card-back">?</span>';
                memoryFlipped = [];
                memoryLocked = false;
            }, 1000);
        }
    }
}

function memoryWin() {
    state.memoryGamesPlayed++;
    checkAchievement('first_memory', true);
    checkAchievement('memory_master', state.memoryGamesPlayed >= 10);
    
    let baseXP = 30;
    if (memoryDifficulty === 'medium') baseXP = 50;
    if (memoryDifficulty === 'hard') baseXP = 80;
    
    const pairs = memoryCards.length / 2;
    const bonus = Math.max(0, (pairs * 2 - memoryMoves) * 2);
    const totalXP = baseXP + bonus;
    
    addXP(totalXP);
    
    const key = memoryDifficulty + '_best';
    if (!state.memoryBestMoves[key] || memoryMoves < state.memoryBestMoves[key]) {
        state.memoryBestMoves[key] = memoryMoves;
        showToast('🏆 Nowy rekord! ' + memoryMoves + ' ruchów! +' + totalXP + ' XP');
    } else {
        showToast('🎉 Wygrana! +' + totalXP + ' XP');
    }
    
    saveState();
}

function restartMemory() {
    initMemory();
}

// ==================== QUIZ Z WYMOWĄ ====================
function startQuiz() {
    showScreen('quiz');

    let allWords = getWordsForCurrentLevel();

    if (state.customWords.length > 0) {
        allWords = allWords.concat(state.customWords);
    }

    state.quizWords = shuffleArray(allWords).slice(0, 10);
    state.quizIndex = 0;
    state.quizScore = 0;
    
    showQuizQuestion();
}

function showQuizQuestion() {
    if (state.quizIndex >= state.quizWords.length) {
        endQuiz();
        return;
    }
    
    const word = state.quizWords[state.quizIndex];
    const correctPolish = word.polish || word.pl;
    const correctGerman = word.german || word.de;
    
    document.getElementById('quizProgress').textContent = 
        'Pytanie ' + (state.quizIndex + 1) + '/' + state.quizWords.length;
    document.getElementById('quizScore').textContent = 'Wynik: ' + state.quizScore;
    
    // NOWE: Dodaj przycisk wymowy przy słówku
    document.getElementById('quizWord').innerHTML = 
        '<span class="quiz-word-text">' + correctGerman + '</span>' +
        '<button class="quiz-speak-btn" onclick="speakQuizWord()" title="Posłuchaj wymowy">' +
        '🔊</button>';
    
    // NOWE: Automatyczna wymowa
    if (state.autoSpeak) {
        setTimeout(() => speak(correctGerman), 300);
    }
    
    const allTranslations = getWordsForCurrentLevel()
        .map(function(w) { return w.polish || w.pl; })
        .filter(function(p) { return p && p !== correctPolish; });
    
    const wrongOptions = shuffleArray(allTranslations).slice(0, 3);
    const options = shuffleArray([correctPolish].concat(wrongOptions));
    
    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    
    options.forEach(function(option) {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = function() { checkQuizAnswer(option, correctPolish, btn); };
        container.appendChild(btn);
    });
    
    document.getElementById('quizFeedback').classList.add('hidden');
}

// NOWE: Funkcja wymowy dla quizu
function speakQuizWord() {
    const word = state.quizWords[state.quizIndex];
    const germanWord = word.german || word.de;
    speak(germanWord);
}

function checkQuizAnswer(selected, correct, btn) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(function(opt) { opt.onclick = null; });
    
    state.totalAnswers++;
    
    const word = state.quizWords[state.quizIndex];
    const germanWord = word.german || word.de;
    
    if (selected === correct) {
        btn.classList.add('correct');
        state.quizScore++;
        state.correctAnswers++;
        addXP(10);
        showQuizFeedback('✅ Dobrze! ' + germanWord + ' = ' + correct, 'success');
        playCorrectSound();
        speak(germanWord);
        const wi = (state.wrongWords || []).indexOf(germanWord);
        if (wi !== -1) state.wrongWords.splice(wi, 1);
        updateSRS(germanWord, true);
    } else {
        btn.classList.add('wrong');
        options.forEach(function(opt) {
            if (opt.textContent === correct) opt.classList.add('correct');
        });
        showQuizFeedback('❌ ' + germanWord + ' = ' + correct, 'error');
        playWrongSound();
        setTimeout(() => speak(germanWord), 500);
        if (!state.wrongWords) state.wrongWords = [];
        if (state.wrongWords.indexOf(germanWord) === -1) state.wrongWords.push(germanWord);
        updateSRS(germanWord, false);
    }

    saveState();
    updateReviewBadge();
    setTimeout(function() {
        state.quizIndex++;
        showQuizQuestion();
    }, 1500);
}

function showQuizFeedback(message, type) {
    const feedback = document.getElementById('quizFeedback');
    feedback.textContent = message;
    feedback.className = 'quiz-feedback ' + type;
}

function endQuiz() {
    state.quizzesDone++;
    checkAchievement('first_quiz', true);
    checkAchievement('ten_quizzes', state.quizzesDone >= 10);
    checkAchievement('perfect_quiz', state.quizScore === state.quizWords.length);
    
    addXP(state.quizScore * 5);
    showToast('🎉 Wynik: ' + state.quizScore + '/' + state.quizWords.length);
    saveState();
    
    setTimeout(goToMenu, 1500);
}

// ==================== GRAMATYKA ====================
function startGrammar() {
    showScreen('grammar');
    document.getElementById('grammarContent').classList.add('hidden');
    document.getElementById('grammarExercise').classList.add('hidden');
}

function loadGrammarTopic(topic) {
    const data = grammarData[topic];
    const content = document.getElementById('grammarContent');
    
    content.innerHTML = data.content +
        '<button class="check-btn" onclick="startGrammarExercise(\'' + topic + '\')">▶️ Ćwiczenie</button>';
    
    content.classList.remove('hidden');
    document.getElementById('grammarExercise').classList.add('hidden');
    addXP(5);
    saveState();
}

function startGrammarExercise(topic) {
    const data = grammarData[topic];
    const exercise = document.getElementById('grammarExercise');
    
    const ex = data.exercises[Math.floor(Math.random() * data.exercises.length)];
    
    let optionsHtml = '';
    ex.options.forEach(function(opt) {
        optionsHtml += '<button class="quiz-option" onclick="checkGrammarAnswer(\'' + opt.replace(/'/g, "\\'") + '\', \'' + ex.answer.replace(/'/g, "\\'") + '\', this)">' + opt + '</button>';
    });
    
    exercise.innerHTML = 
        '<h4>Uzupełnij:</h4>' +
        '<p class="grammar-sentence">' + ex.question + '</p>' +
        '<div class="grammar-options">' + optionsHtml + '</div>' +
        '<div id="grammarFeedback" class="feedback hidden"></div>';
    
    exercise.classList.remove('hidden');
}

function checkGrammarAnswer(selected, correct, btn) {
    const feedback = document.getElementById('grammarFeedback');
    const buttons = document.querySelectorAll('.grammar-options .quiz-option');
    buttons.forEach(function(b) { b.onclick = null; });
    
    if (selected === correct) {
        btn.classList.add('correct');
        feedback.textContent = '✅ Dobrze!';
        feedback.className = 'feedback success';
        addXP(10);
        playCorrectSound();
    } else {
        btn.classList.add('wrong');
        buttons.forEach(function(b) {
            if (b.textContent.trim() === correct) b.classList.add('correct');
        });
        feedback.textContent = '❌ Poprawna: ' + correct;
        feedback.className = 'feedback error';
        playWrongSound();
    }
    
    feedback.classList.remove('hidden');
    saveState();
}

// ==================== SŁUCHANIE Z ULEPSZONĄ WYMOWĄ ====================
function startListening() {
    showScreen('listening');
    loadListeningWord();
}

function loadListeningWord() {
    const allWords = getWordsForCurrentLevel();
    state.listeningWord = allWords[Math.floor(Math.random() * allWords.length)];
    document.getElementById('listeningInput').value = '';
    document.getElementById('listeningFeedback').classList.add('hidden');
}

function playListeningWord() {
    if (state.listeningWord) {
        const word = state.listeningWord.german || state.listeningWord.de;
        speak(word);
    }
}

// NOWE: Wolna wymowa dla słuchania
function playListeningWordSlow() {
    if (state.listeningWord) {
        const word = state.listeningWord.german || state.listeningWord.de;
        speakSlow(word);
    }
}

function checkListening() {
    const input = document.getElementById('listeningInput').value.trim().toLowerCase();
    const correct = (state.listeningWord.german || state.listeningWord.de).toLowerCase();
    const translation = state.listeningWord.polish || state.listeningWord.pl;
    const feedback = document.getElementById('listeningFeedback');
    
    if (input === correct) {
        feedback.textContent = '✅ "' + correct + '" = "' + translation + '"';
        feedback.className = 'feedback success';
        addXP(15);
        showToast('🎉 +15 XP!');
        playCorrectSound();
        speak(correct); // Wymów poprawne słowo
    } else {
        feedback.textContent = '❌ Poprawna: "' + correct + '"';
        feedback.className = 'feedback error';
        playWrongSound();
        setTimeout(() => speak(correct), 500); // Wymów żeby zapamiętać
    }
    
    feedback.classList.remove('hidden');
    saveState();
    setTimeout(loadListeningWord, 2000);
}

// ==================== MÓWIENIE ====================
let recognition = null;

function startSpeaking() {
    showScreen('speaking');
    loadSpeakingWord();
}

function loadSpeakingWord() {
    const allWords = getWordsForCurrentLevel();
    state.speakingWord = allWords[Math.floor(Math.random() * allWords.length)];
    
    document.getElementById('speakingWord').textContent = state.speakingWord.german || state.speakingWord.de;
    document.getElementById('speakingTranslation').textContent = state.speakingWord.polish || state.speakingWord.pl;
    document.getElementById('speechResult').classList.add('hidden');
    document.getElementById('speakingFeedback').classList.add('hidden');
}

function playSpeakingWord() {
    if (state.speakingWord) {
        const word = state.speakingWord.german || state.speakingWord.de;
        speak(word);
    }
}

// NOWE: Wolna wymowa dla mówienia
function playSpeakingWordSlow() {
    if (state.speakingWord) {
        const word = state.speakingWord.german || state.speakingWord.de;
        speakSlow(word);
    }
}

function startSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('❌ Użyj Chrome dla rozpoznawania mowy');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';
    
    const micBtn = document.getElementById('micButton');
    micBtn.classList.add('listening');
    micBtn.textContent = '🎤 Słucham...';
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        checkSpeech(transcript);
    };
    
    recognition.onend = function() {
        micBtn.classList.remove('listening');
        micBtn.textContent = '🎤 Naciśnij i mów';
    };
    
    recognition.onerror = function() {
        micBtn.classList.remove('listening');
        micBtn.textContent = '🎤 Naciśnij i mów';
        showToast('❌ Spróbuj ponownie');
    };
    
    recognition.start();
}

function checkSpeech(userSpeech) {
    document.getElementById('userSpeech').textContent = userSpeech;
    document.getElementById('speechResult').classList.remove('hidden');
    
    const correct = (state.speakingWord.german || state.speakingWord.de).toLowerCase();
    const spoken = userSpeech.toLowerCase().trim();
    
    const similarity = calculateSimilarity(correct, spoken);
    const feedback = document.getElementById('speakingFeedback');
    
    if (similarity > 0.8) {
        feedback.textContent = '✅ Doskonale!';
        feedback.className = 'feedback success';
        addXP(20);
        playCorrectSound();
    } else if (similarity > 0.5) {
        feedback.textContent = '👍 Nieźle! Spróbuj jeszcze raz.';
        feedback.className = 'feedback success';
        addXP(10);
    } else {
        feedback.textContent = '🔄 Posłuchaj i spróbuj ponownie';
        feedback.className = 'feedback error';
        // NOWE: Wymów poprawne słowo po błędzie
        setTimeout(() => speak(state.speakingWord.german || state.speakingWord.de), 500);
    }
    
    feedback.classList.remove('hidden');
    saveState();
}

function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    if (longer.length === 0) return 1.0;
    
    let costs = [];
    for (let i = 0; i <= longer.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= shorter.length; j++) {
            if (i === 0) costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];
                if (longer.charAt(i - 1) !== shorter.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[shorter.length] = lastValue;
    }
    return (longer.length - costs[shorter.length]) / longer.length;
}

function nextSpeakingWord() {
    loadSpeakingWord();
}

// ==================== ROZBUDOWANY CZAT AI ====================
let chatScore = 0;
let chatCorrect = 0;
let chatTotal = 0;
let currentMission = null;
let missionProgress = 0;

const chatScenarios = {
    cafe: { 
        greeting: "Willkommen im Café! Was darf es sein?<br><small>(Witamy w kawiarni! Co podać?)</small>", 
        suggestions: ["Einen Kaffee, bitte", "Was kostet ein Cappuccino?", "Die Rechnung, bitte"],
        mission: { title: "Zamów kawę i zapłać", steps: ["Przywitaj się", "Zamów napój", "Zapłać"], keywords: [["hallo", "guten tag"], ["kaffee", "tee", "cappuccino", "möchte", "bitte"], ["zahlen", "rechnung", "euro"]] },
        helpPhrases: ["Ich möchte...", "Was kostet...?", "Mit Milch, bitte", "Ohne Zucker", "Die Rechnung, bitte"]
    },
    shop: { 
        greeting: "Guten Tag! Kann ich Ihnen helfen?<br><small>(Dzień dobry! Mogę Panu/Pani pomóc?)</small>", 
        suggestions: ["Ich suche eine Jacke", "Haben Sie das in Größe M?", "Kann ich das anprobieren?"],
        mission: { title: "Kup ubranie", steps: ["Powiedz co szukasz", "Zapytaj o rozmiar", "Zapytaj o cenę"], keywords: [["suche", "brauche", "möchte"], ["größe", "groß", "klein"], ["kostet", "preis", "teuer"]] },
        helpPhrases: ["Ich suche...", "Haben Sie...?", "In Größe...", "Kann ich anprobieren?", "Zu teuer"]
    },
    travel: { 
        greeting: "Guten Tag! Wohin möchten Sie reisen?<br><small>(Dzień dobry! Dokąd chce Pan/Pani jechać?)</small>", 
        suggestions: ["Eine Fahrkarte nach Berlin", "Wann fährt der nächste Zug?", "Welches Gleis?"],
        mission: { title: "Kup bilet kolejowy", steps: ["Powiedz dokąd jedziesz", "Zapytaj o godzinę", "Kup bilet"], keywords: [["nach", "fahren", "reisen"], ["wann", "uhr", "abfahrt"], ["fahrkarte", "ticket", "kaufen"]] },
        helpPhrases: ["Eine Fahrkarte nach...", "Wann fährt...?", "Hin und zurück", "Welches Gleis?", "Erster/Zweiter Klasse"]
    },
    work: { 
        greeting: "Guten Morgen! Willkommen im Büro.<br><small>(Dzień dobry! Witamy w biurze.)</small>", 
        suggestions: ["Guten Morgen, Kollegen!", "Wann ist das Meeting?", "Ich habe eine Frage zum Projekt"],
        mission: { title: "Dzień w biurze", steps: ["Przywitaj się", "Zapytaj o spotkanie", "Omów projekt"], keywords: [["morgen", "hallo", "tag"], ["meeting", "besprechung", "termin"], ["projekt", "arbeit", "aufgabe"]] },
        helpPhrases: ["Guten Morgen!", "Wann beginnt...?", "Ich habe eine Frage", "Können wir besprechen?", "Bis später!"]
    },
    doctor: { 
        greeting: "Guten Tag! Was fehlt Ihnen?<br><small>(Dzień dobry! Co Panu/Pani dolega?)</small>", 
        suggestions: ["Ich habe Kopfschmerzen", "Seit wann haben Sie das?", "Brauche ich ein Rezept?"],
        mission: { title: "Wizyta u lekarza", steps: ["Opisz objawy", "Odpowiedz na pytania", "Zapytaj o leczenie"], keywords: [["schmerzen", "weh", "krank", "fieber"], ["seit", "tage", "woche"], ["rezept", "medikament", "tabletten"]] },
        helpPhrases: ["Ich habe Schmerzen", "Mir ist schlecht", "Seit gestern", "Ich brauche ein Rezept", "Was soll ich nehmen?"]
    },
    hotel: { 
        greeting: "Guten Abend! Willkommen im Hotel. Haben Sie reserviert?<br><small>(Dobry wieczór! Witamy w hotelu. Ma Pan/Pani rezerwację?)</small>", 
        suggestions: ["Ich habe eine Reservierung", "Ein Einzelzimmer, bitte", "Ist Frühstück inklusive?"],
        mission: { title: "Zamelduj się w hotelu", steps: ["Potwierdź rezerwację", "Zapytaj o pokój", "Zapytaj o śniadanie"], keywords: [["reservierung", "gebucht", "name"], ["zimmer", "nächte", "übernachtung"], ["frühstück", "inklusive", "wann"]] },
        helpPhrases: ["Ich habe reserviert", "Ein Zimmer für... Nächte", "Mit Frühstück?", "Wo ist...?", "Der Schlüssel, bitte"]
    },
    airport: { 
        greeting: "Guten Tag! Kann ich Ihren Pass und Ihr Ticket sehen?<br><small>(Dzień dobry! Mogę zobaczyć paszport i bilet?)</small>", 
        suggestions: ["Hier ist mein Pass", "Wo ist Gate B12?", "Ist der Flug pünktlich?"],
        mission: { title: "Odprawa na lotnisku", steps: ["Pokaż dokumenty", "Zapytaj o bramkę", "Znajdź informacje"], keywords: [["pass", "ticket", "hier"], ["gate", "wo", "terminal"], ["flug", "pünktlich", "verspätung"]] },
        helpPhrases: ["Hier ist mein Pass", "Wo ist Gate...?", "Wann ist Boarding?", "Ist der Flug verspätet?", "Wo kann ich...?"]
    },
    date: { 
        greeting: "Hallo! Schön dich zu sehen! Wie geht es dir?<br><small>(Cześć! Miło cię widzieć! Jak się masz?)</small>", 
        suggestions: ["Du siehst toll aus!", "Was machst du gern?", "Möchtest du etwas trinken?"],
        mission: { title: "Romantyczna rozmowa", steps: ["Zrób komplement", "Zapytaj o hobby", "Zaproponuj coś"], keywords: [["schön", "toll", "hübsch", "nett"], ["hobby", "gern", "magst", "freizeit"], ["möchtest", "wollen", "zusammen", "vielleicht"]] },
        helpPhrases: ["Du siehst gut aus", "Was machst du gern?", "Ich mag...", "Möchtest du...?", "Das war schön!"]
    },
    interview: { 
        greeting: "Guten Tag! Bitte setzen Sie sich. Erzählen Sie mir von sich.<br><small>(Dzień dobry! Proszę usiąść. Proszę opowiedzieć o sobie.)</small>", 
        suggestions: ["Ich habe Erfahrung in...", "Meine Stärken sind...", "Warum sollten wir Sie einstellen?"],
        mission: { title: "Rozmowa kwalifikacyjna", steps: ["Przedstaw się", "Opisz doświadczenie", "Zadaj pytanie"], keywords: [["name", "bin", "komme", "heiße"], ["erfahrung", "gearbeitet", "studiert", "stärken"], ["frage", "gehalt", "wann", "team"]] },
        helpPhrases: ["Ich bin...", "Ich habe... Jahre Erfahrung", "Meine Stärke ist...", "Ich bin motiviert", "Wann kann ich anfangen?"]
    },
    restaurant: {
        greeting: "Guten Abend! Haben Sie reserviert? Hier ist die Speisekarte.<br><small>(Dobry wieczór! Macie rezerwację? Oto menu.)</small>",
        suggestions: ["Einen Tisch für zwei, bitte", "Was empfehlen Sie?", "Ich nehme das Schnitzel"],
        mission: { title: "Kolacja w restauracji", steps: ["Poproś o stolik", "Zamów jedzenie", "Poproś o rachunek"], keywords: [["tisch", "platz", "reserviert"], ["nehme", "möchte", "bestelle", "essen"], ["rechnung", "zahlen", "karte"]] },
        helpPhrases: ["Einen Tisch für...", "Was empfehlen Sie?", "Ich nehme...", "Die Rechnung, bitte", "Es war lecker!"]
    },
    bahnhof: {
        greeting: "Guten Tag! Willkommen am Schalter. Wohin möchten Sie fahren?<br><small>(Dzień dobry! Dokąd chce Pan/Pani pojechać?)</small>",
        suggestions: ["Einmal nach Berlin, bitte", "Wann fährt der nächste Zug?", "Auf welchem Gleis?"],
        mission: { title: "Na dworcu kolejowym", steps: ["Zapytaj o odjazd", "Kup bilet", "Zapytaj o peron"], keywords: [["wann", "abfahrt", "uhr", "zug"], ["ticket", "fahrkarte", "einmal", "hin"], ["gleis", "platform", "wo", "welchem"]] },
        helpPhrases: ["Einmal nach... bitte", "Hin und zurück?", "Wann fährt der Zug ab?", "Von welchem Gleis?", "Gibt es einen Rabatt?"]
    },
    apotheke: {
        greeting: "Guten Tag! Was kann ich für Sie tun?<br><small>(Dzień dobry! W czym mogę pomóc?)</small>",
        suggestions: ["Ich brauche etwas gegen Kopfschmerzen", "Haben Sie Ibuprofen?", "Brauche ich ein Rezept?"],
        mission: { title: "W aptece", steps: ["Opisz dolegliwość", "Zapytaj o lek", "Zapytaj o dawkowanie"], keywords: [["schmerzen", "krank", "fieber", "husten", "schnupfen"], ["tabletten", "tropfen", "salbe", "mittel", "medikament"], ["dosis", "nehmen", "mal täglich", "wie oft"]] },
        helpPhrases: ["Ich habe Kopfschmerzen.", "Ich brauche etwas gegen...", "Wie nehme ich das?", "Dreimal täglich?", "Brauche ich ein Rezept?"]
    },
    bank: {
        greeting: "Guten Tag! Womit kann ich Ihnen helfen?<br><small>(Dzień dobry! W czym mogę pomóc?)</small>",
        suggestions: ["Ich möchte ein Konto eröffnen", "Ich möchte Geld überweisen", "Was sind die Gebühren?"],
        mission: { title: "W banku", steps: ["Wyjaśnij cel wizyty", "Podaj dane", "Zapytaj o warunki"], keywords: [["konto", "überweisen", "abheben", "einzahlen"], ["name", "adresse", "ausweis", "daten"], ["gebühren", "zinsen", "kosten", "wie viel"]] },
        helpPhrases: ["Ich möchte ein Konto eröffnen.", "Ich möchte Geld überweisen.", "Was kostet das?", "Brauche ich meinen Ausweis?", "Wie lange dauert das?"]
    },
    amt: {
        greeting: "Guten Tag! Haben Sie einen Termin?<br><small>(Dzień dobry! Czy ma Pan/Pani termin?)</small>",
        suggestions: ["Ich brauche eine Anmeldebescheinigung", "Ich möchte mich anmelden", "Welche Unterlagen brauche ich?"],
        mission: { title: "W urzędzie", steps: ["Wyjaśnij sprawę", "Podaj dokumenty", "Zapytaj o czas oczekiwania"], keywords: [["anmelden", "bescheinigung", "antrag", "formular"], ["ausweis", "pass", "dokument", "unterlagen"], ["wann", "wie lange", "warten", "fertig"]] },
        helpPhrases: ["Ich möchte mich anmelden.", "Welche Unterlagen brauche ich?", "Hier ist mein Ausweis.", "Wie lange dauert es?", "Wann ist es fertig?"]
    },
    free: { 
        greeting: "Hallo! Worüber möchtest du sprechen?<br><small>(Cześć! O czym chcesz porozmawiać?)</small>", 
        suggestions: ["Wie geht es dir?", "Was hast du heute gemacht?", "Erzähl mir etwas!"],
        mission: { title: "Swobodna rozmowa", steps: ["Przywitaj się", "Zadaj pytanie", "Odpowiedz na pytanie"], keywords: [["hallo", "hi", "guten"], ["wie", "was", "wo", "wann"], ["ich", "mir", "mein", "bin"]] },
        helpPhrases: ["Wie geht's?", "Was machst du?", "Ich mag...", "Das ist interessant!", "Erzähl mehr!"]
    }
};

const aiResponses = {
    greetings: {
        patterns: ["hallo", "hi", "guten tag", "guten morgen", "guten abend", "servus", "moin"],
        responses: [
            "Hallo! Wie geht es dir? 😊<br><small>(Cześć! Jak się masz?)</small>",
            "Guten Tag! Schön, dich zu sehen!<br><small>(Dzień dobry! Miło cię widzieć!)</small>",
            "Hey! Was gibt's Neues?<br><small>(Hej! Co słychać?)</small>"
        ]
    },
    howAreYou: {
        patterns: ["wie geht", "wie gehts", "wie geht's", "was geht", "alles klar"],
        responses: [
            "Mir geht es gut, danke! Und dir?<br><small>(Dobrze, dziękuję! A tobie?)</small>",
            "Super! Ich bin gut drauf heute!<br><small>(Super! Jestem dziś w dobrym humorze!)</small>",
            "Nicht schlecht! Was machst du so?<br><small>(Nieźle! Co u ciebie?)</small>"
        ]
    },
    thanks: {
        patterns: ["danke", "vielen dank", "dankeschön", "merci"],
        responses: [
            "Bitte schön! Gern geschehen! 😊<br><small>(Proszę bardzo! Nie ma za co!)</small>",
            "Kein Problem!<br><small>(Nie ma problemu!)</small>",
            "Immer gerne!<br><small>(Zawsze chętnie!)</small>"
        ]
    },
    goodbye: {
        patterns: ["tschüss", "bye", "auf wiedersehen", "bis bald", "ciao", "bis später"],
        responses: [
            "Tschüss! Bis bald! 👋<br><small>(Cześć! Do zobaczenia!)</small>",
            "Auf Wiedersehen! Mach's gut!<br><small>(Do widzenia! Trzymaj się!)</small>",
            "Bis später! War nett mit dir!<br><small>(Do później! Miło było!)</small>"
        ]
    },
    cafe: {
        patterns: ["kaffee", "tee", "cappuccino", "espresso", "latte", "trinken"],
        responses: [
            "Sehr gerne! Mit Milch und Zucker?<br><small>(Bardzo chętnie! Z mlekiem i cukrem?)</small>",
            "Kommt sofort! Möchten Sie auch etwas essen?<br><small>(Zaraz będzie! Chce Pan/Pani też coś zjeść?)</small>",
            "Eine ausgezeichnete Wahl! 👍<br><small>(Doskonały wybór!)</small>"
        ]
    },
    price: {
        patterns: ["kostet", "preis", "teuer", "billig", "euro", "zahlen", "rechnung"],
        responses: [
            "Das kostet 5,50 Euro.<br><small>(To kosztuje 5,50 euro.)</small>",
            "Zusammen macht das 12 Euro.<br><small>(Razem to będzie 12 euro.)</small>",
            "Möchten Sie bar oder mit Karte zahlen?<br><small>(Chce Pan/Pani płacić gotówką czy kartą?)</small>"
        ]
    },
    order: {
        patterns: ["möchte", "nehme", "bestelle", "hätte gern", "bitte"],
        responses: [
            "Natürlich! Kommt sofort!<br><small>(Oczywiście! Zaraz będzie!)</small>",
            "Sehr gerne! Noch etwas dazu?<br><small>(Bardzo chętnie! Coś jeszcze?)</small>",
            "Eine gute Wahl! Das ist sehr beliebt.<br><small>(Dobry wybór! To jest bardzo popularne.)</small>"
        ]
    },
    question: {
        patterns: ["wo ist", "wo kann", "wie komme", "wann", "gibt es"],
        responses: [
            "Gute Frage! Lass mich dir helfen.<br><small>(Dobre pytanie! Pozwól, że ci pomogę.)</small>",
            "Das kann ich dir sagen...<br><small>(Mogę ci to powiedzieć...)</small>",
            "Klar! Ich erkläre es dir gerne.<br><small>(Jasne! Chętnie ci wyjaśnię.)</small>"
        ]
    },
    hotel: {
        patterns: ["zimmer", "reservierung", "übernachtung", "frühstück", "schlüssel"],
        responses: [
            "Ihr Zimmer ist Nummer 205, zweiter Stock.<br><small>(Pana/Pani pokój ma numer 205, drugie piętro.)</small>",
            "Frühstück ist von 7 bis 10 Uhr im Restaurant.<br><small>(Śniadanie jest od 7 do 10 w restauracji.)</small>",
            "Hier ist Ihr Schlüssel. Guten Aufenthalt!<br><small>(Oto klucz. Miłego pobytu!)</small>"
        ]
    },
    health: {
        patterns: ["schmerzen", "weh tut", "krank", "fieber", "husten", "erkältet"],
        responses: [
            "Das tut mir leid. Seit wann haben Sie diese Beschwerden?<br><small>(Przykro mi. Od kiedy ma Pan/Pani te dolegliwości?)</small>",
            "Ich verschreibe Ihnen etwas. Nehmen Sie das dreimal täglich.<br><small>(Przepiszę Panu/Pani coś. Proszę brać trzy razy dziennie.)</small>",
            "Trinken Sie viel und ruhen Sie sich aus!<br><small>(Proszę dużo pić i odpoczywać!)</small>"
        ]
    },
    train: {
        patterns: ["zug", "gleis", "bahnhof", "ticket", "fahrkarte", "abfahrt", "ankunft", "berlin", "münchen", "hamburg"],
        responses: [
            "Der nächste Zug fährt um 14:32 Uhr ab, Gleis 7.<br><small>(Następny pociąg odjeżdża o 14:32, peron 7.)</small>",
            "Eine Fahrkarte nach Berlin kostet 49 Euro. Hin und zurück?<br><small>(Bilet do Berlina kosztuje 49 euro. W obie strony?)</small>",
            "Der Zug hat leider 10 Minuten Verspätung.<br><small>(Pociąg ma niestety 10 minut opóźnienia.)</small>"
        ]
    },
    pharmacy: {
        patterns: ["tabletten", "medikament", "apotheke", "rezept", "kopfschmerzen", "schnupfen", "ibuprofen", "aspirin"],
        responses: [
            "Ich empfehle Ihnen Ibuprofen 400mg. Dreimal täglich nach dem Essen.<br><small>(Polecam ibuprofen 400mg. Trzy razy dziennie po jedzeniu.)</small>",
            "Dafür brauchen Sie kein Rezept. Das ist rezeptfrei.<br><small>(Na to nie potrzeba recepty. To jest bez recepty.)</small>",
            "Nehmen Sie das nicht länger als 3 Tage ohne Arzt.<br><small>(Nie stosować dłużej niż 3 dni bez lekarza.)</small>"
        ]
    },
    banking: {
        patterns: ["konto", "überweisen", "abheben", "einzahlen", "gebühren", "zinsen", "kredit", "geld"],
        responses: [
            "Für ein Girokonto brauchen Sie Ihren Personalausweis und eine Meldebescheinigung.<br><small>(Do konta bieżącego potrzebuje Pan/Pani dowód osobisty i zaświadczenie o zameldowaniu.)</small>",
            "Die Überweisung dauert 1–2 Werktage.<br><small>(Przelew trwa 1–2 dni robocze.)</small>",
            "Die monatliche Kontoführungsgebühr beträgt 5 Euro.<br><small>(Miesięczna opłata za prowadzenie konta wynosi 5 euro.)</small>"
        ]
    },
    office: {
        patterns: ["anmelden", "ummelden", "ausweis", "pass", "bescheinigung", "formular", "antrag", "termin"],
        responses: [
            "Sie brauchen Ihren Reisepass, eine aktuelle Meldebescheinigung und das ausgefüllte Formular.<br><small>(Potrzebuje Pan/Pani paszport, aktualne zaświadczenie o zameldowaniu i wypełniony formularz.)</small>",
            "Die Bearbeitungszeit beträgt ca. 2 Wochen.<br><small>(Czas rozpatrzenia wynosi ok. 2 tygodnie.)</small>",
            "Bitte nehmen Sie einen Termin online über unsere Webseite.<br><small>(Proszę umówić termin online na naszej stronie.)</small>"
        ]
    }
};

const grammarPatterns = [
    { wrong: /\bich bin ([a-zäöüß]+)e\b/i, correct: "ich bin $1", tip: "Po 'ich bin' używamy formy podstawowej przymiotnika" },
    { wrong: /\bich habe ([a-zäöüß]+)st\b/i, correct: "ich habe $1", tip: "Po 'ich' czasownik kończy się na '-e', nie '-st'" },
    { wrong: /\bdu ([a-zäöüß]+)e\b/i, correct: "du $1st", tip: "Po 'du' czasownik kończy się na '-st'" },
    { wrong: /\bein ([a-zäöüß]+) frau\b/i, correct: "eine $1 Frau", tip: "'Frau' jest rodzaju żeńskiego - używamy 'eine'" },
    { wrong: /\bein mann\b/i, correct: "ein Mann", tip: "Rzeczowniki piszemy wielką literą!" },
    { wrong: /\bich gehe nach hause\b/i, correct: "ich gehe nach Hause", tip: "'Hause' piszemy wielką literą" },
    { wrong: /\bich mag nicht\b/i, correct: "ich mag das nicht", tip: "W niemieckim potrzebujemy dopełnienia" }
];

function startChat() {
    showScreen('chat');
    updateChatStats();
}

function updateChatStats() {
    document.getElementById('chatScore').textContent = chatScore;
    const accuracy = chatTotal > 0 ? Math.round((chatCorrect / chatTotal) * 100) : 0;
    document.getElementById('chatAccuracy').textContent = accuracy + '%';
}

function startScenario(scenario, btn) {
    state.chatScenario = scenario;
    document.querySelectorAll('.scenario-btn').forEach(function(b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    
    const container = document.getElementById('chatContainer');
    container.innerHTML = '';
    addChatMessage(chatScenarios[scenario].greeting, 'bot');
    
    currentMission = chatScenarios[scenario].mission;
    missionProgress = 0;
    updateMissionDisplay();
    
    const suggestionsDiv = document.getElementById('chatSuggestions');
    suggestionsDiv.innerHTML = '';
    chatScenarios[scenario].suggestions.forEach(function(s) {
        const btn = document.createElement('button');
        btn.textContent = s;
        btn.onclick = function() { useSuggestion(s); };
        suggestionsDiv.appendChild(btn);
    });
    
    updateHelpPhrases(scenario);
    playClickSound();
}

function updateMissionDisplay() {
    if (!currentMission) return;
    
    document.getElementById('missionTitle').textContent = currentMission.title;
    document.getElementById('missionSteps').textContent = missionProgress + '/' + currentMission.steps.length;
    const progressPercent = (missionProgress / currentMission.steps.length) * 100;
    document.getElementById('missionProgressBar').style.width = progressPercent + '%';
}

function updateHelpPhrases(scenario) {
    const container = document.getElementById('helpPhrases');
    if (!container) return;
    
    container.innerHTML = '';
    const phrases = chatScenarios[scenario]?.helpPhrases || [];
    phrases.forEach(function(phrase) {
        const btn = document.createElement('button');
        btn.textContent = phrase;
        btn.onclick = function() { useSuggestion(phrase); };
        container.appendChild(btn);
    });
}

function toggleChatHelp() {
    const content = document.getElementById('helpContent');
    if (content) content.classList.toggle('hidden');
}

function sendMessage() {
    // Jeśli mamy klucz API Gemini, użyj AI
    if (typeof hasApiKey === 'function' && hasApiKey() && typeof sendAIMessage === 'function') {
        sendAIMessage();
        return;
    }
    
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    const analysis = analyzeMessage(message);
    addUserMessage(message, analysis);
    input.value = '';
    
    checkMissionProgress(message);
    
    setTimeout(function() {
        const response = generateSmartResponse(message);
        addChatMessage(response, 'bot');
    }, 500 + Math.random() * 500);
    
    chatTotal++;
    if (analysis.score >= 70) chatCorrect++;
    
    addXP(analysis.score >= 70 ? 5 : 2);
    chatScore += analysis.score >= 90 ? 10 : (analysis.score >= 70 ? 5 : 2);
    updateChatStats();
    saveState();
}

function analyzeMessage(message) {
    let score = 100;
    let corrections = [];
    let tips = [];
    
    grammarPatterns.forEach(function(pattern) {
        if (pattern.wrong.test(message)) {
            score -= 15;
            const corrected = message.replace(pattern.wrong, pattern.correct);
            corrections.push({
                original: message.match(pattern.wrong)?.[0] || '',
                corrected: corrected,
                tip: pattern.tip
            });
        }
    });
    
    const words = message.split(' ');
    words.forEach(function(word, index) {
        if (index > 0 && /^[a-zäöüß]{4,}$/.test(word)) {
            const commonNouns = ['kaffee', 'tee', 'wasser', 'haus', 'mann', 'frau', 'kind', 'auto', 'buch', 'tisch', 'stuhl'];
            if (commonNouns.includes(word.toLowerCase())) {
                score -= 10;
                tips.push("💡 Pamiętaj: rzeczowniki piszemy wielką literą! '" + word + "' → '" + word.charAt(0).toUpperCase() + word.slice(1) + "'");
            }
        }
    });
    
    if (words.length >= 5) score = Math.min(100, score + 5);
    if (words.length >= 8) score = Math.min(100, score + 5);
    
    score = Math.max(30, score);
    
    return { score, corrections, tips };
}

function addUserMessage(message, analysis) {
    const container = document.getElementById('chatContainer');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message user';
    
    let html = '<span>' + escapeHtml(message) + '</span>';
    
    let scoreClass = 'excellent';
    let scoreEmoji = '⭐';
    if (analysis.score < 90) { scoreClass = 'good'; scoreEmoji = '👍'; }
    if (analysis.score < 70) { scoreClass = 'fair'; scoreEmoji = '📝'; }
    if (analysis.score < 50) { scoreClass = 'poor'; scoreEmoji = '💪'; }
    
    html += '<div class="grammar-score ' + scoreClass + '">' + scoreEmoji + ' ' + analysis.score + '%</div>';
    
    if (analysis.corrections.length > 0) {
        analysis.corrections.forEach(function(c) {
            html += '<div class="correction">';
            html += '<span class="correction-text">❌ ' + escapeHtml(c.original) + '</span> → ';
            html += '<span class="correction-correct">✅ ' + escapeHtml(c.corrected) + '</span>';
            html += '<div class="grammar-tip">' + c.tip + '</div>';
            html += '</div>';
        });
        playWrongSound();
    } else if (analysis.score >= 90) {
        playCorrectSound();
    }
    
    if (analysis.tips.length > 0) {
        analysis.tips.forEach(function(tip) {
            html += '<div class="grammar-tip">' + tip + '</div>';
        });
    }
    
    html += '<div class="message-actions">';
    html += '<button onclick="translateMessage(\'' + escapeHtml(message).replace(/'/g, "\\'") + '\')">🔄 Tłumacz</button>';
    html += '<button onclick="speakText(\'' + escapeHtml(message).replace(/'/g, "\\'") + '\')">🔊 Słuchaj</button>';
    html += '</div>';
    
    msgDiv.innerHTML = html;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function addChatMessage(text, type) {
    const container = document.getElementById('chatContainer');
    const msg = document.createElement('div');
    msg.className = 'chat-message ' + type;
    
    let html = '<span>' + text + '</span>';
    
    if (type === 'bot') {
        const germanText = text.replace(/<br>.*$/s, '').replace(/<[^>]*>/g, '');
        html += '<div class="message-actions">';
        html += '<button onclick="speakText(\'' + germanText.replace(/'/g, "\\'") + '\')" title="Posłuchaj">🔊</button>';
        html += '<button onclick="speakSlow(\'' + germanText.replace(/'/g, "\\'") + '\')" title="Wolniej">🐢</button>';
        html += '</div>';
        
        // NOWE: Auto-wymowa odpowiedzi bota
        if (state.autoSpeak) {
            setTimeout(() => speak(germanText), 300);
        }
    }
    
    msg.innerHTML = html;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function generateSmartResponse(message) {
    const msg = message.toLowerCase();
    
    for (let category in aiResponses) {
        const patterns = aiResponses[category].patterns;
        for (let i = 0; i < patterns.length; i++) {
            if (msg.includes(patterns[i])) {
                const responses = aiResponses[category].responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    
    const scenario = state.chatScenario;
    const contextResponses = {
        cafe: ["Möchten Sie noch etwas bestellen?<br><small>(Chce Pan/Pani jeszcze coś zamówić?)</small>", "Der Kaffee hier ist sehr gut!<br><small>(Kawa tutaj jest bardzo dobra!)</small>"],
        shop: ["Diese Farbe steht Ihnen gut!<br><small>(Ten kolor Panu/Pani pasuje!)</small>", "Wir haben auch andere Modelle.<br><small>(Mamy też inne modele.)</small>"],
        hotel: ["Ihr Zimmer ist fertig!<br><small>(Pana/Pani pokój jest gotowy!)</small>", "Das WLAN-Passwort ist 'hotel123'.<br><small>(Hasło do Wi-Fi to 'hotel123'.)</small>"],
        restaurant: ["Die Spezialität des Hauses ist Schnitzel!<br><small>(Specjalnością jest sznycel!)</small>", "Möchten Sie die Weinkarte sehen?<br><small>(Chce Pan/Pani zobaczyć kartę win?)</small>"],
        doctor: ["Nehmen Sie diese Tabletten dreimal täglich.<br><small>(Proszę brać te tabletki trzy razy dziennie.)</small>", "Kommen Sie in einer Woche wieder.<br><small>(Proszę przyjść za tydzień.)</small>"],
        date: ["Das ist ja interessant! Erzähl mehr!<br><small>(To ciekawe! Opowiedz więcej!)</small>", "Du bist wirklich nett! 😊<br><small>(Jesteś naprawdę miły/miła!)</small>"],
        interview: ["Das klingt sehr gut! Haben Sie noch Fragen?<br><small>(To brzmi bardzo dobrze! Ma Pan/Pani jeszcze pytania?)</small>", "Wann könnten Sie anfangen?<br><small>(Kiedy mógłby Pan/mogłaby Pani zacząć?)</small>"]
    };
    
    if (contextResponses[scenario]) {
        const responses = contextResponses[scenario];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    const defaults = [
        "Interessant! Erzähl mir mehr! 🤔<br><small>(Ciekawe! Opowiedz mi więcej!)</small>",
        "Verstehe! Und was noch?<br><small>(Rozumiem! A co jeszcze?)</small>",
        "Sehr gut! Du machst Fortschritte! 💪<br><small>(Bardzo dobrze! Robisz postępy!)</small>",
        "Super! Weiter so! 🌟<br><small>(Super! Tak trzymaj!)</small>",
        "Toll gemacht! 👏<br><small>(Świetnie!)</small>"
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

function checkMissionProgress(message) {
    if (!currentMission || missionProgress >= currentMission.steps.length) return;
    
    const msg = message.toLowerCase();
    const keywords = currentMission.keywords[missionProgress];
    
    const found = keywords.some(function(keyword) {
        return msg.includes(keyword);
    });
    
    if (found) {
        missionProgress++;
        updateMissionDisplay();
        
        if (missionProgress >= currentMission.steps.length) {
            setTimeout(showMissionComplete, 1000);
        } else {
            showToast('✅ Krok ' + missionProgress + '/' + currentMission.steps.length + ': ' + currentMission.steps[missionProgress - 1]);
        }
    }
}

function showMissionComplete() {
    playLevelUpSound();
    
    const popup = document.createElement('div');
    popup.className = 'mission-complete';
    popup.innerHTML = '<h3>🎉 Misja ukończona!</h3><p class="xp-earned">+50 XP</p>';
    document.body.appendChild(popup);
    
    addXP(50);
    chatScore += 50;
    updateChatStats();
    
    setTimeout(function() {
        popup.remove();
    }, 3000);
}

function translateMessage(text) {
    const translations = {
        "hallo": "Cześć",
        "wie geht es dir": "Jak się masz",
        "danke": "Dziękuję",
        "bitte": "Proszę",
        "tschüss": "Cześć (na pożegnanie)",
        "guten tag": "Dzień dobry",
        "guten morgen": "Dzień dobry (rano)",
        "auf wiedersehen": "Do widzenia",
        "ich möchte": "Chciałbym/Chciałabym",
        "wie viel kostet": "Ile kosztuje",
        "wo ist": "Gdzie jest",
        "ich verstehe nicht": "Nie rozumiem",
        "können sie wiederholen": "Czy może Pan/Pani powtórzyć",
        "sprechen sie englisch": "Czy mówi Pan/Pani po angielsku"
    };
    
    const lowerText = text.toLowerCase();
    let translation = translations[lowerText];
    
    if (!translation) {
        for (let key in translations) {
            if (lowerText.includes(key)) {
                translation = "Zawiera: '" + key + "' = " + translations[key];
                break;
            }
        }
    }
    
    if (!translation) {
        translation = "Użyj słownika lub wyszukaj tłumaczenie";
    }
    
    showTranslationPopup(text, translation);
}

function showTranslationPopup(original, translated) {
    const old = document.querySelector('.translation-popup');
    if (old) old.remove();
    
    const popup = document.createElement('div');
    popup.className = 'translation-popup';
    popup.innerHTML = '<div class="original">🇩🇪 ' + escapeHtml(original) + '</div><div class="translated">🇵🇱 ' + translated + '</div>';
    document.body.appendChild(popup);
    
    setTimeout(function() {
        popup.remove();
    }, 4000);
}

function speakText(text) {
    speak(text);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function useSuggestion(text) {
    document.getElementById('chatInput').value = text;
    document.getElementById('chatInput').focus();
    playClickSound();
}

// startChatSpeech() - funkcja przeniesiona do ai-chat.js

// ==================== MOJE SŁÓWKA ====================
function openMyWords() {
    showScreen('mywords');
    displayCustomWords();
}

function addCustomWord() {
    const de = document.getElementById('newWordDe').value.trim();
    const pl = document.getElementById('newWordPl').value.trim();
    const ex = document.getElementById('newWordExample').value.trim();
    const level = document.getElementById('newWordLevel').value;
    
    if (!de || !pl) {
        showToast('❌ Wpisz słowo!');
        return;
    }
    
    if (state.customWords.some(function(w) { 
        const wGerman = w.german || w.de;
        return wGerman && wGerman.toLowerCase() === de.toLowerCase(); 
    })) {
        showToast('❌ Już istnieje!');
        return;
    }
    
    state.customWords.push({ 
        de: de, 
        german: de,
        pl: pl, 
        polish: pl,
        example: ex || '',
        level: level
    });
    
    document.getElementById('newWordDe').value = '';
    document.getElementById('newWordPl').value = '';
    document.getElementById('newWordExample').value = '';
    
    checkAchievement('custom_words', state.customWords.length >= 5);
    saveState();
    displayCustomWords();
    countTotalWords();
    showToast('✅ Dodano: ' + de);
    addXP(5);
    
    // NOWE: Wymów nowe słówko
    speak(de);
}

function displayCustomWords() {
    const container = document.getElementById('customWordsList');
    const countEl = document.getElementById('customWordCount');
    if (!container) return;
    
    countEl.textContent = state.customWords.length;
    
    if (state.customWords.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);text-align:center">Brak słówek</p>';
        return;
    }
    
    container.innerHTML = '';
    state.customWords.forEach(function(word, i) {
        const wordGerman = word.german || word.de;
        const wordPolish = word.polish || word.pl;
        const div = document.createElement('div');
        div.className = 'custom-word-item';
        // NOWE: Dodano przycisk wymowy
        div.innerHTML = '<div class="custom-word-content">' +
            '<button class="custom-word-speak" onclick="speak(\'' + wordGerman.replace(/'/g, "\\'") + '\')" title="Posłuchaj">🔊</button>' +
            '<span class="custom-word-de">' + wordGerman + '</span>' +
            '<span class="custom-word-pl">' + wordPolish + '</span>' +
            '</div>' +
            '<button class="delete-word-btn" onclick="deleteCustomWord(' + i + ')">🗑️</button>';
        container.appendChild(div);
    });
}

function deleteCustomWord(i) {
    const word = state.customWords[i];
    const wordGerman = word.german || word.de;
    state.customWords.splice(i, 1);
    saveState();
    displayCustomWords();
    countTotalWords();
    showToast('🗑️ Usunięto: ' + wordGerman);
}

// ==================== STATYSTYKI ====================
function showProgress() {
    showScreen('progress');

    let currentLevelData = levelSystem[0];
    let nextLevelData = levelSystem[1];
    for (let i = levelSystem.length - 1; i >= 0; i--) {
        if (state.xp >= levelSystem[i].xpRequired) {
            currentLevelData = levelSystem[i];
            nextLevelData = levelSystem[i + 1] || levelSystem[i];
            break;
        }
    }

    document.getElementById('levelIcon').textContent = currentLevelData.title.split(' ')[0];
    document.getElementById('levelTitleBig').textContent = currentLevelData.title.split(' ').slice(1).join(' ');
    document.getElementById('currentLevel').textContent = currentLevelData.level;
    document.getElementById('currentXP').textContent = state.xp;
    document.getElementById('nextLevelXP').textContent = nextLevelData.xpRequired;

    const xpIn = state.xp - currentLevelData.xpRequired;
    const xpFor = nextLevelData.xpRequired - currentLevelData.xpRequired;
    document.getElementById('levelProgressBig').style.width = Math.min((xpIn / xpFor) * 100, 100) + '%';

    document.getElementById('wordsLearned').textContent = state.wordsLearned.length;
    document.getElementById('quizzesDone').textContent = state.quizzesDone;
    document.getElementById('streakDays').textContent = state.streak;
    document.getElementById('accuracy').textContent = state.totalAnswers > 0
        ? Math.round((state.correctAnswers / state.totalAnswers) * 100) + '%' : '0%';

    // Paski A1/A2/B1/B2
    const learnedSet = new Set(state.wordsLearned);
    const levelCounts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    const levelTotals = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    Object.keys(wordDatabase).forEach(function(key) {
        wordDatabase[key].forEach(function(w) {
            const lv = w.level;
            if (levelTotals[lv] !== undefined) {
                levelTotals[lv]++;
                if (learnedSet.has(w.german || w.de)) levelCounts[lv]++;
            }
        });
    });
    ['A1', 'A2', 'B1', 'B2', 'C1'].forEach(function(lv) {
        const pct = levelTotals[lv] > 0 ? Math.round((levelCounts[lv] / levelTotals[lv]) * 100) : 0;
        const bar = document.getElementById(lv.toLowerCase() + 'Progress');
        const cnt = document.getElementById(lv.toLowerCase() + 'Count');
        if (bar) bar.style.width = pct + '%';
        if (cnt) cnt.textContent = levelCounts[lv] + '/' + levelTotals[lv];
    });

    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    achievements.forEach(function(a) {
        const unlocked = state.achievements.indexOf(a.id) !== -1;
        achievementsList.innerHTML += '<div class="achievement ' + (unlocked ? '' : 'locked') + '">' + a.icon + ' ' + a.name + '</div>';
    });

    renderStreakCalendar();
    renderCategoryProgress();
    setTimeout(initCharts, 100);
}

function showLevels() {
    showScreen('levels');
    
    let currentLevelData = levelSystem[0];
    let nextLevelData = levelSystem[1];
    
    for (let i = levelSystem.length - 1; i >= 0; i--) {
        if (state.xp >= levelSystem[i].xpRequired) {
            currentLevelData = levelSystem[i];
            nextLevelData = levelSystem[i + 1] || levelSystem[i];
            break;
        }
    }
    
    document.getElementById('bigLevelIcon').textContent = currentLevelData.title.split(' ')[0];
    document.getElementById('bigLevelTitle').textContent = currentLevelData.title.split(' ').slice(1).join(' ');
    document.getElementById('bigCurrentLevel').textContent = currentLevelData.level;
    document.getElementById('bigCurrentXP').textContent = state.xp;
    document.getElementById('bigNextXP').textContent = nextLevelData.xpRequired;
    
    const xpIn = state.xp - currentLevelData.xpRequired;
    const xpFor = nextLevelData.xpRequired - currentLevelData.xpRequired;
    document.getElementById('bigLevelProgress').style.width = Math.min((xpIn / xpFor) * 100, 100) + '%';
    
    const list = document.getElementById('allLevelsList');
    list.innerHTML = '';
    
    levelSystem.forEach(function(lvl) {
        const unlocked = state.xp >= lvl.xpRequired;
        const current = state.level === lvl.level;
        
        const div = document.createElement('div');
        div.className = 'level-item ' + (current ? 'current' : (unlocked ? 'unlocked' : 'locked'));
        div.innerHTML = 
            '<span class="level-item-icon">' + lvl.title.split(' ')[0] + '</span>' +
            '<div class="level-item-info"><h4>Poziom ' + lvl.level + '</h4><p>' + lvl.title.split(' ').slice(1).join(' ') + '</p></div>' +
            '<span class="level-item-xp">' + lvl.xpRequired + ' XP</span>';
        list.appendChild(div);
    });
}

// ==================== SŁOWNIK Z WYMOWĄ ====================
let currentDictCategory = 'all';
let currentDictLevel = 'all';

function showAllWords() {
    showScreen('dictionary');
    currentDictCategory = 'all';
    currentDictLevel = 'all';
    displayWords();
    countTotalWords();
}

function filterByCategory(category, btn) {
    currentDictCategory = category;
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    displayWords();
}

function searchWords() {
    displayWords();
}

function displayWords() {
    const searchTerm = document.getElementById('searchWord').value.toLowerCase();
    const container = document.getElementById('dictionaryList');
    container.innerHTML = '';
    
    let allWords = [];
    
    if (currentDictCategory === 'all') {
        Object.keys(wordDatabase).forEach(function(key) {
            wordDatabase[key].forEach(function(w) {
                allWords.push({ de: w.german || w.de, pl: w.polish || w.pl, example: w.example, level: w.level });
            });
        });
        state.customWords.forEach(function(w) {
            allWords.push({ de: w.german || w.de, pl: w.polish || w.pl, example: w.example, level: w.level });
        });
    } else if (wordDatabase[currentDictCategory]) {
        wordDatabase[currentDictCategory].forEach(function(w) {
            allWords.push({ de: w.german || w.de, pl: w.polish || w.pl, example: w.example, level: w.level });
        });
    }
    
    // Filtruj po poziomie językowym
    if (currentDictLevel !== 'all') {
        allWords = allWords.filter(function(w) {
            return w.level === currentDictLevel;
        });
    }
    
    if (searchTerm) {
        allWords = allWords.filter(function(w) {
            return w.de && w.pl && (w.de.toLowerCase().includes(searchTerm) || w.pl.toLowerCase().includes(searchTerm));
        });
    }
    
    allWords.sort(function(a, b) { 
        if (!a.de || !b.de) return 0;
        return a.de.localeCompare(b.de); 
    });
    
    document.getElementById('wordCount').textContent = allWords.length;
    
    allWords.slice(0, 100).forEach(function(w) {
        const div = document.createElement('div');
        div.className = 'dict-word';
        // ULEPSZONE: Dodano dodatkowe przyciski wymowy
        div.innerHTML = 
            '<div class="dict-word-main">' +
                '<div class="dict-word-de">' + w.de + '</div>' +
                '<div class="dict-word-pl">' + w.pl + '</div>' +
            '</div>' +
            '<div class="dict-word-buttons">' +
                '<button class="dict-word-btn" onclick="speak(\'' + w.de.replace(/'/g, "\\'") + '\')" title="Wymowa normalna">🔊</button>' +
                '<button class="dict-word-btn slow" onclick="speakSlow(\'' + w.de.replace(/'/g, "\\'") + '\')" title="Wymowa wolna">🐢</button>' +
            '</div>';
        container.appendChild(div);
    });
    
    if (allWords.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Brak wyników</p>';
    }
}

// ==================== PRZYPOMNIENIA ====================
function openReminders() {
    showScreen('reminders');
    loadReminderSettings();
    updateDailyProgress();
}

function loadReminderSettings() {
    document.getElementById('reminderToggle').checked = localStorage.getItem('reminderEnabled') === 'true';
    document.getElementById('reminderTime').value = localStorage.getItem('reminderTime') || '18:00';
    document.getElementById('dailyGoal').value = localStorage.getItem('dailyGoal') || '10';
    
    // NOWE: Toggle auto-wymowy
    const autoSpeakToggle = document.getElementById('autoSpeakToggle');
    if (autoSpeakToggle) {
        autoSpeakToggle.checked = state.autoSpeak !== false;
    }
}

function toggleReminders() {
    const enabled = document.getElementById('reminderToggle').checked;
    localStorage.setItem('reminderEnabled', enabled);
    showToast(enabled ? '🔔 Włączone' : '🔕 Wyłączone');
    if (enabled && 'Notification' in window) Notification.requestPermission();
}

function setReminderTime() {
    localStorage.setItem('reminderTime', document.getElementById('reminderTime').value);
}

function setDailyGoal() {
    localStorage.setItem('dailyGoal', document.getElementById('dailyGoal').value);
    updateDailyProgress();
}

function saveDefaultLevel() {
    const level = document.getElementById('defaultLangLevel').value;
    state.currentLanguageLevel = level;
    saveState();
    showToast('Domyślny poziom: ' + level);
}

// NOWE: Ustawienie auto-wymowy
function setAutoSpeak() {
    const autoSpeakToggle = document.getElementById('autoSpeakToggle');
    if (autoSpeakToggle) {
        state.autoSpeak = autoSpeakToggle.checked;
        saveState();
        showToast(state.autoSpeak ? '🔊 Auto-wymowa włączona' : '🔇 Auto-wymowa wyłączona');
    }
}

function updateDailyProgress() {
    const today = new Date().toDateString();
    let todayWords = JSON.parse(localStorage.getItem('todayWords') || '[]');
    const goal = parseInt(localStorage.getItem('dailyGoal') || '10');
    
    if (localStorage.getItem('lastProgressDate') !== today) {
        todayWords = [];
        localStorage.setItem('todayWords', '[]');
        localStorage.setItem('lastProgressDate', today);
    }
    
    const fill = document.getElementById('dailyGoalFill');
    const text = document.getElementById('dailyGoalText');
    if (fill && text) {
        fill.style.width = Math.min((todayWords.length / goal) * 100, 100) + '%';
        text.textContent = todayWords.length + ' / ' + goal + (todayWords.length >= goal ? ' ✅' : ' słówek');
    }
}

function addTodayWord(word) {
    const today = new Date().toDateString();
    if (localStorage.getItem('lastProgressDate') !== today) {
        localStorage.setItem('todayWords', '[]');
        localStorage.setItem('lastProgressDate', today);
    }
    let words = JSON.parse(localStorage.getItem('todayWords') || '[]');
    if (!words.includes(word)) {
        words.push(word);
        localStorage.setItem('todayWords', JSON.stringify(words));
    }
}

function exportProgress() {
    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'deutsch-progress-' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    showToast('📥 Eksportowano!');
}

function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const imported = JSON.parse(event.target.result);
                state = { ...state, ...imported };
                saveState();
                updateUI();
                showToast('📤 Zaimportowano!');
                location.reload();
            } catch (err) {
                showToast('❌ Błąd importu!');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetProgress() {
    if (confirm('⚠️ Czy na pewno chcesz zresetować wszystkie postępy? Ta operacja jest nieodwracalna!')) {
        localStorage.clear();
        showToast('🗑️ Zresetowano!');
        setTimeout(function() {
            location.reload();
        }, 1000);
    }
}

// ==================== XP I OSIĄGNIĘCIA ====================
function addXP(amount) {
    const oldLevel = state.level;
    state.xp += amount;
    
    let newLevel = 1;
    for (let i = levelSystem.length - 1; i >= 0; i--) {
        if (state.xp >= levelSystem[i].xpRequired) {
            newLevel = levelSystem[i].level;
            break;
        }
    }
    
    if (newLevel > oldLevel) {
        state.level = newLevel;
        showToast('🎉 LEVEL ' + newLevel + '! ' + levelSystem[newLevel - 1].title);
        playLevelUpSound();
    }
    
    updateUI();
    saveState();
    trackDailyActivity();
}

function checkAchievement(id, condition) {
    if (condition && !state.achievements.includes(id)) {
        state.achievements.push(id);
        const a = achievements.find(function(x) { return x.id === id; });
        if (a) {
            showToast('🏆 ' + a.name + ' +' + a.xp + ' XP');
            addXP(a.xp);
        }
        saveState();
    }
}

function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(function() { toast.remove(); }, 2500);
}

function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// ==================== GRA PISANIE Z WYMOWĄ ====================
let typingWords = [];
let typingIndex = 0;
let typingScore = 0;
let typingStreak = 0;
let currentTypingWord = null;
let typingHintUsed = false;

function startTyping() {
    showScreen('typing');
    
    let allWords = [];
    const levelOrder = ['A1', 'A2', 'B1', 'B2'];
    const currentLevelIndex = levelOrder.indexOf(state.currentLanguageLevel);
    Object.keys(wordDatabase).forEach(function(key) {
        wordDatabase[key].forEach(function(word) {
            const wordLevelIndex = levelOrder.indexOf(word.level);
            if (!state.currentLanguageLevel || wordLevelIndex <= currentLevelIndex) {
                allWords.push(word);
            }
        });
    });
    
    typingWords = shuffleArray(allWords).slice(0, 10);
    typingIndex = 0;
    typingScore = 0;
    typingStreak = 0;
    
    loadTypingWord();
}

function loadTypingWord() {
    if (typingIndex >= typingWords.length) {
        endTypingGame();
        return;
    }
    
    currentTypingWord = typingWords[typingIndex];
    typingHintUsed = false;
    
    const polishWord = currentTypingWord.polish || currentTypingWord.pl;
    const germanWord = currentTypingWord.german || currentTypingWord.de;
    
    // ULEPSZONE: Dodano przyciski wymowy
    document.getElementById('typingPolish').innerHTML = 
        '<span class="typing-polish-text">' + polishWord + '</span>' +
        '<div class="typing-speak-buttons">' +
            '<button onclick="speakTypingWord()" title="Posłuchaj">🔊</button>' +
            '<button onclick="speakTypingWordSlow()" title="Wolniej">🐢</button>' +
        '</div>';
    
    document.getElementById('typingInput').value = '';
    document.getElementById('typingInput').className = 'typing-input';
    document.getElementById('typingInput').placeholder = 'Wpisz po niemiecku...';
    document.getElementById('typingFeedback').classList.add('hidden');
    document.getElementById('typingScore').textContent = typingScore;
    document.getElementById('typingStreak').textContent = typingStreak;
    document.getElementById('typingProgress').textContent = (typingIndex + 1) + '/' + typingWords.length;
    
    document.getElementById('typingInput').focus();
    
    // NOWE: Auto-wymowa (opcjonalna - można włączyć/wyłączyć)
    // Nie włączamy auto-wymowy w pisaniu, bo to podpowiedź
}

function checkTypingAnswer() {
    const input = document.getElementById('typingInput').value.trim().toLowerCase();
    const correct = (currentTypingWord.german || currentTypingWord.de).toLowerCase();
    const feedback = document.getElementById('typingFeedback');
    const inputEl = document.getElementById('typingInput');
    
    if (!input) {
        showToast('❌ Wpisz odpowiedź!');
        return;
    }
    
    if (input === correct) {
        inputEl.className = 'typing-input correct';
        feedback.textContent = '✅ Świetnie! ' + (currentTypingWord.german || currentTypingWord.de);
        feedback.className = 'typing-feedback success';
        
        typingScore += typingHintUsed ? 5 : 10;
        typingStreak++;
        state.correctAnswers++;
        addXP(typingHintUsed ? 5 : 10);
        playCorrectSound();
        
        // NOWE: Wymów poprawne słowo
        speak(currentTypingWord.german || currentTypingWord.de);
    } else {
        inputEl.className = 'typing-input wrong';
        feedback.textContent = '❌ Poprawna: ' + (currentTypingWord.german || currentTypingWord.de);
        feedback.className = 'typing-feedback error';
        
        typingStreak = 0;
        playWrongSound();
        
        // NOWE: Wymów poprawne słowo żeby zapamiętać
        setTimeout(() => speak(currentTypingWord.german || currentTypingWord.de), 500);
    }
    
    state.totalAnswers++;
    feedback.classList.remove('hidden');
    saveState();
    
    document.getElementById('typingScore').textContent = typingScore;
    document.getElementById('typingStreak').textContent = typingStreak;
    
    setTimeout(function() {
        typingIndex++;
        loadTypingWord();
    }, 1500);
}

function showTypingHint() {
    if (!currentTypingWord) return;
    
    const word = currentTypingWord.german || currentTypingWord.de;
    const hint = word.charAt(0) + '_'.repeat(word.length - 1);
    
    document.getElementById('typingInput').placeholder = 'Podpowiedź: ' + hint;
    typingHintUsed = true;
    playClickSound();
    showToast('💡 Pierwsza litera: ' + word.charAt(0).toUpperCase());
}

function skipTypingWord() {
    playClickSound();
    typingStreak = 0;
    document.getElementById('typingStreak').textContent = typingStreak;
    
    const feedback = document.getElementById('typingFeedback');
    const word = currentTypingWord.german || currentTypingWord.de;
    feedback.textContent = '⏭️ Pominięto: ' + word;
    feedback.className = 'typing-feedback error';
    feedback.classList.remove('hidden');
    
    // NOWE: Wymów pominięte słowo
    speak(word);
    
    setTimeout(function() {
        typingIndex++;
        loadTypingWord();
    }, 1000);
}

function speakTypingWord() {
    if (currentTypingWord) {
        speak(currentTypingWord.german || currentTypingWord.de);
    }
}

// NOWE: Wolna wymowa dla pisania
function speakTypingWordSlow() {
    if (currentTypingWord) {
        speakSlow(currentTypingWord.german || currentTypingWord.de);
    }
}

function endTypingGame() {
    const percentage = Math.round((typingScore / (typingWords.length * 10)) * 100);
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Fantastycznie! ' + typingScore + ' punktów!';
        playLevelUpSound();
    } else if (percentage >= 70) {
        message = '⭐ Świetnie! ' + typingScore + ' punktów!';
        playCorrectSound();
    } else if (percentage >= 50) {
        message = '👍 Dobrze! ' + typingScore + ' punktów!';
    } else {
        message = '📚 Ćwicz dalej! ' + typingScore + ' punktów.';
    }
    
    showToast(message);
    addXP(Math.round(typingScore / 2));
    
    setTimeout(function() {
        goToMenu();
    }, 2000);
}

// ==================== WYKRESY ====================
let weeklyChart = null;
let categoryChart = null;

function initCharts() {
    const weeklyCtx = document.getElementById('weeklyChart');
    if (!weeklyCtx) return;
    
    const weeklyData = getWeeklyData();
    
    if (weeklyChart) weeklyChart.destroy();
    
    const isDark = !document.body.classList.contains('light-mode');
    const textColor = isDark ? '#e2e8f0' : '#333';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const tickColor = isDark ? '#888' : '#555';
    
    weeklyChart = new Chart(weeklyCtx, {
        type: 'bar',
        data: {
            labels: ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'],
            datasets: [{
                label: 'Słówka',
                data: weeklyData,
                backgroundColor: 'rgba(102, 126, 234, 0.7)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: '📅 Aktywność w tym tygodniu',
                    color: textColor
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: tickColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: tickColor },
                    grid: { display: false }
                }
            }
        }
    });
    
    const categoryCtx = document.getElementById('categoryChart');
    if (!categoryCtx) return;
    
    const categoryData = getCategoryData();
    
    if (categoryChart) categoryChart.destroy();
    
    categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: categoryData.labels,
            datasets: [{
                data: categoryData.values,
                backgroundColor: [
                    '#667eea', '#48bb78', '#ed8936', '#e53e3e', 
                    '#9f7aea', '#38b2ac', '#f56565', '#4299e1'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: textColor, padding: 10, font: { size: 11 } }
                },
                title: {
                    display: true,
                    text: '📚 Słówka według kategorii',
                    color: textColor
                }
            }
        }
    });
}

function getWeeklyData() {
    const data = [0, 0, 0, 0, 0, 0, 0];
    const weeklyStats = JSON.parse(localStorage.getItem('weeklyStats') || '{}');
    
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - today.getDay() + i + 1);
        const dateKey = date.toISOString().split('T')[0];
        data[i] = weeklyStats[dateKey] || 0;
    }
    
    return data;
}

function getCategoryData() {
    const labels = [];
    const values = [];
    const learnedSet = new Set(state.wordsLearned);

    const topCategories = [
        { key: 'basics', name: 'Podstawy' },
        { key: 'food', name: 'Jedzenie' },
        { key: 'family', name: 'Rodzina' },
        { key: 'travel', name: 'Podróże' },
        { key: 'work', name: 'Praca' },
        { key: 'colloquial', name: 'Potoczne' },
        { key: 'health', name: 'Zdrowie' },
        { key: 'verbs', name: 'Czasowniki' }
    ];

    topCategories.forEach(function(cat) {
        if (wordDatabase[cat.key]) {
            const learned = wordDatabase[cat.key].filter(function(w) {
                return learnedSet.has(w.german || w.de);
            }).length;
            if (learned > 0) {
                labels.push(cat.name);
                values.push(learned);
            }
        }
    });

    if (labels.length === 0) {
        labels.push('Brak danych');
        values.push(1);
    }

    return { labels: labels, values: values };
}

function renderStreakCalendar() {
    const container = document.getElementById('streakCalendar');
    const label = document.getElementById('calendarMonthLabel');
    if (!container) return;

    const weeklyStats = JSON.parse(localStorage.getItem('weeklyStats') || '{}');
    const today = new Date();
    const todayKey = today.toISOString().split('T')[0];

    // Pokaż ostatnie 10 tygodni (70 dni)
    const DAYS = 70;
    const dayNames = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];

    container.innerHTML = '';

    // Nagłówki dni
    dayNames.forEach(function(d) {
        const cell = document.createElement('div');
        cell.className = 'streak-day day-label';
        cell.textContent = d;
        container.appendChild(cell);
    });

    // Wyznacz pierwszy dzień (poniedziałek sprzed ~10 tygodni)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - DAYS + 1);
    // Cofnij do poniedziałku
    const dow = (startDate.getDay() + 6) % 7; // 0=Pon
    startDate.setDate(startDate.getDate() - dow);

    let months = new Set();
    for (let i = 0; i < DAYS; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        const key = d.toISOString().split('T')[0];
        const count = weeklyStats[key] || 0;
        months.add(d.getMonth());

        const cell = document.createElement('div');
        let cls = 'streak-day ';
        if (count === 0)       cls += 'day-0';
        else if (count < 5)    cls += 'day-low';
        else if (count < 10)   cls += 'day-mid';
        else                   cls += 'day-high';
        if (key === todayKey)  cls += ' day-today';
        cell.className = cls;
        cell.title = key + ': ' + count + ' aktywności';
        container.appendChild(cell);
    }

    if (label) {
        const monthNames = ['Sty','Lut','Mar','Kwi','Maj','Cze','Lip','Sie','Wrz','Paź','Lis','Gru'];
        label.textContent = '(' + monthNames[today.getMonth()] + ' ' + today.getFullYear() + ')';
    }
}

function renderCategoryProgress() {
    const container = document.getElementById('categoryProgressList');
    if (!container) return;

    const learnedSet = new Set(state.wordsLearned);
    const catMeta = [
        { key: 'basics', name: '🗣️ Podstawy' },
        { key: 'greetings', name: '👋 Powitania' },
        { key: 'numbers', name: '🔢 Liczby' },
        { key: 'colors', name: '🎨 Kolory' },
        { key: 'time', name: '⏰ Czas' },
        { key: 'days', name: '📅 Dni i miesiące' },
        { key: 'family', name: '👨‍👩‍👧 Rodzina' },
        { key: 'body', name: '🧍 Ciało' },
        { key: 'clothes', name: '👔 Ubrania' },
        { key: 'food', name: '🍕 Jedzenie' },
        { key: 'drinks', name: '🥤 Napoje' },
        { key: 'home', name: '🏠 Dom' },
        { key: 'shopping', name: '🛒 Zakupy' },
        { key: 'travel', name: '✈️ Podróże' },
        { key: 'city', name: '🏙️ Miasto' },
        { key: 'transport', name: '🚗 Transport' },
        { key: 'nature', name: '🌳 Natura' },
        { key: 'weather', name: '🌤️ Pogoda' },
        { key: 'animals', name: '🐕 Zwierzęta' },
        { key: 'work', name: '💼 Praca' },
        { key: 'school', name: '🎓 Szkoła' },
        { key: 'health', name: '🏥 Zdrowie' },
        { key: 'verbs', name: '🏃 Czasowniki' },
        { key: 'adjectives', name: '📏 Przymiotniki' },
        { key: 'phrases', name: '💬 Zwroty' },
        { key: 'colloquial', name: '🗣️ Potoczne' },
        { key: 'technology', name: '💻 Technologia' },
        { key: 'emotions', name: '😀 Emocje' },
        { key: 'business', name: '💼 Biznes' },
        { key: 'hobby', name: '⚽ Hobby' }
    ];

    container.innerHTML = '';
    catMeta.forEach(function(cat) {
        if (!wordDatabase[cat.key] || wordDatabase[cat.key].length === 0) return;
        const total = wordDatabase[cat.key].length;
        const learned = wordDatabase[cat.key].filter(function(w) {
            return learnedSet.has(w.german || w.de);
        }).length;
        const pct = Math.round((learned / total) * 100);

        const row = document.createElement('div');
        row.className = 'cat-progress-item';
        row.innerHTML =
            '<span class="cat-progress-label">' + cat.name + '</span>' +
            '<div class="cat-progress-bar"><div class="cat-progress-fill" style="width:' + pct + '%"></div></div>' +
            '<span class="cat-progress-count">' + learned + '/' + total + '</span>';
        container.appendChild(row);
    });
}

function trackDailyActivity() {
    const today = new Date().toISOString().split('T')[0];
    const weeklyStats = JSON.parse(localStorage.getItem('weeklyStats') || '{}');
    weeklyStats[today] = (weeklyStats[today] || 0) + 1;
    localStorage.setItem('weeklyStats', JSON.stringify(weeklyStats));
}

function displayAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    if (!achievementsList) return;
    
    achievementsList.innerHTML = '';
    achievements.forEach(function(a) {
        const unlocked = state.achievements.indexOf(a.id) !== -1;
        achievementsList.innerHTML += '<div class="achievement ' + (unlocked ? '' : 'locked') + '">' + a.icon + ' ' + a.name + '</div>';
    });
}
