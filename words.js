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

    // 💻 TECHNOLOGIA (A2-B1)
    technology: [
        { german: "der Computer", polish: "komputer", example: "Mein Computer ist neu.", level: "A1" },
        { german: "das Handy", polish: "telefon komórkowy", example: "Ich habe mein Handy vergessen.", level: "A1" },
        { german: "das Smartphone", polish: "smartfon", example: "Das Smartphone ist sehr praktisch.", level: "A1" },
        { german: "das Tablet", polish: "tablet", example: "Ich lese auf dem Tablet.", level: "A1" },
        { german: "der Laptop", polish: "laptop", example: "Ich arbeite am Laptop.", level: "A1" },
        { german: "der Bildschirm", polish: "ekran", example: "Der Bildschirm ist groß.", level: "A2" },
        { german: "die Tastatur", polish: "klawiatura", example: "Die Tastatur ist kaputt.", level: "A2" },
        { german: "die Maus", polish: "myszka", example: "Wo ist die Maus?", level: "A1" },
        { german: "der Drucker", polish: "drukarka", example: "Der Drucker druckt nicht.", level: "A2" },
        { german: "das Internet", polish: "internet", example: "Das Internet ist langsam.", level: "A1" },
        { german: "das WLAN", polish: "Wi-Fi", example: "Haben Sie WLAN?", level: "A1" },
        { german: "das Passwort", polish: "hasło", example: "Ich habe mein Passwort vergessen.", level: "A2" },
        { german: "die E-Mail", polish: "e-mail", example: "Ich schreibe eine E-Mail.", level: "A1" },
        { german: "die Webseite", polish: "strona internetowa", example: "Die Webseite ist interessant.", level: "A2" },
        { german: "herunterladen", polish: "pobierać", example: "Ich lade eine App herunter.", level: "A2" },
        { german: "hochladen", polish: "przesyłać", example: "Ich lade ein Foto hoch.", level: "A2" },
        { german: "speichern", polish: "zapisywać", example: "Vergiss nicht zu speichern!", level: "A2" },
        { german: "löschen", polish: "usuwać", example: "Ich lösche die Datei.", level: "A2" },
        { german: "die Datei", polish: "plik", example: "Die Datei ist zu groß.", level: "A2" },
        { german: "der Ordner", polish: "folder", example: "Der Ordner ist leer.", level: "A2" },
        { german: "klicken", polish: "klikać", example: "Klick auf den Link!", level: "A1" },
        { german: "die App", polish: "aplikacja", example: "Diese App ist super!", level: "A1" },
        { german: "aktualisieren", polish: "aktualizować", example: "Du musst die App aktualisieren.", level: "B1" },
        { german: "der Akku", polish: "bateria", example: "Mein Akku ist leer.", level: "A2" },
        { german: "laden", polish: "ładować", example: "Ich muss mein Handy laden.", level: "A2" }
    ],

    // 📱 SOCIAL MEDIA (A2-B1)
    socialmedia: [
        { german: "das soziale Netzwerk", polish: "sieć społecznościowa", example: "Facebook ist ein soziales Netzwerk.", level: "A2" },
        { german: "teilen", polish: "udostępniać", example: "Ich teile das Foto.", level: "A2" },
        { german: "liken", polish: "polubić", example: "Ich like dein Bild.", level: "A1" },
        { german: "folgen", polish: "obserwować", example: "Ich folge dir auf Instagram.", level: "A2" },
        { german: "der Follower", polish: "obserwujący", example: "Ich habe viele Follower.", level: "A2" },
        { german: "posten", polish: "publikować", example: "Ich poste ein Foto.", level: "A2" },
        { german: "der Beitrag", polish: "post/wpis", example: "Dein Beitrag ist super!", level: "A2" },
        { german: "kommentieren", polish: "komentować", example: "Ich kommentiere das Video.", level: "A2" },
        { german: "der Kommentar", polish: "komentarz", example: "Das ist ein netter Kommentar.", level: "A2" },
        { german: "das Profil", polish: "profil", example: "Dein Profil sieht gut aus.", level: "A2" },
        { german: "die Nachricht", polish: "wiadomość", example: "Ich schicke dir eine Nachricht.", level: "A1" },
        { german: "online", polish: "online", example: "Bist du online?", level: "A1" },
        { german: "offline", polish: "offline", example: "Ich bin jetzt offline.", level: "A1" },
        { german: "das Video", polish: "wideo", example: "Das Video ist lustig.", level: "A1" },
        { german: "streamen", polish: "streamować", example: "Ich streame einen Film.", level: "B1" },
        { german: "der Hashtag", polish: "hashtag", example: "Benutze einen Hashtag!", level: "A2" },
        { german: "viral", polish: "viralowy", example: "Das Video ist viral gegangen.", level: "B1" },
        { german: "der Influencer", polish: "influencer", example: "Sie ist eine bekannte Influencerin.", level: "B1" }
    ],

    // 🏥 ZDROWIE (A2-B1)
    health: [
        { german: "der Arzt", polish: "lekarz", example: "Ich gehe zum Arzt.", level: "A1" },
        { german: "die Ärztin", polish: "lekarka", example: "Die Ärztin ist sehr nett.", level: "A1" },
        { german: "das Krankenhaus", polish: "szpital", example: "Er liegt im Krankenhaus.", level: "A1" },
        { german: "die Apotheke", polish: "apteka", example: "Die Apotheke ist um die Ecke.", level: "A1" },
        { german: "das Medikament", polish: "lekarstwo", example: "Nehmen Sie dieses Medikament.", level: "A2" },
        { german: "die Tablette", polish: "tabletka", example: "Nimm eine Tablette.", level: "A2" },
        { german: "das Rezept", polish: "recepta", example: "Ich brauche ein Rezept.", level: "A2" },
        { german: "krank", polish: "chory", example: "Ich bin krank.", level: "A1" },
        { german: "gesund", polish: "zdrowy", example: "Bleib gesund!", level: "A1" },
        { german: "die Erkältung", polish: "przeziębienie", example: "Ich habe eine Erkältung.", level: "A2" },
        { german: "das Fieber", polish: "gorączka", example: "Ich habe Fieber.", level: "A2" },
        { german: "der Husten", polish: "kaszel", example: "Ich habe Husten.", level: "A2" },
        { german: "der Schnupfen", polish: "katar", example: "Ich habe Schnupfen.", level: "A2" },
        { german: "die Kopfschmerzen", polish: "ból głowy", example: "Ich habe Kopfschmerzen.", level: "A2" },
        { german: "die Bauchschmerzen", polish: "ból brzucha", example: "Ich habe Bauchschmerzen.", level: "A2" },
        { german: "der Rückenschmerzen", polish: "ból pleców", example: "Ich habe Rückenschmerzen.", level: "A2" },
        { german: "die Allergie", polish: "alergia", example: "Ich habe eine Allergie.", level: "A2" },
        { german: "der Zahnarzt", polish: "dentysta", example: "Ich muss zum Zahnarzt.", level: "A2" },
        { german: "die Versicherung", polish: "ubezpieczenie", example: "Haben Sie eine Versicherung?", level: "B1" },
        { german: "der Termin", polish: "wizyta/termin", example: "Ich habe einen Termin.", level: "A2" },
        { german: "untersuchen", polish: "badać", example: "Der Arzt untersucht mich.", level: "B1" },
        { german: "die Spritze", polish: "zastrzyk", example: "Ich brauche eine Spritze.", level: "A2" },
        { german: "der Verband", polish: "bandaż", example: "Ich brauche einen Verband.", level: "A2" },
        { german: "heilen", polish: "leczyć", example: "Das Medikament heilt schnell.", level: "B1" }
    ],

    // 🏖️ WAKACJE I TURYSTYKA (A2-B1)
    vacation: [
        { german: "der Urlaub", polish: "urlop/wakacje", example: "Ich fahre in den Urlaub.", level: "A1" },
        { german: "die Reise", polish: "podróż", example: "Die Reise war toll!", level: "A1" },
        { german: "das Hotel", polish: "hotel", example: "Das Hotel ist schön.", level: "A1" },
        { german: "die Rezeption", polish: "recepcja", example: "Fragen Sie an der Rezeption.", level: "A2" },
        { german: "das Zimmer", polish: "pokój", example: "Das Zimmer ist groß.", level: "A1" },
        { german: "buchen", polish: "rezerwować", example: "Ich buche ein Zimmer.", level: "A2" },
        { german: "die Reservierung", polish: "rezerwacja", example: "Ich habe eine Reservierung.", level: "A2" },
        { german: "der Koffer", polish: "walizka", example: "Mein Koffer ist schwer.", level: "A1" },
        { german: "packen", polish: "pakować", example: "Ich muss noch packen.", level: "A2" },
        { german: "der Reisepass", polish: "paszport", example: "Wo ist mein Reisepass?", level: "A2" },
        { german: "das Visum", polish: "wiza", example: "Brauchst du ein Visum?", level: "B1" },
        { german: "der Strand", polish: "plaża", example: "Der Strand ist schön.", level: "A1" },
        { german: "das Meer", polish: "morze", example: "Das Meer ist blau.", level: "A1" },
        { german: "schwimmen", polish: "pływać", example: "Ich schwimme im Meer.", level: "A1" },
        { german: "die Sonne", polish: "słońce", example: "Die Sonne scheint.", level: "A1" },
        { german: "sich sonnen", polish: "opalać się", example: "Ich sonne mich am Strand.", level: "A2" },
        { german: "die Sonnencreme", polish: "krem do opalania", example: "Vergiss die Sonnencreme nicht!", level: "A2" },
        { german: "die Sehenswürdigkeit", polish: "atrakcja turystyczna", example: "Das ist eine Sehenswürdigkeit.", level: "B1" },
        { german: "besichtigen", polish: "zwiedzać", example: "Wir besichtigen das Museum.", level: "A2" },
        { german: "der Ausflug", polish: "wycieczka", example: "Wir machen einen Ausflug.", level: "A2" },
        { german: "die Postkarte", polish: "pocztówka", example: "Ich schreibe eine Postkarte.", level: "A2" },
        { german: "das Souvenir", polish: "pamiątka", example: "Ich kaufe ein Souvenir.", level: "A2" },
        { german: "der Reiseführer", polish: "przewodnik", example: "Ich lese den Reiseführer.", level: "A2" },
        { german: "die Landkarte", polish: "mapa", example: "Hast du eine Landkarte?", level: "A2" }
    ],

    // 💼 BIZNES (B1-B2)
    business: [
        { german: "das Unternehmen", polish: "przedsiębiorstwo", example: "Das Unternehmen wächst.", level: "B1" },
        { german: "die Firma", polish: "firma", example: "Ich arbeite in einer Firma.", level: "A2" },
        { german: "der Chef", polish: "szef", example: "Mein Chef ist nett.", level: "A2" },
        { german: "die Chefin", polish: "szefowa", example: "Die Chefin ist im Meeting.", level: "A2" },
        { german: "der Kollege", polish: "kolega z pracy", example: "Mein Kollege hilft mir.", level: "A2" },
        { german: "die Kollegin", polish: "koleżanka z pracy", example: "Meine Kollegin ist nett.", level: "A2" },
        { german: "das Meeting", polish: "spotkanie", example: "Ich habe ein Meeting.", level: "A2" },
        { german: "die Besprechung", polish: "narada", example: "Die Besprechung dauert lange.", level: "B1" },
        { german: "der Vertrag", polish: "umowa", example: "Ich unterschreibe den Vertrag.", level: "B1" },
        { german: "unterschreiben", polish: "podpisywać", example: "Unterschreiben Sie hier.", level: "B1" },
        { german: "das Gehalt", polish: "pensja", example: "Das Gehalt ist gut.", level: "B1" },
        { german: "die Gehaltserhöhung", polish: "podwyżka", example: "Ich möchte eine Gehaltserhöhung.", level: "B2" },
        { german: "der Kunde", polish: "klient", example: "Der Kunde ist zufrieden.", level: "A2" },
        { german: "die Kundin", polish: "klientka", example: "Die Kundin wartet.", level: "A2" },
        { german: "das Projekt", polish: "projekt", example: "Das Projekt ist wichtig.", level: "A2" },
        { german: "die Deadline", polish: "termin", example: "Die Deadline ist morgen.", level: "B1" },
        { german: "die Präsentation", polish: "prezentacja", example: "Ich halte eine Präsentation.", level: "A2" },
        { german: "der Bericht", polish: "raport", example: "Ich schreibe einen Bericht.", level: "B1" },
        { german: "die Rechnung", polish: "faktura/rachunek", example: "Die Rechnung ist bezahlt.", level: "A2" },
        { german: "bestellen", polish: "zamawiać", example: "Ich bestelle die Ware.", level: "A2" },
        { german: "liefern", polish: "dostarczać", example: "Wir liefern morgen.", level: "B1" },
        { german: "der Gewinn", polish: "zysk", example: "Der Gewinn ist hoch.", level: "B1" },
        { german: "der Verlust", polish: "strata", example: "Wir haben einen Verlust.", level: "B1" },
        { german: "die Konkurrenz", polish: "konkurencja", example: "Die Konkurrenz ist stark.", level: "B1" }
    ],

    // ❤️ UCZUCIA I RELACJE (A2-B1)
    relationships: [
        { german: "die Liebe", polish: "miłość", example: "Die Liebe ist schön.", level: "A2" },
        { german: "lieben", polish: "kochać", example: "Ich liebe dich.", level: "A1" },
        { german: "hassen", polish: "nienawidzić", example: "Ich hasse Montage.", level: "A2" },
        { german: "der Freund", polish: "przyjaciel/chłopak", example: "Er ist mein Freund.", level: "A1" },
        { german: "die Freundin", polish: "przyjaciółka/dziewczyna", example: "Sie ist meine Freundin.", level: "A1" },
        { german: "heiraten", polish: "żenić się/wychodzić za mąż", example: "Wir heiraten nächstes Jahr.", level: "A2" },
        { german: "die Hochzeit", polish: "ślub", example: "Die Hochzeit war schön.", level: "A2" },
        { german: "der Mann", polish: "mąż", example: "Das ist mein Mann.", level: "A1" },
        { german: "die Frau", polish: "żona", example: "Das ist meine Frau.", level: "A1" },
        { german: "der Partner", polish: "partner", example: "Mein Partner kocht gut.", level: "A2" },
        { german: "die Partnerin", polish: "partnerka", example: "Meine Partnerin arbeitet viel.", level: "A2" },
        { german: "sich verlieben", polish: "zakochać się", example: "Ich habe mich verliebt.", level: "A2" },
        { german: "küssen", polish: "całować", example: "Sie küssen sich.", level: "A2" },
        { german: "umarmen", polish: "przytulać", example: "Sie umarmen sich.", level: "A2" },
        { german: "sich trennen", polish: "rozstać się", example: "Sie haben sich getrennt.", level: "B1" },
        { german: "die Scheidung", polish: "rozwód", example: "Die Scheidung war schwer.", level: "B1" },
        { german: "vermissen", polish: "tęsknić", example: "Ich vermisse dich.", level: "A2" },
        { german: "vertrauen", polish: "ufać", example: "Ich vertraue dir.", level: "B1" },
        { german: "streiten", polish: "kłócić się", example: "Wir streiten nie.", level: "A2" },
        { german: "sich versöhnen", polish: "pogodzić się", example: "Wir haben uns versöhnt.", level: "B1" },
        { german: "der Streit", polish: "kłótnia", example: "Der Streit war dumm.", level: "A2" },
        { german: "eifersüchtig", polish: "zazdrosny", example: "Er ist eifersüchtig.", level: "B1" },
        { german: "treu", polish: "wierny", example: "Er ist sehr treu.", level: "B1" }
    ],

    // 🎬 FILM I ROZRYWKA (A2-B1)
    entertainment: [
        { german: "der Film", polish: "film", example: "Der Film war gut.", level: "A1" },
        { german: "das Kino", polish: "kino", example: "Gehen wir ins Kino?", level: "A1" },
        { german: "der Schauspieler", polish: "aktor", example: "Der Schauspieler ist berühmt.", level: "A2" },
        { german: "die Schauspielerin", polish: "aktorka", example: "Die Schauspielerin ist toll.", level: "A2" },
        { german: "die Serie", polish: "serial", example: "Die Serie ist spannend.", level: "A2" },
        { german: "die Folge", polish: "odcinek", example: "Die neue Folge ist da.", level: "A2" },
        { german: "der Regisseur", polish: "reżyser", example: "Der Regisseur ist bekannt.", level: "B1" },
        { german: "die Komödie", polish: "komedia", example: "Ich mag Komödien.", level: "A2" },
        { german: "der Krimi", polish: "kryminał", example: "Ich lese gern Krimis.", level: "A2" },
        { german: "der Horror", polish: "horror", example: "Ich mag keine Horrorfilme.", level: "A2" },
        { german: "die Dokumentation", polish: "dokument", example: "Die Dokumentation ist interessant.", level: "A2" },
        { german: "die Handlung", polish: "fabuła", example: "Die Handlung ist kompliziert.", level: "B1" },
        { german: "der Untertitel", polish: "napisy", example: "Der Film hat Untertitel.", level: "A2" },
        { german: "synchronisiert", polish: "dubbingowany", example: "Der Film ist synchronisiert.", level: "B1" },
        { german: "das Theater", polish: "teatr", example: "Wir gehen ins Theater.", level: "A2" },
        { german: "das Konzert", polish: "koncert", example: "Das Konzert war super!", level: "A1" },
        { german: "die Bühne", polish: "scena", example: "Er steht auf der Bühne.", level: "B1" },
        { german: "der Zuschauer", polish: "widz", example: "Die Zuschauer klatschen.", level: "B1" },
        { german: "spannend", polish: "ekscytujący", example: "Der Film ist spannend.", level: "A2" },
        { german: "langweilig", polish: "nudny", example: "Das Buch ist langweilig.", level: "A2" }
    ],

    // 🏃 FITNESS I SPORT (A2-B1)
    fitness: [
        { german: "das Fitnessstudio", polish: "siłownia", example: "Ich gehe ins Fitnessstudio.", level: "A2" },
        { german: "trainieren", polish: "trenować", example: "Ich trainiere jeden Tag.", level: "A2" },
        { german: "das Training", polish: "trening", example: "Das Training war hart.", level: "A2" },
        { german: "der Muskel", polish: "mięsień", example: "Meine Muskeln tun weh.", level: "A2" },
        { german: "abnehmen", polish: "chudnąć", example: "Ich möchte abnehmen.", level: "A2" },
        { german: "zunehmen", polish: "tyć", example: "Ich habe zugenommen.", level: "A2" },
        { german: "die Diät", polish: "dieta", example: "Ich mache eine Diät.", level: "A2" },
        { german: "joggen", polish: "biegać", example: "Ich jogge jeden Morgen.", level: "A2" },
        { german: "das Laufband", polish: "bieżnia", example: "Ich laufe auf dem Laufband.", level: "B1" },
        { german: "die Hantel", polish: "hantel", example: "Ich hebe Hanteln.", level: "B1" },
        { german: "dehnen", polish: "rozciągać", example: "Vergiss nicht zu dehnen!", level: "B1" },
        { german: "aufwärmen", polish: "rozgrzewać się", example: "Du musst dich aufwärmen.", level: "B1" },
        { german: "der Wettkampf", polish: "zawody", example: "Ich nehme am Wettkampf teil.", level: "B1" },
        { german: "gewinnen", polish: "wygrywać", example: "Ich will gewinnen!", level: "A2" },
        { german: "verlieren", polish: "przegrywać", example: "Wir haben verloren.", level: "A2" },
        { german: "der Rekord", polish: "rekord", example: "Das ist ein neuer Rekord!", level: "A2" },
        { german: "der Trainer", polish: "trener", example: "Mein Trainer ist streng.", level: "A2" },
        { german: "die Mannschaft", polish: "drużyna", example: "Die Mannschaft hat gewonnen.", level: "A2" },
        { german: "fit", polish: "w formie", example: "Ich fühle mich fit.", level: "A2" },
        { german: "erschöpft", polish: "wyczerpany", example: "Ich bin erschöpft.", level: "B1" }
    ],

    // 🏗️ BUDOWNICTWO (A2-B2)
    construction: [
        // Narzędzia
        { german: "der Hammer", polish: "młotek", example: "Gib mir bitte den Hammer.", level: "A2" },
        { german: "die Säge", polish: "piła", example: "Ich brauche eine Säge.", level: "A2" },
        { german: "der Schraubenzieher", polish: "śrubokręt", example: "Der Schraubenzieher ist im Werkzeugkasten.", level: "A2" },
        { german: "die Bohrmaschine", polish: "wiertarka", example: "Die Bohrmaschine ist kaputt.", level: "A2" },
        { german: "der Akkuschrauber", polish: "wkrętarka akumulatorowa", example: "Der Akkuschrauber muss aufgeladen werden.", level: "B1" },
        { german: "die Wasserwaage", polish: "poziomica", example: "Prüf das mit der Wasserwaage.", level: "B1" },
        { german: "das Maßband", polish: "miara/taśma miernicza", example: "Wo ist das Maßband?", level: "A2" },
        { german: "der Zollstock", polish: "miarka składana", example: "Ich messe mit dem Zollstock.", level: "B1" },
        { german: "die Schaufel", polish: "łopata", example: "Hol die Schaufel aus dem Auto.", level: "A2" },
        { german: "die Kelle", polish: "kielnia", example: "Der Maurer braucht eine Kelle.", level: "B1" },
        { german: "der Spachtel", polish: "szpachelka", example: "Glätte die Wand mit dem Spachtel.", level: "B1" },
        { german: "der Winkelschleifer", polish: "szlifierka kątowa", example: "Pass auf mit dem Winkelschleifer!", level: "B1" },
        { german: "die Flex", polish: "szlifierka (potocznie)", example: "Schneide das Rohr mit der Flex.", level: "B1" },
        { german: "der Meißel", polish: "dłuto", example: "Nimm den Meißel für die Wand.", level: "B1" },
        { german: "die Zange", polish: "szczypce/obcęgi", example: "Gib mir die Zange.", level: "A2" },
        { german: "der Schraubenschlüssel", polish: "klucz płaski", example: "Ich brauche einen Schraubenschlüssel.", level: "A2" },
        { german: "die Ratsche", polish: "grzechotka/klucz zapadkowy", example: "Mit der Ratsche geht es schneller.", level: "B1" },
        { german: "der Werkzeugkasten", polish: "skrzynka narzędziowa", example: "Alles ist im Werkzeugkasten.", level: "A2" },

        // Materiały budowlane
        { german: "der Beton", polish: "beton", example: "Der Beton muss noch trocknen.", level: "A2" },
        { german: "der Zement", polish: "cement", example: "Misch den Zement mit Wasser.", level: "A2" },
        { german: "der Mörtel", polish: "zaprawa", example: "Der Mörtel ist zu dünn.", level: "B1" },
        { german: "der Sand", polish: "piasek", example: "Wir brauchen mehr Sand.", level: "A1" },
        { german: "der Kies", polish: "żwir", example: "Kies für das Fundament.", level: "B1" },
        { german: "der Ziegel", polish: "cegła", example: "Die Wand ist aus Ziegeln.", level: "A2" },
        { german: "der Stein", polish: "kamień", example: "Wir bauen mit Steinen.", level: "A1" },
        { german: "das Holz", polish: "drewno", example: "Das Holz ist feucht.", level: "A1" },
        { german: "das Brett", polish: "deska", example: "Ich brauche ein langes Brett.", level: "A2" },
        { german: "der Balken", polish: "belka", example: "Die Balken tragen das Dach.", level: "B1" },
        { german: "die Platte", polish: "płyta", example: "Leg die Platte auf den Boden.", level: "A2" },
        { german: "die Fliese", polish: "płytka/kafelek", example: "Die Fliesen im Bad sind neu.", level: "A2" },
        { german: "der Putz", polish: "tynk", example: "Der Putz ist abgeblättert.", level: "B1" },
        { german: "die Farbe", polish: "farba", example: "Welche Farbe für die Wand?", level: "A1" },
        { german: "der Lack", polish: "lakier", example: "Der Lack muss trocknen.", level: "A2" },
        { german: "die Dämmung", polish: "izolacja/ocieplenie", example: "Die Dämmung spart Energie.", level: "B1" },
        { german: "das Styropor", polish: "styropian", example: "Wir kleben Styropor an die Wand.", level: "B1" },
        { german: "die Folie", polish: "folia", example: "Die Folie schützt vor Feuchtigkeit.", level: "A2" },
        { german: "der Gips", polish: "gips", example: "Die Wand ist aus Gips.", level: "A2" },
        { german: "die Schraube", polish: "śruba", example: "Ich brauche längere Schrauben.", level: "A2" },
        { german: "der Nagel", polish: "gwóźdź", example: "Schlag den Nagel in die Wand.", level: "A2" },
        { german: "der Dübel", polish: "kołek rozporowy", example: "Nimm einen größeren Dübel.", level: "B1" },
        { german: "das Silikon", polish: "silikon", example: "Dichte es mit Silikon ab.", level: "B1" },
        { german: "das Rohr", polish: "rura", example: "Das Rohr ist verstopft.", level: "A2" },
        { german: "das Kabel", polish: "kabel", example: "Verleg das Kabel unter Putz.", level: "A2" },

        // Elementy budynku
        { german: "das Fundament", polish: "fundament", example: "Das Fundament muss stark sein.", level: "B1" },
        { german: "die Mauer", polish: "mur/ściana", example: "Die Mauer ist einen Meter dick.", level: "A2" },
        { german: "die Wand", polish: "ściana", example: "Streich die Wand weiß.", level: "A1" },
        { german: "die Decke", polish: "sufit", example: "Die Decke ist drei Meter hoch.", level: "A2" },
        { german: "der Boden", polish: "podłoga", example: "Der Boden ist aus Holz.", level: "A1" },
        { german: "das Dach", polish: "dach", example: "Das Dach ist undicht.", level: "A2" },
        { german: "der Dachboden", polish: "poddasze/strych", example: "Das Zeug ist auf dem Dachboden.", level: "B1" },
        { german: "der Keller", polish: "piwnica", example: "Im Keller ist es kühl.", level: "A2" },
        { german: "die Treppe", polish: "schody", example: "Die Treppe ist steil.", level: "A2" },
        { german: "das Geländer", polish: "poręcz/balustrada", example: "Halt dich am Geländer fest.", level: "B1" },
        { german: "der Balkon", polish: "balkon", example: "Ich sitze auf dem Balkon.", level: "A2" },
        { german: "die Terrasse", polish: "taras", example: "Wir bauen eine Terrasse.", level: "A2" },
        { german: "die Garage", polish: "garaż", example: "Das Auto ist in der Garage.", level: "A2" },
        { german: "der Zaun", polish: "płot", example: "Der Zaun muss repariert werden.", level: "A2" },

        // Czynności budowlane
        { german: "bauen", polish: "budować", example: "Wir bauen ein Haus.", level: "A1" },
        { german: "renovieren", polish: "remontować", example: "Wir renovieren die Wohnung.", level: "A2" },
        { german: "streichen", polish: "malować (ścianę)", example: "Ich streiche das Zimmer.", level: "A2" },
        { german: "bohren", polish: "wiercić", example: "Bohr ein Loch in die Wand.", level: "A2" },
        { german: "schrauben", polish: "wkręcać", example: "Schraub das Regal an die Wand.", level: "A2" },
        { german: "nageln", polish: "przybijać gwoździe", example: "Nagel das Brett fest.", level: "A2" },
        { german: "sägen", polish: "piłować", example: "Säg das Holz in zwei Teile.", level: "A2" },
        { german: "schleifen", polish: "szlifować", example: "Schleif die Oberfläche glatt.", level: "B1" },
        { german: "kleben", polish: "kleić", example: "Kleb die Fliesen an die Wand.", level: "A2" },
        { german: "verlegen", polish: "kłaść (podłogę, kable)", example: "Wir verlegen Laminat.", level: "B1" },
        { german: "verputzen", polish: "tynkować", example: "Die Wand muss verputzt werden.", level: "B1" },
        { german: "isolieren", polish: "izolować", example: "Das Haus muss isoliert werden.", level: "B1" },
        { german: "abdichten", polish: "uszczelniać", example: "Dichte das Fenster ab.", level: "B1" },
        { german: "messen", polish: "mierzyć", example: "Miss die Länge der Wand.", level: "A2" },
        { german: "abreißen", polish: "burzyć/zrywać", example: "Wir reißen die alte Wand ab.", level: "B1" },
        { german: "montieren", polish: "montować", example: "Montier das Regal an die Wand.", level: "B1" },
        { german: "reparieren", polish: "naprawiać", example: "Ich muss das Dach reparieren.", level: "A2" },
        { german: "installieren", polish: "instalować", example: "Wir installieren eine neue Heizung.", level: "B1" },

        // Zawody budowlane
        { german: "der Bauarbeiter", polish: "pracownik budowlany", example: "Die Bauarbeiter kommen um sieben.", level: "A2" },
        { german: "der Maurer", polish: "murarz", example: "Der Maurer baut die Wand.", level: "A2" },
        { german: "der Elektriker", polish: "elektryk", example: "Der Elektriker verlegt die Kabel.", level: "A2" },
        { german: "der Klempner", polish: "hydraulik", example: "Ruf den Klempner, das Rohr tropft.", level: "A2" },
        { german: "der Installateur", polish: "instalator", example: "Der Installateur kommt morgen.", level: "B1" },
        { german: "der Tischler", polish: "stolarz", example: "Der Tischler baut Möbel.", level: "A2" },
        { german: "der Zimmermann", polish: "cieśla", example: "Der Zimmermann arbeitet mit Holz.", level: "B1" },
        { german: "der Maler", polish: "malarz", example: "Der Maler streicht die Wände.", level: "A2" },
        { german: "der Dachdecker", polish: "dekarz", example: "Der Dachdecker repariert das Dach.", level: "B1" },
        { german: "der Fliesenleger", polish: "glazurnik/kafelkarz", example: "Der Fliesenleger legt die Fliesen.", level: "B1" },
        { german: "der Architekt", polish: "architekt", example: "Der Architekt plant das Haus.", level: "A2" },
        { german: "der Bauleiter", polish: "kierownik budowy", example: "Der Bauleiter koordiniert alles.", level: "B1" },
        { german: "die Baustelle", polish: "plac budowy", example: "Betreten der Baustelle verboten!", level: "A2" },

        // Instalacje
        { german: "die Heizung", polish: "ogrzewanie", example: "Die Heizung funktioniert nicht.", level: "A2" },
        { german: "die Klimaanlage", polish: "klimatyzacja", example: "Die Klimaanlage ist zu kalt.", level: "A2" },
        { german: "die Steckdose", polish: "gniazdko", example: "Wo ist die nächste Steckdose?", level: "A2" },
        { german: "der Schalter", polish: "włącznik", example: "Der Schalter ist an der Wand.", level: "A2" },
        { german: "die Leitung", polish: "przewód/instalacja", example: "Die Leitung ist alt.", level: "B1" },
        { german: "der Wasserhahn", polish: "kran", example: "Der Wasserhahn tropft.", level: "A2" },
        { german: "das Abflussrohr", polish: "rura odpływowa", example: "Das Abflussrohr ist verstopft.", level: "B1" },

        // Przydatne zwroty budowlane
        { german: "Das muss trocknen.", polish: "To musi wyschnąć.", example: "Warte, das muss trocknen.", level: "A2" },
        { german: "Vorsicht, frisch gestrichen!", polish: "Uwaga, świeżo malowane!", example: "Vorsicht, frisch gestrichen!", level: "A2" },
        { german: "Betreten verboten!", polish: "Wstęp wzbroniony!", example: "Betreten der Baustelle verboten!", level: "A2" },
        { german: "Helm tragen!", polish: "Nosić kask!", example: "Auf der Baustelle: Helm tragen!", level: "A2" },
        { german: "im Lot", polish: "w pionie", example: "Die Wand ist im Lot.", level: "B1" },
        { german: "in Waage", polish: "w poziomie", example: "Die Fläche ist in Waage.", level: "B1" }
    ],

    // 💬 PRAKTYCZNE ZDANIA NA CO DZIEŃ (A1-B1)
    dailyPhrases: [
        // Powitania i pożegnania
        { german: "Wie geht es Ihnen?", polish: "Jak się Pan/Pani ma?", example: "Guten Tag! Wie geht es Ihnen?", level: "A1" },
        { german: "Es geht mir gut, danke.", polish: "Dobrze, dziękuję.", example: "Es geht mir gut, danke. Und Ihnen?", level: "A1" },
        { german: "Schönes Wochenende!", polish: "Miłego weekendu!", example: "Tschüss! Schönes Wochenende!", level: "A1" },
        { german: "Schönen Feierabend!", polish: "Miłego wieczoru (po pracy)!", example: "Bis morgen! Schönen Feierabend!", level: "A2" },
        { german: "Mach's gut!", polish: "Trzymaj się!", example: "Tschüss! Mach's gut!", level: "A1" },
        { german: "Pass auf dich auf!", polish: "Uważaj na siebie!", example: "Pass auf dich auf! Bis bald!", level: "A2" },

        // W sklepie
        { german: "Kann ich Ihnen helfen?", polish: "Czy mogę Panu/Pani pomóc?", example: "Guten Tag! Kann ich Ihnen helfen?", level: "A1" },
        { german: "Ich suche...", polish: "Szukam...", example: "Ich suche eine warme Jacke.", level: "A1" },
        { german: "Haben Sie das in meiner Größe?", polish: "Czy macie to w moim rozmiarze?", example: "Das Hemd gefällt mir. Haben Sie das in meiner Größe?", level: "A2" },
        { german: "Kann ich das anprobieren?", polish: "Czy mogę to przymierzyć?", example: "Kann ich das anprobieren? Wo ist die Kabine?", level: "A2" },
        { german: "Das ist mir zu teuer.", polish: "To jest dla mnie za drogie.", example: "Das ist mir zu teuer. Haben Sie etwas Billigeres?", level: "A2" },
        { german: "Ich nehme das.", polish: "Wezmę to.", example: "Es passt perfekt. Ich nehme das.", level: "A1" },
        { german: "Kann ich mit Karte zahlen?", polish: "Czy mogę zapłacić kartą?", example: "Kann ich mit Karte zahlen oder nur bar?", level: "A1" },
        { german: "Haben Sie es kleiner?", polish: "Macie mniejsze?", example: "Haben Sie das Gleiche eine Nummer kleiner?", level: "A2" },
        { german: "Wo finde ich...?", polish: "Gdzie znajdę...?", example: "Entschuldigung, wo finde ich die Milch?", level: "A1" },
        { german: "Das ist alles.", polish: "To wszystko.", example: "Das ist alles. Ich möchte zahlen.", level: "A1" },

        // W restauracji
        { german: "Einen Tisch für zwei, bitte.", polish: "Stolik dla dwóch osób, proszę.", example: "Guten Abend! Einen Tisch für zwei, bitte.", level: "A1" },
        { german: "Die Speisekarte, bitte.", polish: "Menu, proszę.", example: "Könnten Sie uns die Speisekarte bringen?", level: "A1" },
        { german: "Was empfehlen Sie?", polish: "Co Pan/Pani poleca?", example: "Was empfehlen Sie heute?", level: "A2" },
        { german: "Ich hätte gern...", polish: "Chciałbym/Chciałabym...", example: "Ich hätte gern die Suppe und einen Salat.", level: "A1" },
        { german: "Für mich bitte...", polish: "Dla mnie proszę...", example: "Für mich bitte das Schnitzel.", level: "A1" },
        { german: "Könnte ich noch etwas Brot haben?", polish: "Czy mógłbym prosić jeszcze trochę chleba?", example: "Könnte ich noch etwas Brot haben?", level: "A2" },
        { german: "Es hat sehr gut geschmeckt.", polish: "Było bardzo smaczne.", example: "Danke, es hat sehr gut geschmeckt.", level: "A2" },
        { german: "Die Rechnung, bitte.", polish: "Rachunek, proszę.", example: "Wir möchten zahlen. Die Rechnung, bitte.", level: "A1" },
        { german: "Stimmt so.", polish: "Reszty nie trzeba.", example: "Hier sind 20 Euro. Stimmt so.", level: "A2" },
        { german: "Getrennt oder zusammen?", polish: "Osobno czy razem?", example: "Möchten Sie getrennt oder zusammen zahlen?", level: "A2" },

        // U lekarza
        { german: "Ich möchte einen Termin machen.", polish: "Chciałbym/Chciałabym umówić się na wizytę.", example: "Guten Tag, ich möchte einen Termin machen.", level: "A2" },
        { german: "Mir geht es nicht gut.", polish: "Nie czuję się dobrze.", example: "Mir geht es nicht gut. Ich habe Fieber.", level: "A1" },
        { german: "Ich habe Kopfschmerzen.", polish: "Boli mnie głowa.", example: "Ich habe seit gestern Kopfschmerzen.", level: "A1" },
        { german: "Mir tut der Bauch weh.", polish: "Boli mnie brzuch.", example: "Mir tut seit zwei Tagen der Bauch weh.", level: "A2" },
        { german: "Ich bin erkältet.", polish: "Jestem przeziębiony/a.", example: "Ich bin erkältet und habe Husten.", level: "A2" },
        { german: "Ich habe Allergien.", polish: "Mam alergie.", example: "Ich habe Allergien gegen Pollen.", level: "A2" },
        { german: "Brauche ich ein Rezept?", polish: "Czy potrzebuję recepty?", example: "Brauche ich dafür ein Rezept?", level: "A2" },
        { german: "Wie oft soll ich das nehmen?", polish: "Jak często mam to brać?", example: "Wie oft soll ich das Medikament nehmen?", level: "A2" },

        // Na poczcie/w banku
        { german: "Ich möchte ein Paket schicken.", polish: "Chciałbym/Chciałabym wysłać paczkę.", example: "Ich möchte ein Paket nach Polen schicken.", level: "A2" },
        { german: "Wie viel kostet das Porto?", polish: "Ile kosztuje przesyłka?", example: "Wie viel kostet das Porto nach Deutschland?", level: "A2" },
        { german: "Ich möchte ein Konto eröffnen.", polish: "Chciałbym/Chciałabym otworzyć konto.", example: "Ich möchte ein Girokonto eröffnen.", level: "B1" },
        { german: "Ich möchte Geld abheben.", polish: "Chciałbym/Chciałabym wypłacić pieniądze.", example: "Ich möchte 200 Euro abheben.", level: "A2" },
        { german: "Ich möchte Geld überweisen.", polish: "Chciałbym/Chciałabym przelać pieniądze.", example: "Ich möchte Geld auf ein anderes Konto überweisen.", level: "B1" },

        // W pracy
        { german: "Ich bin heute krank.", polish: "Jestem dziś chory/a.", example: "Guten Morgen, ich bin heute krank.", level: "A1" },
        { german: "Ich komme heute später.", polish: "Przyjdę dziś później.", example: "Ich komme heute 30 Minuten später.", level: "A1" },
        { german: "Können Sie mir helfen?", polish: "Czy może mi Pan/Pani pomóc?", example: "Entschuldigung, können Sie mir helfen?", level: "A1" },
        { german: "Ich verstehe das nicht.", polish: "Nie rozumiem tego.", example: "Tut mir leid, ich verstehe das nicht.", level: "A1" },
        { german: "Können Sie das wiederholen?", polish: "Czy może Pan/Pani powtórzyć?", example: "Können Sie das bitte wiederholen?", level: "A1" },
        { german: "Können Sie langsamer sprechen?", polish: "Czy może Pan/Pani mówić wolniej?", example: "Können Sie bitte langsamer sprechen?", level: "A1" },
        { german: "Wann ist die Besprechung?", polish: "Kiedy jest spotkanie?", example: "Wann ist die Besprechung heute?", level: "A2" },
        { german: "Ich mache Pause.", polish: "Robię przerwę.", example: "Ich mache jetzt Pause. Bis gleich!", level: "A1" },
        { german: "Ich bin gleich zurück.", polish: "Zaraz wracam.", example: "Warte kurz, ich bin gleich zurück.", level: "A1" },
        { german: "Das schaffe ich bis morgen.", polish: "Dam radę do jutra.", example: "Kein Problem, das schaffe ich bis morgen.", level: "A2" },

        // Transport
        { german: "Wann fährt der nächste Zug?", polish: "Kiedy odjeżdża następny pociąg?", example: "Wann fährt der nächste Zug nach Berlin?", level: "A1" },
        { german: "Eine Fahrkarte nach..., bitte.", polish: "Proszę bilet do...", example: "Eine Fahrkarte nach München, bitte.", level: "A1" },
        { german: "Hin und zurück?", polish: "W obie strony?", example: "Möchten Sie hin und zurück?", level: "A1" },
        { german: "Nur einfach, bitte.", polish: "Tylko w jedną stronę, proszę.", example: "Nur einfach, bitte. Ich bleibe dort.", level: "A2" },
        { german: "Wo muss ich umsteigen?", polish: "Gdzie muszę się przesiadać?", example: "Wo muss ich umsteigen nach Frankfurt?", level: "A2" },
        { german: "Ist dieser Platz frei?", polish: "Czy to miejsce jest wolne?", example: "Entschuldigung, ist dieser Platz frei?", level: "A1" },
        { german: "Hält der Zug in...?", polish: "Czy pociąg zatrzymuje się w...?", example: "Hält der Zug in Nürnberg?", level: "A2" },
        { german: "Wo ist die Haltestelle?", polish: "Gdzie jest przystanek?", example: "Wo ist die nächste Bushaltestelle?", level: "A1" },

        // Mieszkanie
        { german: "Ich suche eine Wohnung.", polish: "Szukam mieszkania.", example: "Ich suche eine Zwei-Zimmer-Wohnung.", level: "A2" },
        { german: "Wie hoch ist die Miete?", polish: "Ile wynosi czynsz?", example: "Wie hoch ist die Miete warm?", level: "A2" },
        { german: "Sind Nebenkosten inklusive?", polish: "Czy opłaty dodatkowe są wliczone?", example: "Sind die Nebenkosten in der Miete inklusive?", level: "B1" },
        { german: "Kann ich die Wohnung besichtigen?", polish: "Czy mogę obejrzeć mieszkanie?", example: "Kann ich die Wohnung morgen besichtigen?", level: "A2" },
        { german: "Ab wann ist die Wohnung frei?", polish: "Od kiedy mieszkanie jest wolne?", example: "Ab wann ist die Wohnung frei?", level: "A2" },
        { german: "Sind Haustiere erlaubt?", polish: "Czy zwierzęta są dozwolone?", example: "Sind Haustiere in der Wohnung erlaubt?", level: "A2" },

        // Pytanie o drogę
        { german: "Wie komme ich zum/zur...?", polish: "Jak dojść do...?", example: "Wie komme ich zum Bahnhof?", level: "A1" },
        { german: "Ist es weit von hier?", polish: "Czy to daleko stąd?", example: "Ist es weit von hier zu Fuß?", level: "A1" },
        { german: "Gehen Sie geradeaus.", polish: "Proszę iść prosto.", example: "Gehen Sie geradeaus und dann links.", level: "A1" },
        { german: "Biegen Sie links/rechts ab.", polish: "Proszę skręcić w lewo/prawo.", example: "Biegen Sie an der Ampel rechts ab.", level: "A1" },
        { german: "Es ist um die Ecke.", polish: "To jest za rogiem.", example: "Die Apotheke ist um die Ecke.", level: "A1" },
        { german: "Es ist gegenüber von...", polish: "To jest naprzeciwko...", example: "Das Café ist gegenüber vom Kino.", level: "A2" },

        // Codzienne sytuacje
        { german: "Kann ich bitte...?", polish: "Czy mogę prosić...?", example: "Kann ich bitte ein Glas Wasser haben?", level: "A1" },
        { german: "Könnten Sie bitte...?", polish: "Czy mógłby/mogłaby Pan/Pani...?", example: "Könnten Sie bitte das Fenster öffnen?", level: "A2" },
        { german: "Es tut mir leid.", polish: "Przepraszam (wyrażenie żalu).", example: "Es tut mir leid, dass ich zu spät bin.", level: "A1" },
        { german: "Macht nichts.", polish: "Nic nie szkodzi.", example: "Macht nichts. Das kann passieren.", level: "A1" },
        { german: "Das ist kein Problem.", polish: "To nie problem.", example: "Das ist kein Problem. Ich warte.", level: "A1" },
        { german: "Moment mal, bitte.", polish: "Chwileczkę, proszę.", example: "Moment mal, bitte. Ich muss nachdenken.", level: "A1" },
        { german: "Wie bitte?", polish: "Słucham? (nie dosłyszałem)", example: "Wie bitte? Ich habe Sie nicht verstanden.", level: "A1" },
        { german: "Was bedeutet das?", polish: "Co to znaczy?", example: "Entschuldigung, was bedeutet dieses Wort?", level: "A1" },
        { german: "Wie sagt man... auf Deutsch?", polish: "Jak się mówi... po niemiecku?", example: "Wie sagt man 'thank you' auf Deutsch?", level: "A1" },
        { german: "Ich lerne Deutsch.", polish: "Uczę się niemieckiego.", example: "Ich lerne seit einem Jahr Deutsch.", level: "A1" },

        // Telefon
        { german: "Hier spricht...", polish: "Mówi...", example: "Guten Tag, hier spricht Kowalski.", level: "A2" },
        { german: "Kann ich bitte mit... sprechen?", polish: "Czy mogę rozmawiać z...?", example: "Kann ich bitte mit Herrn Müller sprechen?", level: "A2" },
        { german: "Einen Moment, ich verbinde.", polish: "Chwileczkę, łączę.", example: "Einen Moment bitte, ich verbinde Sie.", level: "A2" },
        { german: "Er/Sie ist gerade nicht da.", polish: "Jego/jej teraz nie ma.", example: "Tut mir leid, er ist gerade nicht da.", level: "A2" },
        { german: "Kann er/sie mich zurückrufen?", polish: "Czy może do mnie oddzwonić?", example: "Kann sie mich bitte zurückrufen?", level: "A2" },
        { german: "Ich rufe später noch mal an.", polish: "Zadzwonię jeszcze raz później.", example: "Ich rufe in einer Stunde noch mal an.", level: "A2" },

        // Pogoda i small talk
        { german: "Schönes Wetter heute!", polish: "Ładna pogoda dzisiaj!", example: "Schönes Wetter heute! Endlich Sonne!", level: "A1" },
        { german: "Es regnet schon wieder.", polish: "Znowu pada.", example: "Es regnet schon wieder. Hast du einen Schirm?", level: "A1" },
        { german: "Wie war dein Wochenende?", polish: "Jak minął ci weekend?", example: "Hallo! Wie war dein Wochenende?", level: "A1" },
        { german: "Was machst du heute Abend?", polish: "Co robisz dziś wieczorem?", example: "Was machst du heute Abend? Hast du Zeit?", level: "A1" },
        { german: "Hast du Lust auf...?", polish: "Masz ochotę na...?", example: "Hast du Lust auf einen Kaffee?", level: "A2" },
        { german: "Lass uns... gehen!", polish: "Chodźmy...!", example: "Lass uns ins Kino gehen!", level: "A2" },

        // Wyrażanie opinii
        { german: "Das finde ich gut.", polish: "Uważam, że to dobre.", example: "Das finde ich gut. Gute Idee!", level: "A2" },
        { german: "Das gefällt mir.", polish: "To mi się podoba.", example: "Das neue Café gefällt mir.", level: "A1" },
        { german: "Das gefällt mir nicht.", polish: "To mi się nie podoba.", example: "Das gefällt mir nicht. Hast du was anderes?", level: "A1" },
        { german: "Ich bin dafür.", polish: "Jestem za.", example: "Das ist eine gute Idee. Ich bin dafür.", level: "A2" },
        { german: "Ich bin dagegen.", polish: "Jestem przeciw.", example: "Das finde ich nicht gut. Ich bin dagegen.", level: "A2" },
        { german: "Ich stimme zu.", polish: "Zgadzam się.", example: "Du hast recht. Ich stimme zu.", level: "A2" },
        { german: "Da bin ich anderer Meinung.", polish: "Mam inną opinię.", example: "Da bin ich anderer Meinung.", level: "B1" }
    ],

    // 🎓 SŁOWNICTWO C1
    c1vocabulary: [
        // Myślenie i argumentacja
        { german: "die Auseinandersetzung", polish: "dyskusja / spór / konfrontacja", example: "Die Auseinandersetzung mit diesem Thema ist wichtig.", level: "C1" },
        { german: "die Behauptung", polish: "twierdzenie / stwierdzenie", example: "Das ist eine gewagte Behauptung.", level: "C1" },
        { german: "die Schlussfolgerung", polish: "wniosek / konkluzja", example: "Die Schlussfolgerung ist eindeutig.", level: "C1" },
        { german: "die Voraussetzung", polish: "warunek / założenie / przesłanka", example: "Die Voraussetzung für Erfolg ist harte Arbeit.", level: "C1" },
        { german: "die Auswirkung", polish: "skutek / wpływ / oddziaływanie", example: "Die Auswirkungen des Klimawandels sind spürbar.", level: "C1" },
        { german: "die Einschränkung", polish: "ograniczenie", example: "Es gibt gewisse Einschränkungen.", level: "C1" },
        { german: "der Zusammenhang", polski: "związek / kontekst / powiązanie", example: "Das steht in keinem Zusammenhang.", level: "C1" },
        { german: "der Widerspruch", polish: "sprzeczność / protest / zaprzeczenie", example: "Das ist ein offensichtlicher Widerspruch.", level: "C1" },
        { german: "die Überzeugung", polish: "przekonanie", example: "Das ist meine feste Überzeugung.", level: "C1" },
        { german: "die Abwägung", polish: "rozważenie / wyważenie racji", example: "Nach sorgfältiger Abwägung entschied er sich.", level: "C1" },

        // Społeczeństwo i polityka
        { german: "die Chancengleichheit", polish: "równość szans", example: "Chancengleichheit ist ein demokratisches Grundprinzip.", level: "C1" },
        { german: "die Nachhaltigkeit", polish: "zrównoważony rozwój / trwałość", example: "Nachhaltigkeit ist heute ein zentrales Thema.", level: "C1" },
        { german: "der Wohlstand", polish: "dobrobyt / zamożność", example: "Der wirtschaftliche Wohlstand ist gestiegen.", level: "C1" },
        { german: "die Benachteiligung", polish: "dyskryminacja / upośledzenie", example: "Die Benachteiligung von Minderheiten muss bekämpft werden.", level: "C1" },
        { german: "die Eigenverantwortung", polish: "odpowiedzialność własna", example: "Eigenverantwortung ist eine wichtige Tugend.", level: "C1" },
        { german: "die Inanspruchnahme", polish: "skorzystanie / wykorzystanie (usług)", example: "Die Inanspruchnahme sozialer Leistungen ist gestiegen.", level: "C1" },
        { german: "das Bewusstsein", polish: "świadomość", example: "Das Umweltbewusstsein hat zugenommen.", level: "C1" },
        { german: "die Infrastruktur", polish: "infrastruktura", example: "Die Infrastruktur muss modernisiert werden.", level: "C1" },
        { german: "der Lebensstandard", polish: "standard życia", example: "Der Lebensstandard hat sich verbessert.", level: "C1" },
        { german: "die Globalisierung", polish: "globalizacja", example: "Die Globalisierung hat Vor- und Nachteile.", level: "C1" },

        // Praca i gospodarka
        { german: "die Qualifikation", polish: "kwalifikacje", example: "Welche Qualifikationen bringen Sie mit?", level: "C1" },
        { german: "die Weiterbildung", polish: "dokształcanie / szkolenie zawodowe", example: "Weiterbildung ist für die Karriere wichtig.", level: "C1" },
        { german: "die Arbeitnehmerrechte", polish: "prawa pracownicze", example: "Arbeitnehmerrechte müssen geschützt werden.", level: "C1" },
        { german: "die Selbstständigkeit", polish: "samodzielność / działalność własna", example: "Er entschied sich für die Selbstständigkeit.", level: "C1" },
        { german: "das Engagement", polish: "zaangażowanie", example: "Ihr Engagement ist sehr lobenswert.", level: "C1" },
        { german: "die Herausforderung", polish: "wyzwanie", example: "Das ist eine große Herausforderung.", level: "C1" },
        { german: "die Effizienz", polish: "efektywność / wydajność", example: "Die Effizienz kann noch gesteigert werden.", level: "C1" },
        { german: "die Zusammenarbeit", polish: "współpraca", example: "Eine gute Zusammenarbeit ist entscheidend.", level: "C1" },

        // Nauka i badania
        { german: "die Erkenntnis", polish: "odkrycie / spostrzeżenie / poznanie", example: "Das ist eine wichtige wissenschaftliche Erkenntnis.", level: "C1" },
        { german: "die Forschung", polish: "badania naukowe", example: "Die Forschung auf diesem Gebiet schreitet voran.", level: "C1" },
        { german: "der Ansatz", polish: "podejście / metoda / podejście badawcze", example: "Ein interdisziplinärer Ansatz ist sinnvoll.", level: "C1" },
        { german: "die Hypothese", polish: "hipoteza", example: "Die Hypothese wurde bestätigt.", level: "C1" },
        { german: "die Grundlage", polish: "podstawa / fundament", example: "Auf welcher Grundlage basiert das?", level: "C1" },
        { german: "belegen", polish: "udowodnić / udokumentować", example: "Das lässt sich wissenschaftlich belegen.", level: "C1" },
        { german: "widerlegen", polish: "obalić / zaprzeczyć", example: "Diese Theorie wurde widerlegt.", level: "C1" },

        // Wyrażenia i czasowniki zaawansowane
        { german: "berücksichtigen", polish: "uwzględniać / brać pod uwagę", example: "Man muss alle Faktoren berücksichtigen.", level: "C1" },
        { german: "gewährleisten", polish: "zapewniać / gwarantować", example: "Die Sicherheit muss gewährleistet werden.", level: "C1" },
        { german: "beanspruchen", polish: "żądać / zajmować / wymagać", example: "Das beansprucht viel Zeit.", level: "C1" },
        { german: "einschränken", polish: "ograniczać", example: "Das schränkt die Freiheit ein.", level: "C1" },
        { german: "überwältigen", polish: "przytłaczać / pokonywać", example: "Die Situation hat sie überwältigt.", level: "C1" },
        { german: "umsetzen", polish: "wdrażać / realizować", example: "Die Pläne müssen umgesetzt werden.", level: "C1" },
        { german: "nachvollziehen", polish: "rozumieć / śledzić rozumowanie", example: "Das kann ich gut nachvollziehen.", level: "C1" },
        { german: "abwägen", polish: "rozważać / wyważać", example: "Man muss die Vor- und Nachteile abwägen.", level: "C1" },
        { german: "voraussetzen", polish: "zakładać / wymagać z góry", example: "Das setzt gute Kenntnisse voraus.", level: "C1" },
        { german: "veranschaulichen", polish: "ilustrować / unaoczniać", example: "Ein Beispiel soll das veranschaulichen.", level: "C1" },

        // Zwroty C1 przydatne w rozmowie
        { german: "Im Großen und Ganzen...", polish: "Ogólnie rzecz biorąc...", example: "Im Großen und Ganzen bin ich zufrieden.", level: "C1" },
        { german: "Einerseits... andererseits...", polish: "Z jednej strony... z drugiej strony...", example: "Einerseits ist es gut, andererseits riskant.", level: "C1" },
        { german: "Es kommt darauf an, ob...", polish: "To zależy od tego, czy...", example: "Es kommt darauf an, ob wir Zeit haben.", level: "C1" },
        { german: "Es steht außer Frage, dass...", polish: "Nie ulega wątpliwości, że...", example: "Es steht außer Frage, dass das falsch war.", level: "C1" },
        { german: "Im Hinblick auf...", polish: "W odniesieniu do... / Biorąc pod uwagę...", example: "Im Hinblick auf die Kosten ist das sinnvoll.", level: "C1" },
        { german: "Meiner Einschätzung nach...", polish: "Moim zdaniem / Według mojej oceny...", example: "Meiner Einschätzung nach ist das zu riskant.", level: "C1" },
        { german: "Es lässt sich nicht leugnen, dass...", polish: "Nie da się zaprzeczyć, że...", example: "Es lässt sich nicht leugnen, dass die Lage ernst ist.", level: "C1" },
        { german: "Abgesehen davon...", polish: "Poza tym / Abstrahując od tego...", example: "Abgesehen davon gibt es noch weitere Probleme.", level: "C1" },
        { german: "Dementsprechend...", polish: "Odpowiednio / W związku z tym...", example: "Dementsprechend müssen wir handeln.", level: "C1" },
        { german: "Letztendlich...", polish: "W ostateczności / Ostatecznie...", example: "Letztendlich ist es Ihre Entscheidung.", level: "C1" }
    ],

    // 🗣️ ROZMÓWKI POTOCZNE
    colloquial: [
        // Pozdrowienia i jak leci
        { german: "Was geht?", polish: "Co słychać? (potocznie)", example: "Hey! Was geht bei dir?", level: "A2" },
        { german: "Wie läuft's?", polish: "Jak leci?", example: "Hey! Wie läuft's bei dir so?", level: "A2" },
        { german: "Moin!", polish: "Cześć! (północne Niemcy)", example: "Moin! Schon wieder Montag...", level: "A1" },
        { german: "Servus!", polish: "Cześć! / Pa! (Austria / Bawaria)", example: "Servus! Schön dich zu sehen!", level: "A1" },
        { german: "Alles klar!", polish: "Wszystko jasne! / Spoko!", example: "Alles klar, bis morgen!", level: "A1" },
        { german: "Läuft bei mir!", polish: "Idzie mi świetnie! / Spoko u mnie!", example: "Und dir? – Läuft bei mir!", level: "B1" },
        { german: "Es geht so.", polish: "Tak sobie / Jakoś tam.", example: "Alles gut? – Ach, es geht so.", level: "A2" },
        { german: "Nicht so der Hammer.", polish: "Niezbyt / Nie za bardzo.", example: "Wie war der Film? – Nicht so der Hammer.", level: "B1" },
        { german: "Was machst du so?", polish: "Co tam u ciebie?", example: "Was machst du so in letzter Zeit?", level: "A2" },
        { german: "Ich bin am Ende.", polish: "Jestem wykończony/a.", example: "Nach der Arbeit bin ich total am Ende.", level: "B1" },

        // Reakcje i wykrzyknienia
        { german: "Krass!", polish: "Niesamowite! / No to powiem!", example: "Er hat einen Porsche? – Krass!", level: "A2" },
        { german: "Hammer!", polish: "Bomba! / Zajebiste!", example: "Das war ein Hammer-Konzert!", level: "A2" },
        { german: "Mega!", polish: "Mega! / Super!", example: "Das Essen war mega!", level: "A2" },
        { german: "Voll cool!", polish: "Bardzo fajne!", example: "Neue Jacke? – Voll cool!", level: "A2" },
        { german: "Echt jetzt?", polish: "Serio? / Naprawdę?", example: "Er hat gekündigt. – Echt jetzt?!", level: "A2" },
        { german: "Alter!", polish: "Człowieku! / No człowieku!", example: "Alter, das glaubst du nicht!", level: "A2" },
        { german: "Boah!", polish: "Wow! / O rany!", example: "Boah, das war so lecker!", level: "A2" },
        { german: "Ich glaub's nicht!", polish: "Nie wierzę!", example: "Das hat er wirklich gesagt? – Ich glaub's nicht!", level: "A2" },
        { german: "Kein Bock!", polish: "Nie chce mi się! / Nie mam ochoty!", example: "Ins Gym? – Kein Bock heute.", level: "A2" },
        { german: "Voll nervig!", polish: "Strasznie irytujące!", example: "Der Typ ist voll nervig.", level: "B1" },
        { german: "Das nervt!", polish: "To irytuje! / Wkurza!", example: "Schon wieder? Das nervt!", level: "A2" },
        { german: "Ich dreh durch!", polish: "Oszaleję! / Zwariuję!", example: "Noch eine Aufgabe? – Ich dreh durch!", level: "B1" },

        // Zgoda i brak zgody
        { german: "Passt!", polish: "Pasuje! / Okej!", example: "Treffen wir uns um 8? – Passt!", level: "A2" },
        { german: "Geht klar!", polish: "Spoko / Da radę / Można!", example: "Kannst du das erledigen? – Geht klar!", level: "A2" },
        { german: "Läuft!", polish: "Śmiga! / Ogarnięte!", example: "Alles erledigt? – Läuft!", level: "A2" },
        { german: "Ich bin dabei!", polish: "Jestem na tak! / Wchodzę w to!", example: "Party am Samstag? – Ich bin dabei!", level: "A2" },
        { german: "Stimmt genau!", polish: "Zgadza się! / Właśnie tak!", example: "Das ist so unfair. – Stimmt genau!", level: "A2" },
        { german: "Da hast du recht.", polish: "Masz rację.", example: "Das war blöd von mir. – Da hast du recht.", level: "A2" },
        { german: "Voll deine Meinung!", polish: "Dokładnie to samo myślę!", example: "Das finde ich auch total so! – Voll deine Meinung!", level: "B1" },
        { german: "Ich sehe das anders.", polish: "Ja to inaczej widzę.", example: "Ich sehe das ein bisschen anders.", level: "B1" },
        { german: "Na ja...", polish: "No... / Hmm...", example: "War's gut? – Na ja, geht so.", level: "A2" },
        { german: "Eigentlich nicht.", polish: "Właściwie to nie.", example: "Magst du das? – Eigentlich nicht.", level: "A2" },
        { german: "Naja, mal sehen.", polish: "Hmm, zobaczymy.", example: "Kommst du? – Naja, mal sehen.", level: "A2" },
        { german: "Keine Ahnung!", polish: "Nie mam pojęcia!", example: "Wo ist Tom? – Keine Ahnung!", level: "A1" },
        { german: "Das ist mir wurst.", polish: "Wszystko mi jedno.", example: "Kino oder Bar? – Das ist mir wurst.", level: "B1" },
        { german: "Scheiß drauf!", polish: "Olej to! / Daj spokój!", example: "Den Job? Scheiß drauf, ich kündige.", level: "B1" },

        // Plany i spotkania
        { german: "Was hast du vor?", polish: "Co planujesz? / Co masz w planach?", example: "Was hast du dieses Wochenende vor?", level: "A2" },
        { german: "Wann passt es dir?", polish: "Kiedy ci pasuje?", example: "Wann passt es dir am besten?", level: "A2" },
        { german: "Bin gleich da!", polish: "Już jadę! / Zaraz będę!", example: "Wo bist du? – Bin gleich da!", level: "A2" },
        { german: "Ich komme zu spät.", polish: "Spóźnię się.", example: "Hey, ich komme leider 10 Minuten zu spät!", level: "A2" },
        { german: "Ich muss absagen.", polish: "Muszę odwołać.", example: "Tut mir leid, ich muss heute absagen.", level: "B1" },
        { german: "Auf geht's!", polish: "No to lecimy! / Ruszamy!", example: "Alle fertig? – Auf geht's!", level: "A2" },
        { german: "Wo hängen wir ab?", polish: "Gdzie się kręcimy? / Gdzie się bawimy?", example: "Heute Abend – wo hängen wir ab?", level: "B1" },
        { german: "Lass uns irgendwas machen.", polish: "Zróbmy cokolwiek.", example: "Ich hab Langeweile – lass uns irgendwas machen.", level: "A2" },
        { german: "Ich bin raus.", polish: "Odpadam. / Nie idę.", example: "Sorry, heute bin ich raus.", level: "B1" },

        // Jedzenie i picie ze znajomymi
        { german: "Prost!", polish: "Na zdrowie!", example: "Alle haben ein Glas? – Prost!", level: "A1" },
        { german: "Auf uns!", polish: "Za nas!", example: "Prost! Auf uns!", level: "A1" },
        { german: "Ich schmeiß eine Runde!", polish: "Stawiam kolejkę!", example: "Ich schmeiß eine Runde – was wollt ihr?", level: "B1" },
        { german: "Wir teilen uns das.", polish: "Dzielimy się tym.", example: "Das ist zu viel – wir teilen uns das?", level: "A2" },
        { german: "Ich bin satt.", polish: "Jestem najedzony/a.", example: "Noch mehr? – Nein danke, ich bin satt.", level: "A1" },
        { german: "Das ist so lecker!", polish: "To jest takie pyszne!", example: "Probier mal – das ist so lecker!", level: "A1" },
        { german: "Hau rein!", polish: "Smacznego! / Jedz śmiało!", example: "Alles fertig! Hau rein!", level: "B1" },
        { german: "Noch eine Runde?", polish: "Jeszcze jedną kolejkę?", example: "Noch eine Runde Bier?", level: "A2" },
        { german: "Ich hol uns was.", polish: "Przyniosę nam coś.", example: "Warte hier, ich hol uns was zu trinken.", level: "A2" },

        // Imprezy i rozrywka
        { german: "Die Party war der Hammer!", polish: "Ta impreza była mega!", example: "Gestern – die Party war der Hammer!", level: "B1" },
        { german: "Ich war total platt.", polish: "Byłem/am totalnie rozłożony/a.", example: "Danach war ich total platt.", level: "B1" },
        { german: "Wir haben die Nacht durchgemacht.", polish: "Bawiliśmy się całą noc.", example: "Wir haben die Nacht durchgemacht – so ein Spaß!", level: "B2" },
        { german: "Das war ein guter Abend.", polish: "To był dobry wieczór.", example: "Danke für alles, das war ein guter Abend!", level: "A2" },
        { german: "Wir wiederholen das!", polish: "Powtarzamy to! / Robimy to znowu!", example: "Das war so toll – wir wiederholen das!", level: "B1" },

        // Uczucia i nastrój
        { german: "Ich freu mich so!", polish: "Tak się cieszę!", example: "Du kommst? – Ich freu mich so!", level: "A2" },
        { german: "Das macht mich fertig.", polish: "To mnie dobija.", example: "Diese Arbeit macht mich fertig.", level: "B1" },
        { german: "Ich bin am Limit.", polish: "Jestem na granicy wytrzymałości.", example: "Noch mehr Stress? – Ich bin wirklich am Limit.", level: "B2" },
        { german: "Das geht mir auf die Nerven.", polish: "To działa mi na nerwy.", example: "Das geht mir total auf die Nerven.", level: "B1" },
        { german: "Ich bin hin und weg.", polish: "Jestem zachwycony/a.", example: "Von diesem Song bin ich total hin und weg.", level: "B2" },
        { german: "Ich bin so müde.", polish: "Jestem taki/a zmęczony/a.", example: "Sorry, ich bin heute so müde.", level: "A1" },
        { german: "Du machst mich wahnsinnig.", polish: "Doprowadzasz mnie do szaleństwa.", example: "Du machst mich wahnsinnig – hör auf damit!", level: "B1" },

        // Codzienne sytuacje ze znajomymi
        { german: "Mach dir keinen Stress!", polish: "Nie stresuj się!", example: "Alles gut? – Mach dir keinen Stress!", level: "A2" },
        { german: "Das wird schon!", polish: "Jakoś to będzie! / Uda się!", example: "Ich bin nervös wegen morgen. – Das wird schon!", level: "B1" },
        { german: "Ich komme klar.", polish: "Daję radę.", example: "Brauchst du Hilfe? – Ich komme klar, danke.", level: "A2" },
        { german: "Wir schaffen das!", polish: "Damy radę! / My to zrobimy!", example: "Es ist viel, aber wir schaffen das!", level: "A2" },
        { german: "Ich habe keinen Plan.", polish: "Nie mam pojęcia / żadnego planu.", example: "Was machen wir? – Ich habe keinen Plan.", level: "A2" },
        { german: "Ich check das nicht.", polish: "Nie kapuję. / Nie rozumiem tego.", example: "Diese Aufgabe – ich check das einfach nicht.", level: "B1" },
        { german: "Das ist doch klar!", polish: "No to oczywiste!", example: "Warum bist du sauer? – Das ist doch klar!", level: "B1" },
        { german: "Jetzt mal ehrlich...", polish: "No dobra, szczerze mówiąc...", example: "Jetzt mal ehrlich – gefällt dir das wirklich?", level: "B1" },
        { german: "Was willst du damit sagen?", polish: "Co przez to masz na myśli?", example: "Hmm, was willst du damit sagen?", level: "B1" },
        { german: "Lass mich in Ruhe!", polish: "Daj mi spokój!", example: "Lass mich bitte kurz in Ruhe.", level: "A2" },
        { german: "Das läuft schief.", polish: "Coś idzie nie tak.", example: "Ich glaube, das läuft gerade schief.", level: "B2" },
        { german: "Ich steh dazu.", polish: "Stoję za tym. / Nie wypieram się.", example: "Ich steh dazu, das war meine Entscheidung.", level: "B2" },
        { german: "Ich bin voll dabei.", polish: "Jestem w pełni zaangażowany/a.", example: "Nächstes Projekt? – Ich bin voll dabei!", level: "B1" },
        { german: "Das ist nicht mein Problem.", polish: "To nie mój problem.", example: "Löst das selbst – das ist nicht mein Problem.", level: "B1" },
        { german: "Bin gleich fertig!", polish: "Już kończę! / Zaraz gotowe!", example: "Warte kurz – bin gleich fertig!", level: "A2" },
        { german: "Ich mach das kurz.", polish: "Szybko to zrobię.", example: "Warte, ich mach das kurz.", level: "A2" },
        { german: "Das klingt gut!", polish: "Brzmi dobrze!", example: "Treffen um 7? – Das klingt gut!", level: "A2" },
        { german: "Ich weiß auch nicht.", polish: "Sam/sama nie wiem.", example: "Was ist mit ihm los? – Ich weiß auch nicht.", level: "A2" },
        { german: "So ein Mist!", polish: "Co za pech! / Do licha!", example: "Ich hab den Bus verpasst. – So ein Mist!", level: "A2" },
        { german: "Das ist mir peinlich.", polish: "Wstyd mi.", example: "Ich hab das total vergessen – das ist mir so peinlich.", level: "B1" }
    ]
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
    },

    konjunktiv2: {
        title: 'Konjunktiv II',
        content: `
            <h3>Konjunktiv II – tryb przypuszczający</h3>
            <p>Używamy do wyrażania życzeń, hipotez i grzecznych próśb.</p>
            <ul>
                <li><strong>würde + Infinitiv:</strong> Ich würde gern reisen. (Chętnie bym podróżował.)</li>
                <li><strong>wäre:</strong> Wenn ich reich wäre... (Gdybym był bogaty...)</li>
                <li><strong>hätte:</strong> Wenn ich Zeit hätte... (Gdybym miał czas...)</li>
                <li><strong>könnte:</strong> Könntest du mir helfen? (Czy mógłbyś mi pomóc?)</li>
                <li><strong>sollte:</strong> Du solltest mehr schlafen. (Powinieneś więcej spać.)</li>
                <li><strong>müsste:</strong> Ich müsste lernen. (Powinienem się uczyć.)</li>
            </ul>
            <p><strong>Przykłady:</strong></p>
            <ul>
                <li>Ich würde gern Deutsch lernen.</li>
                <li>Wenn ich mehr Geld hätte, würde ich reisen.</li>
                <li>Das wäre toll!</li>
            </ul>
        `,
        exercises: [
            { question: 'Wenn ich Zeit _____, würde ich kommen.', answer: 'hätte', options: ['hätte', 'habe', 'hatte'] },
            { question: 'Er _____ gern ins Kino gehen.', answer: 'würde', options: ['würde', 'wird', 'wäre'] },
            { question: 'Das _____ wirklich schön!', answer: 'wäre', options: ['wäre', 'war', 'wird'] },
            { question: '_____ du mir bitte helfen?', answer: 'Könntest', options: ['Könntest', 'Kannst', 'Konntest'] }
        ]
    },

    passiv: {
        title: 'Passiv (strona bierna)',
        content: `
            <h3>Passiv – strona bierna</h3>
            <p>Strona bierna skupia się na czynności, nie na osobie wykonującej.</p>
            <h4>Präsens Passiv: werden + Partizip II</h4>
            <ul>
                <li>Das Buch <strong>wird gelesen</strong>. (Książka jest czytana.)</li>
                <li>Die Tür <strong>wird geöffnet</strong>. (Drzwi są otwierane.)</li>
                <li>Das Essen <strong>wird gekocht</strong>. (Jedzenie jest gotowane.)</li>
            </ul>
            <h4>Perfekt Passiv: sein + Partizip II + worden</h4>
            <ul>
                <li>Das Buch <strong>ist gelesen worden</strong>. (Książka została przeczytana.)</li>
                <li>Das Auto <strong>ist repariert worden</strong>. (Samochód został naprawiony.)</li>
            </ul>
            <h4>Odmiana "werden" w Präsens:</h4>
            <ul>
                <li>ich werde, du wirst, er/sie/es wird</li>
                <li>wir werden, ihr werdet, sie werden</li>
            </ul>
        `,
        exercises: [
            { question: 'Das Auto _____ repariert.', answer: 'wird', options: ['wird', 'ist', 'hat'] },
            { question: 'Die Briefe _____ geschrieben.', answer: 'werden', options: ['werden', 'sind', 'haben'] },
            { question: 'Das Haus _____ gebaut worden.', answer: 'ist', options: ['ist', 'wird', 'hat'] },
            { question: 'Der Kuchen _____ gegessen.', answer: 'wird', options: ['wird', 'ist', 'war'] }
        ]
    },

    komparativ: {
        title: 'Komparativ i Superlativ',
        content: `
            <h3>Komparativ i Superlativ – stopniowanie przymiotników</h3>
            <h4>Stopień wyższy (Komparativ): przymiotnik + -er</h4>
            <ul>
                <li>schnell → <strong>schneller</strong> (szybszy)</li>
                <li>groß → <strong>größer</strong> (większy)</li>
                <li>alt → <strong>älter</strong> (starszy)</li>
            </ul>
            <h4>Stopień najwyższy (Superlativ): am ...sten / der/die/das ...ste</h4>
            <ul>
                <li>schnell → <strong>am schnellsten</strong> / <strong>der schnellste</strong></li>
                <li>groß → <strong>am größten</strong> / <strong>der größte</strong></li>
                <li>alt → <strong>am ältesten</strong> / <strong>der älteste</strong></li>
            </ul>
            <h4>Nieregularne:</h4>
            <ul>
                <li>gut → besser → am besten (dobry → lepszy → najlepszy)</li>
                <li>viel → mehr → am meisten (dużo → więcej → najwięcej)</li>
                <li>gern → lieber → am liebsten (chętnie → chętniej → najchętniej)</li>
            </ul>
            <h4>Porównanie: so ... wie / ...er als</h4>
            <ul>
                <li>Er ist <strong>so groß wie</strong> ich. (Jest tak wysoki jak ja.)</li>
                <li>Sie ist <strong>größer als</strong> ich. (Ona jest wyższa niż ja.)</li>
            </ul>
        `,
        exercises: [
            { question: 'schnell → _____er', answer: 'schneller', options: ['schneller', 'schnellster', 'schnellerer'] },
            { question: 'gut → _____ (Komparativ)', answer: 'besser', options: ['besser', 'guter', 'am besten'] },
            { question: 'groß → am _____', answer: 'größten', options: ['größten', 'größten', 'großsten'] },
            { question: 'viel → _____ (Komparativ)', answer: 'mehr', options: ['mehr', 'vieler', 'am meisten'] }
        ]
    },

    nebensaetze: {
        title: 'Zdania podrzędne',
        content: `
            <h3>Nebensätze – zdania podrzędne</h3>
            <p><strong>Uwaga:</strong> w zdaniu podrzędnym czasownik idzie NA KONIEC!</p>
            <h4>weil (bo, ponieważ)</h4>
            <ul>
                <li>Ich lerne Deutsch, <strong>weil</strong> es interessant <em>ist</em>.</li>
                <li>Er schläft nicht, <strong>weil</strong> er Kaffee getrunken <em>hat</em>.</li>
            </ul>
            <h4>dass (że)</h4>
            <ul>
                <li>Ich glaube, <strong>dass</strong> du recht <em>hast</em>.</li>
                <li>Sie sagt, <strong>dass</strong> sie kommt <em>kommt</em>.</li>
            </ul>
            <h4>wenn (gdy, kiedy, jeżeli)</h4>
            <ul>
                <li><strong>Wenn</strong> ich Zeit <em>habe</em>, komme ich.</li>
                <li>Ruf mich an, <strong>wenn</strong> du fertig <em>bist</em>.</li>
            </ul>
            <h4>obwohl (chociaż, mimo że)</h4>
            <ul>
                <li>Er kommt, <strong>obwohl</strong> er müde <em>ist</em>.</li>
            </ul>
            <h4>damit (żeby, po to żeby)</h4>
            <ul>
                <li>Ich lerne, <strong>damit</strong> ich die Prüfung <em>bestehe</em>.</li>
            </ul>
        `,
        exercises: [
            { question: 'Ich lerne Deutsch, weil es interessant _____.', answer: 'ist', options: ['ist', 'sein', 'es ist'] },
            { question: 'Er sagt, dass er morgen _____.', answer: 'kommt', options: ['kommt', 'kommen', 'er kommt'] },
            { question: '_____ ich Zeit habe, lese ich.', answer: 'Wenn', options: ['Wenn', 'Weil', 'Dass'] },
            { question: 'Sie lernt, damit sie die Prüfung _____.', answer: 'besteht', options: ['besteht', 'bestehen', 'bestehe'] }
        ]
    },

    // ==================== ODMIANA CZASOWNIKÓW ====================

    verb_sein: [
        { german: "ich bin", polish: "ja jestem", example: "Ich bin müde.", level: "A1" },
        { german: "du bist", polish: "ty jesteś", example: "Du bist sehr nett.", level: "A1" },
        { german: "er/sie/es ist", polish: "on/ona/ono jest", example: "Er ist mein Freund.", level: "A1" },
        { german: "wir sind", polish: "my jesteśmy", example: "Wir sind zu Hause.", level: "A1" },
        { german: "ihr seid", polish: "wy jesteście", example: "Ihr seid spät dran.", level: "A1" },
        { german: "sie/Sie sind", polish: "oni są / Pan/Pani jest", example: "Sie sind sehr freundlich.", level: "A1" },
        { german: "ich war", polish: "ja byłem/byłam", example: "Ich war gestern krank.", level: "A1" },
        { german: "du warst", polish: "ty byłeś/byłaś", example: "Du warst nicht da.", level: "A1" },
        { german: "er/sie war", polish: "on/ona był/była", example: "Er war sehr müde.", level: "A1" },
        { german: "wir waren", polish: "my byliśmy", example: "Wir waren im Urlaub.", level: "A1" },
        { german: "ich bin gewesen", polish: "ja byłem (Perfekt)", example: "Ich bin noch nie in Berlin gewesen.", level: "A2" },
    ],

    verb_haben: [
        { german: "ich habe", polish: "ja mam", example: "Ich habe einen Hund.", level: "A1" },
        { german: "du hast", polish: "ty masz", example: "Du hast Glück!", level: "A1" },
        { german: "er/sie/es hat", polish: "on/ona/ono ma", example: "Er hat keine Zeit.", level: "A1" },
        { german: "wir haben", polish: "my mamy", example: "Wir haben Hunger.", level: "A1" },
        { german: "ihr habt", polish: "wy macie", example: "Ihr habt Recht.", level: "A1" },
        { german: "sie/Sie haben", polish: "oni mają / Pan ma", example: "Sie haben viel Erfahrung.", level: "A1" },
        { german: "ich hatte", polish: "ja miałem/miałam", example: "Ich hatte keine Ahnung.", level: "A1" },
        { german: "du hattest", polish: "ty miałeś/miałaś", example: "Du hattest Glück.", level: "A1" },
        { german: "er/sie hatte", polish: "on/ona miał/miała", example: "Sie hatte Fieber.", level: "A1" },
        { german: "wir hatten", polish: "my mieliśmy", example: "Wir hatten Spaß.", level: "A1" },
        { german: "ich habe gehabt", polish: "ja miałem (Perfekt)", example: "Ich habe viel Stress gehabt.", level: "A2" },
    ],

    verb_werden: [
        { german: "ich werde", polish: "ja będę / ja zostanę", example: "Ich werde Arzt.", level: "A1" },
        { german: "du wirst", polish: "ty będziesz", example: "Du wirst es schaffen!", level: "A1" },
        { german: "er/sie/es wird", polish: "on/ona będzie", example: "Es wird kalt.", level: "A1" },
        { german: "wir werden", polish: "my będziemy", example: "Wir werden heiraten.", level: "A1" },
        { german: "ihr werdet", polish: "wy będziecie", example: "Ihr werdet das bereuen.", level: "A2" },
        { german: "sie/Sie werden", polish: "oni będą", example: "Sie werden bald kommen.", level: "A1" },
        { german: "ich wurde", polish: "ja zostałem/zostałam", example: "Ich wurde krank.", level: "A2" },
        { german: "er/sie wurde", polish: "on/ona został/została", example: "Er wurde Lehrer.", level: "A2" },
    ],

    verb_gehen: [
        { german: "ich gehe", polish: "ja idę / ja chodzę", example: "Ich gehe zur Schule.", level: "A1" },
        { german: "du gehst", polish: "ty idziesz", example: "Wohin gehst du?", level: "A1" },
        { german: "er/sie geht", polish: "on/ona idzie", example: "Sie geht ins Kino.", level: "A1" },
        { german: "wir gehen", polish: "my idziemy", example: "Wir gehen einkaufen.", level: "A1" },
        { german: "ich ging", polish: "ja szedłem/szłam", example: "Ich ging gestern spazieren.", level: "A2" },
        { german: "ich bin gegangen", polish: "ja poszedłem (Perfekt)", example: "Ich bin nach Hause gegangen.", level: "A2" },
        { german: "Es geht mir gut", polish: "Dobrze mi idzie / Dobrze się czuję", example: "Wie geht's? – Es geht mir gut!", level: "A1" },
        { german: "Es geht nicht", polish: "Nie da się / Nie mogę", example: "Tut mir leid, es geht nicht.", level: "A1" },
    ],

    verb_kommen: [
        { german: "ich komme", polish: "ja przychodzę / ja pochodzę", example: "Ich komme aus Polen.", level: "A1" },
        { german: "du kommst", polish: "ty przychodzisz", example: "Wann kommst du?", level: "A1" },
        { german: "er/sie kommt", polish: "on/ona przychodzi", example: "Er kommt um acht.", level: "A1" },
        { german: "wir kommen", polish: "my przychodzimy", example: "Wir kommen gleich.", level: "A1" },
        { german: "ich kam", polish: "ja przyszedłem/przyszłam", example: "Ich kam zu spät.", level: "A2" },
        { german: "ich bin gekommen", polish: "ja przyszedłem (Perfekt)", example: "Ich bin gerade angekommen.", level: "A2" },
        { german: "Woher kommst du?", polish: "Skąd pochodzisz?", example: "Woher kommst du? – Aus Polen.", level: "A1" },
        { german: "Ich komme aus...", polish: "Pochodzę z...", example: "Ich komme aus Warschau.", level: "A1" },
    ],

    verb_machen: [
        { german: "ich mache", polish: "ja robię", example: "Ich mache Hausaufgaben.", level: "A1" },
        { german: "du machst", polish: "ty robisz", example: "Was machst du?", level: "A1" },
        { german: "er/sie macht", polish: "on/ona robi", example: "Er macht Sport.", level: "A1" },
        { german: "wir machen", polish: "my robimy", example: "Wir machen eine Pause.", level: "A1" },
        { german: "ich machte", polish: "ja robiłem/robiłam", example: "Ich machte Urlaub.", level: "A2" },
        { german: "ich habe gemacht", polish: "ja zrobiłem (Perfekt)", example: "Ich habe alles gemacht.", level: "A2" },
        { german: "Mach dir keine Sorgen!", polish: "Nie martw się!", example: "Mach dir keine Sorgen, es wird gut!", level: "A2" },
        { german: "Das macht nichts.", polish: "To nic nie szkodzi.", example: "Das macht nichts, kein Problem.", level: "A1" },
    ],

    verb_irregular: [
        { german: "fahren – fährt – fuhr – gefahren", polish: "jechać (pojazdem)", example: "Ich fahre mit dem Auto.", level: "A1" },
        { german: "lesen – liest – las – gelesen", polish: "czytać", example: "Sie liest ein Buch.", level: "A1" },
        { german: "schreiben – schreibt – schrieb – geschrieben", polish: "pisać", example: "Ich schreibe eine E-Mail.", level: "A1" },
        { german: "essen – isst – aß – gegessen", polish: "jeść", example: "Er isst gern Pizza.", level: "A1" },
        { german: "trinken – trinkt – trank – getrunken", polish: "pić", example: "Ich trinke Kaffee.", level: "A1" },
        { german: "schlafen – schläft – schlief – geschlafen", polish: "spać", example: "Ich schlafe acht Stunden.", level: "A1" },
        { german: "sehen – sieht – sah – gesehen", polish: "widzieć / oglądać", example: "Wir sehen einen Film.", level: "A1" },
        { german: "sprechen – spricht – sprach – gesprochen", polish: "mówić", example: "Sprechen Sie Deutsch?", level: "A1" },
        { german: "wissen – weiß – wusste – gewusst", polish: "wiedzieć", example: "Ich weiß es nicht.", level: "A1" },
        { german: "nehmen – nimmt – nahm – genommen", polish: "brać", example: "Ich nehme den Bus.", level: "A1" },
        { german: "geben – gibt – gab – gegeben", polish: "dawać", example: "Kannst du mir das geben?", level: "A1" },
        { german: "stehen – steht – stand – gestanden", polish: "stać", example: "Er steht an der Haltestelle.", level: "A1" },
        { german: "finden – findet – fand – gefunden", polish: "znajdować / uważać", example: "Ich finde das interessant.", level: "A1" },
        { german: "laufen – läuft – lief – gelaufen", polish: "biec / chodzić pieszo", example: "Er läuft jeden Tag.", level: "A1" },
        { german: "tragen – trägt – trug – getragen", polish: "nosić / dźwigać", example: "Sie trägt eine Tasche.", level: "A1" },
        { german: "treffen – trifft – traf – getroffen", polish: "spotykać", example: "Ich treffe meine Freunde.", level: "A1" },
        { german: "helfen – hilft – half – geholfen", polish: "pomagać", example: "Kannst du mir helfen?", level: "A1" },
        { german: "heißen – heißt – hieß – geheißen", polish: "nazywać się", example: "Wie heißt du?", level: "A1" },
        { german: "bleiben – bleibt – blieb – geblieben", polish: "zostawać / pozostawać", example: "Bleib hier!", level: "A1" },
        { german: "bringen – bringt – brachte – gebracht", polish: "przynosić", example: "Kannst du das mitbringen?", level: "A1" },
    ],

    modal_verbs: [
        { german: "ich kann", polish: "ja mogę / ja umiem", example: "Ich kann Deutsch sprechen.", level: "A1" },
        { german: "du kannst", polish: "ty możesz / ty umiesz", example: "Kannst du mir helfen?", level: "A1" },
        { german: "er/sie kann", polish: "on/ona może / umie", example: "Sie kann gut kochen.", level: "A1" },
        { german: "wir können", polish: "my możemy", example: "Wir können morgen kommen.", level: "A1" },
        { german: "ich muss", polish: "ja muszę", example: "Ich muss jetzt gehen.", level: "A1" },
        { german: "du musst", polish: "ty musisz", example: "Du musst mehr schlafen.", level: "A1" },
        { german: "er/sie muss", polish: "on/ona musi", example: "Er muss arbeiten.", level: "A1" },
        { german: "ich will", polish: "ja chcę", example: "Ich will Deutsch lernen.", level: "A1" },
        { german: "du willst", polish: "ty chcesz", example: "Was willst du essen?", level: "A1" },
        { german: "er/sie will", polish: "on/ona chce", example: "Er will Arzt werden.", level: "A1" },
        { german: "ich soll", polish: "ja mam (obowiązek)", example: "Ich soll um 8 Uhr da sein.", level: "A2" },
        { german: "du sollst", polish: "ty powinieneś / masz", example: "Du sollst das nicht tun.", level: "A2" },
        { german: "ich darf", polish: "ja mogę (mam pozwolenie)", example: "Darf ich hier rauchen?", level: "A1" },
        { german: "du darfst", polish: "ty możesz (wolno ci)", example: "Du darfst nicht parken.", level: "A1" },
        { german: "ich möchte", polish: "ja chciałbym/chciałabym", example: "Ich möchte bitte zahlen.", level: "A1" },
        { german: "du möchtest", polish: "ty chciałbyś/chciałabyś", example: "Was möchtest du trinken?", level: "A1" },
        { german: "ich mag", polish: "ja lubię", example: "Ich mag Musik.", level: "A1" },
        { german: "du magst", polish: "ty lubisz", example: "Magst du Schokolade?", level: "A1" },
    ],

    separable_verbs: [
        { german: "aufstehen", polish: "wstawać", example: "Ich stehe um 7 Uhr auf.", level: "A1" },
        { german: "aufmachen", polish: "otwierać", example: "Mach bitte das Fenster auf!", level: "A1" },
        { german: "zumachen", polish: "zamykać", example: "Mach die Tür zu!", level: "A1" },
        { german: "anrufen", polish: "dzwonić (telefonicznie)", example: "Ich rufe dich morgen an.", level: "A1" },
        { german: "ankommen", polish: "przyjeżdżać / przychodzić", example: "Der Zug kommt um 9 an.", level: "A1" },
        { german: "abfahren", polish: "odjeżdżać", example: "Der Bus fährt um 10 ab.", level: "A1" },
        { german: "einkaufen", polish: "robić zakupy", example: "Ich kaufe heute ein.", level: "A1" },
        { german: "fernsehen", polish: "oglądać telewizję", example: "Ich sehe gern fern.", level: "A1" },
        { german: "mitkommen", polish: "iść razem / przyjść", example: "Kommst du mit?", level: "A1" },
        { german: "zurückkommen", polish: "wracać", example: "Wann kommst du zurück?", level: "A1" },
        { german: "kennenlernen", polish: "poznawać (kogoś)", example: "Schön, Sie kennenzulernen!", level: "A1" },
        { german: "ausgehen", polish: "wychodzić / imprezować", example: "Wir gehen heute Abend aus.", level: "A2" },
        { german: "anfangen", polish: "zaczynać", example: "Wann fängt der Film an?", level: "A1" },
        { german: "aufhören", polish: "przestawać / kończyć", example: "Hör auf zu rauchen!", level: "A2" },
        { german: "vorstellen", polish: "przedstawiać", example: "Darf ich mich vorstellen?", level: "A1" },
        { german: "vorbereiten", polish: "przygotowywać", example: "Ich bereite das Essen vor.", level: "A2" },
        { german: "teilnehmen", polish: "uczestniczyć", example: "Ich nehme am Kurs teil.", level: "B1" },
        { german: "aufpassen", polish: "uważać / pilnować", example: "Pass auf dich auf!", level: "A2" },
    ],

    // ==================== ZWROTY CODZIENNE ====================

    phrases_shopping: [
        { german: "Was kostet das?", polish: "Ile to kosztuje?", example: "Entschuldigung, was kostet das?", level: "A1" },
        { german: "Wie viel kostet...?", polish: "Ile kosztuje...?", example: "Wie viel kostet ein Ticket?", level: "A1" },
        { german: "Das ist zu teuer.", polish: "To jest za drogie.", example: "Das ist leider zu teuer für mich.", level: "A1" },
        { german: "Ich möchte... kaufen.", polish: "Chciałbym/am kupić...", example: "Ich möchte Brot kaufen.", level: "A1" },
        { german: "Haben Sie...?", polish: "Czy ma Pan/Pani...?", example: "Haben Sie das in Größe 42?", level: "A1" },
        { german: "Ich schaue nur.", polish: "Tylko patrzę (bez kupowania).", example: "Danke, ich schaue nur.", level: "A1" },
        { german: "Kann ich bezahlen?", polish: "Czy mogę zapłacić?", example: "Entschuldigung, kann ich jetzt bezahlen?", level: "A1" },
        { german: "Mit Karte, bitte.", polish: "Kartą, proszę.", example: "Mit Karte oder bar? – Mit Karte, bitte.", level: "A1" },
        { german: "Bar, bitte.", polish: "Gotówką, proszę.", example: "Ich zahle bar, bitte.", level: "A1" },
        { german: "Kann ich das umtauschen?", polish: "Czy mogę to wymienić?", example: "Kann ich das umtauschen? Es passt nicht.", level: "A2" },
        { german: "Die Quittung, bitte.", polish: "Paragon, proszę.", example: "Kann ich bitte die Quittung haben?", level: "A1" },
        { german: "Haben Sie etwas Günstigeres?", polish: "Czy ma Pan/Pani coś tańszego?", example: "Das gefällt mir, aber haben Sie etwas Günstigeres?", level: "A2" },
        { german: "Das nehme ich.", polish: "Wezmę to.", example: "Das gefällt mir sehr, das nehme ich!", level: "A1" },
        { german: "ein Sonderangebot", polish: "oferta specjalna / promocja", example: "Das ist ein Sonderangebot – 50% Rabatt!", level: "A2" },
        { german: "der Rabatt", polish: "rabat / zniżka", example: "Gibt es einen Rabatt für Studenten?", level: "A2" },
    ],

    phrases_restaurant: [
        { german: "Einen Tisch für zwei, bitte.", polish: "Stolik dla dwóch, proszę.", example: "Guten Abend! Einen Tisch für zwei, bitte.", level: "A1" },
        { german: "Haben Sie einen Tisch reserviert?", polish: "Czy Pan/Pani zarezerwował/a stolik?", example: "Haben Sie einen Tisch reserviert?", level: "A1" },
        { german: "Ich möchte bestellen.", polish: "Chciałbym/am zamówić.", example: "Wir möchten jetzt bestellen.", level: "A1" },
        { german: "Was empfehlen Sie?", polish: "Co Pan/Pani poleca?", example: "Was empfehlen Sie heute?", level: "A1" },
        { german: "Die Speisekarte, bitte.", polish: "Menu, proszę.", example: "Entschuldigung! Die Speisekarte, bitte.", level: "A1" },
        { german: "Ich bin Vegetarier.", polish: "Jestem wegetarianinem.", example: "Ich bin Vegetarier – haben Sie etwas ohne Fleisch?", level: "A1" },
        { german: "Ohne..., bitte.", polish: "Bez..., proszę.", example: "Ohne Zwiebeln, bitte.", level: "A1" },
        { german: "Die Rechnung, bitte.", polish: "Rachunek, proszę.", example: "Entschuldigung, die Rechnung bitte!", level: "A1" },
        { german: "Getrennt oder zusammen?", polish: "Osobno czy razem?", example: "Zahlen Sie getrennt oder zusammen?", level: "A1" },
        { german: "Stimmt so!", polish: "Reszty nie trzeba!", example: "Das macht 12 Euro. – Stimmt so!", level: "A1" },
        { german: "Es hat sehr gut geschmeckt!", polish: "Bardzo smakowało!", example: "Danke! Es hat sehr gut geschmeckt!", level: "A1" },
        { german: "Ich bin allergisch gegen...", polish: "Jestem uczulony/a na...", example: "Ich bin allergisch gegen Nüsse.", level: "A2" },
    ],

    phrases_transport: [
        { german: "Wann fährt der nächste Bus?", polish: "Kiedy jedzie następny autobus?", example: "Entschuldigung, wann fährt der nächste Bus?", level: "A1" },
        { german: "Wo ist der Bahnhof?", polish: "Gdzie jest dworzec?", example: "Entschuldigung, wo ist der Bahnhof?", level: "A1" },
        { german: "Eine Fahrkarte nach..., bitte.", polish: "Bilet do..., proszę.", example: "Eine Fahrkarte nach Berlin, bitte.", level: "A1" },
        { german: "Einfach oder hin und zurück?", polish: "W jedną stronę czy w obie strony?", example: "Einfach oder hin und zurück?", level: "A1" },
        { german: "Auf welchem Gleis?", polish: "Na którym peronie?", example: "Auf welchem Gleis fährt der Zug ab?", level: "A1" },
        { german: "Der Zug hat Verspätung.", polish: "Pociąg ma opóźnienie.", example: "Der Zug nach München hat 20 Minuten Verspätung.", level: "A1" },
        { german: "Wo muss ich umsteigen?", polish: "Gdzie muszę się przesiadać?", example: "Muss ich umsteigen? – Ja, in Frankfurt.", level: "A1" },
        { german: "Ist dieser Platz frei?", polish: "Czy to miejsce jest wolne?", example: "Entschuldigung, ist dieser Platz frei?", level: "A1" },
        { german: "Wie lange dauert die Fahrt?", polish: "Jak długo trwa podróż?", example: "Wie lange dauert die Fahrt nach Hamburg?", level: "A1" },
        { german: "Können Sie mir helfen?", polish: "Czy może mi Pan/Pani pomóc?", example: "Entschuldigung, können Sie mir helfen?", level: "A1" },
    ],

    phrases_phone: [
        { german: "Hallo, hier ist...", polish: "Hej, tu mówi...", example: "Hallo, hier ist Maria Kowalski.", level: "A1" },
        { german: "Kann ich bitte mit... sprechen?", polish: "Czy mogę rozmawiać z...?", example: "Kann ich bitte mit Herrn Müller sprechen?", level: "A1" },
        { german: "Einen Moment, bitte.", polish: "Chwileczkę, proszę.", example: "Einen Moment, bitte, ich verbinde Sie.", level: "A1" },
        { german: "Er/Sie ist gerade nicht da.", polish: "On/Ona jest chwilowo niedostępny/a.", example: "Tut mir leid, er ist gerade nicht da.", level: "A1" },
        { german: "Kann ich eine Nachricht hinterlassen?", polish: "Czy mogę zostawić wiadomość?", example: "Kann ich eine Nachricht hinterlassen?", level: "A2" },
        { german: "Ich rufe später zurück.", polish: "Zadzwonię później.", example: "Danke, ich rufe später zurück.", level: "A1" },
        { german: "Auf Wiederhören!", polish: "Do usłyszenia!", example: "Danke, auf Wiederhören!", level: "A1" },
        { german: "Ich verstehe Sie nicht.", polish: "Nie rozumiem Pana/Pani.", example: "Tut mir leid, ich verstehe Sie nicht. Könnten Sie langsamer sprechen?", level: "A1" },
        { german: "Könnten Sie das wiederholen?", polish: "Czy mógłby Pan/Pani to powtórzyć?", example: "Könnten Sie das bitte wiederholen?", level: "A1" },
        { german: "Die Verbindung ist schlecht.", polish: "Połączenie jest złe.", example: "Tut mir leid, die Verbindung ist sehr schlecht.", level: "A2" },
    ],

    phrases_learning: [
        { german: "Ich verstehe nicht.", polish: "Nie rozumiem.", example: "Entschuldigung, ich verstehe das nicht.", level: "A1" },
        { german: "Können Sie das bitte erklären?", polish: "Czy może Pan/Pani to wyjaśnić?", example: "Können Sie das bitte noch einmal erklären?", level: "A1" },
        { german: "Was bedeutet...?", polish: "Co znaczy...?", example: "Was bedeutet das Wort 'Heimweh'?", level: "A1" },
        { german: "Wie sagt man... auf Deutsch?", polish: "Jak się mówi... po niemiecku?", example: "Wie sagt man 'thank you' auf Deutsch?", level: "A1" },
        { german: "Ich lerne Deutsch.", polish: "Uczę się niemieckiego.", example: "Ich lerne seit einem Jahr Deutsch.", level: "A1" },
        { german: "Sprechen Sie langsamer, bitte.", polish: "Proszę mówić wolniej.", example: "Könnten Sie bitte langsamer sprechen?", level: "A1" },
        { german: "Wie schreibt man das?", polish: "Jak się to pisze?", example: "Wie schreibt man 'Straße'?", level: "A1" },
        { german: "Können Sie das buchstabieren?", polish: "Czy może Pan/Pani przeliterować?", example: "Können Sie das bitte buchstabieren?", level: "A1" },
        { german: "Ich mache einen Fehler.", polish: "Popełniam błąd.", example: "Verzeihung, ich habe einen Fehler gemacht.", level: "A1" },
        { german: "Mein Deutsch ist nicht so gut.", polish: "Mój niemiecki nie jest najlepszy.", example: "Entschuldigung, mein Deutsch ist nicht so gut.", level: "A1" },
    ],

    // ==================== GRAMATYKA - RODZAJNIKI ====================

    articles_der: [
        { german: "der Mann", polish: "mężczyzna (r.m.)", example: "Der Mann arbeitet hier.", level: "A1" },
        { german: "der Vater", polish: "ojciec (r.m.)", example: "Der Vater liest die Zeitung.", level: "A1" },
        { german: "der Bruder", polish: "brat (r.m.)", example: "Mein Bruder ist sehr groß.", level: "A1" },
        { german: "der Sohn", polish: "syn (r.m.)", example: "Der Sohn ist 10 Jahre alt.", level: "A1" },
        { german: "der Hund", polish: "pies (r.m.)", example: "Der Hund schläft.", level: "A1" },
        { german: "der Tisch", polish: "stół (r.m.)", example: "Der Tisch ist rund.", level: "A1" },
        { german: "der Stuhl", polish: "krzesło (r.m.)", example: "Der Stuhl ist bequem.", level: "A1" },
        { german: "der Zug", polish: "pociąg (r.m.)", example: "Der Zug fährt nach Berlin.", level: "A1" },
        { german: "der Bus", polish: "autobus (r.m.)", example: "Der Bus kommt um 8 Uhr.", level: "A1" },
        { german: "der Bahnhof", polish: "dworzec (r.m.)", example: "Der Bahnhof ist groß.", level: "A1" },
        { german: "der Supermarkt", polish: "supermarket (r.m.)", example: "Der Supermarkt ist geöffnet.", level: "A1" },
        { german: "der Kaffee", polish: "kawa (r.m.)", example: "Der Kaffee schmeckt gut.", level: "A1" },
        { german: "der Tee", polish: "herbata (r.m.)", example: "Der Tee ist heiß.", level: "A1" },
        { german: "der Apfel", polish: "jabłko (r.m.)", example: "Der Apfel ist rot.", level: "A1" },
        { german: "der Kuchen", polish: "ciasto (r.m.)", example: "Der Kuchen schmeckt lecker!", level: "A1" },
        { german: "der Arzt", polish: "lekarz (r.m.)", example: "Der Arzt kommt gleich.", level: "A1" },
        { german: "der Lehrer", polish: "nauczyciel (r.m.)", example: "Der Lehrer erklärt gut.", level: "A1" },
        { german: "der Freund", polish: "przyjaciel / chłopak (r.m.)", example: "Mein Freund heißt Tom.", level: "A1" },
        { german: "der Tag", polish: "dzień (r.m.)", example: "Schönen Tag noch!", level: "A1" },
        { german: "der Monat", polish: "miesiąc (r.m.)", example: "Im nächsten Monat.", level: "A1" },
    ],

    articles_die: [
        { german: "die Frau", polish: "kobieta (r.ż.)", example: "Die Frau lächelt.", level: "A1" },
        { german: "die Mutter", polish: "matka (r.ż.)", example: "Die Mutter kocht.", level: "A1" },
        { german: "die Schwester", polish: "siostra (r.ż.)", example: "Meine Schwester ist Ärztin.", level: "A1" },
        { german: "die Tochter", polish: "córka (r.ż.)", example: "Die Tochter spielt Klavier.", level: "A1" },
        { german: "die Katze", polish: "kot (r.ż.)", example: "Die Katze schläft auf dem Sofa.", level: "A1" },
        { german: "die Schule", polish: "szkoła (r.ż.)", example: "Die Schule beginnt um 8 Uhr.", level: "A1" },
        { german: "die Sprache", polish: "język (r.ż.)", example: "Die deutsche Sprache ist schön.", level: "A1" },
        { german: "die Stadt", polish: "miasto (r.ż.)", example: "Die Stadt ist sehr groß.", level: "A1" },
        { german: "die Straße", polish: "ulica (r.ż.)", example: "Die Straße ist voll.", level: "A1" },
        { german: "die Uhr", polish: "zegarek / godzina (r.ż.)", example: "Wie spät ist die Uhr?", level: "A1" },
        { german: "die Arbeit", polish: "praca (r.ż.)", example: "Die Arbeit macht Spaß.", level: "A1" },
        { german: "die Freundin", polish: "przyjaciółka / dziewczyna (r.ż.)", example: "Meine Freundin heißt Anna.", level: "A1" },
        { german: "die Familie", polish: "rodzina (r.ż.)", example: "Die Familie ist wichtig.", level: "A1" },
        { german: "die Küche", polish: "kuchnia (r.ż.)", example: "Die Küche ist klein.", level: "A1" },
        { german: "die Tasche", polish: "torba (r.ż.)", example: "Die Tasche ist schwer.", level: "A1" },
        { german: "die Zeitung", polish: "gazeta (r.ż.)", example: "Er liest die Zeitung.", level: "A1" },
        { german: "die Musik", polish: "muzyka (r.ż.)", example: "Die Musik ist laut.", level: "A1" },
        { german: "die Zeit", polish: "czas (r.ż.)", example: "Ich habe keine Zeit.", level: "A1" },
        { german: "die Nacht", polish: "noc (r.ż.)", example: "Die Nacht ist kalt.", level: "A1" },
        { german: "die Woche", polish: "tydzień (r.ż.)", example: "Diese Woche bin ich beschäftigt.", level: "A1" },
    ],

    articles_das: [
        { german: "das Kind", polish: "dziecko (r.n.)", example: "Das Kind spielt draußen.", level: "A1" },
        { german: "das Baby", polish: "niemowlę / bobas (r.n.)", example: "Das Baby schläft.", level: "A1" },
        { german: "das Buch", polish: "książka (r.n.)", example: "Das Buch ist interessant.", level: "A1" },
        { german: "das Haus", polish: "dom (r.n.)", example: "Das Haus ist groß.", level: "A1" },
        { german: "das Auto", polish: "samochód (r.n.)", example: "Das Auto ist neu.", level: "A1" },
        { german: "das Wasser", polish: "woda (r.n.)", example: "Das Wasser ist kalt.", level: "A1" },
        { german: "das Brot", polish: "chleb (r.n.)", example: "Das Brot ist frisch.", level: "A1" },
        { german: "das Bier", polish: "piwo (r.n.)", example: "Das Bier ist kalt.", level: "A1" },
        { german: "das Zimmer", polish: "pokój (r.n.)", example: "Das Zimmer ist ordentlich.", level: "A1" },
        { german: "das Fenster", polish: "okno (r.n.)", example: "Das Fenster ist offen.", level: "A1" },
        { german: "das Telefon", polish: "telefon (r.n.)", example: "Das Telefon klingelt.", level: "A1" },
        { german: "das Restaurant", polish: "restauracja (r.n.)", example: "Das Restaurant ist teuer.", level: "A1" },
        { german: "das Hotel", polish: "hotel (r.n.)", example: "Das Hotel liegt zentral.", level: "A1" },
        { german: "das Wetter", polish: "pogoda (r.n.)", example: "Das Wetter ist schön heute.", level: "A1" },
        { german: "das Jahr", polish: "rok (r.n.)", example: "Das Jahr hat 12 Monate.", level: "A1" },
        { german: "das Geld", polish: "pieniądze (r.n.)", example: "Das Geld liegt auf dem Tisch.", level: "A1" },
        { german: "das Essen", polish: "jedzenie (r.n.)", example: "Das Essen schmeckt gut.", level: "A1" },
        { german: "das Problem", polish: "problem (r.n.)", example: "Das ist kein Problem!", level: "A1" },
        { german: "das Wort", polish: "słowo (r.n.)", example: "Das Wort kenne ich nicht.", level: "A1" },
        { german: "das Land", polish: "kraj / wieś (r.n.)", example: "Deutschland ist ein schönes Land.", level: "A1" },
    ],

    // ==================== SŁOWNICTWO TEMATYCZNE ====================

    verbs_daily: [
        { german: "aufwachen", polish: "budzić się", example: "Ich wache um 7 Uhr auf.", level: "A1" },
        { german: "duschen", polish: "brać prysznic", example: "Ich dusche jeden Morgen.", level: "A1" },
        { german: "frühstücken", polish: "jeść śniadanie", example: "Ich frühstücke um acht.", level: "A1" },
        { german: "arbeiten", polish: "pracować", example: "Ich arbeite von 9 bis 17 Uhr.", level: "A1" },
        { german: "kochen", polish: "gotować", example: "Ich koche gern.", level: "A1" },
        { german: "putzen", polish: "sprzątać / myć", example: "Ich putze die Küche.", level: "A1" },
        { german: "waschen", polish: "prać / myć", example: "Ich wasche die Wäsche.", level: "A1" },
        { german: "spazieren gehen", polish: "iść na spacer", example: "Ich gehe jeden Tag spazieren.", level: "A1" },
        { german: "schlafen gehen", polish: "iść spać", example: "Ich gehe um 22 Uhr schlafen.", level: "A1" },
        { german: "einkaufen gehen", polish: "iść na zakupy", example: "Ich gehe samstags einkaufen.", level: "A1" },
        { german: "lernen", polish: "uczyć się", example: "Ich lerne jeden Tag Deutsch.", level: "A1" },
        { german: "üben", polish: "ćwiczyć", example: "Ich übe Gitarre.", level: "A1" },
        { german: "telefonieren", polish: "rozmawiać przez telefon", example: "Ich telefoniere mit meiner Mutter.", level: "A1" },
        { german: "schreiben", polish: "pisać", example: "Ich schreibe eine E-Mail.", level: "A1" },
        { german: "lesen", polish: "czytać", example: "Ich lese ein Buch.", level: "A1" },
        { german: "hören", polish: "słuchać", example: "Ich höre Musik.", level: "A1" },
        { german: "antworten", polish: "odpowiadać", example: "Ich antworte auf die Frage.", level: "A1" },
        { german: "fragen", polish: "pytać", example: "Darf ich fragen?", level: "A1" },
        { german: "warten", polish: "czekać", example: "Ich warte auf den Bus.", level: "A1" },
        { german: "bezahlen", polish: "płacić", example: "Ich bezahle mit Karte.", level: "A1" },
    ],

    adjectives_common: [
        { german: "groß", polish: "duży / wysoki", example: "Das Haus ist sehr groß.", level: "A1" },
        { german: "klein", polish: "mały / niski", example: "Das Kind ist noch klein.", level: "A1" },
        { german: "neu", polish: "nowy", example: "Ich habe ein neues Auto.", level: "A1" },
        { german: "alt", polish: "stary / w podeszłym wieku", example: "Das Buch ist sehr alt.", level: "A1" },
        { german: "schön", polish: "piękny / ładny", example: "Das Wetter ist schön.", level: "A1" },
        { german: "hässlich", polish: "brzydki", example: "Das Bild ist hässlich.", level: "A1" },
        { german: "teuer", polish: "drogi", example: "Das ist zu teuer!", level: "A1" },
        { german: "billig / günstig", polish: "tani", example: "Das ist sehr günstig!", level: "A1" },
        { german: "schnell", polish: "szybki", example: "Das Auto ist sehr schnell.", level: "A1" },
        { german: "langsam", polish: "wolny / powolny", example: "Sprechen Sie bitte langsam.", level: "A1" },
        { german: "leicht", polish: "lekki / łatwy", example: "Die Aufgabe ist leicht.", level: "A1" },
        { german: "schwer / schwierig", polish: "ciężki / trudny", example: "Deutsch ist manchmal schwierig.", level: "A1" },
        { german: "lecker", polish: "smaczny / pyszny", example: "Das Essen ist sehr lecker!", level: "A1" },
        { german: "kalt", polish: "zimny / zimno", example: "Das Wasser ist kalt.", level: "A1" },
        { german: "warm", polish: "ciepły / ciepło", example: "Es ist warm draußen.", level: "A1" },
        { german: "heiß", polish: "gorący / gorąco", example: "Der Kaffee ist heiß.", level: "A1" },
        { german: "müde", polish: "zmęczony", example: "Ich bin sehr müde.", level: "A1" },
        { german: "glücklich", polish: "szczęśliwy", example: "Ich bin so glücklich!", level: "A1" },
        { german: "traurig", polish: "smutny", example: "Warum bist du traurig?", level: "A1" },
        { german: "krank", polish: "chory", example: "Ich bin leider krank.", level: "A1" },
        { german: "gesund", polish: "zdrowy", example: "Bleib gesund!", level: "A1" },
        { german: "interessant", polish: "interesujący", example: "Das ist sehr interessant!", level: "A1" },
        { german: "langweilig", polish: "nudny", example: "Der Film war langweilig.", level: "A1" },
        { german: "wichtig", polish: "ważny", example: "Das ist sehr wichtig.", level: "A1" },
        { german: "richtig", polish: "właściwy / poprawny", example: "Das ist richtig!", level: "A1" },
        { german: "falsch", polish: "błędny / zły", example: "Das ist leider falsch.", level: "A1" },
        { german: "frei", polish: "wolny / bezpłatny", example: "Ist dieser Platz frei?", level: "A1" },
        { german: "fertig", polish: "gotowy / skończony", example: "Ich bin fertig!", level: "A1" },
    ],

    prepositions_cases: [
        { german: "mit + Dativ", polish: "z (czymś) + D", example: "Ich fahre mit dem Bus.", level: "A1" },
        { german: "in + Dativ (miejsce)", polish: "w + D (gdzie?)", example: "Ich bin in der Schule.", level: "A1" },
        { german: "in + Akkusativ (kierunek)", polish: "do + A (dokąd?)", example: "Ich gehe in die Schule.", level: "A1" },
        { german: "auf + Dativ (miejsce)", polish: "na + D (gdzie?)", example: "Das Buch liegt auf dem Tisch.", level: "A1" },
        { german: "auf + Akkusativ (kierunek)", polish: "na + A (dokąd?)", example: "Leg das Buch auf den Tisch!", level: "A1" },
        { german: "an + Dativ (miejsce)", polish: "przy / nad + D (gdzie?)", example: "Er sitzt an dem Tisch.", level: "A1" },
        { german: "an + Akkusativ (kierunek)", polish: "do / nad + A (dokąd?)", example: "Er geht an den Tisch.", level: "A1" },
        { german: "zu + Dativ", polish: "do (osoby/miejsca) + D", example: "Ich gehe zum Arzt.", level: "A1" },
        { german: "von + Dativ", polish: "od / z + D", example: "Ich komme von der Arbeit.", level: "A1" },
        { german: "bei + Dativ", polish: "u / przy + D", example: "Ich bin bei meiner Freundin.", level: "A1" },
        { german: "nach + Dativ", polish: "do (miast/krajów) / po + D", example: "Ich fahre nach Berlin.", level: "A1" },
        { german: "aus + Dativ", polish: "z / ze + D (skąd?)", example: "Ich komme aus Polen.", level: "A1" },
        { german: "über + Akkusativ", polish: "przez / ponad + A", example: "Wir sprechen über das Problem.", level: "A2" },
        { german: "durch + Akkusativ", polish: "przez + A", example: "Wir gehen durch den Park.", level: "A2" },
        { german: "für + Akkusativ", polish: "dla / za + A", example: "Das ist für dich.", level: "A1" },
        { german: "ohne + Akkusativ", polish: "bez + A", example: "Ohne Kaffee kann ich nicht leben!", level: "A1" },
        { german: "gegen + Akkusativ", polish: "przeciw / o (godzinie) + A", example: "Ich bin gegen 8 Uhr da.", level: "A2" },
        { german: "seit + Dativ", polish: "od (czasu) + D", example: "Ich lerne seit einem Jahr Deutsch.", level: "A2" },
    ],
};

// Alias dla kompatybilności z app.js
const wordDatabase = germanWords;

// Eksport dla użycia w app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = germanWords;
}
