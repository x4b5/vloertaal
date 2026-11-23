import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Portuguese (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "O que já consegues fazer?", // nieuw, nalezen
    kunNote: "O nível ao lado de cada frase é uma orientação, não um nível oficial.", // nieuw, nalezen
    coachCanDo: "Quantas frases «Consigo…» tens dos temas terminados", // nieuw, nalezen
    kunLuisteren: "ouvir", // nieuw, nalezen
    kunSpreken: "falar", // nieuw, nalezen
    kunLezen: "ler", // nieuw, nalezen
    kunSchrijven: "escrever", // nieuw, nalezen
    kunGesprekken: "conversar", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Consigo apresentar-me a um colega.", // nieuw, nalezen
    'kjn.u.firstday.2': "Consigo perguntar a quem me devo apresentar.", // nieuw, nalezen
    'kjn.u.help.1': "Consigo dizer que não percebo.", // nieuw, nalezen
    'kjn.u.help.2': "Consigo pedir a alguém que fale mais devagar.", // nieuw, nalezen
    'kjn.u.do.1': "Consigo perceber uma instrução curta, como «Zet het neer».", // nieuw, nalezen
    'kjn.u.do.2': "Consigo dizer que acabei uma tarefa.", // nieuw, nalezen
    'kjn.u.tools.1': "Consigo pedir a alguém que escreva ou me mostre.", // nieuw, nalezen
    'kjn.u.tools.2': "Consigo repetir uma instrução para confirmar que percebi.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.tools.3': "Consigo dizer que quero praticar neerlandês.", // nieuw, nalezen
    'kjn.u.data.1': "Consigo soletrar o meu nome.", // nieuw, nalezen
    'kjn.u.data.2': "Consigo dizer em que dias posso trabalhar.", // nieuw, nalezen
    'kjn.u.data.3': "Consigo perceber uma data quando a ouço.", // nieuw, nalezen
    'kjn.u.sounds.1': "Consigo distinguir palavras como man e maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Consigo repetir frases curtas com sons difíceis.", // nieuw, nalezen
    'kjn.u.safety.1': "Consigo perceber um aviso como «Pas op!».", // nieuw, nalezen
    'kjn.u.safety.2': "Consigo dizer que ainda não aprendi uma coisa.", // nieuw, nalezen
    'kjn.u.emergency.1': "Consigo perguntar onde está o extintor.", // nieuw, nalezen
    'kjn.u.emergency.2': "Consigo comunicar um acidente.", // nieuw, nalezen
    'kjn.u.apply.1': "Consigo dizer que experiência tenho.", // nieuw, nalezen
    'kjn.u.apply.2': "Consigo falar de mim numa entrevista de emprego.", // nieuw, nalezen
    'kjn.u.contract.1': "Consigo perguntar quantas horas trabalho por semana.", // nieuw, nalezen
    'kjn.u.contract.2': "Consigo perguntar se o meu contrato é a prazo ou efetivo.", // nieuw, nalezen
    'kjn.u.contract.3': "Consigo dizer quando posso e quando não posso trabalhar.", // nieuw, nalezen
    'kjn.u.grow.1': "Consigo dizer que diplomas e certificados tenho.", // nieuw, nalezen
    'kjn.u.grow.2': "Consigo dizer o que faço bem.", // nieuw, nalezen
    'kjn.u.lost.1': "Consigo dizer que o meu contrato vai acabar.", // nieuw, nalezen
    'kjn.u.lost.2': "Consigo perguntar se me pagam o subsídio de férias.", // nieuw, nalezen
    'kjn.u.stage.1': "Consigo perguntar quem é o meu orientador na empresa.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Consigo pedir feedback e um exemplo.", // nieuw, nalezen
    'kjn.u.time.1': "Consigo dizer a que horas começa o meu turno.", // nieuw, nalezen
    'kjn.u.time.2': "Consigo dizer que estou doente.", // nieuw, nalezen
    'kjn.u.pay.1': "Consigo dizer que o meu recibo de vencimento não está certo.", // nieuw, nalezen
    'kjn.u.pay.2': "Consigo ler palavras como bruto e netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Consigo pedir uma licença ou férias.", // nieuw, nalezen
    'kjn.u.leave.2': "Consigo dizer que o meu filho está doente.", // nieuw, nalezen
    'kjn.u.contact.1': "Consigo telefonar e dizer quem sou.", // nieuw, nalezen
    'kjn.u.contact.2': "Consigo pedir a alguém que me ligue de volta.", // nieuw, nalezen
    'kjn.u.contact.3': "Consigo escrever uma mensagem curta para o trabalho.", // nieuw, nalezen
    'kjn.u.house.1': "Consigo ler regras como «Roken verboden».", // nieuw, nalezen
    'kjn.u.house.2': "Consigo perguntar onde posso fumar.", // nieuw, nalezen
    'kjn.u.house.3': "Consigo dizer que uma coisa não é permitida.", // nieuw, nalezen
    'kjn.u.numbers.1': "Consigo perceber horas como «kwart over vier».", // nieuw, nalezen
    'kjn.u.numbers.2': "Consigo dizer quanto custa ou pesa uma coisa.", // nieuw, nalezen
    'kjn.u.numbers.3': "Consigo distinguir números como 13 e 30.", // nieuw, nalezen
    'kjn.u.shop.1': "Consigo perguntar a um cliente se quer pagar com cartão.", // nieuw, nalezen
    'kjn.u.shop.2': "Consigo indicar o caminho na loja a um cliente.", // nieuw, nalezen
    'kjn.u.ai.1': "Consigo perguntar se uma resposta está certa.", // nieuw, nalezen
    'kjn.u.ai.2': "Consigo dizer que quero falar com uma pessoa.", // nieuw, nalezen
    'kjn.u.finish.1': "Consigo perguntar o que significa uma palavra na ordem de trabalho.", // nieuw, nalezen
    'kjn.u.finish.2': "Consigo dizer o que está pronto e o que não está.", // nieuw, nalezen
    'kjn.u.online.1': "Consigo dizer que a minha palavra-passe não funciona.", // nieuw, nalezen
    'kjn.u.online.2': "Consigo reconhecer um e-mail suspeito.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Consigo dizer que há uma coisa que me incomoda.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Consigo dizer que não a trabalho extra, com calma.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Consigo perguntar o que tenho de fazer primeiro.", // nieuw, nalezen
    'kjn.u.communicate.1': 'Consigo explicar o que está mal.', // nieuw, nalezen
    'kjn.u.communicate.2': 'Consigo dizer o que ouvi.', // nieuw, nalezen
    'kjn.u.communicate.3': 'Consigo pedir uma conversa a tempo.', // nieuw, nalezen
    'kjn.u.feedback.1': 'Consigo pedir um exemplo quando recebo feedback.', // nieuw, nalezen
    'kjn.u.feedback.2': 'Consigo dizer com simpatia o que pode ser melhor.', // nieuw, nalezen
    'kjn.u.feedback.3': 'Consigo fazer uma pergunta numa reunião de equipa.', // nieuw, nalezen
    'kjn.u.social.1': "Consigo conversar um pouco na pausa.", // nieuw, nalezen
    'kjn.u.social.2': "Consigo dizer que cometi um erro.", // nieuw, nalezen
    'kjn.u.social.3': "Consigo dizer que uma coisa passa o meu limite.", // nieuw, nalezen
    'kjn.u.sayings.1': "Consigo perceber algumas expressões comuns.", // nieuw, nalezen
    'kjn.u.sayings.2': "Consigo dizer que uma coisa é muito fácil (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Consigo dizer que tenho direito a uma pausa.", // nieuw, nalezen
    'kjn.u.rights.2': "Consigo dizer que quero apresentar uma queixa.", // nieuw, nalezen
    'kjn.u.exploit.1': "Consigo dizer que o meu passaporte fica comigo.", // nieuw, nalezen
    'kjn.u.exploit.2': "Consigo perguntar se posso comunicar uma coisa sem dar o meu nome.", // nieuw, nalezen
    'kjn.u.papers.1': "Consigo dizer que a minha morada mudou.", // nieuw, nalezen
    'kjn.u.papers.2': "Consigo perguntar quanto é a renda.", // nieuw, nalezen
    'kjn.u.health.1': "Consigo dizer onde me dói.", // nieuw, nalezen
    'kjn.u.health.2': "Consigo pedir uma consulta com o médico de família.", // nieuw, nalezen
    'kjn.u.money.1': "Consigo dizer que não percebo uma carta.", // nieuw, nalezen
    'kjn.u.money.2': "Consigo dizer que não a um burlão ao telefone.", // nieuw, nalezen
    'kjn.u.travel.1': "Consigo dizer como vou para o trabalho.", // nieuw, nalezen
    'kjn.u.travel.2': "Consigo perguntar onde é a paragem do autocarro.", // nieuw, nalezen
    'kjn.u.society.1': "Consigo perguntar se posso votar.", // nieuw, nalezen
    'kjn.u.society.2': "Consigo dizer que quero fazer uma reclamação.", // nieuw, nalezen
    'kjn.u.warehouse.1': "Consigo perceber instruções curtas no armazém.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Consigo dizer onde está uma coisa: à esquerda ou à direita.", // nieuw, nalezen
    'kjn.u.build.1': "Consigo perceber um aviso na obra.", // nieuw, nalezen
    'kjn.u.build.2': "Consigo pedir ferramentas.", // nieuw, nalezen
    'kjn.u.factory.1': "Consigo dizer que há uma avaria.", // nieuw, nalezen
    'kjn.u.factory.2': "Consigo dizer o que está mal num produto.", // nieuw, nalezen
    'kjn.u.care.1': "Consigo perguntar a um cliente se posso ajudar.", // nieuw, nalezen
    'kjn.u.care.2': "Consigo passar uma informação à enfermeira.", // nieuw, nalezen
    'kjn.u.horeca.1': "Consigo perguntar aos clientes o que desejam beber.", // nieuw, nalezen
    'kjn.u.horeca.2': "Consigo dizer que vou perguntar ao chefe.", // nieuw, nalezen
    'kjn.u.clean.1': "Consigo perguntar onde estão as coisas de limpeza.", // nieuw, nalezen
    'kjn.u.clean.2': "Consigo avisar alguém de que o chão está escorregadio.", // nieuw, nalezen
    'kjn.u.kas.1': "Consigo perguntar em que fila começo.", // nieuw, nalezen
    'kjn.u.kas.2': "Consigo perguntar se uma estufa foi pulverizada.", // nieuw, nalezen
    'kjn.u.tech.1': "Consigo perguntar se ainda há corrente.", // nieuw, nalezen
    'kjn.u.tech.2': "Consigo dizer que um cabo está avariado.", // nieuw, nalezen
    'kjn.u.garage.1': "Consigo dizer que um pneu está furado.", // nieuw, nalezen
    'kjn.u.garage.2': "Consigo dizer que primeiro o cliente tem de concordar.", // nieuw, nalezen
    'kjn.u.sick.1': "Consigo comunicar uma baixa por doença e o meu regresso.", // nieuw, nalezen
    'kjn.u.sick.2': "Consigo dizer o que ainda não consigo fazer.", // nieuw, nalezen
    'kjn.u.sick.3': "Consigo dizer que no início trabalho meios dias.", // nieuw, nalezen
    'kjn.u.health.3': "Consigo dizer que o trabalho está a ser demais para mim.", // nieuw, nalezen
    'kjn.u.factory.3': "Consigo avisar que tenho um pequeno corte.", // nieuw, nalezen
    'kjn.u.delivery.1': "Consigo dizer que o cliente não está em casa.", // nieuw, nalezen
    'kjn.u.delivery.2': "Consigo pedir aos vizinhos que fiquem com uma encomenda.", // nieuw, nalezen
    'kjn.u.delivery.3': "Consigo perguntar quem decide a minha rota e os meus horários.", // nieuw, nalezen
    'kjn.u.afbouw.1': "Consigo pedir a talocha dentada ou a colher de pedreiro.", // nieuw, nalezen
    'kjn.u.afbouw.2': "Consigo perguntar por onde começo com os azulejos.", // nieuw, nalezen
    'kjn.u.afbouw.3': "Consigo dizer que a parede ainda não está seca.", // nieuw, nalezen
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Consigo pedir o serrote ou o berbequim sem fio.", // nieuw, nalezen
    'kjn.u.ruwbouw.2': "Consigo perguntar como fixo uma prateleira.", // nieuw, nalezen
    'kjn.u.machines.1': "Consigo dizer que a proteção da máquina está partida.", // nieuw, nalezen
    'kjn.u.machines.2': "Consigo perguntar de quanto em quanto tempo tiro uma amostra.", // nieuw, nalezen
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Consigo perguntar se posso abrir o quadro elétrico.", // nieuw, nalezen
    'kjn.u.install.2': "Consigo dizer que uma união está a pingar.", // nieuw, nalezen
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Consigo dizer que a caixa de peças está quase vazia.", // nieuw, nalezen
    'kjn.u.montage.2': "Consigo perguntar quão apertado tem de ficar um parafuso.", // nieuw, nalezen
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Consigo dizer que há bolor numa planta.", // nieuw, nalezen
    'kjn.u.kweek.2': "Consigo perguntar se um tomate está maduro que chegue.", // nieuw, nalezen
    'kjn.u.carservice.1': "Consigo dizer que a luz de aviso está acesa.", // nieuw, nalezen
    'kjn.u.carservice.2': "Consigo perguntar quanto óleo tem de levar.", // nieuw, nalezen
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Consigo dizer que a relva está molhada demais.", // nieuw, nalezen
    'kjn.u.mowing.2': "Consigo perguntar que ramos têm de sair.", // nieuw, nalezen
    'kjn.u.planting.1': "Consigo dizer que há vidros partidos.", // nieuw, nalezen
    'kjn.u.planting.2': "Consigo perguntar se posso atravessar a estrada.", // nieuw, nalezen
    'kjn.u.frontdesk.1': "Consigo cumprimentar e ajudar um visitante.", // nieuw, nalezen
    'kjn.u.frontdesk.2': "Consigo perguntar para quem é uma encomenda.", // nieuw, nalezen
    'kjn.u.maintenance.1': "Consigo comunicar uma avaria.", // nieuw, nalezen
    'kjn.u.maintenance.2': "Consigo perguntar para onde tem de ir uma secretária.", // nieuw, nalezen
    'kjn.u.guarding.1': "Consigo pedir para ver a identificação de alguém.", // nieuw, nalezen
    'kjn.u.guarding.2': "Consigo dizer pelo rádio o que vejo.", // nieuw, nalezen
    'kjn.u.incidents.1': "Consigo ligar para o 112 e dizer o que se passa.", // nieuw, nalezen
    'kjn.u.incidents.2': "Consigo falar com calma com um cliente zangado.", // nieuw, nalezen
    'kjn.u.foodhygiene.1': "Consigo dizer que a câmara frigorífica está quente demais.", // nieuw, nalezen
    'kjn.u.foodhygiene.2': "Consigo perguntar se isto tem frutos secos.", // nieuw, nalezen
    'kjn.u.foodline.1': "Consigo dizer que a etiqueta não está certa.", // nieuw, nalezen
    'kjn.u.foodline.2': "Consigo perguntar quanto tem de ir numa caixinha.", // nieuw, nalezen
    'kjn.u.collection.1': "Consigo ajudar o motorista a fazer marcha-atrás.", // nieuw, nalezen
    'kjn.u.collection.2': "Consigo dizer que um contentor de lixo está pesado demais.", // nieuw, nalezen
    'kjn.u.recycling.1': "Consigo dizer a um visitante para onde vai o lixo dele.", // nieuw, nalezen
    'kjn.u.recycling.2': "Consigo dizer que a prensa está presa.", // nieuw, nalezen
    'kjn.u.toddlers.1': "Consigo dizer que vou mudar a fralda a uma criança.", // nieuw, nalezen
    'kjn.u.toddlers.2': "Consigo perguntar se uma criança já está a dormir.", // nieuw, nalezen
    'kjn.u.daycare.1': "Consigo contar a um pai ou a uma mãe como correu o dia.", // nieuw, nalezen
    'kjn.u.daycare.2': "Consigo perguntar quem vem buscar uma criança.", // nieuw, nalezen
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Consigo perguntar em que fase estou.", // nieuw, nalezen
    'kjn.u.uitzend.2': "Consigo perguntar para que é um desconto no meu salário.", // nieuw, nalezen
    'kjn.u.housekeeping.1': "Consigo dizer que uma sanita está entupida.", // nieuw, nalezen
    'kjn.u.housekeeping.2': "Consigo perguntar quanto produto vai no balde.", // nieuw, nalezen
    'kjn.u.cooking.1': "Consigo perguntar ao chefe como cortar uma coisa.", // nieuw, nalezen
    'kjn.u.cooking.2': "Consigo perguntar a um cliente se quer pagar em separado.", // nieuw, nalezen
    'kjn.u.carework.1': "Consigo perguntar a um cliente o que quer vestir.", // nieuw, nalezen
    'kjn.u.carework.2': "Consigo contar à enfermeira o que vi.", // nieuw, nalezen
    'kjn.u.shopfloor.1': "Consigo pedir o talão a um cliente.", // nieuw, nalezen
    'kjn.u.shopfloor.2': "Consigo dizer que a loja vai fechar daqui a pouco.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Consigo reconhecer algumas palavras sobre sinais de segurança e fogo.", // nieuw, nalezen
    'kjn.u.safework.2': "Consigo perguntar se um produto é tóxico.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Consigo dizer que a pressão está alta demais.", // nieuw, nalezen
    'kjn.u.process.2': "Consigo contar na passagem de turno o que aconteceu.", // nieuw, nalezen
  },
};

export default t;
