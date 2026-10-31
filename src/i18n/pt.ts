import type { HelpLanguageSource } from './types';

const lang: HelpLanguageSource = {
  code: 'pt',
  name: 'Portuguese',
  nativeName: 'Português',
  dir: 'ltr',
  reviewed: false,
  ui: {
    theme: 'Aspeto',
    themeAuto: 'Automático',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    voice: 'Voz neerlandesa',
    voiceAuto: 'Automática',
    voiceHint: 'Toca em 🔊 para ouvir. As vozes do Vloertaal soam iguais em todos os telemóveis; as outras vêm do teu telemóvel.',
    voiceNone: 'Este aparelho não tem voz neerlandesa. Podes adicionar uma nas definições do telemóvel (Texto para voz).',
    appTagline: 'Neerlandês para o trabalho',
    chooseLanguage: 'Escolhe a tua língua de ajuda',
    englishOnly: 'Só inglês',
    beta: 'Tradução ainda não verificada', // nieuw, nalezen
    dayStreak: { one: 'dia seguido', many: 'dias seguidos', other: 'dias seguidos' },
    streakStarted: 'Começaste uma série de dias! Volta amanhã.',
    streakGrew: { one: '{n} dia seguido! Continua assim.', many: '{n} dias seguidos! Continua assim.', other: '{n} dias seguidos! Continua assim.' },
    start: 'Começar',
    practice: 'Praticar outra vez',
    locked: 'Primeiro termina a lição anterior',
    newWord: 'Palavra nova',
    tapToHear: 'Toca para ouvir',
    whatDoesThisMean: 'O que quer dizer isto?',
    whichOneIs: 'Qual é “{word}”?',
    mixLesson: 'Revisão mista',
    whatDoYouHear: 'O que ouves?',
    buildSentence: 'Faz esta frase em neerlandês',
    typeWhatYouHear: 'Escreve o que ouves',
    check: 'Verificar',
    continue: 'Continuar',
    correct: 'Muito bem!',
    almost: 'Certo, mas atenção à escrita',
    incorrect: 'Não é bem isso',
    correctAnswer: 'Resposta certa',
    yourAnswer: 'A tua resposta',
    inARow: '{n} seguidas',
    cantListen: 'Agora não posso ouvir',
    learnWriting: 'Também quero aprender a escrever',
    learnWritingHint: 'Ligado: escreve as palavras que ouves com as letras. Desligado: escolhe a palavra escrita que ouves.',
    tagRepeat: 'Outra vez',
    readAloud: 'Lê em voz alta',
    lessonComplete: 'Lição terminada!',
    phrasebook: 'Frases de emergência',
    phrasebookHint: 'Toca numa frase para a ouvir. Também podes mostrar o ecrã a um colega.',
    whoToCall: 'Problemas no trabalho? Quem pode ajudar',
    who112: 'Emergência: perigo de vida, incêndio ou um crime que está a acontecer agora.',
    whoLegal: 'Conselho grátis sobre o teu contrato, o teu salário ou um despedimento.',
    whoInspection: 'Denuncia trabalho perigoso, salário baixo demais ou exploração. Podes fazê-lo de forma anónima.',
    whoFairwork: { m: 'Estás a ser explorado no trabalho, ou achas que sim.', f: 'Estás a ser explorada no trabalho, ou achas que sim.', x: 'Estás a ser explorado/a no trabalho, ou achas que sim.' },
    who113: 'Pensas em pôr fim à vida, ou alguém te preocupa. Gratuito, dia e noite.', // nieuw, nalezen
    whoVeiligThuis: 'Violência ou abuso em casa, contra ti ou contra outra pessoa. Gratuito, também sem dar o nome.', // nieuw, nalezen
    settings: 'Definições',
    helpLanguage: 'Língua de ajuda',
    resetProgress: 'Apagar o meu progresso',
    resetConfirm: 'Apagar todo o progresso neste aparelho?',
    audioUnavailable: 'O som não está disponível neste aparelho.',
    slow: 'Devagar',
    completeChat: 'Completa a conversa',
    meaning: 'Significado',
    navRoute: 'Lições',
    navWords: 'Ajuda',
    rightFirstTime: 'Certo à primeira',
    newWords: 'Palavras novas',
    wordsLearnedN: { one: '{n} palavra aprendida', many: '{n} palavras aprendidas', other: '{n} palavras aprendidas' },
    practiseMistakes: { one: 'Praticar erros · falta {n}', many: 'Praticar erros · faltam {n}', other: 'Praticar erros · faltam {n}' },
    quitHint: 'As tuas respostas desta lição não ficam guardadas.',
    keepGoing: 'Continuar',
    stopLesson: 'Parar a lição',
    fullVersion: 'Versão completa',
    unlockFull: 'Desbloquear a versão completa',
    unlockHint: 'Com o código, abrem-se todas as lições. O código é grátis. Ainda não tens código? Pede ao teu professor ou orientador, ou envia-nos um e-mail:',
    codeNotFull: 'Este código não abre a versão completa. Pede um código novo.',
    password: 'Código',
    enterPassword: 'Escreve o código',
    wrongPassword: 'Esse código não está certo. Tenta outra vez.',
    unlock: 'Desbloquear',
    sector: 'O teu trabalho',
    chooseSector: 'Onde trabalhas?',
    // nagelezen (2e lezing) (land: Nederland of België)
    countryTitle: 'Em que país trabalhas?',
    countryHint: 'Escolhe o país onde trabalhas. Recebes as regras de trabalho desse país. Isto fica no teu telemóvel. Não o enviamos para lado nenhum.', // nieuw, nalezen
    countryNl: 'Países Baixos',
    countryBe: 'Bélgica (Flandres)',
    tipsNote: 'Estas dicas são sobre o trabalho nos Países Baixos. Informação geral, não é aconselhamento jurídico.',
    sectorHint: 'As lições para o teu trabalho aparecem primeiro. Podes mudar isto mais tarde nas Definições.',
    otherSectors: 'Outros setores',
    reviewToday: 'Revisão de hoje',
    reviewTodayN: { one: '{n} palavra para praticar outra vez · poucos minutos', many: '{n} palavras para praticar outra vez · poucos minutos', other: '{n} palavras para praticar outra vez · poucos minutos' },
    notSureYet: 'Ainda não sei',
    sectorLogistics: 'Logística',
    sectorConstruction: 'Construção',
    sectorProduction: 'Produção',
    sectorCare: 'Cuidados',
    sectorHospitality: 'Hotelaria e restauração',
    sectorRetail: 'Loja e supermercado', // nieuw, nalezen
    sectorCleaning: 'Limpeza',
    sectorHorticulture: 'Horticultura', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Técnica', // nieuw (30 okt 2026), nalezen
    sectorGarage: 'Oficina mecânica', // nieuw (30 okt 2026), nalezen
    sound: 'Som',
    soundOn: 'Com som',
    withoutSound: 'Sem som',
    quietHint: 'Sem som, as lições não têm perguntas para ouvir e nada toca sozinho. Toca em 🔊 para ouvir uma palavra, por exemplo com auscultadores.',
    soundOffToast: 'Sem som. Podes ligar o som nas Definições.',
    stillToDo: 'Ainda por fazer hoje',
    streakStopped: { one: 'A tua série parou em {n} dia. Começa de novo hoje.', many: 'A tua série parou em {n} dias. Começa de novo hoje.', other: 'A tua série parou em {n} dias. Começa de novo hoje.' },
    recordN: { one: 'O teu recorde: {n} dia', many: 'O teu recorde: {n} dias', other: 'O teu recorde: {n} dias' },
    workWeek: 'A tua semana de trabalho',
    freeDaysN: { one: 'Dias livres: {n}. Se falhares um dia, a tua série continua.', many: 'Dias livres: {n}. Se falhares um dia, a tua série continua.', other: 'Dias livres: {n}. Se falhares um dia, a tua série continua.' },
    restDay: 'Dia livre',
    tier3: '3 dias seguidos',
    tier7: '1 semana seguida',
    tier14: '2 semanas seguidas',
    tier30: '1 mês seguido',
    reviewDone: 'Feito por hoje',
    tomorrowN: { one: 'Amanhã: {n} palavra', many: 'Amanhã: {n} palavras', other: 'Amanhã: {n} palavras' },
    firstWordsTomorrow: 'Amanhã voltam as tuas primeiras palavras',
    extraRound: 'Ronda extra',
    wordsStrongerN: { one: '{n} palavra mais firme', many: '{n} palavras mais firmes', other: '{n} palavras mais firmes' },
    noMistakes: 'Sem erros',
    nextUp: 'A seguir',
    installTitle: 'Põe o Vloertaal no ecrã principal',
    installHint: 'Assim abre como uma app, também sem internet.',
    installAdd: 'Adicionar ao ecrã principal',
    iosStep1: 'Toca em “Partilhar”',
    iosStep2: 'Toca em “Adicionar ao ecrã principal”',
    iosStep3: 'Pronto!',
    backupTitle: 'Guarda o teu progresso',
    backupHint: 'O teu progresso está só neste telemóvel. Guarda-o como ficheiro, por exemplo para um telemóvel novo.',
    backupSave: 'Descarregar',
    backupLoad: 'Repor',
    backupBad: 'Isto não é um ficheiro do Vloertaal.',
    backupAsk: 'Juntar este ficheiro ao teu progresso, ou substituir o teu progresso?',
    backupMerge: 'Juntar',
    backupReplace: 'Substituir',
    backupBack: 'O teu progresso voltou.',
    backupNothingNew: 'Nada de novo: isto já estava no teu telemóvel.',
    cancel: 'Cancelar',
    remindTitle: 'Lembra-me todos os dias',
    remindEvent: 'Hora do teu neerlandês (10 minutos)',
    remindHint: 'O calendário do teu telemóvel lembra-te. Nada é enviado para nós.',
    remindBefore: 'Antes do trabalho',
    remindBreak: 'Na pausa',
    remindAfter: 'Depois do trabalho',
    remindOwn: 'Outra hora',
    remindAdd: 'Adicionar ao meu calendário',
    remindAdded: 'Abre o ficheiro para o adicionar ao teu calendário.',
    navAbout: 'Sobre',
    tagMeaning: 'Significado',
    tagPick: 'Escolher',
    tagListen: 'Ouvir',
    tagType: 'Escrever',
    tagMatch: 'Pares',
    tagBuild: 'Frase',
    tagChat: 'Conversa',
    tagSituation: 'Situação',
    tagTip: 'Dica',
    more: 'Mais',
    less: 'Menos',
    daysUnit: { one: 'dia', many: 'dias', other: 'dias' },
    wordsUnit: { one: 'palavra', many: 'palavras', other: 'palavras' },
    countTitle: 'Contagem anónima',
    countHint: 'A app conta quantas vezes as lições são feitas, e mais ou menos quanto tempo demoram. E se a app tem algum erro. Sem nome, sem conta, sem rastreio.', // fout-zin nieuw, nalezen
    certificate: 'Certificado',
    myCertificates: 'Os meus certificados',
    certsEmpty: 'Termina todas as lições de uma unidade. Depois recebes um certificado.',
    certEarned: 'Ganhaste um certificado!',
    certEarnedHint: 'Terminaste todas as lições desta unidade.',
    certView: 'Ver',
    certLater: 'Mais tarde',
    certPrint: 'Imprimir ou guardar como PDF',
    certSaved: 'A imagem está guardada.',
    certNameAsk: 'O teu nome no certificado?',
    certNameHint: 'Fica só neste telemóvel. Podes deixar em branco.',
    certNoName: 'Sem nome',
    certChangeName: 'Mudar o nome',
    certPractice: 'Certificado de prática, não é um diploma oficial',
    resumeLesson: 'Continuar a lição',
    restartLesson: 'Começar de novo',
    quitKept: 'O teu progresso fica guardado. Podes continuar mais tarde.',
    bestAnswer: 'Melhor resposta',
    inReview: 'em revisão',
    today: 'Hoje',
    playAgain: 'Ouvir outra vez',
    daysUnitOne: 'dia',
    wordsUnitOne: 'palavra',
    wordsLearnedOne: '{n} palavra aprendida',
    tomorrowOne: 'Amanhã: {n} palavra',
    wordsStrongerOne: '{n} palavra mais firme',
    recordOne: 'O teu recorde: {n} dia',
    streakStoppedOne: 'A tua série parou em {n} dia. Começa de novo hoje.',
    letterTiles: 'Letras',
    useKeyboard: 'Teclado',
    skippedN: { one: '{n} saltado, não conta', many: '{n} saltados, não contam', other: '{n} saltados, não contam' },
    stampLater: 'Volta mais tarde',
    stampDone: 'Feito',
    chooseNext: 'Escolhe o teu próximo tema',
    recommended: 'Recomendado',
    allTopics: 'Todos os temas',
    topicsOrder: 'Mostrar os temas',
    privacyLink: 'Ler a declaração de privacidade (em neerlandês)', // nieuw, nalezen
    routeTitle: 'O que queres aprender?', // nieuw, nalezen
    routeLearn: 'Aprender neerlandês para o trabalho, com ajuda na tua língua', // nieuw, nalezen
    routeRules: 'Já falo neerlandês: como funciona o trabalho nos Países Baixos e na Bélgica', // nieuw, nalezen
    routeLearnShort: 'Aprender neerlandês', // nieuw, nalezen
    byTheme: 'Por capítulo',
    inOrder: 'Por ordem',
    searchTopics: 'Procurar um tema', // nieuw, nalezen
    searchNone: 'Não há nenhum tema com esta palavra.', // nieuw, nalezen
    lessonsUnit: { one: 'lição', many: 'lições', other: 'lições' },
    lessonsUnitOne: 'lição',
    topicsUnit: { one: 'tema', many: 'temas', other: 'temas' },
    topicsUnitOne: 'tema',
    allTopicsDone: 'Terminaste todos os temas. Muito bem!',
    // Speaking practice
    tagSpeak: 'Falar',
    speakPrompt: 'Ouve e depois diz',
    tapToSpeak: 'Toca e fala',
    stopRecording: 'Parar',
    micPrivacy: 'Só tu ouves. Nada é enviado.',
    micUnavailable: 'Microfone desligado. Diz em voz alta agora e depois continua.',
    cantSpeak: 'Agora não posso falar',
    soundsSame: 'Soa igual',
    sayAgain: 'Diz outra vez',
    speakMe: 'Eu',
    speakingPractice: 'Prática de fala',
    speakingHint: 'Diz as palavras em voz alta e compara. A tua voz nunca é guardada nem enviada.',
    savingOffline: 'A guardar…',
    savedOffline: 'Guardado offline',
    offlineNoSpace: 'Não há espaço suficiente neste telemóvel. Remove um tema guardado ou liberta espaço.',
    offlineFailed: 'Não foi possível guardar. Verifica a internet e tenta outra vez.',
    pocketCard: 'Cartão de bolso',
    pocketSave: 'Guardar como imagem',
    textSize: 'Tamanho do texto',
    textNormal: 'Normal',
    textLarge: 'Grande',
    textXl: 'Muito grande',
    showEnglish: 'Mostrar também em inglês',
    genderTitle: 'Mulher ou homem?',
    genderHint: 'Para a tua língua falar contigo da forma certa.',
    genderWoman: 'Mulher',
    genderMan: 'Homem',
    genderNone: 'Prefiro não dizer',
    langGuessYes: 'Sim',
    langGuessOther: 'Outra língua',
    settingsLangMe: 'Língua e eu',
    settingsLessons: 'Lições',
    settingsPhone: 'Este telemóvel',
    settingOn: 'Ligado',
    settingOff: 'Desligado',
    sectorGroupMake: 'Produção e transporte',
    sectorGroupCare: 'Cuidados e serviços',
    sectorGroupShop: 'Comércio e restauração', // nieuw, nalezen
    sectorGroupBuild: 'Construção e técnica', // nieuw (30 okt 2026), nalezen
    voiceWoman: 'Voz de mulher',
    voiceMan: 'Voz de homem',
    writingPick: 'Escolher a palavra',
    settingWriting: 'Escrita',
    settingKeepLessons: 'Guardar as lições neste telemóvel',
    settingKeepLessonsHint: 'O tema que estás a aprender agora fica guardado neste telemóvel, por isso também funciona sem internet. Os temas terminados são removidos outra vez.',
    otherTopicLink: 'Outro tema',
    remindAsk: 'Queres que te lembremos todos os dias?',
    remindYes: 'Sim, depois do trabalho',
    remindNo: { m: 'Não, obrigado', f: 'Não, obrigada', x: 'Não, obrigado / obrigada' }, // x: nieuw, nalezen
    remindPickTime: 'Quando te devemos lembrar?',
    certSaveShare: 'Guardar ou partilhar',
    certNameDone: 'Pronto',
    pauseTitle: 'Pausa',
    back: 'Voltar',
    quitLesson: 'Sair da lição',
    playAudio: 'Ouvir',
    scrollDown: 'Deslizar para baixo',
    lessonProgress: 'Progresso da lição',
    mainMenu: 'Menu principal',
    spaceKey: 'Espaço',
    langNotOnPhone: 'Esta língua ainda não está neste telemóvel. Liga-te à internet para mudar.',
    /* G4 r4b: the reminder's own time ("Kies zelf"). */
    remindChooseOwn: 'Escolhe tu uma hora',
    gateWho: 'O teu professor, orientador ou patrão dá-te o código.',
    gateTrust: 'Sem conta. Sem nome. Tudo fica neste telemóvel.',
    codeAccepted: 'Código aceite',
    startFree: 'Não tens código? Começa com as primeiras lições',
    bramHello: 'Que bom ver-te.',
    bramBack: { m: 'Bem-vindo de volta. Vamos continuar.', f: 'Bem-vinda de volta. Vamos continuar.', x: 'Que bom que voltaste. Vamos continuar.' },
    bramRested: 'Ontem foi o teu dia livre. A tua série continua.',
    bramDueN: { one: '{n} palavra para repetir hoje.', many: '{n} palavras para repetir hoje.', other: '{n} palavras para repetir hoje.' },
    bramDueOne: '{n} palavra para repetir hoje.',
    bramDayN: 'Dia {n} seguido.',
    bramDone: 'Feito por hoje. Até amanhã.',
    bramPerfect: 'Muito bem. Sabes estas palavras.',
    bramGood: 'Bom trabalho. Passo a passo.',
    bramHard: 'Ainda bem que praticaste. As palavras difíceis vão voltar.',
    bramReview: 'Bem. Repetir ajuda a lembrar.',
    bramIntro: 'Sou o Bram, o teu colega.',
    bramIntroHello: 'Olá, sou o Bram.',
    showDutch: 'Mostrar em neerlandês',
    lastUpdated: 'Última atualização: {date}',
    /* G4 b3 */
    buildListen: 'Ouve e faz a frase',
    chatWhichQuestion: 'Que pergunta combina com esta resposta?',
    reviewWaiting: 'Ainda há {n} palavras à espera. Voltam nos próximos dias.',
    factTitle: 'Sabias?',
    fact3: { m: 'Não estás sozinho: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.', f: 'Não estás sozinha: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.', x: 'Não estás sozinho/a: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.' },
    fact7: 'Dos migrantes que falam muito bem neerlandês, 69 em cada 100 têm trabalho pago.',
    fact14: 'Muitas bibliotecas têm um Taalhuis (“casa da língua”): ajuda grátis para continuares a aprender neerlandês.',
    fact30: 'Praticar um pouco todos os dias resulta melhor do que muito de vez em quando. Já o fizeste durante 30 dias!',
    /* Backup, reminder and reset, a second look */
    backupFileN: { one: 'Este ficheiro tem {n} lição.', many: 'Este ficheiro tem {n} lições.', other: 'Este ficheiro tem {n} lições.' },
    backupFileOne: 'Este ficheiro tem {n} lição.',
    backupPhoneN: { one: 'Tu tens {n} lição.', many: 'Tu tens {n} lições.', other: 'Tu tens {n} lições.' },
    backupPhoneOne: 'Tu tens {n} lição.',
    backupFewer: '“Substituir” apaga as lições que não estão no ficheiro. “Juntar” guarda tudo.',
    backupTooBig: 'Este ficheiro é grande demais. Um ficheiro do Vloertaal é muito mais pequeno.',
    backupNewPhone: 'Telemóvel novo? Lá também precisas do teu código.',
    remindEveryDay: 'O teu lembrete: todos os dias às {time}',
    remindStop: 'Parar o lembrete',
    remindStopped: 'Abre o ficheiro para tirar o lembrete do teu calendário.',
    remindStoppedAndroid: 'Apaga tu o lembrete no Google Calendar.',
    resetKeeps: 'As tuas lições, palavras, série de dias e certificados são apagados. A tua língua, o teu código e as tuas definições ficam.',
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Não carregou. Tens internet?',
    retry: 'Tentar de novo',
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'O que já sabes?', // nieuw, nalezen
    toetsOffer: 'Cerca de 10 minutos. Não há notas. É só para ti.', // nieuw, nalezen
    toetsEndOffer: 'Já aprendeste muito. Faz o teste outra vez e vê o que sabes agora.', // nieuw, nalezen
    toetsPartListen: 'Ouvir', // nieuw, nalezen
    toetsPartWords: 'Palavras', // nieuw, nalezen
    toetsPartSentences: 'Frases', // nieuw, nalezen
    toetsListenAsk: 'Ouve. O que quer dizer?', // nieuw, nalezen
    toetsNotSure: 'Não sabes? Escolhe uma. Não faz mal.', // nieuw, nalezen
    toetsMicKeep: 'A tua gravação fica só neste telemóvel. Mais tarde podes ouvir-te outra vez.', // nieuw, nalezen
    toetsStartDone: 'Bom começo! Isto já sabes.', // nieuw, nalezen
    toetsEndDone: 'Muito bem! Vê o que sabes agora.', // nieuw, nalezen
    toetsYouThen: 'Tu antes', // nieuw, nalezen
    toetsYouNow: 'Tu agora', // nieuw, nalezen
    toetsKeepGoing: 'Pratica um pouco todos os dias. Assim aprendes cada vez mais.', // nieuw, nalezen
    toetsStart: 'Fazer o teste', // nieuw, nalezen
    tempo: 'Velocidade', // nieuw, nalezen
    tempoCalm: 'Devagar', // nieuw, nalezen
    tempoNormal: 'Normal', // nieuw, nalezen
    tempoHint: 'Devagar é lento e claro. Normal é como falam os colegas. Escolhe «Normal» se já percebes muito.', // nieuw, nalezen
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Mostra como te está a correr', // nieuw, nalezen
    coachCardIntro: 'Este cartão mostra o teu progresso. Mostra-o ao teu professor, coach ou chefe. Tu decides.', // nieuw, nalezen
    coachCardKeep: 'O teu telemóvel faz o cartão. Nada é enviado. O Vloertaal não guarda nada.', // nieuw, nalezen
    coachCardWhat: 'No cartão, em neerlandês:', // nieuw, nalezen
    coachTopics: 'Temas terminados', // nieuw, nalezen
    coachDays: 'Dias de prática nas últimas 4 semanas', // nieuw, nalezen
    coachLast: 'Última lição, com a data', // nieuw, nalezen
    coachNameAsk: 'O teu nome no cartão?', // nieuw, nalezen
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'O telemóvel ouve (experimental)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Depois de falares, o telemóvel diz se te percebeu. Isto acontece no próprio telemóvel. Nada vai para nós nem para outros.', // nieuw, nalezen
    listenNeedsPack: 'Primeiro o telemóvel precisa do neerlandês. É uma transferência grande: usa Wi-Fi.', // nieuw, nalezen
    listenDownload: 'Transferir neerlandês', // nieuw, nalezen
    listenNotNow: 'Agora não', // nieuw, nalezen
    listenDownloading: 'O neerlandês está a chegar. Tenta mais tarde.', // nieuw, nalezen
    listenFailed: 'Não funcionou. Tenta mais tarde, com Wi-Fi.', // nieuw, nalezen
    listenPrivacy: 'Só o telemóvel ouve. Nada é enviado.', // nieuw, nalezen
    heardWait: 'O telemóvel está a ouvir…', // nieuw, nalezen
    heardOk: 'Percebido', // nieuw, nalezen
    heardAlmost: 'Quase: diz {word} outra vez', // nieuw, nalezen
    heardNotYet: 'Ainda não percebido', // nieuw, nalezen
    goOnAnyway: 'Continuar mesmo assim', // nieuw, nalezen
    fasterAsk: 'Queres ir mais rápido?', // nieuw, nalezen
    fasterHint: 'Menos explicação nas lições novas. O neerlandês a velocidade normal.', // nieuw, nalezen
    fasterYes: 'Sim', // nieuw, nalezen
    fasterNo: 'Não', // nieuw, nalezen
    easierNext: 'A próxima lição é um pouco mais curta.', // nieuw, nalezen
    fasterSetting: 'Aprender mais rápido', // nieuw, nalezen
    fasterSettingHint: 'Ligado: menos explicação nas lições novas e o neerlandês a velocidade normal. Desligado: como antes.', // nieuw, nalezen
    samenTitle: 'Praticar a dois', // nieuw, nalezen
    samenRowHint: 'Duas pessoas, um telemóvel', // nieuw, nalezen
    samenIntro: 'Pratica com um colega, um amigo ou um professor. Leiam à vez.', // nieuw, nalezen
    samenHow: 'A pessoa 1 é o colega. A pessoa 2 responde.', // nieuw, nalezen
    samenNoScore: 'Nada é gravado. Não há pontuação.', // nieuw, nalezen
    samenPerson: 'Pessoa {n}', // nieuw, nalezen
    samenAnswer: 'Resposta', // nieuw, nalezen
    samenHear: 'Ouvir', // nieuw, nalezen
    samenNext: 'Seguinte', // nieuw, nalezen
    samenTranslation: 'Tradução', // nieuw, nalezen
    samenEnd: 'Muito bem! Trocar de papéis e fazer outra vez?', // nieuw, nalezen
    samenSwap: 'Trocar de papéis', // nieuw, nalezen
    samenStop: 'Terminar', // nieuw, nalezen
    checkStart: 'Já sei isto: teste curto', // nieuw, nalezen
    checkPassed: 'Já conheces isto. Marcar este tema como feito?', // nieuw, nalezen
    checkNoCert: 'Então ainda não há certificado. Recebes o certificado depois das lições.', // nieuw, nalezen
    checkNotYet: 'As lições ajudam-te neste tema.', // nieuw, nalezen
    checkMark: 'Marcar', // nieuw, nalezen
    checkVia: 'com teste', // nieuw, nalezen
    checkUndo: 'Fazer as lições mesmo assim', // nieuw, nalezen
  },
  gloss: {
    // Themes ("hoofdstukken"): groups of topics (src/content/themes.ts)
    'theme.start': 'Primeiros passos',
    'theme.safe': 'Trabalhar em segurança',
    'theme.find': 'Encontrar trabalho',
    'theme.job': 'O teu emprego',
    'theme.together': 'Trabalhar em equipa',
    'theme.rights': 'Os teus direitos',
    'theme.life': 'Viver nos Países Baixos',
    'theme.sector': 'O teu setor',
    // Unit: First day at work
    'u.firstday': 'Primeiro dia de trabalho',
    'l.hello': 'Cumprimentar',
    'w.hallo': 'olá',
    'w.goedemorgen': 'bom dia',
    'w.dankjewel': 'obrigado / obrigada',
    'w.ja': 'sim',
    'w.nee': 'não',
    'w.totmorgen': 'até amanhã',
    's.hello.1': { m: 'Olá, sou novo.', f: 'Olá, sou nova.', x: 'Olá, sou novo / nova.' },
    's.hello.2': 'Bom dia, sou o Ali.',
    's.hello.3': { m: 'Obrigado, até amanhã!', f: 'Obrigada, até amanhã!', x: 'Obrigado / obrigada, até amanhã!' },
    'l.people': 'Pessoas no trabalho',
    'w.collega': 'o colega / a colega',
    'w.baas': 'o patrão / a patroa',
    'w.leidinggevende': 'o chefe / a chefe (supervisor)',
    'w.werk': 'o trabalho',
    'w.naam': 'o nome',
    'w.nieuw': 'novo',
    's.people.1': 'O meu nome é Sara.',
    's.people.2': 'Quem é o patrão?',
    's.people.3': { m: 'Sou um colega novo.', f: 'Sou uma colega nova.', x: 'Sou um colega novo / uma colega nova.' },

    // Unit: Asking for help
    'u.help': 'Pedir ajuda',
    'l.understand': 'Não percebo',
    'w.begrijpniet': 'não percebo',
    'w.nogeenkeer': 'mais uma vez',
    'w.langzaam': 'devagar',
    'w.helpen': 'ajudar',
    'w.waar': 'onde',
    'w.wc': 'a casa de banho',
    's.understand.1': 'Pode repetir?',
    's.understand.2': 'Pode falar mais devagar?',
    's.understand.3': 'Onde é a casa de banho?',

    // Unit: Safety first
    'u.safety': 'Segurança em primeiro lugar',
    'l.gear': 'Equipamento de proteção',
    'w.helm': 'o capacete',
    'w.handschoenen': 'as luvas',
    'w.veiligheidsschoenen': 'os sapatos de segurança',
    'w.hesje': 'o colete refletor',
    'w.bril': 'os óculos de proteção',
    'w.dragen': 'usar, ter vestido',
    's.gear.1': 'Usa sempre o teu capacete.',
    's.gear.2': 'Onde estão as luvas?',
    's.gear.3': 'Estou com o meu colete refletor.',
    'l.danger': 'Perigo!',
    'w.pasop': 'cuidado',
    'w.stop': 'para',
    'w.help': 'socorro',
    'w.brand': 'o incêndio',
    'w.nooduitgang': 'a saída de emergência',
    'w.ongeluk': 'o acidente',
    's.danger.1': 'Cuidado, o chão está molhado!',
    's.danger.2': 'Onde é a saída de emergência?',
    's.danger.3': 'Houve um acidente!',
    'l.accident': 'Comunicar um acidente',
    'w.gewond': 'ferido',
    'w.bloeden': 'sangrar',
    'w.ehbodoos': 'a caixa de primeiros socorros',
    'w.bhver': 'o socorrista da empresa (primeiros socorros, incêndio, evacuação)',
    'w.ziekenhuis': 'o hospital',
    'w.gebeuren': 'acontecer',
    's.accident.1': 'O meu colega caiu.',
    's.accident.2': 'Cortei-me.',
    's.accident.3': 'Quero comunicar um acidente.',

    // Unit: In the warehouse
    'u.warehouse': 'No armazém',
    'l.things': 'Coisas do armazém',
    'w.doos': 'a caixa',
    'w.pallet': 'a palete',
    'w.heftruck': 'o empilhador',
    'w.kar': 'o carrinho',
    'w.stelling': 'a estante (do armazém)',
    'w.scanner': 'o leitor (scanner)',
    's.things.1': 'Põe a caixa na palete.',
    's.things.2': 'Onde está o leitor?',
    's.things.3': 'Vem aí o empilhador.',
    'l.directions': 'Direções e ações',
    'w.links': 'à esquerda',
    'w.rechts': 'à direita',
    'w.boven': 'em cima',
    'w.beneden': 'em baixo',
    'w.tillen': 'levantar (um peso)',
    'w.pakken': 'pegar (em), tirar',
    's.directions.1': 'A caixa está à esquerda.',
    's.directions.2': 'Levanta com as pernas.',
    's.directions.3': 'Vai para a direita.',

    // Unit: Time and schedule
    'u.time': 'Horas e horário',
    'l.shift': 'O meu turno',
    'w.dienst': 'o turno',
    'w.pauze': 'a pausa',
    'w.beginnen': 'começar',
    'w.klaar': 'pronto, terminado',
    'w.telaat': 'atrasado, tarde',
    'w.morgen': 'amanhã',
    's.shift.1': 'O meu turno começa às sete horas.',
    's.shift.2': 'Quando é a pausa?',
    's.shift.3': { m: 'Desculpa, estou atrasado.', f: 'Desculpa, estou atrasada.', x: 'Desculpa, estou atrasado / atrasada.' },
    'l.sick': 'Avisar que estás doente',
    'w.ziek': 'doente',
    'w.bellen': 'ligar (por telefone)',
    'w.dokter': 'o médico',
    'w.pijn': 'a dor',
    'w.vandaag': 'hoje',
    'w.beter': 'melhor',
    's.sick.1': 'Hoje estou doente.',
    's.sick.2': 'Tenho dores nas costas.',
    's.sick.3': 'Vou ligar ao médico.',

    'c.hello.q': 'Boa noite!',
    'c.hello.a': 'Até amanhã!',
    'c.people.q': 'Como te chamas?',
    'c.people.a': 'Chamo-me Sara.',
    'l.arrive': 'Primeiro dia: encontrar o caminho',
    'w.ingang': 'a entrada',
    'w.receptie': 'a receção',
    'w.kantine': 'a cantina',
    'w.kleedkamer': 'o vestiário',
    'w.buddy': 'o buddy (um colega que te ajuda no início)',
    'w.vinden': 'encontrar',
    's.arrive.1': 'A quem me devo apresentar?',
    's.arrive.2': 'Não consigo encontrar o vestiário.',
    's.arrive.3': 'Quem é o meu buddy hoje?',
    'c.arrive.q': 'Bom dia, o que deseja?',
    'c.arrive.a': { m: 'Sou novo. Começo hoje.', f: 'Sou nova. Começo hoje.', x: 'Sou novo / nova. Começo hoje.' },
    'c.understand.q': 'Percebes?',
    'c.understand.a': 'Não, mais uma vez, por favor.',
    'c.gear.q': 'Tens o teu capacete?',
    'c.gear.a': 'Sim, estou com ele posto.',
    'c.danger.q': 'Houve um acidente?',
    'c.danger.a': 'Sim, liga para o 112!',
    'c.accident.q': 'O que aconteceu?',
    'c.accident.a': 'Ele caiu. Está a sangrar.',
    'l.notyet': 'Ainda não aprendi isto',
    'w.nogniet': 'ainda não',
    'w.mogen': 'poder (ter autorização)',
    'w.proberen': 'tentar',
    'w.voordoen': 'mostrar como se faz (fazendo primeiro)',
    'w.gevaarlijk': 'perigoso',
    'w.uitleg': 'a explicação',
    's.notyet.1': 'Isto ainda não aprendi.',
    's.notyet.2': 'Ainda ninguém me explicou isto.',
    's.notyet.3': { m: 'Já posso fazer isto sozinho?', f: 'Já posso fazer isto sozinha?', x: 'Já posso fazer isto sozinho / sozinha?' },
    'c.notyet.q': 'Experimenta, é fácil.',
    'c.notyet.a': 'Podes mostrar-me primeiro como se faz?',
    'c.things.q': 'Para onde vai a caixa?',
    'c.things.a': 'Para a palete.',
    'c.directions.q': 'Esquerda ou direita?',
    'c.directions.a': 'À direita, junto à estante.',
    'c.shift.q': 'Quando começa o teu turno?',
    'c.shift.a': 'Amanhã às sete horas.',
    'c.sick.q': 'Estás doente?',
    'c.sick.a': 'Sim, hoje fico em casa.',
    // Emergency phrases (phrasebook only)
    'p.call112': 'Liga para o 112!',
    'p.hurt': { m: 'Estou ferido.', f: 'Estou ferida.', x: 'Estou ferido / ferida.' },
  },
};

export default lang;
