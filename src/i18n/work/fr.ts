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
    'l.agency': 'Travailler via une agence d’intérim', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.uitzendkracht': 'l’intérimaire',
    'w.intercedent': 'la personne de contact à l’agence',
    'w.urenbriefje': 'la feuille d’heures',
    'w.opdracht': 'la mission (le travail dans une entreprise)',
    'w.verlengen': 'prolonger',
    'w.uitbetalen': 'payer, verser',
    's.agency.1': 'Je travaille via une agence d’intérim.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'l.mustmay': 'Tu dois, ou tu peux choisir ?', // nieuw, nalezen
    'w.moeten': 'devoir, être obligé de', // nieuw, nalezen
    'w.niethoeven': 'ne pas avoir à, ne pas avoir besoin de', // nieuw, nalezen
    'w.nodig': 'nécessaire', // nieuw, nalezen
    'w.vrijwillig': 'volontaire, au choix', // nieuw, nalezen
    'w.keuze': 'le choix', // nieuw, nalezen
    'w.regel': 'la règle', // nieuw, nalezen
    's.mustmay.1': 'Est-ce que je dois signer ça ?', // nieuw, nalezen
    's.mustmay.2': 'Non, tu n’as pas besoin de signer.', // nieuw, nalezen
    's.mustmay.3': 'C’est la règle : le casque est obligatoire.', // nieuw, nalezen
    'c.mustmay.q': 'Est-ce que je dois faire des heures sup samedi ?', // nieuw, nalezen
    'c.mustmay.a': 'Non, ce n’est pas nécessaire. C’est volontaire.', // nieuw, nalezen
    'u.leave': "Congés", // nieuw, nalezen
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
    'c.cv': 'Un CV court', // nieuw, nalezen
    'c.cv.b': 'Ici, un CV est court : 1 ou 2 pages. Écris tes coordonnées, ton expérience de travail, ta formation, tes langues et tes compétences. Une photo n’est pas nécessaire. Tu n’as pas besoin d’écrire ta religion, ton âge ou ta situation familiale. Sois honnête sur ce que tu sais faire. Demande à quelqu’un de vérifier ton néerlandais.', // nieuw, nalezen
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
    'c.interview.o1': 'Pose une question sur les horaires ou la formation.', // nagelezen (2e lezing)
    'c.interview.o2': 'Dis non, parce que poser des questions n’est pas poli.',
    'c.interview.o3': 'Parle plus de toi, pour montrer que tu travailles bien.', // nagelezen (2e lezing)
    'c.interview.w': 'Les questions montrent que le travail t’intéresse. Ici, les employeurs en attendent souvent.', // nieuw, nalezen
    'c.findwork': 'Ton contrat par écrit',
    'c.findwork.b': 'Demande toujours un contrat écrit et une copie pour toi. Lis-le avant de signer, ou demande de l’aide à une personne de confiance. Une agence d’intérim (uitzendbureau) n’a pas le droit de te demander de l’argent pour te trouver un emploi. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.findwork.p': 'Je peux d’abord lire le contrat ?',
    'c.findwork.s': 'Un nouvel employeur dit : “Signe ici maintenant. Tu pourras le lire plus tard.” Que fais-tu ?',
    'c.findwork.o1': 'Demande du temps pour le lire, ou une copie.', // nagelezen (2e lezing)
    'c.findwork.o2': 'Signe vite, pour ne pas perdre le travail.',
    'c.findwork.o3': 'Signe, et demande une copie après.', // nagelezen (2e lezing)
    'c.findwork.w': 'Ton contrat dit ce que tu gagnes et quels sont tes droits. Un bon employeur te donne le temps de le lire. Tu peux poser des questions sur tout ce que tu ne comprends pas.',
    'c.contract': 'Période d’essai et travail sur appel',
    'c.contract.b': 'Une période d’essai (proeftijd) doit être écrite. Elle est interdite dans un contrat de 6 mois ou moins. Dans un contrat plus long, de moins de 2 ans, elle dure au maximum 1 mois. Dans un contrat de 2 ans ou plus, ou un contrat à durée indéterminée, elle dure au maximum 2 mois. Tu travailles sur appel (oproepkracht) ? En général, ton employeur doit t’appeler au moins 4 jours avant. S’il appelle plus tard, tu n’as pas besoin de venir. Une cao peut réduire ces 4 jours, mais pas à moins de 1 jour. Si on annule ton travail plus tard que ça, on te paie quand même. Si on t’appelle pour moins de 3 heures de travail, on te paie en général 3 heures. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nalezen: feit gelijk getrokken
    'c.contract.p': 'La période d’essai est dans mon contrat ?',
    'c.contract.s': 'Ton contrat est de 3 mois. Il est écrit : “Proeftijd: 1 maand”. Que fais-tu ?',
    'c.contract.o1': 'Pose la question : cette période d’essai ne compte pas.', // nagelezen (2e lezing)
    'c.contract.o2': 'Rien. Chaque contrat a une période d’essai.',
    'c.contract.o3': 'Signe et ne demande jamais rien, parce que le patron sait mieux que toi.',
    'c.contract.w': 'Une période d’essai dans un contrat de 6 mois ou moins ne compte pas. Poser calmement la question est normal. Si la réponse n’est pas claire, demande conseil au syndicat ou au Juridisch Loket.',
    'c.agency': 'Ton agence est ton employeur',
    'c.agency.b': 'Si tu travailles via une agence d’intérim (uitzendbureau), l’agence est ton employeur, pas l’entreprise où tu travailles. Ton contrat et ton salaire viennent de l’agence, et il y a une cao pour les intérimaires (uitzend-cao). Tu as droit au même salaire que les travailleurs de l’entreprise qui font le même travail. Tu reçois aussi une prime de vacances (vakantiegeld) et tu accumules des jours de congé. Note toi-même tes heures de travail, et vérifie-les sur ta fiche de paie. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.agency.x': 'Ton employeur d’un autre pays te fait travailler ici pour un temps ? Alors tu es en détachement (gedetacheerd). Demande-lui ton formulaire A1 : il montre où tu as ton assurance. Ici, tu reçois quand même au moins le salaire minimum néerlandais.', // nieuw, nalezen (uit een ander land, 10 nov 2026)
    'c.agency.p': 'Sur ma fiche de paie, il y a trop peu d’heures.',
    'c.agency.s': 'Ta fiche de paie indique 32 heures, mais tu as travaillé 38 heures. Que fais-tu ?',
    'c.agency.o1': 'Montre ta propre liste d’heures à l’agence et demande de corriger.', // nagelezen (2e lezing)
    'c.agency.o2': 'Ne dis rien, parce que ce n’est que 6 heures.',
    'c.agency.o3': 'Demande au patron de l’entreprise où tu travailles de payer les 6 heures.',
    'c.agency.w': 'C’est l’agence qui te paie, donc c’est l’agence qui doit corriger l’erreur. Ta propre liste de dates et d’heures aide. Poser la question, c’est ton droit.',
    'c.bsn': 'Ton BSN : protège-le',
    'c.bsn.b': 'Tu reçois un BSN (burgerservicenummer) quand tu t’inscris à la mairie (gemeente). Tu es ici seulement pour peu de temps ? Alors tu t’inscris à un guichet RNI. Tu as besoin de ton BSN pour travailler, pour les impôts, pour l’assurance maladie et pour un compte bancaire. Ton employeur a besoin de ta pièce d’identité et de ton BSN. Ne donne pas ton BSN ni une copie de ta pièce d’identité à n’importe qui. Demande d’abord pourquoi ils en ont besoin. Tu déménages ? Déclare ta nouvelle adresse à la gemeente dans les 5 jours. DigiD est ton identifiant pour les sites de l’État : ne le donne jamais à quelqu’un d’autre. Tu habites ou tu travailles ici ? Alors tu dois en général avoir une assurance maladie néerlandaise (zorgverzekering). Fais-le vite. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.bsn.p': 'Pourquoi avez-vous besoin de mon BSN ?',
    'c.bsn.s': 'Un inconnu te propose un travail sur WhatsApp. Il demande une photo de ton passeport et ton identifiant DigiD. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.bsn.o1': 'Ne donne jamais ton identifiant DigiD. Vérifie qui il est.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.bsn.o2': 'Envoie tout vite pour avoir le travail.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.bsn.o3': 'Envoie seulement la photo du passeport.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.bsn.w': 'Avec ton DigiD ou une copie de ta pièce d’identité, d’autres personnes peuvent utiliser ton nom, par exemple pour des prêts ou des allocations. Un vrai employeur a besoin de ta pièce d’identité et de ton BSN, mais jamais de ton identifiant DigiD.',
    'c.housing': 'Le logement par ton employeur',
    'c.housing.b': 'Ton employeur ou ton agence s’occupe de ton logement ? Alors le contrat de location doit être séparé de ton contrat de travail. Demande un contrat de location écrit et une preuve de ce que tu paies. Le loyer peut être retenu sur ton salaire seulement si tu es d’accord par écrit, et dans les limites de la loi : vérifie-le sur ta fiche de paie. Une caution (borg) est au maximum de 2 mois de loyer de base. Tu la récupères quand tu pars, moins les vrais dégâts. Inscris-toi à ton adresse auprès de la gemeente. Logement dangereux, menaces ou frais injustes ? Signale-le à la gemeente (meldpunt), et demande un conseil gratuit au Juridisch Loket ou à un service de conseil logement. Pour un problème de loyer ou de charges, il y a la Huurcommissie. Ton travail se termine ? Demande conseil avant de quitter ton logement. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.housing.p': 'Je peux avoir une preuve que j’ai payé ?',
    'c.housing.s': 'Ton travail se termine. L’agence dit : “Tu dois quitter la maison demain.” Que fais-tu ?',
    'c.housing.o1': 'Demande d’abord conseil au Juridisch Loket.', // nagelezen (2e lezing)
    'c.housing.o2': 'Pars tout de suite et oublie ta caution.',
    'c.housing.o3': 'Reste, et ne réponds plus à l’agence.',
    'c.housing.w': 'Ton contrat de location a ses propres règles, séparées de ton travail. Un conseil gratuit t’aide à connaître tes droits, par exemple sur le moment où tu dois partir et sur ta caution.',
    'c.payslip': 'Vérifie ta fiche de paie',
    'c.payslip.b': 'Le brut (bruto), c’est ton salaire avant les impôts. Le net (netto), c’est ce que tu reçois sur ton compte : le brut moins les impôts et les cotisations (loonheffing). Ton employeur doit te donner une fiche de paie (loonstrook). Vérifie les heures et le salaire sur chaque fiche de paie, et note les heures que tu travailles. Tu as deux emplois ? Utilise la réduction d’impôt (loonheffingskorting) chez un seul employeur. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.payslip.p': 'J’ai travaillé plus d’heures. Tu peux vérifier ?',
    'c.payslip.s': 'Ta fiche de paie indique moins d’heures que tu en as travaillé. Que fais-tu ?',
    'c.payslip.o1': 'Montre tes notes et demande à ton responsable de vérifier.', // nagelezen (2e lezing)
    'c.payslip.o2': 'Ne dis rien, parce que tu ne veux pas de problèmes.',
    'c.payslip.o3': 'Attends un mois : ce sera juste sur la prochaine fiche de paie.', // nagelezen (2e lezing)
    'c.payslip.w': 'Les erreurs sur une fiche de paie arrivent. Poser la question est normal, et c’est ton droit. Tes propres notes de dates et d’heures aident beaucoup.',
    'c.extra': 'La prime de vacances et le salaire minimum',
    'c.extra.b': 'Tu reçois une prime de vacances (vakantiegeld) : au moins 8 % de ton salaire brut. La plupart des employeurs la paient une fois par an, en mai ou en juin. Ton salaire ne peut jamais être plus bas que le salaire minimum légal (minimumloon) ; pour les travailleurs de moins de 21 ans, il est plus bas. Le montant change chaque année : vérifie-le sur rijksoverheid.nl. Une cao donne souvent un supplément pour les heures sup ou le travail de nuit. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.extra.p': 'Quand est-ce que je reçois ma prime de vacances ?',
    'c.extra.s': 'Un collègue dit : “En mai, le patron te donne de l’argent en plus.” Qu’est-ce que c’est ?',
    'c.extra.o1': 'La prime de vacances : au moins 8 % de ton salaire brut.',
    'c.extra.o2': 'Un cadeau, seulement pour les meilleurs travailleurs.',
    'c.extra.o3': 'Un 13e mois : un mois de salaire en plus, pour tout le monde.', // nagelezen (2e lezing)
    'c.extra.w': 'La prime de vacances est ton droit, pas un cadeau. Tu la gagnes avec chaque heure de travail. Si tu quittes ton emploi plus tôt, tu la reçois avec ton dernier salaire.', // nieuw, nalezen (AI-correctie 2 nov 2026)
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
    'c.smoking.o1': 'Dis non, et fume dehors pendant ta pause.', // nieuw, nalezen
    'c.smoking.o2': 'Fume vite dans la réserve, juste cette fois.',
    'c.smoking.o3': 'Utilise plutôt ta vape à l’intérieur, parce que c’est permis.',
    'c.smoking.w': 'Fumer à l’intérieur est contre la loi et peut provoquer un incendie. Une vape à l’intérieur est interdite aussi. Respecter la règle protège tout le monde.',
    'c.clock': 'Pointe toi-même',
    'c.clock.b': 'Pointe toi-même à l’arrivée et au départ, au moment où tu commences et finis vraiment de travailler. Ne pointe jamais pour un collègue, et ne laisse jamais quelqu’un d’autre utiliser ton badge. C’est considéré comme une fraude et ça peut mener au licenciement. Tu vas être en retard ? Appelle avant le début de ton service. Vérifie que tes heures pointées correspondent à ta fiche de paie. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.clock.p': 'J’ai oublié de pointer en partant. Tu peux corriger ?',
    'c.clock.s': 'Un collègue te donne son badge : “Pointe pour moi, j’aurai 20 minutes de retard.” Que fais-tu ?',
    'c.clock.o1': 'Dis non, et dis-lui d’appeler le responsable.', // nagelezen (2e lezing)
    'c.clock.o2': 'Fais-le juste une fois, parce que c’est ton ami.',
    'c.clock.o3': 'Pointe pour lui et préviens le responsable plus tard.',
    'c.clock.w': 'Pointer pour quelqu’un d’autre est considéré comme une fraude, pour vous deux. Dire non protège ton collègue et ton propre emploi.',
    'c.hygiene': 'La tête claire, les mains propres',
    'c.hygiene.b': 'L’alcool et la drogue au travail, ou venir travailler après en avoir pris, sont interdits dans presque toutes les entreprises. C’est très dangereux près des machines et des chariots élévateurs, et ça peut mener au licenciement. Un médicament te donne sommeil ou des vertiges ? Dis-le à ton responsable, pour pouvoir faire un travail sans danger. Tu n’as pas besoin de dire quel médicament. Dans la production alimentaire, les règles d’hygiène sont strictes : lave-toi les mains, porte des vêtements de travail propres, une charlotte si nécessaire, et pas de bijoux. Vomissements ou diarrhée ? Signale-le avant de commencer. Garde ton poste de travail en ordre. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.hygiene.p': 'Je prends un médicament. Il me donne sommeil.',
    'c.hygiene.s': 'Ton médecin te donne un médicament qui donne sommeil. Demain, tu dois conduire un chariot élévateur. Que fais-tu ?',
    'c.hygiene.o1': 'Préviens ton responsable avant de commencer.', // nieuw, nalezen
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
    'c.mistakes.o1': 'Dis-le à ton responsable et aide à corriger.', // nagelezen (2e lezing)
    'c.mistakes.o2': 'Ne dis rien et espère que personne ne le remarque.',
    'c.mistakes.o3': 'Dis que c’est un collègue qui l’a fait.',
    'c.mistakes.w': 'Une erreur dite tôt est facile à corriger. L’honnêteté crée la confiance, et ça compte plus que ne jamais faire d’erreur.',
    'c.respect': 'Le respect pour tout le monde',
    'c.respect.b': 'Au travail, tout le monde est égal et tout le monde est traité avec respect, quels que soient son genre, son origine, sa religion ou son orientation sexuelle. C’est toi qui décides du contact physique. On se serre souvent la main. Mais tu peux aussi saluer d’une autre façon polie, par exemple d’un signe de tête et d’un sourire. Ensuite, explique-le en quelques mots. Les blagues sur l’origine ou la religion de quelqu’un, les menaces, le harcèlement (pesten) et les comportements sexuels non voulus ne sont pas acceptés. Tu peux le signaler à ton responsable, ou à une personne de confiance (vertrouwenspersoon) si ton entreprise en a une.',
    'c.respect.p': 'Je préfère ne pas serrer la main, mais je te salue avec plaisir.',
    'c.respect.s': 'Un collègue fait souvent des blagues sur ta religion. Tu lui as demandé d’arrêter, mais il continue. Que fais-tu ?',
    'c.respect.o1': 'Dis-le à ton responsable ou au vertrouwenspersoon.',
    'c.respect.o2': 'Ris avec lui, pour éviter les problèmes.', // nieuw, nalezen
    'c.respect.o3': 'Fais toi aussi des blagues sur ses origines.',
    'c.respect.w': 'Ce genre de blagues n’est pas accepté au travail. Le signaler est normal : l’entreprise doit garder le lieu de travail sûr pour tout le monde.',
    'c.health': 'Les pauses et les horaires de travail',
    'c.health.b': 'La loi protège ta santé. Tu travailles plus de 5 h 30 ? Alors tu as au moins 30 minutes de pause (ça peut être 2 fois 15 minutes). Plus de 10 heures ? Alors au moins 45 minutes. Une cao peut avoir des règles de pause un peu différentes. Tu peux travailler au maximum 12 heures par service et 60 heures par semaine. Tu as moins de 18 ans ? Alors tu peux travailler moins d’heures au maximum. Ton employeur doit te donner gratuitement des équipements de protection, comme des chaussures de sécurité ou des gants. Travail dangereux ou salaire trop bas ? Tu peux le signaler à la Nederlandse Arbeidsinspectie, même sans donner ton nom. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.health.p': 'Je n’ai pas encore eu de pause.',
    'c.health.s': 'Tu as travaillé 6 heures sans pause. Ton responsable te demande de continuer. Que fais-tu ?',
    'c.health.o1': 'Dis que tu as besoin de ta pause maintenant.', // nagelezen (2e lezing)
    'c.health.o2': 'Continue, et prends une pause plus longue plus tard.', // nagelezen (2e lezing)
    'c.health.o3': 'Quitte le travail et rentre chez toi sans rien dire.',
    'c.health.w': 'Quand tu travailles plus de 5 h 30, la pause, c’est la loi, pas une faveur. Le repos t’aide aussi à travailler en sécurité.',
    'c.rights': 'Discrimination et licenciement',
    'c.rights.b': 'La discrimination au travail est interdite, par exemple à cause de ton origine, de ta religion ou de ton genre. Ton employeur ne peut pas simplement te licencier : normalement, il a besoin de l’autorisation de l’UWV ou d’un juge, ou de ton accord. (Pendant une période d’essai ou à la fin d’un contrat temporaire, d’autres règles s’appliquent.) Ne signe pas un papier sur ton licenciement que tu ne comprends pas. Tu as signé un accord pour mettre fin à ton emploi (vaststellingsovereenkomst) ? Alors en général, tu peux encore l’annuler par écrit dans les 14 jours. Demande d’abord de l’aide. Va au syndicat (par exemple la FNV), à un service contre la discrimination ou au Juridisch Loket. Le Juridisch Loket donne des conseils juridiques gratuits. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.rights.p': 'Je veux d’abord demander conseil.',
    'c.rights.s': 'Ton patron te donne un papier : “Signe aujourd’hui, et tu pars d’un commun accord.” Tu ne le comprends pas bien. Que fais-tu ?',
    'c.rights.o1': 'Ne signe pas encore. Demande d’abord conseil.', // nieuw, nalezen
    'c.rights.o2': 'Signe, parce que le patron dit que c’est bon.',
    'c.rights.o3': 'Range le papier et n’en parle jamais.',
    'c.rights.w': 'Il y a une erreur dedans ? Alors tu peux perdre des droits, par exemple à l’allocation chômage (WW). Demander du temps pour avoir un conseil est normal et permis.', // nieuw, nalezen
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen
    'c.mustmay.b': 'En néerlandais, le contraire de “moeten” est “niet hoeven”. “Je moet tekenen” veut dire : tu n’as pas le choix. “Je hoeft niet te tekenen” veut dire : tu peux choisir. “Je mag niet tekenen” veut dire : c’est interdit. Attention : en anglais, “must not” veut dire “mag niet”. En français aussi, “tu ne dois pas” veut dire “mag niet”, et “hoeft niet” veut dire “tu n’as pas besoin”. Tu as un doute ? Demande.', // nieuw, nalezen
    'c.mustmay.p': 'Je dois le faire, ou j’ai le choix ?', // nieuw, nalezen
    'c.mustmay.s': 'Ton chef d’équipe dit : “Je hoeft zaterdag niet te komen.” Qu’est-ce qu’il veut dire ?', // nieuw, nalezen
    'c.mustmay.o1': 'Tu n’as pas besoin de venir samedi. Tu peux choisir.', // nieuw, nalezen
    'c.mustmay.o2': 'Tu n’as pas le droit de venir samedi.', // nieuw, nalezen
    'c.mustmay.o3': 'Tu dois venir samedi.', // nieuw, nalezen
    'c.mustmay.w': '“Niet hoeven” veut dire que ce n’est pas obligatoire : tu peux choisir. “Niet mogen” voudrait dire que c’est interdit.', // nieuw, nalezen
    'c.leave': 'Les vacances et le congé d’urgence',
    'c.leave.b': 'La loi te donne des jours de congé payés : au moins 4 fois le nombre de jours que tu travailles par semaine. À temps plein, 5 jours par semaine ? Alors au moins 20 jours par an. Une cao peut donner plus. Demande ton congé à temps, et par écrit. Une urgence soudaine, comme un accident ou une maladie dans ta famille ? Alors tu peux avoir un court congé payé (calamiteitenverlof). Préviens tout de suite ton employeur. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.leave.p': 'Je voudrais demander un congé pour juillet.',
    'c.leave.s': 'Tu veux rendre visite à ta famille à l’étranger pendant trois semaines cet été. Que fais-tu ?',
    'c.leave.o1': 'Demande ton congé tôt à ton employeur, par écrit.',
    'c.leave.o2': 'Pars, et préviens ton patron à ton retour.',
    'c.leave.o3': 'Demande à un collègue de prévenir le patron la veille.',
    'c.leave.w': 'Ton employeur doit en général dire oui. Il ne peut refuser que pour une raison très importante, et il doit alors le faire par écrit dans les 2 semaines. Demander tôt donne le plus de chances d’avoir un oui.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.illness': 'Tes droits quand tu es malade',
    'c.illness.b': 'Quand tu es malade, ton employeur doit payer au moins 70 % de ton salaire, pendant 2 ans au maximum. Une cao donne souvent plus. Il peut y avoir jusqu’à 2 jours de carence (wachtdagen) sans salaire, mais seulement si ton contrat ou ta cao le dit. Ton patron n’a pas le droit de demander quelle maladie tu as. Tu parles de ta santé et de ton travail avec le médecin du travail (bedrijfsarts). Appelle ton employeur quand tu vas mieux (betermelden). La première année, tu reçois au moins le salaire minimum. Un contrat temporaire s’arrête à sa date de fin, même pendant une maladie. Tu travailles via une agence ? Si ton contrat a une clause d’intérim (uitzendbeding), il peut s’arrêter quand tu tombes malade. Alors pose tes questions sur la Ziektewet à l’UWV, ou demande à un syndicat. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.illness.x': 'Tu es en arrêt maladie et tu veux aller dans ton pays ? Demande d’abord à ton employeur ou à l’agence. Sans accord, ton salaire peut s’arrêter. Donne ton adresse là-bas et réponds au téléphone.', // nieuw, nalezen (uit een ander land, 10 nov 2026)
    'c.illness.p': 'Je vais mieux. Je viens travailler demain.',
    'c.illness.s': 'Tu es malade depuis une semaine. Ton employeur t’envoie chez le médecin du travail. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.illness.o1': 'Vas-y, et parle de ta santé et de ton travail.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.illness.o2': 'N’y va pas : tu as ton propre médecin.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.illness.o3': 'Retourne au travail alors que tu es encore malade.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.illness.w': 'Le médecin du travail t’aide à reprendre le travail en bonne santé. Il ne donne pas tes détails médicaux à ton patron, seulement le travail que tu peux faire.',
    'c.warning': 'Les signes d’exploitation',
    'c.warning.b': 'Fais attention à ces signes. Ton employeur garde ton passeport ou ta pièce d’identité. C’est interdit : tu gardes toi-même tes papiers. Un employeur peut seulement faire une copie. Tu reçois beaucoup moins que le salaire convenu, ou pas de fiche de paie. Tu dois rembourser une grosse dette à l’employeur ou à l’agence. Tu dois faire des journées extrêmement longues, sans avoir le choix. Quelqu’un te menace, ou utilise ton logement pour faire pression sur toi. Ce n’est pas normal et c’est interdit. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.warning.p': 'Je veux récupérer mon passeport.',
    'c.warning.s': 'Le premier jour, l’agence dit : “On garde ton passeport, pour la sécurité.” Que fais-tu ?',
    'c.warning.o1': 'Garde-le toi-même. Ils peuvent faire une copie.', // nagelezen (2e lezing)
    'c.warning.o2': 'Donne-le, parce que l’agence connaît les règles.',
    'c.warning.o3': 'Donne-le, mais prends-le d’abord en photo.',
    'c.warning.w': 'Ton passeport est à toi. Le garder est une façon de contrôler les travailleurs. Un employeur a seulement besoin d’une copie pour ses dossiers.',
    'c.gethelp': 'Où trouver de l’aide',
    'c.gethelp.b': 'Tu vois des signes d’exploitation, pour toi ou pour quelqu’un d’autre ? Demande de l’aide. Tu peux le signaler à la Nederlandse Arbeidsinspectie, même de façon anonyme, ou à la police. Meld Misdaad Anoniem : 0800-7000. Conseil juridique gratuit : le Juridisch Loket. En danger ? Appelle le 112. Toute personne qui travaille aux Pays-Bas peut avoir de l’aide, y compris les migrants. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.gethelp.p': 'J’ai besoin d’aide. On m’exploite.',
    'c.gethelp.s': 'Un ami travaille 14 heures par jour, presque sans salaire. Il a peur de son patron. Que peux-tu faire ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.gethelp.o1': 'Aide-le à contacter l’Arbeidsinspectie ou le Juridisch Loket.', // nieuw, nalezen
    'c.gethelp.o2': 'Dis-lui que c’est normal pour les nouveaux travailleurs.',
    'c.gethelp.o3': 'Dis-lui d’attendre la fin de son contrat, puis de partir.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.gethelp.w': 'L’aide existe pour toute personne qui travaille aux Pays-Bas. On peut aussi faire un signalement sans donner de noms.',
    'c.callin': 'Appeler ton responsable',
    'c.callin.b': 'Quand tu appelles ton responsable, dis ton nom, la raison, et quand tu penses revenir. Malade ? Tu dois seulement dire que tu es malade, pas quelle maladie tu as. Appelle : n’envoie pas seulement un message, sauf si ton entreprise dit qu’un message suffit. Pas de réponse ? Laisse un message vocal et réessaie. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.callin.p': 'Bonjour, c’est Ali. Je ne peux pas venir aujourd’hui.',
    'c.callin.s': 'Ton enfant est malade et tu ne peux pas venir travailler. Ton entreprise veut que tu appelles. Que fais-tu ?',
    'c.callin.o1': 'Appelle ton responsable avant ton service.', // nagelezen (2e lezing)
    'c.callin.o2': 'Envoie un petit message au début de ton service.',
    'c.callin.o3': 'Demande à ton voisin d’appeler pour toi.',
    'c.callin.w': 'Un appel est clair et rapide, et ton responsable peut poser des questions. Dire quand tu penses revenir l’aide à s’organiser. Dis aussi ton nom et la raison.', // nagelezen (2e lezing)
    'c.texting': 'Les messages au travail : courts et polis',
    'c.texting.b': 'Écris des messages courts et polis au travail. Dis qui tu es et ce qui se passe, et termine par une salutation. Par exemple : “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Regarde souvent ton planning (rooster) dans l’appli. Réponds à temps aux demandes de service. Pour échanger un service, ton responsable ou le planificateur doit d’abord être d’accord, alors demande : “Mag ik mijn dienst ruilen?” Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.texting.p': { m: 'Salut Mark, j’ai 10 minutes de retard. Désolé ! À plus, Ali', f: 'Salut Mark, j’ai 10 minutes de retard. Désolée ! À plus, Ali', x: 'Salut Mark, j’ai 10 minutes de retard. Désolé / désolée ! À plus, Ali' },
    'c.texting.s': 'Tu vas avoir 10 minutes de retard. Quel message à ton responsable est le meilleur ?',
    'c.texting.o1': '“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '“Sorry, ik ben er zo!” (sans ton nom, sans l’heure).', // nagelezen (2e lezing)
    'c.texting.o3': 'Un message vocal de trois minutes sur la circulation.',
    'c.texting.w': 'Un bon message dit qui tu es et ce qui se passe, en quelques mots. Comme ça, ton responsable le sait tout de suite.',
    'c.certs': 'Les certificats t’aident',
    'c.certs.b': 'Dans la construction, l’industrie et l’intérim, tu as souvent besoin d’un certificat VCA (sécurité). Pour conduire un chariot élévateur, tu as en général besoin d’un certificat de cariste (heftruckcertificaat). Demande à ton employeur s’il paie le cours et l’examen.',
    'c.certs.p': 'Je peux faire un cours VCA ici ?',
    'c.certs.s': 'Une offre d’emploi demande un certificat VCA. Tu ne l’as pas encore. Que fais-tu ?',
    'c.certs.o1': 'Demande à l’employeur ou à l’agence de t’aider à l’obtenir.', // nagelezen (2e lezing)
    'c.certs.o2': 'Ne postule pas, parce que tu n’auras jamais le travail.',
    'c.certs.o3': 'Dis que tu l’as, et espère que personne ne vérifie.',
    'c.certs.w': 'Beaucoup d’employeurs et d’agences aident pour le VCA. Demander montre que tu veux apprendre.',
    'c.diploma': 'Ton diplôme compte',
    'c.diploma.b': 'Tu as un diplôme d’un autre pays ? Tu peux le faire évaluer par l’IDW (Internationale Diplomawaardering). Alors les employeurs peuvent voir ce qu’il vaut ici. Une formation est obligatoire pour ton travail ? Alors ton employeur doit la payer, et elle compte comme temps de travail. Demande à ton responsable s’il y a des cours. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.diploma.p': 'Il y a des cours pour moi ?',
    'c.diploma.s': 'Ton employeur dit que tu dois faire une formation de sécurité obligatoire samedi, sans salaire. Qu’est-ce qui est vrai ?',
    'c.diploma.o1': 'L’employeur la paie, et c’est du temps de travail.', // nagelezen (2e lezing)
    'c.diploma.o2': 'Une formation est toujours pendant ton temps libre.',
    'c.diploma.o3': 'Tu dois payer la formation toi-même.',
    'c.diploma.w': 'Si une formation est obligatoire pour ton travail, l’employeur paie et elle compte comme temps de travail. Si ce n’est pas clair, demande conseil.',
    'c.doctor': 'Médecin ou 112 ?',
    'c.doctor.b': 'Inscris-toi chez un médecin généraliste (huisarts) près de chez toi. Tu as besoin de soins urgents le soir, la nuit ou le week-end ? Appelle la huisartsenpost. Appelle le 112 seulement en cas d’urgence : danger de mort, incendie ou crime en train de se passer. Tu reçois les médicaments à la pharmacie (apotheek).', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.doctor.p': 'Je veux m’inscrire chez le médecin généraliste.',
    'c.doctor.s': 'C’est samedi soir. Ton enfant a beaucoup de fièvre, mais il est réveillé et respire normalement. Que fais-tu ?',
    'c.doctor.o1': 'Appelle la huisartsenpost.',
    'c.doctor.o2': 'Appelle le 112.',
    'c.doctor.o3': 'Attends lundi et ne fais rien.',
    'c.doctor.w': 'La huisartsenpost aide pour les soins urgents en dehors des heures de bureau. Le 112, c’est pour les urgences : danger de mort, incendie ou crime en train de se passer.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.insurance': 'L’assurance maladie',
    'c.insurance.b': 'Quand tu habites ou travailles aux Pays-Bas, une assurance maladie de base est en général obligatoire. Tu paies une prime chaque mois. Chaque année, il y a une franchise (eigen risico) : les premiers frais, tu les paies toi-même. Le montant change : vérifie-le chez ton assureur. Les visites chez le médecin généraliste (huisarts) ne comptent pas pour la franchise. Avec un petit revenu, tu peux peut-être recevoir une allocation (zorgtoeslag). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.insurance.p': 'J’ai besoin d’une assurance maladie. Vous pouvez m’aider ?',
    'c.insurance.s': 'Tu as commencé à travailler ici il y a deux semaines et tu n’as pas encore d’assurance maladie. Que fais-tu ?',
    'c.insurance.o1': 'Prends vite une assurance maladie.', // nagelezen (2e lezing)
    'c.insurance.o2': 'Attends : l’assurance de ton pays suffit.', // nagelezen (2e lezing)
    'c.insurance.o3': 'Utilise la carte d’assurance d’un ami.',
    'c.insurance.w': 'Sans assurance, un médecin ou un hôpital peut coûter très cher, et tu peux avoir une amende. Le faire vite te protège. Ton employeur ou ton agence peut t’aider.', // nagelezen (2e lezing)
    'c.letters': 'N’ignore pas les lettres',
    'c.letters.b': 'N’ignore pas les lettres de la Belastingdienst, de la gemeente ou de l’UWV. Demande à une personne de confiance de t’aider à les lire. La déclaration d’impôts (aangifte) pour l’année passée doit en général être faite avant le 1er mai. Tu peux demander plus de temps. Les allocations (toeslagen) comme la zorgtoeslag et la huurtoeslag dépendent de ton revenu. Si tu reçois trop, tu dois rembourser, alors garde tes informations de revenu à jour. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.letters.p': 'J’ai reçu une lettre. Tu peux m’aider ?',
    'c.letters.s': 'Tu reçois une lettre de la Belastingdienst. Tu ne la comprends pas. Que fais-tu ?',
    'c.letters.o1': 'Demande de l’aide à une personne de confiance.', // nagelezen (2e lezing)
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
    'c.transit.o3': 'Dis à ton responsable : la loi dit que tu dois l’avoir aussi.', // nagelezen (2e lezing)
    'c.transit.w': 'Le remboursement des frais de trajet dépend de l’employeur ou de la cao. Poser la question est normal et t’aide à connaître tes droits.',
    'c.ww': 'L’allocation chômage (WW)',
    'c.ww.b': 'Tu as perdu ton emploi ? Demande la WW à l’UWV le plus vite possible, dans la semaine après ton premier jour sans travail. En général, tu dois avoir travaillé au moins 26 des 36 dernières semaines. Si tu démissionnes toi-même, en général tu n’as pas la WW. Inscris-toi comme demandeur d’emploi sur werk.nl. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.ww.x': 'Tu cherches du travail dans un autre pays de l’UE ? Parfois, tu peux emporter ton WW. Avant de partir, demande le formulaire U2 à l’UWV. Sans U2, ton WW s’arrête.', // nieuw, nalezen (uit een ander land, 10 nov 2026)
    'c.ww.p': 'Je veux demander l’allocation chômage. Qu’est-ce que je dois faire ?',
    'c.ww.s': 'Ton travail t’énerve et tu veux démissionner aujourd’hui. Que vaut-il mieux faire ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.ww.o1': 'Demande d’abord conseil, avant de démissionner.', // nagelezen (2e lezing)
    'c.ww.o2': 'Démissionne aujourd’hui : tu auras quand même la WW.',
    'c.ww.o3': 'Ne viens plus au travail sans rien dire.',
    'c.ww.w': 'Démissionner peut te faire perdre ton allocation. Parler d’abord avec ton responsable, le syndicat ou le Juridisch Loket peut t’aider à trouver une meilleure solution.',
    'c.newjob': 'Chercher un nouveau travail',
    'c.newjob.b': 'Avant de partir, demande une référence (referentie). Garde tes fiches de paie et ton contrat. Mets ton CV à jour. Cherche du travail dans les agences d’intérim (uitzendbureaus) et sur werk.nl. Ne paie jamais pour avoir un emploi. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
    'c.newjob.p': 'Je peux donner votre nom comme référence ?',
    'c.newjob.s': 'Quelqu’un te propose un travail, mais d’abord tu dois payer 300 euros “pour le travail”. Que fais-tu ?',
    'c.newjob.o1': 'Ne paie pas. Cherche une vraie agence.', // nagelezen (2e lezing)
    'c.newjob.o2': 'Paie, parce qu’un bon travail le vaut bien.',
    'c.newjob.o3': 'Paie la moitié maintenant et le reste plus tard.',
    'c.newjob.w': 'Demander de l’argent pour un emploi est un signal d’alerte. Une agence d’intérim n’a pas le droit de te faire payer pour te trouver du travail. Tu peux aussi chercher du travail sur werk.nl.', // nagelezen (2e lezing)
    'c.tools': 'La réunion toolbox',
    'c.tools.b': 'Sur beaucoup de chantiers, il y a régulièrement une courte réunion de sécurité : la réunion toolbox. On y parle des risques et des nouvelles règles. Vas-y, écoute, et pose des questions si tu ne comprends pas. Vérifie tes outils avant de les utiliser. Un outil est cassé ? Dis-le à ton responsable.',
    'c.tools.p': 'Cette perceuse est cassée. Il y en a une autre ?',
    'c.tools.s': 'Il y a une réunion toolbox, mais ton néerlandais n’est pas encore bon. Que fais-tu ?',
    'c.tools.o1': 'Vas-y, et demande ensuite à un collègue ce que tu as manqué.', // nagelezen (2e lezing)
    'c.tools.o2': 'N’y va pas, parce que de toute façon tu ne vas pas comprendre.',
    'c.tools.o3': 'Signe la liste de présence sans y aller.',
    'c.tools.w': 'Les informations de sécurité sont pour tout le monde. Une appli de traduction peut t’aider à suivre la réunion, si les téléphones y sont permis. Demander ensuite à un collègue est normal et permet de vérifier que tu as bien compris.',
    'c.site': 'Arrête-toi et vérifie : la LMRA',
    'c.site.b': 'Avant de commencer un travail, arrête-toi un moment et vérifie : qu’est-ce qui peut mal tourner ici ? C’est la LMRA (analyse des risques de dernière minute). Porte toujours ton casque, et une protection antichute quand tu travailles en hauteur. Ne te mets jamais sous une charge suspendue. Le travail est vraiment dangereux ? Alors tu peux arrêter, et tu dois le dire tout de suite à ton responsable. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.site.p': 'Je ne commence pas encore. Ce n’est pas sûr.',
    'c.site.s': 'Tu dois travailler sur un échafaudage, mais il manque un garde-corps. Un collègue dit : “Fais juste attention.” Que fais-tu ?',
    'c.site.o1': 'Ne commence pas, et dis-le à ton responsable.', // nieuw, nalezen
    'c.site.o2': 'Commence, mais fais très attention.',
    'c.site.o3': 'Répare toi-même le garde-corps avec une corde.',
    'c.site.w': 'Une chute de hauteur peut causer des blessures très graves. Tu as le droit d’arrêter un travail dangereux, et le signaler protège toute l’équipe.',
    'c.line': 'Les mains loin des machines en marche',
    'c.line.b': 'Ne mets jamais la main dans une machine en marche, même pas une seconde. En cas de panne (storing) : appuie sur l’arrêt d’urgence (noodstop) et appelle ton responsable. L’entretien et les réparations se font seulement quand la machine est consignée (lock-out), et seulement par des personnes formées. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.line.p': 'Il y a une panne. J’ai appuyé sur l’arrêt d’urgence.',
    'c.line.s': 'Un produit est coincé dans la machine. La machine tourne encore. Que fais-tu ?',
    'c.line.o1': 'Appuie sur l’arrêt d’urgence et appelle ton responsable.',
    'c.line.o2': 'Retire-le vite avec la main, avant qu’il se casse.', // nieuw, nalezen
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
    'c.client.o1': 'Frappe, attends, et dis qui tu es et pourquoi.', // nagelezen (2e lezing)
    'c.client.o2': 'Entre vite, parce que tu as beaucoup de travail.',
    'c.client.o3': 'Saute la toilette, pour ne pas la déranger.',
    'c.client.w': 'La chambre, c’est la maison du résident. Frapper et expliquer montre du respect et rend les soins plus calmes.',
    'c.privacy': 'La vie privée, l’hygiène et les médicaments',
    'c.privacy.b': 'Ce que tu vois et entends sur les résidents reste au travail. Ne parle pas des résidents en dehors du travail, et ne publie jamais de photos d’eux. Lave-toi les mains avant et après les soins. Tu remarques un changement chez un résident, comme de la douleur ou une chute ? Dis-le tout de suite à l’infirmière. Ne donne jamais de médicaments, sauf si tu as la formation et l’autorisation. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.privacy.p': 'Le monsieur a plus mal qu’hier.',
    'c.privacy.s': 'Une résidente te demande ses médicaments. Tu n’as pas la formation pour donner des médicaments. Que fais-tu ?',
    'c.privacy.o1': 'Dis gentiment que tu vas chercher l’infirmière.', // nieuw, nalezen
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
    'c.cleaning.o1': 'Demande comment l’utiliser sans danger.', // nagelezen (2e lezing)
    'c.cleaning.o2': 'Mets-en beaucoup, ça marche mieux.',
    'c.cleaning.o3': 'Essaie-le sans gants.',
    'c.cleaning.w': 'Le mauvais produit, ou trop de produit, peut abîmer ta peau, tes yeux ou tes poumons. Demander prend une minute.',
    'c.cleansafe': 'Ne mélange jamais les produits',
    'c.cleansafe.b': 'Ne mélange jamais les produits de nettoyage, par exemple de l’eau de Javel et un nettoyant pour toilettes. Ça peut faire des gaz dangereux. Aère. Tu laves un sol ? Pose le panneau “sol mouillé” (Pas op, glad!), pour que personne ne glisse. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.cleansafe.p': 'Je pose le panneau. Le sol est mouillé.',
    'c.cleansafe.s': 'Les toilettes sont très sales. Un collègue dit : “Mélange deux produits, ça marche mieux.” Que fais-tu ?',
    'c.cleansafe.o1': 'Ne les mélange pas. Utilise un seul produit.', // nagelezen (2e lezing)
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
    'c.translate.s': 'Ton responsable te donne des consignes de sécurité en néerlandais. Tu comprends seulement quelques mots. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.translate.o1': 'Demande une explication, et si tu peux utiliser une appli.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.translate.o2': 'Dis “ja, ja” et commence à travailler.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.translate.o3': 'Prends une photo et envoie-la à tes amis, pour qu’ils la traduisent.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.translate.w': 'Une appli de traduction t’aide à comprendre vite, mais elle peut faire des erreurs. Pour la sécurité, l’explication d’une personne est la meilleure vérification. Les papiers de travail peuvent être confidentiels, alors ne les partage pas sans autorisation.',
    'c.understood': 'Vérifie que tu as compris',
    'c.understood.b': 'Ton téléphone peut transformer la parole en texte (sous-titres en direct) : Transcription instantanée sur Android, Sous-titres en direct sur iPhone. Vérifie quelles langues ton téléphone connaît. Tu peux aussi demander à quelqu’un de l’écrire, de le montrer ou de parler lentement. Demande s’il y a une consigne avec des images, ou dans ta langue. Puis redis ce que tu as compris : “Dus ik moet eerst …?” C’est normal ici, et ça évite les erreurs.',
    'c.understood.p': 'Donc je dois d’abord compter les cartons ?',
    'c.understood.s': 'Une collègue explique comment marche une nouvelle machine. Elle parle vite et tu rates des mots. Que fais-tu ?',
    'c.understood.o1': 'Demande-lui de te montrer ou de l’écrire, puis répète.', // nagelezen (2e lezing)
    'c.understood.o2': 'Fais oui de la tête et dis “ja, ja”, pour qu’elle ne perde pas de temps.',
    'c.understood.o3': 'Essaie la machine plus tard sans aide et vois ce qui se passe.',
    'c.understood.w': 'Montrer, écrire et redire, ce sont des vérifications rapides. Ta collègue peut te corriger avant qu’il y ait un problème. Ici, on voit ça comme du sérieux, pas comme de la lenteur.',
    'c.keeplearning': 'Continue à apprendre, un peu chaque jour',
    'c.keeplearning.b': 'Quelques minutes chaque jour aident plus qu’une longue heure par semaine. Note les nouveaux mots du travail dans une appli de notes sur ton téléphone. Écoute du néerlandais facile, par exemple le NOS Jeugdjournaal (les infos pour enfants) ou un podcast en néerlandais lent. Beaucoup de bibliothèques ont un Taalhuis : une aide gratuite pour le néerlandais, souvent avec un taalcafé (un lieu pour pratiquer l’oral) ou un partenaire de langue (taalmaatje). Les collègues passent souvent à l’anglais pour t’aider. Demande-leur gentiment de parler néerlandais avec toi : la plupart des gens aiment aider.',
    'c.keeplearning.p': 'Parle-moi en néerlandais, comme ça j’apprends plus vite.',
    'c.keeplearning.s': 'Tes collègues passent toujours à l’anglais quand ils te parlent. Tu veux apprendre le néerlandais. Que fais-tu ?',
    'c.keeplearning.o1': 'Remercie-les, et demande-leur de parler néerlandais avec toi.', // nagelezen (2e lezing)
    'c.keeplearning.o2': 'Ne dis rien. Le néerlandais viendra tout seul.',
    'c.keeplearning.o3': 'Réponds aussi en anglais, parce que c’est plus poli.', // nagelezen (2e lezing)
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
    'c.gossip.o1': 'Dis “Nee, dat wil ik niet” et demande-lui de l’effacer.', // nagelezen (2e lezing)
    'c.gossip.o2': 'Ris et laisse-le la publier, pour ne pas faire d’histoires.',
    'c.gossip.o3': 'Demande-lui de la publier sans ton nom.', // nagelezen (2e lezing)
    'c.gossip.w': 'En général, personne n’a le droit de mettre une vidéo de toi en ligne sans ton autorisation. Dire non est normal, et ton employeur doit agir quand des collègues se moquent les uns des autres en ligne. S’il la publie quand même, dis-le à ton responsable.', // nieuw, nalezen
    'c.boundaries': 'Dépasser les limites',
    'c.boundaries.b': 'Le grensoverschrijdend gedrag, c’est un comportement qui dépasse les limites de quelqu’un. Par exemple : toucher sans accord, remarques ou blagues sexuelles, regards insistants, images non voulues, menaces ou cris. Peu importe si l’autre personne “voulait juste plaisanter” : ce qui compte, c’est ce que toi, tu ressens. Si tu peux, dis clairement que tu veux que ça s’arrête. Note ce qui s’est passé, quand, et qui l’a vu. Parle à ton responsable, à la personne de confiance (vertrouwenspersoon, s’il y en a une) ou aux RH. Ton employeur doit te protéger, et on n’a pas le droit de te punir parce que tu l’as signalé. Tu as vu ça arriver à un collègue ? Demande-lui si ça va, et propose d’être témoin.',
    'c.boundaries.p': 'Je veux que tu arrêtes.',
    'c.boundaries.s': { m: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “beau”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?', f: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “jolie”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?', x: 'Ton chef d’équipe met souvent la main dans ton dos et dit que tu es “joli(e)”. Tu te sens mal à l’aise. C’est lui qui décide de tes horaires. Que fais-tu ?' },
    'c.boundaries.o1': 'Note ce qui se passe et parles-en au vertrouwenspersoon.', // nagelezen (2e lezing)
    'c.boundaries.o2': 'Ne dis rien, parce que c’est lui qui décide de tes horaires.',
    'c.boundaries.o3': 'Démissionne sans dire pourquoi à personne.',
    'c.boundaries.w': 'C’est un comportement non voulu, et ce n’est pas ta faute. Une personne de confiance t’écoute en toute discrétion et t’aide à choisir la suite. La loi te protège quand tu le signales. Tu peux aussi parler aux RH.', // nagelezen (2e lezing)
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
    'c.shelves.s': 'Tu mets du lait neuf dans le rayon. Devant, il y a du lait avec une date plus proche. Que fais-tu ?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.shelves.o1': 'Le lait neuf derrière, l’ancien lait devant.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.shelves.o2': 'Le lait neuf devant, parce qu’il est plus frais.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.shelves.o3': 'Jette l’ancien lait.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.shelves.w': 'Les clients prennent devant. Quand les anciens produits partent en premier, on jette moins de nourriture.',
    'c.checkout': 'Pièce d’identité pour l’alcool et le tabac',
    'c.checkout.b': 'Tu n’as pas le droit de vendre de l’alcool ou du tabac à une personne de moins de 18 ans : c’est la loi. Tu as un doute sur l’âge d’un client ? Demande sa pièce d’identité. Beaucoup de magasins demandent une pièce d’identité à toute personne qui a l’air d’avoir moins de 25 ans. Pas de pièce d’identité, ou moins de 18 ans ? Alors tu ne vends pas, et tu restes aimable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.checkout.p': 'Sans pièce d’identité, je n’ai pas le droit de vendre ça.',
    'c.checkout.s': 'Un jeune homme veut acheter de la bière. Il a l’air d’avoir environ 17 ans. Il dit qu’il a 19 ans, mais il n’a pas de pièce d’identité sur lui. Que fais-tu ?',
    'c.checkout.o1': 'Dis que tu ne peux pas vendre sans pièce d’identité.', // nagelezen (2e lezing)
    'c.checkout.o2': 'Vends-la, parce qu’il dit qu’il a 19 ans.',
    'c.checkout.o3': 'Vends, mais seulement une canette.',
    'c.checkout.w': 'Sans pièce d’identité, tu ne peux pas connaître son âge. Vendre de l’alcool à une personne de moins de 18 ans est contre la loi, et le magasin peut avoir une amende.',
    'c.counting': 'Vijfentwintig : d’abord le 5, puis le 20', // nieuw, nalezen
    'c.counting.b': 'En néerlandais, de 0 à 12, chaque nombre a son propre mot : nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. De 13 à 19, ils finissent en -tien : dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Les dizaines finissent en -tig : twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. De 21 à 99, on dit d’abord le dernier chiffre : 25 se dit vijfentwintig, “cinq et vingt”. Donc 47 se dit zevenenveertig, et 74 vierenzeventig. Dertien et dertig se ressemblent beaucoup : écoute la fin. Un doute ? Répète les chiffres un par un.', // nieuw, nalezen
    'c.counting.p': 'Quatre, sept ? Donc quarante-sept ?', // nieuw, nalezen
    'c.counting.s': 'Ton responsable dit : “Ga naar gang zevenenveertig.” C’est quelle allée ?', // nieuw, nalezen
    'c.counting.o1': 'L’allée 47.', // nieuw, nalezen
    'c.counting.o2': 'L’allée 74.', // nieuw, nalezen
    'c.counting.o3': 'L’allée 40.', // nieuw, nalezen
    'c.counting.w': '“Zevenenveertig”, c’est “sept et quarante” : d’abord le 7, puis le 40. Donc c’est l’allée 47. Beaucoup de nouveaux venus entendent 74 et vont dans la mauvaise allée.', // nieuw, nalezen
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
    'c.aihelp.o1': 'Demande aux RH ou au Juridisch Loket de vérifier.', // nagelezen (2e lezing)
    'c.aihelp.o2': 'Crois-le : le chatbot a l’air très sûr de lui.',
    'c.aihelp.o3': 'Ne dis rien et oublie ça.',
    'c.aihelp.w': 'Un chatbot peut se tromper sur les règles et les contrats. Aux Pays-Bas, presque tous les travailleurs reçoivent une prime de vacances. Une personne qui connaît les règles peut vérifier.',
    'c.aiprivate': 'Réfléchis avant de taper',
    'c.aiprivate.b': 'Ce que tu tapes dans un chatbot peut être enregistré et utilisé par l’entreprise qui le fabrique. Alors ne tape jamais ton BSN, un mot de passe ou tes coordonnées bancaires. Ne mets pas de noms ou de photos de clients, de patients ou de collègues, ni de papiers du travail. Beaucoup d’employeurs ont des règles sur l’IA. Demande d’abord si tu peux l’utiliser pour ton travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.',
    'c.aiprivate.p': 'Je peux utiliser l’IA pour ça ?',
    'c.aiprivate.s': 'Tu veux qu’un chatbot écrive un rapport sur un client. Le rapport contient le nom et l’adresse du client. Que fais-tu ?',
    'c.aiprivate.o1': 'Demande d’abord, et enlève le nom et l’adresse.', // nagelezen (2e lezing)
    'c.aiprivate.o2': 'Mets tout dans le chatbot : c’est plus rapide.',
    'c.aiprivate.o3': 'Envoie le rapport à un ami pour qu’il le vérifie.',
    'c.aiprivate.w': 'Les noms et les adresses sont des données personnelles. Ils ne peuvent pas simplement aller à une autre entreprise. Ton employeur sait quelles applis sont permises.',
    'c.aifake': 'Fausses voix et fausses vidéos',
    'c.aifake.b': 'Avec l’IA, des criminels peuvent copier une voix et faire de fausses photos et vidéos. Un appel ou un message qui ressemble à ton patron, ta banque ou quelqu’un de ta famille peut être faux. Fais attention quand il y a de l’urgence, de l’argent et un nouveau numéro. Raccroche, et rappelle toi-même au numéro que tu connais. Une vraie banque, un vrai employeur ou la police ne demande jamais tes codes.',
    'c.aifake.p': 'Je raccroche et je rappelle moi-même.',
    'c.aifake.s': 'Ton téléphone sonne. Une voix qui ressemble tout à fait à ton patron dit : “Paie cette facture maintenant, c’est urgent.” Que fais-tu ?',
    'c.aifake.o1': 'Raccroche et rappelle toi-même ton patron.', // nagelezen (2e lezing)
    'c.aifake.o2': 'Paie vite : c’est ton patron.',
    'c.aifake.o3': 'Donne ton code bancaire, pour que ton patron puisse payer.',
    'c.aifake.w': 'Une voix peut être copiée avec l’IA. L’urgence et l’argent ensemble, c’est un signal d’alerte. Rappeler à un numéro que tu connais est une vérification rapide et sûre.',
    'c.aiplan': 'Qui a décidé ça ?',
    'c.aiplan.b': 'De plus en plus d’entreprises laissent une appli ou un ordinateur décider des choses. Par exemple, il fait le planning ou mesure ta vitesse avec le scanner. Tu peux demander quelles informations sur toi sont collectées. Il y a une grosse décision sur toi, comme moins d’heures, un avertissement ou un licenciement ? Demande qui l’a prise. Un ordinateur a pris seul cette décision ? Alors tu peux demander qu’une personne la vérifie de nouveau et te l’explique. Note toi-même tes heures. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'c.aiplan.p': 'Une personne peut regarder ça ?',
    'c.aiplan.s': 'L’appli de planning te donne beaucoup moins d’heures le mois prochain. Personne ne te dit pourquoi. Que fais-tu ?',
    'c.aiplan.o1': 'Demande qu’une personne te l’explique.', // nagelezen (2e lezing)
    'c.aiplan.o2': 'Accepte : l’appli a toujours raison.',
    'c.aiplan.o3': 'Demande au chatbot de l’appli pourquoi.', // nagelezen (2e lezing)
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
    'c.harvest': "Le rythme et le salaire à la pièce", // nagelezen (2e lezing)
    'c.harvest.b': "Dans une serre, tu travailles souvent à un rythme fixe (tempo). Certains employeurs paient par caisse, par rangée ou par kilo : c’est le salaire à la pièce (stukloon). Même avec un salaire à la pièce, tu dois gagner au moins le salaire minimum pour chaque heure de travail. Vérifie le montant sur rijksoverheid.nl. Note chaque jour tes heures et tes caisses, et compare-les avec ta fiche de paie. Travailler vite, c’est bien, mais travailler en sécurité passe avant. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nagelezen (2e lezing)
    'c.harvest.p': "J’ai fait combien de caisses aujourd’hui ?", // nagelezen (2e lezing)
    'c.harvest.s': "On te paie par caisse. Cette semaine, tu gagnes moins que le salaire minimum par heure. Que fais-tu ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.harvest.o1': "Montre ta propre liste d’heures et de caisses.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.harvest.o2': "Ne dis rien et travaille plus vite.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.harvest.o3': "Accepte : avec un salaire à la pièce, c’est normal.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.harvest.w': "Avec un salaire à la pièce, tu dois quand même recevoir au moins le salaire minimum pour chaque heure de travail. Ta propre liste d’heures et de caisses t’aide à montrer ce que tu as fait. Si ce n’est pas corrigé, demande de l’aide.", // nagelezen (2e lezing)
    'c.greensafe': "La chaleur et les produits de traitement", // nagelezen (2e lezing)
    'c.greensafe.b': "Dans une serre, il peut faire très chaud, même au printemps. Bois souvent de l’eau, même avant d’avoir soif, et prends tes pauses dans un endroit frais. Tu as la tête qui tourne, tu te sens mal ou tu as mal à la tête ? Arrête-toi et dis-le à quelqu’un. Les plantes sont parfois traitées avec des produits chimiques (spuitmiddelen). Une serre qui vient d’être traitée a souvent un panneau sur la porte. N’entre pas avant que ton responsable dise que c’est de nouveau sans danger. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nagelezen (2e lezing)
    'c.greensafe.p': "Je peux déjà travailler dans cette serre ?", // nagelezen (2e lezing)
    'c.greensafe.s': "Une serre a été traitée ce matin. Il y a un panneau sur la porte. Un collègue dit : “Allez, c’est juste un moment.” Que fais-tu ?", // nagelezen (2e lezing) // nagelezen AI ronde 3
    'c.greensafe.o1': "Reste dehors et demande quand c’est sans danger.", // nagelezen (2e lezing)
    'c.greensafe.o2': "Entre vite et retiens ta respiration.", // nagelezen (2e lezing)
    'c.greensafe.o3': "Entre, et lave-toi bien les mains après.", // nagelezen (2e lezing)
    'c.greensafe.w': "Les produits de traitement peuvent abîmer ta peau, tes yeux et tes poumons, même quand tu ne sens rien. Après le traitement, il y a un temps d’attente avant de pouvoir entrer de nouveau. Ton responsable sait quand il est fini.", // nagelezen (2e lezing)
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
    'l.permit': "Les papiers, l’intégration et ton travail",
    'w.papieren': "les papiers (les documents)",
    'w.werkvergunning': "le permis de travail",
    'w.werknemer': "le salarié (tu travailles pour un employeur)",
    'w.zzper': "le travailleur indépendant (tu travailles pour toi-même)",
    'w.inburgering': "l’intégration civique (les cours et les examens pour les nouveaux arrivants)",
    'w.taalles': "le cours de langue",
    's.permit.1': "Je peux travailler ici avec mes papiers ?",
    's.permit.2': { m: "Je suis salarié ou indépendant ?", f: "Je suis salariée ou indépendante ?", x: 'Je travaille avec un contrat de travail ou à mon compte ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.permit.3': "Je travaille sur appel.",
    'c.permit.q': "Tu peux travailler mardi ?",
    'c.permit.a': "Non, j’ai un cours de langue ce jour-là. Mercredi, je peux.",
    'l.kids': "Les enfants et le travail",
    'w.zwanger': "enceinte",
    'w.kinderopvang': "la garde d’enfants, la crèche",
    'w.ophalen': "aller chercher (quelqu’un)",
    'w.ziekkind': "un enfant malade",
    'w.ouderschapsverlof': "le congé parental",
    'w.zorgverlof': "le congé pour soins (du temps libre pour s’occuper d’un proche malade)",
    's.kids.1': "Mon enfant est malade. Je dois aller le chercher.",
    's.kids.2': "Je peux prendre un congé d’urgence ?",
    's.kids.3': "Est-ce que mon employeur continue à payer mon salaire ?",
    'c.kids.q': "Pourquoi tu dois partir maintenant ?",
    'c.kids.a': "La crèche a appelé. Mon fils a de la fièvre.",
    'l.body': "Le corps et la douleur",
    'w.hoofd': "la tête",
    'w.rug': "le dos",
    'w.arm': "le bras",
    'w.hand': "la main",
    'w.buik': "le ventre",
    'w.oog': "l’œil",
    's.body.1': "J’ai mal à la main.",
    's.body.2': "Je ne me sens pas bien.",
    's.body.3': { m: "Je suis tombé sur le bras.", f: "Je suis tombée sur le bras.", x: 'J’ai fait une chute sur le bras.' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.body.q': "Où est-ce que tu as mal ?",
    'c.body.a': "Au dos. J’ai soulevé un carton lourd.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.jobends': "Quand ton travail s’arrête",
    'w.eindafrekening': "le solde de tout compte (ta dernière paie quand un travail s’arrête)",
    'w.opzeggen': "résilier (un contrat), annuler",
    'w.uitschrijven': "se désinscrire (retirer ton nom d’une liste)",
    'w.sleutel': "la clé",
    'w.verhuizen': "déménager",
    'w.busje': "le minibus, la camionnette",
    's.jobends.1': "Est-ce qu’on me paie ma prime de vacances et mes jours de congé ?",
    's.jobends.2': "Je demande conseil au Juridisch Loket.",
    's.jobends.3': "Je prends moi-même une nouvelle assurance maladie.",
    'c.jobends.q': "Ton travail s’arrête vendredi. Ce jour-là, tu dois aussi quitter le logement.",
    'c.jobends.a': "Quel est le préavis de mon contrat de location ?",
    'c.details': "Tes informations : donne-les correctement",
    'c.details.b': "Au début d’un travail, tu donnes tes informations. C’est ton nom, ton adresse, ton numéro de téléphone, ta date de naissance et ton BSN. Épelle ton nom lentement, lettre par lettre. Ensuite, vérifie ton nom sur ton contrat et sur ta fiche de paie. Une erreur dans ton nom ou ton BSN peut poser des problèmes pour ta paie ou tes impôts. Nouvelle adresse ou nouveau numéro de téléphone ? Dis-le à ton employeur.",
    'c.details.p': "Je l’épelle : A, L, I.",
    'c.details.s': "Au téléphone, l’agence note ton nom de famille. Tu entends qu’ils l’écrivent mal. Que fais-tu ?",
    'c.details.o1': "Épelle ton nom lentement et demande-leur de le relire.", // nagelezen (2e lezing)
    'c.details.o2': "Ne dis rien : une petite erreur dans ton nom, ce n’est pas grave.",
    'c.details.o3': "Raccroche, et espère qu’ils trouveront l’erreur plus tard.",
    'c.details.w': "Ton nom doit être le même sur ton contrat, ta fiche de paie et ta pièce d’identité. Comme ça, ta paie et tes impôts sont corrects. Épeler et faire relire, c’est une vérification rapide.",
    'c.dates': "Les dates : le jour vient d’abord",
    'c.dates.b': "En néerlandais, le jour vient avant le mois : 3-6, c’est le 3 juin, pas le 6 mars. “Tot en met” veut dire que le dernier jour compte aussi. Les jours et les mois s’écrivent avec une minuscule : maandag, juni. Un doute sur une date ? Demande, et répète-la.", // nagelezen AI ronde 3
    'c.dates.p': "Tu veux dire le 3 juin ?",
    'c.dates.s': "Sur ton planning, il est écrit : “Vrij: 3-6 tot en met 5-6”. Quand es-tu libre ?", // nagelezen AI ronde 3
    'c.dates.o1': "Le 3, le 4 et le 5 juin.",
    'c.dates.o2': "Seulement le 3 et le 4 juin.",
    'c.dates.o3': "Du 6 mars au 6 mai.",
    'c.dates.w': "Le jour vient d’abord, puis le mois : 3-6, c’est le 3 juin. “Tot en met” veut dire que le 5 juin compte aussi, donc tu es libre trois jours.", // nagelezen AI ronde 3
    'c.permit': "Le travail et l’intégration",
    'c.permit.b': "Tu dois faire l’intégration civique (inburgering) ? Dis-le à ton employeur, et dis à la gemeente (la mairie) que tu travailles. Demande tôt si tes cours de langue peuvent s’organiser autour de ton planning. Tu ne sais pas si tu as le droit de travailler ici ? Vérifie-le avant de commencer, par exemple auprès de l’IND, de l’UWV ou de VluchtelingenWerk. On te demande de t’inscrire comme indépendant (zzp’er) pour ce travail ? Demande d’abord conseil. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.",
    'c.permit.p': "J’ai un cours de langue le mardi. Est-ce que mon planning peut en tenir compte ?",
    'c.permit.s': "Ton cours de langue est le mardi matin. Ton nouveau planning te fait travailler à ce moment-là. Que fais-tu ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.permit.o1': "Demande à ton responsable de changer le planning.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.permit.o2': "Ne va pas au cours : le travail passe avant.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.permit.o3': "Reste à la maison le mardi sans rien dire.",
    'c.permit.w': "Ton intégration est aussi une obligation. Beaucoup d’employeurs aident quand ils le savent tôt. La gemeente peut aussi t’aider à organiser ton plan autour de ton travail.",
    'c.kids': "Ton enfant est malade",
    'c.kids.b': "Ton enfant tombe malade tout à coup ? Dis-le tout de suite à ton employeur. Pour les premières heures ou les premiers jours, tu peux prendre un congé d’urgence (calamiteitenverlof), et ton employeur continue à te payer. Ton enfant a besoin de soins plus longtemps ? Alors tu peux demander un congé pour soins (zorgverlof). Enceinte ? Ton employeur n’a pas le droit de te licencier pour ça. Renseigne-toi à temps sur le congé de grossesse et le congé parental (ouderschapsverlof). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.",
    'c.kids.p': "Mon enfant est malade. Je peux partir plus tôt aujourd’hui ?",
    'c.kids.s': "La crèche (kinderopvang) t’appelle au travail. Ton enfant a de la fièvre et doit rentrer à la maison. Que fais-tu ?",
    'c.kids.o1': "Préviens ton responsable, et demande un congé d’urgence.", // nagelezen (2e lezing)
    'c.kids.o2': "Pars sans rien dire, et explique-le demain.",
    'c.kids.o3': "Reste au travail, et laisse ton enfant attendre la fin de ton service.",
    'c.kids.w': "Un enfant malade, c’est une urgence à la maison. Quand tu préviens d’abord ton responsable, il peut organiser le travail. Le congé d’urgence est fait pour ces moments-là.",
    'c.body': "Dis ce qui s’est passé et où tu as mal",
    'c.body.b': "Chez le médecin, dis ce qui s’est passé et où tu as mal. Par exemple : “Ik ben gevallen. Mijn arm doet pijn.” Dis aussi depuis combien de temps tu as mal. Tu n’as pas besoin de deviner ce que tu as : c’est le médecin qui vérifie. C’est arrivé au travail ? Dis-le à ton responsable le jour même.", // nagelezen AI ronde 3
    'c.body.p': { m: "Je suis tombé. J’ai mal au bras.", f: "Je suis tombée. J’ai mal au bras.", x: 'J’ai fait une chute. J’ai mal au bras.' }, // x: nieuw, nalezen
    'c.body.s': "Au travail, tu as soulevé une caisse lourde. Maintenant, tu as très mal au dos. Tu es chez le médecin de famille (huisarts). Que dis-tu ?",
    'c.body.o1': "Où tu as mal, et ce qui s’est passé : tu as soulevé une caisse lourde.",
    'c.body.o2': "Seulement que tu te sens mal, rien de plus.",
    'c.body.o3': "Le nom d’une maladie que tu as trouvée sur internet.",
    'c.body.w': "Quand tu dis où tu as mal et ce qui s’est passé, le médecin te comprend plus vite. C’est le médecin qui vérifie ce que c’est. C’est arrivé au travail ? Dis-le aussi à ton responsable.",
    'c.jobends': "Ton travail s’arrête : qu’est-ce qui s’arrête aussi ?",
    'c.jobends.b': "Quand ton travail s’arrête, vérifie ton solde de tout compte (eindafrekening). Les jours de congé que tu n’as pas pris et ta prime de vacances sont en général payés avec. Le logement, l’assurance maladie ou le minibus de l’agence peuvent s’arrêter en même temps. Prends toi-même une assurance maladie à temps. Ton contrat de location a ses propres règles : demande conseil avant de quitter le logement. Tu déménages, ou tu quittes les Pays-Bas ? Dis-le à la gemeente. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.",
    'c.jobends.p': "Quand est-ce que je reçois mon solde de tout compte ?",
    'c.jobends.s': "Ton travail s’arrête vendredi. Ton assurance maladie passe par l’agence. Que fais-tu ?",
    'c.jobends.o1': "Demande quand elle s’arrête, et prends la tienne à temps.", // nagelezen (2e lezing)
    'c.jobends.o2': "Rien : l’assurance continue toute seule.",
    'c.jobends.o3': "Attends de tomber malade, et règle ça à ce moment-là.",
    'c.jobends.w': "L’assurance par l’agence s’arrête souvent quand ton travail s’arrête. Quand tu vis ou travailles aux Pays-Bas, tu dois en général avoir une assurance maladie. En t’en occupant à temps, tu as toujours une assurance.",
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
    'l.healthy': "En forme pour le travail", // nieuw, nalezen
    'w.slapen': "dormir", // nieuw, nalezen
    'w.ontbijt': "le petit-déjeuner", // nieuw, nalezen
    'w.bewegen': "bouger, être actif", // nieuw, nalezen
    'w.moe': "fatigué", // nieuw, nalezen
    'w.drugs': "la drogue", // nieuw, nalezen
    'w.somber': "déprimé (triste depuis longtemps)", // nieuw, nalezen
    's.healthy.1': { m: "Je suis très fatigué aujourd’hui.", f: "Je suis très fatiguée aujourd’hui.", x: "Je suis très fatigué / fatiguée aujourd’hui." }, // nieuw, nalezen
    's.healthy.2': "Je prends toujours d’abord un petit-déjeuner.", // nieuw, nalezen
    's.healthy.3': "À la pause, je vais faire un petit tour à pied.", // nieuw, nalezen
    'c.healthy.q': { m: "Tu veux un cachet ? Comme ça, tu restes éveillé.", f: "Tu veux un cachet ? Comme ça, tu restes éveillée.", x: "Tu veux un cachet ? Comme ça, tu restes éveillé / éveillée." }, // nieuw, nalezen
    'c.healthy.a': "Non, merci. Je ne travaille pas sous l’effet de quoi que ce soit.", // nieuw, nalezen
    'c.workorder': "D’abord lire, puis commencer", // nieuw, nalezen
    'c.workorder.b': "Avant de commencer, lis le bon de travail (werkbon) ou la tâche dans l’appli. Vérifie l’adresse, la tâche et le nombre de choses. Quelque chose n’est pas clair ? Demande avant de commencer, pas au milieu. Ensuite, prépare tes outils et ton matériel. Ça fait gagner du temps, et tu fais moins d’erreurs. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.workorder.p': "Il y a dix cartons sur le bon de travail. C’est juste ?", // nieuw, nalezen
    'c.workorder.s': "Ton bon de travail dit : peindre la chambre 3. Ton collègue dit que c’est la chambre 5. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.workorder.o1': "Tu demandes à ton responsable quelle chambre est la bonne.", // nieuw, nalezen
    'c.workorder.o2': "Tu peins la chambre 3, parce que c’est écrit sur le bon de travail.", // nieuw, nalezen
    'c.workorder.o3': "Tu peins les deux chambres, comme ça pas d’erreur.", // nieuw, nalezen
    'c.workorder.w': "Quand deux choses ne collent pas, tu vérifies avant de commencer. Une petite question prend moins de temps que refaire le travail.", // nieuw, nalezen
    'c.handover': "Dis ce qui est fait, et ce qui ne l’est pas", // nieuw, nalezen
    'c.handover.b': "Ton travail n’est pas fini quand tu t’arrêtes. D’abord, range ton poste et tes outils. Ensuite, demande à quelqu’un de vérifier ton travail. Dis à ton responsable ce qui est fait et ce qui ne l’est pas. Quelque chose s’est mal passé, ou est cassé ? Dis-le maintenant, pas demain. Signaler la fin du travail fait partie de ton travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen // nagelezen AI 31 okt
    'c.handover.p': "La chambre quatre n’est pas encore finie. La porte était fermée à clé.", // nieuw, nalezen
    'c.handover.s': "Tu as nettoyé cinq chambres. La chambre 4 était fermée à clé. Ton service se termine. Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.handover.o1': "Tu dis à ton responsable : la 4 n’est pas faite.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.handover.o2': "Tu rentres chez toi : la 4 était fermée, ce n’est pas ta faute.", // nieuw, nalezen
    'c.handover.o3': "Tu écris “tout est fait” sur la liste.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.handover.w': "Ton responsable organise le travail. S’il sait que la chambre 4 n’est pas faite, il peut envoyer quelqu’un d’autre. Comme ça, aucun client ne trouve une chambre sale.", // nieuw, nalezen
    'c.workshop': "Les yeux, les oreilles et le feu", // nieuw, nalezen
    'c.workshop.b': "Meuler, scier et percer font des étincelles, des petits bouts et beaucoup de bruit. Porte des lunettes de sécurité et une protection auditive, même pour un travail court. Quand il y a beaucoup de bruit, ton employeur doit te donner une protection auditive. Les étincelles peuvent provoquer un incendie. Pour souder, ou meuler près de choses qui peuvent brûler, il y a des règles en plus (heet werk) : demande avant de commencer. Après le travail, ramasse les petits bouts de métal. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.workshop.p': "Je vais meuler. Où est la protection auditive ?", // nieuw, nalezen
    'c.workshop.s': "Tu dois meuler une petite pièce de métal. Ça prend une minute. Tes lunettes de sécurité sont dans l’autre pièce. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.workshop.o1': "Tu vas d’abord chercher tes lunettes, même pour une minute.", // nieuw, nalezen
    'c.workshop.o2': "Tu meules les yeux à moitié fermés, c’est rapide.", // nieuw, nalezen
    'c.workshop.o3': "Tu mets ton autre main devant tes yeux.", // nieuw, nalezen
    'c.workshop.w': "Une étincelle ou un bout de métal dans l’œil peut abîmer ton œil pour toujours. Ça peut arriver en une seconde. Les lunettes de sécurité aident, même pour un travail court.", // nieuw, nalezen
    'c.power': "L’électricité : jamais comme ça", // nieuw, nalezen
    'c.power.b': { m: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmé ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", f: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmé ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", x: "Ne travaille jamais sur quelque chose qui est sous tension (onder spanning). D’abord, un collègue formé le met en sécurité : il coupe le courant et il vérifie. Seules les personnes qui ont la bonne formation peuvent faire ça. Tu vois un câble ou une prise abîmé ? Ne l’utilise pas, et dis-le tout de suite à ton responsable. Pas sûr / Pas sûre que le courant soit coupé ? Alors il ne l’est pas. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket." }, // nieuw, nalezen
    'c.power.p': "Je vois un câble abîmé. Qui peut le regarder ?", // nieuw, nalezen
    'c.power.s': "Tu dois accrocher une lampe. Un collègue dit : “Le courant est coupé, je crois.” Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.power.o1': "Tu demandes à un collègue formé de vérifier qu’il n’y a plus de courant.", // nieuw, nalezen
    'c.power.o2': "Tu commences, mais tu mets des gants épais pour toucher les fils.", // nieuw, nalezen
    'c.power.o3': "Tu allumes et éteins la lumière pour vérifier qu’il n’y a plus de courant.", // nieuw, nalezen
    'c.power.w': "“Je crois”, ce n’est pas assez avec l’électricité. Une décharge peut te tuer. Un collègue formé vérifie qu’il n’y a pas de courant, et après tu peux commencer.", // nieuw, nalezen
    'c.garage': "En sécurité sous une voiture", // nieuw, nalezen
    'c.garage.b': "Ne va jamais sous une voiture qui est seulement sur un cric. La voiture doit être bien stable sur le pont élévateur ou sur des chandelles. L’huile renversée rend le sol glissant : nettoie-la tout de suite. La vieille huile, les batteries et les produits de nettoyage sont des déchets dangereux. Ils vont dans un endroit spécial, jamais dans la poubelle normale ni dans l’égout. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.garage.p': "Il y a de l’huile par terre. Je la nettoie.", // nieuw, nalezen
    'c.garage.s': "Tu dois regarder sous une voiture qui est seulement sur un cric. Un collègue dit : “Ça va, fais vite.” Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.o1': "Tu attends le pont ou des chandelles.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.o2': "Tu vas dessous vite, les jambes dehors.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.o3': "Tu demandes au collègue de tenir la voiture.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.garage.w': "Un cric peut glisser. Une voiture est très lourde, et dessous tu ne peux pas sortir vite. Les chandelles ou un pont élévateur gardent la voiture en place.", // nieuw, nalezen
    'c.carjob': "Du travail en plus ? Demande d’abord au client", // nieuw, nalezen
    'c.carjob.b': "Tu trouves plus de problèmes que ce qui est sur le bon de travail ? Ne les répare pas comme ça. Le client doit d’abord être d’accord avec le travail en plus et les frais. Ton responsable ou l’accueil appelle le client. Un essai sur route, c’est seulement avec une autorisation, et seulement avec un permis de conduire valable. Note ce que tu as fait et quelles pièces tu as utilisées. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.carjob.p': "Je vois encore un problème. Qui appelle le client ?", // nieuw, nalezen
    'c.carjob.s': "Tu fais la vidange d’une voiture. Les freins sont mauvais aussi. Elle doit être prête dans une heure. Qu’est-ce que tu fais ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.carjob.o1': "Tu le dis à ton responsable, pour qu’il appelle le client.", // nieuw, nalezen
    'c.carjob.o2': "Tu répares aussi les freins, par sécurité.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.carjob.o3': "Tu ne dis rien : ils ne sont pas sur le bon.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.carjob.w': "Le client paie, donc c’est le client qui décide. Sans son accord, le garage ne peut pas faire du travail en plus comme ça. Des mauvais freins sont dangereux, donc il est important d’en parler.", // nieuw, nalezen
    'c.placement': "D’abord signer, puis commencer", // nieuw, nalezen
    'c.placement.b': "En Entree, tu apprends beaucoup dans une entreprise : c’est ton stage (stage, ou bpv). Avant de commencer, toi, l’école et l’entreprise, vous signez une convention : la POK. Dans l’entreprise, ton tuteur (praktijkopleider) t’aide. À l’école, ton référent de stage (stagebegeleider) t’aide. Malade ? Appelle l’entreprise avant ton heure de début, et préviens aussi l’école. Les règles changent d’une école à l’autre : demande à ton référent de stage.", // nieuw, nalezen
    'c.placement.p': "Je commence seulement quand la convention de stage est signée.", // nieuw, nalezen
    'c.placement.s': "L’entreprise te demande de commencer demain. La POK n’est pas encore signée. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.placement.o1': "Tu demandes à ton référent de régler d’abord la POK.", // nieuw, nalezen
    'c.placement.o2': "Tu commences demain, et tu signes la POK quand tu as le temps.", // nieuw, nalezen
    'c.placement.o3': "Tu commences, mais tu ne dis rien à l’école pour l’instant.", // nieuw, nalezen
    'c.placement.w': "La POK dit ce que tu apprends et qui t’aide. Sans POK signée, ton stage peut ne pas compter pour ton diplôme. C’est pour ça que tu la signes avant de commencer.", // nieuw, nalezen
    'c.review': "Demande des retours, et un exemple", // nieuw, nalezen
    'c.review.b': "En stage, on te dit ce qui va bien et ce qui peut être mieux : ce sont des retours (feedback). C’est normal, et ça t’aide à apprendre. Tu ne comprends pas ? Demande un exemple. Demande toi aussi des retours, par exemple une fois par semaine. Quelque chose va vraiment mal dans ton stage ? D’abord, parle à ton tuteur en entreprise. Ça n’aide pas ? Alors va voir ton référent de stage à l’école.", // nieuw, nalezen
    'c.review.p': "Qu’est-ce qui s’est bien passé, et qu’est-ce qui peut être mieux ?", // nieuw, nalezen
    'c.review.s': "Ton tuteur te dit : “Tu dois travailler plus soigneusement.” Tu ne sais pas ce qu’il veut dire. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.review.o1': "Tu demandes un exemple de ce que tu dois faire autrement.", // nieuw, nalezen
    'c.review.o2': { m: "Tu dis oui, et tu espères comprendre seul.", f: "Tu dis oui, et tu espères comprendre seule.", x: "Tu dis oui, et tu espères comprendre seul / seule." }, // nieuw, nalezen
    'c.review.o3': "Désormais, tu travailles beaucoup plus lentement, pour ne rien rater.", // nieuw, nalezen
    'c.review.w': "Avec un exemple, tu sais quoi changer. Demander montre que tu veux apprendre. Les tuteurs aiment ça.", // nieuw, nalezen
    'c.council': "Qui a le droit de voter ?", // nieuw, nalezen
    'c.council.b': "Aux Pays-Bas, tu choisis qui décide, en votant. Le conseil municipal (gemeenteraad) décide pour ta ville. La Tweede Kamer fait les lois pour tout le pays. Avec la nationalité néerlandaise, tu peux voter à toutes les élections, à partir de 18 ans. Plus de personnes peuvent voter pour le conseil municipal. Les gens d’un autre pays de l’UE qui habitent ici peuvent voter. Les gens hors UE peuvent voter après 5 ans de séjour légal. La commune (gemeente) t’envoie une carte de vote (stempas). Prends-la avec ta pièce d’identité. Tu ne sais pas si tu peux voter ? Demande à la commune.",
    'c.council.p': "J’ai le droit de voter pour le conseil municipal ?", // nieuw, nalezen
    'c.council.s': "Tu viens du Maroc et tu vis ici légalement depuis six ans, sans la nationalité néerlandaise. Qu’est-ce qui est vrai ?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.council.o1': "Tu peux voter pour le conseil municipal.", // nieuw, nalezen
    'c.council.o2': "Tu peux aussi voter pour la Tweede Kamer.", // nieuw, nalezen
    'c.council.o3': "Sans passeport néerlandais, tu ne peux pas voter.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.council.w': "Après 5 ans de séjour légal, tu peux voter pour le conseil municipal. Pour la Tweede Kamer, il faut la nationalité néerlandaise.", // nieuw, nalezen
    'c.police': "Ta pièce d’identité et tes droits", // nieuw, nalezen
    'c.police.b': { m: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêté ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits.", f: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêtée ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits.", x: "À partir de 14 ans, tu dois montrer ta pièce d’identité quand la police la demande. Alors garde-la toujours sur toi. Tu as reçu une lettre de la commune ou de l’UWV, par exemple ? Tu n’acceptes pas la décision dans cette lettre ? Alors tu peux faire une réclamation par écrit (bezwaar maken). Fais-le avant la date indiquée dans la lettre. La police et le juge doivent traiter tout le monde de la même façon. Tu es arrêté / arrêtée ? Tu peux demander un avocat. Le Juridisch Loket donne des conseils gratuits." },
    'c.police.p': "Je ne suis pas d’accord avec cette décision. Je fais une réclamation.", // nieuw, nalezen
    'c.police.s': "Tu reçois une lettre de la commune. Tu n’es pas d’accord avec leur décision. La lettre dit que tu as six semaines. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.police.o1': "Tu écris une lettre de réclamation, avant la date.", // nieuw, nalezen
    'c.police.o2': "Tu les appelles une fois, et tu attends qu’ils te rappellent.", // nieuw, nalezen
    'c.police.o3': "Tu attends : après six semaines, ça s’arrête tout seul.", // nieuw, nalezen
    'c.police.w': "La réclamation se fait par écrit, avant la date indiquée dans la lettre. Après cette date, c’est souvent trop tard. Le Juridisch Loket peut t’aider à l’écrire.", // nieuw, nalezen // nagelezen AI 31 okt
    'c.login': "Ton accès, c’est le tien", // nieuw, nalezen
    'c.login.b': "Ton mot de passe et ton DigiD sont seulement pour toi. Ne les donne à personne, même pas à ton employeur ou à un collègue. Sur un ordinateur partagé, déconnecte-toi toujours quand tu as fini. Tu t’en vas un moment ? Verrouille ton écran. Tu as oublié ton mot de passe ? Demande-en un nouveau au service informatique (ICT-afdeling). Les règles pour les ordinateurs changent d’une entreprise à l’autre : demande au service informatique quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.login.p': "Je m’en vais un moment. Je verrouille mon écran.", // nieuw, nalezen
    'c.login.s': "Ton responsable te demande ton DigiD et ton mot de passe, pour régler vite tes papiers. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.login.o1': "Tu dis non, et tu te connectes toi-même pendant qu’il aide.", // nieuw, nalezen
    'c.login.o2': "Tu les donnes cette fois, parce que c’est ton chef.", // nieuw, nalezen
    'c.login.o3': "Tu les écris sur un papier, pour qu’il les utilise plus tard.", // nieuw, nalezen
    'c.login.w': "Avec ton DigiD, quelqu’un peut voir et changer tes impôts, tes allocations et tes papiers de santé. Il est seulement pour toi. Tu peux te connecter toi-même et laisser quelqu’un t’aider.", // nieuw, nalezen
    'c.phish': "Vite, un bouton ? Ne clique pas", // nieuw, nalezen
    'c.phish.b': "Un faux e-mail (phishing) a souvent l’air vrai. Il veut que tu agisses vite : “Votre compte sera fermé aujourd’hui !” Vérifie l’expéditeur. Ne clique pas sur un lien et n’ouvre pas une pièce jointe que tu n’attendais pas. Va toi-même sur le vrai site ou dans la vraie appli. Tu as quand même cliqué ? Change tout de suite ton mot de passe, et appelle le service informatique. Ce n’est pas une honte : plus tôt ils savent, mieux c’est. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.phish.p': "J’ai cliqué sur un lien suspect.", // nieuw, nalezen
    'c.phish.s': "Tu as cliqué sur un lien dans un e-mail et tu as tapé ton mot de passe. Ensuite, tu vois que l’e-mail était faux. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.phish.o1': "Tu changes ton mot de passe, et tu appelles l’informatique.", // nieuw, nalezen
    'c.phish.o2': "Tu supprimes l’e-mail, pour que personne d’autre ne clique dessus.", // nieuw, nalezen
    'c.phish.o3': "Tu attends un jour pour voir si quelque chose se passe mal.", // nieuw, nalezen
    'c.phish.w': "Avec ton mot de passe, quelqu’un d’autre peut entrer dans les systèmes de ton travail. Si tu le changes vite et que tu préviens l’informatique, ils peuvent arrêter ça à temps.", // nieuw, nalezen
    'c.mychoice': "Tes points forts comptent", // nieuw, nalezen
    'c.mychoice.b': "Qu’est-ce que tu fais bien ? Pense au travail, à l’école et à la maison. S’occuper de sa famille, un petit boulot ou du bénévolat, ça compte aussi. Qu’est-ce que tu aimes, et qu’est-ce que tu n’aimes pas ? Tu ne sais pas quel travail te va ? Demande à suivre quelqu’un au travail pendant une journée (meeloopdag). Ton référent à l’école peut t’aider à choisir.", // nieuw, nalezen
    'c.mychoice.p': "Je sais bien m’y prendre avec les gens. À la maison, j’aide beaucoup.", // nieuw, nalezen
    'c.mychoice.s': "À l’école, on te demande : “Qu’est-ce que tu fais bien ?” Tu n’as jamais eu de travail payé. Qu’est-ce que tu dis ?", // nieuw, nalezen
    'c.mychoice.o1': "Ce que tu fais bien à la maison, comme t’occuper des autres.", // nieuw, nalezen
    'c.mychoice.o2': "Que tu ne sais pas encore, car tu n’as jamais travaillé.", // nieuw, nalezen
    'c.mychoice.o3': "Que tu peux faire n’importe quel travail, vraiment tout.", // nieuw, nalezen
    'c.mychoice.w': "Ce que tu sais faire à la maison compte aussi. S’occuper des autres, organiser et aider, ce sont des compétences dont les employeurs ont besoin. Dis ce que tu as fait, avec un exemple.", // nieuw, nalezen
    'c.nextstep': "Après Entree : niveau 2 ou travail", // nieuw, nalezen
    'c.nextstep.b': "Avec un diplôme Entree, tu peux continuer au niveau 2 du mbo. Un diplôme de niveau 2 ou plus, c’est une qualification de base (startkwalificatie). Ça t’aide à trouver du travail et à le garder. En bbl, tu travailles dans une entreprise et tu vas à l’école environ un jour par semaine. Pour ça, il te faut un travail ou une place en alternance (leerwerkbaan). Va à une journée portes ouvertes, et parle avec ton référent à l’école.", // nieuw, nalezen
    'c.nextstep.p': "Je peux aller au niveau 2 après Entree ?", // nieuw, nalezen
    'c.nextstep.s': "Tu as ton diplôme Entree. Une entreprise te propose un travail sans formation. Toi, tu veux aussi continuer à apprendre. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.nextstep.o1': "Tu demandes à l’entreprise si une place en bbl est possible.", // nieuw, nalezen
    'c.nextstep.o2': "Tu prends le travail, et tu arrêtes d’apprendre pour toujours.", // nieuw, nalezen
    'c.nextstep.o3': "Tu restes chez toi jusqu’à ce qu’une école t’appelle.", // nieuw, nalezen
    'c.nextstep.w': "En bbl, tu travailles et tu apprends en même temps. Tu gagnes de l’argent, et tu obtiens un diplôme de niveau 2. Beaucoup d’entreprises aiment ça.", // nieuw, nalezen
    'c.email': "Un e-mail court : qui, quoi, quand", // nieuw, nalezen
    'c.email.b': "Un e-mail au travail est court et poli. Commence par une salutation, comme “Beste Karin,”. Ensuite, dis ce que tu veux, et quand. Termine par une formule de politesse et ton nom complet. Écris un objet court, comme “Vrij op vrijdag”. Relis ton e-mail avant de l’envoyer.", // nieuw, nalezen
    'c.email.p': "Chère Karin, est-ce que je peux avoir vendredi en congé ? Cordialement, Ali Haddad", // nieuw, nalezen
    'c.email.s': "Tu veux un jour de congé vendredi prochain. Quel e-mail à ton responsable est le meilleur ?", // nieuw, nalezen
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen
    'c.email.o2': "“Vrijdag ben ik er niet.” (sans salutation et sans ton nom).", // nieuw, nalezen
    'c.email.o3': "Un long e-mail sur ta semaine, avec la question à la fin.", // nieuw, nalezen
    'c.email.w': "Un bon e-mail a une salutation, une question claire et ton nom. Comme ça, ton responsable peut répondre vite.", // nieuw, nalezen
    'c.budget': "D’abord les charges fixes", // nieuw, nalezen
    'c.budget.b': "Quand tu reçois ta paie, paie d’abord les charges fixes : le loyer, l’assurance et ton téléphone. Essaie de mettre de côté une petite somme chaque mois, même 10 euros. Acheter maintenant et payer plus tard, c’est aussi une dette. Tu as acheté quelque chose en ligne ? Alors en général, tu peux changer d’avis dans les 14 jours. Garde le ticket de caisse : il te faut pour la garantie.", // nieuw, nalezen
    'c.budget.p': "Je préfère payer maintenant. Comme ça, je n’ai pas de dette.", // nieuw, nalezen
    'c.budget.s': "Tu reçois ta paie aujourd’hui. Tu veux des chaussures neuves, et ton loyer n’est pas encore payé. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'c.budget.o1': "Tu paies d’abord le loyer, puis tu vois ce qui reste.", // nieuw, nalezen
    'c.budget.o2': "Tu achètes les chaussures, et tu paies le loyer plus tard.", // nieuw, nalezen
    'c.budget.o3': "Tu achètes les chaussures en “payer plus tard”.", // nieuw, nalezen
    'c.budget.w': "Le loyer, l’assurance et ton téléphone reviennent chaque mois. Si tu les paies d’abord, tu sais combien d’argent il reste. Comme ça, tu n’as pas de dettes.", // nieuw, nalezen
    'c.healthy': "Sommeil, repas et pas de drogue", // nieuw, nalezen
    'c.healthy.b': { m: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu te sens déprimé depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret.", f: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu te sens déprimée depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret.", x: "Tu travailles mieux et plus en sécurité quand tu dors assez, même après un service du soir. Prends un petit-déjeuner, et bois de l’eau pendant la journée. Bouge pendant ta pause, par exemple un petit tour à pied. Travailler sous l’effet de l’alcool ou de la drogue est dangereux, et la plupart des employeurs l’interdisent. Tu n’as pas le moral depuis longtemps, ou tu n’arrives pas à arrêter de boire ou de consommer ? Parle à ton médecin généraliste (huisarts). Il peut t’aider, et il garde le secret." }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.healthy.p': { m: "Je me sens déprimé depuis longtemps. Je peux prendre rendez-vous ?", f: "Je me sens déprimée depuis longtemps. Je peux prendre rendez-vous ?", x: "Je n’ai pas le moral depuis longtemps. Je peux prendre rendez-vous ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.healthy.s': { m: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour rester éveillé. Qu’est-ce que tu fais ?", f: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour rester éveillée. Qu’est-ce que tu fais ?", x: "Ce soir, tu as un service de nuit. Un collègue te propose un cachet pour ne pas t’endormir. Qu’est-ce que tu fais ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.healthy.o1': "Tu dis non, et tu dors quelques heures avant ton service.", // nieuw, nalezen
    'c.healthy.o2': "Tu prends un demi-cachet, ce n’est pas dangereux.", // nieuw, nalezen
    'c.healthy.o3': "Tu le prends, mais tu ne le dis à personne au travail.", // nieuw, nalezen
    'c.healthy.w': "Les cachets d’un collègue peuvent être de la drogue. Ils peuvent te rendre malade ou te faire faire des erreurs au travail. Dormir, c’est la façon sûre de rester alerte.", // nieuw, nalezen
    'u.sick': "La maladie", // nieuw, nalezen
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
    'c.food': "Mains propres, aliments sûrs", // nieuw, nalezen
    'c.food.b': "Le travail avec des aliments a des règles d’hygiène strictes : un filet à cheveux, des vêtements de travail propres, des mains lavées et pas de bijoux. Ces règles sont les mêmes pour tout le monde. Elles ne disent rien sur toi : elles protègent les aliments pour les gens qui les mangent. Avec un couteau, porte toujours ton gant anti-coupure. Dans une pièce froide ou une chambre de congélation, mets les vêtements chauds qu’on te donne, et réchauffe-toi pendant ta pause. Tu es malade, ou tu as une blessure à la main ? Signale-le avant de commencer. Alors tu peux avoir un pansement spécial, ou un autre travail pendant un moment. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.food.p': "J’ai une petite coupure à la main. Je peux avoir un pansement ?", // nieuw, nalezen
    'c.food.s': "À la maison, tu t’es un peu coupé le doigt. Aujourd’hui, tu travailles avec de la viande. Que fais-tu ?", // nieuw, nalezen
    'c.food.o1': "Tu le dis à ton responsable, et tu demandes un pansement.", // nieuw, nalezen
    'c.food.o2': "Tu ne dis rien : c’est juste une petite coupure.", // nieuw, nalezen
    'c.food.o3': "Tu mets un gant par-dessus, pour que personne ne le voie.", // nieuw, nalezen
    'c.food.w': "Une petite blessure peut apporter des microbes dans les aliments. Quand tu le signales, tu peux avoir un pansement spécial ou un autre travail pendant un moment. Le signaler est normal : personne ne te le reproche.", // nieuw, nalezen
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
    'c.parcel': "Personne à la maison, ou un colis abîmé", // nieuw, nalezen
    'c.parcel.b': "Le client n’est pas chez lui ? Suis les règles de ton entreprise : essaie chez les voisins, ou rapporte le colis. Ne le laisse pas simplement devant la porte, sauf si le client l’a demandé. Un colis est abîmé ou mouillé ? Ne le livre pas comme si de rien n’était. Prends une photo comme preuve, et signale-le dans le scanner ou l’appli. Dire la vérité sur un problème vaut toujours mieux que le cacher. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.parcel.p': "Ce colis est abîmé. Voici une photo.", // nieuw, nalezen
    'c.parcel.s': "Le client n’est pas chez lui, et les voisins non plus. Que fais-tu ?", // nieuw, nalezen
    'c.parcel.o1': "Tu scannes “pas à la maison”, et tu rapportes le colis.", // nieuw, nalezen
    'c.parcel.o2': "Tu le scannes comme livré, et tu le laisses devant la porte.", // nieuw, nalezen
    'c.parcel.o3': "Tu le caches derrière la poubelle, pour que personne ne le voie.", // nieuw, nalezen
    'c.parcel.w': "Un colis scanné comme livré doit vraiment être chez le client. Quand tu scannes ce qui s’est vraiment passé, le client peut recevoir son colis plus tard, et personne ne pense que tu l’as perdu.", // nieuw, nalezen
    'c.road': "En sécurité sur la route, et un travail juste", // nieuw, nalezen
    'c.road.b': "Ne tiens jamais ton téléphone en main quand tu conduis : c’est interdit. Utilise un support pour la navigation. Prends tes pauses, même les jours où il y a beaucoup de travail. Un colis lourd ? Utilise le diable, ou porte-le à deux. Du verglas ou de la neige ? Roule doucement : arriver en retard vaut mieux qu’un accident. Certaines entreprises disent que tu travailles à ton compte (zelfstandig). Mais qui décide de tes heures, de ta tournée et de tes vêtements ? Si c’est l’entreprise qui décide tout ça, il s’agit peut-être en fait d’un emploi salarié (in loondienst). Alors tu as souvent plus de droits, comme un salaire quand tu es malade. Plus d’informations dans la leçon “Les papiers, l’intégration et ton travail”. Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.", // nieuw, nalezen
    'c.road.p': "Je prends ma pause maintenant. Ensuite, je repars.", // nieuw, nalezen
    'c.road.s': { m: "L’entreprise dit que tu es indépendant. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?", f: "L’entreprise dit que tu es indépendante. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?", x: "L’entreprise dit que tu travailles à ton compte. Mais c’est elle qui décide de tes heures, de ta tournée et de tes vêtements. Que fais-tu ?" }, // nieuw, nalezen
    'c.road.o1': { m: "Tu demandes conseil : tu es peut-être salarié.", f: "Tu demandes conseil : tu es peut-être salariée.", x: "Tu demandes conseil : c’est peut-être un emploi salarié." }, // nieuw, nalezen
    'c.road.o2': "Rien : le contrat dit “indépendant”, donc c’est comme ça.", // nieuw, nalezen
    'c.road.o3': "Tu travailles plus d’heures, pour gagner autant.", // nieuw, nalezen
    'c.road.w': "Ce qui compte, c’est comment tu travailles vraiment, pas seulement le mot dans le contrat. Si l’entreprise décide comment, quand et où tu travailles, c’est souvent un emploi salarié. Alors tu as plus de droits.", // nieuw, nalezen
    'l.feelwell': "Se sentir bien au travail", // nieuw, nalezen
    'w.werkdruk': "la pression au travail (trop de travail en trop peu de temps)", // nieuw, nalezen
    'w.wakkerliggen': "rester éveillé au lit (tu n’arrives pas à dormir)", // nieuw, nalezen
    'w.ploegendienst': "le travail posté (équipes du matin, du soir et de nuit à tour de rôle)", // nieuw, nalezen
    'w.heimwee': "le mal du pays (ta maison te manque)", // nieuw, nalezen
    'w.familie': "la famille", // nieuw, nalezen
    'w.alleen': "seul", // nieuw, nalezen
    's.feelwell.1': "Je dors mal à cause du travail posté.", // nieuw, nalezen
    's.feelwell.2': { m: "C’est trop. Je n’y arrive pas seul.", f: "C’est trop. Je n’y arrive pas seule.", x: "C’est trop. Je n’y arrive pas sans aide." }, // nieuw, nalezen
    's.feelwell.3': "J’ai le mal du pays. Ma famille est loin.", // nieuw, nalezen
    'c.feelwell.q': "Ça va, toi ?", // nieuw, nalezen
    'c.feelwell.a': "Pas très bien. Souvent, je n’arrive pas à dormir.", // nieuw, nalezen
    'c.feelwell': "C’est trop ? Tu n’as pas à porter ça sans aide", // nieuw, nalezen
    'c.feelwell.b': "Tout le monde se sent parfois fatigué, stressé ou triste. Trop de travail (werkdruk), un mauvais sommeil à cause du travail posté ou le manque de ta famille peuvent rendre les choses lourdes. Tu n’as pas à porter ça sans aide, et dire “c’est trop” n’est pas une faiblesse. Parle à quelqu’un de confiance. Par exemple ton responsable, le médecin du travail (bedrijfsarts) ou ton médecin généraliste (huisarts). Ou la personne de confiance (vertrouwenspersoon), si ton entreprise en a une. Tu peux aussi demander toi-même un entretien avec le médecin du travail. Les médecins ne répètent pas à ton patron ce que tu as dit. Tu penses au suicide, ou tu t’inquiètes pour quelqu’un ? Appelle le 113 (gratuit, jour et nuit), ou chatte sur 113.nl.",
    'c.feelwell.p': "Ça ne va pas très bien. Je peux te parler un moment ?", // nieuw, nalezen
    'c.feelwell.s': { m: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatigué. Que fais-tu ?", f: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatiguée. Que fais-tu ?", x: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu ressens une grande fatigue. Que fais-tu ?" }, // nieuw, nalezen
    'c.feelwell.o1': "Tu en parles à ton responsable ou au médecin du travail.", // nieuw, nalezen
    'c.feelwell.o2': "Tu ne dis rien, et tu travailles plus dur et plus vite.", // nieuw, nalezen
    'c.feelwell.o3': "Tu restes à la maison, et tu ne dis à personne pourquoi.", // nieuw, nalezen
    'c.feelwell.w': "Le dire tôt n’est pas une faiblesse. Alors vous pouvez chercher ensemble une solution, par exemple d’autres horaires d’équipe. Tu n’as pas à faire ça sans aide.", // nieuw, nalezen
    'l.backtowork': "Reprendre le travail après une maladie", // nieuw, nalezen
    'w.opbouwen': "augmenter petit à petit (doucement, étape par étape)", // nieuw, nalezen
    'w.halvedagen': "les demi-journées (tu travailles une partie de la journée)", // nieuw, nalezen
    'w.lichtwerk': "le travail léger (pas lourd)", // nieuw, nalezen
    'w.zwaarwerk': "le travail lourd", // nieuw, nalezen
    'w.herstellen': "guérir, se rétablir", // nieuw, nalezen
    'w.welkomterug': "bon retour (bienvenue à nouveau)", // nieuw, nalezen
    's.backtowork.1': "Je commence par des demi-journées.", // nieuw, nalezen
    's.backtowork.2': "Je peux déjà faire du travail léger. Le travail lourd, pas encore.", // nieuw, nalezen
    's.backtowork.3': "Le médecin du travail dit : reprendre petit à petit.", // nieuw, nalezen
    'c.backtowork.q': "Bon retour ! Tu vas mieux ?", // nieuw, nalezen
    'c.backtowork.a': "Oui, ça va mieux. J’y vais doucement.", // nieuw, nalezen
    'c.backtowork': "Revenir étape par étape", // nieuw, nalezen
    'c.backtowork.b': "Tu vas mieux ? Dis à ton employeur que tu peux de nouveau travailler (betermelden). Après une longue maladie, tu reprends souvent étape par étape : d’abord moins d’heures, ou un travail plus léger. Le médecin du travail (bedrijfsarts) te conseille sur ce que tu peux faire. Malade depuis longtemps ? Alors ton employeur et toi faites ensemble un plan pour ton retour. C’est la loi (Wet verbetering poortwachter). Dis clairement ce que tu peux faire, et ce que tu ne peux pas encore faire. Tu n’as pas à dire à tes collègues quelle maladie tu as eue. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.", // nieuw, nalezen
    'c.backtowork.p': "Ça, je peux déjà le faire. Ça, pas encore.", // nieuw, nalezen
    'c.backtowork.s': "Tu as été malade pendant trois semaines. Le premier jour de ton retour, ton responsable te demande de porter des cartons lourds. Le médecin du travail a dit : seulement du travail léger pour l’instant. Que fais-tu ?", // nieuw, nalezen
    'c.backtowork.o1': "Tu dis calmement que tu peux faire du travail léger maintenant, et ce que tu ne peux pas encore faire.", // nieuw, nalezen
    'c.backtowork.o2': "Tu portes quand même les cartons : tu ne veux pas faire d’histoires.", // nieuw, nalezen
    'c.backtowork.o3': "Tu rentres chez toi sans rien dire.", // nieuw, nalezen
    'c.backtowork.w': "Ton responsable veut te voir revenir, et en bonne santé. Quand tu dis clairement ce que tu peux faire, il peut organiser le travail. En faire trop, trop tôt, peut te rendre malade à nouveau.", // nieuw, nalezen
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
    'c.measure': "Mesure deux fois, scie une fois", // nieuw, nalezen
    'c.measure.b': "Sur un chantier, les mesures sont souvent en millimètres. Donc “neuf cents” peut vouloir dire 90 centimètres. Tu as un doute ? Demande : “C’est en millimètres ou en centimètres ?” Répète le chiffre, et note-le. Mesure deux fois avant de scier ou de percer : une planche trop courte reste trop courte. Tu as fait une erreur ? Dis-le tout de suite. Alors l’équipe peut encore la réparer, et ça coûte moins cher.", // nieuw, nalezen
    'c.measure.p': "C’est en millimètres ou en centimètres ?", // nieuw, nalezen
    'c.measure.s': "Ton collègue crie une mesure. Tu n’as pas bien entendu. Que fais-tu ?", // nieuw, nalezen
    'c.measure.o1': "Tu répètes le chiffre, et tu demandes si c’est juste.", // nieuw, nalezen
    'c.measure.o2': "Tu scies la planche avec ce que tu crois avoir entendu.", // nieuw, nalezen
    'c.measure.o3': "Tu attends qu’il vienne voir lui-même.", // nieuw, nalezen
    'c.measure.w': "Une mauvaise mesure coûte du matériel et du temps. Répéter le chiffre prend deux secondes, et tout le monde le fait sur un chantier.", // nieuw, nalezen
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
    'c.siteday': "Un chantier rangé est un chantier sûr", // nieuw, nalezen
    'c.siteday.b': "Sur un chantier, ranger fait partie du travail, pour tout le monde. Des planches, des câbles et des déchets qui traînent font trébucher et tomber les gens. Alors range ta place pendant la journée, pas seulement à la fin. On trie les déchets : le bois, la pierre et le métal vont souvent dans des bennes différentes. Tu ne sais pas laquelle ? Demande. Tu vois un clou qui dépasse, ou un trou sans couvercle ? Répare-le si tu peux le faire sans danger, ou dis-le au chef de chantier (de uitvoerder). Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.siteday.p': "Je range ça. Comme ça, personne ne trébuche.", // nieuw, nalezen
    'c.siteday.s': "Des planches avec des clous sont sur le passage. Elles ne sont pas à toi. Que fais-tu ?", // nieuw, nalezen
    'c.siteday.o1': "Tu les mets sur le côté, ou tu le dis au chef de chantier.", // nieuw, nalezen
    'c.siteday.o2': "Tu passes par-dessus : ce ne sont pas tes planches.", // nieuw, nalezen
    'c.siteday.o3': "Tu attends : quelqu’un d’autre va les ranger.", // nieuw, nalezen
    'c.siteday.w': "Tout le monde utilise les mêmes passages. Celui qui voit un danger fait quelque chose : c’est normal sur un chantier.", // nieuw, nalezen
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
    'c.shifts': "Dis-le à l’équipe suivante", // nieuw, nalezen
    'c.shifts.b': "Une usine tourne souvent jour et nuit, avec des équipes qui se suivent. À la fin de ton service, un collègue prend ta place. Ne pars pas comme ça : attends que ton collègue soit là. Dis en quelques mots ce qui s’est passé : une panne, un produit qui n’était pas bon, quelque chose qui n’est pas fini. Beaucoup d’entreprises ont aussi une liste ou un écran pour ça. Un problème que tu ne transmets pas revient dans le service suivant, et alors personne ne sait pourquoi. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shifts.p': "La machine a eu une panne. Maintenant, elle marche de nouveau.", // nieuw, nalezen
    'c.shifts.s': "Ton service est fini. Ton collègue a cinq minutes de retard. Que fais-tu ?", // nieuw, nalezen
    'c.shifts.o1': "Tu attends, et tu le dis au chef d’équipe.", // nieuw, nalezen
    'c.shifts.o2': "Tu rentres à la maison : ton service est fini.", // nieuw, nalezen
    'c.shifts.o3': "Tu arrêtes la machine et tu pars.", // nieuw, nalezen
    'c.shifts.w': "Une machine en marche ne peut pas rester seule. Quand tu attends et que tu le signales, le travail continue en sécurité, et le chef d’équipe peut trouver une solution.", // nieuw, nalezen
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
    'c.signals': "Tu vois le résident tous les jours", // nieuw, nalezen
    'c.signals.b': "C’est souvent toi qui vois le plus un résident. Donc tu remarques en premier quand quelque chose est différent : il mange moins, il a plus mal, il est confus, il respire mal. Tu n’as pas besoin de savoir ce que c’est. Dis ce que tu vois, et dis quand tu l’as vu. Dis-le à l’infirmière le jour même, et note-le si c’est ta tâche. Ça a l’air grave ? N’attends pas : appelle l’infirmière tout de suite. Mieux vaut une fois de trop qu’une fois pas assez.", // nieuw, nalezen
    'c.signals.p': "Madame ne mange pas et elle a la tête qui tourne. Ce n’est pas comme d’habitude.", // nieuw, nalezen
    'c.signals.s': "Une résidente est silencieuse aujourd’hui et elle ne veut pas manger. D’habitude, elle parle beaucoup. Que fais-tu ?", // nieuw, nalezen
    'c.signals.o1': "Tu dis à l’infirmière ce que tu vois, aujourd’hui.", // nieuw, nalezen
    'c.signals.o2': "Tu attends quelques jours : ça va peut-être passer.", // nieuw, nalezen
    'c.signals.o3': "Tu lui donnes un cachet de l’armoire.", // nieuw, nalezen
    'c.signals.w': "Un petit changement peut être le premier signe d’une maladie. Ce n’est pas toi qui décides ce que c’est : c’est l’infirmière. Mais elle peut agir seulement si tu le lui dis.", // nieuw, nalezen
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
    'c.transfer': "D’abord dire, ensuite aider", // nieuw, nalezen
    'c.transfer.b': "Avant de toucher un résident, dis ce que tu vas faire : “Ik help u nu met opstaan.” Alors le résident n’a pas peur, et il peut aider. Laisse le résident faire ce qu’il peut encore faire : comme ça, il reste fort. Ne soulève jamais une personne sans aide. Utilise les aides qui sont là, comme le lève-personne, et travaille comme on te l’a montré. On ne te l’a pas encore montré ? Demande d’abord. Ton dos doit tenir toute une vie de travail. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.transfer.p': "Je vous aide à vous lever maintenant. C’est bon pour vous ?", // nieuw, nalezen
    'c.transfer.s': "Une résidente veut sortir du lit. Tu n’as pas encore appris à utiliser le lève-personne. Que fais-tu ?", // nieuw, nalezen
    'c.transfer.o1': "Tu demandes à un collègue qui connaît le lève-personne.", // nieuw, nalezen
    'c.transfer.o2': "Tu la soulèves toi-même : elle n’est pas lourde.", // nieuw, nalezen
    'c.transfer.o3': "Tu essaies le lève-personne : ça ne doit pas être difficile.", // nieuw, nalezen
    'c.transfer.w': "Mal soulever une personne peut faire mal au résident et à ton dos. Demander à un collègue prend quelques minutes. Une chute peut prendre des mois.", // nieuw, nalezen
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
    'c.dishes': "Du verre cassé : dis-le tout de suite", // nieuw, nalezen
    'c.dishes.b': "Dans une cuisine, le verre casse. C’est normal, et personne n’est fâché pour ça. Mais dis-le tout de suite, fort et clair : “Glas!” Ne ramasse pas les morceaux à mains nues : utilise une balayette. Du verre est tombé près des aliments, ou dans les glaçons ? Alors il faut jeter ces aliments ou ces glaçons, en entier. Un petit morceau de verre dans un plat est très dangereux pour un client. Le verre va dans sa propre poubelle, pas dans un sac que quelqu’un soulève. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.dishes.p': "Attention, du verre ! Je le ramasse tout de suite.", // nieuw, nalezen
    'c.dishes.s': "Un verre casse au-dessus des glaçons pour les boissons. Il y a beaucoup de monde. Que fais-tu ?", // nieuw, nalezen
    'c.dishes.o1': "Tu le dis, et tu jettes tous les glaçons.", // nieuw, nalezen
    'c.dishes.o2': "Tu enlèves les morceaux que tu vois.", // nieuw, nalezen
    'c.dishes.o3': "Tu ne dis rien : il y a trop de travail maintenant.", // nieuw, nalezen
    'c.dishes.w': "On ne voit pas les petits morceaux de verre dans les glaçons. De nouveaux glaçons ne coûtent presque rien. Un client avec du verre dans sa boisson peut être gravement blessé.", // nieuw, nalezen
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
    'c.rush': "Des mots courts quand il y a beaucoup de monde", // nieuw, nalezen
    'c.rush.b': "Quand il y a beaucoup de monde, les gens en cuisine parlent avec des mots courts : “Heet!”, “Achter!”, “Tafel zes!” Ce n’est pas impoli. C’est rapide et sûr : tout le monde sait où sont les casseroles chaudes et les couteaux. Crie toi-même “Heet!” ou “Achter!” quand tu passes derrière quelqu’un. Tu as entendu une commande ? Répète : “Ja, chef.” Alors le chef sait que tu as entendu. Quelqu’un t’a parlé sèchement pendant le coup de feu ? Souvent, c’est fini après le service. Ça reste désagréable ? Alors parles-en à un moment calme.", // nieuw, nalezen
    'c.rush.p': "Derrière ! J’ai une casserole chaude.", // nieuw, nalezen
    'c.rush.s': "Il y a beaucoup de monde. Le chef crie : “Tafel zes, nu!” Il ne dit pas s’il te plaît. Que fais-tu ?", // nieuw, nalezen
    'c.rush.o1': "Tu dis “Ja, chef”, et tu le fais.", // nieuw, nalezen
    'c.rush.o2': "Tu t’arrêtes, et tu dis qu’il est impoli.", // nieuw, nalezen
    'c.rush.o3': "Tu le fais, mais tu ne réponds rien.", // nieuw, nalezen
    'c.rush.w': "Pendant le coup de feu, parler court est normal, et ce n’est pas contre toi. Répéter montre que tu as entendu. Comme ça, la cuisine reste rapide et sûre.", // nieuw, nalezen
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
    'c.rounds': "Nettoyer là où des gens travaillent", // nieuw, nalezen
    'c.rounds.b': "Souvent, tu nettoies pendant que d’autres personnes travaillent encore. Dis bonjour, et demande : “Mag ik hier even schoonmaken?” La plupart des gens disent oui. Quelqu’un est en réunion ou au téléphone ? Alors reviens plus tard. Ne déplace pas les papiers sur un bureau, et ne les lis pas : nettoie autour. Tu as un temps fixe pour ta tournée. Le temps est trop court pour bien faire le travail ? Ne saute pas des pièces sans rien dire. Dis à ton responsable ce que tu n’as pas pu faire, et pourquoi.", // nieuw, nalezen
    'c.rounds.p': "Bonjour. Je peux nettoyer ici un moment ?", // nieuw, nalezen
    'c.rounds.s': "Ta tournée prend plus de temps aujourd’hui : une pièce était très sale. Deux bureaux ne sont pas faits. Que fais-tu ?", // nieuw, nalezen
    'c.rounds.o1': "Tu dis à ton responsable lesquels, et pourquoi.", // nieuw, nalezen
    'c.rounds.o2': "Tu rentres à la maison, et tu espères que personne ne le voit.", // nieuw, nalezen
    'c.rounds.o3': "Tu les fais très vite, sans les sols.", // nieuw, nalezen
    'c.rounds.w': "Un client qui trouve un bureau sale se plaint. Un responsable qui le sait peut l’expliquer, ou te donner plus de temps. Le dire, ce n’est pas un échec.", // nieuw, nalezen
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
    'c.colours': "Chaque couleur a sa place", // nieuw, nalezen
    'c.colours.b': "Beaucoup d’entreprises de nettoyage travaillent avec des couleurs. Chaque couleur de chiffon, d’éponge et de seau est pour un seul endroit. Souvent, le rouge est pour les toilettes, et le bleu est pour les bureaux et les tables. Comme ça, la saleté des toilettes ne va pas sur un bureau ou dans une cuisine. Les couleurs peuvent être différentes dans chaque entreprise, alors demande le premier jour. Un chiffon est sale, ou il est tombé par terre ? Prends-en un propre. Les chiffons utilisés vont dans le sac à linge, pas de nouveau sur le chariot. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.colours.p': "Ici, quelle couleur est pour les toilettes ?", // nieuw, nalezen
    'c.colours.s': "Tu n’as plus de chiffons bleus. Tu dois encore nettoyer trois bureaux. Tu as seulement des chiffons rouges. Que fais-tu ?", // nieuw, nalezen
    'c.colours.o1': "Tu vas d’abord chercher de nouveaux chiffons bleus.", // nieuw, nalezen
    'c.colours.o2': "Tu utilises un chiffon rouge : propre, c’est propre.", // nieuw, nalezen
    'c.colours.o3': "Tu réutilises un seul chiffon bleu pour les trois.", // nieuw, nalezen
    'c.colours.w': "Un système de couleurs marche seulement quand tout le monde le suit toujours. Alors personne ne doit se demander où un chiffon est passé.", // nieuw, nalezen
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
    'c.shophelp': "“Je ne sais pas”, ce n’est pas la fin", // nieuw, nalezen
    'c.shophelp.b': "Un client demande quelque chose et tu ne connais pas la réponse. Ce n’est pas grave : personne ne sait tout. Mais ne dis pas seulement “nee” ou “weet ik niet”, et ne t’en va pas. Dis : “Ik vraag het even voor u”, et va chercher un collègue. Un produit est épuisé ? Dis quand il revient, ou montre un produit qui lui ressemble. Regarde le client et dis bonjour, même quand tu es en train de remplir les rayons. Tu n’as pas compris la question ? Demande au client de la répéter, lentement.", // nieuw, nalezen
    'c.shophelp.p': "Je ne sais pas. Je vais demander pour vous.", // nieuw, nalezen
    'c.shophelp.s': "Une cliente demande un produit. Tu ne connais pas le mot. Que fais-tu ?", // nieuw, nalezen
    'c.shophelp.o1': "Tu dis : “Ik vraag het even voor u.”", // nieuw, nalezen
    'c.shophelp.o2': "Tu dis “nee”, et tu continues ton travail.", // nieuw, nalezen
    'c.shophelp.o3': "Tu montres un endroit au hasard, pour qu’elle s’en aille.", // nieuw, nalezen
    'c.shophelp.w': "Ça ne dérange pas un client que tu débutes ou que tu apprennes encore le néerlandais. Ce qui dérange un client, c’est de ne pas recevoir d’aide. Aller chercher un collègue, c’est du bon service.", // nieuw, nalezen
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
    'c.shoptrouble': "Un client en colère ou un voleur : toi d’abord", // nieuw, nalezen
    'c.shoptrouble.b': "Parfois, un client se met en colère, ou tu vois quelqu’un voler. Ta sécurité passe d’abord, toujours. Avec un client en colère : reste calme, ne crie pas toi aussi, et va chercher le gérant. Tu n’as pas besoin de régler ça sans aide. Tu vois un voleur ? Ne cours pas derrière lui, ne le retiens pas, et ne bloque pas la porte. Regarde bien ce que tu vois, et dis-le tout de suite au gérant ou à l’agent de sécurité. Les choses, on peut les remplacer. Toi, non. Tu as eu peur après ? Parles-en avec ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.shoptrouble.p': "Je vois quelqu’un qui met quelque chose dans son sac.", // nieuw, nalezen
    'c.shoptrouble.s': "Un homme met une bouteille sous son manteau et marche vers la sortie. Que fais-tu ?", // nieuw, nalezen
    'c.shoptrouble.o1': "Tu le dis au gérant ou à l’agent de sécurité.", // nieuw, nalezen
    'c.shoptrouble.o2': "Tu cours derrière lui et tu lui tiens le bras.", // nieuw, nalezen
    'c.shoptrouble.o3': "Tu te mets devant la porte.", // nieuw, nalezen
    'c.shoptrouble.w': "Un voleur qu’on arrête peut devenir violent. Le gérant et l’agent de sécurité savent quoi faire. Aucun produit ne vaut une blessure.", // nieuw, nalezen
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
    'c.plantcare': "Mains propres, plantes en bonne santé", // nieuw, nalezen
    'c.plantcare.b': "Les plantes aussi peuvent tomber malades. Un virus passe d’une plante à l’autre par les mains, les gants, les couteaux et les vêtements. Dans une serre, une seule plante malade peut vouloir dire que des milliers de plantes doivent partir. C’est pour ça qu’il y a des règles strictes à l’entrée : lave-toi les mains, porte les vêtements de travail de l’entreprise, et passe par le bac qui désinfecte les chaussures. Beaucoup de serres interdisent tes propres tomates, poivrons ou concombres dans ton repas. Tu vois une plante qui a l’air bizarre ? Ne la touche pas. Dis à ton responsable dans quelle rangée elle est. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.plantcare.p': "Il y a une plante malade dans la rangée douze.", // nieuw, nalezen
    'c.plantcare.s': "Tu vois une plante avec des taches jaunes bizarres. Que fais-tu ?", // nieuw, nalezen
    'c.plantcare.o1': "Tu la laisses, et tu le dis à ton responsable.", // nieuw, nalezen
    'c.plantcare.o2': "Tu l’arraches et tu l’emportes.", // nieuw, nalezen
    'c.plantcare.o3': "Tu coupes les feuilles qui ont des taches.", // nieuw, nalezen
    'c.plantcare.w': "Quand tu touches une plante malade, le virus part avec toi vers les plantes suivantes. Ton responsable sait comment l’enlever sans danger.", // nieuw, nalezen
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
    'c.outdoors': "Soleil, pluie et orage", // nieuw, nalezen
    'c.outdoors.b': "Dehors, tu travailles par tous les temps. Au soleil : couvre ta tête et ta peau, mets de la crème solaire, et bois souvent de l’eau. Sous la pluie : porte ta tenue de pluie et tes bottes, et mets des vêtements secs pendant ta pause. L’humidité et le froid te rendent malade et te ralentissent. Il y a de l’orage ? Alors arrête et va à l’intérieur, ou dans une voiture ou une camionnette. Pas sous un arbre, et pas au milieu d’un champ. Tu as besoin de vêtements de pluie ou de bottes pour le travail ? Demande-les à ton employeur avant de les acheter toi-même.", // nieuw, nalezen
    'c.outdoors.p': "Il va y avoir de l’orage. On rentre ?", // nieuw, nalezen
    'c.outdoors.s': "Tu es dans le champ. Tu entends le tonnerre tout près. Ta rangée est presque finie. Que fais-tu ?", // nieuw, nalezen
    'c.outdoors.o1': "Tu arrêtes, et tu vas à l’intérieur ou dans la camionnette.", // nieuw, nalezen
    'c.outdoors.o2': "Tu finis d’abord vite la rangée.", // nieuw, nalezen
    'c.outdoors.o3': "Tu attends sous le grand arbre.", // nieuw, nalezen
    'c.outdoors.w': "La foudre tombe sur le point le plus haut, et dans un champ plat, c’est toi. La rangée peut attendre un quart d’heure.", // nieuw, nalezen
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
    'c.drawing': "C’est le plan qui décide", // nieuw, nalezen
    'c.drawing.b': "Dans un atelier, tu fabriques ce que dit le plan, pas ce qui a l’air à peu près bon. Les mesures sont en millimètres, et un millimètre peut être de trop. Une pièce ne rentre pas ? Ne force pas, et n’agrandis pas le trou “juste un peu”. Mesure encore, et regarde le plan. Tu n’arrives pas à lire le plan, ou il manque une mesure ? Demande avant de commencer. Une question coûte une minute. Une mauvaise pièce coûte du matériel et des heures.", // nieuw, nalezen
    'c.drawing.p': "Je n’arrive pas à lire cette mesure. Tu peux regarder ?", // nieuw, nalezen
    'c.drawing.s': "Une pièce ne rentre pas : elle est trop grande d’un millimètre. Avec un marteau, elle rentrerait. Que fais-tu ?", // nieuw, nalezen
    'c.drawing.o1': "Tu mesures encore, et tu demandes quoi faire.", // nieuw, nalezen
    'c.drawing.o2': "Tu la fais rentrer avec le marteau.", // nieuw, nalezen
    'c.drawing.o3': "Tu meules un petit bout, et tu ne dis rien.", // nieuw, nalezen
    'c.drawing.w': "Une pièce qui rentre en forçant peut casser plus tard, chez le client. Quand tu le signales, on peut trouver la cause.", // nieuw, nalezen
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
    'c.weld': "Le métal chaud a l’air froid", // nieuw, nalezen
    'c.weld.b': "La soudure fait une lumière très forte. Ne la regarde pas sans masque de soudure, même de loin : tes yeux peuvent brûler, et tu le sens seulement des heures plus tard. Un collègue soude près de toi ? Regarde ailleurs, ou mets-toi derrière l’écran de protection. Du métal qu’on vient de souder ou de meuler a l’air normal, mais il est très chaud. Ne le prends pas à mains nues. La fumée de soudure est mauvaise pour tes poumons : allume l’aspiration. Une brûlure ? Refroidis-la tout de suite avec de l’eau, pendant au moins dix minutes, et signale-la. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.weld.p': "C’est déjà refroidi ?", // nieuw, nalezen
    'c.weld.s': "Un collègue soude à côté de toi. Tu n’as pas de masque de soudure. Que fais-tu ?", // nieuw, nalezen
    'c.weld.o1': "Tu regardes ailleurs, et tu te mets derrière l’écran de protection.", // nieuw, nalezen
    'c.weld.o2': "Tu regardes un moment : tu peux apprendre quelque chose.", // nieuw, nalezen
    'c.weld.o3': "Tu fermes les yeux à moitié.", // nieuw, nalezen
    'c.weld.w': "La lumière de la soudure brûle tes yeux, même de côté et de loin. Tu sens la douleur seulement plus tard, souvent la nuit.", // nieuw, nalezen
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
    'c.carparts': "La voiture est au client", // nieuw, nalezen
    'c.carparts.b': "Une voiture dans le garage n’est pas à toi : elle est au client. Mets une housse sur le siège et sur le volant avant de monter, et travaille avec des mains propres à l’intérieur. Laisse le siège, les rétroviseurs et la radio comme ils étaient. Tu as dû déplacer le siège ? Remets-le en place. Ne touche pas aux affaires personnelles dans la voiture. Tu as fait une rayure ou une tache ? Dis-le tout de suite à ton responsable. Un client qui la trouve à la maison ne revient pas.", // nieuw, nalezen
    'c.carparts.p': { m: "J’ai fait une rayure. Je suis désolé.", f: "J’ai fait une rayure. Je suis désolée.", x: "J’ai fait une rayure. Excusez-moi." }, // nieuw, nalezen
    'c.carparts.s': "Tu fais une petite rayure sur la portière de la voiture d’un client. Personne ne l’a vu. Que fais-tu ?", // nieuw, nalezen
    'c.carparts.o1': "Tu le dis tout de suite à ton responsable.", // nieuw, nalezen
    'c.carparts.o2': "Tu ne dis rien : elle est très petite.", // nieuw, nalezen
    'c.carparts.o3': "Tu frottes avec un chiffon, et tu espères.", // nieuw, nalezen
    'c.carparts.w': "Tout le monde fait une erreur un jour. Un garage peut réparer une rayure, ou le dire honnêtement au client. Une rayure cachée fait perdre au garage sa bonne réputation.", // nieuw, nalezen
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
    'c.carsafe': "Câbles orange et moteurs en marche", // nieuw, nalezen
    'c.carsafe.b': "Une voiture électrique ou hybride a une batterie avec un courant très fort. Les câbles de cette batterie sont orange. Ne les touche pas et ne les débranche pas : un mécanicien avec une formation spéciale doit d’abord mettre la voiture en sécurité. Il y a un panneau ou un cône près de la voiture ? Alors reste loin. Un moteur qui tourne à l’intérieur fait un gaz qu’on ne peut ni sentir ni voir, et il peut tuer. Donc : mets le tuyau sur le pot d’échappement, ou ouvre les portes. Tu sens une odeur d’essence ? Pas d’étincelles et pas de cigarette. Dis-le tout de suite à ton responsable. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.carsafe.p': "Cette voiture est déjà mise en sécurité ?", // nieuw, nalezen
    'c.carsafe.s': "Tu dois changer une roue sur une voiture électrique. Sous la voiture, tu vois un câble orange détaché. Que fais-tu ?", // nieuw, nalezen
    'c.carsafe.o1': "Tu ne touches à rien, et tu vas chercher le mécanicien formé.", // nieuw, nalezen
    'c.carsafe.o2': "Tu repousses le câble avec la main.", // nieuw, nalezen
    'c.carsafe.o3': "Tu le repousses avec un chiffon sec.", // nieuw, nalezen
    'c.carsafe.w': "La batterie d’une voiture électrique a assez de courant pour tuer, même quand la voiture est éteinte. Seule une personne qui a la formation peut toucher ces pièces.", // nieuw, nalezen
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
    'c.vancheck': "Regarde avant de rouler", // nieuw, nalezen
    'c.vancheck.b': "Fais le tour de la camionnette avant ta première tournée. Tu vois une bosse, une rayure ou un rétroviseur cassé ? Prends une photo, et signale-le avant de partir. Comme ça, tout le monde sait que le dégât était déjà là. Il s’est passé quelque chose pendant ta tournée ? Signale-le le jour même, même si c’est petit. Cacher un dégât donne de plus gros problèmes plus tard. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.vancheck.p': "Il y a un dégât sur la camionnette de livraison. Voici une photo.", // nieuw, nalezen
    'c.vancheck.s': "Le matin, tu vois une nouvelle bosse sur la camionnette. Ce n’est pas toi qui l’as faite. Que fais-tu ?", // nieuw, nalezen
    'c.vancheck.o1': "Tu prends une photo, et tu le signales avant de rouler.", // nieuw, nalezen
    'c.vancheck.o2': "Tu ne dis rien : ce n’est pas ta bosse.", // nieuw, nalezen
    'c.vancheck.o3': "Tu attends de voir si quelqu’un pose la question.", // nieuw, nalezen
    'c.vancheck.w': "Quand tu le signales avant de rouler, personne ne peut penser que c’est toi. Une photo avec l’heure est claire pour tout le monde.", // nieuw, nalezen
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
    'c.delay': "En retard ? Dis-le à temps", // nieuw, nalezen
    'c.delay.b': "Un bouchon ou une route fermée, ce n’est pas ta faute. Mais préviens le planificateur dès que tu sais que tu seras en retard. Alors le planificateur peut prévenir les clients, ou changer la tournée. Arrête-toi d’abord à un endroit sûr : n’appelle pas avec le téléphone en main quand tu conduis. Et ne roule pas plus vite pour rattraper le temps. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    'c.delay.p': "Je suis dans un bouchon. J’aurai une demi-heure de retard.", // nieuw, nalezen
    'c.delay.s': "Une route est fermée. La déviation te coûte trente minutes. Que fais-tu ?", // nieuw, nalezen
    'c.delay.o1': "Tu préviens le planificateur dès que tu peux t’arrêter en sécurité.", // nieuw, nalezen
    'c.delay.o2': "Tu roules plus vite pour rattraper le temps.", // nieuw, nalezen
    'c.delay.o3': "Tu ne dis rien : peut-être que personne ne le remarque.", // nieuw, nalezen
    'c.delay.w': "Quand le planificateur le sait tôt, les clients sont prévenus et personne n’attend pour rien. Rouler plus vite est dangereux, et ça ne fait presque pas gagner de temps.", // nieuw, nalezen
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
    'c.putdown': "Dis que tu le tiens", // nieuw, nalezen
    'c.putdown.b': "Tu portes quelque chose avec un collègue, ou un collègue te passe quelque chose de lourd ? Dis “Ik heb hem” quand tu le tiens bien. Comme ça, ton collègue sait qu’il peut lâcher sans danger. Tu veux lâcher toi-même ? Demande d’abord : “Heb je hem?” Et attends la réponse. C’est normal dans tous les lieux de travail. Ça évite que des choses tombent sur les pieds et les mains.", // nieuw, nalezen
    'c.putdown.p': "Je le tiens. Tu peux lâcher.", // nieuw, nalezen
    'c.putdown.s': "Un collègue te passe un carton lourd. Tu ne le tiens pas encore bien. Que fais-tu ?", // nieuw, nalezen
    'c.putdown.o1': "Tu dis “wacht”, et tu le tiens mieux d’abord.", // nieuw, nalezen
    'c.putdown.o2': "Tu ne dis rien : il le verra bien.", // nieuw, nalezen
    'c.putdown.o3': "Tu le prends vite, pour qu’il n’attende pas.", // nieuw, nalezen
    'c.putdown.w': "Ton collègue lâche quand il pense que tu le tiens. Un seul mot te donne le temps de bien le tenir.", // nieuw, nalezen
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
    'c.onoff': "Stop, c’est stop", // nieuw, nalezen
    'c.onoff.b': "Quelqu’un crie “Stop!” ? Arrête-toi tout de suite, même si tu ne sais pas pourquoi. Demande après. Ici, un mot court et fort, ce n’est pas de la colère : c’est comme ça que les collègues se protègent entre eux. Tu vois toi-même quelque chose de dangereux ? Crie “Stop!” toi aussi, même à quelqu’un qui travaille ici depuis des années. Personne ne trouve ça bizarre.", // nieuw, nalezen
    'c.onoff.p': "Stop ! Attends un moment.", // nieuw, nalezen
    'c.onoff.s': "Tu allumes une machine. Un collègue crie “Stop!”. Tu ne vois pas de problème. Que fais-tu ?", // nieuw, nalezen
    'c.onoff.o1': "Tu t’arrêtes tout de suite, et tu demandes pourquoi après.", // nieuw, nalezen
    'c.onoff.o2': "Tu continues : tu ne vois pas de problème.", // nieuw, nalezen
    'c.onoff.o3': "Tu demandes d’abord pourquoi tu dois t’arrêter.", // nieuw, nalezen
    'c.onoff.w': "Ton collègue voit peut-être quelque chose que tu ne vois pas. D’abord s’arrêter, ensuite parler : comme ça, tout le monde reste en sécurité.", // nieuw, nalezen
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
    'c.fillempty': "Fini ? Dis-le", // nieuw, nalezen
    'c.fillempty.b': "Tu as fini une tâche ? Dis-le : “Ik ben klaar.” Et demande ce que tu peux faire ensuite. Attendre sans rien dire que quelqu’un te voie, ça peut donner l’impression que tu ne veux pas travailler, même si ce n’est pas vrai. Les collègues qui demandent la tâche suivante reçoivent souvent un travail plus intéressant après un certain temps. Tu veux apprendre quelque chose de nouveau ? Demande-le aussi : “Mag ik dat ook leren?”", // nieuw, nalezen
    'c.fillempty.p': "J’ai fini. Qu’est-ce que je peux faire d’autre ?", // nieuw, nalezen
    'c.fillempty.s': "Tu as fini ta tâche. Ton responsable est occupé avec autre chose. Que fais-tu ?", // nieuw, nalezen
    'c.fillempty.o1': "Tu dis que tu as fini, et tu demandes la suite.", // nieuw, nalezen
    'c.fillempty.o2': "Tu attends que ton responsable te voie.", // nieuw, nalezen
    'c.fillempty.o3': "Tu prends une pause : ton travail est fini.", // nieuw, nalezen
    'c.fillempty.w': "Un responsable ne peut pas tout voir. Quand tu dis que tu as fini, le travail continue, et tu montres que tu veux en faire plus.", // nieuw, nalezen
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
    'c.order': "Beaucoup de tâches d’un coup ? Demande par quoi commencer", // nieuw, nalezen
    'c.order.b': "Parfois, on te donne trois tâches dans une seule phrase. C’est difficile à retenir, même pour les gens qui parlent bien néerlandais. Demande laquelle vient en premier : “Wat moet ik eerst doen?” Tu peux aussi noter les tâches, ou les compter sur tes doigts et les redire. Tu en as oublié une ? Retourne demander. C’est mieux que de deviner.", // nieuw, nalezen
    'c.order.p': "Ça fait beaucoup. Je dois faire quoi d’abord ?", // nieuw, nalezen
    'c.order.s': "Ton responsable te donne trois tâches, très vite. Tu te souviens seulement de la première. Que fais-tu ?", // nieuw, nalezen
    'c.order.o1': "Tu demandes tout de suite à réentendre les tâches.", // nieuw, nalezen
    'c.order.o2': "Tu fais la première, et tu espères te souvenir du reste.", // nieuw, nalezen
    'c.order.o3': "Tu ne fais rien : tu ne connais pas les trois.", // nieuw, nalezen
    'c.order.w': "Demander tout de suite prend dix secondes. Plus tard, ton responsable sera peut-être parti, et alors tu attends ou tu devines.", // nieuw, nalezen
  },
};

export default t;
