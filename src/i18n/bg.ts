import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'bg',
  name: 'Bulgarian',
  nativeName: 'Български',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Изглед',
    themeAuto: 'Автоматично',
    themeSand: 'Пясък', // nieuw, nalezen
    themeHarbour: 'Пристанище', // nieuw, nalezen
    themeWorkwear: 'Работно яке', // nieuw, nalezen
    themeDark: 'Тъмен',
    voice: 'Нидерландски глас',
    voiceAuto: 'Автоматично',
    voiceHint: 'Докосни 🔊, за да чуеш. Гласовете на Vloertaal звучат еднакво на всеки телефон; другите идват от телефона ти.',
    voiceNone: 'На това устройство няма нидерландски глас. Можеш да добавиш такъв от настройките на телефона (Синтез на реч).',
    appTagline: 'Нидерландски за работното място',
    chooseLanguage: 'Избери език за помощ',
    englishOnly: 'Само английски',
    beta: 'Преводът още не е проверен', // nieuw, nalezen
    dayStreak: { one: 'ден поред', other: 'дни поред' },
    streakStarted: 'Серията ти от дни започна! Ела пак утре.',
    streakGrew: { one: '{n} ден поред! Продължавай така.', other: '{n} дни поред! Продължавай така.' },
    start: 'Започни',
    practice: 'Упражни се отново', // nieuw, nalezen (AI-correctie 2 nov 2026)
    locked: 'Първо завърши предишния урок',
    newWord: 'Нова дума',
    tapToHear: 'Докосни, за да чуеш',
    sayItAloud: 'Кажи го на глас.', // nieuw, nalezen
    sayItQuietly: 'Кажи го тихо или наум.', // nieuw, nalezen
    whatDoesThisMean: 'Какво означава това?',
    snapQuestion: 'Разбираш ли?', // nieuw, nalezen
    snapYes: 'Да, добре.', // nieuw, nalezen
    snapGoodAsk: 'Добре, че питаш!', // nieuw, nalezen
    snapRight: 'Разбра правилно!', // nieuw, nalezen
    snapAskBetter: 'Виждаш ли? По-добре беше да попиташ.', // nieuw, nalezen
    whichOneIs: 'Кое от тези е „{word}“?',
    mixLesson: 'Смесен преговор',
    whatDoYouHear: 'Какво чуваш?',
    buildSentence: 'Състави това изречение на нидерландски',
    typeWhatYouHear: 'Напиши какво чуваш',
    check: 'Провери',
    continue: 'Продължи',
    correct: 'Браво!',
    almost: 'Правилно, но внимавай с правописа',
    incorrect: 'Не съвсем',
    correctAnswer: 'Правилен отговор',
    rightAnswerIs: 'Правилният отговор е:', // nieuw, nalezen
    bestAnswerIs: 'Най-добрият отговор е:', // nieuw, nalezen
    yourAnswer: 'Твоят отговор',
    inARow: '{n} поред',
    cantListen: 'Сега не мога да слушам',
    learnWriting: 'Искам да се науча и да пиша',
    learnWritingHint: 'Включено: пишеш чутите думи с букви. Изключено: избираш написаната дума, която чуваш.',
    tagRepeat: 'Отново',
    readAloud: 'Прочети на глас',
    lessonComplete: 'Урокът е завършен!',
    phrasebook: 'Фрази при спешност',
    phrasebookHint: 'Докосни фраза, за да я чуеш. Можеш да покажеш екрана и на колега.',
    whoToCall: 'Проблеми на работа? Кой може да помогне',
    who112: 'Спешен случай: опасност за живота, пожар или престъпление, което става сега.',
    whoLegal: 'Безплатен съвет за договора, заплатата или уволнението.',
    whoInspection: 'Съобщи за опасна работа, твърде ниска заплата или експлоатация. Може и анонимно.',
    whoFairwork: 'Някой те експлоатира на работа, или мислиш, че е така.',
    who113: 'Мислиш да сложиш край на живота си или се тревожиш за някого. Безплатно, денем и нощем.', // nieuw, nalezen
    whoVeiligThuis: 'Насилие или малтретиране у дома, срещу теб или срещу друг човек. Безплатно, може и анонимно.', // nieuw, nalezen
    settings: 'Настройки',
    helpLanguage: 'Език за помощ',
    resetProgress: 'Изтрий моя напредък',
    resetConfirm: 'Да се изтрие ли целият напредък на това устройство?',
    audioUnavailable: 'Звукът не е наличен на това устройство.',
    slow: 'Бавно',
    completeChat: 'Довърши разговора',
    meaning: 'Значение',
    navRoute: 'Уроци',
    navWords: 'Помощ',
    rightFirstTime: 'Вярно от първия път',
    newWords: 'Нови думи',
    wordsLearnedN: { one: '{n} научена дума', other: '{n} научени думи' },
    practiseMistakes: { one: 'Повтори грешките · остава {n}', other: 'Повтори грешките · остават {n}' },
    quitHint: 'Отговорите ти в този урок няма да се запазят.',
    keepGoing: 'Продължи',
    stopLesson: 'Спри урока',
    fullVersion: 'Пълна версия',
    unlockFull: 'Отключи пълната версия',
    unlockHint: 'С кода се отварят всички уроци. Кодът е безплатен. Още нямаш код? Попитай учителя или наставника си или ни пиши:',
    codeNotFull: 'Този код не отваря пълната версия. Поискай нов код.',
    password: 'Код',
    enterPassword: 'Въведи кода',
    wrongPassword: 'Кодът не е верен. Опитай пак.',
    unlock: 'Отключи',
    sector: 'Твоята работа',
    chooseSector: 'Къде работиш?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'В коя държава работиш?',
    countryHint: 'Ще получиш думите и съветите за нея.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026)
    countryNl: 'Нидерландия',
    countryBe: 'Белгия (Фландрия)',
    tipsNote: 'Тези съвети са за работа в Нидерландия. Обща информация, не е правен съвет.',
    sectorHint: 'Уроците за твоята работа идват рано. Можеш да промениш това по-късно в Настройки.',
    otherSectors: 'Други сектори',
    reviewToday: 'Преговор за днес',
    reviewTodayN: { one: '{n} дума за преговор · няколко минути', other: '{n} думи за преговор · няколко минути' },
    notSureYet: 'Още не знам',
    sectorLogistics: 'Логистика',
    sectorConstruction: 'Строителство',
    sectorProduction: 'Производство',
    sectorCare: 'Грижа за хора',
    sectorHospitality: 'Хотели и ресторанти',
    sectorRetail: 'Магазин и супермаркет', // nieuw, nalezen
    sectorCleaning: 'Почистване',
    sectorHorticulture: 'Градинарство', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Техническа работа', // nieuw, nalezen (AI-correctie 2 nov 2026)
    sectorGarage: 'Автосервиз', // nieuw (30 okt 2026), nalezen
    sound: 'Звук',
    soundOn: 'Със звук',
    withoutSound: 'Без звук',
    quietHint: 'Без звук уроците нямат упражнения за слушане и нищо не се пуска само. Докосни 🔊, за да чуеш дума, например със слушалки.',
    soundOffToast: 'Без звук. Можеш да включиш звука от Настройки.',
    noInternetSound: 'Няма интернет: звукът сега не работи.', // nieuw, nalezen
    stillToDo: 'Още за днес',
    streakStopped: { one: 'Серията ти спря на {n} ден. Започни отново днес.', other: 'Серията ти спря на {n} дни. Започни отново днес.' },
    recordN: { one: 'Твоят рекорд: {n} ден', other: 'Твоят рекорд: {n} дни' },
    workWeek: 'Твоята работна седмица',
    freeDaysN: { one: 'Имаш {n} свободен ден. Ако пропуснеш един ден, серията продължава.', other: 'Имаш {n} свободни дни. Ако пропуснеш един ден, серията продължава.' },
    restDay: 'Свободен ден',
    tier3: '3 дни поред',
    tier7: '1 седмица поред',
    tier14: '2 седмици поред',
    tier30: '1 месец поред',
    reviewDone: 'Готово за днес',
    tomorrowN: { one: 'Утре: {n} дума', other: 'Утре: {n} думи' },
    firstWordsTomorrow: 'Утре се връщат първите ти думи',
    extraRound: 'Допълнителен кръг',
    reviewFirstHint: 'Първо преговор. Така ще запомниш повече.', // nieuw, nalezen
    wordsStrongerN: { one: '{n} затвърдена дума', other: '{n} затвърдени думи' },
    noMistakes: 'Без грешки',
    nextUp: 'Следващ',
    installTitle: 'Сложи Vloertaal на началния екран',
    installHint: 'Тогава се отваря като приложение, и без интернет.',
    installAdd: 'Добави на началния екран',
    iosStep1: 'Докосни „Споделяне“',
    iosStep2: 'Докосни „Добави към началния екран“',
    iosStep3: 'Готово!',
    backupTitle: 'Запази напредъка си',
    backupHint: 'Напредъкът ти е само на този телефон. Запази го като файл, например за нов телефон.',
    backupSave: 'Изтегли',
    backupLoad: 'Възстанови',
    backupBad: 'Това не е файл на Vloertaal.',
    backupAsk: 'Да добавим ли този файл към напредъка ти, или да заменим напредъка ти с него?',
    backupMerge: 'Обедини',
    backupReplace: 'Замени',
    backupBack: 'Напредъкът ти е възстановен.',
    backupNothingNew: 'Нищо ново: това вече беше на телефона ти.',
    cancel: 'Отказ',
    remindTitle: 'Напомняй ми всеки ден',
    remindEvent: 'Време за нидерландски (10 минути)',
    remindHint: 'Календарът на телефона ти напомня. Нищо не се изпраща до нас.',
    remindBefore: 'Преди работа',
    remindAfter: 'След работа',
    remindOwn: 'Друг час',
    remindAdd: 'Добави в календара ми',
    remindAdded: 'Отвори файла, за да го добавиш в календара.',
    remindAddedAsk: 'Добавено? Тогава ще го видиш в календара.', // nieuw, nalezen
    navAbout: 'Инфо',
    tagMeaning: 'Значение',
    tagPick: 'Избери',
    tagListen: 'Слушай',
    tagType: 'Пиши',
    tagMatch: 'Двойки',
    tagBuild: 'Изречение',
    tagChat: 'Разговор',
    tagSituation: 'Ситуация',
    tagTip: 'Съвет',
    more: 'Още',
    less: 'По-малко',
    daysUnit: { one: 'ден', other: 'дни' },
    wordsUnit: { one: 'дума', other: 'думи' },
    countTitle: 'Анонимно броене',
    countHint: 'Приложението брои колко често се правят уроците и колко време отнемат приблизително. И дали някъде в приложението има грешка. Без име, без акаунт, без следене.', // fout-zin nieuw, nalezen
    certificate: 'Сертификат',
    myCertificates: 'Моите сертификати',
    certsEmpty: 'Завърши всички уроци от една тема. Тогава получаваш сертификат.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    certEarned: 'Имаш сертификат!',
    certEarnedHint: 'Всички уроци от тази тема са завършени.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    certView: 'Виж',
    certLater: 'По-късно',
    certPrint: 'Отпечатай или запази като PDF',
    certSaved: 'Снимката е запазена.',
    certNameHint: 'Остава само на този телефон. Може да го оставиш празно.',
    certChangeName: 'Смени името',
    certPractice: 'Сертификат за упражнение, не официална диплома',
    resumeLesson: 'Продължи урока',
    restartLesson: 'Започни отначало',
    quitKept: 'Напредъкът ти се запазва. Можеш да продължиш по-късно.',
    bestAnswer: 'Най-добър отговор',
    inReview: 'в проверка',
    today: 'Днес',
    playAgain: 'Чуй отново',
    daysUnitOne: 'ден',
    wordsUnitOne: 'дума',
    wordsLearnedOne: 'Научена дума: {n}',
    tomorrowOne: 'Утре: {n} дума',
    wordsStrongerOne: 'Затвърдена дума: {n}',
    recordOne: 'Твоят рекорд: {n} ден',
    streakStoppedOne: 'Серията ти спря на {n} ден. Започни отново днес.',
    letterTiles: 'Букви',
    useKeyboard: 'Клавиатура',
    skippedN: { one: '{n} пропуснато упражнение, не се брои', other: '{n} пропуснати упражнения, не се броят' },
    stampLater: 'Ще се върне по-късно',
    stampDone: 'Готово',
    chooseNext: 'Избери следващата тема',
    recommended: 'Препоръчано',
    allTopics: 'Всички теми',
    topicsOrder: 'Покажи темите',
    privacyLink: 'Прочети декларацията за поверителност (на нидерландски)', // nieuw, nalezen
    routeTitle: 'Какво искаш да учиш?', // nieuw, nalezen
    routeLearn: 'Нидерландски за работа и как се работи тук', // nieuw, nalezen
    routeRules: 'Вече говоря нидерландски: само правилата в работата', // nieuw, nalezen
    routeLearnShort: 'Учене на нидерландски', // nieuw, nalezen
    switchTitle: 'Към Werkregels?', // nieuw, nalezen
    switchDutch: 'Всичко ще е на нидерландски. Езикът за помощ се изключва.', // nieuw, nalezen
    switchReview: 'Докато не се върнеш, преговаряш правила, а не думи.', // nieuw, nalezen
    switchKept: 'Напредъкът ти остава запазен. Можеш да се върнеш оттук.', // nieuw, nalezen
    switchGo: 'Да, към Werkregels', // nieuw, nalezen
    byTheme: 'По раздели',
    inOrder: 'По ред',
    searchTopics: 'Търсене на тема', // nieuw, nalezen
    searchNone: 'Няма тема с тази дума.', // nieuw, nalezen
    lessonsUnit: { one: 'урок', other: 'урока' },
    lessonsUnitOne: 'урок',
    topicsUnit: { one: 'тема', other: 'теми' },
    topicsUnitOne: 'тема',
    allTopicsDone: 'Всички теми са завършени. Браво!',
    // Speaking practice
    tagSpeak: 'Говори',
    speakPrompt: 'Чуй, после го кажи',
    tapToSpeak: 'Докосни и говори',
    stopRecording: 'Стоп',
    micPrivacy: "Никой друг не те чува. Нищо не се изпраща.", // nieuw, nalezen
    micUnavailable: 'Микрофонът е изключен. Кажи го на глас сега, после продължи.',
    cantSpeak: 'Сега не мога да говоря',
    soundsSame: 'Звучи еднакво',
    sayAgain: 'Кажи отново',
    hearMine: 'Чуй себе си', // nieuw, nalezen
    thenNow: 'Тогава и сега', // nieuw, nalezen
    thenNowFirst: 'Първият ти опит: {date}', // nieuw, nalezen
    sayTogether: "Кажи го заедно", // nieuw, nalezen
    chorusHint: "Казвай го едновременно с гласа. Нищо не се записва.", // nieuw, nalezen
    chorusAlone: "Сега само ти", // nieuw, nalezen
    speakBrave: "Грешките са част от ученето. Не те разбраха? Кажи го още веднъж.", // nieuw, nalezen
    speakBrave2: "Притеснен ли си? Това е нормално. Кажи го въпреки това.", // nieuw, nalezen
    speakBrave3: "Не е нужно да го казваш перфектно. Просто опитай.", // nieuw, nalezen
    reasonTitle: "Защо учиш нидерландски?", // nieuw, nalezen
    reasonHint: "Избери едно или две.", // nieuw, nalezen
    reasonDone: "Готово", // nieuw, nalezen
    reasonWork: "Да върша добре работата си", // nieuw, nalezen
    reasonKids: "Децата ми", // nieuw, nalezen
    reasonColleagues: "Да говоря с колегите", // nieuw, nalezen
    reasonArrange: "Сам да уреждам нещата", // nieuw, nalezen
    reasonJob: "По-добра работа", // nieuw, nalezen
    reasonHome: "Да се чувствам у дома в Нидерландия", // nieuw, nalezen
    speakMe: 'Аз',
    speakingPractice: 'Упражнение по говорене',
    speakingHint: "Казвай думите на глас и сравнявай. Никой друг не те чува: нищо не се изпраща. Първият ти запис на едно изречение остава в телефона, за да сравниш по-късно.", // nieuw, nalezen
    savingOffline: 'Запазване…',
    savedOffline: 'Запазено офлайн',
    offlineNoSpace: 'Няма достатъчно място на телефона. Изтрий запазена тема или освободи място.',
    offlineFailed: 'Запазването не успя. Провери интернета и опитай пак.',
    pocketCard: 'Джобна карта',
    pocketSave: 'Запази като снимка',
    textSize: 'Размер на текста',
    textNormal: 'Нормален',
    textLarge: 'Голям',
    textXl: 'Много голям',
    showEnglish: 'Показвай и английски',
    genderTitle: 'Жена или мъж?',
    genderHint: 'Така приложението ще се обръща към теб правилно на твоя език.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    genderWoman: 'Жена',
    genderMan: 'Мъж',
    genderNone: 'Предпочитам да не казвам',
    langGuessYes: 'Да',
    langGuessOther: 'Друг език',
    settingsLangMe: 'Език и аз',
    settingsLessons: 'Уроци',
    settingsPhone: 'Този телефон',
    settingOn: 'Включено',
    settingOff: 'Изключено',
    sectorGroupMake: 'Производство и превоз',
    sectorGroupCare: 'Грижа и обслужване',
    sectorGroupShop: 'Магазини и заведения', // nieuw, nalezen
    sectorGroupBuild: 'Строителство и техника', // nieuw (30 okt 2026), nalezen
    voiceWoman: 'Женски глас',
    voiceMan: 'Мъжки глас',
    writingPick: 'Избор на дума',
    settingWriting: 'Писане',
    settingKeepLessons: 'Пази уроците на този телефон',
    settingKeepLessonsHint: 'Текущата тема се запазва на този телефон, така че работи и без интернет. Завършените теми после се изтриват.',
    otherTopicLink: 'Друга тема',
    remindAsk: 'Да ти напомняме ли всеки ден?',
    remindYes: 'Да, след работа',
    remindNo: 'Не, благодаря',
    remindPickTime: 'Кога да ти напомняме?',
    certSaveShare: 'Запази или сподели',
    pauseTitle: 'Пауза',
    back: 'Назад',
    quitLesson: 'Изход от урока',
    playAudio: 'Слушай',
    scrollDown: 'Превърти надолу',
    lessonProgress: 'Напредък в урока',
    mainMenu: 'Главно меню',
    spaceKey: 'Интервал',
    langNotOnPhone: 'Този език още не е на телефона ти. Свържи се с интернет, за да смениш езика.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'Избери час сам', f: 'Избери час сама', x: 'Избери си час' }, // x: nieuw, nalezen
    gateWho: 'Кода ти го дава учителят, наставникът или работодателят.',
    gateTrust: 'Без акаунт. Без име. Всичко остава на този телефон.',
    codeAccepted: 'Кодът е приет',
    startFree: 'Нямаш код? Започни с първите уроци',
    bramHello: 'Радвам се да те видя.',
    bramBack: { m: 'Добре дошъл отново. Продължаваме.', f: 'Добре дошла отново. Продължаваме.', x: 'Ето те отново. Продължаваме.' }, // x: nieuw, nalezen
    bramRested: 'Вчера беше свободният ти ден. Серията продължава.',
    bramDueN: { one: '{n} дума за повторение днес.', other: '{n} думи за повторение днес.' },
    bramDueOne: '{n} дума за повторение днес.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    bramDayN: 'Ден {n} поред.',
    bramDone: { m: 'За днес си готов. До утре.', f: 'За днес си готова. До утре.', x: 'За днес всичко е готово. До утре.' }, // x: nieuw, nalezen
    bramPerfect: 'Много добре. Знаеш тези думи.',
    bramGood: 'Добра работа. Стъпка по стъпка.',
    bramHard: 'Добре, че се упражни. Трудните думи ще се върнат.',
    bramReview: 'Добре. Повторението помага да запомниш.',
    bramIntro: 'Аз съм Bram, твоят колега.',
    bramIntroHello: 'Здравей, аз съм Bram.',
    showDutch: 'Покажи на нидерландски',
    showAnswers: 'Покажи отговорите', // nieuw, nalezen
    lastUpdated: 'Последна актуализация: {date}',
    /* G4 b3 */
    buildListen: 'Слушай и състави изречението',
    chatWhichQuestion: 'Кой въпрос подхожда на този отговор?',
    reviewWaiting: 'Чакат още думи: {n}. Ще се върнат в следващите дни.',
    factTitle: 'Знаеш ли?',
    fact3: { m: 'Не си сам: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.', f: 'Не си сама: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.', x: 'Много хора са като теб: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    fact7: 'От мигрантите, които говорят много добре нидерландски, 69 от 100 имат платена работа.',
    fact14: 'В много библиотеки има Taalhuis („къща на езика“): безплатна помощ, за да учиш нидерландски и занапред.',
    fact30: { m: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Ти си се упражнявал вече 30 дни поред!', f: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Ти си се упражнявала вече 30 дни поред!', x: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Вече 30 дни поред се упражняваш!' }, // x: nieuw, nalezen
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Този файл има {n} урок.', other: 'Този файл има {n} урока.' },
    backupFileOne: 'Този файл има {n} урок.',
    backupPhoneN: { one: 'Имаш {n} урок.', other: 'Имаш {n} урока.' },
    backupPhoneOne: 'Имаш {n} урок.',
    backupFewer: '„Замени“ изтрива уроците, които ги няма във файла. „Обедини“ запазва всичко.',
    backupTooBig: 'Този файл е твърде голям. Файлът на Vloertaal е много по-малък.',
    backupNewPhone: 'Нов телефон? Там също ще ти трябва твоят код.',
    remindEveryDay: 'Напомнянето ти: всеки ден в {time}',
    remindStop: 'Спри напомнянето',
    remindStopped: 'Отвори файла, за да махнеш напомнянето от календара.',
    remindStoppedAndroid: 'Изтрий напомнянето ръчно в Google Календар.',
    resetKeeps: 'Уроците, думите, дните поред и сертификатите ти се изтриват. Езикът и настройките ти остават.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Не се зареди. Има ли интернет?',
    retry: 'Опитай отново',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal не може да стартира.', // nieuw, nalezen
    bootFailedHint: 'Първо запази напредъка си. После започни отначало.', // nieuw, nalezen
    startOver: 'Започни отначало', // nieuw, nalezen
    crashed: 'Нещо се обърка. Напредъкът ти е запазен.', // nieuw, nalezen
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Какво вече знаеш?', // nieuw, nalezen
    toetsOffer: 'Около 10 минути. Няма оценки. Това е само за теб.', // nieuw, nalezen
    toetsEndOffer: { m: 'Научил си много. Направи теста отново и виж какво знаеш сега.', f: 'Научила си много. Направи теста отново и виж какво знаеш сега.', x: 'Вече знаеш много повече. Направи теста отново и виж какво знаеш сега.' }, // nieuw, nalezen
    toetsPartListen: 'Слушане', // nieuw, nalezen
    toetsPartWords: 'Думи', // nieuw, nalezen
    toetsPartSentences: 'Изречения', // nieuw, nalezen
    toetsListenAsk: 'Слушай. Какво означава?', // nieuw, nalezen
    toetsNotSure: 'Не знаеш ли? Натисни „Не знам“. Няма проблем.', // nieuw, nalezen
    toetsMicKeep: 'Записът ти остава само на този телефон. По-късно можеш да се чуеш отново.', // nieuw, nalezen
    toetsStartDone: 'Добро начало! Това вече го знаеш.', // nieuw, nalezen
    toetsEndDone: 'Браво! Виж какво знаеш сега.', // nieuw, nalezen
    toetsYouThen: 'Ти тогава', // nieuw, nalezen
    toetsYouNow: 'Ти сега', // nieuw, nalezen
    toetsKeepGoing: 'Упражнявай се малко всеки ден. Така ще научаваш все повече.', // nieuw, nalezen
    toetsStart: 'Направи теста', // nieuw, nalezen
    toetsIdk: 'Не знам', // nieuw, nalezen
    toetsMore: 'Повече от тогава', // nieuw, nalezen
    toetsSame: 'Горе-долу същото', // nieuw, nalezen
    toetsMoreAll: 'Всичко заедно: сега знаеш повече от тогава.', // nieuw, nalezen
    toetsSameAll: 'Всичко заедно: горе-долу същото като тогава.', // nieuw, nalezen
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Първо 5 въпроса за теб. Няма правилно и грешно.', // nieuw, nalezen
    toetsDurfAsk: 'Смееш ли да го направиш?', // nieuw, nalezen
    toetsDurfUnderstand: 'Да кажеш, че не разбираш нещо', // nieuw, nalezen
    toetsDurfBoss: 'Да попиташ нещо началника си', // nieuw, nalezen
    toetsDurfHelp: 'Да помолиш за помощ', // nieuw, nalezen
    toetsDurfUnsafe: 'Да кажеш, че нещо не е безопасно', // nieuw, nalezen
    toetsDurfBreak: 'Да си поговориш малко с колега в почивката', // nieuw, nalezen
    toetsDurfNotYet: 'Още не', // nieuw, nalezen
    toetsDurfABit: 'Малко', // nieuw, nalezen
    toetsDurfYes: 'Да', // nieuw, nalezen
    toetsDurfAgain: 'След няколко седмици ще попитаме пак.', // nieuw, nalezen
    tempo: 'Темпо', // nieuw, nalezen
    tempoCalm: 'Спокойно', // nieuw, nalezen
    tempoNormal: 'Нормално', // nieuw, nalezen
    tempoHint: 'Спокойно е бавно и ясно. Нормално е както говорят колегите. Избери „Нормално“, ако вече разбираш много.', // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Покажи как върви', // nieuw, nalezen
    coachCardIntro: 'Тази карта показва напредъка ти. Покажи я на учителя, на наставника или на шефа си. Ти решаваш.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    coachCardNo: 'Можеш да кажеш и „не“.', // nieuw, nalezen
    coachCardKeep: 'Телефонът ти прави картата. Нищо не се изпраща. Vloertaal не пази нищо.', // nieuw, nalezen
    coachCardWhat: 'На картата, на нидерландски:', // nieuw, nalezen
    coachTopics: 'Завършени теми', // nieuw, nalezen
    coachDays: 'Дни с упражнения през последните 4 седмици', // nieuw, nalezen
    coachLast: 'Последен урок, с датата', // nieuw, nalezen
    coachCode: 'Код: същите числа накратко, за преглед на групата. Без име.', // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Телефонът слуша (проба)', // nieuw, nalezen
    listenHint: 'След като кажеш нещо, телефонът показва дали те е разбрал. Това става в самия телефон. Нищо не отива при нас или при други.', // nieuw, nalezen
    listenNeedsPack: 'Първо телефонът има нужда от нидерландски. Това е голямо изтегляне: ползвай Wi-Fi.', // nieuw, nalezen
    listenDownload: 'Изтегли нидерландски', // nieuw, nalezen
    listenNotNow: 'Не сега', // nieuw, nalezen
    listenDownloading: 'Нидерландският се тегли. Опитай пак по-късно.', // nieuw, nalezen
    listenFailed: 'Не стана. Опитай пак по-късно, с Wi-Fi.', // nieuw, nalezen
    listenPrivacy: 'Слуша само телефонът. Нищо не се изпраща.', // nieuw, nalezen
    heardWait: 'Телефонът слуша…', // nieuw, nalezen
    heardOk: 'Разбрано', // nieuw, nalezen
    heardAlmost: 'Почти: кажи {word} още веднъж', // nieuw, nalezen
    heardNotYet: 'Още не е разбрано', // nieuw, nalezen
    goOnAnyway: 'Все пак напред', // nieuw, nalezen
    fasterAsk: 'Искаш ли по-бързо?', // nieuw, nalezen
    fasterHint: 'По-малко обяснения в новите уроци. Нидерландският с нормално темпо.', // nieuw, nalezen
    fasterYes: 'Да', // nieuw, nalezen
    fasterNo: 'Не', // nieuw, nalezen
    easierNext: 'Следващият урок е малко по-кратък.', // nieuw, nalezen
    fasterSetting: 'Учи по-бързо', // nieuw, nalezen
    fasterSettingHint: 'Включено: по-малко обяснения в новите уроци и нидерландски с нормално темпо. Изключено: както преди.', // nieuw, nalezen
    feelAsk: 'Как ти харесва Vloertaal?', // nieuw, nalezen
    feelGood: 'Добре', // nieuw, nalezen
    feelOk: 'Горе-долу', // nieuw, nalezen
    feelBad: 'Не е добре', // nieuw, nalezen
    feelThanks: 'Благодарим! Това ни помага да направим Vloertaal по-добър.', // nieuw, nalezen
    tempoFasterHint: 'Учи по-бързо: по-малко обяснения в новите уроци и нидерландски с нормално темпо.', // nieuw, nalezen
    samenTitle: 'Упражнявайте се заедно', // nieuw, nalezen
    samenRowHint: 'Двама души, един телефон', // nieuw, nalezen
    samenIntro: 'Упражнявай се с колега, приятел или учител. Четете поред.', // nieuw, nalezen
    samenHow: 'Човек 1 е колегата. Човек 2 отговаря.', // nieuw, nalezen
    samenNoScore: 'Нищо не се записва. Няма оценка.', // nieuw, nalezen
    samenPerson: 'Човек {n}', // nieuw, nalezen
    samenAnswer: 'Отговор', // nieuw, nalezen
    samenHear: 'Чуй', // nieuw, nalezen
    samenNext: 'Напред', // nieuw, nalezen
    samenTranslation: 'Превод', // nieuw, nalezen
    samenEnd: 'Браво! Да смените ли ролите и да го направите още веднъж?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    samenSwap: 'Сменете ролите', // nieuw, nalezen
    samenStop: 'Готово', // nieuw, nalezen
    checkStart: 'Знам това: кратка проверка', // nieuw, nalezen
    checkPassed: 'Вече знаеш това. Да отметнеш ли тази тема?', // nieuw, nalezen
    checkNoCert: 'Тогава още няма сертификат. Ще го получиш след уроците.', // nieuw, nalezen
    checkNotYet: 'Уроците ти помагат с тази тема.', // nieuw, nalezen
    checkMark: 'Отметни', // nieuw, nalezen
    checkVia: 'чрез проверка', // nieuw, nalezen
    checkUndo: 'Все пак направи уроците', // nieuw, nalezen
    commLabel: 'Комуникация', // nieuw, nalezen
    shareInvite: 'Уча нидерландски за работата си с Vloertaal. Безплатно е: {link}', // nieuw, nalezen
    briefjeWhat: 'Vloertaal е безплатно приложение за учене на нидерландски за работа.', // nieuw, nalezen
    briefjeHow: 'Кратки уроци на твоя телефон, с помощ на твоя език. Без акаунт.', // nieuw, nalezen
    briefjeOpen: 'Отвори на телефона си:', // nieuw, nalezen
    workTry: 'Опитай днес на работа', // nieuw, nalezen
    workTryWhen: 'Кога:', // nieuw, nalezen
    workTryThen: 'Тогава кажи:', // nieuw, nalezen
    colleagueCard: 'За колегата', // nieuw, nalezen
    colleagueCardHint: 'Покажи това на колега, който говори нидерландски. Там пише как може да ти помогне да се упражняваш.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    colleagueShare: 'Изпрати на колегата', // nieuw, nalezen
    forCoach: 'За твоя наставник', // nieuw, nalezen
    rulesInDutch: 'Как се работи тук, на прост нидерландски. Телефонът чете на глас.', // nieuw, nalezen
    bridgeTextOne: 'Вече знаеш много нидерландски. При всяка тема можеш да прочетеш и как се работи тук, на прост нидерландски.', // nieuw, nalezen
    noHelpLanguage: 'Без: говоря нидерландски', // nieuw, nalezen
    kaartSaid: 'Изречения, казани на работа', // nieuw, nalezen
    kaartHard: 'Думи, които още са трудни', // nieuw, nalezen
    kaartRules: 'Уроци за това как се работи тук', // nieuw, nalezen
    coachCardRights: 'Показвай по име темите за твоите права', // nieuw, nalezen
    speakFromMemory: 'Сега наизуст: как беше на нидерландски?', // nieuw, nalezen
    keptNofM: 'Думи отпреди 2 седмици или повече: още помниш {n} от {m}.', // nieuw, nalezen
    verbSecond: 'Глаголът е на място 2.', // nieuw, nalezen
    calmScreen: 'Спокоен екран', // nieuw, nalezen
    calmAuto: 'Като телефона ти', // nieuw, nalezen
    calmHint: 'Включено: нищо не се движи, няма празнуване на серията след урок, а серията и думите не са на началния екран.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    infoMore: 'Повече обяснения', // nieuw, nalezen
    tipsAbout: 'За тези съвети', // nieuw, nalezen
    tipsNotChecked: 'Експерт още не е проверил това обяснение.', // nieuw, nalezen
    lawStale: 'Дата на това обяснение: {month}. За най-новите правила провери в Juridisch Loket или в Work in NL.', // nieuw, nalezen
    lawStaleBe: 'Дата на това обяснение: {month}. За най-новите правила провери в justitiehuis или на werk.belgie.be.', // nieuw, nalezen
    aboutMore: 'Повече за Vloertaal', // nieuw, nalezen
    geluktAsk: 'Каза ли това на работа?', // nieuw, nalezen
    geluktYes: 'Да, получи се', // nieuw, nalezen
    geluktNotYet: 'Още не', // nieuw, nalezen
    geluktDoneN: { one: 'Браво! Вече {n} изречение се получи на работа.', other: 'Браво! Вече {n} изречения се получиха на работа.' }, // nieuw, nalezen
    geluktDoneOne: 'Браво! Първото ти изречение на работа се получи.', // nieuw, nalezen
    geluktWhere: 'Ще ги намериш в Настройки.', // nieuw, nalezen
    geluktTitle: 'Получи се на работа', // nieuw, nalezen
    geluktListHint: 'Тези изречения каза на работа.', // nieuw, nalezen
    nextMinutesN: 'около {n} мин.', // nieuw, nalezen
    saveFailed: 'Напредъкът ти не е запазен. Телефонът пълен ли е? Освободи малко място. Или отвори Настройки: „Запази напредъка си“.', // nieuw, nalezen
    bewaarNudge: 'Телефонът понякога може да изтрие напредъка ти. Затова запази копие.', // nieuw, nalezen
    bewaarGo: 'Запази сега', // nieuw, nalezen
    backupShare: 'Изпрати на себе си', // nieuw, nalezen
    backupShareHint: 'Изпрати файла на себе си, например в WhatsApp или по имейл.', // nieuw, nalezen
    backupMade: 'Готово. Пази добре този файл. С него по-късно ще върнеш напредъка си.', // nieuw, nalezen
    speakTurnPrompt: 'Какво казваш?', // nieuw, nalezen
    speakTurnExample: 'Пример', // nieuw, nalezen
    speakTurnReveal: 'Чуй отговора', // nieuw, nalezen
    sceneTitle: 'Слушай на работа', // nieuw, nalezen
    sceneIntro: 'Има шум, като на работа. Слушай. После идват въпросите.', // nieuw, nalezen
    buildFront: 'Сложи отбелязаната дума в началото', // nieuw, nalezen
    bridgeTitle: 'Правилата в работата', // nieuw, nalezen
    bridgeText: 'Вече знаеш много нидерландски. Искаш ли да научиш и правилата в работата? Тогава всичко е на нидерландски.', // nieuw, nalezen
    bridgeGo: 'Да, покажи', // nieuw, nalezen
    klankTitle: 'Как се казва?', // nieuw, nalezen
    klankHint: 'Докосни звук. Виж как го прави устата.', // nieuw, nalezen
    klankSpeed: 'Скорост', // nieuw, nalezen
    klankScrub: 'Думата, звук по звук', // nieuw, nalezen
    tagSound: 'Звук', // nieuw, nalezen
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Първи стъпки',
    'theme.safe': 'Безопасна работа',
    'theme.find': 'Търсене на работа',
    'theme.job': 'Твоята работа',
    'theme.together': 'Работа в екип',
    'theme.rights': 'Твоите права',
    'theme.life': 'Живот в Нидерландия',
    'theme.sector': 'Твоят сектор',
    // Units
    'u.firstday': 'Първи работен ден',
    'u.help': 'Как да поискаш помощ',
    'u.safety': 'Безопасността на първо място',
    'u.emergency': "Когато нещо се обърка", // nieuw, nalezen
    'u.warehouse': 'В склада',
    'u.time': 'Време и график',

    // Lessons
    'l.hello': 'Поздрави',
    'l.people': 'Хора на работа',
    'l.understand': 'Не разбирам',
    'l.gear': 'Предпазни средства',
    'l.danger': 'Опасност!',
    'l.accident': 'Как да съобщиш за злополука',
    'l.things': 'Неща в склада',
    'l.directions': 'Посоки и действия',
    'l.shift': 'Моята смяна',
    'l.sick': 'Обаждане при болест',

    // Words
    'w.hallo': 'здравей',
    'w.goedemorgen': 'добро утро',
    'w.dankjewel': 'благодаря',
    'w.ja': 'да',
    'w.nee': 'не',
    'w.totmorgen': 'до утре',
    'w.collega': 'колегата',
    'w.baas': 'шефът',
    'w.leidinggevende': 'прекият ръководител',
    'w.werk': 'работата',
    'w.naam': 'името',
    'w.nieuw': 'нов',
    'w.begrijpniet': 'не разбирам',
    'w.nogeenkeer': 'още веднъж',
    'w.langzaam': 'бавно',
    'w.helpen': 'помагам',
    'w.waar': 'къде',
    'w.wc': 'тоалетната',
    'w.helm': 'каската',
    'w.handschoenen': 'ръкавиците',
    'w.veiligheidsschoenen': 'предпазните обувки',
    'w.hesje': 'светлоотразителната жилетка',
    'w.bril': 'предпазните очила',
    'w.dragen': 'нося',
    'w.pasop': 'внимавай',
    'w.stop': 'стоп',
    'w.help': 'помощ',
    'w.brand': 'пожарът',
    'w.nooduitgang': 'аварийният изход',
    'w.ongeluk': 'злополуката',
    'w.gewond': 'ранен',
    'w.bloeden': 'кървя',
    'w.ehbodoos': 'аптечката за първа помощ',
    'w.bhver': 'служителят за спешни случаи във фирмата (първа помощ, пожар, евакуация)',
    'w.ziekenhuis': 'болницата',
    'w.gebeuren': 'случва се',
    'w.doos': 'кашонът',
    'w.pallet': 'палетът',
    'w.heftruck': 'мотокарът',
    'w.kar': 'количката',
    'w.stelling': 'стелажът',
    'w.scanner': 'скенерът',
    'w.links': 'наляво',
    'w.rechts': 'надясно',
    'w.boven': 'горе',
    'w.beneden': 'долу',
    'w.tillen': 'вдигам',
    'w.pakken': 'взимам',
    'w.dienst': 'смяната',
    'w.pauze': 'почивката',
    'w.beginnen': 'започвам',
    'w.klaar': 'готов',
    'w.telaat': 'със закъснение',
    'w.morgen': 'утре',
    'w.ziek': 'болен',
    'w.bellen': 'обаждам се (по телефона)',
    'w.dokter': 'лекарят',
    'w.pijn': 'болката',
    'w.vandaag': 'днес',
    'w.beter': 'по-добре',

    // Sentences
    's.hello.1': { m: 'Здравей, нов съм.', f: 'Здравей, нова съм.', x: 'Здравей, аз съм нов човек тук.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.hello.2': 'Добро утро, аз съм Али.',
    's.hello.3': 'Благодаря, до утре!',
    's.people.1': 'Казвам се Сара.',
    's.people.2': 'Кой е шефът?',
    's.people.3': { m: 'Аз съм нов колега.', f: 'Аз съм нова колежка.', x: 'Аз съм нов човек в екипа.' }, // x: nieuw, nalezen
    's.understand.1': 'Може ли да повторите?',
    's.understand.2': 'Може ли да говорите по-бавно?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.understand.3': 'Къде е тоалетната?',
    's.gear.1': 'Винаги носи каската си.',
    's.gear.2': 'Къде са ръкавиците?',
    's.gear.3': 'Нося светлоотразителната си жилетка.',
    's.danger.1': 'Внимавай, подът е мокър!',
    's.danger.2': 'Къде е аварийният изход?',
    's.danger.3': 'Има злополука!',
    'l.alarm': 'Пожарна аларма и евакуация', // nieuw, nalezen
    'w.alarm': 'алармата', // nieuw, nalezen
    'w.ontruimen': 'евакуирам (всички излизат от сградата)', // nieuw, nalezen
    'w.vluchtroute': 'евакуационният път', // nieuw, nalezen
    'w.trap': 'стълбите', // nieuw, nalezen
    'w.verzamelplaats': 'мястото за събиране (където всички се събират навън)', // nieuw, nalezen
    'w.brandblusser': 'пожарогасителят', // nieuw, nalezen
    's.alarm.1': 'Къде е пожарогасителят?', // nieuw, nalezen
    's.alarm.2': 'Трябва да евакуираме сградата.', // nieuw, nalezen
    's.alarm.3': 'Използвай стълбите, не асансьора.', // nieuw, nalezen
    's.accident.1': 'Колегата ми падна.',
    's.accident.2': 'Порязах се.',
    's.accident.3': 'Искам да съобщя за злополука.',
    's.things.1': 'Сложи кашона на палета.',
    's.things.2': 'Къде е скенерът?',
    's.things.3': 'Мотокарът идва.',
    's.directions.1': 'Кашонът е отляво.',
    's.directions.2': 'Вдигай с краката.',
    's.directions.3': 'Иди надясно.',
    's.shift.1': 'Смяната ми започва в седем часа.',
    's.shift.2': 'Кога е почивката?',
    's.shift.3': 'Извинете, закъснях.',
    's.sick.1': { m: 'Днес съм болен.', f: 'Днес съм болна.', x: 'Днес съм болен / болна.' }, // x: nieuw, nalezen
    's.sick.2': 'Боли ме гърбът.',
    's.sick.3': 'Обаждам се на лекаря.',
    'c.hello.q': 'Приятна вечер!',
    'c.hello.a': 'До утре!',
    'c.people.q': 'Как се казваш?',
    'c.people.a': 'Казвам се Сара.',
    'l.arrive': 'Първият ден: как да намериш пътя',
    'w.ingang': 'входът',
    'w.receptie': 'рецепцията',
    'w.kantine': 'столът',
    'w.kleedkamer': 'съблекалнята',
    'w.buddy': 'наставникът (колега, който ти помага в началото)',
    'w.vinden': 'намирам',
    's.arrive.1': 'При кого трябва да се явя?',
    's.arrive.2': 'Не мога да намеря съблекалнята.',
    's.arrive.3': 'Кой е моят наставник днес?',
    'c.arrive.q': 'Добро утро, по какъв въпрос идвате?',
    'c.arrive.a': { m: 'Нов съм. Започвам днес.', f: 'Нова съм. Започвам днес.', x: 'Аз съм нов човек тук. Започвам днес.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.understand.q': 'Разбираш ли?',
    'c.understand.a': 'Не, още веднъж, моля.',
    'c.gear.q': 'Носиш ли си каската?',
    'c.gear.a': 'Да, нося я.',
    'c.danger.q': 'Има ли злополука?',
    'c.danger.a': 'Да, обади се на 112!',
    'c.alarm.q': 'Всички ли са навън?', // nieuw, nalezen
    'c.alarm.a': 'Не, колегата ми още го няма.', // nieuw, nalezen
    'c.accident.q': 'Какво се случи?',
    'c.accident.a': 'Падна. Кърви.',
    'l.notyet': 'Това още не са ме учили',
    'w.nogniet': 'още не',
    'w.mogen': 'мога (имам право)',
    'w.proberen': 'опитвам',
    'w.voordoen': 'показвам как (като го направя първо)',
    'w.gevaarlijk': 'опасен',
    'w.uitleg': 'обяснението',
    's.notyet.1': { m: 'Още не съм научил това.', f: 'Още не съм научила това.', x: 'Още не са ме учили на това.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.notyet.2': 'Още никой не ми е обяснил.',
    's.notyet.3': { m: 'Мога ли вече да го правя сам?', f: 'Мога ли вече да го правя сама?', x: 'Мога ли вече да го правя самостоятелно?' }, // x: nieuw, nalezen
    'c.notyet.q': 'Просто опитай, лесно е.',
    'c.notyet.a': 'Можеш ли първо да ми покажеш как?',
    'c.things.q': 'Къде да отиде кашонът?',
    'c.things.a': 'На палета.',
    'c.directions.q': 'Наляво или надясно?',
    'c.directions.a': 'Надясно, до стелажа.',
    'c.shift.q': 'Кога започва твоята смяна?',
    'c.shift.a': 'Утре в седем часа.',
    'c.sick.q': { m: 'Болен ли си?', f: 'Болна ли си?', x: 'Зле ли се чувстваш?' }, // x: nieuw, nalezen
    'c.sick.a': 'Да, днес оставам вкъщи.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Обади се на 112!',
    'p.hurt': { m: 'Ранен съм.', f: 'Ранена съм.', x: 'Имам нараняване.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Събиране на поръчки", // nieuw, nalezen
    'w.artikel': "артикулът (един продукт)", // nieuw, nalezen
    'w.vak': "клетката (едно място на стелажа)", // nieuw, nalezen
    'w.sticker': "стикерът, етикетът", // nieuw, nalezen
    'w.verzamelen': "събирам", // nieuw, nalezen
    'w.ontbreken': "липсва (няма го)", // nieuw, nalezen
    'w.locatie': "локацията (кодът на мястото, например A-12)", // nieuw, nalezen
    's.picking.1': "Събирам артикулите за тази поръчка.", // nieuw, nalezen
    's.picking.2': "Този артикул липсва. Клетката е празна.", // nieuw, nalezen
    's.picking.3': "Стикерът трябва да е на кашона.", // nieuw, nalezen
    'c.picking.q': "Коя е локацията?", // nieuw, nalezen
    'c.picking.a': "Пътека три, клетка дванайсет.", // nieuw, nalezen
    'l.loading': "Товарене и разтоварване", // nieuw, nalezen
    'w.vrachtwagen': "камионът", // nieuw, nalezen
    'w.chauffeur': "шофьорът", // nieuw, nalezen
    'w.lossen': "разтоварвам (вадя нещата от камиона)", // nieuw, nalezen
    'w.pompwagen': "палетната количка (ръчна количка, която вдига палет)", // nieuw, nalezen
    'w.folie': "фолиото (тънка пластмаса около палет)", // nieuw, nalezen
    'w.vrachtbrief': "товарителницата (листът, на който пише какво има в камиона)", // nieuw, nalezen
    's.loading.1': "Камионът е на врата четири.", // nieuw, nalezen
    's.loading.2': "Първо разтоварваме тези палети.", // nieuw, nalezen
    's.loading.3': "Шофьорът чака товарителницата.", // nieuw, nalezen
    'c.loading.q': "Готов ли е този палет?", // nieuw, nalezen
    'c.loading.a': "Не, трябва още да се увие с фолио.", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Как се прави това?", // nieuw, nalezen
    'w.hoe': "как", // nieuw, nalezen
    'w.zo': "така, по този начин", // nieuw, nalezen
    'w.moeilijk': "труден", // nieuw, nalezen
    'w.makkelijk': "лесен", // nieuw, nalezen
    'w.weten': "знам", // nieuw, nalezen
    'w.klopt': "вярно е", // nieuw, nalezen
    's.howto.1': "Как се прави това?", // nieuw, nalezen
    's.howto.2': "Това е трудно за мен.", // nieuw, nalezen
    's.howto.3': "Добре ли го правя така?", // nieuw, nalezen
    'c.howto.q': "Знаеш ли как се прави това?", // nieuw, nalezen
    'c.howto.a': "Не, това още не го знам.", // nieuw, nalezen
    'l.mayask': "Може ли да попитам нещо?", // nieuw, nalezen
    'w.vragen': "питам", // nieuw, nalezen
    'w.wie': "кой", // nieuw, nalezen
    'w.even': "за малко", // nieuw, nalezen
    'w.tijd': "времето", // nieuw, nalezen
    'w.storen': "преча (на някого, който е зает)", // nieuw, nalezen
    'w.twijfelen': "колебая се (не знаеш със сигурност)", // nieuw, nalezen
    's.mayask.1': "Може ли да попитам нещо?", // nieuw, nalezen
    's.mayask.2': "Извинявай, че преча.", // nieuw, nalezen
    's.mayask.3': "Кой може да ми помогне?", // nieuw, nalezen
    'c.mayask.q': "Имаш ли въпрос?", // nieuw, nalezen
    'c.mayask.a': "Да. Имаш ли малко време?", // nieuw, nalezen
    'l.whereis': "Къде е?", // nieuw, nalezen
    'w.hier': "тук", // nieuw, nalezen
    'w.daar': "там", // nieuw, nalezen
    'w.kwijt': "изгубен (не можеш да го намериш)", // nieuw, nalezen
    'w.uitgang': "изходът", // nieuw, nalezen
    'w.aanwijzen': "посочвам (показвам къде е)", // nieuw, nalezen
    'w.naast': "до", // nieuw, nalezen
    's.whereis.1': "Загубих се.", // nieuw, nalezen
    's.whereis.2': "Къде е изходът?", // nieuw, nalezen
    's.whereis.3': "Тоалетната е там, до стола.", // nieuw, nalezen
    'c.whereis.q': "Можеш ли да го намериш?", // nieuw, nalezen
    'c.whereis.a': "Не. Можеш ли да го посочиш?", // nieuw, nalezen
  },
};

export default lang;
