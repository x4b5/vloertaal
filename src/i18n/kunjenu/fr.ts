import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in French (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "Que sais-tu faire maintenant ?", // nieuw, nalezen
    kunNote: "Le niveau à côté de chaque phrase est un repère, pas un niveau officiel.", // nieuw, nalezen
    coachCanDo: "Combien de phrases “Je peux …” tu as, des thèmes terminés", // nieuw, nalezen // nagelezen AI 31 okt
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
    'kjn.u.tools.1': "Je peux demander à quelqu’un de l’écrire ou de me le montrer.", // nieuw, nalezen
    'kjn.u.tools.2': "Je peux répéter une consigne pour vérifier que j’ai compris.", // nieuw, nalezen
    'kjn.u.tools.3': "Je peux dire que je veux pratiquer le néerlandais.", // nieuw, nalezen
    'kjn.u.data.1': "Je peux épeler mon nom.", // nieuw, nalezen
    'kjn.u.data.2': "Je peux dire quels jours je peux travailler.", // nieuw, nalezen
    'kjn.u.data.3': "Je peux comprendre une date à l’oral.", // nieuw, nalezen
    'kjn.u.sounds.1': "Je peux distinguer des mots comme man et maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "Je peux répéter des phrases courtes avec des sons difficiles.", // nieuw, nalezen
    'kjn.u.safety.1': "Je peux comprendre un avertissement comme “Pas op!”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.safety.2': "Je peux signaler un accident.", // nieuw, nalezen
    'kjn.u.safety.3': "Je peux dire que je n’ai pas encore appris quelque chose.", // nieuw, nalezen
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
    'kjn.u.leave.2': "Je peux me déclarer malade, puis annoncer mon retour.", // nieuw, nalezen
    'kjn.u.contact.1': "Je peux appeler et dire qui je suis.", // nieuw, nalezen
    'kjn.u.contact.2': "Je peux demander qu’on me rappelle.", // nieuw, nalezen
    'kjn.u.contact.3': "Je peux écrire un court message à mon travail.", // nieuw, nalezen // nagelezen AI ronde 3
    'kjn.u.house.1': "Je peux lire des règles comme “Roken verboden”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.house.2': "Je peux demander où on peut fumer.", // nieuw, nalezen
    'kjn.u.house.3': "Je peux dire que quelque chose est interdit.", // nieuw, nalezen
    'kjn.u.numbers.1': "Je peux comprendre des heures comme “kwart over vier”.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.numbers.2': "Je peux dire combien quelque chose coûte ou pèse.", // nieuw, nalezen
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
    'kjn.u.society.2': "Je peux dire que je veux faire une réclamation contre une décision.", // nieuw, nalezen
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
  },
};

export default t;
