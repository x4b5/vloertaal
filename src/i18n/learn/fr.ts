import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "Pas besoin de micro. Dis-le à voix haute, puis continue.",
    micRetry: "Réessayer le micro",
    micFailed: "Le micro n’a pas marché. Dis-le à voix haute, puis continue.",
    micRefused: "L’app ne peut pas utiliser ton micro. Tu peux l’activer.", // nieuw, nalezen
    micTurnOn: "Active le micro", // nieuw, nalezen
    micStepsIos: "Touche « ••• » ou « aA » dans la barre d’adresse › Réglages du site web › Micro › Autoriser. Ou : Réglages › Apps › Safari › Micro. Puis touche le bouton ci-dessous.", // nieuw, nalezen
    micStepsIosOther: "Touche l’icône à gauche de l’adresse web › Autorisations › Micro › Autoriser. Ou : Réglages › Apps › {app} › Micro. Puis touche le bouton ci-dessous.", // nieuw, nalezen
    micStepsAndroid: "Touche l’icône à gauche de l’adresse web › Autorisations › Micro › Autoriser. Puis touche le bouton ci-dessous.", // nieuw, nalezen
    micStepsAndroidApp: "Appuie longtemps sur l’icône de Vloertaal sur ton écran d’accueil › Infos sur l’appli › Autorisations › Micro › Autoriser. Puis touche le bouton ci-dessous.", // nieuw, nalezen
    micStepsDesktop: "Clique sur l’icône à gauche de l’adresse web › Micro › Autoriser. Puis clique sur le bouton ci-dessous.", // nieuw, nalezen
    whichPicture: "C’est quelle image ?",
    sayAloudInstead: "Dis-le plutôt à voix haute",
    wordsPractised: "Mots pratiqués",
    reviewComplete: "Révision terminée !",
  },
  gloss: {
    'c.hello.a.why': "À un au revoir, on répond par un au revoir.",
    'c.people.a.why': "La question demande un nom. Cette réponse en donne un.",
    'c.arrive.a.why': "On te demande pourquoi tu viens : cette réponse dit que tu es une nouvelle recrue et que tu commences aujourd’hui.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.understand.a.why': "Pas compris ? C’est normal de demander à réentendre.",
    'c.translate.a.why': "Le petit mot n’est pas encore clair, alors on le traduit d’abord.",
    'c.understood.a.why': "Redire la tâche permet de vérifier que la consigne est claire.",
    'c.keeplearning.a.why': "Demander à parler néerlandais, c’est bien : la pratique aide.",
    'c.gear.a.why': "La question parle du casque : oui, il est sur la tête.",
    'c.danger.a.why': "En cas d’accident, on appelle d’abord le 112.",
    'c.alarm.a.why': "On demande si tout le monde est sorti : cette réponse dit qui manque encore.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "On demande ce qui s’est passé : cette réponse dit ce qui s’est passé et comment il va.",
    'c.notyet.a.why': "On te dit “essaie” : la réponse sûre, c’est de demander qu’on te montre d’abord.",
    'c.things.a.why': "La question demande où. Cette réponse donne un endroit.",
    'c.directions.a.why': "À gauche ou à droite ? Cette réponse en choisit un et dit où.",
    'c.shift.a.why': "Le service commence quand ? Cette réponse donne le jour et l’heure.",
    'c.sick.a.why': "Malade, ça veut dire rester à la maison, et le dire.",
    'd.speakup.a.why': "On demande si quelque chose ne va pas : un oui honnête, c’est bien.",
    'd.agree.a.why': "On a le droit de dire non. Proposer un autre jour aide.",
    'd.task.a.why': "On demande si c’est fini : cette réponse dit presque, et combien de temps encore.",
    'd.clear.a.why': 'On demande si c’est clair : d’abord oui, puis la seule question.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "Une référence, c’est un ancien patron qui peut parler de ton travail.",
    'c.interview.a.why': "Dans un entretien d’embauche, c’est l’expérience de travail qui compte.",
    'c.findwork.a.why': "La question demande quel travail. Cette réponse le nomme.",
    'c.contract.a.why': "Un oui et une question sur l’heure : c’est clair et motivé.",
    'c.agency.a.why': "On pose une question sur les heures : oui, et la réponse dit quand et comment.",
    'c.bsn.a.why': "Un employeur peut demander à voir une pièce d’identité, comme un passeport.",
    'c.housing.a.why': "L’argent retiré du salaire doit être convenu par écrit.",
    'c.payslip.a.why': "Des heures qui manquent sur la fiche de paie, il faut le signaler.",
    'c.extra.a.why': "Les heures sup sont notées, pour pouvoir les vérifier sur la fiche de paie.",
    'c.phone.a.why': "Pas de téléphone près des machines : les messages attendent la pause.",
    'c.smoking.a.why': "Les pauses sont à heures fixes, pas avant.",
    'c.clock.a.why': "Pointer pour quelqu’un d’autre est interdit.",
    'c.hygiene.a.why': "Charlotte sur la tête, bijoux enlevés : des règles pour une nourriture propre.",
    'c.smalltalk.a.why': "La question parle du week-end : une seule chose suffit.",
    'c.mistakes.a.why': "À un compliment, on répond merci.",
    'c.respect.a.why': "Le harcèlement, il faut le dire, pour que quelqu’un puisse aider.",
    'c.gossip.a.why': "Ne pas participer aux ragots garde la confiance dans l’équipe.",
    'c.boundaries.a.why': "Une blague qui fait mal, on peut l’arrêter, clairement.",
    'c.health.a.why': "Une pause protège la santé, alors on la prend.",
    'c.rights.a.why': "On ne signe jamais un licenciement tout de suite. D’abord, on demande conseil.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mustmay.a.why': "Volontaire veut dire qu’on peut choisir : travailler le samedi n’est pas nécessaire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "Quand ? Cette réponse donne un mois et la durée.",
    'c.illness.a.why': "Les détails médicaux sont pour le médecin du travail, pas pour le patron.",
    'c.warning.a.why': "Un employeur peut copier un passeport, pas le garder.",
    'c.gethelp.a.why': "Dire clairement ce qui ne va pas leur permet d’aider.",
    'c.callin.a.why': "De retour quand ? Cette réponse donne un jour.",
    'c.texting.a.why': "Une réponse rapide dans l’appli aide le planning.",
    'c.certs.a.why': "Un non honnête, avec l’envie d’apprendre : une bonne réponse.",
    'c.diploma.a.why': "Dire oui à une formation et demander qui paie, c’est normal.",
    'c.doctor.a.why': "Le service de garde des médecins doit savoir qui est malade et ce qui ne va pas.",
    'c.insurance.a.why': "Le nom de l’assureur est sur la carte d’assurance maladie.",
    'c.letters.a.why': "La déclaration d’impôts est à faire avant le 1er mai.",
    'c.scams.a.why': "Une banque ne demande jamais un code PIN. Raccrocher, c’est bien.",
    'c.bike.a.why': "Comment ? Cette réponse donne le moyen de transport et la durée.",
    'c.transit.a.why': "Pas le train : cette réponse nomme le bus à la place.",
    'c.ww.a.why': "L’allocation chômage (WW), il faut la demander tout de suite.",
    'c.newjob.a.why': "Un numéro de téléphone leur permet de rappeler.",
    'c.tools.a.why': "Où ? Cette réponse donne l’endroit : dans la camionnette.",
    'c.site.a.why': "Sur un toit, la protection contre les chutes passe toujours en premier.",
    'c.line.a.why': "Ça va comment ? Cette réponse dit comment, et nomme le problème.",
    'c.quality.a.why': "Pourquoi mis de côté ? Cette réponse donne le défaut.",
    'c.client.a.why': "Un résident demande de l’aide : un oui poli, avec “u”.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.privacy.a.why': "Les médicaments, c’est pour le personnel formé : c’est l’infirmière qui les donne.",
    'c.kitchen.a.why': "Une allergie, c’est sérieux : le chef doit le savoir.",
    'c.service.a.why': "On demande l’addition : un oui court, et on y va.",
    'c.cleaning.a.why': "Fini ? Cette réponse dit presque, et combien il en reste.",
    'c.cleansafe.a.why': "Un sol mouillé est glissant : prévenir aide.",
    'c.shelves.a.why': "On demande où : cette réponse nomme le rayon et aide.",
    'c.checkout.a.why': "On demande si on peut payer par carte : un oui aimable.",
    'c.counting.a.why': "On demande combien : cette réponse donne le nombre et le vérifie chiffre par chiffre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "On demande l’heure : cette réponse donne une heure.",
    'c.measures.a.why': "On demande la longueur : cette réponse donne une longueur.",
    'c.aihelp.a.why': "On demande qui l’a écrit : un oui honnête qui nomme l’aide.",
    'c.aiprivate.a.why': "On demande de mettre des noms dans un chatbot : cette réponse dit non, et pourquoi.",
    'c.aifake.a.why': "Un nouveau numéro demande de l’argent : cette réponse vérifie d’abord.",
    'c.aiplan.a.why': "Une appli a fait le planning : cette réponse demande à parler à une personne.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "On demande combien de rangées : cette réponse donne un nombre, et ce qui reste.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "Elle vient d’être traitée : cette réponse dit “pas encore” et pourquoi.", // nagelezen (2e lezing) // nagelezen AI ronde 3 // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "On demande le nom de famille : cette réponse le donne et propose de l’épeler.", // nagelezen AI 22 nov
    'c.dates.a.why': "On demande la date : cette réponse donne le jour et la date.", // nagelezen AI 22 nov
    'c.permit.a.why': "Dire non, ça va si tu donnes une raison. Proposer un autre jour, ça aide.", // nagelezen AI 22 nov
    'c.kids.a.why': "On demande pourquoi : cette réponse donne la raison, la crèche a appelé.", // nagelezen AI 22 nov
    'c.body.a.why': "On demande où tu as mal : cette réponse dit l’endroit et la cause.", // nagelezen AI 22 nov
    'c.jobends.a.why': "Le logement va avec le travail : cette réponse demande quel est le préavis.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "Un mot n’est pas clair : demander avant de commencer, c’est la bonne réponse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "On demande si tout est fini : cette réponse dit ce qui ne l’est pas, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "On demande pourquoi : cette réponse donne la raison, les yeux doivent être protégés.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "Un travail sur une lampe : cette réponse demande d’abord si le courant est coupé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "On demande de changer les pneus : un oui, et une question sur où ils sont.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "Du travail en plus : le client doit d’abord être d’accord, donc cette réponse demande au chef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "On demande quand : cette réponse donne le jour, et la convention passe d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "Le retour n’est pas encore clair : demander qu’on montre, c’est une bonne réponse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "On parle du vote : un oui, et les deux choses à prendre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "La police demande la pièce d’identité : la montrer et demander ce qui se passe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "On demande si la connexion marche : cette réponse dit non, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "On pose une question sur le lien : un oui honnête, et un appel au service informatique.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mychoice.a.why': "On demande les points forts : cette réponse en nomme un, avec un exemple.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "On demande le projet : cette réponse nomme la bbl et ce que ça veut dire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "On demande s’il est envoyé : pas encore, il est d’abord vérifié.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "On propose de payer plus tard : un non poli, avec la raison.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "On propose un cachet : un non poli, avec la raison.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "“Je crois”, ce n’est pas encore sûr : demander à voir permet de vérifier que ça marche.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.explain.a.why': 'On demande ce qui ne va pas : cette réponse dit quoi, et ce qu’il faut.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': 'Tu ne sais pas si c’est une blague : demander vaut mieux que deviner.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': 'On demande pourquoi ce n’est pas fini : une raison dite calmement, et ce qui passe d’abord.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': 'Quelqu’un demande un moment : un oui, et une question pour qu’il puisse raconter.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': 'Tu rappelles après un appel manqué : un bonjour, et pourquoi tu appelles.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': 'On te propose un feedback : un oui, et que tu veux bien faire.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': 'On te demande ce que tu penses du travail : d’abord ce qui est bien, puis ce qui peut être mieux.', // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': 'On demande s’il y a des questions : cette réponse en pose une, sur le planning.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "On demande pourquoi on nettoie la ligne : le produit suivant est sans noix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "On demande si le colis est pour eux : oui, puis la signature.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "On demande une tournée de plus : non, car la pause passe d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "On demande la largeur : un chiffre avec son unité, et tu le notes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "On demande où va le bois : un endroit, et où il se trouve.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "On demande ce qui s’est passé : oui, et quoi, et pendant combien de temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "On demande comment il va : ce que tu vois, et que c’est nouveau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "On demande de soulever une personne : pas sans aide, d’abord le lève-personne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "On demande des verres propres : oui, et quand ils arrivent.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "Un ordre du chef : tu le répètes, pour qu’il sache que tu as entendu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "On demande si le bureau est fait : non, avec la raison.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "On demande pour un chiffon : non, car le rouge est pour les toilettes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "On demande du lait : pas “non”, mais aller voir dans la réserve.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "Un client en colère : des mots calmes, et un collègue arrive.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "On demande lesquelles cueillir : la couleur dit ce qui est mûr.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "Un orage arrive : arrêter et rentrer, c’est le choix sûr.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "On demande si ça rentre : non, et mesurer encore avant de forcer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "On demande de le prendre : pas encore, le métal chaud doit refroidir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "On demande ce que tu entends : quelle pièce, et ce qu’elle fait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "On demande de commencer le travail : pas encore, car la voiture est électrique.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "On demande comment tu vas : un oui court, et que tu y vas doucement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "On demande comment tu vas : un “pas très bien” honnête, c’est bien.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "On demande quel emplacement : l’allée et la case.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "On demande si la palette est prête : non, et ce qu’il faut encore.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "On demande si la camionnette va bien : non, et ce qui est cassé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "On demande où tu es : l’endroit, et combien de retard tu auras.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "On demande si tu sais comment : non, pas encore, dit honnêtement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "On demande si tu as une question : oui, et d’abord s’il y a le temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "On demande si tu trouves : non, et une demande de montrer du doigt.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "On te demande de tenir quelque chose : oui, et où le poser.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "On demande si la porte est fermée : non, et on la ferme maintenant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "On demande s’il est plein : oui, et on le vide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "On te demande de le faire maintenant : oui, et ce qui vient après.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "On demande où est le malaxeur : un endroit, et ce qui est tout près.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "On demande où commencer : au milieu, sur la ligne d’axe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "On demande si le mur est sec : non, et combien de temps attendre.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "On demande si c’est un carré : non, un rectangle, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "On demande combien de degrés : le chiffre, et de quoi c’est la moitié.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "On demande la taille du sol : le calcul, et la réponse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "On demande quel pinceau : le large pour le mur, le petit pour les coins.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "On demande si on peut peindre : non, et ce qui vient d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "On demande combien de briques il reste : une palette, et que c’est assez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "On demande à quelle hauteur doit être le rang : où on peut le voir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "On demande quelle scie : la scie à dos, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "On demande si l’angle est droit : oui, et comment on le sait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "On demande où est la perceuse : un endroit, et qu’elle est presque pleine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "On demande comment fixer l’étagère : avec quoi, et combien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "On demande pourquoi elle s’arrête : le capteur, et ce qu’il ne voit pas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "On demande tous les combien : une fois par heure, et où le noter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "On demande combien par carton : le nombre, et où c’est écrit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "On demande quand : le jour de la semaine, et le moment dans ce jour.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "On demande quel fil va où : la même couleur avec la même couleur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "On demande si on peut l’ouvrir : non, et qui le fait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "On demande si ça fuit encore : un peu, et ce qu’on fait pour ça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "On demande pourquoi c’est coupant : il y a encore une bavure.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "On demande quelle étape : le numéro, et où regarder.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "On demande à quel point serrer : jusqu’au clic de la clé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "On demande si on peut se mettre là : non, jamais, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "On demande si c’est bon : non, et ce qui ne va pas.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "On demande à quelle profondeur : la profondeur, et pas plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "On demande si elle est mûre : non, trop verte, et quoi faire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "On demande pourquoi il fait chaud : l’écran et les ouvrants sont fermés.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "On demande si on peut la tuer : non, et pourquoi elle aide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "On demande s’ils doivent être changés : oui, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "On demande combien : les litres, et comment contrôler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "On demande s’il doit être changé : oui, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "On demande ce qu’il faut faire : regarder le bon de travail.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "On demande si on peut la prendre : oui, et ce qu’il faut faire d’abord.", // nieuw, nalezen
    'c.pruning.a.why': "On demande quelles branches : seulement les mortes.", // nieuw, nalezen
    'c.hedge.a.why': "On demande à quelle hauteur : jusqu’à la corde, pas plus bas.", // nieuw, nalezen
    'c.chainsaw.a.why': "On demande si on peut : pas encore, et ce qui vient d’abord.", // nieuw, nalezen
    'c.weeding.a.why': "On demande si c’est une mauvaise herbe : non, et quoi en faire.", // nieuw, nalezen
    'c.planting.a.why': "On demande où elle va : l’endroit dans le parterre.", // nieuw, nalezen
    'c.roadside.a.why': "On demande si on peut traverser : non, attendre, et pourquoi.", // nieuw, nalezen
    'c.litter.a.why': "Un habitant demande quand : on ne sait pas, et qui le sait.", // nieuw, nalezen
    'c.reception.a.why': "Un visiteur a rendez-vous : un moment, on appelle.", // nieuw, nalezen
    'c.visitors.a.why': "On demande où va le manteau : l’endroit, et où il se trouve.", // nieuw, nalezen
    'c.mailroom.a.why': "On demande pour qui c’est : le service, et l’étage.", // nieuw, nalezen
    'c.meetingroom.a.why': "On demande à quelle heure : l’heure, et ce qu’il faut faire.", // nieuw, nalezen
    'c.faults.a.why': "On demande pourquoi il fait froid : ce qui est en panne, et quand l’aide arrive.", // nieuw, nalezen
    'c.repairs.a.why': "On demande si ça bipe : oui, et pourquoi.", // nieuw, nalezen
    'c.moving.a.why': "On demande où ça va : le bureau, et où regarder.", // nieuw, nalezen
    'c.closing.a.why': "On demande s’il y a quelqu’un : non, et ce qu’on fait maintenant.", // nieuw, nalezen
    'c.patrol.a.why': "On demande si on a vu quelque chose : oui, quoi, et où.", // nieuw, nalezen
    'c.access.a.why': "On demande à entrer sans carte : on regrette, pas sans carte.", // nieuw, nalezen
    'c.cameras.a.why': "On demande ce qu’on voit : qui, où, et ce qu’on fait.", // nieuw, nalezen
    'c.report.a.why': "On demande ce qui va dans le rapport : quoi, où et quand.", // nieuw, nalezen
    'c.evacuation.a.why': "On demande si tout le monde est sorti : non, combien manquent.", // nieuw, nalezen
    'c.firstaid.a.why': "On demande où est le défibrillateur : l’endroit, et ce qu’il y a à côté.", // nieuw, nalezen
    'c.shoplifting.a.why': "On demande si on peut fouiller un sac : non, et qui fait ça.", // nieuw, nalezen
    'c.aggression.a.why': "On demande pourquoi pas : la raison, dite calmement.", // nieuw, nalezen
    'c.hygienelock.a.why': "On demande pour une montre : non, et la règle derrière.", // nieuw, nalezen
    'c.allergens.a.why': "On demande si ça peut aller ensemble : non, et pourquoi.", // nieuw, nalezen
    'c.coldroom.a.why': "On demande pourquoi ça bipe : la cause, et quoi faire.", // nieuw, nalezen
    'c.foreignbody.a.why': "On demande quoi faire : à qui le montrer.", // nieuw, nalezen
    'c.cutting.a.why': "On demande combien : le poids, et où regarder.", // nieuw, nalezen
    'c.labels.a.why': "On demande quelle date : quand, et où regarder.", // nieuw, nalezen
    'c.linecleaning.a.why': "On demande si c’est propre : pas encore, et ce qui reste à faire.", // nieuw, nalezen
    'c.haccp.a.why': "On demande pourquoi : pour savoir que la nourriture est sûre.", // nieuw, nalezen
    'c.binlorry.a.why': "On demande si on peut monter à l’arrière : non, et où monter.", // nieuw, nalezen
    'c.reversing.a.why': "On demande de l’aide : oui, où on se trouve, et quoi faire.", // nieuw, nalezen
    'c.wastesorting.a.why': "On demande où ça va : la poubelle, et pourquoi.", // nieuw, nalezen
    'c.wastesafety.a.why': "On demande quoi faire après une coupure : laver, et le dire.", // nieuw, nalezen
    'c.yard.a.why': "On demande où ça va : le conteneur, et où il se trouve.", // nieuw, nalezen
    'c.hazardous.a.why': "On demande ce qu’il y a dedans : on ne sait pas, alors on le met de côté.", // nieuw, nalezen
    'c.baler.a.why': "On demande si on peut regarder : non, et ce qui vient d’abord.", // nieuw, nalezen
    'c.shovel.a.why': "On demande si on peut passer : seulement si le conducteur voit la personne.", // nieuw, nalezen
    'c.nappies.a.why': "On demande quand : l’heure, et où c’est noté.", // nieuw, nalezen
    'c.mealtime.a.why': "On demande s’il peut en avoir : non, pourquoi, et où regarder.", // nieuw, nalezen
    'c.naptime.a.why': "On demande si elle dort : oui, depuis quand, et qu’on va vérifier.", // nieuw, nalezen
    'c.playtime.a.why': "On demande si l’enfant peut jouer : oui, où, et quoi ensuite.", // nieuw, nalezen
    'c.pickup.a.why': "On demande qui vient chercher : la personne, et qu’elle est sur la liste.", // nieuw, nalezen
    'c.childsafety.a.why': "On demande si elle est tombée : oui, ce qu’elle a, et qui on appelle.", // nieuw, nalezen
    'c.sickchild.a.why': "On demande comment il va : ce qu’on voit, et ce qu’on fait.", // nieuw, nalezen
    'c.grouprules.a.why': "On demande si on peut sortir sans collègue : oui, mais en prévenant d’abord un collègue.", // nieuw, nalezen
  },
};

export default t;
