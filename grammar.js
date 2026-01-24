// ==================== DANE GRAMATYCZNE ====================

const grammarData = {
    articles: {
        content: `
            <h3>📝 Rodzajniki w języku niemieckim</h3>
            <p>W niemieckim mamy <strong>3 rodzaje</strong>: męski (der), żeński (die), nijaki (das).</p>
            
            <table class="grammar-table">
                <tr><th>Rodzaj</th><th>Określony</th><th>Nieokreślony</th></tr>
                <tr><td>Męski</td><td><strong>der</strong> Mann</td><td><strong>ein</strong> Mann</td></tr>
                <tr><td>Żeński</td><td><strong>die</strong> Frau</td><td><strong>eine</strong> Frau</td></tr>
                <tr><td>Nijaki</td><td><strong>das</strong> Kind</td><td><strong>ein</strong> Kind</td></tr>
                <tr><td>Liczba mn.</td><td><strong>die</strong> Kinder</td><td><strong>-</strong> Kinder</td></tr>
            </table>
            
            <h4>💡 Wskazówki:</h4>
            <ul>
                <li>Słowa kończące się na <strong>-ung, -heit, -keit</strong> są żeńskie (die)</li>
                <li>Słowa kończące się na <strong>-chen, -lein</strong> są nijakie (das)</li>
                <li>Dni tygodnia i miesiące są męskie (der Montag, der Januar)</li>
            </ul>
        `,
        exercises: [
            { question: "___ Hund ist groß.", options: ["der", "die", "das"], answer: "der" },
            { question: "___ Katze schläft.", options: ["der", "die", "das"], answer: "die" },
            { question: "___ Buch ist interessant.", options: ["der", "die", "das"], answer: "das" },
            { question: "___ Mädchen spielt.", options: ["der", "die", "das"], answer: "das" },
            { question: "___ Freiheit ist wichtig.", options: ["der", "die", "das"], answer: "die" }
        ]
    },
    
    verbs: {
        content: `
            <h3>🏃 Odmiana czasowników regularnych</h3>
            <p>Większość czasowników odmienia się według stałego wzoru:</p>
            
            <h4>Przykład: <strong>spielen</strong> (grać)</h4>
            <table class="grammar-table">
                <tr><th>Osoba</th><th>Końcówka</th><th>Przykład</th></tr>
                <tr><td>ich</td><td>-e</td><td>ich spiel<strong>e</strong></td></tr>
                <tr><td>du</td><td>-st</td><td>du spiel<strong>st</strong></td></tr>
                <tr><td>er/sie/es</td><td>-t</td><td>er spiel<strong>t</strong></td></tr>
                <tr><td>wir</td><td>-en</td><td>wir spiel<strong>en</strong></td></tr>
                <tr><td>ihr</td><td>-t</td><td>ihr spiel<strong>t</strong></td></tr>
                <tr><td>sie/Sie</td><td>-en</td><td>sie spiel<strong>en</strong></td></tr>
            </table>
            
            <h4>⚠️ Czasowniki nieregularne:</h4>
            <p><strong>sein</strong> (być): ich bin, du bist, er ist, wir sind, ihr seid, sie sind</p>
            <p><strong>haben</strong> (mieć): ich habe, du hast, er hat, wir haben, ihr habt, sie haben</p>
        `,
        exercises: [
            { question: "Ich ___ Deutsch. (lernen)", options: ["lerne", "lernst", "lernt"], answer: "lerne" },
            { question: "Du ___ gut. (tanzen)", options: ["tanze", "tanzt", "tanzen"], answer: "tanzt" },
            { question: "Er ___ Fußball. (spielen)", options: ["spiele", "spielst", "spielt"], answer: "spielt" },
            { question: "Wir ___ nach Hause. (gehen)", options: ["gehe", "geht", "gehen"], answer: "gehen" },
            { question: "Sie (ona) ___ ein Buch. (lesen)", options: ["lese", "liest", "lesen"], answer: "liest" }
        ]
    },
    
    cases: {
        content: `
            <h3>📚 Przypadki w niemieckim</h3>
            <p>Niemiecki ma <strong>4 przypadki</strong>:</p>
            
            <table class="grammar-table">
                <tr><th>Przypadek</th><th>Pytanie</th><th>Przykład</th></tr>
                <tr><td><strong>Nominativ</strong></td><td>Kto? Co?</td><td><strong>Der</strong> Mann liest.</td></tr>
                <tr><td><strong>Akkusativ</strong></td><td>Kogo? Co?</td><td>Ich sehe <strong>den</strong> Mann.</td></tr>
                <tr><td><strong>Dativ</strong></td><td>Komu? Czemu?</td><td>Ich gebe <strong>dem</strong> Mann.</td></tr>
                <tr><td><strong>Genitiv</strong></td><td>Czyj? Czego?</td><td>Das Auto <strong>des</strong> Mannes.</td></tr>
            </table>
            
            <h4>Odmiana rodzajnika "der" (męski):</h4>
            <table class="grammar-table">
                <tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th><th>Genitiv</th></tr>
                <tr><td>Męski</td><td>der</td><td>den</td><td>dem</td><td>des</td></tr>
                <tr><td>Żeński</td><td>die</td><td>die</td><td>der</td><td>der</td></tr>
                <tr><td>Nijaki</td><td>das</td><td>das</td><td>dem</td><td>des</td></tr>
            </table>
        `,
        exercises: [
            { question: "Ich sehe ___ Hund. (Akkusativ)", options: ["der", "den", "dem"], answer: "den" },
            { question: "Ich gebe ___ Frau ein Geschenk. (Dativ)", options: ["die", "der", "den"], answer: "der" },
            { question: "___ Kind spielt. (Nominativ)", options: ["das", "den", "dem"], answer: "das" },
            { question: "Ich helfe ___ Mann. (Dativ)", options: ["der", "den", "dem"], answer: "dem" }
        ]
    },
    
    perfect: {
        content: `
            <h3>⏰ Czas Perfekt (przeszły)</h3>
            <p>Perfekt tworzymy: <strong>haben/sein + Partizip II</strong></p>
            
            <h4>Partizip II (imiesłów):</h4>
            <ul>
                <li>Regularne: <strong>ge-</strong> + rdzeń + <strong>-t</strong> → gespielt, gemacht</li>
                <li>Nieregularne: <strong>ge-</strong> + rdzeń + <strong>-en</strong> → gegangen, gesehen</li>
            </ul>
            
            <table class="grammar-table">
                <tr><th>Czasownik</th><th>Perfekt</th><th>Przykład</th></tr>
                <tr><td>spielen</td><td>hat gespielt</td><td>Ich <strong>habe</strong> Fußball <strong>gespielt</strong>.</td></tr>
                <tr><td>gehen</td><td>ist gegangen</td><td>Er <strong>ist</strong> nach Hause <strong>gegangen</strong>.</td></tr>
                <tr><td>essen</td><td>hat gegessen</td><td>Sie <strong>hat</strong> Pizza <strong>gegessen</strong>.</td></tr>
            </table>
            
            <h4>💡 Kiedy "sein"?</h4>
            <p>Używamy <strong>sein</strong> z czasownikami ruchu: gehen, kommen, fahren, fliegen...</p>
        `,
        exercises: [
            { question: "Ich ___ einen Film gesehen. (haben)", options: ["habe", "bin", "hat"], answer: "habe" },
            { question: "Sie ___ nach Berlin gefahren. (sein)", options: ["hat", "ist", "sind"], answer: "ist" },
            { question: "Wir haben Kaffee ___. (trinken)", options: ["getrinkt", "getrunken", "trinken"], answer: "getrunken" },
            { question: "Er ___ spät gekommen. (sein)", options: ["hat", "ist", "war"], answer: "ist" }
        ]
    },
    
    modal: {
        content: `
            <h3>💪 Czasowniki modalne</h3>
            <p>Czasowniki modalne wyrażają możliwość, chęć, obowiązek:</p>
            
            <table class="grammar-table">
                <tr><th>Czasownik</th><th>Znaczenie</th><th>ich</th><th>du</th><th>er/sie</th></tr>
                <tr><td><strong>können</strong></td><td>móc, umieć</td><td>kann</td><td>kannst</td><td>kann</td></tr>
                <tr><td><strong>müssen</strong></td><td>musieć</td><td>muss</td><td>musst</td><td>muss</td></tr>
                <tr><td><strong>wollen</strong></td><td>chcieć</td><td>will</td><td>willst</td><td>will</td></tr>
                <tr><td><strong>sollen</strong></td><td>powinien</td><td>soll</td><td>sollst</td><td>soll</td></tr>
                <tr><td><strong>dürfen</strong></td><td>mieć pozwolenie</td><td>darf</td><td>darfst</td><td>darf</td></tr>
                <tr><td><strong>mögen</strong></td><td>lubić</td><td>mag</td><td>magst</td><td>mag</td></tr>
            </table>
            
            <h4>Struktura zdania:</h4>
            <p>Czasownik modalny + ... + <strong>bezokolicznik na końcu</strong></p>
            <p>Przykład: Ich <strong>kann</strong> gut Deutsch <strong>sprechen</strong>.</p>
        `,
        exercises: [
            { question: "Ich ___ Deutsch sprechen. (können)", options: ["kann", "könne", "können"], answer: "kann" },
            { question: "Du ___ heute arbeiten. (müssen)", options: ["muss", "musst", "müssen"], answer: "musst" },
            { question: "Er ___ nach Hause gehen. (wollen)", options: ["wollt", "will", "wollen"], answer: "will" },
            { question: "___ ich hier rauchen? (dürfen)", options: ["Darf", "Dürfe", "Darfst"], answer: "Darf" }
        ]
    },
    
    praeteritum: {
        content: `
            <h3>📖 Czas Präteritum</h3>
            <p>Präteritum to czas przeszły używany głównie w pisowni i formalnych tekstach.</p>
            
            <h4>Czasowniki regularne:</h4>
            <p>Rdzeń + <strong>-te</strong> (ich), <strong>-test</strong> (du), <strong>-te</strong> (er)...</p>
            
            <table class="grammar-table">
                <tr><th></th><th>spielen</th><th>arbeiten</th></tr>
                <tr><td>ich</td><td>spielte</td><td>arbeitete</td></tr>
                <tr><td>du</td><td>spieltest</td><td>arbeitetest</td></tr>
                <tr><td>er/sie/es</td><td>spielte</td><td>arbeitete</td></tr>
            </table>
            
            <h4>Ważne czasowniki nieregularne:</h4>
            <table class="grammar-table">
                <tr><th>Bezokolicznik</th><th>Präteritum (ich)</th></tr>
                <tr><td>sein</td><td>war</td></tr>
                <tr><td>haben</td><td>hatte</td></tr>
                <tr><td>gehen</td><td>ging</td></tr>
                <tr><td>kommen</td><td>kam</td></tr>
                <tr><td>sehen</td><td>sah</td></tr>
            </table>
        `,
        exercises: [
            { question: "Ich ___ gestern zu Hause. (sein)", options: ["war", "bin", "wurde"], answer: "war" },
            { question: "Er ___ keine Zeit. (haben)", options: ["hat", "hatte", "habte"], answer: "hatte" },
            { question: "Sie ___ ins Kino. (gehen)", options: ["geht", "ging", "gehte"], answer: "ging" },
            { question: "Wir ___ spät nach Hause. (kommen)", options: ["kommen", "kam", "kamen"], answer: "kamen" }
        ]
    }
};
