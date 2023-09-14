const sampleFlashcards = [
    {
        id: 1,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Farben', //Vocabulary - Colors,
        question: 'Was ist die Farbe des Himmels?',
        answer: 'Blau',
    },
    {
        id: 2,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Lebensmittel', //Vocabulary - Food
        question: 'Was ist das Gegenteil von süß?',
        answer: 'Salzig',
    },
    {
        id: 3,
        category: 'Grammatik',
        subcategory: 'Grammatik - Artikel', //Grammar - Articles
        question: 'Welcher Artikel passt? ___ Apfel.',
        answer: 'Der',
    },
    {
        id: 4,
        category: 'Kultur',
        subcategory: 'Kultur - Festivals', //Culture - Festivals
        question: 'Welches Fest findet im Oktober statt?',
        answer: 'Oktoberfest',
    },
    {
        id: 5,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Wetter', //Vocabulary - Weather
        question: "Wie sagt man 'rain' auf Deutsch?",
        answer: 'Regen',
    },
    {
        id: 6,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Körperteile', //Vocabulary - Body Parts
        question: 'Welches Körperteil hört?',
        answer: 'Das Ohr',
    },
    {
        id: 7,
        category: 'Grammatik',
        subcategory: 'Grammatik - Plural', //Grammar - Plural
        question: "Was ist der Plural von 'Haus'?",
        answer: 'Häuser',
    },
    {
        id: 8,
        category: 'Kultur',
        subcategory: 'Kultur - Lebensmittel', //Culture - Food
        question: 'Was ist ein typisches deutsches Frühstück?',
        answer: 'Brot mit Marmelade, Wurst oder Käse',
    },
    {
        id: 9,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Beim Arzt', //Vocabulary - At the Doctor's
        question: 'Was sagt man, wenn man Schmerzen hat?',
        answer: 'Es tut weh.',
    },
    {
        id: 10,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Zeit', //Vocabulary - Time
        question: 'Wie fragt man nach der Uhrzeit?',
        answer: 'Wie spät ist es?',
    },
    {
        id: 11,
        category: 'Grammatik',
        subcategory: 'Grammatik - Präpositionen', //Grammar - Prepositions
        question: 'Vervollständige den Satz: Ich warte ___ den Bus.',
        answer: 'auf',
    },
    {
        id: 12,
        category: 'Kultur',
        subcategory: 'Kultur - Städte', //Culture - Cities
        question: 'In welchem Bundesland liegt Köln?',
        answer: 'Nordrhein-Westfalen',
    },
    {
        id: 13,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Kleidung', //Vocabulary - Clothing
        question: 'Was trägt man auf dem Kopf?',
        answer: 'Eine Mütze oder einen Hut.',
    },
    {
        id: 14,
        category: 'Grammatik',
        subcategory: 'Grammatik - Modalverben', //Grammar - Modal Verbs
        question: 'Vervollständige den Satz: Er ___ gut singen.',
        answer: 'kann',
    },
    {
        id: 15,
        category: 'Kultur',
        subcategory: 'Kultur - Literatur', //Culture - Literature
        question: "Wer hat 'Faust' geschrieben?",
        answer: 'Goethe',
    },
    {
        id: 16,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - In der Stadt', //Vocabulary - In the City
        question: 'Wo kann man ein Buch kaufen?',
        answer: 'In einer Buchhandlung.',
    },
    {
        id: 17,
        category: 'Grammatik',
        subcategory: 'Grammatik - Zeitform Perfekt', //Grammar - Perfect Tense
        question: "Wie bildet man das Perfekt von 'spielen'?",
        answer: 'hat gespielt',
    },
    {
        id: 18,
        category: 'Kultur',
        subcategory: 'Kultur - Sport', //Culture - Sports
        question: 'Welcher Sport ist in Deutschland besonders beliebt?',
        answer: 'Fußball',
    },
    {
        id: 19,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Berufe', //Vocabulary - Occupations
        question:
            'Wer arbeitet in einem Krankenhaus und hilft kranken Menschen?',
        answer: 'Ein Arzt oder eine Ärztin.',
    },
    {
        id: 20,
        category: 'Grammatik',
        subcategory: 'Grammatik - Reflexive Verben', //Grammar - Reflexive Verbs
        question: 'Vervollständige den Satz: Ich ___ jeden Morgen.',
        answer: 'wasche mich',
    },
    {
        id: 21,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Familie', //Vocabulary - Family
        question: "Wie sagt man 'sister' auf Deutsch?",
        answer: 'Schwester',
    },
    {
        id: 22,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Tiere', //Vocabulary - Animals
        question: 'Welches Tier gibt uns Milch?',
        answer: 'Die Kuh',
    },
    {
        id: 23,
        category: 'Grammatik',
        subcategory: 'Grammatik - Artikel', //Grammar - Articles
        question: "Was ist der Artikel von 'Tisch'?",
        answer: 'der',
    },
    {
        id: 24,
        category: 'Kultur',
        subcategory: 'Kultur - Feiertage', //Culture - Holidays
        question: 'Welches Fest feiert man im Dezember?',
        answer: 'Weihnachten',
    },
    {
        id: 25,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Farben', //Vocabulary - Colors
        question: 'Was ist die Farbe des Himmels?',
        answer: 'Blau',
    },
    {
        id: 26,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Lebensmittel', //Vocabulary - Food
        question: 'Welches Gemüse ist rot und rund?',
        answer: 'Tomate',
    },
    {
        id: 27,
        category: 'Grammatik',
        subcategory: 'Grammatik - Vergangenheitsform', //Grammar - Past tense
        question: "Wie sagt man 'I ate' auf Deutsch?",
        answer: 'Ich habe gegessen',
    },
    {
        id: 28,
        category: 'Kultur',
        subcategory: 'Kultur - Geographie', //Culture - Geography
        question: 'Wo liegt Berlin?',
        answer: 'In Deutschland',
    },
    {
        id: 29,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Schule', //Vocabulary - School
        question: 'Wo lernt man Mathe?',
        answer: 'In der Schule',
    },
    {
        id: 30,
        category: 'Grammatik',
        subcategory: 'Grammatik - Konjunktionen', //Grammar - Conjunctions
        question:
            'Vervollständige den Satz: Ich möchte Kaffee ___ ich habe kein Geld.',
        answer: 'aber',
    },
    {
        id: 31,
        category: 'Kultur',
        subcategory: 'Kultur - Musik', //Culture - Music
        question: 'Wer war ein berühmter deutscher Komponist?',
        answer: 'Ludwig van Beethoven',
    },
    {
        id: 32,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Transport', //Vocabulary - Transport
        question: 'Was ist schneller, ein Auto oder ein Fahrrad?',
        answer: 'Ein Auto',
    },
    {
        id: 33,
        category: 'Grammatik',
        subcategory: 'Grammatik - Akkusativ', //Grammar - Accusative
        question:
            'Welche Präposition ist immer mit Akkusativ? (aus, mit, zu, ohne)',
        answer: 'ohne',
    },
    {
        id: 34,
        category: 'Kultur',
        subcategory: 'Kultur - Traditionen', //Culture - Traditions
        question: 'Was ist Oktoberfest?',
        answer: 'Ein großes Volksfest in München',
    },
    {
        id: 35,
        category: 'Wortschatz',
        subcategory: 'Wortschatz - Natur', //Vocabulary - Nature
        question: 'Was ist das Gegenteil von Nacht?',
        answer: 'Tag',
    },
    {
        id: 36,
        category: 'Grammatik',
        subcategory: 'Grammatik - Dativ', //Grammar - Dative
        question: 'Vervollständige den Satz: Ich gebe das Buch ___ Lehrer.',
        answer: 'dem',
    },
    // ... add more sample data as needed
];

export default sampleFlashcards;
