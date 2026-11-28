import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Görünüm',
    themeAuto: 'Otomatik',
    themeSand: 'Kum', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Liman', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'İş ceketi', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Koyu',
    voice: 'Hollandaca ses',
    voiceAuto: 'Otomatik',
    voiceHint: 'Dinlemek için 🔊 simgesine dokun. Vloertaal sesleri her telefonda aynı duyulur; diğerleri telefonundan gelir.',
    voiceNone: 'Bu cihazda Hollandaca ses yok. Telefon ayarlarından (Metin okuma) ekleyebilirsin.',
    appTagline: 'İş yeri için Hollandaca',
    chooseLanguage: 'Yardım dilini seç',
    englishOnly: 'Sadece İngilizce',
    beta: 'Çeviri henüz kontrol edilmedi', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: 'günlük seri',
    streakStarted: 'Günlük serin başladı! Yarın yine gel.',
    streakGrew: 'Üst üste {n} gün! Böyle devam et.',
    start: 'Başla',
    practice: 'Tekrar çalış',
    locked: 'Önce bir önceki dersi bitir',
    newWord: 'Yeni kelime',
    tapToHear: 'Dinlemek için dokun',
    sayItAloud: 'Sesli söyle.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Sessizce ya da içinden söyle.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Bu ne demek?',
    snapQuestion: 'Anladın mı?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Evet, tamam.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Sorman iyi oldu!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Doğru anladın!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Gördün mü? Sormak daha iyiydi.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Hangisi “{word}”?',
    mixLesson: 'Karışık tekrar',
    whatDoYouHear: 'Ne duyuyorsun?',
    buildSentence: 'Bu cümleyi Hollandaca kur',
    typeWhatYouHear: 'Duyduğunu yaz',
    check: 'Kontrol et',
    continue: 'Devam',
    correct: 'Harika!',
    almost: 'Doğru, ama yazımına dikkat et',
    incorrect: 'Tam değil',
    correctAnswer: 'Doğru cevap',
    rightAnswerIs: 'Doğru cevap şu:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'En iyi cevap şu:', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Senin cevabın',
    inARow: 'Üst üste {n}',
    cantListen: 'Şu an dinleyemiyorum',
    learnWriting: 'Yazmayı da öğrenmek istiyorum',
    learnWritingHint: 'Açık: duyduğun kelimeleri harflerle yaz. Kapalı: duyduğun yazılı kelimeyi seç.',
    tagRepeat: 'Tekrar',
    readAloud: 'Sesli oku',
    lessonComplete: 'Ders tamamlandı!',
    phrasebook: 'Acil durum ifadeleri',
    phrasebookHint: 'Dinlemek için bir ifadeye dokun. Ekranını bir iş arkadaşına da gösterebilirsin.',
    whoToCall: 'İşte sorun mu var? Kim yardım edebilir',
    who112: 'Acil durum: hayati tehlike, yangın veya şu anda olan bir suç.',
    whoLegal: 'Sözleşmen, maaşın veya işten çıkarılman hakkında ücretsiz danışmanlık.',
    whoInspection: 'Güvensiz işi, çok düşük maaşı veya sömürüyü bildir. İsimsiz de yapabilirsin.',
    whoFairwork: 'İşte sömürülüyorsun ya da öyle düşünüyorsun.',
    who113: 'Hayatına son vermeyi düşünüyorsun ya da biri için endişeleniyorsun. Ücretsiz, gece gündüz.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Evde şiddet veya istismar, sana ya da başka birine. Ücretsiz, isim vermeden de olur.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'Ayarlar',
    helpLanguage: 'Yardım dili',
    resetProgress: 'İlerlememi sıfırla',
    resetConfirm: 'Bu cihazdaki tüm ilerleme silinsin mi?',
    audioUnavailable: 'Bu cihazda ses kullanılamıyor.',
    slow: 'Yavaş',
    completeChat: 'Konuşmayı tamamla',
    meaning: 'Anlamı',
    navRoute: 'Dersler',
    navWords: 'Yardım',
    rightFirstTime: 'İlk denemede doğru',
    newWords: 'Yeni kelimeler',
    wordsLearnedN: '{n} kelime öğrendin',
    practiseMistakes: 'Hataları tekrarla · {n} kaldı',
    quitHint: 'Bu dersteki cevapların kaydedilmez.',
    keepGoing: 'Devam et',
    stopLesson: 'Dersi bırak',
    fullVersion: 'Tam sürüm',
    unlockFull: 'Tam sürümü aç',
    unlockHint: 'Kodla tüm dersler açılır. Kod ücretsiz. Henüz kodun yok mu? Öğretmenine ya da koçuna sor veya bize e-posta gönder:',
    codeNotFull: 'Bu kod tam sürümü açmaz. Yeni bir kod iste.',
    password: 'Kod',
    enterPassword: 'Kodu gir',
    wrongPassword: 'Kod doğru değil. Tekrar dene.',
    unlock: 'Aç',
    sector: 'İşin',
    chooseSector: 'Nerede çalışıyorsun?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'Hangi ülkede çalışıyorsun?',
    countryHint: 'O ülkenin kelimelerini ve ipuçlarını görürsün.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'Öğrendiklerin sadece bu telefonda.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Hep bu telefonu kullan.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Hollanda',
    countryBe: 'Belçika (Flandra)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    tipsNote: 'Bu ipuçları Hollanda’daki iş hakkında. Genel bilgidir, hukuki danışmanlık değildir.',
    sectorHint: 'Kendi işinin dersleri erkenden gelir. Bunu sonra Ayarlar’da değiştirebilirsin.',
    otherSectors: 'Diğer sektörler',
    reviewToday: 'Bugünün tekrarı',
    reviewTodayN: 'Tekrar edilecek kelimeler: {n} · birkaç dakika',
    notSureYet: 'Henüz bilmiyorum',
    sectorLogistics: 'Lojistik',
    sectorConstruction: 'İnşaat',
    sectorProduction: 'Üretim',
    sectorCare: 'Sağlık ve bakım',
    sectorHospitality: 'Otel ve restoran',
    sectorRetail: 'Mağaza ve market', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Temizlik',
    sectorHorticulture: 'Bahçecilik', // nagelezen (2e lezing)
    sectorTechnical: 'Teknik işler', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Oto servis', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Ses',
    soundOn: 'Ses açık',
    withoutSound: 'Sessiz',
    quietHint: 'Sessiz modda derslerde dinleme sorusu olmaz ve hiçbir şey kendiliğinden çalmaz. Bir kelimeyi duymak için 🔊 simgesine dokun, örneğin kulaklıkla.',
    soundOffToast: 'Sessiz. Sesi Ayarlar’dan açabilirsin.',
    noInternetSound: 'İnternet yok: ses şu an çalışmıyor.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Bugün yapılacaklar', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    streakStopped: 'Serin {n} günde durdu. Bugün yeniden başla.',
    recordN: 'Rekorun: {n} gün',
    workWeek: 'İş haftan',
    freeDaysN: 'Serbest gün: {n}. Bir gün kaçırırsan serin devam eder.',
    restDay: 'Serbest gün',
    tier3: '3 gün üst üste',
    tier7: '1 hafta üst üste',
    tier14: '2 hafta üst üste',
    tier30: '1 ay üst üste',
    reviewDone: 'Bugünlük bitti',
    tomorrowN: 'Yarın: {n} kelime',
    firstWordsTomorrow: 'Yarın ilk kelimelerin geri geliyor',
    extraRound: 'Ekstra tur',
    reviewFirstHint: 'Önce tekrar. Böylece daha çok hatırlarsın.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: '{n} kelime güçlendi',
    noMistakes: 'Hatasız',
    nextUp: 'Sıradaki',
    installTitle: 'Vloertaal’ı ana ekranına ekle',
    installHint: 'O zaman bir uygulama gibi açılır, internet olmadan da.',
    installAdd: 'Ana ekrana ekle',
    iosStep1: 'Paylaş’a dokun',
    iosStep2: '“Ana Ekrana Ekle”ye dokun',
    iosStep3: 'Tamam!',
    backupTitle: 'İlerlemeni sakla',
    backupHint: 'İlerlemen sadece bu telefonda. Bir dosya olarak kaydet, örneğin yeni bir telefon için.',
    backupSave: 'İndir',
    backupLoad: 'Geri yükle',
    backupBad: 'Bu bir Vloertaal dosyası değil.',
    backupAsk: 'Bu dosyayı ilerlemene ekleyelim mi, yoksa ilerlemenin yerine mi koyalım?',
    backupMerge: 'Birleştir',
    backupReplace: 'Yerine koy',
    backupBack: 'İlerlemen geri geldi.',
    backupNothingNew: 'Yeni bir şey yok: bu zaten telefonunda vardı.',
    cancel: 'İptal',
    remindTitle: 'Bana her gün hatırlat',
    remindEvent: 'Hollandaca zamanı (10 dakika)',
    remindHint: 'Telefonunun takvimi sana hatırlatır. Bize hiçbir şey gönderilmez.',
    remindBefore: 'İşten önce',
    remindAfter: 'İşten sonra',
    remindOwn: 'Başka saat',
    remindAdd: 'Takvimime ekle',
    remindAdded: 'Takvimine eklemek için dosyayı aç.',
    remindAddedAsk: 'Eklendi mi? O zaman takviminde görürsün.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'Hakkında',
    tagMeaning: 'Anlam',
    tagPick: 'Seç',
    tagListen: 'Dinle',
    tagType: 'Yaz',
    tagMatch: 'Eşleştir',
    tagBuild: 'Cümle',
    tagChat: 'Konuşma',
    tagSituation: 'Durum',
    tagTip: 'İpucu',
    more: 'Daha fazla',
    less: 'Daha az',
    daysUnit: 'gün',
    wordsUnit: 'kelime',
    countTitle: 'Anonim sayım',
    countHint: 'Uygulama derslerin kaç kez yapıldığını ve yaklaşık ne kadar sürdüğünü sayar. Ve uygulamada bir yerde hata olup olmadığını. İsim yok, hesap yok, takip yok.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Sertifika',
    myCertificates: 'Sertifikalarım',
    certsEmpty: 'Bir konunun tüm derslerini bitir. Sonra bir sertifika alırsın.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certEarned: 'Sertifika kazandın!',
    certEarnedHint: 'Bu konunun tüm derslerini bitirdin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certView: 'Gör',
    certLater: 'Sonra',
    certPrint: 'Yazdır veya PDF olarak kaydet',
    certSaved: 'Resim kaydedildi.',
    certNameHint: 'Sadece bu telefonda kalır. Boş bırakabilirsin.',
    certChangeName: 'Adı değiştir',
    certPractice: 'Alıştırma sertifikası, resmî diploma değil',
    resumeLesson: 'Derse devam et',
    restartLesson: 'Baştan başla',
    quitKept: 'İlerlemen kaydedilir. Sonra devam edebilirsin.',
    bestAnswer: 'En iyi cevap',
    inReview: 'kontrol ediliyor',
    today: 'Bugün',
    playAgain: 'Tekrar dinle',
    daysUnitOne: 'gün',
    wordsUnitOne: 'kelime',
    wordsLearnedOne: '{n} kelime öğrendin',
    tomorrowOne: 'Yarın: {n} kelime',
    wordsStrongerOne: '{n} kelime güçlendi',
    recordOne: 'Rekorun: {n} gün',
    streakStoppedOne: 'Serin {n} günde durdu. Bugün yeniden başla.',
    letterTiles: 'Harfler',
    useKeyboard: 'Klavye',
    skippedN: '{n} atlandı, sayılmadı',
    stampLater: 'Sonra tekrar gelecek',
    stampDone: 'Bitti',
    chooseNext: 'Sonraki konunu seç',
    recommended: 'Önerilen',
    allTopics: 'Tüm konular',
    topicsOrder: 'Konuları göster',
    privacyLink: 'Gizlilik açıklamasını oku (Hollandaca)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Ne öğrenmek istiyorsun?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'İş için Hollandaca ve burada işin nasıl yürüdüğünü öğren', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Hollandaca biliyorum: sadece iş kuralları', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Hollandaca öğren', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Werkregels’e geçilsin mi?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Her şey Hollandaca olur. Yardım dilin kapanır.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Geri dönene kadar kelimeleri değil, kuralları tekrar edersin.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'İlerlemen kayıtlı kalır. Buradan geri dönebilirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Evet, Werkregels’e geç', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Temaya göre',
    inOrder: 'Sırayla',
    searchTopics: 'Konu ara', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Bu kelimeyle konu yok.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: 'ders',
    lessonsUnitOne: 'ders',
    topicsUnit: 'konu',
    topicsUnitOne: 'konu',
    allTopicsDone: 'Tüm konuları bitirdin. Aferin!',
    // Speaking practice
    tagSpeak: 'Konuş',
    speakPrompt: 'Dinle, sonra söyle',
    tapToSpeak: 'Dokun ve konuş',
    stopRecording: 'Dur',
    micPrivacy: "Seni başka kimse duymaz. Hiçbir şey gönderilmez.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Mikrofon kapalı. Şimdi sesli söyle, sonra devam et.',
    cantSpeak: 'Şu an konuşamıyorum',
    soundsSame: 'Aynı gibi',
    sayAgain: 'Tekrar söyle',
    hearMine: 'Kendini dinle', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'O zaman ve şimdi', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'İlk denemen: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Birlikte söyle", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Sesle aynı anda söyle. Hiçbir şey kaydedilmez.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Şimdi sadece sen", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Hatalar öğrenmenin bir parçası. Anlaşılmadı mı? Bir kez daha söyle.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave2: "Heyecanlı mısın? Bu normal. Yine de söyle.", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave3: "Mükemmel söylemek zorunda değilsin. Sadece dene.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonTitle: "Neden Hollandaca öğreniyorsun?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonHint: "Bir veya iki tane seç.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Tamam", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "İşimi iyi yapmak", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Çocuklarım", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "İş arkadaşlarımla konuşmak", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "İşlerimi kendim halletmek", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "Daha iyi bir iş", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Hollanda’da kendimi evimde hissetmek", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakMe: 'Ben',
    speakingPractice: 'Konuşma alıştırması',
    speakingHint: "Kelimeleri sesli söyle ve karşılaştır. Seni başka kimse duymaz: hiçbir şey gönderilmez. Bir cümleyi ilk söylediğin kayıt telefonunda kalır, sonra karşılaştırabilirsin.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Kaydediliyor…',
    savedOffline: 'İnternetsiz kullanıma kaydedildi',
    offlineNoSpace: 'Bu telefonda yeterli yer yok. Kayıtlı bir konuyu sil veya yer aç.',
    offlineFailed: 'Kaydedilemedi. İnternetini kontrol et ve tekrar dene.',
    pocketCard: 'Cep kartı',
    pocketSave: 'Resim olarak kaydet',
    textSize: 'Yazı boyutu',
    textNormal: 'Normal',
    textLarge: 'Büyük',
    textXl: 'Çok büyük',
    showEnglish: 'İngilizceyi de göster',
    genderTitle: 'Kadın mı, erkek mi?',
    genderHint: 'Dilin sana doğru şekilde hitap etsin diye.',
    genderWoman: 'Kadın',
    genderMan: 'Erkek',
    genderNone: 'Söylemek istemiyorum',
    langGuessYes: 'Evet',
    langGuessOther: 'Başka dil',
    settingsLangMe: 'Dil ve ben',
    settingsLessons: 'Dersler',
    settingsPhone: 'Bu telefon',
    settingOn: 'Açık',
    settingOff: 'Kapalı',
    sectorGroupMake: 'Üretim ve taşıma',
    sectorGroupCare: "Bakım ve çocuklar", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Mağaza ve yeme-içme', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'İnşaat ve teknik', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Kadın sesi',
    voiceMan: 'Erkek sesi',
    writingPick: 'Kelimeyi seç',
    settingWriting: 'Yazma',
    settingKeepLessons: 'Dersleri bu telefonda tut',
    settingKeepLessonsHint: 'Şu anki konu bu telefona kaydedilir, böylece internetsiz de çalışır. Biten konular sonra silinir.',
    otherTopicLink: 'Başka konu',
    remindAsk: 'Sana her gün hatırlatalım mı?',
    remindYes: 'Evet, işten sonra',
    remindNo: 'Hayır, teşekkürler',
    remindPickTime: 'Sana ne zaman hatırlatalım?',
    certSaveShare: 'Kaydet veya paylaş',
    pauseTitle: 'Mola',
    back: 'Geri',
    quitLesson: 'Dersten çık',
    playAudio: 'Dinle',
    scrollDown: 'Aşağı kaydır',
    lessonProgress: 'Ders ilerlemesi',
    mainMenu: 'Ana menü',
    spaceKey: 'Boşluk',
    langNotOnPhone: 'Bu dil henüz telefonunda yok. Dili değiştirmek için internete bağlan.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'Saati kendin seç',
    gateWho: 'Kodu öğretmenin, koçun veya işverenin verir.',
    gateTrust: 'Hesap yok. İsim yok. Her şey bu telefonda kalır.',
    codeAccepted: 'Kod kabul edildi',
    startFree: 'Kodun yok mu? İlk derslerle başla',
    bramHello: 'Seni görmek güzel.',
    bramBack: 'Tekrar hoş geldin. Devam edelim.',
    bramRested: 'Dün serbest günündü. Serin devam ediyor.',
    bramDueN: 'Bugün tekrar edilecek {n} kelime var.',
    bramDueOne: 'Bugün tekrar edilecek {n} kelime var.',
    bramDayN: 'Üst üste {n}. gün.',
    bramDone: 'Bugünlük bu kadar. Yarın görüşürüz.',
    bramPerfect: 'Çok iyi. Bu kelimeleri biliyorsun.',
    bramGood: 'İyi iş. Adım adım.',
    bramHard: 'Çalışman iyi oldu. Zor kelimeler tekrar gelecek.',
    bramReview: 'Güzel. Tekrar etmek hatırlamaya yardım eder.',
    bramIntro: 'Ben Bram, iş arkadaşınım.',
    bramIntroHello: 'Merhaba, ben Bram.',
    showDutch: 'Hollandaca göster',
    showAnswers: 'Cevapları göster', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Son güncelleme: {date}',
    /* G4 b3 */
    buildListen: 'Dinle ve cümleyi kur',
    chatWhichQuestion: 'Bu cevaba hangi soru uyuyor?',
    reviewWaiting: '{n} kelime daha bekliyor. Önümüzdeki günlerde geri gelecekler.',
    factTitle: 'Biliyor muydun?',
    fact3: 'Yalnız değilsin: Hollanda’da 3 milyondan fazla yetişkin okumayı, hesap yapmayı ya da bilgisayar kullanmayı zor buluyor. Pratik yapmak işe yarar.',
    fact7: 'Hollandacayı çok iyi konuşan her 100 göçmenden 69’unun ücretli bir işi var.',
    fact14: 'Birçok kütüphanede bir Taalhuis (“dil evi”) var: Hollandaca öğrenmeye devam etmen için ücretsiz yardım.',
    fact30: 'Her gün biraz pratik yapmak, arada bir çok pratik yapmaktan daha iyidir. Sen bunu 30 gündür yapıyorsun!',
    /* Backup, reminder and reset, a second look */
    backupFileN: 'Bu dosyada {n} ders var.',
    backupFileOne: 'Bu dosyada {n} ders var.',
    backupPhoneN: '{n} dersin var.',
    backupPhoneOne: '{n} dersin var.',
    backupFewer: '“Yerine koy” dosyada olmayan dersleri siler. “Birleştir” her şeyi korur.',
    backupTooBig: 'Bu dosya çok büyük. Bir Vloertaal dosyası çok daha küçüktür.',
    backupNewPhone: 'Yeni telefon mu? Orada da kodun gerekecek.',
    remindEveryDay: 'Hatırlatman: her gün saat {time}',
    remindStop: 'Hatırlatmayı durdur',
    remindStopped: 'Hatırlatmayı takviminden kaldırmak için dosyayı aç.',
    remindStoppedAndroid: 'Hatırlatmayı Google Takvim\'den kendin sil.',
    resetKeeps: 'Derslerin, kelimelerin, günlük serin ve sertifikaların silinir. Dilin ve ayarların kalır.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Yüklenmedi. İnternet var mı?',
    retry: 'Tekrar dene',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal başlatılamıyor.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Önce ilerlemeni sakla. Sonra baştan başla.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Baştan başla', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Bir şeyler ters gitti. İlerlemen kayıtlı.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Neleri zaten biliyorsun?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Yaklaşık 10 dakika. Not yok. Sadece senin için.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: 'Çok şey öğrendin. Testi tekrar yap ve şimdi neler bildiğini gör.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Dinleme', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Kelimeler', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Cümleler', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Dinle. Ne anlama geliyor?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Bilmiyor musun? «Bilmiyorum» seçeneğine dokun. Sorun değil.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Kaydın sadece bu telefonda kalır. Sonra kendini tekrar dinleyebilirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'İyi bir başlangıç! Bunları zaten biliyorsun.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Aferin! Şimdi neler bildiğine bak.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'O zamanki sen', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsYouNow: 'Şimdiki sen', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsKeepGoing: 'Her gün biraz çalış. Böylece gittikçe daha çok öğrenirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Testi yap', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Bilmiyorum', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Öncekinden fazla', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Aşağı yukarı aynı', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Genel olarak: Şimdi öncekinden daha fazla biliyorsun.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    toetsSameAll: 'Genel olarak: Aşağı yukarı öncekiyle aynı.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Önce senin hakkında 5 soru. Doğru ya da yanlış yok.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Bunu yapmaya cesaretin var mı?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Bir şeyi anlamadığını söylemek', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Amirine bir şey sormak', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Yardım istemek', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Bir şeyin güvenli olmadığını söylemek', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Molada bir iş arkadaşıyla biraz sohbet etmek', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Henüz değil', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Biraz', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Evet', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'Birkaç hafta sonra tekrar soracağız.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Hız', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Sakin', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normal', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Sakin: yavaş ve net. Normal: iş arkadaşlarının konuştuğu gibi. Çok şey anlıyorsan “Normal”i seç.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Nasıl gittiğini göster', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Bu kart ilerlemeni gösterir. Öğretmenine, koçuna ya da amirine göster. Sen karar verirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: '“Hayır” da diyebilirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Kartı telefonun yapar. Hiçbir şey gönderilmez. Vloertaal hiçbir şey saklamaz.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'Kartta, Hollandaca:', // nieuw, nalezen // nagelezen AI 31 okt
    coachTopics: 'Biten konular', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Son 4 haftada çalışılan günler', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Son ders, tarihiyle', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Kod: aynı sayılar, kısaca, grup özeti için. İsim yok.', // nieuw, nalezen // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Telefon dinlesin (deneme)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: 'Konuştuktan sonra telefon seni anlayıp anlamadığını söyler. Bu, telefonun kendisinde olur. Bize veya başkalarına hiçbir şey gitmez.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Telefonun önce Hollandacaya ihtiyacı var. Büyük bir indirme: Wi-Fi kullan.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Hollandaca indir', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Şimdi değil', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Hollandaca iniyor. Sonra tekrar dene.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Olmadı. Sonra Wi-Fi ile tekrar dene.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Sadece telefon dinler. Hiçbir şey gönderilmez.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Telefon dinliyor…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Anlaşıldı', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Neredeyse: {word} kelimesini tekrar söyle', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Henüz anlaşılmadı', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Yine de devam', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Daha hızlı ilerlemek ister misin?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Yeni derslerde daha az açıklama. Hollandaca normal hızda.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Evet', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Hayır', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'Sonraki ders biraz daha kısa.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Daha hızlı öğren', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Açık: yeni derslerde daha az açıklama ve Hollandaca normal hızda. Kapalı: eskisi gibi.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Vloertaal hakkında ne düşünüyorsun?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'İyi', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'İdare eder', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'İyi değil', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Teşekkürler! Bu, Vloertaal’ı daha iyi yapmamıza yardım ediyor.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Daha hızlı öğren: yeni derslerde daha az açıklama ve Hollandaca normal hızda.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Birlikte pratik yapın', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'İki kişi, tek telefon', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Bir iş arkadaşı, arkadaş ya da öğretmenle pratik yap. Sırayla okuyun.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: '1. kişi iş arkadaşıdır. 2. kişi cevap verir.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Hiçbir şey kaydedilmez. Puan yok.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: '{n}. kişi', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Cevap', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Dinle', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Sonraki', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Çeviri', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Aferin! Rolleri değiştirip bir kez daha yapmak ister misiniz?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    samenSwap: 'Rolleri değiştirin', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Bitti', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Bunu biliyorum: kısa kontrol', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Bunu zaten biliyorsun. Bu konuyu işaretlemek ister misin?', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'O zaman henüz sertifika yok. Sertifikayı derslerden sonra alırsın.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Dersler bu konuda sana yardım eder.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'İşaretle', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'kontrolle', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Yine de dersleri yap', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: "İletişim", // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Vloertaal ile işim için Hollandaca öğreniyorum. Ücretsiz: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal, iş için Hollandaca öğreten ücretsiz bir uygulamadır.', // nieuw, nalezen
    briefjeHow: 'Kendi telefonunda kısa dersler, kendi dilinde yardımla. Hesap yok.', // nieuw, nalezen
    briefjeOpen: 'Telefonunda aç:', // nieuw, nalezen
    workTry: 'Bugün işte dene', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Şu durumda:', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    workTryThen: 'O zaman şunu söyle:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'İş arkadaşın için', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Bunu Hollandaca konuşan bir iş arkadaşına göster. Pratik yapmana nasıl yardım edebileceği yazıyor.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'İş arkadaşına gönder', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Danışmanın için', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Burada işin nasıl yürüdüğü, basit Hollandaca. Telefonun sesli okur.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Artık çok Hollandaca biliyorsun. Her konuda burada işin nasıl yürüdüğünü de basit Hollandaca okuyabilirsin.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Yok: Hollandaca konuşuyorum', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'İşte söylediğin cümleler', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Hâlâ zor olan kelimeler', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Burada işin nasıl yürüdüğüyle ilgili dersler', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Haklarınla ilgili konuları adıyla göster', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Şimdi ezberden: Hollandacası neydi?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: '2 hafta veya daha önceki kelimeler: {m} kelimeden {n} tanesini hâlâ biliyordun.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'Fiil 2. sıradadır.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Puan', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Tüm puanların', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Ortam', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Sakin', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Oyun', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Sakin: hiçbir şey hareket etmez, kutlama olmaz. Oyun: puan, ses ve bol hareket.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Hizmet ve güvenlik", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Açık havada çalışmak", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Çocuk bakımı", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Atık ve geri dönüşüm", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Gıda sanayii", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Güvenlik", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Tesis hizmetleri", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Yeşil alan ve bahçe", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Seviye', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Başlangıç', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Çırak', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'İş arkadaşı', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Kalfa', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Deneyimli', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Usta', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Yeni seviye:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Hatasız:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Bugünkü hedef', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Bugünkü hedefe ulaştın!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Alet çantanda yeni:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Alet çantam', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Oyunla bir ders bitir. O zaman ilk aletini alırsın.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Daha fazla açıklama', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'Bu ipuçları hakkında', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Bu açıklama henüz bir uzman tarafından kontrol edilmedi.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Bu açıklamanın tarihi: {month}. En yeni kurallar için: Juridisch Loket veya Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Bu açıklamanın tarihi: {month}. En yeni kurallar için: justitiehuis veya werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Vloertaal hakkında daha fazla', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Bunu işte söyledin mi?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Evet, oldu', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Henüz değil', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: 'Aferin! İşte şimdiye kadar {n} cümle başardın.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Aferin! İşteki ilk cümlen başarılı oldu.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Onları Ayarlar’da bulursun.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'İşte başarılı', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Bu cümleleri işte söyledin.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'yaklaşık {n} dk', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'İlerlemen kaydedilmedi. Telefonun dolu mu? Biraz yer aç. Ya da Ayarlar’a git: “İlerlemeni sakla”.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Telefonun bazen ilerlemeni silebilir. Bu yüzden bir kopya sakla.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Şimdi kaydet', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Kendine gönder', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Dosyayı kendine gönder, örneğin WhatsApp’ta veya e-postayla.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Tamam. Bu dosyayı iyi sakla. Onunla ilerlemeni sonra geri yüklersin.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Ne dersin?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Örnek', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Cevabı dinle', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'İş yerinde dinle', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'İşteki gibi gürültü var. Dinle. Sonra sorular gelir.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'İşaretli kelimeyi başa koy', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'İş kuralları', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Artık çok Hollandaca biliyorsun. İş kurallarını da öğrenmek ister misin? O zaman her şey Hollandaca olur.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Evet, göster', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Nasıl söylenir?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Bir sese dokun. Ağzın onu nasıl yaptığını gör.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Hız', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Kelime, ses ses', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Ses', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'İlk adımlar',
    'theme.safe': 'Güvenli çalışma',
    'theme.find': 'İş bulma',
    'theme.job': 'İşin',
    'theme.together': 'Birlikte çalışma',
    'theme.rights': 'Hakların',
    'theme.life': 'Hollanda’da yaşam',
    'theme.sector': 'Sektörün',
    // Unit: First day at work
    'u.firstday': 'İş yerinde ilk gün',
    'l.hello': 'Merhaba de',
    'w.hallo': 'merhaba',
    'w.goedemorgen': 'günaydın',
    'w.dankjewel': 'teşekkür ederim',
    'w.ja': 'evet',
    'w.nee': 'hayır',
    'w.totmorgen': 'yarın görüşürüz',
    's.hello.1': 'Merhaba, ben yeniyim.',
    's.hello.2': 'Günaydın, ben Ali.',
    's.hello.3': 'Teşekkür ederim, yarın görüşürüz!',
    'l.people': 'İş yerindeki insanlar',
    'w.collega': 'iş arkadaşı',
    'w.baas': 'patron',
    'w.leidinggevende': 'amir',
    'w.werk': 'iş',
    'w.naam': 'isim',
    'w.nieuw': 'yeni',
    's.people.1': 'Benim adım Sara.',
    's.people.2': 'Patron kim?',
    's.people.3': 'Ben yeni bir iş arkadaşıyım.',

    // Unit: Asking for help
    'u.help': 'Yardım istemek',
    'l.understand': 'Anlamıyorum',
    'w.begrijpniet': 'anlamıyorum',
    'w.nogeenkeer': 'bir kez daha',
    'w.langzaam': 'yavaşça',
    'w.helpen': 'yardım etmek',
    'w.waar': 'nerede',
    'w.wc': 'tuvalet',
    's.understand.1': 'Bunu tekrar edebilir misiniz?',
    's.understand.2': 'Daha yavaş konuşabilir misiniz?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.understand.3': 'Tuvalet nerede?',

    // Unit: Safety first
    'u.safety': 'Önce güvenlik',
    'u.emergency': "Bir şeyler ters gittiğinde", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Koruyucu ekipman',
    'w.helm': 'baret',
    'w.handschoenen': 'eldivenler',
    'w.veiligheidsschoenen': 'iş güvenliği ayakkabıları',
    'w.hesje': 'reflektörlü yelek',
    'w.bril': 'koruyucu gözlük',
    'w.dragen': 'giymek / takmak',
    's.gear.1': 'Baretini her zaman tak.',
    's.gear.2': 'Eldivenler nerede?',
    's.gear.3': 'Reflektörlü yeleğimi giyiyorum.',
    'l.danger': 'Tehlike!',
    'w.pasop': 'dikkat et',
    'w.stop': 'dur',
    'w.help': 'imdat',
    'w.brand': 'yangın',
    'w.nooduitgang': 'acil çıkış',
    'w.ongeluk': 'kaza',
    's.danger.1': 'Dikkat, zemin ıslak!',
    's.danger.2': 'Acil çıkış nerede?',
    's.danger.3': 'Bir kaza var!',
    'l.alarm': 'Yangın alarmı ve tahliye', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'alarm', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'tahliye etmek (herkes binadan çıkar)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'kaçış yolu', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'merdiven', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'toplanma alanı (herkesin dışarıda buluştuğu yer)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'yangın söndürücü', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Yangın söndürücü nerede?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Binayı tahliye etmemiz gerekiyor.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Merdiveni kullan, asansörü değil.', // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': 'Kaza bildirmek',
    'w.gewond': 'yaralı',
    'w.bloeden': 'kanamak',
    'w.ehbodoos': 'ilk yardım çantası',
    'w.bhver': 'iş yerindeki acil durum görevlisi (ilk yardım, yangın, tahliye)',
    'w.ziekenhuis': 'hastane',
    'w.gebeuren': 'olmak, meydana gelmek',
    's.accident.1': 'İş arkadaşım düştü.',
    's.accident.2': 'Kendimi kestim.',
    's.accident.3': 'Bir kazayı bildirmek istiyorum.',

    // Unit: In the warehouse
    'u.warehouse': 'Depoda',
    'l.things': 'Depodaki eşyalar',
    'w.doos': 'kutu',
    'w.pallet': 'palet',
    'w.heftruck': 'forklift',
    'w.kar': 'taşıma arabası',
    'w.stelling': 'raf sistemi',
    'w.scanner': 'barkod okuyucu',
    's.things.1': 'Kutuyu palete koy.',
    's.things.2': 'Barkod okuyucu nerede?',
    's.things.3': 'Forklift geliyor.',
    'l.directions': 'Yönler ve hareketler',
    'w.links': 'sol',
    'w.rechts': 'sağ',
    'w.boven': 'yukarıda',
    'w.beneden': 'aşağıda',
    'w.tillen': 'kaldırmak',
    'w.pakken': 'almak',
    's.directions.1': 'Kutu solda.',
    's.directions.2': 'Bacaklarınla kaldır.',
    's.directions.3': 'Sağa git.',

    // Unit: Time and schedule
    'u.time': 'Zaman ve çalışma planı',
    'l.shift': 'Vardiyam',
    'w.dienst': 'vardiya',
    'w.pauze': 'mola',
    'w.beginnen': 'başlamak',
    'w.klaar': 'bitmiş',
    'w.telaat': 'geç',
    'w.morgen': 'yarın',
    's.shift.1': 'Vardiyam saat yedide başlıyor.',
    's.shift.2': 'Mola ne zaman?',
    's.shift.3': 'Özür dilerim, geç kaldım.',
    'l.sick': 'Hastalık bildirmek',
    'w.ziek': 'hasta',
    'w.bellen': 'aramak (telefonla)',
    'w.dokter': 'doktor',
    'w.pijn': 'ağrı',
    'w.vandaag': 'bugün',
    'w.beter': 'daha iyi',
    's.sick.1': 'Bugün hastayım.',
    's.sick.2': 'Sırtım ağrıyor.',
    's.sick.3': 'Doktoru arıyorum.',

    'c.hello.q': 'İyi akşamlar!',
    'c.hello.a': 'Yarın görüşürüz!',
    'c.people.q': 'Adın ne?',
    'c.people.a': 'Benim adım Sara.',
    'l.arrive': 'İlk gün: yolunu bulmak',
    'w.ingang': 'giriş',
    'w.receptie': 'resepsiyon, danışma',
    'w.kantine': 'yemekhane',
    'w.kleedkamer': 'soyunma odası',
    'w.buddy': 'rehber iş arkadaşı (başta yardım eden iş arkadaşı)',
    'w.vinden': 'bulmak',
    's.arrive.1': 'Geldiğimi kime bildirmeliyim?',
    's.arrive.2': 'Soyunma odasını bulamıyorum.',
    's.arrive.3': 'Bugün rehber iş arkadaşım kim?',
    'c.arrive.q': 'Günaydın, ne için geldiniz?',
    'c.arrive.a': 'Yeniyim. Bugün başlıyorum.',
    'c.understand.q': 'Anladın mı?',
    'c.understand.a': 'Hayır, bir kez daha lütfen.',
    'c.gear.q': 'Baretin yanında mı?',
    'c.gear.a': 'Evet, takıyorum.',
    'c.danger.q': 'Kaza mı oldu?',
    'c.danger.a': 'Evet, 112\'yi ara!',
    'c.alarm.q': 'Herkes dışarıda mı?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Hayır, iş arkadaşım henüz burada değil.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Ne oldu?',
    'c.accident.a': 'Düştü. Kanıyor.',
    'l.notyet': 'Bunu henüz öğrenmedim',
    'w.nogniet': 'henüz değil',
    'w.mogen': 'izni olmak',
    'w.proberen': 'denemek',
    'w.voordoen': 'yaparak göstermek',
    'w.gevaarlijk': 'tehlikeli',
    'w.uitleg': 'açıklama',
    's.notyet.1': 'Bunu henüz öğrenmedim.',
    's.notyet.2': 'Henüz bir açıklama almadım.',
    's.notyet.3': 'Bunu artık tek başıma yapmama izin var mı?',
    'c.notyet.q': 'Bir dene, kolay.',
    'c.notyet.a': 'Önce bir yapıp gösterebilir misin?',
    'c.things.q': 'Kutu nereye gidecek?',
    'c.things.a': 'Paletin üstüne.',
    'c.directions.q': 'Sol mu, sağ mı?',
    'c.directions.a': 'Sağ, rafın yanında.',
    'c.shift.q': 'Vardiyan ne zaman başlıyor?',
    'c.shift.a': 'Yarın saat yedide.',
    'c.sick.q': 'Hasta mısın?',
    'c.sick.a': 'Evet, bugün evde kalıyorum.',
    // Emergency phrases (phrasebook only)
    'p.call112': "112'yi ara!",
    'p.hurt': 'Yaralandım.',
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Sipariş toplama", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "ürün (tek bir parça)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "göz (raftaki tek bir yer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "etiket, çıkartma", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "toplamak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "eksik olmak (yerinde yok)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "konum (yerin kodu, örneğin A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Bu siparişin ürünlerini topluyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Bu ürün eksik. Göz boş.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "Etiket kutunun üstüne yapıştırılmalı.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Hangi konum?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Üçüncü koridor, on ikinci göz.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Yükleme ve boşaltma", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "kamyon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "şoför", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "indirmek, boşaltmak (eşyaları kamyondan çıkarmak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "transpalet (paleti kaldıran bir el arabası)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "streç film (paletin etrafındaki ince plastik)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "irsaliye (kamyonda ne olduğunu yazan kâğıt)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Kamyon dört numaralı kapıda.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Önce bu paletleri indiriyoruz.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Şoför irsaliyeyi bekliyor.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Bu palet hazır mı?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Hayır, daha etrafına streç film sarılması gerekiyor.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Bu nasıl yapılır?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "nasıl", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "böyle, bu şekilde", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "zor", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "kolay", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "bilmek", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "bu doğru", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Bu nasıl yapılır?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Bu benim için zor.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Böyle doğru mu yapıyorum?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Bunun nasıl yapıldığını biliyor musun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Hayır, bunu henüz bilmiyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Bir şey sorabilir miyim?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "sormak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "kim", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "biraz, kısa bir süre", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "zaman", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "rahatsız etmek (meşgul olan birini)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "tereddüt etmek (emin değilsin)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Bir şey sorabilir miyim?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Pardon, rahatsız ediyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Bana kim yardım edebilir?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Soracağın bir şey var mı?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Evet. Biraz vaktin var mı?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Nerede?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "burada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "orada", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "kayıp (bulamıyorsun)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "çıkış", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "parmakla göstermek (nerede olduğunu göstermek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "yanında", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': "Yolumu kaybettim.", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Çıkış nerede?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Tuvalet orada, yemekhanenin yanında.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Bulabiliyor musun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Hayır. Gösterebilir misin?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Küçük yaralar ve yanıklar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "yara", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "sargı", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "soğutmak (soğuk suyla)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "kesik (bıçaktan ya da keskin bir şeyden olan küçük yara)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "bayılmak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "göz duşu (gözlerini yıkamak için su)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Yanığı suyla soğut.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "Küçük bir kesik. Yaraya bastır.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Göz duşu nerede?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "İş arkadaşım bayılmak üzere.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Bir süre yatsın. Ben yardım getiriyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "112’yi aramak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "acil yardım servisleri (ambulans, itfaiye, polis)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "sokak adı", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "kapı numarası", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "tepki veriyor (onunla konuştuğunda kişi tepki verir)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "karşılamak (birini kapıda beklemek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "hatta kalmak (telefonu kapatmazsın)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "112’yi arıyorum. Bir ambulansa ihtiyacım var.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Sokak adı ve kapı numarası ne?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Ambulansı girişte karşılayacağım.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Onunla konuştuğunda tepki veriyor mu?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Hayır. Tepki vermiyor.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Çalışma planın", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "haftalık çalışma planı (bu hafta kimin ne zaman çalıştığı)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "çalışma planı uygulaması (telefonundaki vardiyaların)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "müsait (o zaman çalışabilirsin)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "değişiklik", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "yerine çalışmak (olmayan biri için çalışmak)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "boş gün, izin günü", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Yeni çalışma planı uygulamada.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Cumartesi müsait misin?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Yarın Sara’nın yerine çalışabilir misin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Çalışma planında bir değişiklik var.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Tamam. Hangi gün çalışmam gerekiyor?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Saatler ve molalar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "öğle molası", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "dinlenme süresi (iki vardiya arasındaki boş zaman)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "iş günü", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "saat listesi (çalıştığın saatleri yazdığın yer)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "erken çıkmak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "art arda (birbiri ardına)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Saatlerimi saat listesine yazıyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Bugün bir saat erken çıkabilir miyim?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Art arda altı gün çalıştım.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Öğle molan ne zaman?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "Saat on ikide, yarım saat.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "İlk haftaların", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "tanıtım turu (biri sana binayı gezdirir)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "rehber (ilk haftalarında sana yardım eden iş arkadaşı)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "not defteri", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "bir iş arkadaşına eşlik etmek (ve nasıl çalıştığını izlemek)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "hatırlamak, aklında tutmak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "tek başına (yardım almadan)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Bir kez daha gösterir misin?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Bugün Sara’ya eşlik ediyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Bunu not defterime yazıyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Turdan her şeyi hatırlıyor musun?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Neredeyse her şeyi. Yemekhane neredeydi?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Sipariş toplama ve reach truck", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "sipariş toplayıcı (siparişleri toplayan çalışan; ayrıca yüksekten ürün almak için üzerinde durduğun küçük araç)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "reach truck (çok yüksek raflar için bir forklift; çatalları öne doğru uzanır)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "toplama listesi (toplaman gereken ürünlerin listesi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "okutmak, taramak", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "yaya (yürüyen kişi)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "ısınmak (soğukta çalıştıktan sonra sıcak bir yerde)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Toplama listesindeki her ürünü okutuyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Yayalar yaya yolunda yürür.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Dondurucu odada termal kıyafet giyiyorum.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Biraz reach truck’ı kullanabilir misin?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Hayır, buna iznim yok. Bunun için eğitimim yok.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
