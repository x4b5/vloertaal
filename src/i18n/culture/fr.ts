import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'Comment ça marche ici',
    whatDoYouDo: 'Que fais-tu ?',
    whatDoYouSay: 'Que dis-tu ?',
    whatIsRight: 'Qu’est-ce qui est juste ?',
    sayThis: 'Dis-le comme ça',
    goodChoice: 'Bon choix !',
    otherChoice: 'Ici, ça se passe en général autrement',
    cultureTips: 'Conseils pour le travail',
    cultureTipsHint: 'Comment les choses se passent en général au travail aux Pays-Bas. Touche un conseil pour le relire.',
  },
  gloss: {
    'c.je': '“Je” ou “u” ?',
    'c.je.b': 'Au travail, la plupart des gens se disent “je”, souvent aussi au patron. Si tu as un doute, commence par “u” et écoute ce que font les autres. Dire “je” n’est pas impoli ici.',
    'c.je.p': 'Je peux te dire “je” ?',
    'c.je.s': 'Ta nouvelle responsable dit : “Zeg maar je, hoor!” Qu’est-ce qu’elle veut dire ?',
    'c.je.o1': 'Elle veut que tu lui dises “je”.',
    'c.je.o2': 'Elle te demande de dire quelque chose.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.o3': 'Elle veut que tu parles plus poliment.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.je.w': '“Zeg maar je”, c’est gentil : elle veut moins de distance. Dans beaucoup d’entreprises néerlandaises, c’est normal de dire “je” à un responsable.',
    'c.names': 'Le prénom et une poignée de main',
    'c.names.b': 'Le premier jour, serre la main rapidement, regarde la personne et dis ton prénom. Les collègues et les responsables utilisent en général les prénoms.',
    'c.names.p': { m: 'Salut, je suis Ali. Je suis nouveau ici.', f: 'Salut, je suis Ali. Je suis nouvelle ici.', x: 'Salut, je suis Ali. Je suis nouveau / nouvelle ici.' },
    'c.names.s': 'Un collègue vient vers toi : “Hoi, ik ben Mark.” Que fais-tu ?',
    'c.names.o1': 'Serre-lui la main et dis ton nom.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o2': 'Fais oui de la tête, souris et attends les questions.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o3': 'Serre-lui la main et appelle-le “meneer” (monsieur).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.w': 'Se présenter rapidement avec son prénom, c’est le début normal. Ça aide les collègues à se souvenir de toi et à t’inviter.',
    'c.arrive': 'Ton premier jour : où aller',
    'c.arrive.b': 'Le premier jour, va d’abord à l’accueil ou à l’entrée principale. Dis ton nom, ton agence si tu en as une, et qui tu dois voir. Beaucoup d’entreprises te donnent un parrain ou une marraine : tu peux tout lui demander.',
    'c.arrive.p': 'Bonjour, je suis Ali. Je commence aujourd’hui. Je dois aller voir qui ?',
    'c.arrive.s': 'Il est 6 h 45, c’est ton premier jour. Le portail est fermé. Il y a un interphone. Que fais-tu ?',
    'c.arrive.o1': 'Sonne, dis ton nom et que tu commences aujourd’hui.',
    'c.arrive.o2': 'Attends au portail que quelqu’un sorte.',
    'c.arrive.o3': 'Fais le tour du bâtiment pour trouver une autre porte.',
    'c.arrive.w': 'L’interphone est là pour les visiteurs et les nouveaux travailleurs. Quand tu dis qui tu es, ils peuvent appeler la bonne personne.',
    'c.ask': 'Poser des questions, c’est bien',
    'c.ask.b': 'Poser une question montre que tu veux bien faire ton travail. Faire oui de la tête quand tu ne comprends pas peut causer des erreurs ou des accidents. Redemander, c’est tout à fait normal.',
    'c.ask.p': 'Pardon, je ne comprends pas. Tu peux me l’expliquer encore une fois ?',
    'c.ask.s': 'Ton responsable explique une tâche très vite. Tu n’as pas compris. Que fais-tu ?',
    'c.ask.o1': 'Demande qu’on t’explique encore une fois.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.o2': 'Fais oui de la tête et essaie de deviner.',
    'c.ask.o3': 'Excuse-toi pour ton néerlandais et commence à travailler.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ask.w': 'Ici, les responsables s’attendent à des questions. Mieux vaut demander deux fois que faire une erreur.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear': 'Les règles de sécurité sont pour tout le monde',
    'c.gear.b': 'Les règles sur les casques, les chaussures et les gants ne sont pas des conseils : tout le monde les suit, même le patron. Ton employeur doit te donner gratuitement l’équipement de protection dont tu as besoin. Un équipement qui ne te va pas te protège mal. Alors demande ta taille : “Heb je dit ook in mijn maat?”',
    'c.gear.p': 'Mes gants sont abîmés. Où est-ce que j’en trouve de nouveaux ?',
    'c.gear.s': 'Tes gants sont déchirés. Que fais-tu ?',
    'c.gear.o1': 'Demande des gants neufs à ton responsable.',
    'c.gear.o2': 'Continue à travailler sans gants.',
    'c.gear.o3': 'Achète discrètement des gants neufs avec ton argent.',
    'c.gear.w': 'L’équipement de protection, c’est le rôle de l’employeur. Le demander est normal et montre que tu prends la sécurité au sérieux.',
    'c.unsafe': 'Dis-le quand c’est dangereux',
    'c.unsafe.b': 'Si quelque chose est dangereux, dis-le tout de suite, aussi à ton patron. Tu as le droit d’arrêter un travail vraiment dangereux. Signale les accidents et les presque-accidents, même petits.',
    'c.unsafe.p': 'Stop ! C’est dangereux.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.unsafe.s': 'Une palette est empilée trop haut et tombe presque. Personne n’est blessé. Que fais-tu ?',
    'c.unsafe.o1': 'Préviens les collègues et dis-le à ton responsable.',
    'c.unsafe.o2': 'Ne dis rien, car il ne s’est rien passé.',
    'c.unsafe.o3': 'Répare toi-même la palette et ne le dis à personne.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.w': 'Un presque-accident est un avertissement. Le signaler aide à éviter un vrai accident. Ton employeur n’a pas le droit de te punir parce que tu l’as signalé.',
    'c.alarm': 'L’alarme sonne : arrête-toi et sors', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.b': 'Le premier jour, demande où sont les sorties de secours et le point de rassemblement. Quand l’alarme sonne, arrête tout de suite ton travail. Laisse tes affaires et sors par le chemin d’évacuation. Prends l’escalier, jamais l’ascenseur. Au point de rassemblement, on compte qui est dehors : donc reste là. Sors aussi quand tu penses que c’est seulement un exercice.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.p': { m: 'Je suis nouveau. Où est le point de rassemblement ?', f: 'Je suis nouvelle. Où est le point de rassemblement ?', x: 'Je suis nouveau / nouvelle. Où est le point de rassemblement ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.s': 'L’alarme incendie sonne. Tu as presque fini une commande. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o1': 'Arrête-toi tout de suite et va au point de rassemblement.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o2': 'Finis d’abord la commande, puis sors.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o3': 'Va d’abord chercher ta veste et ton téléphone au casier.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.w': 'La fumée se répand vite, donc tu sors tout de suite. Tes affaires peuvent attendre. Au point de rassemblement, on compte tout le monde : ainsi, personne ne doit te chercher à l’intérieur.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident': 'Signale chaque accident',
    'c.accident.b': 'Parle de chaque accident à ton responsable ou au BHV’er (le secouriste de l’entreprise), même d’un petit. Tu travailles via une agence ? Préviens aussi l’agence. En cas d’urgence, appelle d’abord le 112. L’entreprise où l’accident a eu lieu doit déclarer un accident grave à la Nederlandse Arbeidsinspectie (même si tu travailles via une agence) : quand quelqu’un meurt, est blessé pour toute sa vie ou doit rester à l’hôpital. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.accident.p': 'Mon collègue est blessé. Où est le secouriste ?',
    'c.accident.s': 'Tu t’es fait mal au dos en soulevant quelque chose. Tu as peur de perdre ton travail. Que fais-tu ?',
    'c.accident.o1': 'Signale-le à ton responsable le jour même.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.accident.o2': 'Ne dis rien, pour ne pas perdre ton travail.',
    'c.accident.o3': 'Attends de voir si la douleur part toute seule.',
    'c.accident.w': 'Signale-le le jour même, même si ça semble petit : la douleur peut empirer plus tard. Ton employeur n’a pas le droit de te punir parce que tu l’as signalé. Tu travailles via une agence ? Dis-le aussi à l’agence.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.notyet': 'Pas encore appris ? Dis-le',
    'c.notyet.b': 'L’entreprise où tu travailles doit t’expliquer comment faire ton travail en sécurité. N’utilise pas une machine ou un chariot élévateur si personne ne t’a appris à t’en servir. Dire “Dit heb ik nog niet geleerd” est normal ici : ça montre que tu travailles en sécurité.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.notyet.p': 'Je n’ai pas encore appris ça. Tu peux me montrer comment faire ?',
    'c.notyet.s': 'Une matinée chargée. Ton responsable dit : “Pak jij even de heftruck? Het is makkelijk.” Tu n’as jamais conduit de chariot élévateur. Que fais-tu ?',
    'c.notyet.o1': 'Dis que tu ne l’as pas appris. Demande une formation.',
    'c.notyet.o2': 'Conduis lentement et prudemment, juste cette fois.',
    'c.notyet.o3': 'Dis “ja” et espère que ça se passe bien.',
    'c.notyet.w': 'Un chariot élévateur sans formation, c’est dangereux, pour toi et pour les autres. Demander une formation ou un autre travail est normal, même quand il y a beaucoup de travail.',
    'c.direct': 'Direct, ce n’est pas impoli',
    'c.direct.b': 'Les collègues néerlandais disent souvent les choses très directement, comme “Dat is fout” ou “Doe het zo”. En général, ce n’est pas méchant. Toi aussi, tu peux parler directement, si tu restes aimable.',
    'c.direct.p': 'D’accord, alors comment il faut faire ?',
    'c.direct.s': 'Un collègue dit : “Nee, dat is fout. Die doos moet daar.” Que fais-tu ?',
    'c.direct.o1': 'Demande comment il faut faire et déplace le carton.',
    'c.direct.o2': 'Excuse-toi plusieurs fois : ton collègue est en colère.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.direct.o3': 'Ne dis rien et laisse le carton où il est.',
    'c.direct.w': 'Une remarque directe parle du travail, pas de toi. Demander “hoe moet het dan?” montre que tu veux apprendre.',
    'c.limits': 'Dis-le quand c’est trop lourd',
    'c.limits.b': 'Personne n’attend que tu soulèves tout sans aide. Dire “dit is te zwaar” et demander de l’aide ou un outil, c’est intelligent, pas un signe de faiblesse. Ça protège ton dos.',
    'c.limits.p': 'Ce carton est trop lourd. Tu peux m’aider un moment ?',
    'c.limits.s': 'Tu dois soulever un carton beaucoup trop lourd pour toi. Que fais-tu ?',
    'c.limits.o1': 'Demande de l’aide à un collègue ou prends un chariot.',
    'c.limits.o2': 'Soulève-le quand même, pour que personne ne pense que tu es faible.',
    'c.limits.o3': 'Laisse-le là et ne dis rien.',
    'c.limits.w': 'Demander de l’aide, c’est le travail d’équipe normal. Un dos blessé coûte bien plus cher qu’une minute d’aide.',
    'c.time': 'À l’heure veut dire un peu en avance',
    'c.time.b': 'Être à l’heure est très important. Beaucoup de gens arrivent cinq ou dix minutes avant le début du service. Si tu vas être en retard, envoie un message ou appelle avant le début de ton service, pas après.',
    'c.time.p': { m: 'Désolé, le bus a du retard. Je serai là à huit heures.', f: 'Désolée, le bus a du retard. Je serai là à huit heures.', x: 'Désolé / désolée, le bus a du retard. Je serai là à huit heures.' },
    'c.time.s': 'Ton bus a du retard et tu vas arriver 15 minutes en retard. Que fais-tu ?',
    'c.time.o1': 'Préviens tout de suite ton responsable.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.time.o2': 'Explique-le quand tu arrives.',
    'c.time.o3': 'Ne va pas du tout au travail aujourd’hui.',
    'c.time.w': 'Prévenir tôt permet à l’équipe de s’organiser. Être en retard sans message est vu comme bien pire que le retard lui-même.',
    'c.sick': 'Comment te déclarer malade',
    'c.sick.b': 'Appelle toi-même ton responsable, avant le début de ton service, sauf si ton entreprise a une autre règle. Tu travailles via une agence ? Préviens aussi l’agence. Tu n’as pas besoin de dire quelle maladie tu as. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.sick.p': 'Je suis malade. Je ne peux pas venir travailler aujourd’hui.',
    'c.sick.s': 'Tu te réveilles avec de la fièvre. Ton service commence à 7 h 00. Que fais-tu ?',
    'c.sick.o1': 'Appelle ton responsable avant 7 h 00.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.sick.o2': 'Demande à un collègue de le dire au patron plus tard.',
    'c.sick.o3': 'Reste à la maison et appelle demain.',
    'c.sick.w': 'Dans la plupart des entreprises aux Pays-Bas, la règle est de te déclarer malade toi-même et à temps. Ton employeur peut demander combien de temps ça va durer, mais pas quelle maladie tu as.',
    'c.speakup': 'Dis ce qui te gêne',
    'c.speakup.b': 'Ici, c’est normal et respecté de dire calmement quand quelque chose te gêne. Parle d’abord à la personne, à un moment calme. Utilise des phrases avec “ik” : “Ik vind het niet fijn dat ...”. Si ça n’aide pas, parle à ton responsable.',
    'c.speakup.p': 'Quelque chose me tracasse. On peut parler un moment ?',
    'c.speakup.s': 'Un collègue te laisse toujours le travail lourd. Ça te gêne. Que fais-tu ?',
    'c.speakup.o1': 'Dis au collègue ce qui te gêne.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.speakup.o2': 'Tais-toi et énerve-toi de plus en plus.',
    'c.speakup.o3': 'Plains-toi de lui à tous les autres collègues.',
    'c.speakup.w': 'Les collègues néerlandais préfèrent en général l’entendre directement. Le dire tôt et calmement garde une bonne relation.',
    'c.no': '“Afspraak is afspraak”',
    'c.no.b': 'Quand tu dis “ja”, les gens comptent dessus : un accord, c’est un accord. Alors c’est bien de dire “nee” ou “dat lukt niet” quand tu ne peux pas faire quelque chose. Dis-le à temps et, si tu peux, propose une autre solution.',
    'c.no.p': 'Non, aujourd’hui ce n’est pas possible. Demain, je peux.',
    'c.no.s': 'Ton responsable demande si tu peux faire des heures en plus samedi. Tu ne peux pas. Que fais-tu ?',
    'c.no.o1': 'Dis non et propose un autre jour.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.o2': 'Dis oui et puis ne viens pas.',
    'c.no.o3': 'Dis oui : on ne peut pas dire non à un chef.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.no.w': 'Un “nee” clair est respecté. Dire “ja” et ne pas venir casse beaucoup plus la confiance.',
    'c.task': 'Dis quand c’est fini, demande quand ce n’est pas clair',
    'c.task.b': 'Aux Pays-Bas, un responsable donne souvent une tâche en quelques mots. Quand c’est fini, tu le dis. Dire “ja” quand tu n’as pas compris cause souvent des erreurs. Redemander, ou demander qu’on te montre, est normal ici et pas impoli.',
    'c.task.p': 'Fini ! Qu’est-ce que je dois faire maintenant ?',
    'c.task.s': 'Ton responsable explique une tâche très vite. Tu n’as compris que la moitié. Que fais-tu ?',
    'c.task.o1': 'Demande à le voir encore une fois.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o2': 'Commence par la moitié que tu as comprise.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.task.o3': 'Attends qu’un collègue le fasse.',
    'c.task.w': 'Redemander est normal et prend une minute. Réparer une erreur prend bien plus de temps. La plupart des responsables préfèrent montrer deux fois.',
    'c.clear': 'Dis d’abord le plus important', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.b': 'Dans beaucoup de langues, il est poli de raconter d’abord toute l’histoire, et l’essentiel à la fin. Au travail ici, c’est l’inverse. Dis d’abord ce qui ne va pas ou ce dont tu as besoin. Ensuite, donne la raison. Parle calmement, et arrête-toi après deux ou trois phrases, pour que l’autre puisse poser une question. Dans un entretien d’embauche aussi : d’abord la réponse, puis un exemple. Parler lentement n’est pas impoli ici : ça aide les gens à te comprendre.',
    'c.clear.p': 'Pardon, je le redis calmement.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.s': 'Tu arrives avec 20 minutes de retard. Ton responsable demande : “Wat is er?” Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o1': 'Dis d’abord que tu es en retard et excuse-toi. Puis dis pourquoi.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o2': 'Raconte tout ce qui s’est passé ce matin, depuis le début.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o3': 'Ne dis rien et commence vite à travailler.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.w': 'Ton responsable veut d’abord savoir ce qui se passe. La raison vient après. Court et calme, c’est clair, et ici c’est aussi poli.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.teamwork': 'Travailler ensemble',
    'l.speakup': 'Quelque chose me gêne',
    'w.probleem': 'le problème',
    'w.praten': 'parler',
    'w.nietfijn': 'pas agréable',
    'w.eerlijk': 'juste, honnête',
    'w.boos': 'fâché, en colère',
    'w.samen': 'ensemble',
    's.speakup.1': 'Quelque chose me tracasse.',
    's.speakup.2': 'On peut parler un moment ?',
    's.speakup.3': 'Je ne trouve pas ça juste.',
    'd.speakup.q': 'Quelque chose ne va pas ?',
    'd.speakup.a': 'Oui, quelque chose me tracasse.',
    'l.agree': 'Les accords et dire non',
    'w.afspraak': 'l’accord, le rendez-vous',
    'w.lukken': 'réussir, arriver à faire',
    'w.oneens': 'ne pas être d’accord',
    'w.zaterdag': 'samedi',
    'w.overwerken': 'faire des heures supplémentaires',
    'w.misschien': 'peut-être',
    's.agree.1': 'Non, aujourd’hui ce n’est pas possible.',
    's.agree.2': 'Je ne suis pas d’accord avec toi.',
    's.agree.3': 'Un accord, c’est un accord.',
    'd.agree.q': 'Tu peux faire des heures sup samedi ?',
    'd.agree.a': 'Non, ce n’est pas possible. Dimanche, oui.',
    'l.task': 'Les consignes de ton responsable',
    'w.taak': 'la tâche',
    'w.eerst': 'd’abord',
    'w.daarna': 'ensuite, après',
    'w.afmaken': 'finir',
    'w.snel': 'vite, rapide',
    'w.bijna': 'presque',
    's.task.1': 'Qu’est-ce que je dois faire d’abord ?',
    's.task.2': 'J’ai fini cette tâche.',
    's.task.3': 'Vous pouvez le montrer encore une fois ?',
    'd.task.q': 'Tu as fini ?',
    'd.task.a': 'Presque. Encore cinq minutes.',
    'l.clear': 'Court et clair', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kort': 'court', // nieuw, nalezen // nagelezen AI 28 nov
    'w.duidelijk': 'clair', // nieuw, nalezen // nagelezen AI 28 nov
    'w.belangrijkste': 'le plus important', // nieuw, nalezen // nagelezen AI 28 nov
    'w.rustig': 'calme, calmement', // nieuw, nalezen // nagelezen AI 28 nov
    'w.teveel': 'trop', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vraag': 'la question', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.1': 'Je fais court : la machine est en panne.', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.2': 'D’abord le plus important : je suis malade.', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.3': 'Pardon, je parle trop vite et trop.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.q': 'C’est clair ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.a': 'Oui. J’ai encore une question.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.newcolleague': "Aider un nouveau collègue", // nieuw, nalezen // nagelezen AI 28 nov
    'w.welkom': "bienvenue", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inwerken': "former un nouveau collègue (les premiers jours)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stap': "l’étape (une petite partie d’une tâche)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadoen': "refaire, imiter (faire ce que quelqu’un t’a montré)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geduld': "la patience", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kast': "le placard, l’armoire", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.1': "Bienvenue ! Aujourd’hui, je te montre le travail.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.2': "Regarde d’abord. Ensuite, tu refais pareil.", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.3': "Les gants sont dans ce placard.", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.q': "J’ai compris, je crois.", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.a': "Bien. Montre-moi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newcolleague': "Montre-le, étape par étape", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.b': "Ce qui était difficile pour toi les premières semaines l’est aussi pour un nouveau collègue. Explique le travail en petites étapes : d’abord ceci, puis cela. Ne parle pas plus vite ni plus fort : montre, et laisse-le refaire après toi. Ne demande pas “Snap je het?” : beaucoup de gens disent oui, même quand ils ne comprennent pas. Dis plutôt “Laat eens zien”, et regarde. Dis-lui où sont les choses, comme les toilettes, la cantine et les gants. Aie de la patience (geduld) : apprendre prend du temps, pour tout le monde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.p': "Bravo ! Maintenant, l’étape suivante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.s': "Tu expliques une tâche à un nouveau collègue. Il dit : “Ja, ja, ik snap het.” Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o1': "Tu dis “Laat eens zien,” et tu le regardes faire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o2': "Tu dis “Goed zo,” et tu retournes à ton travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o3': "Tu réexpliques tout, plus vite et plus fort.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.w': "Beaucoup de gens disent “ja”, même quand ils n’ont pas compris. Quand il le montre, vous voyez tous les deux si ça marche. C’est plus rapide que de corriger une erreur plus tard.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.communicate': 'Bien communiquer', // nieuw, nalezen // nagelezen AI 28 nov
    'l.explain': 'Dire ce qui ne va pas', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ietsmis': 'quelque chose ne va pas', // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstaan': 'être à l’arrêt, s’être arrêté (une machine, un tapis)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.lampje': 'le voyant (lumineux)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.komen': 'venir', // nieuw, nalezen // nagelezen AI 28 nov
    'w.nodighebben': 'avoir besoin de', // nieuw, nalezen // nagelezen AI 28 nov
    'w.meteen': 'tout de suite', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.1': 'Le tapis est à l’arrêt. À la ligne deux. Tu peux venir ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.2': 'Un voyant rouge est allumé sur la machine.', // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.3': 'C’est dangereux. Tu peux venir tout de suite ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.q': 'Qu’est-ce qui ne va pas ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.a': 'Le scanner ne marche pas. J’en ai besoin d’un nouveau.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.listen': 'Bien écouter', // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpraten': 'finir de parler (laisser quelqu’un finir)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreken': 'interrompre, couper la parole', // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankijken': 'regarder (quelqu’un)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedoelen': 'vouloir dire', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dus': 'donc (pour vérifier ce que tu as entendu)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorvragen': 'poser d’autres questions (jusqu’à ce que ce soit clair)', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.1': 'Donc d’abord compter les cartons, et puis emballer ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.2': 'Qu’est-ce que tu veux dire par ce mot ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.3': 'Pardon, finis ce que tu disais.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.q': 'Demain, tu commences déjà à quatre heures.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.a': 'C’est vrai ? Ou c’était une blague ?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.calm': 'Rester calme', // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadenken': 'réfléchir (à quelque chose)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademhalen': 'respirer', // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossen': 'résoudre, régler', // nieuw, nalezen // nagelezen AI 28 nov
    'w.druk': 'chargé (beaucoup à faire)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.straks': 'tout à l’heure (aujourd’hui), dans un moment', // nieuw, nalezen // nagelezen AI 28 nov
    'w.misverstand': 'le malentendu', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.1': 'Je veux régler ça calmement.', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.2': 'Je peux réfléchir un moment ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.3': 'On peut en parler tout à l’heure ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.q': 'Pourquoi ce n’est pas encore fini ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.a': 'Pardon, il y a beaucoup de travail. Qu’est-ce qui passe en premier ?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.talkintime': 'En parler à temps', // nieuw, nalezen // nagelezen AI 28 nov
    'w.gesprek': 'l’entretien, la conversation', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bespreken': 'parler de, discuter de', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgenmaken': 's’inquiéter', // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossing': 'la solution', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ineens': 'tout à coup, d’un coup', // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegblijven': 'rester absent (ne pas venir au travail)', // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.talkintime.1': 'Quelque chose me tracasse. Tu as un moment ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.2': 'Je veux parler de quelque chose avec toi.', // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.3': 'Je pense à arrêter. On peut d’abord en parler ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.q': 'Tu as un moment ? Quelque chose me tracasse.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.a': 'Bien sûr. Qu’est-ce qu’il y a ?', // nieuw, nalezen // nagelezen AI 28 nov
    'l.reachable': 'Être joignable', // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnemen': 'répondre (au téléphone), décrocher', // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemisteoproep': 'l’appel manqué', // nieuw, nalezen // nagelezen AI 28 nov
    'w.voicemail': 'la messagerie vocale', // nieuw, nalezen // nagelezen AI 28 nov
    'w.beltegoed': 'le crédit téléphonique (prépayé)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.bereik': 'le réseau (sur ton téléphone)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.onbekend': 'inconnu (un numéro inconnu)', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.1': 'Mon néerlandais n’est pas encore bon. Vous pouvez parler lentement ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.2': 'Vous pouvez aussi l’envoyer par message ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.3': 'J’ai un nouveau numéro.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.q': 'Bonjour, ici le service planning.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.a': 'Bonjour. Vous avez appelé ? Pardon, j’ai manqué l’appel.', // nieuw, nalezen // nagelezen AI 28 nov
    'c.explain': 'Quoi, où, ce dont tu as besoin', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.b': 'Quand quelque chose ne va pas au travail, dis-le en trois étapes. D’abord ce qui ne va pas : “De band staat stil.” Puis où : “Bij lijn twee.” Puis ce dont tu as besoin : “Kun je komen?” Maintenant l’autre sait quoi faire, sans beaucoup de questions. Tu ne connais pas le mot ? Montre la chose du doigt. C’est dangereux ? Dis-le d’abord : “Het is gevaarlijk.” Un accident ? D’abord, va chercher de l’aide (plus dans la leçon “Signaler un accident”).', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.p': 'Tu peux venir voir ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.s': 'Le scanner à ton poste ne marche plus. Tu appelles ton chef d’équipe. Que dis-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o1': '“De scanner is kapot. Bij gang vier. Kun je komen?”', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o2': '“Hallo, ik heb een probleem.” Puis tu attends.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o3': '“Sorry, sorry! Het is niet mijn schuld!”', // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.w': 'Maintenant ton chef d’équipe sait ce qui ne va pas, où, et ce dont tu as besoin. Personne ne doit d’abord poser trois questions.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen': 'D’abord écouter, puis vérifier', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.b': 'Laisse l’autre finir de parler (uitpraten) avant de répondre. Regarde la personne qui te parle : ici, ça montre que tu écoutes. Dans beaucoup de pays, on ne regarde pas son chef dans les yeux. C’est un signe de respect. Ici, le regarder de temps en temps est poli. Quand l’autre a fini, répète ce que tu as entendu : “Dus eerst …, en dan …?” Tu ne sais pas bien ce qu’un mot veut dire ? Demande : “Wat bedoel je met …?” Certains collègues font des blagues avec un air sérieux. Tu as un doute ? Demande : “Was dat een grapje?”',
    'c.listen.p': 'Attends, je veux bien comprendre.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.s': 'Ta responsable explique une nouvelle tâche. Tu veux dire quelque chose, mais elle parle encore. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o1': 'Laisse-la finir. Puis répète ce que tu as entendu.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o2': 'Commence tout de suite à parler, pour ne pas oublier.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o3': 'Dis oui à tout et ne pose aucune question.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.w': 'Quand elle a fini, tu connais toute la tâche. Répéter montre que tu as écouté, et elle peut encore te corriger.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm': 'Reste calme, même quand c’est dur', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.b': 'Tout le monde se fâche parfois, au travail aussi. Quelqu’un est en colère contre toi ? Écoute d’abord, et reste calme. Tu n’as pas besoin de répondre tout de suite : “Mag ik even nadenken?” Tu t’énerves toi-même ? Respire lentement, et dis : “Kunnen we straks praten?” Ensuite, parle avec l’autre quand vous êtes calmes tous les deux. Beaucoup de travail ? Demande ce qui doit être fait d’abord. Crier, menacer ou pousser, ce n’est jamais acceptable au travail. Dis stop, et préviens ton responsable (plus dans les leçons “Le respect pour tout le monde” et “Dépasser les limites”).', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.p': 'Je pense que c’est un malentendu.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.s': 'Un collègue est en colère : la palette n’est pas au bon endroit. Tu penses que ce n’était pas toi. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o1': 'Reste calme, écoute, puis dis ce que tu sais.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o2': 'Fâche-toi aussi, et parle plus fort.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o3': 'Pars et ne lui parle plus.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.w': 'Quand tu restes calme, l’autre se calme souvent aussi. Vous pouvez alors chercher ce qui s’est passé, et régler ça ensemble.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime': 'Parles-en tant que c’est petit', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.b': 'Un petit problème devient grand quand tu n’en parles pas. Alors tu te fâches tout à coup, ou tu arrêtes tout à coup. Parle à temps : à ton responsable, à un collègue ou à la personne de confiance (vertrouwenspersoon), s’il y en a une. Demande un moment : “Heb je even tijd?” Dis en quelques mots quel est le problème et ce que tu veux. Tu penses à démissionner ? Parle d’abord. Il y a souvent une solution, comme un autre horaire ou une autre tâche. Si tu démissionnes toi-même, tu peux perdre ton allocation (uitkering), et il y a souvent un préavis (opzegtermijn). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.p': 'On peut chercher une solution ensemble ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.s': 'Depuis des semaines, ton planning pose problème. Aujourd’hui, tu es en colère et tu veux arrêter tout de suite. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o1': 'Demande d’abord un entretien à ton responsable.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o2': 'Pars maintenant et ne reviens pas.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o3': 'Ne dis rien et continue.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.w': 'Parler à temps permet de garder un problème petit. Il y a souvent une solution, et souvent tu gardes ainsi ton emploi et ton revenu.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable': 'Décroche, ou rappelle le jour même', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.b': 'Les agences et les employeurs appellent souvent quand il y a du travail. Souvent, la première personne qui décroche, ou qui rappelle, a le travail. Tu as manqué un appel ? Rappelle le jour même. Pas de téléphone au travail ? Rappelle pendant ta pause. Écoute ta messagerie vocale, et garde un peu de crédit (beltegoed) sur ton téléphone. Tu as du mal à comprendre au téléphone ? Dis-le, et demande : “Kunt u het ook appen?” Quelqu’un te demande de l’argent ou des codes ? Raccroche (plus dans la leçon “Attention aux arnaques”). Un nouveau numéro ? Donne-le à ton travail, à l’agence et à la mairie (gemeente).', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.p': 'Je vous rappelle pendant ma pause.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.s': 'Pendant ta pause, tu vois un appel manqué de l’agence. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o1': 'Rappelle maintenant, pendant ta pause.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o2': 'Attends qu’ils te rappellent.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o3': 'Rappelle la semaine prochaine, quand tu es libre.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.w': 'Les agences appellent souvent quand il y a du travail. Quand tu rappelles le jour même, tu montres que tu le veux, et tu as peut-être le travail.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.feedback': 'Feedback et réunions d’équipe', // nieuw, nalezen // nagelezen AI 28 nov
    'l.getfeedback': 'Recevoir un feedback', // nieuw, nalezen // nagelezen AI 28 nov
    'w.tip': 'le conseil, l’astuce (un petit conseil)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbeterpunt': 'le point à améliorer (ce qui peut être mieux)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedbedoeld': 'bien intentionné (pour t’aider)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kritiek': 'la critique (ce que quelqu’un ne trouve pas bien)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.normaal': 'normal', // nieuw, nalezen // nagelezen AI 28 nov
    'w.positief': 'positif (sur ce qui va bien)', // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.1': 'Merci, c’est bon à savoir.', // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.2': 'Tu peux donner un exemple ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.3': 'Qu’est-ce que je peux faire mieux ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.q': 'Je peux te donner un peu de feedback ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.a': 'Oui, volontiers. Je veux bien faire.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.givefeedback': 'Donner un feedback', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtplakken': 'fermer avec du ruban adhésif', // nieuw, nalezen // nagelezen AI 28 nov
    'w.netjes': 'propre, soigné', // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheef': 'de travers, pas droit', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriendelijk': 'aimable, gentil', // nieuw, nalezen // nagelezen AI 28 nov
    'w.concreet': 'concret (avec un exemple clair)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondervierogen': 'en privé (rien que vous deux)', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.1': 'Ça, tu le fais bien.', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.2': 'Tu peux aussi fermer les cartons avec du ruban adhésif ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.3': 'Je vois que les cartons sont de travers.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.q': 'Qu’est-ce que tu penses de mon travail ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.a': 'C’est soigné ! Seulement, les cartons sont de travers.', // nieuw, nalezen // nagelezen AI 28 nov
    'l.meeting': 'Prendre la parole en réunion d’équipe', // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkoverleg': 'la réunion d’équipe (sur le travail)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.beurt': 'le tour (ton moment pour parler)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.idee': 'l’idée', // nieuw, nalezen // nagelezen AI 28 nov
    'w.mening': 'l’avis, l’opinion (ce que tu en penses)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.handopsteken': 'lever la main', // nieuw, nalezen // nagelezen AI 28 nov
    'w.agenda': 'l’ordre du jour (la liste des points de la réunion)', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.1': 'Je peux dire quelque chose ?', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.2': 'J’ai une question sur le planning.', // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.3': 'J’ai une idée.', // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.q': 'Quelqu’un a encore une question ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.a': 'Oui. Quand est-ce que le nouveau planning arrive ?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.getfeedback': 'Le feedback parle de ton travail', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.b': 'Le feedback, c’est ce que quelqu’un dit de ton travail : ce qui va bien, et ce qui peut être mieux. Ça parle de ton travail, pas de toi. Au travail ici, le feedback est normal et sert à aider. Ce que tu dois faire autrement n’est pas clair ? Demande un exemple. Écoute d’abord, et ne te défends pas tout de suite. Ensuite, dis merci, et essaie. Tu peux aussi demander toi-même du feedback : “Wat kan ik beter doen?”', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.p': 'Merci. Tu peux donner un exemple ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.s': 'Ta responsable regarde ton travail et dit : “Dit kan beter.” Tu ne sais pas ce qu’elle veut dire. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o1': 'Dis merci, et demande un exemple.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o2': 'Dis que tu as vraiment fait de ton mieux.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o3': 'Fais oui de la tête, et refais pareil.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.w': 'Le feedback sert à t’aider. Un exemple montre ce qu’elle veut. Et un “merci” montre que tu écoutes.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback': 'Donner un feedback : d’abord le positif', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.b': 'Tu veux dire quelque chose sur le travail d’un collègue ? Dis d’abord ce qui va bien. Puis dis gentiment et clairement ce qui peut être mieux, avec un exemple. Dis-le au bon moment, à cette personne seule, pas quand tout le monde est là. Dis ce que tu vois, pas ce que tu penses de la personne : “Ik zie dat ...”. Reste aimable : tu veux aider, pas gagner.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.p': 'Ça, tu le fais bien. Tu peux aussi fermer les cartons avec du ruban adhésif ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.s': 'Un nouveau collègue oublie de fermer les cartons avec du ruban adhésif. Vous êtes tous à la cantine. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o1': 'Plus tard, seul à seul : d’abord ce qui va bien, puis les cartons.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o2': 'Dis-lui devant tout le monde que c’est mal fait.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o3': 'Ne dis rien, et ferme ses cartons toi-même.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.w': 'Seul avec toi, il peut écouter sans avoir honte. Quand tu dis d’abord ce qui va bien, il entend mieux le reste.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting': 'Ta voix compte en réunion', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.b': 'Beaucoup d’équipes ont une courte réunion sur le travail (het werkoverleg). Ton avis y est le bienvenu, même si ton néerlandais n’est pas parfait. Une question est aussi une bonne contribution : d’autres veulent peut-être le savoir aussi. Attends ton tour, et laisse l’autre finir. Puis lève la main, ou dis : “Mag ik iets zeggen?” Tu n’oses pas le dire devant le groupe ? Dis-le à ton responsable après la réunion.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.p': 'Je peux dire quelque chose ? J’ai une idée.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.s': 'En réunion d’équipe, ta responsable explique le nouveau planning. Tu ne comprends pas quand ton service commence. Que fais-tu ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o1': 'Quand elle s’arrête de parler, pose ta question.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o2': 'Ne dis rien, pour ne pas perdre de temps.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o3': 'Demande tout de suite, pendant qu’elle parle encore.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.w': 'Une question est une bonne contribution : d’autres n’ont peut-être pas compris non plus. Quand tu attends ton tour, tout le monde peut l’entendre.', // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Un article manque ? Dis-le", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.b': "La case est vide, ou l’article n’est pas là ? Ne prends pas un autre article qui lui ressemble : sinon le client reçoit la mauvaise chose. Dis-le à ton chef d’équipe, ou signale-le dans le scanner. Vérifie le numéro sur l’autocollant, pas seulement la couleur ou l’image. Travailler avec précision est plus important que travailler vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.p': "Cet article manque. Qu’est-ce que je dois faire ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.s': "La case est vide. Dans la case d’à côté, il y a un article presque pareil. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o1': "Signale que l’article manque.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o2': "Prends l’autre article : il est pareil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o3': "Saute l’article et ne dis rien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.w': "Un mauvais article revient, et ça prend plus de temps que de demander. Quand tu le signales, quelqu’un peut remplir la case ou changer la commande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading': "Jamais derrière un camion qui recule", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.b': { m: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vu. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte.", f: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vue. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte.", x: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vu / vue. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.p': "Attends un moment. Le camion recule.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.s': "Un camion recule vers la porte. Tu veux vite traverser derrière lui. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o1': "Attends que le camion soit à l’arrêt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o2': "Cours derrière : tu es assez rapide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o3': "Passe derrière et fais signe au chauffeur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.w': "Derrière un camion, il y a un endroit que le chauffeur ne peut pas voir. Attendre coûte une minute. Un accident à cet endroit est très grave.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': "Vérifie si tu fais bien", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.b': "Tu ne sais pas bien comment faire une tâche ? Demande comment, ou demande à un collègue de regarder ton travail un moment. Vérifier, c’est normal ici, même après une semaine ou un mois. Deviner prend plus de temps que demander : s’il y a une erreur, il faut refaire. “Doe ik het zo goed?” est une question que les collègues aiment entendre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.p': "Tu peux regarder un moment si c’est bien ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.s': { m: "Tu fais une nouvelle tâche. Tu n’es pas sûr de bien la faire. Que fais-tu ?", f: "Tu fais une nouvelle tâche. Tu n’es pas sûre de bien la faire. Que fais-tu ?", x: "Tu fais une nouvelle tâche. Tu n’es pas sûr / sûre de bien la faire. Que fais-tu ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o1': "Demande à un collègue de regarder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o2': "Continue : c’est peut-être bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o3': "Arrête et attends que quelqu’un vienne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.w': "Un petit coup d’œil d’un collègue évite beaucoup de travail plus tard. Et tu apprends la tâche plus vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask': "Le bon moment pour demander", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.b': "C’est une question de sécurité, ou quelque chose peut mal tourner tout de suite ? Demande tout de suite, même quand ton collègue est occupé. Ce n’est pas urgent ? Attends que ton collègue ait fini, puis demande : “Heb je even tijd?” Tu as beaucoup de petites questions ? Écris-les et pose-les ensemble. Personne ne trouve une question gênante. Une erreur coûte plus de temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.p': "Pardon de déranger. Tu as un moment ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.s': "Ton collègue est au téléphone. Tu as une question qui n’est pas urgente. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o1': "Attends la fin de l’appel, puis demande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o2': "Demande maintenant : une question, c’est toujours bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o3': "Ne demande pas : ton collègue est occupé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.w': "Attendre un moment montre du respect, et tu as quand même ta réponse. Seul le danger ne peut pas attendre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis': "Tu as perdu ton chemin ? Demande", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.b': "Un nouveau lieu de travail est grand, et beaucoup de portes se ressemblent. Personne n’attend que tu trouves tout après un jour. Tu ne trouves pas une salle, un outil ou une personne ? Demande au premier collègue que tu vois. Beaucoup de collègues t’accompagnent, ou te montrent le chemin. Tu sais où sont les sorties ? Demande-le le premier jour : c’est pour ta sécurité.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.p': { m: "Je suis perdu. Où est la cantine ?", f: "Je suis perdue. Où est la cantine ?", x: "J’ai perdu mon chemin. Où est la cantine ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.s': "C’est ton deuxième jour. Tu ne trouves pas le vestiaire, et ton service commence dans cinq minutes. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o1': "Demande au premier collègue que tu vois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o2': "Continue à chercher : c’est gênant de redemander.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o3': "Commence le travail avec tes propres vêtements.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.w': "Demander prend dix secondes. Chercher sans aide peut te mettre en retard. Les collègues savent qu’il est difficile de trouver son chemin dans un nouvel endroit.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): the tips of l.roster, l.breaks, l.wound and l.callhelp.
    'c.wound': "Une brûlure ? Refroidis-la avec de l’eau", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.b': "Une petite coupure : appuie dessus avec un tissu propre ou un pansement, et préviens le secouriste. Une brûlure : refroidis-la tout de suite sous l’eau tiède qui coule, pendant au moins 10 minutes. Quelque chose dans l’œil ? Rince avec de l’eau, ou à la douche oculaire. C’est grave ? Appelle le 112. Le premier jour, demande où sont la trousse de premiers secours et la douche oculaire.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.p': { m: "Je me suis brûlé. Où est un robinet ?", f: "Je me suis brûlée. Où est un robinet ?", x: "J’ai une brûlure. Où est un robinet ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.s': "Un collègue se brûle la main sur une machine chaude. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o1': "Refroidis-la sous l’eau tiède qui coule.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o2': "Mets tout de suite du beurre ou une crème dessus.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o3': "Mets de la glace directement sur la peau, et attends.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.w': "L’eau enlève la chaleur de la peau, donc la brûlure est moins profonde. La glace, le beurre et la crème peuvent l’aggraver.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp': "Appeler le 112 : dis d’abord où", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.b': "Appelle le 112 quand une vie est en danger, ou quand chaque minute compte. Dis d’abord où tu es : la rue, le numéro et la ville. Ensuite, dis ce qui s’est passé. Reste en ligne et réponds aux questions. Demande à un collègue d’attendre l’ambulance à l’entrée. Tu ne connais pas l’adresse de ton travail ? Cherche-la aujourd’hui.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.p': "J’appelle le 112. Tu peux attendre l’ambulance ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.s': "Tu appelles le 112. L’opérateur pose beaucoup de questions, mais tu veux aider ton collègue. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o1': "Reste en ligne et réponds.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o2': "Raccroche, et va voir ton collègue.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o3': "Dis « venez vite », et raccroche.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.w': "L’opérateur envoie de l’aide pendant que tu parles, et il te dit quoi faire. Si tu raccroches trop tôt, l’aide peut aller au mauvais endroit.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster': "Regarde ton planning chaque jour", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.b': "Le planning peut changer, même au dernier moment. Regarde-le chaque jour, dans l’appli ou sur le tableau. Tu vois un changement ? Vérifie que tu peux venir. Tu ne peux pas travailler un jour ? Dis-le tôt, pas le jour même. Tu veux échanger un service ? Demande d’abord à ton responsable : beaucoup d’entreprises ont une règle pour ça. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.p': "Je ne peux pas samedi. Je peux échanger ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.s': "Ton planning a changé. Maintenant tu dois travailler samedi, mais tu ne peux pas. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o1': "Dis-le à ton responsable aujourd’hui, et demande à échanger.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o2': "Ne dis rien, et reste chez toi samedi.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o3': "Demande à un collègue d’y aller, et ne le dis à personne.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.w': "Si tu le dis tôt, ton responsable peut trouver quelqu’un d’autre. Ne pas venir sans rien dire, c’est vu comme très grave.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks': "Note tes heures", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.b': "Note chaque jour quand tu commences, quand tu t’arrêtes et combien de temps dure ta pause. Ta propre liste aide quand ton salaire n’est pas correct. Tu dois partir plus tôt, par exemple pour le médecin ? Demande à ton responsable à temps. Tu as travaillé plus longtemps que prévu ? Note-le aussi. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.p': "Je dois aller chez le médecin demain. Je peux partir plus tôt ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.s': "Demain, tu dois aller chez le médecin à trois heures. Ton service finit à cinq heures. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o1': "Demande aujourd’hui à ton responsable si tu peux partir plus tôt.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o2': "Pars à trois heures, et explique-le le lendemain.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o3': "Annule le médecin, et finis ton service.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.w': "Demander à temps permet à ton responsable d’organiser le travail. Partir sans demander, c’est vu comme pas fiable.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'c.firstweeks': "Redemander, c’est normal", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.b': "Pendant tes premières semaines, personne n’attend de toi que tu saches tout. Souvent, tu as une visite (rondleiding) et un collègue qui te guide. Regarde d’abord, puis fais-le toi-même pendant que ton collègue regarde. Tu as oublié quelque chose ? Redemande : “Wil je het nog een keer laten zien?” C’est mieux que de deviner. Note les nouveaux mots et les étapes dans un petit carnet. Certains contrats commencent par une période d’essai (proeftijd) : alors toi ou ton employeur pouvez arrêter le travail rapidement. Demande si ton contrat en a une. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.p': "Je l’ai oublié. Tu peux me le montrer encore une fois ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.s': "Hier, ton collègue t’a montré comment démarrer la machine. Aujourd’hui, tu ne te souviens plus de la troisième étape. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o1': "Tu demandes à ton collègue de te la montrer encore une fois.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o2': "Tu devines, et tu essaies.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o3': "Tu attends que quelqu’un d’autre la démarre.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.w': "Redemander, c’est normal pendant les premières semaines. Deviner sur une machine peut être dangereux, et fait perdre plus de temps.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick': "Marche sur le passage piéton", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.b': "Dans un grand entrepôt, tu prépares les commandes avec une liste de prélèvement et un scanner : tu scannes chaque article, pour que les bons produits aillent chez le bon client. Beaucoup de préparateurs de commandes conduisent un petit chariot qui les soulève, ou un chariot à mât rétractable (reachtruck) pour les rayonnages hauts. Conduis-en un seulement si tu as eu la formation pour ça, souvent avec un certificat. Marche sur les passages piétons, et reste loin des chariots qui roulent : le conducteur ne peut pas toujours te voir. Dans la chambre froide ou la chambre de congélation, porte les vêtements chauds, les gants et le bonnet que le travail te donne. Prends tes pauses pour te réchauffer, et dis à quelqu’un quand tu y entres. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.p': "Je vais me réchauffer un peu à la cantine.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.s': "Tu dois aller dans l’autre allée. Le passage piéton fait le tour ; tout droit, entre les chariots, c’est plus rapide. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o1': "Tu prends le passage piéton, même s’il est plus long.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o2': "Tu traverses vite en courant entre les chariots.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o3': "Tu traverses à pied, et tu fais signe aux conducteurs.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.w': "Souvent, le conducteur d’un chariot ne peut pas te voir, par exemple derrière une charge haute. Sur le passage piéton, les gens sont attendus et en sécurité.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (27 November 2026).
    'l.appraisal': "L’entretien annuel", // nieuw, nalezen // nagelezen AI 28 nov
    'w.functioneringsgesprek': "l’entretien annuel (une discussion avec ton responsable sur ton travail et sur ce que tu veux apprendre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordelingsgesprek': "l’entretien d’évaluation (une discussion où ton responsable donne un jugement sur ton travail)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbereiden': "préparer (se préparer à quelque chose)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedgaan': "bien se passer, aller bien", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doel': "l’objectif (ce que tu veux atteindre)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgezien': "signer “pour prise de connaissance” (tu l’as lu ; ça ne veut pas dire que tu es d’accord)", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.1': "Je prépare bien l’entretien.", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.2': "Je voudrais apprendre quelque chose de nouveau.", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.3': "Je peux d’abord lire le rapport ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.q': "Quel est ton objectif pour l’année prochaine ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.a': "Je voudrais passer mon certificat de cariste.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal': "Ton entretien : prépare-le, puis lis le rapport", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.b': "Beaucoup d’entreprises ont une discussion sur ton travail une ou deux fois par an. Dans un entretien annuel (functioneringsgesprek), vous parlez ensemble : ce qui va bien, ce qui peut être mieux, et ce que tu veux apprendre. Dans un entretien d’évaluation (beoordelingsgesprek), ton responsable donne un jugement. Ça peut compter pour ton salaire ou pour un nouveau contrat. Prépare l’entretien : note ce qui va bien, ce qui est difficile, et ce que tu veux apprendre. Tu peux demander un cours ou une formation. À la fin, vous prenez des accords (afspraken), souvent dans un court rapport. Lis-le bien avant de le signer, et demande une copie. Tu n’es pas d’accord ? Signe “voor gezien” (pris connaissance), pas “voor akkoord” (d’accord), et note ton propre avis. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.p': "Je signe pour prise de connaissance, pas pour accord.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.s': "Après ton entretien d’évaluation, tu reçois le rapport à signer. À ton avis, un point dedans n’est pas vrai. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o1': "Tu signes “voor gezien”, et tu notes ton avis.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o2': "Tu signes vite “voor akkoord”, comme ça c’est fini.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o3': "Tu ne dis rien, et tu ne signes pas du tout.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.w': "“Voor gezien” veut dire que tu l’as lu, pas que tu es d’accord. Quand tu le dis et que tu notes ton propre avis, ton responsable sait ce que tu penses.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
