import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': "Codsashada shaqo", // nieuw, nalezen
    'l.cv': "CV-gaaga iyo warqadda codsiga", // nieuw, nalezen
    'w.cv': "CV-ga (warqadda taariikhda shaqadaada)", // nieuw, nalezen
    'w.motivatie': "dhiirrigelinta (sababta aad shaqada u rabto)", // nieuw, nalezen
    'w.ervaring': "khibradda", // nieuw, nalezen
    'w.opleiding': "waxbarashada, tababarka", // nieuw, nalezen
    'w.vaardigheden': "xirfadaha", // nieuw, nalezen
    'w.referentie': "tixraaca (qof ka warrami kara shaqadaada)", // nieuw, nalezen
    's.cv.1': "Waa kan CV-gaygu.", // nieuw, nalezen
    's.cv.2': "Khibrad ayaan u leeyahay dhismaha.", // nieuw, nalezen
    's.cv.3': "Waxaan ku hadlaa saddex luqadood.", // nieuw, nalezen
    'c.cv.q': "Tixraac ma haysaa?", // nieuw, nalezen
    'c.cv.a': "Haa, madaxaygii hore.", // nieuw, nalezen
    'l.interview': "Wareysiga shaqada", // nieuw, nalezen
    'w.sollicitatiegesprek': "wareysiga shaqada", // nieuw, nalezen
    'w.begroeten': "salaamid", // nieuw, nalezen
    'w.vertellen': "sheegid, ka warramid", // nieuw, nalezen
    'w.vraagstellen': "su'aal weydiin", // nieuw, nalezen
    'w.salaris': "mushaharka", // nieuw, nalezen
    'w.functie': "shaqada, jagada", // nieuw, nalezen
    's.interview.1': "Waxaan leeyahay wareysi shaqo.", // nieuw, nalezen
    's.interview.2': "Weli waxaan baranayaa Af-Holandiis.", // nieuw, nalezen
    's.interview.3': "Goorma ayaan war idinka helayaa?", // nieuw, nalezen
    'c.interview.q': "Wax iiga sheeg naftaada.", // nieuw, nalezen
    'c.interview.a': "Shan sano ayaan ka shaqeeyay bakhaar.", // nieuw, nalezen
    'u.contract': "Shaqada iyo qandaraasyada", // nieuw, nalezen
    'l.findwork': "Helitaanka shaqo", // nieuw, nalezen
    'w.vacature': "shaqada bannaan", // nieuw, nalezen
    'w.uitzendbureau': "xafiiska shaqo-qorista", // nieuw, nalezen
    'w.solliciteren': "shaqo codsasho", // nieuw, nalezen
    'w.contract': "qandaraaska", // nieuw, nalezen
    'w.tekenen': "saxeexid", // nieuw, nalezen
    'w.tijdelijk': "ku-meel-gaar", // nieuw, nalezen
    's.findwork.1': "Waxaan rabaa inaan shaqo codsado.", // nieuw, nalezen
    's.findwork.2': "Qandaraasku ma ku-meel-gaar baa mise waa joogto?", // nieuw, nalezen
    's.findwork.3': "Ma heli karaa nuqul qandaraaska ah?", // nieuw, nalezen
    'c.findwork.q': "Shaqo noocee ah ayaad raadinaysaa?", // nieuw, nalezen
    'c.findwork.a': "Waxaan raadinayaa shaqo bakhaar.", // nieuw, nalezen
    'l.contract': "Qandaraaskaaga", // nieuw, nalezen
    'w.werkgever': "loo-shaqeeyaha", // nieuw, nalezen
    'w.uren': "saacadaha", // nieuw, nalezen
    'w.oproepkracht': "shaqaalaha loo yeero markii loo baahdo", // nieuw, nalezen
    'w.proeftijd': "muddada tijaabada", // nieuw, nalezen
    'w.opzegtermijn': "muddada ogeysiiska", // nieuw, nalezen
    'w.cao': "heshiiska wadajirka ah ee shaqada (cao)", // nieuw, nalezen
    's.contract.1': "Toddobaadkii immisa saacadood ayaan shaqeeyaa?", // nieuw, nalezen
    's.contract.2': "Muddada tijaabadu waa intee le'eg tahay?", // nieuw, nalezen
    's.contract.3': "Heshiiskee wadajirka ah ayaa i khuseeya?", // nieuw, nalezen
    'c.contract.q': "Berri ma iman kartaa shaqada?", // nieuw, nalezen
    'c.contract.a': "Haa, saacaddee ayay tahay inaan halkaas joogo?", // nieuw, nalezen
    'l.agency': "Shaqo adigoo maraya xafiis shaqo-qoris", // nieuw, nalezen
    'w.uitzendkracht': "shaqaalaha xafiiska shaqo-qorista", // nieuw, nalezen
    'w.intercedent': "qofka xiriirka ee xafiiska shaqo-qorista", // nieuw, nalezen
    'w.urenbriefje': "warqadda saacadaha", // nieuw, nalezen
    'w.opdracht': "hawsha (shaqada shirkad gaar ah)", // nieuw, nalezen
    'w.verlengen': "kordhin (dheereyn)", // nieuw, nalezen
    'w.uitbetalen': "bixin (lacagta)", // nieuw, nalezen
    's.agency.1': "Waxaan ka shaqeeyaa xafiis shaqo-qoris.", // nieuw, nalezen
    's.agency.2': "Hawshayda ma la kordhinayaa?", // nieuw, nalezen
    's.agency.3': "Goorma ayay hawshaydu dhammaanaysaa?", // nieuw, nalezen
    'c.agency.q': "Saacadahaaga ma soo gudbisay?", // nieuw, nalezen
    'c.agency.a': "Haa, shalay, app-ka ayaan ku qoray.", // nieuw, nalezen
    'u.papers': "Guriga iyo waraaqaha", // nieuw, nalezen
    'l.bsn': "BSN-kaaga iyo waraaqahaaga", // nieuw, nalezen
    'w.bsn': "lambarka adeegga muwaadinka (BSN)", // nieuw, nalezen
    'w.identiteitsbewijs': "kaarka aqoonsiga", // nieuw, nalezen
    'w.gemeente': "dowladda hoose, xafiiska degmada", // nieuw, nalezen
    'w.inschrijven': "is-diiwaangelin", // nieuw, nalezen
    'w.adres': "cinwaanka", // nieuw, nalezen
    'w.zorgverzekering': "caymiska caafimaadka", // nieuw, nalezen
    's.bsn.1': "Waxaan iska diiwaangeliyaa xafiiska dowladda hoose.", // nieuw, nalezen
    's.bsn.2': "Cinwaankaygu wuu isbeddelay.", // nieuw, nalezen
    's.bsn.3': "Waxaan ku galaa DigiD.", // nieuw, nalezen
    'c.bsn.q': "Ma arki karaa kaarkaaga aqoonsiga?", // nieuw, nalezen
    'c.bsn.a': "Haa, waa kan baasaboorkaygu.", // nieuw, nalezen
    'l.housing': "Guriga", // nieuw, nalezen
    'w.kamer': "qolka", // nieuw, nalezen
    'w.huur': "kirada", // nieuw, nalezen
    'w.huurcontract': "qandaraaska kirada", // nieuw, nalezen
    'w.borg': "lacagta dhigaalka (dammaanadda)", // nieuw, nalezen
    'w.huisbaas': "mulkiilaha guriga", // nieuw, nalezen
    'w.inhouden': "ka jarid (mushaharkaaga)", // nieuw, nalezen
    's.housing.1': "Toddobaadkii kiradu waa immisa?", // nieuw, nalezen
    's.housing.2': "Lacagta dhigaalka dib ma u helayaa?", // nieuw, nalezen
    's.housing.3': "Waxaan rabaa qandaraas kiro oo gooni ah.", // nieuw, nalezen
    'c.housing.q': "Kirada waxaan ka jaraynaa mushaharkaaga.", // nieuw, nalezen
    'c.housing.a': "Markaas waxaan rabaa in taas warqad lagu qoro.", // nieuw, nalezen
    'u.pay': "Mushaharka", // nieuw, nalezen
    'l.payslip': "Warqadda mushaharkaaga", // nieuw, nalezen
    'w.loon': "mushaharka", // nieuw, nalezen
    'w.bruto': "guud (ka hor canshuurta)", // nieuw, nalezen
    'w.netto': "saafi (waxa aad gacanta ku hesho)", // nieuw, nalezen
    'w.loonstrook': "warqadda mushaharka", // nieuw, nalezen
    'w.belasting': "canshuurta", // nieuw, nalezen
    'w.uurloon': "mushaharka saacaddii", // nieuw, nalezen
    's.payslip.1': "Saacaddii mushaharkaygu waa immisa?", // nieuw, nalezen
    's.payslip.2': "Warqadda mushaharkaygu sax ma aha.", // nieuw, nalezen
    's.payslip.3': "Mushaharka saafiga ahi wuu ka yar yahay kan guud.", // nieuw, nalezen
    'c.payslip.q': "Ma heshay warqadda mushaharkaaga?", // nieuw, nalezen
    'c.payslip.a': "Haa, laakiin saacado qaar ayaa ka maqan.", // nieuw, nalezen
    'l.extra': "Lacag dheeraad ah", // nieuw, nalezen
    'w.vakantiegeld': "lacagta fasaxa", // nieuw, nalezen
    'w.overuren': "saacadaha dheeraadka ah", // nieuw, nalezen
    'w.toeslag': "lacagta dheeraadka ah", // nieuw, nalezen
    'w.minimumloon': "mushaharka ugu yar", // nieuw, nalezen
    'w.bankrekening': "koontada bangiga", // nieuw, nalezen
    'w.betalen': "bixin", // nieuw, nalezen
    's.extra.1': "Shaqada habeenka lacag dheeraad ah ma u helayaa?", // nieuw, nalezen
    's.extra.2': "Saacadaha dheeraadka ah lacagtooda ma la bixiyaa?", // nieuw, nalezen
    's.extra.3': "Mushaharkaygu wuxuu galaa koontadayda bangiga.", // nieuw, nalezen
    'c.extra.q': "Maanta ma sii joogi kartaa laba saacadood oo dheeraad ah?", // nieuw, nalezen
    'c.extra.a': "Haa, ma qori doontaa saacadaha dheeraadka ah?", // nieuw, nalezen
    'u.house': "Xeerarka shirkadda", // nieuw, nalezen
    'l.phone': "Taleefankaaga goobta shaqada", // nieuw, nalezen
    'w.telefoon': "taleefanka", // nieuw, nalezen
    'w.appen': "fariin dirid (app)", // nieuw, nalezen
    'w.kluisje': "armaajada yar ee qufulka leh", // nieuw, nalezen
    'w.uitzetten': "demin", // nieuw, nalezen
    'w.prive': "gaar ah, shakhsi ah", // nieuw, nalezen
    'w.foto': "sawirka", // nieuw, nalezen
    's.phone.1': "Taleefankaygu wuxuu ku jiraa armaajadayda yar.", // nieuw, nalezen
    's.phone.2': "Taleefankayga waan damiyaa.", // nieuw, nalezen
    's.phone.3': "Halkan sawir ma ka qaadi karaa?", // nieuw, nalezen
    'c.phone.q': "Taleefan ha isticmaalin meel u dhow mashiinka, hagaag?", // nieuw, nalezen
    'c.phone.a': "Hagaag, fariimaha waxaan diri doonaa waqtiga nasashada.", // nieuw, nalezen
    'l.smoking': "Sigaar cabbidda", // nieuw, nalezen
    'w.roken': "sigaar cabbid", // nieuw, nalezen
    'w.rookplek': "meesha sigaarka lagu cabbo", // nieuw, nalezen
    'w.verboden': "lama oggola, mamnuuc", // nieuw, nalezen
    'w.buiten': "bannaanka", // nieuw, nalezen
    'w.esigaret': "sigaarka korontada (vape)", // nieuw, nalezen
    'w.brandbaar': "si fudud u guba (dab qabsan kara)", // nieuw, nalezen
    's.smoking.1': "Halkan sigaar cabbiddu lama oggola.", // nieuw, nalezen
    's.smoking.2': "Xaggee ayay ku taal meesha sigaarka lagu cabbo?", // nieuw, nalezen
    's.smoking.3': "Sigaarka waxaan ku cabbaa bannaanka oo keliya, waqtiga nasashada.", // nieuw, nalezen
    'c.smoking.q': "Ma imanaysaa inaad sigaar cabto?", // nieuw, nalezen
    'c.smoking.a': "Maya, weli ma gaadhin waqtigayga nasashadu.", // nieuw, nalezen
    'l.clock': "Diiwaangelinta saacadda iyo waqtiga oo la ilaaliyo", // nieuw, nalezen
    'w.inklokken': "diiwaangelinta gelitaanka (saacadda shaqada)", // nieuw, nalezen
    'w.uitklokken': "diiwaangelinta bixitaanka (saacadda shaqada)", // nieuw, nalezen
    'w.pasje': "kaarka (shaqaalaha)", // nieuw, nalezen
    'w.prikklok': "saacadda diiwaangelinta", // nieuw, nalezen
    'w.optijd': "waqtigii saxda ahaa", // nieuw, nalezen
    'w.rooster': "jadwalka shaqada", // nieuw, nalezen
    's.clock.1': "Saacadda lixda ayaan diiwaangeliyaa gelitaankayga.", // nieuw, nalezen
    's.clock.2': "Kaarkaygii waan illaaway.", // nieuw, nalezen
    's.clock.3': "Xaggee buu yaallaa jadwalka shaqadu?", // nieuw, nalezen
    'c.clock.q': "Ma ii diiwaangelinaysaa gelitaankayga?", // nieuw, nalezen
    'c.clock.a': "Maya, taasi lama oggola.", // nieuw, nalezen
    'l.hygiene': "Khamriga, daroogada iyo nadaafadda", // nieuw, nalezen
    'w.alcohol': "khamriga (aalkolada)", // nieuw, nalezen
    'w.medicijn': "daawada", // nieuw, nalezen
    'w.handenwassen': "gacmo dhaqid", // nieuw, nalezen
    'w.werkkleding': "dharka shaqada", // nieuw, nalezen
    'w.haarnetje': "shabagga timaha", // nieuw, nalezen
    'w.schoon': "nadiif", // nieuw, nalezen
    's.hygiene.1': "Gacmahaaga dhaq ka hor shaqada.", // nieuw, nalezen
    's.hygiene.2': "Khamriga iyo daroogada lama oggola.", // nieuw, nalezen
    's.hygiene.3': "Dharkayga shaqadu waa nadiif.", // nieuw, nalezen
    'c.hygiene.q': "Ma xiran tahay shabagga timaha?", // nieuw, nalezen
    'c.hygiene.a': "Haa, faraantigaygana waan iska siibay.", // nieuw, nalezen
    'u.social': "Wada-dhaqanka", // nieuw, nalezen
    'l.smalltalk': "Sheeko yar iyo nasashooyinka", // nieuw, nalezen
    'w.weekend': "dhammaadka toddobaadka", // nieuw, nalezen
    'w.koffie': "qaxwada (bunka)", // nieuw, nalezen
    'w.gezellig': "raaxo leh, wanaagsan in la wada joogo", // nieuw, nalezen
    'w.weer': "cimilada", // nieuw, nalezen
    'w.verjaardag': "maalinta dhalashada", // nieuw, nalezen
    'w.gefeliciteerd': "hambalyo", // nieuw, nalezen
    's.smalltalk.1': "Sidee buu ahaa dhammaadka toddobaadkaagu?", // nieuw, nalezen
    's.smalltalk.2': "Ma kula fadhiisan karaa?", // nieuw, nalezen
    's.smalltalk.3': "Maanta cimiladu waa fiican tahay.", // nieuw, nalezen
    'c.smalltalk.q': "Maxaad samaysay dhammaadka toddobaadkan?", // nieuw, nalezen
    'c.smalltalk.a': "Kubadda cagta ayaan la ciyaaray saaxiibbaday.", // nieuw, nalezen
    'l.mistakes': "Faallo iyo khaladaad", // nieuw, nalezen
    'w.fout': "khaladka", // nieuw, nalezen
    'w.compliment': "ammaanta", // nieuw, nalezen
    'w.feedback': "faallada (waxa qof ka yiraahdo shaqadaada)", // nieuw, nalezen
    'w.uitleggen': "sharxid", // nieuw, nalezen
    'w.leren': "barasho", // nieuw, nalezen
    'w.verbeteren': "hagaajin, sixid", // nieuw, nalezen
    's.mistakes.1': "Raali ahow, khalad ayaan sameeyay.", // nieuw, nalezen
    's.mistakes.2': "Ma ii sharxi kartaa?", // nieuw, nalezen
    's.mistakes.3': "Waad ku mahadsan tahay ammaanta!", // nieuw, nalezen
    'c.mistakes.q': "Si fiican ayaad u samaysay!", // nieuw, nalezen
    'c.mistakes.a': "Mahadsanid, taasi waa wax fiican in la maqlo.", // nieuw, nalezen
    'l.respect': "Ixtiraam qof walba", // nieuw, nalezen
    'w.respect': "ixtiraamka", // nieuw, nalezen
    'w.gelijk': "siman", // nieuw, nalezen
    'w.grens': "xadka", // nieuw, nalezen
    'w.neezeggen': "maya dhihid", // nieuw, nalezen
    'w.pesten': "cagajuglayn", // nieuw, nalezen
    'w.vertrouwenspersoon': "lataliyaha sirta ilaaliya (qof aad aamini karto)", // nieuw, nalezen
    's.respect.1': "Halkan dhammaan dadku waa siman yihiin.", // nieuw, nalezen
    's.respect.2': "Arrintan raalli kama ihi.", // nieuw, nalezen
    's.respect.3': "Jooji, kani waa xadkaygu.", // nieuw, nalezen
    'c.respect.q': "Maxaa jira? Waxaad u egtahay qof murugaysan.", // nieuw, nalezen
    'c.respect.a': "Saaxiib shaqo ayaa i cagajuglaynaya.", // nieuw, nalezen
    'u.rights': "Xeerarka iyo xuquuqda", // nieuw, nalezen
    'l.health': "Shaqo ammaan ah oo caafimaad leh", // nieuw, nalezen
    'w.arbowet': "sharciga caafimaadka iyo badbaadada shaqada", // nieuw, nalezen
    'w.veilig': "ammaan ah", // nieuw, nalezen
    'w.werktijden': "saacadaha shaqada", // nieuw, nalezen
    'w.rust': "nasashada", // nieuw, nalezen
    'w.beschermingsmiddelen': "qalabka ilaalinta", // nieuw, nalezen
    'w.arbeidsinspectie': "Hay'adda Kormeerka Shaqada (Arbeidsinspectie)", // nieuw, nalezen
    's.health.1': "Waxaan xaq u leeyahay nasasho.", // nieuw, nalezen
    's.health.2': "Shaqadu waa inay ammaan ahaataa.", // nieuw, nalezen
    's.health.3': "Waxaan u sheegayaa Hay'adda Kormeerka Shaqada.", // nieuw, nalezen
    'c.health.q': "Hadda waa inaad nasato.", // nieuw, nalezen
    'c.health.a': "Hagaag, wax yar ayaan fadhiisanayaa.", // nieuw, nalezen
    'l.rights': "Xuquuqdaada", // nieuw, nalezen
    'w.recht': "xaqa", // nieuw, nalezen
    'w.discriminatie': "takoorka", // nieuw, nalezen
    'w.vakbond': "ururka shaqaalaha", // nieuw, nalezen
    'w.juridischloket': "Juridisch Loket (xafiiska caawimada sharciga ee bilaashka ah)", // nieuw, nalezen
    'w.klacht': "cabashada", // nieuw, nalezen
    'w.ontslag': "shaqo ka eryidda", // nieuw, nalezen
    's.rights.1': "Waxaan rabaa inaan cabasho gudbiyo.", // nieuw, nalezen
    's.rights.2': "Waxaan xubin ka ahay ururka shaqaalaha.", // nieuw, nalezen
    's.rights.3': "Tani waa takoor.", // nieuw, nalezen
    'c.rights.q': "Halkan u saxeex shaqo ka eryiddaada.", // nieuw, nalezen
    'c.rights.a': "Maya, weli ma saxeexayo.", // nieuw, nalezen
    'u.leave': "Fasaxa", // nieuw, nalezen
    'l.leave': "Maalmaha fasaxa", // nieuw, nalezen
    'w.vakantiedagen': "maalmaha fasaxa (safarka)", // nieuw, nalezen
    'w.verlof': "fasaxa", // nieuw, nalezen
    'w.aanvragen': "codsasho, weydiisasho", // nieuw, nalezen
    'w.feestdag': "maalinta fasaxa rasmiga ah", // nieuw, nalezen
    'w.vrij': "fasax, aan shaqaynayn", // nieuw, nalezen
    'w.calamiteitenverlof': "fasaxa xaaladda degdegga ah", // nieuw, nalezen
    's.leave.1': "Waxaan rabaa inaan fasax codsado.", // nieuw, nalezen
    's.leave.2': "Maalinta fasaxa rasmiga ah ma fasax baan ahay?", // nieuw, nalezen
    's.leave.3': "Xaalad degdeg ah ayaa guriga iiga dhacday.", // nieuw, nalezen
    'c.leave.q': "Goorma ayaad rabtaa inaad fasax aaddo?", // nieuw, nalezen
    'c.leave.a': "Bisha Luulyo, saddex toddobaad.", // nieuw, nalezen
    'l.illness': "Xanuunsan oo guriga jooga", // nieuw, nalezen
    'w.ziekmelden': "sheegid inaad xanuunsan tahay", // nieuw, nalezen
    'w.betermelden': "sheegid inaad bogsatay", // nieuw, nalezen
    'w.bedrijfsarts': "dhakhtarka shirkadda", // nieuw, nalezen
    'w.ziekte': "xanuunka", // nieuw, nalezen
    'w.doorbetalen': "sii bixin (mushaharka)", // nieuw, nalezen
    'w.wachtdag': "maalinta sugitaanka (lacag la'aan)", // nieuw, nalezen
    's.illness.1': "Waxaan soo sheegayaa inaan xanuunsanahay.", // nieuw, nalezen
    's.illness.2': "Ballan ayaan la leeyahay dhakhtarka shirkadda.", // nieuw, nalezen
    's.illness.3': "Berri ayaan shaqada ku soo laabanayaa.", // nieuw, nalezen
    'c.illness.q': "Maxaa si sax ah kaa haya?", // nieuw, nalezen
    'c.illness.a': "Taas waxaan kala hadli doonaa dhakhtarka shirkadda.", // nieuw, nalezen
    'u.exploit': "Ogow xuquuqdaada: ka faa'iidaysiga xun", // nieuw, nalezen
    'l.warning': "Calaamadaha digniinta", // nieuw, nalezen
    'w.uitbuiting': "ka faa'iidaysiga xun (dhiig-miirashada)", // nieuw, nalezen
    'w.paspoort': "baasaboorka", // nieuw, nalezen
    'w.schuld': "deynta", // nieuw, nalezen
    'w.dreigen': "handadid", // nieuw, nalezen
    'w.onderbetaald': "lacag aad u yar la siiyay", // nieuw, nalezen
    'w.afpakken': "ka qaadid (xoog)", // nieuw, nalezen
    's.warning.1': "Madaxaygu wuxuu hayaa baasaboorkayga.", // nieuw, nalezen
    's.warning.2': "Warqad mushahar ma helo.", // nieuw, nalezen
    's.warning.3': "Waa inaan dib u bixiyo deyn.", // nieuw, nalezen
    'c.warning.q': "Baasaboorkaaga i sii uun.", // nieuw, nalezen
    'c.warning.a': "Maya, waxaad samayn kartaa nuqul oo keliya.", // nieuw, nalezen
    'l.gethelp': "Helitaanka caawimo", // nieuw, nalezen
    'w.politie': "booliska", // nieuw, nalezen
    'w.anoniem': "magacaaga la'aan (qarsoodi)", // nieuw, nalezen
    'w.melden': "soo sheegid", // nieuw, nalezen
    'w.hulp': "caawimada", // nieuw, nalezen
    'w.gevaar': "khatarta", // nieuw, nalezen
    'w.bang': "baqsan", // nieuw, nalezen
    's.gethelp.1': "Waxaan rabaa inaan wax soo sheego.", // nieuw, nalezen
    's.gethelp.2': "Ma samayn karaa taas magacayga la'aan?", // nieuw, nalezen
    's.gethelp.3': "Waan ka baqayaa madaxayga.", // nieuw, nalezen
    'c.gethelp.q': "Sideen kuu caawin karaa?", // nieuw, nalezen
    'c.gethelp.a': "Shaqada si xun ayaa la iigula dhaqmaa.", // nieuw, nalezen
    'u.contact': "U wacidda iyo fariin u dirista shaqada", // nieuw, nalezen
    'l.callin': "Shaqada u wacidda", // nieuw, nalezen
    'w.telefoontje': "wicitaanka", // nieuw, nalezen
    'w.terugbellen': "dib u wacid", // nieuw, nalezen
    'w.bereikbaar': "la heli karo (taleefanka)", // nieuw, nalezen
    'w.reden': "sababta", // nieuw, nalezen
    'w.overmorgen': "saadambe", // nieuw, nalezen
    'w.inspreken': "fariin cod ah ka tegid", // nieuw, nalezen
    's.callin.1': "Haloo, waa Ali.", // nieuw, nalezen
    's.callin.2': "Waxaan u malaynayaa inaan soo laaban doono saadambe.", // nieuw, nalezen
    's.callin.3': "Dib ma ii soo wici kartaa?", // nieuw, nalezen
    'c.callin.q': "Goorma ayaad soo laabanaysaa?", // nieuw, nalezen
    'c.callin.a': "Waxaan u malaynayaa Isniinta.", // nieuw, nalezen
    'l.texting': "Fariimaha iyo app-ka jadwalka", // nieuw, nalezen
    'w.bericht': "fariinta", // nieuw, nalezen
    'w.app': "app-ka", // nieuw, nalezen
    'w.reageren': "ka jawaabid", // nieuw, nalezen
    'w.ruilen': "isweydaarsi, beddelid", // nieuw, nalezen
    'w.kijken': "eegid, hubin", // nieuw, nalezen
    'w.groet': "salaanta (dhammaadka fariinta)", // nieuw, nalezen
    's.texting.1': "Toban daqiiqo ayaan daahayaa.", // nieuw, nalezen
    's.texting.2': "Qof ma doonayaa inuu ila beddelo wareegga shaqada?", // nieuw, nalezen
    's.texting.3': "Maalin kasta app-ka waan eegaa.", // nieuw, nalezen
    'c.texting.q': "Sabtida ma qaban kartaa wareeg shaqo oo dheeraad ah?", // nieuw, nalezen
    'c.texting.a': "Haa, isla hadda ayaan app-ka kaga jawaabayaa.", // nieuw, nalezen
    'u.grow': "Shahaadooyinka iyo horumarka", // nieuw, nalezen
    'l.certs': "Shahaadooyinka xirfadda", // nieuw, nalezen
    'w.certificaat': "shahaadada (xirfadda)", // nieuw, nalezen
    'w.cursus': "koorsada", // nieuw, nalezen
    'w.examen': "imtixaanka", // nieuw, nalezen
    'w.slagen': "ku guulaysi (imtixaan)", // nieuw, nalezen
    'w.heftruckcertificaat': "shahaadada forklift-ka", // nieuw, nalezen
    'w.halen': "helid (shahaado)", // nieuw, nalezen
    's.certs.1': "Waxaan haystaa shahaadada badbaadada VCA.", // nieuw, nalezen
    's.certs.2': "Waxaan rabaa inaan koorso qaato.", // nieuw, nalezen
    's.certs.3': "Loo-shaqeeyuhu ma bixiyaa lacagta koorsada?", // nieuw, nalezen
    'c.certs.q': "Ma haysataa shahaadada forklift-ka?", // nieuw, nalezen
    'c.certs.a': "Maya, laakiin waan jeclaan lahaa inaan helo.", // nieuw, nalezen
    'l.diploma': "Shahaadadaada iyo tababarka", // nieuw, nalezen
    'w.diploma': "shahaadada waxbarashada", // nieuw, nalezen
    'w.waarderen': "in shahaadadaada la qiimeeyo", // nieuw, nalezen
    'w.training': "tababarka", // nieuw, nalezen
    'w.verplicht': "khasab, waajib", // nieuw, nalezen
    'w.werktijd': "waqtiga shaqada", // nieuw, nalezen
    'w.verderkomen': "horumarid", // nieuw, nalezen
    's.diploma.1': "Shahaado waxbarasho ayaan ka haystaa dalkayga.", // nieuw, nalezen
    's.diploma.2': "Tababarkan ma khasab baa?", // nieuw, nalezen
    's.diploma.3': "Waxaan rabaa inaan shaqadayda ku horumaro.", // nieuw, nalezen
    'c.diploma.q': "Ma rabtaa inaad qaadato koorso tababar?", // nieuw, nalezen
    'c.diploma.a': "Haa, fadlan! Yaa bixinaya lacagta?", // nieuw, nalezen
    'u.health': "Caafimaadka", // nieuw, nalezen
    'l.doctor': "Dhakhtar mise 112?", // nieuw, nalezen
    'w.huisarts': "dhakhtarka qoyska", // nieuw, nalezen
    'w.huisartsenpost': "adeegga dhakhtarka qoyska ee fiidka, habeenka iyo dhammaadka toddobaadka", // nieuw, nalezen
    'w.apotheek': "farmashiyaha", // nieuw, nalezen
    'w.recept': "warqadda daawada", // nieuw, nalezen
    'w.spoed': "degdeg", // nieuw, nalezen
    'w.ambulance': "ambalaaska", // nieuw, nalezen
    's.doctor.1': "Waxaan rabaa ballan dhakhtarka qoyska.", // nieuw, nalezen
    's.doctor.2': "Xaggee buu ku yaal farmashiyuhu?", // nieuw, nalezen
    's.doctor.3': "Waa degdeg.", // nieuw, nalezen
    'c.doctor.q': "Adeegga dhakhtarka qoyska, maxaan kuu qabtaa?", // nieuw, nalezen
    'c.doctor.a': "Wiilkaygu wuxuu qabaa qandho kulul.", // nieuw, nalezen
    'l.insurance': "Caymiska caafimaadka", // nieuw, nalezen
    'w.premie': "lacagta caymiska (bixinta bil kasta)", // nieuw, nalezen
    'w.eigenrisico': "qaybta adiga (kharashka aad adigu marka hore bixiso)", // nieuw, nalezen
    'w.zorgtoeslag': "kaalmada lacagta caafimaadka", // nieuw, nalezen
    'w.verzekeraar': "shirkadda caymiska", // nieuw, nalezen
    'w.permaand': "bishii", // nieuw, nalezen
    'w.vergoeden': "bixin kharashka (daboolid)", // nieuw, nalezen
    's.insurance.1': "Bil kasta waxaan bixiyaa lacagta caymiska.", // nieuw, nalezen
    's.insurance.2': "Tan ma la bixiyaa (caymisku ma daboolaa)?", // nieuw, nalezen
    's.insurance.3': "Waxaan codsanayaa kaalmada lacagta caafimaadka.", // nieuw, nalezen
    'c.insurance.q': "Shirkaddee caymis ayaad la leedahay?", // nieuw, nalezen
    'c.insurance.a': "Taas waxay ku qoran tahay kaarkayga caymiska caafimaadka.", // nieuw, nalezen
    'u.money': "Lacagta iyo waraaqaha", // nieuw, nalezen
    'l.letters': "Waraaqaha rasmiga ah", // nieuw, nalezen
    'w.brief': "warqadda", // nieuw, nalezen
    'w.post': "boostada", // nieuw, nalezen
    'w.belastingdienst': "Xafiiska Canshuuraha", // nieuw, nalezen
    'w.aangifte': "warbixinta canshuurta", // nieuw, nalezen
    'w.inkomen': "dakhliga", // nieuw, nalezen
    'w.terugbetalen': "dib u bixin", // nieuw, nalezen
    's.letters.1': "Warqaddan ma fahmin.", // nieuw, nalezen
    's.letters.2': "Warqaddan ma igaga caawinaysaa?", // nieuw, nalezen
    's.letters.3': "Dakhligaygu wuu isbeddelay.", // nieuw, nalezen
    'c.letters.q': "Ma dhammaysay warbixinta canshuurta?", // nieuw, nalezen
    'c.letters.a': "Maya, waxaan samayn doonaa ka hor 1 Maajo.", // nieuw, nalezen
    'l.scams': "Ka digtoonow khiyaanada", // nieuw, nalezen
    'w.pincode': "lambarka sirta ah (PIN)", // nieuw, nalezen
    'w.link': "linkiga", // nieuw, nalezen
    'w.oplichter': "qofka khiyaanada sameeya", // nieuw, nalezen
    'w.sms': "fariinta qoraalka ah (SMS)", // nieuw, nalezen
    'w.controleren': "hubin", // nieuw, nalezen
    'w.nep': "been abuur ah", // nieuw, nalezen
    's.scams.1': "Marnaba ma bixiyo lambarkayga sirta ah.", // nieuw, nalezen
    's.scams.2': "Ma riixo linkiga.", // nieuw, nalezen
    's.scams.3': "Fariintani waa been abuur.", // nieuw, nalezen
    'c.scams.q': "Waa bangiga. Waa maxay lambarkaaga sirta ah?", // nieuw, nalezen
    'c.scams.a': "Ma bixinayo. Taleefanka waan dhigayaa.", // nieuw, nalezen
    'u.travel': "Sida loo tago shaqada", // nieuw, nalezen
    'l.bike': "Baaskiilka", // nieuw, nalezen
    'w.fiets': "baaskiilka", // nieuw, nalezen
    'w.fietspad': "waddada baaskiilka", // nieuw, nalezen
    'w.licht': "nalka", // nieuw, nalezen
    'w.slot': "qufulka", // nieuw, nalezen
    'w.stoplicht': "nalka taraafikada", // nieuw, nalezen
    'w.bel': "gambaleelka", // nieuw, nalezen
    's.bike.1': "Shaqada waxaan u aadaa baaskiil.", // nieuw, nalezen
    's.bike.2': "Shid nalkaaga!", // nieuw, nalezen
    's.bike.3': "Baaskiilkaaga quful.", // nieuw, nalezen
    'c.bike.q': "Sideed shaqada ku timaaddaa?", // nieuw, nalezen
    'c.bike.a': "Baaskiil, labaatan daqiiqo.", // nieuw, nalezen
    'l.transit': "Gaadiidka dadweynaha iyo kharashka safarka", // nieuw, nalezen
    'w.bus': "baska", // nieuw, nalezen
    'w.trein': "tareenka", // nieuw, nalezen
    'w.inchecken': "kaarka oo la taabto marka aad fuusho (check-in)", // nieuw, nalezen
    'w.uitchecken': "kaarka oo la taabto marka aad degto (check-out)", // nieuw, nalezen
    'w.bankpas': "kaarka bangiga", // nieuw, nalezen
    'w.reiskosten': "lacagta kharashka safarka", // nieuw, nalezen
    's.transit.1': "Marka aan fuulo, kaarkayga bangiga ayaan ku taabtaa akhriyaha.", // nieuw, nalezen
    's.transit.2': "Ha illaawin inaad kaarka taabato marka aad degto.", // nieuw, nalezen
    's.transit.3': "Xaggee buu ku yaal joogsiga basku?", // nieuw, nalezen
    'c.transit.q': "Ma tareen baad ku imanaysaa?", // nieuw, nalezen
    'c.transit.a': "Maya, bas. Wuxuu istaagaa albaabka hortiisa.", // nieuw, nalezen
    'u.lost': "Markaad shaqada waydo", // nieuw, nalezen
    'l.ww': "Gunnada shaqo la'aanta", // nieuw, nalezen
    'w.uitkering': "gunnada (lacag dowladda ka timaadda)", // nieuw, nalezen
    'w.ww': "gunnada shaqo la'aanta", // nieuw, nalezen
    'w.werkloos': "shaqo la'aan", // nieuw, nalezen
    'w.uwv': "UWV (xafiiska shaqada iyo gunnooyinka)", // nieuw, nalezen
    'w.ontslagnemen': "shaqada iska dhaafid", // nieuw, nalezen
    'w.werkzoekende': "qofka shaqo raadinaya", // nieuw, nalezen
    's.ww.1': "Waxaan gunnada shaqo la'aanta ka codsanayaa UWV.", // nieuw, nalezen
    's.ww.2': "Shaqo la'aan baan ahay.", // nieuw, nalezen
    's.ww.3': "Qandaraaskaygu wuu dhammaanayaa.", // nieuw, nalezen
    'c.ww.q': "Maxaad samayn doontaa hadda oo qandaraaskaagu dhammaanayo?", // nieuw, nalezen
    'c.ww.a': "Isla markiiba waxaan codsan doonaa gunnada shaqo la'aanta.", // nieuw, nalezen
    'l.newjob': "Raadinta shaqo cusub", // nieuw, nalezen
    'w.baan': "shaqada", // nieuw, nalezen
    'w.zoeken': "raadin", // nieuw, nalezen
    'w.bewaren': "kaydin, hayn", // nieuw, nalezen
    'w.bijwerken': "cusboonaysiin", // nieuw, nalezen
    'w.gratis': "bilaash (lacag la'aan)", // nieuw, nalezen
    'w.nooit': "marnaba", // nieuw, nalezen
    's.newjob.1': "Waxaan raadinayaa shaqo cusub.", // nieuw, nalezen
    's.newjob.2': "Waraaqaha mushaharkayga waan kaydiyaa.", // nieuw, nalezen
    's.newjob.3': "Shaqo raadintu waa bilaash.", // nieuw, nalezen
    'c.newjob.q': "Ma ku soo wici karnaa marka shaqo jirto?", // nieuw, nalezen
    'c.newjob.a': "Haa, fadlan. Waa kan lambarkaygu.", // nieuw, nalezen
    'u.build': "Goobta dhismaha", // nieuw, nalezen
    'l.tools': "Qalabka iyo agabka", // nieuw, nalezen
    'w.steiger': "sakaffoldiga (qalabka dhismaha ee kor lagu istaago)", // nieuw, nalezen
    'w.ladder': "jaranjarada", // nieuw, nalezen
    'w.boor': "dariilka", // nieuw, nalezen
    'w.hamer': "dubbaha", // nieuw, nalezen
    'w.beton': "shubka", // nieuw, nalezen
    'w.kraan': "wiishka", // nieuw, nalezen
    's.tools.1': "Dubbaha wax yar i sii.", // nieuw, nalezen
    's.tools.2': "Jaranjaradu waxay ku tiirsan tahay sakaffoldiga.", // nieuw, nalezen
    's.tools.3': "Shubku weli waa qoyan yahay.", // nieuw, nalezen
    'c.tools.q': "Xaggee buu yaal dariilku?", // nieuw, nalezen
    'c.tools.a': "Baabuurka yar, xagga dambe.", // nieuw, nalezen
    'l.site': "Badbaadada goobta dhismaha", // nieuw, nalezen
    'w.valbeveiliging': "ilaalinta dhicitaanka (suunka badbaadada)", // nieuw, nalezen
    'w.last': "xamuulka", // nieuw, nalezen
    'w.gat': "godka", // nieuw, nalezen
    'w.vallen': "dhicid", // nieuw, nalezen
    'w.risico': "khatarta", // nieuw, nalezen
    'w.weigeren': "diidid", // nieuw, nalezen
    's.site.1': "Iska jir, xamuul ayaa madaxaaga ka sarreeya!", // nieuw, nalezen
    's.site.2': "Xiro suunka badbaadada dhicitaanka.", // nieuw, nalezen
    's.site.3': "Marka hore waxaan sameeyaa hubinta khatarta ee daqiiqadda ugu dambaysa.", // nieuw, nalezen
    'c.site.q': "Ma wax yar iga caawin kartaa saqafka?", // nieuw, nalezen
    'c.site.a': "Haa, laakiin marka hore suunkayga badbaadada.", // nieuw, nalezen
    'u.factory': "Warshadda gudaheeda", // nieuw, nalezen
    'l.line': "Khadka iyo mashiinnada", // nieuw, nalezen
    'w.lopendeband': "suunka socda, khadka", // nieuw, nalezen
    'w.machine': "mashiinka", // nieuw, nalezen
    'w.storing': "cilladda, xumaanshaha", // nieuw, nalezen
    'w.noodstop': "badhanka joojinta degdegga", // nieuw, nalezen
    'w.inpakken': "baakadeyn", // nieuw, nalezen
    'w.productie': "wax-soo-saarka", // nieuw, nalezen
    's.line.1': "Khadkii wuu istaagay.", // nieuw, nalezen
    's.line.2': "Cillad ayaa jirta.", // nieuw, nalezen
    's.line.3': "Alaabta waan baakadeeyaa.", // nieuw, nalezen
    'c.line.q': "Sidee bay ku socotaa khadka?", // nieuw, nalezen
    'c.line.a': "Waa fiican tahay, laakiin mashiinku aad buu u gaabis yahay.", // nieuw, nalezen
    'l.quality': "Tayada", // nieuw, nalezen
    'w.kwaliteit': "tayada", // nieuw, nalezen
    'w.product': "alaabta (badeecadda)", // nieuw, nalezen
    'w.afkeuren': "diidid (alaab aan tayo lahayn)", // nieuw, nalezen
    'w.beschadigd': "waxyeelloobay", // nieuw, nalezen
    'w.etiket': "calaamadda (warqadda alaabta ku dheggan)", // nieuw, nalezen
    'w.lijst': "liiska", // nieuw, nalezen
    's.quality.1': "Alaabtani waa waxyeelloobtay.", // nieuw, nalezen
    's.quality.2': "Calaamaddu sax ma aha.", // nieuw, nalezen
    's.quality.3': "Tan ma waa inaan diido?", // nieuw, nalezen
    'c.quality.q': "Maxaa tan dhinac loo dhigay?", // nieuw, nalezen
    'c.quality.a': "Calaamaddu way qalloocan tahay.", // nieuw, nalezen
    'u.care': "Daryeelka", // nieuw, nalezen
    'l.client': "Macmiilka iyo daryeelka maalinlaha ah", // nieuw, nalezen
    'w.client': "macmiilka (qofka aad daryeesho)", // nieuw, nalezen
    'w.wassen': "dhaqid", // nieuw, nalezen
    'w.aankleden': "dhar xirasho, qof dhar u xirid", // nieuw, nalezen
    'w.eten': "cuntada", // nieuw, nalezen
    'w.rolstoel': "kursiga taayirada leh", // nieuw, nalezen
    'w.verpleegkundige': "kalkaaliyaha caafimaadka", // nieuw, nalezen
    's.client.1': "Si fiican ma u seexatay?", // nieuw, nalezen
    's.client.2': "Waxaan kaa caawin doonaa inaad dharka xirato.", // nieuw, nalezen
    's.client.3': "Ma rabtaa wax kale oo aad cunto?", // nieuw, nalezen
    'c.client.q': "Ma iga caawin kartaa jaakaddayda?", // nieuw, nalezen
    'c.client.a': "Dabcan, waan ku caawinayaa.", // nieuw, nalezen
    'l.privacy': "Sirta iyo badbaadada daryeelka", // nieuw, nalezen
    'w.privacy': "asturnaanta (sirta gaarka ah)", // nieuw, nalezen
    'w.hygiene': "nadaafadda", // nieuw, nalezen
    'w.doorgeven': "gudbin (macluumaad)", // nieuw, nalezen
    'w.geheim': "sir", // nieuw, nalezen
    'w.toestemming': "oggolaanshaha", // nieuw, nalezen
    'w.gevallen': "dhacay", // nieuw, nalezen
    's.privacy.1': "Marwadii way dhacday.", // nieuw, nalezen
    's.privacy.2': "Waxaan u gudbin doonaa kalkaaliyaha caafimaadka.", // nieuw, nalezen
    's.privacy.3': "Guriga kagama hadlo dadka aan daryeelo.", // nieuw, nalezen
    'c.privacy.q': "Ma siin kartaa Mudane Jansen kiniinadiisa?", // nieuw, nalezen
    'c.privacy.a': "Maya, taas la iima oggola. Kalkaaliyaha caafimaadka ayaan u yeerayaa.", // nieuw, nalezen
    'u.horeca': "Makhaayadaha iyo hoteellada", // nieuw, nalezen
    'l.kitchen': "Jikada gudaheeda", // nieuw, nalezen
    'w.keuken': "jikada", // nieuw, nalezen
    'w.snijden': "jarid", // nieuw, nalezen
    'w.pan': "digsiga", // nieuw, nalezen
    'w.koelcel': "qolka qaboojiyaha (qaboojiye weyn oo la galo)", // nieuw, nalezen
    'w.allergie': "xasaasiyadda", // nieuw, nalezen
    'w.datum': "taariikhda", // nieuw, nalezen
    's.kitchen.1': "Hilibka geli qolka qaboojiyaha.", // nieuw, nalezen
    's.kitchen.2': "Basasha u jar yar-yar.", // nieuw, nalezen
    's.kitchen.3': "Tan miyuu ku jiraa loos?", // nieuw, nalezen
    'c.kitchen.q': "Marti ayaa xasaasiyad ka qabta loosta.", // nieuw, nalezen
    'c.kitchen.a': "Waxaan weydiin doonaa madaxa jikada.", // nieuw, nalezen
    'l.service': "U adeegidda martida", // nieuw, nalezen
    'w.gast': "martida", // nieuw, nalezen
    'w.bestelling': "dalabka", // nieuw, nalezen
    'w.rekening': "biilka", // nieuw, nalezen
    'w.menu': "liiska cuntada", // nieuw, nalezen
    'w.afruimen': "miiska nadiifin", // nieuw, nalezen
    'w.fooi': "bakhshiishka (lacag dheeraad ah oo martidu bixiso)", // nieuw, nalezen
    's.service.1': "Maxaad jeclaan lahayd inaad cabto?", // nieuw, nalezen
    's.service.2': "Ma qaadan karaa dalabkaaga?", // nieuw, nalezen
    's.service.3': "Miiska ayaan nadiifinayaa.", // nieuw, nalezen
    'c.service.q': "Ma heli karnaa biilka?", // nieuw, nalezen
    'c.service.a': "Dabcan, waan imanayaa.", // nieuw, nalezen
    'u.clean': "Nadiifinta", // nieuw, nalezen
    'l.cleaning': "Agabka nadiifinta", // nieuw, nalezen
    'w.dweil': "masaxada dhulka", // nieuw, nalezen
    'w.emmer': "baaldiga", // nieuw, nalezen
    'w.schoonmaakmiddel': "alaabta nadiifinta", // nieuw, nalezen
    'w.stofzuiger': "mashiinka boodhka nuuga", // nieuw, nalezen
    'w.stoffen': "boodh tirid", // nieuw, nalezen
    'w.prullenbak': "weelka qashinka", // nieuw, nalezen
    's.cleaning.1': "Xaggee buu yaal baaldigu?", // nieuw, nalezen
    's.cleaning.2': "Marinka ayaan mashiinka boodhka ku nadiifinayaa.", // nieuw, nalezen
    's.cleaning.3': "Faaruji weelka qashinka.", // nieuw, nalezen
    'c.cleaning.q': "Ma dhammaysay musqulaha?", // nieuw, nalezen
    'c.cleaning.a': "Ku dhawaad, laba ayaa haray.", // nieuw, nalezen
    'l.cleansafe': "Nadiifin ammaan ah", // nieuw, nalezen
    'w.glad': "simbiriirix leh (lagu sibxan karo)", // nieuw, nalezen
    'w.bordje': "looxa digniinta", // nieuw, nalezen
    'w.mengen': "isku darid", // nieuw, nalezen
    'w.damp': "uumiga (qiiqa)", // nieuw, nalezen
    'w.luchten': "hawo nadiif ah soo gelin", // nieuw, nalezen
    'w.spoelen': "biyo ku raacin", // nieuw, nalezen
    's.cleansafe.1': "Iska jir, waa simbiriirix!", // nieuw, nalezen
    's.cleansafe.2': "Dhig looxa digniinta.", // nieuw, nalezen
    's.cleansafe.3': "Marnaba ha isku darin alaabta nadiifinta.", // nieuw, nalezen
    'c.cleansafe.q': "Halkan ma mari karaa?", // nieuw, nalezen
    'c.cleansafe.a': "Iska jir, dhulku weli waa simbiriirix.", // nieuw, nalezen
    'c.cv': "CV gaaban", // nieuw, nalezen
    'c.cv.b': "Halkan CV-gu waa gaaban yahay: 1 ama 2 bog. Qor macluumaadkaaga xiriirka, khibradda shaqada, waxbarashada, luqadaha iyo xirfadaha. Sawir looma baahna. Uma baahnid inaad qorto diintaada, da'daada ama xaaladdaada guurka. Daacad ka ahow waxa aad qaban karto. Qof ka codso inuu hubiyo Af-Holandiiskaaga.", // nieuw, nalezen
    'c.cv.p': "Ma akhrin doontaa CV-gayga? Af-Holandiiskaygu ma sax yahay?", // nieuw, nalezen
    'c.cv.s': "Waxaad 3 sano ka shaqaysay warshad ku taal dalkaaga hooyo, laakiin shahaado ma haysid. Maxaad ku qoraysaa CV-gaaga?", // nieuw, nalezen
    'c.cv.o1': "Qor shaqada iyo waxa aad halkaas ka qabatay, si daacad ah.", // nieuw, nalezen
    'c.cv.o2': "Waxba ha qorin, maxaa yeelay shahaado ma haysid.", // nieuw, nalezen
    'c.cv.o3': "Qor inaad shahaado haysato, si aad u muuqato mid ka fiican.", // nieuw, nalezen
    'c.cv.w': "Khibradda shaqada waa la tixgeliyaa, xitaa tan dalka dibaddiisa. Daacadnimadu waa muhiim: loo-shaqeeyayaashu way hubin karaan.", // nieuw, nalezen
    'c.interview': "Wareysiga shaqada", // nieuw, nalezen
    'c.interview.b': "Waqtiga ku imow: 5 ilaa 10 daqiiqo ka hor. Si edeb leh u salaan oo qofka eeg. Si kooban u sheeg waxa aad qaban karto. Inaad adigu su'aalo weydiiso waa caadi waana wax fiican, tusaale ahaan saacadaha, shaqada ama tababarka. Dhammaadka waxaad weydiin kartaa goorma aad war heli doonto. Waa caadi inaad sheegto inaad weli baranayso Af-Holandiis. Loo-shaqeeyaha lagama oggola inuu ku weydiiyo diintaada, uur ama caafimaadkaaga. Uma baahnid inaad ka jawaabto: si edeb leh ayaad u odhan kartaa inaadan doonayn inaad ka jawaabto.", // nieuw, nalezen
    'c.interview.p': "Anigu wax ma weydiin karaa? Shaqadu toddobaadkii immisa saacadood weeye?", // nieuw, nalezen
    'c.interview.s': "Dhammaadka wareysiga, loo-shaqeeyuhu wuxuu weydiiyaa: “Heb je nog vragen?” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.interview.o1': "Su'aal ka weydii saacadaha ama tababarka.", // nieuw, nalezen
    'c.interview.o2': "Dheh maya, maxaa yeelay su'aal weydiintu edeb ma aha.", // nieuw, nalezen
    'c.interview.o3': "Wax badan ka sheeg naftaada, si aad u muujiso inaad shaqaale fiican tahay.", // nieuw, nalezen
    'c.interview.w': "Su'aaluhu waxay muujinayaan inaad shaqada xiisaynayso. Loo-shaqeeyayaasha halkan inta badan way filayaan.", // nieuw, nalezen
    'c.findwork': "Qandaraaskaaga warqad ku hel", // nieuw, nalezen
    'c.findwork.b': "Had iyo jeer weydiiso qandaraas qoran iyo nuqul adiga kuu gaar ah. Akhri ka hor intaadan saxeexin, ama weydiiso qof aad aamminsan tahay inuu ku caawiyo. Xafiiska shaqo-qorista (uitzendbureau) lacag kaama qaadan karo si uu shaqo kuu helo. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.findwork.p': "Ma akhrin karaa qandaraaska marka hore?", // nieuw, nalezen
    'c.findwork.s': "Loo-shaqeeye cusub ayaa yiri: “Halkan hadda saxeex. Goor dambe ayaad akhrin kartaa.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.findwork.o1': "Weydiiso waqti aad ku akhrido, ama nuqul.", // nieuw, nalezen
    'c.findwork.o2': "Si degdeg ah u saxeex, si aadan shaqada u waayin.", // nieuw, nalezen
    'c.findwork.o3': "Saxeex, kadibna weydiiso nuqul.", // nieuw, nalezen
    'c.findwork.w': "Qandaraaskaagu wuxuu sheegayaa waxa aad kasbanayso iyo xuquuqdaada. Loo-shaqeeye wanaagsan wuxuu ku siinayaa waqti aad ku akhrido. Waxaad weydiin kartaa wax kasta oo aadan fahmin.", // nieuw, nalezen
    'c.contract': "Muddada tijaabada iyo shaqada loo yeero", // nieuw, nalezen
    'c.contract.b': "Muddada tijaabada (proeftijd) waa inay qoraal ku jirtaa. Lama oggola qandaraas 6 bilood ah ama ka gaaban. Qandaraas ka dheer oo ka yar 2 sano, ugu badnaan waa 1 bil. Qandaraas 2 sano ah ama ka dheer, ama mid joogto ah, ugu badnaan waa 2 bilood. Ma tahay shaqaale loo yeero markii loo baahdo (oproepkracht)? Loo-shaqeeyahaagu inta badan waa inuu kuu yeeraa ugu yaraan 4 maalmood ka hor. Haddii uu ka dambeeyo, uma baahnid inaad timaaddo. Heshiiska wadajirka ah (cao) wuxuu ka dhigi karaa 4-taas maalmood kuwo ka gaaban, laakiin kama gaabin karo 1 maalin. Haddii ay shaqadaada joojiyaan wakhti intaas ka dambeeya, weli lacagtaada waa lagu siinayaa. Haddii ay kuugu yeeraan wax ka yar 3 saacadood oo shaqo ah, inta badan waxaa lagu siinayaa lacagta 3 saacadood. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.contract.p': "Muddada tijaabadu ma ku jirtaa qandaraaskayga?", // nieuw, nalezen
    'c.contract.s': "Qandaraaskaagu waa 3 bilood. Waxaa ku qoran: “Proeftijd: 1 maand”. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.contract.o1': "Wax ka weydii: muddadan tijaabadu ansax ma aha.", // nieuw, nalezen
    'c.contract.o2': "Waxba. Qandaraas kasta wuxuu leeyahay muddo tijaabo.", // nieuw, nalezen
    'c.contract.o3': "Saxeex oo weligaa ha weydiin, maxaa yeelay madaxa ayaa sida fiican u yaqaan.", // nieuw, nalezen
    'c.contract.w': "Muddo tijaabo oo ku jirta qandaraas 6 bilood ah ama ka gaaban ansax ma aha. In si deggan wax loo weydiiyo waa caadi. Haddii jawaabtu aanay caddayn, talo ka qaado ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.agency': "Xafiiska shaqo-qoristu waa loo-shaqeeyahaaga", // nieuw, nalezen
    'c.agency.b': "Haddii aad ka shaqeyso xafiis shaqo-qoris (uitzendbureau), xafiiskaas ayaa ah loo-shaqeeyahaaga, ma aha shirkadda aad ka shaqeyso. Qandaraaskaaga iyo mushaharkaagu waxay ka yimaadaan xafiiska, waxaana jira cao loogu talagalay shaqaalaha xafiisyada shaqo-qorista (uitzend-cao). Waxaad xaq u leedahay mushahar la mid ah kan shaqaalaha shirkadda ee qabta shaqada isku midka ah. Waxaad sidoo kale helaysaa lacagta fasaxa (vakantiegeld), waxaadna urursanaysaa maalmo fasax ah. Hayso liiskaaga gaarka ah ee saacadaha aad shaqaysay, kuna hubi warqadda mushaharkaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.agency.p': "Warqadda mushaharkaygu waxay muujinaysaa saacado aad u yar.", // nieuw, nalezen
    'c.agency.s': "Warqadda mushaharkaagu waxay muujinaysaa 32 saacadood, laakiin waxaad shaqaysay 38. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.agency.o1': "Xafiiska tus liiskaaga saacadaha oo weydiiso inay saxaan.", // nieuw, nalezen
    'c.agency.o2': "Waxba ha odhan, maxaa yeelay waa 6 saacadood oo keliya.", // nieuw, nalezen
    'c.agency.o3': "Madaxa shirkadda aad ka shaqeyso weydiiso inuu bixiyo 6-da saacadood.", // nieuw, nalezen
    'c.agency.w': "Xafiiska ayaa lacagta ku siiya, sidaas darteed xafiisku waa inuu saxaa khaladka. Liiskaaga gaarka ah ee taariikhaha iyo saacadaha ayaa ku caawinaya. Inaad wax ka weydiiso waa xaqaaga.", // nieuw, nalezen
    'c.bsn': "BSN-kaaga: si ammaan ah u hay", // nieuw, nalezen
    'c.bsn.b': "Waxaad heshaa BSN (burgerservicenummer) marka aad iska diiwaangeliso dowladda hoose (gemeente). Halkan muddo gaaban oo keliya ma joogtaa? Markaas waxaad iska diiwaangelisaa xafiis RNI ah. BSN-kaaga waxaad u baahan tahay shaqada, canshuurta, caymiska caafimaadka iyo koontada bangiga. Loo-shaqeeyahaagu wuxuu u baahan yahay kaarkaaga aqoonsiga iyo BSN-kaaga. BSN-kaaga ama nuqul kaarkaaga aqoonsiga ah ha siin qof kasta. Marka hore weydii sababta ay ugu baahan yihiin. Ma guuraysaa? Cinwaankaaga cusub ka diiwaangeli gemeente 5 maalmood gudahood. DigiD waa gelitaankaaga boggaga internetka ee dowladda: marnaba qof kale ha siin. Ma ku nooshahay ama ma ka shaqeysaa halkan? Markaas inta badan waa inaad leedahay caymis caafimaad oo Holland ah (zorgverzekering). Si dhakhso ah u samee. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.bsn.p': "Maxaad ugu baahan tahay BSN-kayga?", // nieuw, nalezen
    'c.bsn.s': "Qof aadan aqoon ayaa shaqo kuugu soo bandhigay WhatsApp. Wuxuu rabaa sawirka baasaboorkaaga iyo gelitaankaaga DigiD. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.bsn.o1': "Marnaba ha bixin gelitaankaaga DigiD. Hubi cidda uu yahay.", // nieuw, nalezen
    'c.bsn.o2': "Si degdeg ah wax walba u dir si aad shaqada u hesho.", // nieuw, nalezen
    'c.bsn.o3': "Dir sawirka baasaboorka oo keliya.", // nieuw, nalezen
    'c.bsn.w': "DigiD-gaaga ama nuqul kaarkaaga aqoonsiga, dad kale ayaa ku isticmaali kara magacaaga, tusaale ahaan deyn ama gunno. Loo-shaqeeye dhab ah wuxuu u baahan yahay kaarkaaga aqoonsiga iyo BSN-kaaga, laakiin marnaba uma baahna gelitaankaaga DigiD.", // nieuw, nalezen
    'c.housing': "Guri uu bixiyo loo-shaqeeyahaagu", // nieuw, nalezen
    'c.housing.b': "Loo-shaqeeyahaaga ama xafiiska shaqo-qoristu ma kuu diyaariyaan guriga? Markaas qandaraaska kiradu waa inuu ka gooni yahay qandaraaska shaqadaada. Weydiiso qandaraas kiro oo qoran iyo caddayn waxa aad bixiso. Kirada waxaa lagaa jari karaa mushaharkaaga oo keliya haddii aad qoraal ku oggolaatay, oo xadka sharciga gudihiisa: ku hubi warqadda mushaharkaaga. Lacagta dhigaalka (borg) ugu badnaan waa 2 bilood oo kirada aasaasiga ah. Waad dib u helaysaa marka aad guriga ka baxdo, marka laga jaro waxyeellada dhabta ah. Cinwaankaaga iska diiwaangeli gemeente. Guri aan ammaan ahayn, handadaad ama kharash aan cadaalad ahayn? U sheeg gemeente (meldpunt), oo talo bilaash ah ka hel Juridisch Loket ama adeeg talada guryaha. Dhibaato ku saabsan qiimaha kirada ama kharashka adeegyada, waxaa jira Huurcommissie. Shaqadaadu ma dhammaanaysaa? Talo weydiiso ka hor intaadan guriga ka bixin. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.housing.p': "Ma heli karaa caddayn inaan bixiyay?", // nieuw, nalezen
    'c.housing.s': "Shaqadaadu way dhammaanaysaa. Xafiiska shaqo-qoristu wuxuu yiri: “Berri waa inaad guriga ka baxdaa.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.housing.o1': "Marka hore talo ka weydii Juridisch Loket.", // nieuw, nalezen
    'c.housing.o2': "Isla markiiba ka bax oo iska illow lacagta dammaanadda.", // nieuw, nalezen
    'c.housing.o3': "Joog, oo jooji inaad ka jawaabto xafiiska shaqo-qorista.", // nieuw, nalezen
    'c.housing.w': "Qandaraaska kirada wuxuu leeyahay xeerar u gaar ah, oo ka duwan shaqadaada. Talo bilaash ah ayaa kaa caawinaysa inaad ogaato xuquuqdaada, tusaale ahaan goorta ay tahay inaad guriga ka baxdo iyo lacagta dammaanadda.", // nieuw, nalezen
    'c.payslip': "Hubi warqadda mushaharkaaga", // nieuw, nalezen
    'c.payslip.b': "Bruto waa mushaharkaaga kahor canshuurta. Netto waa waxa aad ku hesho akoonkaaga bangiga: bruto oo laga jaray canshuurta iyo lacagaha caymiska (loonheffing). Loo-shaqeeyahaagu waa inuu ku siiyaa warqadda mushaharka (loonstrook). Warqad kasta oo mushahar ah ku hubi saacadaha iyo lacagta, oo qor saacadaha aad shaqeyso. Ma leedahay laba shaqo? Dhimista canshuurta (loonheffingskorting) ka isticmaal hal loo-shaqeeye oo keliya. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.payslip.p': "Saacado badan ayaan shaqeeyey. Ma hubin kartaa?", // nieuw, nalezen
    'c.payslip.s': "Warqadda mushaharkaaga waxay muujinaysaa saacado ka yar intii aad shaqeysay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.payslip.o1': "Tus qoraalladaada oo madaxaaga ka codso inuu hubiyo.", // nieuw, nalezen
    'c.payslip.o2': "Waxba ha oran, maxaa yeelay ma rabtid dhibaato.", // nieuw, nalezen
    'c.payslip.o3': "Sug hal bil: warqadda mushaharka ee xigta way ku saxnaan doontaa.", // nieuw, nalezen
    'c.payslip.w': "Khaladaad ayaa ka dhaca warqadda mushaharka. In wax laga weydiiyo waa caadi, waana xaqaaga. Qoraalladaada ee taariikhaha iyo saacadaha aad bay wax u taraan.", // nieuw, nalezen
    'c.extra': "Lacagta fasaxa iyo mushaharka ugu yar", // nieuw, nalezen
    'c.extra.b': "Waxaad heshaa lacagta fasaxa (vakantiegeld): ugu yaraan 8% mushaharkaaga guud. Loo-shaqeeyayaasha badankoodu waxay bixiyaan sannadkii hal mar, bisha May ama June. Mushaharkaagu waligiis kama yaraan karo mushaharka ugu yar ee sharciga (minimumloon); shaqaalaha ka yar 21 sano wuu ka yar yahay. Lacagtu sannad kasta way isbeddeshaa: ka eeg rijksoverheid.nl. Badanaa cao waxay ku siisaa lacag dheeraad ah saacadaha dheeraadka ah ama shaqada habeenkii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.extra.p': "Goorma ayaan helayaa lacagta fasaxa?", // nieuw, nalezen
    'c.extra.s': "Saaxiibka shaqada ayaa yiri: “Bisha May madaxa ayaa lacag dheeraad ah ku siinaya.” Waa maxay?", // nieuw, nalezen
    'c.extra.o1': "Lacagta fasaxa: ugu yaraan 8% mushaharkaaga guud.", // nieuw, nalezen
    'c.extra.o2': "Hadiyad, oo keliya loogu talagalay shaqaalaha ugu fiican.", // nieuw, nalezen
    'c.extra.o3': "Bisha 13aad: hal bil oo mushahar dheeraad ah, qof walba.", // nieuw, nalezen
    'c.extra.w': "Lacagta fasaxa waa xaqaaga, ma aha hadiyad. Saacad kasta oo aad shaqeyso ayaad wax ka kaydsataa. Haddii aad shaqada ka tagto kahor, waxaad ku helaysaa mushaharkaaga ugu dambeeya.", // nieuw, nalezen
    'c.phone': "Taleefankaaga shaqada", // nieuw, nalezen
    'c.phone.b': "Goobo shaqo oo badan ma oggola taleefanka inta shaqada la jiro, gaar ahaan agagaarka mashiinnada iyo forklift-yada, ama wax-soo-saarka cuntada. Waxay noqon kartaa mid aan ammaan ahayn ama aan nadiif ahayn. Taleefankaaga isticmaal waqtiga nasashada. Ma sugaysaa wicitaan degdeg ah oo ka imanaya qoyskaaga? Marka hore u sheeg madaxaaga. Ha qaadin sawirro ama muuqaallo shaqada idan la'aan: ka fikir sirta saaxiibbada shaqada iyo sirta shirkadda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.phone.p': "Ilmahaygu waa xanuunsan yahay. Taleefankaygu ma shidnaan karaa?", // nieuw, nalezen
    'c.phone.s': "Hooyadaa waxay jirtaa isbitaalka, maantana way ku soo wici kartaa. Taleefannada looma oggola goobta shaqada. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.phone.o1': "U sheeg madaxaaga oo weydii sida laguu heli karo.", // nieuw, nalezen
    'c.phone.o2': "Taleefanka jeebka ku hay oo si aamusnaan ah uga jawaab mashiinka agtiisa.", // nieuw, nalezen
    'c.phone.o3': "Guriga joog adigoon cidna u sheegin sababta.", // nieuw, nalezen
    'c.phone.w': "Madaxdu badanaa way fahmaan xaalad degdeg ah oo qoyska ah. Marka ay ogaadaan, waxay heli karaan xal ammaan ah, tusaale ahaan waqti go'an oo aad taleefankaaga eegto.", // nieuw, nalezen
    'c.smoking': "Sigaarka dibadda oo keliya", // nieuw, nalezen
    'c.smoking.b': "Holland gudaheeda, sigaar cabbidda goobta shaqada gudaheeda waa mamnuuc sharci ahaan. Sidoo kale waxay khuseysaa sigaarka elektaroonigga ah (vapes). Laga soo bilaabo 2022, qolalka sigaarka ee gudaha shirkadaha lama oggola. Sigaarka ka cab dibadda oo keliya, meesha loo-shaqeeyahaagu oggol yahay, badanaana waqtiga nasashada oo keliya. Nasashooyin dheeraad ah oo sigaar ma aha xaq: kala hadal madaxaaga. Waligaa ha cabbin sigaar meel u dhow waxyaabo si fudud u gubta, sida shidaal ama kartoonno bakhaar ku jira. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.smoking.p': "Ma sigaar ka cabbi karaa dibadda waqtiga nasashada?", // nieuw, nalezen
    'c.smoking.s': "Waa qabow, roobna wuu da'ayaa. Saaxiibka shaqada ayaa yiri: “Qolka kaydka ku cab, cidna ma arkayso.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.smoking.o1': "Dheh maya, oo sigaarka ka cab dibadda waqtiga nasashada.", // nieuw, nalezen
    'c.smoking.o2': "Si degdeg ah qolka kaydka ugu cab, kaliya hal mar.", // nieuw, nalezen
    'c.smoking.o3': "Halkii, vape-kaaga gudaha ku isticmaal, maxaa yeelay taas waa la oggol yahay.", // nieuw, nalezen
    'c.smoking.w': "Sigaar gudaha lagu cabbo waa ka soo horjeedaa sharciga, wuxuuna bilaabi karaa dab. Vape-na gudaha looma oggola. Raacidda xeerka ayaa qof walba ammaan ka dhigta.", // nieuw, nalezen
    'c.clock': "Adigu iska diiwaangeli saacadda", // nieuw, nalezen
    'c.clock.b': "Adigu iska diiwaangeli gelitaanka iyo bixitaanka, xilliga aad dhab ahaan bilowdo iyo marka aad joojiso shaqada. Waligaa ha u diiwaangelin saaxiib shaqo, waligaana ha u oggolaan qof kale inuu isticmaalo kaarkaaga. Tani waxay u tirsan tahay khiyaano, waxayna keeni kartaa in shaqada lagaa eryo. Ma soo daahaysaa? Wac kahor inta uusan wareeggaaga shaqo bilaabmin. Hubi in saacadaha aad diiwaangelisay ay la mid yihiin warqadda mushaharkaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.clock.p': "Waan illaaway inaan iska diiwaangeliyo bixitaanka. Ma saxi kartaa?", // nieuw, nalezen
    'c.clock.s': "Saaxiib shaqo ayaa kaarkiisa ku siiyey: “I diiwaangeli, 20 daqiiqo ayaan soo daahayaa.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.clock.o1': "Dheh maya, oo u sheeg inuu madaxa wacdo.", // nieuw, nalezen
    'c.clock.o2': "Hal mar oo keliya samee, maxaa yeelay waa saaxiibkaa.", // nieuw, nalezen
    'c.clock.o3': "Isaga diiwaangeli oo goor dambe madaxa u sheeg.", // nieuw, nalezen
    'c.clock.w': "In qof kale loo diiwaangeliyo waxay u tirsan tahay khiyaano, labadiinaba. In aad maya tiraahdo waxay ilaalinaysaa saaxiibkaa shaqada iyo shaqadaada.", // nieuw, nalezen
    'c.hygiene': "Maskax cad, gacmo nadiif ah", // nieuw, nalezen
    'c.hygiene.b': "Khamriga iyo daroogada shaqada, ama inaad shaqada timaado kadib markaad isticmaashay, waa mamnuuc ku dhowaad shirkad kasta. Aad bay khatar u tahay agagaarka mashiinnada iyo forklift-yada, waxayna keeni kartaa in shaqada lagaa eryo. Daawo ma kuu keentaa lulmo ama wareer? U sheeg madaxaaga, si aad u qabato shaqo ammaan ah. Uma baahnid inaad sheegto daawada ay tahay. Wax-soo-saarka cuntada xeerarka nadaafaddu way adag yihiin: gacmaha dhaq, xiro dhar shaqo oo nadiif ah, shabag timaha haddii loo baahdo, hana xiran dahab iyo qurxin. Matag ama shuban? Sheeg kahor intaadan bilaabin. Goobtaada shaqada nadiif ka dhig. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.hygiene.p': "Daawo ayaan qaataa. Waxay ii keentaa lulmo.", // nieuw, nalezen
    'c.hygiene.s': "Dhakhtarkaagu wuxuu ku siiyey daawo kuu keenta lulmo. Berri waa inaad wadato forklift. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hygiene.o1': "U sheeg madaxaaga kahor intaadan bilaabin.", // nieuw, nalezen
    'c.hygiene.o2': "Waxba ha oran oo si tartiib ah u wad.", // nieuw, nalezen
    'c.hygiene.o3': "Jooji daawada adigoon dhakhtarkaaga weydiin.", // nieuw, nalezen
    'c.hygiene.w': "Madaxaagu uma baahna inuu ogaado daawada ay tahay, keliya inaadan hadda wadi karin ama mashiinno ku shaqeyn karin. Taasi waxay ammaan ka dhigaysaa adiga iyo saaxiibbadaada shaqada.", // nieuw, nalezen
    'c.smalltalk': "Sheeko yar waqtiga nasashada", // nieuw, nalezen
    'c.smalltalk.b': "Sheekooyin gaagaaban waqtiga nasashada waa caadi. Waxay kaa caawiyaan inaad dareento inaad ka mid tahay kooxda. Waad ku soo dhowdahay miiska qaxwada ama qadada. Mawduucyo fudud waa dhammaadka toddobaadka, cimilada, ciyaaraha iyo fasaxyada. Su'aalaha ku saabsan mushaharka, diinta ama nolosha gaarka ah ee qofka badanaa aad bay u gaar yihiin bilowga. Maalinta dhalashadooda, dadku badanaa waxay kooxda u keenaan wax macaan (trakteren), sida keeg. Saaxiib shaqo ma leeyahay maalin dhalasho maanta? Dheh “Gefeliciteerd!”.", // nieuw, nalezen
    'c.smalltalk.p': "Hambalyo, maalin dhalasho wacan!", // nieuw, nalezen
    'c.smalltalk.s': "Waqtiga nasashada, saaxiibbadaada shaqada waxay wada fadhiyaan miis. Weli si fiican uma taqaanid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.smalltalk.o1': "Weydii “Mag ik bij jullie zitten?” oo ku biir sheeko gaaban.", // nieuw, nalezen
    'c.smalltalk.o2': "Maalin walba keligaa dibadda wax ku cun, si aadan u dhibin.", // nieuw, nalezen
    'c.smalltalk.o3': "Saaxiib shaqo kasta weydii inta uu kasbado.", // nieuw, nalezen
    'c.smalltalk.w': "In aad miiska ku biirto waa la soo dhoweeyaa, waxayna kaa caawinaysaa inaad barato kooxda. Su'aal fudud sida “Hoe was je weekend?” waa bilow wanaagsan.", // nieuw, nalezen
    'c.mistakes': "Khaladaadku waa caadi", // nieuw, nalezen
    'c.mistakes.b': "Qof walba wuu khaldamaa shaqada. Si degdeg ah u sheeg, si loo saxo: “Sorry, ik heb een fout gemaakt.” Khalad la qariyo waxaa loo arkaa wax ka sii xun khaladka laftiisa. Faalladu (feedback) waxay ku saabsan tahay shaqada, ma aha adiga qof ahaan. Ma lagu ammaanay? Kaliya dheh mahadsanid. Ma kuu caddayn waxa aad si fiican u samayn lahayd? Weydii: “Kun je het uitleggen?”", // nieuw, nalezen
    'c.mistakes.p': "Waan ka xumahay, khalad ayaan sameeyey. Sideen u saxi karaa?", // nieuw, nalezen
    'c.mistakes.s': "20 sanduuq ayaad saartay baaleet khaldan. Weli cidna ma arkin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.mistakes.o1': "U sheeg madaxaaga oo ka caawi saxitaanka.", // nieuw, nalezen
    'c.mistakes.o2': "Waxba ha oran oo rajee in cidna aysan ogaan.", // nieuw, nalezen
    'c.mistakes.o3': "Dheh saaxiib shaqo ayaa sameeyey.", // nieuw, nalezen
    'c.mistakes.w': "Khalad goor hore la sheego way fududahay in la saxo. Daacadnimadu waxay dhistaa kalsooni, taasina way ka muhiimsan tahay in aadan waligaa khaldamin.", // nieuw, nalezen
    'c.respect': "Ixtiraam qof walba", // nieuw, nalezen
    'c.respect.b': "Shaqada, qof walba waa siman yahay, qof walbana waxaa lala dhaqmaa ixtiraam, iyadoon loo eegin jinsigiisa, asalkiisa, diintiisa ama u janjeerkiisa galmada. Adiga ayaa go'aamiya taabashada jirka. Gacan isu qaadiddu waa caadi. Laakiin waxaad sidoo kale ku salaami kartaa hab kale oo edeb leh, sida madax-ruxid iyo dhoolacaddayn. Kadib si kooban u sharax. Kaftanka ku saabsan asalka ama diinta qofka, hanjabaadda, cagajuglaynta (pesten) iyo dhaqanka galmada ee aan la rabin lama aqbalo. Waxaad u sheegi kartaa madaxaaga, ama la-taliyaha sirta (vertrouwenspersoon) haddii shirkaddaadu leedahay mid.",
    'c.respect.p': "Waxaan doorbidaa inaanan gacan qaadin, laakiin waan ku faraxsanahay inaan ku salaamo.", // nieuw, nalezen
    'c.respect.s': "Saaxiib shaqo ayaa had iyo jeer kaftan ka sameeya diintaada. Waxaad ka codsatay inuu joojiyo, laakiin wuu sii wadaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.respect.o1': "U sheeg madaxaaga ama vertrouwenspersoon (la-taliyaha sirta).", // nieuw, nalezen
    'c.respect.o2': "La qosol, si aysan dhibaato u dhicin.", // nieuw, nalezen
    'c.respect.o3': "Adna kaftan ka samee asalkiisa.", // nieuw, nalezen
    'c.respect.w': "Kaftan noocaas ah lagama aqbalo shaqada. In la sheego waa caadi: shirkaddu waa inay goobta shaqada ka dhigto meel ammaan u ah qof walba.", // nieuw, nalezen
    'c.health': "Nasashada iyo saacadaha shaqada", // nieuw, nalezen
    'c.health.b': "Sharcigu wuxuu ilaaliyaa caafimaadkaaga. Ma shaqaysaa in ka badan 5.5 saacadood? Markaas waxaad helaysaa ugu yaraan 30 daqiiqo oo nasasho ah (waxay noqon kartaa 2 jeer 15 daqiiqo). Ka badan 10 saacadood? Markaas ugu yaraan 45 daqiiqo. Xeerarka nasashada way ku yara kala duwanaan karaan cao. Waxaad shaqeyn kartaa ugu badnaan 12 saacadood hal wareeg shaqo iyo 60 saacadood hal toddobaad. Ka yar 18 sano? Markaas waxaad shaqeyn kartaa saacado ka yar. Loo-shaqeeyahaagu waa inuu ku siiyaa qalabka ilaalinta, sida kabaha badbaadada ama gacmo-gashiyo, bilaash. Shaqo aan ammaan ahayn ama mushahar aad u yar? Waxaad u sheegi kartaa Nederlandse Arbeidsinspectie, xataa adigoon magacaaga bixin. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.health.p': "Weli nasasho ma aanan helin.", // nieuw, nalezen
    'c.health.s': "6 saacadood ayaad shaqeysay nasasho la'aan. Madaxaagu wuxuu kaa codsaday inaad sii wado. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.health.o1': "Dheh inaad hadda u baahan tahay nasashadaada.", // nieuw, nalezen
    'c.health.o2': "Sii wad, oo goor dambe qaado nasasho dheer.", // nieuw, nalezen
    'c.health.o3': "Shaqada ka tag oo guriga aad adigoon waxba oran.", // nieuw, nalezen
    'c.health.w': "Marka aad shaqeyso in ka badan 5.5 saacadood, nasashadu waa sharci, ma aha raalli-gelin. Nasashaduna waxay kaa caawisaa inaad si ammaan ah u shaqeyso.", // nieuw, nalezen
    'c.rights': "Takoorid iyo shaqo ka eryid", // nieuw, nalezen
    'c.rights.b': "Takoorid shaqada waa mamnuuc, tusaale ahaan asalkaaga, diintaada ama jinsigaaga darteed. Loo-shaqeeyahaagu si fudud kuuma eryi karo: caadi ahaan wuxuu u baahan yahay oggolaansho UWV ama garsoore, ama oggolaanshahaaga. (Muddada tijaabada ama dhammaadka qandaraas ku meel gaar ah, xeerar kale ayaa khuseeya.) Ha saxiixin warqad ku saabsan eryiddaada oo aadan fahmin. Ma saxiixday heshiis lagu joojinayo shaqadaada (vaststellingsovereenkomst)? Markaas badanaa weli waad baajin kartaa, adigoo qoraal ku sameeya 14 maalmood gudahood. Marka hore caawimaad hel. U tag ururka shaqaalaha (tusaale ahaan FNV), xafiis caawiya dadka la takooray ama Juridisch Loket. Juridisch Loket wuxuu bixiyaa talo sharci oo bilaash ah. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.",
    'c.rights.p': "Marka hore waxaan rabaa inaan talo weydiiyo.", // nieuw, nalezen
    'c.rights.s': "Madaxaagu wuxuu ku siiyey warqad: “Maanta saxiix, markaas waxaad ku tagaysaa heshiis.” Si fiican uma fahmin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.rights.o1': "Weli ha saxiixin. Marka hore talo hel.", // nieuw, nalezen
    'c.rights.o2': "Saxiix, maxaa yeelay madaxa ayaa yiri waa caadi.", // nieuw, nalezen
    'c.rights.o3': "Warqadda meel dhig oo waligaa ha ka hadlin.", // nieuw, nalezen
    'c.rights.w': "Wax khaldan ma ku jiraan? Markaas waxaad lumin kartaa xuquuq, tusaale ahaan gunnada shaqo la'aanta (WW). In aad waqti u weydiisato talo waa caadi waana la oggol yahay.", // nieuw, nalezen
    'c.leave': "Fasaxyada iyo fasaxa degdegga ah", // nieuw, nalezen
    'c.leave.b': "Sharci ahaan waxaad heshaa maalmo fasax ah oo lacag leh: ugu yaraan 4 jeer maalmaha aad toddobaadkii shaqeyso. Waqti buuxa, 5 maalmood toddobaadkii? Markaas ugu yaraan 20 maalmood sannadkii. Cao waxay ku siin kartaa wax ka badan. Fasax codso waqti hore, oo qoraal ku codso. Xaalad degdeg ah oo kedis ah, sida shil ama xanuun qoyskaaga ku dhacay? Markaas waxaad heli kartaa fasax gaaban oo lacag leh (calamiteitenverlof). Isla markiiba u sheeg loo-shaqeeyahaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.leave.p': "Waxaan jeclaan lahaa inaan fasax u codsado bisha July.", // nieuw, nalezen
    'c.leave.s': "Xagaaga waxaad rabtaa inaad saddex toddobaad booqato qoyskaaga dibadda jooga. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.leave.o1': "Loo-shaqeeyahaaga goor hore fasax ka codso, qoraal ahaan.", // nieuw, nalezen
    'c.leave.o2': "Kaliya tag, oo madaxaaga u sheeg markaad soo noqoto.", // nieuw, nalezen
    'c.leave.o3': "Saaxiib shaqo ka codso inuu madaxa u sheego maalinta ka horreysa.", // nieuw, nalezen
    'c.leave.w': "Loo-shaqeeyahaagu badanaa waa inuu haa yiraahdo. Wuxuu maya oran karaa oo keliya sabab aad u wanaagsan darteed, markaasna qoraal ahaan 2 toddobaad gudahood. Codsiga goor hore ayaa ugu fursad badan inuu haa noqdo.", // nieuw, nalezen
    'c.illness': "Xuquuqdaada marka aad xanuunsan tahay", // nieuw, nalezen
    'c.illness.b': "Marka aad xanuunsan tahay, loo-shaqeeyahaagu waa inuu bixiyaa ugu yaraan 70% mushaharkaaga, ilaa 2 sano. Badanaa cao ayaa siisa wax ka badan. Waxaa jiri kara ilaa 2 maalmood oo sugitaan ah (wachtdagen) oo aan lacag lahayn, laakiin keliya haddii qandaraaskaaga ama cao sidaas sheegayo. Madaxaagu kuma weydiin karo xanuunka aad qabto. Caafimaadkaaga iyo shaqadaada waxaad kala hadashaa dhakhtarka shirkadda (bedrijfsarts). Wac loo-shaqeeyahaaga marka aad bogsato (betermelden). Sannadka koowaad waxaad helaysaa ugu yaraan mushaharka ugu yar. Qandaraas ku meel gaar ah wuxuu ku dhammaadaa taariikhdiisa dhammaadka, xataa marka aad xanuunsan tahay. Ma waxaad ka shaqeysaa xafiis shaqo-qoris? Haddii qandaraaskaagu leeyahay qodobka xafiiska shaqo-qorista (uitzendbeding), wuu dhammaan karaa marka aad xanuunsato. Markaas UWV wax ka weydii Ziektewet, ama weydii ururka shaqaalaha. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.illness.p': "Waan bogsaday. Berri ayaan shaqada imanayaa.", // nieuw, nalezen
    'c.illness.s': "Toddobaad ayaad xanuunsanayd. Loo-shaqeeyahaagu wuxuu kaa codsaday inaad booqato dhakhtarka shirkadda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.illness.o1': "Tag, oo dhakhtarka kala hadal caafimaadkaaga iyo shaqadaada.", // nieuw, nalezen
    'c.illness.o2': "Ha tagin, maxaa yeelay horay waxaad u leedahay dhakhtar adiga kuu gaar ah.", // nieuw, nalezen
    'c.illness.o3': "Shaqada ku noqo adigoo weli xanuunsan, si aadan u tagin.", // nieuw, nalezen
    'c.illness.w': "Dhakhtarka shirkaddu wuxuu kaa caawiyaa inaad si caafimaad leh shaqada ugu noqoto. Dhakhtarku madaxaaga uma sheego faahfaahinta caafimaadkaaga, keliya shaqada aad qaban karto.", // nieuw, nalezen
    'c.warning': "Calaamadaha ka faa'iideysiga xun", // nieuw, nalezen
    'c.warning.b': "Iska jir calaamadahan. Loo-shaqeeyahaagu wuxuu hayaa baasaboorkaaga ama aqoonsigaaga. Taas lama oggola: aqoonsigaaga adigaa haysanaya. Loo-shaqeeyuhu wuxuu samayn karaa koobi oo keliya. Waxaad heshaa mushahar aad uga yar kii lagu heshiiyey, ama warqad mushahar ma helid. Waa inaad bixisaa deyn weyn oo aad ku leedahay loo-shaqeeyaha ama xafiiska shaqo-qorista. Waa inaad shaqeysaa saacado aad u dheer, adigoon doorasho lahayn. Qof ayaa kugu hanjabaya, ama guriga aad deggan tahay u isticmaalaya inuu cadaadis kugu saaro. Tani ma aha caadi lamana oggola. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.",
    'c.warning.p': "Waxaan rabaa in baasaboorkayga la ii celiyo.", // nieuw, nalezen
    'c.warning.s': "Maalintaada ugu horreysa, xafiiska shaqo-qoristu wuxuu yiri: “Baasaboorkaaga annagaa hayn doonna, ammaan darteed.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.warning.o1': "Adigu hay. Koobi ayay samayn karaan.", // nieuw, nalezen
    'c.warning.o2': "Sii, maxaa yeelay xafiisku wuu yaqaan xeerarka.", // nieuw, nalezen
    'c.warning.o3': "Sii, laakiin marka hore sawir ka qaad.", // nieuw, nalezen
    'c.warning.w': "Baasaboorkaagu waa kaaga. Haysashadiisu waa hab lagu xakameeyo shaqaalaha. Loo-shaqeeyuhu wuxuu u baahan yahay koobi oo keliya oo faylasha loogu talagalay.", // nieuw, nalezen
    'c.gethelp': "Halka aad caawimaad ka heli karto", // nieuw, nalezen
    'c.gethelp.b': "Ma aragtaa calaamado ka faa'iideysi xun, adiga ama qof kale? Caawimaad hel. Waxaad u sheegi kartaa Nederlandse Arbeidsinspectie, xataa adigoon magacaaga bixin, ama booliska. Meld Misdaad Anoniem: 0800-7000. Talo sharci oo bilaash ah: Juridisch Loket. Khatar ma ku jirtaa? Wac 112. Qof kasta oo Holland ka shaqeeya wuu heli karaa caawimaad, xataa muhaajiriinta. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.gethelp.p': "Caawimaad ayaan u baahanahay. Si xun ayaa la iiga faa'iideysanayaa.", // nieuw, nalezen
    'c.gethelp.s': "Saaxiib ayaa maalintii 14 saacadood shaqeeya, ku dhowaad mushahar ma helo, wuxuuna ka baqaa madaxa. Maxaad samayn kartaa?", // nieuw, nalezen
    'c.gethelp.o1': "Ka caawi inuu la xiriiro Arbeidsinspectie ama Juridisch Loket.", // nieuw, nalezen
    'c.gethelp.o2': "U sheeg in tani caadi u tahay shaqaalaha cusub.", // nieuw, nalezen
    'c.gethelp.o3': "U sheeg inuu sugo ilaa qandaraaskiisu dhammaado, kadibna shaqo kale raadsado.", // nieuw, nalezen
    'c.gethelp.w': "Caawimaad ayaa u diyaar ah qof kasta oo Holland ka shaqeeya. Warbixin waxaa sidoo kale la samayn karaa magacyo la'aan.", // nieuw, nalezen
    'c.callin': "Wicitaanka madaxaaga", // nieuw, nalezen
    'c.callin.b': "Marka aad wacdo madaxaaga, sheeg magacaaga, sababta, iyo goorta aad filayso inaad soo noqoto. Ma xanuunsan tahay? Waxaad sheegaysaa oo keliya inaad xanuunsan tahay, ma aha xanuunka aad qabto. Wac: ha dirin fariin qoraal ah oo keliya, ilaa shirkaddaadu tiraahdo fariin qoraal ah waa caadi. Jawaab ma jirto? Kaga tag fariin cod ah oo mar kale isku day. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.callin.p': "Haloo, waa Ali. Maanta ma iman karo.", // nieuw, nalezen
    'c.callin.s': "Ilmahaagu waa xanuunsan yahay mana iman kartid shaqada. Shirkaddaadu waxay rabtaa inaad wacdo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.callin.o1': "Wac madaxaaga kahor wareeggaaga shaqada.", // nieuw, nalezen
    'c.callin.o2': "Dir fariin gaaban marka wareeggaaga shaqo bilaabmayo.", // nieuw, nalezen
    'c.callin.o3': "Deriskaaga ka codso inuu kuu waco.", // nieuw, nalezen
    'c.callin.w': "Wicitaanku waa cad yahay waana degdeg, madaxaaguna su'aalo ayuu weydiin karaa. In aad sheegto goorta aad filayso inaad soo noqoto waxay ka caawisaa inuu qorsheeyo. Sidoo kale sheeg magacaaga iyo sababta.", // nieuw, nalezen
    'c.texting': "Fariimaha shaqada: gaaban oo edeb leh", // nieuw, nalezen
    'c.texting.b': "Fariimaha shaqada ka dhig kuwo gaaban oo edeb leh. Sheeg cidda aad tahay iyo waxa dhacaya, oo ku dhammee salaan. Tusaale ahaan: “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Had iyo jeer app-ka ka eeg jadwalkaaga shaqada (rooster). Codsiyada wareegyada shaqada waqtigooda uga jawaab. Si aad u beddesho wareeg shaqo, madaxaaga ama qorsheeyaha ayaa marka hore oggolaanaya, sidaas darteed weydii: “Mag ik mijn dienst ruilen?” Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.texting.p': "Haye Mark, 10 daqiiqo ayaan soo daahayaa. Waan ka xumahay! Salaan, Ali", // nieuw, nalezen
    'c.texting.s': "10 daqiiqo ayaad soo daahaysaa. Fariintee ayaa ugu fiican oo aad u dirto madaxaaga?", // nieuw, nalezen
    'c.texting.o1': "“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”", // nieuw, nalezen
    'c.texting.o2': "“Sorry, ik ben er zo!” (magacaaga la'aan, waqtiga la'aan).", // nieuw, nalezen
    'c.texting.o3': "Fariin cod ah oo saddex daqiiqo ah oo ku saabsan gaadiidka.", // nieuw, nalezen
    'c.texting.w': "Fariin wanaagsan waxay sheegtaa cidda aad tahay iyo waxa dhacaya, ereyo yar. Markaas madaxaagu isla markiiba wuu garanayaa.", // nieuw, nalezen
    'c.certs': "Shahaadooyinku way ku caawiyaan", // nieuw, nalezen
    'c.certs.b': "Dhismaha, warshadaha iyo shaqada ku meel gaarka ah badanaa waxaad u baahan tahay shahaadada VCA (badbaadada). Si aad u wadato forklift badanaa waxaad u baahan tahay shahaadada forklift-ka (heftruckcertificaat). Weydii loo-shaqeeyahaaga haddii uu bixinayo koorsada iyo imtixaanka.", // nieuw, nalezen
    'c.certs.p': "Ma halkan ku qaadan karaa koorsada VCA?", // nieuw, nalezen
    'c.certs.s': "Shaqo ayaa u baahan shahaadada VCA. Weli ma haysatid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.certs.o1': "Loo-shaqeeyaha ama xafiiska shaqo-qorista ka codso inay kaa caawiyaan helitaankeeda.", // nieuw, nalezen
    'c.certs.o2': "Ha codsan, maxaa yeelay waligaa ma heli doontid shaqada.", // nieuw, nalezen
    'c.certs.o3': "Dheh waad haysataa, oo rajee in cidna aysan hubin.", // nieuw, nalezen
    'c.certs.w': "Loo-shaqeeyayaal iyo xafiisyo shaqo-qoris badan ayaa ka caawiya VCA. Weydiintu waxay muujinaysaa inaad rabto inaad wax barato.", // nieuw, nalezen
    'c.diploma': "Shahaadadaadu way tirsan tahay", // nieuw, nalezen
    'c.diploma.b': "Ma haysataa shahaado waddan kale laga keenay? Waxaad ka qiimeyn kartaa IDW (Internationale Diplomawaardering). Markaas loo-shaqeeyayaashu waxay arki karaan qiimaha ay halkan ku leedahay. Tababar ma looga baahan yahay shaqadaada? Markaas loo-shaqeeyahaagu waa inuu bixiyaa, wuxuuna u tirsan yahay waqti shaqo. Madaxaaga wax ka weydii koorsooyinka. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.diploma.p': "Ma jiraan koorsooyin aniga ii habboon?", // nieuw, nalezen
    'c.diploma.s': "Loo-shaqeeyahaagu wuxuu yiri waa inaad Sabtida qaadato tababar badbaado oo qasab ah, lacag la'aan. Maxaa run ah?", // nieuw, nalezen
    'c.diploma.o1': "Loo-shaqeeyaha ayaa bixiya, waana waqti shaqo.", // nieuw, nalezen
    'c.diploma.o2': "Tababarku had iyo jeer waa waqtigaaga firaaqada.", // nieuw, nalezen
    'c.diploma.o3': "Waa inaad adigu bixisaa lacagta tababarka.", // nieuw, nalezen
    'c.diploma.w': "Haddii tababar looga baahan yahay shaqadaada, loo-shaqeeyaha ayaa bixiya, wuxuuna u tirsan yahay waqti shaqo. Haddii aysan caddayn, talo weydiiso.", // nieuw, nalezen
    'c.doctor': "Dhakhtar mise 112?", // nieuw, nalezen
    'c.doctor.b': "Iska diiwaangeli dhakhtarka qoyska (huisarts) ee gurigaaga u dhow. Ma u baahan tahay daryeel degdeg ah fiidkii, habeenkii ama dhammaadka toddobaadka? Wac huisartsenpost. 112 wac oo keliya xaalad degdeg ah: khatar nafeed, dab, ama dambi hadda dhacaya. Daawooyinka waxaad ka heshaa farmashiyaha (apotheek).", // nieuw, nalezen
    'c.doctor.p': "Waxaan rabaa inaan iska diiwaangeliyo dhakhtarka qoyska.", // nieuw, nalezen
    'c.doctor.s': "Waa habeen Sabti. Ilmahaagu wuxuu qabaa qandho sare, laakiin wuu soo jeedaa oo si caadi ah ayuu u neefsanayaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.doctor.o1': "Wac huisartsenpost.", // nieuw, nalezen
    'c.doctor.o2': "Wac 112.", // nieuw, nalezen
    'c.doctor.o3': "Sug ilaa Isniinta oo waxba ha samayn.", // nieuw, nalezen
    'c.doctor.w': "Huisartsenpost wuxuu caawiyaa daryeelka degdegga ah ee ka baxsan saacadaha xafiiska. 112 waxaa loogu talagalay xaaladaha degdegga ah: khatar nafeed, dab, ama dambi hadda dhacaya.", // nieuw, nalezen
    'c.insurance': "Caymiska caafimaadka", // nieuw, nalezen
    'c.insurance.b': "Marka aad Holland ku nooshahay ama ka shaqeyso, caymiska caafimaadka aasaasiga ah badanaa waa qasab. Bil kasta waxaad bixisaa lacagta caymiska. Sannad kasta waxaa jira qayb aad adigu bixiso (eigen risico): kharashyada ugu horreeya adigaa iska bixiya. Lacagtu way isbeddeshaa: ka hubi shirkadda caymiskaaga. Booqashada dhakhtarka qoyska (huisarts) kama mid aha eigen risico. Dakhli yar haddii aad leedahay, waxaa laga yaabaa inaad hesho kaalmada caafimaadka (zorgtoeslag). Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.insurance.p': "Waxaan u baahanahay caymis caafimaad. Ma i caawin kartaa?", // nieuw, nalezen
    'c.insurance.s': "Laba toddobaad ka hor ayaad halkan ka bilowday shaqada, weli caymis caafimaad ma haysatid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.insurance.o1': "Si degdeg ah u samee caymis caafimaad.", // nieuw, nalezen
    'c.insurance.o2': "Sug: caymiskaaga waddankaaga ayaa ku filan.", // nieuw, nalezen
    'c.insurance.o3': "Isticmaal kaarka caymiska ee saaxiib.", // nieuw, nalezen
    'c.insurance.w': "Caymis la'aan, dhakhtar ama isbitaal aad bay qaali kuugu noqon karaan, waxaana lagu ganaaxi karaa. In aad si degdeg ah u samayso ayaa ku ilaalinaysa. Loo-shaqeeyahaaga ama xafiiska shaqo-qorista ayaa ku caawin kara.", // nieuw, nalezen
    'c.letters': "Warqadaha ha iska indha tirin", // nieuw, nalezen
    'c.letters.b': "Ha iska indha tirin warqadaha ka yimaada Belastingdienst, gemeente ama UWV. Qof aad aaminsan tahay ka codso inuu kaa caawiyo akhrintooda. Cadeynta canshuurta (aangifte) ee sannadkii hore badanaa waa in la sameeyaa kahor 1 May. Waxaad codsan kartaa waqti dheeraad ah. Kaalmooyinka lacageed (toeslagen) sida zorgtoeslag iyo huurtoeslag waxay ku xiran yihiin dakhligaaga. Haddii aad hesho wax badan, waa inaad dib u celisaa, sidaas darteed macluumaadka dakhligaaga had iyo jeer sax ka dhig. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.letters.p': "Warqad ayaa ii timid. Ma i caawin kartaa?", // nieuw, nalezen
    'c.letters.s': "Warqad ayaa kaaga timid Belastingdienst. Ma fahmin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.letters.o1': "Qof aad aaminsan tahay ka codso inuu kaa caawiyo akhrinteeda.", // nieuw, nalezen
    'c.letters.o2': "Khaanad ku rid oo sug.", // nieuw, nalezen
    'c.letters.o3': "Iska tuur, maxaa yeelay malaha waa xayeysiis.", // nieuw, nalezen
    'c.letters.w': "Warqadaha rasmiga ah badanaa waxay leeyihiin waqti kama dambeys ah. Haddii aad waqtigeeda ka jawaabto, dhibaatooyinka badanaa way fududahay in la xalliyo.", // nieuw, nalezen
    'c.scams': "Iska jir khiyaanada", // nieuw, nalezen
    'c.scams.b': "Bangigaagu waligiis kaama weydiiyo koodhadhkaaga ama PIN-kaaga taleefan, SMS ama iimayl. Ha gujin linkiyada ku jira fariimo aadan filayn. Qof ma kugu cadaadinayaa inaad si degdeg ah lacag u bixiso? Jooji oo marka hore hubi. Bangigaaga ku wac lambarka rasmiga ah, tusaale ahaan lambarka ku qoran kaarka bangigaaga ama website-kiisa.", // nieuw, nalezen
    'c.scams.p': "Bangiga anigaa dib u wacaya.", // nieuw, nalezen
    'c.scams.s': "SMS ayaa kuu yimid: “Akoonkaaga bangiga waa la xirayaa. Hadda guji linkigan.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.scams.o1': "Ha gujin. Bangigaaga ku wac lambarka rasmiga ah.", // nieuw, nalezen
    'c.scams.o2': "Si degdeg ah u guji, si aan akoonkaaga loo xirin.", // nieuw, nalezen
    'c.scams.o3': "SMS-ka ka jawaab oo weydii inuu run yahay.", // nieuw, nalezen
    'c.scams.w': "Khiyaanayaashu waxay isticmaalaan cadaadis iyo linkiyo been ah. Bangigaagu waligiis kaama weydiiyo koodhadhkaaga link ama fariin.", // nieuw, nalezen
    'c.bike': "Baaskiil ku tag shaqada", // nieuw, nalezen
    'c.bike.b': "Nalalka shid marka uu mugdi yahay. Ku wad waddada baaskiilka oo raac nalalka taraafikada iyo calaamadaha. Had iyo jeer quful baaskiilkaaga. In taleefan gacanta lagu hayo adigoo baaskiil wadaya waa mamnuuc.", // nieuw, nalezen
    'c.bike.p': "Halkee ayaan dhigi karaa baaskiilkayga?", // nieuw, nalezen
    'c.bike.s': "Waa mugdi, waxaadna baaskiil ku tagaysaa wareeggaaga shaqo ee habeenkii. Taleefankaaga ayaa dhacaya. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.bike.o1': "Ku joogso meel ammaan ah kahor intaadan ka jawaabin.", // nieuw, nalezen
    'c.bike.o2': "Ka jawaab adigoo taleefanka gacanta ku haya oo baaskiil wadaya.", // nieuw, nalezen
    'c.bike.o3': "Sii wad, oo si degdeg ah u eeg taleefankaaga.", // nieuw, nalezen
    'c.bike.w': "Taleefan gacanta ku jira adigoo baaskiil wadaya waa mamnuuc waana khatar. Joogsashada marka hore waxay qaadataa waqti yar oo keliya.", // nieuw, nalezen
    'c.transit': "Bas, tareen iyo kharashka safarka", // nieuw, nalezen
    'c.transit.b': "Basaska iyo tareenada badankood waxaad ku bixin kartaa kaarka bangigaaga (OVpay). Ku gal (check in) IYO ka bax (check out) isla kaarka, haddii kale waxaad bixinaysaa lacag badan. Lacagta kharashka safarka (reiskostenvergoeding) ma aha xaq sharci: waxay ku xiran tahay loo-shaqeeyahaaga ama cao. Wax ka weydii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.transit.p': "Ma heli doonaa lacag kharashka safarkayga ah?", // nieuw, nalezen
    'c.transit.s': "Maalin walba bas ayaad ku tagtaa shaqada. Saaxiib shaqo ayaa hela lacag safar, adiguna ma heshid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.transit.o1': "Madaxaaga wax ka weydii xeerarka shirkadda ama cao.", // nieuw, nalezen
    'c.transit.o2': "Waxba ha oran, maxaa yeelay malaha adiga laguuma talagelin.", // nieuw, nalezen
    'c.transit.o3': "U sheeg madaxaaga: sharcigu wuxuu leeyahay adiguna waa inaad hesho.", // nieuw, nalezen
    'c.transit.w': "Lacagta safarku waxay ku xiran tahay loo-shaqeeyaha ama cao. Wax ka weydiintu waa caadi waxayna kaa caawinaysaa inaad ogaato xuquuqdaada.", // nieuw, nalezen
    'c.ww': "Gunnada shaqo la'aanta (WW)", // nieuw, nalezen
    'c.ww.b': "Shaqadii ma ka waysay? WW ka codso UWV sida ugu dhakhsaha badan, toddobaad gudihiis kadib maalintaada ugu horreysa ee shaqo la'aanta. Badanaa waa inaad shaqeysay ugu yaraan 26 ka mid ah 36-kii toddobaad ee ugu dambeeyey. Haddii adigu shaqada iska dhaafto, badanaa WW ma helaysid. Iska diiwaangeli qof shaqo raadinaya werk.nl. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.ww.p': "Waxaan rabaa inaan codsado gunnada shaqo la'aanta. Maxaan sameeyaa?", // nieuw, nalezen
    'c.ww.s': "Waad ka xanaaqsan tahay shaqadaada waxaadna rabtaa inaad maanta iska dhaafto. Maxaa caqli ah?", // nieuw, nalezen
    'c.ww.o1': "Marka hore talo hel, kahor intaadan shaqada iska dhaafin.", // nieuw, nalezen
    'c.ww.o2': "Maanta iska dhaaf: si kastaba WW waad heli doontaa.", // nieuw, nalezen
    'c.ww.o3': "Jooji imaanshaha shaqada adigoon waxba oran.", // nieuw, nalezen
    'c.ww.w': "Shaqo iska dhaafiddu waxay kaa lumin kartaa gunnadaada. In aad marka hore la hadasho madaxaaga, ururka shaqaalaha ama Juridisch Loket waxay kaa caawin kartaa inaad hesho waddo ka wanaagsan.", // nieuw, nalezen
    'c.newjob': "Raadinta shaqo cusub", // nieuw, nalezen
    'c.newjob.b': "Kahor intaadan bixin, weydiiso tixraac (referentie). Hay warqadaha mushaharkaaga iyo qandaraaskaaga. CV-gaaga cusboonaysii. Shaqo ka raadi xafiisyada shaqo-qorista (uitzendbureaus) iyo werk.nl. Waligaa ha bixin lacag si aad shaqo u hesho. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.newjob.p': "Ma u bixin karaa magacaaga tixraac ahaan?", // nieuw, nalezen
    'c.newjob.s': "Qof ayaa kuu soo bandhigay shaqo, laakiin marka hore waa inaad bixisaa 300 euro “shaqada darteed”. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.newjob.o1': "Ha bixin. Raadi xafiis shaqo-qoris oo dhab ah.", // nieuw, nalezen
    'c.newjob.o2': "Bixi, maxaa yeelay shaqo wanaagsan way u qalantaa.", // nieuw, nalezen
    'c.newjob.o3': "Hadda bixi kala bar, inta kalena goor dambe.", // nieuw, nalezen
    'c.newjob.w': "In lacag laguu weydiiyo shaqo waa calaamad digniin ah. Xafiiska shaqo-qoristu lacag kaama qaadi karo inuu shaqo kuu helo. Waxaad sidoo kale shaqo ka raadsan kartaa werk.nl.", // nieuw, nalezen
    'c.tools': "Kulanka toolbox-ka", // nieuw, nalezen
    'c.tools.b': "Goobo dhismo oo badan waxaa jira kulan gaaban oo badbaado ah waqtiyo joogto ah: kulanka toolbox-ka. Waxaad ka maqlaysaa khataraha iyo xeerarka cusub. Tag, dhegayso, oo su'aalo weydii haddii aadan fahmin. Hubi qalabkaaga kahor intaadan isticmaalin. Qalab ma jaban yahay? U sheeg madaxaaga.", // nieuw, nalezen
    'c.tools.p': "Mashiinkan wax lagu daloolsho wuu jaban yahay. Ma jiraa mid kale?", // nieuw, nalezen
    'c.tools.s': "Waxaa jira kulanka toolbox-ka, laakiin Af-Holandiiskaagu weli ma fiicna. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.tools.o1': "Tag, kadibna saaxiib shaqo weydii waxa kaa dhaafay.", // nieuw, nalezen
    'c.tools.o2': "Ka maqnow, maxaa yeelay si kastaba ma fahmi doontid.", // nieuw, nalezen
    'c.tools.o3': "Saxiix liiska joogitaanka adigoon tagin.", // nieuw, nalezen
    'c.tools.w': "Macluumaadka badbaadadu waa qof walba. App turjumaad ayaa kaa caawin kara inaad la socoto kulanka, haddii taleefannada halkaas laga oggol yahay. In aad kadib saaxiib shaqo weydiiso waa caadi, waxayna hubisaa inaad si sax ah u fahantay.", // nieuw, nalezen
    'c.site': "Joogso oo hubi: LMRA", // nieuw, nalezen
    'c.site.b': "Kahor intaadan shaqo bilaabin, xoogaa joogso oo hubi: maxaa halkan ku khaldami kara? Tani waa LMRA (last-minute risk analysis: qiimaynta khatarta daqiiqadda ugu dambaysa). Had iyo jeer xiro koofiyaddaada adag, iyo qalabka dhicitaanka laga ilaaliyo marka aad meel sare ka shaqeyso. Waligaa ha istaagin culays sudhan hoostiisa. Shaqadu ma dhab ahaan khatar baa? Markaas waad joojin kartaa, waana inaad isla markiiba u sheegtaa madaxaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.site.p': "Weli ma bilaabayo. Tani ammaan ma aha.", // nieuw, nalezen
    'c.site.s': "Waa inaad ka shaqeysaa korka sakaffoolka (scaffold), laakiin xayndaabka ilaalada ayaa ka maqan. Saaxiib shaqo ayaa yiri: “Kaliya taxaddar.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.site.o1': "Ha bilaabin, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.site.o2': "Bilow, laakiin aad u taxaddar.", // nieuw, nalezen
    'c.site.o3': "Adigu xayndaabka ku hagaaji xoogaa xarig ah.", // nieuw, nalezen
    'c.site.w': "Ka dhicid meel sare waxay keeni kartaa dhaawacyo aad u daran. Waad joojin kartaa shaqo khatar ah, sheegidduna waxay ilaalisaa kooxda oo dhan.", // nieuw, nalezen
    'c.line': "Gacmaha ka fogee mashiinnada shaqaynaya", // nieuw, nalezen
    'c.line.b': "Waligaa gacanta ha gelin mashiin shaqaynaya, xataa hal ilbiriqsi. Marka cillad timaado (storing): riix badhanka joojinta degdegga (noodstop) oo wac madaxaaga. Dayactirka iyo hagaajinta waxaa la sameeyaa oo keliya marka mashiinka la xiro oo la quful (lock-out), oo keliya dad tababaran. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.line.p': "Cillad ayaa jirta. Waxaan riixay badhanka joojinta degdegga.", // nieuw, nalezen
    'c.line.s': "Alaab ayaa ku dhegtay mashiinka. Mashiinku weli wuu shaqaynayaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.line.o1': "Riix badhanka joojinta degdegga oo wac madaxaaga.", // nieuw, nalezen
    'c.line.o2': "Si degdeg ah gacanta ugu soo saar, kahor intaanay jabin.", // nieuw, nalezen
    'c.line.o3': "Iska daa oo rajee in mashiinku is hagaajiyo.", // nieuw, nalezen
    'c.line.w': "Mashiinnada shaqaynaya waxay keeni karaan shilal daran hal ilbiriqsi gudihiis. Joojinta mashiinka had iyo jeer waa la oggol yahay, had iyo jeerna way fiican tahay.", // nieuw, nalezen
    'c.quality': "Tayada: sheeg waxa aad aragto", // nieuw, nalezen
    'c.quality.b': "Ma aragtaa dhibaato alaab ku jirta, sida waxyeello ama calaamad khaldan? Sheeg oo dhinac dhig. Ha u oggolaan inay dhaafto si keliya khadka shaqadu u socdo. Dhibaato goor hore la helo waxay badbaadisaa shaqo iyo lacag badan. Madaxaagu wuu ku farxi doonaa inaad sheegtay.", // nieuw, nalezen
    'c.quality.p': "Waxaan u malaynayaa in alaabtan ay wax ka khaldan yihiin.", // nieuw, nalezen
    'c.quality.s': "Waxaad aragtaa in alaab badan ay calaamaddooda ku qoran tahay taariikh khaldan. Khadka shaqadu aad buu u mashquul yahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.quality.o1': "Isla markiiba u sheeg madaxaaga ama qofka tayada.", // nieuw, nalezen
    'c.quality.o2': "Iska daa ha dhaafaan, maxaa yeelay shaqadaada ma aha.", // nieuw, nalezen
    'c.quality.o3': "Si aamusnaan ah u tuur.", // nieuw, nalezen
    'c.quality.w': "Calaamad khaldan waxay keeni kartaa in alaabta oo dhan dib looga soo celiyo dukaamada. In goor hore la sheego waa waxa xubin kooxeed wanaagsan sameyso.", // nieuw, nalezen
    'c.client': "Ixtiraamka macmiilka", // nieuw, nalezen
    'c.client.b': "Garaac albaabka kahor intaadan gelin qolka macmiilka. Sheeg cidda aad tahay, sharax waxa aad samaynayso oo idan weydiiso. Macmiilka ku dheh “u”, ilaa uu kaa codsado inaad ku tiraahdo “je”. Macmiilka u daa inuu sameeyo waxa uu isagu samayn karo.", // nieuw, nalezen
    'c.client.p': "Ma soo geli karaa? Waxaan u imid inaan kaa caawiyo maydhashada.", // nieuw, nalezen
    'c.client.s': "Waa inaad macmiil ka caawisaa maydhashada. Albaabka qolkeedu waa xiran yahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.client.o1': "Garaac, sug, oo sheeg cidda aad tahay iyo sababta.", // nieuw, nalezen
    'c.client.o2': "Si degdeg ah u gal, maxaa yeelay waad mashquul tahay.", // nieuw, nalezen
    'c.client.o3': "Ka bood maydhashada, si aadan u dhibin.", // nieuw, nalezen
    'c.client.w': "Qolku waa guriga macmiilka. Garaacidda iyo sharaxiddu waxay muujinayaan ixtiraam, waxayna daryeelka ka dhigayaan mid deggan.", // nieuw, nalezen
    'c.privacy': "Sirta, nadaafadda iyo daawooyinka", // nieuw, nalezen
    'c.privacy.b': "Waxa aad ka aragto oo ka maqasho macmiilada shaqada ayay ku harayaan. Ha kaga hadlin macmiilada meel ka baxsan shaqada, waligaana ha dhejin sawirradooda. Gacmahaaga nadiifi kahor iyo kadib daryeelka. Ma ku aragtaa isbeddel macmiil, sida xanuun ama dhicid? Isla markiiba u sheeg kalkaalisada. Waligaa daawo ha bixin, haddii aadan tababaran ahayn oo aan laguu oggolaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.privacy.p': "Ninku wuxuu qabaa xanuun ka badan shalay.", // nieuw, nalezen
    'c.privacy.s': "Macmiil ayaa kaa codsatay kiniinadeeda. Looma tababarin inaad daawo bixiso. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.privacy.o1': "Si naxariis leh u dheh waxaad u yeeraysaa kalkaalisada.", // nieuw, nalezen
    'c.privacy.o2': "Sii kiniinada, maxaa yeelay iyadu way taqaan waxa ay u baahan tahay.", // nieuw, nalezen
    'c.privacy.o3': "Dheh maya oo iska tag.", // nieuw, nalezen
    'c.privacy.w': "Daawo khaldan waxay noqon kartaa khatar. In si degdeg ah loo keeno qofka saxda ah waxay caawisaa macmiilka waxayna qof walba ammaan ka dhigtaa.", // nieuw, nalezen
    'c.kitchen': "Badbaadada cuntada", // nieuw, nalezen
    'c.kitchen.b': "Gacmaha si joogto ah u dhaq, sidoo kale kadib musqusha iyo kadib markaad taabato hilib cayriin ah. Cuntada qabow qabow ku hay, cuntada kulul kulul ku hay. Cuntada aad kaydiso ku dheji calaamad taariikh leh. Xeerarkan waxaa la yiraahdaa HACCP. Xasaasiyaddu waa wax culus: ma hubtid waxa ku jira cunto? Had iyo jeer weydii shefka. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.kitchen.p': "Shef, suugadan gluten ma ku jiraa?", // nieuw, nalezen
    'c.kitchen.s': "Marti ayaa weydiisay in cunto ay lows ku jirto. Ma hubtid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.kitchen.o1': "Dheh waad hubinaysaa, oo weydii shefka.", // nieuw, nalezen
    'c.kitchen.o2': "Dheh “maya”, si martidu u faraxdo.", // nieuw, nalezen
    'c.kitchen.o3': "U sheeg martida inay lowska ka soo saarto.", // nieuw, nalezen
    'c.kitchen.w': "Marti xasaasiyad qabta, khalad yar ayaa aad khatar ugu noqon kara. In aad shefka la hubiso had iyo jeer waa sax.", // nieuw, nalezen
    'c.service': "Edeb la martida", // nieuw, nalezen
    'c.service.b': "Martida ku dheh “u”, ilaa ay kaa codsadaan inaad ku tiraahdo “je”. Noqo mid saaxiibtinimo leh oo deggan, xataa marka ay mashquul tahay. Su'aal ma hubtid? Dheh waad hubinaysaa. Lacagta deeqda ah (fooi): xeerarku way ku kala duwan yihiin meel kasta. Weydii sida loo qaybiyo lacagta deeqda meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.service.p': "Daqiiqad, dhowaan ayaan kuu imanayaa.", // nieuw, nalezen
    'c.service.s': "Aad bay u mashquul tahay. Marti ayaa kuu yeertay, laakiin waxaad saxammo u siddaa miis kale. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.service.o1': "Martida eeg oo dheh: “Een moment, ik kom zo bij u.”", // nieuw, nalezen
    'c.service.o2': "Iska indha tir martida ilaa aad waqti hesho.", // nieuw, nalezen
    'c.service.o3': "Saxammada dhig miis bannaan oo marka hore u tag martida.", // nieuw, nalezen
    'c.service.w': "Calaamad gaaban ayaa martida tusaysa inaad aragtay. Markaas waxaad si deggan u dhammaysan kartaa shaqadaada.", // nieuw, nalezen
    'c.cleaning': "Akhri calaamadda", // nieuw, nalezen
    'c.cleaning.b': "Alaab kasta oo nadiifin waxay leedahay calaamad (label). Astaamaha (sawirro yaryar oo ku dhex jira dheeman casaan ah) waxay muujiyaan khatarta, tusaale ahaan maqaarkaaga, indhahaaga ama sambabadaada. Akhri calaamadda, ama weydii waxa alaabtu u tahay iyo sida loo isticmaalo. Xiro gacmo-gashiyada uu ku siiyo loo-shaqeeyahaagu. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.cleaning.p': "Alaabtan maxay u tahay?", // nieuw, nalezen
    'c.cleaning.s': "Waxaad heshay alaab nadiifin oo cusub. Si fiican uma akhrin kartid calaamadda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.cleaning.o1': "Weydii sida aad si ammaan ah ugu isticmaali karto.", // nieuw, nalezen
    'c.cleaning.o2': "Wax badan ka isticmaal, markaas si fiican ayay u shaqaynaysaa.", // nieuw, nalezen
    'c.cleaning.o3': "Kaliya isku day adigoon gacmo-gashi xiran.", // nieuw, nalezen
    'c.cleaning.w': "Alaab khaldan, ama in badan oo ka mid ah, waxay waxyeelleyn kartaa maqaarkaaga, indhahaaga ama sambabadaada. Weydiintu waxay qaadataa hal daqiiqo.", // nieuw, nalezen
    'c.cleansafe': "Waligaa ha isku darin alaabaha", // nieuw, nalezen
    'c.cleansafe.b': "Waligaa ha isku darin alaabta nadiifinta, tusaale ahaan bleach iyo dawada nadiifinta musqusha. Tani waxay samayn kartaa gaasas khatar ah. Hawo nadiif ah soo geli. Dhulka ma masaxaysaa? Dhig calaamadda dhulka qoyan (Pas op, glad!), si aan cidna u simbiriirixan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.cleansafe.p': "Calaamadda ayaan dhigayaa. Dhulku waa qoyan yahay.", // nieuw, nalezen
    'c.cleansafe.s': "Musqushu aad bay u wasakh tahay. Saaxiib shaqo ayaa yiri: “Laba alaabood isku dar, markaas way fiicnaanaysaa.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.cleansafe.o1': "Ha isku darin. Isticmaal hal alaab.", // nieuw, nalezen
    'c.cleansafe.o2': "Isku dar, laakiin daaqad fur.", // nieuw, nalezen
    'c.cleansafe.o3': "Si degdeg ah isku dar oo qolka ka bax.", // nieuw, nalezen
    'c.cleansafe.w': "Isku darka alaabta waxay samayn kartaa gaas sun ah, xataa marka daaqad furan tahay. Hal alaab, si fiican loo isticmaalo, ayaa ku filan.", // nieuw, nalezen
    'u.tools': "Qalab casri ah", // nieuw, nalezen
    'l.translate': "Ku turjun taleefankaaga", // nieuw, nalezen
    'w.vertaalapp': "app-ka turjumaadda", // nieuw, nalezen
    'w.vertalen': "turjumid", // nieuw, nalezen
    'w.camera': "kamarada", // nieuw, nalezen
    'w.briefje': "warqad yar", // nieuw, nalezen
    'w.spreken': "hadlid", // nieuw, nalezen
    'w.vertaling': "turjumaadda", // nieuw, nalezen
    's.translate.1': "Taleefankayga ayaan ku turjumayaa.", // nieuw, nalezen
    's.translate.2': "Ma si degdeg ah u turjumi karaa tan?", // nieuw, nalezen
    's.translate.3': "Ma xoogaa la hadli kartaa taleefankayga?", // nieuw, nalezen
    'c.translate.q': "Warqadda yar maxaa ku qoran?", // nieuw, nalezen
    'c.translate.a': "Xoogaa sug, waan turjumayaa.", // nieuw, nalezen
    'l.understood': "Fahan oo la kaa fahmo", // nieuw, nalezen
    'w.herhalen': "ku celin", // nieuw, nalezen
    'w.opschrijven': "qorid", // nieuw, nalezen
    'w.latenzien': "tusid", // nieuw, nalezen
    'w.ondertiteling': "qoraalka hoose (hadal qoraal ahaan)", // nieuw, nalezen
    'w.instructie': "tilmaanta", // nieuw, nalezen
    'w.plaatje': "sawirka", // nieuw, nalezen
    's.understood.1': "Ma ii qori doontaa?", // nieuw, nalezen
    's.understood.2': "Ma i tusi kartaa?", // nieuw, nalezen
    's.understood.3': "Ma jirtaa tilmaan sawirro leh?", // nieuw, nalezen
    'c.understood.q': "Marka hore meesha habee, kadibna baakadee.", // nieuw, nalezen
    'c.understood.a': "Marka waa inaan marka hore meesha habeeyaa?", // nieuw, nalezen
    'l.keeplearning': "Sii wad barashada", // nieuw, nalezen
    'w.bibliotheek': "maktabadda (dadweynaha)", // nieuw, nalezen
    'w.taalhuis': "Taalhuis (caawimaad bilaash ah oo Af-Holandiis ah)", // nieuw, nalezen
    'w.oefenen': "ku celcelin", // nieuw, nalezen
    'w.luisteren': "dhegaysi", // nieuw, nalezen
    'w.elkedag': "maalin walba", // nieuw, nalezen
    'w.woord': "ereyga", // nieuw, nalezen
    's.keeplearning.1': "Maalin walba toban daqiiqo ayaan ku celceliyaa.", // nieuw, nalezen
    's.keeplearning.2': "Ereygan macnihiisu waa maxay?", // nieuw, nalezen
    's.keeplearning.3': "Ma ila hadli doontaa Af-Holandiis?", // nieuw, nalezen
    'c.keeplearning.q': "Ma Ingiriisi ku hadlaa?", // nieuw, nalezen
    'c.keeplearning.a': "Maya, Af-Holandiis fadlan. Waxaan rabaa inaan ku celceliyo.", // nieuw, nalezen
    'c.translate': "App-yada turjumaadda: caqli badan, laakiin hubi", // nieuw, nalezen
    'c.translate.b': "App turjumaad, sida Google Translate, aad buu wax u taraa. Waad qori kartaa, hadli kartaa, ama isticmaali kartaa qaabka wadahadalka si aad ula hadasho saaxiib shaqo. Kamarada waxaad ku turjumi kartaa calaamadaha, warqadaha yaryar iyo tilmaamaha. Taleefanno badan, WhatsApp sidoo kale wuu turjumi karaa fariimaha. Taleefankaaga isticmaal oo keliya meel ammaan ah oo la oggol yahay. Marnaba agagaarka mashiinnada ama forklift-yada. Had iyo jeer marka hore weydii. App-yadu way khaldamaan. Waxyaabaha muhiimka ah, sida qandaraaskaaga, warqad ama tilmaan badbaado, sidoo kale qof ka codso inuu kuu sharxo. Ha qaadin sawirro waraaqaha shaqada ee sirta ah idan la'aan.",
    'c.translate.p': "Ma isticmaali karaa taleefankayga si aan wax u turjumo?", // nieuw, nalezen
    'c.translate.s': "Madaxaagu wuxuu ku siiyey warqad tilmaamo badbaado ah oo Af-Holandiis ku qoran. Waxaad fahantaa ereyo yar oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.translate.o1': "Weydii inaad isticmaali karto app turjumaad, oo weydii sharaxaad.", // nieuw, nalezen
    'c.translate.o2': "Dheh “ja, ja” oo bilow shaqada. Goor dambe ayaad fahmi doontaa.", // nieuw, nalezen
    'c.translate.o3': "Sawir ka qaad oo u dir koox chat ah oo saaxiibbo ah, si ay kuu turjumaan.", // nieuw, nalezen
    'c.translate.w': "App turjumaad ayaa kaa caawiya inaad si degdeg ah u fahanto, laakiin wuu khaldami karaa. Badbaadada, sharaxaad qof ka timaadda ayaa ah hubinta ugu fiican. Waraaqaha shaqadu waxay noqon karaan sir, sidaas darteed ha la wadaagin idan la'aan.", // nieuw, nalezen
    'c.understood': "Hubi inaad fahantay", // nieuw, nalezen
    'c.understood.b': "Taleefankaagu wuxuu hadalka u beddeli karaa qoraal (qoraal toos ah): Live Transcribe ee Android, Live Captions ee iPhone. Hubi luqadaha uu taleefankaagu taageero. Waxaad sidoo kale qof ka codsan kartaa inuu qoro, inuu ku tuso, ama inuu si tartiib ah u hadlo. Weydii inay jirto tilmaan sawirro leh, ama mid luqaddaada ku qoran. Kadib dib u sheeg waxa aad fahantay: “Dus ik moet eerst …?” Tani halkan waa caadi, waxayna ka hortagtaa khaladaad.", // nieuw, nalezen
    'c.understood.p': "Marka waa inaan marka hore tiriyaa sanduuqyada?", // nieuw, nalezen
    'c.understood.s': "Saaxiib shaqo ayaa sharaxaysa sida mashiin cusub u shaqeeyo. Si degdeg ah ayay u hadlaysaa, ereyo qaarna waa kaa dhaafayaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.understood.o1': "Ka codso inay ku tusto ama qorto, oo dib ugu sheeg.", // nieuw, nalezen
    'c.understood.o2': "Madaxa u ruxo oo dheh “ja, ja”, si aysan waqti u lumin.", // nieuw, nalezen
    'c.understood.o3': "Goor dambe keligaa isku day mashiinka oo eeg waxa dhacaya.", // nieuw, nalezen
    'c.understood.w': "Tusidda, qoridda iyo dib u sheegiddu waa hubin degdeg ah. Saaxiibkaa shaqo wuu ku saxi karaa kahor inta aysan wax khaldamin. Halkan, tan waxaa loo arkaa taxaddar, ma aha gaabis.", // nieuw, nalezen
    'c.keeplearning': "Sii wad barashada, wax yar maalin walba", // nieuw, nalezen
    'c.keeplearning.b': "Daqiiqado yar maalin walba ayaa ka faa'iido badan hal saac oo dheer toddobaadkii. Ereyada cusub ee shaqada ku kaydi app qoraal ah oo taleefankaaga ku jira. Dhegayso Af-Holandiis fudud, tusaale ahaan NOS Jeugdjournaal (wararka carruurta) ama podcast Af-Holandiis tartiib ah. Maktabado badan oo dadweyne ayaa leh Taalhuis: caawimaad bilaash ah oo Af-Holandiis ah, badanaa leh taalcafé (meel lagu celceliyo hadalka) ama saaxiib luqadeed (taalmaatje). Saaxiibbada shaqadu badanaa waxay u wareegaan Ingiriisi si ay kuu caawiyaan. Si naxariis leh uga codso inay kula hadlaan Af-Holandiis: dadka badankiisu waxay jecel yihiin inay wax caawiyaan.", // nieuw, nalezen
    'c.keeplearning.p': "Kaliya ila hadal Af-Holandiis, markaas si dhakhso ah ayaan u baranayaa.", // nieuw, nalezen
    'c.keeplearning.s': "Saaxiibbadaada shaqadu had iyo jeer waxay u wareegaan Ingiriisi marka ay kula hadlayaan. Waxaad rabtaa inaad barato Af-Holandiis. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.keeplearning.o1': "U mahadnaq, oo ka codso inay kula hadlaan Af-Holandiis.", // nieuw, nalezen
    'c.keeplearning.o2': "Waxba ha oran. Af-Holandiisku iskiis ayuu u iman doonaa.", // nieuw, nalezen
    'c.keeplearning.o3': "Adna Ingiriisi ku jawaab, maxaa yeelay taasi way edeb badan tahay.", // nieuw, nalezen
    'c.keeplearning.w': "Saaxiibbada shaqadu badanaa waxay u wareegaan Ingiriisi si ay u naxariistaan. Marka aad codsato Af-Holandiis, badankoodu way ku faraxsan yihiin inay ku caawiyaan. In aad maalin walba xoogaa ku hadasho shaqada waa mid ka mid ah hababka ugu dhakhsaha badan ee wax lagu barto.", // nieuw, nalezen
    'l.gossip': "Xan iyo baraha bulshada", // nieuw, nalezen
    'w.roddelen': "xan sheegid", // nieuw, nalezen
    'w.posten': "dhejin (online)", // nieuw, nalezen
    'w.groepsapp': "koox chat (group chat)", // nieuw, nalezen
    'w.socialemedia': "baraha bulshada", // nieuw, nalezen
    'w.delen': "la wadaagid", // nieuw, nalezen
    'w.screenshot': "sawirka shaashadda (screenshot)", // nieuw, nalezen
    's.gossip.1': "Xan kama sheego saaxiibbada shaqada.", // nieuw, nalezen
    's.gossip.2': "Sawirrada shaqada online ma dhigo.", // nieuw, nalezen
    's.gossip.3': "Waxaan doorbidaa inaad aniga ii sheegto.", // nieuw, nalezen
    'c.gossip.q': "Ma maqashay waxa Mark sameeyey?", // nieuw, nalezen
    'c.gossip.a': "Maya, waxaanan doorbidaa inaanan isaga ka hadlin.", // nieuw, nalezen
    'l.boundaries': "Xadka la dhaafo", // nieuw, nalezen
    'w.aanraken': "taabasho", // nieuw, nalezen
    'w.ongewenst': "aan la rabin", // nieuw, nalezen
    'w.opmerking': "hadal, faallo", // nieuw, nalezen
    'w.intimidatie': "dhibaateyn, cabsi-gelin", // nieuw, nalezen
    'w.getuige': "markhaatiga", // nieuw, nalezen
    'w.grapje': "kaftanka", // nieuw, nalezen
    's.boundaries.1': "Ha i taaban.", // nieuw, nalezen
    's.boundaries.2': "Hadalkaas igama qosliyo.", // nieuw, nalezen
    's.boundaries.3': "Waxaan rabaa inaan wax u sheego la-taliyaha sirta.", // nieuw, nalezen
    'c.boundaries.q': "Ha adkaan sidaas, kaftan uun buu ahaa.", // nieuw, nalezen
    'c.boundaries.a': "Aniga ma aha. Waxaan rabaa inaad joojiso.", // nieuw, nalezen
    'c.gossip': "Xan iyo baraha bulshada", // nieuw, nalezen
    'c.gossip.b': "Ka hadlidda saaxiib shaqo dabadiisa (roddelen) waxay waxyeellaysaa kalsoonida kooxda. Ma qof dhibaato kala qabtaa? La hadal qofkaas, ama madaxaaga. Online, xeerar la mid ah kuwa shaqada ayaa khuseeya. Ha dhejin wax ku saabsan saaxiibbada shaqada, macmiilada ama shirkadda idan la'aan. Taas waxaa ku jira sawirro, muuqaallo iyo fariimo. Madaxaagu wuu arki karaa waxa aad dhejiso, wuxuuna online ku jiri karaa sannado. Kooxo badan waxay leeyihiin koox chat (groepsapp) shaqada: ka dhig mid shaqada ku saabsan, hana la wadaagin sawirrada shaashaddeeda dad kale. La wadaagidda waxyaabaha gaarka ah ee saaxiib shaqo ama qof online ku jees jeesiddiisa sidoo kale waa cagajuglayn.",
    'c.gossip.p': "Taas online ma rabo.", // nieuw, nalezen
    'c.gossip.s': "Saaxiib shaqo ayaa ku duubay markaad ku simbiriirixatay dhulka qoyan. Wuxuu rabaa inuu muuqaalka dhigo TikTok. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.gossip.o1': "Dheh “Nee, dat wil ik niet” oo ka codso inuu tirtiro.", // nieuw, nalezen
    'c.gossip.o2': "Qosol oo u oggolow inuu dhejiyo, si aadan u adkaan.", // nieuw, nalezen
    'c.gossip.o3': "Ka codso inuu dhejiyo magacaaga la'aan.", // nieuw, nalezen
    'c.gossip.w': "Badanaa, cidna ma dhigi karto muuqaal adiga ah online oggolaanshahaaga la'aan. In aad maya tiraahdo waa caadi, loo-shaqeeyahaaguna waa inuu tallaabo qaadaa marka saaxiibbada shaqadu online isku jees jeesaan. Haddii uu si kastaba u dhejiyo, u sheeg madaxaaga.", // nieuw, nalezen
    'c.boundaries': "Xadka la dhaafo", // nieuw, nalezen
    'c.boundaries.b': "Grensoverschrijdend gedrag waa dhaqan ka gudba xadka qofka. Tusaale ahaan: taabasho aan la rabin, hadallo ama kaftan galmo ah, si joogto ah qof u fiirin, sawirro aan la rabin, hanjabaad ama qaylo. Wax kama jiro haddii qofka kale “kaftan ahaan u ulajeeday”: waxa muhiimka ah waa sida aad adigu u dareento. Haddii aad awoodo, si cad u sheeg inaad rabto in la joojiyo. Qor waxa dhacay, goorta, iyo cidda aragtay. U sheeg madaxaaga, la-taliyaha sirta (vertrouwenspersoon, haddii uu jiro) ama HR. Loo-shaqeeyahaagu waa inuu ku ilaaliyaa, lamana ciqaabi karo adiga sheegidda darteed. Ma aragtay in arrintan ku dhacday saaxiib shaqo? Weydii inuu fiican yahay, oo u soo bandhig inaad markhaati u noqoto.",
    'c.boundaries.p': "Waxaan rabaa inaad joojiso.", // nieuw, nalezen
    'c.boundaries.s': "Hoggaamiyaha kooxdaadu had iyo jeer gacanta ayuu dhabarka kaaga saaraa wuxuuna yiraahdaa waxaad tahay “qurux badan”. Taasi waxay kaa dhigaysaa mid aan raaxo dareemin. Isaga ayaa go'aamiya wareegyadaada shaqada. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.boundaries.o1': "Qor oo u sheeg vertrouwenspersoon (la-taliyaha sirta).", // nieuw, nalezen
    'c.boundaries.o2': "Waxba ha oran, maxaa yeelay isaga ayaa go'aamiya wareegyadaada shaqada.", // nieuw, nalezen
    'c.boundaries.o3': "Shaqada iska dhaaf adigoon cidna u sheegin sababta.", // nieuw, nalezen
    'c.boundaries.w': "Tani waa dhaqan aan la rabin, mana aha khaladkaaga. La-taliyaha sirtu wuxuu si qarsoodi ah kuu dhegaystaa wuxuuna kaa caawiyaa inaad doorato tallaabada xigta. Waad ilaalsan tahay marka aad sheegto. Waxaad sidoo kale la hadli kartaa HR.", // nieuw, nalezen
    'u.shop': "Dukaanka gudihiisa", // nieuw, nalezen
    'l.shelves': "Khaanadaha iyo kaydka", // nieuw, nalezen
    'w.schap': "khaanadda (dukaanka)", // nieuw, nalezen
    'w.vakkenvullen': "buuxinta khaanadaha", // nieuw, nalezen
    'w.voorraad': "kaydka alaabta", // nieuw, nalezen
    'w.houdbaarheidsdatum': "taariikhda dhicitaanka", // nieuw, nalezen
    'w.prijskaartje': "calaamadda qiimaha", // nieuw, nalezen
    'w.achteraan': "gadaal", // nieuw, nalezen
    's.shelves.1': "Alaabta cusub gadaal dhig.", // nieuw, nalezen
    's.shelves.2': "Alaabtan taariikhdeedu way dhacday.", // nieuw, nalezen
    's.shelves.3': "Kayd ma ka haray?", // nieuw, nalezen
    'c.shelves.q': "Halkee ayaan ka helayaa bariiska?", // nieuw, nalezen
    'c.shelves.a': "Jidka afraad. Waan kula socon doonaa halkaas.", // nieuw, nalezen
    'l.checkout': "Khasnadda", // nieuw, nalezen
    'w.klant': "macmiilka", // nieuw, nalezen
    'w.kassa': "khasnadda (meesha lacagta lagu bixiyo)", // nieuw, nalezen
    'w.wisselgeld': "baaqiga (lacagta aad dib u celiso)", // nieuw, nalezen
    'w.bonnetje': "rasiidhka", // nieuw, nalezen
    'w.pinnen': "kaar ku bixin", // nieuw, nalezen
    'w.contant': "lacag caddaan ah", // nieuw, nalezen
    's.checkout.1': "Ma rabtaa inaad kaar ku bixiso mise lacag caddaan ah?", // nieuw, nalezen
    's.checkout.2': "Waa kan baaqigaaga.", // nieuw, nalezen
    's.checkout.3': "Ma arki karaa aqoonsigaaga, fadlan?", // nieuw, nalezen
    'c.checkout.q': "Halkan ma kaar ku bixin karaa?", // nieuw, nalezen
    'c.checkout.a': "Haa, dabcan, waad bixin kartaa.", // nieuw, nalezen
    'u.numbers': "Waqti, lacag iyo cabbirro", // nieuw, nalezen
    'l.counting': "Tirooyinka", // nieuw, nalezen
    'w.dertien': "saddex iyo toban (13)", // nieuw, nalezen
    'w.dertig': "soddon (30)", // nieuw, nalezen
    'w.zeventien': "toddoba iyo toban (17)", // nieuw, nalezen
    'w.zeventig': "toddobaatan (70)", // nieuw, nalezen
    'w.zevenenveertig': "afartan iyo toddoba (47)", // nieuw, nalezen
    'w.vierenzeventig': "toddobaatan iyo afar (74)", // nieuw, nalezen
    's.counting.1': "Waxaan haystaa saddex iyo toban sanduuq, ma aha soddon.", // nieuw, nalezen
    's.counting.2': "Goobta toddobaatan iyo afar waa bannaan tahay.", // nieuw, nalezen
    's.counting.3': "Ma u sheegi kartaa lambar lambar?", // nieuw, nalezen
    'c.counting.q': "Immisa sanduuq ayaa haray?", // nieuw, nalezen
    'c.counting.a': "Toddobaatan. Toddoba, eber.", // nieuw, nalezen
    'l.hours': "Saacadaha iyo waqtiyada", // nieuw, nalezen
    'w.uur': "saacadda", // nieuw, nalezen
    'w.minuut': "daqiiqadda", // nieuw, nalezen
    'w.kwartier': "rubuc saac (15 daqiiqo)", // nieuw, nalezen
    'w.halfuur': "nus saac (30 daqiiqo)", // nieuw, nalezen
    'w.duren': "qaadasho (waqti)", // nieuw, nalezen
    'w.optellen': "isku darid", // nieuw, nalezen
    's.hours.1': "Waxaan bilaabaa toddobada iyo badhka (7:30).", // nieuw, nalezen
    's.hours.2': "Maanta siddeed saacadood ayaan shaqeynayaa.", // nieuw, nalezen
    's.hours.3': "Nasashadu waxay qaadataa nus saac.", // nieuw, nalezen
    'c.hours.q': "Goormaad dhammaynaysaa?", // nieuw, nalezen
    'c.hours.a': "Afarta iyo rubuc.", // nieuw, nalezen
    'l.measures': "Lacag iyo cabbirro", // nieuw, nalezen
    'w.euro': "euro-ga", // nieuw, nalezen
    'w.cent': "senti-ga", // nieuw, nalezen
    'w.kilo': "kiilada", // nieuw, nalezen
    'w.liter': "litirka", // nieuw, nalezen
    'w.meter': "mitirka", // nieuw, nalezen
    'w.tellen': "tirin", // nieuw, nalezen
    's.measures.1': "Waxay ku kacaysaa lix euro iyo konton senti.", // nieuw, nalezen
    's.measures.2': "Sanduuqan miisaankiisu waa toban kiilo.", // nieuw, nalezen
    's.measures.3': "Afartan sanduuq ayaan tiriyey.", // nieuw, nalezen
    'c.measures.q': "Looxaasi intee buu dheer yahay?", // nieuw, nalezen
    'c.measures.a': "Si sax ah laba mitir.", // nieuw, nalezen
    'c.shelves': "Kuwa duugga ah hore u dhig", // nieuw, nalezen
    'c.shelves.b': "Marka aad buuxinayso khaanadaha, eeg taariikhda ku qoran alaabta. Alaabta taariikhdeedu soo dhowdahay hore u dhig, tan cusubna gadaal. Macaamiishu waxay ka qaataan xagga hore, sidaas darteed alaabta duugga ah ayaa marka hore baxda. Alaab ma taariikhdeedu dhacday, mise way waxyeelloobtay? Ka qaad khaanadda oo weydii waxa lagu sameeyo. Jidadka ka dhig kuwo aan lahayn sanduuqyo iyo gaariyo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.shelves.p': "Maxaan ku sameeyaa alaabta taariikhdeedu dhacday?", // nieuw, nalezen
    'c.shelves.s': "Caano cusub ayaad khaanadda saaraysaa. Xagga hore weli waxaa yaal caano taariikhdoodu ka dhowdahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.shelves.o1': "Caanaha cusub gadaal dhig, caanaha duugga ahna hore.", // nieuw, nalezen
    'c.shelves.o2': "Caanaha cusub hore dhig, maxaa yeelay way ka cusub yihiin.", // nieuw, nalezen
    'c.shelves.o3': "Caanaha duugga ah iska tuur, si khaanaddu u qurxoonaato.", // nieuw, nalezen
    'c.shelves.w': "Macaamiishu waxay ka qaataan xagga hore. Marka alaabta duugga ahi marka hore baxdo, cunto yar ayaa la tuuraa.", // nieuw, nalezen
    'c.checkout': "Aqoonsiga khamriga iyo tubaakada", // nieuw, nalezen
    'c.checkout.b': "Uma iibin kartid khamri ama tubaako qof ka yar 18 sano: kani waa sharciga. Ma hubtid da'da macmiilka? Weydii aqoonsigiisa. Dukaanno badan waxay aqoonsi weydiiyaan qof kasta oo u eg mid ka yar 25. Aqoonsi ma jiro, mise wuu ka yar yahay 18? Markaas ma iibinaysid, oo edeb ayaad ku sii jiraysaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.checkout.p': "Aqoonsi la'aan ma iibin karo tan.", // nieuw, nalezen
    'c.checkout.s': "Nin dhallinyaro ah ayaa rabo inuu iibsado biir. Wuxuu u eg yahay qiyaastii 17. Wuxuu yiri waa 19, laakiin aqoonsi ma sito. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.checkout.o1': "Dheh ma iibin kartid aqoonsi la'aan.", // nieuw, nalezen
    'c.checkout.o2': "Iibi, maxaa yeelay wuxuu yiri waa 19.", // nieuw, nalezen
    'c.checkout.o3': "Iibi, laakiin hal gasacad oo keliya.", // nieuw, nalezen
    'c.checkout.w': "Aqoonsi la'aan ma ogaan kartid da'diisa. Iibinta khamriga qof ka yar 18 waa ka soo horjeedaa sharciga, dukaankana waa la ganaaxi karaa.", // nieuw, nalezen
    'c.counting': "Vijfentwintig: marka hore 5, kadib 20", // nieuw, nalezen
    'c.counting.b': "Af-Holandiiska, 0 ilaa 12 mid kasta wuxuu leeyahay erey u gaar ah: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. 13 ilaa 19 waxay ku dhammaadaan -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Tobanaadka waxay ku dhammaadaan -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. 21 ilaa 99, marka hore waxaad sheegtaa lambarka ugu dambeeya: 25 waa vijfentwintig, “shan iyo labaatan”. Marka 47 waa zevenenveertig, 74-na waa vierenzeventig. Dertien iyo dertig ku dhowaad isku si ayay u dhawaaqaan: dhegayso dhammaadka. Ma hubtid? Lambarrada mid mid dib ugu sheeg.", // nieuw, nalezen
    'c.counting.p': "Afar, toddoba? Marka afartan iyo toddoba?", // nieuw, nalezen
    'c.counting.s': "Madaxaagu wuxuu yiri: “Ga naar gang zevenenveertig.” Waa jidkee?", // nieuw, nalezen
    'c.counting.o1': "Jidka 47.", // nieuw, nalezen
    'c.counting.o2': "Jidka 74.", // nieuw, nalezen
    'c.counting.o3': "Jidka 40.", // nieuw, nalezen
    'c.counting.w': "“Zevenenveertig” waa “toddoba iyo afartan”: marka hore 7, kadib 40. Marka waa jidka 47. Dad badan oo cusub ayaa maqla 74, oo u taga jid khaldan.", // nieuw, nalezen
    'c.hours': "Half acht waa 7:30", // nieuw, nalezen
    'c.hours.b': "Af-Holandiiska, “half” waxay u tirisaa saacadda xigta: half acht waa 7:30, ma aha 8:30. Kwart over acht waa 8:15, kwart voor acht-na waa 7:45. Adigu hubi saacadahaaga: waqtiga dhammaadka laga jaray waqtiga bilowga, laga jaray nasashada. Nasashada badanaa lacag laguma bixiyo. Maalin walba qor saacadahaaga.", // nieuw, nalezen
    'c.hours.p': "Half acht? Marka nus saac kahor siddeedda?", // nieuw, nalezen
    'c.hours.s': "Madaxaagu wuxuu yiri: “Morgen begin je om half negen.” Berri goormaad bilaabaysaa?", // nieuw, nalezen
    'c.hours.o1': "Saacadda 8:30.", // nieuw, nalezen
    'c.hours.o2': "Saacadda 9:30.", // nieuw, nalezen
    'c.hours.o3': "Saacadda 8:00.", // nieuw, nalezen
    'c.hours.w': "“Half negen” macnaheedu waa nus saac kahor sagaalka: 8:30. Dad badan oo cusub waxay u maleeyaan inay tahay 9:30, oo saac ayay daahaan.", // nieuw, nalezen
    'c.measures': "Si caqli ah u tiri, cabbir, ha qiyaasin", // nieuw, nalezen
    'c.measures.b': "Sanduuqyo badan oo la tirinayo? Tiri sanduuqyada hal lakab ku jira, iyo tirada lakabyada. Kadib isku dhufo: 8 sanduuq hal lakab iyo 5 lakab waa 40 sanduuq. Alaabta nadiifinta, cabbir qaddarka calaamaddu sheegayso. Wax badan ma fiicna: wuxuu waxyeellayn karaa maqaarkaaga wuxuuna ku kacaa lacag. Lambar ma hubtid? Mar kale tiri, ama weydii. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.measures.p': "Laba jeer ayaan tiriyey.", // nieuw, nalezen
    'c.measures.s': "Baaleet wuxuu leeyahay 6 lakab. Lakab kasta wuxuu leeyahay 8 sanduuq. Madaxaagu wuxuu ku weydiiyey immisa sanduuq ayaa jira. Maxaad dhahaysaa?", // nieuw, nalezen
    'c.measures.o1': "48 sanduuq.", // nieuw, nalezen
    'c.measures.o2': "14 sanduuq.", // nieuw, nalezen
    'c.measures.o3': "Qiyaastii 50, waxaan u malaynayaa.", // nieuw, nalezen
    'c.measures.w': "6 lakab oo 8 sanduuq ah waa 6 jeer 8: 48. Tirinta hal lakab iyo isku dhufashadu waa degdeg, lambar dhab ahina wuu ka fiican yahay qiyaas.", // nieuw, nalezen
    'u.ai': "AI iyo app-yada casriga ah", // nieuw, nalezen
    'l.aihelp': "AI caawiye ahaan", // nieuw, nalezen
    'w.ai': "AI (sirdoon macmal ah)", // nieuw, nalezen
    'w.chatbot': "chatbot-ka (app aad la sheekeysan karto)", // nieuw, nalezen
    'w.antwoord': "jawaabta", // nieuw, nalezen
    'w.meekijken': "qof kale la eegid", // nieuw, nalezen
    'w.kloppen': "sax ahaan", // nieuw, nalezen
    'w.zeker': "hubaal, la hubo", // nieuw, nalezen
    's.aihelp.1': "Ma ii sharxi kartaa warqaddan?", // nieuw, nalezen
    's.aihelp.2': "Jawaabtani ma sax baa?", // nieuw, nalezen
    's.aihelp.3': "Ma ila eegi kartaa?", // nieuw, nalezen
    'c.aihelp.q': "Tan adigu ma qortay?", // nieuw, nalezen
    'c.aihelp.a': "Haa, anigoo caawimaad ka helaya AI.", // nieuw, nalezen
    'l.aiprivate': "Waxa aadan la wadaagin", // nieuw, nalezen
    'w.persoonlijk': "shakhsi ah", // nieuw, nalezen
    'w.gegevens': "xogta (magac, cinwaan, lambar)", // nieuw, nalezen
    'w.wachtwoord': "erayga sirta ah (password)", // nieuw, nalezen
    'w.typen': "qorid (taleefan ama kumbuyuutar)", // nieuw, nalezen
    'w.opslaan': "kaydin", // nieuw, nalezen
    'w.inloggen': "gelid (log in)", // nieuw, nalezen
    's.aiprivate.1': "Ma la wadaago magacyada macaamiisha.", // nieuw, nalezen
    's.aiprivate.2': "Ma u isticmaali karaa AI shaqadayda?", // nieuw, nalezen
    's.aiprivate.3': "Password-kaygu waa sir.", // nieuw, nalezen
    'c.aiprivate.q': "Kaliya tan geli chatbot-ka.", // nieuw, nalezen
    'c.aiprivate.a': "Waxaan doorbidaa inaanan samayn, waxaa ku jira magacyada macaamiisha.", // nieuw, nalezen
    'l.aifake': "Been mise run?", // nieuw, nalezen
    'w.echt': "run ah, dhab ah", // nieuw, nalezen
    'w.stem': "codka", // nieuw, nalezen
    'w.filmpje': "muuqaal (gaaban)", // nieuw, nalezen
    'w.ophangen': "taleefanka xirid", // nieuw, nalezen
    'w.nummer': "lambarka (taleefanka)", // nieuw, nalezen
    'w.haast': "degdeg", // nieuw, nalezen
    's.aifake.1': "Tani ma run baa mise waa been?", // nieuw, nalezen
    's.aifake.2': "Taleefanka ayaan xirayaa oo anigu dib ayaan u wacayaa.", // nieuw, nalezen
    's.aifake.3': "Lacag ma diro.", // nieuw, nalezen
    'c.aifake.q': "Haye, kani waa lambarkayga cusub. Ma si degdeg ah lacag ii soo diri kartaa?", // nieuw, nalezen
    'c.aifake.a': "Marka hore waxaan kugu wacayaa lambarkaagii hore.", // nieuw, nalezen
    'l.aiplan': "Marka app go'aamiyo", // nieuw, nalezen
    'w.planning': "qorshaynta, jadwalka", // nieuw, nalezen
    'w.mens': "aadanaha, qofka", // nieuw, nalezen
    'w.computer': "kumbuyuutarka", // nieuw, nalezen
    'w.tempo': "xawaaraha (shaqada)", // nieuw, nalezen
    'w.automatisch': "si toos ah, iskiis", // nieuw, nalezen
    'w.besluit': "go'aanka", // nieuw, nalezen
    's.aiplan.1': "Yaa gaaray go'aankan?", // nieuw, nalezen
    's.aiplan.2': "Waxaan rabaa inaan la hadlo qof.", // nieuw, nalezen
    's.aiplan.3': "Maxaan jadwalkayga ugu leeyahay saacado ka yar?", // nieuw, nalezen
    'c.aiplan.q': "App-ka ayaa sameeyey jadwalkaaga.", // nieuw, nalezen
    'c.aiplan.a': "Ma la hadli karaa qof arrintan ku saabsan?", // nieuw, nalezen
    'c.aihelp': "AI wuu caawiyaa, qof ayaa hubiya", // nieuw, nalezen
    'c.aihelp.b': "App-yada AI iyo chatbot-yada, sida ChatGPT, waxay turjumi karaan, sharxi karaan warqad ama kaa caawin karaan qoritaanka fariin. Taasi waa faa'iido. Laakiin AI mararka qaarkood wuu khaldamaa, haddana wuxuu u ekaadaa mid aad u hubaal ah. Ma waxay ku saabsan tahay qandaraaskaaga, mushaharkaaga, daawada ama badbaadada? Markaas had iyo jeer jawaabta la hubi qof. Tusaale ahaan madaxaaga, HR ama Juridisch Loket.",
    'c.aihelp.p': "Tani ma sax baa? Ma ila eegi kartaa?", // nieuw, nalezen
    'c.aihelp.s': "Chatbot ayaad wax ka weydiisay qandaraaskaaga. Wuxuu yiri lacag fasax ma helaysid. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.aihelp.o1': "HR ama Juridisch Loket ka codso inay hubiyaan.", // nieuw, nalezen
    'c.aihelp.o2': "Rumayso: chatbot-ku wuxuu u eg yahay mid aad u hubaal ah.", // nieuw, nalezen
    'c.aihelp.o3': "Waxba ha oran oo iska illow.", // nieuw, nalezen
    'c.aihelp.w': "Chatbot wuu ku khaldami karaa xeerarka iyo qandaraasyada. Holland ku dhowaad shaqaale kasta wuxuu helaa lacagta fasaxa. Qof yaqaan xeerarka ayaa hubin kara.", // nieuw, nalezen
    'c.aiprivate': "Ka fikir kahor intaadan qorin", // nieuw, nalezen
    'c.aiprivate.b': "Waxa aad ku qorto chatbot waa la kaydin karaa, waxaana isticmaali karta shirkadda samaysay. Sidaas darteed waligaa ha qorin BSN-kaaga, password ama macluumaadka bangigaaga. Ha gelin magacyo ama sawirro macaamiil, bukaanno ama saaxiibbo shaqo, ama waraaqo shaqada ka yimid. Loo-shaqeeyayaal badan waxay leeyihiin xeerar ku saabsan AI. Marka hore weydii inaad u isticmaali karto shaqadaada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.aiprivate.p': "Ma u isticmaali karaa AI tan?", // nieuw, nalezen
    'c.aiprivate.s': "Waxaad rabtaa in chatbot uu kuu qoro warbixin ku saabsan macmiil. Warbixinta waxaa ku jira magaca iyo cinwaanka macmiilka. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.aiprivate.o1': "Marka hore weydii, oo ka saar magaca iyo cinwaanka.", // nieuw, nalezen
    'c.aiprivate.o2': "Wax walba geli chatbot-ka: way ka dhakhso badan tahay.", // nieuw, nalezen
    'c.aiprivate.o3': "Warbixinta u dir saaxiib si uu u hubiyo.", // nieuw, nalezen
    'c.aiprivate.w': "Magacyada iyo cinwaannadu waa xog shakhsi ah. Si fudud uma tagi karaan shirkad kale. Loo-shaqeeyahaagu wuu yaqaan app-yada la oggol yahay.", // nieuw, nalezen
    'c.aifake': "Codad iyo muuqaallo been ah", // nieuw, nalezen
    'c.aifake.b': "Iyadoo AI la isticmaalayo, dambiilayaashu waxay koobiyeyn karaan cod waxayna samayn karaan sawirro iyo muuqaallo been ah. Wicitaan ama fariin u eg madaxaaga, bangigaaga ama qof qoyskaaga ka mid ah waxay noqon kartaa been. Taxaddar marka ay jiraan degdeg, lacag iyo lambar cusub. Taleefanka xir, oo adigu dib ugu wac lambarka aad taqaanid. Bangi dhab ah, loo-shaqeeye ama booliisku waligood kuma weydiistaan koodhadhkaaga.", // nieuw, nalezen
    'c.aifake.p': "Taleefanka ayaan xirayaa oo anigu dib ayaan u wacayaa.", // nieuw, nalezen
    'c.aifake.s': "Taleefankaaga ayaa dhacaya. Cod u eg sida madaxaaga oo kale ayaa yiri: “Hadda bixi biilkan, waa degdeg.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.aifake.o1': "Taleefanka xir oo adigu dib u wac madaxaaga.", // nieuw, nalezen
    'c.aifake.o2': "Si degdeg ah u bixi: waa madaxaaga.", // nieuw, nalezen
    'c.aifake.o3': "Sii koodhka bangigaaga, si madaxaagu u bixiyo.", // nieuw, nalezen
    'c.aifake.w': "Codka waa lagu koobiyeyn karaa AI. Degdeg iyo lacag oo wada jira waa calaamad digniin ah. Dib u wacidda lambar aad taqaanid waa hubin degdeg ah oo ammaan ah.", // nieuw, nalezen
    'c.aiplan': "Yaa go'aamiyey tan?", // nieuw, nalezen
    'c.aiplan.b': "Shirkado sii badanaya ayaa u oggolaada app ama kumbuyuutar inuu wax go'aamiyo. Tusaale ahaan, wuxuu sameeyaa jadwalka shaqada ama wuxuu ku tiriyaa xawaarahaaga iskaanka. Waxaad weydiin kartaa macluumaadka adiga lagaa ururiyo. Ma jiraa go'aan weyn oo adiga kugu saabsan, sida saacado ka yar, digniin ama shaqo ka eryid? Weydii cidda go'aamisay. Ma kumbuyuutar keligiis ayaa go'aankaas gaaray? Markaas waxaad codsan kartaa in qof mar kale hubiyo oo kuu sharxo. Saacadahaaga adigu qor. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.aiplan.p': "Qof ma eegi karaa tan?", // nieuw, nalezen
    'c.aiplan.s': "App-ka qorshayntu wuxuu ku siinayaa saacado aad u yar bisha soo socota. Cidna kuuma sheegayso sababta. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.aiplan.o1': "Qof ka codso inuu kuu sharxo.", // nieuw, nalezen
    'c.aiplan.o2': "Aqbal: app-ku had iyo jeer waa sax.", // nieuw, nalezen
    'c.aiplan.o3': "Weydii chatbot-ka app-ka ku jira sababta.", // nieuw, nalezen
    'c.aiplan.w': "App-yadu way khaldamaan, mana yaqaanaan wax walba oo adiga kugu saabsan. Waxaad weydiisan kartaa sharaxaad, qofna mar kale ayuu eegi karaa.", // nieuw, nalezen
    // In de kas (u.kas, 30 okt 2026): nieuw, nalezen.
    'u.kas': "Aqalka dhirta gudihiisa", // nieuw, nalezen
    'l.harvest': "Goosashada iyo kala soocidda", // nieuw, nalezen
    'w.kas': "aqalka dhirta (guri muraayad ah oo dhir lagu beero)", // nieuw, nalezen
    'w.gewas': "dalagga (dhirta baxda)", // nieuw, nalezen
    'w.rij': "safka (dhirta)", // nieuw, nalezen
    'w.oogsten': "goosasho", // nieuw, nalezen
    'w.sorteren': "kala soocid", // nieuw, nalezen
    'w.krat': "sanduuqa (caag)", // nieuw, nalezen
    's.harvest.1': "Waxaan ka shaqeeyaa aqalka dhirta.", // nieuw, nalezen
    's.harvest.2': "Safkee ayaan ka bilaabaa?", // nieuw, nalezen
    's.harvest.3': "Sanduuqu waa buuxaa.", // nieuw, nalezen
    'c.harvest.q': "Immisa saf ayaad dhammaysay?", // nieuw, nalezen
    'c.harvest.a': "Afar. Laba kale ayaa haray.", // nieuw, nalezen
    'l.greensafe': "Ammaanka aqalka dhirta", // nieuw, nalezen
    'w.spuitmiddelen': "daawooyinka dhirta lagu buufiyo (kiimikooyin dhirta loogu talagalay)", // nieuw, nalezen
    'w.bespoten': "la buufiyey (daawooyinka dhirta)", // nieuw, nalezen
    'w.plukkar': "gaariga goosashada (gaari yar oo gacanta lagu riixo)", // nieuw, nalezen
    'w.bukken': "hoos u foorarsasho", // nieuw, nalezen
    'w.drinken': "cabbid", // nieuw, nalezen
    'w.hitte': "kulaylka (marka ay aad u kulul tahay)", // nieuw, nalezen
    's.greensafe.1': "Guriga dhirtan ma la buufiyey?", // nieuw, nalezen
    's.greensafe.2': "Waxaan cabayaa xoogaa biyo ah.", // nieuw, nalezen
    's.greensafe.3': "Aaway gaariga goosashadu?", // nieuw, nalezen
    'c.greensafe.q': "Ma ka shaqeyn karaa guriga dhirta saddexaad?", // nieuw, nalezen
    'c.greensafe.a': "Maya, weli ma aha. Hadda uun baa la buufiyey.", // nieuw, nalezen
    'c.harvest': "Xawaaraha iyo mushaharka xabbadkiiba", // nieuw, nalezen
    'c.harvest.b': "Guriga dhirta badanaa waxaad ku shaqeysaa xawaare go'an (tempo). Loo-shaqeeyayaasha qaar waxay lacag ku bixiyaan sanduuq kasta, saf kasta ama kiilo kasta: mushahar xabbadkiiba (stukloon). Xitaa mushahar xabbadkiiba, saacad kasta oo aad shaqeyso waa inaad hesho ugu yaraan mushaharka ugu yar ee sharciga ah. Qaddarka ku hubi rijksoverheid.nl. Maalin kasta qor saacadahaaga iyo sanduuqyadaada, oo la barbar dhig warqadda mushaharkaaga. Si dhakhso ah u shaqeyntu waa wanaagsan tahay, laakiin badbaadadu ayaa ka horreysa. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.harvest.p': "Immisa sanduuq ayaan maanta buuxiyey?", // nieuw, nalezen
    'c.harvest.s': "Waxaa laguu bixiyaa sanduuq kasta. Toddobaadkan waxaad heshaa wax ka yar mushaharka ugu yar saacaddiiba. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.harvest.o1': "Tus liiskaaga saacadaha iyo sanduuqyada.", // nieuw, nalezen
    'c.harvest.o2': "Waxba ha oran, oo si ka dhakhso badan u shaqee.", // nieuw, nalezen
    'c.harvest.o3': "Aqbal: taasi waa caadi marka mushaharku xabbadkiiba yahay.", // nieuw, nalezen
    'c.harvest.w': "Mushahar xabbadkiiba xitaa, saacad kasta oo aad shaqeysay waa inaad hesho ugu yaraan mushaharka ugu yar. Liiskaaga saacadaha iyo sanduuqyada ayaa kaa caawinaya inaad muujiso waxa aad qabatay. Haddii aan la saxin, weydii caawimaad.", // nieuw, nalezen
    'c.greensafe': "Kulayl iyo daawooyinka la buufiyo", // nieuw, nalezen
    'c.greensafe.b': "Guriga dhirta aad buu u kululaan karaa, xitaa gu'ga. Biyo badanaa cab, xitaa ka hor intaadan harraadin, oo nasashadaada ku qaado meel qabow. Ma dawakhaysaa, ma xanuunsan tahay, mise madax-xanuun ayaa ku qabtay? Jooji oo qof u sheeg. Dhirta mararka qaarkood waxaa lagu buufiyaa kiimikooyin (spuitmiddelen). Guriga dhirta ee hadda la buufiyey badanaa calaamad ayaa albaabka ku taal. Ha gelin ilaa madaxaagu kuu sheego inay mar kale ammaan tahay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.greensafe.p': "Ma ka shaqeyn karaa guriga dhirtan hadda?", // nieuw, nalezen
    'c.greensafe.s': "Guri dhireed ayaa la buufiyey saaka. Calaamad ayaa albaabka ku dheggan. Saaxiibka shaqada ayaa yiri: “Kaalay, waa daqiiqad uun.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.greensafe.o1': "Bannaanka joog oo weydii goorta ay ammaan tahay.", // nieuw, nalezen
    'c.greensafe.o2': "Si degdeg ah u gal oo neefta qabso.", // nieuw, nalezen
    'c.greensafe.o3': "Gal, kadibna gacmahaaga si fiican u dhaq.", // nieuw, nalezen
    'c.greensafe.w': "Daawooyinka dhirta lagu buufiyo waxay dhaawici karaan maqaarkaaga, indhahaaga iyo sambabadaada, xitaa marka aadan waxba urin. Buufinta kadib waxaa jira waqti sugid ah ka hor inta aan dadku mar kale gelin. Madaxaaga ayaa og goorta uu dhammaado.", // nieuw, nalezen
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': "Tirooyin iyo xog", // nieuw, nalezen
    'l.details': "Xogtaada", // nieuw, nalezen
    'w.voornaam': "magaca koowaad", // nieuw, nalezen
    'w.achternaam': "magaca dambe, magaca qoyska", // nieuw, nalezen
    'w.spellen': "higgaadin (xarfaha mid-mid u sheeg)", // nieuw, nalezen
    'w.telefoonnummer': "lambarka taleefanka", // nieuw, nalezen
    'w.geboortedatum': "taariikhda dhalashada", // nieuw, nalezen
    'w.formulier': "foomka (warqad ama bog la buuxiyo)", // nieuw, nalezen
    's.details.1': "Ma higgaadin kartaa taas?", // nieuw, nalezen
    's.details.2': "Waxaan bixinayaa lambarkayga taleefanka ee cusub.", // nieuw, nalezen
    's.details.3': "Foomkan waxaa loogu talagalay xafiiska canshuuraha.", // nieuw, nalezen
    'c.details.q': "Waa maxay magacaaga dambe?", // nieuw, nalezen
    'c.details.a': "Haddad. Ma higgaadiyaa?", // nieuw, nalezen
    'l.dates': "Maalmo iyo taariikho", // nieuw, nalezen
    'w.maandag': "Isniin", // nieuw, nalezen
    'w.week': "toddobaadka", // nieuw, nalezen
    'w.maand': "bisha", // nieuw, nalezen
    'w.volgendeweek': "toddobaadka soo socda", // nieuw, nalezen
    'w.vorigeweek': "toddobaadkii hore", // nieuw, nalezen
    'w.totenmet': "ilaa iyo (maalinta ugu dambeysa sidoo kale waa la tiriyaa)", // nieuw, nalezen
    's.dates.1': "Waan shaqeyn karaa Isniin ilaa Khamiis (Khamiista sidoo kale).", // nieuw, nalezen
    's.dates.2': "Toddobaadka soo socda waxaan shaqeynayaa afar maalmood.", // nieuw, nalezen
    's.dates.3': "Toddobaadkii hore waxaan shaqeeyey afartan saacadood.", // nieuw, nalezen
    'c.dates.q': "Maanta waa taariikhdee?", // nieuw, nalezen
    'c.dates.a': "Waa Isniin, 3 Juun.", // nieuw, nalezen
    'l.permit': "Waraaqo, is-dhexgal iyo shaqadaada", // nieuw, nalezen
    'w.papieren': "waraaqaha (dukumentiyada)", // nieuw, nalezen
    'w.werkvergunning': "ruqsadda shaqada", // nieuw, nalezen
    'w.werknemer': "shaqaalaha (waxaad u shaqeysaa loo-shaqeeye)", // nieuw, nalezen
    'w.zzper': "qofka iskiis u shaqeysta (adigu naftaada ayaad u shaqeysaa)", // nieuw, nalezen
    'w.inburgering': "is-dhexgalka (koorsada iyo imtixaannada dadka cusub)", // nieuw, nalezen
    'w.taalles': "fasalka luqadda", // nieuw, nalezen
    's.permit.1': "Waraaqahayga ma halkan ku shaqeyn karaa?", // nieuw, nalezen
    's.permit.2': "Ma shaqaale baan ahay mise qof iskiis u shaqeysta?", // nieuw, nalezen
    's.permit.3': "Waxaan ahay shaqaale la yeero marka loo baahdo.", // nieuw, nalezen
    'c.permit.q': "Ma shaqeyn kartaa Talaadada?", // nieuw, nalezen
    'c.permit.a': "Maya, markaas waxaan leeyahay fasalka luqadda. Arbacada waan awoodaa.", // nieuw, nalezen
    'l.kids': "Carruurta iyo shaqada", // nieuw, nalezen
    'w.zwanger': "uur leh", // nieuw, nalezen
    'w.kinderopvang': "xannaanada carruurta", // nieuw, nalezen
    'w.ophalen': "soo qaadid (u tag oo soo kaxee qof)", // nieuw, nalezen
    'w.ziekkind': "ilmo xanuunsan", // nieuw, nalezen
    'w.ouderschapsverlof': "fasaxa waalidnimada", // nieuw, nalezen
    'w.zorgverlof': "fasaxa daryeelka (waqti fasax ah si aad u daryeesho qof qoyska ka mid ah oo xanuunsan)", // nieuw, nalezen
    's.kids.1': "Ilmahaygu waa xanuunsan yahay. Waa inaan soo qaadaa.", // nieuw, nalezen
    's.kids.2': "Ma qaadan karaa fasax degdeg ah?", // nieuw, nalezen
    's.kids.3': "Loo-shaqeeyahaygu ma sii bixinayaa mushaharkayga?", // nieuw, nalezen
    'c.kids.q': "Maxaad hadda u tagaysaa?", // nieuw, nalezen
    'c.kids.a': "Xannaanada carruurta ayaa soo wacday. Wiilkayga ayaa qandho qaba.", // nieuw, nalezen
    'l.body': "Jirka iyo xanuunka", // nieuw, nalezen
    'w.hoofd': "madaxa (jirka)", // nieuw, nalezen
    'w.rug': "dhabarka", // nieuw, nalezen
    'w.arm': "cududda (gacanta)", // nieuw, nalezen
    'w.hand': "gacanta (calaacasha)", // nieuw, nalezen
    'w.buik': "caloosha", // nieuw, nalezen
    'w.oog': "isha", // nieuw, nalezen
    's.body.1': "Gacantayda ayaa i xanuunaysa.", // nieuw, nalezen
    's.body.2': "Si fiican uma dareemayo.", // nieuw, nalezen
    's.body.3': "Waxaan ku dhacay cududdayda.", // nieuw, nalezen
    'c.body.q': "Xaggee ku xanuunaysaa?", // nieuw, nalezen
    'c.body.a': "Dhabarka. Waxaan qaaday sanduuq culus.", // nieuw, nalezen
    'l.jobends': "Marka shaqadaadu dhammaato", // nieuw, nalezen
    'w.eindafrekening': "xisaabta ugu dambeysa (mushaharkaaga ugu dambeeya marka shaqo dhammaato)", // nieuw, nalezen
    'w.opzeggen': "joojin (qandaraas), baajin", // nieuw, nalezen
    'w.uitschrijven': "iska diiwaan-tirid (magacaaga ka saar liis)", // nieuw, nalezen
    'w.sleutel': "furaha", // nieuw, nalezen
    'w.verhuizen': "guurid (u guur guri kale)", // nieuw, nalezen
    'w.busje': "baabuurka yar (bas yar)", // nieuw, nalezen
    's.jobends.1': "Lacagta fasaxa iyo maalmahayga fasaxa ah ma la ii bixinayaa?", // nieuw, nalezen
    's.jobends.2': "Waxaan talo ka weydiinayaa Juridisch Loket.", // nieuw, nalezen
    's.jobends.3': "Caymis caafimaad oo cusub anigu ayaan iska diyaarinayaa.", // nieuw, nalezen
    'c.jobends.q': "Shaqadaadu waxay dhammaanaysaa Jimcaha. Markaas waa inaad guriga sidoo kale ka baxdaa.", // nieuw, nalezen
    'c.jobends.a': "Waa maxay muddada ogeysiiska ee qandaraaskayga kirada?", // nieuw, nalezen
    'c.details': "Xogtaada: si sax ah u bixi", // nieuw, nalezen
    'c.details.b': "Bilowga shaqada, waxaad bixisaa xogtaada. Taas waa magacaaga, cinwaankaaga, lambarka taleefanka, taariikhda dhalashada iyo BSN. Magacaaga si tartiib ah u higgaadi, xaraf xaraf. Kadib ka hubi magacaaga qandaraaskaaga iyo warqadda mushaharkaaga. Khalad ku jira magacaaga ama BSN wuxuu dhibaato ku keeni karaa mushaharkaaga ama canshuurtaada. Cinwaan ama lambar taleefan oo cusub? U sheeg loo-shaqeeyahaaga.",
    'c.details.p': "Aan higgaadiyo: A, L, I.", // nieuw, nalezen
    'c.details.s': "Taleefanka, xafiiska shaqo-qorista ayaa qoraya magacaaga dambe. Waxaad maqashaa inay si khaldan u qorayaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.details.o1': "Magacaaga si tartiib ah u higgaadi oo ka codso inay dib kuugu akhriyaan.", // nieuw, nalezen
    'c.details.o2': "Waxba ha oran: khalad yar oo magacaaga ku jira dhib ma leh.", // nieuw, nalezen
    'c.details.o3': "Taleefanka dhig, oo rajee inay khaladka hadhow helaan.", // nieuw, nalezen
    'c.details.w': "Magacaagu waa inuu isku mid ka ahaadaa qandaraaskaaga, warqadda mushaharkaaga iyo aqoonsigaaga. Markaas mushaharkaaga iyo canshuurtaadu si sax ah ayay u socdaan. Higgaadinta iyo dib u akhrintu waa hubin degdeg ah.", // nieuw, nalezen
    'c.dates': "Taariikhaha: maalinta ayaa hore u timaada", // nieuw, nalezen
    'c.dates.b': "Af-Holandiiska, maalinta ayaa ka horreysa bisha: 3-6 waa 3 Juun, ma aha 6 Maarso. “Tot en met” macnaheedu waa in maalinta ugu dambeysa sidoo kale la tiriyo. Maalmaha iyo bilaha waxaa lagu qoraa xaraf yar: maandag, juni. Ma hubtid taariikh? Weydii, oo dib ugu celi.", // nieuw, nalezen
    'c.dates.p': "Ma waxaad ula jeeddaa 3 Juun?", // nieuw, nalezen
    'c.dates.s': "Jadwalkaaga waxaa ku qoran: “Vrij: 3-6 tot en met 5-6”. Goorma ayaad fasax tahay?", // nieuw, nalezen
    'c.dates.o1': "3, 4 iyo 5 Juun.", // nieuw, nalezen
    'c.dates.o2': "3 iyo 4 Juun oo keliya.", // nieuw, nalezen
    'c.dates.o3': "Laga bilaabo 6 Maarso ilaa 6 May.", // nieuw, nalezen
    'c.dates.w': "Maalinta ayaa hore u timaada, kadib bisha: 3-6 waa 3 Juun. “Tot en met” macnaheedu waa in 5 Juun sidoo kale la tiriyo, sidaas darteed waxaad fasax tahay saddex maalmood.", // nieuw, nalezen
    'c.permit': "Shaqo iyo is-dhexgal", // nieuw, nalezen
    'c.permit.b': "Ma waajib baa kugu ah is-dhexgalka (inburgering)? U sheeg loo-shaqeeyahaaga, oo u sheeg gemeente inaad shaqeyso. Goor hore weydii in fasallada luqaddu la jaanqaadi karaan jadwalkaaga. Ma hubtid inaad halkan ka shaqeyn karto? Hubi ka hor intaadan bilaabin, tusaale ahaan IND, UWV ama VluchtelingenWerk. Ma lagu weydiiyey inaad isu diiwaangeliso qof iskiis u shaqeysta (zzp’er) shaqadan dartiis? Marka hore talo weydii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.permit.p': "Talaadada waxaan leeyahay fasalka luqadda. Jadwalkaygu ma tixgelin karaa taas?", // nieuw, nalezen
    'c.permit.s': "Fasalkaaga luqaddu waa subaxa Talaadada. Jadwalkaaga cusub wuxuu leeyahay inaad markaas shaqeyso. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.permit.o1': "Weydii madaxaaga inuu beddelo jadwalka.", // nieuw, nalezen
    'c.permit.o2': "Fasalka ka maqnow: shaqada ayaa hore u marta.", // nieuw, nalezen
    'c.permit.o3': "Talaadada guriga joog oo waxba ha oran.", // nieuw, nalezen
    'c.permit.w': "Is-dhexgalkaagu sidoo kale waa waajib. Loo-shaqeeyayaal badan ayaa caawiya marka ay goor hore ogaadaan. Sidoo kale gemeente waxay kaa caawin kartaa inaad qorshahaaga la jaanqaadsiiso shaqadaada.", // nieuw, nalezen
    'c.kids': "Ilmahaagu waa xanuunsan yahay", // nieuw, nalezen
    'c.kids.b': "Ilmahaagu si lama filaan ah ma u xanuunsaday? Isla markiiba u sheeg loo-shaqeeyahaaga. Saacadaha ama maalmaha ugu horreeya waxaad qaadan kartaa fasax degdeg ah (calamiteitenverlof), loo-shaqeeyahaaguna wuu sii bixinayaa mushaharkaaga. Ilmahaagu muddo dheer ma u baahan yahay daryeel? Markaas waxaad codsan kartaa fasax daryeel (zorgverlof). Uur ma leedahay? Loo-shaqeeyahaagu kuma eryi karo sababtaas darteed. Waqtigeeda weydii fasaxa uurka iyo fasaxa waalidnimada (ouderschapsverlof). Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.kids.p': "Ilmahaygu waa xanuunsan yahay. Maanta ma goor hore bixi karaa?", // nieuw, nalezen
    'c.kids.s': "Xannaanada carruurta (kinderopvang) ayaa shaqada kuugu soo wacday. Ilmahaagu qandho ayuu qabaa oo waa inuu guriga aadaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.kids.o1': "U sheeg madaxaaga, oo weydii fasax degdeg ah.", // nieuw, nalezen
    'c.kids.o2': "Iska tag adigoon waxba oran, oo berri sharax.", // nieuw, nalezen
    'c.kids.o3': "Shaqada sii joog, oo ilmahaagu ha sugo ilaa shaqadaadu dhammaato.", // nieuw, nalezen
    'c.kids.w': "Ilmo xanuunsan waa xaalad degdeg ah oo guriga ah. Marka aad marka hore u sheegto madaxaaga, wuxuu qorsheyn karaa shaqada. Fasaxa degdega ah waxaa loogu talagalay xaaladahan oo kale.", // nieuw, nalezen
    'c.body': "Sheeg waxa dhacay iyo meesha ku xanuunaysa", // nieuw, nalezen
    'c.body.b': "Dhakhtarka, u sheeg waxa dhacay iyo meesha ku xanuunaysa. Tusaale ahaan: “Ik ben gevallen. Mijn arm doet pijn.” Sidoo kale sheeg inta uu xanuunku ku hayey. Uma baahnid inaad qiyaasto waxa ku haya: dhakhtarka ayaa hubinaya taas. Ma shaqada ayay ku dhacday? Isla maalintaas u sheeg madaxaaga.", // nieuw, nalezen
    'c.body.p': "Waan dhacay. Cududdayda ayaa i xanuunaysa.", // nieuw, nalezen
    'c.body.s': "Shaqada waxaad ka qaadday sanduuq culus. Hadda dhabarkaaga ayaa aad kuu xanuunaya. Waxaad joogtaa dhakhtarka qoyska (huisarts). Maxaad leedahay?", // nieuw, nalezen
    'c.body.o1': "Meesha ku xanuunaysa, iyo waxa dhacay: waxaad qaadday sanduuq culus.", // nieuw, nalezen
    'c.body.o2': "Kaliya inaadan fiicnayn, waxba ka badan.", // nieuw, nalezen
    'c.body.o3': "Magaca cudur aad internetka ka heshay.", // nieuw, nalezen
    'c.body.w': "Marka aad sheegto meesha ku xanuunaysa iyo waxa dhacay, dhakhtarku si dhakhso ah ayuu kuu fahmaa. Dhakhtarka ayaa hubiya waxa ay tahay. Ma shaqada ayay ku dhacday? Sidoo kale u sheeg madaxaaga.", // nieuw, nalezen
    'c.jobends': "Shaqadaadu way dhammaanaysaa: maxaa kale oo joogsanaya?", // nieuw, nalezen
    'c.jobends.b': "Marka shaqadaadu dhammaato, hubi xisaabta ugu dambeysa (eindafrekening). Maalmaha fasaxa ee aadan isticmaalin iyo lacagta fasaxa badanaa waa lala bixiyaa. Guriga, caymiska caafimaadka ama baabuurka yar ee xafiiska shaqo-qorista waxay joogsan karaan isla waqtigaas. Waqtigeeda iska diyaari caymis caafimaad oo adiga kuu gaar ah. Qandaraaska kiradaadu wuxuu leeyahay xeerar u gaar ah: talo weydii ka hor intaadan guriga ka bixin. Ma guuraysaa, mise Holland ayaad ka tagaysaa? U sheeg gemeente. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.jobends.p': "Goorma ayaan helayaa xisaabta ugu dambeysa?", // nieuw, nalezen
    'c.jobends.s': "Shaqadaadu waxay dhammaanaysaa Jimcaha. Caymiskaaga caafimaadku wuxuu maraa xafiiska shaqo-qorista. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.jobends.o1': "Weydii goorta uu joogsanayo, oo waqtigeeda iska diyaari mid adiga kuu gaar ah.", // nieuw, nalezen
    'c.jobends.o2': "Waxba: caymisku iskiis ayuu u sii socdaa.", // nieuw, nalezen
    'c.jobends.o3': "Sug ilaa aad xanuunsato, kadibna markaas diyaari.", // nieuw, nalezen
    'c.jobends.w': "Caymiska xafiiska shaqo-qorista badanaa wuu joogsadaa marka shaqadaadu joogsato. Marka aad ku nooshahay ama ka shaqeyso Holland, badanaa waa inaad haysataa caymis caafimaad. Haddii aad waqtigeeda diyaariso, caymis ayaad sii haysanaysaa.", // nieuw, nalezen
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "Dhammaystirka shaqadaada", // nieuw, nalezen
    'l.workorder': "Warqadda shaqada", // nieuw, nalezen
    'w.werkbon': "warqadda shaqada (warqad ama app ay hawshaadu ku qoran tahay)", // nieuw, nalezen
    'w.lezen': "akhrin", // nieuw, nalezen
    'w.aantal': "tirada (immisa)", // nieuw, nalezen
    'w.materiaal': "agabka (waxa aad u baahan tahay shaqada)", // nieuw, nalezen
    'w.klaarleggen': "diyaarin (dhig waxa aad u baahan tahay)", // nieuw, nalezen
    'w.handtekening': "saxiixa", // nieuw, nalezen
    's.workorder.1': "Marka hore waxaan akhriyaa warqadda shaqada.", // nieuw, nalezen
    's.workorder.2': "Tiradani ma sax baa?", // nieuw, nalezen
    's.workorder.3': "Waxaan diyaarinayaa agabka.", // nieuw, nalezen
    'c.workorder.q': "Ma garanaysaa waxa ay tahay inaad samayso?", // nieuw, nalezen
    'c.workorder.a': "Ku dhowaad. Erygan warqadda shaqada ku qoran maxay ka dhigan tahay?", // nieuw, nalezen
    'l.handover': "Dhammaaday, mise weli?", // nieuw, nalezen
    'w.opruimen': "nadiifin, alaabta meesheeda dhigid", // nieuw, nalezen
    'w.nakijken': "hubin (shaqada mar kale eeg)", // nieuw, nalezen
    'w.afmelden': "ogeysiin bixitaan (sheeg inaad dhammaysay oo aad baxayso)", // nieuw, nalezen
    'w.kapot': "jaban", // nieuw, nalezen
    'w.opslot': "quful (xiran)", // nieuw, nalezen
    'w.bijzonderheid': "albaabka", // nieuw, nalezen
    's.handover.1': "Waxaan nadiifinayaa meeshayda.", // nieuw, nalezen
    's.handover.2': "Ma ii hubin kartaa shaqadayda?", // nieuw, nalezen
    's.handover.3': "Waxaan madaxa u sheegayaa inaan dhammeeyey oo aan baxayo.", // nieuw, nalezen
    'c.handover.q': "Wax walba ma dhammaadeen?", // nieuw, nalezen
    'c.handover.a': "Ku dhowaad. Qolka afraad waa xirnaa.", // nieuw, nalezen
    'u.tech': "Goobta farsamada", // nieuw, nalezen
    'l.workshop': "Qalabka goobta farsamada", // nieuw, nalezen
    'w.gereedschap': "qalabka", // nieuw, nalezen
    'w.zagen': "miinshaarid (ku jar miinshaar)", // nieuw, nalezen
    'w.slijpen': "shiidid (birta ku sinee ama ku jar mashiin)", // nieuw, nalezen
    'w.vonk': "dhimbiisha", // nieuw, nalezen
    'w.gehoorbescherming': "ilaaliyaha maqalka (dhegahaaga loogu talagalay)", // nieuw, nalezen
    'w.lawaai': "buuqa (cod dheer oo badan)", // nieuw, nalezen
    's.workshop.1': "Aaway qalabku?", // nieuw, nalezen
    's.workshop.2': "Waxaan xirtaa ilaaliyaha maqalka marka aan shiidayo.", // nieuw, nalezen
    's.workshop.3': "Iska jir dhimbiisha!", // nieuw, nalezen
    'c.workshop.q': "Maxaad muraayad u xiran tahay?", // nieuw, nalezen
    'c.workshop.a': "Marka aan miinshaarayo, jajab yar ayaa ishayda geli kara.", // nieuw, nalezen
    'l.power': "Marka hore korontada dami", // nieuw, nalezen
    'w.stroom': "korontada", // nieuw, nalezen
    'w.kabel': "fiilada", // nieuw, nalezen
    'w.stekker': "fiishka", // nieuw, nalezen
    'w.onderspanning': "koronto leh (koronto ayaa ku socota)", // nieuw, nalezen
    'w.spanningsloos': "koronto la'aan, ammaan (koronto kuma jirto)", // nieuw, nalezen
    'w.elektricien': "farsamayaqaanka korontada", // nieuw, nalezen
    's.power.1': "Weli koronto ma ku jirtaa tan?", // nieuw, nalezen
    's.power.2': "Fiiladani waa jaban tahay.", // nieuw, nalezen
    's.power.3': "Waan sugayaa ilaa ay koronto la'aan noqoto.", // nieuw, nalezen
    'c.power.q': "Ma beddeli kartaa laambaddaas?", // nieuw, nalezen
    'c.power.a': "Korontadu ma demsan tahay? Haddii kale, waxaan sugayaa farsamayaqaanka korontada.", // nieuw, nalezen
    'u.garage': "Garaashka", // nieuw, nalezen
    'l.garage': "Taayirada, saliidda iyo wiishka", // nieuw, nalezen
    'w.band': "taayirka", // nieuw, nalezen
    'w.olie': "saliidda", // nieuw, nalezen
    'w.accu': "baytariga baabuurka", // nieuw, nalezen
    'w.monteur': "makaanikiga", // nieuw, nalezen
    'w.hefbrug': "wiishka baabuurka (baabuurka kor ayuu u qaadaa)", // nieuw, nalezen
    'w.lek': "dalool leh, daadanaya (hawo ama biyo ayaa ka baxaya)", // nieuw, nalezen
    's.garage.1': "Taayirka ayaa dalool leh.", // nieuw, nalezen
    's.garage.2': "Aaway saliidda cusub?", // nieuw, nalezen
    's.garage.3': "Baabuurku wuxuu saaran yahay wiishka.", // nieuw, nalezen
    'c.garage.q': "Ma beddeli kartaa taayirada baabuurkan?", // nieuw, nalezen
    'c.garage.a': "Haa. Aaway taayirada jiilaalka?", // nieuw, nalezen
    'l.carjob': "Macmiilka ayaa go'aamiya", // nieuw, nalezen
    'w.proefrit': "wadista tijaabada", // nieuw, nalezen
    'w.rijbewijs': "liisanka darawalnimada", // nieuw, nalezen
    'w.akkoord': "la isku raacay, OK (haa ayaad ku tiraahdaa)", // nieuw, nalezen
    'w.kosten': "kharashka (waxa ay tahay inaad bixiso)", // nieuw, nalezen
    'w.repareren': "dayactirid, hagaajin", // nieuw, nalezen
    'w.onderdeel': "qaybta (ee baabuur ama mashiin)", // nieuw, nalezen
    's.carjob.1': "Macmiilku ma ku raacsan yahay kharashka?", // nieuw, nalezen
    's.carjob.2': "Qaybtani waa jaban tahay.", // nieuw, nalezen
    's.carjob.3': "Ma samayn karaa wadis tijaabo ah?", // nieuw, nalezen
    'c.carjob.q': "Bareegyada sidoo kale way xun yihiin. Isla markiiba ma samaynaysaa?", // nieuw, nalezen
    'c.carjob.a': "Marka hore waxaan weydiinayaa madaxayga. Macmiilku waa inuu oggolaadaa.", // nieuw, nalezen
    'u.stage': "Tababarka shaqada", // nieuw, nalezen
    'l.placement': "Tababarkaaga shaqada", // nieuw, nalezen
    'w.stage': "tababarka shaqada (waxaad wax ku barataa shirkad)", // nieuw, nalezen
    'w.praktijkopleider': "tababaraha goobta shaqada (hagahaaga shirkadda)", // nieuw, nalezen
    'w.stagebegeleider': "hagaha tababarka (hagahaaga dugsiga)", // nieuw, nalezen
    'w.pok': "heshiiska tababarka (adiga, dugsiga iyo shirkadda ayaa saxiixa)", // nieuw, nalezen
    'w.school': "dugsiga", // nieuw, nalezen
    'w.leerbedrijf': "shirkadda waxbarashada (shirkad ardaydu wax ku baran karaan)", // nieuw, nalezen
    's.placement.1': "Waxaan tababarka shaqada ku qaadanayaa bakhaar.", // nieuw, nalezen
    's.placement.2': "Waa kuma tababarahayga goobta shaqada?", // nieuw, nalezen
    's.placement.3': "Weli ma saxiixin heshiiska tababarka.", // nieuw, nalezen
    'c.placement.q': "Goorma ayaad bilaabaysaa tababarkaaga shaqada?", // nieuw, nalezen
    'c.placement.a': "Isniinta. Marka hore waxaan saxiixaynaa heshiiska tababarka.", // nieuw, nalezen
    'l.review': "Jawaab-celin ku saabsan tababarkaaga", // nieuw, nalezen
    'w.beoordeling': "qiimaynta (sida fiican ee aad u samayso)", // nieuw, nalezen
    'w.leerdoel': "hadafka waxbarashada (waxa aad rabto inaad barato)", // nieuw, nalezen
    'w.voorbeeld': "tusaalaha", // nieuw, nalezen
    'w.portfolio': "faylka shaqadaada (gal ay ku jiraan shaqadaada iyo caddeymaha)", // nieuw, nalezen
    'w.cijfer': "dhibcaha, darajada", // nieuw, nalezen
    'w.verslag': "warbixinta (qoraal ku saabsan shaqadaada)", // nieuw, nalezen
    's.review.1': "Maxaan si ka wanaagsan u samayn karaa?", // nieuw, nalezen
    's.review.2': "Ma i siin kartaa tusaale?", // nieuw, nalezen
    's.review.3': "Qiimayntaydu waa toddobaadka soo socda.", // nieuw, nalezen
    'c.review.q': "Waa inaad si dhakhso badan u shaqeysaa.", // nieuw, nalezen
    'c.review.a': "Hagaag. Ma i tusi kartaa sida loo sameeyo si dhakhso badan?", // nieuw, nalezen
    'u.society': "Ka qaybqaadashada Holland", // nieuw, nalezen
    'l.council': "Dowladda hoose iyo codeynta", // nieuw, nalezen
    'w.stemmen': "codeyn", // nieuw, nalezen
    'w.verkiezing': "doorashada", // nieuw, nalezen
    'w.gemeenteraad': "golaha dowladda hoose (wuxuu go'aamiyaa magaaladaada)", // nieuw, nalezen
    'w.parlement': "baarlamaanka (wuxuu sameeyaa sharciyada)", // nieuw, nalezen
    'w.stempas': "kaarka codeynta (kaarka aad u baahan tahay si aad u codeyso)", // nieuw, nalezen
    'w.burgemeester': "duqa magaalada", // nieuw, nalezen
    's.council.1': "Ma xaq baan u leeyahay inaan codeeyo?", // nieuw, nalezen
    's.council.2': "Kaarkayga codeyntu wuxuu ku yimid boostada.", // nieuw, nalezen
    's.council.3': "Golaha dowladda hoose ayaa go'aamiya xaafaddayda.", // nieuw, nalezen
    'c.council.q': "Arbacada ma codeynaysaa?", // nieuw, nalezen
    'c.council.a': "Haa. Waxaan haystaa kaarkayga codeynta iyo aqoonsigayga.", // nieuw, nalezen
    'l.police': "Booliska iyo xuquuqdaada", // nieuw, nalezen
    'w.agent': "sarkaalka booliska", // nieuw, nalezen
    'w.boete': "ganaaxa (lacag aad bixiso ciqaab ahaan)", // nieuw, nalezen
    'w.bezwaar': "diidmada (qoraal ahaan waxaad ku sheegtaa inaadan raacsanayn)", // nieuw, nalezen
    'w.rechter': "garsooraha", // nieuw, nalezen
    'w.advocaat': "qareenka", // nieuw, nalezen
    'w.wet': "sharciga", // nieuw, nalezen
    's.police.1': "Ganaax ayaa la i saaray.", // nieuw, nalezen
    's.police.2': "Waxaan rabaa inaan diidmo gudbiyo.", // nieuw, nalezen
    's.police.3': "Waxaan rabaa inaan la hadlo qareen.", // nieuw, nalezen
    'c.police.q': "Ma arki karaa aqoonsigaaga?", // nieuw, nalezen
    'c.police.a': "Haa, waa kan. Maxaa dhacaya?", // nieuw, nalezen
    'u.online': "Internetka shaqada", // nieuw, nalezen
    'l.login': "Galitaanka akoonka", // nieuw, nalezen
    'w.uitloggen': "ka bixid (akoonka)", // nieuw, nalezen
    'w.account': "akoonka", // nieuw, nalezen
    'w.scherm': "shaashadda", // nieuw, nalezen
    'w.vergrendelen': "quflid (shaashad ama taleefan)", // nieuw, nalezen
    'w.gebruikersnaam': "magaca isticmaalaha", // nieuw, nalezen
    'w.inlogcode': "koodhka galitaanka (koodh aad ku hesho fariin ama app)", // nieuw, nalezen
    's.login.1': "Waxaan illaaway erayga sirta ah.", // nieuw, nalezen
    's.login.2': "Mar walba waan ka baxaa akoonka.", // nieuw, nalezen
    's.login.3': "DigiD-gayga qofna ma siiyo.", // nieuw, nalezen
    'c.login.q': "Ma geli kartaa akoonka?", // nieuw, nalezen
    'c.login.a': "Maya, erayga sirta ahi ma shaqeynayo.", // nieuw, nalezen
    'l.phish': "Iimaylo been ah", // nieuw, nalezen
    'w.afzender': "diraha (cidda soo dirtay)", // nieuw, nalezen
    'w.klikken': "gujin", // nieuw, nalezen
    'w.bijlage': "lifaaqa", // nieuw, nalezen
    'w.verdacht': "shaki leh", // nieuw, nalezen
    'w.ictafdeling': "waaxda IT-ga", // nieuw, nalezen
    'w.wijzigen': "beddelid", // nieuw, nalezen
    's.phish.1': "Iimaylkan waa shaki leh.", // nieuw, nalezen
    's.phish.2': "Ma furo lifaaqa.", // nieuw, nalezen
    's.phish.3': "Isla markiiba waxaan beddelayaa erayga sirta ah.", // nieuw, nalezen
    'c.phish.q': "Ma gujisay linkiga?", // nieuw, nalezen
    'c.phish.a': "Haa. Waxaan wacayaa waaxda IT-ga.", // nieuw, nalezen
    'l.mychoice': "Waxa aan ku fiicnahay", // nieuw, nalezen
    'w.goedin': "ku fiican", // nieuw, nalezen
    'w.kiezen': "dooran", // nieuw, nalezen
    'w.beroep': "xirfadda, nooca shaqada", // nieuw, nalezen
    'w.bijbaan': "shaqada dhinaca (shaqo yar oo dugsiga la socota)", // nieuw, nalezen
    'w.nauwkeurig': "taxaddar leh oo sax ah", // nieuw, nalezen
    'w.meeloopdag': "maalinta la socodka (maalin aad qof shaqada kula socoto)", // nieuw, nalezen
    's.mychoice.1': "Si fiican ayaan gacmahayga ugu shaqeyn karaa.", // nieuw, nalezen
    's.mychoice.2': "Waxaan jeclahay inaan dadka la shaqeeyo.", // nieuw, nalezen
    's.mychoice.3': "Ma kula socon karaa maalin, si aan shaqada u arko?", // nieuw, nalezen
    'c.mychoice.q': "Maxaad ku fiican tahay?", // nieuw, nalezen
    'c.mychoice.a': "Waxaan ku fiicnahay daryeelka dadka. Guriga waxaan daryeelaa hooyaday.", // nieuw, nalezen
    'l.nextstep': "Entree kadib", // nieuw, nalezen
    'w.niveau2': "heerka 2 (heerka xiga ee mbo)", // nieuw, nalezen
    'w.startkwalificatie': "shahaadada aasaasiga ah (diblomo heerka 2 ee mbo ama ka sarreeya)", // nieuw, nalezen
    'w.bbl': "bbl (waxaad ka shaqeysaa shirkad oo dugsiga aadaa qiyaastii hal maalin toddobaadkii)", // nieuw, nalezen
    'w.doorstromen': "sii socod (heer ka sarreeya)", // nieuw, nalezen
    'w.aanmelden': "is-diiwaangelin (dugsi ama koorso)", // nieuw, nalezen
    'w.opendag': "maalinta furan (waad booqan kartaa dugsi)", // nieuw, nalezen
    's.nextstep.1': "Entree kadib waxaan rabaa inaan aado heerka 2.", // nieuw, nalezen
    's.nextstep.2': "Waxaan rabaa inaan isla mar shaqeeyo oo wax barto.", // nieuw, nalezen
    's.nextstep.3': "Goorma ayay tahay maalinta furan?", // nieuw, nalezen
    'c.nextstep.q': "Maxaad samaynaysaa Entree kadib?", // nieuw, nalezen
    'c.nextstep.a': "Waxaan rabaa inaan sameeyo bbl. Markaas waan shaqeeyaa oo wax baran.", // nieuw, nalezen
    'l.email': "U qorid shaqada", // nieuw, nalezen
    'w.mail': "iimaylka", // nieuw, nalezen
    'w.onderwerp': "mawduuca (ee iimayl)", // nieuw, nalezen
    'w.beste': "qaaliga (bilowga warqad ama iimayl)", // nieuw, nalezen
    'w.beleefd': "edeb leh", // nieuw, nalezen
    'w.nalezen': "dib u akhrin (si aad u hubiso ka hor intaadan dirin)", // nieuw, nalezen
    'w.versturen': "dirid", // nieuw, nalezen
    's.email.1': "Maxaan ku qoraa mawduuca?", // nieuw, nalezen
    's.email.2': "Iimaylkayga mar kale ayaan akhriyaa.", // nieuw, nalezen
    's.email.3': "Iimaylka berri ayaan dirayaa.", // nieuw, nalezen
    'c.email.q': "Ma dirtay iimaylka ku saabsan maalintaada fasaxa?", // nieuw, nalezen
    'c.email.a': "Weli ma dirin. Marka hore mar kale ayaan akhrinayaa.", // nieuw, nalezen
    'l.budget': "Lacagtaada bil kasta", // nieuw, nalezen
    'w.vastelasten': "kharashaadka joogtada ah (kirada, caymiska, taleefanka: bil kasta)", // nieuw, nalezen
    'w.sparen': "keydin (lacag)", // nieuw, nalezen
    'w.abonnement': "rukunka (bil kasta ayaad lacag u bixisaa)", // nieuw, nalezen
    'w.achterafbetalen': "hadhow bixin (hadda iibso, hadhow bixi)", // nieuw, nalezen
    'w.bedenktijd': "muddada fikirka (waqti aad go'aankaaga ku beddeli karto)", // nieuw, nalezen
    'w.garantie': "dammaanadda (waa inuu shaqeeyaa, ama waa laguu hagaajinayaa)", // nieuw, nalezen
    's.budget.1': "Marka hore waxaan bixiyaa kharashaadka joogtada ah.", // nieuw, nalezen
    's.budget.2': "Bil kasta waxaan keydiyaa wax yar.", // nieuw, nalezen
    's.budget.3': "Waxaan joojinayaa rukunkan.", // nieuw, nalezen
    'c.budget.q': "Taleefankaas hadda iibso oo hadhow bixi!", // nieuw, nalezen
    'c.budget.a': "Maya, mahadsanid. Hadhow bixintu sidoo kale waa deyn.", // nieuw, nalezen
    'l.healthy': "Caafimaad u leh shaqada", // nieuw, nalezen
    'w.slapen': "seexasho", // nieuw, nalezen
    'w.ontbijt': "quraacda", // nieuw, nalezen
    'w.bewegen': "dhaqdhaqaaq, firfircoonaan", // nieuw, nalezen
    'w.moe': "daallan", // nieuw, nalezen
    'w.drugs': "daroogada", // nieuw, nalezen
    'w.somber': "niyad jabsan (murugo muddo dheer)", // nieuw, nalezen
    's.healthy.1': "Maanta aad baan u daallanahay.", // nieuw, nalezen
    's.healthy.2': "Mar walba marka hore waan quraacdaa.", // nieuw, nalezen
    's.healthy.3': "Nasashada waxaan aadaa socod gaaban.", // nieuw, nalezen
    'c.healthy.q': "Ma rabtaa kiniin? Markaas waad soo jeedaysaa.", // nieuw, nalezen
    'c.healthy.a': "Maya, mahadsanid. Ma shaqeeyo anigoo maandooriye qaatay.", // nieuw, nalezen
    'c.workorder': "Marka hore akhri, kadib bilow", // nieuw, nalezen
    'c.workorder.b': "Ka hor intaadan bilaabin, akhri warqadda shaqada (werkbon) ama hawsha ku jirta app-ka. Hubi cinwaanka, hawsha iyo tirada alaabta. Wax aan caddayn ma jiraan? Weydii ka hor intaadan bilaabin, ha sugin bartamaha. Kadib diyaari qalabkaaga iyo agabkaaga. Taasi waqti ayay kuu keydisaa, khaladaad yarna waad samaysaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.workorder.p': "Warqadda shaqada waxaa ku qoran toban sanduuq. Taasi ma sax baa?", // nieuw, nalezen
    'c.workorder.s': "Warqaddaada shaqada waxaa ku qoran: rinji qolka 3. Saaxiibka shaqada ayaa yiri waa qolka 5. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.workorder.o1': "Weydii madaxaaga qolka saxda ah.", // nieuw, nalezen
    'c.workorder.o2': "Rinji qolka 3, maxaa yeelay warqadda shaqada ayaa sidaas ku qoran.", // nieuw, nalezen
    'c.workorder.o3': "Labada qolba rinji, markaas waad hubtaa.", // nieuw, nalezen
    'c.workorder.w': "Marka laba shay aysan is waafaqin, waad hubisaa ka hor intaadan bilaabin. Su'aal gaaban waqti ka yar ayay qaadataa marka loo eego shaqada oo dib loo sameeyo.", // nieuw, nalezen
    'c.handover': "Sheeg waxa dhammaaday, iyo waxa aan dhammaan", // nieuw, nalezen
    'c.handover.b': "Shaqadaadu ma dhammaato marka aad joojiso. Marka hore nadiifi meeshaada iyo qalabkaaga. Kadib qof weydii inuu hubiyo shaqadaada. U sheeg madaxaaga waxa dhammaaday iyo waxa aan dhammaan. Wax ma khaldameen, mise wax ma jabeen? Hadda sheeg, ha sugin berri. Ogeysiinta bixitaanku waa qayb ka mid ah shaqadaada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.handover.p': "Qolka afraad weli ma dhammaan. Albaabku waa xirnaa.", // nieuw, nalezen
    'c.handover.s': "Waxaad nadiifisay shan qol. Qolka 4 waa xirnaa. Shaqadaadu way dhammaanaysaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.handover.o1': "U sheeg madaxaaga: qolka 4 ma dhammaan.", // nieuw, nalezen
    'c.handover.o2': "Guriga aad: qolka 4 waa xirnaa, eed adiga kuma aha.", // nieuw, nalezen
    'c.handover.o3': "Liiska ku qor “wax walba waa dhammaadeen”.", // nieuw, nalezen
    'c.handover.w': "Madaxaaga ayaa qorsheeya shaqada. Marka uu ogaado in qolka 4 aan la dhammeyn, qof kale ayuu diri karaa. Markaas macmiil ma helo qol wasakh ah.", // nieuw, nalezen
    'c.workshop': "Indhaha, dhegaha iyo dabka", // nieuw, nalezen
    'c.workshop.b': "Shiididda, miinshaaridda iyo daloolinta waxay keenaan dhimbiil, jajab yar iyo buuq badan. Xiro muraayadaha badbaadada iyo ilaaliyaha maqalka, xitaa shaqo gaaban. Marka buuqu aad u badan yahay, loo-shaqeeyahaagu waa inuu ku siiyaa ilaaliyaha maqalka. Dhimbiishu dab ayay bilaabi kartaa. Alxanka, ama shiidid u dhow waxyaabo guban kara, waxaa jira xeerar dheeraad ah (heet werk): weydii ka hor intaadan bilaabin. Shaqadaada kadib, nadiifi jajabka birta. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.workshop.p': "Waxaan aadayaa inaan shiido. Aaway ilaaliyaha maqalku?", // nieuw, nalezen
    'c.workshop.s': "Waa inaad shiiddo gabal yar oo bir ah. Waxay qaadanaysaa hal daqiiqo. Muraayadahaaga badbaadadu waxay ku jiraan qolka kale. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.workshop.o1': "Marka hore soo qaado muraayadahaaga, xitaa hal daqiiqo.", // nieuw, nalezen
    'c.workshop.o2': "Ku shiid indhahaaga oo badh xiran, waa degdeg.", // nieuw, nalezen
    'c.workshop.o3': "Gacantaada kale indhahaaga hor dhig.", // nieuw, nalezen
    'c.workshop.w': "Dhimbiil ama jajab bir ah oo ishaada gala wuxuu dhaawici karaa ishaada weligeed. Taasi waxay ku dhici kartaa hal ilbiriqsi. Muraayadaha badbaadadu way caawiyaan, xitaa shaqo gaaban.", // nieuw, nalezen
    'c.power': "Koronto: weligaa si fudud ha u qaadan", // nieuw, nalezen
    'c.power.b': "Weligaa ha ka shaqeyn wax koronto ku jirto (onder spanning). Marka hore saaxiib shaqo oo tababaran ayaa ammaan ka dhiga: wuxuu damiyaa korontada oo hubiyaa. Kaliya dadka leh tababarka saxda ah ayaa samayn kara tan. Ma aragtaa fiilo ama fiish jaban? Ha isticmaalin, oo isla markiiba u sheeg madaxaaga. Ma hubtid in korontadu demsan tahay? Markaas way shidan tahay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.power.p': "Waxaan arkaa fiilo jaban. Yaa eegi kara?", // nieuw, nalezen
    'c.power.s': "Waa inaad laambad sudhato. Saaxiibka shaqada ayaa yiri: “Korontada waa la damiyey, waxaan u malaynayaa.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.power.o1': "Weydii saaxiib shaqo oo tababaran inuu hubiyo in korontadu demsan tahay.", // nieuw, nalezen
    'c.power.o2': "Bilow, laakiin xiro gacmo-gashi qaro weyn marka aad taabanayso fiilooyinka.", // nieuw, nalezen
    'c.power.o3': "Nalka shid oo dami si aad u hubiso in korontadu demsan tahay.", // nieuw, nalezen
    'c.power.w': "“Waxaan u malaynayaa” kuguma filna korontada. Koronto ku qabata way ku dili kartaa. Saaxiib shaqo oo tababaran ayaa hubiya in aysan koronto jirin, kadibna waad bilaabi kartaa.", // nieuw, nalezen
    'c.garage': "Ammaan baabuurka hoostiisa", // nieuw, nalezen
    'c.garage.b': "Weligaa ha gelin baabuur hoostiisa oo kaliya ku taagan jaag. Baabuurku waa inuu si adag ugu taagan yahay wiishka ama tiirarka. Saliid daadatay waxay dhulka ka dhigtaa mid siibasho leh: isla markiiba nadiifi. Saliidda duugga ah, baytariyada iyo alaabta nadiifinta waa qashin khatar ah. Waxay aadaan meel gaar ah, weligood qashinka caadiga ah ama biyo-mareenka ma aadaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.garage.p': "Dhulka saliid ayaa ku taal. Waan nadiifinayaa.", // nieuw, nalezen
    'c.garage.s': "Waa inaad eegto baabuur hoostiisa oo kaliya ku taagan jaag. Saaxiibka shaqada ayaa yiri: “Waa hagaag, dhaqso.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.garage.o1': "Sug wiishka ama tiirarka.", // nieuw, nalezen
    'c.garage.o2': "Si degdeg ah hoosta u gal, lugaha bannaanka.", // nieuw, nalezen
    'c.garage.o3': "Saaxiibka shaqada weydii inuu baabuurka qabto.", // nieuw, nalezen
    'c.garage.w': "Jaaggu wuu sibiibixan karaa. Baabuurku aad buu u culus yahay, hoostiisana si dhakhso ah ugama bixi kartid. Tiirarka ama wiishku baabuurka meeshiisa ayay ku hayaan.", // nieuw, nalezen
    'c.carjob': "Shaqo dheeraad ah? Marka hore weydii macmiilka", // nieuw, nalezen
    'c.carjob.b': "Ma heshaa dhibaatooyin ka badan waxa warqadda shaqada ku qoran? Ha iska hagaajin. Macmiilku waa inuu marka hore oggolaadaa shaqada dheeraadka ah iyo kharashka. Madaxaaga ama xafiiska adeegga ayaa wacaya macmiilka. Wadis tijaabo waxaa la sameeyaa oggolaansho keliya, iyo liisan darawalnimo oo ansax ah keliya. Qor waxa aad samaysay iyo qaybaha aad isticmaashay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.carjob.p': "Waxaan arkaa dhibaato kale. Yaa wacaya macmiilka?", // nieuw, nalezen
    'c.carjob.s': "Waxaad beddelaysaa saliidda baabuur. Bareegyada sidoo kale way xun yihiin. Waa inuu diyaar noqdaa saacad gudaheed. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.carjob.o1': "U sheeg madaxaaga, si uu u waco macmiilka.", // nieuw, nalezen
    'c.carjob.o2': "Bareegyada sidoo kale hagaaji, badbaado dartiis.", // nieuw, nalezen
    'c.carjob.o3': "Waxba ha oran: kuma qorna warqadda shaqada.", // nieuw, nalezen
    'c.carjob.w': "Macmiilka ayaa lacagta bixiya, sidaas darteed macmiilka ayaa go'aamiya. Oggolaanshihiisa la'aantiis, garaashku si fudud uma samayn karo shaqo dheeraad ah. Bareegyada xun waa khatar, sidaas darteed in qof loo sheego waa muhiim.", // nieuw, nalezen
    'c.placement': "Marka hore saxiix, kadib bilow", // nieuw, nalezen
    'c.placement.b': "Entree gudaheeda waxaad wax badan ku barataa shirkad: tababarkaaga shaqada (stage, ama bpv). Ka hor intaadan bilaabin, adiga, dugsiga iyo shirkaddu waxaad saxiixdaan heshiis: POK. Shirkadda, tababaraha goobta shaqada (praktijkopleider) ayaa ku caawiya. Dugsiga, hagaha tababarka (stagebegeleider) ayaa ku caawiya. Ma xanuunsan tahay? Wac shirkadda ka hor waqtiga aad bilaabayso, sidoo kale u sheeg dugsiga. Xeerarku way ku kala duwan yihiin dugsi kasta: weydii hagahaaga tababarka.", // nieuw, nalezen
    'c.placement.p': "Waxaan bilaabayaa kaliya marka heshiiska tababarka la saxiixo.", // nieuw, nalezen
    'c.placement.s': "Shirkaddu waxay kaa codsatay inaad berri bilowdo. POK-ga weli lama saxiixin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.placement.o1': "Weydii hagahaaga tababarka inuu marka hore diyaariyo POK-ga.", // nieuw, nalezen
    'c.placement.o2': "Berri bilow, oo POK-ga saxiix marka aad waqti hesho.", // nieuw, nalezen
    'c.placement.o3': "Bilow, laakiin dugsiga weli ha u sheegin.", // nieuw, nalezen
    'c.placement.w': "POK-gu wuxuu sheegaa waxa aad baranayso iyo cidda ku caawinaysa. POK la saxiixay la'aantiis, tababarkaagu laga yaabaa inuusan u tirsanin diblomaddaada. Sidaas darteed waad saxiixdaa ka hor intaadan bilaabin.", // nieuw, nalezen
    'c.review': "Weydii jawaab-celin, iyo tusaale", // nieuw, nalezen
    'c.review.b': "Tababarkaaga shaqada, dadku waxay kuu sheegaan waxa si fiican u socda iyo waxa ka fiicnaan kara: jawaab-celin. Taasi waa caadi, waxayna kaa caawisaa inaad wax barato. Ma fahmin? Weydii tusaale. Adiguna weydii jawaab-celin, tusaale ahaan toddobaadkii hal mar. Wax ma si dhab ah ugu khaldan yihiin tababarkaaga? Marka hore la hadal tababaraha goobta shaqada. Taasi ma caawin? Markaas u tag hagaha tababarka ee dugsiga.", // nieuw, nalezen
    'c.review.p': "Maxaa si fiican u socday, maxaase ka fiicnaan kara?", // nieuw, nalezen
    'c.review.s': "Tababarahaaga goobta shaqada ayaa yiri: “Waa inaad si taxaddar badan u shaqeysaa.” Ma garanaysid waxa uu ula jeedo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.review.o1': "Weydii tusaale waxa ay tahay inaad si kale u samayso.", // nieuw, nalezen
    'c.review.o2': "Haa dheh, oo rajee inaad adigu ogaato.", // nieuw, nalezen
    'c.review.o3': "Hadda kadib si aad u tartiib ah u shaqee, si aan waxba u khaldamin.", // nieuw, nalezen
    'c.review.w': "Tusaale leh, waad garanaysaa waxa aad beddeli lahayd. Weydiintu waxay muujinaysaa inaad rabto inaad wax barato. Tababarayaashu taas way jecel yihiin.", // nieuw, nalezen
    'c.council': "Yaa codeyn kara?", // nieuw, nalezen
    'c.council.b': "Holland waxaad ku doorataa cidda go'aamisa, adigoo codeynaya. Magaaladaada waxaa go'aamiya gemeenteraad. Tweede Kamer ayaa sameeya sharciyada dalka oo dhan. Haddii aad haysato dhalashada Holland, waxaad codeyn kartaa doorasho kasta, laga bilaabo 18 jir. Doorashada gemeenteraad dad ka badan ayaa codeyn kara. Dadka ka yimid waddan kale oo EU ah oo halkan deggan way codeyn karaan. Dadka ka yimid meel ka baxsan EU way codeyn karaan kadib 5 sano oo joogitaan sharci ah. Kaarka codeynta (stempas) waxaa kuu soo dira gemeente. La imow isaga iyo aqoonsigaaga. Ma hubtid inaad codeyn karto? Weydii gemeente.",
    'c.council.p': "Ma u codeyn karaa gemeenteraad?", // nieuw, nalezen
    'c.council.s': "Waxaad ka timid Marooko, waxaadna halkan si sharci ah u deggenayd lix sano, adigoon haysan dhalashada Holland. Maxaa run ah?", // nieuw, nalezen
    'c.council.o1': "Waxaad u codeyn kartaa gemeenteraad.", // nieuw, nalezen
    'c.council.o2': "Waxaad sidoo kale u codeyn kartaa Tweede Kamer.", // nieuw, nalezen
    'c.council.o3': "Baasaboor Holland la'aantiis ma codeyn kartid.", // nieuw, nalezen
    'c.council.w': "Kadib 5 sano oo joogitaan sharci ah, waxaad u codeyn kartaa gemeenteraad. Tweede Kamer, waxaad u baahan tahay dhalashada Holland.", // nieuw, nalezen
    'c.police': "Aqoonsigaaga iyo xuquuqdaada", // nieuw, nalezen
    'c.police.b': "Laga bilaabo 14 jir, waa inaad tusto aqoonsigaaga marka booliisku ku weydiiyo. Sidaas darteed mar walba wado. Ma heshay warqad, tusaale ahaan mid ka timid gemeente ama UWV? Kuma raacsanid go'aanka ku jira? Markaas waxaad qoraal ahaan u gudbin kartaa diidmo (bezwaar maken). Samee ka hor taariikhda warqadda ku qoran. Booliska iyo garsooraha waa inay qof walba si siman ula dhaqmaan. Ma lagu xiray? Waxaad codsan kartaa qareen. Juridisch Loket ayaa bixiya talo bilaash ah.",
    'c.police.p': "Kuma raacsani go'aankan. Waxaan gudbinayaa diidmo.", // nieuw, nalezen
    'c.police.s': "Waxaad warqad ka heshay gemeente. Kuma raacsanid go'aankooda. Warqaddu waxay leedahay waxaad haysataa lix toddobaad. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.police.o1': "Qor warqad diidmo ah, ka hor taariikhda.", // nieuw, nalezen
    'c.police.o2': "Hal mar wac, oo sug ilaa ay dib kuu soo wacaan.", // nieuw, nalezen
    'c.police.o3': "Sug: lix toddobaad kadib, iskiis ayuu u joogsanayaa.", // nieuw, nalezen
    'c.police.w': "Diidmada qoraal ahaan ayaad u gudbisaa, ka hor taariikhda warqadda ku qoran. Taariikhdaas kadib, badanaa waa goor dambe. Juridisch Loket ayaa kaa caawin kara inaad qorto.", // nieuw, nalezen
    'c.login': "Galitaankaagu adiga ayuu kuu gaar yahay", // nieuw, nalezen
    'c.login.b': "Erayga sirta ah iyo DigiD-gaagu adiga keliya ayay kuu yihiin. Qofna ha siin, xitaa loo-shaqeeyahaaga ama saaxiibka shaqada. Kombiyuutar la wadaago, mar walba ka bax marka aad dhammeyso. Daqiiqad ma iska tagaysaa? Qufl shaashaddaada. Ma illowday erayga sirta ah? Waaxda IT-ga (ICT-afdeling) ka weydii mid cusub. Xeerarka kombiyuutarku way ku kala duwan yihiin shirkad kasta: weydii waaxda IT-ga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.login.p': "Daqiiqad ayaan iska tagayaa. Waxaan quflayaa shaashaddayda.", // nieuw, nalezen
    'c.login.s': "Madaxaaga ayaa ku weydiiyey DigiD-gaaga iyo erayga sirta ah, si uu dhaqso ugu diyaariyo waraaqahaaga. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.login.o1': "Maya dheh, oo adigu gal inta uu ku caawinayo.", // nieuw, nalezen
    'c.login.o2': "Mar keliya sii, maxaa yeelay waa madaxaaga.", // nieuw, nalezen
    'c.login.o3': "Warqad ku qor, si uu hadhow u isticmaalo.", // nieuw, nalezen
    'c.login.w': "Qof haysta DigiD-gaaga ayaa arki kara oo beddeli kara canshuurtaada, gargaarka dowladda iyo waraaqahaaga caafimaadka. Adiga keliya ayuu kuu yahay. Adigu waad geli kartaa oo qof ayaad u oggolaan kartaa inuu ku caawiyo.", // nieuw, nalezen
    'c.phish': "Degdeg, oo badhan leh? Ha gujin", // nieuw, nalezen
    'c.phish.b': "Iimayl been ah (phishing) badanaa wuxuu u eg yahay mid run ah. Wuxuu rabaa inaad si degdeg ah wax u samayso: “Akoonkaaga maanta ayaa la xirayaa!” Hubi cidda soo dirtay. Ha gujin link, hana furin lifaaq aadan filayn. Adigu toos u aad website-ka ama app-ka dhabta ah. Ma gujisay si kastaba? Isla markiiba beddel erayga sirta ah, oo wac waaxda IT-ga. Taasi ceeb ma aha: marka ay goor hore ogaadaan, ayaa fiican. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.phish.p': "Waxaan gujiyey link shaki leh.", // nieuw, nalezen
    'c.phish.s': "Waxaad gujisay link ku jira iimayl, waxaadna qortay erayga sirta ah. Kadib waxaad aragtay in iimaylku been ahaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.phish.o1': "Beddel erayga sirta ah, oo wac waaxda IT-ga.", // nieuw, nalezen
    'c.phish.o2': "Tirtir iimaylka, si aan qof kale u gujin.", // nieuw, nalezen
    'c.phish.o3': "Sug maalin si aad u aragto in wax khaldamaan.", // nieuw, nalezen
    'c.phish.w': "Qof haysta erayga sirta ahaaga ayaa geli kara nidaamyada shaqadaada. Marka aad si dhakhso ah u beddesho oo aad u sheegto waaxda IT-ga, waqtigeeda ayay joojin karaan.", // nieuw, nalezen
    'c.mychoice': "Awoodahaaga ayaa muhiim ah", // nieuw, nalezen
    'c.mychoice.b': "Maxaad ku fiican tahay? Ka fikir shaqada, dugsiga iyo guriga. Daryeelka qoyska, shaqo dhinaca ah ama shaqo tabaruc ah sidoo kale waa la tiriyaa. Maxaad jeceshahay, maxaadse aadan jeclayn? Ma hubtid shaqada kugu habboon? Weydii inaad maalin qof shaqada kula socoto (meeloopdag). Hagahaaga dugsiga ayaa kaa caawin kara inaad doorato.", // nieuw, nalezen
    'c.mychoice.p': "Si fiican ayaan dadka ula dhaqmaa. Guriga wax badan ayaan ka caawiyaa.", // nieuw, nalezen
    'c.mychoice.s': "Dugsiga waxay ku weydiinayaan: “Maxaad ku fiican tahay?” Weligaa shaqo mushahar leh ma aadan qaban. Maxaad leedahay?", // nieuw, nalezen
    'c.mychoice.o1': "Waxa aad si fiican u samayso guriga, sida daryeelka dadka kale.", // nieuw, nalezen
    'c.mychoice.o2': "Inaadan weli garanayn, maxaa yeelay weligaa shaqo ma aadan qaban.", // nieuw, nalezen
    'c.mychoice.o3': "Inaad qaban karto shaqo kasta, dhammaanteed.", // nieuw, nalezen
    'c.mychoice.w': "Xirfadaha guriga sidoo kale waa la tiriyaa. Daryeelka, qorsheynta iyo caawinta waa xirfado ay loo-shaqeeyayaashu u baahan yihiin. Sheeg waxa aad samaysay, adigoo tusaale bixinaya.", // nieuw, nalezen
    'c.nextstep': "Entree kadib: heerka 2 ama shaqo", // nieuw, nalezen
    'c.nextstep.b': "Haddii aad haysato diblomada Entree, waxaad u gudbi kartaa heerka 2 ee mbo. Diblomo heerka 2 ama ka sarreeya waa shahaado aasaasi ah (startkwalificatie). Waxay kaa caawinaysaa inaad shaqo hesho oo aad sii haysato. Marka aad qaadato bbl, waxaad ka shaqeysaa shirkad oo dugsiga aadaa qiyaastii hal maalin toddobaadkii. Taas waxaad ugu baahan tahay shaqo ama meel shaqo-iyo-waxbarasho ah (leerwerkbaan). U tag maalin furan, oo la hadal hagahaaga dugsiga.", // nieuw, nalezen
    'c.nextstep.p': "Entree kadib ma aadi karaa heerka 2?", // nieuw, nalezen
    'c.nextstep.s': "Waxaad haysataa diblomadaada Entree. Shirkad ayaa ku siinaysa shaqo aan tababar lahayn. Sidoo kale waxaad rabtaa inaad sii barato. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.nextstep.o1': "Weydii shirkadda in meel bbl ah ay suurtagal tahay.", // nieuw, nalezen
    'c.nextstep.o2': "Qaado shaqada, oo waxbarashada gebi ahaanba jooji.", // nieuw, nalezen
    'c.nextstep.o3': "Guriga joog ilaa dugsi ku soo waco.", // nieuw, nalezen
    'c.nextstep.w': "Marka aad qaadato bbl, waxaad isla mar shaqeysaa oo wax baranaysaa. Lacag ayaad kasbanaysaa, waxaadna helaysaa diblomo heerka 2. Shirkado badan ayaa tan jecel.", // nieuw, nalezen
    'c.email': "Iimayl gaaban: yaa, maxaa, goorma", // nieuw, nalezen
    'c.email.b': "Iimaylka shaqada loo diro waa gaaban yahay oo edeb leh. Ku bilow salaan, sida “Beste Karin,”. Kadib sheeg waxa aad rabto, iyo goorta. Ku dhammee salaan iyo magacaaga oo dhammaystiran. Qor mawduuc gaaban, sida “Vrij op vrijdag”. Iimaylkaaga mar kale akhri ka hor intaadan dirin.", // nieuw, nalezen
    'c.email.p': "Karin qaaliga ah, Jimcaha ma fasax qaadan karaa? Salaan, Ali Haddad", // nieuw, nalezen
    'c.email.s': "Waxaad rabtaa maalin fasax ah Jimcaha soo socda. Iimaylkee madaxaaga loo diro ayaa ugu fiican?", // nieuw, nalezen
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen
    'c.email.o2': "“Vrijdag ben ik er niet.” (salaan iyo magacaaga la'aantood).", // nieuw, nalezen
    'c.email.o3': "Iimayl dheer oo ku saabsan toddobaadkaaga, su'aashuna dhammaadka ku jirto.", // nieuw, nalezen
    'c.email.w': "Iimayl wanaagsan wuxuu leeyahay salaan, hal su'aal oo cad iyo magacaaga. Markaas madaxaagu si dhakhso ah ayuu u jawaabi karaa.", // nieuw, nalezen
    'c.budget': "Marka hore kharashaadka joogtada ah", // nieuw, nalezen
    'c.budget.b': "Marka aad hesho mushaharkaaga, marka hore bixi kharashaadka joogtada ah: kirada, caymiska iyo taleefankaaga. Isku day inaad bil kasta keydiso lacag yar, xitaa 10 euro. Hadda iibso, hadhow bixi sidoo kale waa deyn. Ma wax baad online ka iibsatay? Markaas badanaa waad beddeli kartaa go'aankaaga 14 maalmood gudahood. Hay rasiidka: waxaad u baahan tahay dammaanadda.", // nieuw, nalezen
    'c.budget.p': "Waxaan door bidayaa inaan hadda bixiyo. Markaas deyn ma lihi.", // nieuw, nalezen
    'c.budget.s': "Maanta ayaad helaysaa mushaharkaaga. Waxaad rabtaa kabo cusub, kiradaaduna weli lama bixin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.budget.o1': "Marka hore bixi kirada, kadib eeg waxa hadhay.", // nieuw, nalezen
    'c.budget.o2': "Iibso kabaha, oo kirada hadhow bixi.", // nieuw, nalezen
    'c.budget.o3': "Kabaha ku iibso hadda iibso, hadhow bixi.", // nieuw, nalezen
    'c.budget.w': "Kirada, caymiska iyo taleefankaagu bil kasta way soo noqdaan. Marka aad kuwaas marka hore bixiso, waad ogtahay lacagta hadhay. Markaas deyn kuma dhacdid.", // nieuw, nalezen
    'c.healthy': "Hurdo, cunto iyo daroogo la'aan", // nieuw, nalezen
    'c.healthy.b': "Si fiican oo ammaan badan ayaad u shaqeysaa marka aad seexato hurdo ku filan, xitaa shaqo goor dambe dhammaata kadib. Quraac cun, oo maalintii biyo cab. Nasashadaada dhaqdhaqaaq, tusaale ahaan socod gaaban. Ku shaqeynta adigoo khamri ama daroogo qaatay waa khatar, loo-shaqeeyayaasha badankoodna way mamnuucaan. Ma muddo dheer ayaad niyad jab dareemaysaa, mise ma joojin kartid cabbitaanka ama isticmaalka? La hadal dhakhtarkaaga qoyska (huisarts). Way ku caawin karaan, sirna way kuu hayaan.", // nieuw, nalezen
    'c.healthy.p': "Muddo dheer ayaan niyad jabsanaa. Ma qabsan karaa ballan?", // nieuw, nalezen
    'c.healthy.s': "Caawa waxaad leedahay shaqo habeen. Saaxiibka shaqada ayaa ku siinaya kiniin si aad u soo jeeddo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.healthy.o1': "Maya dheh, oo seexo dhowr saacadood ka hor shaqadaada.", // nieuw, nalezen
    'c.healthy.o2': "Qaado badh kiniin, taasi khatar ma aha.", // nieuw, nalezen
    'c.healthy.o3': "Qaado, laakiin shaqada qofna ha u sheegin.", // nieuw, nalezen
    'c.healthy.w': "Kiniinada saaxiibka shaqada ka yimaada waxay noqon karaan daroogo. Way ku xanuunsiin karaan, ama waxay kaa dhigi karaan inaad khaladaad ka samayso shaqada. Hurdadu waa habka ammaanka ah ee lagu soo jeedo.", // nieuw, nalezen
    'u.sick': "Jirada", // nieuw, nalezen
    'l.food': "Ka shaqeynta cuntada", // nieuw, nalezen
    'w.mes': "mindida", // nieuw, nalezen
    'w.snijhandschoen': "gacmo-gashiga ka hortagga jarista (gacmo-gashi ka ilaaliya goynta)", // nieuw, nalezen
    'w.vriescel': "qolka qaboojiyaha (qol aad u qabow)", // nieuw, nalezen
    'w.sieraden': "dahabka iyo qurxinta (faraanti, saacad, hilqado)", // nieuw, nalezen
    'w.pleister': "balaastarka (nabar yar loogu talagalay)", // nieuw, nalezen
    'w.vlees': "hilibka", // nieuw, nalezen
    's.food.1': "Waxaan iska siibayaa dahabkayga.", // nieuw, nalezen
    's.food.2': "Aaway gacmo-gashiyada ka hortagga jarista?", // nieuw, nalezen
    's.food.3': "Qolka qaboojiyaha waxaan ku xirtaa jaakad diirran.", // nieuw, nalezen
    'c.food.q': "Maxaynu hadda u nadiifinaynaa suunka shaqada?", // nieuw, nalezen
    'c.food.a': "Waxaa xiga alaab aan lows ku jirin.", // nieuw, nalezen
    'c.food': "Gacmo nadiif ah, cunto ammaan ah", // nieuw, nalezen
    'c.food.b': "Ka shaqeynta cuntada waxay leedahay xeerar nadaafadeed oo adag: shabag timaha, dhar shaqo oo nadiif ah, gacmo la dhaqay iyo dahab la'aan. Xeerarkani qof walba waa isku mid. Kuma saabsana adiga: waxay cuntada ammaan uga dhigaan dadka cuna. Marka aad mindi isticmaalayso, mar walba xiro gacmo-gashigaaga ka hortagga jarista. Qol qabow ama qolka qaboojiyaha, xiro dharka diirran ee lagu siiyo, oo nasashadaada ku kululee. Ma xanuunsan tahay, mise nabar ayaa gacantaada ku yaal? Sheeg ka hor intaadan bilaabin. Markaas waxaad heli kartaa balaastar gaar ah, ama shaqo kale muddo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.food.p': "Gacantayda nabar yar ayaa ku yaal. Ma heli karaa balaastar?", // nieuw, nalezen
    'c.food.s': "Guriga ayaad farta wax yar ka jartay. Maanta waxaad ka shaqeynaysaa hilib. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.food.o1': "U sheeg madaxaaga, oo weydii balaastar.", // nieuw, nalezen
    'c.food.o2': "Waxba ha oran: waa jarid yar uun.", // nieuw, nalezen
    'c.food.o3': "Gacmo-gashi dul xiro, si aan qofna u arag.", // nieuw, nalezen
    'c.food.w': "Nabar yar wuxuu jeermis gelin karaa cuntada. Marka aad sheegto, waxaad heli kartaa balaastar gaar ah ama shaqo kale muddo. Sheegiddiisu waa caadi: qofna kuguma eedeeyo.", // nieuw, nalezen
    'u.delivery': "Gaadiid iyo gaarsiin", // nieuw, nalezen
    'l.parcel': "Gaarsiinta baakadaha", // nieuw, nalezen
    'w.pakket': "baakadda", // nieuw, nalezen
    'w.bestelbus': "baabuurka gaarsiinta", // nieuw, nalezen
    'w.bezorgen': "gaarsiin (u keen macmiilka)", // nieuw, nalezen
    'w.inladen': "rarid (alaabta baabuurka geli)", // nieuw, nalezen
    'w.aanbellen': "riixid gambaleelka albaabka", // nieuw, nalezen
    'w.bewijs': "caddeynta (wax muujinaya waxa dhacay)", // nieuw, nalezen
    's.parcel.1': "Baakad kasta waan iskaan gareeyaa.", // nieuw, nalezen
    's.parcel.2': "Macmiilku guriga ma joogo.", // nieuw, nalezen
    's.parcel.3': "Ma ii qaadan lahayd baakad derisyada loogu talagalay?", // nieuw, nalezen
    'c.parcel.q': "Baakaddani ma aniga ayay ii socotaa?", // nieuw, nalezen
    'c.parcel.a': "Haa. Fadlan halkan ma saxiixi lahayd?", // nieuw, nalezen
    'l.road': "Ammaan iyo cadaalad waddada", // nieuw, nalezen
    'w.rijden': "wadid (baabuur)", // nieuw, nalezen
    'w.zwaar': "culus", // nieuw, nalezen
    'w.steekwagen': "gaariga gacanta (gaari loogu talagalay sanduuqyada culus)", // nieuw, nalezen
    'w.route': "jidka (sida aad u wado)", // nieuw, nalezen
    'w.loondienst': "shaqaale mushahar qaata (waxaad u shaqeysaa madax oo mushahar ayaad qaadataa)", // nieuw, nalezen
    'w.bepalen': "go'aamin (sheeg sida loo sameeyo)", // nieuw, nalezen
    's.road.1': "Baakaddani aad bay u culus tahay. Waxaan soo qaadanayaa gaariga gacanta.", // nieuw, nalezen
    's.road.2': "Waa siibasho. Si tartiib ah ayaan u wadayaa.", // nieuw, nalezen
    's.road.3': "Yaa go'aamiya jidkayga iyo waqtiyadayda?", // nieuw, nalezen
    'c.road.q': "Maanta ma samayn kartaa hal safar oo kale?", // nieuw, nalezen
    'c.road.a': "Maya, markaas waqti uma haysto nasashadayda.", // nieuw, nalezen
    'c.parcel': "Guriga ma joogo, ama baakad jaban", // nieuw, nalezen
    'c.parcel.b': "Macmiilku guriga ma joogo? Raac xeerarka shirkaddaada: isku day derisyada, ama baakadda dib u qaado. Ha iska dhigin albaabka hortiisa, ilaa macmiilku sidaas codsaday mooyee. Baakad ma jaban tahay ama ma qoyan tahay? Ha u gaarsiin sidii wax khaldan aysan jirin. Sawir ka qaad caddeyn ahaan, oo ku sheeg iskaanerka ama app-ka. Daacadnimada ku saabsan dhibaato mar walba way ka fiican tahay qarinteeda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.parcel.p': "Baakaddani waa jaban tahay. Waa kan sawir.", // nieuw, nalezen
    'c.parcel.s': "Macmiilku guriga ma joogo, derisyaduna sidoo kale ma joogaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.parcel.o1': "Iskaan garee “guriga ma joogo”, oo dib u celi.", // nieuw, nalezen
    'c.parcel.o2': "U iskaan garee sidii la gaarsiiyey, oo albaabka ag dhig.", // nieuw, nalezen
    'c.parcel.o3': "Qari qashin-qubka gadaashiisa, si aan qofna u arag.", // nieuw, nalezen
    'c.parcel.w': "Baakad loo iskaan gareeyey inay gaartay waa inay runtii macmiilka gacantiisa ku jirtaa. Marka aad iskaan garayso waxa runtii dhacay, macmiilku hadhow ayuu heli karaa baakadda, qofna uma malaynayo inaad lumisay.", // nieuw, nalezen
    'c.road': "Ammaan waddada, iyo shaqo cadaalad ah", // nieuw, nalezen
    'c.road.b': "Weligaa taleefankaaga gacanta ha ku qaban adigoo wadaya: taasi waa mamnuuc. Navigeshanka u isticmaal haye taleefan. Qaado nasashooyinkaaga, xitaa maalin mashquul ah. Baakad culus? Isticmaal gaariga gacanta, ama wada qaada. Baraf ama jid barafoobay? Si tartiib ah u wad: daahitaanku wuu ka fiican yahay shil. Shirkadaha qaar waxay yiraahdaan waxaad u shaqeysaa sidii qof iskiis u shaqeysta (zelfstandig). Laakiin yaa go'aamiya saacadahaaga, jidkaaga iyo dharkaaga? Haddii shirkaddu go'aamiso waxaas oo dhan, waxaa laga yaabaa inaad runtii tahay shaqaale mushahar qaata (in loondienst). Markaas badanaa xuquuq badan ayaad leedahay, sida mushahar marka aad xanuunsan tahay. Wax badan oo arrintan ku saabsan waxaa ku jira casharka “Waraaqo, is-dhexgal iyo shaqadaada”. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.road.p': "Hadda nasasho ayaan qaadanayaa. Kadib ayaan sii wadayaa.", // nieuw, nalezen
    'c.road.s': "Shirkaddu waxay kugu magacawday qof iskiis u shaqeysta. Laakiin iyada ayaa go'aamisa saacadahaaga, jidkaaga iyo dharkaaga. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.road.o1': "Talo weydii: waxaa laga yaabaa inaad tahay shaqaale.", // nieuw, nalezen
    'c.road.o2': "Waxba: qandaraasku wuxuu leeyahay iskiis u shaqeyste, sidaas ayayna tahay.", // nieuw, nalezen
    'c.road.o3': "Saacado badan shaqee, si aad u kasbato isla lacagtii.", // nieuw, nalezen
    'c.road.w': "Waxa muhiimka ah waa sida aad runtii u shaqeyso, ma aha kaliya erayga qandaraaska ku qoran. Haddii shirkaddu go'aamiso sida, goorta iyo meesha aad ka shaqeyso, badanaa waxaad tahay shaqaale. Markaas xuquuq badan ayaad leedahay.", // nieuw, nalezen
    'l.feelwell': "Ku dareemid fiicnaan shaqada", // nieuw, nalezen
    'w.werkdruk': "cadaadiska shaqada (shaqo badan oo waqti yar ah)", // nieuw, nalezen
    'w.wakkerliggen': "soo jeedid sariirta (ma seexan kartid)", // nieuw, nalezen
    'w.ploegendienst': "shaqada wareegga (shaqo subax, galab iyo habeen oo is-beddelaya)", // nieuw, nalezen
    'w.heimwee': "xiisaha guriga (waxaad u xiisooneysaa dalkaaga)", // nieuw, nalezen
    'w.familie': "qoyska", // nieuw, nalezen
    'w.alleen': "keli", // nieuw, nalezen
    's.feelwell.1': "Si xun ayaan u seexdaa shaqada wareegga darteed.", // nieuw, nalezen
    's.feelwell.2': "Aad bay u badan tahay. Keligay ma qaban karo.", // nieuw, nalezen
    's.feelwell.3': "Xiisaha guriga ayaa i haya. Qoyskaygu way fog yihiin.", // nieuw, nalezen
    'c.feelwell.q': "Ma nabad baad tahay?", // nieuw, nalezen
    'c.feelwell.a': "Aad uma fiicni. Badanaa habeenkii waan soo jeedaa.", // nieuw, nalezen
    'c.feelwell': "Aad u badan? Keligaa uma baahnid inaad qabato", // nieuw, nalezen
    'c.feelwell.b': "Qof walba mararka qaarkood wuxuu dareemaa daal, walwal ama murugo. Shaqo badan (werkdruk), hurdo xun oo shaqada wareegga ka timaada ama xiisaha qoyskaaga ayaa culeys ku keeni kara. Keligaa uma baahnid inaad qaado, oo inaad tiraahdo “aad bay u badan tahay” daciifnimo ma aha. La hadal qof aad aaminto. Tusaale ahaan madaxaaga, dhakhtarka shirkadda (bedrijfsarts) ama dhakhtarkaaga qoyska (huisarts). Ama la-taliyaha sirta (vertrouwenspersoon), haddii shirkaddaadu leedahay mid. Adiguna waxaad codsan kartaa wadahadal dhakhtarka shirkadda. Dhakhaatiirtu uma sheegaan madaxaaga waxa aad sheegtay. Ma ka fikirtaa inaad naftaada disho, mise qof ayaad u welwelsan tahay? Wac 113 (bilaash, habeen iyo maalin), ama ku sheekayso 113.nl.",
    'c.feelwell.p': "Aad uma fiicni. Ma kula hadli karaa daqiiqad?", // nieuw, nalezen
    'c.feelwell.s': "Toddobaadyo ayaad si xun u seexanaysay, shaqaduna aad bay u badan tahay. Aad baad u daallan tahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.feelwell.o1': "U sheeg madaxaaga ama dhakhtarka shirkadda.", // nieuw, nalezen
    'c.feelwell.o2': "Waxba ha oran, oo si adag oo dhakhso ah u shaqee.", // nieuw, nalezen
    'c.feelwell.o3': "Guriga joog, oo qofna ha u sheegin sababta.", // nieuw, nalezen
    'c.feelwell.w': "Inaad goor hore sheegto daciifnimo ma aha. Markaas waxaad wada raadin kartaan xal, tusaale ahaan wareegyo shaqo oo kale. Keligaa uma baahnid inaad qabato.", // nieuw, nalezen
    'l.backtowork': "Ku noqoshada shaqada jirro kadib", // nieuw, nalezen
    'w.opbouwen': "kor u dhisid (si tartiib ah, tallaabo tallaabo)", // nieuw, nalezen
    'w.halvedagen': "maalmo badh ah (waxaad shaqeysaa qayb ka mid ah maalinta)", // nieuw, nalezen
    'w.lichtwerk': "shaqo fudud (aan culus ahayn)", // nieuw, nalezen
    'w.zwaarwerk': "shaqo culus", // nieuw, nalezen
    'w.herstellen': "bogsasho, mar kale caafimaad helid", // nieuw, nalezen
    'w.welkomterug': "ku soo dhowow mar kale", // nieuw, nalezen
    's.backtowork.1': "Waxaan ku bilaabayaa maalmo badh ah.", // nieuw, nalezen
    's.backtowork.2': "Shaqo fudud hadda waan qaban karaa. Shaqo culus weli maya.", // nieuw, nalezen
    's.backtowork.3': "Dhakhtarka shirkadda ayaa yiri: si tartiib ah u kordhi.", // nieuw, nalezen
    'c.backtowork.q': "Ku soo dhowow mar kale! Ma ka fiican tahay?", // nieuw, nalezen
    'c.backtowork.a': "Haa, way ka fiican tahay. Si tartiib ah ayaan u qaadanayaa.", // nieuw, nalezen
    'c.backtowork': "Ku soo noqosho tallaabo tallaabo", // nieuw, nalezen
    'c.backtowork.b': "Ma bogsatay? U sheeg loo-shaqeeyahaaga inaad mar kale shaqeyn karto (betermelden). Jirro dheer kadib, badanaa waxaad bilowdaa tallaabo tallaabo: marka hore saacado yar, ama shaqo fudud. Dhakhtarka shirkadda (bedrijfsarts) ayaa ku siiya talo ku saabsan waxa aad qaban karto. Muddo dheer ma xanuunsanayd? Markaas adiga iyo loo-shaqeeyahaagu waxaad wada samaysaan qorshe ku soo noqoshadaada. Taasi waa sharciga (Wet verbetering poortwachter). Si cad u sheeg waxa aad qaban karto, iyo waxa aadan weli qaban karin. Uma baahnid inaad saaxiibada shaqada u sheegto jirrada aad qabtay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.backtowork.p': "Tan hadda waan qaban karaa. Taas weli ma qaban karo.", // nieuw, nalezen
    'c.backtowork.s': "Saddex toddobaad ayaad xanuunsanayd. Maalintaada ugu horreysa ee aad soo noqoto, madaxaaga ayaa kaa codsaday inaad qaaddo sanduuqyo culus. Dhakhtarka shirkadda ayaa yiri: hadda shaqo fudud oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.backtowork.o1': "Si deggan u sheeg inaad hadda qaban karto shaqo fudud, iyo waxa aadan weli qaban karin.", // nieuw, nalezen
    'c.backtowork.o2': "Si kastaba sanduuqyada qaad: ma rabtid inaad dhib keento.", // nieuw, nalezen
    'c.backtowork.o3': "Guriga aad adigoon waxba oran.", // nieuw, nalezen
    'c.backtowork.w': "Madaxaagu wuxuu rabaa inaad soo noqoto, adigoo caafimaad qaba. Marka aad si cad u sheegto waxa aad qaban karto, wuxuu qorsheyn karaa shaqada. Inaad goor hore wax badan qabato waxay mar kale ku xanuunsiin kartaa.", // nieuw, nalezen
  },
};

export default t;

