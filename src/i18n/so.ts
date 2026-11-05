import type { HelpLanguageSource } from './types';

/** Somali (5 November 2026, the owner's request): simple standard Somali (Af-Soomaali), "adiga". */
const lang: HelpLanguageSource = {
  code: 'so',
  name: 'Somali',
  nativeName: 'Soomaali',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: "Muuqaalka", // nieuw, nalezen
    themeAuto: "Si toos ah", // nieuw, nalezen
    themeSand: "Ciid", // nieuw, nalezen
    themeHarbour: "Deked", // nieuw, nalezen
    themeWorkwear: "Jaakadda shaqada", // nieuw, nalezen
    colourTitle: "Midabkee ayaad rabtaa?", // nieuw, nalezen
    colourHint: "Hadhow waad ku beddeli kartaa Dejinta.", // nieuw, nalezen
    themeDark: "Mugdi", // nieuw, nalezen
    voice: "Codka Af-Holandiiska", // nieuw, nalezen
    voiceAuto: "Si toos ah", // nieuw, nalezen
    voiceHint: "Riix 🔊 si aad u dhegeysato. Codadka Vloertaal waa isku mid taleefan kasta; kuwa kale waxay ka yimaadaan taleefankaaga.", // nieuw, nalezen
    voiceNone: "Qalabkani ma laha cod Af-Holandiis ah. Waxaad mid ku dari kartaa dejinta taleefankaaga (Text-to-speech).", // nieuw, nalezen
    appTagline: "Af-Holandiis shaqada loogu talagalay", // nieuw, nalezen
    chooseLanguage: "Dooro luqadda caawinta", // nieuw, nalezen
    englishOnly: "Ingiriisi oo keliya", // nieuw, nalezen
    beta: "Turjumaadda weli lama hubin", // nieuw, nalezen
    dayStreak: { one: "maalin oo isku xigta", other: "maalmood oo isku xiga" }, // nieuw, nalezen
    streakStarted: "Waxaad bilowday maalmo isku xiga! Berri soo noqo.", // nieuw, nalezen
    streakGrew: { one: "{n} maalin oo isku xigta! Sii wad.", other: "{n} maalmood oo isku xiga! Sii wad." }, // nieuw, nalezen
    start: "Bilow", // nieuw, nalezen
    practice: "Mar kale ku celceli", // nieuw, nalezen
    locked: "Marka hore dhammee casharka ka horreeya", // nieuw, nalezen
    newWord: "Eray cusub", // nieuw, nalezen
    tapToHear: "Riix si aad u maqasho", // nieuw, nalezen
    sayItAloud: "Kor u dheh.", // nieuw, nalezen
    sayItQuietly: "Si tartiib ah u dheh, ama maskaxdaada ku dheh.", // nieuw, nalezen
    whatDoesThisMean: "Maxay tani ka dhigan tahay?", // nieuw, nalezen
    snapQuestion: "Ma fahantay?", // nieuw, nalezen
    snapYes: "Haa, waa hagaag.", // nieuw, nalezen
    snapGoodAsk: "Waa fiican tahay inaad weydiiso!", // nieuw, nalezen
    snapRight: "Si fiican ayaad u fahantay!", // nieuw, nalezen
    snapAskBetter: "Ma aragtay? Weydiintu way fiicnaan lahayd.", // nieuw, nalezen
    whichOneIs: "Midkee waa “{word}”?", // nieuw, nalezen
    mixLesson: "Dib-u-eegis isku dhafan", // nieuw, nalezen
    whatDoYouHear: "Maxaad maqlaysaa?", // nieuw, nalezen
    buildSentence: "Weedhan Af-Holandiis ku samee", // nieuw, nalezen
    typeWhatYouHear: "Qor waxa aad maqlayso", // nieuw, nalezen
    check: "Hubi", // nieuw, nalezen
    continue: "Sii wad", // nieuw, nalezen
    correct: "Aad baad u fiican tahay!", // nieuw, nalezen
    almost: "Waa sax, laakiin fiiri higgaadda", // nieuw, nalezen
    incorrect: "Weli sax ma aha", // nieuw, nalezen
    correctAnswer: "Jawaabta saxda ah", // nieuw, nalezen
    rightAnswerIs: "Jawaabta saxda ahi waa:", // nieuw, nalezen
    bestAnswerIs: "Jawaabta ugu fiican waa:", // nieuw, nalezen
    yourAnswer: "Jawaabtaada", // nieuw, nalezen
    inARow: "{n} isku xiga", // nieuw, nalezen
    cantListen: "Hadda ma dhegeysan karo", // nieuw, nalezen
    learnWriting: "Waxaan sidoo kale rabaa inaan barto qoraalka", // nieuw, nalezen
    learnWritingHint: "Shidan: erayada aad maqasho ku qor xarfo. Dansan: dooro erayga qoran ee aad maqasho.", // nieuw, nalezen
    tagRepeat: "Mar kale", // nieuw, nalezen
    readAloud: "Kor u akhri", // nieuw, nalezen
    lessonComplete: "Casharka waad dhammaysay!", // nieuw, nalezen
    phrasebook: "Weedhaha degdegga", // nieuw, nalezen
    phrasebookHint: "Riix weedh si aad u maqasho. Shaashadda waxaad sidoo kale tusi kartaa saaxiibka shaqada.", // nieuw, nalezen
    whoToCall: "Dhibaato shaqada? Yaa ku caawin kara", // nieuw, nalezen
    who112: "Xaalad degdeg ah: nolol khatar ku jirta, dab ama dembi hadda dhacaya.", // nieuw, nalezen
    whoLegal: "Talo bilaash ah oo ku saabsan qandaraaskaaga, mushaharkaaga ama shaqo ka eryid.", // nieuw, nalezen
    whoInspection: "Soo sheeg shaqo aan ammaan ahayn, mushahar aad u yar ama ka faa'iidaysi. Waxaad u samayn kartaa adigoon magacaaga sheegin.", // nieuw, nalezen
    whoFairwork: "Shaqada waa lagaa faa'iidaysanayaa, ama sidaas ayaad u malaynaysaa.", // nieuw, nalezen
    who113: "Waxaad ka fikiraysaa inaad naftaada iska qaaddo, ama qof ayaad ka welwelsan tahay. Bilaash, habeen iyo maalin.", // nieuw, nalezen
    whoVeiligThuis: "Rabshad ama xadgudub guriga, adiga ama qof kale. Bilaash, xitaa adigoon magacaaga bixin.", // nieuw, nalezen
    settings: "Dejinta", // nieuw, nalezen
    helpLanguage: "Luqadda caawinta", // nieuw, nalezen
    resetProgress: "Tirtir horumarkayga", // nieuw, nalezen
    resetConfirm: "Ma tirtiraysaa dhammaan horumarka qalabkan ku jira?", // nieuw, nalezen
    audioUnavailable: "Codku kuma shaqeeyo qalabkan.", // nieuw, nalezen
    slow: "Tartiib", // nieuw, nalezen
    completeChat: "Dhammaystir wadahadalka", // nieuw, nalezen
    meaning: "Macnaha", // nieuw, nalezen
    navRoute: "Casharrada", // nieuw, nalezen
    navWords: "Caawimaad", // nieuw, nalezen
    rightFirstTime: "Sax markii ugu horreysay", // nieuw, nalezen
    newWords: "Erayo cusub", // nieuw, nalezen
    wordsLearnedN: { one: "Waxaad baratay {n} eray", other: "Waxaad baratay {n} eray" }, // nieuw, nalezen
    practiseMistakes: { one: "Ku celceli khaladaadka · {n} ayaa haray", other: "Ku celceli khaladaadka · {n} ayaa haray" }, // nieuw, nalezen
    quitHint: "Jawaabahaaga casharkan lama kaydinayo.", // nieuw, nalezen
    keepGoing: "Sii wad", // nieuw, nalezen
    stopLesson: "Jooji casharka", // nieuw, nalezen
    fullVersion: "Nooca buuxa", // nieuw, nalezen
    unlockFull: "Fur nooca buuxa", // nieuw, nalezen
    unlockHint: "Koodhka ayaa furaya dhammaan casharrada. Koodhku waa bilaash. Weli koodh ma haysatid? Weydii macallinkaaga ama la-taliyahaaga, ama noo soo dir e-mail:", // nieuw, nalezen
    codeNotFull: "Koodhkani ma furo nooca buuxa. Weydiiso koodh cusub.", // nieuw, nalezen
    password: "Koodh", // nieuw, nalezen
    enterPassword: "Geli koodhka", // nieuw, nalezen
    wrongPassword: "Koodhkaasi sax ma aha. Mar kale isku day.", // nieuw, nalezen
    unlock: "Fur", // nieuw, nalezen
    sector: "Shaqadaada", // nieuw, nalezen
    chooseSector: "Xaggee ka shaqaysaa?", // nieuw, nalezen
    countryTitle: "Dalkee ayaad ka shaqaysaa?", // nieuw, nalezen
    countryHint: "Waxaad helaysaa xeerarka shaqada ee dalkaas.", // nieuw, nalezen
    countryNl: "Holland", // nieuw, nalezen
    countryBe: "Beljiyam (Flanders)", // nieuw, nalezen
    tipsNote: "Talooyinkan waxay ku saabsan yihiin shaqada Holland. Macluumaad guud, maaha talo sharci.", // nieuw, nalezen
    sectorHint: "Casharrada shaqadaada ayaa goor hore imanaya. Hadhow waad ku beddeli kartaa Dejinta.", // nieuw, nalezen
    otherSectors: "Qaybaha kale", // nieuw, nalezen
    reviewToday: "Maanta ku celi", // nieuw, nalezen
    reviewTodayN: { one: "Erayada aad mar kale ku celcelinayso: {n} · dhowr daqiiqo", other: "Erayada aad mar kale ku celcelinayso: {n} · dhowr daqiiqo" }, // nieuw, nalezen
    notSureYet: "Weli ma hubo", // nieuw, nalezen
    sectorLogistics: "Saadka iyo bakhaarka", // nieuw, nalezen
    sectorConstruction: "Dhismaha", // nieuw, nalezen
    sectorProduction: "Wax soo saarka", // nieuw, nalezen
    sectorCare: "Daryeelka", // nieuw, nalezen
    sectorHospitality: "Hudheelada iyo makhaayadaha", // nieuw, nalezen
    sectorRetail: "Dukaanka iyo suuqa weyn", // nieuw, nalezen
    sectorCleaning: "Nadaafadda", // nieuw, nalezen
    sectorHorticulture: "Beerashada", // nieuw, nalezen
    sectorTechnical: "Shaqo farsamo", // nieuw, nalezen
    sectorGarage: "Dayactirka baabuurta", // nieuw, nalezen
    sound: "Codka", // nieuw, nalezen
    soundOn: "Cod leh", // nieuw, nalezen
    withoutSound: "Cod la'aan", // nieuw, nalezen
    quietHint: "Cod la'aan, casharradu ma laha su'aalo dhegeysi ah, waxna iskood uma shidmaan. Riix 🔊 si aad eray u maqasho, tusaale ahaan adigoo sameecado xiran.", // nieuw, nalezen
    soundOffToast: "Cod la'aan. Codka waxaad ka shidi kartaa Dejinta.", // nieuw, nalezen
    noInternetSound: "Internet ma jiro: codku hadda ma shaqaynayo.", // nieuw, nalezen
    stillToDo: "Waxa maanta haray", // nieuw, nalezen
    streakStopped: { one: "Maalmahaagii isku xigay waxay istaageen {n} maalin. Maanta mar kale bilow.", other: "Maalmahaagii isku xigay waxay istaageen {n} maalmood. Maanta mar kale bilow." }, // nieuw, nalezen
    recordN: { one: "Kaagii ugu fiicnaa: {n} maalin", other: "Kaagii ugu fiicnaa: {n} maalmood" }, // nieuw, nalezen
    workWeek: "Toddobaadkaaga shaqada", // nieuw, nalezen
    freeDaysN: { one: "Maalin fasax ah: {n}. Haddii aad hal maalin seegto, maalmahaaga isku xiga way sii socdaan.", other: "Maalmo fasax ah: {n}. Haddii aad hal maalin seegto, maalmahaaga isku xiga way sii socdaan." }, // nieuw, nalezen
    restDay: "Maalin fasax", // nieuw, nalezen
    tier3: "3 maalmood oo isku xiga", // nieuw, nalezen
    tier7: "1 toddobaad oo isku xiga", // nieuw, nalezen
    tier14: "2 toddobaad oo isku xiga", // nieuw, nalezen
    tier30: "1 bil oo isku xigta", // nieuw, nalezen
    reviewDone: "Maanta waad dhammaysay", // nieuw, nalezen
    tomorrowN: { one: "Berri: {n} eray", other: "Berri: {n} eray" }, // nieuw, nalezen
    firstWordsTomorrow: "Berri erayadaadii ugu horreeyay ayaa soo noqonaya", // nieuw, nalezen
    extraRound: "Wareeg dheeraad ah", // nieuw, nalezen
    reviewFirstHint: "Marka hore dib u eeg. Markaas wax badan ayaad xusuusan doontaa.", // nieuw, nalezen
    wordsStrongerN: { one: "{n} eray ayaa xoogaystay", other: "{n} eray ayaa xoogaystay" }, // nieuw, nalezen
    noMistakes: "Khalad ma jiro", // nieuw, nalezen
    nextUp: "Xiga", // nieuw, nalezen
    installTitle: "Vloertaal dhig shaashadda hore ee taleefankaaga", // nieuw, nalezen
    installHint: "Markaas wuxuu u furmaa sida app, xitaa internet la'aan.", // nieuw, nalezen
    installAdd: "Ku dar shaashadda hore", // nieuw, nalezen
    iosStep1: "Riix “Share” (La wadaag)", // nieuw, nalezen
    iosStep2: "Riix “Add to Home Screen” (Ku dar shaashadda hore)", // nieuw, nalezen
    iosStep3: "Waa dhammaatay!", // nieuw, nalezen
    backupTitle: "Kaydi horumarkaaga", // nieuw, nalezen
    backupHint: "Horumarkaagu wuxuu ku jiraa taleefankan oo keliya. U kaydi fayl ahaan, tusaale ahaan taleefan cusub.", // nieuw, nalezen
    backupSave: "Soo deji", // nieuw, nalezen
    backupLoad: "Dib u celi", // nieuw, nalezen
    backupBad: "Kani maaha fayl Vloertaal.", // nieuw, nalezen
    backupAsk: "Faylkan ma ku daraysaa horumarkaaga, mise horumarkaaga ayaad ku beddelaysaa?", // nieuw, nalezen
    backupMerge: "Isku dar", // nieuw, nalezen
    backupReplace: "Beddel", // nieuw, nalezen
    backupBack: "Horumarkaagii waa soo noqday.", // nieuw, nalezen
    backupNothingNew: "Wax cusub ma jiraan: kani horey ayuu taleefankaaga ugu jiray.", // nieuw, nalezen
    cancel: "Ka noqo", // nieuw, nalezen
    remindTitle: "I xusuusi maalin kasta", // nieuw, nalezen
    remindEvent: "Waa waqtigii Af-Holandiiskaaga (10 daqiiqo)", // nieuw, nalezen
    remindHint: "Kalandarka taleefankaaga ayaa ku xusuusinaya. Waxba nalooma soo diro.", // nieuw, nalezen
    remindBefore: "Shaqada ka hor", // nieuw, nalezen
    remindAfter: "Shaqada ka dib", // nieuw, nalezen
    remindOwn: "Waqti kale", // nieuw, nalezen
    remindAdd: "Ku dar kalandarkayga", // nieuw, nalezen
    remindAdded: "Fur faylka si aad ugu darto kalandarkaaga.", // nieuw, nalezen
    remindAddedAsk: "Ma ku dartay? Markaas waxaad ku arki doontaa kalandarkaaga.", // nieuw, nalezen
    navAbout: "Ku saabsan", // nieuw, nalezen
    tagMeaning: "Macnaha", // nieuw, nalezen
    tagPick: "Dooro", // nieuw, nalezen
    tagListen: "Dhegeyso", // nieuw, nalezen
    tagType: "Qor", // nieuw, nalezen
    tagMatch: "Lammaane", // nieuw, nalezen
    tagBuild: "Weedh", // nieuw, nalezen
    tagChat: "Wadahadal", // nieuw, nalezen
    tagSituation: "Xaalad", // nieuw, nalezen
    tagTip: "Talo", // nieuw, nalezen
    more: "In badan", // nieuw, nalezen
    less: "In yar", // nieuw, nalezen
    daysUnit: { one: "maalin", other: "maalmood" }, // nieuw, nalezen
    wordsUnit: { one: "eray", other: "erayo" }, // nieuw, nalezen
    countTitle: "Tiri magac la'aan", // nieuw, nalezen
    countHint: "App-ku wuxuu tiriyaa inta jeer ee casharrada la sameeyo, iyo qiyaas ahaan inta ay qaataan. Iyo haddii app-ku meel khalad ku leeyahay. Magac ma jiro, akoon ma jiro, raadraac ma jiro.", // nieuw, nalezen
    certificate: "Shahaado", // nieuw, nalezen
    myCertificates: "Shahaadooyinkayga", // nieuw, nalezen
    certsEmpty: "Dhammee dhammaan casharrada hal mawduuc. Markaas waxaad helaysaa shahaado.", // nieuw, nalezen
    certEarned: "Shahaado ayaad heshay!", // nieuw, nalezen
    certEarnedHint: "Waxaad dhammaysay dhammaan casharrada mawduucan.", // nieuw, nalezen
    certView: "Eeg", // nieuw, nalezen
    certLater: "Hadhow", // nieuw, nalezen
    certPrint: "Daabac ama u kaydi PDF ahaan", // nieuw, nalezen
    certSaved: "Sawirka waa la kaydiyay.", // nieuw, nalezen
    certNameHint: "Magacaagu wuxuu ku jirayaa taleefankan oo keliya. Waad iska dhaafi kartaa.", // nieuw, nalezen
    certChangeName: "Beddel magaca", // nieuw, nalezen
    certPractice: "Shahaado tababar, maaha shahaado rasmi ah", // nieuw, nalezen
    resumeLesson: "Sii wad casharka", // nieuw, nalezen
    restartLesson: "Dib u bilow", // nieuw, nalezen
    quitKept: "Horumarkaaga waa la kaydiyay. Hadhow waad sii wadi kartaa.", // nieuw, nalezen
    bestAnswer: "Jawaabta ugu fiican", // nieuw, nalezen
    inReview: "waa la eegayaa", // nieuw, nalezen
    today: "Maanta", // nieuw, nalezen
    playAgain: "Mar kale dhegeyso", // nieuw, nalezen
    daysUnitOne: "maalin", // nieuw, nalezen
    wordsUnitOne: "eray", // nieuw, nalezen
    wordsLearnedOne: "Waxaad baratay {n} eray", // nieuw, nalezen
    tomorrowOne: "Berri: {n} eray", // nieuw, nalezen
    wordsStrongerOne: "{n} eray ayaa xoogaystay", // nieuw, nalezen
    recordOne: "Kaagii ugu fiicnaa: {n} maalin", // nieuw, nalezen
    streakStoppedOne: "Maalmahaagii isku xigay waxay istaageen {n} maalin. Maanta mar kale bilow.", // nieuw, nalezen
    letterTiles: "Xarfo", // nieuw, nalezen
    useKeyboard: "Kiiboodh", // nieuw, nalezen
    skippedN: { one: "{n} waa la booday, lama tirin", other: "{n} waa la booday, lama tirin" }, // nieuw, nalezen
    stampLater: "Hadhow ayuu soo noqonayaa", // nieuw, nalezen
    stampDone: "Dhammaaday", // nieuw, nalezen
    chooseNext: "Dooro mawduucaaga xiga", // nieuw, nalezen
    recommended: "Lagu taliyay", // nieuw, nalezen
    allTopics: "Dhammaan mawduucyada", // nieuw, nalezen
    topicsOrder: "Tus mawduucyada", // nieuw, nalezen
    privacyLink: "Akhri bayaanka asturnaanta (Af-Holandiis)", // nieuw, nalezen
    routeTitle: "Maxaad rabtaa inaad barato?", // nieuw, nalezen
    routeLearn: "Baro Af-Holandiiska shaqada – iyo sida shaqadu halkan u socoto", // nieuw, nalezen
    routeRules: "Horey ayaan ugu hadlaa Af-Holandiis: xeerarka shaqada oo keliya", // nieuw, nalezen
    routeLearnShort: "Baro Af-Holandiis", // nieuw, nalezen
    byTheme: "Qaybo ahaan", // nieuw, nalezen
    inOrder: "Siday isugu xigaan", // nieuw, nalezen
    searchTopics: "Raadi mawduuc", // nieuw, nalezen
    searchNone: "Mawduuc leh eraygan ma jiro.", // nieuw, nalezen
    lessonsUnit: { one: "cashar", other: "casharro" }, // nieuw, nalezen
    lessonsUnitOne: "cashar", // nieuw, nalezen
    topicsUnit: { one: "mawduuc", other: "mawduucyo" }, // nieuw, nalezen
    topicsUnitOne: "mawduuc", // nieuw, nalezen
    allTopicsDone: "Waxaad dhammaysay mawduuc kasta. Aad baad u fiican tahay!", // nieuw, nalezen
    // Speaking practice
    tagSpeak: "Hadal", // nieuw, nalezen
    speakPrompt: "Dhegeyso, kadibna dheh", // nieuw, nalezen
    tapToSpeak: "Riix oo hadal", // nieuw, nalezen
    stopRecording: "Jooji", // nieuw, nalezen
    micPrivacy: "Qof kale kuma maqlo. Waxba lama diro.", // nieuw, nalezen
    micUnavailable: "Makarafoonku waa dansan yahay. Hadda kor u dheh, kadibna sii wad.", // nieuw, nalezen
    cantSpeak: "Hadda ma hadli karo", // nieuw, nalezen
    soundsSame: "Waa isku cod", // nieuw, nalezen
    sayAgain: "Mar kale dheh", // nieuw, nalezen
    hearMine: "Is maqal", // nieuw, nalezen
    thenNow: "Markaas iyo hadda", // nieuw, nalezen
    thenNowFirst: "Isku daygaagii ugu horreeyay: {date}", // nieuw, nalezen
    sayTogether: "Wada jir u dheh", // nieuw, nalezen
    chorusHint: "Ku dheh isla waqtiga codka. Waxba lama duubayo.", // nieuw, nalezen
    chorusAlone: "Hadda adiga keligaa", // nieuw, nalezen
    speakBrave: "Khaladaadku waa caadi. Dadka Holandiiska ah way ku fahmayaan, xitaa haddii aad khaladaad samayso.", // nieuw, nalezen
    speakMe: "Aniga", // nieuw, nalezen
    speakingPractice: "Tababarka hadalka", // nieuw, nalezen
    speakingHint: "Erayo kor u dheh oo isbarbar dhig. Qof kale kuma maqlo: waxba lama diro. Duubistaada ugu horreysa ee weedh kasta waxay ku jiraysaa taleefankaaga, si aad hadhow isbarbar dhigto.", // nieuw, nalezen
    savingOffline: "Waa la kaydinayaa…", // nieuw, nalezen
    savedOffline: "Waa la kaydiyay, internet la'aan ayuu shaqaynayaa", // nieuw, nalezen
    offlineNoSpace: "Meel ku filan kuma jirto taleefankan. Ka saar mawduuc la kaydiyay ama meel bannee.", // nieuw, nalezen
    offlineFailed: "Kaydintu ma shaqayn. Hubi internetkaaga oo mar kale isku day.", // nieuw, nalezen
    pocketCard: "Kaarka jeebka", // nieuw, nalezen
    pocketSave: "U kaydi sawir ahaan", // nieuw, nalezen
    textSize: "Cabbirka qoraalka", // nieuw, nalezen
    textNormal: "Caadi", // nieuw, nalezen
    textLarge: "Weyn", // nieuw, nalezen
    textXl: "Aad u weyn", // nieuw, nalezen
    showEnglish: "Sidoo kale tus Ingiriisiga", // nieuw, nalezen
    genderTitle: "Naag mise nin?", // nieuw, nalezen
    genderHint: "Si luqaddaadu kuula hadasho si sax ah.", // nieuw, nalezen
    genderWoman: "Naag", // nieuw, nalezen
    genderMan: "Nin", // nieuw, nalezen
    genderNone: "Ma doonayo inaan sheego", // nieuw, nalezen
    langGuessYes: "Haa", // nieuw, nalezen
    langGuessOther: "Luqad kale", // nieuw, nalezen
    settingsLangMe: "Luqadda iyo aniga", // nieuw, nalezen
    settingsLessons: "Casharrada", // nieuw, nalezen
    settingsPhone: "Taleefankan", // nieuw, nalezen
    settingOn: "Shidan", // nieuw, nalezen
    settingOff: "Dansan", // nieuw, nalezen
    sectorGroupMake: "Samaynta iyo gaadiidka", // nieuw, nalezen
    sectorGroupCare: "Daryeelka iyo adeegga", // nieuw, nalezen
    sectorGroupShop: "Dukaanka iyo martigelinta", // nieuw, nalezen
    sectorGroupBuild: "Dhismaha iyo farsamada", // nieuw, nalezen
    voiceWoman: "Cod naageed", // nieuw, nalezen
    voiceMan: "Cod nineed", // nieuw, nalezen
    writingPick: "Dooro erayga", // nieuw, nalezen
    settingWriting: "Qoraalka", // nieuw, nalezen
    settingKeepLessons: "Casharrada ku hay taleefankan", // nieuw, nalezen
    settingKeepLessonsHint: "Mawduuca aad hadda baranayso waxaa lagu kaydiyaa taleefankan, si uu internet la'aan ugu shaqeeyo. Mawduucyada la dhammeeyay mar kale waa la saarayaa.", // nieuw, nalezen
    otherTopicLink: "Mawduuc kale", // nieuw, nalezen
    remindAsk: "Ma ku xusuusinnaa maalin kasta?", // nieuw, nalezen
    remindYes: "Haa, shaqada ka dib", // nieuw, nalezen
    remindNo: "Maya, mahadsanid", // nieuw, nalezen
    remindPickTime: "Goormaan ku xusuusinnaa?", // nieuw, nalezen
    certSaveShare: "Kaydi ama la wadaag", // nieuw, nalezen
    pauseTitle: "Hakad", // nieuw, nalezen
    back: "Dib u noqo", // nieuw, nalezen
    quitLesson: "Ka bax casharka", // nieuw, nalezen
    playAudio: "Daar", // nieuw, nalezen
    scrollDown: "Hoos u dhaqaaji", // nieuw, nalezen
    lessonProgress: "Horumarka casharka", // nieuw, nalezen
    mainMenu: "Liiska ugu weyn", // nieuw, nalezen
    spaceKey: "Meel bannaan", // nieuw, nalezen
    langNotOnPhone: "Luqaddan weli kuma jirto taleefankan. Ku xir internetka si aad u beddesho.", // nieuw, nalezen
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: "Adigu dooro waqti", // nieuw, nalezen
    gateWho: "Macallinkaaga, la-taliyahaaga ama loo-shaqeeyahaaga ayaa ku siinaya koodhka.", // nieuw, nalezen
    gateTrust: "Akoon ma jiro. Magac ma jiro. Wax walba waxay ku jiraan taleefankan.", // nieuw, nalezen
    codeAccepted: "Koodhka waa la aqbalay", // nieuw, nalezen
    startFree: "Koodh ma haysatid? Ku bilow casharrada ugu horreeya", // nieuw, nalezen
    bramHello: "Waan ku faraxsanahay inaan ku arko.", // nieuw, nalezen
    bramBack: "Ku soo dhowow mar kale. Aan sii wadno.", // nieuw, nalezen
    bramRested: "Shalay waxay ahayd maalintaada fasaxa. Maalmahaaga isku xiga way sii socdaan.", // nieuw, nalezen
    bramDueN: { one: "Maanta {n} eray ayaad ku celinaysaa.", other: "Maanta {n} eray ayaad ku celinaysaa." }, // nieuw, nalezen
    bramDueOne: "Maanta {n} eray ayaad ku celinaysaa.", // nieuw, nalezen
    bramDayN: "Maalin {n} oo isku xigta.", // nieuw, nalezen
    bramDone: "Maanta waad dhammaysay. Berri ayaan is arki doonnaa.", // nieuw, nalezen
    bramPerfect: "Aad u fiican. Erayadan waad taqaan.", // nieuw, nalezen
    bramGood: "Shaqo fiican. Tallaabo tallaabo.", // nieuw, nalezen
    bramHard: "Waa fiican tahay inaad ku celcelisay. Erayada adag mar kale ayay soo noqonayaan.", // nieuw, nalezen
    bramReview: "Fiican. Ku celintu waxay kaa caawinaysaa inaad xusuusato.", // nieuw, nalezen
    bramIntro: "Waxaan ahay Bram, saaxiibkaaga shaqada.", // nieuw, nalezen
    bramIntroHello: "Salaan, waxaan ahay Bram.", // nieuw, nalezen
    showDutch: "Ku tus Af-Holandiis", // nieuw, nalezen
    showAnswers: "Tus jawaabaha", // nieuw, nalezen
    lastUpdated: "Markii ugu dambeysay ee la cusboonaysiiyay: {date}", // nieuw, nalezen
    /* G4 b3 */
    buildListen: "Dhegeyso oo samee weedha", // nieuw, nalezen
    chatWhichQuestion: "Su'aashee ayaa ku habboon jawaabtan?", // nieuw, nalezen
    reviewWaiting: "{n} eray oo kale ayaa sugaya. Maalmaha soo socda ayay soo noqonayaan.", // nieuw, nalezen
    factTitle: "Ma ogeyd?", // nieuw, nalezen
    fact3: "Keligaa ma tihid: in ka badan 3 milyan oo qof oo waaweyn oo Holland ku nool ayaa u arka akhriska, xisaabta ama kombiyuutarka wax adag. Ku celcelintu way caawisaa.", // nieuw, nalezen
    fact7: "Muhaajiriinta si aad ah ugu hadla Af-Holandiis, 100-kiiba 69 ayaa leh shaqo mushahar leh.", // nieuw, nalezen
    fact14: "Maktabado badan waxay leeyihiin Taalhuis (guriga luqadda): caawimaad bilaash ah si aad u sii barato Af-Holandiis.", // nieuw, nalezen
    fact30: "Wax yar oo maalin kasta ah ayaa ka fiican wax badan oo mar mar ah. 30 maalmood ayaad samaysay!", // nieuw, nalezen
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: "Faylkan wuxuu leeyahay {n} cashar.", other: "Faylkan wuxuu leeyahay {n} cashar." }, // nieuw, nalezen
    backupFileOne: "Faylkan wuxuu leeyahay {n} cashar.", // nieuw, nalezen
    backupPhoneN: { one: "Waxaad leedahay {n} cashar.", other: "Waxaad leedahay {n} cashar." }, // nieuw, nalezen
    backupPhoneOne: "Waxaad leedahay {n} cashar.", // nieuw, nalezen
    backupFewer: "“Beddel” wuxuu tirtirayaa casharrada aan faylka ku jirin. “Isku dar” wax walba wuu hayaa.", // nieuw, nalezen
    backupTooBig: "Faylkani aad buu u weyn yahay. Fayl Vloertaal aad buu uga yar yahay.", // nieuw, nalezen
    backupNewPhone: "Taleefan cusub? Halkaas sidoo kale waxaad u baahan tahay koodhkaaga.", // nieuw, nalezen
    remindEveryDay: "Xusuusintaada: maalin kasta saacadda {time}", // nieuw, nalezen
    remindStop: "Jooji xusuusinta", // nieuw, nalezen
    remindStopped: "Fur faylka si aad xusuusinta uga saarto kalandarkaaga.", // nieuw, nalezen
    remindStoppedAndroid: "Adigu ka tirtir xusuusinta Google Calendar.", // nieuw, nalezen
    resetKeeps: "Casharradaada, erayadaada, maalmahaaga isku xiga iyo shahaadooyinkaaga waa la tirtirayaa. Luqaddaada iyo dejintaada way sii jiraan.", // nieuw, nalezen
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: "Lama soo rarin. Internet ma haysaa?", // nieuw, nalezen
    retry: "Isku day mar kale", // nieuw, nalezen
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: "Vloertaal ma bilaabmi karo.", // nieuw, nalezen
    bootFailedHint: "Marka hore kaydi horumarkaaga. Kadib dib u bilow.", // nieuw, nalezen
    startOver: "Dib u bilow", // nieuw, nalezen
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: "Maxaad horey u taqaan?", // nieuw, nalezen
    toetsOffer: "Qiyaastii 10 daqiiqo. Dhibco ma jiraan. Adiga oo keliya ayay kuu tahay.", // nieuw, nalezen
    toetsEndOffer: "Wax badan ayaad baratay. Mar kale samee tijaabada oo eeg waxa aad hadda taqaan.", // nieuw, nalezen
    toetsPartListen: "Dhegeysi", // nieuw, nalezen
    toetsPartWords: "Erayo", // nieuw, nalezen
    toetsPartSentences: "Weedho", // nieuw, nalezen
    toetsListenAsk: "Dhegeyso. Maxay ka dhigan tahay?", // nieuw, nalezen
    toetsNotSure: "Ma taqaan? Markaas riix “Ma aqaan”. Taasi waa caadi.", // nieuw, nalezen
    toetsMicKeep: "Duubistaadu waxay ku jiraysaa taleefankan oo keliya. Hadhow waad is maqli kartaa mar kale.", // nieuw, nalezen
    toetsStartDone: "Bilow fiican! Kani waa waxa aad horey u taqaan.", // nieuw, nalezen
    toetsEndDone: "Si fiican ayaad u samaysay! Eeg waxa aad hadda taqaan.", // nieuw, nalezen
    toetsYouThen: "Adiga markii hore", // nieuw, nalezen
    toetsYouNow: "Adiga hadda", // nieuw, nalezen
    toetsKeepGoing: "Wax yar ku celceli maalin kasta. Markaas wax badan oo kale ayaad baranaysaa.", // nieuw, nalezen
    toetsStart: "Samee tijaabada", // nieuw, nalezen
    toetsIdk: "Ma aqaan", // nieuw, nalezen
    toetsMore: "Ka badan markii hore", // nieuw, nalezen
    toetsSame: "Qiyaastii isku mid", // nieuw, nalezen
    toetsMoreAll: "Guud ahaan: hadda waxaad taqaan wax ka badan markii hore.", // nieuw, nalezen
    toetsSameAll: "Guud ahaan: qiyaastii la mid markii hore.", // nieuw, nalezen
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: "Marka hore 5 su'aalood oo adiga kugu saabsan. Sax iyo khalad ma jiro.", // nieuw, nalezen
    toetsDurfAsk: "Ma u dhiirran kartaa tan?", // nieuw, nalezen
    toetsDurfUnderstand: "Inaad sheegto inaadan wax fahmin", // nieuw, nalezen
    toetsDurfBoss: "Inaad madaxaaga wax weydiiso", // nieuw, nalezen
    toetsDurfHelp: "Inaad caawimaad weydiisato", // nieuw, nalezen
    toetsDurfUnsafe: "Inaad sheegto in wax aanu ammaan ahayn", // nieuw, nalezen
    toetsDurfBreak: "Inaad nasashada wax yar la sheekaysato saaxiibka shaqada", // nieuw, nalezen
    toetsDurfNotYet: "Weli maya", // nieuw, nalezen
    toetsDurfABit: "Wax yar", // nieuw, nalezen
    toetsDurfYes: "Haa", // nieuw, nalezen
    toetsDurfAgain: "Dhowr toddobaad kadib mar kale ayaan ku weydiin doonnaa.", // nieuw, nalezen
    tempo: "Xawaaraha", // nieuw, nalezen
    tempoCalm: "Deggan", // nieuw, nalezen
    tempoNormal: "Caadi", // nieuw, nalezen
    tempoHint: "Deggan waa tartiib oo cad. Caadi waa sida saaxiibbada shaqadu u hadlaan. Dooro “Caadi” marka aad horey wax badan u fahmayso.", // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: "Tus sida ay u socoto", // nieuw, nalezen
    coachCardIntro: "Kaarkan wuxuu muujinayaa horumarkaaga. Tus macallinkaaga, la-taliyahaaga ama madaxaaga. Adiga ayaa go'aansanaya.", // nieuw, nalezen
    coachCardNo: "Sidoo kale waxaad dhihi kartaa maya.", // nieuw, nalezen
    coachCardKeep: "Taleefankaaga ayaa sameeya kaarka. Waxba lama diro. Vloertaal waxba ma hayo.", // nieuw, nalezen
    coachCardWhat: "Kaarka dushiisa, Af-Holandiis:", // nieuw, nalezen
    coachTopics: "Mawduucyada la dhammeeyay", // nieuw, nalezen
    coachDays: "Maalmaha tababarka 4-tii toddobaad ee u dambeeyay", // nieuw, nalezen
    coachLast: "Casharkii ugu dambeeyay, iyo taariikhda", // nieuw, nalezen
    coachCode: "Koodh: isla tirooyinka, si kooban, guudmar kooxeed. Magac ma jiro.", // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: "Taleefanka u daa inuu dhegeysto (tijaabo)", // nieuw, nalezen
    listenHint: "Kadib markaad hadasho, taleefanku wuxuu sheegaa haddii uu ku fahmay. Tani waxay ka dhacdaa taleefanka laftiisa. Waxba uma tagaan annaga ama dad kale.", // nieuw, nalezen
    listenNeedsPack: "Taleefanku marka hore wuxuu u baahan yahay Af-Holandiis. Waa soo dejin weyn: isticmaal wifi.", // nieuw, nalezen
    listenDownload: "Soo deji Af-Holandiiska", // nieuw, nalezen
    listenNotNow: "Hadda maya", // nieuw, nalezen
    listenDownloading: "Af-Holandiisku waa imanayaa. Hadhow mar kale isku day.", // nieuw, nalezen
    listenFailed: "Taasi ma shaqayn. Hadhow mar kale isku day, adigoo wifi isticmaalaya.", // nieuw, nalezen
    listenPrivacy: "Taleefanka keligiis ayaa dhegeysta. Waxba lama diro.", // nieuw, nalezen
    heardWait: "Taleefanku waa dhegeysanayaa…", // nieuw, nalezen
    heardOk: "Waa la fahmay", // nieuw, nalezen
    heardAlmost: "Ku dhowaad: mar kale dheh {word}", // nieuw, nalezen
    heardNotYet: "Weli lama fahmin", // nieuw, nalezen
    goOnAnyway: "Si kastaba sii wad", // nieuw, nalezen
    fasterAsk: "Ma rabtaa inaad si dhakhso ah u socoto?", // nieuw, nalezen
    fasterHint: "Sharax ka yar casharrada cusub. Af-Holandiiska oo xawaare caadi ah.", // nieuw, nalezen
    fasterYes: "Haa", // nieuw, nalezen
    fasterNo: "Maya", // nieuw, nalezen
    easierNext: "Casharka xiga wax yar ayuu ka gaaban yahay.", // nieuw, nalezen
    fasterSetting: "Si dhakhso ah u baro", // nieuw, nalezen
    fasterSettingHint: "Shidan: sharax ka yar casharrada cusub, iyo Af-Holandiiska oo xawaare caadi ah. Dansan: sidii hore.", // nieuw, nalezen
    tempoFasterHint: "Si dhakhso ah u baro: sharax ka yar casharrada cusub, iyo Af-Holandiiska oo xawaare caadi ah.", // nieuw, nalezen
    samenTitle: "Wada barta", // nieuw, nalezen
    samenRowHint: "Laba qof, hal taleefan", // nieuw, nalezen
    samenIntro: "La tababar saaxiibka shaqada, saaxiib ama macallin. Akhriska isku beddela.", // nieuw, nalezen
    samenHow: "Qofka 1aad waa saaxiibka shaqada. Qofka 2aad ayaa jawaabaya.", // nieuw, nalezen
    samenNoScore: "Waxba lama duubayo. Dhibco ma jiraan.", // nieuw, nalezen
    samenPerson: "Qofka {n}", // nieuw, nalezen
    samenAnswer: "Jawaab", // nieuw, nalezen
    samenHear: "Dhegeyso", // nieuw, nalezen
    samenNext: "Xiga", // nieuw, nalezen
    samenTranslation: "Turjumaad", // nieuw, nalezen
    samenEnd: "Si fiican! Ma is-weydaarsanaysaan doorarka oo mar kale ma samaynaysaan?", // nieuw, nalezen
    samenSwap: "Is-weydaarsada doorarka", // nieuw, nalezen
    samenStop: "Dhammaaday", // nieuw, nalezen
    checkStart: "Tan waan aqaan: hubin gaaban", // nieuw, nalezen
    checkPassed: "Tan horey ayaad u taqaan. Mawduucan ma calaamadinaysaa?", // nieuw, nalezen
    checkNoCert: "Markaas weli shahaado ma jirto. Waxaad heli doontaa casharrada kadib.", // nieuw, nalezen
    checkNotYet: "Casharradu waxay kaa caawinayaan mawduucan.", // nieuw, nalezen
    checkMark: "Calaamadi", // nieuw, nalezen
    checkVia: "hubin kadib", // nieuw, nalezen
    checkUndo: "Si kastaba samee casharrada", // nieuw, nalezen
    commLabel: "Isgaarsiin", // nieuw, nalezen
    shareInvite: "Waxaan Af-Holandiis u baranayaa shaqadayda anigoo isticmaalaya Vloertaal. Waa bilaash: {link}", // nieuw, nalezen
    briefjeWhat: "Vloertaal waa app bilaash ah oo lagu barto Af-Holandiiska shaqada.", // nieuw, nalezen
    briefjeHow: "Casharro gaagaaban oo taleefankaaga ku jira, iyo caawimaad luqaddaada ah. Akoon looma baahna.", // nieuw, nalezen
    briefjeOpen: "Ku fur taleefankaaga:", // nieuw, nalezen
    workTry: "Maanta shaqada ku tijaabi", // nieuw, nalezen
    workTryWhen: "Goorma:", // nieuw, nalezen
    workTryThen: "Markaas dheh:", // nieuw, nalezen
    colleagueCard: "Saaxiibkaaga shaqada", // nieuw, nalezen
    colleagueCardHint: "Tan tus saaxiibka shaqada ee ku hadla Af-Holandiis. Waxay sheegaysaa sida uu kaaga caawin karo tababarka.", // nieuw, nalezen
    colleagueShare: "U dir saaxiibkaaga shaqada", // nieuw, nalezen
    coachCardRights: "Magacyada mawduucyada xuquuqdaada ku saabsan tus", // nieuw, nalezen
    speakFromMemory: "Hadda xusuustaada ka dheh: maxay ahayd Af-Holandiis?", // nieuw, nalezen
    keptNofM: "Erayada 2 toddobaad ama ka badan ka hor: weli waxaad taqaanay {n} ka mid ah {m}.", // nieuw, nalezen
    verbSecond: "Ficilku wuxuu ku jiraa booska 2aad.", // nieuw, nalezen
    calmScreen: "Shaashad deggan", // nieuw, nalezen
    calmAuto: "Sida taleefankaaga", // nieuw, nalezen
    calmHint: "Shidan: waxba ma dhaqaaqaan. Dabaaldeg maalmahaaga isku xiga ah ma jiro cashar kadib. Maalmahaaga isku xiga iyo erayadaadu kuma jiraan shaashadda hore.", // nieuw, nalezen
    infoMore: "Sharax dheeraad ah", // nieuw, nalezen
    tipsAbout: "Ku saabsan talooyinkan", // nieuw, nalezen
    tipsNotChecked: "Khabiir weli ma hubin sharraxaaddan.", // nieuw, nalezen
    lawStale: "Sharraxaaddan waxay ka timid {month}. Xeerarka ugu dambeeyay, eeg Juridisch Loket ama Work in NL.", // nieuw, nalezen
    lawStaleBe: "Sharraxaaddan waxay ka timid {month}. Xeerarka ugu dambeeyay, eeg justitiehuis ama werk.belgie.be.", // nieuw, nalezen
    aboutMore: "Wax badan ka akhri Vloertaal", // nieuw, nalezen
    geluktAsk: "Tan ma ku tidhi shaqada?", // nieuw, nalezen
    geluktYes: "Haa, waa ii suurtagashay", // nieuw, nalezen
    geluktNotYet: "Weli maya", // nieuw, nalezen
    geluktDoneN: { one: "Si fiican! Waxaad shaqada ku isticmaashay {n} weedh.", other: "Si fiican! Waxaad shaqada ku isticmaashay {n} weedh." }, // nieuw, nalezen
    geluktDoneOne: "Si fiican! Waxaad shaqada ku isticmaashay weedhaadii ugu horreysay.", // nieuw, nalezen
    geluktWhere: "Waxaad ka heli kartaa Dejinta.", // nieuw, nalezen
    geluktTitle: "Lagu yidhi shaqada", // nieuw, nalezen
    geluktListHint: "Weedhahan waxaad ku tidhi shaqada.", // nieuw, nalezen
    nextMinutesN: "qiyaastii {n} daqiiqo", // nieuw, nalezen
    saveFailed: "Horumarkaaga lama kaydin. Taleefankaagu ma buuxaa? Meel bannee. Ama tag Dejinta: “Kaydi horumarkaaga”.", // nieuw, nalezen
    bewaarNudge: "Taleefankaagu mararka qaar wuu tirtiri karaa horumarkaaga. Sidaas darteed kaydi nuqul.", // nieuw, nalezen
    bewaarGo: "Hadda kaydi", // nieuw, nalezen
    backupShare: "Adiga isu dir", // nieuw, nalezen
    backupShareHint: "Faylka adiga isu dir, tusaale ahaan WhatsApp ama e-mail.", // nieuw, nalezen
    backupMade: "Waa dhammaatay. Faylkan si fiican u hay. Hadhow waxaad ku soo celin kartaa horumarkaaga.", // nieuw, nalezen
    speakTurnPrompt: "Maxaad dhahaysaa?", // nieuw, nalezen
    speakTurnExample: "Tusaale", // nieuw, nalezen
    speakTurnReveal: "Maqal jawaabta", // nieuw, nalezen
    sceneTitle: "Ka dhegeyso shaqada", // nieuw, nalezen
    sceneIntro: "Waxaa jira buuq, sida shaqada. Dhegeyso. Kadib su'aalaha ayaa imanaya.", // nieuw, nalezen
    buildFront: "Erayga calaamadsan hore u dhig", // nieuw, nalezen
    bridgeTitle: "Xeerarka shaqada", // nieuw, nalezen
    bridgeText: "Hadda Af-Holandiis badan ayaad taqaan. Ma rabtaa inaad sidoo kale barato xeerarka shaqada? Markaas wax walba waa Af-Holandiis.", // nieuw, nalezen
    bridgeGo: "Haa, i tus", // nieuw, nalezen
    klankTitle: "Sidee loo dhahaa?", // nieuw, nalezen
    klankHint: "Riix cod. Eeg sida afkaagu u sameeyo.", // nieuw, nalezen
    klankSpeed: "Xawaaraha", // nieuw, nalezen
    klankScrub: "Erayga, cod cod", // nieuw, nalezen
    tagSound: "Cod", // nieuw, nalezen
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': "Bilowga", // nieuw, nalezen
    'theme.safe': "Shaqo ammaan ah", // nieuw, nalezen
    'theme.find': "Helitaanka shaqo", // nieuw, nalezen
    'theme.job': "Shaqadaada", // nieuw, nalezen
    'theme.together': "Wada shaqaynta", // nieuw, nalezen
    'theme.rights': "Xuquuqdaada", // nieuw, nalezen
    'theme.life': "Nolosha Holland", // nieuw, nalezen
    'theme.sector': "Qaybtaada shaqada", // nieuw, nalezen
    // Unit: First day at work
    'u.firstday': "Maalinta ugu horreysa ee shaqada", // nieuw, nalezen
    'l.hello': "Salaan", // nieuw, nalezen
    'w.hallo': "salaan", // nieuw, nalezen
    'w.goedemorgen': "subax wanaagsan", // nieuw, nalezen
    'w.dankjewel': "mahadsanid", // nieuw, nalezen
    'w.ja': "haa", // nieuw, nalezen
    'w.nee': "maya", // nieuw, nalezen
    'w.totmorgen': "berri ayaan is aragnaa", // nieuw, nalezen
    's.hello.1': "Salaan, waxaan ahay qof cusub.", // nieuw, nalezen
    's.hello.2': "Subax wanaagsan, waxaan ahay Ali.", // nieuw, nalezen
    's.hello.3': "Mahadsanid, berri ayaan is aragnaa!", // nieuw, nalezen
    'l.people': "Dadka shaqada", // nieuw, nalezen
    'w.collega': "saaxiibka shaqada", // nieuw, nalezen
    'w.baas': "madaxa", // nieuw, nalezen
    'w.leidinggevende': "madaxa (qofka shaqada maamula)", // nieuw, nalezen
    'w.werk': "shaqada", // nieuw, nalezen
    'w.naam': "magaca", // nieuw, nalezen
    'w.nieuw': "cusub", // nieuw, nalezen
    's.people.1': "Magacaygu waa Sara.", // nieuw, nalezen
    's.people.2': "Yaa madaxa ah?", // nieuw, nalezen
    's.people.3': "Waxaan ahay saaxiib shaqo oo cusub.", // nieuw, nalezen

    // Unit: Asking for help
    'u.help': "Caawimaad weydiisasho", // nieuw, nalezen
    'l.understand': "Ma fahmin", // nieuw, nalezen
    'w.begrijpniet': "ma fahmin", // nieuw, nalezen
    'w.nogeenkeer': "mar kale", // nieuw, nalezen
    'w.langzaam': "tartiib", // nieuw, nalezen
    'w.helpen': "caawin", // nieuw, nalezen
    'w.waar': "xaggee", // nieuw, nalezen
    'w.wc': "musqusha", // nieuw, nalezen
    's.understand.1': "Ma ku celin kartaa taas?", // nieuw, nalezen
    's.understand.2': "Ma u hadli kartaa si ka tartiib badan?", // nieuw, nalezen
    's.understand.3': "Xaggee ayay musqushu ku taal?", // nieuw, nalezen

    // Unit: Safety first
    'u.safety': "Ammaanku waa koowaad", // nieuw, nalezen
    'l.gear': "Qalabka badbaadada", // nieuw, nalezen
    'w.helm': "koofiyadda adag", // nieuw, nalezen
    'w.handschoenen': "galoofyada", // nieuw, nalezen
    'w.veiligheidsschoenen': "kabaha badbaadada", // nieuw, nalezen
    'w.hesje': "jaakadda badbaadada", // nieuw, nalezen
    'w.bril': "muraayadaha badbaadada", // nieuw, nalezen
    'w.dragen': "xirasho (dhar ama qalab)", // nieuw, nalezen
    's.gear.1': "Had iyo jeer xiro koofiyaddaada adag.", // nieuw, nalezen
    's.gear.2': "Xaggee ayay galoofyadu yaalliin?", // nieuw, nalezen
    's.gear.3': "Waxaan xiranahay jaakaddayda badbaadada.", // nieuw, nalezen
    'l.danger': "Khatar!", // nieuw, nalezen
    'w.pasop': "iska jir", // nieuw, nalezen
    'w.stop': "joogso", // nieuw, nalezen
    'w.help': "caawimaad", // nieuw, nalezen
    'w.brand': "dabka", // nieuw, nalezen
    'w.nooduitgang': "albaabka degdegga", // nieuw, nalezen
    'w.ongeluk': "shilka", // nieuw, nalezen
    's.danger.1': "Iska jir, dhulku waa qoyan yahay!", // nieuw, nalezen
    's.danger.2': "Xaggee ayuu albaabka degdeggu ku yaal?", // nieuw, nalezen
    's.danger.3': "Shil ayaa dhacay!", // nieuw, nalezen
    'l.alarm': "Alaarmiga dabka iyo ka bixidda dhismaha", // nieuw, nalezen
    'w.alarm': "alaarmiga", // nieuw, nalezen
    'w.ontruimen': "ka bixin dhismaha (qof walba wuu ka baxaa dhismaha)", // nieuw, nalezen
    'w.vluchtroute': "jidka baxsashada", // nieuw, nalezen
    'w.trap': "jaranjarada", // nieuw, nalezen
    'w.verzamelplaats': "goobta isu imaatinka (halka qof walba dibadda ku kulmo)", // nieuw, nalezen
    'w.brandblusser': "dab-demiska", // nieuw, nalezen
    's.alarm.1': "Xaggee ayuu dab-demisku ku yaal?", // nieuw, nalezen
    's.alarm.2': "Waa inaan ka bixinnaa dhismaha.", // nieuw, nalezen
    's.alarm.3': "Qaado jaranjarada, ha qaadan wiishka.", // nieuw, nalezen
    'l.accident': "Soo sheeg shil", // nieuw, nalezen
    'w.gewond': "dhaawacan", // nieuw, nalezen
    'w.bloeden': "dhiig ka bixid", // nieuw, nalezen
    'w.ehbodoos': "sanduuqa gargaarka degdegga", // nieuw, nalezen
    'w.bhver': "caawiyaha degdegga ee shirkadda (gargaarka koowaad, dabka, ka bixidda dhismaha)", // nieuw, nalezen
    'w.ziekenhuis': "isbitaalka", // nieuw, nalezen
    'w.gebeuren': "dhicid", // nieuw, nalezen
    's.accident.1': "Saaxiibkayga shaqada ayaa dhacay.", // nieuw, nalezen
    's.accident.2': "Waan is gooyay.", // nieuw, nalezen
    's.accident.3': "Waxaan rabaa inaan soo sheego shil.", // nieuw, nalezen

    // Unit: In the warehouse
    'u.warehouse': "Bakhaarka", // nieuw, nalezen
    'l.things': "Alaabta bakhaarka", // nieuw, nalezen
    'w.doos': "kartoonka", // nieuw, nalezen
    'w.pallet': "baaleetka", // nieuw, nalezen
    'w.heftruck': "forklift-ka (gaariga alaabta kor u qaada)", // nieuw, nalezen
    'w.kar': "gaariga gacanta", // nieuw, nalezen
    'w.stelling': "khaanadaha alaabta", // nieuw, nalezen
    'w.scanner': "iskaanarka", // nieuw, nalezen
    's.things.1': "Kartoonka saar baaleetka.", // nieuw, nalezen
    's.things.2': "Xaggee ayuu iskaanarku yaal?", // nieuw, nalezen
    's.things.3': "Forklift-ku waa imanayaa.", // nieuw, nalezen
    'l.directions': "Jihooyinka iyo falalka", // nieuw, nalezen
    'w.links': "bidix", // nieuw, nalezen
    'w.rechts': "midig", // nieuw, nalezen
    'w.boven': "kor", // nieuw, nalezen
    'w.beneden': "hoos", // nieuw, nalezen
    'w.tillen': "kor u qaadid", // nieuw, nalezen
    'w.pakken': "qaadasho", // nieuw, nalezen
    's.directions.1': "Kartoonku wuxuu ku yaal dhinaca bidix.", // nieuw, nalezen
    's.directions.2': "Lugahaaga ku qaad.", // nieuw, nalezen
    's.directions.3': "U leexo dhinaca midig.", // nieuw, nalezen

    // Unit: Time and schedule
    'u.time': "Waqtiga iyo jadwalka", // nieuw, nalezen
    'l.shift': "Wareeggayga shaqada", // nieuw, nalezen
    'w.dienst': "wareegga shaqada (shift)", // nieuw, nalezen
    'w.pauze': "nasashada", // nieuw, nalezen
    'w.beginnen': "bilaabid", // nieuw, nalezen
    'w.klaar': "dhammaaday", // nieuw, nalezen
    'w.telaat': "daahay", // nieuw, nalezen
    'w.morgen': "berri", // nieuw, nalezen
    's.shift.1': "Wareeggayga shaqadu wuxuu bilaabmaa saacadda toddobada.", // nieuw, nalezen
    's.shift.2': "Goorma ayaa nasashadu tahay?", // nieuw, nalezen
    's.shift.3': "Iga raalli ahaw, waan soo daahay.", // nieuw, nalezen
    'l.sick': "Sheeg inaad xanuunsan tahay", // nieuw, nalezen
    'w.ziek': "xanuunsan", // nieuw, nalezen
    'w.bellen': "wacid (taleefan)", // nieuw, nalezen
    'w.dokter': "dhakhtarka", // nieuw, nalezen
    'w.pijn': "xanuunka", // nieuw, nalezen
    'w.vandaag': "maanta", // nieuw, nalezen
    'w.beter': "ka fiican", // nieuw, nalezen
    's.sick.1': "Maanta waan xanuunsanahay.", // nieuw, nalezen
    's.sick.2': "Dhabarka ayaa i xanuunaya.", // nieuw, nalezen
    's.sick.3': "Dhakhtarka ayaan wacayaa.", // nieuw, nalezen

    'c.hello.q': "Fiid wanaagsan!", // nieuw, nalezen
    'c.hello.a': "Berri ayaan is aragnaa!", // nieuw, nalezen
    'c.people.q': "Magacaa?", // nieuw, nalezen
    'c.people.a': "Magacaygu waa Sara.", // nieuw, nalezen
    'l.arrive': "Maalinta koowaad: hel jidkaaga", // nieuw, nalezen
    'w.ingang': "albaabka laga soo galo", // nieuw, nalezen
    'w.receptie': "qaabilaadda (miiska soo dhaweynta)", // nieuw, nalezen
    'w.kantine': "makhaayadda shaqada", // nieuw, nalezen
    'w.kleedkamer': "qolka dharka lagu beddesho", // nieuw, nalezen
    'w.buddy': "buddy-ga (saaxiib shaqo oo ku caawiya bilowga)", // nieuw, nalezen
    'w.vinden': "helid", // nieuw, nalezen
    's.arrive.1': "Yaan u tagaa marka aan imaado?", // nieuw, nalezen
    's.arrive.2': "Ma heli karo qolka dharka lagu beddesho.", // nieuw, nalezen
    's.arrive.3': "Yaa maanta buddy-gayga ah?", // nieuw, nalezen
    'c.arrive.q': "Subax wanaagsan, maxaad u timid?", // nieuw, nalezen
    'c.arrive.a': "Waxaan ahay qof cusub. Maanta ayaan bilaabayaa.", // nieuw, nalezen
    'c.understand.q': "Ma fahantay?", // nieuw, nalezen
    'c.understand.a': "Maya, mar kale fadlan.", // nieuw, nalezen
    'c.gear.q': "Koofiyaddaada adag ma haysataa?", // nieuw, nalezen
    'c.gear.a': "Haa, waan xiranahay.", // nieuw, nalezen
    'c.danger.q': "Shil ma dhacay?", // nieuw, nalezen
    'c.danger.a': "Haa, wac 112!", // nieuw, nalezen
    'c.alarm.q': "Qof walba dibadda ma joogaa?", // nieuw, nalezen
    'c.alarm.a': "Maya, saaxiibkayga shaqada weli halkan ma joogo.", // nieuw, nalezen
    'c.accident.q': "Maxaa dhacay?", // nieuw, nalezen
    'c.accident.a': "Wuu dhacay. Dhiig ayaa ka imanaya.", // nieuw, nalezen
    'l.notyet': "Tan weli ma baran", // nieuw, nalezen
    'w.nogniet': "weli maya", // nieuw, nalezen
    'w.mogen': "loo oggol yahay", // nieuw, nalezen
    'w.proberen': "isku dayid", // nieuw, nalezen
    'w.voordoen': "tusid (adigoo marka hore samaynaya)", // nieuw, nalezen
    'w.gevaarlijk': "khatar ah", // nieuw, nalezen
    'w.uitleg': "sharraxaadda", // nieuw, nalezen
    's.notyet.1': "Tan weli ma baran.", // nieuw, nalezen
    's.notyet.2': "Weli sharraxaad lama i siin.", // nieuw, nalezen
    's.notyet.3': "Ma la ii oggol yahay inaan tan hadda keligay sameeyo?", // nieuw, nalezen
    'c.notyet.q': "Isku day uun, waa fudud tahay.", // nieuw, nalezen
    'c.notyet.a': "Marka hore ma i tusi kartaa sida loo sameeyo?", // nieuw, nalezen
    'c.things.q': "Xaggee kartoonku aadayaa?", // nieuw, nalezen
    'c.things.a': "Baaleetka dushiisa.", // nieuw, nalezen
    'c.directions.q': "Bidix mise midig?", // nieuw, nalezen
    'c.directions.a': "Midig, khaanadaha agtooda.", // nieuw, nalezen
    'c.shift.q': "Goorma ayuu wareeggaaga shaqadu bilaabmayaa?", // nieuw, nalezen
    'c.shift.a': "Berri saacadda toddobada.", // nieuw, nalezen
    'c.sick.q': "Ma xanuunsan tahay?", // nieuw, nalezen
    'c.sick.a': "Haa, maanta guriga ayaan joogayaa.", // nieuw, nalezen
    // Emergency phrases (phrasebook only)
    'p.call112': "Wac 112!", // nieuw, nalezen
    'p.hurt': "Waan dhaawacmay.", // nieuw, nalezen
  },
};

export default lang;
