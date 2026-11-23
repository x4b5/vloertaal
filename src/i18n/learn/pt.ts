import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Não precisas de microfone. Diz em voz alta e depois continua.",
    micRetry: "Tentar outra vez com o microfone",
    micFailed: "O microfone não funcionou. Diz em voz alta e depois continua.",
    micRefused: "A app não pode usar o teu microfone. Podes ativá-lo.", // nieuw, nalezen
    micTurnOn: "Ativa o microfone", // nieuw, nalezen
    micStepsIos: "Toca em “•••” ou “aA” na barra de endereço › Definições do site › Microfone › Permitir. Ou: Definições › Apps › Safari › Microfone. Depois toca no botão abaixo.", // nieuw, nalezen
    micStepsIosOther: "Toca no ícone à esquerda do endereço web › Autorizações › Microfone › Permitir. Ou: Definições › Apps › {app} › Microfone. Depois toca no botão abaixo.", // nieuw, nalezen
    micStepsAndroid: "Toca no ícone à esquerda do endereço web › Autorizações › Microfone › Permitir. Depois toca no botão abaixo.", // nieuw, nalezen
    micStepsAndroidApp: "Mantém premido o ícone do Vloertaal no ecrã principal › Informações da app › Autorizações › Microfone › Permitir. Depois toca no botão abaixo.", // nieuw, nalezen
    micStepsDesktop: "Clica no ícone à esquerda do endereço web › Microfone › Permitir. Depois clica no botão abaixo.", // nieuw, nalezen
    whichPicture: "Qual é a imagem?",
    sayAloudInstead: "Em vez disso, diz em voz alta",
    wordsPractised: "Palavras praticadas",
    reviewComplete: "Revisão terminada!",
  },
  gloss: {
    'c.hello.a.why': "A uma despedida responde-se com uma despedida.",
    'c.people.a.why': "A pergunta pede um nome. Esta resposta dá um nome.",
    'c.arrive.a.why': "Perguntam porque vieste: esta resposta diz que é uma pessoa nova que começa hoje.",
    'c.understand.a.why': "Não percebeste? Pedir para ouvir outra vez é normal.",
    'c.translate.a.why': "O papel ainda não está claro, por isso primeiro é traduzido.",
    'c.understood.a.why': "Repetir a tarefa confirma que a ordem está clara.",
    'c.keeplearning.a.why': "Pedir para falarem em neerlandês não faz mal: praticar ajuda.",
    'c.gear.a.why': "A pergunta é sobre o capacete: sim, está posto.",
    'c.danger.a.why': "Num acidente, liga-se primeiro para o 112.",
    'c.alarm.a.why': "Perguntam se estão todos lá fora: esta resposta diz quem ainda falta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "Perguntam o que aconteceu: esta resposta diz o que aconteceu e como ele está.",
    'c.notyet.a.why': "Dizem para experimentar: pedir que mostrem primeiro é a resposta segura.",
    'c.things.a.why': "A pergunta é \"onde\". Esta resposta diz um sítio.",
    'c.directions.a.why': "Esquerda ou direita? Esta resposta escolhe um lado e diz onde.",
    'c.shift.a.why': "Quando começa o turno? Esta resposta dá o dia e a hora.",
    'c.sick.a.why': "Quem está doente fica em casa e avisa.",
    'd.speakup.a.why': "Perguntam se há algum problema: um sim honesto é bom.",
    'd.agree.a.why': "Podes dizer que não. Propor outro dia ajuda.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'd.task.a.why': "Perguntam se está feito: esta resposta diz quase, e quanto tempo falta.",
    'd.clear.a.why': 'Perguntam se está claro: primeiro sim, depois a única pergunta.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Uma referência é um antigo chefe que pode falar sobre o teu trabalho.",
    'c.interview.a.why': "Numa entrevista de emprego, o que conta é a experiência de trabalho.",
    'c.findwork.a.why': "A pergunta é que trabalho. Esta resposta diz qual.",
    'c.contract.a.why': "Um sim e uma pergunta sobre a hora é uma resposta clara e com vontade.",
    'c.agency.a.why': "Perguntam pelas horas: sim, e diz quando e como.",
    'c.bsn.a.why': "Um empregador pode pedir para ver um documento de identificação, como o passaporte.",
    'c.housing.a.why': "Dinheiro descontado do salário tem de estar combinado por escrito.",
    'c.payslip.a.why': "As horas que faltam no recibo de vencimento têm de ser comunicadas.",
    'c.extra.a.why': "As horas extra ficam escritas, para se poderem verificar no recibo de vencimento.",
    'c.phone.a.why': "Nada de telemóvel perto das máquinas: as mensagens esperam pela pausa.",
    'c.smoking.a.why': "As pausas são a horas fixas, não antes.",
    'c.clock.a.why': "Picar o ponto por outra pessoa não é permitido.",
    'c.hygiene.a.why': "Rede no cabelo, sem joias: regras para comida limpa.",
    'c.smalltalk.a.why': "A pergunta é sobre o fim de semana: uma coisa chega.",
    'c.mistakes.a.why': "A um elogio responde-se com um obrigado.",
    'c.respect.a.why': "O bullying tem de ser contado, para alguém poder ajudar.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gossip.a.why': "Não entrar em mexericos mantém a confiança na equipa.",
    'c.boundaries.a.why': "Se uma piada magoa, podes pedir com clareza que parem.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.a.why': "Uma pausa protege a saúde, por isso faz-se.",
    'c.rights.a.why': "Um despedimento nunca se assina logo. Primeiro pede-se conselho.",
    'c.mustmay.a.why': "Voluntário quer dizer que podes escolher: trabalhar no sábado não é preciso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "Quando? Esta resposta dá um mês e quanto tempo.",
    'c.illness.a.why': "Os detalhes médicos são para o médico da empresa, não para o chefe.",
    'c.warning.a.why': "Um empregador pode copiar um passaporte, mas não pode ficar com ele.",
    'c.gethelp.a.why': "Dizer com clareza o que está mal deixa-os ajudar.",
    'c.callin.a.why': "Quando voltas? Esta resposta dá um dia.",
    'c.texting.a.why': "Uma resposta rápida na app ajuda a organizar o horário.",
    'c.certs.a.why': "Um não honesto, e vontade de aprender: uma boa resposta.",
    'c.diploma.a.why': "Dizer sim à formação, e perguntar quem paga, é normal.",
    'c.doctor.a.why': "O serviço de médicos de família precisa de saber quem está doente e o que tem.",
    'c.insurance.a.why': "O nome da seguradora está no cartão do seguro de saúde.",
    'c.letters.a.why': "A declaração de impostos tem de ser entregue até 1 de maio.",
    'c.scams.a.why': "Um banco nunca pede o PIN. Desligar é o certo.",
    'c.bike.a.why': "Como? Esta resposta dá o transporte e o tempo.",
    'c.transit.a.why': "Não é o comboio: esta resposta diz o autocarro.",
    'c.ww.a.why': "O subsídio de desemprego (WW) tem de ser pedido logo.",
    'c.newjob.a.why': "Um número de telefone deixa-os ligar de volta.",
    'c.tools.a.why': "Onde? Esta resposta dá o sítio: na carrinha.",
    'c.site.a.why': "Num telhado, a proteção contra quedas vem sempre primeiro.",
    'c.line.a.why': "Como está a correr? Esta resposta diz como, e diz qual é o problema.",
    'c.quality.a.why': "Porque foi posto de lado? Esta resposta diz qual é o defeito.",
    'c.client.a.why': "Um cliente pede ajuda: um sim educado, com \"u\".",
    'c.privacy.a.why': "Os medicamentos são para pessoal com formação: quem os dá é a enfermeira.",
    'c.kitchen.a.why': "Uma alergia é coisa séria: o chefe de cozinha tem de saber.",
    'c.service.a.why': "Pedem a conta: um sim curto, e já vai.",
    'c.cleaning.a.why': "Acabaste? Esta resposta diz quase, e quantas faltam.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.cleansafe.a.why': "Um chão molhado escorrega: um aviso ajuda.",
    'c.shelves.a.why': "Perguntam onde: esta resposta diz o corredor e ajuda.",
    'c.checkout.a.why': "Perguntam se se pode pagar com cartão: um sim simpático.",
    'c.counting.a.why': "Perguntam quantas: esta resposta dá o número e confirma-o algarismo a algarismo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "Perguntam a que horas: esta resposta dá uma hora.",
    'c.measures.a.why': "Perguntam o comprimento: esta resposta dá um comprimento.",
    'c.aihelp.a.why': "Perguntam quem o escreveu: um sim honesto que diz quem ajudou.",
    'c.aiprivate.a.why': "Pedem para pôr nomes num chatbot: esta resposta diz que não, e porquê.",
    'c.aifake.a.why': "Um número novo pede dinheiro: esta resposta verifica primeiro.",
    'c.aiplan.a.why': "Uma app fez o horário: esta resposta pede uma pessoa.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Perguntam quantas filas: esta resposta dá um número, e o que falta.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Acabou de ser pulverizada: esta resposta diz \"ainda não\" e porquê.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Perguntam o apelido: esta resposta dá-o e oferece-se para o soletrar.", // nagelezen AI 22 nov
    'c.dates.a.why': "Perguntam a data: esta resposta dá o dia e a data.", // nagelezen AI 22 nov
    'c.permit.a.why': "Podes dizer que não, se deres uma razão. Propor outro dia ajuda.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.kids.a.why': "Perguntam porquê: esta resposta dá a razão, a creche ligou.", // nagelezen AI 22 nov
    'c.body.a.why': "Perguntam onde dói: esta resposta diz o sítio e a causa.", // nagelezen AI 22 nov
    'c.jobends.a.why': "A casa vai com o trabalho: esta resposta pergunta pelo prazo de aviso prévio.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Uma palavra não está clara: perguntar antes de começar é a resposta certa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "Perguntam se está tudo pronto: esta resposta diz o que não está, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "Perguntam porquê: esta resposta dá a razão, os olhos têm de ser protegidos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Trabalho numa lâmpada: esta resposta pergunta primeiro se a corrente está desligada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "Pedem para trocar os pneus: um sim, e uma pergunta sobre onde estão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Trabalho extra: o cliente tem de concordar primeiro, por isso esta resposta pergunta ao chefe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "Perguntam quando: esta resposta dá o dia, e o contrato vem primeiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "O feedback ainda não está claro: pedir que te mostrem é uma boa resposta.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.a.why': "Perguntam pelo voto: um sim, e as duas coisas a levar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "A polícia pede o documento: mostrar e perguntar o que se passa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "Perguntam se o acesso funciona: esta resposta diz que não, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "Perguntam pelo link: um sim sincero, e uma chamada à informática.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "Perguntam pelos pontos fortes: esta resposta diz um, com um exemplo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "Perguntam pelo plano: esta resposta diz a bbl e o que significa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "Perguntam se foi enviado: ainda não, primeiro é verificado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "Oferecem pagar depois: um não educado, com a razão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "Oferecem um comprimido: um não educado, com a razão.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "\"Acho\" ainda não é certeza: pedir para ver confirma que funciona.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.explain.a.why': 'Perguntam o que está mal: esta resposta diz o quê, e o que é preciso.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': 'Não sabes se é uma piada: perguntar é melhor do que adivinhar.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': 'Perguntam porque não está feito: um motivo calmo, e o que vem primeiro.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': 'Alguém pede um momento: um sim, e uma pergunta para a pessoa poder contar.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': 'Ligas de volta depois de uma chamada perdida: um cumprimento, e porque ligas.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': 'Oferecem-te feedback: um sim, e que queres fazer bem.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': 'Perguntam pelo trabalho: primeiro o que está bom, depois o que pode ser melhor.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': 'Perguntam se há perguntas: esta resposta faz uma, sobre o horário.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "Perguntam porque se limpa a linha: o produto seguinte não tem frutos secos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "Perguntam se a encomenda é para eles: sim, e depois a assinatura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "Pedem mais uma volta: não, porque a pausa vem primeiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "Perguntam como estás: um sim curto, e que vais com calma.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "Perguntam como estás: um \"não muito bem\" sincero está bem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "Perguntam a largura: um número com a unidade, e fica escrito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "Perguntam para onde vai a madeira: um sítio, e onde fica.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "Perguntam o que aconteceu: sim, o quê, e durante quanto tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "Perguntam como ele está: o que vês, e que é novo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "Pedem para levantar uma pessoa: sem ajuda não, primeiro vem o elevador de transferência.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "Perguntam por copos limpos: sim, e quando chegam.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Uma ordem do chefe de cozinha: repetida, para ele saber que ouviste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "Perguntam se o escritório está feito: não, com a razão.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "Perguntam por um pano: não, porque o vermelho é para a casa de banho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "Perguntam por leite: não um \"não\", mas ir ver ao armazém.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Um cliente zangado: palavras calmas, e vem um colega.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "Perguntam quais apanhar: a cor diz o que está maduro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Vem aí trovoada: parar e ir para dentro é a escolha segura.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "Perguntam se encaixa: não, e medir outra vez antes de fazer força.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "Perguntam se já se pode pegar: ainda não, o metal quente tem de arrefecer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "Perguntam o que ouves: que peça, e o que ela faz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "Perguntam se se pode começar: ainda não, porque o carro é elétrico.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "Perguntam qual é a localização: o corredor e o lugar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "Perguntam se a palete está pronta: não, e o que ainda falta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "Perguntam se a carrinha está bem: não, e o que está partido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "Perguntam onde estás: o sítio, e quanto mais tarde chegas.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "Perguntam se sabes como: não, ainda não, dito com honestidade.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "Perguntam se tens uma pergunta: sim, e primeiro se há tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "Perguntam se consegues encontrar: não, e um pedido para apontar.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "Pedem para segurar uma coisa: sim, e pergunta onde a pôr.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "Perguntam se a porta está fechada: não, e fecha-a agora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "Perguntam se está cheio: sim, e esvazia-o.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "Pedem para fazer isto agora: sim, e pergunta o que vem depois.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "Perguntam onde está o misturador: um sítio, e o que está perto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "Perguntam por onde começar: no meio, na linha central.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "Perguntam se a parede está seca: não, e quanto tempo esperar.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "Perguntam se é um quadrado: não, um retângulo, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "Perguntam quantos graus: o número, e de que é metade.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "Perguntam o tamanho do chão: a conta, e o resultado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "Perguntam que pincel: o largo para a parede, o pequeno para os cantos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "Perguntam se já se pode pintar: não, e o que vem primeiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "Perguntam quantos tijolos sobram: uma palete, e que chega.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "Perguntam a altura da fiada: onde se pode ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "Perguntam que serrote: o serrote de costas, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "Perguntam se o ângulo está reto: sim, e como se sabe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "Perguntam onde está o berbequim: um sítio, e que está quase cheio.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "Perguntam como fixar a prateleira: com quê, e quantos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "Perguntam porque para: o sensor, e o que ele não vê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "Perguntam de quanto em quanto tempo: uma vez por hora, e onde escrever.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "Perguntam quantos por caixa: o número, e onde está escrito.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "Perguntam quando: o dia da semana, e o momento nesse dia.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "Perguntam que fio vai para onde: a mesma cor com a mesma cor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "Perguntam se podes abrir: não, e quem o faz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "Perguntam se ainda pinga: um bocadinho, e o que vais fazer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "Perguntam porque está afiada: ainda tem uma rebarba.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "Perguntam que passo: o número, e onde ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "Perguntam quanto apertar: até a chave fazer clique.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "Perguntam se se pode ficar ali: não, nunca, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "Perguntam se está bom: não, e o que tem de errado.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "Perguntam a que profundidade: a profundidade, e não mais fundo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "Perguntam se está maduro: não, ainda verde, e o que fazer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "Perguntam porque está calor: a tela e as janelas estão fechadas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "Perguntam se se pode matar: não, e porque ajuda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "Perguntam se têm de sair: sim, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "Perguntam quanto: os litros, e como verificar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "Perguntam se tem de ser novo: sim, e porquê.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "Perguntam o que é preciso fazer: ver na ordem de trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "Perguntam se se pode levar: sim, e o que fazer primeiro.", // nieuw, nalezen
    'c.pruning.a.why': "Perguntam que ramos: só os secos.", // nieuw, nalezen
    'c.hedge.a.why': "Perguntam a que altura: até à linha, não mais baixo.", // nieuw, nalezen
    'c.chainsaw.a.why': "Perguntam se se pode: ainda não, e o que vem primeiro.", // nieuw, nalezen
    'c.weeding.a.why': "Perguntam se é erva daninha: não, e o que fazer com ela.", // nieuw, nalezen
    'c.planting.a.why': "Perguntam onde vai: o sítio no canteiro.", // nieuw, nalezen
    'c.roadside.a.why': "Perguntam se se pode atravessar: não, esperar, e porquê.", // nieuw, nalezen
    'c.litter.a.why': "Um morador pergunta quando: não se sabe, e quem sabe.", // nieuw, nalezen
    'c.reception.a.why': "Um visitante tem uma reunião marcada: um momento, e um telefonema.", // nieuw, nalezen
    'c.visitors.a.why': "Perguntam onde fica o casaco: o sítio, e onde é.", // nieuw, nalezen
    'c.mailroom.a.why': "Perguntam para quem é: o departamento, e o piso.", // nieuw, nalezen
    'c.meetingroom.a.why': "Perguntam a que horas: a hora, e o que tem de ser feito.", // nieuw, nalezen
    'c.faults.a.why': "Perguntam porque está frio: o que está avariado, e quando vem ajuda.", // nieuw, nalezen
    'c.repairs.a.why': "Perguntam se apita: sim, e porquê.", // nieuw, nalezen
    'c.moving.a.why': "Perguntam para onde vai: a sala, e onde ver.", // nieuw, nalezen
    'c.closing.a.why': "Perguntam se está alguém lá dentro: não, e o que se faz agora.", // nieuw, nalezen
    'c.patrol.a.why': "Perguntam se se viu alguma coisa: sim, o quê, e onde.", // nieuw, nalezen
    'c.access.a.why': "Pedem para entrar sem cartão: desculpe, sem cartão não.", // nieuw, nalezen
    'c.cameras.a.why': "Perguntam o que se vê: quem, onde, e o que se faz.", // nieuw, nalezen
    'c.report.a.why': "Perguntam o que vai no relatório: o quê, onde e quando.", // nieuw, nalezen
    'c.evacuation.a.why': "Perguntam se já saíram todos: não, e quantos faltam.", // nieuw, nalezen
    'c.firstaid.a.why': "Perguntam onde está o desfibrilhador: o sítio, e o que está ao lado.", // nieuw, nalezen
    'c.shoplifting.a.why': "Perguntam se se pode revistar uma mala: não, e quem faz isso.", // nieuw, nalezen
    'c.aggression.a.why': "Perguntam porque não: a razão, dita com calma.", // nieuw, nalezen
    'c.hygienelock.a.why': "Perguntam por um relógio: não, e a regra por trás.", // nieuw, nalezen
    'c.allergens.a.why': "Perguntam se pode ir junto: não, e porquê.", // nieuw, nalezen
    'c.coldroom.a.why': "Perguntam porque apita: a causa, e o que fazer.", // nieuw, nalezen
    'c.foreignbody.a.why': "Perguntam o que fazer: a quem mostrar.", // nieuw, nalezen
    'c.cutting.a.why': "Perguntam quanto: o peso, e onde ver.", // nieuw, nalezen
    'c.labels.a.why': "Perguntam que data: quando, e onde ver.", // nieuw, nalezen
    'c.linecleaning.a.why': "Perguntam se está limpo: ainda não, e o que falta.", // nieuw, nalezen
    'c.haccp.a.why': "Perguntam porquê: para saber que a comida é segura.", // nieuw, nalezen
    'c.binlorry.a.why': "Perguntam se se pode ir atrás, pendurado: não, e onde ir.", // nieuw, nalezen
    'c.reversing.a.why': "Pedem ajuda: sim, onde se fica, e o que se faz.", // nieuw, nalezen
    'c.wastesorting.a.why': "Perguntam para onde vai: o contentor, e porquê.", // nieuw, nalezen
    'c.wastesafety.a.why': "Perguntam o que fazer depois de um corte: lavar, e avisar.", // nieuw, nalezen
    'c.yard.a.why': "Perguntam para onde vai: o contentor, e onde está.", // nieuw, nalezen
    'c.hazardous.a.why': "Perguntam o que tem dentro: não se sabe, por isso fica de lado.", // nieuw, nalezen
    'c.baler.a.why': "Perguntam se se pode ver: não, e o que vem primeiro.", // nieuw, nalezen
    'c.shovel.a.why': "Perguntam se se pode passar: só quando o condutor vê.", // nieuw, nalezen
    'c.nappies.a.why': "Perguntam quando: a hora, e onde está escrita.", // nieuw, nalezen
    'c.mealtime.a.why': "Perguntam se ele pode comer: não, porquê, e onde ver.", // nieuw, nalezen
    'c.naptime.a.why': "Perguntam se ela dorme: sim, desde quando, e que se vai ver.", // nieuw, nalezen
    'c.playtime.a.why': "Perguntam se uma criança pode brincar: sim, onde, e o que depois.", // nieuw, nalezen
    'c.pickup.a.why': "Perguntam quem vem buscar: a pessoa, e que ela está na lista.", // nieuw, nalezen
    'c.childsafety.a.why': "Perguntam se ela caiu: sim, o que tem, e a quem se liga.", // nieuw, nalezen
    'c.sickchild.a.why': "Perguntam como ele está: o que se vê, e o que se faz.", // nieuw, nalezen
    'c.grouprules.a.why': "Perguntam se se pode ir sem outro adulto: sim, mas avisar primeiro um colega.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "Perguntam se está pronto: ainda não, e porquê.", // nieuw, nalezen
    'c.hotelroom.a.why': "Perguntam quantos faltam: o número, e quando acabas.", // nieuw, nalezen
    'c.dosing.a.why': "Dizem para pôr mais: não, mais não é melhor, e o que usas.", // nieuw, nalezen
    'c.officenight.a.why': "Perguntam se trabalhas sem mais ninguém: sim, e vais mandar uma mensagem.", // nieuw, nalezen
    'c.knives.a.why': "Pedem para cortar: sim, chefe, e uma pergunta sobre como.", // nieuw, nalezen
    'c.rawcooked.a.why': "Perguntam se é sem glúten: não se tem a certeza, por isso vê-se a lista.", // nieuw, nalezen
    'c.pass.a.why': "Perguntam onde está a comida: no passe, e vais levá-la agora.", // nieuw, nalezen
    'c.bill.a.why': "Pedem para pagar em separado: sim, e vais buscar o terminal.", // nieuw, nalezen
    'c.washing.a.why': "O cliente diz que não: está bem, e ofereces outra coisa.", // nieuw, nalezen
    'c.observing.a.why': "Perguntam se há alguma coisa de especial: sim, e o quê exatamente.", // nieuw, nalezen
    'c.homecare.a.why': "Perguntam quem é: um cumprimento, quem és, e se podes entrar.", // nieuw, nalezen
    'c.liftaids.a.why': "Pedem para fazer sem ajuda: sim, com o lençol deslizante, e vais buscá-lo.", // nieuw, nalezen
    'c.returns.a.why': "Pedem para devolver: sim, e uma pergunta sobre o talão.", // nieuw, nalezen
    'c.facing.a.why': "Perguntam se já acabaste: quase, e o que ainda falta.", // nieuw, nalezen
    'c.shrink.a.why': "Pedem para ver a tua mala: sim, e mostras o talão.", // nieuw, nalezen
    'c.shopclose.a.why': "Pedem para entrar: desculpe, está fechado, e quando abre outra vez.", // nieuw, nalezen
    'c.hirer.a.why': "Pedem para começar num sítio novo: sim, e uma pergunta sobre a hora.", // nieuw, nalezen
    'c.phases.a.why': "Dizem que o trabalho acaba: está bem, e pedes outro trabalho.", // nieuw, nalezen
    'c.deductions.a.why': "Falam de um desconto: perguntas se é permitido, e confirmas.", // nieuw, nalezen
    'c.agencyhome.a.why': "Dizem para sair em breve: é pouco tempo, e primeiro pedes conselho.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "Dizem-te que o horário mudou: está bem, e perguntas que dia.", // nieuw, nalezen
    'c.breaks.a.why': "Perguntam-te pela pausa para almoço: a hora, e quanto tempo dura.", // nieuw, nalezen
    'c.wound.a.why': "Alguém está quase a desmaiar: deixas a pessoa deitada, e vais buscar ajuda.", // nieuw, nalezen
    'c.callhelp.a.why': "Perguntam-te se ele reage: não, não reage.", // nieuw, nalezen
    'c.vacancy.a.why': "Perguntam-te porque ligas: por causa da vaga, e se ainda está aberta.", // nieuw, nalezen
    'c.result.a.why': "Dizem-te que não: respondes com calma, e perguntas porquê.", // nieuw, nalezen
    'c.residence.a.why': "Dizem-te que a autorização está quase a caducar: pedes logo uma nova.", // nieuw, nalezen
    'c.newhome.a.why': "Perguntam-te onde moras: numa casa nova, e dás a nova morada.", // nieuw, nalezen
    'c.payparts.a.why': "Pedem-te o número de funcionário: onde está no recibo de vencimento.", // nieuw, nalezen
    'c.latepay.a.why': "Dizem-te que o dinheiro vem mais tarde: queres isso por escrito.", // nieuw, nalezen
    'c.holiday.a.why': "Pedem-te para ir em maio: preferes julho, e dizes porquê.", // nieuw, nalezen
    'c.special.a.why': "Perguntam-te pela licença de nascimento: sim, e quando.", // nieuw, nalezen
    'c.unwell.a.why': "Perguntam-te se estás bem: não, e se podes ir para casa.", // nieuw, nalezen
    'c.injury.a.why': "Pedem-te uma declaração: sim, e uma cópia para ti.", // nieuw, nalezen
    'c.debt.a.why': "Dizem-te para ficares até pagares a dívida: não é permitido, pedes ajuda.", // nieuw, nalezen
    'c.inspection.a.why': "Pedem-te para falar: sim, mas não onde o patrão pode ouvir.", // nieuw, nalezen
    'c.carpool.a.why': "Perguntam-te quem conduz: tu, e quando os vais buscar.", // nieuw, nalezen
    'c.train.a.why': "Perguntam-te porque chegas tarde: o comboio, e mandaste uma mensagem.", // nieuw, nalezen
    'c.checklist.a.why': "Perguntam-te se te esqueceste de alguma coisa: mais uma vista de olhos à lista.", // nieuw, nalezen
    'c.leavesite.a.why': "Perguntam-te se és tu quem fecha: sim, tudo desligado e a porta fechada à chave.", // nieuw, nalezen
    'c.stagedays.a.why': "Perguntam-te porque faltaste: estavas doente, e ligaste para os dois.", // nieuw, nalezen
    'c.stageend.a.why': "Perguntam-te pelos teus planos: primeiro o diploma, depois o trabalho.", // nieuw, nalezen
    'c.neighbours.a.why': "Uma vizinha nova cumprimenta-te: muito prazer, e dizes o teu nome.", // nieuw, nalezen
    'c.join.a.why': "Perguntam-te se vens: sim, e queres falar com o professor.", // nieuw, nalezen
    'c.workphotos.a.why': "Pedem-te uma fotografia para a internet: um não educado.", // nieuw, nalezen
    'c.device.a.why': "Perguntam-te por uma app nova: primeiro pergunta ao departamento de informática.", // nieuw, nalezen
  },
};

export default t;
