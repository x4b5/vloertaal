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
    'c.je.o2': 'Elle te demande de dire quelque chose.', // nagelezen (2e lezing)
    'c.je.o3': 'Elle veut que tu parles plus poliment.', // nagelezen (2e lezing)
    'c.je.w': '“Zeg maar je”, c’est gentil : elle veut moins de distance. Dans beaucoup d’entreprises néerlandaises, c’est normal de dire “je” à un responsable.',
    'c.names': 'Le prénom et une poignée de main',
    'c.names.b': 'Le premier jour, serre la main rapidement, regarde la personne et dis ton prénom. Les collègues et les responsables utilisent en général les prénoms.',
    'c.names.p': { m: 'Salut, je suis Ali. Je suis nouveau ici.', f: 'Salut, je suis Ali. Je suis nouvelle ici.', x: 'Salut, je suis Ali. Je suis nouveau / nouvelle ici.' },
    'c.names.s': 'Un collègue vient vers toi : “Hoi, ik ben Mark.” Que fais-tu ?',
    'c.names.o1': 'Serre-lui la main et dis ton nom.', // nagelezen (2e lezing)
    'c.names.o2': 'Fais oui de la tête, souris et attends les questions.', // nagelezen (2e lezing)
    'c.names.o3': 'Serre-lui la main et appelle-le “meneer” (monsieur).', // nagelezen (2e lezing)
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
    'c.ask.o1': 'Demande qu’on t’explique encore une fois.', // nagelezen (2e lezing)
    'c.ask.o2': 'Fais oui de la tête et essaie de deviner.',
    'c.ask.o3': 'Excuse-toi pour ton néerlandais et commence à travailler.', // nagelezen (2e lezing)
    'c.ask.w': 'Ici, les responsables s’attendent à des questions. Mieux vaut demander deux fois que faire une erreur.', // nieuw, nalezen
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
    'c.unsafe.p': 'Stop ! C’est dangereux.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.unsafe.s': 'Une palette est empilée trop haut et tombe presque. Personne n’est blessé. Que fais-tu ?',
    'c.unsafe.o1': 'Préviens les collègues et dis-le à ton responsable.',
    'c.unsafe.o2': 'Ne dis rien, car il ne s’est rien passé.',
    'c.unsafe.o3': 'Répare toi-même la palette et ne le dis à personne.', // nieuw, nalezen
    'c.unsafe.w': 'Un presque-accident est un avertissement. Le signaler aide à éviter un vrai accident. Ton employeur n’a pas le droit de te punir parce que tu l’as signalé.',
    'c.alarm': 'L’alarme sonne : arrête-toi et sors', // nieuw, nalezen
    'c.alarm.b': 'Le premier jour, demande où sont les sorties de secours et le point de rassemblement. Quand l’alarme sonne, arrête tout de suite ton travail. Laisse tes affaires et sors par le chemin d’évacuation. Prends l’escalier, jamais l’ascenseur. Au point de rassemblement, on compte qui est dehors : alors reste là. Sors aussi quand tu penses que c’est seulement un exercice.', // nieuw, nalezen
    'c.alarm.p': { m: 'Je suis nouveau. Où est le point de rassemblement ?', f: 'Je suis nouvelle. Où est le point de rassemblement ?', x: 'Je suis nouveau / nouvelle. Où est le point de rassemblement ?' }, // nieuw, nalezen
    'c.alarm.s': 'L’alarme incendie sonne. Tu as presque fini une commande. Que fais-tu ?', // nieuw, nalezen
    'c.alarm.o1': 'Arrête-toi tout de suite et va au point de rassemblement.', // nieuw, nalezen
    'c.alarm.o2': 'Finis d’abord la commande, puis sors.', // nieuw, nalezen
    'c.alarm.o3': 'Va d’abord chercher ta veste et ton téléphone au casier.', // nieuw, nalezen
    'c.alarm.w': 'La fumée se répand vite, donc tu sors tout de suite. Tes affaires peuvent attendre. Au point de rassemblement, on compte tout le monde : ainsi, personne ne doit te chercher à l’intérieur.', // nieuw, nalezen
    'c.accident': 'Signale chaque accident',
    'c.accident.b': 'Parle de chaque accident à ton responsable ou au BHV’er (le secouriste de l’entreprise), même d’un petit. Tu travailles via une agence ? Préviens aussi l’agence. En cas d’urgence, appelle d’abord le 112. L’entreprise où l’accident a eu lieu doit déclarer un accident grave à la Nederlandse Arbeidsinspectie (même si tu travailles via une agence) : quand quelqu’un meurt, est blessé pour toute sa vie ou doit rester à l’hôpital. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.accident.p': 'Mon collègue est blessé. Où est le secouriste ?',
    'c.accident.s': 'Tu t’es fait mal au dos en soulevant quelque chose. Tu as peur de perdre ton travail. Que fais-tu ?',
    'c.accident.o1': 'Signale-le à ton responsable le jour même.', // nagelezen (2e lezing)
    'c.accident.o2': 'Ne dis rien, pour ne pas perdre ton travail.',
    'c.accident.o3': 'Attends de voir si la douleur part toute seule.',
    'c.accident.w': 'Signale-le le jour même, même si ça semble petit : la douleur peut empirer plus tard. Ton employeur n’a pas le droit de te punir parce que tu l’as signalé. Tu travailles via une agence ? Dis-le aussi à l’agence.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.notyet': 'Pas encore appris ? Dis-le',
    'c.notyet.b': 'L’entreprise où tu travailles doit t’expliquer comment faire ton travail en sécurité. N’utilise pas une machine ou un chariot élévateur si personne ne t’a appris à t’en servir. Dire “Dit heb ik nog niet geleerd” est normal ici : ça montre que tu travailles en sécurité.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.direct.o2': 'Excuse-toi plusieurs fois : ton collègue est en colère.', // nagelezen (2e lezing)
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
    'c.time.o1': 'Préviens tout de suite ton responsable.', // nagelezen (2e lezing)
    'c.time.o2': 'Explique-le quand tu arrives.',
    'c.time.o3': 'Ne va pas du tout au travail aujourd’hui.',
    'c.time.w': 'Prévenir tôt permet à l’équipe de s’organiser. Être en retard sans message est vu comme bien pire que le retard lui-même.',
    'c.sick': 'Comment te déclarer malade',
    'c.sick.b': 'Appelle toi-même ton responsable, avant le début de ton service, sauf si ton entreprise a une autre règle. Tu travailles via une agence ? Préviens aussi l’agence. Tu n’as pas besoin de dire quelle maladie tu as. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.sick.p': 'Je suis malade. Je ne peux pas venir travailler aujourd’hui.',
    'c.sick.s': 'Tu te réveilles avec de la fièvre. Ton service commence à 7 h 00. Que fais-tu ?',
    'c.sick.o1': 'Appelle ton responsable avant 7 h 00.', // nagelezen (2e lezing)
    'c.sick.o2': 'Demande à un collègue de le dire au patron plus tard.',
    'c.sick.o3': 'Reste à la maison et appelle demain.',
    'c.sick.w': 'Dans la plupart des entreprises aux Pays-Bas, la règle est de te déclarer malade toi-même et à temps. Ton employeur peut demander combien de temps ça va durer, mais pas quelle maladie tu as.',
    'c.speakup': 'Dis ce qui te gêne',
    'c.speakup.b': 'Ici, c’est normal et respecté de dire calmement quand quelque chose te gêne. Parle d’abord à la personne, à un moment calme. Utilise des phrases avec “ik” : “Ik vind het niet fijn dat ...”. Si ça n’aide pas, parle à ton responsable.',
    'c.speakup.p': 'Quelque chose me tracasse. On peut parler un moment ?',
    'c.speakup.s': 'Un collègue te laisse toujours le travail lourd. Ça te gêne. Que fais-tu ?',
    'c.speakup.o1': 'Dis au collègue ce qui te gêne.', // nagelezen (2e lezing)
    'c.speakup.o2': 'Tais-toi et énerve-toi de plus en plus.',
    'c.speakup.o3': 'Plains-toi de lui à tous les autres collègues.',
    'c.speakup.w': 'Les collègues néerlandais préfèrent en général l’entendre directement. Le dire tôt et calmement garde une bonne relation.',
    'c.no': '“Afspraak is afspraak”',
    'c.no.b': 'Quand tu dis “ja”, les gens comptent dessus : un accord, c’est un accord. Alors c’est bien de dire “nee” ou “dat lukt niet” quand tu ne peux pas faire quelque chose. Dis-le à temps et, si tu peux, propose une autre solution.',
    'c.no.p': 'Non, aujourd’hui ce n’est pas possible. Demain, je peux.',
    'c.no.s': 'Ton responsable demande si tu peux faire des heures en plus samedi. Tu ne peux pas. Que fais-tu ?',
    'c.no.o1': 'Dis non et propose un autre jour.', // nagelezen (2e lezing)
    'c.no.o2': 'Dis oui et puis ne viens pas.',
    'c.no.o3': 'Dis oui : on ne peut pas dire non à un chef.', // nagelezen (2e lezing)
    'c.no.w': 'Un “nee” clair est respecté. Dire “ja” et ne pas venir casse beaucoup plus la confiance.',
    'c.task': 'Dis quand c’est fini, demande quand ce n’est pas clair',
    'c.task.b': 'Aux Pays-Bas, un responsable donne souvent une tâche en quelques mots. Quand c’est fini, tu le dis. Dire “ja” quand tu n’as pas compris cause souvent des erreurs. Redemander, ou demander qu’on te montre, est normal ici et pas impoli.',
    'c.task.p': 'Fini ! Qu’est-ce que je dois faire maintenant ?',
    'c.task.s': 'Ton responsable explique une tâche très vite. Tu n’as compris que la moitié. Que fais-tu ?',
    'c.task.o1': 'Demande à le voir encore une fois.', // nagelezen (2e lezing)
    'c.task.o2': 'Commence par la moitié que tu as comprise.', // nagelezen (2e lezing)
    'c.task.o3': 'Attends qu’un collègue le fasse.',
    'c.task.w': 'Redemander est normal et prend une minute. Réparer une erreur prend bien plus de temps. La plupart des responsables préfèrent montrer deux fois.',
    'c.clear': 'Dis d’abord le plus important', // nieuw, nalezen
    'c.clear.b': 'Dans beaucoup de langues, il est poli de raconter d’abord toute l’histoire, et l’essentiel à la fin. Au travail ici, c’est l’inverse. Dis d’abord ce qui ne va pas ou ce dont tu as besoin. Ensuite, donne la raison. Parle calmement, et arrête-toi après deux ou trois phrases, pour que l’autre puisse poser une question. Dans un entretien d’embauche aussi : d’abord la réponse, puis un exemple. Parler lentement n’est pas impoli ici : ça aide les gens à te comprendre.',
    'c.clear.p': 'Pardon, je le redis calmement.', // nieuw, nalezen
    'c.clear.s': 'Tu arrives avec 20 minutes de retard. Ton responsable demande : “Wat is er?” Que fais-tu ?', // nieuw, nalezen
    'c.clear.o1': 'Dis d’abord que tu es en retard et excuse-toi. Puis dis pourquoi.', // nieuw, nalezen
    'c.clear.o2': 'Raconte tout ce qui s’est passé ce matin, depuis le début.', // nieuw, nalezen
    'c.clear.o3': 'Ne dis rien et commence vite à travailler.', // nieuw, nalezen
    'c.clear.w': 'Ton responsable veut d’abord savoir ce qui se passe. La raison vient après. Court et calme, c’est clair, et ici c’est aussi poli.', // nieuw, nalezen
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
    'l.clear': 'Court et clair', // nieuw, nalezen
    'w.kort': 'court', // nieuw, nalezen
    'w.duidelijk': 'clair', // nieuw, nalezen
    'w.belangrijkste': 'le plus important', // nieuw, nalezen
    'w.rustig': 'calme, calmement', // nieuw, nalezen
    'w.teveel': 'trop', // nieuw, nalezen
    'w.vraag': 'la question', // nieuw, nalezen
    's.clear.1': 'Je fais court : la machine est en panne.', // nieuw, nalezen
    's.clear.2': 'D’abord le plus important : je suis malade.', // nieuw, nalezen
    's.clear.3': 'Pardon, je parle trop vite et trop.', // nieuw, nalezen
    'd.clear.q': 'C’est clair ?', // nieuw, nalezen
    'd.clear.a': 'Oui. J’ai encore une question.', // nieuw, nalezen
    'l.newcolleague': "Aider un nouveau collègue", // nieuw, nalezen
    'w.welkom': "bienvenue", // nieuw, nalezen
    'w.inwerken': "former un nouveau collègue (les premiers jours)", // nieuw, nalezen
    'w.stap': "l’étape (une petite partie d’une tâche)", // nieuw, nalezen
    'w.nadoen': "refaire, imiter (faire ce que quelqu’un t’a montré)", // nieuw, nalezen
    'w.geduld': "la patience", // nieuw, nalezen
    'w.kast': "le placard, l’armoire", // nieuw, nalezen
    's.newcolleague.1': "Bienvenue ! Aujourd’hui, je te montre le travail.", // nieuw, nalezen
    's.newcolleague.2': "Regarde d’abord. Ensuite, tu refais pareil.", // nieuw, nalezen
    's.newcolleague.3': "Les gants sont dans ce placard.", // nieuw, nalezen
    'd.newcolleague.q': "J’ai compris, je crois.", // nieuw, nalezen
    'd.newcolleague.a': "Bien. Montre-moi.", // nieuw, nalezen
    'c.newcolleague': "Montre-le, étape par étape", // nieuw, nalezen
    'c.newcolleague.b': "Ce qui était difficile pour toi les premières semaines l’est aussi pour un nouveau collègue. Explique le travail en petites étapes : d’abord ceci, puis cela. Ne parle pas plus vite ni plus fort : montre, et laisse-le refaire après toi. Ne demande pas “Snap je het?” : beaucoup de gens disent oui, même quand ils ne comprennent pas. Dis plutôt “Laat eens zien”, et regarde. Dis-lui où sont les choses, comme les toilettes, la cantine et les gants. Aie de la patience (geduld) : apprendre prend du temps, pour tout le monde.", // nieuw, nalezen
    'c.newcolleague.p': "Bravo ! Maintenant, l’étape suivante.", // nieuw, nalezen
    'c.newcolleague.s': "Tu expliques une tâche à un nouveau collègue. Il dit : “Ja, ja, ik snap het.” Que fais-tu ?", // nieuw, nalezen
    'c.newcolleague.o1': "Tu dis “Laat eens zien,” et tu le regardes faire.", // nieuw, nalezen
    'c.newcolleague.o2': "Tu dis “Goed zo,” et tu retournes à ton travail.", // nieuw, nalezen
    'c.newcolleague.o3': "Tu réexpliques tout, plus vite et plus fort.", // nieuw, nalezen
    'c.newcolleague.w': "Beaucoup de gens disent “ja”, même quand ils n’ont pas compris. Quand il le montre, vous voyez tous les deux si ça marche. C’est plus rapide que de corriger une erreur plus tard.", // nieuw, nalezen
    'u.communicate': 'Bien communiquer', // nieuw, nalezen
    'l.explain': 'Dire ce qui ne va pas', // nieuw, nalezen
    'w.ietsmis': 'quelque chose ne va pas', // nieuw, nalezen
    'w.stilstaan': 'être à l’arrêt, s’être arrêté (une machine, un tapis)', // nieuw, nalezen
    'w.lampje': 'le voyant (lumineux)', // nieuw, nalezen
    'w.komen': 'venir', // nieuw, nalezen
    'w.nodighebben': 'avoir besoin de', // nieuw, nalezen
    'w.meteen': 'tout de suite', // nieuw, nalezen
    's.explain.1': 'Le tapis est à l’arrêt. À la ligne deux. Tu peux venir ?', // nieuw, nalezen
    's.explain.2': 'Un voyant rouge est allumé sur la machine.', // nieuw, nalezen
    's.explain.3': 'C’est dangereux. Tu peux venir tout de suite ?', // nieuw, nalezen
    'd.explain.q': 'Qu’est-ce qui ne va pas ?', // nieuw, nalezen
    'd.explain.a': 'Le scanner ne marche pas. J’en ai besoin d’un nouveau.', // nieuw, nalezen
    'l.listen': 'Bien écouter', // nieuw, nalezen
    'w.uitpraten': 'finir de parler (laisser quelqu’un finir)', // nieuw, nalezen
    'w.onderbreken': 'interrompre, couper la parole', // nieuw, nalezen
    'w.aankijken': 'regarder (quelqu’un)', // nieuw, nalezen
    'w.bedoelen': 'vouloir dire', // nieuw, nalezen
    'w.dus': 'donc (pour vérifier ce que tu as entendu)', // nieuw, nalezen
    'w.doorvragen': 'poser d’autres questions (jusqu’à ce que ce soit clair)', // nieuw, nalezen
    's.listen.1': 'Donc d’abord compter les cartons, et puis emballer ?', // nieuw, nalezen
    's.listen.2': 'Qu’est-ce que tu veux dire par ce mot ?', // nieuw, nalezen
    's.listen.3': 'Pardon, finis ce que tu disais.', // nieuw, nalezen
    'd.listen.q': 'Demain, tu commences déjà à quatre heures.', // nieuw, nalezen
    'd.listen.a': 'C’est vrai ? Ou c’était une blague ?', // nieuw, nalezen
    'l.calm': 'Rester calme', // nieuw, nalezen
    'w.nadenken': 'réfléchir (à quelque chose)', // nieuw, nalezen
    'w.ademhalen': 'respirer', // nieuw, nalezen
    'w.oplossen': 'résoudre, régler', // nieuw, nalezen
    'w.druk': 'chargé (beaucoup à faire)', // nieuw, nalezen
    'w.straks': 'tout à l’heure (aujourd’hui), dans un moment', // nieuw, nalezen
    'w.misverstand': 'le malentendu', // nieuw, nalezen
    's.calm.1': 'Je veux régler ça calmement.', // nieuw, nalezen
    's.calm.2': 'Je peux réfléchir un moment ?', // nieuw, nalezen
    's.calm.3': 'On peut en parler tout à l’heure ?', // nieuw, nalezen
    'd.calm.q': 'Pourquoi ce n’est pas encore fini ?', // nieuw, nalezen
    'd.calm.a': 'Pardon, il y a beaucoup de travail. Qu’est-ce qui passe en premier ?', // nieuw, nalezen
    'l.talkintime': 'En parler à temps', // nieuw, nalezen
    'w.gesprek': 'l’entretien, la conversation', // nieuw, nalezen
    'w.bespreken': 'parler de, discuter de', // nieuw, nalezen
    'w.zorgenmaken': 's’inquiéter', // nieuw, nalezen
    'w.oplossing': 'la solution', // nieuw, nalezen
    'w.ineens': 'tout à coup, d’un coup', // nieuw, nalezen
    'w.wegblijven': 'ne pas venir (ne pas venir au travail)', // nieuw, nalezen
    's.talkintime.1': 'Quelque chose me tracasse. Tu as un moment ?', // nieuw, nalezen
    's.talkintime.2': 'Je veux parler de quelque chose avec toi.', // nieuw, nalezen
    's.talkintime.3': 'Je pense à arrêter. On peut d’abord en parler ?', // nieuw, nalezen
    'd.talkintime.q': 'Tu as un moment ? Quelque chose me tracasse.', // nieuw, nalezen
    'd.talkintime.a': 'Bien sûr. Qu’est-ce qu’il y a ?', // nieuw, nalezen
    'l.reachable': 'Être joignable', // nieuw, nalezen
    'w.opnemen': 'répondre (au téléphone), décrocher', // nieuw, nalezen
    'w.gemisteoproep': 'l’appel manqué', // nieuw, nalezen
    'w.voicemail': 'la messagerie vocale', // nieuw, nalezen
    'w.beltegoed': 'le crédit téléphonique (prépayé)', // nieuw, nalezen
    'w.bereik': 'le réseau (sur ton téléphone)', // nieuw, nalezen
    'w.onbekend': 'inconnu (un numéro inconnu)', // nieuw, nalezen
    's.reachable.1': 'Mon néerlandais n’est pas encore bon. Vous pouvez parler lentement ?', // nieuw, nalezen
    's.reachable.2': 'Vous pouvez aussi l’envoyer par message ?', // nieuw, nalezen
    's.reachable.3': 'J’ai un nouveau numéro.', // nieuw, nalezen
    'd.reachable.q': 'Bonjour, ici le service planning.', // nieuw, nalezen
    'd.reachable.a': 'Bonjour. Vous avez appelé ? Pardon, j’ai manqué l’appel.', // nieuw, nalezen
    'c.explain': 'Quoi, où, ce dont tu as besoin', // nieuw, nalezen
    'c.explain.b': 'Quand quelque chose ne va pas au travail, dis-le en trois étapes. D’abord ce qui ne va pas : “De band staat stil.” Puis où : “Bij lijn twee.” Puis ce dont tu as besoin : “Kun je komen?” Maintenant l’autre sait quoi faire, sans beaucoup de questions. Tu ne connais pas le mot ? Montre la chose du doigt. C’est dangereux ? Dis-le d’abord : “Het is gevaarlijk.” Un accident ? D’abord, va chercher de l’aide (plus dans la leçon “Signaler un accident”).', // nieuw, nalezen
    'c.explain.p': 'Tu peux venir voir ?', // nieuw, nalezen
    'c.explain.s': 'Le scanner à ton poste ne marche plus. Tu appelles ton chef d’équipe. Que dis-tu ?', // nieuw, nalezen
    'c.explain.o1': '“De scanner is kapot. Bij gang vier. Kun je komen?”', // nieuw, nalezen
    'c.explain.o2': '“Hallo, ik heb een probleem.” Puis tu attends.', // nieuw, nalezen
    'c.explain.o3': '“Sorry, sorry! Het is niet mijn schuld!”', // nieuw, nalezen
    'c.explain.w': 'Maintenant ton chef d’équipe sait ce qui ne va pas, où, et ce dont tu as besoin. Personne ne doit d’abord poser trois questions.', // nieuw, nalezen
    'c.listen': 'D’abord écouter, puis vérifier', // nieuw, nalezen
    'c.listen.b': 'Laisse l’autre finir de parler (uitpraten) avant de répondre. Regarde la personne qui te parle : ici, ça montre que tu écoutes. Dans beaucoup de pays, on ne regarde pas son chef dans les yeux. C’est un signe de respect. Ici, le regarder de temps en temps est poli. Quand l’autre a fini, répète ce que tu as entendu : “Dus eerst …, en dan …?” Tu ne sais pas bien ce qu’un mot veut dire ? Demande : “Wat bedoel je met …?” Certains collègues font des blagues avec un air sérieux. Tu as un doute ? Demande : “Was dat een grapje?”',
    'c.listen.p': 'Attends, je veux bien comprendre.', // nieuw, nalezen
    'c.listen.s': 'Ta responsable explique une nouvelle tâche. Tu veux dire quelque chose, mais elle parle encore. Que fais-tu ?', // nieuw, nalezen
    'c.listen.o1': 'Laisse-la finir. Puis répète ce que tu as entendu.', // nieuw, nalezen
    'c.listen.o2': 'Commence tout de suite à parler, pour ne pas oublier.', // nieuw, nalezen
    'c.listen.o3': 'Dis oui à tout et ne pose aucune question.', // nieuw, nalezen
    'c.listen.w': 'Quand elle a fini, tu connais toute la tâche. Répéter montre que tu as écouté, et elle peut encore te corriger.', // nieuw, nalezen
    'c.calm': 'Reste calme, même quand c’est dur', // nieuw, nalezen
    'c.calm.b': 'Tout le monde se fâche parfois, au travail aussi. Quelqu’un est en colère contre toi ? Écoute d’abord, et reste calme. Tu n’as pas besoin de répondre tout de suite : “Mag ik even nadenken?” Tu t’énerves toi-même ? Respire lentement, et dis : “Kunnen we straks praten?” Parlez-en ensuite, quand le calme est revenu. Beaucoup de travail ? Demande ce qui doit être fait d’abord. Crier, menacer ou pousser, ce n’est jamais acceptable au travail. Dis stop, et préviens ton responsable (plus dans les leçons “Le respect pour tout le monde” et “Dépasser les limites”).', // nieuw, nalezen
    'c.calm.p': 'Je pense que c’est un malentendu.', // nieuw, nalezen
    'c.calm.s': 'Un collègue est en colère : la palette n’est pas au bon endroit. Tu penses que ce n’était pas toi. Que fais-tu ?', // nieuw, nalezen
    'c.calm.o1': 'Reste calme, écoute, puis dis ce que tu sais.', // nieuw, nalezen
    'c.calm.o2': 'Fâche-toi aussi, et parle plus fort.', // nieuw, nalezen
    'c.calm.o3': 'Pars et ne lui parle plus.', // nieuw, nalezen
    'c.calm.w': 'Quand tu restes calme, l’autre se calme souvent aussi. Vous pouvez alors chercher ce qui s’est passé, et régler ça ensemble.', // nieuw, nalezen
    'c.talkintime': 'Parles-en tant que c’est petit', // nieuw, nalezen
    'c.talkintime.b': 'Un petit problème devient grand quand tu n’en parles pas. Alors tu te fâches tout à coup, ou tu arrêtes tout à coup. Parle à temps : à ton responsable, à un collègue ou à la personne de confiance (vertrouwenspersoon), s’il y en a une. Demande un moment : “Heb je even tijd?” Dis en quelques mots quel est le problème et ce que tu veux. Tu penses à démissionner ? Parle d’abord. Il y a souvent une solution, comme un autre horaire ou une autre tâche. Si tu démissionnes toi-même, tu peux perdre ton allocation (uitkering), et il y a souvent un préavis (opzegtermijn). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen
    'c.talkintime.p': 'On peut chercher une solution ensemble ?', // nieuw, nalezen
    'c.talkintime.s': 'Depuis des semaines, ton planning pose problème. Aujourd’hui, tu es en colère et tu veux arrêter tout de suite. Que fais-tu ?', // nieuw, nalezen
    'c.talkintime.o1': 'Demande d’abord un entretien à ton responsable.', // nieuw, nalezen
    'c.talkintime.o2': 'Pars maintenant et ne reviens pas.', // nieuw, nalezen
    'c.talkintime.o3': 'Ne dis rien et continue.', // nieuw, nalezen
    'c.talkintime.w': 'En parler à temps garde un problème petit. Il y a souvent une solution, et souvent tu gardes ainsi ton emploi et ton revenu.', // nieuw, nalezen
    'c.reachable': 'Décroche, ou rappelle le jour même', // nieuw, nalezen
    'c.reachable.b': 'Les agences et les employeurs appellent souvent quand il y a du travail. Souvent, la première personne qui décroche, ou qui rappelle, a le travail. Tu as manqué un appel ? Rappelle le jour même. Pas de téléphone au travail ? Rappelle pendant ta pause. Écoute ta messagerie vocale, et garde un peu de crédit (beltegoed) sur ton téléphone. Tu as du mal à comprendre au téléphone ? Dis-le, et demande : “Kunt u het ook appen?” Quelqu’un te demande de l’argent ou des codes ? Raccroche (plus dans la leçon “Attention aux arnaques”). Un nouveau numéro ? Donne-le à ton travail, à l’agence et à la mairie (gemeente).', // nieuw, nalezen
    'c.reachable.p': 'Je vous rappelle pendant ma pause.', // nieuw, nalezen
    'c.reachable.s': 'Pendant ta pause, tu vois un appel manqué de l’agence. Que fais-tu ?', // nieuw, nalezen
    'c.reachable.o1': 'Rappelle maintenant, pendant ta pause.', // nieuw, nalezen
    'c.reachable.o2': 'Attends qu’ils te rappellent.', // nieuw, nalezen
    'c.reachable.o3': 'Rappelle la semaine prochaine, quand tu es libre.', // nieuw, nalezen
    'c.reachable.w': 'Les agences appellent souvent quand il y a du travail. Quand tu rappelles le jour même, tu montres que tu le veux, et tu as peut-être le travail.', // nieuw, nalezen
    'u.feedback': 'Feedback et réunions d’équipe', // nieuw, nalezen
    'l.getfeedback': 'Recevoir un feedback', // nieuw, nalezen
    'w.tip': 'le conseil, l’astuce (un petit conseil)', // nieuw, nalezen
    'w.verbeterpunt': 'le point à améliorer (ce qui peut être mieux)', // nieuw, nalezen
    'w.goedbedoeld': 'bien intentionné (pour t’aider)', // nieuw, nalezen
    'w.kritiek': 'la critique (ce que quelqu’un ne trouve pas bien)', // nieuw, nalezen
    'w.normaal': 'normal', // nieuw, nalezen
    'w.positief': 'positif (sur ce qui va bien)', // nieuw, nalezen
    's.getfeedback.1': 'Merci, c’est bon à savoir.', // nieuw, nalezen
    's.getfeedback.2': 'Tu peux donner un exemple ?', // nieuw, nalezen
    's.getfeedback.3': 'Qu’est-ce que je peux faire mieux ?', // nieuw, nalezen
    'd.getfeedback.q': 'Je peux te donner un peu de feedback ?', // nieuw, nalezen
    'd.getfeedback.a': 'Oui, volontiers. Je veux bien faire.', // nieuw, nalezen
    'l.givefeedback': 'Donner un feedback', // nieuw, nalezen
    'w.dichtplakken': 'fermer avec du ruban adhésif', // nieuw, nalezen
    'w.netjes': 'propre, soigné', // nieuw, nalezen
    'w.scheef': 'de travers, pas droit', // nieuw, nalezen
    'w.vriendelijk': 'aimable, gentil', // nieuw, nalezen
    'w.concreet': 'concret (avec un exemple clair)', // nieuw, nalezen
    'w.ondervierogen': 'en privé (rien que vous deux)', // nieuw, nalezen
    's.givefeedback.1': 'Ça, tu le fais bien.', // nieuw, nalezen
    's.givefeedback.2': 'Tu peux aussi fermer les cartons avec du ruban adhésif ?', // nieuw, nalezen
    's.givefeedback.3': 'Je vois que les cartons sont de travers.', // nieuw, nalezen
    'd.givefeedback.q': 'Qu’est-ce que tu penses de mon travail ?', // nieuw, nalezen
    'd.givefeedback.a': 'C’est soigné ! Seulement, les cartons sont de travers.', // nieuw, nalezen
    'l.meeting': 'Prendre la parole en réunion d’équipe', // nieuw, nalezen
    'w.werkoverleg': 'la réunion d’équipe (sur le travail)', // nieuw, nalezen
    'w.beurt': 'le tour (ton moment pour parler)', // nieuw, nalezen
    'w.idee': 'l’idée', // nieuw, nalezen
    'w.mening': 'l’avis, l’opinion (ce que tu en penses)', // nieuw, nalezen
    'w.handopsteken': 'lever la main', // nieuw, nalezen
    'w.agenda': 'l’ordre du jour (la liste des points de la réunion)', // nieuw, nalezen
    's.meeting.1': 'Je peux dire quelque chose ?', // nieuw, nalezen
    's.meeting.2': 'J’ai une question sur le planning.', // nieuw, nalezen
    's.meeting.3': 'J’ai une idée.', // nieuw, nalezen
    'd.meeting.q': 'Quelqu’un a encore une question ?', // nieuw, nalezen
    'd.meeting.a': 'Oui. Quand est-ce que le nouveau planning arrive ?', // nieuw, nalezen
    'c.getfeedback': 'Le feedback parle de ton travail', // nieuw, nalezen
    'c.getfeedback.b': 'Le feedback, c’est ce que quelqu’un dit de ton travail : ce qui va bien, et ce qui peut être mieux. Ça parle de ton travail, pas de toi. Au travail ici, le feedback est normal et sert à aider. Ce que tu dois faire autrement n’est pas clair ? Demande un exemple. Écoute d’abord, et ne te défends pas tout de suite. Ensuite, dis merci, et essaie. Tu peux aussi demander toi-même du feedback : “Wat kan ik beter doen?”', // nieuw, nalezen
    'c.getfeedback.p': 'Merci. Tu peux donner un exemple ?', // nieuw, nalezen
    'c.getfeedback.s': 'Ta responsable regarde ton travail et dit : “Dit kan beter.” Tu ne sais pas ce qu’elle veut dire. Que fais-tu ?', // nieuw, nalezen
    'c.getfeedback.o1': 'Dis merci, et demande un exemple.', // nieuw, nalezen
    'c.getfeedback.o2': 'Dis que tu as vraiment fait de ton mieux.', // nieuw, nalezen
    'c.getfeedback.o3': 'Fais oui de la tête, et refais pareil.', // nieuw, nalezen
    'c.getfeedback.w': 'Le feedback sert à t’aider. Un exemple montre ce qu’elle veut. Et un “merci” montre que tu écoutes.', // nieuw, nalezen
    'c.givefeedback': 'Donner un feedback : d’abord le positif', // nieuw, nalezen
    'c.givefeedback.b': 'Tu veux dire quelque chose sur le travail d’un collègue ? Dis d’abord ce qui va bien. Puis dis gentiment et clairement ce qui peut être mieux, avec un exemple. Dis-le au bon moment, à cette personne seule, pas quand tout le monde est là. Dis ce que tu vois, pas ce que tu penses de la personne : “Ik zie dat ...”. Reste aimable : tu veux aider, pas gagner.', // nieuw, nalezen
    'c.givefeedback.p': 'Ça, tu le fais bien. Tu peux aussi fermer les cartons avec du ruban adhésif ?', // nieuw, nalezen
    'c.givefeedback.s': 'Un nouveau collègue oublie de fermer les cartons avec du ruban adhésif. Vous êtes tous à la cantine. Que fais-tu ?', // nieuw, nalezen
    'c.givefeedback.o1': 'Plus tard, seul à seul : d’abord ce qui va bien, puis les cartons.', // nieuw, nalezen
    'c.givefeedback.o2': 'Dis-lui devant tout le monde que c’est mal fait.', // nieuw, nalezen
    'c.givefeedback.o3': 'Ne dis rien, et ferme ses cartons toi-même.', // nieuw, nalezen
    'c.givefeedback.w': 'Seul avec toi, il peut écouter sans avoir honte. Quand tu dis d’abord ce qui va bien, il entend mieux le reste.', // nieuw, nalezen
    'c.meeting': 'Ta voix compte en réunion', // nieuw, nalezen
    'c.meeting.b': 'Beaucoup d’équipes ont une courte réunion sur le travail (het werkoverleg). Ton avis y est le bienvenu, même si ton néerlandais n’est pas parfait. Une question est aussi une bonne contribution : d’autres veulent peut-être le savoir aussi. Attends ton tour, et laisse l’autre finir. Puis lève la main, ou dis : “Mag ik iets zeggen?” Tu n’oses pas le dire devant le groupe ? Dis-le à ton responsable après la réunion.', // nieuw, nalezen
    'c.meeting.p': 'Je peux dire quelque chose ? J’ai une idée.', // nieuw, nalezen
    'c.meeting.s': 'En réunion d’équipe, ta responsable explique le nouveau planning. Tu ne comprends pas quand ton service commence. Que fais-tu ?', // nieuw, nalezen
    'c.meeting.o1': 'Quand elle s’arrête de parler, pose ta question.', // nieuw, nalezen
    'c.meeting.o2': 'Ne dis rien, pour ne pas perdre de temps.', // nieuw, nalezen
    'c.meeting.o3': 'Demande tout de suite, pendant qu’elle parle encore.', // nieuw, nalezen
    'c.meeting.w': 'Une question est une bonne contribution : d’autres n’ont peut-être pas compris non plus. Quand tu attends ton tour, tout le monde peut l’entendre.', // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': "Un article manque ? Dis-le", // nieuw, nalezen
    'c.picking.b': "La case est vide, ou l’article n’est pas là ? Ne prends pas un autre article qui ressemble : sinon le client reçoit la mauvaise chose. Dis-le à ton chef d’équipe, ou signale-le dans le scanner. Vérifie le numéro sur l’autocollant, pas seulement la couleur ou l’image. Travailler avec précision est plus important que travailler vite.", // nieuw, nalezen
    'c.picking.p': "Cet article manque. Qu’est-ce que je dois faire ?", // nieuw, nalezen
    'c.picking.s': "La case est vide. Dans la case d’à côté, il y a un article presque pareil. Que fais-tu ?", // nieuw, nalezen
    'c.picking.o1': "Signale que l’article manque.", // nieuw, nalezen
    'c.picking.o2': "Prends l’autre article : il est pareil.", // nieuw, nalezen
    'c.picking.o3': "Saute l’article et ne dis rien.", // nieuw, nalezen
    'c.picking.w': "Un mauvais article revient, et ça prend plus de temps que de demander. Quand tu le signales, quelqu’un peut remplir la case ou changer la commande.", // nieuw, nalezen
    'c.loading': "Jamais derrière un camion qui recule", // nieuw, nalezen
    'c.loading.b': { m: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vu. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte.", f: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vue. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte.", x: "Le chauffeur ne peut pas tout voir derrière le camion. Ne passe jamais derrière un camion qui recule, et ne reste pas entre le camion et la porte. Attends que le camion soit à l’arrêt et que le chauffeur t’ait vu / vue. Une palette manque ou est cassée quand tu décharges ? Dis-le avant que le chauffeur parte." }, // nieuw, nalezen
    'c.loading.p': "Attends un moment. Le camion recule.", // nieuw, nalezen
    'c.loading.s': "Un camion recule vers la porte. Tu veux vite traverser derrière lui. Que fais-tu ?", // nieuw, nalezen
    'c.loading.o1': "Attends que le camion soit à l’arrêt.", // nieuw, nalezen
    'c.loading.o2': "Cours derrière : tu es assez rapide.", // nieuw, nalezen
    'c.loading.o3': "Passe derrière et fais signe au chauffeur.", // nieuw, nalezen
    'c.loading.w': "Derrière un camion, il y a un endroit que le chauffeur ne peut pas voir. Attendre coûte une minute. Un accident à cet endroit est très grave.", // nieuw, nalezen
  },
};

export default t;
