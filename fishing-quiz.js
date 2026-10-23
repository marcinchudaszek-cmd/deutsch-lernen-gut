// ==================== 🎣 QUIZ WĘDKARSKI (w stylu Fischerprüfung) ====================
// Pytania po niemiecku z jedną poprawną odpowiedzią (pierwsza w tablicy `a`),
// polskim tłumaczeniem i krótkim wyjaśnieniem. Celowo bez konkretnych wymiarów
// ochronnych i dat okresów ochronnych — te zależą od landu i łowiska.

const fishingQuizQuestions = [
    // Fischkunde
    { q: "Welcher Fisch hat eine Fettflosse?", pl: "Która ryba ma płetwę tłuszczową?",
      a: ["die Bachforelle", "der Karpfen", "der Hecht"],
      why: "Płetwę tłuszczową mają ryby łososiowate (Salmoniden), np. pstrąg." },
    { q: "Womit atmen Fische?", pl: "Czym oddychają ryby?",
      a: ["mit den Kiemen", "mit der Lunge", "mit der Schwimmblase"],
      why: "Ryby pobierają tlen z wody przez skrzela (Kiemen)." },
    { q: "Wozu dient die Seitenlinie?", pl: "Do czego służy linia boczna?",
      a: ["zur Wahrnehmung von Wasserbewegungen", "zur Atmung", "zur Fortpflanzung"],
      why: "Linią boczną ryba wyczuwa ruchy i drgania wody." },
    { q: "Wozu dient die Schwimmblase?", pl: "Do czego służy pęcherz pławny?",
      a: ["zum Schweben im Wasser", "zur Verdauung", "zum Laichen"],
      why: "Pęcherz pławny pozwala rybie utrzymać się w toni bez wysiłku." },
    { q: "Welcher Fisch ist ein Raubfisch?", pl: "Która ryba jest drapieżna?",
      a: ["der Zander", "die Schleie", "der Karpfen"],
      why: "Sandacz (Zander) poluje na inne ryby; lin i karp to ryby spokojnego żeru." },
    { q: "Welcher Fisch ist ein Friedfisch?", pl: "Która ryba jest rybą spokojnego żeru?",
      a: ["die Schleie", "der Hecht", "der Wels"],
      why: "Lin (Schleie) żywi się drobnymi zwierzętami dna i roślinami." },
    { q: "Wie viele Barteln hat die Barbe?", pl: "Ile wąsików ma brzana?",
      a: ["vier", "zwei", "keine"],
      why: "Brzana ma cztery wąsiki przy pysku." },
    { q: "Wo laicht der Aal?", pl: "Gdzie odbywa tarło węgorz?",
      a: ["im Meer", "im Gebirgsbach", "im Dorfteich"],
      why: "Węgorz wędruje na tarło do morza (Sargassowego)." },
    { q: "Welcher Fisch hat keine Schwimmblase?", pl: "Która ryba nie ma pęcherza pławnego?",
      a: ["die Mühlkoppe", "der Karpfen", "der Hecht"],
      why: "Głowacz (Mühlkoppe) żyje przy dnie i nie ma pęcherza pławnego." },
    { q: "Woran kann man das Alter eines Fisches ablesen?", pl: "Po czym można odczytać wiek ryby?",
      a: ["an den Schuppen", "an der Farbe", "an der Schwanzflosse"],
      why: "Na łuskach widać przyrosty roczne, podobnie jak słoje w drzewie." },
    { q: "Welcher Fisch stammt ursprünglich aus Nordamerika?", pl: "Która ryba pochodzi z Ameryki Północnej?",
      a: ["die Regenbogenforelle", "die Bachforelle", "der Huchen"],
      why: "Pstrąg tęczowy został sprowadzony do Europy z Ameryki Północnej." },
    { q: "Wann laicht der Hecht?", pl: "Kiedy szczupak odbywa tarło?",
      a: ["im Frühjahr", "im Hochsommer", "im Spätherbst"],
      why: "Szczupak trze się wczesną wiosną, często zaraz po roztopach." },
    { q: "Was frisst die Nase hauptsächlich?", pl: "Czym żywi się głównie świnka (Nase)?",
      a: ["Algenbewuchs von Steinen", "andere Fische", "Insekten über dem Wasser"],
      why: "Świnka zeskrobuje glony z kamieni dolną, ostrą wargą." },

    // Gewässerkunde, Schutz und Pflege
    { q: "Welche Fischregion ist am kältesten und sauerstoffreichsten?", pl: "Która kraina rybna jest najzimniejsza i najbogatsza w tlen?",
      a: ["die Forellenregion", "die Brachsenregion", "die Barbenregion"],
      why: "Kraina pstrąga to górny bieg rzek: zimna, szybka i natleniona woda." },
    { q: "Warum wird im Hochsommer der Sauerstoff im Wasser knapp?", pl: "Dlaczego w upale brakuje tlenu w wodzie?",
      a: ["Warmes Wasser speichert weniger Sauerstoff.", "Die Fische atmen weniger.", "Die Sonne verbraucht den Sauerstoff."],
      why: "Im cieplejsza woda, tym mniej tlenu może się w niej rozpuścić." },
    { q: "Was bedeutet Überdüngung (Eutrophierung)?", pl: "Co oznacza przenawożenie (eutrofizacja)?",
      a: ["zu viele Nährstoffe im Wasser", "zu wenig Wasser im See", "zu viele Fische im See"],
      why: "Nadmiar nawozów powoduje zakwity glonów, a potem braki tlenu." },
    { q: "Was ist eine Fischtreppe?", pl: "Czym jest przepławka (Fischtreppe)?",
      a: ["eine Aufstiegshilfe für Fische an einem Hindernis", "eine Treppe zum Ufer", "ein künstlicher Laichplatz"],
      why: "Przepławka pozwala rybom ominąć jaz lub zaporę." },
    { q: "Was gehört zur Hege eines Gewässers?", pl: "Co należy do dbałości o łowisko (Hege)?",
      a: ["ein gesunder, artenreicher Fischbestand", "möglichst viele Fische entnehmen", "das Ufer betonieren"],
      why: "Hege to troska o zdrowy, zróżnicowany rybostan i siedliska." },
    { q: "Was sollte man bei einem Fischsterben tun?", pl: "Co zrobić, gdy widzisz śnięcie ryb?",
      a: ["sofort die Behörden oder den Fischereiberechtigten informieren", "die toten Fische mitnehmen", "nichts, das ist normal"],
      why: "Śnięcie ryb trzeba szybko zgłosić, żeby ustalić przyczynę, np. zanieczyszczenie." },

    // Fanggeräte
    { q: "Welches Vorfach nimmt man beim Hechtangeln?", pl: "Jakiego przyponu używa się przy łowieniu szczupaka?",
      a: ["ein bissfestes Stahlvorfach", "ein sehr dünnes Vorfach", "gar kein Vorfach"],
      why: "Ostre zęby szczupaka przecinają zwykłą żyłkę." },
    { q: "Wozu dient der Kescher?", pl: "Do czego służy podbierak (Kescher)?",
      a: ["zum Landen des Fisches", "zum Auswerfen des Köders", "zum Betäuben des Fisches"],
      why: "Podbierakiem bezpiecznie wyjmuje się rybę z wody." },
    { q: "Was ist ein Blinker?", pl: "Czym jest błystka wahadłowa (Blinker)?",
      a: ["ein Kunstköder aus Metall", "ein Schwimmer", "ein Haken ohne Widerhaken"],
      why: "Blinker to metalowa przynęta, która odbija światło i kołysze się w wodzie." },
    { q: "Was ist ein Drilling?", pl: "Czym jest kotwiczka (Drilling)?",
      a: ["ein Haken mit drei Spitzen", "ein Schwimmer mit drei Farben", "drei Ruten gleichzeitig"],
      why: "Drilling to potrójny haczyk, np. przy woblerach." },
    { q: "Wozu dient der Wirbel?", pl: "Do czego służy krętlik (Wirbel)?",
      a: ["Er verhindert, dass sich die Schnur verdreht.", "Er beschwert den Köder.", "Er zeigt den Biss an."],
      why: "Krętlik obraca się i nie pozwala żyłce się skręcać." },

    // Tierschutz
    { q: "Was muss man vor dem Töten eines Fisches tun?", pl: "Co trzeba zrobić przed zabiciem ryby?",
      a: ["ihn betäuben", "ihn wiegen", "ihn waschen"],
      why: "Rybę najpierw się ogłusza, a dopiero potem uśmierca, np. przekłuciem serca." },
    { q: "Wie fasst man einen Fisch an, den man zurücksetzt?", pl: "Jak chwytać rybę, którą się wypuszcza?",
      a: ["mit nassen Händen", "mit einem trockenen Handtuch", "fest am Kiemendeckel"],
      why: "Mokre ręce nie niszczą śluzu, który chroni rybę przed chorobami." },
    { q: "Was ist der Herzstich?", pl: "Czym jest przekłucie serca (Herzstich)?",
      a: ["eine Methode zum Töten nach dem Betäuben", "eine Hakenart", "eine Wurftechnik"],
      why: "Herzstich to sposób uśmiercenia ogłuszonej ryby." },

    // Rechtsvorschriften (ogólne zasady)
    { q: "Was macht man mit einem untermaßigen Fisch?", pl: "Co robi się z rybą niewymiarową?",
      a: ["sofort schonend zurücksetzen", "mitnehmen", "als Köder verwenden"],
      why: "Ryba poniżej wymiaru ochronnego wraca do wody — szybko i delikatnie." },
    { q: "Was gilt für einen Fisch, der gerade Schonzeit hat?", pl: "Co dotyczy ryby w okresie ochronnym?",
      a: ["Er muss sofort schonend zurückgesetzt werden.", "Man darf ihn behalten.", "Man darf ihn verkaufen."],
      why: "Ryby w okresie ochronnym nie wolno zabierać." },
    { q: "Welche Papiere braucht man in der Regel zum Angeln?", pl: "Jakie dokumenty są zwykle potrzebne do łowienia?",
      a: ["Fischereischein und Erlaubnisschein", "nur den Führerschein", "nur eine Mitgliedskarte vom Sportverein"],
      why: "Karta wędkarska uprawnia do łowienia w ogóle, a zezwolenie — na konkretnym łowisku." },
    { q: "Wer stellt den Erlaubnisschein aus?", pl: "Kto wystawia zezwolenie na łowisko?",
      a: ["der Fischereiberechtigte", "die Polizei", "das Finanzamt"],
      why: "Zezwolenie wydaje uprawniony do rybołówstwa, np. właściciel wody albo koło wędkarskie." },
    { q: "Was ist Fischwilderei?", pl: "Czym jest kłusownictwo rybne (Fischwilderei)?",
      a: ["Angeln ohne Berechtigung in einem fremden Gewässer", "Angeln mit Kunstködern", "Angeln am Wochenende"],
      why: "Łowienie bez prawa do cudzego łowiska to przestępstwo." },
    { q: "Wer darf am Wasser Ihre Papiere kontrollieren?", pl: "Kto może nad wodą skontrolować Twoje dokumenty?",
      a: ["der Fischereiaufseher", "jeder Spaziergänger", "der Briefträger"],
      why: "Kontrolę prowadzą strażnicy rybaccy (oraz policja)." }
];

let fishingQuizSet = [];

function startFishingQuiz() {
    showScreen('quiz');
    const hint = document.getElementById('quizHint');
    if (hint) hint.textContent = 'Wybierz poprawną odpowiedź:';

    fishingQuizSet = shuffleArray(fishingQuizQuestions.slice()).slice(0, 10);
    // endQuiz() liczy wynik z state.quizWords — podstawiamy pytania
    state.quizWords = fishingQuizSet;
    state.quizIndex = 0;
    state.quizScore = 0;
    showFishingQuestion();
}

function showFishingQuestion() {
    if (state.quizIndex >= fishingQuizSet.length) {
        endQuiz();
        return;
    }

    const item = fishingQuizSet[state.quizIndex];
    const correct = item.a[0];

    document.getElementById('quizProgress').textContent =
        '🎣 Pytanie ' + (state.quizIndex + 1) + '/' + fishingQuizSet.length;
    document.getElementById('quizScore').textContent = 'Wynik: ' + state.quizScore;

    const wordEl = document.getElementById('quizWord');
    wordEl.innerHTML = '';
    const qText = document.createElement('span');
    qText.className = 'quiz-word-text fishing-question';
    qText.textContent = item.q;
    const speakBtn = document.createElement('button');
    speakBtn.className = 'quiz-speak-btn';
    speakBtn.title = 'Posłuchaj';
    speakBtn.textContent = '🔊';
    speakBtn.onclick = function() { speak(item.q); };
    const plText = document.createElement('small');
    plText.className = 'fishing-question-pl';
    plText.textContent = item.pl;
    wordEl.appendChild(qText);
    wordEl.appendChild(speakBtn);
    wordEl.appendChild(plText);

    if (state.autoSpeak) setTimeout(function() { speak(item.q); }, 300);

    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    shuffleArray(item.a.slice()).forEach(function(option) {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = function() { checkFishingAnswer(option, item, btn); };
        container.appendChild(btn);
    });

    document.getElementById('quizFeedback').classList.add('hidden');
}

function checkFishingAnswer(selected, item, btn) {
    const correct = item.a[0];
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(function(opt) { opt.onclick = null; });

    state.totalAnswers++;
    const ok = selected === correct;

    if (ok) {
        btn.classList.add('correct');
        state.quizScore++;
        state.correctAnswers++;
        addXP(10);
        playCorrectSound();
    } else {
        btn.classList.add('wrong');
        options.forEach(function(opt) {
            if (opt.textContent === correct) opt.classList.add('correct');
        });
        playWrongSound();
    }

    // Wyjaśnienie zostaje na ekranie, dopóki uczeń nie kliknie „Dalej”
    const feedback = document.getElementById('quizFeedback');
    feedback.className = 'quiz-feedback ' + (ok ? 'success' : 'error');
    feedback.innerHTML = '';
    const head = document.createElement('div');
    head.textContent = (ok ? '✅ Dobrze! ' : '❌ Poprawnie: ') + correct;
    const why = document.createElement('div');
    why.className = 'fishing-why';
    why.textContent = '💡 ' + item.why;
    const next = document.createElement('button');
    next.className = 'check-btn fishing-next';
    next.textContent = state.quizIndex + 1 < fishingQuizSet.length ? 'Dalej ▶' : 'Zakończ 🏁';
    next.onclick = function() {
        state.quizIndex++;
        showFishingQuestion();
    };
    feedback.appendChild(head);
    feedback.appendChild(why);
    feedback.appendChild(next);

    saveState();
}
