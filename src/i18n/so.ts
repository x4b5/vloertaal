import type { HelpLanguageSource } from './types';

/** Somali (5 November 2026, the owner's request): simple standard Somali (Af-Soomaali), "adiga". */
const lang: HelpLanguageSource = {
  code: 'so',
  name: 'Somali',
  nativeName: 'Soomaali',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: "Muuqaalka", // nieuw, nalezen // nagelezen AI 28 nov
    themeAuto: "Si toos ah", // nieuw, nalezen // nagelezen AI 28 nov
    themeSand: "Ciid", // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: "Deked", // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: "Jaakadda shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: "Mugdi", // nieuw, nalezen // nagelezen AI 28 nov
    voice: "Codka Af-Holandiiska", // nieuw, nalezen // nagelezen AI 28 nov
    voiceAuto: "Si toos ah", // nieuw, nalezen // nagelezen AI 28 nov
    voiceHint: "Riix 🔊 si aad u dhegeysato. Codadka Vloertaal waa isku mid taleefan kasta; kuwa kale waxay ka yimaadaan taleefankaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    voiceNone: "Qalabkani ma laha cod Af-Holandiis ah. Waxaad mid ku dari kartaa dejinta taleefankaaga (Text-to-speech).", // nieuw, nalezen // nagelezen AI 28 nov
    appTagline: "Af-Holandiis shaqada loogu talagalay", // nieuw, nalezen // nagelezen AI 28 nov
    chooseLanguage: "Dooro luqadda caawinta", // nieuw, nalezen // nagelezen AI 28 nov
    englishOnly: "Ingiriisi oo keliya", // nieuw, nalezen // nagelezen AI 28 nov
    beta: "Turjumaadda weli lama hubin", // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: "maalin oo isku xigta", other: "maalmood oo isku xiga" }, // nieuw, nalezen // nagelezen AI 28 nov
    streakStarted: "Waxaad bilowday maalmo isku xiga! Berri soo noqo.", // nieuw, nalezen // nagelezen AI 28 nov
    streakGrew: { one: "{n} maalin oo isku xigta! Sii wad.", other: "{n} maalmood oo isku xiga! Sii wad." }, // nieuw, nalezen // nagelezen AI 28 nov
    start: "Bilow", // nieuw, nalezen // nagelezen AI 28 nov
    practice: "Mar kale ku celceli", // nieuw, nalezen // nagelezen AI 28 nov
    locked: "Marka hore dhammee casharka ka horreeya", // nieuw, nalezen // nagelezen AI 28 nov
    newWord: "Eray cusub", // nieuw, nalezen // nagelezen AI 28 nov
    tapToHear: "Riix si aad u maqasho", // nieuw, nalezen // nagelezen AI 28 nov
    sayItAloud: "Kor u dheh.", // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: "Si tartiib ah u dheh, ama maskaxdaada ku dheh.", // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: "Maxay tani ka dhigan tahay?", // nieuw, nalezen // nagelezen AI 28 nov
    snapQuestion: "Ma fahantay?", // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: "Haa, waa hagaag.", // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: "Waa fiican tahay inaad weydiiso!", // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: "Si fiican ayaad u fahantay!", // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: "Ma aragtay? Weydiintu way fiicnaan lahayd.", // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: "Midkee waa “{word}”?", // nieuw, nalezen // nagelezen AI 28 nov
    mixLesson: "Dib-u-eegis isku dhafan", // nieuw, nalezen // nagelezen AI 28 nov
    whatDoYouHear: "Maxaad maqlaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    buildSentence: "Weedhan Af-Holandiis ku samee", // nieuw, nalezen // nagelezen AI 28 nov
    typeWhatYouHear: "Qor waxa aad maqlayso", // nieuw, nalezen // nagelezen AI 28 nov
    check: "Hubi", // nieuw, nalezen // nagelezen AI 28 nov
    continue: "Sii wad", // nieuw, nalezen // nagelezen AI 28 nov
    correct: "Aad baad u fiican tahay!", // nieuw, nalezen // nagelezen AI 28 nov
    almost: "Waa sax, laakiin fiiri higgaadda", // nieuw, nalezen // nagelezen AI 28 nov
    incorrect: "Weli sax ma aha", // nieuw, nalezen // nagelezen AI 28 nov
    correctAnswer: "Jawaabta saxda ah", // nieuw, nalezen // nagelezen AI 28 nov
    rightAnswerIs: "Jawaabta saxda ahi waa:", // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: "Jawaabta ugu fiican waa:", // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: "Jawaabtaada", // nieuw, nalezen // nagelezen AI 28 nov
    inARow: "{n} isku xiga", // nieuw, nalezen // nagelezen AI 28 nov
    cantListen: "Hadda ma dhegeysan karo", // nieuw, nalezen // nagelezen AI 28 nov
    learnWriting: "Waxaan sidoo kale rabaa inaan barto qoraalka", // nieuw, nalezen // nagelezen AI 28 nov
    learnWritingHint: "Shidan: erayada aad maqasho ku qor xarfo. Demsan: dooro erayga qoran ee aad maqasho.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    tagRepeat: "Mar kale", // nieuw, nalezen // nagelezen AI 28 nov
    readAloud: "Kor u akhri", // nieuw, nalezen // nagelezen AI 28 nov
    lessonComplete: "Casharka waad dhammaysay!", // nieuw, nalezen // nagelezen AI 28 nov
    phrasebook: "Weedhaha degdegga", // nieuw, nalezen // nagelezen AI 28 nov
    phrasebookHint: "Riix weedh si aad u maqasho. Shaashadda waxaad sidoo kale tusi kartaa saaxiibka shaqada.", // nieuw, nalezen // nagelezen AI 28 nov
    whoToCall: "Dhibaato shaqada? Yaa ku caawin kara", // nieuw, nalezen // nagelezen AI 28 nov
    who112: "Xaalad degdeg ah: nolol khatar ku jirta, dab ama dembi hadda dhacaya.", // nieuw, nalezen // nagelezen AI 28 nov
    whoLegal: "Talo bilaash ah oo ku saabsan qandaraaskaaga, mushaharkaaga ama shaqo ka eryid.", // nieuw, nalezen // nagelezen AI 28 nov
    whoInspection: "Soo sheeg shaqo aan ammaan ahayn, mushahar aad u yar ama ka faa'iidaysi. Waxaad u samayn kartaa adigoon magacaaga sheegin.", // nieuw, nalezen // nagelezen AI 28 nov
    whoFairwork: "Shaqada waa lagaa faa'iidaysanayaa, ama sidaas ayaad u malaynaysaa.", // nieuw, nalezen // nagelezen AI 28 nov
    who113: "Waxaad ka fikiraysaa inaad naftaada iska qaaddo, ama qof ayaad ka welwelsan tahay. Bilaash, habeen iyo maalin.", // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: "Rabshad ama xadgudub guriga, adiga ama qof kale. Bilaash, xitaa adigoon magacaaga bixin.", // nieuw, nalezen // nagelezen AI 28 nov
    settings: "Dejinta", // nieuw, nalezen // nagelezen AI 28 nov
    helpLanguage: "Luqadda caawinta", // nieuw, nalezen // nagelezen AI 28 nov
    resetProgress: "Tirtir horumarkayga", // nieuw, nalezen // nagelezen AI 28 nov
    resetConfirm: "Ma tirtiraysaa dhammaan horumarka qalabkan ku jira?", // nieuw, nalezen // nagelezen AI 28 nov
    audioUnavailable: "Codku kuma shaqeeyo qalabkan.", // nieuw, nalezen // nagelezen AI 28 nov
    slow: "Tartiib", // nieuw, nalezen // nagelezen AI 28 nov
    completeChat: "Dhammaystir wadahadalka", // nieuw, nalezen // nagelezen AI 28 nov
    meaning: "Macnaha", // nieuw, nalezen // nagelezen AI 28 nov
    navRoute: "Casharrada", // nieuw, nalezen // nagelezen AI 28 nov
    navWords: "Caawimaad", // nieuw, nalezen // nagelezen AI 28 nov
    rightFirstTime: "Sax markii ugu horreysay", // nieuw, nalezen // nagelezen AI 28 nov
    newWords: "Erayo cusub", // nieuw, nalezen // nagelezen AI 28 nov
    wordsLearnedN: { one: "Waxaad baratay {n} eray", other: "Waxaad baratay {n} eray" }, // nieuw, nalezen // nagelezen AI 28 nov
    practiseMistakes: { one: "Ku celceli khaladaadka · {n} ayaa haray", other: "Ku celceli khaladaadka · {n} ayaa haray" }, // nieuw, nalezen // nagelezen AI 28 nov
    quitHint: "Jawaabahaaga casharkan lama kaydinayo.", // nieuw, nalezen // nagelezen AI 28 nov
    keepGoing: "Sii wad", // nieuw, nalezen // nagelezen AI 28 nov
    stopLesson: "Jooji casharka", // nieuw, nalezen // nagelezen AI 28 nov
    fullVersion: "Nooca buuxa", // nieuw, nalezen // nagelezen AI 28 nov
    unlockFull: "Fur nooca buuxa", // nieuw, nalezen // nagelezen AI 28 nov
    unlockHint: "Koodhka ayaa furaya dhammaan casharrada. Koodhku waa bilaash. Weli koodh ma haysatid? Weydii macallinkaaga ama la-taliyahaaga, ama noo soo dir e-mail:", // nieuw, nalezen // nagelezen AI 28 nov
    codeNotFull: "Koodhkani ma furo nooca buuxa. Weydiiso koodh cusub.", // nieuw, nalezen // nagelezen AI 28 nov
    password: "Koodh", // nieuw, nalezen // nagelezen AI 28 nov
    enterPassword: "Geli koodhka", // nieuw, nalezen // nagelezen AI 28 nov
    wrongPassword: "Koodhkaasi sax ma aha. Mar kale isku day.", // nieuw, nalezen // nagelezen AI 28 nov
    unlock: "Fur", // nieuw, nalezen // nagelezen AI 28 nov
    sector: "Shaqadaada", // nieuw, nalezen // nagelezen AI 28 nov
    chooseSector: "Xaggee ka shaqaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    countryTitle: "Dalkee ayaad ka shaqaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    countryHint: 'Waxaad helaysaa erayada iyo talooyinka dalkaas.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: "Waxa aad baranayso waxay ku jiraan taleefankan oo keliya.", // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: "Had iyo jeer isticmaal taleefankan.", // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: "Holland", // nieuw, nalezen // nagelezen AI 28 nov
    countryBe: "Beljiyam (Flanders)", // nieuw, nalezen // nagelezen AI 28 nov
    tipsNote: "Talooyinkan waxay ku saabsan yihiin shaqada Holland. Macluumaad guud, maaha talo sharci.", // nieuw, nalezen // nagelezen AI 28 nov
    sectorHint: "Casharrada shaqadaada ayaa goor hore imanaya. Hadhow waad ku beddeli kartaa Dejinta.", // nieuw, nalezen // nagelezen AI 28 nov
    otherSectors: "Qaybaha kale", // nieuw, nalezen // nagelezen AI 28 nov
    reviewToday: "Maanta ku celi", // nieuw, nalezen // nagelezen AI 28 nov
    reviewTodayN: { one: "Erayada aad mar kale ku celcelinayso: {n} · dhowr daqiiqo", other: "Erayada aad mar kale ku celcelinayso: {n} · dhowr daqiiqo" }, // nieuw, nalezen // nagelezen AI 28 nov
    notSureYet: "Weli ma hubo", // nieuw, nalezen // nagelezen AI 28 nov
    sectorLogistics: "Saadka iyo bakhaarka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorConstruction: "Dhismaha", // nieuw, nalezen // nagelezen AI 28 nov
    sectorProduction: "Wax soo saarka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorCare: "Daryeelka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorHospitality: "Hudheelada iyo makhaayadaha", // nieuw, nalezen // nagelezen AI 28 nov
    sectorRetail: "Dukaanka iyo suuqa weyn", // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: "Nadaafadda", // nieuw, nalezen // nagelezen AI 28 nov
    sectorHorticulture: "Beerashada", // nieuw, nalezen // nagelezen AI 28 nov
    sectorTechnical: "Shaqo farsamo", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGarage: "Dayactirka baabuurta", // nieuw, nalezen // nagelezen AI 28 nov
    sound: "Codka", // nieuw, nalezen // nagelezen AI 28 nov
    soundOn: "Cod leh", // nieuw, nalezen // nagelezen AI 28 nov
    withoutSound: "Cod la'aan", // nieuw, nalezen // nagelezen AI 28 nov
    quietHint: "Cod la'aan, casharradu ma laha su'aalo dhegeysi ah, waxna iskood uma shidmaan. Riix 🔊 si aad eray u maqasho, tusaale ahaan adigoo sameecado xiran.", // nieuw, nalezen // nagelezen AI 28 nov
    soundOffToast: "Cod la'aan. Codka waxaad ka shidi kartaa Dejinta.", // nieuw, nalezen // nagelezen AI 28 nov
    noInternetSound: "Internet ma jiro: codku hadda ma shaqaynayo.", // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: "Waxa maanta haray", // nieuw, nalezen // nagelezen AI 28 nov
    streakStopped: { one: "Maalmahaagii isku xigay waxay istaageen {n} maalin. Maanta mar kale bilow.", other: "Maalmahaagii isku xigay waxay istaageen {n} maalmood. Maanta mar kale bilow." }, // nieuw, nalezen // nagelezen AI 28 nov
    recordN: { one: "Kaagii ugu fiicnaa: {n} maalin", other: "Kaagii ugu fiicnaa: {n} maalmood" }, // nieuw, nalezen // nagelezen AI 28 nov
    workWeek: "Toddobaadkaaga shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    freeDaysN: { one: "Maalin fasax ah: {n}. Haddii aad hal maalin seegto, maalmahaaga isku xiga way sii socdaan.", other: "Maalmo fasax ah: {n}. Haddii aad hal maalin seegto, maalmahaaga isku xiga way sii socdaan." }, // nieuw, nalezen // nagelezen AI 28 nov
    restDay: "Maalin fasax", // nieuw, nalezen // nagelezen AI 28 nov
    tier3: "3 maalmood oo isku xiga", // nieuw, nalezen // nagelezen AI 28 nov
    tier7: "1 toddobaad oo isku xiga", // nieuw, nalezen // nagelezen AI 28 nov
    tier14: "2 toddobaad oo isku xiga", // nieuw, nalezen // nagelezen AI 28 nov
    tier30: "1 bil oo isku xigta", // nieuw, nalezen // nagelezen AI 28 nov
    reviewDone: "Maanta waad dhammaysay", // nieuw, nalezen // nagelezen AI 28 nov
    tomorrowN: { one: "Berri: {n} eray", other: "Berri: {n} eray" }, // nieuw, nalezen // nagelezen AI 28 nov
    firstWordsTomorrow: "Berri erayadaadii ugu horreeyay ayaa soo noqonaya", // nieuw, nalezen // nagelezen AI 28 nov
    extraRound: "Wareeg dheeraad ah", // nieuw, nalezen // nagelezen AI 28 nov
    reviewFirstHint: "Marka hore dib u eeg. Markaas wax badan ayaad xusuusan doontaa.", // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: "{n} eray ayaa xoogaystay", other: "{n} eray ayaa xoogaystay" }, // nieuw, nalezen // nagelezen AI 28 nov
    noMistakes: "Khalad ma jiro", // nieuw, nalezen // nagelezen AI 28 nov
    nextUp: "Xiga", // nieuw, nalezen // nagelezen AI 28 nov
    installTitle: "Vloertaal dhig shaashadda hore ee taleefankaaga", // nieuw, nalezen // nagelezen AI 28 nov
    installHint: "Markaas wuxuu u furmaa sida app, xitaa internet la'aan.", // nieuw, nalezen // nagelezen AI 28 nov
    installAdd: "Ku dar shaashadda hore", // nieuw, nalezen // nagelezen AI 28 nov
    iosStep1: "Riix “Share” (La wadaag)", // nieuw, nalezen // nagelezen AI 28 nov
    iosStep2: "Riix “Add to Home Screen” (Ku dar shaashadda hore)", // nieuw, nalezen // nagelezen AI 28 nov
    iosStep3: "Waa dhammaatay!", // nieuw, nalezen // nagelezen AI 28 nov
    backupTitle: "Kaydi horumarkaaga", // nieuw, nalezen // nagelezen AI 28 nov
    backupHint: "Horumarkaagu wuxuu ku jiraa taleefankan oo keliya. U kaydi fayl ahaan, tusaale ahaan taleefan cusub.", // nieuw, nalezen // nagelezen AI 28 nov
    backupSave: "Soo deji", // nieuw, nalezen // nagelezen AI 28 nov
    backupLoad: "Dib u celi", // nieuw, nalezen // nagelezen AI 28 nov
    backupBad: "Kani maaha fayl Vloertaal.", // nieuw, nalezen // nagelezen AI 28 nov
    backupAsk: "Faylkan ma ku daraysaa horumarkaaga, mise horumarkaaga ayaad ku beddelaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    backupMerge: "Isku dar", // nieuw, nalezen // nagelezen AI 28 nov
    backupReplace: "Beddel", // nieuw, nalezen // nagelezen AI 28 nov
    backupBack: "Horumarkaagii waa soo noqday.", // nieuw, nalezen // nagelezen AI 28 nov
    backupNothingNew: "Wax cusub ma jiraan: kani horey ayuu taleefankaaga ugu jiray.", // nieuw, nalezen // nagelezen AI 28 nov
    cancel: "Ka noqo", // nieuw, nalezen // nagelezen AI 28 nov
    remindTitle: "I xusuusi maalin kasta", // nieuw, nalezen // nagelezen AI 28 nov
    remindEvent: "Waa waqtigii Af-Holandiiskaaga (10 daqiiqo)", // nieuw, nalezen // nagelezen AI 28 nov
    remindHint: "Kalandarka taleefankaaga ayaa ku xusuusinaya. Waxba nalooma soo diro.", // nieuw, nalezen // nagelezen AI 28 nov
    remindBefore: "Shaqada ka hor", // nieuw, nalezen // nagelezen AI 28 nov
    remindAfter: "Shaqada ka dib", // nieuw, nalezen // nagelezen AI 28 nov
    remindOwn: "Waqti kale", // nieuw, nalezen // nagelezen AI 28 nov
    remindAdd: "Ku dar kalandarkayga", // nieuw, nalezen // nagelezen AI 28 nov
    remindAdded: "Fur faylka si aad ugu darto kalandarkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    remindAddedAsk: "Ma ku dartay? Markaas waxaad ku arki doontaa kalandarkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: "Ku saabsan", // nieuw, nalezen // nagelezen AI 28 nov
    tagMeaning: "Macnaha", // nieuw, nalezen // nagelezen AI 28 nov
    tagPick: "Dooro", // nieuw, nalezen // nagelezen AI 28 nov
    tagListen: "Dhegeyso", // nieuw, nalezen // nagelezen AI 28 nov
    tagType: "Qor", // nieuw, nalezen // nagelezen AI 28 nov
    tagMatch: "Lammaane", // nieuw, nalezen // nagelezen AI 28 nov
    tagBuild: "Weedh", // nieuw, nalezen // nagelezen AI 28 nov
    tagChat: "Wadahadal", // nieuw, nalezen // nagelezen AI 28 nov
    tagSituation: "Xaalad", // nieuw, nalezen // nagelezen AI 28 nov
    tagTip: "Talo", // nieuw, nalezen // nagelezen AI 28 nov
    more: "In badan", // nieuw, nalezen // nagelezen AI 28 nov
    less: "In yar", // nieuw, nalezen // nagelezen AI 28 nov
    daysUnit: { one: "maalin", other: "maalmood" }, // nieuw, nalezen // nagelezen AI 28 nov
    wordsUnit: { one: "eray", other: "erayo" }, // nieuw, nalezen // nagelezen AI 28 nov
    countTitle: "Tiri magac la'aan", // nieuw, nalezen // nagelezen AI 28 nov
    countHint: "App-ku wuxuu tiriyaa inta jeer ee casharrada la sameeyo, iyo qiyaas ahaan inta ay qaataan. Iyo haddii app-ku meel khalad ku leeyahay. Magac ma jiro, akoon ma jiro, raadraac ma jiro.", // nieuw, nalezen // nagelezen AI 28 nov
    certificate: "Shahaado", // nieuw, nalezen // nagelezen AI 28 nov
    myCertificates: "Shahaadooyinkayga", // nieuw, nalezen // nagelezen AI 28 nov
    certsEmpty: "Dhammee dhammaan casharrada hal mawduuc. Markaas waxaad helaysaa shahaado.", // nieuw, nalezen // nagelezen AI 28 nov
    certEarned: "Shahaado ayaad heshay!", // nieuw, nalezen // nagelezen AI 28 nov
    certEarnedHint: "Waxaad dhammaysay dhammaan casharrada mawduucan.", // nieuw, nalezen // nagelezen AI 28 nov
    certView: "Eeg", // nieuw, nalezen // nagelezen AI 28 nov
    certLater: "Hadhow", // nieuw, nalezen // nagelezen AI 28 nov
    certPrint: "Daabac ama u kaydi PDF ahaan", // nieuw, nalezen // nagelezen AI 28 nov
    certSaved: "Sawirka waa la kaydiyay.", // nieuw, nalezen // nagelezen AI 28 nov
    certNameHint: "Magacaagu wuxuu ku jirayaa taleefankan oo keliya. Waad iska dhaafi kartaa.", // nieuw, nalezen // nagelezen AI 28 nov
    certChangeName: "Beddel magaca", // nieuw, nalezen // nagelezen AI 28 nov
    certPractice: "Shahaado tababar, maaha shahaado rasmi ah", // nieuw, nalezen // nagelezen AI 28 nov
    resumeLesson: "Sii wad casharka", // nieuw, nalezen // nagelezen AI 28 nov
    restartLesson: "Dib u bilow", // nieuw, nalezen // nagelezen AI 28 nov
    quitKept: "Horumarkaaga waa la kaydiyay. Hadhow waad sii wadi kartaa.", // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswer: "Jawaabta ugu fiican", // nieuw, nalezen // nagelezen AI 28 nov
    inReview: "waa la eegayaa", // nieuw, nalezen // nagelezen AI 28 nov
    today: "Maanta", // nieuw, nalezen // nagelezen AI 28 nov
    playAgain: "Mar kale dhegeyso", // nieuw, nalezen // nagelezen AI 28 nov
    daysUnitOne: "maalin", // nieuw, nalezen // nagelezen AI 28 nov
    wordsUnitOne: "eray", // nieuw, nalezen // nagelezen AI 28 nov
    wordsLearnedOne: "Waxaad baratay {n} eray", // nieuw, nalezen // nagelezen AI 28 nov
    tomorrowOne: "Berri: {n} eray", // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerOne: "{n} eray ayaa xoogaystay", // nieuw, nalezen // nagelezen AI 28 nov
    recordOne: "Kaagii ugu fiicnaa: {n} maalin", // nieuw, nalezen // nagelezen AI 28 nov
    streakStoppedOne: "Maalmahaagii isku xigay waxay istaageen {n} maalin. Maanta mar kale bilow.", // nieuw, nalezen // nagelezen AI 28 nov
    letterTiles: "Xarfo", // nieuw, nalezen // nagelezen AI 28 nov
    useKeyboard: "Kiiboodh", // nieuw, nalezen // nagelezen AI 28 nov
    skippedN: { one: "{n} waa la booday, lama tirin", other: "{n} waa la booday, lama tirin" }, // nieuw, nalezen // nagelezen AI 28 nov
    stampLater: "Hadhow ayuu soo noqonayaa", // nieuw, nalezen // nagelezen AI 28 nov
    stampDone: "Dhammaaday", // nieuw, nalezen // nagelezen AI 28 nov
    chooseNext: "Dooro mawduucaaga xiga", // nieuw, nalezen // nagelezen AI 28 nov
    recommended: "Lagu taliyay", // nieuw, nalezen // nagelezen AI 28 nov
    allTopics: "Dhammaan mawduucyada", // nieuw, nalezen // nagelezen AI 28 nov
    topicsOrder: "Tus mawduucyada", // nieuw, nalezen // nagelezen AI 28 nov
    privacyLink: "Akhri bayaanka asturnaanta (Af-Holandiis)", // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: "Maxaad rabtaa inaad barato?", // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: "Baro Af-Holandiiska shaqada – iyo sida shaqadu halkan u socoto", // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: "Horey ayaan ugu hadlaa Af-Holandiis: xeerarka shaqada oo keliya", // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: "Baro Af-Holandiis", // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'U gudub Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Wax walba waxay noqonayaan Af-Holandiis. Luqadda caawintu way baxaysaa.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Ilaa aad dib ugu noqoto, waxaad dib u eegaysaa xeerarka, ma aha erayada.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Horumarkaagu wuu kaydsanaanayaa. Halkan ayaad dib uga noqon kartaa.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Haa, u gudub Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: "Qaybo ahaan", // nieuw, nalezen // nagelezen AI 28 nov
    inOrder: "Siday isugu xigaan", // nieuw, nalezen // nagelezen AI 28 nov
    searchTopics: "Raadi mawduuc", // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: "Mawduuc leh eraygan ma jiro.", // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: "cashar", other: "casharro" }, // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnitOne: "cashar", // nieuw, nalezen // nagelezen AI 28 nov
    topicsUnit: { one: "mawduuc", other: "mawduucyo" }, // nieuw, nalezen // nagelezen AI 28 nov
    topicsUnitOne: "mawduuc", // nieuw, nalezen // nagelezen AI 28 nov
    allTopicsDone: "Waxaad dhammaysay mawduuc kasta. Aad baad u fiican tahay!", // nieuw, nalezen // nagelezen AI 28 nov
    // Speaking practice
    tagSpeak: "Hadal", // nieuw, nalezen // nagelezen AI 28 nov
    speakPrompt: "Dhegeyso, kadibna dheh", // nieuw, nalezen // nagelezen AI 28 nov
    tapToSpeak: "Riix oo hadal", // nieuw, nalezen // nagelezen AI 28 nov
    stopRecording: "Jooji", // nieuw, nalezen // nagelezen AI 28 nov
    micPrivacy: "Qof kale kuma maqlo. Waxba lama diro.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: "Makarafoonku waa demsan yahay. Hadda kor u dheh, kadibna sii wad.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    cantSpeak: "Hadda ma hadli karo", // nieuw, nalezen // nagelezen AI 28 nov
    soundsSame: "Waa isku cod", // nieuw, nalezen // nagelezen AI 28 nov
    sayAgain: "Mar kale dheh", // nieuw, nalezen // nagelezen AI 28 nov
    hearMine: "Is maqal", // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: "Markaas iyo hadda", // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: "Isku daygaagii ugu horreeyay: {date}", // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Wada jir u dheh", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Ku dheh isla waqtiga codka. Waxba lama duubayo.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Hadda adiga keligaa", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Khaladaadku waa qayb ka mid ah barashada. Lagama fahmin? Mar kale dheh.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Ma walwalsan tahay? Taasi waa caadi. Haddana dheh.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Uma baahnid inaad si qumman u dhahdo. Isku day oo keliya.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Maxaad u baranaysaa Af-Holandiiska?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonHint: "Dooro mid ama laba.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Dhammaad", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Inaan shaqadayda si fiican u qabto", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Carruurtayda", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Inaan la hadlo saaxiibada shaqada", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonArrange: "Inaan arrimahayga keligay qabsado", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "Shaqo ka wanaagsan", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Inaan Holland gurigayga ku dareemo", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakMe: "Aniga", // nieuw, nalezen // nagelezen AI 28 nov
    speakingPractice: "Tababarka hadalka", // nieuw, nalezen // nagelezen AI 28 nov
    speakingHint: "Erayo kor u dheh oo isbarbar dhig. Qof kale kuma maqlo: waxba lama diro. Duubistaada ugu horreysa ee weedh kasta waxay ku jiraysaa taleefankaaga, si aad hadhow isbarbar dhigto.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: "Waa la kaydinayaa…", // nieuw, nalezen // nagelezen AI 28 nov
    savedOffline: "Waa la kaydiyay, internet la'aan ayuu shaqaynayaa", // nieuw, nalezen // nagelezen AI 28 nov
    offlineNoSpace: "Meel ku filan kuma jirto taleefankan. Ka saar mawduuc la kaydiyay ama meel bannee.", // nieuw, nalezen // nagelezen AI 28 nov
    offlineFailed: "Kaydintu ma shaqayn. Hubi internetkaaga oo mar kale isku day.", // nieuw, nalezen // nagelezen AI 28 nov
    pocketCard: "Kaarka jeebka", // nieuw, nalezen // nagelezen AI 28 nov
    pocketSave: "U kaydi sawir ahaan", // nieuw, nalezen // nagelezen AI 28 nov
    textSize: "Cabbirka qoraalka", // nieuw, nalezen // nagelezen AI 28 nov
    textNormal: "Caadi", // nieuw, nalezen // nagelezen AI 28 nov
    textLarge: "Weyn", // nieuw, nalezen // nagelezen AI 28 nov
    textXl: "Aad u weyn", // nieuw, nalezen // nagelezen AI 28 nov
    showEnglish: "Sidoo kale tus Ingiriisiga", // nieuw, nalezen // nagelezen AI 28 nov
    genderTitle: "Naag mise nin?", // nieuw, nalezen // nagelezen AI 28 nov
    genderHint: "Si luqaddaadu kuula hadasho si sax ah.", // nieuw, nalezen // nagelezen AI 28 nov
    genderWoman: "Naag", // nieuw, nalezen // nagelezen AI 28 nov
    genderMan: "Nin", // nieuw, nalezen // nagelezen AI 28 nov
    genderNone: "Ma doonayo inaan sheego", // nieuw, nalezen // nagelezen AI 28 nov
    langGuessYes: "Haa", // nieuw, nalezen // nagelezen AI 28 nov
    langGuessOther: "Luqad kale", // nieuw, nalezen // nagelezen AI 28 nov
    settingsLangMe: "Luqadda iyo aniga", // nieuw, nalezen // nagelezen AI 28 nov
    settingsLessons: "Casharrada", // nieuw, nalezen // nagelezen AI 28 nov
    settingsPhone: "Taleefankan", // nieuw, nalezen // nagelezen AI 28 nov
    settingOn: "Shidan", // nieuw, nalezen // nagelezen AI 28 nov
    settingOff: "Demsan", // nieuw, nalezen (AI-correctie 28 nov 2026)
    sectorGroupMake: "Samaynta iyo gaadiidka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupCare: "Daryeelka iyo carruurta", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: "Dukaanka iyo martigelinta", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: "Dhismaha iyo farsamada", // nieuw, nalezen // nagelezen AI 28 nov
    voiceWoman: "Cod naageed", // nieuw, nalezen // nagelezen AI 28 nov
    voiceMan: "Cod nineed", // nieuw, nalezen // nagelezen AI 28 nov
    writingPick: "Dooro erayga", // nieuw, nalezen // nagelezen AI 28 nov
    settingWriting: "Qoraalka", // nieuw, nalezen // nagelezen AI 28 nov
    settingKeepLessons: "Casharrada ku hay taleefankan", // nieuw, nalezen // nagelezen AI 28 nov
    settingKeepLessonsHint: "Mawduuca aad hadda baranayso waxaa lagu kaydiyaa taleefankan, si uu internet la'aan ugu shaqeeyo. Mawduucyada la dhammeeyay mar kale waa la saarayaa.", // nieuw, nalezen // nagelezen AI 28 nov
    otherTopicLink: "Mawduuc kale", // nieuw, nalezen // nagelezen AI 28 nov
    remindAsk: "Ma ku xusuusinnaa maalin kasta?", // nieuw, nalezen // nagelezen AI 28 nov
    remindYes: "Haa, shaqada ka dib", // nieuw, nalezen // nagelezen AI 28 nov
    remindNo: "Maya, mahadsanid", // nieuw, nalezen // nagelezen AI 28 nov
    remindPickTime: "Goormaan ku xusuusinnaa?", // nieuw, nalezen // nagelezen AI 28 nov
    certSaveShare: "Kaydi ama la wadaag", // nieuw, nalezen // nagelezen AI 28 nov
    pauseTitle: "Hakad", // nieuw, nalezen // nagelezen AI 28 nov
    back: "Dib u noqo", // nieuw, nalezen // nagelezen AI 28 nov
    quitLesson: "Ka bax casharka", // nieuw, nalezen // nagelezen AI 28 nov
    playAudio: "Daar", // nieuw, nalezen // nagelezen AI 28 nov
    scrollDown: "Hoos u dhaqaaji", // nieuw, nalezen // nagelezen AI 28 nov
    lessonProgress: "Horumarka casharka", // nieuw, nalezen // nagelezen AI 28 nov
    mainMenu: "Liiska ugu weyn", // nieuw, nalezen // nagelezen AI 28 nov
    spaceKey: "Meel bannaan", // nieuw, nalezen // nagelezen AI 28 nov
    langNotOnPhone: "Luqaddan weli kuma jirto taleefankan. Ku xir internetka si aad u beddesho.", // nieuw, nalezen // nagelezen AI 28 nov
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: "Adigu dooro waqti", // nieuw, nalezen // nagelezen AI 28 nov
    gateWho: "Macallinkaaga, la-taliyahaaga ama loo-shaqeeyahaaga ayaa ku siinaya koodhka.", // nieuw, nalezen // nagelezen AI 28 nov
    gateTrust: "Akoon ma jiro. Magac ma jiro. Wax walba waxay ku jiraan taleefankan.", // nieuw, nalezen // nagelezen AI 28 nov
    codeAccepted: "Koodhka waa la aqbalay", // nieuw, nalezen // nagelezen AI 28 nov
    startFree: "Koodh ma haysatid? Ku bilow casharrada ugu horreeya", // nieuw, nalezen // nagelezen AI 28 nov
    bramHello: "Waan ku faraxsanahay inaan ku arko.", // nieuw, nalezen // nagelezen AI 28 nov
    bramBack: "Ku soo dhowow mar kale. Aan sii wadno.", // nieuw, nalezen // nagelezen AI 28 nov
    bramRested: "Shalay waxay ahayd maalintaada fasaxa. Maalmahaaga isku xiga way sii socdaan.", // nieuw, nalezen // nagelezen AI 28 nov
    bramDueN: { one: "Maanta {n} eray ayaad ku celinaysaa.", other: "Maanta {n} eray ayaad ku celinaysaa." }, // nieuw, nalezen // nagelezen AI 28 nov
    bramDueOne: "Maanta {n} eray ayaad ku celinaysaa.", // nieuw, nalezen // nagelezen AI 28 nov
    bramDayN: "Maalin {n} oo isku xigta.", // nieuw, nalezen // nagelezen AI 28 nov
    bramDone: "Maanta waad dhammaysay. Berri ayaan is arki doonnaa.", // nieuw, nalezen // nagelezen AI 28 nov
    bramPerfect: "Aad u fiican. Erayadan waad taqaan.", // nieuw, nalezen // nagelezen AI 28 nov
    bramGood: "Shaqo fiican. Tallaabo tallaabo.", // nieuw, nalezen // nagelezen AI 28 nov
    bramHard: "Waa fiican tahay inaad ku celcelisay. Erayada adag mar kale ayay soo noqonayaan.", // nieuw, nalezen // nagelezen AI 28 nov
    bramReview: "Fiican. Ku celintu waxay kaa caawinaysaa inaad xusuusato.", // nieuw, nalezen // nagelezen AI 28 nov
    bramIntro: "Waxaan ahay Bram, saaxiibkaaga shaqada.", // nieuw, nalezen // nagelezen AI 28 nov
    bramIntroHello: "Salaan, waxaan ahay Bram.", // nieuw, nalezen // nagelezen AI 28 nov
    showDutch: "Ku tus Af-Holandiis", // nieuw, nalezen // nagelezen AI 28 nov
    showAnswers: "Tus jawaabaha", // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: "Markii ugu dambeysay ee la cusboonaysiiyay: {date}", // nieuw, nalezen // nagelezen AI 28 nov
    /* G4 b3 */
    buildListen: "Dhegeyso oo samee weedha", // nieuw, nalezen // nagelezen AI 28 nov
    chatWhichQuestion: "Su'aashee ayaa ku habboon jawaabtan?", // nieuw, nalezen // nagelezen AI 28 nov
    reviewWaiting: "{n} eray oo kale ayaa sugaya. Maalmaha soo socda ayay soo noqonayaan.", // nieuw, nalezen // nagelezen AI 28 nov
    factTitle: "Ma ogeyd?", // nieuw, nalezen // nagelezen AI 28 nov
    fact3: "Keligaa ma tihid: in ka badan 3 milyan oo qof oo waaweyn oo Holland ku nool ayaa u arka akhriska, xisaabta ama kombiyuutarka wax adag. Ku celcelintu way caawisaa.", // nieuw, nalezen // nagelezen AI 28 nov
    fact7: "Muhaajiriinta si aad ah ugu hadla Af-Holandiis, 100-kiiba 69 ayaa leh shaqo mushahar leh.", // nieuw, nalezen // nagelezen AI 28 nov
    fact14: "Maktabado badan waxay leeyihiin Taalhuis (guriga luqadda): caawimaad bilaash ah si aad u sii barato Af-Holandiis.", // nieuw, nalezen // nagelezen AI 28 nov
    fact30: "Wax yar oo maalin kasta ah ayaa ka fiican wax badan oo mar mar ah. 30 maalmood ayaad samaysay!", // nieuw, nalezen // nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: "Faylkan wuxuu leeyahay {n} cashar.", other: "Faylkan wuxuu leeyahay {n} cashar." }, // nieuw, nalezen // nagelezen AI 28 nov
    backupFileOne: "Faylkan wuxuu leeyahay {n} cashar.", // nieuw, nalezen // nagelezen AI 28 nov
    backupPhoneN: { one: "Waxaad leedahay {n} cashar.", other: "Waxaad leedahay {n} cashar." }, // nieuw, nalezen // nagelezen AI 28 nov
    backupPhoneOne: "Waxaad leedahay {n} cashar.", // nieuw, nalezen // nagelezen AI 28 nov
    backupFewer: "“Beddel” wuxuu tirtirayaa casharrada aan faylka ku jirin. “Isku dar” wax walba wuu hayaa.", // nieuw, nalezen // nagelezen AI 28 nov
    backupTooBig: "Faylkani aad buu u weyn yahay. Fayl Vloertaal aad buu uga yar yahay.", // nieuw, nalezen // nagelezen AI 28 nov
    backupNewPhone: "Taleefan cusub? Halkaas sidoo kale waxaad u baahan tahay koodhkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    remindEveryDay: "Xusuusintaada: maalin kasta saacadda {time}", // nieuw, nalezen // nagelezen AI 28 nov
    remindStop: "Jooji xusuusinta", // nieuw, nalezen // nagelezen AI 28 nov
    remindStopped: "Fur faylka si aad xusuusinta uga saarto kalandarkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    remindStoppedAndroid: "Adigu ka tirtir xusuusinta Google Calendar.", // nieuw, nalezen // nagelezen AI 28 nov
    resetKeeps: "Casharradaada, erayadaada, maalmahaaga isku xiga iyo shahaadooyinkaaga waa la tirtirayaa. Luqaddaada iyo dejintaada way sii jiraan.", // nieuw, nalezen // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: "Lama soo rarin. Internet ma haysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    retry: "Isku day mar kale", // nieuw, nalezen // nagelezen AI 28 nov
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: "Vloertaal ma bilaabmi karo.", // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: "Marka hore kaydi horumarkaaga. Kadib dib u bilow.", // nieuw, nalezen // nagelezen AI 28 nov
    startOver: "Dib u bilow", // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Wax baa khaldamay. Horumarkaaga waa la kaydiyay.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: "Maxaad horey u taqaan?", // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: "Qiyaastii 10 daqiiqo. Dhibco ma jiraan. Adiga oo keliya ayay kuu tahay.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: "Wax badan ayaad baratay. Mar kale samee tijaabada oo eeg waxa aad hadda taqaan.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: "Dhegeysi", // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: "Erayo", // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: "Weedho", // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: "Dhegeyso. Maxay ka dhigan tahay?", // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: "Ma taqaan? Markaas riix “Ma aqaan”. Taasi waa caadi.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: "Duubistaadu waxay ku jiraysaa taleefankan oo keliya. Hadhow waad is maqli kartaa mar kale.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: "Bilow fiican! Kani waa waxa aad horey u taqaan.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: "Si fiican ayaad u samaysay! Eeg waxa aad hadda taqaan.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: "Adiga markii hore", // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: "Adiga hadda", // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: "Wax yar ku celceli maalin kasta. Markaas wax badan oo kale ayaad baranaysaa.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: "Samee tijaabada", // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: "Ma aqaan", // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: "Ka badan markii hore", // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: "Qiyaastii isku mid", // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: "Guud ahaan: hadda waxaad taqaan wax ka badan markii hore.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: "Guud ahaan: qiyaastii la mid markii hore.", // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: "Marka hore 5 su'aalood oo adiga kugu saabsan. Sax iyo khalad ma jiro.", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: "Ma u dhiirran kartaa tan?", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: "Inaad sheegto inaadan wax fahmin", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: "Inaad madaxaaga wax weydiiso", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: "Inaad caawimaad weydiisato", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: "Inaad sheegto in wax aanu ammaan ahayn", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: "Inaad nasashada wax yar la sheekaysato saaxiibka shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: "Weli maya", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: "Wax yar", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: "Haa", // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: "Dhowr toddobaad kadib mar kale ayaan ku weydiin doonnaa.", // nieuw, nalezen // nagelezen AI 28 nov
    tempo: "Xawaaraha", // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: "Deggan", // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: "Caadi", // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: "Deggan waa tartiib oo cad. Caadi waa sida saaxiibbada shaqadu u hadlaan. Dooro “Caadi” marka aad horey wax badan u fahmayso.", // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: "Tus sida ay u socoto", // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: "Kaarkan wuxuu muujinayaa horumarkaaga. Tus macallinkaaga, la-taliyahaaga ama madaxaaga. Adiga ayaa go'aansanaya.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: "Sidoo kale waxaad dhihi kartaa maya.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: "Taleefankaaga ayaa sameeya kaarka. Waxba lama diro. Vloertaal waxba ma hayo.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: "Kaarka dushiisa, Af-Holandiis:", // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: "Mawduucyada la dhammeeyay", // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: "Maalmaha tababarka 4-tii toddobaad ee u dambeeyay", // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: "Casharkii ugu dambeeyay, iyo taariikhda", // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: "Koodh: isla tirooyinka, si kooban, guudmar kooxeed. Magac ma jiro.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: "Taleefanka u daa inuu dhegeysto (tijaabo)", // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: "Kadib markaad hadasho, taleefanku wuxuu sheegaa haddii uu ku fahmay. Tani waxay ka dhacdaa taleefanka laftiisa. Waxba uma tagaan annaga ama dad kale.", // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: "Taleefanku marka hore wuxuu u baahan yahay Af-Holandiis. Waa soo dejin weyn: isticmaal wifi.", // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: "Soo deji Af-Holandiiska", // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: "Hadda maya", // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: "Af-Holandiisku waa imanayaa. Hadhow mar kale isku day.", // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: "Taasi ma shaqayn. Hadhow mar kale isku day, adigoo wifi isticmaalaya.", // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: "Taleefanka keligiis ayaa dhegeysta. Waxba lama diro.", // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: "Taleefanku waa dhegeysanayaa…", // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: "Waa la fahmay", // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: "Ku dhowaad: mar kale dheh {word}", // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: "Weli lama fahmin", // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: "Si kastaba sii wad", // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: "Ma rabtaa inaad si dhakhso ah u socoto?", // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: "Sharax ka yar casharrada cusub. Af-Holandiiska oo xawaare caadi ah.", // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: "Haa", // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: "Maya", // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: "Casharka xiga wax yar ayuu ka gaaban yahay.", // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: "Si dhakhso ah u baro", // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: "Shidan: sharax ka yar casharrada cusub, iyo Af-Holandiiska oo xawaare caadi ah. Demsan: sidii hore.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    feelAsk: 'Maxaad ka qabtaa Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Wanaagsan', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Caadi', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Ma wanaagsana', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Mahadsanid! Tani waxay naga caawinaysaa inaan Vloertaal hagaajinno.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: "Si dhakhso ah u baro: sharax ka yar casharrada cusub, iyo Af-Holandiiska oo xawaare caadi ah.", // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: "Wada barta", // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: "Laba qof, hal taleefan", // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: "La tababar saaxiibka shaqada, saaxiib ama macallin. Akhriska isku beddela.", // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: "Qofka 1aad waa saaxiibka shaqada. Qofka 2aad ayaa jawaabaya.", // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: "Waxba lama duubayo. Dhibco ma jiraan.", // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: "Qofka {n}", // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: "Jawaab", // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: "Dhegeyso", // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: "Xiga", // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: "Turjumaad", // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: "Si fiican! Ma is-weydaarsanaysaan doorarka oo mar kale ma samaynaysaan?", // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: "Is-weydaarsada doorarka", // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: "Dhammaaday", // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: "Tan waan aqaan: hubin gaaban", // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: "Tan horey ayaad u taqaan. Mawduucan ma calaamadinaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: "Markaas weli shahaado ma jirto. Waxaad heli doontaa casharrada kadib.", // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: "Casharradu waxay kaa caawinayaan mawduucan.", // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: "Calaamadi", // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: "hubin kadib", // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: "Si kastaba samee casharrada", // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "Isgaarsiin", // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: "Waxaan Af-Holandiis u baranayaa shaqadayda anigoo isticmaalaya Vloertaal. Waa bilaash: {link}", // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: "Vloertaal waa app bilaash ah oo lagu barto Af-Holandiiska shaqada.", // nieuw, nalezen
    briefjeHow: "Casharro gaagaaban oo taleefankaaga ku jira, iyo caawimaad luqaddaada ah. Akoon looma baahna.", // nieuw, nalezen
    briefjeOpen: "Ku fur taleefankaaga:", // nieuw, nalezen
    workTry: "Maanta shaqada ku tijaabi", // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: "Goorma:", // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: "Markaas dheh:", // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: "Saaxiibkaaga shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: "Tan tus saaxiibka shaqada ee ku hadla Af-Holandiis. Waxay sheegaysaa sida uu kaaga caawin karo tababarka.", // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: "U dir saaxiibkaaga shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Loogu talagalay la-taliyahaaga', // nieuw, nalezen (AI-correctie 28 nov 2026)
    rulesInDutch: 'Sida shaqadu halkan u socoto, Af-Holandiis fudud. Taleefanku kor ayuu u akhriyaa.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Hadda Af-Holandiis badan ayaad taqaan. Mawduuc kasta waxaad sidoo kale ka akhrin kartaa sida shaqadu halkan u socoto, Af-Holandiis fudud.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Midna: Af-Holandiis ayaan ku hadlaa', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Weedho aad ka tidhi shaqada', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Erayo weli adag', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Casharro ku saabsan sida shaqadu halkan u socoto', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: "Magacyada mawduucyada xuquuqdaada ku saabsan tus", // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: "Hadda xusuustaada ka dheh: maxay ahayd Af-Holandiis?", // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: "Erayada 2 toddobaad ama ka badan ka hor: weli waxaad taqaanay {n} ka mid ah {m}.", // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: "Ficilku wuxuu ku jiraa booska 2aad.", // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: "Dhibco", // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: "Dhammaan dhibcahaaga", // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: "Jawiga", // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: "Deggan", // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: "Ciyaar", // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: "Deggan: waxba ma dhaqaaqaan, dabaaldeg ma jiro. Ciyaar: dhibco, cod iyo dhaqdhaqaaq badan.", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Adeegga iyo ammaanka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Ka shaqaynta bannaanka", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Xannaanada carruurta", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Qashinka iyo dib-u-warshadaynta", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Warshadaha cuntada", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Ammaanka iyo ilaalinta", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Adeegyada dhismaha", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Beeraha iyo meelaha cagaaran", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: "Heer", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: "Bilow", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: "Barte", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: "Saaxiib shaqo", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: "Xirfadle", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: "Khibrad leh", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: "Khabiir", // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: "Heer cusub:", // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: "Khalad la'aan:", // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: "Hadafka maanta", // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: "Hadafka maanta waad gaartay!", // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: "Cusub sanduuqaaga qalabka:", // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: "Sanduuqayga qalabka", // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: "Cashar ku dhammee ciyaarta. Markaas waxaad helaysaa qalabkaaga ugu horreeya.", // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: "Sharax dheeraad ah", // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: "Ku saabsan talooyinkan", // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: "Khabiir weli ma hubin sharraxaaddan.", // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: "Sharraxaaddan waxay ka timid {month}. Xeerarka ugu dambeeyay, eeg Juridisch Loket ama Work in NL.", // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: "Sharraxaaddan waxay ka timid {month}. Xeerarka ugu dambeeyay, eeg justitiehuis ama werk.belgie.be.", // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: "Wax badan ka akhri Vloertaal", // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: "Tan ma ku tidhi shaqada?", // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: "Haa, waa ii suurtagashay", // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: "Weli maya", // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: "Si fiican! Waxaad shaqada ku isticmaashay {n} weedh.", other: "Si fiican! Waxaad shaqada ku isticmaashay {n} weedh." }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: "Si fiican! Waxaad shaqada ku isticmaashay weedhaadii ugu horreysay.", // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: "Waxaad ka heli kartaa Dejinta.", // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: "Lagu yidhi shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: "Weedhahan waxaad ku tidhi shaqada.", // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: "qiyaastii {n} daqiiqo", // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: "Horumarkaaga lama kaydin. Taleefankaagu ma buuxaa? Meel bannee. Ama tag Dejinta: “Kaydi horumarkaaga”.", // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: "Taleefankaagu mararka qaar wuu tirtiri karaa horumarkaaga. Sidaas darteed kaydi nuqul.", // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: "Hadda kaydi", // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: "Adiga isu dir", // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: "Faylka adiga isu dir, tusaale ahaan WhatsApp ama e-mail.", // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: "Waa dhammaatay. Faylkan si fiican u hay. Hadhow waxaad ku soo celin kartaa horumarkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: "Maxaad dhahaysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: "Tusaale", // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: "Maqal jawaabta", // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: "Ka dhegeyso shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: "Waxaa jira buuq, sida shaqada. Dhegeyso. Kadib su'aalaha ayaa imanaya.", // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: "Erayga calaamadsan hore u dhig", // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: "Xeerarka shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: "Hadda Af-Holandiis badan ayaad taqaan. Ma rabtaa inaad sidoo kale barato xeerarka shaqada? Markaas wax walba waa Af-Holandiis.", // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: "Haa, i tus", // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: "Sidee loo dhahaa?", // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: "Riix cod. Eeg sida afkaagu u sameeyo.", // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: "Xawaaraha", // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: "Erayga, cod cod", // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: "Cod", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': "Bilowga", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.safe': "Shaqo ammaan ah", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.find': "Helitaanka shaqo", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.job': "Shaqadaada", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.together': "Wada shaqaynta", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.rights': "Xuquuqdaada", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.life': "Nolosha Holland", // nieuw, nalezen // nagelezen AI 28 nov
    'theme.sector': "Qaybtaada shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    // Unit: First day at work
    'u.firstday': "Maalinta ugu horreysa ee shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hello': "Salaan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hallo': "salaan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedemorgen': "subax wanaagsan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dankjewel': "mahadsanid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ja': "haa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nee': "maya", // nieuw, nalezen // nagelezen AI 28 nov
    'w.totmorgen': "berri ayaan is aragnaa", // nieuw, nalezen // nagelezen AI 28 nov
    's.hello.1': "Salaan, waxaan ahay qof cusub.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hello.2': "Subax wanaagsan, waxaan ahay Ali.", // nieuw, nalezen // nagelezen AI 28 nov
    's.hello.3': "Mahadsanid, berri ayaan is aragnaa!", // nieuw, nalezen // nagelezen AI 28 nov
    'l.people': "Dadka shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.collega': "saaxiibka shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baas': "madaxa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leidinggevende': "madaxa (qofka shaqada maamula)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werk': "shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naam': "magaca", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nieuw': "cusub", // nieuw, nalezen // nagelezen AI 28 nov
    's.people.1': "Magacaygu waa Sara.", // nieuw, nalezen // nagelezen AI 28 nov
    's.people.2': "Yaa madaxa ah?", // nieuw, nalezen // nagelezen AI 28 nov
    's.people.3': "Waxaan ahay saaxiib shaqo oo cusub.", // nieuw, nalezen // nagelezen AI 28 nov

    // Unit: Asking for help
    'u.help': "Caawimaad weydiisasho", // nieuw, nalezen // nagelezen AI 28 nov
    'l.understand': "Ma fahmin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begrijpniet': "ma fahmin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nogeenkeer': "mar kale", // nieuw, nalezen // nagelezen AI 28 nov
    'w.langzaam': "tartiib", // nieuw, nalezen // nagelezen AI 28 nov
    'w.helpen': "caawin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waar': "xaggee", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wc': "musqusha", // nieuw, nalezen // nagelezen AI 28 nov
    's.understand.1': "Ma ku celin kartaa taas?", // nieuw, nalezen // nagelezen AI 28 nov
    's.understand.2': "Ma u hadli kartaa si ka tartiib badan?", // nieuw, nalezen // nagelezen AI 28 nov
    's.understand.3': "Xaggee ayay musqushu ku taal?", // nieuw, nalezen // nagelezen AI 28 nov

    // Unit: Safety first
    'u.safety': "Ammaanku waa koowaad", // nieuw, nalezen // nagelezen AI 22 nov
    'u.emergency': "Marka wax khaldamaan", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': "Qalabka badbaadada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.helm': "koofiyadda adag", // nieuw, nalezen // nagelezen AI 22 nov
    'w.handschoenen': "galoofyada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.veiligheidsschoenen': "kabaha badbaadada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.hesje': "jaakadda badbaadada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bril': "muraayadaha badbaadada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.dragen': "xirasho (dhar ama qalab)", // nieuw, nalezen // nagelezen AI 22 nov
    's.gear.1': "Had iyo jeer xiro koofiyaddaada adag.", // nieuw, nalezen // nagelezen AI 22 nov
    's.gear.2': "Xaggee ayay galoofyadu yaalliin?", // nieuw, nalezen // nagelezen AI 22 nov
    's.gear.3': "Waxaan xiranahay jaakaddayda badbaadada.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.danger': "Khatar!", // nieuw, nalezen // nagelezen AI 22 nov
    'w.pasop': "iska jir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.stop': "joogso", // nieuw, nalezen // nagelezen AI 22 nov
    'w.help': "caawimaad", // nieuw, nalezen // nagelezen AI 22 nov
    'w.brand': "dabka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.nooduitgang': "albaabka degdegga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ongeluk': "shilka", // nieuw, nalezen // nagelezen AI 22 nov
    's.danger.1': "Iska jir, dhulku waa qoyan yahay!", // nieuw, nalezen // nagelezen AI 22 nov
    's.danger.2': "Xaggee ayuu albaabka degdeggu ku yaal?", // nieuw, nalezen // nagelezen AI 22 nov
    's.danger.3': "Shil ayaa dhacay!", // nieuw, nalezen // nagelezen AI 22 nov
    'l.alarm': "Alaarmiga dabka iyo ka bixidda dhismaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': "alaarmiga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': "ka bixin dhismaha (qof walba wuu ka baxaa dhismaha)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': "jidka baxsashada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': "jaranjarada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': "goobta isu imaatinka (halka qof walba dibadda ku kulmo)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': "dab-demiska", // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': "Xaggee ayuu dab-demisku ku yaal?", // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': "Waa inaan ka bixinnaa dhismaha.", // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': "Qaado jaranjarada, ha qaadan wiishka.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': "Soo sheeg shil", // nieuw, nalezen // nagelezen AI 22 nov
    'w.gewond': "dhaawacan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bloeden': "dhiig ka bixid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ehbodoos': "sanduuqa gargaarka degdegga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bhver': "caawiyaha degdegga ee shirkadda (gargaarka koowaad, dabka, ka bixidda dhismaha)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekenhuis': "isbitaalka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.gebeuren': "dhicid", // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.1': "Saaxiibkayga shaqada ayaa dhacay.", // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.2': "Waan is gooyay.", // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.3': "Waxaan rabaa inaan soo sheego shil.", // nieuw, nalezen // nagelezen AI 22 nov

    // Unit: In the warehouse
    'u.warehouse': "Bakhaarka", // nieuw, nalezen // nagelezen AI 28 nov
    'l.things': "Alaabta bakhaarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doos': "kartoonka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pallet': "baaleetka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heftruck': "forklift-ka (gaariga alaabta kor u qaada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kar': "gaariga gacanta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stelling': "khaanadaha alaabta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scanner': "iskaanarka", // nieuw, nalezen // nagelezen AI 28 nov
    's.things.1': "Kartoonka saar baaleetka.", // nieuw, nalezen // nagelezen AI 28 nov
    's.things.2': "Xaggee ayuu iskaanarku yaal?", // nieuw, nalezen // nagelezen AI 28 nov
    's.things.3': "Forklift-ku wuu imanayaa.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'l.directions': "Jihooyinka iyo falalka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.links': "bidix", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechts': "midig", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boven': "kor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beneden': "hoos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tillen': "kor u qaadid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pakken': "qaadasho", // nieuw, nalezen // nagelezen AI 28 nov
    's.directions.1': "Kartoonku wuxuu ku yaal dhinaca bidix.", // nieuw, nalezen // nagelezen AI 28 nov
    's.directions.2': "Lugahaaga ku qaad.", // nieuw, nalezen // nagelezen AI 28 nov
    's.directions.3': "U leexo dhinaca midig.", // nieuw, nalezen // nagelezen AI 28 nov

    // Unit: Time and schedule
    'u.time': "Waqtiga iyo jadwalka", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shift': "Wareeggayga shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dienst': "wareegga shaqada (shift)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pauze': "nasashada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beginnen': "bilaabid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klaar': "dhammaaday", // nieuw, nalezen // nagelezen AI 28 nov
    'w.telaat': "daahay", // nieuw, nalezen // nagelezen AI 28 nov
    'w.morgen': "berri", // nieuw, nalezen // nagelezen AI 28 nov
    's.shift.1': "Wareeggayga shaqadu wuxuu bilaabmaa saacadda toddobada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.shift.2': "Goorma ayaa nasashadu tahay?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shift.3': "Iga raalli ahaw, waan soo daahay.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sick': "Sheeg inaad xanuunsan tahay", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ziek': "xanuunsan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bellen': "wacid (taleefan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dokter': "dhakhtarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijn': "xanuunka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vandaag': "maanta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beter': "ka fiican", // nieuw, nalezen // nagelezen AI 28 nov
    's.sick.1': "Maanta waan xanuunsanahay.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sick.2': "Dhabarka ayaa i xanuunaya.", // nieuw, nalezen // nagelezen AI 28 nov
    's.sick.3': "Dhakhtarka ayaan wacayaa.", // nieuw, nalezen // nagelezen AI 28 nov

    'c.hello.q': "Fiid wanaagsan!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hello.a': "Berri ayaan is aragnaa!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.people.q': "Magacaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.people.a': "Magacaygu waa Sara.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.arrive': "Maalinta koowaad: hel jidkaaga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ingang': "albaabka laga soo galo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.receptie': "qaabilaadda (miiska soo dhaweynta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kantine': "makhaayadda shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleedkamer': "qolka dharka lagu beddesho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buddy': "buddy-ga (saaxiib shaqo oo ku caawiya bilowga)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vinden': "helid", // nieuw, nalezen // nagelezen AI 28 nov
    's.arrive.1': "Yaan u tagaa marka aan imaado?", // nieuw, nalezen // nagelezen AI 28 nov
    's.arrive.2': "Ma heli karo qolka dharka lagu beddesho.", // nieuw, nalezen // nagelezen AI 28 nov
    's.arrive.3': "Yaa maanta buddy-gayga ah?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.arrive.q': "Subax wanaagsan, maxaad u timid?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.arrive.a': "Waxaan ahay qof cusub. Maanta ayaan bilaabayaa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.understand.q': "Ma fahantay?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.understand.a': "Maya, mar kale fadlan.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.gear.q': "Koofiyaddaada adag ma haysataa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.a': "Haa, waan xiranahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.danger.q': "Shil ma dhacay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.danger.a': "Haa, wac 112!", // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.q': "Qof walba dibadda ma joogaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': "Maya, saaxiibkayga shaqada weli halkan ma joogo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': "Maxaa dhacay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a': "Wuu dhacay. Dhiig ayaa ka imanaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.notyet': "Tan weli ma baran", // nieuw, nalezen // nagelezen AI 22 nov
    'w.nogniet': "weli maya", // nieuw, nalezen // nagelezen AI 22 nov
    'w.mogen': "loo oggol yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'w.proberen': "isku dayid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.voordoen': "tusid (adigoo marka hore samaynaya)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.gevaarlijk': "khatar ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitleg': "sharraxaadda", // nieuw, nalezen // nagelezen AI 22 nov
    's.notyet.1': "Tan weli ma baran.", // nieuw, nalezen // nagelezen AI 22 nov
    's.notyet.2': "Weli sharraxaad lama i siin.", // nieuw, nalezen // nagelezen AI 22 nov
    's.notyet.3': "Ma la ii oggol yahay inaan tan hadda keligay sameeyo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.q': "Isku day uun, waa fudud tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.a': "Marka hore ma i tusi kartaa sida loo sameeyo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.things.q': "Xaggee kartoonku aadayaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.things.a': "Baaleetka dushiisa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.directions.q': "Bidix mise midig?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.directions.a': "Midig, khaanadaha agtooda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shift.q': "Goorma ayuu wareeggaaga shaqadu bilaabmayaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shift.a': "Berri saacadda toddobada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.q': "Ma xanuunsan tahay?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.a': "Haa, maanta guriga ayaan joogayaa.", // nieuw, nalezen // nagelezen AI 28 nov
    // Emergency phrases (phrasebook only)
    'p.call112': "Wac 112!", // nieuw, nalezen // nagelezen AI 28 nov
    'p.hurt': "Waan dhaawacmay.", // nieuw, nalezen // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Ururinta dalabyada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "shayga (hal alaab)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "booska (hal meel oo khaanadaha ka mid ah)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "istiikarka, calaamadda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "ururin, soo qaadid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "maqnaan (halkaas ma yaal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "goobta (koodhka meesha, sida A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Waxaan ururinayaa shayada dalabkan.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Shaygani waa maqan yahay. Boosku waa madhan yahay.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Istiikarka waa in kartoonka lagu dhejiyaa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Waa goobtee?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Marinka saddex, booska laba iyo toban.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Raridda iyo dejinta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "gaariga xamuulka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "darawalka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "dejin (alaabta ka soo saar gaariga xamuulka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "gaariga baaleetka (gaari gacan oo baaleet kor u qaada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "balaastigga duubista (balaastig khafiif ah oo baaleetka lagu duubo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "warqadda xamuulka (warqadda sheegta waxa gaariga xamuulka ku jira)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Gaariga xamuulku wuxuu taagan yahay albaabka afar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Marka hore baaleetyadan ayaan dejinaynaa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Darawalku wuxuu sugayaa warqadda xamuulka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Baaleetkani ma diyaar baa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Maya, weli waa in balaastig lagu duubaa.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Sideen tan u sameeyaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "sidee", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "sidan, habkan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "adag", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "fudud", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "ogaan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "waa sax", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Sideen tan u sameeyaa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Tani way igu adag tahay.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Ma si fiican ayaan sidan u samaynayaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Ma taqaan sida tan loo sameeyo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Maya, taas weli ma aqaan.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Wax ma ku weydiin karaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "weydiin", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "yaa", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "wax yar, in yar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "waqtiga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "dhibid (qof mashquul ah oo la dhibo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "shakiyid (ma hubtid)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Wax ma ku weydiin karaa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Waan ka xumahay inaan ku dhibo.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Yaa i caawin kara?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Su'aal ma qabtaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Haa. Wax yar oo waqti ah ma haysaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Waa xaggee?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "halkan", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "halkaas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "lumay (ma heli kartid)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "albaabka laga baxo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "tilmaamid (muuji meesha uu ku yaal)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "agtiisa, dhinaciisa", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "Jidkii ayaa iga lumay.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Xaggee ayuu ku yaal albaabka laga baxo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Musqushu halkaas ayay ku taal, makhaayadda shaqada agteeda.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Ma heli kartaa?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Maya. Ma ii tilmaami kartaa?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Nabarro yaryar iyo gubasho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "nabarka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "faashadda", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "qaboojin (biyo qabow)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "goosta (nabar yar oo mindi ama wax af leh ka yimid)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "suuxid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "qubeyska indhaha (biyo indhaha lagu dhaqo)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Gubashada biyo ku qabooji.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "Waa goos yar. Nabarka cadaadi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Xaggee ayuu ku yaal qubeyska indhaha?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Saaxiibkayga shaqada wuu suuxi gaadhay.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Wax yar ha jiifo. Caawimaad ayaan keenayaa.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'l.callhelp': "Wicidda 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "adeegyada degdegga (ambalaaska, dab-demiska, booliska)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "magaca waddada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "lambarka guriga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "wax ka jawaabi kara (qofku wuu jawaabaa marka aad la hadasho)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "sugid iyo soo dhaweyn (qof albaabka)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "khadka ku jirid (taleefanka ma dhigto)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "112 ayaan wacayaa. Ambalaas ayaan u baahanahay.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Waa maxay magaca waddada iyo lambarka guriga?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Ambalaaska waxaan ku sugayaa albaabka laga soo galo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Ma ka jawaabayaa marka aad la hadasho?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Maya. Ma jawaabayo.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Jadwalkaaga shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "jadwalka toddobaadka (cidda shaqaynaysa iyo goorta toddobaadkan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "app-ka jadwalka (wareegyadaada shaqada taleefankaaga)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "diyaar (markaas waad shaqayn kartaa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "isbeddelka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "qof bedelid (u shaqayn qof maqan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "maalinta fasaxa", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Jadwalka cusub wuxuu ku jiraa app-ka.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Sabtida ma diyaar baad tahay?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Berri ma bedeli kartaa Sara?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Isbeddel ayaa ku jira jadwalkaaga.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Hagaag. Maalintee ayay tahay inaan shaqeeyo?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Saacadaha iyo nasashada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "nasashada qadada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "waqtiga nasashada (waqti fasax ah oo u dhexeeya laba wareeg shaqo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "maalinta shaqada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "liiska saacadaha (meesha aad ku qorto saacadaha aad shaqaysay)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "goor hore bixid", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "isku xigta (mid kale kadib)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Saacadahayga waxaan ku qoraa liiska saacadaha.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Maanta ma bixi karaa saacad ka hor?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Lix maalmood oo isku xigta ayaan shaqeeyay.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Goorma ayay tahay nasashadaada qadada?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "Saacadda laba iyo tobanka, nus saac.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Toddobaadyadaada ugu horreeya", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "wareegga tusidda (qof ayaa ku tusa dhismaha oo dhan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "hagaha (saaxiibka shaqo ee kaa caawiya toddobaadyadaada ugu horreeya)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "buugga yar ee xusuus-qorka", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "la socod (inaad raacdo saaxiib shaqo oo aad daawato sida uu u shaqeeyo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "xasuusasho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "kaligaa (caawimaad la'aan)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Mar kale ma i tusi kartaa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Maanta waxaan la socdaa Sara.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Waxaan ku qorayaa buuggayga xusuus-qorka.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Ma xasuusataa wax walba oo wareegga tusidda ah?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Ku dhowaad wax walba. Makhaayadda shaqadu xaggee bay ahayd mar kale?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Ururinta dalabaadka iyo reachtruck-ga", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "ururiyaha dalabaadka (shaqaalaha ururiya dalabaadka; sidoo kale gaariga yar ee aad dul istaagto si aad wax uga soo qaadato meel sare)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "reachtruck-ga (forklift loogu talagalay khaanadaha aad u dhaadheer; fargeetadiisu hore ayay u fidaan)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "liiska ururinta (liiska alaabta ay tahay inaad ururiso)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "iskaan gareyn", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "qofka lugaynaya (qof cagaha ku socda)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "diirsasho (meel diirran, kadib shaqo qabow)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Shay kasta oo liiska ururinta ku jira waan iskaan gareeyaa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Dadka lugaynaya waxay ku socdaan jidka lugta.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Qaboojiyaha barafka waxaan ku xirtaa dharka qabowga.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Wax yar ma kaxayn kartaa reachtruck-ga?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Maya, layguma oggola. Tababar uma lihi.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
