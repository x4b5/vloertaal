import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'fr',
  name: 'French',
  nativeName: 'Français',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Apparence',
    themeAuto: 'Automatique',
    themeSand: 'Sable', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Port', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Veste de travail', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Sombre',
    voice: 'Voix néerlandaise',
    voiceAuto: 'Automatique',
    voiceHint: 'Touche 🔊 pour écouter. Les voix de Vloertaal sont les mêmes sur chaque téléphone ; les autres viennent de ton téléphone.',
    voiceNone: 'Cet appareil n’a pas de voix néerlandaise. Tu peux en ajouter une dans les réglages de ton téléphone (Synthèse vocale).',
    appTagline: 'Le néerlandais pour le travail',
    chooseLanguage: 'Choisis ta langue d’aide',
    englishOnly: 'Anglais seulement',
    beta: 'Traduction pas encore vérifiée', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'jour d’affilée', many: 'jours d’affilée', other: 'jours d’affilée' },
    streakStarted: 'Ta série de jours a commencé ! Reviens demain.',
    streakGrew: { one: '{n} jour d’affilée ! Continue comme ça.', many: '{n} jours d’affilée ! Continue comme ça.', other: '{n} jours d’affilée ! Continue comme ça.' },
    start: 'Commencer',
    practice: 'Pratiquer encore',
    locked: 'Termine d’abord la leçon d’avant',
    newWord: 'Nouveau mot',
    tapToHear: 'Touche pour écouter',
    sayItAloud: 'Dis-le à voix haute.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Dis-le tout bas, ou dans ta tête.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'Qu’est-ce que ça veut dire ?',
    snapQuestion: 'Tu comprends ?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Oui, d’accord.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'C’est bien de demander !', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Bien compris !', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Tu vois ? Mieux valait demander.', // nieuw, nalezen // nagelezen AI 28 nov
    whichOneIs: 'Lequel est “{word}” ?',
    mixLesson: 'Révision mélangée',
    whatDoYouHear: 'Qu’est-ce que tu entends ?',
    buildSentence: 'Fais cette phrase en néerlandais',
    typeWhatYouHear: 'Écris ce que tu entends',
    check: 'Vérifier',
    continue: 'Continuer',
    correct: 'Très bien !',
    almost: 'Correct, mais attention à l’orthographe',
    incorrect: 'Pas tout à fait',
    correctAnswer: 'Bonne réponse',
    rightAnswerIs: 'La bonne réponse est :', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'La meilleure réponse est :', // nieuw, nalezen // nagelezen AI 28 nov
    yourAnswer: 'Ta réponse',
    inARow: '{n} d’affilée',
    cantListen: 'Je ne peux pas écouter maintenant',
    learnWriting: 'Je veux aussi apprendre à écrire',
    learnWritingHint: 'Activé : tu écris les mots que tu entends avec des lettres. Désactivé : tu choisis le mot écrit que tu entends.',
    tagRepeat: 'Encore',
    readAloud: 'Lire à voix haute',
    lessonComplete: 'Leçon terminée !',
    phrasebook: 'Phrases d’urgence',
    phrasebookHint: 'Touche une phrase pour l’entendre. Tu peux aussi montrer ton écran à un collègue.',
    whoToCall: 'Des problèmes au travail ? Qui peut t’aider',
    who112: 'Urgence : danger de mort, incendie ou crime en train de se passer.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    whoLegal: 'Conseils gratuits sur ton contrat, ton salaire ou un licenciement.',
    whoInspection: 'Signale un travail dangereux, un salaire trop bas ou de l’exploitation. Tu peux le faire de façon anonyme.',
    whoFairwork: 'On t’exploite au travail, ou tu penses que c’est le cas.',
    who113: 'Tu penses à mettre fin à ta vie, ou tu t’inquiètes pour quelqu’un. Gratuit, jour et nuit.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Violence ou maltraitance à la maison, contre toi ou contre une autre personne. Gratuit, possible aussi sans donner ton nom.', // nieuw, nalezen // nagelezen AI 28 nov
    settings: 'Réglages',
    helpLanguage: 'Langue d’aide',
    resetProgress: 'Effacer ma progression',
    resetConfirm: 'Supprimer toute la progression sur cet appareil ?',
    audioUnavailable: 'Le son n’est pas disponible sur cet appareil.',
    slow: 'Lent',
    completeChat: 'Complète la conversation',
    meaning: 'Sens',
    navRoute: 'Leçons',
    navWords: 'Aide',
    rightFirstTime: 'Juste du premier coup',
    newWords: 'Nouveaux mots',
    wordsLearnedN: { one: '{n} mot appris', many: '{n} mots appris', other: '{n} mots appris' },
    practiseMistakes: { one: 'Revoir les erreurs · encore {n}', many: 'Revoir les erreurs · encore {n}', other: 'Revoir les erreurs · encore {n}' },
    quitHint: 'Tes réponses de cette leçon ne sont pas enregistrées.',
    keepGoing: 'Continuer',
    stopLesson: 'Arrêter la leçon',
    fullVersion: 'Version complète',
    unlockFull: 'Débloquer la version complète',
    unlockHint: 'Avec le code, toutes les leçons s’ouvrent. Le code est gratuit. Pas encore de code ? Demande à ton professeur ou à ton coach, ou écris-nous :',
    codeNotFull: 'Ce code n’ouvre pas la version complète. Demande un nouveau code.',
    password: 'Code',
    enterPassword: 'Entre le code',
    wrongPassword: 'Ce code n’est pas bon. Essaie encore.',
    unlock: 'Débloquer',
    sector: 'Ton travail',
    chooseSector: 'Où travailles-tu ?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'Dans quel pays travailles-tu ?',
    countryHint: 'Tu reçois alors les mots et les conseils de ce pays.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'Ce que tu apprends est seulement sur ce téléphone.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Utilise toujours ce téléphone.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    countryNl: 'Pays-Bas',
    countryBe: 'Belgique (Flandre)',
    tipsNote: 'Ces conseils parlent du travail aux Pays-Bas. Ce sont des informations générales, pas un conseil juridique.',
    sectorHint: 'Les leçons pour ton travail arrivent dès le début. Tu peux changer ça plus tard dans les Réglages.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    otherSectors: 'Autres secteurs',
    reviewToday: 'Révision du jour',
    reviewTodayN: { one: 'Mot à revoir : {n} · quelques minutes', many: 'Mots à revoir : {n} · quelques minutes', other: 'Mots à revoir : {n} · quelques minutes' },
    notSureYet: 'Je ne sais pas encore',
    sectorLogistics: 'Logistique',
    sectorConstruction: 'Construction',
    sectorProduction: 'Production',
    sectorCare: 'Soins',
    sectorHospitality: 'Hôtellerie et restauration',
    sectorRetail: 'Magasin et supermarché', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Nettoyage',
    sectorHorticulture: 'Horticulture', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Technique', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Garage', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Son',
    soundOn: 'Avec le son',
    withoutSound: 'Sans le son',
    quietHint: 'Sans le son, les leçons n’ont pas d’exercices d’écoute et rien ne joue tout seul. Touche 🔊 pour entendre un mot, par exemple avec des écouteurs.',
    soundOffToast: 'Sans le son. Tu peux remettre le son dans les Réglages.',
    noInternetSound: 'Pas d’internet : le son ne marche pas pour l’instant.', // nieuw, nalezen // nagelezen AI 28 nov
    stillToDo: 'Encore à faire aujourd’hui',
    streakStopped: { one: 'Ta série s’est arrêtée à {n} jour. Recommence aujourd’hui.', many: 'Ta série s’est arrêtée à {n} jours. Recommence aujourd’hui.', other: 'Ta série s’est arrêtée à {n} jours. Recommence aujourd’hui.' },
    recordN: { one: 'Ton record : {n} jour', many: 'Ton record : {n} jours', other: 'Ton record : {n} jours' },
    workWeek: 'Ta semaine de travail',
    freeDaysN: { one: 'Jour libre : {n}. Si tu rates un jour, ta série continue.', many: 'Jours libres : {n}. Si tu rates un jour, ta série continue.', other: 'Jours libres : {n}. Si tu rates un jour, ta série continue.' },
    restDay: 'Jour libre',
    tier3: '3 jours d’affilée',
    tier7: '1 semaine d’affilée',
    tier14: '2 semaines d’affilée',
    tier30: '1 mois d’affilée',
    reviewDone: 'Fini pour aujourd’hui',
    tomorrowN: { one: 'Demain : {n} mot', many: 'Demain : {n} mots', other: 'Demain : {n} mots' },
    firstWordsTomorrow: 'Demain, tes premiers mots reviennent',
    extraRound: 'Tour en plus',
    reviewFirstHint: 'D’abord réviser. Comme ça, tu retiens plus.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} mot mieux retenu', many: '{n} mots mieux retenus', other: '{n} mots mieux retenus' },
    noMistakes: 'Aucune erreur',
    nextUp: 'Ensuite',
    installTitle: 'Mets Vloertaal sur ton écran d’accueil',
    installHint: 'Il s’ouvre alors comme une appli, même sans internet.',
    installAdd: 'Ajouter à l’écran d’accueil',
    iosStep1: 'Touche “Partager”',
    iosStep2: 'Touche “Sur l’écran d’accueil”',
    iosStep3: 'C’est fait !',
    backupTitle: 'Garde ta progression',
    backupHint: 'Ta progression est seulement sur ce téléphone. Enregistre-la dans un fichier, par exemple pour un nouveau téléphone.',
    backupSave: 'Télécharger',
    backupLoad: 'Restaurer', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    backupBad: 'Ce n’est pas un fichier Vloertaal.',
    backupAsk: 'Ajouter ce fichier à ta progression, ou remplacer ta progression ?',
    backupMerge: 'Combiner',
    backupReplace: 'Remplacer',
    backupBack: 'Ta progression est revenue.',
    backupNothingNew: 'Rien de nouveau : c’était déjà sur ton téléphone.',
    cancel: 'Annuler',
    remindTitle: 'Rappelle-moi chaque jour',
    remindEvent: 'C’est l’heure de ton néerlandais (10 minutes)',
    remindHint: 'Le calendrier de ton téléphone te le rappelle. Rien ne nous est envoyé.',
    remindBefore: 'Avant le travail',
    remindAfter: 'Après le travail',
    remindOwn: 'Autre heure',
    remindAdd: 'Ajouter à mon calendrier',
    remindAdded: 'Ouvre le fichier pour l’ajouter à ton calendrier.',
    remindAddedAsk: 'Ajouté ? Alors tu le vois dans ton agenda.', // nieuw, nalezen // nagelezen AI 28 nov
    navAbout: 'À propos',
    tagMeaning: 'Sens',
    tagPick: 'Choisir',
    tagListen: 'Écouter',
    tagType: 'Écrire',
    tagMatch: 'Paires',
    tagBuild: 'Phrase',
    tagChat: 'Parler',
    tagSituation: 'Situation',
    tagTip: 'Conseil',
    more: 'Plus',
    less: 'Moins',
    daysUnit: { one: 'jour', many: 'jours', other: 'jours' },
    wordsUnit: { one: 'mot', many: 'mots', other: 'mots' },
    countTitle: 'Compter de façon anonyme',
    countHint: 'L’appli compte combien de fois on fait les leçons, et à peu près combien de temps elles durent. Et si l’appli a une erreur quelque part. Pas de nom, pas de compte, pas de suivi.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Certificat',
    myCertificates: 'Mes certificats',
    certsEmpty: 'Termine toutes les leçons d’un sujet. Tu reçois alors un certificat.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certEarned: 'Certificat obtenu !',
    certEarnedHint: 'Tu as terminé toutes les leçons de ce sujet.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certView: 'Voir',
    certLater: 'Plus tard',
    certPrint: 'Imprimer ou enregistrer en PDF',
    certSaved: 'L’image est enregistrée.',
    certNameHint: 'Ton nom reste seulement sur ce téléphone. Tu peux aussi laisser la case vide.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    certChangeName: 'Changer le nom',
    certPractice: 'Certificat d’entraînement, pas un diplôme officiel',
    resumeLesson: 'Reprendre la leçon',
    restartLesson: 'Recommencer',
    quitKept: 'Ta progression est gardée. Tu peux continuer plus tard.',
    bestAnswer: 'Meilleure réponse',
    inReview: 'en vérification',
    today: 'Aujourd’hui',
    playAgain: 'Écouter encore',
    daysUnitOne: 'jour',
    wordsUnitOne: 'mot',
    wordsLearnedOne: '{n} mot appris',
    tomorrowOne: 'Demain : {n} mot',
    wordsStrongerOne: '{n} mot mieux retenu',
    recordOne: 'Ton record : {n} jour',
    streakStoppedOne: 'Ta série s’est arrêtée à {n} jour. Recommence aujourd’hui.',
    letterTiles: 'Lettres',
    useKeyboard: 'Clavier',
    skippedN: { one: '{n} exercice sauté, pas compté', many: '{n} exercices sautés, pas comptés', other: '{n} exercices sautés, pas comptés' },
    stampLater: 'Revient plus tard',
    stampDone: 'Fait',
    chooseNext: 'Choisis ton prochain sujet',
    recommended: 'Conseillé',
    allTopics: 'Tous les sujets',
    topicsOrder: 'Afficher les sujets',
    privacyLink: 'Lire la déclaration de confidentialité (en néerlandais)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'Qu’est-ce que tu veux apprendre ?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Apprendre le néerlandais pour le travail, et comment le travail se passe ici', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Je parle déjà néerlandais : seulement les règles du travail', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Apprendre le néerlandais', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Passer à Werkregels ?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Tout sera en néerlandais. Ta langue d’aide s’arrête.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Jusqu’à ton retour, tu révises des règles, pas des mots.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'Ta progression reste enregistrée. Tu peux revenir ici.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Oui, aller à Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Par thème',
    inOrder: 'Dans l’ordre',
    searchTopics: 'Chercher un sujet', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Aucun sujet avec ce mot.', // nieuw, nalezen // nagelezen AI 28 nov
    lessonsUnit: { one: 'leçon', many: 'leçons', other: 'leçons' },
    lessonsUnitOne: 'leçon',
    topicsUnit: { one: 'sujet', many: 'sujets', other: 'sujets' },
    topicsUnitOne: 'sujet',
    allTopicsDone: 'Tu as terminé tous les sujets. Bravo !',
    // Speaking practice
    tagSpeak: 'Parler',
    speakPrompt: 'Écoute, puis dis-le',
    tapToSpeak: 'Touche et parle',
    stopRecording: 'Stop',
    micPrivacy: "Personne d’autre ne t’entend. Rien n’est envoyé.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Micro coupé. Dis-le à voix haute maintenant, puis continue.',
    cantSpeak: 'Je ne peux pas parler maintenant',
    soundsSame: 'Ça sonne pareil',
    sayAgain: 'Redis-le',
    hearMine: 'Écoute-toi', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Avant et maintenant', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'Ton premier essai : {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Dis-le ensemble", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Dis-le en même temps que la voix. Rien n’est enregistré.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Maintenant, à toi", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Les erreurs font partie de l’apprentissage. Pas compris ? Redis-le une fois.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave2: "Du stress ? C’est normal. Dis-le quand même.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave3: "Pas besoin de le dire parfaitement. Essaie, c’est tout.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonTitle: "Pourquoi apprends-tu le néerlandais ?", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHint: "Choisis-en un ou deux.", // nieuw, nalezen // nagelezen AI 28 nov
    reasonDone: "Terminé", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Bien faire mon travail", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Mes enfants", // nieuw, nalezen // nagelezen AI 28 nov
    reasonColleagues: "Parler avec mes collègues", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Régler les choses moi-même", // nieuw, nalezen // nagelezen AI 28 nov
    reasonJob: "Un meilleur travail", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Me sentir chez moi aux Pays-Bas", // nieuw, nalezen // nagelezen AI 28 nov
    speakMe: 'Moi',
    speakingPractice: 'Pratique de l’oral',
    speakingHint: "Dis des mots à voix haute et compare. Personne d’autre ne t’entend : rien n’est envoyé. Ton premier enregistrement d’une phrase reste sur ton téléphone, pour comparer plus tard.", // nieuw, nalezen // nagelezen AI 28 nov
    savingOffline: 'Enregistrement…',
    savedOffline: 'Enregistré hors ligne',
    offlineNoSpace: 'Pas assez de place sur ce téléphone. Supprime un sujet enregistré ou libère de la place.',
    offlineFailed: 'L’enregistrement n’a pas marché. Vérifie ton internet et réessaie.',
    pocketCard: 'Aide-mémoire', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    pocketSave: 'Enregistrer comme image',
    textSize: 'Taille du texte',
    textNormal: 'Normale',
    textLarge: 'Grande',
    textXl: 'Très grande',
    showEnglish: 'Afficher aussi l’anglais',
    genderTitle: 'Femme ou homme ?',
    genderHint: 'Pour que ta langue te parle de la bonne façon.',
    genderWoman: 'Femme',
    genderMan: 'Homme',
    genderNone: 'Je préfère ne pas le dire',
    langGuessYes: 'Oui',
    langGuessOther: 'Autre langue',
    settingsLangMe: 'Langue et moi',
    settingsLessons: 'Leçons',
    settingsPhone: 'Ce téléphone',
    settingOn: 'Activé',
    settingOff: 'Désactivé',
    sectorGroupMake: 'Fabriquer et transporter',
    sectorGroupCare: "Soins et enfants", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Commerce et restauration', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Bâtiment et technique', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Voix de femme',
    voiceMan: 'Voix d’homme',
    writingPick: 'Choisis le mot',
    settingWriting: 'Écriture',
    settingKeepLessons: 'Garder les leçons sur ce téléphone',
    settingKeepLessonsHint: 'Le sujet que tu apprends maintenant est enregistré sur ce téléphone. Il marche donc aussi sans internet. Les sujets terminés sont ensuite supprimés.',
    otherTopicLink: 'Autre sujet',
    remindAsk: 'On te le rappelle chaque jour ?',
    remindYes: 'Oui, après le travail',
    remindNo: 'Non merci',
    remindPickTime: 'Quand veux-tu un rappel ?',
    certSaveShare: 'Enregistrer ou partager',
    pauseTitle: 'Pause',
    back: 'Retour',
    quitLesson: 'Quitter la leçon',
    playAudio: 'Écouter',
    scrollDown: 'Faire défiler vers le bas',
    lessonProgress: 'Progression de la leçon',
    mainMenu: 'Menu principal',
    spaceKey: 'Espace',
    langNotOnPhone: 'Cette langue n’est pas encore sur ce téléphone. Connecte-toi à internet pour changer.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'Choisis une heure toi-même',
    gateWho: 'Ton professeur, ton coach ou ton employeur te donne le code.',
    gateTrust: 'Pas de compte. Pas de nom. Tout reste sur ce téléphone.',
    codeAccepted: 'Code accepté',
    startFree: 'Pas de code ? Commence par les premières leçons',
    bramHello: 'Content de te voir.',
    bramBack: 'Bon retour. On continue.',
    bramRested: 'Hier, c’était ton jour libre. Ta série continue.',
    bramDueN: { one: '{n} mot à revoir aujourd’hui.', many: '{n} mots à revoir aujourd’hui.', other: '{n} mots à revoir aujourd’hui.' },
    bramDueOne: '{n} mot à revoir aujourd’hui.',
    bramDayN: 'Jour {n} d’affilée.',
    bramDone: 'Fini pour aujourd’hui. À demain.',
    bramPerfect: 'Très bien. Tu connais ces mots.',
    bramGood: 'Bon travail. Pas à pas.',
    bramHard: 'C’est bien d’avoir pratiqué. Les mots difficiles reviennent.',
    bramReview: 'Bien. Répéter t’aide à retenir.',
    bramIntro: 'Je suis Bram, ton collègue.',
    bramIntroHello: 'Bonjour, je suis Bram.',
    showDutch: 'Afficher en néerlandais',
    showAnswers: 'Afficher les réponses', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Dernière mise à jour : {date}',
    /* G4 b3 */
    buildListen: 'Écoute et fais la phrase',
    chatWhichQuestion: 'Quelle question va avec cette réponse ?',
    reviewWaiting: 'Encore des mots qui attendent : {n}. Ils reviennent dans les prochains jours.',
    factTitle: 'Le savais-tu ?',
    fact3: { m: 'Tu n’es pas seul : plus de 3 millions d’adultes aux Pays-Bas ont du mal à lire, à calculer ou avec l’ordinateur. Pratiquer aide.', f: 'Tu n’es pas seule : plus de 3 millions d’adultes aux Pays-Bas ont du mal à lire, à calculer ou avec l’ordinateur. Pratiquer aide.', x: 'Tu n’es pas la seule personne dans ce cas : plus de 3 millions d’adultes aux Pays-Bas ont du mal à lire, à calculer ou avec l’ordinateur. Pratiquer aide.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    fact7: 'Parmi les migrants qui parlent très bien néerlandais, 69 sur 100 ont un travail payé.',
    fact14: 'Beaucoup de bibliothèques ont un Taalhuis : une aide gratuite pour continuer à apprendre le néerlandais.',
    fact30: 'Un peu de pratique chaque jour marche mieux que beaucoup de temps en temps. Ça fait déjà 30 jours que tu le fais !', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Ce fichier a {n} leçon.', many: 'Ce fichier a {n} leçons.', other: 'Ce fichier a {n} leçons.' },
    backupFileOne: 'Ce fichier a {n} leçon.',
    backupPhoneN: { one: 'Tu as {n} leçon.', many: 'Tu as {n} leçons.', other: 'Tu as {n} leçons.' },
    backupPhoneOne: 'Tu as {n} leçon.',
    backupFewer: '“Remplacer” supprime les leçons qui ne sont pas dans le fichier. “Combiner” garde tout.',
    backupTooBig: 'Ce fichier est trop gros. Un fichier Vloertaal est beaucoup plus petit.',
    backupNewPhone: 'Nouveau téléphone ? Là aussi, tu as besoin de ton code.',
    remindEveryDay: 'Ton rappel : chaque jour à {time}',
    remindStop: 'Arrêter le rappel',
    remindStopped: 'Ouvre le fichier pour retirer le rappel de ton calendrier.',
    remindStoppedAndroid: 'Supprime toi-même le rappel dans Google Agenda.',
    resetKeeps: 'Tes leçons, tes mots, ta série et tes certificats sont supprimés. Ta langue et tes réglages restent.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Pas chargé. Tu as internet ?',
    retry: 'Réessayer',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'Vloertaal ne peut pas démarrer.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Garde d’abord ta progression. Ensuite, recommence.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Recommencer', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Un problème est survenu. Ta progression est enregistrée.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'Qu’est-ce que tu sais déjà ?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Environ 10 minutes. Il n’y a pas de note. C’est juste pour toi.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: 'Tu as beaucoup appris. Refais le test et regarde ce que tu sais maintenant.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Écouter', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Mots', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Phrases', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Écoute. Qu’est-ce que ça veut dire ?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Tu ne sais pas ? Touche « Je ne sais pas ». Ce n’est pas grave.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'Ton enregistrement reste seulement sur ce téléphone. Plus tard, tu pourras t’écouter à nouveau.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Bon début ! Voilà ce que tu sais déjà.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Bravo ! Regarde ce que tu sais maintenant.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Toi avant', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Toi maintenant', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Entraîne-toi un peu chaque jour. Comme ça, tu apprends de plus en plus.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Faire le test', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Je ne sais pas', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Plus qu’avant', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'À peu près pareil', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'Au total : tu en sais plus qu’avant.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'Au total : à peu près pareil qu’avant.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'D’abord 5 questions sur toi. Il n’y a pas de bonne ou de mauvaise réponse.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Est-ce que tu oses le faire ?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Dire que tu ne comprends pas quelque chose', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Demander quelque chose à ton ou ta responsable', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Demander de l’aide', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Dire que quelque chose n’est pas sûr', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Discuter un peu avec quelqu’un du travail à la pause', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Pas encore', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Un peu', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Oui', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'Dans quelques semaines, nous te le redemandons.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Vitesse', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Calme', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normal', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: 'Calme : lent et clair. Normal : comme parlent les collègues. Choisis “Normal” si tu comprends déjà beaucoup.', // nieuw, nalezen // nagelezen AI 31 okt
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Montre où tu en es', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Cette carte montre tes progrès. Montre-la à ton professeur, ton coach ou ton chef. C’est toi qui décides.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: 'Tu peux aussi dire non.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'Ton téléphone fait la carte. Rien n’est envoyé. Vloertaal ne garde rien.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'Sur la carte, en néerlandais :', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Sujets terminés', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    coachDays: 'Jours d’exercice ces 4 dernières semaines', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Dernière leçon, avec la date', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Code : les mêmes chiffres, en version courte, pour un aperçu du groupe. Sans nom.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'Le téléphone écoute (essai)', // nieuw, nalezen // nagelezen AI 28 nov
    listenHint: 'Quand tu as parlé, le téléphone dit s’il t’a compris. Ça se passe dans le téléphone lui-même. Rien n’est envoyé, ni à nous ni à d’autres.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    listenNeedsPack: 'D’abord, le téléphone a besoin du néerlandais. C’est un gros téléchargement : utilise le wifi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Télécharger le néerlandais', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Pas maintenant', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'Le néerlandais arrive. Réessaie plus tard.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Ça n’a pas marché. Réessaie plus tard, avec le wifi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Seul le téléphone écoute. Rien n’est envoyé.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'Le téléphone écoute…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Compris', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Presque : redis {word}', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Pas encore compris', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Continuer quand même', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Tu veux aller plus vite ?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Moins d’explications dans les nouvelles leçons. Le néerlandais à vitesse normale.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Oui', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Non', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'La prochaine leçon est un peu plus courte.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Apprendre plus vite', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Activé : moins d’explications dans les nouvelles leçons et le néerlandais à vitesse normale. Désactivé : comme avant.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'Que penses-tu de Vloertaal ?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Bien', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Moyen', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Pas bien', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Merci ! Cela nous aide à améliorer Vloertaal.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Apprendre plus vite : moins d’explications dans les nouvelles leçons et le néerlandais à vitesse normale.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'S’entraîner à deux', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Deux personnes, un téléphone', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Entraîne-toi avec un collègue, un ami ou un professeur. Lisez chacun votre tour.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'La personne 1 est le collègue. La personne 2 répond.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Rien n’est enregistré. Il n’y a pas de score.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Personne {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Réponse', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Écouter', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Suivant', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Traduction', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Bravo ! Changer de rôle et recommencer ?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Changer de rôle', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Terminer', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Je connais déjà : test court', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Tu connais déjà ça. Cocher ce sujet ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkNoCert: 'Alors pas encore de certificat. Tu l’as après les leçons.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'Les leçons t’aident pour ce sujet.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    checkMark: 'Cocher', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'par test', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Faire quand même les leçons', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: 'Communication', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'J’apprends le néerlandais pour mon travail avec Vloertaal. Gratuit : {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'Vloertaal est une appli gratuite pour apprendre le néerlandais du travail.', // nieuw, nalezen
    briefjeHow: 'Des leçons courtes sur ton téléphone, avec de l’aide dans ta langue. Sans compte.', // nieuw, nalezen
    briefjeOpen: 'Ouvre sur ton téléphone :', // nieuw, nalezen
    workTry: 'Essaie aujourd’hui au travail', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Quand :', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Alors dis :', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Pour ton collègue', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Montre ceci à un collègue qui parle néerlandais. Il y est écrit comment il peut t’aider à t’entraîner.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'Envoie-le à ton collègue', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Pour ton coach', // nieuw, nalezen (AI-correctie 28 nov 2026)
    rulesInDutch: 'Comment le travail se passe ici, en néerlandais simple. Le téléphone le lit à voix haute.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Tu connais maintenant beaucoup de néerlandais. Pour chaque thème, tu peux aussi lire comment le travail se passe ici, en néerlandais simple.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Aucune : je parle néerlandais', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Phrases dites au travail', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Mots encore difficiles', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Leçons sur la façon dont le travail se passe ici', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Afficher le nom des sujets sur tes droits', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Maintenant de mémoire : c’était quoi en néerlandais ?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Mots d’il y a 2 semaines ou plus : tu en connaissais encore {n} sur {m}.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'Le verbe est en 2e position.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    playPoints: 'Points', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Tous tes points', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Ambiance', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Calme', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Jeu', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Calme : rien ne bouge, pas de fête. Jeu : des points, des sons et beaucoup de mouvement.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Services et sécurité", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Travailler dehors", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Garde d’enfants", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Déchets et recyclage", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Industrie alimentaire", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Sécurité et surveillance", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Services généraux", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Espaces verts et jardins", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Niveau', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Novice', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Élève', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'Collègue', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Pro', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Avec de l’expérience', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Spécialiste', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Nouveau niveau :', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Aucune erreur :', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Objectif du jour', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Objectif du jour atteint !', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Nouveau dans ta caisse à outils :', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'Ma caisse à outils', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Termine une leçon avec le jeu. Alors tu reçois ton premier outil.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Plus d’explications', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'À propos de ces conseils', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Un expert n’a pas encore vérifié cette explication.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Date de cette explication : {month}. Pour les règles les plus récentes, consulte le Juridisch Loket ou Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Date de cette explication : {month}. Pour les règles les plus récentes, consulte le justitiehuis ou werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'En savoir plus sur Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Tu l’as dit au travail ?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Oui, ça a marché', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Pas encore', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Bravo ! Déjà {n} phrase réussie au travail.', many: 'Bravo ! Déjà {n} phrases réussies au travail.', other: 'Bravo ! Déjà {n} phrases réussies au travail.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Bravo ! Ta première phrase au travail a marché.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Tu les trouves dans Réglages.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Réussi au travail', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Tu as dit ces phrases au travail.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'environ {n} min', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'Ta progression n’a pas été enregistrée. Ton téléphone est plein ? Libère un peu de place. Ou va dans Réglages : « Garde ta progression ».', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'Ton téléphone peut parfois effacer ta progression. Alors garde une copie.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Garder maintenant', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'T’envoyer le fichier', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Envoie-toi le fichier, par exemple sur WhatsApp ou par e-mail.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'C’est fait. Garde bien ce fichier. Avec lui, tu récupères ta progression plus tard.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'Que dis-tu ?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Exemple', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Écoute la réponse', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Écoute au travail', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Il y a du bruit, comme au travail. Écoute. Ensuite viennent les questions.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Mets le mot marqué au début', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'Les règles du travail', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Tu connais maintenant beaucoup de néerlandais. Tu veux aussi apprendre les règles du travail ? Alors tout est en néerlandais.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Oui, montre-moi', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Comment le dire ?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Touche un son. Regarde comment la bouche le fait.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Vitesse', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'Le mot, son par son', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Son', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Pour commencer',
    'theme.safe': 'Travailler en sécurité',
    'theme.find': 'Trouver du travail',
    'theme.job': 'Ton emploi',
    'theme.together': 'Travailler ensemble',
    'theme.rights': 'Tes droits',
    'theme.life': 'Vivre aux Pays-Bas',
    'theme.sector': 'Ton secteur',
    // Unit: First day at work
    'u.firstday': 'Premier jour de travail',
    'l.hello': 'Dire bonjour',
    'w.hallo': 'bonjour, salut',
    'w.goedemorgen': 'bonjour (le matin)',
    'w.dankjewel': 'merci',
    'w.ja': 'oui',
    'w.nee': 'non',
    'w.totmorgen': 'à demain',
    's.hello.1': { m: 'Bonjour, je suis nouveau.', f: 'Bonjour, je suis nouvelle.', x: 'Bonjour, je viens d’arriver.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.hello.2': 'Bonjour, je suis Ali.',
    's.hello.3': 'Merci, à demain !',
    'l.people': 'Les gens au travail',
    'w.collega': 'le / la collègue',
    'w.baas': 'le patron',
    'w.leidinggevende': 'le / la responsable',
    'w.werk': 'le travail',
    'w.naam': 'le nom',
    'w.nieuw': 'nouveau',
    's.people.1': 'Je m’appelle Sara.',
    's.people.2': 'Qui est le patron ?',
    's.people.3': { m: 'Je suis un nouveau collègue.', f: 'Je suis une nouvelle collègue.', x: 'Je viens d’arriver dans l’équipe.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)

    // Unit: Asking for help
    'u.help': 'Demander de l’aide',
    'l.understand': 'Je ne comprends pas',
    'w.begrijpniet': 'je ne comprends pas',
    'w.nogeenkeer': 'encore une fois',
    'w.langzaam': 'lentement',
    'w.helpen': 'aider',
    'w.waar': 'où',
    'w.wc': 'les toilettes',
    's.understand.1': 'Vous pouvez répéter ?',
    's.understand.2': 'Vous pouvez parler plus lentement ?',
    's.understand.3': 'Où sont les toilettes ?',

    // Unit: Safety first
    'u.safety': 'La sécurité d’abord',
    'u.emergency': "Quand quelque chose tourne mal", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Les équipements de protection',
    'w.helm': 'le casque',
    'w.handschoenen': 'les gants',
    'w.veiligheidsschoenen': 'les chaussures de sécurité',
    'w.hesje': 'le gilet de sécurité',
    'w.bril': 'les lunettes de sécurité',
    'w.dragen': 'porter (sur soi)',
    's.gear.1': 'Porte toujours ton casque.',
    's.gear.2': 'Où sont les gants ?',
    's.gear.3': 'Je porte mon gilet de sécurité.',
    'l.danger': 'Danger !',
    'w.pasop': 'attention',
    'w.stop': 'stop',
    'w.help': 'au secours',
    'w.brand': 'l’incendie, le feu',
    'w.nooduitgang': 'la sortie de secours',
    'w.ongeluk': 'l’accident',
    's.danger.1': 'Attention, le sol est mouillé !',
    's.danger.2': 'Où est la sortie de secours ?',
    's.danger.3': 'Il y a un accident !',
    'l.alarm': 'L’alarme incendie et l’évacuation', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'l’alarme', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'évacuer (tout le monde quitte le bâtiment)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'le chemin d’évacuation', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'l’escalier', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'le point de rassemblement (où tout le monde se retrouve dehors)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'l’extincteur', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Où est l’extincteur ?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Nous devons évacuer le bâtiment.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Prends l’escalier, pas l’ascenseur.', // nieuw, nalezen // nagelezen AI 22 nov
    'l.accident': 'Signaler un accident',
    'w.gewond': 'blessé',
    'w.bloeden': 'saigner',
    'w.ehbodoos': 'la trousse de premiers secours',
    'w.bhver': 'le secouriste de l’entreprise (premiers secours, incendie, évacuation)',
    'w.ziekenhuis': 'l’hôpital',
    'w.gebeuren': 'se passer, arriver',
    's.accident.1': 'Mon collègue est tombé.',
    's.accident.2': { m: 'Je me suis coupé.', f: 'Je me suis coupée.', x: 'J’ai une coupure.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.accident.3': 'Je veux signaler un accident.',

    // Unit: In the warehouse
    'u.warehouse': 'Dans l’entrepôt',
    'l.things': 'Les objets de l’entrepôt',
    'w.doos': 'le carton',
    'w.pallet': 'la palette',
    'w.heftruck': 'le chariot élévateur',
    'w.kar': 'le chariot',
    'w.stelling': 'le rayonnage',
    'w.scanner': 'le scanner',
    's.things.1': 'Mets le carton sur la palette.',
    's.things.2': 'Où est le scanner ?',
    's.things.3': 'Le chariot élévateur arrive.',
    'l.directions': 'Directions et gestes',
    'w.links': 'à gauche',
    'w.rechts': 'à droite',
    'w.boven': 'en haut',
    'w.beneden': 'en bas',
    'w.tillen': 'soulever',
    'w.pakken': 'prendre',
    's.directions.1': 'Le carton est à gauche.',
    's.directions.2': 'Soulève avec tes jambes.',
    's.directions.3': 'Va à droite.',

    // Unit: Time and schedule
    'u.time': 'L’heure et le planning',
    'l.shift': 'Mon service',
    'w.dienst': 'le service, le poste (horaire de travail)',
    'w.pauze': 'la pause',
    'w.beginnen': 'commencer',
    'w.klaar': 'fini, prêt',
    'w.telaat': 'en retard',
    'w.morgen': 'demain',
    's.shift.1': 'Mon service commence à sept heures.',
    's.shift.2': 'C’est quand, la pause ?',
    's.shift.3': { m: 'Désolé, je suis en retard.', f: 'Désolée, je suis en retard.', x: 'Pardon, je suis en retard.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'l.sick': 'Se déclarer malade',
    'w.ziek': 'malade',
    'w.bellen': 'appeler (au téléphone)',
    'w.dokter': 'le médecin',
    'w.pijn': 'la douleur',
    'w.vandaag': 'aujourd’hui',
    'w.beter': 'mieux',
    's.sick.1': 'Je suis malade aujourd’hui.',
    's.sick.2': 'J’ai mal au dos.',
    's.sick.3': 'J’appelle le médecin.',

    'c.hello.q': 'Bonne soirée !',
    'c.hello.a': 'À demain !',
    'c.people.q': 'Comment tu t’appelles ?',
    'c.people.a': 'Je m’appelle Sara.',
    'l.arrive': 'Premier jour : trouver ton chemin',
    'w.ingang': 'l’entrée',
    'w.receptie': 'l’accueil',
    'w.kantine': 'la cantine',
    'w.kleedkamer': 'le vestiaire',
    'w.buddy': 'le parrain, la marraine (un collègue qui t’aide au début)',
    'w.vinden': 'trouver',
    's.arrive.1': 'Je dois me présenter à qui ?',
    's.arrive.2': 'Je ne trouve pas le vestiaire.',
    's.arrive.3': 'Qui est mon parrain aujourd’hui ?',
    'c.arrive.q': 'Bonjour, vous venez pour quoi ?',
    'c.arrive.a': { m: 'Je suis nouveau. Je commence aujourd’hui.', f: 'Je suis nouvelle. Je commence aujourd’hui.', x: 'Je viens d’arriver. Je commence aujourd’hui.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.understand.q': 'Tu comprends ?',
    'c.understand.a': 'Non, encore une fois, s’il te plaît.',
    'c.gear.q': 'Tu as ton casque ?',
    'c.gear.a': 'Oui, je le porte.',
    'c.danger.q': 'Il y a un accident ?',
    'c.danger.a': 'Oui, appelle le 112 !',
    'c.alarm.q': 'Tout le monde est dehors ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Non, mon collègue n’est pas encore là.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.q': 'Qu’est-ce qui s’est passé ?',
    'c.accident.a': 'Il est tombé. Il saigne.',
    'l.notyet': 'Je n’ai pas encore appris ça',
    'w.nogniet': 'pas encore',
    'w.mogen': 'avoir le droit de, pouvoir',
    'w.proberen': 'essayer',
    'w.voordoen': 'montrer (en le faisant d’abord soi-même)',
    'w.gevaarlijk': 'dangereux',
    'w.uitleg': 'l’explication',
    's.notyet.1': 'Je n’ai pas encore appris ça.',
    's.notyet.2': 'On ne m’a pas encore expliqué.',
    's.notyet.3': { m: 'J’ai déjà le droit de le faire seul ?', f: 'J’ai déjà le droit de le faire seule ?', x: 'J’ai déjà le droit de le faire sans aide ?' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.notyet.q': 'Essaie, c’est facile.',
    'c.notyet.a': 'Tu peux d’abord me montrer ?',
    'c.things.q': 'Le carton va où ?',
    'c.things.a': 'Sur la palette.',
    'c.directions.q': 'À gauche ou à droite ?',
    'c.directions.a': 'À droite, près du rayonnage.',
    'c.shift.q': 'Ton service commence quand ?',
    'c.shift.a': 'Demain à sept heures.',
    'c.sick.q': 'Tu es malade ?',
    'c.sick.a': 'Oui, je reste à la maison aujourd’hui.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Appelle le 112 !',
    'p.hurt': { m: 'Je suis blessé.', f: 'Je suis blessée.', x: 'J’ai une blessure.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Préparer les commandes", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "l’article (un produit)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "la case (une place dans le rayonnage)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "l’autocollant, l’étiquette", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "rassembler, ramasser", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "manquer (ce n’est pas là)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "l’emplacement (le code de l’endroit, comme A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Je rassemble les articles de cette commande.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Cet article manque. La case est vide.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "L’autocollant doit aller sur le carton.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "C’est quel emplacement ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Allée trois, case douze.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Charger et décharger", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "le camion", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "le chauffeur", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "décharger (sortir les choses du camion)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "le transpalette (un chariot à main qui soulève une palette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "le film (du plastique fin autour d’une palette)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "la lettre de voiture (le papier qui dit ce qu’il y a dans le camion)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "Le camion est à la porte quatre.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "On décharge d’abord ces palettes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "Le chauffeur attend la lettre de voiture.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Cette palette est prête ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Non, il faut encore mettre du film autour.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Comment on fait ça ?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "comment", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "comme ça, de cette façon", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "difficile", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "facile", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "savoir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "c’est correct", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Comment on fait ça ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "C’est difficile pour moi.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Je fais bien comme ça ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Tu sais comment on fait ça ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Non, je ne sais pas encore.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Je peux demander quelque chose ?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "demander", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "qui", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "un moment", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "le temps", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "déranger (quelqu’un qui est occupé)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "douter (tu ne sais pas bien)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Je peux demander quelque chose ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Pardon de déranger.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Qui peut m’aider ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Tu as une question ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Oui. Tu as un moment ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "C’est où ?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "ici", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "là, là-bas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "perdu (tu ne le trouves pas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "la sortie", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "montrer du doigt (montrer où c’est)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "à côté de", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': { m: "Je suis perdu.", f: "Je suis perdue.", x: "J’ai perdu mon chemin." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Où est la sortie ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "Les toilettes sont là, à côté de la cantine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Tu trouves ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Non. Tu peux me montrer du doigt ?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Petites blessures et brûlures", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "la plaie, la blessure", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "le pansement, le bandage", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "refroidir (avec de l’eau froide)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "la coupure (une petite blessure faite par un couteau ou quelque chose de coupant)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "s’évanouir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "la douche oculaire (de l’eau pour rincer les yeux)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Refroidis la brûlure avec de l’eau.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "C’est une petite coupure. Appuie sur la plaie.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Où est la douche oculaire ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "Mon collègue va s’évanouir.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Allonge-le un moment. Je vais chercher de l’aide.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Appeler le 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "les services de secours (ambulance, pompiers, police)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "le nom de la rue", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "le numéro de la maison", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "qui réagit (la personne réagit quand tu lui parles)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "attendre et accueillir (quelqu’un à la porte)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "rester en ligne (tu ne raccroches pas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "J’appelle le 112. J’ai besoin d’une ambulance.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Quel est le nom de la rue et le numéro ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "J’attends l’ambulance à l’entrée.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Il réagit quand tu lui parles ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Non. Il ne réagit pas.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "Ton planning", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "le planning de la semaine (qui travaille quand cette semaine)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "l’appli du planning (tes services sur ton téléphone)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "disponible (tu peux travailler à ce moment-là)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "le changement", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "remplacer (travailler pour quelqu’un qui est absent)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "le jour de congé", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "Le nouveau planning est dans l’appli.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Tu es disponible samedi ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Tu peux remplacer Sara demain ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Il y a un changement dans ton planning.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "D’accord. Quel jour je dois travailler ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Les heures et les pauses", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "la pause déjeuner", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "le temps de repos (le temps libre entre deux services)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "la journée de travail", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "la feuille d’heures (où tu notes les heures que tu as travaillées)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "partir plus tôt", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "de suite (l’un après l’autre)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "J’écris mes heures sur la feuille d’heures.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Je peux partir une heure plus tôt aujourd’hui ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "J’ai travaillé six jours de suite.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Ta pause déjeuner, c’est quand ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "À midi, une demi-heure.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "Tes premières semaines", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "la visite (quelqu’un te fait visiter le bâtiment)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "l’accompagnateur, l’accompagnatrice (le collègue qui t’aide pendant tes premières semaines)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "le petit carnet", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "suivre un collègue (et regarder comment il travaille)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "retenir, se souvenir", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "seul, en autonomie (sans aide)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Tu peux me le montrer encore une fois ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Aujourd’hui, j’accompagne Sara pour voir comment elle travaille.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.firstweeks.3': "Je le note dans mon carnet.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Tu te souviens de tout ce que tu as vu pendant la visite ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "Presque tout. Elle était où, la cantine, déjà ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "La préparation de commandes et le chariot à mât rétractable", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "le préparateur de commandes (la personne qui rassemble les commandes ; aussi le petit chariot sur lequel tu es debout pour prendre en hauteur)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "le chariot à mât rétractable (un chariot élévateur pour les rayonnages très hauts ; ses fourches avancent)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "la liste de prélèvement (la liste des articles que tu dois prendre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "scanner", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "le piéton (une personne à pied)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "se réchauffer (dans un endroit chaud, après avoir travaillé dans le froid)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Je scanne chaque article de la liste de prélèvement.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Les piétons marchent sur le passage piéton.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Dans la chambre de congélation, je porte des vêtements thermiques.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Tu peux conduire le chariot à mât rétractable un moment ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Non, je n’ai pas le droit. Je n’ai pas de formation pour ça.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
