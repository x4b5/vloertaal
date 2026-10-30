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
    'w.feedback': 'o feedback',
    'w.uitleggen': 'explicar',
    'w.leren': 'aprender',
    'w.verbeteren': 'melhorar, corrigir',
    's.mistakes.1': 'Desculpa, cometi um erro.',
    's.mistakes.2': 'Podes explicar?',
    's.mistakes.3': { m: 'Obrigado pelo elogio!', f: 'Obrigada pelo elogio!', x: 'Obrigado / obrigada pelo elogio!' },
    'c.mistakes.q': 'Muito bem feito!',
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
    'u.leave': 'Férias e doença',
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
    's.transit.1': 'Faço o check-in com o meu cartão bancário.',
    's.transit.2': 'Não te esqueças de fazer o check-out.',
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
    's.ww.2': { m: 'Estou desempregado.', f: 'Estou desempregada.', x: 'Estou desempregado / desempregada.' },
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
    'u.care': 'Nos cuidados',
    'l.client': 'O cliente e os cuidados diários',
    'w.client': 'o cliente (a pessoa de quem cuidas)',
    'w.wassen': 'lavar',
    'w.aankleden': 'vestir(-se)',
    'w.eten': 'a comida',
    'w.rolstoel': 'a cadeira de rodas',
    'w.verpleegkundige': 'o enfermeiro / a enfermeira',
    's.client.1': 'Dormiu bem?',
    's.client.2': 'Eu ajudo a vestir-se.',
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
    'c.cv': 'Um CV curto ao estilo neerlandês',
    'c.cv.b': 'Um CV nos Países Baixos é curto: 1 ou 2 páginas. Escreve os teus contactos, a experiência de trabalho, a formação, as línguas e as competências. Não é preciso fotografia. Não tens de escrever a tua religião, a idade ou o estado civil. Diz a verdade sobre o que sabes fazer. Pede a alguém para verificar o teu neerlandês.',
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
    'c.interview.o1': 'Fazes uma pergunta sobre o horário ou a formação.', // nagelezen (2e lezing)
    'c.interview.o2': 'Dizes que não, porque fazer perguntas não é educado.',
    'c.interview.o3': 'Falas mais de ti, para mostrar que trabalhas bem.', // nagelezen (2e lezing)
    'c.interview.w': 'As perguntas mostram que tens interesse no emprego. Os empregadores nos Países Baixos costumam esperar perguntas.',
    'c.findwork': 'Pede o teu contrato em papel',
    'c.findwork.b': 'Pede sempre um contrato escrito e uma cópia para ti. Lê-o antes de assinar, ou pede ajuda a alguém em quem confias. Uma agência de trabalho temporário (uitzendbureau) não te pode pedir dinheiro para te arranjar trabalho. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.findwork.p': 'Posso ler primeiro o contrato?',
    'c.findwork.s': 'Um empregador novo diz: "Assina já aqui. Podes ler mais tarde." O que fazes?',
    'c.findwork.o1': 'Pedes tempo para o ler, ou uma cópia.', // nagelezen (2e lezing)
    'c.findwork.o2': 'Assinas depressa, para não perderes o emprego.',
    'c.findwork.o3': 'Assinas, e depois pedes uma cópia.', // nagelezen (2e lezing)
    'c.findwork.w': 'O teu contrato diz quanto ganhas e quais são os teus direitos. Um bom empregador dá-te tempo para o ler. Podes perguntar tudo o que não percebes.',
    'c.contract': 'Período experimental e trabalho à chamada',
    'c.contract.b': 'Um período experimental (proeftijd) tem de estar por escrito. Não é permitido num contrato de 6 meses ou menos. Num contrato mais longo, mas de menos de 2 anos, é no máximo 1 mês. Num contrato de 2 anos ou mais, ou num contrato efetivo, é no máximo 2 meses. És trabalhador à chamada (oproepkracht)? Normalmente, o teu empregador tem de te chamar pelo menos 4 dias antes. Se for mais tarde, não tens de ir. Uma cao pode encurtar estes 4 dias, mas nunca para menos de 1 dia. Se cancelarem o teu trabalho depois disso, recebes na mesma. Se te chamarem para menos de 3 horas de trabalho, normalmente recebes 3 horas. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nalezen: feit gelijk getrokken
    'c.contract.p': 'O período experimental está no meu contrato?',
    'c.contract.s': 'O teu contrato é de 3 meses. Diz: "Proeftijd: 1 maand". O que fazes?',
    'c.contract.o1': 'Perguntas: este período experimental não conta.', // nagelezen (2e lezing)
    'c.contract.o2': 'Nada. Todos os contratos têm período experimental.',
    'c.contract.o3': 'Assinas e nunca perguntas, porque o patrão é que sabe.',
    'c.contract.w': 'Um período experimental num contrato de 6 meses ou menos não conta. Perguntar com calma é normal. Se a resposta não for clara, pede conselho ao sindicato ou ao Juridisch Loket.',
    'c.agency': 'A tua agência é o teu empregador',
    'c.agency.b': 'Se trabalhas através de uma agência de trabalho temporário (uitzendbureau), o teu empregador é a agência, não a empresa onde trabalhas. O teu contrato e o teu salário vêm da agência, e há uma cao para trabalhadores temporários (uitzend-cao). Tens direito ao mesmo salário que os trabalhadores da empresa que fazem o mesmo trabalho. Também recebes subsídio de férias (vakantiegeld) e acumulas dias de férias. Faz a tua própria lista das horas que trabalhaste e confirma-as no recibo de vencimento. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.agency.p': 'O meu recibo de vencimento tem horas a menos.',
    'c.agency.s': 'O teu recibo de vencimento diz 32 horas, mas trabalhaste 38. O que fazes?',
    'c.agency.o1': 'Mostras a tua lista de horas à agência e pedes que corrijam.', // nagelezen (2e lezing)
    'c.agency.o2': 'Não dizes nada, porque são só 6 horas.',
    'c.agency.o3': 'Pedes ao chefe da empresa onde trabalhas que te pague as 6 horas.',
    'c.agency.w': 'Quem te paga é a agência, por isso é a agência que tem de corrigir o erro. A tua própria lista de datas e horas ajuda. Perguntar é um direito teu.',
    'c.bsn': 'O teu BSN: guarda-o bem',
    'c.bsn.b': 'Recebes um BSN (burgerservicenummer) quando te inscreves no município (gemeente). Só cá estás pouco tempo? Então inscreves-te num balcão RNI. Precisas do teu BSN para trabalhar, para os impostos, para o seguro de saúde e para uma conta bancária. O teu empregador precisa do teu documento de identificação e do teu BSN. Não dês o teu BSN nem uma cópia do teu documento a quem não precisa: pergunta porque precisam. Vais mudar de casa? Regista a nova morada na gemeente no prazo de 5 dias. O DigiD é o teu acesso aos sites do Estado: nunca o dês a outra pessoa. Vives ou trabalhas cá? Então normalmente tens de ter um seguro de saúde neerlandês (zorgverzekering). Trata disso depressa. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.bsn.p': 'Porque precisa do meu BSN?',
    'c.bsn.s': 'Uma pessoa que não conheces oferece-te um trabalho no WhatsApp. Pede uma foto do teu passaporte e os teus dados de acesso ao DigiD. O que fazes?',
    'c.bsn.o1': 'Nunca dás o acesso ao DigiD. Primeiro verificas quem ele é.', // nagelezen (2e lezing)
    'c.bsn.o2': 'Envias tudo depressa, para ficares com o trabalho.',
    'c.bsn.o3': 'Envias só a foto do passaporte, não o acesso ao DigiD.', // nagelezen (2e lezing)
    'c.bsn.w': 'Com o teu DigiD ou uma cópia do teu documento, outras pessoas podem usar o teu nome, por exemplo para empréstimos ou subsídios. Um empregador a sério precisa do teu documento e do BSN, mas nunca do teu acesso ao DigiD.',
    'c.housing': 'Casa através do empregador',
    'c.housing.b': 'O teu empregador ou a tua agência arranja-te casa? Então o contrato de arrendamento tem de estar separado do contrato de trabalho. Pede um contrato de arrendamento por escrito e um comprovativo do que pagas. A renda só pode ser descontada do teu salário se concordaste por escrito, e dentro dos limites da lei: confirma no recibo de vencimento. Uma caução (borg) é no máximo 2 meses de renda base. Recebes a caução de volta quando sais, menos os danos reais. Regista a tua morada na gemeente. Casa sem segurança, ameaças ou custos injustos? Comunica à gemeente (meldpunt) e pede conselho grátis ao Juridisch Loket ou a um serviço de apoio à habitação. Para um problema com o valor da renda ou os custos de serviços, existe a Huurcommissie. O teu trabalho acaba? Pede conselho antes de saíres de casa. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.housing.p': 'Pode dar-me um comprovativo de que paguei?',
    'c.housing.s': 'O teu trabalho acaba. A agência diz: "Tens de sair da casa amanhã." O que fazes?',
    'c.housing.o1': 'Primeiro pedes conselho ao Juridisch Loket.', // nagelezen (2e lezing)
    'c.housing.o2': 'Sais logo e esqueces a caução.',
    'c.housing.o3': 'Ficas, e deixas de responder à agência.',
    'c.housing.w': 'O teu contrato de arrendamento tem as suas próprias regras, separadas do teu trabalho. Um conselho grátis ajuda-te a conhecer os teus direitos, por exemplo sobre quando tens de sair e sobre a caução.',
    'c.payslip': 'Verifica o teu recibo de vencimento',
    'c.payslip.b': 'Bruto é o teu salário antes dos impostos. Líquido é o que recebes na tua conta bancária: o bruto menos os impostos e as contribuições (loonheffing). O teu empregador tem de te dar um recibo de vencimento (loonstrook). Verifica as horas e o salário em cada recibo, e aponta as horas que trabalhas. Tens dois empregos? Usa a dedução fiscal (loonheffingskorting) só num empregador. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.payslip.p': 'Trabalhei mais horas. Podes verificar?',
    'c.payslip.s': 'O teu recibo de vencimento tem menos horas do que as que trabalhaste. O que fazes?',
    'c.payslip.o1': 'Mostras as tuas notas e pedes ao teu chefe que verifique.', // nagelezen (2e lezing)
    'c.payslip.o2': 'Não dizes nada, porque não queres problemas.',
    'c.payslip.o3': 'Esperas um mês: no próximo recibo de vencimento já vai estar certo.', // nagelezen (2e lezing)
    'c.payslip.w': 'Há erros nos recibos de vencimento. Perguntar é normal e é um direito teu. As tuas notas de datas e horas ajudam muito.',
    'c.extra': 'Subsídio de férias e salário mínimo',
    'c.extra.b': 'Recebes subsídio de férias (vakantiegeld): pelo menos 8% do teu salário bruto. A maioria dos empregadores paga-o uma vez por ano, em maio ou junho. O teu salário nunca pode ser mais baixo do que o salário mínimo legal (minimumloon); para trabalhadores com menos de 21 anos é mais baixo. O valor muda todos os anos: vê em rijksoverheid.nl. Uma cao muitas vezes dá um pagamento extra por horas extra ou trabalho noturno. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.extra.p': 'Quando recebo o meu subsídio de férias?',
    'c.extra.s': 'Um colega diz: "Em maio recebes dinheiro extra do patrão." O que é?',
    'c.extra.o1': 'O subsídio de férias: pelo menos 8% do teu salário bruto.',
    'c.extra.o2': 'Um presente, só para os melhores trabalhadores.',
    'c.extra.o3': 'O 13.º mês: um salário de um mês a mais, para todos.', // nagelezen (2e lezing)
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
    'c.smoking.o1': 'Dizes que não, e fumas lá fora na zona de fumadores, na tua pausa.',
    'c.smoking.o2': 'Fumas depressa no armazém, só desta vez.',
    'c.smoking.o3': 'Usas o cigarro eletrónico lá dentro, porque isso é permitido.',
    'c.smoking.w': 'Fumar lá dentro é contra a lei e pode causar um incêndio. O cigarro eletrónico lá dentro também não é permitido. Cumprir a regra mantém toda a gente em segurança.',
    'c.clock': 'Pica tu o ponto',
    'c.clock.b': 'Pica tu o ponto à entrada e à saída, no momento em que começas e acabas mesmo de trabalhar. Nunca piques o ponto por um colega, e nunca deixes outra pessoa usar o teu cartão. Isso é fraude e pode levar ao despedimento. Vais chegar tarde? Liga antes de o teu turno começar. Confirma que as horas picadas batem certo com o recibo de vencimento. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.clock.p': 'Esqueci-me de picar o ponto à saída. Podes corrigir?',
    'c.clock.s': 'Um colega dá-te o cartão dele: "Pica o ponto por mim, chego 20 minutos atrasado." O que fazes?',
    'c.clock.o1': 'Dizes que não, e dizes-lhe para ligar ao chefe.', // nagelezen (2e lezing)
    'c.clock.o2': 'Fazes só desta vez, porque ele é teu amigo.',
    'c.clock.o3': 'Picas o ponto por ele e dizes ao chefe mais tarde.',
    'c.clock.w': 'Picar o ponto por outra pessoa é fraude, para os dois. Dizer que não protege o teu colega e o teu próprio emprego.',
    'c.hygiene': 'Cabeça limpa, mãos limpas',
    'c.hygiene.b': 'O álcool e as drogas no trabalho, ou vir trabalhar depois de os usar, são proibidos em quase todas as empresas. É muito perigoso perto de máquinas e empilhadores, e pode levar ao despedimento. Um medicamento dá-te sono ou tonturas? Avisa o teu chefe, para fazeres um trabalho seguro. Não tens de dizer que medicamento é. Na produção de alimentos, as regras de higiene são rigorosas: lava as mãos, usa roupa de trabalho limpa, rede no cabelo se for preciso, e nada de joias. Vómitos ou diarreia? Avisa antes de começar. Mantém o teu posto de trabalho arrumado. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.hygiene.p': 'Estou a tomar um medicamento. Dá-me sono.',
    'c.hygiene.s': 'O teu médico dá-te um medicamento que te dá sono. Amanhã tens de conduzir um empilhador. O que fazes?',
    'c.hygiene.o1': 'Avisas o teu chefe antes de começar, para fazeres um trabalho seguro.',
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
    'c.mistakes.o1': 'Dizes ao teu chefe e ajudas a corrigir.', // nagelezen (2e lezing)
    'c.mistakes.o2': 'Não dizes nada e esperas que ninguém repare.',
    'c.mistakes.o3': 'Dizes que foi um colega.',
    'c.mistakes.w': 'Um erro contado cedo é fácil de corrigir. Ser honesto cria confiança, e isso conta mais do que nunca errar.',
    'c.respect': 'Respeito por todos',
    'c.respect.b': 'No trabalho, todos são iguais e todos são tratados com respeito, seja qual for o seu género, origem, religião ou orientação sexual. Tu decides sobre o contacto físico. Um aperto de mão é comum, mas também podes cumprimentar de outra forma educada, como um aceno com a cabeça e um sorriso, e explicar em poucas palavras. Piadas sobre a origem ou a religião de alguém, ameaças, bullying (pesten) e comportamento sexual indesejado não são aceites. Podes comunicar isso ao teu chefe, ou a uma pessoa de confiança (vertrouwenspersoon) se a tua empresa tiver uma.',
    'c.respect.p': 'Prefiro não dar a mão, mas cumprimento-te com gosto.',
    'c.respect.s': 'Um colega faz muitas vezes piadas sobre a tua religião. Pediste-lhe para parar, mas ele continua. O que fazes?',
    'c.respect.o1': 'Dizes ao teu chefe ou à vertrouwenspersoon.',
    'c.respect.o2': 'Ris-te também, para não haver problemas.',
    'c.respect.o3': 'Fazes também piadas sobre a origem dele.',
    'c.respect.w': 'Piadas assim não são aceites no trabalho. Comunicar é normal: a empresa tem de manter o local de trabalho seguro para todos.',
    'c.health': 'Pausas e horário de trabalho',
    'c.health.b': 'A lei protege a tua saúde. Trabalhas mais de 5,5 horas? Então tens pelo menos 30 minutos de pausa (pode ser 2 vezes 15 minutos). Mais de 10 horas? Então pelo menos 45 minutos. Uma cao pode ter regras de pausas um pouco diferentes. Podes trabalhar no máximo 12 horas num turno e 60 horas numa semana. O teu empregador tem de te dar equipamento de proteção, como sapatos de segurança ou luvas, de graça. Trabalho perigoso ou salário baixo demais? Podes denunciar à Nederlandse Arbeidsinspectie, também sem dar o teu nome. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.health.p': 'Ainda não fiz pausa.',
    'c.health.s': 'Trabalhaste 6 horas sem pausa. O teu chefe pede-te para continuares. O que fazes?',
    'c.health.o1': 'Dizes que agora precisas da tua pausa.', // nagelezen (2e lezing)
    'c.health.o2': 'Continuas, e mais tarde fazes uma pausa mais longa.', // nagelezen (2e lezing)
    'c.health.o3': 'Sais do trabalho e vais para casa sem dizer nada.',
    'c.health.w': 'Quando trabalhas mais de 5,5 horas, a pausa é lei, não é um favor. O descanso também te ajuda a trabalhar em segurança.',
    'c.rights': 'Discriminação e despedimento',
    'c.rights.b': 'A discriminação no trabalho é proibida, por exemplo por causa da tua origem, religião ou género. O teu empregador não te pode simplesmente despedir: normalmente precisa de autorização do UWV ou de um juiz, ou do teu acordo. (No período experimental ou no fim de um contrato temporário, há outras regras.) Não assines um papel sobre o teu despedimento que não percebas. Assinaste um acordo para acabar o teu trabalho (vaststellingsovereenkomst)? Então normalmente ainda o podes anular por escrito no prazo de 14 dias. Pede primeiro ajuda ao sindicato (por exemplo a FNV), a um serviço contra a discriminação ou ao Juridisch Loket (aconselhamento jurídico grátis). Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.rights.p': 'Primeiro quero pedir conselho.',
    'c.rights.s': 'O teu patrão dá-te um papel: "Assina hoje, assim sais por acordo." Não percebes bem. O que fazes?',
    'c.rights.o1': 'Ainda não assinas. Pedes tempo e primeiro pedes conselho.',
    'c.rights.o2': 'Assinas, porque o patrão diz que está tudo bem.',
    'c.rights.o3': 'Guardas o papel e nunca falas disso.',
    'c.rights.w': 'Se assinares, podes perder direitos, por exemplo ao subsídio de desemprego (WW). Pedir tempo para pedir conselho é normal e permitido.',
    'c.leave': 'Férias e licença de emergência',
    'c.leave.b': 'Por lei tens dias de férias pagos: pelo menos 4 vezes os dias que trabalhas por semana. A tempo inteiro, 5 dias por semana? Então pelo menos 20 dias por ano. Uma cao pode dar mais. Pede as férias a tempo, e por escrito. Uma emergência repentina, como um acidente ou uma doença na tua família? Então podes ter uma licença curta paga (calamiteitenverlof). Avisa logo o teu empregador. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.leave.p': 'Gostava de pedir férias para julho.',
    'c.leave.s': 'No verão queres visitar a tua família no estrangeiro durante três semanas. O que fazes?',
    'c.leave.o1': 'Pedes as férias ao teu empregador com antecedência, por escrito.',
    'c.leave.o2': 'Vais simplesmente, e dizes ao patrão quando voltares.',
    'c.leave.o3': 'Pedes a um colega que diga ao patrão na véspera.',
    'c.leave.w': 'Normalmente, o teu empregador tem de dizer que sim. Só pode dizer que não por um motivo muito importante, e então por escrito dentro de 2 semanas. Pedir cedo dá a melhor hipótese de um sim.', // nagelezen (2e lezing)
    'c.illness': 'Os teus direitos quando estás doente',
    'c.illness.b': 'Quando estás doente, o teu empregador tem de pagar pelo menos 70% do teu salário, até 2 anos. Uma cao muitas vezes dá mais. Pode haver até 2 dias de espera (wachtdagen) sem pagamento, mas só se o teu contrato ou a cao o disserem. O teu patrão não pode perguntar que doença tens: falas da tua saúde e do teu trabalho com o médico da empresa (bedrijfsarts). Liga ao teu empregador quando estiveres melhor (betermelden). No primeiro ano recebes pelo menos o salário mínimo. Um contrato a termo acaba na data de fim, mesmo quando estás doente. Trabalhas através de uma agência? Se o teu contrato tiver uma cláusula de agência (uitzendbeding), pode acabar quando ficas doente. Então pergunta ao UWV sobre a Ziektewet, ou pergunta a um sindicato. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nalezen: feit gelijk getrokken
    'c.illness.p': 'Já estou melhor. Amanhã venho trabalhar.',
    'c.illness.s': 'Estás doente há uma semana. O teu empregador pede-te para ires ao médico da empresa. O que fazes?',
    'c.illness.o1': 'Vais, e falas com o médico sobre a tua saúde e o teu trabalho.',
    'c.illness.o2': 'Não vais, porque já tens o teu próprio médico.',
    'c.illness.o3': 'Voltas ao trabalho enquanto ainda estás doente, para não teres de ir.',
    'c.illness.w': 'O médico da empresa ajuda-te a voltar ao trabalho de forma saudável. O médico não conta os teus dados médicos ao patrão, só diz que trabalho podes fazer.',
    'c.warning': 'Sinais de exploração',
    'c.warning.b': 'Atenção a estes sinais. O teu empregador fica com o teu passaporte ou documento de identificação: isso não é permitido, és tu que guardas o teu documento e um empregador só pode fazer uma cópia. Recebes muito menos do que o combinado, ou não recebes recibo de vencimento. Tens de pagar uma grande dívida ao empregador ou à agência. Tens de trabalhar horas demais, sem escolha. Alguém te ameaça, ou usa a tua casa para te pressionar. Isto não é normal e não é permitido. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.warning.p': 'Quero o meu passaporte de volta.',
    'c.warning.s': 'No teu primeiro dia, a agência diz: "Ficamos com o teu passaporte, por segurança." O que fazes?',
    'c.warning.o1': 'Ficas tu com ele. Podem fazer uma cópia.', // nagelezen (2e lezing)
    'c.warning.o2': 'Dás o passaporte, porque a agência conhece as regras.',
    'c.warning.o3': 'Dás o passaporte, mas primeiro tiras-lhe uma fotografia.',
    'c.warning.w': 'O teu passaporte é teu. Ficar com ele é uma forma de controlar os trabalhadores. Um empregador só precisa de uma cópia para os arquivos.',
    'c.gethelp': 'Onde pedir ajuda',
    'c.gethelp.b': 'Vês sinais de exploração, contigo ou com outra pessoa? Pede ajuda. Podes denunciar à Nederlandse Arbeidsinspectie, também de forma anónima, ou à polícia. Meld Misdaad Anoniem: 0800-7000. Aconselhamento jurídico grátis: o Juridisch Loket. Em perigo? Liga para o 112. Todas as pessoas que trabalham nos Países Baixos podem ter ajuda, também os migrantes. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.gethelp.p': { m: 'Preciso de ajuda. Estou a ser explorado.', f: 'Preciso de ajuda. Estou a ser explorada.', x: 'Preciso de ajuda. Estou a ser explorado / explorada.' },
    'c.gethelp.s': 'Um amigo trabalha 14 horas por dia, quase não recebe nada e tem medo do patrão. O que podes fazer?',
    'c.gethelp.o1': 'Ajudá-lo a contactar a Arbeidsinspectie ou o Juridisch Loket, de forma anónima se ele quiser.',
    'c.gethelp.o2': 'Dizer-lhe que isto é normal para trabalhadores novos.',
    'c.gethelp.o3': 'Dizer-lhe para esperar até o contrato acabar e depois procurar outro trabalho.',
    'c.gethelp.w': 'Há ajuda para todas as pessoas que trabalham nos Países Baixos. Uma denúncia também pode ser feita sem nomes.',
    'c.callin': 'Ligar ao teu chefe',
    'c.callin.b': 'Quando ligas ao teu chefe, diz o teu nome, a razão e quando achas que voltas. Doente? Só tens de dizer que estás doente, não que doença tens. Liga: não mandes só uma mensagem, a não ser que a tua empresa diga que uma mensagem chega. Ninguém atende? Deixa uma mensagem de voz e tenta outra vez. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.callin.p': 'Olá, fala o Ali. Hoje não posso ir.',
    'c.callin.s': 'O teu filho está doente e não podes ir trabalhar. A tua empresa quer que ligues. O que fazes?',
    'c.callin.o1': 'Ligas ao teu chefe antes do turno.', // nagelezen (2e lezing)
    'c.callin.o2': 'Mandas uma mensagem curta quando o turno começa.',
    'c.callin.o3': 'Pedes ao teu vizinho para ligar por ti.',
    'c.callin.w': 'Uma chamada é clara e rápida, e o teu chefe pode fazer perguntas. Dizer quando achas que voltas ajuda-o a organizar o trabalho. Diz também o teu nome e a razão.', // nagelezen (2e lezing)
    'c.texting': 'Mensagens para o trabalho: curtas e educadas',
    'c.texting.b': 'As mensagens para o trabalho devem ser curtas e educadas. Diz quem és e o que se passa, e acaba com uma saudação. Por exemplo: "Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali". Vê muitas vezes o teu horário (rooster) na app. Responde a tempo aos pedidos de turnos. Para trocar um turno, o teu chefe ou quem faz o horário tem de concordar primeiro, por isso pergunta: "Mag ik mijn dienst ruilen?" As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.texting.p': 'Olá Mark, chego 10 minutos tarde. Desculpa! Cumprimentos, Ali',
    'c.texting.s': 'Vais chegar 10 minutos tarde. Que mensagem para o teu chefe é a melhor?',
    'c.texting.o1': '"Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali"',
    'c.texting.o2': '"Sorry, ik ben er zo!" (sem o teu nome, sem a hora).', // nagelezen (2e lezing)
    'c.texting.o3': 'Uma mensagem de voz de três minutos sobre o trânsito.',
    'c.texting.w': 'Uma boa mensagem diz quem és e o que se passa, em poucas palavras. Assim o teu chefe fica logo a saber.',
    'c.certs': 'Os certificados ajudam-te',
    'c.certs.b': 'Na construção, na indústria e no trabalho temporário precisas muitas vezes de um certificado VCA (segurança). Para conduzir um empilhador normalmente precisas de um certificado de empilhador (heftruckcertificaat). Pergunta ao teu empregador se paga o curso e o exame.',
    'c.certs.p': 'Posso fazer aqui um curso VCA?',
    'c.certs.s': 'Uma oferta de emprego pede um certificado VCA. Ainda não o tens. O que fazes?',
    'c.certs.o1': 'Pedes ao empregador ou à agência para te ajudar a tirá-lo.', // nagelezen (2e lezing)
    'c.certs.o2': 'Não te candidatas, porque nunca vais ficar com o emprego.',
    'c.certs.o3': 'Dizes que o tens, e esperas que ninguém verifique.',
    'c.certs.w': 'Muitos empregadores e agências ajudam com o VCA. Perguntar mostra que queres aprender.',
    'c.diploma': 'O teu diploma conta',
    'c.diploma.b': 'Tens um diploma de outro país? Podes pedir a avaliação dele no IDW (Internationale Diplomawaardering). Assim os empregadores podem ver quanto vale aqui. Uma formação é obrigatória para o teu trabalho? Então o teu empregador tem de a pagar, e conta como tempo de trabalho. Pergunta ao teu chefe sobre cursos. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.diploma.p': 'Há cursos para mim?',
    'c.diploma.s': 'O teu empregador diz que tens de fazer uma formação de segurança obrigatória no sábado, sem pagamento. O que é verdade?',
    'c.diploma.o1': 'O empregador paga, e é tempo de trabalho.', // nagelezen (2e lezing)
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
    'c.insurance.o1': 'Tratas depressa do seguro de saúde.', // nagelezen (2e lezing)
    'c.insurance.o2': 'Esperas: o seguro do teu país chega.', // nagelezen (2e lezing)
    'c.insurance.o3': 'Usas o cartão do seguro de um amigo.',
    'c.insurance.w': 'Sem seguro, um médico ou um hospital pode custar muito dinheiro, e podes levar uma multa. Tratar disso depressa protege-te. O teu empregador ou a agência pode ajudar-te.', // nagelezen (2e lezing)
    'c.letters': 'Não ignores as cartas',
    'c.letters.b': 'Não ignores as cartas do Belastingdienst, da gemeente ou do UWV. Pede a alguém em quem confias para te ajudar a lê-las. A declaração de impostos (aangifte) do ano passado normalmente tem de ser feita antes de 1 de maio. Podes pedir mais tempo. Os subsídios (toeslagen), como o zorgtoeslag e o huurtoeslag, dependem do teu rendimento. Se recebes demais, tens de devolver, por isso mantém os dados do teu rendimento atualizados. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.letters.p': 'Recebi uma carta. Podes ajudar-me?',
    'c.letters.s': 'Recebes uma carta do Belastingdienst. Não a percebes. O que fazes?',
    'c.letters.o1': 'Pedes ajuda a alguém em quem confias.', // nagelezen (2e lezing)
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
    'c.transit.o3': 'Dizes ao teu chefe: a lei diz que também tens de o receber.', // nagelezen (2e lezing)
    'c.transit.w': 'O subsídio de transporte depende do empregador ou da cao. Perguntar é normal e ajuda-te a conhecer os teus direitos.',
    'c.ww': 'Subsídio de desemprego (WW)',
    'c.ww.b': 'Perdeste o emprego? Pede o WW no UWV o mais depressa possível, no prazo de uma semana a contar do teu primeiro dia sem trabalho. Normalmente tens de ter trabalhado pelo menos 26 das últimas 36 semanas. Se te despedires tu, normalmente não recebes WW. Inscreve-te como pessoa à procura de emprego em werk.nl. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.ww.p': 'Quero pedir o subsídio de desemprego. O que tenho de fazer?',
    'c.ww.s': 'O teu trabalho irrita-te e queres despedir-te hoje. O que é sensato?',
    'c.ww.o1': 'Pedes conselho primeiro, antes de te despedires.', // nagelezen (2e lezing)
    'c.ww.o2': 'Despedes-te hoje: vais receber WW na mesma.',
    'c.ww.o3': 'Deixas de ir trabalhar sem dizer nada.',
    'c.ww.w': 'Despedires-te pode fazer-te perder o subsídio. Falar primeiro com o teu chefe, o sindicato ou o Juridisch Loket pode ajudar-te a encontrar um caminho melhor.',
    'c.newjob': 'Procurar um novo trabalho',
    'c.newjob.b': 'Antes de saíres, pede uma referência (referentie). Guarda os teus recibos de vencimento e o teu contrato. Atualiza o teu CV. Procura trabalho em agências de trabalho temporário (uitzendbureaus) e em werk.nl. Nunca pagues para ter um emprego. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
    'c.newjob.p': 'Posso dar o seu nome como referência?',
    'c.newjob.s': 'Alguém te oferece um emprego, mas primeiro tens de pagar 300 euros "pelo emprego". O que fazes?',
    'c.newjob.o1': 'Não pagas. Procuras uma agência a sério.', // nagelezen (2e lezing)
    'c.newjob.o2': 'Pagas, porque um bom emprego vale a pena.',
    'c.newjob.o3': 'Pagas metade agora e o resto mais tarde.',
    'c.newjob.w': 'Pedir dinheiro por um emprego é um sinal de alarme. Uma agência de trabalho temporário não te pode cobrar por te arranjar trabalho. Também podes procurar trabalho no werk.nl.', // nagelezen (2e lezing)
    'c.tools': 'A reunião toolbox',
    'c.tools.b': 'Em muitas obras há regularmente uma reunião curta sobre segurança: a reunião toolbox. Ouves falar dos riscos e das regras novas. Vai, ouve e faz perguntas se não perceberes. Verifica as tuas ferramentas antes de as usares. Uma ferramenta está estragada? Diz ao teu chefe.',
    'c.tools.p': 'Este berbequim está estragado. Há outro?',
    'c.tools.s': 'Há uma reunião toolbox, mas o teu neerlandês ainda não é bom. O que fazes?',
    'c.tools.o1': 'Vais, e depois perguntas a um colega o que te escapou.', // nagelezen (2e lezing)
    'c.tools.o2': 'Não vais, porque de qualquer forma não vais perceber.',
    'c.tools.o3': 'Assinas a lista de presenças sem ir.',
    'c.tools.w': 'A informação de segurança é para todos. Uma app de tradução pode ajudar-te a acompanhar a reunião, se lá forem permitidos telemóveis. Perguntar depois a um colega é normal e confirma que percebeste bem.',
    'c.site': 'Para e verifica: LMRA',
    'c.site.b': 'Antes de começares uma tarefa, para um momento e verifica: o que pode correr mal aqui? Isto é a LMRA (análise de riscos de última hora). Usa sempre o capacete, e proteção contra quedas quando trabalhas em altura. Nunca fiques debaixo de uma carga suspensa. O trabalho é mesmo perigoso? Então podes parar, e tens de avisar logo o teu chefe. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.site.p': 'Ainda não começo. Isto não é seguro.',
    'c.site.s': 'Tens de trabalhar num andaime, mas falta um corrimão de proteção. Um colega diz: "Tem só cuidado." O que fazes?',
    'c.site.o1': 'Não começas. Primeiro comunicas ao teu chefe.',
    'c.site.o2': 'Começas, mas com muito cuidado.',
    'c.site.o3': 'Arranjas tu o corrimão com uma corda.',
    'c.site.w': 'Uma queda de uma altura pode causar ferimentos muito graves. Podes parar um trabalho perigoso, e comunicá-lo protege toda a equipa.',
    'c.line': 'Mãos longe das máquinas a trabalhar',
    'c.line.b': 'Nunca metas a mão numa máquina a trabalhar, nem por um segundo. Numa avaria (storing): carrega na paragem de emergência (noodstop) e chama o teu chefe. A manutenção e as reparações só se fazem com a máquina bloqueada (lock-out), e só por pessoas com formação. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.line.p': 'Há uma avaria. Carreguei na paragem de emergência.',
    'c.line.s': 'Um produto ficou preso na máquina. A máquina ainda está a trabalhar. O que fazes?',
    'c.line.o1': 'Carregas na paragem de emergência e chamas o teu chefe.',
    'c.line.o2': 'Tiras o produto depressa com a mão.',
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
    'c.client.o1': 'Bates, esperas, e dizes quem és e porque vens.', // nagelezen (2e lezing)
    'c.client.o2': 'Entras depressa, porque tens muito trabalho.',
    'c.client.o3': 'Não fazes a higiene, para não a incomodares.',
    'c.client.w': 'O quarto é a casa do cliente. Bater à porta e explicar mostra respeito e torna os cuidados mais calmos.',
    'c.privacy': 'Privacidade, higiene e medicamentos',
    'c.privacy.b': 'O que vês e ouves sobre os clientes fica no trabalho. Não fales dos clientes fora do trabalho, e nunca publiques fotografias deles. Limpa as mãos antes e depois dos cuidados. Notas uma mudança num cliente, como dor ou uma queda? Diz logo à enfermeira. Nunca dês medicamentos, a não ser que tenhas formação e autorização para isso. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.privacy.p': 'O senhor tem mais dores do que ontem.',
    'c.privacy.s': 'Uma cliente pede-te os comprimidos dela. Não tens formação para dar medicamentos. O que fazes?',
    'c.privacy.o1': 'Dizes com simpatia que vais chamar a enfermeira, e fazes isso logo.',
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
    'c.cleaning.o1': 'Perguntas como o usar com segurança.', // nagelezen (2e lezing)
    'c.cleaning.o2': 'Usas muito, assim funciona melhor.',
    'c.cleaning.o3': 'Experimentas sem luvas.',
    'c.cleaning.w': 'O produto errado, ou demasiado produto, pode fazer mal à pele, aos olhos ou aos pulmões. Perguntar demora um minuto.',
    'c.cleansafe': 'Nunca mistures produtos',
    'c.cleansafe.b': 'Nunca mistures produtos de limpeza, por exemplo lixívia e um produto para a sanita. Isso pode libertar gases perigosos. Deixa entrar ar fresco. Vais lavar o chão com a esfregona? Põe a placa de chão molhado (Pas op, glad!), para ninguém escorregar. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.cleansafe.p': 'Vou pôr a placa. O chão está molhado.',
    'c.cleansafe.s': 'A casa de banho está muito suja. Uma colega diz: "Mistura dois produtos, assim funciona melhor." O que fazes?',
    'c.cleansafe.o1': 'Não os misturas. Usas um produto.', // nagelezen (2e lezing)
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
    'c.translate.b': 'Uma app de tradução, como o Google Tradutor, ajuda muito. Podes escrever, falar ou usar o modo de conversa para falar com um colega. Com a câmara podes traduzir placas, papéis e instruções. Em muitos telemóveis, o WhatsApp também consegue traduzir mensagens. Usa o telemóvel só onde é seguro e permitido: não perto de máquinas ou empilhadores, e pergunta primeiro (mais na lição "O teu telemóvel no trabalho"). As apps cometem erros. Para coisas importantes, como o teu contrato, uma carta ou uma instrução de segurança, pede também a uma pessoa que te explique. Não tires fotografias de papéis confidenciais do trabalho sem autorização.',
    'c.translate.p': 'Posso usar o meu telemóvel para traduzir?',
    'c.translate.s': 'O teu chefe dá-te um papel com instruções de segurança em neerlandês. Só percebes algumas palavras. O que fazes?',
    'c.translate.o1': 'Perguntas se podes usar uma app de tradução, e pedes uma explicação.', // nagelezen (2e lezing)
    'c.translate.o2': 'Dizes "ja, ja" e começas a trabalhar. Mais tarde vais perceber.',
    'c.translate.o3': 'Tiras uma fotografia e envias para um grupo de amigos, para eles traduzirem.',
    'c.translate.w': 'Uma app de tradução ajuda-te a perceber depressa, mas pode errar. Para a segurança, a explicação de uma pessoa é a melhor verificação. Os papéis do trabalho podem ser confidenciais, por isso não os partilhes sem autorização.',
    'c.understood': 'Confirma que percebeste',
    'c.understood.b': 'O teu telemóvel pode transformar a fala em texto (legendas em direto): Live Transcribe no Android, Legendas ao Vivo no iPhone. Vê que línguas o teu telemóvel aceita. Também podes pedir a alguém para escrever, para mostrar ou para falar devagar. Pergunta se há uma instrução com imagens, ou na tua língua. Depois repete o que percebeste: "Dus ik moet eerst …?" Isto é normal aqui, e evita erros.',
    'c.understood.p': 'Então primeiro tenho de contar as caixas?',
    'c.understood.s': 'Uma colega explica como funciona uma máquina nova. Ela fala depressa e perdes algumas palavras. O que fazes?',
    'c.understood.o1': 'Pedes-lhe para mostrar ou escrever, e depois repetes.', // nagelezen (2e lezing)
    'c.understood.o2': 'Acenas com a cabeça e dizes "ja, ja", para ela não perder tempo.',
    'c.understood.o3': 'Mais tarde experimentas a máquina sem ajuda e vês o que acontece.',
    'c.understood.w': 'Mostrar, escrever e repetir são verificações rápidas. A tua colega pode corrigir-te antes de alguma coisa correr mal. Aqui, isto é visto como cuidado, não como lentidão.',
    'c.keeplearning': 'Continua a aprender, um pouco todos os dias',
    'c.keeplearning.b': 'Alguns minutos todos os dias ajudam mais do que uma hora longa por semana. Guarda as palavras novas do trabalho numa app de notas no telemóvel. Ouve neerlandês fácil, por exemplo o NOS Jeugdjournaal (notícias para crianças) ou um podcast em neerlandês lento. Muitas bibliotecas públicas têm um Taalhuis: ajuda grátis com o neerlandês, muitas vezes com um taalcafé (um sítio para praticar a falar) ou um colega de língua (taalmaatje). Os colegas muitas vezes mudam para inglês para te ajudar. Pede-lhes com simpatia para falarem neerlandês contigo: a maioria das pessoas gosta de ajudar.',
    'c.keeplearning.p': 'Fala comigo em neerlandês, assim aprendo mais depressa.',
    'c.keeplearning.s': 'Os teus colegas mudam sempre para inglês quando falam contigo. Queres aprender neerlandês. O que fazes?',
    'c.keeplearning.o1': 'Agradeces e pedes-lhes para falarem neerlandês contigo.', // nagelezen (2e lezing)
    'c.keeplearning.o2': 'Não dizes nada. O neerlandês vem sozinho.',
    'c.keeplearning.o3': 'Também respondes em inglês, porque é mais educado.', // nagelezen (2e lezing)
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
    's.boundaries.1': 'Não me toque, por favor.',
    's.boundaries.2': 'Não acho piada a esse comentário.',
    's.boundaries.3': 'Quero comunicar uma coisa à pessoa de confiança.',
    'c.boundaries.q': { m: 'Não sejas tão complicado, era só uma piada.', f: 'Não sejas tão complicada, era só uma piada.', x: 'Não compliques tanto, era só uma piada.' }, // x: nieuw, nalezen
    'c.boundaries.a': 'Para mim não. Quero que pares.',
    'c.gossip': 'Mexericos e redes sociais',
    'c.gossip.b': 'Falar de um colega pelas costas (roddelen) estraga a confiança numa equipa. Tens um problema com alguém? Fala com essa pessoa, ou com o teu chefe. Na internet valem as mesmas regras que no trabalho: não publiques fotografias, vídeos ou mensagens sobre colegas, clientes ou a empresa sem autorização. O teu patrão pode ver o que publicas, e isso pode ficar online durante anos. Muitas equipas têm um grupo de mensagens (groepsapp) para o trabalho: fala só de trabalho, e não partilhes capturas de ecrã do grupo com outras pessoas. Partilhar coisas privadas de um colega ou gozar com alguém na internet também é bullying.',
    'c.gossip.p': 'Não quero isso na internet.',
    'c.gossip.s': 'Um colega filma-te quando escorregas no chão molhado. Ele quer pôr o vídeo no TikTok. O que fazes?',
    'c.gossip.o1': 'Dizes "Nee, dat wil ik niet" e pedes-lhe para apagar.', // nagelezen (2e lezing)
    'c.gossip.o2': 'Ris-te e deixas que ele publique, para não criares problemas.',
    'c.gossip.o3': 'Pedes-lhe para o publicar sem o teu nome.', // nagelezen (2e lezing)
    'c.gossip.w': 'Ninguém pode pôr um vídeo teu na internet sem a tua autorização. Dizer que não é normal, e o teu empregador tem de agir quando os colegas gozam uns com os outros na internet. Se ele publicar na mesma, diz ao teu chefe.', // nagelezen (2e lezing)
    'c.boundaries': 'Passar dos limites',
    'c.boundaries.b': 'Grensoverschrijdend gedrag é um comportamento que passa os limites de alguém: toques indesejados, comentários ou piadas sexuais, olhares insistentes, enviar imagens indesejadas, ameaças ou gritos. Não importa se a outra pessoa "estava a brincar": o que conta é como tu te sentes. Se puderes, diz com clareza que queres que pare. Escreve o que aconteceu, quando e quem viu. Diz ao teu chefe, à pessoa de confiança (vertrouwenspersoon, se houver) ou aos recursos humanos. O teu empregador tem de te proteger, e ninguém te pode castigar por comunicares. Viste isto acontecer a um colega? Pergunta se está bem, e oferece-te para ser testemunha.',
    'c.boundaries.p': 'Quero que pares.',
    'c.boundaries.s': { m: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás "bonito". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?', f: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás "bonita". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?', x: 'O teu chefe de equipa põe muitas vezes a mão nas tuas costas e diz que estás com "bom aspeto". Isso deixa-te desconfortável. É ele que decide os teus turnos. O que fazes?' }, // x: nieuw, nalezen
    'c.boundaries.o1': 'Escreves o que acontece e contas à vertrouwenspersoon.', // nagelezen (2e lezing)
    'c.boundaries.o2': 'Não dizes nada, porque é ele que decide os teus turnos.',
    'c.boundaries.o3': 'Despedes-te sem dizer a ninguém porquê.',
    'c.boundaries.w': 'Isto é um comportamento indesejado, e a culpa não é tua. Uma pessoa de confiança ouve-te em confidência e ajuda-te a escolher o passo seguinte. A lei protege-te quando comunicas. Também podes falar com os recursos humanos.', // nagelezen (2e lezing)
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
    'c.shelves.s': 'Estás a pôr leite novo na prateleira. À frente ainda há leite com uma data mais próxima. O que fazes?',
    'c.shelves.o1': 'Pões o leite novo atrás, e o leite antigo à frente.',
    'c.shelves.o2': 'Pões o leite novo à frente, porque é mais fresco.',
    'c.shelves.o3': 'Deitas fora o leite antigo, para a prateleira ficar bonita.',
    'c.shelves.w': 'Os clientes tiram da frente. Quando os produtos mais antigos saem primeiro, deita-se fora menos comida.',
    'c.checkout': 'Identificação para álcool e tabaco',
    'c.checkout.b': 'Não podes vender álcool nem tabaco a menores de 18 anos: é a lei. Não tens a certeza da idade de um cliente? Pede a identificação. Muitas lojas pedem identificação a todas as pessoas que parecem ter menos de 25 anos. Sem identificação, ou menor de 18? Então não vendes, e manténs a educação. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.checkout.p': 'Sem identificação não posso vender isto.',
    'c.checkout.s': 'Um rapaz quer comprar cerveja. Parece ter uns 17 anos. Diz que tem 19, mas não tem identificação com ele. O que fazes?',
    'c.checkout.o1': 'Dizes que não podes vender sem identificação.', // nagelezen (2e lezing)
    'c.checkout.o2': 'Vendes, porque ele diz que tem 19.',
    'c.checkout.o3': 'Vendes, mas só uma lata.',
    'c.checkout.w': 'Sem identificação não podes saber a idade dele. Vender álcool a um menor de 18 é contra a lei, e a loja pode levar uma multa.',
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
    'c.aihelp.b': 'As apps de IA e os chatbots, como o ChatGPT, conseguem traduzir, explicar uma carta ou ajudar-te a escrever uma mensagem. Isso é útil. Mas a IA às vezes erra, e mesmo assim parece muito segura. Para coisas importantes, como o teu contrato, o teu salário, medicamentos ou segurança, verifica sempre a resposta com uma pessoa: o teu chefe, os recursos humanos ou o Juridisch Loket.',
    'c.aihelp.p': 'Isto está certo? Pode ver isto comigo?',
    'c.aihelp.s': 'Perguntas a um chatbot sobre o teu contrato. Ele diz que não recebes subsídio de férias. O que fazes?',
    'c.aihelp.o1': 'Pedes aos recursos humanos ou ao Juridisch Loket para verificarem.', // nalezen: korter goed antwoord
    'c.aihelp.o2': 'Acreditas: o chatbot parece ter muita certeza.',
    'c.aihelp.o3': 'Não dizes nada e esqueces o assunto.',
    'c.aihelp.w': 'Um chatbot pode enganar-se sobre regras e contratos. Nos Países Baixos quase todos os trabalhadores recebem subsídio de férias. Uma pessoa que conhece as regras pode verificar.',
    'c.aiprivate': 'Pensa antes de escrever',
    'c.aiprivate.b': 'O que escreves num chatbot pode ser guardado e usado pela empresa que o faz. Por isso nunca escrevas o teu BSN, uma palavra-passe ou os teus dados bancários. Não ponhas nomes ou fotografias de clientes, doentes ou colegas, nem papéis do trabalho. Muitos empregadores têm regras sobre a IA. Pergunta primeiro se a podes usar no teu trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.',
    'c.aiprivate.p': 'Posso usar IA para isto?',
    'c.aiprivate.s': 'Queres que um chatbot escreva um relatório sobre um cliente. O relatório tem o nome e a morada do cliente. O que fazes?',
    'c.aiprivate.o1': 'Primeiro perguntas, e deixas de fora o nome e a morada.', // nagelezen (2e lezing)
    'c.aiprivate.o2': 'Pões tudo no chatbot: é mais rápido.',
    'c.aiprivate.o3': 'Envias o relatório a um amigo para ele verificar.',
    'c.aiprivate.w': 'Os nomes e as moradas são dados pessoais. Não podem simplesmente ir para outra empresa. O teu empregador sabe que apps são permitidas.',
    'c.aifake': 'Vozes e vídeos falsos',
    'c.aifake.b': 'Com a IA, os criminosos conseguem copiar uma voz e fazer fotografias e vídeos falsos. Uma chamada ou mensagem que parece do teu patrão, do teu banco ou de alguém da tua família pode ser falsa. Cuidado quando há pressa, dinheiro e um número novo. Desliga, e liga tu de volta para o número que conheces. Um banco, um empregador ou a polícia a sério nunca te pedem os teus códigos.',
    'c.aifake.p': 'Desligo e sou eu que ligo de volta.',
    'c.aifake.s': 'O teu telemóvel toca. Uma voz igualzinha à do teu patrão diz: "Paga já esta fatura, é urgente." O que fazes?',
    'c.aifake.o1': 'Desligas e ligas tu ao teu patrão.', // nagelezen (2e lezing)
    'c.aifake.o2': 'Pagas depressa: é o teu patrão.',
    'c.aifake.o3': 'Dás o teu código do banco, para o teu patrão poder pagar.',
    'c.aifake.w': 'Uma voz pode ser copiada com IA. Pressa e dinheiro juntos são um sinal de alarme. Ligar de volta para um número que conheces é uma verificação rápida e segura.',
    'c.aiplan': 'Quem decidiu isto?',
    'c.aiplan.b': 'Cada vez mais empresas deixam uma app ou um computador fazer o horário, medir o teu ritmo com o leitor, ou decidir coisas. Podes perguntar que informação sobre ti é recolhida. Há uma decisão grande sobre ti, como menos horas, um aviso ou um despedimento? Pergunta quem decidiu. Quando um computador tomou uma decisão assim sozinho, podes pedir que uma pessoa a veja outra vez e a explique. Aponta as tuas próprias horas. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.aiplan.p': 'Uma pessoa pode ver isto?',
    'c.aiplan.s': 'A app do horário dá-te muito menos horas no próximo mês. Ninguém te diz porquê. O que fazes?',
    'c.aiplan.o1': 'Pedes que uma pessoa te explique.', // nagelezen (2e lezing)
    'c.aiplan.o2': 'Aceitas: a app tem sempre razão.',
    'c.aiplan.o3': 'Perguntas ao chatbot da app porquê.', // nagelezen (2e lezing)
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
    'c.harvest': "Ritmo e pagamento à peça", // nagelezen (2e lezing)
    'c.harvest.b': "Numa estufa trabalhas muitas vezes a um ritmo fixo (tempo). Alguns empregadores pagam por caixa, por fila ou por quilo: é o pagamento à peça (stukloon). Mesmo com pagamento à peça, tens de ganhar pelo menos o salário mínimo por cada hora que trabalhas. Vê o valor em rijksoverheid.nl. Aponta todos os dias as tuas horas e as tuas caixas, e compara-as com o teu recibo de vencimento. Trabalhar depressa é bom, mas trabalhar em segurança vem primeiro. Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.", // nagelezen (2e lezing)
    'c.harvest.p': "Quantas caixas fiz hoje?", // nagelezen (2e lezing)
    'c.harvest.s': "Pagam-te por caixa. No fim da semana, o teu salário é muito mais baixo do que o salário mínimo pelas horas que trabalhaste. O que fazes?", // nagelezen (2e lezing)
    'c.harvest.o1': "Mostras ao teu empregador a tua lista de horas e caixas.", // nagelezen (2e lezing)
    'c.harvest.o2': "Não dizes nada e na próxima semana trabalhas mais depressa, para ganhares mais.", // nagelezen (2e lezing)
    'c.harvest.o3': "Aceitas: com pagamento à peça, um salário baixo é normal.", // nagelezen (2e lezing)
    'c.harvest.w': "Com pagamento à peça, tens na mesma de receber pelo menos o salário mínimo por cada hora que trabalhaste. A tua lista de horas e caixas ajuda-te a mostrar o que fizeste. Se não for corrigido, pede ajuda.", // nagelezen (2e lezing)
    'c.greensafe': "Calor e produtos fitofarmacêuticos", // nagelezen (2e lezing)
    'c.greensafe.b': "Numa estufa pode estar muito calor, mesmo na primavera. Bebe água muitas vezes, mesmo antes de teres sede, e faz as tuas pausas num sítio fresco. Tens tonturas, náuseas ou dores de cabeça? Para e diz a alguém. Às vezes as plantas são pulverizadas com químicos (spuitmiddelen). Uma estufa que acabou de ser pulverizada tem muitas vezes um aviso na porta. Não entres até o teu chefe dizer que já é seguro outra vez. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nagelezen (2e lezing)
    'c.greensafe.p': "Já posso trabalhar nesta estufa?", // nagelezen (2e lezing)
    'c.greensafe.s': "Uma estufa foi pulverizada hoje de manhã. Há um aviso na porta. Um colega diz: \"Anda, é só um bocadinho.\" O que fazes?", // nagelezen (2e lezing)
    'c.greensafe.o1': "Ficas cá fora e perguntas quando é seguro.", // nagelezen (2e lezing)
    'c.greensafe.o2': "Entras depressa e susténs a respiração.", // nagelezen (2e lezing)
    'c.greensafe.o3': "Entras, e depois lavas bem as mãos.", // nagelezen (2e lezing)
    'c.greensafe.w': "Os produtos fitofarmacêuticos podem fazer mal à tua pele, aos teus olhos e aos teus pulmões, mesmo quando não cheiras nada. Depois da pulverização há um tempo de espera antes de se poder entrar outra vez. O teu chefe sabe quando acaba.", // nagelezen (2e lezing)
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
    'l.permit': "Papéis, integração e o teu trabalho",
    'w.papieren': "os papéis (os documentos)",
    'w.werkvergunning': "a autorização de trabalho",
    'w.werknemer': "o trabalhador por conta de outrem (trabalhas para um empregador)",
    'w.zzper': "o trabalhador independente (trabalhas por conta própria)",
    'w.inburgering': "a integração cívica (o curso e os exames para recém-chegados)",
    'w.taalles': "a aula de língua",
    's.permit.1': "Posso trabalhar aqui com os meus papéis?",
    's.permit.2': "Trabalho por conta de outrem ou por conta própria?",
    's.permit.3': "Trabalho à chamada.",
    'c.permit.q': "Podes trabalhar na terça-feira?",
    'c.permit.a': "Não, nesse dia tenho aula de língua. Na quarta posso.",
    'l.kids': "Filhos e trabalho",
    'w.zwanger': "grávida",
    'w.kinderopvang': "a creche, o infantário",
    'w.ophalen': "ir buscar (alguém)",
    'w.ziekkind': "uma criança doente",
    'w.ouderschapsverlof': "a licença parental",
    'w.zorgverlof': "a licença para cuidar (tempo livre para cuidar de um familiar doente)",
    's.kids.1': "O meu filho está doente. Tenho de o ir buscar.",
    's.kids.2': "Posso tirar uma licença de emergência?",
    's.kids.3': "O meu empregador continua a pagar o meu salário?",
    'c.kids.q': "Porque é que tens de ir embora agora?",
    'c.kids.a': "A creche ligou. O meu filho tem febre.",
    'l.body': "O corpo e a dor",
    'w.hoofd': "a cabeça",
    'w.rug': "as costas",
    'w.arm': "o braço",
    'w.hand': "a mão",
    'w.buik': "a barriga",
    'w.oog': "o olho",
    's.body.1': "Tenho dores na mão.",
    's.body.2': "Não me sinto bem.",
    's.body.3': "Caí em cima do braço.",
    'c.body.q': "Onde é que dói?",
    'c.body.a': "Nas costas. Levantei uma caixa pesada.",
    'l.jobends': "Quando o teu trabalho acaba",
    'w.eindafrekening': "o acerto final de contas (o teu último pagamento quando um trabalho acaba)",
    'w.opzeggen': "rescindir (um contrato), cancelar",
    'w.uitschrijven': "cancelar a inscrição (tirar o teu nome de uma lista)",
    'w.sleutel': "a chave",
    'w.verhuizen': "mudar de casa",
    'w.busje': "a carrinha (um autocarro pequeno)",
    's.jobends.1': "Recebo o subsídio de férias e os meus dias de férias pagos?",
    's.jobends.2': "Peço conselho ao Juridisch Loket.",
    's.jobends.3': "Trato eu de um novo seguro de saúde.",
    'c.jobends.q': "O teu trabalho acaba na sexta-feira. Aí também tens de sair da casa.",
    'c.jobends.a': "Qual é o prazo de aviso prévio do meu contrato de arrendamento?",
    'c.details': "Os teus dados: dá-os bem",
    'c.details.b': "No início de um trabalho, dás os teus dados: o teu nome, a tua morada, o teu número de telefone, a tua data de nascimento e o teu BSN. Soletra o teu nome devagar, letra a letra. Depois, verifica o teu nome no contrato e no recibo de vencimento. Um erro no teu nome ou no BSN pode dar problemas com o salário ou com os impostos. Tens uma morada ou um número de telefone novo? Diz ao teu empregador.",
    'c.details.p': "Eu soletro: A, L, I.",
    'c.details.s': "Ao telefone, a agência escreve o teu apelido. Ouves que o estão a escrever mal. O que fazes?",
    'c.details.o1': "Soletras o teu nome devagar e pedes que o leiam em voz alta.", // nagelezen (2e lezing)
    'c.details.o2': "Não dizes nada: um pequeno erro no nome não faz mal.",
    'c.details.o3': "Desligas, e esperas que encontrem o erro mais tarde.",
    'c.details.w': "O teu nome tem de ser igual no contrato, no recibo de vencimento e no documento de identificação. Assim o salário e os impostos ficam certos. Soletrar e pedir que leiam em voz alta é uma verificação rápida.",
    'c.dates': "Datas: primeiro o dia",
    'c.dates.b': "Em neerlandês, o dia vem antes do mês: 3-6 é 3 de junho, não 6 de março. \"Tot en met\" quer dizer que o último dia também conta. Os dias e os meses escrevem-se com letra minúscula: maandag, juni. Tens dúvidas sobre uma data? Pergunta, e repete-a.",
    'c.dates.p': "Queres dizer 3 de junho?",
    'c.dates.s': "O teu horário diz: \"Vrij: 3-6 tot en met 5-6\". Quando estás de folga?",
    'c.dates.o1': "A 3, 4 e 5 de junho.",
    'c.dates.o2': "Só a 3 e 4 de junho.",
    'c.dates.o3': "De 6 de março a 6 de maio.",
    'c.dates.w': "Primeiro vem o dia, depois o mês: 3-6 é 3 de junho. \"Tot en met\" quer dizer que 5 de junho também conta, por isso tens três dias de folga.",
    'c.permit': "Trabalho e integração",
    'c.permit.b': "Tens de fazer a integração cívica (inburgering)? Diz ao teu empregador, e diz à gemeente (a câmara municipal) que trabalhas. Pergunta cedo se as tuas aulas de língua podem encaixar no teu horário. Não tens a certeza se podes trabalhar aqui? Confirma antes de começar, por exemplo no IND, no UWV ou na VluchtelingenWerk. Pedem-te para te registares como independente (zzp’er) para este trabalho? Pede conselho primeiro. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.",
    'c.permit.p': "Tenho aula de língua à terça-feira. O meu horário pode ter isso em conta?",
    'c.permit.s': "Começas um trabalho novo. A tua aula de língua é à terça de manhã, mas no teu horário trabalhas às terças. O que fazes?",
    'c.permit.o1': "Dizes ao teu chefe e pedes para mudar o horário.", // nagelezen (2e lezing)
    'c.permit.o2': "Faltas à aula de língua, porque o trabalho vem primeiro.",
    'c.permit.o3': "Ficas em casa às terças sem dizer nada.",
    'c.permit.w': "A tua integração também é uma obrigação. Muitos empregadores ajudam quando sabem cedo. A gemeente também te pode ajudar a encaixar o teu plano no teu trabalho.",
    'c.kids': "O teu filho está doente",
    'c.kids.b': "O teu filho fica doente de repente? Diz logo ao teu empregador. Nas primeiras horas ou dias podes tirar uma licença de emergência (calamiteitenverlof), e o teu empregador continua a pagar-te. O teu filho precisa de cuidados durante mais tempo? Então podes pedir uma licença para cuidar (zorgverlof). Estás grávida? O teu empregador não te pode despedir por isso. Informa-te a tempo sobre a licença de gravidez e a licença parental (ouderschapsverlof). Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.",
    'c.kids.p': "O meu filho está doente. Posso sair mais cedo hoje?",
    'c.kids.s': "A creche (kinderopvang) liga-te para o trabalho. O teu filho tem febre e tem de ir para casa. O que fazes?",
    'c.kids.o1': "Dizes ao teu chefe, e pedes uma licença de emergência.", // nagelezen (2e lezing)
    'c.kids.o2': "Sais sem dizer nada, e explicas amanhã.",
    'c.kids.o3': "Ficas no trabalho, e deixas o teu filho à espera até ao fim do teu turno.",
    'c.kids.w': "Um filho doente é uma emergência em casa. Se disseres primeiro ao teu chefe, ele pode organizar o trabalho. A licença de emergência é para momentos como este.",
    'c.body': "Diz o que aconteceu e onde dói",
    'c.body.b': "No médico, diz o que aconteceu e onde dói. Por exemplo: \"Ik ben gevallen. Mijn arm doet pijn.\" Diz também há quanto tempo tens a dor. Não tens de adivinhar o que tens: isso é o médico que vê. Aconteceu no trabalho? Diz ao teu chefe no mesmo dia.",
    'c.body.p': "Caí. Dói-me o braço.",
    'c.body.s': "No trabalho levantaste uma caixa pesada. Agora doem-te muito as costas. Estás no médico de família (huisarts). O que dizes?",
    'c.body.o1': "Onde dói, e o que aconteceu: levantaste uma caixa pesada.",
    'c.body.o2': "Só que te sentes mal, mais nada.",
    'c.body.o3': "O nome de uma doença que encontraste na internet.",
    'c.body.w': "Quando dizes onde dói e o que aconteceu, o médico percebe-te mais depressa. O médico vê o que é. Aconteceu no trabalho? Diz também ao teu chefe.",
    'c.jobends': "O teu trabalho acaba: o que mais acaba?",
    'c.jobends.b': "Quando o teu trabalho acaba, verifica o acerto final de contas (eindafrekening). Os dias de férias que não gozaste e o subsídio de férias costumam ser pagos com ele. A casa, o seguro de saúde ou uma carrinha da agência podem acabar ao mesmo tempo. Trata a tempo do teu próprio seguro de saúde. O teu contrato de arrendamento tem regras próprias: pede conselho antes de saíres da casa. Vais mudar de casa, ou sair dos Países Baixos? Diz à gemeente. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.",
    'c.jobends.p': "Quando recebo o acerto final de contas?",
    'c.jobends.s': "O teu trabalho acaba na sexta-feira. O teu seguro de saúde é através da agência. O que fazes?",
    'c.jobends.o1': "Perguntas quando acaba o seguro, e tratas do teu a tempo.", // nagelezen (2e lezing)
    'c.jobends.o2': "Nada: o seguro continua sozinho.",
    'c.jobends.o3': "Esperas até ficares doente, e tratas disso nessa altura.",
    'c.jobends.w': "O seguro através da agência acaba muitas vezes quando o trabalho acaba. Se vives ou trabalhas nos Países Baixos, normalmente tens de ter seguro de saúde. Se tratares disso a tempo, não ficas sem seguro.",
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
    'w.beoordeling': "a avaliação (como fazes bem as coisas)", // nieuw, nalezen
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
    'l.mychoice': "Aquilo em que sou bom", // nieuw, nalezen
    'w.goedin': "bom em (alguma coisa)", // nieuw, nalezen
    'w.kiezen': "escolher", // nieuw, nalezen
    'w.beroep': "a profissão, o tipo de trabalho", // nieuw, nalezen
    'w.bijbaan': "o part-time (um trabalho pequeno ao lado da escola)", // nieuw, nalezen
    'w.nauwkeurig': "cuidadoso e rigoroso", // nieuw, nalezen
    'w.meeloopdag': "o dia de observação (um dia em que acompanhas alguém no trabalho)", // nieuw, nalezen
    's.mychoice.1': "Sei trabalhar bem com as mãos.", // nieuw, nalezen
    's.mychoice.2': "Gosto de trabalhar com pessoas.", // nieuw, nalezen
    's.mychoice.3': "Posso acompanhar-vos um dia, para ver o trabalho?", // nieuw, nalezen
    'c.mychoice.q': "Em que é que tens jeito?", // nieuw, nalezen
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
    'w.garantie': "a garantia (tem de funcionar, ou arranjam-te isso)", // nieuw, nalezen
    's.budget.1': "Primeiro pago as despesas fixas.", // nieuw, nalezen
    's.budget.2': "Poupo um pouco todos os meses.", // nieuw, nalezen
    's.budget.3': "Vou cancelar esta assinatura.", // nieuw, nalezen
    'c.budget.q': "Compra esse telemóvel agora e paga depois!", // nieuw, nalezen
    'c.budget.a': { m: "Não, obrigado. Pagar depois também é uma dívida.", f: "Não, obrigada. Pagar depois também é uma dívida.", x: "Não, obrigado / obrigada. Pagar depois também é uma dívida." }, // nieuw, nalezen
    'l.healthy': "Em forma para o trabalho", // nieuw, nalezen
    'w.slapen': "dormir", // nieuw, nalezen
    'w.ontbijt': "o pequeno-almoço", // nieuw, nalezen
    'w.bewegen': "mexer-se, estar ativo", // nieuw, nalezen
    'w.moe': "cansado", // nieuw, nalezen
    'w.drugs': "as drogas", // nieuw, nalezen
    'w.somber': "em baixo (triste durante muito tempo)", // nieuw, nalezen
    's.healthy.1': { m: "Hoje estou muito cansado.", f: "Hoje estou muito cansada.", x: "Hoje estou muito cansado / cansada." }, // nieuw, nalezen
    's.healthy.2': "Como sempre primeiro o pequeno-almoço.", // nieuw, nalezen
    's.healthy.3': "Na pausa vou dar uma pequena volta a pé.", // nieuw, nalezen
    'c.healthy.q': "Queres um comprimido? Assim não adormeces.", // nieuw, nalezen
    'c.healthy.a': { m: "Não, obrigado. Não trabalho sob efeito de nada.", f: "Não, obrigada. Não trabalho sob efeito de nada.", x: "Não, obrigado / obrigada. Não trabalho sob efeito de nada." }, // nieuw, nalezen
    'c.workorder': "Primeiro lê, depois começa", // nieuw, nalezen
    'c.workorder.b': "Antes de começares, lê a ordem de trabalho (werkbon) ou a tarefa na app. Verifica a morada, a tarefa e o número de coisas. Alguma coisa não está clara? Pergunta antes de começar, não a meio. Depois prepara as ferramentas e o material. Assim poupas tempo e fazes menos erros. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.workorder.p': "A ordem de trabalho diz dez caixas. Está certo?", // nieuw, nalezen
    'c.workorder.s': "A tua ordem de trabalho diz: pintar o quarto 3. O teu colega diz que é o quarto 5. O que fazes?", // nieuw, nalezen
    'c.workorder.o1': "Perguntas ao teu chefe qual é o quarto certo.", // nieuw, nalezen
    'c.workorder.o2': "Pintas o quarto 3, porque é o que diz a ordem de trabalho.", // nieuw, nalezen
    'c.workorder.o3': "Pintas os dois quartos, assim não há erro.", // nieuw, nalezen
    'c.workorder.w': "Quando duas coisas não batem certo, verificas antes de começar. Uma pergunta curta leva menos tempo do que fazer o trabalho outra vez.", // nieuw, nalezen
    'c.handover': "Diz o que está feito e o que não está", // nieuw, nalezen
    'c.handover.b': "O teu trabalho não acaba quando paras. Primeiro arruma o teu sítio e as tuas ferramentas. Depois pede a alguém para verificar o teu trabalho. Diz ao teu chefe o que está feito e o que não está. Alguma coisa correu mal ou está avariada? Diz agora, não amanhã. Avisar que terminaste faz parte do teu trabalho. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.handover.p': "O quarto quatro ainda não está pronto. A porta estava fechada à chave.", // nieuw, nalezen
    'c.handover.s': "Limpaste cinco quartos. O quarto 4 estava fechado à chave, por isso não o pudeste limpar. O teu turno acaba. O que fazes?", // nieuw, nalezen
    'c.handover.o1': "Dizes ao teu chefe que o quarto 4 não está feito, e porquê.", // nieuw, nalezen
    'c.handover.o2': "Vais para casa: o quarto 4 estava fechado, a culpa não é tua.", // nieuw, nalezen
    'c.handover.o3': "Escreves \"tudo feito\" na lista, porque fizeste o teu melhor.", // nieuw, nalezen
    'c.handover.w': "O teu chefe planeia o trabalho. Quando sabe que o quarto 4 não está feito, pode mandar outra pessoa. Assim nenhum cliente encontra um quarto sujo.", // nieuw, nalezen
    'c.workshop': "Olhos, ouvidos e fogo", // nieuw, nalezen
    'c.workshop.b': "Rebarbar, serrar e furar fazem faíscas, bocadinhos e muito barulho. Usa óculos de proteção e proteção auditiva, também para um trabalho curto. Quando há muito barulho, o teu empregador tem de te dar proteção auditiva. As faíscas podem provocar um incêndio. Para soldar, ou rebarbar perto de coisas que podem arder, há regras extra (heet werk): pergunta antes de começar. Depois do trabalho, apanha os bocadinhos de metal. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.workshop.p': "Vou rebarbar. Onde está a proteção auditiva?", // nieuw, nalezen
    'c.workshop.s': "Tens de rebarbar uma pequena peça de metal. Demora um minuto. Os teus óculos de proteção estão na outra sala. O que fazes?", // nieuw, nalezen
    'c.workshop.o1': "Primeiro vais buscar os óculos, também para um minuto.", // nieuw, nalezen
    'c.workshop.o2': "Rebarbas com os olhos meio fechados, é rápido.", // nieuw, nalezen
    'c.workshop.o3': "Pões a outra mão à frente dos olhos.", // nieuw, nalezen
    'c.workshop.w': "Uma faísca ou um bocadinho de metal no olho pode estragar-te o olho para sempre. Isso pode acontecer num segundo. Os óculos de proteção ajudam, também para um trabalho curto.", // nieuw, nalezen
    'c.power': "Eletricidade: nunca à toa", // nieuw, nalezen
    'c.power.b': "Nunca trabalhes em algo que tem corrente (onder spanning). Primeiro um colega com formação torna tudo seguro: desliga a corrente e verifica. Só pessoas com a formação certa podem fazer isto. Vês um cabo ou uma ficha avariada? Não uses e diz logo ao teu chefe. Não sabes se a corrente está desligada? Então está ligada. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.power.p': "Vejo um cabo avariado. Quem pode ver isto?", // nieuw, nalezen
    'c.power.s': "Tens de pendurar uma lâmpada. Um colega diz: \"A corrente está desligada, acho eu.\" O que fazes?", // nieuw, nalezen
    'c.power.o1': "Pedes a um colega com formação que veja se não há corrente.", // nieuw, nalezen
    'c.power.o2': "Começas, mas pões luvas grossas para tocar nos fios.", // nieuw, nalezen
    'c.power.o3': "Acendes e apagas a luz para ver se não há corrente.", // nieuw, nalezen
    'c.power.w': "\"Acho eu\" não chega com eletricidade. Um choque pode matar-te. Um colega com formação verifica que não há corrente, e depois podes começar.", // nieuw, nalezen
    'c.garage': "Seguro debaixo de um carro", // nieuw, nalezen
    'c.garage.b': "Nunca te ponhas debaixo de um carro que só está num macaco. O carro tem de estar bem firme no elevador ou em cavaletes. O óleo entornado deixa o chão escorregadio: limpa logo. O óleo usado, as baterias e os produtos de limpeza são resíduos perigosos. Vão para um sítio especial, nunca para o lixo normal nem para o esgoto. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.garage.p': "Há óleo no chão. Vou limpar.", // nieuw, nalezen
    'c.garage.s': "Tens de ver por baixo de um carro. O carro só está num macaco. O teu colega diz: \"Não faz mal, é só ser rápido.\" O que fazes?", // nieuw, nalezen
    'c.garage.o1': "Esperas até o carro estar no elevador ou em cavaletes.", // nieuw, nalezen
    'c.garage.o2': "Vais lá para baixo depressa e deixas as pernas de fora.", // nieuw, nalezen
    'c.garage.o3': "Vais lá para baixo e pedes ao colega que segure o carro.", // nieuw, nalezen
    'c.garage.w': "Um macaco pode escorregar. Um carro é muito pesado, e debaixo dele não consegues sair depressa. Os cavaletes ou um elevador mantêm o carro no lugar.", // nieuw, nalezen
    'c.carjob': "Trabalho extra? Primeiro pergunta ao cliente", // nieuw, nalezen
    'c.carjob.b': "Encontras mais problemas do que diz a ordem de trabalho? Não os arranjes assim sem mais. O cliente tem de concordar primeiro com o trabalho extra e com os custos. O teu chefe ou a receção liga ao cliente. Um test drive só com autorização, e só com uma carta de condução válida. Escreve o que fizeste e que peças usaste. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen
    'c.carjob.p': "Vejo mais um problema. Quem liga ao cliente?", // nieuw, nalezen
    'c.carjob.s': "Estás a mudar o óleo de um carro. Vês que os travões também estão maus. O carro tem de estar pronto daqui a uma hora. O que fazes?", // nieuw, nalezen
    'c.carjob.o1': "Dizes ao teu chefe, para ele ligar ao cliente.", // nieuw, nalezen
    'c.carjob.o2': "Arranjas também os travões: de certeza que o cliente quer um carro seguro.", // nieuw, nalezen
    'c.carjob.o3': "Não dizes nada: os travões não estão na ordem de trabalho.", // nieuw, nalezen
    'c.carjob.w': "O cliente paga, por isso o cliente decide. Sem o acordo dele, a garagem não pode fazer trabalho extra assim sem mais. Travões maus são perigosos, por isso é importante avisar.", // nieuw, nalezen
    'c.placement': "Primeiro assina, depois começa", // nieuw, nalezen
    'c.placement.b': "No Entree aprendes muito numa empresa: é o teu estágio (stage, ou bpv). Antes de começares, tu, a escola e a empresa assinam um contrato: o POK. Na empresa, ajuda-te o orientador (praktijkopleider). Na escola, ajuda-te o orientador de estágio (stagebegeleider). Estás doente? Liga para a empresa antes da hora de entrada, e avisa também a escola. As regras são diferentes em cada escola: pergunta ao teu orientador de estágio.", // nieuw, nalezen
    'c.placement.p': "Só começo quando o contrato de estágio estiver assinado.", // nieuw, nalezen
    'c.placement.s': "A empresa pede-te para começares amanhã. O POK ainda não está assinado. O que fazes?", // nieuw, nalezen
    'c.placement.o1': "Pedes ao orientador de estágio que trate primeiro do POK.", // nieuw, nalezen
    'c.placement.o2': "Começas amanhã e assinas o POK quando tiveres tempo.", // nieuw, nalezen
    'c.placement.o3': "Começas, mas por agora não dizes nada à escola.", // nieuw, nalezen
    'c.placement.w': "O POK diz o que aprendes e quem te ajuda. Sem um POK assinado, o teu estágio pode não contar para o diploma. Por isso assinas antes de começar.", // nieuw, nalezen
    'c.review': "Pede feedback, e um exemplo", // nieuw, nalezen
    'c.review.b': "No estágio, as pessoas dizem-te o que corre bem e o que pode ser melhor: é o feedback. É normal, e ajuda-te a aprender. Não percebes? Pede um exemplo. Pede tu também feedback, por exemplo uma vez por semana. Alguma coisa corre mesmo mal no estágio? Primeiro fala com o orientador na empresa. Não ajuda? Então vai ter com o orientador de estágio da escola.", // nieuw, nalezen
    'c.review.p': "O que correu bem, e o que pode ser melhor?", // nieuw, nalezen
    'c.review.s': "O teu orientador diz: \"Tens de trabalhar com mais cuidado.\" Não sabes o que ele quer dizer. O que fazes?", // nieuw, nalezen
    'c.review.o1': "Pedes um exemplo do que tens de fazer de outra forma.", // nieuw, nalezen
    'c.review.o2': { m: "Dizes que sim e esperas perceber sozinho.", f: "Dizes que sim e esperas perceber sozinha.", x: "Dizes que sim e esperas perceber sozinho / sozinha." }, // nieuw, nalezen
    'c.review.o3': "A partir de agora trabalhas muito mais devagar, para nada correr mal.", // nieuw, nalezen
    'c.review.w': "Com um exemplo, sabes o que mudar. Perguntar mostra que queres aprender. Os orientadores gostam disso.", // nieuw, nalezen
    'c.council': "Quem pode votar?", // nieuw, nalezen
    'c.council.b': "Nos Países Baixos escolhes, pelo voto, quem decide. A assembleia municipal (gemeenteraad) decide sobre a tua cidade. A Tweede Kamer faz as leis para todo o país. Com a nacionalidade neerlandesa, podes votar em todas as eleições, a partir dos 18 anos. Para a assembleia municipal, podem votar mais pessoas: pessoas de outro país da UE que vivem cá, e pessoas de fora da UE depois de 5 anos de residência legal. O município (gemeente) envia-te um cartão de voto (stempas). Leva-o com o teu documento de identificação. Não sabes se podes votar? Pergunta ao município.", // nieuw, nalezen
    'c.council.p': "Posso votar para a assembleia municipal?", // nieuw, nalezen
    'c.council.s': "Vens de Marrocos e vives cá legalmente há seis anos. Não tens a nacionalidade neerlandesa. Há eleições para a assembleia municipal. O que é verdade?", // nieuw, nalezen
    'c.council.o1': "Podes votar para a assembleia municipal.", // nieuw, nalezen
    'c.council.o2': "Também podes votar para a Tweede Kamer.", // nieuw, nalezen
    'c.council.o3': "Sem passaporte neerlandês não podes votar em nada.", // nieuw, nalezen
    'c.council.w': "Depois de 5 anos de residência legal, podes votar para a assembleia municipal. Para a Tweede Kamer, precisas da nacionalidade neerlandesa.", // nieuw, nalezen
    'c.police': "O teu documento e os teus direitos", // nieuw, nalezen
    'c.police.b': { m: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebes uma carta com uma decisão com que não concordas, por exemplo do município ou do UWV? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data da carta. A polícia e o juiz têm de tratar todos por igual. Foste detido? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça.", f: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebes uma carta com uma decisão com que não concordas, por exemplo do município ou do UWV? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data da carta. A polícia e o juiz têm de tratar todos por igual. Foste detida? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça.", x: "A partir dos 14 anos, tens de mostrar o teu documento de identificação quando a polícia pede. Por isso, anda sempre com ele. Recebes uma carta com uma decisão com que não concordas, por exemplo do município ou do UWV? Então podes fazer uma reclamação por escrito (bezwaar maken). Fá-lo antes da data da carta. A polícia e o juiz têm de tratar todos por igual. Foste detido / detida? Podes pedir um advogado. O Juridisch Loket dá conselhos de graça." }, // nieuw, nalezen
    'c.police.p': "Não concordo com esta decisão. Vou fazer uma reclamação.", // nieuw, nalezen
    'c.police.s': "Recebes uma carta do município. Não concordas com a decisão deles. A carta diz que tens seis semanas. O que fazes?", // nieuw, nalezen
    'c.police.o1': "Escreves uma carta de reclamação, antes da data.", // nieuw, nalezen
    'c.police.o2': "Ligas-lhes uma vez e esperas que te liguem de volta.", // nieuw, nalezen
    'c.police.o3': "Esperas: depois de seis semanas, passa sozinho.", // nieuw, nalezen
    'c.police.w': "A reclamação faz-se por escrito, antes da data da carta. Depois dessa data, muitas vezes é tarde demais. O Juridisch Loket pode ajudar-te a escrevê-la.", // nieuw, nalezen
    'c.login': "O teu acesso é só teu", // nieuw, nalezen
    'c.login.b': "A tua palavra-passe e o teu DigiD são só para ti. Não os dês a ninguém, nem ao teu empregador nem a um colega. Num computador partilhado, termina sempre a sessão quando acabares. Vais sair um momento? Bloqueia o ecrã. Esqueceste-te da palavra-passe? Pede uma nova ao departamento de informática (ICT-afdeling). As regras dos computadores são diferentes em cada empresa: pergunta ao departamento de informática quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.login.p': "Vou sair um momento. Vou bloquear o ecrã.", // nieuw, nalezen
    'c.login.s': "O teu chefe pede o teu DigiD e a tua palavra-passe para tratar depressa dos teus papéis. O que fazes?", // nieuw, nalezen
    'c.login.o1': "Dizes que não, e entras tu enquanto ele ajuda.", // nieuw, nalezen
    'c.login.o2': "Dás desta vez, porque é o teu chefe.", // nieuw, nalezen
    'c.login.o3': "Escreves num papel, para ele usar mais tarde.", // nieuw, nalezen
    'c.login.w': "Com o teu DigiD, alguém pode ver e mudar os teus impostos, subsídios e papéis de saúde. É só para ti. Podes entrar tu e deixar alguém ajudar-te.", // nieuw, nalezen
    'c.phish': "Pressa e um botão? Não cliques", // nieuw, nalezen
    'c.phish.b': "Um e-mail falso (phishing) muitas vezes parece verdadeiro. Quer que ajas depressa: \"A tua conta vai ser fechada hoje!\" Verifica o remetente. Não cliques num link nem abras um anexo que não esperavas. Vai tu ao site ou à app verdadeira. Clicaste mesmo assim? Muda já a palavra-passe e liga ao departamento de informática. Não é vergonha: quanto mais cedo souberem, melhor. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    'c.phish.p': "Cliquei num link suspeito.", // nieuw, nalezen
    'c.phish.s': "Clicaste num link de um e-mail e escreveste a tua palavra-passe. Depois vês que o e-mail era falso. O que fazes?", // nieuw, nalezen
    'c.phish.o1': "Mudas a palavra-passe e ligas à informática.", // nieuw, nalezen
    'c.phish.o2': "Apagas o e-mail, para mais ninguém clicar nele.", // nieuw, nalezen
    'c.phish.o3': "Esperas um dia para ver se corre alguma coisa mal.", // nieuw, nalezen
    'c.phish.w': "Com a tua palavra-passe, outra pessoa pode entrar nos sistemas do teu trabalho. Se a mudares depressa e avisares a informática, eles podem parar isso a tempo.", // nieuw, nalezen
    'c.mychoice': "Os teus pontos fortes contam", // nieuw, nalezen
    'c.mychoice.b': "Em que é que tens jeito? Pensa no trabalho, na escola e em casa. Cuidar da família, um part-time ou voluntariado também contam. Do que é que gostas, e do que é que não gostas? Não sabes que trabalho é para ti? Pede para acompanhar alguém no trabalho durante um dia (meeloopdag). O teu orientador na escola pode ajudar-te a escolher.", // nieuw, nalezen
    'c.mychoice.p': "Sei lidar bem com as pessoas. Em casa ajudo muito.", // nieuw, nalezen
    'c.mychoice.s': "Na escola perguntam-te: \"Em que é que tens jeito?\" Nunca tiveste um trabalho pago. O que dizes?", // nieuw, nalezen
    'c.mychoice.o1': "O que fazes bem em casa, como cuidar dos outros.", // nieuw, nalezen
    'c.mychoice.o2': "Que ainda não sabes, porque nunca tiveste emprego.", // nieuw, nalezen
    'c.mychoice.o3': "Que consegues fazer qualquer trabalho, mesmo tudo.", // nieuw, nalezen
    'c.mychoice.w': "O que fazes em casa também conta. Cuidar, planear e ajudar são competências de que os empregadores precisam. Diz o que fizeste, com um exemplo.", // nieuw, nalezen
    'c.nextstep': "Depois do Entree: nível 2 ou trabalho", // nieuw, nalezen
    'c.nextstep.b': "Com um diploma Entree, podes continuar para o nível 2 do mbo. Um diploma de nível 2 ou superior é uma qualificação básica (startkwalificatie). Ajuda-te a encontrar trabalho e a mantê-lo. Na bbl trabalhas numa empresa e vais à escola mais ou menos um dia por semana. Para isso precisas de um emprego ou de um lugar de trabalho e formação (leerwerkbaan). Vai a um dia aberto, e fala com o teu orientador na escola.", // nieuw, nalezen
    'c.nextstep.p': "Posso ir para o nível 2 depois do Entree?", // nieuw, nalezen
    'c.nextstep.s': "Tens o teu diploma Entree. Uma empresa oferece-te um trabalho sem formação. Tu também queres continuar a aprender. O que fazes?", // nieuw, nalezen
    'c.nextstep.o1': "Perguntas à empresa se é possível um lugar na bbl.", // nieuw, nalezen
    'c.nextstep.o2': "Aceitas o trabalho e deixas de estudar para sempre.", // nieuw, nalezen
    'c.nextstep.o3': "Ficas em casa até uma escola te ligar.", // nieuw, nalezen
    'c.nextstep.w': "Na bbl trabalhas e aprendes ao mesmo tempo. Ganhas dinheiro e recebes um diploma de nível 2. Muitas empresas gostam disso.", // nieuw, nalezen
    'c.email': "Um e-mail curto: quem, o quê, quando", // nieuw, nalezen
    'c.email.b': "Um e-mail para o trabalho é curto e educado. Começa com uma saudação, como \"Beste Karin,\". Depois diz o que queres, e quando. Termina com uma saudação e o teu nome completo. Escreve um assunto curto, como \"Vrij op vrijdag\". Lê o teu e-mail outra vez antes de o enviares.", // nieuw, nalezen
    'c.email.p': "Cara Karin, posso ter folga na sexta-feira? Cumprimentos, Ali Haddad", // nieuw, nalezen
    'c.email.s': "Queres folga na próxima sexta-feira. Que e-mail para o teu chefe é o melhor?", // nieuw, nalezen
    'c.email.o1': "\"Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad\"", // nieuw, nalezen
    'c.email.o2': "\"Vrijdag ben ik er niet.\" (sem saudação e sem o teu nome).", // nieuw, nalezen
    'c.email.o3': "Um e-mail comprido sobre a tua semana, com a pergunta no fim.", // nieuw, nalezen
    'c.email.w': "Um bom e-mail tem uma saudação, uma pergunta clara e o teu nome. Assim o teu chefe pode responder depressa.", // nieuw, nalezen
    'c.budget': "Primeiro as despesas fixas", // nieuw, nalezen
    'c.budget.b': "Quando recebes o ordenado, paga primeiro as despesas fixas: a renda, o seguro e o telemóvel. Tenta poupar um pequeno valor todos os meses, nem que sejam 10 euros. Comprar agora e pagar depois também é uma dívida. Compraste alguma coisa online? Então normalmente podes mudar de ideias em 14 dias. Guarda o talão: precisas dele para a garantia.", // nieuw, nalezen
    'c.budget.p': "Prefiro pagar agora. Assim não tenho dívidas.", // nieuw, nalezen
    'c.budget.s': "Hoje recebes o ordenado. Queres uns sapatos novos, e a renda ainda não está paga. O que fazes?", // nieuw, nalezen
    'c.budget.o1': "Pagas primeiro a renda, e depois vês o que sobra.", // nieuw, nalezen
    'c.budget.o2': "Compras os sapatos e pagas a renda mais tarde.", // nieuw, nalezen
    'c.budget.o3': "Compras os sapatos com \"compra agora, paga depois\".", // nieuw, nalezen
    'c.budget.w': "A renda, o seguro e o telemóvel voltam todos os meses. Se os pagares primeiro, sabes quanto dinheiro sobra. Assim não ficas com dívidas.", // nieuw, nalezen
    'c.healthy': "Sono, comida e nada de drogas", // nieuw, nalezen
    'c.healthy.b': "Trabalhas melhor e com mais segurança quando dormes o suficiente, também depois de um turno tardio. Toma o pequeno-almoço e bebe água durante o dia. Mexe-te na pausa, por exemplo com uma pequena volta a pé. Trabalhar sob efeito de álcool ou drogas é perigoso, e a maioria dos empregadores proíbe isso. Sentes-te em baixo há muito tempo, ou não consegues parar de beber ou de consumir? Fala com o teu médico de família (huisarts). Ele pode ajudar, e guarda segredo.", // nieuw, nalezen
    'c.healthy.p': "Sinto-me em baixo há muito tempo. Posso marcar uma consulta?", // nieuw, nalezen
    'c.healthy.s': "Esta noite tens turno da noite. Um colega oferece-te um comprimido para não adormeceres. O que fazes?", // nieuw, nalezen
    'c.healthy.o1': "Dizes que não, e dormes umas horas antes do turno.", // nieuw, nalezen
    'c.healthy.o2': "Tomas meio comprimido, isso não é perigoso.", // nieuw, nalezen
    'c.healthy.o3': "Tomas, mas não dizes nada a ninguém no trabalho.", // nieuw, nalezen
    'c.healthy.w': "Comprimidos de um colega podem ser drogas. Podem fazer-te mal, ou fazer-te errar no trabalho. Dormir é a forma segura de te manteres alerta.", // nieuw, nalezen
  },
};

export default t;
