import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Aussehen',
    themeAuto: 'Automatisch',
    themeSand: 'Sand', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Hafen', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Arbeitsjacke', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Dunkel',
    voice: 'Niederländische Stimme',
    voiceAuto: 'Automatisch',
    voiceHint: 'Tippe auf 🔊, um zuzuhören. Die Vloertaal-Stimmen klingen auf jedem Handy gleich; die anderen kommen von deinem Handy.',
    voiceNone: 'Dieses Gerät hat keine niederländische Stimme. Du kannst eine in den Einstellungen deines Handys hinzufügen (Text-in-Sprache).',
    appTagline: 'Niederländisch für die Arbeit',
    chooseLanguage: 'Wähle deine Hilfssprache',
    englishOnly: 'Nur Englisch',
    beta: 'Übersetzung noch nicht geprüft', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'Tag in Folge', other: 'Tage in Folge' },
    streakStarted: 'Deine Serie hat begonnen! Komm morgen wieder.',
    streakGrew: { one: '{n} Tag in Folge! Mach weiter so.', other: '{n} Tage in Folge! Mach weiter so.' },
    start: 'Start',
    practice: 'Noch einmal üben',
    locked: 'Mach zuerst die Lektion davor fertig',
    newWord: 'Neues Wort',
    tapToHear: 'Tippe zum Anhören',
    sayItAloud: 'Sag es laut.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Sag es leise oder in Gedanken.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Was bedeutet das?',
    snapQuestion: 'Verstehst du?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Ja, okay.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Gut, dass du fragst!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Gut verstanden!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Siehst du? Fragen wäre besser gewesen.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Welches ist „{word}“?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    mixLesson: 'Gemischte Wiederholung',
    whatDoYouHear: 'Was hörst du?',
    buildSentence: 'Bilde diesen Satz auf Niederländisch',
    typeWhatYouHear: 'Schreib, was du hörst',
    check: 'Prüfen',
    continue: 'Weiter',
    correct: 'Super!',
    almost: 'Richtig, aber achte auf die Schreibweise',
    incorrect: 'Nicht ganz',
    correctAnswer: 'Richtige Antwort',
    rightAnswerIs: 'Die richtige Antwort ist:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'Die beste Antwort ist:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Deine Antwort',
    inARow: '{n} in Folge',
    cantListen: 'Ich kann gerade nicht zuhören',
    learnWriting: 'Ich will auch schreiben lernen',
    learnWritingHint: 'An: Schreib die Wörter, die du hörst, mit Buchstaben. Aus: Wähle das geschriebene Wort, das du hörst.',
    tagRepeat: 'Noch einmal',
    readAloud: 'Laut vorlesen',
    lessonComplete: 'Lektion geschafft!',
    phrasebook: 'Notfall-Sätze',
    phrasebookHint: 'Tippe auf einen Satz, um ihn zu hören. Du kannst den Bildschirm auch einem Kollegen zeigen.',
    whoToCall: 'Probleme bei der Arbeit? Wer helfen kann',
    who112: 'Notfall: Lebensgefahr, Feuer oder eine Straftat, die gerade passiert.',
    whoLegal: 'Kostenlose Beratung zu deinem Vertrag, deinem Lohn oder einer Kündigung.',
    whoInspection: 'Melde unsichere Arbeit, zu wenig Lohn oder Ausbeutung. Das geht auch anonym.',
    whoFairwork: 'Du wirst bei der Arbeit ausgebeutet, oder du glaubst das.',
    who113: 'Du denkst daran, dir das Leben zu nehmen, oder du machst dir Sorgen um jemanden. Kostenlos, Tag und Nacht.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Gewalt oder Missbrauch zu Hause, gegen dich oder jemand anderen. Kostenlos, auch ohne deinen Namen.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'Einstellungen',
    helpLanguage: 'Hilfssprache',
    resetProgress: 'Meinen Fortschritt löschen',
    resetConfirm: 'Den ganzen Fortschritt auf diesem Gerät löschen?',
    audioUnavailable: 'Ton ist auf diesem Gerät nicht verfügbar.',
    slow: 'Langsam',
    completeChat: 'Ergänze das Gespräch',
    meaning: 'Bedeutung',
    navRoute: 'Lektionen',
    navWords: 'Hilfe',
    rightFirstTime: 'Beim ersten Mal richtig',
    newWords: 'Neue Wörter',
    wordsLearnedN: { one: '{n} Wort gelernt', other: '{n} Wörter gelernt' },
    practiseMistakes: { one: 'Fehler üben · noch {n}', other: 'Fehler üben · noch {n}' },
    quitHint: 'Deine Antworten in dieser Lektion werden nicht gespeichert.',
    keepGoing: 'Weiterlernen',
    stopLesson: 'Lektion beenden',
    fullVersion: 'Vollversion',
    unlockFull: 'Vollversion freischalten',
    unlockHint: 'Mit dem Code öffnen sich alle Lektionen. Der Code ist kostenlos. Noch keinen Code? Frag deine Lehrkraft oder deinen Coach, oder schreib uns eine E-Mail:',
    codeNotFull: 'Dieser Code öffnet die Vollversion nicht. Frag nach einem neuen Code.',
    password: 'Code',
    enterPassword: 'Gib den Code ein',
    wrongPassword: 'Der Code stimmt nicht. Versuch es noch einmal.',
    unlock: 'Freischalten',
    sector: 'Deine Arbeit',
    chooseSector: 'Wo arbeitest du?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'In welchem Land arbeitest du?',
    countryHint: 'Dann bekommst du die Wörter und Tipps dieses Landes.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'Was du lernst, ist nur auf diesem Handy.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Benutze immer dieses Handy.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Niederlande',
    countryBe: 'Belgien (Flandern)',
    tipsNote: 'Diese Tipps gelten für die Arbeit in den Niederlanden. Allgemeine Informationen, keine Rechtsberatung.',
    sectorHint: 'Die Lektionen für deine Arbeit kommen früh. Du kannst das später in den Einstellungen ändern.',
    otherSectors: 'Andere Branchen',
    reviewToday: 'Heute wiederholen',
    reviewTodayN: { one: '{n} Wort zum Wiederholen · ein paar Minuten', other: '{n} Wörter zum Wiederholen · ein paar Minuten' },
    notSureYet: 'Weiß ich noch nicht',
    sectorLogistics: 'Logistik',
    sectorConstruction: 'Bau',
    sectorProduction: 'Produktion',
    sectorCare: 'Pflege',
    sectorHospitality: 'Gastronomie und Hotels',
    sectorRetail: 'Laden und Supermarkt', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Reinigung',
    sectorHorticulture: 'Gartenbau', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Technik', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Autowerkstatt', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Ton',
    soundOn: 'Mit Ton',
    withoutSound: 'Ohne Ton',
    quietHint: 'Ohne Ton haben die Lektionen keine Hörübungen, und nichts spielt von selbst. Tippe auf 🔊, um ein Wort zu hören, zum Beispiel mit Kopfhörern.',
    soundOffToast: 'Ohne Ton. Du kannst den Ton in den Einstellungen einschalten.',
    noInternetSound: 'Kein Internet: Der Ton funktioniert gerade nicht.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Heute noch zu tun',
    streakStopped: { one: 'Deine Serie ist nach {n} Tag zu Ende. Fang heute neu an.', other: 'Deine Serie ist nach {n} Tagen zu Ende. Fang heute neu an.' },
    recordN: { one: 'Dein Rekord: {n} Tag', other: 'Dein Rekord: {n} Tage' },
    workWeek: 'Deine Arbeitswoche',
    freeDaysN: { one: 'Du hast {n} freien Tag. Wenn du einen Tag auslässt, geht deine Serie weiter.', other: 'Du hast {n} freie Tage. Wenn du einen Tag auslässt, geht deine Serie weiter.' },
    restDay: 'Freier Tag',
    tier3: '3 Tage in Folge',
    tier7: '1 Woche in Folge',
    tier14: '2 Wochen in Folge',
    tier30: '1 Monat in Folge',
    reviewDone: 'Für heute fertig',
    tomorrowN: { one: 'Morgen: {n} Wort', other: 'Morgen: {n} Wörter' },
    firstWordsTomorrow: 'Morgen kommen deine ersten Wörter wieder',
    extraRound: 'Extra-Runde',
    reviewFirstHint: 'Erst wiederholen. Dann merkst du dir mehr.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} Wort sitzt besser', other: '{n} Wörter sitzen besser' },
    noMistakes: 'Keine Fehler',
    nextUp: 'Als Nächstes',
    installTitle: 'Leg Vloertaal auf deinen Startbildschirm',
    installHint: 'Dann öffnet es sich wie eine App, auch ohne Internet.',
    installAdd: 'Zum Startbildschirm hinzufügen',
    iosStep1: 'Tippe auf „Teilen“',
    iosStep2: 'Tippe auf „Zum Home-Bildschirm“',
    iosStep3: 'Fertig!',
    backupTitle: 'Deinen Fortschritt sichern',
    backupHint: 'Dein Fortschritt ist nur auf diesem Handy. Speichere ihn als Datei, zum Beispiel für ein neues Handy.',
    backupSave: 'Herunterladen',
    backupLoad: 'Zurückholen',
    backupBad: 'Das ist keine Vloertaal-Datei.',
    backupAsk: 'Diese Datei zu deinem Fortschritt hinzufügen oder deinen Fortschritt ersetzen?',
    backupMerge: 'Zusammenfügen',
    backupReplace: 'Ersetzen',
    backupBack: 'Dein Fortschritt ist wieder da.',
    backupNothingNew: 'Nichts Neues: Das war schon auf deinem Handy.',
    cancel: 'Abbrechen',
    remindTitle: 'Erinnere mich jeden Tag',
    remindEvent: 'Zeit für dein Niederländisch (10 Minuten)',
    remindHint: 'Der Kalender auf deinem Handy erinnert dich. Nichts wird an uns geschickt.',
    remindBefore: 'Vor der Arbeit',
    remindAfter: 'Nach der Arbeit',
    remindOwn: 'Andere Uhrzeit',
    remindAdd: 'Zu meinem Kalender hinzufügen',
    remindAdded: 'Öffne die Datei, um sie zu deinem Kalender hinzuzufügen.',
    remindAddedAsk: 'Hinzugefügt? Dann siehst du sie in deinem Kalender.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'Über',
    tagMeaning: 'Bedeutung',
    tagPick: 'Wählen',
    tagListen: 'Hören',
    tagType: 'Schreiben',
    tagMatch: 'Paare',
    tagBuild: 'Satz',
    tagChat: 'Gespräch',
    tagSituation: 'Situation',
    tagTip: 'Tipp',
    more: 'Mehr',
    less: 'Weniger',
    daysUnit: { one: 'Tag', other: 'Tage' },
    wordsUnit: { one: 'Wort', other: 'Wörter' },
    countTitle: 'Anonym zählen',
    countHint: 'Die App zählt, wie oft Lektionen gemacht werden und wie lange sie ungefähr dauern. Und ob die App irgendwo einen Fehler hat. Kein Name, kein Konto, kein Tracking.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Zertifikat',
    myCertificates: 'Meine Zertifikate',
    certsEmpty: 'Mach alle Lektionen eines Themas fertig. Dann bekommst du ein Zertifikat.',
    certEarned: 'Zertifikat erhalten!', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certEarnedHint: 'Du hast alle Lektionen dieses Themas fertig gemacht.',
    certView: 'Ansehen',
    certLater: 'Später',
    certPrint: 'Drucken oder als PDF speichern',
    certSaved: 'Das Bild ist gespeichert.',
    certNameHint: 'Dein Name bleibt nur auf diesem Handy. Du kannst das Feld leer lassen.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certChangeName: 'Namen ändern',
    certPractice: 'Übungszertifikat, kein offizielles Diplom',
    resumeLesson: 'Lektion fortsetzen',
    restartLesson: 'Neu anfangen',
    quitKept: 'Dein Fortschritt ist gespeichert. Du kannst später weitermachen.',
    bestAnswer: 'Beste Antwort',
    inReview: 'wird geprüft',
    today: 'Heute',
    playAgain: 'Noch einmal hören',
    daysUnitOne: 'Tag',
    wordsUnitOne: 'Wort',
    wordsLearnedOne: '{n} Wort gelernt',
    tomorrowOne: 'Morgen: {n} Wort',
    wordsStrongerOne: '{n} Wort sitzt besser',
    recordOne: 'Dein Rekord: {n} Tag',
    streakStoppedOne: 'Deine Serie ist nach {n} Tag zu Ende. Fang heute neu an.',
    letterTiles: 'Buchstaben',
    useKeyboard: 'Tastatur',
    skippedN: { one: '{n} übersprungen, zählt nicht', other: '{n} übersprungen, zählen nicht' },
    stampLater: 'Kommt später wieder',
    stampDone: 'Fertig',
    chooseNext: 'Wähle dein nächstes Thema',
    recommended: 'Empfohlen',
    allTopics: 'Alle Themen',
    topicsOrder: 'Themen zeigen',
    privacyLink: 'Datenschutzerklärung lesen (auf Niederländisch)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Was möchtest du lernen?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Niederländisch für die Arbeit lernen – und wie Arbeit hier läuft', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Ich spreche schon Niederländisch: nur die Regeln bei der Arbeit', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Niederländisch lernen', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Zu Werkregels wechseln?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Alles ist dann auf Niederländisch. Deine Hilfssprache geht aus.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Bis du zurückwechselst, wiederholst du Regeln, keine Wörter.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Dein Fortschritt bleibt gespeichert. Hier kannst du zurückwechseln.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Ja, zu Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Nach Bereich',
    inOrder: 'Der Reihe nach',
    searchTopics: 'Thema suchen', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Kein Thema mit diesem Wort.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: 'Lektion', other: 'Lektionen' },
    lessonsUnitOne: 'Lektion',
    topicsUnit: { one: 'Thema', other: 'Themen' },
    topicsUnitOne: 'Thema',
    allTopicsDone: 'Du hast alle Themen geschafft. Super gemacht!',
    // Speaking practice
    tagSpeak: 'Sprechen',
    speakPrompt: 'Hör zu, dann sag es',
    tapToSpeak: 'Tippen und sprechen',
    stopRecording: 'Stopp',
    micPrivacy: "Niemand sonst hört dich. Nichts wird geschickt.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Mikrofon aus. Sag es jetzt laut, dann mach weiter.',
    cantSpeak: 'Ich kann gerade nicht sprechen',
    soundsSame: 'Klingt gleich',
    sayAgain: 'Sag es noch einmal',
    hearMine: 'Hör dir zu', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Damals und jetzt', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Dein erster Versuch: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Sag es zusammen", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Sag es gleichzeitig mit der Stimme. Nichts wird aufgenommen.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Jetzt allein", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Fehler gehören zum Lernen. Nicht verstanden? Sag es noch einmal.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Aufgeregt? Das ist normal. Sag es trotzdem.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Du musst es nicht perfekt sagen. Probier es einfach.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Warum lernst du Niederländisch?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Wähle eins oder zwei.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Fertig", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Meine Arbeit gut machen", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Meine Kinder", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Mit Kollegen reden", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Dinge selbst regeln", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "Eine bessere Arbeit", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Mich in den Niederlanden zu Hause fühlen", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'Ich',
    speakingPractice: 'Sprechen üben',
    speakingHint: "Sag Wörter laut und vergleiche. Niemand sonst hört dich: Nichts wird geschickt. Deine erste Aufnahme eines Satzes bleibt auf deinem Handy, zum späteren Vergleichen.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Wird gespeichert…',
    savedOffline: 'Offline gespeichert',
    offlineNoSpace: 'Nicht genug Platz auf diesem Handy. Entferne ein gespeichertes Thema oder mach Platz frei.',
    offlineFailed: 'Speichern hat nicht geklappt. Prüfe dein Internet und versuch es noch einmal.',
    pocketCard: 'Spickzettel',
    pocketSave: 'Als Bild speichern',
    textSize: 'Textgröße',
    textNormal: 'Normal',
    textLarge: 'Groß',
    textXl: 'Sehr groß',
    showEnglish: 'Auch Englisch zeigen',
    genderTitle: 'Frau oder Mann?',
    genderHint: 'Damit deine Sprache dich richtig anspricht.',
    genderWoman: 'Frau',
    genderMan: 'Mann',
    genderNone: 'Sage ich lieber nicht',
    langGuessYes: 'Ja',
    langGuessOther: 'Andere Sprache',
    settingsLangMe: 'Sprache und ich',
    settingsLessons: 'Lektionen',
    settingsPhone: 'Dieses Handy',
    settingOn: 'An',
    settingOff: 'Aus',
    sectorGroupMake: 'Herstellung und Transport', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    sectorGroupCare: "Pflege und Kinder", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Handel und Gastronomie', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Bau und Technik', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Frauenstimme',
    voiceMan: 'Männerstimme',
    writingPick: 'Wort wählen',
    settingWriting: 'Schreiben',
    settingKeepLessons: 'Lektionen auf diesem Handy behalten',
    settingKeepLessonsHint: 'Das Thema, das du gerade lernst, wird auf diesem Handy gespeichert. So geht es auch ohne Internet. Fertige Themen werden wieder entfernt.',
    otherTopicLink: 'Anderes Thema',
    remindAsk: 'Sollen wir dich jeden Tag erinnern?',
    remindYes: 'Ja, nach der Arbeit',
    remindNo: 'Nein, danke',
    remindPickTime: 'Wann sollen wir dich erinnern?',
    certSaveShare: 'Speichern oder teilen',
    pauseTitle: 'Pause',
    back: 'Zurück',
    quitLesson: 'Lektion verlassen',
    playAudio: 'Abspielen',
    scrollDown: 'Nach unten scrollen',
    lessonProgress: 'Fortschritt der Lektion',
    mainMenu: 'Hauptmenü',
    spaceKey: 'Leertaste',
    langNotOnPhone: 'Diese Sprache ist noch nicht auf diesem Handy. Verbinde dich mit dem Internet, um zu wechseln.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'Wähle selbst eine Uhrzeit',
    gateWho: 'Deine Lehrkraft, dein Coach oder dein Arbeitgeber gibt dir den Code.',
    gateTrust: 'Kein Konto. Kein Name. Alles bleibt auf diesem Handy.',
    codeAccepted: 'Code angenommen',
    startFree: 'Kein Code? Fang mit den ersten Lektionen an',
    bramHello: 'Schön, dich zu sehen.',
    bramBack: 'Willkommen zurück. Machen wir weiter.',
    bramRested: 'Gestern war dein freier Tag. Deine Serie geht weiter.',
    bramDueN: { one: 'Heute {n} Wort zum Wiederholen.', other: 'Heute {n} Wörter zum Wiederholen.' },
    bramDueOne: 'Heute {n} Wort zum Wiederholen.',
    bramDayN: 'Tag {n} in Folge.',
    bramDone: 'Für heute fertig. Bis morgen.',
    bramPerfect: 'Sehr gut. Du kennst diese Wörter.',
    bramGood: 'Gute Arbeit. Schritt für Schritt.',
    bramHard: 'Gut, dass du geübt hast. Schwere Wörter kommen wieder.',
    bramReview: 'Gut. Wiederholen hilft beim Merken.',
    bramIntro: 'Ich bin Bram, dein Kollege.',
    bramIntroHello: 'Hallo, ich bin Bram.',
    showDutch: 'Auf Niederländisch zeigen',
    showAnswers: 'Antworten zeigen', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Zuletzt aktualisiert: {date}',
    /* G4 b3 */
    buildListen: 'Hör zu und bilde den Satz',
    chatWhichQuestion: 'Welche Frage passt zu dieser Antwort?',
    reviewWaiting: 'Noch {n} Wörter warten. Sie kommen in den nächsten Tagen wieder.',
    factTitle: 'Schon gewusst?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    fact3: 'Du bist nicht allein: Mehr als 3 Millionen Erwachsene in den Niederlanden finden Lesen, Rechnen oder Computer schwer. Üben hilft.',
    fact7: 'Von den Migranten, die sehr gut Niederländisch sprechen, haben 69 von 100 eine bezahlte Arbeit.',
    fact14: 'Viele Bibliotheken haben ein Taalhuis („Sprachhaus“): kostenlose Hilfe, um weiter Niederländisch zu lernen.',
    fact30: 'Jeden Tag ein bisschen üben hilft mehr als ab und zu viel. Du hast es schon 30 Tage geschafft!',
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Diese Datei hat {n} Lektion.', other: 'Diese Datei hat {n} Lektionen.' },
    backupFileOne: 'Diese Datei hat {n} Lektion.',
    backupPhoneN: { one: 'Du hast {n} Lektion.', other: 'Du hast {n} Lektionen.' },
    backupPhoneOne: 'Du hast {n} Lektion.',
    backupFewer: '„Ersetzen“ löscht die Lektionen, die nicht in der Datei sind. „Zusammenfügen“ behält alles.',
    backupTooBig: 'Diese Datei ist zu groß. Eine Vloertaal-Datei ist viel kleiner.',
    backupNewPhone: 'Neues Handy? Dort brauchst du auch deinen Code.',
    remindEveryDay: 'Deine Erinnerung: jeden Tag um {time}',
    remindStop: 'Erinnerung beenden',
    remindStopped: 'Öffne die Datei, um die Erinnerung aus deinem Kalender zu entfernen.',
    remindStoppedAndroid: 'Lösch die Erinnerung selbst im Google Kalender.',
    resetKeeps: 'Deine Lektionen, Wörter, Serie und Zertifikate werden gelöscht. Deine Sprache und deine Einstellungen bleiben.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Nicht geladen. Hast du Internet?',
    retry: 'Erneut versuchen',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal kann nicht starten.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Sichere zuerst deinen Fortschritt. Fang dann neu an.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Neu anfangen', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Etwas ist schiefgegangen. Dein Fortschritt ist gespeichert.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Was kannst du schon?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Etwa 10 Minuten. Es gibt keine Noten. Es ist nur für dich.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: 'Du hast viel gelernt. Mach den Test noch einmal und sieh, was du jetzt kannst.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Hören', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Wörter', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Sätze', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Hör zu. Was bedeutet das?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Du weißt es nicht? Tippe auf „Ich weiß es nicht“. Das ist in Ordnung.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Deine Aufnahme bleibt nur auf diesem Handy. Später kannst du dich noch einmal hören.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Guter Anfang! Das kannst du schon.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Gut gemacht! Sieh, was du jetzt kannst.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Du damals', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Du jetzt', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Übe jeden Tag ein bisschen. Dann lernst du immer mehr.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Test machen', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Ich weiß es nicht', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Mehr als damals', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Ungefähr gleich', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Alles zusammen: Du weißt jetzt mehr als damals.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Alles zusammen: ungefähr gleich wie damals.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Zuerst 5 Fragen über dich. Es gibt kein Richtig oder Falsch.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Traust du dich das?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Sagen, dass du etwas nicht verstehst', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Deine Chefin oder deinen Chef etwas fragen', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Um Hilfe bitten', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Sagen, dass etwas nicht sicher ist', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'In der Pause kurz mit Kollegen reden', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Noch nicht', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Ein bisschen', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Ja', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'In ein paar Wochen fragen wir noch einmal.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Tempo', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Ruhig', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normal', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Ruhig ist langsam und deutlich. Normal ist so, wie Kollegen sprechen. Wähle „Normal“, wenn du schon viel verstehst.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Zeig, wie es läuft', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Diese Karte zeigt deinen Fortschritt. Zeig sie deiner Lehrkraft, deinem Coach oder deinem Chef. Du entscheidest.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: 'Du kannst auch Nein sagen.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Dein Handy macht die Karte. Nichts wird gesendet. Vloertaal speichert nichts.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'Auf der Karte, auf Niederländisch:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Fertige Themen', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Übungstage in den letzten 4 Wochen', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Letzte Lektion, mit Datum', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Code: dieselben Zahlen, kurz, für eine Gruppenübersicht. Ohne Namen.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Das Handy hört zu (Versuch)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Nach dem Sprechen sagt das Handy, ob es dich verstanden hat. Das passiert auf dem Handy selbst. Nichts geht an uns oder an andere.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Das Handy braucht zuerst Niederländisch. Das ist ein großer Download: nimm WLAN.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Niederländisch laden', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Jetzt nicht', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Niederländisch kommt. Versuch es später noch mal.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Das hat nicht geklappt. Versuch es später noch mal, mit WLAN.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Nur das Handy hört zu. Nichts wird geschickt.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Das Handy hört zu…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Verstanden', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Fast: sag {word} noch mal', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Noch nicht verstanden', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Trotzdem weiter', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Willst du schneller lernen?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Weniger Erklärung in neuen Lektionen. Niederländisch im normalen Tempo.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Ja', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Nein', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Die nächste Lektion ist etwas kürzer.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Schneller lernen', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'An: weniger Erklärung in neuen Lektionen und Niederländisch im normalen Tempo. Aus: wie vorher.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Wie findest du Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Gut', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Geht so', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Nicht gut', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Danke! Das hilft uns, Vloertaal besser zu machen.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Schneller lernen: weniger Erklärung in neuen Lektionen und Niederländisch im normalen Tempo.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Zusammen üben', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Zwei Personen, ein Handy', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Übe mit einer Kollegin, einem Freund oder einer Lehrkraft. Lest abwechselnd.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'Person 1 ist die Kollegin oder der Kollege. Person 2 antwortet.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Nichts wird aufgenommen. Es gibt keine Punkte.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Person {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Antwort', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Anhören', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Weiter', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Übersetzung', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Gut gemacht! Rollen tauschen und noch einmal?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Rollen tauschen', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Fertig', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Kenne ich schon: kurzer Check', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Das kennst du schon. Dieses Thema abhaken?', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'Dann gibt es noch kein Zertifikat. Das bekommst du nach den Lektionen.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Die Lektionen helfen dir bei diesem Thema.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'Abhaken', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'per Check', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Doch die Lektionen machen', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "Kommunikation", // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Ich lerne Niederländisch für meine Arbeit mit Vloertaal. Kostenlos: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal ist eine kostenlose App, mit der du Niederländisch für die Arbeit lernst.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeHow: 'Kurze Lektionen auf deinem Handy, mit Hilfe in deiner Sprache. Ohne Konto.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeOpen: 'Öffne auf deinem Handy:', // nieuw, nalezen // nagelezen AI 28 nov
    workTry: 'Probier es heute bei der Arbeit', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Wenn:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Dann sag:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Für deinen Kollegen', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    colleagueCardHint: 'Zeig das einem Kollegen, der Niederländisch spricht. Dort steht, wie er dir beim Üben helfen kann.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'An deinen Kollegen schicken', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Für deinen Coach', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Wie Arbeit hier läuft, in einfachem Niederländisch. Das Handy liest es vor.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Du kannst jetzt viel Niederländisch. Bei jedem Thema kannst du auch lesen, wie Arbeit hier läuft, in einfachem Niederländisch.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Keine: Ich spreche Niederländisch', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Sätze, die du bei der Arbeit gesagt hast', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Wörter, die noch schwer sind', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Lektionen dazu, wie Arbeit hier läuft', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Namen der Themen über deine Rechte zeigen', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    speakFromMemory: 'Jetzt aus dem Kopf: Was hieß es auf Niederländisch?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Wörter, die du vor 2 Wochen oder früher gelernt hast: Du wusstest noch {n} von {m}.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    verbSecond: 'Das Verb steht an Stelle 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Punkte', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Alle deine Punkte', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Stimmung', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Ruhig', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Spiel', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Ruhig: Nichts bewegt sich, keine Feiern. Spiel: Punkte, Töne und viel Bewegung.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Service und Sicherheit", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Arbeit im Freien", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Kinderbetreuung", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Abfall und Recycling", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Lebensmittelindustrie", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Sicherheitsdienst", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Facility-Services", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Grünflächen und Gärten", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Stufe', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Neu dabei', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Am Lernen', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'Im Team', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Fachkraft', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Erfahren', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Profi', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Neue Stufe:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Keine Fehler:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Ziel für heute', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Ziel für heute erreicht!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Neu in deinem Werkzeugkasten:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Mein Werkzeugkasten', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Mach eine Lektion mit Spiel fertig. Dann bekommst du dein erstes Werkzeug.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Mehr Erklärung', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'Über diese Tipps', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Eine Fachperson hat diese Erklärung noch nicht geprüft.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Stand dieser Erklärung: {month}. Die neuesten Regeln findest du beim Juridisch Loket oder bei Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Stand dieser Erklärung: {month}. Die neuesten Regeln findest du beim Justitiehuis oder auf werk.belgie.be.', // nieuw, nalezen (AI-correctie 28 nov 2026)
    aboutMore: 'Mehr über Vloertaal lesen', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Hast du das bei der Arbeit gesagt?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Ja, geklappt', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Noch nicht', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Gut gemacht! Schon {n} Satz bei der Arbeit geschafft.', other: 'Gut gemacht! Schon {n} Sätze bei der Arbeit geschafft.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Gut gemacht! Dein erster Satz bei der Arbeit hat geklappt.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Du findest sie in den Einstellungen.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Bei der Arbeit geschafft', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Diese Sätze hast du bei der Arbeit gesagt.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'ca. {n} Min.', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Dein Fortschritt wurde nicht gespeichert. Ist dein Handy voll? Mach etwas Platz frei. Oder geh zu Einstellungen: „Deinen Fortschritt sichern“.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Dein Handy kann deinen Fortschritt manchmal löschen. Speichere darum eine Kopie.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Jetzt sichern', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'An dich selbst senden', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Schick dir die Datei selbst, zum Beispiel per WhatsApp oder E-Mail.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Fertig. Bewahre diese Datei gut auf. Damit holst du deinen Fortschritt später zurück.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Was sagst du?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Beispiel', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Hör die Antwort', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Hör zu bei der Arbeit', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Es ist laut, wie bei der Arbeit. Hör zu. Dann kommen die Fragen.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Stell das markierte Wort an den Anfang', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Die Regeln bei der Arbeit', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Du kannst jetzt viel Niederländisch. Willst du auch die Regeln bei der Arbeit lernen? Dann ist alles auf Niederländisch.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Ja, zeig mal', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Wie sagt man das?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Tippe auf einen Laut. Sieh, wie der Mund ihn macht.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Tempo', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Das Wort, Laut für Laut', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Laut', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Erste Schritte',
    'theme.safe': 'Sicher arbeiten',
    'theme.find': 'Arbeit finden',
    'theme.job': 'Deine Stelle',
    'theme.together': 'Zusammenarbeiten',
    'theme.rights': 'Deine Rechte',
    'theme.life': 'Leben in den Niederlanden',
    'theme.sector': 'Deine Branche',
    // Unit: First day at work
    'u.firstday': 'Erster Arbeitstag',
    'l.hello': 'Hallo sagen',
    'w.hallo': 'hallo',
    'w.goedemorgen': 'guten Morgen',
    'w.dankjewel': 'danke',
    'w.ja': 'ja',
    'w.nee': 'nein',
    'w.totmorgen': 'bis morgen',
    's.hello.1': 'Hallo, ich bin neu.',
    's.hello.2': 'Guten Morgen, ich bin Ali.',
    's.hello.3': 'Danke, bis morgen!',
    'l.people': 'Menschen bei der Arbeit',
    'w.collega': 'der Kollege / die Kollegin',
    'w.baas': 'der Chef / die Chefin',
    'w.leidinggevende': 'der Vorgesetzte / die Vorgesetzte',
    'w.werk': 'die Arbeit',
    'w.naam': 'der Name',
    'w.nieuw': 'neu',
    's.people.1': 'Mein Name ist Sara.',
    's.people.2': 'Wer ist der Chef?',
    's.people.3': 'Ich bin neu im Team.',

    // Unit: Asking for help
    'u.help': 'Um Hilfe bitten',
    'l.understand': 'Ich verstehe es nicht',
    'w.begrijpniet': 'ich verstehe es nicht',
    'w.nogeenkeer': 'noch einmal',
    'w.langzaam': 'langsam',
    'w.helpen': 'helfen',
    'w.waar': 'wo',
    'w.wc': 'die Toilette',
    's.understand.1': 'Können Sie das wiederholen?',
    's.understand.2': 'Können Sie langsamer sprechen?',
    's.understand.3': 'Wo ist die Toilette?',

    // Unit: Safety first
    'u.safety': 'Sicherheit zuerst',
    'u.emergency': "Wenn etwas schiefgeht", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Schutzausrüstung',
    'w.helm': 'der Helm',
    'w.handschoenen': 'die Handschuhe',
    'w.veiligheidsschoenen': 'die Sicherheitsschuhe',
    'w.hesje': 'die Warnweste',
    'w.bril': 'die Schutzbrille',
    'w.dragen': 'tragen',
    's.gear.1': 'Trag immer deinen Helm.',
    's.gear.2': 'Wo sind die Handschuhe?',
    's.gear.3': 'Ich trage meine Warnweste.',
    'l.danger': 'Gefahr!',
    'w.pasop': 'Vorsicht',
    'w.stop': 'stopp',
    'w.help': 'Hilfe',
    'w.brand': 'das Feuer, der Brand',
    'w.nooduitgang': 'der Notausgang',
    'w.ongeluk': 'der Unfall',
    's.danger.1': 'Vorsicht, der Boden ist nass!',
    's.danger.2': 'Wo ist der Notausgang?',
    's.danger.3': 'Es ist ein Unfall passiert!',
    'l.alarm': 'Feueralarm und Evakuierung', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'der Alarm', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'räumen, evakuieren (alle verlassen das Gebäude)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'der Fluchtweg', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'die Treppe', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'der Sammelplatz (wo sich alle draußen treffen)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'der Feuerlöscher', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Wo hängt der Feuerlöscher?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Wir müssen das Gebäude räumen.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Nimm die Treppe, nicht den Aufzug.', // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': 'Einen Unfall melden',
    'w.gewond': 'verletzt',
    'w.bloeden': 'bluten',
    'w.ehbodoos': 'der Erste-Hilfe-Kasten',
    'w.bhver': 'der betriebliche Ersthelfer (Erste Hilfe, Brand, Evakuierung)',
    'w.ziekenhuis': 'das Krankenhaus',
    'w.gebeuren': 'passieren',
    's.accident.1': 'Mein Kollege ist gestürzt.',
    's.accident.2': 'Ich habe mich geschnitten.',
    's.accident.3': 'Ich will einen Unfall melden.',

    // Unit: In the warehouse
    'u.warehouse': 'Im Lager',
    'l.things': 'Dinge im Lager',
    'w.doos': 'der Karton',
    'w.pallet': 'die Palette',
    'w.heftruck': 'der Gabelstapler',
    'w.kar': 'der Wagen',
    'w.stelling': 'das Regal',
    'w.scanner': 'der Scanner',
    's.things.1': 'Stell den Karton auf die Palette.',
    's.things.2': 'Wo ist der Scanner?',
    's.things.3': 'Der Gabelstapler kommt.',
    'l.directions': 'Richtungen und Tätigkeiten',
    'w.links': 'links',
    'w.rechts': 'rechts',
    'w.boven': 'oben',
    'w.beneden': 'unten',
    'w.tillen': 'heben',
    'w.pakken': 'nehmen',
    's.directions.1': 'Der Karton steht links.',
    's.directions.2': 'Heb aus den Beinen.',
    's.directions.3': 'Geh nach rechts.',

    // Unit: Time and schedule
    'u.time': 'Zeit und Dienstplan',
    'l.shift': 'Meine Schicht',
    'w.dienst': 'die Schicht',
    'w.pauze': 'die Pause',
    'w.beginnen': 'anfangen',
    'w.klaar': 'fertig',
    'w.telaat': 'zu spät',
    'w.morgen': 'morgen',
    's.shift.1': 'Meine Schicht fängt um sieben Uhr an.',
    's.shift.2': 'Wann ist die Pause?',
    's.shift.3': 'Entschuldigung, ich bin zu spät.',
    'l.sick': 'Sich krankmelden',
    'w.ziek': 'krank',
    'w.bellen': 'anrufen (Telefon)',
    'w.dokter': 'der Arzt / die Ärztin',
    'w.pijn': 'der Schmerz',
    'w.vandaag': 'heute',
    'w.beter': 'besser',
    's.sick.1': 'Ich bin heute krank.',
    's.sick.2': 'Ich habe Rückenschmerzen.',
    's.sick.3': 'Ich rufe den Arzt an.',

    'c.hello.q': 'Schönen Abend!',
    'c.hello.a': 'Bis morgen!',
    'c.people.q': 'Wie heißt du?',
    'c.people.a': 'Ich heiße Sara.',
    'l.arrive': 'Der erste Tag: den Weg finden',
    'w.ingang': 'der Eingang',
    'w.receptie': 'der Empfang',
    'w.kantine': 'die Kantine',
    'w.kleedkamer': 'der Umkleideraum',
    'w.buddy': 'der Buddy (ein Kollege, der dir am Anfang hilft)',
    'w.vinden': 'finden',
    's.arrive.1': 'Bei wem muss ich mich melden?',
    's.arrive.2': 'Ich finde den Umkleideraum nicht.',
    's.arrive.3': 'Wer ist heute mein Buddy?',
    'c.arrive.q': 'Guten Morgen, weshalb sind Sie hier?',
    'c.arrive.a': 'Ich bin neu. Ich fange heute an.',
    'c.understand.q': 'Verstehst du das?',
    'c.understand.a': 'Nein, bitte noch einmal.',
    'c.gear.q': 'Hast du deinen Helm?',
    'c.gear.a': 'Ja, ich trage ihn.',
    'c.danger.q': 'Ist ein Unfall passiert?',
    'c.danger.a': 'Ja, ruf 112 an!',
    'c.alarm.q': 'Sind alle draußen?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Nein, mein Kollege ist noch nicht da.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Was ist passiert?',
    'c.accident.a': 'Er ist gestürzt. Er blutet.',
    'l.notyet': 'Das habe ich noch nicht gelernt',
    'w.nogniet': 'noch nicht',
    'w.mogen': 'dürfen',
    'w.proberen': 'versuchen',
    'w.voordoen': 'vormachen (zeigen, indem man es zuerst selbst macht)',
    'w.gevaarlijk': 'gefährlich',
    'w.uitleg': 'die Erklärung',
    's.notyet.1': 'Das habe ich noch nicht gelernt.',
    's.notyet.2': 'Ich habe noch keine Erklärung bekommen.',
    's.notyet.3': 'Darf ich das schon allein machen?',
    'c.notyet.q': 'Probier es einfach, es ist leicht.',
    'c.notyet.a': 'Kannst du es mir zuerst vormachen?',
    'c.things.q': 'Wo muss der Karton hin?',
    'c.things.a': 'Auf die Palette.',
    'c.directions.q': 'Links oder rechts?',
    'c.directions.a': 'Rechts, beim Regal.',
    'c.shift.q': 'Wann fängt deine Schicht an?',
    'c.shift.a': 'Morgen um sieben Uhr.',
    'c.sick.q': 'Bist du krank?',
    'c.sick.a': 'Ja, ich bleibe heute zu Hause.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Ruf 112 an!',
    'p.hurt': 'Ich bin verletzt.',
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Bestellungen zusammenstellen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "der Artikel (ein Produkt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "das Fach (ein Platz im Regal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "der Aufkleber, das Etikett", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "sammeln, zusammensuchen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "fehlen (es ist nicht da)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "der Lagerplatz (der Code vom Platz, zum Beispiel A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Ich sammle die Artikel für diese Bestellung.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Dieser Artikel fehlt. Das Fach ist leer.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Der Aufkleber muss auf den Karton.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Welcher Lagerplatz ist es?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Gang drei, Fach zwölf.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Laden und Abladen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "der Lkw, der Lastwagen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "der Fahrer / die Fahrerin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "abladen, entladen (Sachen aus dem Lkw holen)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "der Hubwagen (ein Handwagen, der eine Palette anhebt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "die Folie (dünnes Plastik um eine Palette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "der Frachtbrief (das Papier, auf dem steht, was im Lkw ist)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Der Lkw steht an Tor vier.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Wir laden zuerst diese Paletten ab.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Der Fahrer wartet auf den Frachtbrief.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Ist diese Palette fertig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Nein, da muss noch Folie drum.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Wie geht das?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "wie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "so, auf diese Weise", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "schwierig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "einfach, leicht", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "wissen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "das stimmt", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Wie geht das?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Das ist schwierig für mich.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Mache ich es so richtig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Weißt du, wie das geht?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Nein, das weiß ich noch nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Darf ich etwas fragen?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "fragen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "wer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "kurz, einen Moment", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "die Zeit", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "stören (jemanden, der beschäftigt ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "zweifeln (du bist nicht sicher)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Darf ich etwas fragen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Entschuldigung, dass ich störe.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Wer kann mir helfen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Hast du eine Frage?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Ja. Hast du kurz Zeit?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Wo ist es?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "hier", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "dort, da", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "verloren, weg (du findest es nicht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "der Ausgang", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "auf etwas zeigen (zeigen, wo es ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "neben", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "Ich habe mich verlaufen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Wo ist der Ausgang?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Die Toilette ist dort, neben der Kantine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Findest du es?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Nein. Kannst du es mir zeigen?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Kleine Wunden und Verbrennungen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "die Wunde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "der Verband", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "kühlen (mit kaltem Wasser)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "der Schnitt (eine kleine Wunde von einem Messer oder etwas Scharfem)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "ohnmächtig werden", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "die Augendusche (Wasser, um die Augen auszuspülen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Kühl die Brandwunde mit Wasser.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "Es ist ein kleiner Schnitt. Drück auf die Wunde.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Wo ist die Augendusche?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Mein Kollege wird gleich ohnmächtig.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Lass ihn kurz liegen. Ich hole Hilfe.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "112 anrufen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "die Rettungsdienste (Krankenwagen, Feuerwehr, Polizei)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "der Straßenname", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "die Hausnummer", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "ansprechbar (die Person reagiert, wenn du mit ihr sprichst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "erwarten und empfangen (jemanden an der Tür)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "am Telefon bleiben (du legst nicht auf)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Ich rufe 112 an. Ich brauche einen Krankenwagen.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Wie ist der Straßenname und die Hausnummer?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Ich warte am Eingang auf den Krankenwagen.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Reagiert er, wenn du mit ihm sprichst?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Nein. Er reagiert nicht.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Dein Dienstplan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "der Wochenplan (wer diese Woche wann arbeitet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "die Dienstplan-App (deine Schichten auf deinem Handy)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "verfügbar (du kannst dann arbeiten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "die Änderung", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "einspringen (für jemanden arbeiten, der nicht da ist)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "der freie Tag", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Der neue Dienstplan ist in der App.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Bist du am Samstag verfügbar?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Kannst du morgen für Sara einspringen?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Es gibt eine Änderung in deinem Dienstplan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Okay. An welchem Tag muss ich arbeiten?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Stunden und Pausen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "die Mittagspause", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "die Ruhezeit (freie Zeit zwischen zwei Schichten)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "der Arbeitstag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "die Stundenliste (wo du die Stunden aufschreibst, die du gearbeitet hast)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "früher gehen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "hintereinander (einer nach dem anderen)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Ich schreibe meine Stunden auf die Stundenliste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Darf ich heute eine Stunde früher gehen?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Ich habe sechs Tage hintereinander gearbeitet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Wann ist deine Mittagspause?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "Um zwölf Uhr, eine halbe Stunde.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Deine ersten Wochen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "der Rundgang (jemand zeigt dir das Gebäude)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "der Betreuer (der Kollege, der dir in deinen ersten Wochen hilft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "das Notizbuch", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "mitlaufen (mit einem Kollegen mitgehen und schauen, wie er arbeitet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "sich merken", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "selbstständig (ohne Hilfe)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Zeigst du es mir noch einmal?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Heute laufe ich bei Sara mit.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Ich schreibe es in mein Notizbuch.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Weißt du noch alles vom Rundgang?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Fast alles. Wo war noch mal die Kantine?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Kommissionieren und der Schubmaststapler", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "der Kommissionierer (der Arbeiter, der die Bestellungen zusammenstellt; auch das kleine Fahrzeug, auf dem du stehst, um hoch oben zu picken)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "der Schubmaststapler (ein Stapler für sehr hohe Regale; seine Gabeln fahren nach vorne)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "die Pickliste (die Liste der Artikel, die du zusammenstellen musst)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "scannen", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "der Fußgänger (eine Person, die zu Fuß geht)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "sich aufwärmen (an einem warmen Ort, nach der Arbeit in der Kälte)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Ich scanne jeden Artikel von der Pickliste.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Fußgänger gehen auf dem Fußweg.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Im Tiefkühlraum trage ich Kälteschutzkleidung.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Kannst du kurz mit dem Schubmaststapler fahren?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Nein, das darf ich nicht. Ich habe keine Schulung dafür.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
