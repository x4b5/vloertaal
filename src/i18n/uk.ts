import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'uk',
  name: 'Ukrainian',
  nativeName: 'Українська',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Вигляд',
    themeAuto: 'Автоматично',
    themeSand: 'Пісок', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Порт', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Робоча куртка', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Темний',
    voice: 'Нідерландський голос',
    voiceAuto: 'Автоматично',
    voiceHint: 'Натисни 🔊, щоб послухати. Голоси Vloertaal звучать однаково на кожному телефоні; інші голоси беруться з твого телефону.',
    voiceNone: 'На цьому пристрої немає нідерландського голосу. Його можна додати в налаштуваннях телефону (Синтез мовлення).',
    appTagline: 'Нідерландська для роботи',
    chooseLanguage: 'Обери мову підказок',
    englishOnly: 'Лише англійська',
    beta: 'Переклад ще не перевірено', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'день поспіль', few: 'дні поспіль', many: 'днів поспіль', other: 'днів поспіль' },
    streakStarted: 'Твоя серія днів почалася! Повертайся завтра.',
    streakGrew: { one: '{n} день поспіль! Так тримати.', few: '{n} дні поспіль! Так тримати.', many: '{n} днів поспіль! Так тримати.', other: '{n} днів поспіль! Так тримати.' },
    start: 'Почати',
    practice: 'Повторити',
    locked: 'Спочатку заверши попередній урок',
    newWord: 'Нове слово',
    tapToHear: 'Натисни, щоб почути',
    sayItAloud: 'Скажи це вголос.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Скажи це тихо або подумки.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Що це означає?',
    snapQuestion: 'Розумієш?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Так, добре.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Добре, що питаєш!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Добре зрозуміло!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Бачиш? Краще було запитати.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Де тут «{word}»?',
    mixLesson: 'Змішане повторення',
    whatDoYouHear: 'Що ти чуєш?',
    buildSentence: 'Склади це речення нідерландською',
    typeWhatYouHear: 'Напиши, що чуєш',
    check: 'Перевірити',
    continue: 'Далі',
    correct: 'Чудово!',
    almost: 'Правильно, але зверни увагу на правопис',
    incorrect: 'Не зовсім',
    correctAnswer: 'Правильна відповідь',
    rightAnswerIs: 'Ось правильна відповідь:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'Ось найкраща відповідь:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Твоя відповідь',
    inARow: '{n} поспіль',
    cantListen: 'Зараз не можу слухати',
    learnWriting: 'Я також хочу вчитися писати',
    learnWritingHint: 'Увімкнено: складай почуті слова з літер. Вимкнено: вибирай написане слово, яке чуєш.',
    tagRepeat: 'Ще раз',
    readAloud: 'Прочитати вголос',
    lessonComplete: 'Урок завершено!',
    phrasebook: 'Фрази для екстрених випадків',
    phrasebookHint: 'Натисни на фразу, щоб її почути. Також можеш показати екран колезі.',
    whoToCall: 'Проблеми на роботі? Хто може допомогти',
    who112: 'Надзвичайна ситуація: загроза життю, пожежа або злочин, що відбувається зараз.',
    whoLegal: 'Безкоштовна порада щодо контракту, зарплати чи звільнення.',
    whoInspection: 'Повідом про небезпечну роботу, замалу зарплату чи експлуатацію. Можна анонімно.',
    whoFairwork: 'Тебе експлуатують на роботі, або ти так думаєш.',
    who113: 'Ти думаєш про самогубство або хвилюєшся за когось. Безкоштовно, вдень і вночі.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Насильство або жорстоке поводження вдома, щодо тебе чи когось іншого. Безкоштовно, можна анонімно.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    settings: 'Налаштування',
    helpLanguage: 'Мова підказок',
    resetProgress: 'Скинути мій прогрес',
    resetConfirm: 'Видалити весь прогрес на цьому пристрої?',
    audioUnavailable: 'Звук недоступний на цьому пристрої.',
    slow: 'Повільно',
    completeChat: 'Заверши розмову',
    meaning: 'Значення',
    navRoute: 'Уроки',
    navWords: 'Допомога',
    rightFirstTime: 'Правильно з першого разу',
    newWords: 'Нові слова',
    wordsLearnedN: { one: 'Вивчено {n} слово', few: 'Вивчено {n} слова', many: 'Вивчено {n} слів', other: 'Вивчено {n} слів' },
    practiseMistakes: 'Повтор помилок · залишилось {n}',
    quitHint: 'Твої відповіді в цьому уроці не збережуться.',
    keepGoing: 'Продовжити',
    stopLesson: 'Зупинити урок',
    fullVersion: 'Повна версія',
    unlockFull: 'Відкрити повну версію',
    unlockHint: 'З кодом відкриваються всі уроки. Код безкоштовний. Ще немає коду? Запитай свого вчителя чи наставника або напиши нам:',
    codeNotFull: 'Цей код не відкриває повну версію. Попроси новий код.',
    password: 'Код',
    enterPassword: 'Введи код',
    wrongPassword: 'Код неправильний. Спробуй ще раз.',
    unlock: 'Відкрити',
    sector: 'Твоя робота',
    chooseSector: 'Де ти працюєш?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'У якій країні ти працюєш?',
    countryHint: 'Ти отримаєш слова й поради цієї країни.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'Те, що ти вивчаєш, є лише на цьому телефоні.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Завжди користуйся цим телефоном.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Нідерланди',
    countryBe: 'Бельгія (Фландрія)',
    tipsNote: 'Ці поради — про роботу в Нідерландах. Це загальна інформація, а не юридична порада.',
    sectorHint: 'Уроки для твоєї роботи будуть серед перших. Пізніше це можна змінити в Налаштуваннях.',
    otherSectors: 'Інші сфери',
    reviewToday: 'Повторення на сьогодні',
    reviewTodayN: { one: '{n} слово для повторення · кілька хвилин', few: '{n} слова для повторення · кілька хвилин', many: '{n} слів для повторення · кілька хвилин', other: '{n} слів для повторення · кілька хвилин' },
    notSureYet: 'Ще не знаю',
    sectorLogistics: 'Логістика',
    sectorConstruction: 'Будівництво',
    sectorProduction: 'Виробництво',
    sectorCare: 'Догляд',
    sectorHospitality: 'Готелі й ресторани',
    sectorRetail: 'Магазин і супермаркет', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Прибирання',
    sectorHorticulture: 'Садівництво і теплиці', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Технічні роботи', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Автосервіс', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Звук',
    soundOn: 'Зі звуком',
    withoutSound: 'Без звуку',
    quietHint: 'Без звуку в уроках немає вправ на слухання і нічого не вмикається саме. Натисни 🔊, щоб почути слово, наприклад у навушниках.',
    soundOffToast: 'Без звуку. Звук можна увімкнути в Налаштуваннях.',
    noInternetSound: 'Немає інтернету: звук зараз не працює.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Ще треба сьогодні',
    streakStopped: { one: 'Твоя серія зупинилася на {n} дні. Почни знову сьогодні.', few: 'Твоя серія зупинилася на {n} днях. Почни знову сьогодні.', many: 'Твоя серія зупинилася на {n} днях. Почни знову сьогодні.', other: 'Твоя серія зупинилася на {n} днях. Почни знову сьогодні.' },
    recordN: { one: 'Твій рекорд: {n} день', few: 'Твій рекорд: {n} дні', many: 'Твій рекорд: {n} днів', other: 'Твій рекорд: {n} днів' },
    workWeek: 'Твій робочий тиждень',
    freeDaysN: { one: 'У тебе {n} вільний день. Якщо пропустиш один день, серія триває.', few: 'У тебе {n} вільні дні. Якщо пропустиш один день, серія триває.', many: 'У тебе {n} вільних днів. Якщо пропустиш один день, серія триває.', other: 'У тебе {n} вільних днів. Якщо пропустиш один день, серія триває.' },
    restDay: 'Вільний день',
    tier3: '3 дні поспіль',
    tier7: '1 тиждень поспіль',
    tier14: '2 тижні поспіль',
    tier30: '1 місяць поспіль',
    reviewDone: 'На сьогодні все',
    tomorrowN: { one: 'Завтра: {n} слово', few: 'Завтра: {n} слова', many: 'Завтра: {n} слів', other: 'Завтра: {n} слів' },
    firstWordsTomorrow: 'Завтра повернуться твої перші слова',
    extraRound: 'Додатковий раунд',
    reviewFirstHint: 'Спочатку повторення. Так ти запам’ятаєш більше.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} слово закріплено краще', few: '{n} слова закріплено краще', many: '{n} слів закріплено краще', other: '{n} слів закріплено краще' },
    noMistakes: 'Без помилок',
    nextUp: 'Далі',
    installTitle: 'Додай Vloertaal на головний екран',
    installHint: 'Тоді він відкривається як застосунок, навіть без інтернету.',
    installAdd: 'Додати на головний екран',
    iosStep1: 'Натисни «Поділитися»',
    iosStep2: 'Натисни «На початковий екран»',
    iosStep3: 'Готово!',
    backupTitle: 'Збережи свій прогрес',
    backupHint: 'Твій прогрес є лише на цьому телефоні. Збережи його як файл, наприклад для нового телефону.',
    backupSave: 'Зберегти файл',
    backupLoad: 'Повернути',
    backupBad: 'Це не файл Vloertaal.',
    backupAsk: 'Додати цей файл до твого прогресу чи замінити прогрес?',
    backupMerge: 'Обʼєднати',
    backupReplace: 'Замінити',
    backupBack: 'Твій прогрес повернувся.',
    backupNothingNew: 'Нічого нового: це вже було на твоєму телефоні.',
    cancel: 'Скасувати',
    remindTitle: 'Нагадуй мені щодня',
    remindEvent: 'Час для нідерландської (10 хвилин)',
    remindHint: 'Календар телефону нагадає тобі. Нам нічого не надсилається.',
    remindBefore: 'Перед роботою',
    remindAfter: 'Після роботи',
    remindOwn: 'Інший час',
    remindAdd: 'Додати в мій календар',
    remindAdded: 'Відкрий файл, щоб додати його в календар.',
    remindAddedAsk: 'Додано? Тоді побачиш його у своєму календарі.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'Інфо',
    tagMeaning: 'Значення',
    tagPick: 'Вибери',
    tagListen: 'Слухай',
    tagType: 'Пиши',
    tagMatch: 'Пари',
    tagBuild: 'Речення',
    tagChat: 'Розмова',
    tagSituation: 'Ситуація',
    tagTip: 'Порада',
    more: 'Більше',
    less: 'Менше',
    daysUnit: { one: 'день', few: 'дні', many: 'днів', other: 'днів' },
    wordsUnit: { one: 'слово', few: 'слова', many: 'слів', other: 'слів' },
    countTitle: 'Анонімний підрахунок',
    countHint: 'Застосунок рахує, як часто проходять уроки і скільки приблизно вони тривають. І чи є десь помилка в застосунку. Без імені, без акаунта, без стеження.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Сертифікат',
    myCertificates: 'Мої сертифікати',
    certsEmpty: 'Пройди всі уроки розділу. Тоді отримаєш сертифікат.',
    certEarned: 'Сертифікат отримано!',
    certEarnedHint: 'Усі уроки цього розділу пройдено.',
    certView: 'Переглянути',
    certLater: 'Пізніше',
    certPrint: 'Друкувати або зберегти як PDF',
    certSaved: 'Зображення збережено.',
    certNameHint: 'Воно залишається тільки на цьому телефоні. Можна залишити порожнім.',
    certChangeName: 'Змінити імʼя',
    certPractice: 'Навчальний сертифікат, не офіційний диплом',
    resumeLesson: 'Продовжити урок',
    restartLesson: 'Почати знову',
    quitKept: 'Твій прогрес збережено. Можеш продовжити пізніше.',
    bestAnswer: 'Найкраща відповідь',
    inReview: 'на перевірці',
    today: 'Сьогодні',
    playAgain: 'Послухай ще раз',
    daysUnitOne: 'день',
    wordsUnitOne: 'слово',
    wordsLearnedOne: 'Вивчено слів: {n}',
    tomorrowOne: 'Завтра: {n} слово',
    wordsStrongerOne: 'Краще закріплено слів: {n}',
    recordOne: 'Твій рекорд: {n} день',
    streakStoppedOne: 'Твоя серія зупинилася на {n} дні. Почни знову сьогодні.',
    letterTiles: 'Літери',
    useKeyboard: 'Клавіатура',
    skippedN: 'Пропущено: {n}, не враховано',
    stampLater: 'Повернеться пізніше',
    stampDone: 'Готово',
    chooseNext: 'Обери наступну тему',
    recommended: 'Рекомендовано',
    allTopics: 'Усі теми',
    topicsOrder: 'Показати теми',
    privacyLink: 'Прочитати заяву про конфіденційність (нідерландською)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Що ти хочеш вивчати?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Вивчати нідерландську для роботи і те, як тут влаштована робота', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Я вже говорю нідерландською: лише правила роботи', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Вивчати нідерландську', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Перейти до Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Усе буде нідерландською. Мова підказок вимкнеться.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Поки не повернешся, ти повторюєш правила, а не слова.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Твій поступ збережеться. Повернутися можна тут.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Так, до Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'За розділами',
    inOrder: 'По порядку',
    searchTopics: 'Пошук теми', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Немає теми з цим словом.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: 'урок', few: 'уроки', many: 'уроків', other: 'уроків' },
    lessonsUnitOne: 'урок',
    topicsUnit: { one: 'тема', few: 'теми', many: 'тем', other: 'теми' },
    topicsUnitOne: 'тема',
    allTopicsDone: 'Усі теми пройдено. Чудово!',
    // Speaking practice
    tagSpeak: 'Говори',
    speakPrompt: 'Послухай, потім скажи',
    tapToSpeak: 'Натисни й говори',
    stopRecording: 'Стоп',
    micPrivacy: "Ніхто інший тебе не чує. Нічого не надсилається.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Мікрофон вимкнено. Скажи це вголос зараз, потім продовжуй.',
    cantSpeak: 'Зараз не можу говорити',
    soundsSame: 'Звучить так само',
    sayAgain: 'Скажи ще раз',
    hearMine: 'Послухай себе', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Тоді й зараз', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Твоя перша спроба: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Скажи разом", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Кажи одночасно з голосом. Нічого не записується.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Тепер тільки ти", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Помилки — це частина навчання. Тебе не зрозуміли? Скажи ще раз.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Хвилюєшся? Це нормально. Все одно скажи.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Не треба казати ідеально. Просто спробуй.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Чому ти вчиш нідерландську?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Обери одне або два.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Готово", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Добре виконувати роботу", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Мої діти", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Говорити з колегами", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Самостійно вирішувати справи", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonJob: "Краща робота", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Почуватися вдома в Нідерландах", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'Я',
    speakingPractice: 'Практика мовлення',
    speakingHint: "Кажи слова вголос і порівнюй. Ніхто інший тебе не чує: нічого не надсилається. Твій перший запис речення залишається в телефоні, щоб порівняти пізніше.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Зберігаємо…',
    savedOffline: 'Збережено офлайн',
    offlineNoSpace: 'На телефоні замало місця. Видали збережену тему або звільни місце.',
    offlineFailed: 'Не вдалося зберегти. Перевір інтернет і спробуй ще раз.',
    pocketCard: 'Шпаргалка',
    pocketSave: 'Зберегти як зображення',
    textSize: 'Розмір тексту',
    textNormal: 'Звичайний',
    textLarge: 'Великий',
    textXl: 'Дуже великий',
    showEnglish: 'Показуй також англійську',
    genderTitle: 'Жінка чи чоловік?',
    genderHint: 'Щоб підказки зверталися до тебе правильно.',
    genderWoman: 'Жінка',
    genderMan: 'Чоловік',
    genderNone: 'Не хочу казати',
    langGuessYes: 'Так',
    langGuessOther: 'Інша мова',
    settingsLangMe: 'Мова і я',
    settingsLessons: 'Уроки',
    settingsPhone: 'Цей телефон',
    settingOn: 'Увімкнено',
    settingOff: 'Вимкнено',
    sectorGroupMake: 'Виробництво і перевезення',
    sectorGroupCare: "Догляд і діти", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Магазини й ресторани', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Будівництво і техніка', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Жіночий голос',
    voiceMan: 'Чоловічий голос',
    writingPick: 'Вибір слова',
    settingWriting: 'Письмо',
    settingKeepLessons: 'Зберігати уроки на цьому телефоні',
    settingKeepLessonsHint: 'Поточна тема зберігається на цьому телефоні, тож працює й без інтернету. Завершені теми потім видаляються.',
    otherTopicLink: 'Інша тема',
    remindAsk: 'Нагадувати тобі щодня?',
    remindYes: 'Так, після роботи',
    remindNo: 'Ні, дякую',
    remindPickTime: 'Коли тобі нагадувати?',
    certSaveShare: 'Зберегти або поділитися',
    pauseTitle: 'Пауза',
    back: 'Назад',
    quitLesson: 'Вийти з уроку',
    playAudio: 'Слухати',
    scrollDown: 'Прокрутити вниз',
    lessonProgress: 'Прогрес уроку',
    mainMenu: 'Головне меню',
    spaceKey: 'Пробіл',
    langNotOnPhone: 'Цієї мови ще немає на твоєму телефоні. Підключися до інтернету, щоб змінити мову.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'Вибери час сам', f: 'Вибери час сама', x: 'Вибери свій час' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    gateWho: 'Код тобі дає вчитель, коуч або роботодавець.',
    gateTrust: 'Без акаунта. Без імені. Усе залишається на цьому телефоні.',
    codeAccepted: 'Код прийнято',
    startFree: 'Немає коду? Почни з перших уроків',
    bramHello: 'Радий тебе бачити.',
    bramBack: 'З поверненням. Продовжуймо.',
    bramRested: 'Учора був твій вільний день. Серія триває.',
    bramDueN: { one: '{n} слово на повторення сьогодні.', few: '{n} слова на повторення сьогодні.', many: '{n} слів на повторення сьогодні.', other: '{n} слів на повторення сьогодні.' },
    bramDueOne: 'Слів на повторення сьогодні: {n}',
    bramDayN: 'День {n} поспіль.',
    bramDone: { m: 'На сьогодні ти все зробив. До завтра.', f: 'На сьогодні ти все зробила. До завтра.', x: 'На сьогодні все зроблено. До завтра.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramPerfect: 'Дуже добре. Ти знаєш ці слова.',
    bramGood: 'Гарна робота. Крок за кроком.',
    bramHard: { m: 'Добре, що ти потренувався. Складні слова повернуться.', f: 'Добре, що ти потренувалася. Складні слова повернуться.', x: 'Добре, що ти тренуєшся. Складні слова повернуться.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramReview: 'Добре. Повторення допомагає запамʼятати.',
    bramIntro: 'Я Bram, твій колега.',
    bramIntroHello: 'Привіт, я Bram.',
    showDutch: 'Показати нідерландською',
    showAnswers: 'Показати відповіді', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Останнє оновлення: {date}',
    /* G4 b3 */
    buildListen: 'Послухай і склади речення',
    chatWhichQuestion: 'Яке запитання підходить до цієї відповіді?',
    reviewWaiting: 'Ще чекають слова: {n}. Вони повернуться в наступні дні.',
    factTitle: 'А ти знаєш?',
    fact3: { m: 'Ти не один: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.', f: 'Ти не одна: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.', x: 'Не тільки ти: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fact7: 'Серед мігрантів, які дуже добре говорять нідерландською, 69 зі 100 мають оплачувану роботу.',
    fact14: 'У багатьох бібліотеках є Taalhuis («дім мови»): безкоштовна допомога, щоб далі вчити нідерландську.',
    fact30: { m: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. Ти тренувався вже 30 днів поспіль!', f: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. Ти тренувалася вже 30 днів поспіль!', x: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. У тебе вже 30 днів тренувань поспіль!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'У цьому файлі {n} урок.', few: 'У цьому файлі {n} уроки.', many: 'У цьому файлі {n} уроків.', other: 'У цьому файлі {n} уроків.' },
    backupFileOne: 'У цьому файлі {n} урок.',
    backupPhoneN: { one: 'У тебе {n} урок.', few: 'У тебе {n} уроки.', many: 'У тебе {n} уроків.', other: 'У тебе {n} уроків.' },
    backupPhoneOne: 'У тебе {n} урок.',
    backupFewer: '«Замінити» видаляє уроки, яких немає у файлі. «Обʼєднати» зберігає все.',
    backupTooBig: 'Цей файл завеликий. Файл Vloertaal набагато менший.',
    backupNewPhone: 'Новий телефон? Там тобі теж знадобиться твій код.',
    remindEveryDay: 'Твоє нагадування: щодня о {time}',
    remindStop: 'Вимкнути нагадування',
    remindStopped: 'Відкрий файл, щоб прибрати нагадування з календаря.',
    remindStoppedAndroid: 'Видали нагадування власноруч у Google Календарі.',
    resetKeeps: 'Твої уроки, слова, дні поспіль і сертифікати буде видалено. Твоя мова і налаштування залишаться.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Не завантажилося. Чи є інтернет?',
    retry: 'Спробувати ще раз',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal не може запуститися.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Спершу збережи свій прогрес. Потім почни заново.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Почати заново', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Щось пішло не так. Твій прогрес збережено.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Що ти вже знаєш?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Приблизно 10 хвилин. Оцінок немає. Це тільки для тебе.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: { m: 'Ти багато навчився. Пройди тест ще раз і подивися, що ти знаєш тепер.', f: 'Ти багато навчилася. Пройди тест ще раз і подивися, що ти знаєш тепер.', x: 'Уже багато вивчено. Пройди тест ще раз і подивися, що ти знаєш тепер.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsPartListen: 'Слухання', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Слова', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Речення', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Послухай. Що це означає?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Не знаєш? Натисни «Я не знаю». Це нормально.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Твій запис залишається тільки на цьому телефоні. Пізніше ти зможеш почути себе знову.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Гарний початок! Ось що ти вже знаєш.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Молодець! Подивися, що ти знаєш тепер.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Ти тоді', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Ти зараз', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Займайся трохи щодня. Тоді ти знатимеш усе більше.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Пройти тест', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Я не знаю', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Більше, ніж тоді', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Приблизно так само', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Усе разом: тепер ти знаєш більше, ніж тоді.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Усе разом: приблизно так само, як тоді.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Спочатку 5 запитань про тебе. Тут немає правильних чи неправильних відповідей.', // nieuw, nalezen (AI-correctie 28 nov 2026)
    toetsDurfAsk: 'Чи наважишся ти на це?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Сказати, що ти чогось не розумієш', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Запитати щось у керівника', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Попросити про допомогу', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Сказати, що щось небезпечно', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Трохи поговорити з колегою на перерві', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Ще ні', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Трохи', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Так', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'За кілька тижнів ми запитаємо ще раз.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Темп', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Спокійно', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Звичайно', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Спокійно — повільно і чітко. Звичайно — як говорять колеги. Вибирай «Звичайно», якщо вже багато розумієш.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Покажи, як справи', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Ця картка показує твій прогрес. Покажи її вчителю, коучу або керівнику. Вирішуєш ти.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: 'Ти можеш також сказати «ні».', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Картку робить твій телефон. Нічого не надсилається. Vloertaal нічого не зберігає.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'На картці, нідерландською:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Завершені теми', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Дні занять за останні 4 тижні', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Останній урок, з датою', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Код: ті самі числа коротко, для огляду групи. Без імені.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Телефон слухає (пробна функція)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Коли ти скажеш, телефон покаже, чи він тебе зрозумів. Це відбувається на самому телефоні. Нічого не йде ні нам, ні іншим.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Спершу телефону потрібна нідерландська. Це велике завантаження: користуйся Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Завантажити нідерландську', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Не зараз', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Нідерландська завантажується. Спробуй пізніше.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Не вдалося. Спробуй пізніше, через Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Слухає тільки телефон. Нічого не надсилається.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Телефон слухає…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Зрозуміло', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Майже: скажи {word} ще раз', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Ще не зрозуміло', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Все одно далі', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Хочеш швидше?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Менше пояснень у нових уроках. Нідерландська у звичайному темпі.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Так', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Ні', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Наступний урок трохи коротший.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Вчитися швидше', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Увімкнено: менше пояснень у нових уроках і нідерландська у звичайному темпі. Вимкнено: як раніше.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Як тобі Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Добре', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Так собі', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Погано', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Дякуємо! Це допомагає нам зробити Vloertaal кращим.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Вчитися швидше: менше пояснень у нових уроках і нідерландська у звичайному темпі.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Вправляйтеся разом', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Двоє людей, один телефон', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Вправляйся з колегою, другом або вчителем. Читайте по черзі.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'Людина 1 — колега. Людина 2 відповідає.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Нічого не записується. Оцінки немає.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Людина {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Відповідь', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Послухати', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Далі', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Переклад', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Молодці! Поміняйтеся ролями і зробіть ще раз?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Поміняйтеся ролями', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Готово', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Я це знаю: коротка перевірка', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Ти вже це знаєш. Позначити цю тему як пройдену?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkNoCert: 'Тоді сертифіката ще немає. Ти отримаєш його після уроків.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Уроки допоможуть тобі з цією темою.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'Позначити', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'через перевірку', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Усе ж пройти уроки', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "Спілкування", // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Я вчу нідерландську для роботи за допомогою Vloertaal. Безкоштовно: {link}', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal — безкоштовний застосунок, щоб вивчати нідерландську для роботи.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeHow: 'Короткі уроки на твоєму телефоні, з підказками твоєю мовою. Без акаунта.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeOpen: 'Відкрий на телефоні:', // nieuw, nalezen // nagelezen AI 28 nov
    workTry: 'Спробуй сьогодні на роботі', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Коли:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Тоді скажи:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Для колеги', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Покажи це колезі, який говорить нідерландською. Тут написано, як він може допомогти тобі практикуватися.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'Надіслати колезі', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Для твого наставника', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Як тут влаштована робота, простою нідерландською. Телефон читає вголос.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Ти вже знаєш багато нідерландської. У кожній темі можна також прочитати, як тут влаштована робота, простою нідерландською.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Жодної: я говорю нідерландською', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Речення, сказані на роботі', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Слова, які ще важкі', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Уроки про те, як тут влаштована робота', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Показувати назви тем про твої права', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Тепер напам’ять: як це було нідерландською?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Слова, вивчені 2 тижні тому або раніше: ти ще пам’ятаєш {n} з {m}.', // nieuw, nalezen (AI-correctie 28 nov 2026)
    verbSecond: 'Дієслово стоїть на місці 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Бали', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Усі твої бали', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Настрій', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Спокійно', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Гра', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Спокійно: нічого не рухається, без святкувань. Гра: бали, звуки і багато руху.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Обслуговування й охорона", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Робота надворі", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Догляд за дітьми", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Відходи й переробка", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Харчова промисловість", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Охорона", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Обслуговування будівель", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Озеленення й сади", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Рівень', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Початок', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Навчання', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'У команді', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Фах у руках', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'З досвідом', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Майстерність', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Новий рівень:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Без помилок:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Мета на сьогодні', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Мету на сьогодні досягнуто!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Нове у твоєму ящику:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Мій ящик з інструментами', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Закінчи урок з грою. Тоді отримаєш перший інструмент.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Більше пояснень', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'Про ці поради', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Експерт ще не перевірив це пояснення.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Дата цього пояснення: {month}. Найновіші правила перевір у Juridisch Loket або на Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Дата цього пояснення: {month}. Найновіші правила перевір у justitiehuis або на werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Більше про Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Вдалося сказати це на роботі?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Так, вдалося', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Ще ні', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Молодець! Уже {n} речення вдалося сказати на роботі.', few: 'Молодець! Уже {n} речення вдалося сказати на роботі.', many: 'Молодець! Уже {n} речень вдалося сказати на роботі.', other: 'Молодець! Уже {n} речення вдалося сказати на роботі.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Молодець! Перше речення на роботі вдалося.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Їх можна знайти в Налаштуваннях.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Вдалося на роботі', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: { m: 'Ці речення ти сказав на роботі.', f: 'Ці речення ти сказала на роботі.', x: 'Ці речення вдалося сказати на роботі.' }, // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'близько {n} хв', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Твій прогрес не збережено. Телефон заповнений? Звільни трохи місця. Або відкрий Налаштування: «Збережи свій прогрес».', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Телефон іноді може стерти твій прогрес. Тому збережи копію.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Зберегти зараз', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Надіслати собі', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Надішли файл собі, наприклад у WhatsApp або електронною поштою.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Готово. Добре збережи цей файл. З ним ти пізніше повернеш свій прогрес.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Що ти скажеш?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Приклад', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Послухай відповідь', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Слухай на роботі', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Тут шумно, як на роботі. Слухай. Потім будуть запитання.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Постав позначене слово на початок', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Правила роботи', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Ти вже знаєш багато нідерландської. Хочеш також вивчити правила роботи? Тоді все буде нідерландською.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Так, покажи', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Як це сказати?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Торкнися звуку. Подивись, як його робить рот.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Швидкість', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Слово, звук за звуком', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Звук', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Перші кроки',
    'theme.safe': 'Безпечна робота',
    'theme.find': 'Пошук роботи',
    'theme.job': 'Твоя робота',
    'theme.together': 'Співпраця',
    'theme.rights': 'Твої права',
    'theme.life': 'Життя в Нідерландах',
    'theme.sector': 'Твоя сфера',
    // Unit: First day at work
    'u.firstday': 'Перший робочий день',
    'l.hello': 'Привітання',
    'w.hallo': 'привіт',
    'w.goedemorgen': 'доброго ранку',
    'w.dankjewel': 'дякую',
    'w.ja': 'так',
    'w.nee': 'ні',
    'w.totmorgen': 'до завтра',
    's.hello.1': { m: 'Привіт, я тут новенький.', f: 'Привіт, я тут новенька.', x: 'Привіт, я тут недавно.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.hello.2': 'Доброго ранку, я Алі.',
    's.hello.3': 'Дякую, до завтра!',
    'l.people': 'Люди на роботі',
    'w.collega': 'колега',
    'w.baas': 'начальник',
    'w.leidinggevende': 'керівник',
    'w.werk': 'робота',
    'w.naam': 'імʼя',
    'w.nieuw': 'новий',
    's.people.1': 'Мене звати Сара.',
    's.people.2': 'Хто тут начальник?',
    's.people.3': { m: 'Я новий колега.', f: 'Я нова колега.', x: 'Я тепер працюю разом з вами.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)

    // Unit: Asking for help
    'u.help': 'Як попросити про допомогу',
    'l.understand': 'Я не розумію',
    'w.begrijpniet': 'я не розумію',
    'w.nogeenkeer': 'ще раз',
    'w.langzaam': 'повільно',
    'w.helpen': 'допомагати',
    'w.waar': 'де',
    'w.wc': 'туалет',
    's.understand.1': 'Можете це повторити?',
    's.understand.2': 'Чи могли б ви говорити повільніше?',
    's.understand.3': 'Де туалет?',

    // Unit: Safety first
    'u.safety': 'Безпека понад усе',
    'u.emergency': "Коли щось іде не так", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Засоби захисту',
    'w.helm': 'каска',
    'w.handschoenen': 'рукавиці',
    'w.veiligheidsschoenen': 'захисне взуття',
    'w.hesje': 'світловідбивний жилет',
    'w.bril': 'захисні окуляри',
    'w.dragen': 'носити (одяг, захист)',
    's.gear.1': 'Завжди носи каску.',
    's.gear.2': 'Де рукавиці?',
    's.gear.3': 'Я ношу світловідбивний жилет.',
    'l.danger': 'Небезпека!',
    'w.pasop': 'обережно',
    'w.stop': 'стоп',
    'w.help': 'допоможіть',
    'w.brand': 'пожежа',
    'w.nooduitgang': 'аварійний вихід',
    'w.ongeluk': 'нещасний випадок',
    's.danger.1': 'Обережно, підлога мокра!',
    's.danger.2': 'Де аварійний вихід?',
    's.danger.3': 'Стався нещасний випадок!',
    'l.alarm': 'Пожежна тривога та евакуація', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'сигнал тривоги', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'евакуювати (усі виходять із будівлі)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'шлях евакуації', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'сходи', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'місце збору (де всі збираються надворі)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'вогнегасник', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Де вогнегасник?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Ми маємо евакуювати будівлю.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Іди сходами, не ліфтом.', // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': 'Повідомити про нещасний випадок',
    'w.gewond': 'поранений',
    'w.bloeden': 'кровоточити',
    'w.ehbodoos': 'аптечка',
    'w.bhver': 'відповідальний за надзвичайні ситуації на роботі (перша допомога, пожежа, евакуація)',
    'w.ziekenhuis': 'лікарня',
    'w.gebeuren': 'ставатися, траплятися',
    's.accident.1': 'Мій колега впав.',
    's.accident.2': { m: 'Я порізався.', f: 'Я порізалася.', x: 'У мене поріз.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.accident.3': 'Я хочу повідомити про нещасний випадок.',

    // Unit: In the warehouse
    'u.warehouse': 'На складі',
    'l.things': 'Речі на складі',
    'w.doos': 'коробка',
    'w.pallet': 'піддон',
    'w.heftruck': 'навантажувач',
    'w.kar': 'візок',
    'w.stelling': 'стелаж',
    'w.scanner': 'сканер',
    's.things.1': 'Постав коробку на піддон.',
    's.things.2': 'Де сканер?',
    's.things.3': 'Навантажувач їде.',
    'l.directions': 'Напрямки та дії',
    'w.links': 'ліворуч',
    'w.rechts': 'праворуч',
    'w.boven': 'вгорі',
    'w.beneden': 'внизу',
    'w.tillen': 'піднімати',
    'w.pakken': 'брати',
    's.directions.1': 'Коробка стоїть ліворуч.',
    's.directions.2': 'Піднімай, згинаючи ноги.',
    's.directions.3': 'Іди праворуч.',

    // Unit: Time and schedule
    'u.time': 'Час і графік',
    'l.shift': 'Моя зміна',
    'w.dienst': 'зміна',
    'w.pauze': 'перерва',
    'w.beginnen': 'починати',
    'w.klaar': 'готово',
    'w.telaat': 'із запізненням',
    'w.morgen': 'завтра',
    's.shift.1': 'Моя зміна починається о сьомій.',
    's.shift.2': 'Коли перерва?',
    's.shift.3': { m: 'Вибачте, я запізнився.', f: 'Вибачте, я запізнилася.', x: 'Вибачте за запізнення.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'l.sick': 'Повідомити про хворобу',
    'w.ziek': 'хворий',
    'w.bellen': 'дзвонити (телефоном)',
    'w.dokter': 'лікар',
    'w.pijn': 'біль',
    'w.vandaag': 'сьогодні',
    'w.beter': 'краще',
    's.sick.1': { m: 'Я сьогодні хворий.', f: 'Я сьогодні хвора.', x: 'Я сьогодні хворію.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.sick.2': 'У мене болить спина.',
    's.sick.3': 'Я дзвоню лікарю.',

    'c.hello.q': 'Гарного вечора!',
    'c.hello.a': 'До завтра!',
    'c.people.q': 'Як тебе звати?',
    'c.people.a': 'Мене звати Сара.',
    'l.arrive': 'Перший день: як знайти дорогу',
    'w.ingang': 'вхід',
    'w.receptie': 'рецепція',
    'w.kantine': 'їдальня',
    'w.kleedkamer': 'роздягальня',
    'w.buddy': 'наставник, бадді (колега, який допомагає на початку)',
    'w.vinden': 'знаходити',
    's.arrive.1': 'До кого мені звернутися?',
    's.arrive.2': 'Я не можу знайти роздягальню.',
    's.arrive.3': 'Хто сьогодні мій наставник?',
    'c.arrive.q': 'Доброго ранку, ви з якого питання?',
    'c.arrive.a': { m: 'Я новий працівник. Починаю сьогодні.', f: 'Я нова працівниця. Починаю сьогодні.', x: 'Я тут уперше. Починаю сьогодні.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.understand.q': 'Ти розумієш?',
    'c.understand.a': 'Ні, ще раз, будь ласка.',
    'c.gear.q': 'У тебе є каска?',
    'c.gear.a': 'Так, вона на мені.',
    'c.danger.q': 'Стався нещасний випадок?',
    'c.danger.a': 'Так, дзвони 112!',
    'c.alarm.q': 'Усі надворі?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Ні, мого колеги ще немає.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Що сталося?',
    'c.accident.a': 'Він упав. У нього йде кров.',
    'l.notyet': 'Цього мене ще не навчили',
    'w.nogniet': 'ще ні',
    'w.mogen': 'мати дозвіл, можна',
    'w.proberen': 'пробувати',
    'w.voordoen': 'показувати, як (спершу зробити самому)',
    'w.gevaarlijk': 'небезпечний',
    'w.uitleg': 'пояснення',
    's.notyet.1': { m: 'Я цього ще не навчився.', f: 'Я цього ще не навчилася.', x: 'Мене цього ще не навчили.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.notyet.2': 'Мені ще нічого не пояснили.',
    's.notyet.3': { m: 'Мені вже можна робити це самому?', f: 'Мені вже можна робити це самій?', x: 'Мені вже можна робити це самостійно?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.q': 'Просто спробуй, це легко.',
    'c.notyet.a': 'Можеш спершу показати, як?',
    'c.things.q': 'Куди поставити коробку?',
    'c.things.a': 'На піддон.',
    'c.directions.q': 'Ліворуч чи праворуч?',
    'c.directions.a': 'Праворуч, біля стелажа.',
    'c.shift.q': 'Коли починається твоя зміна?',
    'c.shift.a': 'Завтра о сьомій.',
    'c.sick.q': { m: 'Ти хворий?', f: 'Ти хвора?', x: 'Ти погано почуваєшся?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.a': 'Так, сьогодні я залишаюся вдома.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Дзвони 112!',
    'p.hurt': { m: 'Я поранений.', f: 'Я поранена.', x: 'У мене травма.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Збирання замовлень", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "товар (один продукт)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "комірка (одне місце на стелажі)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "наліпка, етикетка", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "збирати", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "не вистачати (цього немає)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "локація (код місця, наприклад A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Я збираю товари для цього замовлення.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Цього товару немає. Комірка порожня.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Наліпка має бути на коробці.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Яка це локація?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Ряд три, комірка дванадцять.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Завантаження і розвантаження", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "вантажівка", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "водій", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "розвантажувати (виймати речі з вантажівки)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "рокла (ручний візок, який піднімає піддон)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "плівка (тонкий пластик навколо піддона)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "накладна (папір, де написано, що є у вантажівці)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Вантажівка стоїть біля дверей номер чотири.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Спершу ми розвантажуємо ці піддони.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Водій чекає на накладну.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Цей піддон готовий?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Ні, його ще треба обмотати плівкою.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Як це зробити?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "як", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "так, ось так", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "складний", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "простий, легкий", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "знати", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "це правильно", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Як це зробити?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Це для мене складно.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Я так правильно роблю?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Ти знаєш, як це робити?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Ні, цього я ще не знаю.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Можна щось запитати?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "питати", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "хто", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "на хвилинку", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "час", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "заважати (тому, хто зайнятий)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "сумніватися (ти не знаєш напевно)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Можна щось запитати?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Вибач, що заважаю.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Хто може мені допомогти?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "У тебе є питання?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Так. Маєш хвилинку?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Де це?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "тут", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "там", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "загублений (ти не можеш це знайти)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "вихід", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "показувати рукою (показати, де це)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "біля, поруч із", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': { m: "Я заблукав.", f: "Я заблукала.", x: "Я не можу знайти дорогу." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Де вихід?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Туалет там, біля їдальні.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Можеш це знайти?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Ні. Можеш показати, де це?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Невеликі рани й опіки", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "рана", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "бинт, пов’язка", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "охолоджувати (холодною водою)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "поріз (невелика рана від ножа чи чогось гострого)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "знепритомніти", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "станція для промивання очей (вода, щоб промити очі)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Охолоди опік водою.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "Це невеликий поріз. Притисни рану.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Де станція для промивання очей?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Мій колега ось-ось знепритомніє.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Хай він трохи полежить. Я покличу допомогу.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Дзвінок на 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "екстрені служби (швидка, пожежна, поліція)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "назва вулиці", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "номер будинку", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "при свідомості (людина реагує, коли до неї говорять)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "зустрічати (когось біля дверей)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "залишатися на лінії (ти не кладеш слухавку)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Я дзвоню 112. Мені потрібна швидка.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Яка назва вулиці й номер будинку?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Я зустріну швидку біля входу.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Він реагує, коли ти до нього говориш?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Ні. Він не реагує.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Твій графік", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "тижневий графік (хто коли працює цього тижня)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "застосунок із графіком (твої зміни в телефоні)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "вільний (ти можеш тоді працювати)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.wijziging': "зміна (у плані)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "підміняти (працювати замість когось, кого немає)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "вихідний день", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Новий графік є в застосунку.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Ти можеш працювати в суботу?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Можеш завтра підмінити Сару?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "У твоєму графіку є зміна.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Добре. Якого дня мені працювати?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Години й перерви", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "обідня перерва", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "час відпочинку (вільний час між двома змінами)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "робочий день", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "табель годин (куди ти записуєш відпрацьовані години)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "піти раніше", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "поспіль (один за одним)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Я записую свої години в табель годин.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Можна мені сьогодні піти на годину раніше?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': { m: "Я відпрацював шість днів поспіль.", f: "Я відпрацювала шість днів поспіль.", x: "У мене вже шість робочих днів поспіль." }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Коли в тебе обідня перерва?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "О дванадцятій, пів години.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Твої перші тижні", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "ознайомча екскурсія (хтось показує тобі будівлю)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "наставник (колега, який допомагає тобі в перші тижні)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "блокнот", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "ходити з колегою (і дивитися, як він працює)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "запам’ятати", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "самостійно (без допомоги)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Покажеш це ще раз?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Сьогодні я ходжу разом із Сарою.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Я записую це у свій блокнот.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Ти пам’ятаєш усе з екскурсії?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Майже все. Де там була їдальня?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Комплектування замовлень і річтрак", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "комплектувальник (працівник, який збирає замовлення; також невелика машина, на якій ти стоїш, щоб брати товар згори)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "річтрак (навантажувач для дуже високих стелажів; його вила висуваються вперед)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "лист комплектації (список товарів, які ти мусиш зібрати)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "сканувати", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "пішохід (людина, що йде пішки)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "зігрітися (у теплому місці, після роботи на холоді)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Я сканую кожен товар з листа комплектації.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Пішоходи ходять пішохідною доріжкою.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "У морозильній камері я ношу термоодяг.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Можеш ненадовго сісти за кермо річтрака?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Ні, мені не можна. Мене цього не навчали.", // nieuw, nalezen (AI-correctie 28 nov 2026)
  },
};

export default lang;
