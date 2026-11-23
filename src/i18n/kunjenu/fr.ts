import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in French (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Que sais-tu faire maintenant ?", // nieuw, nalezen
    kunNote: "Le niveau à côté de chaque phrase est un repère, pas un niveau officiel.", // nieuw, nalezen
    coachCanDo: "Combien de phrases “Je peux …” tu as, dans les sujets terminés", // nieuw, nalezen (AI-correctie 2 nov 2026)
    kunLuisteren: "écouter", // nieuw, nalezen
    kunSpreken: "parler", // nieuw, nalezen
    kunLezen: "lire", // nieuw, nalezen
    kunSchrijven: "écrire", // nieuw, nalezen
    kunGesprekken: "dialoguer", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "Je peux me présenter à un collègue.", // nieuw, nalezen
    'kjn.u.firstday.2': "Je peux demander à qui je dois me présenter.", // nieuw, nalezen
    'kjn.u.help.1': "Je peux dire que je ne comprends pas.", // nieuw, nalezen
    'kjn.u.help.2': "Je peux demander à quelqu’un de parler plus lentement.", // nieuw, nalezen
    'kjn.u.do.1': "Je peux comprendre une consigne courte, comme “Zet het neer”.", // nieuw, nalezen
    'kjn.u.do.2': "Je peux dire que j’ai fini une tâche.", // nieuw, nalezen
    'kjn.u.tools.1': "Je peux demander à quelqu’un de l’écrire ou de me le montrer.", // nieuw, nalezen
    'kjn.u.tools.2': "Je peux répéter une consigne pour vérifier que j’ai compris.", // nieuw, nalezen
    'kjn.u.tools.3': "Je peux dire que je veux pratiquer le néerlandais.", // nieuw, nalezen
    'kjn.u.data.1': "Je peux épeler mon nom.", // nieuw, nalezen
    'kjn.u.data.2': "Je peux dire quels jours je peux travailler.", // nieuw, nalezen
    'kjn.u.data.3': "Je peux comprendre une date à l’oral.", // nieuw, nalezen
    'kjn.u.sounds.1': "Je peux distinguer des mots comme man et maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Je peux répéter des phrases courtes avec des sons difficiles.", // nieuw, nalezen
    'kjn.u.safety.1': "Je peux comprendre un avertissement comme “Pas op!”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.safety.2': "Je peux dire que je n’ai pas encore appris quelque chose.", // nieuw, nalezen
    'kjn.u.emergency.1': "Je peux demander où se trouve l’extincteur.", // nieuw, nalezen
    'kjn.u.emergency.2': "Je peux signaler un accident.", // nieuw, nalezen
    'kjn.u.apply.1': "Je peux dire quelle expérience j’ai.", // nieuw, nalezen
    'kjn.u.apply.2': "Je peux parler de moi dans un entretien d’embauche.", // nieuw, nalezen
    'kjn.u.contract.1': "Je peux demander combien d’heures je travaille par semaine.", // nieuw, nalezen
    'kjn.u.contract.2': "Je peux demander si mon contrat est temporaire ou permanent.", // nieuw, nalezen
    'kjn.u.contract.3': "Je peux dire quand je peux travailler et quand je ne peux pas.", // nieuw, nalezen
    'kjn.u.grow.1': "Je peux dire quels diplômes et certificats j’ai.", // nieuw, nalezen
    'kjn.u.grow.2': "Je peux dire ce que je fais bien.", // nieuw, nalezen
    'kjn.u.lost.1': "Je peux dire que mon contrat se termine.", // nieuw, nalezen
    'kjn.u.lost.2': "Je peux demander si ma prime de vacances sera payée.", // nieuw, nalezen
    'kjn.u.stage.1': "Je peux demander qui est mon tuteur en entreprise.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "Je peux demander un retour et un exemple.", // nieuw, nalezen
    'kjn.u.time.1': "Je peux dire à quelle heure commence mon service.", // nieuw, nalezen
    'kjn.u.time.2': "Je peux dire que je suis malade.", // nieuw, nalezen
    'kjn.u.pay.1': "Je peux dire que ma fiche de paie n’est pas juste.", // nieuw, nalezen
    'kjn.u.pay.2': "Je peux lire des mots comme bruto et netto.", // nieuw, nalezen
    'kjn.u.leave.1': "Je peux demander un congé.", // nieuw, nalezen
    'kjn.u.leave.2': "Je peux dire que mon enfant est malade.", // nieuw, nalezen
    'kjn.u.contact.1': "Je peux appeler et dire qui je suis.", // nieuw, nalezen
    'kjn.u.contact.2': "Je peux demander qu’on me rappelle.", // nieuw, nalezen
    'kjn.u.contact.3': "Je peux écrire un court message à mon travail.", // nieuw, nalezen // nagelezen AI ronde 3
    'kjn.u.house.1': "Je peux lire des règles comme “Roken verboden”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.house.2': "Je peux demander où on peut fumer.", // nieuw, nalezen
    'kjn.u.house.3': "Je peux dire que quelque chose est interdit.", // nieuw, nalezen
    'kjn.u.numbers.1': "Je peux comprendre des heures comme “kwart over vier”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.numbers.2': "Je peux dire combien quelque chose coûte ou pèse.", // nieuw, nalezen
    'kjn.u.numbers.3': "Je sais distinguer des nombres comme 13 et 30.", // nieuw, nalezen
    'kjn.u.shop.1': "Je peux demander à un client s’il veut payer par carte.", // nieuw, nalezen
    'kjn.u.shop.2': "Je peux montrer le chemin dans le magasin à un client.", // nieuw, nalezen
    'kjn.u.ai.1': "Je peux demander si une réponse est juste.", // nieuw, nalezen
    'kjn.u.ai.2': "Je peux dire que je veux parler à une personne.", // nieuw, nalezen
    'kjn.u.finish.1': "Je peux demander ce que veut dire un mot sur le bon de travail.", // nieuw, nalezen
    'kjn.u.finish.2': "Je peux dire ce qui est fini et ce qui ne l’est pas.", // nieuw, nalezen
    'kjn.u.online.1': "Je peux dire que mon mot de passe ne marche pas.", // nieuw, nalezen
    'kjn.u.online.2': "Je peux reconnaître un e-mail suspect.", // nieuw, nalezen
    'kjn.u.teamwork.1': "Je peux dire que quelque chose me tracasse.", // nieuw, nalezen
    'kjn.u.teamwork.2': "Je peux dire non calmement à du travail en plus.", // nieuw, nalezen
    'kjn.u.teamwork.3': "Je peux demander ce que je dois faire d’abord.", // nieuw, nalezen
    'kjn.u.communicate.1': 'Je peux expliquer ce qui ne va pas.', // nieuw, nalezen
    'kjn.u.communicate.2': 'Je peux dire ce que j’ai entendu.', // nieuw, nalezen
    'kjn.u.communicate.3': 'Je peux demander un entretien à temps.', // nieuw, nalezen
    'kjn.u.feedback.1': 'Je peux demander un exemple quand je reçois un feedback.', // nieuw, nalezen
    'kjn.u.feedback.2': 'Je peux dire gentiment ce qui peut être mieux.', // nieuw, nalezen
    'kjn.u.feedback.3': 'Je peux poser une question en réunion d’équipe.', // nieuw, nalezen
    'kjn.u.social.1': "Je peux discuter un peu pendant la pause.", // nieuw, nalezen
    'kjn.u.social.2': "Je peux dire que j’ai fait une erreur.", // nieuw, nalezen
    'kjn.u.social.3': "Je peux dire que quelque chose dépasse ma limite.", // nieuw, nalezen
    'kjn.u.sayings.1': "Je peux comprendre quelques expressions courantes.", // nieuw, nalezen
    'kjn.u.sayings.2': "Je peux dire que quelque chose est très facile (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "Je peux dire que j’ai droit à une pause.", // nieuw, nalezen
    'kjn.u.rights.2': "Je peux dire que je veux faire une réclamation.", // nieuw, nalezen
    'kjn.u.exploit.1': "Je peux dire que je garde mon passeport.", // nieuw, nalezen
    'kjn.u.exploit.2': "Je peux demander si je peux signaler quelque chose sans donner mon nom.", // nieuw, nalezen
    'kjn.u.papers.1': "Je peux dire que mon adresse a changé.", // nieuw, nalezen
    'kjn.u.papers.2': "Je peux demander combien coûte le loyer.", // nieuw, nalezen
    'kjn.u.health.1': "Je peux dire où j’ai mal.", // nieuw, nalezen
    'kjn.u.health.2': "Je peux demander un rendez-vous chez le médecin généraliste.", // nieuw, nalezen
    'kjn.u.money.1': "Je peux dire que je ne comprends pas une lettre.", // nieuw, nalezen
    'kjn.u.money.2': "Je peux dire non à un escroc au téléphone.", // nieuw, nalezen
    'kjn.u.travel.1': "Je peux dire comment je vais au travail.", // nieuw, nalezen
    'kjn.u.travel.2': "Je peux demander où est l’arrêt de bus.", // nieuw, nalezen
    'kjn.u.society.1': "Je peux demander si j’ai le droit de voter.", // nieuw, nalezen
    'kjn.u.society.2': "Je peux dire que je veux contester une décision.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.warehouse.1': "Je peux comprendre des consignes courtes à l’entrepôt.", // nieuw, nalezen
    'kjn.u.warehouse.2': "Je peux dire où se trouve quelque chose : à gauche ou à droite.", // nieuw, nalezen
    'kjn.u.build.1': "Je peux comprendre un avertissement sur le chantier.", // nieuw, nalezen
    'kjn.u.build.2': "Je peux demander des outils.", // nieuw, nalezen
    'kjn.u.factory.1': "Je peux dire qu’il y a une panne.", // nieuw, nalezen
    'kjn.u.factory.2': "Je peux dire ce qui ne va pas avec un produit.", // nieuw, nalezen
    'kjn.u.care.1': "Je peux demander à un résident si je peux l’aider.", // nieuw, nalezen
    'kjn.u.care.2': "Je peux transmettre quelque chose à l’infirmière.", // nieuw, nalezen
    'kjn.u.horeca.1': "Je peux demander aux clients ce qu’ils veulent boire.", // nieuw, nalezen
    'kjn.u.horeca.2': "Je peux dire que je vais demander au chef.", // nieuw, nalezen
    'kjn.u.clean.1': "Je peux demander où est le matériel de nettoyage.", // nieuw, nalezen
    'kjn.u.clean.2': "Je peux prévenir quelqu’un que le sol est glissant.", // nieuw, nalezen
    'kjn.u.kas.1': "Je peux demander dans quelle rangée je commence.", // nieuw, nalezen
    'kjn.u.kas.2': "Je peux demander si une serre a été traitée.", // nieuw, nalezen
    'kjn.u.tech.1': "Je peux demander s’il y a encore du courant.", // nieuw, nalezen
    'kjn.u.tech.2': "Je peux dire qu’un câble est abîmé.", // nieuw, nalezen
    'kjn.u.garage.1': "Je peux dire qu’un pneu est crevé.", // nieuw, nalezen
    'kjn.u.garage.2': "Je peux dire que le client doit d’abord être d’accord.", // nieuw, nalezen
    'kjn.u.sick.1': "Je peux me déclarer malade, puis annoncer mon retour.", // nieuw, nalezen
    'kjn.u.sick.2': "Je peux dire ce que je ne peux pas encore faire.", // nieuw, nalezen
    'kjn.u.sick.3': "Je peux dire que je travaille d’abord des demi-journées.", // nieuw, nalezen
    'kjn.u.health.3': "Je peux dire que le travail devient trop pour moi.", // nieuw, nalezen
    'kjn.u.factory.3': "Je peux signaler que j’ai une petite coupure.", // nieuw, nalezen
    'kjn.u.delivery.1': "Je peux dire que le client n’est pas chez lui.", // nieuw, nalezen
    'kjn.u.delivery.2': "Je peux demander aux voisins de prendre un colis.", // nieuw, nalezen
    'kjn.u.delivery.3': "Je peux demander qui décide de ma tournée et de mes horaires.", // nieuw, nalezen
    'kjn.u.afbouw.1': "Je peux demander la spatule crantée ou la truelle.", // nieuw, nalezen
    'kjn.u.afbouw.2': "Je peux demander où je commence avec les carreaux.", // nieuw, nalezen
    'kjn.u.afbouw.3': "Je peux dire que le mur n’est pas encore sec.", // nieuw, nalezen
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "Je peux demander la scie égoïne ou la perceuse sans fil.", // nieuw, nalezen
    'kjn.u.ruwbouw.2': "Je peux demander comment fixer une planche.", // nieuw, nalezen
    'kjn.u.machines.1': "Je peux dire que le carter de protection est cassé.", // nieuw, nalezen
    'kjn.u.machines.2': "Je peux demander tous les combien je prends un échantillon.", // nieuw, nalezen
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "Je peux demander si j’ai le droit d’ouvrir le tableau électrique.", // nieuw, nalezen
    'kjn.u.install.2': "Je peux dire qu’un raccord fuit.", // nieuw, nalezen
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "Je peux dire que le bac à pièces est presque vide.", // nieuw, nalezen
    'kjn.u.montage.2': "Je peux demander à quel point un boulon doit être serré.", // nieuw, nalezen
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "Je peux dire qu’il y a de la moisissure sur une plante.", // nieuw, nalezen
    'kjn.u.kweek.2': "Je peux demander si une tomate est assez mûre.", // nieuw, nalezen
    'kjn.u.carservice.1': "Je peux dire que le voyant d’alerte est allumé.", // nieuw, nalezen
    'kjn.u.carservice.2': "Je peux demander combien d’huile il faut mettre.", // nieuw, nalezen
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "Je peux dire que l’herbe est trop mouillée.", // nieuw, nalezen
    'kjn.u.mowing.2': "Je peux demander quelles branches il faut couper.", // nieuw, nalezen
    'kjn.u.planting.1': "Je peux dire qu’il y a des morceaux de verre.", // nieuw, nalezen
    'kjn.u.planting.2': "Je peux demander si je peux traverser la route.", // nieuw, nalezen
    'kjn.u.frontdesk.1': "Je peux saluer un visiteur et l’aider.", // nieuw, nalezen
    'kjn.u.frontdesk.2': "Je peux demander pour qui est un colis.", // nieuw, nalezen
    'kjn.u.maintenance.1': "Je peux signaler une panne.", // nieuw, nalezen
    'kjn.u.maintenance.2': "Je peux demander où un bureau doit aller.", // nieuw, nalezen
    'kjn.u.guarding.1': "Je peux demander à voir la pièce d’identité de quelqu’un.", // nieuw, nalezen
    'kjn.u.guarding.2': "Je peux dire à la radio ce que je vois.", // nieuw, nalezen
    'kjn.u.incidents.1': "Je peux appeler le 112 et dire ce qui se passe.", // nieuw, nalezen
    'kjn.u.incidents.2': "Je peux parler calmement à un client en colère.", // nieuw, nalezen
    'kjn.u.foodhygiene.1': "Je peux dire que la chambre froide est trop chaude.", // nieuw, nalezen
    'kjn.u.foodhygiene.2': "Je peux demander s’il y a des fruits à coque dedans.", // nieuw, nalezen
    'kjn.u.foodline.1': "Je peux dire que l’étiquette n’est pas bonne.", // nieuw, nalezen
    'kjn.u.foodline.2': "Je peux demander combien il faut mettre dans un bac.", // nieuw, nalezen
    'kjn.u.collection.1': "Je peux aider le chauffeur à reculer.", // nieuw, nalezen
    'kjn.u.collection.2': "Je peux dire qu’une poubelle à roulettes est trop lourde.", // nieuw, nalezen
    'kjn.u.recycling.1': "Je peux dire à un visiteur où vont ses déchets.", // nieuw, nalezen
    'kjn.u.recycling.2': "Je peux dire que la presse est bloquée.", // nieuw, nalezen
    'kjn.u.toddlers.1': "Je peux dire que je vais changer un enfant.", // nieuw, nalezen
    'kjn.u.toddlers.2': "Je peux demander si un enfant dort déjà.", // nieuw, nalezen
    'kjn.u.daycare.1': "Je peux dire à un parent comment s’est passée la journée.", // nieuw, nalezen
    'kjn.u.daycare.2': "Je peux demander qui vient chercher un enfant.", // nieuw, nalezen
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "Je peux demander dans quelle phase je suis.", // nieuw, nalezen
    'kjn.u.uitzend.2': "Je peux demander à quoi sert une retenue sur mon salaire.", // nieuw, nalezen
    'kjn.u.housekeeping.1': "Je peux dire que des toilettes sont bouchées.", // nieuw, nalezen
    'kjn.u.housekeeping.2': "Je peux demander combien de produit il faut mettre dans le seau.", // nieuw, nalezen
    'kjn.u.cooking.1': "Je peux demander au chef comment couper quelque chose.", // nieuw, nalezen
    'kjn.u.cooking.2': "Je peux demander à un client s’il veut payer séparément.", // nieuw, nalezen
    'kjn.u.carework.1': "Je peux demander à un résident ce qu’il veut mettre.", // nieuw, nalezen
    'kjn.u.carework.2': "Je peux dire à l’infirmière ce que j’ai vu.", // nieuw, nalezen
    'kjn.u.shopfloor.1': "Je peux demander le ticket de caisse à un client.", // nieuw, nalezen
    'kjn.u.shopfloor.2': "Je peux dire que le magasin va bientôt fermer.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "Je peux reconnaître quelques mots sur les panneaux de sécurité et le feu.", // nieuw, nalezen
    'kjn.u.safework.2': "Je peux demander si un produit est toxique.", // nieuw, nalezen
  },
};

export default t;
