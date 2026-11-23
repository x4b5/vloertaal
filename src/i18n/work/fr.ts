import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Postuler à un emploi', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.cv': 'Ton CV et ta lettre',
    'w.cv': 'le CV',
    'w.motivatie': 'la motivation (pourquoi tu veux ce travail)',
    'w.ervaring': 'l’expérience',
    'w.opleiding': 'la formation, les études',
    'w.vaardigheden': 'les compétences',
    'w.referentie': 'la référence (quelqu’un qui peut parler de ton travail)',
    's.cv.1': 'Voici mon CV.',
    's.cv.2': 'J’ai de l’expérience dans la construction.',
    's.cv.3': 'Je parle trois langues.',
    'c.cv.q': 'Tu as une référence ?',
    'c.cv.a': 'Oui, mon ancien patron.',
    'l.interview': 'L’entretien d’embauche',
    'w.sollicitatiegesprek': 'l’entretien d’embauche',
    'w.begroeten': 'saluer',
    'w.vertellen': 'raconter',
    'w.vraagstellen': 'poser une question',
    'w.salaris': 'le salaire',
    'w.functie': 'le poste, la fonction',
    's.interview.1': 'J’ai un entretien d’embauche.',
    's.interview.2': 'J’apprends encore le néerlandais.',
    's.interview.3': 'Quand est-ce que j’aurai de vos nouvelles ?',
    'c.interview.q': 'Parle-moi un peu de toi.',
    'c.interview.a': 'J’ai travaillé cinq ans dans un entrepôt.',
    'u.contract': 'Le travail et les contrats',
    'l.findwork': 'Trouver du travail',
    'w.vacature': 'l’offre d’emploi',
    'w.uitzendbureau': 'l’agence d’intérim',
    'w.solliciteren': 'postuler (à un emploi)',
    'w.contract': 'le contrat',
    'w.tekenen': 'signer',
    'w.tijdelijk': 'temporaire',
    's.findwork.1': 'Je veux postuler.',
    's.findwork.2': 'Le contrat est temporaire ou à durée indéterminée ?',
    's.findwork.3': 'Je peux avoir une copie du contrat ?',
    'c.findwork.q': 'Quel genre de travail tu cherches ?',
    'c.findwork.a': 'Je cherche du travail dans un entrepôt.',
    'l.contract': 'Ton contrat',
    'w.werkgever': 'l’employeur',
    'w.uren': 'les heures',
    'w.oproepkracht': 'le travailleur sur appel',
    'w.proeftijd': 'la période d’essai',
    'w.opzegtermijn': 'le préavis',
    'w.cao': 'la convention collective',
    's.contract.1': 'Je travaille combien d’heures par semaine ?',
    's.contract.2': 'La période d’essai dure combien de temps ?',
    's.contract.3': 'Quelle convention collective s’applique à moi ?',
    'c.contract.q': 'Tu peux venir travailler demain ?',
    'c.contract.a': 'Oui, je dois être là à quelle heure ?',
    'l.agency': 'Travailler via une agence d’intérim', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.uitzendkracht': 'l’intérimaire',
    'w.intercedent': 'la personne de contact à l’agence',
    'w.urenbriefje': 'la feuille d’heures',
    'w.opdracht': 'la mission (le travail dans une entreprise)',
    'w.verlengen': 'prolonger',
    'w.uitbetalen': 'payer, verser',
    's.agency.1': 'Je travaille via une agence d’intérim.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.agency.2': 'Ma mission va être prolongée ?',
    's.agency.3': 'Ma mission se termine quand ?',
    'c.agency.q': 'Tu as envoyé tes heures ?',
    'c.agency.a': 'Oui, hier dans l’appli.',
    'u.papers': 'Le logement et les papiers',
    'l.bsn': 'Ton BSN et tes papiers',
    'w.bsn': 'le numéro de service citoyen (BSN)',
    'w.identiteitsbewijs': 'la pièce d’identité',
    'w.gemeente': 'la mairie, la commune',
    'w.inschrijven': 's’inscrire',
    'w.adres': 'l’adresse',
    'w.zorgverzekering': 'l’assurance maladie',
    's.bsn.1': 'Je m’inscris à la mairie.',
    's.bsn.2': 'Mon adresse a changé.',
    's.bsn.3': 'Je me connecte avec DigiD.',
    'c.bsn.q': 'Je peux voir ta pièce d’identité ?',
    'c.bsn.a': 'Oui, voici mon passeport.',
    'l.housing': 'Le logement',
    'w.kamer': 'la chambre',
    'w.huur': 'le loyer',
    'w.huurcontract': 'le contrat de location, le bail',
    'w.borg': 'la caution',
    'w.huisbaas': 'le propriétaire',
    'w.inhouden': 'retenir (sur ton salaire)',
    's.housing.1': 'Le loyer est de combien par semaine ?',
    's.housing.2': 'Je récupère la caution ?',
    's.housing.3': 'Je veux un contrat de location à part.',
    'c.housing.q': 'On retient le loyer sur ton salaire.',
    'c.housing.a': 'Alors je veux ça par écrit.',
    'u.pay': 'Le salaire',
    'l.payslip': 'Ta fiche de paie',
    'w.loon': 'le salaire, la paie',
    'w.bruto': 'brut (avant impôts)',
    'w.netto': 'net (ce que tu reçois)',
    'w.loonstrook': 'la fiche de paie',
    'w.belasting': 'l’impôt',
    'w.uurloon': 'le salaire horaire',
    's.payslip.1': 'Quel est mon salaire horaire ?',
    's.payslip.2': 'Ma fiche de paie n’est pas correcte.',
    's.payslip.3': 'Le net est plus bas que le brut.',
    'c.payslip.q': 'Tu as reçu ta fiche de paie ?',
    'c.payslip.a': 'Oui, mais il manque des heures.',
    'l.extra': 'L’argent en plus',
    'w.vakantiegeld': 'la prime de vacances',
    'w.overuren': 'les heures supplémentaires',
    'w.toeslag': 'la prime, le supplément',
    'w.minimumloon': 'le salaire minimum',
    'w.bankrekening': 'le compte bancaire',
    'w.betalen': 'payer',
    's.extra.1': 'J’ai une prime pour le travail de nuit ?',
    's.extra.2': 'Les heures supplémentaires sont payées ?',
    's.extra.3': 'Mon salaire arrive sur mon compte bancaire.',
    'c.extra.q': 'Tu peux rester deux heures de plus aujourd’hui ?',
    'c.extra.a': 'Oui, tu notes les heures sup ?',
    'u.house': 'Le règlement intérieur',
    'l.phone': 'Ton téléphone au travail',
    'w.telefoon': 'le téléphone',
    'w.appen': 'envoyer un message (appli)',
    'w.kluisje': 'le casier',
    'w.uitzetten': 'éteindre',
    'w.prive': 'privé, personnel',
    'w.foto': 'la photo',
    's.phone.1': 'Mon téléphone est dans mon casier.',
    's.phone.2': 'J’éteins mon téléphone.',
    's.phone.3': 'Je peux prendre une photo ici ?',
    'c.phone.q': 'Pas de téléphone près de la machine, d’accord ?',
    'c.phone.a': 'D’accord, j’enverrai mes messages pendant la pause.',
    'l.smoking': 'Fumer',
    'w.roken': 'fumer',
    'w.rookplek': 'le coin fumeurs',
    'w.verboden': 'interdit',
    'w.buiten': 'dehors',
    'w.esigaret': 'la cigarette électronique (vape)',
    'w.brandbaar': 'qui brûle facilement (inflammable)',
    's.smoking.1': 'Ici, il est interdit de fumer.',
    's.smoking.2': 'Où est le coin fumeurs ?',
    's.smoking.3': 'Je fume seulement dehors, pendant la pause.',
    'c.smoking.q': 'Tu viens fumer ?',
    'c.smoking.a': 'Non, je n’ai pas encore ma pause.',
    'l.clock': 'Pointer et être à l’heure',
    'w.inklokken': 'pointer (à l’arrivée)',
    'w.uitklokken': 'pointer (au départ)',
    'w.pasje': 'le badge',
    'w.prikklok': 'la pointeuse',
    'w.optijd': 'à l’heure',
    'w.rooster': 'le planning',
    's.clock.1': 'Je pointe à six heures.',
    's.clock.2': 'J’ai oublié mon badge.',
    's.clock.3': 'Où est affiché le planning ?',
    'c.clock.q': 'Tu peux pointer pour moi ?',
    'c.clock.a': 'Non, ce n’est pas permis.',
    'l.hygiene': 'L’alcool, la drogue et l’hygiène',
    'w.alcohol': 'l’alcool',
    'w.medicijn': 'le médicament',
    'w.handenwassen': 'se laver les mains',
    'w.werkkleding': 'les vêtements de travail',
    'w.haarnetje': 'la charlotte (filet à cheveux)',
    'w.schoon': 'propre',
    's.hygiene.1': 'Lave-toi les mains avant le travail.',
    's.hygiene.2': 'L’alcool et la drogue sont interdits.',
    's.hygiene.3': 'Mes vêtements de travail sont propres.',
    'c.hygiene.q': 'Tu as mis ta charlotte ?',
    'c.hygiene.a': 'Oui, et j’ai enlevé ma bague.',
    'u.social': 'Bien s’entendre',
    'l.smalltalk': 'Bavarder et les pauses',
    'w.weekend': 'le week-end',
    'w.koffie': 'le café',
    'w.gezellig': 'convivial, agréable ensemble',
    'w.weer': 'le temps (météo)',
    'w.verjaardag': 'l’anniversaire',
    'w.gefeliciteerd': 'félicitations',
    's.smalltalk.1': 'C’était comment, ton week-end ?',
    's.smalltalk.2': 'Je peux m’asseoir avec vous ?',
    's.smalltalk.3': 'Il fait beau aujourd’hui.',
    'c.smalltalk.q': 'Qu’est-ce que tu as fait ce week-end ?',
    'c.smalltalk.a': 'J’ai joué au foot avec des amis.',
    'l.mistakes': 'Les remarques et les erreurs',
    'w.fout': 'l’erreur',
    'w.compliment': 'le compliment',
    'w.feedback': 'le feedback, les retours (ce que quelqu’un dit de ton travail)', // nieuw, nalezen
    'w.uitleggen': 'expliquer',
    'w.leren': 'apprendre',
    'w.verbeteren': 'améliorer, corriger',
    's.mistakes.1': 'Pardon, j’ai fait une erreur.',
    's.mistakes.2': 'Tu peux l’expliquer ?',
    's.mistakes.3': 'Merci pour le compliment !',
    'c.mistakes.q': 'Bien joué !',
    'c.mistakes.a': 'Merci, ça fait plaisir à entendre.',
    'l.respect': 'Le respect pour tout le monde',
    'w.respect': 'le respect',
    'w.gelijk': 'égal',
    'w.grens': 'la limite',
    'w.neezeggen': 'dire non',
    'w.pesten': 'harceler',
    'w.vertrouwenspersoon': 'la personne de confiance (au travail)',
    's.respect.1': 'Ici, tout le monde est égal.',
    's.respect.2': 'Je ne trouve pas ça correct.',
    's.respect.3': 'Stop, c’est ma limite.',
    'c.respect.q': 'Qu’est-ce qu’il y a ? Tu as l’air triste.',
    'c.respect.a': 'Un collègue me harcèle.',
    'u.rights': 'Règles et droits',
    'l.health': 'Un travail sûr et sain',
    'w.arbowet': 'la loi sur la santé et la sécurité au travail',
    'w.veilig': 'sûr, sans danger',
    'w.werktijden': 'les horaires de travail',
    'w.rust': 'le repos',
    'w.beschermingsmiddelen': 'les équipements de protection',
    'w.arbeidsinspectie': 'l’Inspection du travail',
    's.health.1': 'J’ai droit à une pause.',
    's.health.2': 'Le travail doit être sûr.',
    's.health.3': 'Je le signale à l’Inspection du travail.',
    'c.health.q': 'Tu dois prendre une pause maintenant.',
    'c.health.a': 'D’accord, je vais m’asseoir un peu.',
    'l.rights': 'Tes droits',
    'w.recht': 'le droit',
    'w.discriminatie': 'la discrimination',
    'w.vakbond': 'le syndicat',
    'w.juridischloket': 'le service gratuit d’aide juridique',
    'w.klacht': 'la plainte, la réclamation',
    'w.ontslag': 'le licenciement',
    's.rights.1': 'Je veux faire une réclamation.',
    's.rights.2': 'Je suis membre du syndicat.',
    's.rights.3': 'C’est de la discrimination.',
    'c.rights.q': 'Signe ici pour ton licenciement.',
    'c.rights.a': 'Non, je ne signe pas encore.',
    'l.mustmay': 'Tu dois, ou tu peux choisir ?', // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'devoir, être obligé de', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'ne pas avoir à, ne pas avoir besoin de', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'nécessaire', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'volontaire, au choix', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'le choix', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'la règle', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': 'Est-ce que je dois signer ça ?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': 'Non, tu n’as pas besoin de signer.', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'C’est la règle : le casque est obligatoire.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': 'Est-ce que je dois faire des heures sup samedi ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'Non, ce n’est pas nécessaire. C’est volontaire.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Congés", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Les jours de congé',
    'w.vakantiedagen': 'les jours de congé (vacances)',
    'w.verlof': 'le congé',
    'w.aanvragen': 'demander, faire une demande',
    'w.feestdag': 'le jour férié',
    'w.vrij': 'libre, en congé',
    'w.calamiteitenverlof': 'le congé d’urgence',
    's.leave.1': 'Je veux demander un congé.',
    's.leave.2': 'Je suis libre le jour férié ?',
    's.leave.3': 'J’ai une urgence à la maison.',
    'c.leave.q': 'Tu veux partir en vacances quand ?',
    'c.leave.a': 'En juillet, trois semaines.',
    'l.illness': 'Malade à la maison',
    'w.ziekmelden': 'se déclarer malade',
    'w.betermelden': 'dire que tu vas mieux (fin de l’arrêt maladie)',
    'w.bedrijfsarts': 'le médecin du travail',
    'w.ziekte': 'la maladie',
    'w.doorbetalen': 'continuer à payer',
    'w.wachtdag': 'le jour de carence (sans salaire)',
    's.illness.1': 'Je me déclare malade.',
    's.illness.2': 'J’ai rendez-vous avec le médecin du travail.',
    's.illness.3': 'Demain, je reviens travailler.',
    'c.illness.q': 'Qu’est-ce que tu as exactement ?',
    'c.illness.a': 'J’en parlerai avec le médecin du travail.',
    'u.exploit': 'Connais tes droits : l’exploitation',
    'l.warning': 'Les signaux d’alerte',
    'w.uitbuiting': 'l’exploitation',
    'w.paspoort': 'le passeport',
    'w.schuld': 'la dette',
    'w.dreigen': 'menacer',
    'w.onderbetaald': 'pas assez payé',
    'w.afpakken': 'prendre, enlever (à quelqu’un)',
    's.warning.1': 'Mon patron a mon passeport.',
    's.warning.2': 'Je ne reçois pas de fiche de paie.',
    's.warning.3': 'Je dois rembourser une dette.',
    'c.warning.q': 'Donne-moi ton passeport.',
    'c.warning.a': 'Non, vous pouvez seulement faire une copie.',
    'l.gethelp': 'Trouver de l’aide',
    'w.politie': 'la police',
    'w.anoniem': 'sans ton nom (anonyme)',
    'w.melden': 'signaler',
    'w.hulp': 'l’aide',
    'w.gevaar': 'le danger',
    'w.bang': 'avoir peur',
    's.gethelp.1': 'Je veux signaler quelque chose.',
    's.gethelp.2': 'Je peux le faire sans donner mon nom ?',
    's.gethelp.3': 'J’ai peur de mon patron.',
    'c.gethelp.q': 'Comment est-ce que je peux t’aider ?',
    'c.gethelp.a': 'On me traite mal au travail.',
    'u.contact': 'Appels et messages avec ton travail', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.callin': 'Appeler le travail',
    'w.telefoontje': 'le coup de téléphone',
    'w.terugbellen': 'rappeler',
    'w.bereikbaar': 'joignable (au téléphone)',
    'w.reden': 'la raison',
    'w.overmorgen': 'après-demain',
    'w.inspreken': 'laisser un message vocal',
    's.callin.1': 'Bonjour, c’est Ali.',
    's.callin.2': 'Je pense que je reviens après-demain.',
    's.callin.3': 'Vous pouvez me rappeler ?',
    'c.callin.q': 'Tu reviens quand ?',
    'c.callin.a': 'Je pense lundi.',
    'l.texting': 'Les messages et l’appli de planning',
    'w.bericht': 'le message',
    'w.app': 'l’appli',
    'w.reageren': 'répondre, réagir',
    'w.ruilen': 'échanger',
    'w.kijken': 'regarder, vérifier',
    'w.groet': 'la salutation (à la fin d’un message)',
    's.texting.1': 'J’ai dix minutes de retard.',
    's.texting.2': 'Quelqu’un veut échanger son service avec moi ?',
    's.texting.3': 'Je regarde l’appli tous les jours.',
    'c.texting.q': 'Tu peux faire un service en plus samedi ?',
    'c.texting.a': 'Oui, je réponds tout de suite dans l’appli.',
    'u.grow': 'Diplômes et progresser',
    'l.certs': 'Les certificats',
    'w.certificaat': 'le certificat',
    'w.cursus': 'le cours, la formation',
    'w.examen': 'l’examen',
    'w.slagen': 'réussir (un examen)',
    'w.heftruckcertificaat': 'le certificat de cariste (chariot élévateur)',
    'w.halen': 'obtenir (un certificat)',
    's.certs.1': 'J’ai un certificat de sécurité VCA.',
    's.certs.2': 'Je veux suivre une formation.',
    's.certs.3': 'L’employeur paie la formation ?',
    'c.certs.q': 'Tu as un certificat de cariste ?',
    'c.certs.a': 'Non, mais j’aimerais bien l’obtenir.',
    'l.diploma': 'Ton diplôme et ta formation',
    'w.diploma': 'le diplôme',
    'w.waarderen': 'faire évaluer (un diplôme)',
    'w.training': 'la formation',
    'w.verplicht': 'obligatoire',
    'w.werktijd': 'le temps de travail',
    'w.verderkomen': 'progresser',
    's.diploma.1': 'J’ai un diplôme de mon pays.',
    's.diploma.2': 'Cette formation est obligatoire ?',
    's.diploma.3': 'Je veux progresser dans mon travail.',
    'c.diploma.q': 'Tu veux suivre une formation ?',
    'c.diploma.a': 'Oui, volontiers ! Qui la paie ?',
    'u.health': 'La santé',
    'l.doctor': 'Médecin ou 112 ?',
    'w.huisarts': 'le médecin généraliste',
    'w.huisartsenpost': 'le service de garde des médecins (soir, nuit et week-end)',
    'w.apotheek': 'la pharmacie',
    'w.recept': 'l’ordonnance',
    'w.spoed': 'urgent',
    'w.ambulance': 'l’ambulance',
    's.doctor.1': 'Je veux un rendez-vous chez le médecin généraliste.',
    's.doctor.2': 'Où est la pharmacie ?',
    's.doctor.3': 'C’est urgent.',
    'c.doctor.q': 'Service de garde, que puis-je faire pour vous ?',
    'c.doctor.a': 'Mon fils a beaucoup de fièvre.',
    'l.insurance': 'L’assurance maladie',
    'w.premie': 'la prime (paiement mensuel)',
    'w.eigenrisico': 'la franchise (les frais que tu paies d’abord)',
    'w.zorgtoeslag': 'l’allocation pour l’assurance maladie',
    'w.verzekeraar': 'l’assureur',
    'w.permaand': 'par mois',
    'w.vergoeden': 'rembourser (des frais)',
    's.insurance.1': 'Je paie une prime chaque mois.',
    's.insurance.2': 'C’est remboursé ?',
    's.insurance.3': 'Je demande l’allocation pour l’assurance maladie.',
    'c.insurance.q': 'Tu es chez quel assureur ?',
    'c.insurance.a': 'C’est écrit sur ma carte d’assurance maladie.',
    'u.money': 'L’argent et les lettres',
    'l.letters': 'Les lettres officielles',
    'w.brief': 'la lettre',
    'w.post': 'le courrier',
    'w.belastingdienst': 'l’administration des impôts',
    'w.aangifte': 'la déclaration d’impôts',
    'w.inkomen': 'le revenu',
    'w.terugbetalen': 'rembourser',
    's.letters.1': 'Je ne comprends pas cette lettre.',
    's.letters.2': 'Tu peux m’aider avec cette lettre ?',
    's.letters.3': 'Mon revenu a changé.',
    'c.letters.q': 'Tu as déjà fait ta déclaration d’impôts ?',
    'c.letters.a': 'Non, je la fais avant le 1er mai.',
    'l.scams': 'Attention aux arnaques',
    'w.pincode': 'le code PIN',
    'w.link': 'le lien',
    'w.oplichter': 'l’escroc',
    'w.sms': 'le SMS',
    'w.controleren': 'vérifier',
    'w.nep': 'faux',
    's.scams.1': 'Je ne donne jamais mon code PIN.',
    's.scams.2': 'Je ne clique pas sur le lien.',
    's.scams.3': 'C’est un faux message.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.scams.q': 'Ici la banque. Quel est votre code PIN ?',
    'c.scams.a': 'Je ne le donne pas. Je raccroche.',
    'u.travel': 'Aller au travail',
    'l.bike': 'À vélo',
    'w.fiets': 'le vélo',
    'w.fietspad': 'la piste cyclable',
    'w.licht': 'la lumière, le phare',
    'w.slot': 'l’antivol, la serrure',
    'w.stoplicht': 'le feu (de circulation)',
    'w.bel': 'la sonnette',
    's.bike.1': 'Je vais au travail à vélo.',
    's.bike.2': 'Allume ta lumière !',
    's.bike.3': 'Attache ton vélo avec l’antivol.',
    'c.bike.q': 'Comment tu vas au travail ?',
    'c.bike.a': 'À vélo, vingt minutes.',
    'l.transit': 'Les transports en commun et les frais de trajet',
    'w.bus': 'le bus',
    'w.trein': 'le train',
    'w.inchecken': 'valider (au départ)',
    'w.uitchecken': 'valider (à l’arrivée)',
    'w.bankpas': 'la carte bancaire',
    'w.reiskosten': 'le remboursement des frais de trajet',
    's.transit.1': 'Je valide avec ma carte bancaire.',
    's.transit.2': 'N’oublie pas de valider à l’arrivée.',
    's.transit.3': 'Où est l’arrêt de bus ?',
    'c.transit.q': 'Tu viens en train ?',
    'c.transit.a': 'Non, en bus. Il s’arrête devant la porte.',
    'u.lost': 'Perdre ton emploi',
    'l.ww': 'L’allocation chômage',
    'w.uitkering': 'l’allocation (argent de l’État)',
    'w.ww': 'l’allocation chômage',
    'w.werkloos': 'au chômage',
    'w.uwv': 'UWV (l’organisme pour l’emploi et les allocations)',
    'w.ontslagnemen': 'démissionner',
    'w.werkzoekende': 'le demandeur d’emploi',
    's.ww.1': 'Je demande l’allocation chômage à l’UWV.',
    's.ww.2': 'Je suis au chômage.',
    's.ww.3': 'Mon contrat se termine.',
    'c.ww.q': 'Qu’est-ce que tu vas faire, maintenant que ton contrat se termine ?',
    'c.ww.a': 'Je demande tout de suite l’allocation chômage.',
    'l.newjob': 'Chercher un nouveau travail',
    'w.baan': 'l’emploi, le poste',
    'w.zoeken': 'chercher',
    'w.bewaren': 'garder',
    'w.bijwerken': 'mettre à jour',
    'w.gratis': 'gratuit',
    'w.nooit': 'jamais',
    's.newjob.1': 'Je cherche un nouvel emploi.',
    's.newjob.2': 'Je garde mes fiches de paie.',
    's.newjob.3': 'Chercher du travail, c’est gratuit.',
    'c.newjob.q': 'On peut t’appeler quand il y a du travail ?',
    'c.newjob.a': 'Oui, volontiers. Voici mon numéro.',
    'u.build': 'Sur le chantier',
    'l.tools': 'Les outils et les matériaux',
    'w.steiger': 'l’échafaudage',
    'w.ladder': 'l’échelle',
    'w.boor': 'la perceuse',
    'w.hamer': 'le marteau',
    'w.beton': 'le béton',
    'w.kraan': 'la grue',
    's.tools.1': 'Passe-moi le marteau.',
    's.tools.2': 'L’échelle est contre l’échafaudage.',
    's.tools.3': 'Le béton est encore mouillé.',
    'c.tools.q': 'Où est la perceuse ?',
    'c.tools.a': 'Dans la camionnette, à l’arrière.',
    'l.site': 'La sécurité sur le chantier',
    'w.valbeveiliging': 'la protection antichute (harnais)',
    'w.last': 'la charge',
    'w.gat': 'le trou',
    'w.vallen': 'tomber',
    'w.risico': 'le risque',
    'w.weigeren': 'refuser',
    's.site.1': 'Attention, charge au-dessus de ta tête !',
    's.site.2': 'Porte ta protection antichute.',
    's.site.3': 'D’abord, je fais une analyse rapide des risques (LMRA).',
    'c.site.q': 'Tu peux aider un moment sur le toit ?',
    'c.site.a': 'Oui, mais d’abord ma protection antichute.',
    'u.factory': 'À l’usine',
    'l.line': 'La chaîne et les machines',
    'w.lopendeband': 'le tapis roulant, la chaîne',
    'w.machine': 'la machine',
    'w.storing': 'la panne',
    'w.noodstop': 'l’arrêt d’urgence',
    'w.inpakken': 'emballer',
    'w.productie': 'la production',
    's.line.1': 'La chaîne est à l’arrêt.',
    's.line.2': 'Il y a une panne.',
    's.line.3': 'J’emballe les produits.',
    'c.line.q': 'Ça va comment sur la chaîne ?',
    'c.line.a': 'Bien, mais la machine est très lente.',
    'l.quality': 'La qualité',
    'w.kwaliteit': 'la qualité',
    'w.product': 'le produit',
    'w.afkeuren': 'refuser, mettre au rebut',
    'w.beschadigd': 'abîmé, endommagé',
    'w.etiket': 'l’étiquette',
    'w.lijst': 'la liste',
    's.quality.1': 'Ce produit est abîmé.',
    's.quality.2': 'L’étiquette n’est pas bonne.',
    's.quality.3': 'Je dois mettre ça au rebut ?',
    'c.quality.q': 'Pourquoi c’est mis de côté ?',
    'c.quality.a': 'L’étiquette est de travers.',
    'u.care': 'Dans les soins',
    'l.client': 'Le résident et les soins de tous les jours',
    'w.client': 'le résident, le patient (la personne dont tu t’occupes)',
    'w.wassen': 'laver',
    'w.aankleden': 's’habiller, habiller quelqu’un',
    'w.eten': 'la nourriture, le repas',
    'w.rolstoel': 'le fauteuil roulant',
    'w.verpleegkundige': 'l’infirmier, l’infirmière',
    's.client.1': 'Vous avez bien dormi ?',
    's.client.2': 'Je vous aide à vous habiller.',
    's.client.3': 'Vous voulez encore manger quelque chose ?',
    'c.client.q': 'Vous pouvez m’aider avec mon manteau ?',
    'c.client.a': 'Bien sûr, je vous aide.',
    'l.privacy': 'La vie privée et la sécurité dans les soins',
    'w.privacy': 'la vie privée',
    'w.hygiene': 'l’hygiène',
    'w.doorgeven': 'transmettre (une information)',
    'w.geheim': 'secret',
    'w.toestemming': 'l’autorisation, l’accord',
    'w.gevallen': 'tombé',
    's.privacy.1': 'La dame est tombée.',
    's.privacy.2': 'Je le transmets à l’infirmière.',
    's.privacy.3': 'À la maison, je ne parle pas des résidents.',
    'c.privacy.q': 'Tu peux donner ses médicaments à monsieur Jansen ?',
    'c.privacy.a': 'Non, je n’ai pas le droit. Je vais chercher l’infirmière.',
    'u.horeca': 'Dans l’hôtellerie et la restauration',
    'l.kitchen': 'En cuisine',
    'w.keuken': 'la cuisine',
    'w.snijden': 'couper',
    'w.pan': 'la casserole, la poêle',
    'w.koelcel': 'la chambre froide',
    'w.allergie': 'l’allergie',
    'w.datum': 'la date',
    's.kitchen.1': 'Mets la viande dans la chambre froide.',
    's.kitchen.2': 'Coupe les oignons en petits morceaux.',
    's.kitchen.3': 'Il y a des fruits à coque (noix, noisettes…) là-dedans ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.kitchen.q': 'Un client est allergique aux fruits à coque (noix, noisettes…).', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.kitchen.a': 'Je demande au chef.',
    'l.service': 'Servir les clients',
    'w.gast': 'le client (au restaurant, à l’hôtel)',
    'w.bestelling': 'la commande',
    'w.rekening': 'l’addition',
    'w.menu': 'le menu',
    'w.afruimen': 'débarrasser (la table)',
    'w.fooi': 'le pourboire',
    's.service.1': 'Qu’est-ce que vous voulez boire ?',
    's.service.2': 'Je peux prendre votre commande ?',
    's.service.3': 'Je débarrasse la table.',
    'c.service.q': 'On peut avoir l’addition ?',
    'c.service.a': 'Bien sûr, j’arrive.',
    'u.clean': 'Le nettoyage',
    'l.cleaning': 'Le matériel de nettoyage',
    'w.dweil': 'la serpillière',
    'w.emmer': 'le seau',
    'w.schoonmaakmiddel': 'le produit de nettoyage',
    'w.stofzuiger': 'l’aspirateur',
    'w.stoffen': 'faire la poussière',
    'w.prullenbak': 'la poubelle',
    's.cleaning.1': 'Où est le seau ?',
    's.cleaning.2': 'Je vais passer l’aspirateur dans le couloir.',
    's.cleaning.3': 'Vide la poubelle.',
    'c.cleaning.q': 'Tu as fini les toilettes ?',
    'c.cleaning.a': 'Presque, encore deux.',
    'l.cleansafe': 'Nettoyer en sécurité',
    'w.glad': 'glissant',
    'w.bordje': 'le panneau',
    'w.mengen': 'mélanger',
    'w.damp': 'les vapeurs',
    'w.luchten': 'aérer',
    'w.spoelen': 'rincer',
    's.cleansafe.1': 'Attention, ça glisse !',
    's.cleansafe.2': 'Pose le panneau.',
    's.cleansafe.3': 'Ne mélange jamais les produits de nettoyage.',
    'c.cleansafe.q': 'Je peux marcher ici ?',
    'c.cleansafe.a': 'Attention, le sol est encore glissant.',
    'c.cv': 'Un CV court', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': 'Ici, un CV est court : 1 ou 2 pages. Écris tes coordonnées, ton expérience de travail, ta formation, tes langues et tes compétences. Une photo n’est pas nécessaire. Tu n’as pas besoin d’écrire ta religion, ton âge ou ta situation familiale. Sois honnête sur ce que tu sais faire. Demande à quelqu’un de vérifier ton néerlandais.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'Tu peux lire mon CV ? Mon néerlandais est correct ?',
    'c.cv.s': 'Tu as travaillé 3 ans dans une usine dans ton pays, mais tu n’as pas de diplôme. Qu’est-ce que tu mets sur ton CV ?',
    'c.cv.o1': 'Écris honnêtement le travail et ce que tu y faisais.',
    'c.cv.o2': 'N’écris rien, parce que tu n’as pas de diplôme.',
    'c.cv.o3': 'Écris que tu as un diplôme, pour faire meilleure impression.',
    'c.cv.w': 'L’expérience de travail compte, même celle de l’étranger. L’honnêteté est importante : les employeurs peuvent vérifier.',
    'c.interview': 'L’entretien d’embauche',
    'c.interview.b': 'Arrive à l’heure : 5 à 10 minutes en avance. Salue poliment et regarde la personne. Dis en quelques mots ce que tu sais faire. Poser toi-même des questions est normal et positif, par exemple sur les horaires, le travail ou la formation. À la fin, tu peux demander quand tu auras des nouvelles. Tu peux dire que tu apprends encore le néerlandais. Un employeur n’a pas le droit de poser des questions sur ta religion, une grossesse ou ta santé. Tu n’as pas besoin de répondre : tu peux dire poliment que tu préfères ne pas répondre.',
    'c.interview.p': 'Je peux aussi poser une question ? Le travail, c’est combien d’heures par semaine ?',
    'c.interview.s': 'À la fin de l’entretien, l’employeur demande : “Heb je nog vragen?” Que fais-tu ?',
    'c.interview.o1': 'Pose une question sur les horaires ou la formation.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Dis non, parce que poser des questions n’est pas poli.',
    'c.interview.o3': 'Parle plus de toi, pour montrer que tu travailles bien.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Les questions montrent que le travail t’intéresse. Ici, les employeurs en attendent souvent.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Ton contrat par écrit',
    'c.findwork.b': 'Demande toujours un contrat écrit et une copie pour toi. Lis-le avant de signer, ou demande de l’aide à une personne de confiance. Une agence d’intérim (uitzendbureau) n’a pas le droit de te demander de l’argent pour te trouver un emploi. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.findwork.p': 'Je peux d’abord lire le contrat ?',
    'c.findwork.s': 'Un nouvel employeur dit : “Signe ici maintenant. Tu pourras le lire plus tard.” Que fais-tu ?',
    'c.findwork.o1': 'Demande du temps pour le lire, ou une copie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Signe vite, pour ne pas perdre le travail.',
    'c.findwork.o3': 'Signe, et demande une copie après.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'Ton contrat dit ce que tu gagnes et quels sont tes droits. Un bon employeur te donne le temps de le lire. Tu peux poser des questions sur tout ce que tu ne comprends pas.',
    'c.contract': 'Période d’essai et travail sur appel',
    'c.contract.b': 'Une période d’essai (proeftijd) doit être écrite. Elle est interdite dans un contrat de 6 mois ou moins. Dans un contrat plus long, de moins de 2 ans, elle dure au maximum 1 mois. Dans un contrat de 2 ans ou plus, ou un contrat à durée indéterminée, elle dure au maximum 2 mois. Tu travailles sur appel (oproepkracht) ? En général, ton employeur doit t’appeler au moins 4 jours avant. S’il appelle plus tard, tu n’as pas besoin de venir. Une cao peut réduire ces 4 jours, mais pas à moins de 1 jour. Si on annule ton travail plus tard que ça, on te paie quand même. Si on t’appelle pour moins de 3 heures de travail, on te paie en général 3 heures. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': 'La période d’essai est dans mon contrat ?',
    'c.contract.s': 'Ton contrat est de 3 mois. Il est écrit : “Proeftijd: 1 maand”. Que fais-tu ?',
    'c.contract.o1': 'Pose la question : cette période d’essai ne compte pas.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.contract.o2': 'Rien. Chaque contrat a une période d’essai.',
    'c.contract.o3': 'Signe et ne demande jamais rien, parce que le patron sait mieux que toi.',
    'c.contract.w': 'Une période d’essai dans un contrat de 6 mois ou moins ne compte pas. Poser calmement la question est normal. Si la réponse n’est pas claire, demande conseil au syndicat ou au Juridisch Loket.',
    'c.agency': 'Ton agence est ton employeur',
    'c.agency.b': 'Si tu travailles via une agence d’intérim (uitzendbureau), l’agence est ton employeur, pas l’entreprise où tu travailles. Ton contrat et ton salaire viennent de l’agence, et il y a une cao pour les intérimaires (uitzend-cao). Tu as droit au même salaire que les travailleurs de l’entreprise qui font le même travail. Tu reçois aussi une prime de vacances (vakantiegeld) et tu accumules des jours de congé. Note toi-même tes heures de travail, et vérifie-les sur ta fiche de paie. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.agency.x': 'Ton employeur d’un autre pays te fait travailler ici pour un temps ? Alors tu es en détachement (gedetacheerd). Demande-lui ton formulaire A1 : il montre où tu as ton assurance. Ici, tu reçois quand même au moins le salaire minimum néerlandais.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'Sur ma fiche de paie, il y a trop peu d’heures.',
    'c.agency.s': 'Ta fiche de paie indique 32 heures, mais tu as travaillé 38 heures. Que fais-tu ?',
    'c.agency.o1': 'Montre ta propre liste d’heures à l’agence et demande de corriger.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Ne dis rien, parce que ce n’est que 6 heures.',
    'c.agency.o3': 'Demande au patron de l’entreprise où tu travailles de payer les 6 heures.',
    'c.agency.w': 'C’est l’agence qui te paie, donc c’est l’agence qui doit corriger l’erreur. Ta propre liste de dates et d’heures aide. Poser la question, c’est ton droit.',
    'c.bsn': 'Ton BSN : protège-le',
    'c.bsn.b': 'Tu reçois un BSN (burgerservicenummer) quand tu t’inscris à la mairie (gemeente). Tu es ici seulement pour peu de temps ? Alors tu t’inscris à un guichet RNI. Tu as besoin de ton BSN pour travailler, pour les impôts, pour l’assurance maladie et pour un compte bancaire. Ton employeur a besoin de ta pièce d’identité et de ton BSN. Ne donne pas ton BSN ni une copie de ta pièce d’identité à n’importe qui. Demande d’abord pourquoi ils en ont besoin. Tu déménages ? Déclare ta nouvelle adresse à la gemeente dans les 5 jours. DigiD est ton identifiant pour les sites de l’État : ne le donne jamais à quelqu’un d’autre. Tu habites ou tu travailles ici ? Alors tu dois en général avoir une assurance maladie néerlandaise (zorgverzekering). Fais-le vite. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.bsn.p': 'Pourquoi avez-vous besoin de mon BSN ?',
    'c.bsn.s': 'Un inconnu te propose un travail sur WhatsApp. Il demande une photo de ton passeport et ton identifiant DigiD. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Ne donne jamais ton identifiant DigiD. Vérifie qui il est.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Envoie tout vite pour avoir le travail.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o3': 'Envoie seulement la photo du passeport.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Avec ton DigiD ou une copie de ta pièce d’identité, d’autres personnes peuvent utiliser ton nom, par exemple pour des prêts ou des allocations. Un vrai employeur a besoin de ta pièce d’identité et de ton BSN, mais jamais de ton identifiant DigiD.',
    'c.housing': 'Le logement par ton employeur',
    'c.housing.b': 'Ton employeur ou ton agence s’occupe de ton logement ? Alors le contrat de location doit être séparé de ton contrat de travail. Demande un contrat de location écrit et une preuve de ce que tu paies. Le loyer peut être retenu sur ton salaire seulement si tu es d’accord par écrit, et dans les limites de la loi : vérifie-le sur ta fiche de paie. Une caution (borg) est au maximum de 2 mois de loyer de base. Tu la récupères quand tu pars, moins les vrais dégâts. Inscris-toi à ton adresse auprès de la gemeente. Logement dangereux, menaces ou frais injustes ? Signale-le à la gemeente (meldpunt), et demande un conseil gratuit au Juridisch Loket ou à un service de conseil logement. Pour un problème de loyer ou de charges, il y a la Huurcommissie. Ton travail se termine ? Demande conseil avant de quitter ton logement. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.housing.p': 'Je peux avoir une preuve que j’ai payé ?',
    'c.housing.s': 'Ton travail se termine. L’agence dit : “Tu dois quitter la maison demain.” Que fais-tu ?',
    'c.housing.o1': 'Demande d’abord conseil au Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Pars tout de suite et oublie ta caution.',
    'c.housing.o3': 'Reste, et ne réponds plus à l’agence.',
    'c.housing.w': 'Ton contrat de location a ses propres règles, séparées de ton travail. Un conseil gratuit t’aide à connaître tes droits, par exemple sur le moment où tu dois partir et sur ta caution.',
    'c.payslip': 'Vérifie ta fiche de paie',
    'c.payslip.b': 'Le brut (bruto), c’est ton salaire avant les impôts. Le net (netto), c’est ce que tu reçois sur ton compte : le brut moins les impôts et les cotisations (loonheffing). Ton employeur doit te donner une fiche de paie (loonstrook). Vérifie les heures et le salaire sur chaque fiche de paie, et note les heures que tu travailles. Tu as deux emplois ? Utilise la réduction d’impôt (loonheffingskorting) chez un seul employeur. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.payslip.p': 'J’ai travaillé plus d’heures. Tu peux vérifier ?',
    'c.payslip.s': 'Ta fiche de paie indique moins d’heures que tu en as travaillé. Que fais-tu ?',
    'c.payslip.o1': 'Montre tes notes et demande à ton responsable de vérifier.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Ne dis rien, parce que tu ne veux pas de problèmes.',
    'c.payslip.o3': 'Attends un mois : ce sera juste sur la prochaine fiche de paie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Les erreurs sur une fiche de paie arrivent. Poser la question est normal, et c’est ton droit. Tes propres notes de dates et d’heures aident beaucoup.',
    'c.extra': 'La prime de vacances et le salaire minimum',
    'c.extra.b': 'Tu reçois une prime de vacances (vakantiegeld) : au moins 8 % de ton salaire brut. La plupart des employeurs la paient une fois par an, en mai ou en juin. Ton salaire ne peut jamais être plus bas que le salaire minimum légal (minimumloon) ; pour les travailleurs de moins de 21 ans, il est plus bas. Le montant change chaque année : vérifie-le sur rijksoverheid.nl. Une cao donne souvent un supplément pour les heures sup ou le travail de nuit. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.extra.p': 'Quand est-ce que je reçois ma prime de vacances ?',
    'c.extra.s': 'Un collègue dit : “En mai, le patron te donne de l’argent en plus.” Qu’est-ce que c’est ?',
    'c.extra.o1': 'La prime de vacances : au moins 8 % de ton salaire brut.',
    'c.extra.o2': 'Un cadeau, seulement pour les meilleurs travailleurs.',
    'c.extra.o3': 'Un 13e mois : un mois de salaire en plus, pour tout le monde.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'La prime de vacances est ton droit, pas un cadeau. Tu la gagnes avec chaque heure de travail. Si tu quittes ton emploi plus tôt, tu la reçois avec ton dernier salaire.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.phone': 'Ton téléphone au travail',
    'c.phone.b': 'Beaucoup de lieux de travail interdisent le téléphone pendant le travail, surtout près des machines et des chariots élévateurs, ou dans la production alimentaire. Ça peut être dangereux ou pas hygiénique. Utilise ton téléphone pendant ta pause. Tu attends un appel urgent de ta famille ? Préviens d’abord ton responsable. Ne prends pas de photos ni de vidéos au travail sans autorisation : pense à la vie privée des collègues et aux secrets de l’entreprise. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.phone.p': 'Mon enfant est malade. Je peux garder mon téléphone allumé ?',
    'c.phone.s': 'Ta mère est à l’hôpital et elle peut appeler aujourd’hui. Les téléphones sont interdits sur le lieu de travail. Que fais-tu ?',
    'c.phone.o1': 'Préviens ton responsable et demande comment on peut te joindre.',
    'c.phone.o2': 'Garde ton téléphone dans ta poche et réponds discrètement à la machine.',
    'c.phone.o3': 'Reste à la maison sans dire pourquoi à personne.',
    'c.phone.w': 'Les responsables comprennent en général une urgence familiale. Quand ils le savent, ils peuvent trouver une solution sûre, par exemple une heure fixe pour regarder ton téléphone.',
    'c.smoking': 'Fumer seulement dehors',
    'c.smoking.b': 'Aux Pays-Bas, la loi interdit de fumer à l’intérieur d’un lieu de travail. C’est vrai aussi pour la cigarette électronique (vape). Depuis 2022, les fumoirs à l’intérieur des entreprises ne sont plus autorisés. Fume seulement dehors, à l’endroit que ton employeur permet, et en général seulement pendant ta pause. Des pauses cigarette en plus ne sont pas un droit : mets-toi d’accord avec ton responsable. Ne fume jamais près de choses qui brûlent facilement, comme du carburant ou des cartons dans un entrepôt. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.smoking.p': 'Je peux fumer dehors pendant ma pause ?',
    'c.smoking.s': 'Il fait froid et il pleut. Un collègue dit : “Fume dans la réserve, personne ne le voit.” Que fais-tu ?',
    'c.smoking.o1': 'Dis non, et fume dehors pendant ta pause.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Fume vite dans la réserve, juste cette fois.',
    'c.smoking.o3': 'Utilise plutôt ta vape à l’intérieur, parce que c’est permis.',
    'c.smoking.w': 'Fumer à l’intérieur est contre la loi et peut provoquer un incendie. Une vape à l’intérieur est interdite aussi. Respecter la règle protège tout le monde.',
    'c.clock': 'Pointe toi-même',
    'c.clock.b': 'Pointe toi-même à l’arrivée et au départ, au moment où tu commences et finis vraiment de travailler. Ne pointe jamais pour un collègue, et ne laisse jamais quelqu’un d’autre utiliser ton badge. C’est considéré comme une fraude et ça peut mener au licenciement. Tu vas être en retard ? Appelle avant le début de ton service. Vérifie que tes heures pointées correspondent à ta fiche de paie. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.clock.p': 'J’ai oublié de pointer en partant. Tu peux corriger ?',
    'c.clock.s': 'Un collègue te donne son badge : “Pointe pour moi, j’aurai 20 minutes de retard.” Que fais-tu ?',
    'c.clock.o1': 'Dis non, et dis-lui d’appeler le responsable.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'Fais-le juste une fois, parce que c’est ton ami.',
    'c.clock.o3': 'Pointe pour lui et préviens le responsable plus tard.',
    'c.clock.w': 'Pointer pour quelqu’un d’autre est considéré comme une fraude, pour vous deux. Dire non protège ton collègue et ton propre emploi.',
    'c.hygiene': 'La tête claire, les mains propres',
    'c.hygiene.b': 'L’alcool et la drogue au travail, ou venir travailler après en avoir pris, sont interdits dans presque toutes les entreprises. C’est très dangereux près des machines et des chariots élévateurs, et ça peut mener au licenciement. Un médicament te donne sommeil ou des vertiges ? Dis-le à ton responsable, pour pouvoir faire un travail sans danger. Tu n’as pas besoin de dire quel médicament. Dans la production alimentaire, les règles d’hygiène sont strictes : lave-toi les mains, porte des vêtements de travail propres, une charlotte si nécessaire, et pas de bijoux. Vomissements ou diarrhée ? Signale-le avant de commencer. Garde ton poste de travail en ordre. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.hygiene.p': 'Je prends un médicament. Il me donne sommeil.',
    'c.hygiene.s': 'Ton médecin te donne un médicament qui donne sommeil. Demain, tu dois conduire un chariot élévateur. Que fais-tu ?',
    'c.hygiene.o1': 'Préviens ton responsable avant de commencer.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Ne dis rien et conduis très lentement.',
    'c.hygiene.o3': 'Arrête le médicament sans demander à ton médecin.',
    'c.hygiene.w': 'Ton responsable n’a pas besoin de savoir quel médicament, seulement que tu ne peux pas conduire ou travailler avec des machines maintenant. Ça vous protège, toi et tes collègues.',
    'c.smalltalk': 'Bavarder pendant la pause',
    'c.smalltalk.b': 'Les petites conversations pendant la pause sont normales. Elles t’aident à te sentir membre de l’équipe. On t’accueille volontiers à la table du café ou du déjeuner. Les sujets faciles sont le week-end, la météo, le sport et les vacances. Les questions sur le salaire, la religion ou la vie privée de quelqu’un sont souvent trop personnelles au début. Pour leur anniversaire, les gens apportent souvent quelque chose pour l’équipe (trakteren), comme un gâteau. C’est l’anniversaire d’un collègue ? Dis “Gefeliciteerd!”.',
    'c.smalltalk.p': 'Joyeux anniversaire !',
    'c.smalltalk.s': 'Pendant la pause, tes collègues sont assis ensemble à une table. Tu ne les connais pas encore bien. Que fais-tu ?',
    'c.smalltalk.o1': 'Demande “Mag ik bij jullie zitten?” et joins-toi à eux avec une petite conversation.',
    'c.smalltalk.o2': { m: 'Mange seul dehors tous les jours, pour ne pas les déranger.', f: 'Mange seule dehors tous les jours, pour ne pas les déranger.', x: 'Mange seul / seule dehors tous les jours, pour ne pas les déranger.' },
    'c.smalltalk.o3': 'Demande à chaque collègue combien il gagne.',
    'c.smalltalk.w': 'Venir à la table, c’est bien accueilli, et ça t’aide à connaître l’équipe. Une question simple comme “Hoe was je weekend?” est un bon début.',
    'c.mistakes': 'Les erreurs, c’est normal',
    'c.mistakes.b': 'Tout le monde fait des erreurs au travail. Dis-le vite, pour qu’on puisse corriger : “Sorry, ik heb een fout gemaakt.” Cacher une erreur est vu comme bien pire que l’erreur elle-même. Une remarque parle du travail, pas de toi comme personne. Tu as reçu un compliment ? Dis simplement merci. Tu ne sais pas bien quoi améliorer ? Demande : “Kun je het uitleggen?”',
    'c.mistakes.p': 'Pardon, j’ai fait une erreur. Comment je peux réparer ça ?',
    'c.mistakes.s': 'Tu as mis 20 cartons sur la mauvaise palette. Personne ne l’a encore vu. Que fais-tu ?',
    'c.mistakes.o1': 'Dis-le à ton responsable et aide à corriger.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Ne dis rien et espère que personne ne le remarque.',
    'c.mistakes.o3': 'Dis que c’est un collègue qui l’a fait.',
    'c.mistakes.w': 'Une erreur dite tôt est facile à corriger. L’honnêteté crée la confiance, et ça compte plus que ne jamais faire d’erreur.',
    'c.respect': 'Le respect pour tout le monde',
    'c.respect.b': 'Au travail, tout le monde est égal et tout le monde est traité avec respect, quels que soient son genre, son origine, sa religion ou son orientation sexuelle. C’est toi qui décides du contact physique. On se serre souvent la main. Mais tu peux aussi saluer d’une autre façon polie, par exemple d’un signe de tête et d’un sourire. Ensuite, explique-le en quelques mots. Les blagues sur l’origine ou la religion de quelqu’un, les menaces, le harcèlement (pesten) et les comportements sexuels non voulus ne sont pas acceptés. Tu peux le signaler à ton responsable, ou à une personne de confiance (vertrouwenspersoon) si ton entreprise en a une.',
    'c.respect.p': 'Je préfère ne pas serrer la main, mais je te salue avec plaisir.',
    'c.respect.s': 'Un collègue fait souvent des blagues sur ta religion. Tu lui as demandé d’arrêter, mais il continue. Que fais-tu ?',
    'c.respect.o1': 'Dis-le à ton responsable ou au vertrouwenspersoon.',
    'c.respect.o2': 'Ris avec lui, pour éviter les problèmes.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Fais toi aussi des blagues sur ses origines.',
    'c.respect.w': 'Ce genre de blagues n’est pas accepté au travail. Le signaler est normal : l’entreprise doit garder le lieu de travail sûr pour tout le monde.',
    'c.health': 'Les pauses et les horaires de travail',
    'c.health.b': 'La loi protège ta santé. Tu travailles plus de 5 h 30 ? Alors tu as au moins 30 minutes de pause (ça peut être 2 fois 15 minutes). Plus de 10 heures ? Alors au moins 45 minutes. Une cao peut avoir des règles de pause un peu différentes. Tu peux travailler au maximum 12 heures par service et 60 heures par semaine. Tu as moins de 18 ans ? Alors tu peux travailler moins d’heures au maximum. Ton employeur doit te donner gratuitement des équipements de protection, comme des chaussures de sécurité ou des gants. Travail dangereux ou salaire trop bas ? Tu peux le signaler à la Nederlandse Arbeidsinspectie, même sans donner ton nom. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.p': 'Je n’ai pas encore eu de pause.',
    'c.health.s': 'Tu as travaillé 6 heures sans pause. Ton responsable te demande de continuer. Que fais-tu ?',
    'c.health.o1': 'Dis que tu as besoin de ta pause maintenant.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Continue, et prends une pause plus longue plus tard.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Quitte le travail et rentre chez toi sans rien dire.',
    'c.health.w': 'Quand tu travailles plus de 5 h 30, la pause, c’est la loi, pas une faveur. Le repos t’aide aussi à travailler en sécurité.',
    'c.rights': 'Discrimination et licenciement',
    'c.rights.b': 'La discrimination au travail est interdite, par exemple à cause de ton origine, de ta religion ou de ton genre. Ton employeur ne peut pas simplement te licencier : normalement, il a besoin de l’autorisation de l’UWV ou d’un juge, ou de ton accord. (Pendant une période d’essai ou à la fin d’un contrat temporaire, d’autres règles s’appliquent.) Ne signe pas un papier sur ton licenciement que tu ne comprends pas. Tu as signé un accord pour mettre fin à ton emploi (vaststellingsovereenkomst) ? Alors en général, tu peux encore l’annuler par écrit dans les 14 jours. Demande d’abord de l’aide. Va au syndicat (par exemple la FNV), à un service contre la discrimination ou au Juridisch Loket. Le Juridisch Loket donne des conseils juridiques gratuits. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.rights.p': 'Je veux d’abord demander conseil.',
    'c.rights.s': 'Ton patron te donne un papier : “Signe aujourd’hui, et tu pars d’un commun accord.” Tu ne le comprends pas bien. Que fais-tu ?',
    'c.rights.o1': 'Ne signe pas encore. Demande d’abord conseil.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'Signe, parce que le patron dit que c’est bon.',
    'c.rights.o3': 'Range le papier et n’en parle jamais.',
    'c.rights.w': 'Il y a une erreur dedans ? Alors tu peux perdre des droits, par exemple à l’allocation chômage (WW). Demander du temps pour avoir un conseil est normal et permis.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': 'En néerlandais, le contraire de “moeten” est “niet hoeven”. “Je moet tekenen” veut dire : tu n’as pas le choix. “Je hoeft niet te tekenen” veut dire : tu peux choisir. “Je mag niet tekenen” veut dire : c’est interdit. Attention : en anglais, “must not” veut dire “mag niet”. En français aussi, “tu ne dois pas” veut dire “mag niet”, et “hoeft niet” veut dire “tu n’as pas besoin”. Tu as un doute ? Demande.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': 'Je dois le faire, ou j’ai le choix ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': 'Ton chef d’équipe dit : “Je hoeft zaterdag niet te komen.” Qu’est-ce qu’il veut dire ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': 'Tu n’as pas besoin de venir samedi. Tu peux choisir.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': 'Tu n’as pas le droit de venir samedi.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': 'Tu dois venir samedi.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': '“Niet hoeven” veut dire que ce n’est pas obligatoire : tu peux choisir. “Niet mogen” voudrait dire que c’est interdit.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'Les vacances et le congé d’urgence',
    'c.leave.b': 'La loi te donne des jours de congé payés : au moins 4 fois le nombre de jours que tu travailles par semaine. À temps plein, 5 jours par semaine ? Alors au moins 20 jours par an. Une cao peut donner plus. Demande ton congé à temps, et par écrit. Une urgence soudaine, comme un accident ou une maladie dans ta famille ? Alors tu peux avoir un court congé payé (calamiteitenverlof). Préviens tout de suite ton employeur. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.leave.p': 'Je voudrais demander un congé pour juillet.',
    'c.leave.s': 'Tu veux rendre visite à ta famille à l’étranger pendant trois semaines cet été. Que fais-tu ?',
    'c.leave.o1': 'Demande ton congé tôt à ton employeur, par écrit.',
    'c.leave.o2': 'Pars, et préviens ton patron à ton retour.',
    'c.leave.o3': 'Demande à un collègue de prévenir le patron la veille.',
    'c.leave.w': 'Ton employeur doit en général dire oui. Il ne peut refuser que pour une raison très importante, et il doit alors le faire par écrit dans les 2 semaines. Demander tôt donne le plus de chances d’avoir un oui.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness': 'Tes droits quand tu es malade',
    'c.illness.b': 'Quand tu es malade, ton employeur doit payer au moins 70 % de ton salaire, pendant 2 ans au maximum. Une cao donne souvent plus. Il peut y avoir jusqu’à 2 jours de carence (wachtdagen) sans salaire, mais seulement si ton contrat ou ta cao le dit. Ton patron n’a pas le droit de demander quelle maladie tu as. Tu parles de ta santé et de ton travail avec le médecin du travail (bedrijfsarts). Appelle ton employeur quand tu vas mieux (betermelden). La première année, tu reçois au moins le salaire minimum. Un contrat temporaire s’arrête à sa date de fin, même pendant une maladie. Tu travailles via une agence ? Si ton contrat a une clause d’intérim (uitzendbeding), il peut s’arrêter quand tu tombes malade. Alors pose tes questions sur la Ziektewet à l’UWV, ou demande à un syndicat. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.illness.x': 'Tu es en arrêt maladie et tu veux aller dans ton pays ? Demande d’abord à ton employeur ou à l’agence. Sans accord, ton salaire peut s’arrêter. Donne ton adresse là-bas et réponds au téléphone.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'Je vais mieux. Je viens travailler demain.',
    'c.illness.s': 'Tu es malade depuis une semaine. Ton employeur t’envoie chez le médecin du travail. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Vas-y, et parle de ta santé et de ton travail.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'N’y va pas : tu as ton propre médecin.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': 'Retourne au travail alors que tu es encore malade.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'Le médecin du travail t’aide à reprendre le travail en bonne santé. Il ne donne pas tes détails médicaux à ton patron, seulement le travail que tu peux faire.',
    'c.warning': 'Les signes d’exploitation',
    'c.warning.b': 'Fais attention à ces signes. Ton employeur garde ton passeport ou ta pièce d’identité. C’est interdit : tu gardes toi-même tes papiers. Un employeur peut seulement faire une copie. Tu reçois beaucoup moins que le salaire convenu, ou pas de fiche de paie. Tu dois rembourser une grosse dette à l’employeur ou à l’agence. Tu dois faire des journées extrêmement longues, sans avoir le choix. Quelqu’un te menace, ou utilise ton logement pour faire pression sur toi. Ce n’est pas normal et c’est interdit. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.warning.p': 'Je veux récupérer mon passeport.',
    'c.warning.s': 'Le premier jour, l’agence dit : “On garde ton passeport, pour la sécurité.” Que fais-tu ?',
    'c.warning.o1': 'Garde-le toi-même. Ils peuvent faire une copie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Donne-le, parce que l’agence connaît les règles.',
    'c.warning.o3': 'Donne-le, mais prends-le d’abord en photo.',
    'c.warning.w': 'Ton passeport est à toi. Le garder est une façon de contrôler les travailleurs. Un employeur a seulement besoin d’une copie pour ses dossiers.',
    'c.gethelp': 'Où trouver de l’aide',
    'c.gethelp.b': 'Tu vois des signes d’exploitation, pour toi ou pour quelqu’un d’autre ? Demande de l’aide. Tu peux le signaler à la Nederlandse Arbeidsinspectie, même de façon anonyme, ou à la police. Meld Misdaad Anoniem : 0800-7000. Conseil juridique gratuit : le Juridisch Loket. En danger ? Appelle le 112. Toute personne qui travaille aux Pays-Bas peut avoir de l’aide, y compris les migrants. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.p': 'J’ai besoin d’aide. On m’exploite.',
    'c.gethelp.s': 'Un ami travaille 14 heures par jour, presque sans salaire. Il a peur de son patron. Que peux-tu faire ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Aide-le à contacter l’Arbeidsinspectie ou le Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': 'Dis-lui que c’est normal pour les nouveaux travailleurs.',
    'c.gethelp.o3': 'Dis-lui d’attendre la fin de son contrat, puis de partir.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'L’aide existe pour toute personne qui travaille aux Pays-Bas. On peut aussi faire un signalement sans donner de noms.',
    'c.callin': 'Appeler ton responsable',
    'c.callin.b': 'Quand tu appelles ton responsable, dis ton nom, la raison, et quand tu penses revenir. Malade ? Tu dois seulement dire que tu es malade, pas quelle maladie tu as. Appelle : n’envoie pas seulement un message, sauf si ton entreprise dit qu’un message suffit. Pas de réponse ? Laisse un message vocal et réessaie. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.callin.p': 'Bonjour, c’est Ali. Je ne peux pas venir aujourd’hui.',
    'c.callin.s': 'Ton enfant est malade et tu ne peux pas venir travailler. Ton entreprise veut que tu appelles. Que fais-tu ?',
    'c.callin.o1': 'Appelle ton responsable avant ton service.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Envoie un petit message au début de ton service.',
    'c.callin.o3': 'Demande à ton voisin d’appeler pour toi.',
    'c.callin.w': 'Un appel est clair et rapide, et ton responsable peut poser des questions. Dire quand tu penses revenir l’aide à s’organiser. Dis aussi ton nom et la raison.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Les messages au travail : courts et polis',
    'c.texting.b': 'Écris des messages courts et polis au travail. Dis qui tu es et ce qui se passe, et termine par une salutation. Par exemple : “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Regarde souvent ton planning (rooster) dans l’appli. Réponds à temps aux demandes de service. Pour échanger un service, ton responsable ou le planificateur doit d’abord être d’accord, alors demande : “Mag ik mijn dienst ruilen?” Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.texting.p': { m: 'Salut Mark, j’ai 10 minutes de retard. Désolé ! À plus, Ali', f: 'Salut Mark, j’ai 10 minutes de retard. Désolée ! À plus, Ali', x: 'Salut Mark, j’ai 10 minutes de retard. Désolé / désolée ! À plus, Ali' },
    'c.texting.s': 'Tu vas avoir 10 minutes de retard. Quel message à ton responsable est le meilleur ?',
    'c.texting.o1': '“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '“Sorry, ik ben er zo!” (sans ton nom, sans l’heure).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Un message vocal de trois minutes sur la circulation.',
    'c.texting.w': 'Un bon message dit qui tu es et ce qui se passe, en quelques mots. Comme ça, ton responsable le sait tout de suite.',
    'c.certs': 'Les certificats t’aident',
    'c.certs.b': 'Dans la construction, l’industrie et l’intérim, tu as souvent besoin d’un certificat VCA (sécurité). Pour conduire un chariot élévateur, tu as en général besoin d’un certificat de cariste (heftruckcertificaat). Demande à ton employeur s’il paie le cours et l’examen.',
    'c.certs.p': 'Je peux faire un cours VCA ici ?',
    'c.certs.s': 'Une offre d’emploi demande un certificat VCA. Tu ne l’as pas encore. Que fais-tu ?',
    'c.certs.o1': 'Demande à l’employeur ou à l’agence de t’aider à l’obtenir.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'Ne postule pas, parce que tu n’auras jamais le travail.',
    'c.certs.o3': 'Dis que tu l’as, et espère que personne ne vérifie.',
    'c.certs.w': 'Beaucoup d’employeurs et d’agences aident pour le VCA. Demander montre que tu veux apprendre.',
    'c.diploma': 'Ton diplôme compte',
    'c.diploma.b': 'Tu as un diplôme d’un autre pays ? Tu peux le faire évaluer par l’IDW (Internationale Diplomawaardering). Alors les employeurs peuvent voir ce qu’il vaut ici. Une formation est obligatoire pour ton travail ? Alors ton employeur doit la payer, et elle compte comme temps de travail. Demande à ton responsable s’il y a des cours. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.diploma.p': 'Il y a des cours pour moi ?',
    'c.diploma.s': 'Ton employeur dit que tu dois faire une formation de sécurité obligatoire samedi, sans salaire. Qu’est-ce qui est vrai ?',
    'c.diploma.o1': 'L’employeur la paie, et c’est du temps de travail.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'Une formation est toujours pendant ton temps libre.',
    'c.diploma.o3': 'Tu dois payer la formation toi-même.',
    'c.diploma.w': 'Si une formation est obligatoire pour ton travail, l’employeur paie et elle compte comme temps de travail. Si ce n’est pas clair, demande conseil.',
    'c.doctor': 'Médecin ou 112 ?',
    'c.doctor.b': 'Inscris-toi chez un médecin généraliste (huisarts) près de chez toi. Tu as besoin de soins urgents le soir, la nuit ou le week-end ? Appelle la huisartsenpost. Appelle le 112 seulement en cas d’urgence : danger de mort, incendie ou crime en train de se passer. Tu reçois les médicaments à la pharmacie (apotheek).', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.doctor.p': 'Je veux m’inscrire chez le médecin généraliste.',
    'c.doctor.s': 'C’est samedi soir. Ton enfant a beaucoup de fièvre, mais il est réveillé et respire normalement. Que fais-tu ?',
    'c.doctor.o1': 'Appelle la huisartsenpost.',
    'c.doctor.o2': 'Appelle le 112.',
    'c.doctor.o3': 'Attends lundi et ne fais rien.',
    'c.doctor.w': 'La huisartsenpost aide pour les soins urgents en dehors des heures de bureau. Le 112, c’est pour les urgences : danger de mort, incendie ou crime en train de se passer.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.insurance': 'L’assurance maladie',
    'c.insurance.b': 'Quand tu habites ou travailles aux Pays-Bas, une assurance maladie de base est en général obligatoire. Tu paies une prime chaque mois. Chaque année, il y a une franchise (eigen risico) : les premiers frais, tu les paies toi-même. Le montant change : vérifie-le chez ton assureur. Les visites chez le médecin généraliste (huisarts) ne comptent pas pour la franchise. Avec un petit revenu, tu peux peut-être recevoir une allocation (zorgtoeslag). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.insurance.p': 'J’ai besoin d’une assurance maladie. Vous pouvez m’aider ?',
    'c.insurance.s': 'Tu as commencé à travailler ici il y a deux semaines et tu n’as pas encore d’assurance maladie. Que fais-tu ?',
    'c.insurance.o1': 'Prends vite une assurance maladie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Attends : l’assurance de ton pays suffit.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Utilise la carte d’assurance d’un ami.',
    'c.insurance.w': 'Sans assurance, un médecin ou un hôpital peut coûter très cher, et tu peux avoir une amende. Le faire vite te protège. Ton employeur ou ton agence peut t’aider.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'N’ignore pas les lettres',
    'c.letters.b': 'N’ignore pas les lettres de la Belastingdienst, de la gemeente ou de l’UWV. Demande à une personne de confiance de t’aider à les lire. La déclaration d’impôts (aangifte) pour l’année passée doit en général être faite avant le 1er mai. Tu peux demander plus de temps. Les allocations (toeslagen) comme la zorgtoeslag et la huurtoeslag dépendent de ton revenu. Si tu reçois trop, tu dois rembourser, alors garde tes informations de revenu à jour. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.letters.p': 'J’ai reçu une lettre. Tu peux m’aider ?',
    'c.letters.s': 'Tu reçois une lettre de la Belastingdienst. Tu ne la comprends pas. Que fais-tu ?',
    'c.letters.o1': 'Demande de l’aide à une personne de confiance.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'Mets-la dans un tiroir et attends.',
    'c.letters.o3': 'Jette-la, parce que c’est sûrement de la publicité.',
    'c.letters.w': 'Les lettres officielles ont souvent une date limite. Si tu réagis à temps, les problèmes sont en général plus faciles à régler.',
    'c.scams': 'Attention aux arnaques',
    'c.scams.b': 'Ta banque ne demande jamais tes codes ou ton code PIN par téléphone, SMS ou e-mail. Ne clique pas sur les liens dans des messages que tu n’attendais pas. Quelqu’un te pousse à payer vite ? Arrête et vérifie d’abord. Appelle ta banque au numéro officiel, par exemple le numéro sur ta carte bancaire ou sur son site.',
    'c.scams.p': 'Je rappelle moi-même la banque.',
    'c.scams.s': 'Tu reçois un SMS : “Ton compte bancaire va être bloqué. Clique sur ce lien maintenant.” Que fais-tu ?',
    'c.scams.o1': 'Ne clique pas. Appelle ta banque au numéro officiel.',
    'c.scams.o2': 'Clique vite, pour que ton compte ne soit pas bloqué.',
    'c.scams.o3': 'Réponds au SMS et demande si c’est vrai.',
    'c.scams.w': 'Les escrocs mettent la pression et utilisent de faux liens. Ta banque ne demande jamais tes codes par un lien ou un message.',
    'c.bike': 'Aller au travail à vélo',
    'c.bike.b': 'Allume tes lumières quand il fait noir. Roule sur la piste cyclable et respecte les feux et les panneaux. Attache toujours ton vélo avec un antivol. Il est interdit de tenir ton téléphone à la main quand tu roules à vélo.',
    'c.bike.p': 'Où est-ce que je peux garer mon vélo ?',
    'c.bike.s': 'Il fait noir et tu vas à vélo à ton service de nuit. Ton téléphone sonne. Que fais-tu ?',
    'c.bike.o1': 'Arrête-toi à un endroit sûr avant de répondre.',
    'c.bike.o2': 'Réponds avec le téléphone à la main en roulant.',
    'c.bike.o3': 'Continue de rouler, et regarde vite ton téléphone.',
    'c.bike.w': 'Un téléphone à la main à vélo, c’est interdit et dangereux. S’arrêter d’abord ne prend qu’un moment.',
    'c.transit': 'Bus, train et frais de trajet',
    'c.transit.b': 'Dans la plupart des bus et des trains, tu peux payer avec ta carte bancaire (OVpay). Valide au départ ET à l’arrivée avec la même carte, sinon tu paies trop. Le remboursement des frais de trajet (reiskostenvergoeding) n’est pas un droit légal : ça dépend de ton employeur ou de ta cao. Pose la question. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.transit.p': 'Est-ce que mes frais de trajet sont remboursés ?',
    'c.transit.s': 'Tu vas au travail en bus tous les jours. Un collègue reçoit de l’argent pour le trajet, toi non. Que fais-tu ?',
    'c.transit.o1': 'Demande à ton responsable les règles de l’entreprise ou de la cao.',
    'c.transit.o2': 'Ne dis rien, parce que ce n’est sûrement pas pour toi.',
    'c.transit.o3': 'Dis à ton responsable : la loi dit que tu dois l’avoir aussi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'Le remboursement des frais de trajet dépend de l’employeur ou de la cao. Poser la question est normal et t’aide à connaître tes droits.',
    'c.ww': 'L’allocation chômage (WW)',
    'c.ww.b': 'Tu as perdu ton emploi ? Demande la WW à l’UWV le plus vite possible, dans la semaine après ton premier jour sans travail. En général, tu dois avoir travaillé au moins 26 des 36 dernières semaines. Si tu démissionnes toi-même, en général tu n’as pas la WW. Inscris-toi comme demandeur d’emploi sur werk.nl. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.ww.x': 'Tu cherches du travail dans un autre pays de l’UE ? Parfois, tu peux emporter ton WW. Avant de partir, demande le formulaire U2 à l’UWV. Sans U2, ton WW s’arrête.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Je veux demander l’allocation chômage. Qu’est-ce que je dois faire ?',
    'c.ww.s': 'Ton travail t’énerve et tu veux démissionner aujourd’hui. Que vaut-il mieux faire ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.ww.o1': 'Demande d’abord conseil, avant de démissionner.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Démissionne aujourd’hui : tu auras quand même la WW.',
    'c.ww.o3': 'Ne viens plus au travail sans rien dire.',
    'c.ww.w': 'Démissionner peut te faire perdre ton allocation. Parler d’abord avec ton responsable, le syndicat ou le Juridisch Loket peut t’aider à trouver une meilleure solution.',
    'c.newjob': 'Chercher un nouveau travail',
    'c.newjob.b': 'Avant de partir, demande une référence (referentie). Garde tes fiches de paie et ton contrat. Mets ton CV à jour. Cherche du travail dans les agences d’intérim (uitzendbureaus) et sur werk.nl. Ne paie jamais pour avoir un emploi. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.newjob.p': 'Je peux donner votre nom comme référence ?',
    'c.newjob.s': 'Quelqu’un te propose un travail, mais d’abord tu dois payer 300 euros “pour le travail”. Que fais-tu ?',
    'c.newjob.o1': 'Ne paie pas. Cherche une vraie agence.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Paie, parce qu’un bon travail le vaut bien.',
    'c.newjob.o3': 'Paie la moitié maintenant et le reste plus tard.',
    'c.newjob.w': 'Demander de l’argent pour un emploi est un signal d’alerte. Une agence d’intérim n’a pas le droit de te faire payer pour te trouver du travail. Tu peux aussi chercher du travail sur werk.nl.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'La réunion toolbox',
    'c.tools.b': 'Sur beaucoup de chantiers, il y a régulièrement une courte réunion de sécurité : la réunion toolbox. On y parle des risques et des nouvelles règles. Vas-y, écoute, et pose des questions si tu ne comprends pas. Vérifie tes outils avant de les utiliser. Un outil est cassé ? Dis-le à ton responsable.',
    'c.tools.p': 'Cette perceuse est cassée. Il y en a une autre ?',
    'c.tools.s': 'Il y a une réunion toolbox, mais ton néerlandais n’est pas encore bon. Que fais-tu ?',
    'c.tools.o1': 'Vas-y, et demande ensuite à un collègue ce que tu as manqué.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'N’y va pas, parce que de toute façon tu ne vas pas comprendre.',
    'c.tools.o3': 'Signe la liste de présence sans y aller.',
    'c.tools.w': 'Les informations de sécurité sont pour tout le monde. Une appli de traduction peut t’aider à suivre la réunion, si les téléphones y sont permis. Demander ensuite à un collègue est normal et permet de vérifier que tu as bien compris.',
    'c.site': 'Arrête-toi et vérifie : la LMRA',
    'c.site.b': 'Avant de commencer un travail, arrête-toi un moment et vérifie : qu’est-ce qui peut mal tourner ici ? C’est la LMRA (analyse des risques de dernière minute). Porte toujours ton casque, et une protection antichute quand tu travailles en hauteur. Ne te mets jamais sous une charge suspendue. Le travail est vraiment dangereux ? Alors tu peux arrêter, et tu dois le dire tout de suite à ton responsable. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.site.p': 'Je ne commence pas encore. Ce n’est pas sûr.',
    'c.site.s': 'Tu dois travailler sur un échafaudage, mais il manque un garde-corps. Un collègue dit : “Fais juste attention.” Que fais-tu ?',
    'c.site.o1': 'Ne commence pas, et dis-le à ton responsable.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Commence, mais fais très attention.',
    'c.site.o3': 'Répare toi-même le garde-corps avec une corde.',
    'c.site.w': 'Une chute de hauteur peut causer des blessures très graves. Tu as le droit d’arrêter un travail dangereux, et le signaler protège toute l’équipe.',
    'c.line': 'Les mains loin des machines en marche',
    'c.line.b': 'Ne mets jamais la main dans une machine en marche, même pas une seconde. En cas de panne (storing) : appuie sur l’arrêt d’urgence (noodstop) et appelle ton responsable. L’entretien et les réparations se font seulement quand la machine est consignée (lock-out), et seulement par des personnes formées. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.line.p': 'Il y a une panne. J’ai appuyé sur l’arrêt d’urgence.',
    'c.line.s': 'Un produit est coincé dans la machine. La machine tourne encore. Que fais-tu ?',
    'c.line.o1': 'Appuie sur l’arrêt d’urgence et appelle ton responsable.',
    'c.line.o2': 'Retire-le vite avec la main, avant qu’il se casse.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Laisse-le et espère que la machine règle le problème.',
    'c.line.w': 'Les machines en marche peuvent causer des accidents graves en une seconde. Arrêter la machine est toujours permis et toujours mieux.',
    'c.quality': 'La qualité : dis ce que tu vois',
    'c.quality.b': 'Tu vois un problème sur un produit, comme un dégât ou une mauvaise étiquette ? Signale-le et mets-le de côté. Ne le laisse pas passer juste pour que la chaîne continue. Trouver un problème tôt économise beaucoup de travail et d’argent. Ton responsable sera content que tu l’aies dit.',
    'c.quality.p': 'Je pense qu’il y a un problème avec ces produits.',
    'c.quality.s': 'Tu vois que beaucoup de produits ont une mauvaise date sur l’étiquette. La chaîne est très chargée. Que fais-tu ?',
    'c.quality.o1': 'Dis-le tout de suite à ton responsable ou à la personne de la qualité.',
    'c.quality.o2': 'Laisse-les passer, parce que ce n’est pas ton travail.',
    'c.quality.o3': 'Jette-les discrètement.',
    'c.quality.w': 'Une mauvaise étiquette peut obliger à faire revenir tous les produits des magasins. Le dire tôt, c’est ce que fait un bon membre de l’équipe.',
    'c.client': 'Le respect pour le résident',
    'c.client.b': 'Frappe avant d’entrer dans la chambre d’un résident. Dis qui tu es, explique ce que tu vas faire et demande la permission. Dis “u” aux résidents, sauf s’ils te demandent de dire “je”. Laisse les résidents faire ce qu’ils peuvent faire eux-mêmes.',
    'c.client.p': 'Je peux entrer ? Je viens vous aider à vous laver.',
    'c.client.s': 'Tu dois aider une résidente à se laver. La porte de sa chambre est fermée. Que fais-tu ?',
    'c.client.o1': 'Frappe, attends, et dis qui tu es et pourquoi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': 'Entre vite, parce que tu as beaucoup de travail.',
    'c.client.o3': 'Saute la toilette, pour ne pas la déranger.',
    'c.client.w': 'La chambre, c’est la maison du résident. Frapper et expliquer montre du respect et rend les soins plus calmes.',
    'c.privacy': 'La vie privée, l’hygiène et les médicaments',
    'c.privacy.b': 'Ce que tu vois et entends sur les résidents reste au travail. Ne parle pas des résidents en dehors du travail, et ne publie jamais de photos d’eux. Lave-toi les mains avant et après les soins. Tu remarques un changement chez un résident, comme de la douleur ou une chute ? Dis-le tout de suite à l’infirmière. Ne donne jamais de médicaments, sauf si tu as la formation et l’autorisation. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.privacy.p': 'Le monsieur a plus mal qu’hier.',
    'c.privacy.s': 'Une résidente te demande ses médicaments. Tu n’as pas la formation pour donner des médicaments. Que fais-tu ?',
    'c.privacy.o1': 'Dis gentiment que tu vas chercher l’infirmière.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Donne les médicaments, parce qu’elle sait ce dont elle a besoin.',
    'c.privacy.o3': 'Dis non et pars.',
    'c.privacy.w': 'Un mauvais médicament peut être dangereux. Aller vite chercher la bonne personne aide le résident et protège tout le monde.',
    'c.kitchen': 'La sécurité alimentaire',
    'c.kitchen.b': 'Lave-toi souvent les mains, aussi après les toilettes et après avoir touché de la viande crue. Garde le froid au froid et le chaud au chaud. Mets une étiquette avec la date sur la nourriture que tu ranges. Ces règles s’appellent HACCP. Les allergies, c’est sérieux : tu ne sais pas ce qu’il y a dans un plat ? Demande toujours au chef. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.kitchen.p': 'Chef, il y a du gluten dans cette sauce ?',
    'c.kitchen.s': 'Un client demande s’il y a des noix dans un plat. Tu as un doute. Que fais-tu ?',
    'c.kitchen.o1': 'Dis que tu vas vérifier, et demande au chef.',
    'c.kitchen.o2': 'Dis “non”, pour que le client soit content.',
    'c.kitchen.o3': 'Dis au client d’enlever les noix.',
    'c.kitchen.w': 'Pour un client allergique, une petite erreur peut être très dangereuse. Vérifier avec le chef, c’est toujours la bonne chose.',
    'c.service': 'La politesse avec les clients',
    'c.service.b': 'Dis “u” aux clients, sauf s’ils te demandent de dire “je”. Sois aimable et calme, même quand il y a beaucoup de monde. Tu ne connais pas la réponse à une question ? Dis que tu vas vérifier. Les pourboires (fooi) : les règles changent selon l’endroit. Demande comment les pourboires sont partagés là où tu travailles.',
    'c.service.p': 'Un moment, j’arrive tout de suite.',
    'c.service.s': 'Il y a beaucoup de monde. Un client t’appelle, mais tu portes des assiettes à une autre table. Que fais-tu ?',
    'c.service.o1': 'Regarde le client et dis : “Een moment, ik kom zo bij u.”',
    'c.service.o2': 'Ignore le client jusqu’à ce que tu aies le temps.',
    'c.service.o3': 'Pose les assiettes sur une table libre et va d’abord voir le client.',
    'c.service.w': 'Un petit signe montre au client que tu l’as vu. Ensuite, tu peux finir ta tâche calmement.',
    'c.cleaning': 'Lis l’étiquette',
    'c.cleaning.b': 'Chaque produit de nettoyage a une étiquette. Les pictogrammes (petits dessins dans un losange rouge) montrent le danger, par exemple pour ta peau, tes yeux ou tes poumons. Lis l’étiquette, ou demande à quoi sert le produit et comment l’utiliser. Porte les gants que ton employeur te donne. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.cleaning.p': 'Ce produit sert à quoi ?',
    'c.cleaning.s': 'Tu reçois un nouveau produit de nettoyage. Tu n’arrives pas bien à lire l’étiquette. Que fais-tu ?',
    'c.cleaning.o1': 'Demande comment l’utiliser sans danger.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Mets-en beaucoup, ça marche mieux.',
    'c.cleaning.o3': 'Essaie-le sans gants.',
    'c.cleaning.w': 'Le mauvais produit, ou trop de produit, peut abîmer ta peau, tes yeux ou tes poumons. Demander prend une minute.',
    'c.cleansafe': 'Ne mélange jamais les produits',
    'c.cleansafe.b': 'Ne mélange jamais les produits de nettoyage, par exemple de l’eau de Javel et un nettoyant pour toilettes. Ça peut faire des gaz dangereux. Aère. Tu laves un sol ? Pose le panneau “sol mouillé” (Pas op, glad!), pour que personne ne glisse. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.cleansafe.p': 'Je pose le panneau. Le sol est mouillé.',
    'c.cleansafe.s': 'Les toilettes sont très sales. Un collègue dit : “Mélange deux produits, ça marche mieux.” Que fais-tu ?',
    'c.cleansafe.o1': 'Ne les mélange pas. Utilise un seul produit.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Mélange-les, mais ouvre une fenêtre.',
    'c.cleansafe.o3': 'Mélange-les vite et sors de la pièce.',
    'c.cleansafe.w': 'Mélanger des produits peut faire un gaz toxique, même avec une fenêtre ouverte. Un seul produit, bien utilisé, suffit.',
    'u.tools': 'Des outils malins',
    'l.translate': 'Traduire avec ton téléphone',
    'w.vertaalapp': 'l’appli de traduction',
    'w.vertalen': 'traduire',
    'w.camera': 'l’appareil photo',
    'w.briefje': 'le petit mot (un petit papier)',
    'w.spreken': 'parler',
    'w.vertaling': 'la traduction',
    's.translate.1': 'Je le traduis avec mon téléphone.',
    's.translate.2': 'Je peux traduire ça rapidement ?',
    's.translate.3': 'Vous pouvez parler un moment dans mon téléphone ?',
    'c.translate.q': 'Qu’est-ce qui est écrit sur ce petit mot ?',
    'c.translate.a': 'Attends un moment, je le traduis.',
    'l.understood': 'Comprendre et se faire comprendre',
    'w.herhalen': 'répéter',
    'w.opschrijven': 'écrire, noter',
    'w.latenzien': 'montrer',
    'w.ondertiteling': 'les sous-titres (la parole en texte)',
    'w.instructie': 'la consigne',
    'w.plaatje': 'l’image',
    's.understood.1': 'Vous pouvez l’écrire ?',
    's.understood.2': 'Vous pouvez le montrer ?',
    's.understood.3': 'Il y a une consigne avec des images ?',
    'c.understood.q': 'D’abord ranger, ensuite emballer.',
    'c.understood.a': 'Donc je dois d’abord ranger ?',
    'l.keeplearning': 'Continuer à apprendre',
    'w.bibliotheek': 'la bibliothèque (publique)',
    'w.taalhuis': 'le Taalhuis (aide gratuite pour le néerlandais)',
    'w.oefenen': 'pratiquer, s’entraîner',
    'w.luisteren': 'écouter',
    'w.elkedag': 'chaque jour',
    'w.woord': 'le mot',
    's.keeplearning.1': 'Je pratique dix minutes chaque jour.',
    's.keeplearning.2': 'Qu’est-ce que ce mot veut dire ?',
    's.keeplearning.3': 'Tu veux bien parler néerlandais avec moi ?',
    'c.keeplearning.q': 'Tu veux que je parle anglais ?',
    'c.keeplearning.a': 'Non, plutôt néerlandais. Je veux pratiquer.',
    'c.translate': 'Les applis de traduction : malines, mais vérifie',
    'c.translate.b': 'Une appli de traduction, comme Google Traduction, aide beaucoup. Tu peux écrire, parler, ou utiliser le mode conversation pour parler avec un collègue. Avec l’appareil photo, tu peux traduire des panneaux, des petits mots et des consignes. Sur beaucoup de téléphones, WhatsApp peut aussi traduire les messages. Utilise ton téléphone seulement là où c’est sûr et permis. Jamais près des machines ou des chariots élévateurs. Demande toujours d’abord. Les applis font des erreurs. Pour les choses importantes, comme ton contrat, une lettre ou une consigne de sécurité, demande aussi à une personne de te l’expliquer. Ne prends pas en photo des papiers de travail confidentiels sans autorisation.',
    'c.translate.p': 'Je peux utiliser mon téléphone pour traduire ?',
    'c.translate.s': 'Ton responsable te donne des consignes de sécurité en néerlandais. Tu comprends seulement quelques mots. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Demande une explication, et si tu peux utiliser une appli.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Dis “ja, ja” et commence à travailler.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Prends une photo et envoie-la à tes amis, pour qu’ils la traduisent.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'Une appli de traduction t’aide à comprendre vite, mais elle peut faire des erreurs. Pour la sécurité, l’explication d’une personne est la meilleure vérification. Les papiers de travail peuvent être confidentiels, alors ne les partage pas sans autorisation.',
    'c.understood': 'Vérifie que tu as compris',
    'c.understood.b': 'Ton téléphone peut transformer la parole en texte (sous-titres en direct) : Transcription instantanée sur Android, Sous-titres en direct sur iPhone. Vérifie quelles langues ton téléphone connaît. Tu peux aussi demander à quelqu’un de l’écrire, de le montrer ou de parler lentement. Demande s’il y a une consigne avec des images, ou dans ta langue. Puis redis ce que tu as compris : “Dus ik moet eerst …?” C’est normal ici, et ça évite les erreurs.',
    'c.understood.p': 'Donc je dois d’abord compter les cartons ?',
    'c.understood.s': 'Une collègue explique comment marche une nouvelle machine. Elle parle vite et tu rates des mots. Que fais-tu ?',
    'c.understood.o1': 'Demande-lui de te montrer ou de l’écrire, puis répète.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Fais oui de la tête et dis “ja, ja”, pour qu’elle ne perde pas de temps.',
    'c.understood.o3': 'Essaie la machine plus tard sans aide et vois ce qui se passe.',
    'c.understood.w': 'Montrer, écrire et redire, ce sont des vérifications rapides. Ta collègue peut te corriger avant qu’il y ait un problème. Ici, on voit ça comme du sérieux, pas comme de la lenteur.',
    'c.keeplearning': 'Continue à apprendre, un peu chaque jour',
    'c.keeplearning.b': 'Quelques minutes chaque jour aident plus qu’une longue heure par semaine. Note les nouveaux mots du travail dans une appli de notes sur ton téléphone. Écoute du néerlandais facile, par exemple le NOS Jeugdjournaal (les infos pour enfants) ou un podcast en néerlandais lent. Beaucoup de bibliothèques ont un Taalhuis : une aide gratuite pour le néerlandais, souvent avec un taalcafé (un lieu pour pratiquer l’oral) ou un partenaire de langue (taalmaatje). Les collègues passent souvent à l’anglais pour t’aider. Demande-leur gentiment de parler néerlandais avec toi : la plupart des gens aiment aider.',
    'c.keeplearning.p': 'Parle-moi en néerlandais, comme ça j’apprends plus vite.',
    'c.keeplearning.s': 'Tes collègues passent toujours à l’anglais quand ils te parlent. Tu veux apprendre le néerlandais. Que fais-tu ?',
    'c.keeplearning.o1': 'Remercie-les, et demande-leur de parler néerlandais avec toi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Ne dis rien. Le néerlandais viendra tout seul.',
    'c.keeplearning.o3': 'Réponds aussi en anglais, parce que c’est plus poli.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Les collègues passent souvent à l’anglais pour être gentils. Quand tu demandes du néerlandais, la plupart sont contents d’aider. Parler un peu chaque jour au travail est une des façons les plus rapides d’apprendre.',
    'l.gossip': 'Les ragots et les réseaux sociaux',
    'w.roddelen': 'faire des ragots',
    'w.posten': 'publier (en ligne)',
    'w.groepsapp': 'le groupe de discussion (dans une appli)',
    'w.socialemedia': 'les réseaux sociaux',
    'w.delen': 'partager',
    'w.screenshot': 'la capture d’écran',
    's.gossip.1': 'Je ne fais pas de ragots sur les collègues.',
    's.gossip.2': 'Je ne mets pas de photos du travail en ligne.',
    's.gossip.3': 'Je préfère que tu me le dises directement.',
    'c.gossip.q': 'Tu as entendu ce que Mark a fait ?',
    'c.gossip.a': 'Non, et je préfère ne pas parler de lui.',
    'l.boundaries': 'Dépasser les limites',
    'w.aanraken': 'toucher',
    'w.ongewenst': 'non voulu, non désiré',
    'w.opmerking': 'la remarque',
    'w.intimidatie': 'le harcèlement, l’intimidation',
    'w.getuige': 'le témoin',
    'w.grapje': 'la blague',
    's.boundaries.1': 'Ne me touche pas.', // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
    's.boundaries.2': 'Je ne trouve pas cette remarque drôle.',
    's.boundaries.3': 'Je veux signaler quelque chose à la personne de confiance.',
    'c.boundaries.q': 'Ne fais pas tant d’histoires, c’était juste une blague.',
    'c.boundaries.a': 'Pas pour moi. Je veux que tu arrêtes.',
    'c.gossip': 'Les ragots et les réseaux sociaux',
    'c.gossip.b': 'Parler d’un collègue dans son dos (roddelen) abîme la confiance dans une équipe. Tu as un problème avec quelqu’un ? Parle à cette personne, ou à ton responsable. En ligne, ce sont les mêmes règles qu’au travail. Ne publie rien sur des collègues, des clients ou l’entreprise sans autorisation. Ça inclut les photos, les vidéos et les messages. Ton patron peut voir ce que tu publies, et ça peut rester en ligne pendant des années. Beaucoup d’équipes ont un groupe de discussion (groepsapp) pour le travail : parles-y seulement du travail, et ne partage pas de captures d’écran avec d’autres. Partager des choses privées d’un collègue ou se moquer de quelqu’un en ligne, c’est aussi du harcèlement.',
    'c.gossip.p': 'Je ne veux pas ça en ligne.',
    'c.gossip.s': 'Un collègue te filme quand tu glisses sur le sol mouillé. Il veut mettre la vidéo sur TikTok. Que fais-tu ?',
    'c.gossip.o1': 'Dis “Nee, dat wil ik niet” et demande-lui de l’effacer.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': 'Ris et laisse-le la publier, pour ne pas faire d’histoires.',
    'c.gossip.o3': 'Demande-lui de la publier sans ton nom.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'En général, personne n’a le droit de mettre une vidéo de toi en ligne sans ton autorisation. Dire non est normal, et ton employeur doit agir quand des collègues se moquent les uns des autres en ligne. S’il la publie quand même, dis-le à ton responsable.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': 'Dépasser les limites',
    'c.boundaries.b': 'Le grensoverschrijdend gedrag, c’est un comportement qui dépasse les limites de quelqu’un. Par exemple : toucher sans accord, remarques ou blagues sexuelles, regards insistants, images non voulues, menaces ou cris. Peu importe si l’autre personne “voulait juste plaisanter” : ce qui compte, c’est ce que toi, tu ressens. Si tu peux, dis clairement que tu veux que ça s’arrête. Note ce qui s’est passé, quand, et qui l’a vu. Parle à ton responsable, à la personne de confiance (vertrouwenspersoon, s’il y en a une) ou aux RH. Ton employeur doit te protéger, et on n’a pas le droit de te punir parce que tu l’as signalé. Tu as vu ça arriver à un collègue ? Demande-lui si ça va, et propose d’être témoin.',
    'c.boundaries.p': 'Je veux que tu arrêtes.',
    'c.boundaries.s': { m: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “beau”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?', f: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “jolie”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?', x: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “joli(e)”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?' },
    'c.boundaries.o1': 'Note ce qui se passe et parles-en au vertrouwenspersoon.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': 'Ne dis rien, parce que c’est lui qui décide de tes horaires.',
    'c.boundaries.o3': 'Démissionne sans dire pourquoi à personne.',
    'c.boundaries.w': 'C’est un comportement non voulu, et ce n’est pas ta faute. Une personne de confiance t’écoute en toute discrétion et t’aide à choisir la suite. La loi te protège quand tu le signales. Tu peux aussi parler aux RH.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'Au magasin',
    'l.shelves': 'Les rayons et le stock',
    'w.schap': 'l’étagère (dans un magasin)',
    'w.vakkenvullen': 'remplir les rayons',
    'w.voorraad': 'le stock',
    'w.houdbaarheidsdatum': 'la date de péremption',
    'w.prijskaartje': 'l’étiquette de prix',
    'w.achteraan': 'à l’arrière, au fond',
    's.shelves.1': 'Mets les nouveaux produits derrière.',
    's.shelves.2': 'Ce produit a dépassé sa date.',
    's.shelves.3': 'Il reste du stock ?',
    'c.shelves.q': 'Où est-ce que je trouve le riz ?',
    'c.shelves.a': 'Dans l’allée quatre. Je vous accompagne.',
    'l.checkout': 'À la caisse',
    'w.klant': 'le client',
    'w.kassa': 'la caisse',
    'w.wisselgeld': 'la monnaie (l’argent que tu rends)',
    'w.bonnetje': 'le ticket de caisse',
    'w.pinnen': 'payer par carte',
    'w.contant': 'en liquide',
    's.checkout.1': 'Vous voulez payer par carte ou en liquide ?',
    's.checkout.2': 'Voici votre monnaie.',
    's.checkout.3': 'Je peux voir votre pièce d’identité, s’il vous plaît ?',
    'c.checkout.q': 'Je peux payer par carte ici ?',
    'c.checkout.a': 'Oui, bien sûr, c’est possible.',
    'u.numbers': 'L’heure, l’argent et les mesures',
    'l.counting': 'Les nombres', // nieuw, nalezen
    'w.dertien': 'treize (13)', // nieuw, nalezen
    'w.dertig': 'trente (30)', // nieuw, nalezen
    'w.zeventien': 'dix-sept (17)', // nieuw, nalezen
    'w.zeventig': 'soixante-dix (70)', // nieuw, nalezen
    'w.zevenenveertig': 'quarante-sept (47)', // nieuw, nalezen
    'w.vierenzeventig': 'soixante-quatorze (74)', // nieuw, nalezen
    's.counting.1': 'J’ai treize cartons, pas trente.', // nieuw, nalezen
    's.counting.2': 'L’emplacement soixante-quatorze est vide.', // nieuw, nalezen
    's.counting.3': 'Vous pouvez le dire chiffre par chiffre ?', // nieuw, nalezen
    'c.counting.q': 'Combien de cartons reste-t-il ?', // nieuw, nalezen
    'c.counting.a': 'Soixante-dix. Sept, zéro.', // nieuw, nalezen
    'l.hours': 'Les heures et l’heure',
    'w.uur': 'l’heure',
    'w.minuut': 'la minute',
    'w.kwartier': 'un quart d’heure (15 minutes)',
    'w.halfuur': 'une demi-heure (30 minutes)',
    'w.duren': 'durer',
    'w.optellen': 'additionner',
    's.hours.1': 'Je commence à sept heures et demie (7 h 30).',
    's.hours.2': 'Je travaille huit heures aujourd’hui.',
    's.hours.3': 'La pause dure une demi-heure.',
    'c.hours.q': 'Tu finis à quelle heure ?',
    'c.hours.a': 'À quatre heures et quart.',
    'l.measures': 'L’argent et les mesures',
    'w.euro': 'l’euro',
    'w.cent': 'le centime',
    'w.kilo': 'le kilo',
    'w.liter': 'le litre',
    'w.meter': 'le mètre',
    'w.tellen': 'compter',
    's.measures.1': 'Ça coûte six euros cinquante.',
    's.measures.2': 'Ce carton pèse dix kilos.',
    's.measures.3': 'J’ai compté quarante cartons.',
    'c.measures.q': 'Cette planche fait combien de long ?',
    'c.measures.a': 'Exactement deux mètres.',
    'c.shelves': 'L’ancien devant',
    'c.shelves.b': 'Quand tu remplis les rayons, regarde la date sur les produits. Mets devant les produits avec la date la plus proche, et les nouveaux derrière. Les clients prennent devant, alors les anciens produits partent en premier. Un produit a dépassé sa date, ou il est abîmé ? Enlève-le du rayon et demande ce qu’il faut en faire. Garde les allées libres de cartons et de chariots. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.shelves.p': 'Qu’est-ce que je fais avec les produits qui ont dépassé leur date ?',
    'c.shelves.s': 'Tu mets du lait neuf dans le rayon. Devant, il y a du lait avec une date plus proche. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'Le lait neuf derrière, l’ancien lait devant.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'Le lait neuf devant, parce qu’il est plus frais.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Jette l’ancien lait.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Les clients prennent devant. Quand les anciens produits partent en premier, on jette moins de nourriture.',
    'c.checkout': 'Pièce d’identité pour l’alcool et le tabac',
    'c.checkout.b': 'Tu n’as pas le droit de vendre de l’alcool ou du tabac à une personne de moins de 18 ans : c’est la loi. Tu as un doute sur l’âge d’un client ? Demande sa pièce d’identité. Beaucoup de magasins demandent une pièce d’identité à toute personne qui a l’air d’avoir moins de 25 ans. Pas de pièce d’identité, ou moins de 18 ans ? Alors tu ne vends pas, et tu restes aimable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.checkout.p': 'Sans pièce d’identité, je n’ai pas le droit de vendre ça.',
    'c.checkout.s': 'Un jeune homme veut acheter de la bière. Il a l’air d’avoir environ 17 ans. Il dit qu’il a 19 ans, mais il n’a pas de pièce d’identité sur lui. Que fais-tu ?',
    'c.checkout.o1': 'Dis que tu ne peux pas vendre sans pièce d’identité.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Vends-la, parce qu’il dit qu’il a 19 ans.',
    'c.checkout.o3': 'Vends, mais seulement une canette.',
    'c.checkout.w': 'Sans pièce d’identité, tu ne peux pas connaître son âge. Vendre de l’alcool à une personne de moins de 18 ans est contre la loi, et le magasin peut avoir une amende.',
    'c.counting': 'Vijfentwintig : d’abord le 5, puis le 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'En néerlandais, de 0 à 12, chaque nombre a son propre mot : nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. De 13 à 19, ils finissent en -tien : dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Les dizaines finissent en -tig : twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. De 21 à 99, on dit d’abord le dernier chiffre : 25 se dit vijfentwintig, “cinq et vingt”. Donc 47 se dit zevenenveertig, et 74 vierenzeventig. Dertien et dertig se ressemblent beaucoup : écoute la fin. Un doute ? Répète les chiffres un par un.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Quatre, sept ? Donc quarante-sept ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Ton responsable dit : “Ga naar gang zevenenveertig.” C’est quelle allée ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'L’allée 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'L’allée 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'L’allée 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '“Zevenenveertig”, c’est “sept et quarante” : d’abord le 7, puis le 40. Donc c’est l’allée 47. Beaucoup de nouveaux venus entendent 74 et vont dans la mauvaise allée.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': 'Half acht, c’est 7 h 30',
    'c.hours.b': 'En néerlandais, “half” compte vers l’heure suivante : half acht, c’est 7 h 30, pas 8 h 30. Kwart over acht, c’est 8 h 15, et kwart voor acht, c’est 7 h 45. Vérifie tes heures toi-même : l’heure de fin moins l’heure de début, moins la pause. La pause n’est souvent pas payée. Note tes heures chaque jour.',
    'c.hours.p': 'Half acht ? Donc une demi-heure avant huit heures ?',
    'c.hours.s': 'Ton responsable dit : “Morgen begin je om half negen.” Tu commences à quelle heure demain ?',
    'c.hours.o1': 'À 8 h 30.',
    'c.hours.o2': 'À 9 h 30.',
    'c.hours.o3': 'À 8 h 00.',
    'c.hours.w': '“Half negen” veut dire une demi-heure avant neuf heures : 8 h 30. Beaucoup de nouveaux arrivants pensent que c’est 9 h 30, et arrivent une heure en retard.',
    'c.measures': 'Compter malin, mesurer, ne pas deviner',
    'c.measures.b': 'Beaucoup de cartons à compter ? Compte les cartons d’une couche, et le nombre de couches. Puis multiplie : 8 cartons par couche et 5 couches, ça fait 40 cartons. Pour les produits de nettoyage, mesure la quantité que dit l’étiquette. Plus, ce n’est pas mieux : ça peut abîmer ta peau et ça coûte de l’argent. Tu as un doute sur un nombre ? Recompte, ou demande. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.measures.p': 'Je l’ai compté deux fois.',
    'c.measures.s': 'Une palette a 6 couches. Chaque couche a 8 cartons. Ton responsable demande combien il y a de cartons. Que dis-tu ?',
    'c.measures.o1': '48 cartons.',
    'c.measures.o2': '14 cartons.',
    'c.measures.o3': 'Environ 50, je pense.',
    'c.measures.w': '6 couches de 8 cartons, c’est 6 fois 8 : 48. Compter une couche et multiplier, c’est rapide, et un vrai nombre vaut mieux qu’une supposition.',
    'u.ai': 'L’IA et les applis intelligentes',
    'l.aihelp': 'L’IA comme aide',
    'w.ai': 'l’IA (intelligence artificielle)',
    'w.chatbot': 'le chatbot (une appli avec laquelle tu peux discuter)',
    'w.antwoord': 'la réponse',
    'w.meekijken': 'regarder avec quelqu’un',
    'w.kloppen': 'être juste, être correct',
    'w.zeker': 'sûr, certain',
    's.aihelp.1': 'Tu peux expliquer cette lettre ?',
    's.aihelp.2': 'Cette réponse est juste ?',
    's.aihelp.3': 'Vous pouvez regarder avec moi ?',
    'c.aihelp.q': 'Tu as écrit ça toi-même ?',
    'c.aihelp.a': 'Oui, avec l’aide de l’IA.',
    'l.aiprivate': 'Ce que tu ne partages pas',
    'w.persoonlijk': 'personnel',
    'w.gegevens': 'les données (nom, adresse, numéro)',
    'w.wachtwoord': 'le mot de passe',
    'w.typen': 'taper (au clavier)',
    'w.opslaan': 'enregistrer, sauvegarder',
    'w.inloggen': 'se connecter',
    's.aiprivate.1': 'Je ne partage pas les noms des clients.',
    's.aiprivate.2': 'Je peux utiliser l’IA pour mon travail ?',
    's.aiprivate.3': 'Mon mot de passe est secret.',
    'c.aiprivate.q': 'Mets ça dans le chatbot.',
    'c.aiprivate.a': 'Je préfère ne pas le faire, il y a des noms de clients dedans.',
    'l.aifake': 'Faux ou vrai ?',
    'w.echt': 'vrai',
    'w.stem': 'la voix',
    'w.filmpje': 'la (petite) vidéo',
    'w.ophangen': 'raccrocher',
    'w.nummer': 'le numéro (de téléphone)',
    'w.haast': 'la hâte, l’urgence',
    's.aifake.1': 'C’est vrai ou faux ?',
    's.aifake.2': 'Je raccroche et je rappelle moi-même.',
    's.aifake.3': 'Je n’envoie pas d’argent.',
    'c.aifake.q': 'Salut, c’est mon nouveau numéro. Tu peux vite m’envoyer de l’argent ?',
    'c.aifake.a': 'D’abord, je t’appelle sur ton ancien numéro.',
    'l.aiplan': 'Quand une appli décide',
    'w.planning': 'le planning',
    'w.mens': 'l’humain, la personne',
    'w.computer': 'l’ordinateur',
    'w.tempo': 'le rythme (de travail)',
    'w.automatisch': 'automatique, tout seul',
    'w.besluit': 'la décision',
    's.aiplan.1': 'Qui a pris cette décision ?',
    's.aiplan.2': 'Je veux parler à une personne.',
    's.aiplan.3': 'Pourquoi j’ai moins d’heures dans mon planning ?',
    'c.aiplan.q': 'C’est l’appli qui a fait ton planning.',
    'c.aiplan.a': 'Je peux en parler avec une personne ?',
    'c.aihelp': 'L’IA aide, une personne vérifie',
    'c.aihelp.b': 'Les applis d’IA et les chatbots, comme ChatGPT, peuvent traduire, expliquer une lettre ou t’aider à écrire un message. C’est utile. Mais l’IA fait parfois des erreurs, tout en ayant l’air très sûre d’elle. Il s’agit de ton contrat, de ton salaire, de médicaments ou de sécurité ? Alors vérifie toujours la réponse avec une personne. Par exemple ton responsable, les RH ou le Juridisch Loket.',
    'c.aihelp.p': 'C’est juste ? Vous pouvez regarder avec moi ?',
    'c.aihelp.s': 'Tu poses une question à un chatbot sur ton contrat. Il dit que tu n’as pas de prime de vacances. Que fais-tu ?',
    'c.aihelp.o1': 'Demande aux RH ou au Juridisch Loket de vérifier.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': 'Crois-le : le chatbot a l’air très sûr de lui.',
    'c.aihelp.o3': 'Ne dis rien et oublie ça.',
    'c.aihelp.w': 'Un chatbot peut se tromper sur les règles et les contrats. Aux Pays-Bas, presque tous les travailleurs reçoivent une prime de vacances. Une personne qui connaît les règles peut vérifier.',
    'c.aiprivate': 'Réfléchis avant de taper',
    'c.aiprivate.b': 'Ce que tu tapes dans un chatbot peut être enregistré et utilisé par l’entreprise qui le fabrique. Alors ne tape jamais ton BSN, un mot de passe ou tes coordonnées bancaires. Ne mets pas de noms ou de photos de clients, de patients ou de collègues, ni de papiers du travail. Beaucoup d’employeurs ont des règles sur l’IA. Demande d’abord si tu peux l’utiliser pour ton travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.aiprivate.p': 'Je peux utiliser l’IA pour ça ?',
    'c.aiprivate.s': 'Tu veux qu’un chatbot écrive un rapport sur un client. Le rapport contient le nom et l’adresse du client. Que fais-tu ?',
    'c.aiprivate.o1': 'Demande d’abord, et enlève le nom et l’adresse.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Mets tout dans le chatbot : c’est plus rapide.',
    'c.aiprivate.o3': 'Envoie le rapport à un ami pour qu’il le vérifie.',
    'c.aiprivate.w': 'Les noms et les adresses sont des données personnelles. Ils ne peuvent pas simplement aller à une autre entreprise. Ton employeur sait quelles applis sont permises.',
    'c.aifake': 'Fausses voix et fausses vidéos',
    'c.aifake.b': 'Avec l’IA, des criminels peuvent copier une voix et faire de fausses photos et vidéos. Un appel ou un message qui ressemble à ton patron, ta banque ou quelqu’un de ta famille peut être faux. Fais attention quand il y a de l’urgence, de l’argent et un nouveau numéro. Raccroche, et rappelle toi-même au numéro que tu connais. Une vraie banque, un vrai employeur ou la police ne demande jamais tes codes.',
    'c.aifake.p': 'Je raccroche et je rappelle moi-même.',
    'c.aifake.s': 'Ton téléphone sonne. Une voix qui ressemble tout à fait à ton patron dit : “Paie cette facture maintenant, c’est urgent.” Que fais-tu ?',
    'c.aifake.o1': 'Raccroche et rappelle toi-même ton patron.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Paie vite : c’est ton patron.',
    'c.aifake.o3': 'Donne ton code bancaire, pour que ton patron puisse payer.',
    'c.aifake.w': 'Une voix peut être copiée avec l’IA. L’urgence et l’argent ensemble, c’est un signal d’alerte. Rappeler à un numéro que tu connais est une vérification rapide et sûre.',
    'c.aiplan': 'Qui a décidé ça ?',
    'c.aiplan.b': 'De plus en plus d’entreprises laissent une appli ou un ordinateur décider des choses. Par exemple, il fait le planning ou mesure ta vitesse avec le scanner. Tu peux demander quelles informations sur toi sont collectées. Il y a une grosse décision sur toi, comme moins d’heures, un avertissement ou un licenciement ? Demande qui l’a prise. Un ordinateur a pris seul cette décision ? Alors tu peux demander qu’une personne la vérifie de nouveau et te l’explique. Note toi-même tes heures. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.aiplan.p': 'Une personne peut regarder ça ?',
    'c.aiplan.s': 'L’appli de planning te donne beaucoup moins d’heures le mois prochain. Personne ne te dit pourquoi. Que fais-tu ?',
    'c.aiplan.o1': 'Demande qu’une personne te l’explique.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Accepte : l’appli a toujours raison.',
    'c.aiplan.o3': 'Demande au chatbot de l’appli pourquoi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Les applis font des erreurs, et elles ne savent pas tout sur toi. Tu peux demander une explication, et une personne peut regarder de nouveau.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "Dans la serre", // nagelezen (2e lezing)
    'l.harvest': "Récolter et trier", // nagelezen (2e lezing)
    'w.kas': "la serre", // nagelezen (2e lezing)
    'w.gewas': "la culture (les plantes qui poussent)", // nagelezen (2e lezing)
    'w.rij': "la rangée (de plantes)", // nagelezen (2e lezing)
    'w.oogsten': "récolter", // nagelezen (2e lezing)
    'w.sorteren': "trier", // nagelezen (2e lezing)
    'w.krat': "la caisse", // nagelezen (2e lezing)
    's.harvest.1': "Je travaille dans la serre.", // nagelezen (2e lezing)
    's.harvest.2': "Je commence dans quelle rangée ?", // nagelezen (2e lezing)
    's.harvest.3': "La caisse est pleine.", // nagelezen (2e lezing)
    'c.harvest.q': "Tu as fait combien de rangées ?", // nagelezen (2e lezing)
    'c.harvest.a': "Quatre. Encore deux.", // nagelezen (2e lezing)
    'l.greensafe': "En sécurité dans la serre", // nagelezen (2e lezing)
    'w.spuitmiddelen': "les produits de traitement (des produits chimiques pour les plantes)", // nagelezen (2e lezing)
    'w.bespoten': "traité (avec des produits pour les plantes)", // nagelezen (2e lezing)
    'w.plukkar': "le chariot de cueillette", // nagelezen (2e lezing)
    'w.bukken': "se pencher", // nagelezen (2e lezing)
    'w.drinken': "boire", // nagelezen (2e lezing)
    'w.hitte': "la chaleur (quand il fait très chaud)", // nagelezen (2e lezing)
    's.greensafe.1': "Cette serre a été traitée ?", // nagelezen (2e lezing)
    's.greensafe.2': "Je vais boire un peu d’eau.", // nagelezen (2e lezing)
    's.greensafe.3': "Où est le chariot de cueillette ?", // nagelezen (2e lezing)
    'c.greensafe.q': "Je peux travailler dans la serre trois ?", // nagelezen (2e lezing)
    'c.greensafe.a': "Non, pas encore. Elle vient d’être traitée.", // nagelezen (2e lezing)
    'c.harvest': "Le rythme et le salaire à la pièce", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "Dans une serre, tu travailles souvent à un rythme fixe (tempo). Certains employeurs paient par caisse, par rangée ou par kilo : c’est le salaire à la pièce (stukloon). Même avec un salaire à la pièce, tu dois gagner au moins le salaire minimum pour chaque heure de travail. Vérifie le montant sur rijksoverheid.nl. Note chaque jour tes heures et tes caisses, et compare-les avec ta fiche de paie. Travailler vite, c’est bien, mais travailler en sécurité passe avant. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "J’ai fait combien de caisses aujourd’hui ?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "On te paie par caisse. Cette semaine, tu gagnes moins que le salaire minimum par heure. Que fais-tu ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Montre ta propre liste d’heures et de caisses.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Ne dis rien et travaille plus vite.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Accepte : avec un salaire à la pièce, c’est normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Avec un salaire à la pièce, tu dois quand même recevoir au moins le salaire minimum pour chaque heure de travail. Ta propre liste d’heures et de caisses t’aide à montrer ce que tu as fait. Si ce n’est pas corrigé, demande de l’aide.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "La chaleur et les produits de traitement", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "Dans une serre, il peut faire très chaud, même au printemps. Bois souvent de l’eau, même avant d’avoir soif, et prends tes pauses dans un endroit frais. Tu as la tête qui tourne, tu te sens mal ou tu as mal à la tête ? Arrête-toi et dis-le à quelqu’un. Les plantes sont parfois traitées avec des produits chimiques (spuitmiddelen). Une serre qui vient d’être traitée a souvent un panneau sur la porte. N’entre pas avant que ton responsable dise que c’est de nouveau sans danger. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Je peux déjà travailler dans cette serre ?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "Une serre a été traitée ce matin. Il y a un panneau sur la porte. Un collègue dit : “Allez, c’est juste un moment.” Que fais-tu ?", // nagelezen (2e lezing) // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.greensafe.o1': "Reste dehors et demande quand c’est sans danger.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Entre vite et retiens ta respiration.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Entre, et lave-toi bien les mains après.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Les produits de traitement peuvent abîmer ta peau, tes yeux et tes poumons, même quand tu ne sens rien. Après le traitement, il y a un temps d’attente avant de pouvoir entrer de nouveau. Ton responsable sait quand il est fini.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Les chiffres et tes informations",
    'l.details': "Tes informations",
    'w.voornaam': "le prénom",
    'w.achternaam': "le nom de famille",
    'w.spellen': "épeler (dire les lettres une par une)",
    'w.telefoonnummer': "le numéro de téléphone",
    'w.geboortedatum': "la date de naissance",
    'w.formulier': "le formulaire (un papier ou une page à remplir)",
    's.details.1': "Vous pouvez épeler ça ?",
    's.details.2': "Je donne mon nouveau numéro de téléphone.",
    's.details.3': "Ce formulaire est pour l’administration fiscale (Belastingdienst).",
    'c.details.q': "Quel est ton nom de famille ?",
    'c.details.a': "Haddad. Je l’épelle ?",
    'l.dates': "Les jours et les dates",
    'w.maandag': "lundi",
    'w.week': "la semaine",
    'w.maand': "le mois",
    'w.volgendeweek': "la semaine prochaine",
    'w.vorigeweek': "la semaine dernière",
    'w.totenmet': "jusqu’à … inclus (le dernier jour compte aussi)",
    's.dates.1': "Je peux travailler du lundi au jeudi (jeudi compris).",
    's.dates.2': "La semaine prochaine, je travaille quatre jours.",
    's.dates.3': "La semaine dernière, j’ai travaillé quarante heures.",
    'c.dates.q': "On est quel jour aujourd’hui ?",
    'c.dates.a': "On est lundi 3 juin.",
    'l.permit': "Les papiers, l’intégration et ton travail", // nagelezen AI 22 nov
    'w.papieren': "les papiers (les documents)", // nagelezen AI 22 nov
    'w.werkvergunning': "le permis de travail", // nagelezen AI 22 nov
    'w.werknemer': "le salarié (tu travailles pour un employeur)", // nagelezen AI 22 nov
    'w.zzper': "le travailleur indépendant (tu travailles pour toi-même)", // nagelezen AI 22 nov
    'w.inburgering': "l’intégration civique (les cours et les examens pour les nouveaux arrivants)", // nagelezen AI 22 nov
    'w.taalles': "le cours de langue", // nagelezen AI 22 nov
    's.permit.1': "Je peux travailler ici avec mes papiers ?", // nagelezen AI 22 nov
    's.permit.2': { m: "Je suis salarié ou indépendant ?", f: "Je suis salariée ou indépendante ?", x: 'Je travaille avec un contrat de travail ou à mon compte ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.permit.3': "Je travaille sur appel.", // nagelezen AI 22 nov
    'c.permit.q': "Tu peux travailler mardi ?", // nagelezen AI 22 nov
    'c.permit.a': "Non, j’ai un cours de langue ce jour-là. Mercredi, je peux.", // nagelezen AI 22 nov
    'l.kids': "Les enfants et le travail", // nagelezen AI 22 nov
    'w.zwanger': "enceinte", // nagelezen AI 22 nov
    'w.kinderopvang': "la garde d’enfants, la crèche", // nagelezen AI 22 nov
    'w.ophalen': "aller chercher (quelqu’un)", // nagelezen AI 22 nov
    'w.ziekkind': "un enfant malade", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "le congé parental", // nagelezen AI 22 nov
    'w.zorgverlof': "le congé pour soins (du temps libre pour s’occuper d’un proche malade)", // nagelezen AI 22 nov
    's.kids.1': "Mon enfant est malade. Je dois aller le chercher.", // nagelezen AI 22 nov
    's.kids.2': "Je peux prendre un congé d’urgence ?", // nagelezen AI 22 nov
    's.kids.3': "Est-ce que mon employeur continue à payer mon salaire ?", // nagelezen AI 22 nov
    'c.kids.q': "Pourquoi tu dois partir maintenant ?", // nagelezen AI 22 nov
    'c.kids.a': "La crèche a appelé. Mon fils a de la fièvre.", // nagelezen AI 22 nov
    'l.body': "Le corps et la douleur", // nagelezen AI 22 nov
    'w.hoofd': "la tête", // nagelezen AI 22 nov
    'w.rug': "le dos", // nagelezen AI 22 nov
    'w.arm': "le bras", // nagelezen AI 22 nov
    'w.hand': "la main", // nagelezen AI 22 nov
    'w.buik': "le ventre", // nagelezen AI 22 nov
    'w.oog': "l’œil", // nagelezen AI 22 nov
    's.body.1': "J’ai mal à la main.", // nagelezen AI 22 nov
    's.body.2': "Je ne me sens pas bien.", // nagelezen AI 22 nov
    's.body.3': { m: "Je suis tombé sur le bras.", f: "Je suis tombée sur le bras.", x: 'J’ai fait une chute sur le bras.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.body.q': "Où est-ce que tu as mal ?", // nagelezen AI 22 nov
    'c.body.a': "Au dos. J’ai soulevé un carton lourd.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'l.jobends': "Quand ton travail s’arrête", // nagelezen AI 22 nov
    'w.eindafrekening': "le solde de tout compte (ta dernière paie quand un travail s’arrête)", // nagelezen AI 22 nov
    'w.opzeggen': "résilier (un contrat), annuler", // nagelezen AI 22 nov
    'w.uitschrijven': "se désinscrire (retirer ton nom d’une liste)", // nagelezen AI 22 nov
    'w.sleutel': "la clé", // nagelezen AI 22 nov
    'w.verhuizen': "déménager", // nagelezen AI 22 nov
    'w.busje': "le minibus, la camionnette", // nagelezen AI 22 nov
    's.jobends.1': "Est-ce qu’on me paie ma prime de vacances et mes jours de congé ?", // nagelezen AI 22 nov
    's.jobends.2': "Je demande conseil au Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': "Je prends moi-même une nouvelle assurance maladie.", // nagelezen AI 22 nov
    'c.jobends.q': "Ton travail s’arrête vendredi. Ce jour-là, tu dois aussi quitter le logement.", // nagelezen AI 22 nov
    'c.jobends.a': "Quel est le préavis de mon contrat de location ?", // nagelezen AI 22 nov
    'c.details': "Tes informations : donne-les correctement", // nagelezen AI 22 nov
    'c.details.b': "Au début d’un travail, tu donnes tes informations. C’est ton nom, ton adresse, ton numéro de téléphone, ta date de naissance et ton BSN. Épelle ton nom lentement, lettre par lettre. Ensuite, vérifie ton nom sur ton contrat et sur ta fiche de paie. Une erreur dans ton nom ou ton BSN peut poser des problèmes pour ta paie ou tes impôts. Nouvelle adresse ou nouveau numéro de téléphone ? Dis-le à ton employeur.", // nagelezen AI 22 nov
    'c.details.p': "Je l’épelle : A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "Au téléphone, l’agence note ton nom de famille. Tu entends qu’ils l’écrivent mal. Que fais-tu ?", // nagelezen AI 22 nov
    'c.details.o1': "Épelle ton nom lentement et demande-leur de le relire.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Ne dis rien : une petite erreur dans ton nom, ce n’est pas grave.", // nagelezen AI 22 nov
    'c.details.o3': "Raccroche, et espère qu’ils trouveront l’erreur plus tard.", // nagelezen AI 22 nov
    'c.details.w': "Ton nom doit être le même sur ton contrat, ta fiche de paie et ta pièce d’identité. Comme ça, ta paie et tes impôts sont corrects. Épeler et faire relire, c’est une vérification rapide.", // nagelezen AI 22 nov
    'c.dates': "Les dates : le jour vient d’abord", // nagelezen AI 22 nov
    'c.dates.b': "En néerlandais, le jour vient avant le mois : 3-6, c’est le 3 juin, pas le 6 mars. “Tot en met” veut dire que le dernier jour compte aussi. Les jours et les mois s’écrivent avec une minuscule : maandag, juni. Un doute sur une date ? Demande, et répète-la.", // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.dates.p': "Tu veux dire le 3 juin ?", // nagelezen AI 22 nov
    'c.dates.s': "Sur ton planning, il est écrit : “Vrij: 3-6 tot en met 5-6”. Quand es-tu libre ?", // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.dates.o1': "Le 3, le 4 et le 5 juin.", // nagelezen AI 22 nov
    'c.dates.o2': "Seulement le 3 et le 4 juin.", // nagelezen AI 22 nov
    'c.dates.o3': "Du 6 mars au 6 mai.", // nagelezen AI 22 nov
    'c.dates.w': "Le jour vient d’abord, puis le mois : 3-6, c’est le 3 juin. “Tot en met” veut dire que le 5 juin compte aussi, donc tu es libre trois jours.", // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.permit': "Le travail et l’intégration", // nagelezen AI 22 nov
    'c.permit.b': "Tu dois faire l’intégration civique (inburgering) ? Dis-le à ton employeur, et dis à la gemeente (la mairie) que tu travailles. Demande tôt si tes cours de langue peuvent s’organiser autour de ton planning. Tu ne sais pas si tu as le droit de travailler ici ? Vérifie-le avant de commencer, par exemple auprès de l’IND, de l’UWV ou de VluchtelingenWerk. On te demande de t’inscrire comme indépendant (zzp’er) pour ce travail ? Demande d’abord conseil. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nagelezen AI 22 nov
    'c.permit.p': "J’ai un cours de langue le mardi. Est-ce que mon planning peut en tenir compte ?", // nagelezen AI 22 nov
    'c.permit.s': "Ton cours de langue est le mardi matin. Ton nouveau planning te fait travailler à ce moment-là. Que fais-tu ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Demande à ton responsable de changer le planning.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Ne va pas au cours : le travail passe avant.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Reste à la maison le mardi sans rien dire.", // nagelezen AI 22 nov
    'c.permit.w': "Ton intégration est aussi une obligation. Beaucoup d’employeurs aident quand ils le savent tôt. La gemeente peut aussi t’aider à organiser ton plan autour de ton travail.", // nagelezen AI 22 nov
    'c.kids': "Ton enfant est malade", // nagelezen AI 22 nov
    'c.kids.b': "Ton enfant tombe malade tout à coup ? Dis-le tout de suite à ton employeur. Pour les premières heures ou les premiers jours, tu peux prendre un congé d’urgence (calamiteitenverlof), et ton employeur continue à te payer. Ton enfant a besoin de soins plus longtemps ? Alors tu peux demander un congé pour soins (zorgverlof). Enceinte ? Ton employeur n’a pas le droit de te licencier pour ça. Renseigne-toi à temps sur le congé de grossesse et le congé parental (ouderschapsverlof). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "Mon enfant est malade. Je peux partir plus tôt aujourd’hui ?", // nagelezen AI 22 nov
    'c.kids.s': "La crèche (kinderopvang) t’appelle au travail. Ton enfant a de la fièvre et doit rentrer à la maison. Que fais-tu ?", // nagelezen AI 22 nov
    'c.kids.o1': "Préviens ton responsable, et demande un congé d’urgence.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Pars sans rien dire, et explique-le demain.", // nagelezen AI 22 nov
    'c.kids.o3': "Reste au travail, et laisse ton enfant attendre la fin de ton service.", // nagelezen AI 22 nov
    'c.kids.w': "Un enfant malade, c’est une urgence à la maison. Quand tu préviens d’abord ton responsable, il peut organiser le travail. Le congé d’urgence est fait pour ces moments-là.", // nagelezen AI 22 nov
    'c.body': "Dis ce qui s’est passé et où tu as mal", // nagelezen AI 22 nov
    'c.body.b': "Chez le médecin, dis ce qui s’est passé et où tu as mal. Par exemple : “Ik ben gevallen. Mijn arm doet pijn.” Dis aussi depuis combien de temps tu as mal. Tu n’as pas besoin de deviner ce que tu as : c’est le médecin qui vérifie. C’est arrivé au travail ? Dis-le à ton responsable le jour même.", // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.body.p': { m: "Je suis tombé. J’ai mal au bras.", f: "Je suis tombée. J’ai mal au bras.", x: 'J’ai fait une chute. J’ai mal au bras.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.s': "Au travail, tu as soulevé un carton lourd. Maintenant, tu as très mal au dos. Tu es chez le médecin généraliste (huisarts). Que dis-tu ?", // nagelezen AI 22 nov
    'c.body.o1': "Où tu as mal, et ce qui s’est passé : tu as soulevé un carton lourd.", // nagelezen AI 22 nov
    'c.body.o2': "Seulement que tu te sens mal, rien de plus.", // nagelezen AI 22 nov
    'c.body.o3': "Le nom d’une maladie que tu as trouvée sur internet.", // nagelezen AI 22 nov
    'c.body.w': "Quand tu dis où tu as mal et ce qui s’est passé, le médecin te comprend plus vite. C’est le médecin qui vérifie ce que c’est. C’est arrivé au travail ? Dis-le aussi à ton responsable.", // nagelezen AI 22 nov
    'c.jobends': "Ton travail s’arrête : qu’est-ce qui s’arrête aussi ?", // nagelezen AI 22 nov
    'c.jobends.b': "Quand ton travail s’arrête, vérifie ton solde de tout compte (eindafrekening). Les jours de congé que tu n’as pas pris et ta prime de vacances sont en général payés avec. Le logement, l’assurance maladie ou le minibus de l’agence peuvent s’arrêter en même temps. Prends toi-même une assurance maladie à temps. Ton contrat de location a ses propres règles : demande conseil avant de quitter le logement. Tu déménages, ou tu quittes les Pays-Bas ? Dis-le à la gemeente. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "Quand est-ce que je reçois mon solde de tout compte ?", // nagelezen AI 22 nov
    'c.jobends.s': "Ton travail s’arrête vendredi. Ton assurance maladie passe par l’agence. Que fais-tu ?", // nagelezen AI 22 nov
    'c.jobends.o1': "Demande quand elle s’arrête, et prends la tienne à temps.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Rien : l’assurance continue toute seule.", // nagelezen AI 22 nov
    'c.jobends.o3': "Attends de tomber malade, et règle ça à ce moment-là.", // nagelezen AI 22 nov
    'c.jobends.w': "L’assurance par l’agence s’arrête souvent quand ton travail s’arrête. Quand tu vis ou travailles aux Pays-Bas, tu dois en général avoir une assurance maladie. En t’en occupant à temps, tu as toujours une assurance.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Finir ton travail", // nieuw, nalezen
    'l.workorder': "Le bon de travail", // nieuw, nalezen
    'w.werkbon': "le bon de travail (un papier ou une appli avec ta tâche)", // nieuw, nalezen
    'w.lezen': "lire", // nieuw, nalezen
    'w.aantal': "le nombre (combien)", // nieuw, nalezen
    'w.materiaal': "le matériel (ce qu’il te faut pour le travail)", // nieuw, nalezen
    'w.klaarleggen': "préparer (sortir ce qu’il te faut)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.handtekening': "la signature", // nieuw, nalezen
    's.workorder.1': "Je lis d’abord le bon de travail.", // nieuw, nalezen
    's.workorder.2': "Ce nombre est juste ?", // nieuw, nalezen
    's.workorder.3': "Je prépare le matériel.", // nieuw, nalezen
    'c.workorder.q': "Tu sais ce que tu dois faire ?", // nieuw, nalezen
    'c.workorder.a': "Presque. Que veut dire ce mot sur le bon de travail ?", // nieuw, nalezen
    'l.handover': "Fini, ou pas encore ?", // nieuw, nalezen
    'w.opruimen': "ranger (remettre les choses en place)", // nieuw, nalezen
    'w.nakijken': "vérifier (regarder le travail encore une fois)", // nieuw, nalezen
    'w.afmelden': "signaler la fin (dire que le travail est fait et partir)", // nieuw, nalezen
    'w.kapot': "cassé, en panne", // nieuw, nalezen
    'w.opslot': "fermé à clé", // nieuw, nalezen
    'w.bijzonderheid': "la porte", // nieuw, nalezen
    's.handover.1': "Je range mon poste.", // nieuw, nalezen // nagelezen AI 31 okt
    's.handover.2': "Vous pouvez vérifier mon travail ?", // nieuw, nalezen
    's.handover.3': "Je signale au responsable que j’ai fini.", // nieuw, nalezen
    'c.handover.q': "Tout est fini ?", // nieuw, nalezen
    'c.handover.a': "Presque. La chambre quatre était fermée à clé.", // nieuw, nalezen
    'u.tech': "À l’atelier", // nieuw, nalezen
    'l.workshop': "Les outils de l’atelier", // nieuw, nalezen
    'w.gereedschap': "les outils", // nieuw, nalezen
    'w.zagen': "scier", // nieuw, nalezen
    'w.slijpen': "meuler (lisser ou couper du métal avec une machine)", // nieuw, nalezen
    'w.vonk': "l’étincelle", // nieuw, nalezen
    'w.gehoorbescherming': "la protection auditive (pour tes oreilles)", // nieuw, nalezen
    'w.lawaai': "le bruit (beaucoup de son fort)", // nieuw, nalezen
    's.workshop.1': "Où sont les outils ?", // nieuw, nalezen
    's.workshop.2': "Je porte une protection auditive quand je meule.", // nieuw, nalezen
    's.workshop.3': "Attention aux étincelles !", // nieuw, nalezen
    'c.workshop.q': "Pourquoi tu portes des lunettes ?", // nieuw, nalezen
    'c.workshop.a': "Quand je scie, des petits bouts peuvent m’entrer dans l’œil.", // nieuw, nalezen
    'l.power': "D’abord couper le courant", // nieuw, nalezen
    'w.stroom': "le courant, l’électricité", // nieuw, nalezen
    'w.kabel': "le câble", // nieuw, nalezen
    'w.stekker': "la prise (la fiche)", // nieuw, nalezen
    'w.onderspanning': "sous tension (il y a du courant dedans)", // nieuw, nalezen
    'w.spanningsloos': "hors tension, sûr (il n’y a pas de courant)", // nieuw, nalezen
    'w.elektricien': "l’électricien", // nieuw, nalezen
    's.power.1': "Il y a encore du courant ici ?", // nieuw, nalezen
    's.power.2': "Ce câble est abîmé.", // nieuw, nalezen
    's.power.3': "J’attends qu’il soit hors tension.", // nieuw, nalezen
    'c.power.q': "Tu peux changer cette lampe ?", // nieuw, nalezen
    'c.power.a': "Le courant est coupé ? Sinon, j’attends l’électricien.", // nieuw, nalezen
    'u.garage': "Au garage", // nieuw, nalezen
    'l.garage': "Pneus, huile et le pont élévateur", // nieuw, nalezen
    'w.band': "le pneu", // nieuw, nalezen
    'w.olie': "l’huile", // nieuw, nalezen
    'w.accu': "la batterie de voiture", // nieuw, nalezen
    'w.monteur': "le mécanicien", // nieuw, nalezen
    'w.hefbrug': "le pont élévateur (il soulève la voiture)", // nieuw, nalezen
    'w.lek': "crevé, qui fuit (l’air ou l’eau sort)", // nieuw, nalezen
    's.garage.1': "Le pneu est crevé.", // nieuw, nalezen
    's.garage.2': "Où est la nouvelle huile ?", // nieuw, nalezen
    's.garage.3': "La voiture est sur le pont élévateur.", // nieuw, nalezen
    'c.garage.q': "Tu peux changer les pneus de cette voiture ?", // nieuw, nalezen
    'c.garage.a': "Oui. Où sont les pneus d’hiver ?", // nieuw, nalezen
    'l.carjob': "C’est le client qui décide", // nieuw, nalezen
    'w.proefrit': "l’essai sur route (un tour pour tester la voiture)", // nieuw, nalezen
    'w.rijbewijs': "le permis de conduire", // nieuw, nalezen
    'w.akkoord': "d’accord, OK (tu dis oui)", // nieuw, nalezen
    'w.kosten': "les frais (ce qu’il faut payer)", // nieuw, nalezen
    'w.repareren': "réparer", // nieuw, nalezen
    'w.onderdeel': "la pièce (d’une voiture ou d’une machine)", // nieuw, nalezen
    's.carjob.1': "Le client est d’accord avec les frais ?", // nieuw, nalezen
    's.carjob.2': "Cette pièce est cassée.", // nieuw, nalezen
    's.carjob.3': "Je peux faire un essai sur route ?", // nieuw, nalezen
    'c.carjob.q': "Les freins sont mauvais aussi. Tu les fais tout de suite ?", // nieuw, nalezen
    'c.carjob.a': "D’abord je demande à mon chef. Le client doit être d’accord.", // nieuw, nalezen
    'u.stage': "Faire un stage", // nieuw, nalezen
    'l.placement': "Ton stage", // nieuw, nalezen
    'w.stage': "le stage (tu apprends dans une entreprise)", // nieuw, nalezen
    'w.praktijkopleider': "le tuteur en entreprise (il te guide dans l’entreprise)", // nieuw, nalezen
    'w.stagebegeleider': "le référent de stage de l’école (il te guide pour l’école)", // nieuw, nalezen
    'w.pok': "la convention de stage (toi, l’école et l’entreprise, vous la signez)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.school': "l’école", // nieuw, nalezen
    'w.leerbedrijf': "l’entreprise formatrice (une entreprise où des élèves peuvent apprendre)", // nieuw, nalezen
    's.placement.1': "Je fais mon stage dans un entrepôt.", // nieuw, nalezen
    's.placement.2': "Qui est mon tuteur en entreprise ?", // nieuw, nalezen
    's.placement.3': "Je n’ai pas encore signé la convention de stage.", // nieuw, nalezen
    'c.placement.q': "Quand est-ce que tu commences ton stage ?", // nieuw, nalezen
    'c.placement.a': "Lundi. D’abord on signe la convention de stage.", // nieuw, nalezen
    'l.review': "Des retours sur ton stage", // nieuw, nalezen
    'w.beoordeling': "l’évaluation (si tu fais bien)", // nieuw, nalezen
    'w.leerdoel': "l’objectif d’apprentissage (ce que tu veux apprendre)", // nieuw, nalezen
    'w.voorbeeld': "l’exemple", // nieuw, nalezen
    'w.portfolio': "le portfolio (un dossier avec ton travail et des preuves)", // nieuw, nalezen
    'w.cijfer': "la note", // nieuw, nalezen
    'w.verslag': "le rapport (un texte sur ton travail)", // nieuw, nalezen
    's.review.1': "Qu’est-ce que je peux faire mieux ?", // nieuw, nalezen
    's.review.2': "Vous pouvez me donner un exemple ?", // nieuw, nalezen
    's.review.3': "Mon évaluation est la semaine prochaine.", // nieuw, nalezen
    'c.review.q': "Tu dois travailler plus vite.", // nieuw, nalezen
    'c.review.a': "D’accord. Vous pouvez me montrer comment faire plus vite ?", // nieuw, nalezen
    'u.society': "Participer à la vie aux Pays-Bas", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.council': "La commune et le vote", // nieuw, nalezen
    'w.stemmen': "voter", // nieuw, nalezen
    'w.verkiezing': "l’élection", // nieuw, nalezen
    'w.gemeenteraad': "le conseil municipal (il décide pour ta ville)", // nieuw, nalezen
    'w.parlement': "le parlement (il fait les lois)", // nieuw, nalezen
    'w.stempas': "la carte de vote (la carte qu’il te faut pour voter)", // nieuw, nalezen
    'w.burgemeester': "le maire", // nieuw, nalezen
    's.council.1': "J’ai le droit de voter ?", // nieuw, nalezen
    's.council.2': "Ma carte de vote est arrivée par la poste.", // nieuw, nalezen
    's.council.3': "Le conseil municipal décide pour mon quartier.", // nieuw, nalezen
    'c.council.q': "Tu vas voter mercredi ?", // nieuw, nalezen
    'c.council.a': "Oui. J’ai ma carte de vote et ma pièce d’identité.", // nieuw, nalezen
    'l.police': "La police et tes droits", // nieuw, nalezen
    'w.agent': "l’agent de police", // nieuw, nalezen
    'w.boete': "l’amende (de l’argent à payer comme sanction)", // nieuw, nalezen
    'w.bezwaar': "la contestation (tu dis par écrit que tu n’es pas d’accord)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.rechter': "le juge", // nieuw, nalezen
    'w.advocaat': "l’avocat", // nieuw, nalezen
    'w.wet': "la loi", // nieuw, nalezen
    's.police.1': "J’ai eu une amende.", // nieuw, nalezen
    's.police.2': "Je veux contester la décision.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.police.3': "Je veux parler à un avocat.", // nieuw, nalezen
    'c.police.q': "Je peux voir votre pièce d’identité ?", // nieuw, nalezen
    'c.police.a': "Oui, la voici. Qu’est-ce qui se passe ?", // nieuw, nalezen
    'u.online': "En ligne au travail", // nieuw, nalezen
    'l.login': "Se connecter", // nieuw, nalezen
    'w.uitloggen': "se déconnecter", // nieuw, nalezen
    'w.account': "le compte", // nieuw, nalezen
    'w.scherm': "l’écran", // nieuw, nalezen
    'w.vergrendelen': "verrouiller (un écran ou un téléphone)", // nieuw, nalezen
    'w.gebruikersnaam': "le nom d’utilisateur", // nieuw, nalezen
    'w.inlogcode': "le code de connexion (un code par SMS ou dans une appli)", // nieuw, nalezen
    's.login.1': "J’ai oublié mon mot de passe.", // nieuw, nalezen
    's.login.2': "Je me déconnecte toujours.", // nieuw, nalezen
    's.login.3': "Je ne donne mon DigiD à personne.", // nieuw, nalezen
    'c.login.q': "Tu arrives à te connecter ?", // nieuw, nalezen
    'c.login.a': "Non, mon mot de passe ne marche pas.", // nieuw, nalezen
    'l.phish': "Les faux e-mails", // nieuw, nalezen
    'w.afzender': "l’expéditeur", // nieuw, nalezen
    'w.klikken': "cliquer", // nieuw, nalezen
    'w.bijlage': "la pièce jointe", // nieuw, nalezen
    'w.verdacht': "suspect", // nieuw, nalezen
    'w.ictafdeling': "le service informatique", // nieuw, nalezen
    'w.wijzigen': "changer, modifier", // nieuw, nalezen
    's.phish.1': "Cet e-mail est suspect.", // nieuw, nalezen
    's.phish.2': "Je n’ouvre pas la pièce jointe.", // nieuw, nalezen
    's.phish.3': "Je change mon mot de passe tout de suite.", // nieuw, nalezen
    'c.phish.q': "Tu as cliqué sur le lien ?", // nieuw, nalezen
    'c.phish.a': "Oui. J’appelle le service informatique.", // nieuw, nalezen
    'l.mychoice': "Ce que je fais bien", // nieuw, nalezen
    'w.goedin': "doué pour (quelque chose)", // nieuw, nalezen
    'w.kiezen': "choisir", // nieuw, nalezen
    'w.beroep': "le métier, le type de travail", // nieuw, nalezen
    'w.bijbaan': "le petit boulot (un petit travail pendant tes études)", // nieuw, nalezen // nagelezen AI ronde 3
    'w.nauwkeurig': "soigneux et précis", // nieuw, nalezen
    'w.meeloopdag': "la journée d’observation (un jour où tu suis quelqu’un au travail)", // nieuw, nalezen
    's.mychoice.1': "Je sais bien travailler de mes mains.", // nieuw, nalezen
    's.mychoice.2': "J’aime travailler avec des gens.", // nieuw, nalezen
    's.mychoice.3': "Je peux vous suivre une journée, pour voir le travail ?", // nieuw, nalezen
    'c.mychoice.q': "Qu’est-ce que tu fais bien ?", // nieuw, nalezen
    'c.mychoice.a': "Je sais bien m’occuper des gens. À la maison, je m’occupe de ma mère.", // nieuw, nalezen
    'l.nextstep': "Après Entree", // nieuw, nalezen
    'w.niveau2': "le niveau 2 (le niveau suivant du mbo)", // nieuw, nalezen
    'w.startkwalificatie': "la qualification de base (un diplôme mbo de niveau 2 ou plus)", // nieuw, nalezen
    'w.bbl': "la bbl (tu travailles dans une entreprise et tu vas à l’école environ un jour par semaine)", // nieuw, nalezen
    'w.doorstromen': "continuer (vers un niveau plus haut)", // nieuw, nalezen
    'w.aanmelden': "s’inscrire (dans une école ou à une formation)", // nieuw, nalezen
    'w.opendag': "la journée portes ouvertes (tu peux visiter une école)", // nieuw, nalezen
    's.nextstep.1': "Après Entree, je veux aller au niveau 2.", // nieuw, nalezen
    's.nextstep.2': "Je veux travailler et apprendre en même temps.", // nieuw, nalezen
    's.nextstep.3': "Quand est la journée portes ouvertes ?", // nieuw, nalezen
    'c.nextstep.q': "Qu’est-ce que tu vas faire après Entree ?", // nieuw, nalezen
    'c.nextstep.a': "Je veux faire la bbl. Comme ça, je travaille et j’apprends.", // nieuw, nalezen
    'l.email': "Écrire à ton employeur", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.mail': "l’e-mail", // nieuw, nalezen
    'w.onderwerp': "l’objet (d’un e-mail)", // nieuw, nalezen
    'w.beste': "cher, chère (au début d’une lettre ou d’un e-mail)", // nieuw, nalezen
    'w.beleefd': "poli", // nieuw, nalezen
    'w.nalezen': "relire (vérifier avant d’envoyer)", // nieuw, nalezen
    'w.versturen': "envoyer", // nieuw, nalezen
    's.email.1': "Qu’est-ce que je mets dans l’objet ?", // nieuw, nalezen
    's.email.2': "Je relis mon e-mail encore une fois.", // nieuw, nalezen
    's.email.3': "J’envoie l’e-mail demain.", // nieuw, nalezen
    'c.email.q': "Tu as envoyé l’e-mail pour ton jour de congé ?", // nieuw, nalezen
    'c.email.a': "Pas encore. Je le relis d’abord.", // nieuw, nalezen
    'l.budget': "Ton argent chaque mois", // nieuw, nalezen
    'w.vastelasten': "les charges fixes (loyer, assurance, téléphone : chaque mois)", // nieuw, nalezen
    'w.sparen': "épargner (de l’argent)", // nieuw, nalezen
    'w.abonnement': "l’abonnement (tu le paies chaque mois)", // nieuw, nalezen
    'w.achterafbetalen': "payer plus tard (acheter maintenant, payer plus tard)", // nieuw, nalezen
    'w.bedenktijd': "le délai de rétractation (le temps de changer d’avis)", // nieuw, nalezen
    'w.garantie': "la garantie (ça doit marcher, sinon on te le répare)", // nieuw, nalezen
    's.budget.1': "D’abord, je paie les charges fixes.", // nieuw, nalezen
    's.budget.2': "J’épargne un peu chaque mois.", // nieuw, nalezen
    's.budget.3': "Je résilie cet abonnement.", // nieuw, nalezen
    'c.budget.q': "Achète ce téléphone maintenant et paie plus tard !", // nieuw, nalezen
    'c.budget.a': "Non, merci. Payer plus tard, c’est aussi une dette.", // nieuw, nalezen
    'l.healthy': "En forme pour le travail", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "dormir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "le petit-déjeuner", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "bouger, être actif", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "fatigué", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "la drogue", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "déprimé (triste depuis longtemps)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Je suis très fatigué aujourd’hui.", f: "Je suis très fatiguée aujourd’hui.", x: "Je suis très fatigué / fatiguée aujourd’hui." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Je prends toujours d’abord un petit-déjeuner.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "À la pause, je vais faire un petit tour à pied.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': { m: "Tu veux un cachet ? Comme ça, tu restes éveillé.", f: "Tu veux un cachet ? Comme ça, tu restes éveillée.", x: "Tu veux un cachet ? Comme ça, tu restes éveillé / éveillée." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "Non, merci. Je ne travaille pas sous l’effet de quoi que ce soit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "D’abord lire, puis commencer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Avant de commencer, lis le bon de travail (werkbon) ou la tâche dans l’appli. Vérifie l’adresse, la tâche et le nombre de choses. Quelque chose n’est pas clair ? Demande avant de commencer, pas au milieu. Ensuite, prépare tes outils et ton matériel. Ça fait gagner du temps, et tu fais moins d’erreurs. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "Il y a dix cartons sur le bon de travail. C’est juste ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "Ton bon de travail dit : peindre la chambre 3. Ton collègue dit que c’est la chambre 5. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Tu demandes à ton responsable quelle chambre est la bonne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Tu peins la chambre 3, parce que c’est écrit sur le bon de travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Tu peins les deux chambres, comme ça pas d’erreur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Quand deux choses ne collent pas, tu vérifies avant de commencer. Une petite question prend moins de temps que refaire le travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Dis ce qui est fait, et ce qui ne l’est pas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Ton travail n’est pas fini quand tu t’arrêtes. D’abord, range ton poste et tes outils. Ensuite, demande à quelqu’un de vérifier ton travail. Dis à ton responsable ce qui est fait et ce qui ne l’est pas. Quelque chose s’est mal passé, ou est cassé ? Dis-le maintenant, pas demain. Signaler la fin du travail fait partie de ton travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.handover.p': "La chambre quatre n’est pas encore finie. La porte était fermée à clé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Tu as nettoyé cinq chambres. La chambre 4 était fermée à clé. Ton service se termine. Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Tu dis à ton responsable : la 4 n’est pas faite.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Tu rentres chez toi : la 4 était fermée, ce n’est pas ta faute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Tu écris “tout est fait” sur la liste.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Ton responsable organise le travail. S’il sait que la chambre 4 n’est pas faite, il peut envoyer quelqu’un d’autre. Comme ça, aucun client ne trouve une chambre sale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Les yeux, les oreilles et le feu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Meuler, scier et percer font des étincelles, des petits bouts et beaucoup de bruit. Porte des lunettes de sécurité et une protection auditive, même pour un travail court. Quand il y a beaucoup de bruit, ton employeur doit te donner une protection auditive. Les étincelles peuvent provoquer un incendie. Pour souder, ou meuler près de choses qui peuvent brûler, il y a des règles en plus (heet werk) : demande avant de commencer. Après le travail, ramasse les petits bouts de métal. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Je vais meuler. Où est la protection auditive ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Tu dois meuler une petite pièce de métal. Ça prend une minute. Tes lunettes de sécurité sont dans l’autre pièce. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Tu vas d’abord chercher tes lunettes, même pour une minute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Tu meules les yeux à moitié fermés, c’est rapide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Tu mets ton autre main devant tes yeux.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Une étincelle ou un bout de métal dans l’œil peut abîmer ton œil pour toujours. Ça peut arriver en une seconde. Les lunettes de sécurité aident, même pour un travail court.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "L’électricité : jamais comme ça", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': { m: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation ont le droit de faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", f: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation ont le droit de faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", x: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation ont le droit de faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr / Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Je vois un câble abîmé. Qui peut le regarder ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Tu dois accrocher une lampe. Un collègue dit : “Le courant est coupé, je crois.” Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Tu demandes à un collègue formé de vérifier qu’il n’y a plus de courant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Tu commences, mais tu mets des gants épais pour toucher les fils.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Tu allumes et éteins la lumière pour vérifier qu’il n’y a plus de courant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "“Je crois”, ce n’est pas assez avec l’électricité. Une décharge peut te tuer. Un collègue formé vérifie qu’il n’y a pas de courant, et après tu peux commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "En sécurité sous une voiture", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Ne va jamais sous une voiture qui est seulement sur un cric. La voiture doit être bien stable sur le pont élévateur ou sur des chandelles. L’huile renversée rend le sol glissant : nettoie-la tout de suite. La vieille huile, les batteries et les produits de nettoyage sont des déchets dangereux. Ils vont dans un endroit spécial, jamais dans la poubelle normale ni dans l’égout. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Il y a de l’huile par terre. Je la nettoie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Tu dois regarder sous une voiture qui est seulement sur un cric. Un collègue dit : “Ça va, fais vite.” Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Tu attends le pont ou des chandelles.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Tu vas dessous vite, les jambes dehors.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Tu demandes au collègue de tenir la voiture.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Un cric peut glisser. Une voiture est très lourde, et dessous tu ne peux pas sortir vite. Les chandelles ou un pont élévateur gardent la voiture en place.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Du travail en plus ? Demande d’abord au client", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "Tu trouves plus de problèmes que ce qui est sur le bon de travail ? Ne les répare pas comme ça. Le client doit d’abord être d’accord avec le travail en plus et les frais. Ton responsable ou l’accueil appelle le client. Un essai sur route, c’est seulement avec une autorisation, et seulement avec un permis de conduire valable. Note ce que tu as fait et quelles pièces tu as utilisées. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Je vois encore un problème. Qui appelle le client ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Tu fais la vidange d’une voiture. Les freins sont mauvais aussi. Elle doit être prête dans une heure. Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Tu le dis à ton responsable, pour qu’il appelle le client.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Tu répares aussi les freins, par sécurité.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Tu ne dis rien : ils ne sont pas sur le bon.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Le client paie, donc c’est le client qui décide. Sans son accord, le garage ne peut pas faire du travail en plus comme ça. Des mauvais freins sont dangereux, donc il est important d’en parler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "D’abord signer, puis commencer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "En Entree, tu apprends beaucoup dans une entreprise : c’est ton stage (stage, ou bpv). Avant de commencer, toi, l’école et l’entreprise, vous signez une convention : la POK. Dans l’entreprise, ton tuteur (praktijkopleider) t’aide. À l’école, ton référent de stage (stagebegeleider) t’aide. Malade ? Appelle l’entreprise avant ton heure de début, et préviens aussi l’école. Les règles changent d’une école à l’autre : demande à ton référent de stage.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Je commence seulement quand la convention de stage est signée.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "L’entreprise te demande de commencer demain. La POK n’est pas encore signée. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Tu demandes à ton référent de régler d’abord la POK.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Tu commences demain, et tu signes la POK quand tu as le temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Tu commences, mais tu ne dis rien à l’école pour l’instant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "La POK dit ce que tu apprends et qui t’aide. Sans POK signée, ton stage peut ne pas compter pour ton diplôme. C’est pour ça que tu la signes avant de commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Demande des retours, et un exemple", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "En stage, on te dit ce qui va bien et ce qui peut être mieux : ce sont des retours (feedback). C’est normal, et ça t’aide à apprendre. Tu ne comprends pas ? Demande un exemple. Demande toi aussi des retours, par exemple une fois par semaine. Quelque chose va vraiment mal dans ton stage ? D’abord, parle à ton tuteur en entreprise. Ça n’aide pas ? Alors va voir ton référent de stage à l’école.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "Qu’est-ce qui s’est bien passé, et qu’est-ce qui peut être mieux ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Ton tuteur te dit : “Tu dois travailler plus soigneusement.” Tu ne sais pas ce qu’il veut dire. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Tu demandes un exemple de ce que tu dois faire autrement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Tu dis oui, et tu espères comprendre seul.", f: "Tu dis oui, et tu espères comprendre seule.", x: "Tu dis oui, et tu espères comprendre seul / seule." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "Désormais, tu travailles beaucoup plus lentement, pour ne rien rater.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Avec un exemple, tu sais quoi changer. Demander montre que tu veux apprendre. Les tuteurs aiment ça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Qui a le droit de voter ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "Aux Pays-Bas, tu choisis qui décide, en votant. Le conseil municipal (gemeenteraad) décide pour ta ville. La Tweede Kamer fait les lois pour tout le pays. Avec la nationalité néerlandaise, tu peux voter à toutes les élections, à partir de 18 ans. Plus de personnes peuvent voter pour le conseil municipal. Les gens d’un autre pays de l’UE qui habitent ici peuvent voter. Les gens hors UE peuvent voter après 5 ans de séjour légal. La commune (gemeente) t’envoie une carte de vote (stempas). Prends-la avec ta pièce d’identité. Tu ne sais pas si tu peux voter ? Demande à la commune.", // nagelezen AI 22 nov
    'c.council.p': "J’ai le droit de voter pour le conseil municipal ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Tu viens du Maroc et tu vis ici légalement depuis six ans, sans la nationalité néerlandaise. Qu’est-ce qui est vrai ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Tu peux voter pour le conseil municipal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Tu peux aussi voter pour la Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Sans passeport néerlandais, tu ne peux pas voter.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "Après 5 ans de séjour légal, tu peux voter pour le conseil municipal. Pour la Tweede Kamer, il faut la nationalité néerlandaise.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Ta pièce d’identité et tes droits", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': { m: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêté ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits.", f: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêtée ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits.", x: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêté / arrêtée ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits." }, // nagelezen AI 22 nov
    'c.police.p': "Je ne suis pas d’accord avec cette décision. Je fais une réclamation.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Tu reçois une lettre de la commune. Tu n’es pas d’accord avec leur décision. La lettre dit que tu as six semaines. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Tu écris une lettre de réclamation, avant la date.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Tu les appelles une fois, et tu attends qu’ils te rappellent.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Tu attends : après six semaines, ça s’arrête tout seul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "La réclamation se fait par écrit, avant la date indiquée dans la lettre. Après cette date, c’est souvent trop tard. Le Juridisch Loket peut t’aider à l’écrire.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.login': "Ton accès, c’est le tien", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Ton mot de passe et ton DigiD sont seulement pour toi. Ne les donne à personne, même pas à ton employeur ou à un collègue. Sur un ordinateur partagé, déconnecte-toi toujours quand tu as fini. Tu t’en vas un moment ? Verrouille ton écran. Tu as oublié ton mot de passe ? Demande-en un nouveau au service informatique (ICT-afdeling). Les règles pour les ordinateurs changent d’une entreprise à l’autre : demande au service informatique quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Je m’en vais un moment. Je verrouille mon écran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Ton responsable te demande ton DigiD et ton mot de passe, pour régler vite tes papiers. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Tu dis non, et tu te connectes toi-même pendant qu’il aide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Tu les donnes cette fois, parce que c’est ton chef.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Tu les écris sur un papier, pour qu’il les utilise plus tard.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "Avec ton DigiD, quelqu’un peut voir et changer tes impôts, tes allocations et tes papiers de santé. Il est seulement pour toi. Tu peux te connecter toi-même et laisser quelqu’un t’aider.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Vite, un bouton ? Ne clique pas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Un faux e-mail (phishing) a souvent l’air vrai. Il veut que tu agisses vite : “Votre compte sera fermé aujourd’hui !” Vérifie l’expéditeur. Ne clique pas sur un lien et n’ouvre pas une pièce jointe que tu n’attendais pas. Va toi-même sur le vrai site ou dans la vraie appli. Tu as quand même cliqué ? Change tout de suite ton mot de passe, et appelle le service informatique. Ce n’est pas une honte : plus tôt ils savent, mieux c’est. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "J’ai cliqué sur un lien suspect.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Tu as cliqué sur un lien dans un e-mail et tu as tapé ton mot de passe. Ensuite, tu vois que l’e-mail était faux. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Tu changes ton mot de passe, et tu appelles l’informatique.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Tu supprimes l’e-mail, pour que personne d’autre ne clique dessus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Tu attends un jour pour voir si quelque chose se passe mal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Avec ton mot de passe, quelqu’un d’autre peut entrer dans les systèmes de ton travail. Si tu le changes vite et que tu préviens l’informatique, ils peuvent arrêter ça à temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Tes points forts comptent", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "Qu’est-ce que tu fais bien ? Pense au travail, à l’école et à la maison. S’occuper de sa famille, un petit boulot ou du bénévolat, ça compte aussi. Qu’est-ce que tu aimes, et qu’est-ce que tu n’aimes pas ? Tu ne sais pas quel travail te va ? Demande à suivre quelqu’un au travail pendant une journée (meeloopdag). Ton référent à l’école peut t’aider à choisir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Je sais bien m’y prendre avec les gens. À la maison, j’aide beaucoup.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "À l’école, on te demande : “Qu’est-ce que tu fais bien ?” Tu n’as jamais eu de travail payé. Qu’est-ce que tu dis ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Ce que tu fais bien à la maison, comme t’occuper des autres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Que tu ne sais pas encore, car tu n’as jamais travaillé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Que tu peux faire n’importe quel travail, vraiment tout.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Ce que tu sais faire à la maison compte aussi. S’occuper des autres, organiser et aider, ce sont des compétences dont les employeurs ont besoin. Dis ce que tu as fait, avec un exemple.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Après Entree : niveau 2 ou travail", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Avec un diplôme Entree, tu peux continuer au niveau 2 du mbo. Un diplôme de niveau 2 ou plus, c’est une qualification de base (startkwalificatie). Ça t’aide à trouver du travail et à le garder. En bbl, tu travailles dans une entreprise et tu vas à l’école environ un jour par semaine. Pour ça, il te faut un travail ou une place en alternance (leerwerkbaan). Va à une journée portes ouvertes, et parle avec ton référent à l’école.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Je peux aller au niveau 2 après Entree ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Tu as ton diplôme Entree. Une entreprise te propose un travail sans formation. Toi, tu veux aussi continuer à apprendre. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Tu demandes à l’entreprise si une place en bbl est possible.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Tu prends le travail, et tu arrêtes d’apprendre pour toujours.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Tu restes chez toi jusqu’à ce qu’une école t’appelle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "En bbl, tu travailles et tu apprends en même temps. Tu gagnes de l’argent, et tu obtiens un diplôme de niveau 2. Beaucoup d’entreprises aiment ça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Un e-mail court : qui, quoi, quand", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Un e-mail au travail est court et poli. Commence par une salutation, comme “Beste Karin,”. Ensuite, dis ce que tu veux, et quand. Termine par une formule de politesse et ton nom complet. Écris un objet court, comme “Vrij op vrijdag”. Relis ton e-mail avant de l’envoyer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Chère Karin, est-ce que je peux avoir vendredi en congé ? Cordialement, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Tu veux un jour de congé vendredi prochain. Quel e-mail à ton responsable est le meilleur ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "“Vrijdag ben ik er niet.” (sans salutation et sans ton nom).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Un long e-mail sur ta semaine, avec la question à la fin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Un bon e-mail a une salutation, une question claire et ton nom. Comme ça, ton responsable peut répondre vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "D’abord les charges fixes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Quand tu reçois ta paie, paie d’abord les charges fixes : le loyer, l’assurance et ton téléphone. Essaie de mettre de côté une petite somme chaque mois, même 10 euros. Acheter maintenant et payer plus tard, c’est aussi une dette. Tu as acheté quelque chose en ligne ? Alors en général, tu peux changer d’avis dans les 14 jours. Garde le ticket de caisse : tu en as besoin pour la garantie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Je préfère payer maintenant. Comme ça, je n’ai pas de dette.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Tu reçois ta paie aujourd’hui. Tu veux des chaussures neuves, et ton loyer n’est pas encore payé. Qu’est-ce que tu fais ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Tu paies d’abord le loyer, puis tu vois ce qui reste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Tu achètes les chaussures, et tu paies le loyer plus tard.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Tu achètes les chaussures en “payer plus tard”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Le loyer, l’assurance et ton téléphone reviennent chaque mois. Si tu les paies d’abord, tu sais combien d’argent il reste. Comme ça, tu n’as pas de dettes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Sommeil, repas et pas de drogue", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu te sens déprimé depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret.", f: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu te sens déprimée depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret.", x: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu n’as pas le moral depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret." }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.p': { m: "Je me sens déprimé depuis longtemps. Je peux prendre rendez-vous ?", f: "Je me sens déprimée depuis longtemps. Je peux prendre rendez-vous ?", x: "Je n’ai pas le moral depuis longtemps. Je peux prendre rendez-vous ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.s': { m: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour rester éveillé. Qu’est-ce que tu fais ?", f: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour rester éveillée. Qu’est-ce que tu fais ?", x: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour ne pas t’endormir. Qu’est-ce que tu fais ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.o1': "Tu dis non, et tu dors quelques heures avant ton service.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Tu prends un demi-cachet, ce n’est pas dangereux.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Tu le prends, mais tu ne le dis à personne au travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Les cachets d’un collègue peuvent être de la drogue. Ils peuvent te rendre malade ou te faire faire des erreurs au travail. Dormir, c’est la façon sûre de rester alerte.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "La maladie", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Travailler avec des aliments", // nieuw, nalezen
    'w.mes': "le couteau", // nieuw, nalezen
    'w.snijhandschoen': "le gant anti-coupure (un gant contre les coupures)", // nieuw, nalezen
    'w.vriescel': "la chambre de congélation (une pièce très froide)", // nieuw, nalezen
    'w.sieraden': "les bijoux (une bague, une montre, des boucles d’oreilles)", // nieuw, nalezen
    'w.pleister': "le pansement (pour une petite coupure)", // nieuw, nalezen
    'w.vlees': "la viande", // nieuw, nalezen
    's.food.1': "J’enlève mes bijoux.", // nieuw, nalezen
    's.food.2': "Où sont les gants anti-coupure ?", // nieuw, nalezen
    's.food.3': "Dans la chambre de congélation, je porte une veste chaude.", // nieuw, nalezen
    'c.food.q': "Pourquoi on nettoie la ligne maintenant ?", // nieuw, nalezen
    'c.food.a': "Ensuite, il y a un produit sans noix.", // nieuw, nalezen
    'c.food': "Mains propres, aliments sûrs", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Le travail avec des aliments a des règles d’hygiène strictes : un filet à cheveux, des vêtements de travail propres, des mains lavées et pas de bijoux. Ces règles sont les mêmes pour tout le monde. Elles ne disent rien sur toi : elles protègent les aliments pour les gens qui les mangent. Avec un couteau, porte toujours ton gant anti-coupure. Dans une pièce froide ou une chambre de congélation, mets les vêtements chauds qu’on te donne, et réchauffe-toi pendant ta pause. Tu es malade, ou tu as une blessure à la main ? Signale-le avant de commencer. Alors tu peux avoir un pansement spécial, ou un autre travail pendant un moment. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "J’ai une petite coupure à la main. Je peux avoir un pansement ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "À la maison, tu t’es un peu coupé le doigt. Aujourd’hui, tu travailles avec de la viande. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Tu le dis à ton responsable, et tu demandes un pansement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Tu ne dis rien : c’est juste une petite coupure.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Tu mets un gant par-dessus, pour que personne ne le voie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Une petite blessure peut apporter des microbes dans les aliments. Quand tu le signales, tu peux avoir un pansement spécial ou un autre travail pendant un moment. Le signaler est normal : personne ne te le reproche.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transport et livraison", // nieuw, nalezen
    'l.parcel': "Livrer des colis", // nieuw, nalezen
    'w.pakket': "le colis", // nieuw, nalezen
    'w.bestelbus': "la camionnette de livraison", // nieuw, nalezen
    'w.bezorgen': "livrer (apporter au client)", // nieuw, nalezen
    'w.inladen': "charger (mettre des choses dans la camionnette)", // nieuw, nalezen
    'w.aanbellen': "sonner à la porte", // nieuw, nalezen
    'w.bewijs': "la preuve (quelque chose qui montre ce qui s’est passé)", // nieuw, nalezen
    's.parcel.1': "Je scanne chaque colis.", // nieuw, nalezen
    's.parcel.2': "Le client n’est pas chez lui.", // nieuw, nalezen
    's.parcel.3': "Vous pouvez prendre un colis pour les voisins ?", // nieuw, nalezen
    'c.parcel.q': "Ce colis est pour moi ?", // nieuw, nalezen
    'c.parcel.a': "Oui. Vous pouvez signer ici, s’il vous plaît ?", // nieuw, nalezen
    'l.road': "Sécurité et travail juste sur la route", // nieuw, nalezen
    'w.rijden': "conduire", // nieuw, nalezen
    'w.zwaar': "lourd", // nieuw, nalezen
    'w.steekwagen': "le diable (un chariot pour les cartons lourds)", // nieuw, nalezen
    'w.route': "la tournée, le trajet (le chemin que tu fais en voiture)", // nieuw, nalezen
    'w.loondienst': "salarié (tu travailles pour un patron et tu reçois un salaire)", // nieuw, nalezen
    'w.bepalen': "décider (dire comment il faut faire)", // nieuw, nalezen
    's.road.1': "Ce colis est trop lourd. Je vais chercher le diable.", // nieuw, nalezen
    's.road.2': "Ça glisse. Je roule doucement.", // nieuw, nalezen
    's.road.3': "Qui décide de ma tournée et de mes horaires ?", // nieuw, nalezen
    'c.road.q': "Tu peux faire encore une tournée aujourd’hui ?", // nieuw, nalezen
    'c.road.a': "Non, sinon je n’ai pas le temps de faire ma pause.", // nieuw, nalezen
    'c.parcel': "Personne à la maison, ou un colis abîmé", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Le client n’est pas chez lui ? Suis les règles de ton entreprise : essaie chez les voisins, ou rapporte le colis. Ne le laisse pas simplement devant la porte, sauf si le client l’a demandé. Un colis est abîmé ou mouillé ? Ne le livre pas comme si de rien n’était. Prends une photo comme preuve, et signale-le dans le scanner ou l’appli. Dire la vérité sur un problème vaut toujours mieux que le cacher. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Ce colis est abîmé. Voici une photo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Le client n’est pas chez lui, et les voisins non plus. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Tu scannes “pas à la maison”, et tu rapportes le colis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Tu le scannes comme livré, et tu le laisses devant la porte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Tu le caches derrière la poubelle, pour que personne ne le voie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Un colis scanné comme livré doit vraiment être chez le client. Quand tu scannes ce qui s’est vraiment passé, le client peut recevoir son colis plus tard, et personne ne pense que tu l’as perdu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "En sécurité sur la route, et un travail juste", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Ne tiens jamais ton téléphone en main quand tu conduis : c’est interdit. Utilise un support pour la navigation. Prends tes pauses, même les jours où il y a beaucoup de travail. Un colis lourd ? Utilise le diable, ou porte-le à deux. Du verglas ou de la neige ? Roule doucement : arriver en retard vaut mieux qu’un accident. Certaines entreprises disent que tu travailles à ton compte (zelfstandig). Mais qui décide de tes heures, de ta tournée et de tes vêtements ? Si c’est l’entreprise qui décide tout ça, il s’agit peut-être en fait d’un emploi salarié (in loondienst). Alors tu as souvent plus de droits, comme un salaire quand tu es malade. Plus d’informations dans la leçon “Les papiers, l’intégration et ton travail”. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Je prends ma pause maintenant. Ensuite, je repars.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': { m: "L’entreprise dit que tu es indépendant. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?", f: "L’entreprise dit que tu es indépendante. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?", x: "L’entreprise dit que tu travailles à ton compte. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': { m: "Tu demandes conseil : tu es peut-être salarié.", f: "Tu demandes conseil : tu es peut-être salariée.", x: "Tu demandes conseil : c’est peut-être un emploi salarié." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Rien : le contrat dit “indépendant”, donc c’est comme ça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Tu travailles plus d’heures, pour gagner autant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Ce qui compte, c’est comment tu travailles vraiment, pas seulement le mot dans le contrat. Si l’entreprise décide comment, quand et où tu travailles, c’est souvent un emploi salarié. Alors tu as plus de droits.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Se sentir bien au travail", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "la pression au travail (trop de travail en trop peu de temps)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "rester éveillé au lit (tu n’arrives pas à dormir)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "le travail posté (équipes du matin, du soir et de nuit à tour de rôle)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "le mal du pays (ta maison te manque)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "la famille", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "seul", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Je dors mal à cause du travail posté.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': { m: "C’est trop. Je n’y arrive pas seul.", f: "C’est trop. Je n’y arrive pas seule.", x: "C’est trop. Je n’y arrive pas sans aide." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "J’ai le mal du pays. Ma famille est loin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "Ça va, toi ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Pas très bien. Souvent, je n’arrive pas à dormir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "C’est trop ? Tu n’as pas à porter ça sans aide", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Tout le monde se sent parfois fatigué, stressé ou triste. Trop de travail (werkdruk), un mauvais sommeil à cause du travail posté ou le manque de ta famille peuvent rendre les choses lourdes. Tu n’as pas à porter ça sans aide, et dire “c’est trop” n’est pas une faiblesse. Parle à quelqu’un de confiance. Par exemple ton responsable, le médecin du travail (bedrijfsarts) ou ton médecin généraliste (huisarts). Ou la personne de confiance (vertrouwenspersoon), si ton entreprise en a une. Tu peux aussi demander toi-même un entretien avec le médecin du travail. Les médecins ne répètent pas à ton patron ce que tu as dit. Tu penses au suicide, ou tu t’inquiètes pour quelqu’un ? Appelle le 113 (gratuit, jour et nuit), ou chatte sur 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Ça ne va pas très bien. Je peux te parler un moment ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatigué. Que fais-tu ?", f: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatiguée. Que fais-tu ?", x: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu ressens une grande fatigue. Que fais-tu ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Tu en parles à ton responsable ou au médecin du travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Tu ne dis rien, et tu travailles plus dur et plus vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Tu restes à la maison, et tu ne dis à personne pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Le dire tôt n’est pas une faiblesse. Alors vous pouvez chercher ensemble une solution, par exemple d’autres horaires d’équipe. Tu n’as pas à faire ça sans aide.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Reprendre le travail après une maladie", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "augmenter petit à petit (doucement, étape par étape)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "les demi-journées (tu travailles une partie de la journée)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "le travail léger (pas lourd)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "le travail lourd", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "guérir, se rétablir", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "bon retour (bienvenue à nouveau)", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Je commence par des demi-journées.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Je peux déjà faire du travail léger. Le travail lourd, pas encore.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "Le médecin du travail dit : reprendre petit à petit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Bon retour ! Tu vas mieux ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Oui, ça va mieux. J’y vais doucement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Revenir étape par étape", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Tu vas mieux ? Dis à ton employeur que tu peux de nouveau travailler (betermelden). Après une longue maladie, tu reprends souvent étape par étape : d’abord moins d’heures, ou un travail plus léger. Le médecin du travail (bedrijfsarts) te conseille sur ce que tu peux faire. Malade depuis longtemps ? Alors ton employeur et toi faites ensemble un plan pour ton retour. C’est la loi (Wet verbetering poortwachter). Dis clairement ce que tu peux faire, et ce que tu ne peux pas encore faire. Tu n’as pas à dire à tes collègues quelle maladie tu as eue. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Ça, je peux déjà le faire. Ça, pas encore.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': "Tu as été malade pendant trois semaines. Le premier jour de ton retour, ton responsable te demande de porter des cartons lourds. Le médecin du travail a dit : seulement du travail léger pour l’instant. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Tu dis calmement que tu peux faire du travail léger maintenant, et ce que tu ne peux pas encore faire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Tu portes quand même les cartons : tu ne veux pas faire d’histoires.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Tu rentres chez toi sans rien dire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Ton responsable veut te voir revenir, et en bonne santé. Quand tu dis clairement ce que tu peux faire, il peut organiser le travail. En faire trop, trop tôt, peut te rendre malade à nouveau.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Mesurer", // nieuw, nalezen
    'w.rolmaat': "le mètre ruban", // nieuw, nalezen
    'w.waterpas': "le niveau à bulle (il montre si quelque chose est droit)", // nieuw, nalezen
    'w.meten': "mesurer", // nieuw, nalezen
    'w.rechtlijn': "droit (pas de travers)", // nieuw, nalezen
    'w.plank': "la planche", // nieuw, nalezen
    'w.schroef': "la vis", // nieuw, nalezen
    's.measure.1': "Quelle est la longueur de cette planche ?", // nieuw, nalezen
    's.measure.2': "Le mur n’est pas droit.", // nieuw, nalezen
    's.measure.3': "Je le mesure deux fois.", // nieuw, nalezen
    'c.measure.q': "Quelle largeur il faut ?", // nieuw, nalezen
    'c.measure.a': "Quatre-vingt-dix centimètres. Je le note.", // nieuw, nalezen
    'c.measure': "Mesure deux fois, scie une fois", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Sur un chantier, les mesures sont souvent en millimètres. Donc “neuf cents” peut vouloir dire 90 centimètres. Tu as un doute ? Demande : “C’est en millimètres ou en centimètres ?” Répète le chiffre, et note-le. Mesure deux fois avant de scier ou de percer : une planche trop courte reste trop courte. Tu as fait une erreur ? Dis-le tout de suite. Alors l’équipe peut encore la réparer, et ça coûte moins cher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "C’est en millimètres ou en centimètres ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Ton collègue crie une mesure. Tu n’as pas bien entendu. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Tu répètes le chiffre, et tu demandes si c’est juste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Tu scies la planche avec ce que tu crois avoir entendu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Tu attends qu’il vienne voir lui-même.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Une mauvaise mesure coûte du matériel et du temps. Répéter le chiffre prend deux secondes, et tout le monde le fait sur un chantier.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Un chantier bien rangé", // nieuw, nalezen
    'w.bouwplaats': "le chantier", // nieuw, nalezen
    'w.uitvoerder': "le chef de chantier (le chef sur le chantier)", // nieuw, nalezen
    'w.keet': "la baraque de chantier (pour les pauses et les réunions)", // nieuw, nalezen
    'w.afval': "les déchets", // nieuw, nalezen
    'w.container': "la benne (une très grande poubelle pour les déchets)", // nieuw, nalezen
    'w.struikelen': "trébucher (tomber à cause de quelque chose par terre)", // nieuw, nalezen
    's.siteday.1': "Les déchets vont dans la benne.", // nieuw, nalezen
    's.siteday.2': "Le chef de chantier est dans la baraque.", // nieuw, nalezen
    's.siteday.3': "Attention, on peut trébucher ici.", // nieuw, nalezen
    'c.siteday.q': "Où est-ce que ce bois doit aller ?", // nieuw, nalezen
    'c.siteday.a': "Dans la benne, à l’entrée.", // nieuw, nalezen
    'c.siteday': "Un chantier rangé est un chantier sûr", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Sur un chantier, ranger fait partie du travail, pour tout le monde. Des planches, des câbles et des déchets qui traînent font trébucher et tomber les gens. Alors range ta place pendant la journée, pas seulement à la fin. On trie les déchets : le bois, la pierre et le métal vont souvent dans des bennes différentes. Tu ne sais pas laquelle ? Demande. Tu vois un clou qui dépasse, ou un trou sans couvercle ? Répare-le si tu peux le faire sans danger, ou dis-le au chef de chantier (de uitvoerder). Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Je range ça. Comme ça, personne ne trébuche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Des planches avec des clous sont sur le passage. Elles ne sont pas à toi. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Tu les mets sur le côté, ou tu le dis au chef de chantier.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Tu passes par-dessus : ce ne sont pas tes planches.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Tu attends : quelqu’un d’autre va les ranger.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Tout le monde utilise les mêmes passages. Celui qui voit un danger fait quelque chose : c’est normal sur un chantier.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Passer le relais après ton service", // nieuw, nalezen
    'w.vroegedienst': "le service du matin", // nieuw, nalezen
    'w.latedienst': "le service du soir", // nieuw, nalezen
    'w.nachtdienst': "le service de nuit", // nieuw, nalezen
    'w.overdracht': "la transmission (tu dis à l’équipe suivante ce qui s’est passé)", // nieuw, nalezen
    'w.aflossen': "relever, remplacer (la personne suivante arrive, et tu peux partir)", // nieuw, nalezen
    'w.teamleider': "le chef d’équipe", // nieuw, nalezen
    's.shifts.1': "J’ai le service du soir cette semaine.", // nieuw, nalezen
    's.shifts.2': "Qui me remplace ?", // nieuw, nalezen
    's.shifts.3': "La machine deux a eu une panne.", // nieuw, nalezen
    'c.shifts.q': "Il s’est passé quelque chose pendant ton service ?", // nieuw, nalezen
    'c.shifts.a': "Oui. La ligne est restée arrêtée une demi-heure.", // nieuw, nalezen
    'c.shifts': "Dis-le à l’équipe suivante", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Une usine tourne souvent jour et nuit, avec des équipes qui se suivent. À la fin de ton service, un collègue prend ta place. Ne pars pas comme ça : attends que ton collègue soit là. Dis en quelques mots ce qui s’est passé : une panne, un produit qui n’était pas bon, quelque chose qui n’est pas fini. Beaucoup d’entreprises ont aussi une liste ou un écran pour ça. Un problème que tu ne transmets pas revient dans le service suivant, et alors personne ne sait pourquoi. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "La machine a eu une panne. Maintenant, elle marche de nouveau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Ton service est fini. Ton collègue a cinq minutes de retard. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Tu attends, et tu le dis au chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Tu rentres à la maison : ton service est fini.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Tu arrêtes la machine et tu pars.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Une machine en marche ne doit pas rester sans surveillance. Quand tu attends et que tu le signales, le travail continue en sécurité, et le chef d’équipe peut trouver une solution.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Dis ce que tu vois", // nieuw, nalezen
    'w.duizelig': "étourdi (la tête qui tourne)", // nieuw, nalezen
    'w.misselijk': "nauséeux (tu as envie de vomir)", // nieuw, nalezen
    'w.benauwd': "essoufflé (qui a du mal à respirer)", // nieuw, nalezen
    'w.koorts': "la fièvre", // nieuw, nalezen
    'w.verward': "confus (la personne ne sait plus où elle est)", // nieuw, nalezen
    'w.anders': "différent (pas comme d’habitude)", // nieuw, nalezen
    's.signals.1': "Madame a la tête qui tourne.", // nieuw, nalezen
    's.signals.2': "Monsieur ne mange pas aujourd’hui.", // nieuw, nalezen
    's.signals.3': "Tu peux venir voir ?", // nieuw, nalezen
    'c.signals.q': "Comment va monsieur Jansen ?", // nieuw, nalezen
    'c.signals.a': "Il est confus. C’est différent d’hier.", // nieuw, nalezen
    'c.signals': "Tu vois le résident tous les jours", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "C’est souvent toi qui vois le plus un résident. Donc tu remarques en premier quand quelque chose est différent : il mange moins, il a plus mal, il est confus, il respire mal. Tu n’as pas besoin de savoir ce que c’est. Dis ce que tu vois, et dis quand tu l’as vu. Dis-le à l’infirmière le jour même, et note-le si c’est ta tâche. Ça a l’air grave ? N’attends pas : appelle l’infirmière tout de suite. Mieux vaut une fois de trop qu’une fois pas assez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Madame ne mange pas et elle a la tête qui tourne. Ce n’est pas comme d’habitude.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Une résidente est silencieuse aujourd’hui et elle ne veut pas manger. D’habitude, elle parle beaucoup. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Tu dis à l’infirmière ce que tu vois, aujourd’hui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Tu attends quelques jours : ça va peut-être passer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Tu lui donnes un cachet de l’armoire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Un petit changement peut être le premier signe d’une maladie. Ce n’est pas toi qui décides ce que c’est : c’est l’infirmière. Mais elle peut agir seulement si tu le lui dis.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Aider quelqu’un à se lever", // nieuw, nalezen
    'w.tillift': "le lève-personne (une machine qui soulève une personne)", // nieuw, nalezen
    'w.rollator': "le déambulateur à roulettes", // nieuw, nalezen
    'w.bed': "le lit", // nieuw, nalezen
    'w.opstaan': "se lever, se mettre debout", // nieuw, nalezen
    'w.gaanzitten': "s’asseoir", // nieuw, nalezen
    'w.voorzichtig': "prudent, doucement", // nieuw, nalezen
    's.transfer.1': "Je vous aide à vous lever.", // nieuw, nalezen
    's.transfer.2': "Vous voulez vous asseoir un moment ?", // nieuw, nalezen
    's.transfer.3': "Je prends d’abord le lève-personne.", // nieuw, nalezen
    'c.transfer.q': "Tu peux sortir Madame du lit ?", // nieuw, nalezen
    'c.transfer.a': { m: "Pas seul. Je prends le lève-personne.", f: "Pas seule. Je prends le lève-personne.", x: "Pas sans aide. Je prends le lève-personne." }, // nieuw, nalezen
    'c.transfer': "D’abord dire, ensuite aider", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Avant de toucher un résident, dis ce que tu vas faire : “Ik help u nu met opstaan.” Alors le résident n’a pas peur, et il peut aider. Laisse le résident faire ce qu’il peut encore faire : comme ça, il reste fort. Ne soulève jamais une personne sans aide. Utilise les aides qui sont là, comme le lève-personne, et travaille comme on te l’a montré. On ne te l’a pas encore montré ? Demande d’abord. Ton dos doit tenir toute une vie de travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Je vous aide à vous lever maintenant. C’est bon pour vous ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Une résidente veut sortir du lit. Tu n’as pas encore appris à utiliser le lève-personne. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Tu demandes à un collègue qui connaît le lève-personne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Tu la soulèves toi-même : elle n’est pas lourde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Tu essaies le lève-personne : ça ne doit pas être difficile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Mal soulever une personne peut faire mal au résident et à ton dos. Demander à un collègue prend quelques minutes. Une chute peut prendre des mois.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Faire la vaisselle", // nieuw, nalezen
    'w.afwas': "la vaisselle", // nieuw, nalezen
    'w.vaatwasser': "le lave-vaisselle", // nieuw, nalezen
    'w.bord': "l’assiette", // nieuw, nalezen
    'w.glas': "le verre", // nieuw, nalezen
    'w.bestek': "les couverts (couteau, fourchette et cuillère)", // nieuw, nalezen
    'w.afdrogen': "essuyer (avec un torchon)", // nieuw, nalezen
    's.dishes.1': "Le lave-vaisselle a fini.", // nieuw, nalezen
    's.dishes.2': "Attention, un verre est cassé.", // nieuw, nalezen
    's.dishes.3': "Il n’y a plus de couverts propres.", // nieuw, nalezen
    'c.dishes.q': "Il reste des verres propres ?", // nieuw, nalezen
    'c.dishes.a': "Oui, je les apporte tout de suite.", // nieuw, nalezen
    'c.dishes': "Du verre cassé : dis-le tout de suite", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "Dans une cuisine, le verre casse. C’est normal, et personne n’est fâché pour ça. Mais dis-le tout de suite, fort et clair : “Glas!” Ne ramasse pas les morceaux à mains nues : utilise une balayette. Du verre est tombé près des aliments, ou dans les glaçons ? Alors il faut jeter ces aliments ou ces glaçons, en entier. Un petit morceau de verre dans un plat est très dangereux pour un client. Le verre va dans sa propre poubelle, pas dans un sac que quelqu’un soulève. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Attention, du verre ! Je le ramasse tout de suite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Un verre casse au-dessus des glaçons pour les boissons. Il y a beaucoup de monde. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Tu le dis, et tu jettes tous les glaçons.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Tu enlèves les morceaux que tu vois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Tu ne dis rien : il y a trop de travail maintenant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "On ne voit pas les petits morceaux de verre dans les glaçons. De nouveaux glaçons ne coûtent presque rien. Un client avec du verre dans sa boisson peut être gravement blessé.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Quand il y a beaucoup de monde", // nieuw, nalezen
    'w.heet': "très chaud, brûlant", // nieuw, nalezen
    'w.chef': "le chef (le patron de la cuisine)", // nieuw, nalezen
    'w.terras': "la terrasse (les tables dehors)", // nieuw, nalezen
    'w.tafel': "la table", // nieuw, nalezen
    'w.dienblad': "le plateau", // nieuw, nalezen
    'w.wachten': "attendre", // nieuw, nalezen
    's.rush.1': "Chaud ! Je passe derrière toi.", // nieuw, nalezen
    's.rush.2': "La table six attend les plats.", // nieuw, nalezen
    's.rush.3': "J’apporte ça à la terrasse.", // nieuw, nalezen
    'c.rush.q': "Tu peux faire la table quatre ?", // nieuw, nalezen
    'c.rush.a': "Oui, chef. J’arrive.", // nieuw, nalezen
    'c.rush': "Des mots courts quand il y a beaucoup de monde", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Quand il y a beaucoup de monde, les gens en cuisine parlent avec des mots courts : “Heet!”, “Achter!”, “Tafel zes!” Ce n’est pas impoli. C’est rapide et sûr : tout le monde sait où sont les casseroles chaudes et les couteaux. Crie toi-même “Heet!” ou “Achter!” quand tu passes derrière quelqu’un. Tu as entendu une commande ? Répète : “Ja, chef.” Alors le chef sait que tu as entendu. Quelqu’un t’a parlé sèchement pendant le coup de feu ? Souvent, c’est fini après le service. Ça reste désagréable ? Alors parles-en à un moment calme.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Derrière ! J’ai une casserole chaude.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Il y a beaucoup de monde. Le chef crie : “Tafel zes, nu!” Il ne dit pas s’il te plaît. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Tu dis “Ja, chef”, et tu le fais.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Tu t’arrêtes, et tu dis qu’il est impoli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Tu le fais, mais tu ne réponds rien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Pendant le coup de feu, parler court est normal, et ce n’est pas contre toi. Répéter montre que tu as entendu. Comme ça, la cuisine reste rapide et sûre.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Ta tournée", // nieuw, nalezen
    'w.kantoor': "le bureau (la pièce où on travaille)", // nieuw, nalezen
    'w.verdieping': "l’étage (le 1er ou le 2e étage d’un bâtiment)", // nieuw, nalezen
    'w.gang': "le couloir", // nieuw, nalezen
    'w.toiletpapier': "le papier toilette", // nieuw, nalezen
    'w.zeep': "le savon", // nieuw, nalezen
    'w.bijvullen': "remplir, remettre", // nieuw, nalezen
    's.rounds.1': "Je commence au deuxième étage.", // nieuw, nalezen
    's.rounds.2': "Il n’y a plus de papier toilette.", // nieuw, nalezen
    's.rounds.3': "Je remets du savon.", // nieuw, nalezen
    'c.rounds.q': "Tu as déjà fait le bureau trois ?", // nieuw, nalezen
    'c.rounds.a': "Non, quelqu’un y travaille encore.", // nieuw, nalezen
    'c.rounds': "Nettoyer là où des gens travaillent", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Souvent, tu nettoies pendant que d’autres personnes travaillent encore. Dis bonjour, et demande : “Mag ik hier even schoonmaken?” La plupart des gens disent oui. Quelqu’un est en réunion ou au téléphone ? Alors reviens plus tard. Ne déplace pas les papiers sur un bureau, et ne les lis pas : nettoie autour. Tu as un temps fixe pour ta tournée. Le temps est trop court pour bien faire le travail ? Ne saute pas des pièces sans rien dire. Dis à ton responsable ce que tu n’as pas pu faire, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Bonjour. Je peux nettoyer ici un moment ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Ta tournée prend plus de temps aujourd’hui : une pièce était très sale. Deux bureaux ne sont pas faits. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Tu dis à ton responsable lesquels, et pourquoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Tu rentres à la maison, et tu espères que personne ne le voit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Tu les fais très vite, sans les sols.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Un client qui trouve un bureau sale se plaint. Un responsable qui le sait peut l’expliquer, ou te donner plus de temps. Le dire, ce n’est pas un échec.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Les couleurs et les chiffons", // nieuw, nalezen
    'w.doek': "le chiffon (pour nettoyer)", // nieuw, nalezen
    'w.spons': "l’éponge", // nieuw, nalezen
    'w.rood': "rouge", // nieuw, nalezen
    'w.blauw': "bleu", // nieuw, nalezen
    'w.geel': "jaune", // nieuw, nalezen
    'w.groen': "vert", // nieuw, nalezen
    's.colours.1': "Le chiffon rouge est pour les toilettes.", // nieuw, nalezen
    's.colours.2': "Prends un chiffon propre.", // nieuw, nalezen
    's.colours.3': "Quelle couleur j’utilise ici ?", // nieuw, nalezen
    'c.colours.q': "Je peux utiliser ce chiffon pour le bureau ?", // nieuw, nalezen
    'c.colours.a': "Non, le rouge est seulement pour les toilettes.", // nieuw, nalezen
    'c.colours': "Chaque couleur a sa place", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Beaucoup d’entreprises de nettoyage travaillent avec des couleurs. Chaque couleur de chiffon, d’éponge et de seau est pour un seul endroit. Souvent, le rouge est pour les toilettes, et le bleu est pour les bureaux et les tables. Comme ça, la saleté des toilettes ne va pas sur un bureau ou dans une cuisine. Les couleurs peuvent être différentes dans chaque entreprise, alors demande le premier jour. Un chiffon est sale, ou il est tombé par terre ? Prends-en un propre. Les chiffons utilisés vont dans le sac à linge, pas de nouveau sur le chariot. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Ici, quelle couleur est pour les toilettes ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Tu n’as plus de chiffons bleus. Tu dois encore nettoyer trois bureaux. Tu as seulement des chiffons rouges. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Tu vas d’abord chercher de nouveaux chiffons bleus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Tu utilises un chiffon rouge : propre, c’est propre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Tu réutilises un seul chiffon bleu pour les trois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Un système de couleurs marche seulement quand tout le monde le suit toujours. Alors personne ne doit se demander où un chiffon est passé.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Aider un client", // nieuw, nalezen
    'w.aanbieding': "la promotion (moins cher pendant peu de temps)", // nieuw, nalezen
    'w.korting': "la réduction (tu paies moins)", // nieuw, nalezen
    'w.uitverkocht': "épuisé (il n’y en a plus)", // nieuw, nalezen
    'w.magazijn': "la réserve, l’entrepôt", // nieuw, nalezen
    'w.tas': "le sac", // nieuw, nalezen
    'w.bestellen': "commander", // nieuw, nalezen
    's.shophelp.1': "Malheureusement, il n’y en a plus.", // nieuw, nalezen
    's.shophelp.2': "Vous voulez un sac avec ça ?", // nieuw, nalezen
    's.shophelp.3': "Ce café est en promotion.", // nieuw, nalezen
    'c.shophelp.q': "Vous avez encore du lait ?", // nieuw, nalezen
    'c.shophelp.a': "Je vais regarder dans la réserve pour vous.", // nieuw, nalezen
    'c.shophelp': "“Je ne sais pas”, ce n’est pas la fin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Un client demande quelque chose et tu ne connais pas la réponse. Ce n’est pas grave : personne ne sait tout. Mais ne dis pas seulement “nee” ou “weet ik niet”, et ne t’en va pas. Dis : “Ik vraag het even voor u”, et va chercher un collègue. Un produit est épuisé ? Dis quand il revient, ou montre un produit qui lui ressemble. Regarde le client et dis bonjour, même quand tu es en train de remplir les rayons. Tu n’as pas compris la question ? Demande au client de la répéter, lentement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Je ne sais pas. Je vais demander pour vous.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Une cliente demande un produit. Tu ne connais pas le mot. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Tu dis : “Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Tu dis “nee”, et tu continues ton travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Tu montres un endroit au hasard, pour qu’elle s’en aille.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Ça ne dérange pas un client que tu débutes ou que tu apprennes encore le néerlandais. Ce qui dérange un client, c’est de ne pas recevoir d’aide. Aller chercher un collègue, c’est du bon service.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Les moments difficiles", // nieuw, nalezen
    'w.bedrijfsleider': "le gérant du magasin", // nieuw, nalezen
    'w.beveiliger': "l’agent de sécurité", // nieuw, nalezen
    'w.dief': "le voleur", // nieuw, nalezen
    'w.stelen': "voler (prendre sans payer)", // nieuw, nalezen
    'w.schreeuwen': "crier", // nieuw, nalezen
    'w.geldterug': "le remboursement (on te rend ton argent)", // nieuw, nalezen
    's.shoptrouble.1': "Je vais chercher le gérant.", // nieuw, nalezen
    's.shoptrouble.2': "Ne criez pas, s’il vous plaît.", // nieuw, nalezen
    's.shoptrouble.3': "Je crois que quelqu’un vole quelque chose.", // nieuw, nalezen
    'c.shoptrouble.q': "Je veux qu’on me rende mon argent maintenant !", // nieuw, nalezen
    'c.shoptrouble.a': "Je comprends. Je vais chercher mon collègue.", // nieuw, nalezen
    'c.shoptrouble': "Un client en colère ou un voleur : toi d’abord", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Parfois, un client se met en colère, ou tu vois quelqu’un voler. Ta sécurité passe d’abord, toujours. Avec un client en colère : reste calme, ne crie pas toi aussi, et va chercher le gérant. Tu n’as pas besoin de régler ça sans aide. Tu vois un voleur ? Ne cours pas derrière lui, ne le retiens pas, et ne bloque pas la porte. Regarde bien ce que tu vois, et dis-le tout de suite au gérant ou à l’agent de sécurité. Les choses, on peut les remplacer. Toi, non. Tu as eu peur après ? Parles-en avec ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Je vois quelqu’un qui met quelque chose dans son sac.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Un homme met une bouteille sous son manteau et marche vers la sortie. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Tu le dis au gérant ou à l’agent de sécurité.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Tu cours derrière lui et tu lui tiens le bras.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Tu te mets devant la porte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Un voleur qu’on arrête peut devenir violent. Le gérant et l’agent de sécurité savent quoi faire. Aucun produit ne vaut une blessure.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "S’occuper de la plante", // nieuw, nalezen
    'w.plantblad': "la feuille (d’une plante)", // nieuw, nalezen
    'w.stengel': "la tige", // nieuw, nalezen
    'w.bloem': "la fleur", // nieuw, nalezen
    'w.knippen': "couper (avec des ciseaux)", // nieuw, nalezen
    'w.tomaat': "la tomate", // nieuw, nalezen
    'w.rijp': "mûr (prêt à être cueilli)", // nieuw, nalezen
    's.plantcare.1': "Cette tomate n’est pas encore mûre.", // nieuw, nalezen
    's.plantcare.2': "Je coupe la feuille.", // nieuw, nalezen
    's.plantcare.3': "La tige est cassée.", // nieuw, nalezen
    'c.plantcare.q': "Je cueille quelles tomates ?", // nieuw, nalezen
    'c.plantcare.a': "Seulement les rouges. Les vertes ne sont pas encore mûres.", // nieuw, nalezen
    'c.plantcare': "Mains propres, plantes en bonne santé", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Les plantes aussi peuvent tomber malades. Un virus passe d’une plante à l’autre par les mains, les gants, les couteaux et les vêtements. Dans une serre, une seule plante malade peut vouloir dire que des milliers de plantes doivent partir. C’est pour ça qu’il y a des règles strictes à l’entrée : lave-toi les mains, porte les vêtements de travail de l’entreprise, et passe par le bac qui désinfecte les chaussures. Beaucoup de serres interdisent tes propres tomates, poivrons ou concombres dans ton repas. Tu vois une plante qui a l’air bizarre ? Ne la touche pas. Dis à ton responsable dans quelle rangée elle est. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "Il y a une plante malade dans la rangée douze.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Tu vois une plante avec des taches jaunes bizarres. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Tu la laisses, et tu le dis à ton responsable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Tu l’arraches et tu l’emportes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Tu coupes les feuilles qui ont des taches.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Quand tu touches une plante malade, le virus part avec toi vers les plantes suivantes. Ton responsable sait comment l’enlever sans danger.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Travailler dehors", // nieuw, nalezen
    'w.land': "le champ (où les plantes poussent dehors)", // nieuw, nalezen
    'w.regen': "la pluie", // nieuw, nalezen
    'w.zon': "le soleil", // nieuw, nalezen
    'w.laarzen': "les bottes", // nieuw, nalezen
    'w.regenpak': "la tenue de pluie (une veste et un pantalon contre la pluie)", // nieuw, nalezen
    'w.onweer': "l’orage", // nieuw, nalezen
    's.outdoors.1': "Il pleut. Je mets ma tenue de pluie.", // nieuw, nalezen
    's.outdoors.2': "Mes bottes sont mouillées.", // nieuw, nalezen
    's.outdoors.3': "Le soleil tape fort aujourd’hui.", // nieuw, nalezen
    'c.outdoors.q': "Un orage arrive. Qu’est-ce qu’on fait ?", // nieuw, nalezen
    'c.outdoors.a': "On arrête et on rentre.", // nieuw, nalezen
    'c.outdoors': "Soleil, pluie et orage", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Dehors, tu travailles par tous les temps. Au soleil : couvre ta tête et ta peau, mets de la crème solaire, et bois souvent de l’eau. Sous la pluie : porte ta tenue de pluie et tes bottes, et mets des vêtements secs pendant ta pause. L’humidité et le froid te rendent malade et te ralentissent. Il y a de l’orage ? Alors arrête et va à l’intérieur, ou dans une voiture ou une camionnette. Pas sous un arbre, et pas au milieu d’un champ. Tu as besoin de vêtements de pluie ou de bottes pour le travail ? Demande-les à ton employeur avant de les acheter toi-même.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Il va y avoir de l’orage. On rentre ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Tu es dans le champ. Tu entends le tonnerre tout près. Ta rangée est presque finie. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Tu arrêtes, et tu vas à l’intérieur ou dans la camionnette.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Tu finis d’abord vite la rangée.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Tu attends sous le grand arbre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "La foudre tombe sur le point le plus haut, et dans un champ plat, c’est toi. La rangée peut attendre un quart d’heure.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Le plan et la mesure", // nieuw, nalezen
    'w.tekening': "le plan, le dessin (il montre comment la pièce doit être)", // nieuw, nalezen
    'w.maat': "la mesure, la dimension", // nieuw, nalezen
    'w.millimeter': "le millimètre", // nieuw, nalezen
    'w.schuifmaat': "le pied à coulisse (il mesure très précisément)", // nieuw, nalezen
    'w.passen': "rentrer, aller (la pièce a la bonne taille)", // nieuw, nalezen
    'w.bout': "le boulon", // nieuw, nalezen
    's.drawing.1': "Quelle est la mesure sur le plan ?", // nieuw, nalezen
    's.drawing.2': "Cette pièce ne rentre pas.", // nieuw, nalezen
    's.drawing.3': "Elle est trop grande de deux millimètres.", // nieuw, nalezen
    'c.drawing.q': "Le boulon rentre ?", // nieuw, nalezen
    'c.drawing.a': "Non. Je le mesure encore une fois.", // nieuw, nalezen
    'c.drawing': "C’est le plan qui décide", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "Dans un atelier, tu fabriques ce que dit le plan, pas ce qui a l’air à peu près bon. Les mesures sont en millimètres, et un millimètre peut être de trop. Une pièce ne rentre pas ? Ne force pas, et n’agrandis pas le trou “juste un peu”. Mesure encore, et regarde le plan. Tu n’arrives pas à lire le plan, ou il manque une mesure ? Demande avant de commencer. Une question coûte une minute. Une mauvaise pièce coûte du matériel et des heures.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Je n’arrive pas à lire cette mesure. Tu peux regarder ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Une pièce ne rentre pas : elle est trop grande d’un millimètre. Avec un marteau, elle rentrerait. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Tu mesures encore, et tu demandes quoi faire.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Tu la fais rentrer avec le marteau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Tu meules un petit bout, et tu ne dis rien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Une pièce qui rentre en forçant peut casser plus tard, chez le client. Quand tu le signales, on peut trouver la cause.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "La soudure et le travail à chaud", // nieuw, nalezen
    'w.lassen': "souder (assembler du métal avec une très forte chaleur)", // nieuw, nalezen
    'w.laskap': "le masque de soudure", // nieuw, nalezen
    'w.rook': "la fumée", // nieuw, nalezen
    'w.afzuiging': "l’aspiration (elle enlève la fumée)", // nieuw, nalezen
    'w.afkoelen': "refroidir", // nieuw, nalezen
    'w.brandwond': "la brûlure (une blessure causée par la chaleur)", // nieuw, nalezen
    's.weld.1': "Je mets mon masque de soudure.", // nieuw, nalezen
    's.weld.2': "Allume l’aspiration.", // nieuw, nalezen
    's.weld.3': "Attention, le métal est encore chaud.", // nieuw, nalezen
    'c.weld.q': "Je peux déjà prendre ça ?", // nieuw, nalezen
    'c.weld.a': "Non, attends. Ça doit d’abord refroidir.", // nieuw, nalezen
    'c.weld': "Le métal chaud a l’air froid", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "La soudure fait une lumière très forte. Ne la regarde pas sans masque de soudure, même de loin : tes yeux peuvent brûler, et tu le sens seulement des heures plus tard. Un collègue soude près de toi ? Regarde ailleurs, ou mets-toi derrière l’écran de protection. Du métal qu’on vient de souder ou de meuler a l’air normal, mais il est très chaud. Ne le prends pas à mains nues. La fumée de soudure est mauvaise pour tes poumons : allume l’aspiration. Une brûlure ? Refroidis-la tout de suite avec de l’eau, pendant au moins dix minutes, et signale-la. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "C’est déjà refroidi ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Un collègue soude à côté de toi. Tu n’as pas de masque de soudure. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Tu regardes ailleurs, et tu te mets derrière l’écran de protection.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Tu regardes un moment : tu peux apprendre quelque chose.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Tu fermes les yeux à moitié.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "La lumière de la soudure brûle tes yeux, même de côté et de loin. Tu sens la douleur seulement plus tard, souvent la nuit.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Les pièces de la voiture", // nieuw, nalezen
    'w.motor': "le moteur", // nieuw, nalezen
    'w.motorkap': "le capot (le couvercle au-dessus du moteur)", // nieuw, nalezen
    'w.rem': "le frein", // nieuw, nalezen
    'w.lamp': "le phare, le feu (la lumière de la voiture)", // nieuw, nalezen
    'w.ruitenwisser': "l’essuie-glace", // nieuw, nalezen
    'w.stoel': "le siège, la chaise", // nieuw, nalezen
    's.carparts.1': "Ouvre le capot.", // nieuw, nalezen
    's.carparts.2': "Le phare avant gauche est cassé.", // nieuw, nalezen
    's.carparts.3': "Les freins font du bruit.", // nieuw, nalezen
    'c.carparts.q': "Qu’est-ce que tu entends ?", // nieuw, nalezen
    'c.carparts.a': "Le moteur fait un bruit bizarre.", // nieuw, nalezen
    'c.carparts': "La voiture est au client", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Une voiture dans le garage n’est pas à toi : elle est au client. Mets une housse sur le siège et sur le volant avant de monter, et travaille avec des mains propres à l’intérieur. Laisse le siège, les rétroviseurs et la radio comme ils étaient. Tu as dû déplacer le siège ? Remets-le en place. Ne touche pas aux affaires personnelles dans la voiture. Tu as fait une rayure ou une tache ? Dis-le tout de suite à ton responsable. Un client qui la trouve à la maison ne revient pas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': { m: "J’ai fait une rayure. Je suis désolé.", f: "J’ai fait une rayure. Je suis désolée.", x: "J’ai fait une rayure. Toutes mes excuses." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Tu fais une petite rayure sur la portière de la voiture d’un client. Personne ne l’a vu. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Tu le dis tout de suite à ton responsable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Tu ne dis rien : elle est très petite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Tu frottes avec un chiffon, et tu espères.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Tout le monde fait une erreur un jour. Un garage peut réparer une rayure, ou le dire honnêtement au client. Une rayure cachée fait perdre au garage sa bonne réputation.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Essence, gaz et courant", // nieuw, nalezen
    'w.krik': "le cric (il soulève un côté de la voiture)", // nieuw, nalezen
    'w.benzine': "l’essence", // nieuw, nalezen
    'w.elektrischeauto': "la voiture électrique", // nieuw, nalezen
    'w.oranje': "orange", // nieuw, nalezen
    'w.morsen': "renverser (faire tomber un liquide)", // nieuw, nalezen
    'w.lap': "le chiffon (un tissu pour le travail sale)", // nieuw, nalezen
    's.carsafe.1': "Je sens une odeur d’essence.", // nieuw, nalezen
    's.carsafe.2': "De l’huile a été renversée. Je prends un chiffon.", // nieuw, nalezen
    's.carsafe.3': "Je ne touche pas aux câbles orange.", // nieuw, nalezen
    'c.carsafe.q': "Je peux travailler sur cette voiture ?", // nieuw, nalezen
    'c.carsafe.a': "Pas encore. C’est une voiture électrique.", // nieuw, nalezen
    'c.carsafe': "Câbles orange et moteurs en marche", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Une voiture électrique ou hybride a une batterie avec un courant très fort. Les câbles de cette batterie sont orange. Ne les touche pas et ne les débranche pas : un mécanicien avec une formation spéciale doit d’abord mettre la voiture en sécurité. Il y a un panneau ou un cône près de la voiture ? Alors reste loin. Un moteur qui tourne à l’intérieur fait un gaz qu’on ne peut ni sentir ni voir, et il peut tuer. Donc : mets le tuyau sur le pot d’échappement, ou ouvre les portes. Tu sens une odeur d’essence ? Pas d’étincelles et pas de cigarette. Dis-le tout de suite à ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Cette voiture est déjà mise en sécurité ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Tu dois changer une roue sur une voiture électrique. Sous la voiture, tu vois un câble orange détaché. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Tu ne touches à rien, et tu vas chercher le mécanicien formé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Tu repousses le câble avec la main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Tu le repousses avec un chiffon sec.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "La batterie d’une voiture électrique a assez de courant pour tuer, même quand la voiture est éteinte. Seule une personne qui a la formation a le droit de toucher ces pièces.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Vérifier la camionnette", // nieuw, nalezen
    'w.schade': "le dégât", // nieuw, nalezen
    'w.deuk': "la bosse", // nieuw, nalezen
    'w.spiegel': "le rétroviseur, le miroir", // nieuw, nalezen
    'w.tanken': "faire le plein (mettre du carburant dans la camionnette)", // nieuw, nalezen
    'w.opladen': "recharger (une camionnette électrique, un téléphone)", // nieuw, nalezen
    'w.parkeren': "se garer", // nieuw, nalezen
    's.vancheck.1': "Il y a une bosse sur la portière.", // nieuw, nalezen
    's.vancheck.2': "Ce dégât était déjà là.", // nieuw, nalezen
    's.vancheck.3': "Je dois encore faire le plein d’abord.", // nieuw, nalezen
    'c.vancheck.q': "Tout va bien avec la camionnette de livraison ?", // nieuw, nalezen
    'c.vancheck.a': "Non, le rétroviseur est cassé.", // nieuw, nalezen
    'c.vancheck': "Regarde avant de rouler", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Fais le tour de la camionnette avant ta première tournée. Tu vois une bosse, une rayure ou un rétroviseur cassé ? Prends une photo, et signale-le avant de partir. Comme ça, tout le monde sait que le dégât était déjà là. Il s’est passé quelque chose pendant ta tournée ? Signale-le le jour même, même si c’est petit. Cacher un dégât donne de plus gros problèmes plus tard. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Il y a un dégât sur la camionnette de livraison. Voici une photo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Le matin, tu vois une nouvelle bosse sur la camionnette. Ce n’est pas toi qui l’as faite. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Tu prends une photo, et tu le signales avant de rouler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Tu ne dis rien : ce n’est pas ta bosse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Tu attends de voir si quelqu’un pose la question.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Quand tu le signales avant de rouler, personne ne peut penser que c’est toi. Une photo avec l’heure est claire pour tout le monde.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Les retards sur la route", // nieuw, nalezen
    'w.file': "le bouchon, l’embouteillage", // nieuw, nalezen
    'w.vertraging': "le retard (tu arrives plus tard que prévu)", // nieuw, nalezen
    'w.omleiding': "la déviation (une autre route, parce que la route est fermée)", // nieuw, nalezen
    'w.navigatie': "la navigation, le GPS (l’appli qui montre le chemin)", // nieuw, nalezen
    'w.planner': "le planificateur (la personne qui fait les tournées)", // nieuw, nalezen
    'w.retour': "le retour (un colis qui repart)", // nieuw, nalezen
    's.delay.1': "Je suis dans un bouchon.", // nieuw, nalezen
    's.delay.2': "J’ai une demi-heure de retard.", // nieuw, nalezen
    's.delay.3': "Ce colis repart en retour.", // nieuw, nalezen
    'c.delay.q': "Tu es où maintenant ?", // nieuw, nalezen
    'c.delay.a': "À la déviation. J’aurai dix minutes de retard.", // nieuw, nalezen
    'c.delay': "En retard ? Dis-le à temps", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Un bouchon ou une route fermée, ce n’est pas ta faute. Mais préviens le planificateur dès que tu sais que tu seras en retard. Alors le planificateur peut prévenir les clients, ou changer la tournée. Arrête-toi d’abord à un endroit sûr : n’appelle pas avec le téléphone en main quand tu conduis. Et ne roule pas plus vite pour rattraper le temps. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Je suis dans un bouchon. J’aurai une demi-heure de retard.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Une route est fermée. La déviation te coûte trente minutes. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Tu préviens le planificateur dès que tu peux t’arrêter en sécurité.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Tu roules plus vite pour rattraper le temps.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Tu ne dis rien : peut-être que personne ne le remarque.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Quand le planificateur le sait tôt, les clients sont prévenus et personne n’attend pour rien. Rouler plus vite est dangereux, et ça ne fait presque pas gagner de temps.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Les consignes", // nieuw, nalezen
    'l.putdown': "Pose-le là", // nieuw, nalezen
    'w.zetten': "mettre, poser (quelque chose qui tient debout : un carton, un seau)", // nieuw, nalezen
    'w.leggen': "poser, mettre à plat (quelque chose qui reste couché)", // nieuw, nalezen
    'w.brengen': "apporter, porter (à un endroit ou à une personne)", // nieuw, nalezen
    'w.geven': "donner", // nieuw, nalezen
    'w.vasthouden': "tenir", // nieuw, nalezen
    'w.loslaten': "lâcher", // nieuw, nalezen
    's.putdown.1': "Pose-le là.", // nieuw, nalezen
    's.putdown.2': "Apporte ça à la cantine.", // nieuw, nalezen
    's.putdown.3': "Tiens ça un moment.", // nieuw, nalezen
    'c.putdown.q': "Tu peux tenir ça un moment ?", // nieuw, nalezen
    'c.putdown.a': "Oui. Je dois le poser où ?", // nieuw, nalezen
    'c.putdown': "Dis que tu le tiens", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Tu portes quelque chose avec un collègue, ou un collègue te passe quelque chose de lourd ? Dis “Ik heb hem” quand tu le tiens bien. Comme ça, ton collègue sait qu’il peut lâcher sans danger. Tu veux lâcher toi-même ? Demande d’abord : “Heb je hem?” Et attends la réponse. C’est normal dans tous les lieux de travail. Ça évite que des choses tombent sur les pieds et les mains.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Je le tiens. Tu peux lâcher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Un collègue te passe un carton lourd. Tu ne le tiens pas encore bien. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Tu dis “wacht”, et tu le tiens mieux d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Tu ne dis rien : il le verra bien.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Tu le prends vite, pour qu’il n’attende pas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Ton collègue lâche quand il pense que tu le tiens. Un seul mot te donne le temps de bien le tenir.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Allumé et éteint, ouvert et fermé", // nieuw, nalezen
    'w.aanzetten': "allumer, mettre en marche", // nieuw, nalezen
    'w.opendoen': "ouvrir", // nieuw, nalezen
    'w.dichtdoen': "fermer", // nieuw, nalezen
    'w.drukken': "appuyer (sur un bouton)", // nieuw, nalezen
    'w.draaien': "tourner", // nieuw, nalezen
    'w.stoppen': "arrêter, s’arrêter", // nieuw, nalezen
    's.onoff.1': "Ferme la porte.", // nieuw, nalezen
    's.onoff.2': "Appuie sur le bouton.", // nieuw, nalezen
    's.onoff.3': "Stop ! Éteins-le.", // nieuw, nalezen
    'c.onoff.q': "La porte est fermée ?", // nieuw, nalezen
    'c.onoff.a': "Non. Je la ferme maintenant.", // nieuw, nalezen
    'c.onoff': "Stop, c’est stop", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Quelqu’un crie “Stop!” ? Arrête-toi tout de suite, même si tu ne sais pas pourquoi. Demande après. Ici, un mot court et fort, ce n’est pas de la colère : c’est comme ça que les collègues se protègent entre eux. Tu vois toi-même quelque chose de dangereux ? Crie “Stop!” toi aussi, même à quelqu’un qui travaille ici depuis des années. Personne ne trouve ça bizarre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Stop ! Attends un moment.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Tu allumes une machine. Un collègue crie “Stop!”. Tu ne vois pas de problème. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Tu t’arrêtes tout de suite, et tu demandes pourquoi après.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Tu continues : tu ne vois pas de problème.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Tu demandes d’abord pourquoi tu dois t’arrêter.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Ton collègue voit peut-être quelque chose que tu ne vois pas. D’abord s’arrêter, ensuite parler : comme ça, tout le monde reste en sécurité.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Pousser, tirer, remplir", // nieuw, nalezen
    'w.duwen': "pousser", // nieuw, nalezen
    'w.trekken': "tirer", // nieuw, nalezen
    'w.vullen': "remplir", // nieuw, nalezen
    'w.leegmaken': "vider", // nieuw, nalezen
    'w.schoonmaken': "nettoyer", // nieuw, nalezen
    'w.vol': "plein", // nieuw, nalezen
    's.fillempty.1': "Ne pousse pas, tire.", // nieuw, nalezen
    's.fillempty.2': "Celui-ci est plein. Vide-le.", // nieuw, nalezen
    's.fillempty.3': "Nettoie ça, s’il te plaît.", // nieuw, nalezen
    'c.fillempty.q': "Il est déjà plein ?", // nieuw, nalezen
    'c.fillempty.a': "Oui. Je le vide.", // nieuw, nalezen
    'c.fillempty': "Fini ? Dis-le", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Tu as fini une tâche ? Dis-le : “Ik ben klaar.” Et demande ce que tu peux faire ensuite. Attendre sans rien dire que quelqu’un te voie, ça peut donner l’impression que tu ne veux pas travailler, même si ce n’est pas vrai. Les collègues qui demandent la tâche suivante reçoivent souvent un travail plus intéressant après un certain temps. Tu veux apprendre quelque chose de nouveau ? Demande-le aussi : “Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "J’ai fini. Qu’est-ce que je peux faire d’autre ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Tu as fini ta tâche. Ton responsable est occupé avec autre chose. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Tu dis que tu as fini, et tu demandes la suite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Tu attends que ton responsable te voie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Tu prends une pause : ton travail est fini.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Un responsable ne peut pas tout voir. Quand tu dis que tu as fini, le travail continue, et tu montres que tu veux en faire plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "D’abord ceci, ensuite cela", // nieuw, nalezen
    'w.nu': "maintenant", // nieuw, nalezen
    'w.dan': "ensuite, puis", // nieuw, nalezen
    'w.altijd': "toujours", // nieuw, nalezen
    'w.genoeg': "assez", // nieuw, nalezen
    'w.meer': "plus", // nieuw, nalezen
    'w.alles': "tout", // nieuw, nalezen
    's.order.1': "D’abord ceci, ensuite cela.", // nieuw, nalezen
    's.order.2': "C’est assez.", // nieuw, nalezen
    's.order.3': "Fais toujours ça comme ça.", // nieuw, nalezen
    'c.order.q': "Tu peux faire ça maintenant ?", // nieuw, nalezen
    'c.order.a': "Oui. D’abord ceci, et ensuite ?", // nieuw, nalezen
    'c.order': "Beaucoup de tâches d’un coup ? Demande par quoi commencer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Parfois, on te donne trois tâches dans une seule phrase. C’est difficile à retenir, même pour les gens qui parlent bien néerlandais. Demande laquelle vient en premier : “Wat moet ik eerst doen?” Tu peux aussi noter les tâches, ou les compter sur tes doigts et les redire. Tu en as oublié une ? Retourne demander. C’est mieux que de deviner.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Ça fait beaucoup. Je dois faire quoi d’abord ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Ton responsable te donne trois tâches, très vite. Tu te souviens seulement de la première. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Tu demandes tout de suite à réentendre les tâches.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Tu fais la première, et tu espères te souvenir du reste.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Tu ne fais rien : tu ne connais pas les trois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Demander tout de suite prend dix secondes. Plus tard, ton responsable sera peut-être parti, et alors tu attends ou tu devines.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Carrelage, plâtre et peinture", // nieuw, nalezen
    'l.tiletools': "Les outils pour le carrelage", // nieuw, nalezen
    'w.lijmkam': "la spatule crantée (elle étale la colle à carrelage en sillons)", // nieuw, nalezen
    'w.troffel': "la truelle", // nieuw, nalezen
    'w.tegelsnijder': "le coupe-carreau", // nieuw, nalezen
    'w.nijptang': "la pince à rogner (pour enlever des petits morceaux d’un carreau)", // nieuw, nalezen
    'w.mixer': "le malaxeur (il mélange la colle ou le plâtre dans un seau)", // nieuw, nalezen
    'w.duimstok': "le mètre pliant", // nieuw, nalezen
    's.tiletools.1': "Passe-moi la spatule crantée une seconde.", // nieuw, nalezen
    's.tiletools.2': "Je coupe le carreau avec le coupe-carreau.", // nieuw, nalezen
    's.tiletools.3': "Mesure d’abord avec le mètre pliant.", // nieuw, nalezen
    'c.tiletools.q': "Où est le malaxeur ?", // nieuw, nalezen
    'c.tiletools.a': "Près du seau, à côté de la porte.", // nieuw, nalezen
    'c.tiletools': "Nettoie tes outils avant que la colle durcisse", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "La colle à carrelage et le plâtre durcissent vite, aussi sur tes outils. Alors nettoie tout de suite la spatule crantée, la truelle et le malaxeur dans un seau d’eau, aussi avant ta pause. La colle dure ne part plus, et une spatule crantée avec de la colle dure fait de mauvais sillons. Ne vide pas l’eau sale dans un évier ou dans une évacuation : ça se bouche. Demande où l’eau peut aller. Le malaxeur : tiens-le à deux mains, et démarre-le doucement. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Je nettoie vite la spatule crantée.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "C’est l’heure de ta pause. Ta spatule crantée est pleine de colle fraîche. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Tu la nettoies dans l’eau, puis tu prends ta pause.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Tu la laisses : tu la nettoies après le travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Tu la mets dans le seau de colle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "La colle à carrelage durcit aussi pendant ta pause. Une spatule crantée propre fait de bons sillons, et les carreaux collent bien. De la colle dure dessus, c’est beaucoup de travail, ou un nouvel outil.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Carreaux, colle et ligne d’axe", // nieuw, nalezen
    'w.tegel': "le carreau", // nieuw, nalezen
    'w.tegellijm': "la colle à carrelage", // nieuw, nalezen
    'w.tegelkruisje': "le croisillon (une petite croix entre les carreaux)", // nieuw, nalezen
    'w.hartlijn': "la ligne d’axe (on commence le carrelage à partir de cette ligne)", // nieuw, nalezen
    'w.tegelplaat': "la plaque d’exercice (une plaque pour s’entraîner à poser des carreaux)", // nieuw, nalezen
    'w.potlood': "le crayon", // nieuw, nalezen
    's.tiling.1': "La colle à carrelage est encore humide.", // nieuw, nalezen
    's.tiling.2': "Mets un croisillon entre les carreaux.", // nieuw, nalezen
    's.tiling.3': "Trace d’abord la ligne d’axe avec le crayon.", // nieuw, nalezen
    'c.tiling.q': "Je commence où, avec les carreaux ?", // nieuw, nalezen
    'c.tiling.a': "Au milieu, sur la ligne d’axe.", // nieuw, nalezen
    'c.tiling': "Commence à la ligne d’axe, avec peu de colle", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "On ne commence pas le carrelage dans un coin. Tu traces d’abord la ligne d’axe, avec un crayon et le niveau à bulle, et tu commences là. Comme ça, les carreaux coupés aux deux bouts ont la même taille. N’étale que la colle que tu peux couvrir de carreaux en peu de temps. La colle qui attend trop longtemps fait une peau sèche, et alors les carreaux ne collent pas bien. Mets un croisillon à chaque croisement, pour que tous les joints soient pareils. Vérifie souvent avec le niveau à bulle : un carreau de travers est facile à corriger maintenant, et difficile demain.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Je n’étale pas trop de colle à la fois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Après un long coup de téléphone, la colle sur le mur a une peau sèche. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Tu l’enlèves, et tu étales de la colle fraîche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Tu poses quand même les carreaux dessus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Tu la mouilles avec une éponge, et tu continues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "La colle avec une peau sèche ne tient pas bien un carreau. Plus tard, le carreau peut se décoller, et alors il faut refaire le travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Le plâtrage", // nieuw, nalezen
    'w.stucspaan': "la lisseuse (une plaque plate en acier pour lisser le plâtre)", // nieuw, nalezen
    'w.oplegspaan': "la planche à enduit (une planche plate où tu tiens le plâtre)", // nieuw, nalezen
    'w.spackmes': "le couteau à enduire (un couteau large et plat)", // nieuw, nalezen
    'w.rei': "la règle de plâtrier (une longue barre droite pour niveler le plâtre)", // nieuw, nalezen
    'w.sponsspaan': "la taloche éponge", // nieuw, nalezen
    'w.hoekprofiel': "la cornière d’angle (une bande de métal pour faire un coin bien droit)", // nieuw, nalezen
    's.plaster.1': "Mets d’abord la cornière sur le coin.", // nieuw, nalezen
    's.plaster.2': "Lisse le mur avec la lisseuse.", // nieuw, nalezen
    's.plaster.3': "Tire la règle sur le mur.", // nieuw, nalezen
    'c.plaster.q': "Le mur est déjà sec ?", // nieuw, nalezen
    'c.plaster.a': "Non, attends encore un jour.", // nieuw, nalezen
    'c.plaster': "Le plâtre a besoin de temps pour sécher", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Le plâtre frais reste mouillé longtemps. Un mur mouillé est plus foncé qu’un mur sec. Le peintre peut commencer seulement quand le mur est sec partout, et ça peut prendre des jours ou des semaines. Ne le sèche pas plus vite avec un chauffage : le plâtre peut alors se fissurer. Quelqu’un veut peindre trop tôt ? Dis que le mur n’est pas encore sec. Et avant de commencer, couvre le sol, les fenêtres et les prises : le plâtre est difficile à enlever.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Le mur est encore mouillé. Tu ne peux pas encore peindre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Le peintre veut commencer demain. Le nouveau plâtre a encore des taches foncées. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Tu dis au peintre : le mur n’est pas encore sec.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Tu mets un chauffage devant ce soir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Tu ne dis rien : le peintre va le voir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Des taches foncées veulent dire que le plâtre est encore mouillé. La peinture sur un mur mouillé peut se décoller, et un chauffage peut faire des fissures. Attendre coûte moins cher que tout refaire.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Briques, bois et fixation", // nieuw, nalezen
    'u.machines': "Machines et outils", // nieuw, nalezen
    'l.shapes': "Les formes", // nieuw, nalezen
    'w.vierkant': "le carré", // nieuw, nalezen
    'w.rechthoek': "le rectangle", // nieuw, nalezen
    'w.driehoek': "le triangle", // nieuw, nalezen
    'w.cirkel': "le cercle", // nieuw, nalezen
    'w.kubus': "le cube", // nieuw, nalezen
    'w.balk': "le pavé (une forme de boîte allongée)", // nieuw, nalezen
    's.shapes.1': "Le carreau est un carré.", // nieuw, nalezen
    's.shapes.2': "Cette pièce est un rectangle.", // nieuw, nalezen
    's.shapes.3': "Une brique a la forme d’un pavé.", // nieuw, nalezen
    'c.shapes.q': "C’est un carré ?", // nieuw, nalezen
    'c.shapes.a': "Non, un rectangle. Il est plus long que large.", // nieuw, nalezen
    'c.shapes': "Vérifie un rectangle avec deux lignes en diagonale", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Une pièce, un sol ou un cadre est souvent un rectangle. Mais est-ce que les coins sont vraiment droits ? Il y a un contrôle facile. Mesure d’un coin jusqu’au coin d’en face. Puis mesure entre les deux autres coins. Les deux longueurs sont pareilles ? Alors les coins sont droits. Pas pareilles ? Alors la forme penche un peu, et les carreaux ou le sol ne vont pas bien aller. Dis-le à ton responsable avant de commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Ces deux mesures ne sont pas pareilles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Tu mesures un sol d’un coin à l’autre, dans les deux sens. Une mesure est plus longue. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Tu le dis à ton responsable avant de commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Tu commences dans un coin, ça ira.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Tu mesures encore un seul côté.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Deux longueurs différentes veulent dire que les coins ne sont pas droits. Alors les carreaux ou les planches ne vont pas bien aller. C’est mieux de le savoir avant de commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Les angles et les formes rondes", // nieuw, nalezen
    'w.hoek': "l’angle", // nieuw, nalezen
    'w.graad': "le degré (°)", // nieuw, nalezen
    'w.geodriehoek': "l’équerre avec rapporteur", // nieuw, nalezen
    'w.boog': "l’arc, la courbe", // nieuw, nalezen
    'w.cilinder': "le cylindre", // nieuw, nalezen
    'w.parallellogram': "le parallélogramme", // nieuw, nalezen
    's.angles.1': "Cet angle fait quatre-vingt-dix degrés.", // nieuw, nalezen
    's.angles.2': "Mesure l’angle avec l’équerre.", // nieuw, nalezen
    's.angles.3': "Le tuyau a la forme d’un cylindre.", // nieuw, nalezen
    'c.angles.q': "Cet angle fait combien de degrés ?", // nieuw, nalezen
    'c.angles.a': "Quarante-cinq. La moitié d’un angle droit.", // nieuw, nalezen
    'c.angles': "Vérifie un grand coin avec 3, 4 et 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Sur un chantier, tu vérifies souvent un angle droit : un mur sur un sol, un coin d’une pièce. Un petit coin, tu le vérifies avec une équerre. Pour un grand coin, il y a une vieille astuce. Mesure 3 mètres le long d’un côté et 4 mètres le long de l’autre côté, et fais une marque aux deux. Il y a exactement 5 mètres d’une marque à l’autre ? Alors l’angle fait 90 degrés. Plus petit, ça marche aussi : 30, 40 et 50 centimètres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Cet angle n’est pas droit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Tu dois vérifier un grand coin d’un nouveau mur. Ton équerre est beaucoup trop petite. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Tu mesures 3, 4 et 5 mètres.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Tu regardes de loin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Tu prends quand même la petite équerre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Avec 3, 4 et 5, tu vérifies exactement un grand coin, avec seulement un mètre ruban. À l’œil, un coin peut avoir l’air droit et être quand même faux.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Longueur, surface et volume", // nieuw, nalezen
    'w.lengte': "la longueur", // nieuw, nalezen
    'w.breedte': "la largeur", // nieuw, nalezen
    'w.hoogte': "la hauteur", // nieuw, nalezen
    'w.oppervlakte': "la surface (la longueur fois la largeur, en mètres carrés)", // nieuw, nalezen
    'w.inhoud': "le volume (la longueur fois la largeur fois la hauteur)", // nieuw, nalezen
    'w.centimeter': "le centimètre", // nieuw, nalezen
    's.size.1': "La surface, c’est la longueur fois la largeur.", // nieuw, nalezen
    's.size.2': "Le volume, c’est la longueur fois la largeur fois la hauteur.", // nieuw, nalezen
    's.size.3': "Dix millimètres, c’est un centimètre.", // nieuw, nalezen
    'c.size.q': "Le sol fait combien de mètres carrés ?", // nieuw, nalezen
    'c.size.a': "Quatre mètres sur cinq, donc vingt mètres carrés.", // nieuw, nalezen
    'c.size': "Calcule ce qu’il te faut, puis ajoute un peu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Combien de carreaux, combien de peinture, combien de sable ? Tu le calcules avec la surface ou le volume. La surface : la longueur fois la largeur, en mètres carrés. Le volume : la longueur fois la largeur fois la hauteur, en mètres cubes. Mesure tout dans la même unité : tout en mètres, ou tout en centimètres. Note les mesures, ne les garde pas dans ta tête. Puis ajoute un peu en plus, pour les morceaux coupés et pour les erreurs. Tu as un doute ? Demande à un collègue de vérifier ton calcul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Je note les mesures.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Tu as mesuré le sol. Tu dois commander les carreaux aujourd’hui. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Tu calcules la surface, et tu ajoutes un peu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Tu commandes juste la surface, pas un carreau de plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Tu devines : tu as vu le sol.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Tu coupes toujours des carreaux, et certains cassent. Avec un peu en plus, tu n’as pas besoin d’arrêter au milieu pour recommander.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "La peinture", // nieuw, nalezen
    'w.verf': "la peinture", // nieuw, nalezen
    'w.kwast': "la brosse (un pinceau large)", // nieuw, nalezen
    'w.penseel': "le petit pinceau (pour les coins et les bords)", // nieuw, nalezen
    'w.roerstok': "le bâton mélangeur", // nieuw, nalezen
    'w.tape': "le ruban de masquage", // nieuw, nalezen
    'w.strijkvaatje': "le pot à peinture (un petit pot que tu tiens en peignant)", // nieuw, nalezen
    's.paint.1': "Mélange d’abord bien la peinture.", // nieuw, nalezen
    's.paint.2': "Masque le bord avec du ruban.", // nieuw, nalezen
    's.paint.3': "Mets un peu de peinture dans le pot à peinture.", // nieuw, nalezen
    'c.paint.q': "Je prends quel pinceau ?", // nieuw, nalezen
    'c.paint.a': "Le large pour le mur, le petit pinceau pour les coins.", // nieuw, nalezen
    'c.paint': "Mélange bien, et peins de haut en bas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "La peinture qui n’a pas bougé pendant un moment est épaisse au fond du pot. Alors mélange-la d’abord bien, avec un bâton mélangeur, jusqu’à ce que la couleur soit pareille partout. Ne peins pas dans le grand pot : mets un peu de peinture dans le pot à peinture, et referme le grand pot. Comme ça, la peinture reste bonne. Peins de haut en bas : les coulures tombent sur de la peinture fraîche, et tu peux encore les enlever avec le pinceau. Prends la brosse large pour le mur et le petit pinceau pour les coins. À la fin, nettoie tout de suite les pinceaux.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Je mélange d’abord bien la peinture.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Tu ouvres un vieux pot de peinture. En haut, elle est liquide, en bas, épaisse. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Tu la mélanges d’abord bien, avec le bâton.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Tu peins avec la peinture liquide du haut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Tu ajoutes de l’eau jusqu’à ce qu’elle soit liquide partout.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Une partie de la couleur est au fond du pot. Sans mélanger, le mur a des taches et des traînées.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Se préparer à peindre", // nieuw, nalezen
    'w.plamuurmes': "le couteau à reboucher (pour boucher les trous)", // nieuw, nalezen
    'w.schuurpapier': "le papier de verre", // nieuw, nalezen
    'w.verfkrabber': "le grattoir à peinture", // nieuw, nalezen
    'w.stoffertje': "la balayette (pour balayer la poussière)", // nieuw, nalezen
    'w.schuren': "poncer", // nieuw, nalezen
    'w.afplakken': "masquer (couvrir un bord avec du ruban)", // nieuw, nalezen
    's.prep.1': "Gratte d’abord la vieille peinture.", // nieuw, nalezen
    's.prep.2': "Ponce le bois pour qu’il soit lisse.", // nieuw, nalezen
    's.prep.3': "Enlève la poussière avec la balayette.", // nieuw, nalezen
    'c.prep.q': "Je peux déjà peindre ?", // nieuw, nalezen
    'c.prep.a': "Non, d’abord poncer et boucher le trou.", // nieuw, nalezen
    'c.prep': "Une bonne peinture commence avant la peinture", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "La peinture ne tient pas bien sur la saleté, la poussière ou la vieille peinture qui se décolle. Alors gratte d’abord la peinture qui se décolle avec le grattoir. Bouche les trous avec de l’enduit et le couteau à reboucher, et laisse sécher l’enduit. Puis ponce pour que ce soit lisse. Après le ponçage, enlève la poussière avec la balayette, aussi sur les bords. Pour finir, masque ce qui doit rester propre, comme les fenêtres et les prises. Le ponçage fait de la poussière fine : porte un masque anti-poussière, et demande lequel. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "D’abord poncer, ensuite peindre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Tu as poncé la porte. Il y a encore de la poussière dessus. Ton collègue veut peindre maintenant. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Tu enlèves d’abord la poussière, avec la balayette.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Tu le laisses peindre : la peinture couvre la poussière.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Tu enlèves la poussière avec ta main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "La peinture sur de la poussière ne tient pas bien. Plus tard, elle part en morceaux, et alors il faut refaire tout le travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "La maçonnerie", // nieuw, nalezen
    'w.speciekuip': "l’auge à mortier", // nieuw, nalezen
    'w.metseltroffel': "la truelle de maçon", // nieuw, nalezen
    'w.baksteen': "la brique", // nieuw, nalezen
    'w.cement': "le ciment", // nieuw, nalezen
    'w.voegijzer': "le fer à joint (pour lisser les joints entre les briques)", // nieuw, nalezen
    'w.handveger': "la brosse à main", // nieuw, nalezen
    's.brick.1': "Il reste du ciment dans l’auge à mortier.", // nieuw, nalezen
    's.brick.2': "Lisse le joint avec le fer à joint.", // nieuw, nalezen
    's.brick.3': "Nettoie le mur avec la brosse à main.", // nieuw, nalezen
    'c.brick.q': "Il te reste combien de briques ?", // nieuw, nalezen
    'c.brick.a': "Encore une palette. Assez pour aujourd’hui.", // nieuw, nalezen
    'c.brick': "Garde le mur propre pendant le travail", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Le mortier est mouillé quand tu poses les briques, et il durcit en quelques heures. Alors travaille proprement. Enlève tout de suite avec la truelle le mortier qui sort du joint. Lisse les joints avec le fer à joint quand le mortier est un peu ferme, pas quand il est encore mouillé. Puis brosse le mur avec la brosse à main. Le mortier dur sur le devant d’une brique est très difficile à enlever. À la fin de la journée, couvre le haut du mur, pour que la pluie n’enlève pas le mortier.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Je lisse les joints.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "À la fin de la journée, il y a du mortier sur le devant des briques. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Tu l’enlèves à la brosse maintenant, avant qu’il durcisse.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Tu le laisses : tu nettoies la semaine prochaine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Tu laves le mur avec beaucoup d’eau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Le mortier frais part facilement avec une brosse. Le mortier dur reste sur la brique, et alors le mur n’est pas beau.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Un mur droit", // nieuw, nalezen
    'w.metseltouw': "le cordeau de maçon (une ficelle pour faire un rang droit)", // nieuw, nalezen
    'w.klos': "le taquet (il tient le cordeau au coin)", // nieuw, nalezen
    'w.lagenmaatlat': "la règle de rangs (elle montre la hauteur de chaque rang)", // nieuw, nalezen
    'w.profiel': "le profil d’angle (un poteau droit au bout du mur)", // nieuw, nalezen
    'w.kop': "la boutisse (le petit bout d’une brique)", // nieuw, nalezen
    'w.strek': "la panneresse (le long côté d’une brique)", // nieuw, nalezen
    's.wall.1': "Tends bien le cordeau de maçon.", // nieuw, nalezen
    's.wall.2': "Le profil d’angle doit être bien droit.", // nieuw, nalezen
    's.wall.3': "Pose la brique avec le long côté vers l’extérieur.", // nieuw, nalezen
    'c.wall.q': "Ce rang doit être à quelle hauteur ?", // nieuw, nalezen
    'c.wall.a': "Regarde sur la règle de rangs.", // nieuw, nalezen
    'c.wall': "Le cordeau garde le mur droit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Un maçon ne construit pas à l’œil. D’abord, les profils d’angle sont bien droits aux deux bouts du mur. Entre eux, tu tends bien le cordeau, à la hauteur du rang suivant. Pose chaque brique le long du cordeau, mais ne pousse pas le cordeau. La règle de rangs montre la hauteur de chaque rang. Vérifie souvent avec le niveau à bulle. Une brique de travers est facile à corriger quand le mortier est mouillé, et très difficile demain.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Le cordeau est bien tendu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Le cordeau est lâche et pend un peu au milieu. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Tu le tends d’abord bien, puis tu continues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Tu poses quand même les briques dessous.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Tu poses les briques à l’œil.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Un cordeau lâche pend au milieu, alors le rang pend aussi. Un cordeau bien tendu donne un rang droit.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Travailler le bois", // nieuw, nalezen
    'w.handzaag': "la scie égoïne", // nieuw, nalezen
    'w.kapzaag': "la scie à dos (une petite scie avec un dos rigide)", // nieuw, nalezen
    'w.houtbeitel': "le ciseau à bois", // nieuw, nalezen
    'w.handschaaf': "le rabot", // nieuw, nalezen
    'w.timmermanshamer': "le marteau de charpentier", // nieuw, nalezen
    'w.houtenhamer': "le maillet (un marteau en bois)", // nieuw, nalezen
    's.wood.1': "Scie la planche à la bonne mesure.", // nieuw, nalezen
    's.wood.2': "Rabote le bord pour qu’il soit lisse.", // nieuw, nalezen
    's.wood.3': "Tape sur le ciseau avec le maillet.", // nieuw, nalezen
    'c.wood.q': "J’ai besoin de quelle scie ?", // nieuw, nalezen
    'c.wood.a': "La scie à dos, pour ce petit morceau.", // nieuw, nalezen
    'c.wood': "Trop court, on ne peut plus réparer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Un bois scié trop court ne redevient pas long. Alors mesure deux fois, et trace le trait avant de scier. Scie à côté du trait, du côté du morceau dont tu n’as pas besoin. Tiens le bois immobile : sur un établi ou avec un serre-joint, pas sur ton genou. Laisse la scie faire le travail, avec des mouvements longs et calmes. Pousse un ciseau loin de ton corps et de ton autre main. Et garde le ciseau et le rabot bien affûtés : un outil émoussé glisse plus facilement.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Je le mesure encore une fois.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Tu dois scier une planche à la bonne mesure. Tu l’as mesurée une fois, vite. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Tu mesures encore, puis tu traces le trait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Tu scies maintenant : c’est sûrement bon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Tu scies à l’œil, sans trait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Trop long, tu peux encore scier. Trop court, tu ne peux pas réparer. Mesurer encore prend une minute ; une nouvelle planche, beaucoup plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Tracer", // nieuw, nalezen
    'w.winkelhaak': "l’équerre (elle montre un angle droit)", // nieuw, nalezen
    'w.verstekhaak': "l’équerre à onglet (45 degrés)", // nieuw, nalezen
    'w.zwaaihaak': "la fausse équerre (tu règles l’angle toi-même)", // nieuw, nalezen
    'w.kruishout': "le trusquin (il trace un trait le long du bord)", // nieuw, nalezen
    'w.passer': "le compas (pour tracer un cercle)", // nieuw, nalezen
    'w.aftekenen': "tracer (dessiner où tu vas couper)", // nieuw, nalezen
    's.square.1': "Trace le trait avec l’équerre.", // nieuw, nalezen
    's.square.2': "Règle la fausse équerre sur le bon angle.", // nieuw, nalezen
    's.square.3': "Trace un cercle avec le compas.", // nieuw, nalezen
    'c.square.q': "L’angle est droit ?", // nieuw, nalezen
    'c.square.a': "Oui, l’équerre va exactement.", // nieuw, nalezen
    'c.square': "Trace à partir d’un seul bord droit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Avant de scier ou de percer, tu traces où. Prends un crayon bien taillé : un trait épais n’est pas précis. Choisis un bord droit du bois, et mesure tout à partir de ce bord. Tiens la partie épaisse de l’équerre bien contre ce bord, et trace le trait le long de l’acier. Fais une petite croix sur le morceau que tu ne vas pas utiliser. Ensuite, tu scies à côté du trait, du côté de la croix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Je le trace d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Ton crayon n’est pas taillé et fait un trait épais. Tu veux tracer sur une planche. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Tu tailles d’abord le crayon, puis tu traces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Tu traces quand même le trait, ça va.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Tu fais une marque avec ton ongle.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Un trait épais fait quelques millimètres de large. Alors tu ne sais pas où scier, et le morceau n’est pas précis.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Perceuses et vis", // nieuw, nalezen
    'w.accuboor': "la perceuse sans fil", // nieuw, nalezen
    'w.boormachine': "la perceuse électrique (avec un câble)", // nieuw, nalezen
    'w.bitje': "l’embout de vissage", // nieuw, nalezen
    'w.plug': "la cheville", // nieuw, nalezen
    'w.schroevendraaier': "le tournevis", // nieuw, nalezen
    'w.spijker': "le clou", // nieuw, nalezen
    's.screw.1': "Perce un trou et mets une cheville dedans.", // nieuw, nalezen
    's.screw.2': "Quel embout va avec cette vis ?", // nieuw, nalezen
    's.screw.3': "Enfonce le clou dans le bois.", // nieuw, nalezen
    'c.screw.q': "Où est la perceuse sans fil ?", // nieuw, nalezen
    'c.screw.a': "Sur le chargeur, elle est presque pleine.", // nieuw, nalezen
    'c.screw': "Regarde avant de percer", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Avant de percer dans un mur, pense à ce qu’il y a derrière. Les tuyaux et les câbles partent souvent tout droit vers le haut, vers le bas ou sur le côté depuis une prise ou un interrupteur. Demande où ils sont, ou vérifie avec un détecteur. Choisis un foret de la même taille que la cheville, et perce le trou un peu plus profond que la cheville. Prends le bon embout pour la vis : un mauvais embout glisse et abîme la tête de la vis. Porte des lunettes de sécurité quand tu perces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Je peux percer ici ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Tu dois percer un trou juste au-dessus d’une prise. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Tu demandes d’abord où passe le câble.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Tu perces : il n’y a jamais de câble.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Tu perces doucement, comme ça c’est sans danger.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Un câble monte souvent tout droit depuis une prise. Percer dedans est dangereux, et la réparation demande beaucoup de travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Fixer des choses", // nieuw, nalezen
    'w.bevestigen': "fixer (attacher solidement quelque chose à un mur)", // nieuw, nalezen
    'w.vastzetten': "serrer (tourner jusqu’à ce que ce soit serré)", // nieuw, nalezen
    'w.lijmen': "coller", // nieuw, nalezen
    'w.inbussleutel': "la clé Allen (clé hexagonale)", // nieuw, nalezen
    'w.kruisschroevendraaier': "le tournevis cruciforme (bout en croix)", // nieuw, nalezen
    'w.platteschroevendraaier': "le tournevis plat", // nieuw, nalezen
    's.fix.1': "Fixe l’étagère au mur.", // nieuw, nalezen
    's.fix.2': "Serre le boulon avec la clé Allen.", // nieuw, nalezen
    's.fix.3': "Prends le tournevis plat, pas le cruciforme.", // nieuw, nalezen
    'c.fix.q': "Comment je fixe cette étagère ?", // nieuw, nalezen
    'c.fix.a': "Avec deux chevilles et deux vis.", // nieuw, nalezen
    'c.fix': "Serré, mais pas trop", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Une vis ou un boulon doit être serré, mais pas trop. Tu tournes trop fort, et le filetage casse ou le bois se fend. Tourne jusqu’à ce que ça ne bouge plus, puis arrête. Sur une perceuse sans fil, tourne d’abord la bague avec les chiffres sur un petit chiffre. Une étagère au mur a besoin de chevilles qui vont avec le mur : la pierre a besoin d’autres chevilles qu’une cloison fine. La colle a besoin de temps : presse les pièces ensemble, tiens-les avec un serre-joint, et attends que la colle soit sèche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "L’étagère est bien fixée ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Tu as collé deux morceaux de bois. Ton collègue veut l’utiliser tout de suite. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Tu dis : la colle doit d’abord sécher.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Tu le laisses l’utiliser : la colle sèche vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Tu le tiens dans tes mains pendant une minute.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "La colle mouillée ne tient pas encore. Si on l’utilise trop tôt, les pièces se détachent. Alors il faut tout recommencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "À la machine", // nieuw, nalezen
    'w.bedieningspaneel': "le panneau de commande (les boutons et l’écran d’une machine)", // nieuw, nalezen
    'w.startknop': "le bouton de démarrage (vert)", // nieuw, nalezen
    'w.hendel': "le levier", // nieuw, nalezen
    'w.afscherming': "le carter de protection (un couvercle sur les pièces qui bougent)", // nieuw, nalezen
    'w.sensor': "le capteur (il voit si quelque chose est là)", // nieuw, nalezen
    'w.signaallamp': "le voyant lumineux (des lumières de couleur en haut d’une machine)", // nieuw, nalezen
    's.atmachine.1': "Appuie sur le bouton de démarrage vert.", // nieuw, nalezen
    's.atmachine.2': "Le voyant est rouge. Il y a une panne.", // nieuw, nalezen
    's.atmachine.3': "N’enlève jamais le carter de protection.", // nieuw, nalezen
    'c.atmachine.q': "Pourquoi la machine s’arrête tout le temps ?", // nieuw, nalezen
    'c.atmachine.a': "Le capteur ne voit pas bien le carton.", // nieuw, nalezen
    'c.atmachine': "Le carter de protection reste en place", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Les pièces qui bougent dans une machine peuvent attraper une main, une manche ou des cheveux en moins d’une seconde. Le carter de protection est là pour ça. Ne l’enlève jamais, et ne passe jamais la main derrière quand la machine tourne. Un carter ou un capteur ne marche pas ? Alors la machine n’est pas sûre : arrête-la et dis-le à ton chef d’équipe. Quelque chose est coincé ? Arrête d’abord la machine, et fais en sorte que personne ne puisse la démarrer pendant que tu travailles. La façon de faire change d’une entreprise à l’autre : demande qu’on t’explique avant de commencer. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Le carter de protection est cassé.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Un carton est coincé dans la machine, juste derrière le carter de protection. La machine tourne. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Tu arrêtes d’abord la machine, puis tu vas chercher de l’aide.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Tu passes vite la main et tu tires le carton.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Tu ouvres le carter pendant que la machine tourne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Une machine qui tourne peut attraper ta main avant que tu puisses réagir. L’arrêter prend un instant ; une main blessée, des mois.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Mesurer et contrôler", // nieuw, nalezen
    'w.weegschaal': "la balance", // nieuw, nalezen
    'w.meetklok': "le comparateur (il mesure de très petites différences)", // nieuw, nalezen
    'w.loep': "la loupe", // nieuw, nalezen
    'w.monster': "l’échantillon (un produit que tu sors pour le contrôler)", // nieuw, nalezen
    'w.afkeurbak': "le bac de rebut (pour les produits qui ne sont pas bons)", // nieuw, nalezen
    'w.teller': "le compteur (il compte les produits)", // nieuw, nalezen
    's.inspect.1': "Mets le produit sur la balance.", // nieuw, nalezen
    's.inspect.2': "Ce produit est abîmé. Il va dans le bac de rebut.", // nieuw, nalezen
    's.inspect.3': "Je regarde l’étiquette avec la loupe.", // nieuw, nalezen
    'c.inspect.q': "Je prends un échantillon tous les combien ?", // nieuw, nalezen
    'c.inspect.a': "Un par heure. Note-le sur la liste.", // nieuw, nalezen
    'c.inspect': "Note ce que tu contrôles", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "Dans une usine, tu contrôles les produits pendant le travail : tu les pèses, tu les mesures, ou tu les regardes de près. Note chaque contrôle tout de suite sur la liste, avec l’heure. Pas plus tard, de mémoire. Un produit n’est pas bon ? Mets-le dans le bac de rebut et regarde bien les suivants. D’autres produits ne sont pas bons ? Alors il y a un problème avec la machine. Dis-le tout de suite à ton chef d’équipe. Un problème trouvé tôt évite de perdre beaucoup de produits. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "D’autres produits ne sont pas bons.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "La balance montre que trois produits de suite sont trop légers. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Tu le dis tout de suite à ton chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Tu les remets sur la chaîne.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Tu ne dis rien : ça arrive.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Trois mauvais produits de suite montrent un problème dans la machine. Plus vite tu le dis, moins on perd de produits.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "L’emballage", // nieuw, nalezen
    'w.verpakking': "l’emballage", // nieuw, nalezen
    'w.krimpfolie': "le film rétractable (un film plastique qui se resserre avec la chaleur)", // nieuw, nalezen
    'w.sealmachine': "la soudeuse (elle ferme un emballage avec la chaleur)", // nieuw, nalezen
    'w.vulmateriaal': "le matériau de calage (des coussins d’air ou du papier dans un carton)", // nieuw, nalezen
    'w.afbreekmes': "le cutter (à lame sécable)", // nieuw, nalezen
    'w.tapepistool': "le dévidoir de ruban adhésif", // nieuw, nalezen
    's.packing.1': "Mets du matériau de calage dans le carton.", // nieuw, nalezen
    's.packing.2': "Ferme le carton avec le dévidoir de ruban adhésif.", // nieuw, nalezen
    's.packing.3': "La soudeuse est chaude. Attention !", // nieuw, nalezen
    'c.packing.q': "Combien de produits vont dans un carton ?", // nieuw, nalezen
    'c.packing.a': "Douze. C’est écrit sur la liste.", // nieuw, nalezen
    'c.packing': "Coupe loin de ton corps", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Emballer, c’est un travail rapide, et un cutter coupe très bien. Coupe toujours loin de ton corps et loin de ton autre main. Rentre la lame après chaque coupe, aussi quand tu poses le cutter un moment. Casse un bout de lame émoussé avec prudence, et jette-le dans la boîte pour les vieilles lames, pas dans la poubelle normale. La soudeuse et le pistolet à chaleur pour le film rétractable deviennent très chauds : ne touche pas les parties chaudes. Et vérifie chaque carton : le bon produit, le bon nombre, et l’étiquette bien droite. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Je rentre d’abord la lame.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Tu poses le cutter sur la table un moment. La lame est encore sortie. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Tu rentres d’abord la lame.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Tu le laisses : tu en as encore besoin bientôt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Tu le mets comme ça dans ta poche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Une lame sortie sur une table ou dans une poche peut te couper, ou couper un collègue. La rentrer prend une seconde.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "L’entretien", // nieuw, nalezen
    'w.persluchtpistool': "la soufflette (à air comprimé)", // nieuw, nalezen
    'w.steeksleutel': "la clé plate", // nieuw, nalezen
    'w.oliekannetje': "la burette d’huile", // nieuw, nalezen
    'w.smeerpistool': "la pompe à graisse", // nieuw, nalezen
    'w.lekbak': "le bac de rétention (il récupère l’huile qui fuit)", // nieuw, nalezen
    'w.poetsdoek': "le chiffon", // nieuw, nalezen
    's.upkeep.1': "Il y a une fuite d’huile. Mets le bac de rétention dessous.", // nieuw, nalezen
    's.upkeep.2': "Essuie l’huile avec un chiffon.", // nieuw, nalezen
    's.upkeep.3': "Ne dirige jamais la soufflette vers quelqu’un.", // nieuw, nalezen
    'c.upkeep.q': "Quand est-ce qu’on graisse la machine ?", // nieuw, nalezen
    'c.upkeep.a': "Tous les lundis, avant le premier service.", // nieuw, nalezen
    'c.upkeep': "Une machine propre montre ses problèmes", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Le petit entretien fait souvent partie du travail : essuyer, huiler et graisser. Fais-le seulement quand la machine est éteinte, et quand tu as appris comment faire. Une machine propre est facile à contrôler : tu vois tout de suite une fuite ou une pièce desserrée. L’huile par terre, ça glisse. Mets un bac de rétention sous une fuite, essuie le sol, et dis-le à ton chef d’équipe. Jette les chiffons pleins d’huile dans la poubelle spéciale. Ne dirige jamais une soufflette vers une personne, et ne nettoie jamais tes vêtements ou ta peau avec. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "La machine perd de l’huile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Tu vois une petite flaque d’huile sous la machine. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Tu mets un bac de rétention dessous, et tu le signales.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Tu laisses : c’est juste un peu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Tu mets du papier dessus, et tu continues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Une fuite devient plus grande, et l’huile par terre fait glisser les gens. Trouvée tôt, c’est une petite réparation.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Électricité, tuyaux et métal", // nieuw, nalezen
    'l.wiring': "Le câblage", // nieuw, nalezen
    'w.draad': "le fil (un fil, à l’intérieur d’un câble)", // nieuw, nalezen
    'w.stopcontact': "la prise de courant (dans le mur)", // nieuw, nalezen
    'w.schakelaar': "l’interrupteur (pour la lumière)", // nieuw, nalezen
    'w.lasklem': "le connecteur à levier (il relie des fils)", // nieuw, nalezen
    'w.striptang': "la pince à dénuder", // nieuw, nalezen
    'w.kabelgoot': "la goulotte (un canal pour les câbles)", // nieuw, nalezen
    's.wiring.1': "Dénude le fil sur un centimètre.", // nieuw, nalezen
    's.wiring.2': "Fixe les fils dans le connecteur à levier.", // nieuw, nalezen
    's.wiring.3': "Les câbles vont dans la goulotte.", // nieuw, nalezen
    'c.wiring.q': "Quel fil va où ?", // nieuw, nalezen
    'c.wiring.a': "Marron avec marron, bleu avec bleu.", // nieuw, nalezen
    'c.wiring': "Les couleurs disent à quoi sert un fil", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "Dans un bâtiment, les fils ont des couleurs fixes. Le marron (parfois noir ou gris) amène le courant. Le bleu sert au retour. Le vert et jaune, c’est la terre : elle protège les personnes, et on ne l’utilise jamais pour autre chose. Branche la même couleur avec la même couleur. Dénude seulement ce qui rentre dans le connecteur : aucun bout de cuivre nu ne doit dépasser. Pousse le fil dedans, puis tire doucement dessus pour vérifier qu’il est bien fixé. Tu ne sais pas quel fil est lequel ? Arrête-toi et demande.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "C’est quelle couleur, le fil de terre ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Tu branches une lampe. Un bout de cuivre dépasse du connecteur. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Tu le coupes plus court, et tu rebranches.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Tu laisses : la lampe marche.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Tu mets un bout de ruban adhésif autour.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Du cuivre nu hors du connecteur peut toucher quelque chose. Ça peut donner une décharge ou un court-circuit, même des mois plus tard.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Mesurer et travailler en sécurité", // nieuw, nalezen
    'w.multimeter': "le multimètre (il mesure le courant)", // nieuw, nalezen
    'w.spanningzoeker': "le tournevis testeur (un tournevis avec une petite lampe)", // nieuw, nalezen
    'w.meterkast': "le tableau électrique", // nieuw, nalezen
    'w.zekering': "le disjoncteur (il coupe le courant quand il y a un problème)", // nieuw, nalezen
    'w.hangslot': "le cadenas", // nieuw, nalezen
    'w.aardedraad': "le fil de terre (vert et jaune)", // nieuw, nalezen
    's.testing.1': "Le disjoncteur a sauté.", // nieuw, nalezen
    's.testing.2': "Mets un cadenas sur l’interrupteur.", // nieuw, nalezen
    's.testing.3': "Mesure d’abord avec le multimètre.", // nieuw, nalezen
    'c.testing.q': "Je peux ouvrir le tableau électrique ?", // nieuw, nalezen
    'c.testing.a': "Non, c’est l’électricien qui le fait.", // nieuw, nalezen
    'c.testing': "Coupé, verrouillé, mesuré", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Avant de travailler sur l’électricité, fais trois étapes. Coupe : le bon disjoncteur dans le tableau électrique, pas seulement l’interrupteur au mur. Verrouille : mets ton propre cadenas dessus et garde la clé sur toi, pour que personne ne puisse remettre le courant. Mesure : vérifie avec un tournevis testeur ou un multimètre qu’il n’y a vraiment plus de courant. Seulement après, tu commences. Un disjoncteur saute encore et encore ? Ne le remets pas sans arrêt : dis-le à ton responsable. Fais un travail électrique seulement quand on t’a dit que tu en as le droit. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Il n’y a plus de courant dessus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Tu as coupé le disjoncteur. Un collègue dit : “Commence maintenant, c’est coupé.” Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Tu verrouilles, et tu mesures d’abord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Tu commences : ton collègue le sait.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Tu touches vite le fil pour vérifier.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Parfois, ce n’est pas le bon disjoncteur qui est coupé, ou quelqu’un le remet. Un cadenas et une mesure montrent que c’est vraiment sûr.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Les tuyaux et l’eau", // nieuw, nalezen
    'w.buis': "le tuyau", // nieuw, nalezen
    'w.koppeling': "le raccord (il relie deux tuyaux)", // nieuw, nalezen
    'w.pijpsnijder': "le coupe-tube", // nieuw, nalezen
    'w.waterpomptang': "la pince multiprise", // nieuw, nalezen
    'w.afsluiter': "le robinet d’arrêt (il coupe l’eau)", // nieuw, nalezen
    'w.teflontape': "le ruban téflon (un ruban blanc pour le filetage d’un tuyau)", // nieuw, nalezen
    's.pipes.1': "Ferme le robinet d’arrêt.", // nieuw, nalezen
    's.pipes.2': "Coupe le tuyau avec le coupe-tube.", // nieuw, nalezen
    's.pipes.3': "Enroule du ruban téflon autour du filetage.", // nieuw, nalezen
    'c.pipes.q': "Le raccord fuit encore ?", // nieuw, nalezen
    'c.pipes.a': "Un peu. Je vais le serrer encore un peu.", // nieuw, nalezen
    'c.pipes': "D’abord couper l’eau, et un seau prêt", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Avant d’ouvrir un tuyau d’eau, ferme le robinet d’arrêt. Ensuite, ouvre un robinet plus bas, pour que le tuyau se vide. Mets un seau et un chiffon sous l’endroit où tu travailles. Coupe un tuyau en cuivre avec un coupe-tube, pas avec une scie : le bout reste rond et propre. Serre bien un raccord, mais pas trop fort. Quand tu as fini, ouvre l’eau doucement et cherche des gouttes. Une petite fuite que tu laisses devient un dégât des eaux.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "L’eau est coupée ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Tu as fait un nouveau raccord. Tu ouvres l’eau. Une petite goutte tombe chaque minute. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Tu fermes l’eau, et tu resserres ou tu refais le raccord.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Tu laisses : c’est juste une goutte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Tu mets un seau dessous et tu rentres chez toi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Une goutte par minute, c’est beaucoup de litres par semaine. L’eau peut abîmer le sol ou le plafond en dessous.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Travailler le métal", // nieuw, nalezen
    'w.bankschroef': "l’étau (il tient une pièce serrée sur l’établi)", // nieuw, nalezen
    'w.vijl': "la lime (pour rendre le métal lisse à la main)", // nieuw, nalezen
    'w.ijzerzaag': "la scie à métaux (une scie pour le métal)", // nieuw, nalezen
    'w.kolomboormachine': "la perceuse à colonne (une grande perceuse sur un pied)", // nieuw, nalezen
    'w.draadtap': "le taraud (il fait un filetage dans un trou)", // nieuw, nalezen
    'w.braam': "la bavure (un bord coupant après la coupe du métal)", // nieuw, nalezen
    's.metalwork.1': "Serre le métal dans l’étau.", // nieuw, nalezen
    's.metalwork.2': "Enlève la bavure avec la lime.", // nieuw, nalezen
    's.metalwork.3': "Garde tes mains loin du foret.", // nieuw, nalezen
    'c.metalwork.q': "Pourquoi le bord est si coupant ?", // nieuw, nalezen
    'c.metalwork.a': "Il y a encore une bavure.", // nieuw, nalezen
    'c.metalwork': "Serre la pièce, ne la tiens jamais", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "À la perceuse à colonne, ne tiens jamais une petite pièce dans ta main. Le foret peut l’attraper et la faire tourner très vite. Serre-la dans l’étau. Attache les cheveux longs, et ne porte pas de gants près d’un foret qui tourne : il peut attirer un gant. Porte des lunettes de sécurité. Après avoir scié ou percé, le métal a une bavure : un bord coupant. Lime-la avant de prendre la pièce dans ta main ou de la passer à quelqu’un. Enlève les copeaux de métal avec une brosse, pas avec ta main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Je serre d’abord la pièce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Tu dois percer un trou dans un petit morceau de métal. L’étau est sur un autre établi. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Tu vas chercher l’étau, et tu serres la pièce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Tu la tiens bien avec ta main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Tu mets des gants et tu la tiens.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Un foret peut attraper une petite pièce et la faire tourner. Alors elle frappe ta main. Dans l’étau, elle ne bouge pas.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Assemblage et montage", // nieuw, nalezen
    'l.assembly': "À la chaîne de montage", // nieuw, nalezen
    'w.werkinstructie': "l’instruction de travail (une feuille avec les étapes)", // nieuw, nalezen
    'w.onderdelenbak': "le bac à pièces", // nieuw, nalezen
    'w.mal': "le gabarit (il tient la pièce au bon endroit)", // nieuw, nalezen
    'w.rolbaan': "le convoyeur à rouleaux", // nieuw, nalezen
    'w.montagetafel': "la table de montage", // nieuw, nalezen
    'w.voetpedaal': "la pédale (un interrupteur sur lequel tu appuies avec le pied)", // nieuw, nalezen
    's.assembly.1': "Lis d’abord l’instruction de travail.", // nieuw, nalezen
    's.assembly.2': "Le bac à pièces est presque vide.", // nieuw, nalezen
    's.assembly.3': "Mets la pièce dans le gabarit.", // nieuw, nalezen
    'c.assembly.q': "C’est quelle étape maintenant ?", // nieuw, nalezen
    'c.assembly.a': "L’étape quatre. Regarde l’instruction de travail.", // nieuw, nalezen
    'c.assembly': "Suis les étapes, toujours dans le même ordre", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Sur une chaîne de montage, chaque étape a sa place et son ordre. L’instruction de travail les montre, souvent avec des images. Fais les étapes chaque fois dans le même ordre, aussi quand tu penses connaître une façon plus rapide. Un autre ordre peut donner un produit qui a l’air bien mais qui ne marche pas. Un bac est presque vide ? Dis-le à temps, pour que la chaîne ne s’arrête pas. Tu vois une étape qui pourrait être mieux ? Dis-le à ton chef d’équipe : alors on peut la changer pour tout le monde.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "J’ai besoin de nouvelles pièces.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Tu as trouvé une façon plus rapide de faire l’étape trois. L’instruction de travail dit autre chose. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Tu demandes d’abord à ton chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "À partir de maintenant, tu fais à ta façon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Tu apprends ta façon à tes collègues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "L’ordre a souvent une raison que tu ne vois pas. Si ta façon est meilleure, on peut la changer pour tout le monde.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Visser et fixer", // nieuw, nalezen
    'w.schroefmachine': "la visseuse (elle est suspendue au-dessus de la chaîne)", // nieuw, nalezen
    'w.momentsleutel': "la clé dynamométrique (elle fait clic quand le boulon est assez serré)", // nieuw, nalezen
    'w.tiewrap': "le collier de serrage", // nieuw, nalezen
    'w.sluitring': "la rondelle", // nieuw, nalezen
    'w.klinknagel': "le rivet", // nieuw, nalezen
    'w.popnageltang': "la pince à riveter", // nieuw, nalezen
    's.fastening.1': "Serre le boulon avec la clé dynamométrique.", // nieuw, nalezen
    's.fastening.2': "N’oublie pas la rondelle.", // nieuw, nalezen
    's.fastening.3': "Attache les câbles ensemble avec un collier de serrage.", // nieuw, nalezen
    'c.fastening.q': "Ce boulon doit être serré comment ?", // nieuw, nalezen
    'c.fastening.a': "Jusqu’à ce que la clé dynamométrique fasse clic.", // nieuw, nalezen
    'c.fastening': "Le clic suffit", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Une clé dynamométrique fait clic quand un boulon est assez serré. Arrête-toi au clic : ne tourne pas plus. Trop serré peut casser le boulon ou la pièce, et pas assez serré peut se détacher. La visseuse marche de la même façon : elle s’arrête toute seule. Mets chaque rondelle à sa place : une rondelle qui manque est difficile à voir plus tard. Compte tes boulons. Il en reste un, ou il t’en manque un ? Alors il y a un problème : dis-le à ton chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Il reste un boulon.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Ta clé dynamométrique a fait clic. Le boulon te semble encore un peu desserré. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Tu t’arrêtes, et tu demandes à ton chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Tu tournes encore un peu à la main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Tu prends une clé plus longue.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Le clic est réglé sur la bonne force. Si ça ne semble pas bon, la clé doit peut-être être contrôlée. Tourner plus peut casser le boulon.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Lever et déplacer", // nieuw, nalezen
    'w.takel': "le palan (il soulève les pièces lourdes avec une chaîne)", // nieuw, nalezen
    'w.hijshaak': "le crochet de levage", // nieuw, nalezen
    'w.tilhulp': "le manipulateur (il tient une pièce par aspiration)", // nieuw, nalezen
    'w.onderdelenkar': "le chariot à pièces", // nieuw, nalezen
    'w.draaitafel': "le plateau tournant (tu tournes la pièce, pas toi-même)", // nieuw, nalezen
    'w.rolcontainer': "le roll (une grande cage sur roues)", // nieuw, nalezen
    's.handling.1': "Ne soulève pas ça sans aide. Utilise le palan.", // nieuw, nalezen
    's.handling.2': "Le crochet de levage est bien fermé ?", // nieuw, nalezen
    's.handling.3': "Pousse le chariot à pièces, ne le tire pas.", // nieuw, nalezen
    'c.handling.q': "Je peux me mettre sous le palan ?", // nieuw, nalezen
    'c.handling.a': "Non, jamais sous une charge suspendue.", // nieuw, nalezen
    'c.handling': "Laisse le palan faire le travail lourd", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Les pièces lourdes se lèvent avec un palan ou un manipulateur, pas avec ton dos. Contrôle le crochet avant de lever : le linguet doit se fermer. Lève doucement, et garde tes mains et tes pieds loin de la charge. Ne reste et ne passe jamais sous une charge suspendue. Utilise le plateau tournant pour tourner une pièce : comme ça, tu n’as pas besoin de tordre ton dos. Pousse un chariot ou un roll : tu vois où tu vas, et ton dos travaille moins. Utilise un palan seulement quand tu as appris comment faire. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "J’utilise le palan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Une pièce est très lourde. Le palan est occupé encore dix minutes. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Tu attends le palan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Tu la soulèves sans aide, vite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Tu la traînes sur le sol.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Une pièce lourde peut te faire mal au dos en une seconde. Dix minutes d’attente, c’est mieux que des mois de douleur.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Le contrôle final", // nieuw, nalezen
    'w.typeplaatje': "la plaque signalétique (une petite plaque en métal avec le type et le numéro)", // nieuw, nalezen
    'w.stempel': "le tampon", // nieuw, nalezen
    'w.testbank': "le banc d’essai", // nieuw, nalezen
    'w.goedkeursticker': "l’autocollant de conformité (un autocollant vert : le produit est bon)", // nieuw, nalezen
    'w.kras': "la rayure", // nieuw, nalezen
    'w.barst': "la fissure", // nieuw, nalezen
    's.finalcheck.1': "La plaque signalétique est de travers.", // nieuw, nalezen
    's.finalcheck.2': "Il y a une rayure sur ce produit.", // nieuw, nalezen
    's.finalcheck.3': "Sans autocollant de conformité, il ne part pas.", // nieuw, nalezen
    'c.finalcheck.q': "Ce produit est bon ?", // nieuw, nalezen
    'c.finalcheck.a': "Non, il y a une fissure dedans.", // nieuw, nalezen
    'c.finalcheck': "Seuls les bons produits ont l’autocollant", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Le contrôle final est la dernière chance de trouver une erreur avant que le client la trouve. Contrôle chaque point de la liste, aussi quand il y a beaucoup de travail. Une petite rayure ou une fissure se rate facilement : regarde sous une bonne lumière, et de plus d’un côté. Mets l’autocollant de conformité ou le tampon seulement quand chaque point est bon. Tu as un doute ? Mets le produit de côté et demande. Une erreur trouvée ici coûte peu, et une erreur chez le client coûte cher. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Ce produit va de côté.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Il y a beaucoup de travail sur la chaîne. Tu vois une petite rayure sur un produit, sous l’étiquette. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Tu le mets de côté, et tu le dis à ton chef d’équipe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Tu mets l’autocollant : c’est petit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Tu déplaces l’étiquette sur la rayure.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Une petite rayure peut être le signe d’un problème sur la chaîne. La cacher envoie juste le problème chez le client.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Cultiver, trier et la serre", // nieuw, nalezen
    'l.sowing': "Semer et bouturer", // nieuw, nalezen
    'w.zaad': "les graines", // nieuw, nalezen
    'w.zaaibak': "le plateau de semis", // nieuw, nalezen
    'w.stek': "la bouture (un morceau de plante qui fait de nouvelles racines)", // nieuw, nalezen
    'w.potgrond': "le terreau", // nieuw, nalezen
    'w.kweekpot': "le pot de culture", // nieuw, nalezen
    'w.gieter': "l’arrosoir", // nieuw, nalezen
    's.sowing.1': "Mets deux graines dans chaque case.", // nieuw, nalezen
    's.sowing.2': "Mets la bouture dans le terreau.", // nieuw, nalezen
    's.sowing.3': "Donne un peu d’eau aux jeunes plantes.", // nieuw, nalezen
    'c.sowing.q': "La graine doit aller à quelle profondeur ?", // nieuw, nalezen
    'c.sowing.a': "Un demi-centimètre. Pas plus profond.", // nieuw, nalezen
    'c.sowing': "Les petites plantes demandent une main douce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Les jeunes plantes sont fragiles. Tiens une bouture ou un semis par une feuille, pas par la tige : une feuille repousse, une tige cassée non. Appuie doucement sur la terre, pas fort. Arrose lentement, avec un jet fin, pour que les graines ne partent pas avec l’eau. Travaille avec des mains propres et des plateaux propres : les jeunes plantes tombent vite malades. Écris la date et la sorte de plante sur chaque plateau, pour que tout le monde sache ce qu’il y a dedans.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Je la tiens par la feuille.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Tu dois mettre un petit semis dans un pot. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Tu le tiens doucement par une feuille.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Tu le tires par la tige.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Tu le sors en serrant la terre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Une feuille peut repousser. Une tige cassée non, et alors la plante meurt.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Trier et emballer", // nieuw, nalezen
    'w.tros': "la grappe (des tomates sur une même tige)", // nieuw, nalezen
    'w.bakje': "la barquette (une petite boîte pour les fruits)", // nieuw, nalezen
    'w.sorteermachine': "la trieuse", // nieuw, nalezen
    'w.etiketpistool': "la pince à étiqueter", // nieuw, nalezen
    'w.kleurenkaart': "la carte des couleurs (elle montre à quel point le fruit doit être mûr)", // nieuw, nalezen
    'w.tomatenschaar': "le sécateur de récolte", // nieuw, nalezen
    's.sorting.1': "Mets les grappes avec soin dans la caisse.", // nieuw, nalezen
    's.sorting.2': "Cette tomate est trop mûre. Elle va de côté.", // nieuw, nalezen
    's.sorting.3': "Regarde la carte des couleurs.", // nieuw, nalezen
    'c.sorting.q': "Cette tomate est assez mûre ?", // nieuw, nalezen
    'c.sorting.a': "Non, encore trop verte. Laisse-la sur la plante.", // nieuw, nalezen
    'c.sorting': "Chaque fruit compte", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Les fruits et les légumes s’abîment facilement. Pose-les, ne les laisse pas tomber et ne les jette pas. Aujourd’hui tu ne vois pas le coup, mais demain le fruit est mou et brun. Regarde la carte des couleurs pour savoir quelle couleur va où. Mets de côté un fruit abîmé ou pourri : un seul mauvais fruit dans une barquette peut gâter les autres. Garde les barquettes et les caisses propres, et ne les pose jamais par terre.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Celle-ci est abîmée.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Tu remplis des barquettes. Une tomate a une tache brune et molle. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Tu la mets de côté.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Tu la caches au fond.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Tu l’emballes quand même.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Une tomate pourrie fait pourrir les autres plus vite. Le client la trouve, et toute la barquette revient.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "La serre et son climat", // nieuw, nalezen
    'w.buisrailkar': "le chariot sur rails (il roule sur les tuyaux de chauffage)", // nieuw, nalezen
    'w.druppelaar': "le goutteur (il donne l’eau goutte à goutte)", // nieuw, nalezen
    'w.luchtraam': "l’ouvrant (une fenêtre dans le toit)", // nieuw, nalezen
    'w.kasscherm': "l’écran de serre (une toile sous le toit)", // nieuw, nalezen
    'w.ventilator': "le ventilateur", // nieuw, nalezen
    'w.thermometer': "le thermomètre", // nieuw, nalezen
    's.greenhouse.1': "Roule avec le chariot sur rails jusqu’au bout de la rangée.", // nieuw, nalezen
    's.greenhouse.2': "Le goutteur est détaché.", // nieuw, nalezen
    's.greenhouse.3': "Il fait chaud. Les ouvrants s’ouvrent.", // nieuw, nalezen
    'c.greenhouse.q': "Pourquoi il fait si chaud dans la serre ?", // nieuw, nalezen
    'c.greenhouse.a': "L’écran est fermé, et les ouvrants aussi.", // nieuw, nalezen
    'c.greenhouse': "Laisse le climat à l’ordinateur", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Dans une serre, un ordinateur règle le climat : les ouvrants, l’écran, le chauffage et l’eau. N’ouvre pas un ouvrant et ne change pas un réglage toi-même. Tu vois quelque chose de bizarre, comme un goutteur qui fuit ou un ouvrant qui ne se ferme pas ? Dis-le à ton responsable. Le chariot sur rails roule sur les tuyaux de chauffage : utilise-le seulement quand tu as appris comment faire. Garde tes pieds sur la plateforme, et ne touche jamais les tuyaux : ils peuvent être chauds. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Ce goutteur fuit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Un goutteur est détaché. L’eau coule par terre. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Tu le remets en place, et tu le dis à ton responsable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Tu laisses : c’est juste de l’eau.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Tu coupes l’eau de toute la rangée.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Un goutteur détaché gaspille de l’eau, la plante en reçoit trop peu, et un sol mouillé est glissant.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Les ravageurs et le travail propre", // nieuw, nalezen
    'w.luis': "le puceron (un petit insecte vert sur les plantes)", // nieuw, nalezen
    'w.vangplaat': "le piège collant (une carte jaune qui attrape les insectes)", // nieuw, nalezen
    'w.rups': "la chenille", // nieuw, nalezen
    'w.sluipwesp': "la guêpe parasite (une petite guêpe qui tue les ravageurs)", // nieuw, nalezen
    'w.schimmel': "la moisissure", // nieuw, nalezen
    'w.ontsmettingsmat': "le tapis désinfectant (tu marches dessus à la porte)", // nieuw, nalezen
    's.pests.1': "Il y a des pucerons sur cette feuille.", // nieuw, nalezen
    's.pests.2': "Accroche le piège collant au-dessus des plantes.", // nieuw, nalezen
    's.pests.3': "Marche sur le tapis désinfectant.", // nieuw, nalezen
    'c.pests.q': "Je peux tuer cette guêpe ?", // nieuw, nalezen
    'c.pests.a': "Non, c’est une guêpe parasite. Elle nous aide.", // nieuw, nalezen
    'c.pests': "Ne porte pas les maladies d’une rangée à l’autre", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Une maladie ou un ravageur se répand vite dans une serre. Tu peux le porter sur tes mains, tes vêtements et tes outils. Alors marche sur le tapis désinfectant à chaque porte, et lave-toi les mains quand tu vas dans une autre partie de la serre. Commence ton travail dans les rangées saines, et finis dans les rangées malades. Tu vois des insectes, des taches ou de la moisissure sur une plante ? Ne la touche pas, mais dis à ton responsable où elle est. Certains insectes dans la serre sont des aides : laisse-les tranquilles. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Il y a de la moisissure ici.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Tu vois de la moisissure grise sur quelques plantes de ta rangée. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Tu dis à ton responsable où elle est.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Tu enlèves les mauvaises feuilles et tu continues.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Tu ne dis rien : c’est juste quelques plantes.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "La moisissure se répand vite. Ton responsable sait quoi faire, et par où commencer.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Pneus, huile et freins", // nieuw, nalezen
    'l.tyres': "Changer les pneus", // nieuw, nalezen
    'w.wielbout': "le boulon de roue", // nieuw, nalezen
    'w.slagmoersleutel': "la clé à chocs", // nieuw, nalezen
    'w.bandenspanningsmeter': "le manomètre de pneus", // nieuw, nalezen
    'w.bandenprofiel': "les sculptures du pneu (les rainures dans le pneu)", // nieuw, nalezen
    'w.velg': "la jante", // nieuw, nalezen
    'w.bandenwisselaar': "le démonte-pneu (une machine pour enlever un pneu de la jante)", // nieuw, nalezen
    's.tyres.1': "Serre les boulons de roue en croix.", // nieuw, nalezen
    's.tyres.2': "Les sculptures du pneu sont trop usées.", // nieuw, nalezen
    's.tyres.3': "Mesure la pression avec le manomètre de pneus.", // nieuw, nalezen
    'c.tyres.q': "Ces pneus doivent être changés ?", // nieuw, nalezen
    'c.tyres.a': "Oui, les sculptures sont presque parties.", // nieuw, nalezen
    'c.tyres': "Visse à la main, serre avec la clé dynamométrique", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Une clé à chocs est rapide et très forte. Utilise-la pour enlever les boulons de roue, mais pas pour les serrer fort. D’abord, visse les boulons à la main. Ensuite, serre-les en croix avec une clé dynamométrique, à la force prévue pour cette voiture. Une roue mal serrée peut se détacher pendant que la voiture roule. Contrôle les sculptures et la pression de chaque pneu que tu prends en main. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Je les visse d’abord à la main.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Tu remets une roue. Un collègue dit : “Prends la clé à chocs, c’est plus rapide.” Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Tu les visses à la main, puis tu prends la clé dynamométrique.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Tu les serres fort avec la clé à chocs.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Tu les visses à la main, et tu laisses comme ça.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Une clé à chocs peut serrer un boulon trop fort ou pas assez. Seule la clé dynamométrique donne la bonne force.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Faire la vidange", // nieuw, nalezen
    'w.oliefilter': "le filtre à huile", // nieuw, nalezen
    'w.oliepeilstok': "la jauge d’huile (elle montre combien d’huile il y a)", // nieuw, nalezen
    'w.opvangbak': "le bac de vidange (il récupère la vieille huile)", // nieuw, nalezen
    'w.trechter': "l’entonnoir", // nieuw, nalezen
    'w.aftapplug': "le bouchon de vidange", // nieuw, nalezen
    'w.olievat': "le fût d’huile", // nieuw, nalezen
    's.oilchange.1': "Mets le bac de vidange sous le moteur.", // nieuw, nalezen
    's.oilchange.2': "Dévisse le bouchon de vidange.", // nieuw, nalezen
    's.oilchange.3': "Regarde la jauge d’huile.", // nieuw, nalezen
    'c.oilchange.q': "Il faut mettre combien d’huile ?", // nieuw, nalezen
    'c.oilchange.a': "Quatre litres. Ensuite, regarde la jauge.", // nieuw, nalezen
    'c.oilchange': "La vieille huile va dans le fût, pas dans l’égout", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "La vieille huile est mauvaise pour l’eau et pour le sol. Un peu d’huile peut salir beaucoup d’eau. Alors récupère toute la vieille huile dans le bac de vidange, et verse-la dans le fût pour la vieille huile. Ne la verse jamais dans un égout ou dans un évier. Les vieux filtres et les chiffons pleins d’huile vont dans leur propre poubelle. L’huile chaude peut brûler ta peau : laisse d’abord le moteur refroidir un peu, et porte des gants. Nettoie tout de suite l’huile renversée : de l’huile par terre, c’est glissant. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Où va la vieille huile ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Le bac de vidange est plein de vieille huile. Le fût est à l’autre bout de l’atelier. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Tu le portes jusqu’au fût, avec précaution.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Tu le vides dans l’égout dehors.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Tu le laisses sous la voiture pour plus tard.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "De la vieille huile dans un égout salit l’eau. Un bac plein sous une voiture, quelqu’un finit par le renverser d’un coup de pied.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Freins et feux", // nieuw, nalezen
    'w.remschijf': "le disque de frein", // nieuw, nalezen
    'w.remblok': "la plaquette de frein", // nieuw, nalezen
    'w.koplamp': "le phare", // nieuw, nalezen
    'w.remvloeistof': "le liquide de frein", // nieuw, nalezen
    'w.remklauw': "l’étrier de frein", // nieuw, nalezen
    'w.achterlamp': "le feu arrière", // nieuw, nalezen
    's.brakes.1': "Les plaquettes de frein sont usées.", // nieuw, nalezen
    's.brakes.2': "Contrôle le liquide de frein.", // nieuw, nalezen
    's.brakes.3': "Le feu arrière gauche ne marche pas.", // nieuw, nalezen
    'c.brakes.q': "Le disque de frein doit être changé aussi ?", // nieuw, nalezen
    'c.brakes.a': "Oui, il est trop fin.", // nieuw, nalezen
    'c.brakes': "Les freins : contrôle deux fois", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Les freins gardent les gens en vie. Alors travaille calmement, et contrôle ton travail deux fois. Après des plaquettes ou des disques neufs, appuie quelques fois sur la pédale de frein avant que la voiture bouge : la première fois, la pédale descend souvent trop loin. Le liquide de frein est mauvais pour ta peau et pour la peinture : porte des gants, et essuie les gouttes tout de suite. Ne souffle pas la poussière de frein avec l’air comprimé : nettoie-la avec du nettoyant pour freins et un chiffon. Avant que la voiture parte, contrôle chaque feu, aussi les feux stop.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "J’appuie quelques fois sur la pédale de frein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Tu as monté des plaquettes de frein neuves. La voiture doit sortir. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Tu appuies quelques fois sur la pédale de frein.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Tu la sors tout de suite en roulant.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Tu la pousses dehors sans contrôler.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Après des plaquettes neuves, la pédale peut descendre trop loin la première fois. Alors la voiture ne s’arrête pas.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Lire les pannes et le bon de travail", // nieuw, nalezen
    'w.diagnosecomputer': "l’appareil de diagnostic (il lit les pannes de la voiture)", // nieuw, nalezen
    'w.waarschuwingslampje': "le voyant d’alerte (sur le tableau de bord)", // nieuw, nalezen
    'w.werkorder': "le bon de travail (ce qu’il faut faire sur la voiture)", // nieuw, nalezen
    'w.kentekenplaat': "la plaque d’immatriculation", // nieuw, nalezen
    'w.autosleutel': "la clé de voiture", // nieuw, nalezen
    'w.stoelhoes': "la housse de siège (elle garde le siège propre)", // nieuw, nalezen
    's.diagnosis.1': "Branche l’appareil de diagnostic.", // nieuw, nalezen
    's.diagnosis.2': "Le voyant d’alerte est allumé.", // nieuw, nalezen
    's.diagnosis.3': "Mets une housse sur le siège.", // nieuw, nalezen
    'c.diagnosis.q': "Qu’est-ce qu’il faut faire sur cette voiture ?", // nieuw, nalezen
    'c.diagnosis.a': "Regarde le bon de travail.", // nieuw, nalezen
    'c.diagnosis': "Traite la voiture comme si c’était la tienne", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Un client te donne sa voiture et sa clé. Prends soin des deux. Mets une housse sur le siège et un tapis par terre avant de monter. Fais seulement ce qui est sur le bon de travail. Tu trouves autre chose qui ne va pas ? Note-le et dis-le à ton responsable : c’est le client qui décide. Range la clé à sa place, avec son étiquette. N’utilise pas la radio, le téléphone ou les affaires dans la voiture. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Ce n’est pas sur le bon de travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Tu fais la vidange. Un pneu est presque lisse. Ce n’est pas sur le bon de travail. Que fais-tu ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Tu le notes, et tu le dis à ton responsable.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Tu changes le pneu tout de suite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Tu ne dis rien : ce n’est pas ton travail.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "C’est le client qui décide ce qui est fait et payé. Mais il doit savoir que le pneu est dangereux.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Tondre et tailler", // nieuw, nalezen
    'l.mowing': "Tondre la pelouse", // nieuw, nalezen
    'w.gras': "l’herbe, la pelouse", // nieuw, nalezen
    'w.maaien': "tondre (couper l’herbe)", // nieuw, nalezen
    'w.grasmaaier': "la tondeuse", // nieuw, nalezen
    'w.zitmaaier': "la tondeuse autoportée (une tondeuse sur laquelle on s’assoit)", // nieuw, nalezen
    'w.bosmaaier': "la débroussailleuse (une machine à couper au bout d’un long manche)", // nieuw, nalezen
    'w.gelaatsscherm': "la visière de protection", // nieuw, nalezen
    's.mowing.1': "Tonds d’abord l’herbe le long du bord.", // nieuw, nalezen
    's.mowing.2': "L’herbe est trop mouillée. On tond demain.", // nieuw, nalezen
    's.mowing.3': "Mets ta visière de protection.", // nieuw, nalezen
    'c.mowing.q': "Je peux prendre la tondeuse autoportée ?", // nieuw, nalezen
    'c.mowing.a': "Oui, mais enlève d’abord les pierres.", // nieuw, nalezen
    'c.mowing': "Les pierres volent loin", // nieuw, nalezen
    'c.mowing.b': "Une tondeuse ou une débroussailleuse peut projeter une pierre très loin et très fort. Alors marche d’abord sur l’herbe, et enlève les pierres, le verre et les branches. Porte ta visière de protection ou tes lunettes de sécurité, ta protection auditive et tes chaussures de sécurité. Garde les autres personnes loin de toi. Quelqu’un s’approche ? Arrête la machine. Ne mets jamais la main sous une tondeuse pendant que le moteur tourne : coupe le moteur, et attends que la lame ne bouge plus. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.mowing.p': "Vous pouvez rester à distance, s’il vous plaît ?", // nieuw, nalezen
    'c.mowing.s': "Tu utilises la débroussailleuse. Un homme avec un chien marche vers toi. Que fais-tu ?", // nieuw, nalezen
    'c.mowing.o1': "Tu arrêtes la machine jusqu’à ce qu’il soit passé.", // nieuw, nalezen
    'c.mowing.o2': "Tu continues : il te voit bien.", // nieuw, nalezen
    'c.mowing.o3': "Tu te tournes dans l’autre sens, et tu continues.", // nieuw, nalezen
    'c.mowing.w': "Une pierre lancée par une débroussailleuse peut blesser gravement quelqu’un, même de loin.", // nieuw, nalezen
    'l.pruning': "Tailler", // nieuw, nalezen
    'w.snoeien': "tailler (couper des branches d’une plante)", // nieuw, nalezen
    'w.snoeischaar': "le sécateur", // nieuw, nalezen
    'w.tak': "la branche", // nieuw, nalezen
    'w.struik': "le buisson, l’arbuste", // nieuw, nalezen
    'w.boom': "l’arbre", // nieuw, nalezen
    'w.snoeizaag': "la scie d’élagage", // nieuw, nalezen
    's.pruning.1': "Taille les buissons le long du chemin.", // nieuw, nalezen
    's.pruning.2': "Cette branche est morte. Coupe-la avec la scie.", // nieuw, nalezen
    's.pruning.3': "Mets les branches en tas.", // nieuw, nalezen
    'c.pruning.q': "Quelles branches il faut couper ?", // nieuw, nalezen
    'c.pruning.a': "Seulement les branches mortes.", // nieuw, nalezen
    'c.pruning': "Une coupe nette guérit le mieux", // nieuw, nalezen
    'c.pruning.b': "Taille avec un sécateur bien aiguisé et propre. Une coupe nette guérit vite ; une branche arrachée tombe malade. Coupe juste au-dessus d’un bourgeon ou d’une petite branche, et ne laisse pas un long morceau. Enlève d’abord les branches mortes et cassées. Garde ton autre main loin des lames. Porte des gants : certaines plantes ont des épines, ou rendent ta peau rouge. Nettoie le sécateur après le travail.", // nieuw, nalezen
    'c.pruning.p': "Je dois couper où ?", // nieuw, nalezen
    'c.pruning.s': "Ton sécateur ne coupe plus bien. Il arrache les branches. Que fais-tu ?", // nieuw, nalezen
    'c.pruning.o1': "Tu demandes un sécateur bien aiguisé.", // nieuw, nalezen
    'c.pruning.o2': "Tu tires plus fort sur la branche.", // nieuw, nalezen
    'c.pruning.o3': "Tu continues : c’est juste un buisson.", // nieuw, nalezen
    'c.pruning.w': "Un sécateur qui coupe mal arrache la branche. La plante tombe malade, et tu travailles plus dur.", // nieuw, nalezen
    'l.hedge': "Tailler la haie", // nieuw, nalezen
    'w.heg': "la haie", // nieuw, nalezen
    'w.heggenschaar': "le taille-haie (une machine qui coupe une haie)", // nieuw, nalezen
    'w.kruiwagen': "la brouette", // nieuw, nalezen
    'w.hark': "le râteau", // nieuw, nalezen
    'w.snoeiafval': "les déchets verts (les branches et les feuilles coupées)", // nieuw, nalezen
    'w.zeil': "la bâche (une grande toile en plastique)", // nieuw, nalezen
    's.hedge.1': "Mets la bâche sous la haie.", // nieuw, nalezen
    's.hedge.2': "Coupe la haie bien droite.", // nieuw, nalezen
    's.hedge.3': "Emporte les déchets verts avec la brouette.", // nieuw, nalezen
    'c.hedge.q': "La haie doit rester à quelle hauteur ?", // nieuw, nalezen
    'c.hedge.a': "Jusqu’à la corde. Pas plus bas.", // nieuw, nalezen
    'c.hedge': "Cherche d’abord les nids", // nieuw, nalezen
    'c.hedge.b': "Au printemps et en été, les oiseaux font des nids dans les haies et les buissons. Les nids que les oiseaux utilisent sont protégés. Alors regarde dans la haie avant de couper. Tu vois un nid avec des œufs ou des petits oiseaux ? Ne coupe pas à cet endroit, et dis-le à ton responsable. Tiens le taille-haie à deux mains. Tiens-toi bien sur le sol ou sur une bonne échelle, jamais sur une chaise ou un seau. Garde le câble derrière toi.", // nieuw, nalezen
    'c.hedge.p': "Il y a un nid ici.", // nieuw, nalezen
    'c.hedge.s': "Tu tailles une haie en mai. Tu vois un nid avec des petits oiseaux. Que fais-tu ?", // nieuw, nalezen
    'c.hedge.o1': "Tu t’arrêtes à cet endroit, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.hedge.o2': "Tu coupes autour avec précaution.", // nieuw, nalezen
    'c.hedge.o3': "Tu enlèves le nid, et tu continues.", // nieuw, nalezen
    'c.hedge.w': "Les nids que les oiseaux utilisent sont protégés. C’est ton responsable qui décide ce qu’on fait avec cette partie de la haie.", // nieuw, nalezen
    'l.chainsaw': "La tronçonneuse et le souffleur", // nieuw, nalezen
    'w.kettingzaag': "la tronçonneuse", // nieuw, nalezen
    'w.stam': "le tronc (d’un arbre)", // nieuw, nalezen
    'w.zaagbroek': "le pantalon anti-coupure (il arrête la chaîne)", // nieuw, nalezen
    'w.bladblazer': "le souffleur de feuilles", // nieuw, nalezen
    'w.bladeren': "les feuilles", // nieuw, nalezen
    'w.jerrycan': "le jerrican (un bidon pour le carburant)", // nieuw, nalezen
    's.chainsaw.1': "Mets ton pantalon anti-coupure.", // nieuw, nalezen
    's.chainsaw.2': "Souffle les feuilles en tas.", // nieuw, nalezen
    's.chainsaw.3': "Fais le plein seulement quand le moteur est froid.", // nieuw, nalezen
    'c.chainsaw.q': "Je peux travailler avec la tronçonneuse ?", // nieuw, nalezen
    'c.chainsaw.a': "Pas encore. D’abord, tu suis une formation.", // nieuw, nalezen
    'c.chainsaw': "La tronçonneuse, seulement avec une formation", // nieuw, nalezen
    'c.chainsaw.b': "La tronçonneuse est un des outils les plus dangereux dans les espaces verts. Travaille avec seulement quand tu as suivi une formation, et que ton responsable dit que tu peux. Porte toujours un pantalon anti-coupure, un casque avec visière et protection auditive, des gants et des bottes de sécurité. Ne travaille jamais à la tronçonneuse sans personne avec toi. Tiens-la à deux mains, et ne scie jamais au-dessus de tes épaules. Avec un souffleur : ne souffle jamais vers des gens, des voitures ou des fenêtres ouvertes. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.chainsaw.p': "Je n’ai pas encore suivi de formation pour ça.", // nieuw, nalezen
    'c.chainsaw.s': "Un collègue dit : “Prends la tronçonneuse, c’est facile.” Tu n’as jamais suivi de formation. Que fais-tu ?", // nieuw, nalezen
    'c.chainsaw.o1': "Tu dis que tu n’as pas encore suivi de formation.", // nieuw, nalezen
    'c.chainsaw.o2': "Tu essaies avec précaution, juste une fois.", // nieuw, nalezen
    'c.chainsaw.o3': "Tu la prends, et tu regardes d’abord une vidéo.", // nieuw, nalezen
    'c.chainsaw.w': "Une tronçonneuse peut te couper la jambe en une seconde. Sans formation, tu ne sais pas comment elle peut rebondir vers toi.", // nieuw, nalezen
    'u.planting': "Planter, désherber et la rue", // nieuw, nalezen
    'l.weeding': "Désherber", // nieuw, nalezen
    'w.onkruid': "les mauvaises herbes (des plantes qui doivent partir)", // nieuw, nalezen
    'w.wieden': "désherber (arracher les mauvaises herbes)", // nieuw, nalezen
    'w.schoffel': "la binette", // nieuw, nalezen
    'w.perk': "le massif de fleurs, le parterre", // nieuw, nalezen
    'w.onkruidbrander': "le désherbeur thermique (il tue les mauvaises herbes avec la chaleur)", // nieuw, nalezen
    'w.wortel': "la racine (d’une plante)", // nieuw, nalezen
    's.weeding.1': "Arrache les mauvaises herbes, avec la racine.", // nieuw, nalezen
    's.weeding.2': "Bine le parterre près de l’entrée.", // nieuw, nalezen
    's.weeding.3': "Attention : le désherbeur thermique est chaud.", // nieuw, nalezen
    'c.weeding.q': "C’est une mauvaise herbe ?", // nieuw, nalezen
    'c.weeding.a': "Non, c’est une plante. Laisse-la.", // nieuw, nalezen
    'c.weeding': "Les mauvaises herbes : la racine doit partir", // nieuw, nalezen
    'c.weeding.b': "Une mauvaise herbe repousse quand la racine reste dans le sol. Alors arrache-la avec la racine, ou bine juste sous la surface de la terre. Travaille quand la terre est un peu mouillée : la racine sort alors facilement. N’utilise pas de produits à pulvériser contre les mauvaises herbes, sauf si tu as appris comment faire et que ton responsable le dit. Un désherbeur thermique est très chaud : garde-le loin de l’herbe sèche, des feuilles, des haies, des voitures et des poubelles. Ne le pose jamais pendant qu’il brûle. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.weeding.p': "C’est une mauvaise herbe ou une plante ?", // nieuw, nalezen
    'c.weeding.s': "Tu utilises le désherbeur thermique. À côté du chemin, il y a une haie sèche. Que fais-tu ?", // nieuw, nalezen
    'c.weeding.o1': "Tu arraches les mauvaises herbes à la main à cet endroit.", // nieuw, nalezen
    'c.weeding.o2': "Tu brûles vite, et tu continues à marcher.", // nieuw, nalezen
    'c.weeding.o3': "Tu brûles, et tu regardes une fois derrière toi.", // nieuw, nalezen
    'c.weeding.w': "Une haie sèche prend feu vite. Un feu près des maisons ou des voitures est très dangereux.", // nieuw, nalezen
    'l.planting': "Planter", // nieuw, nalezen
    'w.planten': "planter", // nieuw, nalezen
    'w.schep': "la pelle, la bêche", // nieuw, nalezen
    'w.plantgat': "le trou de plantation", // nieuw, nalezen
    'w.kluit': "la motte (la terre autour des racines)", // nieuw, nalezen
    'w.compost': "le compost", // nieuw, nalezen
    'w.boompaal': "le tuteur (un poteau qui tient un jeune arbre)", // nieuw, nalezen
    's.planting.1': "Creuse un trou de plantation pour l’arbre.", // nieuw, nalezen
    's.planting.2': "Mets l’arbre bien droit, à côté du tuteur.", // nieuw, nalezen
    's.planting.3': "Donne beaucoup d’eau aux nouvelles plantes.", // nieuw, nalezen
    'c.planting.q': "Où va cette plante ?", // nieuw, nalezen
    'c.planting.a': "Au fond du parterre, près du mur.", // nieuw, nalezen
    'c.planting': "Sous la terre : des câbles et des tuyaux", // nieuw, nalezen
    'c.planting.b': "Sous l’herbe et sous le trottoir, il y a souvent des câbles et des tuyaux : pour l’électricité, le gaz, l’eau et internet. Alors creuse avec précaution. Tu vois un ruban de couleur ou une plaque en plastique dans la terre, ou tu touches quelque chose de dur ? Arrête de creuser, et dis-le à ton responsable. Ne continue jamais à creuser en forçant. Soulève à deux un arbre lourd ou une grosse motte, avec les genoux pliés. Donne de l’eau à une nouvelle plante le jour même. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.planting.p': "Je touche quelque chose de dur.", // nieuw, nalezen
    'c.planting.s': "Tu creuses un trou de plantation. Ta pelle touche un ruban en plastique rouge. Que fais-tu ?", // nieuw, nalezen
    'c.planting.o1': "Tu arrêtes de creuser, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.planting.o2': "Tu continues à creuser avec précaution, à côté du ruban.", // nieuw, nalezen
    'c.planting.o3': "Tu arraches le ruban, et tu continues.", // nieuw, nalezen
    'c.planting.w': "Un ruban dans la terre prévient qu’il y a un câble ou un tuyau dessous. Un tuyau de gaz ou un câble électrique est très dangereux.", // nieuw, nalezen
    'l.roadside': "Travailler au bord de la route", // nieuw, nalezen
    'w.pion': "le cône de signalisation", // nieuw, nalezen
    'w.verkeer': "la circulation", // nieuw, nalezen
    'w.stoep': "le trottoir (le chemin à côté de la route)", // nieuw, nalezen
    'w.fietser': "le cycliste", // nieuw, nalezen
    'w.pijlwagen': "la remorque à flèche (une remorque avec une grande flèche qui prévient les conducteurs)", // nieuw, nalezen
    'w.berm': "l’accotement (l’herbe à côté de la route)", // nieuw, nalezen
    's.roadside.1': "Mets ton gilet fluo. On travaille au bord de la route.", // nieuw, nalezen
    's.roadside.2': "Mets les cônes derrière la camionnette.", // nieuw, nalezen
    's.roadside.3': "Fais attention aux cyclistes.", // nieuw, nalezen
    'c.roadside.q': "Je peux traverser maintenant ?", // nieuw, nalezen
    'c.roadside.a': "Non, attends. Un camion arrive.", // nieuw, nalezen
    'c.roadside': "Au bord de la route : sois visible, reste derrière les cônes", // nieuw, nalezen
    'c.roadside.b': "Le travail au bord de la route est dangereux : des conducteurs regardent leur téléphone, ou roulent trop vite. Alors porte toujours ton gilet fluo, même pour un petit travail. Installe les cônes et les panneaux avant de commencer, et range-les en dernier. Gare la camionnette pour qu’elle te protège de la circulation. Reste derrière les cônes. Ne recule jamais sans regarder, et travaille face à la circulation quand tu peux. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.roadside.p': "D’abord, j’installe les cônes.", // nieuw, nalezen
    'c.roadside.s': "Tu dois couper un petit buisson au bord de la route. Ça prend cinq minutes. Que fais-tu ?", // nieuw, nalezen
    'c.roadside.o1': "Tu mets le gilet fluo, et tu installes les cônes.", // nieuw, nalezen
    'c.roadside.o2': "Tu le fais vite, sans les cônes.", // nieuw, nalezen
    'c.roadside.o3': "Tu demandes à un collègue de surveiller les voitures.", // nieuw, nalezen
    'c.roadside.w': "Un accident ne prend qu’une seconde. Cinq minutes sans cônes, c’est cinq minutes sans protection.", // nieuw, nalezen
    'l.litter': "Les déchets et le quartier", // nieuw, nalezen
    'w.zwerfafval': "les déchets sauvages (les déchets dans la rue)", // nieuw, nalezen
    'w.grijper': "la pince à déchets (un bâton qui attrape les déchets)", // nieuw, nalezen
    'w.vuilniszak': "le sac poubelle", // nieuw, nalezen
    'w.scherven': "les morceaux de verre (des morceaux coupants)", // nieuw, nalezen
    'w.aanhanger': "la remorque", // nieuw, nalezen
    'w.bewoner': "l’habitant (quelqu’un qui vit ici)", // nieuw, nalezen
    's.litter.1': "Ramasse les déchets avec la pince à déchets.", // nieuw, nalezen
    's.litter.2': "Attention, il y a des morceaux de verre ici.", // nieuw, nalezen
    's.litter.3': "Mets les sacs poubelle près de la remorque.", // nieuw, nalezen
    'c.litter.q': "Quand est-ce que cet arbre sera taillé ?", // nieuw, nalezen
    'c.litter.a': "Je ne sais pas. Demandez à la commune.", // nieuw, nalezen
    'c.litter': "Ne touche jamais une aiguille", // nieuw, nalezen
    'c.litter.b': "Dans les parcs et les buissons, tu trouves parfois une aiguille de seringue. Ne la ramasse jamais avec la main, même avec des gants. Utilise la pince à déchets, et mets l’aiguille dans une boîte ou une bouteille dure avec un couvercle, jamais dans un sac poubelle. Dis-le à ton responsable. Une aiguille t’a piqué la peau ? Lave la plaie avec beaucoup d’eau, et appelle tout de suite un médecin. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.litter.p': "Il y a une aiguille ici.", // nieuw, nalezen
    'c.litter.s': "Tu vois une aiguille dans l’herbe, à côté d’un banc. Que fais-tu ?", // nieuw, nalezen
    'c.litter.o1': "Tu la ramasses avec la pince à déchets.", // nieuw, nalezen
    'c.litter.o2': "Tu la ramasses avec tes gants.", // nieuw, nalezen
    'c.litter.o3': "Tu la mets dans le sac poubelle.", // nieuw, nalezen
    'c.litter.w': "Une aiguille peut transmettre une maladie. Les gants n’arrêtent pas une aiguille, et une boîte dure protège les autres.", // nieuw, nalezen
    'u.frontdesk': "Accueil, courrier et réunions", // nieuw, nalezen
    'l.reception': "À l’accueil", // nieuw, nalezen
    'w.balie': "l’accueil, le comptoir", // nieuw, nalezen
    'w.bezoeker': "le visiteur", // nieuw, nalezen
    'w.intercom': "l’interphone (tu parles avec quelqu’un à la porte)", // nieuw, nalezen
    'w.doorverbinden': "transférer (un appel)", // nieuw, nalezen
    'w.toestel': "le poste (un numéro de téléphone à l’intérieur du bâtiment)", // nieuw, nalezen
    'w.wachtruimte': "la salle d’attente", // nieuw, nalezen
    's.reception.1': "Bonjour, je peux vous aider ?", // nieuw, nalezen
    's.reception.2': "Je vous transfère.", // nieuw, nalezen
    's.reception.3': "Asseyez-vous dans la salle d’attente, s’il vous plaît.", // nieuw, nalezen
    'c.reception.q': "J’ai rendez-vous avec Mme Jansen.", // nieuw, nalezen
    'c.reception.a': "Un moment. Je l’appelle.", // nieuw, nalezen
    'c.reception': "Tu es le premier visage", // nieuw, nalezen
    'c.reception.b': "À l’accueil, tu es la première personne qu’un visiteur rencontre. Lève les yeux, souris et dis bonjour, même quand tu as beaucoup à faire au téléphone. Dis “u” aux visiteurs (c’est le “vous” poli). Réponds au téléphone avec le nom de l’entreprise et ton propre nom. Tu ne connais pas la réponse ? Dis-le, et trouve quelqu’un qui sait. Ne donne jamais les noms, les numéros de téléphone ou les bureaux du personnel à des gens que tu ne connais pas.", // nieuw, nalezen
    'c.reception.p': "Bonjour, comment je peux vous aider ?", // nieuw, nalezen
    'c.reception.s': "Tu es au téléphone. Un visiteur arrive à l’accueil et attend. Que fais-tu ?", // nieuw, nalezen
    'c.reception.o1': "Tu lèves les yeux, et tu montres que tu arrives bientôt.", // nieuw, nalezen
    'c.reception.o2': "Tu finis ton appel, sans lever les yeux.", // nieuw, nalezen
    'c.reception.o3': "Tu raccroches tout de suite.", // nieuw, nalezen
    'c.reception.w': "Un visiteur qu’on a vu attend calmement. Un visiteur qu’on ne voit pas ne se sent pas le bienvenu.", // nieuw, nalezen
    'l.visitors': "Recevoir des visiteurs", // nieuw, nalezen
    'w.bezoekerspasje': "le badge visiteur", // nieuw, nalezen
    'w.lift': "l’ascenseur", // nieuw, nalezen
    'w.garderobe': "le vestiaire (là où tu accroches ton manteau)", // nieuw, nalezen
    'w.parkeerplaats': "la place de parking", // nieuw, nalezen
    'w.hal': "le hall (la grande pièce à l’entrée)", // nieuw, nalezen
    'w.begeleiden': "accompagner (marcher avec quelqu’un jusqu’à un endroit)", // nieuw, nalezen
    's.visitors.1': "Vous pouvez écrire votre nom ici ?", // nieuw, nalezen
    's.visitors.2': "Voici votre badge visiteur.", // nieuw, nalezen
    's.visitors.3': "Je vous accompagne jusqu’à l’ascenseur.", // nieuw, nalezen
    'c.visitors.q': "Où est-ce que je peux laisser mon manteau ?", // nieuw, nalezen
    'c.visitors.a': "Au vestiaire, à côté de l’ascenseur.", // nieuw, nalezen
    'c.visitors': "Chaque visiteur s’enregistre", // nieuw, nalezen
    'c.visitors.b': "Chaque visiteur écrit son nom sur la liste, ou s’enregistre sur l’écran, et reçoit un badge visiteur. Comme ça, tu sais qui est dans le bâtiment. C’est important en cas d’incendie : tout le monde doit sortir, et quelqu’un vérifie la liste. À la fin de la visite, le visiteur rend le badge. Ne laisse pas entrer derrière toi des gens que tu ne connais pas : demande gentiment qui ils viennent voir. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.visitors.p': "Vous venez voir qui ?", // nieuw, nalezen
    'c.visitors.s': "Un homme entre derrière un collègue. Il n’a pas de badge. Que fais-tu ?", // nieuw, nalezen
    'c.visitors.o1': "Tu lui demandes gentiment qui il vient voir.", // nieuw, nalezen
    'c.visitors.o2': "Tu le laisses passer : il est entré avec quelqu’un du personnel.", // nieuw, nalezen
    'c.visitors.o3': "Tu appelles tout de suite la police.", // nieuw, nalezen
    'c.visitors.w': "En cas d’urgence, tu dois savoir qui est à l’intérieur. Et tous ceux qui entrent n’ont pas une raison d’être là.", // nieuw, nalezen
    'l.mailroom': "Le courrier et les colis", // nieuw, nalezen
    'w.postkamer': "le service courrier (la salle du courrier)", // nieuw, nalezen
    'w.koerier': "le coursier (quelqu’un qui apporte des colis)", // nieuw, nalezen
    'w.postvak': "le casier à courrier (une case pour le courrier, une par personne)", // nieuw, nalezen
    'w.envelop': "l’enveloppe", // nieuw, nalezen
    'w.afdeling': "le service (une partie de l’entreprise)", // nieuw, nalezen
    'w.postkar': "le chariot à courrier", // nieuw, nalezen
    's.mailroom.1': "Le coursier apporte un colis.", // nieuw, nalezen
    's.mailroom.2': "Mets les lettres dans le bon casier.", // nieuw, nalezen
    's.mailroom.3': "Ce colis est abîmé.", // nieuw, nalezen
    'c.mailroom.q': "Ce colis est pour qui ?", // nieuw, nalezen
    'c.mailroom.a': "Pour le service Finances, au deuxième étage.", // nieuw, nalezen
    'c.mailroom': "Le courrier est privé", // nieuw, nalezen
    'c.mailroom.b': "Le courrier et les colis sont privés. N’ouvre jamais une lettre ou un colis pour quelqu’un d’autre. Vérifie le nom et le service sur chaque envoi, et mets-le dans le bon casier. Quand un coursier apporte un colis, regarde-le avant de signer : il est abîmé ? Note-le. Un colis est bizarre : il sent, il fuit, ou il n’a pas d’expéditeur ? Ne l’ouvre pas, et dis-le à ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.mailroom.p': "Le carton est mouillé et cassé.", // nieuw, nalezen
    'c.mailroom.s': "Un coursier apporte un colis. Un coin est mouillé et déchiré. Que fais-tu ?", // nieuw, nalezen
    'c.mailroom.o1': "Tu notes les dégâts avant de signer.", // nieuw, nalezen
    'c.mailroom.o2': "Tu signes, et tu ne le dis à personne.", // nieuw, nalezen
    'c.mailroom.o3': "Tu l’ouvres, pour voir si tout est là.", // nieuw, nalezen
    'c.mailroom.w': "Après ta signature, on dirait que le colis était en bon état. Alors personne ne paie les dégâts.", // nieuw, nalezen
    'l.meetingroom': "Préparer une salle de réunion", // nieuw, nalezen
    'w.vergaderzaal': "la salle de réunion", // nieuw, nalezen
    'w.beamer': "le projecteur", // nieuw, nalezen
    'w.whiteboard': "le tableau blanc", // nieuw, nalezen
    'w.thermoskan': "la thermos (elle garde le café chaud)", // nieuw, nalezen
    'w.kopje': "la tasse", // nieuw, nalezen
    'w.koffieautomaat': "la machine à café", // nieuw, nalezen
    's.meetingroom.1': "Mets dix chaises autour de la table.", // nieuw, nalezen
    's.meetingroom.2': "Prépare le café et le thé.", // nieuw, nalezen
    's.meetingroom.3': "Le projecteur ne marche pas.", // nieuw, nalezen
    'c.meetingroom.q': "La réunion commence à quelle heure ?", // nieuw, nalezen
    'c.meetingroom.a': "À dix heures. Fais en sorte que tout soit prêt.", // nieuw, nalezen
    'c.meetingroom': "Tout est prêt avant le premier invité", // nieuw, nalezen
    'c.meetingroom.b': "Une salle de réunion doit être prête avant que la première personne entre. Vérifie les chaises, la table, le projecteur et les câbles. Mets le café, le thé et l’eau, avec des tasses et du lait. Porte les boissons chaudes avec précaution, et jamais au-dessus des gens. Après la réunion, nettoie la table et rapporte tout. Ce que tu entends dans une salle de réunion, tu le gardes pour toi.", // nieuw, nalezen
    'c.meetingroom.p': "La salle est prête.", // nieuw, nalezen
    'c.meetingroom.s': "La réunion commence dans cinq minutes. Le projecteur ne marche pas. Que fais-tu ?", // nieuw, nalezen
    'c.meetingroom.o1': "Tu le dis tout de suite à l’organisateur.", // nieuw, nalezen
    'c.meetingroom.o2': "Tu attends : peut-être que personne n’en a besoin.", // nieuw, nalezen
    'c.meetingroom.o3': "Tu laisses un mot sur la table.", // nieuw, nalezen
    'c.meetingroom.w': "Cinq minutes, c’est encore assez pour le réparer ou trouver une autre salle. Plus tard, tout le monde attend.", // nieuw, nalezen
    'u.maintenance': "Pannes, réparations et déménagement", // nieuw, nalezen
    'l.faults': "Signaler une panne", // nieuw, nalezen
    'w.melding': "le signalement (tu dis que quelque chose ne va pas)", // nieuw, nalezen
    'w.lekkage': "la fuite (de l’eau sort)", // nieuw, nalezen
    'w.verwarming': "le chauffage", // nieuw, nalezen
    'w.airco': "la climatisation", // nieuw, nalezen
    'w.afvoer': "l’évacuation (le tuyau où l’eau s’en va)", // nieuw, nalezen
    'w.verstopt': "bouché (plus rien ne passe)", // nieuw, nalezen
    's.faults.1': "Je signale la panne.", // nieuw, nalezen
    's.faults.2': "Il y a une fuite dans la cuisine.", // nieuw, nalezen
    's.faults.3': "L’évacuation des toilettes est bouchée.", // nieuw, nalezen
    'c.faults.q': "Pourquoi il fait si froid ici ?", // nieuw, nalezen
    'c.faults.a': "Le chauffage est en panne. Le technicien vient demain.", // nieuw, nalezen
    'c.faults': "Signale-le, ne répare pas sans aide", // nieuw, nalezen
    'c.faults.b': "Tu vois quelque chose de cassé, comme une fuite, une lampe éteinte ou une porte qui ne ferme pas ? Signale-le, même si c’est petit : dans le système ou à ton responsable. Dis où c’est, ce que tu vois et depuis quand. Ne répare pas toi-même l’électricité, le gaz ou le chauffage. Ça sent le gaz ? N’utilise pas d’interrupteur ni de téléphone tout près, ouvre les fenêtres, fais sortir les gens, et appelle les secours dehors. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.faults.p': "Je veux signaler une panne.", // nieuw, nalezen
    'c.faults.s': "De l’eau goutte du plafond dans le couloir. Que fais-tu ?", // nieuw, nalezen
    'c.faults.o1': "Tu le signales, et tu mets un seau dessous.", // nieuw, nalezen
    'c.faults.o2': "Tu attends : ça va peut-être s’arrêter tout seul.", // nieuw, nalezen
    'c.faults.o3': "Tu ouvres le plafond pour regarder.", // nieuw, nalezen
    'c.faults.w': "Une petite fuite peut faire de gros dégâts. Un seau garde le sol sec, pour que personne ne glisse.", // nieuw, nalezen
    'l.repairs': "Les petites réparations", // nieuw, nalezen
    'w.vervangen': "remplacer (mettre un neuf à la place)", // nieuw, nalezen
    'w.deurklink': "la poignée de porte", // nieuw, nalezen
    'w.scharnier': "la charnière", // nieuw, nalezen
    'w.gereedschapskist': "la boîte à outils", // nieuw, nalezen
    'w.rookmelder': "le détecteur de fumée", // nieuw, nalezen
    'w.batterij': "la pile", // nieuw, nalezen
    's.repairs.1': "Remplace la lampe dans le couloir.", // nieuw, nalezen
    's.repairs.2': "La poignée de porte bouge.", // nieuw, nalezen
    's.repairs.3': "Prends l’escabeau, pas une chaise.", // nieuw, nalezen
    'c.repairs.q': "C’est le détecteur de fumée qui bipe ?", // nieuw, nalezen
    'c.repairs.a': "Oui, la pile est presque vide.", // nieuw, nalezen
    'c.repairs': "Un escabeau, jamais une chaise", // nieuw, nalezen
    'c.repairs.b': "Pour une lampe ou une étagère haute, utilise un escabeau, jamais une chaise, une table ou une caisse. Pose-le sur un sol plat, ouvre-le complètement, et ne monte pas sur la marche du haut. Éteins la lumière avant de changer une lampe, et laisse refroidir une vieille lampe. Fais seulement les réparations que tu as apprises. Range tes outils dans la boîte à outils quand tu as fini, pour que personne ne trébuche dessus. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.repairs.p': "Je vais chercher l’escabeau.", // nieuw, nalezen
    'c.repairs.s': "Une lampe est cassée dans le bureau. L’escabeau est à un autre étage. Que fais-tu ?", // nieuw, nalezen
    'c.repairs.o1': "Tu vas chercher l’escabeau.", // nieuw, nalezen
    'c.repairs.o2': "Tu montes sur une chaise de bureau.", // nieuw, nalezen
    'c.repairs.o3': "Tu montes sur le bureau.", // nieuw, nalezen
    'c.repairs.w': "Une chaise peut rouler ou basculer. Une chute d’une chaise peut te blesser gravement.", // nieuw, nalezen
    'l.moving': "Déménager un poste de travail", // nieuw, nalezen
    'w.verhuisdoos': "le carton de déménagement", // nieuw, nalezen
    'w.bureau': "le bureau (la table de travail)", // nieuw, nalezen
    'w.bureaustoel': "la chaise de bureau", // nieuw, nalezen
    'w.werkplek': "le poste de travail (le bureau où quelqu’un travaille)", // nieuw, nalezen
    'w.kamernummer': "le numéro de bureau", // nieuw, nalezen
    'w.plattegrond': "le plan (une carte du bâtiment)", // nieuw, nalezen
    's.moving.1': "Écris le numéro de bureau sur chaque carton.", // nieuw, nalezen
    's.moving.2': "Mets les cartons sur le diable.", // nieuw, nalezen
    's.moving.3': "Vide le poste de travail.", // nieuw, nalezen
    'c.moving.q': "Ce bureau doit aller où ?", // nieuw, nalezen
    'c.moving.a': "Au bureau douze. Regarde le plan.", // nieuw, nalezen
    'c.moving': "Déménager : soulève bien, étiquette tout", // nieuw, nalezen
    'c.moving.b': "Déménager, c’est un travail lourd. Ne remplis pas trop un carton : les livres et les dossiers sont lourds. Soulève avec les genoux pliés et le dos droit, près de ton corps. Utilise le diable pour plusieurs cartons, et soulève un bureau à deux. Écris le nouveau numéro de bureau sur chaque carton, chaque chaise et chaque ordinateur. Débranche d’abord les câbles. Ne mets jamais de cartons dans un couloir ou devant une sortie de secours.", // nieuw, nalezen
    'c.moving.p': "Tu peux m’aider à soulever ça ?", // nieuw, nalezen
    'c.moving.s': "Tu dois déplacer un bureau lourd. Ton collègue est en pause. Que fais-tu ?", // nieuw, nalezen
    'c.moving.o1': "Tu attends de l’aide, et vous le soulevez à deux.", // nieuw, nalezen
    'c.moving.o2': "Tu le traînes sans aide.", // nieuw, nalezen
    'c.moving.o3': "Tu le soulèves sans aide, très prudemment.", // nieuw, nalezen
    'c.moving.w': "Un bureau lourd peut te faire mal au dos quand tu le soulèves sans aide. À deux, c’est facile et sans danger.", // nieuw, nalezen
    'l.closing': "Ouvrir et fermer le bâtiment", // nieuw, nalezen
    'w.sleutelbos': "le trousseau de clés", // nieuw, nalezen
    'w.afsluiten': "fermer à clé", // nieuw, nalezen
    'w.ronde': "la ronde (un tour devant chaque pièce)", // nieuw, nalezen
    'w.raam': "la fenêtre", // nieuw, nalezen
    'w.alarmcode': "le code de l’alarme", // nieuw, nalezen
    'w.nachtslot': "le verrou de nuit (la serrure en plus pour la nuit)", // nieuw, nalezen
    's.closing.1': "Je fais la dernière ronde du bâtiment.", // nieuw, nalezen
    's.closing.2': "Toutes les fenêtres sont fermées ?", // nieuw, nalezen
    's.closing.3': "Ferme la porte avec le verrou de nuit.", // nieuw, nalezen
    'c.closing.q': "Il y a encore quelqu’un à l’intérieur ?", // nieuw, nalezen
    'c.closing.a': "Non, tout le monde est parti. Je ferme à clé.", // nieuw, nalezen
    'c.closing': "Le code de l’alarme est secret", // nieuw, nalezen
    'c.closing.b': "À la fin de la journée, tu fais la dernière ronde. Vérifie qu’il ne reste personne à l’intérieur, que les fenêtres sont fermées et les lumières éteintes. Les sorties de secours restent libres. Garde les clés sur toi, jamais dans un tiroir. Le code de l’alarme est secret : ne le donne jamais à personne, même pas au téléphone. L’alarme se déclenche ? Suis les étapes de ton entreprise. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.closing.p': "Je ne donne pas le code de l’alarme.", // nieuw, nalezen
    'c.closing.s': "Quelqu’un appelle : “Je suis de la société d’alarme. Quel est ton code ?” Que fais-tu ?", // nieuw, nalezen
    'c.closing.o1': "Tu dis non, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.closing.o2': "Tu donnes le code : il a l’air gentil.", // nieuw, nalezen
    'c.closing.o3': "Tu donnes seulement la moitié du code.", // nieuw, nalezen
    'c.closing.w': "Une vraie société d’alarme ne demande pas ton code au téléphone. Un voleur, peut-être.", // nieuw, nalezen
    'u.guarding': "Rondes et contrôle d’accès", // nieuw, nalezen
    'l.patrol': "La ronde", // nieuw, nalezen
    'w.surveilleren': "surveiller (faire le tour et regarder)", // nieuw, nalezen
    'w.zaklamp': "la lampe de poche", // nieuw, nalezen
    'w.terrein': "le terrain (le terrain autour d’un bâtiment)", // nieuw, nalezen
    'w.hek': "la clôture, le portail", // nieuw, nalezen
    'w.inbraak': "le cambriolage (quelqu’un entre pour voler)", // nieuw, nalezen
    'w.openstaan': "être ouvert (une porte ou une fenêtre qui devrait être fermée)", // nieuw, nalezen
    's.patrol.1': "Je fais une ronde toutes les deux heures.", // nieuw, nalezen
    's.patrol.2': "Le portail derrière le hangar est ouvert.", // nieuw, nalezen
    's.patrol.3': "Prends ta lampe de poche.", // nieuw, nalezen
    'c.patrol.q': "Tu as vu quelque chose pendant ta ronde ?", // nieuw, nalezen
    'c.patrol.a': "Oui. Une fenêtre était ouverte près de la porte de derrière.", // nieuw, nalezen
    'c.patrol': "Regarde et signale, ne joue pas au héros", // nieuw, nalezen
    'c.patrol.b': "Pendant ta ronde, tu regardes : les portes et les fenêtres sont fermées, la clôture est intacte, il y a quelqu’un qui ne devrait pas être là ? Note ce que tu vois, avec l’heure. Tu vois quelque chose de bizarre, comme une vitre cassée ou une personne la nuit ? N’entre pas sans quelqu’un avec toi. Appelle le poste de contrôle ou la police avec la radio ou le téléphone, et attends dans un endroit sûr. Ta propre sécurité passe en premier. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.patrol.p': "Je vois quelqu’un près de la clôture.", // nieuw, nalezen
    'c.patrol.s': "La nuit, tu vois une porte qui a été forcée. Tu entends du bruit à l’intérieur. Que fais-tu ?", // nieuw, nalezen
    'c.patrol.o1': "Tu restes dehors, et tu appelles à l’aide.", // nieuw, nalezen
    'c.patrol.o2': "Tu entres vite, et tu regardes.", // nieuw, nalezen
    'c.patrol.o3': "Tu cries à l’intérieur que tu arrives.", // nieuw, nalezen
    'c.patrol.w': "Un voleur à l’intérieur peut être dangereux. La police sait quoi faire ; ton travail, c’est de voir et de signaler.", // nieuw, nalezen
    'l.access': "Le contrôle d’accès", // nieuw, nalezen
    'w.slagboom': "la barrière (une barre en travers de la route qui se lève)", // nieuw, nalezen
    'w.toegangspas': "la carte d’accès (une carte qui ouvre la porte)", // nieuw, nalezen
    'w.legitimatie': "la pièce d’identité (un passeport ou une carte d’identité)", // nieuw, nalezen
    'w.draaihek': "le tourniquet (une porte qui tourne, pour une personne à la fois)", // nieuw, nalezen
    'w.kenteken': "la plaque d’immatriculation (les lettres et les chiffres d’une voiture)", // nieuw, nalezen
    'w.toegang': "l’accès (tu as le droit d’entrer)", // nieuw, nalezen
    's.access.1': "Je peux voir votre pièce d’identité ?", // nieuw, nalezen
    's.access.2': "Votre carte ne marche pas. Je passe un coup de fil.", // nieuw, nalezen
    's.access.3': "J’ouvre la barrière.", // nieuw, nalezen
    'c.access.q': "Je peux entrer ? J’ai oublié ma carte.", // nieuw, nalezen
    'c.access.a': { m: "Désolé, sans carte, vous ne pouvez pas entrer.", f: "Désolée, sans carte, vous ne pouvez pas entrer.", x: "Je regrette, sans carte, vous ne pouvez pas entrer." }, // nieuw, nalezen
    'c.access': "Pas de carte, pas d’entrée", // nieuw, nalezen
    'c.access.b': "À la barrière ou à l’accueil, tu contrôles qui entre. Tout le monde a besoin d’une carte, ou doit être sur la liste. Sois aimable, même quand quelqu’un est en colère ou pressé. Ne fais pas d’exception parce que quelqu’un dit qu’il est le chef : vérifie. Ne prête jamais ta propre carte à personne, et ne laisse jamais quelqu’un entrer derrière toi. Une carte perdue doit être signalée tout de suite. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.access.p': "Je peux voir votre carte ?", // nieuw, nalezen
    'c.access.s': "Un homme en costume dit : “Je suis le nouveau directeur. Je n’ai pas encore de carte.” Que fais-tu ?", // nieuw, nalezen
    'c.access.o1': "Tu vérifies, avant de le laisser entrer.", // nieuw, nalezen
    'c.access.o2': "Tu le laisses entrer : il a l’air important.", // nieuw, nalezen
    'c.access.o3': "Tu lui donnes ta propre carte.", // nieuw, nalezen
    'c.access.w': "Tout le monde peut dire qu’il est le directeur. Une vérification rapide protège le bâtiment, et un vrai directeur va comprendre.", // nieuw, nalezen
    'l.cameras': "Les caméras et le poste de contrôle", // nieuw, nalezen
    'w.meldkamer': "le poste de contrôle (là où des gens regardent les caméras et répondent aux appels)", // nieuw, nalezen
    'w.beeldscherm': "l’écran", // nieuw, nalezen
    'w.camerabeelden': "les images des caméras (ce que la caméra a filmé)", // nieuw, nalezen
    'w.inzoomen': "zoomer", // nieuw, nalezen
    'w.bewegingsmelder': "le détecteur de mouvement (il voit quand quelque chose bouge)", // nieuw, nalezen
    'w.verdachte': "le suspect", // nieuw, nalezen
    's.cameras.1': "Sur la caméra trois, je vois quelqu’un près de la clôture.", // nieuw, nalezen
    's.cameras.2': "Je zoome.", // nieuw, nalezen
    's.cameras.3': "Le poste de contrôle appelle la police.", // nieuw, nalezen
    'c.cameras.q': "Qu’est-ce que tu vois sur l’écran ?", // nieuw, nalezen
    'c.cameras.a': "Un homme près de la clôture. J’envoie un collègue.", // nieuw, nalezen
    'c.cameras': "Les images des caméras sont privées", // nieuw, nalezen
    'c.cameras.b': "Les caméras filment des gens : le personnel, les visiteurs et les passants. Ce que tu vois sur les écrans est privé. Regarde seulement pour ton travail, et ne filme jamais l’écran avec ton téléphone. N’envoie jamais d’images à des amis et ne les mets jamais sur internet. Il y a un incident ? Note la caméra et l’heure, et dis-le à ton responsable. C’est seulement ton entreprise qui décide qui reçoit les images, par exemple la police. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.cameras.p': "Je n’ai pas le droit de montrer ça.", // nieuw, nalezen
    'c.cameras.s': "Un collègue te demande de lui envoyer une vidéo drôle des caméras. Que fais-tu ?", // nieuw, nalezen
    'c.cameras.o1': "Tu dis non : les images sont privées.", // nieuw, nalezen
    'c.cameras.o2': "Tu l’envoies, seulement à lui.", // nieuw, nalezen
    'c.cameras.o3': "Tu filmes l’écran avec ton téléphone.", // nieuw, nalezen
    'c.cameras.w': "Les gens sur les images n’ont pas accepté d’être partagés. Envoyer les images peut te faire perdre ton travail.", // nieuw, nalezen
    'l.report': "La radio et le rapport", // nieuw, nalezen
    'w.portofoon': "la radio, le talkie-walkie", // nieuw, nalezen
    'w.rapport': "le rapport (ce qui s’est passé, par écrit)", // nieuw, nalezen
    'w.incident': "l’incident (quelque chose qui s’est mal passé)", // nieuw, nalezen
    'w.tijdstip': "l’heure (quand quelque chose s’est passé)", // nieuw, nalezen
    'w.logboek': "le registre (un cahier ou une appli où tu notes tout)", // nieuw, nalezen
    'w.oproepen': "appeler (à la radio)", // nieuw, nalezen
    's.report.1': "J’écris un rapport sur l’incident.", // nieuw, nalezen
    's.report.2': "Il était quelle heure exactement ?", // nieuw, nalezen
    's.report.3': "Je ne t’entends pas bien. Répète.", // nieuw, nalezen
    'c.report.q': "Qu’est-ce qu’il faut mettre dans le rapport ?", // nieuw, nalezen
    'c.report.a': "Ce qui s’est passé, où et à quelle heure.", // nieuw, nalezen
    'c.report': "Écris-le tout de suite", // nieuw, nalezen
    'c.report.b': "Écris un rapport juste après un incident, pendant que tu t’en souviens encore bien. Écris ce que tu as vu et entendu toi-même : ce qui s’est passé, où, à quelle heure, et qui était là. Écris des faits, pas ce que tu penses. À la radio, parle court et clair, et attends que l’autre personne ait fini. Dis qui tu es et où tu es. Un bon rapport aide la police, ton entreprise et toi.", // nieuw, nalezen
    'c.report.p': "Je le note tout de suite.", // nieuw, nalezen
    'c.report.s': { m: "Après une nuit chargée, tu es très fatigué. Il y a eu un petit incident. Que fais-tu ?", f: "Après une nuit chargée, tu es très fatiguée. Il y a eu un petit incident. Que fais-tu ?", x: "Après une nuit chargée, tu as très sommeil. Il y a eu un petit incident. Que fais-tu ?" }, // nieuw, nalezen
    'c.report.o1': "Tu écris le rapport avant de rentrer chez toi.", // nieuw, nalezen
    'c.report.o2': "Tu l’écris demain, après une bonne nuit.", // nieuw, nalezen
    'c.report.o3': "Tu ne l’écris pas : c’était juste un petit incident.", // nieuw, nalezen
    'c.report.w': "Demain, tu oublies des détails. Un rapport sans heure ou sans lieu n’aide personne.", // nieuw, nalezen
    'u.incidents': "Les urgences et le magasin", // nieuw, nalezen
    'l.evacuation': "L’incendie et l’évacuation", // nieuw, nalezen
    'w.brandmelder': "le déclencheur d’alarme incendie (un boîtier rouge sur lequel tu appuies en cas de feu)", // nieuw, nalezen
    'w.brandweer': "les pompiers", // nieuw, nalezen
    'w.branddeur': "la porte coupe-feu (elle arrête le feu et la fumée)", // nieuw, nalezen
    'w.brandmeldcentrale': "la centrale d’alarme incendie (elle montre où est l’alarme)", // nieuw, nalezen
    'w.ontruimingsplan': "le plan d’évacuation (qui fait quoi quand tout le monde doit sortir)", // nieuw, nalezen
    'w.sirene': "la sirène", // nieuw, nalezen
    's.evacuation.1': "Il y a une alarme incendie dans le hall deux.", // nieuw, nalezen
    's.evacuation.2': "Garde les portes coupe-feu fermées.", // nieuw, nalezen
    's.evacuation.3': "J’attends les pompiers à l’entrée.", // nieuw, nalezen
    'c.evacuation.q': "Tout le monde est dehors ?", // nieuw, nalezen
    'c.evacuation.a': "Non, il manque encore deux personnes de la liste.", // nieuw, nalezen
    'c.evacuation': "Le feu : d’abord l’alarme, ensuite dehors", // nieuw, nalezen
    'c.evacuation.b': "Tu vois du feu ou de la fumée ? Appuie sur le déclencheur d’alarme incendie, ou appelle le 112. Ensuite, aide les gens à sortir par les sorties de secours, jamais par l’ascenseur. Ferme les portes derrière toi, mais ne les ferme pas à clé. Éteins un feu seulement quand il est petit et que tu as appris comment faire. Va au point de rassemblement, et compte qui est là. Accueille les pompiers à l’entrée, et dis-leur ce que tu sais. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.evacuation.p': "Tout le monde dehors, au point de rassemblement.", // nieuw, nalezen
    'c.evacuation.s': "L’alarme incendie sonne. Un homme veut prendre l’ascenseur. Que fais-tu ?", // nieuw, nalezen
    'c.evacuation.o1': "Tu l’envoies vers l’escalier.", // nieuw, nalezen
    'c.evacuation.o2': "Tu le laisses faire : l’ascenseur est plus rapide.", // nieuw, nalezen
    'c.evacuation.o3': "Tu prends l’ascenseur avec lui.", // nieuw, nalezen
    'c.evacuation.w': "Pendant un incendie, l’ascenseur peut s’arrêter ou se remplir de fumée. L’escalier est le chemin sûr pour sortir.", // nieuw, nalezen
    'l.firstaid': "Les premiers secours et le 112", // nieuw, nalezen
    'w.ehbo': "les premiers secours", // nieuw, nalezen
    'w.aed': "le défibrillateur, le DAE (un appareil qui aide un cœur qui s’est arrêté)", // nieuw, nalezen
    'w.reanimeren': "réanimer (appuyer sur la poitrine pour sauver une vie)", // nieuw, nalezen
    'w.bewusteloos': "inconscient (la personne ne se réveille pas)", // nieuw, nalezen
    'w.ademen': "respirer", // nieuw, nalezen
    'w.alarmnummer': "le numéro d’urgence (112)", // nieuw, nalezen
    's.firstaid.1': "Appelle le 112. Demande une ambulance.", // nieuw, nalezen
    's.firstaid.2': "Va chercher le défibrillateur à l’accueil.", // nieuw, nalezen
    's.firstaid.3': "Il ne respire pas. Je commence la réanimation.", // nieuw, nalezen
    'c.firstaid.q': "Où est le défibrillateur ?", // nieuw, nalezen
    'c.firstaid.a': "À l’entrée, à côté de l’ascenseur.", // nieuw, nalezen
    'c.firstaid': "Appelle le 112, réanime, va chercher le défibrillateur", // nieuw, nalezen
    'c.firstaid.b': "Quelqu’un tombe et ne réagit pas ? Appelle tout de suite le 112, ou demande à quelqu’un d’autre d’appeler. Regarde si la personne respire normalement. Sinon : commence la réanimation, et demande à quelqu’un d’aller chercher le défibrillateur. Le défibrillateur parle et te dit quoi faire ; tu ne peux pas te tromper. Continue jusqu’à ce que l’ambulance prenne le relais. Tu as suivi une formation aux premiers secours ? Dis-le à tes collègues, pour qu’ils sachent qui appeler.", // nieuw, nalezen
    'c.firstaid.p': "Appelle le 112 et va chercher le défibrillateur.", // nieuw, nalezen
    'c.firstaid.s': "Un homme tombe dans le hall. Il ne bouge pas et il ne respire pas. Que fais-tu ?", // nieuw, nalezen
    'c.firstaid.o1': "Tu appelles le 112, et tu commences la réanimation.", // nieuw, nalezen
    'c.firstaid.o2': "Tu attends pour voir s’il se réveille.", // nieuw, nalezen
    'c.firstaid.o3': "Tu le soulèves, et tu le mets sur une chaise.", // nieuw, nalezen
    'c.firstaid.w': "Quand le cœur s’arrête, chaque minute compte. La réanimation et un défibrillateur peuvent sauver une vie avant que l’ambulance arrive.", // nieuw, nalezen
    'l.shoplifting': "Le vol à l’étalage", // nieuw, nalezen
    'w.winkeldiefstal': "le vol à l’étalage", // nieuw, nalezen
    'w.heterdaad': "en flagrant délit (tu le vois se passer)", // nieuw, nalezen
    'w.aanhouden': "retenir quelqu’un (jusqu’à ce que la police arrive)", // nieuw, nalezen
    'w.detectiepoortje': "le portique antivol (il bipe à la porte)", // nieuw, nalezen
    'w.alarmlabel': "l’étiquette antivol (elle fait biper le portique)", // nieuw, nalezen
    'w.verstoppen': "cacher", // nieuw, nalezen
    's.shoplifting.1': "Le portique bipe à la sortie.", // nieuw, nalezen
    's.shoplifting.2': "J’ai vu le vol.", // nieuw, nalezen
    's.shoplifting.3': "Je le retiens jusqu’à ce que la police arrive.", // nieuw, nalezen
    'c.shoplifting.q': "Je peux fouiller son sac ?", // nieuw, nalezen
    'c.shoplifting.a': "Non. C’est la police qui fait ça.", // nieuw, nalezen
    'c.shoplifting': "Le vol à l’étalage : regarde, signale, pas de violence", // nieuw, nalezen
    'c.shoplifting.b': "Tu as vu quelqu’un voler ? Reste calme, et appelle tout de suite la police. Certains magasins laissent un agent retenir un voleur jusqu’à ce que la police arrive ; d’autres disent : seulement regarder, signaler et retenir à quoi la personne ressemble. Ne frappe jamais et ne donne jamais de coups de pied, et ne tiens jamais quelqu’un par le cou. Ne fouille jamais une personne, ses poches ou son sac : c’est le travail de la police. Note ce que tu as vu, et garde les images des caméras. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shoplifting.p': "Vous pouvez venir avec moi, s’il vous plaît ?", // nieuw, nalezen
    'c.shoplifting.s': "Tu as vu une femme mettre une bouteille dans son sac. Elle sort. Que fais-tu ?", // nieuw, nalezen
    'c.shoplifting.o1': "Tu l’arrêtes calmement, et tu appelles la police.", // nieuw, nalezen
    'c.shoplifting.o2': "Tu fouilles vite son sac à la porte.", // nieuw, nalezen
    'c.shoplifting.o3': "Tu la pousses fort par terre.", // nieuw, nalezen
    'c.shoplifting.w': "Fouiller une personne, c’est le travail de la police, et la violence peut blesser quelqu’un et te mettre en difficulté.", // nieuw, nalezen
    'l.aggression': "Les personnes difficiles", // nieuw, nalezen
    'w.agressie': "l’agression (un comportement en colère, violent)", // nieuw, nalezen
    'w.schelden': "insulter quelqu’un", // nieuw, nalezen
    'w.kalmeren': "se calmer", // nieuw, nalezen
    'w.afstand': "la distance", // nieuw, nalezen
    'w.huisverbod': "l’interdiction d’entrer (tu ne peux plus entrer ici)", // nieuw, nalezen
    'w.bodycam': "la caméra-piéton (une petite caméra sur ton uniforme)", // nieuw, nalezen
    's.aggression.1': "Calmez-vous, monsieur. Je veux vous aider.", // nieuw, nalezen
    's.aggression.2': "Garde tes distances et reste calme.", // nieuw, nalezen
    's.aggression.3': "Vous avez une interdiction d’entrer. Vous devez partir maintenant.", // nieuw, nalezen
    'c.aggression.q': "Pourquoi je ne peux pas entrer ?", // nieuw, nalezen
    'c.aggression.a': "Vous avez une interdiction d’entrer ici.", // nieuw, nalezen
    'c.aggression': "Reste calme, garde tes distances", // nieuw, nalezen
    'c.aggression.b': "Une personne en colère se calme plus vite quand tu restes calme. Parle lentement et doucement, et dis “u” à la personne. Garde la longueur d’un bras ou plus entre vous, et garde une sortie derrière toi. Ne touche pas la personne et ne crie pas à ton tour. Ça devient dangereux ? Recule, et appelle un collègue ou la police. Ensuite, note ce qui s’est passé. Après un incident grave, parles-en avec quelqu’un. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.aggression.p': "Calmez-vous. Je veux vous aider.", // nieuw, nalezen
    'c.aggression.s': "Un homme crie sur toi et vient très près. Que fais-tu ?", // nieuw, nalezen
    'c.aggression.o1': "Tu recules, et tu parles calmement.", // nieuw, nalezen
    'c.aggression.o2': "Tu cries plus fort que lui.", // nieuw, nalezen
    'c.aggression.o3': "Tu le pousses loin de toi.", // nieuw, nalezen
    'c.aggression.w': "Des mots calmes et de l’espace font baisser la tension. Crier ou pousser rend tout pire.", // nieuw, nalezen
    'u.foodhygiene': "L’hygiène et le froid", // nieuw, nalezen
    'l.hygienelock': "Le sas d’hygiène", // nieuw, nalezen
    'w.hygienesluis': "le sas d’hygiène (la pièce où tu te laves avant d’entrer)", // nieuw, nalezen
    'w.baardnetje': "le cache-barbe", // nieuw, nalezen
    'w.laarzenwasser': "le lave-bottes (des brosses qui nettoient tes bottes)", // nieuw, nalezen
    'w.desinfecteren': "désinfecter (tuer les microbes)", // nieuw, nalezen
    'w.werkjas': "la blouse de travail", // nieuw, nalezen
    'w.bacterie': "le microbe, la bactérie", // nieuw, nalezen
    's.hygienelock.1': "Lave-toi les mains et désinfecte-les.", // nieuw, nalezen
    's.hygienelock.2': "Mets ta charlotte et ton cache-barbe.", // nieuw, nalezen
    's.hygienelock.3': "Passe dans le lave-bottes.", // nieuw, nalezen
    'c.hygienelock.q': "Je peux garder ma montre ?", // nieuw, nalezen
    'c.hygienelock.a': "Non, tous les bijoux s’enlèvent.", // nieuw, nalezen
    'c.hygienelock': "Propre pour entrer, à chaque fois", // nieuw, nalezen
    'c.hygienelock.b': "Dans une usine alimentaire, c’est toi le plus grand danger pour la nourriture : les microbes viennent de tes mains, de tes cheveux et de tes vêtements. Alors passe par le sas d’hygiène chaque fois que tu entres, aussi après une pause ou les toilettes. Charlotte sur la tête, cache-barbe si tu as une barbe, vêtements de travail propres, tous les bijoux enlevés. Lave-toi les mains avec du savon, sèche-les et désinfecte-les. Tu es malade, avec de la diarrhée ou des vomissements ? Dis-le à ton responsable avant de commencer. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.hygienelock.p': "J’ai la diarrhée. Je peux travailler aujourd’hui ?", // nieuw, nalezen
    'c.hygienelock.s': "Tu reviens des toilettes. Ton collègue dit : “Saute le sas, on a beaucoup de travail.” Que fais-tu ?", // nieuw, nalezen
    'c.hygienelock.o1': "Tu passes quand même par le sas.", // nieuw, nalezen
    'c.hygienelock.o2': "Tu le sautes, juste cette fois.", // nieuw, nalezen
    'c.hygienelock.o3': "Tu mets seulement des gants neufs.", // nieuw, nalezen
    'c.hygienelock.w': "Les microbes des toilettes peuvent rendre beaucoup de clients malades. Quelques minutes dans le sas l’empêchent.", // nieuw, nalezen
    'l.allergens': "Les allergènes", // nieuw, nalezen
    'w.allergeen': "l’allergène (un aliment qui rend certaines personnes très malades)", // nieuw, nalezen
    'w.noten': "les noix (les fruits à coque)", // nieuw, nalezen
    'w.pinda': "la cacahuète", // nieuw, nalezen
    'w.gluten': "le gluten (dans le blé, donc dans le pain et les gâteaux)", // nieuw, nalezen
    'w.sesam': "le sésame (des petites graines, par exemple sur le pain)", // nieuw, nalezen
    'w.kruisbesmetting': "la contamination croisée (quelque chose entre dans un aliment où il ne doit pas être)", // nieuw, nalezen
    's.allergens.1': "Ce produit contient des fruits à coque.", // nieuw, nalezen
    's.allergens.2': "Regarde sur l’étiquette quels allergènes il y a dedans.", // nieuw, nalezen
    's.allergens.3': "Nettoie bien tout après les cacahuètes.", // nieuw, nalezen
    'c.allergens.q': "Ce bac peut aller avec les autres ?", // nieuw, nalezen
    'c.allergens.a': "Non, il y a des fruits à coque dedans.", // nieuw, nalezen
    'c.allergens': "Une trace suffit", // nieuw, nalezen
    'c.allergens.b': "Pour certaines personnes, une toute petite quantité de fruits à coque, de cacahuète, de lait, d’œuf, de gluten ou de sésame peut mettre la vie en danger. C’est pour ça que l’étiquette doit dire exactement ce qu’il y a dans un produit. Garde les allergènes à part : leurs propres bacs, leurs propres outils et leurs propres couleurs. Après un produit avec un allergène, la ligne est nettoyée avant le produit suivant. Ne remplace jamais un ingrédient par un autre, même quand il a l’air pareil. Tu as un doute ? Demande. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.allergens.p': "Il y a des fruits à coque là-dedans ?", // nieuw, nalezen
    'c.allergens.s': "Il n’y a plus d’amandes. Un collègue dit : “Prends des noisettes, personne ne va le remarquer.” Que fais-tu ?", // nieuw, nalezen
    'c.allergens.o1': "Tu dis non, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.allergens.o2': "Tu les prends : des noix, c’est des noix.", // nieuw, nalezen
    'c.allergens.o3': "Tu les prends, et tu ne changes rien sur l’étiquette.", // nieuw, nalezen
    'c.allergens.w': "L’étiquette doit dire ce qu’il y a dedans. Un mauvais fruit à coque peut rendre très malade une personne allergique.", // nieuw, nalezen
    'l.coldroom': "La chambre froide et le congélateur", // nieuw, nalezen
    'w.temperatuur': "la température", // nieuw, nalezen
    'w.graden': "les degrés (°C)", // nieuw, nalezen
    'w.bevroren': "congelé", // nieuw, nalezen
    'w.ontdooien': "décongeler", // nieuw, nalezen
    'w.koelketen': "la chaîne du froid (la nourriture reste froide tout le long du chemin)", // nieuw, nalezen
    'w.thermokleding': "les vêtements thermiques (des vêtements chauds pour le froid)", // nieuw, nalezen
    's.coldroom.1': "Il fait moins dix-huit degrés dans la chambre de congélation.", // nieuw, nalezen
    's.coldroom.2': "Mets tout de suite la viande dans la chambre froide.", // nieuw, nalezen
    's.coldroom.3': "Écris la température sur la liste.", // nieuw, nalezen
    'c.coldroom.q': "Pourquoi la chambre froide bipe ?", // nieuw, nalezen
    'c.coldroom.a': "La porte est ouverte. Ferme-la vite.", // nieuw, nalezen
    'c.coldroom': "Travail au froid : habille-toi chaudement, garde le froid", // nieuw, nalezen
    'c.coldroom.b': "La nourriture doit rester froide tout le long du chemin : du camion à la chambre froide, jusqu’au magasin. Alors range tout de suite les produits froids, et garde fermées les portes de la chambre froide et du congélateur. Contrôle la température et note-la. Dans le congélateur, porte tes vêtements thermiques, des gants et un bonnet, et prends une pause au chaud à temps. Assure-toi que tu peux toujours ouvrir la porte de l’intérieur. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.coldroom.p': "Il fait trop chaud ici. Le froid ne marche pas.", // nieuw, nalezen
    'c.coldroom.s': "Le thermomètre de la chambre froide montre un chiffre beaucoup plus haut que d’habitude. Que fais-tu ?", // nieuw, nalezen
    'c.coldroom.o1': "Tu le dis tout de suite à ton responsable.", // nieuw, nalezen
    'c.coldroom.o2': "Tu attends : ça va refroidir.", // nieuw, nalezen
    'c.coldroom.o3': "Tu écris le chiffre normal sur la liste.", // nieuw, nalezen
    'c.coldroom.w': "Trop chaud, ça veut dire que les microbes se multiplient. C’est ton responsable qui décide si la nourriture est encore sûre.", // nieuw, nalezen
    'l.foreignbody': "Le verre, le métal et le plastique dans la nourriture", // nieuw, nalezen
    'w.metaaldetector': "le détecteur de métaux", // nieuw, nalezen
    'w.glasbreuk': "le bris de verre (du verre qui s’est cassé)", // nieuw, nalezen
    'w.splinter': "l’éclat (un petit morceau coupant)", // nieuw, nalezen
    'w.vreemdvoorwerp': "le corps étranger (quelque chose dans la nourriture qui ne doit pas y être)", // nieuw, nalezen
    'w.vervuild': "contaminé (quelque chose de sale est entré dedans)", // nieuw, nalezen
    'w.ploegleider': "le chef de poste", // nieuw, nalezen
    's.foreignbody.1': "Le détecteur de métaux bipe. Arrête la ligne.", // nieuw, nalezen
    's.foreignbody.2': "Du verre s’est cassé à la ligne deux.", // nieuw, nalezen
    's.foreignbody.3': "Mets le produit dans le bac des rebuts.", // nieuw, nalezen
    'c.foreignbody.q': "Qu’est-ce que je fais avec ce bout de plastique ?", // nieuw, nalezen
    'c.foreignbody.a': "Montre-le au chef de poste.", // nieuw, nalezen
    'c.foreignbody': "Quelque chose dans la nourriture ? Arrête et signale", // nieuw, nalezen
    'c.foreignbody.b': "Du verre, du métal, du plastique, un pansement ou un cheveu ne doivent jamais finir dans la nourriture. Le détecteur de métaux bipe, ou tu trouves quelque chose de bizarre ? Mets le produit de côté, et dis-le au chef de poste. Du verre s’est cassé ? Arrête la ligne à côté : c’est le chef de poste qui décide ce qui doit être jeté. Utilise seulement des pansements bleus, pour qu’on les voie facilement. N’emporte jamais de verre, de stylos ou d’objets non fixés dans l’atelier. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.foreignbody.p': "J’ai trouvé quelque chose dans le produit.", // nieuw, nalezen
    'c.foreignbody.s': "Une lampe en verre se casse au-dessus de la ligne. Les produits continuent d’avancer. Que fais-tu ?", // nieuw, nalezen
    'c.foreignbody.o1': "Tu arrêtes la ligne, et tu appelles le chef de poste.", // nieuw, nalezen
    'c.foreignbody.o2': "Tu enlèves le verre que tu vois.", // nieuw, nalezen
    'c.foreignbody.o3': "Tu continues : le détecteur trouve le verre.", // nieuw, nalezen
    'c.foreignbody.w': "Un détecteur de métaux ne trouve pas le verre. De petits morceaux que tu ne vois pas peuvent blesser gravement un client.", // nieuw, nalezen
    'u.foodline': "La ligne de production", // nieuw, nalezen
    'l.cutting': "Découper et peser", // nieuw, nalezen
    'w.uitbenen': "désosser (enlever les os de la viande)", // nieuw, nalezen
    'w.fileren': "fileter (couper du poisson ou de la viande en morceaux plats)", // nieuw, nalezen
    'w.portie': "la portion", // nieuw, nalezen
    'w.wegen': "peser", // nieuw, nalezen
    'w.gewicht': "le poids", // nieuw, nalezen
    'w.snijplank': "la planche à découper", // nieuw, nalezen
    's.cutting.1': "Pèse chaque portion.", // nieuw, nalezen
    's.cutting.2': "Le poids est trop bas.", // nieuw, nalezen
    's.cutting.3': "Aiguise ton couteau avant de commencer.", // nieuw, nalezen
    'c.cutting.q': "Il faut mettre combien dans un bac ?", // nieuw, nalezen
    'c.cutting.a': "Cinq cents grammes. Regarde la balance.", // nieuw, nalezen
    'c.cutting': "Couteau aiguisé, main en sécurité", // nieuw, nalezen
    'c.cutting.b': "Un couteau aiguisé est plus sûr qu’un couteau qui coupe mal : tu as besoin de moins de force, alors il glisse moins. Porte toujours ton gant anti-coupure sur l’autre main. Coupe en t’éloignant de ton corps. Pose un couteau à plat sur la planche, jamais dans un évier ou sous de la viande. N’essaie pas d’attraper un couteau qui tombe : recule. Porte un couteau la pointe vers le bas, près de ta jambe. Même une petite coupure doit être couverte et signalée.", // nieuw, nalezen
    'c.cutting.p': "Mon couteau ne coupe plus.", // nieuw, nalezen
    'c.cutting.s': "Ton couteau glisse de ta main et tombe. Que fais-tu ?", // nieuw, nalezen
    'c.cutting.o1': "Tu recules, et tu le laisses tomber.", // nieuw, nalezen
    'c.cutting.o2': "Tu l’attrapes vite.", // nieuw, nalezen
    'c.cutting.o3': "Tu l’arrêtes avec ton pied.", // nieuw, nalezen
    'c.cutting.w': "Un couteau qui tombe coupe profondément quand tu l’attrapes. Par terre, il ne peut faire de mal à personne.", // nieuw, nalezen
    'l.labels': "Emballer et étiqueter", // nieuw, nalezen
    'w.etiketteren': "étiqueter (mettre des étiquettes)", // nieuw, nalezen
    'w.lotnummer': "le numéro de lot (un numéro pour un groupe de produits)", // nieuw, nalezen
    'w.vacuum': "emballé sous vide (tout l’air est sorti)", // nieuw, nalezen
    'w.schaal': "la barquette (un plat pour la nourriture)", // nieuw, nalezen
    'w.printer': "l’imprimante", // nieuw, nalezen
    'w.omdoos': "le carton extérieur (le grand carton autour des petits paquets)", // nieuw, nalezen
    's.labels.1': "Vérifie que la date sur l’étiquette est juste.", // nieuw, nalezen
    's.labels.2': "Ce paquet n’est pas sous vide. Emballe-le à nouveau.", // nieuw, nalezen
    's.labels.3': "Écris le numéro de lot sur la liste.", // nieuw, nalezen
    'c.labels.q': "Quelle date il faut mettre ?", // nieuw, nalezen
    'c.labels.a': "Dans dix jours. Regarde la liste.", // nieuw, nalezen
    'c.labels': "Une mauvaise étiquette est dangereuse", // nieuw, nalezen
    'c.labels.b': "L’étiquette dit au client ce qu’il y a dedans, combien ça pèse et jusqu’à quand c’est bon. Une mauvaise date ou une mauvaise étiquette peut rendre des gens malades, par exemple quand il manque un allergène. Alors contrôle les premières étiquettes de chaque nouvelle série : le produit, la date et le numéro de lot. Quelque chose ne va pas ? Arrête, et dis-le à ton responsable. Les produits avec une mauvaise étiquette sont mis de côté, jamais vendus. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.labels.p': "L’étiquette n’est pas bonne.", // nieuw, nalezen
    'c.labels.s': "Tu vois que la date sur les étiquettes est une semaine trop tard. Que fais-tu ?", // nieuw, nalezen
    'c.labels.o1': "Tu arrêtes d’emballer, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.labels.o2': "Tu continues : une semaine, ce n’est pas grave.", // nieuw, nalezen
    'c.labels.o3': "Tu changes la date avec un stylo.", // nieuw, nalezen
    'c.labels.w': "Avec une mauvaise date, des gens peuvent manger de la nourriture qui n’est plus sûre. Mieux vaut arrêter maintenant que la rappeler plus tard.", // nieuw, nalezen
    'l.linecleaning': "Nettoyer la ligne", // nieuw, nalezen
    'w.schuim': "la mousse", // nieuw, nalezen
    'w.hogedrukspuit': "le nettoyeur haute pression", // nieuw, nalezen
    'w.naspoelen': "rincer (laver avec de l’eau propre)", // nieuw, nalezen
    'w.demonteren': "démonter", // nieuw, nalezen
    'w.borstel': "la brosse", // nieuw, nalezen
    'w.restjes': "les restes (des petits morceaux de nourriture)", // nieuw, nalezen
    's.linecleaning.1': "Éteins d’abord la machine.", // nieuw, nalezen
    's.linecleaning.2': "Mets la mousse sur le tapis.", // nieuw, nalezen
    's.linecleaning.3': "Ensuite, rince tout à l’eau propre.", // nieuw, nalezen
    'c.linecleaning.q': "Le tapis est déjà propre ?", // nieuw, nalezen
    'c.linecleaning.a': "Pas encore. Je dois encore le rincer.", // nieuw, nalezen
    'c.linecleaning': "Coupe le courant avant de nettoyer", // nieuw, nalezen
    'c.linecleaning.b': "Ne nettoie jamais une machine qui tourne. Éteins-la, et assure-toi que personne ne peut la remettre en marche : suis les étapes de ton entreprise. Porte les bons gants, les bonnes lunettes et les bonnes bottes : les produits de nettoyage peuvent brûler ta peau et tes yeux. Ne mélange jamais des produits. Enlève d’abord les restes, puis mets la mousse, frotte et rince. Ne mets pas d’eau sur les boîtiers électriques ou les prises. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.linecleaning.p': "La machine est éteinte ?", // nieuw, nalezen
    'c.linecleaning.s': "De la viande est coincée dans le tapis. La machine tourne encore. Que fais-tu ?", // nieuw, nalezen
    'c.linecleaning.o1': "Tu l’éteins d’abord, puis tu l’enlèves.", // nieuw, nalezen
    'c.linecleaning.o2': "Tu la tires vite avec ta main.", // nieuw, nalezen
    'c.linecleaning.o3': "Tu la fais sortir avec un couteau.", // nieuw, nalezen
    'c.linecleaning.w': "Un tapis qui tourne peut attraper ta main en une seconde. L’éteindre ne prend qu’un instant.", // nieuw, nalezen
    'l.haccp': "Contrôler et noter (HACCP)", // nieuw, nalezen
    'w.controlepunt': "le point de contrôle (une étape où tu dois contrôler quelque chose)", // nieuw, nalezen
    'w.kerntemperatuur': "la température à cœur (la température à l’intérieur de l’aliment)", // nieuw, nalezen
    'w.prikthermometer': "le thermomètre à sonde (tu le piques dans l’aliment)", // nieuw, nalezen
    'w.afwijking': "l’écart (quelque chose n’est pas comme il faut)", // nieuw, nalezen
    'w.steekproef': "le contrôle par échantillon (tu testes quelques produits)", // nieuw, nalezen
    'w.kwaliteitsdienst': "le service qualité (QA)", // nieuw, nalezen
    's.haccp.1': "Mesure la température à cœur avec le thermomètre à sonde.", // nieuw, nalezen
    's.haccp.2': "Écris tout sur la liste.", // nieuw, nalezen
    's.haccp.3': "Quelque chose ne va pas ? Signale-le tout de suite.", // nieuw, nalezen
    'c.haccp.q': "Pourquoi je dois tout noter ?", // nieuw, nalezen
    'c.haccp.a': "Comme ça, on sait que la nourriture est sûre.", // nieuw, nalezen
    'c.haccp': "HACCP : contrôle, note, signale", // nieuw, nalezen
    'c.haccp.b': "Chaque entreprise alimentaire travaille avec un plan de sécurité alimentaire (HACCP). Il dit à quelles étapes tu dois contrôler quelque chose, comme la température de la chambre froide ou la température à cœur de la viande cuite. Tu contrôles, tu notes, et tu signes. Écris ce que tu as vraiment mesuré, même quand ce n’est pas bon. Un mauvais chiffre n’est pas ta faute, mais le cacher est dangereux. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.haccp.p': "La température est trop haute.", // nieuw, nalezen
    'c.haccp.s': "Tu as oublié de mesurer à dix heures. Ton collègue dit : “Écris juste un bon chiffre.” Que fais-tu ?", // nieuw, nalezen
    'c.haccp.o1': "Tu mesures maintenant, et tu écris l’heure réelle.", // nieuw, nalezen
    'c.haccp.o2': "Tu écris un bon chiffre pour dix heures.", // nieuw, nalezen
    'c.haccp.o3': "Tu laisses la ligne vide.", // nieuw, nalezen
    'c.haccp.w': "La liste doit montrer ce qui s’est vraiment passé. Un chiffre inventé cache un problème qui peut rendre des gens malades.", // nieuw, nalezen
    'u.collection': "La collecte des déchets", // nieuw, nalezen
    'l.binlorry': "Le camion-poubelle", // nieuw, nalezen
    'w.vuilniswagen': "le camion-poubelle, la benne à ordures", // nieuw, nalezen
    'w.kliko': "la poubelle à roulettes (une poubelle sur roues)", // nieuw, nalezen
    'w.kieplift': "le lève-conteneur (il soulève la poubelle et la vide)", // nieuw, nalezen
    'w.treeplank': "le marchepied (une marche à l’arrière du camion)", // nieuw, nalezen
    'w.bijplaatsing': "les déchets en plus (des sacs posés à côté de la poubelle)", // nieuw, nalezen
    'w.ophaaldag': "le jour de collecte", // nieuw, nalezen
    's.binlorry.1': "Mets la poubelle à roulettes sur le lève-conteneur.", // nieuw, nalezen
    's.binlorry.2': "Il y a des sacs à côté du conteneur.", // nieuw, nalezen
    's.binlorry.3': "La poubelle à roulettes est trop lourde. Laisse-la.", // nieuw, nalezen
    'c.binlorry.q': "Je peux monter à l’arrière ?", // nieuw, nalezen
    'c.binlorry.a': "Non, tu montes dans la cabine.", // nieuw, nalezen
    'c.binlorry': "Sois visible, et roule à l’intérieur", // nieuw, nalezen
    'c.binlorry.b': "Porte tes vêtements haute visibilité à chaque tournée. Monte et descends du côté du trottoir, jamais du côté de la circulation. Roule dans la cabine, pas à l’arrière du camion : seulement quand ton entreprise le permet clairement, et jamais quand il recule ou roule vite. Reste loin du lève-conteneur pendant qu’il bouge. Une poubelle est trop lourde, ou quelque chose dépasse ? Laisse-la, et signale-le. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.binlorry.p': "Cette poubelle à roulettes est trop lourde.", // nieuw, nalezen
    'c.binlorry.s': "La rue suivante est très proche. Le chauffeur dit : “Monte sur le marchepied.” Que fais-tu ?", // nieuw, nalezen
    'c.binlorry.o1': "Tu montes quand même dans la cabine.", // nieuw, nalezen
    'c.binlorry.o2': "Tu montes sur le marchepied : c’est tout près.", // nieuw, nalezen
    'c.binlorry.o3': "Tu marches derrière le camion.", // nieuw, nalezen
    'c.binlorry.w': "Tomber d’un camion qui roule est un des plus grands dangers de ce travail. Dans la cabine, tu es en sécurité.", // nieuw, nalezen
    'l.reversing': "Reculer en sécurité", // nieuw, nalezen
    'w.achteruitrijden': "reculer (rouler en marche arrière)", // nieuw, nalezen
    'w.dodehoek': "l’angle mort (là où le conducteur ne peut pas te voir)", // nieuw, nalezen
    'w.aanwijzer': "le guide (la personne qui guide le conducteur)", // nieuw, nalezen
    'w.oogcontact': "le contact visuel", // nieuw, nalezen
    'w.piepen': "biper", // nieuw, nalezen
    'w.cabine': "la cabine (là où le conducteur est assis)", // nieuw, nalezen
    's.reversing.1': "Ne te mets jamais derrière le camion.", // nieuw, nalezen
    's.reversing.2': "Je ne te vois pas dans le rétroviseur.", // nieuw, nalezen
    's.reversing.3': "Garde le contact visuel avec le chauffeur.", // nieuw, nalezen
    'c.reversing.q': "Tu peux m’aider à reculer ?", // nieuw, nalezen
    'c.reversing.a': "Oui, je suis à gauche. Regarde dans ton rétroviseur.", // nieuw, nalezen
    'c.reversing': "Jamais derrière un camion qui recule", // nieuw, nalezen
    'c.reversing.b': "Beaucoup d’accidents avec les camions-poubelles arrivent quand ils roulent en marche arrière. Le chauffeur ne peut pas voir juste derrière le camion : c’est l’angle mort. Alors ne reste jamais et ne marche jamais derrière un camion qui peut reculer. Guide le chauffeur depuis le côté, là où vous pouvez vous voir dans le rétroviseur. Plus de contact visuel ? Le chauffeur s’arrête. Mettez-vous d’accord sur des signes clairs avant de commencer. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.reversing.p': "Stop ! Je ne te vois plus.", // nieuw, nalezen
    'c.reversing.s': "Le camion recule. Tu passes derrière pour prendre un sac. Que fais-tu ?", // nieuw, nalezen
    'c.reversing.o1': "Tu attends que le camion soit arrêté.", // nieuw, nalezen
    'c.reversing.o2': "Tu marches vite : c’est juste une seconde.", // nieuw, nalezen
    'c.reversing.o3': "Tu fais signe au chauffeur, et tu y vas.", // nieuw, nalezen
    'c.reversing.w': "Un chauffeur ne peut pas te voir derrière le camion. Une seconde suffit pour un accident.", // nieuw, nalezen
    'l.wastesorting': "Trier les déchets", // nieuw, nalezen
    'w.papier': "le papier", // nieuw, nalezen
    'w.plastic': "le plastique", // nieuw, nalezen
    'w.gft': "les déchets organiques (les fruits, les légumes et les plantes)", // nieuw, nalezen
    'w.restafval': "les ordures ménagères (ce qui ne peut pas être trié)", // nieuw, nalezen
    'w.karton': "le carton", // nieuw, nalezen
    'w.blik': "la canette, la boîte de conserve", // nieuw, nalezen
    's.wastesorting.1': "Le verre va dans le conteneur à verre.", // nieuw, nalezen
    's.wastesorting.2': "Ça, c’est pour les ordures ménagères.", // nieuw, nalezen
    's.wastesorting.3': "Plie le carton à plat.", // nieuw, nalezen
    'c.wastesorting.q': "Une boîte à pizza, ça va où ?", // nieuw, nalezen
    'c.wastesorting.a': "Avec les ordures ménagères. Il y a du gras dessus.", // nieuw, nalezen
    'c.wastesorting': "Bien trier évite du travail", // nieuw, nalezen
    'c.wastesorting.b': "Les déchets triés peuvent être réutilisés : le papier redevient du papier, le verre redevient du verre. Mais une seule mauvaise chose peut gâcher tout un chargement. Alors regarde dans la poubelle avant de la vider. Quelque chose n’a rien à faire là, comme un sac d’ordures ménagères dans le papier ? Laisse la poubelle, ou suis les règles de ton entreprise. Ce qui va où change d’une commune à l’autre : apprends les règles de ta région. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.wastesorting.p': "Ça n’a rien à faire ici.", // nieuw, nalezen
    'c.wastesorting.s': "Une poubelle à papier est pleine de sacs poubelle noirs. Que fais-tu ?", // nieuw, nalezen
    'c.wastesorting.o1': "Tu la laisses, et tu le signales.", // nieuw, nalezen
    'c.wastesorting.o2': "Tu la vides avec le papier.", // nieuw, nalezen
    'c.wastesorting.o3': "Tu sors les sacs à la main.", // nieuw, nalezen
    'c.wastesorting.w': "Des ordures dans le papier gâchent tout le chargement. Les sacs peuvent aussi contenir des choses coupantes ou sales.", // nieuw, nalezen
    'l.wastesafety': "Les objets coupants et soulever", // nieuw, nalezen
    'w.snijwond': "la coupure (une blessure faite par quelque chose de coupant)", // nieuw, nalezen
    'w.prikken': "piquer (une pointe entre dans ta peau)", // nieuw, nalezen
    'w.naald': "l’aiguille", // nieuw, nalezen
    'w.scherp': "coupant, pointu", // nieuw, nalezen
    'w.rugpijn': "le mal de dos", // nieuw, nalezen
    'w.tetanusprik': "le vaccin contre le tétanos (une piqûre contre une maladie qui vient de la saleté dans une plaie)", // nieuw, nalezen
    's.wastesafety.1': "Ne tiens jamais un sac par le dessous.", // nieuw, nalezen
    's.wastesafety.2': "Attention, il y a du verre dans ce sac.", // nieuw, nalezen
    's.wastesafety.3': { m: "Je me suis piqué avec une aiguille.", f: "Je me suis piquée avec une aiguille.", x: "Je me suis fait piquer par une aiguille." }, // nieuw, nalezen
    'c.wastesafety.q': { m: "Je me suis coupé. Qu’est-ce que je dois faire ?", f: "Je me suis coupée. Qu’est-ce que je dois faire ?", x: "Je me suis fait une coupure. Qu’est-ce que je dois faire ?" }, // nieuw, nalezen
    'c.wastesafety.a': "Lave bien la plaie. Et dis-le-moi.", // nieuw, nalezen
    'c.wastesafety': "Ne serre jamais un sac", // nieuw, nalezen
    'c.wastesafety.b': { m: "Un sac poubelle peut contenir du verre, des couteaux ou des aiguilles. Alors ne presse jamais un sac contre ton corps, ne le serre jamais, et ne le porte jamais contre ta jambe : tiens-le par le haut, loin de toi. Porte tes gants. Soulève avec les genoux pliés et le dos droit, et pousse une poubelle, ne la porte pas. Quelque chose t’a piqué ou coupé ? Lave bien la plaie à l’eau, et dis-le à ton responsable le jour même.", f: "Un sac poubelle peut contenir du verre, des couteaux ou des aiguilles. Alors ne presse jamais un sac contre ton corps, ne le serre jamais, et ne le porte jamais contre ta jambe : tiens-le par le haut, loin de toi. Porte tes gants. Soulève avec les genoux pliés et le dos droit, et pousse une poubelle, ne la porte pas. Quelque chose t’a piquée ou coupée ? Lave bien la plaie à l’eau, et dis-le à ton responsable le jour même.", x: "Un sac poubelle peut contenir du verre, des couteaux ou des aiguilles. Alors ne presse jamais un sac contre ton corps, ne le serre jamais, et ne le porte jamais contre ta jambe : tiens-le par le haut, loin de toi. Porte tes gants. Soulève avec les genoux pliés et le dos droit, et pousse une poubelle, ne la porte pas. Tu as une piqûre ou une coupure ? Lave bien la plaie à l’eau, et dis-le à ton responsable le jour même." }, // nieuw, nalezen
    'c.wastesafety.p': { m: "Je me suis piqué.", f: "Je me suis piquée.", x: "Je me suis fait une piqûre." }, // nieuw, nalezen
    'c.wastesafety.s': "Un sac se déchire. Tu vois une aiguille dedans. Que fais-tu ?", // nieuw, nalezen
    'c.wastesafety.o1': "Tu ne la touches pas, et tu le signales.", // nieuw, nalezen
    'c.wastesafety.o2': "Tu la ramasses avec tes gants.", // nieuw, nalezen
    'c.wastesafety.o3': "Tu la remets dans le sac.", // nieuw, nalezen
    'c.wastesafety.w': "Les gants n’arrêtent pas une aiguille. Une aiguille peut transmettre une maladie.", // nieuw, nalezen
    'u.recycling': "La déchetterie", // nieuw, nalezen
    'l.yard': "À la déchetterie", // nieuw, nalezen
    'w.milieustraat': "la déchetterie (là où les gens apportent les gros déchets ou les déchets spéciaux)", // nieuw, nalezen
    'w.grofvuil': "les encombrants (les grosses choses, comme un canapé)", // nieuw, nalezen
    'w.puin': "les gravats (des pierres et des briques cassées)", // nieuw, nalezen
    'w.matras': "le matelas", // nieuw, nalezen
    'w.weegbrug': "le pont-bascule (une balance pour les voitures et les camions)", // nieuw, nalezen
    'w.afvalpas': "la carte de déchetterie (les habitants la montrent à l’entrée)", // nieuw, nalezen
    's.yard.1': "Les gravats vont dans le conteneur quatre.", // nieuw, nalezen
    's.yard.2': "Je peux voir votre carte de déchetterie ?", // nieuw, nalezen
    's.yard.3': "Passez d’abord sur le pont-bascule.", // nieuw, nalezen
    'c.yard.q': "Ce matelas va où ?", // nieuw, nalezen
    'c.yard.a': "Dans le conteneur pour les encombrants, au fond.", // nieuw, nalezen
    'c.yard': "Aide, mais garde la déchetterie sûre", // nieuw, nalezen
    'c.yard.b': "À la déchetterie, tu dis aux visiteurs où vont leurs déchets, et tu vérifies qu’ils sont bien triés. Sois aimable : beaucoup de gens ne viennent que quelques fois par an et ne connaissent pas les règles. Garde les enfants et les visiteurs loin des machines et du bord des conteneurs hauts. Soulève les choses lourdes à deux, ou laisse le visiteur porter ses propres affaires. Quelqu’un apporte quelque chose que tu ne connais pas ? Demande avant que ça entre dans le conteneur. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.yard.p': "Ça va dans le conteneur quatre.", // nieuw, nalezen
    'c.yard.s': "Un homme veut jeter un sac plein dans le conteneur à bois. Que fais-tu ?", // nieuw, nalezen
    'c.yard.o1': "Tu demandes ce qu’il y a dans le sac.", // nieuw, nalezen
    'c.yard.o2': "Tu le laisses faire : ce sont ses déchets.", // nieuw, nalezen
    'c.yard.o3': "Tu le jettes pour lui.", // nieuw, nalezen
    'c.yard.w': "Une seule mauvaise chose peut gâcher un conteneur plein. Une question aimable garde les déchets propres.", // nieuw, nalezen
    'l.hazardous': "Les déchets chimiques", // nieuw, nalezen
    'w.chemischafval': "les déchets chimiques (des déchets dangereux, comme la peinture et l’huile)", // nieuw, nalezen
    'w.spuitbus': "la bombe aérosol", // nieuw, nalezen
    'w.asbest': "l’amiante (un matériau dangereux dans les vieux bâtiments)", // nieuw, nalezen
    'w.lekken': "fuir", // nieuw, nalezen
    'w.gevarensymbool': "le pictogramme de danger (un dessin qui avertit d’un danger)", // nieuw, nalezen
    'w.vat': "le fût, le tonneau", // nieuw, nalezen
    's.hazardous.1': "Mets la peinture avec les déchets chimiques.", // nieuw, nalezen
    's.hazardous.2': "Cette bouteille fuit. Prends-la avec des gants.", // nieuw, nalezen
    's.hazardous.3': "L’amiante doit être bien emballé.", // nieuw, nalezen
    'c.hazardous.q': "Qu’est-ce qu’il y a dans cette bouteille ?", // nieuw, nalezen
    'c.hazardous.a': "Je ne sais pas. Mets-la de côté.", // nieuw, nalezen
    'c.hazardous': "Inconnu ? N’ouvre pas, ne sens pas", // nieuw, nalezen
    'c.hazardous.b': "Les déchets chimiques, comme la peinture, l’huile, les produits de nettoyage, les piles et les bombes aérosol, peuvent brûler, empoisonner ou exploser. Cherche les pictogrammes de danger. Porte des gants et des lunettes de sécurité. N’ouvre jamais une bouteille pour sentir ce qu’il y a dedans, et ne mélange jamais des produits. Garde une bouteille qui fuit debout, et mets-la dans un bac. L’amiante peut seulement entrer quand il est bien emballé : ne le casse jamais, et ne le sors pas de son emballage. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.hazardous.p': "Qu’est-ce qu’il y a là-dedans ?", // nieuw, nalezen
    'c.hazardous.s': "Une femme apporte une bouteille sans étiquette. Elle sent fort. Que fais-tu ?", // nieuw, nalezen
    'c.hazardous.o1': "Tu la mets à part, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.hazardous.o2': "Tu l’ouvres, et tu sens ce que c’est.", // nieuw, nalezen
    'c.hazardous.o3': "Tu la vides dans le fût de peinture.", // nieuw, nalezen
    'c.hazardous.w': "Des produits inconnus peuvent réagir avec d’autres. Ton responsable sait où ça peut aller sans danger.", // nieuw, nalezen
    'l.baler': "La presse à balles", // nieuw, nalezen
    'w.balenpers': "la presse à balles (une machine qui presse les déchets en blocs)", // nieuw, nalezen
    'w.baal': "la balle (un bloc pressé de papier ou de plastique)", // nieuw, nalezen
    'w.persen': "presser", // nieuw, nalezen
    'w.vastlopen': "se bloquer, se coincer", // nieuw, nalezen
    'w.binddraad': "le fil de liage (le fil pour attacher les balles)", // nieuw, nalezen
    'w.vulopening': "l’ouverture de chargement (là où les déchets entrent)", // nieuw, nalezen
    's.baler.1': "La presse est bloquée. Appuie sur l’arrêt d’urgence.", // nieuw, nalezen
    's.baler.2': "Ne mets jamais ta main dans la presse.", // nieuw, nalezen
    's.baler.3': "Attache bien la balle.", // nieuw, nalezen
    'c.baler.q': "La presse se bloque. Je peux regarder ?", // nieuw, nalezen
    'c.baler.a': "Non. D’abord, on coupe le courant.", // nieuw, nalezen
    'c.baler': "Ne mets jamais la main dans la presse", // nieuw, nalezen
    'c.baler.b': "Une presse à balles presse avec une force énorme. Utilise-la seulement quand tu as appris comment faire. Ne mets jamais une main, un bras ou un pied dans l’ouverture de chargement, même quand la machine a l’air arrêtée. Elle se bloque ? Appuie sur l’arrêt d’urgence, éteins-la et assure-toi que personne ne peut la rallumer : suis les étapes de ton entreprise. Seulement après, tu regardes. Ne monte jamais dans une presse à balles ou dans un conteneur. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.baler.p': "La presse est bloquée.", // nieuw, nalezen
    'c.baler.s': "Un morceau de carton est coincé dans l’ouverture. La machine est arrêtée. Que fais-tu ?", // nieuw, nalezen
    'c.baler.o1': "Tu l’éteins complètement, puis tu l’enlèves.", // nieuw, nalezen
    'c.baler.o2': "Tu le tires vite avec ta main.", // nieuw, nalezen
    'c.baler.o3': "Tu le pousses dedans avec ton pied.", // nieuw, nalezen
    'c.baler.w': "Une machine arrêtée peut redémarrer. Sans couper le courant, ta main est en danger.", // nieuw, nalezen
    'l.shovel': "La chargeuse sur le site", // nieuw, nalezen
    'w.shovel': "la chargeuse (une grosse machine avec un godet devant)", // nieuw, nalezen
    'w.zwaailamp': "le gyrophare (une lumière orange sur le toit d’une machine)", // nieuw, nalezen
    'w.bunker': "le box (un grand espace en béton pour un seul type de déchets)", // nieuw, nalezen
    'w.looppad': "le passage piéton (un chemin seulement pour les gens à pied)", // nieuw, nalezen
    'w.toeteren': "klaxonner", // nieuw, nalezen
    'w.opscheppen': "ramasser (avec un godet ou une pelle)", // nieuw, nalezen
    's.shovel.1': "Reste sur le passage piéton.", // nieuw, nalezen
    's.shovel.2': "La chargeuse recule. Attention !", // nieuw, nalezen
    's.shovel.3': "Le gyrophare est allumé. La machine bouge.", // nieuw, nalezen
    'c.shovel.q': "Je peux passer à côté de la chargeuse ?", // nieuw, nalezen
    'c.shovel.a': "Seulement si le conducteur te voit.", // nieuw, nalezen
    'c.shovel': "Ne reste pas sur le chemin de la chargeuse", // nieuw, nalezen
    'c.shovel.b': "Une chargeuse est grande, et son conducteur voit peu de choses autour, surtout derrière. Alors reste sur les passages piétons, et porte tes vêtements haute visibilité. Ne marche jamais derrière une machine qui roule. Tu veux passer ? Attends que le conducteur te voie et te fasse un signe. Le gyrophare veut dire : cette machine travaille. Garde les visiteurs loin d’elle. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shovel.p': { m: "Tu m’as vu ?", f: "Tu m’as vue ?", x: "Tu me vois ?" }, // nieuw, nalezen
    'c.shovel.s': "Tu dois passer à côté d’une chargeuse qui travaille. Le conducteur regarde de l’autre côté. Que fais-tu ?", // nieuw, nalezen
    'c.shovel.o1': "Tu attends qu’il te voie.", // nieuw, nalezen
    'c.shovel.o2': "Tu passes vite à côté.", // nieuw, nalezen
    'c.shovel.o3': "Tu passes derrière la machine.", // nieuw, nalezen
    'c.shovel.w': "Un conducteur qui ne te voit pas ne peut pas s’arrêter pour toi.", // nieuw, nalezen
    'u.toddlers': "Les enfants", // nieuw, nalezen
    'l.nappies': "Changer les couches", // nieuw, nalezen
    'w.luier': "la couche", // nieuw, nalezen
    'w.verschonen': "changer (une couche)", // nieuw, nalezen
    'w.commode': "la table à langer", // nieuw, nalezen
    'w.billendoekje': "la lingette pour bébé", // nieuw, nalezen
    'w.potje': "le pot", // nieuw, nalezen
    'w.zindelijk': "propre (l’enfant sait aller aux toilettes)", // nieuw, nalezen
    's.nappies.1': "Je vais changer Sem.", // nieuw, nalezen
    's.nappies.2': "Lave-toi les mains après avoir changé une couche.", // nieuw, nalezen
    's.nappies.3': "Ne laisse jamais un enfant seul sur la table à langer.", // nieuw, nalezen
    'c.nappies.q': "Quand est-ce que tu as changé Noor ?", // nieuw, nalezen
    'c.nappies.a': "À dix heures. C’est dans l’appli.", // nieuw, nalezen
    'c.nappies': "Une main sur l’enfant", // nieuw, nalezen
    'c.nappies.b': "Prépare tout avant de mettre un enfant sur la table à langer : une couche propre, des lingettes et des vêtements. Ensuite, garde tout le temps une main sur l’enfant. Ne t’éloigne jamais, même pas une seconde. Lave-toi les mains après chaque change, et nettoie la table. Note quand tu as changé la couche, pour que les parents le sachent. Tu vois des rougeurs ou une plaie ? Note-le, et dis-le à un collègue. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.nappies.p': "Je suis en train de le changer.", // nieuw, nalezen
    'c.nappies.s': "Tu changes un bébé. Tu as oublié les lingettes ; elles sont de l’autre côté de la pièce. Que fais-tu ?", // nieuw, nalezen
    'c.nappies.o1': "Tu prends le bébé avec toi.", // nieuw, nalezen
    'c.nappies.o2': "Tu vas les chercher vite : c’est tout près.", // nieuw, nalezen
    'c.nappies.o3': "Tu laisses le bébé, et tu appelles quelqu’un.", // nieuw, nalezen
    'c.nappies.w': "Un bébé peut tomber d’une table à langer en une seconde. Ne laisse jamais un enfant seul là-haut.", // nieuw, nalezen
    'l.mealtime': "Manger et boire", // nieuw, nalezen
    'w.fles': "le biberon", // nieuw, nalezen
    'w.slabbetje': "le bavoir", // nieuw, nalezen
    'w.beker': "le gobelet (avec une anse)", // nieuw, nalezen
    'w.kinderstoel': "la chaise haute", // nieuw, nalezen
    'w.fruithap': "la compote de fruits", // nieuw, nalezen
    'w.boertje': "le rot", // nieuw, nalezen
    's.mealtime.1': "Lave-toi les mains avant le repas.", // nieuw, nalezen
    's.mealtime.2': "Donne son biberon à Lisa à midi.", // nieuw, nalezen
    's.mealtime.3': "Tout le monde s’assoit à table.", // nieuw, nalezen
    'c.mealtime.q': "Daan peut avoir un biscuit ?", // nieuw, nalezen
    'c.mealtime.a': "Non, il a une allergie. Regarde la liste.", // nieuw, nalezen
    'c.mealtime': "Regarde la liste avant de donner à manger", // nieuw, nalezen
    'c.mealtime.b': "Avant de donner à manger ou à boire à un enfant, regarde la liste : certains enfants ont une allergie, d’autres ne doivent pas manger certains aliments pour leur santé ou leur religion. Lave-toi les mains et lave les mains des enfants avant de manger. Fais asseoir les enfants quand ils mangent et boivent, ne les laisse jamais marcher ou courir. Coupe la nourriture en petits morceaux pour les petits enfants, par exemple les raisins. Ne donne jamais à un enfant quelque chose de la maison d’un autre enfant. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.mealtime.p': "Il peut manger ça ?", // nieuw, nalezen
    'c.mealtime.s': "Un enfant pleure pour avoir un biscuit. Tu ne connais pas bien cet enfant. Que fais-tu ?", // nieuw, nalezen
    'c.mealtime.o1': "Tu regardes d’abord la liste.", // nieuw, nalezen
    'c.mealtime.o2': "Tu le donnes : c’est juste un biscuit.", // nieuw, nalezen
    'c.mealtime.o3': "Tu donnes un demi-biscuit.", // nieuw, nalezen
    'c.mealtime.w': "Un biscuit peut contenir des fruits à coque, du lait ou de l’œuf. Pour un enfant allergique, ça peut être très dangereux.", // nieuw, nalezen
    'l.naptime': "Dormir", // nieuw, nalezen
    'w.bedje': "le lit à barreaux (un petit lit pour un bébé)", // nieuw, nalezen
    'w.slaapkamer': "la chambre", // nieuw, nalezen
    'w.knuffel': "le doudou", // nieuw, nalezen
    'w.speen': "la tétine", // nieuw, nalezen
    'w.babyfoon': "le babyphone", // nieuw, nalezen
    'w.slaapzak': "la gigoteuse (un sac de couchage pour bébé)", // nieuw, nalezen
    's.naptime.1': "Couche le bébé sur le dos.", // nieuw, nalezen
    's.naptime.2': "Je vais souvent voir dans la chambre.", // nieuw, nalezen
    's.naptime.3': "Voilà ton doudou. Dors bien.", // nieuw, nalezen
    'c.naptime.q': "Mila dort déjà ?", // nieuw, nalezen
    'c.naptime.a': "Oui, depuis treize heures. Je vais bientôt regarder encore.", // nieuw, nalezen
    'c.naptime': "Les bébés dorment sur le dos", // nieuw, nalezen
    'c.naptime.b': "Un bébé dort le plus en sécurité sur le dos, dans une gigoteuse, dans son propre lit. Pas d’oreiller, pas de couverture libre et pas de gros jouets dans le lit. Garde la chambre fraîche et aérée. Va souvent voir les enfants qui dorment : regarde et écoute, même quand le babyphone est allumé. Un parent te demande de faire dormir son bébé d’une autre façon ? Dis-le d’abord à ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.naptime.p': "Je vais voir dans la chambre.", // nieuw, nalezen
    'c.naptime.s': "Un bébé s’est endormi sur le ventre dans son lit. Que fais-tu ?", // nieuw, nalezen
    'c.naptime.o1': "Tu le tournes doucement sur le dos.", // nieuw, nalezen
    'c.naptime.o2': "Tu le laisses dormir : il dort maintenant.", // nieuw, nalezen
    'c.naptime.o3': "Tu mets un oreiller à côté de lui.", // nieuw, nalezen
    'c.naptime.w': "Sur le dos, un bébé peut respirer librement. Un oreiller peut couvrir son visage.", // nieuw, nalezen
    'l.playtime': "Jouer", // nieuw, nalezen
    'w.spelen': "jouer", // nieuw, nalezen
    'w.speelgoed': "les jouets", // nieuw, nalezen
    'w.zandbak': "le bac à sable", // nieuw, nalezen
    'w.glijbaan': "le toboggan", // nieuw, nalezen
    'w.puzzel': "le puzzle", // nieuw, nalezen
    'w.buitenspelen': "jouer dehors", // nieuw, nalezen
    's.playtime.1': "On va jouer dehors. Mettez vos manteaux !", // nieuw, nalezen
    's.playtime.2': "Range les jouets.", // nieuw, nalezen
    's.playtime.3': "Un enfant à la fois sur le toboggan.", // nieuw, nalezen
    'c.playtime.q': "Je peux jouer avec le puzzle ?", // nieuw, nalezen
    'c.playtime.a': "Oui, à la table. Après, tu le ranges.", // nieuw, nalezen
    'c.playtime': "Jouer en sécurité : regarde, compte, vérifie", // nieuw, nalezen
    'c.playtime.b': "Les enfants apprennent en jouant, alors laisse-les essayer des choses. Mais garde-les toujours sous les yeux, aussi dehors. Compte les enfants quand tu sors et quand tu rentres. Vérifie d’abord l’aire de jeux : le portail est fermé, il y a du verre ou des déchets ? Les jouets avec des petites pièces ne sont pas pour les enfants de moins de trois ans : ils peuvent s’étouffer avec. Nettoie souvent les jouets qui vont dans la bouche. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.playtime.p': "Tout le monde est là ?", // nieuw, nalezen
    'c.playtime.s': "Tu rentres de l’aire de jeux. Tu comptes un enfant de moins. Que fais-tu ?", // nieuw, nalezen
    'c.playtime.o1': "Tu le dis à un collègue, et tu cherches tout de suite.", // nieuw, nalezen
    'c.playtime.o2': "Tu attends : l’enfant va rentrer tout seul.", // nieuw, nalezen
    'c.playtime.o3': "Tu recomptes demain.", // nieuw, nalezen
    'c.playtime.w': "Un enfant seul dehors peut se blesser ou partir. Chaque minute compte.", // nieuw, nalezen
    'u.daycare': "Parents, sécurité et le groupe", // nieuw, nalezen
    'l.pickup': "Amener et venir chercher", // nieuw, nalezen
    'w.ouder': "le parent", // nieuw, nalezen
    'w.afscheid': "les au revoir", // nieuw, nalezen
    'w.oppas': "la baby-sitter", // nieuw, nalezen
    'w.schriftje': "le cahier de liaison (pour les messages entre les parents et le personnel)", // nieuw, nalezen
    'w.ouderapp': "l’appli des parents (pour les photos et les messages aux parents)", // nieuw, nalezen
    'w.wennen': "s’habituer (s’habituer à un nouvel endroit)", // nieuw, nalezen
    's.pickup.1': "Je vais l’écrire dans le cahier de liaison.", // nieuw, nalezen
    's.pickup.2': "Dis au revoir à papa.", // nieuw, nalezen
    's.pickup.3': "Je mets une photo dans l’appli des parents.", // nieuw, nalezen
    'c.pickup.q': "Qui vient chercher Sem aujourd’hui ?", // nieuw, nalezen
    'c.pickup.a': "Sa grand-mère. Elle est sur la liste.", // nieuw, nalezen
    'c.pickup': "Seulement aux personnes sur la liste", // nieuw, nalezen
    'c.pickup.b': "Donne un enfant seulement à un parent, ou à quelqu’un dont les parents t’ont parlé. Tu ne connais pas la personne ? Demande qui elle est, regarde sa pièce d’identité, et vérifie avec les parents ou ton responsable. Quand on vient chercher l’enfant, dis au parent comment s’est passée la journée : le repas, la sieste, le jeu, et tout ce qui était spécial. Écris les choses importantes dans le cahier de liaison ou l’appli. Parle des autres enfants seulement avec leurs propres parents. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.pickup.p': "Qui êtes-vous ? Je vais appeler les parents.", // nieuw, nalezen
    'c.pickup.s': "Un homme que tu ne connais pas vient chercher Sem. Il n’est pas sur la liste. Que fais-tu ?", // nieuw, nalezen
    'c.pickup.o1': "Tu appelles les parents avant que Sem parte.", // nieuw, nalezen
    'c.pickup.o2': "Tu laisses partir Sem : il connaît le nom.", // nieuw, nalezen
    'c.pickup.o3': "Tu demandes à Sem s’il le connaît.", // nieuw, nalezen
    'c.pickup.w': "Tu es responsable de l’enfant jusqu’à ce qu’une personne choisie par les parents prenne le relais.", // nieuw, nalezen
    'l.childsafety': "La sécurité dans le groupe", // nieuw, nalezen
    'w.traphekje': "la barrière d’escalier", // nieuw, nalezen
    'w.vingerstrip': "le protège-doigts (sur une porte, pour que les doigts ne se coincent pas)", // nieuw, nalezen
    'w.verslikken': "s’étouffer (la nourriture passe par le mauvais chemin)", // nieuw, nalezen
    'w.bult': "la bosse (sur la tête)", // nieuw, nalezen
    'w.schaafwond': "l’écorchure (la peau est éraflée)", // nieuw, nalezen
    'w.toezicht': "la surveillance (tu surveilles les enfants)", // nieuw, nalezen
    's.childsafety.1': "Ferme toujours la barrière d’escalier.", // nieuw, nalezen
    's.childsafety.2': "Je mets un peu de glace sur la bosse.", // nieuw, nalezen
    's.childsafety.3': "Sem s’étouffe. Je l’aide.", // nieuw, nalezen
    'c.childsafety.q': "Bo est tombée ?", // nieuw, nalezen
    'c.childsafety.a': "Oui, elle a une bosse. J’appelle sa mère.", // nieuw, nalezen
    'c.childsafety': "Regarde autour de toi avec les yeux d’un enfant", // nieuw, nalezen
    'c.childsafety.b': "Les petits enfants mettent tout dans leur bouche et grimpent partout. Alors garde la barrière d’escalier fermée, mets les produits de nettoyage et les médicaments hors de portée, et garde les boissons chaudes loin des enfants. Vérifie la pièce chaque jour. Un enfant se blesse ? Donne les premiers secours, console l’enfant, préviens les parents, et note-le. C’est grave ? Appelle le 112. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.childsafety.p': "La barrière d’escalier est ouverte.", // nieuw, nalezen
    'c.childsafety.s': "Tu poses ton café chaud sur une table basse. Un petit enfant marche vers la table. Que fais-tu ?", // nieuw, nalezen
    'c.childsafety.o1': "Tu mets tout de suite le café en hauteur.", // nieuw, nalezen
    'c.childsafety.o2': "Tu dis à l’enfant de ne pas y toucher.", // nieuw, nalezen
    'c.childsafety.o3': "Tu le bois vite.", // nieuw, nalezen
    'c.childsafety.w': "Du café chaud peut brûler gravement un petit enfant. Hors de portée, c’est le seul endroit sûr.", // nieuw, nalezen
    'l.sickchild': "Un enfant malade et les allergies", // nieuw, nalezen
    'w.huiduitslag': "les rougeurs (des taches rouges sur la peau)", // nieuw, nalezen
    'w.diarree': "la diarrhée", // nieuw, nalezen
    'w.overgeven': "vomir", // nieuw, nalezen
    'w.allergielijst': "la liste des allergies", // nieuw, nalezen
    'w.adrenalinepen': "le stylo d’adrénaline (un stylo de médicament pour une allergie forte)", // nieuw, nalezen
    'w.temperaturen': "prendre la température", // nieuw, nalezen
    's.sickchild.1': "Sem a de la fièvre. J’appelle son père.", // nieuw, nalezen
    's.sickchild.2': "Regarde la liste des allergies avant le repas.", // nieuw, nalezen
    's.sickchild.3': "Ne donne jamais un médicament sans autorisation.", // nieuw, nalezen
    'c.sickchild.q': "Comment va Jip ?", // nieuw, nalezen
    'c.sickchild.a': "Il est très chaud. Je vais prendre sa température.", // nieuw, nalezen
    'c.sickchild': "Un enfant malade : dis-le, ne devine pas", // nieuw, nalezen
    'c.sickchild.b': "Fais attention à l’état des enfants. Un enfant est chaud, très fatigué, il vomit, ou il a des rougeurs ? Prends sa température, dis-le à ton collègue, et appelle les parents. Donne un médicament seulement avec l’autorisation écrite des parents, et note ce que tu as donné et à quelle heure. Sache quels enfants ont une allergie, et où est leur médicament. Un enfant avec une forte réaction allergique : donne le stylo d’adrénaline si tu as appris à le faire, et appelle le 112. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.sickchild.p': "Votre enfant est malade. Vous pouvez venir le chercher ?", // nieuw, nalezen
    'c.sickchild.s': "Une mère dit : “Donne-lui un sirop contre la fièvre à deux heures.” Il n’y a pas de formulaire. Que fais-tu ?", // nieuw, nalezen
    'c.sickchild.o1': "Tu lui demandes d’abord de signer le formulaire.", // nieuw, nalezen
    'c.sickchild.o2': "Tu le donnes : la mère l’a demandé.", // nieuw, nalezen
    'c.sickchild.o3': "Tu en donnes la moitié, par prudence.", // nieuw, nalezen
    'c.sickchild.w': "Sans autorisation écrite, tu n’as pas le droit de donner un médicament. Le formulaire protège l’enfant et toi.", // nieuw, nalezen
    'l.grouprules': "Le groupe et les règles", // nieuw, nalezen
    'w.pedagogischmedewerker': "l’auxiliaire de crèche (la personne qui s’occupe des enfants)", // nieuw, nalezen
    'w.mentor': "le référent (le collègue qui suit un enfant de près)", // nieuw, nalezen
    'w.vierogenprincipe': "la règle des quatre yeux (un autre adulte peut toujours te voir ou t’entendre)", // nieuw, nalezen
    'w.observeren': "observer (regarder avec attention, et le noter)", // nieuw, nalezen
    'w.peuter': "le tout-petit (un enfant de deux ou trois ans)", // nieuw, nalezen
    'w.groep': "le groupe (les enfants qui sont ensemble chaque jour)", // nieuw, nalezen
    's.grouprules.1': { m: "Je suis le référent de Lisa.", f: "Je suis la référente de Lisa.", x: "Je suis la personne référente de Lisa." }, // nieuw, nalezen
    's.grouprules.2': "Un collègue peut toujours nous voir ou nous entendre.", // nieuw, nalezen
    's.grouprules.3': "Je m’inquiète pour Daan.", // nieuw, nalezen
    'c.grouprules.q': "Je peux sortir avec le groupe sans collègue ?", // nieuw, nalezen
    'c.grouprules.a': "Oui, mais préviens d’abord un collègue.", // nieuw, nalezen
    'c.grouprules': "Jamais hors de la vue des autres", // nieuw, nalezen
    'c.grouprules.b': "À la crèche, un autre adulte doit toujours pouvoir te voir ou t’entendre quand tu es avec les enfants. Ça protège les enfants et toi. Chaque enfant a un référent : un employé qui suit cet enfant de près et qui parle avec les parents. Tu t’inquiètes pour un enfant à cause de ce qui se passe à la maison, par exemple des bleus ou de la peur ? Ne pose pas trop de questions à l’enfant : dis-le à ton responsable, qui connaît les étapes. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.grouprules.p': "Je m’inquiète pour cet enfant.", // nieuw, nalezen
    'c.grouprules.s': "Tu vois encore des bleus sur un enfant. L’enfant est silencieux. Que fais-tu ?", // nieuw, nalezen
    'c.grouprules.o1': "Tu le dis à ton responsable le jour même.", // nieuw, nalezen
    'c.grouprules.o2': "Tu poses beaucoup de questions à l’enfant.", // nieuw, nalezen
    'c.grouprules.o3': "Tu appelles les parents et tu demandes pourquoi.", // nieuw, nalezen
    'c.grouprules.w': "Ton responsable connaît les étapes quand on s’inquiète pour un enfant. Beaucoup de questions peuvent faire peur à l’enfant.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Toilettes, chambres d’hôtel et machines", // nieuw, nalezen
    'l.sanitary': "Les toilettes et les lavabos", // nieuw, nalezen
    'w.wastafel': "le lavabo (l’évier dans une salle de bains ou des toilettes)", // nieuw, nalezen
    'w.toiletpot': "la cuvette des toilettes", // nieuw, nalezen
    'w.toiletborstel': "la brosse à toilettes", // nieuw, nalezen
    'w.urinoir': "l’urinoir", // nieuw, nalezen
    'w.kalk': "le calcaire (le dépôt blanc de l’eau sur les robinets et le carrelage)", // nieuw, nalezen
    'w.ontstopper': "la ventouse (un outil pour des toilettes ou un tuyau bouchés)", // nieuw, nalezen
    's.sanitary.1': "Je fais d’abord les lavabos, puis les toilettes.", // nieuw, nalezen
    's.sanitary.2': "Il y a du calcaire sur le robinet.", // nieuw, nalezen
    's.sanitary.3': "Les toilettes du premier étage sont bouchées.", // nieuw, nalezen
    'c.sanitary.q': "Les toilettes sont finies ?", // nieuw, nalezen
    'c.sanitary.a': "Pas encore. Il y a des toilettes bouchées.", // nieuw, nalezen
    'c.sanitary': "Du propre vers le sale", // nieuw, nalezen
    'c.sanitary.b': "Dans des sanitaires, tu travailles du propre vers le sale : d’abord les miroirs et les lavabos, puis les toilettes, et le sol en dernier. Comme ça, tu n’apportes pas la saleté des toilettes au lavabo. Utilise les chiffons de la couleur pour les toilettes, et porte des gants. Nettoie aussi la brosse à toilettes, et laisse-la sécher. Des toilettes sont bouchées ou cassées ? Mets un panneau sur la porte, et signale-le. Lave-toi les mains quand tu as fini, même si tu as porté des gants. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.sanitary.p': "Ces toilettes sont bouchées. Je mets un panneau.", // nieuw, nalezen
    'c.sanitary.s': "Tu as nettoyé des toilettes. Le lavabo est le suivant. Tu tiens toujours le même chiffon. Que fais-tu ?", // nieuw, nalezen
    'c.sanitary.o1': "Tu prends un chiffon de la couleur pour le lavabo.", // nieuw, nalezen
    'c.sanitary.o2': "Tu utilises le même chiffon : il a l’air encore propre.", // nieuw, nalezen
    'c.sanitary.o3': "Tu rinces d’abord le chiffon dans les toilettes.", // nieuw, nalezen
    'c.sanitary.w': "Les microbes des toilettes sont sur le chiffon, même quand tu ne les vois pas. Un nouveau chiffon les garde loin des mains et des visages.", // nieuw, nalezen
    'l.hotelroom': "Les chambres d’hôtel", // nieuw, nalezen
    'w.laken': "le drap (sur un lit)", // nieuw, nalezen
    'w.kussensloop': "la taie d’oreiller", // nieuw, nalezen
    'w.dekbed': "la couette", // nieuw, nalezen
    'w.handdoek': "la serviette de toilette", // nieuw, nalezen
    'w.kamerlijst': "la liste des chambres (les chambres que tu dois faire aujourd’hui)", // nieuw, nalezen
    'w.opmaken': "faire (un lit)", // nieuw, nalezen
    's.hotelroom.1': "Je fais le lit avec des draps propres.", // nieuw, nalezen
    's.hotelroom.2': "Mets deux serviettes propres dans la salle de bains.", // nieuw, nalezen
    's.hotelroom.3': "La chambre douze est finie. Je vais à la treize.", // nieuw, nalezen
    'c.hotelroom.q': "Il te reste combien de chambres ?", // nieuw, nalezen
    'c.hotelroom.a': "Encore quatre. Après, ma liste est finie.", // nieuw, nalezen
    'c.hotelroom': "Frappe, dis qui tu es, et attends", // nieuw, nalezen
    'c.hotelroom.b': "Avant d’entrer dans une chambre d’hôtel, frappe et dis qui tu es, par exemple “Housekeeping !”. Attends un moment, et frappe encore. Il y a un panneau “Niet storen” (Ne pas déranger) sur la porte ? Alors n’entre pas, et note-le sur ta liste des chambres. Le client est dans la chambre ? Demande si tu peux faire la chambre maintenant, ou reviens plus tard. Les affaires du client restent où elles sont. Un client a oublié quelque chose ? Apporte-le à la réception. Ne garde jamais rien pour toi, même pas une petite chose. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.hotelroom.p': "Bonjour. Je peux faire la chambre maintenant ?", // nieuw, nalezen
    'c.hotelroom.s': "Dans une chambre vide, tu trouves un téléphone sous le lit. Le client est parti. Que fais-tu ?", // nieuw, nalezen
    'c.hotelroom.o1': "Tu l’apportes à la réception.", // nieuw, nalezen
    'c.hotelroom.o2': "Tu le gardes : le client est parti.", // nieuw, nalezen
    'c.hotelroom.o3': "Tu le laisses sous le lit.", // nieuw, nalezen
    'c.hotelroom.w': "Les objets perdus appartiennent toujours au client. La réception peut les lui rendre. Les garder, c’est voler, et ça peut te coûter ton travail.", // nieuw, nalezen
    'l.dosing': "Les produits et les machines", // nieuw, nalezen
    'w.doseren': "doser (utiliser la bonne quantité d’un produit)", // nieuw, nalezen
    'w.maatbeker': "le gobelet doseur", // nieuw, nalezen
    'w.sprayflacon': "le vaporisateur", // nieuw, nalezen
    'w.concentraat': "le concentré (un produit fort que tu mélanges avec de l’eau)", // nieuw, nalezen
    'w.veiligheidsblad': "la fiche de données de sécurité (elle dit les dangers d’un produit, et quoi faire)", // nieuw, nalezen
    'w.schrobzuigmachine': "l’autolaveuse (une machine qui frotte le sol et l’aspire pour le sécher)", // nieuw, nalezen
    's.dosing.1': "Mets un bouchon dans un seau d’eau.", // nieuw, nalezen
    's.dosing.2': "Lis d’abord l’étiquette.", // nieuw, nalezen
    's.dosing.3': "L’autolaveuse doit aller sur le chargeur.", // nieuw, nalezen
    'c.dosing.q': "Mets un peu plus de produit. Comme ça, ce sera plus propre.", // nieuw, nalezen
    'c.dosing.a': "Non, plus, ce n’est pas mieux. J’utilise le gobelet doseur.", // nieuw, nalezen
    'c.dosing': "La bonne dose, pas plus", // nieuw, nalezen
    'c.dosing.b': "Plus de produit ne nettoie pas mieux. Trop de produit laisse une couche collante, alors le sol se salit plus vite et peut devenir glissant. C’est aussi plus mauvais pour ta peau et tes poumons. Utilise le gobelet doseur ou la pompe doseuse, et suis l’étiquette. D’abord l’eau, puis le produit : comme ça, ça n’éclabousse pas. Avant d’utiliser l’autolaveuse, vérifie qu’elle est chargée, avec de l’eau propre dans le réservoir. À la fin, vide et rince le réservoir d’eau sale. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.dosing.p': "Je dois en mettre combien ?", // nieuw, nalezen
    'c.dosing.s': "Le sol reste collant. Un collègue dit : “Mets deux fois plus de produit.” Que fais-tu ?", // nieuw, nalezen
    'c.dosing.o1': "Tu utilises la dose de l’étiquette, et tu demandes.", // nieuw, nalezen
    'c.dosing.o2': "Tu mets le double : comme ça, ce sera propre.", // nieuw, nalezen
    'c.dosing.o3': "Tu verses le produit directement sur le sol.", // nieuw, nalezen
    'c.dosing.w': "Un sol collant veut souvent dire trop de produit, pas trop peu. La bonne dose nettoie le mieux et c’est le plus sûr.", // nieuw, nalezen
    'l.officenight': "Les bureaux, tôt ou tard", // nieuw, nalezen
    'w.toetsenbord': "le clavier", // nieuw, nalezen
    'w.papierbak': "la poubelle à papier (pour le vieux papier)", // nieuw, nalezen
    'w.lichtschakelaar': "l’interrupteur", // nieuw, nalezen
    'w.pantry': "la kitchenette (la petite cuisine dans un bureau)", // nieuw, nalezen
    'w.deurmat': "le paillasson (le tapis à l’entrée)", // nieuw, nalezen
    'w.alleenwerken': "travailler seul (personne d’autre n’est dans le bâtiment)", // nieuw, nalezen
    's.officenight.1': "Je vide les poubelles et la poubelle à papier.", // nieuw, nalezen
    's.officenight.2': "Je ne touche pas aux papiers sur le bureau.", // nieuw, nalezen
    's.officenight.3': "J’éteins la lumière quand j’ai fini.", // nieuw, nalezen
    'c.officenight.q': { m: "Tu travailles seul dans le bâtiment ce soir ?", f: "Tu travailles seule dans le bâtiment ce soir ?", x: "Tu es la seule personne à travailler dans le bâtiment ce soir ?" }, // nieuw, nalezen
    'c.officenight.a': "Oui. Je t’envoie un message quand j’ai fini.", // nieuw, nalezen
    'c.officenight': "Personne d’autre dans le bâtiment", // nieuw, nalezen
    'c.officenight.b': "Tôt le matin ou tard le soir, tu nettoies souvent un bureau sans personne d’autre. Sache quoi faire s’il se passe quelque chose : qui appeler, et où est la trousse de premiers secours ? Garde ton téléphone sur toi. Mets-toi d’accord avec ton responsable ou un collègue : tu envoies un message quand tu commences et quand tu as fini. Ne fais entrer personne que tu ne connais pas. Ne touche pas aux papiers, aux écrans ou aux claviers plus que nécessaire pour le nettoyage, et ne lis jamais ce qu’il y a dessus. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.officenight.p': "J’ai fini et je rentre chez moi maintenant.", // nieuw, nalezen
    'c.officenight.s': "La nuit, un homme frappe à la porte vitrée. Il dit qu’il travaille ici et qu’il a oublié sa clé. Que fais-tu ?", // nieuw, nalezen
    'c.officenight.o1': "Tu n’ouvres pas. Tu appelles ton responsable.", // nieuw, nalezen
    'c.officenight.o2': "Tu le fais entrer : il a l’air gentil.", // nieuw, nalezen
    'c.officenight.o3': "Tu lui donnes ta propre clé.", // nieuw, nalezen
    'c.officenight.w': "Tout le monde peut dire qu’il travaille là. Ton responsable peut le vérifier. Ta sécurité et le bâtiment passent en premier.", // nieuw, nalezen
    'u.cooking': "La cuisine et le service", // nieuw, nalezen
    'l.knives': "Les couteaux et la découpe", // nieuw, nalezen
    'w.koksmes': "le couteau de chef (un grand couteau de cuisine)", // nieuw, nalezen
    'w.dunschiller': "l’économe (pour éplucher les légumes)", // nieuw, nalezen
    'w.schillen': "éplucher", // nieuw, nalezen
    'w.hakken': "hacher (couper très petit)", // nieuw, nalezen
    'w.raspen': "râper", // nieuw, nalezen
    'w.blokjes': "les dés, les cubes (des petits morceaux carrés)", // nieuw, nalezen
    's.knives.1': "Coupe les carottes en dés.", // nieuw, nalezen
    's.knives.2': "Ne mets pas le couteau dans l’évier.", // nieuw, nalezen
    's.knives.3': "Hache finement le persil.", // nieuw, nalezen
    'c.knives.q': "Tu peux couper les oignons ?", // nieuw, nalezen
    'c.knives.a': "Oui, chef. En rondelles ou en dés ?", // nieuw, nalezen
    'c.knives': "Un couteau est un outil, pas un jouet", // nieuw, nalezen
    'c.knives.b': "Garde ton couteau bien aiguisé : un couteau qui ne coupe pas glisse plus facilement. Coupe sur une planche qui ne bouge pas : mets un chiffon mouillé dessous. Replie tes doigts, comme une griffe. Marche avec la pointe vers le bas, près de ta jambe, et dis “Mes !” quand tu passes près de quelqu’un. Ne mets jamais un couteau dans un évier plein d’eau : quelqu’un peut l’attraper sans le voir. Un couteau tombe ? Recule, ne le rattrape pas. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.knives.p': "Couteau ! Je passe derrière toi.", // nieuw, nalezen
    'c.knives.s': "Tu coupes. Ton couteau glisse de la planche et tombe. Que fais-tu ?", // nieuw, nalezen
    'c.knives.o1': "Tu recules, et tu le laisses tomber.", // nieuw, nalezen
    'c.knives.o2': "Tu le rattrapes vite avec la main.", // nieuw, nalezen
    'c.knives.o3': "Tu l’arrêtes avec ton pied.", // nieuw, nalezen
    'c.knives.w': "Un couteau qui tombe peut couper profondément ta main ou ton pied. Un couteau par terre doit juste être lavé.", // nieuw, nalezen
    'l.rawcooked': "Cru, cuit et allergènes", // nieuw, nalezen
    'w.rauw': "cru (pas cuit)", // nieuw, nalezen
    'w.gaar': "cuit (prêt à manger)", // nieuw, nalezen
    'w.afdekken': "couvrir (avec un couvercle ou du film)", // nieuw, nalezen
    'w.kleurcode': "le code couleur (une couleur de planche et de couteau pour chaque sorte d’aliment)", // nieuw, nalezen
    'w.allergenenlijst': "la liste des allergènes (elle dit ce qu’il y a dans chaque plat)", // nieuw, nalezen
    'w.glutenvrij': "sans gluten", // nieuw, nalezen
    's.rawcooked.1': "La viande crue va en bas du frigo.", // nieuw, nalezen
    's.rawcooked.2': "Le poulet est déjà cuit ?", // nieuw, nalezen
    's.rawcooked.3': "Couvre les bacs dans la chambre froide.", // nieuw, nalezen
    'c.rawcooked.q': "Cette sauce est sans gluten ?", // nieuw, nalezen
    'c.rawcooked.a': { m: "Je ne suis pas sûr. Je vais regarder la liste des allergènes.", f: "Je ne suis pas sûre. Je vais regarder la liste des allergènes.", x: "Je ne sais pas exactement. Je vais regarder la liste des allergènes." }, // nieuw, nalezen
    'c.rawcooked': "Le cru et le prêt à manger ne se touchent jamais", // nieuw, nalezen
    'c.rawcooked.b': "La viande, le poisson et les œufs crus peuvent porter des microbes. Garde-les loin de la nourriture prête à manger. Utilise une planche et un couteau séparés, ou le code couleur de ta cuisine, et lave-toi les mains après avoir touché des aliments crus. La viande crue va en bas du frigo, pour que rien ne coule sur les autres aliments. Couvre la nourriture et mets une date dessus. Avec les allergies, une trace peut suffire : utilise des ustensiles propres. Un restaurant doit pouvoir dire aux clients quels allergènes il y a dans un plat : regarde la liste des allergènes. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.rawcooked.p': "Quelle planche est pour la viande crue ?", // nieuw, nalezen
    'c.rawcooked.s': "Tu coupes du poulet cru. Ensuite, tu dois couper des tomates pour une salade. Que fais-tu ?", // nieuw, nalezen
    'c.rawcooked.o1': "Tu prends une planche propre et un couteau propre.", // nieuw, nalezen
    'c.rawcooked.o2': "Tu essuies la planche avec un chiffon, et tu continues.", // nieuw, nalezen
    'c.rawcooked.o3': "Tu coupes les tomates sur la même planche.", // nieuw, nalezen
    'c.rawcooked.w': "Les microbes du poulet cru vont sur les tomates, et une salade n’est pas cuite ensuite. Une planche propre empêche ça.", // nieuw, nalezen
    'l.pass': "La plonge et le passe", // nieuw, nalezen
    'w.pass': "le passe (le comptoir où les assiettes attendent le serveur)", // nieuw, nalezen
    'w.bon': "le bon de commande (la commande du serveur pour la cuisine)", // nieuw, nalezen
    'w.spoelkeuken': "la plonge (là où on fait la vaisselle)", // nieuw, nalezen
    'w.vaatwaskorf': "le casier à vaisselle (le panier qui va dans le lave-vaisselle)", // nieuw, nalezen
    'w.voorspoelen': "prérincer (rincer avant la machine)", // nieuw, nalezen
    'w.warmhoudlamp': "la lampe chauffante (elle garde les assiettes chaudes)", // nieuw, nalezen
    's.pass.1': "La table huit est au passe.", // nieuw, nalezen
    's.pass.2': "Deux nouveaux bons arrivent.", // nieuw, nalezen
    's.pass.3': "Prérince d’abord les assiettes.", // nieuw, nalezen
    'c.pass.q': "Elle arrive, la table douze ?", // nieuw, nalezen
    'c.pass.a': "Elle est au passe. Je l’apporte maintenant.", // nieuw, nalezen
    'c.pass': "Au passe, les assiettes n’attendent pas", // nieuw, nalezen
    'c.pass.b': "Au passe, la cuisine pose les assiettes pour le serveur. La nourriture chaude doit aller vite au client, alors une assiette n’attend pas longtemps au passe. Vérifie le bon : la bonne table, les bons plats, un bord d’assiette propre ? Alors prends-la. À la plonge : prérince, mets tout dans les casiers, et laisse la machine faire le reste. N’ouvre pas la machine pendant qu’elle tourne : la vapeur est très chaude. Porte des gants quand tu remets les produits de la machine. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.pass.p': "C’est pour quelle table ?", // nieuw, nalezen
    'c.pass.s': "Il y a deux assiettes au passe. Tu ne sais pas pour quelle table elles sont. Que fais-tu ?", // nieuw, nalezen
    'c.pass.o1': "Tu regardes le bon, ou tu demandes au chef.", // nieuw, nalezen
    'c.pass.o2': "Tu les apportes à une table qui attend.", // nieuw, nalezen
    'c.pass.o3': "Tu attends que quelqu’un d’autre les prenne.", // nieuw, nalezen
    'c.pass.w': "Une assiette à la mauvaise table, ça fait deux clients qui attendent et de la nourriture froide. Une petite question va plus vite.", // nieuw, nalezen
    'l.bill': "Les plats et l’addition", // nieuw, nalezen
    'w.voorgerecht': "l’entrée (le premier plat)", // nieuw, nalezen
    'w.hoofdgerecht': "le plat principal", // nieuw, nalezen
    'w.nagerecht': "le dessert", // nieuw, nalezen
    'w.reservering': "la réservation (une table réservée à l’avance)", // nieuw, nalezen
    'w.pinapparaat': "le terminal de paiement", // nieuw, nalezen
    'w.apartbetalen': "payer séparément (chaque personne paie pour elle)", // nieuw, nalezen
    's.bill.1': "Vous avez réservé ?", // nieuw, nalezen
    's.bill.2': "Vous voulez payer ensemble ou séparément ?", // nieuw, nalezen
    's.bill.3': "J’apporte le plat principal maintenant ?", // nieuw, nalezen
    'c.bill.q': "On peut payer séparément ?", // nieuw, nalezen
    'c.bill.a': "Oui, bien sûr. Je vais chercher le terminal de paiement.", // nieuw, nalezen
    'c.bill': "L’argent à table : compte deux fois", // nieuw, nalezen
    'c.bill.b': "Quand un client paie, dis clairement le montant et laisse le client voir le terminal de paiement. En liquide, compte l’argent quand tu le reçois, et encore quand tu rends la monnaie. L’argent va dans la caisse ou dans ta sacoche de service, jamais dans ta propre poche. Les pourboires (fooi) vont là où ton entreprise le dit, par exemple dans la boîte à pourboires. Un client est parti sans payer ? Ne cours pas après lui : dis-le à ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.bill.p': "Ça fait quarante-cinq euros, s’il vous plaît.", // nieuw, nalezen
    'c.bill.s': "Un client te donne de l’argent et dit : “C’est juste.” Tu ne l’as pas compté. Que fais-tu ?", // nieuw, nalezen
    'c.bill.o1': "Tu le comptes devant le client.", // nieuw, nalezen
    'c.bill.o2': "Tu le ranges, et tu le comptes plus tard.", // nieuw, nalezen
    'c.bill.o3': "Tu fais confiance au client : tu dis merci.", // nieuw, nalezen
    'c.bill.w': "Si tu comptes plus tard et qu’il manque de l’argent, personne ne peut vérifier ce qui s’est passé. Compter à table protège le client et toi.", // nieuw, nalezen
    'u.carework': "Les soins personnels et les soins à domicile", // nieuw, nalezen
    'l.washing': "Laver et habiller", // nieuw, nalezen
    'w.washandje': "le gant de toilette (un petit tissu comme un gant)", // nieuw, nalezen
    'w.douchestoel': "la chaise de douche", // nieuw, nalezen
    'w.tandenpoetsen': "se brosser les dents", // nieuw, nalezen
    'w.kammen': "peigner", // nieuw, nalezen
    'w.scheren': "raser", // nieuw, nalezen
    'w.steunkous': "le bas de contention (un bas serré pour les jambes)", // nieuw, nalezen
    's.washing.1': "L’eau est assez chaude ?", // nieuw, nalezen
    's.washing.2': "Vous voulez vous laver le visage vous-même ?", // nieuw, nalezen
    's.washing.3': "Je vous mets vos bas de contention maintenant.", // nieuw, nalezen
    'c.washing.q': "Je ne veux pas prendre de douche aujourd’hui.", // nieuw, nalezen
    'c.washing.a': "D’accord. Je vous aide au lavabo ?", // nieuw, nalezen
    'c.washing': "Demande d’abord, couvre, et laisse choisir", // nieuw, nalezen
    'c.washing.b': "Laver quelqu’un, c’est très intime. Dis ce que tu vas faire, et demande d’abord. Couvre avec une serviette les parties du corps que tu ne laves pas. Ferme la porte ou le rideau. Laisse le résident choisir : la douche ou une toilette au lavabo, et quels vêtements mettre. Laisse le résident faire ce qu’il peut encore faire, même si c’est plus lent. Un résident dit non ? Ne le force pas. Réessaie plus tard, propose autre chose, et dis-le à l’infirmière.", // nieuw, nalezen
    'c.washing.p': "Qu’est-ce que vous voulez mettre aujourd’hui ?", // nieuw, nalezen
    'c.washing.s': "Une résidente dit qu’elle ne veut pas être lavée aujourd’hui. Que fais-tu ?", // nieuw, nalezen
    'c.washing.o1': "Tu l’acceptes, et tu le dis à l’infirmière.", // nieuw, nalezen
    'c.washing.o2': "Tu la laves quand même : c’est sur la liste.", // nieuw, nalezen
    'c.washing.o3': "Tu sautes la toilette, et tu ne dis rien.", // nieuw, nalezen
    'c.washing.w': "Un résident a le droit de dire non. Forcer les soins abîme la confiance. L’infirmière peut regarder pourquoi, et ce qu’on peut faire.", // nieuw, nalezen
    'l.observing': "Observer et noter", // nieuw, nalezen
    'w.rapporteren': "faire un rapport (écrire ce que tu as vu, dans le dossier de soins)", // nieuw, nalezen
    'w.zorgdossier': "le dossier de soins (tout sur les soins d’un résident)", // nieuw, nalezen
    'w.drukplek': "l’escarre (une tache rouge quand on reste longtemps couché ou assis)", // nieuw, nalezen
    'w.huid': "la peau", // nieuw, nalezen
    'w.plassen': "faire pipi", // nieuw, nalezen
    'w.vochtlijst': "la fiche des boissons (combien un résident boit)", // nieuw, nalezen
    's.observing.1': "La dame a une tache rouge sur le talon.", // nieuw, nalezen
    's.observing.2': "Le monsieur a peu bu aujourd’hui.", // nieuw, nalezen
    's.observing.3': "Je l’écris dans le dossier de soins.", // nieuw, nalezen
    'c.observing.q': "Il y a quelque chose de spécial avec madame Jansen ?", // nieuw, nalezen
    'c.observing.a': "Oui. Elle n’a presque pas fait pipi aujourd’hui.", // nieuw, nalezen
    'c.observing': "Écris ce que tu vois, pas ce que tu penses", // nieuw, nalezen
    'c.observing.b': "Ce que tu écris dans le dossier de soins, le collègue suivant le lit. Écris des faits : ce que tu as vu, entendu ou mesuré, et quand. Pas “Mevrouw is lastig” (Madame est difficile), mais “Mevrouw wilde niet eten en duwde het bord weg” (Madame ne voulait pas manger et a repoussé l’assiette). Écris-le le jour même, avec des phrases courtes. Tu ne sais pas bien comment l’écrire en néerlandais ? Dis-le à l’infirmière, et écrivez-le ensemble. Regarde la peau quand tu laves quelqu’un : une tache rouge qui ne part pas peut être le début d’une escarre. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.observing.p': "J’écris ce que j’ai vu.", // nieuw, nalezen
    'c.observing.s': "Une résidente était en colère pendant la toilette. Tu dois l’écrire dans le dossier. Que fais-tu ?", // nieuw, nalezen
    'c.observing.o1': "Tu écris ce qu’elle a dit et fait, et quand.", // nieuw, nalezen
    'c.observing.o2': "Tu écris : “Dame difficile, comme toujours.”", // nieuw, nalezen
    'c.observing.o3': "Tu n’écris rien : c’est normal.", // nieuw, nalezen
    'c.observing.w': "Les faits aident le collègue suivant et l’infirmière à agir. Une opinion ne dit pas ce qui s’est passé.", // nieuw, nalezen
    'l.homecare': "Les soins à domicile", // nieuw, nalezen
    'w.thuiszorg': "les soins à domicile (des soins dans la maison du client)", // nieuw, nalezen
    'w.sleutelkluis': "la boîte à clé (une petite boîte avec un code, avec la clé de la maison dedans)", // nieuw, nalezen
    'w.zorgplan': "le plan de soins (quels soins un client reçoit, et comment)", // nieuw, nalezen
    'w.wijkverpleegkundige': "l’infirmière à domicile (l’infirmière de l’équipe de soins à domicile)", // nieuw, nalezen
    'w.mantelzorger': "l’aidant (un proche ou un ami qui s’occupe du client)", // nieuw, nalezen
    'w.alarmknop': "le bouton d’alarme (le client le porte, pour appeler à l’aide)", // nieuw, nalezen
    's.homecare.1': "D’abord, je sonne. Ensuite, je prends la clé.", // nieuw, nalezen
    's.homecare.2': "Qu’est-ce qu’il y a dans le plan de soins ?", // nieuw, nalezen
    's.homecare.3': "Aujourd’hui, j’ai un quart d’heure de retard.", // nieuw, nalezen
    'c.homecare.q': "Qui est là ?", // nieuw, nalezen
    'c.homecare.a': "Bonjour, ce sont les soins à domicile. Je peux entrer ?", // nieuw, nalezen
    'c.homecare': "En visite chez quelqu’un", // nieuw, nalezen
    'c.homecare.b': "Dans les soins à domicile, tu travailles dans la maison du client. Là-bas, tu es en visite : sonne et dis qui tu es, même quand tu as une clé. Le code de la boîte à clé est secret. Ne l’écris jamais là où d’autres peuvent le voir, et referme toujours la boîte à clé. Suis le plan de soins : ce que tu fais est écrit dedans. Quelque chose est différent, ou le client n’ouvre pas la porte ? Ne pars pas comme ça. Appelle ton équipe ou l’infirmière à domicile. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.homecare.p': "Bonjour, je viens des soins à domicile.", // nieuw, nalezen
    'c.homecare.s': "Tu sonnes. La cliente n’ouvre pas. Sa voiture est là. Que fais-tu ?", // nieuw, nalezen
    'c.homecare.o1': "Tu appelles ton équipe, et tu attends.", // nieuw, nalezen
    'c.homecare.o2': "Tu vas chez le client suivant.", // nieuw, nalezen
    'c.homecare.o3': "Tu sonnes encore une fois, puis tu pars.", // nieuw, nalezen
    'c.homecare.w': "La cliente est peut-être tombée, ou malade. Ton équipe sait quoi faire, et qui a une clé.", // nieuw, nalezen
    'l.liftaids': "Les aides au levage et la sécurité", // nieuw, nalezen
    'w.glijlaken': "le drap de glisse (un drap lisse pour déplacer un résident dans le lit)", // nieuw, nalezen
    'w.tilband': "la sangle (elle passe sous le résident, pour le lève-personne)", // nieuw, nalezen
    'w.stalift': "le verticalisateur (il aide un résident à se mettre debout)", // nieuw, nalezen
    'w.werkhoogte': "la hauteur de travail (le lit à la hauteur de tes hanches)", // nieuw, nalezen
    'w.bedhek': "la barrière de lit", // nieuw, nalezen
    'w.transferplank': "la planche de transfert (une planche pour glisser du lit à une chaise)", // nieuw, nalezen
    's.liftaids.1': "Mets le lit à la hauteur de travail.", // nieuw, nalezen
    's.liftaids.2': "Le frein du fauteuil roulant est mis ?", // nieuw, nalezen
    's.liftaids.3': "On fait ça à deux.", // nieuw, nalezen
    'c.liftaids.q': "Tu peux tourner la dame sans aide ?", // nieuw, nalezen
    'c.liftaids.a': "Avec le drap de glisse, oui. Je vais le chercher.", // nieuw, nalezen
    'c.liftaids': "Laisse l’aide soulever à ta place", // nieuw, nalezen
    'c.liftaids.b': "Avant d’utiliser un lève-personne, vérifie-le : la batterie est chargée, la sangle est à la bonne taille et pas déchirée ? Mets les freins du lit et du fauteuil roulant. Monte le lit à la hauteur de tes hanches, pour ne pas te pencher. Explique chaque étape au résident. Le plan de soins dit de quelle aide un résident a besoin. Une aide est cassée ou elle manque ? Ne fais pas sans : signale-le, et demande à un collègue de t’aider. On ne t’a pas montré comment marche une aide ? Demande avant de commencer. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.liftaids.p': "La sangle est abîmée. Je vais en chercher une autre.", // nieuw, nalezen
    'c.liftaids.s': "Tu veux utiliser le lève-personne. La sangle a une petite déchirure. Que fais-tu ?", // nieuw, nalezen
    'c.liftaids.o1': "Tu prends une autre sangle, et tu signales la déchirure.", // nieuw, nalezen
    'c.liftaids.o2': "Tu l’utilises : la déchirure est toute petite.", // nieuw, nalezen
    'c.liftaids.o3': "Tu fais un nœud dans la sangle.", // nieuw, nalezen
    'c.liftaids.w': "Une petite déchirure peut s’agrandir sous le poids d’une personne. Une chute d’un lève-personne peut gravement blesser le résident.", // nieuw, nalezen
    'u.shopfloor': "Caisse, stock et fermeture", // nieuw, nalezen
    'l.returns': "Les retours et la caisse", // nieuw, nalezen
    'w.terugbrengen': "rapporter (un produit au magasin)", // nieuw, nalezen
    'w.klantenkaart': "la carte de fidélité (une carte pour gagner des points)", // nieuw, nalezen
    'w.statiegeld': "la consigne (de l’argent rendu pour une bouteille ou une canette vide)", // nieuw, nalezen
    'w.kassalade': "le tiroir-caisse (le tiroir avec l’argent)", // nieuw, nalezen
    'w.streepjescode': "le code-barres", // nieuw, nalezen
    'w.tegoedbon': "le bon d’achat (un papier à dépenser plus tard dans le magasin)", // nieuw, nalezen
    's.returns.1': "Vous cumulez des points avec la carte de fidélité ?", // nieuw, nalezen
    's.returns.2': "Le code-barres ne marche pas.", // nieuw, nalezen
    's.returns.3': "Vous voulez récupérer l’argent ou un bon d’achat ?", // nieuw, nalezen
    'c.returns.q': "Je veux rapporter ce pull.", // nieuw, nalezen
    'c.returns.a': "C’est possible. Vous avez encore le ticket de caisse ?", // nieuw, nalezen
    'c.returns': "Les retours : suis les règles du magasin", // nieuw, nalezen
    'c.returns.b': "Chaque magasin a ses propres règles pour les retours : combien de jours, avec ou sans ticket de caisse, remboursement ou bon d’achat. Apprends-les, et suis-les pour chaque client. Tu as un doute ? Demande à un collègue ou au gérant, et ne décide pas sans eux. À la fin de ton service, compte ton tiroir-caisse, avec un collègue si ton magasin fait comme ça. Ne prends jamais d’argent dans la caisse pour toi, même pas pour l’emprunter un moment. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.returns.p': "Je vais juste demander au gérant du magasin.", // nieuw, nalezen
    'c.returns.s': "Une cliente veut être remboursée pour des chaussures. Elle n’a pas de ticket de caisse. Tu ne connais pas la règle. Que fais-tu ?", // nieuw, nalezen
    'c.returns.o1': "Tu demandes au gérant quoi faire.", // nieuw, nalezen
    'c.returns.o2': "Tu rends l’argent : elle est gentille.", // nieuw, nalezen
    'c.returns.o3': "Tu dis non, et tu la renvoies.", // nieuw, nalezen
    'c.returns.w': "Le gérant connaît les règles et peut décider. Comme ça, la cliente reçoit une réponse juste, et ce n’est pas ta faute.", // nieuw, nalezen
    'l.facing': "Le facing et les produits frais", // nieuw, nalezen
    'w.facen': "faire le facing (tirer les produits vers l’avant, l’étiquette devant)", // nieuw, nalezen
    'w.afprijzen': "baisser le prix (mettre un prix plus bas)", // nieuw, nalezen
    'w.koelvak': "le rayon frais (le rayon froid dans un magasin)", // nieuw, nalezen
    'w.diepvries': "le congélateur", // nieuw, nalezen
    'w.uitpakken': "déballer", // nieuw, nalezen
    'w.schapkaartje': "l’étiquette de rayon (la carte de prix sur le rayon)", // nieuw, nalezen
    's.facing.1': "D’abord le rayon frais, puis le reste.", // nieuw, nalezen
    's.facing.2': "Mets tout bien vers l’avant.", // nieuw, nalezen
    's.facing.3': "Baisse le prix des produits d’aujourd’hui.", // nieuw, nalezen
    'c.facing.q': "Tu as fini le rayon frais ?", // nieuw, nalezen
    'c.facing.a': "Presque. Je dois encore faire le facing.", // nieuw, nalezen
    'c.facing': "Le froid d’abord, et le rayon a l’air plein", // nieuw, nalezen
    'c.facing.b': "Les produits frais et surgelés vont d’abord au frigo ou au congélateur, avant tout le reste. Ils ne doivent pas rester longtemps au chaud. Ensuite, le reste. Faire le facing veut dire : tirer les produits vers l’avant, avec l’étiquette vers le client. Comme ça, le rayon a l’air plein et bien rangé. Vérifie l’étiquette de rayon : le prix est-il juste pour ce produit ? Quand tu ouvres des cartons, coupe loin de ton corps, et pas trop profond : tu peux abîmer le produit. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.facing.p': "Les produits frais d’abord, puis le reste.", // nieuw, nalezen
    'c.facing.s': "Une palette de lait et une palette de chips arrivent. Tu n’as pas de collègue avec toi. Que fais-tu ?", // nieuw, nalezen
    'c.facing.o1': "Tu mets d’abord le lait au frigo.", // nieuw, nalezen
    'c.facing.o2': "Tu commences par les chips : elles sont plus légères.", // nieuw, nalezen
    'c.facing.o3': "Tu laisses les deux jusqu’à ce qu’un collègue arrive.", // nieuw, nalezen
    'c.facing.w': "Le lait qui reste trop longtemps au chaud peut rendre les clients malades, et il doit être jeté. Les chips peuvent attendre.", // nieuw, nalezen
    'l.shrink': "La casse et le vol", // nieuw, nalezen
    'w.derving': "la démarque (ce que le magasin perd : des produits cassés, vieux ou volés)", // nieuw, nalezen
    'w.afschrijven': "sortir du stock (noter qu’un produit est perdu)", // nieuw, nalezen
    'w.personeelsaankoop': "l’achat du personnel (ce que tu achètes dans ton propre magasin)", // nieuw, nalezen
    'w.tassencontrole': "le contrôle des sacs", // nieuw, nalezen
    'w.kassamedewerker': "le caissier, la caissière", // nieuw, nalezen
    'w.winkelwagen': "le chariot (de courses)", // nieuw, nalezen
    's.shrink.1': "Ce pot est cassé. Je le sors du stock.", // nieuw, nalezen
    's.shrink.2': "Je paie mes courses à la caisse d’un collègue.", // nieuw, nalezen
    's.shrink.3': "Il y a un chariot plein près de la sortie.", // nieuw, nalezen
    'c.shrink.q': "Je peux regarder dans ton sac ?", // nieuw, nalezen
    'c.shrink.a': "Oui, bien sûr. Voici mon ticket de caisse.", // nieuw, nalezen
    'c.shrink': "Tes propres courses : paie comme un client", // nieuw, nalezen
    'c.shrink.b': "Un magasin perd beaucoup à cause des produits cassés, des vieux produits et des vols. Aide à garder ça bas. Un produit cassé ou abîmé ? Ne le remets pas en rayon : sors-le du stock comme ton magasin le fait. Tes propres courses : paie à la caisse comme chaque client, et garde le ticket de caisse. Dans beaucoup de magasins, tu n’as pas le droit de passer toi-même tes courses en caisse : c’est un collègue qui le fait. Ne mange jamais et ne prends jamais un produit sans payer, même pas un petit. Certains magasins contrôlent les sacs : c’est une règle du magasin, pas un signe de méfiance envers toi. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shrink.p': "Je paie d’abord, et je garde le ticket de caisse.", // nieuw, nalezen
    'c.shrink.s': "À la fin de ton service, tu as faim. Un sandwich a dépassé sa date aujourd’hui. Que fais-tu ?", // nieuw, nalezen
    'c.shrink.o1': "Tu demandes au gérant quelle est la règle.", // nieuw, nalezen
    'c.shrink.o2': "Tu le manges : il sera jeté de toute façon.", // nieuw, nalezen
    'c.shrink.o3': "Tu l’emportes chez toi dans ton sac.", // nieuw, nalezen
    'c.shrink.w': "Dans beaucoup de magasins, prendre un produit sans payer, c’est voler, même quand il est vieux. Demander d’abord te protège.", // nieuw, nalezen
    'l.shopclose': "Fermer le magasin", // nieuw, nalezen
    'w.sluitingstijd': "l’heure de fermeture", // nieuw, nalezen
    'w.rolluik': "le rideau métallique", // nieuw, nalezen
    'w.kasverschil': "l’écart de caisse (plus ou moins d’argent dans la caisse que prévu)", // nieuw, nalezen
    'w.kluis': "le coffre-fort (une boîte solide pour l’argent)", // nieuw, nalezen
    'w.overval': "le braquage (quelqu’un prend de l’argent avec des menaces)", // nieuw, nalezen
    'w.achterdeur': "la porte de derrière", // nieuw, nalezen
    's.shopclose.1': "On ferme dans dix minutes.", // nieuw, nalezen
    's.shopclose.2': "On compte la caisse à deux.", // nieuw, nalezen
    's.shopclose.3': "La porte de derrière est fermée à clé ?", // nieuw, nalezen
    'c.shopclose.q': "Je peux encore entrer vite fait ?", // nieuw, nalezen
    'c.shopclose.a': { m: "Désolé, nous sommes fermés. Demain, nous ouvrons à huit heures.", f: "Désolée, nous sommes fermés. Demain, nous ouvrons à huit heures.", x: "Pardon, nous sommes fermés. Demain, nous ouvrons à huit heures." }, // nieuw, nalezen
    'c.shopclose': "Un braquage : donne, et reste en sécurité", // nieuw, nalezen
    'c.shopclose.b': "À l’heure de fermeture, il y a beaucoup d’argent dans la caisse, alors les magasins ont des règles : compter à deux, mettre l’argent dans le coffre-fort, et fermer d’abord à clé la porte de derrière. Un braquage (overval) ? Ta vie vaut plus que l’argent. Reste calme, fais ce qu’ils disent, ne te bats pas et ne cours pas après eux. Retiens ce que tu peux : les vêtements, la taille, la voix. Quand ils sont partis : ferme la porte à clé, appelle le 112, et ne touche à rien. Après, parles-en avec ton responsable ou avec une personne de confiance. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shopclose.p': "On ferme. Je ferme la porte à clé.", // nieuw, nalezen
    'c.shopclose.s': "Un homme avec un couteau veut l’argent de ta caisse. Que fais-tu ?", // nieuw, nalezen
    'c.shopclose.o1': "Tu restes calme, et tu lui donnes l’argent.", // nieuw, nalezen
    'c.shopclose.o2': "Tu te bats : l’argent n’est pas à lui.", // nieuw, nalezen
    'c.shopclose.o3': "Tu cours vers l’arrière, et tu t’enfermes.", // nieuw, nalezen
    'c.shopclose.w': "Se battre ou s’enfuir rend un braqueur nerveux et plus dangereux. L’argent peut être remplacé. Toi, non.", // nieuw, nalezen
    'u.uitzend': "Le travail en intérim", // nieuw, nalezen
    'l.hirer': "L’agence et l’entreprise utilisatrice", // nieuw, nalezen
    'w.inlener': "l’entreprise utilisatrice (l’entreprise où l’agence t’envoie travailler)", // nieuw, nalezen
    'w.vestiging': "l’agence locale (le bureau de l’agence dans ta ville)", // nieuw, nalezen
    'w.intakegesprek': "l’entretien d’accueil (le premier entretien à l’agence)", // nieuw, nalezen
    'w.opstapplaats': "le point de ramassage (là où le bus de l’agence vient te chercher)", // nieuw, nalezen
    'w.bedrijfsregels': "le règlement de l’entreprise (les règles de l’entreprise utilisatrice)", // nieuw, nalezen
    'w.aanspreekpunt': "la personne de contact (la personne à qui tu poses tes questions)", // nieuw, nalezen
    's.hirer.1': "Demain, tu travailles dans une nouvelle entreprise utilisatrice.", // nieuw, nalezen
    's.hirer.2': "Qui est ma personne de contact ici ?", // nieuw, nalezen
    's.hirer.3': "Le bus part du point de ramassage à six heures.", // nieuw, nalezen
    'c.hirer.q': "Tu peux commencer demain dans une nouvelle entreprise utilisatrice ?", // nieuw, nalezen
    'c.hirer.a': "Oui. Je dois être là à quelle heure ?", // nieuw, nalezen
    'c.hirer': "Deux entreprises : qui fait quoi ?", // nieuw, nalezen
    'c.hirer.b': "Tu travailles via une agence d’intérim (uitzendbureau), mais tu fais le travail dans une autre entreprise : l’entreprise utilisatrice (inlener). L’agence est ton employeur : ton contrat, ton salaire, ta fiche de paie et tes jours de congé viennent de l’agence. L’entreprise utilisatrice te dit quoi faire sur le lieu de travail, et elle doit garantir la sécurité de ton travail, comme pour ses propres travailleurs. Déclare-toi malade comme ton agence le dit : souvent à l’agence et à l’entreprise utilisatrice. Garde dans ton téléphone le nom et le numéro de ta personne de contact à l’agence. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.hirer.p': "Qui est ma personne de contact à l’agence ?", // nieuw, nalezen
    'c.hirer.s': "Dans l’entreprise utilisatrice, tu dois travailler avec une machine. Personne ne t’a montré comment faire. Que fais-tu ?", // nieuw, nalezen
    'c.hirer.o1': "Tu demandes à l’entreprise utilisatrice de te montrer d’abord.", // nieuw, nalezen
    'c.hirer.o2': "Tu essaies : c’est l’agence qui est responsable.", // nieuw, nalezen
    'c.hirer.o3': "Tu rentres chez toi, et tu ne dis rien.", // nieuw, nalezen
    'c.hirer.w': "L’entreprise utilisatrice doit te montrer comment travailler en sécurité, comme à ses propres travailleurs. Le demander, c’est ton droit.", // nieuw, nalezen
    'l.phases': "Ton contrat et les phases", // nieuw, nalezen
    'w.fase': "la phase (une étape dans ton contrat d’intérim : A, B ou C)", // nieuw, nalezen
    'w.uitzendbeding': "la clause d’intérim (ton travail peut s’arrêter quand l’entreprise utilisatrice n’a plus besoin de toi)", // nieuw, nalezen
    'w.aflopen': "se terminer, arriver à la fin (un contrat)", // nieuw, nalezen
    'w.doorwerken': "continuer à travailler (au même endroit)", // nieuw, nalezen
    'w.vastecontract': "le contrat à durée indéterminée (un contrat sans date de fin)", // nieuw, nalezen
    'w.onderbreking': "l’interruption (une période sans travail entre deux contrats)", // nieuw, nalezen
    's.phases.1': "Je suis dans quelle phase maintenant ?", // nieuw, nalezen
    's.phases.2': "Mon contrat se termine la semaine prochaine.", // nieuw, nalezen
    's.phases.3': "Je peux continuer à travailler ici ?", // nieuw, nalezen
    'c.phases.q': "Ta mission s’arrête vendredi.", // nieuw, nalezen
    'c.phases.a': "D’accord. Vous avez un autre travail pour moi ?", // nieuw, nalezen
    'c.phases': "Les phases A, B et C", // nieuw, nalezen
    'c.phases.b': "La plupart des intérimaires travaillent sous une cao pour les intérimaires (uitzend-cao). Elle a des phases. En phase A, ton travail peut en général s’arrêter quand l’entreprise utilisatrice n’a plus besoin de toi (uitzendbeding). En phase B, tu reçois des contrats à durée déterminée. En phase C, tu reçois un contrat à durée indéterminée avec l’agence. La durée de chaque phase est écrite dans ta cao. Demande à l’agence dans quelle phase tu es, et garde tous tes contrats. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.phases.p': "La phase A dure combien de temps pour moi ?", // nieuw, nalezen
    'c.phases.s': "Tu as travaillé longtemps pour la même agence. Tu as toujours des contrats courts. Que fais-tu ?", // nieuw, nalezen
    'c.phases.o1': "Tu demandes à l’agence dans quelle phase tu es.", // nieuw, nalezen
    'c.phases.o2': "Rien : le travail en intérim est toujours court.", // nieuw, nalezen
    'c.phases.o3': "Tu arrêtes, et tu cherches une autre agence.", // nieuw, nalezen
    'c.phases.w': "Après assez de temps, la cao te donne plus de sécurité. L’agence peut te dire où tu en es, et le syndicat peut le vérifier avec toi.", // nieuw, nalezen
    'l.deductions': "Le salaire et les retenues", // nieuw, nalezen
    'w.inhouding': "la retenue (de l’argent enlevé de ton salaire)", // nieuw, nalezen
    'w.vastekracht': "le salarié permanent (un travailleur employé par l’entreprise utilisatrice elle-même)", // nieuw, nalezen
    'w.vervoer': "le transport (le bus ou la camionnette pour aller au travail)", // nieuw, nalezen
    'w.schriftelijk': "par écrit (sur papier ou dans un e-mail)", // nieuw, nalezen
    'w.navragen': "se renseigner, vérifier (savoir si quelque chose est juste)", // nieuw, nalezen
    'w.brutoloon': "le salaire brut (ton salaire avant les impôts et les retenues)", // nieuw, nalezen
    's.deductions.1': "C’est quoi, cette retenue sur ma fiche de paie ?", // nieuw, nalezen
    's.deductions.2': "Je gagne autant que les salariés permanents ?", // nieuw, nalezen
    's.deductions.3': "Je veux d’abord voir ça sur papier.", // nieuw, nalezen
    'c.deductions.q': "On retient le prix du bus sur ton salaire.", // nieuw, nalezen
    'c.deductions.a': "C’est permis ? Je vais d’abord vérifier.", // nieuw, nalezen
    'c.deductions': "Qu’est-ce qu’on peut retenir sur ton salaire ?", // nieuw, nalezen
    'c.deductions.b': "Tu as droit au moins au même salaire que les travailleurs de l’entreprise utilisatrice qui font le même travail. L’argent retenu sur ton salaire (inhouding) doit être sur ta fiche de paie. Les impôts et les cotisations sont retenus parce que la loi le dit. À part ça, l’agence peut retenir seulement deux frais sur le salaire minimum : le loyer de ton logement et la prime de l’assurance maladie, et seulement si tu es d’accord par écrit. Les autres frais, comme le transport, les vêtements de travail, les amendes ou des frais pour t’avoir trouvé un emploi, ne peuvent pas être retenus sur le salaire minimum. Tu ne comprends pas une retenue ? Demande à l’agence de te l’expliquer par écrit. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nieuw, nalezen
    'c.deductions.p': "Cette retenue, c’est pour quoi ?", // nieuw, nalezen
    'c.deductions.s': "L’agence retient de l’argent sur ton salaire pour le bus qui t’emmène au travail. Tu gagnes le salaire minimum. Que fais-tu ?", // nieuw, nalezen
    'c.deductions.o1': "Tu poses la question : ce n’est pas permis.", // nieuw, nalezen
    'c.deductions.o2': "Rien : tu prends le bus tous les jours.", // nieuw, nalezen
    'c.deductions.o3': "Tu ne prends plus le bus, et tu marches.", // nieuw, nalezen
    'c.deductions.w': "Sur le salaire minimum, on peut retenir seulement le loyer et l’assurance maladie, et seulement avec ton accord écrit. Le syndicat ou le Juridisch Loket peut t’aider.", // nieuw, nalezen
    'l.agencyhome': "Le logement et l’aide", // nieuw, nalezen
    'w.huisvesting': "le logement (un endroit pour vivre, organisé par l’agence)", // nieuw, nalezen
    'w.huisgenoot': "le colocataire (une personne qui vit dans la même maison)", // nieuw, nalezen
    'w.huisregels': "le règlement de la maison (les règles de la maison où tu vis)", // nieuw, nalezen
    'w.huismeester': "le gestionnaire du logement (la personne qui s’occupe de la maison)", // nieuw, nalezen
    'w.meldpunt': "le point de signalement (un endroit où tu peux signaler un problème)", // nieuw, nalezen
    'w.advies': "le conseil", // nieuw, nalezen
    's.agencyhome.1': "Je veux mon propre contrat de location.", // nieuw, nalezen
    's.agencyhome.2': "Il y a de la moisissure dans la salle de bains.", // nieuw, nalezen
    's.agencyhome.3': "J’appelle le syndicat pour un conseil.", // nieuw, nalezen
    'c.agencyhome.q': "Tu dois quitter le logement vendredi.", // nieuw, nalezen
    'c.agencyhome.a': "C’est très court. Je vais d’abord demander conseil.", // nieuw, nalezen
    'c.agencyhome': "Ton logement, et où trouver de l’aide", // nieuw, nalezen
    'c.agencyhome.b': "L’agence s’occupe de ton logement ? Alors tu reçois ton propre contrat de location, par écrit, séparé de ton contrat de travail. Garde une copie. Il dit ce que tu paies, et comment et quand la location se termine. Ton travail s’arrête ? Ton logement ne s’arrête pas toujours le même jour : demande conseil avant de partir. Un logement dangereux ou trop plein, des menaces, ou un salaire trop bas ? Demande de l’aide : le syndicat, le Juridisch Loket (conseil juridique gratuit), FairWork, ou la Nederlandse Arbeidsinspectie, où tu peux aussi faire un signalement sans donner ton nom. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nieuw, nalezen
    'c.agencyhome.p': "Je peux avoir une copie de mon contrat de location ?", // nieuw, nalezen
    'c.agencyhome.s': "Ton travail s’arrête. Le gestionnaire du logement dit que tu dois quitter la maison aujourd’hui. Que fais-tu ?", // nieuw, nalezen
    'c.agencyhome.o1': "Tu demandes d’abord au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.agencyhome.o2': "Tu pars aujourd’hui, et tu dors chez un ami.", // nieuw, nalezen
    'c.agencyhome.o3': "Tu fais ton sac, et tu dors dehors.", // nieuw, nalezen
    'c.agencyhome.w': "Ton contrat de location a ses propres règles, séparées de ton travail. Un conseil t’aide à savoir quand tu dois vraiment partir.", // nieuw, nalezen
  },
};

export default t;
