import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in French (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Que sais-tu faire maintenant ?", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "Le niveau à côté de chaque phrase est un repère, pas un niveau officiel.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "Combien de phrases “Je peux …” tu as, dans les sujets terminés", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    kunLuisteren: "écouter", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "parler", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "lire", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "écrire", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "dialoguer", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "Je peux me présenter à un collègue.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "Je peux demander à qui je dois me présenter.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "Je peux dire que je ne comprends pas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "Je peux demander à quelqu’un de parler plus lentement.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "Je peux comprendre une consigne courte, comme “Zet het neer”.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': "Je peux dire que j’ai fini une tâche.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "Je peux demander à quelqu’un de l’écrire ou de me le montrer.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "Je peux répéter une consigne pour vérifier que j’ai compris.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.3': "Je peux dire que je veux pratiquer le néerlandais.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "Je peux épeler mon nom.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "Je peux dire quels jours je peux travailler.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "Je peux comprendre une date à l’oral.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "Je peux distinguer des mots comme man et maan.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.2': "Je peux répéter des phrases courtes avec des sons difficiles.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "Je peux comprendre un avertissement comme “Pas op!”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.safety.2': "Je peux dire que je n’ai pas encore appris quelque chose.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "Je peux demander où se trouve l’extincteur.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.2': "Je peux signaler un accident.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "Je peux dire quelle expérience j’ai.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "Je peux parler de moi dans un entretien d’embauche.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "Je peux demander combien d’heures je travaille par semaine.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "Je peux demander si mon contrat est temporaire ou permanent.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "Je peux dire quand je peux travailler et quand je ne peux pas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "Je peux dire quels diplômes et certificats j’ai.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "Je peux dire ce que je fais bien.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "Je peux dire que mon contrat se termine.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "Je peux demander si ma prime de vacances sera payée.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.1': "Je peux demander qui est mon tuteur en entreprise.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Je peux demander un retour et un exemple.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "Je peux dire à quelle heure commence mon service.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': "Je peux dire que je suis malade.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.1': "Je peux dire que ma fiche de paie n’est pas juste.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "Je peux lire des mots comme bruto et netto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.1': "Je peux demander un congé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "Je peux dire que mon enfant est malade.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "Je peux appeler et dire qui je suis.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "Je peux demander qu’on me rappelle.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "Je peux écrire un court message à mon travail.", // nieuw, nalezen // nagelezen AI ronde 3
    'kjn.u.house.1': "Je peux lire des règles comme “Roken verboden”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.house.2': "Je peux demander où on peut fumer.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "Je peux dire que quelque chose est interdit.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.1': "Je peux comprendre des heures comme “kwart over vier”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.numbers.2': "Je peux dire combien quelque chose coûte ou pèse.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "Je sais distinguer des nombres comme 13 et 30.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.1': "Je peux demander à un client s’il veut payer par carte.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "Je peux montrer le chemin dans le magasin à un client.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "Je peux demander si une réponse est juste.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "Je peux dire que je veux parler à une personne.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "Je peux demander ce que veut dire un mot sur le bon de travail.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "Je peux dire ce qui est fini et ce qui ne l’est pas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "Je peux dire que mon mot de passe ne marche pas.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "Je peux reconnaître un e-mail suspect.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "Je peux dire que quelque chose me tracasse.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.2': "Je peux dire non calmement à du travail en plus.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "Je peux demander ce que je dois faire d’abord.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.1': 'Je peux expliquer ce qui ne va pas.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': 'Je peux dire ce que j’ai entendu.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': 'Je peux demander un entretien à temps.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': 'Je peux demander un exemple quand je reçois un feedback.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': 'Je peux dire gentiment ce qui peut être mieux.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': 'Je peux poser une question en réunion d’équipe.', // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "Je peux discuter un peu pendant la pause.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': "Je peux dire que j’ai fait une erreur.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "Je peux dire que quelque chose dépasse ma limite.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.1': "Je peux comprendre quelques expressions courantes.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "Je peux dire que quelque chose est très facile (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "Je peux dire que j’ai droit à une pause.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "Je peux dire que je veux faire une réclamation.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "Je peux dire que je garde mon passeport.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "Je peux demander si je peux signaler quelque chose sans donner mon nom.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "Je peux dire que mon adresse a changé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "Je peux demander combien coûte le loyer.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "Je peux dire où j’ai mal.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "Je peux demander un rendez-vous chez le médecin généraliste.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "Je peux dire que je ne comprends pas une lettre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "Je peux dire non à un escroc au téléphone.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "Je peux dire comment je vais au travail.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "Je peux demander où est l’arrêt de bus.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "Je peux demander si j’ai le droit de voter.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.2': "Je peux dire que je veux contester une décision.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.warehouse.1': "Je peux comprendre des consignes courtes à l’entrepôt.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "Je peux dire où se trouve quelque chose : à gauche ou à droite.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "Je peux comprendre un avertissement sur le chantier.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "Je peux demander des outils.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.1': "Je peux dire qu’il y a une panne.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "Je peux dire ce qui ne va pas avec un produit.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "Je peux demander à un résident si je peux l’aider.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.2': "Je peux transmettre quelque chose à l’infirmière.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "Je peux demander aux clients ce qu’ils veulent boire.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "Je peux dire que je vais demander au chef.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "Je peux demander où est le matériel de nettoyage.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "Je peux prévenir quelqu’un que le sol est glissant.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "Je peux demander dans quelle rangée je commence.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "Je peux demander si une serre a été traitée.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "Je peux demander s’il y a encore du courant.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "Je peux dire qu’un câble est abîmé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "Je peux dire qu’un pneu est crevé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "Je peux dire que le client doit d’abord être d’accord.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.1': "Je peux me déclarer malade, puis annoncer mon retour.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "Je peux dire ce que je ne peux pas encore faire.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "Je peux dire que je travaille d’abord des demi-journées.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "Je peux dire que le travail devient trop pour moi.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "Je peux signaler que j’ai une petite coupure.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.1': "Je peux dire que le client n’est pas chez lui.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "Je peux demander aux voisins de prendre un colis.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "Je peux demander qui décide de ma tournée et de mes horaires.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "Je peux demander la spatule crantée ou la truelle.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "Je peux demander où je commence avec les carreaux.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "Je peux dire que le mur n’est pas encore sec.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Je peux demander la scie égoïne ou la perceuse sans fil.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "Je peux demander comment fixer une planche.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "Je peux dire que le carter de protection est cassé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "Je peux demander tous les combien je prends un échantillon.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Je peux demander si j’ai le droit d’ouvrir le tableau électrique.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "Je peux dire qu’un raccord fuit.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Je peux dire que le bac à pièces est presque vide.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "Je peux demander à quel point un boulon doit être serré.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Je peux dire qu’il y a de la moisissure sur une plante.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "Je peux demander si une tomate est assez mûre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "Je peux dire que le voyant d’alerte est allumé.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "Je peux demander combien d’huile il faut mettre.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Je peux dire que l’herbe est trop mouillée.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "Je peux demander quelles branches il faut couper.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "Je peux dire qu’il y a des morceaux de verre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "Je peux demander si je peux traverser la route.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "Je peux saluer un visiteur et l’aider.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "Je peux demander pour qui est un colis.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "Je peux signaler une panne.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "Je peux demander où un bureau doit aller.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "Je peux demander à voir la pièce d’identité de quelqu’un.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "Je peux dire à la radio ce que je vois.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "Je peux appeler le 112 et dire ce qui se passe.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "Je peux parler calmement à un client en colère.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "Je peux dire que la chambre froide est trop chaude.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "Je peux demander s’il y a des fruits à coque dedans.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "Je peux dire que l’étiquette n’est pas bonne.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "Je peux demander combien il faut mettre dans un bac.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "Je peux aider le chauffeur à reculer.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "Je peux dire qu’une poubelle à roulettes est trop lourde.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "Je peux dire à un visiteur où vont ses déchets.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "Je peux dire que la presse est bloquée.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "Je peux dire que je vais changer un enfant.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "Je peux demander si un enfant dort déjà.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "Je peux dire à un parent comment s’est passée la journée.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "Je peux demander qui vient chercher un enfant.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Je peux demander dans quelle phase je suis.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "Je peux demander à quoi sert une retenue sur mon salaire.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "Je peux dire que des toilettes sont bouchées.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "Je peux demander combien de produit il faut mettre dans le seau.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "Je peux demander au chef comment couper quelque chose.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "Je peux demander à un client s’il veut payer séparément.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "Je peux demander à un résident ce qu’il veut mettre.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': "Je peux dire à l’infirmière ce que j’ai vu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "Je peux demander le ticket de caisse à un client.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "Je peux dire que le magasin va bientôt fermer.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Je peux reconnaître quelques mots sur les panneaux de sécurité et le feu.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "Je peux demander si un produit est toxique.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "Je peux dire que la pression est trop haute.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "Je peux dire à la transmission ce qui s’est passé.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "Je peux demander à quelqu’un de me le montrer encore une fois.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "Je peux dire qu’on me traite différemment.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "Je peux demander un plan de paiement.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "Je peux dire que je ne conduis pas de chariot à mât rétractable sans formation.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "Je peux demander quelle quantité d’une matière première il faut mettre.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
