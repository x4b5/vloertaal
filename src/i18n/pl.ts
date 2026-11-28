import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Wygląd',
    themeAuto: 'Automatycznie',
    themeSand: 'Piasek', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Port', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Kurtka robocza', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Ciemny',
    voice: 'Głos niderlandzki',
    voiceAuto: 'Automatycznie',
    voiceHint: 'Dotknij 🔊, aby posłuchać. Głosy Vloertaal brzmią tak samo na każdym telefonie; pozostałe pochodzą z twojego telefonu.',
    voiceNone: 'To urządzenie nie ma głosu niderlandzkiego. Możesz go dodać w ustawieniach telefonu (Zamiana tekstu na mowę).',
    appTagline: 'Niderlandzki do pracy',
    chooseLanguage: 'Wybierz język pomocy',
    englishOnly: 'Tylko angielski',
    beta: 'Tłumaczenie jeszcze niesprawdzone', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'dzień z rzędu', few: 'dni z rzędu', many: 'dni z rzędu', other: 'dni z rzędu' },
    streakStarted: 'Twoja seria dni się zaczęła! Wróć jutro.',
    streakGrew: { one: '{n} dzień z rzędu! Tak trzymaj.', few: '{n} dni z rzędu! Tak trzymaj.', many: '{n} dni z rzędu! Tak trzymaj.', other: '{n} dni z rzędu! Tak trzymaj.' },
    start: 'Start',
    practice: 'Ćwicz ponownie',
    locked: 'Najpierw ukończ poprzednią lekcję',
    newWord: 'Nowe słowo',
    tapToHear: 'Dotknij, aby usłyszeć',
    sayItAloud: 'Powiedz to na głos.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Powiedz to cicho albo w myślach.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Co to znaczy?',
    snapQuestion: 'Rozumiesz?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Tak, okej.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Dobrze, że pytasz!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Dobrze zrozumiane!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Widzisz? Lepiej było zapytać.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Które z nich to „{word}”?',
    mixLesson: 'Powtórka mieszana',
    whatDoYouHear: 'Co słyszysz?',
    buildSentence: 'Ułóż to zdanie po niderlandzku',
    typeWhatYouHear: 'Wpisz, co słyszysz',
    check: 'Sprawdź',
    continue: 'Dalej',
    correct: 'Świetnie!',
    almost: 'Dobrze, ale uważaj na pisownię',
    incorrect: 'Nie całkiem',
    correctAnswer: 'Poprawna odpowiedź',
    rightAnswerIs: 'Poprawna odpowiedź to:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'Najlepsza odpowiedź to:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Twoja odpowiedź',
    inARow: '{n} z rzędu',
    cantListen: 'Nie mogę teraz słuchać',
    learnWriting: 'Chcę też uczyć się pisać',
    learnWritingHint: 'Włączone: wpisuj usłyszane słowa literami. Wyłączone: wybieraj zapisane słowo, które słyszysz.',
    tagRepeat: 'Jeszcze raz',
    readAloud: 'Przeczytaj na głos',
    lessonComplete: 'Lekcja ukończona!',
    phrasebook: 'Zwroty awaryjne',
    phrasebookHint: 'Dotknij zwrotu, aby go usłyszeć. Możesz też pokazać ekran koledze z pracy.',
    whoToCall: 'Problemy w pracy? Kto może pomóc',
    who112: 'Nagły wypadek: zagrożenie życia, pożar albo przestępstwo, które dzieje się teraz.',
    whoLegal: 'Bezpłatna porada w sprawie umowy, wynagrodzenia lub zwolnienia.',
    whoInspection: 'Zgłoś niebezpieczną pracę, za niską pensję lub wyzysk. Możesz to zrobić anonimowo.',
    whoFairwork: 'Ktoś cię wyzyskuje w pracy albo tak myślisz.',
    who113: 'Myślisz o odebraniu sobie życia albo martwisz się o kogoś. Bezpłatnie, w dzień i w nocy.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Przemoc lub krzywdzenie w domu, wobec ciebie albo kogoś innego. Bezpłatnie, można anonimowo.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'Ustawienia',
    helpLanguage: 'Język pomocy',
    resetProgress: 'Zresetuj mój postęp',
    resetConfirm: 'Usunąć cały postęp na tym urządzeniu?',
    audioUnavailable: 'Dźwięk nie jest dostępny na tym urządzeniu.',
    slow: 'Wolno',
    completeChat: 'Dokończ rozmowę',
    meaning: 'Znaczenie',
    navRoute: 'Lekcje',
    navWords: 'Pomoc',
    rightFirstTime: 'Dobrze za pierwszym razem',
    newWords: 'Nowe słowa',
    wordsLearnedN: { one: '{n} nauczone słowo', few: '{n} nauczone słowa', many: '{n} nauczonych słów', other: '{n} nauczonych słów' },
    practiseMistakes: { one: 'Powtórz błędy · został {n}', few: 'Powtórz błędy · zostały {n}', many: 'Powtórz błędy · zostało {n}', other: 'Powtórz błędy · zostało {n}' },
    quitHint: 'Twoje odpowiedzi z tej lekcji nie zostaną zapisane.',
    keepGoing: 'Ucz się dalej',
    stopLesson: 'Przerwij lekcję',
    fullVersion: 'Pełna wersja',
    unlockFull: 'Odblokuj pełną wersję',
    unlockHint: 'Z kodem otworzą się wszystkie lekcje. Kod jest darmowy. Nie masz jeszcze kodu? Zapytaj nauczyciela lub opiekuna albo napisz do nas:',
    codeNotFull: 'Ten kod nie otwiera pełnej wersji. Poproś o nowy kod.',
    password: 'Kod',
    enterPassword: 'Wpisz kod',
    wrongPassword: 'Kod jest nieprawidłowy. Spróbuj jeszcze raz.',
    unlock: 'Odblokuj',
    sector: 'Twoja praca',
    chooseSector: 'Gdzie pracujesz?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'W jakim kraju pracujesz?',
    countryHint: 'Dostaniesz słowa i wskazówki tego kraju.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'To, czego się uczysz, jest tylko na tym telefonie.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Używaj zawsze tego telefonu.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Holandia',
    countryBe: 'Belgia (Flandria)',
    tipsNote: 'Te wskazówki dotyczą pracy w Holandii. To ogólne informacje, nie porada prawna.',
    sectorHint: 'Lekcje do twojej pracy są już na początku. Możesz to później zmienić w Ustawieniach.',
    otherSectors: 'Inne branże',
    reviewToday: 'Powtórka na dziś',
    reviewTodayN: { one: '{n} słowo do powtórki · kilka minut', few: '{n} słowa do powtórki · kilka minut', many: '{n} słów do powtórki · kilka minut', other: '{n} słów do powtórki · kilka minut' },
    notSureYet: 'Jeszcze nie wiem',
    sectorLogistics: 'Logistyka',
    sectorConstruction: 'Budownictwo',
    sectorProduction: 'Produkcja',
    sectorCare: 'Opieka',
    sectorHospitality: 'Gastronomia i hotele',
    sectorRetail: 'Sklep i supermarket', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Sprzątanie',
    sectorHorticulture: 'Ogrodnictwo', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Technika', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Warsztat samochodowy', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Dźwięk',
    soundOn: 'Z dźwiękiem',
    withoutSound: 'Bez dźwięku',
    quietHint: 'Bez dźwięku lekcje nie mają ćwiczeń ze słuchania i nic nie odtwarza się samo. Dotknij 🔊, aby usłyszeć słowo, na przykład w słuchawkach.',
    soundOffToast: 'Bez dźwięku. Dźwięk możesz włączyć w Ustawieniach.',
    noInternetSound: 'Brak internetu: dźwięk teraz nie działa.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Dziś jeszcze do zrobienia',
    streakStopped: { one: 'Twoja seria skończyła się na {n} dniu. Zacznij dziś od nowa.', few: 'Twoja seria skończyła się na {n} dniach. Zacznij dziś od nowa.', many: 'Twoja seria skończyła się na {n} dniach. Zacznij dziś od nowa.', other: 'Twoja seria skończyła się na {n} dniach. Zacznij dziś od nowa.' },
    recordN: { one: 'Twój rekord: {n} dzień', few: 'Twój rekord: {n} dni', many: 'Twój rekord: {n} dni', other: 'Twój rekord: {n} dni' },
    workWeek: 'Twój tydzień pracy',
    freeDaysN: { one: 'Masz {n} wolny dzień. Jeśli opuścisz jeden dzień, seria trwa dalej.', few: 'Masz {n} wolne dni. Jeśli opuścisz jeden dzień, seria trwa dalej.', many: 'Masz {n} wolnych dni. Jeśli opuścisz jeden dzień, seria trwa dalej.', other: 'Masz {n} wolnych dni. Jeśli opuścisz jeden dzień, seria trwa dalej.' },
    restDay: 'Wolny dzień',
    tier3: '3 dni z rzędu',
    tier7: '1 tydzień z rzędu',
    tier14: '2 tygodnie z rzędu',
    tier30: '1 miesiąc z rzędu',
    reviewDone: 'Na dziś gotowe',
    tomorrowN: { one: 'Jutro do powtórki: {n} słowo', few: 'Jutro do powtórki: {n} słowa', many: 'Jutro do powtórki: {n} słów', other: 'Jutro do powtórki: {n} słów' },
    firstWordsTomorrow: 'Jutro wrócą twoje pierwsze słowa',
    extraRound: 'Dodatkowa runda',
    reviewFirstHint: 'Najpierw powtórka. Wtedy zapamiętasz więcej.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} słowo lepiej utrwalone', few: '{n} słowa lepiej utrwalone', many: '{n} słów lepiej utrwalonych', other: '{n} słów lepiej utrwalonych' },
    noMistakes: 'Bez błędów',
    nextUp: 'Następna lekcja',
    installTitle: 'Dodaj Vloertaal do ekranu głównego',
    installHint: 'Wtedy otwiera się jak aplikacja, także bez internetu.',
    installAdd: 'Dodaj do ekranu głównego',
    iosStep1: 'Dotknij „Udostępnij”',
    iosStep2: 'Dotknij „Do ekranu początkowego”',
    iosStep3: 'Gotowe!',
    backupTitle: 'Zachowaj swoje postępy',
    backupHint: 'Twoje postępy są tylko na tym telefonie. Zapisz je jako plik, na przykład na nowy telefon.',
    backupSave: 'Pobierz',
    backupLoad: 'Przywróć',
    backupBad: 'To nie jest plik Vloertaal.',
    backupAsk: 'Dodać ten plik do twoich postępów czy zastąpić nim twoje postępy?',
    backupMerge: 'Połącz',
    backupReplace: 'Zastąp',
    backupBack: 'Twoje postępy wróciły.',
    backupNothingNew: 'Nic nowego: to już było w twoim telefonie.',
    cancel: 'Anuluj',
    remindTitle: 'Przypominaj mi codziennie',
    remindEvent: 'Czas na niderlandzki (10 minut)',
    remindHint: 'Kalendarz w telefonie ci przypomni. Nic nie jest wysyłane do nas.',
    remindBefore: 'Przed pracą',
    remindAfter: 'Po pracy',
    remindOwn: 'Inna godzina',
    remindAdd: 'Dodaj do mojego kalendarza',
    remindAdded: 'Otwórz plik, aby dodać go do kalendarza.',
    remindAddedAsk: 'Dodane? Wtedy zobaczysz je w kalendarzu.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'O aplikacji',
    tagMeaning: 'Znaczenie',
    tagPick: 'Wybierz',
    tagListen: 'Słuchaj',
    tagType: 'Pisz',
    tagMatch: 'Pary',
    tagBuild: 'Zdanie',
    tagChat: 'Rozmowa',
    tagSituation: 'Sytuacja',
    tagTip: 'Wskazówka',
    more: 'Więcej',
    less: 'Mniej',
    daysUnit: { one: 'dzień', few: 'dni', many: 'dni', other: 'dni' },
    wordsUnit: { one: 'słowo', few: 'słowa', many: 'słów', other: 'słów' },
    countTitle: 'Anonimowe liczenie',
    countHint: 'Aplikacja liczy, jak często robi się lekcje i mniej więcej ile trwają. I czy w aplikacji gdzieś pojawia się błąd. Bez imienia, bez konta, bez śledzenia.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Certyfikat',
    myCertificates: 'Moje certyfikaty',
    certsEmpty: 'Skończ wszystkie lekcje działu. Wtedy dostaniesz certyfikat.',
    certEarned: 'Masz certyfikat!',
    certEarnedHint: 'Wszystkie lekcje tego działu są skończone.',
    certView: 'Zobacz',
    certLater: 'Później',
    certPrint: 'Drukuj lub zapisz jako PDF',
    certSaved: 'Obraz jest zapisany.',
    certNameHint: 'Twoje imię zostaje tylko na tym telefonie. Możesz też zostawić to pole puste.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certChangeName: 'Zmień imię',
    certPractice: 'Certyfikat ćwiczeniowy, nie oficjalny dyplom',
    resumeLesson: 'Kontynuuj lekcję',
    restartLesson: 'Zacznij od nowa',
    quitKept: 'Twoje postępy są zapisane. Możesz wrócić później.',
    bestAnswer: 'Najlepsza odpowiedź',
    inReview: 'w trakcie sprawdzania',
    today: 'Dziś',
    playAgain: 'Posłuchaj jeszcze raz',
    daysUnitOne: 'dzień',
    wordsUnitOne: 'słowo',
    wordsLearnedOne: 'Nauczone słowo: {n}',
    tomorrowOne: 'Jutro: {n} słowo',
    wordsStrongerOne: '{n} słowo lepiej utrwalone',
    recordOne: 'Twój rekord: {n} dzień',
    streakStoppedOne: 'Twoja seria skończyła się na {n} dniu. Zacznij dziś od nowa.',
    letterTiles: 'Litery',
    useKeyboard: 'Klawiatura',
    skippedN: { one: '{n} ćwiczenie pominięte, nie liczy się', few: '{n} ćwiczenia pominięte, nie liczą się', many: '{n} ćwiczeń pominiętych, nie liczą się', other: '{n} ćwiczeń pominiętych, nie liczą się' },
    stampLater: 'Wróci później',
    stampDone: 'Gotowe',
    chooseNext: 'Wybierz następny temat',
    recommended: 'Polecane',
    allTopics: 'Wszystkie tematy',
    topicsOrder: 'Pokaż tematy',
    privacyLink: 'Przeczytaj oświadczenie o prywatności (po niderlandzku)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Czego chcesz się uczyć?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Nauka niderlandzkiego do pracy i tego, jak tu wygląda praca', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Mówię już po niderlandzku: tylko zasady pracy', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Nauka niderlandzkiego', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Przejść do Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Wszystko będzie po niderlandzku. Język pomocy się wyłączy.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Dopóki nie wrócisz, powtarzasz zasady, a nie słowa.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Twoje postępy zostaną zapisane. Wrócić możesz tutaj.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Tak, przejdź do Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Według działów',
    inOrder: 'Po kolei',
    searchTopics: 'Szukaj tematu', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Brak tematu z tym słowem.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: 'lekcja', few: 'lekcje', many: 'lekcji', other: 'lekcji' },
    lessonsUnitOne: 'lekcja',
    topicsUnit: { one: 'temat', few: 'tematy', many: 'tematów', other: 'tematu' },
    topicsUnitOne: 'temat',
    allTopicsDone: 'Wszystkie tematy ukończone. Brawo!',
    // Speaking practice
    tagSpeak: 'Mów',
    speakPrompt: 'Posłuchaj, potem powiedz',
    tapToSpeak: 'Dotknij i mów',
    stopRecording: 'Stop',
    micPrivacy: "Nikt inny cię nie słyszy. Nic nie jest wysyłane.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Mikrofon wyłączony. Powiedz to teraz na głos, potem idź dalej.',
    cantSpeak: 'Nie mogę teraz mówić',
    soundsSame: 'Brzmi tak samo',
    sayAgain: 'Powiedz jeszcze raz',
    hearMine: 'Posłuchaj siebie', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Wtedy i teraz', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Pierwsza próba: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Powiedz to razem", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Mów w tym samym czasie co głos. Nic nie jest nagrywane.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Teraz tylko ty", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Błędy są częścią nauki. Nie zrozumieli cię? Powiedz to jeszcze raz.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Stresujesz się? To normalne. Powiedz to mimo to.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Nie musisz mówić idealnie. Po prostu spróbuj.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Dlaczego uczysz się niderlandzkiego?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Wybierz jedno lub dwa.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Gotowe", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Dobrze wykonywać pracę", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Moje dzieci", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Rozmawiać z kolegami", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Samodzielnie załatwiać sprawy", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonJob: "Lepsza praca", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Czuć się w Holandii jak w domu", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'Ja',
    speakingPractice: 'Ćwiczenie mówienia',
    speakingHint: "Mów słowa na głos i porównuj. Nikt inny cię nie słyszy: nic nie jest wysyłane. Twoje pierwsze nagranie zdania zostaje w telefonie, żeby porównać później.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Zapisywanie…',
    savedOffline: 'Zapisano offline',
    offlineNoSpace: 'Za mało miejsca w telefonie. Usuń zapisany temat lub zwolnij miejsce.',
    offlineFailed: 'Nie udało się zapisać. Sprawdź internet i spróbuj ponownie.',
    pocketCard: 'Ściągawka',
    pocketSave: 'Zapisz jako obraz',
    textSize: 'Rozmiar tekstu',
    textNormal: 'Normalny',
    textLarge: 'Duży',
    textXl: 'Bardzo duży',
    showEnglish: 'Pokazuj też angielski',
    genderTitle: 'Kobieta czy mężczyzna?',
    genderHint: 'Żeby w twoim języku zwracać się do ciebie we właściwej formie.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    genderWoman: 'Kobieta',
    genderMan: 'Mężczyzna',
    genderNone: 'Wolę nie mówić',
    langGuessYes: 'Tak',
    langGuessOther: 'Inny język',
    settingsLangMe: 'Język i ja',
    settingsLessons: 'Lekcje',
    settingsPhone: 'Ten telefon',
    settingOn: 'Włączone',
    settingOff: 'Wyłączone',
    sectorGroupMake: 'Produkcja i transport',
    sectorGroupCare: "Opieka i dzieci", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Handel i gastronomia', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Budownictwo i technika', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Głos kobiety',
    voiceMan: 'Głos mężczyzny',
    writingPick: 'Wybór słowa',
    settingWriting: 'Pisanie',
    settingKeepLessons: 'Przechowuj lekcje na tym telefonie',
    settingKeepLessonsHint: 'Obecny temat zapisuje się na tym telefonie, więc działa też bez internetu. Ukończone tematy są potem usuwane.',
    otherTopicLink: 'Inny temat',
    remindAsk: 'Przypominać ci codziennie?',
    remindYes: 'Tak, po pracy',
    remindNo: 'Nie, dziękuję',
    remindPickTime: 'Kiedy mamy ci przypominać?',
    certSaveShare: 'Zapisz lub udostępnij',
    pauseTitle: 'Pauza',
    back: 'Wstecz',
    quitLesson: 'Wyjdź z lekcji',
    playAudio: 'Odsłuchaj',
    scrollDown: 'Przewiń w dół',
    lessonProgress: 'Postęp lekcji',
    mainMenu: 'Menu główne',
    spaceKey: 'Spacja',
    langNotOnPhone: 'Tego języka nie ma jeszcze w twoim telefonie. Połącz się z internetem, aby zmienić język.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'Wybierz godzinę sam', f: 'Wybierz godzinę sama', x: 'Wybierz własną godzinę' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    gateWho: 'Kod dostajesz od nauczyciela, opiekuna lub pracodawcy.',
    gateTrust: 'Bez konta. Bez imienia. Wszystko zostaje na tym telefonie.',
    codeAccepted: 'Kod przyjęty',
    startFree: 'Nie masz kodu? Zacznij od pierwszych lekcji',
    bramHello: 'Dobrze cię widzieć.',
    bramBack: 'Witaj z powrotem. Idziemy dalej.',
    bramRested: 'Wczoraj był twój wolny dzień. Seria trwa dalej.',
    bramDueN: { one: '{n} słowo do powtórki dziś.', few: '{n} słowa do powtórki dziś.', many: '{n} słów do powtórki dziś.', other: '{n} słów do powtórki dziś.' },
    bramDueOne: 'Słowa do powtórki dziś: {n}',
    bramDayN: 'Dzień {n} z rzędu.',
    bramDone: { m: 'Na dziś zrobiłeś wszystko. Do jutra.', f: 'Na dziś zrobiłaś wszystko. Do jutra.', x: 'Na dziś wszystko zrobione. Do jutra.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    bramPerfect: 'Bardzo dobrze. Znasz te słowa.',
    bramGood: 'Dobra robota. Krok po kroku.',
    bramHard: { m: 'Dobrze, że ćwiczyłeś. Trudne słowa wrócą.', f: 'Dobrze, że ćwiczyłaś. Trudne słowa wrócą.', x: 'Dobrze, że ćwiczysz. Trudne słowa wrócą.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    bramReview: 'Dobrze. Powtarzanie pomaga zapamiętać.',
    bramIntro: 'Jestem Bram, twój kolega z pracy.',
    bramIntroHello: 'Cześć, jestem Bram.',
    showDutch: 'Pokaż po niderlandzku',
    showAnswers: 'Pokaż odpowiedzi', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Ostatnia aktualizacja: {date}',
    /* G4 b3 */
    buildListen: 'Posłuchaj i ułóż zdanie',
    chatWhichQuestion: 'Które pytanie pasuje do tej odpowiedzi?',
    reviewWaiting: 'Czekają jeszcze słowa: {n}. Wrócą w najbliższych dniach.',
    factTitle: 'Czy wiesz?',
    fact3: { m: 'Nie jesteś sam: ponad 3 miliony dorosłych w Holandii mają trudności z czytaniem, liczeniem lub komputerem. Ćwiczenie pomaga.', f: 'Nie jesteś sama: ponad 3 miliony dorosłych w Holandii mają trudności z czytaniem, liczeniem lub komputerem. Ćwiczenie pomaga.', x: 'Nie tylko ty: ponad 3 miliony dorosłych w Holandii mają trudności z czytaniem, liczeniem lub komputerem. Ćwiczenie pomaga.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    fact7: 'Spośród migrantów, którzy bardzo dobrze mówią po niderlandzku, 69 na 100 ma płatną pracę.',
    fact14: 'W wielu bibliotekach jest Taalhuis („dom języka”): darmowa pomoc w dalszej nauce niderlandzkiego.',
    fact30: { m: 'Lepiej ćwiczyć trochę codziennie niż dużo od czasu do czasu. Ćwiczyłeś już 30 dni z rzędu!', f: 'Lepiej ćwiczyć trochę codziennie niż dużo od czasu do czasu. Ćwiczyłaś już 30 dni z rzędu!', x: 'Lepiej ćwiczyć trochę codziennie niż dużo od czasu do czasu. Masz już 30 dni ćwiczeń z rzędu!' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Ten plik ma {n} lekcję.', few: 'Ten plik ma {n} lekcje.', many: 'Ten plik ma {n} lekcji.', other: 'Ten plik ma {n} lekcji.' },
    backupFileOne: 'Ten plik ma {n} lekcję.',
    backupPhoneN: { one: 'Masz {n} lekcję.', few: 'Masz {n} lekcje.', many: 'Masz {n} lekcji.', other: 'Masz {n} lekcji.' },
    backupPhoneOne: 'Masz {n} lekcję.',
    backupFewer: '„Zastąp” usuwa lekcje, których nie ma w pliku. „Połącz” zachowuje wszystko.',
    backupTooBig: 'Ten plik jest za duży. Plik Vloertaal jest dużo mniejszy.',
    backupNewPhone: 'Nowy telefon? Tam też będzie potrzebny twój kod.',
    remindEveryDay: 'Twoje przypomnienie: codziennie o {time}',
    remindStop: 'Wyłącz przypomnienie',
    remindStopped: 'Otwórz plik, aby usunąć przypomnienie z kalendarza.',
    remindStoppedAndroid: 'Usuń przypomnienie samodzielnie w Kalendarzu Google.',
    resetKeeps: 'Twoje lekcje, słowa, dni z rzędu i certyfikaty zostaną usunięte. Twój język i ustawienia zostają.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Nie załadowało się. Czy jest internet?',
    retry: 'Spróbuj ponownie',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal nie może się uruchomić.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Najpierw zachowaj swoje postępy. Potem zacznij od nowa.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Zacznij od nowa', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Coś poszło nie tak. Twoje postępy są zapisane.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Co już znasz?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Około 10 minut. Nie ma ocen. To tylko dla ciebie.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: { m: 'Dużo się nauczyłeś. Zrób test jeszcze raz i zobacz, co teraz wiesz.', f: 'Dużo się nauczyłaś. Zrób test jeszcze raz i zobacz, co teraz wiesz.', x: 'Masz za sobą dużo nauki. Zrób test jeszcze raz i zobacz, co teraz wiesz.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Słuchanie', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Słowa', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Zdania', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Posłuchaj. Co to znaczy?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Nie wiesz? Dotknij „Nie wiem”. To nic.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Twoje nagranie zostaje tylko na tym telefonie. Później usłyszysz siebie jeszcze raz.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Dobry początek! To już znasz.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Dobra robota! Zobacz, co teraz wiesz.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Ty wtedy', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Ty teraz', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Ćwicz trochę codziennie. Wtedy nauczysz się coraz więcej.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Zrób test', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Nie wiem', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Więcej niż wtedy', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Mniej więcej tak samo', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Wszystko razem: teraz znasz więcej niż wtedy.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Wszystko razem: mniej więcej tak samo jak wtedy.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Najpierw 5 pytań o ciebie. Nie ma dobrych ani złych odpowiedzi.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Czy odważysz się na to?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Powiedzieć, że czegoś nie rozumiesz', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Zapytać o coś przełożonego', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Poprosić o pomoc', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Powiedzieć, że coś nie jest bezpieczne', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Porozmawiać chwilę z kimś z pracy w przerwie', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Jeszcze nie', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Trochę', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Tak', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'Za kilka tygodni zapytamy jeszcze raz.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Tempo', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Spokojnie', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normalnie', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Spokojnie to wolno i wyraźnie. Normalnie to tak, jak mówią koledzy. Wybierz „Normalnie”, jeśli już dużo rozumiesz.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Pokaż, jak ci idzie', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Ta karta pokazuje twoje postępy. Pokaż ją nauczycielowi, opiekunowi albo szefowi. Ty decydujesz.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    coachCardNo: 'Możesz też powiedzieć „nie”.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Kartę robi twój telefon. Nic nie jest wysyłane. Vloertaal nic nie zapisuje.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'Na karcie, po niderlandzku:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Skończone tematy', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Dni ćwiczeń w ostatnich 4 tygodniach', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Ostatnia lekcja, z datą', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Kod: te same liczby w skrócie, do przeglądu grupy. Bez imienia.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Telefon słucha (próba)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Gdy coś powiesz, telefon pokaże, czy cię zrozumiał. To dzieje się w samym telefonie. Nic nie trafia do nas ani do innych.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Telefon najpierw potrzebuje niderlandzkiego. To duże pobieranie: użyj Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Pobierz niderlandzki', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Nie teraz', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Niderlandzki się pobiera. Spróbuj później.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Nie udało się. Spróbuj później, przez Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Słucha tylko telefon. Nic nie jest wysyłane.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Telefon słucha…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Zrozumiano', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Prawie: powiedz {word} jeszcze raz', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Jeszcze nie zrozumiano', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Mimo to dalej', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Chcesz szybciej?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Mniej wyjaśnień w nowych lekcjach. Niderlandzki w normalnym tempie.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Tak', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Nie', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Następna lekcja jest trochę krótsza.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Ucz się szybciej', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Włączone: mniej wyjaśnień w nowych lekcjach i niderlandzki w normalnym tempie. Wyłączone: jak wcześniej.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Jak ci się podoba Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Dobrze', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Tak sobie', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Słabo', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Dziękujemy! To pomaga nam ulepszać Vloertaal.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Ucz się szybciej: mniej wyjaśnień w nowych lekcjach i niderlandzki w normalnym tempie.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Ćwiczcie razem', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Dwie osoby, jeden telefon', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Ćwicz z kolegą z pracy, przyjacielem albo nauczycielem. Czytajcie na zmianę.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'Osoba 1 to kolega z pracy. Osoba 2 odpowiada.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Nic nie jest nagrywane. Nie ma punktów.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Osoba {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Odpowiedź', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Posłuchaj', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Dalej', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Tłumaczenie', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Brawo! Zamieńcie się rolami i zróbcie to jeszcze raz?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Zamieńcie się rolami', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Gotowe', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Znam to: krótki test', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Już to znasz. Odhaczyć ten temat?', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'Wtedy nie ma jeszcze certyfikatu. Dostaniesz go po lekcjach.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Lekcje pomogą ci w tym temacie.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'Odhacz', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'przez test', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Jednak zrób lekcje', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: 'Komunikacja', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Uczę się niderlandzkiego do pracy z Vloertaal. Za darmo: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal to darmowa aplikacja do nauki niderlandzkiego do pracy.', // nieuw, nalezen
    briefjeHow: 'Krótkie lekcje na własnym telefonie, z pomocą w twoim języku. Bez konta.', // nieuw, nalezen
    briefjeOpen: 'Otwórz na telefonie:', // nieuw, nalezen
    workTry: 'Spróbuj dziś w pracy', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Kiedy:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Wtedy powiedz:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Dla kolegi z pracy', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Pokaż to koledze z pracy, który mówi po niderlandzku. Jest tu napisane, jak może ci pomóc ćwiczyć.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'Wyślij koledze', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Dla twojego opiekuna', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Jak tu wygląda praca, prostym niderlandzkim. Telefon czyta na głos.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Znasz już dużo niderlandzkiego. Przy każdym temacie możesz też przeczytać, jak tu wygląda praca, prostym niderlandzkim.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Brak: mówię po niderlandzku', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Zdania powiedziane w pracy', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Słowa, które są jeszcze trudne', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Lekcje o tym, jak tu wygląda praca', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Pokazuj nazwy tematów o twoich prawach', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    speakFromMemory: 'Teraz z pamięci: jak to było po niderlandzku?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Słowa sprzed 2 tygodni lub dawniej: pamiętasz jeszcze {n} z {m}.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'Czasownik stoi na miejscu 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Punkty', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Wszystkie twoje punkty', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Nastrój', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Spokojnie', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Gra', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Spokojnie: nic się nie rusza, bez świętowania. Gra: punkty, dźwięki i dużo ruchu.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Usługi i ochrona", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Praca na zewnątrz", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Opieka nad dziećmi", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Odpady i recykling", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Przemysł spożywczy", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Ochrona", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Obsługa budynków", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Tereny zielone i ogrody", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Poziom', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Początek', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Nauka', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'W zespole', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Fach w ręku', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Z doświadczeniem', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Mistrzostwo', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Nowy poziom:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Bez błędów:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Cel na dziś', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Cel na dziś osiągnięty!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Nowe w twojej skrzynce:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Moja skrzynka z narzędziami', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Skończ lekcję z grą. Wtedy dostaniesz pierwsze narzędzie.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Więcej wyjaśnień', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'O tych wskazówkach', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Ekspert jeszcze nie sprawdził tego wyjaśnienia.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Data tego wyjaśnienia: {month}. Najnowsze zasady sprawdź w Juridisch Loket albo w Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Data tego wyjaśnienia: {month}. Najnowsze zasady sprawdź w justitiehuis albo na werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Więcej o Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Udało się to powiedzieć w pracy?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Tak, udało się', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Jeszcze nie', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Dobra robota! Już {n} zdanie udało się w pracy.', few: 'Dobra robota! Już {n} zdania udały się w pracy.', many: 'Dobra robota! Już {n} zdań udało się w pracy.', other: 'Dobra robota! Już {n} zdania udało się w pracy.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Dobra robota! Twoje pierwsze zdanie w pracy się udało.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Znajdziesz je w Ustawieniach.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Udało się w pracy', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: { m: 'Te zdania powiedziałeś w pracy.', f: 'Te zdania powiedziałaś w pracy.', x: 'Te zdania udało się powiedzieć w pracy.' }, // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'ok. {n} min', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Twoje postępy nie zostały zapisane. Czy telefon jest pełny? Zrób trochę miejsca. Albo wejdź w Ustawienia: „Zachowaj swoje postępy”.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Telefon czasem może usunąć twoje postępy. Dlatego zachowaj kopię.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Zapisz teraz', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Wyślij do siebie', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Wyślij plik do siebie, na przykład na WhatsAppie albo e-mailem.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Gotowe. Dobrze przechowuj ten plik. Dzięki niemu później przywrócisz swoje postępy.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Co mówisz?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Przykład', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Posłuchaj odpowiedzi', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Słuchaj w pracy', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Jest hałas, jak w pracy. Słuchaj. Potem będą pytania.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Postaw zaznaczone słowo na początku', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Zasady pracy', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Znasz już dużo niderlandzkiego. Chcesz też poznać zasady pracy? Wtedy wszystko jest po niderlandzku.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Tak, pokaż', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Jak to powiedzieć?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Dotknij dźwięku. Zobacz, jak robią go usta.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Szybkość', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Słowo, dźwięk po dźwięku', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Dźwięk', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Pierwsze kroki',
    'theme.safe': 'Bezpieczna praca',
    'theme.find': 'Szukanie pracy',
    'theme.job': 'Twoja praca',
    'theme.together': 'Współpraca',
    'theme.rights': 'Twoje prawa',
    'theme.life': 'Życie w Holandii',
    'theme.sector': 'Twoja branża',
    // Unit: First day at work
    'u.firstday': 'Pierwszy dzień w pracy',
    'l.hello': 'Przywitaj się',
    'w.hallo': 'cześć',
    'w.goedemorgen': 'dzień dobry (rano)',
    'w.dankjewel': 'dziękuję',
    'w.ja': 'tak',
    'w.nee': 'nie',
    'w.totmorgen': 'do jutra',
    's.hello.1': { m: 'Cześć, jestem nowy.', f: 'Cześć, jestem nowa.', x: 'Cześć, jestem tu nową osobą.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.hello.2': 'Dzień dobry, jestem Ali.',
    's.hello.3': 'Dziękuję, do jutra!',
    'l.people': 'Ludzie w pracy',
    'w.collega': 'kolega / koleżanka z pracy',
    'w.baas': 'szef',
    'w.leidinggevende': 'przełożony',
    'w.werk': 'praca',
    'w.naam': 'imię',
    'w.nieuw': 'nowy',
    's.people.1': 'Mam na imię Sara.',
    's.people.2': 'Kto jest szefem?',
    's.people.3': { m: 'Jestem nowym kolegą z pracy.', f: 'Jestem nową koleżanką z pracy.', x: 'Jestem nową osobą w zespole.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov

    // Unit: Asking for help
    'u.help': 'Prośba o pomoc',
    'l.understand': 'Nie rozumiem',
    'w.begrijpniet': 'nie rozumiem',
    'w.nogeenkeer': 'jeszcze raz',
    'w.langzaam': 'powoli',
    'w.helpen': 'pomagać',
    'w.waar': 'gdzie',
    'w.wc': 'toaleta',
    's.understand.1': 'Czy może pan/pani to powtórzyć?',
    's.understand.2': 'Czy może pan/pani mówić wolniej?',
    's.understand.3': 'Gdzie jest toaleta?',

    // Unit: Safety first
    'u.safety': 'Bezpieczeństwo przede wszystkim',
    'u.emergency': "Kiedy coś pójdzie nie tak", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Środki ochrony',
    'w.helm': 'kask',
    'w.handschoenen': 'rękawice',
    'w.veiligheidsschoenen': 'obuwie ochronne',
    'w.hesje': 'kamizelka odblaskowa',
    'w.bril': 'okulary ochronne',
    'w.dragen': 'nosić (na sobie)',
    's.gear.1': 'Zawsze noś kask.',
    's.gear.2': 'Gdzie są rękawice?',
    's.gear.3': 'Mam na sobie kamizelkę odblaskową.',
    'l.danger': 'Niebezpieczeństwo!',
    'w.pasop': 'uwaga',
    'w.stop': 'stop',
    'w.help': 'pomocy',
    'w.brand': 'pożar',
    'w.nooduitgang': 'wyjście ewakuacyjne',
    'w.ongeluk': 'wypadek',
    's.danger.1': 'Uwaga, podłoga jest mokra!',
    's.danger.2': 'Gdzie jest wyjście ewakuacyjne?',
    's.danger.3': 'Był wypadek!',
    'l.alarm': 'Alarm pożarowy i ewakuacja', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'alarm', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'ewakuować (wszyscy wychodzą z budynku)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'droga ewakuacyjna', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'schody', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'miejsce zbiórki (gdzie wszyscy spotykają się na zewnątrz)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'gaśnica', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Gdzie jest gaśnica?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Musimy ewakuować budynek.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Idź schodami, nie windą.', // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': 'Zgłaszanie wypadku',
    'w.gewond': 'ranny',
    'w.bloeden': 'krwawić',
    'w.ehbodoos': 'apteczka',
    'w.bhver': 'ratownik zakładowy (pierwsza pomoc, pożar, ewakuacja)',
    'w.ziekenhuis': 'szpital',
    'w.gebeuren': 'dziać się, zdarzyć się',
    's.accident.1': 'Mój kolega upadł.',
    's.accident.2': { m: 'Skaleczyłem się.', f: 'Skaleczyłam się.', x: 'Mam skaleczenie.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.accident.3': 'Chcę zgłosić wypadek.',

    // Unit: In the warehouse
    'u.warehouse': 'W magazynie',
    'l.things': 'Rzeczy w magazynie',
    'w.doos': 'karton',
    'w.pallet': 'paleta',
    'w.heftruck': 'wózek widłowy',
    'w.kar': 'wózek ręczny',
    'w.stelling': 'regał',
    'w.scanner': 'skaner',
    's.things.1': 'Postaw karton na palecie.',
    's.things.2': 'Gdzie jest skaner?',
    's.things.3': 'Jedzie wózek widłowy.',
    'l.directions': 'Kierunki i czynności',
    'w.links': 'po lewej',
    'w.rechts': 'po prawej',
    'w.boven': 'na górze',
    'w.beneden': 'na dole',
    'w.tillen': 'podnosić',
    'w.pakken': 'brać',
    's.directions.1': 'Karton stoi po lewej.',
    's.directions.2': 'Podnoś, uginając nogi.',
    's.directions.3': 'Idź w prawo.',

    // Unit: Time and schedule
    'u.time': 'Czas i grafik',
    'l.shift': 'Moja zmiana',
    'w.dienst': 'zmiana',
    'w.pauze': 'przerwa',
    'w.beginnen': 'zaczynać',
    'w.klaar': 'skończone, gotowe',
    'w.telaat': 'spóźniony, za późno', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.morgen': 'jutro',
    's.shift.1': 'Moja zmiana zaczyna się o siódmej.',
    's.shift.2': 'Kiedy jest przerwa?',
    's.shift.3': { m: 'Przepraszam, spóźniłem się.', f: 'Przepraszam, spóźniłam się.', x: 'Przepraszam za spóźnienie.' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'l.sick': 'Zgłaszanie choroby',
    'w.ziek': 'chory',
    'w.bellen': 'dzwonić (telefonem)',
    'w.dokter': 'lekarz',
    'w.pijn': 'ból',
    'w.vandaag': 'dzisiaj',
    'w.beter': 'lepiej',
    's.sick.1': { m: 'Jestem dzisiaj chory.', f: 'Jestem dzisiaj chora.', x: 'Dzisiaj choruję.' }, // x: nieuw, nalezen (AI-correctie 28 nov 2026)
    's.sick.2': 'Bolą mnie plecy.',
    's.sick.3': 'Dzwonię do lekarza.',

    'c.hello.q': 'Miłego wieczoru!',
    'c.hello.a': 'Do jutra!',
    'c.people.q': 'Jak masz na imię?',
    'c.people.a': 'Mam na imię Sara.',
    'l.arrive': 'Pierwszy dzień: jak trafić na miejsce',
    'w.ingang': 'wejście',
    'w.receptie': 'recepcja',
    'w.kantine': 'stołówka',
    'w.kleedkamer': 'szatnia',
    'w.buddy': 'opiekun, buddy (osoba z pracy, która pomaga na początku)',
    'w.vinden': 'znaleźć, znajdować',
    's.arrive.1': 'U kogo mam się zgłosić?',
    's.arrive.2': 'Nie mogę znaleźć szatni.',
    's.arrive.3': 'Kto jest dzisiaj moim opiekunem?',
    'c.arrive.q': 'Dzień dobry, w jakiej sprawie?',
    'c.arrive.a': { m: 'Jestem nowy. Zaczynam dzisiaj.', f: 'Jestem nowa. Zaczynam dzisiaj.', x: 'Jestem tu nową osobą. Zaczynam dzisiaj.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.understand.q': 'Rozumiesz?',
    'c.understand.a': 'Nie, jeszcze raz, proszę.',
    'c.gear.q': 'Masz swój kask?',
    'c.gear.a': 'Tak, mam go na sobie.',
    'c.danger.q': 'Czy był wypadek?',
    'c.danger.a': 'Tak, dzwoń pod 112!',
    'c.alarm.q': 'Czy wszyscy są na zewnątrz?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Nie, mojego kolegi jeszcze nie ma.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Co się stało?',
    'c.accident.a': 'Upadł. Krwawi.',
    'l.notyet': 'Jeszcze mnie tego nie nauczyli',
    'w.nogniet': 'jeszcze nie',
    'w.mogen': 'móc (mieć pozwolenie), wolno',
    'w.proberen': 'próbować',
    'w.voordoen': 'pokazywać (robiąc to najpierw samemu)',
    'w.gevaarlijk': 'niebezpieczny',
    'w.uitleg': 'wyjaśnienie',
    's.notyet.1': { m: 'Jeszcze się tego nie nauczyłem.', f: 'Jeszcze się tego nie nauczyłam.', x: 'Tego jeszcze nie umiem.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.notyet.2': 'Nikt mi jeszcze tego nie wyjaśnił.',
    's.notyet.3': { m: 'Czy mogę już robić to sam?', f: 'Czy mogę już robić to sama?', x: 'Czy mogę już robić to samodzielnie?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.q': 'Po prostu spróbuj, to łatwe.',
    'c.notyet.a': 'Możesz mi najpierw pokazać, jak to się robi?',
    'c.things.q': 'Gdzie ma iść ten karton?',
    'c.things.a': 'Na paletę.',
    'c.directions.q': 'W lewo czy w prawo?',
    'c.directions.a': 'W prawo, przy regale.',
    'c.shift.q': 'Kiedy zaczyna się twoja zmiana?',
    'c.shift.a': 'Jutro o siódmej.',
    'c.sick.q': { m: 'Jesteś chory?', f: 'Jesteś chora?', x: 'Źle się czujesz?' }, // x: nieuw, nalezen // x: nagelezen AI 28 nov
    'c.sick.a': 'Tak, dziś zostaję w domu.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Dzwoń pod 112!',
    'p.hurt': { m: 'Jestem ranny.', f: 'Jestem ranna.', x: 'Mam uraz.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Zbieranie zamówień", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "artykuł (jeden produkt)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "przegródka (jedno miejsce na regale)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "naklejka, etykieta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "zbierać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "brakować (tego nie ma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "lokalizacja (kod miejsca, na przykład A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Zbieram artykuły do tego zamówienia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Tego artykułu brakuje. Przegródka jest pusta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Naklejka musi być na kartonie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Która to lokalizacja?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Alejka trzy, przegródka dwanaście.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Załadunek i rozładunek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "ciężarówka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "kierowca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "rozładować (wyjąć rzeczy z ciężarówki)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "wózek paletowy, paleciak (ręczny wózek, który podnosi paletę)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "folia (cienki plastik wokół palety)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "list przewozowy (papier, na którym jest napisane, co jest w ciężarówce)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Ciężarówka stoi przy drzwiach numer cztery.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Najpierw rozładowujemy te palety.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Kierowca czeka na list przewozowy.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Czy ta paleta jest gotowa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Nie, trzeba ją jeszcze owinąć folią.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Jak to zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "jak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "tak, w ten sposób", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "trudny", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "łatwy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "wiedzieć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "to się zgadza", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Jak to zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "To jest dla mnie trudne.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Czy tak robię to dobrze?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Wiesz, jak to zrobić?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Nie, tego jeszcze nie wiem.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Czy mogę o coś zapytać?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "pytać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "kto", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "na chwilę", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "czas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "przeszkadzać (komuś, kto jest zajęty)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "mieć wątpliwości (nie masz pewności)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Czy mogę o coś zapytać?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Przepraszam, że przeszkadzam.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Kto może mi pomóc?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Masz pytanie?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Tak. Masz chwilę?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Gdzie to jest?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "tutaj", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "tam", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "zgubiony (nie możesz tego znaleźć)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "wyjście", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "wskazać (pokazać, gdzie to jest)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "obok", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': { m: "Zgubiłem się.", f: "Zgubiłam się.", x: "Nie mogę znaleźć drogi." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Gdzie jest wyjście?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Toaleta jest tam, obok stołówki.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Możesz to znaleźć?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Nie. Możesz to wskazać?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Małe rany i oparzenia", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "rana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "opatrunek, bandaż", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "chłodzić (zimną wodą)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "skaleczenie (mała rana od noża albo czegoś ostrego)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "zemdleć", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "płuczka do oczu (woda do przemywania oczu)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Schłodź oparzenie wodą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "To małe skaleczenie. Uciśnij ranę.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Gdzie jest płuczka do oczu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Mój kolega zaraz zemdleje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Niech chwilę poleży. Idę po pomoc.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Dzwonienie pod 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "służby ratunkowe (karetka, straż pożarna, policja)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "nazwa ulicy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "numer domu", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "przytomny, reaguje (osoba odpowiada, kiedy do niej mówisz)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "czekać na kogoś i go przywitać (przy drzwiach)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.aandelijn': "nie rozłączać się (zostajesz na linii)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Dzwonię pod 112. Potrzebuję karetki.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Jaka jest nazwa ulicy i numer domu?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Poczekam na karetkę przy wejściu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Czy reaguje, kiedy do niego mówisz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Nie. Nie reaguje.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Twój grafik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "grafik tygodniowy (kto kiedy pracuje w tym tygodniu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "aplikacja z grafikiem (twoje zmiany w telefonie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "dostępny (możesz wtedy pracować)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "zmiana (w planie)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "zastąpić (pracować za kogoś, kogo nie ma)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "dzień wolny", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Nowy grafik jest w aplikacji.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Możesz pracować w sobotę?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Możesz jutro zastąpić Sarę?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "W twoim grafiku jest zmiana.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Dobrze. Którego dnia mam pracować?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Godziny i przerwy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "przerwa obiadowa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "czas odpoczynku (wolny czas między dwiema zmianami)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "dzień pracy", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "lista godzin (gdzie zapisujesz przepracowane godziny)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "wyjść wcześniej", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "z rzędu (jeden po drugim)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Zapisuję swoje godziny na liście godzin.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Mogę dziś wyjść godzinę wcześniej?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': { m: "Przepracowałem sześć dni z rzędu.", f: "Przepracowałam sześć dni z rzędu.", x: "To już mój szósty dzień pracy z rzędu." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Kiedy masz przerwę obiadową?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "O dwunastej, pół godziny.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Twoje pierwsze tygodnie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "oprowadzanie (ktoś pokazuje ci budynek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "opiekun (kolega, który pomaga ci w pierwszych tygodniach)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "notes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "chodzić z kolegą (i patrzeć, jak pracuje)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "zapamiętać", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "samodzielnie (bez pomocy)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Pokażesz mi to jeszcze raz?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Dziś chodzę razem z Sarą.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Zapisuję to w moim notesie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Pamiętasz wszystko z oprowadzania?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Prawie wszystko. Gdzie była ta stołówka?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Kompletacja zamówień i wózek wysokiego składowania", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "kompletujący zamówienia (pracownik, który zbiera zamówienia; także mały wózek, na którym stoisz, żeby zbierać towar z wysoka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "wózek wysokiego składowania (wózek widłowy do bardzo wysokich regałów; jego widły wysuwają się do przodu)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "lista kompletacyjna (lista artykułów, które musisz zebrać)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "skanować", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "pieszy (osoba, która idzie pieszo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "rozgrzać się (w ciepłym miejscu, po pracy w zimnie)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Skanuję każdy artykuł z listy kompletacyjnej.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Piesi chodzą ścieżką dla pieszych.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "W mroźni noszę odzież termiczną.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Możesz na chwilę poprowadzić wózek wysokiego składowania?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Nie, nie wolno mi. Nie mam do tego szkolenia.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
