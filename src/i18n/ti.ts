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
    themeSand: 'ሑጻ', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'ወደብ', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'ናይ ስራሕ ጃኬት', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'ጸልማት',
    voice: 'ድምጺ ሆላንድኛ',
    voiceAuto: 'ብባዕሉ',
    voiceHint: { m: 'ንምስማዕ 🔊 ጠውቕ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንካ እዮም ዝመጹ።', f: 'ንምስማዕ 🔊 ጠውቒ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንኪ እዮም ዝመጹ።', x: 'ንምስማዕ 🔊 ጠውቑ። ድምጽታት Vloertaal ኣብ ነፍሲ ወከፍ ተሌፎን ሓደ ዓይነት እዮም፡ እቶም ካልኦት ካብ ተሌፎንኩም እዮም ዝመጹ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    voiceNone: { m: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንካ (Text-to-speech) ክትውስኽ ትኽእል ኢኻ።', f: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንኪ (Text-to-speech) ክትውስኺ ትኽእሊ ኢኺ።', x: 'ኣብዚ መሳርሒ ድምጺ ሆላንድኛ የለን። ኣብ ምድላዋት ተሌፎንኩም (Text-to-speech) ክትውስኹ ትኽእሉ ኢኹም።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    appTagline: 'ሆላንድኛ ንቦታ ስራሕ',
    chooseLanguage: { m: 'ቋንቋ ሓገዝካ ምረጽ', f: 'ቋንቋ ሓገዝኪ ምረጺ', x: 'ቋንቋ ሓገዝኩም ምረጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    englishOnly: 'እንግሊዝኛ ጥራይ',
    beta: 'ትርጉም ገና ኣይተመርመረን', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: 'ተኸታታሊ መዓልትታት',
    streakStarted: { m: 'ተኸታታሊ መዓልትታትካ ጀሚርካ! ጽባሕ ተመለስ።', f: 'ተኸታታሊ መዓልትታትኪ ጀሚርኪ! ጽባሕ ተመለሲ።', x: 'ተኸታታሊ መዓልትታትኩም ጀሚርኩም! ጽባሕ ተመለሱ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    streakGrew: { m: '{n} ተኸታታሊ መዓልትታት! ቀጽል።', f: '{n} ተኸታታሊ መዓልትታት! ቀጽሊ።', x: '{n} ተኸታታሊ መዓልትታት! ቀጽሉ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    start: { m: 'ጀምር', f: 'ጀምሪ', x: 'ጀምሩ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    practice: { m: 'ደጊምካ ተለማመድ', f: 'ደጊምኪ ተለማመዲ', x: 'ደጊምኩም ተለማመዱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    locked: { m: 'ቅድም ነቲ ዝቐደመ ትምህርቲ ወድኦ', f: 'ቅድም ነቲ ዝቐደመ ትምህርቲ ወድእዮ' },
    newWord: 'ሓድሽ ቃል',
    tapToHear: { m: 'ክትሰምዕ ጠውቕ', f: 'ክትሰምዒ ጠውቒ', x: 'ክትሰምዑ ጠውቑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    sayItAloud: { m: 'ብዓው ኢልካ በሎ።', f: 'ብዓው ኢልኪ በልዮ።', x: 'ብዓው ኢልኩም በልዎ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: { m: 'ቀስ ኢልካ በሎ፡ ወይ ኣብ ሓሳብካ።', f: 'ቀስ ኢልኪ በልዮ፡ ወይ ኣብ ሓሳብኪ።', x: 'ቀስ ኢልኩም በልዎ፡ ወይ ኣብ ሓሳብኩም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'እዚ እንታይ ማለት እዩ?',
    snapQuestion: { m: 'ተረዲኡካ ድዩ?', f: 'ተረዲኡኪ ድዩ?', x: 'ተረዲኡኩም ድዩ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'እወ፣ ሕራይ።', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: { m: 'ምሕታትካ ጽቡቕ እዩ!', f: 'ምሕታትኪ ጽቡቕ እዩ!', x: 'ምሕታትኩም ጽቡቕ እዩ!' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: { m: 'ብግቡእ ተረዲኡካ!', f: 'ብግቡእ ተረዲኡኪ!', x: 'ብግቡእ ተረዲኡኩም!' }, // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: { m: 'ርኢኻ? ምሕታት ይሓይሽ ነይሩ።', f: 'ርኢኺ? ምሕታት ይሓይሽ ነይሩ።', x: 'ርኢኹም? ምሕታት ይሓይሽ ነይሩ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'ኣየናይ እዩ «{word}»?',
    mixLesson: 'ዝተሓዋወሰ ድግግም',
    whatDoYouHear: { m: 'እንታይ ትሰምዕ ኣለኻ?', f: 'እንታይ ትሰምዒ ኣለኺ?', x: 'እንታይ ትሰምዑ ኣለኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    buildSentence: { m: 'ነዚ ሓረግ ብሆላንድኛ ስራሕ', f: 'ነዚ ሓረግ ብሆላንድኛ ስርሒ', x: 'ነዚ ሓረግ ብሆላንድኛ ስርሑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    typeWhatYouHear: { m: 'ዝሰማዕካዮ ጽሓፍ', f: 'ዝሰማዕክዮ ጽሓፊ' },
    check: { m: 'ኣረጋግጽ', f: 'ኣረጋግጺ', x: 'ኣረጋግጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    continue: { m: 'ቀጽል', f: 'ቀጽሊ', x: 'ቀጽሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    correct: 'ኣዝዩ ጽቡቕ!',
    almost: { m: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቕ', f: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቒ', x: 'ቅኑዕ እዩ፡ ግን ኣብ ኣጸሓሕፋ ተጠንቀቑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    incorrect: 'ገና ኣይኮነን',
    correctAnswer: 'ቅኑዕ መልሲ',
    rightAnswerIs: 'ቅኑዕ መልሲ እዚ እዩ፦', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'ዝበለጸ መልሲ እዚ እዩ፦', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: { m: 'መልስኻ', f: 'መልስኺ', x: 'መልስኹም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    inARow: '{n} ብተኸታታሊ',
    cantListen: 'ሕጂ ክሰምዕ ኣይክእልን',
    learnWriting: 'ምጽሓፍ እውን ክመሃር እደሊ',
    learnWritingHint: { m: 'ክፉት: ዝሰማዕካዮም ቃላት ብፊደላት ጽሓፍ። ዕጹው: ዝሰማዕካዮ ቃል ብጽሑፍ ምረጽ።', f: 'ክፉት: ዝሰማዕክዮም ቃላት ብፊደላት ጽሓፊ። ዕጹው: ዝሰማዕክዮ ቃል ብጽሑፍ ምረጺ።' },
    tagRepeat: { m: 'ደጊምካ', f: 'ደጊምኪ', x: 'ደጊምኩም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    readAloud: { m: 'ብድምጺ ኣንብብ', f: 'ብድምጺ ኣንብቢ', x: 'ብድምጺ ኣንብቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    lessonComplete: 'ትምህርቲ ተወዲኡ!',
    phrasebook: 'ናይ ህጹጽ ግዜ ሓረጋት',
    phrasebookHint: { m: 'ክትሰምዖ ኣብ ሓረግ ጠውቕ። ስክሪንካ ንብጻይካ ከተርኢ እውን ትኽእል ኢኻ።', f: 'ክትሰምዕዮ ኣብ ሓረግ ጠውቒ። ስክሪንኪ ንብጻይኪ ከተርእዪ እውን ትኽእሊ ኢኺ።' },
    whoToCall: 'ኣብ ስራሕ ጸገም ኣሎ ድዩ? መን ክሕግዝ ይኽእል',
    who112: 'ህጹጽ፡ ሓደጋ ህይወት፡ ሓዊ ወይ ሕጂ ዝፍጸም ገበን።',
    whoLegal: 'ብዛዕባ ውዕል፡ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ብናጻ ምኽሪ።',
    whoInspection: 'ዘይውሑስ ስራሕ፡ ዝወሓደ ደሞዝ ወይ ምዝመዛ ንምሕባር። ብዘይ ስም እውን ይከኣል።',
    whoFairwork: 'ኣብ ስራሕ ምዝመዛ ምስ ዘሎ፡ ወይ ጥርጣረ ምስ ዘሎ።',
    who113: 'ሓሳብ ምቁራጽ ህይወት ምስ ዘሎ፡ ወይ ስክፍታ ብዛዕባ ካልእ ሰብ ምስ ዘሎ። ብነጻ፡ ለይትን መዓልትን።', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'ኣብ ገዛ ዓመጽ ወይ በደል ምስ ዘሎ፡ ኣብ ካልእ ሰብ እውን። ብነጻ፡ ስም ከይተሃበ እውን ይከኣል።', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'ምድላዋት',
    helpLanguage: 'ቋንቋ ሓገዝ',
    resetProgress: { m: 'ምዕባለይ ደምስስ', f: 'ምዕባለይ ደምስሲ', x: 'ምዕባለይ ደምስሱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    resetConfirm: 'ኣብዚ መሳርሒ ዘሎ ኩሉ ምዕባለ ይደምሰስ ዶ?',
    audioUnavailable: 'ኣብዚ መሳርሒ ድምጺ የለን።',
    slow: 'ቀስ ኢሉ',
    completeChat: { m: 'ዝርርብ ኣማልእ', f: 'ዝርርብ ኣማልኢ', x: 'ዝርርብ ኣማልኡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    meaning: 'ትርጉም',
    navRoute: 'ትምህርትታት',
    navWords: 'ሓገዝ',
    rightFirstTime: 'ብቐዳማይ ፈተነ ቅኑዕ',
    newWords: 'ሓደሽቲ ቃላት',
    wordsLearnedN: { m: '{n} ቃላት ተማሂርካ', f: '{n} ቃላት ተማሂርኪ', x: '{n} ቃላት ተማሂርኩም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    practiseMistakes: { m: 'ጌጋታት ደጊምካ ተለማመድ · {n} ተሪፉ', f: 'ጌጋታት ደጊምኪ ተለማመዲ · {n} ተሪፉ', x: 'ጌጋታት ደጊምኩም ተለማመዱ · {n} ተሪፉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    quitHint: { m: 'መልስታትካ ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።', f: 'መልስታትኪ ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።', x: 'መልስታትኩም ኣብዚ ትምህርቲ ኣይዕቀብን እዩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    keepGoing: { m: 'ቀጽል', f: 'ቀጽሊ', x: 'ቀጽሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    stopLesson: { m: 'ትምህርቲ ደው ኣብል', f: 'ትምህርቲ ደው ኣብሊ', x: 'ትምህርቲ ደው ኣብሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fullVersion: 'ምሉእ ቨርዥን',
    unlockFull: { m: 'ምሉእ ቨርዥን ክፈት', f: 'ምሉእ ቨርዥን ክፈቲ', x: 'ምሉእ ቨርዥን ክፈቱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    unlockHint: { m: 'ብኮድ ኩሉ ትምህርትታት ይኽፈት። እቲ ኮድ ብነጻ እዩ። ገና ኮድ የብልካን? መምህርካ ወይ ኣማኻሪኻ ሕተት፡ ወይ ኢመይል ስደደልና፡', f: 'ብኮድ ኩሉ ትምህርትታት ይኽፈት። እቲ ኮድ ብነጻ እዩ። ገና ኮድ የብልክን? መምህርኪ ወይ ኣማኻሪኺ ሕተቲ፡ ወይ ኢመይል ስደድልና፡' },
    codeNotFull: { m: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተት።', f: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተቲ።', x: 'እዚ ኮድ ነቲ ምሉእ ቨርዥን ኣይከፍቶን። ሓድሽ ኮድ ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    password: 'ኮድ',
    enterPassword: { m: 'እቲ ኮድ ኣእቱ', f: 'እቲ ኮድ ኣእትዊ' },
    wrongPassword: { m: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምካ ፈትን።', f: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምኪ ፈትኒ።', x: 'እቲ ኮድ ቅኑዕ ኣይኮነን። ደጊምኩም ፈትኑ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    unlock: { m: 'ክፈት', f: 'ክፈቲ', x: 'ክፈቱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    sector: { m: 'ስራሕካ', f: 'ስራሕኪ', x: 'ስራሕኩም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    chooseSector: { m: 'ኣበይ ኢኻ ትሰርሕ?', f: 'ኣበይ ኢኺ ትሰርሒ?', x: 'ኣበይ ኢኹም ትሰርሑ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: { m: 'ኣብ ኣየናይ ሃገር ኢኻ ትሰርሕ?', f: 'ኣብ ኣየናይ ሃገር ኢኺ ትሰርሒ?', x: 'ኣብ ኣየናይ ሃገር ኢኹም ትሰርሑ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    // nagelezen (2e lezing)
    countryHint: { m: 'ቃላትን ምኽርታትን ናይታ ሃገር ክትረክብ ኢኻ።', f: 'ቃላትን ምኽርታትን ናይታ ሃገር ክትረኽቢ ኢኺ።', x: 'ቃላትን ምኽርታትን ናይታ ሃገር ክትረኽቡ ኢኹም።' }, // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: { m: 'ምዕባለኻ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ።', f: 'ምዕባለኺ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ።', x: 'ምዕባለኹም ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ።' }, // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: { m: 'ኩሉ ግዜ ነዚ ተሌፎን ተጠቐም።', f: 'ኩሉ ግዜ ነዚ ተሌፎን ተጠቐሚ።', x: 'ኩሉ ግዜ ነዚ ተሌፎን ተጠቐሙ።' }, // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
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
    sectorRetail: 'ድኳንን ሱፐርማርኬትን', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'ጽሬት',
    sectorHorticulture: "ሕርሻ ኣትክልትን ገዛ ኣትክልትን", // nagelezen (2e lezing)
    sectorTechnical: 'ቴክኒካዊ ስራሕ', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'ጋራጅ', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'ድምጺ',
    soundOn: 'ድምጺ ክፉት',
    withoutSound: 'ብዘይ ድምጺ',
    quietHint: { m: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቕ፡ ንኣብነት ብኢርፎን።', f: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቒ፡ ንኣብነት ብኢርፎን።', x: 'ብዘይ ድምጺ፡ ኣብ ትምህርትታት ናይ ምስማዕ ሕቶታት የለን፡ ዋላ ሓደ ነገር ድማ ባዕሉ ኣይጻወትን። ሓደ ቃል ንምስማዕ 🔊 ጠውቑ፡ ንኣብነት ብኢርፎን።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    soundOffToast: { m: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍት ትኽእል ኢኻ።', f: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍቲ ትኽእሊ ኢኺ።', x: 'ብዘይ ድምጺ። ኣብ ምድላዋት ድምጺ ክትከፍቱ ትኽእሉ ኢኹም።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    noInternetSound: 'ኢንተርነት የለን: ድምጺ ሕጂ ኣይሰርሕን ኣሎ።', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'ሎሚ ገና ይተርፍ',
    streakStopped: { m: 'ተኸታታሊ መዓልትታትካ ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምካ ጀምር።', f: 'ተኸታታሊ መዓልትታትኪ ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምኪ ጀምሪ።', x: 'ተኸታታሊ መዓልትታትኩም ኣብ {n} መዓልትታት ደው ኢሉ። ሎሚ ደጊምኩም ጀምሩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    recordN: { m: 'ዝበለጸ ውጽኢትካ: {n} መዓልትታት', f: 'ዝበለጸ ውጽኢትኪ: {n} መዓልትታት', x: 'ዝበለጸ ውጽኢትኩም: {n} መዓልትታት' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    workWeek: { m: 'ናይ ስራሕ ሰሙንካ', f: 'ናይ ስራሕ ሰሙንኪ', x: 'ናይ ስራሕ ሰሙንኩም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    freeDaysN: { m: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድካ፡ ተኸታታሊ መዓልትታትካ ይቕጽል።', f: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድኪ፡ ተኸታታሊ መዓልትታትኪ ይቕጽል።', x: 'ናጻ መዓልትታት: {n}። ሓንቲ መዓልቲ እንተ ዘይተለማመድኩም፡ ተኸታታሊ መዓልትታትኩም ይቕጽል።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    restDay: 'ናጻ መዓልቲ',
    tier3: '3 መዓልትታት ብተኸታታሊ',
    tier7: '1 ሰሙን ብተኸታታሊ',
    tier14: '2 ሰሙናት ብተኸታታሊ',
    tier30: '1 ወርሒ ብተኸታታሊ',
    reviewDone: 'ናይ ሎሚ ተወዲኡ',
    tomorrowN: 'ጽባሕ: {n} ቃላት',
    firstWordsTomorrow: { m: 'ጽባሕ ቀዳሞት ቃላትካ ይምለሳ', f: 'ጽባሕ ቀዳሞት ቃላትኪ ይምለሳ', x: 'ጽባሕ ቀዳሞት ቃላትኩም ይምለሳ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    extraRound: 'ተወሳኺ ዙርያ',
    reviewFirstHint: { m: 'ቅድም ድገም። ከምኡ ዝያዳ ትዝክር።', f: 'ቅድም ድገሚ። ከምኡ ዝያዳ ትዝክሪ።', x: 'ቅድም ድገሙ። ከምኡ ዝያዳ ትዝክሩ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: '{n} ቃላት ዝሓየላ',
    noMistakes: 'ብዘይ ጌጋ',
    nextUp: 'ዝቕጽል',
    installTitle: { m: 'Vloertaal ኣብ ቀንዲ ስክሪንካ ኣቐምጦ', f: 'Vloertaal ኣብ ቀንዲ ስክሪንኪ ኣቐምጥዮ' },
    installHint: 'ሽዑ ከም ኣፕ ይኽፈት፡ ብዘይ ኢንተርነት እውን።',
    installAdd: { m: 'ኣብ ቀንዲ ስክሪን ወስኽ', f: 'ኣብ ቀንዲ ስክሪን ወስኺ', x: 'ኣብ ቀንዲ ስክሪን ወስኹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    iosStep1: { m: 'Share ጠውቕ', f: 'Share ጠውቒ', x: 'Share ጠውቑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    iosStep2: { m: '«Add to Home Screen» ጠውቕ', f: '«Add to Home Screen» ጠውቒ', x: '«Add to Home Screen» ጠውቑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    iosStep3: 'ተወዲኡ!',
    backupTitle: { m: 'ምዕባለኻ ዓቅብ', f: 'ምዕባለኺ ዓቅቢ', x: 'ምዕባለኹም ዓቅቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupHint: { m: 'ምዕባለኻ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ። ከም ፋይል ዓቅቦ፡ ንኣብነት ንሓድሽ ተሌፎን።', f: 'ምዕባለኺ ኣብዚ ተሌፎን ጥራይ እዩ ዘሎ። ከም ፋይል ዓቅብዮ፡ ንኣብነት ንሓድሽ ተሌፎን።' },
    backupSave: { m: 'ኣውርድ', f: 'ኣውርዲ', x: 'ኣውርዱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupLoad: { m: 'ካብ ፋይል መልሶ', f: 'ካብ ፋይል መልስዮ' },
    backupBad: 'እዚ ናይ Vloertaal ፋይል ኣይኮነን።',
    backupAsk: { m: 'እዚ ፋይል ኣብ ምዕባለኻ ክትውስኾ ዲኻ፡ ወይስ ምዕባለኻ ክትትክኦ?', f: 'እዚ ፋይል ኣብ ምዕባለኺ ክትውስኽዮ ዲኺ፡ ወይስ ምዕባለኺ ክትትክእዮ?' },
    backupMerge: { m: 'ሓብር', f: 'ሓብሪ', x: 'ሓብሩ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupReplace: { m: 'ተክእ', f: 'ተክኢ', x: 'ተክኡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupBack: { m: 'ምዕባለኻ ተመሊሱ።', f: 'ምዕባለኺ ተመሊሱ።', x: 'ምዕባለኹም ተመሊሱ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupNothingNew: { m: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንካ ነይሩ።', f: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንኪ ነይሩ።', x: 'ሓድሽ ነገር የለን፡ እዚ ድሮ ኣብ ተሌፎንኩም ነይሩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    cancel: { m: 'ሰርዝ', f: 'ሰርዚ', x: 'ሰርዙ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindTitle: 'መዓልታዊ ኣዘኻኽረኒ',
    remindEvent: 'ግዜ ንሆላንድኛ (10 ደቓይቕ)',
    remindHint: { m: 'ካሌንደር ተሌፎንካ የዘኻኽረካ። ናባና ዝለኣኽ ነገር የለን።', f: 'ካሌንደር ተሌፎንኪ የዘኻኽረኪ። ናባና ዝለኣኽ ነገር የለን።', x: 'ካሌንደር ተሌፎንኩም የዘኻኽረኩም። ናባና ዝለኣኽ ነገር የለን።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindBefore: 'ቅድሚ ስራሕ',
    remindAfter: 'ድሕሪ ስራሕ',
    remindOwn: 'ካልእ ሰዓት',
    remindAdd: { m: 'ኣብ ካሌንደረይ ወስኽ', f: 'ኣብ ካሌንደረይ ወስኺ', x: 'ኣብ ካሌንደረይ ወስኹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindAdded: { m: 'ናብ ካሌንደርካ ንምውሳኽ ነቲ ፋይል ክፈቶ።', f: 'ናብ ካሌንደርኪ ንምውሳኽ ነቲ ፋይል ክፈትዮ።' },
    remindAddedAsk: 'ተወሲኹ ድዩ? ሽዑ ኣብ ካሌንደር ይርአ።', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'ሓበሬታ',
    tagMeaning: 'ትርጉም',
    tagPick: { m: 'ምረጽ', f: 'ምረጺ', x: 'ምረጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tagListen: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tagType: { m: 'ጽሓፍ', f: 'ጽሓፊ', x: 'ጽሓፉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
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
    countHint: 'እቲ ኣፕ ትምህርትታት ክንደይ ግዜ ከም ዝውዳእን ብግምት ክንደይ ከም ዝወስድን ይቖጽር። ከምኡ’ውን ኣብቲ ኣፕ ጌጋ እንተ ኣጋጢሙ ይቖጽር። ስም የለን፡ ኣካውንት የለን፡ ምክትታል የለን።', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certificate: 'ምስክር ወረቐት',
    myCertificates: 'ምስክር ወረቐታተይ',
    certsEmpty: { m: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድእ። ሽዑ ምስክር ወረቐት ትረኽብ።', f: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድኢ። ሽዑ ምስክር ወረቐት ትረኽቢ።', x: 'ኩሉ ትምህርትታት ሓደ ክፍሊ ወድኡ። ሽዑ ምስክር ወረቐት ትረኽቡ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certEarned: { m: 'ምስክር ወረቐት ረኺብካ!', f: 'ምስክር ወረቐት ረኺብኪ!', x: 'ምስክር ወረቐት ረኺብኩም!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certEarnedHint: { m: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእካ።', f: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእኪ።', x: 'ኩሉ ትምህርትታት ናይዚ ክፍሊ ወዲእኩም።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certView: { m: 'ርአ', f: 'ርኣዪ' },
    certLater: 'ደሓር',
    certPrint: { m: 'ሕተም ወይ ከም PDF ዓቅብ', f: 'ሕተሚ ወይ ከም PDF ዓቅቢ', x: 'ሕተሙ ወይ ከም PDF ዓቅቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certSaved: 'እቲ ስእሊ ተዓቂቡ።',
    certNameHint: { m: 'ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ባዶ ክትገድፎ ትኽእል ኢኻ።', f: 'ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ባዶ ክትገድፍዮ ትኽእሊ ኢኺ።' },
    certChangeName: { m: 'ስም ቀይር', f: 'ስም ቀይሪ', x: 'ስም ቀይሩ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certPractice: 'ናይ ልምምድ ምስክር ወረቐት እዩ፡ ወግዓዊ ዲፕሎማ ኣይኮነን',
    resumeLesson: { m: 'ትምህርቲ ቀጽል', f: 'ትምህርቲ ቀጽሊ', x: 'ትምህርቲ ቀጽሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    restartLesson: { m: 'ካብ መጀመርታ ጀምር', f: 'ካብ መጀመርታ ጀምሪ', x: 'ካብ መጀመርታ ጀምሩ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    quitKept: { m: 'ዝገበርካዮ ይዕቀብ እዩ። ደሓር ክትቅጽል ትኽእል ኢኻ።', f: 'ዝገበርክዮ ይዕቀብ እዩ። ደሓር ክትቅጽሊ ትኽእሊ ኢኺ።' },
    bestAnswer: 'ዝበለጸ መልሲ',
    inReview: 'ይምርመር ኣሎ',
    today: 'ሎሚ',
    playAgain: { m: 'ደጊምካ ስማዕ', f: 'ደጊምኪ ስምዒ', x: 'ደጊምኩም ስምዑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    daysUnitOne: 'መዓልቲ',
    wordsUnitOne: 'ቃል',
    wordsLearnedOne: { m: '{n} ቃል ተማሂርካ', f: '{n} ቃል ተማሂርኪ', x: '{n} ቃል ተማሂርኩም' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    tomorrowOne: 'ጽባሕ: {n} ቃል',
    wordsStrongerOne: '{n} ቃል ዝሓየለ',
    recordOne: { m: 'ዝበለጸ ውጽኢትካ: {n} መዓልቲ', f: 'ዝበለጸ ውጽኢትኪ: {n} መዓልቲ', x: 'ዝበለጸ ውጽኢትኩም: {n} መዓልቲ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    streakStoppedOne: { m: 'ተኸታታሊ መዓልትታትካ ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምካ ጀምር።', f: 'ተኸታታሊ መዓልትታትኪ ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምኪ ጀምሪ።', x: 'ተኸታታሊ መዓልትታትኩም ኣብ {n} መዓልቲ ደው ኢሉ። ሎሚ ደጊምኩም ጀምሩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    letterTiles: 'ፊደላት',
    useKeyboard: 'ኪቦርድ',
    skippedN: '{n} ተሰጊሩ፡ ኣይተቖጽረን',
    stampLater: 'ደሓር ክምለስ እዩ',
    stampDone: 'ተወዲኡ',
    chooseNext: { m: 'ዝቕጽል ኣርእስቲ ምረጽ', f: 'ዝቕጽል ኣርእስቲ ምረጺ', x: 'ዝቕጽል ኣርእስቲ ምረጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    recommended: 'ዝምከር',
    allTopics: 'ኩሎም ኣርእስትታት',
    topicsOrder: 'ኣርእስትታት ምርኣይ',
    privacyLink: 'መግለጺ ብሕትውና ምንባብ (ብሆላንድኛ)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    routeTitle: 'እንታይ ክትመሃሩ ትደልዩ?', // nieuw, nalezen (een vraag, de x-vorm) // nagelezen AI 28 nov
    routeLearn: 'ንስራሕ ሆላንድኛ ምምሃርን ስራሕ ኣብዚ ከመይ ከም ዝኸይድን', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'ሆላንድኛ እዛረብ እየ፡ ሕግታት ስራሕ ጥራይ', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'ሆላንድኛ ምምሃር', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'ናብ Werkregels ምቕያር?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'ኩሉ ብሆላንድኛ ክኸውን እዩ። ቋንቋ ሓገዝ ደው ይብል።', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'ክሳብ እትምለሱ፡ ቃላት ዘይኮነስ ሕግታት ኢኹም እትደግሙ።', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'ምዕባለኹም ተዓቂቡ ይጸንሕ። ካብዚ ክትምለሱ ትኽእሉ ኢኹም።', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'እወ፡ ናብ Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'ብክፍልታት',
    inOrder: 'ብቕደም ሰዓብ',
    searchTopics: 'ምድላይ ኣርእስቲ', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'በዚ ቃል ዝኾነ ኣርእስቲ የለን።', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: 'ትምህርትታት',
    lessonsUnitOne: 'ትምህርቲ',
    topicsUnit: 'ኣርእስትታት',
    topicsUnitOne: 'ኣርእስቲ',
    allTopicsDone: { m: 'ኩሎም ኣርእስትታት ወዲእካ። ጽቡቕ ስራሕ!', f: 'ኩሎም ኣርእስትታት ወዲእኪ። ጽቡቕ ስራሕ!', x: 'ኩሎም ኣርእስትታት ወዲእኩም። ጽቡቕ ስራሕ!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    // Speaking practice
    tagSpeak: { m: 'ተዛረብ', f: 'ተዛረቢ', x: 'ተዛረቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    speakPrompt: { m: 'ስማዕ፣ ድሕሪኡ በሎ', f: 'ስምዒ፣ ድሕሪኡ በልዮ' },
    tapToSpeak: { m: 'ጠውቕ እሞ ተዛረብ', f: 'ጠውቒ እሞ ተዛረቢ', x: 'ጠውቑ እሞ ተዛረቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    stopRecording: { m: 'ደው ኣብል', f: 'ደው ኣብሊ', x: 'ደው ኣብሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    micPrivacy: { m: "ካልእ ሰብ ኣይሰምዓካን። ዋላ ሓንቲ ኣይለኣኽን።", f: "ካልእ ሰብ ኣይሰምዓክን። ዋላ ሓንቲ ኣይለኣኽን።", x: "ካልእ ሰብ ኣይሰምዓኩምን። ዋላ ሓንቲ ኣይለኣኽን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: { m: 'ማይክሮፎን ጠፊኡ ኣሎ። ሕጂ ብዓው ኢልካ በሎ፡ ድሕሪኡ ቀጽል።', f: 'ማይክሮፎን ጠፊኡ ኣሎ። ሕጂ ብዓው ኢልኪ በልዮ፡ ድሕሪኡ ቀጽሊ።' },
    cantSpeak: 'ሕጂ ክዛረብ ኣይክእልን',
    soundsSame: 'ሓደ ዓይነት ይስማዕ',
    sayAgain: { m: 'ደጊምካ በሎ', f: 'ደጊምኪ በልዮ' },
    hearMine: { m: 'ንርእስኻ ስማዕ', f: 'ንርእስኺ ስምዒ' }, // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'ቅድምን ሕጅን', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: { m: 'ቀዳማይ ፈተነኻ: {date}', f: 'ቀዳማይ ፈተነኺ: {date}', x: 'ቀዳማይ ፈተነኹም: {date}' }, // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: { m: "ብሓባር በሎ", f: "ብሓባር በልዮ", x: "ብሓባር በልዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: { m: "ምስቲ ድምጺ ብሓንሳብ በሎ። ዋላ ሓንቲ ኣይቅዳሕን።", f: "ምስቲ ድምጺ ብሓንሳብ በልዮ። ዋላ ሓንቲ ኣይቅዳሕን።", x: "ምስቲ ድምጺ ብሓንሳብ በልዎ። ዋላ ሓንቲ ኣይቅዳሕን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: { m: "ሕጂ ንስኻ በይንኻ", f: "ሕጂ ንስኺ በይንኺ", x: "ሕጂ ንስኹም በይንኹም" }, // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "ጌጋታት ክፋል ናይ ምምሃር እዮም። ኣይተረድኡኹምን? ሓንሳብ ደጊምኩም በልዎ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave2: "ትሻቐሉ ዶ? እዚ ንቡር እዩ። ግን በልዎ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave3: "ብፍጹም ክትብልዎ የብልኩምን። ፈትኑ ጥራይ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonTitle: "ስለምንታይ ኢኹም ሆላንድኛ ትመሃሩ?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonHint: "ሓደ ወይ ክልተ ምረጹ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonDone: "ተወዲኡ", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "ስራሐይ ብጽቡቕ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "ደቀይ", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "ምስ መሳርሕተይ ምዝራብ", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "ነገራት ባዕለይ ምፍጻም", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "ዝሓሸ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "ኣብ ሆላንድ ከም ገዛይ ምስማዕ", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'ኣነ',
    speakingPractice: 'ልምምድ ምዝራብ',
    speakingHint: { m: "ቃላት ብዓው ኢልካ በሎም እሞ ኣወዳድር። ካልእ ሰብ ኣይሰምዓካን፡ ዋላ ሓንቲ ኣይለኣኽን። ቀዳማይ ቅዳሕ ድምጽካ ናይ ሓንቲ ሓረግ ኣብ ተሌፎንካ ይጸንሕ፣ ደሓር ንምውድዳር።", f: "ቃላት ብዓው ኢልኪ በልዮም እሞ ኣወዳድሪ። ካልእ ሰብ ኣይሰምዓክን፡ ዋላ ሓንቲ ኣይለኣኽን። ቀዳማይ ቅዳሕ ድምጽኪ ናይ ሓንቲ ሓረግ ኣብ ተሌፎንኪ ይጸንሕ፣ ደሓር ንምውድዳር።", x: "ቃላት ብዓው ኢልኩም በልዎም እሞ ኣወዳድሩ። ካልእ ሰብ ኣይሰምዓኩምን፡ ዋላ ሓንቲ ኣይለኣኽን። ቀዳማይ ቅዳሕ ድምጽኩም ናይ ሓንቲ ሓረግ ኣብ ተሌፎንኩም ይጸንሕ፣ ደሓር ንምውድዳር።" }, // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'ይዕቀብ ኣሎ…',
    savedOffline: 'ኣብዚ ተሌፎን ተዓቂቡ', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    offlineNoSpace: { m: 'ኣብዚ ተሌፎን እኹል ቦታ የለን። ዝተዓቀበ ኣርእስቲ ኣልግስ ወይ ቦታ ኣጽሪ።', f: 'ኣብዚ ተሌፎን እኹል ቦታ የለን። ዝተዓቀበ ኣርእስቲ ኣልግሲ ወይ ቦታ ኣጽርዪ።' },
    offlineFailed: { m: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትካ ኣረጋግጽ እሞ ደጊምካ ፈትን።', f: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትኪ ኣረጋግጺ እሞ ደጊምኪ ፈትኒ።', x: 'ምዕቃብ ኣይሰለጠን። ኢንተርነትኩም ኣረጋግጹ እሞ ደጊምኩም ፈትኑ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    pocketCard: 'ናይ ጁባ ካርድ',
    pocketSave: { m: 'ከም ስእሊ ዓቅብ', f: 'ከም ስእሊ ዓቅቢ', x: 'ከም ስእሊ ዓቅቡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
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
    sectorGroupCare: "ክንክንን ቈልዑን", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'ድኳንን ቤት ብልዕን', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'ህንጻን ቴክኒክን', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'ድምጺ ሰበይቲ',
    voiceMan: 'ድምጺ ሰብኣይ',
    writingPick: 'ቃል ምምራጽ',
    settingWriting: 'ምጽሓፍ',
    settingKeepLessons: 'ትምህርትታት ኣብዚ ተሌፎን ምዕቃብ',
    settingKeepLessonsHint: 'እቲ ሕጂ ዘሎ ኣርእስቲ ኣብዚ ተሌፎን ይዕቀብ፣ ስለዚ ብዘይ ኢንተርነት እውን ይሰርሕ። ዝተወደኡ ኣርእስትታት ድማ ይእለዩ።',
    otherTopicLink: 'ካልእ ኣርእስቲ',
    remindAsk: { m: 'መዓልታዊ ነዘኻኽረካ ዶ?', f: 'መዓልታዊ ነዘኻኽረኪ ዶ?', x: 'መዓልታዊ ነዘኻኽረኩም ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindYes: 'እወ፡ ድሕሪ ስራሕ',
    remindNo: 'ኣይፋል፡ የቐንየለይ',
    remindPickTime: { m: 'መዓስ ነዘኻኽረካ?', f: 'መዓስ ነዘኻኽረኪ?', x: 'መዓስ ነዘኻኽረኩም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    certSaveShare: { m: 'ዓቅብ ወይ ኣካፍል', f: 'ዓቅቢ ወይ ኣካፍሊ', x: 'ዓቅቡ ወይ ኣካፍሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    pauseTitle: 'ዕረፍቲ',
    back: 'ንድሕሪት',
    quitLesson: { m: 'ካብ ትምህርቲ ውጻእ', f: 'ካብ ትምህርቲ ውጽኢ', x: 'ካብ ትምህርቲ ውጽኡ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    playAudio: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    scrollDown: { m: 'ናብ ታሕቲ ውረድ', f: 'ናብ ታሕቲ ውረዲ', x: 'ናብ ታሕቲ ውረዱ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    lessonProgress: 'ምዕባለ ትምህርቲ',
    mainMenu: 'ቀንዲ ዝርዝር',
    spaceKey: 'ባዶ ቦታ',
    langNotOnPhone: { m: 'እዚ ቋንቋ ገና ኣብ ተሌፎንካ የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸብ።', f: 'እዚ ቋንቋ ገና ኣብ ተሌፎንኪ የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸቢ።', x: 'እዚ ቋንቋ ገና ኣብ ተሌፎንኩም የለን። ቋንቋ ንምቕያር ምስ ኢንተርነት ተራኸቡ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: { m: 'ባዕልኻ ሰዓት ምረጽ', f: 'ባዕልኺ ሰዓት ምረጺ', x: 'ባዕልኹም ሰዓት ምረጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    gateWho: { m: 'መምህርካ፡ ኣሰልጣኒኻ ወይ ኣስራሒኻ እቲ ኮድ ይህበካ።', f: 'መምህርኪ፡ ኣሰልጣኒኺ ወይ ኣስራሒኺ እቲ ኮድ ይህበኪ።', x: 'መምህርኩም፡ ኣሰልጣኒኹም ወይ ኣስራሒኹም እቲ ኮድ ይህበኩም።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    gateTrust: 'ኣካውንት የለን። ስም የለን። ኩሉ ኣብዚ ተሌፎን ይተርፍ።',
    codeAccepted: 'እቲ ኮድ ቅኑዕ እዩ',
    startFree: { m: 'ኮድ የብልካን? ብቀዳሞት ትምህርትታት ጀምር', f: 'ኮድ የብልክን? ብቀዳሞት ትምህርትታት ጀምሪ' },
    bramHello: { m: 'ብምርኣይካ ሕጉስ እየ።', f: 'ብምርኣይኪ ሕጉስ እየ።', x: 'ብምርኣይኩም ሕጉስ እየ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramBack: { m: 'እንቋዕ ብደሓን መጻእካ። ንቀጽል።', f: 'እንቋዕ ብደሓን መጻእኪ። ንቀጽል።', x: 'እንቋዕ ብደሓን መጻእኩም። ንቀጽል።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramRested: { m: 'ትማሊ ናጻ መዓልትኻ ነይራ። ተኸታታሊ መዓልትታትካ ይቕጽል።', f: 'ትማሊ ናጻ መዓልትኺ ነይራ። ተኸታታሊ መዓልትታትኪ ይቕጽል።', x: 'ትማሊ ናጻ መዓልትኹም ነይራ። ተኸታታሊ መዓልትታትኩም ይቕጽል።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramDueN: 'ሎሚ ዝድገማ ቃላት: {n}',
    bramDueOne: 'ሎሚ ዝድገም ቃል: {n}',
    bramDayN: 'መዓልቲ {n} ብተኸታታሊ።',
    bramDone: { m: 'ናይ ሎሚ ወዲእካ። ጽባሕ ንራኸብ።', f: 'ናይ ሎሚ ወዲእኪ። ጽባሕ ንራኸብ።', x: 'ናይ ሎሚ ወዲእኩም። ጽባሕ ንራኸብ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramPerfect: { m: 'ኣዝዩ ጽቡቕ። ነዘን ቃላት ትፈልጠን ኢኻ።', f: 'ኣዝዩ ጽቡቕ። ነዘን ቃላት ትፈልጥየን ኢኺ።' },
    bramGood: 'ጽቡቕ ስራሕ። ስጉምቲ ብስጉምቲ።',
    bramHard: { m: 'ምልምማድካ ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።', f: 'ምልምማድኪ ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።', x: 'ምልምማድኩም ጽቡቕ እዩ። ከበድቲ ቃላት ተመሊሰን ይመጻ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramReview: 'ጽቡቕ። ምድጋም ንምዝካር ይሕግዝ።',
    bramIntro: { m: 'ኣነ Bram እየ፣ ብጻይ ስራሕካ።', f: 'ኣነ Bram እየ፣ ብጻይ ስራሕኪ።', x: 'ኣነ Bram እየ፣ ብጻይ ስራሕኩም።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    bramIntroHello: 'ሰላም፣ ኣነ Bram እየ።',
    showDutch: 'ብሆላንድኛ ምርኣይ',
    showAnswers: 'መልስታት ምርኣይ', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'ዝተሓደሰሉ ዕለት: {date}',
    /* G4 b3 */
    buildListen: { m: 'ስማዕ እሞ ነቲ ሓረግ ስራሕ', f: 'ስምዒ እሞ ነቲ ሓረግ ስርሒ', x: 'ስምዑ እሞ ነቲ ሓረግ ስርሑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    chatWhichQuestion: 'ምስዚ መልሲ ዝኸይድ ኣየናይ ሕቶ እዩ?',
    reviewWaiting: 'ዝጽበዩ ዘለዉ ካልኦት ቃላት: {n}። ኣብ ዝመጽእ መዓልታት ክምለሱ እዮም።',
    factTitle: { m: 'ትፈልጥ ዲኻ?', f: 'ትፈልጢ ዲኺ?', x: 'ትፈልጡ ዲኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    fact3: { m: 'በይንኻ ኣይኮንካን፡ ኣብ ሆላንድ ልዕሊ 3 ሚልዮን ዓበይቲ ሰባት ምንባብ፡ ሕሳብ ወይ ኮምፒተር ይኸብዶም። ምልምማድ ይሕግዝ።', f: 'በይንኺ ኣይኮንክን፡ ኣብ ሆላንድ ልዕሊ 3 ሚልዮን ዓበይቲ ሰባት ምንባብ፡ ሕሳብ ወይ ኮምፒተር ይኸብዶም። ምልምማድ ይሕግዝ።' },
    fact7: 'ካብቶም ሆላንድኛ ኣዝዮም ጽቡቕ ዝዛረቡ ካብ ካልእ ሃገር ዝመጹ ሰባት፡ 69 ካብ 100 ደሞዝ ዘለዎ ስራሕ ኣለዎም።',
    fact14: 'ኣብ ብዙሓት ቤተ-መጻሕፍቲ Taalhuis (ገዛ ቋንቋ) ኣሎ፡ ሆላንድኛ ምምሃር ንምቕጻል ናጻ ሓገዝ።',
    fact30: { m: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኻ 30 መዓልትታት ተኸታቲልካ ተለማሚድካ!', f: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኺ 30 መዓልትታት ተኸታቲልኪ ተለማሚድኪ!', x: 'መዓልታዊ ቁሩብ ምልምማድ ካብ ሓሓሊፉ ብዙሕ ምልምማድ ይሓይሽ። ንስኹም 30 መዓልትታት ተኸታቲልኩም ተለማሚድኩም!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: 'ኣብዚ ፋይል {n} ትምህርትታት ኣለዉ።',
    backupFileOne: 'ኣብዚ ፋይል {n} ትምህርቲ ኣሎ።',
    backupPhoneN: { m: 'ኣብ ተሌፎንካ {n} ትምህርትታት ኣለዉ።', f: 'ኣብ ተሌፎንኪ {n} ትምህርትታት ኣለዉ።', x: 'ኣብ ተሌፎንኩም {n} ትምህርትታት ኣለዉ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupPhoneOne: { m: 'ኣብ ተሌፎንካ {n} ትምህርቲ ኣሎ።', f: 'ኣብ ተሌፎንኪ {n} ትምህርቲ ኣሎ።', x: 'ኣብ ተሌፎንኩም {n} ትምህርቲ ኣሎ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupFewer: { m: '«ተክእ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብር» ኩሉ ይዕቅብ።', f: '«ተክኢ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብሪ» ኩሉ ይዕቅብ።', x: '«ተክኡ» ኣብቲ ፋይል ዘየለዉ ትምህርትታት ይድምስስ። «ሓብሩ» ኩሉ ይዕቅብ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    backupTooBig: 'እዚ ፋይል ኣዝዩ ዓቢ እዩ። ፋይል Vloertaal ብዙሕ ይንእስ።',
    backupNewPhone: { m: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድካ የድልየካ እዩ።', f: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድኪ የድልየኪ እዩ።', x: 'ሓድሽ ተሌፎን? ኣብኡ እውን ኮድኩም የድልየኩም እዩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindEveryDay: 'መዘኻኸሪ: መዓልታዊ ሰዓት {time}',
    remindStop: { m: 'መዘኻኸሪ ኣቋርጽ', f: 'መዘኻኸሪ ኣቋርጺ', x: 'መዘኻኸሪ ኣቋርጹ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    remindStopped: { m: 'መዘኻኸሪ ካብ ካሌንደርካ ንምእላይ ነቲ ፋይል ክፈቶ።', f: 'መዘኻኸሪ ካብ ካሌንደርኪ ንምእላይ ነቲ ፋይል ክፈትዮ።' },
    remindStoppedAndroid: { m: 'መዘኻኸሪ ባዕልኻ ካብ Google ካሌንደር ኣልግሶ።', f: 'መዘኻኸሪ ባዕልኺ ካብ Google ካሌንደር ኣልግስዮ።' },
    resetKeeps: { m: 'ትምህርትታትካ፡ ቃላትካ፡ ተኸታታሊ መዓልትታትካን ምስክር ወረቐታትካን ይድምሰሱ። ቋንቋኻን ምድላዋትካን ይጸንሑ።', f: 'ትምህርትታትኪ፡ ቃላትኪ፡ ተኸታታሊ መዓልትታትኪን ምስክር ወረቐታትኪን ይድምሰሱ። ቋንቋኺን ምድላዋትኪን ይጸንሑ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'ኣይተጻዕነን። ኢንተርነት ኣሎ ድዩ?',
    retry: 'ዳግማይ ምፍታን',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal ክጅምር ኣይከኣለን።', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: { m: 'መጀመርታ ምዕባለኻ ዓቅብ። ድሕሪኡ ካብ መጀመርታ ጀምር።', f: 'መጀመርታ ምዕባለኺ ዓቅቢ። ድሕሪኡ ካብ መጀመርታ ጀምሪ።', x: 'መጀመርታ ምዕባለኹም ዓቅቡ። ድሕሪኡ ካብ መጀመርታ ጀምሩ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    startOver: { m: 'ካብ መጀመርታ ጀምር', f: 'ካብ መጀመርታ ጀምሪ', x: 'ካብ መጀመርታ ጀምሩ' }, // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'ገለ ጸገም ኣጋጢሙ። ምዕባለኹም ተዓቂቡ ኣሎ።', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: { m: 'ድሮ እንታይ ትፈልጥ?', f: 'ድሮ እንታይ ትፈልጢ?', x: 'ድሮ እንታይ ትፈልጡ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: { m: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኻ ጥራይ እዩ።', f: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኺ ጥራይ እዩ።', x: 'ኣስታት 10 ደቒቕ። ነጥቢ የለን። ንዓኹም ጥራይ እዩ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: { m: 'ብዙሕ ተማሂርካ ኢኻ። ፈተና ደጊምካ ግበር፣ ሕጂ እንታይ ከም እትፈልጥ ርአ።', f: 'ብዙሕ ተማሂርኪ ኢኺ። ፈተና ደጊምኪ ግበሪ፣ ሕጂ እንታይ ከም እትፈልጢ ርኣዪ።', x: 'ብዙሕ ተማሂርኩም ኢኹም። ፈተና ደጊምኩም ግበሩ፣ ሕጂ እንታይ ከም እትፈልጡ ርኣዩ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsPartListen: 'ምስማዕ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'ቃላት', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'ሓረጋት', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: { m: 'ስማዕ። እንታይ ማለት እዩ?', f: 'ስምዒ። እንታይ ማለት እዩ?', x: 'ስምዑ። እንታይ ማለት እዩ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: { m: 'ኣይትፈልጥን ዲኻ? «ኣይፈልጥን» ጠውቕ። ጸገም የብሉን።', f: 'ኣይትፈልጢን ዲኺ? «ኣይፈልጥን» ጠውቒ። ጸገም የብሉን።', x: 'ኣይትፈልጡን ዲኹም? «ኣይፈልጥን» ጠውቑ። ጸገም የብሉን።' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    toetsMicKeep: { m: 'ቅዳሕ ድምጽኻ ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኻ ደጊምካ ክትሰምዕ ትኽእል ኢኻ።', f: 'ቅዳሕ ድምጽኺ ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኺ ደጊምኪ ክትሰምዒ ትኽእሊ ኢኺ።', x: 'ቅዳሕ ድምጽኹም ኣብዚ ተሌፎን ጥራይ ይጸንሕ። ድሕሪኡ ድምጽኹም ደጊምኩም ክትሰምዑ ትኽእሉ ኢኹም።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsStartDone: { m: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጥ ኢኻ።', f: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጢ ኢኺ።', x: 'ጽቡቕ ጅማሮ! ድሮ እዚ ትፈልጡ ኢኹም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: { m: 'ጽቡቕ ገይርካ! ሕጂ እንታይ ከም እትፈልጥ ርአ።', f: 'ጽቡቕ ገይርኪ! ሕጂ እንታይ ከም እትፈልጢ ርኣዪ።', x: 'ጽቡቕ ገይርኩም! ሕጂ እንታይ ከም እትፈልጡ ርኣዩ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsYouThen: { m: 'ንስኻ ቅድም', f: 'ንስኺ ቅድም', x: 'ንስኹም ቅድም' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: { m: 'ንስኻ ሕጂ', f: 'ንስኺ ሕጂ', x: 'ንስኹም ሕጂ' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: { m: 'መዓልታዊ ቁሩብ ተለማመድ። ከምኡ ብዝያዳ ትማሃር።', f: 'መዓልታዊ ቁሩብ ተለማመዲ። ከምኡ ብዝያዳ ትማሃሪ።', x: 'መዓልታዊ ቁሩብ ተለማመዱ። ከምኡ ብዝያዳ ትማሃሩ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: { m: 'ፈተና ጀምር', f: 'ፈተና ጀምሪ', x: 'ፈተና ጀምሩ' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'ኣይፈልጥን', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'ካብ ቅድሚ ይበዝሕ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'ዳርጋ ሓደ ዓይነት', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: { m: 'ኩሉ ብሓባር: ሕጂ ካብ ቅድሚ ዝያዳ ትፈልጥ ኢኻ።', f: 'ኩሉ ብሓባር: ሕጂ ካብ ቅድሚ ዝያዳ ትፈልጢ ኢኺ።', x: 'ኩሉ ብሓባር: ሕጂ ካብ ቅድሚ ዝያዳ ትፈልጡ ኢኹም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'ኩሉ ብሓባር: ዳርጋ ከም ቅድሚ።', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: { m: 'መጀመርታ 5 ሕቶታት ብዛዕባኻ። ቅኑዕ ወይ ጌጋ የለን።', f: 'መጀመርታ 5 ሕቶታት ብዛዕባኺ። ቅኑዕ ወይ ጌጋ የለን።', x: 'መጀመርታ 5 ሕቶታት ብዛዕባኹም። ቅኑዕ ወይ ጌጋ የለን።' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: { m: 'እዚ ክትገብር ትደፍር ዲኻ?', f: 'እዚ ክትገብሪ ትደፍሪ ዲኺ?', x: 'እዚ ክትገብሩ ትደፍሩ ዲኹም?' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: { m: 'ገለ ከም ዘይተረደኣካ ምዝራብ', f: 'ገለ ከም ዘይተረደኣኪ ምዝራብ', x: 'ገለ ከም ዘይተረደኣኩም ምዝራብ' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: { m: 'ንሓላፊኻ ገለ ምሕታት', f: 'ንሓላፊኺ ገለ ምሕታት', x: 'ንሓላፊኹም ገለ ምሕታት' }, // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'ሓገዝ ምሕታት', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'ገለ ውሑስ ከም ዘይኮነ ምዝራብ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'ኣብ ዕረፍቲ ምስ መሳርሕቲ ቁሩብ ምዝራብ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'ገና', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'ቁሩብ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'እወ', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'ድሕሪ ቁሩብ ሰሙናት ደጊምና ክንሓትት ኢና።', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'ቅልጣፈ', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'ህዱእ', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'ንቡር', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: { m: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርዳእ እንተኾንካ ንቡር ምረጽ።', f: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርድኢ እንተኾንኪ ንቡር ምረጺ።', x: 'ህዱእ ቀስ ዝበለን ንጹርን እዩ። ንቡር ከም ዘረባ ብጾት ስራሕ እዩ። ብዙሕ ትርድኡ እንተኾንኩም ንቡር ምረጹ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: { m: 'ከመይ ከም ዝኸይድ ኣርኢ', f: 'ከመይ ከም ዝኸይድ ኣርእዪ', x: 'ከመይ ከም ዝኸይድ ኣርእዩ' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: { m: 'እዛ ካርድ ምዕባለኻ ተርኢ። ንመምህርካ፡ ንኣሰልጣኒኻ ወይ ንሓላፊኻ ኣርእዮ። ንስኻ ኢኻ ትውስን።', f: 'እዛ ካርድ ምዕባለኺ ተርኢ። ንመምህርኪ፡ ንኣሰልጣኒኺ ወይ ንሓላፊኺ ኣርእይዮ። ንስኺ ኢኺ ትውስኒ።', x: 'እዛ ካርድ ምዕባለኹም ተርኢ። ንመምህርኹም፡ ንኣሰልጣኒኹም ወይ ንሓላፊኹም ኣርእዩዎ። ንስኹም ኢኹም ትውስኑ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: { m: 'ኣይፋልን ክትብል እውን ትኽእል ኢኻ።', f: 'ኣይፋልን ክትብሊ እውን ትኽእሊ ኢኺ።', x: 'ኣይፋልን ክትብሉ እውን ትኽእሉ ኢኹም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: { m: 'ተሌፎንካ እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።', f: 'ተሌፎንኪ እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።', x: 'ተሌፎንኹም እያ ነታ ካርድ ትሰርሓ። ዝኾነ ነገር ኣይለኣኽን። Vloertaal ዝኾነ ነገር ኣይዕቅብን።' }, // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'ኣብታ ካርድ፡ ብሆላንድኛ፦', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'ዝተወድኡ ኣርእስታት', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'መዓልትታት ልምምድ ኣብ ዝሓለፉ 4 ሰሙናት', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'ናይ መወዳእታ ትምህርቲ፡ ምስ ዕለቱ', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'ኮድ፡ ተመሳሳሊ ቁጽርታት ብሓጺሩ፡ ንሓፈሻዊ መግለጺ ጉጅለ። ብዘይ ስም።', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'ተሌፎን ይስማዕ (ፈተነ)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: { m: 'ምስ ተዛረብካ፡ እቲ ተሌፎን እንተ ተረዲኡካ ይነግረካ። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።', f: 'ምስ ተዛረብኪ፡ እቲ ተሌፎን እንተ ተረዲኡኪ ይነግረኪ። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።', x: 'ምስ ተዛረብኩም፡ እቲ ተሌፎን እንተ ተረዲኡኩም ይነግረኩም። እዚ ኣብቲ ተሌፎን ባዕሉ እዩ ዝኸውን። ናባና ወይ ናብ ካልኦት ዋላ ሓንቲ ኣይለኣኽን።' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: { m: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐም።', f: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐሚ።', x: 'እቲ ተሌፎን መጀመርታ ሆላንድኛ የድልዮ። ዓቢ ምውራድ እዩ፡ ዋይፋይ ተጠቐሙ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'ሆላንድኛ ምውራድ', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'ሕጂ ኣይኮነን', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: { m: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምካ ፈትን።', f: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምኪ ፈትኒ።', x: 'ሆላንድኛ ይመጽእ ኣሎ። ደሓር ደጊምኩም ፈትኑ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: { m: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምካ ፈትን።', f: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምኪ ፈትኒ።', x: 'ኣይሰለጠን። ደሓር ብዋይፋይ ደጊምኩም ፈትኑ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'ተሌፎን ባዕሉ ይሰምዕ። ዋላ ሓንቲ ኣይለኣኽን።', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'ተሌፎን ይሰምዕ ኣሎ…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'ተረዲኡ', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: { m: 'ቀሪቡ፡ {word} ደጊምካ በሎ', f: 'ቀሪቡ፡ {word} ደጊምኪ በልዮ', x: 'ቀሪቡ፡ {word} ደጊምኩም በልዎ' }, // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'ገና ኣይተረድአን', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: { m: 'ብዘየገድስ ቀጽል', f: 'ብዘየገድስ ቀጽሊ', x: 'ብዘየገድስ ቀጽሉ' }, // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: { m: 'ብቕልጡፍ ክትመሃር ትደሊ ዶ?', f: 'ብቕልጡፍ ክትመሃሪ ትደልዪ ዶ?', x: 'ብቕልጡፍ ክትመሃሩ ትደልዩ ዶ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'ኣብ ሓደሽቲ ትምህርትታት ዝወሓደ መብርሂ። ሆላንድኛ ብንቡር ቅልጣፈ።', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'እወ', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'ኣይፋል', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'እቲ ዝቕጽል ትምህርቲ ቁሩብ ሓጺር እዩ።', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'ብቕልጡፍ ምምሃር', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'ክፉት: ኣብ ሓደሽቲ ትምህርትታት ዝወሓደ መብርሂ፣ ሆላንድኛ ድማ ብንቡር ቅልጣፈ። ዕጹው: ከም ቀደም።', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: { m: 'ብዛዕባ Vloertaal እንታይ ትሓስብ?', f: 'ብዛዕባ Vloertaal እንታይ ትሓስቢ?', x: 'ብዛዕባ Vloertaal እንታይ ትሓስቡ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'ጽቡቕ', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'ማእከላይ', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'ጽቡቕ ኣይኮነን', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'የቐንየልና! እዚ Vloertaal ንምምሕያሽ ይሕግዘና።', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'ብቕልጡፍ ምምሃር: ኣብ ሓደሽቲ ትምህርትታት ዝወሓደ መብርሂ፣ ሆላንድኛ ድማ ብንቡር ቅልጣፈ።', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'ብሓባር ምልምማድ', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'ክልተ ሰባት፡ ሓደ ተሌፎን', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: { m: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመድ። ብተራ ኣንብቡ።', f: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመዲ። ብተራ ኣንብቡ።', x: 'ምስ መሳርሕቲ፡ ዓርኪ ወይ መምህር ተለማመዱ። ብተራ ኣንብቡ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'ሰብ 1 እቲ መሳርሕቲ እዩ። ሰብ 2 ይምልስ።', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'ዝኾነ ነገር ኣይቅዳሕን። ነጥቢ የለን።', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'ሰብ {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'መልሲ', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: { m: 'ስማዕ', f: 'ስምዒ', x: 'ስምዑ' }, // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'ዝቕጽል', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'ትርጉም', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'ጽቡቕ ገይርኩም! ተራ ቀያይሩ እሞ ደጊምኩም ግበሩዎ?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'ተራ ቀያይሩ', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'ወዲእና', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'እዚ እፈልጦ እየ፡ ሓጺር ፈተና', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: { m: 'እዚ ትፈልጦ ኢኻ። ነዚ ኣርእስቲ ክትምልክቶ ትደሊ ዶ?', f: 'እዚ ትፈልጥዮ ኢኺ። ነዚ ኣርእስቲ ክትምልክትዮ ትደልዪ ዶ?', x: 'እዚ ትፈልጥዎ ኢኹም። ነዚ ኣርእስቲ ክትምልክትዎ ትደልዩ ዶ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'ሽዑ ገና ምስክር ወረቐት የለን። ድሕሪ እቶም ትምህርትታት ይመጽእ።', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'እቶም ትምህርትታት ኣብዚ ኣርእስቲ ይሕግዙ።', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: { m: 'ምልክት ግበር', f: 'ምልክት ግበሪ', x: 'ምልክት ግበሩ' }, // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'ብፈተና', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: { m: 'ብዘየገድስ ነቶም ትምህርትታት ግበሮም', f: 'ብዘየገድስ ነቶም ትምህርትታት ግበርዮም', x: 'ብዘየገድስ ነቶም ትምህርትታት ግበሩዎም' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    shareInvite: 'ንስራሐይ ሆላንድኛ ብVloertaal እመሃር ኣለኹ። ብነጻ እዩ: {link}', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal ንስራሕ ሆላንድኛ ንምምሃር ኣፕ እዩ። ብነጻ እዩ።', // nieuw, nalezen
    briefjeHow: 'ሓጸርቲ ትምህርትታት ኣብ ተሌፎን፡ ብትግርኛ ሓገዝ። ኣካውንት የለን።', // nieuw, nalezen
    briefjeOpen: { m: 'ኣብ ተሌፎንካ ክፈት:', f: 'ኣብ ተሌፎንኪ ክፈቲ:', x: 'ኣብ ተሌፎንኩም ክፈቱ:' }, // nieuw, nalezen
    workTry: { m: 'ሎሚ ኣብ ስራሕካ ፈትኖ', f: 'ሎሚ ኣብ ስራሕኪ ፈትንዮ', x: 'ሎሚ ኣብ ስራሕ ፈትንዎ' }, // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'ኩነታት:', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    workTryThen: { m: 'ሽዑ በል:', f: 'ሽዑ በሊ:', x: 'ሽዑ በሉ:' }, // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'ንብጻይ ስራሕ', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: { m: 'እዚ ንሆላንድኛ ዝዛረብ ብጻይ ስራሕ ኣርእዮ። ከመይ ጌሩ ክሕግዘካ ከም ዝኽእል ተጻሒፉ ኣሎ።', f: 'እዚ ንሆላንድኛ ዝዛረብ ብጻይ ስራሕ ኣርእይዮ። ከመይ ጌሩ ክሕግዘኪ ከም ዝኽእል ተጻሒፉ ኣሎ።', x: 'እዚ ንሆላንድኛ ዝዛረብ ብጻይ ስራሕ ኣርእዩዎ። ከመይ ጌሩ ክሕግዘኩም ከም ዝኽእል ተጻሒፉ ኣሎ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: { m: 'ናብ ብጻይካ ስደዶ', f: 'ናብ ብጻይኪ ስደድዮ', x: 'ናብ ብጻይኩም ስደዱዎ' }, // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'ንኣሰልጣኒኹም', // nieuw, nalezen (AI-correctie 28 nov 2026)
    rulesInDutch: 'ስራሕ ኣብዚ ከመይ ከም ዝኸይድ፡ ብቐሊል ሆላንድኛ። ተሌፎን ብድምጺ የንብቦ።', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: { m: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጥ ኢኻ። ኣብ ነፍሲ ወከፍ ኣርእስቲ ስራሕ ኣብዚ ከመይ ከም ዝኸይድ እውን ብቐሊል ሆላንድኛ ከተንብብ ትኽእል ኢኻ።', f: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጢ ኢኺ። ኣብ ነፍሲ ወከፍ ኣርእስቲ ስራሕ ኣብዚ ከመይ ከም ዝኸይድ እውን ብቐሊል ሆላንድኛ ከተንብቢ ትኽእሊ ኢኺ።', x: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጡ ኢኹም። ኣብ ነፍሲ ወከፍ ኣርእስቲ ስራሕ ኣብዚ ከመይ ከም ዝኸይድ እውን ብቐሊል ሆላንድኛ ከተንብቡ ትኽእሉ ኢኹም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'የለን፡ ሆላንድኛ እዛረብ እየ', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'ኣብ ስራሕ ዝተባህሉ ሓረጋት', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'ገና ዘጸግሙ ቃላት', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'ትምህርቲ ብዛዕባ ስራሕ ኣብዚ ከመይ ከም ዝኸይድ', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'ኣርእስታት ብዛዕባ መሰላት ብስሞም ምርኣይ', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    speakFromMemory: 'ሕጂ ብልቢ፡ ብሆላንድኛ እንታይ ነይሩ?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: { m: 'ቃላት ቅድሚ 2 ሰሙን ወይ ልዕሊኡ፡ ገና {n} ካብ {m} ትፈልጥ ኔርካ።', f: 'ቃላት ቅድሚ 2 ሰሙን ወይ ልዕሊኡ፡ ገና {n} ካብ {m} ትፈልጢ ኔርኪ።', x: 'ቃላት ቅድሚ 2 ሰሙን ወይ ልዕሊኡ፡ ገና {n} ካብ {m} ትፈልጡ ኔርኩም።' }, // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'ግሲ ኣብ ቦታ 2 እዩ።', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'ነጥቢ', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: { m: 'ኩሉ ነጥብታትካ', f: 'ኩሉ ነጥብታትኪ', x: 'ኩሉ ነጥብታትኩም' }, // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'ሃዋህው', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'ህዱእ', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'ጸወታ', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'ህዱእ: ዝንቀሳቐስ የለን፡ ጽምብል የለን። ጸወታ: ነጥቢ፡ ድምጽን ብዙሕ ምንቅስቓስን።', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "ኣገልግሎትን ሓለዋን", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "ኣብ ደገ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "ክንክን ቈልዑ", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "ጎሓፍን ሪሳይክሊንግን", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "ኢንዱስትሪ መግቢ", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "ሓለዋ", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "ኣገልግሎታት ህንጻ", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "ቀጠልያ ቦታታትን ጀርዲናትን", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'ደረጃ', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'መጀመርታ', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'ምምሃር', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'ኣብ ጉጅለ', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'ክእለት', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'ተሞክሮ', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'ክኢላ', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'ሓድሽ ደረጃ:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'ብዘይ ጌጋ:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'ናይ ሎሚ ዕላማ', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'ናይ ሎሚ ዕላማ ተበጺሑ!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: { m: 'ሓድሽ ኣብ ሳንዱቕ መሳርሒኻ:', f: 'ሓድሽ ኣብ ሳንዱቕ መሳርሒኺ:', x: 'ሓድሽ ኣብ ሳንዱቕ መሳርሒኹም:' }, // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'ናተይ ሳንዱቕ መሳርሒ', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: { m: 'ምስ ጸወታ ሓደ ትምህርቲ ወድእ። ሽዑ ቀዳማይ መሳርሒኻ ትረኽብ።', f: 'ምስ ጸወታ ሓደ ትምህርቲ ወድኢ። ሽዑ ቀዳማይ መሳርሒኺ ትረኽቢ።', x: 'ምስ ጸወታ ሓደ ትምህርቲ ወድኡ። ሽዑ ቀዳማይ መሳርሒኹም ትረኽቡ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'ተወሳኺ መብርሂ', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'ብዛዕባ እዞም ምኽርታት', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'እዚ መብርሂ ገና ብክኢላ ኣይተፈተሸን።', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'ዕለት እዚ መብርሂ፡ {month}። ዝሓደሱ ሕግታት ኣብ Juridisch Loket ወይ Work in NL ይርከቡ።', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'ዕለት እዚ መብርሂ፡ {month}። ዝሓደሱ ሕግታት ኣብ justitiehuis ወይ werk.belgie.be ይርከቡ።', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'ብዛዕባ Vloertaal ተወሳኺ', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: { m: 'ነዚ ኣብ ስራሕ ኢልካዮ ዶ?', f: 'ነዚ ኣብ ስራሕ ኢልኪዮ ዶ?', x: 'ነዚ ኣብ ስራሕ ኢልኩምዎ ዶ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'እወ፡ ሰሪሑ', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'ገና', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { m: 'ጽቡቕ ገይርካ! ኣብ ስራሕ ዝሰለጣ ሓረጋት: {n}', f: 'ጽቡቕ ገይርኪ! ኣብ ስራሕ ዝሰለጣ ሓረጋት: {n}', x: 'ጽቡቕ ስራሕ! ኣብ ስራሕ ዝሰለጣ ሓረጋት: {n}' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: { m: 'ጽቡቕ ገይርካ! ቀዳማይ ሓረግካ ኣብ ስራሕ ሰሊጡ።', f: 'ጽቡቕ ገይርኪ! ቀዳማይ ሓረግኪ ኣብ ስራሕ ሰሊጡ።', x: 'ጽቡቕ ስራሕ! ቀዳማይ ሓረግ ኣብ ስራሕ ሰሊጡ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: { m: 'ኣብ ምድላዋት ክትረኽቦም ትኽእል።', f: 'ኣብ ምድላዋት ክትረኽብዮም ትኽእሊ።', x: 'ኣብ ምድላዋት ይርከቡ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'ኣብ ስራሕ ሰሊጡ', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: { m: 'ነዞም ሓረጋት ኣብ ስራሕ ኢልካዮም።', f: 'ነዞም ሓረጋት ኣብ ስራሕ ኢልኪዮም።', x: 'ነዞም ሓረጋት ኣብ ስራሕ ኢልኩምዎም።' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    nextMinutesN: 'ኣስታት {n} ደቒቕ', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'ምዕባለኹም ኣይተዓቀበን። ተሌፎንኩም መሊኡ ድዩ? ቁሩብ ቦታ ግበሩ። ወይ ኣብ ምድላዋት: «ምዕባለኹም ዓቅቡ»።', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: { m: 'ተሌፎንካ ገለ ግዜ ምዕባለኻ ክድምስሶ ይኽእል። ስለዚ ቅዳሕ ዓቅብ።', f: 'ተሌፎንኪ ገለ ግዜ ምዕባለኺ ክድምስሶ ይኽእል። ስለዚ ቅዳሕ ዓቅቢ።', x: 'ተሌፎንኩም ገለ ግዜ ምዕባለኹም ክድምስሶ ይኽእል። ስለዚ ቅዳሕ ዓቅቡ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: { m: 'ሕጂ ዓቅብ', f: 'ሕጂ ዓቅቢ', x: 'ሕጂ ዓቅቡ' }, // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: { m: 'ናብ ርእስኻ ስደድ', f: 'ናብ ርእስኺ ስደዲ', x: 'ናብ ርእስኹም ስደዱ' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    backupShareHint: { m: 'ነቲ ፋይል ናብ ርእስኻ ስደዶ፡ ንኣብነት ብWhatsApp ወይ ብኢመይል።', f: 'ነቲ ፋይል ናብ ርእስኺ ስደድዮ፡ ንኣብነት ብWhatsApp ወይ ብኢመይል።', x: 'ነቲ ፋይል ናብ ርእስኹም ስደድዎ፡ ንኣብነት ብWhatsApp ወይ ብኢመይል።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    backupMade: { m: 'ተወዲኡ። ነዚ ፋይል ጽቡቕ ጌርካ ዓቅቦ። ደሓር ብእኡ ምዕባለኻ ክትመልሶ ትኽእል።', f: 'ተወዲኡ። ነዚ ፋይል ጽቡቕ ጌርኪ ዓቅብዮ። ደሓር ብእኡ ምዕባለኺ ክትመልስዮ ትኽእሊ።', x: 'ተወዲኡ። ነዚ ፋይል ጽቡቕ ጌርኩም ዓቅብዎ። ደሓር ብእኡ ምዕባለኹም ክትመልስዎ ትኽእሉ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: { m: 'እንታይ ትብል?', f: 'እንታይ ትብሊ?', x: 'እንታይ ትብሉ?' }, // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'ኣብነት', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: { m: 'መልሲ ስማዕ', f: 'መልሲ ስምዒ', x: 'መልሲ ስምዑ' }, // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: { m: 'ኣብ ቦታ ስራሕ ስማዕ', f: 'ኣብ ቦታ ስራሕ ስምዒ', x: 'ኣብ ቦታ ስራሕ ስምዑ' }, // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: { m: 'ከም ኣብ ስራሕ ጫውጫው ኣሎ። ስማዕ። ድሕሪኡ ሕቶታት ይመጹ።', f: 'ከም ኣብ ስራሕ ጫውጫው ኣሎ። ስምዒ። ድሕሪኡ ሕቶታት ይመጹ።', x: 'ከም ኣብ ስራሕ ጫውጫው ኣሎ። ስምዑ። ድሕሪኡ ሕቶታት ይመጹ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: { m: 'ነታ ምልክት ዘለዋ ቃል ኣብ መጀመርታ ኣቐምጣ', f: 'ነታ ምልክት ዘለዋ ቃል ኣብ መጀመርታ ኣቐምጥያ', x: 'ነታ ምልክት ዘለዋ ቃል ኣብ መጀመርታ ኣቐምጥዋ' }, // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'ሕግታት ስራሕ', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: { m: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጥ ኢኻ። ሕግታት ስራሕ እውን ክትመሃር ትደሊዶ? ሽዑ ኩሉ ብሆላንድኛ እዩ።', f: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጢ ኢኺ። ሕግታት ስራሕ እውን ክትመሃሪ ትደልዪ ዶ? ሽዑ ኩሉ ብሆላንድኛ እዩ።', x: 'ሕጂ ብዙሕ ሆላንድኛ ትፈልጡ ኢኹም። ሕግታት ስራሕ እውን ክትመሃሩ ትደልዩዶ? ሽዑ ኩሉ ብሆላንድኛ እዩ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    bridgeGo: { m: 'እወ፡ ኣርእየኒ', f: 'እወ፡ ኣርእይኒ', x: 'እወ፡ ኣርእዩኒ' }, // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'ብኸመይ ይበሃል?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'ሓደ ድምጺ ጠውቑ። ኣፍኩም ብኸመይ ከም ዝገብሮ ርኣዩ።', // nieuw, nalezen (AI-correctie 28 nov 2026)
    klankSpeed: 'ቅልጣፈ', // nieuw, nalezen (AI-correctie 28 nov 2026)
    klankScrub: 'ቃል፡ ድምጺ ብድምጺ', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'ድምጺ', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "ምዝርራብ", // nieuw, nalezen // nagelezen AI 28 nov
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
    'u.emergency': "ጸገም ምስ ዘጋጥም", // nieuw, nalezen // nagelezen AI 22 nov
    'u.warehouse': 'ኣብ መኽዘን',
    'u.time': 'ግዜን መደብ ስራሕን',

    // Lessons
    'l.hello': { m: 'ሰላም በል', f: 'ሰላም በሊ', x: 'ሰላም በሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
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
    'w.nogeenkeer': 'ሓንሳብ ከኣ', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    'w.ziek': { m: 'ሕሙም', f: 'ሕምምቲ', x: 'ሕሙማት' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    'l.alarm': 'ደወል ሓዊን ካብ ህንጻ ምውጻእን', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'ደወል ሓደጋ (ኣላርም)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'ህንጻ ምልቃቕ (ኩሉ ሰብ ካብ ህንጻ ይወጽእ)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'መገዲ ምህዳም (ናብ መውጽኢ ዝወስድ መገዲ)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'መደያይቦ', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'ቦታ ምእካብ (ኩሉ ሰብ ኣብ ደገ ዝራኸበሉ)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'መጥፍኢ ሓዊ', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'መጥፍኢ ሓዊ ኣበይ ኣሎ?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'ነቲ ህንጻ ክንለቕቖ ኣሎና።', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': { m: 'መደያይቦ ተጠቐም፡ ሊፍት ኣይኮነን።', f: 'መደያይቦ ተጠቐሚ፡ ሊፍት ኣይኮነን።', x: 'መደያይቦ ተጠቐሙ፡ ሊፍት ኣይኮነን።' }, // nieuw, nalezen // nagelezen AI 22 nov
    's.accident.1': 'ብጻይ ስራሐይ ወዲቑ።',
    's.accident.2': 'ተቖሪጸ።',
    's.accident.3': 'ሓደጋ ክሕብር እደሊ።',
    's.things.1': { m: 'ነቲ ሳጹን ኣብ ፓለት ኣቐምጦ።', f: 'ነቲ ሳጹን ኣብ ፓለት ኣቐምጥዮ።' },
    's.things.2': 'ስካነር ኣበይ ኣሎ?',
    's.things.3': 'ፎርክሊፍት ይመጽእ ኣሎ።',
    's.directions.1': 'እቲ ሳጹን ኣብ ጸጋም ኣሎ።',
    's.directions.2': { m: 'ብእግርካ ተሓጊዝካ ኣልዕል።', f: 'ብእግርኪ ተሓጊዝኪ ኣልዕሊ።', x: 'ብእግርኹም ተሓጊዝኩም ኣልዕሉ።' },
    's.directions.3': { m: 'ናብ የማን ኪድ።', f: 'ናብ የማን ኪዲ።', x: 'ናብ የማን ኪዱ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.shift.1': 'ፈረቓ ስራሐይ ሰዓት 7:00 ይጅምር።',
    's.shift.2': 'ዕረፍቲ መዓስ እዩ?',
    's.shift.3': 'ይቕሬታ፡ ደንጒየ።',
    's.sick.1': { m: 'ሎሚ ሕሙም እየ።', f: 'ሎሚ ሕምምቲ እየ።' },
    's.sick.2': 'ሕቖይ ይቃንዘኒ ኣሎ።',
    's.sick.3': 'ናብ ሓኪም እድውል ኣለኹ።',
    'c.hello.q': 'ጽቡቕ ምሸት!',
    'c.hello.a': 'ጽባሕ ክንራኸብ!',
    'c.people.q': { m: 'ስምካ መን እዩ?', f: 'ስምኪ መን እዩ?', x: 'ስምኩም መን እዩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
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
    'c.understand.q': { m: 'ተረዲኡካ ድዩ?', f: 'ተረዲኡኪ ድዩ?', x: 'ተረዲኡኩም ድዩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.understand.a': 'ኣይፋል፣ በጃኻ ሓንሳብ ደጊምካ።',
    'c.gear.q': { m: 'ሄልመትካ ኣለካ ድዩ?', f: 'ሄልመትኪ ኣለኪ ድዩ?', x: 'ሄልመትኩም ኣለኩም ድዩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.a': 'እወ፣ ገይረዮ ኣለኹ።',
    'c.danger.q': 'ሓደጋ ኣሎ ድዩ?',
    'c.danger.a': 'እወ፣ ናብ 112 ደውል!',
    'c.alarm.q': 'ኩሉ ሰብ ናብ ደገ ወጺኡ ድዩ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'ኣይፋል፡ ብጻይ ስራሐይ ገና ኣይመጸን።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'እንታይ ኣጋጢሙ?',
    'c.accident.a': 'ወዲቑ። ይደምይ ኣሎ።',
    'l.notyet': 'እዚ ገና ኣይተማሃርክዎን',
    'w.nogniet': 'ገና',
    'w.mogen': 'ፍቓድ ምርካብ (ይፍቀደለይ)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
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
    'c.shift.q': { m: 'ፈረቓኻ መዓስ ይጅምር?', f: 'ፈረቓኺ መዓስ ይጅምር?', x: 'ፈረቓኹም መዓስ ይጅምር?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.shift.a': 'ጽባሕ ሰዓት 7:00።',
    'c.sick.q': { m: 'ሓሚምካ ዲኻ?', f: 'ሓሚምኪ ዲኺ?', x: 'ሓሚምኩም ዲኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.sick.a': 'እወ፣ ሎሚ ኣብ ገዛ እጸንሕ።',
    // Emergency phrases (phrasebook only)
    'p.call112': { m: 'ናብ 112 ደውል!', f: 'ናብ 112 ደውሊ!', x: 'ናብ 112 ደውሉ!' },
    'p.hurt': 'ተጎዲአ ኣለኹ።',
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "ትእዛዛት ምእካብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "ኣቕሓ (ሓደ ፍርያት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "ክፍሊ (ኣብ መደርደሪ ሓደ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "ስቲከር፡ ኤቲኬት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "ምእካብ፡ ምልቃም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "ምጉዳል (ኣብኡ የለን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "ቦታ (ኮድ ናይቲ ቦታ፡ ከም A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "ንዚ ትእዛዝ ዝኸውን ኣቕሑ እእክብ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "እዚ ኣቕሓ ጎዲሉ ኣሎ። እቲ ክፍሊ ጥርሑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "እቲ ስቲከር ኣብ ልዕሊ እቲ ሳጹን ክኸውን ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "ኣየናይ ቦታ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "ኮሪደር ሰለስተ፡ ክፍሊ ዓሰርተው ክልተ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "ምጽዓንን ምርጋፍን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "ናይ ጽዕነት መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "ዘዋሪ መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "ምርጋፍ (ነገራት ካብ ናይ ጽዕነት መኪና ምውጻእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "ናይ ፓለት ዓረብያ (ፓለት እተልዕል ናይ ኢድ ዓረብያ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "ፕላስቲክ መጠቕለሊ (ኣብ ዙርያ ፓለት ዝግበር ረቂቕ ፕላስቲክ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "ወረቐት ጽዕነት (ኣብታ መኪና እንታይ ከም ዘሎ እትነግር ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "እታ ናይ ጽዕነት መኪና ኣብ ማዕጾ ኣርባዕተ ኣላ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "ቅድም ነዞም ፓለታት ነራግፎም።", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "እቲ ዘዋሪ ነታ ወረቐት ጽዕነት ይጽበ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "እዚ ፓለት ተዳልዩ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "ኣይፋል፡ ገና ፕላስቲክ መጠቕለሊ ክግበረሉ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "እዚ ብኸመይ ይግበር?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "ከመይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "ከምዚ፡ ብኸምዚ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "ኣጸጋሚ፡ ከቢድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "ቀሊል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "ምፍላጥ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "ቅኑዕ እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "እዚ ብኸመይ ይግበር?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "እዚ ንዓይ ኣጸጋሚ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "ከምዚ ጽቡቕ ድየ ዝገብሮ ዘለኹ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': { m: "እዚ ብኸመይ ከም ዝግበር ትፈልጥ ዲኻ?", f: "እዚ ብኸመይ ከም ዝግበር ትፈልጢ ዲኺ?", x: "እዚ ብኸመይ ከም ዝግበር ትፈልጡ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "ኣይፋል፡ ገና ኣይፈልጦን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "ገለ ክሓትት ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "ምሕታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "መን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "ንሓጺር ግዜ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "ግዜ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "ምርባሽ (ንስራሕ ሒዙ ዘሎ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "ምጥርጣር (ርግጸኛ ዘይምዃን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "ገለ ክሓትት ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "ይቕሬታ፡ ስለ ዝረበሽኩኹም።", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "መን ክሕግዘኒ ይኽእል?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': { m: "ሕቶ ኣለካ ድዩ?", f: "ሕቶ ኣለኪ ድዩ?", x: "ሕቶ ኣለኩም ድዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "እወ። ቁሩብ ግዜ ኣለኩም ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "ኣብዚ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "ኣብኡ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "ዝጠፍአ (ክርከብ ዘይከኣለ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "መውጽኢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "ምምልካት (ኣበይ ከም ዘሎ ምሕባር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "ኣብ ጎድኒ", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "መገዲ ጠፊኡኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "መውጽኢ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "ሽቓቕ ኣብኡ ኣሎ፡ ኣብ ጎድኒ እቲ ካንቲን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': { m: "ክትረኽቦ ትኽእል ዲኻ?", f: "ክትረኽብዮ ትኽእሊ ዲኺ?", x: "ክትረኽብዎ ትኽእሉ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "ኣይፋል። ከተመልክቱለይ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "ንኣሽቱ መቑሰልትን ቃጸሎን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "መቑሰሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "መሸፈኒ ቁስሊ (ፋሻ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "ምዝሓል (ብዝሑል ማይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "ምቑራጽ (ካብ ካራ ወይ በሊሕ ነገር ዝመጽእ ንእሽቶ መቑሰሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "ስምዒት ምስሓት (ብድኻም ምውዳቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "መሕጸቢ ዓይኒ (ዓይኒ ዝሕጸበሉ ማይ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': { m: "ነቲ ቃጸሎ ብማይ ኣዝሕሎ።", f: "ነቲ ቃጸሎ ብማይ ኣዝሕልዮ።", x: "ነቲ ቃጸሎ ብማይ ኣዝሕልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': { m: "ንእሽቶ ምቑራጽ እዩ። ነቲ መቑሰሊ ጸቅጦ።", f: "ንእሽቶ ምቑራጽ እዩ። ነቲ መቑሰሊ ጸቅጥዮ።", x: "ንእሽቶ ምቑራጽ እዩ። ነቲ መቑሰሊ ጸቅጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "መሕጸቢ ዓይኒ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "ብጻይ ስራሐይ ክወድቕ ቀሪቡ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "ንሓጺር ግዜ ይደቅስ። ሓገዝ ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "ናብ 112 ምድዋል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "ኣገልግሎታት ህጹጽ ረዲኤት (ኣምቡላንስ፡ መጥፋእቲ ሓዊ፡ ፖሊስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "ስም ጎደና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "ቁጽሪ ገዛ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "ዝምልስ (ምስ ዝዛረብዎ መልሲ ዝህብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "ምጽባይን ምቕባልን (ንሓደ ሰብ ኣብ ማዕጾ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "ኣብ መስመር ምጽናሕ (ተሌፎን ዘይምዕጻው)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "ናብ 112 እድውል ኣለኹ። ኣምቡላንስ የድልየኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "ስም ጎደናን ቁጽሪ ገዛን እንታይ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "ኣብ መእተዊ ንኣምቡላንስ ክጽበዮ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': { m: "ክትዛረቦ ከለኻ ይምልስ ድዩ?", f: "ክትዛረብዮ ከለኺ ይምልስ ድዩ?", x: "ክትዛረብዎ ከለኹም ይምልስ ድዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "ኣይፋል። ኣይምልስን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': { m: "መደብ ስራሕካ", f: "መደብ ስራሕኪ", x: "መደብ ስራሕኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "ሰሙናዊ መደብ ስራሕ (ኣብዚ ሰሙን መን መዓስ ከም ዝሰርሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "ኣፕ መደብ ስራሕ (ፈረቓታት ስራሕ ኣብ ተሌፎን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "ድሉው (ሽዑ ክሰርሕ ይኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "ለውጢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "ምትካእ (ኣብ ክንዲ ዘይተረኽበ ሰብ ምስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "መዓልቲ ዕረፍቲ", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "ሓድሽ መደብ ስራሕ ኣብቲ ኣፕ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "ቀዳም ድሉዋት ዲኹም?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "ጽባሕ ኣብ ክንዲ ሳራ ክትሰርሑ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': { m: "ኣብ መደብ ስራሕካ ለውጢ ኣሎ።", f: "ኣብ መደብ ስራሕኪ ለውጢ ኣሎ።", x: "ኣብ መደብ ስራሕኩም ለውጢ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "ሕራይ። ኣየናይ መዓልቲ እየ ክሰርሕ ዘለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "ሰዓታትን ዕረፍቲን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "ዕረፍቲ ምሳሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "ግዜ ዕረፍቲ (ኣብ መንጎ ክልተ ፈረቓ ስራሕ ዘሎ ነጻ ግዜ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "መዓልቲ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "ዝርዝር ሰዓታት (ዝተሰርሐ ሰዓታት ዝጽሓፈሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "ኣቐዲምካ ምኻድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "ብተኸታታሊ (ሓደ ድሕሪ ሓደ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "ሰዓታተይ ኣብ ዝርዝር ሰዓታት እጽሕፎም።", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "ሎሚ ሓደ ሰዓት ኣቐዲመ ክኸይድ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "ሽዱሽተ መዓልቲ ብተኸታታሊ ሰሪሐ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': { m: "ዕረፍቲ ምሳሕካ መዓስ እዩ?", f: "ዕረፍቲ ምሳሕኪ መዓስ እዩ?", x: "ዕረፍቲ ምሳሕኩም መዓስ እዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "ሰዓት ዓሰርተው ክልተ፡ ፍርቂ ሰዓት።", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': { m: "ቀዳሞት ሰሙናትካ", f: "ቀዳሞት ሰሙናትኪ", x: "ቀዳሞት ሰሙናትኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': { m: "ዙረት ምልላይ (ሓደ ሰብ ነቲ ህንጻ የዘውረካ)", f: "ዙረት ምልላይ (ሓደ ሰብ ነቲ ህንጻ የዘውረኪ)", x: "ዙረት ምልላይ (ሓደ ሰብ ነቲ ህንጻ የዘውረኩም)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': { m: "መራሒ (ኣብ ቀዳሞት ሰሙናትካ ዝሕግዘካ ብጻይ ስራሕ)", f: "መራሒ (ኣብ ቀዳሞት ሰሙናትኪ ዝሕግዘኪ ብጻይ ስራሕ)", x: "መራሒ (ኣብ ቀዳሞት ሰሙናትኩም ዝሕግዘኩም ብጻይ ስራሕ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "መጽሓፍ ማስታወሻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "ምስ ብጻይ ስራሕ ምኻድ (ከመይ ከም ዝሰርሕ ምዕዛብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "ምዝካር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': { m: "ብነብስኻ (ብዘይ ሓገዝ)", f: "ብነብስኺ (ብዘይ ሓገዝ)", x: "ብነብስኹም (ብዘይ ሓገዝ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "ሓንሳብ ደጊምካ ከተርእየኒ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "ሎሚ ንሳራ እናሰዓብኩ እዕዘብ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "ኣብ መጽሓፍ ማስታወሻይ እጽሕፎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': { m: "ካብቲ ዙረት ምልላይ ኩሉ ገና ትዝክሮ ዶ?", f: "ካብቲ ዙረት ምልላይ ኩሉ ገና ትዝክርዮ ዶ?", x: "ካብቲ ዙረት ምልላይ ኩሉ ገና ትዝክርዎ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "ዳርጋ ኩሉ። ካንቲን ደኣ ኣበይ ነይሩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "ምእካብ ትእዛዛትን ሪች ትራክን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "ኣካቢ ትእዛዝ (ትእዛዛት ዝእክብ ሰራሕተኛ፡ ከምኡ እውን ሰራሕተኛ ደው ኢሉ ካብ ላዕሊ ዝእክበላ ንእሽቶ መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "ሪች ትራክ (ንኣዝዮም ነዋሕቲ መደርደሪታት ዝኸውን ፎርክሊፍት፡ ፎርክታቱ ናብ ቅድሚት ይዝርግሑ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': { m: "ዝርዝር ምእካብ (ክትእክቦም ዘለካ ኣቑሑ ዝርዝር)", f: "ዝርዝር ምእካብ (ክትእክብዮም ዘለኪ ኣቑሑ ዝርዝር)", x: "ዝርዝር ምእካብ (ክትእክብዎም ዘለኩም ኣቑሑ ዝርዝር)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "ስካን ምግባር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "ብእግሪ ዝኸይድ ሰብ (ብእግሩ ዝጓዓዝ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "ምውዓይ (ድሕሪ ኣብ ቁሪ ምስራሕ፡ ኣብ ውዑይ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "ኣብ ዝርዝር ምእካብ ዘሎ ነፍሲ ወከፍ ኣቕሓ ስካን እገብሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "ብእግሪ ዝኸዱ ሰባት ኣብ መንገዲ እግሪ ይጓዓዙ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "ኣብ ክፍሊ ፍሪዘር ክዳን ቁሪ እኽደን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': { m: "ንቑሩብ ብሪች ትራክ ክትዝውር ትኽእል ዶ?", f: "ንቑሩብ ብሪች ትራክ ክትዝውሪ ትኽእሊ ዶ?", x: "ንቑሩብ ብሪች ትራክ ክትዝውሩ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "ኣይፋል፡ ኣይፍቀደለይን እዩ። ስልጠና የብለይን።", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
