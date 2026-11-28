import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'prs',
  name: 'Dari (Afghanistan)',
  nativeName: 'دری',
  dir: 'rtl',
  reviewed: false,
  ui: {
    theme: 'ظاهر',
    themeAuto: 'خودکار',
    themeSand: 'ریگ', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'بندر', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'لباس کار', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'تاریک',
    voice: 'آواز هالندی',
    voiceAuto: 'خودکار',
    voiceHint: 'برای شنیدن 🔊 را بزنید. آوازهای Vloertaal در هر تیلفون یکسان هستند؛ آوازهای دیگر از تیلفون شما می‌آیند.',
    voiceNone: 'این دستگاه آواز هالندی ندارد. می\u200cتوانید آن را در تنظیمات تیلفون (تبدیل متن به گفتار) اضافه کنید.',
    appTagline: 'هالندی برای جای کار',
    chooseLanguage: 'زبان کمکی خود را انتخاب کنید',
    englishOnly: 'تنها انگلیسی',
    beta: 'ترجمه هنوز بررسی نشده است', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: 'روز پی‌هم',
    streakStarted: 'روزهای پی‌همِ شما شروع شد! فردا دوباره بیایید.',
    streakGrew: '{n} روز پی‌هم! ادامه بدهید.',
    start: 'شروع',
    practice: 'دوباره تمرین کنید',
    locked: 'اول درس قبلی را خلاص کنید',
    newWord: 'کلمهٔ نو',
    tapToHear: 'برای شنیدن لمس کنید',
    sayItAloud: 'آن را بلند بگویید.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'آن را آهسته بگویید، یا در دل‌تان.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'این چه معنی دارد؟',
    snapQuestion: 'فهمیدید؟', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'بلی، خوب.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'خوب است که می‌پرسید!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'درست فهمیدید!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'دیدید؟ پرسیدن بهتر بود.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'کدام یک «{word}» است؟',
    mixLesson: 'مرور ترکیبی',
    whatDoYouHear: 'چه می‌شنوید؟',
    buildSentence: 'این جمله را به هالندی بسازید',
    typeWhatYouHear: 'آنچه را می‌شنوید بنویسید',
    check: 'کنترول',
    continue: 'ادامه',
    correct: 'شاباش!',
    almost: 'درست است، اما به املا دقت کنید',
    incorrect: 'کاملاً درست نیست',
    correctAnswer: 'جواب درست',
    rightAnswerIs: 'جواب درست این است:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'بهترین جواب این است:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'جواب شما',
    inARow: '{n} پشت سر هم',
    cantListen: 'حالا نمی‌توانم بشنوم',
    learnWriting: 'می‌خواهم نوشتن را هم یاد بگیرم',
    learnWritingHint: 'روشن: کلمه‌هایی را که می‌شنوید با حروف بنویسید. خاموش: کلمهٔ نوشته‌شده‌ای را که می‌شنوید انتخاب کنید.',
    tagRepeat: 'دوباره',
    readAloud: 'بلند بخوانید',
    lessonComplete: 'درس خلاص شد!',
    phrasebook: 'جمله‌های عاجل',
    phrasebookHint: 'یک جمله را لمس کنید تا آن را بشنوید. می‌توانید صفحه را به همکار خود هم نشان بدهید.',
    whoToCall: 'مشکل در کار؟ کی کمک کرده می‌تواند',
    who112: 'حالت عاجل: خطر جانی، آتش‌سوزی یا جرمی که همین حالا رخ می‌دهد.',
    whoLegal: 'مشوره رایگان دربارهٔ قرارداد، معاش یا برطرفی.',
    whoInspection: 'گزارش کار ناامن، معاش خیلی کم یا استثمار. می‌توانید ناشناس بمانید.',
    whoFairwork: 'در کار از شما سوءاستفاده می‌شود، یا فکر می‌کنید که این‌طور است.',
    who113: 'به ختم زندگی خود فکر می‌کنید، یا نگران کسی هستید. رایگان، شب و روز.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'خشونت یا بدرفتاری در خانه، بالای شما یا کس دیگر. رایگان، بدون گفتن نام هم می‌شود.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'تنظیمات',
    helpLanguage: 'زبان کمکی',
    resetProgress: 'پاک کردن پیشرفت من',
    resetConfirm: 'تمام پیشرفت در این دستگاه پاک شود؟',
    audioUnavailable: 'صدا در این دستگاه موجود نیست.',
    slow: 'آهسته',
    completeChat: 'گفتگو را تکمیل کنید',
    meaning: 'معنا',
    navRoute: 'درس‌ها',
    navWords: 'کمک',
    rightFirstTime: 'درست در دفعهٔ اول',
    newWords: 'کلمه‌های نو',
    wordsLearnedN: '{n} کلمه یاد گرفتید',
    practiseMistakes: 'تمرین اشتباه‌ها · {n} تا مانده',
    quitHint: 'جواب\u200cهای شما در این درس ذخیره نمی\u200cشود.',
    keepGoing: 'ادامه بدهید',
    stopLesson: 'درس را بس کنید',
    fullVersion: 'نسخهٔ کامل',
    unlockFull: 'نسخهٔ کامل را باز کنید',
    unlockHint: 'با کد همه درس‌ها باز می‌شوند. کد رایگان است. هنوز کد ندارید؟ از معلم یا رهنمای تان بپرسید، یا به ما ایمیل بفرستید:',
    codeNotFull: 'این کد نسخهٔ کامل را باز نمی‌کند. کد نو بخواهید.',
    password: 'کد',
    enterPassword: 'کد را وارد کنید',
    wrongPassword: 'کد درست نیست. دوباره کوشش کنید.',
    unlock: 'باز کنید',
    sector: 'کار شما',
    chooseSector: 'در کجا کار می‌کنید؟',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'در کدام کشور کار می‌کنید؟',
    countryHint: 'کلمات و نکته‌های همان کشور را می‌بینید.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'آنچه یاد می‌گیرید فقط روی همین تیلفون است.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'همیشه از همین تیلفون استفاده کنید.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'هالند',
    countryBe: 'بلجیم (فلاندر)',
    tipsNote: 'این نکته‌ها در باره کار در هالند است. معلومات عمومی است، نه مشوره حقوقی.',
    sectorHint: 'درس‌های کار شما زود می‌آیند. بعداً می‌توانید این را در تنظیمات تغییر بدهید.',
    otherSectors: 'رشته‌های کاری دیگر',
    reviewToday: 'مرور امروز',
    reviewTodayN: 'کلمه‌ها برای تمرین دوباره: {n} · چند دقیقه',
    notSureYet: 'هنوز نمی‌دانم',
    sectorLogistics: 'لوجستیک',
    sectorConstruction: 'ساختمان‌سازی',
    sectorProduction: 'تولید',
    sectorCare: 'مراقبت',
    sectorHospitality: 'رستوران و هوتل',
    sectorRetail: 'دکان و سوپرمارکیت', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'پاک‌کاری',
    sectorHorticulture: 'باغداری و گلخانه', // nagelezen (2e lezing)
    sectorTechnical: 'کارهای فنی', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'ورکشاپ موتر', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'صدا',
    soundOn: 'صدا روشن',
    withoutSound: 'بدون صدا',
    quietHint: 'بدون صدا، درس‌ها سوال شنیدنی ندارند و هیچ چیز خودبخود پخش نمی‌شود. برای شنیدن یک کلمه 🔊 را بزنید، مثلاً با گوشکی.',
    soundOffToast: 'بدون صدا. می‌توانید صدا را در تنظیمات روشن کنید.',
    noInternetSound: 'انترنت نیست: صدا فعلاً کار نمی‌کند.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'امروز هنوز مانده',
    streakStopped: 'روزهای پی‌همِ شما در {n} روز ختم شد. امروز دوباره شروع کنید.',
    recordN: 'بهترین ریکارد شما: {n} روز',
    workWeek: 'هفتهٔ کاری شما',
    freeDaysN: 'روزهای رخصتی: {n}. اگر یک روز را از دست بدهید، روزهای پی‌همِ شما ادامه پیدا می‌کند.',
    restDay: 'روز رخصتی',
    tier3: '۳ روز پی‌هم',
    tier7: '۱ هفته پی‌هم',
    tier14: '۲ هفته پی‌هم',
    tier30: '۱ ماه پی‌هم',
    reviewDone: 'برای امروز ختم شد',
    tomorrowN: 'فردا: {n} کلمه',
    firstWordsTomorrow: 'فردا اولین کلمه‌های شما دوباره می‌آیند',
    extraRound: 'یک دور اضافی',
    reviewFirstHint: 'اول مرور کنید. اینطور بیشتر به یاد تان می‌ماند.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: '{n} کلمه قوی‌تر',
    noMistakes: 'بدون اشتباه',
    nextUp: 'بعدی',
    installTitle: 'Vloertaal را روی صفحهٔ اصلی بگذارید',
    installHint: 'بعد مثل یک اپ باز می‌شود، حتی بدون انترنت.',
    installAdd: 'افزودن به صفحهٔ اصلی',
    iosStep1: 'روی «اشتراک‌گذاری» (شریک ساختن) بزنید',
    iosStep2: 'روی «افزودن به صفحهٔ اصلی» بزنید',
    iosStep3: 'تمام!',
    backupTitle: 'پیشرفت خود را نگه دارید',
    backupHint: 'پیشرفت شما فقط روی همین تیلفون است. آن را منحیث فایل ذخیره کنید، مثلاً برای تیلفون نو.',
    backupSave: 'دانلود',
    backupLoad: 'دوباره آوردن',
    backupBad: 'این فایل Vloertaal نیست.',
    backupAsk: 'این فایل را به پیشرفت خود اضافه کنید، یا پیشرفت خود را با آن عوض کنید؟',
    backupMerge: 'یکجا کنید',
    backupReplace: 'عوض کنید',
    backupBack: 'پیشرفت شما دوباره آمد.',
    backupNothingNew: 'چیز نو نبود: این از پیش در تیلفون شما بود.',
    cancel: 'لغو',
    remindTitle: 'هر روز به من یادآوری کن',
    remindEvent: 'وقت هالندی (10 دقیقه)',
    remindHint: 'تقویم تیلفون به شما یادآوری می‌کند. هیچ چیز برای ما فرستاده نمی‌شود.',
    remindBefore: 'پیش از کار',
    remindAfter: 'بعد از کار',
    remindOwn: 'وقت دیگر',
    remindAdd: 'به تقویم من اضافه کن',
    remindAdded: 'فایل را باز کنید تا به تقویم شما اضافه شود.',
    remindAddedAsk: 'اضافه شد؟ پس آن را در تقویم خود می‌بینید.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'درباره',
    tagMeaning: 'معنا',
    tagPick: 'انتخاب کنید',
    tagListen: 'گوش کنید',
    tagType: 'بنویسید',
    tagMatch: 'جوره‌ها',
    tagBuild: 'جمله',
    tagChat: 'گفتگو',
    tagSituation: 'حالت',
    tagTip: 'مشوره',
    more: 'بیشتر',
    less: 'کمتر',
    daysUnit: 'روز',
    wordsUnit: 'کلمه',
    countTitle: 'شمارش بی‌نام',
    countHint: 'اپ می‌شمارد که درس‌ها چند بار انجام می‌شوند و تقریباً چقدر وقت می‌گیرند. و اینکه آیا اپ جایی خطا می‌دهد. بدون نام، بدون حساب، بدون تعقیب.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'تصدیق‌نامه',
    myCertificates: 'تصدیق‌نامه‌های من',
    certsEmpty: 'تمام درس‌های یک بخش را خلاص کنید. بعد یک تصدیق‌نامه می‌گیرید.',
    certEarned: 'تصدیق‌نامه گرفتید!',
    certEarnedHint: 'تمام درس‌های این بخش را خلاص کردید.',
    certView: 'ببینید',
    certLater: 'بعداً',
    certPrint: 'چاپ کنید یا منحیث PDF ذخیره کنید',
    certSaved: 'عکس ذخیره شد.',
    certNameHint: 'تنها در همین تیلفون می‌ماند. می‌توانید خالی بگذارید.',
    certChangeName: 'تغییر نام',
    certPractice: 'تصدیق‌نامهٔ تمرینی، نه دیپلوم رسمی',
    resumeLesson: 'ادامهٔ درس',
    restartLesson: 'از سر شروع کنید',
    quitKept: 'پیشرفت شما ذخیره می‌ماند. بعداً می‌توانید ادامه بدهید.',
    bestAnswer: 'بهترین جواب',
    inReview: 'زیر بررسی',
    today: 'امروز',
    playAgain: 'دوباره گوش کنید',
    daysUnitOne: 'روز',
    wordsUnitOne: 'کلمه',
    wordsLearnedOne: '{n} کلمه یاد گرفتید',
    tomorrowOne: 'فردا: {n} کلمه',
    wordsStrongerOne: '{n} کلمه قوی‌تر',
    recordOne: 'بهترین ریکارد شما: {n} روز',
    streakStoppedOne: 'روزهای پی‌همِ شما در {n} روز ختم شد. امروز دوباره شروع کنید.',
    letterTiles: 'حروف',
    useKeyboard: 'کیبورد',
    skippedN: '{n} تیر شد، حساب نمی‌شود',
    stampLater: 'بعداً دوباره می‌آید',
    stampDone: 'ختم شد',
    chooseNext: 'موضوع بعدی را انتخاب کنید',
    recommended: 'پیشنهادی',
    allTopics: 'همهٔ موضوع‌ها',
    topicsOrder: 'نمایش موضوع‌ها',
    privacyLink: 'بیانیهٔ حریم خصوصی را بخوانید (به هالندی)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'چه می‌خواهید یاد بگیرید؟', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'آموختن هالندی برای کار، و اینکه کار در اینجا چگونه است', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'هالندی را بلد هستم: فقط قوانین کار', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'آموختن هالندی', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'رفتن به Werkregels؟', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'همه چیز هالندی می‌شود. زبان کمکی شما خاموش می‌شود.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'تا وقتی که برنگردید، قوانین را مرور می‌کنید، نه کلمات را.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'پیشرفت شما ذخیره می‌ماند. از همین‌جا می‌توانید دوباره برگردید.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'بلی، به Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'بر اساس بخش‌ها',
    inOrder: 'به ترتیب',
    searchTopics: 'جستجوی موضوع', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'موضوعی با این کلمه نیست.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: 'درس',
    lessonsUnitOne: 'درس',
    topicsUnit: 'موضوع',
    topicsUnitOne: 'موضوع',
    allTopicsDone: 'همهٔ موضوع‌ها را ختم کردید. آفرین!',
    // Speaking practice
    tagSpeak: 'بگویید',
    speakPrompt: 'گوش کنید، بعد بگویید',
    tapToSpeak: 'لمس کنید و گپ بزنید',
    stopRecording: 'توقف',
    micPrivacy: "هیچ کس دیگر صدای شما را نمی‌شنود. هیچ چیزی فرستاده نمی‌شود.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'مایکروفون خاموش است. حالا آن را بلند بگویید، بعد ادامه بدهید.',
    cantSpeak: 'حالا نمی‌توانم گپ بزنم',
    soundsSame: 'مثل هم است',
    sayAgain: 'دوباره بگویید',
    hearMine: 'صدای خود را بشنوید', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'قبلاً و حالا', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'بار اول شما: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "با هم بگویید", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "همزمان با صدا بگویید. هیچ چیزی ثبت نمی‌شود.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "حالا فقط خود شما", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "اشتباه بخشی از آموختن است. نفهمیدند؟ یک بار دیگر بگویید.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave2: "تشویش دارید؟ عادی است. باز هم بگویید.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave3: "لازم نیست بی‌نقص بگویید. فقط کوشش کنید.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonTitle: "چرا هالندی یاد می‌گیرید؟", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonHint: "یکی یا دو تا را انتخاب کنید.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonDone: "تمام", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "کارم را خوب انجام بدهم", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "اولادهایم", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "با همکاران گپ بزنم", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "کارهایم را خودم انجام بدهم", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "کار بهتر", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "در هالند احساس کنم در خانهٔ خود هستم", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'من',
    speakingPractice: 'تمرین گپ زدن',
    speakingHint: "کلمه‌ها را بلند بگویید و مقایسه کنید. هیچ کس دیگر صدای شما را نمی‌شنود: هیچ چیزی فرستاده نمی‌شود. اولین ثبت صدای شما از هر جمله روی تیلفون تان می‌ماند تا بعداً مقایسه کنید.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    savingOffline: 'ذخیره می‌شود…',
    savedOffline: 'در تیلفون شما ذخیره شد', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    offlineNoSpace: 'جای کافی در این تیلفون نیست. یک موضوع ذخیره‌شده را پاک کنید یا جای خالی کنید.',
    offlineFailed: 'ذخیره نشد. انترنت را چک کنید و دوباره کوشش کنید.',
    pocketCard: 'کارت جیبی',
    pocketSave: 'منحیث عکس ذخیره کنید',
    textSize: 'اندازهٔ متن',
    textNormal: 'عادی',
    textLarge: 'کلان',
    textXl: 'بسیار کلان',
    showEnglish: 'انگلیسی را هم نشان بدهید',
    genderTitle: 'زن یا مرد؟',
    genderHint: 'تا زبان شما به شکل درست با شما صحبت کند.',
    genderWoman: 'زن',
    genderMan: 'مرد',
    genderNone: 'ترجیح می‌دهم نگویم',
    langGuessYes: 'بلی',
    langGuessOther: 'زبان دیگر',
    settingsLangMe: 'زبان و من',
    settingsLessons: 'درس‌ها',
    settingsPhone: 'این تیلفون',
    settingOn: 'روشن',
    settingOff: 'خاموش',
    sectorGroupMake: 'ساخت و انتقال',
    sectorGroupCare: "مراقبت و اطفال", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'دکان و رستورانت', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'ساختمان و فنی', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'صدای زن',
    voiceMan: 'صدای مرد',
    writingPick: 'انتخاب کلمه',
    settingWriting: 'نوشتن',
    settingKeepLessons: 'نگه‌داشتن درس‌ها در این تیلفون',
    settingKeepLessonsHint: 'موضوع فعلی در این تیلفون ذخیره می‌شود تا بدون انترنت هم کار کند. موضوع‌های ختم‌شده از تیلفون پاک می‌شوند.',
    otherTopicLink: 'موضوع دیگر',
    remindAsk: 'هر روز به شما یادآوری کنیم؟',
    remindYes: 'بلی، بعد از کار',
    remindNo: 'نی، تشکر',
    remindPickTime: 'چه وقت به شما یادآوری کنیم؟',
    certSaveShare: 'ذخیره یا شریک‌سازی',
    pauseTitle: 'مکث',
    back: 'برگشت',
    quitLesson: 'خروج از درس',
    playAudio: 'گوش کنید',
    scrollDown: 'به پایین بروید',
    lessonProgress: 'پیشرفت درس',
    mainMenu: 'مینوی اصلی',
    spaceKey: 'فاصله',
    langNotOnPhone: 'این زبان هنوز در تیلفون شما نیست. برای تبدیل زبان، به انترنت وصل شوید.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'خود تان وقت را انتخاب کنید',
    gateWho: 'کد را معلم، مربی یا کارفرمای شما برای تان می‌دهد.',
    gateTrust: 'بدون حساب. بدون نام. همه چیز در همین تیلفون می‌ماند.',
    codeAccepted: 'کد قبول شد',
    startFree: 'کد ندارید؟ با درس‌های اول شروع کنید',
    bramHello: 'از دیدن شما خوشحالم.',
    bramBack: 'دوباره خوش آمدید. ادامه بدهیم.',
    bramRested: 'دیروز روز رخصتی شما بود. روزهای پی‌همِ شما ادامه دارد.',
    bramDueN: 'امروز {n} کلمه برای تکرار دارید.',
    bramDueOne: 'امروز {n} کلمه برای تکرار دارید.',
    bramDayN: 'روز {n} پی‌هم.',
    bramDone: 'برای امروز ختم شد. تا فردا.',
    bramPerfect: 'بسیار خوب. این کلمه‌ها را می‌دانید.',
    bramGood: 'کار خوب. قدم به قدم.',
    bramHard: 'خوب شد که تمرین کردید. کلمه‌های مشکل دوباره می‌آیند.',
    bramReview: 'خوب است. تکرار به یاد ماندن کمک می‌کند.',
    bramIntro: 'من Bram هستم، همکار شما.',
    bramIntroHello: 'سلام، من Bram هستم.',
    showDutch: 'نمایش به هالندی',
    showAnswers: 'نمایش جواب‌ها', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'آخرین تازه‌سازی: {date}',
    /* G4 b3 */
    buildListen: 'گوش کنید و جمله را بسازید',
    chatWhichQuestion: 'کدام سوال با این جواب جور می‌آید؟',
    reviewWaiting: 'کلمه‌های دیگری منتظر اند: {n}. در روزهای آینده دوباره می‌آیند.',
    factTitle: 'آیا می‌دانستید؟',
    fact3: 'شما تنها نیستید: در هالند بیشتر از ۳ میلیون آدم بزرگسال در خواندن، حساب یا کار با کمپیوتر مشکل دارند. تمرین کمک می‌کند.',
    fact7: 'از هر ۱۰۰ مهاجری که هالندی را بسیار خوب گپ می‌زنند، ۶۹ نفر کار با معاش دارند.',
    fact14: 'در بسیاری از کتابخانه‌ها یک Taalhuis (خانهٔ زبان) هست: کمک رایگان تا آموختن هالندی را ادامه بدهید.',
    fact30: 'هر روز کمی تمرین، از گاه‌گاهی تمرین زیاد بهتر است. شما ۳۰ روز پی‌هم تمرین کرده‌اید!',
    /* Backup, reminder and reset, a second look */
    backupFileN: 'این فایل {n} درس دارد.',
    backupFileOne: 'این فایل {n} درس دارد.',
    backupPhoneN: 'شما {n} درس دارید.',
    backupPhoneOne: 'شما {n} درس دارید.',
    backupFewer: '«عوض کنید» درس‌هایی را که در فایل نیستند پاک می‌کند. «یکجا کنید» همه چیز را نگه می‌دارد.',
    backupTooBig: 'این فایل بسیار کلان است. فایل Vloertaal بسیار کوچک‌تر است.',
    backupNewPhone: 'تیلفون نو؟ در آنجا هم به کد خود ضرورت دارید.',
    remindEveryDay: 'یادآوری شما: هر روز ساعت {time}',
    remindStop: 'یادآوری را خاموش کنید',
    remindStopped: 'فایل را باز کنید تا یادآوری از تقویم شما برداشته شود.',
    remindStoppedAndroid: 'یادآوری را خودتان در تقویم Google پاک کنید.',
    resetKeeps: 'درس‌ها، کلمه‌ها، روزهای پی‌هم و تصدیق‌نامه‌های شما پاک می‌شوند. زبان و تنظیمات شما می‌مانند.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'بارگیری نشد. انترنت وصل است؟',
    retry: 'دوباره کوشش کنید',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal اجرا نمی‌شود.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'اول پیشرفت خود را نگه دارید. بعداً از نو شروع کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'از نو شروع کنید', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'مشکلی پیش آمد. پیشرفت شما ذخیره شده است.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'از پیش چه می‌دانید؟', // nieuw, nalezen // nagelezen AI 31 okt
    toetsOffer: 'تقریباً 10 دقیقه. نمره‌ای در کار نیست. فقط برای خود شماست.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsEndOffer: 'شما چیزهای زیادی یاد گرفته‌اید. آزمون را دوباره انجام بدهید و ببینید حالا چه می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsPartListen: 'شنیدن', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'کلمات', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'جملات', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'گوش کنید. معنایش چیست؟', // nieuw, nalezen // nagelezen AI 31 okt
    toetsNotSure: 'نمی‌دانید؟ روی «نمی‌دانم» بزنید. مشکلی نیست.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'ثبت صدای شما فقط در همین تیلفون می‌ماند. بعداً می‌توانید دوباره صدای خود را بشنوید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsStartDone: 'آغاز خوب! این‌ها را از پیش می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsEndDone: 'آفرین! ببینید حالا چه می‌دانید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsYouThen: 'شما پیشتر', // nieuw, nalezen // nagelezen AI 31 okt
    toetsYouNow: 'شما حالا', // nieuw, nalezen // nagelezen AI 31 okt
    toetsKeepGoing: 'هر روز کمی تمرین کنید. اینطور بیشتر و بیشتر یاد می‌گیرید.', // nieuw, nalezen // nagelezen AI 31 okt
    toetsStart: 'آزمون را شروع کنید', // nieuw, nalezen // nagelezen AI 31 okt
    toetsIdk: 'نمی‌دانم', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'بیشتر از قبل', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'تقریباً مثل قبل', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'همه با هم: حالا بیشتر از قبل می‌دانید.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'همه با هم: تقریباً مثل قبل.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'اول 5 سوال در مورد خود شما. درست یا غلط وجود ندارد.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'جرئت می‌کنید این کار را بکنید؟', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'بگویید که چیزی را نمی‌فهمید', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'از آمر تان چیزی بپرسید', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'کمک بخواهید', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'بگویید که چیزی مصئون نیست', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'در وقت تفریح کمی با یک همکار گپ بزنید', // nieuw, nalezen (AI-correctie 28 nov 2026)
    toetsDurfNotYet: 'هنوز نه', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'کمی', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'بلی', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'چند هفته بعد دوباره می‌پرسیم.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'سرعت', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'آرام', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'عادی', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'آرام یعنی آهسته و واضح. عادی مثل گپ زدن همکاران است. اگر بسیار چیزها را می‌فهمید، «عادی» را انتخاب کنید.', // nieuw, nalezen // nagelezen AI 31 okt
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'نشان بدهید که چطور پیش می‌رود', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardIntro: 'این کارت پیشرفت شما را نشان می‌دهد. آن را به معلم، مربی یا آمر تان نشان بدهید. خود تان تصمیم می‌گیرید.', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardNo: 'می‌توانید «نخیر» هم بگویید.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'تیلفون شما خودش کارت را می‌سازد. چیزی فرستاده نمی‌شود. Vloertaal چیزی نگه نمی‌دارد.', // nieuw, nalezen // nagelezen AI 31 okt
    coachCardWhat: 'روی کارت، به زبان هالندی:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'موضوعات تمام‌شده', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'روزهای تمرین در 4 هفتهٔ گذشته', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'آخرین درس، با تاریخ', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'کود: همان عددها، کوتاه، برای خلاصهٔ گروپ. بدون نام.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'گوش دادن تیلفون (آزمایشی)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: 'بعد از گپ زدن، تیلفون می‌گوید که گپ شما را فهمید یا نی. این کار در خود تیلفون انجام می‌شود. هیچ چیزی به ما یا دیگران فرستاده نمی‌شود.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'تیلفون اول زبان هالندی کار دارد. دانلود کلان است: از وای‌فای استفاده کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'دانلود هالندی', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'حالا نی', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'هالندی در راه است. بعداً دوباره کوشش کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'نشد. بعداً با وای‌فای دوباره کوشش کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'خود تیلفون گوش می‌دهد. هیچ چیزی فرستاده نمی‌شود.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'تیلفون گوش می‌دهد…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'فهمید', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'تقریباً: {word} را دوباره بگویید', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'هنوز نفهمید', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'باز هم ادامه', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'می‌خواهید تیزتر یاد بگیرید؟', // nieuw, nalezen // nagelezen AI 31 okt
    fasterHint: 'توضیح کمتر در درس‌های نو. هالندی با سرعت عادی.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'بلی', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'نخیر', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'درس بعدی کمی کوتاه‌تر است.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'تیزتر یاد گرفتن', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'روشن: توضیح کمتر در درس‌های نو، و هالندی با سرعت عادی. خاموش: مثل پیش.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'نظر تان در باره Vloertaal چیست؟', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'خوب', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'میانه', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'خوب نیست', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'تشکر! این به ما کمک می‌کند Vloertaal را بهتر بسازیم.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'تیزتر یاد گرفتن: توضیح کمتر در درس‌های نو، و هالندی با سرعت عادی.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'با هم تمرین کنید', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'دو نفر، یک تیلفون', // nieuw, nalezen // nagelezen AI 31 okt
    samenIntro: 'با یک همکار، دوست یا استاد تمرین کنید. به نوبت بخوانید.', // nieuw, nalezen // nagelezen AI 31 okt
    samenHow: 'نفر 1 همکار است. نفر 2 جواب می‌دهد.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'هیچ چیز ثبت نمی‌شود. نمره‌ای نیست.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'نفر {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'جواب', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'گوش کنید', // nieuw, nalezen // nagelezen AI 31 okt
    samenNext: 'بعدی', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'ترجمه', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'شاباش! نقش‌ها را تبدیل کنید و یک بار دیگر انجام دهید؟', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'نقش‌ها را تبدیل کنید', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'خلاص', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'این را می‌دانم: آزمون کوتاه', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'این را می‌دانید. این موضوع را تمام‌شده نشانی کنید؟', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'در آن صورت هنوز تصدیق‌نامه ندارید. تصدیق‌نامه را بعد از درس‌ها می‌گیرید.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'درس‌ها در این موضوع به شما کمک می‌کنند.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'نشانی کردن', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'با آزمون', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'با این هم درس‌ها را انجام دهید', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'من با Vloertaal هالندی را برای کارم یاد می‌گیرم. رایگان است: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal یک اپ رایگان برای آموختن هالندیِ کار است.', // nieuw, nalezen
    briefjeHow: 'درس‌های کوتاه در تیلفون خود، با توضیح به زبان خود. بدون حساب.', // nieuw, nalezen
    briefjeOpen: 'در تیلفون خود باز کنید:', // nieuw, nalezen
    workTry: 'امروز در کار امتحانش کنید', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    workTryWhen: 'وقتی:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'آنگاه بگویید:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'برای همکار شما', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'این را به همکاری که هالندی گپ می‌زند نشان دهید. در آن نوشته است که چگونه می‌تواند در تمرین به شما کمک کند.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'به همکار تان بفرستید', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'برای رهنمای شما', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'کار در اینجا چگونه است، به هالندی ساده. تیلفون آن را بلند می‌خواند.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'حالا هالندی زیاد می‌دانید. در هر موضوع می‌توانید بخوانید که کار در اینجا چگونه است، به هالندی ساده.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'هیچ: هالندی گپ می‌زنم', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'جمله‌هایی که در کار گفتید', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'کلماتی که هنوز سخت است', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'درس‌هایی در باره اینکه کار در اینجا چگونه است', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'موضوعات مربوط به حقوق شما با نام نشان داده شود', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'حالا از یاد: به هالندی چه بود؟', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'کلمه‌های ۲ هفته پیش یا قدیمی‌تر: هنوز {n} از {m} را می‌دانستید.', // nieuw, nalezen (AI-correctie 28 nov 2026)
    verbSecond: 'فعل در جای دوم است.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'امتیاز', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'همهٔ امتیازهای شما', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'حال و هوا', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'آرام', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'بازی', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'آرام: هیچ چیز حرکت نمی‌کند، جشنی نیست. بازی: امتیاز، صدا و حرکت زیاد.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "خدمات و امنیت", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "کار در بیرون", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "کودکستان", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "کثافات و بازیافت", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "صنعت مواد خوراکی", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "امنیت", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "خدمات ساختمان", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "سبزه‌زارها و باغ‌ها", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'سطح', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'تازه‌کار', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'شاگرد', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'همکار', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'ماهر', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'باتجربه', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'استادکار', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'سطح نو:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'بدون غلطی:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'هدف امروز', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'به هدف امروز رسیدید!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'نو در جعبهٔ افزار شما:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'جعبهٔ افزار من', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'یک درس را با بازی خلاص کنید. بعد اولین افزار خود را می‌گیرید.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'توضیح بیشتر', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'در بارهٔ این نکته‌ها', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'هنوز یک متخصص این توضیح را بررسی نکرده است.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'تاریخ این توضیح: {month}. برای قوانین تازه، به Juridisch Loket یا Work in NL مراجعه کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'تاریخ این توضیح: {month}. برای قوانین تازه، به justitiehuis یا werk.belgie.be مراجعه کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'بیشتر در بارهٔ Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'این را در کار گفتید؟', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    geluktYes: 'بلی، شد', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'هنوز نه', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: 'آفرین! تا حال {n} جمله در کار موفق بوده.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'آفرین! اولین جمله‌تان در کار موفق بود.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'آن‌ها را در تنظیمات پیدا می‌کنید.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'موفق در کار', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'این جمله‌ها را در کار گفتید.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'حدود {n} دقیقه', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'پیشرفت شما ذخیره نشد. آیا تیلفون پر است؟ کمی جا خالی کنید. یا در تنظیمات: «پیشرفت خود را نگه دارید».', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'تیلفون شما ممکن است گاهی پیشرفت شما را پاک کند. پس یک کاپی نگه دارید.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'همین حالا ذخیره کنید', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'برای خود تان بفرستید', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'فایل را برای خود تان بفرستید، مثلاً در واتس‌اپ یا با ایمیل.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'تمام شد. این فایل را خوب نگه دارید. بعداً با آن پیشرفت خود را دوباره می‌آورید.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'چه می‌گویید؟', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    speakTurnExample: 'نمونه', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'جواب را بشنوید', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    sceneTitle: 'در جای کار گوش کنید', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    sceneIntro: 'مثل جای کار، سر و صدا است. گوش کنید. بعد سوال‌ها می‌آیند.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    buildFront: 'کلمهٔ نشانی‌شده را اول بگذارید', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'قوانین کار', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'حالا هالندی زیاد می‌دانید. می‌خواهید قوانین کار را هم یاد بگیرید؟ آن وقت همه چیز به هالندی است.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'بلی، نشان بدهید', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'چطور گفته می‌شود؟', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'یک صدا را لمس کنید. ببینید دهن چطور آن را می‌سازد.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'سرعت', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'کلمه، آواز به آواز', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'صدا', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "ارتباط", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'قدم‌های اول',
    'theme.safe': 'کار ایمن',
    'theme.find': 'پیدا کردن کار',
    'theme.job': 'وظیفهٔ شما',
    'theme.together': 'همکاری',
    'theme.rights': 'حقوق شما',
    'theme.life': 'زندگی در هالند',
    'theme.sector': 'رشتهٔ کاری شما',
    // Units
    'u.firstday': 'روز اول کار',
    'u.help': 'کمک خواستن',
    'u.safety': 'اول ایمنی',
    'u.emergency': "وقتی کدام حادثه رخ می‌دهد", // nieuw, nalezen // nagelezen AI 22 nov
    'u.warehouse': 'در گدام',
    'u.time': 'وقت و تقسیم اوقات کار',

    // Lessons
    'l.hello': 'سلام دادن',
    'l.people': 'مردم در جای کار',
    'l.understand': 'نمی‌فهمم',
    'l.gear': 'وسایل محافظتی',
    'l.danger': 'خطر!',
    'l.accident': 'گزارش دادن حادثه',
    'l.things': 'چیزهای گدام',
    'l.directions': 'طرف‌ها و کارها',
    'l.shift': 'نوبت کاری من',
    'l.sick': 'خبر دادن از مریضی',

    // Words
    'w.hallo': 'سلام',
    'w.goedemorgen': 'صبح بخیر',
    'w.dankjewel': 'تشکر',
    'w.ja': 'بلی',
    'w.nee': 'نخیر',
    'w.totmorgen': 'تا فردا',
    'w.collega': 'همکار',
    'w.baas': 'آمر',
    'w.leidinggevende': 'سرپرست',
    'w.werk': 'کار',
    'w.naam': 'نام',
    'w.nieuw': 'نو',
    'w.begrijpniet': 'نمی‌فهمم',
    'w.nogeenkeer': 'یک بار دیگر',
    'w.langzaam': 'آهسته',
    'w.helpen': 'کمک کردن',
    'w.waar': 'کجا',
    'w.wc': 'تشناب',
    'w.helm': 'کلاه ایمنی',
    'w.handschoenen': 'دستکش',
    'w.veiligheidsschoenen': 'بوت ایمنی',
    'w.hesje': 'واسکت ایمنی (رنگ روشن)',
    'w.bril': 'عینک ایمنی',
    'w.dragen': 'پوشیدن',
    'w.pasop': 'هوش کن',
    'w.stop': 'ایستاد شو',
    'w.help': 'کمک!',
    'w.brand': 'آتش‌سوزی',
    'w.nooduitgang': 'راه خروج عاجل',
    'w.ongeluk': 'حادثه',
    'w.gewond': 'زخمی',
    'w.bloeden': 'خون آمدن، خونریزی کردن',
    'w.ehbodoos': 'قطی کمک‌های اولیه',
    'w.bhver': 'امدادگر حالات عاجل در کمپنی (کمک‌های اولیه، آتش‌سوزی، تخلیه)',
    'w.ziekenhuis': 'شفاخانه',
    'w.gebeuren': 'پیش آمدن، واقع شدن',
    'w.doos': 'قطی',
    'w.pallet': 'پالت',
    'w.heftruck': 'فورک‌لیفت',
    'w.kar': 'کراچی',
    'w.stelling': 'رف (قفسهٔ گدام)',
    'w.scanner': 'سکنر',
    'w.links': 'چپ',
    'w.rechts': 'راست',
    'w.boven': 'بالا',
    'w.beneden': 'پایین',
    'w.tillen': 'بلند کردن',
    'w.pakken': 'گرفتن',
    'w.dienst': 'نوبت کاری',
    'w.pauze': 'وقت تفریح',
    'w.beginnen': 'شروع کردن',
    'w.klaar': 'خلاص',
    'w.telaat': 'ناوقت',
    'w.morgen': 'فردا',
    'w.ziek': 'مریض',
    'w.bellen': 'زنگ زدن (تیلفون کردن)',
    'w.dokter': 'داکتر',
    'w.pijn': 'درد',
    'w.vandaag': 'امروز',
    'w.beter': 'بهتر',

    // Sentences
    's.hello.1': 'سلام، من نو آمده‌ام.',
    's.hello.2': 'صبح بخیر، من علی هستم.',
    's.hello.3': 'تشکر، تا فردا!',
    's.people.1': 'نام من سارا است.',
    's.people.2': 'آمر کیست؟',
    's.people.3': 'من یک همکار نو هستم.',
    's.understand.1': 'می‌توانید آن را دوباره بگویید؟',
    's.understand.2': 'می‌توانید کمی آهسته‌تر گپ بزنید؟', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.understand.3': 'تشناب کجاست؟',
    's.gear.1': 'همیشه کلاه ایمنی خود را سر کن.',
    's.gear.2': 'دستکش‌ها کجاست؟',
    's.gear.3': 'من واسکت ایمنی خود را پوشیده‌ام.',
    's.danger.1': 'هوش کن، زمین تر است!',
    's.danger.2': 'راه خروج عاجل کجاست؟',
    's.danger.3': 'حادثه شده!',
    'l.alarm': 'زنگ خطر آتش‌سوزی و تخلیه', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'زنگ خطر', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'تخلیه کردن (همه از تعمیر بیرون می‌روند)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'راه فرار عاجل', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'زینه', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'محل جمع شدن (جایی که همه بیرون جمع می‌شوند)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'کپسول آتش‌خاموش‌کن', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'کپسول آتش‌خاموش‌کن کجاست؟', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'باید تعمیر را تخلیه کنیم.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'از زینه بروید، نه با لفت.', // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.1': 'همکارم افتاده است.',
    's.accident.2': 'خود را بریده‌ام.',
    's.accident.3': 'می‌خواهم یک حادثه را گزارش بدهم.',
    's.things.1': 'قطی را بالای پالت بگذار.',
    's.things.2': 'سکنر کجاست؟',
    's.things.3': 'فورک‌لیفت می‌آید.',
    's.directions.1': 'قطی طرف چپ است.',
    's.directions.2': 'با پاهای خود بلند کن.',
    's.directions.3': 'طرف راست برو.',
    's.shift.1': 'نوبت کاری من ساعت هفت شروع می‌شود.',
    's.shift.2': 'تفریح چه وقت است؟',
    's.shift.3': 'ببخشید، ناوقت کردم.',
    's.sick.1': 'من امروز مریض هستم.',
    's.sick.2': 'کمرم درد می‌کند.',
    's.sick.3': 'به داکتر زنگ می‌زنم.',
    'c.hello.q': 'شب خوش!',
    'c.hello.a': 'تا فردا!',
    'c.people.q': 'نامت چیست؟',
    'c.people.a': 'نام من سارا است.',
    'l.arrive': 'روز اول: پیدا کردن راه',
    'w.ingang': 'دروازهٔ ورود',
    'w.receptie': 'پذیرش (ریسپشن)',
    'w.kantine': 'طعام‌خانه (کانتین)',
    'w.kleedkamer': 'اتاق تبدیل لباس',
    'w.buddy': 'همراه (همکاری که در شروع به شما کمک می‌کند)',
    'w.vinden': 'پیدا کردن',
    's.arrive.1': 'باید پیش کی خود را معرفی کنم؟',
    's.arrive.2': 'اتاق تبدیل لباس را پیدا کرده نمی‌توانم.',
    's.arrive.3': 'امروز همراه من کیست؟',
    'c.arrive.q': 'صبح بخیر، برای چه کار آمده‌اید؟',
    'c.arrive.a': 'من نو هستم. امروز شروع می‌کنم.',
    'c.understand.q': 'فهمیدی؟',
    'c.understand.a': 'نی، لطفاً یک بار دیگر.',
    'c.gear.q': 'کلاه ایمنی‌ات را داری؟',
    'c.gear.a': 'بلی، سرم است.',
    'c.danger.q': 'حادثه شده؟',
    'c.danger.a': 'بلی، به ۱۱۲ زنگ بزن!',
    'c.alarm.q': 'همه بیرون هستند؟', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'نخیر، همکارم هنوز نیامده.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'چه شده است؟',
    'c.accident.a': 'افتاده است. خون‌ریزی دارد.',
    'l.notyet': 'این را هنوز یاد نگرفته‌ام',
    'w.nogniet': 'هنوز نه',
    'w.mogen': 'اجازه داشتن',
    'w.proberen': 'کوشش کردن، امتحان کردن',
    'w.voordoen': 'عملاً نشان دادن (اول خودش انجام می‌دهد)',
    'w.gevaarlijk': 'خطرناک',
    'w.uitleg': 'توضیح',
    's.notyet.1': 'این را هنوز یاد نگرفته‌ام.',
    's.notyet.2': 'هنوز توضیحی نگرفته‌ام.',
    's.notyet.3': 'آیا اجازه دارم این کار را حالا تنها انجام بدهم؟',
    'c.notyet.q': 'امتحانش کنید، آسان است.',
    'c.notyet.a': 'می‌توانید اول برایم نشان بدهید که چطور انجام می‌شود؟', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.things.q': 'این قطی کجا برود؟',
    'c.things.a': 'بالای پالت.',
    'c.directions.q': 'چپ یا راست؟',
    'c.directions.a': 'راست، پهلوی رف.',
    'c.shift.q': 'نوبت کاری تو چه وقت شروع می‌شود؟',
    'c.shift.a': 'فردا ساعت هفت.',
    'c.sick.q': 'مریض هستی؟',
    'c.sick.a': 'بلی، امروز خانه می‌مانم.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'به 112 زنگ بزن!',
    'p.hurt': 'من زخمی شده‌ام.',
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "جمع کردن فرمایش‌ها", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "جنس (یک محصول)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "خانهٔ رف (یک جای در رف)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "ستیکر، لیبل", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "جمع کردن، برداشتن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "نبودن، کم بودن (آنجا نیست)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "موقعیت (کود جای، مثل A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "جنس‌های این فرمایش را جمع می‌کنم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "این جنس نیست. خانهٔ رف خالی است.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "ستیکر باید سر قطی باشد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "کدام موقعیت است؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "راهروی سه، خانهٔ دوازده.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "بار کردن و خالی کردن بار", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "لاری (موتر باربری کلان)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "دریور", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "خالی کردن بار (چیزها را از لاری کشیدن)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "کراچی پالت (کراچی دستی که پالت را بلند می‌کند)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "پلاستیک پیچ (پلاستیک نازک دور پالت)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "بارنامه (کاغذی که می‌گوید در لاری چه است)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "لاری پیش دروازهٔ چهار است.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "اول این پالت‌ها را خالی می‌کنیم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "دریور منتظر بارنامه است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "این پالت آماده است؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "نی، هنوز باید دور آن پلاستیک پیچانده شود.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "این را چطور انجام بدهم؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "چطور", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "همین‌طور، این رقم", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "مشکل", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "آسان", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "دانستن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "درست است", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "این را چطور باید انجام بدهم؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "این برای من مشکل است.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "این‌طور درست انجام می‌دهم؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "می‌دانی این چطور انجام می‌شود؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "نی، این را هنوز نمی‌دانم.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "می‌توانم یک چیز بپرسم؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "پرسیدن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "کی", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "یک لحظه", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "وقت", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "مزاحم شدن (مزاحم کسی که مصروف است)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "شک داشتن (مطمئن نیستید)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "می‌توانم یک چیز بپرسم؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "ببخشید که مزاحم می‌شوم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "کی می‌تواند به من کمک کند؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "سوال داری؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "بلی. یک لحظه وقت داری؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "کجاست؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "اینجا", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "آنجا", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "گم (پیدا کرده نمی‌توانید)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "دروازهٔ خروج", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "نشان دادن (نشان بدهید که کجاست)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "پهلوی", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "راه را گم کرده‌ام.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "دروازهٔ خروج کجاست؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "تشناب آنجاست، پهلوی طعام‌خانه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "پیدا کرده می‌توانی؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "نی. نشان داده می‌توانی؟", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "زخم‌های خورد و سوختگی", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "زخم", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "بنداژ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "سرد کردن (با آب سرد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "بریدگی (زخم خورد از چاقو یا چیز تیز)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "بیهوش شدن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "شاور چشم (آب برای شستن چشم‌ها)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "سوختگی را با آب سرد کنید.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "یک بریدگی خورد است. روی زخم فشار بدهید.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "شاور چشم کجا است؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "همکارم نزدیک است بیهوش شود.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "بگذارید کمی دراز بکشد. من کمک می‌آورم.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "زنگ زدن به ۱۱۲", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "خدمات عاجل (امبولانس، اطفائیه، پولیس)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "نام سرک", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "نمبر خانه", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "به هوش (وقتی با او گپ می‌زنید واکنش نشان می‌دهد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "انتظار کشیدن و پذیرایی کردن (از کسی کنار دروازه)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "پشت خط ماندن (تیلفون را قطع نمی‌کنید)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "به ۱۱۲ زنگ می‌زنم. به امبولانس ضرورت دارم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "نام سرک و نمبر خانه چیست؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "کنار دروازهٔ ورود منتظر امبولانس می‌مانم.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "وقتی با او گپ می‌زنید واکنش نشان می‌دهد؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "نی. واکنش نشان نمی‌دهد.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "تقسیم اوقات کار شما", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "تقسیم اوقات هفته‌وار (کی در این هفته چه وقت کار می‌کند)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "اپ تقسیم اوقات (نوبت‌های کاری شما در تیلفون)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "حاضر به کار (در آن وقت کار کرده می‌توانید)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "تغییر", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "جای کسی کار کردن (برای کسی که نیست کار کردن)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "روز رخصتی", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "تقسیم اوقات نو در اپ است.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "روز شنبه وقت دارید؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "فردا جای سارا کار کرده می‌توانید؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "در تقسیم اوقات کار شما یک تغییر است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "خوب. کدام روز باید کار کنم؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "ساعت‌ها و وقت تفریح", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "وقت نان چاشت", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "وقت استراحت (وقت آزاد بین دو نوبت کاری)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "روز کاری", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "لست ساعت‌ها (جایی که ساعت‌های کار خود را می‌نویسید)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "زودتر رفتن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "پشت سر هم (یکی بعد از دیگری)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "ساعت‌های خود را در لست ساعت‌ها می‌نویسم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "امروز یک ساعت زودتر رفته می‌توانم؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "شش روز پشت سر هم کار کرده‌ام.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "وقت نان چاشت شما چه وقت است؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "ساعت دوازده، نیم ساعت.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "هفته‌های اول شما", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "گشت معرفی (کسی ساختمان را به شما نشان می‌دهد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "رهنما (همکاری که در هفته‌های اول به شما کمک می‌کند)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "کتابچهٔ یادداشت", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "همراه یک همکار رفتن (و دیدن که چطور کار می‌کند)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "به یاد نگه داشتن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "مستقل (بدون کمک)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "آیا یک بار دیگر نشان می‌دهید؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "امروز همراه سارا می‌روم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "آن را در کتابچهٔ یادداشت خود می‌نویسم.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "آیا همه چیز گشت معرفی یاد تان است؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "تقریباً همه چیز. طعام‌خانه کجا بود؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "جمع‌آوری فرمایش و ریچ‌تراک", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "جمع‌کنندهٔ فرمایش (کارگری که فرمایش‌ها را جمع می‌کند؛ همچنین ماشین کوچکی که روی آن می‌ایستید تا از بالا جنس بگیرید)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "ریچ‌تراک (یک فورک‌لیفت برای رف‌های بسیار بلند؛ شاخ‌های آن به پیش می‌روند)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "لست جمع‌آوری (لست جنس‌هایی که باید جمع کنید)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "سکن کردن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "پیاده (کسی که پیاده می‌رود)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "گرم شدن (در یک جای گرم، بعد از کار در سردی)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "هر جنس لست جمع‌آوری را سکن می‌کنم.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "پیاده‌ها روی راه پیاده می‌روند.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "در اتاق انجماد لباس گرم می‌پوشم.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "آیا می‌توانید یک لحظه با ریچ‌تراک کار کنید؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "نی، اجازه ندارم. برای آن آموزش ندیده‌ام.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
