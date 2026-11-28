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
    themeSand: 'Пясък', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Пристанище', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Работно яке', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Тъмен',
    voice: 'Нидерландски глас',
    voiceAuto: 'Автоматично',
    voiceHint: 'Докосни 🔊, за да чуеш. Гласовете на Vloertaal звучат еднакво на всеки телефон; другите идват от телефона ти.',
    voiceNone: 'На това устройство няма нидерландски глас. Можеш да добавиш такъв от настройките на телефона (Синтез на реч).',
    appTagline: 'Нидерландски за работното място',
    chooseLanguage: 'Избери език за помощ',
    englishOnly: 'Само английски',
    beta: 'Преводът още не е проверен', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'ден поред', other: 'дни поред' },
    streakStarted: 'Серията ти от дни започна! Ела пак утре.',
    streakGrew: { one: '{n} ден поред! Продължавай така.', other: '{n} дни поред! Продължавай така.' },
    start: 'Започни',
    practice: 'Упражни се отново', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    locked: 'Първо завърши предишния урок',
    newWord: 'Нова дума',
    tapToHear: 'Докосни, за да чуеш',
    sayItAloud: 'Кажи го на глас.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Кажи го тихо или наум.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Какво означава това?',
    snapQuestion: 'Разбираш ли?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Да, добре.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Добре, че питаш!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Разбра правилно!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Виждаш ли? По-добре беше да попиташ.', // nieuw, nalezen // nagelezen AI 28 nov
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
    rightAnswerIs: 'Правилният отговор е:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'Най-добрият отговор е:', // nieuw, nalezen // nagelezen AI 28 nov
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
    who113: 'Мислиш да сложиш край на живота си или се тревожиш за някого. Безплатно, денем и нощем.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Насилие или малтретиране у дома, срещу теб или срещу друг човек. Безплатно, може и анонимно.', // nieuw, nalezen // nagelezen AI 28 nov
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
    countryHint: 'Ще получиш думите и съветите за тази страна.', // nieuw, nalezen (AI-correctie 28 nov 2026)
    onePhoneTitle: 'Това, което учиш, е само на този телефон.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Използвай винаги този телефон.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
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
    sectorRetail: 'Магазин и супермаркет', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Почистване',
    sectorHorticulture: 'Градинарство', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Техническа работа', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    sectorGarage: 'Автосервиз', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Звук',
    soundOn: 'Със звук',
    withoutSound: 'Без звук',
    quietHint: 'Без звук уроците нямат упражнения за слушане и нищо не се пуска само. Докосни 🔊, за да чуеш дума, например със слушалки.',
    soundOffToast: 'Без звук. Можеш да включиш звука от Настройки.',
    noInternetSound: 'Няма интернет: звукът сега не работи.', // nieuw, nalezen // nagelezen AI 28 nov
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
    reviewFirstHint: 'Първо преговор. Така ще запомниш повече.', // nieuw, nalezen // nagelezen AI 28 nov
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
    remindAddedAsk: 'Добавено? Тогава ще го видиш в календара.', // nieuw, nalezen // nagelezen AI 28 nov
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
    countHint: 'Приложението брои колко често се правят уроците и колко време отнемат приблизително. И дали някъде в приложението има грешка. Без име, без акаунт, без следене.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Сертификат',
    myCertificates: 'Моите сертификати',
    certsEmpty: 'Завърши всички уроци от една тема. Тогава получаваш сертификат.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certEarned: 'Имаш сертификат!',
    certEarnedHint: 'Всички уроци от тази тема са завършени.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    privacyLink: 'Прочети декларацията за поверителност (на нидерландски)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Какво искаш да учиш?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Нидерландски за работа и как се работи тук', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Вече говоря нидерландски: само правилата в работата', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Учене на нидерландски', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Към Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Всичко ще е на нидерландски. Езикът за помощ се изключва.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Докато не се върнеш, преговаряш правила, а не думи.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Напредъкът ти остава запазен. Можеш да се върнеш оттук.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Да, към Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'По раздели',
    inOrder: 'По ред',
    searchTopics: 'Търсене на тема', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Няма тема с тази дума.', // nieuw, nalezen // nagelezen AI 28 nov
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
    micPrivacy: "Никой друг не те чува. Нищо не се изпраща.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Микрофонът е изключен. Кажи го на глас сега, после продължи.',
    cantSpeak: 'Сега не мога да говоря',
    soundsSame: 'Звучи еднакво',
    sayAgain: 'Кажи отново',
    hearMine: 'Чуй себе си', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Тогава и сега', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Първият ти опит: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Кажи го заедно", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Казвай го едновременно с гласа. Нищо не се записва.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Сега само ти", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Грешките са част от ученето. Не те разбраха? Кажи го още веднъж.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Притесняваш ли се? Това е нормално. Кажи го въпреки това.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave3: "Не е нужно да го казваш перфектно. Просто опитай.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Защо учиш нидерландски?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Избери едно или две.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Готово", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Да върша добре работата си", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Децата ми", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Да говоря с колегите", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Да уреждам нещата самостоятелно", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonJob: "По-добра работа", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Да се чувствам у дома в Нидерландия", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'Аз',
    speakingPractice: 'Упражнение по говорене',
    speakingHint: "Казвай думите на глас и сравнявай. Никой друг не те чува: нищо не се изпраща. Първият ти запис на едно изречение остава в телефона, за да сравниш по-късно.", // nieuw, nalezen // nagelezen AI 28 nov
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
    genderHint: 'Така приложението ще се обръща към теб правилно на твоя език.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    sectorGroupCare: "Грижа за хора и деца", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Магазини и заведения', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Строителство и техника', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
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
    remindChooseOwn: { m: 'Избери час сам', f: 'Избери час сама', x: 'Избери си час' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    gateWho: 'Кода ти го дава учителят, наставникът или работодателят.',
    gateTrust: 'Без акаунт. Без име. Всичко остава на този телефон.',
    codeAccepted: 'Кодът е приет',
    startFree: 'Нямаш код? Започни с първите уроци',
    bramHello: 'Радвам се да те видя.',
    bramBack: { m: 'Добре дошъл отново. Продължаваме.', f: 'Добре дошла отново. Продължаваме.', x: 'Ето те отново. Продължаваме.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramRested: 'Вчера беше свободният ти ден. Серията продължава.',
    bramDueN: { one: '{n} дума за повторение днес.', other: '{n} думи за повторение днес.' },
    bramDueOne: '{n} дума за повторение днес.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    bramDayN: 'Ден {n} поред.',
    bramDone: { m: 'За днес си готов. До утре.', f: 'За днес си готова. До утре.', x: 'За днес всичко е готово. До утре.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramPerfect: 'Много добре. Знаеш тези думи.',
    bramGood: 'Добра работа. Стъпка по стъпка.',
    bramHard: 'Добре, че се упражни. Трудните думи ще се върнат.',
    bramReview: 'Добре. Повторението помага да запомниш.',
    bramIntro: 'Аз съм Bram, твоят колега.',
    bramIntroHello: 'Здравей, аз съм Bram.',
    showDutch: 'Покажи на нидерландски',
    showAnswers: 'Покажи отговорите', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Последна актуализация: {date}',
    /* G4 b3 */
    buildListen: 'Слушай и състави изречението',
    chatWhichQuestion: 'Кой въпрос подхожда на този отговор?',
    reviewWaiting: 'Чакат още думи: {n}. Ще се върнат в следващите дни.',
    factTitle: 'Знаеш ли?',
    fact3: { m: 'Не си сам: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.', f: 'Не си сама: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.', x: 'Много хора са като теб: над 3 милиона възрастни в Нидерландия трудно четат, смятат или работят с компютър. Упражненията помагат.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    fact7: 'От мигрантите, които говорят много добре нидерландски, 69 от 100 имат платена работа.',
    fact14: 'В много библиотеки има Taalhuis („къща на езика“): безплатна помощ, за да учиш нидерландски и занапред.',
    fact30: { m: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Ти си се упражнявал вече 30 дни поред!', f: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Ти си се упражнявала вече 30 дни поред!', x: 'По малко упражнения всеки ден помагат повече, отколкото много наведнъж от време на време. Вече 30 дни поред се упражняваш!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
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
    resetKeeps: 'Уроците, думите, дните поред и сертификатите ти се изтриват. Езикът и настройките ти остават.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Не се зареди. Има ли интернет?',
    retry: 'Опитай отново',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal не може да стартира.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Първо запази напредъка си. После започни отначало.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Започни отначало', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Нещо се обърка. Напредъкът ти е запазен.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Какво вече знаеш?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Около 10 минути. Няма оценки. Това е само за теб.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: { m: 'Научил си много. Направи теста отново и виж какво знаеш сега.', f: 'Научила си много. Направи теста отново и виж какво знаеш сега.', x: 'Вече знаеш много повече. Направи теста отново и виж какво знаеш сега.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Слушане', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Думи', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Изречения', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Слушай. Какво означава?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Не знаеш ли? Натисни „Не знам“. Няма проблем.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Записът ти остава само на този телефон. По-късно можеш да се чуеш отново.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Добро начало! Това вече го знаеш.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Браво! Виж какво знаеш сега.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Ти тогава', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Ти сега', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Упражнявай се малко всеки ден. Така ще научаваш все повече.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Направи теста', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Не знам', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Повече от тогава', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Горе-долу същото', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Всичко заедно: сега знаеш повече от тогава.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Всичко заедно: горе-долу същото като тогава.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Първо 5 въпроса за теб. Няма правилно и грешно.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Смееш ли да го направиш?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Да кажеш, че не разбираш нещо', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Да попиташ нещо началника си', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Да помолиш за помощ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Да кажеш, че нещо не е безопасно', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Да си поговориш малко с колега в почивката', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Още не', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Малко', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Да', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'След няколко седмици ще попитаме пак.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Темпо', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Спокойно', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Нормално', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Спокойно е бавно и ясно. Нормално е както говорят колегите. Избери „Нормално“, ако вече разбираш много.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Покажи как върви', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Тази карта показва напредъка ти. Покажи я на учителя, на наставника или на шефа си. Ти решаваш.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    coachCardNo: 'Можеш да кажеш и „не“.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Телефонът ти прави картата. Нищо не се изпраща. Vloertaal не пази нищо.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'На картата, на нидерландски:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Завършени теми', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Дни с упражнения през последните 4 седмици', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Последен урок, с датата', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Код: същите числа накратко, за преглед на групата. Без име.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Телефонът слуша (проба)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: 'След като кажеш нещо, телефонът показва дали те е разбрал. Това става в самия телефон. Нищо не отива при нас или при други.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Първо телефонът има нужда от нидерландски. Това е голямо изтегляне: ползвай Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Изтегли нидерландски', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Не сега', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Нидерландският се тегли. Опитай пак по-късно.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Не стана. Опитай пак по-късно, с Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Слуша само телефонът. Нищо не се изпраща.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Телефонът слуша…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Разбрано', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Почти: кажи {word} още веднъж', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Още не е разбрано', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Все пак напред', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Искаш ли по-бързо?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'По-малко обяснения в новите уроци. Нидерландският с нормално темпо.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Да', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Не', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Следващият урок е малко по-кратък.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Учи по-бързо', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Включено: по-малко обяснения в новите уроци и нидерландски с нормално темпо. Изключено: както преди.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Как ти харесва Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Добре', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Горе-долу', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Не е добре', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Благодарим! Това ни помага да направим Vloertaal по-добър.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Учи по-бързо: по-малко обяснения в новите уроци и нидерландски с нормално темпо.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Упражнявайте се заедно', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Двама души, един телефон', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Упражнявай се с колега, приятел или учител. Четете поред.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'Човек 1 е колегата. Човек 2 отговаря.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Нищо не се записва. Няма оценка.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Човек {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Отговор', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Чуй', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Напред', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Превод', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Браво! Да смените ли ролите и да го направите още веднъж?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    samenSwap: 'Сменете ролите', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Готово', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Знам това: кратка проверка', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Вече знаеш това. Да отметнеш ли тази тема?', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'Тогава още няма сертификат. Ще го получиш след уроците.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Уроците ти помагат с тази тема.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'Отметни', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'чрез проверка', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Все пак направи уроците', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: 'Комуникация', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Уча нидерландски за работата си с Vloertaal. Безплатно е: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal е безплатно приложение за учене на нидерландски за работа.', // nieuw, nalezen
    briefjeHow: 'Кратки уроци на твоя телефон, с помощ на твоя език. Без акаунт.', // nieuw, nalezen
    briefjeOpen: 'Отвори на телефона си:', // nieuw, nalezen
    workTry: 'Опитай днес на работа', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Кога:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Тогава кажи:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'За колегата', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Покажи това на колега, който говори нидерландски. Там пише как може да ти помогне да се упражняваш.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    colleagueShare: 'Изпрати на колегата', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'За твоя наставник', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Как се работи тук, на прост нидерландски. Телефонът чете на глас.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Вече знаеш много нидерландски. При всяка тема можеш да прочетеш и как се работи тук, на прост нидерландски.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Без: говоря нидерландски', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Изречения, казани на работа', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Думи, които още са трудни', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Уроци за това как се работи тук', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Показвай по име темите за твоите права', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Сега наизуст: как беше на нидерландски?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Думи отпреди 2 седмици или повече: още помниш {n} от {m}.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'Глаголът е на място 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Точки', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Всички твои точки', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Атмосфера', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Спокойно', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Игра', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Спокойно: нищо не се движи, няма празнувания. Игра: точки, звуци и много движение.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Обслужване и охрана", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Работа на открито", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Грижа за деца", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Отпадъци и рециклиране", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Хранителна промишленост", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Охрана", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Обслужване на сгради", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Зелени площи и градини", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Ниво', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Начало', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Учене', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'В екипа', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Занаят в ръцете', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'С опит', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Майсторство', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Ново ниво:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Без грешки:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Цел за днес', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Целта за днес е постигната!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Ново в кутията ти с инструменти:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Моята кутия с инструменти', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Завърши урок с игра. Тогава получаваш първия си инструмент.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Повече обяснения', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'За тези съвети', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Експерт още не е проверил това обяснение.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Дата на това обяснение: {month}. За най-новите правила провери в Juridisch Loket или в Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Дата на това обяснение: {month}. За най-новите правила провери в justitiehuis или на werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Повече за Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Каза ли това на работа?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Да, получи се', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Още не', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Браво! Вече {n} изречение се получи на работа.', other: 'Браво! Вече {n} изречения се получиха на работа.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Браво! Първото ти изречение на работа се получи.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Ще ги намериш в Настройки.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Получи се на работа', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Тези изречения каза на работа.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'около {n} мин.', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Напредъкът ти не е запазен. Телефонът пълен ли е? Освободи малко място. Или отвори Настройки: „Запази напредъка си“.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Телефонът понякога може да изтрие напредъка ти. Затова запази копие.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Запази сега', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Изпрати на себе си', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Изпрати файла на себе си, например в WhatsApp или по имейл.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Готово. Пази добре този файл. С него по-късно ще върнеш напредъка си.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Какво казваш?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Пример', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Чуй отговора', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Слушай на работа', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Има шум, като на работа. Слушай. После идват въпросите.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Сложи отбелязаната дума в началото', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Правилата в работата', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Вече знаеш много нидерландски. Искаш ли да научиш и правилата в работата? Тогава всичко е на нидерландски.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Да, покажи', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Как се казва?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Докосни звук. Виж как го прави устата.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Скорост', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Думата, звук по звук', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Звук', // nieuw, nalezen // nagelezen AI 28 nov
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
    'u.emergency': "Когато нещо се обърка", // nieuw, nalezen // nagelezen AI 22 nov
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
    's.hello.1': { m: 'Здравей, нов съм.', f: 'Здравей, нова съм.', x: 'Здравей, аз съм нов човек тук.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.hello.2': 'Добро утро, аз съм Али.',
    's.hello.3': 'Благодаря, до утре!',
    's.people.1': 'Казвам се Сара.',
    's.people.2': 'Кой е шефът?',
    's.people.3': { m: 'Аз съм нов колега.', f: 'Аз съм нова колежка.', x: 'Аз съм нов човек в екипа.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.understand.1': 'Може ли да повторите?',
    's.understand.2': 'Може ли да говорите по-бавно?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.understand.3': 'Къде е тоалетната?',
    's.gear.1': 'Винаги носи каската си.',
    's.gear.2': 'Къде са ръкавиците?',
    's.gear.3': 'Нося светлоотразителната си жилетка.',
    's.danger.1': 'Внимавай, подът е мокър!',
    's.danger.2': 'Къде е аварийният изход?',
    's.danger.3': 'Има злополука!',
    'l.alarm': 'Пожарна аларма и евакуация', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'алармата', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'евакуирам (всички излизат от сградата)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'евакуационният път', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'стълбите', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'мястото за събиране (където всички се събират навън)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'пожарогасителят', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Къде е пожарогасителят?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Трябва да евакуираме сградата.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Използвай стълбите, не асансьора.', // nieuw, nalezen // nagelezen AI 22 nov
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
    's.sick.1': { m: 'Днес съм болен.', f: 'Днес съм болна.', x: 'Днес се разболях.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
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
    'c.arrive.a': { m: 'Нов съм. Започвам днес.', f: 'Нова съм. Започвам днес.', x: 'Аз съм нов човек тук. Започвам днес.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.understand.q': 'Разбираш ли?',
    'c.understand.a': 'Не, още веднъж, моля.',
    'c.gear.q': 'Носиш ли си каската?',
    'c.gear.a': 'Да, нося я.',
    'c.danger.q': 'Има ли злополука?',
    'c.danger.a': 'Да, обади се на 112!',
    'c.alarm.q': 'Всички ли са навън?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Не, колегата ми още го няма.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Какво се случи?',
    'c.accident.a': 'Падна. Кърви.',
    'l.notyet': 'Това още не са ме учили',
    'w.nogniet': 'още не',
    'w.mogen': 'мога (имам право)',
    'w.proberen': 'опитвам',
    'w.voordoen': 'показвам как (като го направя първо)',
    'w.gevaarlijk': 'опасен',
    'w.uitleg': 'обяснението',
    's.notyet.1': { m: 'Още не съм научил това.', f: 'Още не съм научила това.', x: 'Още не са ме учили на това.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.notyet.2': 'Още никой не ми е обяснил.',
    's.notyet.3': { m: 'Мога ли вече да го правя сам?', f: 'Мога ли вече да го правя сама?', x: 'Мога ли вече да го правя самостоятелно?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.q': 'Просто опитай, лесно е.',
    'c.notyet.a': 'Можеш ли първо да ми покажеш как?',
    'c.things.q': 'Къде да отиде кашонът?',
    'c.things.a': 'На палета.',
    'c.directions.q': 'Наляво или надясно?',
    'c.directions.a': 'Надясно, до стелажа.',
    'c.shift.q': 'Кога започва твоята смяна?',
    'c.shift.a': 'Утре в седем часа.',
    'c.sick.q': { m: 'Болен ли си?', f: 'Болна ли си?', x: 'Зле ли се чувстваш?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.a': 'Да, днес оставам вкъщи.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Обади се на 112!',
    'p.hurt': { m: 'Ранен съм.', f: 'Ранена съм.', x: 'Имам нараняване.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Събиране на поръчки", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "артикулът (един продукт)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "клетката (едно място на стелажа)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "стикерът, етикетът", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "събирам", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "липсва (няма го)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "локацията (кодът на мястото, например A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Събирам артикулите за тази поръчка.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Този артикул липсва. Клетката е празна.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Стикерът трябва да е на кашона.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Коя е локацията?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Пътека три, клетка дванайсет.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Товарене и разтоварване", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "камионът", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "шофьорът", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "разтоварвам (вадя нещата от камиона)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "палетната количка (ръчна количка, която вдига палет)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "фолиото (тънка пластмаса около палет)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "товарителницата (листът, на който пише какво има в камиона)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Камионът е на врата четири.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Първо разтоварваме тези палети.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Шофьорът чака товарителницата.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Готов ли е този палет?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Не, трябва още да се увие с фолио.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Как се прави това?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "как", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "така, по този начин", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "труден", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "лесен", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "знам", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "вярно е", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Как се прави това?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Това е трудно за мен.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Добре ли го правя така?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Знаеш ли как се прави това?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Не, това още не го знам.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Може ли да попитам нещо?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "питам", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "кой", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "за малко", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "времето", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "преча (на някого, който е зает)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "колебая се (не знаеш със сигурност)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Може ли да попитам нещо?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Извинявай, че преча.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Кой може да ми помогне?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Имаш ли въпрос?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Да. Имаш ли малко време?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Къде е?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "тук", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "там", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "изгубен (не можеш да го намериш)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "изходът", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "посочвам (показвам къде е)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "до", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "Загубих се.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Къде е изходът?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Тоалетната е там, до стола.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Можеш ли да го намериш?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Не. Можеш ли да го посочиш?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Малки рани и изгаряния", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "раната", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "превръзката", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "охлаждам (със студена вода)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "порязването (малка рана от нож или нещо остро)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "припадам", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "душът за очи (вода за изплакване на очите)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Охлади изгарянето с вода.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "Малко порязване е. Притисни раната.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Къде е душът за очи?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Колегата ми ще припадне.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Нека полежи малко. Отивам за помощ.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Обаждане на 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "спешните служби (линейка, пожарна, полиция)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "името на улицата", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "номерът на сградата", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "в съзнание (човекът реагира, когато му говориш)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "посрещам (някого на вратата)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "оставам на линията (не затваряш)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Обаждам се на 112. Трябва ми линейка.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Какво е името на улицата и номерът на сградата?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Ще посрещна линейката на входа.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Реагира ли, когато му говориш?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Не. Не реагира.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Твоят график", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "седмичният график (кой кога работи тази седмица)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "приложението за графика (смените ти в телефона)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "на разположение (можеш да работиш тогава)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "промяната", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "замествам (работя вместо някой, който отсъства)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "почивният ден", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Новият график е в приложението.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Можеш ли да работиш в събота?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Можеш ли утре да заместиш Сара?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Има промяна в графика ти.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Добре. Кой ден трябва да работя?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Часове и почивки", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "обедната почивка", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "времето за почивка (свободно време между две смени)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "работният ден", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "списъкът с часове (където записваш отработените часове)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "тръгвам си по-рано", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "подред (един след друг)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Записвам часовете си в списъка с часове.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Може ли днес да си тръгна един час по-рано?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Работих шест дни подред.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Кога ти е обедната почивка?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "В дванадесет, половин час.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Първите ти седмици", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "обиколката (някой те развежда из сградата)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "наставникът (колегата, който ти помага през първите седмици)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "тефтерчето", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "ходя с колега (и гледам как работи)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "запомням", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "самостоятелно (без помощ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Ще ми го покажеш ли още веднъж?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Днес ходя заедно със Сара.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Записвам го в тефтерчето си.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Помниш ли всичко от обиколката?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Почти всичко. Къде беше столът?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Комплектоване на поръчки и ричтракът", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "комплектовчикът (работникът, който събира поръчките; също малката машина, на която стоиш, за да вземаш стоки отвисоко)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "ричтракът (мотокар за много високи стелажи; вилиците му се изнасят напред)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "листът за комплектоване (списъкът с артикули, които трябва да събереш)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "сканирам", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "пешеходецът (човек, който ходи пеша)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "стоплям се (на топло място, след работа на студено)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Сканирам всеки артикул от листа за комплектоване.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Пешеходците ходят по пешеходната пътека.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Във фризерната камера нося термо облекло.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Можеш ли да покараш малко ричтрака?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Не, нямам право. Нямам обучение за това.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
