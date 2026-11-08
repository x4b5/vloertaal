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
    themeSand: 'Пісок', // nieuw, nalezen
    themeHarbour: 'Порт', // nieuw, nalezen
    themeWorkwear: 'Робоча куртка', // nieuw, nalezen
    themeDark: 'Темний',
    voice: 'Нідерландський голос',
    voiceAuto: 'Автоматично',
    voiceHint: 'Натисни 🔊, щоб послухати. Голоси Vloertaal звучать однаково на кожному телефоні; інші голоси беруться з твого телефону.',
    voiceNone: 'На цьому пристрої немає нідерландського голосу. Його можна додати в налаштуваннях телефону (Синтез мовлення).',
    appTagline: 'Нідерландська для роботи',
    chooseLanguage: 'Обери мову підказок',
    englishOnly: 'Лише англійська',
    beta: 'Переклад ще не перевірено', // nieuw, nalezen
    dayStreak: { one: 'день поспіль', few: 'дні поспіль', many: 'днів поспіль', other: 'днів поспіль' },
    streakStarted: 'Твоя серія днів почалася! Повертайся завтра.',
    streakGrew: { one: '{n} день поспіль! Так тримати.', few: '{n} дні поспіль! Так тримати.', many: '{n} днів поспіль! Так тримати.', other: '{n} днів поспіль! Так тримати.' },
    start: 'Почати',
    practice: 'Повторити',
    locked: 'Спочатку заверши попередній урок',
    newWord: 'Нове слово',
    tapToHear: 'Натисни, щоб почути',
    sayItAloud: 'Скажи це вголос.', // nieuw, nalezen
    sayItQuietly: 'Скажи це тихо або подумки.', // nieuw, nalezen
    whatDoesThisMean: 'Що це означає?',
    snapQuestion: 'Розумієш?', // nieuw, nalezen
    snapYes: 'Так, добре.', // nieuw, nalezen
    snapGoodAsk: 'Добре, що питаєш!', // nieuw, nalezen
    snapRight: 'Добре зрозуміло!', // nieuw, nalezen
    snapAskBetter: 'Бачиш? Краще було запитати.', // nieuw, nalezen
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
    rightAnswerIs: 'Ось правильна відповідь:', // nieuw, nalezen
    bestAnswerIs: 'Ось найкраща відповідь:', // nieuw, nalezen
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
    who113: 'Ти думаєш про самогубство або хвилюєшся за когось. Безкоштовно, вдень і вночі.', // nieuw, nalezen
    whoVeiligThuis: 'Насильство або жорстоке поводження вдома, щодо тебе чи когось іншого. Безкоштовно, можна анонімно.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    countryHint: 'Ти отримаєш правила роботи цієї країни.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    sectorRetail: 'Магазин і супермаркет', // nieuw, nalezen
    sectorCleaning: 'Прибирання',
    sectorHorticulture: 'Садівництво і теплиці', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Технічні роботи', // nieuw (30 okt 2026), nalezen
    sectorGarage: 'Автосервіс', // nieuw (30 okt 2026), nalezen
    sound: 'Звук',
    soundOn: 'Зі звуком',
    withoutSound: 'Без звуку',
    quietHint: 'Без звуку в уроках немає вправ на слухання і нічого не вмикається саме. Натисни 🔊, щоб почути слово, наприклад у навушниках.',
    soundOffToast: 'Без звуку. Звук можна увімкнути в Налаштуваннях.',
    noInternetSound: 'Немає інтернету: звук зараз не працює.', // nieuw, nalezen
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
    reviewFirstHint: 'Спочатку повторення. Так ти запам’ятаєш більше.', // nieuw, nalezen
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
    remindAddedAsk: 'Додано? Тоді побачиш його у своєму календарі.', // nieuw, nalezen
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
    countHint: 'Застосунок рахує, як часто проходять уроки і скільки приблизно вони тривають. І чи є десь помилка в застосунку. Без імені, без акаунта, без стеження.', // fout-zin nieuw, nalezen
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
    privacyLink: 'Прочитати заяву про конфіденційність (нідерландською)', // nieuw, nalezen
    routeTitle: 'Що ти хочеш вивчати?', // nieuw, nalezen
    routeLearn: 'Вивчати нідерландську для роботи і те, як тут влаштована робота', // nieuw, nalezen
    routeRules: 'Я вже говорю нідерландською: лише правила роботи', // nieuw, nalezen
    routeLearnShort: 'Вивчати нідерландську', // nieuw, nalezen
    byTheme: 'За розділами',
    inOrder: 'По порядку',
    searchTopics: 'Пошук теми', // nieuw, nalezen
    searchNone: 'Немає теми з цим словом.', // nieuw, nalezen
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
    micPrivacy: "Ніхто інший тебе не чує. Нічого не надсилається.", // nieuw, nalezen
    micUnavailable: 'Мікрофон вимкнено. Скажи це вголос зараз, потім продовжуй.',
    cantSpeak: 'Зараз не можу говорити',
    soundsSame: 'Звучить так само',
    sayAgain: 'Скажи ще раз',
    hearMine: 'Послухай себе', // nieuw, nalezen
    thenNow: 'Тоді й зараз', // nieuw, nalezen
    thenNowFirst: 'Твоя перша спроба: {date}', // nieuw, nalezen
    sayTogether: "Скажи разом", // nieuw, nalezen
    chorusHint: "Кажи одночасно з голосом. Нічого не записується.", // nieuw, nalezen
    chorusAlone: "Тепер тільки ти", // nieuw, nalezen
    speakBrave: "Помилки — це нормально. Нідерландці розуміють тебе і з помилками.", // nieuw, nalezen
    speakMe: 'Я',
    speakingPractice: 'Практика мовлення',
    speakingHint: "Кажи слова вголос і порівнюй. Ніхто інший тебе не чує: нічого не надсилається. Твій перший запис речення залишається в телефоні, щоб порівняти пізніше.", // nieuw, nalezen
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
    sectorGroupCare: 'Догляд і обслуговування',
    sectorGroupShop: 'Магазини й ресторани', // nieuw, nalezen
    sectorGroupBuild: 'Будівництво і техніка', // nieuw (30 okt 2026), nalezen
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
    remindChooseOwn: { m: 'Вибери час сам', f: 'Вибери час сама', x: 'Вибери свій час' }, // x: nieuw, nalezen
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
    bramDone: { m: 'На сьогодні ти все зробив. До завтра.', f: 'На сьогодні ти все зробила. До завтра.', x: 'На сьогодні все зроблено. До завтра.' }, // x: nieuw, nalezen
    bramPerfect: 'Дуже добре. Ти знаєш ці слова.',
    bramGood: 'Гарна робота. Крок за кроком.',
    bramHard: { m: 'Добре, що ти потренувався. Складні слова повернуться.', f: 'Добре, що ти потренувалася. Складні слова повернуться.', x: 'Добре, що ти тренуєшся. Складні слова повернуться.' }, // x: nieuw, nalezen
    bramReview: 'Добре. Повторення допомагає запамʼятати.',
    bramIntro: 'Я Bram, твій колега.',
    bramIntroHello: 'Привіт, я Bram.',
    showDutch: 'Показати нідерландською',
    showAnswers: 'Показати відповіді', // nieuw, nalezen
    lastUpdated: 'Останнє оновлення: {date}',
    /* G4 b3 */
    buildListen: 'Послухай і склади речення',
    chatWhichQuestion: 'Яке запитання підходить до цієї відповіді?',
    reviewWaiting: 'Ще чекають слова: {n}. Вони повернуться в наступні дні.',
    factTitle: 'А ти знаєш?',
    fact3: { m: 'Ти не один: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.', f: 'Ти не одна: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.', x: 'Не тільки ти: понад 3 мільйони дорослих у Нідерландах мають труднощі з читанням, рахуванням або компʼютером. Тренування допомагає.' }, // x: nieuw, nalezen
    fact7: 'Серед мігрантів, які дуже добре говорять нідерландською, 69 зі 100 мають оплачувану роботу.',
    fact14: 'У багатьох бібліотеках є Taalhuis («дім мови»): безкоштовна допомога, щоб далі вчити нідерландську.',
    fact30: { m: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. Ти тренувався вже 30 днів поспіль!', f: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. Ти тренувалася вже 30 днів поспіль!', x: 'Трохи тренуватися щодня краще, ніж багато, але зрідка. У тебе вже 30 днів тренувань поспіль!' }, // x: nieuw, nalezen
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
    resetKeeps: 'Твої уроки, слова, дні поспіль і сертифікати буде видалено. Твоя мова і налаштування залишаться.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Не завантажилося. Чи є інтернет?',
    retry: 'Спробувати ще раз',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal не може запуститися.', // nieuw, nalezen
    bootFailedHint: 'Спершу збережи свій прогрес. Потім почни заново.', // nieuw, nalezen
    startOver: 'Почати заново', // nieuw, nalezen
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Що ти вже знаєш?', // nieuw, nalezen
    toetsOffer: 'Приблизно 10 хвилин. Оцінок немає. Це тільки для тебе.', // nieuw, nalezen
    toetsEndOffer: { m: 'Ти багато навчився. Пройди тест ще раз і подивися, що ти знаєш тепер.', f: 'Ти багато навчилася. Пройди тест ще раз і подивися, що ти знаєш тепер.', x: 'Уже багато вивчено. Пройди тест ще раз і подивися, що ти знаєш тепер.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    toetsPartListen: 'Слухання', // nieuw, nalezen
    toetsPartWords: 'Слова', // nieuw, nalezen
    toetsPartSentences: 'Речення', // nieuw, nalezen
    toetsListenAsk: 'Послухай. Що це означає?', // nieuw, nalezen
    toetsNotSure: 'Не знаєш? Натисни «Я не знаю». Це нормально.', // nieuw, nalezen
    toetsMicKeep: 'Твій запис залишається тільки на цьому телефоні. Пізніше ти зможеш почути себе знову.', // nieuw, nalezen
    toetsStartDone: 'Гарний початок! Ось що ти вже знаєш.', // nieuw, nalezen
    toetsEndDone: 'Молодець! Подивися, що ти знаєш тепер.', // nieuw, nalezen
    toetsYouThen: 'Ти тоді', // nieuw, nalezen
    toetsYouNow: 'Ти зараз', // nieuw, nalezen
    toetsKeepGoing: 'Займайся трохи щодня. Тоді ти знатимеш усе більше.', // nieuw, nalezen
    toetsStart: 'Пройти тест', // nieuw, nalezen
    toetsIdk: 'Я не знаю', // nieuw, nalezen
    toetsMore: 'Більше, ніж тоді', // nieuw, nalezen
    toetsSame: 'Приблизно так само', // nieuw, nalezen
    toetsMoreAll: 'Усе разом: тепер ти знаєш більше, ніж тоді.', // nieuw, nalezen
    toetsSameAll: 'Усе разом: приблизно так само, як тоді.', // nieuw, nalezen
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Спочатку 5 запитань про тебе. Тут немає правильно чи неправильно.', // nieuw, nalezen
    toetsDurfAsk: 'Чи наважишся ти на це?', // nieuw, nalezen
    toetsDurfUnderstand: 'Сказати, що ти чогось не розумієш', // nieuw, nalezen
    toetsDurfBoss: 'Запитати щось у керівника', // nieuw, nalezen
    toetsDurfHelp: 'Попросити про допомогу', // nieuw, nalezen
    toetsDurfUnsafe: 'Сказати, що щось небезпечно', // nieuw, nalezen
    toetsDurfBreak: 'Трохи поговорити з колегою на перерві', // nieuw, nalezen
    toetsDurfNotYet: 'Ще ні', // nieuw, nalezen
    toetsDurfABit: 'Трохи', // nieuw, nalezen
    toetsDurfYes: 'Так', // nieuw, nalezen
    toetsDurfAgain: 'За кілька тижнів ми запитаємо ще раз.', // nieuw, nalezen
    tempo: 'Темп', // nieuw, nalezen
    tempoCalm: 'Спокійно', // nieuw, nalezen
    tempoNormal: 'Звичайно', // nieuw, nalezen
    tempoHint: 'Спокійно — повільно і чітко. Звичайно — як говорять колеги. Вибирай «Звичайно», якщо вже багато розумієш.', // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Покажи, як справи', // nieuw, nalezen
    coachCardIntro: 'Ця картка показує твій прогрес. Покажи її вчителю, коучу або керівнику. Вирішуєш ти.', // nieuw, nalezen
    coachCardNo: 'Ти можеш також сказати «ні».', // nieuw, nalezen
    coachCardKeep: 'Картку робить твій телефон. Нічого не надсилається. Vloertaal нічого не зберігає.', // nieuw, nalezen
    coachCardWhat: 'На картці, нідерландською:', // nieuw, nalezen
    coachTopics: 'Завершені теми', // nieuw, nalezen
    coachDays: 'Дні занять за останні 4 тижні', // nieuw, nalezen
    coachLast: 'Останній урок, з датою', // nieuw, nalezen
    coachCode: 'Код: ті самі числа коротко, для огляду групи. Без імені.', // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Телефон слухає (пробна функція)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Коли ти скажеш, телефон покаже, чи він тебе зрозумів. Це відбувається на самому телефоні. Нічого не йде ні нам, ні іншим.', // nieuw, nalezen
    listenNeedsPack: 'Спершу телефону потрібна нідерландська. Це велике завантаження: користуйся Wi-Fi.', // nieuw, nalezen
    listenDownload: 'Завантажити нідерландську', // nieuw, nalezen
    listenNotNow: 'Не зараз', // nieuw, nalezen
    listenDownloading: 'Нідерландська завантажується. Спробуй пізніше.', // nieuw, nalezen
    listenFailed: 'Не вдалося. Спробуй пізніше, через Wi-Fi.', // nieuw, nalezen
    listenPrivacy: 'Слухає тільки телефон. Нічого не надсилається.', // nieuw, nalezen
    heardWait: 'Телефон слухає…', // nieuw, nalezen
    heardOk: 'Зрозуміло', // nieuw, nalezen
    heardAlmost: 'Майже: скажи {word} ще раз', // nieuw, nalezen
    heardNotYet: 'Ще не зрозуміло', // nieuw, nalezen
    goOnAnyway: 'Все одно далі', // nieuw, nalezen
    fasterAsk: 'Хочеш швидше?', // nieuw, nalezen
    fasterHint: 'Менше пояснень у нових уроках. Нідерландська у звичайному темпі.', // nieuw, nalezen
    fasterYes: 'Так', // nieuw, nalezen
    fasterNo: 'Ні', // nieuw, nalezen
    easierNext: 'Наступний урок трохи коротший.', // nieuw, nalezen
    fasterSetting: 'Вчитися швидше', // nieuw, nalezen
    fasterSettingHint: 'Увімкнено: менше пояснень у нових уроках і нідерландська у звичайному темпі. Вимкнено: як раніше.', // nieuw, nalezen
    tempoFasterHint: 'Вчитися швидше: менше пояснень у нових уроках і нідерландська у звичайному темпі.', // nieuw, nalezen
    samenTitle: 'Вправляйтеся разом', // nieuw, nalezen
    samenRowHint: 'Двоє людей, один телефон', // nieuw, nalezen
    samenIntro: 'Вправляйся з колегою, другом або вчителем. Читайте по черзі.', // nieuw, nalezen
    samenHow: 'Людина 1 — колега. Людина 2 відповідає.', // nieuw, nalezen
    samenNoScore: 'Нічого не записується. Оцінки немає.', // nieuw, nalezen
    samenPerson: 'Людина {n}', // nieuw, nalezen
    samenAnswer: 'Відповідь', // nieuw, nalezen
    samenHear: 'Послухати', // nieuw, nalezen
    samenNext: 'Далі', // nieuw, nalezen
    samenTranslation: 'Переклад', // nieuw, nalezen
    samenEnd: 'Молодці! Поміняйтеся ролями і зробіть ще раз?', // nieuw, nalezen
    samenSwap: 'Поміняйтеся ролями', // nieuw, nalezen
    samenStop: 'Готово', // nieuw, nalezen
    checkStart: 'Я це знаю: коротка перевірка', // nieuw, nalezen
    checkPassed: 'Ти вже це знаєш. Позначити цю тему як пройдену?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    checkNoCert: 'Тоді сертифіката ще немає. Ти отримаєш його після уроків.', // nieuw, nalezen
    checkNotYet: 'Уроки допоможуть тобі з цією темою.', // nieuw, nalezen
    checkMark: 'Позначити', // nieuw, nalezen
    checkVia: 'через перевірку', // nieuw, nalezen
    checkUndo: 'Усе ж пройти уроки', // nieuw, nalezen
    commLabel: "Спілкування", // nieuw, nalezen
    shareInvite: 'Я вчу нідерландську для роботи за допомогою Vloertaal. Безкоштовно: {link}', // nieuw, nalezen (AI-correctie 2 nov 2026)
    briefjeWhat: 'Vloertaal — безкоштовний застосунок, щоб вивчати нідерландську для роботи.', // nieuw, nalezen
    briefjeHow: 'Короткі уроки на твоєму телефоні, з підказками твоєю мовою. Без акаунта.', // nieuw, nalezen
    briefjeOpen: 'Відкрий на телефоні:', // nieuw, nalezen
    workTry: 'Спробуй сьогодні на роботі', // nieuw, nalezen
    workTryWhen: 'Коли:', // nieuw, nalezen
    workTryThen: 'Тоді скажи:', // nieuw, nalezen
    colleagueCard: 'Для колеги', // nieuw, nalezen
    colleagueCardHint: 'Покажи це колезі, який говорить нідерландською. Тут написано, як він може допомогти тобі практикуватися.', // nieuw, nalezen
    colleagueShare: 'Надіслати колезі', // nieuw, nalezen
    coachCardRights: 'Показувати назви тем про твої права', // nieuw, nalezen
    speakFromMemory: 'Тепер напам’ять: як це було нідерландською?', // nieuw, nalezen
    keptNofM: 'Слова двотижневої давності й старші: ти ще пам’ятаєш {n} з {m}.', // nieuw, nalezen
    verbSecond: 'Дієслово стоїть на місці 2.', // nieuw, nalezen
    calmScreen: 'Спокійний екран', // nieuw, nalezen
    calmAuto: 'Як у телефоні', // nieuw, nalezen
    calmHint: 'Увімкнено: нічого не рухається, немає святкування серії після уроку, а серія і слова не показуються на головному екрані.', // nieuw, nalezen
    infoMore: 'Більше пояснень', // nieuw, nalezen
    tipsAbout: 'Про ці поради', // nieuw, nalezen
    tipsNotChecked: 'Експерт ще не перевірив це пояснення.', // nieuw, nalezen
    lawStale: 'Дата цього пояснення: {month}. Найновіші правила перевір у Juridisch Loket або на Work in NL.', // nieuw, nalezen
    lawStaleBe: 'Дата цього пояснення: {month}. Найновіші правила перевір у justitiehuis або на werk.belgie.be.', // nieuw, nalezen
    aboutMore: 'Більше про Vloertaal', // nieuw, nalezen
    geluktAsk: 'Вдалося сказати це на роботі?', // nieuw, nalezen
    geluktYes: 'Так, вдалося', // nieuw, nalezen
    geluktNotYet: 'Ще ні', // nieuw, nalezen
    geluktDoneN: { one: 'Молодець! Уже {n} речення вдалося сказати на роботі.', few: 'Молодець! Уже {n} речення вдалося сказати на роботі.', many: 'Молодець! Уже {n} речень вдалося сказати на роботі.', other: 'Молодець! Уже {n} речення вдалося сказати на роботі.' }, // nieuw, nalezen
    geluktDoneOne: 'Молодець! Перше речення на роботі вдалося.', // nieuw, nalezen
    geluktWhere: 'Їх можна знайти в Налаштуваннях.', // nieuw, nalezen
    geluktTitle: 'Вдалося на роботі', // nieuw, nalezen
    geluktListHint: { m: 'Ці речення ти сказав на роботі.', f: 'Ці речення ти сказала на роботі.', x: 'Ці речення вдалося сказати на роботі.' }, // nieuw, nalezen
    nextMinutesN: 'близько {n} хв', // nieuw, nalezen
    saveFailed: 'Твій прогрес не збережено. Телефон заповнений? Звільни трохи місця. Або відкрий Налаштування: «Збережи свій прогрес».', // nieuw, nalezen
    bewaarNudge: 'Телефон іноді може стерти твій прогрес. Тому збережи копію.', // nieuw, nalezen
    bewaarGo: 'Зберегти зараз', // nieuw, nalezen
    backupShare: 'Надіслати собі', // nieuw, nalezen
    backupShareHint: 'Надішли файл собі, наприклад у WhatsApp або електронною поштою.', // nieuw, nalezen
    backupMade: 'Готово. Добре збережи цей файл. З ним ти пізніше повернеш свій прогрес.', // nieuw, nalezen
    speakTurnPrompt: 'Що ти скажеш?', // nieuw, nalezen
    speakTurnExample: 'Приклад', // nieuw, nalezen
    speakTurnReveal: 'Послухай відповідь', // nieuw, nalezen
    sceneTitle: 'Слухай на роботі', // nieuw, nalezen
    sceneIntro: 'Тут шумно, як на роботі. Слухай. Потім будуть запитання.', // nieuw, nalezen
    buildFront: 'Постав позначене слово на початок', // nieuw, nalezen
    bridgeTitle: 'Правила роботи', // nieuw, nalezen
    bridgeText: 'Ти вже знаєш багато нідерландської. Хочеш також вивчити правила роботи? Тоді все буде нідерландською.', // nieuw, nalezen
    bridgeGo: 'Так, покажи', // nieuw, nalezen
    klankTitle: 'Як це сказати?', // nieuw, nalezen
    klankHint: 'Торкнися звуку. Подивись, як його робить рот.', // nieuw, nalezen
    klankSpeed: 'Швидкість', // nieuw, nalezen
    klankScrub: 'Слово, звук за звуком', // nieuw, nalezen
    tagSound: 'Звук', // nieuw, nalezen
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
    's.hello.1': { m: 'Привіт, я тут новенький.', f: 'Привіт, я тут новенька.', x: 'Привіт, я тут недавно.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.people.3': { m: 'Я новий колега.', f: 'Я нова колега.', x: 'Я новий / нова колега.' }, // x: nieuw, nalezen

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
    'u.emergency': "Коли щось іде не так", // nieuw, nalezen
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
    'l.alarm': 'Пожежна тривога та евакуація', // nieuw, nalezen
    'w.alarm': 'сигнал тривоги', // nieuw, nalezen
    'w.ontruimen': 'евакуювати (усі виходять із будівлі)', // nieuw, nalezen
    'w.vluchtroute': 'шлях евакуації', // nieuw, nalezen
    'w.trap': 'сходи', // nieuw, nalezen
    'w.verzamelplaats': 'місце збору (де всі збираються надворі)', // nieuw, nalezen
    'w.brandblusser': 'вогнегасник', // nieuw, nalezen
    's.alarm.1': 'Де вогнегасник?', // nieuw, nalezen
    's.alarm.2': 'Ми маємо евакуювати будівлю.', // nieuw, nalezen
    's.alarm.3': 'Іди сходами, не ліфтом.', // nieuw, nalezen
    'l.accident': 'Повідомити про нещасний випадок',
    'w.gewond': 'поранений',
    'w.bloeden': 'кровоточити',
    'w.ehbodoos': 'аптечка',
    'w.bhver': 'відповідальний за надзвичайні ситуації на роботі (перша допомога, пожежа, евакуація)',
    'w.ziekenhuis': 'лікарня',
    'w.gebeuren': 'ставатися, траплятися',
    's.accident.1': 'Мій колега впав.',
    's.accident.2': { m: 'Я порізався.', f: 'Я порізалася.', x: 'У мене поріз.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    's.shift.3': { m: 'Вибачте, я запізнився.', f: 'Вибачте, я запізнилася.', x: 'Вибачте за запізнення.' }, // x: nieuw, nalezen
    'l.sick': 'Повідомити про хворобу',
    'w.ziek': 'хворий',
    'w.bellen': 'дзвонити (телефоном)',
    'w.dokter': 'лікар',
    'w.pijn': 'біль',
    'w.vandaag': 'сьогодні',
    'w.beter': 'краще',
    's.sick.1': { m: 'Я сьогодні хворий.', f: 'Я сьогодні хвора.', x: 'Я сьогодні хворію.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.arrive.a': { m: 'Я новий працівник. Починаю сьогодні.', f: 'Я нова працівниця. Починаю сьогодні.', x: 'Я новий працівник / нова працівниця. Починаю сьогодні.' }, // x: nieuw, nalezen
    'c.understand.q': 'Ти розумієш?',
    'c.understand.a': 'Ні, ще раз, будь ласка.',
    'c.gear.q': 'У тебе є каска?',
    'c.gear.a': 'Так, вона на мені.',
    'c.danger.q': 'Стався нещасний випадок?',
    'c.danger.a': 'Так, дзвони 112!',
    'c.alarm.q': 'Усі надворі?', // nieuw, nalezen
    'c.alarm.a': 'Ні, мого колеги ще немає.', // nieuw, nalezen
    'c.accident.q': 'Що сталося?',
    'c.accident.a': 'Він упав. У нього йде кров.',
    'l.notyet': 'Цього мене ще не навчили',
    'w.nogniet': 'ще ні',
    'w.mogen': 'мати дозвіл, можна',
    'w.proberen': 'пробувати',
    'w.voordoen': 'показувати, як (спершу зробити самому)',
    'w.gevaarlijk': 'небезпечний',
    'w.uitleg': 'пояснення',
    's.notyet.1': { m: 'Я цього ще не навчився.', f: 'Я цього ще не навчилася.', x: 'Мене цього ще не навчили.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.notyet.2': 'Мені ще нічого не пояснили.',
    's.notyet.3': { m: 'Мені вже можна робити це самому?', f: 'Мені вже можна робити це самій?', x: 'Мені вже можна робити це самостійно?' }, // x: nieuw, nalezen
    'c.notyet.q': 'Просто спробуй, це легко.',
    'c.notyet.a': 'Можеш спершу показати, як?',
    'c.things.q': 'Куди поставити коробку?',
    'c.things.a': 'На піддон.',
    'c.directions.q': 'Ліворуч чи праворуч?',
    'c.directions.a': 'Праворуч, біля стелажа.',
    'c.shift.q': 'Коли починається твоя зміна?',
    'c.shift.a': 'Завтра о сьомій.',
    'c.sick.q': { m: 'Ти хворий?', f: 'Ти хвора?', x: 'Ти погано почуваєшся?' }, // x: nieuw, nalezen
    'c.sick.a': 'Так, сьогодні я залишаюся вдома.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Дзвони 112!',
    'p.hurt': { m: 'Я поранений.', f: 'Я поранена.', x: 'У мене травма.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
  },
};

export default lang;
