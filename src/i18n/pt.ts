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
    themeSand: 'Areia', // nieuw, nalezen // nagelezen AI 28 nov
    themeHarbour: 'Porto', // nieuw, nalezen // nagelezen AI 28 nov
    themeWorkwear: 'Casaco de trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    themeDark: 'Escuro',
    voice: 'Voz neerlandesa',
    voiceAuto: 'Automática',
    voiceHint: 'Toca em 🔊 para ouvir. As vozes do Vloertaal soam iguais em todos os telemóveis; as outras vêm do teu telemóvel.',
    voiceNone: 'Este aparelho não tem voz neerlandesa. Podes adicionar uma nas definições do telemóvel (Texto para voz).',
    appTagline: 'Neerlandês para o trabalho',
    chooseLanguage: 'Escolhe a tua língua de ajuda',
    englishOnly: 'Só inglês',
    beta: 'Tradução ainda não verificada', // nieuw, nalezen // nagelezen AI 28 nov
    dayStreak: { one: 'dia seguido', many: 'dias seguidos', other: 'dias seguidos' },
    streakStarted: 'Começaste uma série de dias! Volta amanhã.',
    streakGrew: { one: '{n} dia seguido! Continua assim.', many: '{n} dias seguidos! Continua assim.', other: '{n} dias seguidos! Continua assim.' },
    start: 'Começar',
    practice: 'Praticar outra vez',
    locked: 'Primeiro termina a lição anterior',
    newWord: 'Palavra nova',
    tapToHear: 'Toca para ouvir',
    sayItAloud: 'Diz em voz alta.', // nieuw, nalezen // nagelezen AI 28 nov
    sayItQuietly: 'Diz baixinho, ou na tua cabeça.', // nieuw, nalezen // nagelezen AI 28 nov
    whatDoesThisMean: 'O que quer dizer isto?',
    snapQuestion: 'Percebes?', // nieuw, nalezen // nagelezen AI 28 nov
    snapYes: 'Sim, está bem.', // nieuw, nalezen // nagelezen AI 28 nov
    snapGoodAsk: 'Ainda bem que perguntas!', // nieuw, nalezen // nagelezen AI 28 nov
    snapRight: 'Bem percebido!', // nieuw, nalezen // nagelezen AI 28 nov
    snapAskBetter: 'Vês? Era melhor perguntar.', // nieuw, nalezen // nagelezen AI 28 nov
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
    rightAnswerIs: 'A resposta certa é:', // nieuw, nalezen // nagelezen AI 28 nov
    bestAnswerIs: 'A melhor resposta é:', // nieuw, nalezen // nagelezen AI 28 nov
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
    whoFairwork: { m: 'Estás a ser explorado no trabalho, ou achas que sim.', f: 'Estás a ser explorada no trabalho, ou achas que sim.', x: 'Alguém está a explorar-te no trabalho, ou achas que sim.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    who113: 'Pensas em pôr fim à vida, ou alguém te preocupa. Gratuito, dia e noite.', // nieuw, nalezen // nagelezen AI 28 nov
    whoVeiligThuis: 'Violência ou abuso em casa, contra ti ou contra outra pessoa. Gratuito, também sem dar o nome.', // nieuw, nalezen // nagelezen AI 28 nov
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
    countryHint: 'Recebes as palavras e as dicas desse país.', // nieuw, nalezen (taal: woorden en tips, 9 nov 2026) // nagelezen AI 28 nov
    onePhoneTitle: 'O que aprendes está só neste telemóvel.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
    onePhoneText: 'Usa sempre este telemóvel.', // nieuw, nalezen (één telefoon, 20 nov 2026) // nagelezen AI 28 nov
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
    sectorRetail: 'Loja e supermercado', // nieuw, nalezen // nagelezen AI 28 nov
    sectorCleaning: 'Limpeza',
    sectorHorticulture: 'Horticultura', // nieuw (30 okt 2026), nagelezen (2e lezing)
    sectorTechnical: 'Técnica', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sectorGarage: 'Oficina mecânica', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    sound: 'Som',
    soundOn: 'Com som',
    withoutSound: 'Sem som',
    quietHint: 'Sem som, as lições não têm perguntas para ouvir e nada toca sozinho. Toca em 🔊 para ouvir uma palavra, por exemplo com auscultadores.',
    soundOffToast: 'Sem som. Podes ligar o som nas Definições.',
    noInternetSound: 'Sem internet: o som não funciona agora.', // nieuw, nalezen // nagelezen AI 28 nov
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
    reviewFirstHint: 'Primeiro revê. Assim lembras-te de mais.', // nieuw, nalezen // nagelezen AI 28 nov
    wordsStrongerN: { one: '{n} palavra que já sabes melhor', many: '{n} palavras que já sabes melhor', other: '{n} palavras que já sabes melhor' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    remindAfter: 'Depois do trabalho',
    remindOwn: 'Outra hora',
    remindAdd: 'Adicionar ao meu calendário',
    remindAdded: 'Abre o ficheiro para o adicionar ao teu calendário.',
    remindAddedAsk: 'Adicionado? Então vais vê-lo no teu calendário.', // nieuw, nalezen // nagelezen AI 28 nov
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
    countHint: 'A app conta quantas vezes as lições são feitas, e mais ou menos quanto tempo demoram. E se a app tem algum erro. Sem nome, sem conta, sem rastreio.', // fout-zin nieuw, nalezen // nagelezen AI 28 nov
    certificate: 'Certificado',
    myCertificates: 'Os meus certificados',
    certsEmpty: 'Termina todas as lições de uma unidade. Depois recebes um certificado.',
    certEarned: 'Ganhaste um certificado!',
    certEarnedHint: 'Terminaste todas as lições desta unidade.',
    certView: 'Ver',
    certLater: 'Mais tarde',
    certPrint: 'Imprimir ou guardar como PDF',
    certSaved: 'A imagem está guardada.',
    certNameHint: 'Fica só neste telemóvel. Podes deixar em branco.',
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
    wordsStrongerOne: '{n} palavra que já sabes melhor', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    privacyLink: 'Ler a declaração de privacidade (em neerlandês)', // nieuw, nalezen // nagelezen AI 28 nov
    routeTitle: 'O que queres aprender?', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearn: 'Aprender neerlandês para o trabalho, e como funciona o trabalho aqui', // nieuw, nalezen // nagelezen AI 28 nov
    routeRules: 'Já falo neerlandês: só as regras do trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    routeLearnShort: 'Aprender neerlandês', // nieuw, nalezen // nagelezen AI 28 nov
    switchTitle: 'Mudar para Werkregels?', // nieuw, nalezen // nagelezen AI 28 nov
    switchDutch: 'Tudo fica em neerlandês. A tua língua de ajuda desliga-se.', // nieuw, nalezen // nagelezen AI 28 nov
    switchReview: 'Até voltares, revês regras, não palavras.', // nieuw, nalezen // nagelezen AI 28 nov
    switchKept: 'O teu progresso fica guardado. Podes voltar aqui.', // nieuw, nalezen // nagelezen AI 28 nov
    switchGo: 'Sim, ir para Werkregels', // nieuw, nalezen // nagelezen AI 28 nov
    byTheme: 'Por capítulo',
    inOrder: 'Por ordem',
    searchTopics: 'Procurar um tema', // nieuw, nalezen // nagelezen AI 28 nov
    searchNone: 'Não há nenhum tema com esta palavra.', // nieuw, nalezen // nagelezen AI 28 nov
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
    micPrivacy: "Mais ninguém te ouve. Nada é enviado.", // nieuw, nalezen // nagelezen AI 28 nov
    micUnavailable: 'Microfone desligado. Diz em voz alta agora e depois continua.',
    cantSpeak: 'Agora não posso falar',
    soundsSame: 'Soa igual',
    sayAgain: 'Diz outra vez',
    hearMine: 'Ouve-te', // nieuw, nalezen // nagelezen AI 28 nov
    thenNow: 'Antes e agora', // nieuw, nalezen // nagelezen AI 28 nov
    thenNowFirst: 'A tua primeira tentativa: {date}', // nieuw, nalezen // nagelezen AI 28 nov
    sayTogether: "Diz ao mesmo tempo", // nieuw, nalezen // nagelezen AI 28 nov
    chorusHint: "Diz ao mesmo tempo que a voz. Nada é gravado.", // nieuw, nalezen // nagelezen AI 28 nov
    chorusAlone: "Agora só tu", // nieuw, nalezen // nagelezen AI 28 nov
    speakBrave: "Errar faz parte de aprender. Não te perceberam? Diz mais uma vez.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave2: "Sentes nervos? É normal. Diz mesmo assim.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakBrave3: "Não precisas de dizer na perfeição. Basta tentar.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonTitle: "Porque aprendes neerlandês?", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonHint: "Escolhe um ou dois.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonDone: "Pronto", // nieuw, nalezen // nagelezen AI 28 nov
    reasonWork: "Fazer bem o meu trabalho", // nieuw, nalezen // nagelezen AI 28 nov
    reasonKids: "Os meus filhos", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonColleagues: "Conversar com os colegas", // nieuw, nalezen // nagelezen AI 28 nov
    reasonArrange: "Tratar das coisas sem ajuda", // nieuw, nalezen (AI-correctie 28 nov 2026)
    reasonJob: "Um trabalho melhor", // nieuw, nalezen // nagelezen AI 28 nov
    reasonHome: "Sentir-me em casa nos Países Baixos", // nieuw, nalezen (AI-correctie 28 nov 2026)
    speakMe: 'Eu',
    speakingPractice: 'Prática de fala',
    speakingHint: "Diz as palavras em voz alta e compara. Mais ninguém te ouve: nada é enviado. A tua primeira gravação de uma frase fica no teu telemóvel, para comparares mais tarde.", // nieuw, nalezen // nagelezen AI 28 nov
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
    sectorGroupCare: "Cuidados e crianças", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupShop: 'Comércio e restauração', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupBuild: 'Construção e técnica', // nieuw (30 okt 2026), nalezen // nagelezen AI 28 nov
    voiceWoman: 'Voz de mulher',
    voiceMan: 'Voz de homem',
    writingPick: 'Escolher a palavra',
    settingWriting: 'Escrita',
    settingKeepLessons: 'Guardar as lições neste telemóvel',
    settingKeepLessonsHint: 'O tema que estás a aprender agora fica guardado neste telemóvel, por isso também funciona sem internet. Os temas terminados são removidos outra vez.',
    otherTopicLink: 'Outro tema',
    remindAsk: 'Queres que te lembremos todos os dias?',
    remindYes: 'Sim, depois do trabalho',
    remindNo: { m: 'Não, obrigado', f: 'Não, obrigada', x: 'Não, prefiro que não' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    remindPickTime: 'Quando te devemos lembrar?',
    certSaveShare: 'Guardar ou partilhar',
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
    showAnswers: 'Mostrar as respostas', // nieuw, nalezen // nagelezen AI 28 nov
    lastUpdated: 'Última atualização: {date}',
    /* G4 b3 */
    buildListen: 'Ouve e faz a frase',
    chatWhichQuestion: 'Que pergunta combina com esta resposta?',
    reviewWaiting: 'Ainda há {n} palavras à espera. Voltam nos próximos dias.',
    factTitle: 'Sabias?',
    fact3: { m: 'Não estás sozinho: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.', f: 'Não estás sozinha: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.', x: 'Não és a única pessoa: mais de 3 milhões de adultos nos Países Baixos têm dificuldade em ler, fazer contas ou usar o computador. Praticar ajuda.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    resetKeeps: 'As tuas lições, palavras, série de dias e certificados são apagados. A tua língua e as tuas definições ficam.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* The start screen when a file of the app did not load (src/components/Splash.tsx). */
    loadFailed: 'Não carregou. Tens internet?',
    retry: 'Tentar de novo',
    /* The start screen when the app cannot start (src/components/Splash.tsx BootFailed). */
    bootFailed: 'O Vloertaal não consegue arrancar.', // nieuw, nalezen // nagelezen AI 28 nov
    bootFailedHint: 'Primeiro guarda o teu progresso. Depois começa de novo.', // nieuw, nalezen // nagelezen AI 28 nov
    startOver: 'Começar de novo', // nieuw, nalezen // nagelezen AI 28 nov
    crashed: 'Algo correu mal. O teu progresso está guardado.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Wat ken je al?" (src/components/Toets.tsx) */
    toetsTitle: 'O que já sabes?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsOffer: 'Cerca de 10 minutos. Não há notas. É só para ti.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndOffer: 'Já aprendeste muito. Faz o teste outra vez e vê o que sabes agora.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartListen: 'Ouvir', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartWords: 'Palavras', // nieuw, nalezen // nagelezen AI 28 nov
    toetsPartSentences: 'Frases', // nieuw, nalezen // nagelezen AI 28 nov
    toetsListenAsk: 'Ouve. O que quer dizer?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsNotSure: 'Não sabes? Toca em «Não sei». Não faz mal.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMicKeep: 'A tua gravação fica só neste telemóvel. Mais tarde podes ouvir-te outra vez.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStartDone: 'Bom começo! Isto já sabes.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsEndDone: 'Muito bem! Vê o que sabes agora.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouThen: 'Tu antes', // nieuw, nalezen // nagelezen AI 28 nov
    toetsYouNow: 'Tu agora', // nieuw, nalezen // nagelezen AI 28 nov
    toetsKeepGoing: 'Pratica um pouco todos os dias. Assim aprendes cada vez mais.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsStart: 'Fazer o teste', // nieuw, nalezen // nagelezen AI 28 nov
    toetsIdk: 'Não sei', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMore: 'Mais do que antes', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSame: 'Mais ou menos igual', // nieuw, nalezen // nagelezen AI 28 nov
    toetsMoreAll: 'No total: agora sabes mais do que antes.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsSameAll: 'No total: mais ou menos igual a antes.', // nieuw, nalezen // nagelezen AI 28 nov
    /* "Durf je dit?" (src/components/Toets.tsx DurfQuestion) */
    toetsDurfIntro: 'Primeiro, 5 perguntas sobre ti. Não há certo nem errado.', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAsk: 'Tens coragem de fazer isto?', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnderstand: 'Dizer que não percebes uma coisa', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBoss: 'Perguntar algo à tua chefia', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfHelp: 'Pedir ajuda', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfUnsafe: 'Dizer que uma coisa não é segura', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfBreak: 'Conversar um pouco com alguém do trabalho na pausa', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfNotYet: 'Ainda não', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfABit: 'Um pouco', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfYes: 'Sim', // nieuw, nalezen // nagelezen AI 28 nov
    toetsDurfAgain: 'Daqui a umas semanas, perguntamos outra vez.', // nieuw, nalezen // nagelezen AI 28 nov
    tempo: 'Velocidade', // nieuw, nalezen // nagelezen AI 28 nov
    tempoCalm: 'Devagar', // nieuw, nalezen // nagelezen AI 28 nov
    tempoNormal: 'Normal', // nieuw, nalezen // nagelezen AI 28 nov
    tempoHint: '«Devagar» é uma fala lenta e clara. «Normal» é como falam os colegas. Escolhe «Normal» se já percebes muito.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    /* "Laat zien hoe het gaat" (src/lib/kaart.ts) */
    coachCard: 'Mostra como te está a correr', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardIntro: 'Este cartão mostra o teu progresso. Mostra-o ao teu professor, coach ou chefe. Tu decides.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardNo: 'Também podes dizer que não.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardKeep: 'O teu telemóvel faz o cartão. Nada é enviado. O Vloertaal não guarda nada.', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardWhat: 'No cartão, em neerlandês:', // nieuw, nalezen // nagelezen AI 28 nov
    coachTopics: 'Temas terminados', // nieuw, nalezen // nagelezen AI 28 nov
    coachDays: 'Dias de prática nas últimas 4 semanas', // nieuw, nalezen // nagelezen AI 28 nov
    coachLast: 'Última lição, com a data', // nieuw, nalezen // nagelezen AI 28 nov
    coachCode: 'Código: os mesmos números, em versão curta, para um resumo do grupo. Sem nome.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // "Laat de telefoon luisteren (proef)": on-device recognition (src/lib/listen.ts).
    listenTrial: 'O telemóvel ouve (experimental)', // nieuw, nalezen // nagelezen AI 31 okt
    listenHint: 'Depois de falares, o telemóvel diz se te percebeu. Isto acontece no próprio telemóvel. Nada vai para nós nem para outros.', // nieuw, nalezen // nagelezen AI 28 nov
    listenNeedsPack: 'Primeiro o telemóvel precisa do neerlandês. É uma transferência grande: usa Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownload: 'Transferir neerlandês', // nieuw, nalezen // nagelezen AI 28 nov
    listenNotNow: 'Agora não', // nieuw, nalezen // nagelezen AI 28 nov
    listenDownloading: 'O neerlandês está a chegar. Tenta mais tarde.', // nieuw, nalezen // nagelezen AI 28 nov
    listenFailed: 'Não funcionou. Tenta mais tarde, com Wi-Fi.', // nieuw, nalezen // nagelezen AI 28 nov
    listenPrivacy: 'Só o telemóvel ouve. Nada é enviado.', // nieuw, nalezen // nagelezen AI 28 nov
    heardWait: 'O telemóvel está a ouvir…', // nieuw, nalezen // nagelezen AI 28 nov
    heardOk: 'Percebido', // nieuw, nalezen // nagelezen AI 28 nov
    heardAlmost: 'Quase: diz {word} outra vez', // nieuw, nalezen // nagelezen AI 28 nov
    heardNotYet: 'Ainda não percebido', // nieuw, nalezen // nagelezen AI 28 nov
    goOnAnyway: 'Continuar mesmo assim', // nieuw, nalezen // nagelezen AI 28 nov
    fasterAsk: 'Queres ir mais rápido?', // nieuw, nalezen // nagelezen AI 28 nov
    fasterHint: 'Menos explicação nas lições novas. O neerlandês a velocidade normal.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterYes: 'Sim', // nieuw, nalezen // nagelezen AI 28 nov
    fasterNo: 'Não', // nieuw, nalezen // nagelezen AI 28 nov
    easierNext: 'A próxima lição é um pouco mais curta.', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSetting: 'Aprender mais rápido', // nieuw, nalezen // nagelezen AI 28 nov
    fasterSettingHint: 'Ligado: menos explicação nas lições novas e o neerlandês a velocidade normal. Desligado: como antes.', // nieuw, nalezen // nagelezen AI 28 nov
    feelAsk: 'O que achas do Vloertaal?', // nieuw, nalezen // nagelezen AI 28 nov
    feelGood: 'Bom', // nieuw, nalezen // nagelezen AI 28 nov
    feelOk: 'Mais ou menos', // nieuw, nalezen // nagelezen AI 28 nov
    feelBad: 'Não é bom', // nieuw, nalezen // nagelezen AI 28 nov
    feelThanks: 'Obrigado! Isto ajuda-nos a melhorar o Vloertaal.', // nieuw, nalezen // nagelezen AI 28 nov
    tempoFasterHint: 'Aprender mais rápido: menos explicação nas lições novas e o neerlandês a velocidade normal.', // nieuw, nalezen // nagelezen AI 28 nov
    samenTitle: 'Praticar a dois', // nieuw, nalezen // nagelezen AI 28 nov
    samenRowHint: 'Duas pessoas, um telemóvel', // nieuw, nalezen // nagelezen AI 28 nov
    samenIntro: 'Pratica com um colega, um amigo ou um professor. Leiam à vez.', // nieuw, nalezen // nagelezen AI 28 nov
    samenHow: 'A pessoa 1 é o colega. A pessoa 2 responde.', // nieuw, nalezen // nagelezen AI 28 nov
    samenNoScore: 'Nada é gravado. Não há pontuação.', // nieuw, nalezen // nagelezen AI 28 nov
    samenPerson: 'Pessoa {n}', // nieuw, nalezen // nagelezen AI 28 nov
    samenAnswer: 'Resposta', // nieuw, nalezen // nagelezen AI 28 nov
    samenHear: 'Ouvir', // nieuw, nalezen // nagelezen AI 28 nov
    samenNext: 'Seguinte', // nieuw, nalezen // nagelezen AI 28 nov
    samenTranslation: 'Tradução', // nieuw, nalezen // nagelezen AI 28 nov
    samenEnd: 'Muito bem! Trocar de papéis e fazer outra vez?', // nieuw, nalezen // nagelezen AI 28 nov
    samenSwap: 'Trocar de papéis', // nieuw, nalezen // nagelezen AI 28 nov
    samenStop: 'Terminar', // nieuw, nalezen // nagelezen AI 28 nov
    checkStart: 'Já sei isto: teste curto', // nieuw, nalezen // nagelezen AI 28 nov
    checkPassed: 'Já conheces isto. Marcar este tema como feito?', // nieuw, nalezen // nagelezen AI 28 nov
    checkNoCert: 'Então ainda não há certificado. Recebes o certificado depois das lições.', // nieuw, nalezen // nagelezen AI 28 nov
    checkNotYet: 'As lições ajudam-te neste tema.', // nieuw, nalezen // nagelezen AI 28 nov
    checkMark: 'Marcar', // nieuw, nalezen // nagelezen AI 28 nov
    checkVia: 'com teste', // nieuw, nalezen // nagelezen AI 28 nov
    checkUndo: 'Fazer as lições mesmo assim', // nieuw, nalezen // nagelezen AI 28 nov
    commLabel: 'Comunicação', // nieuw, nalezen // nagelezen AI 28 nov
    shareInvite: 'Estou a aprender neerlandês para o meu trabalho com o Vloertaal. Grátis: {link}', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeWhat: 'O Vloertaal é uma app grátis para aprender o neerlandês do trabalho.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeHow: 'Lições curtas no teu telemóvel, com ajuda na tua língua. Sem conta.', // nieuw, nalezen // nagelezen AI 28 nov
    briefjeOpen: 'Abre no teu telemóvel:', // nieuw, nalezen // nagelezen AI 28 nov
    workTry: 'Experimenta hoje no trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    workTryWhen: 'Quando:', // nieuw, nalezen // nagelezen AI 28 nov
    workTryThen: 'Então diz:', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCard: 'Para o teu colega', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueCardHint: 'Mostra isto a um colega que fala neerlandês. Diz como te pode ajudar a praticar.', // nieuw, nalezen // nagelezen AI 28 nov
    colleagueShare: 'Envia ao teu colega', // nieuw, nalezen // nagelezen AI 28 nov
    forCoach: 'Para o teu orientador', // nieuw, nalezen // nagelezen AI 28 nov
    rulesInDutch: 'Como funciona o trabalho aqui, em neerlandês simples. O telemóvel lê em voz alta.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTextOne: 'Já sabes muito neerlandês. Em cada tema também podes ler como funciona o trabalho aqui, em neerlandês simples.', // nieuw, nalezen // nagelezen AI 28 nov
    noHelpLanguage: 'Nenhuma: falo neerlandês', // nieuw, nalezen // nagelezen AI 28 nov
    kaartSaid: 'Frases ditas no trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    kaartHard: 'Palavras que ainda são difíceis', // nieuw, nalezen // nagelezen AI 28 nov
    kaartRules: 'Lições sobre como funciona o trabalho aqui', // nieuw, nalezen // nagelezen AI 28 nov
    coachCardRights: 'Mostrar pelo nome os temas sobre os teus direitos', // nieuw, nalezen // nagelezen AI 28 nov
    speakFromMemory: 'Agora de memória: como era em neerlandês?', // nieuw, nalezen // nagelezen AI 28 nov
    keptNofM: 'Palavras de há 2 semanas ou mais: ainda sabias {n} de {m}.', // nieuw, nalezen // nagelezen AI 28 nov
    verbSecond: 'O verbo fica no lugar 2.', // nieuw, nalezen // nagelezen AI 28 nov
    playPoints: 'Pontos', // nieuw, nalezen // nagelezen AI 28 nov
    playTotal: 'Todos os teus pontos', // nieuw, nalezen // nagelezen AI 28 nov
    sfeer: 'Ambiente', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerCalm: 'Calma', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerGame: 'Jogo', // nieuw, nalezen // nagelezen AI 28 nov
    sfeerHint: 'Calma: nada se mexe, sem festas. Jogo: pontos, sons e muito movimento.', // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupService: "Serviços e segurança", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGroupOutdoor: "Trabalhar ao ar livre", // nieuw, nalezen // nagelezen AI 28 nov
    sectorChildcare: "Creche e infantário", // nieuw, nalezen // nagelezen AI 28 nov
    sectorWaste: "Resíduos e reciclagem", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFood: "Indústria alimentar", // nieuw, nalezen // nagelezen AI 28 nov
    sectorSecurity: "Segurança", // nieuw, nalezen // nagelezen AI 28 nov
    sectorFacility: "Serviços gerais", // nieuw, nalezen // nagelezen AI 28 nov
    sectorGreen: "Espaços verdes e jardins", // nieuw, nalezen // nagelezen AI 28 nov
    playLevel: 'Nível', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel1: 'Principiante', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel2: 'Aprendiz', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel3: 'Colega', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel4: 'Profissional', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel5: 'Com experiência', // nieuw, nalezen // nagelezen AI 28 nov
    playLevel6: 'Especialista', // nieuw, nalezen // nagelezen AI 28 nov
    playLevelUp: 'Novo nível:', // nieuw, nalezen // nagelezen AI 28 nov
    playPerfect: 'Sem erros:', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoal: 'Objetivo de hoje', // nieuw, nalezen // nagelezen AI 28 nov
    playDayGoalDone: 'Objetivo de hoje cumprido!', // nieuw, nalezen // nagelezen AI 28 nov
    playNewTool: 'Novo na tua caixa de ferramentas:', // nieuw, nalezen // nagelezen AI 28 nov
    playToolbox: 'A minha caixa de ferramentas', // nieuw, nalezen // nagelezen AI 28 nov
    playToolboxEmpty: 'Acaba uma lição com jogo. Assim recebes a tua primeira ferramenta.', // nieuw, nalezen // nagelezen AI 28 nov
    infoMore: 'Mais explicação', // nieuw, nalezen // nagelezen AI 28 nov
    tipsAbout: 'Sobre estas dicas', // nieuw, nalezen // nagelezen AI 28 nov
    tipsNotChecked: 'Um especialista ainda não verificou esta explicação.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStale: 'Data desta explicação: {month}. Para ver as regras mais recentes, consulta o Juridisch Loket ou o Work in NL.', // nieuw, nalezen // nagelezen AI 28 nov
    lawStaleBe: 'Data desta explicação: {month}. Para ver as regras mais recentes, consulta o justitiehuis ou o werk.belgie.be.', // nieuw, nalezen // nagelezen AI 28 nov
    aboutMore: 'Ler mais sobre o Vloertaal', // nieuw, nalezen // nagelezen AI 28 nov
    geluktAsk: 'Disseste isto no trabalho?', // nieuw, nalezen // nagelezen AI 28 nov
    geluktYes: 'Sim, correu bem', // nieuw, nalezen // nagelezen AI 28 nov
    geluktNotYet: 'Ainda não', // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneN: { one: 'Muito bem! Já conseguiste {n} frase no trabalho.', many: 'Muito bem! Já conseguiste {n} frases no trabalho.', other: 'Muito bem! Já conseguiste {n} frases no trabalho.' }, // nieuw, nalezen // nagelezen AI 28 nov
    geluktDoneOne: 'Muito bem! A tua primeira frase no trabalho correu bem.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktWhere: 'Encontras as frases nas Definições.', // nieuw, nalezen // nagelezen AI 28 nov
    geluktTitle: 'Conseguido no trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    geluktListHint: 'Disseste estas frases no trabalho.', // nieuw, nalezen // nagelezen AI 28 nov
    nextMinutesN: 'cerca de {n} min', // nieuw, nalezen // nagelezen AI 28 nov
    saveFailed: 'O teu progresso não foi guardado. O telemóvel está cheio? Liberta algum espaço. Ou vai a Definições: «Guarda o teu progresso».', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarNudge: 'O telemóvel às vezes pode apagar o teu progresso. Por isso, guarda uma cópia.', // nieuw, nalezen // nagelezen AI 28 nov
    bewaarGo: 'Guardar agora', // nieuw, nalezen // nagelezen AI 28 nov
    backupShare: 'Envia para ti', // nieuw, nalezen // nagelezen AI 28 nov
    backupShareHint: 'Envia o ficheiro para ti, por exemplo no WhatsApp ou por e-mail.', // nieuw, nalezen // nagelezen AI 28 nov
    backupMade: 'Pronto. Guarda bem este ficheiro. Com ele recuperas o teu progresso mais tarde.', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnPrompt: 'O que dizes?', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnExample: 'Exemplo', // nieuw, nalezen // nagelezen AI 28 nov
    speakTurnReveal: 'Ouve a resposta', // nieuw, nalezen // nagelezen AI 28 nov
    sceneTitle: 'Ouve no trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    sceneIntro: 'Há barulho, como no trabalho. Ouve. Depois vêm as perguntas.', // nieuw, nalezen // nagelezen AI 28 nov
    buildFront: 'Põe a palavra marcada no início', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeTitle: 'As regras do trabalho', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeText: 'Já sabes muito neerlandês. Queres aprender também as regras do trabalho? Então tudo fica em neerlandês.', // nieuw, nalezen // nagelezen AI 28 nov
    bridgeGo: 'Sim, mostra-me', // nieuw, nalezen // nagelezen AI 28 nov
    klankTitle: 'Como se diz?', // nieuw, nalezen // nagelezen AI 28 nov
    klankHint: 'Toca num som. Vê como a boca o faz.', // nieuw, nalezen // nagelezen AI 28 nov
    klankSpeed: 'Velocidade', // nieuw, nalezen // nagelezen AI 28 nov
    klankScrub: 'A palavra, som a som', // nieuw, nalezen // nagelezen AI 28 nov
    tagSound: 'Som', // nieuw, nalezen // nagelezen AI 28 nov
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
    'u.emergency': "Quando algo corre mal", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gear': 'Equipamento de proteção',
    'w.helm': 'o capacete',
    'w.handschoenen': 'as luvas',
    'w.veiligheidsschoenen': 'os sapatos de segurança',
    'w.hesje': 'o colete refletor',
    'w.bril': 'os óculos de proteção',
    'w.dragen': 'usar (roupa ou equipamento)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
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
    'l.alarm': 'O alarme de incêndio e a evacuação', // nieuw, nalezen // nagelezen AI 22 nov
    'w.alarm': 'o alarme', // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontruimen': 'evacuar (todos saem do edifício)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vluchtroute': 'o caminho de evacuação', // nieuw, nalezen // nagelezen AI 22 nov
    'w.trap': 'as escadas', // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzamelplaats': 'o ponto de encontro (onde todos se juntam lá fora)', // nieuw, nalezen // nagelezen AI 22 nov
    'w.brandblusser': 'o extintor', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.1': 'Onde está o extintor?', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.2': 'Temos de evacuar o edifício.', // nieuw, nalezen // nagelezen AI 22 nov
    's.alarm.3': 'Vai pelas escadas, não pelo elevador.', // nieuw, nalezen // nagelezen AI 22 nov
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
    's.shift.3': { m: 'Desculpa, estou atrasado.', f: 'Desculpa, estou atrasada.', x: 'Desculpa o atraso.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
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
    'c.alarm.q': 'Estão todos lá fora?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.a': 'Não, o meu colega ainda não está cá.', // nieuw, nalezen // nagelezen AI 22 nov
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
    's.notyet.3': { m: 'Já posso fazer isto sozinho?', f: 'Já posso fazer isto sozinha?', x: 'Já posso fazer isto por minha conta?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
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
    'p.hurt': { m: 'Estou ferido.', f: 'Estou ferida.', x: 'Magoei-me.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.picking': "Preparar pedidos", // nieuw, nalezen // nagelezen AI 28 nov
    'w.artikel': "o artigo (um produto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vak': "o lugar (um espaço na estante)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sticker': "o autocolante, a etiqueta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzamelen': "juntar, recolher", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontbreken': "faltar (não está lá)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.locatie': "a localização (o código do sítio, como A-12)", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.1': "Estou a juntar os artigos deste pedido.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.2': "Este artigo falta. O lugar está vazio.", // nieuw, nalezen // nagelezen AI 28 nov
    's.picking.3': "O autocolante tem de ir na caixa.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.q': "Qual é a localização?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.picking.a': "Corredor três, lugar doze.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.loading': "Carregar e descarregar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtwagen': "o camião", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chauffeur': "o motorista", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lossen': "descarregar (tirar as coisas do camião)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pompwagen': "o porta-paletes (um carrinho de mão que levanta uma palete)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.folie': "a película (plástico fino à volta de uma palete)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrachtbrief': "a guia de transporte (o papel que diz o que está no camião)", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.1': "O camião está na porta quatro.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.2': "Descarregamos primeiro estas paletes.", // nieuw, nalezen // nagelezen AI 28 nov
    's.loading.3': "O motorista está à espera da guia de transporte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.q': "Esta palete está pronta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.loading.a': "Não, ainda falta pôr a película à volta.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'l.howto': "Como se faz isto?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoe': "como", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zo': "assim, desta maneira", // nieuw, nalezen // nagelezen AI 28 nov
    'w.moeilijk': "difícil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.makkelijk': "fácil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weten': "saber", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klopt': "está certo", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.1': "Como se faz isto?", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.2': "Isto é difícil para mim.", // nieuw, nalezen // nagelezen AI 28 nov
    's.howto.3': "Estou a fazer bem assim?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.q': "Sabes como se faz isto?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.howto.a': "Não, isso ainda não sei.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mayask': "Posso perguntar uma coisa?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vragen': "perguntar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wie': "quem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.even': "um momento", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijd': "o tempo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.storen': "incomodar (alguém que está ocupado)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.twijfelen': "duvidar (não tens a certeza)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.1': "Posso perguntar uma coisa?", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.2': "Desculpa incomodar.", // nieuw, nalezen // nagelezen AI 28 nov
    's.mayask.3': "Quem me pode ajudar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.q': "Tens uma pergunta?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mayask.a': "Sim. Tens um momento?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.whereis': "Onde é?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hier': "aqui", // nieuw, nalezen // nagelezen AI 28 nov
    'w.daar': "ali", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwijt': "perdido (não o encontras)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitgang': "a saída", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzen': "apontar (mostrar onde está)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naast': "ao lado de", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.1': { m: "Estou perdido.", f: "Estou perdida.", x: "Perdi-me." }, // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.2': "Onde é a saída?", // nieuw, nalezen // nagelezen AI 28 nov
    's.whereis.3': "A casa de banho é ali, ao lado da cantina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.q': "Consegues encontrar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.whereis.a': "Não. Podes apontar?", // nieuw, nalezen // nagelezen AI 28 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): l.roster, l.breaks, l.wound and l.callhelp.
    'l.wound': "Feridas pequenas e queimaduras", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wond': "a ferida", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verband': "a ligadura", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelen': "arrefecer (com água fria)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snee': "o corte (uma ferida pequena feita com uma faca ou uma coisa afiada)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.flauwvallen': "desmaiar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogdouche': "o lava-olhos (água para lavar os olhos)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.1': "Arrefece a queimadura com água.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.2': "É um corte pequeno. Carrega na ferida.", // nieuw, nalezen // nagelezen AI 28 nov
    's.wound.3': "Onde está o lava-olhos?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.q': "O meu colega está quase a desmaiar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a': "Deixa-o ficar deitado um bocado. Eu vou buscar ajuda.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.callhelp': "Ligar para o 112", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hulpdiensten': "os serviços de emergência (ambulância, bombeiros, polícia)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straatnaam': "o nome da rua", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisnummer': "o número da porta", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekbaar': "consciente (a pessoa reage quando falas com ela)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwachten': "esperar por alguém (à porta, para o receber)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aandelijn': "ficar em linha (não desligas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.1': "Estou a ligar para o 112. Preciso de uma ambulância.", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.2': "Qual é o nome da rua e o número da porta?", // nieuw, nalezen // nagelezen AI 28 nov
    's.callhelp.3': "Espero pela ambulância à entrada.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.q': "Ele reage quando falas com ele?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a': "Não. Ele não reage.", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roster': "O teu horário", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weekrooster': "o horário semanal (quem trabalha quando esta semana)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roosterapp': "a app do horário (os teus turnos no telemóvel)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beschikbaar': "disponível (podes trabalhar nessa altura)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijziging': "a mudança", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invallen': "substituir (trabalhar no lugar de alguém que falta)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijedag': "o dia de folga", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.1': "O horário novo está na app.", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.2': "Estás disponível no sábado?", // nieuw, nalezen // nagelezen AI 28 nov
    's.roster.3': "Podes substituir a Sara amanhã?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.q': "Há uma mudança no teu horário.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.a': "Está bem. Em que dia tenho de trabalhar?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.breaks': "Horas e pausas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lunchpauze': "a pausa para almoço", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rusttijd': "o tempo de descanso (tempo livre entre dois turnos)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkdag': "o dia de trabalho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urenlijst': "a folha de horas (onde escreves as horas que trabalhaste)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eerderweg': "sair mais cedo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterelkaar': "seguidos (um a seguir ao outro)", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.1': "Escrevo as minhas horas na folha de horas.", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.2': "Posso sair hoje uma hora mais cedo?", // nieuw, nalezen // nagelezen AI 28 nov
    's.breaks.3': "Trabalhei seis dias seguidos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.q': "Quando é a tua pausa para almoço?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a': "Ao meio-dia, meia hora.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'l.firstweeks': "As tuas primeiras semanas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rondleiding': "a visita guiada (alguém mostra-te o edifício)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleider': "o tutor / a tutora (o colega que te ajuda nas tuas primeiras semanas)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.notitieboekje': "o caderno de notas", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meelopen': "acompanhar um colega (e ver como trabalha)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onthouden': "lembrar-se, memorizar", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zelfstandig': "de forma autónoma (sem ajuda)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.1': "Podes mostrar outra vez?", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.2': "Hoje acompanho a Sara.", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstweeks.3': "Escrevo isto no meu caderno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.q': "Lembras-te de tudo da visita guiada?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a': "De quase tudo. Onde é que era a cantina?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.orderpick': "Preparar encomendas e o empilhador retrátil", // nieuw, nalezen // nagelezen AI 28 nov
    'w.orderpicker': "o preparador de encomendas (o trabalhador que junta as encomendas; também o pequeno veículo em que vais de pé para tirar coisas no alto)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reachtruck': "o empilhador retrátil (um empilhador para estantes muito altas; os garfos avançam para a frente)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.picklijst': "a lista de picking (a lista dos artigos que tens de juntar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scannen': "passar no leitor (scanner)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetganger': "o peão (uma pessoa a pé)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opwarmen': "aquecer-se (num sítio quente, depois de trabalhar no frio)", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.1': "Passo no leitor cada artigo da lista de picking.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.2': "Os peões andam pelo caminho para peões.", // nieuw, nalezen // nagelezen AI 28 nov
    's.orderpick.3': "Na câmara de congelação uso roupa térmica.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.q': "Podes conduzir o empilhador retrátil um bocadinho?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a': "Não, não posso. Não tenho formação para isso.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default lang;
