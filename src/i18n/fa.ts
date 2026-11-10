import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'fa',
  name: 'Persian (Iran)',
  nativeName: 'فارسی',
  dir: 'rtl',
  reviewed: false,
  ui: {
    theme: 'ظاهر',
    themeAuto: 'خودکار',
    themeSand: 'ماسه', // nieuw, nalezen
    themeHarbour: 'بندر', // nieuw, nalezen
    themeWorkwear: 'لباس کار', // nieuw, nalezen
    themeDark: 'تیره',
    voice: 'صدای هلندی',
    voiceAuto: 'خودکار',
    voiceHint: 'برای شنیدن 🔊 را بزنید. صداهای Vloertaal روی هر گوشی یکسان است؛ صداهای دیگر از گوشی خودتان می‌آیند.',
    voiceNone: 'این دستگاه صدای هلندی ندارد. می\u200cتوانید آن را در تنظیمات گوشی (تبدیل متن به گفتار) اضافه کنید.',
    appTagline: 'هلندی برای محیط کار',
    chooseLanguage: 'زبان خود را انتخاب کنید',
    englishOnly: 'فقط انگلیسی',
    beta: 'ترجمه هنوز بررسی نشده است', // nieuw, nalezen
    dayStreak: 'روز پشت سر هم',
    streakStarted: 'روزهای پشت سر همِ شما شروع شد! فردا برگردید.',
    streakGrew: '{n} روز پشت سر هم! ادامه بدهید.',
    start: 'شروع',
    practice: 'دوباره تمرین کنید',
    locked: 'اول درس قبلی را تمام کنید',
    newWord: 'کلمهٔ جدید',
    tapToHear: 'برای شنیدن ضربه بزنید',
    sayItAloud: 'آن را بلند بگویید.', // nieuw, nalezen
    sayItQuietly: 'آن را آرام بگویید، یا در ذهن‌تان.', // nieuw, nalezen
    whatDoesThisMean: 'این یعنی چه؟',
    snapQuestion: 'متوجه شدید؟', // nieuw, nalezen
    snapYes: 'بله، باشه.', // nieuw, nalezen
    snapGoodAsk: 'خوب است که می‌پرسید!', // nieuw, nalezen
    snapRight: 'درست فهمیدید!', // nieuw, nalezen
    snapAskBetter: 'دیدید؟ پرسیدن بهتر بود.', // nieuw, nalezen
    whichOneIs: 'کدام یک «{word}» است؟',
    mixLesson: 'مرور ترکیبی',
    whatDoYouHear: 'چه می‌شنوید؟',
    buildSentence: 'این جمله را به هلندی بسازید',
    typeWhatYouHear: 'چیزی را که می‌شنوید بنویسید',
    check: 'بررسی',
    continue: 'ادامه',
    correct: 'آفرین!',
    almost: 'درست است، ولی به املا دقت کنید',
    incorrect: 'نه کاملاً',
    correctAnswer: 'پاسخ درست',
    rightAnswerIs: 'پاسخ درست این است:', // nieuw, nalezen
    bestAnswerIs: 'بهترین پاسخ این است:', // nieuw, nalezen
    yourAnswer: 'پاسخ شما',
    inARow: '{n} پشت سر هم',
    cantListen: 'الان نمی‌توانم گوش بدهم',
    learnWriting: 'می‌خواهم نوشتن را هم یاد بگیرم',
    learnWritingHint: 'روشن: کلمه‌هایی را که می‌شنوید با حروف بنویسید. خاموش: کلمهٔ نوشته‌شده‌ای را که می‌شنوید انتخاب کنید.',
    tagRepeat: 'دوباره',
    readAloud: 'بلند بخوانید',
    lessonComplete: 'درس تمام شد!',
    phrasebook: 'جمله‌های اضطراری',
    phrasebookHint: 'روی یک جمله ضربه بزنید تا آن را بشنوید. می‌توانید صفحه را به همکارتان هم نشان بدهید.',
    whoToCall: 'مشکل در کار؟ چه کسی کمک می‌کند',
    who112: 'اورژانس: خطر جانی، آتش‌سوزی یا جرمی که همین حالا رخ می‌دهد.',
    whoLegal: 'مشاورهٔ رایگان دربارهٔ قرارداد، حقوق یا اخراج.',
    whoInspection: 'گزارش کار ناامن، حقوق خیلی کم یا استثمار. می‌توانید ناشناس بمانید.',
    whoFairwork: 'در کار از شما سوءاستفاده می‌شود، یا فکر می‌کنید این‌طور است.',
    who113: 'به پایان دادن به زندگی‌تان فکر می‌کنید، یا نگران کسی هستید. رایگان، شب و روز.', // nieuw, nalezen
    whoVeiligThuis: 'خشونت یا بدرفتاری در خانه، علیه شما یا کس دیگری. رایگان، بدون گفتن نام هم می‌شود.', // nieuw, nalezen
    settings: 'تنظیمات',
    helpLanguage: 'زبان کمکی',
    resetProgress: 'پاک کردن پیشرفت من',
    resetConfirm: 'همهٔ پیشرفت روی این دستگاه پاک شود؟',
    audioUnavailable: 'صدا روی این دستگاه در دسترس نیست.',
    slow: 'آهسته',
    completeChat: 'گفتگو را کامل کنید',
    meaning: 'معنی',
    navRoute: 'درس‌ها',
    navWords: 'کمک',
    rightFirstTime: 'درست در بار اول',
    newWords: 'کلمه‌های جدید',
    wordsLearnedN: '{n} کلمه یاد گرفتید',
    practiseMistakes: 'تمرین اشتباه‌ها · {n} تا مانده',
    quitHint: 'پاسخ\u200cهایتان در این درس ذخیره نمی\u200cشود.',
    keepGoing: 'ادامه بدهید',
    stopLesson: 'توقف درس',
    fullVersion: 'نسخهٔ کامل',
    unlockFull: 'باز کردن نسخهٔ کامل',
    unlockHint: 'با کد همهٔ درس‌ها باز می‌شوند. کد رایگان است. هنوز کد ندارید؟ از معلم یا مربی‌تان بپرسید، یا به ما ایمیل بزنید:',
    codeNotFull: 'این کد نسخهٔ کامل را باز نمی‌کند. کد جدید بخواهید.',
    password: 'کد',
    enterPassword: 'کد را وارد کنید',
    wrongPassword: 'کد درست نیست. دوباره امتحان کنید.',
    unlock: 'باز کنید',
    sector: 'کار شما',
    chooseSector: 'کجا کار می‌کنید؟',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'در کدام کشور کار می‌کنید؟',
    countryHint: 'کلمات و نکته‌های همان کشور را می‌بینید.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026)
    countryNl: 'هلند',
    countryBe: 'بلژیک (فلاندر)',
    tipsNote: 'این نکته‌ها درباره کار در هلند است. اطلاعات کلی است، نه مشاوره حقوقی.',
    sectorHint: 'درس‌های کار شما زود می‌آیند. بعداً می‌توانید این را در تنظیمات عوض کنید.',
    otherSectors: 'کارهای دیگر',
    reviewToday: 'مرور امروز',
    reviewTodayN: 'کلمه‌ها برای تمرین دوباره: {n} · چند دقیقه',
    notSureYet: 'هنوز نمی‌دانم',
    sectorLogistics: 'انبار و لجستیک',
    sectorConstruction: 'ساختمان‌سازی',
    sectorProduction: 'تولید',
    sectorCare: 'مراقبت و پرستاری',
    sectorHospitality: 'رستوران و هتل',
    sectorRetail: 'فروشگاه و سوپرمارکت', // nieuw, nalezen
    sectorCleaning: 'نظافت',
    sectorHorticulture: 'باغبانی و گلخانه', // nagelezen (2e lezing)
    sectorTechnical: 'کارهای فنی', // nieuw (30 okt 2026), nalezen
    sectorGarage: 'تعمیرگاه خودرو', // nieuw (30 okt 2026), nalezen
    sound: 'صدا',
    soundOn: 'صدا روشن',
    withoutSound: 'بدون صدا',
    quietHint: 'بدون صدا، درس‌ها سؤال شنیداری ندارند و هیچ چیز خودکار پخش نمی‌شود. برای شنیدن یک کلمه 🔊 را بزنید، مثلاً با هدفون.',
    soundOffToast: 'بدون صدا. می‌توانید صدا را در تنظیمات روشن کنید.',
    noInternetSound: 'اینترنت نیست: صدا الان کار نمی‌کند.', // nieuw, nalezen
    stillToDo: 'امروز هنوز مانده',
    streakStopped: 'روزهای پشت سر همِ شما بعد از {n} روز قطع شد. امروز دوباره شروع کنید.',
    recordN: 'بهترین رکورد شما: {n} روز',
    workWeek: 'هفتهٔ کاری شما',
    freeDaysN: 'روزهای آزاد: {n}. اگر یک روز جا بیندازید، روزهای پشت سر همِ شما قطع نمی‌شود.',
    restDay: 'روز آزاد',
    tier3: '۳ روز پشت سر هم',
    tier7: '۱ هفته پشت سر هم',
    tier14: '۲ هفته پشت سر هم',
    tier30: '۱ ماه پشت سر هم',
    reviewDone: 'برای امروز تمام شد',
    tomorrowN: 'فردا: {n} کلمه',
    firstWordsTomorrow: 'فردا اولین کلمه‌های شما برمی‌گردند',
    extraRound: 'یک دور اضافه',
    reviewFirstHint: 'اول مرور کنید. این‌طور بیشتر یادتان می‌ماند.', // nieuw, nalezen
    wordsStrongerN: '{n} کلمه قوی‌تر',
    noMistakes: 'بدون اشتباه',
    nextUp: 'بعدی',
    installTitle: 'Vloertaal را روی صفحهٔ اصلی بگذارید',
    installHint: 'آن‌وقت مثل یک برنامه باز می‌شود، حتی بدون اینترنت.',
    installAdd: 'افزودن به صفحهٔ اصلی',
    iosStep1: 'روی «اشتراک‌گذاری» بزنید',
    iosStep2: 'روی «افزودن به صفحهٔ اصلی» بزنید',
    iosStep3: 'تمام!',
    backupTitle: 'پیشرفت خود را نگه دارید',
    backupHint: 'پیشرفت شما فقط روی همین گوشی است. آن را به شکل فایل ذخیره کنید، مثلاً برای گوشی جدید.',
    backupSave: 'دانلود',
    backupLoad: 'برگرداندن',
    backupBad: 'این فایل Vloertaal نیست.',
    backupAsk: 'می‌خواهید این فایل را به پیشرفت خود اضافه کنید، یا پیشرفت خود را با آن عوض کنید؟', // nieuw, nalezen (AI-correctie 2 nov 2026)
    backupMerge: 'با هم جمع کنید',
    backupReplace: 'عوض کنید',
    backupBack: 'پیشرفت شما برگشت.',
    backupNothingNew: 'چیز تازه‌ای نبود: این از قبل روی گوشی شما بود.',
    cancel: 'لغو',
    remindTitle: 'هر روز به من یادآوری کنید',
    remindEvent: 'وقت تمرین هلندی (10 دقیقه)', // nieuw, nalezen (AI-correctie 2 nov 2026)
    remindHint: 'تقویم گوشی به شما یادآوری می‌کند. چیزی برای ما فرستاده نمی‌شود.',
    remindBefore: 'قبل از کار',
    remindAfter: 'بعد از کار',
    remindOwn: 'زمان دیگر',
    remindAdd: 'افزودن به تقویم من',
    remindAdded: 'فایل را باز کنید تا به تقویم شما اضافه شود.',
    remindAddedAsk: 'اضافه شد؟ پس آن را در تقویم خود می‌بینید.', // nieuw, nalezen
    navAbout: 'درباره',
    tagMeaning: 'معنی',
    tagPick: 'انتخاب کنید',
    tagListen: 'گوش کنید',
    tagType: 'بنویسید',
    tagMatch: 'جفت‌ها',
    tagBuild: 'جمله',
    tagChat: 'گفتگو',
    tagSituation: 'موقعیت',
    tagTip: 'نکته',
    more: 'بیشتر',
    less: 'کمتر',
    daysUnit: 'روز',
    wordsUnit: 'کلمه',
    countTitle: 'شمارش ناشناس',
    countHint: 'برنامه می‌شمارد که درس‌ها چند بار انجام می‌شوند و تقریباً چقدر طول می‌کشند. و اینکه آیا برنامه جایی خطا می‌دهد. بدون نام، بدون حساب، بدون ردیابی.', // fout-zin nieuw, nalezen
    certificate: 'گواهی',
    myCertificates: 'گواهی‌های من',
    certsEmpty: 'همهٔ درس‌های یک بخش را تمام کنید. بعد یک گواهی می‌گیرید.',
    certEarned: 'گواهی گرفتید!',
    certEarnedHint: 'همهٔ درس‌های این بخش را تمام کردید.',
    certView: 'ببینید',
    certLater: 'بعداً',
    certPrint: 'چاپ کنید یا به شکل PDF ذخیره کنید',
    certSaved: 'عکس ذخیره شد.',
    certNameHint: 'فقط روی همین گوشی می‌ماند. می‌توانید خالی بگذارید.',
    certChangeName: 'تغییر نام',
    certPractice: 'گواهی تمرینی، نه مدرک رسمی',
    resumeLesson: 'ادامهٔ درس',
    restartLesson: 'از اول شروع کنید',
    quitKept: 'پیشرفتتان ذخیره می‌ماند. بعداً می‌توانید ادامه بدهید.',
    bestAnswer: 'بهترین پاسخ',
    inReview: 'در حال بررسی',
    today: 'امروز',
    playAgain: 'دوباره گوش کنید',
    daysUnitOne: 'روز',
    wordsUnitOne: 'کلمه',
    wordsLearnedOne: '{n} کلمه یاد گرفتید',
    tomorrowOne: 'فردا: {n} کلمه',
    wordsStrongerOne: '{n} کلمه قوی‌تر',
    recordOne: 'بهترین رکورد شما: {n} روز',
    streakStoppedOne: 'روزهای پشت سر همِ شما بعد از {n} روز قطع شد. امروز دوباره شروع کنید.',
    letterTiles: 'حروف',
    useKeyboard: 'صفحه‌کلید',
    skippedN: '{n} رد شد، حساب نمی‌شود',
    stampLater: 'بعداً برمی‌گردد',
    stampDone: 'تمام شد',
    chooseNext: 'موضوع بعدی را انتخاب کنید',
    recommended: 'پیشنهادی',
    allTopics: 'همهٔ موضوع‌ها',
    topicsOrder: 'نمایش موضوع‌ها',
    privacyLink: 'بیانیهٔ حریم خصوصی را بخوانید (به هلندی)', // nieuw, nalezen
    routeTitle: 'چه می‌خواهید یاد بگیرید؟', // nieuw, nalezen
    routeLearn: 'یادگیری هلندی برای کار، و اینکه کار اینجا چطور است', // nieuw, nalezen
    routeRules: 'هلندی بلدم: فقط قوانین کار', // nieuw, nalezen
    routeLearnShort: 'یادگیری هلندی', // nieuw, nalezen
    switchTitle: 'رفتن به Werkregels؟', // nieuw, nalezen
    switchDutch: 'همه چیز هلندی می‌شود. زبان کمکی شما خاموش می‌شود.', // nieuw, nalezen
    switchReview: 'تا وقتی برنگردید، قوانین را مرور می‌کنید، نه کلمات را.', // nieuw, nalezen
    switchKept: 'پیشرفت شما ذخیره می‌ماند. از همین‌جا می‌توانید برگردید.', // nieuw, nalezen
    switchGo: 'بله، به Werkregels', // nieuw, nalezen
    byTheme: 'بر اساس بخش‌ها',
    inOrder: 'به ترتیب',
    searchTopics: 'جستجوی موضوع', // nieuw, nalezen
    searchNone: 'موضوعی با این کلمه نیست.', // nieuw, nalezen
    lessonsUnit: 'درس',
    lessonsUnitOne: 'درس',
    topicsUnit: 'موضوع',
    topicsUnitOne: 'موضوع',
    allTopicsDone: 'همهٔ موضوع‌ها را تمام کردید. آفرین!',
    // Speaking practice
    tagSpeak: 'بگویید',
    speakPrompt: 'گوش کنید، بعد بگویید',
    tapToSpeak: 'بزنید و حرف بزنید',
    stopRecording: 'توقف',
    micPrivacy: "هیچ‌کس دیگری صدای شما را نمی‌شنود. چیزی فرستاده نمی‌شود.", // nieuw, nalezen
    micUnavailable: 'میکروفون خاموش است. حالا آن را بلند بگویید، بعد ادامه بدهید.',
    cantSpeak: 'الان نمی‌توانم حرف بزنم',
    soundsSame: 'مثل هم شنیده می‌شود',
    sayAgain: 'دوباره بگویید',
    hearMine: 'صدای خودتان را بشنوید', // nieuw, nalezen
    thenNow: 'قبلاً و حالا', // nieuw, nalezen
    thenNowFirst: 'بار اول شما: {date}', // nieuw, nalezen
    sayTogether: "با هم بگویید", // nieuw, nalezen
    chorusHint: "همزمان با صدا بگویید. چیزی ضبط نمی‌شود.", // nieuw, nalezen
    chorusAlone: "حالا فقط خودتان", // nieuw, nalezen
    speakBrave: "اشتباه بخشی از یادگیری است. متوجه نشدند؟ یک بار دیگر بگو.", // nieuw, nalezen
    speakBrave2: "استرس داری؟ عادی است. باز هم بگو.", // nieuw, nalezen
    speakBrave3: "لازم نیست کامل بگویی. فقط امتحان کن.", // nieuw, nalezen
    reasonTitle: "چرا هلندی یاد می‌گیری؟", // nieuw, nalezen
    reasonHint: "یکی یا دو تا انتخاب کن.", // nieuw, nalezen
    reasonDone: "تمام", // nieuw, nalezen
    reasonWork: "کارم را خوب انجام دهم", // nieuw, nalezen
    reasonKids: "بچه‌هایم", // nieuw, nalezen
    reasonColleagues: "با همکاران حرف بزنم", // nieuw, nalezen
    reasonArrange: "کارهایم را خودم انجام دهم", // nieuw, nalezen
    reasonJob: "کار بهتر", // nieuw, nalezen
    reasonHome: "در هلند احساس کنم در خانه‌ام هستم", // nieuw, nalezen
    speakMe: 'من',
    speakingPractice: 'تمرین حرف زدن',
    speakingHint: "کلمه‌ها را بلند بگویید و مقایسه کنید. هیچ‌کس دیگری صدای شما را نمی‌شنود: چیزی فرستاده نمی‌شود. اولین ضبط شما از هر جمله روی گوشی‌تان می‌ماند تا بعداً مقایسه کنید.", // nieuw, nalezen
    savingOffline: 'در حال ذخیره…',
    savedOffline: 'برای استفاده بدون اینترنت ذخیره شد',
    offlineNoSpace: 'جای کافی روی این گوشی نیست. یک موضوع ذخیره‌شده را پاک کنید یا جا باز کنید.',
    offlineFailed: 'ذخیره نشد. اینترنت را بررسی کنید و دوباره امتحان کنید.',
    pocketCard: 'کارت جیبی',
    pocketSave: 'به شکل عکس ذخیره کنید',
    textSize: 'اندازهٔ متن',
    textNormal: 'معمولی',
    textLarge: 'بزرگ',
    textXl: 'خیلی بزرگ',
    showEnglish: 'انگلیسی را هم نشان بدهید',
    genderTitle: 'زن یا مرد؟',
    genderHint: 'تا زبان شما درست با شما صحبت کند.',
    genderWoman: 'زن',
    genderMan: 'مرد',
    genderNone: 'ترجیح می‌دهم نگویم',
    langGuessYes: 'بله',
    langGuessOther: 'زبان دیگر',
    settingsLangMe: 'زبان و من',
    settingsLessons: 'درس‌ها',
    settingsPhone: 'این گوشی',
    settingOn: 'روشن',
    settingOff: 'خاموش',
    sectorGroupMake: 'ساخت و جابه‌جایی',
    sectorGroupCare: 'مراقبت و خدمات',
    sectorGroupShop: 'فروشگاه و رستوران', // nieuw, nalezen
    sectorGroupBuild: 'ساختمان و فنی', // nieuw (30 okt 2026), nalezen
    voiceWoman: 'صدای زن',
    voiceMan: 'صدای مرد',
    writingPick: 'انتخاب کلمه',
    settingWriting: 'نوشتن',
    settingKeepLessons: 'نگه‌داشتن درس‌ها روی این گوشی',
    settingKeepLessonsHint: 'موضوع فعلی روی این گوشی ذخیره می‌شود تا بدون اینترنت هم کار کند. موضوع‌های تمام‌شده از گوشی پاک می‌شوند.',
    otherTopicLink: 'موضوع دیگر',
    remindAsk: 'هر روز به شما یادآوری کنیم؟',
    remindYes: 'بله، بعد از کار',
    remindNo: 'نه، ممنون',
    remindPickTime: 'چه زمانی به شما یادآوری کنیم؟',
    certSaveShare: 'ذخیره یا اشتراک‌گذاری',
    pauseTitle: 'مکث',
    back: 'بازگشت',
    quitLesson: 'خروج از درس',
    playAudio: 'گوش کنید',
    scrollDown: 'به پایین بروید',
    lessonProgress: 'پیشرفت درس',
    mainMenu: 'منوی اصلی',
    spaceKey: 'فاصله',
    langNotOnPhone: 'این زبان هنوز روی گوشی شما نیست. برای تغییر زبان، به اینترنت وصل شوید.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'خودتان ساعت را انتخاب کنید',
    gateWho: 'کد را معلم، مربی یا کارفرمای شما به شما می‌دهد.',
    gateTrust: 'بدون حساب. بدون نام. همه‌چیز روی همین گوشی می‌ماند.',
    codeAccepted: 'کد پذیرفته شد',
    startFree: 'کد ندارید؟ با درس‌های اول شروع کنید',
    bramHello: 'از دیدن شما خوشحالم.',
    bramBack: 'خوش برگشتید. ادامه بدهیم.',
    bramRested: 'دیروز روز آزاد شما بود. روزهای پشت سر همِ شما ادامه دارد.',
    bramDueN: 'امروز {n} کلمه برای تکرار دارید.',
    bramDueOne: 'امروز {n} کلمه برای تکرار دارید.',
    bramDayN: 'روز {n} پشت سر هم.',
    bramDone: 'برای امروز تمام شد. تا فردا.',
    bramPerfect: 'خیلی خوب. این کلمه‌ها را بلدید.',
    bramGood: 'کار خوبی بود. قدم به قدم.',
    bramHard: 'خوب شد که تمرین کردید. کلمه‌های سخت دوباره می‌آیند.',
    bramReview: 'خوب است. تکرار کمک می‌کند چیزها را به خاطر بسپارید.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    bramIntro: 'من Bram هستم، همکار شما.',
    bramIntroHello: 'سلام، من Bram هستم.',
    showDutch: 'نمایش به هلندی',
    showAnswers: 'نمایش پاسخ‌ها', // nieuw, nalezen
    lastUpdated: 'آخرین به‌روزرسانی: {date}',
    /* G4 b3 */
    buildListen: 'گوش کنید و جمله را بسازید',
    chatWhichQuestion: 'کدام سؤال با این جواب جور است؟',
    reviewWaiting: 'کلمه‌های دیگری منتظرند: {n}. در روزهای بعد برمی‌گردند.',
    factTitle: 'آیا می‌دانستید؟',
    fact3: 'شما تنها نیستید: در هلند بیش از ۳ میلیون بزرگسال در خواندن، حساب یا کار با کامپیوتر مشکل دارند. تمرین کمک می‌کند.',
    fact7: 'از هر ۱۰۰ مهاجری که هلندی را خیلی خوب صحبت می‌کنند، ۶۹ نفر کار با حقوق دارند.',
    fact14: 'خیلی از کتابخانه‌ها یک Taalhuis (خانهٔ زبان) دارند: کمک رایگان برای ادامهٔ یادگیری هلندی.',
    fact30: 'هر روز کمی تمرین، از گاهی زیاد تمرین کردن بهتر است. شما ۳۰ روز پشت سر هم تمرین کرده‌اید!',
    /* Backup, reminder and reset, a second look */
    backupFileN: 'این فایل {n} درس دارد.',
    backupFileOne: 'این فایل {n} درس دارد.',
    backupPhoneN: 'شما {n} درس دارید.',
    backupPhoneOne: 'شما {n} درس دارید.',
    backupFewer: '«عوض کنید» درس‌هایی را که در فایل نیستند پاک می‌کند. «با هم جمع کنید» همه چیز را نگه می‌دارد.',
    backupTooBig: 'این فایل خیلی بزرگ است. فایل Vloertaal خیلی کوچک‌تر است.',
    backupNewPhone: 'گوشی جدید؟ آنجا هم به کد خود نیاز دارید.',
    remindEveryDay: 'یادآوری شما: هر روز ساعت {time}',
    remindStop: 'یادآوری را خاموش کنید',
    remindStopped: 'فایل را باز کنید تا یادآوری از تقویم شما برداشته شود.',
    remindStoppedAndroid: 'یادآوری را خودتان در تقویم Google پاک کنید.',
    resetKeeps: 'درس‌ها، کلمه‌ها، روزهای پشت سر هم و گواهی‌های شما پاک می‌شوند. زبان و تنظیمات شما می‌مانند.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'بارگیری نشد. اینترنت وصل است؟',
    retry: 'دوباره امتحان کنید',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal اجرا نمی‌شود.', // nieuw, nalezen
    bootFailedHint: 'اول پیشرفت خود را نگه دارید. بعد از نو شروع کنید.', // nieuw, nalezen
    startOver: 'از نو شروع کنید', // nieuw, nalezen
    crashed: 'مشکلی پیش آمد. پیشرفت شما ذخیره شده است.', // nieuw, nalezen
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'از قبل چه می‌دانید؟', // nieuw, nalezen // nagelezen AI 31 okt
    toetsOffer: 'حدود 10 دقیقه. نمره‌ای در کار نیست. فقط برای خودتان است.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsEndOffer: 'خیلی چیزها یاد گرفته‌اید. آزمون را دوباره انجام بدهید و ببینید حالا چه می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsPartListen: 'شنیدن', // nieuw, nalezen
    toetsPartWords: 'کلمه‌ها', // nieuw, nalezen
    toetsPartSentences: 'جمله‌ها', // nieuw, nalezen
    toetsListenAsk: 'گوش کنید. یعنی چه؟', // nieuw, nalezen // nagelezen AI 31 okt
    toetsNotSure: 'نمی‌دانید؟ روی «نمی‌دانم» بزنید. اشکالی ندارد.', // nieuw, nalezen
    toetsMicKeep: 'صدای ضبط‌شدهٔ شما فقط روی همین گوشی می‌ماند. بعداً می‌توانید دوباره صدای خودتان را بشنوید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsStartDone: 'شروع خوبی بود! این‌ها را از قبل می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsEndDone: 'آفرین! ببینید حالا چه می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsYouThen: 'شما قبلاً', // nieuw, nalezen // nagelezen AI 31 okt
    toetsYouNow: 'شما حالا', // nieuw, nalezen // nagelezen AI 31 okt
    toetsKeepGoing: 'هر روز کمی تمرین کنید. این‌طوری بیشتر و بیشتر یاد می‌گیرید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsStart: 'آزمون را شروع کنید', // nieuw, nalezen // nagelezen AI 31 okt
    toetsIdk: 'نمی‌دانم', // nieuw, nalezen
    toetsMore: 'بیشتر از قبل', // nieuw, nalezen
    toetsSame: 'تقریباً مثل قبل', // nieuw, nalezen
    toetsMoreAll: 'همه با هم: الان بیشتر از قبل می‌دانید.', // nieuw, nalezen
    toetsSameAll: 'همه با هم: تقریباً مثل قبل.', // nieuw, nalezen
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'اول 5 سؤال درباره خودتان. درست یا غلط وجود ندارد.', // nieuw, nalezen
    toetsDurfAsk: 'جرئت می‌کنید این کار را بکنید؟', // nieuw, nalezen
    toetsDurfUnderstand: 'بگویید که چیزی را نمی‌فهمید', // nieuw, nalezen
    toetsDurfBoss: 'از مسئول‌تان چیزی بپرسید', // nieuw, nalezen
    toetsDurfHelp: 'کمک بخواهید', // nieuw, nalezen
    toetsDurfUnsafe: 'بگویید که چیزی ایمن نیست', // nieuw, nalezen
    toetsDurfBreak: 'در زمان استراحت کمی با یک همکار حرف بزنید', // nieuw, nalezen
    toetsDurfNotYet: 'هنوز نه', // nieuw, nalezen
    toetsDurfABit: 'کمی', // nieuw, nalezen
    toetsDurfYes: 'بله', // nieuw, nalezen
    toetsDurfAgain: 'چند هفته بعد دوباره می‌پرسیم.', // nieuw, nalezen
    tempo: 'سرعت', // nieuw, nalezen
    tempoCalm: 'آرام', // nieuw, nalezen
    tempoNormal: 'عادی', // nieuw, nalezen
    tempoHint: 'آرام یعنی آهسته و واضح. عادی مثل حرف زدن همکاران است. اگر خیلی چیزها را می‌فهمید، «عادی» را انتخاب کنید.', // nieuw, nalezen // nagelezen AI 31 okt
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'نشان بدهید چطور پیش می‌رود', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardIntro: 'این کارت پیشرفت شما را نشان می‌دهد. آن را به معلم، مربی یا رئیستان نشان بدهید. خودتان تصمیم می‌گیرید.', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardNo: 'می‌توانید «نه» هم بگویید.', // nieuw, nalezen
    coachCardKeep: 'گوشی‌تان خودش کارت را می‌سازد. چیزی فرستاده نمی‌شود. Vloertaal چیزی نگه نمی‌دارد.', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardWhat: 'روی کارت، به هلندی:', // nieuw, nalezen
    coachTopics: 'موضوع‌های تمام‌شده', // nieuw, nalezen
    coachDays: 'روزهای تمرین در 4 هفتهٔ گذشته', // nieuw, nalezen
    coachLast: 'آخرین درس، با تاریخ', // nieuw, nalezen
    coachCode: 'کد: همان عددها، کوتاه، برای خلاصهٔ گروه. بدون نام.', // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'گوش دادن گوشی (آزمایشی)', // nieuw, nalezen
    listenHint: 'بعد از حرف زدن، گوشی می‌گوید که حرف شما را فهمید یا نه. این کار روی خود گوشی انجام می‌شود. چیزی برای ما یا دیگران فرستاده نمی‌شود.', // nieuw, nalezen
    listenNeedsPack: 'گوشی اول زبان هلندی لازم دارد. دانلود بزرگی است: از وای‌فای استفاده کنید.', // nieuw, nalezen
    listenDownload: 'دانلود هلندی', // nieuw, nalezen
    listenNotNow: 'الان نه', // nieuw, nalezen
    listenDownloading: 'هلندی در راه است. بعداً دوباره امتحان کنید.', // nieuw, nalezen
    listenFailed: 'نشد. بعداً با وای‌فای دوباره امتحان کنید.', // nieuw, nalezen
    listenPrivacy: 'خود گوشی گوش می‌دهد. چیزی فرستاده نمی‌شود.', // nieuw, nalezen
    heardWait: 'گوشی گوش می‌دهد…', // nieuw, nalezen
    heardOk: 'فهمید', // nieuw, nalezen
    heardAlmost: 'تقریباً: {word} را دوباره بگویید', // nieuw, nalezen
    heardNotYet: 'هنوز نفهمید', // nieuw, nalezen
    goOnAnyway: 'با این حال ادامه', // nieuw, nalezen
    fasterAsk: 'می‌خواهید سریع‌تر یاد بگیرید؟', // nieuw, nalezen // nagelezen AI 31 okt
    fasterHint: 'توضیح کمتر در درس‌های تازه. هلندی با سرعت عادی.', // nieuw, nalezen
    fasterYes: 'بله', // nieuw, nalezen
    fasterNo: 'نه', // nieuw, nalezen
    easierNext: 'درس بعدی کمی کوتاه‌تر است.', // nieuw, nalezen
    fasterSetting: 'سریع‌تر یاد گرفتن', // nieuw, nalezen
    fasterSettingHint: 'روشن: توضیح کمتر در درس‌های تازه، و هلندی با سرعت عادی. خاموش: مثل قبل.', // nieuw, nalezen
    feelAsk: 'نظرتان درباره Vloertaal چیست؟', // nieuw, nalezen
    feelGood: 'خوب', // nieuw, nalezen
    feelOk: 'متوسط', // nieuw, nalezen
    feelBad: 'خوب نیست', // nieuw, nalezen
    feelThanks: 'ممنون! این به ما کمک می‌کند Vloertaal را بهتر کنیم.', // nieuw, nalezen
    tempoFasterHint: 'سریع‌تر یاد گرفتن: توضیح کمتر در درس‌های تازه، و هلندی با سرعت عادی.', // nieuw, nalezen
    samenTitle: 'با هم تمرین کنید', // nieuw, nalezen
    samenRowHint: 'دو نفر، یک گوشی', // nieuw, nalezen
    samenIntro: 'با یک همکار، دوست یا معلم تمرین کنید. به نوبت بخوانید.', // nieuw, nalezen // nagelezen AI 31 okt
    samenHow: 'نفر 1 همکار است. نفر 2 جواب می‌دهد.', // nieuw, nalezen
    samenNoScore: 'چیزی ضبط نمی‌شود. نمره‌ای در کار نیست.', // nieuw, nalezen
    samenPerson: 'نفر {n}', // nieuw, nalezen
    samenAnswer: 'جواب', // nieuw, nalezen
    samenHear: 'گوش بدهید', // nieuw, nalezen // nagelezen AI 31 okt
    samenNext: 'بعدی', // nieuw, nalezen
    samenTranslation: 'ترجمه', // nieuw, nalezen
    samenEnd: 'آفرین! نقش‌ها را عوض کنید و دوباره انجام دهید؟', // nieuw, nalezen
    samenSwap: 'نقش‌ها را عوض کنید', // nieuw, nalezen
    samenStop: 'تمام', // nieuw, nalezen
    checkStart: 'این را بلدم: آزمون کوتاه', // nieuw, nalezen
    checkPassed: 'این را بلدید. این موضوع را تمام‌شده علامت بزنید؟', // nieuw, nalezen
    checkNoCert: 'آن وقت هنوز گواهی ندارید. گواهی را بعد از درس‌ها می‌گیرید.', // nieuw, nalezen
    checkNotYet: 'درس‌ها در این موضوع به شما کمک می‌کنند.', // nieuw, nalezen
    checkMark: 'علامت زدن', // nieuw, nalezen
    checkVia: 'با آزمون', // nieuw, nalezen
    checkUndo: 'با این حال درس‌ها را انجام دهید', // nieuw, nalezen
    shareInvite: 'من با Vloertaal هلندی را برای کارم یاد می‌گیرم. رایگان است: {link}', // nieuw, nalezen
    briefjeWhat: 'Vloertaal یک برنامهٔ رایگان برای یادگیری هلندیِ کار است.', // nieuw, nalezen
    briefjeHow: 'درس‌های کوتاه روی گوشی خود، با توضیح به زبان خود. بدون حساب.', // nieuw, nalezen
    briefjeOpen: 'روی گوشی خود باز کنید:', // nieuw, nalezen
    workTry: 'امروز سر کار امتحانش کنید', // nieuw, nalezen (AI-correctie 2 nov 2026)
    workTryWhen: 'وقتی:', // nieuw, nalezen
    workTryThen: 'آن‌وقت بگویید:', // nieuw, nalezen
    colleagueCard: 'برای همکارتان', // nieuw, nalezen
    colleagueCardHint: 'این را به همکاری که هلندی صحبت می‌کند نشان دهید. در آن نوشته که چطور می‌تواند در تمرین به شما کمک کند.', // nieuw, nalezen
    colleagueShare: 'برای همکارتان بفرستید', // nieuw, nalezen
    forCoach: 'برای مربی شما', // nieuw, nalezen
    rulesInDutch: 'کار اینجا چطور است، به هلندی ساده. گوشی آن را بلند می‌خواند.', // nieuw, nalezen
    bridgeTextOne: 'حالا هلندی زیادی بلدید. در هر موضوع می‌توانید بخوانید کار اینجا چطور است، به هلندی ساده.', // nieuw, nalezen
    noHelpLanguage: 'هیچ: هلندی صحبت می‌کنم', // nieuw, nalezen
    kaartSaid: 'جمله‌هایی که سر کار گفتید', // nieuw, nalezen
    kaartHard: 'کلماتی که هنوز سخت است', // nieuw, nalezen
    kaartRules: 'درس‌هایی درباره اینکه کار اینجا چطور است', // nieuw, nalezen
    coachCardRights: 'موضوع‌های مربوط به حق‌های شما با نام نشان داده شود', // nieuw, nalezen (AI-correctie 2 nov 2026)
    speakFromMemory: 'حالا از حفظ: به هلندی چه بود؟', // nieuw, nalezen
    keptNofM: 'واژه‌های دو هفته پیش یا قدیمی‌تر: هنوز {n} از {m} را بلد بودید.', // nieuw, nalezen
    verbSecond: 'فعل در جای دوم است.', // nieuw, nalezen
    calmScreen: 'صفحهٔ آرام', // nieuw, nalezen
    calmAuto: 'مثل گوشی شما', // nieuw, nalezen
    calmHint: 'روشن: هیچ چیز حرکت نمی‌کند، بعد از درس جشنی برای روزهای پشت سر هم نیست، و روزها و کلمه‌ها در صفحهٔ اصلی نشان داده نمی‌شوند.', // nieuw, nalezen
    infoMore: 'توضیح بیشتر', // nieuw, nalezen
    tipsAbout: 'دربارهٔ این نکته‌ها', // nieuw, nalezen
    tipsNotChecked: 'هنوز یک متخصص این توضیح را بررسی نکرده است.', // nieuw, nalezen
    lawStale: 'تاریخ این توضیح: {month}. برای قوانین تازه، به Juridisch Loket یا Work in NL مراجعه کنید.', // nieuw, nalezen
    lawStaleBe: 'تاریخ این توضیح: {month}. برای قوانین تازه، به justitiehuis یا werk.belgie.be مراجعه کنید.', // nieuw, nalezen
    aboutMore: 'بیشتر دربارهٔ Vloertaal', // nieuw, nalezen
    geluktAsk: 'این را سر کار گفتی؟', // nieuw, nalezen
    geluktYes: 'بله، شد', // nieuw, nalezen
    geluktNotYet: 'هنوز نه', // nieuw, nalezen
    geluktDoneN: 'آفرین! تا حالا {n} جمله سر کار موفق بوده.', // nieuw, nalezen
    geluktDoneOne: 'آفرین! اولین جمله‌ات سر کار موفق بود.', // nieuw, nalezen
    geluktWhere: 'آن‌ها را در تنظیمات پیدا می‌کنی.', // nieuw, nalezen
    geluktTitle: 'موفق سر کار', // nieuw, nalezen
    geluktListHint: 'این جمله‌ها را سر کار گفتی.', // nieuw, nalezen
    nextMinutesN: 'حدود {n} دقیقه', // nieuw, nalezen
    saveFailed: 'پیشرفت شما ذخیره نشد. آیا گوشی پر است؟ کمی جا باز کنید. یا در تنظیمات: «پیشرفت خود را نگه دارید».', // nieuw, nalezen
    bewaarNudge: 'گوشی شما ممکن است گاهی پیشرفت شما را پاک کند. پس یک نسخه نگه دارید.', // nieuw, nalezen
    bewaarGo: 'همین حالا ذخیره کنید', // nieuw, nalezen
    backupShare: 'برای خودتان بفرستید', // nieuw, nalezen
    backupShareHint: 'فایل را برای خودتان بفرستید، مثلاً در واتس‌اپ یا با ایمیل.', // nieuw, nalezen
    backupMade: 'تمام شد. این فایل را خوب نگه دارید. بعداً با آن پیشرفت خود را برمی‌گردانید.', // nieuw, nalezen
    speakTurnPrompt: 'چه می‌گویی؟', // nieuw, nalezen
    speakTurnExample: 'نمونه', // nieuw, nalezen
    speakTurnReveal: 'جواب را بشنو', // nieuw, nalezen
    sceneTitle: 'در محل کار گوش کن', // nieuw, nalezen
    sceneIntro: 'مثل سر کار، سر و صدا هست. گوش کن. بعد سؤال‌ها می‌آیند.', // nieuw, nalezen
    buildFront: 'کلمهٔ علامت‌دار را اول بگذارید', // nieuw, nalezen
    bridgeTitle: 'قوانین کار', // nieuw, nalezen
    bridgeText: 'حالا هلندی زیادی بلدید. می‌خواهید قوانین کار را هم یاد بگیرید؟ آن وقت همه‌چیز به هلندی است.', // nieuw, nalezen
    bridgeGo: 'بله، نشان بدهید', // nieuw, nalezen
    klankTitle: 'چطور می‌گویند؟', // nieuw, nalezen
    klankHint: 'روی یک صدا ضربه بزنید. ببینید دهان چطور آن را می‌سازد.', // nieuw, nalezen
    klankSpeed: 'سرعت', // nieuw, nalezen
    klankScrub: 'کلمه، صدا به صدا', // nieuw, nalezen
    tagSound: 'صدا', // nieuw, nalezen
    commLabel: "ارتباط", // nieuw, nalezen
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'قدم‌های اول',
    'theme.safe': 'کار ایمن',
    'theme.find': 'پیدا کردن کار',
    'theme.job': 'شغل شما',
    'theme.together': 'همکاری',
    'theme.rights': 'حق‌های شما',
    'theme.life': 'زندگی در هلند',
    'theme.sector': 'رشتهٔ کاری شما',
    // Units
    'u.firstday': 'روز اول کار',
    'u.help': 'کمک خواستن',
    'u.safety': 'اول ایمنی',
    'u.emergency': "وقتی اتفاقی می‌افتد", // nieuw, nalezen
    'u.warehouse': 'در انبار',
    'u.time': 'زمان و برنامهٔ کاری',

    // Lessons
    'l.hello': 'سلام کردن',
    'l.people': 'آدم‌ها در محل کار',
    'l.understand': 'نمی‌فهمم',
    'l.gear': 'تجهیزات ایمنی',
    'l.danger': 'خطر!',
    'l.accident': 'گزارش دادن حادثه',
    'l.things': 'وسایل انبار',
    'l.directions': 'جهت‌ها و کارها',
    'l.shift': 'شیفت من',
    'l.sick': 'خبر دادن بیماری',

    // Words
    'w.hallo': 'سلام',
    'w.goedemorgen': 'صبح بخیر',
    'w.dankjewel': 'ممنون',
    'w.ja': 'بله',
    'w.nee': 'نه',
    'w.totmorgen': 'تا فردا، خداحافظ',
    'w.collega': 'همکار',
    'w.baas': 'رئیس',
    'w.leidinggevende': 'سرپرست',
    'w.werk': 'کار',
    'w.naam': 'اسم',
    'w.nieuw': 'جدید',
    'w.begrijpniet': 'نمی‌فهمم',
    'w.nogeenkeer': 'یک بار دیگر',
    'w.langzaam': 'آهسته',
    'w.helpen': 'کمک کردن',
    'w.waar': 'کجا',
    'w.wc': 'دستشویی',
    'w.helm': 'کلاه ایمنی',
    'w.handschoenen': 'دستکش',
    'w.veiligheidsschoenen': 'کفش ایمنی',
    'w.hesje': 'جلیقهٔ ایمنی (شب‌رنگ)',
    'w.bril': 'عینک ایمنی',
    'w.dragen': 'پوشیدن',
    'w.pasop': 'مواظب باش',
    'w.stop': 'ایست',
    'w.help': 'کمک!',
    'w.brand': 'آتش‌سوزی',
    'w.nooduitgang': 'خروجی اضطراری',
    'w.ongeluk': 'حادثه',
    'w.gewond': 'زخمی',
    'w.bloeden': 'خونریزی کردن',
    'w.ehbodoos': 'جعبهٔ کمک‌های اولیه',
    'w.bhver': 'امدادگر اضطراری شرکت (کمک‌های اولیه، آتش‌سوزی، تخلیه)',
    'w.ziekenhuis': 'بیمارستان',
    'w.gebeuren': 'اتفاق افتادن',
    'w.doos': 'جعبه',
    'w.pallet': 'پالت',
    'w.heftruck': 'لیفتراک',
    'w.kar': 'چرخ‌دستی',
    'w.stelling': 'قفسه',
    'w.scanner': 'اسکنر',
    'w.links': 'چپ',
    'w.rechts': 'راست',
    'w.boven': 'بالا',
    'w.beneden': 'پایین',
    'w.tillen': 'بلند کردن',
    'w.pakken': 'برداشتن',
    'w.dienst': 'شیفت',
    'w.pauze': 'استراحت',
    'w.beginnen': 'شروع کردن',
    'w.klaar': 'تمام',
    'w.telaat': 'دیر',
    'w.morgen': 'فردا',
    'w.ziek': 'مریض',
    'w.bellen': 'زنگ زدن (تلفن)',
    'w.dokter': 'دکتر',
    'w.pijn': 'درد',
    'w.vandaag': 'امروز',
    'w.beter': 'بهتر',

    // Sentences
    's.hello.1': 'سلام، من تازه‌واردم.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.hello.2': 'صبح بخیر، من علی هستم.',
    's.hello.3': 'ممنون، تا فردا!',
    's.people.1': 'اسم من سارا است.',
    's.people.2': 'رئیس کیست؟',
    's.people.3': 'من همکار جدید هستم.',
    's.understand.1': 'می‌شود آن را تکرار کنید؟',
    's.understand.2': 'می‌شود آهسته صحبت کنید؟',
    's.understand.3': 'دستشویی کجاست؟',
    's.gear.1': 'همیشه کلاه ایمنی‌ات را سرت بگذار.',
    's.gear.2': 'دستکش‌ها کجا هستند؟',
    's.gear.3': 'من جلیقهٔ ایمنی‌ام را پوشیده‌ام.',
    's.danger.1': 'مواظب باش، زمین خیس است!',
    's.danger.2': 'خروجی اضطراری کجاست؟',
    's.danger.3': 'حادثه پیش آمده!',
    'l.alarm': 'آژیر آتش‌سوزی و تخلیه', // nieuw, nalezen
    'w.alarm': 'آژیر خطر', // nieuw, nalezen
    'w.ontruimen': 'تخلیه کردن (همه از ساختمان بیرون می‌روند)', // nieuw, nalezen
    'w.vluchtroute': 'مسیر فرار اضطراری', // nieuw, nalezen
    'w.trap': 'پله‌ها', // nieuw, nalezen
    'w.verzamelplaats': 'محل تجمع (جایی که همه بیرون جمع می‌شوند)', // nieuw, nalezen
    'w.brandblusser': 'کپسول آتش‌نشانی', // nieuw, nalezen
    's.alarm.1': 'کپسول آتش‌نشانی کجاست؟', // nieuw, nalezen
    's.alarm.2': 'باید ساختمان را تخلیه کنیم.', // nieuw, nalezen
    's.alarm.3': 'از پله‌ها برو، نه با آسانسور.', // nieuw, nalezen
    's.accident.1': 'همکارم زمین خورده.',
    's.accident.2': 'خودم را بریده‌ام.',
    's.accident.3': 'می‌خواهم یک حادثه را گزارش بدهم.',
    's.things.1': 'جعبه را روی پالت بگذار.',
    's.things.2': 'اسکنر کجاست؟',
    's.things.3': 'لیفتراک دارد می‌آید.',
    's.directions.1': 'جعبه سمت چپ است.',
    's.directions.2': 'با پاهایت بلند کن.',
    's.directions.3': 'برو سمت راست.',
    's.shift.1': 'شیفت من ساعت هفت شروع می‌شود.',
    's.shift.2': 'استراحت کی است؟',
    's.shift.3': 'ببخشید، دیر کردم.',
    's.sick.1': 'من امروز مریضم.',
    's.sick.2': 'کمرم درد می‌کند.',
    's.sick.3': 'دارم به دکتر زنگ می‌زنم.',
    'c.hello.q': 'شب خوبی داشته باشی!',
    'c.hello.a': 'تا فردا!',
    'c.people.q': 'اسمت چیست؟',
    'c.people.a': 'اسم من سارا است.',
    'l.arrive': 'روز اول: پیدا کردن راه',
    'w.ingang': 'ورودی',
    'w.receptie': 'پذیرش',
    'w.kantine': 'غذاخوری (سلف)',
    'w.kleedkamer': 'رختکن',
    'w.buddy': 'همراه (همکاری که اوایل کار کمکت می‌کند)',
    'w.vinden': 'پیدا کردن',
    's.arrive.1': 'باید پیش چه کسی خودم را معرفی کنم؟',
    's.arrive.2': 'رختکن را پیدا نمی‌کنم.',
    's.arrive.3': 'امروز همراهم کیست؟',
    'c.arrive.q': 'صبح بخیر، برای چه کاری آمده‌اید؟',
    'c.arrive.a': 'تازه‌واردم. امروز شروع می‌کنم.',
    'c.understand.q': 'متوجه شدی؟',
    'c.understand.a': 'نه، لطفاً یک بار دیگر.',
    'c.gear.q': 'کلاه ایمنی‌ات را داری؟',
    'c.gear.a': 'بله، سرم است.',
    'c.danger.q': 'حادثه پیش آمده؟',
    'c.danger.a': 'بله، با ۱۱۲ تماس بگیر!',
    'c.alarm.q': 'همه بیرون هستند؟', // nieuw, nalezen
    'c.alarm.a': 'نه، همکارم هنوز نیامده.', // nieuw, nalezen
    'c.accident.q': 'چه اتفاقی افتاده؟',
    'c.accident.a': 'افتاده. خونریزی دارد.',
    'l.notyet': 'این را هنوز یاد نگرفته‌ام',
    'w.nogniet': 'هنوز نه',
    'w.mogen': 'اجازه داشتن',
    'w.proberen': 'امتحان کردن، سعی کردن',
    'w.voordoen': 'عملاً نشان دادن (اول خودش انجامش می‌دهد)',
    'w.gevaarlijk': 'خطرناک',
    'w.uitleg': 'توضیح',
    's.notyet.1': 'این را هنوز یاد نگرفته‌ام.',
    's.notyet.2': 'هنوز توضیحی نگرفته‌ام.',
    's.notyet.3': 'اجازه دارم این کار را حالا تنهایی انجام بدهم؟',
    'c.notyet.q': 'امتحانش کن، آسان است.',
    'c.notyet.a': 'می‌توانی اول نشانم بدهی چطور انجامش بدهم؟', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.things.q': 'این جعبه کجا برود؟',
    'c.things.a': 'روی پالت.',
    'c.directions.q': 'چپ یا راست؟',
    'c.directions.a': 'راست، کنار قفسه.',
    'c.shift.q': 'شیفتت کی شروع می‌شود؟',
    'c.shift.a': 'فردا ساعت هفت.',
    'c.sick.q': 'مریضی؟',
    'c.sick.a': 'بله، امروز خانه می‌مانم.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'با 112 تماس بگیر!',
    'p.hurt': 'من زخمی شده‌ام.',
  },
};

export default lang;
