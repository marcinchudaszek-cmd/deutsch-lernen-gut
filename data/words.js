// Baza słówek niemieckich - podzielona na kategorie i poziomy

const germanWords = {
    // 🗣️ PODSTAWY (A1)
    basics: [
        { german: "Hallo", polish: "Cześć", example: "Hallo! Wie geht's?", level: "A1" },
        { german: "Guten Tag", polish: "Dzień dobry", example: "Guten Tag, Herr Müller!", level: "A1" },
        { german: "Guten Morgen", polish: "Dzień dobry (rano)", example: "Guten Morgen! Wie haben Sie geschlafen?", level: "A1" },
        { german: "Guten Abend", polish: "Dobry wieczór", example: "Guten Abend zusammen!", level: "A1" },
        { german: "Gute Nacht", polish: "Dobranoc", example: "Gute Nacht, schlaf gut!", level: "A1" },
        { german: "Auf Wiedersehen", polish: "Do widzenia", example: "Auf Wiedersehen, bis morgen!", level: "A1" },
        { german: "Tschüss", polish: "Cześć (pożegnanie)", example: "Tschüss! Bis bald!", level: "A1" },
        { german: "Danke", polish: "Dziękuję", example: "Danke schön!", level: "A1" },
        { german: "Bitte", polish: "Proszę", example: "Bitte sehr!", level: "A1" },
        { german: "Entschuldigung", polish: "Przepraszam", example: "Entschuldigung, wo ist der Bahnhof?", level: "A1" },
        { german: "Ja", polish: "Tak", example: "Ja, das stimmt.", level: "A1" },
        { german: "Nein", polish: "Nie", example: "Nein, danke.", level: "A1" },
        { german: "Vielleicht", polish: "Może", example: "Vielleicht komme ich später.", level: "A1" },
        { german: "Wie geht's?", polish: "Jak się masz?", example: "Hallo! Wie geht's dir?", level: "A1" },
        { german: "Gut", polish: "Dobrze", example: "Mir geht es gut.", level: "A1" },
        { german: "Schlecht", polish: "Źle", example: "Heute geht es mir schlecht.", level: "A1" },
        { german: "Ich", polish: "Ja", example: "Ich heiße Anna.", level: "A1" },
        { german: "Du", polish: "Ty", example: "Wie heißt du?", level: "A1" },
        { german: "Er", polish: "On", example: "Er ist mein Bruder.", level: "A1" },
        { german: "Sie", polish: "Ona", example: "Sie ist sehr nett.", level: "A1" }
    ],

    greetings: [
        { german: "Willkommen", polish: "Witamy", example: "Willkommen in Deutschland!", level: "A1" },
        { german: "Schön dich zu sehen", polish: "Miło cię widzieć", example: "Schön dich zu sehen!", level: "A1" },
        { german: "Wie heißen Sie?", polish: "Jak się Pan/Pani nazywa?", example: "Guten Tag! Wie heißen Sie?", level: "A1" },
        { german: "Wie heißt du?", polish: "Jak się nazywasz?", example: "Hallo! Wie heißt du?", level: "A1" },
        { german: "Ich heiße", polish: "Nazywam się", example: "Ich heiße Maria.", level: "A1" },
        { german: "Freut mich", polish: "Miło mi", example: "Freut mich, Sie kennenzulernen!", level: "A1" },
        { german: "Lange nicht gesehen", polish: "Dawno się nie widzieliśmy", example: "Lange nicht gesehen! Wie geht's?", level: "A2" },
        { german: "Bis bald", polish: "Do zobaczenia", example: "Bis bald! Mach's gut!", level: "A1" },
        { german: "Bis morgen", polish: "Do jutra", example: "Tschüss! Bis morgen!", level: "A1" },
        { german: "Bis später", polish: "Do później", example: "Bis später! Bis dann!", level: "A1" }
    ],

    numbers: [
        { german: "eins", polish: "jeden", example: "Ich habe eins.", level: "A1" },
        { german: "zwei", polish: "dwa", example: "Zwei Kaffee, bitte.", level: "A1" },
        { german: "drei", polish: "trzy", example: "Drei Tickets, bitte.", level: "A1" },
        { german: "vier", polish: "cztery", example: "Ich bin vier Jahre alt.", level: "A1" },
        { german: "fünf", polish: "pięć", example: "Fünf Minuten, bitte.", level: "A1" },
        { german: "sechs", polish: "sześć", example: "Sechs Uhr morgens.", level: "A1" },
        { german: "sieben", polish: "siedem", example: "Sieben Tage die Woche.", level: "A1" },
        { german: "acht", polish: "osiem", example: "Acht Euro, bitte.", level: "A1" },
        { german: "neun", polish: "dziewięć", example: "Neun von zehn.", level: "A1" },
        { german: "zehn", polish: "dziesięć", example: "Zehn Personen.", level: "A1" },
        { german: "elf", polish: "jedenaście", example: "Elf Uhr mittags.", level: "A1" },
        { german: "zwölf", polish: "dwanaście", example: "Zwölf Monate.", level: "A1" },
        { german: "zwanzig", polish: "dwadzieścia", example: "Zwanzig Euro.", level: "A1" },
        { german: "dreißig", polish: "trzydzieści", example: "Dreißig Grad.", level: "A1" },
        { german: "hundert", polish: "sto", example: "Hundert Prozent.", level: "A1" }
    ],

    colors: [
        { german: "rot", polish: "czerwony", example: "Das Auto ist rot.", level: "A1" },
        { german: "blau", polish: "niebieski", example: "Der Himmel ist blau.", level: "A1" },
        { german: "grün", polish: "zielony", example: "Das Gras ist grün.", level: "A1" },
        { german: "gelb", polish: "żółty", example: "Die Sonne ist gelb.", level: "A1" },
        { german: "schwarz", polish: "czarny", example: "Ich trage schwarz.", level: "A1" },
        { german: "weiß", polish: "biały", example: "Der Schnee ist weiß.", level: "A1" },
        { german: "grau", polish: "szary", example: "Graue Wolken.", level: "A1" },
        { german: "braun", polish: "brązowy", example: "Braune Schuhe.", level: "A1" },
        { german: "rosa", polish: "różowy", example: "Ein rosa Kleid.", level: "A1" },
        { german: "orange", polish: "pomarańczowy", example: "Eine orange.", level: "A1" },
        { german: "lila", polish: "fioletowy", example: "Lila Blumen.", level: "A1" }
    ],

    time: [
        { german: "heute", polish: "dzisiaj", example: "Heute ist Montag.", level: "A1" },
        { german: "gestern", polish: "wczoraj", example: "Gestern war Sonntag.", level: "A1" },
        { german: "morgen", polish: "jutro", example: "Morgen habe ich frei.", level: "A1" },
        { german: "jetzt", polish: "teraz", example: "Jetzt oder nie!", level: "A1" },
        { german: "später", polish: "później", example: "Bis später!", level: "A1" },
        { german: "früher", polish: "wcześniej", example: "Früher war alles besser.", level: "A2" },
        { german: "die Uhr", polish: "zegar/godzina", example: "Wie viel Uhr ist es?", level: "A1" },
        { german: "die Stunde", polish: "godzina", example: "Eine Stunde Zeit.", level: "A1" },
        { german: "die Minute", polish: "minuta", example: "Fünf Minuten.", level: "A1" },
        { german: "die Sekunde", polish: "sekunda", example: "Eine Sekunde bitte!", level: "A1" }
    ],

    days: [
        { german: "Montag", polish: "poniedziałek", example: "Montag ist der erste Tag.", level: "A1" },
        { german: "Dienstag", polish: "wtorek", example: "Am Dienstag arbeite ich.", level: "A1" },
        { german: "Mittwoch", polish: "środa", example: "Mittwoch ist Mitte der Woche.", level: "A1" },
        { german: "Donnerstag", polish: "czwartek", example: "Donnerstag gehe ich einkaufen.", level: "A1" },
        { german: "Freitag", polish: "piątek", example: "Freitag ist mein Lieblingstag.", level: "A1" },
        { german: "Samstag", polish: "sobota", example: "Am Samstag schlafe ich lange.", level: "A1" },
        { german: "Sonntag", polish: "niedziela", example: "Sonntag ist frei.", level: "A1" },
        { german: "Januar", polish: "styczeń", example: "Im Januar ist Winter.", level: "A1" },
        { german: "Februar", polish: "luty", example: "Februar ist kurz.", level: "A1" },
        { german: "März", polish: "marzec", example: "Im März kommt der Frühling.", level: "A1" },
        { german: "April", polish: "kwiecień", example: "April, April!", level: "A1" },
        { german: "Mai", polish: "maj", example: "Im Mai blühen Blumen.", level: "A1" },
        { german: "Juni", polish: "czerwiec", example: "Juni ist warm.", level: "A1" },
        { german: "Juli", polish: "lipiec", example: "Im Juli fahre ich in Urlaub.", level: "A1" },
        { german: "August", polish: "sierpień", example: "August ist heiß.", level: "A1" },
        { german: "September", polish: "wrzesień", example: "Im September beginnt die Schule.", level: "A1" },
        { german: "Oktober", polish: "październik", example: "Oktober ist bunt.", level: "A1" },
        { german: "November", polish: "listopad", example: "Im November ist es kalt.", level: "A1" },
        { german: "Dezember", polish: "grudzień", example: "Dezember ist Weihnachten.", level: "A1" }
    ],

    family: [
        { german: "die Familie", polish: "rodzina", example: "Meine Familie ist groß.", level: "A1" },
        { german: "die Mutter", polish: "matka", example: "Meine Mutter ist nett.", level: "A1" },
        { german: "der Vater", polish: "ojciec", example: "Mein Vater arbeitet viel.", level: "A1" },
        { german: "die Eltern", polish: "rodzice", example: "Meine Eltern wohnen hier.", level: "A1" },
        { german: "der Bruder", polish: "brat", example: "Ich habe einen Bruder.", level: "A1" },
        { german: "die Schwester", polish: "siostra", example: "Meine Schwester ist älter.", level: "A1" },
        { german: "die Geschwister", polish: "rodzeństwo", example: "Ich habe drei Geschwister.", level: "A1" },
        { german: "der Sohn", polish: "syn", example: "Das ist mein Sohn.", level: "A1" },
        { german: "die Tochter", polish: "córka", example: "Meine Tochter heißt Anna.", level: "A1" },
        { german: "die Großmutter", polish: "babcia", example: "Meine Großmutter kocht gut.", level: "A1" },
        { german: "der Großvater", polish: "dziadek", example: "Mein Großvater ist alt.", level: "A1" },
        { german: "die Oma", polish: "babcia (nieformalnie)", example: "Oma backt Kuchen.", level: "A1" },
        { german: "der Opa", polish: "dziadek (nieformalnie)", example: "Opa liest Zeitung.", level: "A1" }
    ],

    food: [
        { german: "das Brot", polish: "chleb", example: "Ich esse Brot zum Frühstück.", level: "A1" },
        { german: "die Butter", polish: "masło", example: "Butter aufs Brot.", level: "A1" },
        { german: "der Käse", polish: "ser", example: "Ich mag Käse.", level: "A1" },
        { german: "die Wurst", polish: "kiełbasa", example: "Deutsche Wurst ist lecker.", level: "A1" },
        { german: "das Ei", polish: "jajko", example: "Zum Frühstück esse ich ein Ei.", level: "A1" },
        { german: "der Apfel", polish: "jabłko", example: "Ein Apfel am Tag.", level: "A1" },
        { german: "die Banane", polish: "banan", example: "Bananen sind gesund.", level: "A1" },
        { german: "die Orange", polish: "pomarańcza", example: "Orangen haben Vitamin C.", level: "A1" },
        { german: "das Gemüse", polish: "warzywa", example: "Gemüse ist gesund.", level: "A1" },
        { german: "das Obst", polish: "owoce", example: "Ich esse viel Obst.", level: "A1" },
        { german: "der Salat", polish: "sałatka", example: "Ein frischer Salat.", level: "A1" },
        { german: "die Kartoffel", polish: "ziemniak", example: "Kartoffeln mit Butter.", level: "A1" },
        { german: "das Fleisch", polish: "mięso", example: "Ich esse kein Fleisch.", level: "A1" },
        { german: "der Fisch", polish: "ryba", example: "Fisch ist gesund.", level: "A1" },
        { german: "die Pizza", polish: "pizza", example: "Pizza Margherita, bitte!", level: "A1" },
        { german: "die Suppe", polish: "zupa", example: "Eine warme Suppe.", level: "A1" },
        { german: "das Hähnchen", polish: "kurczak", example: "Gegrilltes Hähnchen!", level: "A1" },
        { german: "der Reis", polish: "ryż", example: "Reis mit Gemüse.", level: "A1" },
        { german: "die Nudeln", polish: "makaron", example: "Nudeln mit Sauce.", level: "A1" },
        { german: "die Schokolade", polish: "czekolada", example: "Ich liebe Schokolade!", level: "A1" }
    ],

    drinks: [
        { german: "das Wasser", polish: "woda", example: "Ein Glas Wasser, bitte.", level: "A1" },
        { german: "der Kaffee", polish: "kawa", example: "Einen Kaffee, bitte.", level: "A1" },
        { german: "der Tee", polish: "herbata", example: "Tee mit Zitrone.", level: "A1" },
        { german: "die Milch", polish: "mleko", example: "Milch für den Kaffee.", level: "A1" },
        { german: "der Saft", polish: "sok", example: "Orangensaft zum Frühstück.", level: "A1" },
        { german: "das Bier", polish: "piwo", example: "Ein Bier, bitte!", level: "A1" },
        { german: "der Wein", polish: "wino", example: "Ein Glas Rotwein.", level: "A1" },
        { german: "die Limonade", polish: "lemoniada", example: "Eine kalte Limonade.", level: "A1" },
        { german: "der Kakao", polish: "kakao", example: "Heißer Kakao im Winter.", level: "A1" }
    ],

    home: [
        { german: "das Haus", polish: "dom", example: "Mein Haus ist groß.", level: "A1" },
        { german: "die Wohnung", polish: "mieszkanie", example: "Ich wohne in einer Wohnung.", level: "A1" },
        { german: "das Zimmer", polish: "pokój", example: "Mein Zimmer ist klein.", level: "A1" },
        { german: "die Küche", polish: "kuchnia", example: "In der Küche koche ich.", level: "A1" },
        { german: "das Bad", polish: "łazienka", example: "Das Bad ist sauber.", level: "A1" },
        { german: "das Schlafzimmer", polish: "sypialnia", example: "Im Schlafzimmer schlafe ich.", level: "A1" },
        { german: "das Wohnzimmer", polish: "salon", example: "Im Wohnzimmer sehe ich fern.", level: "A1" },
        { german: "die Tür", polish: "drzwi", example: "Bitte, mach die Tür zu!", level: "A1" },
        { german: "das Fenster", polish: "okno", example: "Das Fenster ist offen.", level: "A1" },
        { german: "der Tisch", polish: "stół", example: "Der Tisch ist groß.", level: "A1" },
        { german: "der Stuhl", polish: "krzesło", example: "Ich sitze auf dem Stuhl.", level: "A1" },
        { german: "das Bett", polish: "łóżko", example: "Mein Bett ist bequem.", level: "A1" },
        { german: "der Schrank", polish: "szafa", example: "Meine Kleider sind im Schrank.", level: "A1" }
    ],

    verbs: [
        { german: "sein", polish: "być", example: "Ich bin müde.", level: "A1" },
        { german: "haben", polish: "mieć", example: "Ich habe Zeit.", level: "A1" },
        { german: "gehen", polish: "iść", example: "Ich gehe nach Hause.", level: "A1" },
        { german: "kommen", polish: "przychodzić", example: "Ich komme aus Polen.", level: "A1" },
        { german: "machen", polish: "robić", example: "Was machst du?", level: "A1" },
        { german: "sagen", polish: "mówić", example: "Was sagst du?", level: "A1" },
        { german: "essen", polish: "jeść", example: "Ich esse Pizza.", level: "A1" },
        { german: "trinken", polish: "pić", example: "Ich trinke Wasser.", level: "A1" },
        { german: "schlafen", polish: "spać", example: "Ich schlafe gut.", level: "A1" },
        { german: "arbeiten", polish: "pracować", example: "Ich arbeite viel.", level: "A1" },
        { german: "lernen", polish: "uczyć się", example: "Ich lerne Deutsch.", level: "A1" },
        { german: "sprechen", polish: "mówić", example: "Ich spreche Deutsch.", level: "A1" },
        { german: "verstehen", polish: "rozumieć", example: "Ich verstehe nicht.", level: "A1" },
        { german: "sehen", polish: "widzieć", example: "Ich sehe dich.", level: "A1" },
        { german: "hören", polish: "słyszeć", example: "Ich höre Musik.", level: "A1" },
        { german: "lesen", polish: "czytać", example: "Ich lese ein Buch.", level: "A1" },
        { german: "schreiben", polish: "pisać", example: "Ich schreibe einen Brief.", level: "A1" },
        { german: "spielen", polish: "grać", example: "Ich spiele Fußball.", level: "A1" },
        { german: "kochen", polish: "gotować", example: "Ich koche gern.", level: "A1" },
        { german: "kaufen", polish: "kupować", example: "Ich kaufe Brot.", level: "A1" },
        { german: "mögen", polish: "lubić", example: "Ich mag Schokolade.", level: "A1" },
        { german: "wollen", polish: "chcieć", example: "Ich will schlafen.", level: "A1" },
        { german: "können", polish: "móc/umieć", example: "Ich kann schwimmen.", level: "A1" },
        { german: "müssen", polish: "musieć", example: "Ich muss gehen.", level: "A1" },
        { german: "suchen", polish: "szukać", example: "Ich suche meine Brille.", level: "A1" },
        { german: "finden", polish: "znajdować", example: "Ich finde es nicht.", level: "A1" },
        { german: "kennen", polish: "znać", example: "Ich kenne ihn gut.", level: "A1" },
        { german: "wissen", polish: "wiedzieć", example: "Ich weiß es nicht.", level: "A1" }
    ],

    phrases: [
        { german: "Wie bitte?", polish: "Słucham?", example: "Wie bitte? Ich verstehe nicht.", level: "A1" },
        { german: "Kein Problem", polish: "Nie ma problemu", example: "Kein Problem, gern geschehen!", level: "A1" },
        { german: "Keine Ahnung", polish: "Nie mam pojęcia", example: "Keine Ahnung, frag jemand anders.", level: "A2" },
        { german: "Viel Glück!", polish: "Powodzenia!", example: "Viel Glück bei der Prüfung!", level: "A1" },
        { german: "Viel Spaß!", polish: "Baw się dobrze!", example: "Viel Spaß im Urlaub!", level: "A1" },
        { german: "Gute Reise!", polish: "Szczęśliwej podróży!", example: "Gute Reise nach Berlin!", level: "A1" },
        { german: "Guten Appetit!", polish: "Smacznego!", example: "Guten Appetit! Das sieht lecker aus!", level: "A1" },
        { german: "Prost!", polish: "Na zdrowie!", example: "Prost! Zum Wohl!", level: "A1" },
        { german: "Alles Gute!", polish: "Wszystkiego dobrego!", example: "Alles Gute zum Geburtstag!", level: "A1" },
        { german: "Herzlichen Glückwunsch!", polish: "Gratulacje!", example: "Herzlichen Glückwunsch zur Hochzeit!", level: "A2" }
    ],

    adjectives: [
        { german: "groß", polish: "duży", example: "Das Haus ist groß.", level: "A1" },
        { german: "klein", polish: "mały", example: "Die Katze ist klein.", level: "A1" },
        { german: "alt", polish: "stary", example: "Mein Opa ist alt.", level: "A1" },
        { german: "jung", polish: "młody", example: "Sie ist jung.", level: "A1" },
        { german: "schön", polish: "ładny", example: "Das Wetter ist schön.", level: "A1" },
        { german: "hässlich", polish: "brzydki", example: "Das Bild ist hässlich.", level: "A1" },
        { german: "gut", polish: "dobry", example: "Das Essen ist gut.", level: "A1" },
        { german: "schlecht", polish: "zły", example: "Das Wetter ist schlecht.", level: "A1" },
        { german: "neu", polish: "nowy", example: "Ich habe ein neues Auto.", level: "A1" },
        { german: "teuer", polish: "drogi", example: "Das Restaurant ist teuer.", level: "A1" },
        { german: "billig", polish: "tani", example: "Der Pullover ist billig.", level: "A1" },
        { german: "warm", polish: "ciepły", example: "Der Kaffee ist warm.", level: "A1" },
        { german: "kalt", polish: "zimny", example: "Das Wasser ist kalt.", level: "A1" },
        { german: "schnell", polish: "szybki", example: "Das Auto ist schnell.", level: "A1" },
        { german: "langsam", polish: "wolny", example: "Die Schildkröte ist langsam.", level: "A1" }
    ],

    weather: [
        { german: "das Wetter", polish: "pogoda", example: "Wie ist das Wetter?", level: "A1" },
        { german: "die Sonne", polish: "słońce", example: "Die Sonne scheint.", level: "A1" },
        { german: "der Regen", polish: "deszcz", example: "Es gibt Regen heute.", level: "A1" },
        { german: "der Schnee", polish: "śnieg", example: "Im Winter gibt es Schnee.", level: "A1" },
        { german: "der Wind", polish: "wiatr", example: "Der Wind ist stark.", level: "A1" },
        { german: "die Wolke", polish: "chmura", example: "Viele Wolken am Himmel.", level: "A1" },
        { german: "sonnig", polish: "słonecznie", example: "Heute ist es sonnig.", level: "A1" },
        { german: "regnerisch", polish: "deszczowo", example: "Es ist regnerisch.", level: "A1" },
        { german: "wolkig", polish: "pochmurnie", example: "Der Himmel ist wolkig.", level: "A1" }
    ],

    animals: [
        { german: "der Hund", polish: "pies", example: "Mein Hund heißt Rex.", level: "A1" },
        { german: "die Katze", polish: "kot", example: "Die Katze ist süß.", level: "A1" },
        { german: "das Pferd", polish: "koń", example: "Ich reite ein Pferd.", level: "A1" },
        { german: "die Kuh", polish: "krowa", example: "Die Kuh gibt Milch.", level: "A1" },
        { german: "das Schwein", polish: "świnia", example: "Das Schwein ist rosa.", level: "A1" },
        { german: "das Huhn", polish: "kura", example: "Das Huhn legt Eier.", level: "A1" },
        { german: "der Vogel", polish: "ptak", example: "Der Vogel singt.", level: "A1" },
        { german: "der Fisch", polish: "ryba", example: "Der Fisch schwimmt.", level: "A1" },
        { german: "die Maus", polish: "mysz", example: "Die Maus ist klein.", level: "A1" },
        { german: "der Elefant", polish: "słoń", example: "Der Elefant ist groß.", level: "A1" }
    ],

    school: [
        { german: "die Schule", polish: "szkoła", example: "Ich gehe in die Schule.", level: "A1" },
        { german: "der Lehrer", polish: "nauczyciel", example: "Der Lehrer ist nett.", level: "A1" },
        { german: "der Schüler", polish: "uczeń", example: "Ich bin Schüler.", level: "A1" },
        { german: "das Buch", polish: "książka", example: "Ich lese ein Buch.", level: "A1" },
        { german: "das Heft", polish: "zeszyt", example: "Ich schreibe ins Heft.", level: "A1" },
        { german: "der Stift", polish: "długopis", example: "Ich brauche einen Stift.", level: "A1" },
        { german: "die Tafel", polish: "tablica", example: "Der Lehrer schreibt an die Tafel.", level: "A1" },
        { german: "die Hausaufgabe", polish: "praca domowa", example: "Ich mache Hausaufgaben.", level: "A1" },
        { german: "die Prüfung", polish: "egzamin", example: "Morgen ist die Prüfung.", level: "A2" },
        { german: "lernen", polish: "uczyć się", example: "Ich lerne für die Prüfung.", level: "A1" }
    ],

    transport: [
        { german: "das Auto", polish: "samochód", example: "Ich fahre mit dem Auto.", level: "A1" },
        { german: "der Bus", polish: "autobus", example: "Der Bus kommt um 8 Uhr.", level: "A1" },
        { german: "die Bahn", polish: "kolej", example: "Ich fahre mit der Bahn.", level: "A1" },
        { german: "der Zug", polish: "pociąg", example: "Der Zug ist pünktlich.", level: "A1" },
        { german: "das Fahrrad", polish: "rower", example: "Ich fahre Fahrrad.", level: "A1" },
        { german: "das Flugzeug", polish: "samolot", example: "Das Flugzeug fliegt hoch.", level: "A1" },
        { german: "das Taxi", polish: "taksówka", example: "Ich nehme ein Taxi.", level: "A1" },
        { german: "die U-Bahn", polish: "metro", example: "Die U-Bahn ist schnell.", level: "A1" },
        { german: "die Straßenbahn", polish: "tramwaj", example: "Ich fahre Straßenbahn.", level: "A1" }
    ],

    city: [
        { german: "die Stadt", polish: "miasto", example: "Berlin ist eine große Stadt.", level: "A1" },
        { german: "die Straße", polish: "ulica", example: "Ich wohne in dieser Straße.", level: "A1" },
        { german: "der Platz", polish: "plac", example: "Der Marktplatz ist schön.", level: "A1" },
        { german: "das Geschäft", polish: "sklep", example: "Das Geschäft ist offen.", level: "A1" },
        { german: "der Supermarkt", polish: "supermarket", example: "Ich gehe zum Supermarkt.", level: "A1" },
        { german: "die Bank", polish: "bank", example: "Die Bank ist dort.", level: "A1" },
        { german: "die Post", polish: "poczta", example: "Ich gehe zur Post.", level: "A1" },
        { german: "das Restaurant", polish: "restauracja", example: "Das Restaurant ist gut.", level: "A1" },
        { german: "das Café", polish: "kawiarnia", example: "Wir treffen uns im Café.", level: "A1" },
        { german: "das Kino", polish: "kino", example: "Ich gehe ins Kino.", level: "A1" },
        { german: "das Theater", polish: "teatr", example: "Das Theater zeigt ein Stück.", level: "A2" },
        { german: "das Museum", polish: "muzeum", example: "Das Museum ist interessant.", level: "A1" },
        { german: "der Park", polish: "park", example: "Ich spaziere im Park.", level: "A1" }
    ],

    work: [
        { german: "die Arbeit", polish: "praca", example: "Ich gehe zur Arbeit.", level: "A1" },
        { german: "der Job", polish: "praca/posada", example: "Ich suche einen Job.", level: "A2" },
        { german: "der Kollege", polish: "kolega z pracy", example: "Mein Kollege ist nett.", level: "A2" },
        { german: "der Chef", polish: "szef", example: "Der Chef ist streng.", level: "A2" },
        { german: "das Büro", polish: "biuro", example: "Ich arbeite im Büro.", level: "A1" },
        { german: "die Besprechung", polish: "spotkanie", example: "Wir haben eine Besprechung.", level: "B1" },
        { german: "das Gehalt", polish: "wynagrodzenie", example: "Mein Gehalt ist gut.", level: "A2" },
        { german: "die Pause", polish: "przerwa", example: "Ich mache Pause.", level: "A1" },
        { german: "arbeitslos", polish: "bezrobotny", example: "Er ist arbeitslos.", level: "A2" }
    ],

    professions: [
        { german: "der Arzt", polish: "lekarz", example: "Ich bin Arzt von Beruf.", level: "A1" },
        { german: "der Lehrer", polish: "nauczyciel", example: "Sie ist Lehrerin.", level: "A1" },
        { german: "der Koch", polish: "kucharz", example: "Der Koch kocht gut.", level: "A1" },
        { german: "der Verkäufer", polish: "sprzedawca", example: "Ich arbeite als Verkäufer.", level: "A1" },
        { german: "der Ingenieur", polish: "inżynier", example: "Er ist Ingenieur.", level: "A2" },
        { german: "der Polizist", polish: "policjant", example: "Der Polizist hilft.", level: "A1" },
        { german: "der Feuerwehrmann", polish: "strażak", example: "Der Feuerwehrmann löscht Feuer.", level: "A1" },
        { german: "der Kellner", polish: "kelner", example: "Der Kellner bringt das Essen.", level: "A1" }
    ],

    sports: [
        { german: "der Sport", polish: "sport", example: "Ich mache viel Sport.", level: "A1" },
        { german: "Fußball", polish: "piłka nożna", example: "Ich spiele Fußball.", level: "A1" },
        { german: "Tennis", polish: "tenis", example: "Sie spielt Tennis.", level: "A1" },
        { german: "schwimmen", polish: "pływać", example: "Ich gehe schwimmen.", level: "A1" },
        { german: "laufen", polish: "biegać", example: "Ich laufe jeden Tag.", level: "A1" },
        { german: "Ski fahren", polish: "jeździć na nartach", example: "Im Winter fahre ich Ski.", level: "A1" }
    ],

    hobby: [
        { german: "das Hobby", polish: "hobby", example: "Mein Hobby ist Lesen.", level: "A1" },
        { german: "lesen", polish: "czytać", example: "Ich lese gern Bücher.", level: "A1" },
        { german: "malen", polish: "malować", example: "Sie malt schöne Bilder.", level: "A1" },
        { german: "singen", polish: "śpiewać", example: "Ich singe gern.", level: "A1" },
        { german: "tanzen", polish: "tańczyć", example: "Wir tanzen zusammen.", level: "A1" },
        { german: "fotografieren", polish: "fotografować", example: "Ich fotografiere die Natur.", level: "A2" }
    ],

    music: [
        { german: "die Musik", polish: "muzyka", example: "Ich höre Musik.", level: "A1" },
        { german: "das Lied", polish: "piosenka", example: "Das Lied ist schön.", level: "A1" },
        { german: "das Konzert", polish: "koncert", example: "Ich gehe zum Konzert.", level: "A1" },
        { german: "die Gitarre", polish: "gitara", example: "Ich spiele Gitarre.", level: "A1" },
        { german: "das Klavier", polish: "pianino", example: "Sie spielt Klavier.", level: "A1" }
    ],

    emotions: [
        { german: "glücklich", polish: "szczęśliwy", example: "Ich bin sehr glücklich.", level: "A1" },
        { german: "traurig", polish: "smutny", example: "Sie ist traurig.", level: "A1" },
        { german: "müde", polish: "zmęczony", example: "Ich bin müde.", level: "A1" },
        { german: "wütend", polish: "zły", example: "Er ist wütend.", level: "A1" },
        { german: "nervös", polish: "zdenerwowany", example: "Ich bin nervös.", level: "A2" },
        { german: "ängstlich", polish: "przestraszony", example: "Das Kind ist ängstlich.", level: "A2" },
        { german: "fröhlich", polish: "wesoły", example: "Sie ist sehr fröhlich.", level: "A1" }
    ],

    clothes: [
        { german: "das Hemd", polish: "koszula", example: "Ich trage ein weißes Hemd.", level: "A1" },
        { german: "die Hose", polish: "spodnie", example: "Die Hose ist blau.", level: "A1" },
        { german: "das Kleid", polish: "sukienka", example: "Sie trägt ein schönes Kleid.", level: "A1" },
        { german: "der Rock", polish: "spódnica", example: "Der Rock ist kurz.", level: "A1" },
        { german: "die Jacke", polish: "kurtka", example: "Ich brauche eine Jacke.", level: "A1" },
        { german: "der Mantel", polish: "płaszcz", example: "Im Winter trage ich einen Mantel.", level: "A1" },
        { german: "die Schuhe", polish: "buty", example: "Meine Schuhe sind neu.", level: "A1" },
        { german: "der Hut", polish: "kapelusz", example: "Der Hut ist elegant.", level: "A1" }
    ],

    body: [
        { german: "der Kopf", polish: "głowa", example: "Mein Kopf tut weh.", level: "A1" },
        { german: "das Auge", polish: "oko", example: "Ich habe blaue Augen.", level: "A1" },
        { german: "die Nase", polish: "nos", example: "Meine Nase ist rot.", level: "A1" },
        { german: "der Mund", polish: "usta", example: "Mach den Mund auf!", level: "A1" },
        { german: "das Ohr", polish: "ucho", example: "Meine Ohren sind kalt.", level: "A1" },
        { german: "die Hand", polish: "ręka", example: "Ich wasche meine Hände.", level: "A1" },
        { german: "der Fuß", polish: "stopa", example: "Mein Fuß tut weh.", level: "A1" },
        { german: "das Bein", polish: "noga", example: "Ich habe lange Beine.", level: "A1" },
        { german: "der Arm", polish: "ramię", example: "Mein Arm ist stark.", level: "A1" }
    ],

    health: [
        { german: "krank", polish: "chory", example: "Ich bin krank.", level: "A1" },
        { german: "gesund", polish: "zdrowy", example: "Ich bin wieder gesund.", level: "A1" },
        { german: "der Arzt", polish: "lekarz", example: "Ich gehe zum Arzt.", level: "A1" },
        { german: "das Krankenhaus", polish: "szpital", example: "Er ist im Krankenhaus.", level: "A1" },
        { german: "die Apotheke", polish: "apteka", example: "Ich brauche eine Apotheke.", level: "A1" },
        { german: "das Medikament", polish: "lek", example: "Ich nehme Medikamente.", level: "A2" },
        { german: "der Schmerz", polish: "ból", example: "Ich habe Schmerzen.", level: "A2" },
        { german: "das Fieber", polish: "gorączka", example: "Ich habe Fieber.", level: "A1" }
    ],

    questions: [
        { german: "Wer?", polish: "Kto?", example: "Wer bist du?", level: "A1" },
        { german: "Was?", polish: "Co?", example: "Was machst du?", level: "A1" },
        { german: "Wo?", polish: "Gdzie?", example: "Wo wohnst du?", level: "A1" },
        { german: "Wann?", polish: "Kiedy?", example: "Wann kommst du?", level: "A1" },
        { german: "Warum?", polish: "Dlaczego?", example: "Warum lernst du Deutsch?", level: "A1" },
        { german: "Wie?", polish: "Jak?", example: "Wie geht's?", level: "A1" },
        { german: "Wie viel?", polish: "Ile?", example: "Wie viel kostet das?", level: "A1" },
        { german: "Wohin?", polish: "Dokąd?", example: "Wohin gehst du?", level: "A1" },
        { german: "Woher?", polish: "Skąd?", example: "Woher kommst du?", level: "A1" }
    ],

    nature: [
        { german: "der Baum", polish: "drzewo", example: "Der Baum ist groß.", level: "A1" },
        { german: "die Blume", polish: "kwiat", example: "Die Blume ist schön.", level: "A1" },
        { german: "das Gras", polish: "trawa", example: "Das Gras ist grün.", level: "A1" },
        { german: "der Berg", polish: "góra", example: "Der Berg ist hoch.", level: "A1" },
        { german: "der See", polish: "jezioro", example: "Der See ist tief.", level: "A1" },
        { german: "der Fluss", polish: "rzeka", example: "Der Fluss ist lang.", level: "A1" },
        { german: "das Meer", polish: "morze", example: "Ich liebe das Meer.", level: "A1" },
        { german: "der Wald", polish: "las", example: "Wir gehen in den Wald.", level: "A1" }
    ],

    travel: [
        { german: "die Reise", polish: "podróż", example: "Gute Reise!", level: "A1" },
        { german: "der Urlaub", polish: "urlop/wakacje", example: "Ich bin im Urlaub.", level: "A1" },
        { german: "das Hotel", polish: "hotel", example: "Wir wohnen im Hotel.", level: "A1" },
        { german: "das Ticket", polish: "bilet", example: "Ich brauche ein Ticket.", level: "A1" },
        { german: "der Koffer", polish: "walizka", example: "Mein Koffer ist schwer.", level: "A1" },
        { german: "der Pass", polish: "paszport", example: "Wo ist mein Pass?", level: "A1" },
        { german: "der Flughafen", polish: "lotnisko", example: "Ich bin am Flughafen.", level: "A1" }
    ],

    shopping: [
        { german: "kaufen", polish: "kupować", example: "Ich kaufe Brot.", level: "A1" },
        { german: "verkaufen", polish: "sprzedawać", example: "Er verkauft Autos.", level: "A1" },
        { german: "der Preis", polish: "cena", example: "Der Preis ist hoch.", level: "A1" },
        { german: "teuer", polish: "drogi", example: "Das ist zu teuer.", level: "A1" },
        { german: "billig", polish: "tani", example: "Das ist billig.", level: "A1" },
        { german: "das Geld", polish: "pieniądze", example: "Ich habe kein Geld.", level: "A1" },
        { german: "bezahlen", polish: "płacić", example: "Ich möchte bezahlen.", level: "A1" },
        { german: "die Kasse", polish: "kasa", example: "Wo ist die Kasse?", level: "A1" }
    ],

    restaurant: [
        { german: "die Speisekarte", polish: "menu", example: "Die Speisekarte, bitte!", level: "A1" },
        { german: "bestellen", polish: "zamawiać", example: "Ich möchte bestellen.", level: "A1" },
        { german: "der Kellner", polish: "kelner", example: "Herr Ober!", level: "A1" },
        { german: "die Rechnung", polish: "rachunek", example: "Die Rechnung, bitte!", level: "A1" },
        { german: "das Trinkgeld", polish: "napiwek", example: "Hier ist das Trinkgeld.", level: "A2" },
        { german: "lecker", polish: "smaczny", example: "Das Essen ist lecker!", level: "A1" }
    ],

    prepositions: [
        { german: "in", polish: "w", example: "Ich bin in Berlin.", level: "A1" },
        { german: "auf", polish: "na", example: "Das Buch ist auf dem Tisch.", level: "A1" },
        { german: "unter", polish: "pod", example: "Die Katze ist unter dem Bett.", level: "A1" },
        { german: "über", polish: "nad", example: "Die Lampe hängt über dem Tisch.", level: "A2" },
        { german: "vor", polish: "przed", example: "Ich stehe vor der Tür.", level: "A1" },
        { german: "hinter", polish: "za", example: "Er steht hinter mir.", level: "A1" },
        { german: "neben", polish: "obok", example: "Ich sitze neben dir.", level: "A1" },
        { german: "zwischen", polish: "między", example: "Zwischen uns ist nichts.", level: "A2" }
    ],

    conjunctions: [
        { german: "und", polish: "i", example: "Ich und du.", level: "A1" },
        { german: "oder", polish: "lub", example: "Tee oder Kaffee?", level: "A1" },
        { german: "aber", polish: "ale", example: "Ich will, aber ich kann nicht.", level: "A1" },
        { german: "weil", polish: "ponieważ", example: "Ich lerne, weil ich muss.", level: "A2" },
        { german: "dass", polish: "że", example: "Ich denke, dass du recht hast.", level: "A2" },
        { german: "wenn", polish: "gdy/jeśli", example: "Wenn ich Zeit habe, komme ich.", level: "A2" },
        { german: "als", polish: "kiedy (przeszłość)", example: "Als ich klein war...", level: "B1" }
    ],

    character: [
        { german: "nett", polish: "miły", example: "Sie ist sehr nett.", level: "A1" },
        { german: "freundlich", polish: "przyjazny", example: "Er ist freundlich.", level: "A1" },
        { german: "lustig", polish: "zabawny", example: "Du bist lustig!", level: "A1" },
        { german: "langweilig", polish: "nudny", example: "Der Film ist langweilig.", level: "A1" },
        { german: "fleißig", polish: "pracowity", example: "Er ist sehr fleißig.", level: "A2" },
        { german: "faul", polish: "leniwy", example: "Ich bin heute faul.", level: "A1" },
        { german: "intelligent", polish: "inteligentny", example: "Sie ist intelligent.", level: "A2" },
        { german: "dumm", polish: "głupi", example: "Das war dumm.", level: "A1" }
    ],

    opinions: [
        { german: "Ich denke", polish: "Myślę", example: "Ich denke, das ist gut.", level: "A2" },
        { german: "Ich glaube", polish: "Wierzę/Sądzę", example: "Ich glaube, du hast recht.", level: "A2" },
        { german: "Meiner Meinung nach", polish: "Moim zdaniem", example: "Meiner Meinung nach ist das falsch.", level: "B1" },
        { german: "Ich bin der Meinung", polish: "Jestem zdania", example: "Ich bin der Meinung, dass...", level: "B1" },
        { german: "stimmt", polish: "zgadza się", example: "Das stimmt!", level: "A2" },
        { german: "stimmt nicht", polish: "nie zgadza się", example: "Das stimmt nicht.", level: "A2" }
    ],

    business: [
        { german: "die Firma", polish: "firma", example: "Ich arbeite in einer Firma.", level: "A2" },
        { german: "das Unternehmen", polish: "przedsiębiorstwo", example: "Das Unternehmen ist groß.", level: "B1" },
        { german: "der Vertrag", polish: "umowa", example: "Wir haben einen Vertrag.", level: "B1" },
        { german: "die Rechnung", polish: "faktura", example: "Bitte senden Sie die Rechnung.", level: "B1" },
        { german: "der Kunde", polish: "klient", example: "Der Kunde hat recht.", level: "A2" }
    ],

    office: [
        { german: "der Computer", polish: "komputer", example: "Ich arbeite am Computer.", level: "A1" },
        { german: "das Telefon", polish: "telefon", example: "Das Telefon klingelt.", level: "A1" },
        { german: "der Drucker", polish: "drukarka", example: "Der Drucker ist kaputt.", level: "A2" },
        { german: "die E-Mail", polish: "e-mail", example: "Ich schicke eine E-Mail.", level: "A1" },
        { german: "die Tastatur", polish: "klawiatura", example: "Die Tastatur ist neu.", level: "A2" },
        { german: "die Maus", polish: "myszka", example: "Wo ist die Maus?", level: "A2" },
        { german: "der Bildschirm", polish: "ekran", example: "Der Bildschirm ist groß.", level: "A2" }
    ],

    culture: [
        { german: "die Kunst", polish: "sztuka", example: "Ich interessiere mich für Kunst.", level: "A2" },
        { german: "das Gemälde", polish: "obraz", example: "Das Gemälde ist schön.", level: "A2" },
        { german: "die Ausstellung", polish: "wystawa", example: "Die Ausstellung ist interessant.", level: "B1" },
        { german: "der Film", polish: "film", example: "Ich sehe einen Film.", level: "A1" },
        { german: "der Schauspieler", polish: "aktor", example: "Er ist ein guter Schauspieler.", level: "A2" }
    ],

    adverbs: [
        { german: "sehr", polish: "bardzo", example: "Das ist sehr gut!", level: "A1" },
        { german: "ganz", polish: "całkiem", example: "Das ist ganz einfach.", level: "A2" },
        { german: "ziemlich", polish: "dosyć", example: "Es ist ziemlich kalt.", level: "A2" },
        { german: "fast", polish: "prawie", example: "Ich bin fast fertig.", level: "A2" },
        { german: "wirklich", polish: "naprawdę", example: "Das ist wirklich schön!", level: "A2" },
        { german: "oft", polish: "często", example: "Ich fahre oft nach Berlin.", level: "A1" },
        { german: "manchmal", polish: "czasami", example: "Manchmal gehe ich spazieren.", level: "A1" },
        { german: "immer", polish: "zawsze", example: "Ich bin immer pünktlich.", level: "A1" },
        { german: "nie", polish: "nigdy", example: "Ich bin nie zu spät.", level: "A1" }
    ],

    hotel: [
        { german: "das Hotel", polish: "hotel", example: "Wir wohnen im Hotel.", level: "A1" },
        { german: "das Zimmer", polish: "pokój", example: "Ich möchte ein Zimmer reservieren.", level: "A1" },
        { german: "die Rezeption", polish: "recepcja", example: "Die Rezeption ist dort.", level: "A2" },
        { german: "der Schlüssel", polish: "klucz", example: "Hier ist Ihr Schlüssel.", level: "A1" },
        { german: "die Reservierung", polish: "rezerwacja", example: "Ich habe eine Reservierung.", level: "A2" }
    ],

    bank: [
        { german: "die Bank", polish: "bank", example: "Ich gehe zur Bank.", level: "A1" },
        { german: "das Geld", polish: "pieniądze", example: "Ich brauche Geld.", level: "A1" },
        { german: "das Konto", polish: "konto", example: "Ich habe ein Konto.", level: "A2" },
        { german: "die Karte", polish: "karta", example: "Kann ich mit Karte zahlen?", level: "A1" },
        { german: "der Geldautomat", polish: "bankomat", example: "Wo ist ein Geldautomat?", level: "A2" }
    ],

    emergency: [
        { german: "Hilfe!", polish: "Pomocy!", example: "Hilfe! Rufen Sie die Polizei!", level: "A1" },
        { german: "der Notfall", polish: "nagły wypadek", example: "Das ist ein Notfall!", level: "A2" },
        { german: "die Polizei", polish: "policja", example: "Rufen Sie die Polizei!", level: "A1" },
        { german: "der Krankenwagen", polish: "karetka", example: "Wir brauchen einen Krankenwagen!", level: "A2" },
        { german: "verletzt", polish: "ranny", example: "Ich bin verletzt.", level: "A2" }
    ],

    formal: [
        { german: "Sehr geehrte Damen und Herren", polish: "Szanowni Państwo", example: "Sehr geehrte Damen und Herren...", level: "B1" },
        { german: "Mit freundlichen Grüßen", polish: "Z poważaniem", example: "Mit freundlichen Grüßen, Max Müller", level: "B1" },
        { german: "Entschuldigen Sie bitte", polish: "Proszę mi wybaczyć", example: "Entschuldigen Sie bitte die Verspätung.", level: "A2" },
        { german: "Es tut mir leid", polish: "Bardzo mi przykro", example: "Es tut mir sehr leid.", level: "A2" }
    ],
    // 🍳 GOTOWANIE (A1/A2)
    cooking: [
        { german: "kochen", polish: "gotować", example: "Ich koche gern.", level: "A1" },
        { german: "backen", polish: "piec", example: "Ich backe einen Kuchen.", level: "A1" },
        { german: "braten", polish: "smażyć", example: "Ich brate das Fleisch.", level: "A2" },
        { german: "schneiden", polish: "kroić", example: "Ich schneide das Gemüse.", level: "A1" },
        { german: "mischen", polish: "mieszać", example: "Bitte mischen Sie alles.", level: "A2" },
        { german: "der Topf", polish: "garnek", example: "Der Topf ist heiß.", level: "A1" },
        { german: "die Pfanne", polish: "patelnia", example: "Die Pfanne ist auf dem Herd.", level: "A1" },
        { german: "das Messer", polish: "nóż", example: "Das Messer ist scharf.", level: "A1" },
        { german: "die Gabel", polish: "widelec", example: "Wo ist die Gabel?", level: "A1" },
        { german: "der Löffel", polish: "łyżka", example: "Ich brauche einen Löffel.", level: "A1" },
        { german: "der Teller", polish: "talerz", example: "Der Teller ist sauber.", level: "A1" },
        { german: "die Tasse", polish: "filiżanka", example: "Eine Tasse Kaffee.", level: "A1" },
        { german: "das Glas", polish: "szklanka", example: "Ein Glas Wasser.", level: "A1" },
        { german: "der Kühlschrank", polish: "lodówka", example: "Die Milch ist im Kühlschrank.", level: "A1" },
        { german: "der Ofen", polish: "piekarnik", example: "Der Kuchen ist im Ofen.", level: "A1" },
        { german: "das Rezept", polish: "przepis", example: "Ich brauche ein Rezept.", level: "A2" }
    ],

    // 💻 TECHNOLOGIA (A2/B1)
    technology: [
        { german: "der Computer", polish: "komputer", example: "Mein Computer ist neu.", level: "A1" },
        { german: "das Handy", polish: "telefon komórkowy", example: "Mein Handy klingelt.", level: "A1" },
        { german: "das Smartphone", polish: "smartfon", example: "Ich habe ein neues Smartphone.", level: "A1" },
        { german: "das Tablet", polish: "tablet", example: "Ich lese auf dem Tablet.", level: "A1" },
        { german: "der Laptop", polish: "laptop", example: "Ich arbeite am Laptop.", level: "A1" },
        { german: "das Internet", polish: "internet", example: "Ich surfe im Internet.", level: "A1" },
        { german: "die App", polish: "aplikacja", example: "Ich lade eine App herunter.", level: "A2" },
        { german: "die Software", polish: "oprogramowanie", example: "Die Software ist aktuell.", level: "B1" },
        { german: "das Passwort", polish: "hasło", example: "Ich habe mein Passwort vergessen.", level: "A2" },
        { german: "herunterladen", polish: "pobierać", example: "Ich lade die Datei herunter.", level: "A2" },
        { german: "hochladen", polish: "przesyłać", example: "Ich lade ein Foto hoch.", level: "A2" },
        { german: "speichern", polish: "zapisywać", example: "Bitte speichern Sie die Datei.", level: "A2" },
        { german: "löschen", polish: "usuwać", example: "Ich lösche die E-Mail.", level: "A2" },
        { german: "das WLAN", polish: "WiFi", example: "Gibt es hier WLAN?", level: "A1" },
        { german: "online", polish: "online", example: "Ich bin online.", level: "A1" },
        { german: "offline", polish: "offline", example: "Ich bin offline.", level: "A1" }
    ],

    // 🌐 INTERNET I MEDIA (A2/B1)
    internet: [
        { german: "die Website", polish: "strona internetowa", example: "Die Website ist interessant.", level: "A2" },
        { german: "der Blog", polish: "blog", example: "Ich lese einen Blog.", level: "A2" },
        { german: "das Video", polish: "wideo", example: "Ich sehe ein Video.", level: "A1" },
        { german: "das Foto", polish: "zdjęcie", example: "Ich mache ein Foto.", level: "A1" },
        { german: "posten", polish: "wrzucać/postować", example: "Ich poste ein Foto.", level: "A2" },
        { german: "teilen", polish: "udostępniać", example: "Ich teile den Link.", level: "A2" },
        { german: "liken", polish: "polubić", example: "Ich like das Foto.", level: "A1" },
        { german: "kommentieren", polish: "komentować", example: "Ich kommentiere den Post.", level: "A2" },
        { german: "folgen", polish: "śledzić/obserwować", example: "Ich folge dir.", level: "A2" },
        { german: "der Link", polish: "link", example: "Schick mir den Link!", level: "A2" },
        { german: "die Nachricht", polish: "wiadomość", example: "Ich schreibe eine Nachricht.", level: "A1" },
        { german: "chatten", polish: "czatować", example: "Wir chatten online.", level: "A1" },
        { german: "googeln", polish: "googlować", example: "Ich google das.", level: "A1" },
        { german: "streamen", polish: "streamować", example: "Ich streame einen Film.", level: "A2" }
    ],

    // 🧭 KIERUNKI I LOKALIZACJA (A1/A2)
    directions: [
        { german: "links", polish: "w lewo", example: "Gehen Sie nach links.", level: "A1" },
        { german: "rechts", polish: "w prawo", example: "Biegen Sie rechts ab.", level: "A1" },
        { german: "geradeaus", polish: "prosto", example: "Gehen Sie geradeaus.", level: "A1" },
        { german: "zurück", polish: "z powrotem", example: "Ich gehe zurück.", level: "A1" },
        { german: "hier", polish: "tutaj", example: "Ich bin hier.", level: "A1" },
        { german: "dort", polish: "tam", example: "Das Restaurant ist dort.", level: "A1" },
        { german: "oben", polish: "na górze", example: "Ich wohne oben.", level: "A1" },
        { german: "unten", polish: "na dole", example: "Der Laden ist unten.", level: "A1" },
        { german: "nah", polish: "blisko", example: "Die Bank ist nah.", level: "A1" },
        { german: "weit", polish: "daleko", example: "Der Bahnhof ist weit.", level: "A1" },
        { german: "der Norden", polish: "północ", example: "Im Norden von Deutschland.", level: "A2" },
        { german: "der Süden", polish: "południe", example: "Im Süden ist es warm.", level: "A2" },
        { german: "der Osten", polish: "wschód", example: "Berlin liegt im Osten.", level: "A2" },
        { german: "der Westen", polish: "zachód", example: "Im Westen gibt es Berge.", level: "A2" }
    ],

    // 👤 OPIS LUDZI (A2/B1)
    appearance: [
        { german: "aussehen", polish: "wyglądać", example: "Du siehst gut aus!", level: "A2" },
        { german: "hübsch", polish: "ładny", example: "Sie ist hübsch.", level: "A2" },
        { german: "attraktiv", polish: "atrakcyjny", example: "Er ist sehr attraktiv.", level: "A2" },
        { german: "groß", polish: "wysoki", example: "Ich bin 180 cm groß.", level: "A1" },
        { german: "klein", polish: "niski/mały", example: "Mein Bruder ist klein.", level: "A1" },
        { german: "schlank", polish: "szczupły", example: "Sie ist sehr schlank.", level: "A2" },
        { german: "dick", polish: "gruby", example: "Die Katze ist dick.", level: "A1" },
        { german: "dünn", polish: "chudy", example: "Er ist zu dünn.", level: "A2" },
        { german: "die Haare", polish: "włosy", example: "Ich habe braune Haare.", level: "A1" },
        { german: "blond", polish: "blond", example: "Sie hat blonde Haare.", level: "A1" },
        { german: "dunkel", polish: "ciemny", example: "Er hat dunkle Haare.", level: "A1" },
        { german: "kurz", polish: "krótki", example: "Meine Haare sind kurz.", level: "A1" },
        { german: "lang", polish: "długi", example: "Sie hat lange Haare.", level: "A1" },
        { german: "der Bart", polish: "broda", example: "Er hat einen Bart.", level: "A2" },
        { german: "die Brille", polish: "okulary", example: "Ich trage eine Brille.", level: "A1" }
    ],

    // ❤️ UCZUCIA I RELACJE (A2/B1)
    relationships: [
        { german: "lieben", polish: "kochać", example: "Ich liebe dich.", level: "A1" },
        { german: "mögen", polish: "lubić", example: "Ich mag dich sehr.", level: "A1" },
        { german: "hassen", polish: "nienawidzić", example: "Ich hasse Montage.", level: "A2" },
        { german: "der Freund", polish: "przyjaciel/chłopak", example: "Das ist mein Freund.", level: "A1" },
        { german: "die Freundin", polish: "przyjaciółka/dziewczyna", example: "Sie ist meine Freundin.", level: "A1" },
        { german: "der Partner", polish: "partner", example: "Mein Partner ist nett.", level: "A2" },
        { german: "verheiratet", polish: "żonaty/zamężna", example: "Ich bin verheiratet.", level: "A2" },
        { german: "ledig", polish: "wolny/samotny", example: "Er ist noch ledig.", level: "A2" },
        { german: "geschieden", polish: "rozwiedziony", example: "Sie ist geschieden.", level: "B1" },
        { german: "verlobt", polish: "zaręczony", example: "Wir sind verlobt!", level: "A2" },
        { german: "die Hochzeit", polish: "ślub", example: "Die Hochzeit ist im Juni.", level: "A2" },
        { german: "heiraten", polish: "brać ślub", example: "Wir heiraten nächstes Jahr.", level: "A2" },
        { german: "küssen", polish: "całować", example: "Er küsst sie.", level: "A2" },
        { german: "umarmen", polish: "przytulać", example: "Ich umarme dich.", level: "A2" },
        { german: "streiten", polish: "kłócić się", example: "Wir streiten manchmal.", level: "A2" },
        { german: "sich trennen", polish: "rozstawać się", example: "Sie haben sich getrennt.", level: "B1" }
    ],

    // 🕐 CZAS - GODZINY (A1/A2)
    clock: [
        { german: "Wie spät ist es?", polish: "Która godzina?", example: "Wie spät ist es?", level: "A1" },
        { german: "Es ist ein Uhr", polish: "Jest pierwsza", example: "Es ist ein Uhr.", level: "A1" },
        { german: "Es ist zwei Uhr", polish: "Jest druga", example: "Es ist zwei Uhr.", level: "A1" },
        { german: "halb drei", polish: "wpół do trzeciej", example: "Es ist halb drei.", level: "A1" },
        { german: "Viertel nach", polish: "kwadrans po", example: "Viertel nach zwei.", level: "A1" },
        { german: "Viertel vor", polish: "za kwadrans", example: "Viertel vor drei.", level: "A1" },
        { german: "der Morgen", polish: "ranek", example: "Am Morgen trinke ich Kaffee.", level: "A1" },
        { german: "der Mittag", polish: "południe", example: "Zu Mittag esse ich.", level: "A1" },
        { german: "der Nachmittag", polish: "popołudnie", example: "Am Nachmittag arbeite ich.", level: "A1" },
        { german: "der Abend", polish: "wieczór", example: "Am Abend sehe ich fern.", level: "A1" },
        { german: "die Nacht", polish: "noc", example: "In der Nacht schlafe ich.", level: "A1" },
        { german: "Mitternacht", polish: "północ", example: "Um Mitternacht schlafe ich.", level: "A1" },
        { german: "pünktlich", polish: "punktualnie", example: "Ich bin immer pünktlich.", level: "A2" },
        { german: "zu spät", polish: "za późno", example: "Ich bin zu spät.", level: "A1" },
        { german: "zu früh", polish: "za wcześnie", example: "Wir sind zu früh.", level: "A1" }
    ],

    // 📦 MATERIAŁY I RZECZY (A2/B1)
    materials: [
        { german: "das Holz", polish: "drewno", example: "Der Tisch ist aus Holz.", level: "A2" },
        { german: "das Metall", polish: "metal", example: "Das ist aus Metall.", level: "A2" },
        { german: "das Glas", polish: "szkło", example: "Die Flasche ist aus Glas.", level: "A2" },
        { german: "das Plastik", polish: "plastik", example: "Die Tüte ist aus Plastik.", level: "A2" },
        { german: "das Papier", polish: "papier", example: "Ich brauche Papier.", level: "A1" },
        { german: "der Stoff", polish: "tkanina/materiał", example: "Der Stoff ist weich.", level: "A2" },
        { german: "das Leder", polish: "skóra", example: "Die Schuhe sind aus Leder.", level: "A2" },
        { german: "die Wolle", polish: "wełna", example: "Der Pullover ist aus Wolle.", level: "A2" },
        { german: "der Stein", polish: "kamień", example: "Das Haus ist aus Stein.", level: "A2" },
        { german: "hart", polish: "twardy", example: "Der Stein ist hart.", level: "A2" },
        { german: "weich", polish: "miękki", example: "Das Kissen ist weich.", level: "A2" },
        { german: "schwer", polish: "ciężki", example: "Der Koffer ist schwer.", level: "A1" },
        { german: "leicht", polish: "lekki", example: "Die Tasche ist leicht.", level: "A1" }
    ],

    // 🌱 ROŚLINY (A2)
    plants: [
        { german: "die Pflanze", polish: "roślina", example: "Die Pflanze braucht Wasser.", level: "A2" },
        { german: "die Blume", polish: "kwiat", example: "Die Blume ist schön.", level: "A1" },
        { german: "die Rose", polish: "róża", example: "Rote Rosen für dich.", level: "A1" },
        { german: "die Tulpe", polish: "tulipan", example: "Tulpen sind gelb.", level: "A2" },
        { german: "der Baum", polish: "drzewo", example: "Der Baum ist hoch.", level: "A1" },
        { german: "der Busch", polish: "krzak", example: "Der Busch ist grün.", level: "A2" },
        { german: "das Blatt", polish: "liść", example: "Die Blätter sind rot.", level: "A2" },
        { german: "die Wurzel", polish: "korzeń", example: "Die Wurzel ist stark.", level: "B1" },
        { german: "gießen", polish: "podlewać", example: "Ich gieße die Blumen.", level: "A2" },
        { german: "wachsen", polish: "rosnąć", example: "Die Pflanze wächst.", level: "A2" }
    ],

    // 🎸 INSTRUMENTY (A2)
    instruments: [
        { german: "das Instrument", polish: "instrument", example: "Ich spiele ein Instrument.", level: "A2" },
        { german: "die Gitarre", polish: "gitara", example: "Ich spiele Gitarre.", level: "A1" },
        { german: "das Klavier", polish: "pianino", example: "Sie spielt Klavier.", level: "A1" },
        { german: "die Geige", polish: "skrzypce", example: "Er spielt Geige.", level: "A2" },
        { german: "das Schlagzeug", polish: "perkusja", example: "Ich spiele Schlagzeug.", level: "A2" },
        { german: "die Flöte", polish: "flet", example: "Die Flöte klingt schön.", level: "A2" },
        { german: "die Trompete", polish: "trąbka", example: "Er spielt Trompete.", level: "A2" }
    ],

    // 🏃 CZYNNOŚCI CODZIENNE (A1/A2)
    daily: [
        { german: "aufstehen", polish: "wstawać", example: "Ich stehe um 7 Uhr auf.", level: "A1" },
        { german: "aufwachen", polish: "budzić się", example: "Ich wache früh auf.", level: "A2" },
        { german: "duschen", polish: "brać prysznic", example: "Ich dusche jeden Tag.", level: "A1" },
        { german: "sich waschen", polish: "myć się", example: "Ich wasche mich.", level: "A1" },
        { german: "sich anziehen", polish: "ubierać się", example: "Ich ziehe mich an.", level: "A1" },
        { german: "sich ausziehen", polish: "rozbierać się", example: "Ich ziehe mich aus.", level: "A2" },
        { german: "frühstücken", polish: "jeść śniadanie", example: "Ich frühstücke um 8 Uhr.", level: "A1" },
        { german: "zu Mittag essen", polish: "jeść obiad", example: "Ich esse zu Mittag.", level: "A1" },
        { german: "zu Abend essen", polish: "jeść kolację", example: "Wir essen zu Abend.", level: "A1" },
        { german: "putzen", polish: "sprzątać", example: "Ich putze das Zimmer.", level: "A1" },
        { german: "aufräumen", polish: "sprzątać/porządkować", example: "Ich räume auf.", level: "A1" },
        { german: "waschen", polish: "prać", example: "Ich wasche die Wäsche.", level: "A1" },
        { german: "bügeln", polish: "prasować", example: "Ich bügle die Hemden.", level: "A2" },
        { german: "ins Bett gehen", polish: "iść spać", example: "Ich gehe ins Bett.", level: "A1" },
        { german: "einschlafen", polish: "zasypiać", example: "Ich schlafe schnell ein.", level: "A2" }
    ],

    // 🌍 WIĘCEJ KRAJÓW (A1/A2)
    countries: [
        { german: "Deutschland", polish: "Niemcy", example: "Ich komme aus Deutschland.", level: "A1" },
        { german: "Polen", polish: "Polska", example: "Ich wohne in Polen.", level: "A1" },
        { german: "Österreich", polish: "Austria", example: "Wien liegt in Österreich.", level: "A1" },
        { german: "die Schweiz", polish: "Szwajcaria", example: "Die Schweiz ist schön.", level: "A1" },
        { german: "Frankreich", polish: "Francja", example: "Paris ist in Frankreich.", level: "A1" },
        { german: "Italien", polish: "Włochy", example: "Ich liebe Italien!", level: "A1" },
        { german: "Spanien", polish: "Hiszpania", example: "In Spanien ist es warm.", level: "A1" },
        { german: "England", polish: "Anglia", example: "London liegt in England.", level: "A1" },
        { german: "die USA", polish: "USA", example: "New York ist in den USA.", level: "A1" },
        { german: "Russland", polish: "Rosja", example: "Moskau ist in Russland.", level: "A1" },
        { german: "China", polish: "Chiny", example: "Peking ist in China.", level: "A1" },
        { german: "Japan", polish: "Japonia", example: "Tokyo ist in Japan.", level: "A1" }
    ],
};

// Osiągnięcia
const achievements = [
    { id: 'first_word', name: 'Pierwsze słowo', desc: 'Naucz się pierwszego słowa', icon: '🌱', xp: 10, requirement: 1 },
    { id: 'ten_words', name: 'Dziesięć słówek', desc: 'Naucz się 10 słówek', icon: '📚', xp: 50, requirement: 10 },
    { id: 'fifty_words', name: 'Pięćdziesiąt słówek', desc: 'Naucz się 50 słówek', icon: '🎓', xp: 100, requirement: 50 },
    { id: 'hundred_words', name: 'Sto słówek', desc: 'Naucz się 100 słówek', icon: '🏆', xp: 200, requirement: 100 },
    { id: 'first_quiz', name: 'Pierwszy quiz', desc: 'Ukończ pierwszy quiz', icon: '📝', xp: 20, requirement: 1 },
    { id: 'ten_quizzes', name: 'Dziesięć quizów', desc: 'Ukończ 10 quizów', icon: '✅', xp: 100, requirement: 10 },
    { id: 'perfect_quiz', name: 'Perfekcyjny quiz', desc: 'Uzyskaj 100% w quizie', icon: '⭐', xp: 50, requirement: 1 },
    { id: 'week_streak', name: 'Tydzień z rzędu', desc: 'Ucz się 7 dni z rzędu', icon: '🔥', xp: 150, requirement: 7 },
    { id: 'month_streak', name: 'Miesiąc z rzędu', desc: 'Ucz się 30 dni z rzędu', icon: '💪', xp: 500, requirement: 30 },
    { id: 'first_memory', name: 'Pierwsza gra Memory', desc: 'Zagraj w Memory', icon: '🎮', xp: 30, requirement: 1 },
    { id: 'memory_master', name: 'Mistrz Memory', desc: 'Zagraj 10 razy w Memory', icon: '🎯', xp: 200, requirement: 10 },
    { id: 'custom_words', name: 'Własne słówka', desc: 'Dodaj 5 własnych słówek', icon: '⭐', xp: 50, requirement: 5 }
];

// Dane gramatyczne
const grammarData = {
    articles: {
        title: 'Rodzajniki: der, die, das',
        content: `
            <h3>Rodzajniki w języku niemieckim</h3>
            <p>W niemieckim są trzy rodzaje:</p>
            <ul>
                <li><strong>der</strong> - rodzaj męski (Maskulinum)</li>
                <li><strong>die</strong> - rodzaj żeński (Femininum)</li>
                <li><strong>das</strong> - rodzaj nijaki (Neutrum)</li>
            </ul>
            
            <h4>Przykłady:</h4>
            <ul>
                <li><strong>der</strong> Mann (mężczyzna), <strong>der</strong> Tisch (stół)</li>
                <li><strong>die</strong> Frau (kobieta), <strong>die</strong> Lampe (lampa)</li>
                <li><strong>das</strong> Kind (dziecko), <strong>das</strong> Buch (książka)</li>
            </ul>
        `,
        exercises: [
            { question: '____ Mann', answer: 'der', options: ['der', 'die', 'das'] },
            { question: '____ Frau', answer: 'die', options: ['der', 'die', 'das'] },
            { question: '____ Kind', answer: 'das', options: ['der', 'die', 'das'] }
        ]
    },
    
    verbs: {
        title: 'Czasowniki - odmiana',
        content: `
            <h3>Odmiana czasowników regularnych</h3>
            <p>Przykład: <strong>lernen</strong> (uczyć się)</p>
            <ul>
                <li>ich lern<strong>e</strong></li>
                <li>du lern<strong>st</strong></li>
                <li>er/sie/es lern<strong>t</strong></li>
                <li>wir lern<strong>en</strong></li>
                <li>ihr lern<strong>t</strong></li>
                <li>sie/Sie lern<strong>en</strong></li>
            </ul>
        `,
        exercises: [
            { question: 'ich _____ (machen)', answer: 'mache', options: ['mache', 'machst', 'macht'] },
            { question: 'du _____ (spielen)', answer: 'spielst', options: ['spiele', 'spielst', 'spielt'] }
        ]
    },
    
    cases: {
        title: 'Przypadki',
        content: `
            <h3>Cztery przypadki w niemieckim</h3>
            <ol>
                <li><strong>Nominativ</strong> (mianownik) - Kto? Co?</li>
                <li><strong>Akkusativ</strong> (biernik) - Kogo? Co?</li>
                <li><strong>Dativ</strong> (celownik) - Komu? Czemu?</li>
                <li><strong>Genitiv</strong> (dopełniacz) - Czyj? Czego?</li>
            </ol>
        `,
        exercises: [
            { question: 'Ich sehe ___ Mann', answer: 'den', options: ['der', 'den', 'dem'] }
        ]
    },
    
    perfect: {
        title: 'Perfekt - czas przeszły',
        content: `
            <h3>Perfekt (czas przeszły)</h3>
            <p>Formuła: <strong>haben/sein + Partizip II</strong></p>
            <ul>
                <li>Ich <strong>habe</strong> gelernt</li>
                <li>Du <strong>bist</strong> gegangen</li>
            </ul>
        `,
        exercises: [
            { question: 'Ich _____ gelernt', answer: 'habe', options: ['habe', 'bin', 'hat'] }
        ]
    },
    
    modal: {
        title: 'Czasowniki modalne',
        content: `
            <h3>Modalverben</h3>
            <ul>
                <li><strong>können</strong> - móc, umieć</li>
                <li><strong>müssen</strong> - musieć</li>
                <li><strong>wollen</strong> - chcieć</li>
            </ul>
        `,
        exercises: [
            { question: 'Ich _____ schwimmen', answer: 'kann', options: ['kann', 'kannst', 'können'] }
        ]
    },
    
    praeteritum: {
        title: 'Präteritum',
        content: `
            <h3>Präteritum - czas przeszły prosty</h3>
            <ul>
                <li><strong>sein:</strong> ich war, du warst</li>
                <li><strong>haben:</strong> ich hatte, du hattest</li>
            </ul>
        `,
        exercises: [
            { question: 'Ich _____ (sein)', answer: 'war', options: ['war', 'waren', 'warst'] }
        ]
    }
};

// Alias dla kompatybilności z app.js
const wordDatabase = germanWords;

// Eksport dla użycia w app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = germanWords;
}