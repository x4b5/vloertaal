import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'ar',
  name: 'Arabic',
  nativeName: 'العربية',
  dir: 'rtl',
  reviewed: false,
  ui: {
    theme: 'المظهر',
    themeAuto: 'تلقائي',
    themeSand: 'رمل', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'ميناء', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'سترة العمل', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'داكن',
    voice: 'الصوت الهولندي',
    voiceAuto: 'تلقائي',
    voiceHint: { m: 'اضغط 🔊 للاستماع. أصوات Vloertaal تبدو نفسها على كل هاتف، أما الأصوات الأخرى فتأتي من هاتفك.', f: 'اضغطي 🔊 للاستماع. أصوات Vloertaal تبدو نفسها على كل هاتف، أما الأصوات الأخرى فتأتي من هاتفك.' },
    voiceNone: 'لا يوجد صوت هولندي على هذا الجهاز. يمكنك إضافته من إعدادات الهاتف (تحويل النص إلى كلام).',
    appTagline: 'الهولندية لمكان العمل',
    chooseLanguage: { m: 'اختر لغة المساعدة', f: 'اختاري لغة المساعدة', x: 'اختيار لغة المساعدة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    englishOnly: 'الإنجليزية فقط',
    beta: 'لم تتمّ مراجعة الترجمة بعد', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { zero: 'يوم على التوالي', one: 'يوم على التوالي', two: 'يومان على التوالي', few: 'أيام على التوالي', many: 'يوماً على التوالي', other: 'يوم على التوالي' },
    streakStarted: { m: 'بدأت سلسلة أيامك المتتالية! عد غداً.', f: 'بدأت سلسلة أيامك المتتالية! عودي غداً.', x: 'بدأت سلسلة أيامك المتتالية! إلى اللقاء غداً.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    streakGrew: { zero: { m: '{n} يوم على التوالي! واصل هكذا.', f: '{n} يوم على التوالي! واصلي هكذا.', x: '{n} يوم على التوالي! إلى الأمام.' }, one: { m: '{n} يوم على التوالي! واصل هكذا.', f: '{n} يوم على التوالي! واصلي هكذا.', x: '{n} يوم على التوالي! إلى الأمام.' }, two: { m: 'يومان على التوالي! واصل هكذا.', f: 'يومان على التوالي! واصلي هكذا.', x: 'يومان على التوالي! إلى الأمام.' }, few: { m: '{n} أيام على التوالي! واصل هكذا.', f: '{n} أيام على التوالي! واصلي هكذا.', x: '{n} أيام على التوالي! إلى الأمام.' }, many: { m: '{n} يوماً على التوالي! واصل هكذا.', f: '{n} يوماً على التوالي! واصلي هكذا.', x: '{n} يوماً على التوالي! إلى الأمام.' }, other: { m: '{n} يوم على التوالي! واصل هكذا.', f: '{n} يوم على التوالي! واصلي هكذا.', x: '{n} يوم على التوالي! إلى الأمام.' } }, // x: nieuw, nalezen // nagelezen AI 28 nov
    start: { m: 'ابدأ', f: 'ابدئي', x: 'بدء' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    practice: { m: 'تدرّب مرة أخرى', f: 'تدرّبي مرة أخرى', x: 'إعادة التدريب' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    locked: { m: 'أكمل الدرس السابق أولاً', f: 'أكملي الدرس السابق أولاً', x: 'يجب إكمال الدرس السابق أولاً' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    newWord: 'كلمة جديدة',
    tapToHear: { m: 'اضغط للاستماع', f: 'اضغطي للاستماع' },
    sayItAloud: { m: 'قلها بصوت عالٍ.', f: 'قوليها بصوت عالٍ.', x: 'النطق بها بصوت عالٍ.' }, // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: { m: 'قلها بصوت خافت، أو في ذهنك.', f: 'قوليها بصوت خافت، أو في ذهنكِ.', x: 'النطق بها بصوت خافت، أو في الذهن.' }, // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'ما معنى هذا؟',
    snapQuestion: { m: 'هل فهمت؟', f: 'هل فهمتِ؟', x: 'هل الأمر مفهوم؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'نعم، حسناً.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: { m: 'جيد أنك تسأل!', f: 'جيد أنكِ تسألين!', x: 'السؤال فكرة جيدة!' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: { m: 'فهمتَ جيداً!', f: 'فهمتِ جيداً!', x: 'فهم صحيح!' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: { m: 'أرأيت؟ كان السؤال أفضل.', f: 'أرأيتِ؟ كان السؤال أفضل.', x: 'كان السؤال أفضل.' }, // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'أيٌّ منها هو «{word}»؟',
    mixLesson: 'مراجعة مختلطة',
    whatDoYouHear: { m: 'ماذا تسمع؟', f: 'ماذا تسمعين؟' },
    buildSentence: { m: 'كوّن هذه الجملة بالهولندية', f: 'كوّني هذه الجملة بالهولندية' },
    typeWhatYouHear: { m: 'اكتب ما تسمعه', f: 'اكتبي ما تسمعينه' },
    check: { m: 'تحقّق', f: 'تحقّقي', x: 'التحقّق' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    continue: 'متابعة',
    correct: 'عمل رائع!',
    almost: { m: 'صحيح، لكن انتبه إلى الإملاء', f: 'صحيح، لكن انتبهي إلى الإملاء' },
    incorrect: 'ليس تماماً',
    correctAnswer: 'الإجابة الصحيحة',
    rightAnswerIs: 'الإجابة الصحيحة هي:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'أفضل إجابة هي:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'إجابتك',
    inARow: '{n} على التوالي',
    cantListen: 'لا أستطيع الاستماع الآن',
    learnWriting: 'أريد أن أتعلّم الكتابة أيضاً',
    learnWritingHint: { m: 'تشغيل: اكتب الكلمات التي تسمعها بالحروف. إيقاف: اختر الكلمة المكتوبة التي تسمعها.', f: 'تشغيل: اكتبي الكلمات التي تسمعينها بالحروف. إيقاف: اختاري الكلمة المكتوبة التي تسمعينها.' },
    tagRepeat: 'مرة أخرى',
    readAloud: { m: 'اقرأ بصوت عالٍ', f: 'اقرئي بصوت عالٍ' },
    lessonComplete: 'انتهى الدرس!',
    phrasebook: 'عبارات الطوارئ',
    phrasebookHint: { m: 'اضغط على عبارة لتسمعها. يمكنك أيضاً أن تُري شاشتك لزميلك.', f: 'اضغطي على عبارة لتسمعيها. يمكنك أيضاً أن تُري شاشتك لزميلك.' },
    whoToCall: 'مشاكل في العمل؟ من يمكنه المساعدة',
    who112: 'حالة طوارئ: خطر على الحياة أو حريق أو جريمة تحدث الآن.',
    whoLegal: 'استشارة مجانية حول العقد أو الأجر أو الفصل من العمل.',
    whoInspection: 'للإبلاغ عن عمل غير آمن أو أجر قليل جداً أو استغلال. ممكن دون ذكر الاسم.',
    whoFairwork: 'عند الاستغلال في العمل، أو الشك في ذلك.',
    who113: 'عند التفكير في إنهاء الحياة، أو القلق على شخص آخر. مجاني، ليلاً ونهاراً.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'عنف أو إساءة في البيت، لك أو لشخص آخر. مجاني، ويمكن دون ذكر الاسم.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'الإعدادات',
    helpLanguage: 'لغة المساعدة',
    resetProgress: 'إعادة ضبط تقدّمي',
    resetConfirm: { m: 'هل تريد حذف كل التقدّم على هذا الجهاز؟', f: 'هل تريدين حذف كل التقدّم على هذا الجهاز؟', x: 'حذف كل التقدّم على هذا الجهاز؟' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    audioUnavailable: 'الصوت غير متوفر على هذا الجهاز.',
    slow: 'ببطء',
    completeChat: { m: 'أكمل المحادثة', f: 'أكملي المحادثة' },
    meaning: 'المعنى',
    navRoute: 'الدروس',
    navWords: 'مساعدة',
    rightFirstTime: 'صحيح من أول مرة',
    newWords: 'كلمات جديدة',
    wordsLearnedN: { zero: 'تعلّمت {n} كلمة', one: 'تعلّمت {n} كلمة', two: 'تعلّمت كلمتين', few: 'تعلّمت {n} كلمات', many: 'تعلّمت {n} كلمة', other: 'تعلّمت {n} كلمة' },
    practiseMistakes: { m: 'تدرّب على الأخطاء · بقي {n}', f: 'تدرّبي على الأخطاء · بقي {n}', x: 'التدرّب على الأخطاء · بقي {n}' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    quitHint: 'إجاباتك في هذا الدرس لن تُحفظ.',
    keepGoing: { m: 'استمر', f: 'استمري', x: 'متابعة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    stopLesson: { m: 'أوقف الدرس', f: 'أوقفي الدرس', x: 'إيقاف الدرس' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fullVersion: 'النسخة الكاملة',
    unlockFull: { m: 'افتح النسخة الكاملة', f: 'افتحي النسخة الكاملة', x: 'فتح النسخة الكاملة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    unlockHint: { m: 'بالرمز تُفتح كل الدروس. الرمز مجاني. ليس لديك رمز بعد؟ اسأل معلمك أو مرشدك، أو راسلنا:', f: 'بالرمز تُفتح كل الدروس. الرمز مجاني. ليس لديكِ رمز بعد؟ اسألي معلمكِ أو مرشدكِ، أو راسلينا:' },
    codeNotFull: { m: 'هذا الرمز لا يفتح النسخة الكاملة. اطلب رمزاً جديداً.', f: 'هذا الرمز لا يفتح النسخة الكاملة. اطلبي رمزاً جديداً.', x: 'هذا الرمز لا يفتح النسخة الكاملة. يُرجى طلب رمز جديد.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    password: 'الرمز',
    enterPassword: { m: 'أدخل الرمز', f: 'أدخلي الرمز', x: 'إدخال الرمز' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    wrongPassword: { m: 'الرمز غير صحيح. حاول مرة أخرى.', f: 'الرمز غير صحيح. حاولي مرة أخرى.', x: 'الرمز غير صحيح. يُرجى المحاولة مرة أخرى.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    unlock: { m: 'افتح', f: 'افتحي', x: 'فتح' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    sector: 'عملك',
    chooseSector: { m: 'أين تعمل؟', f: 'أين تعملين؟', x: 'مجال عملك' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: { m: 'في أي بلد تعمل؟', f: 'في أي بلد تعملين؟', x: 'بلد العمل' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    countryHint: { m: 'ستحصل على كلمات ونصائح هذا البلد.', f: 'ستحصلين على كلمات ونصائح هذا البلد.', x: 'اختيار بلد العمل يعطي كلمات ونصائح هذا البلد.' }, // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'تقدمك في التعلم موجود على هذا الهاتف فقط.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: { m: 'استخدم هذا الهاتف دائماً.', f: 'استخدمي هذا الهاتف دائماً.', x: 'يُفضَّل استخدام هذا الهاتف دائماً.' }, // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'هولندا',
    countryBe: 'بلجيكا (فلاندرز)',
    tipsNote: 'هذه النصائح عن العمل في هولندا. معلومات عامة، وليست استشارة قانونية.',
    sectorHint: 'دروس عملك تأتي مبكراً. يمكنك تغيير هذا لاحقاً في الإعدادات.',
    otherSectors: 'قطاعات أخرى',
    reviewToday: 'مراجعة اليوم',
    reviewTodayN: 'كلمات للتمرين مرة أخرى: {n} · بضع دقائق',
    notSureYet: { m: 'لست متأكداً بعد', f: 'لست متأكدة بعد', x: 'لا أعرف بعد' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    sectorLogistics: 'الخدمات اللوجستية',
    sectorConstruction: 'البناء',
    sectorProduction: 'الإنتاج',
    sectorCare: 'الرعاية',
    sectorHospitality: 'المطاعم والفنادق',
    sectorRetail: 'المتاجر والسوبرماركت', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'التنظيف',
    sectorHorticulture: 'البستنة', // nagelezen (2e lezing)
    sectorTechnical: 'الأعمال التقنية', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'ورشة السيارات', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'الصوت',
    soundOn: 'الصوت يعمل',
    withoutSound: 'بدون صوت',
    quietHint: { m: 'بدون صوت، لا توجد أسئلة استماع في الدروس ولا يُشغَّل شيء تلقائيًا. اضغط 🔊 لتسمع كلمة، مثلًا بسماعات الأذن.', f: 'بدون صوت، لا توجد أسئلة استماع في الدروس ولا يُشغَّل شيء تلقائيًا. اضغطي 🔊 لتسمعي كلمة، مثلًا بسماعات الأذن.' },
    soundOffToast: 'بدون صوت. يمكنك تشغيل الصوت في الإعدادات.',
    noInternetSound: 'لا يوجد إنترنت: الصوت لا يعمل الآن.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'المتبقّي لك اليوم',
    streakStopped: { zero: { m: 'توقفت سلسلتك عند {n} يوم. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} يوم. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} يوم. اليوم بداية جديدة.' }, one: { m: 'توقفت سلسلتك عند {n} يوم. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} يوم. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} يوم. اليوم بداية جديدة.' }, two: { m: 'توقفت سلسلتك عند يومين. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند يومين. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند يومين. اليوم بداية جديدة.' }, few: { m: 'توقفت سلسلتك عند {n} أيام. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} أيام. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} أيام. اليوم بداية جديدة.' }, many: { m: 'توقفت سلسلتك عند {n} يوماً. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} يوماً. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} يوماً. اليوم بداية جديدة.' }, other: { m: 'توقفت سلسلتك عند {n} يوم. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} يوم. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} يوم. اليوم بداية جديدة.' } }, // x: nieuw, nalezen // nagelezen AI 28 nov
    recordN: { zero: 'أفضل نتيجة لك: {n} يوم', one: 'أفضل نتيجة لك: {n} يوم', two: 'أفضل نتيجة لك: يومان', few: 'أفضل نتيجة لك: {n} أيام', many: 'أفضل نتيجة لك: {n} يوماً', other: 'أفضل نتيجة لك: {n} يوم' },
    workWeek: 'أسبوع عملك',
    freeDaysN: 'أيام الراحة: {n}. إذا فاتك يوم واحد، تستمر سلسلتك.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    restDay: 'يوم راحة', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    tier3: '3 أيام متتالية',
    tier7: 'أسبوع متواصل', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    tier14: 'أسبوعان متتاليان',
    tier30: 'شهر متواصل', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    reviewDone: 'انتهيت لهذا اليوم',
    tomorrowN: { zero: 'غداً: {n} كلمة', one: 'غداً: {n} كلمة', two: 'غداً: كلمتان', few: 'غداً: {n} كلمات', many: 'غداً: {n} كلمة', other: 'غداً: {n} كلمة' },
    firstWordsTomorrow: 'غداً تعود كلماتك الأولى',
    extraRound: 'جولة إضافية',
    reviewFirstHint: { m: 'راجِع أولاً. هكذا تتذكّر أكثر.', f: 'راجِعي أولاً. هكذا تتذكّرين أكثر.', x: 'المراجعة أولاً. هكذا يبقى في الذاكرة أكثر.' }, // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { zero: 'تحسّن حفظ {n} كلمة', one: 'تحسّن حفظ {n} كلمة', two: 'تحسّن حفظ كلمتين', few: 'تحسّن حفظ {n} كلمات', many: 'تحسّن حفظ {n} كلمة', other: 'تحسّن حفظ {n} كلمة' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    noMistakes: 'بدون أخطاء',
    nextUp: 'التالي',
    installTitle: { m: 'ضع Vloertaal على شاشتك الرئيسية', f: 'ضعي Vloertaal على شاشتك الرئيسية', x: 'Vloertaal على شاشتك الرئيسية' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    installHint: 'عندها يفتح مثل تطبيق، حتى بدون إنترنت.',
    installAdd: { m: 'أضف إلى الشاشة الرئيسية', f: 'أضيفي إلى الشاشة الرئيسية', x: 'إضافة إلى الشاشة الرئيسية' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    iosStep1: { m: 'اضغط على مشاركة', f: 'اضغطي على مشاركة' },
    iosStep2: { m: 'اضغط «إضافة إلى الشاشة الرئيسية»', f: 'اضغطي «إضافة إلى الشاشة الرئيسية»' },
    iosStep3: 'تم!',
    backupTitle: { m: 'احفظ تقدمك', f: 'احفظي تقدمك', x: 'حفظ تقدمك' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupHint: { m: 'تقدمك موجود على هذا الهاتف فقط. احفظه كملف، مثلاً لهاتف جديد.', f: 'تقدمك موجود على هذا الهاتف فقط. احفظيه كملف، مثلاً لهاتف جديد.', x: 'تقدمك موجود على هذا الهاتف فقط. يمكن حفظه كملف، مثلاً لهاتف جديد.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupSave: 'تنزيل',
    backupLoad: 'استرجاع',
    backupBad: 'هذا ليس ملف Vloertaal.',
    backupAsk: { m: 'هل تضيف هذا الملف إلى تقدمك، أم تستبدل تقدمك به؟', f: 'هل تضيفين هذا الملف إلى تقدمك، أم تستبدلين تقدمك به؟', x: 'إضافة هذا الملف إلى تقدمك، أم استبدال تقدمك به؟' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupMerge: { m: 'اجمعهما', f: 'اجمعيهما', x: 'دمج' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupReplace: { m: 'استبدل', f: 'استبدلي', x: 'استبدال' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupBack: 'عاد تقدمك.',
    backupNothingNew: 'لا شيء جديد: هذا كان موجوداً على هاتفك من قبل.',
    cancel: 'إلغاء',
    remindTitle: 'ذكّرني كل يوم',
    remindEvent: 'وقت الهولندية (10 دقائق)',
    remindHint: 'تقويم هاتفك يذكّرك. لا يُرسل إلينا أي شيء.',
    remindBefore: 'قبل العمل',
    remindAfter: 'بعد العمل',
    remindOwn: 'وقت آخر',
    remindAdd: { m: 'أضف إلى تقويمي', f: 'أضيفي إلى تقويمي', x: 'إضافة إلى تقويمي' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindAdded: { m: 'افتح الملف لإضافته إلى تقويمك.', f: 'افتحي الملف لإضافته إلى تقويمك.', x: 'يُرجى فتح الملف لإضافته إلى تقويمك.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindAddedAsk: 'هل أُضيف التذكير؟ عندها يظهر في التقويم.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'حول',
    tagMeaning: 'المعنى',
    tagPick: { m: 'اختر', f: 'اختاري', x: 'اختيار' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tagListen: { m: 'استمع', f: 'استمعي', x: 'استماع' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tagType: { m: 'اكتب', f: 'اكتبي', x: 'كتابة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tagMatch: 'أزواج',
    tagBuild: 'جملة',
    tagChat: 'محادثة',
    tagSituation: 'موقف',
    tagTip: 'نصيحة',
    more: 'المزيد',
    less: 'أقل',
    daysUnit: { zero: 'يوم', one: 'يوم', two: 'يومان', few: 'أيام', many: 'يوماً', other: 'يوم' },
    wordsUnit: { zero: 'كلمة', one: 'كلمة', two: 'كلمتان', few: 'كلمات', many: 'كلمة', other: 'كلمة' },
    countTitle: 'إحصاء مجهول الهوية',
    countHint: 'يعدّ التطبيق كم مرة تُنجَز الدروس وكم تستغرق تقريباً. وهل يحدث خطأ في التطبيق. بدون اسم، بدون حساب، بدون تتبّع.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'شهادة',
    myCertificates: 'شهاداتي',
    certsEmpty: { m: 'أنهِ كل دروس وحدة. ثم تحصل على شهادة.', f: 'أنهي كل دروس وحدة. ثم تحصلين على شهادة.' },
    certEarned: 'حصلت على شهادة!',
    certEarnedHint: 'أنهيت كل دروس هذه الوحدة.',
    certView: { m: 'اعرض', f: 'اعرضي', x: 'عرض' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certLater: 'لاحقًا',
    certPrint: { m: 'اطبع أو احفظ كملف PDF', f: 'اطبعي أو احفظي كملف PDF', x: 'طباعة أو حفظ كملف PDF' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certSaved: 'تم حفظ الصورة.',
    certNameHint: 'يبقى على هذا الهاتف فقط. يمكنك تركه فارغًا.',
    certChangeName: { m: 'غيّر الاسم', f: 'غيّري الاسم', x: 'تغيير الاسم' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certPractice: 'شهادة تدريب، وليست دبلومًا رسميًا',
    resumeLesson: { m: 'تابع الدرس', f: 'تابعي الدرس', x: 'متابعة الدرس' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    restartLesson: { m: 'ابدأ من جديد', f: 'ابدئي من جديد', x: 'البدء من جديد' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    quitKept: 'تقدّمك محفوظ. يمكنك المتابعة لاحقًا.',
    bestAnswer: 'أفضل إجابة',
    inReview: 'قيد المراجعة',
    today: 'اليوم',
    playAgain: { m: 'استمع مرة أخرى', f: 'استمعي مرة أخرى', x: 'إعادة الاستماع' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    daysUnitOne: 'يوم',
    wordsUnitOne: 'كلمة',
    wordsLearnedOne: 'تعلّمت {n} كلمة',
    tomorrowOne: 'غداً: {n} كلمة',
    wordsStrongerOne: 'تحسّن حفظ {n} كلمة', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    recordOne: 'أفضل نتيجة لك: {n} يوم',
    streakStoppedOne: { m: 'توقفت سلسلتك عند {n} يوم. ابدأ من جديد اليوم.', f: 'توقفت سلسلتك عند {n} يوم. ابدئي من جديد اليوم.', x: 'توقفت سلسلتك عند {n} يوم. اليوم بداية جديدة.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    letterTiles: 'الحروف',
    useKeyboard: 'لوحة المفاتيح',
    skippedN: 'تم تخطي {n}، لا تُحسب',
    stampLater: 'سيعود لاحقاً',
    stampDone: 'انتهى',
    chooseNext: { m: 'اختر موضوعك التالي', f: 'اختاري موضوعك التالي' },
    recommended: 'مُوصى به',
    allTopics: 'كل المواضيع',
    topicsOrder: 'عرض المواضيع',
    privacyLink: 'قراءة بيان الخصوصية (بالهولندية)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    routeTitle: 'ماذا نتعلّم؟', // nieuw, nalezen (een vraag, zonder m/f) // nagelezen AI 28 nov
    routeLearn: 'تعلّم الهولندية للعمل، وكيف يسير العمل هنا', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'أتكلّم الهولندية: قواعد العمل فقط', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'تعلّم الهولندية', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'الانتقال إلى Werkregels؟', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'سيصبح كل شيء باللغة الهولندية. تتوقف لغة المساعدة.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'حتى العودة، تكون المراجعة للقواعد وليس للكلمات.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'يبقى تقدّمك محفوظاً. يمكن العودة من هنا.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'نعم، إلى Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'حسب الأقسام',
    inOrder: 'بالترتيب',
    searchTopics: 'البحث عن موضوع', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'لا يوجد موضوع بهذه الكلمة.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { zero: 'درس', one: 'درس', two: 'درسان', few: 'دروس', many: 'درساً', other: 'درس' },
    lessonsUnitOne: 'درس',
    topicsUnit: { zero: 'موضوع', one: 'موضوع', two: 'موضوعان', few: 'مواضيع', many: 'موضوعاً', other: 'موضوع' },
    topicsUnitOne: 'موضوع',
    allTopicsDone: 'أنهيت كل المواضيع. عمل رائع!',
    // Speaking practice
    tagSpeak: { m: 'تكلّم', f: 'تكلّمي', x: 'نطق' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    speakPrompt: { m: 'استمع، ثم قلها', f: 'استمعي، ثم قوليها' },
    tapToSpeak: { m: 'اضغط وتكلّم', f: 'اضغطي وتكلّمي' },
    stopRecording: { m: 'توقّف', f: 'توقّفي', x: 'إيقاف' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    micPrivacy: "لا أحد غيرك يسمعك. لا يُرسَل أي شيء.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: { m: 'الميكروفون لا يعمل. قلها بصوت عالٍ الآن، ثم تابع.', f: 'الميكروفون لا يعمل. قوليها بصوت عالٍ الآن، ثم تابعي.' },
    cantSpeak: 'لا أستطيع التكلّم الآن',
    soundsSame: 'النطق نفسه',
    sayAgain: { m: 'قلها مرة أخرى', f: 'قوليها مرة أخرى' },
    hearMine: { m: 'استمع إلى نفسك', f: 'استمعي إلى نفسك' }, // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'سابقاً والآن', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'محاولتك الأولى: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: { m: "قلها معاً", f: "قوليها معاً", x: "النطق معاً" }, // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: { m: "قلها في نفس الوقت مع الصوت. لا يُسجَّل أي شيء.", f: "قوليها في نفس الوقت مع الصوت. لا يُسجَّل أي شيء.", x: "النطق في نفس الوقت مع الصوت. لا يُسجَّل أي شيء." }, // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "الآن وحدك", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "الأخطاء جزء من التعلّم. لم يفهموك؟ قلها مرة أخرى.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "متوتر؟ هذا طبيعي. قلها على أي حال.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "ليس من الضروري أن تكون الجملة مثالية. المهم المحاولة.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonTitle: "لماذا تتعلّم الهولندية؟", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "اختر واحدًا أو اثنين.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "تم", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "أن أقوم بعملي جيدًا", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "أطفالي", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "التحدث مع الزملاء", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "أن أنجز أموري بنفسي", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "عمل أفضل", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "أن أشعر أنني في بيتي في هولندا", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'أنا',
    speakingPractice: 'تمرين التكلّم',
    speakingHint: { m: "قل الكلمات بصوت عالٍ وقارن. لا أحد غيرك يسمعك: لا يُرسَل أي شيء. يبقى أول تسجيل لك لكل جملة على هاتفك، لتقارن لاحقاً.", f: "قولي الكلمات بصوت عالٍ وقارني. لا أحد غيرك يسمعك: لا يُرسَل أي شيء. يبقى أول تسجيل لكِ لكل جملة على هاتفك، لتقارني لاحقاً.", x: "نطق الكلمات بصوت عالٍ ثم المقارنة. لا أحد غيرك يسمعك: لا يُرسَل أي شيء. يبقى أول تسجيل لكل جملة على الهاتف، للمقارنة لاحقاً." }, // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'جارٍ الحفظ…',
    savedOffline: 'محفوظ للاستخدام بدون إنترنت',
    offlineNoSpace: { m: 'لا توجد مساحة كافية على هذا الهاتف. احذف موضوعًا محفوظًا أو أفرغ بعض المساحة.', f: 'لا توجد مساحة كافية على هذا الهاتف. احذفي موضوعًا محفوظًا أو أفرغي بعض المساحة.', x: 'لا توجد مساحة كافية على هذا الهاتف. يُرجى حذف موضوع محفوظ أو إفراغ بعض المساحة.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    offlineFailed: { m: 'لم ينجح الحفظ. تحقّق من الإنترنت وحاول مرة أخرى.', f: 'لم ينجح الحفظ. تحقّقي من الإنترنت وحاولي مرة أخرى.', x: 'لم ينجح الحفظ. يُرجى التحقّق من الإنترنت والمحاولة مرة أخرى.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    pocketCard: 'بطاقة الجيب',
    pocketSave: { m: 'احفظ كصورة', f: 'احفظي كصورة', x: 'حفظ كصورة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    textSize: 'حجم النص',
    textNormal: 'عادي',
    textLarge: 'كبير',
    textXl: 'كبير جدًا',
    showEnglish: { m: 'أظهِر الإنجليزية أيضاً', f: 'أظهِري الإنجليزية أيضاً', x: 'إظهار الإنجليزية أيضاً' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    genderTitle: 'امرأة أم رجل؟',
    genderHint: 'لكي تخاطبك لغتك بالشكل الصحيح.',
    genderWoman: 'امرأة',
    genderMan: 'رجل',
    genderNone: 'أفضّل ألّا أقول',
    langGuessYes: 'نعم',
    langGuessOther: 'لغة أخرى',
    settingsLangMe: 'اللغة وتفضيلاتي',
    settingsLessons: 'الدروس',
    settingsPhone: 'هذا الهاتف',
    settingOn: 'تشغيل',
    settingOff: 'إيقاف',
    sectorGroupMake: 'الصنع والنقل',
    sectorGroupCare: "الرعاية والأطفال", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'المتاجر والمطاعم', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'البناء والتقنية', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'صوت امرأة',
    voiceMan: 'صوت رجل',
    writingPick: 'اختيار الكلمة',
    settingWriting: 'الكتابة',
    settingKeepLessons: 'حفظ الدروس على هذا الهاتف',
    settingKeepLessonsHint: 'يُحفَظ الموضوع الحالي على هذا الهاتف، فيعمل أيضًا بدون إنترنت. وتُحذَف المواضيع المنتهية من الهاتف.',
    otherTopicLink: 'موضوع آخر',
    remindAsk: 'هل نذكّرك كل يوم؟',
    remindYes: 'نعم، بعد العمل',
    remindNo: 'لا، شكرًا',
    remindPickTime: 'متى نذكّرك؟',
    certSaveShare: { m: 'احفظ أو شارك', f: 'احفظي أو شاركي', x: 'حفظ أو مشاركة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    pauseTitle: 'إيقاف مؤقت',
    back: 'رجوع',
    quitLesson: { m: 'اخرج من الدرس', f: 'اخرجي من الدرس', x: 'الخروج من الدرس' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    playAudio: { m: 'استمع', f: 'استمعي', x: 'استماع' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    scrollDown: { m: 'مرّر للأسفل', f: 'مرّري للأسفل', x: 'التمرير للأسفل' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    lessonProgress: 'تقدّم الدرس',
    mainMenu: 'القائمة الرئيسية',
    spaceKey: 'مسافة',
    langNotOnPhone: { m: 'هذه اللغة ليست على هاتفك بعد. اتصل بالإنترنت لتغيير اللغة.', f: 'هذه اللغة ليست على هاتفك بعد. اتصلي بالإنترنت لتغيير اللغة.', x: 'هذه اللغة ليست على هاتفك بعد. يلزم الاتصال بالإنترنت لتغيير اللغة.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'اختر الوقت بنفسك', f: 'اختاري الوقت بنفسك', x: 'وقت من اختيارك' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    gateWho: 'معلّمك أو مرشدك أو صاحب العمل يعطيك الرمز.',
    gateTrust: 'بدون حساب. بدون اسم. كل شيء يبقى على هذا الهاتف.',
    codeAccepted: 'تم قبول الرمز',
    startFree: { m: 'ليس لديك رمز؟ ابدأ بالدروس الأولى', f: 'ليس لديكِ رمز؟ ابدئي بالدروس الأولى' },
    bramHello: { m: 'سعيد برؤيتكَ.', f: 'سعيد برؤيتكِ.', x: 'سعيد برؤيتك.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramBack: { m: 'أهلاً بعودتكَ. لنكمل.', f: 'أهلاً بعودتكِ. لنكمل.', x: 'أهلاً بعودتك. لنكمل.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramRested: 'أمس كان يوم راحتك. سلسلتك مستمرة.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    bramDueN: 'كلمات للمراجعة اليوم: {n}',
    bramDueOne: 'كلمة للمراجعة اليوم: {n}',
    bramDayN: 'اليوم {n} على التوالي.',
    bramDone: { m: 'انتهيت لهذا اليوم. أراك غداً.', f: 'انتهيتِ لهذا اليوم. أراكِ غداً.', x: 'انتهى درس اليوم. أراك غداً.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramPerfect: { m: 'جيد جداً. أنت تعرف هذه الكلمات.', f: 'جيد جداً. أنتِ تعرفين هذه الكلمات.', x: 'جيد جداً. هذه الكلمات صارت معروفة لديك.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramGood: 'عمل جيد. خطوة بخطوة.',
    bramHard: { m: 'جيد أنك تدرّبت. الكلمات الصعبة ستعود.', f: 'جيد أنكِ تدرّبتِ. الكلمات الصعبة ستعود.', x: 'التدريب مفيد. الكلمات الصعبة ستعود.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramReview: 'جيد. التكرار يساعد على التذكّر.',
    bramIntro: { m: 'أنا Bram، زميلكَ في العمل.', f: 'أنا Bram، زميلكِ في العمل.', x: 'أنا Bram، زميلك في العمل.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramIntroHello: 'مرحبًا، أنا Bram.',
    showDutch: 'عرض بالهولندية',
    showAnswers: 'عرض الإجابات', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'آخر تحديث: {date}',
    /* G4 b3 */
    buildListen: { m: 'استمع وكوّن الجملة', f: 'استمعي وكوّني الجملة' },
    chatWhichQuestion: 'أيّ سؤال يناسب هذا الجواب؟',
    reviewWaiting: 'كلمات أخرى تنتظر: {n}. ستعود في الأيام القادمة.',
    factTitle: { m: 'هل تعلم؟', f: 'هل تعلمين؟', x: 'معلومة مفيدة' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fact3: 'لست وحدك: أكثر من 3 ملايين بالغ في هولندا يجدون القراءة أو الحساب أو الكمبيوتر صعباً. التمرين يساعد.',
    fact7: 'من بين المهاجرين الذين يتكلمون الهولندية جيداً جداً، 69 من كل 100 لديهم عمل بأجر.',
    fact14: 'في مكتبات كثيرة يوجد Taalhuis (بيت اللغة): مساعدة مجانية لمواصلة تعلّم الهولندية.',
    fact30: { m: 'قليل من التمرين كل يوم أفضل من كثير من وقت لآخر. وأنت تتدرّب منذ 30 يوماً!', f: 'قليل من التمرين كل يوم أفضل من كثير من وقت لآخر. وأنتِ تتدرّبين منذ 30 يوماً!', x: 'قليل من التمرين كل يوم أفضل من كثير من وقت لآخر. و30 يوماً من التدريب حتى الآن!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: { zero: 'في هذا الملف {n} درس.', one: 'في هذا الملف {n} درس.', two: 'في هذا الملف درسان.', few: 'في هذا الملف {n} دروس.', many: 'في هذا الملف {n} درساً.', other: 'في هذا الملف {n} درس.' },
    backupFileOne: 'في هذا الملف {n} درس.',
    backupPhoneN: { zero: 'لديك {n} درس.', one: 'لديك {n} درس.', two: 'لديك درسان.', few: 'لديك {n} دروس.', many: 'لديك {n} درساً.', other: 'لديك {n} درس.' },
    backupPhoneOne: 'لديك {n} درس.',
    backupFewer: { m: '«استبدل» يحذف الدروس غير الموجودة في الملف. «اجمعهما» يحتفظ بكل شيء.', f: '«استبدلي» يحذف الدروس غير الموجودة في الملف. «اجمعيهما» يحتفظ بكل شيء.', x: '«استبدال» يحذف الدروس غير الموجودة في الملف. «دمج» يحتفظ بكل شيء.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupTooBig: 'هذا الملف كبير جداً. ملف Vloertaal أصغر بكثير.',
    backupNewPhone: { m: 'هاتف جديد؟ ستحتاج إلى رمزك هناك أيضاً.', f: 'هاتف جديد؟ ستحتاجين إلى رمزك هناك أيضاً.', x: 'هاتف جديد؟ الرمز مطلوب هناك أيضاً.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindEveryDay: 'تذكيرك: كل يوم الساعة {time}',
    remindStop: { m: 'أوقف التذكير', f: 'أوقفي التذكير', x: 'إيقاف التذكير' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindStopped: { m: 'افتح الملف لإزالة التذكير من تقويمك.', f: 'افتحي الملف لإزالة التذكير من تقويمك.', x: 'يُرجى فتح الملف لإزالة التذكير من تقويمك.' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindStoppedAndroid: { m: 'احذف التذكير بنفسك من تقويم Google.', f: 'احذفي التذكير بنفسك من تقويم Google.' },
    resetKeeps: 'ستُحذف دروسك وكلماتك وأيامك المتتالية وشهاداتك. تبقى لغتك وإعداداتك.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'لم يتم التحميل. هل الإنترنت متصل؟',
    retry: 'إعادة المحاولة',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'تعذّر تشغيل Vloertaal.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: { m: 'احفظ تقدمك أولاً. ثم ابدأ من جديد.', f: 'احفظي تقدمك أولاً. ثم ابدئي من جديد.', x: 'من المهم حفظ التقدم أولاً، ثم البدء من جديد.' }, // nieuw, nalezen // nagelezen AI 28 nov
    startOver: { m: 'ابدأ من جديد', f: 'ابدئي من جديد', x: 'البدء من جديد' }, // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'حدث خطأ ما. تقدّمك محفوظ.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: { m: 'ماذا تعرف بالفعل؟', f: 'ماذا تعرفين بالفعل؟', x: 'ما الذي أعرفه بالفعل؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'حوالي 10 دقائق. لا توجد درجات. إنه لك فقط.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsEndOffer: { m: 'لقد تعلمت الكثير. أعد الاختبار وانظر ماذا تعرف الآن.', f: 'لقد تعلمتِ الكثير. أعيدي الاختبار وانظري ماذا تعرفين الآن.', x: 'تمّ تعلّم الكثير! حان وقت إعادة الاختبار، لرؤية ما صار معروفاً الآن.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsPartListen: 'الاستماع', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'الكلمات', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'الجمل', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: { m: 'استمع. ماذا يعني؟', f: 'استمعي. ماذا يعني؟', x: 'استماع: ماذا يعني؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: { m: 'لا تعرف؟ اضغط على «لا أعرف». لا بأس.', f: 'لا تعرفين؟ اضغطي على «لا أعرف». لا بأس.', x: 'الإجابة غير معروفة؟ يمكن الضغط على «لا أعرف». لا بأس.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: { m: 'يبقى تسجيلك على هذا الهاتف فقط. لاحقاً يمكنك أن تسمع نفسك مرة أخرى.', f: 'يبقى تسجيلكِ على هذا الهاتف فقط. لاحقاً يمكنكِ أن تسمعي نفسكِ مرة أخرى.', x: 'يبقى التسجيل على هذا الهاتف فقط. ويمكن سماعه مرة أخرى لاحقاً.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: { m: 'بداية جيدة! هذا ما تعرفه بالفعل.', f: 'بداية جيدة! هذا ما تعرفينه بالفعل.', x: 'بداية جيدة! هذه هي النتيجة الآن.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: { m: 'أحسنت! انظر ماذا تعرف الآن.', f: 'أحسنتِ! انظري ماذا تعرفين الآن.', x: 'عمل جيد! هذه هي النتيجة الآن.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'أنت سابقاً', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'أنت الآن', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: { m: 'تمرّن قليلاً كل يوم. هكذا تتعلم أكثر فأكثر.', f: 'تمرّني قليلاً كل يوم. هكذا تتعلمين أكثر فأكثر.', x: 'القليل من التمرين كل يوم يعني تعلّماً أكثر فأكثر.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: { m: 'ابدأ الاختبار', f: 'ابدئي الاختبار', x: 'بدء الاختبار' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'لا أعرف', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'أكثر من قبل', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'تقريباً كما في السابق', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsMoreAll: { m: 'كل شيء معاً: تعرف الآن أكثر من قبل.', f: 'كل شيء معاً: تعرفين الآن أكثر من قبل.', x: 'كل شيء معاً: المعرفة الآن أكثر من قبل.' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'كل شيء معاً: تقريباً كما في السابق.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'أولاً 5 أسئلة عنك. لا توجد إجابة صحيحة أو خاطئة.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: { m: 'هل تجرؤ على هذا؟', f: 'هل تجرئين على هذا؟', x: 'هل يمكن فعل هذا بثقة؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: { m: 'أن تقول إنك لا تفهم شيئاً', f: 'أن تقولي إنكِ لا تفهمين شيئاً', x: 'قول «لا أفهم هذا»' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: { m: 'أن تسأل مديرك عن شيء', f: 'أن تسألي مديركِ عن شيء', x: 'سؤال المدير عن شيء' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: { m: 'أن تطلب المساعدة', f: 'أن تطلبي المساعدة', x: 'طلب المساعدة' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: { m: 'أن تقول إن شيئاً ما غير آمن', f: 'أن تقولي إن شيئاً ما غير آمن', x: 'قول إن شيئاً ما غير آمن' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: { m: 'أن تتحدث قليلاً مع زميل في الاستراحة', f: 'أن تتحدثي قليلاً مع زميل في الاستراحة', x: 'الحديث قليلاً مع زميل في الاستراحة' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'ليس بعد', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'قليلاً', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'نعم', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'بعد بضعة أسابيع نسأل مرة أخرى.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'السرعة', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'هادئ', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'عادي', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: { m: 'الهادئ بطيء وواضح. العادي مثل كلام الزملاء. اختر «عادي» إذا كنت تفهم الكثير.', f: 'الهادئ بطيء وواضح. العادي مثل كلام الزملاء. اختاري «عادي» إذا كنتِ تفهمين الكثير.', x: 'الهادئ بطيء وواضح. العادي مثل كلام الزملاء. «عادي» مناسب لمن يفهم الكثير.' }, // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: { m: 'أظهر كيف تسير الأمور', f: 'أظهري كيف تسير الأمور', x: 'عرض سير التعلّم' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: { m: 'هذه البطاقة تُظهر تقدّمك. أرِها لمعلّمك أو مدرّبك أو مديرك. أنت تقرّر.', f: 'هذه البطاقة تُظهر تقدّمكِ. أريها لمعلّمكِ أو مدرّبكِ أو مديركِ. أنتِ تقرّرين.', x: 'هذه البطاقة تُظهر التقدّم في التعلّم. يمكن عرضها على المعلّم أو المدرّب أو المدير. القرار لصاحب البطاقة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: { m: 'يمكنك أيضاً أن تقول «لا».', f: 'يمكنكِ أيضاً أن تقولي «لا».', x: 'يمكن أيضاً قول «لا».' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: { m: 'هاتفك يصنع البطاقة. لا يُرسَل شيء. Vloertaal لا يحفظ شيئاً.', f: 'هاتفكِ يصنع البطاقة. لا يُرسَل شيء. Vloertaal لا يحفظ شيئاً.', x: 'الهاتف يصنع البطاقة. لا يُرسَل شيء. Vloertaal لا يحفظ شيئاً.' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'على البطاقة، بالهولندية:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'المواضيع المنتهية', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'أيام التمرين في آخر 4 أسابيع', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'آخر درس، مع التاريخ', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'رمز: نفس الأرقام باختصار، لملخص المجموعة. بدون اسم.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'استماع الهاتف (تجربة)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: { m: 'بعد أن تتكلم، يقول الهاتف هل فهمك. يحدث هذا على الهاتف نفسه. لا يُرسَل شيء إلينا أو إلى غيرنا.', f: 'بعد أن تتكلمي، يقول الهاتف هل فهمكِ. يحدث هذا على الهاتف نفسه. لا يُرسَل شيء إلينا أو إلى غيرنا.', x: 'بعد الكلام، يقول الهاتف هل فهم الكلام. يحدث هذا على الهاتف نفسه. لا يُرسَل شيء إلينا أو إلى غيرنا.' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: { m: 'يحتاج الهاتف أولاً إلى اللغة الهولندية. التنزيل كبير: استخدم الواي فاي.', f: 'يحتاج الهاتف أولاً إلى اللغة الهولندية. التنزيل كبير: استخدمي الواي فاي.', x: 'يحتاج الهاتف أولاً إلى اللغة الهولندية. التنزيل كبير: الأفضل استخدام الواي فاي.' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'تنزيل الهولندية', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'ليس الآن', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: { m: 'الهولندية في الطريق. حاول مرة أخرى لاحقاً.', f: 'الهولندية في الطريق. حاولي مرة أخرى لاحقاً.', x: 'الهولندية في الطريق. يمكن المحاولة مرة أخرى لاحقاً.' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: { m: 'لم ينجح ذلك. حاول مرة أخرى لاحقاً، مع الواي فاي.', f: 'لم ينجح ذلك. حاولي مرة أخرى لاحقاً، مع الواي فاي.', x: 'لم ينجح ذلك. يمكن المحاولة مرة أخرى لاحقاً، مع الواي فاي.' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'الهاتف يستمع وحده. لا يُرسَل أي شيء.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'الهاتف يستمع…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'فُهِم الكلام', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: { m: 'تقريباً: قل {word} مرة أخرى', f: 'تقريباً: قولي {word} مرة أخرى', x: 'تقريباً: {word} مرة أخرى' }, // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'لم يُفهَم بعد', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'المتابعة على أي حال', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: { m: 'هل تريد أن تتعلم أسرع؟', f: 'هل تريدين أن تتعلمي أسرع؟', x: 'التعلّم بسرعة أكبر؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'شرح أقل في الدروس الجديدة. الهولندية بسرعة عادية.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'نعم', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'لا', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'الدرس التالي أقصر قليلاً.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'التعلّم بسرعة أكبر', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'تشغيل: شرح أقل في الدروس الجديدة، والهولندية بسرعة عادية. إيقاف: كما كان من قبل.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'ما رأيك في Vloertaal؟', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'جيد', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'مقبول', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'ليس جيدًا', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'شكرًا! هذا يساعدنا على تحسين Vloertaal.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'التعلّم بسرعة أكبر: شرح أقل في الدروس الجديدة، والهولندية بسرعة عادية.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'التمرين معاً', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'شخصان، هاتف واحد', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: { m: 'تدرّب مع زميل أو صديق أو معلّم. اقرآ بالتناوب.', f: 'تدرّبي مع زميل أو صديق أو معلّم. اقرآ بالتناوب.', x: 'التمرين مع زميل أو صديق أو معلّم. القراءة بالتناوب.' }, // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'الشخص 1 هو الزميل. الشخص 2 يجيب.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'لا يُسجَّل شيء. لا توجد نتيجة.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'الشخص {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'الجواب', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: { m: 'استمع', f: 'استمعي', x: 'الاستماع' }, // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'التالي', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'الترجمة', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'أحسنتما! بدّلا الأدوار وأعيدا مرة أخرى؟', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'بدّلا الأدوار', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'إنهاء', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'أعرف هذا: اختبار قصير', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: { m: 'أنت تعرف هذا. هل تريد اعتبار هذا الموضوع منتهياً؟', f: 'أنتِ تعرفين هذا. هل تريدين اعتبار هذا الموضوع منتهياً؟', x: 'هذا معروف لك. اعتبار هذا الموضوع منتهياً؟' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkNoCert: 'عندها لا توجد شهادة بعد. الشهادة تأتي بعد الدروس.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: { m: 'الدروس تساعدك في هذا الموضوع.', f: 'الدروس تساعدكِ في هذا الموضوع.', x: 'الدروس مفيدة في هذا الموضوع.' }, // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'اعتباره منتهياً', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkVia: 'عبر الاختبار', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: { m: 'ادرس الدروس رغم ذلك', f: 'ادرسي الدروس رغم ذلك', x: 'القيام بالدروس رغم ذلك' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    shareInvite: 'أتعلّم الهولندية لعملي بتطبيق Vloertaal. إنه مجاني: {link}', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal تطبيق مجاني لتعلّم الهولندية للعمل.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeHow: 'دروس قصيرة على هاتفك، مع شرح بلغتك. بدون حساب.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeOpen: { m: 'افتح الرابط على هاتفك:', f: 'افتحي الرابط على هاتفك:', x: 'يُرجى فتح الرابط على الهاتف:' }, // nieuw, nalezen // nagelezen AI 28 nov
    workTry: { m: 'جرّبها اليوم في عملك', f: 'جرّبيها اليوم في عملك', x: 'للتجربة اليوم في العمل' }, // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'عندما:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: { m: 'قُل حينها:', f: 'قولي حينها:', x: 'يُقال حينها:' }, // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'لزميل في العمل', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: { m: 'اعرضْ هذا على زميل يتكلّم الهولندية. فيه كيف يمكنه أن يساعدكَ على التمرين.', f: 'اعرضي هذا على زميل يتكلّم الهولندية. فيه كيف يمكنه أن يساعدكِ على التمرين.', x: 'يمكن عرض هذا على زميل يتكلّم الهولندية. فيه كيف يمكنه المساعدة في التمرين.' }, // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: { m: 'أرسِلها إلى زميلك', f: 'أرسِليها إلى زميلك', x: 'إرسالها إلى زميل' }, // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'لمن يرافقك في العمل', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'كيف يسير العمل هنا، بلغة هولندية بسيطة. يقرأها الهاتف بصوت عالٍ.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: { m: 'أنت تعرف الآن الكثير من الهولندية. مع كل موضوع يمكنك أيضاً أن تقرأ كيف يسير العمل هنا، بهولندية بسيطة.', f: 'أنتِ تعرفين الآن الكثير من الهولندية. مع كل موضوع يمكنكِ أيضاً أن تقرئي كيف يسير العمل هنا، بهولندية بسيطة.', x: 'هناك الآن معرفة جيدة بالهولندية. مع كل موضوع يمكن أيضاً قراءة كيف يسير العمل هنا، بهولندية بسيطة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'لا شيء: أتكلم الهولندية', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'جمل قيلت في العمل', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'كلمات ما زالت صعبة', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'دروس عن كيف يسير العمل هنا', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'إظهار أسماء المواضيع عن حقوقك', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'الآن من الذاكرة: كيف كانت بالهولندية؟', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: { m: 'كلمات من قبل أسبوعين أو أكثر: ما زلتَ تعرف {n} من {m}.', f: 'كلمات من قبل أسبوعين أو أكثر: ما زلتِ تعرفين {n} من {m}.', x: 'كلمات من قبل أسبوعين أو أكثر: ما زالت {n} من {m} معروفة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'الفعل في المكان الثاني.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'النقاط', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'كل نقاطك', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'الجو', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'هادئ', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'لعبة', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'هادئ: لا شيء يتحرك، ولا احتفالات. لعبة: نقاط وأصوات وحركة كثيرة.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "الخدمة والأمن", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "العمل في الخارج", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "رعاية الأطفال", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "النفايات وإعادة التدوير", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "صناعة الأغذية", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "الأمن والحراسة", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "خدمات المرافق", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "المساحات الخضراء والحدائق", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'المستوى', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'البداية', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'التعلّم', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'في الفريق', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'المهارة', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'الخبرة', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'الإتقان', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'مستوى جديد:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'بلا أخطاء:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'هدف اليوم', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'تحقّق هدف اليوم!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'جديد في صندوق عدّتك:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'صندوق عدّتي', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: { m: 'أنهِ درساً مع لعبة. عندها تحصل على أول أداة لك.', f: 'أنهي درساً مع لعبة. عندها تحصلين على أول أداة لكِ.', x: 'بعد إنهاء درس مع لعبة تأتي أول أداة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'مزيد من الشرح', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'عن هذه النصائح', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'لم يراجع خبيرٌ هذا الشرح بعد.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'تاريخ هذا الشرح: {month}. أحدث القواعد موجودة لدى Juridisch Loket أو Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'تاريخ هذا الشرح: {month}. أحدث القواعد موجودة لدى justitiehuis أو على werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'قراءة المزيد عن Vloertaal', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    geluktAsk: { m: 'هل قلتَ هذا في العمل؟', f: 'هل قلتِ هذا في العمل؟', x: 'هل قيلت هذه الجملة في العمل؟' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    geluktYes: 'نعم، نجح', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'ليس بعد', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { m: 'أحسنت! الجمل التي نجحت في العمل: {n}', f: 'أحسنتِ! الجمل التي نجحت في العمل: {n}', x: 'عمل رائع! الجمل التي نجحت في العمل: {n}' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: { m: 'أحسنت! نجحت أول جملة لك في العمل.', f: 'أحسنتِ! نجحت أول جملة لكِ في العمل.', x: 'عمل رائع! نجحت أول جملة في العمل.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: { m: 'تجدها في الإعدادات.', f: 'تجدينها في الإعدادات.', x: 'هي في الإعدادات.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'نجحت في العمل', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: { m: 'قلتَ هذه الجمل في العمل.', f: 'قلتِ هذه الجمل في العمل.', x: 'قيلت هذه الجمل في العمل.' }, // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: { zero: 'حوالي {n} دقيقة', one: 'حوالي {n} دقيقة', two: 'حوالي دقيقتين', few: 'حوالي {n} دقائق', many: 'حوالي {n} دقيقة', other: 'حوالي {n} دقيقة' }, // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'لم يُحفظ تقدّمك. هل الهاتف ممتلئ؟ الحل: إفراغ بعض المساحة. أو في الإعدادات: «حفظ تقدمك».', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: { m: 'قد يمسح هاتفك تقدمك أحياناً. لذلك احفظ نسخة.', f: 'قد يمسح هاتفك تقدمك أحياناً. لذلك احفظي نسخة.', x: 'قد يمسح الهاتف التقدم أحياناً. لذلك من الأفضل حفظ نسخة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: { m: 'احفظ الآن', f: 'احفظي الآن', x: 'الحفظ الآن' }, // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: { m: 'أرسله لنفسك', f: 'أرسليه لنفسكِ', x: 'إرسال الملف إلى نفسك' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    backupShareHint: { m: 'أرسل الملف لنفسك، مثلاً في واتساب أو بالبريد الإلكتروني.', f: 'أرسلي الملف لنفسكِ، مثلاً في واتساب أو بالبريد الإلكتروني.', x: 'يمكن إرسال الملف إلى نفسك، مثلاً في واتساب أو بالبريد الإلكتروني.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    backupMade: { m: 'تم. احتفظ بهذا الملف جيداً. به تستطيع استرجاع تقدمك لاحقاً.', f: 'تم. احتفظي بهذا الملف جيداً. به تستطيعين استرجاع تقدمك لاحقاً.', x: 'تم. من المهم الاحتفاظ بهذا الملف. به يمكن استرجاع التقدم لاحقاً.' }, // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: { m: 'ماذا تقول؟', f: 'ماذا تقولين؟', x: 'ما الرد؟' }, // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'مثال', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: { m: 'استمع إلى الجواب', f: 'استمعي إلى الجواب', x: 'الاستماع إلى الجواب' }, // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: { m: 'استمع في مكان العمل', f: 'استمعي في مكان العمل', x: 'الاستماع في مكان العمل' }, // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: { m: 'هناك ضجيج كما في العمل. استمع، ثم تأتي الأسئلة.', f: 'هناك ضجيج كما في العمل. استمعي، ثم تأتي الأسئلة.', x: 'هناك ضجيج كما في العمل. الاستماع أولاً، ثم الأسئلة.' }, // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: { m: 'ضع الكلمة المُعلَّمة في البداية', f: 'ضعي الكلمة المُعلَّمة في البداية', x: 'الكلمة المُعلَّمة في البداية' }, // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'قواعد العمل', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: { m: 'أنت تعرف الآن الكثير من الهولندية. هل تريد أن تتعلم قواعد العمل أيضاً؟ عندها يكون كل شيء بالهولندية.', f: 'أنتِ تعرفين الآن الكثير من الهولندية. هل تريدين أن تتعلمي قواعد العمل أيضاً؟ عندها يكون كل شيء بالهولندية.', x: 'هناك الآن معرفة جيدة بالهولندية. ما رأيك في تعلّم قواعد العمل أيضاً؟ عندها يكون كل شيء بالهولندية.' }, // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: { m: 'نعم، أرني', f: 'نعم، أريني', x: 'نعم، لنرَ ذلك' }, // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'كيف يُقال؟', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'لكل صوت: كيف يصنعه الفم.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'السرعة', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'الكلمة، صوتًا بصوت', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'صوت', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "التواصل", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'الخطوات الأولى',
    'theme.safe': 'العمل بأمان',
    'theme.find': 'البحث عن عمل',
    'theme.job': 'وظيفتك',
    'theme.together': 'العمل معاً',
    'theme.rights': 'حقوقك',
    'theme.life': 'الحياة في هولندا',
    'theme.sector': 'قطاعك',
    // Units
    'u.firstday': 'اليوم الأول في العمل',
    'u.help': 'طلب المساعدة',
    'u.safety': 'السلامة أولاً',
    'u.emergency': "عندما يحدث خطأ", // nieuw, nalezen // nagelezen AI 22 nov
    'u.warehouse': 'في المستودع',
    'u.time': 'الوقت وجدول العمل',

    // Lessons
    'l.hello': { m: 'قل مرحباً', f: 'قولي مرحباً', x: 'إلقاء التحية' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'l.people': 'الناس في العمل',
    'l.understand': 'لا أفهم',
    'l.gear': 'معدات الحماية',
    'l.danger': 'خطر!',
    'l.accident': 'الإبلاغ عن حادث',
    'l.things': 'أشياء في المستودع',
    'l.directions': 'الاتجاهات والأفعال',
    'l.shift': 'نوبتي',
    'l.sick': 'الإبلاغ عن المرض',

    // Words
    'w.hallo': 'مرحباً',
    'w.goedemorgen': 'صباح الخير',
    'w.dankjewel': 'شكراً',
    'w.ja': 'نعم',
    'w.nee': 'لا',
    'w.totmorgen': 'أراك غداً',
    'w.collega': 'الزميل، الزميلة',
    'w.baas': 'المدير',
    'w.leidinggevende': 'المشرف',
    'w.werk': 'العمل',
    'w.naam': 'الاسم',
    'w.nieuw': 'جديد',
    'w.begrijpniet': 'لا أفهم',
    'w.nogeenkeer': 'مرة أخرى',
    'w.langzaam': 'ببطء',
    'w.helpen': 'يساعد',
    'w.waar': 'أين',
    'w.wc': 'المرحاض',
    'w.helm': 'الخوذة',
    'w.handschoenen': 'القفازات',
    'w.veiligheidsschoenen': 'حذاء السلامة',
    'w.hesje': 'سترة السلامة العاكسة',
    'w.bril': 'نظارات السلامة',
    'w.dragen': 'يرتدي',
    'w.pasop': 'انتبِهْ',
    'w.stop': 'توقَّفْ',
    'w.help': 'النجدة',
    'w.brand': 'الحريق',
    'w.nooduitgang': 'مخرج الطوارئ',
    'w.ongeluk': 'الحادث',
    'w.gewond': 'مصاب',
    'w.bloeden': 'ينزف',
    'w.ehbodoos': 'صندوق الإسعافات الأولية',
    'w.bhver': 'مسؤول الطوارئ في الشركة (الإسعافات الأولية، الحريق، الإخلاء)',
    'w.ziekenhuis': 'المستشفى',
    'w.gebeuren': 'يحدث',
    'w.doos': 'الصندوق',
    'w.pallet': 'المنصة الخشبية (البالِت)',
    'w.heftruck': 'الرافعة الشوكية',
    'w.kar': 'العربة',
    'w.stelling': 'رف التخزين',
    'w.scanner': 'الماسح الضوئي (السكانر)',
    'w.links': 'يسار',
    'w.rechts': 'يمين',
    'w.boven': 'في الأعلى',
    'w.beneden': 'في الأسفل',
    'w.tillen': 'يرفع',
    'w.pakken': 'يأخذ',
    'w.dienst': 'نوبة العمل',
    'w.pauze': 'الاستراحة',
    'w.beginnen': 'يبدأ',
    'w.klaar': 'جاهز / انتهى',
    'w.telaat': 'متأخر',
    'w.morgen': 'غداً',
    'w.ziek': 'مريض',
    'w.bellen': 'يتصل (بالهاتف)',
    'w.dokter': 'الطبيب',
    'w.pijn': 'الألم',
    'w.vandaag': 'اليوم',
    'w.beter': 'أفضل',

    // Sentences
    's.hello.1': { m: 'مرحباً، أنا جديد.', f: 'مرحباً، أنا جديدة.' },
    's.hello.2': 'صباح الخير، أنا علي.',
    's.hello.3': 'شكراً، أراك غداً!',
    's.people.1': 'اسمي سارة.',
    's.people.2': 'من هو المدير؟',
    's.people.3': { m: 'أنا زميل جديد.', f: 'أنا زميلة جديدة.' },
    's.understand.1': 'هل يمكنك أن تعيد ذلك؟',
    's.understand.2': 'هل يمكنك أن تتكلم ببطء؟',
    's.understand.3': 'أين المرحاض؟',
    's.gear.1': 'ارتدِ خوذتك دائماً.',
    's.gear.2': 'أين القفازات؟',
    's.gear.3': 'أنا أرتدي سترة السلامة.',
    's.danger.1': 'انتبِهْ، الأرض مبللة!',
    's.danger.2': 'أين مخرج الطوارئ؟',
    's.danger.3': 'هناك حادث!',
    'l.alarm': 'إنذار الحريق والإخلاء', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'الإنذار', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'يُخلي (يخرج الجميع من المبنى)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'طريق الإخلاء', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'الدرج', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'نقطة التجمّع (حيث يلتقي الجميع في الخارج)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'طفاية الحريق', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'أين طفاية الحريق؟', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'يجب أن نُخلي المبنى.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'خذ الدرج، لا المصعد.', // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.1': 'سقط زميلي.',
    's.accident.2': 'جرحت نفسي.',
    's.accident.3': 'أريد أن أبلّغ عن حادث.',
    's.things.1': 'ضع الصندوق على المنصة الخشبية.',
    's.things.2': 'أين الماسح الضوئي؟',
    's.things.3': 'الرافعة الشوكية قادمة.',
    's.directions.1': 'الصندوق على اليسار.',
    's.directions.2': 'ارفع باستخدام ساقيك.',
    's.directions.3': 'اذهب إلى اليمين.',
    's.shift.1': 'تبدأ نوبتي في الساعة السابعة.',
    's.shift.2': 'متى الاستراحة؟',
    's.shift.3': { m: 'آسف، لقد تأخرت.', f: 'آسفة، لقد تأخرت.' },
    's.sick.1': { m: 'أنا مريض اليوم.', f: 'أنا مريضة اليوم.' },
    's.sick.2': 'عندي ألم في ظهري.',
    's.sick.3': 'أنا أتصل بالطبيب.',
    'c.hello.q': 'أتمنى لك مساءً سعيداً!',
    'c.hello.a': 'أراك غداً!',
    'c.people.q': 'ما اسمك؟',
    'c.people.a': 'اسمي سارة.',
    'l.arrive': 'اليوم الأول: إيجاد الطريق',
    'w.ingang': 'المدخل',
    'w.receptie': 'الاستقبال (مكتب الاستقبال)',
    'w.kantine': 'المقصف، مطعم العاملين',
    'w.kleedkamer': 'غرفة تبديل الملابس',
    'w.buddy': 'الزميل المرافق (زميل يساعدك في البداية)',
    'w.vinden': 'يجد',
    's.arrive.1': 'عند من يجب أن أسجّل حضوري؟',
    's.arrive.2': 'لا أستطيع أن أجد غرفة تبديل الملابس.',
    's.arrive.3': 'من هو زميلي المرافق اليوم؟',
    'c.arrive.q': 'صباح الخير، ما سبب حضورك؟',
    'c.arrive.a': { m: 'أنا جديد. أبدأ اليوم.', f: 'أنا جديدة. أبدأ اليوم.' },
    'c.understand.q': 'هل فهمت؟',
    'c.understand.a': 'لا، مرة أخرى من فضلك.',
    'c.gear.q': 'هل معك خوذتك؟',
    'c.gear.a': 'نعم، أنا أرتديها.',
    'c.danger.q': 'هل هناك حادث؟',
    'c.danger.a': 'نعم، اتَّصِلْ بـ 112!',
    'c.alarm.q': 'هل الجميع في الخارج؟', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'لا، زميلي ليس هنا بعد.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'ماذا حدث؟',
    'c.accident.a': 'سقط. إنه ينزف.',
    'l.notyet': 'لم أتعلّم هذا بعد',
    'w.nogniet': 'ليس بعد',
    'w.mogen': 'يُسمَح له، يجوز',
    'w.proberen': 'يحاول، يجرّب',
    'w.voordoen': 'يُري كيف (يفعله أمامك أولاً)',
    'w.gevaarlijk': 'خطير',
    'w.uitleg': 'الشرح',
    's.notyet.1': 'لم أتعلّم هذا بعد.',
    's.notyet.2': 'لم أحصل على شرح بعد.',
    's.notyet.3': 'هل يُسمَح لي أن أفعل هذا وحدي الآن؟',
    'c.notyet.q': { m: 'جرّب فقط، الأمر سهل.', f: 'جرّبي فقط، الأمر سهل.' },
    'c.notyet.a': 'هل يمكنك أن تريني كيف أولاً؟',
    'c.things.q': 'أين يوضع الصندوق؟',
    'c.things.a': 'على المنصة الخشبية (البالِت).',
    'c.directions.q': 'يسار أم يمين؟',
    'c.directions.a': 'يمين، عند رف التخزين.',
    'c.shift.q': 'متى تبدأ نوبتك؟', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.shift.a': 'غداً الساعة السابعة.',
    'c.sick.q': { m: 'هل أنت مريض؟', f: 'هل أنت مريضة؟' },
    'c.sick.a': 'نعم، سأبقى في البيت اليوم.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'اتَّصِلْ بـ 112!',
    'p.hurt': { m: 'أنا مصاب.', f: 'أنا مصابة.' },
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "جمع الطلبات", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "السلعة (منتج واحد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "الخانة (مكان واحد في رف التخزين)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "الملصق، الستيكر", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "يجمع، يلتقط", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "ينقص (غير موجود)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "الموقع (رمز المكان، مثل A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "أجمع السلع لهذا الطلب.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "هذه السلعة ناقصة. الخانة فارغة.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "الملصق يجب أن يكون على الصندوق.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "أي موقع هو؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "الممر ثلاثة، الخانة اثنا عشر.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "التحميل والتفريغ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "الشاحنة", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "السائق", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "يفرّغ (يُخرج الأشياء من الشاحنة)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "عربة البالِت (عربة يدوية ترفع المنصة الخشبية)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "غلاف البلاستيك (بلاستيك رقيق حول المنصة الخشبية)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "ورقة الشحن (الورقة التي تقول ما يوجد في الشاحنة)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "الشاحنة عند الباب أربعة.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "نفرّغ هذه المنصات أولاً.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "السائق ينتظر ورقة الشحن.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "هل هذه المنصة جاهزة؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "لا، ما زالت تحتاج غلاف البلاستيك حولها.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "كيف أفعل هذا؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "كيف", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "هكذا، بهذه الطريقة", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "صعب", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "سهل", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "يعرف", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "هذا صحيح", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "كيف أفعل هذا؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "هذا صعب عليّ.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "هل أفعله هكذا بشكل صحيح؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': { m: "هل تعرف كيف تفعل هذا؟", f: "هل تعرفين كيف تفعلين هذا؟" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "لا، لا أعرف ذلك بعد.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "هل يمكنني أن أسأل شيئاً؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "يسأل", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "مَن", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "لحظة، لوقت قصير", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "الوقت", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "يزعج (شخصاً مشغولاً)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "يشكّ (ليس متأكداً)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "هل يمكنني أن أسأل شيئاً؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': { m: "آسف على الإزعاج.", f: "آسفة على الإزعاج." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "من يستطيع أن يساعدني؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "هل عندك سؤال؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "نعم. هل عندك قليل من الوقت؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "أين هو؟", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "هنا", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "هناك", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "ضائع (لا يمكن إيجاده)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "المخرج", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "يشير إلى (يُري أين هو)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "بجانب", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "أضعت الطريق.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "أين المخرج؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "المرحاض هناك، بجانب المقصف.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': { m: "هل تستطيع أن تجده؟", f: "هل تستطيعين أن تجديه؟" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "لا. هل يمكنك أن تشير إليه؟", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "الجروح الصغيرة والحروق", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "الجرح", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "الضمادة", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "يبرّد (بالماء البارد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "الجرح القطعي (جرح صغير من سكين أو شيء حاد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "يُغمى عليه", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "دُش العين (ماء لغسل العينين)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "برّد الحرق بالماء.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "إنه جرح صغير. اضغط على الجرح.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "أين دُش العين؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "زميلي سيُغمى عليه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "دعه يستلقي قليلاً. سأحضر المساعدة.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "الاتصال بـ112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "خدمات الطوارئ (الإسعاف، الإطفاء، الشرطة)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "اسم الشارع", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "رقم البيت", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "يستجيب (الشخص يتفاعل عند الكلام معه)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "ينتظر ويستقبل (شخصاً عند الباب)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "يبقى على الخط (لا يُنهي المكالمة)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "أتصل بـ112. أحتاج إلى سيارة إسعاف.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "ما اسم الشارع ورقم البيت؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "سأنتظر سيارة الإسعاف عند المدخل.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': { m: "هل يستجيب عندما تكلّمه؟", f: "هل يستجيب عندما تكلّمينه؟", x: "هل يستجيب عند الكلام معه؟" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "لا. لا يستجيب.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "جدول عملك", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "جدول الأسبوع (من يعمل ومتى هذا الأسبوع)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "تطبيق جدول العمل (نوباتك على هاتفك)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "متاح (يمكن العمل في ذلك الوقت)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "التغيير", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "ينوب عن (يعمل مكان شخص غائب)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "يوم العطلة", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "جدول العمل الجديد في التطبيق.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "هل أنت متاح يوم السبت؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "هل يمكنك أن تنوب عن سارة غداً؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "هناك تغيير في جدول عملك.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "حسناً. في أي يوم يجب أن أعمل؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "الساعات والاستراحات", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "استراحة الغداء", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "وقت الراحة (وقت حرّ بين نوبتين)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "يوم العمل", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "قائمة الساعات (حيث تُكتب ساعات العمل)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "يغادر مبكراً", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "متتالية (واحد بعد الآخر)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "أكتب ساعاتي في قائمة الساعات.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "هل يمكنني أن أغادر قبل ساعة اليوم؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "عملت ستة أيام متتالية.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "متى استراحة غدائك؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "في الساعة الثانية عشرة، نصف ساعة.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "أسابيعك الأولى", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "الجولة التعريفية (شخص يُري المبنى للعامل الجديد)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "المرافق (الزميل الذي يساعد في الأسابيع الأولى)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "الدفتر الصغير", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "يرافق زميلاً (ويشاهد كيف يعمل)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "يتذكّر، يحفظ في ذاكرته", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "بشكل مستقلّ (بدون مساعدة)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "هل يمكنك أن تريني إياه مرة أخرى؟", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "اليوم أرافق سارة في عملها.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "أكتبه في دفتري الصغير.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': { m: "هل تتذكّر كل شيء من الجولة التعريفية؟", f: "هل تتذكّرين كل شيء من الجولة التعريفية؟", x: "هل بقي كل شيء من الجولة التعريفية في الذاكرة؟" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "تقريباً كل شيء. أين كان المقصف؟", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "جمع الطلبيات ورافعة reachtruck", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "جامع الطلبيات (العامل الذي يجمع الطلبيات؛ وأيضاً العربة الصغيرة التي يقف عليها العامل للالتقاط من الأعلى)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "رافعة reachtruck (رافعة شوكية للرفوف العالية جداً؛ شوكتاها تمتدّان إلى الأمام)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "قائمة الالتقاط (قائمة القطع التي يجب جمعها)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "يمسح ضوئياً (بجهاز المسح)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "الماشي، المشاة (شخص يمشي على قدميه)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "يتدفّأ (في مكان دافئ، بعد العمل في البرد)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "أمسح كل قطعة من قائمة الالتقاط.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "المشاة يمشون على ممرّ المشاة.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "في غرفة التجميد ألبس ملابس حرارية.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': { m: "هل تستطيع أن تقود رافعة reachtruck قليلاً؟", f: "هل تستطيعين أن تقودي رافعة reachtruck قليلاً؟", x: "هل من الممكن قيادة رافعة reachtruck قليلاً؟" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "لا، هذا غير مسموح لي. ليس عندي تدريب عليها.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
