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
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    voice: 'Niederländische Stimme',
    voiceAuto: 'Automatisch',
    voiceHint: 'Tippe auf 🔊, um zuzuhören. Die Vloertaal-Stimmen klingen auf jedem Handy gleich; die anderen kommen von deinem Handy.',
    voiceNone: 'Dieses Gerät hat keine niederländische Stimme. Du kannst eine in den Einstellungen deines Handys hinzufügen (Text-in-Sprache).',
    appTagline: 'Niederländisch für die Arbeit',
    chooseLanguage: 'Wähle deine Hilfssprache',
    englishOnly: 'Nur Englisch',
    beta: 'Übersetzung noch nicht geprüft', // nieuw, nalezen
    dayStreak: { one: 'Tag in Folge', other: 'Tage in Folge' },
    streakStarted: 'Deine Serie hat begonnen! Komm morgen wieder.',
    streakGrew: { one: '{n} Tag in Folge! Mach weiter so.', other: '{n} Tage in Folge! Mach weiter so.' },
    start: 'Start',
    practice: 'Noch einmal üben',
    locked: 'Mach zuerst die Lektion davor fertig',
    newWord: 'Neues Wort',
    tapToHear: 'Tippe zum Anhören',
    whatDoesThisMean: 'Was bedeutet das?',
    whichOneIs: 'Was davon ist „{word}“?',
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
    who113: 'Du denkst daran, dir das Leben zu nehmen, oder du machst dir Sorgen um jemanden. Kostenlos, Tag und Nacht.', // nieuw, nalezen
    whoVeiligThuis: 'Gewalt oder Missbrauch zu Hause, gegen dich oder jemand anderen. Kostenlos, auch ohne deinen Namen.', // nieuw, nalezen
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
    countryHint: 'Wähle das Land, in dem du arbeitest. Dann bekommst du die Arbeitsregeln dieses Landes. Das bleibt auf deinem Handy. Wir schicken es nirgendwohin.', // nieuw, nalezen
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
    sectorRetail: 'Laden und Supermarkt', // nieuw, nalezen
    sectorCleaning: 'Reinigung',
    sectorHorticulture: 'Gartenbau', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Technik', // nieuw (30 okt 2026), nalezen
    sectorGarage: 'Autowerkstatt', // nieuw (30 okt 2026), nalezen
    sound: 'Ton',
    soundOn: 'Mit Ton',
    withoutSound: 'Ohne Ton',
    quietHint: 'Ohne Ton haben die Lektionen keine Hörübungen, und nichts spielt von selbst. Tippe auf 🔊, um ein Wort zu hören, zum Beispiel mit Kopfhörern.',
    soundOffToast: 'Ohne Ton. Du kannst den Ton in den Einstellungen einschalten.',
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
    remindBreak: 'In der Pause',
    remindAfter: 'Nach der Arbeit',
    remindOwn: 'Andere Uhrzeit',
    remindAdd: 'Zu meinem Kalender hinzufügen',
    remindAdded: 'Öffne die Datei, um sie zu deinem Kalender hinzuzufügen.',
    remindAddedAsk: 'Hinzugefügt? Dann siehst du sie in deinem Kalender.', // nieuw, nalezen
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
    countHint: 'Die App zählt, wie oft Lektionen gemacht werden und wie lange sie ungefähr dauern. Und ob die App irgendwo einen Fehler hat. Kein Name, kein Konto, kein Tracking.', // fout-zin nieuw, nalezen
    certificate: 'Zertifikat',
    myCertificates: 'Meine Zertifikate',
    certsEmpty: 'Mach alle Lektionen eines Themas fertig. Dann bekommst du ein Zertifikat.',
    certEarned: 'Zertifikat geschafft!',
    certEarnedHint: 'Du hast alle Lektionen dieses Themas fertig gemacht.',
    certView: 'Ansehen',
    certLater: 'Später',
    certPrint: 'Drucken oder als PDF speichern',
    certSaved: 'Das Bild ist gespeichert.',
    certNameAsk: 'Dein Name auf dem Zertifikat?',
    certNameHint: 'Er bleibt nur auf diesem Handy. Du kannst das Feld leer lassen.',
    certNoName: 'Ohne Namen',
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
    privacyLink: 'Datenschutzerklärung lesen (auf Niederländisch)', // nieuw, nalezen
    routeTitle: 'Was möchtest du lernen?', // nieuw, nalezen
    routeLearn: 'Niederländisch für die Arbeit lernen, mit Hilfe in deiner Sprache', // nieuw, nalezen
    routeRules: 'Ich spreche schon Niederländisch: wie Arbeit in den Niederlanden und Belgien läuft', // nieuw, nalezen
    routeLearnShort: 'Niederländisch lernen', // nieuw, nalezen
    byTheme: 'Nach Bereich',
    inOrder: 'Der Reihe nach',
    searchTopics: 'Thema suchen', // nieuw, nalezen
    searchNone: 'Kein Thema mit diesem Wort.', // nieuw, nalezen
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
    micPrivacy: 'Nur du hörst es. Nichts wird geschickt.',
    micUnavailable: 'Mikrofon aus. Sag es jetzt laut, dann mach weiter.',
    cantSpeak: 'Ich kann gerade nicht sprechen',
    soundsSame: 'Klingt gleich',
    sayAgain: 'Sag es noch einmal',
    speakMe: 'Ich',
    speakingPractice: 'Sprechen üben',
    speakingHint: 'Sag Wörter laut und vergleiche. Deine Stimme wird nie gespeichert oder geschickt.',
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
    sectorGroupMake: 'Herstellen und Transport',
    sectorGroupCare: 'Pflege und Service',
    sectorGroupShop: 'Handel und Gastronomie', // nieuw, nalezen
    sectorGroupBuild: 'Bau und Technik', // nieuw (30 okt 2026), nalezen
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
    certNameDone: 'Fertig',
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
    lastUpdated: 'Zuletzt aktualisiert: {date}',
    /* G4 b3 */
    buildListen: 'Hör zu und bilde den Satz',
    chatWhichQuestion: 'Welche Frage passt zu dieser Antwort?',
    reviewWaiting: 'Noch {n} Wörter warten. Sie kommen in den nächsten Tagen wieder.',
    factTitle: 'Wusstest du?',
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
    resetKeeps: 'Deine Lektionen, Wörter, Serie und Zertifikate werden gelöscht. Deine Sprache, dein Code und deine Einstellungen bleiben.',
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Nicht geladen. Hast du Internet?',
    retry: 'Erneut versuchen',
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Was kannst du schon?', // nieuw, nalezen
    toetsOffer: 'Etwa 10 Minuten. Es gibt keine Noten. Es ist nur für dich.', // nieuw, nalezen
    toetsEndOffer: 'Du hast viel gelernt. Mach den Test noch einmal und sieh, was du jetzt kannst.', // nieuw, nalezen
    toetsPartListen: 'Hören', // nieuw, nalezen
    toetsPartWords: 'Wörter', // nieuw, nalezen
    toetsPartSentences: 'Sätze', // nieuw, nalezen
    toetsListenAsk: 'Hör zu. Was bedeutet das?', // nieuw, nalezen
    toetsNotSure: 'Du weißt es nicht? Wähl einfach eine Antwort. Das ist in Ordnung.', // nieuw, nalezen
    toetsMicKeep: 'Deine Aufnahme bleibt nur auf diesem Handy. Später kannst du dich noch einmal hören.', // nieuw, nalezen
    toetsStartDone: 'Guter Anfang! Das kannst du schon.', // nieuw, nalezen
    toetsEndDone: 'Gut gemacht! Sieh, was du jetzt kannst.', // nieuw, nalezen
    toetsYouThen: 'Du damals', // nieuw, nalezen
    toetsYouNow: 'Du jetzt', // nieuw, nalezen
    toetsKeepGoing: 'Übe jeden Tag ein bisschen. Dann lernst du immer mehr.', // nieuw, nalezen
    toetsStart: 'Test machen', // nieuw, nalezen
    tempo: 'Tempo', // nieuw, nalezen
    tempoCalm: 'Ruhig', // nieuw, nalezen
    tempoNormal: 'Normal', // nieuw, nalezen
    tempoHint: 'Ruhig ist langsam und deutlich. Normal ist so, wie Kollegen sprechen. Wähle „Normal“, wenn du schon viel verstehst.', // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Zeig, wie es läuft', // nieuw, nalezen
    coachCardIntro: 'Diese Karte zeigt deinen Fortschritt. Zeig sie deiner Lehrkraft, deinem Coach oder deinem Chef. Du entscheidest.', // nieuw, nalezen
    coachCardKeep: 'Dein Handy macht die Karte. Nichts wird gesendet. Vloertaal speichert nichts.', // nieuw, nalezen
    coachCardWhat: 'Auf der Karte, auf Niederländisch:', // nieuw, nalezen
    coachTopics: 'Fertige Themen', // nieuw, nalezen
    coachDays: 'Übungstage in den letzten 4 Wochen', // nieuw, nalezen
    coachLast: 'Letzte Lektion, mit Datum', // nieuw, nalezen
    coachNameAsk: 'Dein Name auf der Karte?', // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Das Handy hört zu (Versuch)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Nach dem Sprechen sagt das Handy, ob es dich verstanden hat. Das passiert auf dem Handy selbst. Nichts geht an uns oder an andere.', // nieuw, nalezen
    listenNeedsPack: 'Das Handy braucht zuerst Niederländisch. Das ist ein großer Download: nimm WLAN.', // nieuw, nalezen
    listenDownload: 'Niederländisch laden', // nieuw, nalezen
    listenNotNow: 'Jetzt nicht', // nieuw, nalezen
    listenDownloading: 'Niederländisch kommt. Versuch es später noch mal.', // nieuw, nalezen
    listenFailed: 'Das hat nicht geklappt. Versuch es später noch mal, mit WLAN.', // nieuw, nalezen
    listenPrivacy: 'Nur das Handy hört zu. Nichts wird geschickt.', // nieuw, nalezen
    heardWait: 'Das Handy hört zu…', // nieuw, nalezen
    heardOk: 'Verstanden', // nieuw, nalezen
    heardAlmost: 'Fast: sag {word} noch mal', // nieuw, nalezen
    heardNotYet: 'Noch nicht verstanden', // nieuw, nalezen
    goOnAnyway: 'Trotzdem weiter', // nieuw, nalezen
    fasterAsk: 'Willst du schneller lernen?', // nieuw, nalezen
    fasterHint: 'Weniger Erklärung in neuen Lektionen. Niederländisch im normalen Tempo.', // nieuw, nalezen
    fasterYes: 'Ja', // nieuw, nalezen
    fasterNo: 'Nein', // nieuw, nalezen
    easierNext: 'Die nächste Lektion ist etwas kürzer.', // nieuw, nalezen
    fasterSetting: 'Schneller lernen', // nieuw, nalezen
    fasterSettingHint: 'An: weniger Erklärung in neuen Lektionen und Niederländisch im normalen Tempo. Aus: wie vorher.', // nieuw, nalezen
    samenTitle: 'Zusammen üben', // nieuw, nalezen
    samenRowHint: 'Zwei Personen, ein Handy', // nieuw, nalezen
    samenIntro: 'Übe mit einer Kollegin, einem Freund oder einer Lehrkraft. Lest abwechselnd.', // nieuw, nalezen
    samenHow: 'Person 1 ist die Kollegin oder der Kollege. Person 2 antwortet.', // nieuw, nalezen
    samenNoScore: 'Nichts wird aufgenommen. Es gibt keine Punkte.', // nieuw, nalezen
    samenPerson: 'Person {n}', // nieuw, nalezen
    samenAnswer: 'Antwort', // nieuw, nalezen
    samenHear: 'Anhören', // nieuw, nalezen
    samenNext: 'Weiter', // nieuw, nalezen
    samenTranslation: 'Übersetzung', // nieuw, nalezen
    samenEnd: 'Gut gemacht! Rollen tauschen und noch einmal?', // nieuw, nalezen
    samenSwap: 'Rollen tauschen', // nieuw, nalezen
    samenStop: 'Fertig', // nieuw, nalezen
    checkStart: 'Kenne ich schon: kurzer Check', // nieuw, nalezen
    checkPassed: 'Das kennst du schon. Dieses Thema abhaken?', // nieuw, nalezen
    checkNoCert: 'Dann gibt es noch kein Zertifikat. Das bekommst du nach den Lektionen.', // nieuw, nalezen
    checkNotYet: 'Die Lektionen helfen dir bei diesem Thema.', // nieuw, nalezen
    checkMark: 'Abhaken', // nieuw, nalezen
    checkVia: 'per Check', // nieuw, nalezen
    checkUndo: 'Doch die Lektionen machen', // nieuw, nalezen
    shareInvite: 'Ich lerne Niederländisch für meine Arbeit mit Vloertaal. Kostenlos: {link}', // nieuw, nalezen
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
  },
};

export default lang;
