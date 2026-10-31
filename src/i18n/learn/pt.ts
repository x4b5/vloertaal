import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Não precisas de microfone. Diz em voz alta e depois continua.",
    micRetry: "Tentar outra vez com o microfone",
    micFailed: "O microfone não funcionou. Diz em voz alta e depois continua.",
    whichPicture: "Qual é a imagem?",
    wrongTapsN: "Toques errados: {n}",
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
    'c.accident.a.why': "Perguntam o que aconteceu: esta resposta diz o que aconteceu e como ele está.",
    'c.notyet.a.why': "Dizem para experimentar: pedir que mostrem primeiro é a resposta segura.",
    'c.things.a.why': "A pergunta é \"onde\". Esta resposta diz um sítio.",
    'c.directions.a.why': "Esquerda ou direita? Esta resposta escolhe um lado e diz onde.",
    'c.shift.a.why': "Quando começa o turno? Esta resposta dá o dia e a hora.",
    'c.sick.a.why': "Quem está doente fica em casa e avisa.",
    'd.speakup.a.why': "Perguntam se há algum problema: um sim honesto é bom.",
    'd.agree.a.why': "Dizer que não é permitido. Propor outro dia ajuda.",
    'd.task.a.why': "Perguntam se está feito: esta resposta diz quase, e quanto tempo falta.",
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
    'c.respect.a.why': "O assédio tem de ser contado, para alguém poder ajudar.",
    'c.gossip.a.why': "Não entrar em mexericos mantém a confiança na equipa.",
    'c.boundaries.a.why': "Uma piada que magoa pode ser parada, com clareza.",
    'c.health.a.why': "Uma pausa protege a saúde, por isso faz-se.",
    'c.rights.a.why': "Um despedimento nunca se assina logo. Primeiro pede-se conselho.",
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
    'c.cleaning.a.why': "Acabaste? Esta resposta diz quase, e quantos faltam.",
    'c.cleansafe.a.why': "Um chão molhado escorrega: um aviso ajuda.",
    'c.shelves.a.why': "Perguntam onde: esta resposta diz o corredor e ajuda.",
    'c.checkout.a.why': "Perguntam se se pode pagar com cartão: um sim simpático.",
    'c.hours.a.why': "Perguntam a que horas: esta resposta dá uma hora.",
    'c.measures.a.why': "Perguntam o comprimento: esta resposta dá um comprimento.",
    'c.aihelp.a.why': "Perguntam quem o escreveu: um sim honesto que diz quem ajudou.",
    'c.aiprivate.a.why': "Pedem para pôr nomes num chatbot: esta resposta diz que não, e porquê.",
    'c.aifake.a.why': "Um número novo pede dinheiro: esta resposta verifica primeiro.",
    'c.aiplan.a.why': "Uma app fez o horário: esta resposta pede uma pessoa.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "Perguntam quantas filas: esta resposta dá um número, e o que falta.", // nagelezen (2e lezing)
    'c.greensafe.a.why': "Acabou de ser pulverizada: esta resposta diz \"ainda não\" e porquê.", // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "Perguntam o apelido: esta resposta dá-o e oferece-se para o soletrar.",
    'c.dates.a.why': "Perguntam a data: esta resposta dá o dia e a data.",
    'c.permit.a.why': "Dizer que não está bem, se deres uma razão. Propor outro dia ajuda.",
    'c.kids.a.why': "Perguntam porquê: esta resposta dá a razão, a creche ligou.",
    'c.body.a.why': "Perguntam onde dói: esta resposta diz o sítio e a causa.",
    'c.jobends.a.why': "A casa vai com o trabalho: esta resposta pergunta pelo prazo de aviso prévio.",
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Uma palavra não está clara: perguntar antes de começar é a resposta certa.", // nieuw, nalezen
    'c.handover.a.why': "Perguntam se está tudo pronto: esta resposta diz o que não está, e porquê.", // nieuw, nalezen
    'c.workshop.a.why': "Perguntam porquê: esta resposta dá a razão, os olhos têm de ser protegidos.", // nieuw, nalezen
    'c.power.a.why': "Trabalho numa lâmpada: esta resposta pergunta primeiro se a corrente está desligada.", // nieuw, nalezen
    'c.garage.a.why': "Pedem para trocar os pneus: um sim, e uma pergunta sobre onde estão.", // nieuw, nalezen
    'c.carjob.a.why': "Trabalho extra: o cliente tem de concordar primeiro, por isso esta resposta pergunta ao chefe.", // nieuw, nalezen
    'c.placement.a.why': "Perguntam quando: esta resposta dá o dia, e o contrato vem primeiro.", // nieuw, nalezen
    'c.review.a.why': "O feedback ainda não está claro: pedir para mostrar é uma boa resposta.", // nieuw, nalezen
    'c.council.a.why': "Perguntam pelo voto: um sim, e as duas coisas a levar.", // nieuw, nalezen
    'c.police.a.why': "A polícia pede o documento: mostrar e perguntar o que se passa.", // nieuw, nalezen
    'c.login.a.why': "Perguntam se o acesso funciona: esta resposta diz que não, e porquê.", // nieuw, nalezen
    'c.phish.a.why': "Perguntam pelo link: um sim sincero, e uma chamada à informática.", // nieuw, nalezen
    'c.mychoice.a.why': "Perguntam pelos pontos fortes: esta resposta diz um, com um exemplo.", // nieuw, nalezen
    'c.nextstep.a.why': "Perguntam pelo plano: esta resposta diz a bbl e o que significa.", // nieuw, nalezen
    'c.email.a.why': "Perguntam se foi enviado: ainda não, primeiro é verificado.", // nieuw, nalezen
    'c.budget.a.why': "Oferecem pagar depois: um não educado, com a razão.", // nieuw, nalezen
    'c.healthy.a.why': "Oferecem um comprimido: um não educado, com a razão.", // nieuw, nalezen
  },
};

export default t;
