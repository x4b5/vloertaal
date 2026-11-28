import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Como funciona aqui',
    whatDoYouDo: 'O que fazes?',
    whatDoYouSay: 'O que dizes?',
    whatIsRight: 'O que está certo?',
    sayThis: 'Diz assim',
    goodChoice: 'Boa escolha!',
    otherChoice: 'Aqui costuma ser diferente',
    cultureTips: 'Dicas para o trabalho',
    cultureTipsHint: 'Como as coisas costumam ser num local de trabalho nos Países Baixos. Toca numa dica para a ler outra vez.',
  },
  gloss: {
    'c.je': '"Je" ou "u"?',
    'c.je.b': 'No trabalho, a maioria das pessoas trata-se por "je", muitas vezes também ao chefe. Se não tiveres a certeza, começa com "u" e ouve o que os outros fazem. Dizer "je" aqui não é falta de educação.',
    'c.je.p': 'Posso tratar-te por "je"?',
    'c.je.s': 'A tua nova chefe diz: "Zeg maar je, hoor!" O que quer ela dizer?',
    'c.je.o1': 'Ela quer que a trates por "je".',
    'c.je.o2': 'Ela pede-te para dizeres alguma coisa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.o3': 'Ela quer que fales com mais educação.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.w': '"Zeg maar je" é simpático: ela quer menos distância. Em muitos locais de trabalho nos Países Baixos é normal dizer "je" ao chefe.',
    'c.names': 'Nomes próprios e um aperto de mão',
    'c.names.b': 'No primeiro dia, dá um aperto de mão curto, olha para a pessoa e diz o teu primeiro nome. Os colegas e os chefes costumam tratar-se pelo primeiro nome.',
    'c.names.p': { m: 'Olá, sou Ali. Sou novo aqui.', f: 'Olá, sou Ali. Sou nova aqui.', x: 'Olá, sou Ali. Comecei há pouco tempo aqui.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.names.s': 'Um colega vem ter contigo: "Hoi, ik ben Mark." O que fazes?',
    'c.names.o1': 'Dás-lhe a mão e dizes o teu nome.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o2': 'Acenas com a cabeça, sorris e esperas que te façam perguntas.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o3': 'Dás-lhe a mão e chamas-lhe "meneer" (senhor).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.w': 'Apresentares-te com o primeiro nome é o começo normal. Ajuda os colegas a lembrarem-se de ti e a convidarem-te.',
    'c.arrive': 'O teu primeiro dia: aonde ir',
    'c.arrive.b': 'No primeiro dia, vai primeiro à receção ou à entrada principal. Diz o teu nome, a tua agência (se trabalhares através de uma) e com quem tens de falar. Muitas empresas dão-te um buddy: podes perguntar-lhe tudo.',
    'c.arrive.p': 'Bom dia, sou o Ali. Começo hoje. Com quem tenho de falar?',
    'c.arrive.s': 'São 6:45 do teu primeiro dia. O portão está fechado. Há um intercomunicador. O que fazes?',
    'c.arrive.o1': 'Tocas, dizes o teu nome e que começas hoje.',
    'c.arrive.o2': 'Esperas no portão até alguém sair.',
    'c.arrive.o3': 'Dás a volta ao edifício à procura de outra porta.',
    'c.arrive.w': 'O intercomunicador existe para visitantes e trabalhadores novos. Quando dizes quem és, podem chamar a pessoa certa.',
    'c.ask': 'Fazer perguntas é bom',
    'c.ask.b': 'Fazer uma pergunta mostra que queres fazer bem o trabalho. Acenar com a cabeça quando não percebes pode levar a erros ou acidentes. Perguntar outra vez é completamente normal.',
    'c.ask.p': 'Desculpa, não percebo. Podes explicar outra vez?',
    'c.ask.s': 'O teu chefe explica uma tarefa muito depressa. Não percebeste. O que fazes?',
    'c.ask.o1': 'Pedes para te explicarem outra vez.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.o2': 'Acenas com a cabeça e tentas adivinhar.',
    'c.ask.o3': 'Pedes desculpa pelo teu neerlandês e começas a trabalhar.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.w': 'Aqui, os chefes esperam perguntas. É melhor perguntar duas vezes do que cometer um erro.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear': 'As regras de segurança são para todos',
    'c.gear.b': 'As regras sobre capacetes, sapatos e luvas não são uma sugestão: toda a gente as cumpre, também o chefe. O teu empregador tem de te dar o equipamento de proteção de que precisas, de graça. Equipamento que não serve não te protege bem. Por isso, pede o teu tamanho: "Heb je dit ook in mijn maat?"',
    'c.gear.p': 'As minhas luvas estão estragadas. Onde arranjo umas novas?',
    'c.gear.s': 'As tuas luvas estão rasgadas. O que fazes?',
    'c.gear.o1': 'Pedes luvas novas ao teu chefe.',
    'c.gear.o2': 'Continuas a trabalhar sem luvas.',
    'c.gear.o3': 'Compras luvas novas com o teu dinheiro, sem dizer nada.',
    'c.gear.w': 'O equipamento de proteção é responsabilidade do empregador. Pedi-lo é normal e mostra que levas a segurança a sério.',
    'c.unsafe': 'Diz quando não é seguro',
    'c.unsafe.b': 'Se alguma coisa é perigosa, diz logo, também ao teu chefe. Podes parar um trabalho que é mesmo perigoso. Comunica os acidentes e os quase-acidentes, mesmo os pequenos.',
    'c.unsafe.p': 'Para! Isto não é seguro.',
    'c.unsafe.s': 'Uma palete está empilhada alta demais e quase cai. Ninguém se magoou. O que fazes?',
    'c.unsafe.o1': 'Avisas os colegas e dizes ao teu chefe.',
    'c.unsafe.o2': 'Não dizes nada, porque não aconteceu nada.',
    'c.unsafe.o3': { m: 'Arrumas a palete sozinho e não dizes a ninguém.', f: 'Arrumas a palete sozinha e não dizes a ninguém.', x: 'Arrumas a palete por tua conta e não dizes a ninguém.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.unsafe.w': 'Um quase-acidente é um aviso. Comunicá-lo ajuda a evitar um acidente a sério. O teu empregador não te pode castigar por o comunicares.',
    'c.alarm': 'O alarme toca: para e sai lá para fora', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.b': 'No primeiro dia, pergunta onde ficam as saídas de emergência e o ponto de encontro. Quando o alarme tocar, para logo de trabalhar. Deixa as tuas coisas e sai pelo caminho de evacuação. Vai pelas escadas, nunca pelo elevador. No ponto de encontro contam quem está lá fora, por isso fica lá. Sai também quando achas que é só um simulacro.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.p': { m: 'Sou novo. Onde é o ponto de encontro?', f: 'Sou nova. Onde é o ponto de encontro?', x: 'Comecei há pouco tempo. Onde é o ponto de encontro?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.s': 'O alarme de incêndio toca. Estás quase a acabar uma encomenda. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o1': 'Paras logo e vais a pé até ao ponto de encontro.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o2': 'Primeiro acabas a encomenda, depois sais.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o3': 'Primeiro vais buscar o casaco e o telemóvel ao cacifo.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.w': 'O fumo espalha-se depressa, por isso sais logo. As tuas coisas podem esperar. No ponto de encontro contam toda a gente: assim ninguém tem de te procurar lá dentro.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident': 'Comunica todos os acidentes',
    'c.accident.b': 'Conta ao teu chefe ou ao BHV’er (o socorrista da empresa) todos os acidentes, também os pequenos. Trabalhas através de uma agência? Avisa também a agência. Numa emergência, liga primeiro para o 112. A empresa onde o acidente aconteceu tem de comunicar um acidente grave à Nederlandse Arbeidsinspectie (também se trabalhas através de uma agência): quando alguém morre, fica com lesões para a vida ou tem de ficar no hospital. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.accident.p': 'O meu colega está ferido. Onde está o BHV’er?',
    'c.accident.s': 'Magoaste as costas a levantar um peso. Tens medo de perder o emprego. O que fazes?',
    'c.accident.o1': 'Comunicas ao teu chefe no mesmo dia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.accident.o2': 'Não dizes nada, para não perderes o emprego.',
    'c.accident.o3': 'Esperas para ver se a dor passa sozinha.',
    'c.accident.w': 'Comunica no mesmo dia, mesmo que pareça pouca coisa: a dor pode piorar mais tarde. O teu empregador não te pode castigar por o comunicares. Trabalhas através de uma agência? Diz também à agência.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.notyet': 'Ainda não aprendeste? Diz isso',
    'c.notyet.b': 'A empresa onde trabalhas tem de te explicar como fazer o teu trabalho com segurança. Não uses uma máquina ou um empilhador que ninguém te ensinou a usar. Dizer "Dit heb ik nog niet geleerd" é normal aqui: mostra que trabalhas com segurança.',
    'c.notyet.p': 'Isto ainda não aprendi. Podes mostrar-me como se faz?',
    'c.notyet.s': 'Uma manhã com muito trabalho. O teu chefe diz: "Pak jij even de heftruck? Het is makkelijk." Nunca conduziste um empilhador. O que fazes?',
    'c.notyet.o1': 'Dizes que ainda não aprendeste. Pedes formação.',
    'c.notyet.o2': 'Conduzes devagar e com cuidado, só desta vez.',
    'c.notyet.o3': 'Dizes "ja" e esperas que corra bem.',
    'c.notyet.w': 'Um empilhador sem formação é perigoso, para ti e para os outros. Pedir formação ou outro trabalho é normal, também quando há muito trabalho.',
    'c.direct': 'Direto não é mal-educado',
    'c.direct.b': 'Os colegas nos Países Baixos dizem muitas vezes as coisas de forma muito direta, como "Dat is fout" ou "Doe het zo". Normalmente não o fazem por mal. Tu também podes falar de forma direta, desde que fales com simpatia.',
    'c.direct.p': 'Está bem, então como se faz?',
    'c.direct.s': 'Um colega diz: "Nee, dat is fout. Die doos moet daar." O que fazes?',
    'c.direct.o1': 'Perguntas como se faz e mudas a caixa de sítio.',
    'c.direct.o2': 'Pedes desculpa muitas vezes: o teu colega está zangado.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.direct.o3': 'Não dizes nada e deixas a caixa onde está.',
    'c.direct.w': 'O feedback direto é sobre o trabalho, não sobre ti. Perguntar "hoe moet het dan?" mostra que queres aprender.',
    'c.limits': 'Diz quando é pesado demais',
    'c.limits.b': 'Ninguém espera que levantes tudo sem ajuda. Dizer "dit is te zwaar" e pedir ajuda ou uma ferramenta é inteligente, não é fraqueza. Protege as tuas costas.',
    'c.limits.p': 'Esta caixa é pesada demais. Podes ajudar um momento?',
    'c.limits.s': 'Tens de levantar uma caixa que é pesada demais para ti. O que fazes?',
    'c.limits.o1': 'Pedes ajuda a um colega ou usas um carrinho.',
    'c.limits.o2': { m: 'Levantas na mesma, para ninguém pensar que és fraco.', f: 'Levantas na mesma, para ninguém pensar que és fraca.', x: 'Levantas na mesma, para ninguém pensar que te falta força.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.limits.o3': 'Deixas a caixa ali e não dizes nada.',
    'c.limits.w': 'Pedir ajuda é trabalho de equipa normal. Umas costas magoadas custam muito mais do que um minuto de ajuda.',
    'c.time': 'A horas quer dizer um pouco antes',
    'c.time.b': 'Chegar a horas é muito importante. Muitas pessoas chegam cinco ou dez minutos antes de o turno começar. Se vais chegar tarde, manda uma mensagem ou liga antes de o turno começar, não depois.',
    'c.time.p': 'Desculpa, o autocarro está atrasado. Chego às oito.',
    'c.time.s': 'O teu autocarro está atrasado e vais chegar 15 minutos tarde. O que fazes?',
    'c.time.o1': 'Avisas logo o teu chefe.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.time.o2': 'Explicas quando chegares.',
    'c.time.o3': 'Hoje não vais trabalhar.',
    'c.time.w': 'Avisar cedo deixa a equipa organizar-se. Chegar atrasado sem avisar é visto como muito pior do que o atraso em si.',
    'c.sick': 'Como avisar que estás doente',
    'c.sick.b': 'Liga tu ao teu chefe, antes de o turno começar, a não ser que a tua empresa tenha outra regra. Trabalhas através de uma agência? Avisa também a agência. Não tens de dizer que doença tens. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'c.sick.p': 'Estou doente. Hoje não posso vir trabalhar.',
    'c.sick.s': 'Acordas com febre. O teu turno começa às 7:00. O que fazes?',
    'c.sick.o1': 'Ligas ao teu chefe antes das 7:00.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.sick.o2': 'Pedes a um colega que diga ao chefe mais tarde.',
    'c.sick.o3': 'Ficas em casa e ligas amanhã.',
    'c.sick.w': 'Na maioria dos locais de trabalho nos Países Baixos, a regra é seres tu a avisar, e a tempo. O teu empregador pode perguntar quanto tempo vai demorar, mas não que doença é.',
    'c.speakup': 'Diz o que te incomoda',
    'c.speakup.b': 'Aqui é normal e respeitado dizer com calma quando alguma coisa te incomoda. Fala primeiro com a pessoa, num momento calmo. Usa frases com "ik": "Ik vind het niet fijn dat ...". Se não ajudar, fala com o teu chefe.',
    'c.speakup.p': 'Há uma coisa que me incomoda. Podemos falar um momento?',
    'c.speakup.s': 'Um colega deixa sempre o trabalho pesado para ti. Isso incomoda-te. O que fazes?',
    'c.speakup.o1': 'Dizes ao colega o que te incomoda.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.speakup.o2': { m: 'Ficas calado e cada vez mais zangado.', f: 'Ficas calada e cada vez mais zangada.', x: 'Não dizes nada e a tua raiva vai crescendo.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.speakup.o3': 'Queixas-te dele a todos os outros colegas.',
    'c.speakup.w': 'Os colegas nos Países Baixos costumam preferir ouvir as coisas diretamente. Dizer cedo e com calma mantém a boa relação.',
    'c.no': '"Afspraak is afspraak"',
    'c.no.b': 'Quando dizes "ja", contam com isso: o combinado é o combinado. Por isso não faz mal dizer "nee" ou "dat lukt niet" quando não podes fazer alguma coisa. Diz a tempo e, se puderes, propõe outra opção.',
    'c.no.p': 'Não, hoje não dá. Amanhã já posso.',
    'c.no.s': 'O teu chefe pergunta se podes trabalhar mais no sábado. Não podes. O que fazes?',
    'c.no.o1': 'Dizes que não e propões outro dia.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.o2': 'Dizes que sim e depois não vais.',
    'c.no.o3': 'Dizes que sim: a um chefe não se pode dizer que não.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.w': 'Um "nee" claro é respeitado. Dizer "ja" e não aparecer quebra muito mais a confiança.',
    'c.task': 'Diz quando está feito, pergunta quando não está claro',
    'c.task.b': 'Nos Países Baixos, um chefe dá muitas vezes uma tarefa em poucas palavras. Quando estiver feita, tu dizes. Dizer "ja" quando não percebeste leva muitas vezes a erros. Perguntar outra vez, ou pedir que te mostrem, é normal aqui e não é falta de educação.',
    'c.task.p': 'Pronto! O que tenho de fazer agora?',
    'c.task.s': 'O teu chefe explica uma tarefa muito depressa. Só percebeste metade. O que fazes?',
    'c.task.o1': 'Pedes para ver outra vez.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o2': 'Começas pela metade que percebeste.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o3': 'Esperas até um colega o fazer.',
    'c.task.w': 'Perguntar outra vez é normal e demora um minuto. Corrigir um erro demora muito mais. A maioria dos chefes prefere mostrar duas vezes.',
    'c.clear': 'Diz primeiro o mais importante', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.b': 'Em muitas línguas é educado contar primeiro a história toda, e o essencial no fim. No trabalho aqui é ao contrário. Primeiro diz o que está mal ou do que precisas. Depois dá o motivo. Fala com calma e para depois de duas ou três frases, para a outra pessoa poder perguntar alguma coisa. Também numa entrevista de emprego: primeiro a resposta, depois um exemplo. Falar devagar não é falta de educação aqui: ajuda as pessoas a perceberem-te.',
    'c.clear.p': 'Desculpa, digo outra vez com calma.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.s': 'Chegas com 20 minutos de atraso. O teu chefe pergunta: "Wat is er?" O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o1': 'Primeiro dizes que chegaste tarde e pedes desculpa. Depois dizes porquê.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o2': 'Contas tudo o que aconteceu esta manhã, desde o início.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o3': 'Não dizes nada e começas logo a trabalhar.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.w': 'O teu chefe quer saber primeiro o que se passa. O motivo vem depois. Curto e calmo é claro, e aqui também é educado.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.teamwork': 'Trabalhar em equipa',
    'l.speakup': 'Uma coisa incomoda-me',
    'w.probleem': 'o problema',
    'w.praten': 'falar, conversar',
    'w.nietfijn': 'não é agradável',
    'w.eerlijk': 'justo, honesto',
    'w.boos': 'zangado',
    'w.samen': 'juntos',
    's.speakup.1': 'Há uma coisa que me incomoda.',
    's.speakup.2': 'Podemos falar um momento?',
    's.speakup.3': 'Acho que isso não é justo.',
    'd.speakup.q': 'Passa-se alguma coisa?',
    'd.speakup.a': 'Sim, há uma coisa que me incomoda.',
    'l.agree': 'Combinados e dizer que não',
    'w.afspraak': 'o combinado, o acordo',
    'w.lukken': 'conseguir, correr bem',
    'w.oneens': 'não concordar',
    'w.zaterdag': 'sábado',
    'w.overwerken': 'fazer horas extra',
    'w.misschien': 'talvez',
    's.agree.1': 'Não, hoje não dá.',
    's.agree.2': 'Não concordo contigo.',
    's.agree.3': 'O combinado é o combinado.',
    'd.agree.q': 'Podes fazer horas extra no sábado?',
    'd.agree.a': 'Não, não dá. No domingo posso.',
    'l.task': 'Instruções do teu chefe',
    'w.taak': 'a tarefa',
    'w.eerst': 'primeiro',
    'w.daarna': 'depois',
    'w.afmaken': 'acabar, terminar',
    'w.snel': 'rápido, depressa',
    'w.bijna': 'quase',
    's.task.1': 'O que tenho de fazer primeiro?',
    's.task.2': 'Acabei esta tarefa.',
    's.task.3': 'Pode mostrar outra vez?',
    'd.task.q': 'Já acabaste?',
    'd.task.a': 'Quase. Mais cinco minutos.',
    'l.clear': 'Curto e claro', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kort': 'curto, breve', // nieuw, nalezen // nagelezen AI 28 nov
    'w.duidelijk': 'claro', // nieuw, nalezen // nagelezen AI 28 nov
    'w.belangrijkste': 'o mais importante', // nieuw, nalezen // nagelezen AI 28 nov
    'w.rustig': 'calmo, com calma', // nieuw, nalezen // nagelezen AI 28 nov
    'w.teveel': 'demasiado', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vraag': 'a pergunta', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.1': 'Vou ser breve: a máquina está avariada.', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.2': 'Primeiro o mais importante: estou doente.', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.3': 'Desculpa, falo demasiado depressa e demasiado.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.q': 'Está claro?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.a': 'Sim. Tenho mais uma pergunta.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.newcolleague': "Ajudar um colega novo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.welkom': "bem-vindo", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inwerken': "ensinar o trabalho a um colega novo (nos primeiros dias)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stap': "o passo (uma pequena parte de uma tarefa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadoen': "imitar (fazer o que alguém te mostrou)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geduld': "a paciência", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kast': "o armário", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.1': "Bem-vindo! Hoje mostro-te o trabalho.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.2': "Primeiro observa. Depois fazes igual.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.3': "As luvas estão naquele armário.", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.q': "Acho que percebi.", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.a': "Boa. Mostra lá.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newcolleague': "Mostra, passo a passo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.b': "O que foi difícil para ti nas primeiras semanas também é difícil para um colega novo. Explica o trabalho em passos pequenos: primeiro isto, depois aquilo. Não fales mais depressa nem mais alto: mostra, e deixa-o fazer a seguir a ti. Não perguntes \"Snap je het?\": muitas pessoas dizem que sim, mesmo quando não percebem. Diz antes \"Laat eens zien\", e observa. Diz-lhe onde estão as coisas, como a casa de banho, a cantina e as luvas. Tem paciência (geduld): aprender leva tempo, para toda a gente.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.p': "Muito bem! Agora o passo seguinte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.s': "Explicas uma tarefa a um colega novo. Ele diz: \"Ja, ja, ik snap het.\" O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o1': "Dizes \"Laat eens zien,\" e vês como ele faz.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o2': "Dizes \"Goed zo,\" e voltas ao teu trabalho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o3': "Explicas tudo outra vez, mais depressa e mais alto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.w': "Muitas pessoas dizem \"ja\", mesmo quando não perceberam. Quando ele mostra, os dois veem se funciona. Isso é mais rápido do que corrigir um erro mais tarde.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.communicate': 'Comunicar bem', // nieuw, nalezen // nagelezen AI 28 nov
    'l.explain': 'Dizer o que está mal', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ietsmis': 'há alguma coisa mal', // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstaan': 'estar parado, ter parado (uma máquina, um tapete rolante)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.lampje': 'a luz (de aviso)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.komen': 'vir', // nieuw, nalezen // nagelezen AI 28 nov
    'w.nodighebben': 'precisar de', // nieuw, nalezen // nagelezen AI 28 nov
    'w.meteen': 'já, imediatamente', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.1': 'O tapete parou. Na linha dois. Podes vir?', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.2': 'Há uma luz vermelha acesa na máquina.', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.3': 'É perigoso. Podes vir já?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.q': 'O que é que está mal?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.a': 'O scanner não funciona. Preciso de um novo.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.listen': 'Ouvir bem', // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpraten': 'acabar de falar (deixar alguém acabar)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreken': 'interromper', // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankijken': 'olhar para (alguém)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedoelen': 'querer dizer', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dus': 'então (para confirmar o que ouviste)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorvragen': 'continuar a perguntar (até ficar claro)', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.1': 'Então primeiro contar as caixas, e depois embalar?', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.2': 'O que queres dizer com essa palavra?', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.3': 'Desculpa, acaba de falar.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.q': 'Amanhã já começas às quatro.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.a': 'A sério? Ou era uma piada?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.calm': 'Manter a calma', // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadenken': 'pensar (em alguma coisa)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademhalen': 'respirar', // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossen': 'resolver', // nieuw, nalezen // nagelezen AI 28 nov
    'w.druk': 'com muito trabalho (muito para fazer)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.straks': 'mais logo (hoje), daqui a pouco', // nieuw, nalezen // nagelezen AI 28 nov
    'w.misverstand': 'o mal-entendido', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.1': 'Quero resolver isto com calma.', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.2': 'Posso pensar um momento?', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.3': 'Podemos falar mais logo?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.q': 'Porque é que isto ainda não está feito?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.a': 'Desculpa, há muito trabalho. O que vem primeiro?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.talkintime': 'Falar sobre isso a tempo', // nieuw, nalezen // nagelezen AI 28 nov
    'w.gesprek': 'a conversa', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bespreken': 'falar sobre, discutir', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgenmaken': 'preocupar-se', // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossing': 'a solução', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ineens': 'de repente', // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegblijven': 'faltar (não ir trabalhar)', // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.1': 'Há uma coisa que me incomoda. Tens um momento?', // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.2': 'Quero falar contigo sobre uma coisa.', // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.3': 'Estou a pensar em sair. Podemos falar primeiro?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.q': 'Tens um momento? Há uma coisa que me incomoda.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.a': 'Claro. O que se passa?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.reachable': 'Estar contactável', // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnemen': 'atender (o telefone)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemisteoproep': 'a chamada perdida', // nieuw, nalezen // nagelezen AI 28 nov
    'w.voicemail': 'o correio de voz', // nieuw, nalezen // nagelezen AI 28 nov
    'w.beltegoed': 'o saldo do telemóvel (pré-pago)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bereik': 'a rede (no telemóvel)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.onbekend': 'desconhecido (um número desconhecido)', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.1': 'O meu neerlandês ainda não é bom. Pode falar devagar?', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.2': 'Pode mandar também por mensagem?', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.3': 'Tenho um número novo.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.q': 'Bom dia, daqui fala o planeamento.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.a': 'Bom dia. Ligou-me? Desculpe, não consegui atender.', // nieuw, nalezen // nagelezen AI 28 nov
    'c.explain': 'O quê, onde, e do que precisas', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.b': 'Quando alguma coisa está mal no trabalho, diz em três passos. Primeiro o que está mal: "De band staat stil." Depois onde: "Bij lijn twee." Depois do que precisas: "Kun je komen?" Assim a outra pessoa sabe o que fazer, sem muitas perguntas. Não sabes a palavra? Aponta para a coisa. É perigoso? Diz isso primeiro: "Het is gevaarlijk." Um acidente? Primeiro pede ajuda (mais na lição "Comunicar um acidente").', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.p': 'Podes vir ver?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.s': 'O scanner do teu posto deixa de funcionar. Ligas ao teu chefe de equipa. O que dizes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o1': '"De scanner is kapot. Bij gang vier. Kun je komen?"', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o2': '"Hallo, ik heb een probleem." Depois esperas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o3': '"Sorry, sorry! Het is niet mijn schuld!"', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.w': 'Agora o teu chefe de equipa sabe o que está mal, onde é, e do que precisas. Ninguém tem de fazer primeiro três perguntas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen': 'Primeiro ouve, depois confirma', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.b': 'Deixa a outra pessoa acabar de falar (uitpraten) antes de responderes. Olha para a pessoa que fala contigo: aqui, isso mostra que estás a ouvir. Em muitos países não se olha o chefe nos olhos. É um sinal de respeito. Aqui, olhar de vez em quando é educado. Quando a outra pessoa acabar, repete o que ouviste: "Dus eerst …, en dan …?" Não sabes bem o que quer dizer uma palavra? Pergunta: "Wat bedoel je met …?" Alguns colegas fazem piadas com a cara séria. Tens dúvidas? Pergunta: "Was dat een grapje?"',
    'c.listen.p': 'Espera, quero perceber bem.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.s': 'A tua chefe explica uma tarefa nova. Queres dizer uma coisa, mas ela ainda está a falar. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o1': 'Deixas que ela acabe. Depois repetes o que ouviste.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o2': 'Começas logo a falar, para não te esqueceres.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o3': 'Dizes que sim a tudo e não perguntas nada.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.w': 'Quando ela acaba, conheces a tarefa toda. Repetir mostra que ouviste, e ela ainda te pode corrigir.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm': 'Mantém a calma, também quando é difícil', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.b': 'Toda a gente se zanga às vezes, também no trabalho. Alguém está zangado contigo? Primeiro ouve, e mantém a calma. Não tens de responder logo: "Mag ik even nadenken?" Sentes que te estás a irritar? Respira devagar, e diz: "Kunnen we straks praten?" Depois conversem, quando a calma voltar. Muito trabalho? Pergunta o que tem de ser feito primeiro. Gritar, ameaçar ou empurrar nunca está bem no trabalho. Diz para parar, e avisa o teu chefe (mais nas lições "Respeito por todos" e "Passar dos limites").', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.p': 'Acho que é um mal-entendido.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.s': 'Um colega está zangado: a palete está no sítio errado. Achas que não foste tu. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o1': 'Manténs a calma, ouves, e depois dizes o que sabes.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o2': 'Também te zangas, e falas mais alto.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o3': 'Vais embora e deixas de falar com ele.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.w': 'Quando manténs a calma, a outra pessoa muitas vezes também se acalma. Assim podem descobrir o que aconteceu, e resolver isso em conjunto.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime': 'Fala sobre isso enquanto é pequeno', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.b': 'Um problema pequeno fica grande se não falares sobre ele. Depois, de repente, zangas-te, ou de repente vais-te embora. Fala a tempo: com o teu chefe, com um colega ou com a pessoa de confiança (vertrouwenspersoon), se houver uma. Pede um momento: "Heb je even tijd?" Diz em poucas palavras qual é o problema e o que queres. Estás a pensar em despedir-te? Fala primeiro. Muitas vezes há uma solução, como outro turno ou outra tarefa. Se te despedires tu, podes perder o teu subsídio (uitkering), e muitas vezes há um prazo de aviso prévio (opzegtermijn). Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.p': 'Podemos procurar uma solução em conjunto?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.s': 'Há semanas que o teu horário é um problema. Hoje estás com raiva e queres sair já. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o1': 'Primeiro pedes uma conversa ao teu chefe.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o2': 'Vais-te embora agora e não voltas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o3': 'Não dizes nada e continuas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.w': 'Falar a tempo mantém um problema pequeno. Muitas vezes há uma solução, e assim muitas vezes ficas com o teu emprego e o teu rendimento.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable': 'Atende, ou liga de volta no mesmo dia', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.b': 'As agências e os empregadores ligam muitas vezes quando há trabalho. Muitas vezes, quem atende primeiro, ou liga de volta primeiro, fica com o trabalho. Perdeste uma chamada? Liga de volta no mesmo dia. Não tens o telemóvel no trabalho? Liga de volta na pausa. Ouve o teu correio de voz, e tem algum saldo (beltegoed) no telemóvel. Custa-te perceber ao telefone? Diz isso, e pede: "Kunt u het ook appen?" Alguém te pede dinheiro ou códigos? Desliga (mais na lição "Cuidado com as burlas"). Um número novo? Dá-o ao teu trabalho, à agência e ao município (gemeente).', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.p': 'Ligo-lhe de volta na minha pausa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.s': 'Na tua pausa vês uma chamada perdida da agência. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o1': 'Ligas de volta agora, na pausa.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o2': 'Esperas até te ligarem outra vez.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o3': 'Ligas de volta na próxima semana, quando estiveres livre.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.w': 'As agências ligam muitas vezes quando há trabalho. Quando ligas de volta no mesmo dia, mostras que o queres, e talvez fiques com o trabalho.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.feedback': 'Feedback e reuniões de equipa', // nieuw, nalezen // nagelezen AI 28 nov
    'l.getfeedback': 'Receber feedback', // nieuw, nalezen // nagelezen AI 28 nov
    'w.tip': 'a dica (um conselho curto)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbeterpunt': 'o ponto a melhorar (o que pode ser melhor)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedbedoeld': 'bem-intencionado (para te ajudar)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kritiek': 'a crítica (o que alguém acha que não está bom)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.normaal': 'normal', // nieuw, nalezen // nagelezen AI 28 nov
    'w.positief': 'positivo (sobre o que corre bem)', // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.1': { m: 'Obrigado, é bom saber.', f: 'Obrigada, é bom saber.', x: 'Agradeço, é bom saber.' }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.getfeedback.2': 'Podes dar um exemplo?', // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.3': 'O que posso fazer melhor?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.q': 'Posso dar-te algum feedback?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.a': 'Sim, por favor. Quero fazer bem.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.givefeedback': 'Dar feedback', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtplakken': 'fechar com fita-cola', // nieuw, nalezen // nagelezen AI 28 nov
    'w.netjes': 'arrumado, bem feito', // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheef': 'torto, não direito', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriendelijk': 'simpático, amável', // nieuw, nalezen // nagelezen AI 28 nov
    'w.concreet': 'concreto (com um exemplo claro)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondervierogen': 'a sós (só vocês os dois)', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.1': 'Fazes isso bem.', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.2': 'Podes também fechar as caixas com fita-cola?', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.3': 'Vejo que as caixas estão tortas.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.q': 'O que achas do meu trabalho?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.a': 'Bem arrumado! Só as caixas estão tortas.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.meeting': 'Falar numa reunião de equipa', // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkoverleg': 'a reunião de equipa (sobre o trabalho)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.beurt': 'a vez (o teu momento de falar)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.idee': 'a ideia', // nieuw, nalezen // nagelezen AI 28 nov
    'w.mening': 'a opinião (o que pensas sobre isso)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.handopsteken': 'levantar a mão', // nieuw, nalezen // nagelezen AI 28 nov
    'w.agenda': 'a ordem de trabalhos (a lista de pontos da reunião)', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.1': 'Posso dizer uma coisa?', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.2': 'Tenho uma pergunta sobre o horário.', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.3': 'Tenho uma ideia.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.q': 'Alguém tem alguma pergunta?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.a': 'Sim. Quando sai o novo horário?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.getfeedback': 'O feedback é sobre o teu trabalho', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.b': 'O feedback é o que alguém diz sobre o teu trabalho: o que corre bem, e o que pode ser melhor. É sobre o teu trabalho, não sobre ti. Aqui, no trabalho, o feedback é normal e serve para ajudar. Não é claro o que deves fazer de outra forma? Pede um exemplo. Primeiro ouve, e não te defendas logo. Depois agradece, e experimenta. Também podes pedir feedback tu: "Wat kan ik beter doen?"', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.p': { m: 'Obrigado. Podes dar um exemplo?', f: 'Obrigada. Podes dar um exemplo?', x: 'Agradeço. Podes dar um exemplo?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.s': 'A tua chefe olha para o teu trabalho e diz: "Dit kan beter." Não sabes o que ela quer dizer. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o1': 'Agradeces, e pedes um exemplo.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o2': 'Dizes que fizeste mesmo o teu melhor.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o3': 'Dizes que sim com a cabeça, e fazes igual outra vez.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.w': 'O feedback serve para te ajudar. Um exemplo mostra o que ela quer. E um "obrigado" mostra que ouves.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback': 'Dar feedback: primeiro a parte boa', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.b': 'Queres dizer alguma coisa sobre o trabalho de um colega? Primeiro diz o que corre bem. Depois diz com simpatia e clareza o que pode ser melhor, com um exemplo. Diz isso num bom momento, a essa pessoa a sós, não quando estão todos. Diz o que vês, não o que pensas da pessoa: "Ik zie dat ...". Mantém a simpatia: queres ajudar, não ganhar.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.p': 'Fazes isso bem. Podes também fechar as caixas com fita-cola?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.s': 'Um colega novo esquece-se de fechar as caixas com fita-cola. Estão todos na cantina. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o1': 'Mais tarde, a sós: primeiro o que corre bem, depois as caixas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o2': 'Dizes-lhe à frente de todos que está mal.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o3': 'Não dizes nada, e fechas tu as caixas dele.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.w': 'A sós, ele pode ouvir sem ficar envergonhado. Quando primeiro dizes o que corre bem, ele ouve melhor o resto.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting': 'A tua voz conta na reunião', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.b': 'Muitas equipas têm uma reunião curta sobre o trabalho (het werkoverleg). Lá a tua opinião é bem-vinda, também quando o teu neerlandês não é perfeito. Uma pergunta também é um bom contributo: talvez outros também queiram saber. Espera pela tua vez, e deixa a outra pessoa acabar. Depois levanta a mão, ou diz: "Mag ik iets zeggen?" Não tens coragem de dizer isso no grupo? Diz ao teu chefe depois da reunião.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.p': 'Posso dizer uma coisa? Tenho uma ideia.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.s': 'Na reunião de equipa, a tua chefe explica o novo horário. Não percebes quando começa o teu turno. O que fazes?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o1': 'Quando ela parar de falar, fazes a tua pergunta.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o2': 'Não dizes nada, para não perder tempo.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o3': 'Perguntas logo, enquanto ela ainda está a falar.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.w': 'Uma pergunta é um bom contributo: talvez outros também não tenham percebido. Quando esperas pela tua vez, todos podem ouvir.', // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Falta um artigo? Diz", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.b': "O lugar está vazio, ou o artigo não está lá? Não leves outro artigo que parece igual: assim o cliente recebe a coisa errada. Diz ao teu chefe de equipa, ou regista isso no scanner. Vê o número no autocolante, não só a cor ou a imagem. Trabalhar com exatidão é mais importante do que trabalhar depressa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.p': "Este artigo falta. O que tenho de fazer?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.s': "O lugar está vazio. No lugar ao lado há um artigo que parece quase igual. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o1': "Avisas que o artigo falta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o2': "Levas o outro artigo: parece igual.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o3': "Saltas o artigo e não dizes nada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.w': "Um artigo errado volta para trás, e isso custa mais tempo do que perguntar. Quando avisas, alguém pode encher o lugar ou mudar o pedido.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading': "Nunca atrás de um camião em marcha-atrás", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.b': "O motorista não consegue ver tudo atrás do camião. Nunca passes atrás de um camião que anda de marcha-atrás, e não fiques entre o camião e a porta. Espera até o camião estar parado e o motorista te ter visto. Falta uma palete, ou está estragada, quando descarregas? Diz antes de o motorista se ir embora.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.p': "Espera um momento. O camião está a andar de marcha-atrás.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.s': "Um camião anda de marcha-atrás até à porta. Queres atravessar depressa por trás dele. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o1': "Esperas até o camião estar parado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o2': { m: "Passas a correr por trás: és rápido o suficiente.", f: "Passas a correr por trás: és rápida o suficiente.", x: "Passas a correr por trás: consegues passar a tempo." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o3': "Passas por trás e acenas ao motorista.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.w': "Atrás de um camião há um sítio que o motorista não consegue ver. Esperar custa um minuto. Um acidente ali é muito grave.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Confirma se fazes bem", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.b': "Não tens a certeza de como se faz uma tarefa? Pergunta como, ou pede a um colega para ver o teu trabalho um momento. Confirmar é normal aqui, também depois de uma semana ou de um mês. Adivinhar custa mais tempo do que perguntar: se há um erro, tens de fazer outra vez. \"Doe ik het zo goed?\" é uma pergunta que os colegas gostam de ouvir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.p': "Podes ver um momento se está bem?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.s': "Fazes uma tarefa nova. Não tens a certeza de que a fazes bem. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o1': "Pedes a um colega para ver.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o2': "Continuas: talvez esteja bem.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o3': "Paras e esperas até vir alguém.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.w': "Um olhar rápido de um colega poupa muito trabalho depois. E aprendes a tarefa mais depressa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask': "O momento certo para perguntar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.b': "É sobre segurança, ou alguma coisa pode correr mal agora mesmo? Pergunta logo, também quando o teu colega está ocupado. Não é urgente? Espera até o teu colega acabar, e depois pergunta: \"Heb je even tijd?\" Tens muitas perguntas pequenas? Escreve-as e faz todas juntas. Ninguém acha uma pergunta chata. Um erro custa mais tempo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.p': "Desculpa incomodar. Tens um momento?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.s': "O teu colega está ao telefone. Tens uma pergunta que não é urgente. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o1': "Esperas até a chamada acabar e depois perguntas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o2': "Perguntas agora: uma pergunta é sempre boa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o3': "Não perguntas: o teu colega está ocupado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.w': "Esperar um momento mostra respeito, e recebes a tua resposta na mesma. Só o perigo não pode esperar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis': "Perdeste-te? Pergunta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.b': "Um local de trabalho novo é grande, e muitas portas parecem iguais. Ninguém espera que encontres tudo depois de um dia. Não consegues encontrar uma sala, uma ferramenta ou uma pessoa? Pergunta ao primeiro colega que vires. Muitos colegas vão contigo, ou apontam o caminho. Sabes onde ficam as saídas? Pergunta no teu primeiro dia: é para a tua segurança.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.p': { m: "Estou perdido. Onde é a cantina?", f: "Estou perdida. Onde é a cantina?", x: "Perdi-me. Onde é a cantina?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.s': "É o teu segundo dia. Não consegues encontrar o vestiário, e o teu turno começa daqui a cinco minutos. O que fazes?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o1': "Perguntas ao primeiro colega que vês.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o2': "Continuas a procurar: dá vergonha perguntar outra vez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o3': "Começas a trabalhar com a tua própria roupa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.w': "Perguntar demora dez segundos. Se procuras sem ajuda, podes chegar tarde. Os colegas sabem que num sítio novo é difícil encontrar o caminho.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): the tips of l.roster, l.breaks, l.wound and l.callhelp.
    'c.wound': "Uma queimadura? Arrefece com água", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.b': "Um corte pequeno: carrega em cima com um pano limpo ou uma ligadura, e avisa o socorrista. Uma queimadura: arrefece logo com água morna corrente, pelo menos 10 minutos. Alguma coisa no olho? Lava com água, ou no lava-olhos. É grave? Liga para o 112. Pergunta no primeiro dia onde estão a caixa de primeiros socorros e o lava-olhos.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.p': "Queimei-me. Onde há uma torneira?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.s': "Um colega queima a mão numa máquina quente. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o1': "Arrefeces com água morna corrente.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o2': "Pões logo manteiga ou um creme.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o3': "Pões gelo diretamente na pele, e esperas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.w': "A água tira o calor da pele, por isso a queimadura fica menos funda. O gelo, a manteiga e o creme podem piorar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp': "Ligar para o 112: primeiro diz onde", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.b': "Liga para o 112 quando uma vida está em perigo, ou quando cada minuto conta. Primeiro diz onde estás: a rua, o número e a localidade. Depois diz o que aconteceu. Fica em linha e responde às perguntas. Pede a um colega para esperar pela ambulância à entrada. Não sabes a morada do teu trabalho? Procura-a hoje.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.p': "Vou ligar para o 112. Podes esperar tu pela ambulância?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.s': "Ligas para o 112. O operador faz muitas perguntas, mas tu queres ajudar o teu colega. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o1': "Ficas em linha e respondes.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o2': "Desligas, e vais ter com o teu colega.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o3': "Dizes \"venham depressa\", e desligas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.w': "O operador manda ajuda enquanto falas, e diz-te o que fazer. Se desligares cedo demais, a ajuda pode ir para o sítio errado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster': "Vê o teu horário todos os dias", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.b': "O horário pode mudar, também em cima da hora. Vê-o todos os dias, na app ou no quadro. Vês uma mudança? Confirma que podes ir. Não podes trabalhar num dia? Diz cedo, não no próprio dia. Queres trocar um turno? Pergunta primeiro ao teu chefe: muitas empresas têm uma regra para isso. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.p': "No sábado não posso. Posso trocar?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.s': "O teu horário mudou. Agora tens de trabalhar no sábado, mas não podes. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o1': "Dizes hoje ao teu chefe, e pedes para trocar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o2': "Não dizes nada, e ficas em casa no sábado.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o3': "Pedes a um colega para ir, e não dizes a ninguém.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.w': "Se disseres cedo, o teu chefe pode arranjar outra pessoa. Faltar sem dizer nada é visto como muito grave.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks': "Aponta as tuas horas", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.b': "Aponta todos os dias quando começas, quando acabas e quanto tempo dura a tua pausa. A tua própria lista ajuda quando o teu salário não está certo. Tens de sair mais cedo, por exemplo para ir ao médico? Pergunta ao teu chefe a tempo. Trabalhaste mais do que estava previsto? Aponta isso também. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.p': "Amanhã tenho de ir ao médico. Posso sair mais cedo?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.s': "Amanhã tens de ir ao médico às três. O teu turno acaba às cinco. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o1': "Perguntas hoje ao teu chefe se podes sair mais cedo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o2': "Sais às três, e explicas no dia seguinte.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o3': "Não vais ao médico, e acabas o teu turno.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.w': "Se perguntares a tempo, o teu chefe pode planear o trabalho. Sair sem perguntar é visto como pouco sério.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'c.firstweeks': "Perguntar outra vez é normal", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.b': "Nas tuas primeiras semanas, ninguém espera que saibas tudo. Muitas vezes fazes uma visita guiada (rondleiding) e tens um colega que te acompanha. Primeiro observa, depois faz tu enquanto o teu colega observa. Esqueceste-te de alguma coisa? Pergunta outra vez: \"Wil je het nog een keer laten zien?\" É melhor do que adivinhar. Escreve as palavras novas e os passos num pequeno caderno. Alguns contratos começam com um período experimental (proeftijd): nesse tempo, tu ou o teu empregador podem acabar o contrato depressa. Pergunta se o teu contrato tem um. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.p': "Esqueci-me. Podes mostrar outra vez?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.s': "Ontem o teu colega mostrou-te como ligar a máquina. Hoje não te lembras do terceiro passo. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o1': "Pedes ao teu colega para mostrar outra vez.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o2': "Adivinhas, e experimentas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o3': "Esperas até outra pessoa a ligar.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.w': "Perguntar outra vez é normal nas primeiras semanas. Adivinhar numa máquina pode ser perigoso, e custa mais tempo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick': "Anda pelo caminho para peões", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.b': "Num armazém grande, preparas encomendas com uma lista de picking e um leitor: passas cada artigo no leitor, para os produtos certos irem para o cliente certo. Muitos preparadores de encomendas conduzem um pequeno veículo que os levanta, ou um empilhador retrátil para as estantes altas. Só conduzas um quando tiveres tido a formação para isso, muitas vezes com um certificado. Anda pelos caminhos para peões, e fica longe dos empilhadores em movimento: o condutor nem sempre te consegue ver. Na câmara frigorífica ou na câmara de congelação, usa a roupa quente, as luvas e o gorro que recebes do trabalho. Faz as tuas pausas para aquecer, e avisa alguém quando entras. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.p': "Vou aquecer-me um bocado na cantina.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.s': "Tens de ir para o outro corredor. O caminho para peões dá a volta; a direito é mais rápido, entre os empilhadores. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o1': "Vais pelo caminho para peões, mesmo que seja mais longo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o2': "Atravessas a correr entre os empilhadores.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o3': "Atravessas a pé, e acenas aos condutores.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.w': "O condutor de um empilhador muitas vezes não te consegue ver, por exemplo atrás de uma carga alta. No caminho para peões, as pessoas são esperadas e estão seguras.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (27 November 2026).
    'l.appraisal': "A conversa sobre o desempenho", // nieuw, nalezen // nagelezen AI 28 nov
    'w.functioneringsgesprek': "a conversa sobre o desempenho (uma conversa com o teu chefe sobre como corre o teu trabalho e o que queres aprender)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordelingsgesprek': "a conversa de avaliação (uma conversa em que o teu chefe dá uma avaliação do teu trabalho)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbereiden': "preparar (preparar-se para alguma coisa)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedgaan': "correr bem", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doel': "o objetivo (o que queres alcançar)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgezien': "assinar como \"visto\" (leste; não quer dizer que concordas)", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.1': "Preparo bem a conversa.", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.2': "Gostava de aprender uma coisa nova.", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.3': "Posso ler primeiro o relatório?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.q': "Qual é o teu objetivo para o próximo ano?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.a': "Gostava de tirar o certificado de empilhador.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal': "A tua avaliação: prepara-a, lê-a", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.b': "Muitas empresas têm, uma ou duas vezes por ano, uma conversa sobre o teu trabalho. Numa conversa sobre o desempenho (functioneringsgesprek) falam juntos: o que corre bem, o que pode ser melhor e o que queres aprender. Numa conversa de avaliação (beoordelingsgesprek) o teu chefe dá uma avaliação. Pode contar para o teu salário ou para um novo contrato. Prepara a conversa: escreve o que corre bem, o que é difícil e o que queres aprender. Podes pedir um curso ou uma formação. No fim fazem acordos (afspraken), muitas vezes num relatório curto. Lê-o bem antes de o assinares, e pede uma cópia. Não concordas? Assina \"voor gezien\" (visto), não \"voor akkoord\" (de acordo), e escreve a tua própria opinião. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.p': "Assino como visto, não como de acordo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.s': "Depois da tua conversa de avaliação, recebes o relatório para assinar. Achas que um ponto não é verdade. O que fazes?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o1': "Assinas \"voor gezien\", e escreves a tua opinião.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o2': "Assinas \"voor akkoord\" depressa, para ficar resolvido.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o3': "Não dizes nada, e não assinas de todo.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.w': "\"Voor gezien\" quer dizer que leste, não que concordas. Quando o dizes e escreves a tua própria opinião, o teu chefe sabe o que pensas.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
