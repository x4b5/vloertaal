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
    'kjn.u.tools.1': "Consigo pedir a alguém que escreva ou me mostre.", // nieuw, nalezen
    'kjn.u.tools.2': "Consigo repetir uma tarefa para confirmar que percebi.", // nieuw, nalezen
    'kjn.u.tools.3': "Consigo dizer que quero praticar neerlandês.", // nieuw, nalezen
    'kjn.u.data.1': "Consigo soletrar o meu nome.", // nieuw, nalezen
    'kjn.u.data.2': "Consigo dizer em que dias posso trabalhar.", // nieuw, nalezen
    'kjn.u.data.3': "Consigo perceber uma data quando a ouço.", // nieuw, nalezen
    'kjn.u.sounds.1': "Consigo distinguir palavras como man e maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Consigo repetir frases curtas com sons difíceis.", // nieuw, nalezen
    'kjn.u.safety.1': "Consigo perceber um aviso como «Pas op!».", // nieuw, nalezen
    'kjn.u.safety.2': "Consigo comunicar um acidente.", // nieuw, nalezen
    'kjn.u.safety.3': "Consigo dizer que ainda não aprendi uma coisa.", // nieuw, nalezen
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
    'kjn.u.leave.2': "Consigo comunicar uma baixa por doença e o meu regresso.", // nieuw, nalezen
    'kjn.u.contact.1': "Consigo telefonar e dizer quem sou.", // nieuw, nalezen
    'kjn.u.contact.2': "Consigo pedir a alguém que me ligue de volta.", // nieuw, nalezen
    'kjn.u.contact.3': "Consigo escrever uma mensagem curta para o trabalho.", // nieuw, nalezen
    'kjn.u.house.1': "Consigo ler regras como «Roken verboden».", // nieuw, nalezen
    'kjn.u.house.2': "Consigo perguntar onde posso fumar.", // nieuw, nalezen
    'kjn.u.house.3': "Consigo dizer que uma coisa não é permitida.", // nieuw, nalezen
    'kjn.u.numbers.1': "Consigo perceber horas como «kwart over vier».", // nieuw, nalezen
    'kjn.u.numbers.2': "Consigo dizer quanto custa ou pesa uma coisa.", // nieuw, nalezen
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
  },
};

export default t;
