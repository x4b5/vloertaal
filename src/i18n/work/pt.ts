import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Candidatar-se a um emprego',
    'l.cv': 'O teu CV e a carta',
    'w.cv': 'o CV',
    'w.motivatie': 'a motivação (porque queres o emprego)',
    'w.ervaring': 'a experiência',
    'w.opleiding': 'a formação, os estudos',
    'w.vaardigheden': 'as competências',
    'w.referentie': 'a referência (alguém que pode falar do teu trabalho)',
    's.cv.1': 'Aqui está o meu CV.',
    's.cv.2': 'Tenho experiência na construção.',
    's.cv.3': 'Falo três línguas.',
    'c.cv.q': 'Tens uma referência?',
    'c.cv.a': 'Sim, o meu antigo patrão.',
    'l.interview': 'A entrevista de emprego',
    'w.sollicitatiegesprek': 'a entrevista de emprego',
    'w.begroeten': 'cumprimentar',
    'w.vertellen': 'contar',
    'w.vraagstellen': 'fazer uma pergunta',
    'w.salaris': 'o salário',
    'w.functie': 'o cargo, a função',
    's.interview.1': 'Tenho uma entrevista de emprego.',
    's.interview.2': 'Ainda estou a aprender neerlandês.',
    's.interview.3': 'Quando terei notícias suas?',
    'c.interview.q': 'Conta-me alguma coisa sobre ti.',
    'c.interview.a': 'Trabalhei cinco anos num armazém.',
    'u.contract': 'Trabalho e contratos',
    'l.findwork': 'Encontrar trabalho',
    'w.vacature': 'a vaga de emprego',
    'w.uitzendbureau': 'a agência de trabalho temporário',
    'w.solliciteren': 'candidatar-se a um emprego',
    'w.contract': 'o contrato',
    'w.tekenen': 'assinar',
    'w.tijdelijk': 'temporário',
    's.findwork.1': 'Quero candidatar-me.',
    's.findwork.2': 'O contrato é temporário ou efetivo?',
    's.findwork.3': 'Posso ter uma cópia do contrato?',
    'c.findwork.q': 'Que tipo de trabalho procuras?',
    'c.findwork.a': 'Procuro trabalho num armazém.',
    'l.contract': 'O teu contrato',
    'w.werkgever': 'o empregador',
    'w.uren': 'as horas',
    'w.oproepkracht': 'o trabalhador à chamada',
    'w.proeftijd': 'o período experimental',
    'w.opzegtermijn': 'o prazo de aviso prévio',
    'w.cao': 'o contrato coletivo de trabalho',
    's.contract.1': 'Quantas horas trabalho por semana?',
    's.contract.2': 'Quanto tempo dura o período experimental?',
    's.contract.3': 'Que contrato coletivo se aplica a mim?',
    'c.contract.q': 'Podes vir trabalhar amanhã?',
    'c.contract.a': 'Sim, a que horas tenho de lá estar?',
    'l.agency': 'Trabalhar através de uma agência',
    'w.uitzendkracht': 'o trabalhador temporário',
    'w.intercedent': 'a pessoa de contacto da agência',
    'w.urenbriefje': 'a folha de horas',
    'w.opdracht': 'a missão (o trabalho numa empresa)',
    'w.verlengen': 'prolongar',
    'w.uitbetalen': 'pagar (dar o dinheiro)',
    's.agency.1': 'Trabalho através de uma agência de trabalho temporário.',
    's.agency.2': 'A minha missão vai ser prolongada?',
    's.agency.3': 'Quando acaba a minha missão?',
    'c.agency.q': 'Já entregaste as tuas horas?',
    'c.agency.a': 'Sim, ontem, na app.',
    'u.papers': 'Casa e papéis',
    'l.bsn': 'O teu BSN e os papéis',
    'w.bsn': 'o número de cidadão (BSN)',
    'w.identiteitsbewijs': 'o documento de identificação',
    'w.gemeente': 'a câmara municipal, o município',
    'w.inschrijven': 'inscrever-se, registar-se',
    'w.adres': 'a morada',
    'w.zorgverzekering': 'o seguro de saúde',
    's.bsn.1': 'Vou inscrever-me na câmara municipal.',
    's.bsn.2': 'A minha morada mudou.',
    's.bsn.3': 'Entro com o DigiD.',
    'c.bsn.q': 'Posso ver o teu documento de identificação?',
    'c.bsn.a': 'Sim, aqui está o meu passaporte.',
    'l.housing': 'Habitação',
    'w.kamer': 'o quarto',
    'w.huur': 'a renda',
    'w.huurcontract': 'o contrato de arrendamento',
    'w.borg': 'a caução',
    'w.huisbaas': 'o senhorio',
    'w.inhouden': 'descontar (do teu salário)',
    's.housing.1': 'Quanto é a renda por semana?',
    's.housing.2': 'Recebo a caução de volta?',
    's.housing.3': 'Quero um contrato de arrendamento separado.',
    'c.housing.q': 'Descontamos a renda do teu salário.',
    'c.housing.a': 'Então quero isso por escrito.',
    'u.pay': 'O salário',
    'l.payslip': 'O teu recibo de vencimento',
    'w.loon': 'o salário, o ordenado',
    'w.bruto': 'bruto (antes dos impostos)',
    'w.netto': 'líquido (o que recebes)',
    'w.loonstrook': 'o recibo de vencimento',
    'w.belasting': 'o imposto',
    'w.uurloon': 'o salário por hora',
    's.payslip.1': 'Quanto ganho por hora?',
    's.payslip.2': 'O meu recibo de vencimento não está certo.',
    's.payslip.3': 'O líquido é menos do que o bruto.',
    'c.payslip.q': 'Recebeste o teu recibo de vencimento?',
    'c.payslip.a': 'Sim, mas faltam horas.',
    'l.extra': 'Dinheiro extra',
    'w.vakantiegeld': 'o subsídio de férias',
    'w.overuren': 'as horas extra',
    'w.toeslag': 'o suplemento (pagamento extra)',
    'w.minimumloon': 'o salário mínimo',
    'w.bankrekening': 'a conta bancária',
    'w.betalen': 'pagar',
    's.extra.1': 'Recebo suplemento pelo trabalho noturno?',
    's.extra.2': 'As horas extra são pagas?',
    's.extra.3': 'O meu salário vai para a minha conta bancária.',
    'c.extra.q': 'Podes ficar mais duas horas hoje?',
    'c.extra.a': 'Sim, apontas as horas extra?',
    'u.house': 'Regras da casa',
    'l.phone': 'O teu telemóvel no trabalho',
    'w.telefoon': 'o telemóvel, o telefone',
    'w.appen': 'mandar mensagem (numa app)',
    'w.kluisje': 'o cacifo',
    'w.uitzetten': 'desligar',
    'w.prive': 'privado, pessoal',
    'w.foto': 'a fotografia',
    's.phone.1': 'O meu telemóvel está no meu cacifo.',
    's.phone.2': 'Vou desligar o meu telemóvel.',
    's.phone.3': 'Posso tirar uma fotografia aqui?',
    'c.phone.q': 'Nada de telemóvel junto à máquina, está bem?',
    'c.phone.a': 'Está bem, mando mensagens na pausa.',
    'l.smoking': 'Fumar',
    'w.roken': 'fumar',
    'w.rookplek': 'a zona de fumadores',
    'w.verboden': 'proibido',
    'w.buiten': 'lá fora',
    'w.esigaret': 'o cigarro eletrónico',
    'w.brandbaar': 'que arde facilmente (inflamável)',
    's.smoking.1': 'Aqui é proibido fumar.',
    's.smoking.2': 'Onde é a zona de fumadores?',
    's.smoking.3': 'Só fumo lá fora, na pausa.',
    'c.smoking.q': 'Vens fumar?',
    'c.smoking.a': 'Não, ainda não estou na pausa.',
    'l.clock': 'Picar o ponto e chegar a horas',
    'w.inklokken': 'picar o ponto à entrada',
    'w.uitklokken': 'picar o ponto à saída',
    'w.pasje': 'o cartão (de funcionário)',
    'w.prikklok': 'o relógio de ponto',
    'w.optijd': 'a horas',
    'w.rooster': 'o horário de trabalho',
    's.clock.1': 'Pico o ponto às seis horas.',
    's.clock.2': 'Esqueci-me do meu cartão.',
    's.clock.3': 'Onde está afixado o horário?',
    'c.clock.q': 'Podes picar o ponto por mim?',
    'c.clock.a': 'Não, isso não é permitido.',
    'l.hygiene': 'Álcool, drogas e higiene',
    'w.alcohol': 'o álcool',
    'w.medicijn': 'o medicamento',
    'w.handenwassen': 'lavar as mãos',
    'w.werkkleding': 'a roupa de trabalho',
    'w.haarnetje': 'a rede para o cabelo',
    'w.schoon': 'limpo',
    's.hygiene.1': 'Lava as mãos antes do trabalho.',
    's.hygiene.2': 'O álcool e as drogas são proibidos.',
    's.hygiene.3': 'A minha roupa de trabalho está limpa.',
    'c.hygiene.q': 'Tens a rede do cabelo posta?',
    'c.hygiene.a': 'Sim, e tirei o meu anel.',
    'u.social': 'Dar-se bem com os outros',
    'l.smalltalk': 'Conversa de circunstância e pausas',
    'w.weekend': 'o fim de semana',
    'w.koffie': 'o café',
    'w.gezellig': 'acolhedor, agradável em conjunto',
    'w.weer': 'o tempo (meteorologia)',
    'w.verjaardag': 'o aniversário',
    'w.gefeliciteerd': 'parabéns',
    's.smalltalk.1': 'Como foi o teu fim de semana?',
    's.smalltalk.2': 'Posso sentar-me convosco?',
    's.smalltalk.3': 'Hoje está bom tempo.',
    'c.smalltalk.q': 'O que fizeste este fim de semana?',
    'c.smalltalk.a': 'Joguei futebol com amigos.',
    'l.mistakes': 'Feedback e erros',
    'w.fout': 'o erro',
    'w.compliment': 'o elogio',
    'w.feedback': 'o feedback (o que alguém diz sobre o teu trabalho)', // nieuw, nalezen
    'w.uitleggen': 'explicar',
    'w.leren': 'aprender',
    'w.verbeteren': 'melhorar, corrigir',
    's.mistakes.1': 'Desculpa, cometi um erro.',
    's.mistakes.2': 'Podes explicar?',
    's.mistakes.3': { m: 'Obrigado pelo elogio!', f: 'Obrigada pelo elogio!', x: 'Obrigado / obrigada pelo elogio!' },
    'c.mistakes.q': 'Muito bem! Bom trabalho!', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.mistakes.a': { m: 'Obrigado, é bom ouvir isso.', f: 'Obrigada, é bom ouvir isso.', x: 'Obrigado / obrigada, é bom ouvir isso.' },
    'l.respect': 'Respeito por todos',
    'w.respect': 'o respeito',
    'w.gelijk': 'igual',
    'w.grens': 'o limite',
    'w.neezeggen': 'dizer que não',
    'w.pesten': 'assediar, fazer bullying',
    'w.vertrouwenspersoon': 'a pessoa de confiança (conselheiro confidencial)',
    's.respect.1': 'Aqui todos são iguais.',
    's.respect.2': 'Isto não me parece bem.',
    's.respect.3': 'Para, este é o meu limite.',
    'c.respect.q': 'O que se passa? Pareces triste.',
    'c.respect.a': 'Um colega está a fazer-me bullying.',
    'u.rights': 'Regras e direitos',
    'l.health': 'Trabalho seguro e saudável',
    'w.arbowet': 'a lei de saúde e segurança no trabalho',
    'w.veilig': 'seguro',
    'w.werktijden': 'o horário de trabalho',
    'w.rust': 'o descanso',
    'w.beschermingsmiddelen': 'o equipamento de proteção',
    'w.arbeidsinspectie': 'a Inspeção do Trabalho',
    's.health.1': 'Tenho direito a uma pausa.',
    's.health.2': 'O trabalho tem de ser seguro.',
    's.health.3': 'Vou comunicar isto à Inspeção do Trabalho.',
    'c.health.q': 'Agora tens de fazer uma pausa.',
    'c.health.a': 'Está bem, vou sentar-me um pouco.',
    'l.rights': 'Os teus direitos',
    'w.recht': 'o direito',
    'w.discriminatie': 'a discriminação',
    'w.vakbond': 'o sindicato',
    'w.juridischloket': 'o Juridisch Loket (ajuda jurídica grátis)',
    'w.klacht': 'a queixa',
    'w.ontslag': 'o despedimento',
    's.rights.1': 'Quero apresentar uma queixa.',
    's.rights.2': 'Sou membro do sindicato.',
    's.rights.3': 'Isto é discriminação.',
    'c.rights.q': 'Assina aqui o teu despedimento.',
    'c.rights.a': 'Não, ainda não assino.',
    'l.mustmay': 'Tens de, ou podes escolher?', // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'ter de, dever', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'não ter de, não ser preciso', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'necessário, preciso', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'voluntário, por escolha', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'a escolha', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'a regra', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': 'Tenho de assinar isto?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': 'Não, não tens de assinar.', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'É a regra: o capacete é obrigatório.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': 'Tenho de fazer horas extra no sábado?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'Não, não é preciso. É voluntário.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Férias e licenças", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Dias de folga',
    'w.vakantiedagen': 'os dias de férias',
    'w.verlof': 'a licença',
    'w.aanvragen': 'pedir, requerer',
    'w.feestdag': 'o feriado',
    'w.vrij': 'livre, de folga',
    'w.calamiteitenverlof': 'a licença de emergência',
    's.leave.1': 'Quero pedir uma licença.',
    's.leave.2': 'Estou de folga no feriado?',
    's.leave.3': 'Tenho uma emergência em casa.',
    'c.leave.q': 'Quando queres ir de férias?',
    'c.leave.a': 'Em julho, três semanas.',
    'l.illness': 'Doente em casa',
    'w.ziekmelden': 'avisar que se está doente',
    'w.betermelden': 'avisar que já se está melhor',
    'w.bedrijfsarts': 'o médico da empresa',
    'w.ziekte': 'a doença',
    'w.doorbetalen': 'continuar a pagar',
    'w.wachtdag': 'o dia de espera (sem pagamento)',
    's.illness.1': 'Estou a ligar para avisar que estou doente.',
    's.illness.2': 'Tenho uma consulta com o médico da empresa.',
    's.illness.3': 'Amanhã volto ao trabalho.',
    'c.illness.q': 'O que tens exatamente?',
    'c.illness.a': 'Isso falo com o médico da empresa.',
    'u.exploit': 'Conhece os teus direitos: exploração',
    'l.warning': 'Sinais de alarme',
    'w.uitbuiting': 'a exploração',
    'w.paspoort': 'o passaporte',
    'w.schuld': 'a dívida',
    'w.dreigen': 'ameaçar',
    'w.onderbetaald': 'mal pago (pago de menos)',
    'w.afpakken': 'tirar (à força)',
    's.warning.1': 'O meu patrão tem o meu passaporte.',
    's.warning.2': 'Não recebo recibo de vencimento.',
    's.warning.3': 'Tenho de pagar uma dívida.',
    'c.warning.q': 'Dá-me cá o teu passaporte.',
    'c.warning.a': 'Não, só pode fazer uma cópia.',
    'l.gethelp': 'Pedir ajuda',
    'w.politie': 'a polícia',
    'w.anoniem': 'sem dar o teu nome (anónimo)',
    'w.melden': 'comunicar, denunciar',
    'w.hulp': 'a ajuda',
    'w.gevaar': 'o perigo',
    'w.bang': 'com medo',
    's.gethelp.1': 'Quero comunicar uma coisa.',
    's.gethelp.2': 'Posso fazê-lo sem dar o meu nome?',
    's.gethelp.3': 'Tenho medo do meu patrão.',
    'c.gethelp.q': 'Em que te posso ajudar?',
    'c.gethelp.a': 'Tratam-me mal no trabalho.',
    'u.contact': 'Ligar e mandar mensagens para o trabalho',
    'l.callin': 'Ligar para o trabalho',
    'w.telefoontje': 'o telefonema',
    'w.terugbellen': 'ligar de volta',
    'w.bereikbaar': 'contactável (por telefone)',
    'w.reden': 'a razão',
    'w.overmorgen': 'depois de amanhã',
    'w.inspreken': 'deixar uma mensagem de voz',
    's.callin.1': 'Olá, fala o Ali.',
    's.callin.2': 'Acho que volto depois de amanhã.',
    's.callin.3': 'Pode ligar-me de volta?',
    'c.callin.q': 'Quando voltas?',
    'c.callin.a': 'Acho que na segunda-feira.',
    'l.texting': 'Mensagens e a app do horário',
    'w.bericht': 'a mensagem',
    'w.app': 'a app',
    'w.reageren': 'responder, reagir',
    'w.ruilen': 'trocar',
    'w.kijken': 'olhar, ver',
    'w.groet': 'a saudação (no fim de uma mensagem)',
    's.texting.1': 'Vou chegar com dez minutos de atraso.',
    's.texting.2': 'Alguém quer trocar de turno comigo?',
    's.texting.3': 'Vejo a app todos os dias.',
    'c.texting.q': 'Podes fazer um turno extra no sábado?',
    'c.texting.a': 'Sim, respondo já na app.',
    'u.grow': 'Diplomas e crescer',
    'l.certs': 'Certificados',
    'w.certificaat': 'o certificado',
    'w.cursus': 'o curso',
    'w.examen': 'o exame',
    'w.slagen': 'passar (num exame)',
    'w.heftruckcertificaat': 'o certificado de empilhador',
    'w.halen': 'tirar (um certificado)',
    's.certs.1': 'Tenho um certificado de segurança VCA.',
    's.certs.2': 'Quero fazer um curso.',
    's.certs.3': 'O empregador paga o curso?',
    'c.certs.q': 'Tens certificado de empilhador?',
    'c.certs.a': 'Não, mas gostava de o tirar.',
    'l.diploma': 'O teu diploma e a formação',
    'w.diploma': 'o diploma',
    'w.waarderen': 'pedir a avaliação (de um diploma)',
    'w.training': 'a formação',
    'w.verplicht': 'obrigatório',
    'w.werktijd': 'o tempo de trabalho',
    'w.verderkomen': 'progredir',
    's.diploma.1': 'Tenho um diploma do meu país.',
    's.diploma.2': 'Esta formação é obrigatória?',
    's.diploma.3': 'Quero progredir no meu trabalho.',
    'c.diploma.q': 'Queres fazer uma formação?',
    'c.diploma.a': 'Sim, quero! Quem paga?',
    'u.health': 'Saúde',
    'l.doctor': 'Médico ou 112?',
    'w.huisarts': 'o médico de família',
    'w.huisartsenpost': 'o serviço de médicos de família à noite e ao fim de semana',
    'w.apotheek': 'a farmácia',
    'w.recept': 'a receita (médica)',
    'w.spoed': 'urgente',
    'w.ambulance': 'a ambulância',
    's.doctor.1': 'Quero marcar uma consulta com o médico de família.',
    's.doctor.2': 'Onde é a farmácia?',
    's.doctor.3': 'É urgente.',
    'c.doctor.q': 'Serviço de médicos de família, em que posso ajudar?',
    'c.doctor.a': 'O meu filho tem febre alta.',
    'l.insurance': 'Seguro de saúde',
    'w.premie': 'o prémio (pagamento mensal)',
    'w.eigenrisico': 'a franquia (custos que pagas primeiro)',
    'w.zorgtoeslag': 'o subsídio para o seguro de saúde',
    'w.verzekeraar': 'a seguradora',
    'w.permaand': 'por mês',
    'w.vergoeden': 'pagar (cobrir) os custos',
    's.insurance.1': 'Pago um prémio todos os meses.',
    's.insurance.2': 'Isto é pago pelo seguro?',
    's.insurance.3': 'Vou pedir o subsídio para o seguro de saúde.',
    'c.insurance.q': 'Em que seguradora estás?',
    'c.insurance.a': 'Isso está no meu cartão do seguro de saúde.',
    'u.money': 'Dinheiro e cartas',
    'l.letters': 'Cartas oficiais',
    'w.brief': 'a carta',
    'w.post': 'o correio',
    'w.belastingdienst': 'as Finanças (Belastingdienst)',
    'w.aangifte': 'a declaração de impostos',
    'w.inkomen': 'o rendimento',
    'w.terugbetalen': 'devolver (o dinheiro)',
    's.letters.1': 'Não percebo esta carta.',
    's.letters.2': 'Podes ajudar-me com esta carta?',
    's.letters.3': 'O meu rendimento mudou.',
    'c.letters.q': 'Já fizeste a tua declaração de impostos?',
    'c.letters.a': 'Não, faço-a antes de 1 de maio.',
    'l.scams': 'Cuidado com as burlas',
    'w.pincode': 'o PIN',
    'w.link': 'o link',
    'w.oplichter': 'o burlão',
    'w.sms': 'a mensagem de texto (SMS)',
    'w.controleren': 'verificar',
    'w.nep': 'falso',
    's.scams.1': 'Nunca dou o meu PIN.',
    's.scams.2': 'Não carrego no link.',
    's.scams.3': 'Esta mensagem é falsa.',
    'c.scams.q': 'Fala do banco. Qual é o seu PIN?',
    'c.scams.a': 'Não o dou. Vou desligar.',
    'u.travel': 'Ir para o trabalho',
    'l.bike': 'De bicicleta',
    'w.fiets': 'a bicicleta',
    'w.fietspad': 'a ciclovia',
    'w.licht': 'a luz',
    'w.slot': 'o cadeado',
    'w.stoplicht': 'o semáforo',
    'w.bel': 'a campainha',
    's.bike.1': 'Vou de bicicleta para o trabalho.',
    's.bike.2': 'Liga a tua luz!',
    's.bike.3': 'Põe o cadeado na tua bicicleta.',
    'c.bike.q': 'Como vais para o trabalho?',
    'c.bike.a': 'De bicicleta, vinte minutos.',
    'l.transit': 'Transportes públicos e custos de viagem',
    'w.bus': 'o autocarro',
    'w.trein': 'o comboio',
    'w.inchecken': 'validar à entrada (check-in)',
    'w.uitchecken': 'validar à saída (check-out)',
    'w.bankpas': 'o cartão bancário',
    'w.reiskosten': 'o subsídio de transporte',
    's.transit.1': 'Valido com o meu cartão bancário.', // nieuw, nalezen (4 nov 2026)
    's.transit.2': 'Não te esqueças de validar o cartão à saída.', // nieuw, nalezen (4 nov 2026)
    's.transit.3': 'Onde é a paragem do autocarro?',
    'c.transit.q': 'Vens de comboio?',
    'c.transit.a': 'Não, de autocarro. Para mesmo à porta.',
    'u.lost': 'Perder o emprego',
    'l.ww': 'Subsídio de desemprego',
    'w.uitkering': 'o subsídio (dinheiro do Estado)',
    'w.ww': 'o subsídio de desemprego (WW)',
    'w.werkloos': 'desempregado',
    'w.uwv': 'o UWV (o serviço de emprego e subsídios)',
    'w.ontslagnemen': 'despedir-se (sair do emprego por vontade própria)',
    'w.werkzoekende': 'a pessoa à procura de emprego',
    's.ww.1': 'Vou pedir o subsídio de desemprego no UWV.',
    's.ww.2': { m: 'Estou desempregado.', f: 'Estou desempregada.', x: 'Estou sem emprego.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.ww.3': 'O meu contrato acaba.',
    'c.ww.q': 'O que vais fazer agora que o teu contrato acaba?',
    'c.ww.a': 'Vou pedir já o subsídio de desemprego.',
    'l.newjob': 'Procurar um novo trabalho',
    'w.baan': 'o emprego',
    'w.zoeken': 'procurar',
    'w.bewaren': 'guardar',
    'w.bijwerken': 'atualizar',
    'w.gratis': 'grátis',
    'w.nooit': 'nunca',
    's.newjob.1': 'Estou à procura de um novo emprego.',
    's.newjob.2': 'Guardo os meus recibos de vencimento.',
    's.newjob.3': 'Procurar trabalho é grátis.',
    'c.newjob.q': 'Podemos ligar-te quando houver trabalho?',
    'c.newjob.a': 'Sim, por favor. Aqui está o meu número.',
    'u.build': 'Na obra',
    'l.tools': 'Ferramentas e materiais',
    'w.steiger': 'o andaime',
    'w.ladder': 'o escadote, a escada',
    'w.boor': 'o berbequim',
    'w.hamer': 'o martelo',
    'w.beton': 'o betão',
    'w.kraan': 'a grua',
    's.tools.1': 'Passa-me o martelo um momento.',
    's.tools.2': 'A escada está encostada ao andaime.',
    's.tools.3': 'O betão ainda está molhado.',
    'c.tools.q': 'Onde está o berbequim?',
    'c.tools.a': 'Na carrinha, atrás.',
    'l.site': 'Segurança na obra',
    'w.valbeveiliging': 'a proteção contra quedas (arnês)',
    'w.last': 'a carga',
    'w.gat': 'o buraco',
    'w.vallen': 'cair',
    'w.risico': 'o risco',
    'w.weigeren': 'recusar',
    's.site.1': 'Cuidado, carga por cima da tua cabeça!',
    's.site.2': 'Usa a tua proteção contra quedas.',
    's.site.3': 'Primeiro faço uma verificação rápida de riscos (LMRA).',
    'c.site.q': 'Podes ajudar um momento no telhado?',
    'c.site.a': 'Sim, mas primeiro a minha proteção contra quedas.',
    'u.factory': 'Na fábrica',
    'l.line': 'A linha e as máquinas',
    'w.lopendeband': 'o tapete rolante, a linha de produção',
    'w.machine': 'a máquina',
    'w.storing': 'a avaria',
    'w.noodstop': 'a paragem de emergência',
    'w.inpakken': 'embalar',
    'w.productie': 'a produção',
    's.line.1': 'A linha parou.',
    's.line.2': 'Há uma avaria.',
    's.line.3': 'Eu embalo os produtos.',
    'c.line.q': 'Como está a correr na linha?',
    'c.line.a': 'Bem, mas a máquina está muito lenta.',
    'l.quality': 'Qualidade',
    'w.kwaliteit': 'a qualidade',
    'w.product': 'o produto',
    'w.afkeuren': 'rejeitar',
    'w.beschadigd': 'danificado',
    'w.etiket': 'a etiqueta',
    'w.lijst': 'a lista',
    's.quality.1': 'Este produto está danificado.',
    's.quality.2': 'A etiqueta não está certa.',
    's.quality.3': 'Tenho de rejeitar isto?',
    'c.quality.q': 'Porque é que isto está à parte?',
    'c.quality.a': 'A etiqueta está torta.',
    'u.care': 'Na área dos cuidados', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.client': 'O cliente e os cuidados diários',
    'w.client': 'o utente (a pessoa de quem cuidas)', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.wassen': 'lavar',
    'w.aankleden': 'vestir(-se)',
    'w.eten': 'a comida',
    'w.rolstoel': 'a cadeira de rodas',
    'w.verpleegkundige': 'o enfermeiro / a enfermeira',
    's.client.1': 'Dormiu bem?',
    's.client.2': 'Eu dou-lhe uma ajuda para se vestir.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.client.3': 'Quer comer mais alguma coisa?',
    'c.client.q': 'Pode ajudar-me com o meu casaco?',
    'c.client.a': 'Claro, eu ajudo.',
    'l.privacy': 'Privacidade e segurança nos cuidados',
    'w.privacy': 'a privacidade',
    'w.hygiene': 'a higiene',
    'w.doorgeven': 'passar (uma informação)',
    'w.geheim': 'secreto',
    'w.toestemming': 'a autorização',
    'w.gevallen': 'caído',
    's.privacy.1': 'A senhora caiu.',
    's.privacy.2': 'Vou passar a informação à enfermeira.',
    's.privacy.3': 'Em casa não falo dos clientes.',
    'c.privacy.q': 'Podes dar os comprimidos ao senhor Jansen?',
    'c.privacy.a': 'Não, não posso. Vou chamar a enfermeira.',
    'u.horeca': 'Na hotelaria e restauração',
    'l.kitchen': 'Na cozinha',
    'w.keuken': 'a cozinha',
    'w.snijden': 'cortar',
    'w.pan': 'a panela, a frigideira',
    'w.koelcel': 'a câmara frigorífica',
    'w.allergie': 'a alergia',
    'w.datum': 'a data',
    's.kitchen.1': 'Põe a carne na câmara frigorífica.',
    's.kitchen.2': 'Corta as cebolas aos bocadinhos.',
    's.kitchen.3': 'Isto tem frutos secos?',
    'c.kitchen.q': 'Um cliente tem alergia a frutos secos.',
    'c.kitchen.a': 'Vou perguntar ao chefe.',
    'l.service': 'Servir os clientes',
    'w.gast': 'o cliente (num restaurante ou hotel)',
    'w.bestelling': 'o pedido',
    'w.rekening': 'a conta',
    'w.menu': 'a ementa',
    'w.afruimen': 'levantar (a mesa)',
    'w.fooi': 'a gorjeta',
    's.service.1': 'O que deseja beber?',
    's.service.2': 'Posso anotar o pedido?',
    's.service.3': 'Estou a levantar a mesa.',
    'c.service.q': 'Pode trazer a conta?',
    'c.service.a': 'Claro, já vou.',
    'u.clean': 'Limpeza',
    'l.cleaning': 'Materiais de limpeza',
    'w.dweil': 'a esfregona',
    'w.emmer': 'o balde',
    'w.schoonmaakmiddel': 'o produto de limpeza',
    'w.stofzuiger': 'o aspirador',
    'w.stoffen': 'limpar o pó',
    'w.prullenbak': 'o caixote do lixo',
    's.cleaning.1': 'Onde está o balde?',
    's.cleaning.2': 'Vou aspirar o corredor.',
    's.cleaning.3': 'Esvazia o caixote do lixo.',
    'c.cleaning.q': 'Já acabaste as casas de banho?',
    'c.cleaning.a': 'Quase, faltam duas.',
    'l.cleansafe': 'Limpar em segurança',
    'w.glad': 'escorregadio',
    'w.bordje': 'a placa (de aviso)',
    'w.mengen': 'misturar',
    'w.damp': 'os vapores',
    'w.luchten': 'arejar',
    'w.spoelen': 'enxaguar',
    's.cleansafe.1': 'Cuidado, escorrega!',
    's.cleansafe.2': 'Põe a placa no chão.',
    's.cleansafe.3': 'Nunca mistures produtos de limpeza.',
    'c.cleansafe.q': 'Posso passar por aqui?',
    'c.cleansafe.a': 'Cuidado, o chão ainda está escorregadio.',
    'c.cv': 'Um CV curto', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Aqui, um CV é curto: 1 ou 2 páginas. Escreve os teus contactos, a experiência de trabalho, a formação, as línguas e as competências. Não é preciso fotografia. Não tens de escrever a tua religião, a idade ou o estado civil. Diz a verdade sobre o que sabes fazer. Pede a alguém para verificar o teu neerlandês.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'Podes ler o meu CV? O meu neerlandês está certo?',
    'c.cv.s': 'Trabalhaste 3 anos numa fábrica no teu país, mas não tens diploma. O que pões no teu CV?',
    'c.cv.o1': 'Escreves o trabalho e o que fazias lá, com honestidade.',
    'c.cv.o2': 'Não escreves nada, porque não tens diploma.',
    'c.cv.o3': 'Escreves que tens um diploma, para pareceres melhor.',
    'c.cv.w': 'A experiência de trabalho conta, também a do estrangeiro. Ser honesto é importante: os empregadores podem verificar.',
    'c.interview': 'A entrevista de emprego',
    'c.interview.b': 'Chega a horas: 5 a 10 minutos antes. Cumprimenta com educação e olha para a pessoa. Conta em poucas palavras o que sabes fazer. Fazeres tu também perguntas é normal e positivo, por exemplo sobre o horário, o trabalho ou a formação. No fim podes perguntar quando vais ter notícias. Não faz mal dizer que ainda estás a aprender neerlandês. Um empregador não pode perguntar pela tua religião, por uma gravidez ou pela tua saúde. Não tens de responder: podes dizer com educação que preferes não responder.',
    'c.interview.p': 'Também posso perguntar uma coisa? Quantas horas por semana é o trabalho?',
    'c.interview.s': 'No fim da entrevista, o empregador pergunta: "Heb je nog vragen?" O que fazes?',
    'c.interview.o1': 'Fazes uma pergunta sobre o horário ou a formação.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Dizes que não, porque fazer perguntas não é educado.',
    'c.interview.o3': 'Falas mais de ti, para mostrar que trabalhas bem.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'As perguntas mostram que tens interesse no emprego. Aqui, os empregadores costumam esperar perguntas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Pede o teu contrato em papel',
    'c.findwork.b': 'Pede sempre um contrato escrito e uma cópia para ti. Lê-o antes de assinar, ou pede ajuda a alguém em quem confias. Uma agência de trabalho temporário (uitzendbureau) não te pode pedir dinheiro para te arranjar trabalho. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.findwork.p': 'Posso ler primeiro o contrato?',
    'c.findwork.s': 'Um empregador novo diz: "Assina já aqui. Podes ler mais tarde." O que fazes?',
    'c.findwork.o1': 'Pedes tempo para o ler, ou uma cópia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Assinas depressa, para não perderes o emprego.',
    'c.findwork.o3': 'Assinas, e depois pedes uma cópia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'O teu contrato diz quanto ganhas e quais são os teus direitos. Um bom empregador dá-te tempo para o ler. Podes perguntar tudo o que não percebes.',
    'c.contract': 'Período experimental e trabalho à chamada',
    'c.contract.b': 'Um período experimental (proeftijd) tem de estar por escrito. Não é permitido num contrato de 6 meses ou menos. Num contrato mais longo, mas de menos de 2 anos, é no máximo 1 mês. Num contrato de 2 anos ou mais, ou num contrato efetivo, é no máximo 2 meses. És trabalhador à chamada (oproepkracht)? Normalmente, o teu empregador tem de te chamar pelo menos 4 dias antes. Se for mais tarde, não tens de ir. Uma cao pode encurtar estes 4 dias, mas nunca para menos de 1 dia. Se cancelarem o teu trabalho depois disso, recebes na mesma. Se te chamarem para menos de 3 horas de trabalho, normalmente recebes 3 horas. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': 'O período experimental está no meu contrato?',
    'c.contract.s': 'O teu contrato é de 3 meses. Diz: "Proeftijd: 1 maand". O que fazes?',
    'c.contract.o1': 'Perguntas: este período experimental não conta.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Nada. Todos os contratos têm período experimental.',
    'c.contract.o3': 'Assinas e nunca perguntas, porque o patrão é que sabe.',
    'c.contract.w': 'Um período experimental num contrato de 6 meses ou menos não conta. Perguntar com calma é normal. Se a resposta não for clara, pede conselho ao sindicato ou ao Juridisch Loket.',
    'c.agency': 'A tua agência é o teu empregador',
    'c.agency.b': 'Se trabalhas através de uma agência de trabalho temporário (uitzendbureau), o teu empregador é a agência, não a empresa onde trabalhas. O teu contrato e o teu salário vêm da agência, e há uma cao para trabalhadores temporários (uitzend-cao). Tens direito ao mesmo salário que os trabalhadores da empresa que fazem o mesmo trabalho. Também recebes subsídio de férias (vakantiegeld) e acumulas dias de férias. Faz a tua própria lista das horas que trabalhaste e confirma-as no recibo de vencimento. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.agency.x': 'Um empregador de outro país enviou-te para cá por algum tempo? Então trabalhas aqui em destacamento (gedetacheerd). Pede ao teu empregador o documento A1: mostra onde tens seguro. Aqui recebes na mesma pelo menos o salário mínimo neerlandês.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'O meu recibo de vencimento tem horas a menos.',
    'c.agency.s': 'O teu recibo de vencimento diz 32 horas, mas trabalhaste 38. O que fazes?',
    'c.agency.o1': 'Mostras a tua lista de horas à agência e pedes que corrijam.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Não dizes nada, porque são só 6 horas.',
    'c.agency.o3': 'Pedes ao chefe da empresa onde trabalhas que te pague as 6 horas.',
    'c.agency.w': 'Quem te paga é a agência, por isso é a agência que tem de corrigir o erro. A tua própria lista de datas e horas ajuda. Perguntar é um direito teu.',
    'c.bsn': 'O teu BSN: guarda-o bem',
    'c.bsn.b': 'Recebes um BSN (burgerservicenummer) quando te inscreves no município (gemeente). Só cá estás pouco tempo? Então inscreves-te num balcão RNI. Precisas do teu BSN para trabalhar, para os impostos, para o seguro de saúde e para uma conta bancária. O teu empregador precisa do teu documento de identificação e do teu BSN. Não dês o teu BSN nem uma cópia do teu documento a qualquer pessoa. Pergunta primeiro porque precisam dele. Vais mudar de casa? Regista a nova morada na gemeente no prazo de 5 dias. O DigiD é o teu acesso aos sites do Estado: nunca o dês a outra pessoa. Vives ou trabalhas cá? Então normalmente tens de ter um seguro de saúde neerlandês (zorgverzekering). Trata disso depressa. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.bsn.p': 'Porque precisa do meu BSN?',
    'c.bsn.s': 'Um desconhecido oferece-te um trabalho no WhatsApp. Pede uma foto do teu passaporte e o teu acesso ao DigiD. O que fazes?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Nunca dás o acesso ao DigiD. Verificas quem ele é.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Envias tudo depressa para ficares com o trabalho.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o3': 'Envias só a foto do passaporte.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Com o teu DigiD ou uma cópia do teu documento, outras pessoas podem usar o teu nome, por exemplo para empréstimos ou subsídios. Um empregador a sério precisa do teu documento e do BSN, mas nunca do teu acesso ao DigiD.',
    'c.housing': 'Casa através do empregador',
    'c.housing.b': 'O teu empregador ou a tua agência arranja-te casa? Então o contrato de arrendamento tem de estar separado do contrato de trabalho. Pede um contrato de arrendamento por escrito e um comprovativo do que pagas. A renda só pode ser descontada do teu salário se concordaste por escrito, e dentro dos limites da lei: confirma no recibo de vencimento. Uma caução (borg) é no máximo 2 meses de renda base. Recebes a caução de volta quando sais, menos os danos reais. Regista a tua morada na gemeente. Casa sem segurança, ameaças ou custos injustos? Comunica à gemeente (meldpunt) e pede conselho grátis ao Juridisch Loket ou a um serviço de apoio à habitação. Para um problema com o valor da renda ou os custos de serviços, existe a Huurcommissie. O teu trabalho acaba? Pede conselho antes de saíres de casa. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.housing.p': 'Pode dar-me um comprovativo de que paguei?',
    'c.housing.s': 'O teu trabalho acaba. A agência diz: "Tens de sair da casa amanhã." O que fazes?',
    'c.housing.o1': 'Primeiro pedes conselho ao Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Sais logo e esqueces a caução.',
    'c.housing.o3': 'Ficas, e deixas de responder à agência.',
    'c.housing.w': 'O teu contrato de arrendamento tem as suas próprias regras, separadas do teu trabalho. Um conselho grátis ajuda-te a conhecer os teus direitos, por exemplo sobre quando tens de sair e sobre a caução.',
    'c.payslip': 'Verifica o teu recibo de vencimento',
    'c.payslip.b': 'Bruto é o teu salário antes dos impostos. Netto (líquido) é o que recebes na tua conta bancária: o bruto menos os impostos e as contribuições (loonheffing). O teu empregador tem de te dar um recibo de vencimento (loonstrook). Verifica as horas e o salário em cada recibo, e aponta as horas que trabalhas. Tens dois empregos? Usa a dedução fiscal (loonheffingskorting) só num empregador. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.payslip.p': 'Trabalhei mais horas. Podes verificar?',
    'c.payslip.s': 'O teu recibo de vencimento tem menos horas do que as que trabalhaste. O que fazes?',
    'c.payslip.o1': 'Mostras as tuas notas e pedes ao teu chefe que verifique.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Não dizes nada, porque não queres problemas.',
    'c.payslip.o3': 'Esperas um mês: no próximo recibo de vencimento já vai estar certo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Há erros nos recibos de vencimento. Perguntar é normal e é um direito teu. As tuas notas de datas e horas ajudam muito.',
    'c.extra': 'Subsídio de férias e salário mínimo',
    'c.extra.b': 'Recebes subsídio de férias (vakantiegeld): pelo menos 8% do teu salário bruto. A maioria dos empregadores paga-o uma vez por ano, em maio ou junho. O teu salário nunca pode ser mais baixo do que o salário mínimo legal (minimumloon); para trabalhadores com menos de 21 anos é mais baixo. O valor muda todos os anos: vê em rijksoverheid.nl. Uma cao muitas vezes dá um pagamento extra por horas extra ou trabalho noturno. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.extra.p': 'Quando recebo o meu subsídio de férias?',
    'c.extra.s': 'Um colega diz: "Em maio recebes dinheiro extra do patrão." O que é?',
    'c.extra.o1': 'O subsídio de férias: pelo menos 8% do teu salário bruto.',
    'c.extra.o2': 'Um presente, só para os melhores trabalhadores.',
    'c.extra.o3': 'O 13.º mês: um salário de um mês a mais, para todos.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'O subsídio de férias é um direito teu, não é um presente. Acumulas com cada hora que trabalhas. Se saíres do emprego mais cedo, recebes com o último salário.',
    'c.phone': 'O teu telemóvel no trabalho',
    'c.phone.b': 'Muitos locais de trabalho não permitem telemóveis durante o trabalho, sobretudo perto de máquinas e empilhadores, ou na produção de alimentos. Pode ser perigoso ou pouco higiénico. Usa o telemóvel na pausa. Estás à espera de uma chamada urgente da família? Avisa primeiro o teu chefe. Não tires fotografias nem faças vídeos no trabalho sem autorização: pensa na privacidade dos colegas e nos segredos da empresa. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.phone.p': 'O meu filho está doente. O meu telemóvel pode ficar ligado?',
    'c.phone.s': 'A tua mãe está no hospital e pode ligar hoje. Os telemóveis não são permitidos no local de trabalho. O que fazes?',
    'c.phone.o1': 'Avisas o teu chefe e perguntas como te podem contactar.',
    'c.phone.o2': 'Ficas com o telemóvel no bolso e atendes às escondidas junto à máquina.',
    'c.phone.o3': 'Ficas em casa sem dizer a ninguém porquê.',
    'c.phone.w': 'Os chefes costumam compreender uma emergência familiar. Quando sabem, podem encontrar uma solução segura, por exemplo uma hora fixa para veres o telemóvel.',
    'c.smoking': 'Fumar só lá fora',
    'c.smoking.b': 'Nos Países Baixos, fumar dentro de um local de trabalho é proibido por lei. Também vale para os cigarros eletrónicos. Desde 2022, as salas de fumo dentro das empresas já não são permitidas. Fuma só lá fora, no sítio que o teu empregador permite, e normalmente só na pausa. Pausas extra para fumar não são um direito: combina-as com o teu chefe. Nunca fumes perto de coisas que ardem facilmente, como combustível ou caixas num armazém. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.smoking.p': 'Posso fumar lá fora na minha pausa?',
    'c.smoking.s': 'Está frio e a chover. Um colega diz: "Fuma no armazém, ninguém vê." O que fazes?',
    'c.smoking.o1': 'Dizes que não, e fumas lá fora, na tua pausa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Fumas depressa no armazém, só desta vez.',
    'c.smoking.o3': 'Usas o cigarro eletrónico lá dentro, porque isso é permitido.',
    'c.smoking.w': 'Fumar lá dentro é contra a lei e pode causar um incêndio. O cigarro eletrónico lá dentro também não é permitido. Cumprir a regra mantém toda a gente em segurança.',
    'c.clock': 'Pica tu o ponto',
    'c.clock.b': 'Pica tu o ponto à entrada e à saída, no momento em que começas e acabas mesmo de trabalhar. Nunca piques o ponto por um colega, e nunca deixes outra pessoa usar o teu cartão. Isso é fraude e pode levar ao despedimento. Vais chegar tarde? Liga antes de o teu turno começar. Confirma que as horas picadas batem certo com o recibo de vencimento. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.clock.p': 'Esqueci-me de picar o ponto à saída. Podes corrigir?',
    'c.clock.s': 'Um colega dá-te o cartão dele: "Pica o ponto por mim, chego 20 minutos atrasado." O que fazes?',
    'c.clock.o1': 'Dizes que não, e dizes-lhe para ligar ao chefe.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Fazes só desta vez, porque ele é teu amigo.',
    'c.clock.o3': 'Picas o ponto por ele e dizes ao chefe mais tarde.',
    'c.clock.w': 'Picar o ponto por outra pessoa é fraude, para os dois. Dizer que não protege o teu colega e o teu próprio emprego.',
    'c.hygiene': 'Cabeça limpa, mãos limpas',
    'c.hygiene.b': 'O álcool e as drogas no trabalho, ou vir trabalhar depois de os usar, são proibidos em quase todas as empresas. É muito perigoso perto de máquinas e empilhadores, e pode levar ao despedimento. Um medicamento dá-te sono ou tonturas? Avisa o teu chefe, para fazeres um trabalho seguro. Não tens de dizer que medicamento é. Na produção de alimentos, as regras de higiene são rigorosas: lava as mãos, usa roupa de trabalho limpa, rede no cabelo se for preciso, e nada de joias. Vómitos ou diarreia? Avisa antes de começar. Mantém o teu posto de trabalho arrumado. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.hygiene.p': 'Estou a tomar um medicamento. Dá-me sono.',
    'c.hygiene.s': 'O teu médico dá-te um medicamento que te dá sono. Amanhã tens de conduzir um empilhador. O que fazes?',
    'c.hygiene.o1': 'Avisas o teu chefe antes de começar.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Não dizes nada e conduzes muito devagar.',
    'c.hygiene.o3': 'Deixas de tomar o medicamento sem perguntar ao teu médico.',
    'c.hygiene.w': 'O teu chefe não precisa de saber que medicamento é, só que agora não podes conduzir nem trabalhar com máquinas. Isso mantém-te a ti e aos teus colegas em segurança.',
    'c.smalltalk': 'Conversa na pausa',
    'c.smalltalk.b': 'Conversas curtas na pausa são normais. Ajudam-te a sentir que fazes parte da equipa. Podes juntar-te à mesa do café ou do almoço. Temas fáceis são o fim de semana, o tempo, o desporto e as férias. Perguntas sobre o salário, a religião ou a vida privada de alguém são muitas vezes pessoais demais no início. No dia de anos, as pessoas costumam trazer alguma coisa para a equipa (trakteren), como um bolo. É o aniversário de um colega? Diz "Gefeliciteerd!".',
    'c.smalltalk.p': 'Parabéns pelo teu aniversário!',
    'c.smalltalk.s': 'Na pausa, os teus colegas estão sentados juntos a uma mesa. Ainda não os conheces bem. O que fazes?',
    'c.smalltalk.o1': 'Perguntas "Mag ik bij jullie zitten?" e juntas-te com uma conversa curta.',
    'c.smalltalk.o2': { m: 'Comes sozinho lá fora todos os dias, para não os incomodares.', f: 'Comes sozinha lá fora todos os dias, para não os incomodares.', x: 'Comes sozinho/a lá fora todos os dias, para não os incomodares.' },
    'c.smalltalk.o3': 'Perguntas a cada colega quanto ganha.',
    'c.smalltalk.w': 'Juntares-te à mesa é bem visto e ajuda-te a conhecer a equipa. Uma pergunta simples como "Hoe was je weekend?" é um bom começo.',
    'c.mistakes': 'Os erros são normais',
    'c.mistakes.b': 'Toda a gente comete erros no trabalho. Diz logo, para se poder corrigir: "Sorry, ik heb een fout gemaakt." Esconder um erro é visto como muito pior do que o próprio erro. O feedback é sobre o trabalho, não sobre ti como pessoa. Recebeste um elogio? Agradece, simplesmente. Não sabes bem o que fazer melhor? Pergunta: "Kun je het uitleggen?"',
    'c.mistakes.p': 'Desculpa, cometi um erro. Como posso resolver isto?',
    'c.mistakes.s': 'Puseste 20 caixas na palete errada. Ainda ninguém viu. O que fazes?',
    'c.mistakes.o1': 'Dizes ao teu chefe e ajudas a corrigir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Não dizes nada e esperas que ninguém repare.',
    'c.mistakes.o3': 'Dizes que foi um colega.',
    'c.mistakes.w': 'Um erro contado cedo é fácil de corrigir. Ser honesto cria confiança, e isso conta mais do que nunca errar.',
    'c.respect': 'Respeito por todos',
    'c.respect.b': 'No trabalho, todos são iguais e todos são tratados com respeito, seja qual for o seu género, origem, religião ou orientação sexual. Tu decides sobre o contacto físico. Um aperto de mão é comum. Mas também podes cumprimentar de outra forma educada, como um aceno com a cabeça e um sorriso. Depois explica em poucas palavras. Piadas sobre a origem ou a religião de alguém, ameaças, bullying (pesten) e comportamento sexual indesejado não são aceites. Podes comunicar isso ao teu chefe, ou a uma pessoa de confiança (vertrouwenspersoon) se a tua empresa tiver uma.',
    'c.respect.p': 'Prefiro não dar a mão, mas cumprimento-te com gosto.',
    'c.respect.s': 'Um colega faz muitas vezes piadas sobre a tua religião. Pediste-lhe para parar, mas ele continua. O que fazes?',
    'c.respect.o1': 'Dizes ao teu chefe ou à vertrouwenspersoon.',
    'c.respect.o2': 'Ris-te com ele, para não haver problemas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Fazes também piadas sobre a origem dele.',
    'c.respect.w': 'Piadas assim não são aceites no trabalho. Comunicar é normal: a empresa tem de manter o local de trabalho seguro para todos.',
    'c.health': 'Pausas e horário de trabalho',
    'c.health.b': 'A lei protege a tua saúde. Trabalhas mais de 5,5 horas? Então tens pelo menos 30 minutos de pausa (pode ser 2 vezes 15 minutos). Mais de 10 horas? Então pelo menos 45 minutos. Uma cao pode ter regras de pausas um pouco diferentes. Podes trabalhar no máximo 12 horas num turno e 60 horas numa semana. Tens menos de 18 anos? Então o teu limite de horas é mais baixo. O teu empregador tem de te dar equipamento de proteção, como sapatos de segurança ou luvas, de graça. Trabalho perigoso ou salário baixo demais? Podes denunciar à Nederlandse Arbeidsinspectie, também sem dar o teu nome. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.p': 'Ainda não fiz pausa.',
    'c.health.s': 'Trabalhaste 6 horas sem pausa. O teu chefe pede-te para continuares. O que fazes?',
    'c.health.o1': 'Dizes que agora precisas da tua pausa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Continuas, e mais tarde fazes uma pausa mais longa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Sais do trabalho e vais para casa sem dizer nada.',
    'c.health.w': 'Quando trabalhas mais de 5,5 horas, a pausa é lei, não é um favor. O descanso também te ajuda a trabalhar em segurança.',
    'c.rights': 'Discriminação e despedimento',
    'c.rights.b': 'A discriminação no trabalho é proibida, por exemplo por causa da tua origem, religião ou género. O teu empregador não te pode simplesmente despedir: normalmente precisa de autorização do UWV ou de um juiz, ou do teu acordo. (No período experimental ou no fim de um contrato temporário, há outras regras.) Não assines um papel sobre o teu despedimento que não percebas. Assinaste um acordo para acabar o teu trabalho (vaststellingsovereenkomst)? Então normalmente ainda o podes anular por escrito no prazo de 14 dias. Pede primeiro ajuda. Vai ao sindicato (por exemplo a FNV), a um serviço contra a discriminação ou ao Juridisch Loket. O Juridisch Loket dá aconselhamento jurídico grátis. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.rights.p': 'Primeiro quero pedir conselho.',
    'c.rights.s': 'O teu patrão dá-te um papel: "Assina hoje, assim sais por acordo." Não percebes bem. O que fazes?',
    'c.rights.o1': 'Ainda não assinas. Primeiro pedes conselho.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Assinas, porque o patrão diz que está tudo bem.',
    'c.rights.o3': 'Guardas o papel e nunca falas disso.',
    'c.rights.w': 'Há algo errado no papel? Então podes perder direitos, por exemplo ao subsídio de desemprego (WW). Pedir tempo para pedir conselho é normal e permitido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': 'Em neerlandês, o contrário de "moeten" é "niet hoeven". "Je moet tekenen" quer dizer: não tens escolha. "Je hoeft niet te tekenen" quer dizer: podes escolher. "Je mag niet tekenen" quer dizer: é proibido. Atenção: em inglês, "must not" quer dizer "mag niet". Em português, "não tens de" quer dizer "hoeft niet". Não tens a certeza? Pergunta.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': 'Tenho de, ou tenho escolha?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': 'O teu chefe de equipa diz: "Je hoeft zaterdag niet te komen." O que quer ele dizer?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': 'Não tens de vir no sábado. Podes escolher.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': 'Não podes vir no sábado: é proibido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': 'Tens de vir no sábado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': '"Niet hoeven" quer dizer que não é obrigatório: podes escolher. "Niet mogen" quereria dizer que é proibido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'Férias e licença de emergência',
    'c.leave.b': 'Por lei tens dias de férias pagos: pelo menos 4 vezes os dias que trabalhas por semana. A tempo inteiro, 5 dias por semana? Então pelo menos 20 dias por ano. Uma cao pode dar mais. Pede as férias a tempo, e por escrito. Uma emergência repentina, como um acidente ou uma doença na tua família? Então podes ter uma licença curta paga (calamiteitenverlof). Avisa logo o teu empregador. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.leave.p': 'Gostava de pedir férias para julho.',
    'c.leave.s': 'No verão queres visitar a tua família no estrangeiro durante três semanas. O que fazes?',
    'c.leave.o1': 'Pedes as férias ao teu empregador com antecedência, por escrito.',
    'c.leave.o2': 'Vais simplesmente, e dizes ao patrão quando voltares.',
    'c.leave.o3': 'Pedes a um colega que diga ao patrão na véspera.',
    'c.leave.w': 'Normalmente, o teu empregador tem de dizer que sim. Só pode dizer que não por um motivo muito importante, e então por escrito dentro de 2 semanas. Pedir cedo dá a melhor hipótese de um sim.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': 'Os teus direitos quando estás doente',
    'c.illness.b': 'Quando estás doente, o teu empregador tem de pagar pelo menos 70% do teu salário, até 2 anos. Uma cao muitas vezes dá mais. Pode haver até 2 dias de espera (wachtdagen) sem pagamento, mas só se o teu contrato ou a cao o disserem. O teu patrão não pode perguntar que doença tens. Falas da tua saúde e do teu trabalho com o médico da empresa (bedrijfsarts). Liga ao teu empregador quando estiveres melhor (betermelden). No primeiro ano recebes pelo menos o salário mínimo. Um contrato a termo acaba na data de fim, mesmo quando estás doente. Trabalhas através de uma agência? Se o teu contrato tiver uma cláusula de agência (uitzendbeding), pode acabar quando ficas doente. Então pergunta ao UWV sobre a Ziektewet, ou pergunta a um sindicato. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.illness.x': 'Estás de baixa e queres ir ao teu país? Pergunta primeiro ao teu empregador ou à agência. Sem autorização, o teu salário pode parar. Dá a tua morada lá e atende o telefone.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'Já estou melhor. Amanhã venho trabalhar.',
    'c.illness.s': 'Estás doente há uma semana. O teu empregador manda-te ao médico da empresa. O que fazes?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Vais, e falas sobre a tua saúde e o teu trabalho.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'Não vais: tens o teu próprio médico.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': 'Voltas ao trabalho enquanto ainda estás doente.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'O médico da empresa ajuda-te a voltar ao trabalho de forma saudável. O médico não conta os teus dados médicos ao patrão, só diz que trabalho podes fazer.',
    'c.warning': 'Sinais de exploração',
    'c.warning.b': 'Atenção a estes sinais. O teu empregador fica com o teu passaporte ou documento de identificação. Isso não é permitido: és tu que guardas o teu documento. Um empregador só pode fazer uma cópia. Recebes muito menos do que o combinado, ou não recebes recibo de vencimento. Tens de pagar uma grande dívida ao empregador ou à agência. Tens de trabalhar horas demais, sem escolha. Alguém te ameaça, ou usa a tua casa para te pressionar. Isto não é normal e não é permitido. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.warning.p': 'Quero o meu passaporte de volta.',
    'c.warning.s': 'No teu primeiro dia, a agência diz: "Ficamos com o teu passaporte, por segurança." O que fazes?',
    'c.warning.o1': 'Ficas tu com ele. Podem fazer uma cópia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Dás o passaporte, porque a agência conhece as regras.',
    'c.warning.o3': 'Dás o passaporte, mas primeiro tiras-lhe uma fotografia.',
    'c.warning.w': 'O teu passaporte é teu. Ficar com ele é uma forma de controlar os trabalhadores. Um empregador só precisa de uma cópia para os arquivos.',
    'c.gethelp': 'Onde pedir ajuda',
    'c.gethelp.b': 'Vês sinais de exploração, contigo ou com outra pessoa? Pede ajuda. Podes denunciar à Nederlandse Arbeidsinspectie, também de forma anónima, ou à polícia. Meld Misdaad Anoniem: 0800-7000. Aconselhamento jurídico grátis: o Juridisch Loket. Em perigo? Liga para o 112. Todas as pessoas que trabalham nos Países Baixos podem ter ajuda, também os migrantes. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.gethelp.p': { m: 'Preciso de ajuda. Estou a ser explorado.', f: 'Preciso de ajuda. Estou a ser explorada.', x: 'Preciso de ajuda. Estão a explorar-me.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.s': 'Um amigo trabalha 14 horas por dia e quase não recebe nada. Tem medo do patrão. O que podes fazer?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Ajudá-lo a contactar a Arbeidsinspectie ou o Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Dizer-lhe que isto é normal para trabalhadores novos.',
    'c.gethelp.o3': 'Dizer-lhe para esperar até o contrato acabar e depois sair.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Há ajuda para todas as pessoas que trabalham nos Países Baixos. Uma denúncia também pode ser feita sem nomes.',
    'c.callin': 'Ligar ao teu chefe',
    'c.callin.b': 'Quando ligas ao teu chefe, diz o teu nome, a razão e quando achas que voltas. Doente? Só tens de dizer que estás doente, não que doença tens. Liga: não mandes só uma mensagem, a não ser que a tua empresa diga que uma mensagem chega. Ninguém atende? Deixa uma mensagem de voz e tenta outra vez. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.callin.p': 'Olá, fala o Ali. Hoje não posso ir.',
    'c.callin.s': 'O teu filho está doente e não podes ir trabalhar. A tua empresa quer que ligues. O que fazes?',
    'c.callin.o1': 'Ligas ao teu chefe antes do turno.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Mandas uma mensagem curta quando o turno começa.',
    'c.callin.o3': 'Pedes ao teu vizinho para ligar por ti.',
    'c.callin.w': 'Uma chamada é clara e rápida, e o teu chefe pode fazer perguntas. Dizer quando achas que voltas ajuda-o a organizar o trabalho. Diz também o teu nome e a razão.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Mensagens para o trabalho: curtas e educadas',
    'c.texting.b': 'As mensagens para o trabalho devem ser curtas e educadas. Diz quem és e o que se passa, e acaba com uma saudação. Por exemplo: "Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali". Vê muitas vezes o teu horário (rooster) na app. Responde a tempo aos pedidos de turnos. Para trocar um turno, o teu chefe ou quem faz o horário tem de concordar primeiro, por isso pergunta: "Mag ik mijn dienst ruilen?" As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.texting.p': 'Olá Mark, chego 10 minutos tarde. Desculpa! Cumprimentos, Ali',
    'c.texting.s': 'Vais chegar 10 minutos tarde. Que mensagem para o teu chefe é a melhor?',
    'c.texting.o1': '"Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali"',
    'c.texting.o2': '"Sorry, ik ben er zo!" (sem o teu nome, sem a hora).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Uma mensagem de voz de três minutos sobre o trânsito.',
    'c.texting.w': 'Uma boa mensagem diz quem és e o que se passa, em poucas palavras. Assim o teu chefe fica logo a saber.',
    'c.certs': 'Os certificados ajudam-te',
    'c.certs.b': 'Na construção, na indústria e no trabalho temporário precisas muitas vezes de um certificado VCA (segurança). Para conduzir um empilhador normalmente precisas de um certificado de empilhador (heftruckcertificaat). Pergunta ao teu empregador se paga o curso e o exame.',
    'c.certs.p': 'Posso fazer aqui um curso VCA?',
    'c.certs.s': 'Uma oferta de emprego pede um certificado VCA. Ainda não o tens. O que fazes?',
    'c.certs.o1': 'Pedes ao empregador ou à agência para te ajudar a tirá-lo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'Não te candidatas, porque nunca vais ficar com o emprego.',
    'c.certs.o3': 'Dizes que o tens, e esperas que ninguém verifique.',
    'c.certs.w': 'Muitos empregadores e agências ajudam com o VCA. Perguntar mostra que queres aprender.',
    'c.diploma': 'O teu diploma conta',
    'c.diploma.b': 'Tens um diploma de outro país? Podes pedir a avaliação dele no IDW (Internationale Diplomawaardering). Assim os empregadores podem ver quanto vale aqui. Uma formação é obrigatória para o teu trabalho? Então o teu empregador tem de a pagar, e conta como tempo de trabalho. Pergunta ao teu chefe sobre cursos. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.diploma.p': 'Há cursos para mim?',
    'c.diploma.s': 'O teu empregador diz que tens de fazer uma formação de segurança obrigatória no sábado, sem pagamento. O que é verdade?',
    'c.diploma.o1': 'O empregador paga, e é tempo de trabalho.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'A formação é sempre no teu tempo livre.',
    'c.diploma.o3': 'Tens de ser tu a pagar a formação.',
    'c.diploma.w': 'Se uma formação é obrigatória para o teu trabalho, o empregador paga e conta como tempo de trabalho. Se não estiver claro, pede conselho.',
    'c.doctor': 'Médico ou 112?',
    'c.doctor.b': 'Inscreve-te num médico de família (huisarts) perto de casa. Precisas de cuidados urgentes à noite, de madrugada ou ao fim de semana? Liga para o huisartsenpost. Liga para o 112 só numa emergência: perigo de vida, incêndio ou um crime que está a acontecer agora. Os medicamentos compras na farmácia (apotheek).',
    'c.doctor.p': 'Quero inscrever-me no médico de família.',
    'c.doctor.s': 'É sábado à noite. O teu filho tem febre alta, mas está acordado e respira normalmente. O que fazes?',
    'c.doctor.o1': 'Ligas para o huisartsenpost.',
    'c.doctor.o2': 'Ligas para o 112.',
    'c.doctor.o3': 'Esperas até segunda-feira e não fazes nada.',
    'c.doctor.w': 'O huisartsenpost ajuda com cuidados urgentes fora do horário normal. O 112 é para emergências: perigo de vida, incêndio ou um crime que está a acontecer agora.',
    'c.insurance': 'Seguro de saúde',
    'c.insurance.b': 'Quando vives ou trabalhas nos Países Baixos, o seguro de saúde básico normalmente é obrigatório. Pagas um prémio todos os meses. Todos os anos há uma franquia (eigen risico): os primeiros custos pagas tu. O valor muda: confirma com a tua seguradora. As consultas no médico de família (huisarts) não contam para a franquia. Com um rendimento baixo podes receber o subsídio para o seguro de saúde (zorgtoeslag). Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.insurance.p': 'Preciso de um seguro de saúde. Pode ajudar-me?',
    'c.insurance.s': 'Começaste a trabalhar aqui há duas semanas e ainda não tens seguro de saúde. O que fazes?',
    'c.insurance.o1': 'Tratas depressa do seguro de saúde.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Esperas: o seguro do teu país chega.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Usas o cartão do seguro de um amigo.',
    'c.insurance.w': 'Sem seguro, um médico ou um hospital pode custar muito dinheiro, e podes levar uma multa. Tratar disso depressa protege-te. O teu empregador ou a agência pode ajudar-te.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'Não ignores as cartas',
    'c.letters.b': 'Não ignores as cartas do Belastingdienst, da gemeente ou do UWV. Pede a alguém em quem confias para te ajudar a lê-las. A declaração de impostos (aangifte) do ano passado normalmente tem de ser feita antes de 1 de maio. Podes pedir mais tempo. Os subsídios (toeslagen), como o zorgtoeslag e o huurtoeslag, dependem do teu rendimento. Se recebes demais, tens de devolver, por isso mantém os dados do teu rendimento atualizados. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.letters.p': 'Recebi uma carta. Podes ajudar-me?',
    'c.letters.s': 'Recebes uma carta do Belastingdienst. Não a percebes. O que fazes?',
    'c.letters.o1': 'Pedes ajuda a alguém em quem confias.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'Guarda-la numa gaveta e esperas.',
    'c.letters.o3': 'Deita-la fora, porque deve ser publicidade.',
    'c.letters.w': 'As cartas oficiais muitas vezes têm um prazo. Se reagires a tempo, os problemas normalmente são mais fáceis de resolver.',
    'c.scams': 'Cuidado com as burlas',
    'c.scams.b': 'O teu banco nunca pede os teus códigos ou o PIN por telefone, SMS ou e-mail. Não carregues em links de mensagens que não esperavas. Alguém te pressiona para pagares depressa? Para e verifica primeiro. Liga para o teu banco pelo número oficial, por exemplo o número no teu cartão bancário ou no site do banco.',
    'c.scams.p': 'Eu é que ligo de volta para o banco.',
    'c.scams.s': 'Recebes um SMS: "A tua conta bancária vai ser bloqueada. Carrega já neste link." O que fazes?',
    'c.scams.o1': 'Não carregas. Ligas para o teu banco pelo número oficial.',
    'c.scams.o2': 'Carregas depressa, para a tua conta não ser bloqueada.',
    'c.scams.o3': 'Respondes ao SMS e perguntas se é verdade.',
    'c.scams.w': 'Os burlões usam pressão e links falsos. O teu banco nunca pede os teus códigos através de um link ou de uma mensagem.',
    'c.bike': 'Ir de bicicleta para o trabalho',
    'c.bike.b': 'Liga as luzes quando está escuro. Anda na ciclovia e respeita os semáforos e os sinais. Põe sempre o cadeado na bicicleta. É proibido ter o telemóvel na mão enquanto andas de bicicleta.',
    'c.bike.p': 'Onde posso deixar a minha bicicleta?',
    'c.bike.s': 'Está escuro e vais de bicicleta para o teu turno da noite. O teu telemóvel toca. O que fazes?',
    'c.bike.o1': 'Paras num sítio seguro antes de atender.',
    'c.bike.o2': 'Atendes com o telemóvel na mão enquanto pedalas.',
    'c.bike.o3': 'Continuas e olhas depressa para o telemóvel.',
    'c.bike.w': 'O telemóvel na mão enquanto andas de bicicleta é proibido e perigoso. Parar primeiro só demora um momento.',
    'c.transit': 'Autocarro, comboio e custos de viagem',
    'c.transit.b': 'Na maioria dos autocarros e comboios podes pagar com o teu cartão bancário (OVpay). Faz o check-in E o check-out com o mesmo cartão, senão pagas demais. O subsídio de transporte (reiskostenvergoeding) não é um direito por lei: depende do teu empregador ou da cao. Pergunta. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.transit.p': 'Recebo dinheiro pelos meus custos de viagem?',
    'c.transit.s': 'Vais de autocarro para o trabalho todos os dias. Um colega recebe dinheiro para a viagem, tu não. O que fazes?',
    'c.transit.o1': 'Perguntas ao teu chefe quais são as regras na tua empresa ou na cao.',
    'c.transit.o2': 'Não dizes nada, porque provavelmente não é para ti.',
    'c.transit.o3': 'Dizes ao teu chefe: a lei diz que também tens de o receber.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'O subsídio de transporte depende do empregador ou da cao. Perguntar é normal e ajuda-te a conhecer os teus direitos.',
    'c.ww': 'Subsídio de desemprego (WW)',
    'c.ww.b': 'Perdeste o emprego? Pede o WW no UWV o mais depressa possível, no prazo de uma semana a contar do teu primeiro dia sem trabalho. Normalmente tens de ter trabalhado pelo menos 26 das últimas 36 semanas. Se te despedires tu, normalmente não recebes WW. Inscreve-te como pessoa à procura de emprego em werk.nl. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.ww.x': 'Procuras trabalho noutro país da UE? Às vezes podes levar o teu WW contigo. Antes de partires, pede ao UWV o formulário U2. Sem U2, o teu WW para.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Quero pedir o subsídio de desemprego. O que tenho de fazer?',
    'c.ww.s': 'O teu trabalho irrita-te e queres despedir-te hoje. O que é sensato?',
    'c.ww.o1': 'Pedes conselho primeiro, antes de te despedires.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Despedes-te hoje: vais receber WW na mesma.',
    'c.ww.o3': 'Deixas de ir trabalhar sem dizer nada.',
    'c.ww.w': 'Despedires-te pode fazer-te perder o subsídio. Falar primeiro com o teu chefe, o sindicato ou o Juridisch Loket pode ajudar-te a encontrar um caminho melhor.',
    'c.newjob': 'Procurar um novo trabalho',
    'c.newjob.b': 'Antes de saíres, pede uma referência (referentie). Guarda os teus recibos de vencimento e o teu contrato. Atualiza o teu CV. Procura trabalho em agências de trabalho temporário (uitzendbureaus) e em werk.nl. Nunca pagues para ter um emprego. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.newjob.p': 'Posso dar o seu nome como referência?',
    'c.newjob.s': 'Alguém te oferece um emprego, mas primeiro tens de pagar 300 euros "pelo emprego". O que fazes?',
    'c.newjob.o1': 'Não pagas. Procuras uma agência a sério.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Pagas, porque um bom emprego vale a pena.',
    'c.newjob.o3': 'Pagas metade agora e o resto mais tarde.',
    'c.newjob.w': 'Pedir dinheiro por um emprego é um sinal de alarme. Uma agência de trabalho temporário não te pode cobrar por te arranjar trabalho. Também podes procurar trabalho no werk.nl.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'A reunião toolbox',
    'c.tools.b': 'Em muitas obras há regularmente uma reunião curta sobre segurança: a reunião toolbox. Ouves falar dos riscos e das regras novas. Vai, ouve e faz perguntas se não perceberes. Verifica as tuas ferramentas antes de as usares. Uma ferramenta está estragada? Diz ao teu chefe.',
    'c.tools.p': 'Este berbequim está estragado. Há outro?',
    'c.tools.s': 'Há uma reunião toolbox, mas o teu neerlandês ainda não é bom. O que fazes?',
    'c.tools.o1': 'Vais, e depois perguntas a um colega o que te escapou.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'Não vais, porque de qualquer forma não vais perceber.',
    'c.tools.o3': 'Assinas a lista de presenças sem ir.',
    'c.tools.w': 'A informação de segurança é para todos. Uma app de tradução pode ajudar-te a acompanhar a reunião, se lá forem permitidos telemóveis. Perguntar depois a um colega é normal e confirma que percebeste bem.',
    'c.site': 'Para e verifica: LMRA',
    'c.site.b': 'Antes de começares uma tarefa, para um momento e verifica: o que pode correr mal aqui? Isto é a LMRA (análise de riscos de última hora). Usa sempre o capacete, e proteção contra quedas quando trabalhas em altura. Nunca fiques debaixo de uma carga suspensa. O trabalho é mesmo perigoso? Então podes parar, e tens de avisar logo o teu chefe. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.site.p': 'Ainda não começo. Isto não é seguro.',
    'c.site.s': 'Tens de trabalhar num andaime, mas falta um corrimão de proteção. Um colega diz: "Tem só cuidado." O que fazes?',
    'c.site.o1': 'Não começas, e dizes ao teu chefe.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Começas, mas com muito cuidado.',
    'c.site.o3': 'Arranjas tu o corrimão com uma corda.',
    'c.site.w': 'Uma queda de uma altura pode causar ferimentos muito graves. Podes parar um trabalho perigoso, e comunicá-lo protege toda a equipa.',
    'c.line': 'Mãos longe das máquinas a trabalhar',
    'c.line.b': 'Nunca metas a mão numa máquina a trabalhar, nem por um segundo. Numa avaria (storing): carrega na paragem de emergência (noodstop) e chama o teu chefe. A manutenção e as reparações só se fazem com a máquina bloqueada (lock-out), e só por pessoas com formação. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.line.p': 'Há uma avaria. Carreguei na paragem de emergência.',
    'c.line.s': 'Um produto ficou preso na máquina. A máquina ainda está a trabalhar. O que fazes?',
    'c.line.o1': 'Carregas na paragem de emergência e chamas o teu chefe.',
    'c.line.o2': 'Tiras o produto depressa com a mão, antes que se parta.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Deixas estar e esperas que a máquina resolva.',
    'c.line.w': 'As máquinas a trabalhar podem causar acidentes graves num segundo. Parar a máquina é sempre permitido e é sempre melhor.',
    'c.quality': 'Qualidade: diz o que vês',
    'c.quality.b': 'Vês um problema num produto, como um dano ou uma etiqueta errada? Comunica e põe o produto de lado. Não o deixes passar só para a linha continuar. Encontrar um problema cedo poupa muito trabalho e dinheiro. O teu chefe vai ficar contente por teres dito.',
    'c.quality.p': 'Acho que há algum problema com estes produtos.',
    'c.quality.s': 'Vês que muitos produtos têm uma data errada na etiqueta. A linha está com muito trabalho. O que fazes?',
    'c.quality.o1': 'Dizes logo ao teu chefe ou à pessoa da qualidade.',
    'c.quality.o2': 'Deixas passar, porque não é o teu trabalho.',
    'c.quality.o3': 'Deita-los fora sem dizer nada.',
    'c.quality.w': 'Uma etiqueta errada pode obrigar a recolher todos os produtos das lojas. Dizer cedo é o que faz um bom membro da equipa.',
    'c.client': 'Respeito pelo cliente',
    'c.client.b': 'Bate à porta antes de entrares no quarto de um cliente. Diz quem és, explica o que vais fazer e pede autorização. Trata os clientes por "u", a não ser que te peçam para dizer "je". Deixa os clientes fazer o que conseguem fazer sozinhos.',
    'c.client.p': 'Posso entrar? Venho ajudar a lavar-se.',
    'c.client.s': 'Tens de ajudar uma cliente a lavar-se. A porta do quarto dela está fechada. O que fazes?',
    'c.client.o1': 'Bates, esperas, e dizes quem és e porque vens.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Entras depressa, porque tens muito trabalho.',
    'c.client.o3': 'Não fazes a higiene, para não a incomodares.',
    'c.client.w': 'O quarto é a casa do cliente. Bater à porta e explicar mostra respeito e torna os cuidados mais calmos.',
    'c.privacy': 'Privacidade, higiene e medicamentos',
    'c.privacy.b': 'O que vês e ouves sobre os clientes fica no trabalho. Não fales dos clientes fora do trabalho, e nunca publiques fotografias deles. Limpa as mãos antes e depois dos cuidados. Notas uma mudança num cliente, como dor ou uma queda? Diz logo à enfermeira. Nunca dês medicamentos, a não ser que tenhas formação e autorização para isso. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.privacy.p': 'O senhor tem mais dores do que ontem.',
    'c.privacy.s': 'Uma cliente pede-te os comprimidos dela. Não tens formação para dar medicamentos. O que fazes?',
    'c.privacy.o1': 'Dizes com simpatia que vais chamar a enfermeira.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Dás-lhe os comprimidos, porque ela sabe do que precisa.',
    'c.privacy.o3': 'Dizes que não e vais-te embora.',
    'c.privacy.w': 'Um medicamento errado pode ser perigoso. Chamar depressa a pessoa certa ajuda o cliente e mantém todos em segurança.',
    'c.kitchen': 'Segurança alimentar',
    'c.kitchen.b': 'Lava muitas vezes as mãos, também depois da casa de banho e depois de tocares em carne crua. Mantém a comida fria fria e a comida quente quente. Põe uma etiqueta com a data na comida que guardas. Estas regras chamam-se HACCP. As alergias são coisa séria: não sabes bem o que tem um prato? Pergunta sempre ao chefe de cozinha. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.kitchen.p': 'Chefe, este molho tem glúten?',
    'c.kitchen.s': 'Um cliente pergunta se um prato tem frutos secos. Não tens a certeza. O que fazes?',
    'c.kitchen.o1': 'Dizes que vais confirmar, e perguntas ao chefe de cozinha.',
    'c.kitchen.o2': 'Dizes "não", para o cliente ficar contente.',
    'c.kitchen.o3': 'Dizes ao cliente para tirar os frutos secos.',
    'c.kitchen.w': 'Para um cliente com alergia, um pequeno erro pode ser muito perigoso. Confirmar com o chefe de cozinha está sempre certo.',
    'c.service': 'Educação com os clientes',
    'c.service.b': 'Trata os clientes por "u", a não ser que te peçam para dizer "je". Mantém a simpatia e a calma, também quando há muito trabalho. Não sabes responder a uma pergunta? Diz que vais confirmar. Gorjetas (fooi): as regras são diferentes em cada sítio. Pergunta como se dividem as gorjetas onde trabalhas.',
    'c.service.p': 'Um momento, já vou atender.',
    'c.service.s': 'Há muito trabalho. Um cliente chama-te, mas estás a levar pratos para outra mesa. O que fazes?',
    'c.service.o1': 'Olhas para o cliente e dizes: "Een moment, ik kom zo bij u."',
    'c.service.o2': 'Ignoras o cliente até teres tempo.',
    'c.service.o3': 'Pousas os pratos numa mesa livre e vais primeiro ter com o cliente.',
    'c.service.w': 'Um sinal curto mostra ao cliente que o viste. Depois podes acabar a tua tarefa com calma.',
    'c.cleaning': 'Lê o rótulo',
    'c.cleaning.b': 'Todos os produtos de limpeza têm um rótulo. Os pictogramas (pequenos desenhos num losango vermelho) mostram o perigo, por exemplo para a pele, os olhos ou os pulmões. Lê o rótulo, ou pergunta para que serve o produto e como se usa. Usa as luvas que o teu empregador te dá. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.cleaning.p': 'Para que serve este produto?',
    'c.cleaning.s': 'Recebes um produto de limpeza novo. Não consegues ler bem o rótulo. O que fazes?',
    'c.cleaning.o1': 'Perguntas como o usar com segurança.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Usas muito, assim funciona melhor.',
    'c.cleaning.o3': 'Experimentas sem luvas.',
    'c.cleaning.w': 'O produto errado, ou demasiado produto, pode fazer mal à pele, aos olhos ou aos pulmões. Perguntar demora um minuto.',
    'c.cleansafe': 'Nunca mistures produtos',
    'c.cleansafe.b': 'Nunca mistures produtos de limpeza, por exemplo lixívia e um produto para a sanita. Isso pode libertar gases perigosos. Deixa entrar ar fresco. Vais lavar o chão com a esfregona? Põe a placa de chão molhado (Pas op, glad!), para ninguém escorregar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.cleansafe.p': 'Vou pôr a placa. O chão está molhado.',
    'c.cleansafe.s': 'A casa de banho está muito suja. Uma colega diz: "Mistura dois produtos, assim funciona melhor." O que fazes?',
    'c.cleansafe.o1': 'Não os misturas. Usas um produto.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Misturas, mas abres uma janela.',
    'c.cleansafe.o3': 'Misturas depressa e sais da casa de banho.',
    'c.cleansafe.w': 'Misturar produtos pode libertar gases venenosos, mesmo com a janela aberta. Um produto, bem usado, chega.',
    'u.tools': 'Ferramentas inteligentes',
    'l.translate': 'Traduzir com o telemóvel',
    'w.vertaalapp': 'a app de tradução',
    'w.vertalen': 'traduzir',
    'w.camera': 'a câmara',
    'w.briefje': 'o papelinho (bilhete)',
    'w.spreken': 'falar',
    'w.vertaling': 'a tradução',
    's.translate.1': 'Traduzo isto com o meu telemóvel.',
    's.translate.2': 'Posso traduzir isto num instante?',
    's.translate.3': 'Pode falar um momento para o meu telemóvel?',
    'c.translate.q': 'O que diz esse papel?',
    'c.translate.a': 'Espera um momento, vou traduzir.',
    'l.understood': 'Perceber e ser percebido',
    'w.herhalen': 'repetir',
    'w.opschrijven': 'escrever, apontar',
    'w.latenzien': 'mostrar',
    'w.ondertiteling': 'as legendas (a fala em texto)',
    'w.instructie': 'a instrução',
    'w.plaatje': 'a imagem, o desenho',
    's.understood.1': 'Pode escrever isso?',
    's.understood.2': 'Pode mostrar?',
    's.understood.3': 'Há uma instrução com imagens?',
    'c.understood.q': 'Primeiro arrumar, depois embalar.',
    'c.understood.a': 'Então primeiro tenho de arrumar?',
    'l.keeplearning': 'Continuar a aprender',
    'w.bibliotheek': 'a biblioteca (pública)',
    'w.taalhuis': 'o Taalhuis (ajuda grátis com o neerlandês)',
    'w.oefenen': 'praticar',
    'w.luisteren': 'ouvir',
    'w.elkedag': 'todos os dias',
    'w.woord': 'a palavra',
    's.keeplearning.1': 'Pratico dez minutos todos os dias.',
    's.keeplearning.2': 'O que quer dizer esta palavra?',
    's.keeplearning.3': 'Queres falar neerlandês comigo?',
    'c.keeplearning.q': 'Queres que fale inglês?',
    'c.keeplearning.a': 'Não, prefiro neerlandês. Quero praticar.',
    'c.translate': 'Apps de tradução: inteligentes, mas verifica',
    'c.translate.b': 'Uma app de tradução, como o Google Tradutor, ajuda muito. Podes escrever, falar ou usar o modo de conversa para falar com um colega. Com a câmara podes traduzir placas, papéis e instruções. Em muitos telemóveis, o WhatsApp também consegue traduzir mensagens. Usa o telemóvel só onde é seguro e permitido. Nunca perto de máquinas ou empilhadores. Pergunta sempre primeiro. As apps cometem erros. Para coisas importantes, como o teu contrato, uma carta ou uma instrução de segurança, pede também a uma pessoa que te explique. Não tires fotografias de papéis confidenciais do trabalho sem autorização.',
    'c.translate.p': 'Posso usar o meu telemóvel para traduzir?',
    'c.translate.s': 'O teu chefe dá-te instruções de segurança em neerlandês. Só percebes algumas palavras. O que fazes?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Pedes uma explicação, e perguntas se podes usar uma app.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Dizes "ja, ja" e começas a trabalhar.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Tiras uma fotografia e envias para os teus amigos, para eles traduzirem.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Uma app de tradução ajuda-te a perceber depressa, mas pode errar. Para a segurança, a explicação de uma pessoa é a melhor verificação. Os papéis do trabalho podem ser confidenciais, por isso não os partilhes sem autorização.',
    'c.understood': 'Confirma que percebeste',
    'c.understood.b': 'O teu telemóvel pode transformar a fala em texto (legendas em direto): Live Transcribe no Android, Legendas ao Vivo no iPhone. Vê que línguas o teu telemóvel aceita. Também podes pedir a alguém para escrever, para mostrar ou para falar devagar. Pergunta se há uma instrução com imagens, ou na tua língua. Depois repete o que percebeste: "Dus ik moet eerst …?" Isto é normal aqui, e evita erros.',
    'c.understood.p': 'Então primeiro tenho de contar as caixas?',
    'c.understood.s': 'Uma colega explica como funciona uma máquina nova. Ela fala depressa e perdes algumas palavras. O que fazes?',
    'c.understood.o1': 'Pedes-lhe para mostrar ou escrever, e depois repetes.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Acenas com a cabeça e dizes "ja, ja", para ela não perder tempo.',
    'c.understood.o3': 'Mais tarde experimentas a máquina sem ajuda e vês o que acontece.',
    'c.understood.w': 'Mostrar, escrever e repetir são verificações rápidas. A tua colega pode corrigir-te antes de alguma coisa correr mal. Aqui, isto é visto como cuidado, não como lentidão.',
    'c.keeplearning': 'Continua a aprender, um pouco todos os dias',
    'c.keeplearning.b': 'Alguns minutos todos os dias ajudam mais do que uma hora longa por semana. Guarda as palavras novas do trabalho numa app de notas no telemóvel. Ouve neerlandês fácil, por exemplo o NOS Jeugdjournaal (notícias para crianças) ou um podcast em neerlandês lento. Muitas bibliotecas públicas têm um Taalhuis: ajuda grátis com o neerlandês, muitas vezes com um taalcafé (um sítio para praticar a falar) ou um colega de língua (taalmaatje). Os colegas muitas vezes mudam para inglês para te ajudar. Pede-lhes com simpatia para falarem neerlandês contigo: a maioria das pessoas gosta de ajudar.',
    'c.keeplearning.p': 'Fala comigo em neerlandês, assim aprendo mais depressa.',
    'c.keeplearning.s': 'Os teus colegas mudam sempre para inglês quando falam contigo. Queres aprender neerlandês. O que fazes?',
    'c.keeplearning.o1': 'Agradeces e pedes-lhes para falarem neerlandês contigo.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Não dizes nada. O neerlandês vem sozinho.',
    'c.keeplearning.o3': 'Também respondes em inglês, porque é mais educado.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Os colegas muitas vezes mudam para inglês por simpatia. Quando pedes neerlandês, a maioria fica contente por ajudar. Falar um pouco todos os dias no trabalho é uma das formas mais rápidas de aprender.',
    'l.gossip': 'Mexericos e redes sociais',
    'w.roddelen': 'falar mal dos outros, fazer mexericos',
    'w.posten': 'publicar (online)',
    'w.groepsapp': 'o grupo de mensagens',
    'w.socialemedia': 'as redes sociais',
    'w.delen': 'partilhar',
    'w.screenshot': 'a captura de ecrã',
    's.gossip.1': 'Não falo mal dos colegas.',
    's.gossip.2': 'Não ponho fotografias do trabalho na internet.',
    's.gossip.3': 'Prefiro que me digas diretamente.',
    'c.gossip.q': 'Ouviste o que o Mark fez?',
    'c.gossip.a': 'Não, e prefiro não falar dele.',
    'l.boundaries': 'Passar dos limites',
    'w.aanraken': 'tocar',
    'w.ongewenst': 'indesejado',
    'w.opmerking': 'o comentário',
    'w.intimidatie': 'o assédio, a intimidação',
    'w.getuige': 'a testemunha',
    'w.grapje': 'a piada',
    's.boundaries.1': 'Não me toques.', // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
    's.boundaries.2': 'Não acho piada a esse comentário.',
    's.boundaries.3': 'Quero comunicar uma coisa à pessoa de confiança.',
    'c.boundaries.q': { m: 'Não sejas tão complicado, era só uma piada.', f: 'Não sejas tão complicada, era só uma piada.', x: 'Não compliques tanto, era só uma piada.' }, // x: nieuw, nalezen
    'c.boundaries.a': 'Para mim não. Quero que pares.',
    'c.gossip': 'Mexericos e redes sociais',
    'c.gossip.b': 'Falar de um colega pelas costas (roddelen) estraga a confiança numa equipa. Tens um problema com alguém? Fala com essa pessoa, ou com o teu chefe. Na internet valem as mesmas regras que no trabalho. Não publiques nada sobre colegas, clientes ou a empresa sem autorização. Isso inclui fotografias, vídeos e mensagens. O teu patrão pode ver o que publicas, e isso pode ficar online durante anos. Muitas equipas têm um grupo de mensagens (groepsapp) para o trabalho: fala só de trabalho, e não partilhes capturas de ecrã do grupo com outras pessoas. Partilhar coisas privadas de um colega ou gozar com alguém na internet também é bullying.',
    'c.gossip.p': 'Não quero isso na internet.',
    'c.gossip.s': 'Um colega filma-te quando escorregas no chão molhado. Ele quer pôr o vídeo no TikTok. O que fazes?',
    'c.gossip.o1': 'Dizes "Nee, dat wil ik niet" e pedes-lhe para apagar.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': 'Ris-te e deixas que ele publique, para não criares problemas.',
    'c.gossip.o3': 'Pedes-lhe para o publicar sem o teu nome.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'Normalmente, ninguém pode pôr um vídeo teu na internet sem a tua autorização. Dizer que não é normal, e o teu empregador tem de agir quando os colegas gozam uns com os outros na internet. Se ele publicar na mesma, diz ao teu chefe.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': 'Passar dos limites',
    'c.boundaries.b': 'Grensoverschrijdend gedrag é um comportamento que passa os limites de alguém. Por exemplo: toques indesejados, comentários ou piadas sexuais, olhares insistentes, imagens indesejadas, ameaças ou gritos. Não importa se a outra pessoa "estava a brincar": o que conta é como tu te sentes. Se puderes, diz com clareza que queres que pare. Escreve o que aconteceu, quando e quem viu. Diz ao teu chefe, à pessoa de confiança (vertrouwenspersoon, se houver) ou aos recursos humanos. O teu empregador tem de te proteger, e ninguém te pode castigar por comunicares. Viste isto acontecer a um colega? Pergunta se está bem, e oferece-te para ser testemunha.',
    'c.boundaries.p': 'Quero que pares.',
    'c.boundaries.s': { m: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás "bonito". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?', f: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás "bonita". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?', x: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás com "bom aspeto". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o1': 'Escreves o que acontece e contas à vertrouwenspersoon.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': 'Não dizes nada, porque é ele que decide os teus turnos.',
    'c.boundaries.o3': 'Despedes-te sem dizer a ninguém porquê.',
    'c.boundaries.w': 'Isto é um comportamento indesejado, e a culpa não é tua. Uma pessoa de confiança ouve-te em confidência e ajuda-te a escolher o passo seguinte. A lei protege-te quando comunicas. Também podes falar com os recursos humanos.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'Na loja',
    'l.shelves': 'Prateleiras e stock',
    'w.schap': 'a prateleira (numa loja)',
    'w.vakkenvullen': 'repor as prateleiras',
    'w.voorraad': 'o stock',
    'w.houdbaarheidsdatum': 'a data de validade',
    'w.prijskaartje': 'a etiqueta do preço',
    'w.achteraan': 'atrás, ao fundo',
    's.shelves.1': 'Põe os produtos novos atrás.',
    's.shelves.2': 'Este produto já passou da data.',
    's.shelves.3': 'Ainda há stock?',
    'c.shelves.q': 'Onde encontro o arroz?',
    'c.shelves.a': 'No corredor quatro. Eu vou consigo.',
    'l.checkout': 'Na caixa',
    'w.klant': 'o cliente',
    'w.kassa': 'a caixa (registadora)',
    'w.wisselgeld': 'o troco',
    'w.bonnetje': 'o talão',
    'w.pinnen': 'pagar com cartão',
    'w.contant': 'em dinheiro',
    's.checkout.1': 'Quer pagar com cartão ou em dinheiro?',
    's.checkout.2': 'Aqui está o seu troco.',
    's.checkout.3': 'Posso ver a sua identificação, por favor?',
    'c.checkout.q': 'Posso pagar com cartão aqui?',
    'c.checkout.a': 'Sim, claro, pode.',
    'u.numbers': 'Horas, dinheiro e medidas',
    'l.counting': 'Os números', // nieuw, nalezen
    'w.dertien': 'treze (13)', // nieuw, nalezen
    'w.dertig': 'trinta (30)', // nieuw, nalezen
    'w.zeventien': 'dezassete (17)', // nieuw, nalezen
    'w.zeventig': 'setenta (70)', // nieuw, nalezen
    'w.zevenenveertig': 'quarenta e sete (47)', // nieuw, nalezen
    'w.vierenzeventig': 'setenta e quatro (74)', // nieuw, nalezen
    's.counting.1': 'Tenho treze caixas, não trinta.', // nieuw, nalezen
    's.counting.2': 'A localização setenta e quatro está vazia.', // nieuw, nalezen
    's.counting.3': 'Pode dizer isso algarismo a algarismo?', // nieuw, nalezen
    'c.counting.q': 'Quantas caixas faltam?', // nieuw, nalezen
    'c.counting.a': 'Setenta. Sete, zero.', // nieuw, nalezen
    'l.hours': 'Horas e horários',
    'w.uur': 'a hora',
    'w.minuut': 'o minuto',
    'w.kwartier': 'um quarto de hora (15 minutos)',
    'w.halfuur': 'meia hora (30 minutos)',
    'w.duren': 'durar, demorar',
    'w.optellen': 'somar',
    's.hours.1': 'Começo às sete e meia (7:30).',
    's.hours.2': 'Hoje trabalho oito horas.',
    's.hours.3': 'A pausa dura meia hora.',
    'c.hours.q': 'A que horas acabas?',
    'c.hours.a': 'Às quatro e um quarto.',
    'l.measures': 'Dinheiro e medidas',
    'w.euro': 'o euro',
    'w.cent': 'o cêntimo',
    'w.kilo': 'o quilo',
    'w.liter': 'o litro',
    'w.meter': 'o metro',
    'w.tellen': 'contar',
    's.measures.1': 'Custa seis euros e cinquenta.',
    's.measures.2': 'Esta caixa pesa dez quilos.',
    's.measures.3': 'Contei quarenta caixas.',
    'c.measures.q': 'Que comprimento tem essa tábua?',
    'c.measures.a': 'Exatamente dois metros.',
    'c.shelves': 'O mais antigo à frente',
    'c.shelves.b': 'Quando repões as prateleiras, olha para a data dos produtos. Põe à frente os produtos com a data mais próxima, e os novos atrás. Os clientes tiram da frente, por isso os produtos mais antigos saem primeiro. Um produto passou da data, ou está danificado? Tira-o da prateleira e pergunta o que fazer com ele. Mantém os corredores livres de caixas e carrinhos. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.shelves.p': 'O que faço com os produtos fora da data?',
    'c.shelves.s': 'Pões leite novo na prateleira. À frente há leite com uma data mais próxima. O que fazes?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'O leite novo atrás, o leite antigo à frente.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'O leite novo à frente, porque é mais fresco.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Deitas fora o leite antigo.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Os clientes tiram da frente. Quando os produtos mais antigos saem primeiro, deita-se fora menos comida.',
    'c.checkout': 'Identificação para álcool e tabaco',
    'c.checkout.b': 'Não podes vender álcool nem tabaco a menores de 18 anos: é a lei. Não tens a certeza da idade de um cliente? Pede a identificação. Muitas lojas pedem identificação a todas as pessoas que parecem ter menos de 25 anos. Sem identificação, ou menor de 18? Então não vendes, e manténs a educação. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.checkout.p': 'Sem identificação não posso vender isto.',
    'c.checkout.s': 'Um rapaz quer comprar cerveja. Parece ter uns 17 anos. Diz que tem 19, mas não tem identificação com ele. O que fazes?',
    'c.checkout.o1': 'Dizes que não podes vender sem identificação.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Vendes, porque ele diz que tem 19.',
    'c.checkout.o3': 'Vendes, mas só uma lata.',
    'c.checkout.w': 'Sem identificação não podes saber a idade dele. Vender álcool a um menor de 18 é contra a lei, e a loja pode levar uma multa.',
    'c.counting': 'Vijfentwintig: primeiro o 5, depois o 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'Em neerlandês, do 0 ao 12 cada número tem a sua palavra: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. Do 13 ao 19 acabam em -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. As dezenas acabam em -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. Do 21 ao 99 diz-se primeiro o último algarismo: 25 é vijfentwintig, "cinco e vinte". Por isso, 47 é zevenenveertig, e 74 é vierenzeventig. Dertien e dertig soam quase igual: ouve o fim. Tens dúvidas? Repete os algarismos um a um.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Quatro, sete? Então, quarenta e sete?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'O teu chefe diz: "Ga naar gang zevenenveertig." Qual é o corredor?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'O corredor 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'O corredor 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'O corredor 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '"Zevenenveertig" é "sete e quarenta": primeiro o 7, depois o 40. Por isso é o corredor 47. Muitos recém-chegados ouvem 74 e vão para o corredor errado.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': 'Half acht é 7:30',
    'c.hours.b': 'Em neerlandês, "half" conta para a hora seguinte: half acht é 7:30, não 8:30. Kwart over acht é 8:15, e kwart voor acht é 7:45. Confirma tu as tuas horas: a hora de fim menos a hora de início, menos a pausa. A pausa muitas vezes não é paga. Aponta as tuas horas todos os dias.',
    'c.hours.p': 'Half acht? Então meia hora antes das oito?',
    'c.hours.s': 'O teu chefe diz: "Morgen begin je om half negen." A que horas começas amanhã?',
    'c.hours.o1': 'Às 8:30.',
    'c.hours.o2': 'Às 9:30.',
    'c.hours.o3': 'Às 8:00.',
    'c.hours.w': '"Half negen" quer dizer meia hora antes das nove: 8:30. Muitos recém-chegados pensam que é 9:30, e chegam uma hora atrasados.',
    'c.measures': 'Conta com cabeça, mede, não adivinhes',
    'c.measures.b': 'Muitas caixas para contar? Conta as caixas de uma camada e o número de camadas. Depois multiplica: 8 caixas por camada e 5 camadas são 40 caixas. Com produtos de limpeza, mede a quantidade que o rótulo diz. Mais não é melhor: pode fazer mal à pele e custa dinheiro. Não tens a certeza de um número? Conta outra vez, ou pergunta. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.measures.p': 'Contei duas vezes.',
    'c.measures.s': 'Uma palete tem 6 camadas. Cada camada tem 8 caixas. O teu chefe pergunta quantas caixas há. O que dizes?',
    'c.measures.o1': '48 caixas.',
    'c.measures.o2': '14 caixas.',
    'c.measures.o3': 'Umas 50, acho eu.',
    'c.measures.w': '6 camadas de 8 caixas são 6 vezes 8: 48. Contar uma camada e multiplicar é rápido, e um número certo é melhor do que um palpite.',
    'u.ai': 'IA e apps inteligentes',
    'l.aihelp': 'A IA como ajuda',
    'w.ai': 'a IA (inteligência artificial)',
    'w.chatbot': 'o chatbot (uma app com que podes conversar)',
    'w.antwoord': 'a resposta',
    'w.meekijken': 'ver uma coisa junto com alguém',
    'w.kloppen': 'estar certo, bater certo',
    'w.zeker': 'certo, seguro (sem dúvida)',
    's.aihelp.1': 'Podes explicar esta carta?',
    's.aihelp.2': 'Esta resposta está certa?',
    's.aihelp.3': 'Pode ver isto comigo?',
    'c.aihelp.q': 'Foste tu que escreveste isto?',
    'c.aihelp.a': 'Sim, com a ajuda da IA.',
    'l.aiprivate': 'O que não partilhas',
    'w.persoonlijk': 'pessoal',
    'w.gegevens': 'os dados (nome, morada, número)',
    'w.wachtwoord': 'a palavra-passe',
    'w.typen': 'escrever (no teclado)',
    'w.opslaan': 'guardar',
    'w.inloggen': 'iniciar sessão, entrar',
    's.aiprivate.1': 'Não partilho nomes de clientes.',
    's.aiprivate.2': 'Posso usar IA no meu trabalho?',
    's.aiprivate.3': 'A minha palavra-passe é secreta.',
    'c.aiprivate.q': 'Põe isto no chatbot.',
    'c.aiprivate.a': 'Prefiro não, tem nomes de clientes.',
    'l.aifake': 'Falso ou verdadeiro?',
    'w.echt': 'verdadeiro, real',
    'w.stem': 'a voz',
    'w.filmpje': 'o vídeo (curto)',
    'w.ophangen': 'desligar (o telefone)',
    'w.nummer': 'o número (de telefone)',
    'w.haast': 'a pressa',
    's.aifake.1': 'Isto é verdadeiro ou falso?',
    's.aifake.2': 'Desligo e sou eu que ligo de volta.',
    's.aifake.3': 'Não envio dinheiro.',
    'c.aifake.q': 'Olá, este é o meu número novo. Podes mandar-me dinheiro depressa?',
    'c.aifake.a': 'Primeiro ligo-te para o teu número antigo.',
    'l.aiplan': 'Quando uma app decide',
    'w.planning': 'o planeamento, o horário',
    'w.mens': 'o ser humano, a pessoa',
    'w.computer': 'o computador',
    'w.tempo': 'o ritmo (de trabalho)',
    'w.automatisch': 'automático, sozinho',
    'w.besluit': 'a decisão',
    's.aiplan.1': 'Quem tomou esta decisão?',
    's.aiplan.2': 'Quero falar com uma pessoa.',
    's.aiplan.3': 'Porque tenho menos horas no meu horário?',
    'c.aiplan.q': 'Foi a app que fez o teu horário.',
    'c.aiplan.a': 'Posso falar sobre isso com uma pessoa?',
    'c.aihelp': 'A IA ajuda, uma pessoa verifica',
    'c.aihelp.b': 'As apps de IA e os chatbots, como o ChatGPT, conseguem traduzir, explicar uma carta ou ajudar-te a escrever uma mensagem. Isso é útil. Mas a IA às vezes erra, e mesmo assim parece muito segura. É sobre o teu contrato, o teu salário, medicamentos ou segurança? Então verifica sempre a resposta com uma pessoa. Por exemplo o teu chefe, os recursos humanos ou o Juridisch Loket.',
    'c.aihelp.p': 'Isto está certo? Pode ver isto comigo?',
    'c.aihelp.s': 'Perguntas a um chatbot sobre o teu contrato. Ele diz que não recebes subsídio de férias. O que fazes?',
    'c.aihelp.o1': 'Pedes aos recursos humanos ou ao Juridisch Loket para verificarem.', // nalezen: korter goed antwoord // nagelezen AI 22 nov
    'c.aihelp.o2': 'Acreditas: o chatbot parece ter muita certeza.',
    'c.aihelp.o3': 'Não dizes nada e esqueces o assunto.',
    'c.aihelp.w': 'Um chatbot pode enganar-se sobre regras e contratos. Nos Países Baixos quase todos os trabalhadores recebem subsídio de férias. Uma pessoa que conhece as regras pode verificar.',
    'c.aiprivate': 'Pensa antes de escrever',
    'c.aiprivate.b': 'O que escreves num chatbot pode ser guardado e usado pela empresa que o faz. Por isso nunca escrevas o teu BSN, uma palavra-passe ou os teus dados bancários. Não ponhas nomes ou fotografias de clientes, doentes ou colegas, nem papéis do trabalho. Muitos empregadores têm regras sobre a IA. Pergunta primeiro se a podes usar no teu trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.aiprivate.p': 'Posso usar IA para isto?',
    'c.aiprivate.s': 'Queres que um chatbot escreva um relatório sobre um cliente. O relatório tem o nome e a morada do cliente. O que fazes?',
    'c.aiprivate.o1': 'Primeiro perguntas, e deixas de fora o nome e a morada.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Pões tudo no chatbot: é mais rápido.',
    'c.aiprivate.o3': 'Envias o relatório a um amigo para ele verificar.',
    'c.aiprivate.w': 'Os nomes e as moradas são dados pessoais. Não podem simplesmente ir para outra empresa. O teu empregador sabe que apps são permitidas.',
    'c.aifake': 'Vozes e vídeos falsos',
    'c.aifake.b': 'Com a IA, os criminosos conseguem copiar uma voz e fazer fotografias e vídeos falsos. Uma chamada ou mensagem que parece do teu patrão, do teu banco ou de alguém da tua família pode ser falsa. Cuidado quando há pressa, dinheiro e um número novo. Desliga, e liga tu de volta para o número que conheces. Um banco, um empregador ou a polícia a sério nunca te pedem os teus códigos.',
    'c.aifake.p': 'Desligo e sou eu que ligo de volta.',
    'c.aifake.s': 'O teu telemóvel toca. Uma voz igualzinha à do teu patrão diz: "Paga já esta fatura, é urgente." O que fazes?',
    'c.aifake.o1': 'Desligas e ligas tu ao teu patrão.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Pagas depressa: é o teu patrão.',
    'c.aifake.o3': 'Dás o teu código do banco, para o teu patrão poder pagar.',
    'c.aifake.w': 'Uma voz pode ser copiada com IA. Pressa e dinheiro juntos são um sinal de alarme. Ligar de volta para um número que conheces é uma verificação rápida e segura.',
    'c.aiplan': 'Quem decidiu isto?',
    'c.aiplan.b': 'Cada vez mais empresas deixam uma app ou um computador decidir coisas. Por exemplo, faz o horário ou mede o teu ritmo com o leitor. Podes perguntar que informação sobre ti é recolhida. Há uma decisão grande sobre ti, como menos horas, um aviso ou um despedimento? Pergunta quem decidiu. Um computador tomou essa decisão sozinho? Então podes pedir que uma pessoa a verifique outra vez e a explique. Aponta as tuas próprias horas. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.aiplan.p': 'Uma pessoa pode ver isto?',
    'c.aiplan.s': 'A app do horário dá-te muito menos horas no próximo mês. Ninguém te diz porquê. O que fazes?',
    'c.aiplan.o1': 'Pedes que uma pessoa te explique.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Aceitas: a app tem sempre razão.',
    'c.aiplan.o3': 'Perguntas ao chatbot da app porquê.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'As apps erram, e não sabem tudo sobre ti. Podes pedir uma explicação, e uma pessoa pode ver outra vez.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "Na estufa", // nagelezen (2e lezing)
    'l.harvest': "Colher e separar", // nagelezen (2e lezing)
    'w.kas': "a estufa", // nagelezen (2e lezing)
    'w.gewas': "a cultura (as plantas que crescem)", // nagelezen (2e lezing)
    'w.rij': "a fila (de plantas)", // nagelezen (2e lezing)
    'w.oogsten': "colher", // nagelezen (2e lezing)
    'w.sorteren': "separar, triar", // nagelezen (2e lezing)
    'w.krat': "a caixa (de plástico)", // nagelezen (2e lezing)
    's.harvest.1': "Trabalho na estufa.", // nagelezen (2e lezing)
    's.harvest.2': "Em que fila começo?", // nagelezen (2e lezing)
    's.harvest.3': "A caixa está cheia.", // nagelezen (2e lezing)
    'c.harvest.q': "Quantas filas já fizeste?", // nagelezen (2e lezing)
    'c.harvest.a': "Quatro. Faltam duas.", // nagelezen (2e lezing)
    'l.greensafe': "Segurança na estufa", // nagelezen (2e lezing)
    'w.spuitmiddelen': "os produtos fitofarmacêuticos (químicos para as plantas)", // nagelezen (2e lezing)
    'w.bespoten': "pulverizado (com produtos para as plantas)", // nagelezen (2e lezing)
    'w.plukkar': "o carrinho de colheita", // nagelezen (2e lezing)
    'w.bukken': "baixar-se, dobrar-se", // nagelezen (2e lezing)
    'w.drinken': "beber", // nagelezen (2e lezing)
    'w.hitte': "o calor (quando está muito calor)", // nagelezen (2e lezing)
    's.greensafe.1': "Esta estufa foi pulverizada?", // nagelezen (2e lezing)
    's.greensafe.2': "Vou beber um pouco de água.", // nagelezen (2e lezing)
    's.greensafe.3': "Onde está o carrinho de colheita?", // nagelezen (2e lezing)
    'c.greensafe.q': "Posso trabalhar na estufa três?", // nagelezen (2e lezing)
    'c.greensafe.a': "Não, ainda não. Acabou de ser pulverizada.", // nagelezen (2e lezing)
    'c.harvest': "Ritmo e pagamento à peça", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "Numa estufa trabalhas muitas vezes a um ritmo fixo (tempo). Alguns empregadores pagam por caixa, por fila ou por quilo: é o pagamento à peça (stukloon). Mesmo com pagamento à peça, tens de ganhar pelo menos o salário mínimo por cada hora que trabalhas. Vê o valor em rijksoverheid.nl. Aponta todos os dias as tuas horas e as tuas caixas, e compara-as com o teu recibo de vencimento. Trabalhar depressa é bom, mas trabalhar em segurança vem primeiro. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "Quantas caixas fiz hoje?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "Pagam-te por caixa. Esta semana ganhas menos do que o salário mínimo por hora. O que fazes?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Mostras a tua própria lista de horas e caixas.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Não dizes nada e trabalhas mais depressa.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Aceitas: com pagamento à peça, isso é normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Com pagamento à peça, tens na mesma de receber pelo menos o salário mínimo por cada hora que trabalhaste. A tua lista de horas e caixas ajuda-te a mostrar o que fizeste. Se não for corrigido, pede ajuda.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "Calor e produtos químicos", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "Numa estufa pode estar muito calor, mesmo na primavera. Bebe água muitas vezes, mesmo antes de teres sede, e faz as tuas pausas num sítio fresco. Tens tonturas, náuseas ou dores de cabeça? Para e diz a alguém. Às vezes as plantas são pulverizadas com químicos (spuitmiddelen). Uma estufa que acabou de ser pulverizada tem muitas vezes um aviso na porta. Não entres até o teu chefe dizer que já é seguro outra vez. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Já posso trabalhar nesta estufa?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Uma estufa foi pulverizada hoje de manhã. Há um aviso na porta. Um colega diz: \"Anda, é só um bocadinho.\" O que fazes?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o1': "Ficas cá fora e perguntas quando é seguro.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Entras depressa e susténs a respiração.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Entras, e depois lavas bem as mãos.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Os produtos químicos que se pulverizam nas plantas podem fazer mal à tua pele, aos teus olhos e aos teus pulmões, mesmo quando não cheiras nada. Depois da pulverização há um tempo de espera antes de se poder entrar outra vez. O teu chefe sabe quando acaba.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Números e dados",
    'l.details': "Os teus dados",
    'w.voornaam': "o nome próprio",
    'w.achternaam': "o apelido",
    'w.spellen': "soletrar (dizer as letras uma a uma)",
    'w.telefoonnummer': "o número de telefone",
    'w.geboortedatum': "a data de nascimento",
    'w.formulier': "o formulário (um papel ou uma página para preencher)",
    's.details.1': "Pode soletrar isso?",
    's.details.2': "Dou o meu novo número de telefone.",
    's.details.3': "Este formulário é para as Finanças (Belastingdienst).",
    'c.details.q': "Qual é o teu apelido?",
    'c.details.a': "Haddad. Queres que soletre?",
    'l.dates': "Dias e datas",
    'w.maandag': "segunda-feira",
    'w.week': "a semana",
    'w.maand': "o mês",
    'w.volgendeweek': "na próxima semana",
    'w.vorigeweek': "na semana passada",
    'w.totenmet': "até … inclusive (o último dia também conta)",
    's.dates.1': "Posso de segunda a quinta (quinta também).",
    's.dates.2': "Na próxima semana trabalho quatro dias.",
    's.dates.3': "Na semana passada trabalhei quarenta horas.",
    'c.dates.q': "Que dia é hoje?",
    'c.dates.a': "É segunda-feira, 3 de junho.",
    'l.permit': "Papéis, integração e o teu trabalho", // nagelezen AI 22 nov
    'w.papieren': "os papéis (os documentos)", // nagelezen AI 22 nov
    'w.werkvergunning': "a autorização de trabalho", // nagelezen AI 22 nov
    'w.werknemer': "o trabalhador por conta de outrem (trabalhas para um empregador)", // nagelezen AI 22 nov
    'w.zzper': "o trabalhador independente (trabalhas por conta própria)", // nagelezen AI 22 nov
    'w.inburgering': "a integração cívica (o curso e os exames para recém-chegados)", // nagelezen AI 22 nov
    'w.taalles': "a aula de língua", // nagelezen AI 22 nov
    's.permit.1': "Posso trabalhar aqui com os meus papéis?", // nagelezen AI 22 nov
    's.permit.2': "Trabalho por conta de outrem ou por conta própria?", // nagelezen AI 22 nov
    's.permit.3': "Trabalho à chamada.", // nagelezen AI 22 nov
    'c.permit.q': "Podes trabalhar na terça-feira?", // nagelezen AI 22 nov
    'c.permit.a': "Não, nesse dia tenho aula de língua. Na quarta posso.", // nagelezen AI 22 nov
    'l.kids': "Filhos e trabalho", // nagelezen AI 22 nov
    'w.zwanger': "grávida", // nagelezen AI 22 nov
    'w.kinderopvang': "a creche, o infantário", // nagelezen AI 22 nov
    'w.ophalen': "ir buscar (alguém)", // nagelezen AI 22 nov
    'w.ziekkind': "uma criança doente", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "a licença parental", // nagelezen AI 22 nov
    'w.zorgverlof': "a licença para cuidar (dias sem trabalhar para cuidar de um familiar doente)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.kids.1': "O meu filho está doente. Tenho de o ir buscar.", // nagelezen AI 22 nov
    's.kids.2': "Posso tirar uma licença de emergência?", // nagelezen AI 22 nov
    's.kids.3': "O meu empregador continua a pagar o meu salário?", // nagelezen AI 22 nov
    'c.kids.q': "Porque é que tens de ir embora agora?", // nagelezen AI 22 nov
    'c.kids.a': "A creche ligou. O meu filho tem febre.", // nagelezen AI 22 nov
    'l.body': "O corpo e a dor", // nagelezen AI 22 nov
    'w.hoofd': "a cabeça", // nagelezen AI 22 nov
    'w.rug': "as costas", // nagelezen AI 22 nov
    'w.arm': "o braço", // nagelezen AI 22 nov
    'w.hand': "a mão", // nagelezen AI 22 nov
    'w.buik': "a barriga", // nagelezen AI 22 nov
    'w.oog': "o olho", // nagelezen AI 22 nov
    's.body.1': "Tenho dores na mão.", // nagelezen AI 22 nov
    's.body.2': "Não me sinto bem.", // nagelezen AI 22 nov
    's.body.3': "Caí em cima do braço.", // nagelezen AI 22 nov
    'c.body.q': "Onde é que dói?", // nagelezen AI 22 nov
    'c.body.a': "Nas costas. Levantei uma caixa pesada.", // nagelezen AI 22 nov
    'l.jobends': "Quando o teu trabalho acaba", // nagelezen AI 22 nov
    'w.eindafrekening': "o acerto final de contas (o teu último pagamento quando um trabalho acaba)", // nagelezen AI 22 nov
    'w.opzeggen': "rescindir (um contrato), cancelar", // nagelezen AI 22 nov
    'w.uitschrijven': "cancelar a inscrição (tirar o teu nome de uma lista)", // nagelezen AI 22 nov
    'w.sleutel': "a chave", // nagelezen AI 22 nov
    'w.verhuizen': "mudar de casa", // nagelezen AI 22 nov
    'w.busje': "a carrinha (um autocarro pequeno)", // nagelezen AI 22 nov
    's.jobends.1': "Recebo o subsídio de férias e os meus dias de férias pagos?", // nagelezen AI 22 nov
    's.jobends.2': "Peço conselho ao Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': "Trato eu de um novo seguro de saúde.", // nagelezen AI 22 nov
    'c.jobends.q': "O teu trabalho acaba na sexta-feira. Aí também tens de sair da casa.", // nagelezen AI 22 nov
    'c.jobends.a': "Qual é o prazo de aviso prévio do meu contrato de arrendamento?", // nagelezen AI 22 nov
    'c.details': "Os teus dados: dá-os bem", // nagelezen AI 22 nov
    'c.details.b': "No início de um trabalho, dás os teus dados. São o teu nome, a tua morada, o teu número de telefone, a tua data de nascimento e o teu BSN. Soletra o teu nome devagar, letra a letra. Depois, verifica o teu nome no contrato e no recibo de vencimento. Um erro no teu nome ou no BSN pode dar problemas com o salário ou com os impostos. Tens uma morada ou um número de telefone novo? Diz ao teu empregador.", // nagelezen AI 22 nov
    'c.details.p': "Eu soletro: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Ao telefone, a agência escreve o teu apelido. Ouves que o estão a escrever mal. O que fazes?", // nagelezen AI 22 nov
    'c.details.o1': "Soletras o teu nome devagar e pedes que o leiam em voz alta.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Não dizes nada: um pequeno erro no nome não faz mal.", // nagelezen AI 22 nov
    'c.details.o3': "Desligas, e esperas que encontrem o erro mais tarde.", // nagelezen AI 22 nov
    'c.details.w': "O teu nome tem de ser igual no contrato, no recibo de vencimento e no documento de identificação. Assim o salário e os impostos ficam certos. Soletrar e pedir que leiam em voz alta é uma verificação rápida.", // nagelezen AI 22 nov
    'c.dates': "Datas: primeiro o dia", // nagelezen AI 22 nov
    'c.dates.b': "Em neerlandês, o dia vem antes do mês: 3-6 é 3 de junho, não 6 de março. \"Tot en met\" quer dizer que o último dia também conta. Os dias e os meses escrevem-se com letra minúscula: maandag, juni. Tens dúvidas sobre uma data? Pergunta, e repete-a.", // nagelezen AI 22 nov
    'c.dates.p': "Queres dizer 3 de junho?", // nagelezen AI 22 nov
    'c.dates.s': "O teu horário diz: \"Vrij: 3-6 tot en met 5-6\". Quando estás de folga?", // nagelezen AI 22 nov
    'c.dates.o1': "A 3, 4 e 5 de junho.", // nagelezen AI 22 nov
    'c.dates.o2': "Só a 3 e 4 de junho.", // nagelezen AI 22 nov
    'c.dates.o3': "De 6 de março a 6 de maio.", // nagelezen AI 22 nov
    'c.dates.w': "Primeiro vem o dia, depois o mês: 3-6 é 3 de junho. \"Tot en met\" quer dizer que 5 de junho também conta, por isso tens três dias de folga.", // nagelezen AI 22 nov
    'c.permit': "Trabalho e integração", // nagelezen AI 22 nov
    'c.permit.b': "Tens de fazer a integração cívica (inburgering)? Diz ao teu empregador, e diz à gemeente (a câmara municipal) que trabalhas. Pergunta cedo se as tuas aulas de língua podem encaixar no teu horário. Não tens a certeza se podes trabalhar aqui? Confirma antes de começar, por exemplo no IND, no UWV ou na VluchtelingenWerk. Pedem-te para te registares como independente (zzp’er) para este trabalho? Pede conselho primeiro. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nagelezen AI 22 nov
    'c.permit.p': "Tenho aula de língua à terça-feira. O meu horário pode ter isso em conta?", // nagelezen AI 22 nov
    'c.permit.s': "A tua aula de língua é à terça de manhã. No teu novo horário, trabalhas a essa hora. O que fazes?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Pedes ao teu chefe para mudar o horário.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Faltas à aula: o trabalho vem primeiro.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Ficas em casa às terças sem dizer nada.", // nagelezen AI 22 nov
    'c.permit.w': "A tua integração também é uma obrigação. Muitos empregadores ajudam quando sabem cedo. A gemeente também te pode ajudar a encaixar o teu plano no teu trabalho.", // nagelezen AI 22 nov
    'c.kids': "O teu filho está doente", // nagelezen AI 22 nov
    'c.kids.b': "O teu filho fica doente de repente? Diz logo ao teu empregador. Nas primeiras horas ou dias podes tirar uma licença de emergência (calamiteitenverlof), e o teu empregador continua a pagar-te. O teu filho precisa de cuidados durante mais tempo? Então podes pedir uma licença para cuidar (zorgverlof). Estás grávida? O teu empregador não te pode despedir por isso. Informa-te a tempo sobre a licença de gravidez e a licença parental (ouderschapsverlof). Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "O meu filho está doente. Posso sair mais cedo hoje?", // nagelezen AI 22 nov
    'c.kids.s': "A creche (kinderopvang) liga-te para o trabalho. O teu filho tem febre e tem de ir para casa. O que fazes?", // nagelezen AI 22 nov
    'c.kids.o1': "Dizes ao teu chefe, e pedes uma licença de emergência.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Sais sem dizer nada, e explicas amanhã.", // nagelezen AI 22 nov
    'c.kids.o3': "Ficas no trabalho, e deixas o teu filho à espera até ao fim do teu turno.", // nagelezen AI 22 nov
    'c.kids.w': "Um filho doente é uma emergência em casa. Se disseres primeiro ao teu chefe, ele pode organizar o trabalho. A licença de emergência é para momentos como este.", // nagelezen AI 22 nov
    'c.body': "Diz o que aconteceu e onde dói", // nagelezen AI 22 nov
    'c.body.b': "No médico, diz o que aconteceu e onde dói. Por exemplo: \"Ik ben gevallen. Mijn arm doet pijn.\" Diz também há quanto tempo tens a dor. Não tens de adivinhar o que tens: isso é o médico que vê. Aconteceu no trabalho? Diz ao teu chefe no mesmo dia.", // nagelezen AI 22 nov
    'c.body.p': "Caí. Dói-me o braço.", // nagelezen AI 22 nov
    'c.body.s': "No trabalho levantaste uma caixa pesada. Agora doem-te muito as costas. Estás no médico de família (huisarts). O que dizes?", // nagelezen AI 22 nov
    'c.body.o1': "Onde dói, e o que aconteceu: levantaste uma caixa pesada.", // nagelezen AI 22 nov
    'c.body.o2': "Só que te sentes mal, mais nada.", // nagelezen AI 22 nov
    'c.body.o3': "O nome de uma doença que encontraste na internet.", // nagelezen AI 22 nov
    'c.body.w': "Quando dizes onde dói e o que aconteceu, o médico percebe-te mais depressa. O médico vê o que é. Aconteceu no trabalho? Diz também ao teu chefe.", // nagelezen AI 22 nov
    'c.jobends': "O teu trabalho acaba: o que mais acaba?", // nagelezen AI 22 nov
    'c.jobends.b': "Quando o teu trabalho acaba, verifica o acerto final de contas (eindafrekening). Os dias de férias que não gozaste e o subsídio de férias costumam ser pagos com ele. A casa, o seguro de saúde ou uma carrinha da agência podem acabar ao mesmo tempo. Trata a tempo do teu próprio seguro de saúde. O teu contrato de arrendamento tem regras próprias: pede conselho antes de saíres da casa. Vais mudar de casa, ou sair dos Países Baixos? Diz à gemeente. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "Quando recebo o acerto final de contas?", // nagelezen AI 22 nov
    'c.jobends.s': "O teu trabalho acaba na sexta-feira. O teu seguro de saúde é através da agência. O que fazes?", // nagelezen AI 22 nov
    'c.jobends.o1': "Perguntas quando acaba o seguro, e tratas do teu a tempo.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Nada: o seguro continua sozinho.", // nagelezen AI 22 nov
    'c.jobends.o3': "Esperas até ficares doente, e tratas disso nessa altura.", // nagelezen AI 22 nov
    'c.jobends.w': "O seguro através da agência acaba muitas vezes quando o trabalho acaba. Se vives ou trabalhas nos Países Baixos, normalmente tens de ter seguro de saúde. Se tratares disso a tempo, não ficas sem seguro.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Terminar o teu trabalho", // nieuw, nalezen
    'l.workorder': "A ordem de trabalho", // nieuw, nalezen
    'w.werkbon': "a ordem de trabalho (um papel ou uma app com a tua tarefa)", // nieuw, nalezen
    'w.lezen': "ler", // nieuw, nalezen
    'w.aantal': "o número (quantos)", // nieuw, nalezen
    'w.materiaal': "o material (o que precisas para o trabalho)", // nieuw, nalezen
    'w.klaarleggen': "preparar (deixar pronto o que precisas)", // nieuw, nalezen
    'w.handtekening': "a assinatura", // nieuw, nalezen
    's.workorder.1': "Primeiro leio a ordem de trabalho.", // nieuw, nalezen
    's.workorder.2': "Este número está certo?", // nieuw, nalezen
    's.workorder.3': "Estou a preparar o material.", // nieuw, nalezen
    'c.workorder.q': "Sabes o que tens de fazer?", // nieuw, nalezen
    'c.workorder.a': "Quase. O que quer dizer esta palavra na ordem de trabalho?", // nieuw, nalezen
    'l.handover': "Pronto, ou ainda não?", // nieuw, nalezen
    'w.opruimen': "arrumar (pôr as coisas no lugar)", // nieuw, nalezen
    'w.nakijken': "verificar (ver o trabalho outra vez)", // nieuw, nalezen
    'w.afmelden': "avisar que terminas (dizer que o trabalho está feito e sair)", // nieuw, nalezen
    'w.kapot': "avariado, partido", // nieuw, nalezen
    'w.opslot': "fechado à chave", // nieuw, nalezen
    'w.bijzonderheid': "a porta", // nieuw, nalezen
    's.handover.1': "Estou a arrumar o meu sítio.", // nieuw, nalezen
    's.handover.2': "Pode verificar o meu trabalho?", // nieuw, nalezen
    's.handover.3': "Aviso o chefe de que terminei.", // nieuw, nalezen
    'c.handover.q': "Está tudo pronto?", // nieuw, nalezen
    'c.handover.a': "Quase. O quarto quatro estava fechado à chave.", // nieuw, nalezen
    'u.tech': "Na oficina", // nieuw, nalezen
    'l.workshop': "Ferramentas na oficina", // nieuw, nalezen
    'w.gereedschap': "as ferramentas", // nieuw, nalezen
    'w.zagen': "serrar", // nieuw, nalezen
    'w.slijpen': "rebarbar (alisar ou cortar metal com uma máquina)", // nieuw, nalezen
    'w.vonk': "a faísca", // nieuw, nalezen
    'w.gehoorbescherming': "a proteção auditiva (para os ouvidos)", // nieuw, nalezen
    'w.lawaai': "o barulho (muito som alto)", // nieuw, nalezen
    's.workshop.1': "Onde estão as ferramentas?", // nieuw, nalezen
    's.workshop.2': "Uso proteção auditiva quando rebarbo.", // nieuw, nalezen
    's.workshop.3': "Cuidado com as faíscas!", // nieuw, nalezen
    'c.workshop.q': "Porque estás de óculos?", // nieuw, nalezen
    'c.workshop.a': "Quando serro, podem entrar-me bocadinhos no olho.", // nieuw, nalezen
    'l.power': "Primeiro, desligar a corrente", // nieuw, nalezen
    'w.stroom': "a corrente, a eletricidade", // nieuw, nalezen
    'w.kabel': "o cabo", // nieuw, nalezen
    'w.stekker': "a ficha (elétrica)", // nieuw, nalezen
    'w.onderspanning': "sob tensão (tem corrente)", // nieuw, nalezen
    'w.spanningsloos': "sem tensão, seguro (não tem corrente)", // nieuw, nalezen
    'w.elektricien': "o eletricista", // nieuw, nalezen
    's.power.1': "Ainda há corrente aqui?", // nieuw, nalezen
    's.power.2': "Este cabo está avariado.", // nieuw, nalezen
    's.power.3': "Espero até estar sem tensão.", // nieuw, nalezen
    'c.power.q': "Podes trocar aquela lâmpada?", // nieuw, nalezen
    'c.power.a': "A corrente está desligada? Se não, espero pelo eletricista.", // nieuw, nalezen
    'u.garage': "Na garagem", // nieuw, nalezen
    'l.garage': "Pneus, óleo e o elevador", // nieuw, nalezen
    'w.band': "o pneu", // nieuw, nalezen
    'w.olie': "o óleo", // nieuw, nalezen
    'w.accu': "a bateria do carro", // nieuw, nalezen
    'w.monteur': "o mecânico", // nieuw, nalezen
    'w.hefbrug': "o elevador de carros (levanta o carro)", // nieuw, nalezen
    'w.lek': "furado, a perder (sai ar ou água)", // nieuw, nalezen
    's.garage.1': "O pneu está furado.", // nieuw, nalezen
    's.garage.2': "Onde está o óleo novo?", // nieuw, nalezen
    's.garage.3': "O carro está no elevador.", // nieuw, nalezen
    'c.garage.q': "Podes trocar os pneus deste carro?", // nieuw, nalezen
    'c.garage.a': "Sim. Onde estão os pneus de inverno?", // nieuw, nalezen
    'l.carjob': "O cliente decide", // nieuw, nalezen
    'w.proefrit': "o test drive (uma volta de teste com o carro)", // nieuw, nalezen
    'w.rijbewijs': "a carta de condução", // nieuw, nalezen
    'w.akkoord': "de acordo, combinado (dizes que sim)", // nieuw, nalezen
    'w.kosten': "os custos (o que é preciso pagar)", // nieuw, nalezen
    'w.repareren': "reparar, arranjar", // nieuw, nalezen
    'w.onderdeel': "a peça (de um carro ou de uma máquina)", // nieuw, nalezen
    's.carjob.1': "O cliente está de acordo com os custos?", // nieuw, nalezen
    's.carjob.2': "Esta peça está avariada.", // nieuw, nalezen
    's.carjob.3': "Posso fazer um test drive?", // nieuw, nalezen
    'c.carjob.q': "Os travões também estão maus. Fazes isso já?", // nieuw, nalezen
    'c.carjob.a': "Primeiro pergunto ao chefe. O cliente tem de concordar.", // nieuw, nalezen
    'u.stage': "Fazer estágio", // nieuw, nalezen
    'l.placement': "O teu estágio", // nieuw, nalezen
    'w.stage': "o estágio (aprendes numa empresa)", // nieuw, nalezen
    'w.praktijkopleider': "o orientador na empresa (guia-te na empresa)", // nieuw, nalezen
    'w.stagebegeleider': "o orientador de estágio da escola (guia-te pela escola)", // nieuw, nalezen
    'w.pok': "o contrato de estágio (assinam-no tu, a escola e a empresa)", // nieuw, nalezen
    'w.school': "a escola", // nieuw, nalezen
    'w.leerbedrijf': "a empresa formadora (uma empresa onde os alunos podem aprender)", // nieuw, nalezen
    's.placement.1': "Faço o estágio num armazém.", // nieuw, nalezen
    's.placement.2': "Quem é o meu orientador na empresa?", // nieuw, nalezen
    's.placement.3': "Ainda não assinei o contrato de estágio.", // nieuw, nalezen
    'c.placement.q': "Quando começas o estágio?", // nieuw, nalezen
    'c.placement.a': "Na segunda-feira. Primeiro assinamos o contrato de estágio.", // nieuw, nalezen
    'l.review': "Feedback sobre o teu estágio", // nieuw, nalezen
    'w.beoordeling': "a avaliação (se fazes bem o teu trabalho)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.leerdoel': "o objetivo de aprendizagem (o que queres aprender)", // nieuw, nalezen
    'w.voorbeeld': "o exemplo", // nieuw, nalezen
    'w.portfolio': "o portefólio (uma pasta com o teu trabalho e provas)", // nieuw, nalezen
    'w.cijfer': "a nota", // nieuw, nalezen
    'w.verslag': "o relatório (um texto sobre o teu trabalho)", // nieuw, nalezen
    's.review.1': "O que posso fazer melhor?", // nieuw, nalezen
    's.review.2': "Pode dar-me um exemplo?", // nieuw, nalezen
    's.review.3': "A minha avaliação é na próxima semana.", // nieuw, nalezen
    'c.review.q': "Tens de trabalhar mais depressa.", // nieuw, nalezen
    'c.review.a': "Está bem. Pode mostrar-me como fazer mais depressa?", // nieuw, nalezen
    'u.society': "Participar nos Países Baixos", // nieuw, nalezen
    'l.council': "O município e o voto", // nieuw, nalezen
    'w.stemmen': "votar", // nieuw, nalezen
    'w.verkiezing': "as eleições", // nieuw, nalezen
    'w.gemeenteraad': "a assembleia municipal (decide sobre a tua cidade)", // nieuw, nalezen
    'w.parlement': "o parlamento (faz as leis)", // nieuw, nalezen
    'w.stempas': "o cartão de voto (o cartão de que precisas para votar)", // nieuw, nalezen
    'w.burgemeester': "o presidente da câmara", // nieuw, nalezen
    's.council.1': "Posso votar?", // nieuw, nalezen
    's.council.2': "O meu cartão de voto chegou pelo correio.", // nieuw, nalezen
    's.council.3': "A assembleia municipal decide sobre o meu bairro.", // nieuw, nalezen
    'c.council.q': "Vais votar na quarta-feira?", // nieuw, nalezen
    'c.council.a': "Sim. Tenho o cartão de voto e o meu documento de identificação.", // nieuw, nalezen
    'l.police': "A polícia e os teus direitos", // nieuw, nalezen
    'w.agent': "o agente da polícia", // nieuw, nalezen
    'w.boete': "a multa (dinheiro que pagas como castigo)", // nieuw, nalezen
    'w.bezwaar': "a reclamação (dizes por escrito que não concordas)", // nieuw, nalezen
    'w.rechter': "o juiz, a juíza", // nieuw, nalezen
    'w.advocaat': "o advogado, a advogada", // nieuw, nalezen
    'w.wet': "a lei", // nieuw, nalezen
    's.police.1': "Levei uma multa.", // nieuw, nalezen
    's.police.2': "Quero fazer uma reclamação.", // nieuw, nalezen
    's.police.3': "Quero falar com um advogado.", // nieuw, nalezen
    'c.police.q': "Pode mostrar-me o seu documento de identificação?", // nieuw, nalezen
    'c.police.a': "Sim, aqui está. O que se passa?", // nieuw, nalezen
    'u.online': "Online no trabalho", // nieuw, nalezen
    'l.login': "Iniciar sessão", // nieuw, nalezen
    'w.uitloggen': "terminar sessão", // nieuw, nalezen
    'w.account': "a conta", // nieuw, nalezen
    'w.scherm': "o ecrã", // nieuw, nalezen
    'w.vergrendelen': "bloquear (um ecrã ou um telemóvel)", // nieuw, nalezen
    'w.gebruikersnaam': "o nome de utilizador", // nieuw, nalezen
    'w.inlogcode': "o código de acesso (um código por SMS ou numa app)", // nieuw, nalezen
    's.login.1': "Esqueci-me da minha palavra-passe.", // nieuw, nalezen
    's.login.2': "Termino sempre a sessão.", // nieuw, nalezen
    's.login.3': "Não dou o meu DigiD a ninguém.", // nieuw, nalezen
    'c.login.q': "Consegues iniciar sessão?", // nieuw, nalezen
    'c.login.a': "Não, a minha palavra-passe não funciona.", // nieuw, nalezen
    'l.phish': "E-mails falsos", // nieuw, nalezen
    'w.afzender': "o remetente", // nieuw, nalezen
    'w.klikken': "clicar", // nieuw, nalezen
    'w.bijlage': "o anexo", // nieuw, nalezen
    'w.verdacht': "suspeito", // nieuw, nalezen
    'w.ictafdeling': "o departamento de informática", // nieuw, nalezen
    'w.wijzigen': "alterar, mudar", // nieuw, nalezen
    's.phish.1': "Este e-mail é suspeito.", // nieuw, nalezen
    's.phish.2': "Não abro o anexo.", // nieuw, nalezen
    's.phish.3': "Altero já a minha palavra-passe.", // nieuw, nalezen
    'c.phish.q': "Clicaste no link?", // nieuw, nalezen
    'c.phish.a': "Sim. Vou ligar ao departamento de informática.", // nieuw, nalezen
    'l.mychoice': "Aquilo que sei fazer bem", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.goedin': "bom em (alguma coisa)", // nieuw, nalezen
    'w.kiezen': "escolher", // nieuw, nalezen
    'w.beroep': "a profissão, o tipo de trabalho", // nieuw, nalezen
    'w.bijbaan': "o part-time (um pequeno trabalho enquanto estudas)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "cuidadoso e rigoroso", // nieuw, nalezen
    'w.meeloopdag': "o dia de observação (um dia em que acompanhas alguém no trabalho)", // nieuw, nalezen
    's.mychoice.1': "Sei trabalhar bem com as mãos.", // nieuw, nalezen
    's.mychoice.2': "Gosto de trabalhar com pessoas.", // nieuw, nalezen
    's.mychoice.3': "Posso acompanhar-vos um dia, para ver o trabalho?", // nieuw, nalezen
    'c.mychoice.q': "Para que é que tens jeito?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.mychoice.a': "Tenho jeito para cuidar de pessoas. Em casa cuido da minha mãe.", // nieuw, nalezen
    'l.nextstep': "Depois do Entree", // nieuw, nalezen
    'w.niveau2': "o nível 2 (o nível seguinte do mbo)", // nieuw, nalezen
    'w.startkwalificatie': "a qualificação básica (um diploma mbo de nível 2 ou superior)", // nieuw, nalezen
    'w.bbl': "a bbl (trabalhas numa empresa e vais à escola mais ou menos um dia por semana)", // nieuw, nalezen
    'w.doorstromen': "continuar (para um nível mais alto)", // nieuw, nalezen
    'w.aanmelden': "inscrever-se (numa escola ou num curso)", // nieuw, nalezen
    'w.opendag': "o dia aberto (podes visitar uma escola)", // nieuw, nalezen
    's.nextstep.1': "Depois do Entree quero ir para o nível 2.", // nieuw, nalezen
    's.nextstep.2': "Quero trabalhar e estudar ao mesmo tempo.", // nieuw, nalezen
    's.nextstep.3': "Quando é o dia aberto?", // nieuw, nalezen
    'c.nextstep.q': "O que vais fazer depois do Entree?", // nieuw, nalezen
    'c.nextstep.a': "Quero fazer a bbl. Assim trabalho e estudo.", // nieuw, nalezen
    'l.email': "Escrever para o trabalho", // nieuw, nalezen
    'w.mail': "o e-mail", // nieuw, nalezen
    'w.onderwerp': "o assunto (de um e-mail)", // nieuw, nalezen
    'w.beste': "caro, cara (no início de uma carta ou de um e-mail)", // nieuw, nalezen
    'w.beleefd': "educado", // nieuw, nalezen
    'w.nalezen': "reler (verificar antes de enviar)", // nieuw, nalezen
    'w.versturen': "enviar", // nieuw, nalezen
    's.email.1': "O que ponho no assunto?", // nieuw, nalezen
    's.email.2': "Leio o meu e-mail mais uma vez.", // nieuw, nalezen
    's.email.3': "Envio o e-mail amanhã.", // nieuw, nalezen
    'c.email.q': "Já enviaste o e-mail sobre o teu dia de folga?", // nieuw, nalezen
    'c.email.a': "Ainda não. Primeiro vou relê-lo.", // nieuw, nalezen
    'l.budget': "O teu dinheiro todos os meses", // nieuw, nalezen
    'w.vastelasten': "as despesas fixas (renda, seguro, telemóvel: todos os meses)", // nieuw, nalezen
    'w.sparen': "poupar (dinheiro)", // nieuw, nalezen
    'w.abonnement': "a assinatura (pagas todos os meses)", // nieuw, nalezen
    'w.achterafbetalen': "pagar depois (compra agora, paga depois)", // nieuw, nalezen
    'w.bedenktijd': "o prazo de reflexão (tempo para mudar de ideias)", // nieuw, nalezen
    'w.garantie': "a garantia (tem de funcionar, senão têm de o arranjar)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.budget.1': "Primeiro pago as despesas fixas.", // nieuw, nalezen
    's.budget.2': "Poupo um pouco todos os meses.", // nieuw, nalezen
    's.budget.3': "Vou cancelar esta assinatura.", // nieuw, nalezen
    'c.budget.q': "Compra esse telemóvel agora e paga depois!", // nieuw, nalezen
    'c.budget.a': { m: "Não, obrigado. Pagar depois também é uma dívida.", f: "Não, obrigada. Pagar depois também é uma dívida.", x: "Não, obrigado / obrigada. Pagar depois também é uma dívida." }, // nieuw, nalezen
    'l.healthy': "Em forma para o trabalho", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "dormir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "o pequeno-almoço", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "mexer-se, estar ativo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "cansado", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "as drogas", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "em baixo (triste durante muito tempo)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Hoje estou muito cansado.", f: "Hoje estou muito cansada.", x: "Hoje sinto um grande cansaço." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Tomo sempre primeiro o pequeno-almoço.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.healthy.3': "Na pausa vou dar uma pequena volta a pé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "Queres um comprimido? Assim não adormeces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': { m: "Não, obrigado. Não trabalho sob efeito de nada.", f: "Não, obrigada. Não trabalho sob efeito de nada.", x: "Não, mas agradeço. Não trabalho sob efeito de nada." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Primeiro lê, depois começa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Antes de começares, lê a ordem de trabalho (werkbon) ou a tarefa na app. Verifica a morada, a tarefa e o número de coisas. Alguma coisa não está clara? Pergunta antes de começar, não a meio. Depois prepara as ferramentas e o material. Assim poupas tempo e fazes menos erros. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "A ordem de trabalho diz dez caixas. Está certo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "A tua ordem de trabalho diz: pintar o quarto 3. O teu colega diz que é o quarto 5. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Perguntas ao teu chefe qual é o quarto certo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Pintas o quarto 3, porque é o que diz a ordem de trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Pintas os dois quartos, assim não há erro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Quando duas coisas não batem certo, verificas antes de começar. Uma pergunta curta leva menos tempo do que fazer o trabalho outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Diz o que está feito e o que não está", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "O teu trabalho não acaba quando paras. Primeiro arruma o teu sítio e as tuas ferramentas. Depois pede a alguém para verificar o teu trabalho. Diz ao teu chefe o que está feito e o que não está. Alguma coisa correu mal ou está avariada? Diz agora, não amanhã. Avisar que terminaste faz parte do teu trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "O quarto quatro ainda não está pronto. A porta estava fechada à chave.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Limpaste cinco quartos. O quarto 4 estava fechado à chave. O teu turno acaba. O que fazes?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Dizes ao teu chefe: o quarto 4 não está feito.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Vais para casa: o quarto 4 estava fechado, a culpa não é tua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Escreves \"tudo feito\" na lista.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "O teu chefe planeia o trabalho. Quando sabe que o quarto 4 não está feito, pode mandar outra pessoa. Assim nenhum cliente encontra um quarto sujo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Olhos, ouvidos e fogo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Rebarbar, serrar e furar fazem faíscas, bocadinhos e muito barulho. Usa óculos de proteção e proteção auditiva, também para um trabalho curto. Quando há muito barulho, o teu empregador tem de te dar proteção auditiva. As faíscas podem provocar um incêndio. Para soldar, ou rebarbar perto de coisas que podem arder, há regras extra (heet werk): pergunta antes de começar. Depois do trabalho, apanha os bocadinhos de metal. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Vou rebarbar. Onde está a proteção auditiva?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Tens de rebarbar uma pequena peça de metal. Demora um minuto. Os teus óculos de proteção estão na outra sala. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Primeiro vais buscar os óculos, também para um minuto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Rebarbas com os olhos meio fechados, é rápido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Pões a outra mão à frente dos olhos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Uma faísca ou um bocadinho de metal no olho pode estragar-te o olho para sempre. Isso pode acontecer num segundo. Os óculos de proteção ajudam, também para um trabalho curto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Eletricidade: nunca à toa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Nunca trabalhes em algo que tem corrente (onder spanning). Primeiro um colega com formação torna tudo seguro: desliga a corrente e verifica. Só pessoas com a formação certa podem fazer isto. Vês um cabo ou uma ficha avariada? Não uses e diz logo ao teu chefe. Não sabes se a corrente está desligada? Então está ligada. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Vejo um cabo avariado. Quem pode ver isto?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Tens de pendurar uma lâmpada. Um colega diz: \"A corrente está desligada, acho eu.\" O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Pedes a um colega com formação que veja se não há corrente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Começas, mas pões luvas grossas para tocar nos fios.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Acendes e apagas a luz para ver se não há corrente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "\"Acho eu\" não chega com eletricidade. Um choque pode matar-te. Um colega com formação verifica que não há corrente, e depois podes começar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Seguro debaixo de um carro", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Nunca te ponhas debaixo de um carro que só está num macaco. O carro tem de estar bem firme no elevador ou em cavaletes. O óleo entornado deixa o chão escorregadio: limpa logo. O óleo usado, as baterias e os produtos de limpeza são resíduos perigosos. Vão para um sítio especial, nunca para o lixo normal nem para o esgoto. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Há óleo no chão. Vou limpar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Tens de ver por baixo de um carro que só está num macaco. Um colega diz: \"Não faz mal, despacha-te.\" O que fazes?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Esperas pelo elevador ou por cavaletes.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Vais lá para baixo depressa, com as pernas de fora.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Pedes ao colega que segure o carro.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Um macaco pode escorregar. Um carro é muito pesado, e debaixo dele não consegues sair depressa. Os cavaletes ou um elevador mantêm o carro no lugar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Trabalho extra? Primeiro pergunta ao cliente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "Encontras mais problemas do que diz a ordem de trabalho? Não os arranjes assim sem mais. O cliente tem de concordar primeiro com o trabalho extra e com os custos. O teu chefe ou a receção liga ao cliente. Um test drive só com autorização, e só com uma carta de condução válida. Escreve o que fizeste e que peças usaste. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Vejo mais um problema. Quem liga ao cliente?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Estás a mudar o óleo de um carro. Os travões também estão maus. Tem de estar pronto daqui a uma hora. O que fazes?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Dizes ao teu chefe, para ele ligar ao cliente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Arranjas também os travões, por segurança.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Não dizes nada: não estão na ordem de trabalho.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "O cliente paga, por isso o cliente decide. Sem o acordo dele, a garagem não pode fazer trabalho extra assim sem mais. Travões maus são perigosos, por isso é importante avisar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Primeiro assina, depois começa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "No Entree aprendes muito numa empresa: é o teu estágio (stage, ou bpv). Antes de começares, tu, a escola e a empresa assinam um contrato: o POK. Na empresa, ajuda-te o orientador (praktijkopleider). Na escola, ajuda-te o orientador de estágio (stagebegeleider). Estás doente? Liga para a empresa antes da hora de entrada, e avisa também a escola. As regras são diferentes em cada escola: pergunta ao teu orientador de estágio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Só começo quando o contrato de estágio estiver assinado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "A empresa pede-te para começares amanhã. O POK ainda não está assinado. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Pedes ao orientador de estágio que trate primeiro do POK.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Começas amanhã e assinas o POK quando tiveres tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Começas, mas por agora não dizes nada à escola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "O POK diz o que aprendes e quem te ajuda. Sem um POK assinado, o teu estágio pode não contar para o diploma. Por isso assinas antes de começar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Pede feedback, e um exemplo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "No estágio, as pessoas dizem-te o que corre bem e o que pode ser melhor: é o feedback. É normal, e ajuda-te a aprender. Não percebes? Pede um exemplo. Pede tu também feedback, por exemplo uma vez por semana. Alguma coisa corre mesmo mal no estágio? Primeiro fala com o orientador na empresa. Não ajuda? Então vai ter com o orientador de estágio da escola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "O que correu bem, e o que pode ser melhor?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "O teu orientador diz: \"Tens de trabalhar com mais cuidado.\" Não sabes o que ele quer dizer. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Pedes um exemplo do que tens de fazer de outra forma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Dizes que sim e esperas perceber sozinho.", f: "Dizes que sim e esperas perceber sozinha.", x: "Dizes que sim e esperas perceber por tua conta." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "A partir de agora trabalhas muito mais devagar, para nada correr mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Com um exemplo, sabes o que mudar. Perguntar mostra que queres aprender. Os orientadores gostam disso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Quem pode votar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "Nos Países Baixos escolhes, pelo voto, quem decide. A assembleia municipal (gemeenteraad) decide sobre a tua cidade. A Tweede Kamer faz as leis para todo o país. Com a nacionalidade neerlandesa, podes votar em todas as eleições, a partir dos 18 anos. Para a assembleia municipal podem votar mais pessoas. Pessoas de outro país da UE que vivem cá podem votar. Pessoas de fora da UE podem votar depois de 5 anos de residência legal. O município (gemeente) envia-te um cartão de voto (stempas). Leva-o com o teu documento de identificação. Não sabes se podes votar? Pergunta ao município.", // nagelezen AI 22 nov
    'c.council.p': "Posso votar para a assembleia municipal?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Vens de Marrocos e vives cá legalmente há seis anos, sem a nacionalidade neerlandesa. O que é verdade?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Podes votar para a assembleia municipal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Também podes votar para a Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Sem passaporte neerlandês não podes votar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "Depois de 5 anos de residência legal, podes votar para a assembleia municipal. Para a Tweede Kamer, precisas da nacionalidade neerlandesa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "O teu documento e os teus direitos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': { m: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebeste uma carta do município ou do UWV, por exemplo? Não concordas com a decisão que vem nela? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data que vem na carta. A polícia e o juiz têm de tratar todos por igual. Foste detido? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça.", f: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebeste uma carta do município ou do UWV, por exemplo? Não concordas com a decisão que vem nela? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data que vem na carta. A polícia e o juiz têm de tratar todos por igual. Foste detida? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça.", x: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebeste uma carta do município ou do UWV, por exemplo? Não concordas com a decisão que vem nela? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data que vem na carta. A polícia e o juiz têm de tratar todos por igual. A polícia prendeu-te? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça." }, // nagelezen AI 22 nov
    'c.police.p': "Não concordo com esta decisão. Vou fazer uma reclamação.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Recebes uma carta do município. Não concordas com a decisão deles. A carta diz que tens seis semanas. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Escreves uma carta de reclamação, antes da data.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Ligas-lhes uma vez e esperas que te liguem de volta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Esperas: depois de seis semanas, passa sozinho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "A reclamação faz-se por escrito, antes da data que vem na carta. Depois dessa data, muitas vezes é tarde demais. O Juridisch Loket pode ajudar-te a escrevê-la.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.login': "O teu acesso é só teu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "A tua palavra-passe e o teu DigiD são só para ti. Não os dês a ninguém, nem ao teu empregador nem a um colega. Num computador partilhado, termina sempre a sessão quando acabares. Vais sair um momento? Bloqueia o ecrã. Esqueceste-te da palavra-passe? Pede uma nova ao departamento de informática (ICT-afdeling). As regras dos computadores são diferentes em cada empresa: pergunta ao departamento de informática quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Vou sair um momento. Vou bloquear o ecrã.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "O teu chefe pede o teu DigiD e a tua palavra-passe para tratar depressa dos teus papéis. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Dizes que não, e entras tu enquanto ele ajuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Dás desta vez, porque é o teu chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Escreves num papel, para ele usar mais tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "Com o teu DigiD, alguém pode ver e mudar os teus impostos, subsídios e papéis de saúde. É só para ti. Podes entrar tu e deixar alguém ajudar-te.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Pressa e um botão? Não cliques", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Um e-mail falso (phishing) muitas vezes parece verdadeiro. Quer que ajas depressa: \"A tua conta vai ser fechada hoje!\" Verifica o remetente. Não cliques num link nem abras um anexo que não esperavas. Vai tu ao site ou à app verdadeira. Clicaste mesmo assim? Muda já a palavra-passe e liga ao departamento de informática. Não é vergonha: quanto mais cedo souberem, melhor. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "Cliquei num link suspeito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Clicaste num link de um e-mail e escreveste a tua palavra-passe. Depois vês que o e-mail era falso. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Mudas a palavra-passe e ligas à informática.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Apagas o e-mail, para mais ninguém clicar nele.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Esperas um dia para ver se corre alguma coisa mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Com a tua palavra-passe, outra pessoa pode entrar nos sistemas do teu trabalho. Se a mudares depressa e avisares a informática, eles podem parar isso a tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Os teus pontos fortes contam", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "Em que é que tens jeito? Pensa no trabalho, na escola e em casa. Cuidar da família, um part-time ou voluntariado também contam. Do que é que gostas, e do que é que não gostas? Não sabes que trabalho é para ti? Pede para acompanhar alguém no trabalho durante um dia (meeloopdag). O teu orientador na escola pode ajudar-te a escolher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Sei lidar bem com as pessoas. Em casa ajudo muito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "Na escola perguntam-te: \"Em que é que tens jeito?\" Nunca tiveste um trabalho pago. O que dizes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "O que fazes bem em casa, como cuidar dos outros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Que ainda não sabes, porque nunca tiveste emprego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Que consegues fazer qualquer trabalho, mesmo tudo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "O que fazes em casa também conta. Cuidar, planear e ajudar são competências de que os empregadores precisam. Diz o que fizeste, com um exemplo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Depois do Entree: nível 2 ou trabalho", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Com um diploma Entree, podes continuar para o nível 2 do mbo. Um diploma de nível 2 ou superior é uma qualificação básica (startkwalificatie). Ajuda-te a encontrar trabalho e a mantê-lo. Na bbl trabalhas numa empresa e vais à escola mais ou menos um dia por semana. Para isso precisas de um emprego ou de um lugar de trabalho e formação (leerwerkbaan). Vai a um dia aberto, e fala com o teu orientador na escola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Posso ir para o nível 2 depois do Entree?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Tens o teu diploma Entree. Uma empresa oferece-te um trabalho sem formação. Tu também queres continuar a aprender. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Perguntas à empresa se é possível um lugar na bbl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Aceitas o trabalho e deixas de estudar para sempre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Ficas em casa até uma escola te ligar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "Na bbl trabalhas e aprendes ao mesmo tempo. Ganhas dinheiro e recebes um diploma de nível 2. Muitas empresas gostam disso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Um e-mail curto: quem, o quê, quando", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Um e-mail para o trabalho é curto e educado. Começa com uma saudação, como \"Beste Karin,\". Depois diz o que queres, e quando. Termina com uma saudação e o teu nome completo. Escreve um assunto curto, como \"Vrij op vrijdag\". Lê o teu e-mail outra vez antes de o enviares.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Cara Karin, posso ter folga na sexta-feira? Cumprimentos, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Queres folga na próxima sexta-feira. Que e-mail para o teu chefe é o melhor?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "\"Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad\"", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "\"Vrijdag ben ik er niet.\" (sem saudação e sem o teu nome).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Um e-mail comprido sobre a tua semana, com a pergunta no fim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Um bom e-mail tem uma saudação, uma pergunta clara e o teu nome. Assim o teu chefe pode responder depressa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Primeiro as despesas fixas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Quando recebes o ordenado, paga primeiro as despesas fixas: a renda, o seguro e o telemóvel. Tenta poupar um pequeno valor todos os meses, nem que sejam 10 euros. Comprar agora e pagar depois também é uma dívida. Compraste alguma coisa online? Então normalmente podes mudar de ideias em 14 dias. Guarda o talão: precisas dele para a garantia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Prefiro pagar agora. Assim não tenho dívidas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Hoje recebes o ordenado. Queres uns sapatos novos, e a renda ainda não está paga. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Pagas primeiro a renda, e depois vês o que sobra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Compras os sapatos e pagas a renda mais tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Compras os sapatos com \"compra agora, paga depois\".", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "A renda, o seguro e o telemóvel voltam todos os meses. Se os pagares primeiro, sabes quanto dinheiro sobra. Assim não ficas com dívidas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Sono, comida e nada de drogas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': "Trabalhas melhor e com mais segurança quando dormes o suficiente, também depois de um turno tardio. Toma o pequeno-almoço e bebe água durante o dia. Mexe-te na pausa, por exemplo com uma pequena volta a pé. Trabalhar sob efeito de álcool ou drogas é perigoso, e a maioria dos empregadores proíbe isso. Sentes-te em baixo há muito tempo, ou não consegues parar de beber ou de consumir? Fala com o teu médico de família (huisarts). Ele pode ajudar, e guarda segredo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': "Sinto-me em baixo há muito tempo. Posso marcar uma consulta?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': "Esta noite tens turno da noite. Um colega oferece-te um comprimido para não adormeceres. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Dizes que não, e dormes umas horas antes do turno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Tomas meio comprimido, isso não é perigoso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Tomas, mas não dizes nada a ninguém no trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Comprimidos de um colega podem ser drogas. Podem fazer-te mal, ou fazer-te errar no trabalho. Dormir é a forma segura de te manteres alerta.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "Doença", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Trabalhar com alimentos", // nieuw, nalezen
    'w.mes': "a faca", // nieuw, nalezen
    'w.snijhandschoen': "a luva anticorte (uma luva contra cortes)", // nieuw, nalezen
    'w.vriescel': "a câmara de congelação (uma sala muito fria)", // nieuw, nalezen
    'w.sieraden': "as joias (um anel, um relógio, brincos)", // nieuw, nalezen
    'w.pleister': "o penso rápido (para um corte pequeno)", // nieuw, nalezen
    'w.vlees': "a carne", // nieuw, nalezen
    's.food.1': "Tiro as minhas joias.", // nieuw, nalezen
    's.food.2': "Onde estão as luvas anticorte?", // nieuw, nalezen
    's.food.3': "Na câmara de congelação uso um casaco quente.", // nieuw, nalezen
    'c.food.q': "Porque é que estamos a limpar a linha agora?", // nieuw, nalezen
    'c.food.a': "A seguir vem um produto sem frutos secos.", // nieuw, nalezen
    'c.food': "Mãos limpas, alimentos seguros", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Trabalhar com alimentos tem regras de higiene rigorosas: uma rede para o cabelo, roupa de trabalho limpa, mãos lavadas e nada de joias. Estas regras são iguais para todos. Não dizem nada sobre ti: mantêm os alimentos seguros para as pessoas que os comem. Com uma faca, usa sempre a tua luva anticorte. Numa sala fria ou numa câmara de congelação, veste a roupa quente que te dão, e aquece-te na pausa. Estás doente, ou tens uma ferida na mão? Avisa antes de começares. Então podes receber um penso especial, ou outro trabalho durante algum tempo. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Tenho um pequeno corte na mão. Pode dar-me um penso?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "Em casa fizeste um pequeno corte no dedo. Hoje trabalhas com carne. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Dizes ao teu chefe, e pedes um penso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Não dizes nada: é só um corte pequeno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Pões uma luva por cima, para ninguém ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Uma ferida pequena pode levar micróbios para os alimentos. Quando avisas, podes receber um penso especial ou outro trabalho durante algum tempo. Avisar é normal: ninguém te culpa por isso.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transporte e entregas", // nieuw, nalezen
    'l.parcel': "Entregar encomendas", // nieuw, nalezen
    'w.pakket': "a encomenda", // nieuw, nalezen
    'w.bestelbus': "a carrinha de entregas", // nieuw, nalezen
    'w.bezorgen': "entregar (levar ao cliente)", // nieuw, nalezen
    'w.inladen': "carregar (pôr coisas na carrinha)", // nieuw, nalezen
    'w.aanbellen': "tocar à campainha", // nieuw, nalezen
    'w.bewijs': "a prova (algo que mostra o que aconteceu)", // nieuw, nalezen
    's.parcel.1': "Leio cada encomenda com o scanner.", // nieuw, nalezen
    's.parcel.2': "O cliente não está em casa.", // nieuw, nalezen
    's.parcel.3': "Pode ficar com uma encomenda para os vizinhos?", // nieuw, nalezen
    'c.parcel.q': "Esta encomenda é para mim?", // nieuw, nalezen
    'c.parcel.a': "Sim. Pode assinar aqui, por favor?", // nieuw, nalezen
    'l.road': "Seguro e justo na estrada", // nieuw, nalezen
    'w.rijden': "conduzir", // nieuw, nalezen
    'w.zwaar': "pesado", // nieuw, nalezen
    'w.steekwagen': "o carrinho de carga (um carrinho para caixas pesadas)", // nieuw, nalezen
    'w.route': "a rota (o caminho que fazes)", // nieuw, nalezen
    'w.loondienst': "por conta de outrem (trabalhas para um patrão e recebes um salário)", // nieuw, nalezen
    'w.bepalen': "decidir (dizer como deve ser feito)", // nieuw, nalezen
    's.road.1': "Esta encomenda é pesada demais. Vou buscar o carrinho de carga.", // nieuw, nalezen
    's.road.2': "Está escorregadio. Conduzo devagar.", // nieuw, nalezen
    's.road.3': "Quem decide a minha rota e os meus horários?", // nieuw, nalezen
    'c.road.q': "Podes fazer mais uma volta hoje?", // nieuw, nalezen
    'c.road.a': "Não, assim não tenho tempo para a minha pausa.", // nieuw, nalezen
    'c.parcel': "Ninguém em casa, ou uma encomenda estragada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "O cliente não está em casa? Segue as regras da tua empresa: tenta os vizinhos, ou leva a encomenda de volta. Não a deixes simplesmente à porta, a não ser que o cliente o tenha pedido. Uma encomenda está estragada ou molhada? Não a entregues como se nada fosse. Tira uma foto como prova, e regista isso no scanner ou na app. Dizer a verdade sobre um problema é sempre melhor do que escondê-lo. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Esta encomenda está estragada. Aqui está uma foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "O cliente não está em casa, e os vizinhos também não. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Registas \"não está em casa\" no scanner, e levas a encomenda de volta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Registas como entregue, e deixas a encomenda à porta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Escondes a encomenda atrás do caixote do lixo, para ninguém ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Uma encomenda registada como entregue tem de estar mesmo com o cliente. Quando registas o que aconteceu de verdade, o cliente pode receber a encomenda mais tarde, e ninguém pensa que a perdeste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Seguro na estrada, e trabalho justo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Nunca tenhas o telemóvel na mão enquanto conduzes: é proibido. Usa um suporte para a navegação. Faz as tuas pausas, também num dia com muito trabalho. Uma encomenda pesada? Usa o carrinho de carga, ou levanta-a com outra pessoa. Gelo ou neve? Conduz devagar: chegar tarde é melhor do que um acidente. Algumas empresas dizem que trabalhas como independente (zelfstandig). Mas quem decide o teu horário, a tua rota e a tua roupa? Se a empresa decide tudo isso, talvez trabalhes afinal por conta de outrem (in loondienst). Então muitas vezes tens mais direitos, como receber salário quando estás doente. Mais sobre isto na lição \"Papéis, integração e o teu trabalho\". Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Agora faço a minha pausa. Depois continuo a conduzir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "A empresa diz que és independente. Mas decide o teu horário, a tua rota e a tua roupa. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Pedes conselho: talvez trabalhes por conta de outrem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Nada: o contrato diz \"independente\", por isso é assim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Trabalhas mais horas, para ganhares o mesmo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "O que conta é como trabalhas de verdade, não só a palavra no contrato. Se a empresa decide como, quando e onde trabalhas, muitas vezes trabalhas por conta de outrem. Então tens mais direitos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Sentir-se bem no trabalho", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "a pressão do trabalho (trabalho demais em pouco tempo)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "ficar acordado na cama (não consegues dormir)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "o trabalho por turnos (turnos da manhã, da tarde e da noite, alternados)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "as saudades de casa (sentes falta de casa)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "a família", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "sozinho", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Durmo mal por causa dos turnos.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': { m: "É demais. Não consigo sozinho.", f: "É demais. Não consigo sozinha.", x: "É demais. Não consigo sem ajuda." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Tenho saudades de casa. A minha família está longe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "Estás bem?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Não muito bem. Muitas vezes não consigo dormir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "É demais? Não tens de passar por isto sem ajuda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Toda a gente se sente às vezes cansada, stressada ou triste. Trabalho a mais (werkdruk), dormir mal por causa dos turnos ou ter saudades da família podem tornar tudo pesado. Não tens de carregar isso sem ajuda, e dizer \"é demais\" não é fraqueza. Fala com alguém de confiança. Por exemplo o teu chefe, o médico da empresa (bedrijfsarts) ou o teu médico de família (huisarts). Ou a pessoa de confiança (vertrouwenspersoon), se a tua empresa tiver uma. Também podes ser tu a pedir uma conversa com o médico da empresa. Os médicos não contam ao teu patrão o que disseste. Pensas em suicídio, ou preocupa-te alguém? Liga para o 113 (grátis, de dia e de noite), ou fala por chat em 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Não estou muito bem. Posso falar contigo um momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "Há semanas que dormes mal e o trabalho é demais. Sentes-te muito cansado. O que fazes?", f: "Há semanas que dormes mal e o trabalho é demais. Sentes-te muito cansada. O que fazes?", x: "Há semanas que dormes mal e o trabalho é demais. Sentes um grande cansaço. O que fazes?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Dizes ao teu chefe ou ao médico da empresa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Não dizes nada, e trabalhas mais e mais depressa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Ficas em casa, e não dizes a ninguém porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Dizer cedo não é fraqueza. Assim podem procurar juntos uma saída, por exemplo outros turnos. Não tens de fazer isto sem ajuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Voltar ao trabalho depois de uma doença", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "aumentar aos poucos (devagar, passo a passo)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "meios dias (trabalhas só uma parte do dia)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "o trabalho leve (não pesado)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "o trabalho pesado", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "recuperar, ficar bom outra vez", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "bem-vindo de volta", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Começo com meios dias.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Já consigo fazer trabalho leve. Trabalho pesado, ainda não.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "O médico da empresa diz: aumentar aos poucos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': { m: "Bem-vindo de volta! Estás melhor?", f: "Bem-vinda de volta! Estás melhor?", x: "Que bom teres voltado! Estás melhor?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Sim, está a correr melhor. Vou com calma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Voltar passo a passo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Estás melhor? Diz ao teu empregador que já podes trabalhar outra vez (betermelden). Depois de uma doença longa, muitas vezes começas passo a passo: primeiro menos horas, ou trabalho mais leve. O médico da empresa (bedrijfsarts) dá conselhos sobre o que consegues fazer. Estás doente há muito tempo? Então tu e o teu empregador fazem juntos um plano para o teu regresso. É o que diz a lei (Wet verbetering poortwachter). Diz claramente o que consegues fazer, e o que ainda não. Não tens de contar aos colegas que doença tiveste. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Isto já consigo fazer. Aquilo ainda não.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': "Estiveste doente três semanas. No teu primeiro dia de volta, o teu chefe pede-te para levantares caixas pesadas. O médico da empresa disse: por agora, só trabalho leve. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Dizes com calma que agora consegues fazer trabalho leve, e o que ainda não consegues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Levantas as caixas na mesma: não queres criar problemas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Vais para casa sem dizer nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "O teu chefe quer-te de volta, e com saúde. Quando dizes claramente o que consegues fazer, ele pode planear o trabalho. Fazer demasiado, cedo demais, pode fazer-te adoecer outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Medir", // nieuw, nalezen
    'w.rolmaat': "a fita métrica", // nieuw, nalezen
    'w.waterpas': "o nível (mostra se uma coisa está direita)", // nieuw, nalezen
    'w.meten': "medir", // nieuw, nalezen
    'w.rechtlijn': "direito (não torto)", // nieuw, nalezen
    'w.plank': "a tábua", // nieuw, nalezen
    'w.schroef': "o parafuso", // nieuw, nalezen
    's.measure.1': "Que comprimento tem esta tábua?", // nieuw, nalezen
    's.measure.2': "A parede não está direita.", // nieuw, nalezen
    's.measure.3': "Meço duas vezes.", // nieuw, nalezen
    'c.measure.q': "Que largura tem de ter?", // nieuw, nalezen
    'c.measure.a': "Noventa centímetros. Vou escrever.", // nieuw, nalezen
    'c.measure': "Mede duas vezes, serra uma", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Numa obra, as medidas são muitas vezes em milímetros. Por isso, \"novecentos\" pode querer dizer 90 centímetros. Não tens a certeza? Pergunta: \"São milímetros ou centímetros?\" Repete o número, e escreve-o. Mede duas vezes antes de serrar ou furar: uma tábua curta demais fica curta demais. Enganaste-te? Diz logo. Assim a equipa ainda pode corrigir, e custa menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "Isso é em milímetros ou em centímetros?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "O teu colega diz uma medida em voz alta. Não ouviste bem. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Repetes o número, e perguntas se está certo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Serras a tábua pela medida que achas que ouviste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Esperas até ele vir ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Uma medida errada custa material e tempo. Repetir o número demora dois segundos, e numa obra todos o fazem.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Uma obra arrumada", // nieuw, nalezen
    'w.bouwplaats': "a obra (o sítio onde se constrói)", // nieuw, nalezen
    'w.uitvoerder': "o encarregado da obra (quem manda na obra)", // nieuw, nalezen
    'w.keet': "a barraca da obra (para pausas e reuniões)", // nieuw, nalezen
    'w.afval': "o lixo, os resíduos", // nieuw, nalezen
    'w.container': "o contentor (um caixote muito grande para o lixo)", // nieuw, nalezen
    'w.struikelen': "tropeçar (cair por causa de uma coisa no chão)", // nieuw, nalezen
    's.siteday.1': "O lixo vai para o contentor.", // nieuw, nalezen
    's.siteday.2': "O encarregado está na barraca da obra.", // nieuw, nalezen
    's.siteday.3': "Cuidado, aqui podes tropeçar.", // nieuw, nalezen
    'c.siteday.q': "Para onde vai esta madeira?", // nieuw, nalezen
    'c.siteday.a': "Para o contentor que está à entrada.", // nieuw, nalezen
    'c.siteday': "Uma obra arrumada é uma obra segura", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Numa obra, arrumar faz parte do trabalho, para todos. Tábuas soltas, cabos e lixo fazem as pessoas tropeçar e cair. Por isso, arruma o teu lugar durante o dia, não só no fim. O lixo é separado: madeira, pedra e metal vão muitas vezes para contentores diferentes. Não sabes qual? Pergunta. Vês um prego de fora, ou um buraco sem tampa? Resolve tu, se o puderes fazer em segurança, ou diz ao encarregado da obra (de uitvoerder). As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Eu arrumo isto. Assim ninguém tropeça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Há tábuas com pregos no caminho. Não são tuas. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Põe-las de lado, ou dizes ao encarregado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Passas por cima: as tábuas não são tuas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Esperas: outra pessoa vai arrumá-las.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Todos usam os mesmos caminhos. Quem vê um perigo faz alguma coisa: isso é normal numa obra.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Passar o turno", // nieuw, nalezen
    'w.vroegedienst': "o turno da manhã", // nieuw, nalezen
    'w.latedienst': "o turno da tarde", // nieuw, nalezen
    'w.nachtdienst': "o turno da noite", // nieuw, nalezen
    'w.overdracht': "a passagem de turno (contas ao turno seguinte o que aconteceu)", // nieuw, nalezen
    'w.aflossen': "render (a pessoa seguinte chega, e tu podes ir)", // nieuw, nalezen
    'w.teamleider': "o chefe de equipa", // nieuw, nalezen
    's.shifts.1': "Esta semana tenho o turno da tarde.", // nieuw, nalezen
    's.shifts.2': "Quem me vem render?", // nieuw, nalezen
    's.shifts.3': "A máquina dois teve uma avaria.", // nieuw, nalezen
    'c.shifts.q': "Aconteceu alguma coisa no teu turno?", // nieuw, nalezen
    'c.shifts.a': "Sim. A linha esteve parada meia hora.", // nieuw, nalezen
    'c.shifts': "Conta ao turno seguinte", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Uma fábrica trabalha muitas vezes dia e noite, por turnos. No fim do teu turno, um colega fica no teu lugar. Não te vás logo embora: espera até o teu colega chegar. Conta em poucas palavras o que aconteceu: uma avaria, um produto que saiu mal, uma coisa que não ficou acabada. Muitas empresas também têm uma lista ou um ecrã para isto. Um problema que não passas volta no turno seguinte, e então ninguém sabe porquê. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "A máquina teve uma avaria. Agora já funciona outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "O teu turno acabou. O teu colega está cinco minutos atrasado. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Esperas, e avisas o chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Vais para casa: o teu turno acabou.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Paras a máquina e vais-te embora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Uma máquina a trabalhar não pode ficar sem ninguém. Quando esperas e avisas, o trabalho continua em segurança, e o chefe de equipa pode resolver.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Diz o que vês", // nieuw, nalezen
    'w.duizelig': "com tonturas", // nieuw, nalezen
    'w.misselijk': "enjoado (com vontade de vomitar)", // nieuw, nalezen
    'w.benauwd': "com falta de ar", // nieuw, nalezen
    'w.koorts': "a febre", // nieuw, nalezen
    'w.verward': "confuso (a pessoa não sabe onde está)", // nieuw, nalezen
    'w.anders': "diferente (não como é normal)", // nieuw, nalezen
    's.signals.1': "A senhora está com tonturas.", // nieuw, nalezen
    's.signals.2': "O senhor hoje não come.", // nieuw, nalezen
    's.signals.3': "Podes vir ver um momento?", // nieuw, nalezen
    'c.signals.q': "Como está o senhor Jansen?", // nieuw, nalezen
    'c.signals.a': "Está confuso. Ontem não estava assim.", // nieuw, nalezen
    'c.signals': "Tu vês o cliente todos os dias", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Muitas vezes és tu quem mais vê o cliente. Por isso és a primeira pessoa a notar quando algo está diferente: come menos, tem mais dores, está confuso, tem falta de ar. Não tens de saber o que é. Diz o que vês, e diz quando o viste. Conta à enfermeira no mesmo dia, e escreve-o se essa for a tua tarefa. Parece grave? Não esperes: chama logo a enfermeira. Mais vale uma vez a mais do que uma vez a menos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "A senhora não come e está com tonturas. Não é como costuma ser.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Uma cliente hoje está calada e não quer comer. Normalmente fala muito. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Dizes à enfermeira o que vês, hoje.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Esperas uns dias: talvez passe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Dás-lhe um comprimido do armário.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Uma pequena mudança pode ser o primeiro sinal de uma doença. Não és tu que decides o que é: é a enfermeira. Mas ela só pode fazer alguma coisa se tu lhe contares.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Ajudar alguém a levantar-se", // nieuw, nalezen
    'w.tillift': "o elevador de transferência (uma máquina que levanta uma pessoa)", // nieuw, nalezen
    'w.rollator': "o andarilho com rodas", // nieuw, nalezen
    'w.bed': "a cama", // nieuw, nalezen
    'w.opstaan': "levantar-se, pôr-se de pé", // nieuw, nalezen
    'w.gaanzitten': "sentar-se", // nieuw, nalezen
    'w.voorzichtig': "com cuidado, com jeito", // nieuw, nalezen
    's.transfer.1': "Eu ajudo-o a levantar-se.", // nieuw, nalezen
    's.transfer.2': "Quer sentar-se um bocadinho?", // nieuw, nalezen
    's.transfer.3': "Primeiro vou buscar o elevador de transferência.", // nieuw, nalezen
    'c.transfer.q': "Podes tirar a senhora da cama?", // nieuw, nalezen
    'c.transfer.a': { m: "Sozinho não. Vou buscar o elevador de transferência.", f: "Sozinha não. Vou buscar o elevador de transferência.", x: "Sem ajuda não. Vou buscar o elevador de transferência." }, // nieuw, nalezen
    'c.transfer': "Primeiro dizer, depois ajudar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Antes de tocares num cliente, diz o que vais fazer: \"Ik help u nu met opstaan.\" Assim o cliente não se assusta, e pode ajudar. Deixa o cliente fazer o que ainda consegue fazer: isso mantém-no forte. Não levantes uma pessoa sem ajuda. Usa os equipamentos que existem, como o elevador de transferência, e trabalha como te mostraram. Ainda não te mostraram? Pergunta primeiro. As tuas costas têm de durar uma vida inteira de trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Agora vou ajudá-lo a levantar-se. Podemos começar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Uma cliente quer sair da cama. Ainda não aprendeste a usar o elevador de transferência. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Pedes ajuda a um colega que conhece o elevador.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Levanta-la tu: ela não é pesada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Experimentas o elevador: não deve ser difícil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Levantar mal uma pessoa pode magoar o cliente e as tuas costas. Pedir ajuda a um colega demora uns minutos. Uma queda pode demorar meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Lavar a loiça", // nieuw, nalezen
    'w.afwas': "a loiça para lavar", // nieuw, nalezen
    'w.vaatwasser': "a máquina de lavar loiça", // nieuw, nalezen
    'w.bord': "o prato", // nieuw, nalezen
    'w.glas': "o copo, o vidro", // nieuw, nalezen
    'w.bestek': "os talheres (faca, garfo e colher)", // nieuw, nalezen
    'w.afdrogen': "limpar, secar (com um pano)", // nieuw, nalezen
    's.dishes.1': "A máquina de lavar loiça já acabou.", // nieuw, nalezen
    's.dishes.2': "Cuidado, partiu-se um copo.", // nieuw, nalezen
    's.dishes.3': "Já não há talheres limpos.", // nieuw, nalezen
    'c.dishes.q': "Ainda há copos limpos?", // nieuw, nalezen
    'c.dishes.a': "Sim, levo-os já.", // nieuw, nalezen
    'c.dishes': "Vidro partido: diz logo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "Numa cozinha, o vidro parte-se. É normal, e ninguém se zanga por isso. Mas diz logo, alto e claro: \"Glas!\" Não apanhes os cacos com as mãos: usa uma escova. Caiu vidro perto de comida, ou no gelo? Então essa comida ou esse gelo tem de ir para o lixo, tudo. Um bocadinho de vidro numa refeição é muito perigoso para um cliente. O vidro vai para um caixote próprio, não para um saco que alguém levanta. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Cuidado, vidro! Eu limpo já.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Um copo parte-se por cima do gelo para as bebidas. Há muito trabalho. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Dizes logo, e deitas fora o gelo todo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Tiras os cacos que consegues ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Não dizes nada: agora há trabalho demais.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "No gelo, não se veem os bocadinhos de vidro. Gelo novo custa pouco. Um cliente com vidro na bebida pode ficar muito ferido.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Quando há muito trabalho", // nieuw, nalezen
    'w.heet': "muito quente", // nieuw, nalezen
    'w.chef': "o chefe de cozinha (quem manda na cozinha)", // nieuw, nalezen
    'w.terras': "a esplanada (mesas lá fora)", // nieuw, nalezen
    'w.tafel': "a mesa", // nieuw, nalezen
    'w.dienblad': "o tabuleiro", // nieuw, nalezen
    'w.wachten': "esperar", // nieuw, nalezen
    's.rush.1': "Quente! Vou passar por trás de ti.", // nieuw, nalezen
    's.rush.2': "A mesa seis está à espera da comida.", // nieuw, nalezen
    's.rush.3': "Levo isto para a esplanada.", // nieuw, nalezen
    'c.rush.q': "Podes tratar da mesa quatro?", // nieuw, nalezen
    'c.rush.a': "Sim, chefe. Já vou.", // nieuw, nalezen
    'c.rush': "Palavras curtas quando há muito trabalho", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Quando há muito trabalho, as pessoas numa cozinha falam com palavras curtas: \"Heet!\", \"Achter!\", \"Tafel zes!\" Isso não é falta de educação. É rápido e seguro: todos sabem onde estão os tachos quentes e as facas. Grita tu também \"Heet!\" ou \"Achter!\" quando passas por trás de alguém. Ouviste uma ordem? Repete: \"Ja, chef.\" Assim o chefe de cozinha sabe que ouviste. Alguém foi seco contigo na hora de mais trabalho? Muitas vezes isso passa depois do serviço. Continua a ser desagradável? Então fala sobre isso num momento calmo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Atrás! Trago um tacho quente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Há muito trabalho. O chefe de cozinha grita: \"Tafel zes, nu!\" Não diz \"por favor\". O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Dizes \"Ja, chef\", e fazes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Paras, e dizes que ele é mal-educado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Fazes, mas não respondes nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Na hora de mais trabalho, falar curto é normal e não é nada contra ti. Repetir mostra que ouviste. Assim a cozinha continua rápida e segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "A tua ronda", // nieuw, nalezen
    'w.kantoor': "o escritório", // nieuw, nalezen
    'w.verdieping': "o andar (o 1.º ou o 2.º andar de um edifício)", // nieuw, nalezen
    'w.gang': "o corredor", // nieuw, nalezen
    'w.toiletpapier': "o papel higiénico", // nieuw, nalezen
    'w.zeep': "o sabão, o sabonete", // nieuw, nalezen
    'w.bijvullen': "encher outra vez, repor", // nieuw, nalezen
    's.rounds.1': "Começo no segundo andar.", // nieuw, nalezen
    's.rounds.2': "O papel higiénico acabou.", // nieuw, nalezen
    's.rounds.3': "Estou a repor o sabonete.", // nieuw, nalezen
    'c.rounds.q': "Já fizeste o escritório três?", // nieuw, nalezen
    'c.rounds.a': "Não, ainda está lá uma pessoa a trabalhar.", // nieuw, nalezen
    'c.rounds': "Limpar onde as pessoas trabalham", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Muitas vezes limpas enquanto outras pessoas ainda estão a trabalhar. Cumprimenta-as, e pergunta: \"Mag ik hier even schoonmaken?\" A maioria das pessoas diz que sim. Alguém está numa reunião ou ao telefone? Então volta mais tarde. Não mexas nos papéis de uma secretária, e não os leias: limpa à volta deles. Tens um tempo fixo para a tua ronda. O tempo é curto demais para fazer bem? Não saltes salas sem dizer nada. Diz ao teu chefe o que não conseguiste fazer, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Boa tarde. Posso limpar aqui um momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Hoje a tua ronda demora mais: uma sala estava muito suja. Faltam dois escritórios. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Dizes ao teu chefe quais são os dois, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Vais para casa, e esperas que ninguém veja.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Fazes os dois muito depressa, sem o chão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Um cliente que encontra um escritório sujo faz queixa. Um chefe que sabe o que aconteceu pode explicar, ou dar-te mais tempo. Avisar não é falhar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Cores e panos", // nieuw, nalezen
    'w.doek': "o pano", // nieuw, nalezen
    'w.spons': "a esponja", // nieuw, nalezen
    'w.rood': "vermelho", // nieuw, nalezen
    'w.blauw': "azul", // nieuw, nalezen
    'w.geel': "amarelo", // nieuw, nalezen
    'w.groen': "verde", // nieuw, nalezen
    's.colours.1': "O pano vermelho é para a casa de banho.", // nieuw, nalezen
    's.colours.2': "Pega num pano limpo.", // nieuw, nalezen
    's.colours.3': "Que cor uso aqui?", // nieuw, nalezen
    'c.colours.q': "Posso usar este pano para a secretária?", // nieuw, nalezen
    'c.colours.a': "Não, o vermelho é só para a casa de banho.", // nieuw, nalezen
    'c.colours': "Cada cor tem o seu sítio", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Muitas empresas de limpeza trabalham com cores. Cada cor de pano, esponja e balde é para um só sítio. Muitas vezes o vermelho é para a casa de banho, e o azul é para secretárias e mesas. Assim, a sujidade da casa de banho não vai parar a uma secretária ou a uma cozinha. As cores podem ser diferentes em cada empresa, por isso pergunta no teu primeiro dia. Um pano está sujo, ou caiu ao chão? Pega num limpo. Os panos usados vão para o saco da roupa suja, não voltam para o carrinho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Aqui, que cor é para a casa de banho?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Os teus panos azuis acabaram. Ainda tens de limpar três secretárias. Só tens panos vermelhos. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Primeiro vais buscar panos azuis novos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Usas um pano vermelho: limpo é limpo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Usas outra vez um pano azul para as três.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Um sistema de cores só funciona quando todos o seguem sempre. Assim ninguém tem de pensar onde é que um pano já esteve.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Ajudar um cliente", // nieuw, nalezen
    'w.aanbieding': "a promoção (mais barato durante pouco tempo)", // nieuw, nalezen
    'w.korting': "o desconto (pagas menos)", // nieuw, nalezen
    'w.uitverkocht': "esgotado", // nieuw, nalezen
    'w.magazijn': "o armazém", // nieuw, nalezen
    'w.tas': "o saco", // nieuw, nalezen
    'w.bestellen': "encomendar", // nieuw, nalezen
    's.shophelp.1': "Infelizmente, isso está esgotado.", // nieuw, nalezen
    's.shophelp.2': "Quer um saco?", // nieuw, nalezen
    's.shophelp.3': "Este café está em promoção.", // nieuw, nalezen
    'c.shophelp.q': "Ainda tem leite?", // nieuw, nalezen
    'c.shophelp.a': "Vou ver ao armazém.", // nieuw, nalezen
    'c.shophelp': "\"Não sei\" não é o fim", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Um cliente pergunta uma coisa e tu não sabes a resposta. Não faz mal: ninguém sabe tudo. Mas não digas só \"nee\" ou \"weet ik niet\", e não te vás embora. Diz: \"Ik vraag het even voor u\", e vai chamar um colega. Um produto está esgotado? Diz quando volta a chegar, ou mostra uma coisa parecida. Olha para o cliente e cumprimenta-o, também quando estás a repor as prateleiras. Não percebeste a pergunta? Pede ao cliente para repetir, devagar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Isso não sei. Vou perguntar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Uma cliente pede um produto. Não conheces a palavra. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Dizes: \"Ik vraag het even voor u.\"", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Dizes \"nee\", e continuas a trabalhar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Apontas para um sítio qualquer, para ela se ir embora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Um cliente não se importa que sejas uma pessoa nova ou que ainda estejas a aprender neerlandês. Um cliente importa-se, sim, de ficar sem ajuda. Ir chamar um colega é bom serviço.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Momentos difíceis", // nieuw, nalezen
    'w.bedrijfsleider': "o gerente da loja", // nieuw, nalezen
    'w.beveiliger': "o segurança", // nieuw, nalezen
    'w.dief': "o ladrão", // nieuw, nalezen
    'w.stelen': "roubar", // nieuw, nalezen
    'w.schreeuwen': "gritar", // nieuw, nalezen
    'w.geldterug': "o dinheiro de volta", // nieuw, nalezen
    's.shoptrouble.1': "Vou chamar o gerente.", // nieuw, nalezen
    's.shoptrouble.2': "Não grite, por favor.", // nieuw, nalezen
    's.shoptrouble.3': "Acho que alguém está a roubar uma coisa.", // nieuw, nalezen
    'c.shoptrouble.q': "Quero o meu dinheiro de volta, já!", // nieuw, nalezen
    'c.shoptrouble.a': "Compreendo. Vou chamar o meu colega.", // nieuw, nalezen
    'c.shoptrouble': "Um cliente zangado ou um ladrão: primeiro estás tu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Às vezes um cliente fica zangado, ou vês alguém a roubar. A tua segurança está primeiro, sempre. Com um cliente zangado: mantém a calma, não grites de volta, e vai chamar o gerente da loja. Não tens de resolver isso sem ajuda. Vês um ladrão? Não corras atrás dele, não o agarres, e não tapes a porta. Olha bem para o que vês, e diz logo ao gerente ou ao segurança. As coisas podem ser substituídas. Tu não. Ficaste com medo depois? Fala sobre isso com o teu chefe. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Vejo uma pessoa a meter uma coisa no saco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Um homem mete uma garrafa debaixo do casaco e vai para a saída. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Dizes ao gerente ou ao segurança.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Corres atrás dele e agarras-lhe o braço.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Pões-te à frente da porta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Um ladrão que é parado pode ficar violento. O gerente e o segurança sabem o que fazer. Nenhum produto vale um ferimento.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Cuidar da planta", // nieuw, nalezen
    'w.plantblad': "a folha (de uma planta)", // nieuw, nalezen
    'w.stengel': "o caule", // nieuw, nalezen
    'w.bloem': "a flor", // nieuw, nalezen
    'w.knippen': "cortar (com uma tesoura)", // nieuw, nalezen
    'w.tomaat': "o tomate", // nieuw, nalezen
    'w.rijp': "maduro (pronto para apanhar)", // nieuw, nalezen
    's.plantcare.1': "Este tomate ainda não está maduro.", // nieuw, nalezen
    's.plantcare.2': "Estou a cortar a folha.", // nieuw, nalezen
    's.plantcare.3': "O caule está partido.", // nieuw, nalezen
    'c.plantcare.q': "Que tomates apanho?", // nieuw, nalezen
    'c.plantcare.a': "Só os vermelhos. Os verdes ainda não estão maduros.", // nieuw, nalezen
    'c.plantcare': "Mãos limpas, plantas saudáveis", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "As plantas também podem ficar doentes. Um vírus passa de planta para planta pelas mãos, luvas, facas e roupa. Numa estufa, uma planta doente pode querer dizer que milhares de plantas têm de ir fora. Por isso há regras rigorosas à porta: lava as mãos, veste a roupa de trabalho da empresa, e passa pelo banho de desinfeção para os pés. Muitas estufas não deixam trazer os teus próprios tomates, pimentos ou pepinos no almoço. Vês uma planta com um aspeto estranho? Não lhe toques. Diz ao teu chefe em que fila está. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "Há uma planta doente na fila doze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Vês uma planta com manchas amarelas estranhas. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Deixas a planta, e dizes ao teu chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Arrancas a planta e levas contigo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Cortas as folhas com manchas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Quando tocas numa planta doente, o vírus vai contigo para as plantas seguintes. O teu chefe sabe como tirá-la em segurança.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Trabalhar ao ar livre", // nieuw, nalezen
    'w.land': "o campo (onde as plantas crescem ao ar livre)", // nieuw, nalezen
    'w.regen': "a chuva", // nieuw, nalezen
    'w.zon': "o sol", // nieuw, nalezen
    'w.laarzen': "as botas", // nieuw, nalezen
    'w.regenpak': "o fato de chuva (casaco e calças contra a chuva)", // nieuw, nalezen
    'w.onweer': "a trovoada", // nieuw, nalezen
    's.outdoors.1': "Está a chover. Vou vestir o fato de chuva.", // nieuw, nalezen
    's.outdoors.2': "As minhas botas estão molhadas.", // nieuw, nalezen
    's.outdoors.3': "Hoje o sol está forte.", // nieuw, nalezen
    'c.outdoors.q': "Vem aí trovoada. O que fazemos?", // nieuw, nalezen
    'c.outdoors.a': "Paramos e vamos para dentro.", // nieuw, nalezen
    'c.outdoors': "Sol, chuva e trovoada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Lá fora, trabalhas com todo o tipo de tempo. Ao sol: tapa a cabeça e a pele, usa protetor solar, e bebe água muitas vezes. À chuva: veste o fato de chuva e as botas, e põe roupa seca na pausa. O molhado e o frio fazem-te adoecer e trabalhar mais devagar. Há trovoada? Então para e vai para dentro, ou para um carro ou uma carrinha. Não debaixo de uma árvore, nem num campo aberto. Precisas de roupa de chuva ou de botas para o trabalho? Pergunta ao teu empregador antes de as comprares tu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Vai haver trovoada. Vamos para dentro?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Estás no campo. Ouves trovões perto. A tua fila está quase acabada. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Paras, e vais para dentro ou para a carrinha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Primeiro acabas a fila depressa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Esperas debaixo da árvore grande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "O raio cai no ponto mais alto, e num campo plano esse ponto és tu. A fila pode esperar um quarto de hora.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "O desenho e a medida", // nieuw, nalezen
    'w.tekening': "o desenho (mostra como a peça tem de ser)", // nieuw, nalezen
    'w.maat': "a medida", // nieuw, nalezen
    'w.millimeter': "o milímetro", // nieuw, nalezen
    'w.schuifmaat': "o paquímetro (mede com muita precisão)", // nieuw, nalezen
    'w.passen': "encaixar, caber", // nieuw, nalezen
    'w.bout': "o parafuso com porca", // nieuw, nalezen
    's.drawing.1': "Qual é a medida no desenho?", // nieuw, nalezen
    's.drawing.2': "Esta peça não encaixa.", // nieuw, nalezen
    's.drawing.3': "Tem dois milímetros a mais.", // nieuw, nalezen
    'c.drawing.q': "O parafuso encaixa?", // nieuw, nalezen
    'c.drawing.a': "Não. Vou medir mais uma vez.", // nieuw, nalezen
    'c.drawing': "O desenho é que manda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "Numa oficina fazes o que diz o desenho, não o que parece mais ou menos bem. As medidas são em milímetros, e um milímetro pode ser demais. Uma peça não encaixa? Não faças força, e não alargues o furo \"só um bocadinho\". Mede outra vez, e olha para o desenho. Não consegues ler o desenho, ou falta uma medida? Pergunta antes de começares. Uma pergunta custa um minuto. Uma peça errada custa material e horas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Não consigo ler esta medida. Podes ver?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Uma peça não encaixa: tem um milímetro a mais. Com um martelo, entrava. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Medes outra vez, e perguntas o que fazer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Metes a peça à martelada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Rebarbas um bocadinho, e não dizes nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Uma peça que entra à força pode partir-se mais tarde, no cliente. Quando avisas, pode-se encontrar a causa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Soldar e trabalho a quente", // nieuw, nalezen
    'w.lassen': "soldar (juntar metal com muito calor)", // nieuw, nalezen
    'w.laskap': "a máscara de soldar", // nieuw, nalezen
    'w.rook': "o fumo", // nieuw, nalezen
    'w.afzuiging': "a extração (tira o fumo)", // nieuw, nalezen
    'w.afkoelen': "arrefecer", // nieuw, nalezen
    'w.brandwond': "a queimadura (uma ferida feita pelo calor)", // nieuw, nalezen
    's.weld.1': "Vou pôr a máscara de soldar.", // nieuw, nalezen
    's.weld.2': "Liga a extração.", // nieuw, nalezen
    's.weld.3': "Cuidado, o metal ainda está quente.", // nieuw, nalezen
    'c.weld.q': "Já posso pegar nisto?", // nieuw, nalezen
    'c.weld.a': "Não, espera. Primeiro tem de arrefecer.", // nieuw, nalezen
    'c.weld': "O metal quente parece frio", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Soldar dá uma luz muito forte. Não olhes para ela sem máscara de soldar, nem de longe: os teus olhos podem queimar-se, e só o sentes horas depois. Um colega está a soldar perto de ti? Olha para outro lado, ou fica atrás do painel de proteção. O metal que acabou de ser soldado ou rebarbado parece normal, mas está muito quente. Não lhe pegues com as mãos sem luvas. O fumo da soldadura faz mal aos pulmões: liga a extração. Uma queimadura? Arrefece-a logo com água, durante pelo menos dez minutos, e avisa. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Isto já arrefeceu?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Um colega está a soldar ao teu lado. Não tens máscara de soldar. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Olhas para outro lado, e ficas atrás do painel de proteção.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Ficas a ver um bocadinho: assim aprendes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Fechas os olhos até meio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "A luz da soldadura queima os olhos, também de lado e de longe. Só sentes a dor mais tarde, muitas vezes à noite.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Peças do carro", // nieuw, nalezen
    'w.motor': "o motor", // nieuw, nalezen
    'w.motorkap': "o capô (a tampa por cima do motor)", // nieuw, nalezen
    'w.rem': "o travão", // nieuw, nalezen
    'w.lamp': "a luz, a lâmpada", // nieuw, nalezen
    'w.ruitenwisser': "o limpa-para-brisas", // nieuw, nalezen
    'w.stoel': "o banco, a cadeira", // nieuw, nalezen
    's.carparts.1': "Abre o capô.", // nieuw, nalezen
    's.carparts.2': "A luz da frente, do lado esquerdo, está avariada.", // nieuw, nalezen
    's.carparts.3': "Os travões fazem barulho.", // nieuw, nalezen
    'c.carparts.q': "O que ouves?", // nieuw, nalezen
    'c.carparts.a': "O motor faz um barulho estranho.", // nieuw, nalezen
    'c.carparts': "O carro é do cliente", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Um carro na garagem não é teu: é do cliente. Põe uma capa no banco e no volante antes de entrares, e trabalha com as mãos limpas lá dentro. Deixa o banco, os espelhos e o rádio como estavam. Tiveste de mexer no banco? Põe-no como estava. Não toques nas coisas pessoais que estão no carro. Fizeste um risco ou uma mancha? Diz logo ao teu chefe. Um cliente que descobre isso em casa não volta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "Fiz um risco. Peço desculpa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Fazes um pequeno risco na porta do carro de um cliente. Ninguém viu. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Dizes logo ao teu chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Não dizes nada: é muito pequeno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Esfregas com um pano, e esperas que saia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Todos se enganam de vez em quando. Uma garagem pode arranjar um risco, ou dizer a verdade ao cliente. Um risco escondido custa à garagem o seu bom nome.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Gasolina, gás e corrente", // nieuw, nalezen
    'w.krik': "o macaco (levanta um lado do carro)", // nieuw, nalezen
    'w.benzine': "a gasolina", // nieuw, nalezen
    'w.elektrischeauto': "o carro elétrico", // nieuw, nalezen
    'w.oranje': "cor de laranja", // nieuw, nalezen
    'w.morsen': "entornar", // nieuw, nalezen
    'w.lap': "o trapo (um pano para trabalho sujo)", // nieuw, nalezen
    's.carsafe.1': "Cheira-me a gasolina.", // nieuw, nalezen
    's.carsafe.2': "Entornou-se óleo. Vou buscar um trapo.", // nieuw, nalezen
    's.carsafe.3': "Não toco nos cabos cor de laranja.", // nieuw, nalezen
    'c.carsafe.q': "Posso trabalhar neste carro?", // nieuw, nalezen
    'c.carsafe.a': "Ainda não. É um carro elétrico.", // nieuw, nalezen
    'c.carsafe': "Cabos cor de laranja e motores a trabalhar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Um carro elétrico ou híbrido tem uma bateria com uma corrente muito forte. Os cabos dela são cor de laranja. Não lhes toques nem os desligues: primeiro um mecânico com formação especial tem de tornar o carro seguro. Há uma placa ou um cone junto ao carro? Então fica longe. Um motor a trabalhar num sítio fechado faz um gás que não se cheira nem se vê, e que pode matar. Por isso: liga a mangueira de escape, ou abre as portas. Cheira a gasolina? Nada de faíscas e nada de fumar. Diz logo ao teu chefe. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Este carro já está seguro?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Tens de trocar uma roda num carro elétrico. Debaixo do carro vês um cabo cor de laranja solto. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Não tocas em nada, e vais chamar o mecânico com formação.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Empurras o cabo para o sítio com a mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Empurras o cabo para o sítio com um pano seco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "A bateria de um carro elétrico tem corrente suficiente para matar, mesmo com o carro desligado. Só quem tem a formação pode tocar nestas peças.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Verificar a carrinha", // nieuw, nalezen
    'w.schade': "o dano", // nieuw, nalezen
    'w.deuk': "a amolgadela", // nieuw, nalezen
    'w.spiegel': "o espelho", // nieuw, nalezen
    'w.tanken': "abastecer (pôr combustível na carrinha)", // nieuw, nalezen
    'w.opladen': "carregar (uma carrinha elétrica, um telemóvel)", // nieuw, nalezen
    'w.parkeren': "estacionar", // nieuw, nalezen
    's.vancheck.1': "Há uma amolgadela na porta.", // nieuw, nalezen
    's.vancheck.2': "Este dano já lá estava.", // nieuw, nalezen
    's.vancheck.3': "Primeiro ainda tenho de abastecer.", // nieuw, nalezen
    'c.vancheck.q': "Está tudo bem com a carrinha de entregas?", // nieuw, nalezen
    'c.vancheck.a': "Não, o espelho está partido.", // nieuw, nalezen
    'c.vancheck': "Olha antes de conduzir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Dá uma volta à carrinha antes da tua primeira volta de entregas. Vês uma amolgadela, um risco ou um espelho partido? Tira uma foto, e avisa antes de arrancares. Assim todos sabem que o dano já lá estava. Aconteceu alguma coisa durante a tua volta? Avisa no mesmo dia, também quando é pequeno. Esconder um dano dá problemas maiores mais tarde. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "A carrinha de entregas tem um dano. Aqui está uma foto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "De manhã vês uma amolgadela nova na carrinha. Não foste tu que a fizeste. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Tiras uma foto, e avisas antes de conduzir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Não dizes nada: a amolgadela não é tua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Esperas para ver se alguém pergunta por ela.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Quando avisas antes de conduzir, ninguém pode pensar que foste tu. Uma foto com a hora é clara para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Atrasos na estrada", // nieuw, nalezen
    'w.file': "o engarrafamento", // nieuw, nalezen
    'w.vertraging': "o atraso (chegas mais tarde do que o previsto)", // nieuw, nalezen
    'w.omleiding': "o desvio (outro caminho, porque a estrada está cortada)", // nieuw, nalezen
    'w.navigatie': "a navegação (a app que mostra o caminho)", // nieuw, nalezen
    'w.planner': "o planeador (a pessoa que faz as rotas)", // nieuw, nalezen
    'w.retour': "a devolução (uma encomenda que volta para trás)", // nieuw, nalezen
    's.delay.1': "Estou num engarrafamento.", // nieuw, nalezen
    's.delay.2': "Tenho meia hora de atraso.", // nieuw, nalezen
    's.delay.3': "Esta encomenda volta para trás.", // nieuw, nalezen
    'c.delay.q': "Onde estás agora?", // nieuw, nalezen
    'c.delay.a': "No desvio. Chego dez minutos mais tarde.", // nieuw, nalezen
    'c.delay': "Vais chegar tarde? Diz a tempo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Um engarrafamento ou uma estrada cortada não é culpa tua. Mas diz ao planeador logo que saibas que vais chegar tarde. Assim o planeador pode avisar os clientes, ou mudar a rota. Para primeiro num sítio seguro: não ligues com o telemóvel na mão enquanto conduzes. E não conduzas mais depressa para recuperar o tempo. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Estou num engarrafamento. Chego meia hora mais tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Uma estrada está cortada. O desvio custa-te trinta minutos. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Dizes ao planeador logo que possas parar em segurança.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Conduzes mais depressa para recuperar o tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Não dizes nada: talvez ninguém repare.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Quando o planeador sabe cedo, os clientes ficam a saber e ninguém espera para nada. Conduzir mais depressa é perigoso, e quase não se ganha tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Instruções", // nieuw, nalezen
    'l.putdown': "Põe isso ali", // nieuw, nalezen
    'w.zetten': "pôr (uma coisa que fica de pé: uma caixa, um balde)", // nieuw, nalezen
    'w.leggen': "pôr, pousar (uma coisa que fica deitada)", // nieuw, nalezen
    'w.brengen': "levar, trazer (a um sítio ou a uma pessoa)", // nieuw, nalezen
    'w.geven': "dar", // nieuw, nalezen
    'w.vasthouden': "segurar", // nieuw, nalezen
    'w.loslaten': "largar, soltar", // nieuw, nalezen
    's.putdown.1': "Põe isso ali.", // nieuw, nalezen
    's.putdown.2': "Leva isto para a cantina.", // nieuw, nalezen
    's.putdown.3': "Segura isto um momento.", // nieuw, nalezen
    'c.putdown.q': "Podes segurar isto um momento?", // nieuw, nalezen
    'c.putdown.a': "Sim. Onde tenho de pôr isto?", // nieuw, nalezen
    'c.putdown': "Diz que já o tens", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Levas alguma coisa com um colega, ou um colega passa-te uma coisa pesada? Diz \"Ik heb hem\" quando já seguras bem. Assim o teu colega sabe que pode largar sem perigo. Queres largar tu? Pergunta primeiro: \"Heb je hem?\" E espera pela resposta. Isto é normal em qualquer local de trabalho. Assim as coisas não caem em cima dos pés e das mãos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Já o tenho. Podes largar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Um colega passa-te uma caixa pesada. Ainda não a seguras bem. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Dizes \"wacht\", e primeiro seguras melhor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Não dizes nada: ele vai ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Pegas nela depressa, para ele não esperar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "O teu colega larga quando pensa que já a tens. Uma só palavra dá-te tempo para segurar bem.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Ligado e desligado, aberto e fechado", // nieuw, nalezen
    'w.aanzetten': "ligar", // nieuw, nalezen
    'w.opendoen': "abrir", // nieuw, nalezen
    'w.dichtdoen': "fechar", // nieuw, nalezen
    'w.drukken': "carregar (num botão)", // nieuw, nalezen
    'w.draaien': "rodar", // nieuw, nalezen
    'w.stoppen': "parar", // nieuw, nalezen
    's.onoff.1': "Fecha a porta.", // nieuw, nalezen
    's.onoff.2': "Carrega no botão.", // nieuw, nalezen
    's.onoff.3': "Para! Desliga isso.", // nieuw, nalezen
    'c.onoff.q': "A porta está fechada?", // nieuw, nalezen
    'c.onoff.a': "Não. Fecho-a agora.", // nieuw, nalezen
    'c.onoff': "Stop quer dizer parar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Alguém grita \"Stop!\"? Para logo, também quando não sabes porquê. Pergunta depois. Aqui, uma palavra curta e alta não é zanga: é assim que os colegas se protegem uns aos outros. Vês tu alguma coisa perigosa? Grita também \"Stop!\", também a alguém que trabalha aqui há anos. Ninguém acha isso estranho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Para! Espera um momento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Ligas uma máquina. Um colega grita \"Stop!\". Não vês nenhum problema. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Paras logo, e perguntas porquê depois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Continuas: não vês nenhum problema.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Perguntas primeiro porque tens de parar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "O teu colega pode ver uma coisa que tu não vês. Primeiro parar, depois falar: assim todos ficam em segurança.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Empurrar, puxar, encher", // nieuw, nalezen
    'w.duwen': "empurrar", // nieuw, nalezen
    'w.trekken': "puxar", // nieuw, nalezen
    'w.vullen': "encher", // nieuw, nalezen
    'w.leegmaken': "esvaziar", // nieuw, nalezen
    'w.schoonmaken': "limpar", // nieuw, nalezen
    'w.vol': "cheio", // nieuw, nalezen
    's.fillempty.1': "Não empurres, puxa.", // nieuw, nalezen
    's.fillempty.2': "Este está cheio. Esvazia-o.", // nieuw, nalezen
    's.fillempty.3': "Limpa isto, por favor.", // nieuw, nalezen
    'c.fillempty.q': "Já está cheio?", // nieuw, nalezen
    'c.fillempty.a': "Sim. Vou esvaziá-lo.", // nieuw, nalezen
    'c.fillempty': "Acabaste? Diz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Acabaste uma tarefa? Diz: \"Ik ben klaar.\" E pergunta o que podes fazer a seguir. Esperar em silêncio até alguém te ver pode parecer que não queres trabalhar, também quando isso não é verdade. Os colegas que pedem a tarefa seguinte recebem muitas vezes trabalho mais interessante passado algum tempo. Queres aprender uma coisa nova? Pergunta isso também: \"Mag ik dat ook leren?\"", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "Já acabei. O que posso fazer mais?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Acabaste a tua tarefa. O teu chefe está ocupado com outra coisa. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Dizes que acabaste, e perguntas o que vem a seguir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Esperas até o teu chefe te ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Fazes uma pausa: o teu trabalho está feito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Um chefe não consegue ver tudo. Quando dizes que acabaste, o trabalho continua, e mostras que queres fazer mais.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Primeiro isto, depois aquilo", // nieuw, nalezen
    'w.nu': "agora", // nieuw, nalezen
    'w.dan': "depois, a seguir", // nieuw, nalezen
    'w.altijd': "sempre", // nieuw, nalezen
    'w.genoeg': "suficiente, bastante", // nieuw, nalezen
    'w.meer': "mais", // nieuw, nalezen
    'w.alles': "tudo", // nieuw, nalezen
    's.order.1': "Primeiro isto, depois aquilo.", // nieuw, nalezen
    's.order.2': "Isso é suficiente.", // nieuw, nalezen
    's.order.3': "Faz isto sempre assim.", // nieuw, nalezen
    'c.order.q': "Podes fazer isto agora?", // nieuw, nalezen
    'c.order.a': "Sim. Primeiro isto, e depois?", // nieuw, nalezen
    'c.order': "Muitas tarefas de uma vez? Pergunta qual é a primeira", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Às vezes recebes três tarefas numa só frase. Isso é difícil de lembrar, também para quem fala bem neerlandês. Pergunta qual é a primeira: \"Wat moet ik eerst doen?\" Também podes escrever as tarefas, ou contá-las pelos dedos e repeti-las. Esqueceste-te de uma? Volta atrás e pergunta. É melhor do que adivinhar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Isso é muito. O que tenho de fazer primeiro?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "O teu chefe dá-te três tarefas, muito depressa. Só te lembras da primeira. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Pedes logo para ouvir as tarefas mais uma vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Fazes a primeira, e esperas lembrar-te do resto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Não fazes nada: não sabes as três.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Perguntar logo custa dez segundos. Mais tarde o teu chefe pode já não estar lá, e então ficas à espera ou a adivinhar.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Azulejos, estuque e pintura", // nieuw, nalezen
    'l.tiletools': "As ferramentas do ladrilhador", // nieuw, nalezen
    'w.lijmkam': "a talocha dentada (espalha o cimento-cola em sulcos)", // nieuw, nalezen
    'w.troffel': "a colher de pedreiro", // nieuw, nalezen
    'w.tegelsnijder': "o cortador de azulejos", // nieuw, nalezen
    'w.nijptang': "a torquês (para tirar pedacinhos de um azulejo)", // nieuw, nalezen
    'w.mixer': "o misturador (mistura o cimento-cola ou o estuque num balde)", // nieuw, nalezen
    'w.duimstok': "o metro articulado", // nieuw, nalezen
    's.tiletools.1': "Passa-me aí a talocha dentada.", // nieuw, nalezen
    's.tiletools.2': "Corto o azulejo com o cortador de azulejos.", // nieuw, nalezen
    's.tiletools.3': "Mede primeiro com o metro articulado.", // nieuw, nalezen
    'c.tiletools.q': "Onde está o misturador?", // nieuw, nalezen
    'c.tiletools.a': "Ao pé do balde, ao lado da porta.", // nieuw, nalezen
    'c.tiletools': "Limpa as ferramentas antes de o cimento-cola endurecer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "O cimento-cola e o estuque endurecem depressa, também nas ferramentas. Por isso, limpa logo a talocha dentada, a colher e o misturador num balde de água, também antes da tua pausa. O cimento-cola duro já não sai, e uma talocha dentada com cimento-cola duro faz sulcos maus. Não deites a água suja num lava-loiça nem num ralo: fica entupido. Pergunta onde se pode deitar a água. O misturador: segura-o com as duas mãos, e liga-o devagar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Estou só a limpar a talocha dentada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "É a hora da tua pausa. A tua talocha dentada está cheia de cimento-cola fresco. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Limpa-la em água, e depois fazes a pausa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Deixa-la assim: limpas depois do trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Mete-la no balde do cimento-cola.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "O cimento-cola também endurece durante a pausa. Uma talocha dentada limpa faz bons sulcos, e os azulejos colam bem. Com cimento-cola duro, limpá-la dá muito trabalho, ou precisas de uma ferramenta nova.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Azulejos, cimento-cola e a linha central", // nieuw, nalezen
    'w.tegel': "o azulejo, o ladrilho", // nieuw, nalezen
    'w.tegellijm': "o cimento-cola (a cola para azulejos)", // nieuw, nalezen
    'w.tegelkruisje': "a cruzeta, o espaçador (uma pequena cruz entre os azulejos)", // nieuw, nalezen
    'w.hartlijn': "a linha central (começas a assentar os azulejos a partir dela)", // nieuw, nalezen
    'w.tegelplaat': "a placa de treino (uma placa para treinar a assentar azulejos)", // nieuw, nalezen
    'w.potlood': "o lápis", // nieuw, nalezen
    's.tiling.1': "O cimento-cola ainda está molhado.", // nieuw, nalezen
    's.tiling.2': "Põe uma cruzeta entre os azulejos.", // nieuw, nalezen
    's.tiling.3': "Primeiro risca a linha central com o lápis.", // nieuw, nalezen
    'c.tiling.q': "Por onde começo com os azulejos?", // nieuw, nalezen
    'c.tiling.a': "No meio, na linha central.", // nieuw, nalezen
    'c.tiling': "Começa na linha central, com pouco cimento-cola", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Um ladrilhador não começa num canto. Primeiro riscas a linha central, com um lápis e o nível, e começas aí. Assim, os azulejos cortados nas duas pontas ficam do mesmo tamanho. Espalha só o cimento-cola que consegues cobrir com azulejos em pouco tempo. O cimento-cola que fica muito tempo parado ganha uma pele seca, e então os azulejos não colam bem. Põe uma cruzeta em cada cruzamento, para todas as juntas ficarem iguais. Verifica muitas vezes com o nível: um azulejo torto é fácil de corrigir agora, e difícil de corrigir amanhã.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Não espalho cimento-cola demais de uma vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Depois de uma chamada longa, o cimento-cola na parede tem uma pele seca. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Raspa-lo, e espalhas cimento-cola novo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Assentas os azulejos nele na mesma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Molha-lo com uma esponja, e continuas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Cimento-cola com uma pele seca não segura bem um azulejo. Mais tarde o azulejo pode descolar, e então é preciso fazer o trabalho outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Estucar", // nieuw, nalezen
    'w.stucspaan': "a talocha de aço (uma talocha plana para alisar o estuque)", // nieuw, nalezen
    'w.oplegspaan': "o porta-massa (uma tábua plana onde seguras o estuque)", // nieuw, nalezen
    'w.spackmes': "a espátula (uma faca larga e plana)", // nieuw, nalezen
    'w.rei': "a régua (uma barra comprida e direita para nivelar o estuque)", // nieuw, nalezen
    'w.sponsspaan': "a talocha de esponja", // nieuw, nalezen
    'w.hoekprofiel': "a cantoneira (uma tira de metal para uma esquina direita)", // nieuw, nalezen
    's.plaster.1': "Primeiro põe a cantoneira na esquina.", // nieuw, nalezen
    's.plaster.2': "Alisa a parede com a talocha de aço.", // nieuw, nalezen
    's.plaster.3': "Passa a régua pela parede.", // nieuw, nalezen
    'c.plaster.q': "A parede já está seca?", // nieuw, nalezen
    'c.plaster.a': "Não, espera mais um dia.", // nieuw, nalezen
    'c.plaster': "O estuque precisa de tempo para secar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "O estuque novo fica molhado durante muito tempo. Uma parede molhada é mais escura do que uma seca. O pintor só pode começar quando a parede estiver seca em todo o lado, e isso pode levar dias ou semanas. Não seques mais depressa com um aquecedor: o estuque pode rachar. Alguém quer pintar cedo demais? Diz que a parede ainda não está seca. E antes de começares, tapa o chão, as janelas e as tomadas: o estuque é difícil de tirar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "A parede ainda está molhada. Ainda não se pode pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "O pintor quer começar amanhã. O estuque novo ainda tem manchas escuras. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Dizes ao pintor: a parede ainda não está seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Pões um aquecedor à frente dela esta noite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Não dizes nada: o pintor vai ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Manchas escuras querem dizer que o estuque ainda está molhado. A tinta numa parede molhada pode descolar, e um aquecedor pode fazer rachas. Esperar custa menos do que fazer tudo outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Tijolos, madeira e fixar", // nieuw, nalezen
    'u.machines': "Máquinas e ferramentas", // nieuw, nalezen
    'l.shapes': "Formas", // nieuw, nalezen
    'w.vierkant': "o quadrado", // nieuw, nalezen
    'w.rechthoek': "o retângulo", // nieuw, nalezen
    'w.driehoek': "o triângulo", // nieuw, nalezen
    'w.cirkel': "o círculo", // nieuw, nalezen
    'w.kubus': "o cubo", // nieuw, nalezen
    'w.balk': "o paralelepípedo, o bloco (uma forma de caixa comprida)", // nieuw, nalezen
    's.shapes.1': "O azulejo é um quadrado.", // nieuw, nalezen
    's.shapes.2': "Esta sala é um retângulo.", // nieuw, nalezen
    's.shapes.3': "Um tijolo tem a forma de um paralelepípedo.", // nieuw, nalezen
    'c.shapes.q': "É um quadrado?", // nieuw, nalezen
    'c.shapes.a': "Não, é um retângulo. É mais comprido do que largo.", // nieuw, nalezen
    'c.shapes': "Verifica um retângulo com duas linhas em cruz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Uma sala, um chão ou uma moldura é muitas vezes um retângulo. Mas os cantos estão mesmo em esquadro? Há uma maneira fácil de ver. Mede de um canto até ao canto do outro lado. Depois mede entre os outros dois cantos. As duas medidas são iguais? Então os cantos estão certos. Não são iguais? Então a forma está um pouco torta, e os azulejos ou o chão não vão encaixar bem. Diz ao teu chefe antes de começares.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Estas duas medidas não são iguais.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Medes um chão de canto a canto, nos dois sentidos. Uma medida é mais comprida. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Dizes ao teu chefe antes de começares.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Começas num canto, vai correr bem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Medes outra vez só um lado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Duas medidas diferentes querem dizer que os cantos não estão em esquadro. Então os azulejos ou as tábuas não encaixam. É melhor saber isso antes de começares.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Ângulos e formas redondas", // nieuw, nalezen
    'w.hoek': "o ângulo", // nieuw, nalezen
    'w.graad': "o grau (°)", // nieuw, nalezen
    'w.geodriehoek': "o esquadro com transferidor", // nieuw, nalezen
    'w.boog': "o arco, a curva", // nieuw, nalezen
    'w.cilinder': "o cilindro", // nieuw, nalezen
    'w.parallellogram': "o paralelogramo", // nieuw, nalezen
    's.angles.1': "Este ângulo tem noventa graus.", // nieuw, nalezen
    's.angles.2': "Mede o ângulo com o esquadro com transferidor.", // nieuw, nalezen
    's.angles.3': "O tubo tem a forma de um cilindro.", // nieuw, nalezen
    'c.angles.q': "Quantos graus tem este ângulo?", // nieuw, nalezen
    'c.angles.a': "Quarenta e cinco. Metade de um ângulo reto.", // nieuw, nalezen
    'c.angles': "Verifica um canto grande com 3, 4 e 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Numa obra, verificas muitas vezes um ângulo reto: uma parede num chão, um canto de uma sala. Um canto pequeno verificas com um esquadro ou com o esquadro com transferidor. Para um canto grande, há um truque antigo. Mede 3 metros ao longo de um lado e 4 metros ao longo do outro lado, e faz uma marca nos dois. De marca a marca dá exatamente 5 metros? Então o ângulo tem 90 graus. Mais pequeno também funciona: 30, 40 e 50 centímetros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Este ângulo não está reto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Tens de verificar um canto grande de uma parede nova. O teu esquadro é pequeno demais. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Medes 3, 4 e 5 metros.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Olhas para ele de longe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Usas o esquadro pequeno na mesma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Com 3, 4 e 5 consegues verificar um canto grande com exatidão, só com uma fita métrica. A olho, um canto pode parecer certo e estar errado.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Comprimento, área e volume", // nieuw, nalezen
    'w.lengte': "o comprimento", // nieuw, nalezen
    'w.breedte': "a largura", // nieuw, nalezen
    'w.hoogte': "a altura", // nieuw, nalezen
    'w.oppervlakte': "a área (comprimento vezes largura, em metros quadrados)", // nieuw, nalezen
    'w.inhoud': "o volume (comprimento vezes largura vezes altura)", // nieuw, nalezen
    'w.centimeter': "o centímetro", // nieuw, nalezen
    's.size.1': "A área é o comprimento vezes a largura.", // nieuw, nalezen
    's.size.2': "O volume é comprimento vezes largura vezes altura.", // nieuw, nalezen
    's.size.3': "Dez milímetros são um centímetro.", // nieuw, nalezen
    'c.size.q': "Quantos metros quadrados tem o chão?", // nieuw, nalezen
    'c.size.a': "Quatro por cinco metros, portanto vinte metros quadrados.", // nieuw, nalezen
    'c.size': "Calcula o que precisas, e junta um pouco mais", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Quantos azulejos, quanta tinta, quanta areia? Calculas isso com a área ou com o volume. Área: o comprimento vezes a largura, em metros quadrados. Volume: o comprimento vezes a largura vezes a altura, em metros cúbicos. Mede tudo na mesma unidade: tudo em metros, ou tudo em centímetros. Escreve as medidas, não as guardes na cabeça. Depois junta um pouco mais, para os bocados cortados e para os erros. Não tens a certeza? Pede a um colega para verificar a tua conta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Eu escrevo as medidas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Mediste o chão. Tens de encomendar os azulejos hoje. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Calculas a área, e juntas um pouco mais.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Encomendas a área, nem mais um azulejo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Adivinhas: já viste o chão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Há sempre azulejos que cortas, e alguns partem-se. Com um pouco a mais, não tens de parar a meio e encomendar outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Pintar", // nieuw, nalezen
    'w.verf': "a tinta", // nieuw, nalezen
    'w.kwast': "a trincha (um pincel largo)", // nieuw, nalezen
    'w.penseel': "o pincel pequeno (para cantos e bordas)", // nieuw, nalezen
    'w.roerstok': "o pau de mexer", // nieuw, nalezen
    'w.tape': "a fita de pintor (fita-cola de papel)", // nieuw, nalezen
    'w.strijkvaatje': "o balde de pintor pequeno (um recipiente pequeno que seguras enquanto pintas)", // nieuw, nalezen
    's.paint.1': "Primeiro mexe bem a tinta.", // nieuw, nalezen
    's.paint.2': "Tapa a borda com fita.", // nieuw, nalezen
    's.paint.3': "Põe um pouco de tinta no balde pequeno.", // nieuw, nalezen
    'c.paint.q': "Que pincel é que uso?", // nieuw, nalezen
    'c.paint.a': "A trincha larga para a parede, o pincel pequeno para os cantos.", // nieuw, nalezen
    'c.paint': "Mexe bem, e pinta de cima para baixo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "A tinta que esteve parada algum tempo fica grossa no fundo da lata. Por isso, primeiro mexe-a bem, com um pau de mexer, até a cor ser igual em todo o lado. Não pintes da lata grande: põe um pouco de tinta no balde pequeno, e fecha outra vez a lata. Assim a tinta fica boa. Pinta de cima para baixo: assim os pingos caem em tinta molhada e ainda os consegues espalhar. Usa a trincha larga para a parede e o pincel pequeno para os cantos. No fim, limpa logo os pincéis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Primeiro mexo bem a tinta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Abres uma lata de tinta velha. Em cima está líquida, no fundo está grossa. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Primeiro mexes bem, com o pau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Pintas com a tinta líquida de cima.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Juntas água até ficar líquida em todo o lado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Parte da cor fica no fundo da lata. Sem mexer, a parede fica com manchas e riscas.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Preparar para pintar", // nieuw, nalezen
    'w.plamuurmes': "a espátula de massa (para tapar buracos)", // nieuw, nalezen
    'w.schuurpapier': "a lixa", // nieuw, nalezen
    'w.verfkrabber': "o raspador de tinta", // nieuw, nalezen
    'w.stoffertje': "a escova pequena (para varrer o pó)", // nieuw, nalezen
    'w.schuren': "lixar", // nieuw, nalezen
    'w.afplakken': "proteger com fita (tapar uma borda com fita)", // nieuw, nalezen
    's.prep.1': "Primeiro raspa a tinta velha.", // nieuw, nalezen
    's.prep.2': "Lixa a madeira até ficar lisa.", // nieuw, nalezen
    's.prep.3': "Varre o pó com a escova pequena.", // nieuw, nalezen
    'c.prep.q': "Já posso pintar?", // nieuw, nalezen
    'c.prep.a': "Não, primeiro lixar e tapar o buraco.", // nieuw, nalezen
    'c.prep': "Uma boa pintura começa antes da tinta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "A tinta não pega bem em sujidade, pó ou tinta velha solta. Por isso, primeiro raspa a tinta solta com o raspador. Tapa os buracos com massa e a espátula, e deixa a massa secar. Depois lixa até ficar liso. Depois de lixar, varre o pó com a escova pequena, também das bordas. Por fim, protege com fita o que tem de ficar limpo, como janelas e tomadas. Lixar faz um pó fino: usa uma máscara contra o pó, e pergunta qual. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Primeiro lixar, depois pintar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Lixaste a porta. Ainda tem pó. O teu colega quer pintar já. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Primeiro tiras o pó, com a escova.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Deixas o colega pintar: a tinta tapa o pó.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Limpas o pó com a mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "A tinta em cima do pó não pega bem. Mais tarde sai em lascas, e então é preciso fazer o trabalho todo outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Assentar tijolo", // nieuw, nalezen
    'w.speciekuip': "a masseira (o recipiente da argamassa)", // nieuw, nalezen
    'w.metseltroffel': "a colher de pedreiro (para assentar tijolos)", // nieuw, nalezen
    'w.baksteen': "o tijolo", // nieuw, nalezen
    'w.cement': "o cimento", // nieuw, nalezen
    'w.voegijzer': "o ferro de juntas (para alisar as juntas entre os tijolos)", // nieuw, nalezen
    'w.handveger': "a escova de mão", // nieuw, nalezen
    's.brick.1': "Ainda há cimento na masseira.", // nieuw, nalezen
    's.brick.2': "Alisa a junta com o ferro de juntas.", // nieuw, nalezen
    's.brick.3': "Limpa a parede com a escova de mão.", // nieuw, nalezen
    'c.brick.q': "Quantos tijolos ainda tens?", // nieuw, nalezen
    'c.brick.a': "Mais uma palete. Chega para hoje.", // nieuw, nalezen
    'c.brick': "Mantém a parede limpa enquanto trabalhas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "A argamassa está molhada quando assentas os tijolos, e endurece em poucas horas. Por isso, trabalha limpo. Raspa logo com a colher a argamassa que sai da junta. Alisa as juntas com o ferro de juntas quando a argamassa já está um pouco firme, não quando ainda está molhada. Depois passa a escova de mão pela parede. A argamassa dura na frente de um tijolo é muito difícil de tirar. No fim do dia, tapa o cimo da parede, para a chuva não lavar a argamassa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Estou a alisar as juntas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "No fim do dia, há argamassa na frente dos tijolos. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Tiras com a escova agora, antes de endurecer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Deixas estar: limpas na próxima semana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Lavas a parede com muita água.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "A argamassa fresca sai bem com uma escova. A argamassa dura fica no tijolo, e então a parede não fica bonita.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Uma parede direita", // nieuw, nalezen
    'w.metseltouw': "a linha de pedreiro (um fio para uma fiada direita)", // nieuw, nalezen
    'w.klos': "o bloco da linha (segura o fio na esquina)", // nieuw, nalezen
    'w.lagenmaatlat': "a régua de fiadas (mostra a altura de cada fiada)", // nieuw, nalezen
    'w.profiel': "o perfil de canto (um poste direito no fim da parede)", // nieuw, nalezen
    'w.kop': "a testa (o lado curto de um tijolo)", // nieuw, nalezen
    'w.strek': "a face comprida (o lado comprido de um tijolo)", // nieuw, nalezen
    's.wall.1': "Estica bem a linha de pedreiro.", // nieuw, nalezen
    's.wall.2': "O perfil de canto tem de estar direito.", // nieuw, nalezen
    's.wall.3': "Assenta o tijolo com o lado comprido para fora.", // nieuw, nalezen
    'c.wall.q': "Que altura tem de ter esta fiada?", // nieuw, nalezen
    'c.wall.a': "Olha para a régua de fiadas.", // nieuw, nalezen
    'c.wall': "A linha mantém a parede direita", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Um pedreiro não constrói a olho. Primeiro, os perfis de canto ficam direitos nas duas pontas da parede. Entre eles esticas bem a linha de pedreiro, à altura da fiada seguinte. Assenta cada tijolo ao longo da linha, mas não empurres a linha. A régua de fiadas mostra a altura de cada fiada. Verifica muitas vezes com o nível. Um tijolo torto é fácil de corrigir enquanto a argamassa está molhada, e muito difícil de corrigir amanhã.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "A linha de pedreiro está bem esticada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "A linha de pedreiro está solta e descai um pouco no meio. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Primeiro esticas a linha, depois continuas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Assentas os tijolos por baixo dela na mesma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Assentas os tijolos a olho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Uma linha solta descai no meio, por isso a fiada também descai. Uma linha bem esticada dá uma fiada direita.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Trabalhar com madeira", // nieuw, nalezen
    'w.handzaag': "o serrote", // nieuw, nalezen
    'w.kapzaag': "o serrote de costas (um serrote pequeno com as costas rígidas)", // nieuw, nalezen
    'w.houtbeitel': "o formão", // nieuw, nalezen
    'w.handschaaf': "a plaina manual", // nieuw, nalezen
    'w.timmermanshamer': "o martelo de carpinteiro", // nieuw, nalezen
    'w.houtenhamer': "o maço (um martelo de madeira)", // nieuw, nalezen
    's.wood.1': "Serra a tábua à medida.", // nieuw, nalezen
    's.wood.2': "Aplaina a borda até ficar lisa.", // nieuw, nalezen
    's.wood.3': "Bate no formão com o maço.", // nieuw, nalezen
    'c.wood.q': "De que serrote preciso?", // nieuw, nalezen
    'c.wood.a': "O serrote de costas, para esta peça pequena.", // nieuw, nalezen
    'c.wood': "Curto demais não tem conserto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "A madeira serrada curta demais não volta a ficar comprida. Por isso, mede duas vezes, e risca a linha antes de serrar. Serra ao lado da linha, do lado da peça de que não precisas. Segura bem a madeira: numa bancada ou com um grampo, não no teu joelho. Deixa o serrote fazer o trabalho, com movimentos longos e calmos. Empurra o formão para longe do teu corpo e da tua outra mão. E mantém o formão e a plaina afiados: uma ferramenta sem fio escorrega mais facilmente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Vou medir mais uma vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Tens de serrar uma tábua à medida. Mediste uma vez, depressa. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Medes outra vez, e depois riscas a linha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Serras já: deve estar certo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Serras a olho, sem linha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Comprido demais, podes serrar outra vez. Curto demais, já não tem conserto. Medir outra vez demora um minuto; uma tábua nova custa muito mais.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Marcar", // nieuw, nalezen
    'w.winkelhaak': "o esquadro (mostra um ângulo reto)", // nieuw, nalezen
    'w.verstekhaak': "o esquadro de meia-esquadria (45 graus)", // nieuw, nalezen
    'w.zwaaihaak': "a suta (tu próprio escolhes o ângulo)", // nieuw, nalezen
    'w.kruishout': "o graminho (risca uma linha ao longo da borda)", // nieuw, nalezen
    'w.passer': "o compasso (para desenhar um círculo)", // nieuw, nalezen
    'w.aftekenen': "marcar (desenhar onde vais cortar)", // nieuw, nalezen
    's.square.1': "Marca a linha com o esquadro.", // nieuw, nalezen
    's.square.2': "Põe a suta no ângulo certo.", // nieuw, nalezen
    's.square.3': "Desenha um círculo com o compasso.", // nieuw, nalezen
    'c.square.q': "O ângulo está reto?", // nieuw, nalezen
    'c.square.a': "Sim, o esquadro encaixa certinho.", // nieuw, nalezen
    'c.square': "Marca a partir de uma borda direita", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Antes de serrar ou furar, marcas onde. Usa um lápis afiado: uma linha grossa não é exata. Escolhe uma borda direita da madeira, e mede tudo a partir dessa borda. Encosta bem a parte grossa do esquadro a essa borda, e risca a linha ao longo do aço. Faz uma pequena cruz na peça que não vais usar. Depois serras ao lado da linha, do lado da cruz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Primeiro vou marcar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "O teu lápis não tem bico e faz uma linha grossa. Queres marcar uma tábua. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Primeiro afias o lápis, depois riscas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Riscas a linha na mesma, não faz mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Marcas com a unha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Uma linha grossa tem alguns milímetros de largura. Então não sabes onde serrar, e a peça não fica exata.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Berbequins e parafusos", // nieuw, nalezen
    'w.accuboor': "o berbequim sem fio (com bateria)", // nieuw, nalezen
    'w.boormachine': "o berbequim elétrico (com cabo)", // nieuw, nalezen
    'w.bitje': "a ponta de aparafusar (o bit)", // nieuw, nalezen
    'w.plug': "a bucha", // nieuw, nalezen
    'w.schroevendraaier': "a chave de fendas", // nieuw, nalezen
    'w.spijker': "o prego", // nieuw, nalezen
    's.screw.1': "Faz um furo e põe lá uma bucha.", // nieuw, nalezen
    's.screw.2': "Que ponta é para este parafuso?", // nieuw, nalezen
    's.screw.3': "Bate o prego na madeira com o martelo.", // nieuw, nalezen
    'c.screw.q': "Onde está o berbequim sem fio?", // nieuw, nalezen
    'c.screw.a': "No carregador, está quase cheio.", // nieuw, nalezen
    'c.screw': "Olha antes de furar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Antes de furar uma parede, pensa no que está por trás. Os canos e os cabos passam muitas vezes a direito para cima, para baixo ou para o lado a partir de uma tomada ou de um interruptor. Pergunta onde estão, ou verifica com um detetor. Escolhe uma broca do mesmo tamanho da bucha, e faz o furo um pouco mais fundo do que a bucha. Usa a ponta certa para o parafuso: uma ponta errada escorrega e estraga a cabeça do parafuso. Usa óculos de proteção quando furas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Posso furar aqui?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Tens de fazer um furo mesmo por cima de uma tomada. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Primeiro perguntas por onde passa o cabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Furas: nunca há lá um cabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Furas devagar, assim é seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Muitas vezes um cabo sobe a direito a partir de uma tomada. Furar o cabo é perigoso, e a reparação dá muito trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Fixar coisas", // nieuw, nalezen
    'w.bevestigen': "fixar (prender bem uma coisa a uma parede)", // nieuw, nalezen
    'w.vastzetten': "apertar (rodar até ficar apertado)", // nieuw, nalezen
    'w.lijmen': "colar", // nieuw, nalezen
    'w.inbussleutel': "a chave Allen (chave sextavada)", // nieuw, nalezen
    'w.kruisschroevendraaier': "a chave de estrela (ponta em cruz)", // nieuw, nalezen
    'w.platteschroevendraaier': "a chave de fendas plana", // nieuw, nalezen
    's.fix.1': "Fixa a prateleira à parede.", // nieuw, nalezen
    's.fix.2': "Aperta o parafuso com a chave Allen.", // nieuw, nalezen
    's.fix.3': "Pega na chave de fendas plana, não na de estrela.", // nieuw, nalezen
    'c.fix.q': "Como é que fixo esta prateleira?", // nieuw, nalezen
    'c.fix.a': "Com duas buchas e dois parafusos.", // nieuw, nalezen
    'c.fix': "Apertado, mas não demais", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Um parafuso tem de ficar apertado, mas não demais. Se rodares com muita força, a rosca parte-se ou a madeira racha. Roda até não mexer mais, e depois para. No berbequim sem fio, primeiro roda o anel com os números para um número baixo. Uma prateleira na parede precisa de buchas que sirvam para essa parede: a pedra precisa de outras buchas do que uma parede fina de placas. A cola precisa de tempo: aperta as peças uma contra a outra, segura-as com um grampo, e espera até a cola estar seca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "A prateleira está bem fixa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Colaste duas peças de madeira. O teu colega quer usá-las já. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Dizes: primeiro a cola tem de secar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Deixas o colega usar: a cola é rápida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Seguras as peças nas mãos durante um minuto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "A cola molhada ainda não segura. Se usares cedo demais, as peças soltam-se outra vez. Então tens de começar de novo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "Na máquina", // nieuw, nalezen
    'w.bedieningspaneel': "o painel de comando (os botões e o ecrã de uma máquina)", // nieuw, nalezen
    'w.startknop': "o botão de arranque (verde)", // nieuw, nalezen
    'w.hendel': "a alavanca", // nieuw, nalezen
    'w.afscherming': "a proteção da máquina (uma tampa por cima das peças que se mexem)", // nieuw, nalezen
    'w.sensor': "o sensor (vê se há alguma coisa)", // nieuw, nalezen
    'w.signaallamp': "a luz de sinalização (luzes de cores em cima de uma máquina)", // nieuw, nalezen
    's.atmachine.1': "Carrega no botão de arranque verde.", // nieuw, nalezen
    's.atmachine.2': "A luz de sinalização está vermelha. Há uma avaria.", // nieuw, nalezen
    's.atmachine.3': "Nunca tires a proteção da máquina.", // nieuw, nalezen
    'c.atmachine.q': "Porque é que a máquina está sempre a parar?", // nieuw, nalezen
    'c.atmachine.a': "O sensor não vê bem a caixa.", // nieuw, nalezen
    'c.atmachine': "A proteção fica no lugar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "As peças de uma máquina que se mexem podem puxar uma mão, uma manga ou o cabelo em menos de um segundo. A proteção está lá para isso. Nunca a tires, e nunca metas a mão por trás dela com a máquina a trabalhar. Uma proteção ou um sensor não funciona? Então a máquina não é segura: para a máquina e avisa o teu chefe de equipa. Ficou alguma coisa presa? Primeiro para a máquina, e garante que ninguém a pode ligar enquanto trabalhas. Como se faz isso é diferente em cada empresa: pede a explicação antes de começares. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "A proteção da máquina está partida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Uma caixa ficou presa na máquina, mesmo atrás da proteção. A máquina está a trabalhar. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Primeiro paras a máquina, depois vais buscar ajuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Metes a mão depressa e puxas a caixa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Abres a proteção com a máquina a trabalhar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Uma máquina a trabalhar pode puxar a tua mão antes de conseguires reagir. Parar a máquina demora um momento; uma mão ferida demora meses.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Medir e verificar", // nieuw, nalezen
    'w.weegschaal': "a balança", // nieuw, nalezen
    'w.meetklok': "o comparador (mede diferenças muito pequenas)", // nieuw, nalezen
    'w.loep': "a lupa", // nieuw, nalezen
    'w.monster': "a amostra (um produto que tiras para verificar)", // nieuw, nalezen
    'w.afkeurbak': "a caixa dos rejeitados (para produtos que não estão bons)", // nieuw, nalezen
    'w.teller': "o contador (conta os produtos)", // nieuw, nalezen
    's.inspect.1': "Põe o produto na balança.", // nieuw, nalezen
    's.inspect.2': "Este produto está danificado. Vai para a caixa dos rejeitados.", // nieuw, nalezen
    's.inspect.3': "Olho para a etiqueta com a lupa.", // nieuw, nalezen
    'c.inspect.q': "De quanto em quanto tempo tiro uma amostra?", // nieuw, nalezen
    'c.inspect.a': "Uma por hora. Escreve na lista.", // nieuw, nalezen
    'c.inspect': "Escreve o que verificas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "Numa fábrica verificas os produtos durante o trabalho: pesas, medes, ou olhas para eles com atenção. Escreve logo cada verificação na lista, com a hora. Não mais tarde, de memória. Um produto não está bem? Põe-no na caixa dos rejeitados e olha com atenção para os seguintes. Há mais produtos errados? Então há alguma coisa errada com a máquina. Avisa logo o teu chefe de equipa. Um problema encontrado cedo poupa muitos produtos. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Há mais produtos errados.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "A balança mostra que três produtos seguidos são leves demais. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Avisas logo o teu chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Pões os produtos outra vez na linha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Não dizes nada: acontece.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Três produtos errados seguidos mostram um problema na máquina. Quanto mais cedo avisares, menos produtos vão para o lixo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Embalar", // nieuw, nalezen
    'w.verpakking': "a embalagem", // nieuw, nalezen
    'w.krimpfolie': "o filme retrátil (plástico que aperta com o calor)", // nieuw, nalezen
    'w.sealmachine': "a seladora (fecha uma embalagem com calor)", // nieuw, nalezen
    'w.vulmateriaal': "o material de enchimento (almofadas de ar ou papel numa caixa)", // nieuw, nalezen
    'w.afbreekmes': "o x-ato (uma faca com lâmina que se parte)", // nieuw, nalezen
    'w.tapepistool': "a pistola de fita-cola", // nieuw, nalezen
    's.packing.1': "Põe material de enchimento na caixa.", // nieuw, nalezen
    's.packing.2': "Fecha a caixa com a pistola de fita-cola.", // nieuw, nalezen
    's.packing.3': "A seladora está quente. Cuidado!", // nieuw, nalezen
    'c.packing.q': "Quantos produtos vão numa caixa?", // nieuw, nalezen
    'c.packing.a': "Doze. Está na lista.", // nieuw, nalezen
    'c.packing': "Corta para longe do teu corpo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Embalar é um trabalho rápido, e um x-ato corta muito. Corta sempre para longe do teu corpo e da tua outra mão. Recolhe a lâmina depois de cada corte, também quando pousas o x-ato por um momento. Parte com cuidado um bocado sem fio, e deita-o na caixa das lâminas velhas, não no lixo normal. A seladora e a pistola de ar quente do filme retrátil ficam muito quentes: não toques nas partes quentes. E verifica cada caixa: o produto certo, o número certo, e a etiqueta direita. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Primeiro recolho a lâmina.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Pousas o x-ato na mesa por um momento. A lâmina ainda está de fora. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Primeiro recolhes a lâmina.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Deixas assim: vais precisar dele daqui a pouco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Metes o x-ato no bolso assim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Uma lâmina de fora numa mesa ou num bolso pode cortar-te a ti ou a um colega. Recolhê-la demora um segundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Manutenção", // nieuw, nalezen
    'w.persluchtpistool': "a pistola de ar comprimido", // nieuw, nalezen
    'w.steeksleutel': "a chave de bocas", // nieuw, nalezen
    'w.oliekannetje': "a almotolia (uma lata pequena de óleo)", // nieuw, nalezen
    'w.smeerpistool': "a bomba de massa (para lubrificar)", // nieuw, nalezen
    'w.lekbak': "o tabuleiro de pingos (apanha o óleo que pinga)", // nieuw, nalezen
    'w.poetsdoek': "o pano de limpeza", // nieuw, nalezen
    's.upkeep.1': "Está a pingar óleo. Põe o tabuleiro de pingos por baixo.", // nieuw, nalezen
    's.upkeep.2': "Limpa o óleo com um pano de limpeza.", // nieuw, nalezen
    's.upkeep.3': "Nunca apontes a pistola de ar comprimido a ninguém.", // nieuw, nalezen
    'c.upkeep.q': "Quando é que lubrificamos a máquina?", // nieuw, nalezen
    'c.upkeep.a': "Todas as segundas-feiras, antes do primeiro turno.", // nieuw, nalezen
    'c.upkeep': "Uma máquina limpa mostra os seus problemas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "A pequena manutenção faz muitas vezes parte do trabalho: limpar, pôr óleo e lubrificar. Só o faças com a máquina desligada, e quando já aprendeste como. Uma máquina limpa é fácil de verificar: vês logo uma fuga ou uma peça solta. O óleo no chão escorrega. Põe um tabuleiro de pingos por baixo de uma fuga, limpa o chão, e avisa o teu chefe de equipa. Deita os panos com óleo no caixote especial. Nunca apontes uma pistola de ar comprimido a uma pessoa, e nunca a uses para limpar a tua roupa ou a tua pele. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "A máquina está a perder óleo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Vês uma pequena poça de óleo debaixo da máquina. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Pões um tabuleiro de pingos por baixo, e avisas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Deixas estar: é só um bocadinho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Pões um bocado de papel em cima, e continuas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Uma fuga fica maior, e o óleo no chão faz as pessoas escorregar. Encontrada cedo, é uma reparação pequena.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Eletricidade, canos e metal", // nieuw, nalezen
    'l.wiring': "Ligar fios", // nieuw, nalezen
    'w.draad': "o fio (um fio dentro de um cabo)", // nieuw, nalezen
    'w.stopcontact': "a tomada (na parede)", // nieuw, nalezen
    'w.schakelaar': "o interruptor (da luz)", // nieuw, nalezen
    'w.lasklem': "o ligador de alavanca (junta fios)", // nieuw, nalezen
    'w.striptang': "o alicate descarnador", // nieuw, nalezen
    'w.kabelgoot': "a calha (um canal para cabos)", // nieuw, nalezen
    's.wiring.1': "Descarna um centímetro do fio.", // nieuw, nalezen
    's.wiring.2': "Prende os fios no ligador de alavanca.", // nieuw, nalezen
    's.wiring.3': "Os cabos vão na calha.", // nieuw, nalezen
    'c.wiring.q': "Que fio vai para onde?", // nieuw, nalezen
    'c.wiring.a': "Castanho com castanho, azul com azul.", // nieuw, nalezen
    'c.wiring': "As cores dizem para que serve um fio", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "Num edifício, os fios têm cores fixas. O castanho (às vezes preto ou cinzento) traz a corrente. O azul é o retorno. O verde e amarelo é a terra: protege as pessoas, e nunca se usa para mais nada. Liga a mesma cor à mesma cor. Descarna só o que cabe no ligador: não pode ficar cobre à vista. Mete o fio, e depois puxa-o devagar para ver se está preso. Não sabes que fio é qual? Para e pergunta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "De que cor é a terra?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Estás a ligar um candeeiro. Um bocado de cobre sai do ligador. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Cortas o fio mais curto, e ligas outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Deixas estar: o candeeiro funciona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Pões um bocado de fita-cola à volta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "O cobre à vista fora do ligador pode tocar em alguma coisa. Isso pode dar um choque ou um curto-circuito, também meses depois.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Medir e trabalhar em segurança", // nieuw, nalezen
    'w.multimeter': "o multímetro (mede a corrente)", // nieuw, nalezen
    'w.spanningzoeker': "o busca-polos (uma chave de fendas com uma pequena luz)", // nieuw, nalezen
    'w.meterkast': "o quadro elétrico", // nieuw, nalezen
    'w.zekering': "o disjuntor (desliga a corrente quando há um problema)", // nieuw, nalezen
    'w.hangslot': "o cadeado", // nieuw, nalezen
    'w.aardedraad': "o fio de terra (verde e amarelo)", // nieuw, nalezen
    's.testing.1': "O disjuntor disparou.", // nieuw, nalezen
    's.testing.2': "Põe um cadeado no interruptor.", // nieuw, nalezen
    's.testing.3': "Mede primeiro com o multímetro.", // nieuw, nalezen
    'c.testing.q': "Posso abrir o quadro elétrico?", // nieuw, nalezen
    'c.testing.a': "Não, quem faz isso é o eletricista.", // nieuw, nalezen
    'c.testing': "Desligado, trancado, medido", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Antes de trabalhares na eletricidade, segue três passos. Desliga: o disjuntor certo no quadro elétrico, não só o interruptor na parede. Tranca: põe lá o teu próprio cadeado, e fica com a chave contigo, para ninguém o poder voltar a ligar. Mede: verifica com um busca-polos ou um multímetro que não há mesmo corrente. Só então começas. Um disjuntor dispara uma e outra vez? Não o continues a ligar: avisa o teu chefe. Só faças trabalhos elétricos quando te disseram que podes. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Já não há corrente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Desligaste o disjuntor. Um colega diz: \"Começa já, está desligado.\" O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Trancas, e primeiro medes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Começas: o teu colega sabe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Tocas no fio rapidamente para verificar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Às vezes está desligado o disjuntor errado, ou alguém volta a ligá-lo. Um cadeado e uma medição mostram que é mesmo seguro.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Canos e água", // nieuw, nalezen
    'w.buis': "o tubo", // nieuw, nalezen
    'w.koppeling': "a união (junta dois tubos)", // nieuw, nalezen
    'w.pijpsnijder': "o corta-tubos", // nieuw, nalezen
    'w.waterpomptang': "o alicate de bomba (alicate ajustável)", // nieuw, nalezen
    'w.afsluiter': "a torneira de passagem (fecha a água)", // nieuw, nalezen
    'w.teflontape': "a fita de teflon (fita branca para a rosca de um tubo)", // nieuw, nalezen
    's.pipes.1': "Fecha a torneira de passagem.", // nieuw, nalezen
    's.pipes.2': "Corta o tubo com o corta-tubos.", // nieuw, nalezen
    's.pipes.3': "Enrola fita de teflon à volta da rosca.", // nieuw, nalezen
    'c.pipes.q': "A união ainda está a pingar?", // nieuw, nalezen
    'c.pipes.a': "Um bocadinho. Vou apertá-la mais um pouco.", // nieuw, nalezen
    'c.pipes': "Primeiro fecha a água, e tem um balde pronto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Antes de abrires um cano de água, fecha a torneira de passagem. Depois abre uma torneira mais abaixo, para o cano esvaziar. Põe um balde e um pano por baixo do sítio onde trabalhas. Corta um tubo de cobre com um corta-tubos, não com uma serra: a ponta fica redonda e limpa. Aperta bem uma união, mas não com força demais. Quando acabares, abre a água devagar e procura pingos. Uma pequena fuga que deixas ficar acaba em estragos de água.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "A água está fechada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Fizeste uma união nova. Abres a água. Cai um pingo pequeno por minuto. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Fechas a água, e apertas ou fazes de novo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Deixas estar: é só um pingo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Pões um balde por baixo e vais para casa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Um pingo por minuto são muitos litros por semana. A água pode estragar o chão ou o teto do andar de baixo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Trabalhar o metal", // nieuw, nalezen
    'w.bankschroef': "o torno de bancada (prende bem uma peça na bancada)", // nieuw, nalezen
    'w.vijl': "a lima (para alisar o metal à mão)", // nieuw, nalezen
    'w.ijzerzaag': "a serra de arco (uma serra para metal)", // nieuw, nalezen
    'w.kolomboormachine': "o engenho de furar (um berbequim grande num pé)", // nieuw, nalezen
    'w.draadtap': "o macho de roscar (abre uma rosca num furo)", // nieuw, nalezen
    'w.braam': "a rebarba (uma aresta afiada depois de cortar metal)", // nieuw, nalezen
    's.metalwork.1': "Prende o metal no torno de bancada.", // nieuw, nalezen
    's.metalwork.2': "Lima a rebarba.", // nieuw, nalezen
    's.metalwork.3': "Mantém as mãos longe da broca.", // nieuw, nalezen
    'c.metalwork.q': "Porque é que a aresta está tão afiada?", // nieuw, nalezen
    'c.metalwork.a': "Ainda tem uma rebarba.", // nieuw, nalezen
    'c.metalwork': "Prende a peça, nunca a segures na mão", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "No engenho de furar, nunca segures uma peça pequena na mão. A broca pode agarrá-la e pô-la a rodar muito depressa. Prende-a no torno de bancada. Apanha o cabelo comprido, e não uses luvas com uma broca a rodar: pode puxar a luva. Usa óculos de proteção. Depois de serrar ou furar, o metal tem uma rebarba: uma aresta afiada. Tira-a com a lima antes de pegares na peça ou de a passares a alguém. Limpa as aparas de metal com uma escova, não com a mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Primeiro prendo a peça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Tens de fazer um furo numa peça pequena de metal. O torno de bancada está noutra bancada. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Vais buscar o torno, e prendes a peça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Seguras a peça com força na mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Pões luvas e seguras a peça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Uma broca pode agarrar uma peça pequena e pô-la a rodar. Então bate-te na mão. No torno de bancada, fica parada.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Montagem", // nieuw, nalezen
    'l.assembly': "Na linha de montagem", // nieuw, nalezen
    'w.werkinstructie': "a instrução de trabalho (uma folha com os passos)", // nieuw, nalezen
    'w.onderdelenbak': "a caixa de peças", // nieuw, nalezen
    'w.mal': "o gabarito (segura a peça no sítio certo)", // nieuw, nalezen
    'w.rolbaan': "o transportador de rolos", // nieuw, nalezen
    'w.montagetafel': "a bancada de montagem", // nieuw, nalezen
    'w.voetpedaal': "o pedal (um interruptor que carregas com o pé)", // nieuw, nalezen
    's.assembly.1': "Lê primeiro a instrução de trabalho.", // nieuw, nalezen
    's.assembly.2': "A caixa de peças está quase vazia.", // nieuw, nalezen
    's.assembly.3': "Põe a peça no gabarito.", // nieuw, nalezen
    'c.assembly.q': "Que passo vem agora?", // nieuw, nalezen
    'c.assembly.a': "O passo quatro. Vê na instrução de trabalho.", // nieuw, nalezen
    'c.assembly': "Segue os passos, pela mesma ordem", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Numa linha de montagem cada passo tem o seu lugar e a sua ordem. A instrução de trabalho mostra-os, muitas vezes com imagens. Faz os passos sempre pela mesma ordem, também quando achas que sabes uma maneira mais rápida. Outra ordem pode dar um produto que parece bom mas não funciona. Uma caixa está quase vazia? Diz a tempo, para a linha não parar. Vês um passo que podia ser melhor? Diz ao teu chefe de equipa: assim pode mudar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Preciso de peças novas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Encontraste uma maneira mais rápida de fazer o passo três. A instrução de trabalho diz outra coisa. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Primeiro perguntas ao teu chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "A partir de agora fazes à tua maneira.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Ensinas a tua maneira aos teus colegas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "A ordem tem muitas vezes uma razão que não vês. Se a tua maneira for melhor, pode mudar para todos.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Apertar e fixar", // nieuw, nalezen
    'w.schroefmachine': "a aparafusadora elétrica (está pendurada por cima da linha)", // nieuw, nalezen
    'w.momentsleutel': "a chave dinamométrica (faz clique quando o parafuso está apertado o suficiente)", // nieuw, nalezen
    'w.tiewrap': "a abraçadeira de plástico", // nieuw, nalezen
    'w.sluitring': "a anilha", // nieuw, nalezen
    'w.klinknagel': "o rebite", // nieuw, nalezen
    'w.popnageltang': "a rebitadora", // nieuw, nalezen
    's.fastening.1': "Aperta o parafuso com a chave dinamométrica.", // nieuw, nalezen
    's.fastening.2': "Não te esqueças da anilha.", // nieuw, nalezen
    's.fastening.3': "Junta os cabos com uma abraçadeira de plástico.", // nieuw, nalezen
    'c.fastening.q': "Quão apertado tem de ficar este parafuso?", // nieuw, nalezen
    'c.fastening.a': "Até a chave dinamométrica fazer clique.", // nieuw, nalezen
    'c.fastening': "O clique chega", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Uma chave dinamométrica faz clique quando um parafuso está apertado o suficiente. Para no clique: não rodes mais. Apertado demais pode partir o parafuso ou a peça, e solto demais pode cair. A aparafusadora elétrica funciona da mesma maneira: para sozinha. Põe cada anilha no seu lugar: uma anilha que falta é difícil de ver mais tarde. Conta os teus parafusos. Sobra um, ou falta-te um? Então há alguma coisa errada: avisa o teu chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Sobra um parafuso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "A tua chave dinamométrica fez clique. O parafuso ainda te parece um pouco solto. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Paras, e perguntas ao teu chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Rodas mais um bocadinho à mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Usas uma chave mais comprida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "O clique está regulado para a força certa. Se te parecer errado, talvez a chave precise de ser verificada. Rodar mais pode partir o parafuso.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Levantar e mover", // nieuw, nalezen
    'w.takel': "a talha (levanta peças pesadas com uma corrente)", // nieuw, nalezen
    'w.hijshaak': "o gancho de elevação", // nieuw, nalezen
    'w.tilhulp': "o auxiliar de elevação (segura uma peça por sucção)", // nieuw, nalezen
    'w.onderdelenkar': "o carrinho de peças", // nieuw, nalezen
    'w.draaitafel': "a mesa giratória (rodas a peça, não o teu corpo)", // nieuw, nalezen
    'w.rolcontainer': "o carro gaiola (uma gaiola alta com rodas)", // nieuw, nalezen
    's.handling.1': "Não levantes isto sem ajuda. Usa a talha.", // nieuw, nalezen
    's.handling.2': "O gancho de elevação está bem fechado?", // nieuw, nalezen
    's.handling.3': "Empurra o carrinho de peças, não o puxes.", // nieuw, nalezen
    'c.handling.q': "Posso ficar debaixo da talha?", // nieuw, nalezen
    'c.handling.a': "Não, nunca debaixo de uma carga suspensa.", // nieuw, nalezen
    'c.handling': "Deixa a talha fazer o trabalho pesado", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "As peças pesadas levantam-se com uma talha ou um auxiliar de elevação, não com as tuas costas. Verifica o gancho antes de levantar: a patilha de segurança tem de fechar. Levanta devagar, e mantém as mãos e os pés longe da carga. Nunca fiques nem passes debaixo de uma carga suspensa. Usa a mesa giratória para rodar uma peça: assim não tens de torcer as costas. Empurra um carrinho ou um carro gaiola: vês para onde vais, e as tuas costas trabalham menos. Usa uma talha só quando já aprendeste como. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Uso a talha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Uma peça é muito pesada. A talha ainda está ocupada mais dez minutos. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Esperas pela talha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': { m: "Levantas a peça sozinho, depressa.", f: "Levantas a peça sozinha, depressa.", x: "Levantas a peça sem ajuda, depressa." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Arrastas a peça pelo chão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Uma peça pesada pode magoar as tuas costas num segundo. Esperar dez minutos é melhor do que meses de dores.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "A verificação final", // nieuw, nalezen
    'w.typeplaatje': "a chapa de características (uma pequena chapa de metal com o tipo e o número)", // nieuw, nalezen
    'w.stempel': "o carimbo", // nieuw, nalezen
    'w.testbank': "a bancada de ensaio", // nieuw, nalezen
    'w.goedkeursticker': "o autocolante de aprovado (um autocolante verde: o produto está bom)", // nieuw, nalezen
    'w.kras': "o risco", // nieuw, nalezen
    'w.barst': "a racha", // nieuw, nalezen
    's.finalcheck.1': "A chapa de características está torta.", // nieuw, nalezen
    's.finalcheck.2': "Este produto tem um risco.", // nieuw, nalezen
    's.finalcheck.3': "Sem o autocolante de aprovado não sai.", // nieuw, nalezen
    'c.finalcheck.q': "Este produto está bom?", // nieuw, nalezen
    'c.finalcheck.a': "Não, tem uma racha.", // nieuw, nalezen
    'c.finalcheck': "Só os produtos bons levam o autocolante", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "A verificação final é a última oportunidade de encontrar um erro antes de o cliente o encontrar. Verifica cada ponto da lista, também quando há muito trabalho. Um pequeno risco ou uma racha passam facilmente despercebidos: olha com boa luz, e de mais de um lado. Põe o autocolante de aprovado ou o carimbo só quando todos os pontos estão bons. Não tens a certeza? Põe o produto à parte e pergunta. Um erro encontrado aqui custa pouco, e um erro no cliente custa muito. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Este produto fica à parte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Há muito trabalho na linha. Vês um pequeno risco num produto, por baixo da etiqueta. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Pões o produto à parte, e avisas o teu chefe de equipa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Pões o autocolante: é pequeno.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Mudas a etiqueta para cima do risco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Um pequeno risco pode ser sinal de um problema na linha. Escondê-lo só passa o problema para o cliente.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Cultivar, separar e a estufa", // nieuw, nalezen
    'l.sowing': "Semear e estacas", // nieuw, nalezen
    'w.zaad': "as sementes", // nieuw, nalezen
    'w.zaaibak': "o tabuleiro de sementeira", // nieuw, nalezen
    'w.stek': "a estaca (um bocado de planta que faz raízes novas)", // nieuw, nalezen
    'w.potgrond': "a terra para vasos", // nieuw, nalezen
    'w.kweekpot': "o vaso de cultivo", // nieuw, nalezen
    'w.gieter': "o regador", // nieuw, nalezen
    's.sowing.1': "Põe duas sementes em cada buraco.", // nieuw, nalezen
    's.sowing.2': "Põe a estaca na terra para vasos.", // nieuw, nalezen
    's.sowing.3': "Dá um pouco de água às plantas novas.", // nieuw, nalezen
    'c.sowing.q': "A que profundidade vai a semente?", // nieuw, nalezen
    'c.sowing.a': "Meio centímetro. Não mais fundo.", // nieuw, nalezen
    'c.sowing': "As plantas pequenas precisam de uma mão leve", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "As plantas novas são fracas. Pega numa estaca ou numa plântula por uma folha, não pelo caule: uma folha volta a crescer, um caule partido não. Aperta a terra com cuidado, sem força. Rega devagar, com um borrifo fino, para a água não levar as sementes. Trabalha com as mãos limpas e com tabuleiros limpos: as plantas novas ficam doentes com facilidade. Escreve a data e o tipo de planta em cada tabuleiro, para todos saberem o que lá está.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Pego nela pela folha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Tens de passar uma plântula pequena para um vaso. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Pegas nela com cuidado por uma folha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Puxas a planta pelo caule.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Apertas para a tirar com a terra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Uma folha pode voltar a crescer. Um caule partido não, e então a planta morre.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Separar e embalar", // nieuw, nalezen
    'w.tros': "o cacho (tomates num mesmo caule)", // nieuw, nalezen
    'w.bakje': "a cuvete (uma caixinha para fruta)", // nieuw, nalezen
    'w.sorteermachine': "a máquina de calibrar", // nieuw, nalezen
    'w.etiketpistool': "a pistola de etiquetas", // nieuw, nalezen
    'w.kleurenkaart': "a carta de cores (mostra quão madura a fruta tem de estar)", // nieuw, nalezen
    'w.tomatenschaar': "a tesoura de colheita", // nieuw, nalezen
    's.sorting.1': "Põe os cachos com cuidado na caixa.", // nieuw, nalezen
    's.sorting.2': "Este tomate está maduro demais. Vai para o lado.", // nieuw, nalezen
    's.sorting.3': "Vê na carta de cores.", // nieuw, nalezen
    'c.sorting.q': "Este tomate já está maduro que chegue?", // nieuw, nalezen
    'c.sorting.a': "Não, ainda está muito verde. Deixa-o na planta.", // nieuw, nalezen
    'c.sorting': "Cada fruto conta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "A fruta e os legumes pisam-se com facilidade. Pousa-os, não os deixes cair nem os atires. Hoje não vês a pisadura, mas amanhã o fruto está mole e castanho. Vê na carta de cores que cor vai para onde. Põe de lado um fruto estragado ou podre: um fruto mau numa cuvete pode estragar os outros. Mantém as cuvetes e as caixas limpas, e nunca as ponhas no chão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Este está estragado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Estás a encher cuvetes. Um tomate tem uma mancha castanha e mole. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Pões o tomate de lado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Escondes o tomate no fundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Embalas o tomate na mesma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Um tomate podre faz os outros apodrecer mais depressa. O cliente encontra-o, e a cuvete toda é devolvida.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "A estufa e o clima", // nieuw, nalezen
    'w.buisrailkar': "o carrinho de carris (anda sobre os tubos do aquecimento)", // nieuw, nalezen
    'w.druppelaar': "o gotejador (dá água gota a gota)", // nieuw, nalezen
    'w.luchtraam': "a janela de ventilação (uma janela no telhado)", // nieuw, nalezen
    'w.kasscherm': "a tela da estufa (um pano por baixo do telhado)", // nieuw, nalezen
    'w.ventilator': "a ventoinha", // nieuw, nalezen
    'w.thermometer': "o termómetro", // nieuw, nalezen
    's.greenhouse.1': "Leva o carrinho de carris até ao fim da fila.", // nieuw, nalezen
    's.greenhouse.2': "O gotejador está solto.", // nieuw, nalezen
    's.greenhouse.3': "Está calor. As janelas do telhado estão a abrir.", // nieuw, nalezen
    'c.greenhouse.q': "Porque está tanto calor na estufa?", // nieuw, nalezen
    'c.greenhouse.a': "A tela está fechada, e as janelas também.", // nieuw, nalezen
    'c.greenhouse': "Deixa o clima com o computador", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Numa estufa é um computador que controla o clima: as janelas, a tela, o aquecimento e a água. Não abras uma janela nem mudes uma regulação tu mesmo. Vês alguma coisa estranha, como um gotejador a pingar ou uma janela que não fecha? Diz ao teu chefe. O carrinho de carris anda sobre os tubos do aquecimento: só o uses quando já aprendeste como. Mantém os pés na plataforma, e nunca toques nos tubos: podem estar quentes. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Este gotejador está a pingar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Um gotejador está solto. Está a cair água no chão. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Voltas a pô-lo no sítio, e dizes ao teu chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Deixas estar: é só água.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Fechas a água da fila toda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Um gotejador solto gasta água, a planta recebe pouca, e um chão molhado escorrega.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Pragas e trabalhar com higiene", // nieuw, nalezen
    'w.luis': "o pulgão (um inseto verde pequeno nas plantas)", // nieuw, nalezen
    'w.vangplaat': "a armadilha adesiva (um cartão amarelo que apanha insetos)", // nieuw, nalezen
    'w.rups': "a lagarta", // nieuw, nalezen
    'w.sluipwesp': "a vespa parasitoide (uma vespa pequena que mata pragas)", // nieuw, nalezen
    'w.schimmel': "o bolor", // nieuw, nalezen
    'w.ontsmettingsmat': "o tapete de desinfeção (pisas nele à porta)", // nieuw, nalezen
    's.pests.1': "Há pulgões nesta folha.", // nieuw, nalezen
    's.pests.2': "Pendura a armadilha adesiva por cima das plantas.", // nieuw, nalezen
    's.pests.3': "Passa pelo tapete de desinfeção.", // nieuw, nalezen
    'c.pests.q': "Posso matar esta vespa?", // nieuw, nalezen
    'c.pests.a': "Não, é uma vespa parasitoide. Ajuda-nos.", // nieuw, nalezen
    'c.pests': "Não leves doenças de fila para fila", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Uma doença ou uma praga espalha-se depressa numa estufa. Podes levá-la nas mãos, na roupa e nas ferramentas. Por isso passa pelo tapete de desinfeção em cada porta, e lava as mãos quando vais para outra parte da estufa. Começa o trabalho nas filas saudáveis, e acaba nas filas doentes. Vês insetos, manchas ou bolor numa planta? Não lhe toques, mas diz ao teu chefe onde está. Alguns insetos na estufa são ajudantes: deixa-os em paz. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Há bolor aqui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Vês bolor cinzento em algumas plantas da tua fila. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Dizes ao teu chefe onde está.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Tiras as folhas más e continuas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Não dizes nada: são só algumas plantas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "O bolor espalha-se depressa. O teu chefe sabe o que fazer, e por onde começar.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Pneus, óleo e travões", // nieuw, nalezen
    'l.tyres': "Mudar pneus", // nieuw, nalezen
    'w.wielbout': "o parafuso da roda", // nieuw, nalezen
    'w.slagmoersleutel': "a chave de impacto", // nieuw, nalezen
    'w.bandenspanningsmeter': "o manómetro dos pneus", // nieuw, nalezen
    'w.bandenprofiel': "o piso do pneu (os sulcos no pneu)", // nieuw, nalezen
    'w.velg': "a jante", // nieuw, nalezen
    'w.bandenwisselaar': "a desmontadora de pneus (uma máquina para tirar o pneu da jante)", // nieuw, nalezen
    's.tyres.1': "Aperta os parafusos da roda em cruz.", // nieuw, nalezen
    's.tyres.2': "O piso do pneu está baixo demais.", // nieuw, nalezen
    's.tyres.3': "Mede a pressão com o manómetro dos pneus.", // nieuw, nalezen
    'c.tyres.q': "Estes pneus têm de sair?", // nieuw, nalezen
    'c.tyres.a': "Sim, o piso já quase não existe.", // nieuw, nalezen
    'c.tyres': "Enrosca à mão, aperta com a chave dinamométrica", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Uma chave de impacto é rápida e muito forte. Usa-a para tirar os parafusos da roda, mas não para os apertar com força. Primeiro enrosca os parafusos à mão. Depois aperta-os em cruz com uma chave dinamométrica, com a força certa para esse carro. Uma roda que não está bem apertada pode soltar-se em andamento. Verifica o piso e a pressão de cada pneu que te passa pelas mãos. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Primeiro enrosco-os à mão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Estás a pôr uma roda outra vez. Um colega diz: \"Usa a chave de impacto, é mais rápido.\" O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Enroscas à mão, e depois usas a chave dinamométrica.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Apertas com força com a chave de impacto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Enroscas à mão, e deixas assim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Uma chave de impacto pode deixar um parafuso apertado demais ou de menos. Só a chave dinamométrica dá a força certa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Mudar o óleo", // nieuw, nalezen
    'w.oliefilter': "o filtro do óleo", // nieuw, nalezen
    'w.oliepeilstok': "a vareta do óleo (mostra quanto óleo há)", // nieuw, nalezen
    'w.opvangbak': "o recipiente de recolha (apanha o óleo velho)", // nieuw, nalezen
    'w.trechter': "o funil", // nieuw, nalezen
    'w.aftapplug': "o bujão de escoamento", // nieuw, nalezen
    'w.olievat': "o bidão de óleo", // nieuw, nalezen
    's.oilchange.1': "Põe o recipiente de recolha debaixo do motor.", // nieuw, nalezen
    's.oilchange.2': "Desaperta o bujão de escoamento.", // nieuw, nalezen
    's.oilchange.3': "Vê a vareta do óleo.", // nieuw, nalezen
    'c.oilchange.q': "Quanto óleo tem de levar?", // nieuw, nalezen
    'c.oilchange.a': "Quatro litros. Depois vê a vareta.", // nieuw, nalezen
    'c.oilchange': "O óleo velho vai para o bidão, não para o esgoto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "O óleo velho faz mal à água e à terra. Um pouco de óleo pode sujar muita água. Por isso apanha todo o óleo velho no recipiente de recolha, e despeja-o no bidão do óleo velho. Nunca o despejes num esgoto nem num lava-loiça. Os filtros velhos e os panos com óleo vão para o seu próprio caixote. O óleo quente pode queimar a pele: deixa primeiro o motor arrefecer um pouco, e põe luvas. Limpa logo o óleo entornado: o óleo no chão escorrega. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Para onde vai o óleo velho?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "O recipiente de recolha está cheio de óleo velho. O bidão está do outro lado da oficina. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Levas o recipiente até ao bidão, com cuidado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Despejas o óleo no esgoto lá fora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Deixas o recipiente debaixo do carro para mais tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Óleo velho no esgoto suja a água. Um recipiente cheio debaixo de um carro acaba por levar um pontapé e virar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Travões e luzes", // nieuw, nalezen
    'w.remschijf': "o disco de travão", // nieuw, nalezen
    'w.remblok': "a pastilha de travão", // nieuw, nalezen
    'w.koplamp': "o farol", // nieuw, nalezen
    'w.remvloeistof': "o óleo dos travões", // nieuw, nalezen
    'w.remklauw': "a pinça de travão", // nieuw, nalezen
    'w.achterlamp': "o farolim traseiro", // nieuw, nalezen
    's.brakes.1': "As pastilhas de travão estão gastas.", // nieuw, nalezen
    's.brakes.2': "Verifica o óleo dos travões.", // nieuw, nalezen
    's.brakes.3': "O farolim traseiro esquerdo não funciona.", // nieuw, nalezen
    'c.brakes.q': "O disco de travão também tem de ser novo?", // nieuw, nalezen
    'c.brakes.a': "Sim, está fino demais.", // nieuw, nalezen
    'c.brakes': "Travões: verifica duas vezes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Os travões mantêm as pessoas vivas. Por isso trabalha com calma, e verifica o teu trabalho duas vezes. Depois de pastilhas ou discos novos, carrega algumas vezes no pedal do travão antes de o carro andar: a primeira vez o pedal vai muitas vezes fundo demais. O óleo dos travões faz mal à pele e à pintura: põe luvas, e limpa logo as gotas. Não sopres o pó dos travões com ar comprimido: limpa-o com produto de limpeza de travões e um pano. Antes de o carro sair, verifica todas as luzes, também as luzes de travagem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Carrego algumas vezes no pedal do travão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Montaste pastilhas de travão novas. O carro tem de ir lá para fora. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Carregas algumas vezes no pedal do travão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Tiras o carro logo a conduzir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Empurras o carro para fora sem verificar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Depois de pastilhas novas, o pedal pode ir fundo demais na primeira vez. Então o carro não para.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Ler avarias e a ordem de trabalho", // nieuw, nalezen
    'w.diagnosecomputer': "a máquina de diagnóstico (lê as avarias do carro)", // nieuw, nalezen
    'w.waarschuwingslampje': "a luz de aviso (no painel)", // nieuw, nalezen
    'w.werkorder': "a ordem de trabalho (o que tem de ser feito no carro)", // nieuw, nalezen
    'w.kentekenplaat': "a matrícula", // nieuw, nalezen
    'w.autosleutel': "a chave do carro", // nieuw, nalezen
    'w.stoelhoes': "a capa do banco (mantém o banco limpo)", // nieuw, nalezen
    's.diagnosis.1': "Liga a máquina de diagnóstico.", // nieuw, nalezen
    's.diagnosis.2': "A luz de aviso está acesa.", // nieuw, nalezen
    's.diagnosis.3': "Põe uma capa no banco.", // nieuw, nalezen
    'c.diagnosis.q': "O que é preciso fazer a este carro?", // nieuw, nalezen
    'c.diagnosis.a': "Vê na ordem de trabalho.", // nieuw, nalezen
    'c.diagnosis': "Trata o carro como se fosse teu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Um cliente dá-te o carro e a chave. Trata os dois com cuidado. Põe uma capa no banco e um tapete no chão antes de entrares. Faz só o que está na ordem de trabalho. Encontras outra coisa que está mal? Escreve e diz ao teu chefe: o cliente decide. Põe a chave no sítio dela, com a etiqueta. Não uses o rádio, o telefone nem as coisas que estão no carro. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Isto não está na ordem de trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Estás a mudar o óleo. Um pneu está quase careca. Não está na ordem de trabalho. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Escreves, e dizes ao teu chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Mudas o pneu logo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Não dizes nada: não é o teu trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "O cliente decide o que é feito e pago. Mas tem de saber que o pneu é perigoso.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Cortar relva e podar", // nieuw, nalezen
    'l.mowing': "Cortar a relva", // nieuw, nalezen
    'w.gras': "a relva", // nieuw, nalezen
    'w.maaien': "cortar (cortar a relva)", // nieuw, nalezen
    'w.grasmaaier': "o corta-relva", // nieuw, nalezen
    'w.zitmaaier': "o trator corta-relva (um corta-relva com banco para te sentares)", // nieuw, nalezen
    'w.bosmaaier': "a roçadora (um corta-relva num pau comprido)", // nieuw, nalezen
    'w.gelaatsscherm': "a viseira (protege a cara)", // nieuw, nalezen
    's.mowing.1': "Primeiro corta a relva ao longo da borda.", // nieuw, nalezen
    's.mowing.2': "A relva está molhada demais. Cortamos amanhã.", // nieuw, nalezen
    's.mowing.3': "Põe a tua viseira.", // nieuw, nalezen
    'c.mowing.q': "Posso levar o trator corta-relva?", // nieuw, nalezen
    'c.mowing.a': "Sim, mas primeiro tira as pedras.", // nieuw, nalezen
    'c.mowing': "As pedras voam longe", // nieuw, nalezen
    'c.mowing.b': "Um corta-relva ou uma roçadora pode atirar uma pedra muito longe e com muita força. Por isso primeiro passa a pé pela relva, e tira as pedras, os vidros e os ramos. Usa a tua viseira ou óculos de proteção, proteção auditiva e sapatos de segurança. Mantém as outras pessoas bem longe. Alguém se aproxima? Para a máquina. Nunca metas a mão debaixo de um corta-relva com o motor a trabalhar: desliga-o, e espera até a lâmina estar parada. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.mowing.p': "Pode afastar-se, por favor?", // nieuw, nalezen
    'c.mowing.s': "Estás a usar a roçadora. Um homem com um cão vem na tua direção. O que fazes?", // nieuw, nalezen
    'c.mowing.o1': "Paras a máquina até ele passar.", // nieuw, nalezen
    'c.mowing.o2': "Continuas: ele consegue ver-te.", // nieuw, nalezen
    'c.mowing.o3': "Viras-te para o outro lado, e continuas.", // nieuw, nalezen
    'c.mowing.w': "Uma pedra de uma roçadora pode ferir gravemente uma pessoa, mesmo de longe.", // nieuw, nalezen
    'l.pruning': "Podar", // nieuw, nalezen
    'w.snoeien': "podar (cortar ramos de uma planta)", // nieuw, nalezen
    'w.snoeischaar': "a tesoura de poda", // nieuw, nalezen
    'w.tak': "o ramo", // nieuw, nalezen
    'w.struik': "o arbusto", // nieuw, nalezen
    'w.boom': "a árvore", // nieuw, nalezen
    'w.snoeizaag': "o serrote de poda", // nieuw, nalezen
    's.pruning.1': "Poda os arbustos ao longo do caminho.", // nieuw, nalezen
    's.pruning.2': "Este ramo está seco. Serra-o.", // nieuw, nalezen
    's.pruning.3': "Põe os ramos num monte.", // nieuw, nalezen
    'c.pruning.q': "Que ramos têm de sair?", // nieuw, nalezen
    'c.pruning.a': "Só os ramos secos.", // nieuw, nalezen
    'c.pruning': "Um corte limpo cura melhor", // nieuw, nalezen
    'c.pruning.b': "Poda com uma tesoura afiada e limpa. Um corte limpo cura depressa; um ramo rasgado fica doente. Corta logo acima de um gomo ou de um ramo lateral, e não deixes um pedaço comprido. Tira primeiro os ramos secos e partidos. Mantém a outra mão longe das lâminas. Usa luvas: algumas plantas têm espinhos, ou deixam a pele vermelha. Limpa a tesoura depois do trabalho.", // nieuw, nalezen
    'c.pruning.p': "Onde tenho de cortar?", // nieuw, nalezen
    'c.pruning.s': "A tua tesoura de poda não corta bem. Rasga os ramos. O que fazes?", // nieuw, nalezen
    'c.pruning.o1': "Pedes uma tesoura afiada.", // nieuw, nalezen
    'c.pruning.o2': "Puxas o ramo com mais força.", // nieuw, nalezen
    'c.pruning.o3': "Continuas: é só um arbusto.", // nieuw, nalezen
    'c.pruning.w': "Uma tesoura que não corta rasga o ramo. A planta fica doente, e tu trabalhas mais.", // nieuw, nalezen
    'l.hedge': "Aparar a sebe", // nieuw, nalezen
    'w.heg': "a sebe", // nieuw, nalezen
    'w.heggenschaar': "o corta-sebes (uma máquina que corta uma sebe)", // nieuw, nalezen
    'w.kruiwagen': "o carrinho de mão", // nieuw, nalezen
    'w.hark': "o ancinho", // nieuw, nalezen
    'w.snoeiafval': "os resíduos verdes (ramos e folhas cortados)", // nieuw, nalezen
    'w.zeil': "a lona (um plástico grande)", // nieuw, nalezen
    's.hedge.1': "Põe a lona debaixo da sebe.", // nieuw, nalezen
    's.hedge.2': "Corta a sebe bem direita.", // nieuw, nalezen
    's.hedge.3': "Leva os resíduos verdes no carrinho de mão.", // nieuw, nalezen
    'c.hedge.q': "A que altura tem de ficar a sebe?", // nieuw, nalezen
    'c.hedge.a': "Até à corda. Não mais baixo.", // nieuw, nalezen
    'c.hedge': "Procura primeiro ninhos", // nieuw, nalezen
    'c.hedge.b': "Na primavera e no verão, os pássaros fazem ninhos nas sebes e nos arbustos. Os ninhos que os pássaros usam são protegidos. Por isso olha para dentro da sebe antes de cortares. Vês um ninho com ovos ou pássaros pequenos? Não cortes aí, e diz ao teu chefe. Segura o corta-sebes com as duas mãos. Põe-te bem firme no chão ou numa boa escada, nunca numa cadeira ou num balde. Mantém o cabo atrás de ti.", // nieuw, nalezen
    'c.hedge.p': "Há um ninho aqui.", // nieuw, nalezen
    'c.hedge.s': "Estás a aparar uma sebe em maio. Vês um ninho com pássaros pequenos. O que fazes?", // nieuw, nalezen
    'c.hedge.o1': "Paras aí, e dizes ao teu chefe.", // nieuw, nalezen
    'c.hedge.o2': "Cortas à volta dele com cuidado.", // nieuw, nalezen
    'c.hedge.o3': "Tiras o ninho, e continuas.", // nieuw, nalezen
    'c.hedge.w': "Os ninhos que os pássaros usam são protegidos. O teu chefe decide o que acontece com esta parte da sebe.", // nieuw, nalezen
    'l.chainsaw': "A motosserra e o soprador de folhas", // nieuw, nalezen
    'w.kettingzaag': "a motosserra", // nieuw, nalezen
    'w.stam': "o tronco (de uma árvore)", // nieuw, nalezen
    'w.zaagbroek': "as calças anticorte (param a corrente)", // nieuw, nalezen
    'w.bladblazer': "o soprador de folhas", // nieuw, nalezen
    'w.bladeren': "as folhas", // nieuw, nalezen
    'w.jerrycan': "o jerricã (uma lata para combustível)", // nieuw, nalezen
    's.chainsaw.1': "Veste as tuas calças anticorte.", // nieuw, nalezen
    's.chainsaw.2': "Sopra as folhas para um monte.", // nieuw, nalezen
    's.chainsaw.3': "Só metas combustível quando o motor estiver frio.", // nieuw, nalezen
    'c.chainsaw.q': "Posso trabalhar com a motosserra?", // nieuw, nalezen
    'c.chainsaw.a': "Ainda não. Primeiro fazes uma formação.", // nieuw, nalezen
    'c.chainsaw': "Motosserra só com formação", // nieuw, nalezen
    'c.chainsaw.b': "A motosserra é uma das ferramentas mais perigosas no trabalho dos espaços verdes. Só trabalhes com ela quando já fizeste uma formação, e o teu chefe diz que podes. Usa sempre calças anticorte, um capacete com viseira e proteção auditiva, luvas e botas de segurança. Nunca trabalhes com uma motosserra sem mais ninguém por perto. Segura-a com as duas mãos, e nunca serres acima dos ombros. Com um soprador de folhas: nunca sopres na direção de pessoas, carros ou janelas abertas. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.chainsaw.p': "Ainda não fiz uma formação para isto.", // nieuw, nalezen
    'c.chainsaw.s': "Um colega diz: \"Pega na motosserra, é fácil.\" Nunca fizeste uma formação. O que fazes?", // nieuw, nalezen
    'c.chainsaw.o1': "Dizes que ainda não fizeste a formação.", // nieuw, nalezen
    'c.chainsaw.o2': "Experimentas com cuidado, só uma vez.", // nieuw, nalezen
    'c.chainsaw.o3': "Pegas nela, e primeiro vês um vídeo.", // nieuw, nalezen
    'c.chainsaw.w': "Uma motosserra pode cortar-te a perna num segundo. Sem formação não sabes como ela pode saltar para trás.", // nieuw, nalezen
    'u.planting': "Plantar, ervas daninhas e a rua", // nieuw, nalezen
    'l.weeding': "Arrancar ervas daninhas", // nieuw, nalezen
    'w.onkruid': "as ervas daninhas (plantas que têm de sair)", // nieuw, nalezen
    'w.wieden': "mondar (arrancar ervas daninhas)", // nieuw, nalezen
    'w.schoffel': "a sachola", // nieuw, nalezen
    'w.perk': "o canteiro", // nieuw, nalezen
    'w.onkruidbrander': "o queimador de ervas (mata as ervas daninhas com calor)", // nieuw, nalezen
    'w.wortel': "a raiz (de uma planta)", // nieuw, nalezen
    's.weeding.1': "Arranca as ervas daninhas, com a raiz.", // nieuw, nalezen
    's.weeding.2': "Sacha o canteiro junto à entrada.", // nieuw, nalezen
    's.weeding.3': "Cuidado: o queimador de ervas está quente.", // nieuw, nalezen
    'c.weeding.q': "Isto é uma erva daninha?", // nieuw, nalezen
    'c.weeding.a': "Não, isso é uma planta. Deixa-a ficar.", // nieuw, nalezen
    'c.weeding': "Ervas daninhas: a raiz tem de sair", // nieuw, nalezen
    'c.weeding.b': "Uma erva daninha volta a crescer quando a raiz fica na terra. Por isso arranca-a com a raiz, ou sacha logo abaixo da terra. Trabalha quando a terra está um pouco molhada: então a raiz sai com facilidade. Não uses produtos de pulverizar contra as ervas daninhas, a não ser que tenhas aprendido como e o teu chefe o diga. Um queimador de ervas está muito quente: mantém-no longe de relva seca, folhas, sebes, carros e contentores do lixo. Nunca o pouses enquanto está a queimar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.weeding.p': "Isto é uma erva daninha ou uma planta?", // nieuw, nalezen
    'c.weeding.s': "Estás a usar o queimador de ervas. Ao lado do caminho há uma sebe seca. O que fazes?", // nieuw, nalezen
    'c.weeding.o1': "Aí arrancas as ervas daninhas à mão.", // nieuw, nalezen
    'c.weeding.o2': "Queimas depressa, e segues em frente.", // nieuw, nalezen
    'c.weeding.o3': "Queimas, e olhas uma vez para trás.", // nieuw, nalezen
    'c.weeding.w': "Uma sebe seca pega fogo depressa. Um incêndio perto de casas ou carros é muito perigoso.", // nieuw, nalezen
    'l.planting': "Plantar", // nieuw, nalezen
    'w.planten': "plantar", // nieuw, nalezen
    'w.schep': "a pá", // nieuw, nalezen
    'w.plantgat': "a cova (para plantar)", // nieuw, nalezen
    'w.kluit': "o torrão (a terra à volta das raízes)", // nieuw, nalezen
    'w.compost': "o composto", // nieuw, nalezen
    'w.boompaal': "a estaca (um pau que segura uma árvore nova)", // nieuw, nalezen
    's.planting.1': "Abre uma cova para a árvore.", // nieuw, nalezen
    's.planting.2': "Põe a árvore direita, ao lado da estaca.", // nieuw, nalezen
    's.planting.3': "Dá muita água às plantas novas.", // nieuw, nalezen
    'c.planting.q': "Onde vai esta planta?", // nieuw, nalezen
    'c.planting.a': "Ao fundo do canteiro, junto ao muro.", // nieuw, nalezen
    'c.planting': "Debaixo do chão: cabos e canos", // nieuw, nalezen
    'c.planting.b': "Debaixo da relva e do passeio há muitas vezes cabos e canos: de eletricidade, gás, água e internet. Por isso cava com cuidado. Vês uma fita de cor ou uma placa de plástico na terra, ou bates em alguma coisa dura? Para de cavar, e diz ao teu chefe. Nunca continues a cavar à força. Levanta uma árvore pesada ou um torrão grande com outra pessoa, com os joelhos dobrados. Dá água a uma planta nova no mesmo dia. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.planting.p': "Estou a bater em alguma coisa dura.", // nieuw, nalezen
    'c.planting.s': "Estás a abrir uma cova. A tua pá bate numa fita de plástico vermelha. O que fazes?", // nieuw, nalezen
    'c.planting.o1': "Paras de cavar, e dizes ao teu chefe.", // nieuw, nalezen
    'c.planting.o2': "Continuas a cavar com cuidado, ao lado da fita.", // nieuw, nalezen
    'c.planting.o3': "Arrancas a fita, e continuas.", // nieuw, nalezen
    'c.planting.w': "Uma fita na terra avisa que há um cabo ou um cano por baixo. Um cano de gás ou um cabo elétrico é muito perigoso.", // nieuw, nalezen
    'l.roadside': "Trabalhar junto à estrada", // nieuw, nalezen
    'w.pion': "o cone (de trânsito)", // nieuw, nalezen
    'w.verkeer': "o trânsito", // nieuw, nalezen
    'w.stoep': "o passeio (o caminho ao lado da estrada)", // nieuw, nalezen
    'w.fietser': "o ciclista", // nieuw, nalezen
    'w.pijlwagen': "o reboque de sinalização (um reboque com uma seta grande que avisa os condutores)", // nieuw, nalezen
    'w.berm': "a berma (a relva ao lado da estrada)", // nieuw, nalezen
    's.roadside.1': "Veste o teu colete. Estamos a trabalhar junto à estrada.", // nieuw, nalezen
    's.roadside.2': "Põe os cones atrás da carrinha.", // nieuw, nalezen
    's.roadside.3': "Cuidado com os ciclistas.", // nieuw, nalezen
    'c.roadside.q': "Já posso atravessar?", // nieuw, nalezen
    'c.roadside.a': "Não, espera. Vem aí um camião.", // nieuw, nalezen
    'c.roadside': "Junto à estrada: faz-te ver, fica atrás dos cones", // nieuw, nalezen
    'c.roadside.b': "Trabalhar junto à estrada é perigoso: os condutores olham para o telemóvel, ou andam depressa demais. Por isso usa sempre o teu colete refletor, também para um trabalho curto. Põe os cones e as placas antes de começares, e recolhe-os no fim. Estaciona a carrinha como escudo entre ti e o trânsito. Fica atrás dos cones. Nunca dês um passo para trás sem olhar, e trabalha de cara para o trânsito quando puderes. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.roadside.p': "Primeiro ponho os cones.", // nieuw, nalezen
    'c.roadside.s': "Tens de cortar um arbusto pequeno junto à estrada. Demora cinco minutos. O que fazes?", // nieuw, nalezen
    'c.roadside.o1': "Vestes o colete, e pões os cones.", // nieuw, nalezen
    'c.roadside.o2': "Fazes depressa, sem os cones.", // nieuw, nalezen
    'c.roadside.o3': "Pedes a um colega para estar atento aos carros.", // nieuw, nalezen
    'c.roadside.w': "Um acidente acontece num só segundo. Cinco minutos sem cones são cinco minutos sem proteção.", // nieuw, nalezen
    'l.litter': "Lixo na rua e o bairro", // nieuw, nalezen
    'w.zwerfafval': "o lixo na rua (lixo deixado no chão)", // nieuw, nalezen
    'w.grijper': "a pinça de apanhar lixo (um pau que agarra o lixo)", // nieuw, nalezen
    'w.vuilniszak': "o saco do lixo", // nieuw, nalezen
    'w.scherven': "os vidros partidos (pedaços afiados)", // nieuw, nalezen
    'w.aanhanger': "o reboque", // nieuw, nalezen
    'w.bewoner': "o morador (alguém que vive aqui)", // nieuw, nalezen
    's.litter.1': "Apanha o lixo com a pinça.", // nieuw, nalezen
    's.litter.2': "Cuidado, há vidros partidos aqui.", // nieuw, nalezen
    's.litter.3': "Põe os sacos do lixo junto ao reboque.", // nieuw, nalezen
    'c.litter.q': "Quando vão podar esta árvore?", // nieuw, nalezen
    'c.litter.a': "Não sei. Pergunte à câmara municipal.", // nieuw, nalezen
    'c.litter': "Nunca toques numa agulha", // nieuw, nalezen
    'c.litter.b': "Nos parques e nos arbustos às vezes encontras uma agulha de uma seringa. Nunca a apanhes com a mão, também não com luvas. Usa a pinça de apanhar lixo, e põe a agulha numa caixa dura ou numa garrafa com tampa, nunca num saco do lixo. Diz ao teu chefe. Picaste-te numa agulha? Lava a ferida com muita água, e liga logo a um médico. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.litter.p': "Está aqui uma agulha.", // nieuw, nalezen
    'c.litter.s': "Vês uma agulha na relva, ao lado de um banco. O que fazes?", // nieuw, nalezen
    'c.litter.o1': "Apanha-la com a pinça de apanhar lixo.", // nieuw, nalezen
    'c.litter.o2': "Apanha-la com as luvas postas.", // nieuw, nalezen
    'c.litter.o3': "Pões no saco do lixo.", // nieuw, nalezen
    'c.litter.w': "Uma agulha pode passar uma doença. As luvas não param uma agulha, e uma caixa dura protege os outros.", // nieuw, nalezen
    'u.frontdesk': "Receção, correio e reuniões", // nieuw, nalezen
    'l.reception': "Na receção", // nieuw, nalezen
    'w.balie': "o balcão, a receção", // nieuw, nalezen
    'w.bezoeker': "o visitante", // nieuw, nalezen
    'w.intercom': "o intercomunicador (falas com alguém à porta)", // nieuw, nalezen
    'w.doorverbinden': "passar a chamada (ao telefone)", // nieuw, nalezen
    'w.toestel': "a extensão (um número de telefone dentro do edifício)", // nieuw, nalezen
    'w.wachtruimte': "a sala de espera", // nieuw, nalezen
    's.reception.1': "Bom dia, posso ajudar?", // nieuw, nalezen
    's.reception.2': "Vou passar a chamada.", // nieuw, nalezen
    's.reception.3': "Sente-se na sala de espera, por favor.", // nieuw, nalezen
    'c.reception.q': "Tenho uma reunião marcada com a senhora Jansen.", // nieuw, nalezen
    'c.reception.a': "Um momento. Vou ligar-lhe.", // nieuw, nalezen
    'c.reception': "Tu és a primeira cara", // nieuw, nalezen
    'c.reception.b': "Na receção és a primeira pessoa que um visitante encontra. Levanta os olhos, sorri e cumprimenta, também quando tens muito que fazer ao telefone. Fala com os visitantes usando \"u\" (a forma educada). Atende o telefone com o nome da empresa e o teu próprio nome. Não sabes a resposta? Diz isso, e procura alguém que saiba. Nunca dês nomes, números de telefone ou salas do pessoal a pessoas que não conheces.", // nieuw, nalezen
    'c.reception.p': "Bom dia, em que posso ajudar?", // nieuw, nalezen
    'c.reception.s': "Estás ao telefone. Um visitante chega ao balcão e espera. O que fazes?", // nieuw, nalezen
    'c.reception.o1': "Levantas os olhos, e mostras que vais já atender.", // nieuw, nalezen
    'c.reception.o2': "Acabas a chamada, sem levantar os olhos.", // nieuw, nalezen
    'c.reception.o3': "Desligas logo o telefone.", // nieuw, nalezen
    'c.reception.w': "Um visitante que é visto espera com calma. Um visitante que não é visto sente que não é bem-vindo.", // nieuw, nalezen
    'l.visitors': "Receber visitantes", // nieuw, nalezen
    'w.bezoekerspasje': "o cartão de visitante", // nieuw, nalezen
    'w.lift': "o elevador", // nieuw, nalezen
    'w.garderobe': "o bengaleiro (onde penduras o casaco)", // nieuw, nalezen
    'w.parkeerplaats': "o lugar de estacionamento", // nieuw, nalezen
    'w.hal': "o átrio (a sala grande à entrada)", // nieuw, nalezen
    'w.begeleiden': "acompanhar (ir com alguém até um sítio)", // nieuw, nalezen
    's.visitors.1': "Pode escrever aqui o seu nome?", // nieuw, nalezen
    's.visitors.2': "Aqui está o seu cartão de visitante.", // nieuw, nalezen
    's.visitors.3': "Vou consigo até ao elevador.", // nieuw, nalezen
    'c.visitors.q': "Onde posso deixar o casaco?", // nieuw, nalezen
    'c.visitors.a': "No bengaleiro, ao lado do elevador.", // nieuw, nalezen
    'c.visitors': "Todos os visitantes se registam", // nieuw, nalezen
    'c.visitors.b': "Cada visitante escreve o nome na lista, ou regista-se no ecrã, e recebe um cartão de visitante. Assim sabes quem está no edifício. Isto é importante quando há um incêndio: todos têm de sair, e alguém verifica a lista. No fim da visita, o visitante devolve o cartão. Não deixes entrar atrás de ti pessoas que não conheces: pergunta com simpatia com quem vêm falar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.visitors.p': "Vem falar com quem?", // nieuw, nalezen
    'c.visitors.s': "Um homem entra atrás de um colega. Não tem cartão. O que fazes?", // nieuw, nalezen
    'c.visitors.o1': "Perguntas-lhe com simpatia com quem vem falar.", // nieuw, nalezen
    'c.visitors.o2': "Deixa-lo ir: entrou com o pessoal.", // nieuw, nalezen
    'c.visitors.o3': "Chamas logo a polícia.", // nieuw, nalezen
    'c.visitors.w': "Numa emergência, tens de saber quem está lá dentro. E nem todos os que entram têm uma razão para lá estar.", // nieuw, nalezen
    'l.mailroom': "Correio e encomendas", // nieuw, nalezen
    'w.postkamer': "a sala do correio", // nieuw, nalezen
    'w.koerier': "o estafeta (alguém que traz encomendas)", // nieuw, nalezen
    'w.postvak': "o cacifo do correio (uma caixa para o correio, uma por pessoa)", // nieuw, nalezen
    'w.envelop': "o envelope", // nieuw, nalezen
    'w.afdeling': "o departamento", // nieuw, nalezen
    'w.postkar': "o carrinho do correio", // nieuw, nalezen
    's.mailroom.1': "O estafeta traz uma encomenda.", // nieuw, nalezen
    's.mailroom.2': "Põe as cartas no cacifo certo.", // nieuw, nalezen
    's.mailroom.3': "Esta encomenda está danificada.", // nieuw, nalezen
    'c.mailroom.q': "Para quem é esta encomenda?", // nieuw, nalezen
    'c.mailroom.a': "Para as Finanças, no segundo andar.", // nieuw, nalezen
    'c.mailroom': "O correio é privado", // nieuw, nalezen
    'c.mailroom.b': "O correio e as encomendas são privados. Nunca abras uma carta ou uma encomenda de outra pessoa. Verifica o nome e o departamento em cada coisa, e põe-na no cacifo certo. Quando um estafeta traz uma encomenda, olha para ela antes de assinares: está danificada? Escreve isso. Uma encomenda é estranha: cheira, pinga, ou não tem remetente? Não a abras, e diz ao teu chefe. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.mailroom.p': "A caixa está molhada e rasgada.", // nieuw, nalezen
    'c.mailroom.s': "Um estafeta traz uma encomenda. Um canto está molhado e rasgado. O que fazes?", // nieuw, nalezen
    'c.mailroom.o1': "Escreves o dano antes de assinares.", // nieuw, nalezen
    'c.mailroom.o2': "Assinas, e não dizes nada a ninguém.", // nieuw, nalezen
    'c.mailroom.o3': "Abre-la, para ver se está tudo lá.", // nieuw, nalezen
    'c.mailroom.w': "Depois de assinares, parece que a encomenda estava boa. Então ninguém paga o dano.", // nieuw, nalezen
    'l.meetingroom': "Preparar uma sala de reuniões", // nieuw, nalezen
    'w.vergaderzaal': "a sala de reuniões", // nieuw, nalezen
    'w.beamer': "o projetor", // nieuw, nalezen
    'w.whiteboard': "o quadro branco", // nieuw, nalezen
    'w.thermoskan': "a garrafa-termo (mantém o café quente)", // nieuw, nalezen
    'w.kopje': "a chávena", // nieuw, nalezen
    'w.koffieautomaat': "a máquina de café", // nieuw, nalezen
    's.meetingroom.1': "Põe dez cadeiras à volta da mesa.", // nieuw, nalezen
    's.meetingroom.2': "Prepara o café e o chá.", // nieuw, nalezen
    's.meetingroom.3': "O projetor não funciona.", // nieuw, nalezen
    'c.meetingroom.q': "A que horas começa a reunião?", // nieuw, nalezen
    'c.meetingroom.a': "Às dez. Vê se está tudo pronto.", // nieuw, nalezen
    'c.meetingroom': "Pronta antes do primeiro convidado", // nieuw, nalezen
    'c.meetingroom.b': "Uma sala de reuniões tem de estar pronta antes de entrar a primeira pessoa. Verifica as cadeiras, a mesa, o projetor e os cabos. Põe café, chá e água, com chávenas e leite. Leva as bebidas quentes com cuidado, e nunca por cima das pessoas. Depois da reunião, limpa a mesa e leva tudo de volta. O que ouves numa sala de reuniões, guardas para ti.", // nieuw, nalezen
    'c.meetingroom.p': "A sala está pronta.", // nieuw, nalezen
    'c.meetingroom.s': "A reunião começa daqui a cinco minutos. O projetor não funciona. O que fazes?", // nieuw, nalezen
    'c.meetingroom.o1': "Dizes logo a quem organiza a reunião.", // nieuw, nalezen
    'c.meetingroom.o2': "Esperas: talvez ninguém precise dele.", // nieuw, nalezen
    'c.meetingroom.o3': "Deixas um bilhete em cima da mesa.", // nieuw, nalezen
    'c.meetingroom.w': "Cinco minutos ainda dão tempo para o arranjar ou para encontrar outra sala. Mais tarde, ficam todos à espera.", // nieuw, nalezen
    'u.maintenance': "Avarias, reparações e mudanças", // nieuw, nalezen
    'l.faults': "Comunicar uma avaria", // nieuw, nalezen
    'w.melding': "a comunicação (dizes que alguma coisa está mal)", // nieuw, nalezen
    'w.lekkage': "a fuga de água (sai água)", // nieuw, nalezen
    'w.verwarming': "o aquecimento", // nieuw, nalezen
    'w.airco': "o ar condicionado", // nieuw, nalezen
    'w.afvoer': "o esgoto, o cano de escoamento", // nieuw, nalezen
    'w.verstopt': "entupido (nada passa)", // nieuw, nalezen
    's.faults.1': "Estou a comunicar a avaria.", // nieuw, nalezen
    's.faults.2': "Há uma fuga de água na cozinha.", // nieuw, nalezen
    's.faults.3': "O esgoto da sanita está entupido.", // nieuw, nalezen
    'c.faults.q': "Porque está tanto frio aqui?", // nieuw, nalezen
    'c.faults.a': "O aquecimento está avariado. O técnico vem amanhã.", // nieuw, nalezen
    'c.faults': "Comunica, não arranjes sem ajuda", // nieuw, nalezen
    'c.faults.b': "Vês alguma coisa avariada, como uma fuga de água, uma lâmpada fundida ou uma porta que não fecha? Comunica, também quando é pequena: no sistema ou ao teu chefe. Diz onde é, o que vês e desde quando. Não repares tu a eletricidade, o gás ou o aquecimento. Cheira a gás? Não uses nenhum interruptor nem nenhum telefone perto, abre as janelas, tira as pessoas lá de dentro, e pede ajuda cá fora. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.faults.p': "Quero comunicar uma avaria.", // nieuw, nalezen
    'c.faults.s': "Está a pingar água do teto no corredor. O que fazes?", // nieuw, nalezen
    'c.faults.o1': "Comunicas, e pões um balde por baixo.", // nieuw, nalezen
    'c.faults.o2': "Esperas: talvez pare sozinha.", // nieuw, nalezen
    'c.faults.o3': "Abres o teto para ver.", // nieuw, nalezen
    'c.faults.w': "Uma pequena fuga pode tornar-se um grande estrago. Um balde mantém o chão seco, para ninguém escorregar.", // nieuw, nalezen
    'l.repairs': "Pequenas reparações", // nieuw, nalezen
    'w.vervangen': "substituir (pôr um novo)", // nieuw, nalezen
    'w.deurklink': "o puxador da porta", // nieuw, nalezen
    'w.scharnier': "a dobradiça", // nieuw, nalezen
    'w.gereedschapskist': "a caixa de ferramentas", // nieuw, nalezen
    'w.rookmelder': "o detetor de fumo", // nieuw, nalezen
    'w.batterij': "a pilha", // nieuw, nalezen
    's.repairs.1': "Muda a lâmpada do corredor.", // nieuw, nalezen
    's.repairs.2': "O puxador da porta está solto.", // nieuw, nalezen
    's.repairs.3': "Pega no escadote, não numa cadeira.", // nieuw, nalezen
    'c.repairs.q': "O detetor de fumo está a apitar?", // nieuw, nalezen
    'c.repairs.a': "Sim, a pilha está quase vazia.", // nieuw, nalezen
    'c.repairs': "Um escadote, nunca uma cadeira", // nieuw, nalezen
    'c.repairs.b': "Para uma lâmpada ou uma prateleira alta, usa um escadote, nunca uma cadeira, uma mesa ou uma caixa. Põe-no num chão plano, abre-o todo, e não subas para o último degrau. Desliga a luz antes de mudares uma lâmpada, e deixa uma lâmpada velha arrefecer. Faz só as reparações que aprendeste. Arruma as ferramentas na caixa quando acabares, para ninguém tropeçar nelas. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.repairs.p': "Vou buscar o escadote.", // nieuw, nalezen
    'c.repairs.s': "Uma lâmpada no escritório está fundida. O escadote está noutro piso. O que fazes?", // nieuw, nalezen
    'c.repairs.o1': "Vais buscar o escadote.", // nieuw, nalezen
    'c.repairs.o2': "Sobes para uma cadeira de escritório.", // nieuw, nalezen
    'c.repairs.o3': "Sobes para a secretária.", // nieuw, nalezen
    'c.repairs.w': "Uma cadeira pode rolar ou virar. Uma queda de uma cadeira pode magoar-te muito.", // nieuw, nalezen
    'l.moving': "Mudar um posto de trabalho", // nieuw, nalezen
    'w.verhuisdoos': "a caixa de mudanças", // nieuw, nalezen
    'w.bureau': "a secretária (a mesa de escritório)", // nieuw, nalezen
    'w.bureaustoel': "a cadeira de escritório", // nieuw, nalezen
    'w.werkplek': "o posto de trabalho (a secretária onde alguém trabalha)", // nieuw, nalezen
    'w.kamernummer': "o número da sala", // nieuw, nalezen
    'w.plattegrond': "a planta (um mapa do edifício)", // nieuw, nalezen
    's.moving.1': "Escreve o número da sala em todas as caixas.", // nieuw, nalezen
    's.moving.2': "Põe as caixas no carrinho de mão.", // nieuw, nalezen
    's.moving.3': "Esvazia o posto de trabalho.", // nieuw, nalezen
    'c.moving.q': "Para onde tem de ir esta secretária?", // nieuw, nalezen
    'c.moving.a': "Para a sala doze. Vê na planta.", // nieuw, nalezen
    'c.moving': "Mudanças: levanta bem, marca tudo", // nieuw, nalezen
    'c.moving.b': "As mudanças são trabalho pesado. Não enchas uma caixa demais: os livros e as pastas são pesados. Levanta com os joelhos dobrados e as costas direitas, junto ao corpo. Usa o carrinho de mão para mais caixas, e levanta uma secretária com outra pessoa. Escreve o número da sala nova em cada caixa, cadeira e computador. Primeiro desliga os cabos. Nunca ponhas caixas num corredor ou em frente a uma saída de emergência.", // nieuw, nalezen
    'c.moving.p': "Podes ajudar-me a levantar isto?", // nieuw, nalezen
    'c.moving.s': "Tens de mudar uma secretária pesada. O teu colega está na pausa. O que fazes?", // nieuw, nalezen
    'c.moving.o1': "Esperas por ajuda, e levantam-na juntos.", // nieuw, nalezen
    'c.moving.o2': { m: "Arrasta-la sozinho.", f: "Arrasta-la sozinha.", x: "Arrasta-la sem ajuda." }, // nieuw, nalezen
    'c.moving.o3': { m: "Levanta-la sozinho, com muito cuidado.", f: "Levanta-la sozinha, com muito cuidado.", x: "Levanta-la sem ajuda, com muito cuidado." }, // nieuw, nalezen
    'c.moving.w': "Uma secretária pesada pode magoar-te as costas quando a levantas sem ajuda. Com outra pessoa é fácil e seguro.", // nieuw, nalezen
    'l.closing': "Abrir e fechar o edifício", // nieuw, nalezen
    'w.sleutelbos': "o molho de chaves", // nieuw, nalezen
    'w.afsluiten': "fechar à chave", // nieuw, nalezen
    'w.ronde': "a ronda (passar por todas as salas)", // nieuw, nalezen
    'w.raam': "a janela", // nieuw, nalezen
    'w.alarmcode': "o código do alarme", // nieuw, nalezen
    'w.nachtslot': "a fechadura de segurança (a fechadura extra para a noite)", // nieuw, nalezen
    's.closing.1': "Estou a fazer a última ronda pelo edifício.", // nieuw, nalezen
    's.closing.2': "As janelas estão todas fechadas?", // nieuw, nalezen
    's.closing.3': "Fecha a porta com a fechadura de segurança.", // nieuw, nalezen
    'c.closing.q': "Ainda está alguém lá dentro?", // nieuw, nalezen
    'c.closing.a': "Não, já saíram todos. Vou fechar.", // nieuw, nalezen
    'c.closing': "O código do alarme é secreto", // nieuw, nalezen
    'c.closing.b': "No fim do dia fazes a última ronda. Verifica que não ficou ninguém lá dentro, que as janelas estão fechadas e as luzes apagadas. As saídas de emergência ficam livres. Guarda as chaves contigo, nunca numa gaveta. O código do alarme é secreto: nunca o dês a ninguém, também não ao telefone. O alarme dispara? Segue os passos da tua empresa. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.closing.p': "Não passo o código do alarme a ninguém.", // nieuw, nalezen
    'c.closing.s': "Alguém liga: \"Sou da empresa do alarme. Qual é o vosso código?\" O que fazes?", // nieuw, nalezen
    'c.closing.o1': "Dizes que não, e avisas o teu chefe.", // nieuw, nalezen
    'c.closing.o2': "Dás o código: ele parece simpático.", // nieuw, nalezen
    'c.closing.o3': "Dás só metade do código.", // nieuw, nalezen
    'c.closing.w': "Uma empresa de alarmes a sério não pede o código ao telefone. Um ladrão talvez peça.", // nieuw, nalezen
    'u.guarding': "Rondas e controlo de acessos", // nieuw, nalezen
    'l.patrol': "A ronda", // nieuw, nalezen
    'w.surveilleren': "patrulhar (andar à volta e vigiar)", // nieuw, nalezen
    'w.zaklamp': "a lanterna", // nieuw, nalezen
    'w.terrein': "o recinto (o terreno à volta de um edifício)", // nieuw, nalezen
    'w.hek': "a vedação, o portão", // nieuw, nalezen
    'w.inbraak': "o assalto (alguém entra para roubar)", // nieuw, nalezen
    'w.openstaan': "estar aberto (uma porta ou janela que devia estar fechada)", // nieuw, nalezen
    's.patrol.1': "Faço uma ronda de duas em duas horas.", // nieuw, nalezen
    's.patrol.2': "O portão atrás do pavilhão está aberto.", // nieuw, nalezen
    's.patrol.3': "Leva a tua lanterna.", // nieuw, nalezen
    'c.patrol.q': "Viste alguma coisa durante a tua ronda?", // nieuw, nalezen
    'c.patrol.a': "Sim. Estava uma janela aberta junto à porta das traseiras.", // nieuw, nalezen
    'c.patrol': { m: "Olha e comunica, não te armes em herói", f: "Olha e comunica, não te armes em heroína", x: "Olha e comunica, não corras riscos" }, // nieuw, nalezen
    'c.patrol.b': "Na tua ronda olhas: as portas e as janelas estão fechadas, a vedação está inteira, está alguém que não devia lá estar? Escreve o que vês, com a hora. Vês alguma coisa estranha, como uma janela partida ou uma pessoa à noite? Não entres sem apoio. Chama a central ou a polícia pelo rádio ou pelo telefone, e espera num sítio seguro. A tua própria segurança vem primeiro. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.patrol.p': "Vejo alguém junto à vedação.", // nieuw, nalezen
    'c.patrol.s': "À noite vês uma porta arrombada. Ouves barulho lá dentro. O que fazes?", // nieuw, nalezen
    'c.patrol.o1': "Ficas cá fora, e pedes ajuda.", // nieuw, nalezen
    'c.patrol.o2': "Entras depressa, e vais ver.", // nieuw, nalezen
    'c.patrol.o3': "Gritas lá para dentro que vais entrar.", // nieuw, nalezen
    'c.patrol.w': "Um ladrão lá dentro pode ser perigoso. A polícia sabe o que fazer; o teu trabalho é ver e comunicar.", // nieuw, nalezen
    'l.access': "Controlo de acessos", // nieuw, nalezen
    'w.slagboom': "a cancela (uma barra na estrada que sobe)", // nieuw, nalezen
    'w.toegangspas': "o cartão de acesso (um cartão que abre a porta)", // nieuw, nalezen
    'w.legitimatie': "a identificação (um passaporte ou um cartão de identidade)", // nieuw, nalezen
    'w.draaihek': "o torniquete (um portão que roda, para uma pessoa de cada vez)", // nieuw, nalezen
    'w.kenteken': "a matrícula (as letras e os números de um carro)", // nieuw, nalezen
    'w.toegang': "o acesso (podes entrar)", // nieuw, nalezen
    's.access.1': "Posso ver a sua identificação?", // nieuw, nalezen
    's.access.2': "O seu cartão não funciona. Vou fazer uma chamada.", // nieuw, nalezen
    's.access.3': "Vou abrir a cancela.", // nieuw, nalezen
    'c.access.q': "Posso entrar? Esqueci-me do cartão.", // nieuw, nalezen
    'c.access.a': "Desculpe, sem cartão não pode entrar.", // nieuw, nalezen
    'c.access': "Sem cartão, não entra", // nieuw, nalezen
    'c.access.b': "No portão ou no balcão verificas quem entra. Todos precisam de um cartão, ou têm de estar na lista. Trata as pessoas com simpatia, também quando alguém está zangado ou com pressa. Não abras exceções porque alguém diz que é o chefe: verifica. Nunca emprestes o teu próprio cartão a ninguém, e nunca deixes alguém entrar atrás de ti. Um cartão perdido tem de ser comunicado logo. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.access.p': "Posso ver o seu cartão?", // nieuw, nalezen
    'c.access.s': "Um homem de fato diz: \"Sou o novo diretor. Ainda não tenho cartão.\" O que fazes?", // nieuw, nalezen
    'c.access.o1': "Verificas, antes de o deixares entrar.", // nieuw, nalezen
    'c.access.o2': "Deixa-lo entrar: parece importante.", // nieuw, nalezen
    'c.access.o3': "Dás-lhe o teu próprio cartão.", // nieuw, nalezen
    'c.access.w': "Qualquer pessoa pode dizer que é o diretor. Uma verificação rápida mantém o edifício seguro, e um diretor a sério vai compreender.", // nieuw, nalezen
    'l.cameras': "Câmaras e a central", // nieuw, nalezen
    'w.meldkamer': "a central (onde as pessoas veem as câmaras e atendem chamadas)", // nieuw, nalezen
    'w.beeldscherm': "o monitor, o ecrã", // nieuw, nalezen
    'w.camerabeelden': "as imagens das câmaras (o que a câmara filmou)", // nieuw, nalezen
    'w.inzoomen': "fazer zoom (aproximar a imagem)", // nieuw, nalezen
    'w.bewegingsmelder': "o sensor de movimento (vê quando alguma coisa se mexe)", // nieuw, nalezen
    'w.verdachte': "o suspeito", // nieuw, nalezen
    's.cameras.1': "Na câmara três vejo alguém junto à vedação.", // nieuw, nalezen
    's.cameras.2': "Vou fazer zoom.", // nieuw, nalezen
    's.cameras.3': "A central liga à polícia.", // nieuw, nalezen
    'c.cameras.q': "O que vês no ecrã?", // nieuw, nalezen
    'c.cameras.a': "Um homem junto à vedação. Vou mandar um colega.", // nieuw, nalezen
    'c.cameras': "As imagens das câmaras são privadas", // nieuw, nalezen
    'c.cameras.b': "As câmaras filmam pessoas: o pessoal, os visitantes e quem passa. O que vês nos ecrãs é privado. Só olhas para fazer o teu trabalho, e nunca filmes o ecrã com o telemóvel. Nunca mandes imagens a amigos nem as ponhas na internet. Houve um incidente? Escreve a câmara e a hora, e diz ao teu chefe. Só a tua empresa decide quem recebe as imagens, por exemplo a polícia. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.cameras.p': "Não posso mostrar isso.", // nieuw, nalezen
    'c.cameras.s': "Um colega pede-te para lhe mandares um vídeo engraçado das câmaras. O que fazes?", // nieuw, nalezen
    'c.cameras.o1': "Dizes que não: as imagens são privadas.", // nieuw, nalezen
    'c.cameras.o2': "Mandas, só para ele.", // nieuw, nalezen
    'c.cameras.o3': "Filmas o ecrã com o telemóvel.", // nieuw, nalezen
    'c.cameras.w': "As pessoas nas imagens não aceitaram ser partilhadas. Mandar as imagens pode custar-te o emprego.", // nieuw, nalezen
    'l.report': "O rádio e o relatório", // nieuw, nalezen
    'w.portofoon': "o rádio (o intercomunicador portátil, o walkie-talkie)", // nieuw, nalezen
    'w.rapport': "o relatório (o que aconteceu, por escrito)", // nieuw, nalezen
    'w.incident': "o incidente (alguma coisa que correu mal)", // nieuw, nalezen
    'w.tijdstip': "a hora (quando alguma coisa aconteceu)", // nieuw, nalezen
    'w.logboek': "o registo (um livro ou uma aplicação onde escreves tudo)", // nieuw, nalezen
    'w.oproepen': "chamar (pelo rádio)", // nieuw, nalezen
    's.report.1': "Estou a escrever um relatório do incidente.", // nieuw, nalezen
    's.report.2': "Que horas eram exatamente?", // nieuw, nalezen
    's.report.3': "Não te ouço bem. Repete, por favor.", // nieuw, nalezen
    'c.report.q': "O que tem de ir no relatório?", // nieuw, nalezen
    'c.report.a': "O que aconteceu, onde e a que horas.", // nieuw, nalezen
    'c.report': "Escreve logo", // nieuw, nalezen
    'c.report.b': "Escreve um relatório logo a seguir a um incidente, enquanto ainda te lembras bem. Escreve o que tu próprio viste e ouviste: o que aconteceu, onde, a que horas, e quem lá estava. Escreve factos, não o que achas. No rádio, fala curto e claro, e espera até a outra pessoa acabar. Diz quem és e onde estás. Um bom relatório ajuda a polícia, a tua empresa e a ti.", // nieuw, nalezen
    'c.report.p': "Vou escrever já.", // nieuw, nalezen
    'c.report.s': "Depois de uma noite agitada, sentes um grande cansaço. Houve um pequeno incidente. O que fazes?", // nieuw, nalezen
    'c.report.o1': "Escreves o relatório antes de ires para casa.", // nieuw, nalezen
    'c.report.o2': "Escreves amanhã, depois de uma boa noite de sono.", // nieuw, nalezen
    'c.report.o3': "Não escreves: foi só uma coisa pequena.", // nieuw, nalezen
    'c.report.w': "Amanhã esqueces pormenores. Um relatório sem hora ou sem sítio não ajuda ninguém.", // nieuw, nalezen
    'u.incidents': "Emergências e a loja", // nieuw, nalezen
    'l.evacuation': "Incêndio e evacuação", // nieuw, nalezen
    'w.brandmelder': "o botão de alarme de incêndio (uma caixa vermelha que carregas quando há um incêndio)", // nieuw, nalezen
    'w.brandweer': "os bombeiros", // nieuw, nalezen
    'w.branddeur': "a porta corta-fogo (para o fogo e o fumo)", // nieuw, nalezen
    'w.brandmeldcentrale': "a central de alarme de incêndio (mostra onde está o alarme)", // nieuw, nalezen
    'w.ontruimingsplan': "o plano de evacuação (quem faz o quê quando todos têm de sair)", // nieuw, nalezen
    'w.sirene': "a sirene", // nieuw, nalezen
    's.evacuation.1': "Há um alarme de incêndio no pavilhão dois.", // nieuw, nalezen
    's.evacuation.2': "Mantém as portas corta-fogo fechadas.", // nieuw, nalezen
    's.evacuation.3': "Estou à espera dos bombeiros na entrada.", // nieuw, nalezen
    'c.evacuation.q': "Estão todos lá fora?", // nieuw, nalezen
    'c.evacuation.a': "Não, ainda faltam duas pessoas da lista.", // nieuw, nalezen
    'c.evacuation': "Incêndio: primeiro o alarme, depois sair", // nieuw, nalezen
    'c.evacuation.b': "Vês fogo ou fumo? Carrega no botão de alarme de incêndio, ou liga para o 112. Depois ajuda as pessoas a sair pelas saídas de emergência, nunca pelo elevador. Fecha as portas atrás de ti, mas não as tranques. Só apagues um fogo quando é pequeno e aprendeste como. Vai para o ponto de encontro, e conta quem lá está. Recebe os bombeiros na entrada, e diz-lhes o que sabes. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.evacuation.p': "Todos lá para fora, para o ponto de encontro.", // nieuw, nalezen
    'c.evacuation.s': "O alarme de incêndio dispara. Um homem quer ir de elevador. O que fazes?", // nieuw, nalezen
    'c.evacuation.o1': "Manda-lo para as escadas.", // nieuw, nalezen
    'c.evacuation.o2': "Deixa-lo ir: o elevador é mais rápido.", // nieuw, nalezen
    'c.evacuation.o3': "Vais com ele no elevador.", // nieuw, nalezen
    'c.evacuation.w': "Num incêndio, o elevador pode parar ou encher-se de fumo. As escadas são o caminho seguro para sair.", // nieuw, nalezen
    'l.firstaid': "Primeiros socorros e 112", // nieuw, nalezen
    'w.ehbo': "os primeiros socorros", // nieuw, nalezen
    'w.aed': "o desfibrilhador (DAE: uma máquina que ajuda um coração que parou)", // nieuw, nalezen
    'w.reanimeren': "fazer reanimação (carregar no peito para salvar uma vida)", // nieuw, nalezen
    'w.bewusteloos': "inconsciente (a pessoa não acorda)", // nieuw, nalezen
    'w.ademen': "respirar", // nieuw, nalezen
    'w.alarmnummer': "o número de emergência (112)", // nieuw, nalezen
    's.firstaid.1': "Liga para o 112. Pede uma ambulância.", // nieuw, nalezen
    's.firstaid.2': "Vai buscar o desfibrilhador à receção.", // nieuw, nalezen
    's.firstaid.3': "Ele não está a respirar. Vou fazer reanimação.", // nieuw, nalezen
    'c.firstaid.q': "Onde está o desfibrilhador?", // nieuw, nalezen
    'c.firstaid.a': "Na entrada, ao lado do elevador.", // nieuw, nalezen
    'c.firstaid': "Liga para o 112, começa a reanimação, vai buscar o desfibrilhador", // nieuw, nalezen
    'c.firstaid.b': "Alguém cai e não reage? Liga logo para o 112, ou pede a outra pessoa para ligar. Vê se a pessoa respira normalmente. Se não: começa a reanimação, e pede a alguém para ir buscar o desfibrilhador. O desfibrilhador fala e diz-te o que fazer; não podes fazer mal. Continua até a ambulância assumir. Tens um curso de primeiros socorros? Diz aos teus colegas, para saberem a quem chamar.", // nieuw, nalezen
    'c.firstaid.p': "Liga para o 112 e vai buscar o desfibrilhador.", // nieuw, nalezen
    'c.firstaid.s': "Um homem cai no átrio. Não se mexe e não respira. O que fazes?", // nieuw, nalezen
    'c.firstaid.o1': "Ligas para o 112, e começas a reanimação.", // nieuw, nalezen
    'c.firstaid.o2': "Esperas para ver se ele acorda.", // nieuw, nalezen
    'c.firstaid.o3': "Levanta-lo, e senta-lo numa cadeira.", // nieuw, nalezen
    'c.firstaid.w': "Quando o coração para, cada minuto conta. A reanimação e um desfibrilhador podem salvar uma vida antes de a ambulância chegar.", // nieuw, nalezen
    'l.shoplifting': "Furtos na loja", // nieuw, nalezen
    'w.winkeldiefstal': "o furto em loja", // nieuw, nalezen
    'w.heterdaad': "em flagrante (vês acontecer)", // nieuw, nalezen
    'w.aanhouden': "deter (segurar alguém até a polícia chegar)", // nieuw, nalezen
    'w.detectiepoortje': "a barreira antifurto (apita à porta)", // nieuw, nalezen
    'w.alarmlabel': "a etiqueta antifurto (faz a barreira apitar)", // nieuw, nalezen
    'w.verstoppen': "esconder", // nieuw, nalezen
    's.shoplifting.1': "A barreira apita à saída.", // nieuw, nalezen
    's.shoplifting.2': "Eu vi em flagrante.", // nieuw, nalezen
    's.shoplifting.3': "Vou detê-lo até a polícia chegar.", // nieuw, nalezen
    'c.shoplifting.q': "Posso revistar a mala dele?", // nieuw, nalezen
    'c.shoplifting.a': "Não. Isso é a polícia que faz.", // nieuw, nalezen
    'c.shoplifting': "Furto na loja: vigia, comunica, sem força bruta", // nieuw, nalezen
    'c.shoplifting.b': "Viste alguém a roubar? Mantém a calma, e chama logo a polícia. Algumas lojas deixam um segurança deter um ladrão até a polícia chegar; outras dizem: só vigiar, comunicar e lembrar o aspeto da pessoa. Nunca batas nem dês pontapés, e nunca agarres alguém pelo pescoço. Nunca revistes uma pessoa, os bolsos ou a mala dela: isso é para a polícia. Escreve o que viste, e guarda as imagens das câmaras. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.shoplifting.p': "Pode vir comigo, por favor?", // nieuw, nalezen
    'c.shoplifting.s': "Viste uma mulher a pôr uma garrafa na mala. Ela vai a sair. O que fazes?", // nieuw, nalezen
    'c.shoplifting.o1': "Manda-la parar com calma, e chamas a polícia.", // nieuw, nalezen
    'c.shoplifting.o2': "Revistas a mala dela à porta, depressa.", // nieuw, nalezen
    'c.shoplifting.o3': "Empurra-la com força para o chão.", // nieuw, nalezen
    'c.shoplifting.w': "Revistar uma pessoa é para a polícia, e a força bruta pode magoar alguém e meter-te em sarilhos.", // nieuw, nalezen
    'l.aggression': "Pessoas difíceis", // nieuw, nalezen
    'w.agressie': "a agressividade (comportamento zangado e violento)", // nieuw, nalezen
    'w.schelden': "insultar alguém", // nieuw, nalezen
    'w.kalmeren': "acalmar", // nieuw, nalezen
    'w.afstand': "a distância", // nieuw, nalezen
    'w.huisverbod': "a proibição de entrada (já não podes entrar aqui)", // nieuw, nalezen
    'w.bodycam': "a câmara corporal (uma câmara pequena no teu uniforme)", // nieuw, nalezen
    's.aggression.1': "Tenha calma, senhor. Quero ajudá-lo.", // nieuw, nalezen
    's.aggression.2': "Mantém a distância e mantém a calma.", // nieuw, nalezen
    's.aggression.3': "Tem proibição de entrada. Tem de sair agora.", // nieuw, nalezen
    'c.aggression.q': "Porque é que não posso entrar?", // nieuw, nalezen
    'c.aggression.a': "Tem proibição de entrada aqui.", // nieuw, nalezen
    'c.aggression': "Mantém a calma, mantém a distância", // nieuw, nalezen
    'c.aggression.b': "Uma pessoa zangada acalma-se mais depressa quando tu manténs a calma. Fala devagar e baixo, e trata a pessoa por \"u\" (a forma educada). Mantém um braço de distância ou mais entre vocês, e mantém uma saída atrás de ti. Não toques na pessoa e não grites de volta. Fica perigoso? Recua, e chama um colega ou a polícia. Depois escreve o que aconteceu. Depois de um incidente mau, fala sobre isso com alguém. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.aggression.p': "Tenha calma. Quero ajudar.", // nieuw, nalezen
    'c.aggression.s': "Um homem grita contigo e chega muito perto. O que fazes?", // nieuw, nalezen
    'c.aggression.o1': "Recuas, e falas com calma.", // nieuw, nalezen
    'c.aggression.o2': "Gritas de volta, mais alto do que ele.", // nieuw, nalezen
    'c.aggression.o3': "Empurra-lo para longe de ti.", // nieuw, nalezen
    'c.aggression.w': "Palavras calmas e espaço acalmam a situação. Gritar ou empurrar piora tudo.", // nieuw, nalezen
    'u.foodhygiene': "Higiene e frio", // nieuw, nalezen
    'l.hygienelock': "A zona de higienização", // nieuw, nalezen
    'w.hygienesluis': "a zona de higienização (a sala onde te limpas antes de entrares)", // nieuw, nalezen
    'w.baardnetje': "a rede para a barba", // nieuw, nalezen
    'w.laarzenwasser': "o lava-botas (escovas que limpam as botas)", // nieuw, nalezen
    'w.desinfecteren': "desinfetar (matar micróbios)", // nieuw, nalezen
    'w.werkjas': "a bata de trabalho", // nieuw, nalezen
    'w.bacterie': "o micróbio, a bactéria", // nieuw, nalezen
    's.hygienelock.1': "Lava as mãos e desinfeta-as.", // nieuw, nalezen
    's.hygienelock.2': "Põe a rede do cabelo e a rede da barba.", // nieuw, nalezen
    's.hygienelock.3': "Passa pelo lava-botas.", // nieuw, nalezen
    'c.hygienelock.q': "Posso ficar com o relógio?", // nieuw, nalezen
    'c.hygienelock.a': "Não, tiram-se as joias todas.", // nieuw, nalezen
    'c.hygienelock': "Passa sempre pela higienização", // nieuw, nalezen
    'c.hygienelock.b': "Numa fábrica de alimentos, tu és o maior perigo para a comida: os micróbios vêm das tuas mãos, do cabelo e da roupa. Por isso passa pela zona de higienização sempre que entras, também depois de uma pausa ou da casa de banho. Rede no cabelo, rede na barba se tiveres barba, roupa de trabalho limpa, sem joias nenhumas. Lava as mãos com sabão, seca-as e desinfeta-as. Estás doente, com diarreia ou vómitos? Diz ao teu chefe antes de começares. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.hygienelock.p': "Tenho diarreia. Posso trabalhar hoje?", // nieuw, nalezen
    'c.hygienelock.s': "Voltas da casa de banho. O teu colega diz: \"Salta a higienização, estamos cheios de trabalho.\" O que fazes?", // nieuw, nalezen
    'c.hygienelock.o1': "Passas pela zona de higienização na mesma.", // nieuw, nalezen
    'c.hygienelock.o2': "Saltas, só desta vez.", // nieuw, nalezen
    'c.hygienelock.o3': "Só pões luvas novas.", // nieuw, nalezen
    'c.hygienelock.w': "Os micróbios da casa de banho podem pôr muitos clientes doentes. Alguns minutos na zona de higienização evitam isso.", // nieuw, nalezen
    'l.allergens': "Alergénios", // nieuw, nalezen
    'w.allergeen': "o alergénio (comida que põe algumas pessoas muito doentes)", // nieuw, nalezen
    'w.noten': "os frutos secos (nozes, amêndoas, avelãs)", // nieuw, nalezen
    'w.pinda': "o amendoim", // nieuw, nalezen
    'w.gluten': "o glúten (no trigo, por isso no pão e nos bolos)", // nieuw, nalezen
    'w.sesam': "o sésamo (sementes pequenas, por exemplo no pão)", // nieuw, nalezen
    'w.kruisbesmetting': "a contaminação cruzada (alguma coisa vai parar à comida onde não devia estar)", // nieuw, nalezen
    's.allergens.1': "Este produto contém frutos secos.", // nieuw, nalezen
    's.allergens.2': "Vê no rótulo que alergénios tem.", // nieuw, nalezen
    's.allergens.3': "Limpa tudo bem depois dos amendoins.", // nieuw, nalezen
    'c.allergens.q': "Esta caixinha pode ir com as outras?", // nieuw, nalezen
    'c.allergens.a': "Não, tem frutos secos.", // nieuw, nalezen
    'c.allergens': "Basta um vestígio", // nieuw, nalezen
    'c.allergens.b': "Para algumas pessoas, um bocadinho de frutos secos, amendoim, leite, ovo, glúten ou sésamo pode pôr a vida em perigo. Por isso o rótulo tem de dizer exatamente o que há num produto. Mantém os alergénios à parte: com caixas, ferramentas e cores próprias. Depois de um produto com um alergénio, a linha é limpa antes do produto seguinte. Nunca troques um ingrediente, também não quando parece igual. Tens dúvidas? Pergunta. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.allergens.p': "Isto tem frutos secos?", // nieuw, nalezen
    'c.allergens.s': "As amêndoas acabaram. Um colega diz: \"Usa avelãs, ninguém vai notar.\" O que fazes?", // nieuw, nalezen
    'c.allergens.o1': "Dizes que não, e avisas o teu chefe.", // nieuw, nalezen
    'c.allergens.o2': "Usas as avelãs: frutos secos são todos iguais.", // nieuw, nalezen
    'c.allergens.o3': "Usas as avelãs, e não mudas nada no rótulo.", // nieuw, nalezen
    'c.allergens.w': "O rótulo tem de dizer o que está lá dentro. Um fruto seco errado pode pôr muito doente uma pessoa com alergia.", // nieuw, nalezen
    'l.coldroom': "A câmara frigorífica e a câmara de congelação", // nieuw, nalezen
    'w.temperatuur': "a temperatura", // nieuw, nalezen
    'w.graden': "os graus (°C)", // nieuw, nalezen
    'w.bevroren': "congelado", // nieuw, nalezen
    'w.ontdooien': "descongelar", // nieuw, nalezen
    'w.koelketen': "a cadeia de frio (a comida fica fria o caminho todo)", // nieuw, nalezen
    'w.thermokleding': "a roupa térmica (roupa quente para o frio)", // nieuw, nalezen
    's.coldroom.1': "Estão menos dezoito graus na câmara de congelação.", // nieuw, nalezen
    's.coldroom.2': "Põe logo a carne na câmara frigorífica.", // nieuw, nalezen
    's.coldroom.3': "Escreve a temperatura na lista.", // nieuw, nalezen
    'c.coldroom.q': "Porque está a câmara frigorífica a apitar?", // nieuw, nalezen
    'c.coldroom.a': "A porta está aberta. Fecha-a depressa.", // nieuw, nalezen
    'c.coldroom': "Trabalho no frio: veste roupa quente, mantém tudo frio", // nieuw, nalezen
    'c.coldroom.b': "A comida tem de ficar fria o caminho todo: do camião para a câmara frigorífica e para a loja. Por isso arruma logo os produtos frios, e mantém fechadas as portas da câmara frigorífica e da câmara de congelação. Verifica a temperatura e escreve-a. Na câmara de congelação, usa a roupa térmica, luvas e um gorro, e faz a tempo uma pausa num sítio quente. Garante que consegues sempre abrir a porta por dentro. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.coldroom.p': "Está quente demais aqui. O frio não funciona.", // nieuw, nalezen
    'c.coldroom.s': "O termómetro da câmara frigorífica mostra um número muito mais alto do que o normal. O que fazes?", // nieuw, nalezen
    'c.coldroom.o1': "Dizes logo ao teu chefe.", // nieuw, nalezen
    'c.coldroom.o2': "Esperas: vai arrefecer outra vez.", // nieuw, nalezen
    'c.coldroom.o3': "Escreves o número normal na lista.", // nieuw, nalezen
    'c.coldroom.w': "Quente demais quer dizer que os micróbios crescem. O teu chefe decide se a comida ainda é segura.", // nieuw, nalezen
    'l.foreignbody': "Vidro, metal e plástico na comida", // nieuw, nalezen
    'w.metaaldetector': "o detetor de metais", // nieuw, nalezen
    'w.glasbreuk': "o vidro partido (vidro que se partiu)", // nieuw, nalezen
    'w.splinter': "a lasca (um pedaço pequeno e afiado)", // nieuw, nalezen
    'w.vreemdvoorwerp': "o corpo estranho (uma coisa na comida que não pertence lá)", // nieuw, nalezen
    'w.vervuild': "contaminado (entrou alguma coisa suja)", // nieuw, nalezen
    'w.ploegleider': "o chefe de turno", // nieuw, nalezen
    's.foreignbody.1': "O detetor de metais está a apitar. Para a linha.", // nieuw, nalezen
    's.foreignbody.2': "Partiu-se vidro na linha dois.", // nieuw, nalezen
    's.foreignbody.3': "Põe o produto na caixa de rejeitados.", // nieuw, nalezen
    'c.foreignbody.q': "O que faço com este bocado de plástico?", // nieuw, nalezen
    'c.foreignbody.a': "Mostra-o ao chefe de turno.", // nieuw, nalezen
    'c.foreignbody': "Alguma coisa na comida? Para e comunica", // nieuw, nalezen
    'c.foreignbody.b': "Vidro, metal, plástico, um penso ou um cabelo nunca podem ir parar à comida. O detetor de metais apita, ou encontras alguma coisa estranha? Põe o produto de lado, e diz ao chefe de turno. Partiu-se vidro? Para a linha ali perto: o chefe de turno decide o que tem de ir para o lixo. Usa só pensos azuis, para se verem bem. Nunca leves vidro, canetas ou coisas soltas para a zona de trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.foreignbody.p': "Encontrei uma coisa no produto.", // nieuw, nalezen
    'c.foreignbody.s': "Uma lâmpada de vidro parte-se por cima da linha. Os produtos continuam a andar. O que fazes?", // nieuw, nalezen
    'c.foreignbody.o1': "Paras a linha, e chamas o chefe de turno.", // nieuw, nalezen
    'c.foreignbody.o2': "Tiras o vidro que consegues ver.", // nieuw, nalezen
    'c.foreignbody.o3': "Continuas: o detetor encontra o vidro.", // nieuw, nalezen
    'c.foreignbody.w': "Um detetor de metais não encontra vidro. Pedaços pequenos que não vês podem ferir gravemente um cliente.", // nieuw, nalezen
    'u.foodline': "A linha de produção", // nieuw, nalezen
    'l.cutting': "Cortar e pesar", // nieuw, nalezen
    'w.uitbenen': "desossar (tirar os ossos da carne)", // nieuw, nalezen
    'w.fileren': "filetar (cortar peixe ou carne em pedaços planos)", // nieuw, nalezen
    'w.portie': "a porção", // nieuw, nalezen
    'w.wegen': "pesar", // nieuw, nalezen
    'w.gewicht': "o peso", // nieuw, nalezen
    'w.snijplank': "a tábua de cortar", // nieuw, nalezen
    's.cutting.1': "Pesa cada porção.", // nieuw, nalezen
    's.cutting.2': "O peso está baixo demais.", // nieuw, nalezen
    's.cutting.3': "Afia a tua faca antes de começares.", // nieuw, nalezen
    'c.cutting.q': "Quanto tem de ir numa caixinha?", // nieuw, nalezen
    'c.cutting.a': "Quinhentos gramas. Vê na balança.", // nieuw, nalezen
    'c.cutting': "Faca afiada, mão segura", // nieuw, nalezen
    'c.cutting.b': "Uma faca afiada é mais segura do que uma faca que não corta: precisas de menos força, por isso escorrega menos. Usa sempre a tua luva anticorte na outra mão. Corta para longe do corpo. Pousa a faca deitada na tábua, nunca num lava-loiça nem debaixo da carne. Não tentes apanhar uma faca a cair: recua. Leva a faca com a ponta para baixo, junto à perna. Até um corte pequeno tem de ser tapado e comunicado.", // nieuw, nalezen
    'c.cutting.p': "A minha faca não corta.", // nieuw, nalezen
    'c.cutting.s': "A faca escorrega-te da mão e cai. O que fazes?", // nieuw, nalezen
    'c.cutting.o1': "Recuas, e deixas cair.", // nieuw, nalezen
    'c.cutting.o2': "Apanha-la depressa.", // nieuw, nalezen
    'c.cutting.o3': "Para-la com o pé.", // nieuw, nalezen
    'c.cutting.w': "Uma faca a cair corta fundo quando a agarras. No chão não faz mal a ninguém.", // nieuw, nalezen
    'l.labels': "Embalar e rótulos", // nieuw, nalezen
    'w.etiketteren': "rotular (pôr etiquetas)", // nieuw, nalezen
    'w.lotnummer': "o número de lote (um número para um lote de produtos)", // nieuw, nalezen
    'w.vacuum': "embalado a vácuo (sem ar nenhum lá dentro)", // nieuw, nalezen
    'w.schaal': "a cuvete (um prato raso para comida)", // nieuw, nalezen
    'w.printer': "a impressora", // nieuw, nalezen
    'w.omdoos': "a caixa exterior (a caixa grande à volta das embalagens pequenas)", // nieuw, nalezen
    's.labels.1': "Vê se a data no rótulo está certa.", // nieuw, nalezen
    's.labels.2': "Esta embalagem não está a vácuo. Embala outra vez.", // nieuw, nalezen
    's.labels.3': "Escreve o número de lote na lista.", // nieuw, nalezen
    'c.labels.q': "Que data tem de ir?", // nieuw, nalezen
    'c.labels.a': "Daqui a dez dias. Vê na lista.", // nieuw, nalezen
    'c.labels': "Um rótulo errado é perigoso", // nieuw, nalezen
    'c.labels.b': "O rótulo diz ao cliente o que está lá dentro, quanto pesa e até quando está bom. Uma data errada ou um rótulo errado pode pôr pessoas doentes, por exemplo quando falta um alergénio. Por isso verifica os primeiros rótulos de cada produção nova: o produto, a data e o número de lote. Alguma coisa está mal? Para, e diz ao teu chefe. Os produtos com um rótulo errado ficam de lado, nunca são vendidos. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.labels.p': "O rótulo não está certo.", // nieuw, nalezen
    'c.labels.s': "Vês que a data nos rótulos está uma semana tarde demais. O que fazes?", // nieuw, nalezen
    'c.labels.o1': "Paras de embalar, e dizes ao teu chefe.", // nieuw, nalezen
    'c.labels.o2': "Continuas: uma semana não faz diferença.", // nieuw, nalezen
    'c.labels.o3': "Mudas a data com uma caneta.", // nieuw, nalezen
    'c.labels.w': "Uma data errada pode fazer as pessoas comer comida que já não é segura. Mais vale parar agora do que ter de a recolher mais tarde.", // nieuw, nalezen
    'l.linecleaning': "Limpar a linha", // nieuw, nalezen
    'w.schuim': "a espuma", // nieuw, nalezen
    'w.hogedrukspuit': "a máquina de alta pressão", // nieuw, nalezen
    'w.naspoelen': "enxaguar (lavar com água limpa)", // nieuw, nalezen
    'w.demonteren': "desmontar", // nieuw, nalezen
    'w.borstel': "a escova", // nieuw, nalezen
    'w.restjes': "os restos (bocadinhos de comida)", // nieuw, nalezen
    's.linecleaning.1': "Primeiro desliga a máquina.", // nieuw, nalezen
    's.linecleaning.2': "Põe a espuma no tapete.", // nieuw, nalezen
    's.linecleaning.3': "Depois enxagua tudo com água limpa.", // nieuw, nalezen
    'c.linecleaning.q': "O tapete já está limpo?", // nieuw, nalezen
    'c.linecleaning.a': "Ainda não. Ainda tenho de enxaguar.", // nieuw, nalezen
    'c.linecleaning': "Desliga a máquina antes de limpares", // nieuw, nalezen
    'c.linecleaning.b': "Nunca limpes uma máquina que está a trabalhar. Desliga-a, e garante que ninguém a pode ligar outra vez: segue os passos da tua empresa. Usa as luvas, os óculos e as botas certos: os produtos de limpeza podem queimar a pele e os olhos. Nunca mistures produtos. Primeiro tira os restos, depois põe espuma, esfrega e enxagua. Não deites água para caixas elétricas nem tomadas. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.linecleaning.p': "A máquina está desligada?", // nieuw, nalezen
    'c.linecleaning.s': "Há carne presa no tapete. A máquina ainda está a trabalhar. O que fazes?", // nieuw, nalezen
    'c.linecleaning.o1': "Primeiro desligas, depois tiras a carne.", // nieuw, nalezen
    'c.linecleaning.o2': "Tiras a carne depressa com a mão.", // nieuw, nalezen
    'c.linecleaning.o3': "Empurras a carne com uma faca.", // nieuw, nalezen
    'c.linecleaning.w': "Um tapete a andar pode puxar a tua mão num segundo. Desligar demora só um momento.", // nieuw, nalezen
    'l.haccp': "Verificar e registar (HACCP)", // nieuw, nalezen
    'w.controlepunt': "o ponto de controlo (um passo em que tens de verificar alguma coisa)", // nieuw, nalezen
    'w.kerntemperatuur': "a temperatura no centro (a temperatura dentro da comida)", // nieuw, nalezen
    'w.prikthermometer': "o termómetro de espeto (espetas na comida)", // nieuw, nalezen
    'w.afwijking': "o desvio (alguma coisa não está como devia)", // nieuw, nalezen
    'w.steekproef': "a amostra (testas alguns produtos)", // nieuw, nalezen
    'w.kwaliteitsdienst': "o departamento de qualidade (QA)", // nieuw, nalezen
    's.haccp.1': "Mede a temperatura no centro com o termómetro de espeto.", // nieuw, nalezen
    's.haccp.2': "Escreve tudo na lista.", // nieuw, nalezen
    's.haccp.3': "Há algum desvio? Comunica logo.", // nieuw, nalezen
    'c.haccp.q': "Porque tenho de escrever tudo?", // nieuw, nalezen
    'c.haccp.a': "Assim sabemos que a comida é segura.", // nieuw, nalezen
    'c.haccp': "HACCP: verifica, escreve, comunica", // nieuw, nalezen
    'c.haccp.b': "Todas as empresas de alimentos trabalham com um plano de segurança alimentar (HACCP). Ele diz em que passos tens de verificar alguma coisa, como a temperatura da câmara frigorífica ou a temperatura no centro da carne cozinhada. Tu verificas, escreves e assinas. Escreve o que mediste de verdade, também quando está mal. Um número mau não é culpa tua, mas escondê-lo é perigoso. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.haccp.p': "A temperatura está alta demais.", // nieuw, nalezen
    'c.haccp.s': "Esqueceste-te de medir às dez. O teu colega diz: \"Escreve só um número bom.\" O que fazes?", // nieuw, nalezen
    'c.haccp.o1': "Medes agora, e escreves a hora verdadeira.", // nieuw, nalezen
    'c.haccp.o2': "Escreves um número bom para as dez horas.", // nieuw, nalezen
    'c.haccp.o3': "Deixas a linha vazia.", // nieuw, nalezen
    'c.haccp.w': "A lista tem de mostrar o que aconteceu de verdade. Um número inventado esconde um problema que pode pôr pessoas doentes.", // nieuw, nalezen
    'u.collection': "Recolha do lixo", // nieuw, nalezen
    'l.binlorry': "O camião do lixo", // nieuw, nalezen
    'w.vuilniswagen': "o camião do lixo", // nieuw, nalezen
    'w.kliko': "o contentor do lixo com rodas", // nieuw, nalezen
    'w.kieplift': "o elevador de contentores (levanta o contentor e despeja-o)", // nieuw, nalezen
    'w.treeplank': "o estribo (um degrau atrás no camião)", // nieuw, nalezen
    'w.bijplaatsing': "o lixo a mais (sacos deixados ao lado do contentor)", // nieuw, nalezen
    'w.ophaaldag': "o dia da recolha", // nieuw, nalezen
    's.binlorry.1': "Põe o contentor no elevador de contentores.", // nieuw, nalezen
    's.binlorry.2': "Há sacos ao lado do contentor.", // nieuw, nalezen
    's.binlorry.3': "O contentor está pesado demais. Deixa-o ficar.", // nieuw, nalezen
    'c.binlorry.q': "Posso ir atrás, no estribo?", // nieuw, nalezen
    'c.binlorry.a': "Não, entras na cabine.", // nieuw, nalezen
    'c.binlorry': "Faz-te ver, e vai dentro da cabine", // nieuw, nalezen
    'c.binlorry.b': "Usa a tua roupa refletora em todas as voltas. Entra e sai do lado do passeio, nunca do lado do trânsito. Vai na cabine, não atrás no camião: só quando a tua empresa o permite claramente, e nunca quando o camião faz marcha-atrás ou anda depressa. Fica longe do elevador de contentores enquanto se mexe. Um contentor está pesado demais, ou há alguma coisa a sair dele? Deixa-o ficar, e comunica. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.binlorry.p': "Este contentor está pesado demais.", // nieuw, nalezen
    'c.binlorry.s': "A rua seguinte é muito perto. O motorista diz: \"Põe-te no estribo.\" O que fazes?", // nieuw, nalezen
    'c.binlorry.o1': "Entras na cabine na mesma.", // nieuw, nalezen
    'c.binlorry.o2': "Vais no estribo: é perto.", // nieuw, nalezen
    'c.binlorry.o3': "Vais a pé atrás do camião.", // nieuw, nalezen
    'c.binlorry.w': "Cair de um camião em andamento é um dos maiores perigos deste trabalho. Na cabine não corres esse perigo.", // nieuw, nalezen
    'l.reversing': "Marcha-atrás em segurança", // nieuw, nalezen
    'w.achteruitrijden': "fazer marcha-atrás (andar para trás)", // nieuw, nalezen
    'w.dodehoek': "o ângulo morto (onde o condutor não te vê)", // nieuw, nalezen
    'w.aanwijzer': "o sinaleiro (a pessoa que orienta o condutor)", // nieuw, nalezen
    'w.oogcontact': "o contacto visual", // nieuw, nalezen
    'w.piepen': "apitar", // nieuw, nalezen
    'w.cabine': "a cabine (onde o condutor vai sentado)", // nieuw, nalezen
    's.reversing.1': "Nunca fiques atrás do camião.", // nieuw, nalezen
    's.reversing.2': "Não te vejo no espelho.", // nieuw, nalezen
    's.reversing.3': "Faz contacto visual com o motorista.", // nieuw, nalezen
    'c.reversing.q': "Podes ajudar-me a fazer marcha-atrás?", // nieuw, nalezen
    'c.reversing.a': "Sim, estou do lado esquerdo. Olha para o espelho.", // nieuw, nalezen
    'c.reversing': "Nunca atrás de um camião em marcha-atrás", // nieuw, nalezen
    'c.reversing.b': "Muitos acidentes com camiões do lixo acontecem quando andam para trás. O motorista não consegue ver mesmo atrás do camião: é o ângulo morto. Por isso nunca fiques nem andes atrás de um camião que pode fazer marcha-atrás. Orienta o motorista de lado, onde se podem ver um ao outro no espelho. Perderam o contacto visual? O motorista para. Combinem sinais claros antes de começar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.reversing.p': "Para! Já não te vejo.", // nieuw, nalezen
    'c.reversing.s': "O camião está a fazer marcha-atrás. Passas por trás dele para ir buscar um saco. O que fazes?", // nieuw, nalezen
    'c.reversing.o1': "Esperas até o camião estar parado.", // nieuw, nalezen
    'c.reversing.o2': "Passas depressa: é só um segundo.", // nieuw, nalezen
    'c.reversing.o3': "Acenas ao motorista, e vais.", // nieuw, nalezen
    'c.reversing.w': "Um motorista não te consegue ver atrás do camião. Um segundo chega para um acidente.", // nieuw, nalezen
    'l.wastesorting': "Separar o lixo", // nieuw, nalezen
    'w.papier': "o papel", // nieuw, nalezen
    'w.plastic': "o plástico", // nieuw, nalezen
    'w.gft': "os resíduos orgânicos (fruta, legumes e plantas)", // nieuw, nalezen
    'w.restafval': "o lixo indiferenciado (o que não se pode separar)", // nieuw, nalezen
    'w.karton': "o cartão", // nieuw, nalezen
    'w.blik': "a lata", // nieuw, nalezen
    's.wastesorting.1': "O vidro vai para o vidrão.", // nieuw, nalezen
    's.wastesorting.2': "Isto vai para o lixo indiferenciado.", // nieuw, nalezen
    's.wastesorting.3': "Dobra o cartão até ficar espalmado.", // nieuw, nalezen
    'c.wastesorting.q': "Para onde vai uma caixa de pizza?", // nieuw, nalezen
    'c.wastesorting.a': "Para o lixo indiferenciado. Tem gordura.", // nieuw, nalezen
    'c.wastesorting': "Separar bem poupa trabalho", // nieuw, nalezen
    'c.wastesorting.b': "O lixo separado pode ser usado outra vez: o papel volta a ser papel, o vidro volta a ser vidro. Mas uma coisa errada pode estragar uma carga inteira. Por isso olha para dentro do contentor antes de o despejares. Há alguma coisa que não pertence lá, como um saco de lixo indiferenciado no papel? Deixa o contentor ficar, ou segue as regras da tua empresa. O lixo que vai para cada sítio é diferente em cada cidade: aprende as regras da tua zona. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.wastesorting.p': "Isto não pertence aqui.", // nieuw, nalezen
    'c.wastesorting.s': "Um contentor de papel está cheio de sacos do lixo pretos. O que fazes?", // nieuw, nalezen
    'c.wastesorting.o1': "Deixa-lo ficar, e comunicas.", // nieuw, nalezen
    'c.wastesorting.o2': "Despeja-lo para o papel.", // nieuw, nalezen
    'c.wastesorting.o3': "Tiras os sacos à mão.", // nieuw, nalezen
    'c.wastesorting.w': "O lixo no papel estraga a carga toda. Os sacos também podem ter coisas afiadas ou sujas.", // nieuw, nalezen
    'l.wastesafety': "Coisas afiadas e levantar pesos", // nieuw, nalezen
    'w.snijwond': "o corte (uma ferida de uma coisa afiada)", // nieuw, nalezen
    'w.prikken': "picar (uma ponta afiada entra na pele)", // nieuw, nalezen
    'w.naald': "a agulha", // nieuw, nalezen
    'w.scherp': "afiado", // nieuw, nalezen
    'w.rugpijn': "a dor de costas", // nieuw, nalezen
    'w.tetanusprik': "a vacina do tétano (uma injeção contra uma doença que vem da sujidade numa ferida)", // nieuw, nalezen
    's.wastesafety.1': "Nunca agarres um saco por baixo.", // nieuw, nalezen
    's.wastesafety.2': "Cuidado, há vidro neste saco.", // nieuw, nalezen
    's.wastesafety.3': "Piquei-me numa agulha.", // nieuw, nalezen
    'c.wastesafety.q': "Cortei-me. O que tenho de fazer?", // nieuw, nalezen
    'c.wastesafety.a': "Lava bem a ferida. E diz-me.", // nieuw, nalezen
    'c.wastesafety': "Nunca apertes um saco", // nieuw, nalezen
    'c.wastesafety.b': "Um saco do lixo pode ter vidro, facas ou agulhas. Por isso nunca encostes um saco ao corpo, nunca o apertes, e nunca o leves apoiado na perna: agarra-o por cima, longe de ti. Usa as tuas luvas. Levanta com os joelhos dobrados e as costas direitas, e empurra um contentor, não o carregues. Alguma coisa te picou ou cortou? Lava bem a ferida com água, e diz ao teu chefe no mesmo dia.", // nieuw, nalezen
    'c.wastesafety.p': "Piquei-me.", // nieuw, nalezen
    'c.wastesafety.s': "Um saco rasga-se. Vês uma agulha lá dentro. O que fazes?", // nieuw, nalezen
    'c.wastesafety.o1': "Não lhe tocas, e comunicas.", // nieuw, nalezen
    'c.wastesafety.o2': "Apanha-la com as luvas postas.", // nieuw, nalezen
    'c.wastesafety.o3': "Empurra-la outra vez para dentro do saco.", // nieuw, nalezen
    'c.wastesafety.w': "As luvas não param uma agulha. Uma agulha pode passar uma doença.", // nieuw, nalezen
    'u.recycling': "O ecocentro", // nieuw, nalezen
    'l.yard': "No ecocentro", // nieuw, nalezen
    'w.milieustraat': "o ecocentro (onde as pessoas levam lixo grande ou especial)", // nieuw, nalezen
    'w.grofvuil': "os monstros (coisas grandes, como um sofá)", // nieuw, nalezen
    'w.puin': "o entulho (pedras e tijolos partidos)", // nieuw, nalezen
    'w.matras': "o colchão", // nieuw, nalezen
    'w.weegbrug': "a báscula (uma balança para carros e camiões)", // nieuw, nalezen
    'w.afvalpas': "o cartão de resíduos (os moradores mostram-no no portão)", // nieuw, nalezen
    's.yard.1': "O entulho vai para o contentor quatro.", // nieuw, nalezen
    's.yard.2': "Posso ver o seu cartão de resíduos?", // nieuw, nalezen
    's.yard.3': "Primeiro passe pela báscula.", // nieuw, nalezen
    'c.yard.q': "Para onde vai este colchão?", // nieuw, nalezen
    'c.yard.a': "Para o contentor dos monstros, lá atrás.", // nieuw, nalezen
    'c.yard': "Ajuda, mas mantém o ecocentro seguro", // nieuw, nalezen
    'c.yard.b': "No ecocentro dizes aos visitantes para onde vai o lixo deles, e verificas se está bem separado. Trata as pessoas com simpatia: muitas vêm só algumas vezes por ano e não conhecem as regras. Mantém as crianças e os visitantes longe das máquinas e da borda dos contentores altos. Levanta as coisas pesadas com outra pessoa, ou deixa o visitante levar as suas. Alguém traz uma coisa que não conheces? Pergunta antes de ir para dentro. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.yard.p': "Isto vai para o contentor quatro.", // nieuw, nalezen
    'c.yard.s': "Um homem quer deitar um saco cheio no contentor da madeira. O que fazes?", // nieuw, nalezen
    'c.yard.o1': "Perguntas o que está no saco.", // nieuw, nalezen
    'c.yard.o2': "Deixa-lo: o lixo é dele.", // nieuw, nalezen
    'c.yard.o3': "Deitas o saco por ele.", // nieuw, nalezen
    'c.yard.w': "Uma coisa errada pode estragar um contentor cheio. Uma pergunta simpática mantém o lixo limpo.", // nieuw, nalezen
    'l.hazardous': "Resíduos químicos", // nieuw, nalezen
    'w.chemischafval': "os resíduos químicos (lixo perigoso, como tinta e óleo)", // nieuw, nalezen
    'w.spuitbus': "a lata de spray", // nieuw, nalezen
    'w.asbest': "o amianto (um material perigoso em edifícios antigos)", // nieuw, nalezen
    'w.lekken': "verter, pingar", // nieuw, nalezen
    'w.gevarensymbool': "o símbolo de perigo (uma imagem que avisa de um perigo)", // nieuw, nalezen
    'w.vat': "o bidão, o barril", // nieuw, nalezen
    's.hazardous.1': "Põe a tinta com os resíduos químicos.", // nieuw, nalezen
    's.hazardous.2': "Esta garrafa está a verter. Pega nela com luvas.", // nieuw, nalezen
    's.hazardous.3': "O amianto tem de estar bem embalado.", // nieuw, nalezen
    'c.hazardous.q': "O que tem esta garrafa?", // nieuw, nalezen
    'c.hazardous.a': "Não sei. Põe-na à parte.", // nieuw, nalezen
    'c.hazardous': "Desconhecido? Não abras, não cheires", // nieuw, nalezen
    'c.hazardous.b': "Os resíduos químicos, como tinta, óleo, produtos de limpeza, pilhas e latas de spray, podem queimar, envenenar ou explodir. Procura os símbolos de perigo. Usa luvas e óculos de proteção. Nunca abras uma garrafa para cheirar o que tem dentro, e nunca mistures produtos. Mantém uma garrafa que verte em pé, e põe-na num tabuleiro. O amianto só pode entrar quando está bem embalado: nunca o partas, e não o tires da embalagem. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.hazardous.p': "O que está aqui dentro?", // nieuw, nalezen
    'c.hazardous.s': "Uma mulher traz uma garrafa sem rótulo. Cheira muito forte. O que fazes?", // nieuw, nalezen
    'c.hazardous.o1': "Põe-la à parte, e dizes ao teu chefe.", // nieuw, nalezen
    'c.hazardous.o2': "Abre-la, e cheiras para ver o que é.", // nieuw, nalezen
    'c.hazardous.o3': "Despeja-la no bidão da tinta.", // nieuw, nalezen
    'c.hazardous.w': "Os produtos desconhecidos podem reagir com outros. O teu chefe sabe para onde pode ir com segurança.", // nieuw, nalezen
    'l.baler': "A prensa de fardos", // nieuw, nalezen
    'w.balenpers': "a prensa de fardos (uma máquina que prensa o lixo em blocos)", // nieuw, nalezen
    'w.baal': "o fardo (um bloco prensado de papel ou plástico)", // nieuw, nalezen
    'w.persen': "prensar", // nieuw, nalezen
    'w.vastlopen': "encravar, ficar preso", // nieuw, nalezen
    'w.binddraad': "o arame para atar os fardos", // nieuw, nalezen
    'w.vulopening': "a boca de carga (onde entra o lixo)", // nieuw, nalezen
    's.baler.1': "A prensa está encravada. Carrega na paragem de emergência.", // nieuw, nalezen
    's.baler.2': "Nunca metas a mão na prensa.", // nieuw, nalezen
    's.baler.3': "Ata bem o fardo.", // nieuw, nalezen
    'c.baler.q': "A prensa está a encravar. Posso ir ver?", // nieuw, nalezen
    'c.baler.a': "Não. Primeiro desliga-se a corrente.", // nieuw, nalezen
    'c.baler': "Nunca metas a mão na prensa de fardos", // nieuw, nalezen
    'c.baler.b': "Uma prensa de fardos prensa com uma força enorme. Só a uses quando já aprendeste como. Nunca metas uma mão, um braço ou um pé na boca de carga, também não quando a máquina parece parada. Encravou? Carrega na paragem de emergência, desliga-a e garante que ninguém a pode ligar: segue os passos da tua empresa. Só então vais ver. Nunca subas para dentro de uma prensa de fardos ou de um contentor. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.baler.p': "A prensa está encravada.", // nieuw, nalezen
    'c.baler.s': "Um bocado de cartão está preso na boca de carga. A máquina está parada. O que fazes?", // nieuw, nalezen
    'c.baler.o1': "Desligas a máquina por completo, depois tiras o cartão.", // nieuw, nalezen
    'c.baler.o2': "Tiras o cartão depressa com a mão.", // nieuw, nalezen
    'c.baler.o3': "Empurras o cartão para dentro com o pé.", // nieuw, nalezen
    'c.baler.w': "Uma máquina parada pode arrancar outra vez. Sem a corrente desligada, a tua mão está em perigo.", // nieuw, nalezen
    'l.shovel': "A pá carregadora no recinto", // nieuw, nalezen
    'w.shovel': "a pá carregadora (uma máquina grande com uma pá à frente)", // nieuw, nalezen
    'w.zwaailamp': "o pirilampo (uma luz cor de laranja em cima de uma máquina)", // nieuw, nalezen
    'w.bunker': "o box (um espaço grande de betão para um tipo de lixo)", // nieuw, nalezen
    'w.looppad': "o caminho para peões (um caminho só para pessoas)", // nieuw, nalezen
    'w.toeteren': "buzinar", // nieuw, nalezen
    'w.opscheppen': "apanhar com a pá", // nieuw, nalezen
    's.shovel.1': "Fica no caminho para peões.", // nieuw, nalezen
    's.shovel.2': "A pá carregadora está a fazer marcha-atrás. Cuidado!", // nieuw, nalezen
    's.shovel.3': "O pirilampo está aceso. A máquina está a andar.", // nieuw, nalezen
    'c.shovel.q': "Posso passar ao lado da pá carregadora?", // nieuw, nalezen
    'c.shovel.a': "Só se o condutor te vir.", // nieuw, nalezen
    'c.shovel': "Sai do caminho da pá carregadora", // nieuw, nalezen
    'c.shovel.b': "Uma pá carregadora é grande, e o condutor vê pouco à volta dela, sobretudo atrás. Por isso fica nos caminhos para peões, e usa a tua roupa refletora. Nunca andes atrás de uma máquina em movimento. Queres passar? Espera até o condutor te ver e fazer um sinal. O pirilampo quer dizer: esta máquina está a trabalhar. Mantém os visitantes bem longe dela. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.shovel.p': "Viu-me?", // nieuw, nalezen
    'c.shovel.s': "Tens de passar ao lado de uma pá carregadora a trabalhar. O condutor está a olhar para o outro lado. O que fazes?", // nieuw, nalezen
    'c.shovel.o1': "Esperas até ele te ver.", // nieuw, nalezen
    'c.shovel.o2': "Passas depressa.", // nieuw, nalezen
    'c.shovel.o3': "Passas por trás da máquina.", // nieuw, nalezen
    'c.shovel.w': "Um condutor que não te viu não pode parar por tua causa.", // nieuw, nalezen
    'u.toddlers': "As crianças", // nieuw, nalezen
    'l.nappies': "Mudar fraldas", // nieuw, nalezen
    'w.luier': "a fralda", // nieuw, nalezen
    'w.verschonen': "mudar (a fralda)", // nieuw, nalezen
    'w.commode': "o muda-fraldas", // nieuw, nalezen
    'w.billendoekje': "o toalhete (para o bebé)", // nieuw, nalezen
    'w.potje': "o bacio", // nieuw, nalezen
    'w.zindelijk': "que já não usa fralda (a criança já consegue usar a sanita)", // nieuw, nalezen
    's.nappies.1': "Vou mudar a fralda ao Sem.", // nieuw, nalezen
    's.nappies.2': "Lava as mãos depois de mudar uma fralda.", // nieuw, nalezen
    's.nappies.3': "Nunca deixes uma criança sozinha no muda-fraldas.", // nieuw, nalezen
    'c.nappies.q': "Quando mudaste a fralda à Noor?", // nieuw, nalezen
    'c.nappies.a': "Às dez. Está na aplicação.", // nieuw, nalezen
    'c.nappies': "Uma mão sempre na criança", // nieuw, nalezen
    'c.nappies.b': "Prepara tudo antes de pores uma criança no muda-fraldas: uma fralda limpa, toalhetes e roupa. Depois mantém sempre uma mão na criança. Nunca te afastes, nem por um segundo. Lava as mãos depois de cada muda, e limpa o muda-fraldas. Escreve quando mudaste a fralda, para os pais saberem. Vês uma irritação ou uma ferida? Escreve, e diz a um colega. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.nappies.p': "Estou só a mudar-lhe a fralda.", // nieuw, nalezen
    'c.nappies.s': "Estás a mudar a fralda a um bebé. Esqueceste-te dos toalhetes; estão do outro lado da sala. O que fazes?", // nieuw, nalezen
    'c.nappies.o1': "Levas o bebé contigo.", // nieuw, nalezen
    'c.nappies.o2': "Vais buscá-los depressa: é perto.", // nieuw, nalezen
    'c.nappies.o3': "Deixas o bebé, e chamas alguém.", // nieuw, nalezen
    'c.nappies.w': "Um bebé pode cair do muda-fraldas num segundo. Nunca deixes uma criança sozinha lá em cima.", // nieuw, nalezen
    'l.mealtime': "Comer e beber", // nieuw, nalezen
    'w.fles': "o biberão", // nieuw, nalezen
    'w.slabbetje': "o babete", // nieuw, nalezen
    'w.beker': "o copo (com asa)", // nieuw, nalezen
    'w.kinderstoel': "a cadeira alta (de bebé)", // nieuw, nalezen
    'w.fruithap': "a papa de fruta", // nieuw, nalezen
    'w.boertje': "o arroto", // nieuw, nalezen
    's.mealtime.1': "Lava as mãos antes de comer.", // nieuw, nalezen
    's.mealtime.2': "Dá o biberão à Lisa ao meio-dia.", // nieuw, nalezen
    's.mealtime.3': "Estão todos sentados à mesa.", // nieuw, nalezen
    'c.mealtime.q': "O Daan pode comer uma bolacha?", // nieuw, nalezen
    'c.mealtime.a': "Não, ele tem uma alergia. Vê na lista.", // nieuw, nalezen
    'c.mealtime': "Vê a lista antes de dares comida", // nieuw, nalezen
    'c.mealtime.b': "Antes de dares comida ou bebida a uma criança, vê a lista: algumas crianças têm uma alergia, outras não podem comer certa comida por causa da saúde ou da religião. Lava as tuas mãos e as mãos das crianças antes de comer. As crianças estão sentadas enquanto comem e bebem, nunca a andar ou a correr. Corta a comida em bocados pequenos para as crianças pequenas, como as uvas aos pedaços. Nunca dês a uma criança uma coisa que outra criança trouxe de casa. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.mealtime.p': "Ele pode comer isto?", // nieuw, nalezen
    'c.mealtime.s': "Uma criança chora por uma bolacha. Não conheces bem esta criança. O que fazes?", // nieuw, nalezen
    'c.mealtime.o1': "Primeiro vês a lista.", // nieuw, nalezen
    'c.mealtime.o2': "Dás a bolacha: é só uma bolacha.", // nieuw, nalezen
    'c.mealtime.o3': "Dás meia bolacha.", // nieuw, nalezen
    'c.mealtime.w': "Uma bolacha pode ter frutos secos, leite ou ovo. Para uma criança com alergia, isso pode ser muito perigoso.", // nieuw, nalezen
    'l.naptime': "Dormir", // nieuw, nalezen
    'w.bedje': "a cama de grades (uma cama pequena para um bebé)", // nieuw, nalezen
    'w.slaapkamer': "o quarto", // nieuw, nalezen
    'w.knuffel': "o peluche", // nieuw, nalezen
    'w.speen': "a chupeta", // nieuw, nalezen
    'w.babyfoon': "o intercomunicador de bebé", // nieuw, nalezen
    'w.slaapzak': "o saco de dormir de bebé", // nieuw, nalezen
    's.naptime.1': "Deita o bebé de costas.", // nieuw, nalezen
    's.naptime.2': "Vou muitas vezes espreitar ao quarto.", // nieuw, nalezen
    's.naptime.3': "Aqui está o teu peluche. Dorme bem.", // nieuw, nalezen
    'c.naptime.q': "A Mila já está a dormir?", // nieuw, nalezen
    'c.naptime.a': "Sim, desde a uma. Daqui a pouco vou ver outra vez.", // nieuw, nalezen
    'c.naptime': "Os bebés dormem de costas", // nieuw, nalezen
    'c.naptime.b': "Um bebé dorme mais seguro de costas, num saco de dormir, na sua própria cama de grades. Sem almofada, sem cobertor solto e sem brinquedos grandes na cama. Mantém o quarto fresco e arejado. Vai ver muitas vezes as crianças que dormem: olha e escuta, também quando o intercomunicador de bebé está ligado. Um pai ou uma mãe pede-te para deixares o bebé dormir de outra maneira? Primeiro diz ao teu chefe. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.naptime.p': "Vou espreitar ao quarto.", // nieuw, nalezen
    'c.naptime.s': "Um bebé adormeceu de barriga para baixo na cama de grades. O que fazes?", // nieuw, nalezen
    'c.naptime.o1': "Vira-lo com cuidado de costas.", // nieuw, nalezen
    'c.naptime.o2': "Deixa-lo dormir: agora está a dormir.", // nieuw, nalezen
    'c.naptime.o3': "Pões uma almofada ao lado dele.", // nieuw, nalezen
    'c.naptime.w': "De costas, um bebé respira livremente. Uma almofada pode tapar-lhe a cara.", // nieuw, nalezen
    'l.playtime': "Brincar", // nieuw, nalezen
    'w.spelen': "brincar", // nieuw, nalezen
    'w.speelgoed': "os brinquedos", // nieuw, nalezen
    'w.zandbak': "a caixa de areia", // nieuw, nalezen
    'w.glijbaan': "o escorrega", // nieuw, nalezen
    'w.puzzel': "o puzzle", // nieuw, nalezen
    'w.buitenspelen': "brincar lá fora", // nieuw, nalezen
    's.playtime.1': "Vamos brincar lá fora. Casacos vestidos!", // nieuw, nalezen
    's.playtime.2': "Arruma os brinquedos.", // nieuw, nalezen
    's.playtime.3': "Uma criança de cada vez no escorrega.", // nieuw, nalezen
    'c.playtime.q': "Posso brincar com o puzzle?", // nieuw, nalezen
    'c.playtime.a': "Sim, à mesa. Depois arrumas.", // nieuw, nalezen
    'c.playtime': "Brincar em segurança: olha, conta, verifica", // nieuw, nalezen
    'c.playtime.b': "As crianças aprendem ao brincar, por isso deixa-as experimentar. Mas não as percas de vista, também lá fora. Conta as crianças quando sais e quando voltas a entrar. Primeiro verifica o parque infantil: o portão está fechado, há vidros ou lixo? Os brinquedos com peças pequenas não são para crianças com menos de três anos: podem engasgar-se com elas. Limpa muitas vezes os brinquedos que vão à boca. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.playtime.p': "Estão todos?", // nieuw, nalezen
    'c.playtime.s': "Voltas a entrar do parque infantil. Contas uma criança a menos. O que fazes?", // nieuw, nalezen
    'c.playtime.o1': "Dizes a um colega, e procuras logo.", // nieuw, nalezen
    'c.playtime.o2': "Esperas: a criança vai entrar sozinha.", // nieuw, nalezen
    'c.playtime.o3': "Voltas a contar amanhã.", // nieuw, nalezen
    'c.playtime.w': "Uma criança sozinha lá fora pode magoar-se ou ir-se embora. Cada minuto conta.", // nieuw, nalezen
    'u.daycare': "Pais, segurança e o grupo", // nieuw, nalezen
    'l.pickup': "Trazer e ir buscar", // nieuw, nalezen
    'w.ouder': "o pai ou a mãe", // nieuw, nalezen
    'w.afscheid': "a despedida", // nieuw, nalezen
    'w.oppas': "a babysitter", // nieuw, nalezen
    'w.schriftje': "o caderno (para recados entre os pais e o pessoal)", // nieuw, nalezen
    'w.ouderapp': "a aplicação para os pais (para fotos e mensagens aos pais)", // nieuw, nalezen
    'w.wennen': "adaptar-se (habituar-se a um sítio novo)", // nieuw, nalezen
    's.pickup.1': "Vou escrever no caderno.", // nieuw, nalezen
    's.pickup.2': "Diz adeus ao pai.", // nieuw, nalezen
    's.pickup.3': "Vou pôr uma foto na aplicação para os pais.", // nieuw, nalezen
    'c.pickup.q': "Quem vem buscar o Sem hoje?", // nieuw, nalezen
    'c.pickup.a': "A avó dele. Ela está na lista.", // nieuw, nalezen
    'c.pickup': "Só a pessoas que estão na lista", // nieuw, nalezen
    'c.pickup.b': "Entrega uma criança só a um pai ou a uma mãe, ou a alguém de quem os pais te falaram. Não conheces a pessoa? Pergunta quem é, vê a identificação dela, e confirma com os pais ou com o teu chefe. Quando vêm buscar a criança, conta ao pai ou à mãe como correu o dia: comer, dormir, brincar, e alguma coisa especial. Escreve as coisas importantes no caderno ou na aplicação. Fala sobre outras crianças só com os pais delas. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.pickup.p': "Quem é o senhor? Vou ligar aos pais.", // nieuw, nalezen
    'c.pickup.s': "Um homem que não conheces vem buscar o Sem. Ele não está na lista. O que fazes?", // nieuw, nalezen
    'c.pickup.o1': "Ligas aos pais antes de o Sem sair.", // nieuw, nalezen
    'c.pickup.o2': "Deixas o Sem ir: ele sabe o nome.", // nieuw, nalezen
    'c.pickup.o3': "Perguntas ao Sem se o conhece.", // nieuw, nalezen
    'c.pickup.w': "És responsável pela criança até uma pessoa escolhida pelos pais ficar com ela.", // nieuw, nalezen
    'l.childsafety': "Segurança no grupo", // nieuw, nalezen
    'w.traphekje': "a barreira de escada", // nieuw, nalezen
    'w.vingerstrip': "o protetor de dedos (numa porta, para os dedos não ficarem presos)", // nieuw, nalezen
    'w.verslikken': "engasgar-se (a comida vai para o lado errado)", // nieuw, nalezen
    'w.bult': "o galo (na cabeça)", // nieuw, nalezen
    'w.schaafwond': "o esfolão (a pele fica raspada)", // nieuw, nalezen
    'w.toezicht': "a vigilância (estás a olhar pelas crianças)", // nieuw, nalezen
    's.childsafety.1': "Fecha sempre a barreira da escada.", // nieuw, nalezen
    's.childsafety.2': "Vou pôr um pouco de gelo no galo.", // nieuw, nalezen
    's.childsafety.3': "O Sem está a engasgar-se. Vou ajudá-lo.", // nieuw, nalezen
    'c.childsafety.q': "A Bo caiu?", // nieuw, nalezen
    'c.childsafety.a': "Sim, tem um galo. Vou ligar à mãe dela.", // nieuw, nalezen
    'c.childsafety': "Olha à volta com os olhos de uma criança", // nieuw, nalezen
    'c.childsafety.b': "As crianças pequenas põem tudo na boca e sobem para tudo. Por isso mantém a barreira da escada fechada, põe os produtos de limpeza e os medicamentos fora do alcance, e mantém as bebidas quentes longe das crianças. Verifica a sala todos os dias. Uma criança magoa-se? Dá os primeiros socorros, consola a criança, diz aos pais, e escreve o que aconteceu. É grave? Liga para o 112. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.childsafety.p': "A barreira da escada está aberta.", // nieuw, nalezen
    'c.childsafety.s': "Pousas o teu café quente numa mesa baixa. Uma criança pequena vai até lá. O que fazes?", // nieuw, nalezen
    'c.childsafety.o1': "Pões logo o café num sítio alto.", // nieuw, nalezen
    'c.childsafety.o2': "Dizes à criança para não tocar.", // nieuw, nalezen
    'c.childsafety.o3': "Bebes o café depressa.", // nieuw, nalezen
    'c.childsafety.w': "O café quente pode queimar muito uma criança pequena. Fora do alcance é o único sítio seguro.", // nieuw, nalezen
    'l.sickchild': "Uma criança doente e alergias", // nieuw, nalezen
    'w.huiduitslag': "a erupção na pele (manchas vermelhas na pele)", // nieuw, nalezen
    'w.diarree': "a diarreia", // nieuw, nalezen
    'w.overgeven': "vomitar", // nieuw, nalezen
    'w.allergielijst': "a lista de alergias", // nieuw, nalezen
    'w.adrenalinepen': "a caneta de adrenalina (uma caneta com medicamento para uma alergia forte)", // nieuw, nalezen
    'w.temperaturen': "medir a temperatura", // nieuw, nalezen
    's.sickchild.1': "O Sem tem febre. Vou ligar ao pai dele.", // nieuw, nalezen
    's.sickchild.2': "Vê a lista de alergias antes de comer.", // nieuw, nalezen
    's.sickchild.3': "Nunca dês um medicamento sem autorização.", // nieuw, nalezen
    'c.sickchild.q': "Como está o Jip?", // nieuw, nalezen
    'c.sickchild.a': "Está muito quente. Vou medir-lhe a temperatura.", // nieuw, nalezen
    'c.sickchild': "Uma criança doente: avisa, não adivinhes", // nieuw, nalezen
    'c.sickchild.b': "Repara em como as crianças estão. Uma criança está quente, muito cansada, a vomitar, ou tem manchas na pele? Mede-lhe a temperatura, diz ao teu colega, e liga aos pais. Dá um medicamento só com autorização escrita dos pais, e escreve o que deste e quando. Sabe que crianças têm uma alergia, e onde está o medicamento delas. Uma criança com uma reação alérgica forte: dá-lhe a caneta de adrenalina se aprendeste a fazê-lo, e liga para o 112. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.sickchild.p': "O seu filho está doente. Pode vir buscá-lo?", // nieuw, nalezen
    'c.sickchild.s': "Uma mãe diz: \"Dê-lhe um xarope para a febre às duas.\" Não há impresso. O que fazes?", // nieuw, nalezen
    'c.sickchild.o1': "Pedes-lhe para assinar primeiro o impresso.", // nieuw, nalezen
    'c.sickchild.o2': "Dás o xarope: a mãe pediu.", // nieuw, nalezen
    'c.sickchild.o3': "Dás metade, por segurança.", // nieuw, nalezen
    'c.sickchild.w': "Sem autorização escrita não podes dar medicamentos. O impresso protege a criança e a ti.", // nieuw, nalezen
    'l.grouprules': "O grupo e as regras", // nieuw, nalezen
    'w.pedagogischmedewerker': "o educador de infância (quem trabalha com as crianças na creche)", // nieuw, nalezen
    'w.mentor': "o mentor (o educador que acompanha de perto uma criança)", // nieuw, nalezen
    'w.vierogenprincipe': "a regra dos quatro olhos (outro adulto consegue sempre ver-te ou ouvir-te)", // nieuw, nalezen
    'w.observeren': "observar (olhar com atenção, e escrever)", // nieuw, nalezen
    'w.peuter': "a criança pequena (uma criança de dois ou três anos)", // nieuw, nalezen
    'w.groep': "o grupo (as crianças que estão juntas todos os dias)", // nieuw, nalezen
    's.grouprules.1': { m: "Sou o mentor da Lisa.", f: "Sou a mentora da Lisa.", x: "Tenho o papel de mentor da Lisa." }, // nieuw, nalezen
    's.grouprules.2': "Um colega consegue sempre ver-nos ou ouvir-nos.", // nieuw, nalezen
    's.grouprules.3': { m: "Estou preocupado com o Daan.", f: "Estou preocupada com o Daan.", x: "O Daan preocupa-me." }, // nieuw, nalezen
    'c.grouprules.q': "Posso ir lá para fora só eu com o grupo?", // nieuw, nalezen
    'c.grouprules.a': "Sim, mas primeiro avisa um colega.", // nieuw, nalezen
    'c.grouprules': "Nunca fora da vista de outro adulto", // nieuw, nalezen
    'c.grouprules.b': "Na creche, outro adulto tem de conseguir sempre ver-te ou ouvir-te quando estás com as crianças. Isso protege as crianças e a ti. Cada criança tem um mentor: um educador que acompanha essa criança de perto e fala com os pais. Uma criança preocupa-te por causa do que se passa em casa, por exemplo nódoas negras ou medo? Não faças muitas perguntas à criança: diz ao teu chefe, que conhece os passos. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.grouprules.p': { m: "Estou preocupado com esta criança.", f: "Estou preocupada com esta criança.", x: "Esta criança preocupa-me." }, // nieuw, nalezen
    'c.grouprules.s': "Vês outra vez nódoas negras numa criança. A criança está calada. O que fazes?", // nieuw, nalezen
    'c.grouprules.o1': "Dizes ao teu chefe no mesmo dia.", // nieuw, nalezen
    'c.grouprules.o2': "Fazes muitas perguntas à criança.", // nieuw, nalezen
    'c.grouprules.o3': "Ligas aos pais e perguntas porquê.", // nieuw, nalezen
    'c.grouprules.w': "O teu chefe conhece os passos quando há preocupações com uma criança. Muitas perguntas podem assustar a criança.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Casas de banho, hotéis e máquinas", // nieuw, nalezen
    'l.sanitary': "Sanitas e lavatórios", // nieuw, nalezen
    'w.wastafel': "o lavatório (o lava-mãos numa casa de banho)", // nieuw, nalezen
    'w.toiletpot': "a sanita", // nieuw, nalezen
    'w.toiletborstel': "o piaçaba (a escova da sanita)", // nieuw, nalezen
    'w.urinoir': "o urinol", // nieuw, nalezen
    'w.kalk': "o calcário (a camada branca que a água deixa nas torneiras e nos azulejos)", // nieuw, nalezen
    'w.ontstopper': "o desentupidor (uma ferramenta para uma sanita ou um cano entupido)", // nieuw, nalezen
    's.sanitary.1': "Primeiro faço os lavatórios, depois as sanitas.", // nieuw, nalezen
    's.sanitary.2': "Há calcário na torneira.", // nieuw, nalezen
    's.sanitary.3': "A sanita do primeiro andar está entupida.", // nieuw, nalezen
    'c.sanitary.q': "As casas de banho já estão prontas?", // nieuw, nalezen
    'c.sanitary.a': "Ainda não. Há uma sanita entupida.", // nieuw, nalezen
    'c.sanitary': "Do limpo para o sujo", // nieuw, nalezen
    'c.sanitary.b': "Numa casa de banho trabalhas do limpo para o sujo: primeiro os espelhos e os lavatórios, depois as sanitas, e o chão no fim. Assim não levas sujidade da sanita para o lavatório. Usa os panos da cor para a sanita, e calça luvas. Limpa também o piaçaba, e deixa-o secar. Uma sanita está entupida ou avariada? Põe um aviso na porta, e comunica. Lava as mãos quando acabares, também se usaste luvas. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.sanitary.p': "Esta sanita está entupida. Vou pôr um aviso.", // nieuw, nalezen
    'c.sanitary.s': "Limpaste uma sanita. A seguir é o lavatório. Ainda tens o mesmo pano na mão. O que fazes?", // nieuw, nalezen
    'c.sanitary.o1': "Pegas num pano da cor para o lavatório.", // nieuw, nalezen
    'c.sanitary.o2': "Usas o mesmo pano: ainda parece limpo.", // nieuw, nalezen
    'c.sanitary.o3': "Primeiro passas o pano por água na sanita.", // nieuw, nalezen
    'c.sanitary.w': "Os micróbios da sanita estão no pano, mesmo quando não os vês. Um pano novo mantém-nos longe das mãos e das caras.", // nieuw, nalezen
    'l.hotelroom': "Quartos de hotel", // nieuw, nalezen
    'w.laken': "o lençol (numa cama)", // nieuw, nalezen
    'w.kussensloop': "a fronha", // nieuw, nalezen
    'w.dekbed': "o edredão", // nieuw, nalezen
    'w.handdoek': "a toalha", // nieuw, nalezen
    'w.kamerlijst': "a lista de quartos (os quartos que tens de fazer hoje)", // nieuw, nalezen
    'w.opmaken': "fazer (a cama)", // nieuw, nalezen
    's.hotelroom.1': "Faço a cama com lençóis limpos.", // nieuw, nalezen
    's.hotelroom.2': "Põe duas toalhas limpas na casa de banho.", // nieuw, nalezen
    's.hotelroom.3': "O quarto doze está pronto. Vou para o treze.", // nieuw, nalezen
    'c.hotelroom.q': "Quantos quartos te faltam?", // nieuw, nalezen
    'c.hotelroom.a': "Mais quatro. Depois a minha lista está feita.", // nieuw, nalezen
    'c.hotelroom': "Bate, diz quem és, e espera", // nieuw, nalezen
    'c.hotelroom.b': "Antes de entrares num quarto de hotel, bate à porta e diz quem és, por exemplo “Housekeeping!”. Espera um momento, e bate outra vez. Há um aviso “Niet storen” na porta? Então não entres, e escreve isso na tua lista de quartos. O hóspede está no quarto? Pergunta se podes limpar agora, ou volta mais tarde. As coisas do hóspede ficam onde estão. Um hóspede esqueceu-se de alguma coisa? Leva-a à receção. Nunca fiques com nada para ti, nem sequer uma coisa pequena. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.hotelroom.p': "Bom dia. Posso limpar o quarto agora?", // nieuw, nalezen
    'c.hotelroom.s': "Num quarto vazio encontras um telemóvel debaixo da cama. O hóspede já se foi embora. O que fazes?", // nieuw, nalezen
    'c.hotelroom.o1': "Levas o telemóvel à receção.", // nieuw, nalezen
    'c.hotelroom.o2': "Ficas com ele: o hóspede já se foi.", // nieuw, nalezen
    'c.hotelroom.o3': "Deixas o telemóvel debaixo da cama.", // nieuw, nalezen
    'c.hotelroom.w': "As coisas perdidas continuam a ser do hóspede. A receção pode devolvê-las. Ficar com elas é roubar, e pode custar-te o emprego.", // nieuw, nalezen
    'l.dosing': "Produtos e máquinas", // nieuw, nalezen
    'w.doseren': "dosear (usar a quantidade certa de um produto)", // nieuw, nalezen
    'w.maatbeker': "o copo medidor", // nieuw, nalezen
    'w.sprayflacon': "o pulverizador", // nieuw, nalezen
    'w.concentraat': "o concentrado (um produto forte que se mistura com água)", // nieuw, nalezen
    'w.veiligheidsblad': "a ficha de dados de segurança (diz os perigos de um produto, e o que fazer)", // nieuw, nalezen
    'w.schrobzuigmachine': "a lavadora-secadora de pavimentos (uma máquina que esfrega o chão e o aspira até ficar seco)", // nieuw, nalezen
    's.dosing.1': "Põe uma tampa cheia num balde de água.", // nieuw, nalezen
    's.dosing.2': "Lê primeiro o rótulo.", // nieuw, nalezen
    's.dosing.3': "A lavadora-secadora tem de ir para o carregador.", // nieuw, nalezen
    'c.dosing.q': "Põe um pouco mais de produto. Assim fica mais limpo.", // nieuw, nalezen
    'c.dosing.a': "Não, mais não é melhor. Uso o copo medidor.", // nieuw, nalezen
    'c.dosing': "A dose certa, não mais", // nieuw, nalezen
    'c.dosing.b': "Mais produto não limpa melhor. Demasiado deixa uma camada pegajosa, por isso o chão suja-se mais depressa e pode ficar escorregadio. Também é pior para a tua pele e os teus pulmões. Usa o copo medidor ou a bomba doseadora, e segue o rótulo. Primeiro a água, depois o produto: assim não salpica. Antes de usares a lavadora-secadora, verifica se está carregada, com água limpa no depósito. No fim, esvazia e enxagua o depósito da água suja. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.dosing.p': "Quanto tenho de pôr?", // nieuw, nalezen
    'c.dosing.s': "O chão continua pegajoso. Um colega diz: “Usa o dobro do produto.” O que fazes?", // nieuw, nalezen
    'c.dosing.o1': "Usas a dose do rótulo, e perguntas.", // nieuw, nalezen
    'c.dosing.o2': "Usas o dobro: assim fica limpo.", // nieuw, nalezen
    'c.dosing.o3': "Deitas o produto diretamente no chão.", // nieuw, nalezen
    'c.dosing.w': "Um chão pegajoso muitas vezes quer dizer produto a mais, não a menos. A dose certa limpa melhor e é a mais segura.", // nieuw, nalezen
    'l.officenight': "Escritórios, cedo ou tarde", // nieuw, nalezen
    'w.toetsenbord': "o teclado", // nieuw, nalezen
    'w.papierbak': "o contentor do papel (para papel velho)", // nieuw, nalezen
    'w.lichtschakelaar': "o interruptor da luz", // nieuw, nalezen
    'w.pantry': "a copa (a pequena cozinha de um escritório)", // nieuw, nalezen
    'w.deurmat': "o tapete de entrada (o tapete à porta)", // nieuw, nalezen
    'w.alleenwerken': "trabalhar sozinho (não está mais ninguém no edifício)", // nieuw, nalezen
    's.officenight.1': "Esvazio os caixotes do lixo e o contentor do papel.", // nieuw, nalezen
    's.officenight.2': "Não toco nos papéis da secretária.", // nieuw, nalezen
    's.officenight.3': "Apago a luz quando acabo.", // nieuw, nalezen
    'c.officenight.q': { m: "Esta noite trabalhas sozinho no edifício?", f: "Esta noite trabalhas sozinha no edifício?", x: "Esta noite não está mais ninguém contigo no edifício?" }, // nieuw, nalezen
    'c.officenight.a': "Sim. Mando-te uma mensagem quando acabar.", // nieuw, nalezen
    'c.officenight': "Só tu no edifício", // nieuw, nalezen
    'c.officenight.b': "De manhã cedo ou à noite, muitas vezes limpas um escritório sem mais ninguém. Sabe o que fazer se acontecer alguma coisa: a quem ligas, e onde está a caixa de primeiros socorros? Tem sempre o telemóvel contigo. Combina com o teu chefe ou com um colega que mandas uma mensagem quando começas e quando acabas. Não deixes entrar ninguém que não conheces. Não toques em papéis, ecrãs ou teclados mais do que precisas para limpar, e nunca leias o que lá está. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.officenight.p': "Já acabei e agora vou para casa.", // nieuw, nalezen
    'c.officenight.s': "À noite um homem bate na porta de vidro. Diz que trabalha aqui e que se esqueceu da chave. O que fazes?", // nieuw, nalezen
    'c.officenight.o1': "Não abres. Ligas ao teu chefe.", // nieuw, nalezen
    'c.officenight.o2': "Deixas o homem entrar: parece simpático.", // nieuw, nalezen
    'c.officenight.o3': "Dás-lhe a tua própria chave.", // nieuw, nalezen
    'c.officenight.w': "Qualquer pessoa pode dizer que trabalha lá. O teu chefe pode confirmar. A tua segurança e o edifício vêm primeiro.", // nieuw, nalezen
    'u.cooking': "A cozinha e o serviço", // nieuw, nalezen
    'l.knives': "Facas e cortar", // nieuw, nalezen
    'w.koksmes': "a faca de chef (uma faca de cozinha grande)", // nieuw, nalezen
    'w.dunschiller': "o descascador", // nieuw, nalezen
    'w.schillen': "descascar", // nieuw, nalezen
    'w.hakken': "picar (cortar muito pequeno)", // nieuw, nalezen
    'w.raspen': "ralar", // nieuw, nalezen
    'w.blokjes': "os cubos (pedaços pequenos e quadrados)", // nieuw, nalezen
    's.knives.1': "Corta as cenouras em cubos.", // nieuw, nalezen
    's.knives.2': "Não ponhas a faca no lava-loiça.", // nieuw, nalezen
    's.knives.3': "Pica a salsa fininha.", // nieuw, nalezen
    'c.knives.q': "Podes cortar as cebolas?", // nieuw, nalezen
    'c.knives.a': "Sim, chefe. Às rodelas ou aos cubos?", // nieuw, nalezen
    'c.knives': "Uma faca é uma ferramenta, não um brinquedo", // nieuw, nalezen
    'c.knives.b': "Mantém a tua faca afiada: uma faca romba escorrega mais facilmente. Corta numa tábua que não se mexe: põe um pano molhado por baixo. Dobra os dedos para dentro, como uma garra. Anda com a ponta para baixo, junto à perna, e diz “Mes!” quando passas por alguém. Nunca ponhas uma faca num lava-loiça cheio de água: alguém pode agarrá-la sem a ver. Uma faca está a cair? Dá um passo atrás, não a apanhes. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.knives.p': "Faca! Estou a passar atrás de ti.", // nieuw, nalezen
    'c.knives.s': "Estás a cortar. A tua faca escorrega da tábua e cai. O que fazes?", // nieuw, nalezen
    'c.knives.o1': "Dás um passo atrás, e deixas cair.", // nieuw, nalezen
    'c.knives.o2': "Apanhas a faca depressa com a mão.", // nieuw, nalezen
    'c.knives.o3': "Paras a faca com o pé.", // nieuw, nalezen
    'c.knives.w': "Uma faca a cair pode fazer um corte fundo na mão ou no pé. Uma faca no chão só precisa de ser lavada.", // nieuw, nalezen
    'l.rawcooked': "Cru, cozinhado e alergénios", // nieuw, nalezen
    'w.rauw': "cru (não cozinhado)", // nieuw, nalezen
    'w.gaar': "cozinhado, no ponto (pronto a comer)", // nieuw, nalezen
    'w.afdekken': "tapar (com uma tampa ou película)", // nieuw, nalezen
    'w.kleurcode': "o código de cores (uma cor de tábua e de faca para cada tipo de alimento)", // nieuw, nalezen
    'w.allergenenlijst': "a lista de alergénios (diz o que tem cada prato)", // nieuw, nalezen
    'w.glutenvrij': "sem glúten", // nieuw, nalezen
    's.rawcooked.1': "A carne crua vai para a parte de baixo do frigorífico.", // nieuw, nalezen
    's.rawcooked.2': "O frango já está cozinhado?", // nieuw, nalezen
    's.rawcooked.3': "Tapa as caixas na câmara frigorífica.", // nieuw, nalezen
    'c.rawcooked.q': "Este molho é sem glúten?", // nieuw, nalezen
    'c.rawcooked.a': "Não tenho a certeza. Vou ver a lista de alergénios.", // nieuw, nalezen
    'c.rawcooked': "O cru e o pronto nunca se tocam", // nieuw, nalezen
    'c.rawcooked.b': "A carne, o peixe e os ovos crus podem ter micróbios. Mantém-nos longe da comida que está pronta a comer. Usa outra tábua e outra faca, ou o código de cores da tua cozinha, e lava as mãos depois de tocares em comida crua. A carne crua vai para a parte de baixo do frigorífico, para não pingar para outra comida. Tapa a comida e põe-lhe a data. Com alergias, um vestígio pode chegar: usa utensílios limpos. Um restaurante tem de poder dizer aos clientes que alergénios há num prato: vê a lista de alergénios. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.rawcooked.p': "Qual é a tábua para a carne crua?", // nieuw, nalezen
    'c.rawcooked.s': "Cortaste frango cru. A seguir tens de cortar tomates para uma salada. O que fazes?", // nieuw, nalezen
    'c.rawcooked.o1': "Pegas numa tábua limpa e numa faca limpa.", // nieuw, nalezen
    'c.rawcooked.o2': "Passas um pano na tábua, e continuas.", // nieuw, nalezen
    'c.rawcooked.o3': "Cortas os tomates na mesma tábua.", // nieuw, nalezen
    'c.rawcooked.w': "Os micróbios do frango cru passam para os tomates, e uma salada não volta a ser cozinhada. Uma tábua limpa evita isso.", // nieuw, nalezen
    'l.pass': "A copa e o passe", // nieuw, nalezen
    'w.pass': "o passe (o balcão onde os pratos esperam pelo empregado de mesa)", // nieuw, nalezen
    'w.bon': "o talão de pedido (o pedido do empregado de mesa para a cozinha)", // nieuw, nalezen
    'w.spoelkeuken': "a copa (onde se lava a loiça)", // nieuw, nalezen
    'w.vaatwaskorf': "o cesto da máquina (o cesto que entra na máquina de lavar loiça)", // nieuw, nalezen
    'w.voorspoelen': "pré-lavar (passar por água antes da máquina)", // nieuw, nalezen
    'w.warmhoudlamp': "a lâmpada de aquecimento (mantém os pratos quentes)", // nieuw, nalezen
    's.pass.1': "A mesa oito está no passe.", // nieuw, nalezen
    's.pass.2': "Estão a entrar dois talões novos.", // nieuw, nalezen
    's.pass.3': "Pré-lava primeiro os pratos.", // nieuw, nalezen
    'c.pass.q': "Então a mesa doze?", // nieuw, nalezen
    'c.pass.a': "Está no passe. Vou levá-la agora.", // nieuw, nalezen
    'c.pass': "O passe: os pratos não esperam", // nieuw, nalezen
    'c.pass.b': "No passe, a cozinha põe os pratos para o empregado de mesa. A comida quente tem de chegar depressa ao cliente, por isso um prato não espera muito no passe. Vê o talão: a mesa certa, os pratos certos, a borda do prato limpa? Então leva-o. Na copa: pré-lava, põe tudo nos cestos, e deixa a máquina fazer o resto. Não abras a máquina enquanto está a trabalhar: o vapor está muito quente. Calça luvas quando pões os produtos na máquina. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.pass.p': "Isto é para que mesa?", // nieuw, nalezen
    'c.pass.s': "Há dois pratos no passe. Não sabes para que mesa são. O que fazes?", // nieuw, nalezen
    'c.pass.o1': "Vês o talão, ou perguntas ao chefe.", // nieuw, nalezen
    'c.pass.o2': "Levas os pratos para uma mesa que está à espera.", // nieuw, nalezen
    'c.pass.o3': "Esperas até alguém os levar.", // nieuw, nalezen
    'c.pass.w': "Um prato na mesa errada quer dizer dois clientes à espera e comida fria. Uma pergunta curta é mais rápida.", // nieuw, nalezen
    'l.bill': "Os pratos e a conta", // nieuw, nalezen
    'w.voorgerecht': "a entrada (o primeiro prato)", // nieuw, nalezen
    'w.hoofdgerecht': "o prato principal", // nieuw, nalezen
    'w.nagerecht': "a sobremesa", // nieuw, nalezen
    'w.reservering': "a reserva (uma mesa marcada antes)", // nieuw, nalezen
    'w.pinapparaat': "o terminal de pagamento (a máquina para pagar com cartão)", // nieuw, nalezen
    'w.apartbetalen': "pagar em separado (cada pessoa paga o seu)", // nieuw, nalezen
    's.bill.1': "Tem reserva?", // nieuw, nalezen
    's.bill.2': "Querem pagar tudo junto ou em separado?", // nieuw, nalezen
    's.bill.3': "Trago já o prato principal?", // nieuw, nalezen
    'c.bill.q': "Podemos pagar em separado?", // nieuw, nalezen
    'c.bill.a': "Sim, claro. Vou buscar o terminal.", // nieuw, nalezen
    'c.bill': "Dinheiro na mesa: conta duas vezes", // nieuw, nalezen
    'c.bill.b': "Quando um cliente paga, diz o valor com clareza e deixa o cliente ver o terminal de pagamento. Com dinheiro, conta o dinheiro quando o recebes, e outra vez quando dás o troco. O dinheiro vai para a caixa ou para a tua carteira de empregado de mesa, nunca para o teu bolso. As gorjetas (fooi) vão para onde a tua empresa diz, por exemplo para o frasco das gorjetas. Um cliente foi-se embora sem pagar? Não corras atrás dele: avisa o teu gerente. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.bill.p': "São quarenta e cinco euros, por favor.", // nieuw, nalezen
    'c.bill.s': "Um cliente dá-te dinheiro e diz: “Está certo.” Não contaste. O que fazes?", // nieuw, nalezen
    'c.bill.o1': "Contas o dinheiro com o cliente ainda ali.", // nieuw, nalezen
    'c.bill.o2': "Guardas o dinheiro, e contas mais tarde.", // nieuw, nalezen
    'c.bill.o3': "Confias no cliente: agradeces.", // nieuw, nalezen
    'c.bill.w': "Se contares mais tarde e faltar dinheiro, ninguém pode verificar o que aconteceu. Contar na mesa protege o cliente e a ti.", // nieuw, nalezen
    'u.carework': "Cuidados pessoais e apoio domiciliário", // nieuw, nalezen
    'l.washing': "Lavar e vestir", // nieuw, nalezen
    'w.washandje': "a luva de banho (um pano pequeno como uma luva)", // nieuw, nalezen
    'w.douchestoel': "a cadeira de duche", // nieuw, nalezen
    'w.tandenpoetsen': "lavar os dentes", // nieuw, nalezen
    'w.kammen': "pentear", // nieuw, nalezen
    'w.scheren': "fazer a barba", // nieuw, nalezen
    'w.steunkous': "a meia de compressão (uma meia apertada para as pernas)", // nieuw, nalezen
    's.washing.1': "A água está quente o suficiente?", // nieuw, nalezen
    's.washing.2': "Quer lavar a cara sem ajuda?", // nieuw, nalezen
    's.washing.3': "Agora vou calçar-lhe as meias de compressão.", // nieuw, nalezen
    'c.washing.q': "Hoje não quero tomar duche.", // nieuw, nalezen
    'c.washing.a': "Está bem. Quer ajuda no lavatório?", // nieuw, nalezen
    'c.washing': "Pergunta primeiro, tapa, e deixa escolher", // nieuw, nalezen
    'c.washing.b': "Lavar alguém é muito pessoal. Diz o que vais fazer, e pergunta primeiro. Tapa com uma toalha as partes do corpo que não estás a lavar. Fecha a porta ou a cortina. Deixa o cliente escolher: o duche ou lavar-se no lavatório, e que roupa vestir. Deixa o cliente fazer o que ainda consegue fazer, mesmo quando é mais lento. Um cliente diz que não? Não o obrigues. Tenta mais tarde, oferece outra coisa, e avisa a enfermeira.", // nieuw, nalezen
    'c.washing.p': "O que gostaria de vestir hoje?", // nieuw, nalezen
    'c.washing.s': "Uma cliente diz que hoje não quer ser lavada. O que fazes?", // nieuw, nalezen
    'c.washing.o1': "Aceitas, e avisas a enfermeira.", // nieuw, nalezen
    'c.washing.o2': "Lavas a cliente na mesma: está na lista.", // nieuw, nalezen
    'c.washing.o3': "Passas à frente, e não dizes nada.", // nieuw, nalezen
    'c.washing.w': "Um cliente pode dizer que não. Forçar os cuidados estraga a confiança. A enfermeira pode ver porquê, e o que se pode fazer.", // nieuw, nalezen
    'l.observing': "Observar e registar", // nieuw, nalezen
    'w.rapporteren': "registar (escrever o que viste, no processo de cuidados)", // nieuw, nalezen
    'w.zorgdossier': "o processo de cuidados (tudo sobre os cuidados de um cliente)", // nieuw, nalezen
    'w.drukplek': "a úlcera de pressão (uma mancha vermelha de estar muito tempo deitado ou sentado)", // nieuw, nalezen
    'w.huid': "a pele", // nieuw, nalezen
    'w.plassen': "fazer xixi", // nieuw, nalezen
    'w.vochtlijst': "o registo de líquidos (quanto um cliente bebe)", // nieuw, nalezen
    's.observing.1': "A senhora tem uma mancha vermelha no calcanhar.", // nieuw, nalezen
    's.observing.2': "O senhor bebeu pouco hoje.", // nieuw, nalezen
    's.observing.3': "Vou escrever isto no processo de cuidados.", // nieuw, nalezen
    'c.observing.q': "Há alguma coisa de especial com a senhora Jansen?", // nieuw, nalezen
    'c.observing.a': "Sim. Hoje quase não fez xixi.", // nieuw, nalezen
    'c.observing': "Escreve o que vês, não o que pensas", // nieuw, nalezen
    'c.observing.b': "O que escreves no processo de cuidados é lido pelo colega seguinte. Escreve factos: o que viste, ouviste ou mediste, e quando. Não “Mevrouw is lastig”, mas “Mevrouw wilde niet eten en duwde het bord weg.” Escreve no mesmo dia, com frases curtas. Não sabes bem como escrever em neerlandês? Diz à enfermeira, e escrevam juntos. Olha para a pele quando lavas alguém: uma mancha vermelha que não desaparece pode ser o início de uma úlcera de pressão. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.observing.p': "Vou escrever o que vi.", // nieuw, nalezen
    'c.observing.s': "Uma cliente ficou zangada durante a higiene. Tens de escrever isso no processo. O que fazes?", // nieuw, nalezen
    'c.observing.o1': "Escreves o que ela disse e fez, e quando.", // nieuw, nalezen
    'c.observing.o2': "Escreves: “Senhora difícil, como sempre.”", // nieuw, nalezen
    'c.observing.o3': "Não escreves nada: é normal.", // nieuw, nalezen
    'c.observing.w': "Os factos ajudam o colega seguinte e a enfermeira a agir. Uma opinião não diz o que aconteceu.", // nieuw, nalezen
    'l.homecare': "Apoio domiciliário", // nieuw, nalezen
    'w.thuiszorg': "o apoio domiciliário (cuidados na casa do próprio cliente)", // nieuw, nalezen
    'w.sleutelkluis': "o cofre de chaves (uma caixinha com código, com a chave da casa lá dentro)", // nieuw, nalezen
    'w.zorgplan': "o plano de cuidados (que cuidados um cliente recebe, e como)", // nieuw, nalezen
    'w.wijkverpleegkundige': "o enfermeiro / a enfermeira de bairro (da equipa de apoio domiciliário)", // nieuw, nalezen
    'w.mantelzorger': "o cuidador informal (um familiar ou amigo que cuida do cliente)", // nieuw, nalezen
    'w.alarmknop': "o botão de alarme (o cliente usa-o, para pedir ajuda)", // nieuw, nalezen
    's.homecare.1': "Primeiro toco à campainha. Depois tiro a chave.", // nieuw, nalezen
    's.homecare.2': "O que diz o plano de cuidados?", // nieuw, nalezen
    's.homecare.3': "Hoje chego um quarto de hora mais tarde.", // nieuw, nalezen
    'c.homecare.q': "Quem é?", // nieuw, nalezen
    'c.homecare.a': "Bom dia, é o apoio domiciliário. Posso entrar?", // nieuw, nalezen
    'c.homecare': "De visita em casa de alguém", // nieuw, nalezen
    'c.homecare.b': "No apoio domiciliário trabalhas na casa do próprio cliente. Lá estás de visita: toca à campainha e diz quem és, mesmo quando tens a chave. O código do cofre de chaves é secreto. Nunca o escrevas onde outros o possam ver, e fecha sempre outra vez o cofre de chaves. Segue o plano de cuidados: o que fazes está lá. Alguma coisa está diferente, ou o cliente não abre a porta? Não te vás simplesmente embora. Liga à tua equipa ou à enfermeira de bairro. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.homecare.p': "Bom dia, sou do apoio domiciliário.", // nieuw, nalezen
    'c.homecare.s': "Tocas à campainha. A cliente não abre. O carro dela está lá. O que fazes?", // nieuw, nalezen
    'c.homecare.o1': "Ligas à tua equipa, e esperas.", // nieuw, nalezen
    'c.homecare.o2': "Segues para o cliente seguinte.", // nieuw, nalezen
    'c.homecare.o3': "Tocas mais uma vez, e vais embora.", // nieuw, nalezen
    'c.homecare.w': "A cliente pode ter caído, ou estar doente. A tua equipa sabe o que fazer, e quem tem uma chave.", // nieuw, nalezen
    'l.liftaids': "Equipamentos de elevação e segurança", // nieuw, nalezen
    'w.glijlaken': "o lençol deslizante (um lençol liso para mudar um cliente de posição na cama)", // nieuw, nalezen
    'w.tilband': "o arnês (vai por baixo do cliente, para o elevador de transferência)", // nieuw, nalezen
    'w.stalift': "o elevador de pé (ajuda um cliente a pôr-se de pé)", // nieuw, nalezen
    'w.werkhoogte': "a altura de trabalho (a cama à altura das tuas ancas)", // nieuw, nalezen
    'w.bedhek': "a grade da cama", // nieuw, nalezen
    'w.transferplank': "a tábua de transferência (uma tábua para deslizar da cama para uma cadeira)", // nieuw, nalezen
    's.liftaids.1': "Põe a cama à altura de trabalho.", // nieuw, nalezen
    's.liftaids.2': "A cadeira de rodas está travada?", // nieuw, nalezen
    's.liftaids.3': "Fazemos isto a dois.", // nieuw, nalezen
    'c.liftaids.q': "Consegues virar a senhora sem ajuda?", // nieuw, nalezen
    'c.liftaids.a': "Com o lençol deslizante consigo. Vou buscá-lo.", // nieuw, nalezen
    'c.liftaids': "Deixa o equipamento fazer a força", // nieuw, nalezen
    'c.liftaids.b': "Antes de usares um elevador de transferência, verifica-o: a bateria está carregada, o arnês é do tamanho certo e não está rasgado? Trava a cama e a cadeira de rodas. Põe a cama à altura das tuas ancas, para não te dobrares. Explica ao cliente cada passo. O plano de cuidados diz de que equipamento um cliente precisa. Um equipamento está avariado ou falta? Não arranjes outra maneira: comunica, e pede ajuda a um colega. Não te mostraram como funciona um equipamento? Pergunta antes de começar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.liftaids.p': "O arnês está rasgado. Vou buscar outro.", // nieuw, nalezen
    'c.liftaids.s': "Queres usar o elevador de transferência. O arnês tem um pequeno rasgão. O que fazes?", // nieuw, nalezen
    'c.liftaids.o1': "Pegas noutro arnês, e comunicas o rasgão.", // nieuw, nalezen
    'c.liftaids.o2': "Usas o arnês: o rasgão é muito pequeno.", // nieuw, nalezen
    'c.liftaids.o3': "Dás um nó no arnês.", // nieuw, nalezen
    'c.liftaids.w': "Um pequeno rasgão pode ficar maior com o peso de uma pessoa. Uma queda do elevador pode magoar muito o cliente.", // nieuw, nalezen
    'u.shopfloor': "Caixa, stock e fecho", // nieuw, nalezen
    'l.returns': "Devoluções e a caixa", // nieuw, nalezen
    'w.terugbrengen': "devolver (um produto à loja)", // nieuw, nalezen
    'w.klantenkaart': "o cartão de cliente (um cartão para juntar pontos)", // nieuw, nalezen
    'w.statiegeld': "o depósito (dinheiro de volta por uma garrafa ou lata vazia)", // nieuw, nalezen
    'w.kassalade': "a gaveta da caixa (a gaveta com o dinheiro)", // nieuw, nalezen
    'w.streepjescode': "o código de barras", // nieuw, nalezen
    'w.tegoedbon': "o vale de compras (um papel para gastar mais tarde na loja)", // nieuw, nalezen
    's.returns.1': "Junta pontos com o cartão de cliente?", // nieuw, nalezen
    's.returns.2': "O código de barras não funciona.", // nieuw, nalezen
    's.returns.3': "Quer o dinheiro de volta ou um vale de compras?", // nieuw, nalezen
    'c.returns.q': "Quero devolver esta camisola.", // nieuw, nalezen
    'c.returns.a': "É possível. Ainda tem o talão?", // nieuw, nalezen
    'c.returns': "Devoluções: segue as regras da loja", // nieuw, nalezen
    'c.returns.b': "Cada loja tem as suas regras para devoluções: quantos dias, com ou sem talão, dinheiro de volta ou um vale de compras. Aprende-as, e segue-as com todos os clientes. Tens dúvidas? Pergunta a um colega ou ao gerente, e não decidas por tua conta. No fim do teu turno, conta a gaveta da tua caixa, com um colega se na tua loja se faz assim. Nunca tires dinheiro da caixa para ti, nem sequer emprestado por um momento. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.returns.p': "Vou só perguntar ao gerente da loja.", // nieuw, nalezen
    'c.returns.s': "Uma cliente quer o dinheiro de volta por uns sapatos. Não tem talão. Não sabes a regra. O que fazes?", // nieuw, nalezen
    'c.returns.o1': "Perguntas ao gerente o que fazer.", // nieuw, nalezen
    'c.returns.o2': "Devolves o dinheiro: ela é simpática.", // nieuw, nalezen
    'c.returns.o3': "Dizes que não, e mandas a cliente embora.", // nieuw, nalezen
    'c.returns.w': "O gerente conhece as regras e pode decidir. Assim a cliente recebe uma resposta justa, e a culpa não é tua.", // nieuw, nalezen
    'l.facing': "Arrumar a frente e os produtos frios", // nieuw, nalezen
    'w.facen': "arrumar a frente (puxar os produtos para a frente, com o rótulo virado para fora)", // nieuw, nalezen
    'w.afprijzen': "baixar o preço (dar um preço mais baixo)", // nieuw, nalezen
    'w.koelvak': "a prateleira refrigerada (a prateleira fria numa loja)", // nieuw, nalezen
    'w.diepvries': "a arca congeladora", // nieuw, nalezen
    'w.uitpakken': "desembalar", // nieuw, nalezen
    'w.schapkaartje': "a etiqueta da prateleira (o cartão do preço na prateleira)", // nieuw, nalezen
    's.facing.1': "Primeiro a prateleira refrigerada, depois o resto.", // nieuw, nalezen
    's.facing.2': "Põe tudo bem arrumado para a frente.", // nieuw, nalezen
    's.facing.3': "Baixa o preço dos produtos de hoje.", // nieuw, nalezen
    'c.facing.q': "Já acabaste a prateleira refrigerada?", // nieuw, nalezen
    'c.facing.a': "Quase. Ainda tenho de arrumar a frente.", // nieuw, nalezen
    'c.facing': "Primeiro o frio, e a prateleira parece cheia", // nieuw, nalezen
    'c.facing.b': "Os produtos frios e congelados vão primeiro para o frigorífico ou para a arca, antes de tudo. Não podem ficar muito tempo fora do frio. Depois o resto. Arrumar a frente quer dizer: puxar os produtos para a frente, com o rótulo virado para o cliente. Assim a prateleira parece cheia e arrumada. Vê a etiqueta da prateleira: o preço está certo para este produto? Quando abres caixas, corta para longe do teu corpo, e não muito fundo: podes estragar o produto. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.facing.p': "Primeiro os produtos frios, depois o resto.", // nieuw, nalezen
    'c.facing.s': "Chega uma palete com leite e uma palete com batatas fritas. Não está mais ninguém. O que fazes?", // nieuw, nalezen
    'c.facing.o1': "Pões primeiro o leite no frigorífico.", // nieuw, nalezen
    'c.facing.o2': "Começas pelas batatas fritas: são mais leves.", // nieuw, nalezen
    'c.facing.o3': "Deixas as duas até chegar um colega.", // nieuw, nalezen
    'c.facing.w': "O leite que fica muito tempo fora do frio pode pôr os clientes doentes, e tem de ir para o lixo. As batatas fritas podem esperar.", // nieuw, nalezen
    'l.shrink': "Estragos e roubo", // nieuw, nalezen
    'w.derving': "a quebra (o que a loja perde: produtos partidos, velhos ou roubados)", // nieuw, nalezen
    'w.afschrijven': "dar baixa (registar um produto como perdido)", // nieuw, nalezen
    'w.personeelsaankoop': "a compra de funcionário (o que compras na tua própria loja)", // nieuw, nalezen
    'w.tassencontrole': "a revista das malas", // nieuw, nalezen
    'w.kassamedewerker': "o operador / a operadora de caixa", // nieuw, nalezen
    'w.winkelwagen': "o carrinho de compras", // nieuw, nalezen
    's.shrink.1': "Este frasco está partido. Vou dar-lhe baixa.", // nieuw, nalezen
    's.shrink.2': "Pago as minhas compras na caixa de um colega.", // nieuw, nalezen
    's.shrink.3': "Está um carrinho cheio junto à saída.", // nieuw, nalezen
    'c.shrink.q': "Posso ver a tua mala?", // nieuw, nalezen
    'c.shrink.a': "Sim, claro. Aqui está o meu talão.", // nieuw, nalezen
    'c.shrink': "As tuas compras: paga como um cliente", // nieuw, nalezen
    'c.shrink.b': "Uma loja perde muito com produtos partidos, produtos velhos e roubos. Ajuda a manter isso baixo. Um produto partido ou estragado? Não o voltes a pôr na prateleira: dá-lhe baixa como se faz na tua loja. As tuas próprias compras: paga na caixa como qualquer cliente, e guarda o talão. Em muitas lojas não podes registar as tuas próprias compras: é um colega que o faz. Nunca comas nem leves um produto sem pagar, nem sequer um pequeno. Algumas lojas revistam as malas: é uma regra da loja, não um sinal de desconfiança em ti. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.shrink.p': "Primeiro pago, e guardo o talão.", // nieuw, nalezen
    'c.shrink.s': "No fim do teu turno tens fome. Uma sandes passa hoje da data. O que fazes?", // nieuw, nalezen
    'c.shrink.o1': "Perguntas ao gerente qual é a regra.", // nieuw, nalezen
    'c.shrink.o2': "Comes a sandes: vai para o lixo de qualquer maneira.", // nieuw, nalezen
    'c.shrink.o3': "Levas a sandes para casa na tua mala.", // nieuw, nalezen
    'c.shrink.w': "Em muitas lojas, levar um produto sem pagar é roubar, mesmo quando é velho. Perguntar primeiro protege-te.", // nieuw, nalezen
    'l.shopclose': "Fechar a loja", // nieuw, nalezen
    'w.sluitingstijd': "a hora de fecho", // nieuw, nalezen
    'w.rolluik': "a persiana de enrolar (a grade de metal da loja)", // nieuw, nalezen
    'w.kasverschil': "a diferença de caixa (mais ou menos dinheiro na caixa do que devia haver)", // nieuw, nalezen
    'w.kluis': "o cofre (uma caixa forte para o dinheiro)", // nieuw, nalezen
    'w.overval': "o assalto (alguém leva dinheiro com ameaças)", // nieuw, nalezen
    'w.achterdeur': "a porta das traseiras", // nieuw, nalezen
    's.shopclose.1': "Fechamos daqui a dez minutos.", // nieuw, nalezen
    's.shopclose.2': "Contamos a caixa a dois.", // nieuw, nalezen
    's.shopclose.3': "A porta das traseiras está trancada?", // nieuw, nalezen
    'c.shopclose.q': "Posso entrar só um bocadinho?", // nieuw, nalezen
    'c.shopclose.a': "Desculpe, estamos fechados. Amanhã abrimos às oito.", // nieuw, nalezen
    'c.shopclose': "Um assalto: entrega, e fica em segurança", // nieuw, nalezen
    'c.shopclose.b': "À hora de fecho há muito dinheiro na caixa, por isso as lojas têm regras: contar a dois, levar o dinheiro para o cofre, e trancar primeiro a porta das traseiras. Um assalto (overval)? A tua vida vale mais do que o dinheiro. Mantém a calma, faz o que eles dizem, e não lutes nem corras atrás deles. Lembra-te do que puderes: roupa, altura, voz. Quando forem embora: tranca a porta, liga para o 112, e não toques em nada. Depois, fala sobre isso com o teu gerente ou com alguém em quem confias. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.shopclose.p': "Vamos fechar. Vou trancar a porta.", // nieuw, nalezen
    'c.shopclose.s': "Um homem com uma faca quer o dinheiro da tua caixa. O que fazes?", // nieuw, nalezen
    'c.shopclose.o1': "Manténs a calma, e dás-lhe o dinheiro.", // nieuw, nalezen
    'c.shopclose.o2': "Lutas com ele: o dinheiro não é dele.", // nieuw, nalezen
    'c.shopclose.o3': "Foges para as traseiras, e trancas-te.", // nieuw, nalezen
    'c.shopclose.w': "Lutar ou fugir deixa um assaltante nervoso e mais perigoso. O dinheiro pode ser substituído. Tu não.", // nieuw, nalezen
    'u.uitzend': "Trabalhar através de uma agência de trabalho temporário", // nieuw, nalezen
    'l.hirer': "A agência e a empresa utilizadora", // nieuw, nalezen
    'w.inlener': "a empresa utilizadora (a empresa para onde a agência te manda trabalhar)", // nieuw, nalezen
    'w.vestiging': "a filial (o escritório da agência na tua cidade)", // nieuw, nalezen
    'w.intakegesprek': "a entrevista de inscrição (a primeira conversa na agência)", // nieuw, nalezen
    'w.opstapplaats': "o ponto de recolha (onde a carrinha da agência te apanha)", // nieuw, nalezen
    'w.bedrijfsregels': "as regras da empresa (as regras da empresa utilizadora)", // nieuw, nalezen
    'w.aanspreekpunt': "a pessoa de contacto (a pessoa a quem vais com perguntas)", // nieuw, nalezen
    's.hirer.1': "Amanhã trabalhas numa nova empresa utilizadora.", // nieuw, nalezen
    's.hirer.2': "Quem é aqui a minha pessoa de contacto?", // nieuw, nalezen
    's.hirer.3': "A carrinha sai do ponto de recolha às seis.", // nieuw, nalezen
    'c.hirer.q': "Podes começar amanhã numa nova empresa utilizadora?", // nieuw, nalezen
    'c.hirer.a': "Sim. A que horas tenho de lá estar?", // nieuw, nalezen
    'c.hirer': "Duas empresas: quem faz o quê?", // nieuw, nalezen
    'c.hirer.b': "Trabalhas através de uma agência (uitzendbureau), mas fazes o trabalho noutra empresa: a empresa utilizadora (inlener). A agência é o teu empregador: o teu contrato, o teu salário, o teu recibo de vencimento e os teus dias de férias vêm da agência. A empresa utilizadora diz-te o que fazer no local de trabalho, e tem de garantir que trabalhas em segurança, tal como os seus próprios trabalhadores. Comunica que estás doente da forma que a tua agência diz: muitas vezes à agência e à empresa utilizadora. Guarda no telemóvel o nome e o número da tua pessoa de contacto na agência. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.hirer.p': "Quem é a minha pessoa de contacto na agência?", // nieuw, nalezen
    'c.hirer.s': "Na empresa utilizadora tens de trabalhar com uma máquina. Ninguém te mostrou como. O que fazes?", // nieuw, nalezen
    'c.hirer.o1': "Pedes à empresa utilizadora que te mostre primeiro.", // nieuw, nalezen
    'c.hirer.o2': "Experimentas: a agência é que é responsável.", // nieuw, nalezen
    'c.hirer.o3': "Vais para casa, e não dizes nada.", // nieuw, nalezen
    'c.hirer.w': "A empresa utilizadora tem de te mostrar como trabalhar em segurança, tal como aos seus próprios trabalhadores. Pedir isso é um direito teu.", // nieuw, nalezen
    'l.phases': "O teu contrato e as fases", // nieuw, nalezen
    'w.fase': "a fase (um passo no teu contrato com a agência: A, B ou C)", // nieuw, nalezen
    'w.uitzendbeding': "a cláusula de agência (o teu trabalho pode acabar quando a empresa utilizadora já não precisa de ti)", // nieuw, nalezen
    'w.aflopen': "acabar, chegar ao fim (um contrato)", // nieuw, nalezen
    'w.doorwerken': "continuar a trabalhar (no mesmo sítio)", // nieuw, nalezen
    'w.vastecontract': "o contrato sem termo (um contrato sem data de fim)", // nieuw, nalezen
    'w.onderbreking': "a interrupção (um tempo sem trabalho entre dois contratos)", // nieuw, nalezen
    's.phases.1': "Em que fase estou agora?", // nieuw, nalezen
    's.phases.2': "O meu contrato acaba na próxima semana.", // nieuw, nalezen
    's.phases.3': "Posso continuar a trabalhar aqui?", // nieuw, nalezen
    'c.phases.q': "A tua colocação acaba na sexta-feira.", // nieuw, nalezen
    'c.phases.a': "Está bem. Tem outro trabalho para mim?", // nieuw, nalezen
    'c.phases': "Fases A, B e C", // nieuw, nalezen
    'c.phases.b': "A maioria dos trabalhadores temporários trabalha com uma cao para trabalhadores temporários (uitzend-cao). Essa cao tem fases. Na fase A, normalmente o teu trabalho pode acabar quando a empresa utilizadora já não precisa de ti (uitzendbeding). Na fase B, recebes contratos a termo. Na fase C, recebes um contrato sem termo com a agência. Quanto tempo dura cada fase está na tua cao. Pergunta à agência em que fase estás, e guarda todos os teus contratos. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.phases.p': "Quanto tempo dura a fase A para mim?", // nieuw, nalezen
    'c.phases.s': "Trabalhaste muito tempo para a mesma agência. Continuas a receber contratos curtos. O que fazes?", // nieuw, nalezen
    'c.phases.o1': "Perguntas à agência em que fase estás.", // nieuw, nalezen
    'c.phases.o2': "Nada: o trabalho temporário é sempre curto.", // nieuw, nalezen
    'c.phases.o3': "Desistes, e procuras outra agência.", // nieuw, nalezen
    'c.phases.w': "Depois de tempo suficiente, a cao dá-te mais segurança. A agência pode dizer-te em que ponto estás, e o sindicato pode verificar isso contigo.", // nieuw, nalezen
    'l.deductions': "O salário e os descontos", // nieuw, nalezen
    'w.inhouding': "o desconto (dinheiro tirado do teu salário)", // nieuw, nalezen
    'w.vastekracht': "o trabalhador efetivo (um trabalhador contratado pela própria empresa utilizadora)", // nieuw, nalezen
    'w.vervoer': "o transporte (o autocarro ou a carrinha para o trabalho)", // nieuw, nalezen
    'w.schriftelijk': "por escrito (em papel ou num e-mail)", // nieuw, nalezen
    'w.navragen': "confirmar, perguntar (saber se uma coisa está certa)", // nieuw, nalezen
    'w.brutoloon': "o salário bruto (o teu salário antes dos impostos e dos descontos)", // nieuw, nalezen
    's.deductions.1': "O que é este desconto no meu recibo de vencimento?", // nieuw, nalezen
    's.deductions.2': "Ganho o mesmo que os trabalhadores efetivos?", // nieuw, nalezen
    's.deductions.3': "Primeiro quero ver isso em papel.", // nieuw, nalezen
    'c.deductions.q': "Descontamos do teu salário o custo da carrinha.", // nieuw, nalezen
    'c.deductions.a': "Isso é permitido? Primeiro vou confirmar.", // nieuw, nalezen
    'c.deductions': "O que pode ser descontado do teu salário?", // nieuw, nalezen
    'c.deductions.b': "Tens direito pelo menos ao mesmo salário que os trabalhadores da empresa utilizadora que fazem o mesmo trabalho. O dinheiro tirado do teu salário (inhouding) tem de estar no teu recibo de vencimento. Os impostos e as contribuições são descontados por lei. Além disso, a agência só pode descontar dois custos do salário mínimo: a renda da tua casa e o prémio do seguro de saúde, e só se concordaste por escrito. Outros custos, como transporte, roupa de trabalho, multas ou uma taxa por te arranjarem trabalho, não podem ser descontados do salário mínimo. Não percebes um desconto? Pede à agência que te explique por escrito. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.", // nieuw, nalezen
    'c.deductions.p': "Este desconto é de quê?", // nieuw, nalezen
    'c.deductions.s': "A agência tira dinheiro do teu salário pela carrinha para o trabalho. Ganhas o salário mínimo. O que fazes?", // nieuw, nalezen
    'c.deductions.o1': "Perguntas: isto não é permitido.", // nieuw, nalezen
    'c.deductions.o2': "Nada: vais de carrinha todos os dias.", // nieuw, nalezen
    'c.deductions.o3': "Deixas de ir de carrinha, e vais a pé.", // nieuw, nalezen
    'c.deductions.w': "Do salário mínimo só podem ser descontados a renda e o seguro de saúde, e só com o teu sim por escrito. O sindicato ou o Juridisch Loket podem ajudar-te.", // nieuw, nalezen
    'l.agencyhome': "A casa e a ajuda", // nieuw, nalezen
    'w.huisvesting': "o alojamento (um sítio para viver, arranjado pela agência)", // nieuw, nalezen
    'w.huisgenoot': "o colega de casa (uma pessoa que vive na mesma casa)", // nieuw, nalezen
    'w.huisregels': "as regras da casa (as regras da casa onde vives)", // nieuw, nalezen
    'w.huismeester': "o responsável pela casa (a pessoa que trata da casa)", // nieuw, nalezen
    'w.meldpunt': "o ponto de denúncia (um sítio onde podes comunicar um problema)", // nieuw, nalezen
    'w.advies': "o conselho", // nieuw, nalezen
    's.agencyhome.1': "Quero um contrato de arrendamento só meu.", // nieuw, nalezen
    's.agencyhome.2': "Há bolor na casa de banho.", // nieuw, nalezen
    's.agencyhome.3': "Vou ligar ao sindicato para pedir conselho.", // nieuw, nalezen
    'c.agencyhome.q': "Tens de sair da casa na sexta-feira.", // nieuw, nalezen
    'c.agencyhome.a': "Isso é muito pouco tempo. Primeiro vou pedir conselho.", // nieuw, nalezen
    'c.agencyhome': "A tua casa, e onde pedir ajuda", // nieuw, nalezen
    'c.agencyhome.b': "A agência arranja-te alojamento? Então recebes um contrato de arrendamento teu, por escrito, separado do teu contrato de trabalho. Guarda uma cópia. Lá diz quanto pagas, e como e quando o arrendamento acaba. O teu trabalho acaba? A tua casa nem sempre acaba no mesmo dia: pede conselho antes de saíres. Casa sem segurança ou muito cheia, ameaças, ou salário baixo demais? Procura ajuda: o sindicato, o Juridisch Loket (aconselhamento jurídico grátis), a FairWork, ou a Nederlandse Arbeidsinspectie, onde também podes denunciar sem dar o teu nome. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.", // nieuw, nalezen
    'c.agencyhome.p': "Pode dar-me uma cópia do meu contrato de arrendamento?", // nieuw, nalezen
    'c.agencyhome.s': "O teu trabalho acaba. O responsável pela casa diz que tens de sair da casa hoje. O que fazes?", // nieuw, nalezen
    'c.agencyhome.o1': "Perguntas primeiro ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.agencyhome.o2': "Sais hoje, e dormes em casa de um amigo.", // nieuw, nalezen
    'c.agencyhome.o3': "Fazes a mala, e dormes na rua.", // nieuw, nalezen
    'c.agencyhome.w': "O teu contrato de arrendamento tem as suas próprias regras, separadas do teu trabalho. Um conselho ajuda-te a saber quando tens mesmo de sair.", // nieuw, nalezen
  },
};

export default t;
