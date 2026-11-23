import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'Cum aplici pentru un post',
    'l.cv': 'CV-ul și scrisoarea ta',
    'w.cv': 'CV-ul',
    'w.motivatie': 'motivația (de ce vrei postul)',
    'w.ervaring': 'experiența',
    'w.opleiding': 'studiile, formarea',
    'w.vaardigheden': 'abilitățile',
    'w.referentie': 'referința (cineva care poate vorbi despre munca ta)',
    's.cv.1': 'Acesta e CV-ul meu.',
    's.cv.2': 'Am experiență în construcții.',
    's.cv.3': 'Vorbesc trei limbi.',
    'c.cv.q': 'Ai o referință?',
    'c.cv.a': 'Da, fostul meu șef.',
    'l.interview': 'Interviul de angajare',
    'w.sollicitatiegesprek': 'interviul de angajare',
    'w.begroeten': 'a saluta',
    'w.vertellen': 'a povesti, a spune',
    'w.vraagstellen': 'a pune o întrebare',
    'w.salaris': 'salariul',
    'w.functie': 'postul, funcția',
    's.interview.1': 'Am un interviu de angajare.',
    's.interview.2': 'Încă învăț olandeză.',
    's.interview.3': 'Când primesc un răspuns de la dumneavoastră?',
    'c.interview.q': 'Spune-mi ceva despre tine.',
    'c.interview.a': 'Am lucrat cinci ani într-un depozit.',
    'u.contract': 'Munca și contractele',
    'l.findwork': 'Cum găsești de lucru',
    'w.vacature': 'postul liber',
    'w.uitzendbureau': 'agenția de muncă temporară',
    'w.solliciteren': 'a aplica pentru un post',
    'w.contract': 'contractul',
    'w.tekenen': 'a semna',
    'w.tijdelijk': 'temporar',
    's.findwork.1': 'Vreau să aplic pentru un post.',
    's.findwork.2': 'Contractul e pe perioadă determinată sau nedeterminată?',
    's.findwork.3': 'Pot primi o copie a contractului?',
    'c.findwork.q': 'Ce fel de muncă cauți?',
    'c.findwork.a': 'Caut de lucru într-un depozit.',
    'l.contract': 'Contractul tău',
    'w.werkgever': 'angajatorul',
    'w.uren': 'orele',
    'w.oproepkracht': 'lucrătorul la chemare',
    'w.proeftijd': 'perioada de probă',
    'w.opzegtermijn': 'perioada de preaviz',
    'w.cao': 'contractul colectiv de muncă',
    's.contract.1': 'Câte ore lucrez pe săptămână?',
    's.contract.2': 'Cât durează perioada de probă?',
    's.contract.3': 'Ce contract colectiv de muncă se aplică în cazul meu?',
    'c.contract.q': 'Poți veni mâine la muncă?',
    'c.contract.a': 'Da, la ce oră trebuie să fiu acolo?',
    'l.agency': 'Munca prin agenție',
    'w.uitzendkracht': 'lucrătorul temporar (prin agenție)',
    'w.intercedent': 'persoana de contact de la agenție',
    'w.urenbriefje': 'fișa de ore (pontajul)',
    'w.opdracht': 'misiunea (munca la o anumită firmă)',
    'w.verlengen': 'a prelungi',
    'w.uitbetalen': 'a plăti (a da banii)',
    's.agency.1': 'Lucrez printr-o agenție de muncă temporară.',
    's.agency.2': 'Mi se va prelungi misiunea?',
    's.agency.3': 'Când se termină misiunea mea?',
    'c.agency.q': 'Ți-ai transmis orele?',
    'c.agency.a': 'Da, ieri, în aplicație.',
    'u.papers': 'Locuința și actele',
    'l.bsn': 'BSN-ul și actele tale',
    'w.bsn': 'numărul de identificare (numărul de serviciu cetățean)',
    'w.identiteitsbewijs': 'actul de identitate',
    'w.gemeente': 'primăria',
    'w.inschrijven': 'a te înregistra',
    'w.adres': 'adresa',
    'w.zorgverzekering': 'asigurarea de sănătate',
    's.bsn.1': 'Mă înregistrez la primărie.',
    's.bsn.2': 'Mi s-a schimbat adresa.',
    's.bsn.3': 'Mă conectez cu DigiD.',
    'c.bsn.q': 'Pot să-ți văd actul de identitate?',
    'c.bsn.a': 'Da, iată pașaportul meu.',
    'l.housing': 'Locuința',
    'w.kamer': 'camera',
    'w.huur': 'chiria',
    'w.huurcontract': 'contractul de închiriere',
    'w.borg': 'garanția',
    'w.huisbaas': 'proprietarul',
    'w.inhouden': 'a reține (din salariu)',
    's.housing.1': 'Cât e chiria pe săptămână?',
    's.housing.2': 'Primesc garanția înapoi?',
    's.housing.3': 'Vreau un contract de închiriere separat.',
    'c.housing.q': 'Îți reținem chiria din salariu.',
    'c.housing.a': 'Atunci vreau asta în scris.',
    'u.pay': 'Salariul',
    'l.payslip': 'Fluturașul de salariu',
    'w.loon': 'salariul, plata',
    'w.bruto': 'brut (înainte de impozit)',
    'w.netto': 'net (ce primești)',
    'w.loonstrook': 'fluturașul de salariu',
    'w.belasting': 'impozitul',
    'w.uurloon': 'plata pe oră',
    's.payslip.1': 'Cât e plata mea pe oră?',
    's.payslip.2': 'Fluturașul meu de salariu nu e corect.',
    's.payslip.3': 'Netul e mai mic decât brutul.',
    'c.payslip.q': 'Ai primit fluturașul de salariu?',
    'c.payslip.a': 'Da, dar lipsesc niște ore.',
    'l.extra': 'Bani în plus',
    'w.vakantiegeld': 'prima de vacanță (banii de vacanță)',
    'w.overuren': 'orele suplimentare',
    'w.toeslag': 'sporul (plata în plus)',
    'w.minimumloon': 'salariul minim',
    'w.bankrekening': 'contul bancar',
    'w.betalen': 'a plăti',
    's.extra.1': 'Primesc spor pentru munca de noapte?',
    's.extra.2': 'Orele suplimentare sunt plătite?',
    's.extra.3': 'Salariul meu intră în contul bancar.',
    'c.extra.q': 'Poți rămâne azi încă două ore?',
    'c.extra.a': 'Da, îmi notezi orele suplimentare?',
    'u.house': 'Regulile casei',
    'l.phone': 'Telefonul tău la muncă',
    'w.telefoon': 'telefonul',
    'w.appen': 'a trimite un mesaj (pe aplicație)',
    'w.kluisje': 'dulăpiorul (cu cheie)',
    'w.uitzetten': 'a închide (a opri)',
    'w.prive': 'privat, personal',
    'w.foto': 'fotografia',
    's.phone.1': 'Telefonul meu e în dulăpior.',
    's.phone.2': 'Îmi închid telefonul.',
    's.phone.3': 'Am voie să fac o poză aici?',
    'c.phone.q': 'Fără telefon lângă utilaj, bine?',
    'c.phone.a': 'Bine, trimit mesaje în pauză.',
    'l.smoking': 'Fumatul',
    'w.roken': 'a fuma',
    'w.rookplek': 'locul pentru fumat',
    'w.verboden': 'interzis',
    'w.buiten': 'afară',
    'w.esigaret': 'țigara electronică (vape)',
    'w.brandbaar': 'inflamabil (ia foc ușor)',
    's.smoking.1': 'Aici e interzis fumatul.',
    's.smoking.2': 'Unde e locul pentru fumat?',
    's.smoking.3': 'Fumez doar afară, în pauză.',
    'c.smoking.q': 'Vii la o țigară?',
    'c.smoking.a': 'Nu, încă nu am pauză.',
    'l.clock': 'Pontajul și punctualitatea',
    'w.inklokken': 'a te ponta la intrare',
    'w.uitklokken': 'a te ponta la ieșire',
    'w.pasje': 'cardul (de angajat)',
    'w.prikklok': 'ceasul de pontaj',
    'w.optijd': 'la timp',
    'w.rooster': 'programul de lucru',
    's.clock.1': 'Mă pontez la ora șase.',
    's.clock.2': 'Mi-am uitat cardul.',
    's.clock.3': 'Unde e programul de lucru?',
    'c.clock.q': 'Mă pontezi tu în locul meu?',
    'c.clock.a': 'Nu, nu e voie.',
    'l.hygiene': 'Alcool, droguri și igienă',
    'w.alcohol': 'alcoolul',
    'w.medicijn': 'medicamentul',
    'w.handenwassen': 'a te spăla pe mâini',
    'w.werkkleding': 'hainele de lucru',
    'w.haarnetje': 'boneta (plasa pentru păr)',
    'w.schoon': 'curat',
    's.hygiene.1': 'Spală-te pe mâini înainte de muncă.',
    's.hygiene.2': 'Alcoolul și drogurile sunt interzise.',
    's.hygiene.3': 'Hainele mele de lucru sunt curate.',
    'c.hygiene.q': 'Porți boneta?',
    'c.hygiene.a': 'Da, și mi-am scos inelul.',
    'u.social': 'Cum te înțelegi cu ceilalți',
    'l.smalltalk': 'Discuții scurte și pauze',
    'w.weekend': 'weekendul',
    'w.koffie': 'cafeaua',
    'w.gezellig': 'plăcut, cald (împreună)',
    'w.weer': 'vremea',
    'w.verjaardag': 'ziua de naștere',
    'w.gefeliciteerd': 'felicitări',
    's.smalltalk.1': 'Cum a fost weekendul tău?',
    's.smalltalk.2': 'Pot să stau cu voi?',
    's.smalltalk.3': 'Azi e vreme frumoasă.',
    'c.smalltalk.q': 'Ce ai făcut weekendul ăsta?',
    'c.smalltalk.a': 'Am jucat fotbal cu prietenii.',
    'l.mistakes': 'Feedback și greșeli',
    'w.fout': 'greșeala',
    'w.compliment': 'complimentul',
    'w.feedback': "feedbackul (ce spune cineva despre munca ta)", // nieuw, nalezen
    'w.uitleggen': 'a explica',
    'w.leren': 'a învăța',
    'w.verbeteren': 'a îmbunătăți, a corecta',
    's.mistakes.1': 'Scuze, am greșit.',
    's.mistakes.2': 'Poți să explici?',
    's.mistakes.3': 'Mulțumesc pentru compliment!',
    'c.mistakes.q': 'Bravo!',
    'c.mistakes.a': 'Mulțumesc, mă bucur să aud asta.',
    'l.respect': 'Respect pentru toți',
    'w.respect': 'respectul',
    'w.gelijk': 'egal',
    'w.grens': 'limita',
    'w.neezeggen': 'a spune nu',
    'w.pesten': 'a hărțui, a bate joc de cineva',
    'w.vertrouwenspersoon': 'persoana de încredere (consilierul confidențial)',
    's.respect.1': 'Aici toți sunt egali.',
    's.respect.2': 'Asta nu e în regulă pentru mine.',
    's.respect.3': 'Stop, aici e limita mea.',
    'c.respect.q': { m: 'Ce s-a întâmplat? Pari trist.', f: 'Ce s-a întâmplat? Pari tristă.', x: 'Ce s-a întâmplat? Ceva te supără?' }, // x: nieuw, nalezen
    'c.respect.a': 'Un coleg mă hărțuiește.',
    'u.rights': 'Reguli și drepturi',
    'l.health': 'Muncă sigură și sănătoasă',
    'w.arbowet': 'legea securității și sănătății în muncă',
    'w.veilig': 'sigur',
    'w.werktijden': 'orele de lucru',
    'w.rust': 'odihna',
    'w.beschermingsmiddelen': 'echipamentul de protecție',
    'w.arbeidsinspectie': 'Inspecția Muncii',
    's.health.1': 'Am dreptul la pauză.',
    's.health.2': 'Munca trebuie să fie sigură.',
    's.health.3': 'Raportez asta la Inspecția Muncii.',
    'c.health.q': 'Acum trebuie să iei o pauză.',
    'c.health.a': 'Bine, mă așez puțin.',
    'l.rights': 'Drepturile tale',
    'w.recht': 'dreptul',
    'w.discriminatie': 'discriminarea',
    'w.vakbond': 'sindicatul',
    'w.juridischloket': 'biroul gratuit de ajutor juridic',
    'w.klacht': 'plângerea',
    'w.ontslag': 'concedierea',
    's.rights.1': 'Vreau să fac o plângere.',
    's.rights.2': { m: 'Sunt membru de sindicat.', f: 'Sunt membră de sindicat.', x: 'Fac parte din sindicat.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.rights.3': 'Asta e discriminare.',
    'c.rights.q': 'Semnează aici pentru concedierea ta.',
    'c.rights.a': 'Nu, încă nu semnez.',
    'l.mustmay': 'Trebuie sau poți alege?', // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'a trebui, a fi obligat', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'a nu fi nevoie, a nu fi obligat', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'necesar, nevoie', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'voluntar, la alegere', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'alegerea', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'regula', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': 'Trebuie să semnez asta?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': 'Nu, nu e nevoie să semnezi.', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'Asta e regula: casca e obligatorie.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': 'Trebuie să fac ore suplimentare sâmbătă?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'Nu, nu e nevoie. E voluntar.', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Concediu", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': 'Zile libere',
    'w.vakantiedagen': 'zilele de concediu',
    'w.verlof': 'concediul',
    'w.aanvragen': 'a cere, a solicita',
    'w.feestdag': 'sărbătoarea legală',
    'w.vrij': 'liber (nu lucrezi)',
    'w.calamiteitenverlof': 'concediul pentru urgențe',
    's.leave.1': 'Vreau să cer concediu.',
    's.leave.2': { m: 'Sunt liber de sărbătoarea legală?', f: 'Sunt liberă de sărbătoarea legală?', x: 'Am liber de sărbătoarea legală?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.leave.3': 'Am o urgență acasă.',
    'c.leave.q': 'Când vrei să pleci în concediu?',
    'c.leave.a': 'În iulie, trei săptămâni.',
    'l.illness': { m: 'Bolnav acasă', f: 'Bolnavă acasă', x: 'Acasă din cauza bolii' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekmelden': { m: 'a anunța că ești bolnav', f: 'a anunța că ești bolnavă', x: 'a anunța că te-ai îmbolnăvit' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.betermelden': 'a anunța că te-ai făcut bine',
    'w.bedrijfsarts': 'medicul de medicina muncii',
    'w.ziekte': 'boala',
    'w.doorbetalen': 'a plăti în continuare',
    'w.wachtdag': 'ziua de așteptare (fără plată)',
    's.illness.1': { m: 'Anunț că sunt bolnav.', f: 'Anunț că sunt bolnavă.', x: 'Anunț că m-am îmbolnăvit.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.illness.2': 'Am o programare la medicul de medicina muncii.',
    's.illness.3': 'Mâine mă întorc la muncă.',
    'c.illness.q': 'Ce ai mai exact?',
    'c.illness.a': 'Despre asta vorbesc cu medicul de medicina muncii.',
    'u.exploit': 'Cunoaște-ți drepturile: exploatarea',
    'l.warning': 'Semne de avertizare',
    'w.uitbuiting': 'exploatarea',
    'w.paspoort': 'pașaportul',
    'w.schuld': 'datoria',
    'w.dreigen': 'a amenința',
    'w.onderbetaald': 'plătit prea puțin',
    'w.afpakken': 'a lua (de la cineva)',
    's.warning.1': 'Șeful meu are pașaportul meu.',
    's.warning.2': 'Nu primesc fluturaș de salariu.',
    's.warning.3': 'Trebuie să dau înapoi o datorie.',
    'c.warning.q': 'Dă-mi mie pașaportul, și gata.',
    'c.warning.a': 'Nu, puteți face doar o copie.',
    'l.gethelp': 'Cum ceri ajutor',
    'w.politie': 'poliția',
    'w.anoniem': 'fără numele tău (anonim)',
    'w.melden': 'a raporta, a anunța',
    'w.hulp': 'ajutorul',
    'w.gevaar': 'pericolul',
    'w.bang': 'speriat',
    's.gethelp.1': 'Vreau să raportez ceva.',
    's.gethelp.2': 'Pot face asta fără să-mi dau numele?',
    's.gethelp.3': 'Mi-e frică de șeful meu.',
    'c.gethelp.q': 'Cu ce te pot ajuta?',
    'c.gethelp.a': { m: 'La muncă sunt tratat rău.', f: 'La muncă sunt tratată rău.', x: 'La muncă mă tratează rău.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'u.contact': 'Apeluri și mesaje către muncă',
    'l.callin': 'Cum anunți la telefon',
    'w.telefoontje': 'apelul (telefonic)',
    'w.terugbellen': 'a suna înapoi',
    'w.bereikbaar': 'de găsit (la telefon)',
    'w.reden': 'motivul',
    'w.overmorgen': 'poimâine',
    'w.inspreken': 'a lăsa un mesaj vocal',
    's.callin.1': 'Bună, sunt Ali.',
    's.callin.2': 'Cred că mă întorc poimâine.',
    's.callin.3': 'Mă puteți suna înapoi?',
    'c.callin.q': 'Când te întorci?',
    'c.callin.a': 'Cred că luni.',
    'l.texting': 'Mesaje și aplicația cu programul',
    'w.bericht': 'mesajul',
    'w.app': 'aplicația',
    'w.reageren': 'a răspunde, a reacționa',
    'w.ruilen': 'a face schimb',
    'w.kijken': 'a se uita, a verifica',
    'w.groet': 'salutul (la final de mesaj)',
    's.texting.1': 'Întârzii zece minute.',
    's.texting.2': 'Vrea cineva să facă schimb de tură cu mine?',
    's.texting.3': 'Mă uit în aplicație în fiecare zi.',
    'c.texting.q': 'Poți face o tură în plus sâmbătă?',
    'c.texting.a': 'Da, răspund imediat în aplicație.',
    'u.grow': 'Diplome și dezvoltare',
    'l.certs': 'Certificate',
    'w.certificaat': 'certificatul',
    'w.cursus': 'cursul',
    'w.examen': 'examenul',
    'w.slagen': 'a lua (un examen)',
    'w.heftruckcertificaat': 'certificatul de motostivuitorist',
    'w.halen': 'a obține (un certificat)',
    's.certs.1': 'Am un certificat de siguranță VCA.',
    's.certs.2': 'Vreau să fac un curs.',
    's.certs.3': 'Angajatorul plătește cursul?',
    'c.certs.q': 'Ai certificat de motostivuitorist?',
    'c.certs.a': 'Nu, dar aș vrea să-l obțin.',
    'l.diploma': 'Diploma și formarea ta',
    'w.diploma': 'diploma',
    'w.waarderen': 'a cere evaluarea (diplomei)',
    'w.training': 'instruirea, formarea',
    'w.verplicht': 'obligatoriu',
    'w.werktijd': 'timpul de lucru',
    'w.verderkomen': 'a avansa',
    's.diploma.1': 'Am o diplomă din țara mea.',
    's.diploma.2': 'Această instruire e obligatorie?',
    's.diploma.3': 'Vreau să avansez în munca mea.',
    'c.diploma.q': 'Vrei să urmezi o formare?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.diploma.a': 'Da, te rog! Cine o plătește?',
    'u.health': 'Sănătatea',
    'l.doctor': 'Doctor sau 112?',
    'w.huisarts': 'medicul de familie',
    'w.huisartsenpost': 'serviciul de gardă al medicilor de familie (seara, noaptea și în weekend)',
    'w.apotheek': 'farmacia',
    'w.recept': 'rețeta',
    'w.spoed': 'urgent',
    'w.ambulance': 'ambulanța',
    's.doctor.1': 'Vreau o programare la medicul de familie.',
    's.doctor.2': 'Unde e farmacia?',
    's.doctor.3': 'E urgent.',
    'c.doctor.q': 'Serviciul de gardă al medicilor de familie, cu ce vă pot ajuta?',
    'c.doctor.a': 'Fiul meu are febră mare.',
    'l.insurance': 'Asigurarea de sănătate',
    'w.premie': 'prima (plata lunară)',
    'w.eigenrisico': 'franșiza (costurile pe care le plătești tu întâi)',
    'w.zorgtoeslag': 'ajutorul de la stat pentru asigurarea de sănătate',
    'w.verzekeraar': 'asigurătorul',
    'w.permaand': 'pe lună',
    'w.vergoeden': 'a acoperi (costurile)',
    's.insurance.1': 'Plătesc o primă în fiecare lună.',
    's.insurance.2': 'Asta e acoperit?',
    's.insurance.3': 'Cer ajutorul pentru asigurarea de sănătate.',
    'c.insurance.q': 'La ce asigurător ești?',
    'c.insurance.a': 'Scrie pe cardul meu de asigurare.',
    'u.money': 'Bani și scrisori',
    'l.letters': 'Scrisori oficiale',
    'w.brief': 'scrisoarea',
    'w.post': 'poșta',
    'w.belastingdienst': 'Administrația fiscală',
    'w.aangifte': 'declarația de impozit',
    'w.inkomen': 'venitul',
    'w.terugbetalen': 'a da înapoi (a rambursa)',
    's.letters.1': 'Nu înțeleg această scrisoare.',
    's.letters.2': 'Mă ajuți cu această scrisoare?',
    's.letters.3': 'Venitul meu s-a schimbat.',
    'c.letters.q': 'Ți-ai făcut deja declarația de impozit?',
    'c.letters.a': 'Nu, o fac înainte de 1 mai.',
    'l.scams': 'Atenție la înșelătorii',
    'w.pincode': 'codul PIN',
    'w.link': 'linkul',
    'w.oplichter': 'escrocul',
    'w.sms': 'mesajul (SMS)',
    'w.controleren': 'a verifica',
    'w.nep': 'fals',
    's.scams.1': 'Nu-mi dau niciodată codul PIN.',
    's.scams.2': 'Nu dau clic pe link.',
    's.scams.3': 'Acest mesaj e fals.',
    'c.scams.q': 'Vă sunăm de la bancă. Care este codul dumneavoastră PIN?',
    'c.scams.a': 'Nu-l dau. Închid.',
    'u.travel': 'Drumul la muncă',
    'l.bike': 'Cu bicicleta',
    'w.fiets': 'bicicleta',
    'w.fietspad': 'pista de biciclete',
    'w.licht': 'lumina, farul',
    'w.slot': 'lacătul',
    'w.stoplicht': 'semaforul',
    'w.bel': 'soneria (clopoțelul)',
    's.bike.1': 'Merg cu bicicleta la muncă.',
    's.bike.2': 'Aprinde-ți lumina!',
    's.bike.3': 'Încuie-ți bicicleta.',
    'c.bike.q': 'Cum ajungi la muncă?',
    'c.bike.a': 'Cu bicicleta, douăzeci de minute.',
    'l.transit': 'Transport public și costuri de drum',
    'w.bus': 'autobuzul',
    'w.trein': 'trenul',
    'w.inchecken': 'a valida cardul la urcare (check-in)',
    'w.uitchecken': 'a valida cardul la coborâre (check-out)',
    'w.bankpas': 'cardul bancar',
    'w.reiskosten': 'decontarea drumului',
    's.transit.1': 'Fac check-in cu cardul bancar.',
    's.transit.2': 'Nu uita să faci check-out.',
    's.transit.3': 'Unde e stația de autobuz?',
    'c.transit.q': 'Vii cu trenul?',
    'c.transit.a': 'Nu, cu autobuzul. Oprește chiar la ușă.',
    'u.lost': 'Când îți pierzi locul de muncă',
    'l.ww': 'Ajutorul de șomaj',
    'w.uitkering': 'indemnizația (bani de la stat)',
    'w.ww': 'ajutorul de șomaj',
    'w.werkloos': 'șomer',
    'w.uwv': 'UWV (instituția pentru muncă și indemnizații)',
    'w.ontslagnemen': 'a demisiona',
    'w.werkzoekende': 'persoana care caută de lucru',
    's.ww.1': 'Cer ajutor de șomaj la UWV.',
    's.ww.2': { m: 'Sunt șomer.', f: 'Sunt șomeră.', x: 'Nu am loc de muncă.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.ww.3': 'Contractul meu se termină.',
    'c.ww.q': 'Ce faci acum, că ți se termină contractul?',
    'c.ww.a': 'Cer imediat ajutor de șomaj.',
    'l.newjob': 'Cum cauți o muncă nouă',
    'w.baan': 'locul de muncă',
    'w.zoeken': 'a căuta',
    'w.bewaren': 'a păstra',
    'w.bijwerken': 'a actualiza',
    'w.gratis': 'gratuit',
    'w.nooit': 'niciodată',
    's.newjob.1': 'Caut un loc de muncă nou.',
    's.newjob.2': 'Îmi păstrez fluturașii de salariu.',
    's.newjob.3': 'Căutarea unui loc de muncă e gratuită.',
    'c.newjob.q': 'Te putem suna când avem de lucru?',
    'c.newjob.a': 'Da, vă rog. Acesta e numărul meu.',
    'u.build': 'Pe șantier',
    'l.tools': 'Unelte și materiale',
    'w.steiger': 'schela',
    'w.ladder': 'scara',
    'w.boor': 'bormașina',
    'w.hamer': 'ciocanul',
    'w.beton': 'betonul',
    'w.kraan': 'macaraua',
    's.tools.1': 'Dă-mi puțin ciocanul.',
    's.tools.2': 'Scara e sprijinită de schelă.',
    's.tools.3': 'Betonul e încă ud.',
    'c.tools.q': 'Unde e bormașina?',
    'c.tools.a': 'În dubă, în spate.',
    'l.site': 'Siguranța pe șantier',
    'w.valbeveiliging': 'protecția împotriva căderii (hamul)',
    'w.last': 'încărcătura',
    'w.gat': 'gaura',
    'w.vallen': 'a cădea',
    'w.risico': 'riscul',
    'w.weigeren': 'a refuza',
    's.site.1': 'Atenție, încărcătură deasupra capului!',
    's.site.2': 'Poartă protecția împotriva căderii.',
    's.site.3': 'Întâi fac o verificare a riscurilor de ultim moment.',
    'c.site.q': 'Poți ajuta puțin pe acoperiș?',
    'c.site.a': 'Da, dar întâi îmi pun protecția împotriva căderii.',
    'u.factory': 'În fabrică',
    'l.line': 'Banda și mașinile',
    'w.lopendeband': 'banda rulantă, linia',
    'w.machine': 'mașina (utilajul)',
    'w.storing': 'defecțiunea',
    'w.noodstop': 'butonul de oprire de urgență',
    'w.inpakken': 'a ambala',
    'w.productie': 'producția',
    's.line.1': 'Banda s-a oprit.',
    's.line.2': 'E o defecțiune.',
    's.line.3': 'Ambalez produsele.',
    'c.line.q': 'Cum merge pe bandă?',
    'c.line.a': 'Bine, dar mașina e foarte lentă.',
    'l.quality': 'Calitatea',
    'w.kwaliteit': 'calitatea',
    'w.product': 'produsul',
    'w.afkeuren': 'a respinge',
    'w.beschadigd': 'deteriorat',
    'w.etiket': 'eticheta',
    'w.lijst': 'lista',
    's.quality.1': 'Acest produs e deteriorat.',
    's.quality.2': 'Eticheta nu e corectă.',
    's.quality.3': 'Trebuie să resping asta?',
    'c.quality.q': 'De ce e pus deoparte?',
    'c.quality.a': 'Eticheta e strâmbă.',
    'u.care': 'În îngrijire',
    'l.client': 'Clientul și îngrijirea zilnică',
    'w.client': 'clientul (persoana de care ai grijă)',
    'w.wassen': 'a spăla',
    'w.aankleden': 'a se îmbrăca, a îmbrăca pe cineva',
    'w.eten': 'mâncarea',
    'w.rolstoel': 'scaunul cu rotile',
    'w.verpleegkundige': 'asistenta medicală',
    's.client.1': 'Ați dormit bine?',
    's.client.2': 'Vă ajut să vă îmbrăcați.',
    's.client.3': 'Mai doriți ceva de mâncare?',
    'c.client.q': 'Mă puteți ajuta cu haina?',
    'c.client.a': 'Sigur, vă ajut.',
    'l.privacy': 'Confidențialitate și siguranță în îngrijire',
    'w.privacy': 'confidențialitatea',
    'w.hygiene': 'igiena',
    'w.doorgeven': 'a transmite (informații)',
    'w.geheim': 'secret',
    'w.toestemming': 'permisiunea',
    'w.gevallen': 'căzut',
    's.privacy.1': 'Doamna a căzut.',
    's.privacy.2': 'Îi transmit asistentei.',
    's.privacy.3': 'Acasă nu vorbesc despre clienți.',
    'c.privacy.q': 'Îi poți da domnului Jansen pastilele?',
    'c.privacy.a': 'Nu, nu am voie. O chem pe asistentă.',
    'u.horeca': 'În hoteluri și restaurante',
    'l.kitchen': 'În bucătărie',
    'w.keuken': 'bucătăria',
    'w.snijden': 'a tăia',
    'w.pan': 'tigaia',
    'w.koelcel': 'camera frigorifică',
    'w.allergie': 'alergia',
    'w.datum': 'data',
    's.kitchen.1': 'Pune carnea în camera frigorifică.',
    's.kitchen.2': 'Taie ceapa mărunt.',
    's.kitchen.3': 'Sunt nuci în asta?',
    'c.kitchen.q': 'Un oaspete are alergie la nuci.',
    'c.kitchen.a': 'Îl întreb pe bucătarul-șef.',
    'l.service': 'Servirea oaspeților',
    'w.gast': 'oaspetele (clientul)',
    'w.bestelling': 'comanda',
    'w.rekening': 'nota de plată',
    'w.menu': 'meniul',
    'w.afruimen': 'a strânge (masa)',
    'w.fooi': 'bacșișul',
    's.service.1': 'Ce doriți să beți?',
    's.service.2': 'Pot să vă iau comanda?',
    's.service.3': 'Strâng masa.',
    'c.service.q': 'Ne aduceți nota, vă rog?',
    'c.service.a': 'Sigur, vin imediat.',
    'u.clean': 'Curățenie',
    'l.cleaning': 'Materiale de curățenie',
    'w.dweil': 'mopul',
    'w.emmer': 'găleata',
    'w.schoonmaakmiddel': 'produsul de curățenie',
    'w.stofzuiger': 'aspiratorul',
    'w.stoffen': 'a șterge praful',
    'w.prullenbak': 'coșul de gunoi',
    's.cleaning.1': 'Unde e găleata?',
    's.cleaning.2': 'Dau cu aspiratorul pe hol.',
    's.cleaning.3': 'Golește coșul de gunoi.',
    'c.cleaning.q': 'Ai terminat cu toaletele?',
    'c.cleaning.a': 'Aproape, mai sunt două.',
    'l.cleansafe': 'Curățenie în siguranță',
    'w.glad': 'alunecos',
    'w.bordje': 'semnul (panoul)',
    'w.mengen': 'a amesteca',
    'w.damp': 'vaporii',
    'w.luchten': 'a aerisi',
    'w.spoelen': 'a clăti',
    's.cleansafe.1': 'Atenție, alunecos!',
    's.cleansafe.2': 'Pune semnul pe podea.',
    's.cleansafe.3': 'Nu amesteca niciodată produse de curățenie.',
    'c.cleansafe.q': 'Pot să trec pe aici?',
    'c.cleansafe.a': 'Atenție, podeaua e încă alunecoasă.',
    'c.cv': 'Un CV scurt', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': { m: 'Aici, un CV e scurt: 1 sau 2 pagini. Scrie datele de contact, experiența de muncă, studiile, limbile și abilitățile. Nu e nevoie de poză. Nu trebuie să scrii religia, vârsta sau starea civilă. Fii sincer despre ce știi să faci. Roagă pe cineva să-ți verifice olandeza.', f: 'Aici, un CV e scurt: 1 sau 2 pagini. Scrie datele de contact, experiența de muncă, studiile, limbile și abilitățile. Nu e nevoie de poză. Nu trebuie să scrii religia, vârsta sau starea civilă. Fii sinceră despre ce știi să faci. Roagă pe cineva să-ți verifice olandeza.', x: 'Aici, un CV e scurt: 1 sau 2 pagini. Scrie datele de contact, experiența de muncă, studiile, limbile și abilitățile. Nu e nevoie de poză. Nu trebuie să scrii religia, vârsta sau starea civilă. Spune sincer ce știi să faci. Roagă pe cineva să-ți verifice olandeza.' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'Îmi citești CV-ul? E corectă olandeza mea?',
    'c.cv.s': 'Ai lucrat 3 ani într-o fabrică în țara ta, dar nu ai diplomă. Ce scrii în CV?',
    'c.cv.o1': 'Scrii sincer munca și ce ai făcut acolo.',
    'c.cv.o2': 'Nu scrii nimic, pentru că nu ai diplomă.',
    'c.cv.o3': 'Scrii că ai diplomă, ca să arăți mai bine.',
    'c.cv.w': { m: 'Experiența de muncă contează, și cea din străinătate. E important să fii sincer: angajatorii pot verifica.', f: 'Experiența de muncă contează, și cea din străinătate. E important să fii sinceră: angajatorii pot verifica.', x: 'Experiența de muncă contează, și cea din străinătate. E important să spui adevărul: angajatorii pot verifica.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.interview': 'Interviul de angajare',
    'c.interview.b': 'Vino la timp: cu 5–10 minute mai devreme. Salută politicos și uită-te la persoană. Spune pe scurt ce știi să faci. E normal și bine să pui și tu întrebări, de exemplu despre ore, despre muncă sau despre instruire. La final poți întreba când vei primi un răspuns. E în regulă să spui că încă înveți olandeză. Un angajator nu are voie să te întrebe despre religie, o sarcină (dacă aștepți un copil) sau sănătatea ta. Nu trebuie să răspunzi: poți spune politicos că preferi să nu răspunzi.',
    'c.interview.p': 'Pot să întreb și eu ceva? Câte ore pe săptămână e munca?',
    'c.interview.s': 'La finalul interviului, angajatorul întreabă: „Heb je nog vragen?” Ce faci?',
    'c.interview.o1': 'Pui o întrebare despre ore sau instruire.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.o2': 'Spui nu, pentru că nu e politicos să pui întrebări.',
    'c.interview.o3': 'Vorbești mai mult despre tine, ca să arăți că lucrezi bine.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.interview.w': 'Întrebările arată că te interesează postul. Aici, angajatorii se așteaptă des la ele.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': 'Cere contractul pe hârtie',
    'c.findwork.b': 'Cere mereu un contract scris și o copie pentru tine. Citește-l înainte să semnezi sau roagă o persoană de încredere să te ajute. O agenție de muncă temporară (uitzendbureau) nu are voie să-ți ceară bani ca să-ți găsească de lucru. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.findwork.p': 'Pot să citesc întâi contractul?',
    'c.findwork.s': 'Un angajator nou spune: „Semnează aici acum. Îl poți citi mai târziu.” Ce faci?',
    'c.findwork.o1': 'Ceri timp să-l citești sau o copie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': 'Semnezi repede, ca să nu pierzi postul.',
    'c.findwork.o3': 'Semnezi și apoi ceri o copie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.w': 'Contractul spune cât câștigi și ce drepturi ai. Un angajator bun îți dă timp să-l citești. Poți întreba despre tot ce nu înțelegi.',
    'c.contract': 'Perioada de probă și munca la chemare',
    'c.contract.b': { m: 'Perioada de probă (proeftijd) trebuie să fie în scris. Nu e permisă într-un contract de 6 luni sau mai scurt. Într-un contract mai lung, dar mai scurt de 2 ani, e de cel mult 1 lună. Într-un contract de 2 ani sau mai lung, sau pe perioadă nedeterminată, e de cel mult 2 luni. Lucrezi la chemare (oproepkracht)? De obicei, angajatorul trebuie să te cheme cu cel puțin 4 zile înainte. Dacă te cheamă mai târziu, nu trebuie să vii. Un cao poate scurta aceste 4 zile, dar nu la mai puțin de 1 zi. Dacă îți anulează munca mai târziu de atât, tot primești plata. Dacă te cheamă pentru mai puțin de 3 ore de muncă, de obicei ești plătit pentru 3 ore. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.', f: 'Perioada de probă (proeftijd) trebuie să fie în scris. Nu e permisă într-un contract de 6 luni sau mai scurt. Într-un contract mai lung, dar mai scurt de 2 ani, e de cel mult 1 lună. Într-un contract de 2 ani sau mai lung, sau pe perioadă nedeterminată, e de cel mult 2 luni. Lucrezi la chemare (oproepkracht)? De obicei, angajatorul trebuie să te cheme cu cel puțin 4 zile înainte. Dacă te cheamă mai târziu, nu trebuie să vii. Un cao poate scurta aceste 4 zile, dar nu la mai puțin de 1 zi. Dacă îți anulează munca mai târziu de atât, tot primești plata. Dacă te cheamă pentru mai puțin de 3 ore de muncă, de obicei ești plătită pentru 3 ore. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.', x: 'Perioada de probă (proeftijd) trebuie să fie în scris. Nu e permisă într-un contract de 6 luni sau mai scurt. Într-un contract mai lung, dar mai scurt de 2 ani, e de cel mult 1 lună. Într-un contract de 2 ani sau mai lung, sau pe perioadă nedeterminată, e de cel mult 2 luni. Lucrezi la chemare (oproepkracht)? De obicei, angajatorul trebuie să te cheme cu cel puțin 4 zile înainte. Dacă te cheamă mai târziu, nu trebuie să vii. Un cao poate scurta aceste 4 zile, dar nu la mai puțin de 1 zi. Dacă îți anulează munca mai târziu de atât, tot primești plata. Dacă te cheamă pentru mai puțin de 3 ore de muncă, de obicei primești plata pentru 3 ore. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.' }, // nalezen: feit gelijk getrokken // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.p': 'Perioada de probă e în contractul meu?',
    'c.contract.s': 'Contractul tău e pe 3 luni. Scrie în el: „Proeftijd: 1 maand”. Ce faci?',
    'c.contract.o1': 'Întrebi despre asta: această perioadă de probă nu este valabilă.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.contract.o2': 'Nu faci nimic. Orice contract are perioadă de probă.',
    'c.contract.o3': 'Semnezi și nu întrebi niciodată, pentru că șeful știe cel mai bine.',
    'c.contract.w': 'O perioadă de probă într-un contract de 6 luni sau mai scurt nu e valabilă. E normal să întrebi calm. Dacă răspunsul nu e clar, cere sfatul sindicatului sau al Juridisch Loket.',
    'c.agency': 'Agenția e angajatorul tău',
    'c.agency.b': 'Dacă lucrezi printr-o agenție de muncă temporară (uitzendbureau), angajatorul tău e agenția, nu firma unde lucrezi. Contractul și salariul le primești de la agenție, iar pentru lucrătorii temporari există un cao (uitzend-cao). Ai dreptul la același salariu ca angajații firmei care fac aceeași muncă. Primești și prima de vacanță (vakantiegeld) și strângi zile de concediu. Ține-ți propria listă cu orele lucrate și verifică-le pe fluturașul de salariu. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.agency.x': 'Un angajator din altă țară te-a trimis aici pentru o vreme? Atunci lucrezi prin detașare (gedetacheerd). Cere angajatorului formularul A1: arată unde ai asigurare. Aici primești totuși cel puțin salariul minim olandez.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'Pe fluturașul meu sunt prea puține ore.',
    'c.agency.s': 'Pe fluturașul de salariu scrie 32 de ore, dar tu ai lucrat 38. Ce faci?',
    'c.agency.o1': 'Îi arăți agenției lista ta cu ore și ceri să corecteze.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': 'Nu spui nimic, pentru că sunt doar 6 ore.',
    'c.agency.o3': 'Îi ceri șefului de la firma unde lucrezi să-ți plătească cele 6 ore.',
    'c.agency.w': 'Agenția te plătește, deci agenția trebuie să corecteze greșeala. Lista ta cu zile și ore ajută. E dreptul tău să întrebi.',
    'c.bsn': 'BSN-ul tău: păstrează-l în siguranță',
    'c.bsn.b': 'Primești un BSN (burgerservicenummer) când te înregistrezi la primărie (gemeente). Ești aici doar pentru scurt timp? Atunci te înregistrezi la un ghișeu RNI. Ai nevoie de BSN ca să lucrezi, pentru impozite, pentru asigurarea de sănătate și pentru un cont bancar. Angajatorul are nevoie de actul tău de identitate și de BSN. Nu da BSN-ul sau o copie a actului de identitate oricui. Întreabă mai întâi de ce au nevoie de ele. Te muți? Înregistrează noua adresă la gemeente în 5 zile. DigiD e contul tău pentru site-urile statului: nu-l da niciodată altcuiva. Locuiești sau lucrezi aici? Atunci de obicei trebuie să ai asigurare de sănătate olandeză (zorgverzekering). Rezolv-o repede. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.bsn.p': 'De ce aveți nevoie de BSN-ul meu?',
    'c.bsn.s': 'Un necunoscut îți oferă de lucru pe WhatsApp. Îți cere poza cu pașaportul și datele de conectare DigiD. Ce faci?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o1': 'Nu dai niciodată datele de conectare DigiD. Verifici cine e.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': 'Trimiți repede tot, ca să primești postul.',
    'c.bsn.o3': 'Trimiți doar poza cu pașaportul.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': 'Cu DigiD-ul tău sau cu o copie a actului tău, alții îți pot folosi numele, de exemplu pentru împrumuturi sau ajutoare sociale. Un angajator adevărat are nevoie de actul tău și de BSN, dar niciodată de datele tale de conectare DigiD.',
    'c.housing': 'Locuință de la angajator',
    'c.housing.b': 'Angajatorul sau agenția îți aranjează locuința? Atunci contractul de închiriere trebuie să fie separat de contractul de muncă. Cere un contract de închiriere scris și o dovadă pentru ce plătești. Chiria poate fi reținută din salariu doar dacă ai fost de acord în scris și în limitele legii: verifică pe fluturașul de salariu. Garanția (borg) e de cel mult 2 luni de chirie de bază. O primești înapoi când pleci, minus pagubele reale. Înregistrează-te cu adresa ta la gemeente. Locuință nesigură, amenințări sau costuri nedrepte? Raportează la gemeente (meldpunt) și cere sfat gratuit de la Juridisch Loket sau de la un serviciu de consiliere pentru locuințe. Pentru o problemă cu prețul chiriei sau cu costurile de servicii există Huurcommissie. Ți se termină munca? Cere sfat înainte să pleci din locuință. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.',
    'c.housing.p': 'Pot primi o dovadă că am plătit?',
    'c.housing.s': 'Ți se termină munca. Agenția spune: „Trebuie să pleci din casă mâine.” Ce faci?',
    'c.housing.o1': 'Ceri întâi sfat la Juridisch Loket.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.housing.o2': 'Pleci imediat și uiți de garanție.',
    'c.housing.o3': 'Rămâi și nu mai răspunzi agenției.',
    'c.housing.w': 'Contractul de închiriere are regulile lui, separat de muncă. Un sfat gratuit te ajută să-ți cunoști drepturile, de exemplu când trebuie să pleci și ce se întâmplă cu garanția.',
    'c.payslip': 'Verifică fluturașul de salariu',
    'c.payslip.b': 'Bruto e salariul tău înainte de impozit. Netto e ce primești în contul bancar: bruto minus impozitul și contribuțiile (loonheffing). Angajatorul trebuie să-ți dea un fluturaș de salariu (loonstrook). Verifică orele și plata pe fiecare fluturaș și notează-ți orele lucrate. Ai două locuri de muncă? Folosește reducerea de impozit (loonheffingskorting) doar la un singur angajator. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.payslip.p': 'Am lucrat mai multe ore. Poți verifica?',
    'c.payslip.s': 'Pe fluturașul tău sunt mai puține ore decât ai lucrat. Ce faci?',
    'c.payslip.o1': 'Îi arăți notițele tale și îi ceri șefului să verifice.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': 'Nu spui nimic, pentru că nu vrei probleme.',
    'c.payslip.o3': 'Aștepți o lună: pe următorul fluturaș o să fie corect.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': 'Greșelile pe fluturaș se întâmplă. E normal să întrebi și e dreptul tău. Notițele tale cu zile și ore ajută mult.',
    'c.extra': 'Prima de vacanță și salariul minim',
    'c.extra.b': 'Primești prima de vacanță (vakantiegeld): cel puțin 8% din salariul brut. Majoritatea angajatorilor o plătesc o dată pe an, în mai sau iunie. Salariul tău nu poate fi niciodată mai mic decât salariul minim legal (minimumloon); pentru lucrătorii sub 21 de ani, salariul minim e mai mic. Suma se schimbă în fiecare an: verific-o pe rijksoverheid.nl. Un cao dă des plată în plus pentru ore suplimentare sau muncă de noapte. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.extra.p': 'Când primesc prima de vacanță?',
    'c.extra.s': 'Un coleg spune: „În mai primești bani în plus de la șef.” Ce sunt banii ăștia?',
    'c.extra.o1': 'Prima de vacanță: cel puțin 8% din salariul brut.',
    'c.extra.o2': 'Un cadou, doar pentru cei mai buni lucrători.',
    'c.extra.o3': 'Al 13-lea salariu: încă un salariu pe o lună, pentru toți.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': 'Prima de vacanță e dreptul tău, nu un cadou. O strângi cu fiecare oră lucrată. Dacă pleci de la firmă înainte să fie plătită, o primești cu ultimul salariu.',
    'c.phone': 'Telefonul tău la muncă',
    'c.phone.b': 'Multe locuri de muncă nu permit telefonul în timpul lucrului, mai ales lângă utilaje și motostivuitoare sau în producția de alimente. Poate fi nesigur sau neigienic. Folosește telefonul în pauză. Aștepți un apel urgent de la familie? Spune-i întâi șefului. Nu face poze sau filmări la muncă fără permisiune: gândește-te la intimitatea colegilor și la secretele firmei. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.phone.p': 'Copilul meu e bolnav. Pot să-mi las telefonul pornit?',
    'c.phone.s': 'Mama ta e la spital și s-ar putea să te sune azi. Telefoanele nu sunt permise în zona de lucru. Ce faci?',
    'c.phone.o1': { m: 'Îi spui șefului și întrebi cum poți fi găsit.', f: 'Îi spui șefului și întrebi cum poți fi găsită.', x: 'Îi spui șefului și întrebi cum te pot găsi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.o2': 'Ții telefonul în buzunar și răspunzi pe ascuns lângă utilaj.',
    'c.phone.o3': 'Stai acasă fără să spui nimănui de ce.',
    'c.phone.w': 'Șefii înțeleg de obicei o urgență în familie. Când știu, pot găsi o soluție sigură, de exemplu o oră fixă la care să te uiți pe telefon.',
    'c.smoking': 'Fumatul doar afară',
    'c.smoking.b': 'În Olanda, fumatul în interiorul unui loc de muncă e interzis prin lege. Asta e valabil și pentru țigările electronice (vape). Din 2022, camerele pentru fumat din interiorul firmelor nu mai sunt permise. Fumează doar afară, în locul permis de angajator, și de obicei doar în pauză. Pauzele de fumat în plus nu sunt un drept: stabilește-le cu șeful. Nu fuma niciodată lângă lucruri care iau foc ușor, cum ar fi combustibilul sau cutiile dintr-un depozit. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.smoking.p': 'Pot să fumez afară în pauză?',
    'c.smoking.s': 'E frig și plouă. Un coleg spune: „Fumează în magazie, nu vede nimeni.” Ce faci?',
    'c.smoking.o1': 'Spui nu și fumezi afară, în pauză.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': 'Fumezi repede în magazie, doar de data asta.',
    'c.smoking.o3': 'Folosești în schimb vape-ul înăuntru, pentru că asta e permis.',
    'c.smoking.w': 'Fumatul înăuntru e împotriva legii și poate provoca un incendiu. Nici vape-ul nu e permis înăuntru. Când respecți regula, toți rămân în siguranță.',
    'c.clock': { m: 'Pontează-te singur', f: 'Pontează-te singură', x: 'Pontează-te personal' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.b': { m: 'Pontează-te singur la intrare și la ieșire, în momentul în care chiar începi și termini lucrul. Nu ponta niciodată un coleg și nu lăsa pe nimeni să-ți folosească cardul. Asta se consideră fraudă și poate duce la concediere. Vei întârzia? Sună înainte să înceapă tura. Verifică dacă orele pontate se potrivesc cu fluturașul de salariu. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', f: 'Pontează-te singură la intrare și la ieșire, în momentul în care chiar începi și termini lucrul. Nu ponta niciodată un coleg și nu lăsa pe nimeni să-ți folosească cardul. Asta se consideră fraudă și poate duce la concediere. Vei întârzia? Sună înainte să înceapă tura. Verifică dacă orele pontate se potrivesc cu fluturașul de salariu. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', x: 'Pontează-te personal la intrare și la ieșire, în momentul în care chiar începi și termini lucrul. Nu ponta niciodată un coleg și nu lăsa pe nimeni să-ți folosească cardul. Asta se consideră fraudă și poate duce la concediere. Vei întârzia? Sună înainte să înceapă tura. Verifică dacă orele pontate se potrivesc cu fluturașul de salariu. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.p': 'Am uitat să mă pontez la ieșire. Poți corecta?',
    'c.clock.s': 'Un coleg îți dă cardul lui: „Pontează-mă, întârzii 20 de minute.” Ce faci?',
    'c.clock.o1': 'Spui nu și îi spui să-l sune pe șef.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': 'O faci doar o dată, pentru că e prietenul tău.',
    'c.clock.o3': 'Îl pontezi și îi spui șefului mai târziu.',
    'c.clock.w': 'Să pontezi pe altcineva se consideră fraudă, pentru amândoi. Când spui nu, îți protejezi colegul și propriul loc de muncă.',
    'c.hygiene': 'Minte limpede, mâini curate',
    'c.hygiene.b': { m: 'Alcoolul și drogurile la muncă, sau să vii la muncă după ce le-ai consumat, sunt interzise în aproape toate firmele. E foarte periculos lângă utilaje și motostivuitoare și poate duce la concediere. Un medicament te face somnoros sau amețit? Spune-i șefului, ca să poți face o muncă sigură. Nu trebuie să spui ce medicament. În producția de alimente regulile de igienă sunt stricte: spală-te pe mâini, poartă haine de lucru curate, bonetă dacă e nevoie și fără bijuterii. Ai vărsături sau diaree? Anunță înainte să începi. Ține-ți locul de muncă ordonat. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', f: 'Alcoolul și drogurile la muncă, sau să vii la muncă după ce le-ai consumat, sunt interzise în aproape toate firmele. E foarte periculos lângă utilaje și motostivuitoare și poate duce la concediere. Un medicament te face somnoroasă sau amețită? Spune-i șefului, ca să poți face o muncă sigură. Nu trebuie să spui ce medicament. În producția de alimente regulile de igienă sunt stricte: spală-te pe mâini, poartă haine de lucru curate, bonetă dacă e nevoie și fără bijuterii. Ai vărsături sau diaree? Anunță înainte să începi. Ține-ți locul de muncă ordonat. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', x: 'Alcoolul și drogurile la muncă, sau să vii la muncă după ce le-ai consumat, sunt interzise în aproape toate firmele. E foarte periculos lângă utilaje și motostivuitoare și poate duce la concediere. Un medicament îți dă somnolență sau amețeală? Spune-i șefului, ca să poți face o muncă sigură. Nu trebuie să spui ce medicament. În producția de alimente regulile de igienă sunt stricte: spală-te pe mâini, poartă haine de lucru curate, bonetă dacă e nevoie și fără bijuterii. Ai vărsături sau diaree? Anunță înainte să începi. Ține-ți locul de muncă ordonat. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.p': { m: 'Iau un medicament. Mă face somnoros.', f: 'Iau un medicament. Mă face somnoroasă.', x: 'Iau un medicament. Îmi dă somnolență.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.s': { m: 'Doctorul îți dă un medicament care te face somnoros. Mâine trebuie să conduci un motostivuitor. Ce faci?', f: 'Doctorul îți dă un medicament care te face somnoroasă. Mâine trebuie să conduci un motostivuitor. Ce faci?', x: 'Doctorul îți dă un medicament care îți dă somnolență. Mâine trebuie să conduci un motostivuitor. Ce faci?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o1': 'Îi spui șefului înainte să începi.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': 'Nu spui nimic și conduci foarte încet.',
    'c.hygiene.o3': 'Nu mai iei medicamentul, fără să-l întrebi pe doctor.',
    'c.hygiene.w': 'Șeful nu trebuie să știe ce medicament iei, doar că acum nu poți conduce sau lucra cu utilaje. Așa rămâi în siguranță, tu și colegii tăi.',
    'c.smalltalk': 'Discuții scurte în pauză',
    'c.smalltalk.b': { m: 'Discuțiile scurte în pauză sunt normale. Te ajută să te simți parte din echipă. Ești binevenit la masa de cafea sau de prânz. Subiecte ușoare sunt weekendul, vremea, sportul și vacanțele. Întrebările despre salariu, religie sau viața privată a cuiva sunt des prea personale la început. De ziua lor, oamenii aduc des ceva bun pentru echipă (trakteren), de exemplu prăjitură. E ziua unui coleg? Spune „Gefeliciteerd!”.', f: 'Discuțiile scurte în pauză sunt normale. Te ajută să te simți parte din echipă. Ești binevenită la masa de cafea sau de prânz. Subiecte ușoare sunt weekendul, vremea, sportul și vacanțele. Întrebările despre salariu, religie sau viața privată a cuiva sunt des prea personale la început. De ziua lor, oamenii aduc des ceva bun pentru echipă (trakteren), de exemplu prăjitură. E ziua unui coleg? Spune „Gefeliciteerd!”.', x: 'Discuțiile scurte în pauză sunt normale. Te ajută să te simți parte din echipă. Te poți așeza oricând la masa de cafea sau de prânz. Subiecte ușoare sunt weekendul, vremea, sportul și vacanțele. Întrebările despre salariu, religie sau viața privată a cuiva sunt des prea personale la început. De ziua lor, oamenii aduc des ceva bun pentru echipă (trakteren), de exemplu prăjitură. E ziua unui coleg? Spune „Gefeliciteerd!”.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.p': 'La mulți ani!',
    'c.smalltalk.s': 'În pauză, colegii stau împreună la o masă. Încă nu-i cunoști bine. Ce faci?',
    'c.smalltalk.o1': 'Întrebi „Mag ik bij jullie zitten?” și te alături cu o discuție scurtă.',
    'c.smalltalk.o2': { m: 'Mănânci singur afară în fiecare zi, ca să nu-i deranjezi.', f: 'Mănânci singură afară în fiecare zi, ca să nu-i deranjezi.', x: 'Mănânci afară, fără colegi, în fiecare zi, ca să nu-i deranjezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.o3': 'Îl întrebi pe fiecare coleg cât câștigă.',
    'c.smalltalk.w': 'E binevenit să te așezi la masă și te ajută să cunoști echipa. O întrebare simplă ca „Hoe was je weekend?” e un început bun.',
    'c.mistakes': 'Greșelile sunt normale',
    'c.mistakes.b': 'Toată lumea greșește la muncă. Spune repede, ca greșeala să poată fi reparată: „Sorry, ik heb een fout gemaakt.” Să ascunzi o greșeală e văzut ca mult mai rău decât greșeala în sine. Feedbackul e despre muncă, nu despre tine ca persoană. Ai primit un compliment? Spune simplu mulțumesc. Nu e clar ce să faci mai bine? Întreabă: „Kun je het uitleggen?”',
    'c.mistakes.p': 'Scuze, am greșit. Cum pot repara?',
    'c.mistakes.s': 'Ai pus 20 de cutii pe paletul greșit. Încă nu a văzut nimeni. Ce faci?',
    'c.mistakes.o1': 'Îi spui șefului și ajuți la reparare.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': 'Nu spui nimic și speri că nu observă nimeni.',
    'c.mistakes.o3': 'Spui că a făcut-o un coleg.',
    'c.mistakes.w': 'O greșeală spusă devreme e ușor de reparat. Sinceritatea construiește încredere, iar asta contează mai mult decât să nu greșești niciodată.',
    'c.respect': 'Respect pentru toți',
    'c.respect.b': 'La muncă toți sunt egali și toți sunt tratați cu respect, indiferent de gen, origine, religie sau orientare sexuală. Tu decizi despre contactul fizic. Strângerea de mână e obișnuită. Dar poți saluta și în alt mod politicos, de exemplu cu o înclinare din cap și un zâmbet. Apoi explică scurt. Glumele despre originea sau religia cuiva, amenințările, hărțuirea (pesten) și comportamentul sexual nedorit nu sunt acceptate. Poți raporta la șef sau la o persoană de încredere (vertrouwenspersoon), dacă firma ta are una.',
    'c.respect.p': 'Prefer să nu dau mâna, dar mă bucur să te salut.',
    'c.respect.s': 'Un coleg face des glume despre religia ta. I-ai cerut să se oprească, dar continuă. Ce faci?',
    'c.respect.o1': 'Îi spui șefului sau persoanei de încredere (vertrouwenspersoon).',
    'c.respect.o2': 'Râzi împreună cu el, ca să nu fie probleme.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': 'Faci și tu glume despre originea lui.',
    'c.respect.w': 'Astfel de glume nu sunt acceptate la muncă. E normal să raportezi: firma trebuie să păstreze locul de muncă sigur pentru toți.',
    'c.health': 'Pauze și ore de lucru',
    'c.health.b': 'Legea îți protejează sănătatea. Lucrezi mai mult de 5,5 ore? Atunci ai cel puțin 30 de minute de pauză (poate fi de 2 ori câte 15 minute). Mai mult de 10 ore? Atunci cel puțin 45 de minute. Un cao poate avea reguli de pauză puțin diferite. Poți lucra cel mult 12 ore într-o tură și 60 de ore într-o săptămână. Ai sub 18 ani? Atunci ai voie să lucrezi mai puține ore. Angajatorul trebuie să-ți dea gratuit echipament de protecție, cum ar fi încălțăminte de protecție sau mănuși. Muncă nesigură sau plată prea mică? Poți raporta la Nederlandse Arbeidsinspectie, și fără să-ți dai numele. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.p': 'Încă nu am avut pauză.',
    'c.health.s': 'Ai lucrat 6 ore fără pauză. Șeful îți cere să continui. Ce faci?',
    'c.health.o1': 'Spui că acum ai nevoie de pauză.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o2': 'Lucrezi mai departe și iei mai târziu o pauză mai lungă.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.health.o3': 'Pleci de la muncă acasă fără un cuvânt.',
    'c.health.w': 'Când lucrezi mai mult de 5,5 ore, pauza e prevăzută de lege, nu e o favoare. Odihna te ajută și să lucrezi în siguranță.',
    'c.rights': 'Discriminare și concediere',
    'c.rights.b': 'Discriminarea la muncă e interzisă, de exemplu din cauza originii, religiei sau genului tău. Angajatorul nu te poate concedia pur și simplu: de obicei are nevoie de permisiunea UWV sau a unui judecător, sau de acordul tău. (În perioada de probă sau la sfârșitul unui contract temporar se aplică alte reguli.) Nu semna o hârtie despre concedierea ta pe care nu o înțelegi. Ai semnat un acord de încetare a contractului (vaststellingsovereenkomst)? Atunci de obicei îl mai poți anula în scris în 14 zile. Cere întâi ajutor. Mergi la sindicat (de exemplu FNV), la un birou pentru discriminare sau la Juridisch Loket. Juridisch Loket dă sfaturi juridice gratuite. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.',
    'c.rights.p': 'Vreau să cer întâi un sfat.',
    'c.rights.s': 'Șeful îți dă o hârtie: „Semnează azi și pleci de comun acord.” Nu o înțelegi bine. Ce faci?',
    'c.rights.o1': 'Nu semnezi încă. Ceri întâi un sfat.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': 'O semnezi, pentru că șeful spune că e în regulă.',
    'c.rights.o3': 'Pui hârtia deoparte și nu mai vorbești niciodată despre ea.',
    'c.rights.w': 'E ceva greșit în document? Atunci poți pierde drepturi, de exemplu dreptul la ajutorul de șomaj (WW). E normal și permis să ceri timp ca să te sfătuiești.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.mustmay': 'Moet, hoeft niet, mag niet', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': 'În olandeză, opusul lui „moeten” este „niet hoeven”. „Je moet tekenen” înseamnă: nu ai de ales. „Je hoeft niet te tekenen” înseamnă: poți alege. „Je mag niet tekenen” înseamnă: e interzis. Atenție: în engleză, „must not” înseamnă „mag niet”. În română, „nu trebuie” e o capcană: „hoeft niet” înseamnă „nu e nevoie”. Nu știi sigur? Întreabă.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': 'Trebuie sau am de ales?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': 'Șeful tău de echipă spune: „Je hoeft zaterdag niet te komen.” Ce vrea să spună?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': 'Nu e nevoie să vii sâmbătă. Poți alege.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': 'Nu ai voie să vii sâmbătă.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': 'Trebuie să vii sâmbătă.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': '„Niet hoeven” înseamnă că nu e obligatoriu: poți alege. „Niet mogen” ar însemna că e interzis.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'Concediu și concediu pentru urgențe',
    'c.leave.b': 'Prin lege ai zile libere plătite: cel puțin de 4 ori numărul de zile pe care le lucrezi pe săptămână. Normă întreagă, 5 zile pe săptămână? Atunci cel puțin 20 de zile pe an. Un cao poate da mai multe. Cere concediu din timp și în scris. O urgență neașteptată, ca un accident sau o boală în familie? Atunci poți primi un concediu scurt plătit (calamiteitenverlof). Anunță-ți imediat angajatorul. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.leave.p': 'Aș vrea să cer concediu pentru iulie.',
    'c.leave.s': 'Vrei să-ți vizitezi familia din străinătate trei săptămâni vara. Ce faci?',
    'c.leave.o1': 'Îi ceri angajatorului concediu din timp, în scris.',
    'c.leave.o2': 'Pur și simplu pleci și îi spui șefului când te întorci.',
    'c.leave.o3': 'Îl rogi pe un coleg să-i spună șefului cu o zi înainte.',
    'c.leave.w': 'De obicei, angajatorul trebuie să spună da. Poate refuza doar pentru un motiv foarte serios, și atunci în scris, în 2 săptămâni. Dacă ceri din timp, ai cele mai mari șanse să primești un da.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.illness': { m: 'Drepturile tale când ești bolnav', f: 'Drepturile tale când ești bolnavă', x: 'Drepturile tale în caz de boală' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.b': { m: 'Când ești bolnav, angajatorul trebuie să-ți plătească cel puțin 70% din salariu, timp de până la 2 ani. Un cao dă des mai mult. Pot exista până la 2 zile de așteptare (wachtdagen) fără plată, dar doar dacă scrie așa în contract sau în cao. Șeful nu are voie să te întrebe ce boală ai. Despre sănătate și muncă vorbești cu medicul de medicina muncii (bedrijfsarts). Sună-ți angajatorul când te faci bine (betermelden). În primul an primești cel puțin salariul minim. Un contract pe perioadă determinată se termină la data de final, chiar dacă ești bolnav. Lucrezi printr-o agenție? Dacă ai în contract o clauză de agenție (uitzendbeding), contractul se poate termina când te îmbolnăvești. Atunci întreabă UWV despre Ziektewet, sau întreabă sindicatul. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.', f: 'Când ești bolnavă, angajatorul trebuie să-ți plătească cel puțin 70% din salariu, timp de până la 2 ani. Un cao dă des mai mult. Pot exista până la 2 zile de așteptare (wachtdagen) fără plată, dar doar dacă scrie așa în contract sau în cao. Șeful nu are voie să te întrebe ce boală ai. Despre sănătate și muncă vorbești cu medicul de medicina muncii (bedrijfsarts). Sună-ți angajatorul când te faci bine (betermelden). În primul an primești cel puțin salariul minim. Un contract pe perioadă determinată se termină la data de final, chiar dacă ești bolnavă. Lucrezi printr-o agenție? Dacă ai în contract o clauză de agenție (uitzendbeding), contractul se poate termina când te îmbolnăvești. Atunci întreabă UWV despre Ziektewet, sau întreabă sindicatul. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.', x: 'În caz de boală, angajatorul trebuie să-ți plătească cel puțin 70% din salariu, timp de până la 2 ani. Un cao dă des mai mult. Pot exista până la 2 zile de așteptare (wachtdagen) fără plată, dar doar dacă scrie așa în contract sau în cao. Șeful nu are voie să te întrebe ce boală ai. Despre sănătate și muncă vorbești cu medicul de medicina muncii (bedrijfsarts). Sună-ți angajatorul când te faci bine (betermelden). În primul an primești cel puțin salariul minim. Un contract pe perioadă determinată se termină la data de final, chiar și în caz de boală. Lucrezi printr-o agenție? Dacă ai în contract o clauză de agenție (uitzendbeding), contractul se poate termina când te îmbolnăvești. Atunci întreabă UWV despre Ziektewet, sau întreabă sindicatul. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.' },
    'c.illness.x': 'Te-ai îmbolnăvit și vrei să mergi în țara ta? Întreabă mai întâi angajatorul sau agenția. Fără permisiune, salariul se poate opri. Dă-ți adresa de acolo și răspunde la telefon.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'M-am făcut bine. Mâine vin la muncă.',
    'c.illness.s': { m: 'Ești bolnav de o săptămână. Angajatorul te trimite la medicul de medicina muncii. Ce faci?', f: 'Ești bolnavă de o săptămână. Angajatorul te trimite la medicul de medicina muncii. Ce faci?', x: 'Te-ai îmbolnăvit acum o săptămână. Angajatorul te trimite la medicul de medicina muncii. Ce faci?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': 'Mergi și vorbești despre sănătatea și munca ta.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': 'Nu mergi: ai doctorul tău.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o3': { m: 'Te întorci la muncă deși ești încă bolnav.', f: 'Te întorci la muncă deși ești încă bolnavă.', x: 'Te întorci la muncă deși încă nu te-ai vindecat.' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': 'Medicul de medicina muncii te ajută să te întorci la muncă într-un mod sănătos. Medicul nu-i spune șefului detaliile tale medicale, ci doar ce muncă poți face.',
    'c.warning': 'Semne de exploatare',
    'c.warning.b': { m: 'Fii atent la aceste semne. Angajatorul îți păstrează pașaportul sau actul de identitate. Nu e voie: tu îți păstrezi actul. Un angajator poate face doar o copie. Primești mult mai puțini bani decât s-a stabilit sau nu primești fluturaș de salariu. Trebuie să plătești o datorie mare angajatorului sau agenției. Trebuie să lucrezi extrem de multe ore, fără să ai de ales. Cineva te amenință sau folosește locuința ca să facă presiune pe tine. Asta nu e normal și nu e permis. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.', f: 'Fii atentă la aceste semne. Angajatorul îți păstrează pașaportul sau actul de identitate. Nu e voie: tu îți păstrezi actul. Un angajator poate face doar o copie. Primești mult mai puțini bani decât s-a stabilit sau nu primești fluturaș de salariu. Trebuie să plătești o datorie mare angajatorului sau agenției. Trebuie să lucrezi extrem de multe ore, fără să ai de ales. Cineva te amenință sau folosește locuința ca să facă presiune pe tine. Asta nu e normal și nu e permis. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.', x: 'Atenție la aceste semne. Angajatorul îți păstrează pașaportul sau actul de identitate. Nu e voie: tu îți păstrezi actul. Un angajator poate face doar o copie. Primești mult mai puțini bani decât s-a stabilit sau nu primești fluturaș de salariu. Trebuie să plătești o datorie mare angajatorului sau agenției. Trebuie să lucrezi extrem de multe ore, fără să ai de ales. Cineva te amenință sau folosește locuința ca să facă presiune pe tine. Asta nu e normal și nu e permis. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.' },
    'c.warning.p': 'Vreau pașaportul înapoi.',
    'c.warning.s': 'În prima zi, agenția spune: „Îți păstrăm noi pașaportul, pentru siguranță.” Ce faci?',
    'c.warning.o1': 'Îl păstrezi tu. Ei pot face o copie.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': 'Îl dai, pentru că agenția știe regulile.',
    'c.warning.o3': 'Îl dai, dar întâi îi faci o poză.',
    'c.warning.w': 'Pașaportul e al tău. Păstrarea lui e un mod de a controla lucrătorii. Un angajator are nevoie doar de o copie pentru dosar.',
    'c.gethelp': 'Unde găsești ajutor',
    'c.gethelp.b': 'Vezi semne de exploatare, la tine sau la altcineva? Cere ajutor. Poți raporta la Nederlandse Arbeidsinspectie, și anonim, sau la poliție. Meld Misdaad Anoniem: 0800-7000. Sfaturi juridice gratuite: Juridisch Loket. Ești în pericol? Sună la 112. Oricine lucrează în Olanda poate primi ajutor, și migranții. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.',
    'c.gethelp.p': { m: 'Am nevoie de ajutor. Sunt exploatat.', f: 'Am nevoie de ajutor. Sunt exploatată.', x: 'Am nevoie de ajutor. Mă exploatează.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.s': 'Un prieten lucrează 14 ore pe zi aproape pe nimic. Îi e frică de șef. Ce poți face?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': 'Îl ajuți să ia legătura cu Arbeidsinspectie sau Juridisch Loket.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o2': 'Îi spui că asta e normal pentru lucrătorii noi.',
    'c.gethelp.o3': 'Îi spui să aștepte până i se termină contractul, apoi să plece.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'Ajutorul există pentru toți cei care lucrează în Olanda. Raportarea se poate face și fără nume.',
    'c.callin': 'Cum îl suni pe șef',
    'c.callin.b': { m: 'Când îl suni pe șef, spune-ți numele, motivul și când crezi că te întorci. Ești bolnav? Trebuie să spui doar că ești bolnav, nu ce boală ai. Sună: nu trimite doar un mesaj, decât dacă firma ta spune că un mesaj e suficient. Nu răspunde nimeni? Lasă un mesaj vocal și încearcă din nou. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', f: 'Când îl suni pe șef, spune-ți numele, motivul și când crezi că te întorci. Ești bolnavă? Trebuie să spui doar că ești bolnavă, nu ce boală ai. Sună: nu trimite doar un mesaj, decât dacă firma ta spune că un mesaj e suficient. Nu răspunde nimeni? Lasă un mesaj vocal și încearcă din nou. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', x: 'Când îl suni pe șef, spune-ți numele, motivul și când crezi că te întorci. Te-ai îmbolnăvit? Trebuie să spui doar că te-ai îmbolnăvit, nu ce boală ai. Sună: nu trimite doar un mesaj, decât dacă firma ta spune că un mesaj e suficient. Nu răspunde nimeni? Lasă un mesaj vocal și încearcă din nou. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.p': 'Bună, sunt Ali. Azi nu pot veni.',
    'c.callin.s': 'Copilul tău e bolnav și nu poți veni la muncă. Firma vrea să suni. Ce faci?',
    'c.callin.o1': 'Îl suni pe șef înainte de tură.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.callin.o2': 'Trimiți un mesaj scurt la începutul turei.',
    'c.callin.o3': 'Îl rogi pe vecin să sune în locul tău.',
    'c.callin.w': 'Un apel e clar și rapid, iar șeful poate pune întrebări. Dacă spui când crezi că te întorci, îl ajuți să planifice. Spune și numele tău și motivul.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'Mesaje la muncă: scurte și politicoase',
    'c.texting.b': 'Scrie mesaje scurte și politicoase la muncă. Spune cine ești și ce se întâmplă și încheie cu un salut. De exemplu: „Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Verifică des programul (rooster) în aplicație. Răspunde la timp la cererile pentru ture. Ca să schimbi o tură, trebuie mai întâi să fie de acord șeful sau planificatorul, așa că întreabă: „Mag ik mijn dienst ruilen?” Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.texting.p': 'Salut Mark, întârzii 10 minute. Scuze! Salutări, Ali',
    'c.texting.s': 'Vei întârzia 10 minute. Ce mesaj către șef e cel mai bun?',
    'c.texting.o1': '„Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”',
    'c.texting.o2': '„Sorry, ik ben er zo!” (fără numele tău, fără oră).', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting.o3': 'Un mesaj vocal de trei minute despre trafic.',
    'c.texting.w': 'Un mesaj bun spune în câteva cuvinte cine ești și ce se întâmplă. Așa șeful știe imediat.',
    'c.certs': 'Certificatele te ajută',
    'c.certs.b': 'În construcții, industrie și munca prin agenție ai nevoie des de un certificat VCA (siguranță). Ca să conduci un motostivuitor, de obicei ai nevoie de un certificat de motostivuitorist (heftruckcertificaat). Întreabă-ți angajatorul dacă plătește cursul și examenul.',
    'c.certs.p': 'Pot face aici un curs VCA?',
    'c.certs.s': 'Un post cere certificat VCA. Încă nu îl ai. Ce faci?',
    'c.certs.o1': 'Îi rogi pe angajator sau pe agenție să te ajute să-l obții.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': 'Nu aplici, pentru că oricum nu vei primi postul.',
    'c.certs.o3': 'Spui că îl ai și speri că nu verifică nimeni.',
    'c.certs.w': 'Mulți angajatori și multe agenții ajută cu VCA. Când întrebi, arăți că vrei să înveți.',
    'c.diploma': 'Diploma ta contează',
    'c.diploma.b': 'Ai o diplomă din altă țară? O poți evalua la IDW (Internationale Diplomawaardering). Așa angajatorii pot vedea ce valoare are aici. E obligatorie o instruire pentru munca ta? Atunci angajatorul trebuie s-o plătească și se socotește timp de lucru. Întreabă-l pe șef despre cursuri. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.diploma.p': 'Sunt cursuri pentru mine?',
    'c.diploma.s': 'Angajatorul spune că trebuie să faci sâmbătă o instruire de siguranță obligatorie, fără plată. Ce e adevărat?',
    'c.diploma.o1': 'Angajatorul o plătește și e timp de lucru.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': 'Instruirea e mereu în timpul tău liber.',
    'c.diploma.o3': { m: 'Trebuie să plătești singur instruirea.', f: 'Trebuie să plătești singură instruirea.', x: 'Trebuie să plătești instruirea din buzunarul tău.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.w': 'Dacă o instruire e obligatorie pentru munca ta, angajatorul plătește și se socotește timp de lucru. Dacă nu e clar, cere un sfat.',
    'c.doctor': 'Doctor sau 112?',
    'c.doctor.b': 'Înscrie-te la un medic de familie (huisarts) aproape de casă. Ai nevoie de îngrijire urgentă seara, noaptea sau în weekend? Sună la huisartsenpost. Sună la 112 doar în caz de urgență: pericol pentru viață, incendiu sau o infracțiune care are loc chiar acum. Medicamentele le iei de la farmacie (apotheek).',
    'c.doctor.p': 'Vreau să mă înscriu la medicul de familie.',
    'c.doctor.s': 'E sâmbătă noaptea. Copilul tău are febră mare, dar e treaz și respiră normal. Ce faci?',
    'c.doctor.o1': 'Suni la huisartsenpost.',
    'c.doctor.o2': 'Suni la 112.',
    'c.doctor.o3': 'Aștepți până luni și nu faci nimic.',
    'c.doctor.w': 'Huisartsenpost ajută cu îngrijire urgentă în afara orelor de program. 112 e pentru urgențe: pericol pentru viață, incendiu sau o infracțiune care are loc chiar acum.',
    'c.insurance': 'Asigurarea de sănătate',
    'c.insurance.b': 'Când locuiești sau lucrezi în Olanda, asigurarea de sănătate de bază e de obicei obligatorie. Plătești o primă în fiecare lună. În fiecare an există o franșiză (eigen risico): primele costuri le plătești tu. Suma se schimbă: verific-o la asigurătorul tău. Vizitele la medicul de familie (huisarts) nu intră în franșiză. Cu un venit mic poți primi un ajutor pentru asigurarea de sănătate (zorgtoeslag). Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.insurance.p': 'Am nevoie de asigurare de sănătate. Mă puteți ajuta?',
    'c.insurance.s': 'Ai început să lucrezi aici acum două săptămâni și încă nu ai asigurare de sănătate. Ce faci?',
    'c.insurance.o1': 'Îți faci repede asigurare de sănătate.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': 'Aștepți: asigurarea din țara ta e suficientă.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': 'Folosești cardul de asigurare al unui prieten.',
    'c.insurance.w': 'Fără asigurare, un doctor sau un spital pot costa mult și poți primi o amendă. Dacă o rezolvi repede, te protejezi. Angajatorul sau agenția te poate ajuta.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters': 'Nu ignora scrisorile',
    'c.letters.b': 'Nu ignora scrisorile de la Belastingdienst, gemeente sau UWV. Roagă o persoană de încredere să te ajute să le citești. Declarația de impozit (aangifte) pentru anul trecut trebuie făcută de obicei înainte de 1 mai. Poți cere mai mult timp. Ajutoarele (toeslagen), ca zorgtoeslag și huurtoeslag, depind de venitul tău. Dacă primești prea mult, trebuie să dai banii înapoi, așa că ține-ți datele despre venit la zi. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.letters.p': 'Am primit o scrisoare. Mă poți ajuta?',
    'c.letters.s': 'Primești o scrisoare de la Belastingdienst. Nu o înțelegi. Ce faci?',
    'c.letters.o1': 'Ceri ajutor de la cineva de încredere.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': 'O pui într-un sertar și aștepți.',
    'c.letters.o3': 'O arunci, pentru că probabil e reclamă.',
    'c.letters.w': 'Scrisorile oficiale au des un termen limită. Dacă răspunzi la timp, problemele se rezolvă de obicei mai ușor.',
    'c.scams': 'Atenție la înșelătorii',
    'c.scams.b': 'Banca ta nu îți cere niciodată codurile sau PIN-ul prin telefon, SMS sau e-mail. Nu da clic pe linkuri din mesaje pe care nu le așteptai. Cineva te presează să plătești repede? Oprește-te și verifică întâi. Sună la bancă la numărul oficial, de exemplu numărul de pe cardul bancar sau de pe site-ul băncii.',
    'c.scams.p': 'Sun eu înapoi la bancă.',
    'c.scams.s': 'Primești un SMS: „Contul tău bancar va fi blocat. Dă clic acum pe acest link.” Ce faci?',
    'c.scams.o1': 'Nu dai clic. Suni la bancă la numărul oficial.',
    'c.scams.o2': 'Dai repede clic, ca să nu-ți fie blocat contul.',
    'c.scams.o3': 'Răspunzi la SMS și întrebi dacă e adevărat.',
    'c.scams.w': 'Escrocii folosesc presiunea și linkuri false. Banca ta nu îți cere niciodată codurile printr-un link sau un mesaj.',
    'c.bike': 'Cu bicicleta la muncă',
    'c.bike.b': 'Aprinde luminile când e întuneric. Mergi pe pista de biciclete și respectă semafoarele și indicatoarele. Încuie-ți mereu bicicleta. E interzis să ții telefonul în mână când mergi cu bicicleta.',
    'c.bike.p': 'Unde îmi pot parca bicicleta?',
    'c.bike.s': 'E întuneric și mergi cu bicicleta la tura de noapte. Îți sună telefonul. Ce faci?',
    'c.bike.o1': 'Oprești într-un loc sigur înainte să răspunzi.',
    'c.bike.o2': 'Răspunzi cu telefonul în mână în timp ce pedalezi.',
    'c.bike.o3': 'Mergi mai departe și te uiți repede pe telefon.',
    'c.bike.w': 'Telefonul în mână pe bicicletă e interzis și periculos. Să oprești întâi durează doar o clipă.',
    'c.transit': 'Autobuz, tren și costuri de drum',
    'c.transit.b': 'În majoritatea autobuzelor și trenurilor poți plăti cu cardul bancar (OVpay). Fă check-in ȘI check-out cu același card, altfel plătești prea mult. Decontarea drumului (reiskostenvergoeding) nu e un drept prin lege: depinde de angajator sau de cao. Întreabă despre asta. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.transit.p': 'Primesc bani pentru drum?',
    'c.transit.s': 'Mergi zilnic la muncă cu autobuzul. Un coleg primește bani de drum, tu nu. Ce faci?',
    'c.transit.o1': 'Îl întrebi pe șef care sunt regulile în firma ta sau în cao.',
    'c.transit.o2': 'Nu spui nimic, pentru că probabil nu e pentru tine.',
    'c.transit.o3': 'Îi spui șefului: legea spune că trebuie să-i primești și tu.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': 'Decontarea drumului depinde de angajator sau de cao. E normal să întrebi și te ajută să-ți cunoști drepturile.',
    'c.ww': 'Ajutorul de șomaj (WW)',
    'c.ww.b': 'Ți-ai pierdut locul de muncă? Cere WW la UWV cât mai repede, în cel mult o săptămână după prima zi fără muncă. De obicei trebuie să fi lucrat cel puțin 26 din ultimele 36 de săptămâni. Dacă demisionezi tu, de obicei nu primești WW. Înregistrează-te ca persoană care caută de lucru pe werk.nl. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.ww.x': 'Cauți de lucru în altă țară din UE? Uneori poți lua WW cu tine. Cere de la UWV formularul U2 înainte să pleci. Fără U2, WW se oprește.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'Vreau să cer ajutor de șomaj. Ce trebuie să fac?',
    'c.ww.s': { m: 'Ești supărat pe munca ta și vrei să demisionezi azi. Ce e înțelept?', f: 'Ești supărată pe munca ta și vrei să demisionezi azi. Ce e înțelept?', x: 'Munca ta te enervează și vrei să demisionezi azi. Ce e înțelept?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o1': 'Ceri întâi un sfat, înainte să demisionezi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.ww.o2': 'Demisionezi azi: oricum primești WW.',
    'c.ww.o3': 'Nu mai vii la muncă și nu spui nimic.',
    'c.ww.w': 'Demisia te poate costa ajutorul de șomaj. Dacă vorbești întâi cu șeful, cu sindicatul sau cu Juridisch Loket, poți găsi o cale mai bună.',
    'c.newjob': 'Cum cauți o muncă nouă',
    'c.newjob.b': 'Înainte să pleci, cere o referință (referentie). Păstrează fluturașii de salariu și contractul. Actualizează-ți CV-ul. Caută de lucru la agențiile de muncă temporară (uitzendbureaus) și pe werk.nl. Nu plăti niciodată bani ca să primești un loc de muncă. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.',
    'c.newjob.p': 'Pot să dau numele dumneavoastră ca referință?',
    'c.newjob.s': 'Cineva îți oferă un loc de muncă, dar întâi trebuie să plătești 300 de euro „pentru post”. Ce faci?',
    'c.newjob.o1': 'Nu plătești. Cauți o agenție adevărată.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': 'Plătești, pentru că un loc de muncă bun merită.',
    'c.newjob.o3': 'Plătești jumătate acum și restul mai târziu.',
    'c.newjob.w': 'Când cineva cere bani pentru un loc de muncă, e un semn de avertizare. O agenție de muncă temporară nu are voie să-ți ceară bani ca să-ți găsească de lucru. Poți căuta de lucru și pe werk.nl.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'Ședința toolbox',
    'c.tools.b': 'Pe multe șantiere are loc regulat o scurtă ședință de siguranță: ședința toolbox. Afli despre riscuri și reguli noi. Mergi, ascultă și pune întrebări dacă nu înțelegi. Verifică-ți uneltele înainte să le folosești. O unealtă e stricată? Spune-i șefului.',
    'c.tools.p': 'Bormașina asta e stricată. Mai e alta?',
    'c.tools.s': 'E o ședință toolbox, dar olandeza ta nu e încă bună. Ce faci?',
    'c.tools.o1': 'Mergi și apoi îl întrebi pe un coleg ce ți-a scăpat.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': 'Nu mergi, pentru că oricum nu vei înțelege.',
    'c.tools.o3': 'Semnezi lista de prezență fără să mergi.',
    'c.tools.w': 'Informațiile despre siguranță sunt pentru toți. O aplicație de traducere te poate ajuta să urmărești ședința, dacă telefoanele sunt permise acolo. E normal să întrebi un coleg după aceea, și așa verifici dacă ai înțeles bine.',
    'c.site': 'Oprește-te și verifică: LMRA',
    'c.site.b': 'Înainte să începi o lucrare, oprește-te o clipă și verifică: ce poate merge prost aici? Asta e LMRA (analiza riscurilor de ultim moment). Poartă mereu casca, iar când lucrezi la înălțime, și protecția împotriva căderii. Nu sta niciodată sub o încărcătură suspendată. Munca e cu adevărat periculoasă? Atunci ai voie să te oprești și trebuie să-i spui imediat șefului. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.site.p': 'Încă nu încep. Asta nu e sigur.',
    'c.site.s': 'Trebuie să lucrezi pe o schelă, dar lipsește o balustradă. Un coleg spune: „Ai grijă și gata.” Ce faci?',
    'c.site.o1': 'Nu începi și îi spui șefului.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': 'Începi, dar ai foarte mare grijă.',
    'c.site.o3': { m: 'Repari singur balustrada cu o sfoară.', f: 'Repari singură balustrada cu o sfoară.', x: 'Repari pe cont propriu balustrada cu o sfoară.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site.w': 'O cădere de la înălțime poate provoca răni foarte grave. Ai voie să oprești o muncă periculoasă, iar raportarea protejează toată echipa.',
    'c.line': 'Mâinile departe de mașinile în funcțiune',
    'c.line.b': 'Nu băga niciodată mâna într-o mașină în funcțiune, nici măcar o secundă. La o defecțiune (storing): apasă butonul de oprire de urgență (noodstop) și cheamă-l pe șef. Întreținerea și reparațiile se fac doar când mașina e blocată (lock-out) și doar de oameni instruiți. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.line.p': 'E o defecțiune. Am apăsat butonul de oprire de urgență.',
    'c.line.s': 'Un produs s-a blocat în mașină. Mașina încă merge. Ce faci?',
    'c.line.o1': 'Apeși butonul de oprire de urgență și îl chemi pe șef.',
    'c.line.o2': 'Îl scoți repede cu mâna, înainte să se strice.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': 'Îl lași acolo și speri că mașina se descurcă singură.',
    'c.line.w': 'Mașinile în funcțiune pot provoca accidente grave într-o secundă. E mereu permis și mereu mai bine să oprești mașina.',
    'c.quality': 'Calitate: spune ce vezi',
    'c.quality.b': 'Vezi o problemă la un produs, de exemplu o deteriorare sau o etichetă greșită? Raporteaz-o și pune produsul deoparte. Nu-l lăsa să treacă doar ca să meargă banda mai departe. Când găsești devreme o problemă, economisești multă muncă și mulți bani. Șeful se va bucura că ai spus.',
    'c.quality.p': 'Cred că e ceva în neregulă cu aceste produse.',
    'c.quality.s': 'Vezi că multe produse au o dată greșită pe etichetă. Pe bandă e foarte aglomerat. Ce faci?',
    'c.quality.o1': 'Îi spui imediat șefului sau responsabilului de calitate.',
    'c.quality.o2': 'Le lași să treacă, pentru că nu e treaba ta.',
    'c.quality.o3': 'Le arunci pe ascuns.',
    'c.quality.w': 'O etichetă greșită poate însemna că toate produsele trebuie retrase din magazine. Un coleg bun de echipă spune asta devreme.',
    'c.client': 'Respect pentru client',
    'c.client.b': 'Bate la ușă înainte să intri în camera unui client. Spune cine ești, explică ce urmează să faci și cere permisiunea. Spune-le clienților „u”, dacă nu îți cer ei să le spui „je”. Lasă clienții să facă singuri ce pot face.',
    'c.client.p': 'Pot să intru? Am venit să vă ajut să vă spălați.',
    'c.client.s': 'Trebuie să ajuți o clientă să se spele. Ușa camerei ei e închisă. Ce faci?',
    'c.client.o1': 'Bați la ușă, aștepți și spui cine ești și de ce vii.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.client.o2': { m: 'Intri repede, pentru că ești ocupat.', f: 'Intri repede, pentru că ești ocupată.', x: 'Intri repede, pentru că ai mult de lucru.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.client.o3': 'Sari peste spălat, ca să n-o deranjezi.',
    'c.client.w': 'Camera e casa clientului. Când bați la ușă și explici, arăți respect și îngrijirea e mai liniștită.',
    'c.privacy': 'Confidențialitate, igienă și medicamente',
    'c.privacy.b': { m: 'Ce vezi și auzi despre clienți rămâne la muncă. Nu vorbi despre clienți în afara muncii și nu posta niciodată poze cu ei. Curăță-ți mâinile înainte și după îngrijire. Observi o schimbare la un client, ca durerea sau o cădere? Spune-i imediat asistentei. Nu da niciodată medicamente decât dacă ești instruit și ai voie s-o faci. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', f: 'Ce vezi și auzi despre clienți rămâne la muncă. Nu vorbi despre clienți în afara muncii și nu posta niciodată poze cu ei. Curăță-ți mâinile înainte și după îngrijire. Observi o schimbare la un client, ca durerea sau o cădere? Spune-i imediat asistentei. Nu da niciodată medicamente decât dacă ești instruită și ai voie s-o faci. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', x: 'Ce vezi și auzi despre clienți rămâne la muncă. Nu vorbi despre clienți în afara muncii și nu posta niciodată poze cu ei. Curăță-ți mâinile înainte și după îngrijire. Observi o schimbare la un client, ca durerea sau o cădere? Spune-i imediat asistentei. Nu da niciodată medicamente decât dacă ai instruire și ai voie s-o faci. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.p': 'Domnul are mai multe dureri decât ieri.',
    'c.privacy.s': { m: 'O clientă îți cere pastilele ei. Nu ești instruit să dai medicamente. Ce faci?', f: 'O clientă îți cere pastilele ei. Nu ești instruită să dai medicamente. Ce faci?', x: 'O clientă îți cere pastilele ei. Nu ai instruire pentru a da medicamente. Ce faci?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o1': 'Spui frumos că o chemi pe asistentă.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': 'Îi dai pastilele, pentru că ea știe de ce are nevoie.',
    'c.privacy.o3': 'Spui nu și pleci.',
    'c.privacy.w': 'Un medicament greșit poate fi periculos. Când chemi repede persoana potrivită, ajuți clientul și toți rămân în siguranță.',
    'c.kitchen': 'Siguranța alimentelor',
    'c.kitchen.b': { m: 'Spală-te des pe mâini, și după toaletă, și după ce atingi carne crudă. Ține mâncarea rece la rece și mâncarea caldă la cald. Pune o etichetă cu data pe mâncarea pe care o păstrezi. Aceste reguli se numesc HACCP. Alergiile sunt serioase: nu ești sigur ce conține un fel de mâncare? Întreabă-l mereu pe bucătarul-șef. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', f: 'Spală-te des pe mâini, și după toaletă, și după ce atingi carne crudă. Ține mâncarea rece la rece și mâncarea caldă la cald. Pune o etichetă cu data pe mâncarea pe care o păstrezi. Aceste reguli se numesc HACCP. Alergiile sunt serioase: nu ești sigură ce conține un fel de mâncare? Întreabă-l mereu pe bucătarul-șef. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.', x: 'Spală-te des pe mâini, și după toaletă, și după ce atingi carne crudă. Ține mâncarea rece la rece și mâncarea caldă la cald. Pune o etichetă cu data pe mâncarea pe care o păstrezi. Aceste reguli se numesc HACCP. Alergiile sunt serioase: nu știi sigur ce conține un fel de mâncare? Întreabă-l mereu pe bucătarul-șef. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.p': 'Chef, are gluten sosul ăsta?',
    'c.kitchen.s': { m: 'Un oaspete întreabă dacă un fel de mâncare conține nuci. Nu ești sigur. Ce faci?', f: 'Un oaspete întreabă dacă un fel de mâncare conține nuci. Nu ești sigură. Ce faci?', x: 'Un oaspete întreabă dacă un fel de mâncare conține nuci. Nu știi sigur. Ce faci?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.o1': 'Spui că verifici și îl întrebi pe bucătarul-șef.',
    'c.kitchen.o2': 'Spui „nu”, ca oaspetele să fie mulțumit.',
    'c.kitchen.o3': 'Îi spui oaspetelui să scoată singur nucile.',
    'c.kitchen.w': 'Pentru un oaspete cu alergie, o greșeală mică poate fi foarte periculoasă. E mereu corect să verifici cu bucătarul-șef.',
    'c.service': 'Politicos cu oaspeții',
    'c.service.b': { m: 'Spune-le oaspeților „u”, dacă nu îți cer ei să le spui „je”. Fii prietenos și calm, și când e aglomerat. Nu ești sigur de răspunsul la o întrebare? Spune că verifici. Bacșișul (fooi): regulile diferă de la un loc la altul. Întreabă cum se împarte bacșișul acolo unde lucrezi.', f: 'Spune-le oaspeților „u”, dacă nu îți cer ei să le spui „je”. Fii prietenoasă și calmă, și când e aglomerat. Nu ești sigură de răspunsul la o întrebare? Spune că verifici. Bacșișul (fooi): regulile diferă de la un loc la altul. Întreabă cum se împarte bacșișul acolo unde lucrezi.', x: 'Spune-le oaspeților „u”, dacă nu îți cer ei să le spui „je”. Vorbește prietenos și calm, și când e aglomerat. Nu știi sigur răspunsul la o întrebare? Spune că verifici. Bacșișul (fooi): regulile diferă de la un loc la altul. Întreabă cum se împarte bacșișul acolo unde lucrezi.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.service.p': 'Un moment, vin imediat la dumneavoastră.',
    'c.service.s': 'E foarte aglomerat. Un oaspete te cheamă, dar tu duci farfurii la altă masă. Ce faci?',
    'c.service.o1': 'Te uiți la oaspete și spui: „Een moment, ik kom zo bij u.”',
    'c.service.o2': 'Ignori oaspetele până ai timp.',
    'c.service.o3': 'Pui farfuriile pe o masă liberă și mergi întâi la oaspete.',
    'c.service.w': 'Un semn scurt îi arată oaspetelui că l-ai văzut. Apoi îți poți termina calm treaba.',
    'c.cleaning': 'Citește eticheta',
    'c.cleaning.b': 'Fiecare produs de curățenie are o etichetă. Pictogramele (desene mici într-un romb roșu) arată pericolul, de exemplu pentru piele, ochi sau plămâni. Citește eticheta sau întreabă la ce folosește produsul și cum se folosește. Poartă mănușile pe care ți le dă angajatorul. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.cleaning.p': 'La ce folosește acest produs?',
    'c.cleaning.s': 'Primești un produs de curățenie nou. Nu poți citi bine eticheta. Ce faci?',
    'c.cleaning.o1': 'Întrebi cum îl folosești în siguranță.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': 'Folosești mult, ca să meargă mai bine.',
    'c.cleaning.o3': 'Îl încerci pur și simplu fără mănuși.',
    'c.cleaning.w': 'Produsul greșit, sau prea mult din el, îți poate răni pielea, ochii sau plămânii. Să întrebi durează un minut.',
    'c.cleansafe': 'Nu amesteca niciodată produse',
    'c.cleansafe.b': 'Nu amesteca niciodată produse de curățenie, de exemplu înălbitor și un produs pentru toaletă. Pot apărea gaze periculoase. Aerisește. Speli podeaua cu mopul? Pune semnul pentru podea udă (Pas op, glad!), ca să nu alunece nimeni. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.cleansafe.p': 'Pun semnul. Podeaua e udă.',
    'c.cleansafe.s': 'Toaleta e foarte murdară. Un coleg spune: „Amestecă două produse, așa merge mai bine.” Ce faci?',
    'c.cleansafe.o1': 'Nu le amesteci. Folosești un singur produs.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleansafe.o2': 'Le amesteci, dar deschizi o fereastră.',
    'c.cleansafe.o3': 'Le amesteci repede și ieși din cameră.',
    'c.cleansafe.w': 'Amestecul de produse poate face gaz otrăvitor, chiar și cu fereastra deschisă. Un singur produs, folosit bine, e de ajuns.',
    'u.tools': 'Unelte inteligente',
    'l.translate': 'Tradu cu telefonul',
    'w.vertaalapp': 'aplicația de traducere',
    'w.vertalen': 'a traduce',
    'w.camera': 'camera foto (a telefonului)',
    'w.briefje': 'bilețelul (o hârtie mică)',
    'w.spreken': 'a vorbi',
    'w.vertaling': 'traducerea',
    's.translate.1': 'Îl traduc cu telefonul.',
    's.translate.2': 'Pot să traduc repede asta?',
    's.translate.3': 'Ați putea să vorbiți puțin în telefonul meu?',
    'c.translate.q': 'Ce scrie pe bilețelul ăla?',
    'c.translate.a': 'Stai puțin, îl traduc.',
    'l.understood': { m: 'Să înțelegi și să fii înțeles', f: 'Să înțelegi și să fii înțeleasă', x: 'Să înțelegi și să te înțeleagă alții' }, // x: nieuw, nalezen
    'w.herhalen': 'a repeta',
    'w.opschrijven': 'a nota, a scrie',
    'w.latenzien': 'a arăta',
    'w.ondertiteling': 'subtitrarea (vorbirea ca text)',
    'w.instructie': 'instrucțiunea',
    'w.plaatje': 'imaginea, poza',
    's.understood.1': 'Puteți să-mi scrieți asta?',
    's.understood.2': 'Puteți să-mi arătați?',
    's.understood.3': 'Există o instrucțiune cu imagini?',
    'c.understood.q': 'Întâi faci ordine, apoi împachetezi.',
    'c.understood.a': 'Deci trebuie să fac ordine întâi?',
    'l.keeplearning': 'Învață mai departe',
    'w.bibliotheek': 'biblioteca (publică)',
    'w.taalhuis': 'Taalhuis (ajutor gratuit cu olandeza)',
    'w.oefenen': 'a exersa',
    'w.luisteren': 'a asculta',
    'w.elkedag': 'în fiecare zi',
    'w.woord': 'cuvântul',
    's.keeplearning.1': 'Exersez zece minute în fiecare zi.',
    's.keeplearning.2': 'Ce înseamnă cuvântul ăsta?',
    's.keeplearning.3': 'Vrei să vorbești olandeză cu mine?', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.keeplearning.q': 'Să vorbesc engleză?',
    'c.keeplearning.a': 'Nu, olandeză, te rog. Vreau să exersez.',
    'c.translate': 'Aplicațiile de traducere: inteligente, dar verifică',
    'c.translate.b': 'O aplicație de traducere, ca Google Translate, ajută mult. Poți să scrii, să vorbești sau să folosești modul conversație ca să vorbești cu un coleg. Cu camera poți traduce panouri, bilețele și instrucțiuni. Pe multe telefoane, și WhatsApp poate traduce mesaje. Folosește telefonul doar unde e sigur și permis. Niciodată lângă utilaje sau motostivuitoare. Întreabă mereu mai întâi. Aplicațiile fac greșeli. Pentru lucruri importante, ca contractul tău, o scrisoare sau o instrucțiune de siguranță, roagă și o persoană să ți le explice. Nu face poze la documente de serviciu confidențiale fără permisiune.',
    'c.translate.p': 'Pot să folosesc telefonul ca să traduc?',
    'c.translate.s': 'Șeful îți dă instrucțiuni de siguranță în olandeză. Înțelegi doar câteva cuvinte. Ce faci?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': 'Ceri o explicație și întrebi dacă poți folosi o aplicație.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': 'Spui „ja, ja” și te apuci de lucru.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': 'Faci o poză și o trimiți prietenilor, ca să o traducă ei.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': 'O aplicație de traducere te ajută să înțelegi repede, dar poate greși. Pentru siguranță, cea mai bună verificare e explicația unei persoane. Documentele de serviciu pot fi confidențiale, așa că nu le trimite altora fără permisiune.',
    'c.understood': 'Verifică dacă ai înțeles',
    'c.understood.b': 'Telefonul tău poate transforma vorbirea în text (subtitrare live): Live Transcribe pe Android, Live Captions pe iPhone. Verifică ce limbi acceptă telefonul tău. Poți să rogi pe cineva să scrie, să-ți arate sau să vorbească rar. Întreabă dacă există o instrucțiune cu imagini sau în limba ta. Apoi spune cu cuvintele tale ce ai înțeles: „Dus ik moet eerst …?” Aici asta e normal și previne greșelile.',
    'c.understood.p': 'Deci trebuie să număr întâi cutiile?',
    'c.understood.s': 'O colegă îți explică cum funcționează un utilaj nou. Vorbește repede și pierzi câteva cuvinte. Ce faci?',
    'c.understood.o1': 'O rogi să-ți arate sau să scrie, apoi repeți.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': 'Dai din cap și spui „ja, ja”, ca să nu piardă timp.',
    'c.understood.o3': { m: 'Încerci mai târziu utilajul singur și vezi ce se întâmplă.', f: 'Încerci mai târziu utilajul singură și vezi ce se întâmplă.', x: 'Încerci mai târziu utilajul pe cont propriu și vezi ce se întâmplă.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.w': 'Să arăți, să scrii și să repeți sunt verificări rapide. Colega te poate corecta înainte să meargă ceva prost. Aici asta e văzut ca atenție, nu ca încetineală.',
    'c.keeplearning': 'Învață mai departe, puțin în fiecare zi',
    'c.keeplearning.b': 'Câteva minute în fiecare zi ajută mai mult decât o oră lungă pe săptămână. Salvează cuvintele noi de la muncă într-o aplicație de notițe pe telefon. Ascultă olandeză ușoară, de exemplu NOS Jeugdjournaal (știri pentru copii) sau un podcast în olandeză vorbită rar. Multe biblioteci publice au un Taalhuis: ajutor gratuit cu olandeza, des cu un taalcafé (un loc unde exersezi vorbirea) sau un partener de limbă (taalmaatje). Colegii trec des la engleză ca să te ajute. Roagă-i frumos să vorbească olandeză cu tine: majoritatea oamenilor ajută cu plăcere.',
    'c.keeplearning.p': 'Vorbește pur și simplu olandeză cu mine, așa învăț mai repede.',
    'c.keeplearning.s': 'Colegii tăi trec mereu la engleză când vorbesc cu tine. Vrei să înveți olandeză. Ce faci?',
    'c.keeplearning.o1': 'Le mulțumești și îi rogi să vorbească olandeză cu tine.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': 'Nu spui nimic. Olandeza o să vină de la sine.',
    'c.keeplearning.o3': 'Răspunzi și tu în engleză, pentru că e mai politicos.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': 'Colegii trec des la engleză ca să fie amabili. Când le ceri olandeză, cei mai mulți te ajută cu plăcere. Să vorbești puțin în fiecare zi la muncă e unul dintre cele mai rapide moduri de a învăța.',
    'l.gossip': "Bârfă și rețele sociale",
    'w.roddelen': "a bârfi",
    'w.posten': "a posta (online)",
    'w.groepsapp': "grupul de chat",
    'w.socialemedia': "rețele sociale",
    'w.delen': "a distribui, a împărtăși",
    'w.screenshot': "captura de ecran",
    's.gossip.1': "Nu bârfesc despre colegi.",
    's.gossip.2': "Nu pun online poze de la muncă.",
    's.gossip.3': "Aș prefera să-mi spui direct mie.",
    'c.gossip.q': "Ai auzit ce a făcut Mark?",
    'c.gossip.a': "Nu, și aș prefera să nu vorbesc despre el.",
    'l.boundaries': "Depășirea limitelor",
    'w.aanraken': "a atinge",
    'w.ongewenst': "nedorit",
    'w.opmerking': "remarca, comentariul",
    'w.intimidatie': "hărțuirea, intimidarea",
    'w.getuige': "martorul",
    'w.grapje': "gluma",
    's.boundaries.1': "Nu mă atinge.", // nieuw, nalezen ("Blijf van me af.", 4 nov 2026)
    's.boundaries.2': "Nu mi se pare amuzantă remarca asta.",
    's.boundaries.3': "Vreau să raportez ceva persoanei de încredere.",
    'c.boundaries.q': { m: 'Nu fi așa dificil, a fost doar o glumă.', f: 'Nu fi așa dificilă, a fost doar o glumă.', x: 'Nu mai face atâtea probleme, a fost doar o glumă.' }, // x: nieuw, nalezen
    'c.boundaries.a': "Pentru mine nu a fost o glumă. Vreau să te oprești.",
    'c.gossip': "Bârfă și rețele sociale",
    'c.gossip.b': "Să vorbești despre un coleg pe la spate (roddelen) strică încrederea în echipă. Ai o problemă cu cineva? Vorbește cu acea persoană sau cu șeful tău. Online sunt aceleași reguli ca la muncă. Nu posta nimic despre colegi, clienți sau firmă fără permisiune. Asta înseamnă și poze, video și mesaje. Șeful tău poate vedea ce postezi, iar asta poate rămâne online ani de zile. Multe echipe au un grup de chat (groepsapp) pentru muncă: scrie acolo doar despre muncă și nu trimite altora capturi de ecran din el. Să distribui lucruri private ale unui coleg sau să râzi de cineva online este tot hărțuire.",
    'c.gossip.p': "Nu vreau asta online.",
    'c.gossip.s': "Un coleg te filmează când aluneci pe podeaua udă. Vrea să pună video-ul pe TikTok. Ce faci?",
    'c.gossip.o1': 'Spui „Nee, dat wil ik niet” și îi ceri să-l șteargă.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.o2': { m: 'Râzi și îl lași să-l posteze, ca să nu fii dificil.', f: 'Râzi și îl lași să-l posteze, ca să nu fii dificilă.', x: 'Râzi și îl lași să-l posteze, ca să nu faci probleme.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o3': 'Îi ceri să-l posteze fără numele tău.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': 'De obicei, nimeni nu are voie să pună online un video cu tine fără permisiunea ta. E normal să spui nu, iar angajatorul trebuie să intervină când colegii își bat joc unii de alții online. Dacă îl postează totuși, spune-i șefului.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': "Depășirea limitelor",
    'c.boundaries.b': { m: 'Grensoverschrijdend gedrag este un comportament care trece de limita cuiva. De exemplu: atingeri nedorite, remarci sau glume sexuale, priviri insistente, poze nedorite, amenințări sau țipete. Nu contează dacă celălalt „a vrut doar să glumească”: contează cum te simți tu. Dacă poți, spune clar că vrei să se oprească. Notează ce s-a întâmplat, când și cine a văzut. Spune-i șefului, persoanei de încredere (vertrouwenspersoon, dacă există) sau la HR. Angajatorul trebuie să te protejeze și nu poți fi pedepsit pentru că raportezi. Ai văzut că i s-a întâmplat unui coleg? Întreabă-l dacă e bine și oferă-te să fii martor.', f: 'Grensoverschrijdend gedrag este un comportament care trece de limita cuiva. De exemplu: atingeri nedorite, remarci sau glume sexuale, priviri insistente, poze nedorite, amenințări sau țipete. Nu contează dacă celălalt „a vrut doar să glumească”: contează cum te simți tu. Dacă poți, spune clar că vrei să se oprească. Notează ce s-a întâmplat, când și cine a văzut. Spune-i șefului, persoanei de încredere (vertrouwenspersoon, dacă există) sau la HR. Angajatorul trebuie să te protejeze și nu poți fi pedepsită pentru că raportezi. Ai văzut că i s-a întâmplat unui coleg? Întreabă-l dacă e bine și oferă-te să fii martor.', x: 'Grensoverschrijdend gedrag este un comportament care trece de limita cuiva. De exemplu: atingeri nedorite, remarci sau glume sexuale, priviri insistente, poze nedorite, amenințări sau țipete. Nu contează dacă celălalt „a vrut doar să glumească”: contează cum te simți tu. Dacă poți, spune clar că vrei să se oprească. Notează ce s-a întâmplat, când și cine a văzut. Spune-i șefului, persoanei de încredere (vertrouwenspersoon, dacă există) sau la HR. Angajatorul trebuie să te protejeze și nimeni nu te poate pedepsi pentru că raportezi. Ai văzut că i s-a întâmplat unui coleg? Întreabă-l dacă e bine și oferă-te să fii martor.' },
    'c.boundaries.p': "Vreau să te oprești.",
    'c.boundaries.s': { m: 'Șeful tău de echipă îți pune des mâna pe spate și spune că arăți „drăguț”. Te simți inconfortabil. El decide turele tale. Ce faci?', f: 'Șeful tău de echipă îți pune des mâna pe spate și spune că arăți „drăguță”. Te simți inconfortabil. El decide turele tale. Ce faci?', x: 'Șeful tău de echipă îți pune des mâna pe spate și spune că arăți „bine”. Te simți inconfortabil. El decide turele tale. Ce faci?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o1': 'Notezi ce se întâmplă și vorbești cu persoana de încredere.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.boundaries.o2': "Nu spui nimic, pentru că el decide turele tale.",
    'c.boundaries.o3': "Demisionezi fără să spui nimănui de ce.",
    'c.boundaries.w': { m: 'Acesta este un comportament nedorit și nu e vina ta. Persoana de încredere te ascultă confidențial și te ajută să alegi următorul pas. Ești protejat când raportezi. Poți vorbi și cu HR.', f: 'Acesta este un comportament nedorit și nu e vina ta. Persoana de încredere te ascultă confidențial și te ajută să alegi următorul pas. Ești protejată când raportezi. Poți vorbi și cu HR.', x: 'Acesta este un comportament nedorit și nu e vina ta. Persoana de încredere te ascultă confidențial și te ajută să alegi următorul pas. Legea te protejează când raportezi. Poți vorbi și cu HR.' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'u.shop': 'În magazin',
    'l.shelves': 'Rafturi și stoc',
    'w.schap': 'raftul (în magazin)',
    'w.vakkenvullen': 'a umple rafturile',
    'w.voorraad': 'stocul',
    'w.houdbaarheidsdatum': 'data de expirare (a se consuma înainte de)',
    'w.prijskaartje': 'eticheta de preț',
    'w.achteraan': 'în spate',
    's.shelves.1': 'Pune produsele noi în spate.',
    's.shelves.2': 'Produsul acesta a expirat.',
    's.shelves.3': 'Mai avem pe stoc?',
    'c.shelves.q': 'Unde găsesc orezul?',
    'c.shelves.a': 'Pe culoarul patru. Vă conduc eu.',
    'l.checkout': 'La casă',
    'w.klant': 'clientul',
    'w.kassa': 'casa de marcat',
    'w.wisselgeld': 'restul (banii pe care îi dai înapoi)',
    'w.bonnetje': 'bonul',
    'w.pinnen': 'a plăti cu cardul',
    'w.contant': 'cash, în numerar',
    's.checkout.1': 'Plătiți cu cardul sau cash?',
    's.checkout.2': 'Poftiți restul.',
    's.checkout.3': 'Pot să văd un act de identitate, vă rog?',
    'c.checkout.q': 'Pot plăti cu cardul aici?',
    'c.checkout.a': 'Da, sigur, se poate.',
    'u.numbers': 'Timp, bani și măsuri',
    'l.counting': 'Numerele', // nieuw, nalezen
    'w.dertien': 'treisprezece (13)', // nieuw, nalezen
    'w.dertig': 'treizeci (30)', // nieuw, nalezen
    'w.zeventien': 'șaptesprezece (17)', // nieuw, nalezen
    'w.zeventig': 'șaptezeci (70)', // nieuw, nalezen
    'w.zevenenveertig': 'patruzeci și șapte (47)', // nieuw, nalezen
    'w.vierenzeventig': 'șaptezeci și patru (74)', // nieuw, nalezen
    's.counting.1': 'Am treisprezece cutii, nu treizeci.', // nieuw, nalezen
    's.counting.2': 'Locația șaptezeci și patru e goală.', // nieuw, nalezen
    's.counting.3': 'Puteți să-l spuneți cifră cu cifră?', // nieuw, nalezen
    'c.counting.q': 'Câte cutii mai sunt?', // nieuw, nalezen
    'c.counting.a': 'Șaptezeci. Șapte, zero.', // nieuw, nalezen
    'l.hours': 'Ore și timp',
    'w.uur': 'ora',
    'w.minuut': 'minutul',
    'w.kwartier': 'un sfert de oră (15 minute)',
    'w.halfuur': 'o jumătate de oră (30 de minute)',
    'w.duren': 'a dura',
    'w.optellen': 'a aduna',
    's.hours.1': 'Încep la șapte și jumătate (7:30).',
    's.hours.2': 'Azi lucrez opt ore.',
    's.hours.3': 'Pauza durează o jumătate de oră.',
    'c.hours.q': 'La ce oră termini?',
    'c.hours.a': 'La patru și un sfert.',
    'l.measures': 'Bani și măsuri',
    'w.euro': 'euro',
    'w.cent': 'centul',
    'w.kilo': 'kilogramul',
    'w.liter': 'litrul',
    'w.meter': 'metrul',
    'w.tellen': 'a număra',
    's.measures.1': 'Costă șase euro cincizeci.',
    's.measures.2': 'Cutia asta cântărește zece kilograme.',
    's.measures.3': 'Am numărat patruzeci de cutii.',
    'c.measures.q': 'Cât de lungă e scândura aia?',
    'c.measures.a': 'Exact doi metri.',
    'c.shelves': 'Cele vechi în față',
    'c.shelves.b': 'Când umpli rafturile, uită-te la data de pe produse. Pune produsele cu data cea mai apropiată în față, iar pe cele noi în spate. Clienții iau din față, așa că produsele vechi se vând primele. Un produs a expirat sau e deteriorat? Ia-l de pe raft și întreabă ce să faci cu el. Ține culoarele libere de cutii și cărucioare. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.shelves.p': 'Ce fac cu produsele expirate?',
    'c.shelves.s': 'Pui lapte nou pe raft. În față e lapte cu o dată mai apropiată. Ce faci?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': 'Laptele nou în spate, cel vechi în față.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o2': 'Laptele nou în față, pentru că e mai proaspăt.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o3': 'Arunci laptele vechi.', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'Clienții iau din față. Când produsele vechi se vând primele, se aruncă mai puțină mâncare.',
    'c.checkout': 'Act de identitate pentru alcool și tutun',
    'c.checkout.b': 'Nu ai voie să vinzi alcool sau tutun cuiva sub 18 ani: așa e legea. Nu știi sigur câți ani are clientul? Cere-i actul de identitate. Multe magazine cer act de identitate oricui pare mai tânăr de 25 de ani. Nu are act, sau are sub 18 ani? Atunci nu îi vinzi și vorbești politicos. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.checkout.p': 'Fără act de identitate nu am voie să vând asta.',
    'c.checkout.s': 'Un tânăr vrea să cumpere bere. Pare să aibă vreo 17 ani. Spune că are 19, dar nu are act de identitate la el. Ce faci?',
    'c.checkout.o1': 'Îi spui că fără act nu poți să-i vinzi.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': 'Îi vinzi, pentru că spune că are 19 ani.',
    'c.checkout.o3': 'Îi vinzi, dar doar o doză.',
    'c.checkout.w': 'Fără act nu poți ști câți ani are. Vânzarea de alcool cuiva sub 18 ani e interzisă prin lege, iar magazinul poate primi amendă.',
    'c.counting': 'Vijfentwintig: întâi 5, apoi 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'În olandeză, numerele de la 0 la 12 au fiecare cuvântul lor: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. Numerele de la 13 la 19 se termină în -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Zecile se termină în -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. De la 21 la 99 se spune întâi ultima cifră: 25 este vijfentwintig, „cinci și douăzeci”. Deci 47 este zevenenveertig, iar 74 este vierenzeventig. Dertien și dertig sună aproape la fel: ascultă finalul. Ai dubii? Repetă cifrele una câte una.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'Patru, șapte? Deci patruzeci și șapte?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'Șeful îți spune: „Ga naar gang zevenenveertig.” Care culoar este?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'Culoarul 47.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'Culoarul 74.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'Culoarul 40.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '„Zevenenveertig” înseamnă „șapte și patruzeci”: întâi 7, apoi 40. Deci este culoarul 47. Mulți nou-veniți aud 74 și merg la culoarul greșit.', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '„Half acht” înseamnă 7:30',
    'c.hours.b': 'În olandeză, „half” se numără spre ora următoare: half acht înseamnă 7:30, nu 8:30. Kwart over acht înseamnă 8:15, iar kwart voor acht înseamnă 7:45. Verifică-ți orele: ora de sfârșit minus ora de început, minus pauza. Pauza de multe ori nu e plătită. Notează-ți orele în fiecare zi.',
    'c.hours.p': '„Half acht”? Adică o jumătate de oră înainte de opt?',
    'c.hours.s': 'Șeful îți spune: „Morgen begin je om half negen.” La ce oră începi mâine?',
    'c.hours.o1': 'La 8:30.',
    'c.hours.o2': 'La 9:30.',
    'c.hours.o3': 'La 8:00.',
    'c.hours.w': '„Half negen” înseamnă o jumătate de oră înainte de nouă: 8:30. Mulți nou-veniți cred că e 9:30 și vin cu o oră mai târziu.',
    'c.measures': 'Numără inteligent, măsoară, nu ghici',
    'c.measures.b': 'Ai multe cutii de numărat? Numără cutiile dintr-un strat și numărul de straturi. Apoi înmulțește: 8 cutii pe strat și 5 straturi fac 40 de cutii. La produsele de curățenie, măsoară cantitatea scrisă pe etichetă. Mai mult nu e mai bine: îți poate răni pielea și costă bani. Ai dubii la un număr? Numără din nou sau întreabă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.measures.p': 'Am numărat de două ori.',
    'c.measures.s': 'Un palet are 6 straturi. Fiecare strat are 8 cutii. Șeful te întreabă câte cutii sunt. Ce spui?',
    'c.measures.o1': '48 de cutii.',
    'c.measures.o2': '14 cutii.',
    'c.measures.o3': 'Cam 50, cred.',
    'c.measures.w': '6 straturi de câte 8 cutii înseamnă 6 ori 8: 48. Să numeri un strat și să înmulțești e rapid, iar un număr real e mai bun decât să ghicești.',
    'u.ai': 'Aplicații inteligente și AI',
    'l.aihelp': 'AI ca ajutor',
    'w.ai': 'AI, inteligența artificială',
    'w.chatbot': 'chatbotul (o aplicație cu care poți vorbi în scris)',
    'w.antwoord': 'răspunsul',
    'w.meekijken': 'a se uita împreună cu cineva, a verifica împreună',
    'w.kloppen': 'a fi corect, a fi adevărat',
    'w.zeker': 'sigur (de ceva), convins',
    's.aihelp.1': 'Poți să-mi explici scrisoarea asta?',
    's.aihelp.2': 'Este corect răspunsul acesta?',
    's.aihelp.3': 'Vă puteți uita puțin împreună cu mine?',
    'c.aihelp.q': { m: 'Ai scris asta singur?', f: 'Ai scris asta singură?', x: 'Ai scris asta tu?' }, // x: nieuw, nalezen
    'c.aihelp.a': 'Da, cu ajutorul AI.',
    'l.aiprivate': 'Ce nu împărtășești',
    'w.persoonlijk': 'personal',
    'w.gegevens': 'datele (nume, adresă, număr)',
    'w.wachtwoord': 'parola',
    'w.typen': 'a tasta, a scrie la tastatură',
    'w.opslaan': 'a salva, a păstra',
    'w.inloggen': 'a intra în cont',
    's.aiprivate.1': 'Nu dau mai departe numele clienților.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    's.aiprivate.2': 'Am voie să folosesc AI pentru munca mea?',
    's.aiprivate.3': 'Parola mea este secretă.',
    'c.aiprivate.q': 'Pune asta în chatbot.',
    'c.aiprivate.a': 'Mai bine nu, conține nume de clienți.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.aifake': 'Fals sau adevărat?',
    'w.echt': 'adevărat, real',
    'w.stem': 'vocea',
    'w.filmpje': 'clipul, filmulețul',
    'w.ophangen': 'a închide (telefonul)',
    'w.nummer': 'numărul (de telefon)',
    'w.haast': 'graba',
    's.aifake.1': 'Asta e adevărat sau fals?',
    's.aifake.2': 'Închid și sun eu înapoi.',
    's.aifake.3': 'Nu trimit bani.',
    'c.aifake.q': 'Bună, ăsta e numărul meu nou. Poți să trimiți repede niște bani?',
    'c.aifake.a': 'Întâi te sun pe numărul tău vechi.',
    'l.aiplan': 'Când decide o aplicație',
    'w.planning': 'planificarea, programul',
    'w.mens': 'omul, persoana',
    'w.computer': 'calculatorul',
    'w.tempo': 'ritmul (de lucru)',
    'w.automatisch': 'automat',
    'w.besluit': 'decizia',
    's.aiplan.1': 'Cine a luat decizia asta?',
    's.aiplan.2': 'Vreau să vorbesc cu un om.',
    's.aiplan.3': 'De ce am mai puține ore în program?',
    'c.aiplan.q': 'Aplicația ți-a făcut programul.',
    'c.aiplan.a': 'Pot să vorbesc cu un om despre asta?',
    'c.aihelp': 'AI-ul ajută, un om verifică',
    'c.aihelp.b': 'Aplicațiile cu AI și chatboturile, ca ChatGPT, pot traduce, pot explica o scrisoare sau te pot ajuta să scrii un mesaj. Asta e util. Dar AI-ul greșește uneori și totuși pare foarte sigur pe el. E vorba de contractul tău, salariul, medicamente sau siguranță? Atunci verifică mereu răspunsul cu un om. De exemplu șeful, departamentul de resurse umane (HR) sau Juridisch Loket.',
    'c.aihelp.p': 'E corect? Vă puteți uita puțin împreună cu mine?',
    'c.aihelp.s': 'Întrebi un chatbot despre contractul tău. Îți spune că nu primești bani de concediu (vakantiegeld). Ce faci?',
    'c.aihelp.o1': 'Ceri celor de la HR sau Juridisch Loket să verifice.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': 'Îl crezi: chatbotul pare foarte sigur.',
    'c.aihelp.o3': 'Nu spui nimic și uiți de asta.',
    'c.aihelp.w': 'Un chatbot poate greși când e vorba de reguli și contracte. În Țările de Jos, aproape orice angajat primește bani de concediu. Un om care cunoaște regulile poate verifica.',
    'c.aiprivate': 'Gândește-te înainte să scrii',
    'c.aiprivate.b': 'Ce scrii într-un chatbot poate fi salvat și folosit de firma care l-a făcut. Așa că nu scrie niciodată BSN-ul tău, o parolă sau datele tale bancare. Nu pune nume sau poze ale clienților, pacienților sau colegilor, nici documente de la muncă. Mulți angajatori au reguli despre AI. Întreabă întâi dacă ai voie să-l folosești pentru muncă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.',
    'c.aiprivate.p': 'Am voie să folosesc AI pentru asta?',
    'c.aiprivate.s': 'Vrei ca un chatbot să scrie un raport despre un client. În raport sunt numele și adresa clientului. Ce faci?',
    'c.aiprivate.o1': 'Întrebi întâi și scoți numele și adresa.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': 'Pui totul în chatbot: e mai repede.',
    'c.aiprivate.o3': 'Trimiți raportul unui prieten să-l verifice.',
    'c.aiprivate.w': 'Numele și adresele sunt date personale. Nu pot ajunge pur și simplu la o altă firmă. Angajatorul tău știe ce aplicații sunt permise.',
    'c.aifake': 'Voci și clipuri false',
    'c.aifake.b': { m: 'Cu AI, infractorii pot copia o voce și pot face poze și clipuri false. Un apel sau un mesaj care sună ca șeful tău, banca ta sau cineva din familie poate fi fals. Fii atent când e grabă, sunt bani la mijloc și un număr nou. Închide și sună tu înapoi la numărul pe care îl știi. O bancă adevărată, un angajator sau poliția nu îți cer niciodată codurile.', f: 'Cu AI, infractorii pot copia o voce și pot face poze și clipuri false. Un apel sau un mesaj care sună ca șeful tău, banca ta sau cineva din familie poate fi fals. Fii atentă când e grabă, sunt bani la mijloc și un număr nou. Închide și sună tu înapoi la numărul pe care îl știi. O bancă adevărată, un angajator sau poliția nu îți cer niciodată codurile.', x: 'Cu AI, infractorii pot copia o voce și pot face poze și clipuri false. Un apel sau un mesaj care sună ca șeful tău, banca ta sau cineva din familie poate fi fals. Atenție când e grabă, sunt bani la mijloc și un număr nou. Închide și sună tu înapoi la numărul pe care îl știi. O bancă adevărată, un angajator sau poliția nu îți cer niciodată codurile.' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.p': 'Închid și sun eu înapoi.',
    'c.aifake.s': 'Îți sună telefonul. O voce care sună exact ca a șefului tău spune: „Plătește factura asta acum, e urgent.” Ce faci?',
    'c.aifake.o1': 'Închizi și îl suni tu pe șef.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aifake.o2': 'Plătești repede: e șeful tău.',
    'c.aifake.o3': 'Îi dai codul tău bancar, ca să poată plăti șeful.',
    'c.aifake.w': 'O voce poate fi copiată cu AI. Graba și banii împreună sunt un semnal de alarmă. Să suni înapoi la un număr cunoscut e o verificare rapidă și sigură.',
    'c.aiplan': 'Cine a decis asta?',
    'c.aiplan.b': 'Tot mai multe firme lasă o aplicație sau un calculator să decidă lucruri. De exemplu, face programul sau îți măsoară ritmul cu scanerul. Poți să întrebi ce informații se strâng despre tine. E o decizie importantă despre tine, ca mai puține ore, un avertisment sau concedierea? Întreabă cine a decis. Un calculator a luat singur acea decizie? Atunci poți cere ca un om să o verifice din nou și să ți-o explice. Notează-ți orele. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'c.aiplan.p': 'Se poate uita un om la asta?',
    'c.aiplan.s': 'Aplicația de planificare îți dă luna viitoare mult mai puține ore. Nimeni nu-ți spune de ce. Ce faci?',
    'c.aiplan.o1': 'Ceri ca un om să-ți explice.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.o2': 'Accepți: aplicația are mereu dreptate.',
    'c.aiplan.o3': 'Întrebi chatbotul din aplicație de ce.', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': 'Aplicațiile greșesc și nu știu totul despre tine. Poți cere o explicație, iar un om se poate uita din nou.',
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': "În seră", // nagelezen (2e lezing)
    'l.harvest': "Recoltare și sortare", // nagelezen (2e lezing)
    'w.kas': "sera", // nagelezen (2e lezing)
    'w.gewas': "cultura (plantele care cresc)", // nagelezen (2e lezing)
    'w.rij': "rândul (de plante)", // nagelezen (2e lezing)
    'w.oogsten': "a recolta", // nagelezen (2e lezing)
    'w.sorteren': "a sorta", // nagelezen (2e lezing)
    'w.krat': "lada", // nagelezen (2e lezing)
    's.harvest.1': "Lucrez în seră.", // nagelezen (2e lezing)
    's.harvest.2': "În ce rând încep?", // nagelezen (2e lezing)
    's.harvest.3': "Lada e plină.", // nagelezen (2e lezing)
    'c.harvest.q': "Câte rânduri ai făcut?", // nagelezen (2e lezing)
    'c.harvest.a': "Patru. Mai am două.", // nagelezen (2e lezing)
    'l.greensafe': "În siguranță în seră", // nagelezen (2e lezing)
    'w.spuitmiddelen': "pesticidele (substanțe chimice pentru plante)", // nagelezen (2e lezing)
    'w.bespoten': "stropit (cu pesticide)", // nagelezen (2e lezing)
    'w.plukkar': "căruciorul de cules", // nagelezen (2e lezing)
    'w.bukken': "a se apleca", // nagelezen (2e lezing)
    'w.drinken': "a bea", // nagelezen (2e lezing)
    'w.hitte': "căldura mare, arșița (când e foarte cald)", // nagelezen (2e lezing)
    's.greensafe.1': "Sera asta a fost stropită?", // nagelezen (2e lezing)
    's.greensafe.2': "Mă duc să beau puțină apă.", // nagelezen (2e lezing)
    's.greensafe.3': "Unde e căruciorul de cules?", // nagelezen (2e lezing)
    'c.greensafe.q': "Pot să lucrez în sera trei?", // nagelezen (2e lezing)
    'c.greensafe.a': "Nu, încă nu. Tocmai a fost stropită.", // nagelezen (2e lezing)
    'c.harvest': "Ritmul și plata la bucată", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': "Într-o seră lucrezi des într-un ritm fix (tempo). Unii angajatori plătesc pe ladă, pe rând sau pe kilogram: asta e plata la bucată (stukloon). Și cu plata la bucată trebuie să câștigi cel puțin salariul minim pentru fiecare oră lucrată. Verifică suma pe rijksoverheid.nl. Notează-ți în fiecare zi orele și lăzile și compară-le cu fluturașul de salariu. E bine să lucrezi repede, dar siguranța e pe primul loc. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': "Câte lăzi am făcut azi?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': "Te plătesc pe ladă. Săptămâna aceasta câștigi mai puțin decât salariul minim pe oră. Ce faci?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': "Arăți lista ta cu ore și lăzi.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': "Nu spui nimic și lucrezi mai repede.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': "Accepți: la plata la bucată, asta e normal.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': "Și la plata la bucată trebuie să primești cel puțin salariul minim pentru fiecare oră lucrată. Lista ta cu ore și lăzi te ajută să arăți ce ai făcut. Dacă nu se corectează, cere ajutor.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': "Căldura și pesticidele", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': "Într-o seră poate fi foarte cald, și primăvara. Bea des apă, și înainte să-ți fie sete, și ia-ți pauzele într-un loc răcoros. Ai amețeli, greață sau dureri de cap? Oprește-te și spune cuiva. Plantele sunt uneori stropite cu substanțe chimice (spuitmiddelen). O seră care tocmai a fost stropită are des un semn pe ușă. Nu intra până nu-ți spune șeful că e din nou sigur. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': "Pot să lucrez deja în sera asta?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': "O seră a fost stropită azi-dimineață. Pe ușă e un semn. Un coleg spune: „Hai, e doar pentru un moment.” Ce faci?", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o1': "Rămâi afară și întrebi când e sigur.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o2': "Intri repede și îți ții respirația.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': "Intri, iar după aceea te speli bine pe mâini.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': "Pesticidele îți pot face rău la piele, la ochi și la plămâni, și când nu simți niciun miros. După stropire există un timp de așteptare înainte să se poată intra din nou. Șeful știe când se termină.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Cifre și date personale",
    'l.details': "Datele tale",
    'w.voornaam': "prenumele",
    'w.achternaam': "numele de familie",
    'w.spellen': "a spune pe litere (a spune literele una câte una)",
    'w.telefoonnummer': "numărul de telefon",
    'w.geboortedatum': "data nașterii",
    'w.formulier': "formularul (o hârtie sau o pagină de completat)",
    's.details.1': "Puteți să-l spuneți pe litere?",
    's.details.2': "Vă dau noul meu număr de telefon.",
    's.details.3': "Formularul ăsta e pentru Administrația fiscală (Belastingdienst).", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.details.q': "Care e numele tău de familie?",
    'c.details.a': "Haddad. Să-l spun pe litere?",
    'l.dates': "Zile și date",
    'w.maandag': "luni",
    'w.week': "săptămâna",
    'w.maand': "luna",
    'w.volgendeweek': "săptămâna viitoare",
    'w.vorigeweek': "săptămâna trecută",
    'w.totenmet': "până … inclusiv (se socotește și ultima zi)",
    's.dates.1': "Pot de luni până joi inclusiv.",
    's.dates.2': "Săptămâna viitoare lucrez patru zile.",
    's.dates.3': "Săptămâna trecută am lucrat patruzeci de ore.",
    'c.dates.q': "Ce dată e azi?",
    'c.dates.a': "E luni, trei iunie.",
    'l.permit': "Acte, integrare și munca ta", // nagelezen AI 22 nov
    'w.papieren': "actele (documentele)", // nagelezen AI 22 nov
    'w.werkvergunning': "permisul de muncă", // nagelezen AI 22 nov
    'w.werknemer': "angajatul (lucrezi pentru un angajator)", // nagelezen AI 22 nov
    'w.zzper': "lucrătorul independent (lucrezi pe cont propriu)", // nagelezen AI 22 nov
    'w.inburgering': "integrarea civică (cursul și examenele pentru nou-veniți)", // nagelezen AI 22 nov
    'w.taalles': "ora de limbă", // nagelezen AI 22 nov
    's.permit.1': "Am voie să lucrez aici cu actele mele?", // nagelezen AI 22 nov
    's.permit.2': { m: "Sunt angajat sau independent?", f: "Sunt angajată sau independentă?", x: 'Lucrez cu contract de muncă sau pe cont propriu?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    's.permit.3': "Lucrez la chemare.", // nagelezen AI 22 nov
    'c.permit.q': "Poți să lucrezi marți?", // nagelezen AI 22 nov
    'c.permit.a': "Nu, atunci am oră de limbă. Miercuri pot.", // nagelezen AI 22 nov
    'l.kids': "Copiii și munca", // nagelezen AI 22 nov
    'w.zwanger': "însărcinată", // nagelezen AI 22 nov
    'w.kinderopvang': "creșa, grădinița", // nagelezen AI 22 nov
    'w.ophalen': "a lua (a merge să iei pe cineva)", // nagelezen AI 22 nov
    'w.ziekkind': "un copil bolnav", // nagelezen AI 22 nov
    'w.ouderschapsverlof': "concediul pentru creșterea copilului", // nagelezen AI 22 nov
    'w.zorgverlof': "concediul de îngrijire (timp liber ca să îngrijești un membru bolnav al familiei)", // nagelezen AI 22 nov
    's.kids.1': "Copilul meu e bolnav. Trebuie să-l iau.", // nagelezen AI 22 nov
    's.kids.2': "Pot să iau concediu pentru o urgență?", // nagelezen AI 22 nov
    's.kids.3': "Angajatorul îmi plătește salariul în continuare?", // nagelezen AI 22 nov
    'c.kids.q': "De ce trebuie să pleci acum?", // nagelezen AI 22 nov
    'c.kids.a': "A sunat creșa. Fiul meu are febră.", // nagelezen AI 22 nov
    'l.body': "Corpul și durerea", // nagelezen AI 22 nov
    'w.hoofd': "capul", // nagelezen AI 22 nov
    'w.rug': "spatele", // nagelezen AI 22 nov
    'w.arm': "brațul", // nagelezen AI 22 nov
    'w.hand': "mâna", // nagelezen AI 22 nov
    'w.buik': "burta", // nagelezen AI 22 nov
    'w.oog': "ochiul", // nagelezen AI 22 nov
    's.body.1': "Mă doare mâna.", // nagelezen AI 22 nov
    's.body.2': "Nu mă simt bine.", // nagelezen AI 22 nov
    's.body.3': "Am căzut pe braț.", // nagelezen AI 22 nov
    'c.body.q': "Unde te doare?", // nagelezen AI 22 nov
    'c.body.a': "La spate. Am ridicat o cutie grea.", // nagelezen AI 22 nov
    'l.jobends': "Când se termină munca ta", // nagelezen AI 22 nov
    'w.eindafrekening': "lichidarea finală (ultima plată când se termină o muncă)", // nagelezen AI 22 nov
    'w.opzeggen': "a rezilia (un contract), a anula", // nagelezen AI 22 nov
    'w.uitschrijven': "a te radia (a-ți scoate numele de pe o listă)", // nagelezen AI 22 nov
    'w.sleutel': "cheia", // nagelezen AI 22 nov
    'w.verhuizen': "a te muta (în altă locuință)", // nagelezen AI 22 nov
    'w.busje': "microbuzul", // nagelezen AI 22 nov
    's.jobends.1': "Mi se plătesc prima de vacanță și zilele libere rămase?", // nagelezen AI 22 nov
    's.jobends.2': "Cer sfatul la Juridisch Loket.", // nagelezen AI 22 nov
    's.jobends.3': "Îmi fac eu o nouă asigurare de sănătate.", // nagelezen AI 22 nov
    'c.jobends.q': "Munca ta se termină vineri. Atunci trebuie să pleci și din casă.", // nagelezen AI 22 nov
    'c.jobends.a': "Care e perioada de preaviz a contractului meu de închiriere?", // nagelezen AI 22 nov
    'c.details': "Datele tale: dă-le corect", // nagelezen AI 22 nov
    'c.details.b': "La începutul unei slujbe îți dai datele. Adică numele, adresa, numărul de telefon, data nașterii și BSN-ul. Spune-ți numele pe litere, încet, literă cu literă. Apoi verifică-ți numele în contract și pe fluturașul de salariu. O greșeală în nume sau în BSN poate face probleme cu salariul sau cu impozitul. Adresă sau număr de telefon nou? Spune-i angajatorului.", // nagelezen AI 22 nov
    'c.details.p': "Îl spun pe litere: A, L, I.", // nagelezen AI 22 nov
    'c.details.s': "La telefon, agenția îți notează numele de familie. Auzi că îl scriu greșit. Ce faci?", // nagelezen AI 22 nov
    'c.details.o1': "Îți spui numele rar, pe litere, și ceri să ți-l citească.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': "Nu spui nimic: o mică greșeală în nume nu contează.", // nagelezen AI 22 nov
    'c.details.o3': "Închizi și speri că vor găsi greșeala mai târziu.", // nagelezen AI 22 nov
    'c.details.w': "Numele tău trebuie să fie la fel în contract, pe fluturașul de salariu și în actul de identitate. Așa salariul și impozitul ies corect. Să-l spui pe litere și să-l asculți citit înapoi e o verificare rapidă.", // nagelezen AI 22 nov
    'c.dates': "Datele: întâi ziua", // nagelezen AI 22 nov
    'c.dates.b': "În olandeză, ziua vine înaintea lunii: 3-6 înseamnă 3 iunie, nu 6 martie. „Tot en met” înseamnă că se socotește și ultima zi. Zilele și lunile se scriu cu literă mică: maandag, juni. Ai dubii despre o dată? Întreabă și repet-o.", // nagelezen AI 22 nov
    'c.dates.p': "Vrei să spui 3 iunie?", // nagelezen AI 22 nov
    'c.dates.s': "Programul tău spune: „Vrij: 3-6 tot en met 5-6”. Când ai liber?", // nagelezen AI 22 nov
    'c.dates.o1': "Pe 3, 4 și 5 iunie.", // nagelezen AI 22 nov
    'c.dates.o2': "Doar pe 3 și 4 iunie.", // nagelezen AI 22 nov
    'c.dates.o3': "De pe 6 martie până pe 6 mai.", // nagelezen AI 22 nov
    'c.dates.w': "Întâi vine ziua, apoi luna: 3-6 înseamnă 3 iunie. „Tot en met” înseamnă că se socotește și 5 iunie, deci ai trei zile libere.", // nagelezen AI 22 nov
    'c.permit': "Munca și integrarea", // nagelezen AI 22 nov
    'c.permit.b': "Trebuie să faci integrarea civică (inburgering)? Spune-i angajatorului și spune-i primăriei (gemeente) că lucrezi. Întreabă din timp dacă orele de limbă se pot potrivi cu programul tău. Nu știi dacă ai voie să lucrezi aici? Verifică înainte să începi, de exemplu la IND, la UWV sau la VluchtelingenWerk. Ți se cere să te înregistrezi ca independent (zzp’er) pentru slujba asta? Cere întâi un sfat. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nagelezen AI 22 nov
    'c.permit.p': "Marți am oră de limbă. Se poate ține cont de asta în programul meu?", // nagelezen AI 22 nov
    'c.permit.s': "Ora ta de limbă e marți dimineața. În programul nou lucrezi atunci. Ce faci?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': "Îi ceri șefului să schimbe programul.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': "Lipsești de la ora de limbă: munca e pe primul loc.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': "Stai acasă marțea și nu spui nimic.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.w': "Integrarea e și o obligație. Mulți angajatori ajută când află din timp. Și primăria (gemeente) te poate ajuta să-ți potrivești planul cu munca.", // nagelezen AI 22 nov
    'c.kids': "Copilul tău e bolnav", // nagelezen AI 22 nov
    'c.kids.b': "Copilul tău s-a îmbolnăvit brusc? Spune-i imediat angajatorului. Pentru primele ore sau zile poți lua concediu pentru urgențe (calamiteitenverlof), iar angajatorul te plătește în continuare. Copilul are nevoie de îngrijire mai mult timp? Atunci poți cere concediu de îngrijire (zorgverlof). Ești însărcinată? Angajatorul nu are voie să te concedieze pentru asta. Întreabă la timp despre concediul de maternitate și concediul pentru creșterea copilului (ouderschapsverlof). Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nagelezen AI 22 nov
    'c.kids.p': "Copilul meu e bolnav. Pot să plec mai devreme azi?", // nagelezen AI 22 nov
    'c.kids.s': "Creșa (kinderopvang) te sună la muncă. Copilul tău are febră și trebuie să meargă acasă. Ce faci?", // nagelezen AI 22 nov
    'c.kids.o1': "Îi spui șefului și ceri concediu pentru urgențe.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': "Pleci fără un cuvânt și explici mâine.", // nagelezen AI 22 nov
    'c.kids.o3': "Rămâi la muncă și îți lași copilul să aștepte până se termină tura.", // nagelezen AI 22 nov
    'c.kids.w': "Un copil bolnav e o urgență acasă. Dacă îi spui întâi șefului, el poate organiza munca. Concediul pentru urgențe e pentru astfel de momente.", // nagelezen AI 22 nov
    'c.body': "Spune ce s-a întâmplat și unde te doare", // nagelezen AI 22 nov
    'c.body.b': "La doctor, spune ce s-a întâmplat și unde te doare. De exemplu: „Ik ben gevallen. Mijn arm doet pijn.” Spune și de cât timp te doare. Nu trebuie să ghicești ce ai: asta verifică doctorul. S-a întâmplat la muncă? Spune-i șefului în aceeași zi.", // nagelezen AI 22 nov
    'c.body.p': "Am căzut. Mă doare brațul.", // nagelezen AI 22 nov
    'c.body.s': "La muncă ai ridicat o cutie grea. Acum te doare tare spatele. Ești la medicul de familie (huisarts). Ce spui?", // nagelezen AI 22 nov
    'c.body.o1': "Unde te doare și ce s-a întâmplat: ai ridicat o cutie grea.", // nagelezen AI 22 nov
    'c.body.o2': "Doar că te simți rău, nimic mai mult.", // nagelezen AI 22 nov
    'c.body.o3': "Numele unei boli pe care l-ai găsit pe internet.", // nagelezen AI 22 nov
    'c.body.w': "Când spui unde te doare și ce s-a întâmplat, doctorul te înțelege mai repede. Doctorul verifică ce e. S-a întâmplat la muncă? Spune-i și șefului.", // nagelezen AI 22 nov
    'c.jobends': "Se termină munca: ce se mai termină?", // nagelezen AI 22 nov
    'c.jobends.b': "Când se termină munca, verifică lichidarea finală (eindafrekening). Zilele libere pe care nu le-ai folosit și prima de vacanță se plătesc de obicei odată cu ea. Locuința, asigurarea de sănătate sau microbuzul prin agenție se pot termina în același timp. Fă-ți la timp propria asigurare de sănătate. Contractul de închiriere are regulile lui: cere un sfat înainte să pleci din casă. Te muți sau pleci din Olanda? Spune-i primăriei (gemeente). Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nagelezen AI 22 nov
    'c.jobends.p': "Când primesc lichidarea finală?", // nagelezen AI 22 nov
    'c.jobends.s': "Munca ta se termină vineri. Asigurarea ta de sănătate e prin agenție. Ce faci?", // nagelezen AI 22 nov
    'c.jobends.o1': "Întrebi când se termină și îți faci la timp asigurarea ta.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': "Nimic: asigurarea continuă de la sine.", // nagelezen AI 22 nov
    'c.jobends.o3': "Aștepți până te îmbolnăvești și abia atunci te ocupi.", // nagelezen AI 22 nov
    'c.jobends.w': "Asigurarea prin agenție se termină des când se termină munca. Când locuiești sau lucrezi în Olanda, de obicei trebuie să ai asigurare de sănătate. Dacă te ocupi la timp, nu rămâi fără asigurare.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Să termini lucrul", // nieuw, nalezen
    'l.workorder': "Fișa de lucru", // nieuw, nalezen
    'w.werkbon': "fișa de lucru (o hârtie sau o aplicație cu sarcina ta)", // nieuw, nalezen
    'w.lezen': "a citi", // nieuw, nalezen
    'w.aantal': "numărul (câte sunt)", // nieuw, nalezen
    'w.materiaal': "materialele (ce îți trebuie pentru lucru)", // nieuw, nalezen
    'w.klaarleggen': "a pregăti (a pune la îndemână ce îți trebuie)", // nieuw, nalezen
    'w.handtekening': "semnătura", // nieuw, nalezen
    's.workorder.1': "Mai întâi citesc fișa de lucru.", // nieuw, nalezen
    's.workorder.2': "Numărul acesta e corect?", // nieuw, nalezen
    's.workorder.3': "Pregătesc materialele.", // nieuw, nalezen
    'c.workorder.q': "Știi ce ai de făcut?", // nieuw, nalezen
    'c.workorder.a': "Aproape. Ce înseamnă cuvântul acesta din fișa de lucru?", // nieuw, nalezen
    'l.handover': "Gata sau nu încă?", // nieuw, nalezen
    'w.opruimen': "a face ordine, a pune lucrurile la loc", // nieuw, nalezen
    'w.nakijken': "a verifica (a te uita încă o dată la lucru)", // nieuw, nalezen
    'w.afmelden': "a anunța că ai terminat (spui că lucrul e gata și pleci)", // nieuw, nalezen
    'w.kapot': "stricat", // nieuw, nalezen
    'w.opslot': "încuiat", // nieuw, nalezen
    'w.bijzonderheid': "ușa", // nieuw, nalezen
    's.handover.1': "Fac ordine la locul meu.", // nieuw, nalezen
    's.handover.2': "Puteți să-mi verificați lucrul?", // nieuw, nalezen
    's.handover.3': "Îl anunț pe șef că am terminat.", // nieuw, nalezen
    'c.handover.q': "E totul gata?", // nieuw, nalezen
    'c.handover.a': "Aproape. Camera patru era încuiată.", // nieuw, nalezen
    'u.tech': "În atelier", // nieuw, nalezen
    'l.workshop': "Unelte în atelier", // nieuw, nalezen
    'w.gereedschap': "uneltele, sculele", // nieuw, nalezen
    'w.zagen': "a tăia cu fierăstrăul", // nieuw, nalezen
    'w.slijpen': "a poliza, a șlefui (a netezi sau a tăia metal cu o mașină)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.vonk': "scânteia", // nieuw, nalezen
    'w.gehoorbescherming': "protecția auditivă (pentru urechi)", // nieuw, nalezen
    'w.lawaai': "zgomotul (mult sunet puternic)", // nieuw, nalezen
    's.workshop.1': "Unde sunt uneltele?", // nieuw, nalezen
    's.workshop.2': "Port protecție auditivă când șlefuiesc.", // nieuw, nalezen
    's.workshop.3': "Atenție la scântei!", // nieuw, nalezen
    'c.workshop.q': "De ce porți ochelari?", // nieuw, nalezen
    'c.workshop.a': "Când tai cu fierăstrăul, pot să-mi intre bucățele în ochi.", // nieuw, nalezen
    'l.power': "Mai întâi oprește curentul", // nieuw, nalezen
    'w.stroom': "curentul, electricitatea", // nieuw, nalezen
    'w.kabel': "cablul", // nieuw, nalezen
    'w.stekker': "ștecherul", // nieuw, nalezen
    'w.onderspanning': "sub tensiune (e curent pe el)", // nieuw, nalezen
    'w.spanningsloos': "fără tensiune, sigur (nu e curent pe el)", // nieuw, nalezen
    'w.elektricien': "electricianul", // nieuw, nalezen
    's.power.1': "Mai e curent aici?", // nieuw, nalezen
    's.power.2': "Cablul acesta e stricat.", // nieuw, nalezen
    's.power.3': "Aștept până e fără tensiune.", // nieuw, nalezen
    'c.power.q': "Poți să schimbi lampa aceea?", // nieuw, nalezen
    'c.power.a': "Curentul e oprit? Dacă nu, îl aștept pe electrician.", // nieuw, nalezen
    'u.garage': "În service-ul auto", // nieuw, nalezen
    'l.garage': "Anvelope, ulei și elevatorul", // nieuw, nalezen
    'w.band': "anvelopa", // nieuw, nalezen
    'w.olie': "uleiul", // nieuw, nalezen
    'w.accu': "bateria mașinii", // nieuw, nalezen
    'w.monteur': "mecanicul", // nieuw, nalezen
    'w.hefbrug': "elevatorul auto (ridică mașina)", // nieuw, nalezen
    'w.lek': "spart, care curge (iese aer sau apă)", // nieuw, nalezen
    's.garage.1': "Anvelopa e spartă.", // nieuw, nalezen
    's.garage.2': "Unde e uleiul nou?", // nieuw, nalezen
    's.garage.3': "Mașina e pe elevator.", // nieuw, nalezen
    'c.garage.q': "Poți să schimbi anvelopele la mașina asta?", // nieuw, nalezen
    'c.garage.a': "Da. Unde sunt anvelopele de iarnă?", // nieuw, nalezen
    'l.carjob': "Clientul decide", // nieuw, nalezen
    'w.proefrit': "proba de drum (un drum de test cu mașina)", // nieuw, nalezen
    'w.rijbewijs': "permisul de conducere", // nieuw, nalezen
    'w.akkoord': "de acord, în regulă (spui „da” la ceva)", // nieuw, nalezen
    'w.kosten': "costurile (ce trebuie plătit)", // nieuw, nalezen
    'w.repareren': "a repara", // nieuw, nalezen
    'w.onderdeel': "piesa (a unei mașini sau a unui aparat)", // nieuw, nalezen
    's.carjob.1': "Clientul e de acord cu costurile?", // nieuw, nalezen
    's.carjob.2': "Piesa aceasta e stricată.", // nieuw, nalezen
    's.carjob.3': "Pot să fac o probă de drum?", // nieuw, nalezen
    'c.carjob.q': "Și frânele sunt proaste. Le faci imediat?", // nieuw, nalezen
    'c.carjob.a': "Mai întâi îl întreb pe șef. Clientul trebuie să fie de acord.", // nieuw, nalezen
    'u.stage': "Stagiul de practică", // nieuw, nalezen
    'l.placement': "Stagiul tău", // nieuw, nalezen
    'w.stage': "stagiul de practică (înveți la o firmă)", // nieuw, nalezen
    'w.praktijkopleider': "îndrumătorul de la firmă (te ghidează la firmă)", // nieuw, nalezen
    'w.stagebegeleider': "coordonatorul de stagiu de la școală (te ghidează din partea școlii)", // nieuw, nalezen
    'w.pok': "contractul de stagiu (îl semnezi tu, școala și firma)", // nieuw, nalezen
    'w.school': "școala", // nieuw, nalezen
    'w.leerbedrijf': "firma de formare (o firmă unde elevii pot învăța)", // nieuw, nalezen
    's.placement.1': "Fac stagiul într-un depozit.", // nieuw, nalezen
    's.placement.2': "Cine e îndrumătorul meu de la firmă?", // nieuw, nalezen
    's.placement.3': "Încă nu am semnat contractul de stagiu.", // nieuw, nalezen
    'c.placement.q': "Când începi stagiul?", // nieuw, nalezen
    'c.placement.a': "Luni. Mai întâi semnăm contractul de stagiu.", // nieuw, nalezen
    'l.review': "Feedback la stagiu", // nieuw, nalezen
    'w.beoordeling': "evaluarea (cât de bine faci)", // nieuw, nalezen
    'w.leerdoel': "obiectivul de învățare (ce vrei să înveți)", // nieuw, nalezen
    'w.voorbeeld': "exemplul", // nieuw, nalezen
    'w.portfolio': "portofoliul (un dosar cu lucrările tale și dovezi)", // nieuw, nalezen
    'w.cijfer': "nota", // nieuw, nalezen
    'w.verslag': "raportul (un text despre lucrul tău)", // nieuw, nalezen
    's.review.1': "Ce pot să fac mai bine?", // nieuw, nalezen
    's.review.2': "Puteți să-mi dați un exemplu?", // nieuw, nalezen
    's.review.3': "Evaluarea mea e săptămâna viitoare.", // nieuw, nalezen
    'c.review.q': "Trebuie să lucrezi mai repede.", // nieuw, nalezen
    'c.review.a': "Bine. Puteți să-mi arătați cum se face mai repede?", // nieuw, nalezen
    'u.society': "Să participi la viața din Olanda", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'l.council': "Primăria și votul", // nieuw, nalezen
    'w.stemmen': "a vota", // nieuw, nalezen
    'w.verkiezing': "alegerile", // nieuw, nalezen
    'w.gemeenteraad': "consiliul local (decide despre orașul tău)", // nieuw, nalezen
    'w.parlement': "parlamentul (face legile)", // nieuw, nalezen
    'w.stempas': "cartea de vot (cardul de care ai nevoie ca să votezi)", // nieuw, nalezen
    'w.burgemeester': "primarul", // nieuw, nalezen
    's.council.1': "Am voie să votez?", // nieuw, nalezen
    's.council.2': "Cartea mea de vot a venit prin poștă.", // nieuw, nalezen
    's.council.3': "Consiliul local decide despre cartierul meu.", // nieuw, nalezen
    'c.council.q': "Mergi miercuri la vot?", // nieuw, nalezen
    'c.council.a': "Da. Am cartea de vot și actul de identitate.", // nieuw, nalezen
    'l.police': "Poliția și drepturile tale", // nieuw, nalezen
    'w.agent': "polițistul", // nieuw, nalezen
    'w.boete': "amenda (bani pe care trebuie să-i plătești ca pedeapsă)", // nieuw, nalezen
    'w.bezwaar': "contestația (spui în scris că nu ești de acord)", // nieuw, nalezen
    'w.rechter': "judecătorul", // nieuw, nalezen
    'w.advocaat': "avocatul", // nieuw, nalezen
    'w.wet': "legea", // nieuw, nalezen
    's.police.1': "Am primit o amendă.", // nieuw, nalezen
    's.police.2': "Vreau să fac contestație.", // nieuw, nalezen
    's.police.3': "Vreau să vorbesc cu un avocat.", // nieuw, nalezen
    'c.police.q': "Îmi arătați actul de identitate?", // nieuw, nalezen
    'c.police.a': "Da, poftim. Ce s-a întâmplat?", // nieuw, nalezen
    'u.online': "Online la lucru", // nieuw, nalezen
    'l.login': "Autentificarea", // nieuw, nalezen
    'w.uitloggen': "a ieși din cont", // nieuw, nalezen
    'w.account': "contul", // nieuw, nalezen
    'w.scherm': "ecranul", // nieuw, nalezen
    'w.vergrendelen': "a bloca (ecranul sau telefonul)", // nieuw, nalezen
    'w.gebruikersnaam': "numele de utilizator", // nieuw, nalezen
    'w.inlogcode': "codul de autentificare (un cod primit prin SMS sau în aplicație)", // nieuw, nalezen
    's.login.1': "Mi-am uitat parola.", // nieuw, nalezen
    's.login.2': "Ies mereu din cont.", // nieuw, nalezen
    's.login.3': "Nu dau nimănui DigiD-ul meu.", // nieuw, nalezen
    'c.login.q': "Poți să intri în cont?", // nieuw, nalezen
    'c.login.a': "Nu, parola mea nu merge.", // nieuw, nalezen
    'l.phish': "E-mailuri false", // nieuw, nalezen
    'w.afzender': "expeditorul", // nieuw, nalezen
    'w.klikken': "a da clic", // nieuw, nalezen
    'w.bijlage': "atașamentul", // nieuw, nalezen
    'w.verdacht': "suspect", // nieuw, nalezen
    'w.ictafdeling': "departamentul IT", // nieuw, nalezen
    'w.wijzigen': "a schimba", // nieuw, nalezen
    's.phish.1': "E-mailul acesta e suspect.", // nieuw, nalezen
    's.phish.2': "Nu deschid atașamentul.", // nieuw, nalezen
    's.phish.3': "Îmi schimb parola imediat.", // nieuw, nalezen
    'c.phish.q': "Ai dat clic pe link?", // nieuw, nalezen
    'c.phish.a': "Da. Sun la departamentul IT.", // nieuw, nalezen
    'l.mychoice': "La ce mă pricep", // nieuw, nalezen
    'w.goedin': "priceput la (ceva), bun la", // nieuw, nalezen
    'w.kiezen': "a alege", // nieuw, nalezen
    'w.beroep': "meseria, felul de muncă", // nieuw, nalezen
    'w.bijbaan': "jobul pe lângă școală (o muncă mică)", // nieuw, nalezen
    'w.nauwkeurig': "atent și exact", // nieuw, nalezen
    'w.meeloopdag': "ziua de observare (o zi în care însoțești pe cineva la lucru)", // nieuw, nalezen
    's.mychoice.1': "Știu să lucrez bine cu mâinile.", // nieuw, nalezen
    's.mychoice.2': "Îmi place să lucrez cu oamenii.", // nieuw, nalezen
    's.mychoice.3': "Pot să vă însoțesc o zi, ca să văd munca?", // nieuw, nalezen
    'c.mychoice.q': "La ce te pricepi?", // nieuw, nalezen
    'c.mychoice.a': "Mă pricep să am grijă de oameni. Acasă am grijă de mama.", // nieuw, nalezen
    'l.nextstep': "După Entree", // nieuw, nalezen
    'w.niveau2': "nivelul 2 (următorul nivel din mbo)", // nieuw, nalezen
    'w.startkwalificatie': "calificarea de bază (o diplomă mbo de nivel 2 sau mai mare)", // nieuw, nalezen
    'w.bbl': "bbl (lucrezi la o firmă și mergi la școală cam o zi pe săptămână)", // nieuw, nalezen
    'w.doorstromen': "a merge mai departe (la un nivel mai mare)", // nieuw, nalezen
    'w.aanmelden': "a te înscrie (la o școală sau la un curs)", // nieuw, nalezen
    'w.opendag': "ziua porților deschise (poți vizita o școală)", // nieuw, nalezen
    's.nextstep.1': "După Entree vreau să merg la nivelul 2.", // nieuw, nalezen
    's.nextstep.2': "Vreau să lucrez și să învăț în același timp.", // nieuw, nalezen
    's.nextstep.3': "Când e ziua porților deschise?", // nieuw, nalezen
    'c.nextstep.q': "Ce faci după Entree?", // nieuw, nalezen
    'c.nextstep.a': "Vreau să fac bbl. Atunci lucrez și învăț.", // nieuw, nalezen
    'l.email': "Cum le scrii celor de la muncă", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'w.mail': "e-mailul", // nieuw, nalezen
    'w.onderwerp': "subiectul (unui e-mail)", // nieuw, nalezen
    'w.beste': "dragă, stimate (la începutul unei scrisori sau al unui e-mail)", // nieuw, nalezen
    'w.beleefd': "politicos", // nieuw, nalezen
    'w.nalezen': "a reciti (a verifica înainte să trimiți)", // nieuw, nalezen
    'w.versturen': "a trimite", // nieuw, nalezen
    's.email.1': "Ce scriu la subiect?", // nieuw, nalezen
    's.email.2': "Îmi mai citesc o dată e-mailul.", // nieuw, nalezen
    's.email.3': "Trimit e-mailul mâine.", // nieuw, nalezen
    'c.email.q': "Ai trimis e-mailul despre ziua ta liberă?", // nieuw, nalezen
    'c.email.a': "Încă nu. Mai întâi îl recitesc.", // nieuw, nalezen
    'l.budget': "Banii tăi în fiecare lună", // nieuw, nalezen
    'w.vastelasten': "cheltuielile fixe (chirie, asigurare, telefon: în fiecare lună)", // nieuw, nalezen
    'w.sparen': "a economisi (bani)", // nieuw, nalezen
    'w.abonnement': "abonamentul (plătești pentru el în fiecare lună)", // nieuw, nalezen
    'w.achterafbetalen': "a plăti mai târziu (cumperi acum, plătești mai târziu)", // nieuw, nalezen
    'w.bedenktijd': "perioada de gândire (timp să te răzgândești)", // nieuw, nalezen
    'w.garantie': "garanția (trebuie să meargă, altfel ți-l repară)", // nieuw, nalezen
    's.budget.1': "Mai întâi plătesc cheltuielile fixe.", // nieuw, nalezen
    's.budget.2': "În fiecare lună economisesc puțin.", // nieuw, nalezen
    's.budget.3': "Reziliez abonamentul acesta.", // nieuw, nalezen
    'c.budget.q': "Cumpără telefonul acum și plătește mai târziu!", // nieuw, nalezen
    'c.budget.a': "Nu, mulțumesc. Să plătești mai târziu e tot o datorie.", // nieuw, nalezen
    'l.healthy': "În formă pentru lucru", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "a dormi", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "micul dejun", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "a face mișcare, a fi activ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "obosit", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "drogurile", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "deprimat (trist de mult timp)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': { m: "Azi sunt foarte obosit.", f: "Azi sunt foarte obosită.", x: "Azi simt o oboseală foarte mare." }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.healthy.2': "Mereu mănânc mai întâi micul dejun.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "În pauză merg puțin pe jos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': { m: "Vrei o pastilă? Așa rămâi treaz.", f: "Vrei o pastilă? Așa rămâi trează.", x: "Vrei o pastilă? Așa nu adormi." }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.a': "Nu, mulțumesc. Nu lucrez sub influență.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Mai întâi citește, apoi începe", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Înainte să începi, citește fișa de lucru (werkbon) sau sarcina din aplicație. Verifică adresa, sarcina și numărul de lucruri. Ceva nu e clar? Întreabă înainte să începi, nu la jumătate. Apoi pregătește uneltele și materialele. Așa câștigi timp și faci mai puține greșeli. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "Pe fișa de lucru scrie zece cutii. E corect?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "Pe fișa de lucru scrie: vopsește camera 3. Colegul tău zice că e camera 5. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Îl întrebi pe șef care cameră e cea bună.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Vopsești camera 3, pentru că așa scrie pe fișa de lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': { m: "Vopsești ambele camere, ca să fii sigur.", f: "Vopsești ambele camere, ca să fii sigură.", x: "Vopsești ambele camere, ca să nu ai nicio îndoială." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Când două lucruri nu se potrivesc, verifici înainte să începi. O întrebare scurtă durează mai puțin decât să refaci lucrul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Spune ce e gata și ce nu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Lucrul nu e gata când te oprești. Mai întâi fă ordine la locul tău și la unelte. Apoi roagă pe cineva să-ți verifice lucrul. Spune-i șefului ce e gata și ce nu. Ceva a mers prost sau ceva e stricat? Spune acum, nu mâine. Să anunți că ai terminat face parte din munca ta. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "Camera patru nu e gata încă. Ușa era încuiată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Ai făcut curat în cinci camere. Camera 4 era încuiată. Tura ta se termină. Ce faci?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "Îi spui șefului că camera 4 nu e gata.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "Pleci acasă: camera 4 era încuiată, nu e vina ta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Scrii pe listă „totul gata”.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "Șeful planifică lucrul. Când știe că camera 4 nu e gata, poate trimite pe altcineva. Așa niciun client nu găsește o cameră murdară.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Ochi, urechi și foc", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Șlefuitul, tăiatul și găuritul fac scântei, bucățele mici și mult zgomot. Poartă ochelari de protecție și protecție auditivă, chiar și pentru o treabă scurtă. Când e foarte zgomotos, angajatorul trebuie să-ți dea protecție auditivă. Scânteile pot porni un incendiu. Pentru sudură, sau șlefuit lângă lucruri care pot arde, sunt reguli în plus (heet werk): întreabă înainte să începi. După lucru, strânge bucățelele de metal. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.workshop.p': "Încep să șlefuiesc. Unde e protecția auditivă?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Trebuie să șlefuiești o bucată mică de metal. Durează un minut. Ochelarii de protecție sunt în altă cameră. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Mai întâi îți iei ochelarii, chiar și pentru un minut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Șlefuiești cu ochii pe jumătate închiși, că e repede.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Ții cealaltă mână în fața ochilor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "O scânteie sau o bucățică de metal în ochi îți poate strica ochiul pentru totdeauna. Asta se poate întâmpla într-o secundă. Ochelarii de protecție ajută, chiar și pentru o treabă scurtă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Curentul: niciodată așa, pur și simplu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Nu lucra niciodată la ceva care e sub tensiune (onder spanning). Mai întâi un coleg instruit face totul sigur: oprește curentul și verifică. Doar oamenii cu instruirea potrivită au voie să facă asta. Vezi un cablu sau un ștecher stricat? Nu-l folosi și spune-i imediat șefului. Nu știi sigur dacă e oprit curentul? Atunci e pornit. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Văd un cablu stricat. Cine se poate uita la el?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Trebuie să agăți o lampă. Un coleg zice: „Curentul e oprit, cred.” Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Rogi un coleg instruit să verifice dacă e oprit curentul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Începi, dar porți mănuși groase când atingi firele.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Aprinzi și stingi lumina, ca să verifici dacă e oprit curentul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "„Cred” nu e destul când e vorba de curent. Un șoc electric te poate omorî. Un coleg instruit verifică dacă nu mai e curent, și apoi poți începe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "În siguranță sub mașină", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Nu intra niciodată sub o mașină care stă doar pe cric. Mașina trebuie să stea bine pe elevator sau pe capre. Uleiul vărsat face podeaua alunecoasă: curăță-l imediat. Uleiul vechi, bateriile și produsele de curățenie sunt deșeuri periculoase. Merg într-un loc special, niciodată la gunoiul obișnuit sau în canalizare. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "E ulei pe jos. Îl curăț.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Trebuie să te uiți sub o mașină care stă doar pe cric. Un coleg zice: „E în regulă, fă repede.” Ce faci?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "Aștepți elevatorul sau caprele.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "Intri repede sub ea, cu picioarele afară.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "Îl rogi pe coleg să țină mașina.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "Cricul poate aluneca. O mașină e foarte grea și de sub ea nu poți ieși repede. Caprele sau elevatorul țin mașina pe loc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Lucru în plus? Întreabă întâi clientul", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "Găsești mai multe probleme decât scrie pe fișa de lucru? Nu le repara pur și simplu. Clientul trebuie mai întâi să fie de acord cu lucrul în plus și cu costurile. Șeful sau recepția îl sună pe client. Proba de drum se face doar cu permisiune și doar cu un permis de conducere valabil. Notează ce ai făcut și ce piese ai folosit. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Mai văd o problemă. Cine îl sună pe client?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Schimbi uleiul la o mașină. Și frânele sunt proaste. Trebuie să fie gata într-o oră. Ce faci?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "Îi spui șefului, ca să-l sune pe client.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o2': "Repari și frânele, pentru siguranță.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "Nu spui nimic: nu sunt pe fișa de lucru.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "Clientul plătește, deci clientul decide. Fără acordul lui, service-ul nu are voie să facă pur și simplu lucru în plus. Frânele proaste sunt periculoase, deci e important să spui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Mai întâi semnezi, apoi începi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': { m: "În Entree înveți mult la o firmă: e stagiul tău de practică (stage sau bpv). Înainte să începi, tu, școala și firma semnați un contract: POK. La firmă te ajută îndrumătorul (praktijkopleider). La școală te ajută coordonatorul de stagiu (stagebegeleider). Ești bolnav? Sună la firmă înainte de ora de începere și anunță și școala. Regulile diferă de la o școală la alta: întreabă-l pe coordonatorul de stagiu.", f: "În Entree înveți mult la o firmă: e stagiul tău de practică (stage sau bpv). Înainte să începi, tu, școala și firma semnați un contract: POK. La firmă te ajută îndrumătorul (praktijkopleider). La școală te ajută coordonatorul de stagiu (stagebegeleider). Ești bolnavă? Sună la firmă înainte de ora de începere și anunță și școala. Regulile diferă de la o școală la alta: întreabă-l pe coordonatorul de stagiu.", x: "În Entree înveți mult la o firmă: e stagiul tău de practică (stage sau bpv). Înainte să începi, tu, școala și firma semnați un contract: POK. La firmă te ajută îndrumătorul (praktijkopleider). La școală te ajută coordonatorul de stagiu (stagebegeleider). Te-ai îmbolnăvit? Sună la firmă înainte de ora de începere și anunță și școala. Regulile diferă de la o școală la alta: întreabă-l pe coordonatorul de stagiu." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Încep doar după ce e semnat contractul de stagiu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "Firma îți cere să începi mâine. Contractul de stagiu (POK) nu e semnat încă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Îl rogi pe coordonator să rezolve întâi POK-ul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Începi mâine și semnezi POK-ul când ai timp.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Începi, dar deocamdată nu spui nimic școlii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "În POK scrie ce înveți și cine te ajută. Fără un POK semnat, stagiul tău s-ar putea să nu conteze pentru diplomă. De aceea îl semnezi înainte să începi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Cere feedback, și un exemplu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "La stagiu, oamenii îți spun ce merge bine și ce poate fi mai bine: feedback. E normal și te ajută să înveți. Nu înțelegi? Cere un exemplu. Cere și tu feedback, de exemplu o dată pe săptămână. Ceva chiar nu e în regulă la stagiu? Mai întâi vorbește cu îndrumătorul de la firmă. Nu ajută? Atunci du-te la coordonatorul de stagiu de la școală.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "Ce a mers bine și ce poate fi mai bine?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Îndrumătorul îți spune: „Trebuie să lucrezi mai atent.” Nu știi ce vrea să spună. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Ceri un exemplu de ce trebuie să faci altfel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': { m: "Zici da și speri că o să-ți dai seama singur.", f: "Zici da și speri că o să-ți dai seama singură.", x: "Zici da și speri că o să-ți dai seama fără ajutor." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "De acum lucrezi mult mai încet, ca să nu greșești nimic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Cu un exemplu știi ce să schimbi. Când întrebi, arăți că vrei să înveți. Îndrumătorilor le place asta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Cine are voie să voteze?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "În Țările de Jos alegi, prin vot, cine decide. Consiliul local (gemeenteraad) decide despre orașul tău. Tweede Kamer face legile pentru toată țara. Cu cetățenie olandeză poți vota la toate alegerile, de la 18 ani. Pentru consiliul local pot vota mai mulți oameni. Oamenii din altă țară UE care locuiesc aici pot vota. Oamenii din afara UE pot vota după 5 ani de ședere legală. Primăria (gemeente) îți trimite cartea de vot (stempas). Ia-o cu tine, împreună cu actul de identitate. Nu știi sigur dacă ai voie să votezi? Întreabă la primărie.", // nagelezen AI 22 nov
    'c.council.p': "Am voie să votez pentru consiliul local?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Vii din Maroc și locuiești legal aici de șase ani, fără cetățenie olandeză. Ce e adevărat?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "Ai voie să votezi pentru consiliul local.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Ai voie să votezi și pentru Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Fără pașaport olandez nu ai voie să votezi.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "După 5 ani de ședere legală ai voie să votezi pentru consiliul local. Pentru Tweede Kamer îți trebuie cetățenie olandeză.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Actul tău și drepturile tale", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': { m: "De la 14 ani trebuie să-ți arăți actul de identitate când ți-l cere poliția. Așa că ține-l mereu la tine. Ai primit o scrisoare de la primărie sau de la UWV, de exemplu? Nu ești de acord cu decizia din ea? Atunci poți face contestație în scris (bezwaar maken). Fă-o înainte de data din scrisoare. Poliția și judecătorul trebuie să-i trateze pe toți la fel. Ești reținut? Poți cere un avocat. Juridisch Loket dă sfaturi gratuite.", f: "De la 14 ani trebuie să-ți arăți actul de identitate când ți-l cere poliția. Așa că ține-l mereu la tine. Ai primit o scrisoare de la primărie sau de la UWV, de exemplu? Nu ești de acord cu decizia din ea? Atunci poți face contestație în scris (bezwaar maken). Fă-o înainte de data din scrisoare. Poliția și judecătorul trebuie să-i trateze pe toți la fel. Ești reținută? Poți cere un avocat. Juridisch Loket dă sfaturi gratuite.", x: "De la 14 ani trebuie să-ți arăți actul de identitate când ți-l cere poliția. Așa că ține-l mereu la tine. Ai primit o scrisoare de la primărie sau de la UWV, de exemplu? Nu ești de acord cu decizia din ea? Atunci poți face contestație în scris (bezwaar maken). Fă-o înainte de data din scrisoare. Poliția și judecătorul trebuie să-i trateze pe toți la fel. Te reține poliția? Poți cere un avocat. Juridisch Loket dă sfaturi gratuite." }, // nagelezen AI 22 nov
    'c.police.p': "Nu sunt de acord cu decizia asta. Fac contestație.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Primești o scrisoare de la primărie. Nu ești de acord cu decizia lor. În scrisoare scrie că ai șase săptămâni. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Scrii o contestație, înainte de data aceea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Îi suni o dată și aștepți până te sună ei înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Aștepți: după șase săptămâni se oprește singur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "Contestația o faci în scris, înainte de data din scrisoare. După data aceea, de multe ori e prea târziu. Juridisch Loket te poate ajuta s-o scrii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "Contul tău e doar al tău", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Parola ta și DigiD-ul tău sunt doar pentru tine. Nu le da nimănui, nici angajatorului, nici unui coleg. Pe un calculator comun, ieși mereu din cont când ai terminat. Pleci o clipă? Blochează-ți ecranul. Ți-ai uitat parola? Cere una nouă de la departamentul IT (ICT-afdeling). Regulile pentru calculatoare diferă de la o firmă la alta: întreabă la departamentul IT care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Plec o clipă. Îmi blochez ecranul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Șeful îți cere DigiD-ul și parola, ca să-ți rezolve repede actele. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': { m: "Spui nu și intri singur în cont, iar el te ajută.", f: "Spui nu și intri singură în cont, iar el te ajută.", x: "Spui nu și intri tu în cont, iar el te ajută." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "I le dai de data asta, pentru că e șeful tău.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Le scrii pe o hârtie, ca să le poată folosi mai târziu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': { m: "Cu DigiD-ul tău, cineva îți poate vedea și schimba impozitele, alocațiile și actele de sănătate. E doar pentru tine. Poți intra singur în cont și să lași pe cineva să te ajute.", f: "Cu DigiD-ul tău, cineva îți poate vedea și schimba impozitele, alocațiile și actele de sănătate. E doar pentru tine. Poți intra singură în cont și să lași pe cineva să te ajute.", x: "Cu DigiD-ul tău, cineva îți poate vedea și schimba impozitele, alocațiile și actele de sănătate. E doar pentru tine. Poți intra tu în cont și să lași pe cineva să te ajute." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Grabă și un buton? Nu da clic", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': { m: "Un e-mail fals (phishing) arată adesea ca unul adevărat. Vrea să acționezi repede: „Contul tău se închide azi!” Verifică expeditorul. Nu da clic pe un link și nu deschide un atașament la care nu te așteptai. Intră singur pe site-ul sau în aplicația adevărată. Ai dat totuși clic? Schimbă-ți imediat parola și sună la departamentul IT. Nu e o rușine: cu cât află mai repede, cu atât mai bine. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", f: "Un e-mail fals (phishing) arată adesea ca unul adevărat. Vrea să acționezi repede: „Contul tău se închide azi!” Verifică expeditorul. Nu da clic pe un link și nu deschide un atașament la care nu te așteptai. Intră singură pe site-ul sau în aplicația adevărată. Ai dat totuși clic? Schimbă-ți imediat parola și sună la departamentul IT. Nu e o rușine: cu cât află mai repede, cu atât mai bine. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", x: "Un e-mail fals (phishing) arată adesea ca unul adevărat. Vrea să acționezi repede: „Contul tău se închide azi!” Verifică expeditorul. Nu da clic pe un link și nu deschide un atașament la care nu te așteptai. Intră tu pe site-ul sau în aplicația adevărată. Ai dat totuși clic? Schimbă-ți imediat parola și sună la departamentul IT. Nu e o rușine: cu cât află mai repede, cu atât mai bine. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "Am dat clic pe un link suspect.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Ai dat clic pe un link dintr-un e-mail și ți-ai scris parola. Apoi vezi că e-mailul era fals. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Îți schimbi parola și suni la departamentul IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Ștergi e-mailul, ca să nu mai dea nimeni clic pe el.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Aștepți o zi, să vezi dacă merge ceva prost.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Cu parola ta, altcineva poate intra în sistemele firmei. Când o schimbi repede și anunți departamentul IT, ei pot opri asta la timp.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Punctele tale tari contează", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "La ce te pricepi? Gândește-te la muncă, la școală și la casă. Grija pentru familie, un job pe lângă școală sau voluntariatul contează și ele. Ce îți place și ce nu-ți place? Nu știi ce muncă ți se potrivește? Cere să însoțești pe cineva la lucru o zi (meeloopdag). Îndrumătorul de la școală te poate ajuta să alegi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Știu să mă înțeleg bine cu oamenii. Acasă ajut mult.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "La școală te întreabă: „La ce te pricepi?” N-ai avut niciodată un loc de muncă plătit. Ce spui?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Ce faci bine acasă, de exemplu grija pentru alții.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Că nu știi încă, fiindcă n-ai avut niciodată un job.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Că poți face orice fel de muncă, absolut tot.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Și abilitățile de acasă contează. Grija pentru alții, planificarea și ajutorul sunt abilități de care au nevoie angajatorii. Spune ce ai făcut, cu un exemplu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "După Entree: nivelul 2 sau muncă", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Cu o diplomă Entree poți merge mai departe la nivelul 2 din mbo. O diplomă de nivel 2 sau mai mare e o calificare de bază (startkwalificatie). Te ajută să găsești de lucru și să-l păstrezi. În bbl lucrezi la o firmă și mergi la școală cam o zi pe săptămână. Pentru asta îți trebuie un loc de muncă sau un loc de învățare la lucru (leerwerkbaan). Du-te la o zi a porților deschise și vorbește cu îndrumătorul de la școală.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Pot să merg la nivelul 2 după Entree?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Ai diploma Entree. O firmă îți oferă un loc de muncă fără formare. Tu vrei să înveți mai departe. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Întrebi firma dacă e posibil un loc bbl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Iei jobul și te oprești din învățat pentru totdeauna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Stai acasă până te sună o școală.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "Cu bbl lucrezi și înveți în același timp. Câștigi bani și primești o diplomă de nivel 2. Multor firme le place asta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Un e-mail scurt: cine, ce, când", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Un e-mail către lucru e scurt și politicos. Începe cu un salut, de exemplu „Beste Karin,”. Apoi spune ce vrei și când. Încheie cu un salut și numele tău complet. Scrie un subiect scurt, de exemplu „Vrij op vrijdag”. Recitește e-mailul înainte să-l trimiți.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Dragă Karin, pot să am liber vineri? Salutări, Ali Haddad", // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.email.s': "Vrei o zi liberă vinerea viitoare. Ce e-mail către șef e cel mai bun?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "„Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "„Vrijdag ben ik er niet.” (fără salut și fără numele tău).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Un e-mail lung despre săptămâna ta, cu întrebarea la final.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Un e-mail bun are un salut, o întrebare clară și numele tău. Așa șeful poate răspunde repede.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Întâi cheltuielile fixe", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Când primești salariul, plătește întâi cheltuielile fixe: chiria, asigurarea și telefonul. Încearcă să pui deoparte o sumă mică în fiecare lună, chiar și 10 euro. Cumperi acum, plătești mai târziu e tot o datorie. Ai cumpărat ceva online? Atunci de obicei te poți răzgândi în 14 zile. Păstrează bonul: îți trebuie pentru garanție.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Prefer să plătesc acum. Așa nu am datorii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Azi primești salariul. Vrei pantofi noi, iar chiria nu e plătită încă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Plătești întâi chiria, apoi vezi ce a rămas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Cumperi pantofii și plătești chiria mai târziu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Cumperi pantofii cu „plătești mai târziu”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Chiria, asigurarea și telefonul revin în fiecare lună. Când le plătești întâi pe ele, știi câți bani au rămas. Așa nu faci datorii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Somn, mâncare și fără droguri", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "Lucrezi mai bine și mai sigur când dormi destul, chiar și după o tură târzie. Mănâncă micul dejun și bea apă în timpul zilei. Fă mișcare în pauză, de exemplu o plimbare scurtă. Să lucrezi sub influența alcoolului sau a drogurilor e periculos, și majoritatea angajatorilor interzic asta. Te simți deprimat de mult timp sau nu te poți opri din băut sau din consum? Vorbește cu medicul de familie (huisarts). Te poate ajuta și păstrează secretul.", f: "Lucrezi mai bine și mai sigur când dormi destul, chiar și după o tură târzie. Mănâncă micul dejun și bea apă în timpul zilei. Fă mișcare în pauză, de exemplu o plimbare scurtă. Să lucrezi sub influența alcoolului sau a drogurilor e periculos, și majoritatea angajatorilor interzic asta. Te simți deprimată de mult timp sau nu te poți opri din băut sau din consum? Vorbește cu medicul de familie (huisarts). Te poate ajuta și păstrează secretul.", x: "Lucrezi mai bine și mai sigur când dormi destul, chiar și după o tură târzie. Mănâncă micul dejun și bea apă în timpul zilei. Fă mișcare în pauză, de exemplu o plimbare scurtă. Să lucrezi sub influența alcoolului sau a drogurilor e periculos, și majoritatea angajatorilor interzic asta. Ai de mult timp o stare de tristețe sau nu te poți opri din băut sau din consum? Vorbește cu medicul de familie (huisarts). Te poate ajuta și păstrează secretul." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': { m: "Mă simt deprimat de mult timp. Pot să fac o programare?", f: "Mă simt deprimată de mult timp. Pot să fac o programare?", x: "De mult timp am o stare de tristețe. Pot să fac o programare?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': { m: "Diseară ai tură de noapte. Un coleg îți oferă o pastilă, ca să rămâi treaz. Ce faci?", f: "Diseară ai tură de noapte. Un coleg îți oferă o pastilă, ca să rămâi trează. Ce faci?", x: "Diseară ai tură de noapte. Un coleg îți oferă o pastilă, ca să nu adormi. Ce faci?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Spui nu și dormi câteva ore înainte de tură.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Iei o jumătate de pastilă, nu e periculos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "O iei, dar nu spui nimănui de la lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': { m: "Pastilele de la un coleg pot fi droguri. Te pot îmbolnăvi sau te pot face să greșești la lucru. Somnul e calea sigură ca să rămâi treaz.", f: "Pastilele de la un coleg pot fi droguri. Te pot îmbolnăvi sau te pot face să greșești la lucru. Somnul e calea sigură ca să rămâi trează.", x: "Pastilele de la un coleg pot fi droguri. Te pot îmbolnăvi sau te pot face să greșești la lucru. Să dormi destul e calea sigură ca să nu-ți fie somn în tură." }, // nieuw, nalezen // nagelezen AI 22 nov
    // Vertaalronde 5 november 2026: u.sick (l.backtowork), l.feelwell, l.food, u.delivery (l.parcel, l.road).
    'u.sick': "Boală", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Înapoi la muncă după boală", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "a crește treptat (încet, pas cu pas)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "jumătăți de zi (lucrezi doar o parte din zi)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "munca ușoară (nu e grea)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "munca grea", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "a se reface, a se face bine", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "bine ai revenit", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Încep cu jumătăți de zi.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Pot să fac deja muncă ușoară. Muncă grea încă nu.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "Medicul de medicina muncii spune: crește treptat, încet.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Bine ai revenit! Te simți mai bine?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Da, merge mai bine. O iau ușor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Revii pas cu pas", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Te simți mai bine? Spune-i angajatorului că poți lucra din nou (betermelden). După o boală mai lungă, de multe ori începi pas cu pas: întâi mai puține ore sau muncă mai ușoară. Medicul de medicina muncii (bedrijfsarts) te sfătuiește ce poți face. Boala durează mai mult? Atunci tu și angajatorul faceți împreună un plan pentru întoarcerea ta. Așa spune legea (Wet verbetering poortwachter). Spune clar ce poți face și ce nu încă. Nu trebuie să le spui colegilor ce boală ai avut. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Asta pot deja. Aia încă nu pot.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': { m: "Ai fost bolnav trei săptămâni. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?", f: "Ai fost bolnavă trei săptămâni. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?", x: "Ai lipsit trei săptămâni din cauza bolii. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Spui calm că acum poți face muncă ușoară și ce nu poți face încă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Ridici totuși cutiile: nu vrei să faci probleme.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Pleci acasă fără un cuvânt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Șeful vrea să revii la muncă și să fii bine. Când spui clar ce poți face, poate planifica munca. Prea mult, prea devreme te poate îmbolnăvi din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Să te simți bine la muncă", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "presiunea la muncă (prea mult de lucru în prea puțin timp)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "a sta treaz în pat (nu poți dormi)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "munca în schimburi (schimburi de dimineață, de după-amiază și de noapte, pe rând)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "dorul de casă (îți lipsește casa)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "familia", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "singur", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Dorm prost din cauza muncii în schimburi.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': { m: "E prea mult. Nu mă descurc singur.", f: "E prea mult. Nu mă descurc singură.", x: "E prea mult. Nu mă descurc fără ajutor." }, // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Mi-e dor de casă. Familia mea e departe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "E totul în regulă cu tine?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': { m: "Nu prea. Des stau treaz în pat.", f: "Nu prea. Des stau trează în pat.", x: "Nu prea. Des nu pot să adorm." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': { m: "Prea mult? Nu trebuie să faci totul singur", f: "Prea mult? Nu trebuie să faci totul singură", x: "Prea mult? Nu trebuie să faci totul fără ajutor" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Toată lumea se simte uneori obosită, stresată sau tristă. Prea mult de lucru (werkdruk), somnul prost din cauza schimburilor sau dorul de familie pot face totul greu. Nu trebuie să duci povara fără ajutor, iar să spui „e prea mult” nu e o slăbiciune. Vorbește cu cineva în care ai încredere. De exemplu cu șeful, cu medicul de medicina muncii (bedrijfsarts) sau cu medicul tău de familie (huisarts). Sau cu persoana de încredere (vertrouwenspersoon), dacă firma ta are una. Poți cere și tu o discuție cu medicul de medicina muncii. Medicii nu-i spun șefului ce le-ai spus. Te gândești la sinucidere sau îți faci griji pentru cineva? Sună la 113 (gratuit, zi și noapte) sau scrie pe chat la 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Nu mă simt prea bine. Pot să vorbesc puțin cu tine?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "De câteva săptămâni dormi prost și munca e prea multă. Te simți foarte obosit. Ce faci?", f: "De câteva săptămâni dormi prost și munca e prea multă. Te simți foarte obosită. Ce faci?", x: "De câteva săptămâni dormi prost și munca e prea multă. Simți o oboseală foarte mare. Ce faci?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "Îi spui șefului sau medicului de medicina muncii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Nu spui nimic și muncești mai mult și mai repede.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Rămâi acasă și nu spui nimănui de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Să spui asta din timp nu e o slăbiciune. Atunci puteți căuta împreună o soluție, de exemplu alte schimburi. Nu trebuie să treci prin asta fără ajutor.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.food': "Lucrul cu alimente", // nieuw, nalezen
    'w.mes': "cuțitul", // nieuw, nalezen
    'w.snijhandschoen': "mănușa anti-tăiere (o mănușă care te apără de tăieturi)", // nieuw, nalezen
    'w.vriescel': "camera de congelare (o cameră foarte rece)", // nieuw, nalezen
    'w.sieraden': "bijuteriile (un inel, un ceas, cercei)", // nieuw, nalezen
    'w.pleister': "plasturele (pentru o tăietură mică)", // nieuw, nalezen
    'w.vlees': "carnea", // nieuw, nalezen
    's.food.1': "Îmi dau jos bijuteriile.", // nieuw, nalezen
    's.food.2': "Unde sunt mănușile anti-tăiere?", // nieuw, nalezen
    's.food.3': "În camera de congelare port o geacă groasă.", // nieuw, nalezen
    'c.food.q': "De ce curățăm linia acum?", // nieuw, nalezen
    'c.food.a': "Urmează un produs fără nuci.", // nieuw, nalezen
    'c.food': "Mâini curate, alimente sigure", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Lucrul cu alimente are reguli stricte de igienă: boneta, haine de lucru curate, mâini spălate și fără bijuterii. Aceste reguli sunt aceleași pentru toți. Ele nu spun nimic despre tine: păstrează alimentele sigure pentru oamenii care le mănâncă. Când lucrezi cu cuțitul, poartă mereu mănușa anti-tăiere. Într-o cameră rece sau într-o cameră de congelare, poartă hainele groase pe care le primești și încălzește-te în pauză. Te simți rău sau ai o rană la mână? Anunță asta înainte să începi. Atunci poți primi un plasture special sau, pentru o vreme, altă muncă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Am o tăietură mică la mână. Pot să primesc un plasture?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "Acasă te-ai tăiat puțin la deget. Azi lucrezi cu carne. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "Îi spui șefului și ceri un plasture.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Nu spui nimic: e doar o tăietură mică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Pui o mănușă peste ea, ca să nu vadă nimeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "O rană mică poate aduce microbi în alimente. Când o anunți, poți primi un plasture special sau, pentru o vreme, altă muncă. E normal s-o anunți: nimeni nu te învinovățește pentru asta.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "Transport și livrări", // nieuw, nalezen
    'l.parcel': "Livrarea coletelor", // nieuw, nalezen
    'w.pakket': "coletul", // nieuw, nalezen
    'w.bestelbus': "duba de livrare", // nieuw, nalezen
    'w.bezorgen': "a livra (a duce la client)", // nieuw, nalezen
    'w.inladen': "a încărca (a pune lucrurile în dubă)", // nieuw, nalezen
    'w.aanbellen': "a suna la ușă", // nieuw, nalezen
    'w.bewijs': "dovada (ceva care arată ce s-a întâmplat)", // nieuw, nalezen
    's.parcel.1': "Scanez fiecare colet.", // nieuw, nalezen
    's.parcel.2': "Clientul nu e acasă.", // nieuw, nalezen
    's.parcel.3': "Ați putea primi un colet pentru vecini?", // nieuw, nalezen
    'c.parcel.q': "Coletul ăsta e pentru mine?", // nieuw, nalezen
    'c.parcel.a': "Da. Semnați aici, vă rog.", // nieuw, nalezen
    'l.road': "În siguranță și corect pe drum", // nieuw, nalezen
    'w.rijden': "a conduce (o mașină)", // nieuw, nalezen
    'w.zwaar': "greu", // nieuw, nalezen
    'w.steekwagen': "căruciorul de mână (un cărucior pentru cutii grele)", // nieuw, nalezen
    'w.route': "traseul (drumul pe care îl faci)", // nieuw, nalezen
    'w.loondienst': "cu contract de muncă (lucrezi pentru un patron și primești salariu)", // nieuw, nalezen
    'w.bepalen': "a decide (a spune cum trebuie făcut)", // nieuw, nalezen
    's.road.1': "Coletul ăsta e prea greu. Iau căruciorul.", // nieuw, nalezen
    's.road.2': "E alunecos. Conduc încet.", // nieuw, nalezen
    's.road.3': "Cine decide traseul și orele mele?", // nieuw, nalezen
    'c.road.q': "Mai poți face o cursă azi?", // nieuw, nalezen
    'c.road.a': "Nu, atunci nu mai am timp de pauză.", // nieuw, nalezen
    'c.parcel': "Nu e nimeni acasă sau coletul e deteriorat", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Clientul nu e acasă? Urmează regulile firmei tale: încearcă la vecini sau ia coletul înapoi. Nu-l lăsa pur și simplu la ușă, decât dacă clientul a cerut asta. Un colet e deteriorat sau ud? Nu-l livra ca și cum totul ar fi în regulă. Fă o poză ca dovadă și raportează în scaner sau în aplicație. E mereu mai bine să spui sincer o problemă decât s-o ascunzi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Coletul ăsta e deteriorat. Uite o poză.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Clientul nu e acasă, iar vecinii nici ei. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Scanezi „nu e acasă” și iei coletul înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "Îl scanezi ca livrat și îl lași la ușă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Îl ascunzi după tomberon, ca să nu-l vadă nimeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Un colet scanat ca livrat trebuie să fie chiar la client. Când scanezi ce s-a întâmplat de fapt, clientul poate primi coletul mai târziu și nimeni nu crede că l-ai pierdut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "În siguranță pe drum și muncă corectă", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Nu ține niciodată telefonul în mână când conduci: e interzis. Folosește un suport pentru navigație. Ia-ți pauzele, și într-o zi aglomerată. Un colet greu? Folosește căruciorul sau ridicați-l împreună. Gheață sau zăpadă? Condu încet: e mai bine să întârzii decât să ai un accident. Unele firme spun că lucrezi pe cont propriu (zelfstandig). Dar cine decide orele, traseul și hainele tale? Dacă firma decide toate astea, s-ar putea să lucrezi totuși cu contract de muncă (in loondienst). Atunci ai adesea mai multe drepturi, de exemplu salariu în timpul bolii. Mai multe despre asta în lecția „Acte, integrare și munca ta”. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Acum îmi iau pauza. Apoi conduc mai departe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "Firma spune că lucrezi pe cont propriu. Dar ea decide orele, traseul și hainele tale. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Ceri un sfat: poate lucrezi de fapt cu contract de muncă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Nimic: în contract scrie „pe cont propriu”, deci așa e.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Lucrezi mai multe ore, ca să câștigi la fel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Contează cum lucrezi de fapt, nu doar cuvântul din contract. Dacă firma decide cum, când și unde lucrezi, de multe ori lucrezi cu contract de muncă. Atunci ai mai multe drepturi.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Măsurarea", // nieuw, nalezen
    'w.rolmaat': "ruleta", // nieuw, nalezen
    'w.waterpas': "nivela, bolobocul (arată dacă ceva e drept)", // nieuw, nalezen
    'w.meten': "a măsura", // nieuw, nalezen
    'w.rechtlijn': "drept (nu strâmb)", // nieuw, nalezen
    'w.plank': "scândura", // nieuw, nalezen
    'w.schroef': "șurubul", // nieuw, nalezen
    's.measure.1': "Cât de lungă e scândura asta?", // nieuw, nalezen
    's.measure.2': "Peretele nu e drept.", // nieuw, nalezen
    's.measure.3': "Măsor de două ori.", // nieuw, nalezen
    'c.measure.q': "Cât de lat trebuie să fie?", // nieuw, nalezen
    'c.measure.a': "Nouăzeci de centimetri. Notez.", // nieuw, nalezen
    'c.measure': "Măsoară de două ori, taie o dată", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Pe șantier, măsurile sunt adesea în milimetri. Așa că „nouă sute” poate însemna 90 de centimetri. Nu știi sigur? Întreabă: „Sunt milimetri sau centimetri?” Repetă numărul și notează-l. Măsoară de două ori înainte să tai sau să dai o gaură: o scândură prea scurtă rămâne prea scurtă. Ai făcut o greșeală? Spune imediat. Atunci echipa mai poate repara, și costă mai puțin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "Sunt milimetri sau centimetri?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Colegul tău strigă o măsură. Nu ai auzit bine. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Repeți numărul și întrebi dacă e corect.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Tai scândura la cât crezi că ai auzit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Aștepți până vine el să se uite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "O măsură greșită costă material și timp. Să repeți numărul durează două secunde, și toată lumea de pe șantier face asta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Un șantier ordonat", // nieuw, nalezen
    'w.bouwplaats': "șantierul", // nieuw, nalezen
    'w.uitvoerder': "șeful de șantier (șeful de pe șantier)", // nieuw, nalezen
    'w.keet': "baraca de șantier (pentru pauze și ședințe)", // nieuw, nalezen
    'w.afval': "deșeurile, gunoiul", // nieuw, nalezen
    'w.container': "containerul (o ladă foarte mare pentru deșeuri)", // nieuw, nalezen
    'w.struikelen': "a te împiedica (a cădea peste ceva)", // nieuw, nalezen
    's.siteday.1': "Deșeurile merg în container.", // nieuw, nalezen
    's.siteday.2': "Șeful de șantier e în baracă.", // nieuw, nalezen
    's.siteday.3': "Atenție, aici te poți împiedica.", // nieuw, nalezen
    'c.siteday.q': "Unde trebuie dus lemnul ăsta?", // nieuw, nalezen
    'c.siteday.a': "În containerul de la intrare.", // nieuw, nalezen
    'c.siteday': "Un șantier ordonat e un șantier sigur", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Pe șantier, curățenia face parte din muncă, pentru toți. Scândurile lăsate pe jos, cablurile și deșeurile îi fac pe oameni să se împiedice și să cadă. Așa că strânge la locul tău în timpul zilei, nu doar la sfârșit. Deșeurile se sortează: lemnul, piatra și metalul merg adesea în containere diferite. Nu știi sigur în care? Întreabă. Vezi un cui care iese în afară sau o gaură fără capac? Rezolvă dacă poți face asta în siguranță, sau spune-i șefului de șantier (de uitvoerder). Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Strâng eu asta. Așa nu se împiedică nimeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Pe drum sunt scânduri cu cuie. Nu sunt ale tale. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Le dai la o parte sau îi spui șefului de șantier.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Pășești peste ele: nu sunt scândurile tale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Aștepți: le strânge altcineva.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Toți folosesc aceleași drumuri. Cine vede un pericol face ceva: așa e normal pe șantier.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Predarea turei", // nieuw, nalezen
    'w.vroegedienst': "tura de dimineață", // nieuw, nalezen
    'w.latedienst': "tura de după-amiază", // nieuw, nalezen
    'w.nachtdienst': "tura de noapte", // nieuw, nalezen
    'w.overdracht': "predarea turei (îi spui turei următoare ce s-a întâmplat)", // nieuw, nalezen
    'w.aflossen': "a schimba pe cineva (vine următorul, iar tu poți pleca)", // nieuw, nalezen
    'w.teamleider': "șeful de echipă", // nieuw, nalezen
    's.shifts.1': "Săptămâna asta am tura de după-amiază.", // nieuw, nalezen
    's.shifts.2': "Cine mă schimbă?", // nieuw, nalezen
    's.shifts.3': "Mașina doi a avut o defecțiune.", // nieuw, nalezen
    'c.shifts.q': "S-a întâmplat ceva în tura ta?", // nieuw, nalezen
    'c.shifts.a': "Da. Linia a stat o jumătate de oră.", // nieuw, nalezen
    'c.shifts': "Spune-i turei următoare", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "O fabrică merge adesea zi și noapte, în ture. La sfârșitul turei tale, un coleg îți ia locul. Nu pleca pur și simplu: așteaptă până vine colegul. Spune în câteva cuvinte ce s-a întâmplat: o defecțiune, un produs care nu era bun, ceva ce nu e terminat. Multe firme au și o listă sau un ecran pentru asta. O problemă pe care nu o spui mai departe apare din nou în tura următoare, și atunci nimeni nu știe de ce. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Mașina a avut o defecțiune. Acum merge din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Tura ta s-a terminat. Colegul tău întârzie cinci minute. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Aștepți și îi spui șefului de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Pleci acasă: tura ta s-a terminat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Oprești mașina și pleci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "O mașină care merge nu are voie să rămână fără om. Când aștepți și anunți, munca merge mai departe în siguranță, iar șeful de echipă poate rezolva.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Spune ce vezi", // nieuw, nalezen
    'w.duizelig': "amețit", // nieuw, nalezen
    'w.misselijk': "cu greață (simți că trebuie să vomiți)", // nieuw, nalezen
    'w.benauwd': "fără aer (respiri greu)", // nieuw, nalezen
    'w.koorts': "febra", // nieuw, nalezen
    'w.verward': "confuz (persoana nu știe unde se află)", // nieuw, nalezen
    'w.anders': "altfel (nu ca de obicei)", // nieuw, nalezen
    's.signals.1': "Doamna e amețită.", // nieuw, nalezen
    's.signals.2': "Domnul nu mănâncă azi.", // nieuw, nalezen
    's.signals.3': "Poți să vii să te uiți puțin?", // nieuw, nalezen
    'c.signals.q': "Cum îi merge domnului Jansen?", // nieuw, nalezen
    'c.signals.a': "E confuz. E altfel decât ieri.", // nieuw, nalezen
    'c.signals': "Tu vezi clientul în fiecare zi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "De multe ori tu ești omul care vede cel mai des un client. Așa că tu observi primul când ceva e altfel: mănâncă mai puțin, are mai multe dureri, e confuz, respiră greu. Nu trebuie să știi ce este. Spune ce vezi și spune când ai văzut. Spune-i asistentei în aceeași zi și notează, dacă asta e sarcina ta. Pare ceva grav? Nu aștepta: cheam-o imediat pe asistentă. Mai bine o dată prea mult decât o dată prea puțin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Doamna nu mănâncă și e amețită. E altfel decât de obicei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "O clientă e tăcută azi și nu vrea să mănânce. De obicei vorbește mult. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Îi spui asistentei ce vezi, chiar azi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Aștepți câteva zile: poate trece.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Îi dai o pastilă din dulap.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "O schimbare mică poate fi primul semn al unei boli. Nu tu hotărăști ce este: asistenta hotărăște. Dar ea poate face ceva doar dacă îi spui.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Să ajuți pe cineva să se ridice", // nieuw, nalezen
    'w.tillift': "liftul pentru pacienți (un aparat care ridică o persoană)", // nieuw, nalezen
    'w.rollator': "cadrul de mers cu roți", // nieuw, nalezen
    'w.bed': "patul", // nieuw, nalezen
    'w.opstaan': "a se ridica, a se scula", // nieuw, nalezen
    'w.gaanzitten': "a se așeza", // nieuw, nalezen
    'w.voorzichtig': "cu grijă, ușor", // nieuw, nalezen
    's.transfer.1': "Vă ajut să vă ridicați.", // nieuw, nalezen
    's.transfer.2': "Vreți să vă așezați puțin?", // nieuw, nalezen
    's.transfer.3': "Mai întâi iau liftul pentru pacienți.", // nieuw, nalezen
    'c.transfer.q': "Poți s-o ridici pe doamna din pat?", // nieuw, nalezen
    'c.transfer.a': { m: "Nu singur. Iau liftul pentru pacienți.", f: "Nu singură. Iau liftul pentru pacienți.", x: "Nu fără ajutor. Iau liftul pentru pacienți." }, // nieuw, nalezen
    'c.transfer': "Întâi spui, apoi ajuți", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Înainte să atingi un client, spune ce urmează să faci: „Ik help u nu met opstaan.” Atunci clientul nu se sperie și poate ajuta și el. Lasă clientul să facă ce mai poate face: asta îl ține în putere. Nu ridica o persoană fără ajutor. Folosește aparatele care există, cum e liftul pentru pacienți, și lucrează așa cum ți s-a arătat. Nu ți s-a arătat încă? Întreabă mai întâi. Spatele tău trebuie să te țină o viață întreagă de muncă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Vă ajut acum să vă ridicați. Sunteți gata?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "O clientă vrea să se dea jos din pat. Încă nu ai învățat să folosești liftul pentru pacienți. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Chemi un coleg care știe să folosească liftul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "O ridici tu: nu e grea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Încerci liftul: nu poate fi greu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Dacă ridici greșit o persoană, îi poți face rău clientului și spatelui tău. Să chemi un coleg durează câteva minute. O căzătură poate ține luni de zile.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Spălatul vaselor", // nieuw, nalezen
    'w.afwas': "vasele de spălat, spălatul vaselor", // nieuw, nalezen
    'w.vaatwasser': "mașina de spălat vase", // nieuw, nalezen
    'w.bord': "farfuria", // nieuw, nalezen
    'w.glas': "paharul", // nieuw, nalezen
    'w.bestek': "tacâmurile (cuțit, furculiță și lingură)", // nieuw, nalezen
    'w.afdrogen': "a șterge (cu un prosop)", // nieuw, nalezen
    's.dishes.1': "Mașina de spălat vase e gata.", // nieuw, nalezen
    's.dishes.2': "Atenție, s-a spart un pahar.", // nieuw, nalezen
    's.dishes.3': "Nu mai sunt tacâmuri curate.", // nieuw, nalezen
    'c.dishes.q': "Mai sunt pahare curate?", // nieuw, nalezen
    'c.dishes.a': "Da, le aduc imediat.", // nieuw, nalezen
    'c.dishes': "Sticlă spartă: spune imediat", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "Într-o bucătărie se sparge sticlă. E normal, și nimeni nu se supără pentru asta. Dar spune imediat, tare și clar: „Glas!” Nu aduna cioburile cu mâinile goale: folosește o perie. A căzut sticlă lângă mâncare sau în gheață? Atunci mâncarea aceea sau gheața aceea trebuie aruncată, toată. Un ciob mic într-o mâncare e foarte periculos pentru un oaspete. Sticla merge într-un coș al ei, nu într-un sac pe care îl ridică cineva. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Atenție, sticlă! Strâng imediat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Un pahar se sparge deasupra gheții pentru băuturi. E foarte aglomerat. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Spui și arunci toată gheața.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Scoți cioburile pe care le vezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Nu spui nimic: e prea aglomerat acum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Cioburile mici nu se văd în gheață. Gheața nouă costă puțin. Un oaspete cu sticlă în băutură se poate răni grav.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Când e aglomerat", // nieuw, nalezen
    'w.heet': "fierbinte", // nieuw, nalezen
    'w.chef': "bucătarul-șef (șeful bucătăriei)", // nieuw, nalezen
    'w.terras': "terasa (mese afară)", // nieuw, nalezen
    'w.tafel': "masa", // nieuw, nalezen
    'w.dienblad': "tava", // nieuw, nalezen
    'w.wachten': "a aștepta", // nieuw, nalezen
    's.rush.1': "Fierbinte! Trec prin spatele tău.", // nieuw, nalezen
    's.rush.2': "Masa șase așteaptă mâncarea.", // nieuw, nalezen
    's.rush.3': "Duc asta pe terasă.", // nieuw, nalezen
    'c.rush.q': "Poți să te ocupi de masa patru?", // nieuw, nalezen
    'c.rush.a': "Da, chef. Vin acum.", // nieuw, nalezen
    'c.rush': "Cuvinte scurte când e aglomerat", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Când e aglomerat, oamenii din bucătărie vorbesc în cuvinte scurte: „Heet!”, „Achter!”, „Tafel zes!” Asta nu e nepoliticos. E rapid și sigur: toți știu unde sunt tigăile fierbinți și cuțitele. Strigă și tu „Heet!” sau „Achter!” când treci prin spatele cuiva. Ai auzit o comandă? Repet-o: „Ja, chef.” Atunci bucătarul-șef știe că ai auzit. Cineva ți-a vorbit tăios în aglomerație? De multe ori asta trece după serviciu. Rămâne neplăcut? Atunci vorbiți despre asta într-un moment liniștit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "În spate! Am o tigaie fierbinte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "E foarte aglomerat. Bucătarul-șef strigă: „Tafel zes, nu!” Nu spune „te rog”. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Spui „Ja, chef” și faci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Te oprești și spui că e nepoliticos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Faci, dar nu răspunzi nimic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "În aglomerație, vorba scurtă e normală și nu e ceva personal. Când repeți, arăți că ai auzit. Așa bucătăria rămâne rapidă și sigură.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Tura ta de curățenie", // nieuw, nalezen
    'w.kantoor': "biroul (camera unde se lucrează)", // nieuw, nalezen
    'w.verdieping': "etajul (etajul 1 sau 2 al unei clădiri)", // nieuw, nalezen
    'w.gang': "holul, coridorul", // nieuw, nalezen
    'w.toiletpapier': "hârtia igienică", // nieuw, nalezen
    'w.zeep': "săpunul", // nieuw, nalezen
    'w.bijvullen': "a umple din nou, a completa", // nieuw, nalezen
    's.rounds.1': "Încep la etajul doi.", // nieuw, nalezen
    's.rounds.2': "S-a terminat hârtia igienică.", // nieuw, nalezen
    's.rounds.3': "Completez săpunul.", // nieuw, nalezen
    'c.rounds.q': "Ai făcut deja biroul trei?", // nieuw, nalezen
    'c.rounds.a': "Nu, acolo mai lucrează cineva.", // nieuw, nalezen
    'c.rounds': "Curățenie acolo unde lucrează oameni", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "De multe ori faci curat în timp ce alți oameni încă lucrează. Salută-i și întreabă: „Mag ik hier even schoonmaken?” Cei mai mulți spun da. Cineva e într-o ședință sau la telefon? Atunci vino mai târziu. Nu muta hârtiile de pe un birou și nu le citi: curăță în jurul lor. Ai un timp fix pentru tura ta de curățenie. Timpul e prea scurt ca să faci treaba bine? Nu sări peste camere fără să spui. Spune-i șefului ce nu ai putut face și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Bună ziua. Pot să fac puțin curat aici?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Azi tura ta de curățenie durează mai mult: o cameră era foarte murdară. Două birouri nu sunt făcute. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "Îi spui șefului care două și de ce.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Pleci acasă și speri că nu vede nimeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Le faci foarte repede, fără podele.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Un client care găsește un birou murdar se plânge. Un șef care știe poate explica sau îți poate da mai mult timp. Dacă spui asta, nu înseamnă că ai dat greș.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Culori și lavete", // nieuw, nalezen
    'w.doek': "laveta, cârpa", // nieuw, nalezen
    'w.spons': "buretele", // nieuw, nalezen
    'w.rood': "roșu", // nieuw, nalezen
    'w.blauw': "albastru", // nieuw, nalezen
    'w.geel': "galben", // nieuw, nalezen
    'w.groen': "verde", // nieuw, nalezen
    's.colours.1': "Laveta roșie e pentru toaletă.", // nieuw, nalezen
    's.colours.2': "Ia o lavetă curată.", // nieuw, nalezen
    's.colours.3': "Ce culoare folosesc aici?", // nieuw, nalezen
    'c.colours.q': "Pot să folosesc laveta asta pentru birou?", // nieuw, nalezen
    'c.colours.a': "Nu, cea roșie e doar pentru toaletă.", // nieuw, nalezen
    'c.colours': "Fiecare culoare are locul ei", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Multe firme de curățenie lucrează cu culori. Fiecare culoare de lavetă, burete și găleată e pentru un singur loc. Adesea roșu e pentru toaletă, iar albastru e pentru birouri și mese. Așa, murdăria de la toaletă nu ajunge pe un birou sau într-o bucătărie. Culorile pot fi altele la fiecare firmă, așa că întreabă în prima zi. O lavetă e murdară sau a căzut pe jos? Ia una curată. Lavetele folosite merg în sacul de rufe, nu înapoi pe cărucior. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Ce culoare e aici pentru toaletă?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Lavetele tale albastre s-au terminat. Mai ai de curățat trei birouri. Ai doar lavete roșii. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Mai întâi iei lavete albastre noi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Folosești o lavetă roșie: curat e curat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Folosești din nou o lavetă albastră pentru toate trei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Un sistem de culori merge doar dacă toți îl respectă mereu. Atunci nimeni nu trebuie să se întrebe pe unde a fost o lavetă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Să ajuți un client", // nieuw, nalezen
    'w.aanbieding': "oferta (mai ieftin pentru scurt timp)", // nieuw, nalezen
    'w.korting': "reducerea (plătești mai puțin)", // nieuw, nalezen
    'w.uitverkocht': "epuizat (s-a vândut tot)", // nieuw, nalezen
    'w.magazijn': "depozitul, magazia", // nieuw, nalezen
    'w.tas': "punga, geanta", // nieuw, nalezen
    'w.bestellen': "a comanda", // nieuw, nalezen
    's.shophelp.1': "Din păcate, s-a terminat.", // nieuw, nalezen
    's.shophelp.2': "Doriți și o pungă?", // nieuw, nalezen
    's.shophelp.3': "Cafeaua asta e la ofertă.", // nieuw, nalezen
    'c.shophelp.q': "Mai aveți lapte?", // nieuw, nalezen
    'c.shophelp.a': "Mă uit pentru dumneavoastră în depozit.", // nieuw, nalezen
    'c.shophelp': "„Nu știu” nu e sfârșitul", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Un client întreabă ceva și tu nu știi răspunsul. E în regulă: nimeni nu știe tot. Dar nu spune doar „nee” sau „weet ik niet”, și nu pleca. Spune: „Ik vraag het even voor u”, și cheamă un coleg. Un produs s-a terminat? Spune când vine din nou sau arată ceva asemănător. Uită-te la client și salută-l, și când ai treabă cu umplutul rafturilor. Nu ai înțeles întrebarea? Roagă clientul să mai spună o dată, rar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Asta nu știu. Întreb pentru dumneavoastră.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "O clientă cere un produs. Nu cunoști cuvântul. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Spui: „Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Spui „nee” și lucrezi mai departe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Arăți undeva cu mâna, ca să plece.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Pe un client nu îl deranjează că ești la început sau că încă înveți olandeza. Pe un client îl deranjează să nu primească ajutor. Să chemi un coleg e un serviciu bun.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Momente grele", // nieuw, nalezen
    'w.bedrijfsleider': "șeful de magazin", // nieuw, nalezen
    'w.beveiliger': "agentul de pază", // nieuw, nalezen
    'w.dief': "hoțul", // nieuw, nalezen
    'w.stelen': "a fura", // nieuw, nalezen
    'w.schreeuwen': "a țipa", // nieuw, nalezen
    'w.geldterug': "banii înapoi", // nieuw, nalezen
    's.shoptrouble.1': "Îl chem pe șeful de magazin.", // nieuw, nalezen
    's.shoptrouble.2': "Vă rog, nu țipați.", // nieuw, nalezen
    's.shoptrouble.3': "Cred că cineva fură ceva.", // nieuw, nalezen
    'c.shoptrouble.q': "Vreau banii înapoi acum!", // nieuw, nalezen
    'c.shoptrouble.a': "Înțeleg. Îl chem pe colegul meu.", // nieuw, nalezen
    'c.shoptrouble': "Un client furios sau un hoț: tu ești pe primul loc", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Uneori un client se înfurie, sau vezi pe cineva care fură. Siguranța ta e pe primul loc, mereu. Cu un client furios: rămâi calm, nu țipa și tu, și cheamă-l pe șeful de magazin. Nu trebuie să rezolvi fără ajutor. Vezi un hoț? Nu fugi după el, nu-l ține și nu bloca ușa. Uită-te bine la ce vezi și spune-i imediat șefului de magazin sau agentului de pază. Lucrurile pot fi înlocuite. Tu nu. Te-ai speriat după aceea? Vorbește despre asta cu șeful tău. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Văd pe cineva care bagă ceva în geantă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Un bărbat bagă o sticlă sub haină și merge spre ieșire. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "Îi spui șefului de magazin sau agentului de pază.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Fugi după el și îl ții de braț.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Te pui în fața ușii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Un hoț care e oprit poate deveni violent. Șeful de magazin și agentul de pază știu ce e de făcut. Niciun produs nu merită să fii rănit pentru el.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Îngrijirea plantei", // nieuw, nalezen
    'w.plantblad': "frunza", // nieuw, nalezen
    'w.stengel': "tulpina", // nieuw, nalezen
    'w.bloem': "floarea", // nieuw, nalezen
    'w.knippen': "a tăia (cu foarfeca)", // nieuw, nalezen
    'w.tomaat': "roșia", // nieuw, nalezen
    'w.rijp': "copt (bun de cules)", // nieuw, nalezen
    's.plantcare.1': "Roșia asta nu e coaptă încă.", // nieuw, nalezen
    's.plantcare.2': "Tai frunza.", // nieuw, nalezen
    's.plantcare.3': "Tulpina e ruptă.", // nieuw, nalezen
    'c.plantcare.q': "Ce roșii culeg?", // nieuw, nalezen
    'c.plantcare.a': "Doar pe cele roșii. Cele verzi nu sunt coapte încă.", // nieuw, nalezen
    'c.plantcare': "Mâini curate, plante sănătoase", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Și plantele se pot îmbolnăvi. Un virus trece de la o plantă la alta pe mâini, mănuși, cuțite și haine. Într-o seră, o singură plantă bolnavă poate însemna că mii de plante trebuie aruncate. De aceea sunt reguli stricte la ușă: spală-te pe mâini, poartă hainele de lucru ale firmei și treci prin baia de dezinfectare pentru încălțăminte. Multe sere nu dau voie să ai roșii, ardei sau castraveți de acasă în mâncarea ta de prânz. Vezi o plantă care arată ciudat? Nu o atinge. Spune-i șefului în ce rând este. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "În rândul doisprezece e o plantă bolnavă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Vezi o plantă cu pete galbene ciudate. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "O lași acolo și îi spui șefului.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "O smulgi și o iei cu tine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Tai frunzele cu pete.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Când atingi o plantă bolnavă, virusul merge cu tine la plantele următoare. Șeful tău știe cum se scoate planta în siguranță.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Munca afară", // nieuw, nalezen
    'w.land': "câmpul (unde cresc plante afară)", // nieuw, nalezen
    'w.regen': "ploaia", // nieuw, nalezen
    'w.zon': "soarele", // nieuw, nalezen
    'w.laarzen': "cizmele", // nieuw, nalezen
    'w.regenpak': "costumul de ploaie (geacă și pantaloni pentru ploaie)", // nieuw, nalezen
    'w.onweer': "furtuna cu tunete și fulgere", // nieuw, nalezen
    's.outdoors.1': "Plouă. Îmi pun costumul de ploaie.", // nieuw, nalezen
    's.outdoors.2': "Cizmele mele sunt ude.", // nieuw, nalezen
    's.outdoors.3': "Soarele e puternic azi.", // nieuw, nalezen
    'c.outdoors.q': "Vine furtuna. Ce facem?", // nieuw, nalezen
    'c.outdoors.a': "Ne oprim și intrăm înăuntru.", // nieuw, nalezen
    'c.outdoors': "Soare, ploaie și tunete", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Afară lucrezi pe orice fel de vreme. La soare: acoperă-ți capul și pielea, folosește cremă de soare și bea apă des. Pe ploaie: poartă costumul de ploaie și cizmele, și pune-ți haine uscate în pauză. Umezeala și frigul te îmbolnăvesc și te fac să lucrezi încet. Tună? Atunci oprește-te și intră înăuntru, sau într-o mașină ori într-o dubă. Nu sub un copac și nu în câmp deschis. Ai nevoie de haine de ploaie sau de cizme pentru muncă? Întreabă-l pe angajator despre ele înainte să le cumperi din banii tăi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "O să tune. Mergem înăuntru?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Ești pe câmp. Auzi tunete aproape. Rândul tău e aproape gata. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Te oprești și intri înăuntru sau în dubă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Mai întâi termini repede rândul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Aștepți sub copacul cel mare.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Fulgerul lovește punctul cel mai înalt, iar pe un câmp neted acela ești tu. Rândul poate aștepta un sfert de oră.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Desenul și măsura", // nieuw, nalezen
    'w.tekening': "desenul tehnic (arată cum trebuie să fie piesa)", // nieuw, nalezen
    'w.maat': "măsura, dimensiunea", // nieuw, nalezen
    'w.millimeter': "milimetrul", // nieuw, nalezen
    'w.schuifmaat': "șublerul (măsoară foarte exact)", // nieuw, nalezen
    'w.passen': "a se potrivi", // nieuw, nalezen
    'w.bout': "bolțul, șurubul cu piuliță", // nieuw, nalezen
    's.drawing.1': "Care e măsura de pe desen?", // nieuw, nalezen
    's.drawing.2': "Piesa asta nu se potrivește.", // nieuw, nalezen
    's.drawing.3': "E cu doi milimetri prea mare.", // nieuw, nalezen
    'c.drawing.q': "Se potrivește șurubul?", // nieuw, nalezen
    'c.drawing.a': "Nu. Mai măsor o dată.", // nieuw, nalezen
    'c.drawing': "Desenul hotărăște", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "Într-un atelier faci ce spune desenul, nu ce pare cam bine. Măsurile sunt în milimetri, și un milimetru poate fi prea mult. O piesă nu se potrivește? Nu forța și nu face gaura mai mare „doar puțin”. Măsoară din nou și uită-te la desen. Nu poți citi desenul sau lipsește o măsură? Întreabă înainte să începi. O întrebare costă un minut. O piesă greșită costă material și ore.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Nu pot citi măsura asta. Poți să te uiți puțin?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "O piesă nu se potrivește: e cu un milimetru prea mare. Cu ciocanul ar intra. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Măsori din nou și întrebi ce e de făcut.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "O bați înăuntru cu ciocanul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Polizezi puțin din ea și nu spui nimic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "O piesă care intră cu forța se poate rupe mai târziu, la client. Când anunți, se poate găsi cauza.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Sudură și lucru la cald", // nieuw, nalezen
    'w.lassen': "a suda (a lipi metal cu căldură foarte mare)", // nieuw, nalezen
    'w.laskap': "masca de sudură", // nieuw, nalezen
    'w.rook': "fumul", // nieuw, nalezen
    'w.afzuiging': "aspirația (trage fumul afară)", // nieuw, nalezen
    'w.afkoelen': "a se răci", // nieuw, nalezen
    'w.brandwond': "arsura (o rană de la căldură)", // nieuw, nalezen
    's.weld.1': "Îmi pun masca de sudură.", // nieuw, nalezen
    's.weld.2': "Pornește aspirația.", // nieuw, nalezen
    's.weld.3': "Atenție, metalul e încă fierbinte.", // nieuw, nalezen
    'c.weld.q': "Pot să iau asta deja în mână?", // nieuw, nalezen
    'c.weld.a': "Nu, așteaptă. Mai întâi trebuie să se răcească.", // nieuw, nalezen
    'c.weld': "Metalul fierbinte pare rece", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Sudura dă o lumină foarte puternică. Nu te uita la ea fără mască de sudură, nici de la distanță: ochii se pot arde, și simți asta abia după câteva ore. Un coleg sudează lângă tine? Uită-te în altă parte sau stai în spatele paravanului. Metalul care a fost abia sudat sau polizat arată normal, dar e foarte fierbinte. Nu-l lua cu mâinile goale. Fumul de sudură e rău pentru plămâni: pornește aspirația. O arsură? Răcește-o imediat cu apă, cel puțin zece minute, și anunță. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "S-a răcit deja?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Un coleg sudează lângă tine. Nu ai mască de sudură. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Te uiți în altă parte și stai în spatele paravanului.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "Te uiți puțin: poți învăța din asta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Închizi ochii pe jumătate.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Lumina de la sudură îți arde ochii, și dintr-o parte, și de la distanță. Durerea o simți abia mai târziu, adesea noaptea.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Părțile mașinii", // nieuw, nalezen
    'w.motor': "motorul", // nieuw, nalezen
    'w.motorkap': "capota (capacul de deasupra motorului)", // nieuw, nalezen
    'w.rem': "frâna", // nieuw, nalezen
    'w.lamp': "farul, becul", // nieuw, nalezen
    'w.ruitenwisser': "ștergătorul de parbriz", // nieuw, nalezen
    'w.stoel': "scaunul", // nieuw, nalezen
    's.carparts.1': "Deschide capota.", // nieuw, nalezen
    's.carparts.2': "Farul din stânga față e stricat.", // nieuw, nalezen
    's.carparts.3': "Frânele fac zgomot.", // nieuw, nalezen
    'c.carparts.q': "Ce auzi?", // nieuw, nalezen
    'c.carparts.a': "Motorul face un zgomot ciudat.", // nieuw, nalezen
    'c.carparts': "Mașina e a clientului", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "O mașină din service nu e a ta: e a clientului. Pune o husă pe scaun și pe volan înainte să urci, și lucrează cu mâinile curate înăuntru. Lasă scaunul, oglinzile și radioul așa cum erau. A trebuit să muți scaunul? Pune-l la loc. Nu atinge lucrurile personale din mașină. Ai făcut o zgârietură sau o pată? Spune-i imediat șefului. Un client care o găsește acasă nu mai vine înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "Am făcut o zgârietură. Îmi pare rău.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Faci o zgârietură mică pe ușa mașinii unui client. Nu a văzut nimeni. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Îi spui imediat șefului.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Nu spui nimic: e foarte mică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "O ștergi cu o cârpă și speri.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Toată lumea greșește câteodată. Un service poate repara o zgârietură sau îi poate spune sincer clientului. O zgârietură ascunsă îl costă pe service numele lui bun.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Benzină, gaz și curent", // nieuw, nalezen
    'w.krik': "cricul (ridică o parte a mașinii)", // nieuw, nalezen
    'w.benzine': "benzina", // nieuw, nalezen
    'w.elektrischeauto': "mașina electrică", // nieuw, nalezen
    'w.oranje': "portocaliu", // nieuw, nalezen
    'w.morsen': "a vărsa (din greșeală)", // nieuw, nalezen
    'w.lap': "cârpa (o bucată de pânză pentru muncă murdară)", // nieuw, nalezen
    's.carsafe.1': "Miroase a benzină.", // nieuw, nalezen
    's.carsafe.2': "S-a vărsat ulei. Aduc o cârpă.", // nieuw, nalezen
    's.carsafe.3': "Nu ating cablurile portocalii.", // nieuw, nalezen
    'c.carsafe.q': "Pot să lucrez la mașina asta?", // nieuw, nalezen
    'c.carsafe.a': "Încă nu. E o mașină electrică.", // nieuw, nalezen
    'c.carsafe': "Cabluri portocalii și motoare pornite", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "O mașină electrică sau hibridă are o baterie cu tensiune foarte mare. Cablurile ei sunt portocalii. Nu le atinge și nu le desface: un mecanic cu instruire specială trebuie mai întâi să facă mașina sigură. E un semn sau un con lângă mașină? Atunci stai departe. Un motor care merge înăuntru face un gaz pe care nu îl poți mirosi sau vedea, și te poate omorî. Deci: pune furtunul de evacuare sau deschide ușile. Miroase a benzină? Fără scântei și fără fumat. Spune-i imediat șefului. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Mașina asta a fost deja făcută sigură?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Trebuie să schimbi o roată la o mașină electrică. Sub mașină vezi un cablu portocaliu desprins. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Nu atingi nimic și îl chemi pe mecanicul instruit.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Împingi cablul la loc cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Îl împingi la loc cu o cârpă uscată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Bateria unei mașini electrice are destulă putere ca să omoare, și când mașina e oprită. Doar cineva cu instruire are voie să atingă aceste piese.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Verificarea dubei", // nieuw, nalezen
    'w.schade': "dauna", // nieuw, nalezen
    'w.deuk': "îndoitura", // nieuw, nalezen
    'w.spiegel': "oglinda", // nieuw, nalezen
    'w.tanken': "a alimenta (a pune combustibil în dubă)", // nieuw, nalezen
    'w.opladen': "a încărca (o dubă electrică, un telefon)", // nieuw, nalezen
    'w.parkeren': "a parca", // nieuw, nalezen
    's.vancheck.1': "E o îndoitură în ușă.", // nieuw, nalezen
    's.vancheck.2': "Dauna asta era deja acolo.", // nieuw, nalezen
    's.vancheck.3': "Mai trebuie întâi să alimentez.", // nieuw, nalezen
    'c.vancheck.q': "E totul în regulă cu duba?", // nieuw, nalezen
    'c.vancheck.a': "Nu, oglinda e stricată.", // nieuw, nalezen
    'c.vancheck': "Uită-te înainte să pleci la drum", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Mergi în jurul dubei înainte de prima cursă. Vezi o îndoitură, o zgârietură sau o oglindă stricată? Fă o poză și raportează înainte să pleci. Atunci toată lumea știe că dauna era deja acolo. S-a întâmplat ceva în timpul cursei? Raportează în aceeași zi, și când e ceva mic. Dacă ascunzi o daună, apar probleme mai mari mai târziu. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Duba are o daună. Uite o poză.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Dimineața vezi o îndoitură nouă la dubă. Nu tu ai făcut-o. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Faci o poză și raportezi înainte să pleci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Nu spui nimic: nu e îndoitura ta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Aștepți să vezi dacă întreabă cineva.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Când raportezi înainte să pleci, nimeni nu poate crede că tu ai făcut-o. O poză cu ora e clară pentru toată lumea.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Întârzieri pe drum", // nieuw, nalezen
    'w.file': "ambuteiajul", // nieuw, nalezen
    'w.vertraging': "întârzierea (ajungi mai târziu decât era planificat)", // nieuw, nalezen
    'w.omleiding': "ruta ocolitoare (alt drum, pentru că drumul e închis)", // nieuw, nalezen
    'w.navigatie': "navigația (aplicația care arată drumul)", // nieuw, nalezen
    'w.planner': "planificatorul (persoana care face traseele)", // nieuw, nalezen
    'w.retour': "returul (un colet care se întoarce)", // nieuw, nalezen
    's.delay.1': "Stau în ambuteiaj.", // nieuw, nalezen
    's.delay.2': "Am o întârziere de jumătate de oră.", // nieuw, nalezen
    's.delay.3': "Coletul ăsta merge retur.", // nieuw, nalezen
    'c.delay.q': "Unde ești acum?", // nieuw, nalezen
    'c.delay.a': "La ruta ocolitoare. Ajung cu zece minute mai târziu.", // nieuw, nalezen
    'c.delay': "Întârzii? Spune din timp", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Un ambuteiaj sau un drum închis nu e vina ta. Dar spune-i planificatorului imediat ce știi că vei întârzia. Atunci planificatorul poate anunța clienții sau poate schimba traseul. Oprește întâi într-un loc sigur: nu suna cu telefonul în mână în timp ce conduci. Și nu conduce mai repede ca să recuperezi timpul. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Stau în ambuteiaj. Ajung cu jumătate de oră mai târziu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Un drum e închis. Ruta ocolitoare te costă treizeci de minute. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "Îi spui planificatorului imediat ce poți opri în siguranță.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Conduci mai repede ca să recuperezi timpul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Nu spui nimic: poate nu observă nimeni.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Când planificatorul află din timp, clienții sunt anunțați și nimeni nu așteaptă degeaba. Să conduci mai repede e periculos și nu câștigi aproape deloc timp.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Instrucțiuni", // nieuw, nalezen
    'l.putdown': "Pune-l acolo", // nieuw, nalezen
    'w.zetten': "a pune (ceva care stă în picioare: o cutie, o găleată)", // nieuw, nalezen
    'w.leggen': "a pune, a așeza (ceva care stă culcat)", // nieuw, nalezen
    'w.brengen': "a aduce, a duce (într-un loc sau la o persoană)", // nieuw, nalezen
    'w.geven': "a da", // nieuw, nalezen
    'w.vasthouden': "a ține", // nieuw, nalezen
    'w.loslaten': "a da drumul", // nieuw, nalezen
    's.putdown.1': "Pune-l jos acolo.", // nieuw, nalezen
    's.putdown.2': "Du asta la cantină.", // nieuw, nalezen
    's.putdown.3': "Ține asta puțin.", // nieuw, nalezen
    'c.putdown.q': "Poți să ții asta puțin?", // nieuw, nalezen
    'c.putdown.a': "Da. Unde trebuie s-o pun?", // nieuw, nalezen
    'c.putdown': "Spune că îl ții", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Cărați ceva împreună sau un coleg îți dă ceva greu? Spune „Ik heb hem” când îl ții bine. Atunci colegul tău știe că poate să dea drumul în siguranță. Vrei să dai tu drumul? Întreabă mai întâi: „Heb je hem?” Și așteaptă răspunsul. Așa e normal la orice loc de muncă. Așa nu cad lucrurile pe picioare și pe mâini.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Îl țin. Poți să dai drumul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Un coleg îți dă o cutie grea. Încă nu o ții bine. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Spui „wacht” și întâi o prinzi mai bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Nu spui nimic: o să vadă el.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "O iei repede, ca să nu aștepte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Colegul tău dă drumul când crede că o ții. Un singur cuvânt îți dă timp să o prinzi bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Pornit și oprit, deschis și închis", // nieuw, nalezen
    'w.aanzetten': "a porni", // nieuw, nalezen
    'w.opendoen': "a deschide", // nieuw, nalezen
    'w.dichtdoen': "a închide", // nieuw, nalezen
    'w.drukken': "a apăsa (un buton)", // nieuw, nalezen
    'w.draaien': "a învârti, a roti", // nieuw, nalezen
    'w.stoppen': "a opri, a se opri", // nieuw, nalezen
    's.onoff.1': "Închide ușa.", // nieuw, nalezen
    's.onoff.2': "Apasă butonul.", // nieuw, nalezen
    's.onoff.3': "Stop! Oprește-l.", // nieuw, nalezen
    'c.onoff.q': "E închisă ușa?", // nieuw, nalezen
    'c.onoff.a': "Nu. O închid acum.", // nieuw, nalezen
    'c.onoff': "Stop înseamnă stop", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Strigă cineva „Stop!”? Oprește-te imediat, și când nu știi de ce. Întreabă după aceea. Un cuvânt scurt, spus tare, nu e furie aici: așa se țin colegii în siguranță unii pe alții. Vezi chiar tu ceva periculos? Strigă și tu „Stop!”, și cuiva care lucrează aici de ani de zile. Nimănui nu i se pare ciudat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Stop! Stai puțin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Pornești un utilaj. Un coleg strigă „Stop!”. Tu nu vezi nicio problemă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Te oprești imediat și întrebi de ce după aceea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Continui: nu vezi nicio problemă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Întrebi mai întâi de ce trebuie să te oprești.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Colegul tău poate vedea ceva ce tu nu vezi. Întâi te oprești, apoi vorbiți: așa sunt toți în siguranță.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Împinge, trage, umple", // nieuw, nalezen
    'w.duwen': "a împinge", // nieuw, nalezen
    'w.trekken': "a trage", // nieuw, nalezen
    'w.vullen': "a umple", // nieuw, nalezen
    'w.leegmaken': "a goli", // nieuw, nalezen
    'w.schoonmaken': "a curăța", // nieuw, nalezen
    'w.vol': "plin", // nieuw, nalezen
    's.fillempty.1': "Nu împinge, trage.", // nieuw, nalezen
    's.fillempty.2': "Ăsta e plin. Golește-l.", // nieuw, nalezen
    's.fillempty.3': "Curăță asta, te rog.", // nieuw, nalezen
    'c.fillempty.q': "E deja plin?", // nieuw, nalezen
    'c.fillempty.a': "Da. Îl golesc.", // nieuw, nalezen
    'c.fillempty': "Ai terminat? Spune", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Ai terminat o treabă? Spune: „Ik ben klaar.” Și întreabă ce poți face mai departe. Dacă aștepți în liniște până te vede cineva, poate părea că nu vrei să muncești, chiar dacă nu e adevărat. Colegii care cer următoarea treabă primesc des, după un timp, muncă mai interesantă. Vrei să înveți ceva nou? Întreabă și asta: „Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "Am terminat. Ce mai pot face?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Ți-ai terminat treaba. Șeful tău e ocupat cu altceva. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Spui că ai terminat și întrebi ce urmează.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Aștepți până te vede șeful.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Iei o pauză: treaba ta e gata.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Un șef nu poate vedea tot. Când spui că ai terminat, munca merge mai departe și arăți că vrei să faci mai mult.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Întâi asta, apoi aia", // nieuw, nalezen
    'w.nu': "acum", // nieuw, nalezen
    'w.dan': "apoi", // nieuw, nalezen
    'w.altijd': "mereu, întotdeauna", // nieuw, nalezen
    'w.genoeg': "destul", // nieuw, nalezen
    'w.meer': "mai mult", // nieuw, nalezen
    'w.alles': "tot, totul", // nieuw, nalezen
    's.order.1': "Întâi asta, apoi aia.", // nieuw, nalezen
    's.order.2': "Asta e destul.", // nieuw, nalezen
    's.order.3': "Fă asta mereu așa.", // nieuw, nalezen
    'c.order.q': "Poți să faci asta acum?", // nieuw, nalezen
    'c.order.a': "Da. Întâi asta, și apoi?", // nieuw, nalezen
    'c.order': "Multe treburi deodată? Întreabă ce e întâi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Uneori primești trei treburi într-o singură propoziție. E greu de ținut minte, și pentru cei care vorbesc bine olandeza. Întreabă care e prima: „Wat moet ik eerst doen?” Poți și să-ți notezi treburile, sau să le numeri pe degete și să le spui înapoi. Ai uitat una? Du-te înapoi și întreabă. E mai bine decât să ghicești.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "E mult. Ce trebuie să fac întâi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Șeful îți dă trei treburi, foarte repede. Ții minte doar prima. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Ceri imediat să auzi treburile încă o dată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "O faci pe prima și speri să-ți amintești restul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Nu faci nimic: nu le știi pe toate trei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Să întrebi imediat durează zece secunde. Mai târziu șeful poate să fie plecat, și atunci aștepți sau ghicești.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Plăci, tencuială și vopsea", // nieuw, nalezen
    'l.tiletools': "Sculele pentru montat plăci", // nieuw, nalezen
    'w.lijmkam': "gletiera zimțată (întinde adezivul pentru plăci în dungi)", // nieuw, nalezen
    'w.troffel': "mistria", // nieuw, nalezen
    'w.tegelsnijder': "mașina de tăiat plăci", // nieuw, nalezen
    'w.nijptang': "cleștele (rupi cu el bucăți mici dintr-o placă)", // nieuw, nalezen
    'w.mixer': "mixerul (amestecă adezivul sau tencuiala în găleată)", // nieuw, nalezen
    'w.duimstok': "metrul pliant", // nieuw, nalezen
    's.tiletools.1': "Dă-mi puțin gletiera zimțată.", // nieuw, nalezen
    's.tiletools.2': "Tai placa cu mașina de tăiat plăci.", // nieuw, nalezen
    's.tiletools.3': "Măsoară întâi cu metrul pliant.", // nieuw, nalezen
    'c.tiletools.q': "Unde e mixerul?", // nieuw, nalezen
    'c.tiletools.a': "La găleată, lângă ușă.", // nieuw, nalezen
    'c.tiletools': "Curăță sculele înainte să se întărească adezivul", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Adezivul pentru plăci și tencuiala se întăresc repede, și pe scule. Așa că spală imediat gletiera zimțată, mistria și mixerul într-o găleată cu apă, și înainte de pauză. Adezivul întărit nu mai iese, iar o gletieră zimțată cu adeziv întărit face dungi proaste. Nu turna apa murdară în chiuvetă sau în scurgere: se înfundă. Întreabă unde se poate arunca apa. Mixerul: ține-l cu ambele mâini și pornește-l încet. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Curăț repede gletiera zimțată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "E timpul de pauză. Gletiera zimțată e plină de adeziv ud. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "O speli în apă, apoi iei pauza.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "O lași: o speli după lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "O pui în găleata cu adeziv.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Adezivul se întărește și în pauză. O gletieră curată face dungi bune, iar plăcile se lipesc bine. Adezivul întărit pe ea înseamnă multă muncă, sau o sculă nouă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Plăci, adeziv și linia de mijloc", // nieuw, nalezen
    'w.tegel': "placa (de faianță sau de gresie)", // nieuw, nalezen
    'w.tegellijm': "adezivul pentru plăci", // nieuw, nalezen
    'w.tegelkruisje': "cruciulița (o cruce mică între plăci)", // nieuw, nalezen
    'w.hartlijn': "linia de mijloc (de la ea începi să pui plăcile)", // nieuw, nalezen
    'w.tegelplaat': "panoul de exerciții (un panou pe care exersezi montarea plăcilor)", // nieuw, nalezen
    'w.potlood': "creionul", // nieuw, nalezen
    's.tiling.1': "Adezivul pentru plăci e încă ud.", // nieuw, nalezen
    's.tiling.2': "Pune o cruciuliță între plăci.", // nieuw, nalezen
    's.tiling.3': "Trasează întâi linia de mijloc cu creionul.", // nieuw, nalezen
    'c.tiling.q': "De unde încep cu plăcile?", // nieuw, nalezen
    'c.tiling.a': "Din mijloc, de pe linia de mijloc.", // nieuw, nalezen
    'c.tiling': "Începe de la linia de mijloc, cu puțin adeziv", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "La plăci nu se începe dintr-un colț. Întâi trasezi linia de mijloc, cu un creion și cu nivela, și începi de acolo. Atunci plăcile tăiate de la cele două capete au aceeași mărime. Întinde doar atâta adeziv cât poți acoperi cu plăci în scurt timp. Adezivul care stă prea mult face o pieliță uscată, și atunci plăcile nu se lipesc bine. Pune o cruciuliță la fiecare încrucișare, ca toate rosturile să fie la fel. Verifică des cu nivela: o placă strâmbă e ușor de îndreptat acum, și greu mâine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Nu întind prea mult adeziv deodată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "După o convorbire lungă la telefon, adezivul de pe perete are o pieliță uscată. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Îl razi și întinzi adeziv proaspăt.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Pui plăcile pe el oricum.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Îl uzi cu un burete și continui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Adezivul cu pieliță uscată nu ține bine placa. Mai târziu placa se poate desprinde, și atunci lucrarea trebuie făcută din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Tencuirea", // nieuw, nalezen
    'w.stucspaan': "gletiera netedă (o drișcă plată din oțel cu care netezești tencuiala)", // nieuw, nalezen
    'w.oplegspaan': "paleta pentru tencuială (o placă plată pe care ții tencuiala)", // nieuw, nalezen
    'w.spackmes': "șpaclul (un cuțit lat și plat)", // nieuw, nalezen
    'w.rei': "dreptarul (o bară lungă și dreaptă cu care tragi tencuiala drept)", // nieuw, nalezen
    'w.sponsspaan': "drișca cu burete", // nieuw, nalezen
    'w.hoekprofiel': "coltarul (o bandă de metal pentru un colț drept)", // nieuw, nalezen
    's.plaster.1': "Pune întâi coltarul pe colț.", // nieuw, nalezen
    's.plaster.2': "Netezește peretele cu gletiera.", // nieuw, nalezen
    's.plaster.3': "Trage dreptarul pe perete.", // nieuw, nalezen
    'c.plaster.q': "S-a uscat deja peretele?", // nieuw, nalezen
    'c.plaster.a': "Nu, mai așteaptă o zi.", // nieuw, nalezen
    'c.plaster': "Tencuiala are nevoie de timp să se usuce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Tencuiala proaspătă rămâne udă mult timp. Un perete ud e mai închis la culoare decât unul uscat. Zugravul poate începe doar când peretele e uscat peste tot, și asta poate dura zile sau săptămâni. Nu-l usca mai repede cu un încălzitor: atunci tencuiala poate crăpa. Cineva vrea să vopsească prea devreme? Spune că peretele nu e încă uscat. Și înainte să începi, acoperă podeaua, ferestrele și prizele: tencuiala se scoate greu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Peretele e încă ud. Nu poți vopsi încă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Zugravul vrea să înceapă mâine. Tencuiala nouă mai are pete închise la culoare. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "Îi spui zugravului: peretele nu e încă uscat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Pui un încălzitor în fața lui la noapte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Nu spui nimic: o să vadă zugravul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Petele închise înseamnă că tencuiala e încă udă. Vopseaua pe un perete ud se poate desprinde, iar un încălzitor poate face crăpături. Să aștepți costă mai puțin decât să faci totul din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Zidărie, lemn și fixare", // nieuw, nalezen
    'u.machines': "Mașini și scule", // nieuw, nalezen
    'l.shapes': "Forme", // nieuw, nalezen
    'w.vierkant': "pătratul", // nieuw, nalezen
    'w.rechthoek': "dreptunghiul", // nieuw, nalezen
    'w.driehoek': "triunghiul", // nieuw, nalezen
    'w.cirkel': "cercul", // nieuw, nalezen
    'w.kubus': "cubul", // nieuw, nalezen
    'w.balk': "paralelipipedul (o formă ca o cutie lungă)", // nieuw, nalezen
    's.shapes.1': "Placa e un pătrat.", // nieuw, nalezen
    's.shapes.2': "Camera asta e un dreptunghi.", // nieuw, nalezen
    's.shapes.3': "O cărămidă are forma unui paralelipiped.", // nieuw, nalezen
    'c.shapes.q': "E un pătrat?", // nieuw, nalezen
    'c.shapes.a': "Nu, un dreptunghi. E mai lung decât lat.", // nieuw, nalezen
    'c.shapes': "Verifică un dreptunghi cu două linii în cruce", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "O cameră, o podea sau un cadru e adesea un dreptunghi. Dar colțurile sunt chiar drepte? Există o verificare simplă. Măsoară dintr-un colț până în colțul opus. Apoi măsoară între celelalte două colțuri. Cele două lungimi sunt la fel? Atunci colțurile sunt drepte. Nu sunt la fel? Atunci forma e puțin strâmbă, iar plăcile sau podeaua nu se vor potrivi bine. Spune-i șefului înainte să începi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Aceste două măsuri nu sunt la fel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Măsori o podea din colț în colț, în ambele direcții. Una e mai lungă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "Îi spui șefului înainte să începi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Începi dintr-un colț, o să fie bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Măsori din nou doar o latură.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Două lungimi diferite înseamnă că colțurile nu sunt drepte. Atunci plăcile sau scândurile nu se potrivesc. E mai bine să știi asta înainte să începi.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Unghiuri și forme rotunde", // nieuw, nalezen
    'w.hoek': "unghiul", // nieuw, nalezen
    'w.graad': "gradul (°)", // nieuw, nalezen
    'w.geodriehoek': "echerul cu raportor", // nieuw, nalezen
    'w.boog': "arcul, curba", // nieuw, nalezen
    'w.cilinder': "cilindrul", // nieuw, nalezen
    'w.parallellogram': "paralelogramul", // nieuw, nalezen
    's.angles.1': "Unghiul ăsta are nouăzeci de grade.", // nieuw, nalezen
    's.angles.2': "Măsoară unghiul cu echerul cu raportor.", // nieuw, nalezen
    's.angles.3': "Țeava are forma unui cilindru.", // nieuw, nalezen
    'c.angles.q': "Câte grade are unghiul ăsta?", // nieuw, nalezen
    'c.angles.a': "Patruzeci și cinci. Jumătate dintr-un unghi drept.", // nieuw, nalezen
    'c.angles': "Verifică un colț mare cu 3, 4 și 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Pe șantier verifici des un unghi drept: un perete pe o podea, colțul unei camere. Un colț mic îl verifici cu un echer de tâmplărie sau cu un echer cu raportor. Pentru un colț mare există un truc vechi. Măsoară 3 metri pe o latură și 4 metri pe cealaltă latură, și fă un semn la amândouă. De la un semn la celălalt sunt exact 5 metri? Atunci unghiul are 90 de grade. Merge și mai mic: 30, 40 și 50 de centimetri.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Unghiul ăsta nu e drept.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Trebuie să verifici un colț mare al unui perete nou. Echerul tău e mult prea mic. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Măsori 3, 4 și 5 metri.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Te uiți la el de departe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Folosești totuși echerul mic.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "Cu 3, 4 și 5 poți verifica exact un colț mare, doar cu o ruletă. Din ochi, un colț poate să pară drept și totuși să fie greșit.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Lungime, suprafață și volum", // nieuw, nalezen
    'w.lengte': "lungimea", // nieuw, nalezen
    'w.breedte': "lățimea", // nieuw, nalezen
    'w.hoogte': "înălțimea", // nieuw, nalezen
    'w.oppervlakte': "suprafața, aria (lungimea înmulțită cu lățimea, în metri pătrați)", // nieuw, nalezen
    'w.inhoud': "volumul (lungimea înmulțită cu lățimea și cu înălțimea)", // nieuw, nalezen
    'w.centimeter': "centimetrul", // nieuw, nalezen
    's.size.1': "Suprafața este lungimea înmulțită cu lățimea.", // nieuw, nalezen
    's.size.2': "Volumul este lungimea înmulțită cu lățimea și cu înălțimea.", // nieuw, nalezen
    's.size.3': "Zece milimetri fac un centimetru.", // nieuw, nalezen
    'c.size.q': "Câți metri pătrați are podeaua?", // nieuw, nalezen
    'c.size.a': "Patru pe cinci metri, deci douăzeci de metri pătrați.", // nieuw, nalezen
    'c.size': "Calculează ce îți trebuie, apoi pune puțin în plus", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Câte plăci, câtă vopsea, cât nisip? Calculezi cu suprafața sau cu volumul. Suprafața: lungimea înmulțită cu lățimea, în metri pătrați. Volumul: lungimea înmulțită cu lățimea și cu înălțimea, în metri cubi. Măsoară totul în aceeași unitate: totul în metri sau totul în centimetri. Notează măsurile, nu le ține în minte. Apoi adaugă puțin în plus, pentru bucățile tăiate și pentru greșeli. Nu știi sigur? Roagă un coleg să-ți verifice calculul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Notez măsurile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Ai măsurat podeaua. Trebuie să comanzi plăcile azi. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Calculezi suprafața și adaugi puțin în plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Comanzi exact suprafața, nicio placă în plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Ghicești: ai văzut podeaua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Mereu tai câteva plăci, și unele se sparg. Cu puțin în plus nu trebuie să te oprești la jumătate și să comanzi din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Vopsirea", // nieuw, nalezen
    'w.verf': "vopseaua", // nieuw, nalezen
    'w.kwast': "pensula (o pensulă lată)", // nieuw, nalezen
    'w.penseel': "pensula mică (pentru colțuri și margini)", // nieuw, nalezen
    'w.roerstok': "bățul de amestecat", // nieuw, nalezen
    'w.tape': "banda de mascare", // nieuw, nalezen
    'w.strijkvaatje': "găletușa de vopsea (un vas mic pe care îl ții în mână când vopsești)", // nieuw, nalezen
    's.paint.1': "Amestecă întâi bine vopseaua.", // nieuw, nalezen
    's.paint.2': "Acoperă marginea cu bandă de mascare.", // nieuw, nalezen
    's.paint.3': "Pune puțină vopsea în găletușă.", // nieuw, nalezen
    'c.paint.q': "Ce pensulă iau?", // nieuw, nalezen
    'c.paint.a': "Pe cea lată pentru perete, pensula mică pentru colțuri.", // nieuw, nalezen
    'c.paint': "Amestecă bine și vopsește de sus în jos", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Vopseaua care a stat o vreme e groasă pe fundul cutiei. Așa că amestec-o întâi bine, cu un băț de amestecat, până când culoarea e la fel peste tot. Nu vopsi din cutia mare: pune puțină vopsea în găletușă și închide din nou cutia. Așa vopseaua rămâne bună. Vopsește de sus în jos, ca picăturile să cadă pe vopsea udă și să le mai poți întinde cu pensula. Folosește pensula lată pentru perete și pensula mică pentru colțuri. La sfârșit, curăță imediat pensulele.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Întâi amestec bine vopseaua.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Deschizi o cutie veche de vopsea. Sus e subțire, jos e groasă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "O amesteci întâi bine, cu bățul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Vopsești cu vopseaua subțire de deasupra.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Adaugi apă până e subțire peste tot.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "O parte din culoare stă pe fundul cutiei. Fără amestecat, peretele rămâne cu pete și dungi.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "Pregătirea pentru vopsit", // nieuw, nalezen
    'w.plamuurmes': "șpaclul pentru chit (umpli găuri cu el)", // nieuw, nalezen
    'w.schuurpapier': "hârtia abrazivă, șmirghelul", // nieuw, nalezen
    'w.verfkrabber': "răzuitoarea de vopsea", // nieuw, nalezen
    'w.stoffertje': "mătura mică de mână (pentru praf)", // nieuw, nalezen
    'w.schuren': "a șlefui", // nieuw, nalezen
    'w.afplakken': "a masca (a acoperi o margine cu bandă)", // nieuw, nalezen
    's.prep.1': "Întâi răzuiește vopseaua veche.", // nieuw, nalezen
    's.prep.2': "Șlefuiește lemnul până e neted.", // nieuw, nalezen
    's.prep.3': "Mătură praful cu mătura mică.", // nieuw, nalezen
    'c.prep.q': "Pot să vopsesc deja?", // nieuw, nalezen
    'c.prep.a': "Nu, întâi șlefuiești și astupi gaura.", // nieuw, nalezen
    'c.prep': "O vopsire bună începe înainte de vopsea", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Vopseaua nu se prinde bine pe murdărie, praf sau vopsea veche care se desprinde. Așa că întâi răzuiește vopseaua desprinsă cu răzuitoarea. Umple găurile cu chit și cu șpaclul, și lasă chitul să se usuce. Apoi șlefuiește până e neted. După șlefuire, mătură praful cu mătura mică, și de pe margini. La sfârșit, maschează ce trebuie să rămână curat, de exemplu ferestrele și prizele. Șlefuirea face praf fin: poartă o mască de praf și întreabă care. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Întâi șlefuim, apoi vopsim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Ai șlefuit ușa. Mai e praf pe ea. Colegul tău vrea să vopsească acum. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Întâi mături praful, cu mătura mică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "Îl lași să vopsească: vopseaua acoperă praful.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Ștergi praful cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Vopseaua pe praf nu se prinde bine. Mai târziu se desprinde în fulgi, și atunci toată munca trebuie făcută din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Zidăria", // nieuw, nalezen
    'w.speciekuip': "cada pentru mortar", // nieuw, nalezen
    'w.metseltroffel': "mistria de zidar", // nieuw, nalezen
    'w.baksteen': "cărămida", // nieuw, nalezen
    'w.cement': "cimentul", // nieuw, nalezen
    'w.voegijzer': "rostuitorul (netezește rosturile dintre cărămizi)", // nieuw, nalezen
    'w.handveger': "peria de mână", // nieuw, nalezen
    's.brick.1': "Mai e mortar în cadă.", // nieuw, nalezen
    's.brick.2': "Netezește rostul cu rostuitorul.", // nieuw, nalezen
    's.brick.3': "Curăță zidul cu peria de mână.", // nieuw, nalezen
    'c.brick.q': "Câte cărămizi mai ai?", // nieuw, nalezen
    'c.brick.a': "Încă un palet. Destul pentru azi.", // nieuw, nalezen
    'c.brick': "Ține zidul curat în timp ce lucrezi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Mortarul e ud când pui cărămizile și se întărește în câteva ore. Așa că lucrează curat. Ia imediat cu mistria mortarul care iese din rost. Netezește rosturile cu rostuitorul când mortarul e puțin tare, nu când e încă ud. Apoi perie zidul cu peria de mână. Mortarul întărit pe fața unei cărămizi se scoate foarte greu. La sfârșitul zilei, acoperă partea de sus a zidului, ca ploaia să nu spele mortarul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Netezesc rosturile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "La sfârșitul zilei e mortar pe fața cărămizilor. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Îl periezi acum, înainte să se întărească.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Îl lași: îl cureți săptămâna viitoare.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Speli zidul cu multă apă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Mortarul proaspăt se ia ușor cu peria. Mortarul întărit rămâne pe cărămidă, și atunci zidul nu arată bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Un zid drept", // nieuw, nalezen
    'w.metseltouw': "sfoara de zidar (o sfoară pentru un rând drept)", // nieuw, nalezen
    'w.klos': "suportul de sfoară (ține sfoara la colț)", // nieuw, nalezen
    'w.lagenmaatlat': "rigla pentru rânduri (arată înălțimea fiecărui rând)", // nieuw, nalezen
    'w.profiel': "profilul de colț (un stâlp drept la capătul zidului)", // nieuw, nalezen
    'w.kop': "capul cărămizii (partea scurtă a unei cărămizi)", // nieuw, nalezen
    'w.strek': "lungul cărămizii (partea lungă a unei cărămizi)", // nieuw, nalezen
    's.wall.1': "Întinde bine sfoara de zidar.", // nieuw, nalezen
    's.wall.2': "Profilul de colț trebuie să stea drept.", // nieuw, nalezen
    's.wall.3': "Pune cărămida cu partea lungă spre exterior.", // nieuw, nalezen
    'c.wall.q': "Cât de înalt trebuie să fie rândul ăsta?", // nieuw, nalezen
    'c.wall.a': "Uită-te pe rigla pentru rânduri.", // nieuw, nalezen
    'c.wall': "Sfoara ține zidul drept", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Un zidar nu construiește din ochi. Întâi profilele de colț stau drepte la ambele capete ale zidului. Între ele întinzi bine sfoara de zidar, la înălțimea rândului următor. Pune fiecare cărămidă de-a lungul sforii, dar nu împinge sfoara. Rigla pentru rânduri arată cât de înalt trebuie să fie fiecare rând. Verifică des cu nivela. O cărămidă strâmbă e ușor de îndreptat cât mortarul e ud, și foarte greu mâine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "E bine întinsă sfoara?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Sfoara de zidar e slabă și atârnă puțin la mijloc. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Întâi o întinzi bine, apoi continui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Pui totuși cărămizile sub ea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Pui cărămizile din ochi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "O sfoară slabă atârnă la mijloc, așa că atârnă și rândul. O sfoară bine întinsă dă un rând drept.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Lucrul cu lemnul", // nieuw, nalezen
    'w.handzaag': "fierăstrăul de mână", // nieuw, nalezen
    'w.kapzaag': "fierăstrăul cu spate (un fierăstrău mic cu spatele rigid)", // nieuw, nalezen
    'w.houtbeitel': "dalta pentru lemn", // nieuw, nalezen
    'w.handschaaf': "rindeaua", // nieuw, nalezen
    'w.timmermanshamer': "ciocanul de dulgher", // nieuw, nalezen
    'w.houtenhamer': "maiul (un ciocan de lemn)", // nieuw, nalezen
    's.wood.1': "Taie scândura la măsură.", // nieuw, nalezen
    's.wood.2': "Dă la rindea marginea până e netedă.", // nieuw, nalezen
    's.wood.3': "Lovește dalta cu maiul.", // nieuw, nalezen
    'c.wood.q': "Ce fierăstrău îmi trebuie?", // nieuw, nalezen
    'c.wood.a': "Fierăstrăul cu spate, pentru bucata asta mică.", // nieuw, nalezen
    'c.wood': "Prea scurt nu se mai repară", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Lemnul tăiat prea scurt nu mai poate fi făcut lung. Așa că măsoară de două ori și trage linia înainte să tai. Taie lângă linie, pe partea bucății de care nu ai nevoie. Ține lemnul nemișcat: pe un banc de lucru sau cu o clemă, nu pe genunchi. Lasă fierăstrăul să lucreze, cu mișcări lungi și calme. Împinge dalta departe de corp și de cealaltă mână. Și ține dalta și rindeaua ascuțite: o sculă tocită alunecă mai ușor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "O mai măsor o dată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Trebuie să tai o scândură la măsură. Ai măsurat-o o dată, repede. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Măsori din nou, apoi tragi linia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "O tai acum: probabil e bine.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "O tai din ochi, fără linie.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Prea lung poți tăia din nou, prea scurt nu mai poți repara. Să măsori din nou durează un minut; o scândură nouă costă mult mai mult.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Trasarea", // nieuw, nalezen
    'w.winkelhaak': "echerul de tâmplărie (arată un unghi drept)", // nieuw, nalezen
    'w.verstekhaak': "echerul pentru tăieri oblice (45 de grade)", // nieuw, nalezen
    'w.zwaaihaak': "echerul reglabil (unghiul îl potrivești tu)", // nieuw, nalezen
    'w.kruishout': "graminul (trage o linie de-a lungul marginii)", // nieuw, nalezen
    'w.passer': "compasul (desenezi un cerc cu el)", // nieuw, nalezen
    'w.aftekenen': "a trasa (a desena unde vei tăia)", // nieuw, nalezen
    's.square.1': "Trasează linia cu echerul de tâmplărie.", // nieuw, nalezen
    's.square.2': "Pune echerul reglabil la unghiul potrivit.", // nieuw, nalezen
    's.square.3': "Desenează un cerc cu compasul.", // nieuw, nalezen
    'c.square.q': "Unghiul e drept?", // nieuw, nalezen
    'c.square.a': "Da, echerul se potrivește exact.", // nieuw, nalezen
    'c.square': "Trasează de la o margine dreaptă", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Înainte să tai sau să dai o gaură, trasezi unde. Folosește un creion ascuțit: o linie groasă nu e exactă. Alege o margine dreaptă a lemnului și măsoară totul de la marginea aceea. Ține partea groasă a echerului strâns lipită de ea și trage linia de-a lungul oțelului. Desenează o cruce mică pe bucata pe care nu o folosești. Apoi tai lângă linie, pe partea cu crucea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Întâi trasez.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Creionul tău e tocit și face o linie groasă. Vrei să trasezi pe o scândură. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Întâi ascuți creionul, apoi desenezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Tragi totuși linia, e bine așa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Faci semnul cu unghia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "O linie groasă are câțiva milimetri lățime. Atunci nu știi unde să tai, iar bucata nu iese exactă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Bormașini și șuruburi", // nieuw, nalezen
    'w.accuboor': "bormașina cu acumulator", // nieuw, nalezen
    'w.boormachine': "bormașina (cu cablu)", // nieuw, nalezen
    'w.bitje': "bitul (vârful de înșurubat)", // nieuw, nalezen
    'w.plug': "diblul", // nieuw, nalezen
    'w.schroevendraaier': "șurubelnița", // nieuw, nalezen
    'w.spijker': "cuiul", // nieuw, nalezen
    's.screw.1': "Dă o gaură și pune un diblu în ea.", // nieuw, nalezen
    's.screw.2': "Ce bit merge la șurubul ăsta?", // nieuw, nalezen
    's.screw.3': "Bate cuiul în lemn.", // nieuw, nalezen
    'c.screw.q': "Unde e bormașina cu acumulator?", // nieuw, nalezen
    'c.screw.a': "La încărcător, e aproape plină.", // nieuw, nalezen
    'c.screw': "Uită-te înainte să dai o gaură", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Înainte să dai o gaură în perete, gândește-te ce e în spatele lui. Țevile și cablurile merg des drept în sus, în jos sau în lateral de la o priză sau un întrerupător. Întreabă unde sunt, sau verifică cu un detector. Alege un burghiu de aceeași mărime ca diblul și dă gaura puțin mai adâncă decât diblul. Folosește bitul potrivit pentru șurub: un bit greșit alunecă și strică capul șurubului. Poartă ochelari de protecție când dai găuri.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Pot să dau o gaură aici?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Trebuie să dai o gaură chiar deasupra unei prize. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Întrebi întâi pe unde trece cablul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Dai gaura: nu e niciodată un cablu acolo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Dai gaura încet, atunci e sigur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Un cablu merge des drept în sus de la o priză. Să dai gaura în el e periculos, iar reparația e multă muncă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Fixarea", // nieuw, nalezen
    'w.bevestigen': "a fixa (a prinde bine ceva de perete)", // nieuw, nalezen
    'w.vastzetten': "a strânge (rotești până e strâns)", // nieuw, nalezen
    'w.lijmen': "a lipi (cu adeziv)", // nieuw, nalezen
    'w.inbussleutel': "cheia imbus (cheie hexagonală)", // nieuw, nalezen
    'w.kruisschroevendraaier': "șurubelnița în cruce (vârf în formă de cruce)", // nieuw, nalezen
    'w.platteschroevendraaier': "șurubelnița dreaptă (cu vârf plat)", // nieuw, nalezen
    's.fix.1': "Fixează raftul pe perete.", // nieuw, nalezen
    's.fix.2': "Strânge bolțul cu cheia imbus.", // nieuw, nalezen
    's.fix.3': "Ia șurubelnița dreaptă, nu pe cea în cruce.", // nieuw, nalezen
    'c.fix.q': "Cum fixez raftul ăsta?", // nieuw, nalezen
    'c.fix.a': "Cu două dibluri și două șuruburi.", // nieuw, nalezen
    'c.fix': "Strâns, dar nu prea strâns", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Un șurub sau un bolț trebuie să fie strâns, dar nu prea strâns. Dacă strângi prea tare, se strică filetul sau crapă lemnul. Rotește până nu se mai mișcă, apoi oprește-te. La bormașina cu acumulator, rotește întâi inelul cu numere la un număr mic. Un raft pe perete are nevoie de dibluri potrivite pentru perete: piatra are nevoie de alte dibluri decât un perete subțire din plăci. Adezivul are nevoie de timp: presează piesele una pe alta, ține-le cu o clemă și așteaptă până se usucă adezivul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "E bine fixat raftul?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Ai lipit două bucăți de lemn. Colegul tău vrea să le folosească imediat. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Spui: întâi trebuie să se usuce adezivul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "Îl lași să le folosească: adezivul e rapid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Le ții un minut în mâini.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Adezivul ud încă nu ține. Dacă le folosești prea devreme, piesele se desprind din nou. Atunci trebuie să începi din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "La mașină", // nieuw, nalezen
    'w.bedieningspaneel': "panoul de comandă (butoanele și ecranul unei mașini)", // nieuw, nalezen
    'w.startknop': "butonul de pornire (verde)", // nieuw, nalezen
    'w.hendel': "maneta", // nieuw, nalezen
    'w.afscherming': "apărătoarea de protecție (un capac peste piesele care se mișcă)", // nieuw, nalezen
    'w.sensor': "senzorul (vede dacă e ceva acolo)", // nieuw, nalezen
    'w.signaallamp': "lampa de semnalizare (lumini colorate deasupra unei mașini)", // nieuw, nalezen
    's.atmachine.1': "Apasă butonul verde de pornire.", // nieuw, nalezen
    's.atmachine.2': "Lampa de semnalizare e roșie. E o defecțiune.", // nieuw, nalezen
    's.atmachine.3': "Nu scoate niciodată apărătoarea de protecție.", // nieuw, nalezen
    'c.atmachine.q': "De ce se tot oprește mașina?", // nieuw, nalezen
    'c.atmachine.a': "Senzorul nu vede bine cutia.", // nieuw, nalezen
    'c.atmachine': "Apărătoarea rămâne pe loc", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Piesele care se mișcă la o mașină pot trage înăuntru o mână, o mânecă sau părul în mai puțin de o secundă. Pentru asta e apărătoarea. Nu o scoate niciodată și nu băga niciodată mâna în spatele ei cât timp mașina merge. O apărătoare sau un senzor nu funcționează? Atunci mașina nu e sigură: oprește-o și spune-i șefului de echipă. S-a blocat ceva? Întâi oprește mașina și asigură-te că nimeni nu o poate porni cât lucrezi. Cum se face asta diferă de la o firmă la alta: cere explicații înainte să începi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Apărătoarea de protecție e stricată.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "O cutie s-a blocat în mașină, chiar în spatele apărătoarei. Mașina merge. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Întâi oprești mașina, apoi chemi ajutor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Bagi repede mâna și scoți cutia.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Deschizi apărătoarea cât timp mașina merge.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "O mașină care merge îți poate trage mâna înainte să apuci să reacționezi. Să o oprești durează o clipă; o mână rănită se vindecă în luni.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Măsurare și verificare", // nieuw, nalezen
    'w.weegschaal': "cântarul", // nieuw, nalezen
    'w.meetklok': "comparatorul (măsoară diferențe foarte mici)", // nieuw, nalezen
    'w.loep': "lupa", // nieuw, nalezen
    'w.monster': "proba (un produs pe care îl scoți ca să-l verifici)", // nieuw, nalezen
    'w.afkeurbak': "lada de rebuturi (pentru produsele care nu sunt bune)", // nieuw, nalezen
    'w.teller': "contorul (numără produsele)", // nieuw, nalezen
    's.inspect.1': "Pune produsul pe cântar.", // nieuw, nalezen
    's.inspect.2': "Produsul ăsta e deteriorat. Merge în lada de rebuturi.", // nieuw, nalezen
    's.inspect.3': "Mă uit la etichetă cu lupa.", // nieuw, nalezen
    'c.inspect.q': "Cât de des iau o probă?", // nieuw, nalezen
    'c.inspect.a': "Una în fiecare oră. Scrie-o pe listă.", // nieuw, nalezen
    'c.inspect': "Notează ce verifici", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "Într-o fabrică verifici produsele în timpul lucrului: le cântărești, le măsori sau te uiți atent la ele. Notează imediat fiecare verificare pe listă, cu ora. Nu mai târziu, din memorie. Un produs nu e bun? Pune-l în lada de rebuturi și uită-te atent la următoarele. Mai multe produse sunt greșite? Atunci e ceva în neregulă cu mașina. Spune-i imediat șefului de echipă. O problemă găsită devreme salvează multe produse. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Mai multe produse sunt greșite.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Cântarul arată că trei produse la rând sunt prea ușoare. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Îi spui imediat șefului de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Le pui înapoi pe bandă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Nu spui nimic: se mai întâmplă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Trei produse greșite la rând arată o problemă la mașină. Cu cât spui mai repede, cu atât se pierd mai puține produse.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Ambalarea", // nieuw, nalezen
    'w.verpakking': "ambalajul", // nieuw, nalezen
    'w.krimpfolie': "folia termocontractabilă (folie de plastic care se strânge la căldură)", // nieuw, nalezen
    'w.sealmachine': "mașina de sigilat (închide un pachet cu căldură)", // nieuw, nalezen
    'w.vulmateriaal': "materialul de umplutură (perne de aer sau hârtie într-o cutie)", // nieuw, nalezen
    'w.afbreekmes': "cutterul (cuțit cu lamă care se rupe)", // nieuw, nalezen
    'w.tapepistool': "dispenserul de bandă adezivă", // nieuw, nalezen
    's.packing.1': "Pune material de umplutură în cutie.", // nieuw, nalezen
    's.packing.2': "Închide cutia cu dispenserul de bandă.", // nieuw, nalezen
    's.packing.3': "Mașina de sigilat e fierbinte. Atenție!", // nieuw, nalezen
    'c.packing.q': "Câte produse intră într-o cutie?", // nieuw, nalezen
    'c.packing.a': "Douăsprezece. Scrie pe listă.", // nieuw, nalezen
    'c.packing': "Taie în direcția opusă corpului", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Ambalarea e o muncă rapidă, iar cutterul e foarte ascuțit. Taie mereu în direcția opusă corpului și celeilalte mâini. Bagă lama înapoi după fiecare tăietură, și când lași cutterul jos pentru o clipă. Rupe cu grijă o bucată tocită de lamă și arunc-o în cutia pentru lame vechi, nu în coșul de gunoi obișnuit. Mașina de sigilat și pistolul cu aer cald pentru folia termocontractabilă se încing foarte tare: nu atinge părțile fierbinți. Și verifică fiecare cutie: produsul potrivit, numărul potrivit și eticheta dreaptă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Întâi bag lama înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Pui cutterul pe masă pentru o clipă. Lama e încă afară. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Întâi bagi lama înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Îl lași așa: îți trebuie din nou imediat.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Îl pui așa în buzunar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "O lamă deschisă pe masă sau în buzunar te poate tăia pe tine sau pe un coleg. Să o bagi înapoi durează o secundă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Întreținerea", // nieuw, nalezen
    'w.persluchtpistool': "pistolul de aer comprimat", // nieuw, nalezen
    'w.steeksleutel': "cheia fixă", // nieuw, nalezen
    'w.oliekannetje': "oliera", // nieuw, nalezen
    'w.smeerpistool': "pompa de gresare (pentru unsoare)", // nieuw, nalezen
    'w.lekbak': "tava de scurgere (prinde uleiul care curge)", // nieuw, nalezen
    'w.poetsdoek': "cârpa de curățat", // nieuw, nalezen
    's.upkeep.1': "Curge ulei. Pune tava de scurgere dedesubt.", // nieuw, nalezen
    's.upkeep.2': "Șterge uleiul cu o cârpă.", // nieuw, nalezen
    's.upkeep.3': "Nu îndrepta niciodată pistolul de aer comprimat spre cineva.", // nieuw, nalezen
    'c.upkeep.q': "Când gresăm mașina?", // nieuw, nalezen
    'c.upkeep.a': "În fiecare luni, înainte de prima tură.", // nieuw, nalezen
    'c.upkeep': "O mașină curată își arată problemele", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Întreținerea mică face des parte din muncă: șters, uns cu ulei și gresat. Fă asta doar când mașina e oprită și când ai învățat cum. O mașină curată e ușor de verificat: vezi imediat o scurgere sau o piesă slăbită. Uleiul pe jos e alunecos. Pune o tavă de scurgere sub locul unde curge, șterge podeaua și spune-i șefului de echipă. Aruncă cârpele cu ulei în coșul special. Nu îndrepta niciodată pistolul de aer comprimat spre o persoană și nu-ți curăța niciodată hainele sau pielea cu el. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Mașina pierde ulei.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Vezi o băltoacă mică de ulei sub mașină. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Pui o tavă de scurgere dedesubt și anunți.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "O lași: e doar puțin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Pui niște hârtie peste ea și continui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "O scurgere se mărește, iar uleiul pe jos îi face pe oameni să alunece. Găsită devreme, e o reparație mică.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Electricitate, țevi și metal", // nieuw, nalezen
    'l.wiring': "Cablajul", // nieuw, nalezen
    'w.draad': "firul (un fir din interiorul unui cablu)", // nieuw, nalezen
    'w.stopcontact': "priza (în perete)", // nieuw, nalezen
    'w.schakelaar': "întrerupătorul (pentru lumină)", // nieuw, nalezen
    'w.lasklem': "clema de conexiune (unește firele)", // nieuw, nalezen
    'w.striptang': "cleștele de dezizolat", // nieuw, nalezen
    'w.kabelgoot': "canalul pentru cabluri (un jgheab pentru cabluri)", // nieuw, nalezen
    's.wiring.1': "Dezizolează firul un centimetru.", // nieuw, nalezen
    's.wiring.2': "Fixează firele în clema de conexiune.", // nieuw, nalezen
    's.wiring.3': "Cablurile merg în canalul pentru cabluri.", // nieuw, nalezen
    'c.wiring.q': "Care fir unde merge?", // nieuw, nalezen
    'c.wiring.a': "Maro la maro, albastru la albastru.", // nieuw, nalezen
    'c.wiring': "Culorile spun ce face un fir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "Într-o clădire, firele au culori fixe. Maro (uneori negru sau gri) aduce curentul. Albastru merge înapoi. Verde-galben e împământarea: îi protejează pe oameni și nu se folosește niciodată pentru altceva. Leagă aceeași culoare la aceeași culoare. Dezizolează doar cât intră în clemă: nu are voie să iasă cupru gol. Împinge firul înăuntru, apoi trage ușor de el ca să verifici că e fixat. Nu știi sigur care fir e care? Oprește-te și întreabă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Ce culoare are împământarea?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Legi o lampă. O bucată de cupru iese din clemă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Tai firul mai scurt și îl legi din nou.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Îl lași așa: lampa merge.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Pui o bucată de bandă izolatoare în jurul lui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Cuprul gol din afara clemei poate atinge ceva. Asta poate da un șoc electric sau un scurtcircuit, chiar și după câteva luni.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Măsurare și lucru în siguranță", // nieuw, nalezen
    'w.multimeter': "multimetrul (măsoară curentul)", // nieuw, nalezen
    'w.spanningzoeker': "creionul de tensiune (o șurubelniță cu un beculeț)", // nieuw, nalezen
    'w.meterkast': "tabloul electric", // nieuw, nalezen
    'w.zekering': "siguranța automată (oprește curentul când e ceva în neregulă)", // nieuw, nalezen
    'w.hangslot': "lacătul", // nieuw, nalezen
    'w.aardedraad': "firul de împământare (verde-galben)", // nieuw, nalezen
    's.testing.1': "Siguranța a sărit.", // nieuw, nalezen
    's.testing.2': "Pune un lacăt pe întrerupător.", // nieuw, nalezen
    's.testing.3': "Măsoară întâi cu multimetrul.", // nieuw, nalezen
    'c.testing.q': "Pot să deschid tabloul electric?", // nieuw, nalezen
    'c.testing.a': "Nu, asta o face electricianul.", // nieuw, nalezen
    'c.testing': "Oprit, încuiat, măsurat", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Înainte să lucrezi la instalația electrică, fă trei pași. Oprește: siguranța potrivită din tabloul electric, nu doar întrerupătorul de pe perete. Încuie: pune lacătul tău pe ea și ține cheia la tine, ca nimeni să nu o poată porni din nou. Măsoară: verifică cu un creion de tensiune sau cu un multimetru că într-adevăr nu e curent. Abia apoi începi. O siguranță sare iar și iar? Nu o tot porni din nou: spune-i șefului. Fă lucrări electrice doar când ți s-a spus că ai voie. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Nu mai e curent pe el.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Ai oprit siguranța. Un coleg zice: „Începe acum, e oprit.” Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Pui lacătul și întâi măsori.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Începi: colegul tău știe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Atingi repede firul ca să verifici.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Uneori e oprită siguranța greșită, sau cineva o pornește din nou. Un lacăt și o măsurare arată că e într-adevăr sigur.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Țevi și apă", // nieuw, nalezen
    'w.buis': "țeava", // nieuw, nalezen
    'w.koppeling': "racordul (unește două țevi)", // nieuw, nalezen
    'w.pijpsnijder': "dispozitivul de tăiat țevi", // nieuw, nalezen
    'w.waterpomptang': "cleștele papagal", // nieuw, nalezen
    'w.afsluiter': "robinetul de oprire (închide apa)", // nieuw, nalezen
    'w.teflontape': "banda de teflon (bandă albă pentru filetul unei țevi)", // nieuw, nalezen
    's.pipes.1': "Închide robinetul de oprire.", // nieuw, nalezen
    's.pipes.2': "Taie țeava cu dispozitivul de tăiat țevi.", // nieuw, nalezen
    's.pipes.3': "Înfășoară bandă de teflon pe filet.", // nieuw, nalezen
    'c.pipes.q': "Mai pierde apă racordul?", // nieuw, nalezen
    'c.pipes.a': "Puțin. Îl mai strâng un pic.", // nieuw, nalezen
    'c.pipes': "Întâi apa oprită și o găleată pregătită", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Înainte să deschizi o țeavă de apă, închide robinetul de oprire. Apoi deschide un robinet mai jos, ca să se golească țeava. Pune o găleată și o cârpă sub locul unde lucrezi. Taie o țeavă de cupru cu dispozitivul de tăiat țevi, nu cu fierăstrăul: capătul rămâne rotund și curat. Strânge bine un racord, dar nu prea tare. Când ai terminat, dă drumul la apă încet și uită-te după picături. O scurgere mică pe care o lași devine o pagubă cauzată de apă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Apa e oprită?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Ai făcut un racord nou. Dai drumul la apă. Cade o picătură mică în fiecare minut. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Închizi apa și strângi racordul sau îl refaci.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Îl lași: e doar o picătură.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Pui o găleată dedesubt și pleci acasă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "O picătură pe minut înseamnă mulți litri pe săptămână. Apa poate strica podeaua sau tavanul de dedesubt.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Prelucrarea metalului", // nieuw, nalezen
    'w.bankschroef': "menghina (ține o piesă strâns pe bancul de lucru)", // nieuw, nalezen
    'w.vijl': "pila (ca să netezești metalul de mână)", // nieuw, nalezen
    'w.ijzerzaag': "bomfaierul (fierăstrău pentru metal)", // nieuw, nalezen
    'w.kolomboormachine': "mașina de găurit cu coloană (o bormașină mare pe un suport)", // nieuw, nalezen
    'w.draadtap': "tarodul (taie un filet într-o gaură)", // nieuw, nalezen
    'w.braam': "bavura (o margine ascuțită după ce tai metal)", // nieuw, nalezen
    's.metalwork.1': "Prinde metalul în menghină.", // nieuw, nalezen
    's.metalwork.2': "Pilește bavura.", // nieuw, nalezen
    's.metalwork.3': "Ține mâinile departe de burghiu.", // nieuw, nalezen
    'c.metalwork.q': "De ce e marginea așa de ascuțită?", // nieuw, nalezen
    'c.metalwork.a': "Mai are o bavură.", // nieuw, nalezen
    'c.metalwork': "Prinde piesa, nu o ține niciodată în mână", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "La mașina de găurit cu coloană, nu ține niciodată o piesă mică în mână. Burghiul o poate prinde și o poate învârti foarte repede. Prinde-o în menghină. Leagă-ți părul lung la spate și nu purta mănuși la un burghiu care se învârte: poate trage mănușa înăuntru. Poartă ochelari de protecție. După tăiat sau găurit, metalul are o bavură: o margine ascuțită. Pilește-o înainte să iei piesa în mână sau să o dai mai departe. Strânge bucățelele de metal cu o perie, nu cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Întâi o prind în menghină.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Trebuie să dai o gaură într-o bucată mică de metal. Menghina e pe alt banc de lucru. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Aduci menghina și prinzi piesa în ea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "O ții strâns cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Îți pui mănuși și o ții.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Un burghiu poate prinde o piesă mică și o poate învârti. Atunci îți lovește mâna. În menghină, piesa stă pe loc.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Asamblare și montaj", // nieuw, nalezen
    'l.assembly': "La linia de asamblare", // nieuw, nalezen
    'w.werkinstructie': "instrucțiunea de lucru (o foaie cu pașii)", // nieuw, nalezen
    'w.onderdelenbak': "lada cu piese", // nieuw, nalezen
    'w.mal': "dispozitivul de fixare (ține piesa în locul potrivit)", // nieuw, nalezen
    'w.rolbaan': "conveiorul cu role", // nieuw, nalezen
    'w.montagetafel': "masa de montaj", // nieuw, nalezen
    'w.voetpedaal': "pedala (un întrerupător pe care îl apeși cu piciorul)", // nieuw, nalezen
    's.assembly.1': "Citește întâi instrucțiunea de lucru.", // nieuw, nalezen
    's.assembly.2': "Lada cu piese e aproape goală.", // nieuw, nalezen
    's.assembly.3': "Pune piesa în dispozitivul de fixare.", // nieuw, nalezen
    'c.assembly.q': "Ce pas urmează acum?", // nieuw, nalezen
    'c.assembly.a': "Pasul patru. Uită-te în instrucțiunea de lucru.", // nieuw, nalezen
    'c.assembly': "Urmează pașii, în aceeași ordine", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "La o linie de asamblare, fiecare pas are locul și ordinea lui. Instrucțiunea de lucru ți le arată, des cu imagini. Fă pașii de fiecare dată în aceeași ordine, și când crezi că știi un mod mai rapid. O altă ordine poate da un produs care arată bine, dar nu funcționează. O ladă e aproape goală? Spune la timp, ca să nu se oprească linia. Vezi un pas care ar putea fi mai bun? Spune-i șefului de echipă: atunci se poate schimba pentru toată lumea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Am nevoie de piese noi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Ai găsit un mod mai rapid de a face pasul trei. Instrucțiunea de lucru spune altceva. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Îl întrebi întâi pe șeful de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "De acum îl faci în felul tău.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Îi înveți pe colegi felul tău.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Ordinea are des un motiv pe care nu îl vezi. Dacă felul tău e mai bun, ordinea se poate schimba pentru toată lumea.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Prinderea pieselor", // nieuw, nalezen
    'w.schroefmachine': "mașina de înșurubat (atârnă deasupra liniei)", // nieuw, nalezen
    'w.momentsleutel': "cheia dinamometrică (face clic când bolțul e strâns destul)", // nieuw, nalezen
    'w.tiewrap': "colierul de plastic", // nieuw, nalezen
    'w.sluitring': "șaiba", // nieuw, nalezen
    'w.klinknagel': "nitul", // nieuw, nalezen
    'w.popnageltang': "cleștele de nituit", // nieuw, nalezen
    's.fastening.1': "Strânge bolțul cu cheia dinamometrică.", // nieuw, nalezen
    's.fastening.2': "Nu uita șaiba.", // nieuw, nalezen
    's.fastening.3': "Leagă cablurile cu un colier de plastic.", // nieuw, nalezen
    'c.fastening.q': "Cât de strâns trebuie să fie bolțul ăsta?", // nieuw, nalezen
    'c.fastening.a': "Până face clic cheia dinamometrică.", // nieuw, nalezen
    'c.fastening': "Clicul e de ajuns", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "O cheie dinamometrică face clic când un bolț e strâns destul. Oprește-te la clic: nu mai roti. Prea strâns poate rupe bolțul sau piesa, iar prea slab se poate desface. Mașina de înșurubat funcționează la fel: se oprește singură. Pune fiecare șaibă la locul ei: o șaibă care lipsește e greu de văzut mai târziu. Numără-ți bolțurile. A rămas unul în plus, sau îți mai trebuie unul? Atunci ceva e greșit: spune-i șefului de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "A rămas un bolț în plus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Cheia ta dinamometrică a făcut clic. Ți se pare că bolțul e încă puțin slăbit. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Te oprești și îl întrebi pe șeful de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Îl mai rotești puțin cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Folosești o cheie mai lungă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Clicul e reglat la forța potrivită. Dacă ți se pare ceva greșit, poate cheia trebuie verificată. Dacă rotești mai departe, poți rupe bolțul.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Ridicare și mutare", // nieuw, nalezen
    'w.takel': "palanul (ridică piese grele cu un lanț)", // nieuw, nalezen
    'w.hijshaak': "cârligul de ridicare", // nieuw, nalezen
    'w.tilhulp': "dispozitivul de ridicare (ține o piesă prin vacuum)", // nieuw, nalezen
    'w.onderdelenkar': "căruciorul cu piese", // nieuw, nalezen
    'w.draaitafel': "masa rotativă (rotești piesa, nu pe tine)", // nieuw, nalezen
    'w.rolcontainer': "containerul cu role (o cușcă înaltă pe roți)", // nieuw, nalezen
    's.handling.1': "Nu ridica asta fără ajutor. Folosește palanul.", // nieuw, nalezen
    's.handling.2': "Cârligul de ridicare e bine închis?", // nieuw, nalezen
    's.handling.3': "Împinge căruciorul cu piese, nu-l trage.", // nieuw, nalezen
    'c.handling.q': "Am voie să stau sub palan?", // nieuw, nalezen
    'c.handling.a': "Nu, niciodată sub o sarcină suspendată.", // nieuw, nalezen
    'c.handling': "Lasă palanul să facă munca grea", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Piesele grele se ridică cu un palan sau cu un dispozitiv de ridicare, nu cu spatele. Verifică cârligul înainte să ridici: clapeta de siguranță trebuie să se închidă. Ridică încet și ține mâinile și picioarele departe de sarcină. Nu sta și nu trece niciodată pe sub o sarcină suspendată. Folosește masa rotativă ca să întorci o piesă: atunci nu trebuie să-ți răsucești spatele. Împinge un cărucior sau un container cu role: vezi unde mergi, iar spatele tău muncește mai puțin. Folosește un palan doar când ai învățat cum. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Folosesc palanul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "O piesă e foarte grea. Palanul mai e ocupat zece minute. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Aștepți palanul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': { m: "O ridici singur, repede.", f: "O ridici singură, repede.", x: "O ridici fără ajutor, repede." }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "O târăști pe jos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "O piesă grea îți poate răni spatele într-o secundă. Zece minute de așteptare sunt mai bune decât luni de durere.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Verificarea finală", // nieuw, nalezen
    'w.typeplaatje': "plăcuța de identificare (o plăcuță mică de metal cu tipul și numărul)", // nieuw, nalezen
    'w.stempel': "ștampila", // nieuw, nalezen
    'w.testbank': "bancul de testare", // nieuw, nalezen
    'w.goedkeursticker': "autocolantul de aprobare (un autocolant verde: produsul e bun)", // nieuw, nalezen
    'w.kras': "zgârietura", // nieuw, nalezen
    'w.barst': "fisura", // nieuw, nalezen
    's.finalcheck.1': "Plăcuța de identificare e strâmbă.", // nieuw, nalezen
    's.finalcheck.2': "Produsul ăsta are o zgârietură.", // nieuw, nalezen
    's.finalcheck.3': "Fără autocolantul de aprobare nu pleacă.", // nieuw, nalezen
    'c.finalcheck.q': "E bun produsul ăsta?", // nieuw, nalezen
    'c.finalcheck.a': "Nu, are o fisură.", // nieuw, nalezen
    'c.finalcheck': "Doar produsele bune primesc autocolantul", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Verificarea finală e ultima șansă să găsești o greșeală înainte s-o găsească clientul. Verifică fiecare punct de pe listă, și când e aglomerat. O zgârietură sau o fisură mică îți scapă ușor: uită-te într-o lumină bună și din mai multe părți. Pune autocolantul de aprobare sau ștampila doar când fiecare punct e bun. Ai dubii? Pune produsul deoparte și întreabă. O greșeală găsită aici costă puțin, iar o greșeală la client costă mult. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Produsul ăsta merge deoparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Pe linie e aglomerat. Vezi o zgârietură mică pe un produs, sub etichetă. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Îl pui deoparte și îi spui șefului de echipă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Pui autocolantul: e mică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Muți eticheta peste zgârietură.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "O zgârietură mică poate fi semnul unei probleme pe linie. Dacă o ascunzi, doar muți problema la client.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Cultivare, sortare și sera", // nieuw, nalezen
    'l.sowing': "Semănat și butași", // nieuw, nalezen
    'w.zaad': "semințele", // nieuw, nalezen
    'w.zaaibak': "tava de semănat", // nieuw, nalezen
    'w.stek': "butașul (o bucată de plantă care face rădăcini noi)", // nieuw, nalezen
    'w.potgrond': "pământul pentru ghivece", // nieuw, nalezen
    'w.kweekpot': "ghiveciul pentru răsaduri", // nieuw, nalezen
    'w.gieter': "stropitoarea", // nieuw, nalezen
    's.sowing.1': "Pune două semințe în fiecare căsuță.", // nieuw, nalezen
    's.sowing.2': "Pune butașul în pământul pentru ghivece.", // nieuw, nalezen
    's.sowing.3': "Dă-le plantelor tinere puțină apă.", // nieuw, nalezen
    'c.sowing.q': "Cât de adânc trebuie pusă sămânța?", // nieuw, nalezen
    'c.sowing.a': "O jumătate de centimetru. Nu mai adânc.", // nieuw, nalezen
    'c.sowing': "Plantele mici au nevoie de o mână blândă", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Plantele tinere sunt slabe. Ține un butaș sau un răsad de o frunză, nu de tulpină: o frunză crește la loc, o tulpină ruptă nu. Apasă pământul ușor, nu tare. Udă încet, cu un jet fin, ca să nu fie spălate semințele. Lucrează cu mâini curate și tăvi curate: plantele tinere se îmbolnăvesc ușor. Scrie data și felul plantei pe fiecare tavă, ca toată lumea să știe ce e în ea.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Îl țin de frunză.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Trebuie să muți un răsad mic într-un ghiveci. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Îl ții ușor de o frunză.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Îl tragi afară de tulpină.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Îl scoți strângându-l împreună cu pământul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "O frunză poate crește la loc. O tulpină ruptă nu poate, și atunci planta moare.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Sortare și ambalare", // nieuw, nalezen
    'w.tros': "ciorchinele (mai multe roșii pe o singură tulpină)", // nieuw, nalezen
    'w.bakje': "caserola (o cutie mică pentru fructe)", // nieuw, nalezen
    'w.sorteermachine': "mașina de sortat", // nieuw, nalezen
    'w.etiketpistool': "pistolul de etichetat", // nieuw, nalezen
    'w.kleurenkaart': "cartela de culori (arată cât de copt trebuie să fie fructul)", // nieuw, nalezen
    'w.tomatenschaar': "foarfeca de recoltat", // nieuw, nalezen
    's.sorting.1': "Pune ciorchinii cu grijă în ladă.", // nieuw, nalezen
    's.sorting.2': "Roșia asta e prea coaptă. Se pune deoparte.", // nieuw, nalezen
    's.sorting.3': "Uită-te pe cartela de culori.", // nieuw, nalezen
    'c.sorting.q': "E destul de coaptă roșia asta?", // nieuw, nalezen
    'c.sorting.a': "Nu, e încă prea verde. Las-o pe plantă.", // nieuw, nalezen
    'c.sorting': "Fiecare fruct contează", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Fructele și legumele se lovesc ușor. Pune-le jos, nu le scăpa și nu le arunca. Azi nu vezi lovitura, dar mâine fructul e moale și maro. Uită-te pe cartela de culori ca să știi ce culoare unde merge. Pune deoparte un fruct lovit sau putred: un singur fruct stricat într-o caserolă le poate strica pe celelalte. Ține caserolele și lăzile curate și nu le pune niciodată pe jos.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Asta e lovită.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Pui roșii în caserole. O roșie are o pată moale și maro. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "O pui deoparte.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "O ascunzi la fund.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "O pui totuși în caserolă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "O roșie putredă le face pe celelalte să putrezească mai repede. Clientul o găsește, și toată caserola vine înapoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Sera și climatul ei", // nieuw, nalezen
    'w.buisrailkar': "căruciorul pe țevi (merge pe țevile de încălzire)", // nieuw, nalezen
    'w.druppelaar': "picurătorul (dă apă picătură cu picătură)", // nieuw, nalezen
    'w.luchtraam': "fereastra de aerisire (o fereastră în acoperiș)", // nieuw, nalezen
    'w.kasscherm': "ecranul serei (o pânză sub acoperiș)", // nieuw, nalezen
    'w.ventilator': "ventilatorul", // nieuw, nalezen
    'w.thermometer': "termometrul", // nieuw, nalezen
    's.greenhouse.1': "Du căruciorul pe țevi până la capătul rândului.", // nieuw, nalezen
    's.greenhouse.2': "Picurătorul s-a desprins.", // nieuw, nalezen
    's.greenhouse.3': "E cald. Ferestrele de aerisire se deschid.", // nieuw, nalezen
    'c.greenhouse.q': "De ce e așa de cald în seră?", // nieuw, nalezen
    'c.greenhouse.a': "Ecranul e închis, și ferestrele la fel.", // nieuw, nalezen
    'c.greenhouse': "Lasă climatul pe seama calculatorului", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Într-o seră, un calculator reglează climatul: ferestrele, ecranul, încălzirea și apa. Nu deschide singur o fereastră și nu schimba nicio setare. Vezi ceva ciudat, de exemplu un picurător care curge sau o fereastră care nu se închide? Spune-i șefului. Căruciorul pe țevi merge pe țevile de încălzire: folosește-l doar când ai învățat cum. Ține picioarele pe platformă și nu atinge niciodată țevile: pot fi fierbinți. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Picurătorul ăsta curge.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Un picurător s-a desprins. Apa curge pe jos. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Îl pui la loc și îi spui șefului.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Îl lași: e doar apă.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Oprești apa pentru tot rândul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Un picurător desprins risipește apă, planta primește prea puțină, iar podeaua udă e alunecoasă.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Dăunători și lucru curat", // nieuw, nalezen
    'w.luis': "păduchele de plante (o insectă mică și verde pe plante)", // nieuw, nalezen
    'w.vangplaat': "capcana lipicioasă (un carton galben care prinde insecte)", // nieuw, nalezen
    'w.rups': "omida", // nieuw, nalezen
    'w.sluipwesp': "viespea parazită (o viespe mică ce omoară dăunătorii)", // nieuw, nalezen
    'w.schimmel': "mucegaiul", // nieuw, nalezen
    'w.ontsmettingsmat': "covorașul de dezinfectare (calci pe el la ușă)", // nieuw, nalezen
    's.pests.1': "Pe frunza asta sunt păduchi.", // nieuw, nalezen
    's.pests.2': "Agață capcana lipicioasă deasupra plantelor.", // nieuw, nalezen
    's.pests.3': "Treci peste covorașul de dezinfectare.", // nieuw, nalezen
    'c.pests.q': "Am voie să omor viespea asta?", // nieuw, nalezen
    'c.pests.a': "Nu, e o viespe parazită. Ne ajută.", // nieuw, nalezen
    'c.pests': "Nu duce bolile din rând în rând", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "O boală sau un dăunător se răspândește repede într-o seră. Îl poți duce pe mâini, pe haine și pe unelte. Așa că treci peste covorașul de dezinfectare la fiecare ușă și spală-te pe mâini când mergi în altă parte a serei. Începe lucrul în rândurile sănătoase și termină în rândurile bolnave. Vezi insecte, pete sau mucegai pe o plantă? Nu o atinge, dar spune-i șefului unde este. Unele insecte din seră sunt ajutoare: lasă-le în pace. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Aici e mucegai.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Vezi mucegai gri pe câteva plante din rândul tău. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "Îi spui șefului unde este.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Rupi frunzele stricate și continui.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Nu spui nimic: sunt doar câteva plante.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Mucegaiul se răspândește repede. Șeful știe ce trebuie făcut și de unde să înceapă.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Anvelope, ulei și frâne", // nieuw, nalezen
    'l.tyres': "Schimbarea anvelopelor", // nieuw, nalezen
    'w.wielbout': "prezonul (șurubul roții)", // nieuw, nalezen
    'w.slagmoersleutel': "cheia pneumatică cu impact", // nieuw, nalezen
    'w.bandenspanningsmeter': "manometrul pentru anvelope", // nieuw, nalezen
    'w.bandenprofiel': "profilul anvelopei (șanțurile din anvelopă)", // nieuw, nalezen
    'w.velg': "janta", // nieuw, nalezen
    'w.bandenwisselaar': "mașina de montat anvelope (o mașină care scoate anvelopa de pe jantă)", // nieuw, nalezen
    's.tyres.1': "Strânge prezoanele în cruce.", // nieuw, nalezen
    's.tyres.2': "Profilul anvelopei e prea mic.", // nieuw, nalezen
    's.tyres.3': "Măsoară presiunea cu manometrul pentru anvelope.", // nieuw, nalezen
    'c.tyres.q': "Trebuie scoase anvelopele astea?", // nieuw, nalezen
    'c.tyres.a': "Da, profilul aproape a dispărut.", // nieuw, nalezen
    'c.tyres': "Înșurubează cu mâna, strânge cu cheia dinamometrică", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "O cheie pneumatică cu impact e rapidă și foarte puternică. Folosește-o ca să scoți prezoanele, dar nu ca să le strângi tare. Întâi înșurubează prezoanele cu mâna. Apoi strânge-le în cruce cu o cheie dinamometrică, la forța pentru mașina respectivă. O roată care nu e strânsă bine poate ieși în timpul mersului. Verifică profilul și presiunea la fiecare anvelopă pe care o iei în mână. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Întâi le înșurubez cu mâna.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Pui o roată la loc. Un coleg zice: „Folosește cheia pneumatică, e mai repede.” Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Le înșurubezi cu mâna, apoi folosești cheia dinamometrică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Le strângi tare cu cheia pneumatică.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Le înșurubezi cu mâna și lași așa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "O cheie pneumatică poate strânge un prezon prea tare sau nu destul. Doar cheia dinamometrică dă forța potrivită.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Schimbul de ulei", // nieuw, nalezen
    'w.oliefilter': "filtrul de ulei", // nieuw, nalezen
    'w.oliepeilstok': "joja de ulei (arată cât ulei este)", // nieuw, nalezen
    'w.opvangbak': "tava de scurgere (prinde uleiul vechi)", // nieuw, nalezen
    'w.trechter': "pâlnia", // nieuw, nalezen
    'w.aftapplug': "bușonul de golire", // nieuw, nalezen
    'w.olievat': "butoiul de ulei", // nieuw, nalezen
    's.oilchange.1': "Pune tava de scurgere sub motor.", // nieuw, nalezen
    's.oilchange.2': "Deșurubează bușonul de golire.", // nieuw, nalezen
    's.oilchange.3': "Uită-te pe joja de ulei.", // nieuw, nalezen
    'c.oilchange.q': "Cât ulei trebuie pus?", // nieuw, nalezen
    'c.oilchange.a': "Patru litri. Apoi uită-te pe jojă.", // nieuw, nalezen
    'c.oilchange': "Uleiul vechi merge în butoi, nu în canalizare", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Uleiul vechi e rău pentru apă și pentru sol. Puțin ulei poate murdări multă apă. Așa că prinde tot uleiul vechi în tava de scurgere și toarnă-l în butoiul pentru ulei vechi. Nu-l turna niciodată în canalizare sau în chiuvetă. Filtrele vechi și cârpele cu ulei merg în coșul lor special. Uleiul fierbinte îți poate arde pielea: lasă întâi motorul să se răcească puțin și poartă mănuși. Curăță imediat uleiul vărsat: uleiul pe jos e alunecos. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Unde se pune uleiul vechi?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Tava de scurgere e plină cu ulei vechi. Butoiul e în celălalt capăt al atelierului. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "O duci cu grijă la butoi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "O golești în canalizarea de afară.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "O lași sub mașină pentru mai târziu.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Uleiul vechi din canalizare murdărește apa. O tavă plină sub o mașină e răsturnată ușor cu piciorul.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Frâne și lumini", // nieuw, nalezen
    'w.remschijf': "discul de frână", // nieuw, nalezen
    'w.remblok': "plăcuța de frână", // nieuw, nalezen
    'w.koplamp': "farul", // nieuw, nalezen
    'w.remvloeistof': "lichidul de frână", // nieuw, nalezen
    'w.remklauw': "etrierul de frână", // nieuw, nalezen
    'w.achterlamp': "lampa din spate", // nieuw, nalezen
    's.brakes.1': "Plăcuțele de frână sunt uzate.", // nieuw, nalezen
    's.brakes.2': "Verifică lichidul de frână.", // nieuw, nalezen
    's.brakes.3': "Lampa din spate stânga nu merge.", // nieuw, nalezen
    'c.brakes.q': "Trebuie schimbat și discul de frână?", // nieuw, nalezen
    'c.brakes.a': "Da, e prea subțire.", // nieuw, nalezen
    'c.brakes': "Frânele: verifică de două ori", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Frânele țin oamenii în viață. Așa că lucrează calm și verifică-ți munca de două ori. După plăcuțe sau discuri noi, apasă pedala de frână de câteva ori înainte ca mașina să se miște: prima apăsare merge des prea adânc. Lichidul de frână e rău pentru piele și pentru vopsea: poartă mănuși și șterge imediat picăturile. Nu sufla praful de frână cu aer comprimat: curăță-l cu spray pentru frâne și o cârpă. Înainte să plece mașina, verifică fiecare lumină, și stopurile.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Apăs pedala de frână de câteva ori.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Ai montat plăcuțe de frână noi. Mașina trebuie să iasă afară. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Apeși pedala de frână de câteva ori.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "O scoți imediat afară.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "O împingi afară fără să verifici.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "După plăcuțe noi, pedala poate merge prea adânc prima dată. Atunci mașina nu se oprește.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Citirea defectelor și fișa de lucru", // nieuw, nalezen
    'w.diagnosecomputer': "testerul de diagnoză (citește defectele mașinii)", // nieuw, nalezen
    'w.waarschuwingslampje': "martorul de avertizare (pe bord)", // nieuw, nalezen
    'w.werkorder': "fișa de lucru (ce trebuie făcut la mașină)", // nieuw, nalezen
    'w.kentekenplaat': "plăcuța de înmatriculare", // nieuw, nalezen
    'w.autosleutel': "cheia mașinii", // nieuw, nalezen
    'w.stoelhoes': "husa de scaun (ține scaunul curat)", // nieuw, nalezen
    's.diagnosis.1': "Conectează testerul de diagnoză.", // nieuw, nalezen
    's.diagnosis.2': "Martorul de avertizare e aprins.", // nieuw, nalezen
    's.diagnosis.3': "Pune o husă pe scaun.", // nieuw, nalezen
    'c.diagnosis.q': "Ce trebuie făcut la mașina asta?", // nieuw, nalezen
    'c.diagnosis.a': "Uită-te pe fișa de lucru.", // nieuw, nalezen
    'c.diagnosis': "Ai grijă de mașină ca și cum ar fi a ta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Un client îți dă mașina și cheia lui. Ai grijă de amândouă. Pune o husă pe scaun și un covoraș pe jos înainte să urci. Fă doar ce scrie pe fișa de lucru. Găsești și altceva care nu e în regulă? Notează și spune-i șefului: clientul decide. Ține cheia la locul ei, cu eticheta ei. Nu folosi radioul, telefonul sau lucrurile din mașină. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Asta nu scrie pe fișa de lucru.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Schimbi uleiul. O anvelopă e aproape tocită. Nu scrie pe fișa de lucru. Ce faci?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Notezi și îi spui șefului.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Schimbi imediat anvelopa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Nu spui nimic: nu e treaba ta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Clientul decide ce se face și ce se plătește. Dar trebuie să știe că anvelopa e periculoasă.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Cositul și tăierea plantelor", // nieuw, nalezen
    'l.mowing': "Cositul ierbii", // nieuw, nalezen
    'w.gras': "iarba", // nieuw, nalezen
    'w.maaien': "a cosi (a tăia iarba)", // nieuw, nalezen
    'w.grasmaaier': "mașina de tuns iarba", // nieuw, nalezen
    'w.zitmaaier': "tractorașul de tuns iarba (o mașină de tuns pe care stai)", // nieuw, nalezen
    'w.bosmaaier': "motocositoarea (o mașină de tuns pe o tijă lungă)", // nieuw, nalezen
    'w.gelaatsscherm': "viziera de protecție", // nieuw, nalezen
    's.mowing.1': "Întâi tunde iarba de pe margine.", // nieuw, nalezen
    's.mowing.2': "Iarba e prea udă. Tundem mâine.", // nieuw, nalezen
    's.mowing.3': "Pune-ți viziera de protecție.", // nieuw, nalezen
    'c.mowing.q': "Pot să iau tractorașul de tuns iarba?", // nieuw, nalezen
    'c.mowing.a': "Da, dar întâi strânge pietrele.", // nieuw, nalezen
    'c.mowing': "Pietrele zboară departe", // nieuw, nalezen
    'c.mowing.b': "O mașină de tuns iarba sau o motocositoare poate arunca o piatră foarte departe și foarte tare. Așa că întâi mergi pe iarbă și strânge pietrele, sticla și crengile. Poartă viziera de protecție sau ochelarii de protecție, antifoanele și încălțămintea de protecție. Ține ceilalți oameni departe. Se apropie cineva? Oprește mașina. Nu băga niciodată mâna sub mașina de tuns cât timp motorul merge: oprește-o și așteaptă până când lama stă pe loc. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.mowing.p': "Vă rog să păstrați distanța.", // nieuw, nalezen
    'c.mowing.s': "Lucrezi cu motocositoarea. Un bărbat cu un câine vine spre tine. Ce faci?", // nieuw, nalezen
    'c.mowing.o1': "Oprești mașina până trece de tine.", // nieuw, nalezen
    'c.mowing.o2': "Continui: te vede.", // nieuw, nalezen
    'c.mowing.o3': "Te întorci cu spatele la el și continui.", // nieuw, nalezen
    'c.mowing.w': "O piatră de la o motocositoare poate răni grav pe cineva, chiar și de departe.", // nieuw, nalezen
    'l.pruning': "Tăierea plantelor", // nieuw, nalezen
    'w.snoeien': "a tăia, a toaleta (a tăia crengi de pe o plantă)", // nieuw, nalezen
    'w.snoeischaar': "foarfeca de grădină", // nieuw, nalezen
    'w.tak': "creanga", // nieuw, nalezen
    'w.struik': "tufișul, arbustul", // nieuw, nalezen
    'w.boom': "copacul", // nieuw, nalezen
    'w.snoeizaag': "fierăstrăul de grădină", // nieuw, nalezen
    's.pruning.1': "Taie tufișurile de lângă alee.", // nieuw, nalezen
    's.pruning.2': "Creanga asta e uscată. Tai-o cu fierăstrăul.", // nieuw, nalezen
    's.pruning.3': "Pune crengile grămadă.", // nieuw, nalezen
    'c.pruning.q': "Ce crengi trebuie tăiate?", // nieuw, nalezen
    'c.pruning.a': "Doar crengile uscate.", // nieuw, nalezen
    'c.pruning': "O tăietură curată se vindecă cel mai bine", // nieuw, nalezen
    'c.pruning.b': "Taie cu o foarfecă ascuțită și curată. O tăietură curată se vindecă repede; o creangă ruptă se îmbolnăvește. Taie chiar deasupra unui mugure sau a unei crengi laterale și nu lăsa o bucată lungă. Întâi taie crengile uscate și rupte. Ține cealaltă mână departe de lame. Poartă mănuși: unele plante au spini sau îți înroșesc pielea. Curăță foarfeca după lucru.", // nieuw, nalezen
    'c.pruning.p': "Unde trebuie să tai?", // nieuw, nalezen
    'c.pruning.s': "Foarfeca ta de grădină e tocită. Rupe crengile. Ce faci?", // nieuw, nalezen
    'c.pruning.o1': "Ceri o foarfecă ascuțită.", // nieuw, nalezen
    'c.pruning.o2': "Tragi mai tare de creangă.", // nieuw, nalezen
    'c.pruning.o3': "Continui: e doar un tufiș.", // nieuw, nalezen
    'c.pruning.w': "O foarfecă tocită rupe creanga. Planta se îmbolnăvește, iar tu muncești mai greu.", // nieuw, nalezen
    'l.hedge': "Tunsul gardului viu", // nieuw, nalezen
    'w.heg': "gardul viu", // nieuw, nalezen
    'w.heggenschaar': "mașina de tuns gardul viu (o mașină care taie gardul viu)", // nieuw, nalezen
    'w.kruiwagen': "roaba", // nieuw, nalezen
    'w.hark': "grebla", // nieuw, nalezen
    'w.snoeiafval': "resturile vegetale (crengi și frunze tăiate)", // nieuw, nalezen
    'w.zeil': "prelata (o folie mare de plastic)", // nieuw, nalezen
    's.hedge.1': "Pune prelata sub gardul viu.", // nieuw, nalezen
    's.hedge.2': "Tunde gardul viu frumos și drept.", // nieuw, nalezen
    's.hedge.3': "Du resturile vegetale cu roaba.", // nieuw, nalezen
    'c.hedge.q': "Cât de înalt trebuie să rămână gardul viu?", // nieuw, nalezen
    'c.hedge.a': "Până la sfoară. Nu mai jos.", // nieuw, nalezen
    'c.hedge': "Caută întâi cuiburi", // nieuw, nalezen
    'c.hedge.b': "Primăvara și vara, păsările își fac cuiburi în gardurile vii și în tufișuri. Cuiburile pe care le folosesc păsările sunt protejate. Așa că uită-te în gardul viu înainte să tai. Vezi un cuib cu ouă sau cu pui? Nu tăia acolo și spune-i șefului. Ține mașina de tuns gardul viu cu ambele mâini. Stai bine pe pământ sau pe o scară bună, niciodată pe un scaun sau pe o găleată. Ține cablul în spatele tău.", // nieuw, nalezen
    'c.hedge.p': "Aici e un cuib.", // nieuw, nalezen
    'c.hedge.s': "Tunzi un gard viu în mai. Vezi un cuib cu pui. Ce faci?", // nieuw, nalezen
    'c.hedge.o1': "Te oprești acolo și îi spui șefului.", // nieuw, nalezen
    'c.hedge.o2': "Tai cu grijă în jurul lui.", // nieuw, nalezen
    'c.hedge.o3': "Scoți cuibul și continui.", // nieuw, nalezen
    'c.hedge.w': "Cuiburile pe care le folosesc păsările sunt protejate. Șeful decide ce se face cu partea asta din gardul viu.", // nieuw, nalezen
    'l.chainsaw': "Drujba și suflanta de frunze", // nieuw, nalezen
    'w.kettingzaag': "drujba", // nieuw, nalezen
    'w.stam': "trunchiul (unui copac)", // nieuw, nalezen
    'w.zaagbroek': "pantalonii de protecție pentru drujbă (opresc lanțul)", // nieuw, nalezen
    'w.bladblazer': "suflanta de frunze", // nieuw, nalezen
    'w.bladeren': "frunzele", // nieuw, nalezen
    'w.jerrycan': "canistra (pentru combustibil)", // nieuw, nalezen
    's.chainsaw.1': "Pune-ți pantalonii de protecție pentru drujbă.", // nieuw, nalezen
    's.chainsaw.2': "Suflă frunzele grămadă.", // nieuw, nalezen
    's.chainsaw.3': "Alimentează doar când motorul e rece.", // nieuw, nalezen
    'c.chainsaw.q': "Am voie să lucrez cu drujba?", // nieuw, nalezen
    'c.chainsaw.a': "Încă nu. Întâi faci un curs.", // nieuw, nalezen
    'c.chainsaw': "Drujba doar cu instruire", // nieuw, nalezen
    'c.chainsaw.b': { m: "Drujba e una dintre cele mai periculoase unelte în munca cu spații verzi. Lucrează cu ea doar după ce ai făcut un curs și șeful spune că ai voie. Poartă mereu pantaloni de protecție pentru drujbă, o cască cu vizieră și antifoane, mănuși și bocanci de protecție. Nu lucra niciodată singur cu drujba. Ține-o cu ambele mâini și nu tăia niciodată deasupra umerilor. Cu suflanta de frunze: nu sufla niciodată spre oameni, mașini sau ferestre deschise. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", f: "Drujba e una dintre cele mai periculoase unelte în munca cu spații verzi. Lucrează cu ea doar după ce ai făcut un curs și șeful spune că ai voie. Poartă mereu pantaloni de protecție pentru drujbă, o cască cu vizieră și antifoane, mănuși și bocanci de protecție. Nu lucra niciodată singură cu drujba. Ține-o cu ambele mâini și nu tăia niciodată deasupra umerilor. Cu suflanta de frunze: nu sufla niciodată spre oameni, mașini sau ferestre deschise. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", x: "Drujba e una dintre cele mai periculoase unelte în munca cu spații verzi. Lucrează cu ea doar după ce ai făcut un curs și șeful spune că ai voie. Poartă mereu pantaloni de protecție pentru drujbă, o cască cu vizieră și antifoane, mănuși și bocanci de protecție. Cu drujba nu lucra niciodată fără un coleg lângă tine. Ține-o cu ambele mâini și nu tăia niciodată deasupra umerilor. Cu suflanta de frunze: nu sufla niciodată spre oameni, mașini sau ferestre deschise. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi." }, // nieuw, nalezen
    'c.chainsaw.p': "Încă n-am făcut un curs pentru asta.", // nieuw, nalezen
    'c.chainsaw.s': "Un coleg zice: „Ia drujba, e ușor.” N-ai făcut niciodată un curs. Ce faci?", // nieuw, nalezen
    'c.chainsaw.o1': "Spui că încă n-ai făcut un curs.", // nieuw, nalezen
    'c.chainsaw.o2': "Încerci cu grijă, doar o dată.", // nieuw, nalezen
    'c.chainsaw.o3': "O iei și te uiți întâi la un video.", // nieuw, nalezen
    'c.chainsaw.w': "O drujbă îți poate tăia piciorul într-o secundă. Fără instruire nu știi cum poate sări înapoi.", // nieuw, nalezen
    'u.planting': "Plantat, buruieni și strada", // nieuw, nalezen
    'l.weeding': "Plivitul", // nieuw, nalezen
    'w.onkruid': "buruienile (plante care trebuie scoase)", // nieuw, nalezen
    'w.wieden': "a plivi (a smulge buruienile)", // nieuw, nalezen
    'w.schoffel': "sapa", // nieuw, nalezen
    'w.perk': "straturile de flori", // nieuw, nalezen
    'w.onkruidbrander': "arzătorul de buruieni (omoară buruienile cu căldură)", // nieuw, nalezen
    'w.wortel': "rădăcina (unei plante)", // nieuw, nalezen
    's.weeding.1': "Smulge buruienile cu tot cu rădăcină.", // nieuw, nalezen
    's.weeding.2': "Sapă stratul de flori de lângă intrare.", // nieuw, nalezen
    's.weeding.3': "Atenție: arzătorul de buruieni e fierbinte.", // nieuw, nalezen
    'c.weeding.q': "Asta e buruiană?", // nieuw, nalezen
    'c.weeding.a': "Nu, e o plantă. Las-o.", // nieuw, nalezen
    'c.weeding': "Buruienile: rădăcina trebuie scoasă", // nieuw, nalezen
    'c.weeding.b': "O buruiană crește la loc când rădăcina rămâne în pământ. Așa că smulge-o cu tot cu rădăcină sau sapă chiar sub suprafața pământului. Lucrează când pământul e puțin ud: atunci rădăcina iese ușor. Nu folosi spray împotriva buruienilor, decât dacă ai învățat cum și șeful îți spune. Arzătorul de buruieni e foarte fierbinte: ține-l departe de iarbă uscată, frunze, garduri vii, mașini și containere. Nu-l lăsa niciodată jos cât timp arde. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.weeding.p': "Asta e buruiană sau plantă?", // nieuw, nalezen
    'c.weeding.s': "Lucrezi cu arzătorul de buruieni. Lângă alee e un gard viu uscat. Ce faci?", // nieuw, nalezen
    'c.weeding.o1': "Smulgi acolo buruienile cu mâna.", // nieuw, nalezen
    'c.weeding.o2': "Arzi repede și mergi mai departe.", // nieuw, nalezen
    'c.weeding.o3': "Arzi și te uiți o dată înapoi.", // nieuw, nalezen
    'c.weeding.w': "Un gard viu uscat ia foc repede. Un incendiu lângă case sau mașini e foarte periculos.", // nieuw, nalezen
    'l.planting': "Plantatul", // nieuw, nalezen
    'w.planten': "a planta", // nieuw, nalezen
    'w.schep': "lopata, cazmaua", // nieuw, nalezen
    'w.plantgat': "groapa de plantare", // nieuw, nalezen
    'w.kluit': "balotul de pământ (pământul din jurul rădăcinilor)", // nieuw, nalezen
    'w.compost': "compostul", // nieuw, nalezen
    'w.boompaal': "tutorele (un par care ține un copac tânăr)", // nieuw, nalezen
    's.planting.1': "Sapă o groapă de plantare pentru copac.", // nieuw, nalezen
    's.planting.2': "Pune copacul drept, lângă tutore.", // nieuw, nalezen
    's.planting.3': "Dă multă apă plantelor noi.", // nieuw, nalezen
    'c.planting.q': "Unde se pune planta asta?", // nieuw, nalezen
    'c.planting.a': "În spatele stratului de flori, lângă zid.", // nieuw, nalezen
    'c.planting': "Sub pământ: cabluri și conducte", // nieuw, nalezen
    'c.planting.b': "Sub iarbă și sub pavaj sunt des cabluri și conducte: pentru curent, gaz, apă și internet. Așa că sapă cu grijă. Vezi o bandă colorată sau o placă de plastic în pământ, sau dai de ceva tare? Oprește-te din săpat și spune-i șefului. Nu continua niciodată să sapi cu forța. Ridicați împreună un copac greu sau un balot de pământ mare, cu genunchii îndoiți. Dă apă unei plante noi chiar în aceeași zi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.planting.p': "Dau de ceva tare.", // nieuw, nalezen
    'c.planting.s': "Sapi o groapă de plantare. Lopata ta dă de o bandă de plastic roșie. Ce faci?", // nieuw, nalezen
    'c.planting.o1': "Te oprești din săpat și îi spui șefului.", // nieuw, nalezen
    'c.planting.o2': "Sapi mai departe cu grijă, lângă bandă.", // nieuw, nalezen
    'c.planting.o3': "Scoți banda și continui.", // nieuw, nalezen
    'c.planting.w': "O bandă în pământ avertizează că dedesubt e un cablu sau o conductă. O conductă de gaz sau un cablu electric e foarte periculos.", // nieuw, nalezen
    'l.roadside': "Lucrul lângă drum", // nieuw, nalezen
    'w.pion': "conul de semnalizare", // nieuw, nalezen
    'w.verkeer': "traficul", // nieuw, nalezen
    'w.stoep': "trotuarul (drumul de lângă stradă)", // nieuw, nalezen
    'w.fietser': "bicicletistul", // nieuw, nalezen
    'w.pijlwagen': "remorca cu săgeată (o remorcă cu o săgeată mare care avertizează șoferii)", // nieuw, nalezen
    'w.berm': "acostamentul (iarba de lângă drum)", // nieuw, nalezen
    's.roadside.1': "Pune-ți vesta. Lucrăm lângă drum.", // nieuw, nalezen
    's.roadside.2': "Pune conurile în spatele dubei.", // nieuw, nalezen
    's.roadside.3': "Ai grijă la bicicliști.", // nieuw, nalezen
    'c.roadside.q': "Pot să traversez acum?", // nieuw, nalezen
    'c.roadside.a': "Nu, așteaptă. Vine un camion.", // nieuw, nalezen
    'c.roadside': "Lângă drum: să fii văzut, stai în spatele conurilor", // nieuw, nalezen
    'c.roadside.b': "Munca lângă drum e periculoasă: șoferii se uită la telefon sau merg prea repede. Așa că poartă mereu vesta reflectorizantă, chiar și pentru o treabă scurtă. Pune conurile și indicatoarele înainte să începi și strânge-le la sfârșit. Parchează duba ca un scut între tine și trafic. Stai în spatele conurilor. Nu face niciodată un pas înapoi fără să te uiți și lucrează cu fața spre trafic când poți. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.roadside.p': "Întâi pun conurile.", // nieuw, nalezen
    'c.roadside.s': "Trebuie să tai un tufiș mic lângă drum. Durează cinci minute. Ce faci?", // nieuw, nalezen
    'c.roadside.o1': "Îți pui vesta și pui conurile.", // nieuw, nalezen
    'c.roadside.o2': "O faci repede, fără conuri.", // nieuw, nalezen
    'c.roadside.o3': "Îi ceri unui coleg să fie atent la mașini.", // nieuw, nalezen
    'c.roadside.w': "Un accident durează doar o secundă. Cinci minute fără conuri înseamnă cinci minute fără protecție.", // nieuw, nalezen
    'l.litter': "Gunoiul și cartierul", // nieuw, nalezen
    'w.zwerfafval': "gunoiul aruncat (gunoi pe stradă)", // nieuw, nalezen
    'w.grijper': "cleștele pentru gunoi (un băț care apucă gunoiul)", // nieuw, nalezen
    'w.vuilniszak': "sacul de gunoi", // nieuw, nalezen
    'w.scherven': "cioburile (bucăți ascuțite de sticlă)", // nieuw, nalezen
    'w.aanhanger': "remorca", // nieuw, nalezen
    'w.bewoner': "locuitorul (cineva care locuiește aici)", // nieuw, nalezen
    's.litter.1': "Strânge gunoiul cu cleștele.", // nieuw, nalezen
    's.litter.2': "Atenție, aici sunt cioburi.", // nieuw, nalezen
    's.litter.3': "Pune sacii de gunoi lângă remorcă.", // nieuw, nalezen
    'c.litter.q': "Când se taie copacul ăsta?", // nieuw, nalezen
    'c.litter.a': "Nu știu. Întrebați la primărie.", // nieuw, nalezen
    'c.litter': "Nu atinge niciodată un ac", // nieuw, nalezen
    'c.litter.b': "În parcuri și tufișuri găsești uneori un ac de seringă. Nu-l lua niciodată cu mâna, nici cu mănuși. Folosește cleștele și pune acul într-o cutie tare sau o sticlă cu capac, niciodată într-un sac de gunoi. Spune-i șefului. Te-ai înțepat cu un ac? Spală rana cu multă apă și sună imediat un doctor. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.litter.p': "Aici e un ac.", // nieuw, nalezen
    'c.litter.s': "Vezi un ac în iarbă, lângă o bancă. Ce faci?", // nieuw, nalezen
    'c.litter.o1': "Îl iei cu cleștele.", // nieuw, nalezen
    'c.litter.o2': "Îl iei cu mănușile pe mâini.", // nieuw, nalezen
    'c.litter.o3': "Îl pui în sacul de gunoi.", // nieuw, nalezen
    'c.litter.w': "Un ac poate transmite o boală. Mănușile nu opresc un ac, iar o cutie tare îi ține pe ceilalți în siguranță.", // nieuw, nalezen
    'u.frontdesk': "Recepție, poștă și ședințe", // nieuw, nalezen
    'l.reception': "La recepție", // nieuw, nalezen
    'w.balie': "recepția, ghișeul", // nieuw, nalezen
    'w.bezoeker': "vizitatorul", // nieuw, nalezen
    'w.intercom': "interfonul (vorbești cu cineva de la ușă)", // nieuw, nalezen
    'w.doorverbinden': "a face legătura (la telefon)", // nieuw, nalezen
    'w.toestel': "interiorul (un număr de telefon din clădire)", // nieuw, nalezen
    'w.wachtruimte': "sala de așteptare", // nieuw, nalezen
    's.reception.1': "Bună dimineața, vă pot ajuta?", // nieuw, nalezen
    's.reception.2': "Vă fac legătura.", // nieuw, nalezen
    's.reception.3': "Vă rog să luați loc în sala de așteptare.", // nieuw, nalezen
    'c.reception.q': "Am o programare cu doamna Jansen.", // nieuw, nalezen
    'c.reception.a': "Un moment. O sun.", // nieuw, nalezen
    'c.reception': "Ești prima persoană pe care o vede vizitatorul", // nieuw, nalezen
    'c.reception.b': "La recepție ești prima persoană pe care o întâlnește un vizitator. Ridică privirea, zâmbește și salută, chiar și când vorbești la telefon. Vorbește cu vizitatorii cu „u” (dumneavoastră). Răspunde la telefon cu numele firmei și cu numele tău. Nu știi răspunsul? Spune asta și găsește pe cineva care știe. Nu da niciodată nume, numere de telefon sau birourile angajaților unor oameni pe care nu-i cunoști.", // nieuw, nalezen
    'c.reception.p': "Bună dimineața, cu ce vă pot ajuta?", // nieuw, nalezen
    'c.reception.s': "Vorbești la telefon. Un vizitator vine la recepție și așteaptă. Ce faci?", // nieuw, nalezen
    'c.reception.o1': "Ridici privirea și arăți că vii imediat.", // nieuw, nalezen
    'c.reception.o2': "Termini convorbirea fără să ridici privirea.", // nieuw, nalezen
    'c.reception.o3': "Închizi imediat telefonul.", // nieuw, nalezen
    'c.reception.w': "Un vizitator care e văzut așteaptă liniștit. Un vizitator care nu e văzut se simte nedorit.", // nieuw, nalezen
    'l.visitors': "Primirea vizitatorilor", // nieuw, nalezen
    'w.bezoekerspasje': "ecusonul de vizitator", // nieuw, nalezen
    'w.lift': "liftul", // nieuw, nalezen
    'w.garderobe': "garderoba (unde îți agăți haina)", // nieuw, nalezen
    'w.parkeerplaats': "locul de parcare", // nieuw, nalezen
    'w.hal': "holul (sala mare de la intrare)", // nieuw, nalezen
    'w.begeleiden': "a însoți (a merge cu cineva undeva)", // nieuw, nalezen
    's.visitors.1': "Vă rog să vă scrieți numele aici.", // nieuw, nalezen
    's.visitors.2': "Poftiți ecusonul de vizitator.", // nieuw, nalezen
    's.visitors.3': "Vă conduc la lift.", // nieuw, nalezen
    'c.visitors.q': "Unde îmi pot lăsa haina?", // nieuw, nalezen
    'c.visitors.a': "La garderobă, lângă lift.", // nieuw, nalezen
    'c.visitors': "Fiecare vizitator se înregistrează", // nieuw, nalezen
    'c.visitors.b': "Fiecare vizitator își scrie numele pe listă sau se înregistrează pe ecran și primește un ecuson de vizitator. Așa știi cine e în clădire. Asta e important când e un incendiu: toată lumea trebuie să iasă, iar cineva verifică lista. La sfârșitul vizitei, vizitatorul dă ecusonul înapoi. Nu lăsa să intre după tine oameni pe care nu-i cunoști: întreabă-i politicos la cine au venit. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.visitors.p': "La cine ați venit?", // nieuw, nalezen
    'c.visitors.s': "Un bărbat intră după un coleg. Nu are ecuson. Ce faci?", // nieuw, nalezen
    'c.visitors.o1': "Îl întrebi politicos la cine a venit.", // nieuw, nalezen
    'c.visitors.o2': "Îl lași: a intrat cu un angajat.", // nieuw, nalezen
    'c.visitors.o3': "Suni imediat la poliție.", // nieuw, nalezen
    'c.visitors.w': "La o urgență, trebuie să știi cine e înăuntru. Și nu oricine intră are un motiv să fie acolo.", // nieuw, nalezen
    'l.mailroom': "Poștă și colete", // nieuw, nalezen
    'w.postkamer': "camera de poștă", // nieuw, nalezen
    'w.koerier': "curierul (cineva care aduce colete)", // nieuw, nalezen
    'w.postvak': "căsuța poștală (o cutie pentru poștă, câte una de persoană)", // nieuw, nalezen
    'w.envelop': "plicul", // nieuw, nalezen
    'w.afdeling': "departamentul", // nieuw, nalezen
    'w.postkar': "căruciorul de poștă", // nieuw, nalezen
    's.mailroom.1': "Curierul aduce un colet.", // nieuw, nalezen
    's.mailroom.2': "Pune scrisorile în căsuța poștală potrivită.", // nieuw, nalezen
    's.mailroom.3': "Coletul ăsta e deteriorat.", // nieuw, nalezen
    'c.mailroom.q': "Pentru cine e coletul ăsta?", // nieuw, nalezen
    'c.mailroom.a': "Pentru Financiar, la etajul doi.", // nieuw, nalezen
    'c.mailroom': "Poșta e privată", // nieuw, nalezen
    'c.mailroom.b': "Poșta și coletele sunt private. Nu deschide niciodată o scrisoare sau un colet pentru altcineva. Verifică numele și departamentul pe fiecare plic sau colet și pune-l în căsuța poștală potrivită. Când un curier aduce un colet, uită-te la el înainte să semnezi: e deteriorat? Notează asta. E un colet ciudat: miroase, curge din el sau nu are expeditor? Nu-l deschide și spune-i șefului. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.mailroom.p': "Cutia e udă și ruptă.", // nieuw, nalezen
    'c.mailroom.s': "Un curier aduce un colet. Un colț e ud și rupt. Ce faci?", // nieuw, nalezen
    'c.mailroom.o1': "Notezi paguba înainte să semnezi.", // nieuw, nalezen
    'c.mailroom.o2': "Semnezi și nu spui nimănui.", // nieuw, nalezen
    'c.mailroom.o3': "Îl deschizi, ca să vezi dacă e totul acolo.", // nieuw, nalezen
    'c.mailroom.w': "După ce semnezi, pare că coletul a fost în regulă. Atunci nimeni nu plătește paguba.", // nieuw, nalezen
    'l.meetingroom': "Pregătirea unei săli de ședințe", // nieuw, nalezen
    'w.vergaderzaal': "sala de ședințe", // nieuw, nalezen
    'w.beamer': "proiectorul", // nieuw, nalezen
    'w.whiteboard': "tabla albă", // nieuw, nalezen
    'w.thermoskan': "termosul (ține cafeaua caldă)", // nieuw, nalezen
    'w.kopje': "ceașca", // nieuw, nalezen
    'w.koffieautomaat': "automatul de cafea", // nieuw, nalezen
    's.meetingroom.1': "Pune zece scaune în jurul mesei.", // nieuw, nalezen
    's.meetingroom.2': "Pregătește cafea și ceai.", // nieuw, nalezen
    's.meetingroom.3': "Proiectorul nu merge.", // nieuw, nalezen
    'c.meetingroom.q': "La ce oră începe ședința?", // nieuw, nalezen
    'c.meetingroom.a': "La zece. Ai grijă să fie totul pregătit.", // nieuw, nalezen
    'c.meetingroom': "Gata înainte de primul invitat", // nieuw, nalezen
    'c.meetingroom.b': "O sală de ședințe trebuie să fie gata înainte să intre prima persoană. Verifică scaunele, masa, proiectorul și cablurile. Pune cafea, ceai și apă, cu cești și lapte. Du băuturile fierbinți cu grijă și niciodată pe deasupra oamenilor. După ședință, curăță masa și strânge totul. Ce auzi într-o sală de ședințe păstrezi pentru tine.", // nieuw, nalezen
    'c.meetingroom.p': "Sala e gata.", // nieuw, nalezen
    'c.meetingroom.s': "Ședința începe în cinci minute. Proiectorul nu merge. Ce faci?", // nieuw, nalezen
    'c.meetingroom.o1': "Îi spui imediat organizatorului.", // nieuw, nalezen
    'c.meetingroom.o2': "Aștepți: poate nu are nimeni nevoie de el.", // nieuw, nalezen
    'c.meetingroom.o3': "Lași un bilețel pe masă.", // nieuw, nalezen
    'c.meetingroom.w': "Cinci minute sunt încă destul timp ca să-l repari sau să găsești altă sală. Mai târziu, toată lumea așteaptă.", // nieuw, nalezen
    'u.maintenance': "Defecțiuni, reparații și mutări", // nieuw, nalezen
    'l.faults': "Raportarea unei defecțiuni", // nieuw, nalezen
    'w.melding': "sesizarea (spui că ceva nu e în regulă)", // nieuw, nalezen
    'w.lekkage': "scurgerea (iese apă)", // nieuw, nalezen
    'w.verwarming': "încălzirea", // nieuw, nalezen
    'w.airco': "aerul condiționat", // nieuw, nalezen
    'w.afvoer': "scurgerea, canalul de scurgere", // nieuw, nalezen
    'w.verstopt': "înfundat (nu mai trece nimic)", // nieuw, nalezen
    's.faults.1': "Raportez defecțiunea.", // nieuw, nalezen
    's.faults.2': "E o scurgere de apă în bucătărie.", // nieuw, nalezen
    's.faults.3': "Scurgerea de la toaletă e înfundată.", // nieuw, nalezen
    'c.faults.q': "De ce e așa de frig aici?", // nieuw, nalezen
    'c.faults.a': "Încălzirea e stricată. Tehnicianul vine mâine.", // nieuw, nalezen
    'c.faults': "Raportează, nu repara pe cont propriu", // nieuw, nalezen
    'c.faults.b': "Vezi ceva stricat, de exemplu o scurgere, o lampă care nu merge sau o ușă care nu se închide? Raportează, chiar dacă e ceva mic: în sistem sau la șef. Spune unde e, ce vezi și de când. Nu repara tu curentul, gazul sau încălzirea. Simți miros de gaz? Nu folosi un întrerupător sau un telefon în apropiere, deschide ferestrele, scoate oamenii afară și cere ajutor de afară. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.faults.p': "Vreau să raportez o defecțiune.", // nieuw, nalezen
    'c.faults.s': "Pe hol picură apă din tavan. Ce faci?", // nieuw, nalezen
    'c.faults.o1': "Raportezi și pui o găleată dedesubt.", // nieuw, nalezen
    'c.faults.o2': "Aștepți: poate se oprește de la sine.", // nieuw, nalezen
    'c.faults.o3': "Deschizi tavanul ca să te uiți.", // nieuw, nalezen
    'c.faults.w': "O scurgere mică poate face o pagubă mare. O găleată ține podeaua uscată, ca să nu alunece nimeni.", // nieuw, nalezen
    'l.repairs': "Reparații mici", // nieuw, nalezen
    'w.vervangen': "a înlocui (a pune unul nou)", // nieuw, nalezen
    'w.deurklink': "clanța", // nieuw, nalezen
    'w.scharnier': "balamaua", // nieuw, nalezen
    'w.gereedschapskist': "trusa de scule", // nieuw, nalezen
    'w.rookmelder': "detectorul de fum", // nieuw, nalezen
    'w.batterij': "bateria", // nieuw, nalezen
    's.repairs.1': "Înlocuiește becul de pe hol.", // nieuw, nalezen
    's.repairs.2': "Clanța s-a slăbit.", // nieuw, nalezen
    's.repairs.3': "Ia scărița, nu un scaun.", // nieuw, nalezen
    'c.repairs.q': "Piuie detectorul de fum?", // nieuw, nalezen
    'c.repairs.a': "Da, bateria e aproape descărcată.", // nieuw, nalezen
    'c.repairs': "O scăriță, niciodată un scaun", // nieuw, nalezen
    'c.repairs.b': "Pentru un bec sau un raft înalt, folosește o scăriță, niciodată un scaun, o masă sau o cutie. Pune-o pe o podea dreaptă, deschide-o complet și nu sta pe ultima treaptă. Stinge lumina înainte să schimbi un bec și lasă becul vechi să se răcească. Fă doar reparațiile pe care le-ai învățat. Pune sculele înapoi în trusă când termini, ca să nu se împiedice nimeni de ele. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.repairs.p': "Aduc scărița.", // nieuw, nalezen
    'c.repairs.s': "Un bec din birou e stricat. Scărița e la alt etaj. Ce faci?", // nieuw, nalezen
    'c.repairs.o1': "Aduci scărița.", // nieuw, nalezen
    'c.repairs.o2': "Te urci pe un scaun de birou.", // nieuw, nalezen
    'c.repairs.o3': "Te urci pe birou.", // nieuw, nalezen
    'c.repairs.w': "Un scaun se poate rostogoli sau răsturna. O cădere de pe un scaun te poate răni grav.", // nieuw, nalezen
    'l.moving': "Mutarea unui loc de muncă", // nieuw, nalezen
    'w.verhuisdoos': "cutia de mutare", // nieuw, nalezen
    'w.bureau': "biroul (masa de lucru)", // nieuw, nalezen
    'w.bureaustoel': "scaunul de birou", // nieuw, nalezen
    'w.werkplek': "locul de muncă (biroul unde lucrează cineva)", // nieuw, nalezen
    'w.kamernummer': "numărul camerei", // nieuw, nalezen
    'w.plattegrond': "planul clădirii (o hartă a clădirii)", // nieuw, nalezen
    's.moving.1': "Scrie numărul camerei pe fiecare cutie.", // nieuw, nalezen
    's.moving.2': "Pune cutiile pe căruciorul cu două roți.", // nieuw, nalezen
    's.moving.3': "Golește locul de muncă.", // nieuw, nalezen
    'c.moving.q': "Unde trebuie dus biroul ăsta?", // nieuw, nalezen
    'c.moving.a': "În camera doisprezece. Uită-te pe planul clădirii.", // nieuw, nalezen
    'c.moving': "Mutarea: ridică inteligent, etichetează tot", // nieuw, nalezen
    'c.moving.b': "Mutarea e muncă grea. Nu umple o cutie prea tare: cărțile și dosarele sunt grele. Ridică cu genunchii îndoiți și spatele drept, aproape de corp. Folosește căruciorul cu două roți pentru mai multe cutii și ridicați un birou împreună. Scrie numărul camerei noi pe fiecare cutie, scaun și calculator. Întâi scoate cablurile din priză. Nu pune niciodată cutii pe un hol sau în fața unei ieșiri de urgență.", // nieuw, nalezen
    'c.moving.p': "Mă poți ajuta să ridic asta?", // nieuw, nalezen
    'c.moving.s': "Trebuie să muți un birou greu. Colegul tău e în pauză. Ce faci?", // nieuw, nalezen
    'c.moving.o1': "Aștepți ajutor și îl ridicați împreună.", // nieuw, nalezen
    'c.moving.o2': "Îl târăști fără ajutor.", // nieuw, nalezen
    'c.moving.o3': "Îl ridici fără ajutor, cu foarte mare grijă.", // nieuw, nalezen
    'c.moving.w': "Un birou greu îți poate face rău la spate când îl ridici fără ajutor. Împreună e ușor și sigur.", // nieuw, nalezen
    'l.closing': "Deschiderea și închiderea clădirii", // nieuw, nalezen
    'w.sleutelbos': "legătura de chei", // nieuw, nalezen
    'w.afsluiten': "a încuia", // nieuw, nalezen
    'w.ronde': "runda (un tur pe la fiecare cameră)", // nieuw, nalezen
    'w.raam': "fereastra", // nieuw, nalezen
    'w.alarmcode': "codul de alarmă", // nieuw, nalezen
    'w.nachtslot': "încuietoarea de noapte (încuietoarea în plus pentru noapte)", // nieuw, nalezen
    's.closing.1': "Fac ultima rundă prin clădire.", // nieuw, nalezen
    's.closing.2': "Sunt închise toate ferestrele?", // nieuw, nalezen
    's.closing.3': "Încuie ușa cu încuietoarea de noapte.", // nieuw, nalezen
    'c.closing.q': "Mai e cineva înăuntru?", // nieuw, nalezen
    'c.closing.a': "Nu, au plecat toți. Încui.", // nieuw, nalezen
    'c.closing': "Codul de alarmă e secret", // nieuw, nalezen
    'c.closing.b': "La sfârșitul zilei faci ultima rundă. Verifică să nu mai fie nimeni înăuntru, ferestrele să fie închise și luminile stinse. Ieșirile de urgență rămân libere. Ține cheile la tine, niciodată într-un sertar. Codul de alarmă e secret: nu-l da niciodată nimănui, nici la telefon. Pornește alarma? Urmează pașii firmei tale. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.closing.p': "Nu dau codul de alarmă.", // nieuw, nalezen
    'c.closing.s': "Te sună cineva: „Sunt de la firma de alarme. Care e codul?” Ce faci?", // nieuw, nalezen
    'c.closing.o1': "Spui nu și îi spui șefului.", // nieuw, nalezen
    'c.closing.o2': "Dai codul: pare de treabă.", // nieuw, nalezen
    'c.closing.o3': "Dai doar jumătate din cod.", // nieuw, nalezen
    'c.closing.w': "O firmă de alarme adevărată nu-ți cere codul la telefon. Un hoț ar putea să ți-l ceară.", // nieuw, nalezen
    'u.guarding': "Runde și acces", // nieuw, nalezen
    'l.patrol': "Runda", // nieuw, nalezen
    'w.surveilleren': "a patrula (a merge prin jur și a supraveghea)", // nieuw, nalezen
    'w.zaklamp': "lanterna", // nieuw, nalezen
    'w.terrein': "terenul (pământul din jurul unei clădiri)", // nieuw, nalezen
    'w.hek': "gardul, poarta", // nieuw, nalezen
    'w.inbraak': "spargerea (cineva intră ca să fure)", // nieuw, nalezen
    'w.openstaan': "a fi deschis (o ușă sau o fereastră care ar trebui să fie închisă)", // nieuw, nalezen
    's.patrol.1': "Fac o rundă la fiecare două ore.", // nieuw, nalezen
    's.patrol.2': "Poarta din spatele halei e deschisă.", // nieuw, nalezen
    's.patrol.3': "Ia-ți lanterna cu tine.", // nieuw, nalezen
    'c.patrol.q': "Ai văzut ceva în timpul rundei?", // nieuw, nalezen
    'c.patrol.a': "Da. Era o fereastră deschisă lângă ușa din spate.", // nieuw, nalezen
    'c.patrol': { m: "Uită-te și raportează, nu face pe eroul", f: "Uită-te și raportează, nu face pe eroina", x: "Uită-te și raportează, nu te pune în pericol" }, // nieuw, nalezen
    'c.patrol.b': { m: "În rundă te uiți: sunt ușile și ferestrele închise, e gardul întreg, e cineva care n-ar trebui să fie acolo? Notează ce vezi, cu ora. Vezi ceva ciudat, de exemplu o fereastră spartă sau o persoană noaptea? Nu intra singur. Sună dispeceratul sau poliția prin stație sau la telefon și așteaptă într-un loc sigur. Siguranța ta e pe primul loc. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", f: "În rundă te uiți: sunt ușile și ferestrele închise, e gardul întreg, e cineva care n-ar trebui să fie acolo? Notează ce vezi, cu ora. Vezi ceva ciudat, de exemplu o fereastră spartă sau o persoană noaptea? Nu intra singură. Sună dispeceratul sau poliția prin stație sau la telefon și așteaptă într-un loc sigur. Siguranța ta e pe primul loc. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", x: "În rundă te uiți: sunt ușile și ferestrele închise, e gardul întreg, e cineva care n-ar trebui să fie acolo? Notează ce vezi, cu ora. Vezi ceva ciudat, de exemplu o fereastră spartă sau o persoană noaptea? Nu intra fără un coleg. Sună dispeceratul sau poliția prin stație sau la telefon și așteaptă într-un loc sigur. Siguranța ta e pe primul loc. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi." }, // nieuw, nalezen
    'c.patrol.p': "Văd pe cineva lângă gard.", // nieuw, nalezen
    'c.patrol.s': "Noaptea vezi o ușă forțată. Auzi zgomot înăuntru. Ce faci?", // nieuw, nalezen
    'c.patrol.o1': "Rămâi afară și chemi ajutor.", // nieuw, nalezen
    'c.patrol.o2': "Intri repede și te uiți.", // nieuw, nalezen
    'c.patrol.o3': "Strigi înăuntru că vii.", // nieuw, nalezen
    'c.patrol.w': "Un hoț dinăuntru poate fi periculos. Poliția știe ce să facă; treaba ta e să vezi și să raportezi.", // nieuw, nalezen
    'l.access': "Controlul accesului", // nieuw, nalezen
    'w.slagboom': "bariera (o bară peste drum care se ridică)", // nieuw, nalezen
    'w.toegangspas': "cardul de acces (un card care deschide ușa)", // nieuw, nalezen
    'w.legitimatie': "actul de identitate (un pașaport sau o carte de identitate)", // nieuw, nalezen
    'w.draaihek': "turnichetul (o poartă care se învârte, pentru câte o persoană)", // nieuw, nalezen
    'w.kenteken': "numărul de înmatriculare (literele și cifrele unei mașini)", // nieuw, nalezen
    'w.toegang': "accesul (ai voie să intri)", // nieuw, nalezen
    's.access.1': "Pot să văd actul dumneavoastră de identitate?", // nieuw, nalezen
    's.access.2': "Cardul dumneavoastră nu merge. Dau un telefon.", // nieuw, nalezen
    's.access.3': "Ridic bariera.", // nieuw, nalezen
    'c.access.q': "Pot să intru puțin? Mi-am uitat cardul.", // nieuw, nalezen
    'c.access.a': "Îmi pare rău, fără card nu aveți voie să intrați.", // nieuw, nalezen
    'c.access': "Fără card, fără intrare", // nieuw, nalezen
    'c.access.b': "La poartă sau la recepție verifici cine intră. Toată lumea are nevoie de un card sau trebuie să fie pe listă. Vorbește prietenos, chiar și când cineva e furios sau grăbit. Nu face excepții pentru că cineva spune că e șeful: verifică. Nu-ți împrumuta niciodată cardul nimănui și nu lăsa niciodată pe cineva să intre după tine. Un card pierdut trebuie raportat imediat. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.access.p': "Pot să vă văd cardul?", // nieuw, nalezen
    'c.access.s': "Un bărbat la costum zice: „Sunt noul director. Încă n-am card.” Ce faci?", // nieuw, nalezen
    'c.access.o1': "Verifici, înainte să-l lași să intre.", // nieuw, nalezen
    'c.access.o2': "Îl lași să intre: pare important.", // nieuw, nalezen
    'c.access.o3': "Îi dai cardul tău.", // nieuw, nalezen
    'c.access.w': "Oricine poate spune că e directorul. O verificare rapidă ține clădirea în siguranță, iar un director adevărat va înțelege.", // nieuw, nalezen
    'l.cameras': "Camerele și dispeceratul", // nieuw, nalezen
    'w.meldkamer': "dispeceratul (unde oamenii se uită la camere și răspund la apeluri)", // nieuw, nalezen
    'w.beeldscherm': "monitorul, ecranul", // nieuw, nalezen
    'w.camerabeelden': "înregistrările video (ce a filmat camera)", // nieuw, nalezen
    'w.inzoomen': "a mări imaginea (zoom)", // nieuw, nalezen
    'w.bewegingsmelder': "senzorul de mișcare (vede când se mișcă ceva)", // nieuw, nalezen
    'w.verdachte': "suspectul", // nieuw, nalezen
    's.cameras.1': "Pe camera trei văd pe cineva lângă gard.", // nieuw, nalezen
    's.cameras.2': "Măresc imaginea.", // nieuw, nalezen
    's.cameras.3': "Dispeceratul sună la poliție.", // nieuw, nalezen
    'c.cameras.q': "Ce vezi pe ecran?", // nieuw, nalezen
    'c.cameras.a': "Un bărbat lângă gard. Trimit un coleg.", // nieuw, nalezen
    'c.cameras': "Înregistrările video sunt private", // nieuw, nalezen
    'c.cameras.b': "Camerele filmează oameni: angajați, vizitatori și trecători. Ce vezi pe ecrane e privat. Uită-te doar pentru muncă și nu filma niciodată ecranul cu telefonul. Nu trimite niciodată înregistrări prietenilor și nu le pune pe internet. A avut loc un incident? Notează camera și ora și spune-i șefului. Doar firma ta decide cine primește înregistrările, de exemplu poliția. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.cameras.p': "Nu am voie să arăt asta.", // nieuw, nalezen
    'c.cameras.s': "Un coleg îți cere să-i trimiți un clip amuzant de pe camere. Ce faci?", // nieuw, nalezen
    'c.cameras.o1': "Spui nu: înregistrările sunt private.", // nieuw, nalezen
    'c.cameras.o2': "Îl trimiți, doar lui.", // nieuw, nalezen
    'c.cameras.o3': "Filmezi ecranul cu telefonul.", // nieuw, nalezen
    'c.cameras.w': "Oamenii din înregistrări nu au fost de acord să fie distribuiți. Dacă le trimiți, îți poți pierde locul de muncă.", // nieuw, nalezen
    'l.report': "Stația și raportul", // nieuw, nalezen
    'w.portofoon': "stația radio, walkie-talkie-ul", // nieuw, nalezen
    'w.rapport': "raportul (ce s-a întâmplat, în scris)", // nieuw, nalezen
    'w.incident': "incidentul (ceva care a mers prost)", // nieuw, nalezen
    'w.tijdstip': "ora (când s-a întâmplat ceva)", // nieuw, nalezen
    'w.logboek': "registrul (o carte sau o aplicație unde notezi tot)", // nieuw, nalezen
    'w.oproepen': "a chema (prin stație)", // nieuw, nalezen
    's.report.1': "Scriu un raport despre incident.", // nieuw, nalezen
    's.report.2': "Cât era ceasul exact?", // nieuw, nalezen
    's.report.3': "Nu te aud bine. Mai spune o dată.", // nieuw, nalezen
    'c.report.q': "Ce trebuie să scrie în raport?", // nieuw, nalezen
    'c.report.a': "Ce s-a întâmplat, unde și la ce oră.", // nieuw, nalezen
    'c.report': "Notează imediat", // nieuw, nalezen
    'c.report.b': "Scrie un raport imediat după un incident, cât timp îți amintești încă bine. Scrie ce ai văzut și ai auzit tu: ce s-a întâmplat, unde, la ce oră și cine era acolo. Scrie fapte, nu ce crezi. La stație, vorbește scurt și clar și așteaptă până termină celălalt. Spune cine ești și unde ești. Un raport bun ajută poliția, firma ta și pe tine.", // nieuw, nalezen
    'c.report.p': "Notez imediat.", // nieuw, nalezen
    'c.report.s': { m: "După o noapte aglomerată ești foarte obosit. A fost un incident mic. Ce faci?", f: "După o noapte aglomerată ești foarte obosită. A fost un incident mic. Ce faci?", x: "După o noapte aglomerată abia te mai ții pe picioare de oboseală. A fost un incident mic. Ce faci?" }, // nieuw, nalezen
    'c.report.o1': "Scrii raportul înainte să pleci acasă.", // nieuw, nalezen
    'c.report.o2': "Îl scrii mâine, după ce dormi bine.", // nieuw, nalezen
    'c.report.o3': "Nu-l mai scrii: a fost doar ceva mic.", // nieuw, nalezen
    'c.report.w': "Mâine uiți detalii. Un raport fără oră sau loc nu ajută pe nimeni.", // nieuw, nalezen
    'u.incidents': "Urgențe și magazinul", // nieuw, nalezen
    'l.evacuation': "Incendiu și evacuare", // nieuw, nalezen
    'w.brandmelder': "butonul de alarmă de incendiu (o cutie roșie pe care apeși când e un incendiu)", // nieuw, nalezen
    'w.brandweer': "pompierii", // nieuw, nalezen
    'w.branddeur': "ușa antifoc (oprește focul și fumul)", // nieuw, nalezen
    'w.brandmeldcentrale': "centrala de alarmă de incendiu (arată unde e alarma)", // nieuw, nalezen
    'w.ontruimingsplan': "planul de evacuare (cine ce face când toată lumea trebuie să iasă)", // nieuw, nalezen
    'w.sirene': "sirena", // nieuw, nalezen
    's.evacuation.1': "E alarmă de incendiu în hala doi.", // nieuw, nalezen
    's.evacuation.2': "Ține ușile antifoc închise.", // nieuw, nalezen
    's.evacuation.3': "Aștept pompierii la intrare.", // nieuw, nalezen
    'c.evacuation.q': "Sunt toți afară?", // nieuw, nalezen
    'c.evacuation.a': "Nu, mai lipsesc doi oameni de pe listă.", // nieuw, nalezen
    'c.evacuation': "Incendiu: întâi alarma, apoi afară", // nieuw, nalezen
    'c.evacuation.b': "Vezi foc sau fum? Apasă butonul de alarmă de incendiu sau sună la 112. Apoi ajută oamenii să iasă pe traseele de evacuare, niciodată cu liftul. Închide ușile în urma ta, dar nu le încuia. Stinge un incendiu doar când e mic și ai învățat cum. Mergi la punctul de adunare și numără cine e acolo. Întâmpină pompierii la intrare și spune-le ce știi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.evacuation.p': "Toată lumea afară, la punctul de adunare.", // nieuw, nalezen
    'c.evacuation.s': "Sună alarma de incendiu. Un bărbat vrea să ia liftul. Ce faci?", // nieuw, nalezen
    'c.evacuation.o1': "Îl trimiți la scări.", // nieuw, nalezen
    'c.evacuation.o2': "Îl lași: liftul e mai rapid.", // nieuw, nalezen
    'c.evacuation.o3': "Mergi cu el cu liftul.", // nieuw, nalezen
    'c.evacuation.w': "La un incendiu, liftul se poate opri sau se poate umple de fum. Scările sunt calea sigură de ieșire.", // nieuw, nalezen
    'l.firstaid': "Primul ajutor și 112", // nieuw, nalezen
    'w.ehbo': "primul ajutor", // nieuw, nalezen
    'w.aed': "defibrilatorul (AED, un aparat care ajută o inimă care s-a oprit)", // nieuw, nalezen
    'w.reanimeren': "a face resuscitare (a apăsa pe piept ca să salvezi o viață)", // nieuw, nalezen
    'w.bewusteloos': "inconștient (persoana nu se trezește)", // nieuw, nalezen
    'w.ademen': "a respira", // nieuw, nalezen
    'w.alarmnummer': "numărul de urgență (112)", // nieuw, nalezen
    's.firstaid.1': "Sună la 112. Cere o ambulanță.", // nieuw, nalezen
    's.firstaid.2': "Adu defibrilatorul de la recepție.", // nieuw, nalezen
    's.firstaid.3': "Nu respiră. Încep resuscitarea.", // nieuw, nalezen
    'c.firstaid.q': "Unde e defibrilatorul?", // nieuw, nalezen
    'c.firstaid.a': "La intrare, lângă lift.", // nieuw, nalezen
    'c.firstaid': "Sună la 112, începe resuscitarea, adu defibrilatorul", // nieuw, nalezen
    'c.firstaid.b': "Cineva cade și nu reacționează? Sună imediat la 112 sau roagă pe altcineva să sune. Verifică dacă persoana respiră normal. Dacă nu: începe resuscitarea și roagă pe cineva să aducă defibrilatorul. Defibrilatorul vorbește și îți spune ce să faci; nu poți greși. Continuă până preia ambulanța. Ai făcut un curs de prim ajutor? Spune-le colegilor, ca să știe pe cine să cheme.", // nieuw, nalezen
    'c.firstaid.p': "Sună la 112 și adu defibrilatorul.", // nieuw, nalezen
    'c.firstaid.s': "Un bărbat cade în hol. Nu se mișcă și nu respiră. Ce faci?", // nieuw, nalezen
    'c.firstaid.o1': "Suni la 112 și începi resuscitarea.", // nieuw, nalezen
    'c.firstaid.o2': "Aștepți să vezi dacă se trezește.", // nieuw, nalezen
    'c.firstaid.o3': "Îl ridici și îl pui pe un scaun.", // nieuw, nalezen
    'c.firstaid.w': "Când se oprește inima, fiecare minut contează. Resuscitarea și un defibrilator pot salva o viață înainte să vină ambulanța.", // nieuw, nalezen
    'l.shoplifting': "Furtul din magazin", // nieuw, nalezen
    'w.winkeldiefstal': "furtul din magazin", // nieuw, nalezen
    'w.heterdaad': "în flagrant (vezi cum se întâmplă)", // nieuw, nalezen
    'w.aanhouden': "a reține (pe cineva, până vine poliția)", // nieuw, nalezen
    'w.detectiepoortje': "poarta antifurt (piuie la ușă)", // nieuw, nalezen
    'w.alarmlabel': "eticheta antifurt (face poarta să piuie)", // nieuw, nalezen
    'w.verstoppen': "a ascunde", // nieuw, nalezen
    's.shoplifting.1': "Poarta antifurt piuie la ieșire.", // nieuw, nalezen
    's.shoplifting.2': "L-am văzut în flagrant.", // nieuw, nalezen
    's.shoplifting.3': "Îl rețin până vine poliția.", // nieuw, nalezen
    'c.shoplifting.q': "Am voie să-i caut în geantă?", // nieuw, nalezen
    'c.shoplifting.a': "Nu. Asta face poliția.", // nieuw, nalezen
    'c.shoplifting': "Furtul din magazin: urmărește, raportează, fără forță brutală", // nieuw, nalezen
    'c.shoplifting.b': "Ai văzut pe cineva furând? Păstrează-ți calmul și sună imediat la poliție. Unele magazine îi permit unui agent de pază să rețină un hoț până vine poliția; altele spun: doar urmărește, raportează și ține minte cum arată persoana. Nu lovi niciodată cu mâna sau cu piciorul și nu ține niciodată pe cineva de gât. Nu percheziționa niciodată o persoană, buzunarele sau geanta ei: asta face poliția. Notează ce ai văzut și păstrează înregistrările video. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.shoplifting.p': "Vă rog să veniți cu mine.", // nieuw, nalezen
    'c.shoplifting.s': "Ai văzut o femeie care pune o sticlă în geantă. Iese afară. Ce faci?", // nieuw, nalezen
    'c.shoplifting.o1': "O oprești calm și suni la poliție.", // nieuw, nalezen
    'c.shoplifting.o2': "Îi cauți repede în geantă la ușă.", // nieuw, nalezen
    'c.shoplifting.o3': "O împingi tare la pământ.", // nieuw, nalezen
    'c.shoplifting.w': "Percheziția unei persoane e treaba poliției, iar forța brutală poate răni pe cineva și îți poate aduce probleme.", // nieuw, nalezen
    'l.aggression': "Oameni dificili", // nieuw, nalezen
    'w.agressie': "agresivitatea (comportament furios, violent)", // nieuw, nalezen
    'w.schelden': "a înjura pe cineva", // nieuw, nalezen
    'w.kalmeren': "a se calma", // nieuw, nalezen
    'w.afstand': "distanța", // nieuw, nalezen
    'w.huisverbod': "interdicția de acces (nu mai ai voie să intri aici)", // nieuw, nalezen
    'w.bodycam': "camera de corp (o cameră mică pe uniformă)", // nieuw, nalezen
    's.aggression.1': "Calmați-vă, domnule. Vreau să vă ajut.", // nieuw, nalezen
    's.aggression.2': "Păstrează distanța și calmul.", // nieuw, nalezen
    's.aggression.3': "Aveți interdicție de acces. Trebuie să plecați acum.", // nieuw, nalezen
    'c.aggression.q': "De ce nu am voie să intru?", // nieuw, nalezen
    'c.aggression.a': "Aveți interdicție de acces aici.", // nieuw, nalezen
    'c.aggression': "Păstrează-ți calmul, păstrează distanța", // nieuw, nalezen
    'c.aggression.b': "O persoană furioasă se calmează mai repede când îți păstrezi calmul. Vorbește încet și liniștit și spune-i persoanei „u” (dumneavoastră). Ține între voi o distanță de cel puțin o lungime de braț și păstrează o cale de ieșire în spatele tău. Nu atinge persoana și nu striga înapoi. Devine periculos? Fă un pas înapoi și cheamă un coleg sau poliția. Notează după aceea ce s-a întâmplat. După un incident grav, vorbește cu cineva despre asta. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.aggression.p': "Calmați-vă. Vreau să vă ajut.", // nieuw, nalezen
    'c.aggression.s': "Un bărbat țipă la tine și vine foarte aproape. Ce faci?", // nieuw, nalezen
    'c.aggression.o1': "Faci un pas înapoi și vorbești calm.", // nieuw, nalezen
    'c.aggression.o2': "Strigi înapoi, mai tare decât el.", // nieuw, nalezen
    'c.aggression.o3': "Îl împingi de lângă tine.", // nieuw, nalezen
    'c.aggression.w': "Vorbele calme și spațiul liniștesc situația. Țipetele sau îmbrâncelile o înrăutățesc.", // nieuw, nalezen
    'u.foodhygiene': "Igienă și frig", // nieuw, nalezen
    'l.hygienelock': "Filtrul sanitar", // nieuw, nalezen
    'w.hygienesluis': "filtrul sanitar (camera unde te cureți înainte să intri)", // nieuw, nalezen
    'w.baardnetje': "plasa pentru barbă", // nieuw, nalezen
    'w.laarzenwasser': "mașina de spălat cizme (perii care îți curăță cizmele)", // nieuw, nalezen
    'w.desinfecteren': "a dezinfecta (a omorî microbii)", // nieuw, nalezen
    'w.werkjas': "halatul de lucru", // nieuw, nalezen
    'w.bacterie': "microbul, bacteria", // nieuw, nalezen
    's.hygienelock.1': "Spală-te pe mâini și dezinfectează-le.", // nieuw, nalezen
    's.hygienelock.2': "Pune-ți boneta și plasa pentru barbă.", // nieuw, nalezen
    's.hygienelock.3': "Treci prin mașina de spălat cizme.", // nieuw, nalezen
    'c.hygienelock.q': "Pot să-mi țin ceasul pe mână?", // nieuw, nalezen
    'c.hygienelock.a': "Nu, toate bijuteriile se scot.", // nieuw, nalezen
    'c.hygienelock': "Curățenie la intrare, de fiecare dată", // nieuw, nalezen
    'c.hygienelock.b': "Într-o fabrică de alimente, tu ești cel mai mare pericol pentru mâncare: microbii vin de pe mâinile, părul și hainele tale. Așa că treci prin filtrul sanitar de fiecare dată când intri, și după o pauză sau după toaletă. Boneta pe cap, plasa pentru barbă dacă ai barbă, haine de lucru curate, toate bijuteriile jos. Spală-te pe mâini cu săpun, șterge-le și dezinfectează-le. Te-ai îmbolnăvit, ai diaree sau vărsături? Spune-i șefului înainte să începi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.hygienelock.p': "Am diaree. Am voie să lucrez azi?", // nieuw, nalezen
    'c.hygienelock.s': "Te întorci de la toaletă. Colegul tău zice: „Sari peste filtru, suntem ocupați.” Ce faci?", // nieuw, nalezen
    'c.hygienelock.o1': "Treci totuși prin filtru.", // nieuw, nalezen
    'c.hygienelock.o2': "Sari peste el, doar de data asta.", // nieuw, nalezen
    'c.hygienelock.o3': "Doar îți pui mănuși noi.", // nieuw, nalezen
    'c.hygienelock.w': "Microbii de la toaletă pot îmbolnăvi mulți clienți. Câteva minute în filtru împiedică asta.", // nieuw, nalezen
    'l.allergens': "Alergeni", // nieuw, nalezen
    'w.allergeen': "alergenul (mâncare care îi îmbolnăvește foarte tare pe unii oameni)", // nieuw, nalezen
    'w.noten': "nucile, fructele cu coajă", // nieuw, nalezen
    'w.pinda': "alunele de pământ, arahidele", // nieuw, nalezen
    'w.gluten': "glutenul (în grâu, deci în pâine și prăjituri)", // nieuw, nalezen
    'w.sesam': "susanul (semințe mici, de exemplu pe pâine)", // nieuw, nalezen
    'w.kruisbesmetting': "contaminarea încrucișată (ceva ajunge în mâncare unde nu trebuie)", // nieuw, nalezen
    's.allergens.1': "Produsul ăsta conține nuci.", // nieuw, nalezen
    's.allergens.2': "Uită-te pe etichetă ce alergeni conține.", // nieuw, nalezen
    's.allergens.3': "Curăță totul bine după arahide.", // nieuw, nalezen
    'c.allergens.q': "Caserola asta poate sta cu celelalte?", // nieuw, nalezen
    'c.allergens.a': "Nu, are nuci în ea.", // nieuw, nalezen
    'c.allergens': "O urmă e de ajuns", // nieuw, nalezen
    'c.allergens.b': "Pentru unii oameni, o bucățică foarte mică de nucă, arahidă, lapte, ou, gluten sau susan le poate pune viața în pericol. De aceea eticheta trebuie să spună exact ce e într-un produs. Ține alergenii separat: caserole, unelte și culori doar pentru ei. După un produs cu un alergen, linia se curăță înainte de următorul produs. Nu schimba niciodată un ingredient cu altul, nici când arată la fel. Ai îndoieli? Întreabă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.allergens.p': "Are nuci în el?", // nieuw, nalezen
    'c.allergens.s': "S-au terminat migdalele. Un coleg zice: „Folosește alune de pădure, nu observă nimeni.” Ce faci?", // nieuw, nalezen
    'c.allergens.o1': "Spui nu și îi spui șefului.", // nieuw, nalezen
    'c.allergens.o2': "Le folosești: nuci sunt nuci.", // nieuw, nalezen
    'c.allergens.o3': "Le folosești și nu schimbi nimic pe etichetă.", // nieuw, nalezen
    'c.allergens.w': "Eticheta trebuie să spună ce e înăuntru. O nucă greșită poate îmbolnăvi foarte tare pe cineva cu alergie.", // nieuw, nalezen
    'l.coldroom': "Camera frigorifică și congelatorul", // nieuw, nalezen
    'w.temperatuur': "temperatura", // nieuw, nalezen
    'w.graden': "gradele (°C)", // nieuw, nalezen
    'w.bevroren': "congelat, înghețat", // nieuw, nalezen
    'w.ontdooien': "a decongela, a dezgheța", // nieuw, nalezen
    'w.koelketen': "lanțul de frig (mâncarea rămâne rece tot drumul)", // nieuw, nalezen
    'w.thermokleding': "hainele termice (haine călduroase pentru frig)", // nieuw, nalezen
    's.coldroom.1': "În camera de congelare sunt minus optsprezece grade.", // nieuw, nalezen
    's.coldroom.2': "Pune carnea imediat în camera frigorifică.", // nieuw, nalezen
    's.coldroom.3': "Scrie temperatura pe listă.", // nieuw, nalezen
    'c.coldroom.q': "De ce piuie camera frigorifică?", // nieuw, nalezen
    'c.coldroom.a': "Ușa e deschisă. Închide-o repede.", // nieuw, nalezen
    'c.coldroom': "Munca la frig: îmbracă-te gros, ține totul rece", // nieuw, nalezen
    'c.coldroom.b': "Mâncarea trebuie să rămână rece tot drumul: de la camion la camera frigorifică și până la magazin. Așa că pune imediat produsele reci la locul lor și ține închise ușile camerei frigorifice și ale congelatorului. Verifică temperatura și noteaz-o. În congelator, poartă hainele termice, mănuși și o căciulă și ia la timp o pauză la cald. Asigură-te că poți deschide mereu ușa din interior. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.coldroom.p': "E prea cald aici. Răcirea nu merge.", // nieuw, nalezen
    'c.coldroom.s': "Termometrul camerei frigorifice arată un număr mult mai mare decât de obicei. Ce faci?", // nieuw, nalezen
    'c.coldroom.o1': "Îi spui imediat șefului.", // nieuw, nalezen
    'c.coldroom.o2': "Aștepți: se răcește din nou.", // nieuw, nalezen
    'c.coldroom.o3': "Scrii numărul normal pe listă.", // nieuw, nalezen
    'c.coldroom.w': "Prea cald înseamnă că microbii se înmulțesc. Șeful decide dacă mâncarea mai e sigură.", // nieuw, nalezen
    'l.foreignbody': "Sticlă, metal și plastic în mâncare", // nieuw, nalezen
    'w.metaaldetector': "detectorul de metale", // nieuw, nalezen
    'w.glasbreuk': "spargerea de sticlă (sticlă care s-a spart)", // nieuw, nalezen
    'w.splinter': "așchia (o bucățică ascuțită)", // nieuw, nalezen
    'w.vreemdvoorwerp': "corpul străin (ceva în mâncare care nu are ce căuta acolo)", // nieuw, nalezen
    'w.vervuild': "contaminat (a intrat ceva murdar)", // nieuw, nalezen
    'w.ploegleider': "șeful de tură", // nieuw, nalezen
    's.foreignbody.1': "Detectorul de metale piuie. Oprește banda.", // nieuw, nalezen
    's.foreignbody.2': "S-a spart sticlă la linia doi.", // nieuw, nalezen
    's.foreignbody.3': "Pune produsul în lada de rebuturi.", // nieuw, nalezen
    'c.foreignbody.q': "Ce fac cu bucățica asta de plastic?", // nieuw, nalezen
    'c.foreignbody.a': "Arat-o șefului de tură.", // nieuw, nalezen
    'c.foreignbody': "Ceva în mâncare? Oprește-te și raportează", // nieuw, nalezen
    'c.foreignbody.b': "Sticla, metalul, plasticul, un plasture sau un fir de păr nu trebuie să ajungă niciodată în mâncare. Piuie detectorul de metale sau găsești ceva ciudat? Pune produsul deoparte și spune-i șefului de tură. S-a spart sticlă? Oprește linia din apropiere: șeful de tură decide ce trebuie aruncat. Folosește doar plasturi albaștri, ca să se vadă ușor. Nu lua niciodată sticlă, pixuri sau lucruri care nu sunt prinse în zona de producție. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.foreignbody.p': "Am găsit ceva în produs.", // nieuw, nalezen
    'c.foreignbody.s': "O lampă de sticlă se sparge deasupra liniei. Produsele merg mai departe pe bandă. Ce faci?", // nieuw, nalezen
    'c.foreignbody.o1': "Oprești linia și îl chemi pe șeful de tură.", // nieuw, nalezen
    'c.foreignbody.o2': "Scoți sticla pe care o vezi.", // nieuw, nalezen
    'c.foreignbody.o3': "Continui: detectorul găsește sticla.", // nieuw, nalezen
    'c.foreignbody.w': "Un detector de metale nu găsește sticla. Bucățile mici pe care nu le vezi pot răni grav un client.", // nieuw, nalezen
    'u.foodline': "Linia de producție", // nieuw, nalezen
    'l.cutting': "Tăiat și cântărit", // nieuw, nalezen
    'w.uitbenen': "a dezosa (a scoate oasele din carne)", // nieuw, nalezen
    'w.fileren': "a fileta (a tăia peștele sau carnea în bucăți plate)", // nieuw, nalezen
    'w.portie': "porția", // nieuw, nalezen
    'w.wegen': "a cântări", // nieuw, nalezen
    'w.gewicht': "greutatea", // nieuw, nalezen
    'w.snijplank': "tocătorul (placa de tăiat)", // nieuw, nalezen
    's.cutting.1': "Cântărește fiecare porție.", // nieuw, nalezen
    's.cutting.2': "Greutatea e prea mică.", // nieuw, nalezen
    's.cutting.3': "Ascute-ți cuțitul înainte să începi.", // nieuw, nalezen
    'c.cutting.q': "Cât trebuie pus într-o caserolă?", // nieuw, nalezen
    'c.cutting.a': "Cinci sute de grame. Uită-te pe cântar.", // nieuw, nalezen
    'c.cutting': "Cuțit ascuțit, mână în siguranță", // nieuw, nalezen
    'c.cutting.b': "Un cuțit ascuțit e mai sigur decât unul tocit: ai nevoie de mai puțină forță, așa că alunecă mai rar. Poartă mereu mănușa anti-tăiere pe cealaltă mână. Taie în direcția opusă corpului. Pune cuțitul culcat pe tocător, niciodată într-o chiuvetă sau sub carne. Nu încerca să prinzi un cuțit care cade: fă un pas înapoi. Du cuțitul cu vârful în jos, aproape de picior. Chiar și o tăietură mică trebuie acoperită și raportată.", // nieuw, nalezen
    'c.cutting.p': "Cuțitul meu e tocit.", // nieuw, nalezen
    'c.cutting.s': "Cuțitul îți alunecă din mână și cade. Ce faci?", // nieuw, nalezen
    'c.cutting.o1': "Faci un pas înapoi și îl lași să cadă.", // nieuw, nalezen
    'c.cutting.o2': "Îl prinzi repede.", // nieuw, nalezen
    'c.cutting.o3': "Îl oprești cu piciorul.", // nieuw, nalezen
    'c.cutting.w': "Un cuțit care cade taie adânc când îl apuci. Pe jos nu poate face niciun rău.", // nieuw, nalezen
    'l.labels': "Ambalare și etichete", // nieuw, nalezen
    'w.etiketteren': "a eticheta (a pune etichete)", // nieuw, nalezen
    'w.lotnummer': "numărul de lot (un număr pentru un lot de produse)", // nieuw, nalezen
    'w.vacuum': "ambalat în vid (tot aerul e scos)", // nieuw, nalezen
    'w.schaal': "tăvița (un vas plat pentru mâncare)", // nieuw, nalezen
    'w.printer': "imprimanta", // nieuw, nalezen
    'w.omdoos': "cutia exterioară (cutia mare din jurul pachetelor mici)", // nieuw, nalezen
    's.labels.1': "Verifică dacă data de pe etichetă e corectă.", // nieuw, nalezen
    's.labels.2': "Pachetul ăsta nu e în vid. Ambalează-l din nou.", // nieuw, nalezen
    's.labels.3': "Scrie numărul de lot pe listă.", // nieuw, nalezen
    'c.labels.q': "Ce dată trebuie pusă pe el?", // nieuw, nalezen
    'c.labels.a': "Peste zece zile. Uită-te pe listă.", // nieuw, nalezen
    'c.labels': "O etichetă greșită e periculoasă", // nieuw, nalezen
    'c.labels.b': "Eticheta îi spune clientului ce e înăuntru, cât cântărește și până când e bun. O dată greșită sau o etichetă greșită poate îmbolnăvi oameni, de exemplu când lipsește un alergen. Așa că verifică primele etichete la fiecare producție nouă: produsul, data și numărul de lot. E ceva greșit? Oprește-te și spune-i șefului. Produsele cu o etichetă greșită se pun deoparte, nu se vând niciodată. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.labels.p': "Eticheta nu e corectă.", // nieuw, nalezen
    'c.labels.s': "Vezi că data de pe etichete e cu o săptămână prea târziu. Ce faci?", // nieuw, nalezen
    'c.labels.o1': "Te oprești din ambalat și îi spui șefului.", // nieuw, nalezen
    'c.labels.o2': "Continui: o săptămână nu contează.", // nieuw, nalezen
    'c.labels.o3': "Schimbi data cu pixul.", // nieuw, nalezen
    'c.labels.w': "O dată greșită poate face oamenii să mănânce mâncare care nu mai e sigură. Mai bine oprești acum decât să retragi produsele mai târziu.", // nieuw, nalezen
    'l.linecleaning': "Curățarea liniei", // nieuw, nalezen
    'w.schuim': "spuma", // nieuw, nalezen
    'w.hogedrukspuit': "aparatul de spălat cu presiune", // nieuw, nalezen
    'w.naspoelen': "a clăti (a spăla cu apă curată)", // nieuw, nalezen
    'w.demonteren': "a demonta", // nieuw, nalezen
    'w.borstel': "peria", // nieuw, nalezen
    'w.restjes': "resturile (bucățele mici de mâncare)", // nieuw, nalezen
    's.linecleaning.1': "Întâi oprește mașina.", // nieuw, nalezen
    's.linecleaning.2': "Pulverizează spuma pe bandă.", // nieuw, nalezen
    's.linecleaning.3': "Apoi clătește totul cu apă curată.", // nieuw, nalezen
    'c.linecleaning.q': "E curată banda?", // nieuw, nalezen
    'c.linecleaning.a': "Încă nu. Mai trebuie să clătesc.", // nieuw, nalezen
    'c.linecleaning': "Oprește curentul înainte să cureți", // nieuw, nalezen
    'c.linecleaning.b': "Nu curăța niciodată o mașină care merge. Oprește-o și asigură-te că nimeni nu o poate porni din nou: urmează pașii firmei tale. Poartă mănușile, ochelarii și cizmele potrivite: produsele de curățenie îți pot arde pielea și ochii. Nu amesteca niciodată produsele. Întâi scoate resturile, apoi pune spumă, freacă și clătește. Nu da cu apă pe cutii electrice sau pe prize. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.linecleaning.p': "E oprită mașina?", // nieuw, nalezen
    'c.linecleaning.s': "Niște carne s-a blocat în bandă. Mașina încă merge. Ce faci?", // nieuw, nalezen
    'c.linecleaning.o1': "Întâi o oprești, apoi scoți carnea.", // nieuw, nalezen
    'c.linecleaning.o2': "O tragi repede afară cu mâna.", // nieuw, nalezen
    'c.linecleaning.o3': "O împingi afară cu un cuțit.", // nieuw, nalezen
    'c.linecleaning.w': "O bandă care merge îți poate trage mâna înăuntru într-o secundă. Oprirea durează doar o clipă.", // nieuw, nalezen
    'l.haccp': "Verificare și notare (HACCP)", // nieuw, nalezen
    'w.controlepunt': "punctul de control (un pas unde trebuie să verifici ceva)", // nieuw, nalezen
    'w.kerntemperatuur': "temperatura la miez (temperatura din interiorul mâncării)", // nieuw, nalezen
    'w.prikthermometer': "termometrul cu sondă (îl înfigi în mâncare)", // nieuw, nalezen
    'w.afwijking': "abaterea (ceva nu e cum ar trebui)", // nieuw, nalezen
    'w.steekproef': "verificarea prin sondaj (testezi câteva produse)", // nieuw, nalezen
    'w.kwaliteitsdienst': "departamentul de calitate (QA)", // nieuw, nalezen
    's.haccp.1': "Măsoară temperatura la miez cu termometrul cu sondă.", // nieuw, nalezen
    's.haccp.2': "Scrie totul pe listă.", // nieuw, nalezen
    's.haccp.3': "E ceva în neregulă? Raportează imediat.", // nieuw, nalezen
    'c.haccp.q': "De ce trebuie să notez totul?", // nieuw, nalezen
    'c.haccp.a': "Așa știm că mâncarea e sigură.", // nieuw, nalezen
    'c.haccp': "HACCP: verifică, notează, raportează", // nieuw, nalezen
    'c.haccp.b': "Fiecare firmă de alimente lucrează cu un plan de siguranță alimentară (HACCP). Planul spune la ce pași trebuie să verifici ceva, de exemplu temperatura camerei frigorifice sau temperatura la miez a cărnii gătite. Verifici, notezi și semnezi. Scrie ce ai măsurat cu adevărat, chiar și când e greșit. Un număr greșit nu e vina ta, dar să-l ascunzi e periculos. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.haccp.p': "Temperatura e prea mare.", // nieuw, nalezen
    'c.haccp.s': "Ai uitat să măsori la ora zece. Colegul tău zice: „Scrie un număr bun și gata.” Ce faci?", // nieuw, nalezen
    'c.haccp.o1': "Măsori acum și scrii ora adevărată.", // nieuw, nalezen
    'c.haccp.o2': "Scrii un număr bun pentru ora zece.", // nieuw, nalezen
    'c.haccp.o3': "Lași rândul gol.", // nieuw, nalezen
    'c.haccp.w': "Lista trebuie să arate ce s-a întâmplat cu adevărat. Un număr inventat ascunde o problemă care poate îmbolnăvi oameni.", // nieuw, nalezen
    'u.collection': "Colectarea gunoiului", // nieuw, nalezen
    'l.binlorry': "Mașina de gunoi", // nieuw, nalezen
    'w.vuilniswagen': "mașina de gunoi, autogunoiera", // nieuw, nalezen
    'w.kliko': "pubela (un container de gunoi pe roți)", // nieuw, nalezen
    'w.kieplift': "liftul de golire (ridică pubela și o golește)", // nieuw, nalezen
    'w.treeplank': "treapta din spate (o treaptă în spatele mașinii)", // nieuw, nalezen
    'w.bijplaatsing': "gunoiul pus în plus (saci lăsați lângă container)", // nieuw, nalezen
    'w.ophaaldag': "ziua de colectare", // nieuw, nalezen
    's.binlorry.1': "Pune pubela la liftul de golire.", // nieuw, nalezen
    's.binlorry.2': "Sunt saci lângă container.", // nieuw, nalezen
    's.binlorry.3': "Pubela e prea grea. Las-o acolo.", // nieuw, nalezen
    'c.binlorry.q': "Pot să merg pe spatele mașinii?", // nieuw, nalezen
    'c.binlorry.a': "Nu, urci în cabină.", // nieuw, nalezen
    'c.binlorry': "Să te vadă toți, și mergi în cabină", // nieuw, nalezen
    'c.binlorry.b': "Poartă hainele reflectorizante la fiecare tură. Urcă și coboară pe partea trotuarului, niciodată pe partea traficului. Mergi în cabină, nu pe spatele mașinii: doar când firma ta permite clar asta, și niciodată când mașina dă înapoi sau merge repede. Stai departe de liftul de golire cât timp se mișcă. E o pubelă prea grea sau iese ceva din ea? Las-o și raportează. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.binlorry.p': "Pubela asta e prea grea.", // nieuw, nalezen
    'c.binlorry.s': "Strada următoare e foarte aproape. Șoferul zice: „Urcă pe treapta din spate.” Ce faci?", // nieuw, nalezen
    'c.binlorry.o1': "Urci totuși în cabină.", // nieuw, nalezen
    'c.binlorry.o2': "Urci pe treaptă: e aproape.", // nieuw, nalezen
    'c.binlorry.o3': "Mergi pe jos în spatele mașinii.", // nieuw, nalezen
    'c.binlorry.w': "Căderea de pe o mașină în mers e unul dintre cele mai mari pericole în munca asta. În cabină ești în siguranță.", // nieuw, nalezen
    'l.reversing': "Mersul înapoi în siguranță", // nieuw, nalezen
    'w.achteruitrijden': "a da înapoi (a merge cu spatele cu mașina)", // nieuw, nalezen
    'w.dodehoek': "unghiul mort (unde șoferul nu te poate vedea)", // nieuw, nalezen
    'w.aanwijzer': "persoana care dirijează (îl ghidează pe șofer)", // nieuw, nalezen
    'w.oogcontact': "contactul vizual", // nieuw, nalezen
    'w.piepen': "a piui", // nieuw, nalezen
    'w.cabine': "cabina (unde stă șoferul)", // nieuw, nalezen
    's.reversing.1': "Nu sta niciodată în spatele mașinii.", // nieuw, nalezen
    's.reversing.2': "Nu te văd în oglindă.", // nieuw, nalezen
    's.reversing.3': "Fă contact vizual cu șoferul.", // nieuw, nalezen
    'c.reversing.q': "Mă poți ajuta să dau înapoi?", // nieuw, nalezen
    'c.reversing.a': "Da, sunt în stânga. Uită-te în oglindă.", // nieuw, nalezen
    'c.reversing': "Niciodată în spatele unei mașini care dă înapoi", // nieuw, nalezen
    'c.reversing.b': "Multe accidente cu mașinile de gunoi se întâmplă când dau înapoi. Șoferul nu poate vedea chiar în spatele mașinii: unghiul mort. Așa că nu sta și nu merge niciodată în spatele unei mașini care ar putea da înapoi. Dirijează șoferul din lateral, unde vă puteți vedea unul pe altul în oglindă. S-a pierdut contactul vizual? Șoferul oprește. Stabiliți semne clare înainte să începeți. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.reversing.p': "Stop! Nu te mai văd.", // nieuw, nalezen
    'c.reversing.s': "Mașina dă înapoi. Treci prin spatele ei ca să iei un sac. Ce faci?", // nieuw, nalezen
    'c.reversing.o1': "Aștepți până când mașina stă pe loc.", // nieuw, nalezen
    'c.reversing.o2': "Treci repede: e doar o secundă.", // nieuw, nalezen
    'c.reversing.o3': "Îi faci semn cu mâna șoferului și treci.", // nieuw, nalezen
    'c.reversing.w': "Un șofer nu te poate vedea în spatele mașinii. O secundă e de ajuns pentru un accident.", // nieuw, nalezen
    'l.wastesorting': "Sortarea gunoiului", // nieuw, nalezen
    'w.papier': "hârtia", // nieuw, nalezen
    'w.plastic': "plasticul", // nieuw, nalezen
    'w.gft': "deșeurile biodegradabile (fructe, legume și plante)", // nieuw, nalezen
    'w.restafval': "gunoiul menajer (ce nu se poate sorta)", // nieuw, nalezen
    'w.karton': "cartonul", // nieuw, nalezen
    'w.blik': "doza, conserva", // nieuw, nalezen
    's.wastesorting.1': "Sticla se pune în containerul de sticlă.", // nieuw, nalezen
    's.wastesorting.2': "Asta merge la gunoiul menajer.", // nieuw, nalezen
    's.wastesorting.3': "Pliază cartonul, să fie plat.", // nieuw, nalezen
    'c.wastesorting.q': "Unde se pune o cutie de pizza?", // nieuw, nalezen
    'c.wastesorting.a': "La gunoiul menajer. E unsă cu grăsime.", // nieuw, nalezen
    'c.wastesorting': "O sortare bună economisește muncă", // nieuw, nalezen
    'c.wastesorting.b': "Gunoiul sortat poate fi folosit din nou: hârtia devine hârtie, sticla devine sticlă. Dar un singur lucru greșit poate strica o încărcătură întreagă. Așa că uită-te în pubelă înainte s-o golești. E ceva care nu are ce căuta acolo, de exemplu un sac cu gunoi menajer la hârtie? Las-o sau urmează regulile firmei tale. Ce gunoi unde merge diferă de la un oraș la altul: învață regulile din zona ta. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.wastesorting.p': "Asta nu are ce căuta aici.", // nieuw, nalezen
    'c.wastesorting.s': "O pubelă de hârtie e plină de saci negri de gunoi. Ce faci?", // nieuw, nalezen
    'c.wastesorting.o1': "O lași și raportezi.", // nieuw, nalezen
    'c.wastesorting.o2': "O golești la hârtie.", // nieuw, nalezen
    'c.wastesorting.o3': "Scoți sacii cu mâna.", // nieuw, nalezen
    'c.wastesorting.w': "Gunoiul din hârtie strică toată încărcătura. Sacii pot avea în ei și lucruri ascuțite sau murdare.", // nieuw, nalezen
    'l.wastesafety': "Lucruri ascuțite și ridicatul", // nieuw, nalezen
    'w.snijwond': "tăietura (o rană de la ceva ascuțit)", // nieuw, nalezen
    'w.prikken': "a înțepa (un vârf ascuțit îți intră în piele)", // nieuw, nalezen
    'w.naald': "acul", // nieuw, nalezen
    'w.scherp': "ascuțit", // nieuw, nalezen
    'w.rugpijn': "durerea de spate", // nieuw, nalezen
    'w.tetanusprik': "vaccinul antitetanos (o injecție împotriva unei boli de la murdăria dintr-o rană)", // nieuw, nalezen
    's.wastesafety.1': "Nu ține niciodată un sac de jos.", // nieuw, nalezen
    's.wastesafety.2': "Atenție, e sticlă în sacul ăsta.", // nieuw, nalezen
    's.wastesafety.3': "M-am înțepat într-un ac.", // nieuw, nalezen
    'c.wastesafety.q': "M-am tăiat. Ce trebuie să fac?", // nieuw, nalezen
    'c.wastesafety.a': "Spală bine rana. Și spune-mi.", // nieuw, nalezen
    'c.wastesafety': "Nu strânge niciodată un sac", // nieuw, nalezen
    'c.wastesafety.b': "Un sac de gunoi poate avea în el sticlă, cuțite sau ace. Așa că nu apăsa niciodată un sac pe corp, nu-l strânge niciodată și nu-l purta niciodată sprijinit de picior: ține-l de sus, departe de tine. Poartă mănușile. Ridică cu genunchii îndoiți și spatele drept și împinge pubela, nu o căra. Te-ai înțepat sau te-ai tăiat în ceva? Spală bine rana cu apă și spune-i șefului în aceeași zi.", // nieuw, nalezen
    'c.wastesafety.p': "M-am înțepat.", // nieuw, nalezen
    'c.wastesafety.s': "Un sac se rupe. Vezi un ac în el. Ce faci?", // nieuw, nalezen
    'c.wastesafety.o1': "Nu-l atingi și raportezi.", // nieuw, nalezen
    'c.wastesafety.o2': "Îl iei cu mănușile pe mâini.", // nieuw, nalezen
    'c.wastesafety.o3': "Îl împingi înapoi în sac.", // nieuw, nalezen
    'c.wastesafety.w': "Mănușile nu opresc un ac. Un ac poate transmite o boală.", // nieuw, nalezen
    'u.recycling': "Centrul de colectare a deșeurilor", // nieuw, nalezen
    'l.yard': "La centrul de colectare", // nieuw, nalezen
    'w.milieustraat': "centrul de colectare a deșeurilor (unde oamenii aduc gunoi mare sau special)", // nieuw, nalezen
    'w.grofvuil': "deșeurile voluminoase (lucruri mari, de exemplu o canapea)", // nieuw, nalezen
    'w.puin': "molozul (pietre și cărămizi sparte)", // nieuw, nalezen
    'w.matras': "salteaua", // nieuw, nalezen
    'w.weegbrug': "cântarul pod (un cântar pentru mașini și camioane)", // nieuw, nalezen
    'w.afvalpas': "cardul de deșeuri (locuitorii îl arată la poartă)", // nieuw, nalezen
    's.yard.1': "Molozul merge în containerul patru.", // nieuw, nalezen
    's.yard.2': "Pot să văd cardul dumneavoastră de deșeuri?", // nieuw, nalezen
    's.yard.3': "Întâi treceți cu mașina peste cântarul pod.", // nieuw, nalezen
    'c.yard.q': "Unde se pune salteaua asta?", // nieuw, nalezen
    'c.yard.a': "În containerul pentru deșeuri voluminoase, în spate.", // nieuw, nalezen
    'c.yard': "Ajută, dar ține centrul în siguranță", // nieuw, nalezen
    'c.yard.b': "La centrul de colectare le spui vizitatorilor unde merge gunoiul lor și verifici dacă e sortat bine. Vorbește prietenos: mulți oameni vin doar de câteva ori pe an și nu știu regulile. Ține copiii și vizitatorii departe de mașini și de marginea containerelor înalte. Ridicați lucrurile grele împreună sau lasă vizitatorul să-și care singur lucrurile. Aduce cineva ceva ce nu cunoști? Întreabă înainte să intre în container. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.yard.p': "Asta merge în containerul patru.", // nieuw, nalezen
    'c.yard.s': "Un bărbat vrea să arunce un sac plin în containerul pentru lemn. Ce faci?", // nieuw, nalezen
    'c.yard.o1': "Întrebi ce e în sac.", // nieuw, nalezen
    'c.yard.o2': "Îl lași: e gunoiul lui.", // nieuw, nalezen
    'c.yard.o3': "Îl arunci tu pentru el.", // nieuw, nalezen
    'c.yard.w': "Un singur lucru greșit poate strica un container plin. O întrebare prietenoasă ține gunoiul curat.", // nieuw, nalezen
    'l.hazardous': "Deșeurile chimice", // nieuw, nalezen
    'w.chemischafval': "deșeurile chimice (gunoi periculos, de exemplu vopsea și ulei)", // nieuw, nalezen
    'w.spuitbus': "tubul de spray", // nieuw, nalezen
    'w.asbest': "azbestul (un material periculos din clădirile vechi)", // nieuw, nalezen
    'w.lekken': "a curge, a pierde lichid", // nieuw, nalezen
    'w.gevarensymbool': "simbolul de pericol (o imagine care avertizează că e pericol)", // nieuw, nalezen
    'w.vat': "butoiul", // nieuw, nalezen
    's.hazardous.1': "Pune vopseaua la deșeurile chimice.", // nieuw, nalezen
    's.hazardous.2': "Sticla asta curge. Ia-o cu mănuși.", // nieuw, nalezen
    's.hazardous.3': "Azbestul trebuie să fie bine ambalat.", // nieuw, nalezen
    'c.hazardous.q': "Ce e în sticla asta?", // nieuw, nalezen
    'c.hazardous.a': "Nu știu. Pune-o deoparte.", // nieuw, nalezen
    'c.hazardous': "Necunoscut? Nu deschide, nu mirosi", // nieuw, nalezen
    'c.hazardous.b': "Deșeurile chimice, de exemplu vopseaua, uleiul, produsele de curățenie, bateriile și tuburile de spray, pot arde, otrăvi sau exploda. Uită-te după simbolurile de pericol. Poartă mănuși și ochelari de protecție. Nu deschide niciodată o sticlă ca să miroși ce e înăuntru și nu amesteca niciodată produsele. Ține o sticlă care curge în picioare și pune-o într-o tavă. Azbestul are voie să intre doar dacă e bine ambalat: nu-l sparge niciodată și nu-l scoate din ambalaj. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.hazardous.p': "Ce e aici înăuntru?", // nieuw, nalezen
    'c.hazardous.s': "O femeie aduce o sticlă fără etichetă. Miroase puternic. Ce faci?", // nieuw, nalezen
    'c.hazardous.o1': "O pui deoparte și îi spui șefului.", // nieuw, nalezen
    'c.hazardous.o2': "O deschizi și miroși ce e.", // nieuw, nalezen
    'c.hazardous.o3': "O torni în butoiul de vopsea.", // nieuw, nalezen
    'c.hazardous.w': "Produsele necunoscute pot reacționa cu altele. Șeful știe unde poate merge fără pericol.", // nieuw, nalezen
    'l.baler': "Presa de balotat", // nieuw, nalezen
    'w.balenpers': "presa de balotat (o mașină care presează gunoiul în blocuri)", // nieuw, nalezen
    'w.baal': "balotul (un bloc presat de hârtie sau plastic)", // nieuw, nalezen
    'w.persen': "a presa", // nieuw, nalezen
    'w.vastlopen': "a se bloca, a se înțepeni", // nieuw, nalezen
    'w.binddraad': "sârma de legat", // nieuw, nalezen
    'w.vulopening': "gura de încărcare (pe unde intră gunoiul)", // nieuw, nalezen
    's.baler.1': "Presa s-a blocat. Apasă butonul de oprire de urgență.", // nieuw, nalezen
    's.baler.2': "Nu băga niciodată mâna în presă.", // nieuw, nalezen
    's.baler.3': "Leagă bine balotul.", // nieuw, nalezen
    'c.baler.q': "Presa se blochează. Pot să mă uit puțin?", // nieuw, nalezen
    'c.baler.a': "Nu. Întâi se taie curentul.", // nieuw, nalezen
    'c.baler': "Nu băga niciodată mâna în presa de balotat", // nieuw, nalezen
    'c.baler.b': "O presă de balotat apasă cu o forță uriașă. Folosește-o doar când ai învățat cum. Nu băga niciodată o mână, un braț sau un picior în gura de încărcare, nici când mașina pare oprită. Se blochează? Apasă butonul de oprire de urgență, oprește mașina și asigură-te că nimeni nu o poate porni: urmează pașii firmei tale. Abia apoi uită-te. Nu te urca niciodată într-o presă de balotat sau într-un container. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.baler.p': "Presa s-a blocat.", // nieuw, nalezen
    'c.baler.s': "O bucată de carton s-a blocat în gura de încărcare. Mașina stă pe loc. Ce faci?", // nieuw, nalezen
    'c.baler.o1': "O oprești complet, apoi scoți cartonul.", // nieuw, nalezen
    'c.baler.o2': "Îl tragi repede afară cu mâna.", // nieuw, nalezen
    'c.baler.o3': "Îl împingi înăuntru cu piciorul.", // nieuw, nalezen
    'c.baler.w': "O mașină care stă pe loc poate porni din nou. Fără curentul tăiat, mâna ta e în pericol.", // nieuw, nalezen
    'l.shovel': "Încărcătorul frontal în centru", // nieuw, nalezen
    'w.shovel': "încărcătorul frontal (o mașină mare cu o cupă în față)", // nieuw, nalezen
    'w.zwaailamp': "girofarul (o lumină portocalie deasupra unei mașini)", // nieuw, nalezen
    'w.bunker': "boxa (un spațiu mare din beton pentru un singur fel de gunoi)", // nieuw, nalezen
    'w.looppad': "aleea pietonală (un drum doar pentru oameni)", // nieuw, nalezen
    'w.toeteren': "a claxona", // nieuw, nalezen
    'w.opscheppen': "a lua cu cupa, a încărca cu lopata", // nieuw, nalezen
    's.shovel.1': "Rămâi pe aleea pietonală.", // nieuw, nalezen
    's.shovel.2': "Încărcătorul dă înapoi. Atenție!", // nieuw, nalezen
    's.shovel.3': "Girofarul e aprins. Mașina se mișcă.", // nieuw, nalezen
    'c.shovel.q': "Pot să trec pe lângă încărcător?", // nieuw, nalezen
    'c.shovel.a': "Doar dacă te vede șoferul.", // nieuw, nalezen
    'c.shovel': "Ferește-te din calea încărcătorului", // nieuw, nalezen
    'c.shovel.b': "Un încărcător frontal e mare, iar șoferul vede puțin în jurul lui, mai ales în spate. Așa că rămâi pe aleile pietonale și poartă hainele reflectorizante. Nu merge niciodată în spatele unei mașini care se mișcă. Vrei să treci? Așteaptă până te-a văzut șoferul și îți face semn. Girofarul înseamnă: mașina asta lucrează. Ține vizitatorii departe de ea. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.shovel.p': "M-ai văzut?", // nieuw, nalezen
    'c.shovel.s': "Trebuie să treci pe lângă un încărcător frontal care lucrează. Șoferul se uită în altă parte. Ce faci?", // nieuw, nalezen
    'c.shovel.o1': "Aștepți până te vede.", // nieuw, nalezen
    'c.shovel.o2': "Treci repede.", // nieuw, nalezen
    'c.shovel.o3': "Treci prin spatele mașinii.", // nieuw, nalezen
    'c.shovel.w': "Un șofer care nu te-a văzut nu poate opri pentru tine.", // nieuw, nalezen
    'u.toddlers': "Copiii", // nieuw, nalezen
    'l.nappies': "Schimbatul scutecelor", // nieuw, nalezen
    'w.luier': "scutecul", // nieuw, nalezen
    'w.verschonen': "a schimba (un scutec)", // nieuw, nalezen
    'w.commode': "masa de înfășat", // nieuw, nalezen
    'w.billendoekje': "șervețelul umed", // nieuw, nalezen
    'w.potje': "olița", // nieuw, nalezen
    'w.zindelijk': "obișnuit cu oliță (copilul poate folosi toaleta)", // nieuw, nalezen
    's.nappies.1': "Îl schimb puțin pe Sem.", // nieuw, nalezen
    's.nappies.2': "Spală-te pe mâini după ce schimbi un scutec.", // nieuw, nalezen
    's.nappies.3': "Nu lăsa niciodată un copil singur pe masa de înfășat.", // nieuw, nalezen
    'c.nappies.q': "Când ai schimbat-o pe Noor?", // nieuw, nalezen
    'c.nappies.a': "La ora zece. Scrie în aplicație.", // nieuw, nalezen
    'c.nappies': "O mână pe copil", // nieuw, nalezen
    'c.nappies.b': "Pregătește totul înainte să pui un copil pe masa de înfășat: un scutec curat, șervețele umede și haine. Apoi ține tot timpul o mână pe copil. Nu pleca niciodată, nici măcar pentru o secundă. Spală-te pe mâini după fiecare schimbare și curăță masa. Notează când ai schimbat scutecul, ca să știe părinții. Vezi o iritație sau o rană? Noteaz-o și spune-i unui coleg. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.nappies.p': "Tocmai îl schimb.", // nieuw, nalezen
    'c.nappies.s': "Schimbi un bebeluș. Ai uitat șervețelele umede; sunt în partea cealaltă a camerei. Ce faci?", // nieuw, nalezen
    'c.nappies.o1': "Iei bebelușul cu tine.", // nieuw, nalezen
    'c.nappies.o2': "Le aduci repede: e aproape.", // nieuw, nalezen
    'c.nappies.o3': "Lași bebelușul și strigi după ajutor.", // nieuw, nalezen
    'c.nappies.w': "Un bebeluș poate cădea de pe masa de înfășat într-o secundă. Nu lăsa niciodată un copil singur acolo sus.", // nieuw, nalezen
    'l.mealtime': "Mâncat și băut", // nieuw, nalezen
    'w.fles': "biberonul", // nieuw, nalezen
    'w.slabbetje': "baveta", // nieuw, nalezen
    'w.beker': "cana (cu toartă)", // nieuw, nalezen
    'w.kinderstoel': "scaunul înalt pentru copii", // nieuw, nalezen
    'w.fruithap': "piureul de fructe", // nieuw, nalezen
    'w.boertje': "râgâitul (după masă)", // nieuw, nalezen
    's.mealtime.1': "Spală-te pe mâini înainte de masă.", // nieuw, nalezen
    's.mealtime.2': "Dă-i Lisei biberonul la ora douăsprezece.", // nieuw, nalezen
    's.mealtime.3': "Toată lumea stă la masă.", // nieuw, nalezen
    'c.mealtime.q': "Poate Daan să primească un biscuit?", // nieuw, nalezen
    'c.mealtime.a': "Nu, are o alergie. Uită-te pe listă.", // nieuw, nalezen
    'c.mealtime': "Verifică lista înainte să dai mâncare", // nieuw, nalezen
    'c.mealtime.b': "Înainte să-i dai unui copil mâncare sau băutură, verifică lista: unii copii au o alergie, alții nu au voie să mănânce anumite alimente din cauza sănătății sau a credinței. Spală-te pe mâini și spală mâinile copiilor înainte de masă. Copiii trebuie să stea jos cât mănâncă și beau, niciodată să meargă sau să alerge. Taie mâncarea mărunt pentru copiii mici, de exemplu strugurii în bucăți. Nu-i da niciodată unui copil ceva adus de acasă de alt copil. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.mealtime.p': "Are voie să mănânce asta?", // nieuw, nalezen
    'c.mealtime.s': "Un copil plânge după un biscuit. Nu cunoști bine copilul ăsta. Ce faci?", // nieuw, nalezen
    'c.mealtime.o1': "Verifici întâi lista.", // nieuw, nalezen
    'c.mealtime.o2': "I-l dai: e doar un biscuit.", // nieuw, nalezen
    'c.mealtime.o3': "Îi dai o jumătate de biscuit.", // nieuw, nalezen
    'c.mealtime.w': "Un biscuit poate conține nuci, lapte sau ou. Pentru un copil cu alergie, asta poate fi foarte periculos.", // nieuw, nalezen
    'l.naptime': "Somnul", // nieuw, nalezen
    'w.bedje': "pătuțul (un pat mic pentru bebeluș)", // nieuw, nalezen
    'w.slaapkamer': "dormitorul", // nieuw, nalezen
    'w.knuffel': "jucăria de pluș", // nieuw, nalezen
    'w.speen': "suzeta", // nieuw, nalezen
    'w.babyfoon': "interfonul pentru bebeluși", // nieuw, nalezen
    'w.slaapzak': "sacul de dormit pentru bebeluși", // nieuw, nalezen
    's.naptime.1': "Culcă bebelușul pe spate.", // nieuw, nalezen
    's.naptime.2': "Mă uit des în dormitor.", // nieuw, nalezen
    's.naptime.3': "Uite jucăria ta de pluș. Somn ușor.", // nieuw, nalezen
    'c.naptime.q': "Doarme deja Mila?", // nieuw, nalezen
    'c.naptime.a': "Da, de la ora unu. Mă uit iar imediat.", // nieuw, nalezen
    'c.naptime': "Bebelușii dorm pe spate", // nieuw, nalezen
    'c.naptime.b': "Un bebeluș doarme cel mai sigur pe spate, într-un sac de dormit, în pătuțul lui. Fără pernă, fără pătură liberă și fără jucării mari în pătuț. Ține camera răcoroasă și aerisită. Verifică des copiii care dorm: uită-te și ascultă, chiar și când interfonul pentru bebeluși e pornit. Îți cere un părinte să-și lase bebelușul să doarmă în alt fel? Spune-i întâi șefului. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.naptime.p': "Mă duc să mă uit în dormitor.", // nieuw, nalezen
    'c.naptime.s': "Un bebeluș a adormit pe burtă în pătuț. Ce faci?", // nieuw, nalezen
    'c.naptime.o1': "Îl întorci ușor pe spate.", // nieuw, nalezen
    'c.naptime.o2': "Îl lași să doarmă: acum doarme.", // nieuw, nalezen
    'c.naptime.o3': "Pui o pernă lângă el.", // nieuw, nalezen
    'c.naptime.w': "Pe spate, un bebeluș poate respira liber. O pernă îi poate acoperi fața.", // nieuw, nalezen
    'l.playtime': "Joaca", // nieuw, nalezen
    'w.spelen': "a se juca", // nieuw, nalezen
    'w.speelgoed': "jucăriile", // nieuw, nalezen
    'w.zandbak': "groapa cu nisip", // nieuw, nalezen
    'w.glijbaan': "toboganul", // nieuw, nalezen
    'w.puzzel': "puzzle-ul", // nieuw, nalezen
    'w.buitenspelen': "a se juca afară", // nieuw, nalezen
    's.playtime.1': "Mergem să ne jucăm afară. Gecile pe voi!", // nieuw, nalezen
    's.playtime.2': "Strânge jucăriile.", // nieuw, nalezen
    's.playtime.3': "Câte un copil pe tobogan.", // nieuw, nalezen
    'c.playtime.q': "Pot să mă joc cu puzzle-ul?", // nieuw, nalezen
    'c.playtime.a': "Da, la masă. Apoi îl strângi.", // nieuw, nalezen
    'c.playtime': "Joacă sigură: uită-te, numără, verifică", // nieuw, nalezen
    'c.playtime.b': "Copiii învață jucându-se, așa că lasă-i să încerce lucruri. Dar ține-i mereu sub ochi, și afară. Numără copiii când ieșiți și când intrați înapoi. Verifică întâi locul de joacă: e poarta închisă, sunt cioburi sau gunoaie? Jucăriile cu piese mici nu sunt pentru copiii sub trei ani: se pot îneca cu ele. Curăță des jucăriile pe care copiii le bagă în gură. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.playtime.p': "Suntem toți aici?", // nieuw, nalezen
    'c.playtime.s': "Intri înapoi de la locul de joacă. Numeri un copil în minus. Ce faci?", // nieuw, nalezen
    'c.playtime.o1': "Îi spui unui coleg și cauți imediat.", // nieuw, nalezen
    'c.playtime.o2': "Aștepți: copilul o să intre singur.", // nieuw, nalezen
    'c.playtime.o3': "Numeri din nou mâine.", // nieuw, nalezen
    'c.playtime.w': "Un copil singur afară se poate răni sau poate pleca. Fiecare minut contează.", // nieuw, nalezen
    'u.daycare': "Părinți, siguranță și grupa", // nieuw, nalezen
    'l.pickup': "Adusul și luatul copiilor", // nieuw, nalezen
    'w.ouder': "părintele", // nieuw, nalezen
    'w.afscheid': "despărțirea, la revedere", // nieuw, nalezen
    'w.oppas': "bona", // nieuw, nalezen
    'w.schriftje': "caietul (pentru notițe între părinți și personal)", // nieuw, nalezen
    'w.ouderapp': "aplicația pentru părinți (pentru poze și mesaje către părinți)", // nieuw, nalezen
    'w.wennen': "a se acomoda (a se obișnui cu un loc nou)", // nieuw, nalezen
    's.pickup.1': "Scriu asta în caiet.", // nieuw, nalezen
    's.pickup.2': "Spune-i pa lui tati.", // nieuw, nalezen
    's.pickup.3': "Pun o poză în aplicația pentru părinți.", // nieuw, nalezen
    'c.pickup.q': "Cine îl ia pe Sem azi?", // nieuw, nalezen
    'c.pickup.a': "Bunica lui. E pe listă.", // nieuw, nalezen
    'c.pickup': "Doar oamenilor de pe listă", // nieuw, nalezen
    'c.pickup.b': "Dă un copil doar unui părinte sau cuiva despre care ți-au spus părinții. Nu cunoști persoana? Întreabă cine e, uită-te la actul de identitate și verifică la părinți sau la șef. La plecare, spune-i părintelui cum a fost ziua: mâncarea, somnul, joaca și orice lucru special. Scrie lucrurile importante în caiet sau în aplicație. Vorbește despre alți copii doar cu părinții lor. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.pickup.p': "Cine sunteți? Îi sun pe părinți.", // nieuw, nalezen
    'c.pickup.s': "Un bărbat pe care nu-l cunoști vine să-l ia pe Sem. Nu e pe listă. Ce faci?", // nieuw, nalezen
    'c.pickup.o1': "Îi suni pe părinți înainte să plece Sem.", // nieuw, nalezen
    'c.pickup.o2': "Îl lași pe Sem să plece: știe numele.", // nieuw, nalezen
    'c.pickup.o3': "Îl întrebi pe Sem dacă îl cunoaște.", // nieuw, nalezen
    'c.pickup.w': "Tu răspunzi de copil până când îl preia o persoană aleasă de părinți.", // nieuw, nalezen
    'l.childsafety': "Siguranța în grupă", // nieuw, nalezen
    'w.traphekje': "poarta de scară (o portiță pentru scări)", // nieuw, nalezen
    'w.vingerstrip': "protecția pentru degete (pe o ușă, ca să nu rămână degetele prinse)", // nieuw, nalezen
    'w.verslikken': "a se îneca (mâncarea o ia pe drumul greșit)", // nieuw, nalezen
    'w.bult': "cucuiul (pe cap)", // nieuw, nalezen
    'w.schaafwond': "julitura (pielea e zgâriată)", // nieuw, nalezen
    'w.toezicht': "supravegherea (te uiți la copii)", // nieuw, nalezen
    's.childsafety.1': "Închide mereu poarta de scară.", // nieuw, nalezen
    's.childsafety.2': "Pun puțină gheață pe cucui.", // nieuw, nalezen
    's.childsafety.3': "Sem se îneacă. Îl ajut.", // nieuw, nalezen
    'c.childsafety.q': "A căzut Bo?", // nieuw, nalezen
    'c.childsafety.a': "Da, are un cucui. O sun pe mama ei.", // nieuw, nalezen
    'c.childsafety': "Uită-te în jur cu ochii unui copil", // nieuw, nalezen
    'c.childsafety.b': "Copiii mici bagă totul în gură și se urcă pe orice. Așa că ține poarta de scară închisă, pune produsele de curățenie și medicamentele unde nu ajung copiii și ține băuturile fierbinți departe de copii. Verifică încăperea în fiecare zi. Se rănește un copil? Dă-i primul ajutor, consolează copilul, spune-le părinților și notează. E grav? Sună la 112. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.childsafety.p': "Poarta de scară e deschisă.", // nieuw, nalezen
    'c.childsafety.s': "Îți pui cafeaua fierbinte pe o masă joasă. Un copil mic merge spre ea. Ce faci?", // nieuw, nalezen
    'c.childsafety.o1': "Pui imediat cafeaua sus.", // nieuw, nalezen
    'c.childsafety.o2': "Îi spui copilului să n-o atingă.", // nieuw, nalezen
    'c.childsafety.o3': "O bei repede.", // nieuw, nalezen
    'c.childsafety.w': "Cafeaua fierbinte poate arde grav un copil mic. Unde nu ajunge copilul e singurul loc sigur.", // nieuw, nalezen
    'l.sickchild': "Un copil bolnav și alergii", // nieuw, nalezen
    'w.huiduitslag': "iritația pielii (pete roșii pe piele)", // nieuw, nalezen
    'w.diarree': "diareea", // nieuw, nalezen
    'w.overgeven': "a vomita", // nieuw, nalezen
    'w.allergielijst': "lista cu alergii", // nieuw, nalezen
    'w.adrenalinepen': "stiloul cu adrenalină (un stilou cu medicament pentru o alergie puternică)", // nieuw, nalezen
    'w.temperaturen': "a lua temperatura", // nieuw, nalezen
    's.sickchild.1': "Sem are febră. Îl sun pe tatăl lui.", // nieuw, nalezen
    's.sickchild.2': "Uită-te pe lista cu alergii înainte de masă.", // nieuw, nalezen
    's.sickchild.3': "Nu da niciodată un medicament fără permisiune.", // nieuw, nalezen
    'c.sickchild.q': "Ce face Jip?", // nieuw, nalezen
    'c.sickchild.a': "E foarte fierbinte. Îi iau temperatura.", // nieuw, nalezen
    'c.sickchild': "Un copil bolnav: spune, nu ghici", // nieuw, nalezen
    'c.sickchild.b': "Urmărește cum se simt copiii. E un copil fierbinte, foarte obosit, vomită sau are o iritație pe piele? Ia-i temperatura, spune-i colegului și sună-i pe părinți. Dă un medicament doar cu permisiunea scrisă a părinților și notează ce ai dat și când. Trebuie să știi ce copii au o alergie și unde e medicamentul lor. Un copil cu o reacție alergică puternică: folosește stiloul cu adrenalină dacă ai învățat cum și sună la 112. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.sickchild.p': "Copilul dumneavoastră e bolnav. Puteți veni să-l luați?", // nieuw, nalezen
    'c.sickchild.s': "O mamă zice: „Dă-i un sirop pentru febră la ora două.” Nu e niciun formular. Ce faci?", // nieuw, nalezen
    'c.sickchild.o1': "O rogi să semneze întâi formularul.", // nieuw, nalezen
    'c.sickchild.o2': "I-l dai: a cerut mama.", // nieuw, nalezen
    'c.sickchild.o3': "Îi dai jumătate, ca să fie sigur.", // nieuw, nalezen
    'c.sickchild.w': "Fără permisiune scrisă nu ai voie să dai medicamente. Formularul îl protejează pe copil și pe tine.", // nieuw, nalezen
    'l.grouprules': "Grupa și regulile", // nieuw, nalezen
    'w.pedagogischmedewerker': "educatorul (lucrează cu copiii la creșă)", // nieuw, nalezen
    'w.mentor': "mentorul (educatorul care urmărește îndeaproape un copil)", // nieuw, nalezen
    'w.vierogenprincipe': "regula celor patru ochi (un alt adult te poate vedea sau auzi mereu)", // nieuw, nalezen
    'w.observeren': "a observa (a te uita atent și a nota)", // nieuw, nalezen
    'w.peuter': "copilul mic (un copil de doi sau trei ani)", // nieuw, nalezen
    'w.groep': "grupa (copiii care sunt împreună în fiecare zi)", // nieuw, nalezen
    's.grouprules.1': { m: "Sunt mentorul Lisei.", f: "Sunt mentora Lisei.", x: "Eu mă ocup de Lisa ca mentor." }, // nieuw, nalezen
    's.grouprules.2': "Un coleg ne poate vedea sau auzi mereu.", // nieuw, nalezen
    's.grouprules.3': "Îmi fac griji pentru Daan.", // nieuw, nalezen
    'c.grouprules.q': { m: "Am voie să ies singur cu grupa afară?", f: "Am voie să ies singură cu grupa afară?", x: "Am voie să ies cu grupa afară fără un coleg?" }, // nieuw, nalezen
    'c.grouprules.a': "Da, dar spune-i întâi unui coleg.", // nieuw, nalezen
    'c.grouprules': "Mereu la vedere pentru un alt adult", // nieuw, nalezen
    'c.grouprules.b': "La creșă, un alt adult trebuie să te poată vedea sau auzi mereu când ești cu copiii. Asta îi protejează pe copii și pe tine. Fiecare copil are un mentor: un educator care urmărește îndeaproape copilul și vorbește cu părinții. Îți faci griji pentru un copil din cauza a ceva de acasă, de exemplu vânătăi sau frică? Nu-i pune copilului prea multe întrebări: spune-i șefului, care știe pașii. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.grouprules.p': "Îmi fac griji pentru copilul ăsta.", // nieuw, nalezen
    'c.grouprules.s': "Vezi din nou vânătăi pe un copil. Copilul e tăcut. Ce faci?", // nieuw, nalezen
    'c.grouprules.o1': "Îi spui șefului în aceeași zi.", // nieuw, nalezen
    'c.grouprules.o2': "Îi pui copilului multe întrebări.", // nieuw, nalezen
    'c.grouprules.o3': "Îi suni pe părinți și îi întrebi de ce.", // nieuw, nalezen
    'c.grouprules.w': "Șeful știe pașii când îți faci griji pentru un copil. Multe întrebări pot speria copilul.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Băi, hoteluri și mașini", // nieuw, nalezen
    'l.sanitary': "Toalete și chiuvete", // nieuw, nalezen
    'w.wastafel': "chiuveta (lavoarul dintr-o baie sau toaletă)", // nieuw, nalezen
    'w.toiletpot': "vasul de toaletă", // nieuw, nalezen
    'w.toiletborstel': "peria de toaletă", // nieuw, nalezen
    'w.urinoir': "pisoarul", // nieuw, nalezen
    'w.kalk': "calcarul (depunerea albă lăsată de apă pe robinete și pe faianță)", // nieuw, nalezen
    'w.ontstopper': "pompa de desfundat (o unealtă pentru o toaletă sau o scurgere înfundată)", // nieuw, nalezen
    's.sanitary.1': "Întâi fac chiuvetele, apoi toaletele.", // nieuw, nalezen
    's.sanitary.2': "E calcar pe robinet.", // nieuw, nalezen
    's.sanitary.3': "Toaleta de la etajul întâi e înfundată.", // nieuw, nalezen
    'c.sanitary.q': "Sunt gata toaletele?", // nieuw, nalezen
    'c.sanitary.a': "Încă nu. O toaletă e înfundată.", // nieuw, nalezen
    'c.sanitary': "De la curat la murdar", // nieuw, nalezen
    'c.sanitary.b': "Într-o baie lucrezi de la curat la murdar: întâi oglinzile și chiuvetele, apoi toaletele, iar podeaua la sfârșit. Așa nu duci murdăria de la toaletă la chiuvetă. Folosește lavetele cu culoarea pentru toaletă și pune-ți mănuși. Curăță și peria de toaletă și las-o să se usuce. E o toaletă înfundată sau stricată? Pune un semn pe ușă și anunță. Spală-te pe mâini când termini, chiar dacă ai purtat mănuși. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.sanitary.p': "Toaleta asta e înfundată. Pun un semn pe ea.", // nieuw, nalezen
    'c.sanitary.s': "Ai curățat o toaletă. Urmează chiuveta. Ai încă aceeași lavetă în mână. Ce faci?", // nieuw, nalezen
    'c.sanitary.o1': "Iei o lavetă cu culoarea pentru chiuvetă.", // nieuw, nalezen
    'c.sanitary.o2': "Folosești aceeași lavetă: încă pare curată.", // nieuw, nalezen
    'c.sanitary.o3': "Clătești întâi laveta în toaletă.", // nieuw, nalezen
    'c.sanitary.w': "Microbii de la toaletă sunt pe lavetă, chiar dacă nu îi vezi. O lavetă nouă îi ține departe de mâini și de fețe.", // nieuw, nalezen
    'l.hotelroom': "Camere de hotel", // nieuw, nalezen
    'w.laken': "cearșaful (pe pat)", // nieuw, nalezen
    'w.kussensloop': "fața de pernă", // nieuw, nalezen
    'w.dekbed': "pilota", // nieuw, nalezen
    'w.handdoek': "prosopul", // nieuw, nalezen
    'w.kamerlijst': "lista de camere (camerele pe care trebuie să le faci azi)", // nieuw, nalezen
    'w.opmaken': "a face (patul)", // nieuw, nalezen
    's.hotelroom.1': "Fac patul cu cearșafuri curate.", // nieuw, nalezen
    's.hotelroom.2': "Pune două prosoape curate în baie.", // nieuw, nalezen
    's.hotelroom.3': "Camera doisprezece e gata. Merg la treisprezece.", // nieuw, nalezen
    'c.hotelroom.q': "Câte camere mai ai?", // nieuw, nalezen
    'c.hotelroom.a': "Încă patru. Apoi lista mea e gata.", // nieuw, nalezen
    'c.hotelroom': "Bate, spune cine ești și așteaptă", // nieuw, nalezen
    'c.hotelroom.b': "Înainte să intri într-o cameră de hotel, bate la ușă și spune cine ești, de exemplu „Housekeeping!”. Așteaptă puțin și bate din nou. E un semn „Niet storen” pe ușă? Atunci nu intra și notează asta pe lista de camere. Oaspetele e în cameră? Întreabă dacă poți face curat acum sau revino mai târziu. Lucrurile oaspetelui rămân unde sunt. A uitat un oaspete ceva? Du lucrul la recepție. Nu păstra niciodată nimic pentru tine, nici măcar ceva mic. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.hotelroom.p': "Bună dimineața. Pot să fac curat în cameră acum?", // nieuw, nalezen
    'c.hotelroom.s': "Într-o cameră goală găsești un telefon sub pat. Oaspetele a plecat. Ce faci?", // nieuw, nalezen
    'c.hotelroom.o1': "Îl duci la recepție.", // nieuw, nalezen
    'c.hotelroom.o2': "Îl păstrezi: oaspetele a plecat.", // nieuw, nalezen
    'c.hotelroom.o3': "Îl lași sub pat.", // nieuw, nalezen
    'c.hotelroom.w': "Lucrurile pierdute sunt tot ale oaspetelui. Recepția i le poate da înapoi. Dacă le păstrezi, e furt și poți să-ți pierzi locul de muncă.", // nieuw, nalezen
    'l.dosing': "Produse și mașini", // nieuw, nalezen
    'w.doseren': "a doza (a folosi cantitatea potrivită dintr-un produs)", // nieuw, nalezen
    'w.maatbeker': "paharul gradat", // nieuw, nalezen
    'w.sprayflacon': "pulverizatorul", // nieuw, nalezen
    'w.concentraat': "concentratul (un produs puternic pe care îl amesteci cu apă)", // nieuw, nalezen
    'w.veiligheidsblad': "fișa cu date de securitate (spune pericolele unui produs și ce trebuie făcut)", // nieuw, nalezen
    'w.schrobzuigmachine': "mașina de spălat pardoseli (o mașină care freacă podeaua și o aspiră până se usucă)", // nieuw, nalezen
    's.dosing.1': "Pune un capac plin într-o găleată cu apă.", // nieuw, nalezen
    's.dosing.2': "Citește întâi eticheta.", // nieuw, nalezen
    's.dosing.3': "Mașina de spălat pardoseli trebuie pusă la încărcat.", // nieuw, nalezen
    'c.dosing.q': "Mai pune puțin produs. Așa iese mai curat.", // nieuw, nalezen
    'c.dosing.a': "Nu, mai mult nu e mai bine. Folosesc paharul gradat.", // nieuw, nalezen
    'c.dosing': "Doza potrivită, nu mai mult", // nieuw, nalezen
    'c.dosing.b': "Mai mult produs nu curăță mai bine. Prea mult lasă un strat lipicios, așa că podeaua se murdărește mai repede și poate deveni alunecoasă. E mai rău și pentru pielea și plămânii tăi. Folosește paharul gradat sau pompa de dozare și urmează eticheta. Întâi apa, apoi produsul: așa nu stropește. Înainte să folosești mașina de spălat pardoseli, verifică dacă e încărcată și are apă curată în rezervor. La sfârșit, golește și clătește rezervorul cu apa murdară. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.dosing.p': "Cât trebuie să pun?", // nieuw, nalezen
    'c.dosing.s': "Podeaua rămâne lipicioasă. Un coleg zice: „Pune produs dublu.” Ce faci?", // nieuw, nalezen
    'c.dosing.o1': "Folosești doza de pe etichetă și întrebi.", // nieuw, nalezen
    'c.dosing.o2': "Pui dublu: așa se curăță.", // nieuw, nalezen
    'c.dosing.o3': "Torni produsul direct pe podea.", // nieuw, nalezen
    'c.dosing.w': "O podea lipicioasă înseamnă de multe ori prea mult produs, nu prea puțin. Doza potrivită curăță cel mai bine și e cea mai sigură.", // nieuw, nalezen
    'l.officenight': "Birouri, devreme sau târziu", // nieuw, nalezen
    'w.toetsenbord': "tastatura", // nieuw, nalezen
    'w.papierbak': "coșul pentru hârtie (pentru hârtie veche)", // nieuw, nalezen
    'w.lichtschakelaar': "întrerupătorul", // nieuw, nalezen
    'w.pantry': "chicineta (bucătăria mică dintr-un birou)", // nieuw, nalezen
    'w.deurmat': "preșul (covorașul de la intrare)", // nieuw, nalezen
    'w.alleenwerken': "a lucra singur (nu mai e nimeni în clădire)", // nieuw, nalezen
    's.officenight.1': "Golesc coșurile de gunoi și coșul pentru hârtie.", // nieuw, nalezen
    's.officenight.2': "Nu ating hârtiile de pe birou.", // nieuw, nalezen
    's.officenight.3': "Sting lumina când termin.", // nieuw, nalezen
    'c.officenight.q': { m: "Lucrezi singur în clădire diseară?", f: "Lucrezi singură în clădire diseară?", x: "Diseară nu mai e nimeni cu tine în clădire?" }, // nieuw, nalezen
    'c.officenight.a': "Da. Îți trimit un mesaj când termin.", // nieuw, nalezen
    'c.officenight': "Fără nimeni altcineva în clădire", // nieuw, nalezen
    'c.officenight.b': "Dimineața devreme sau seara târziu faci adesea curat într-un birou fără colegi. Trebuie să știi ce faci dacă se întâmplă ceva: pe cine suni și unde e trusa de prim ajutor? Ține telefonul la tine. Stabilește cu șeful sau cu un coleg că trimiți un mesaj când începi și când termini. Nu lăsa să intre pe nimeni pe care nu-l cunoști. Nu atinge hârtii, ecrane sau tastaturi mai mult decât ai nevoie ca să faci curat și nu citi niciodată ce e pe ele. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.officenight.p': "Am terminat și acum plec acasă.", // nieuw, nalezen
    'c.officenight.s': "Noaptea un bărbat bate în ușa de sticlă. Zice că lucrează aici și și-a uitat cheia. Ce faci?", // nieuw, nalezen
    'c.officenight.o1': "Nu deschizi. Îl suni pe șef.", // nieuw, nalezen
    'c.officenight.o2': "Îl lași să intre: pare de treabă.", // nieuw, nalezen
    'c.officenight.o3': "Îi dai cheia ta.", // nieuw, nalezen
    'c.officenight.w': "Oricine poate spune că lucrează acolo. Șeful poate verifica. Siguranța ta și clădirea sunt pe primul loc.", // nieuw, nalezen
    'u.cooking': "Bucătăria și servirea", // nieuw, nalezen
    'l.knives': "Cuțite și tăiat", // nieuw, nalezen
    'w.koksmes': "cuțitul de bucătar (un cuțit mare de bucătărie)", // nieuw, nalezen
    'w.dunschiller': "curățătorul de legume (economul)", // nieuw, nalezen
    'w.schillen': "a curăța de coajă", // nieuw, nalezen
    'w.hakken': "a toca (a tăia foarte mărunt)", // nieuw, nalezen
    'w.raspen': "a da pe răzătoare", // nieuw, nalezen
    'w.blokjes': "cuburile (bucăți mici, pătrate)", // nieuw, nalezen
    's.knives.1': "Taie morcovii cuburi.", // nieuw, nalezen
    's.knives.2': "Nu pune cuțitul în chiuvetă.", // nieuw, nalezen
    's.knives.3': "Toacă pătrunjelul mărunt.", // nieuw, nalezen
    'c.knives.q': "Poți să tai ceapa?", // nieuw, nalezen
    'c.knives.a': "Da, chef. Rondele sau cuburi?", // nieuw, nalezen
    'c.knives': "Un cuțit e o unealtă, nu o jucărie", // nieuw, nalezen
    'c.knives.b': "Ține-ți cuțitul ascuțit: un cuțit tocit alunecă mai ușor. Taie pe un tocător care nu se mișcă: pune o cârpă udă sub el. Îndoaie degetele înăuntru, ca o gheară. Mergi cu vârful în jos, lângă picior, și spune „Mes!” când treci pe lângă cineva. Nu pune niciodată un cuțit într-o chiuvetă plină cu apă: cineva îl poate apuca fără să-l vadă. Cade un cuțit? Fă un pas înapoi, nu-l prinde. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.knives.p': "Cuțit! Trec pe la spatele tău.", // nieuw, nalezen
    'c.knives.s': "Tai ceva. Cuțitul alunecă de pe tocător și cade. Ce faci?", // nieuw, nalezen
    'c.knives.o1': "Faci un pas înapoi și îl lași să cadă.", // nieuw, nalezen
    'c.knives.o2': "Îl prinzi repede cu mâna.", // nieuw, nalezen
    'c.knives.o3': "Îl oprești cu piciorul.", // nieuw, nalezen
    'c.knives.w': "Un cuțit care cade îți poate tăia adânc mâna sau piciorul. Un cuțit căzut pe jos trebuie doar spălat.", // nieuw, nalezen
    'l.rawcooked': "Crud, gătit și alergeni", // nieuw, nalezen
    'w.rauw': "crud (negătit)", // nieuw, nalezen
    'w.gaar': "gătit, făcut (gata de mâncat)", // nieuw, nalezen
    'w.afdekken': "a acoperi (cu un capac sau cu folie)", // nieuw, nalezen
    'w.kleurcode': "codul de culori (o culoare de tocător și de cuțit pentru fiecare fel de aliment)", // nieuw, nalezen
    'w.allergenenlijst': "lista de alergeni (spune ce conține fiecare fel de mâncare)", // nieuw, nalezen
    'w.glutenvrij': "fără gluten", // nieuw, nalezen
    's.rawcooked.1': "Carnea crudă se pune jos în frigider.", // nieuw, nalezen
    's.rawcooked.2': "E gata puiul?", // nieuw, nalezen
    's.rawcooked.3': "Acoperă recipientele din camera frigorifică.", // nieuw, nalezen
    'c.rawcooked.q': "Sosul ăsta e fără gluten?", // nieuw, nalezen
    'c.rawcooked.a': "Nu știu sigur. Mă uit pe lista de alergeni.", // nieuw, nalezen
    'c.rawcooked': "Crudul și gata-de-mâncat nu se ating niciodată", // nieuw, nalezen
    'c.rawcooked.b': "Carnea, peștele și ouăle crude pot avea microbi. Ține-le departe de mâncarea care e gata de mâncat. Folosește alt tocător și alt cuțit, sau codul de culori al bucătăriei tale, și spală-te pe mâini după ce atingi mâncare crudă. Carnea crudă se pune jos în frigider, ca să nu picure pe altă mâncare. Acoperă mâncarea și pune data pe ea. La alergii, o urmă poate fi de ajuns: folosește ustensile curate. Un restaurant trebuie să le poată spune oaspeților ce alergeni are un fel de mâncare: uită-te pe lista de alergeni. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.rawcooked.p': "Care tocător e pentru carne crudă?", // nieuw, nalezen
    'c.rawcooked.s': "Ai tăiat pui crud. Acum trebuie să tai roșii pentru o salată. Ce faci?", // nieuw, nalezen
    'c.rawcooked.o1': "Iei un tocător curat și un cuțit curat.", // nieuw, nalezen
    'c.rawcooked.o2': "Ștergi tocătorul cu o cârpă și continui.", // nieuw, nalezen
    'c.rawcooked.o3': "Tai roșiile pe același tocător.", // nieuw, nalezen
    'c.rawcooked.w': "Microbii de la puiul crud ajung pe roșii, iar o salată nu se mai gătește. Un tocător curat oprește asta.", // nieuw, nalezen
    'l.pass': "Spălătorul de vase și pass-ul", // nieuw, nalezen
    'w.pass': "pass-ul (blatul unde farfuriile așteaptă ospătarul)", // nieuw, nalezen
    'w.bon': "bonul de comandă (comanda de la ospătar pentru bucătărie)", // nieuw, nalezen
    'w.spoelkeuken': "spălătorul de vase (locul unde se spală vasele)", // nieuw, nalezen
    'w.vaatwaskorf': "coșul pentru vase (coșul care intră în mașina de spălat vase)", // nieuw, nalezen
    'w.voorspoelen': "a clăti înainte (a clăti înainte de mașină)", // nieuw, nalezen
    'w.warmhoudlamp': "lampa de încălzire (ține farfuriile calde)", // nieuw, nalezen
    's.pass.1': "Masa opt e pe pass.", // nieuw, nalezen
    's.pass.2': "Vin două bonuri noi.", // nieuw, nalezen
    's.pass.3': "Clătește întâi farfuriile.", // nieuw, nalezen
    'c.pass.q': "Unde e masa doisprezece?", // nieuw, nalezen
    'c.pass.a': "E pe pass. O duc acum.", // nieuw, nalezen
    'c.pass': "Pass-ul: farfuriile nu așteaptă", // nieuw, nalezen
    'c.pass.b': "La pass, bucătăria pune farfuriile pentru ospătar. Mâncarea caldă trebuie să ajungă repede la oaspete, așa că o farfurie nu stă mult pe pass. Verifică bonul: masa potrivită, felurile potrivite, marginea farfuriei curată? Atunci ia-o. La spălătorul de vase: clătește înainte, pune totul în coșuri și lasă mașina să facă restul. Nu deschide mașina cât merge: aburul e foarte fierbinte. Pune-ți mănuși când pui produsele în mașină. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.pass.p': "Pentru ce masă e asta?", // nieuw, nalezen
    'c.pass.s': "Sunt două farfurii pe pass. Nu știi pentru ce masă sunt. Ce faci?", // nieuw, nalezen
    'c.pass.o1': "Te uiți pe bon sau îl întrebi pe bucătarul-șef.", // nieuw, nalezen
    'c.pass.o2': "Le duci la o masă care așteaptă.", // nieuw, nalezen
    'c.pass.o3': "Aștepți până le ia altcineva.", // nieuw, nalezen
    'c.pass.w': "O farfurie la masa greșită înseamnă doi oaspeți care așteaptă și mâncare rece. O întrebare scurtă e mai rapidă.", // nieuw, nalezen
    'l.bill': "Felurile și nota de plată", // nieuw, nalezen
    'w.voorgerecht': "antreul (primul fel)", // nieuw, nalezen
    'w.hoofdgerecht': "felul principal", // nieuw, nalezen
    'w.nagerecht': "desertul", // nieuw, nalezen
    'w.reservering': "rezervarea (o masă rezervată dinainte)", // nieuw, nalezen
    'w.pinapparaat': "POS-ul (aparatul de plată cu cardul)", // nieuw, nalezen
    'w.apartbetalen': "a plăti separat (fiecare plătește pentru el)", // nieuw, nalezen
    's.bill.1': "Aveți rezervare?", // nieuw, nalezen
    's.bill.2': "Doriți să plătiți împreună sau separat?", // nieuw, nalezen
    's.bill.3': "Să aduc acum felul principal?", // nieuw, nalezen
    'c.bill.q': "Putem plăti separat?", // nieuw, nalezen
    'c.bill.a': "Da, sigur. Aduc POS-ul.", // nieuw, nalezen
    'c.bill': "Bani la masă: numără de două ori", // nieuw, nalezen
    'c.bill.b': "Când plătește un oaspete, spune clar suma și lasă-l pe oaspete să vadă POS-ul. La plata cash, numără banii când îi primești și încă o dată când dai restul. Banii merg în casa de marcat sau în portofelul tău de ospătar, niciodată în buzunarul tău. Bacșișul (fooi) merge unde spune firma, de exemplu în borcanul pentru bacșiș. A plecat un oaspete fără să plătească? Nu alerga după el: spune-i managerului. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.bill.p': "Face patruzeci și cinci de euro, vă rog.", // nieuw, nalezen
    'c.bill.s': "Un oaspete îți dă bani și zice: „E fix.” Nu i-ai numărat. Ce faci?", // nieuw, nalezen
    'c.bill.o1': "Îi numeri cât oaspetele e de față.", // nieuw, nalezen
    'c.bill.o2': "Îi pui deoparte și îi numeri mai târziu.", // nieuw, nalezen
    'c.bill.o3': "Ai încredere în oaspete: îi mulțumești.", // nieuw, nalezen
    'c.bill.w': "Dacă numeri mai târziu și lipsesc bani, nimeni nu poate verifica ce s-a întâmplat. Numărarea la masă îl protejează pe oaspete și pe tine.", // nieuw, nalezen
    'u.carework': "Îngrijire personală și îngrijire la domiciliu", // nieuw, nalezen
    'l.washing': "Spălat și îmbrăcat", // nieuw, nalezen
    'w.washandje': "mănușa de baie (o cârpă mică în formă de mănușă)", // nieuw, nalezen
    'w.douchestoel': "scaunul de duș", // nieuw, nalezen
    'w.tandenpoetsen': "a se spăla pe dinți", // nieuw, nalezen
    'w.kammen': "a pieptăna", // nieuw, nalezen
    'w.scheren': "a bărbieri", // nieuw, nalezen
    'w.steunkous': "ciorapul compresiv (un ciorap strâns pentru picioare)", // nieuw, nalezen
    's.washing.1': "Apa e destul de caldă?", // nieuw, nalezen
    's.washing.2': "Vreți să vă spălați pe față fără ajutor?", // nieuw, nalezen
    's.washing.3': "Acum vă pun ciorapii compresivi.", // nieuw, nalezen
    'c.washing.q': "Azi nu vreau să fac duș.", // nieuw, nalezen
    'c.washing.a': "E în regulă. Vă ajut la chiuvetă?", // nieuw, nalezen
    'c.washing': "Întreabă întâi, acoperă și lasă-l să aleagă", // nieuw, nalezen
    'c.washing.b': "Să speli pe cineva e ceva foarte personal. Spune ce urmează să faci și întreabă întâi. Acoperă cu un prosop părțile corpului pe care nu le speli. Închide ușa sau perdeaua. Lasă clientul să aleagă: dușul sau spălatul la chiuvetă, și ce haine să poarte. Lasă clientul să facă ce mai poate face, chiar dacă merge mai încet. Spune un client nu? Nu-l forța. Încearcă mai târziu, oferă altceva și spune-i asistentei.", // nieuw, nalezen
    'c.washing.p': "Ce ați vrea să purtați azi?", // nieuw, nalezen
    'c.washing.s': "O clientă spune că azi nu vrea să fie spălată. Ce faci?", // nieuw, nalezen
    'c.washing.o1': "Accepți și îi spui asistentei.", // nieuw, nalezen
    'c.washing.o2': "O speli oricum: e pe listă.", // nieuw, nalezen
    'c.washing.o3': "Sari peste și nu spui nimic.", // nieuw, nalezen
    'c.washing.w': "Un client are voie să spună nu. Îngrijirea forțată strică încrederea. Asistenta poate vedea de ce și ce se poate face.", // nieuw, nalezen
    'l.observing': "Observat și raportat", // nieuw, nalezen
    'w.rapporteren': "a raporta (a scrie ce ai văzut, în dosarul de îngrijire)", // nieuw, nalezen
    'w.zorgdossier': "dosarul de îngrijire (tot ce ține de îngrijirea unui client)", // nieuw, nalezen
    'w.drukplek': "escara (o pată roșie de la stat mult culcat sau așezat)", // nieuw, nalezen
    'w.huid': "pielea", // nieuw, nalezen
    'w.plassen': "a face pipi", // nieuw, nalezen
    'w.vochtlijst': "fișa de lichide (cât bea un client)", // nieuw, nalezen
    's.observing.1': "Doamna are o pată roșie pe călcâi.", // nieuw, nalezen
    's.observing.2': "Domnul a băut puțin azi.", // nieuw, nalezen
    's.observing.3': "Scriu asta în dosarul de îngrijire.", // nieuw, nalezen
    'c.observing.q': "E ceva deosebit cu doamna Jansen?", // nieuw, nalezen
    'c.observing.a': "Da. Azi aproape că n-a făcut pipi.", // nieuw, nalezen
    'c.observing': "Scrie ce vezi, nu ce crezi", // nieuw, nalezen
    'c.observing.b': "Ce scrii în dosarul de îngrijire citește colegul următor. Scrie fapte: ce ai văzut, auzit sau măsurat, și când. Nu „Mevrouw is lastig”, ci „Mevrouw wilde niet eten en duwde het bord weg.” Scrie în aceeași zi, cu propoziții scurte. Nu știi bine cum să scrii asta în neerlandeză? Spune-i asistentei și scrieți împreună. Uită-te la piele când speli pe cineva: o pată roșie care nu dispare poate fi începutul unei escare. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.observing.p': "Scriu ce am văzut.", // nieuw, nalezen
    'c.observing.s': "O clientă a fost furioasă în timpul spălatului. Trebuie să scrii asta în dosar. Ce faci?", // nieuw, nalezen
    'c.observing.o1': "Scrii ce a spus și ce a făcut, și când.", // nieuw, nalezen
    'c.observing.o2': "Scrii: „Doamnă dificilă, ca întotdeauna.”", // nieuw, nalezen
    'c.observing.o3': "Nu scrii nimic: e normal.", // nieuw, nalezen
    'c.observing.w': "Faptele îi ajută pe colegul următor și pe asistentă să acționeze. O părere nu spune ce s-a întâmplat.", // nieuw, nalezen
    'l.homecare': "Îngrijire la domiciliu", // nieuw, nalezen
    'w.thuiszorg': "îngrijirea la domiciliu (îngrijire în casa clientului)", // nieuw, nalezen
    'w.sleutelkluis': "seiful pentru chei (o cutiuță cu cod, cu cheia casei înăuntru)", // nieuw, nalezen
    'w.zorgplan': "planul de îngrijire (ce îngrijire primește un client și cum)", // nieuw, nalezen
    'w.wijkverpleegkundige': "asistenta medicală comunitară (asistenta echipei de îngrijire la domiciliu)", // nieuw, nalezen
    'w.mantelzorger': "îngrijitorul din familie (o rudă sau un prieten care are grijă de client)", // nieuw, nalezen
    'w.alarmknop': "butonul de alarmă (clientul îl poartă, ca să cheme ajutor)", // nieuw, nalezen
    's.homecare.1': "Întâi sun la ușă. Apoi iau cheia.", // nieuw, nalezen
    's.homecare.2': "Ce scrie în planul de îngrijire?", // nieuw, nalezen
    's.homecare.3': "Azi întârzii un sfert de oră.", // nieuw, nalezen
    'c.homecare.q': "Cine e?", // nieuw, nalezen
    'c.homecare.a': "Bună dimineața, îngrijirea la domiciliu. Pot să intru?", // nieuw, nalezen
    'c.homecare': "În vizită în casa altcuiva", // nieuw, nalezen
    'c.homecare.b': "La îngrijirea la domiciliu lucrezi în casa clientului. Acolo ești în vizită: sună la ușă și spune cine ești, chiar dacă ai cheie. Codul seifului pentru chei e secret. Nu-l scrie niciodată unde îl pot vedea alții și închide mereu la loc seiful pentru chei. Urmează planul de îngrijire: acolo scrie ce faci. E ceva altfel, sau clientul nu deschide ușa? Nu pleca pur și simplu. Sună-ți echipa sau asistenta comunitară. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.homecare.p': "Bună dimineața, sunt de la îngrijirea la domiciliu.", // nieuw, nalezen
    'c.homecare.s': "Suni la ușă. Clienta nu deschide. Mașina ei e acolo. Ce faci?", // nieuw, nalezen
    'c.homecare.o1': "Îți suni echipa și aștepți.", // nieuw, nalezen
    'c.homecare.o2': "Mergi mai departe la clientul următor.", // nieuw, nalezen
    'c.homecare.o3': "Mai suni o dată, apoi pleci.", // nieuw, nalezen
    'c.homecare.w': "Poate clienta a căzut sau e bolnavă. Echipa ta știe ce e de făcut și cine are o cheie.", // nieuw, nalezen
    'l.liftaids': "Mijloace de ridicare și siguranță", // nieuw, nalezen
    'w.glijlaken': "cearșaful de alunecare (un cearșaf neted pentru a muta un client în pat)", // nieuw, nalezen
    'w.tilband': "hamul (se pune sub client, pentru liftul pentru pacienți)", // nieuw, nalezen
    'w.stalift': "liftul de ridicare în picioare (ajută un client să se ridice)", // nieuw, nalezen
    'w.werkhoogte': "înălțimea de lucru (patul la înălțimea șoldurilor tale)", // nieuw, nalezen
    'w.bedhek': "grilajul patului", // nieuw, nalezen
    'w.transferplank': "placa de transfer (o placă pentru a aluneca din pat pe un scaun)", // nieuw, nalezen
    's.liftaids.1': "Pune patul la înălțimea de lucru.", // nieuw, nalezen
    's.liftaids.2': "Are scaunul cu rotile frâna pusă?", // nieuw, nalezen
    's.liftaids.3': "Facem asta în doi.", // nieuw, nalezen
    'c.liftaids.q': "Poți s-o întorci pe doamna fără ajutor?", // nieuw, nalezen
    'c.liftaids.a': "Cu cearșaful de alunecare pot. Îl iau acum.", // nieuw, nalezen
    'c.liftaids': "Lasă aparatul să ridice", // nieuw, nalezen
    'c.liftaids.b': "Înainte să folosești un lift pentru pacienți, verifică-l: e încărcată bateria, hamul are mărimea potrivită și nu e rupt? Pune frâna la pat și la scaunul cu rotile. Ridică patul la înălțimea șoldurilor, ca să nu te apleci. Spune-i clientului fiecare pas. Planul de îngrijire spune de ce mijloc de ridicare are nevoie un client. Un mijloc de ridicare e stricat sau lipsește? Nu te descurca altfel: anunță și cere ajutorul unui coleg. Nu ți s-a arătat cum funcționează un mijloc de ridicare? Întreabă înainte să începi. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.liftaids.p': "Hamul e rupt. Iau altul.", // nieuw, nalezen
    'c.liftaids.s': "Vrei să folosești liftul pentru pacienți. Hamul are o mică ruptură. Ce faci?", // nieuw, nalezen
    'c.liftaids.o1': "Iei alt ham și anunți ruptura.", // nieuw, nalezen
    'c.liftaids.o2': "Îl folosești: ruptura e foarte mică.", // nieuw, nalezen
    'c.liftaids.o3': "Faci un nod la ham.", // nieuw, nalezen
    'c.liftaids.w': "O ruptură mică se poate mări sub greutatea unei persoane. O cădere din lift îl poate răni grav pe client.", // nieuw, nalezen
    'u.shopfloor': "Casa, stocul și închiderea", // nieuw, nalezen
    'l.returns': "Retururi și casa", // nieuw, nalezen
    'w.terugbrengen': "a returna (un produs la magazin)", // nieuw, nalezen
    'w.klantenkaart': "cardul de client (un card pentru strâns puncte)", // nieuw, nalezen
    'w.statiegeld': "garanția (bani înapoi pentru o sticlă sau o doză goală)", // nieuw, nalezen
    'w.kassalade': "sertarul casei (sertarul cu bani)", // nieuw, nalezen
    'w.streepjescode': "codul de bare", // nieuw, nalezen
    'w.tegoedbon': "bonul valoric (o hârtie pe care o folosești mai târziu în magazin)", // nieuw, nalezen
    's.returns.1': "Strângeți puncte cu cardul de client?", // nieuw, nalezen
    's.returns.2': "Codul de bare nu merge.", // nieuw, nalezen
    's.returns.3': "Vreți banii înapoi sau un bon valoric?", // nieuw, nalezen
    'c.returns.q': "Vreau să returnez puloverul ăsta.", // nieuw, nalezen
    'c.returns.a': "Se poate. Mai aveți bonul?", // nieuw, nalezen
    'c.returns': "Retururi: urmează regulile magazinului", // nieuw, nalezen
    'c.returns.b': "Fiecare magazin are regulile lui pentru retururi: câte zile, cu sau fără bon, banii înapoi sau un bon valoric. Învață-le și respectă-le la fiecare client. Ai dubii? Întreabă un coleg sau managerul și nu decide pe cont propriu. La sfârșitul turei, numără sertarul casei, cu un coleg dacă așa se face în magazinul tău. Nu lua niciodată bani din casă pentru tine, nici măcar împrumut pentru un moment. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.returns.p': "Îl întreb repede pe managerul magazinului.", // nieuw, nalezen
    'c.returns.s': "O clientă vrea banii înapoi pentru niște pantofi. Nu are bon. Nu știi regula. Ce faci?", // nieuw, nalezen
    'c.returns.o1': "Îl întrebi pe manager ce e de făcut.", // nieuw, nalezen
    'c.returns.o2': "Îi dai banii înapoi: e drăguță.", // nieuw, nalezen
    'c.returns.o3': "Spui nu și o trimiți acasă.", // nieuw, nalezen
    'c.returns.w': "Managerul știe regulile și poate decide. Atunci clienta primește un răspuns corect, iar tu nu ești de vină.", // nieuw, nalezen
    'l.facing': "Aranjatul în față și produsele reci", // nieuw, nalezen
    'w.facen': "a aranja în față (a trage produsele în față, cu eticheta spre client)", // nieuw, nalezen
    'w.afprijzen': "a reduce prețul (a pune un preț mai mic)", // nieuw, nalezen
    'w.koelvak': "raftul frigorific (raftul rece din magazin)", // nieuw, nalezen
    'w.diepvries': "congelatorul", // nieuw, nalezen
    'w.uitpakken': "a despacheta", // nieuw, nalezen
    'w.schapkaartje': "eticheta de raft (eticheta cu prețul de pe raft)", // nieuw, nalezen
    's.facing.1': "Întâi raftul frigorific, apoi restul.", // nieuw, nalezen
    's.facing.2': "Pune totul frumos în față.", // nieuw, nalezen
    's.facing.3': "Redu prețul la produsele de azi.", // nieuw, nalezen
    'c.facing.q': "Ai terminat cu raftul frigorific?", // nieuw, nalezen
    'c.facing.a': "Aproape. Mai trebuie să aranjez în față.", // nieuw, nalezen
    'c.facing': "Întâi recele, și raftul arată plin", // nieuw, nalezen
    'c.facing.b': "Produsele reci și congelate merg întâi în frigider sau în congelator, înainte de orice. Nu au voie să stea mult la cald. Apoi restul. A aranja în față înseamnă: tragi produsele în față, cu eticheta spre client. Așa raftul arată plin și ordonat. Verifică eticheta de raft: e corect prețul pentru produsul ăsta? Când deschizi cutii, taie dinspre corp în afară și nu prea adânc: poți strica produsul. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.facing.p': "Întâi produsele reci, apoi restul.", // nieuw, nalezen
    'c.facing.s': "Vin un palet cu lapte și un palet cu chipsuri. Nu mai e nimeni cu tine. Ce faci?", // nieuw, nalezen
    'c.facing.o1': "Pui întâi laptele în frigider.", // nieuw, nalezen
    'c.facing.o2': "Începi cu chipsurile: sunt mai ușoare.", // nieuw, nalezen
    'c.facing.o3': "Le lași pe amândouă până vine un coleg.", // nieuw, nalezen
    'c.facing.w': "Laptele care stă prea mult la cald îi poate îmbolnăvi pe clienți și trebuie aruncat. Chipsurile pot aștepta.", // nieuw, nalezen
    'l.shrink': "Pagube și furt", // nieuw, nalezen
    'w.derving': "pierderile (ce pierde magazinul: produse stricate, vechi sau furate)", // nieuw, nalezen
    'w.afschrijven': "a scoate din gestiune (a înregistra un produs ca pierdut)", // nieuw, nalezen
    'w.personeelsaankoop': "cumpărătura de angajat (ce cumperi în propriul magazin)", // nieuw, nalezen
    'w.tassencontrole': "controlul genților", // nieuw, nalezen
    'w.kassamedewerker': "casierul, casiera", // nieuw, nalezen
    'w.winkelwagen': "căruciorul de cumpărături", // nieuw, nalezen
    's.shrink.1': "Borcanul ăsta e spart. Îl scot din gestiune.", // nieuw, nalezen
    's.shrink.2': "Îmi plătesc cumpărăturile la casa unui coleg.", // nieuw, nalezen
    's.shrink.3': "E un cărucior plin lângă ieșire.", // nieuw, nalezen
    'c.shrink.q': "Pot să mă uit puțin în geanta ta?", // nieuw, nalezen
    'c.shrink.a': "Da, sigur. Uite bonul meu.", // nieuw, nalezen
    'c.shrink': "Cumpărăturile tale: plătești ca un client", // nieuw, nalezen
    'c.shrink.b': "Un magazin pierde mult din cauza produselor stricate, a produselor vechi și a furtului. Ajută ca pierderile să rămână mici. Un produs spart sau deteriorat? Nu-l pune înapoi pe raft: scoate-l din gestiune cum se face în magazinul tău. Cumpărăturile tale: plătește-le la casă ca orice client și păstrează bonul. În multe magazine nu ai voie să-ți scanezi tu cumpărăturile: o face un coleg. Nu mânca și nu lua niciodată un produs fără să plătești, nici măcar unul mic. Unele magazine controlează gențile: e o regulă a magazinului, nu un semn de neîncredere în tine. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.shrink.p': "Întâi plătesc și păstrez bonul.", // nieuw, nalezen
    'c.shrink.s': "La sfârșitul turei ți-e foame. Un sandviș expiră azi. Ce faci?", // nieuw, nalezen
    'c.shrink.o1': "Îl întrebi pe manager care e regula.", // nieuw, nalezen
    'c.shrink.o2': "Îl mănânci: oricum se aruncă.", // nieuw, nalezen
    'c.shrink.o3': "Îl iei acasă în geantă.", // nieuw, nalezen
    'c.shrink.w': "În multe magazine, să iei un produs fără să plătești e furt, chiar dacă e vechi. Când întrebi întâi, ești în siguranță.", // nieuw, nalezen
    'l.shopclose': "Închiderea magazinului", // nieuw, nalezen
    'w.sluitingstijd': "ora de închidere", // nieuw, nalezen
    'w.rolluik': "obloanele rulante", // nieuw, nalezen
    'w.kasverschil': "diferența de casă (mai mulți sau mai puțini bani în casă decât ar trebui)", // nieuw, nalezen
    'w.kluis': "seiful (o cutie solidă pentru bani)", // nieuw, nalezen
    'w.overval': "jaful armat (cineva ia bani cu amenințări)", // nieuw, nalezen
    'w.achterdeur': "ușa din spate", // nieuw, nalezen
    's.shopclose.1': "Închidem în zece minute.", // nieuw, nalezen
    's.shopclose.2': "Numărăm casa în doi.", // nieuw, nalezen
    's.shopclose.3': "E încuiată ușa din spate?", // nieuw, nalezen
    'c.shopclose.q': "Pot să intru repede puțin?", // nieuw, nalezen
    'c.shopclose.a': "Îmi pare rău, am închis. Mâine deschidem la opt.", // nieuw, nalezen
    'c.shopclose': "Un jaf: dă-le banii și rămâi în siguranță", // nieuw, nalezen
    'c.shopclose.b': "La ora de închidere sunt mulți bani în casă, așa că magazinele au reguli: număratul în doi, banii duși în seif și ușa din spate încuiată mai întâi. Un jaf (overval)? Viața ta valorează mai mult decât banii. Păstrează-ți calmul, fă ce îți spun și nu te lupta cu ei și nu alerga după ei. Ține minte ce poți: hainele, înălțimea, vocea. Când au plecat: încuie ușa, sună la 112 și nu atinge nimic. După aceea, vorbește despre asta cu managerul sau cu cineva în care ai încredere. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.shopclose.p': "Închidem. Încui ușa.", // nieuw, nalezen
    'c.shopclose.s': "Un bărbat cu un cuțit vrea banii din casa ta. Ce faci?", // nieuw, nalezen
    'c.shopclose.o1': "Îți păstrezi calmul și îi dai banii.", // nieuw, nalezen
    'c.shopclose.o2': "Te lupți cu el: banii nu sunt ai lui.", // nieuw, nalezen
    'c.shopclose.o3': "Fugi în spate și te încui.", // nieuw, nalezen
    'c.shopclose.w': "Dacă te lupți sau fugi, hoțul devine nervos și mai periculos. Banii pot fi înlocuiți. Tu nu.", // nieuw, nalezen
    'u.uitzend': "Munca prin agenție de muncă temporară", // nieuw, nalezen
    'l.hirer': "Agenția și firma utilizatoare", // nieuw, nalezen
    'w.inlener': "firma utilizatoare (firma unde te trimite agenția să lucrezi)", // nieuw, nalezen
    'w.vestiging': "filiala (biroul agenției din orașul tău)", // nieuw, nalezen
    'w.intakegesprek': "interviul de înscriere (prima discuție la agenție)", // nieuw, nalezen
    'w.opstapplaats': "punctul de îmbarcare (unde te ia autobuzul agenției)", // nieuw, nalezen
    'w.bedrijfsregels': "regulile firmei (regulile firmei utilizatoare)", // nieuw, nalezen
    'w.aanspreekpunt': "persoana de contact (persoana la care mergi cu întrebări)", // nieuw, nalezen
    's.hirer.1': "Mâine lucrezi la o firmă utilizatoare nouă.", // nieuw, nalezen
    's.hirer.2': "Cine e aici persoana mea de contact?", // nieuw, nalezen
    's.hirer.3': "Autobuzul pleacă de la punctul de îmbarcare la ora șase.", // nieuw, nalezen
    'c.hirer.q': "Poți să începi mâine la o firmă utilizatoare nouă?", // nieuw, nalezen
    'c.hirer.a': "Da. La ce oră trebuie să fiu acolo?", // nieuw, nalezen
    'c.hirer': "Două firme: cine ce face?", // nieuw, nalezen
    'c.hirer.b': "Lucrezi printr-o agenție (uitzendbureau), dar faci munca la altă firmă: firma utilizatoare (inlener). Agenția e angajatorul tău: contractul, salariul, fluturașul de salariu și zilele libere le ai de la agenție. Firma utilizatoare îți spune ce să faci la locul de muncă și trebuie să aibă grijă ca munca ta să fie sigură, la fel ca pentru angajații ei. Când te îmbolnăvești, anunță cum spune agenția: de multe ori la agenție și la firma utilizatoare. Păstrează în telefon numele și numărul persoanei tale de contact de la agenție. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.hirer.p': "Cine e persoana mea de contact la agenție?", // nieuw, nalezen
    'c.hirer.s': "La firma utilizatoare trebuie să lucrezi cu o mașină. Nu ți-a arătat nimeni cum. Ce faci?", // nieuw, nalezen
    'c.hirer.o1': "Ceri firmei utilizatoare să-ți arate întâi.", // nieuw, nalezen
    'c.hirer.o2': "Încerci: agenția e răspunzătoare.", // nieuw, nalezen
    'c.hirer.o3': "Pleci acasă și nu spui nimic.", // nieuw, nalezen
    'c.hirer.w': "Firma utilizatoare trebuie să-ți arate cum să lucrezi în siguranță, la fel ca angajaților ei. E dreptul tău să ceri asta.", // nieuw, nalezen
    'l.phases': "Contractul tău și fazele", // nieuw, nalezen
    'w.fase': "faza (o etapă în contractul cu agenția: A, B sau C)", // nieuw, nalezen
    'w.uitzendbeding': "clauza de agenție (munca ta se poate opri când firma utilizatoare nu mai are nevoie de tine)", // nieuw, nalezen
    'w.aflopen': "a expira, a se termina (un contract)", // nieuw, nalezen
    'w.doorwerken': "a continua să lucrezi (în același loc)", // nieuw, nalezen
    'w.vastecontract': "contractul pe perioadă nedeterminată (un contract fără dată de sfârșit)", // nieuw, nalezen
    'w.onderbreking': "întreruperea (o perioadă fără muncă între două contracte)", // nieuw, nalezen
    's.phases.1': "În ce fază sunt acum?", // nieuw, nalezen
    's.phases.2': "Contractul meu expiră săptămâna viitoare.", // nieuw, nalezen
    's.phases.3': "Pot să lucrez mai departe aici?", // nieuw, nalezen
    'c.phases.q': "Misiunea ta se termină vineri.", // nieuw, nalezen
    'c.phases.a': "Bine. Aveți altă muncă pentru mine?", // nieuw, nalezen
    'c.phases': "Fazele A, B și C", // nieuw, nalezen
    'c.phases.b': "Cei mai mulți lucrători temporari lucrează după un cao pentru lucrători temporari (uitzend-cao). Acesta are faze. În faza A, munca ta se poate opri de obicei când firma utilizatoare nu mai are nevoie de tine (uitzendbeding). În faza B, primești contracte pe perioadă determinată. În faza C, primești un contract pe perioadă nedeterminată cu agenția. Cât durează fiecare fază scrie în cao-ul tău. Întreabă agenția în ce fază ești și păstrează toate contractele. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.phases.p': "Cât durează faza A pentru mine?", // nieuw, nalezen
    'c.phases.s': "Ai lucrat mult timp pentru aceeași agenție. Primești tot contracte scurte. Ce faci?", // nieuw, nalezen
    'c.phases.o1': "Întrebi agenția în ce fază ești.", // nieuw, nalezen
    'c.phases.o2': "Nimic: munca prin agenție e mereu scurtă.", // nieuw, nalezen
    'c.phases.o3': "Te oprești și cauți altă agenție.", // nieuw, nalezen
    'c.phases.w': "După destul timp, cao-ul îți dă mai multă siguranță. Agenția îți poate spune unde ești, iar sindicatul poate verifica asta cu tine.", // nieuw, nalezen
    'l.deductions': "Salariul și reținerile", // nieuw, nalezen
    'w.inhouding': "reținerea (bani luați din salariul tău)", // nieuw, nalezen
    'w.vastekracht': "angajatul permanent (un angajat al firmei utilizatoare)", // nieuw, nalezen
    'w.vervoer': "transportul (autobuzul sau duba până la muncă)", // nieuw, nalezen
    'w.schriftelijk': "în scris (pe hârtie sau într-un e-mail)", // nieuw, nalezen
    'w.navragen': "a verifica, a se interesa (a afla dacă ceva e corect)", // nieuw, nalezen
    'w.brutoloon': "salariul brut (salariul tău înainte de impozit și rețineri)", // nieuw, nalezen
    's.deductions.1': "Ce e reținerea asta de pe fluturașul meu de salariu?", // nieuw, nalezen
    's.deductions.2': "Câștig la fel ca angajații permanenți?", // nieuw, nalezen
    's.deductions.3': "Vreau să văd asta întâi pe hârtie.", // nieuw, nalezen
    'c.deductions.q': "Îți reținem din salariu costul autobuzului.", // nieuw, nalezen
    'c.deductions.a': "Aveți voie? Verific asta întâi.", // nieuw, nalezen
    'c.deductions': "Ce ți se poate reține din salariu?", // nieuw, nalezen
    'c.deductions.b': "Ai dreptul la cel puțin același salariu ca angajații firmei utilizatoare care fac aceeași muncă. Banii reținuți din salariu (inhouding) trebuie să apară pe fluturașul de salariu. Impozitul și contribuțiile se rețin prin lege. În afară de acestea, agenția poate reține din salariul minim doar două costuri: chiria pentru locuință și prima pentru asigurarea de sănătate, și doar dacă ai fost de acord în scris. Alte costuri, cum ar fi transportul, hainele de lucru, amenzile sau o taxă ca să-ți găsească de lucru, nu au voie să fie reținute din salariul minim. Nu înțelegi o reținere? Cere agenției să ți-o explice în scris. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen
    'c.deductions.p': "Pentru ce e reținerea asta?", // nieuw, nalezen
    'c.deductions.s': "Agenția îți ia bani din salariu pentru autobuzul până la muncă. Câștigi salariul minim. Ce faci?", // nieuw, nalezen
    'c.deductions.o1': "Întrebi: asta nu e permis.", // nieuw, nalezen
    'c.deductions.o2': "Nimic: iei autobuzul în fiecare zi.", // nieuw, nalezen
    'c.deductions.o3': "Nu mai iei autobuzul și mergi pe jos.", // nieuw, nalezen
    'c.deductions.w': "Din salariul minim se pot reține doar chiria și asigurarea de sănătate, și doar cu acordul tău scris. Sindicatul sau Juridisch Loket te pot ajuta.", // nieuw, nalezen
    'l.agencyhome': "Locuința și ajutorul", // nieuw, nalezen
    'w.huisvesting': "locuința (un loc unde stai, aranjat de agenție)", // nieuw, nalezen
    'w.huisgenoot': "colegul de casă (o persoană care locuiește în aceeași casă)", // nieuw, nalezen
    'w.huisregels': "regulile casei (regulile casei unde locuiești)", // nieuw, nalezen
    'w.huismeester': "administratorul locuinței (persoana care are grijă de casă)", // nieuw, nalezen
    'w.meldpunt': "punctul de sesizare (un loc unde poți raporta o problemă)", // nieuw, nalezen
    'w.advies': "sfatul", // nieuw, nalezen
    's.agencyhome.1': "Vreau un contract de închiriere al meu.", // nieuw, nalezen
    's.agencyhome.2': "E mucegai în baie.", // nieuw, nalezen
    's.agencyhome.3': "Sun la sindicat să cer un sfat.", // nieuw, nalezen
    'c.agencyhome.q': "Trebuie să pleci din locuință vineri.", // nieuw, nalezen
    'c.agencyhome.a': "E foarte puțin timp. Întâi cer un sfat.", // nieuw, nalezen
    'c.agencyhome': "Casa ta și unde găsești ajutor", // nieuw, nalezen
    'c.agencyhome.b': "Agenția îți aranjează locuința? Atunci primești un contract de închiriere al tău, în scris, separat de contractul de muncă. Păstrează o copie. Acolo scrie cât plătești și cum și când se termină închirierea. Ți se termină munca? Locuința nu se termină mereu în aceeași zi: cere un sfat înainte să pleci. Locuință nesigură sau foarte aglomerată, amenințări sau salariu prea mic? Cere ajutor: sindicatul, Juridisch Loket (sfaturi juridice gratuite), FairWork sau Nederlandse Arbeidsinspectie, unde poți raporta și anonim. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen
    'c.agencyhome.p': "Îmi puteți da o copie a contractului de închiriere?", // nieuw, nalezen
    'c.agencyhome.s': "Ți se termină munca. Administratorul locuinței zice că trebuie să pleci din casă azi. Ce faci?", // nieuw, nalezen
    'c.agencyhome.o1': "Întrebi întâi sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.agencyhome.o2': "Pleci azi și dormi la un prieten.", // nieuw, nalezen
    'c.agencyhome.o3': "Îți faci bagajul și dormi afară.", // nieuw, nalezen
    'c.agencyhome.w': "Contractul de închiriere are regulile lui, separat de muncă. Un sfat te ajută să știi când chiar trebuie să pleci.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Citești un anunț de angajare", // nieuw, nalezen
    'w.advertentie': "anunțul (un text care oferă un loc de muncă sau un lucru)", // nieuw, nalezen
    'w.eis': "cerința (ce trebuie să ai sau să știi să faci)", // nieuw, nalezen
    'w.parttime': "cu normă parțială (mai puține ore pe săptămână)", // nieuw, nalezen
    'w.fulltime': "cu normă întreagă (o săptămână de lucru completă)", // nieuw, nalezen
    'w.sollicitatiebrief': "scrisoarea de intenție", // nieuw, nalezen
    'w.contactpersoon': "persoana de contact (persoana pe care o poți suna sau căreia îi poți scrie)", // nieuw, nalezen
    's.vacancy.1': "Am văzut anunțul dumneavoastră pe internet.", // nieuw, nalezen
    's.vacancy.2': "Postul e cu normă parțială sau cu normă întreagă?", // nieuw, nalezen
    's.vacancy.3': "Care sunt cerințele?", // nieuw, nalezen
    'c.vacancy.q': "De ce sunați?", // nieuw, nalezen
    'c.vacancy.a': "Sun în legătură cu postul liber. Mai e valabil?", // nieuw, nalezen
    'l.result': "După interviu", // nieuw, nalezen
    'w.aangenomen': "angajat (ai primit postul)", // nieuw, nalezen
    'w.afwijzing': "refuzul (nu ai primit postul)", // nieuw, nalezen
    'w.aanbod': "oferta (îți oferă postul)", // nieuw, nalezen
    'w.proefdag': "ziua de probă (o zi de lucru, ca să încerci)", // nieuw, nalezen
    'w.nabellen': "a suna din nou (ca să întrebi cum merge)", // nieuw, nalezen
    'w.teleurgesteld': "dezamăgit", // nieuw, nalezen
    's.result.1': { m: "Sunteți angajat!", f: "Sunteți angajată!", x: "Ați primit postul!" }, // nieuw, nalezen
    's.result.2': "Am primit un refuz.", // nieuw, nalezen
    's.result.3': "Ziua de probă e plătită?", // nieuw, nalezen
    'c.result.q': "Din păcate, alegem pe altcineva.", // nieuw, nalezen
    'c.result.a': "Păcat. Pot să întreb de ce?", // nieuw, nalezen
    'l.residence': "Actele tale de ședere", // nieuw, nalezen
    'w.verblijfsvergunning': "permisul de ședere", // nieuw, nalezen
    'w.pasfoto': "fotografia tip pașaport", // nieuw, nalezen
    'w.vingerafdruk': "amprenta", // nieuw, nalezen
    'w.geldig': "valabil (încă bun de folosit)", // nieuw, nalezen
    'w.verloopdatum': "data de expirare (ultima zi în care e valabil)", // nieuw, nalezen
    'w.volgnummer': "numărul de ordine (bonul cu rândul tău)", // nieuw, nalezen
    's.residence.1': "Permisul meu de ședere mai e valabil un an.", // nieuw, nalezen
    's.residence.2': "Care e data de expirare a pașaportului tău?", // nieuw, nalezen
    's.residence.3': "Am o programare la primărie.", // nieuw, nalezen
    'c.residence.q': "Permisul dumneavoastră de ședere expiră în curând.", // nieuw, nalezen
    'c.residence.a': "Atunci cer imediat unul nou.", // nieuw, nalezen
    'l.newhome': "Te muți", // nieuw, nalezen
    'w.brievenbus': "cutia poștală", // nieuw, nalezen
    'w.meterstand': "indexul contorului (cifrele de pe contorul de gaz, de curent sau de apă)", // nieuw, nalezen
    'w.naambordje': "plăcuța cu numele (numele tău la ușă)", // nieuw, nalezen
    'w.woning': "locuința (o casă sau un apartament)", // nieuw, nalezen
    'w.doorsturen': "a redirecționa (a trimite mai departe la o adresă nouă)", // nieuw, nalezen
    'w.verhuisdag': "ziua mutării", // nieuw, nalezen
    's.newhome.1': "Mă mut săptămâna viitoare.", // nieuw, nalezen
    's.newhome.2': "Numele meu nu e pe cutia poștală.", // nieuw, nalezen
    's.newhome.3': "Îmi comunic noua adresă.", // nieuw, nalezen
    'c.newhome.q': "Unde locuiești acum?", // nieuw, nalezen
    'c.newhome.a': "Într-o locuință nouă. Uite noua mea adresă.", // nieuw, nalezen
    'l.payparts': "Ce scrie pe fluturașul de salariu", // nieuw, nalezen
    'w.pensioen': "pensia (bani pentru când ești bătrân)", // nieuw, nalezen
    'w.periode': "perioada (săptămânile sau luna pentru care e plata)", // nieuw, nalezen
    'w.bedrag': "suma (de bani)", // nieuw, nalezen
    'w.totaal': "totalul", // nieuw, nalezen
    'w.afkorting': "abrevierea (o formă scurtă a unui cuvânt)", // nieuw, nalezen
    'w.personeelsnummer': "numărul de angajat (numărul tău la firmă)", // nieuw, nalezen
    's.payparts.1': "Ce înseamnă această abreviere?", // nieuw, nalezen
    's.payparts.2': "Suma aceasta merge la pensia mea.", // nieuw, nalezen
    's.payparts.3': "Pentru ce perioadă e salariul acesta?", // nieuw, nalezen
    'c.payparts.q': "Care e numărul tău de angajat?", // nieuw, nalezen
    'c.payparts.a': "E sus, lângă numele meu.", // nieuw, nalezen
    'l.latepay': "Salariu întârziat, lipsă sau în numerar", // nieuw, nalezen
    'w.zwartwerken': "a lucra la negru (fără contract, fără impozit, fără drepturi pe hârtie)", // nieuw, nalezen
    'w.voorschot': "avansul (o parte din salariu înainte de ziua de plată)", // nieuw, nalezen
    'w.nabetaling': "plata restantă (bani pe care îi primești mai târziu, ca să-ți corecteze salariul)", // nieuw, nalezen
    'w.tekort': "lipsa (banii care lipsesc)", // nieuw, nalezen
    'w.betaaldag': "ziua de plată", // nieuw, nalezen
    'w.bankafschrift': "extrasul de cont (o listă cu banii care intră și ies)", // nieuw, nalezen
    's.latepay.1': "Salariul meu a întârziat.", // nieuw, nalezen
    's.latepay.2': "Nu lucrez la negru.", // nieuw, nalezen
    's.latepay.3': "Pot primi un avans?", // nieuw, nalezen
    'c.latepay.q': "Banii care lipsesc îi primești luna viitoare.", // nieuw, nalezen
    'c.latepay.a': "Pot primi asta pe hârtie?", // nieuw, nalezen
    'l.holiday': "Îți planifici concediul", // nieuw, nalezen
    'w.saldo': "soldul (câte zile mai ai)", // nieuw, nalezen
    'w.goedkeuren': "a aproba (a spune da)", // nieuw, nalezen
    'w.verlopen': "a expira (nu mai e valabil)", // nieuw, nalezen
    'w.zomervakantie': "vacanța de vară", // nieuw, nalezen
    'w.drukte': "perioada aglomerată (mult de lucru)", // nieuw, nalezen
    'w.aanvraag': "cererea (ceri ceva, des pe un formular)", // nieuw, nalezen
    's.holiday.1': "Câte zile de concediu mai am?", // nieuw, nalezen
    's.holiday.2': "Concediul meu e aprobat.", // nieuw, nalezen
    's.holiday.3': "Completez formularul.", // nieuw, nalezen
    'c.holiday.q': "Vara e aglomerat. Poți pleca în concediu în mai?", // nieuw, nalezen
    'c.holiday.a': "Aș prefera în iulie. Atunci familia mea e acasă.", // nieuw, nalezen
    'l.special': "Zile libere speciale", // nieuw, nalezen
    'w.bruiloft': "nunta", // nieuw, nalezen
    'w.begrafenis': "înmormântarea", // nieuw, nalezen
    'w.geboorteverlof': "concediul de naștere (pentru partener, când se naște un copil)", // nieuw, nalezen
    'w.bijzonderverlof': "concediul special (de exemplu pentru o nuntă sau o înmormântare)", // nieuw, nalezen
    'w.kerstdagen': "Crăciunul (cele două zile de Crăciun)", // nieuw, nalezen
    'w.vrijvragen': "a cere o zi liberă", // nieuw, nalezen
    's.special.1': "Fratele meu se căsătorește. Pot cere o zi liberă?", // nieuw, nalezen
    's.special.2': "Unchiul meu a murit. Înmormântarea e vineri.", // nieuw, nalezen
    's.special.3': "Trebuie să lucrez de Crăciun?", // nieuw, nalezen
    'c.special.q': "Felicitări pentru copil! Îți iei concediu de naștere?", // nieuw, nalezen
    'c.special.a': "Da, prima săptămână stau acasă.", // nieuw, nalezen
    'l.unwell': "Nu te simți bine", // nieuw, nalezen
    'w.hoofdpijn': "durerea de cap", // nieuw, nalezen
    'w.griep': "gripa", // nieuw, nalezen
    'w.verkouden': "răcit (ai o răceală)", // nieuw, nalezen
    'w.nietlekker': "nu prea bine (te simți puțin rău)", // nieuw, nalezen
    'w.naarhuis': "a merge acasă", // nieuw, nalezen
    'w.uitzieken': "a sta acasă până te faci bine", // nieuw, nalezen
    's.unwell.1': "Nu mă simt bine.", // nieuw, nalezen
    's.unwell.2': { m: "Mă doare capul și sunt răcit.", f: "Mă doare capul și sunt răcită.", x: "Mă doare capul și am o răceală." }, // nieuw, nalezen
    's.unwell.3': { m: "Merg acasă. Sunt bolnav.", f: "Merg acasă. Sunt bolnavă.", x: "Merg acasă. M-am îmbolnăvit." }, // nieuw, nalezen
    'c.unwell.q': { m: "Ești palid. Te simți bine?", f: "Ești palidă. Te simți bine?", x: "Ai fața palidă. Te simți bine?" }, // nieuw, nalezen
    'c.unwell.a': "Nu, nu mă simt bine. Pot să merg acasă?", // nieuw, nalezen
    'l.injury': "Când munca te rănește", // nieuw, nalezen
    'w.bedrijfsongeval': "accidentul de muncă", // nieuw, nalezen
    'w.verzekering': "asigurarea", // nieuw, nalezen
    'w.schadevergoeding': "despăgubirea (bani pentru pagubă)", // nieuw, nalezen
    'w.oorzaak': "cauza (de ce s-a întâmplat)", // nieuw, nalezen
    'w.letsel': "vătămarea (răul făcut corpului tău)", // nieuw, nalezen
    'w.verklaring': "declarația (ce scrii sau spui despre ce s-a întâmplat)", // nieuw, nalezen
    's.injury.1': "Am avut un accident de muncă.", // nieuw, nalezen
    's.injury.2': "Care a fost cauza?", // nieuw, nalezen
    's.injury.3': "Colegul meu a văzut ce s-a întâmplat.", // nieuw, nalezen
    'c.injury.q': "Vrei să-ți scrii declarația aici?", // nieuw, nalezen
    'c.injury.a': "Da. Pot primi o copie?", // nieuw, nalezen
    'l.debt': "O datorie la șef sau la agenție", // nieuw, nalezen
    'w.lening': "împrumutul", // nieuw, nalezen
    'w.lenen': "a împrumuta (a lua sau a da cu împrumut)", // nieuw, nalezen
    'w.vastzitten': "a fi prins (nu poți pleca)", // nieuw, nalezen
    'w.tussenpersoon': "intermediarul (cineva care îți aranjează munca pe bani)", // nieuw, nalezen
    'w.rente': "dobânda (bani în plus pe care îi plătești la un împrumut)", // nieuw, nalezen
    'w.belofte': "promisiunea", // nieuw, nalezen
    's.debt.1': "A trebuit să plătesc pentru postul acesta.", // nieuw, nalezen
    's.debt.2': "Datoria mea crește în fiecare lună.", // nieuw, nalezen
    's.debt.3': "Intermediarul are pașaportul meu.", // nieuw, nalezen
    'c.debt.q': "Poți pleca doar după ce ți-ai plătit datoria.", // nieuw, nalezen
    'c.debt.a': "Asta nu e voie. Cer ajutor.", // nieuw, nalezen
    'l.inspection': "Inspecția și alte ajutoare", // nieuw, nalezen
    'w.inspectie': "inspecția (oameni care verifică dacă munca e corectă și sigură)", // nieuw, nalezen
    'w.controle': "controlul", // nieuw, nalezen
    'w.slachtoffer': "victima", // nieuw, nalezen
    'w.mensenhandel': "traficul de persoane (oamenii sunt folosiți și vânduți pentru muncă sau sex)", // nieuw, nalezen
    'w.vertrouwen': "a avea încredere", // nieuw, nalezen
    'w.tolk': "interpretul", // nieuw, nalezen
    's.inspection.1': "Mâine vine inspecția.", // nieuw, nalezen
    's.inspection.2': "Pot avea un interpret?", // nieuw, nalezen
    's.inspection.3': "Nu am încredere în omul acesta.", // nieuw, nalezen
    'c.inspection.q': "Vrei să vorbești cu inspecția?", // nieuw, nalezen
    'c.inspection.a': "Da, dar șeful meu nu are voie să audă.", // nieuw, nalezen
    'l.carpool': "Mașina în comun și duba de lucru", // nieuw, nalezen
    'w.carpoolen': "a merge cu mașina în comun (mergeți împreună la lucru, cu o singură mașină)", // nieuw, nalezen
    'w.meerijden': "a merge cu cineva (în mașina altcuiva)", // nieuw, nalezen
    'w.gordel': "centura de siguranță", // nieuw, nalezen
    'w.instappen': "a urca (într-o mașină, un autobuz sau un tren)", // nieuw, nalezen
    'w.uitstappen': "a coborî (dintr-o mașină, un autobuz sau un tren)", // nieuw, nalezen
    'w.bijrijder': "pasagerul din față (lângă șofer)", // nieuw, nalezen
    's.carpool.1': "Pot să merg cu tine?", // nieuw, nalezen
    's.carpool.2': "Pune-ți centura.", // nieuw, nalezen
    's.carpool.3': "Eu cobor la gară.", // nieuw, nalezen
    'c.carpool.q': "Cine conduce mâine?", // nieuw, nalezen
    'c.carpool.a': "Conduc eu. Te iau la ora șase.", // nieuw, nalezen
    'l.train': "Trenul, întârzierile și când ajungi târziu", // nieuw, nalezen
    'w.station': "gara", // nieuw, nalezen
    'w.perron': "peronul (de unde urci în tren)", // nieuw, nalezen
    'w.overstappen': "a schimba (trenul sau autobuzul)", // nieuw, nalezen
    'w.uitvallen': "a fi anulat (trenul nu mai circulă)", // nieuw, nalezen
    'w.kaartje': "biletul", // nieuw, nalezen
    'w.reisplanner': "planificatorul de călătorie (o aplicație care arată trenurile și autobuzele)", // nieuw, nalezen
    's.train.1': "Trenul meu e anulat.", // nieuw, nalezen
    's.train.2': "Trebuie să schimb o dată.", // nieuw, nalezen
    's.train.3': "De la ce peron pleacă trenul?", // nieuw, nalezen
    'c.train.q': "De ce ai întârziat atât?", // nieuw, nalezen
    'c.train.a': "Trenul meu a fost anulat. Ți-am trimis un mesaj.", // nieuw, nalezen
    'l.checklist': "Verifică înainte să termini", // nieuw, nalezen
    'w.checklist': "lista de verificare (o listă cu lucruri de verificat)", // nieuw, nalezen
    'w.afvinken': "a bifa (a pune o bifă lângă o sarcină)", // nieuw, nalezen
    'w.overdoen': "a face din nou", // nieuw, nalezen
    'w.compleet': "complet (nu lipsește nimic)", // nieuw, nalezen
    'w.vergeten': "a uita", // nieuw, nalezen
    'w.resultaat': "rezultatul", // nieuw, nalezen
    's.checklist.1': "Bifez totul pe lista de verificare.", // nieuw, nalezen
    's.checklist.2': "Comanda e completă?", // nieuw, nalezen
    's.checklist.3': "Trebuie să fac asta din nou.", // nieuw, nalezen
    'c.checklist.q': "N-ai uitat nimic?", // nieuw, nalezen
    'c.checklist.a': "Mă mai uit o dată pe lista de verificare.", // nieuw, nalezen
    'l.leavesite': "Când pleci de la locul de muncă", // nieuw, nalezen
    'w.terugzetten': "a pune la loc (în locul lui)", // nieuw, nalezen
    'w.vegen': "a mătura", // nieuw, nalezen
    'w.vloer': "podeaua", // nieuw, nalezen
    'w.uitdoen': "a stinge, a opri (lumina, o mașină)", // nieuw, nalezen
    'w.alslaatste': "ultimul, ultima", // nieuw, nalezen
    'w.achterlaten': "a lăsa în urmă (cum îți lași locul)", // nieuw, nalezen
    's.leavesite.1': "Îmi las locul curat și ordonat.", // nieuw, nalezen
    's.leavesite.2': "Cine pleacă ultimul?", // nieuw, nalezen
    's.leavesite.3': "Stinge lumina și închide ușa.", // nieuw, nalezen
    'c.leavesite.q': { m: "Pleci tu ultimul azi?", f: "Pleci tu ultima azi?", x: "Azi închizi tu?" }, // nieuw, nalezen
    'c.leavesite.a': "Da. Opresc tot și încui ușa.", // nieuw, nalezen
    'l.stagedays': "În fiecare zi la stagiu", // nieuw, nalezen
    'w.stageplek': "locul de stagiu (firma unde faci stagiul)", // nieuw, nalezen
    'w.afwezig': "absent (nu ești acolo)", // nieuw, nalezen
    'w.aanwezig': "prezent (ești acolo)", // nieuw, nalezen
    'w.stagevergoeding': "indemnizația de stagiu (bani pe care îi poți primi la stagiu)", // nieuw, nalezen
    'w.begeleiding': "îndrumarea (ajutor de la îndrumătorul tău)", // nieuw, nalezen
    'w.leerling': "elevul (la școală)", // nieuw, nalezen
    's.stagedays.1': { m: "Mâine lipsesc. Sunt bolnav.", f: "Mâine lipsesc. Sunt bolnavă.", x: "Mâine lipsesc. M-am îmbolnăvit." }, // nieuw, nalezen
    's.stagedays.2': "Primesc indemnizație de stagiu?", // nieuw, nalezen
    's.stagedays.3': "La locul de stagiu lucrez patru zile.", // nieuw, nalezen
    'c.stagedays.q': "De ce ai lipsit ieri?", // nieuw, nalezen
    'c.stagedays.a': { m: "Am fost bolnav. Am sunat la școală și la firmă.", f: "Am fost bolnavă. Am sunat la școală și la firmă.", x: "Mi-a fost rău. Am sunat la școală și la firmă." }, // nieuw, nalezen
    'l.stageend': "Sfârșitul stagiului", // nieuw, nalezen
    'w.eindgesprek': "discuția finală (la sfârșitul stagiului)", // nieuw, nalezen
    'w.geslaagd': "promovat (ai făcut destul de bine)", // nieuw, nalezen
    'w.gezakt': "picat (nu destul de bine de data asta)", // nieuw, nalezen
    'w.herkansing': "reexaminarea (o nouă șansă)", // nieuw, nalezen
    'w.bedanken': "a mulțumi", // nieuw, nalezen
    'w.trakteren': "a face cinste (aduci ceva bun de mâncare pentru toți)", // nieuw, nalezen
    's.stageend.1': "Mâine am discuția finală.", // nieuw, nalezen
    's.stageend.2': "Am promovat stagiul.", // nieuw, nalezen
    's.stageend.3': "Vreau să le mulțumesc tuturor.", // nieuw, nalezen
    'c.stageend.q': "Ultima ta zi! Ce faci acum?", // nieuw, nalezen
    'c.stageend.a': "Întâi îmi iau diploma. Apoi îmi caut de lucru.", // nieuw, nalezen
    'l.neighbours': "Cartierul tău", // nieuw, nalezen
    'w.buurt': "cartierul", // nieuw, nalezen
    'w.buurthuis': "centrul comunitar (o casă pentru activități în cartierul tău)", // nieuw, nalezen
    'w.straat': "strada", // nieuw, nalezen
    'w.kennismaken': "a face cunoștință (a întâlni pe cineva pentru prima dată)", // nieuw, nalezen
    'w.overlast': "deranjul (zgomot sau probleme pentru alții)", // nieuw, nalezen
    'w.buurvrouw': "vecina (o femeie)", // nieuw, nalezen
    's.neighbours.1': "Locuiesc de puțin timp pe strada asta.", // nieuw, nalezen
    's.neighbours.2': "La bibliotecă exersez olandeza.", // nieuw, nalezen
    's.neighbours.3': "Scuze pentru deranj.", // nieuw, nalezen
    'c.neighbours.q': "Bună, sunt noua ta vecină.", // nieuw, nalezen
    'c.neighbours.a': "Mă bucur să te cunosc! Eu sunt Ali.", // nieuw, nalezen
    'l.join': "Școala, sportul și voluntariatul", // nieuw, nalezen
    'w.vrijwilliger': "voluntarul (cineva care ajută fără plată)", // nieuw, nalezen
    'w.vrijwilligerswerk': "voluntariatul", // nieuw, nalezen
    'w.sportclub': "clubul sportiv", // nieuw, nalezen
    'w.ouderavond': "ședința cu părinții (la școală)", // nieuw, nalezen
    'w.leraar': "profesorul", // nieuw, nalezen
    'w.basisschool': "școala primară", // nieuw, nalezen
    's.join.1': "Fiul meu merge la școala primară.", // nieuw, nalezen
    's.join.2': "Joc fotbal la un club sportiv.", // nieuw, nalezen
    's.join.3': "Sâmbăta fac voluntariat.", // nieuw, nalezen
    'c.join.q': "Vii la ședința cu părinții?", // nieuw, nalezen
    'c.join.a': "Da. Aș vrea să vorbesc cu profesorul.", // nieuw, nalezen
    'l.workphotos': "Fotografii și date", // nieuw, nalezen
    'w.gezicht': "fața", // nieuw, nalezen
    'w.klantgegevens': "datele clienților (numele, adresa, telefonul unui client)", // nieuw, nalezen
    'w.onlinezetten': "a pune online", // nieuw, nalezen
    'w.wissen': "a șterge", // nieuw, nalezen
    'w.werktelefoon': "telefonul de serviciu", // nieuw, nalezen
    'w.bestand': "fișierul (pe calculator)", // nieuw, nalezen
    's.workphotos.1': "Nu pun online poze de la lucru.", // nieuw, nalezen
    's.workphotos.2': "Șterg poza imediat.", // nieuw, nalezen
    's.workphotos.3': "Fața lui apare în poză.", // nieuw, nalezen
    'c.workphotos.q': "Pot să-ți fac o poză? Pentru internet.", // nieuw, nalezen
    'c.workphotos.a': "Nu, mai bine nu. Nu vreau să apar online.", // nieuw, nalezen
    'l.device': "Un telefon și un calculator sigure", // nieuw, nalezen
    'w.update': "actualizarea (o versiune nouă a unei aplicații sau a unui program)", // nieuw, nalezen
    'w.virus': "virusul (un program care îți strică calculatorul)", // nieuw, nalezen
    'w.wifi': "wifi-ul", // nieuw, nalezen
    'w.usbstick': "stickul USB", // nieuw, nalezen
    'w.installeren': "a instala", // nieuw, nalezen
    'w.openbaar': "public (pentru toată lumea)", // nieuw, nalezen
    's.device.1': "Instalez actualizarea diseară.", // nieuw, nalezen
    's.device.2': "Stickul ăsta USB era pe jos.", // nieuw, nalezen
    's.device.3': "Wifi-ul ăsta e sigur?", // nieuw, nalezen
    'c.device.q': "Pot să pun aplicația asta pe telefonul de serviciu?", // nieuw, nalezen
    'c.device.a': "Întreabă întâi la departamentul IT.", // nieuw, nalezen
    'c.vacancy': "Sună sau trimite un mesaj scurt", // nieuw, nalezen
    'c.vacancy.b': "Citește bine anunțul: orele, locul și ce trebuie să ai, de exemplu permis de conducere sau un certificat. Nu trebuie să ai totul: dacă ai aproape tot, încearcă oricum. Sună sau scrie un mesaj scurt: spune-ți numele, pentru ce post și de ce îl vrei. Nu plăti niciodată bani ca să primești un loc de muncă și nu trimite niciodată codurile tale de acces pentru un anunț.", // nieuw, nalezen
    'c.vacancy.p': "Nu am diplomă, dar am multă experiență.", // nieuw, nalezen
    'c.vacancy.s': "Un anunț cere 3 ani de experiență. Tu ai 2 ani. Ce faci?", // nieuw, nalezen
    'c.vacancy.o1': "Aplici oricum și spui ce știi să faci.", // nieuw, nalezen
    'c.vacancy.o2': "Nu aplici: ai prea puțină experiență.", // nieuw, nalezen
    'c.vacancy.o3': "Scrii 3 ani: nu verifică nimeni.", // nieuw, nalezen
    'c.vacancy.w': "Un anunț cere des mai mult decât e nevoie de fapt pentru post. Sinceritatea despre ce știi să faci merge mai bine decât minciuna.", // nieuw, nalezen
    'c.result': "Un nu nu e sfârșitul", // nieuw, nalezen
    'c.result.b': "N-ai aflat nimic după o săptămână? Poți suna din nou și întreba politicos. Ai primit un nu? Întreabă ce poți face mai bine data viitoare: mulți angajatori îți spun. Apoi încearcă din nou: majoritatea oamenilor primesc întâi câteva refuzuri. Ai primit un da? Întreabă când începi și cere-ți contractul înainte să începi. Te-au chemat la o zi de probă? Întreabă dinainte cât durează și dacă e plătită.", // nieuw, nalezen
    'c.result.p': "Ce pot face mai bine data viitoare?", // nieuw, nalezen
    'c.result.s': "După un interviu de angajare, primești un nu pe e-mail. Ce faci?", // nieuw, nalezen
    'c.result.o1': "Întrebi politicos ce poți face mai bine.", // nieuw, nalezen
    'c.result.o2': "Le răspunzi că au greșit.", // nieuw, nalezen
    'c.result.o3': "Nu mai aplici: nu merge.", // nieuw, nalezen
    'c.result.w': "Feedbackul te ajută la următorul interviu. O întrebare politicoasă lasă și o impresie bună despre tine.", // nieuw, nalezen
    'c.residence': "Actele tale: verifică data", // nieuw, nalezen
    'c.residence.b': "Ești din UE? Atunci poți locui și lucra aici cu un pașaport sau o carte de identitate valabile: nu ai nevoie de permis. Ești din afara UE? Atunci ai nevoie de un permis de ședere valabil. Pe card scrie dacă ai voie să lucrezi. Verifică data de expirare a actelor tale. Cere din timp un permis nou la IND: cu luni înainte de dată, nu în ultima săptămână. Păstrează o copie a fiecărei scrisori. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.residence.p': "Permisul meu expiră curând. Ce trebuie să fac?", // nieuw, nalezen
    'c.residence.s': "Permisul tău de ședere expiră peste două luni. Ai foarte mult de lucru. Ce faci?", // nieuw, nalezen
    'c.residence.o1': "Ceri acum unul nou.", // nieuw, nalezen
    'c.residence.o2': "Aștepți până în ultima săptămână.", // nieuw, nalezen
    'c.residence.o3': "Nu faci nimic: munca e pe primul loc.", // nieuw, nalezen
    'c.residence.w': "Fără un permis valabil, s-ar putea să nu ai voie să lucrezi. Un permis nou durează, așa că începi din timp.", // nieuw, nalezen
    'c.newhome': "Adresă nouă? Spune-le tuturor", // nieuw, nalezen
    'c.newhome.b': "Te muți? Anunță repede noua adresă la primărie (gemeente): asta e obligatoriu. Anunță și angajatorul, banca, asigurarea și medicul. Pune-ți numele pe cutia poștală, altfel scrisorile nu ajung la tine. În ziua mutării, notează indexurile contoarelor și fă-le poze. Așa plătești doar ce ai consumat.", // nieuw, nalezen
    'c.newhome.p': "M-am mutat. Aceasta e noua mea adresă.", // nieuw, nalezen
    'c.newhome.s': "Te-ai mutat acum două săptămâni. Scrisorile tale merg încă la adresa veche. Ce faci?", // nieuw, nalezen
    'c.newhome.o1': "Dai acum noua adresă la primărie (gemeente).", // nieuw, nalezen
    'c.newhome.o2': "Aștepți: poșta te găsește.", // nieuw, nalezen
    'c.newhome.o3': "Îl rogi pe fostul vecin să-ți păstreze scrisorile.", // nieuw, nalezen
    'c.newhome.w': "Scrisorile importante, ca amenzile sau scrisorile de la fisc, au termene. Când merg la o adresă greșită, le poți rata.", // nieuw, nalezen
    'c.payparts': "Citește fiecare rând", // nieuw, nalezen
    'c.payparts.b': "Fluturașul de salariu are multe rânduri și cuvinte scurte. Sus: numele tău, numărul de angajat și perioada. Apoi salariul brut, orele tale și eventualele plăți în plus. Apoi ce se scade: impozitul și contribuțiile. La multe locuri de muncă, tu și angajatorul plătiți amândoi pentru pensia ta: partea ta o vezi pe fluturaș. Jos: salariul net. Nu înțelegi un rând? Roagă-l pe angajator să ți-l explice. Păstrează toate fluturașele de salariu. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.payparts.p': "Ce înseamnă rândul acesta de pe fluturașul meu de salariu?", // nieuw, nalezen
    'c.payparts.s': "Pe fluturașul tău, niște bani merg la „pensioen”. Nu știi de ce. Ce faci?", // nieuw, nalezen
    'c.payparts.o1': "Îl rogi pe angajator să-ți explice.", // nieuw, nalezen
    'c.payparts.o2': "Ceri să se oprească, ca să primești mai mulți bani acum.", // nieuw, nalezen
    'c.payparts.o3': "Nu-i dai atenție: oricum nu rămâi atât de mult.", // nieuw, nalezen
    'c.payparts.w': "Banii de pensie sunt puși deoparte pentru tine, pentru mai târziu. De obicei îi păstrezi când schimbi locul de muncă. Dacă întrebi, știi ce e al tău.", // nieuw, nalezen
    'c.latepay': "Salariu întârziat sau în numerar? Acționează la timp", // nieuw, nalezen
    'c.latepay.b': "Salariul trebuie să vină în ziua din contractul tău sau din cao. A întârziat sau lipsesc bani? Întreabă în scris, de exemplu într-un e-mail. Păstrează extrasele de cont și propria ta listă de ore. Primești banii cash, fără fluturaș de salariu? Atunci e adesea muncă la negru (zwart): orele tale nu sunt înregistrate, iar mai târziu e greu să-ți dovedești munca sau să primești o indemnizație. Cere un fluturaș de salariu. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen
    'c.latepay.p': "Salariul meu n-a intrat încă. Când vine?", // nieuw, nalezen
    'c.latepay.s': "Șeful tău spune: „De acum te plătesc cash. Fără fluturaș, e mai simplu.” Ce faci?", // nieuw, nalezen
    'c.latepay.o1': "Spui nu și ceri un fluturaș de salariu.", // nieuw, nalezen
    'c.latepay.o2': "Spui da: cash înseamnă mai mulți bani.", // nieuw, nalezen
    'c.latepay.o3': "Spui da, dar doar luna asta.", // nieuw, nalezen
    'c.latepay.w': "Fără fluturaș de salariu, munca ta nu e pe hârtie. Atunci poți pierde drepturi, de exemplu la o indemnizație când îți pierzi locul de muncă.", // nieuw, nalezen
    'c.holiday': "Zilele tale libere: folosește-le la timp", // nieuw, nalezen
    'c.holiday.b': "Verifică câte zile libere mai ai: adesea scrie pe fluturașul de salariu sau în aplicație. Planifică-ți concediul din timp și cere-l în scris. Zilele libere prin lege expiră la 6 luni după sfârșitul anului, în afară de cazul în care nu ai putut să le iei. Zilele în plus din cao sau din contract rămân valabile mai mult, de obicei 5 ani. Ți se termină locul de muncă? Atunci primești bani pentru zilele pe care nu le-ai luat. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.holiday.p': "Vreau să-mi iau zilele de concediu până la sfârșitul anului.", // nieuw, nalezen
    'c.holiday.s': "E noiembrie. Mai ai 12 zile libere din anul acesta. Șeful tău nu spune nimic despre ele. Ce faci?", // nieuw, nalezen
    'c.holiday.o1': "Întrebi când le poți lua.", // nieuw, nalezen
    'c.holiday.o2': "Nu faci nimic: rămân pentru totdeauna.", // nieuw, nalezen
    'c.holiday.o3': "Le uiți: oricum s-au dus.", // nieuw, nalezen
    'c.holiday.w': "Zilele libere sunt pentru odihnă și pot expira. Când întrebi la timp, încă le poți planifica.", // nieuw, nalezen
    'c.special': "O nuntă, o înmormântare, un copil", // nieuw, nalezen
    'c.special.b': { m: "S-a născut copilul tău și tu ești partenerul? Atunci primești 1 săptămână de concediu de naștere plătit, în primele 4 săptămâni. Cao-ul îți dă adesea concediu special (bijzonder verlof) pentru nunta ta sau pentru o înmormântare în familie. Sărbătorile legale, cum e Crăciunul: nicio lege nu spune că ai liber. Contractul tău sau cao-ul spune dacă ai liber sau dacă primești plată în plus. Cere-ți zilele libere din timp. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", f: "S-a născut copilul tău și tu ești partenera? Atunci primești 1 săptămână de concediu de naștere plătit, în primele 4 săptămâni. Cao-ul îți dă adesea concediu special (bijzonder verlof) pentru nunta ta sau pentru o înmormântare în familie. Sărbătorile legale, cum e Crăciunul: nicio lege nu spune că ai liber. Contractul tău sau cao-ul spune dacă ai liber sau dacă primești plată în plus. Cere-ți zilele libere din timp. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", x: "Partenera sau partenerul tău a născut un copil? Atunci primești 1 săptămână de concediu de naștere plătit, în primele 4 săptămâni. Cao-ul îți dă adesea concediu special (bijzonder verlof) pentru nunta ta sau pentru o înmormântare în familie. Sărbătorile legale, cum e Crăciunul: nicio lege nu spune că ai liber. Contractul tău sau cao-ul spune dacă ai liber sau dacă primești plată în plus. Cere-ți zilele libere din timp. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket." }, // nieuw, nalezen
    'c.special.p': "Soția mea va avea un copil. Cum cer concediul de naștere?", // nieuw, nalezen
    'c.special.s': "Tatăl tău a murit în străinătate. Vrei să mergi la înmormântare. Ce faci?", // nieuw, nalezen
    'c.special.o1': "Îi spui angajatorului și întrebi ce concediu poți primi.", // nieuw, nalezen
    'c.special.o2': "Pur și simplu pleci și le spui când te întorci.", // nieuw, nalezen
    'c.special.o3': "Nu mergi: nu mai ai zile libere.", // nieuw, nalezen
    'c.special.w': "Angajatorul înțelege că asta e foarte important. Multe cao-uri dau concediu special și poți folosi și zilele tale libere.", // nieuw, nalezen
    'c.unwell': "Te îmbolnăvești la lucru sau în concediu", // nieuw, nalezen
    'c.unwell.b': "Ți-e rău la lucru? Spune-i șefului înainte să pleci acasă: acesta e anunțul tău de boală. Nu pleca pur și simplu. Te-ai îmbolnăvit în concediu? Anunță-l pe angajator la fel ca acasă, și din străinătate. Atunci zilele de boală de obicei nu se socotesc zile de concediu. S-ar putea să ai nevoie de o adeverință de la un medic de acolo. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.unwell.p': "M-am îmbolnăvit în concediu.", // nieuw, nalezen
    'c.unwell.s': "Ești în concediu în țara ta. Faci gripă și stai în pat 5 zile. Ce faci?", // nieuw, nalezen
    'c.unwell.o1': "Îl anunți imediat pe angajator.", // nieuw, nalezen
    'c.unwell.o2': "Nimic: oricum ești în concediu.", // nieuw, nalezen
    'c.unwell.o3': "Îi spui angajatorului când te întorci.", // nieuw, nalezen
    'c.unwell.w': "Când anunți la timp, zilele de boală de obicei nu se socotesc zile de concediu. Atunci poți folosi acele zile mai târziu.", // nieuw, nalezen
    'c.injury': "Accident la lucru: notează totul", // nieuw, nalezen
    'c.injury.b': "Te-ai rănit la lucru? Notează ce s-a întâmplat, când și unde, și cine a văzut. Fă poze și păstrează toate actele de la medic. Cere o copie a raportului de accident. Te-ai rănit pentru că munca nu era sigură? Atunci angajatorul trebuie de obicei să-ți plătească paguba. Nu trebuie să dovedești tu că a fost vina lui: angajatorul trebuie să arate că a făcut destul pentru siguranța ta. Cere un sfat înainte să semnezi ceva. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.", // nieuw, nalezen
    'c.injury.p': "Pot primi o copie a raportului?", // nieuw, nalezen
    'c.injury.s': "Te rănești la mână la o mașină fără apărătoare. Mai târziu, șeful îți cere să semnezi o hârtie: „A fost vina mea.” Ce faci?", // nieuw, nalezen
    'c.injury.o1': "Nu semnezi. Ceri întâi un sfat.", // nieuw, nalezen
    'c.injury.o2': "Semnezi, ca să nu fie probleme.", // nieuw, nalezen
    'c.injury.o3': "Semnezi, dar păstrezi o poză cu hârtia.", // nieuw, nalezen
    'c.injury.w': "Ce semnezi poate conta mai târziu, de exemplu când ceri despăgubiri. Cere întâi sfatul sindicatului sau al Juridisch Loket.", // nieuw, nalezen
    'c.debt': "O datorie care nu se termină niciodată", // nieuw, nalezen
    'c.debt.b': "În Olanda, o agenție nu are voie să-ți ceară bani ca să-ți găsească un loc de muncă. A trebuit să împrumuți bani pentru drum sau pentru post, iar datoria tot crește? Trebuie să rămâi până o plătești? Acesta e un semn de exploatare. O datorie nu înseamnă niciodată că trebuie să continui să lucrezi: ai voie să te oprești. Păstrează fiecare hârtie și fiecare mesaj despre datorie. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen
    'c.debt.p': "Cât mai am de plătit? Vreau asta pe hârtie.", // nieuw, nalezen
    'c.debt.s': "Agenția ți-a plătit biletul de autobuz. Acum îți ia bani din salariu în fiecare săptămână, iar datoria nu se micșorează. Ce faci?", // nieuw, nalezen
    'c.debt.o1': "Ceri o listă pe hârtie și cauți ajutor.", // nieuw, nalezen
    'c.debt.o2': "Lucrezi mai multe ore ca s-o plătești mai repede.", // nieuw, nalezen
    'c.debt.o3': "Nu spui nimic: agenția te-a ajutat.", // nieuw, nalezen
    'c.debt.w': "O datorie care nu scade nu te lasă să pleci. Cu lista, sindicatul sau FairWork pot verifica dacă e corect.", // nieuw, nalezen
    'c.inspection': "Inspecția e acolo pentru tine", // nieuw, nalezen
    'c.inspection.b': "Nederlandse Arbeidsinspectie verifică dacă munca e sigură și corectă: plata, orele și exploatarea. Inspectorii pot veni la locul tău de muncă și pot vorbi cu lucrătorii. Le poți spune adevărul: ei nu-i spun șefului tău cine a raportat ceva. Ai nevoie de ajutor în limba ta? Cere un interpret. FairWork ajută gratuit victimele exploatării, și pe oamenii fără acte valabile. Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.", // nieuw, nalezen
    'c.inspection.p': "Vreau să spun ceva, dar fără șeful meu de față.", // nieuw, nalezen
    'c.inspection.s': "Un inspector te întreabă de orele tale. Șeful ți-a spus să zici 8 ore. Tu lucrezi 12. Ce faci?", // nieuw, nalezen
    'c.inspection.o1': "Îi spui inspectorului adevărul.", // nieuw, nalezen
    'c.inspection.o2': "Spui 8 ore, cum a zis șeful.", // nieuw, nalezen
    'c.inspection.o3': "Nu spui nimic și pleci.", // nieuw, nalezen
    'c.inspection.w': "Inspectorul te poate ajuta doar când știe adevărul. Ce spui te ajută pe tine și pe colegii tăi.", // nieuw, nalezen
    'c.carpool': "În mașină: centura pusă și stabiliți costurile", // nieuw, nalezen
    'c.carpool.b': "Toată lumea din mașină poartă centura, și cei din spate. Șoferul are nevoie de un permis de conducere valabil și nu trebuie să bea alcool înainte să conducă. Prea mulți oameni în dubă sau șoferul conduce periculos? Spune asta și nu urca. Mergi cu colegii în aceeași mașină? Stabiliți întâi cum împărțiți costul combustibilului. Mergi cu duba agenției? Întreabă cât te costă și cere asta pe hârtie.", // nieuw, nalezen
    'c.carpool.p': "Sunt prea mulți oameni în dubă. Nu urc.", // nieuw, nalezen
    'c.carpool.s': "Duba de lucru are 9 locuri. Azi-dimineață vor să urce 11 oameni. Ce faci?", // nieuw, nalezen
    'c.carpool.o1': "Nu urci și îl suni pe șef.", // nieuw, nalezen
    'c.carpool.o2': "Stai pe jos, în spate.", // nieuw, nalezen
    'c.carpool.o3': "Te înghesui: sunt doar 20 de minute.", // nieuw, nalezen
    'c.carpool.w': "Fără loc și fără centură, un accident mic poate fi foarte grav. Angajatorul sau agenția pot găsi altă soluție.", // nieuw, nalezen
    'c.train': "Trenul întârzie? Trimite imediat un mesaj", // nieuw, nalezen
    'c.train.b': "Verifică planificatorul de călătorie înainte să pleci: trenurile și autobuzele pot întârzia sau pot fi anulate. Trenul tău întârzie? Trimite-i imediat un mesaj șefului, cu ora la care ajungi. În zilele cu furtună sau cu lucrări pe linie, ia un tren mai devreme. După o întârziere mare, poți primi des bani înapoi: uită-te pe site-ul companiei de tren.", // nieuw, nalezen
    'c.train.p': "Trenul meu are întârziere. Ajung la ora nouă.", // nieuw, nalezen
    'c.train.s': "Trenul tău e anulat. Următorul pleacă peste 30 de minute. Tura ta începe peste 40 de minute. Ce faci?", // nieuw, nalezen
    'c.train.o1': "Trimiți acum un mesaj că întârzii.", // nieuw, nalezen
    'c.train.o2': "Aștepți și explici când ajungi.", // nieuw, nalezen
    'c.train.o3': "Te duci acasă: nu e vina ta.", // nieuw, nalezen
    'c.train.w': "Șeful poate planifica mai bine când află devreme. O întârziere nu e vina ta, dar e treaba ta s-o anunți.", // nieuw, nalezen
    'c.checklist': "Verifică întâi tu", // nieuw, nalezen
    'c.checklist.b': "Înainte să spui „klaar”, verifică-ți propria muncă. Folosește lista de verificare dacă există și bifează fiecare pas. Uită-te la munca ta ca și cum ai fi clientul. Ceva nu e bine? Refă acum: e mai repede decât mai târziu. Ai dubii? Roagă un coleg să se uite. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.checklist.p': "Am terminat. Te uiți puțin peste ce am făcut?", // nieuw, nalezen
    'c.checklist.s': "Ai terminat. Pe lista de verificare, un pas nu e bifat. Crezi că l-ai făcut. Ce faci?", // nieuw, nalezen
    'c.checklist.o1': "Verifici din nou pasul acela, apoi îl bifezi.", // nieuw, nalezen
    'c.checklist.o2': "Îl bifezi: probabil l-ai făcut.", // nieuw, nalezen
    'c.checklist.o3': "Îl lași nebifat: nimeni nu citește lista.", // nieuw, nalezen
    'c.checklist.w': "O listă de verificare ajută doar când e adevărată. Încă o privire durează un minut. O greșeală poate dura ore.", // nieuw, nalezen
    'c.leavesite': "Lasă locul cum vrei să-l găsești", // nieuw, nalezen
    'c.leavesite.b': { m: "La sfârșitul lucrului, lasă-ți locul curat și sigur. Pune la loc sculele și materialele și mătură pe jos. Oprește mașinile și luminile pe care le-ai folosit. Ești ultimul? Verifică ferestrele și ușile și încuie cum spune firma. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", f: "La sfârșitul lucrului, lasă-ți locul curat și sigur. Pune la loc sculele și materialele și mătură pe jos. Oprește mașinile și luminile pe care le-ai folosit. Ești ultima? Verifică ferestrele și ușile și încuie cum spune firma. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", x: "La sfârșitul lucrului, lasă-ți locul curat și sigur. Pune la loc sculele și materialele și mătură pe jos. Oprește mașinile și luminile pe care le-ai folosit. Nu mai e nimeni după tine? Verifică ferestrele și ușile și încuie cum spune firma. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi." }, // nieuw, nalezen
    'c.leavesite.p': { m: "Sunt ultimul. Trebuie să încui ușa?", f: "Sunt ultima. Trebuie să încui ușa?", x: "Nu mai e nimeni după mine. Trebuie să încui ușa?" }, // nieuw, nalezen
    'c.leavesite.s': { m: "Ești ultimul la lucru. Nu știi cum se pune alarma. Ce faci?", f: "Ești ultima la lucru. Nu știi cum se pune alarma. Ce faci?", x: "Toți ceilalți au plecat de la lucru. Nu știi cum se pune alarma. Ce faci?" }, // nieuw, nalezen
    'c.leavesite.o1': "Îl suni pe șef și întrebi.", // nieuw, nalezen
    'c.leavesite.o2': "Pleci fără alarmă: e târziu.", // nieuw, nalezen
    'c.leavesite.o3': "Apeși pe butoane până piuie.", // nieuw, nalezen
    'c.leavesite.w': "O clădire fără alarmă nu e sigură. Șeful preferă un telefon decât să găsească o problemă mâine.", // nieuw, nalezen
    'c.stagedays': "Elev și coleg în același timp", // nieuw, nalezen
    'c.stagedays.b': "La stagiu ești ca să înveți, dar lucrezi ca toți colegii: la timp, după regulile casei, și suni când te îmbolnăvești. Ai voie să pui multe întrebări: de aceea ești acolo. Munca ta ar trebui să te ajute să înveți, nu doar să faci curat sau să cari toată ziua. Nu e așa? Vorbește cu coordonatorul de stagiu de la școală. Indemnizația de stagiu nu se dă mereu: întreabă de ea înainte să începi. Regulile diferă de la o școală la alta: întreabă-l pe coordonatorul de stagiu.", // nieuw, nalezen
    'c.stagedays.p': "Vreau să învăț și asta. Pot să mă uit cum faci?", // nieuw, nalezen
    'c.stagedays.s': "La stagiu doar faci curat în cantină, în fiecare zi, de trei săptămâni. Ce faci?", // nieuw, nalezen
    'c.stagedays.o1': "Vorbești despre asta cu coordonatorul de stagiu.", // nieuw, nalezen
    'c.stagedays.o2': "Faci și nu spui nimic: așa e la stagiu.", // nieuw, nalezen
    'c.stagedays.o3': "Stai acasă până îți dau altă muncă.", // nieuw, nalezen
    'c.stagedays.w': "Stagiul e ca să-ți înveți meseria. Coordonatorul poate vorbi cu firma despre sarcini mai bune.", // nieuw, nalezen
    'c.stageend': "Termină frumos și cere o recomandare", // nieuw, nalezen
    'c.stageend.b': "La discuția finală afli ce a mers bine și ce poate fi mai bine. Cere exemple și notează-le pentru următorul loc de muncă. A mers bine? Întreabă dacă le poți da numele ca referință. În ultima zi, mulțumește-le colegilor: aici mulți aduc ceva mic de mâncare, de exemplu prăjitură sau dulciuri. Regulile diferă de la o școală la alta: întreabă-l pe coordonatorul de stagiu.", // nieuw, nalezen
    'c.stageend.p': "Pot să vă dau numele ca referință?", // nieuw, nalezen
    'c.stageend.s': "E ultima zi de stagiu. Ce faci?", // nieuw, nalezen
    'c.stageend.o1': "Le mulțumești colegilor și îți iei rămas-bun.", // nieuw, nalezen
    'c.stageend.o2': "Pleci în liniște, fără să spui nimic.", // nieuw, nalezen
    'c.stageend.o3': "Ceri un cadou de la firmă.", // nieuw, nalezen
    'c.stageend.w': "Un rămas-bun frumos lasă o impresie bună. Poate vrei să lucrezi acolo mai târziu sau ai nevoie de ei ca referință.", // nieuw, nalezen
    'c.neighbours': "Salută-ți vecinii", // nieuw, nalezen
    'c.neighbours.b': "Te-ai mutat de curând pe o stradă? Salută-ți vecinii și spune-le cum te cheamă. Așa problemele se rezolvă mai ușor mai târziu. Lucrezi noaptea sau locuiești cu mulți oameni? Fă liniște seara târziu și noaptea. Scoate gunoiul în ziua potrivită. La bibliotecă și la centrul comunitar poți exersa des olandeza, uneori gratuit.", // nieuw, nalezen
    'c.neighbours.p': "Bună, eu sunt Ali. Locuiesc alături.", // nieuw, nalezen
    'c.neighbours.s': "Locuiești cu cinci colegi. Un vecin spune că noaptea e des gălăgie. Ce faci?", // nieuw, nalezen
    'c.neighbours.o1': "Îți ceri scuze și promiți să faceți liniște.", // nieuw, nalezen
    'c.neighbours.o2': "Spui că toți lucrați și aveți nevoie să vă relaxați.", // nieuw, nalezen
    'c.neighbours.o3': "Nu spui nimic și închizi ușa.", // nieuw, nalezen
    'c.neighbours.w': "O discuție bună, din timp, oprește probleme mai mari. Vecinii care te cunosc sunt adesea mai prietenoși și mai săritori.", // nieuw, nalezen
    'c.join': "Implică-te: înveți olandeza mai repede", // nieuw, nalezen
    'c.join.b': "În afara muncii, înveți olandeza cel mai repede făcând lucruri cu alți oameni: sport, un club sau voluntariat. Copilul tău merge la școală? Mergi la ședința cu părinții, chiar dacă olandeza ta nu e perfectă: profesorul vrea să te cunoască. Poți cere să se vorbească rar în olandeză sau poți folosi o aplicație de traducere. Voluntariatul arată bine și în CV-ul tău.", // nieuw, nalezen
    'c.join.p': "Ați putea vorbi puțin mai rar?", // nieuw, nalezen
    'c.join.s': "Primești o invitație la ședința cu părinții. Olandeza ta nu e încă bună. Ce faci?", // nieuw, nalezen
    'c.join.o1': "Te duci și folosești olandeză simplă sau o aplicație.", // nieuw, nalezen
    'c.join.o2': "Nu te duci: profesorul nu te va înțelege.", // nieuw, nalezen
    'c.join.o3': "Trimiți un mesaj scurt că nu ai timp.", // nieuw, nalezen
    'c.join.w': "Profesorul vrea să vorbească despre copilul tău, nu despre olandeza ta. Dacă vii, arăți că îți pasă.", // nieuw, nalezen
    'c.workphotos': "Întreabă întâi, apoi postează", // nieuw, nalezen
    'c.workphotos.b': "O poză la lucru poate arăta mai mult decât crezi: un client, un beneficiar, un ecran sau o hârtie cu nume. Nu pune online poze de la lucru fără permisiunea angajatorului și niciodată poze cu oameni fără acordul lor. Datele clienților rămân la lucru: nu le trimite pe telefonul sau pe e-mailul tău. Ai trimis ceva din greșeală? Spune-i imediat șefului. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.workphotos.p': "Cer întâi permisiunea.", // nieuw, nalezen
    'c.workphotos.s': "Un coleg pune o poză amuzantă cu un client în aplicația echipei. Ce faci?", // nieuw, nalezen
    'c.workphotos.o1': "Spui că nu e în regulă și nu o distribui.", // nieuw, nalezen
    'c.workphotos.o2': "O distribui: e doar în aplicația echipei.", // nieuw, nalezen
    'c.workphotos.o3': "Îi dai like, dar nu o distribui.", // nieuw, nalezen
    'c.workphotos.w': "Clientul nu și-a dat acordul pentru poza asta. Pozele dintr-o aplicație pot ajunge oriunde, repede. Dacă spui asta frumos, îl protejezi pe client și pe colegul tău.", // nieuw, nalezen
    'c.device': "Actualizări da, stickuri ciudate nu", // nieuw, nalezen
    'c.device.b': "Instalează actualizările pe telefon și pe calculator: ele închid găurile pe care le folosesc hackerii. Ai găsit un stick USB? Nu-l pune în calculator: dă-l departamentului IT. Pe un telefon sau un calculator de serviciu, instalează doar aplicațiile permise de firmă. Pe un wifi public, nu intra în contul de la bancă sau de la serviciu. Blochează-ți telefonul cu un cod. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen
    'c.device.p': "Am găsit un stick USB. Ce să fac cu el?", // nieuw, nalezen
    'c.device.s': "Găsești un stick USB în parcare. Pe el scrie „Salaris”. Ce faci?", // nieuw, nalezen
    'c.device.o1': "Îl dai departamentului IT.", // nieuw, nalezen
    'c.device.o2': "Îl pui în calculator ca să vezi al cui e.", // nieuw, nalezen
    'c.device.o3': "Îl iei acasă și te uiți la el acolo.", // nieuw, nalezen
    'c.device.w': "Un stick poate avea un virus, chiar dacă pare interesant. Departamentul IT îl poate verifica în siguranță.", // nieuw, nalezen
  },
};

export default t;
