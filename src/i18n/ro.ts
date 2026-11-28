import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'ro',
  name: 'Romanian',
  nativeName: 'Română',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Aspect',
    themeAuto: 'Automat',
    themeSand: 'Nisip', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Port', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Geacă de lucru', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Întunecat',
    voice: 'Voce în olandeză',
    voiceAuto: 'Automat',
    voiceHint: 'Atinge 🔊 ca să asculți. Vocile Vloertaal sună la fel pe orice telefon; celelalte vin de pe telefonul tău.',
    voiceNone: 'Acest dispozitiv nu are o voce în olandeză. O poți adăuga din setările telefonului (Transformarea textului în vorbire).', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    appTagline: 'Olandeză pentru locul de muncă',
    chooseLanguage: 'Alege limba de ajutor',
    englishOnly: 'Doar engleză',
    beta: 'Traducere încă neverificată', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'zi la rând', few: 'zile la rând', other: 'de zile la rând' },
    streakStarted: 'Seria ta de zile a început! Revino mâine.',
    streakGrew: { one: '{n} zi la rând! Ține-o tot așa.', few: '{n} zile la rând! Ține-o tot așa.', other: '{n} de zile la rând! Ține-o tot așa.' },
    start: 'Începe',
    practice: 'Exersează din nou',
    locked: 'Termină mai întâi lecția de dinainte',
    newWord: 'Cuvânt nou',
    tapToHear: 'Atinge ca să asculți',
    sayItAloud: 'Spune-l cu voce tare.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Spune-l încet sau în gând.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Ce înseamnă asta?',
    snapQuestion: 'Înțelegi?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Da, bine.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Bine că întrebi!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Ai înțeles bine!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Vezi? Era mai bine să întrebi.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Care dintre acestea este „{word}”?',
    mixLesson: 'Recapitulare mixtă',
    whatDoYouHear: 'Ce auzi?',
    buildSentence: 'Formează această propoziție în olandeză',
    typeWhatYouHear: 'Scrie ce auzi',
    check: 'Verifică',
    continue: 'Continuă',
    correct: 'Foarte bine!',
    almost: 'Corect, dar atenție la scriere',
    incorrect: 'Nu chiar',
    correctAnswer: 'Răspunsul corect',
    rightAnswerIs: 'Răspunsul corect este:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'Cel mai bun răspuns este:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Răspunsul tău',
    inARow: '{n} la rând',
    cantListen: 'Nu pot asculta acum',
    learnWriting: 'Vreau să învăț și scrisul',
    learnWritingHint: 'Pornit: scrii cu litere cuvintele pe care le auzi. Oprit: alegi cuvântul scris pe care îl auzi.',
    tagRepeat: 'Din nou',
    readAloud: 'Citește cu voce tare',
    lessonComplete: 'Lecție terminată!',
    phrasebook: 'Fraze de urgență',
    phrasebookHint: 'Atinge o frază ca s-o auzi. Poți arăta ecranul și unui coleg.',
    whoToCall: 'Probleme la muncă? Cine te poate ajuta',
    who112: 'Urgență: pericol de moarte, incendiu sau o infracțiune care are loc acum.',
    whoLegal: 'Sfaturi gratuite despre contract, salariu sau concediere.',
    whoInspection: 'Raportează munca nesigură, salariul prea mic sau exploatarea. Poți face asta anonim.',
    whoFairwork: 'Cineva te exploatează la muncă, sau crezi că așa e.',
    who113: 'Te gândești să-ți iei viața sau îți faci griji pentru cineva. Gratuit, zi și noapte.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Violență sau abuz acasă, asupra ta sau a altcuiva. Gratuit, se poate și anonim.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'Setări',
    helpLanguage: 'Limba de ajutor',
    resetProgress: 'Șterge progresul meu',
    resetConfirm: 'Ștergi tot progresul de pe acest dispozitiv?',
    audioUnavailable: 'Sunetul nu este disponibil pe acest dispozitiv.',
    slow: 'Încet',
    completeChat: 'Completează conversația',
    meaning: 'Sensul',
    navRoute: 'Lecții',
    navWords: 'Ajutor',
    rightFirstTime: 'Corect din prima încercare',
    newWords: 'Cuvinte noi',
    wordsLearnedN: { one: '{n} cuvânt învățat', few: '{n} cuvinte învățate', other: '{n} de cuvinte învățate' },
    practiseMistakes: { one: 'Repetă greșelile · mai este {n}', few: 'Repetă greșelile · mai sunt {n}', other: 'Repetă greșelile · mai sunt {n}' },
    quitHint: 'Răspunsurile din această lecție nu se salvează.',
    keepGoing: 'Continuă',
    stopLesson: 'Oprește lecția',
    fullVersion: 'Versiunea completă',
    unlockFull: 'Deblochează versiunea completă',
    unlockHint: 'Cu codul se deschid toate lecțiile. Codul este gratuit. Nu ai încă un cod? Întreabă-ți profesorul sau coach-ul, sau scrie-ne:',
    codeNotFull: 'Acest cod nu deschide versiunea completă. Cere un cod nou.',
    password: 'Codul',
    enterPassword: 'Introdu codul',
    wrongPassword: 'Codul nu este corect. Încearcă din nou.',
    unlock: 'Deblochează',
    sector: 'Munca ta',
    chooseSector: 'Unde lucrezi?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'În ce țară lucrezi?',
    countryHint: 'Primești cuvintele și sfaturile din acea țară.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'Ce înveți este doar pe acest telefon.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Folosește mereu acest telefon.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Olanda',
    countryBe: 'Belgia (Flandra)',
    tipsNote: 'Aceste sfaturi sunt despre munca în Olanda. Informații generale, nu consultanță juridică.',
    sectorHint: 'Lecțiile pentru munca ta vin devreme. Poți schimba asta mai târziu în Setări.',
    otherSectors: 'Alte domenii',
    reviewToday: 'Recapitularea de azi',
    reviewTodayN: { one: '{n} cuvânt de repetat · câteva minute', few: '{n} cuvinte de repetat · câteva minute', other: '{n} de cuvinte de repetat · câteva minute' },
    notSureYet: 'Nu știu încă',
    sectorLogistics: 'Logistică',
    sectorConstruction: 'Construcții',
    sectorProduction: 'Producție',
    sectorCare: 'Îngrijire',
    sectorHospitality: 'Hoteluri și restaurante',
    sectorRetail: 'Magazin și supermarket', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Curățenie',
    sectorHorticulture: 'Horticultură', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Tehnică', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Service auto', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Sunet',
    soundOn: 'Cu sunet',
    withoutSound: 'Fără sunet',
    quietHint: 'Fără sunet, lecțiile nu au exerciții de ascultare și nimic nu pornește singur. Atinge 🔊 ca să auzi un cuvânt, de exemplu cu căștile.',
    soundOffToast: 'Fără sunet. Poți porni sunetul din Setări.',
    noInternetSound: 'Fără internet: sunetul nu merge acum.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Încă de făcut azi',
    streakStopped: { one: 'Seria ta s-a oprit la {n} zi. Începe din nou azi.', few: 'Seria ta s-a oprit la {n} zile. Începe din nou azi.', other: 'Seria ta s-a oprit la {n} de zile. Începe din nou azi.' },
    recordN: { one: 'Recordul tău: {n} zi', few: 'Recordul tău: {n} zile', other: 'Recordul tău: {n} de zile' },
    workWeek: 'Săptămâna ta de lucru',
    freeDaysN: { one: 'Ai {n} zi liberă. Dacă pierzi o zi, seria continuă.', few: 'Ai {n} zile libere. Dacă pierzi o zi, seria continuă.', other: 'Ai {n} de zile libere. Dacă pierzi o zi, seria continuă.' },
    restDay: 'Zi liberă',
    tier3: '3 zile la rând',
    tier7: '1 săptămână la rând',
    tier14: '2 săptămâni la rând',
    tier30: '1 lună la rând',
    reviewDone: 'Gata pentru azi',
    tomorrowN: { one: 'Mâine: {n} cuvânt', few: 'Mâine: {n} cuvinte', other: 'Mâine: {n} de cuvinte' },
    firstWordsTomorrow: 'Mâine se întorc primele tale cuvinte',
    extraRound: 'Rundă în plus',
    reviewFirstHint: 'Mai întâi repetă. Așa ții minte mai mult.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} cuvânt mai bine învățat', few: '{n} cuvinte mai bine învățate', other: '{n} de cuvinte mai bine învățate' },
    noMistakes: 'Fără greșeli',
    nextUp: 'Următoarea',
    installTitle: 'Pune Vloertaal pe ecranul principal',
    installHint: 'Atunci se deschide ca o aplicație, și fără internet.',
    installAdd: 'Adaugă pe ecranul principal',
    iosStep1: 'Atinge Partajează',
    iosStep2: 'Atinge „Adaugă pe ecranul principal”',
    iosStep3: 'Gata!',
    backupTitle: 'Păstrează-ți progresul',
    backupHint: 'Progresul tău este doar pe acest telefon. Salvează-l ca fișier, de exemplu pentru un telefon nou.',
    backupSave: 'Descarcă',
    backupLoad: 'Restaurează',
    backupBad: 'Acesta nu este un fișier Vloertaal.',
    backupAsk: 'Adaugi acest fișier la progresul tău sau înlocuiești progresul?',
    backupMerge: 'Adaugă',
    backupReplace: 'Înlocuiește',
    backupBack: 'Progresul tău a fost recuperat.',
    backupNothingNew: 'Nimic nou: asta era deja pe telefonul tău.',
    cancel: 'Anulează',
    remindTitle: 'Amintește-mi în fiecare zi',
    remindEvent: 'E timpul pentru olandeză (10 minute)',
    remindHint: 'Calendarul telefonului îți amintește. Nu ni se trimite nimic.',
    remindBefore: 'Înainte de lucru',
    remindAfter: 'După lucru',
    remindOwn: 'Altă oră',
    remindAdd: 'Adaugă în calendarul meu',
    remindAdded: 'Deschide fișierul ca să-l adaugi în calendar.',
    remindAddedAsk: 'Adăugat? Atunci îl vezi în calendar.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'Despre',
    tagMeaning: 'Sens',
    tagPick: 'Alege',
    tagListen: 'Ascultă',
    tagType: 'Scrie',
    tagMatch: 'Perechi',
    tagBuild: 'Propoziție',
    tagChat: 'Discuție',
    tagSituation: 'Situație',
    tagTip: 'Sfat',
    more: 'Mai mult',
    less: 'Mai puțin',
    daysUnit: { one: 'zi', few: 'zile', other: 'de zile' },
    wordsUnit: { one: 'cuvânt', few: 'cuvinte', other: 'de cuvinte' },
    countTitle: 'Numărare anonimă',
    countHint: 'Aplicația numără cât de des se fac lecțiile și cam cât durează. Și dacă aplicația are undeva o eroare. Fără nume, fără cont, fără urmărire.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Certificat',
    myCertificates: 'Certificatele mele',
    certsEmpty: 'Termină toate lecțiile unei unități. Apoi primești un certificat.',
    certEarned: 'Ai primit un certificat!',
    certEarnedHint: 'Ai terminat toate lecțiile acestei unități.',
    certView: 'Vezi',
    certLater: 'Mai târziu',
    certPrint: 'Tipărește sau salvează ca PDF',
    certSaved: 'Imaginea este salvată.',
    certNameHint: 'Rămâne doar pe acest telefon. Poți să-l lași gol.',
    certChangeName: 'Schimbă numele',
    certPractice: 'Certificat de exercițiu, nu o diplomă oficială',
    resumeLesson: 'Continuă lecția',
    restartLesson: 'Începe din nou',
    quitKept: 'Progresul tău rămâne salvat. Poți continua mai târziu.',
    bestAnswer: 'Cel mai bun răspuns',
    inReview: 'în verificare',
    today: 'Azi',
    playAgain: 'Ascultă din nou',
    daysUnitOne: 'zi',
    wordsUnitOne: 'cuvânt',
    wordsLearnedOne: '{n} cuvânt învățat',
    tomorrowOne: 'Mâine: {n} cuvânt',
    wordsStrongerOne: '{n} cuvânt mai bine învățat',
    recordOne: 'Recordul tău: {n} zi',
    streakStoppedOne: 'Seria ta s-a oprit la {n} zi. Începe din nou azi.',
    letterTiles: 'Litere',
    useKeyboard: 'Tastatură',
    skippedN: { one: '{n} exercițiu sărit, nu se numără', few: '{n} exerciții sărite, nu se numără', other: '{n} de exerciții sărite, nu se numără' },
    stampLater: 'Revine mai târziu',
    stampDone: 'Gata',
    chooseNext: 'Alege următorul subiect',
    recommended: 'Recomandat',
    allTopics: 'Toate subiectele',
    topicsOrder: 'Arată subiectele',
    privacyLink: 'Citește declarația de confidențialitate (în olandeză)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Ce vrei să înveți?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Învață olandeză pentru muncă și cum se lucrează aici', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Vorbesc deja olandeză: doar regulile muncii', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Învață olandeză', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Treci la Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Totul va fi în olandeză. Limba de ajutor se oprește.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Până te întorci, repeți reguli, nu cuvinte.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Progresul tău rămâne salvat. Te poți întoarce de aici.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Da, treci la Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Pe teme',
    inOrder: 'În ordine',
    searchTopics: 'Caută un subiect', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Niciun subiect cu acest cuvânt.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: 'lecție', few: 'lecții', other: 'de lecții' },
    lessonsUnitOne: 'lecție',
    topicsUnit: { one: 'subiect', few: 'subiecte', other: 'de subiecte' },
    topicsUnitOne: 'subiect',
    allTopicsDone: 'Ai terminat toate subiectele. Bravo!',
    // Speaking practice
    tagSpeak: 'Vorbește',
    speakPrompt: 'Ascultă, apoi spune',
    tapToSpeak: 'Atinge și vorbește',
    stopRecording: 'Stop',
    micPrivacy: "Nimeni altcineva nu te aude. Nimic nu este trimis.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Microfonul e oprit. Spune acum cu voce tare, apoi mergi mai departe.',
    cantSpeak: 'Nu pot vorbi acum',
    soundsSame: 'Sună la fel',
    sayAgain: 'Spune din nou',
    hearMine: 'Ascultă-te', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Atunci și acum', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Prima ta încercare: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Spune-o împreună", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Spune-o în același timp cu vocea. Nimic nu se înregistrează.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Acum doar tu", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Greșelile fac parte din învățare. Nu te-au înțeles? Spune încă o dată.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Emoții? E normal. Spune totuși.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Nu trebuie să spui perfect. Doar încearcă.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "De ce înveți olandeză?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Alege unul sau două.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Gata", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Să-mi fac bine munca", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Copiii mei", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Să vorbesc cu colegii", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Să-mi rezolv treburile fără ajutor", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonJob: "Un loc de muncă mai bun", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Să mă simt acasă în Olanda", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakMe: 'Eu',
    speakingPractice: 'Exercițiu de vorbire',
    speakingHint: "Spune cuvintele cu voce tare și compară. Nimeni altcineva nu te aude: nimic nu este trimis. Prima ta înregistrare a unei propoziții rămâne pe telefon, ca să compari mai târziu.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Se salvează…',
    savedOffline: 'Salvat offline',
    offlineNoSpace: 'Nu este destul spațiu pe acest telefon. Șterge un subiect salvat sau eliberează spațiu.',
    offlineFailed: 'Salvarea nu a reușit. Verifică internetul și încearcă din nou.',
    pocketCard: 'Fișă de buzunar',
    pocketSave: 'Salvează ca imagine',
    textSize: 'Mărimea textului',
    textNormal: 'Normal',
    textLarge: 'Mare',
    textXl: 'Foarte mare',
    showEnglish: 'Arată și engleza',
    genderTitle: 'Femeie sau bărbat?',
    genderHint: 'Ca limba ta să ți se adreseze corect.',
    genderWoman: 'Femeie',
    genderMan: 'Bărbat',
    genderNone: 'Prefer să nu spun',
    langGuessYes: 'Da',
    langGuessOther: 'Altă limbă',
    settingsLangMe: 'Limba și profilul tău',
    settingsLessons: 'Lecții',
    settingsPhone: 'Acest telefon',
    settingOn: 'Pornit',
    settingOff: 'Oprit',
    sectorGroupMake: 'Producție și transport',
    sectorGroupCare: "Îngrijire și copii", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Magazine și restaurante', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Construcții și tehnică', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Voce de femeie',
    voiceMan: 'Voce de bărbat',
    writingPick: 'Alegerea cuvântului',
    settingWriting: 'Scriere',
    settingKeepLessons: 'Păstrează lecțiile pe acest telefon',
    settingKeepLessonsHint: 'Subiectul de acum se salvează pe acest telefon, așa că merge și fără internet. Subiectele terminate se șterg apoi.',
    otherTopicLink: 'Alt subiect',
    remindAsk: 'Să-ți amintim în fiecare zi?',
    remindYes: 'Da, după muncă',
    remindNo: 'Nu, mulțumesc',
    remindPickTime: 'Când să-ți amintim?',
    certSaveShare: 'Salvează sau trimite',
    pauseTitle: 'Pauză',
    back: 'Înapoi',
    quitLesson: 'Ieși din lecție',
    playAudio: 'Ascultă',
    scrollDown: 'Derulează în jos',
    lessonProgress: 'Progresul lecției',
    mainMenu: 'Meniu principal',
    spaceKey: 'Spațiu',
    langNotOnPhone: 'Această limbă nu este încă pe telefonul tău. Conectează-te la internet ca să schimbi limba.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'Alege tu ora',
    gateWho: 'Codul îl primești de la profesor, coach sau angajator.',
    gateTrust: 'Fără cont. Fără nume. Totul rămâne pe acest telefon.',
    codeAccepted: 'Cod acceptat',
    startFree: 'Nu ai cod? Începe cu primele lecții',
    bramHello: 'Mă bucur să te văd.',
    bramBack: 'Bine ai revenit. Mergem mai departe.',
    bramRested: 'Ieri a fost ziua ta liberă. Seria continuă.',
    bramDueN: { one: '{n} cuvânt de repetat azi.', few: '{n} cuvinte de repetat azi.', other: '{n} de cuvinte de repetat azi.' },
    bramDueOne: '{n} cuvânt de repetat azi.',
    bramDayN: 'Ziua {n} la rând.',
    bramDone: 'Gata pentru azi. Ne vedem mâine.',
    bramPerfect: 'Foarte bine. Știi aceste cuvinte.',
    bramGood: 'Treabă bună. Pas cu pas.',
    bramHard: 'E bine că ai exersat. Cuvintele grele revin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    bramReview: 'Bine. Repetiția te ajută să ții minte.',
    bramIntro: 'Sunt Bram, colegul tău de muncă.',
    bramIntroHello: 'Bună, sunt Bram.',
    showDutch: 'Arată în olandeză',
    showAnswers: 'Arată răspunsurile', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Ultima actualizare: {date}',
    /* G4 b3 */
    buildListen: 'Ascultă și formează propoziția',
    chatWhichQuestion: 'Ce întrebare se potrivește cu acest răspuns?',
    reviewWaiting: 'Mai așteaptă cuvinte: {n}. Revin în zilele următoare.',
    factTitle: 'Știai că?',
    fact3: { m: 'Nu ești singur: peste 3 milioane de adulți din Olanda se descurcă greu cu cititul, socotitul sau calculatorul. Exercițiul ajută.', f: 'Nu ești singură: peste 3 milioane de adulți din Olanda se descurcă greu cu cititul, socotitul sau calculatorul. Exercițiul ajută.', x: 'Nu e doar cazul tău: peste 3 milioane de adulți din Olanda se descurcă greu cu cititul, socotitul sau calculatorul. Exercițiul ajută.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fact7: 'Dintre migranții care vorbesc foarte bine olandeza, 69 din 100 au un loc de muncă plătit.',
    fact14: 'Multe biblioteci au un Taalhuis („casa limbii”): ajutor gratuit ca să înveți olandeza mai departe.',
    fact30: 'Puțin exercițiu în fiecare zi e mai bun decât mult din când în când. Exersezi deja de 30 de zile!',
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Acest fișier are {n} lecție.', few: 'Acest fișier are {n} lecții.', other: 'Acest fișier are {n} de lecții.' },
    backupFileOne: 'Acest fișier are {n} lecție.',
    backupPhoneN: { one: 'Ai {n} lecție.', few: 'Ai {n} lecții.', other: 'Ai {n} de lecții.' },
    backupPhoneOne: 'Ai {n} lecție.',
    backupFewer: '„Înlocuiește” șterge lecțiile care nu sunt în fișier. „Adaugă” păstrează tot.',
    backupTooBig: 'Acest fișier este prea mare. Un fișier Vloertaal este mult mai mic.',
    backupNewPhone: 'Telefon nou? Și acolo ai nevoie de codul tău.',
    remindEveryDay: 'Reamintirea ta: în fiecare zi la {time}',
    remindStop: 'Oprește reamintirea',
    remindStopped: 'Deschide fișierul ca să scoți reamintirea din calendar.',
    remindStoppedAndroid: 'Șterge tu reamintirea din Google Calendar.',
    resetKeeps: 'Lecțiile, cuvintele, zilele la rând și certificatele tale se șterg. Limba și setările tale rămân.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Nu s-a încărcat. Este internet?',
    retry: 'Încearcă din nou',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal nu poate porni.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Mai întâi păstrează-ți progresul. Apoi începe din nou.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Începe din nou', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Ceva nu a mers bine. Progresul tău este salvat.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Ce știi deja?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Cam 10 minute. Nu primești note. Este doar pentru tine.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: 'Ai învățat mult. Fă testul din nou și vezi ce știi acum.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Ascultare', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Cuvinte', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Propoziții', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Ascultă. Ce înseamnă?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Nu știi? Atinge „Nu știu”. Nu e nicio problemă.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Înregistrarea ta rămâne doar pe acest telefon. Mai târziu te poți auzi din nou.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Un început bun! Asta știi deja.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Bravo! Uite ce știi acum.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Tu atunci', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Tu acum', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Exersează puțin în fiecare zi. Așa înveți tot mai mult.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Fă testul', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Nu știu', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Mai mult decât atunci', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Cam la fel', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Totul la un loc: acum știi mai mult decât atunci.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Totul la un loc: cam la fel ca atunci.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Mai întâi 5 întrebări despre tine. Nu există bine sau greșit.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Îndrăznești să faci asta?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Să spui că nu înțelegi ceva', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Să-ți întrebi șeful ceva', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Să ceri ajutor', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Să spui că ceva nu e sigur', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Să vorbești puțin cu un coleg în pauză', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Încă nu', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Puțin', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Da', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'Peste câteva săptămâni întrebăm din nou.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Viteză', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Calm', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normal', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Calm înseamnă încet și clar. Normal e cum vorbesc colegii. Alege „Normal” dacă înțelegi deja mult.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Arată cum îți merge', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Acest card arată progresul tău. Arată-l profesorului, coach-ului sau șefului tău. Tu decizi.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: 'Poți să spui și „nu”.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Telefonul tău face cardul. Nu se trimite nimic. Vloertaal nu păstrează nimic.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'Pe card, în olandeză:', // nieuw, nalezen // nagelezen AI 31 okt
    coachTopics: 'Subiecte terminate', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    coachDays: 'Zile de exercițiu în ultimele 4 săptămâni', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Ultima lecție, cu data', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Cod: aceleași numere, pe scurt, pentru rezumatul grupului. Fără nume.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Telefonul ascultă (probă)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: 'După ce vorbești, telefonul spune dacă te-a înțeles. Asta se întâmplă pe telefon. Nimic nu ajunge la noi sau la alții.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Telefonul are nevoie mai întâi de olandeză. E o descărcare mare: folosește Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Descarcă olandeza', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Nu acum', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Olandeza se descarcă. Încearcă mai târziu.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'N-a mers. Încearcă mai târziu, pe Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Doar telefonul ascultă. Nimic nu este trimis.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Telefonul ascultă…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Înțeles', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Aproape: spune {word} încă o dată', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Încă neînțeles', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Mergi mai departe oricum', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Vrei mai repede?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Mai puține explicații în lecțiile noi. Olandeza în ritm normal.', // nieuw, nalezen // nagelezen AI 31 okt
    fasterYes: 'Da', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Nu', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Lecția următoare e puțin mai scurtă.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Învață mai repede', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Pornit: mai puține explicații în lecțiile noi și olandeza în ritm normal. Oprit: ca înainte.', // nieuw, nalezen // nagelezen AI 31 okt
    feelAsk: 'Ce părere ai despre Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Bine', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Așa și așa', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Nu e bine', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Mulțumim! Asta ne ajută să facem Vloertaal mai bun.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Învață mai repede: mai puține explicații în lecțiile noi și olandeza în ritm normal.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Exersați împreună', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Două persoane, un telefon', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Exersează cu un coleg, un prieten sau un profesor. Citiți pe rând.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'Persoana 1 este colegul. Persoana 2 răspunde.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Nu se înregistrează nimic. Nu există punctaj.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Persoana {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Răspuns', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Ascultă', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Următorul', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Traducere', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Bravo! Schimbați rolurile și mai faceți o dată?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Schimbați rolurile', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Gata', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Știu asta: verificare scurtă', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Știi deja asta. Bifezi acest subiect?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkNoCert: 'Atunci nu ai încă certificat. Îl primești după lecții.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Lecțiile te ajută la acest subiect.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkMark: 'Bifează', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'prin verificare', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Totuși fă lecțiile', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: 'Comunicare', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Învăț olandeză pentru munca mea cu Vloertaal. Gratuit: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal este o aplicație gratuită pentru a învăța olandeză pentru muncă.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeHow: 'Lecții scurte pe telefonul tău, cu ajutor în limba ta. Fără cont.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeOpen: 'Deschide pe telefon:', // nieuw, nalezen // nagelezen AI 28 nov
    workTry: 'Încearcă azi la muncă', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Când:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Atunci spune:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Pentru colegul tău', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Arată asta unui coleg care vorbește olandeză. Scrie cum te poate ajuta să exersezi.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'Trimite-l colegului', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Pentru îndrumătorul tău', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Cum se lucrează aici, în olandeză simplă. Telefonul citește cu voce tare.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Acum știi multă olandeză. La fiecare temă poți citi și cum se lucrează aici, în olandeză simplă.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Niciuna: vorbesc olandeză', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Propoziții spuse la muncă', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Cuvinte care sunt încă grele', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Lecții despre cum se lucrează aici', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Arată pe nume subiectele despre drepturile tale', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Acum din memorie: cum era în olandeză?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Cuvinte de acum 2 săptămâni sau mai vechi: încă știai {n} din {m}.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'Verbul stă pe locul 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Puncte', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Toate punctele tale', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Atmosferă', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Liniște', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Joc', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Liniște: nimic nu se mișcă, fără sărbători. Joc: puncte, sunete și multă mișcare.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Servicii și pază", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Munca în aer liber", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Creșă și grădiniță", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Deșeuri și reciclare", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Industria alimentară", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Pază și securitate", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Servicii pentru clădiri", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Spații verzi și grădini", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Nivel', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Început', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Învățare', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'În echipă', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Om de meserie', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Cu experiență', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Măiestrie', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Nivel nou:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Fără greșeli:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Ținta de azi', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Ținta de azi atinsă!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Nou în cutia ta de scule:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Cutia mea de scule', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Termină o lecție cu joc. Atunci primești prima ta unealtă.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Mai multe explicații', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'Despre aceste sfaturi', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Un expert nu a verificat încă această explicație.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Data acestei explicații: {month}. Pentru cele mai noi reguli, verifică la Juridisch Loket sau la Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Data acestei explicații: {month}. Pentru cele mai noi reguli, verifică la justitiehuis sau pe werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Citește mai mult despre Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Ai spus asta la muncă?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Da, a mers', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Încă nu', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Bravo! Deja {n} propoziție reușită la muncă.', few: 'Bravo! Deja {n} propoziții reușite la muncă.', other: 'Bravo! Deja {n} de propoziții reușite la muncă.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Bravo! Prima ta propoziție la muncă a reușit.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Le găsești în Setări.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Reușit la muncă', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Ai spus aceste propoziții la muncă.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'cam {n} min', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Progresul tău nu a fost salvat. Telefonul e plin? Fă puțin loc. Sau mergi la Setări: „Păstrează-ți progresul”.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Telefonul îți poate șterge uneori progresul. De aceea, păstrează o copie.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Salvează acum', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Trimite-ți ție', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Trimite-ți fișierul ție, de exemplu pe WhatsApp sau pe e-mail.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Gata. Păstrează bine acest fișier. Cu el îți recuperezi progresul mai târziu.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Ce spui?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Exemplu', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Ascultă răspunsul', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Ascultă la locul de muncă', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'E zgomot, ca la muncă. Ascultă. Apoi vin întrebările.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Pune cuvântul marcat la început', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Regulile de muncă', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Acum știi multă olandeză. Vrei să înveți și regulile de muncă? Atunci totul este în olandeză.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Da, arată-mi', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Cum se spune?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Atinge un sunet. Vezi cum îl face gura.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Viteză', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Cuvântul, sunet cu sunet', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Sunet', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Primii pași',
    'theme.safe': 'Muncă în siguranță',
    'theme.find': 'Căutare de lucru',
    'theme.job': 'Slujba ta',
    'theme.together': 'Lucrul în echipă',
    'theme.rights': 'Drepturile tale',
    'theme.life': 'Viața în Olanda',
    'theme.sector': 'Domeniul tău',
    // Units
    'u.firstday': 'Prima zi de muncă',
    'u.help': 'Cum ceri ajutor',
    'u.safety': 'Siguranța pe primul loc',
    'u.emergency': "Când ceva nu merge bine", // nieuw, nalezen // nagelezen AI 22 nov
    'u.warehouse': 'În depozit',
    'u.time': 'Timp și program',

    // Lessons
    'l.hello': 'Cum saluți',
    'l.people': 'Oameni la muncă',
    'l.understand': 'Nu înțeleg',
    'l.gear': 'Echipament de protecție',
    'l.danger': 'Pericol!',
    'l.accident': 'Cum raportezi un accident',
    'l.things': 'Lucruri din depozit',
    'l.directions': 'Direcții și acțiuni',
    'l.shift': 'Tura mea',
    'l.sick': { m: 'Anunți că ești bolnav', f: 'Anunți că ești bolnavă', x: 'Anunți că te-ai îmbolnăvit' }, // x: nieuw, nalezen // nagelezen AI 28 nov

    // Words
    'w.hallo': 'salut',
    'w.goedemorgen': 'bună dimineața',
    'w.dankjewel': 'mulțumesc',
    'w.ja': 'da',
    'w.nee': 'nu',
    'w.totmorgen': 'pe mâine',
    'w.collega': 'colegul',
    'w.baas': 'șeful',
    'w.leidinggevende': 'supervizorul',
    'w.werk': 'munca',
    'w.naam': 'numele',
    'w.nieuw': 'nou',
    'w.begrijpniet': 'nu înțeleg',
    'w.nogeenkeer': 'încă o dată',
    'w.langzaam': 'încet',
    'w.helpen': 'a ajuta',
    'w.waar': 'unde',
    'w.wc': 'toaleta',
    'w.helm': 'casca',
    'w.handschoenen': 'mănușile',
    'w.veiligheidsschoenen': 'încălțămintea de protecție',
    'w.hesje': 'vesta reflectorizantă',
    'w.bril': 'ochelarii de protecție',
    'w.dragen': 'a purta',
    'w.pasop': 'atenție',
    'w.stop': 'stop',
    'w.help': 'ajutor',
    'w.brand': 'incendiul',
    'w.nooduitgang': 'ieșirea de urgență',
    'w.ongeluk': 'accidentul',
    'w.gewond': 'rănit',
    'w.bloeden': 'a sângera',
    'w.ehbodoos': 'trusa de prim ajutor',
    'w.bhver': 'persoana pentru urgențe din firmă (prim ajutor, incendiu, evacuare)',
    'w.ziekenhuis': 'spitalul',
    'w.gebeuren': 'a se întâmpla',
    'w.doos': 'cutia',
    'w.pallet': 'paletul',
    'w.heftruck': 'motostivuitorul',
    'w.kar': 'căruciorul',
    'w.stelling': 'raftul',
    'w.scanner': 'scanerul',
    'w.links': 'stânga',
    'w.rechts': 'dreapta',
    'w.boven': 'sus',
    'w.beneden': 'jos',
    'w.tillen': 'a ridica',
    'w.pakken': 'a lua',
    'w.dienst': 'tura',
    'w.pauze': 'pauza',
    'w.beginnen': 'a începe',
    'w.klaar': 'gata',
    'w.telaat': 'întârziat (prea târziu)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.morgen': 'mâine',
    'w.ziek': 'bolnav',
    'w.bellen': 'a suna (la telefon)',
    'w.dokter': 'doctorul',
    'w.pijn': 'durerea',
    'w.vandaag': 'azi',
    'w.beter': 'mai bine',

    // Sentences
    's.hello.1': { m: 'Salut, sunt nou.', f: 'Salut, sunt nouă.', x: 'Salut, sunt o persoană nouă aici.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.hello.2': 'Bună dimineața, sunt Ali.',
    's.hello.3': 'Mulțumesc, pe mâine!',
    's.people.1': 'Numele meu este Sara.',
    's.people.2': 'Cine este șeful?',
    's.people.3': { m: 'Sunt un coleg nou.', f: 'Sunt o colegă nouă.', x: 'Sunt o persoană nouă în echipă.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.understand.1': 'Puteți repeta?',
    's.understand.2': 'Puteți vorbi mai încet?',
    's.understand.3': 'Unde este toaleta?',
    's.gear.1': 'Poartă mereu casca.',
    's.gear.2': 'Unde sunt mănușile?',
    's.gear.3': 'Port vesta reflectorizantă.',
    's.danger.1': 'Atenție, podeaua este udă!',
    's.danger.2': 'Unde este ieșirea de urgență?',
    's.danger.3': 'S-a întâmplat un accident!',
    'l.alarm': 'Alarma de incendiu și evacuarea', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'alarma', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'a evacua (toată lumea iese din clădire)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'traseul de evacuare', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'scara', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'punctul de adunare (unde se strâng toți afară)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'extinctorul', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Unde este extinctorul?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Trebuie să evacuăm clădirea.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Ia scara, nu liftul.', // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.1': 'Colegul meu a căzut.',
    's.accident.2': 'M-am tăiat.',
    's.accident.3': 'Vreau să raportez un accident.',
    's.things.1': 'Pune cutia pe palet.',
    's.things.2': 'Unde este scanerul?',
    's.things.3': 'Vine motostivuitorul.',
    's.directions.1': 'Cutia este în stânga.',
    's.directions.2': 'Ridică folosind picioarele.',
    's.directions.3': 'Mergi la dreapta.',
    's.shift.1': 'Tura mea începe la ora șapte.',
    's.shift.2': 'Când este pauza?',
    's.shift.3': 'Scuze, am întârziat.',
    's.sick.1': { m: 'Sunt bolnav azi.', f: 'Sunt bolnavă azi.', x: 'Azi nu mă simt bine.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.sick.2': 'Mă doare spatele.',
    's.sick.3': 'Îl sun pe doctor.',
    'c.hello.q': 'Seară bună!',
    'c.hello.a': 'Pe mâine!',
    'c.people.q': 'Cum te cheamă?',
    'c.people.a': 'Mă cheamă Sara.',
    'l.arrive': 'Prima zi: cum găsești drumul',
    'w.ingang': 'intrarea',
    'w.receptie': 'recepția',
    'w.kantine': 'cantina',
    'w.kleedkamer': 'vestiarul',
    'w.buddy': 'colegul îndrumător (un coleg care te ajută la început)',
    'w.vinden': 'a găsi',
    's.arrive.1': 'La cine trebuie să mă prezint?',
    's.arrive.2': 'Nu găsesc vestiarul.',
    's.arrive.3': 'Cine e colegul meu îndrumător azi?',
    'c.arrive.q': 'Bună dimineața, în ce problemă veniți?',
    'c.arrive.a': { m: 'Sunt nou. Încep azi.', f: 'Sunt nouă. Încep azi.', x: 'Sunt o persoană nouă aici. Încep azi.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.understand.q': 'Înțelegi?',
    'c.understand.a': 'Nu, încă o dată, te rog.',
    'c.gear.q': 'Ai casca?',
    'c.gear.a': 'Da, o port.',
    'c.danger.q': 'S-a întâmplat un accident?',
    'c.danger.a': 'Da, sună la 112!',
    'c.alarm.q': 'Sunt toți afară?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Nu, colegul meu nu e încă aici.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Ce s-a întâmplat?',
    'c.accident.a': 'A căzut. Sângerează.',
    'l.notyet': 'Asta n-am învățat-o încă',
    'w.nogniet': 'încă nu',
    'w.mogen': 'a avea voie',
    'w.proberen': 'a încerca',
    'w.voordoen': 'a arăta cum se face (făcând întâi)',
    'w.gevaarlijk': 'periculos',
    'w.uitleg': 'explicația',
    's.notyet.1': 'Asta n-am învățat-o încă.',
    's.notyet.2': 'Încă nu mi s-a explicat.',
    's.notyet.3': { m: 'Am voie să fac asta deja singur?', f: 'Am voie să fac asta deja singură?', x: 'Am voie să fac asta deja fără ajutor?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.q': 'Încearcă, e ușor.',
    'c.notyet.a': 'Poți să-mi arăți întâi cum se face?',
    'c.things.q': 'Unde trebuie pusă cutia?',
    'c.things.a': 'Pe palet.',
    'c.directions.q': 'Stânga sau dreapta?',
    'c.directions.a': 'Dreapta, lângă raft.',
    'c.shift.q': 'Când începe tura ta?',
    'c.shift.a': 'Mâine la ora șapte.',
    'c.sick.q': { m: 'Ești bolnav?', f: 'Ești bolnavă?', x: 'Nu te simți bine?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.a': 'Da, azi rămân acasă.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Sună la 112!',
    'p.hurt': { m: 'Sunt rănit.', f: 'Sunt rănită.', x: 'M-am rănit.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Adunarea comenzilor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "articolul (un singur produs)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "locul (un singur loc în raft)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "autocolantul, eticheta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "a aduna, a strânge", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "a lipsi (nu e acolo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "locația (codul locului, de exemplu A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Adun articolele pentru comanda asta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Articolul ăsta lipsește. Locul e gol.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Autocolantul trebuie pus pe cutie.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Care e locația?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Culoarul trei, locul doisprezece.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Încărcare și descărcare", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "camionul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "șoferul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "a descărca (a scoate lucrurile din camion)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "transpaletul (un cărucior de mână care ridică un palet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "folia (plastic subțire în jurul unui palet)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "scrisoarea de transport (hârtia pe care scrie ce e în camion)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Camionul e la ușa patru.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Descărcăm întâi paleții ăștia.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Șoferul așteaptă scrisoarea de transport.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "E gata paletul ăsta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Nu, mai trebuie pusă folie în jurul lui.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Cum se face asta?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "cum", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "așa, în felul ăsta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "greu, dificil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "ușor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "a ști", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "așa e, e corect", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Cum se face asta?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Asta e greu pentru mine.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Fac bine așa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Știi cum se face asta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Nu, asta nu știu încă.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Pot să întreb ceva?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "a întreba", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "cine", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "puțin, un moment", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "timpul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "a deranja (pe cineva care e ocupat)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "a avea îndoieli (nu știi sigur)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Pot să întreb ceva?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Scuze că deranjez.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Cine mă poate ajuta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Ai o întrebare?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Da. Ai puțin timp?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Unde este?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "aici", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "acolo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "pierdut (nu îl găsești)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "ieșirea", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "a arăta cu degetul (a arăta unde este)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "lângă", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "M-am rătăcit.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Unde este ieșirea?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Toaleta e acolo, lângă cantină.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Găsești?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Nu. Poți să-mi arăți?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Răni mici și arsuri", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "rana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "bandajul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "a răci (cu apă rece)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "tăietura (o rană mică de la un cuțit sau de la ceva ascuțit)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "a leșina", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "dușul pentru ochi (apă ca să-ți clătești ochii)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Răcește arsura cu apă.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "E o tăietură mică. Apasă pe rană.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Unde e dușul pentru ochi?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Colegul meu e pe punctul să leșine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Lasă-l să stea puțin întins. Eu aduc ajutor.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Suni la 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "serviciile de urgență (ambulanța, pompierii, poliția)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "numele străzii", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "numărul casei", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "conștient, reacționează (persoana răspunde când îi vorbești)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "a aștepta pe cineva (la ușă, ca să-l primești)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "a rămâne la telefon (nu închizi)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Sun la 112. Am nevoie de o ambulanță.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Care e numele străzii și numărul casei?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Aștept ambulanța la intrare.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Răspunde când îi vorbești?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Nu. Nu reacționează.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Programul tău de lucru", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "programul săptămânal (cine lucrează și când, săptămâna asta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "aplicația cu programul (turele tale pe telefon)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "disponibil (poți lucra atunci)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "schimbarea", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "a înlocui pe cineva (lucrezi pentru cineva care lipsește)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "ziua liberă", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Programul nou e în aplicație.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': { m: "Ești disponibil sâmbătă?", f: "Ești disponibilă sâmbătă?", x: "Poți lucra sâmbătă?" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Poți s-o înlocuiești mâine pe Sara?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Ai o schimbare în program.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Bine. În ce zi trebuie să lucrez?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Ore și pauze", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "pauza de prânz", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "timpul de odihnă (timp liber între două ture)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "ziua de lucru", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "lista de ore (unde scrii orele lucrate)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "a pleca mai devreme", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "la rând (una după alta)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Îmi scriu orele pe lista de ore.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Pot pleca azi cu o oră mai devreme?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Am lucrat șase zile la rând.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Când ai pauza de prânz?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "La ora douăsprezece, o jumătate de oră.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Primele tale săptămâni", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "turul (cineva îți arată clădirea)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "îndrumătorul (colegul care te ajută în primele săptămâni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "carnețelul", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "a însoți un coleg (și a te uita cum lucrează)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "a ține minte", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "independent (fără ajutor)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Îmi mai arăți o dată?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Azi o însoțesc pe Sara.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Notez asta în carnețelul meu.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Îți amintești tot din tur?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Aproape tot. Unde era cantina?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Pregătirea comenzilor și stivuitorul retractabil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "orderpickerul (lucrătorul care adună comenzile; și utilajul mic pe care stai în picioare ca să iei marfă de sus)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "stivuitorul retractabil (un stivuitor pentru rafturi foarte înalte; furcile lui se întind în față)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "lista de picking (lista cu articolele pe care trebuie să le aduni)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "a scana", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "pietonul (o persoană care merge pe jos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "a se încălzi (într-un loc cald, după ce ai lucrat în frig)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Scanez fiecare articol de pe lista de picking.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Pietonii merg pe aleea pietonală.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "În camera de congelare port haine termice.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Poți să conduci puțin stivuitorul retractabil?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Nu, n-am voie. N-am făcut instruirea pentru asta.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
