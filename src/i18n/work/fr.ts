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
    'c.power.b': { m: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", f: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", x: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmés ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr / Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket." }, // nieuw, nalezen // nagelezen AI 22 nov
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
  },
};

export default t;
