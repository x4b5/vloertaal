import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'ti',
  name: 'Tigrinya',
  nativeName: 'ትግርኛ',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'መልክዕ',
    themeAuto: 'ብባዕሉ',
    themeLight: 'ብሩህ',
    themeDark: 'ጸልማት',
    voice: 'ድምጺ ሆላንድኛ',
    voiceAuto: 'ብባዕሉ',
    voiceHint: { m: 'ንምስማዕ 🔊 ጠውቕ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንካ እዮም ዝመጹ።', f: 'ንምስማዕ 🔊 ጠውቒ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንኪ እዮም ዝመጹ።', x: 'ንምስማዕ 🔊 ጠውቑ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንኩም እዮም ዝመጹ።' }, // x: nieuw, nalezen
    voiceNone: { m: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንካ (Text-to-speech) ክትውስኽ ትኽእል ኢኻ።', f: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንኪ (Text-to-speech) ክትውስኺ ትኽእሊ ኢኺ።', x: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንኩም (Text-to-speech) ክትውስኹ ትኽእሉ ኢኹም።' }, // x: nieuw, nalezen
    appTagline: 'ሆላንድኛ ንቦታ ስራሕ',
    chooseLanguage: { m: 'ቋንቋ ሓገዝካ ምረጽ', f: 'ቋንቋ ሓገዝኪ ምረጺ', x: 'ቋንቋ ሓገዝኩም ምረጹ' }, // x: nieuw, nalezen
    englishOnly: 'እንግሊዝኛ ጥራይ',
    beta: 'ትርጉም ገና ኣይተመርመረን', // nieuw, nalezen
    dayStreak: 'ተኸታታሊ መዓልትታት',
    streakStarted: { m: 'ተኸታታሊ መዓልትታትካ ጀሚርካ! ጽባሕ ተመለስ።', f: 'ተኸታታሊ መዓልትታትኪ ጀሚርኪ! ጽባሕ ተመለሲ።', x: 'ተኸታታሊ መዓልትታትኩም ጀሚርኩም! ጽባሕ ተመለሱ።' }, // x: nieuw, nalezen
    streakGrew: { m: '{n} ተኸታታሊ መዓልትታት! ቀጽል።', f: '{n} ተኸታታሊ መዓልትታት! ቀጽሊ።', x: '{n} ተኸታታሊ መዓልትታት! ቀጽሉ።' }, // x: nieuw, nalezen
    start: { m: 'ጀምር', f: 'ጀምሪ', x: 'ጀምሩ' }, // x: nieuw, nalezen
    practice: { m: 'ደጊምካ ተለማመድ', f: 'ደጊምኪ ተለማመዲ', x: 'ደጊምኩም ተለማመዱ' }, // x: nieuw, nalezen
    locked: { m: 'ቅድም ነቲ ዝቐደመ ትምህርቲ ወድኦ', f: 'ቅድም ነቲ ዝቐደመ ትምህርቲ ወድእዮ' },
    newWord: 'ሓድሽ ቃል',
    tapToHear: { m: 'ክትሰምዕ ጠውቕ', f: 'ክትሰምዒ ጠውቒ', x: 'ክትሰምዑ ጠውቑ' }, // x: nieuw, nalezen
    whatDoesThisMean: 'እዚ እንታይ ማለት እዩ?',
    whichOneIs: 'ኣየናይ እዩ «{word}»?',
    mixLesson: 'ዝተሓዋወሰ ድግግም',
    whatDoYouHear: { m: 'እንታይ ትሰምዕ ኣለኻ?', f: 'እንታይ ትሰምዒ ኣለኺ?', x: 'እንታይ ትሰምዑ ኣለኹም?' }, // x: nieuw, nalezen
    buildSentence: { m: 'ነዚ ሓረግ ብሆላንድኛ ስራሕ', f: 'ነዚ ሓረግ ብሆላንድኛ ስርሒ', x: 'ነዚ ሓረግ ብሆላንድኛ ስርሑ' }, // x: nieuw, nalezen
    typeWhatYouHear: { m: 'ዝሰማዕካዮ ጽሓፍ', f: 'ዝሰማዕክዮ ጽሓፊ' },
    check: { m: 'ኣረጋግጽ', f: 'ኣረጋግጺ', x: 'ኣረጋግጹ' }, // x: nieuw, nalezen
    continue: { m: 'ቀጽል', f: 'ቀጽሊ', x: 'ቀጽሉ' }, // x: nieuw, nalezen
    correct: 'ኣዝዩ ጽቡቕ!',
    almost: { m: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቕ', f: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቒ', x: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቑ' }, // x: nieuw, nalezen
    incorrect: 'ገና ኣይኮነን',
    correctAnswer: 'ቅኑዕ መልሲ',
    yourAnswer: { m: 'መልስኻ', f: 'መልስኺ', x: 'መልስኹም' }, // x: nieuw, nalezen
    inARow: '{n} ብተኸታታሊ',
    cantListen: 'ሕጂ ክሰምዕ ኣይክእልን',
    learnWriting: 'ምጽሓፍ እውን ክመሃር እደሊ',
    learnWritingHint: { m: 'ክፉት: ዝሰማዕካዮም ቃላት ብፊደላት ጽሓፍ። ዕጹው: ዝሰማዕካዮ ቃል ብጽሑፍ ምረጽ።', f: 'ክፉት: ዝሰማዕክዮም ቃላት ብፊደላት ጽሓፊ። ዕጹው: ዝሰማዕክዮ ቃል ብጽሑፍ ምረጺ።' },
    tagRepeat: { m: 'ደጊምካ', f: 'ደጊምኪ', x: 'ደጊምኩም' }, // x: nieuw, nalezen
    readAloud: { m: 'ብድምጺ ኣንብብ', f: 'ብድምጺ ኣንብቢ', x: 'ብድምጺ ኣንብቡ' }, // x: nieuw, nalezen
    lessonComplete: 'ትምህርቲ ተወዲኡ!',
    phrasebook: 'ናይ ህጹጽ ግዜ ሓረጋት',
    phrasebookHint: { m: 'ክትሰምዖ ኣብ ሓረግ ጠውቕ። ስክሪንካ ንብጻይካ ከተርኢ እውን ትኽእል ኢኻ።', f: 'ክትሰምዕዮ ኣብ ሓረግ ጠውቒ። ስክሪንኪ ንብጻይኪ ከተርእዪ እውን ትኽእሊ ኢኺ።' },
    whoToCall: 'ኣብ ስራሕ ጸገም ኣሎ ድዩ? መን ክሕግዝ ይኽእል',
    who112: 'ህጹጽ፡ ሓደጋ ህይወት፡ ሓዊ ወይ ሕጂ ዝፍጸም ገበን።',
    whoLegal: 'ብዛዕባ ውዕል፡ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ብናጻ ምኽሪ።',
    whoInspection: 'ዘይውሑስ ስራሕ፡ ዝወሓደ ደሞዝ ወይ ምዝመዛ ንምሕባር። ብዘይ ስም እውን ይከኣል።',
    whoFairwork: 'ኣብ ስራሕ ምዝመዛ ምስ ዘሎ፡ ወይ ጥርጣረ ምስ ዘሎ።',
    settings: 'ምድላዋት',
    helpLanguage: 'ቋንቋ ሓገዝ',
    resetProgress: { m: 'ምዕባለይ ደምስስ', f: 'ምዕባለይ ደምስሲ', x: 'ምዕባለይ ደምስሱ' }, // x: nieuw, nalezen
    resetConfirm: 'ኣብዚ መሳርሒ ዘሎ ኩሉ ምዕባለ ይደምሰስ ዶ?',
    audioUnavailable: 'ኣብዚ መሳርሒ ድምጺ የለን።',
    slow: 'ቀስ ኢሉ',
    completeChat: { m: 'ዝርርብ ኣማልእ', f: 'ዝርርብ ኣማልኢ', x: 'ዝርርብ ኣማልኡ' }, // x: nieuw, nalezen
    meaning: 'ትርጉም',
    navRoute: 'ትምህርትታት',
    navWords: 'ሓገዝ',
    rightFirstTime: 'ብቐዳማይ ፈተነ ቅኑዕ',
    newWords: 'ሓደሽቲ ቃላት',
    wordsLearnedN: { m: '{n} ቃላት ተማሂርካ', f: '{n} ቃላት ተማሂርኪ', x: '{n} ቃላት ተማሂርኩም' }, // x: nieuw, nalezen
    practiseMistakes: { m: 'ጌጋታት ደጊምካ ተለማመድ · {n} ተሪፉ', f: 'ጌጋታት ደጊምኪ ተለማመዲ · {n} ተሪፉ', x: 'ጌጋታት ደጊምኩም ተለማመዱ · {n} ተሪፉ' }, // x: nieuw, nalezen
    quitHint: { m: 'መልስታትካ ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።', f: 'መልስታትኪ ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።', x: 'መልስታትኩም ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።' }, // x: nieuw, nalezen
    keepGoing: { m: 'ቀጽል', f: 'ቀጽሊ', x: 'ቀጽሉ' }, // x: nieuw, nalezen
    stopLesson: { m: 'ትምህርቲ ደው ኣብል', f: 'ትምህርቲ ደው ኣብሊ', x: 'ትምህርቲ ደው ኣብሉ' }, // x: nieuw, nalezen
    fullVersion: 'ምሉእ ቨርዥን',
    unlockFull: { m: 'ምሉእ ቨርዥን ክፈት', f: 'ምሉእ ቨርዥን ክፈቲ', x: 'ምሉእ ቨርዥን ክፈቱ' }, // x: nieuw, nalezen
    unlockHint: { m: 'ብኮድ ኩሉ ትምህርትታት ይኽፈት። እቲ ኮድ ብነጻ እዩ። ገና ኮድ የብልካን? መምህርካ ወይ ኣማኻሪኻ ሕተት፡ ወይ ኢመይል ስደደልና፡', f: 'ብኮድ ኩሉ ትምህርትታት ይኽፈት። እቲ ኮድ ብነጻ እዩ። ገና ኮድ የብልክን? መምህርኪ ወይ ኣማኻሪኺ ሕተቲ፡ ወይ ኢመይል ስደድልና፡' },
    codeNotFull: { m: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተት።', f: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተቲ።', x: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተቱ።' }, // x: nieuw, nalezen
    password: 'ኮድ',
    enterPassword: { m: 'እቲ ኮድ ኣእቱ', f: 'እቲ ኮድ ኣእትዊ' },
    wrongPassword: { m: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምካ ፈትን።', f: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምኪ ፈትኒ።', x: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምኩም ፈትኑ።' }, // x: nieuw, nalezen
    unlock: { m: 'ክፈት', f: 'ክፈቲ', x: 'ክፈቱ' }, // x: nieuw, nalezen
    sector: { m: 'ስራሕካ', f: 'ስራሕኪ', x: 'ስራሕኩም' }, // x: nieuw, nalezen
    chooseSector: { m: 'ኣበይ ኢኻ ትሰርሕ?', f: 'ኣበይ ኢኺ ትሰርሒ?', x: 'ኣበይ ኢኹም ትሰርሑ?' }, // x: nieuw, nalezen
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: { m: 'ኣብ ኣየናይ ሃገር ኢኻ ትሰርሕ?', f: 'ኣብ ኣየናይ ሃገር ኢኺ ትሰርሒ?', x: 'ኣብ ኣየናይ ሃገር ኢኹም ትሰርሑ?' }, // x: nieuw, nalezen
    // nagelezen (2e lezing)
    countryHint: { m: 'እትሰርሓሉ ሃገር ምረጽ። ሕግታት ስራሕ ናይታ ሃገር ክትረክብ ኢኻ። እዚ ኣብ ተሌፎንካ ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና።', f: 'እትሰርሕሉ ሃገር ምረጺ። ሕግታት ስራሕ ናይታ ሃገር ክትረኽቢ ኢኺ። እዚ ኣብ ተሌፎንኪ ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና።', x: 'እትሰርሑሉ ሃገር ምረጹ። ሕግታት ስራሕ ናይታ ሃገር ክትረኽቡ ኢኹም። እዚ ኣብ ተሌፎንኩም ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና።' }, // x: nieuw, nalezen // nieuw, nalezen // nagelezen AI ronde 3
    countryNl: 'ኔዘርላንድ',
    countryBe: 'ቤልጅዩም (ፍላንደርስ)',
    tipsNote: 'እዞም ምኽርታት ብዛዕባ ስራሕ ኣብ ኔዘርላንድ እዮም። ሓፈሻዊ ሓበሬታ እዩ፡ ሕጋዊ ምኽሪ ኣይኮነን።',
    sectorHint: { m: 'ትምህርትታት ናይ ስራሕካ ኣቐዲሞም ይመጹ። ደሓር ኣብ ምድላዋት ክትቅይሮ ትኽእል ኢኻ።', f: 'ትምህርትታት ናይ ስራሕኪ ኣቐዲሞም ይመጹ። ደሓር ኣብ ምድላዋት ክትቅይርዮ ትኽእሊ ኢኺ።' },
    otherSectors: 'ካልኦት ዓውድታት ስራሕ',
    reviewToday: 'ናይ ሎሚ ድግግም',
    reviewTodayN: 'ንምድጋም ዘለዋ ቃላት: {n} · ቁሩብ ደቓይቕ',
    notSureYet: 'ገና ኣይፈለጥኩን',
    sectorLogistics: 'መኽዘንን መጓዓዝያን',
    sectorConstruction: 'ስራሕ ህንጻ',
    sectorProduction: 'ምፍራይ',
    sectorCare: 'ክንክን',
    sectorHospitality: 'ቤት ብልዕን ሆቴልን',
    sectorCleaning: 'ጽሬት',
    sectorHorticulture: "ሕርሻ ኣትክልትን ገዛ ኣትክልትን", // nagelezen (2e lezing)
    sectorTechnical: 'ቴክኒካዊ ስራሕ', // nieuw (30 okt 2026), nalezen
    sectorGarage: 'ጋራጅ', // nieuw (30 okt 2026), nalezen
    sound: 'ድምጺ',
    soundOn: 'ድምጺ ክፉት',
    withoutSound: 'ብዘይ ድምጺ',
    quietHint: { m: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቕ፡ ንኣብነት ብኢርፎን።', f: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቒ፡ ንኣብነት ብኢርፎን።', x: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቑ፡ ንኣብነት ብኢርፎን።' }, // x: nieuw, nalezen
    soundOffToast: { m: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍት ትኽእል ኢኻ።', f: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍቲ ትኽእሊ ኢኺ።', x: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍቱ ትኽእሉ ኢኹም።' }, // x: nieuw, nalezen
    stillToDo: 'ሎሚ ገና ይተርፍ',
    streakStopped: { m: 'ተኸታታሊ መዓልትታትካ ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምካ ጀምር።', f: 'ተኸታታሊ መዓልትታትኪ ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምኪ ጀምሪ።', x: 'ተኸታታሊ መዓልትታትኩም ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምኩም ጀምሩ።' }, // x: nieuw, nalezen
    recordN: { m: 'ዝበለጸ ውጽኢትካ: {n} መዓልትታት', f: 'ዝበለጸ ውጽኢትኪ: {n} መዓልትታት', x: 'ዝበለጸ ውጽኢትኩም: {n} መዓልትታት' }, // x: nieuw, nalezen
    workWeek: { m: 'ናይ ስራሕ ሰሙንካ', f: 'ናይ ስራሕ ሰሙንኪ', x: 'ናይ ስራሕ ሰሙንኩም' }, // x: nieuw, nalezen
    freeDaysN: { m: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድካ፡ ተኸታታሊ መዓልትታትካ ይቕጽል።', f: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድኪ፡ ተኸታታሊ መዓልትታትኪ ይቕጽል።', x: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድኩም፡ ተኸታታሊ መዓልትታትኩም ይቕጽል።' }, // x: nieuw, nalezen
    restDay: 'ናጻ መዓልቲ',
    tier3: '3 መዓልትታት ብተኸታታሊ',
    tier7: '1 ሰሙን ብተኸታታሊ',
    tier14: '2 ሰሙናት ብተኸታታሊ',
    tier30: '1 ወርሒ ብተኸታታሊ',
    reviewDone: 'ናይ ሎሚ ተወዲኡ',
    tomorrowN: 'ጽባሕ: {n} ቃላት',
    firstWordsTomorrow: { m: 'ጽባሕ ቀዳሞት ቃላትካ ይምለሳ', f: 'ጽባሕ ቀዳሞት ቃላትኪ ይምለሳ', x: 'ጽባሕ ቀዳሞት ቃላትኩም ይምለሳ' }, // x: nieuw, nalezen
    extraRound: 'ተወሳኺ ዙርያ',
    wordsStrongerN: '{n} ቃላት ዝሓየላ',
    noMistakes: 'ብዘይ ጌጋ',
    nextUp: 'ዝቕጽል',
    installTitle: { m: 'Vloertaal ኣብ ቀንዲ ስክሪንካ ኣቐምጦ', f: 'Vloertaal ኣብ ቀንዲ ስክሪንኪ ኣቐምጥዮ' },
    installHint: 'ሽዑ ከም ኣፕ ይኽፈት፡ ብዘይ ኢንተርነት እውን።',
    installAdd: { m: 'ኣብ ቀንዲ ስክሪን ወስኽ', f: 'ኣብ ቀንዲ ስክሪን ወስኺ', x: 'ኣብ ቀንዲ ስክሪን ወስኹ' }, // x: nieuw, nalezen
    iosStep1: { m: 'Share ጠውቕ', f: 'Share ጠውቒ', x: 'Share ጠውቑ' }, // x: nieuw, nalezen
    iosStep2: { m: '«Add to Home Screen» ጠውቕ', f: '«Add to Home Screen» ጠውቒ', x: '«Add to Home Screen» ጠውቑ' }, // x: nieuw, nalezen
    iosStep3: 'ተወዲኡ!',
    backupTitle: { m: 'ምዕባለኻ ዓቅብ', f: 'ምዕባለኺ ዓቅቢ', x: 'ምዕባለኹም ዓቅቡ' }, // x: nieuw, nalezen
    backupHint: { m: 'ምዕባለኻ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ። ከም ፋይል ዓቅቦ፡ ንኣብነት ንሓድሽ ተሌፎን።', f: 'ምዕባለኺ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ። ከም ፋይል ዓቅብዮ፡ ንኣብነት ንሓድሽ ተሌፎን።' },
    backupSave: { m: 'ኣውርድ', f: 'ኣውርዲ', x: 'ኣውርዱ' }, // x: nieuw, nalezen
    backupLoad: { m: 'ካብ ፋይል መልሶ', f: 'ካብ ፋይል መልስዮ' },
    backupBad: 'እዚ ናይ Vloertaal ፋይል ኣይኮነን።',
    backupAsk: { m: 'እዚ ፋይል ኣብ ምዕባለኻ ክትውስኾ ዲኻ፡ ወይስ ምዕባለኻ ክትትክኦ?', f: 'እዚ ፋይል ኣብ ምዕባለኺ ክትውስኽዮ ዲኺ፡ ወይስ ምዕባለኺ ክትትክእዮ?' },
    backupMerge: { m: 'ሓብር', f: 'ሓብሪ', x: 'ሓብሩ' }, // x: nieuw, nalezen
    backupReplace: { m: 'ተክእ', f: 'ተክኢ', x: 'ተክኡ' }, // x: nieuw, nalezen
    backupBack: { m: 'ምዕባለኻ ተመሊሱ።', f: 'ምዕባለኺ ተመሊሱ።', x: 'ምዕባለኹም ተመሊሱ።' }, // x: nieuw, nalezen
    backupNothingNew: { m: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንካ ነይሩ።', f: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንኪ ነይሩ።', x: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንኩም ነይሩ።' }, // x: nieuw, nalezen
    cancel: { m: 'ሰርዝ', f: 'ሰርዚ', x: 'ሰርዙ' }, // x: nieuw, nalezen
    remindTitle: 'መዓልታዊ ኣዘኻኽረኒ',
    remindEvent: 'ግዜ ንሆላንድኛ (10 ደቓይቕ)',
    remindHint: { m: 'ካሌንደር ተሌፎንካ የዘኻኽረካ። ናባና ዝለኣኽ ነገር የለን።', f: 'ካሌንደር ተሌፎንኪ የዘኻኽረኪ። ናባና ዝለኣኽ ነገር የለን።', x: 'ካሌንደር ተሌፎንኩም የዘኻኽረኩም። ናባና ዝለኣኽ ነገር የለን።' }, // x: nieuw, nalezen
    remindBefore: 'ቅድሚ ስራሕ',
    remindBreak: 'ኣብ ዕረፍቲ',
    remindAfter: 'ድሕሪ ስራሕ',
    remindOwn: 'ካልእ ሰዓት',
    remindAdd: { m: 'ኣብ ካሌንደረይ ወስኽ', f: 'ኣብ ካሌንደረይ ወስኺ', x: 'ኣብ ካሌንደረይ ወስኹ' }, // x: nieuw, nalezen
    remindAdded: { m: 'ናብ ካሌንደርካ ንምውሳኽ ነቲ ፋይል ክፈቶ።', f: 'ናብ ካሌንደርኪ ንምውሳኽ ነቲ ፋይል ክፈትዮ።' },
    navAbout: 'ሓበሬታ',
    tagMeaning: 'ትርጉም',
    tagPick: { m: 'ምረጽ', f: 'ምረጺ', x: 'ምረጹ' }, // x: nieuw, nalezen
    tagListen: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // x: nieuw, nalezen
    tagType: { m: 'ጽሓፍ', f: 'ጽሓፊ', x: 'ጽሓፉ' }, // x: nieuw, nalezen
    tagMatch: 'ጽምዲ',
    tagBuild: 'ሓረግ',
    tagChat: 'ዝርርብ',
    tagSituation: 'ኩነታት',
    tagTip: 'ምኽሪ',
    more: 'ተወሳኺ',
    less: 'ውሑድ',
    daysUnit: 'መዓልትታት',
    wordsUnit: 'ቃላት',
    countTitle: 'ብዘይ ስም ምቑጻር',
    countHint: 'እቲ ኣፕ ትምህርትታት ክንደይ ግዜ ከም ዝውዳእን ብግምት ክንደይ ከም ዝወስድን ይቖጽር። ስም የለን፡ ኣካውንት የለን፡ ምክትታል የለን።',
    certificate: 'ምስክር ወረቐት',
    myCertificates: 'ምስክር ወረቐታተይ',
    certsEmpty: { m: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድእ። ሽዑ ምስክር ወረቐት ትረኽብ።', f: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድኢ። ሽዑ ምስክር ወረቐት ትረኽቢ።', x: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድኡ። ሽዑ ምስክር ወረቐት ትረኽቡ።' }, // x: nieuw, nalezen
    certEarned: { m: 'ምስክር ወረቐት ረኺብካ!', f: 'ምስክር ወረቐት ረኺብኪ!', x: 'ምስክር ወረቐት ረኺብኩም!' }, // x: nieuw, nalezen
    certEarnedHint: { m: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእካ።', f: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእኪ።', x: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእኩም።' }, // x: nieuw, nalezen
    certView: { m: 'ርአ', f: 'ርኣዪ' },
    certLater: 'ደሓር',
    certPrint: { m: 'ሕተም ወይ ከም PDF ዓቅብ', f: 'ሕተሚ ወይ ከም PDF ዓቅቢ', x: 'ሕተሙ ወይ ከም PDF ዓቅቡ' }, // x: nieuw, nalezen
    certSaved: 'እቲ ስእሊ ተዓቂቡ።',
    certNameAsk: { m: 'ስምካ ኣብቲ ምስክር ወረቐት?', f: 'ስምኪ ኣብቲ ምስክር ወረቐት?', x: 'ስምኩም ኣብቲ ምስክር ወረቐት?' }, // x: nieuw, nalezen
    certNameHint: { m: 'ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ባዶ ክትገድፎ ትኽእል ኢኻ።', f: 'ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ባዶ ክትገድፍዮ ትኽእሊ ኢኺ።' },
    certNoName: 'ብዘይ ስም',
    certChangeName: { m: 'ስም ቀይር', f: 'ስም ቀይሪ', x: 'ስም ቀይሩ' }, // x: nieuw, nalezen
    certPractice: 'ናይ ልምምድ ምስክር ወረቐት እዩ፡ ወግዓዊ ዲፕሎማ ኣይኮነን',
    resumeLesson: { m: 'ትምህርቲ ቀጽል', f: 'ትምህርቲ ቀጽሊ', x: 'ትምህርቲ ቀጽሉ' }, // x: nieuw, nalezen
    restartLesson: { m: 'ካብ መጀመርታ ጀምር', f: 'ካብ መጀመርታ ጀምሪ', x: 'ካብ መጀመርታ ጀምሩ' }, // x: nieuw, nalezen
    quitKept: { m: 'ዝገበርካዮ ይዕቀብ እዩ። ደሓር ክትቅጽል ትኽእል ኢኻ።', f: 'ዝገበርክዮ ይዕቀብ እዩ። ደሓር ክትቅጽሊ ትኽእሊ ኢኺ።' },
    bestAnswer: 'ዝበለጸ መልሲ',
    inReview: 'ይምርመር ኣሎ',
    today: 'ሎሚ',
    playAgain: { m: 'ደጊምካ ስማዕ', f: 'ደጊምኪ ስምዒ', x: 'ደጊምኩም ስምዑ' }, // x: nieuw, nalezen
    daysUnitOne: 'መዓልቲ',
    wordsUnitOne: 'ቃል',
    wordsLearnedOne: { m: '{n} ቃል ተማሂርካ', f: '{n} ቃል ተማሂርኪ', x: '{n} ቃል ተማሂርኩም' }, // x: nieuw, nalezen
    tomorrowOne: 'ጽባሕ: {n} ቃል',
    wordsStrongerOne: '{n} ቃል ዝሓየለ',
    recordOne: { m: 'ዝበለጸ ውጽኢትካ: {n} መዓልቲ', f: 'ዝበለጸ ውጽኢትኪ: {n} መዓልቲ', x: 'ዝበለጸ ውጽኢትኩም: {n} መዓልቲ' }, // x: nieuw, nalezen
    streakStoppedOne: { m: 'ተኸታታሊ መዓልትታትካ ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምካ ጀምር።', f: 'ተኸታታሊ መዓልትታትኪ ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምኪ ጀምሪ።', x: 'ተኸታታሊ መዓልትታትኩም ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምኩም ጀምሩ።' }, // x: nieuw, nalezen
    letterTiles: 'ፊደላት',
    useKeyboard: 'ኪቦርድ',
    skippedN: '{n} ተሰጊሩ፡ ኣይተቖጽረን',
    stampLater: 'ደሓር ክምለስ እዩ',
    stampDone: 'ተወዲኡ',
    chooseNext: { m: 'ዝቕጽል ኣርእስቲ ምረጽ', f: 'ዝቕጽል ኣርእስቲ ምረጺ', x: 'ዝቕጽል ኣርእስቲ ምረጹ' }, // x: nieuw, nalezen
    recommended: 'ዝምከር',
    allTopics: 'ኩሎም ኣርእስትታት',
    topicsOrder: 'ኣርእስትታት ምርኣይ',
    byTheme: 'ብክፍልታት',
    inOrder: 'ብቕደም ሰዓብ',
    lessonsUnit: 'ትምህርትታት',
    lessonsUnitOne: 'ትምህርቲ',
    topicsUnit: 'ኣርእስትታት',
    topicsUnitOne: 'ኣርእስቲ',
    allTopicsDone: { m: 'ኩሎም ኣርእስትታት ወዲእካ። ጽቡቕ ስራሕ!', f: 'ኩሎም ኣርእስትታት ወዲእኪ። ጽቡቕ ስራሕ!', x: 'ኩሎም ኣርእስትታት ወዲእኩም። ጽቡቕ ስራሕ!' }, // x: nieuw, nalezen
    // Speaking practice
    tagSpeak: { m: 'ተዛረብ', f: 'ተዛረቢ', x: 'ተዛረቡ' }, // x: nieuw, nalezen
    speakPrompt: { m: 'ስማዕ፣ ድሕሪኡ በሎ', f: 'ስምዒ፣ ድሕሪኡ በልዮ' },
    tapToSpeak: { m: 'ጠውቕ እሞ ተዛረብ', f: 'ጠውቒ እሞ ተዛረቢ', x: 'ጠውቑ እሞ ተዛረቡ' }, // x: nieuw, nalezen
    stopRecording: { m: 'ደው ኣብል', f: 'ደው ኣብሊ', x: 'ደው ኣብሉ' }, // x: nieuw, nalezen
    micPrivacy: { m: 'ንስኻ ጥራይ ኢኻ ትሰምዖ። ዋላ ሓንቲ ኣይለኣኽን።', f: 'ንስኺ ጥራይ ኢኺ ትሰምዕዮ። ዋላ ሓንቲ ኣይለኣኽን።' },
    micUnavailable: { m: 'ማይክሮፎን ጠፊኡ ኣሎ። ሕጂ ብዓው ኢልካ በሎ፡ ድሕሪኡ ቀጽል።', f: 'ማይክሮፎን ጠፊኡ ኣሎ። ሕጂ ብዓው ኢልኪ በልዮ፡ ድሕሪኡ ቀጽሊ።' },
    cantSpeak: 'ሕጂ ክዛረብ ኣይክእልን',
    soundsSame: 'ሓደ ዓይነት ይስማዕ',
    sayAgain: { m: 'ደጊምካ በሎ', f: 'ደጊምኪ በልዮ' },
    speakMe: 'ኣነ',
    speakingPractice: 'ልምምድ ምዝራብ',
    speakingHint: { m: 'ቃላት ብዓው ኢልካ በሎም እሞ ኣወዳድር። ድምጽካ ፈጺሙ ኣይዕቀብን ኣይለኣኽን።', f: 'ቃላት ብዓው ኢልኪ በልዮም እሞ ኣወዳድሪ። ድምጽኪ ፈጺሙ ኣይዕቀብን ኣይለኣኽን።' },
    savingOffline: 'ይዕቀብ ኣሎ…',
    savedOffline: 'ብዘይ ኢንተርነት ተዓቂቡ',
    offlineNoSpace: { m: 'ኣብዚ ተሌፎን እኹል ቦታ የለን። ዝተዓቀበ ኣርእስቲ ኣልግስ ወይ ቦታ ኣጽሪ።', f: 'ኣብዚ ተሌፎን እኹል ቦታ የለን። ዝተዓቀበ ኣርእስቲ ኣልግሲ ወይ ቦታ ኣጽርዪ።' },
    offlineFailed: { m: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትካ ኣረጋግጽ እሞ ደጊምካ ፈትን።', f: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትኪ ኣረጋግጺ እሞ ደጊምኪ ፈትኒ።', x: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትኩም ኣረጋግጹ እሞ ደጊምኩም ፈትኑ።' }, // x: nieuw, nalezen
    pocketCard: 'ናይ ጁባ ካርድ',
    pocketSave: { m: 'ከም ስእሊ ዓቅብ', f: 'ከም ስእሊ ዓቅቢ', x: 'ከም ስእሊ ዓቅቡ' }, // x: nieuw, nalezen
    textSize: 'ዓቐን ጽሑፍ',
    textNormal: 'ንቡር',
    textLarge: 'ዓቢ',
    textXl: 'ኣዝዩ ዓቢ',
    showEnglish: { m: 'እንግሊዝኛ እውን ኣርኢ', f: 'እንግሊዝኛ እውን ኣርእዪ' },
    genderTitle: 'ሰበይቲ ወይስ ሰብኣይ?',
    genderHint: 'ቋንቋኹም ብቕኑዕ መንገዲ ምእንቲ ክዛረበኩም።',
    genderWoman: 'ሰበይቲ',
    genderMan: 'ሰብኣይ',
    genderNone: 'ክገልጾ ኣይደልን',
    langGuessYes: 'እወ',
    langGuessOther: 'ካልእ ቋንቋ',
    settingsLangMe: 'ቋንቋን ኣነን',
    settingsLessons: 'ትምህርትታት',
    settingsPhone: 'እዚ ተሌፎን',
    settingOn: 'ክፉት',
    settingOff: 'ዕጹው',
    sectorGroupMake: 'ምስራሕን ምጽዓንን',
    sectorGroupCare: 'ክንክንን ኣገልግሎትን',
    sectorGroupBuild: 'ህንጻን ቴክኒክን', // nieuw (30 okt 2026), nalezen
    voiceWoman: 'ድምጺ ሰበይቲ',
    voiceMan: 'ድምጺ ሰብኣይ',
    writingPick: 'ቃል ምምራጽ',
    settingWriting: 'ምጽሓፍ',
    settingKeepLessons: 'ትምህርትታት ኣብዚ ተሌፎን ምዕቃብ',
    settingKeepLessonsHint: 'እቲ ሕጂ ዘሎ ኣርእስቲ ኣብዚ ተሌፎን ይዕቀብ፣ ስለዚ ብዘይ ኢንተርነት እውን ይሰርሕ። ዝተወደኡ ኣርእስትታት ድማ ይእለዩ።',
    otherTopicLink: 'ካልእ ኣርእስቲ',
    remindAsk: { m: 'መዓልታዊ ነዘኻኽረካ ዶ?', f: 'መዓልታዊ ነዘኻኽረኪ ዶ?', x: 'መዓልታዊ ነዘኻኽረኩም ዶ?' }, // x: nieuw, nalezen
    remindYes: 'እወ፡ ድሕሪ ስራሕ',
    remindNo: 'ኣይፋል፡ የቐንየለይ',
    remindPickTime: { m: 'መዓስ ነዘኻኽረካ?', f: 'መዓስ ነዘኻኽረኪ?', x: 'መዓስ ነዘኻኽረኩም?' }, // x: nieuw, nalezen
    certSaveShare: { m: 'ዓቅብ ወይ ኣካፍል', f: 'ዓቅቢ ወይ ኣካፍሊ', x: 'ዓቅቡ ወይ ኣካፍሉ' }, // x: nieuw, nalezen
    certNameDone: 'ተወዲኡ',
    pauseTitle: 'ዕረፍቲ',
    back: 'ንድሕሪት',
    quitLesson: { m: 'ካብ ትምህርቲ ውጻእ', f: 'ካብ ትምህርቲ ውጽኢ', x: 'ካብ ትምህርቲ ውጽኡ' }, // x: nieuw, nalezen
    playAudio: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // x: nieuw, nalezen
    scrollDown: { m: 'ናብ ታሕቲ ውረድ', f: 'ናብ ታሕቲ ውረዲ', x: 'ናብ ታሕቲ ውረዱ' }, // x: nieuw, nalezen
    lessonProgress: 'ምዕባለ ትምህርቲ',
    mainMenu: 'ቀንዲ ዝርዝር',
    spaceKey: 'ባዶ ቦታ',
    langNotOnPhone: { m: 'እዚ ቋንቋ ገና ኣብ ተሌፎንካ የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸብ።', f: 'እዚ ቋንቋ ገና ኣብ ተሌፎንኪ የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸቢ።', x: 'እዚ ቋንቋ ገና ኣብ ተሌፎንኩም የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸቡ።' }, // x: nieuw, nalezen
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'ባዕልኻ ሰዓት ምረጽ', f: 'ባዕልኺ ሰዓት ምረጺ', x: 'ባዕልኹም ሰዓት ምረጹ' }, // x: nieuw, nalezen
    gateWho: { m: 'መምህርካ፡ ኣሰልጣኒኻ ወይ ኣስራሒኻ እቲ ኮድ ይህበካ።', f: 'መምህርኪ፡ ኣሰልጣኒኺ ወይ ኣስራሒኺ እቲ ኮድ ይህበኪ።', x: 'መምህርኩም፡ ኣሰልጣኒኹም ወይ ኣስራሒኹም እቲ ኮድ ይህበኩም።' }, // x: nieuw, nalezen
    gateTrust: 'ኣካውንት የለን። ስም የለን። ኩሉ ኣብዚ ተሌፎን ይተርፍ።',
    codeAccepted: 'እቲ ኮድ ቅኑዕ እዩ',
    startFree: { m: 'ኮድ የብልካን? ብቀዳሞት ትምህርትታት ጀምር', f: 'ኮድ የብልክን? ብቀዳሞት ትምህርትታት ጀምሪ' },
    bramHello: { m: 'ብምርኣይካ ሕጉስ እየ።', f: 'ብምርኣይኪ ሕጉስ እየ።', x: 'ብምርኣይኩም ሕጉስ እየ።' }, // x: nieuw, nalezen
    bramBack: { m: 'እንቋዕ ብደሓን መጻእካ። ንቀጽል።', f: 'እንቋዕ ብደሓን መጻእኪ። ንቀጽል።', x: 'እንቋዕ ብደሓን መጻእኩም። ንቀጽል።' }, // x: nieuw, nalezen
    bramRested: { m: 'ትማሊ ናጻ መዓልትኻ ነይራ። ተኸታታሊ መዓልትታትካ ይቕጽል።', f: 'ትማሊ ናጻ መዓልትኺ ነይራ። ተኸታታሊ መዓልትታትኪ ይቕጽል።', x: 'ትማሊ ናጻ መዓልትኹም ነይራ። ተኸታታሊ መዓልትታትኩም ይቕጽል።' }, // x: nieuw, nalezen
    bramDueN: 'ሎሚ ዝድገማ ቃላት: {n}',
    bramDueOne: 'ሎሚ ዝድገም ቃል: {n}',
    bramDayN: 'መዓልቲ {n} ብተኸታታሊ።',
    bramDone: { m: 'ናይ ሎሚ ወዲእካ። ጽባሕ ንራኸብ።', f: 'ናይ ሎሚ ወዲእኪ። ጽባሕ ንራኸብ።', x: 'ናይ ሎሚ ወዲእኩም። ጽባሕ ንራኸብ።' }, // x: nieuw, nalezen
    bramPerfect: { m: 'ኣዝዩ ጽቡቕ። ነዘን ቃላት ትፈልጠን ኢኻ።', f: 'ኣዝዩ ጽቡቕ። ነዘን ቃላት ትፈልጥየን ኢኺ።' },
    bramGood: 'ጽቡቕ ስራሕ። ስጉምቲ ብስጉምቲ።',
    bramHard: { m: 'ምልምማድካ ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።', f: 'ምልምማድኪ ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።', x: 'ምልምማድኩም ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።' }, // x: nieuw, nalezen
    bramReview: 'ጽቡቕ። ምድጋም ንምዝካር ይሕግዝ።',
    bramIntro: { m: 'ኣነ Bram እየ፣ ብጻይ ስራሕካ።', f: 'ኣነ Bram እየ፣ ብጻይ ስራሕኪ።', x: 'ኣነ Bram እየ፣ ብጻይ ስራሕኩም።' }, // x: nieuw, nalezen
    bramIntroHello: 'ሰላም፣ ኣነ Bram እየ።',
    showDutch: 'ብሆላንድኛ ምርኣይ',
    lastUpdated: 'ዝተሓደሰሉ ዕለት: {date}',
    /* G4 b3 */
    buildListen: { m: 'ስማዕ እሞ ነቲ ሓረግ ስራሕ', f: 'ስምዒ እሞ ነቲ ሓረግ ስርሒ', x: 'ስምዑ እሞ ነቲ ሓረግ ስርሑ' }, // x: nieuw, nalezen
    chatWhichQuestion: 'ምስዚ መልሲ ዝኸይድ ኣየናይ ሕቶ እዩ?',
    reviewWaiting: 'ዝጽበዩ ዘለዉ ካልኦት ቃላት: {n}። ኣብ ዝመጽእ መዓልታት ክምለሱ እዮም።',
    factTitle: { m: 'ትፈልጥ ዲኻ?', f: 'ትፈልጢ ዲኺ?', x: 'ትፈልጡ ዲኹም?' }, // x: nieuw, nalezen
    fact3: { m: 'በይንኻ ኣይኮንካን፡ ኣብ ሆላንድ ልዕሊ 3 ሚልዮን ዓበይቲ ሰባት ምንባብ፡ ሕሳብ ወይ ኮምፒተር ይኸብዶም። ምልምማድ ይሕግዝ።', f: 'በይንኺ ኣይኮንክን፡ ኣብ ሆላንድ ልዕሊ 3 ሚልዮን ዓበይቲ ሰባት ምንባብ፡ ሕሳብ ወይ ኮምፒተር ይኸብዶም። ምልምማድ ይሕግዝ።' },
    fact7: 'ካብቶም ሆላንድኛ ኣዝዮም ጽቡቕ ዝዛረቡ ካብ ካልእ ሃገር ዝመጹ ሰባት፡ 69 ካብ 100 ደሞዝ ዘለዎ ስራሕ ኣለዎም።',
    fact14: 'ኣብ ብዙሓት ቤተ-መጻሕፍቲ Taalhuis (ገዛ ቋንቋ) ኣሎ፡ ሆላንድኛ ምምሃር ንምቕጻል ናጻ ሓገዝ።',
    fact30: { m: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኻ 30 መዓልትታት ተኸታቲልካ ተለማሚድካ!', f: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኺ 30 መዓልትታት ተኸታቲልኪ ተለማሚድኪ!', x: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኹም 30 መዓልትታት ተኸታቲልኩም ተለማሚድኩም!' }, // x: nieuw, nalezen
    /* Backup, reminder and reset, a second look */
    backupFileN: 'ኣብዚ ፋይል {n} ትምህርትታት ኣለዉ።',
    backupFileOne: 'ኣብዚ ፋይል {n} ትምህርቲ ኣሎ።',
    backupPhoneN: { m: 'ኣብ ተሌፎንካ {n} ትምህርትታት ኣለዉ።', f: 'ኣብ ተሌፎንኪ {n} ትምህርትታት ኣለዉ።', x: 'ኣብ ተሌፎንኩም {n} ትምህርትታት ኣለዉ።' }, // x: nieuw, nalezen
    backupPhoneOne: { m: 'ኣብ ተሌፎንካ {n} ትምህርቲ ኣሎ።', f: 'ኣብ ተሌፎንኪ {n} ትምህርቲ ኣሎ።', x: 'ኣብ ተሌፎንኩም {n} ትምህርቲ ኣሎ።' }, // x: nieuw, nalezen
    backupFewer: { m: '«ተክእ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብር» ኩሉ ይዕቅብ።', f: '«ተክኢ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብሪ» ኩሉ ይዕቅብ።', x: '«ተክኡ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብሩ» ኩሉ ይዕቅብ።' }, // x: nieuw, nalezen
    backupTooBig: 'እዚ ፋይል ኣዝዩ ዓቢ እዩ። ፋይል Vloertaal ብዙሕ ይንእስ።',
    backupNewPhone: { m: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድካ የድልየካ እዩ።', f: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድኪ የድልየኪ እዩ።', x: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድኩም የድልየኩም እዩ።' }, // x: nieuw, nalezen
    remindEveryDay: 'መዘኻኸሪ: መዓልታዊ ሰዓት {time}',
    remindStop: { m: 'መዘኻኸሪ ኣቋርጽ', f: 'መዘኻኸሪ ኣቋርጺ', x: 'መዘኻኸሪ ኣቋርጹ' }, // x: nieuw, nalezen
    remindStopped: { m: 'መዘኻኸሪ ካብ ካሌንደርካ ንምእላይ ነቲ ፋይል ክፈቶ።', f: 'መዘኻኸሪ ካብ ካሌንደርኪ ንምእላይ ነቲ ፋይል ክፈትዮ።' },
    remindStoppedAndroid: { m: 'መዘኻኸሪ ባዕልኻ ካብ Google ካሌንደር ኣልግሶ።', f: 'መዘኻኸሪ ባዕልኺ ካብ Google ካሌንደር ኣልግስዮ።' },
    resetKeeps: { m: 'ትምህርትታትካ፡ ቃላትካ፡ ተኸታታሊ መዓልትታትካን ምስክር ወረቐታትካን ይድምሰሱ። ቋንቋኻ፡ ኮድካን ምድላዋትካን ይጸንሑ።', f: 'ትምህርትታትኪ፡ ቃላትኪ፡ ተኸታታሊ መዓልትታትኪን ምስክር ወረቐታትኪን ይድምሰሱ። ቋንቋኺ፡ ኮድኪን ምድላዋትኪን ይጸንሑ።' },
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'ኣይተጻዕነን። ኢንተርነት ኣሎ ድዩ?',
    retry: 'ዳግማይ ምፍታን',
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: { m: 'ድሮ እንታይ ትፈልጥ?', f: 'ድሮ እንታይ ትፈልጢ?', x: 'ድሮ እንታይ ትፈልጡ?' }, // nieuw, nalezen
    toetsOffer: { m: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኻ ጥራይ እዩ።', f: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኺ ጥራይ እዩ።', x: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኹም ጥራይ እዩ።' }, // nieuw, nalezen
    toetsEndOffer: { m: 'ብዙሕ ተማሂርካ ኢኻ። ፈተና ደጊምካ ግበር፣ ሕጂ እንታይ ከም እትፈልጥ ርአ።', f: 'ብዙሕ ተማሂርኪ ኢኺ። ፈተና ደጊምኪ ግበሪ፣ ሕጂ እንታይ ከም እትፈልጢ ርአዪ።', x: 'ብዙሕ ተማሂርኩም ኢኹም። ፈተና ደጊምኩም ግበሩ፣ ሕጂ እንታይ ከም እትፈልጡ ርአዩ።' }, // nieuw, nalezen
    toetsPartListen: 'ምስማዕ', // nieuw, nalezen
    toetsPartWords: 'ቃላት', // nieuw, nalezen
    toetsPartSentences: 'ሓረጋት', // nieuw, nalezen
    toetsListenAsk: { m: 'ስማዕ። እንታይ ማለት እዩ?', f: 'ስምዒ። እንታይ ማለት እዩ?', x: 'ስምዑ። እንታይ ማለት እዩ?' }, // nieuw, nalezen
    toetsNotSure: { m: 'ኣይትፈልጥን ዲኻ? ሓደ ጥራይ ምረጽ። ጸገም የብሉን።', f: 'ኣይትፈልጥን ዲኺ? ሓደ ጥራይ ምረጺ። ጸገም የብሉን።', x: 'ኣይትፈልጡን ዲኹም? ሓደ ጥራይ ምረጹ። ጸገም የብሉን።' }, // nieuw, nalezen
    toetsMicKeep: { m: 'ቅጂኻ ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኻ ደጊምካ ክትሰምዕ ትኽእል ኢኻ።', f: 'ቅጂኺ ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኺ ደጊምኪ ክትሰምዒ ትኽእሊ ኢኺ።', x: 'ቅጂኹም ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኹም ደጊምኩም ክትሰምዑ ትኽእሉ ኢኹም።' }, // nieuw, nalezen
    toetsStartDone: { m: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጥ ኢኻ።', f: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጢ ኢኺ።', x: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጡ ኢኹም።' }, // nieuw, nalezen
    toetsEndDone: { m: 'ጽቡቕ ገይርካ! ሕጂ እንታይ ከም እትፈልጥ ርአ።', f: 'ጽቡቕ ገይርኪ! ሕጂ እንታይ ከም እትፈልጢ ርአዪ።', x: 'ጽቡቕ ገይርኩም! ሕጂ እንታይ ከም እትፈልጡ ርአዩ።' }, // nieuw, nalezen
    toetsYouThen: { m: 'ንስኻ ቅድም', f: 'ንስኺ ቅድም', x: 'ንስኹም ቅድም' }, // nieuw, nalezen
    toetsYouNow: { m: 'ንስኻ ሕጂ', f: 'ንስኺ ሕጂ', x: 'ንስኹም ሕጂ' }, // nieuw, nalezen
    toetsKeepGoing: { m: 'መዓልታዊ ቁሩብ ተለማመድ። ከምኡ ብዝያዳ ትማሃር።', f: 'መዓልታዊ ቁሩብ ተለማመዲ። ከምኡ ብዝያዳ ትማሃሪ።', x: 'መዓልታዊ ቁሩብ ተለማመዱ። ከምኡ ብዝያዳ ትማሃሩ።' }, // nieuw, nalezen
    toetsStart: { m: 'ፈተና ጀምር', f: 'ፈተና ጀምሪ', x: 'ፈተና ጀምሩ' }, // nieuw, nalezen
    tempo: 'ቅልጣፈ', // nieuw, nalezen
    tempoCalm: 'ህዱእ', // nieuw, nalezen
    tempoNormal: 'ንቡር', // nieuw, nalezen
    tempoHint: { m: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርዳእ እንተኾንካ ንቡር ምረጽ።', f: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርድኢ እንተኾንኪ ንቡር ምረጺ።', x: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርድኡ እንተኾንኩም ንቡር ምረጹ።' }, // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: { m: 'ከመይ ከም ዝኸይድ ኣርኢ', f: 'ከመይ ከም ዝኸይድ ኣርእዪ', x: 'ከመይ ከም ዝኸይድ ኣርእዩ' }, // nieuw, nalezen
    coachCardIntro: { m: 'እዛ ካርድ ምዕባለኻ ተርኢ። ንመምህርካ፡ ንኣሰልጣኒኻ ወይ ንሓላፊኻ ኣርእዮ። ንስኻ ኢኻ ትውስን።', f: 'እዛ ካርድ ምዕባለኺ ተርኢ። ንመምህርኪ፡ ንኣሰልጣኒኺ ወይ ንሓላፊኺ ኣርእይዮ። ንስኺ ኢኺ ትውስኒ።', x: 'እዛ ካርድ ምዕባለኹም ተርኢ። ንመምህርኹም፡ ንኣሰልጣኒኹም ወይ ንሓላፊኹም ኣርእዩዎ። ንስኹም ኢኹም ትውስኑ።' }, // nieuw, nalezen
    coachCardKeep: { m: 'ተሌፎንካ እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።', f: 'ተሌፎንኪ እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።', x: 'ተሌፎንኹም እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።' }, // nieuw, nalezen
    coachCardWhat: 'ኣብታ ካርድ፡ ብሆላንድኛ፦', // nieuw, nalezen
    coachTopics: 'ዝተወድኡ ኣርእስታት', // nieuw, nalezen
    coachDays: 'መዓልትታት ልምምድ ኣብ ዝሓለፉ 4 ሰሙናት', // nieuw, nalezen
    coachLast: 'ናይ መወዳእታ ትምህርቲ፡ ምስ ዕለቱ', // nieuw, nalezen
    coachNameAsk: { m: 'ስምካ ኣብታ ካርድ?', f: 'ስምኪ ኣብታ ካርድ?', x: 'ስምኩም ኣብታ ካርድ?' }, // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'ተሌፎን ይስማዕ (ፈተነ)', // nieuw, nalezen
    listenHint: { m: 'ምስ ተዛረብካ፡ እቲ ተሌፎን እንተ ተረዲኡካ ይነግረካ። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።', f: 'ምስ ተዛረብኪ፡ እቲ ተሌፎን እንተ ተረዲኡኪ ይነግረኪ። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።', x: 'ምስ ተዛረብኩም፡ እቲ ተሌፎን እንተ ተረዲኡኩም ይነግረኩም። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።' }, // nieuw, nalezen
    listenNeedsPack: { m: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐም።', f: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐሚ።', x: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐሙ።' }, // nieuw, nalezen
    listenDownload: 'ሆላንድኛ ምውራድ', // nieuw, nalezen
    listenNotNow: 'ሕጂ ኣይኮነን', // nieuw, nalezen
    listenDownloading: { m: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምካ ፈትን።', f: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምኪ ፈትኒ።', x: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምኩም ፈትኑ።' }, // nieuw, nalezen
    listenFailed: { m: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምካ ፈትን።', f: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምኪ ፈትኒ።', x: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምኩም ፈትኑ።' }, // nieuw, nalezen
    listenPrivacy: 'ተሌፎን ባዕሉ ይሰምዕ። ዋላ ሓንቲ ኣይለኣኽን።', // nieuw, nalezen
    heardWait: 'ተሌፎን ይሰምዕ ኣሎ…', // nieuw, nalezen
    heardOk: 'ተረዲኡ', // nieuw, nalezen
    heardAlmost: { m: 'ቀሪቡ፡ {word} ደጊምካ በሎ', f: 'ቀሪቡ፡ {word} ደጊምኪ በልዮ', x: 'ቀሪቡ፡ {word} ደጊምኩም በልዎ' }, // nieuw, nalezen
    heardNotYet: 'ገና ኣይተረድአን', // nieuw, nalezen
    goOnAnyway: { m: 'ብዘየገድስ ቀጽል', f: 'ብዘየገድስ ቀጽሊ', x: 'ብዘየገድስ ቀጽሉ' }, // nieuw, nalezen
    fasterAsk: { m: 'ብቕልጡፍ ክትመሃር ትደሊ ዶ?', f: 'ብቕልጡፍ ክትመሃሪ ትደልዪ ዶ?', x: 'ብቕልጡፍ ክትመሃሩ ትደልዩ ዶ?' }, // nieuw, nalezen
    fasterHint: 'ኣብ ሓደሽቲ ትምህርትታት ዝወሓደ መብርሂ። ሆላንድኛ ብንቡር ቅልጣፈ።', // nieuw, nalezen
    fasterYes: 'እወ', // nieuw, nalezen
    fasterNo: 'ኣይፋል', // nieuw, nalezen
    easierNext: 'እቲ ዝቕጽል ትምህርቲ ቁሩብ ሓጺር እዩ።', // nieuw, nalezen
    fasterSetting: 'ብቕልጡፍ ምምሃር', // nieuw, nalezen
    fasterSettingHint: 'ክፉት: ኣብ ሓደሽቲ ትምህርትታት ዝወሓደ መብርሂ፣ ሆላንድኛ ድማ ብንቡር ቅልጣፈ። ዕጹው: ከም ቀደም።', // nieuw, nalezen
    samenTitle: 'ብሓባር ምልምማድ', // nieuw, nalezen
    samenRowHint: 'ክልተ ሰባት፡ ሓደ ተሌፎን', // nieuw, nalezen
    samenIntro: { m: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመድ። ብተራ ኣንብቡ።', f: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመዲ። ብተራ ኣንብቡ።', x: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመዱ። ብተራ ኣንብቡ።' }, // nieuw, nalezen
    samenHow: 'ሰብ 1 እቲ መሳርሕቲ እዩ። ሰብ 2 ይምልስ።', // nieuw, nalezen
    samenNoScore: 'ዝኾነ ነገር ኣይቅዳሕን። ነጥቢ የለን።', // nieuw, nalezen
    samenPerson: 'ሰብ {n}', // nieuw, nalezen
    samenAnswer: 'መልሲ', // nieuw, nalezen
    samenHear: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // nieuw, nalezen
    samenNext: 'ዝቕጽል', // nieuw, nalezen
    samenTranslation: 'ትርጉም', // nieuw, nalezen
    samenEnd: 'ጽቡቕ ገይርኩም! ተራ ቀያይሩ እሞ ደጊምኩም ግበሩዎ?', // nieuw, nalezen
    samenSwap: 'ተራ ቀያይሩ', // nieuw, nalezen
    samenStop: 'ወዲእና', // nieuw, nalezen
    checkStart: 'እዚ እፈልጦ እየ፡ ሓጺር ፈተና', // nieuw, nalezen
    checkPassed: { m: 'እዚ ትፈልጦ ኢኻ። ነዚ ኣርእስቲ ክትምልክቶ ትደሊ ዶ?', f: 'እዚ ትፈልጥዮ ኢኺ። ነዚ ኣርእስቲ ክትምልክትዮ ትደልዪ ዶ?', x: 'እዚ ትፈልጥዎ ኢኹም። ነዚ ኣርእስቲ ክትምልክትዎ ትደልዩ ዶ?' }, // nieuw, nalezen
    checkNoCert: 'ሽዑ ገና ምስክር ወረቐት የለን። ድሕሪ እቶም ትምህርትታት ይመጽእ።', // nieuw, nalezen
    checkNotYet: 'እቶም ትምህርትታት ኣብዚ ኣርእስቲ ይሕግዙ።', // nieuw, nalezen
    checkMark: { m: 'ምልክት ግበር', f: 'ምልክት ግበሪ', x: 'ምልክት ግበሩ' }, // nieuw, nalezen
    checkVia: 'ብፈተና', // nieuw, nalezen
    checkUndo: { m: 'ግን ነቶም ትምህርትታት ግበሮም', f: 'ግን ነቶም ትምህርትታት ግበርዮም', x: 'ግን ነቶም ትምህርትታት ግበሩዎም' }, // nieuw, nalezen
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'ቀዳሞት ስጉምትታት',
    'theme.safe': 'ብድሕንነት ምስራሕ',
    'theme.find': 'ስራሕ ምርካብ',
    'theme.job': { m: 'ስራሕካ', f: 'ስራሕኪ', x: 'ስራሕኩም' },
    'theme.together': 'ብሓባር ምስራሕ',
    'theme.rights': { m: 'መሰላትካ', f: 'መሰላትኪ', x: 'መሰላትኩም' },
    'theme.life': 'ህይወት ኣብ ሆላንድ',
    'theme.sector': { m: 'ዓውዲ ስራሕካ', f: 'ዓውዲ ስራሕኪ', x: 'ዓውዲ ስራሕኩም' },
    // Units
    'u.firstday': 'ቀዳማይ መዓልቲ ስራሕ',
    'u.help': 'ሓገዝ ምሕታት',
    'u.safety': 'ድሕንነት ቅድሚ ኩሉ',
    'u.warehouse': 'ኣብ መኽዘን',
    'u.time': 'ግዜን መደብ ስራሕን',

    // Lessons
    'l.hello': { m: 'ሰላም በል', f: 'ሰላም በሊ', x: 'ሰላም በሉ' }, // x: nieuw, nalezen
    'l.people': 'ሰባት ኣብ ስራሕ',
    'l.understand': 'ኣይተረድኣንን',
    'l.gear': 'ናይ ድሕንነት ክዳውንትን መሳርሒታትን',
    'l.danger': 'ሓደጋ!',
    'l.accident': 'ሓደጋ ምሕባር',
    'l.things': 'ኣቑሑ መኽዘን',
    'l.directions': 'ኣንፈታትን ተግባራትን',
    'l.shift': 'ፈረቓ ስራሐይ (ሺፍት)',
    'l.sick': 'ሕማም ምሕባር',

    // Words
    'w.hallo': 'ሰላም',
    'w.goedemorgen': { m: 'ከመይ ሓዲርካ', f: 'ከመይ ሓዲርኪ', x: 'ከመይ ሓዲርኩም' },
    'w.dankjewel': 'የቐንየለይ',
    'w.ja': 'እወ',
    'w.nee': 'ኣይፋል',
    'w.totmorgen': 'ጽባሕ ክንራኸብ',
    'w.collega': 'ብጻይ ስራሕ',
    'w.baas': 'ሓላፊ',
    'w.leidinggevende': 'ተቖጻጻሪ',
    'w.werk': 'ስራሕ',
    'w.naam': 'ስም',
    'w.nieuw': 'ሓድሽ',
    'w.begrijpniet': 'ኣይተረድኣንን',
    'w.nogeenkeer': 'ሓንሳብ ደጊም',
    'w.langzaam': 'ብቐስታ',
    'w.helpen': 'ምሕጋዝ',
    'w.waar': 'ኣበይ',
    'w.wc': 'ሽቓቕ',
    'w.helm': 'መከላኸሊ ርእሲ (ሄልመት)',
    'w.handschoenen': 'ጓንቲ',
    'w.veiligheidsschoenen': 'ናይ ድሕንነት ጫማ',
    'w.hesje': 'ናይ ድሕንነት ጃኬት (ዘንጸባርቕ)',
    'w.bril': 'ናይ ድሕንነት መነጽር',
    'w.dragen': 'ምኽዳን',
    'w.pasop': { m: 'ተጠንቀቕ', f: 'ተጠንቀቒ', x: 'ተጠንቀቑ' },
    'w.stop': { m: 'ጠጠው በል', f: 'ጠጠው በሊ', x: 'ጠጠው በሉ' },
    'w.help': 'ሓግዙ!',
    'w.brand': 'ሓዊ',
    'w.nooduitgang': 'ናይ ህጹጽ ግዜ መውጽኢ',
    'w.ongeluk': 'ሓደጋ',
    'w.gewond': 'ዝተጎድአ',
    'w.bloeden': 'ምድማይ',
    'w.ehbodoos': 'ሳጹን ቀዳማይ ረዲኤት',
    'w.bhver': 'ኣብ ትካል ናይ ህጹጽ ሓገዝ ሰብ (ቀዳማይ ረዲኤት፡ ሓዊ፡ ካብ ህንጻ ምውጻእ)',
    'w.ziekenhuis': 'ሆስፒታል',
    'w.gebeuren': 'ምግጣም (ምኽሳት)',
    'w.doos': 'ሳጹን',
    'w.pallet': 'ፓለት',
    'w.heftruck': 'ፎርክሊፍት',
    'w.kar': 'ናይ ኢድ ዓረብያ',
    'w.stelling': 'መደርደሪ',
    'w.scanner': 'ስካነር',
    'w.links': 'ጸጋም',
    'w.rechts': 'የማን',
    'w.boven': 'ላዕሊ',
    'w.beneden': 'ታሕቲ',
    'w.tillen': 'ምልዓል',
    'w.pakken': 'ምውሳድ',
    'w.dienst': 'ፈረቓ ስራሕ (ሺፍት)',
    'w.pauze': 'ዕረፍቲ',
    'w.beginnen': 'ምጅማር',
    'w.klaar': 'ተወዲኡ',
    'w.telaat': 'ምድንጓይ',
    'w.morgen': 'ጽባሕ',
    'w.ziek': { m: 'ሕሙም', f: 'ሕምምቲ', x: 'ሕሙም / ሕምምቲ' },
    'w.bellen': 'ምድዋል (ብተሌፎን)',
    'w.dokter': 'ሓኪም',
    'w.pijn': 'ቃንዛ',
    'w.vandaag': 'ሎሚ',
    'w.beter': 'ዝሓሸ',

    // Sentences
    's.hello.1': { m: 'ሰላም፡ ኣነ ሓድሽ እየ።', f: 'ሰላም፡ ኣነ ሓዳስ እየ።' },
    's.hello.2': 'ከመይ ሓዲርኩም፡ ኣነ ዓሊ እየ።',
    's.hello.3': 'የቐንየለይ፡ ጽባሕ ክንራኸብ!',
    's.people.1': 'ስመይ ሳራ እዩ።',
    's.people.2': 'ሓላፊ መን እዩ?',
    's.people.3': { m: 'ኣነ ሓድሽ ብጻይ ስራሕ እየ።', f: 'ኣነ ሓዳስ ብጸይቲ ስራሕ እየ።' },
    's.understand.1': 'ክትደግምዎ ትኽእሉ ዶ?',
    's.understand.2': 'ቀስ ኢልኩም ክትዛረቡ ትኽእሉ ዶ?',
    's.understand.3': 'ሽቓቕ ኣበይ ኣሎ?',
    's.gear.1': { m: 'ኩሉ ግዜ መከላኸሊ ርእስኻ ግበር።', f: 'ኩሉ ግዜ መከላኸሊ ርእስኺ ግበሪ።', x: 'ኩሉ ግዜ መከላኸሊ ርእስኹም ግበሩ።' },
    's.gear.2': 'ጓንቲ ኣበይ ኣሎ?',
    's.gear.3': 'ናይ ድሕንነት ጃኬተይ ለቢሰ ኣለኹ።',
    's.danger.1': { m: 'ተጠንቀቕ፡ መሬት ጠሊሉ እዩ!', f: 'ተጠንቀቒ፡ መሬት ጠሊሉ እዩ!', x: 'ተጠንቀቑ፡ መሬት ጠሊሉ እዩ!' },
    's.danger.2': 'ናይ ህጹጽ ግዜ መውጽኢ ኣበይ ኣሎ?',
    's.danger.3': 'ሓደጋ ኣሎ!',
    's.accident.1': 'ብጻይ ስራሐይ ወዲቑ።',
    's.accident.2': 'ተቖሪጸ።',
    's.accident.3': 'ሓደጋ ክሕብር እደሊ።',
    's.things.1': { m: 'ነቲ ሳጹን ኣብ ፓለት ኣቐምጦ።', f: 'ነቲ ሳጹን ኣብ ፓለት ኣቐምጥዮ።' },
    's.things.2': 'ስካነር ኣበይ ኣሎ?',
    's.things.3': 'ፎርክሊፍት ይመጽእ ኣሎ።',
    's.directions.1': 'እቲ ሳጹን ኣብ ጸጋም ኣሎ።',
    's.directions.2': { m: 'ብእግርካ ተሓጊዝካ ኣልዕል።', f: 'ብእግርኪ ተሓጊዝኪ ኣልዕሊ።', x: 'ብእግርኹም ተሓጊዝኩም ኣልዕሉ።' },
    's.directions.3': { m: 'ናብ የማን ኪድ።', f: 'ናብ የማን ኪዲ።', x: 'ናብ የማን ኪዱ።' }, // x: nieuw, nalezen
    's.shift.1': 'ፈረቓ ስራሐይ ሰዓት 7:00 ይጅምር።',
    's.shift.2': 'ዕረፍቲ መዓስ እዩ?',
    's.shift.3': 'ይቕሬታ፡ ደንጒየ።',
    's.sick.1': { m: 'ሎሚ ሕሙም እየ።', f: 'ሎሚ ሕምምቲ እየ።' },
    's.sick.2': 'ሕቖይ ይቃንዘኒ ኣሎ።',
    's.sick.3': 'ናብ ሓኪም እድውል ኣለኹ።',
    'c.hello.q': 'ጽቡቕ ምሸት!',
    'c.hello.a': 'ጽባሕ ክንራኸብ!',
    'c.people.q': { m: 'ስምካ መን እዩ?', f: 'ስምኪ መን እዩ?', x: 'ስምኩም መን እዩ?' }, // x: nieuw, nalezen
    'c.people.a': 'ስመይ ሳራ እዩ።',
    'l.arrive': 'ቀዳመይቲ መዓልቲ፡ መገዲ ምርካብ',
    'w.ingang': 'መእተዊ',
    'w.receptie': 'መቐበሊ ኣጋይሽ (ረሰፕሽን)',
    'w.kantine': 'መመገቢ ሰራሕተኛታት (ካንቲን)',
    'w.kleedkamer': 'ክፍሊ ምቕያር ክዳን',
    'w.buddy': 'ሓጋዚ ብጻይ (ኣብ መጀመርታ ዝሕግዝ ብጻይ ስራሕ)',
    'w.vinden': 'ምርካብ',
    's.arrive.1': 'ናብ መን እየ ክቐርብ ዘለኒ?',
    's.arrive.2': 'ክፍሊ ምቕያር ክዳን ክረኽቦ ኣይከኣልኩን።',
    's.arrive.3': 'ሎሚ ሓጋዚ ብጻየይ መን እዩ?',
    'c.arrive.q': 'ደሓን ሓዲርኩም፡ ብምንታይ ጉዳይ ኢኹም መጺእኹም?',
    'c.arrive.a': { m: 'ሓድሽ እየ። ሎሚ እጅምር።', f: 'ሓዳስ እየ። ሎሚ እጅምር።' },
    'c.understand.q': { m: 'ተረዲኡካ ድዩ?', f: 'ተረዲኡኪ ድዩ?', x: 'ተረዲኡኩም ድዩ?' }, // x: nieuw, nalezen
    'c.understand.a': 'ኣይፋል፣ በጃኻ ሓንሳብ ደጊምካ።',
    'c.gear.q': { m: 'ሄልመትካ ኣለካ ድዩ?', f: 'ሄልመትኪ ኣለኪ ድዩ?', x: 'ሄልመትኩም ኣለኩም ድዩ?' }, // x: nieuw, nalezen
    'c.gear.a': 'እወ፣ ገይረዮ ኣለኹ።',
    'c.danger.q': 'ሓደጋ ኣሎ ድዩ?',
    'c.danger.a': 'እወ፣ ናብ 112 ደውል!',
    'c.accident.q': 'እንታይ ኣጋጢሙ?',
    'c.accident.a': 'ወዲቑ። ይደምይ ኣሎ።',
    'l.notyet': 'እዚ ገና ኣይተማሃርክዎን',
    'w.nogniet': 'ገና',
    'w.mogen': 'ፍቓድ ምርካብ (ይፍቀደኒ)',
    'w.proberen': 'ምፍታን',
    'w.voordoen': 'ብተግባር ምርኣይ (ቅድም ገይሩ ምርኣይ)',
    'w.gevaarlijk': 'ሓደገኛ',
    'w.uitleg': 'መብርሂ',
    's.notyet.1': 'እዚ ገና ኣይተማሃርክዎን።',
    's.notyet.2': 'ገና መብርሂ ኣይረኸብኩን።',
    's.notyet.3': 'እዚ ሕጂ በይነይ ክገብሮ ይፍቀደለይ ድዩ?',
    'c.notyet.q': { m: 'ፈትኖ ጥራይ፡ ቀሊል እዩ።', f: 'ፈትንዮ ጥራይ፡ ቀሊል እዩ።' },
    'c.notyet.a': 'ቅድም ገይርካ ከተርእየኒ ትኽእል ዲኻ?',
    'c.things.q': 'እዚ ሳጹን ናበይ ይኸይድ?',
    'c.things.a': 'ኣብ ልዕሊ ፓለት።',
    'c.directions.q': 'ጸጋም ዶ የማን?',
    'c.directions.a': 'የማን፣ ኣብ ጥቓ መደርደሪ።',
    'c.shift.q': { m: 'ፈረቓኻ መዓስ ይጅምር?', f: 'ፈረቓኺ መዓስ ይጅምር?', x: 'ፈረቓኹም መዓስ ይጅምር?' }, // x: nieuw, nalezen
    'c.shift.a': 'ጽባሕ ሰዓት 7:00።',
    'c.sick.q': { m: 'ሓሚምካ ዲኻ?', f: 'ሓሚምኪ ዲኺ?', x: 'ሓሚምኩም ዲኹም?' }, // x: nieuw, nalezen
    'c.sick.a': 'እወ፣ ሎሚ ኣብ ገዛ እጸንሕ።',
    // Emergency phrases (phrasebook only)
    'p.call112': { m: 'ናብ 112 ደውል!', f: 'ናብ 112 ደውሊ!', x: 'ናብ 112 ደውሉ!' },
    'p.hurt': 'ተጎዲአ ኣለኹ።',
  },
};

export default lang;
