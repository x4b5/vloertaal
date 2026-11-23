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
    'u.contract': "Shaqada iyo qandaraasyada", // nieuw, nalezen // nagelezen AI 22 nov
    'l.findwork': "Helitaanka shaqo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vacature': "shaqada bannaan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitzendbureau': "xafiiska shaqo-qorista", // nieuw, nalezen // nagelezen AI 22 nov
    'w.solliciteren': "shaqo codsasho", // nieuw, nalezen // nagelezen AI 22 nov
    'w.contract': "qandaraaska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.tekenen': "saxeexid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.tijdelijk': "ku-meel-gaar", // nieuw, nalezen // nagelezen AI 22 nov
    's.findwork.1': "Waxaan rabaa inaan shaqo codsado.", // nieuw, nalezen // nagelezen AI 22 nov
    's.findwork.2': "Qandaraasku ma ku-meel-gaar baa mise waa joogto?", // nieuw, nalezen // nagelezen AI 22 nov
    's.findwork.3': "Ma heli karaa nuqul qandaraaska ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.q': "Shaqo noocee ah ayaad raadinaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.a': "Waxaan raadinayaa shaqo bakhaar.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.contract': "Qandaraaskaaga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkgever': "loo-shaqeeyaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uren': "saacadaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.oproepkracht': "shaqaalaha loo yeero markii loo baahdo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.proeftijd': "muddada tijaabada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opzegtermijn': "muddada ogeysiiska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.cao': "heshiiska wadajirka ah ee shaqada (cao)", // nieuw, nalezen // nagelezen AI 22 nov
    's.contract.1': "Toddobaadkii immisa saacadood ayaan shaqeeyaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.contract.2': "Muddada tijaabadu waa intee le'eg tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    's.contract.3': "Heshiiskee wadajirka ah ayaa i khuseeya?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.q': "Berri ma iman kartaa shaqada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.a': "Haa, saacaddee ayay tahay inaan halkaas joogo?", // nieuw, nalezen // nagelezen AI 22 nov
    'l.agency': "Shaqo adigoo maraya xafiis shaqo-qoris", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitzendkracht': "shaqaalaha xafiiska shaqo-qorista", // nieuw, nalezen // nagelezen AI 22 nov
    'w.intercedent': "qofka xiriirka ee xafiiska shaqo-qorista", // nieuw, nalezen // nagelezen AI 22 nov
    'w.urenbriefje': "warqadda saacadaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opdracht': "hawsha (shaqada shirkad gaar ah)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.verlengen': "kordhin (dheereyn)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitbetalen': "bixin (lacagta)", // nieuw, nalezen // nagelezen AI 22 nov
    's.agency.1': "Waxaan u shaqeeyaa anigoo maraya xafiis shaqo-qoris.", // nieuw, nalezen // nagelezen AI 22 nov
    's.agency.2': "Hawshayda ma la kordhinayaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.agency.3': "Goorma ayay hawshaydu dhammaanaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.q': "Saacadahaaga ma soo gudbisay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.a': "Haa, shalay, app-ka ayaan ku qoray.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'u.pay': "Mushaharka", // nieuw, nalezen // nagelezen AI 22 nov
    'l.payslip': "Warqadda mushaharkaaga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.loon': "mushaharka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bruto': "guud (ka hor canshuurta)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.netto': "saafi (waxa aad gacanta ku hesho)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.loonstrook': "warqadda mushaharka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.belasting': "canshuurta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uurloon': "mushaharka saacaddii", // nieuw, nalezen // nagelezen AI 22 nov
    's.payslip.1': "Saacaddii mushaharkaygu waa immisa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.payslip.2': "Warqadda mushaharkaygu sax ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    's.payslip.3': "Mushaharka saafiga ahi wuu ka yar yahay kan guud.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.q': "Ma heshay warqadda mushaharkaaga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.a': "Haa, laakiin saacado qaar ayaa ka maqan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.extra': "Lacag dheeraad ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vakantiegeld': "lacagta fasaxa", // nieuw, nalezen // nagelezen AI 22 nov
    'w.overuren': "saacadaha dheeraadka ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.toeslag': "lacagta dheeraadka ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.minimumloon': "mushaharka ugu yar", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bankrekening': "koontada bangiga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.betalen': "bixin", // nieuw, nalezen // nagelezen AI 22 nov
    's.extra.1': "Shaqada habeenka lacag dheeraad ah ma u helayaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.extra.2': "Saacadaha dheeraadka ah lacagtooda ma la bixiyaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.extra.3': "Mushaharkaygu wuxuu galaa koontadayda bangiga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.q': "Maanta ma sii joogi kartaa laba saacadood oo dheeraad ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.a': "Haa, ma qori doontaa saacadaha dheeraadka ah?", // nieuw, nalezen // nagelezen AI 22 nov
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
    'u.rights': "Xeerarka iyo xuquuqda", // nieuw, nalezen // nagelezen AI 22 nov
    'l.health': "Shaqo ammaan ah oo caafimaad leh", // nieuw, nalezen // nagelezen AI 22 nov
    'w.arbowet': "sharciga caafimaadka iyo badbaadada shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.veilig': "ammaan ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werktijden': "saacadaha shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.rust': "nasashada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.beschermingsmiddelen': "qalabka ilaalinta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.arbeidsinspectie': "Hay'adda Kormeerka Shaqada (Arbeidsinspectie)", // nieuw, nalezen // nagelezen AI 22 nov
    's.health.1': "Waxaan xaq u leeyahay nasasho.", // nieuw, nalezen // nagelezen AI 22 nov
    's.health.2': "Shaqadu waa inay ammaan ahaataa.", // nieuw, nalezen // nagelezen AI 22 nov
    's.health.3': "Waxaan u sheegayaa Hay'adda Kormeerka Shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.q': "Hadda waa inaad nasato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.a': "Hagaag, wax yar ayaan fadhiisanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rights': "Xuquuqdaada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.recht': "xaqa", // nieuw, nalezen // nagelezen AI 22 nov
    'w.discriminatie': "takoorka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vakbond': "ururka shaqaalaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.juridischloket': "Juridisch Loket (xafiiska caawimada sharciga ee bilaashka ah)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.klacht': "cabashada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontslag': "shaqo ka eryidda", // nieuw, nalezen // nagelezen AI 22 nov
    's.rights.1': "Waxaan rabaa inaan cabasho gudbiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    's.rights.2': "Waxaan xubin ka ahay ururka shaqaalaha.", // nieuw, nalezen // nagelezen AI 22 nov
    's.rights.3': "Tani waa takoor.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.q': "Halkan u saxeex shaqo ka eryiddaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.a': "Maya, weli ma saxeexayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.mustmay': "Ma khasab baa, mise waad dooran kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': "waa in (la sameeyo), khasab", // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': "khasab ma aha, looma baahna", // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': "loo baahan yahay, lagama maarmaan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': "ikhtiyaari, adiga ayaa dooranaya", // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': "doorashada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': "xeerka", // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': "Ma khasab baa inaan tan saxiixo?", // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': "Maya, uma baahnid inaad saxiixdo.", // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': "Taasi waa xeerka: koofiyadda adag waa khasab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': "Ma khasab baa inaan Sabtida saacado dheeraad ah shaqeeyo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': "Maya, looma baahna. Waa ikhtiyaari.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "Fasaxa", // nieuw, nalezen // nagelezen AI 22 nov
    'l.leave': "Maalmaha fasaxa", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vakantiedagen': "maalmaha fasaxa (safarka)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.verlof': "fasaxa", // nieuw, nalezen // nagelezen AI 22 nov
    'w.aanvragen': "codsasho, weydiisasho", // nieuw, nalezen // nagelezen AI 22 nov
    'w.feestdag': "maalinta fasaxa rasmiga ah", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrij': "fasax, aan shaqaynayn", // nieuw, nalezen // nagelezen AI 22 nov
    'w.calamiteitenverlof': "fasaxa xaaladda degdegga ah", // nieuw, nalezen // nagelezen AI 22 nov
    's.leave.1': "Waxaan rabaa inaan fasax codsado.", // nieuw, nalezen // nagelezen AI 22 nov
    's.leave.2': "Maalinta fasaxa rasmiga ah ma fasax baan ahay?", // nieuw, nalezen // nagelezen AI 22 nov
    's.leave.3': "Xaalad degdeg ah ayaa guriga iiga dhacday.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.q': "Goorma ayaad rabtaa inaad fasax aaddo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a': "Bisha Luulyo, saddex toddobaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.illness': "Xanuunsan oo guriga jooga", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekmelden': "sheegid inaad xanuunsan tahay", // nieuw, nalezen // nagelezen AI 22 nov
    'w.betermelden': "sheegid inaad bogsatay", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bedrijfsarts': "dhakhtarka shirkadda", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekte': "xanuunka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.doorbetalen': "sii bixin (mushaharka)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wachtdag': "maalinta sugitaanka (lacag la'aan)", // nieuw, nalezen // nagelezen AI 22 nov
    's.illness.1': "Waxaan soo sheegayaa inaan xanuunsanahay.", // nieuw, nalezen // nagelezen AI 22 nov
    's.illness.2': "Ballan ayaan la leeyahay dhakhtarka shirkadda.", // nieuw, nalezen // nagelezen AI 22 nov
    's.illness.3': "Berri ayaan shaqada ku soo laabanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.q': "Maxaa si sax ah kaa haya?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.a': "Taas waxaan kala hadli doonaa dhakhtarka shirkadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.exploit': "Ogow xuquuqdaada: ka faa'iidaysiga xun", // nieuw, nalezen // nagelezen AI 22 nov
    'l.warning': "Calaamadaha digniinta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitbuiting': "ka faa'iidaysiga xun (dhiig-miirashada)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.paspoort': "baasaboorka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.schuld': "deynta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.dreigen': "handadid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.onderbetaald': "lacag aad u yar la siiyay", // nieuw, nalezen // nagelezen AI 22 nov
    'w.afpakken': "ka qaadid (xoog)", // nieuw, nalezen // nagelezen AI 22 nov
    's.warning.1': "Madaxaygu wuxuu hayaa baasaboorkayga.", // nieuw, nalezen // nagelezen AI 22 nov
    's.warning.2': "Warqad mushahar ma helo.", // nieuw, nalezen // nagelezen AI 22 nov
    's.warning.3': "Waa inaan dib u bixiyo deyn.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.q': "Baasaboorkaaga i sii uun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.a': "Maya, waxaad samayn kartaa nuqul oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.gethelp': "Helitaanka caawimo", // nieuw, nalezen // nagelezen AI 22 nov
    'w.politie': "booliska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.anoniem': "magacaaga la'aan (qarsoodi)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.melden': "soo sheegid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.hulp': "caawimada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.gevaar': "khatarta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bang': "baqsan", // nieuw, nalezen // nagelezen AI 22 nov
    's.gethelp.1': "Waxaan rabaa inaan wax soo sheego.", // nieuw, nalezen // nagelezen AI 22 nov
    's.gethelp.2': "Ma samayn karaa taas magacayga la'aan?", // nieuw, nalezen // nagelezen AI 22 nov
    's.gethelp.3': "Waan ka baqayaa madaxayga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.q': "Sideen kuu caawin karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.a': "Shaqada si xun ayaa la iigula dhaqmaa.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'u.health': "Caafimaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'l.doctor': "Dhakhtar mise 112?", // nieuw, nalezen // nagelezen AI 22 nov
    'w.huisarts': "dhakhtarka qoyska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.huisartsenpost': "adeegga dhakhtarka qoyska ee fiidka, habeenka iyo dhammaadka toddobaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.apotheek': "farmashiyaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.recept': "warqadda daawada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.spoed': "degdeg", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ambulance': "ambalaaska", // nieuw, nalezen // nagelezen AI 22 nov
    's.doctor.1': "Waxaan rabaa ballan dhakhtarka qoyska.", // nieuw, nalezen // nagelezen AI 22 nov
    's.doctor.2': "Xaggee buu ku yaal farmashiyuhu?", // nieuw, nalezen // nagelezen AI 22 nov
    's.doctor.3': "Waa degdeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.q': "Adeegga dhakhtarka qoyska, maxaan kuu qabtaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.a': "Wiilkaygu wuxuu qabaa qandho kulul.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.insurance': "Caymiska caafimaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.premie': "lacagta caymiska (bixinta bil kasta)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.eigenrisico': "qaybta adiga (kharashka aad adigu marka hore bixiso)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zorgtoeslag': "kaalmada lacagta caafimaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.verzekeraar': "shirkadda caymiska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.permaand': "bishii", // nieuw, nalezen // nagelezen AI 22 nov
    'w.vergoeden': "bixin kharashka (daboolid)", // nieuw, nalezen // nagelezen AI 22 nov
    's.insurance.1': "Bil kasta waxaan bixiyaa lacagta caymiska.", // nieuw, nalezen // nagelezen AI 22 nov
    's.insurance.2': "Tan ma la bixiyaa (caymisku ma daboolaa)?", // nieuw, nalezen // nagelezen AI 22 nov
    's.insurance.3': "Waxaan codsanayaa kaalmada lacagta caafimaadka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.q': "Shirkaddee caymis ayaad la leedahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.a': "Taas waxay ku qoran tahay kaarkayga caymiska caafimaadka.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'u.lost': "Markaad shaqada waydo", // nieuw, nalezen // nagelezen AI 22 nov
    'l.ww': "Gunnada shaqo la'aanta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitkering': "gunnada (lacag dowladda ka timaadda)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ww': "gunnada shaqo la'aanta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkloos': "shaqo la'aan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uwv': "UWV (xafiiska shaqada iyo gunnooyinka)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontslagnemen': "shaqada iska dhaafid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkzoekende': "qofka shaqo raadinaya", // nieuw, nalezen // nagelezen AI 22 nov
    's.ww.1': "Waxaan gunnada shaqo la'aanta ka codsanayaa UWV.", // nieuw, nalezen // nagelezen AI 22 nov
    's.ww.2': "Shaqo la'aan baan ahay.", // nieuw, nalezen // nagelezen AI 22 nov
    's.ww.3': "Qandaraaskaygu wuu dhammaanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.q': "Maxaad samayn doontaa hadda oo qandaraaskaagu dhammaanayo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.a': "Isla markiiba waxaan codsan doonaa gunnada shaqo la'aanta.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.newjob': "Raadinta shaqo cusub", // nieuw, nalezen // nagelezen AI 22 nov
    'w.baan': "shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zoeken': "raadin", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewaren': "kaydin, hayn", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bijwerken': "cusboonaysiin", // nieuw, nalezen // nagelezen AI 22 nov
    'w.gratis': "bilaash (lacag la'aan)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.nooit': "marnaba", // nieuw, nalezen // nagelezen AI 22 nov
    's.newjob.1': "Waxaan raadinayaa shaqo cusub.", // nieuw, nalezen // nagelezen AI 22 nov
    's.newjob.2': "Waraaqaha mushaharkayga waan kaydiyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    's.newjob.3': "Shaqo raadintu waa bilaash.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.q': "Ma ku soo wici karnaa marka shaqo jirto?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.a': "Haa, fadlan. Waa kan lambarkaygu.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.cv': "CV gaaban", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': "Halkan CV-gu waa gaaban yahay: 1 ama 2 bog. Qor macluumaadkaaga xiriirka, khibradda shaqada, waxbarashada, luqadaha iyo xirfadaha. Sawir looma baahna. Uma baahnid inaad qorto diintaada, da'daada ama xaaladdaada guurka. Daacad ka ahow waxa aad qaban karto. Qof ka codso inuu hubiyo Af-Holandiiskaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': "Ma akhrin doontaa CV-gayga? Af-Holandiiskaygu ma sax yahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.s': "Waxaad 3 sano ka shaqaysay warshad ku taal dalkaaga hooyo, laakiin shahaado ma haysid. Maxaad ku qoraysaa CV-gaaga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o1': "Qor shaqada iyo waxa aad halkaas ka qabatay, si daacad ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o2': "Waxba ha qorin, maxaa yeelay shahaado ma haysid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o3': "Qor inaad shahaado haysato, si aad u muuqato mid ka fiican.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.w': "Khibradda shaqada waa la tixgeliyaa, xitaa tan dalka dibaddiisa. Daacadnimadu waa muhiim: loo-shaqeeyayaashu way hubin karaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview': "Wareysiga shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.b': "Waqtiga ku imow: 5 ilaa 10 daqiiqo ka hor. Si edeb leh u salaan oo qofka eeg. Si kooban u sheeg waxa aad qaban karto. Inaad adigu su'aalo weydiiso waa caadi waana wax fiican, tusaale ahaan saacadaha, shaqada ama tababarka. Dhammaadka waxaad weydiin kartaa goorma aad war heli doonto. Waa caadi inaad sheegto inaad weli baranayso Af-Holandiis. Loo-shaqeeyaha lagama oggola inuu ku weydiiyo diintaada, uur ama caafimaadkaaga. Uma baahnid inaad ka jawaabto: si edeb leh ayaad u odhan kartaa inaadan doonayn inaad ka jawaabto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.p': "Anigu wax ma weydiin karaa? Shaqadu toddobaadkii immisa saacadood weeye?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.s': "Dhammaadka wareysiga, loo-shaqeeyuhu wuxuu weydiiyaa: “Heb je nog vragen?” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o1': "Su'aal ka weydii saacadaha ama tababarka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o2': "Dheh maya, maxaa yeelay su'aal weydiintu edeb ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o3': "Wax badan ka sheeg naftaada, si aad u muujiso inaad shaqaale fiican tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.w': "Su'aaluhu waxay muujinayaan inaad shaqada xiisaynayso. Loo-shaqeeyayaasha halkan inta badan way filayaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': "Qandaraaskaaga warqad ku hel", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.b': "Had iyo jeer weydiiso qandaraas qoran iyo nuqul adiga kuu gaar ah. Akhri ka hor intaadan saxeexin, ama weydiiso qof aad aamminsan tahay inuu ku caawiyo. Xafiiska shaqo-qorista (uitzendbureau) looma oggola inuu lacag kaa qaado si uu shaqo kuu helo. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.p': "Ma akhrin karaa qandaraaska marka hore?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.s': "Loo-shaqeeye cusub ayaa yiri: “Halkan hadda saxeex. Goor dambe ayaad akhrin kartaa.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.o1': "Weydiiso waqti aad ku akhrido, ama nuqul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.o2': "Si degdeg ah u saxeex, si aadan shaqada u waayin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.o3': "Saxeex, kadibna weydiiso nuqul.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.w': "Qandaraaskaagu wuxuu sheegayaa waxa aad kasbanayso iyo xuquuqdaada. Loo-shaqeeye wanaagsan wuxuu ku siinayaa waqti aad ku akhrido. Waxaad weydiin kartaa wax kasta oo aadan fahmin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract': "Muddada tijaabada iyo shaqada loo yeero", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.b': "Muddada tijaabada (proeftijd) waa inay qoraal ku jirtaa. Qandaraas 6 bilood ah ama ka gaaban laguma oggola muddo tijaabo. Qandaraas ka dheer oo ka yar 2 sano, ugu badnaan waa 1 bil. Qandaraas 2 sano ah ama ka dheer, ama mid joogto ah, ugu badnaan waa 2 bilood. Ma tahay shaqaale loo yeero markii loo baahdo (oproepkracht)? Loo-shaqeeyahaagu inta badan waa inuu kuu yeeraa ugu yaraan 4 maalmood ka hor. Haddii uu ka dambeeyo, uma baahnid inaad timaaddo. Heshiiska wadajirka ah (cao) wuxuu ka dhigi karaa 4-taas maalmood kuwo ka gaaban, laakiin kama gaabin karo 1 maalin. Haddii ay shaqadaada joojiyaan wakhti intaas ka dambeeya, weli lacagtaada waa lagu siinayaa. Haddii ay kuugu yeeraan wax ka yar 3 saacadood oo shaqo ah, inta badan waxaa lagu siinayaa lacagta 3 saacadood. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.p': "Muddada tijaabadu ma ku jirtaa qandaraaskayga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.s': "Qandaraaskaagu waa 3 bilood. Waxaa ku qoran: “Proeftijd: 1 maand”. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o1': "Wax ka weydii: muddadan tijaabadu ansax ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o2': "Waxba. Qandaraas kasta wuxuu leeyahay muddo tijaabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o3': "Saxeex oo weligaa ha weydiin, maxaa yeelay madaxa ayaa sida fiican u yaqaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.w': "Muddo tijaabo oo ku jirta qandaraas 6 bilood ah ama ka gaaban ansax ma aha. In si deggan wax loo weydiiyo waa caadi. Haddii jawaabtu aanay caddayn, talo ka qaado ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency': "Xafiiska shaqo-qoristu waa loo-shaqeeyahaaga", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.b': "Haddii aad u shaqeyso adigoo maraya xafiis shaqo-qoris (uitzendbureau), xafiiskaas ayaa ah loo-shaqeeyahaaga, ma aha shirkadda aad ka shaqeyso. Qandaraaskaaga iyo mushaharkaagu waxay ka yimaadaan xafiiska, waxaana jira cao loogu talagalay shaqaalaha xafiisyada shaqo-qorista (uitzend-cao). Waxaad xaq u leedahay mushahar la mid ah kan shaqaalaha shirkadda ee qabta shaqada isku midka ah. Waxaad sidoo kale helaysaa lacagta fasaxa (vakantiegeld), waxaadna urursanaysaa maalmo fasax ah. Hayso liiskaaga gaarka ah ee saacadaha aad shaqaysay, kuna hubi warqadda mushaharkaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.x': 'Shaqo-bixiye dal kale ah ma kuu soo diray halkan muddo? Markaas waxaad tahay shaqaale la soo diray (gedetacheerd). Shaqo-bixiyahaaga ka codso warqadda A1: waxay muujinaysaa halka aad caymis ku leedahay. Halkan weli waxaad helaysaa ugu yaraan mushaharka ugu yar ee Holland.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': "Warqadda mushaharkaygu waxay muujinaysaa saacado aad u yar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.s': "Warqadda mushaharkaagu waxay muujinaysaa 32 saacadood, laakiin waxaad shaqaysay 38. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o1': "Xafiiska tus liiskaaga saacadaha oo weydiiso inay saxaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o2': "Waxba ha odhan, maxaa yeelay waa 6 saacadood oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o3': "Madaxa shirkadda aad ka shaqeyso weydiiso inuu bixiyo 6-da saacadood.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.w': "Xafiiska ayaa lacagta ku siiya, sidaas darteed xafiisku waa inuu saxaa khaladka. Liiskaaga gaarka ah ee taariikhaha iyo saacadaha ayaa ku caawinaya. Inaad wax ka weydiiso waa xaqaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn': "BSN-kaaga: si ammaan ah u hay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.b': "Waxaad heshaa BSN (burgerservicenummer) marka aad iska diiwaangeliso dowladda hoose (gemeente). Halkan muddo gaaban oo keliya ma joogtaa? Markaas waxaad iska diiwaangelisaa xafiis RNI ah. BSN-kaaga waxaad u baahan tahay shaqada, canshuurta, caymiska caafimaadka iyo koontada bangiga. Loo-shaqeeyahaagu wuxuu u baahan yahay kaarkaaga aqoonsiga iyo BSN-kaaga. BSN-kaaga ama nuqul kaarkaaga aqoonsiga ah ha siin qof kasta. Marka hore weydii sababta ay ugu baahan yihiin. Ma guuraysaa? Cinwaankaaga cusub ka diiwaangeli gemeente 5 maalmood gudahood. DigiD waa gelitaankaaga boggaga internetka ee dowladda: marnaba qof kale ha siin. Ma ku nooshahay ama ma ka shaqeysaa halkan? Markaas inta badan waa inaad leedahay caymis caafimaad oo Holland ah (zorgverzekering). Si dhakhso ah u samee. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.bsn.p': "Maxaad ugu baahan tahay BSN-kayga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.s': "Qof aadan aqoon ayaa shaqo kuugu soo bandhigay WhatsApp. Wuxuu rabaa sawirka baasaboorkaaga iyo gelitaankaaga DigiD. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.o1': "Marnaba ha bixin gelitaankaaga DigiD. Hubi cidda uu yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.o2': "Si degdeg ah wax walba u dir si aad shaqada u hesho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.o3': "Dir sawirka baasaboorka oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.w': "DigiD-gaaga ama nuqul kaarkaaga aqoonsiga, dad kale ayaa ku isticmaali kara magacaaga, tusaale ahaan deyn ama gunno. Loo-shaqeeye dhab ah wuxuu u baahan yahay kaarkaaga aqoonsiga iyo BSN-kaaga, laakiin marnaba uma baahna gelitaankaaga DigiD.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing': "Guri uu bixiyo loo-shaqeeyahaagu", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.b': "Loo-shaqeeyahaaga ama xafiiska shaqo-qoristu ma kuu diyaariyaan guriga? Markaas qandaraaska kiradu waa inuu ka gooni yahay qandaraaska shaqadaada. Weydiiso qandaraas kiro oo qoran iyo caddayn waxa aad bixiso. Kirada waxaa lagaa jari karaa mushaharkaaga oo keliya haddii aad qoraal ku oggolaatay, oo xadka sharciga gudihiisa: ku hubi warqadda mushaharkaaga. Lacagta dhigaalka (borg) ugu badnaan waa 2 bilood oo kirada aasaasiga ah. Waad dib u helaysaa marka aad guriga ka baxdo, marka laga jaro waxyeellada dhabta ah. Cinwaankaaga iska diiwaangeli gemeente. Guri aan ammaan ahayn, handadaad ama kharash aan cadaalad ahayn? U sheeg gemeente (meldpunt), oo talo bilaash ah ka hel Juridisch Loket ama adeeg talada guryaha. Dhibaato ku saabsan qiimaha kirada ama kharashka adeegyada, waxaa jira Huurcommissie. Shaqadaadu ma dhammaanaysaa? Talo weydiiso ka hor intaadan guriga ka bixin. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.p': "Ma heli karaa caddayn inaan bixiyay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.s': "Shaqadaadu way dhammaanaysaa. Xafiiska shaqo-qoristu wuxuu yiri: “Berri waa inaad guriga ka baxdaa.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.o1': "Marka hore talo ka weydii Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.o2': "Isla markiiba ka bax oo iska illow lacagta dammaanadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.o3': "Joog, oo jooji inaad ka jawaabto xafiiska shaqo-qorista.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.w': "Qandaraaska kirada wuxuu leeyahay xeerar u gaar ah, oo ka duwan shaqadaada. Talo bilaash ah ayaa kaa caawinaysa inaad ogaato xuquuqdaada, tusaale ahaan goorta ay tahay inaad guriga ka baxdo iyo lacagta dammaanadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip': "Hubi warqadda mushaharkaaga", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.b': "Bruto waa mushaharkaaga kahor canshuurta. Netto waa waxa aad ku hesho akoonkaaga bangiga: bruto oo laga jaray canshuurta iyo lacagaha caymiska (loonheffing). Loo-shaqeeyahaagu waa inuu ku siiyaa warqadda mushaharka (loonstrook). Warqad kasta oo mushahar ah ku hubi saacadaha iyo lacagta, oo qor saacadaha aad shaqeyso. Ma leedahay laba shaqo? Dhimista canshuurta (loonheffingskorting) ka isticmaal hal loo-shaqeeye oo keliya. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.p': "Saacado ka badan intaas ayaan shaqeeyey. Ma hubin kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.s': "Warqadda mushaharkaaga waxay muujinaysaa saacado ka yar intii aad shaqeysay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.o1': "Tus qoraalladaada oo madaxaaga ka codso inuu hubiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.o2': "Waxba ha oran, maxaa yeelay ma rabtid dhibaato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.o3': "Sug hal bil: warqadda mushaharka ee xigta way ku saxnaan doontaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.w': "Khaladaad ayaa ka dhaca warqadda mushaharka. In wax laga weydiiyo waa caadi, waana xaqaaga. Qoraalladaada ee taariikhaha iyo saacadaha aad bay wax u taraan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra': "Lacagta fasaxa iyo mushaharka ugu yar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.b': "Waxaad heshaa lacagta fasaxa (vakantiegeld): ugu yaraan 8% mushaharkaaga guud. Loo-shaqeeyayaasha badankoodu waxay bixiyaan sannadkii hal mar, bisha May ama June. Mushaharkaagu waligiis kama yaraan karo mushaharka ugu yar ee sharciga (minimumloon); shaqaalaha ka yar 21 sano wuu ka yar yahay. Lacagtu sannad kasta way isbeddeshaa: ka eeg rijksoverheid.nl. Badanaa cao waxay ku siisaa lacag dheeraad ah saacadaha dheeraadka ah ama shaqada habeenkii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.p': "Goorma ayaan helayaa lacagta fasaxa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.s': "Saaxiibka shaqada ayaa yiri: “Bisha May madaxa ayaa lacag dheeraad ah ku siinaya.” Waa maxay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.o1': "Lacagta fasaxa: ugu yaraan 8% mushaharkaaga guud.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.o2': "Hadiyad, oo keliya loogu talagalay shaqaalaha ugu fiican.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.o3': "Bisha 13aad: hal bil oo mushahar dheeraad ah, qof walba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.w': "Lacagta fasaxa waa xaqaaga, ma aha hadiyad. Saacad kasta oo aad shaqeyso ayaad wax ka kaydsataa. Haddii aad shaqada ka tagto kahor, waxaad ku helaysaa mushaharkaaga ugu dambeeya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone': "Taleefankaaga shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.b': "Goobo shaqo oo badan ma oggola taleefanka inta shaqada la jiro, gaar ahaan agagaarka mashiinnada iyo forklift-yada, ama wax-soo-saarka cuntada. Waxay noqon kartaa mid aan ammaan ahayn ama aan nadiif ahayn. Taleefankaaga isticmaal waqtiga nasashada. Ma sugaysaa wicitaan degdeg ah oo ka imanaya qoyskaaga? Marka hore u sheeg madaxaaga. Ha qaadin sawirro ama muuqaallo shaqada idan la'aan: ka fikir sirta saaxiibbada shaqada iyo sirta shirkadda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.p': "Ilmahaygu waa xanuunsan yahay. Taleefankaygu ma shidnaan karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.s': "Hooyadaa waxay ku jirtaa isbitaalka, maantana way ku soo wici kartaa. Taleefannada looma oggola goobta shaqada. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.o1': "U sheeg madaxaaga oo weydii sida laguu heli karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.o2': "Taleefanka jeebka ku hay oo si aamusnaan ah uga jawaab mashiinka agtiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.o3': "Guriga joog adigoon cidna u sheegin sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.w': "Madaxdu badanaa way fahmaan xaalad degdeg ah oo qoyska ah. Marka ay ogaadaan, waxay heli karaan xal ammaan ah, tusaale ahaan waqti go'an oo aad taleefankaaga eegto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking': "Sigaarka dibadda oo keliya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.b': "Holland gudaheeda, sigaar cabbidda goobta shaqada gudaheeda waa mamnuuc sharci ahaan. Sidoo kale waxay khuseysaa sigaarka elektaroonigga ah (vapes). Laga soo bilaabo 2022, qolalka sigaarka ee gudaha shirkadaha lama oggola. Sigaarka ka cab dibadda oo keliya, meesha loo-shaqeeyahaagu oggol yahay, badanaana waqtiga nasashada oo keliya. Nasashooyin dheeraad ah oo sigaar ma aha xaq: kala hadal madaxaaga. Waligaa ha cabbin sigaar meel u dhow waxyaabo si fudud u gubta, sida shidaal ama kartoonno bakhaar ku jira. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.p': "Ma sigaar ka cabbi karaa dibadda waqtiga nasashada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.s': "Waa qabow, roobna wuu da'ayaa. Saaxiibka shaqada ayaa yiri: “Qolka kaydka ku cab, cidna ma arkayso.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o1': "Dheh maya, oo sigaarka ka cab dibadda waqtiga nasashada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': "Si degdeg ah qolka kaydka ugu cab, kaliya hal mar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o3': "Halkii, vape-kaaga gudaha ku isticmaal, maxaa yeelay taas waa la oggol yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.w': "Sigaar gudaha lagu cabbo waa ka soo horjeedaa sharciga, wuxuuna bilaabi karaa dab. Vape-na gudaha looma oggola. Raacidda xeerka ayaa qof walba ammaan ka dhigta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock': "Adigu iska diiwaangeli saacadda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.b': "Adigu iska diiwaangeli gelitaanka iyo bixitaanka, xilliga aad dhab ahaan bilowdo iyo marka aad joojiso shaqada. Waligaa ha u diiwaangelin saaxiib shaqo, waligaana ha u oggolaan qof kale inuu isticmaalo kaarkaaga. Tani waxay u tirsan tahay khiyaano, waxayna keeni kartaa in shaqada lagaa eryo. Ma soo daahaysaa? Wac kahor inta uusan wareeggaaga shaqo bilaabmin. Hubi in saacadaha aad diiwaangelisay ay la mid yihiin warqadda mushaharkaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.p': "Waan illaaway inaan iska diiwaangeliyo bixitaanka. Ma saxi kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.s': "Saaxiib shaqo ayaa kaarkiisa ku siiyey: “I diiwaangeli, 20 daqiiqo ayaan soo daahayaa.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.o1': "Dheh maya, oo u sheeg inuu madaxa wacdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.o2': "Hal mar oo keliya samee, maxaa yeelay waa saaxiibkaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.o3': "Isaga diiwaangeli oo goor dambe madaxa u sheeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.w': "In qof kale loo diiwaangeliyo waxay u tirsan tahay khiyaano, labadiinaba. In aad maya tiraahdo waxay ilaalinaysaa saaxiibkaa shaqada iyo shaqadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene': "Maskax cad, gacmo nadiif ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.b': "Khamriga iyo daroogada shaqada, ama inaad shaqada timaado kadib markaad isticmaashay, waa mamnuuc ku dhowaad shirkad kasta. Aad bay khatar u tahay agagaarka mashiinnada iyo forklift-yada, waxayna keeni kartaa in shaqada lagaa eryo. Daawo ma kuu keentaa lulmo ama wareer? U sheeg madaxaaga, si aad u qabato shaqo ammaan ah. Uma baahnid inaad sheegto daawada ay tahay. Wax-soo-saarka cuntada xeerarka nadaafaddu way adag yihiin: gacmaha dhaq, xiro dhar shaqo oo nadiif ah, shabag timaha haddii loo baahdo, hana xiran dahab iyo qurxin. Matag ama shuban? Sheeg kahor intaadan bilaabin. Goobtaada shaqada nadiif ka dhig. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.p': "Daawo ayaan qaataa. Waxay ii keentaa lulmo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.s': "Dhakhtarkaagu wuxuu ku siiyey daawo kuu keenta lulmo. Berri waa inaad wadato forklift. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o1': "U sheeg madaxaaga kahor intaadan bilaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': "Waxba ha oran oo si tartiib ah u wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o3': "Jooji daawada adigoon dhakhtarkaaga weydiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.w': "Madaxaagu uma baahna inuu ogaado daawada ay tahay, keliya inaadan hadda wadi karin ama mashiinno ku shaqeyn karin. Taasi waxay ammaan ka dhigaysaa adiga iyo saaxiibbadaada shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk': "Sheeko yar waqtiga nasashada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.b': "Sheekooyin gaagaaban waqtiga nasashada waa caadi. Waxay kaa caawiyaan inaad dareento inaad ka mid tahay kooxda. Waad ku soo dhowdahay miiska qaxwada ama qadada. Mawduucyo fudud waa dhammaadka toddobaadka, cimilada, ciyaaraha iyo fasaxyada. Su'aalaha ku saabsan mushaharka, diinta ama nolosha gaarka ah ee qofka badanaa aad bay u gaar yihiin bilowga. Maalinta dhalashadooda, dadku badanaa waxay kooxda u keenaan wax macaan (trakteren), sida keeg. Saaxiib shaqo ma leeyahay maalin dhalasho maanta? Dheh “Gefeliciteerd!”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.p': "Hambalyo, maalin dhalasho wacan!", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.s': "Waqtiga nasashada, saaxiibbadaada shaqada waxay wada fadhiyaan miis. Weli si fiican uma taqaanid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.o1': "Weydii “Mag ik bij jullie zitten?” oo ku biir sheeko gaaban.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.o2': "Maalin walba keligaa dibadda wax ku cun, si aadan u dhibin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.o3': "Saaxiib shaqo kasta weydii inta uu kasbado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.w': "In aad miiska ku biirto waa la soo dhoweeyaa, waxayna kaa caawinaysaa inaad barato kooxda. Su'aal fudud sida “Hoe was je weekend?” waa bilow wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes': "Khaladaadku waa caadi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.b': "Qof walba wuu khaldamaa shaqada. Si degdeg ah u sheeg, si loo saxo: “Sorry, ik heb een fout gemaakt.” Khalad la qariyo waxaa loo arkaa wax ka sii xun khaladka laftiisa. Faalladu (feedback) waxay ku saabsan tahay shaqada, ma aha adiga qof ahaan. Ma lagu ammaanay? Kaliya dheh mahadsanid. Ma kuu caddayn waxa aad si fiican u samayn lahayd? Weydii: “Kun je het uitleggen?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.p': "Waan ka xumahay, khalad ayaan sameeyey. Sideen u saxi karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.s': "20 sanduuq ayaad saartay baaleet khaldan. Weli cidna ma arkin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o1': "U sheeg madaxaaga oo ka caawi saxitaanka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o2': "Waxba ha oran oo rajee in cidna aysan ogaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o3': "Dheh saaxiib shaqo ayaa sameeyey.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.w': "Khalad goor hore la sheego way fududahay in la saxo. Daacadnimadu waxay dhistaa kalsooni, taasina way ka muhiimsan tahay in aadan waligaa khaldamin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect': "Ixtiraam qof walba", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.b': "Shaqada, qof walba waa siman yahay, qof walbana waxaa lala dhaqmaa ixtiraam, iyadoon loo eegin jinsigiisa, asalkiisa, diintiisa ama u janjeerkiisa galmada. Adiga ayaa go'aamiya taabashada jirka. Gacan isu qaadiddu waa caadi. Laakiin waxaad sidoo kale ku salaami kartaa hab kale oo edeb leh, sida madax-ruxid iyo dhoolacaddayn. Kadib si kooban u sharax. Kaftanka ku saabsan asalka ama diinta qofka, hanjabaadda, cagajuglaynta (pesten) iyo dhaqanka galmada ee aan la rabin lama aqbalo. Waxaad u sheegi kartaa madaxaaga, ama la-taliyaha sirta (vertrouwenspersoon) haddii shirkaddaadu leedahay mid.",
    'c.respect.p': "Waxaan doorbidaa inaanan gacan qaadin, laakiin waan ku faraxsanahay inaan ku salaamo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.s': "Saaxiib shaqo ayaa had iyo jeer kaftan ka sameeya diintaada. Waxaad ka codsatay inuu joojiyo, laakiin wuu sii wadaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o1': "U sheeg madaxaaga ama vertrouwenspersoon (la-taliyaha sirta).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o2': "La qosol, si aysan dhibaato u dhicin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': "Adna kaftan ka samee asalkiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.w': "Kaftan noocaas ah lagama aqbalo shaqada. In la sheego waa caadi: shirkaddu waa inay goobta shaqada ka dhigto meel ammaan u ah qof walba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health': "Nasashada iyo saacadaha shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.b': "Sharcigu wuxuu ilaaliyaa caafimaadkaaga. Ma shaqaysaa in ka badan 5.5 saacadood? Markaas waxaad helaysaa ugu yaraan 30 daqiiqo oo nasasho ah (waxay noqon kartaa 2 jeer 15 daqiiqo). Ka badan 10 saacadood? Markaas ugu yaraan 45 daqiiqo. Xeerarka nasashada way ku yara kala duwanaan karaan cao. Waxaad shaqeyn kartaa ugu badnaan 12 saacadood hal wareeg shaqo iyo 60 saacadood hal toddobaad. Ka yar 18 sano? Markaas waxaad shaqeyn kartaa saacado ka yar. Loo-shaqeeyahaagu waa inuu ku siiyaa qalabka ilaalinta, sida kabaha badbaadada ama gacmo-gashiyo, bilaash. Shaqo aan ammaan ahayn ama mushahar aad u yar? Waxaad u sheegi kartaa Nederlandse Arbeidsinspectie, xataa adigoon magacaaga bixin. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.p': "Weli nasasho ma aanan helin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.s': "6 saacadood ayaad shaqeysay nasasho la'aan. Madaxaagu wuxuu kaa codsaday inaad sii wado. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o1': "Dheh inaad hadda u baahan tahay nasashadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o2': "Sii wad, oo goor dambe qaado nasasho dheer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o3': "Shaqada ka tag oo guriga aad adigoon waxba oran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.health.w': "Marka aad shaqeyso in ka badan 5.5 saacadood, nasashadu waa sharci, ma aha raalli-gelin. Nasashaduna waxay kaa caawisaa inaad si ammaan ah u shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights': "Takoorid iyo shaqo ka eryid", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.b': "Takoorid shaqada waa mamnuuc, tusaale ahaan asalkaaga, diintaada ama jinsigaaga darteed. Loo-shaqeeyahaagu si fudud kuuma eryi karo: caadi ahaan wuxuu u baahan yahay oggolaansho UWV ama garsoore, ama oggolaanshahaaga. (Muddada tijaabada ama dhammaadka qandaraas ku meel gaar ah, xeerar kale ayaa khuseeya.) Ha saxiixin warqad ku saabsan eryiddaada oo aadan fahmin. Ma saxiixday heshiis lagu joojinayo shaqadaada (vaststellingsovereenkomst)? Markaas badanaa weli waad baajin kartaa, adigoo qoraal ku sameeya 14 maalmood gudahood. Marka hore caawimaad hel. U tag ururka shaqaalaha (tusaale ahaan FNV), xafiis caawiya dadka la takooray ama Juridisch Loket. Juridisch Loket wuxuu bixiyaa talo sharci oo bilaash ah. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.",
    'c.rights.p': "Marka hore waxaan rabaa inaan talo weydiiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.s': "Madaxaagu wuxuu ku siiyey warqad: “Maanta saxiix, markaas waxaad ku tagaysaa heshiis.” Si fiican uma fahmin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o1': "Weli ha saxiixin. Marka hore talo hel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': "Saxiix, maxaa yeelay madaxa ayaa yiri waa caadi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o3': "Warqadda meel dhig oo waligaa ha ka hadlin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.w': "Wax khaldan ma ku jiraan? Markaas waxaad lumin kartaa xuquuq, tusaale ahaan gunnada shaqo la'aanta (WW). In aad waqti u weydiisato talo waa caadi waana la oggol yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': "Moet, hoeft niet, mag niet", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': "Af-Holandiiska, liddiga “moeten” waa “niet hoeven”. “Je moet tekenen” macnaheedu waa: doorasho ma lihid. “Je hoeft niet te tekenen” macnaheedu waa: waad dooran kartaa. “Je mag niet tekenen” macnaheedu waa: waa mamnuuc. Digniin: Af-Ingiriisiga, “must not” macnaheedu waa “mag niet”. Luqado badan, “khasab ma aha” macnaheedu waa “hoeft niet”. Ma hubtid? Weydii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': "Ma khasab baa, mise doorasho ayaan leeyahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': "Hoggaamiyaha kooxdaadu wuxuu yiri: “Je hoeft zaterdag niet te komen.” Muxuu ula jeedaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': "Khasab kuguma aha inaad Sabtida timaaddo. Waad dooran kartaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': "Laguuma oggola inaad Sabtida timaaddo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': "Waa inaad Sabtida timaaddaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': "“Niet hoeven” macnaheedu waa khasab ma aha: waad dooran kartaa. “Niet mogen” macnaheedu wuxuu noqon lahaa waa mamnuuc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': "Fasaxyada iyo fasaxa degdegga ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.b': "Sharci ahaan waxaad heshaa maalmo fasax ah oo lacag leh: ugu yaraan 4 jeer maalmaha aad toddobaadkii shaqeyso. Waqti buuxa, 5 maalmood toddobaadkii? Markaas ugu yaraan 20 maalmood sannadkii. Cao waxay ku siin kartaa wax ka badan. Fasax codso waqti hore, oo qoraal ku codso. Xaalad degdeg ah oo kedis ah, sida shil ama xanuun qoyskaaga ku dhacay? Markaas waxaad heli kartaa fasax gaaban oo lacag leh (calamiteitenverlof). Isla markiiba u sheeg loo-shaqeeyahaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.p': "Waxaan jeclaan lahaa inaan fasax u codsado bisha July.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.s': "Xagaaga waxaad rabtaa inaad saddex toddobaad booqato qoyskaaga dibadda jooga. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.o1': "Loo-shaqeeyahaaga goor hore fasax ka codso, qoraal ahaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.o2': "Kaliya tag, oo madaxaaga u sheeg markaad soo noqoto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.o3': "Saaxiib shaqo ka codso inuu madaxa u sheego maalinta ka horreysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.w': "Loo-shaqeeyahaagu badanaa waa inuu haa yiraahdo. Wuxuu maya oran karaa oo keliya sabab aad u wanaagsan darteed, markaasna qoraal ahaan 2 toddobaad gudahood. Codsiga goor hore ayaa ugu fursad badan inuu haa noqdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness': "Xuquuqdaada marka aad xanuunsan tahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.b': "Marka aad xanuunsan tahay, loo-shaqeeyahaagu waa inuu bixiyaa ugu yaraan 70% mushaharkaaga, ilaa 2 sano. Badanaa cao ayaa siisa wax ka badan. Waxaa jiri kara ilaa 2 maalmood oo sugitaan ah (wachtdagen) oo aan lacag lahayn, laakiin keliya haddii qandaraaskaaga ama cao sidaas sheegayo. Madaxaagu kuma weydiin karo xanuunka aad qabto. Caafimaadkaaga iyo shaqadaada waxaad kala hadashaa dhakhtarka shirkadda (bedrijfsarts). Wac loo-shaqeeyahaaga marka aad bogsato (betermelden). Sannadka koowaad waxaad helaysaa ugu yaraan mushaharka ugu yar. Qandaraas ku meel gaar ah wuxuu ku dhammaadaa taariikhdiisa dhammaadka, xataa marka aad xanuunsan tahay. Ma waxaad ka shaqeysaa xafiis shaqo-qoris? Haddii qandaraaskaagu leeyahay qodobka xafiiska shaqo-qorista (uitzendbeding), wuu dhammaan karaa marka aad xanuunsato. Markaas UWV wax ka weydii Ziektewet, ama weydii ururka shaqaalaha. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.illness.x': 'Ma jirran tahay oo ma rabtaa inaad u safarto dalkaaga? Marka hore weydii loo-shaqeeyahaaga ama xafiiska shaqo-qorista. Ogolaansho la’aan mushaharkaagu wuu joogsan karaa. Sii cinwaankaaga meesha aad joogi doonto, oo ka jawaab taleefankaaga.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': "Waan bogsaday. Berri ayaan shaqada imanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.s': "Toddobaad ayaad xanuunsanayd. Loo-shaqeeyahaagu wuxuu kaa codsaday inaad booqato dhakhtarka shirkadda. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.o1': "Tag, oo dhakhtarka kala hadal caafimaadkaaga iyo shaqadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.o2': "Ha tagin, maxaa yeelay horay waxaad u leedahay dhakhtar adiga kuu gaar ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.o3': "Shaqada ku noqo adigoo weli xanuunsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.w': "Dhakhtarka shirkaddu wuxuu kaa caawiyaa inaad si caafimaad leh shaqada ugu noqoto. Dhakhtarku madaxaaga uma sheego faahfaahinta caafimaadkaaga, keliya shaqada aad qaban karto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning': "Calaamadaha ka faa'iideysiga xun", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.b': "Iska jir calaamadahan. Loo-shaqeeyahaagu wuxuu hayaa baasaboorkaaga ama aqoonsigaaga. Taas lama oggola: aqoonsigaaga adigaa haysanaya. Loo-shaqeeyuhu wuxuu samayn karaa koobi oo keliya. Waxaad heshaa mushahar aad uga yar kii lagu heshiiyey, ama warqad mushahar ma helid. Waa inaad bixisaa deyn weyn oo aad ku leedahay loo-shaqeeyaha ama xafiiska shaqo-qorista. Waa inaad shaqeysaa saacado aad u dheer, adigoon doorasho lahayn. Qof ayaa kugu hanjabaya, ama guriga aad deggan tahay u isticmaalaya inuu cadaadis kugu saaro. Tani ma aha caadi lamana oggola. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.",
    'c.warning.p': "Waxaan rabaa in baasaboorkayga la ii celiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.s': "Maalintaada ugu horreysa, xafiiska shaqo-qoristu wuxuu yiri: “Baasaboorkaaga annagaa hayn doonna, ammaan darteed.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.o1': "Adigu hay. Koobi ayay samayn karaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.o2': "Sii, maxaa yeelay xafiisku wuu yaqaan xeerarka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.o3': "Sii, laakiin marka hore sawir ka qaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.w': "Baasaboorkaagu waa kaaga. Haysashadiisu waa hab lagu xakameeyo shaqaalaha. Loo-shaqeeyuhu wuxuu u baahan yahay koobi oo keliya oo faylasha loogu talagalay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp': "Halka aad caawimaad ka heli karto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.b': "Ma aragtaa calaamado ka faa'iideysi xun, adiga ama qof kale? Caawimaad hel. Waxaad u sheegi kartaa Nederlandse Arbeidsinspectie, xataa adigoon magacaaga bixin, ama booliska. Meld Misdaad Anoniem: 0800-7000. Talo sharci oo bilaash ah: Juridisch Loket. Khatar ma ku jirtaa? Wac 112. Qof kasta oo Holland ka shaqeeya wuu heli karaa caawimaad, xataa muhaajiriinta. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.p': "Caawimaad ayaan u baahanahay. Si xun ayaa la iiga faa'iideysanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.s': "Saaxiib ayaa maalintii 14 saacadood shaqeeya, ku dhowaad mushahar ma helo, wuxuuna ka baqaa madaxa. Maxaad samayn kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o1': "Ka caawi inuu la xiriiro Arbeidsinspectie ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': "U sheeg in tani caadi u tahay shaqaalaha cusub.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o3': "U sheeg inuu sugo ilaa qandaraaskiisu dhammaado, kadibna ka tago.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.w': "Caawimaad ayaa u diyaar ah qof kasta oo Holland ka shaqeeya. Warbixin waxaa sidoo kale la samayn karaa magacyo la'aan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin': "Wicitaanka madaxaaga", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.b': "Marka aad wacdo madaxaaga, sheeg magacaaga, sababta, iyo goorta aad filayso inaad soo noqoto. Ma xanuunsan tahay? Waxaad sheegaysaa oo keliya inaad xanuunsan tahay, ma aha xanuunka aad qabto. Wac: ha dirin fariin qoraal ah oo keliya, haddii aysan shirkaddaadu oran fariin qoraal ah waa caadi. Jawaab ma jirto? Kaga tag fariin cod ah oo mar kale isku day. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.p': "Haloo, waa Ali. Maanta ma iman karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.s': "Ilmahaagu waa xanuunsan yahay mana iman kartid shaqada. Shirkaddaadu waxay rabtaa inaad wacdo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o1': "Wac madaxaaga kahor wareeggaaga shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o2': "Dir fariin gaaban marka wareeggaaga shaqo bilaabmayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o3': "Deriskaaga ka codso inuu kuu waco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.w': "Wicitaanku waa cad yahay waana degdeg, madaxaaguna su'aalo ayuu weydiin karaa. In aad sheegto goorta aad filayso inaad soo noqoto waxay ka caawisaa inuu qorsheeyo. Sidoo kale sheeg magacaaga iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting': "Fariimaha shaqada: gaaban oo edeb leh", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.b': "Fariimaha shaqada ka dhig kuwo gaaban oo edeb leh. Sheeg cidda aad tahay iyo waxa dhacaya, oo ku dhammee salaan. Tusaale ahaan: “Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”. Had iyo jeer app-ka ka eeg jadwalkaaga shaqada (rooster). Codsiyada wareegyada shaqada waqtigooda uga jawaab. Si aad u beddesho wareeg shaqo, madaxaaga ama qorsheeyaha waa inuu marka hore oggolaado, sidaas darteed weydii: “Mag ik mijn dienst ruilen?” Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.p': "Haye Mark, 10 daqiiqo ayaan soo daahayaa. Waan ka xumahay! Salaan, Ali", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.s': "10 daqiiqo ayaad soo daahaysaa. Fariintee ayaa ugu fiican oo aad u dirto madaxaaga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.o1': "“Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.o2': "“Sorry, ik ben er zo!” (magacaaga la'aan, waqtiga la'aan).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.o3': "Fariin cod ah oo saddex daqiiqo ah oo ku saabsan gaadiidka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.w': "Fariin wanaagsan waxay sheegtaa cidda aad tahay iyo waxa dhacaya, ereyo yar. Markaas madaxaagu isla markiiba wuu garanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs': "Shahaadooyinku way ku caawiyaan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.b': "Dhismaha, warshadaha iyo shaqada ku meel gaarka ah badanaa waxaad u baahan tahay shahaadada VCA (badbaadada). Si aad u wadato forklift badanaa waxaad u baahan tahay shahaadada forklift-ka (heftruckcertificaat). Weydii loo-shaqeeyahaaga haddii uu bixinayo koorsada iyo imtixaanka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.p': "Ma halkan ku qaadan karaa koorsada VCA?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.s': "Shaqo ayaa u baahan shahaadada VCA. Weli ma haysatid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.o1': "Loo-shaqeeyaha ama xafiiska shaqo-qorista ka codso inay kaa caawiyaan helitaankeeda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.o2': "Ha codsan, maxaa yeelay waligaa ma heli doontid shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.o3': "Dheh waad haysataa, oo rajee in cidna aysan hubin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.w': "Loo-shaqeeyayaal iyo xafiisyo shaqo-qoris badan ayaa ka caawiya VCA. Weydiintu waxay muujinaysaa inaad rabto inaad wax barato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma': "Shahaadadaadu way tirsan tahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.b': "Ma haysataa shahaado waddan kale laga keenay? Waxaad ka qiimeysiin kartaa IDW (Internationale Diplomawaardering). Markaas loo-shaqeeyayaashu waxay arki karaan qiimaha ay halkan ku leedahay. Tababar ma looga baahan yahay shaqadaada? Markaas loo-shaqeeyahaagu waa inuu bixiyaa, wuxuuna u tirsan yahay waqti shaqo. Madaxaaga wax ka weydii koorsooyinka. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.p': "Ma jiraan koorsooyin aniga ii habboon?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.s': "Loo-shaqeeyahaagu wuxuu yiri waa inaad Sabtida qaadato tababar badbaado oo qasab ah, lacag la'aan. Maxaa run ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.o1': "Loo-shaqeeyaha ayaa bixiya, waana waqti shaqo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.o2': "Tababarku had iyo jeer waa waqtigaaga firaaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.o3': "Waa inaad adigu bixisaa lacagta tababarka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.w': "Haddii tababar looga baahan yahay shaqadaada, loo-shaqeeyaha ayaa bixiya, wuxuuna u tirsan yahay waqti shaqo. Haddii aysan caddayn, talo weydiiso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor': "Dhakhtar mise 112?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.b': "Iska diiwaangeli dhakhtarka qoyska (huisarts) ee gurigaaga u dhow. Ma u baahan tahay daryeel degdeg ah fiidkii, habeenkii ama dhammaadka toddobaadka? Wac huisartsenpost. 112 wac oo keliya xaalad degdeg ah: khatar nafeed, dab, ama dambi hadda dhacaya. Daawooyinka waxaad ka heshaa farmashiyaha (apotheek).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.p': "Waxaan rabaa inaan iska diiwaangeliyo dhakhtarka qoyska.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.s': "Waa habeen Sabti. Ilmahaagu wuxuu qabaa qandho sare, laakiin wuu soo jeedaa oo si caadi ah ayuu u neefsanayaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o1': "Wac huisartsenpost.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o2': "Wac 112.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o3': "Sug ilaa Isniinta oo waxba ha samayn.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.w': "Huisartsenpost wuxuu caawiyaa daryeelka degdegga ah ee ka baxsan saacadaha xafiiska. 112 waxaa loogu talagalay xaaladaha degdegga ah: khatar nafeed, dab, ama dambi hadda dhacaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance': "Caymiska caafimaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.b': "Marka aad Holland ku nooshahay ama ka shaqeyso, caymiska caafimaadka aasaasiga ah badanaa waa qasab. Bil kasta waxaad bixisaa lacagta caymiska. Sannad kasta waxaa jira qayb aad adigu bixiso (eigen risico): kharashyada ugu horreeya adigaa iska bixiya. Lacagtu way isbeddeshaa: ka hubi shirkadda caymiskaaga. Booqashada dhakhtarka qoyska (huisarts) kama mid aha eigen risico. Dakhli yar haddii aad leedahay, waxaa laga yaabaa inaad hesho kaalmada caafimaadka (zorgtoeslag). Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.p': "Waxaan u baahanahay caymis caafimaad. Ma i caawin kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.s': "Laba toddobaad ka hor ayaad halkan ka bilowday shaqada, weli caymis caafimaad ma haysatid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.o1': "Si degdeg ah u samee caymis caafimaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.o2': "Sug: caymiskaaga waddankaaga ayaa ku filan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.o3': "Isticmaal kaarka caymiska ee saaxiib.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.w': "Caymis la'aan, dhakhtar ama isbitaal aad bay qaali kuugu noqon karaan, waxaana lagu ganaaxi karaa. In aad si degdeg ah u samayso ayaa ku ilaalinaysa. Loo-shaqeeyahaaga ama xafiiska shaqo-qorista ayaa ku caawin kara.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters': "Warqadaha ha iska indha tirin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.b': "Ha iska indha tirin warqadaha ka yimaada Belastingdienst, gemeente ama UWV. Qof aad aaminsan tahay ka codso inuu kaa caawiyo akhrintooda. Cadeynta canshuurta (aangifte) ee sannadkii hore badanaa waa in la sameeyaa kahor 1 May. Waxaad codsan kartaa waqti dheeraad ah. Kaalmooyinka lacageed (toeslagen) sida zorgtoeslag iyo huurtoeslag waxay ku xiran yihiin dakhligaaga. Haddii aad hesho lacag ka badan inta aad xaq u leedahay, waa inaad dib u celisaa, sidaas darteed macluumaadka dakhligaaga had iyo jeer sax ka dhig. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.p': "Warqad ayaa ii timid. Ma i caawin kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.s': "Warqad ayaa kaaga timid Belastingdienst. Ma fahmin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.o1': "Qof aad aaminsan tahay ka codso inuu kaa caawiyo akhrinteeda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.o2': "Khaanad ku rid oo sug.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.o3': "Iska tuur, maxaa yeelay malaha waa xayeysiis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.w': "Warqadaha rasmiga ah badanaa waxay leeyihiin waqti kama dambeys ah. Haddii aad waqtigeeda ka jawaabto, dhibaatooyinka badanaa way fududahay in la xalliyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams': "Iska jir khiyaanada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.b': "Bangigaagu waligiis kaama weydiiyo koodhadhkaaga ama PIN-kaaga taleefan, SMS ama iimayl. Ha gujin linkiyada ku jira fariimo aadan filayn. Qof ma kugu cadaadinayaa inaad si degdeg ah lacag u bixiso? Jooji oo marka hore hubi. Bangigaaga ku wac lambarka rasmiga ah, tusaale ahaan lambarka ku qoran kaarka bangigaaga ama website-kiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.p': "Bangiga anigaa dib u wacaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.s': "SMS ayaa kuu yimid: “Akoonkaaga bangiga waa la xirayaa. Hadda guji linkigan.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o1': "Ha gujin. Bangigaaga ku wac lambarka rasmiga ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o2': "Si degdeg ah u guji, si aan akoonkaaga loo xirin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o3': "SMS-ka ka jawaab oo weydii inuu run yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.w': "Khiyaanayaashu waxay isticmaalaan cadaadis iyo linkiyo been ah. Bangigaagu waligiis kaama weydiiyo koodhadhkaaga link ama fariin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike': "Baaskiil ku tag shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.b': "Nalalka shid marka uu mugdi yahay. Ku wad waddada baaskiilka oo raac nalalka taraafikada iyo calaamadaha. Had iyo jeer quful baaskiilkaaga. In taleefan gacanta lagu hayo adigoo baaskiil wadaya waa mamnuuc.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.p': "Halkee ayaan dhigi karaa baaskiilkayga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.s': "Waa mugdi, waxaadna baaskiil ku tagaysaa wareeggaaga shaqo ee habeenkii. Taleefankaaga ayaa dhacaya. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.o1': "Ku joogso meel ammaan ah kahor intaadan ka jawaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.o2': "Ka jawaab adigoo taleefanka gacanta ku haya oo baaskiil wadaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.o3': "Sii wad, oo si degdeg ah u eeg taleefankaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.w': "Taleefan gacanta ku jira adigoo baaskiil wadaya waa mamnuuc waana khatar. Joogsashada marka hore waxay qaadataa waqti yar oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit': "Bas, tareen iyo kharashka safarka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.b': "Basaska iyo tareenada badankood waxaad ku bixin kartaa kaarka bangigaaga (OVpay). Ku gal (check in) IYO ka bax (check out) isla kaarka, haddii kale waxaad bixinaysaa lacag badan. Lacagta kharashka safarka (reiskostenvergoeding) ma aha xaq sharci: waxay ku xiran tahay loo-shaqeeyahaaga ama cao. Wax ka weydii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.p': "Ma heli doonaa lacag kharashka safarkayga ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.s': "Maalin walba bas ayaad ku tagtaa shaqada. Saaxiib shaqo ayaa hela lacag safar, adiguna ma heshid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.o1': "Madaxaaga wax ka weydii xeerarka shirkadda ama cao.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.o2': "Waxba ha oran, maxaa yeelay malaha adiga laguuma talagelin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.o3': "U sheeg madaxaaga: sharcigu wuxuu leeyahay adiguna waa inaad hesho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.w': "Lacagta safarku waxay ku xiran tahay loo-shaqeeyaha ama cao. Wax ka weydiintu waa caadi waxayna kaa caawinaysaa inaad ogaato xuquuqdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww': "Gunnada shaqo la'aanta (WW)", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.b': "Shaqadii ma ka waysay? WW ka codso UWV sida ugu dhakhsaha badan, toddobaad gudihiis kadib maalintaada ugu horreysa ee shaqo la'aanta. Badanaa waa inaad shaqeysay ugu yaraan 26 ka mid ah 36-kii toddobaad ee ugu dambeeyey. Haddii adigu shaqada iska dhaafto, badanaa WW ma helaysid. Iska diiwaangeli werk.nl adigoo ah qof shaqo raadinaya. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.x': 'Ma shaqo ayaad ka raadinaysaa dal kale oo EU ah? Mararka qaar WW-gaaga waad qaadan kartaa. Ka hor intaadan bixin, UWV ka codso foomka U2. U2 la’aan WW-gaagu wuu joogsadaa.', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': "Waxaan rabaa inaan codsado gunnada shaqo la'aanta. Maxaan sameeyaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.s': "Waad ka xanaaqsan tahay shaqadaada waxaadna rabtaa inaad maanta iska dhaafto. Maxaa caqli ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o1': "Marka hore talo hel, kahor intaadan shaqada iska dhaafin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o2': "Maanta iska dhaaf: si kastaba WW waad heli doontaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o3': "Jooji imaanshaha shaqada adigoon waxba oran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.w': "Shaqo iska dhaafiddu waxay kaa lumin kartaa gunnadaada. In aad marka hore la hadasho madaxaaga, ururka shaqaalaha ama Juridisch Loket waxay kaa caawin kartaa inaad hesho waddo ka wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob': "Raadinta shaqo cusub", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.b': "Kahor intaadan bixin, weydiiso tixraac (referentie). Hay warqadaha mushaharkaaga iyo qandaraaskaaga. CV-gaaga cusboonaysii. Shaqo ka raadi xafiisyada shaqo-qorista (uitzendbureaus) iyo werk.nl. Waligaa ha bixin lacag si aad shaqo u hesho. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.p': "Ma u bixin karaa magacaaga tixraac ahaan?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.s': "Qof ayaa kuu soo bandhigay shaqo, laakiin marka hore waa inaad bixisaa 300 euro “shaqada darteed”. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.o1': "Ha bixin. Raadi xafiis shaqo-qoris oo dhab ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.o2': "Bixi, maxaa yeelay shaqo wanaagsan way u qalantaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.o3': "Hadda bixi kala bar, inta kalena goor dambe.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.w': "In lacag laguu weydiiyo shaqo waa calaamad digniin ah. Xafiiska shaqo-qorista looma oggola inuu lacag kaa qaado si uu shaqo kuu helo. Waxaad sidoo kale shaqo ka raadsan kartaa werk.nl.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools': "Kulanka toolbox-ka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.b': "Goobo dhismo oo badan waxaa jira kulan gaaban oo badbaado ah waqtiyo joogto ah: kulanka toolbox-ka. Waxaad ka maqlaysaa khataraha iyo xeerarka cusub. Tag, dhegayso, oo su'aalo weydii haddii aadan fahmin. Hubi qalabkaaga kahor intaadan isticmaalin. Qalab ma jaban yahay? U sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.p': "Mashiinkan wax lagu daloolsho wuu jaban yahay. Ma jiraa mid kale?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.s': "Waxaa jira kulanka toolbox-ka, laakiin Af-Holandiiskaagu weli ma fiicna. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.o1': "Tag, kadibna saaxiib shaqo weydii waxa kaa dhaafay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.o2': "Ka maqnow, maxaa yeelay si kastaba ma fahmi doontid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.o3': "Saxiix liiska joogitaanka adigoon tagin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.w': "Macluumaadka badbaadada waxaa loogu talagalay qof walba. App turjumaad ayaa kaa caawin kara inaad la socoto kulanka, haddii taleefannada halkaas laga oggol yahay. In aad kadib saaxiib shaqo weydiiso waa caadi, waxayna hubisaa inaad si sax ah u fahantay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site': "Joogso oo hubi: LMRA", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.b': "Kahor intaadan shaqo bilaabin, xoogaa joogso oo hubi: maxaa halkan ku khaldami kara? Tani waa LMRA (last-minute risk analysis: qiimaynta khatarta daqiiqadda ugu dambaysa). Had iyo jeer xiro koofiyaddaada adag, iyo qalabka dhicitaanka laga ilaaliyo marka aad meel sare ka shaqeyso. Waligaa ha istaagin culays sudhan hoostiisa. Shaqadu ma dhab ahaan khatar baa? Markaas waad joojin kartaa, waana inaad isla markiiba u sheegtaa madaxaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.p': "Weli ma bilaabayo. Tani ammaan ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.s': "Waa inaad ka shaqeysaa korka sakaffoolka (scaffold), laakiin xayndaabka ilaalada ayaa ka maqan. Saaxiib shaqo ayaa yiri: “Kaliya taxaddar.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o1': "Ha bilaabin, oo u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': "Bilow, laakiin aad u taxaddar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o3': "Adigu xayndaabka ku hagaaji xoogaa xarig ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.w': "Ka dhicid meel sare waxay keeni kartaa dhaawacyo aad u daran. Waad joojin kartaa shaqo khatar ah, sheegidduna waxay ilaalisaa kooxda oo dhan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line': "Gacmaha ka fogee mashiinnada shaqaynaya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.b': "Waligaa gacanta ha gelin mashiin shaqaynaya, xataa hal ilbiriqsi. Marka cillad timaado (storing): riix badhanka joojinta degdegga (noodstop) oo wac madaxaaga. Dayactirka iyo hagaajinta waxaa la sameeyaa oo keliya marka mashiinka la xiro oo la quful (lock-out), oo keliya dad tababaran. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.p': "Cillad ayaa jirta. Waxaan riixay badhanka joojinta degdegga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.s': "Alaab ayaa ku dhegtay mashiinka. Mashiinku weli wuu shaqaynayaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o1': "Riix badhanka joojinta degdegga oo wac madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o2': "Si degdeg ah gacanta ugu soo saar, kahor intaanay jabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': "Iska daa oo rajee in mashiinku is hagaajiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.w': "Mashiinnada shaqaynaya waxay keeni karaan shilal daran hal ilbiriqsi gudihiis. Joojinta mashiinka had iyo jeer waa la oggol yahay, had iyo jeerna way fiican tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality': "Tayada: sheeg waxa aad aragto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.b': "Ma aragtaa dhibaato alaab ku jirta, sida waxyeello ama calaamad khaldan? Sheeg oo dhinac dhig. Ha u oggolaan inay dhaafto si keliya khadka shaqadu u socdo. Dhibaato goor hore la helo waxay badbaadisaa shaqo iyo lacag badan. Madaxaagu wuu ku farxi doonaa inaad sheegtay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.p': "Waxaan u malaynayaa in alaabtan ay wax ka khaldan yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.s': "Waxaad aragtaa in alaab badan ay calaamaddooda ku qoran tahay taariikh khaldan. Khadka shaqadu aad buu u mashquul yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.o1': "Isla markiiba u sheeg madaxaaga ama qofka tayada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.o2': "Iska daa ha dhaafaan, maxaa yeelay shaqadaada ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.o3': "Si aamusnaan ah u tuur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.w': "Calaamad khaldan waxay keeni kartaa in alaabta oo dhan dib looga soo celiyo dukaamada. In goor hore la sheego waa waxa xubin kooxeed wanaagsan sameyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client': "Ixtiraamka macmiilka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.b': "Garaac albaabka kahor intaadan gelin qolka macmiilka. Sheeg cidda aad tahay, sharax waxa aad samaynayso oo idan weydiiso. Macmiilka ku dheh “u”, ilaa uu kaa codsado inaad ku tiraahdo “je”. Macmiilka u daa inuu sameeyo waxa uu isagu samayn karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.p': "Ma soo geli karaa? Waxaan u imid inaan kaa caawiyo maydhashada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.s': "Waa inaad macmiil ka caawisaa maydhashada. Albaabka qolkeedu waa xiran yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.o1': "Garaac, sug, oo sheeg cidda aad tahay iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.o2': "Si degdeg ah u gal, maxaa yeelay waad mashquul tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.o3': "Ka bood maydhashada, si aadan u dhibin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.client.w': "Qolku waa guriga macmiilka. Garaacidda iyo sharaxiddu waxay muujinayaan ixtiraam, waxayna daryeelka ka dhigayaan mid deggan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy': "Sirta, nadaafadda iyo daawooyinka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.b': "Waxa aad ka aragto oo ka maqasho macmiilada shaqada ayay ku harayaan. Ha kaga hadlin macmiilada meel ka baxsan shaqada, waligaana ha dhejin sawirradooda. Gacmahaaga nadiifi kahor iyo kadib daryeelka. Ma ku aragtaa isbeddel macmiil, sida xanuun ama dhicid? Isla markiiba u sheeg kalkaalisada. Waligaa daawo ha bixin, haddii aadan tababaran ahayn oo aan laguu oggolaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.p': "Ninku wuxuu qabaa xanuun ka badan shalay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.s': "Macmiil ayaa kaa codsatay kiniinadeeda. Looma tababarin inaad daawo bixiso. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o1': "Si naxariis leh u dheh waxaad u yeeraysaa kalkaalisada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': "Sii kiniinada, maxaa yeelay iyadu way taqaan waxa ay u baahan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o3': "Dheh maya oo iska tag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.w': "Daawo khaldan waxay noqon kartaa khatar. In si degdeg ah loo keeno qofka saxda ah waxay caawisaa macmiilka waxayna qof walba ammaan ka dhigtaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen': "Badbaadada cuntada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.b': "Gacmaha si joogto ah u dhaq, sidoo kale kadib musqusha iyo kadib markaad taabato hilib cayriin ah. Cuntada qabow qabow ku hay, cuntada kulul kulul ku hay. Cuntada aad kaydiso ku dheji calaamad taariikh leh. Xeerarkan waxaa la yiraahdaa HACCP. Xasaasiyaddu waa wax culus: ma hubtid waxa ku jira cunto? Had iyo jeer weydii shefka. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.p': "Shef, suugadan gluten ma ku jiraa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.s': "Marti ayaa weydiisay in cunto ay lows ku jirto. Ma hubtid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.o1': "Dheh waad hubinaysaa, oo weydii shefka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.o2': "Dheh “maya”, si martidu u faraxdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.o3': "U sheeg martida inay lowska ka soo saarto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.w': "Marti xasaasiyad qabta, khalad yar ayaa aad khatar ugu noqon kara. In aad shefka la hubiso had iyo jeer waa sax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service': "Edeb la martida", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.b': "Martida ku dheh “u”, ilaa ay kaa codsadaan inaad ku tiraahdo “je”. Noqo mid saaxiibtinimo leh oo deggan, xataa marka ay mashquul tahay. Su'aal ma hubtid? Dheh waad hubinaysaa. Lacagta deeqda ah (fooi): xeerarku way ku kala duwan yihiin meel kasta. Weydii sida loo qaybiyo lacagta deeqda meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.p': "Daqiiqad, dhowaan ayaan kuu imanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.s': "Aad bay u mashquul tahay. Marti ayaa kuu yeertay, laakiin waxaad saxammo u siddaa miis kale. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.o1': "Martida eeg oo dheh: “Een moment, ik kom zo bij u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.o2': "Iska indha tir martida ilaa aad waqti hesho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.o3': "Saxammada dhig miis bannaan oo marka hore u tag martida.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.service.w': "Calaamad gaaban ayaa martida tusaysa inaad aragtay. Markaas waxaad si deggan u dhammaysan kartaa shaqadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning': "Akhri calaamadda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.b': "Alaab kasta oo nadiifin waxay leedahay calaamad (label). Astaamaha (sawirro yaryar oo ku dhex jira dheeman casaan ah) waxay muujiyaan khatarta, tusaale ahaan maqaarkaaga, indhahaaga ama sambabadaada. Akhri calaamadda, ama weydii waxa alaabtu u tahay iyo sida loo isticmaalo. Xiro gacmo-gashiyada uu ku siiyo loo-shaqeeyahaagu. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.p': "Alaabtan maxay u tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.s': "Waxaad heshay alaab nadiifin oo cusub. Si fiican uma akhrin kartid calaamadda. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.o1': "Weydii sida aad si ammaan ah ugu isticmaali karto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.o2': "Wax badan ka isticmaal, markaas si fiican ayay u shaqaynaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.o3': "Kaliya isku day adigoon gacmo-gashi xiran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.w': "Alaab khaldan, ama in badan oo ka mid ah, waxay waxyeelleyn kartaa maqaarkaaga, indhahaaga ama sambabadaada. Weydiintu waxay qaadataa hal daqiiqo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe': "Waligaa ha isku darin alaabaha", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.b': "Waligaa ha isku darin alaabta nadiifinta, tusaale ahaan bleach iyo dawada nadiifinta musqusha. Tani waxay samayn kartaa gaasas khatar ah. Hawo nadiif ah soo geli. Dhulka ma masaxaysaa? Dhig calaamadda dhulka qoyan (Pas op, glad!), si aan cidna u simbiriirixan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.p': "Calaamadda ayaan dhigayaa. Dhulku waa qoyan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.s': "Musqushu aad bay u wasakh tahay. Saaxiib shaqo ayaa yiri: “Laba alaabood isku dar, markaas way fiicnaanaysaa.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.o1': "Ha isku darin. Isticmaal hal alaab.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.o2': "Isku dar, laakiin daaqad fur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.o3': "Si degdeg ah isku dar oo qolka ka bax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.w': "Isku darka alaabta waxay samayn kartaa gaas sun ah, xataa marka daaqad furan tahay. Hal alaab, si fiican loo isticmaalo, ayaa ku filan.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.translate': "App-yada turjumaadda: caqli badan, laakiin hubi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.b': "App turjumaad, sida Google Translate, aad buu wax u taraa. Waad qori kartaa, hadli kartaa, ama isticmaali kartaa qaabka wadahadalka si aad ula hadasho saaxiib shaqo. Kamarada waxaad ku turjumi kartaa calaamadaha, warqadaha yaryar iyo tilmaamaha. Taleefanno badan, WhatsApp sidoo kale wuu turjumi karaa fariimaha. Taleefankaaga isticmaal oo keliya meel ammaan ah oo la oggol yahay. Marnaba agagaarka mashiinnada ama forklift-yada. Had iyo jeer marka hore weydii. App-yadu way khaldamaan. Waxyaabaha muhiimka ah, sida qandaraaskaaga, warqad ama tilmaan badbaado, sidoo kale qof ka codso inuu kuu sharxo. Ha qaadin sawirro waraaqaha shaqada ee sirta ah idan la'aan.",
    'c.translate.p': "Ma isticmaali karaa taleefankayga si aan wax u turjumo?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.s': "Madaxaagu wuxuu ku siiyey warqad tilmaamo badbaado ah oo Af-Holandiis ku qoran. Waxaad fahantaa ereyo yar oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.o1': "Weydii inaad isticmaali karto app turjumaad, oo weydii sharaxaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.o2': "Dheh “ja, ja” oo bilow shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.o3': "Sawir ka qaad oo u dir koox chat ah oo saaxiibbo ah, si ay kuu turjumaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.w': "App turjumaad ayaa kaa caawiya inaad si degdeg ah u fahanto, laakiin wuu khaldami karaa. Badbaadada, sharaxaad qof ka timaadda ayaa ah hubinta ugu fiican. Waraaqaha shaqadu waxay noqon karaan sir, sidaas darteed ha la wadaagin idan la'aan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood': "Hubi inaad fahantay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.b': "Taleefankaagu wuxuu hadalka u beddeli karaa qoraal (qoraal toos ah): Live Transcribe ee Android, Live Captions ee iPhone. Hubi luqadaha uu taleefankaagu taageero. Waxaad sidoo kale qof ka codsan kartaa inuu qoro, inuu ku tuso, ama inuu si tartiib ah u hadlo. Weydii inay jirto tilmaan sawirro leh, ama mid luqaddaada ku qoran. Kadib dib u sheeg waxa aad fahantay: “Dus ik moet eerst …?” Tani halkan waa caadi, waxayna ka hortagtaa khaladaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.p': "Marka waa inaan marka hore tiriyaa sanduuqyada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.s': "Saaxiib shaqo ayaa sharaxaysa sida mashiin cusub u shaqeeyo. Si degdeg ah ayay u hadlaysaa, ereyo qaarna waa kaa dhaafayaan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.o1': "Ka codso inay ku tusto ama qorto, oo dib ugu sheeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.o2': "Madaxa u ruxo oo dheh “ja, ja”, si aysan waqti u lumin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.o3': "Goor dambe keligaa isku day mashiinka oo eeg waxa dhacaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.w': "Tusidda, qoridda iyo dib u sheegiddu waa hubin degdeg ah. Saaxiibkaa shaqo wuu ku saxi karaa kahor inta aysan wax khaldamin. Halkan, tan waxaa loo arkaa taxaddar, ma aha gaabis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning': "Sii wad barashada, wax yar maalin walba", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.b': "Daqiiqado yar maalin walba ayaa ka faa'iido badan hal saac oo dheer toddobaadkii. Ereyada cusub ee shaqada ku kaydi app qoraal ah oo taleefankaaga ku jira. Dhegayso Af-Holandiis fudud, tusaale ahaan NOS Jeugdjournaal (wararka carruurta) ama podcast Af-Holandiis tartiib ah. Maktabado badan oo dadweyne ayaa leh Taalhuis: caawimaad bilaash ah oo Af-Holandiis ah, badanaa leh taalcafé (meel lagu celceliyo hadalka) ama saaxiib luqadeed (taalmaatje). Saaxiibbada shaqadu badanaa waxay u wareegaan Ingiriisi si ay kuu caawiyaan. Si naxariis leh uga codso inay kula hadlaan Af-Holandiis: dadka badankiisu waxay jecel yihiin inay wax caawiyaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.p': "Kaliya ila hadal Af-Holandiis, markaas si dhakhso ah ayaan u baranayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.s': "Saaxiibbadaada shaqadu had iyo jeer waxay u wareegaan Ingiriisi marka ay kula hadlayaan. Waxaad rabtaa inaad barato Af-Holandiis. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.o1': "U mahadnaq, oo ka codso inay kula hadlaan Af-Holandiis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.o2': "Waxba ha oran. Af-Holandiisku iskiis ayuu u iman doonaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.o3': "Adna Ingiriisi ku jawaab, maxaa yeelay taasi way edeb badan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.w': "Saaxiibbada shaqadu badanaa waxay u wareegaan Ingiriisi si ay u naxariistaan. Marka aad codsato Af-Holandiis, badankoodu way ku faraxsan yihiin inay ku caawiyaan. In aad maalin walba xoogaa ku hadasho shaqada waa mid ka mid ah hababka ugu dhakhsaha badan ee wax lagu barto.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.gossip': "Xan iyo baraha bulshada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.b': "Ka hadlidda saaxiib shaqo dabadiisa (roddelen) waxay waxyeellaysaa kalsoonida kooxda. Ma qof dhibaato kala qabtaa? La hadal qofkaas, ama madaxaaga. Online, xeerar la mid ah kuwa shaqada ayaa khuseeya. Ha dhejin wax ku saabsan saaxiibbada shaqada, macmiilada ama shirkadda idan la'aan. Taas waxaa ku jira sawirro, muuqaallo iyo fariimo. Madaxaagu wuu arki karaa waxa aad dhejiso, wuxuuna online ku jiri karaa sannado. Kooxo badan waxay leeyihiin koox chat (groepsapp) shaqada: ka dhig mid shaqada ku saabsan, hana la wadaagin sawirrada shaashaddeeda dad kale. La wadaagidda waxyaabaha gaarka ah ee saaxiib shaqo ama qof online ku jees jeesiddiisa sidoo kale waa cagajuglayn.",
    'c.gossip.p': "Taas online ma rabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.s': "Saaxiib shaqo ayaa ku duubay markaad ku simbiriirixatay dhulka qoyan. Wuxuu rabaa inuu muuqaalka dhigo TikTok. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o1': "Dheh “Nee, dat wil ik niet” oo ka codso inuu tirtiro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o2': "Qosol oo u oggolow inuu dhejiyo, si aadan u adkaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o3': "Ka codso inuu dhejiyo magacaaga la'aan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.w': "Badanaa, cidna looma oggola inuu muuqaal adiga ah online dhigo oggolaanshahaaga la'aan. In aad maya tiraahdo waa caadi, loo-shaqeeyahaaguna waa inuu tallaabo qaadaa marka saaxiibbada shaqadu online isku jees jeesaan. Haddii uu si kastaba u dhejiyo, u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': "Xadka la dhaafo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.b': "Grensoverschrijdend gedrag waa dhaqan ka gudba xadka qofka. Tusaale ahaan: taabasho aan la rabin, hadallo ama kaftan galmo ah, si joogto ah qof u fiirin, sawirro aan la rabin, hanjabaad ama qaylo. Wax kama jiro haddii qofka kale “kaftan ahaan u ulajeeday”: waxa muhiimka ah waa sida aad adigu u dareento. Haddii aad awoodo, si cad u sheeg inaad rabto in la joojiyo. Qor waxa dhacay, goorta, iyo cidda aragtay. U sheeg madaxaaga, la-taliyaha sirta (vertrouwenspersoon, haddii uu jiro) ama HR. Loo-shaqeeyahaagu waa inuu ku ilaaliyaa, lamana ciqaabi karo adiga sheegidda darteed. Ma aragtay in arrintan ku dhacday saaxiib shaqo? Weydii inuu fiican yahay, oo u soo bandhig inaad markhaati u noqoto.",
    'c.boundaries.p': "Waxaan rabaa inaad joojiso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.s': "Hoggaamiyaha kooxdaadu had iyo jeer gacanta ayuu dhabarka kaaga saaraa wuxuuna yiraahdaa waxaad tahay “qurux badan”. Taasi waxay kaa dhigaysaa mid aan raaxo dareemin. Isaga ayaa go'aamiya wareegyadaada shaqada. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o1': "Qor oo u sheeg vertrouwenspersoon (la-taliyaha sirta).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o2': "Waxba ha oran, maxaa yeelay isaga ayaa go'aamiya wareegyadaada shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o3': "Shaqada iska dhaaf adigoon cidna u sheegin sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.w': "Tani waa dhaqan aan la rabin, mana aha khaladkaaga. La-taliyaha sirtu wuxuu si qarsoodi ah kuu dhegaystaa wuxuuna kaa caawiyaa inaad doorato tallaabada xigta. Waad ilaalsan tahay marka aad sheegto. Waxaad sidoo kale la hadli kartaa HR.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.shelves': "Kuwa duugga ah hore u dhig", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.b': "Marka aad buuxinayso khaanadaha, eeg taariikhda ku qoran alaabta. Alaabta taariikhdeedu soo dhowdahay hore u dhig, tan cusubna gadaal. Macaamiishu waxay ka qaataan xagga hore, sidaas darteed alaabta duugga ah ayaa marka hore baxda. Alaab ma taariikhdeedu dhacday, mise way waxyeelloobtay? Ka qaad khaanadda oo weydii waxa lagu sameeyo. Jidadka ka dhig kuwo aan lahayn sanduuqyo iyo gaariyo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.p': "Maxaan ku sameeyaa alaabta taariikhdeedu dhacday?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.s': "Caano cusub ayaad khaanadda saaraysaa. Xagga hore weli waxaa yaal caano taariikhdoodu ka dhowdahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.o1': "Caanaha cusub gadaal dhig, caanaha duugga ahna hore.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.o2': "Caanaha cusub hore dhig, maxaa yeelay way ka cusub yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.o3': "Caanaha duugga ah iska tuur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shelves.w': "Macaamiishu waxay ka qaataan xagga hore. Marka alaabta duugga ahi marka hore baxdo, cunto yar ayaa la tuuraa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout': "Aqoonsiga khamriga iyo tubaakada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.b': "Uma iibin kartid khamri ama tubaako qof ka yar 18 sano: kani waa sharciga. Ma hubtid da'da macmiilka? Weydii aqoonsigiisa. Dukaanno badan waxay aqoonsi weydiiyaan qof kasta oo u eg mid ka yar 25. Aqoonsi ma jiro, mise wuu ka yar yahay 18? Markaas ma iibinaysid, oo edeb ayaad ku sii jiraysaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.p': "Aqoonsi la'aan ma iibin karo tan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.s': "Nin dhallinyaro ah ayaa rabo inuu iibsado biir. Wuxuu u eg yahay qiyaastii 17. Wuxuu yiri waa 19, laakiin aqoonsi ma sito. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.o1': "Dheh ma iibin kartid aqoonsi la'aan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.o2': "Iibi, maxaa yeelay wuxuu yiri waa 19.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.o3': "Iibi, laakiin hal gasacad oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.w': "Aqoonsi la'aan ma ogaan kartid da'diisa. Iibinta khamriga qof ka yar 18 waa ka soo horjeedaa sharciga, dukaankana waa la ganaaxi karaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting': "Vijfentwintig: marka hore 5, kadib 20", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': "Af-Holandiiska, 0 ilaa 12 mid kasta wuxuu leeyahay erey u gaar ah: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf. 13 ilaa 19 waxay ku dhammaadaan -tien: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Tobanaadka waxay ku dhammaadaan -tig: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig. 21 ilaa 99, marka hore waxaad sheegtaa lambarka ugu dambeeya: 25 waa vijfentwintig, “shan iyo labaatan”. Marka 47 waa zevenenveertig, 74-na waa vierenzeventig. Dertien iyo dertig ku dhowaad isku si ayay u dhawaaqaan: dhegayso dhammaadka. Ma hubtid? Lambarrada mid mid dib ugu sheeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': "Afar, toddoba? Marka afartan iyo toddoba?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': "Madaxaagu wuxuu yiri: “Ga naar gang zevenenveertig.” Waa jidkee?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': "Jidka 47.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': "Jidka 74.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': "Jidka 40.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': "“Zevenenveertig” waa “toddoba iyo afartan”: marka hore 7, kadib 40. Marka waa jidka 47. Dad badan oo cusub ayaa maqla 74, oo u taga jid khaldan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': "Half acht waa 7:30", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.b': "Af-Holandiiska, “half” waxay u tirisaa saacadda xigta: half acht waa 7:30, ma aha 8:30. Kwart over acht waa 8:15, kwart voor acht-na waa 7:45. Adigu hubi saacadahaaga: waqtiga dhammaadka laga jaray waqtiga bilowga, laga jaray nasashada. Nasashada badanaa lacag laguma bixiyo. Maalin walba qor saacadahaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.p': "Half acht? Marka nus saac kahor siddeedda?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.s': "Madaxaagu wuxuu yiri: “Morgen begin je om half negen.” Berri goormaad bilaabaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.o1': "Saacadda 8:30.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.o2': "Saacadda 9:30.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.o3': "Saacadda 8:00.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.w': "“Half negen” macnaheedu waa nus saac kahor sagaalka: 8:30. Dad badan oo cusub waxay u maleeyaan inay tahay 9:30, oo saac ayay daahaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures': "Si caqli ah u tiri, cabbir, ha qiyaasin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.b': "Sanduuqyo badan oo la tirinayo? Tiri sanduuqyada hal lakab ku jira, iyo tirada lakabyada. Kadib isku dhufo: 8 sanduuq hal lakab iyo 5 lakab waa 40 sanduuq. Alaabta nadiifinta, cabbir qaddarka calaamaddu sheegayso. Wax badan ma fiicna: wuxuu waxyeellayn karaa maqaarkaaga wuxuuna ku kacaa lacag. Lambar ma hubtid? Mar kale tiri, ama weydii. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.p': "Laba jeer ayaan tiriyey.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.s': "Baaleet wuxuu leeyahay 6 lakab. Lakab kasta wuxuu leeyahay 8 sanduuq. Madaxaagu wuxuu ku weydiiyey immisa sanduuq ayaa jira. Maxaad dhahaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.o1': "48 sanduuq.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.o2': "14 sanduuq.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.o3': "Qiyaastii 50, waxaan u malaynayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.w': "6 lakab oo 8 sanduuq ah waa 6 jeer 8: 48. Tirinta hal lakab iyo isku dhufashadu waa degdeg, lambar dhab ahina wuu ka fiican yahay qiyaas.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.aihelp': "AI wuu caawiyaa, qof ayaa hubiya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.b': "App-yada AI iyo chatbot-yada, sida ChatGPT, waxay turjumi karaan, sharxi karaan warqad ama kaa caawin karaan qoritaanka fariin. Taasi waa faa'iido. Laakiin AI mararka qaarkood wuu khaldamaa, haddana wuxuu u ekaadaa mid aad u hubaal ah. Ma waxay ku saabsan tahay qandaraaskaaga, mushaharkaaga, daawada ama badbaadada? Markaas had iyo jeer jawaabta la hubi qof. Tusaale ahaan madaxaaga, HR ama Juridisch Loket.",
    'c.aihelp.p': "Tani ma sax baa? Ma ila eegi kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.s': "Chatbot ayaad wax ka weydiisay qandaraaskaaga. Wuxuu yiri lacag fasax ma helaysid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.o1': "HR ama Juridisch Loket ka codso inay hubiyaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.o2': "Rumayso: chatbot-ku wuxuu u eg yahay mid aad u hubaal ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.o3': "Waxba ha oran oo iska illow.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aihelp.w': "Chatbot wuu ku khaldami karaa xeerarka iyo qandaraasyada. Holland ku dhowaad shaqaale kasta wuxuu helaa lacagta fasaxa. Qof yaqaan xeerarka ayaa hubin kara.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate': "Ka fikir kahor intaadan qorin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.b': "Waxa aad ku qorto chatbot waa la kaydin karaa, waxaana isticmaali karta shirkadda samaysay. Sidaas darteed waligaa ha qorin BSN-kaaga, password ama macluumaadka bangigaaga. Ha gelin magacyo ama sawirro macaamiil, bukaanno ama saaxiibbo shaqo, ama waraaqo shaqada ka yimid. Loo-shaqeeyayaal badan waxay leeyihiin xeerar ku saabsan AI. Marka hore weydii inaad u isticmaali karto shaqadaada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.p': "Ma u isticmaali karaa AI tan?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.s': "Waxaad rabtaa in chatbot uu kuu qoro warbixin ku saabsan macmiil. Warbixinta waxaa ku jira magaca iyo cinwaanka macmiilka. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.o1': "Marka hore weydii, oo ka saar magaca iyo cinwaanka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.o2': "Wax walba geli chatbot-ka: way ka dhakhso badan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.o3': "Warbixinta u dir saaxiib si uu u hubiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiprivate.w': "Magacyada iyo cinwaannadu waa xog shakhsi ah. Si fudud uma tagi karaan shirkad kale. Loo-shaqeeyahaagu wuu yaqaan app-yada la oggol yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake': "Codad iyo muuqaallo been ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.b': "Iyadoo AI la isticmaalayo, dambiilayaashu waxay koobiyeyn karaan cod waxayna samayn karaan sawirro iyo muuqaallo been ah. Wicitaan ama fariin u eg madaxaaga, bangigaaga ama qof qoyskaaga ka mid ah waxay noqon kartaa been. Taxaddar marka ay jiraan degdeg, lacag iyo lambar cusub. Taleefanka xir, oo adigu dib ugu wac lambarka aad taqaanid. Bangi dhab ah, loo-shaqeeye ama booliisku waligood kuma weydiistaan koodhadhkaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.p': "Taleefanka ayaan xirayaa oo anigu dib ayaan u wacayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.s': "Taleefankaaga ayaa dhacaya. Cod u eg sida madaxaaga oo kale ayaa yiri: “Hadda bixi biilkan, waa degdeg.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o1': "Taleefanka xir oo adigu dib u wac madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o2': "Si degdeg ah u bixi: waa madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o3': "Sii koodhka bangigaaga, si madaxaagu u bixiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.w': "Codka waa lagu koobiyeyn karaa AI. Degdeg iyo lacag oo wada jira waa calaamad digniin ah. Dib u wacidda lambar aad taqaanid waa hubin degdeg ah oo ammaan ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan': "Yaa go'aamiyey tan?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.b': "Shirkado sii badanaya ayaa u oggolaada app ama kumbuyuutar inuu wax go'aamiyo. Tusaale ahaan, wuxuu sameeyaa jadwalka shaqada ama wuxuu ku tiriyaa xawaarahaaga iskaanka. Waxaad weydiin kartaa macluumaadka adiga lagaa ururiyo. Ma jiraa go'aan weyn oo adiga kugu saabsan, sida saacado ka yar, digniin ama shaqo ka eryid? Weydii cidda go'aamisay. Ma kumbuyuutar keligiis ayaa go'aankaas gaaray? Markaas waxaad codsan kartaa in qof mar kale hubiyo oo kuu sharxo. Saacadahaaga adigu qor. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.",
    'c.aiplan.p': "Qof ma eegi karaa tan?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.s': "App-ka qorshayntu wuxuu ku siinayaa saacado aad u yar bisha soo socota. Cidna kuuma sheegayso sababta. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.o1': "Qof ka codso inuu kuu sharxo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.o2': "Aqbal: app-ku had iyo jeer waa sax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.o3': "Weydii chatbot-ka app-ka ku jira sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.w': "App-yadu way khaldamaan, mana yaqaanaan wax walba oo adiga kugu saabsan. Waxaad weydiisan kartaa sharaxaad, qof ayaana mar kale eegi kara.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.harvest': "Xawaaraha iyo mushaharka xabbadkiiba", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.b': "Guriga dhirta badanaa waxaad ku shaqeysaa xawaare go'an (tempo). Loo-shaqeeyayaasha qaar waxay lacag ku bixiyaan sanduuq kasta, saf kasta ama kiilo kasta: mushahar xabbadkiiba (stukloon). Xitaa mushahar xabbadkiiba, saacad kasta oo aad shaqeyso waa inaad hesho ugu yaraan mushaharka ugu yar ee sharciga ah. Qaddarka ku hubi rijksoverheid.nl. Maalin kasta qor saacadahaaga iyo sanduuqyadaada, oo la barbar dhig warqadda mushaharkaaga. Si dhakhso ah u shaqeyntu waa wanaagsan tahay, laakiin badbaadadu ayaa ka horreysa. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.p': "Immisa sanduuq ayaan maanta buuxiyey?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.s': "Waxaa laguu bixiyaa sanduuq kasta. Toddobaadkan waxaad heshaa wax ka yar mushaharka ugu yar saacaddiiba. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.o1': "Tus liiskaaga saacadaha iyo sanduuqyada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.o2': "Waxba ha oran, oo si ka dhakhso badan u shaqee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.o3': "Aqbal: taasi waa caadi marka mushaharku xabbadkiiba yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.harvest.w': "Mushahar xabbadkiiba xitaa, saacad kasta oo aad shaqeysay waa inaad hesho ugu yaraan mushaharka ugu yar. Liiskaaga saacadaha iyo sanduuqyada ayaa kaa caawinaya inaad muujiso waxa aad qabatay. Haddii aan la saxin, weydii caawimaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe': "Kulayl iyo daawooyinka la buufiyo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.b': "Guriga dhirta aad buu u kululaan karaa, xitaa gu'ga. Biyo badanaa cab, xitaa ka hor intaadan harraadin, oo nasashadaada ku qaado meel qabow. Ma dawakhaysaa, ma xanuunsan tahay, mise madax-xanuun ayaa ku qabtay? Jooji oo qof u sheeg. Dhirta mararka qaarkood waxaa lagu buufiyaa kiimikooyin (spuitmiddelen). Guriga dhirta ee hadda la buufiyey badanaa calaamad ayaa albaabka ku taal. Ha gelin ilaa madaxaagu kuu sheego inay mar kale ammaan tahay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.p': "Ma ka shaqeyn karaa guriga dhirtan hadda?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.s': "Guri dhireed ayaa la buufiyey saaka. Calaamad ayaa albaabka ku dheggan. Saaxiibka shaqada ayaa yiri: “Kaalay, waa daqiiqad uun.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.o1': "Bannaanka joog oo weydii goorta ay ammaan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.o2': "Si degdeg ah u gal oo neefta qabso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.o3': "Gal, kadibna gacmahaaga si fiican u dhaq.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.w': "Daawooyinka dhirta lagu buufiyo waxay dhaawici karaan maqaarkaaga, indhahaaga iyo sambabadaada, xitaa marka aadan waxba urin. Buufinta kadib waxaa jira waqti sugid ah ka hor inta aan dadku mar kale gelin. Madaxaaga ayaa og goorta uu dhammaado.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'l.permit': "Waraaqo, is-dhexgal iyo shaqadaada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.papieren': "waraaqaha (dukumentiyada)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkvergunning': "ruqsadda shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werknemer': "shaqaalaha (waxaad u shaqeysaa loo-shaqeeye)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zzper': "qofka iskiis u shaqeysta (adigu naftaada ayaad u shaqeysaa)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.inburgering': "is-dhexgalka (koorsada iyo imtixaannada dadka cusub)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.taalles': "fasalka luqadda", // nieuw, nalezen // nagelezen AI 22 nov
    's.permit.1': "Waraaqahayga ma halkan ku shaqeyn karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.permit.2': "Ma shaqaale baan ahay mise qof iskiis u shaqeysta?", // nieuw, nalezen // nagelezen AI 22 nov
    's.permit.3': "Waxaan ahay shaqaale la yeero marka loo baahdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.q': "Ma shaqeyn kartaa Talaadada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.a': "Maya, markaas waxaan leeyahay fasalka luqadda. Arbacada waan awoodaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.kids': "Carruurta iyo shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwanger': "uur leh", // nieuw, nalezen // nagelezen AI 22 nov
    'w.kinderopvang': "xannaanada carruurta", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ophalen': "soo qaadid (u tag oo soo kaxee qof)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ziekkind': "ilmo xanuunsan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ouderschapsverlof': "fasaxa waalidnimada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zorgverlof': "fasaxa daryeelka (waqti fasax ah si aad u daryeesho qof qoyska ka mid ah oo xanuunsan)", // nieuw, nalezen // nagelezen AI 22 nov
    's.kids.1': "Ilmahaygu waa xanuunsan yahay. Waa inaan soo qaado.", // nieuw, nalezen // nagelezen AI 22 nov
    's.kids.2': "Ma qaadan karaa fasax degdeg ah?", // nieuw, nalezen // nagelezen AI 22 nov
    's.kids.3': "Loo-shaqeeyahaygu ma sii bixinayaa mushaharkayga?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.q': "Maxaad hadda u tagaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.a': "Xannaanada carruurta ayaa soo wacday. Wiilkayga ayaa qandho qaba.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.body': "Jirka iyo xanuunka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.hoofd': "madaxa (jirka)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.rug': "dhabarka", // nieuw, nalezen // nagelezen AI 22 nov
    'w.arm': "cududda (gacanta)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.hand': "gacanta (calaacasha)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.buik': "caloosha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.oog': "isha", // nieuw, nalezen // nagelezen AI 22 nov
    's.body.1': "Gacantayda ayaa i xanuunaysa.", // nieuw, nalezen // nagelezen AI 22 nov
    's.body.2': "Si fiican uma dareemayo.", // nieuw, nalezen // nagelezen AI 22 nov
    's.body.3': "Waxaan ku dhacay cududdayda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.q': "Xaggee kaa xanuunaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.a': "Dhabarka. Waxaan qaaday sanduuq culus.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.jobends': "Marka shaqadaadu dhammaato", // nieuw, nalezen // nagelezen AI 22 nov
    'w.eindafrekening': "xisaabta ugu dambeysa (mushaharkaaga ugu dambeeya marka shaqo dhammaato)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opzeggen': "joojin (qandaraas), baajin", // nieuw, nalezen // nagelezen AI 22 nov
    'w.uitschrijven': "iska diiwaan-tirid (magacaaga ka saar liis)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.sleutel': "furaha", // nieuw, nalezen // nagelezen AI 22 nov
    'w.verhuizen': "guurid (u guur guri kale)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.busje': "baabuurka yar (bas yar)", // nieuw, nalezen // nagelezen AI 22 nov
    's.jobends.1': "Lacagta fasaxa iyo maalmahayga fasaxa ah ma la ii bixinayaa?", // nieuw, nalezen // nagelezen AI 22 nov
    's.jobends.2': "Waxaan talo ka weydiinayaa Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    's.jobends.3': "Caymis caafimaad oo cusub anigu ayaan iska diyaarinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.q': "Shaqadaadu waxay dhammaanaysaa Jimcaha. Markaas waa inaad guriga sidoo kale ka baxdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.a': "Waa maxay muddada ogeysiiska ee qandaraaskayga kirada?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details': "Xogtaada: si sax ah u bixi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.b': "Bilowga shaqada, waxaad bixisaa xogtaada. Taas waa magacaaga, cinwaankaaga, lambarka taleefanka, taariikhda dhalashada iyo BSN. Magacaaga si tartiib ah u higgaadi, xaraf xaraf. Kadib ka hubi magacaaga qandaraaskaaga iyo warqadda mushaharkaaga. Khalad ku jira magacaaga ama BSN wuxuu dhibaato ku keeni karaa mushaharkaaga ama canshuurtaada. Cinwaan ama lambar taleefan oo cusub? U sheeg loo-shaqeeyahaaga.", // nagelezen AI 22 nov
    'c.details.p': "Aan higgaadiyo: A, L, I.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.s': "Taleefanka, xafiiska shaqo-qorista ayaa qoraya magacaaga dambe. Waxaad maqashaa inay si khaldan u qorayaan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.o1': "Magacaaga si tartiib ah u higgaadi oo ka codso inay dib kuugu akhriyaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.o2': "Waxba ha oran: khalad yar oo magacaaga ku jira dhib ma leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.o3': "Taleefanka dhig, oo rajee inay khaladka hadhow helaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.details.w': "Magacaagu waa inuu isku mid ka ahaadaa qandaraaskaaga, warqadda mushaharkaaga iyo aqoonsigaaga. Markaas mushaharkaaga iyo canshuurtaadu si sax ah ayay u socdaan. Higgaadinta iyo dib u akhrintu waa hubin degdeg ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates': "Taariikhaha: maalinta ayaa hore u timaada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.b': "Af-Holandiiska, maalinta ayaa ka horreysa bisha: 3-6 waa 3 Juun, ma aha 6 Maarso. “Tot en met” macnaheedu waa in maalinta ugu dambeysa sidoo kale la tiriyo. Maalmaha iyo bilaha waxaa lagu qoraa xaraf yar: maandag, juni. Ma hubtid taariikh? Weydii, oo dib ugu celi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.p': "Ma waxaad ula jeeddaa 3 Juun?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.s': "Jadwalkaaga waxaa ku qoran: “Vrij: 3-6 tot en met 5-6”. Goorma ayaad fasax tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.o1': "3, 4 iyo 5 Juun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.o2': "3 iyo 4 Juun oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.o3': "Laga bilaabo 6 Maarso ilaa 6 May.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.w': "Maalinta ayaa hore u timaada, kadib bisha: 3-6 waa 3 Juun. “Tot en met” macnaheedu waa in 5 Juun sidoo kale la tiriyo, sidaas darteed waxaad fasax tahay saddex maalmood.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit': "Shaqo iyo is-dhexgal", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.b': "Ma waajib baa kugu ah is-dhexgalka (inburgering)? U sheeg loo-shaqeeyahaaga, oo u sheeg gemeente inaad shaqeyso. Goor hore weydii in fasallada luqaddu la jaanqaadi karaan jadwalkaaga. Ma hubtid inaad halkan ka shaqeyn karto? Hubi ka hor intaadan bilaabin, tusaale ahaan IND, UWV ama VluchtelingenWerk. Ma lagu weydiiyey inaad isu diiwaangeliso qof iskiis u shaqeysta (zzp’er) shaqadan dartiis? Marka hore talo weydii. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.p': "Talaadada waxaan leeyahay fasalka luqadda. Jadwalkaygu ma tixgelin karaa taas?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.s': "Fasalkaaga luqaddu waa subaxa Talaadada. Jadwalkaaga cusub wuxuu leeyahay inaad markaas shaqeyso. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.o1': "Weydii madaxaaga inuu beddelo jadwalka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.o2': "Fasalka ka maqnow: shaqada ayaa hore u marta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.o3': "Talaadada guriga joog oo waxba ha oran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.w': "Is-dhexgalkaagu sidoo kale waa waajib. Loo-shaqeeyayaal badan ayaa caawiya marka ay goor hore ogaadaan. Sidoo kale gemeente waxay kaa caawin kartaa inaad qorshahaaga la jaanqaadsiiso shaqadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids': "Ilmahaagu waa xanuunsan yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.b': "Ilmahaagu si lama filaan ah ma u xanuunsaday? Isla markiiba u sheeg loo-shaqeeyahaaga. Saacadaha ama maalmaha ugu horreeya waxaad qaadan kartaa fasax degdeg ah (calamiteitenverlof), loo-shaqeeyahaaguna wuu sii bixinayaa mushaharkaaga. Ilmahaagu muddo dheer ma u baahan yahay daryeel? Markaas waxaad codsan kartaa fasax daryeel (zorgverlof). Uur ma leedahay? Loo-shaqeeyahaaga looma oggola inuu shaqada kaa eryo sababtaas darteed. Waqtigeeda weydii fasaxa uurka iyo fasaxa waalidnimada (ouderschapsverlof). Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.p': "Ilmahaygu waa xanuunsan yahay. Maanta ma goor hore bixi karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.s': "Xannaanada carruurta (kinderopvang) ayaa shaqada kuugu soo wacday. Ilmahaagu qandho ayuu qabaa oo waa inuu guriga aadaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.o1': "U sheeg madaxaaga, oo weydii fasax degdeg ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.o2': "Iska tag adigoon waxba oran, oo berri sharax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.o3': "Shaqada sii joog, oo ilmahaagu ha sugo ilaa shaqadaadu dhammaato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.w': "Ilmo xanuunsan waa xaalad degdeg ah oo guriga ah. Marka aad marka hore u sheegto madaxaaga, wuxuu qorsheyn karaa shaqada. Fasaxa degdega ah waxaa loogu talagalay xaaladahan oo kale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body': "Sheeg waxa dhacay iyo meesha ku xanuunaysa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.b': "Dhakhtarka, u sheeg waxa dhacay iyo meesha ku xanuunaysa. Tusaale ahaan: “Ik ben gevallen. Mijn arm doet pijn.” Sidoo kale sheeg inta uu xanuunku ku hayey. Uma baahnid inaad qiyaasto waxa ku haya: dhakhtarka ayaa hubinaya taas. Ma shaqada ayay ku dhacday? Isla maalintaas u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.p': "Waan dhacay. Cududdayda ayaa i xanuunaysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.s': "Shaqada waxaad ka qaadday sanduuq culus. Hadda dhabarkaaga ayaa aad kuu xanuunaya. Waxaad joogtaa dhakhtarka qoyska (huisarts). Maxaad leedahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o1': "Meesha ku xanuunaysa, iyo waxa dhacay: waxaad qaadday sanduuq culus.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o2': "Kaliya inaadan fiicnayn, waxba ka badan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o3': "Magaca cudur aad internetka ka heshay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.body.w': "Marka aad sheegto meesha ku xanuunaysa iyo waxa dhacay, dhakhtarku si dhakhso ah ayuu kuu fahmaa. Dhakhtarka ayaa hubiya waxa ay tahay. Ma shaqada ayay ku dhacday? Sidoo kale u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends': "Shaqadaadu way dhammaanaysaa: maxaa kale oo joogsanaya?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.b': "Marka shaqadaadu dhammaato, hubi xisaabta ugu dambeysa (eindafrekening). Maalmaha fasaxa ee aadan isticmaalin iyo lacagta fasaxa badanaa waa lala bixiyaa. Guriga, caymiska caafimaadka ama baabuurka yar ee xafiiska shaqo-qorista waxay joogsan karaan isla waqtigaas. Waqtigeeda iska diyaari caymis caafimaad oo adiga kuu gaar ah. Qandaraaska kiradaadu wuxuu leeyahay xeerar u gaar ah: talo weydii ka hor intaadan guriga ka bixin. Ma guuraysaa, mise Holland ayaad ka tagaysaa? U sheeg gemeente. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.p': "Goorma ayaan helayaa xisaabta ugu dambeysa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.s': "Shaqadaadu waxay dhammaanaysaa Jimcaha. Caymiskaaga caafimaadku wuxuu maraa xafiiska shaqo-qorista. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.o1': "Weydii goorta uu joogsanayo, oo waqtigeeda iska diyaari mid adiga kuu gaar ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.o2': "Waxba: caymisku iskiis ayuu u sii socdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.o3': "Sug ilaa aad xanuunsato, kadibna markaas diyaari.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.w': "Caymiska xafiiska shaqo-qorista badanaa wuu joogsadaa marka shaqadaadu joogsato. Marka aad ku nooshahay ama ka shaqeyso Holland, badanaa waa inaad haysataa caymis caafimaad. Haddii aad waqtigeeda diyaariso, caymis ayaad sii haysanaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'l.healthy': "Caafimaad u leh shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "seexasho", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "quraacda", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "dhaqdhaqaaq, firfircoonaan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "daallan", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "daroogada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "niyad jabsan (murugo muddo dheer)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': "Maanta aad baan u daallanahay.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "Mar walba marka hore waan quraacdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "Nasashada waxaan aadaa socod gaaban.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': "Ma rabtaa kiniin? Markaas waad soo jeedaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "Maya, mahadsanid. Ma shaqeeyo anigoo maandooriye qaatay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': "Marka hore akhri, kadib bilow", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.b': "Ka hor intaadan bilaabin, akhri warqadda shaqada (werkbon) ama hawsha ku jirta app-ka. Hubi cinwaanka, hawsha iyo tirada alaabta. Wax aan caddayn ma jiraan? Weydii ka hor intaadan bilaabin, ha sugin bartamaha. Kadib diyaari qalabkaaga iyo agabkaaga. Taasi waqti ayay kuu keydisaa, khaladaad yarna waad samaysaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.p': "Warqadda shaqada waxaa ku qoran toban sanduuq. Taasi ma sax baa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': "Warqaddaada shaqada waxaa ku qoran: rinji qolka 3. Saaxiibka shaqada ayaa yiri waa qolka 5. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "Weydii madaxaaga qolka saxda ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "Rinji qolka 3, maxaa yeelay warqadda shaqada ayaa sidaas ku qoran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "Labada qolba rinji, markaas waad hubtaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "Marka laba shay aysan is waafaqin, waad hubisaa ka hor intaadan bilaabin. Su'aal gaaban waqti ka yar ayay qaadataa marka loo eego shaqada oo dib loo sameeyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': "Sheeg waxa dhammaaday, iyo waxa aan dhammaan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.b': "Shaqadaadu ma dhammaato marka aad joojiso. Marka hore nadiifi meeshaada iyo qalabkaaga. Kadib qof weydii inuu hubiyo shaqadaada. U sheeg madaxaaga waxa dhammaaday iyo waxa aan dhammaan. Wax ma khaldameen, mise wax ma jabeen? Hadda sheeg, ha sugin berri. Ogeysiinta bixitaanku waa qayb ka mid ah shaqadaada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.p': "Qolka afraad weli ma dhammaan. Albaabku waa xirnaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': "Waxaad nadiifisay shan qol. Qolka 4 waa xirnaa. Shaqadaadu way dhammaanaysaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o1': "U sheeg madaxaaga: qolka 4 ma dhammaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o2': "Guriga aad: qolka 4 waa xirnaa, eed adiga kuma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "Liiska ku qor “wax walba waa dhammaadeen”.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.w': "Madaxaaga ayaa qorsheeya shaqada. Marka uu ogaado in qolka 4 aan la dhammeyn, qof kale ayuu diri karaa. Markaas macmiil ma helo qol wasakh ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "Indhaha, dhegaha iyo dabka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': "Shiididda, miinshaaridda iyo daloolinta waxay keenaan dhimbiil, jajab yar iyo buuq badan. Xiro muraayadaha badbaadada iyo ilaaliyaha maqalka, xitaa shaqo gaaban. Marka buuqu aad u badan yahay, loo-shaqeeyahaagu waa inuu ku siiyaa ilaaliyaha maqalka. Dhimbiishu dab ayay bilaabi kartaa. Alxanka, ama shiidid u dhow waxyaabo guban kara, waxaa jira xeerar dheeraad ah (heet werk): weydii ka hor intaadan bilaabin. Shaqadaada kadib, nadiifi jajabka birta. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "Waxaan aadayaa inaan shiido. Aaway ilaaliyaha maqalku?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': "Waa inaad shiiddo gabal yar oo bir ah. Waxay qaadanaysaa hal daqiiqo. Muraayadahaaga badbaadadu waxay ku jiraan qolka kale. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "Marka hore soo qaado muraayadahaaga, xitaa hal daqiiqo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "Ku shiid indhahaaga oo badh xiran, waa degdeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "Gacantaada kale indhahaaga hor dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "Dhimbiil ama jajab bir ah oo ishaada gala wuxuu dhaawici karaa ishaada weligeed. Taasi waxay ku dhici kartaa hal ilbiriqsi. Muraayadaha badbaadadu way caawiyaan, xitaa shaqo gaaban.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "Koronto: weligaa si fudud ha u qaadan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': "Weligaa ha ka shaqeyn wax koronto ku jirto (onder spanning). Marka hore saaxiib shaqo oo tababaran ayaa ammaan ka dhiga: wuxuu damiyaa korontada oo hubiyaa. Kaliya dadka leh tababarka saxda ah ayaa samayn kara tan. Ma aragtaa fiilo ama fiish jaban? Ha isticmaalin, oo isla markiiba u sheeg madaxaaga. Ma hubtid in korontadu demsan tahay? Markaas way shidan tahay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "Waxaan arkaa fiilo jaban. Yaa eegi kara?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': "Waa inaad laambad sudhato. Saaxiibka shaqada ayaa yiri: “Korontada waa la damiyey, waxaan u malaynayaa.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "Weydii saaxiib shaqo oo tababaran inuu hubiyo in korontadu demsan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "Bilow, laakiin xiro gacmo-gashi qaro weyn marka aad taabanayso fiilooyinka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "Nalka shid oo dami si aad u hubiso in korontadu demsan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': "“Waxaan u malaynayaa” kuguma filna korontada. Koronto ku qabata way ku dili kartaa. Saaxiib shaqo oo tababaran ayaa hubiya in aysan koronto jirin, kadibna waad bilaabi kartaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage': "Ammaan baabuurka hoostiisa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': "Weligaa ha gelin baabuur hoostiisa oo kaliya ku taagan jaag. Baabuurku waa inuu si adag ugu taagan yahay wiishka ama tiirarka. Saliid daadatay waxay dhulka ka dhigtaa mid siibasho leh: isla markiiba nadiifi. Saliidda duugga ah, baytariyada iyo alaabta nadiifinta waa qashin khatar ah. Waxay aadaan meel gaar ah, weligood qashinka caadiga ah ama biyo-mareenka ma aadaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "Dhulka saliid ayaa ku taal. Waan nadiifinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': "Waa inaad eegto baabuur hoostiisa oo kaliya ku taagan jaag. Saaxiibka shaqada ayaa yiri: “Waa hagaag, dhaqso.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.o1': "Sug wiishka ama tiirarka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.o2': "Si degdeg ah hoosta u gal, lugaha bannaanka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.o3': "Saaxiibka shaqada weydii inuu baabuurka qabto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.w': "Jaaggu wuu sibiibixan karaa. Baabuurku aad buu u culus yahay, hoostiisana si dhakhso ah ugama bixi kartid. Tiirarka ama wiishku baabuurka meeshiisa ayay ku hayaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': "Shaqo dheeraad ah? Marka hore weydii macmiilka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.b': "Ma heshaa dhibaatooyin ka badan waxa warqadda shaqada ku qoran? Ha iska hagaajin. Macmiilku waa inuu marka hore oggolaadaa shaqada dheeraadka ah iyo kharashka. Madaxaaga ama xafiiska adeegga ayaa wacaya macmiilka. Wadis tijaabo waxaa la sameeyaa oggolaansho keliya, iyo liisan darawalnimo oo ansax ah keliya. Qor waxa aad samaysay iyo qaybaha aad isticmaashay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.p': "Waxaan arkaa dhibaato kale. Yaa wacaya macmiilka?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': "Waxaad beddelaysaa saliidda baabuur. Bareegyada sidoo kale way xun yihiin. Waa inuu diyaar noqdaa saacad gudaheed. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o1': "U sheeg madaxaaga, si uu u waco macmiilka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "Bareegyada sidoo kale hagaaji, badbaado dartiis.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o3': "Waxba ha oran: kuma qorna warqadda shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.w': "Macmiilka ayaa lacagta bixiya, sidaas darteed macmiilka ayaa go'aamiya. Oggolaanshihiisa la'aantiis, garaashku si fudud uma samayn karo shaqo dheeraad ah. Bareegyada xun waa khatar, sidaas darteed in qof loo sheego waa muhiim.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': "Marka hore saxiix, kadib bilow", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.b': "Entree gudaheeda waxaad wax badan ku barataa shirkad: tababarkaaga shaqada (stage, ama bpv). Ka hor intaadan bilaabin, adiga, dugsiga iyo shirkaddu waxaad saxiixdaan heshiis: POK. Shirkadda, tababaraha goobta shaqada (praktijkopleider) ayaa ku caawiya. Dugsiga, hagaha tababarka (stagebegeleider) ayaa ku caawiya. Ma xanuunsan tahay? Wac shirkadda ka hor waqtiga aad bilaabayso, sidoo kale u sheeg dugsiga. Xeerarku way ku kala duwan yihiin dugsi kasta: weydii hagahaaga tababarka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "Waxaan bilaabayaa kaliya marka heshiiska tababarka la saxiixo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': "Shirkaddu waxay kaa codsatay inaad berri bilowdo. POK-ga weli lama saxiixin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "Weydii hagahaaga tababarka inuu marka hore diyaariyo POK-ga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "Berri bilow, oo POK-ga saxiix marka aad waqti hesho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "Bilow, laakiin dugsiga weli ha u sheegin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "POK-gu wuxuu sheegaa waxa aad baranayso iyo cidda ku caawinaysa. POK la saxiixay la'aantiis, tababarkaagu laga yaabaa inuusan u tirsanin diblomaddaada. Sidaas darteed waad saxiixdaa ka hor intaadan bilaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': "Weydii jawaab-celin, iyo tusaale", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.b': "Tababarkaaga shaqada, dadku waxay kuu sheegaan waxa si fiican u socda iyo waxa ka fiicnaan kara: jawaab-celin. Taasi waa caadi, waxayna kaa caawisaa inaad wax barato. Ma fahmin? Weydii tusaale. Adiguna weydii jawaab-celin, tusaale ahaan toddobaadkii hal mar. Wax ma si dhab ah ugu khaldan yihiin tababarkaaga? Marka hore la hadal tababaraha goobta shaqada. Taasi ma caawin? Markaas u tag hagaha tababarka ee dugsiga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "Maxaa si fiican u socday, maxaase ka fiicnaan kara?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': "Tababarahaaga goobta shaqada ayaa yiri: “Waa inaad si taxaddar badan u shaqeysaa.” Ma garanaysid waxa uu ula jeedo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "Weydii tusaale waxa ay tahay inaad si kale u samayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': "Haa dheh, oo rajee inaad adigu ogaato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "Hadda kadib si aad u tartiib ah u shaqee, si aan waxba u khaldamin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "Tusaale leh, waad garanaysaa waxa aad beddeli lahayd. Weydiintu waxay muujinaysaa inaad rabto inaad wax barato. Tababarayaashu taas way jecel yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "Yaa codeyn kara?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': "Holland waxaad ku doorataa cidda go'aamisa, adigoo codeynaya. Magaaladaada waxaa go'aamiya gemeenteraad. Tweede Kamer ayaa sameeya sharciyada dalka oo dhan. Haddii aad haysato dhalashada Holland, waxaad codeyn kartaa doorasho kasta, laga bilaabo 18 jir. Doorashada gemeenteraad dad ka badan ayaa codeyn kara. Dadka ka yimid waddan kale oo EU ah oo halkan deggan way codeyn karaan. Dadka ka yimid meel ka baxsan EU way codeyn karaan kadib 5 sano oo joogitaan sharci ah. Kaarka codeynta (stempas) waxaa kuu soo dira gemeente. La imow isaga iyo aqoonsigaaga. Ma hubtid inaad codeyn karto? Weydii gemeente.", // nagelezen AI 22 nov
    'c.council.p': "Ma u codeyn karaa gemeenteraad?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': "Waxaad ka timid Marooko, waxaadna halkan si sharci ah u deggenayd lix sano, adigoon haysan dhalashada Holland. Maxaa run ah?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o1': "Waxaad u codeyn kartaa gemeenteraad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "Waxaad sidoo kale u codeyn kartaa Tweede Kamer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "Baasaboor Holland la'aantiis ma codeyn kartid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.w': "Kadib 5 sano oo joogitaan sharci ah, waxaad u codeyn kartaa gemeenteraad. Tweede Kamer, waxaad u baahan tahay dhalashada Holland.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "Aqoonsigaaga iyo xuquuqdaada", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': "Laga bilaabo 14 jir, waa inaad tusto aqoonsigaaga marka booliisku ku weydiiyo. Sidaas darteed mar walba wado. Ma heshay warqad, tusaale ahaan mid ka timid gemeente ama UWV? Kuma raacsanid go'aanka ku jira? Markaas waxaad qoraal ahaan u gudbin kartaa diidmo (bezwaar maken). Samee ka hor taariikhda warqadda ku qoran. Booliska iyo garsooraha waa inay qof walba si siman ula dhaqmaan. Ma lagu xiray? Waxaad codsan kartaa qareen. Juridisch Loket ayaa bixiya talo bilaash ah.", // nagelezen AI 22 nov
    'c.police.p': "Kuma raacsani go'aankan. Waxaan gudbinayaa diidmo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': "Waxaad warqad ka heshay gemeente. Kuma raacsanid go'aankooda. Warqaddu waxay leedahay waxaad haysataa lix toddobaad. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "Qor warqad diidmo ah, ka hor taariikhda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "Hal mar wac, oo sug ilaa ay dib kuu soo wacaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "Sug: lix toddobaad kadib, iskiis ayuu u joogsanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "Diidmada qoraal ahaan ayaad u gudbisaa, ka hor taariikhda warqadda ku qoran. Taariikhdaas kadib, badanaa waa goor dambe. Juridisch Loket ayaa kaa caawin kara inaad qorto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "Galitaankaagu adiga ayuu kuu gaar yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': "Erayga sirta ah iyo DigiD-gaagu adiga keliya ayay kuu yihiin. Qofna ha siin, xitaa loo-shaqeeyahaaga ama saaxiibka shaqada. Kombiyuutar la wadaago, mar walba ka bax marka aad dhammeyso. Daqiiqad ma iska tagaysaa? Qufl shaashaddaada. Ma illowday erayga sirta ah? Waaxda IT-ga (ICT-afdeling) ka weydii mid cusub. Xeerarka kombiyuutarku way ku kala duwan yihiin shirkad kasta: weydii waaxda IT-ga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "Daqiiqad ayaan iska tagayaa. Waxaan quflayaa shaashaddayda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': "Madaxaaga ayaa ku weydiiyey DigiD-gaaga iyo erayga sirta ah, si uu dhaqso ugu diyaariyo waraaqahaaga. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o1': "Maya dheh, oo adigu gal inta uu ku caawinayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "Mar keliya sii, maxaa yeelay waa madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "Warqad ku qor, si uu hadhow u isticmaalo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "Qof haysta DigiD-gaaga ayaa arki kara oo beddeli kara canshuurtaada, gargaarka dowladda iyo waraaqahaaga caafimaadka. Adiga keliya ayuu kuu yahay. Adigu waad geli kartaa oo qof ayaad u oggolaan kartaa inuu ku caawiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "Degdeg, oo badhan leh? Ha gujin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': "Iimayl been ah (phishing) badanaa wuxuu u eg yahay mid run ah. Wuxuu rabaa inaad si degdeg ah wax u samayso: “Akoonkaaga maanta ayaa la xirayaa!” Hubi cidda soo dirtay. Ha gujin link, hana furin lifaaq aadan filayn. Adigu toos u aad website-ka ama app-ka dhabta ah. Ma gujisay si kastaba? Isla markiiba beddel erayga sirta ah, oo wac waaxda IT-ga. Taasi ceeb ma aha: marka ay goor hore ogaadaan, ayaa fiican. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "Waxaan gujiyey link shaki leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': "Waxaad gujisay link ku jira iimayl, waxaadna qortay erayga sirta ah. Kadib waxaad aragtay in iimaylku been ahaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o1': "Beddel erayga sirta ah, oo wac waaxda IT-ga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "Tirtir iimaylka, si aan qof kale u gujin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "Sug maalin si aad u aragto in wax khaldamaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "Qof haysta erayga sirta ahaaga ayaa geli kara nidaamyada shaqadaada. Marka aad si dhakhso ah u beddesho oo aad u sheegto waaxda IT-ga, waqtigeeda ayay joojin karaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "Awoodahaaga ayaa muhiim ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': "Maxaad ku fiican tahay? Ka fikir shaqada, dugsiga iyo guriga. Daryeelka qoyska, shaqo dhinaca ah ama shaqo tabaruc ah sidoo kale waa la tiriyaa. Maxaad jeceshahay, maxaadse aadan jeclayn? Ma hubtid shaqada kugu habboon? Weydii inaad maalin qof shaqada kula socoto (meeloopdag). Hagahaaga dugsiga ayaa kaa caawin kara inaad doorato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "Si fiican ayaan dadka ula dhaqmaa. Guriga wax badan ayaan ka caawiyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': "Dugsiga waxay ku weydiinayaan: “Maxaad ku fiican tahay?” Weligaa shaqo mushahar leh ma aadan qaban. Maxaad leedahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "Waxa aad si fiican u samayso guriga, sida daryeelka dadka kale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "Inaadan weli garanayn, maxaa yeelay weligaa shaqo ma aadan qaban.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "Inaad qaban karto shaqo kasta, dhammaanteed.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "Xirfadaha guriga sidoo kale waa la tiriyaa. Daryeelka, qorsheynta iyo caawinta waa xirfado ay loo-shaqeeyayaashu u baahan yihiin. Sheeg waxa aad samaysay, adigoo tusaale bixinaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "Entree kadib: heerka 2 ama shaqo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': "Haddii aad haysato diblomada Entree, waxaad u gudbi kartaa heerka 2 ee mbo. Diblomo heerka 2 ama ka sarreeya waa shahaado aasaasi ah (startkwalificatie). Waxay kaa caawinaysaa inaad shaqo hesho oo aad sii haysato. Marka aad qaadato bbl, waxaad ka shaqeysaa shirkad oo dugsiga aadaa qiyaastii hal maalin toddobaadkii. Taas waxaad ugu baahan tahay shaqo ama meel shaqo-iyo-waxbarasho ah (leerwerkbaan). U tag maalin furan, oo la hadal hagahaaga dugsiga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "Entree kadib ma aadi karaa heerka 2?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': "Waxaad haysataa diblomadaada Entree. Shirkad ayaa ku siinaysa shaqo aan tababar lahayn. Sidoo kale waxaad rabtaa inaad sii barato. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o1': "Weydii shirkadda in meel bbl ah ay suurtagal tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "Qaado shaqada, oo waxbarashada gebi ahaanba jooji.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "Guriga joog ilaa dugsi ku soo waco.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "Marka aad qaadato bbl, waxaad isla mar shaqeysaa oo wax baranaysaa. Lacag ayaad kasbanaysaa, waxaadna helaysaa diblomo heerka 2. Shirkado badan ayaa tan jecel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "Iimayl gaaban: yaa, maxaa, goorma", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': "Iimaylka shaqada loo diro waa gaaban yahay oo edeb leh. Ku bilow salaan, sida “Beste Karin,”. Kadib sheeg waxa aad rabto, iyo goorta. Ku dhammee salaan iyo magacaaga oo dhammaystiran. Qor mawduuc gaaban, sida “Vrij op vrijdag”. Iimaylkaaga mar kale akhri ka hor intaadan dirin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.p': "Karin qaaliga ah, Jimcaha ma fasax qaadan karaa? Salaan, Ali Haddad", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': "Waxaad rabtaa maalin fasax ah Jimcaha soo socda. Iimaylkee madaxaaga loo diro ayaa ugu fiican?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "“Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "“Vrijdag ben ik er niet.” (salaan iyo magacaaga la'aantood).", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "Iimayl dheer oo ku saabsan toddobaadkaaga, su'aashuna dhammaadka ku jirto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "Iimayl wanaagsan wuxuu leeyahay salaan, hal su'aal oo cad iyo magacaaga. Markaas madaxaagu si dhakhso ah ayuu u jawaabi karaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "Marka hore kharashaadka joogtada ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': "Marka aad hesho mushaharkaaga, marka hore bixi kharashaadka joogtada ah: kirada, caymiska iyo taleefankaaga. Isku day inaad bil kasta keydiso lacag yar, xitaa 10 euro. Hadda iibso, hadhow bixi sidoo kale waa deyn. Ma wax baad online ka iibsatay? Markaas badanaa waad beddeli kartaa go'aankaaga 14 maalmood gudahood. Hay rasiidka: waxaad u baahan tahay dammaanadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "Waxaan door bidayaa inaan hadda bixiyo. Markaas deyn ma lihi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': "Maanta ayaad helaysaa mushaharkaaga. Waxaad rabtaa kabo cusub, kiradaaduna weli lama bixin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': "Marka hore bixi kirada, kadib eeg waxa hadhay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o2': "Iibso kabaha, oo kirada hadhow bixi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o3': "Kabaha ku iibso hadda iibso, hadhow bixi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "Kirada, caymiska iyo taleefankaagu bil kasta way soo noqdaan. Marka aad kuwaas marka hore bixiso, waad ogtahay lacagta hadhay. Markaas deyn kuma dhacdid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "Hurdo, cunto iyo daroogo la'aan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': "Si fiican oo ammaan badan ayaad u shaqeysaa marka aad seexato hurdo ku filan, xitaa shaqo goor dambe dhammaata kadib. Quraac cun, oo maalintii biyo cab. Nasashadaada dhaqdhaqaaq, tusaale ahaan socod gaaban. Ku shaqeynta adigoo khamri ama daroogo qaatay waa khatar, loo-shaqeeyayaasha badankoodna way mamnuucaan. Ma muddo dheer ayaad niyad jab dareemaysaa, mise ma joojin kartid cabbitaanka ama isticmaalka? La hadal dhakhtarkaaga qoyska (huisarts). Way ku caawin karaan, sirna way kuu hayaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.p': "Muddo dheer ayaan niyad jabsanaa. Ma qabsan karaa ballan?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': "Caawa waxaad leedahay shaqo habeen. Saaxiibka shaqada ayaa ku siinaya kiniin si aad u soo jeeddo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "Maya dheh, oo seexo dhowr saacadood ka hor shaqadaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "Qaado badh kiniin, taasi khatar ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "Qaado, laakiin shaqada qofna ha u sheegin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "Kiniinada saaxiibka shaqada ka yimaada waxay noqon karaan daroogo. Way ku xanuunsiin karaan, ama waxay kaa dhigi karaan inaad khaladaad ka samayso shaqada. Hurdadu waa habka ammaanka ah ee lagu soo jeedo.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.sick': "Jirada", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.food': "Gacmo nadiif ah, cunto ammaan ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': "Ka shaqeynta cuntada waxay leedahay xeerar nadaafadeed oo adag: shabag timaha, dhar shaqo oo nadiif ah, gacmo la dhaqay iyo dahab la'aan. Xeerarkani qof walba waa isku mid. Kuma saabsana adiga: waxay cuntada ammaan uga dhigaan dadka cuna. Marka aad mindi isticmaalayso, mar walba xiro gacmo-gashigaaga ka hortagga jarista. Qol qabow ama qolka qaboojiyaha, xiro dharka diirran ee lagu siiyo, oo nasashadaada ku kululee. Ma xanuunsan tahay, mise nabar ayaa gacantaada ku yaal? Sheeg ka hor intaadan bilaabin. Markaas waxaad heli kartaa balaastar gaar ah, ama shaqo kale muddo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "Gacantayda nabar yar ayaa ku yaal. Ma heli karaa balaastar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': "Guriga ayaad farta wax yar ka jartay. Maanta waxaad ka shaqeynaysaa hilib. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': "U sheeg madaxaaga, oo weydii balaastar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': "Waxba ha oran: waa jarid yar uun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': "Gacmo-gashi dul xiro, si aan qofna u arag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': "Nabar yar wuxuu jeermis gelin karaa cuntada. Marka aad sheegto, waxaad heli kartaa balaastar gaar ah ama shaqo kale muddo. Sheegiddiisu waa caadi: qofna kuguma eedeeyo.", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.parcel': "Guriga ma joogo, ama baakad jaban", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': "Macmiilku guriga ma joogo? Raac xeerarka shirkaddaada: isku day derisyada, ama baakadda dib u qaado. Ha iska dhigin albaabka hortiisa, ilaa macmiilku sidaas codsaday mooyee. Baakad ma jaban tahay ama ma qoyan tahay? Ha u gaarsiin sidii wax khaldan aysan jirin. Sawir ka qaad caddeyn ahaan, oo ku sheeg iskaanerka ama app-ka. Daacadnimada ku saabsan dhibaato mar walba way ka fiican tahay qarinteeda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "Baakaddani waa jaban tahay. Waa kan sawir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': "Macmiilku guriga ma joogo, derisyaduna sidoo kale ma joogaan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': "Iskaan garee “guriga ma joogo”, oo dib u celi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': "U iskaan garee sidii la gaarsiiyey, oo albaabka ag dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': "Qari qashin-qubka gadaashiisa, si aan qofna u arag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': "Baakad loo iskaan gareeyey inay gaartay waa inay runtii macmiilka gacantiisa ku jirtaa. Marka aad iskaan garayso waxa runtii dhacay, macmiilku hadhow ayuu heli karaa baakadda, qofna uma malaynayo inaad lumisay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "Ammaan waddada, iyo shaqo cadaalad ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': "Weligaa taleefankaaga gacanta ha ku qaban adigoo wadaya: taasi waa mamnuuc. Navigeshanka u isticmaal haye taleefan. Qaado nasashooyinkaaga, xitaa maalin mashquul ah. Baakad culus? Isticmaal gaariga gacanta, ama wada qaada. Baraf ama jid barafoobay? Si tartiib ah u wad: daahitaanku wuu ka fiican yahay shil. Shirkadaha qaar waxay yiraahdaan waxaad u shaqeysaa sidii qof iskiis u shaqeysta (zelfstandig). Laakiin yaa go'aamiya saacadahaaga, jidkaaga iyo dharkaaga? Haddii shirkaddu go'aamiso waxaas oo dhan, waxaa laga yaabaa inaad runtii tahay shaqaale mushahar qaata (in loondienst). Markaas badanaa xuquuq badan ayaad leedahay, sida mushahar marka aad xanuunsan tahay. Wax badan oo arrintan ku saabsan waxaa ku jira casharka “Waraaqo, is-dhexgal iyo shaqadaada”. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "Hadda nasasho ayaan qaadanayaa. Kadib ayaan sii wadayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': "Shirkaddu waxay kugu magacawday qof iskiis u shaqeysta. Laakiin iyada ayaa go'aamisa saacadahaaga, jidkaaga iyo dharkaaga. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': "Talo weydii: waxaa laga yaabaa inaad tahay shaqaale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "Waxba: qandaraasku wuxuu leeyahay iskiis u shaqeyste, sidaas ayayna tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': "Saacado badan shaqee, si aad u kasbato isla lacagtii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': "Waxa muhiimka ah waa sida aad runtii u shaqeyso, ma aha kaliya erayga qandaraaska ku qoran. Haddii shirkaddu go'aamiso sida, goorta iyo meesha aad ka shaqeyso, badanaa waxaad tahay shaqaale. Markaas xuquuq badan ayaad leedahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "Ku dareemid fiicnaan shaqada", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "cadaadiska shaqada (shaqo badan oo waqti yar ah)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "soo jeedid sariirta (ma seexan kartid)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "shaqada wareegga (shaqo subax, galab iyo habeen oo is-beddelaya)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "xiisaha guriga (waxaad u xiisooneysaa dalkaaga)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "qoyska", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "keli", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "Si xun ayaan u seexdaa shaqada wareegga darteed.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': "Aad bay u badan tahay. Keligay ma qaban karo.", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "Xiisaha guriga ayaa i haya. Qoyskaygu way fog yihiin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': "Ma nabad baad tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "Aad uma fiicni. Badanaa habeenkii waan soo jeedaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': "Aad u badan? Keligaa uma baahnid inaad qabato", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': "Qof walba mararka qaarkood wuxuu dareemaa daal, walwal ama murugo. Shaqo badan (werkdruk), hurdo xun oo shaqada wareegga ka timaada ama xiisaha qoyskaaga ayaa culeys ku keeni kara. Keligaa uma baahnid inaad qaado, oo inaad tiraahdo “aad bay u badan tahay” daciifnimo ma aha. La hadal qof aad aaminto. Tusaale ahaan madaxaaga, dhakhtarka shirkadda (bedrijfsarts) ama dhakhtarkaaga qoyska (huisarts). Ama la-taliyaha sirta (vertrouwenspersoon), haddii shirkaddaadu leedahay mid. Adiguna waxaad codsan kartaa wadahadal dhakhtarka shirkadda. Dhakhaatiirtu uma sheegaan madaxaaga waxa aad sheegtay. Ma ka fikirtaa inaad naftaada disho, mise qof ayaad u welwelsan tahay? Wac 113 (bilaash, habeen iyo maalin), ama ku sheekayso 113.nl.", // nagelezen AI 22 nov
    'c.feelwell.p': "Aad uma fiicni. Ma kula hadli karaa daqiiqad?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': "Toddobaadyo ayaad si xun u seexanaysay, shaqaduna aad bay u badan tahay. Aad baad u daallan tahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': "U sheeg madaxaaga ama dhakhtarka shirkadda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': "Waxba ha oran, oo si adag oo dhakhso ah u shaqee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': "Guriga joog, oo qofna ha u sheegin sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': "Inaad goor hore sheegto daciifnimo ma aha. Markaas waxaad wada raadin kartaan xal, tusaale ahaan wareegyo shaqo oo kale. Keligaa uma baahnid inaad qabato.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "Ku noqoshada shaqada jirro kadib", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "kor u dhisid (si tartiib ah, tallaabo tallaabo)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "maalmo badh ah (waxaad shaqeysaa qayb ka mid ah maalinta)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "shaqo fudud (aan culus ahayn)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "shaqo culus", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "bogsasho, mar kale caafimaad helid", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': "ku soo dhowow mar kale", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "Waxaan ku bilaabayaa maalmo badh ah.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "Shaqo fudud hadda waan qaban karaa. Shaqo culus weli maya.", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "Dhakhtarka shirkadda ayaa yiri: si tartiib ah u kordhi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': "Ku soo dhowow mar kale! Ma ka fiican tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "Haa, way ka fiican tahay. Si tartiib ah ayaan u qaadanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "Ku soo noqosho tallaabo tallaabo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': "Ma bogsatay? U sheeg loo-shaqeeyahaaga inaad mar kale shaqeyn karto (betermelden). Jirro dheer kadib, badanaa waxaad bilowdaa tallaabo tallaabo: marka hore saacado yar, ama shaqo fudud. Dhakhtarka shirkadda (bedrijfsarts) ayaa ku siiya talo ku saabsan waxa aad qaban karto. Muddo dheer ma xanuunsanayd? Markaas adiga iyo loo-shaqeeyahaagu waxaad wada samaysaan qorshe ku soo noqoshadaada. Taasi waa sharciga (Wet verbetering poortwachter). Si cad u sheeg waxa aad qaban karto, iyo waxa aadan weli qaban karin. Uma baahnid inaad saaxiibada shaqada u sheegto jirrada aad qabtay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "Tan hadda waan qaban karaa. Taas weli ma qaban karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': "Saddex toddobaad ayaad xanuunsanayd. Maalintaada ugu horreysa ee aad soo noqoto, madaxaaga ayaa kaa codsaday inaad qaaddo sanduuqyo culus. Dhakhtarka shirkadda ayaa yiri: hadda shaqo fudud oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': "Si deggan u sheeg inaad hadda qaban karto shaqo fudud, iyo waxa aadan weli qaban karin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': "Si kastaba sanduuqyada qaad: ma rabtid inaad dhib keento.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': "Guriga aad adigoon waxba oran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': "Madaxaagu wuxuu rabaa inaad soo noqoto, adigoo caafimaad qaba. Marka aad si cad u sheegto waxa aad qaban karto, wuxuu qorsheyn karaa shaqada. Inaad goor hore wax badan qabato waxay mar kale ku xanuunsiin kartaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "Cabbirid", // nieuw, nalezen
    'w.rolmaat': "mitirka duuban (xarigga wax lagu cabbiro)", // nieuw, nalezen
    'w.waterpas': "miisaanka biyaha (wuxuu muujiyaa in wax toosan yihiin)", // nieuw, nalezen
    'w.meten': "cabbirid", // nieuw, nalezen
    'w.rechtlijn': "toosan (aan qalloocnayn)", // nieuw, nalezen
    'w.plank': "looxa", // nieuw, nalezen
    'w.schroef': "musmaarka la maroojiyo", // nieuw, nalezen
    's.measure.1': "Looxani dhererkiisu waa immisa?", // nieuw, nalezen
    's.measure.2': "Derbigu ma toosna.", // nieuw, nalezen
    's.measure.3': "Laba jeer ayaan cabbiraa.", // nieuw, nalezen
    'c.measure.q': "Ballaciisu waa inuu noqdaa immisa?", // nieuw, nalezen
    'c.measure.a': "Sagaashan sentimitir. Waan qorayaa.", // nieuw, nalezen
    'c.measure': "Laba jeer cabbir, hal mar jar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': "Goobta dhismaha, cabbirradu badanaa waa millimitir. Sidaas darteed “sagaal boqol” waxay noqon kartaa 90 sentimitir. Ma hubtid? Weydii: “Taasi ma millimitir baa mise sentimitir?” Tirada dib u dheh, oo qor. Laba jeer cabbir ka hor intaadan jarin ama daloolin: loox aad u gaaban gaabni ayuu ku harayaa. Ma khalad baad samaysay? Isla markiiba sheeg. Markaas kooxdu weli way hagaajin kartaa, kharashkuna wuu yaraanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "Taasi ma millimitir baa mise sentimitir?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': "Saaxiibkaaga shaqada ayaa cabbir kuu dhawaaqay. Si fiican uma aadan maqlin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': "Tirada dib u dheh, oo weydii inay sax tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': "Looxa ku jar waxa aad u malaynayso inaad maqashay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': "Sug ilaa uu isagu yimaado oo eego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "Cabbir khaldan wuxuu lumiyaa alaab iyo waqti. In tirada dib loo dhaho waxay qaadataa laba ilbiriqsi, qof kasta oo goobta dhismaha joogana wuu sameeyaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "Goob dhismo oo habaysan", // nieuw, nalezen
    'w.bouwplaats': "goobta dhismaha", // nieuw, nalezen
    'w.uitvoerder': "maamulaha goobta (madaxa goobta dhismaha)", // nieuw, nalezen
    'w.keet': "aqalka yar ee goobta (nasashada iyo shirarka)", // nieuw, nalezen
    'w.afval': "qashinka", // nieuw, nalezen
    'w.container': "konteenarka qashinka (weel aad u weyn oo qashinka lagu rido)", // nieuw, nalezen
    'w.struikelen': "turunturood (wax ayaa lugta kaa qabta oo waad dhacaysaa)", // nieuw, nalezen
    's.siteday.1': "Qashinku wuxuu galaa konteenarka.", // nieuw, nalezen
    's.siteday.2': "Maamulaha goobtu wuxuu ku jiraa aqalka yar ee goobta.", // nieuw, nalezen
    's.siteday.3': "Iska jir, halkan waad ku turunturoon kartaa.", // nieuw, nalezen
    'c.siteday.q': "Alwaaxdan xaggee la geeyaa?", // nieuw, nalezen
    'c.siteday.a': "Konteenarka ku yaal albaabka laga soo galo.", // nieuw, nalezen
    'c.siteday': "Goob habaysan waa goob ammaan ah", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': "Goobta dhismaha, nadiifinta iyo habayntu waa qayb ka mid ah shaqada, qof walba. Looxyada, fiilooyinka iyo qashinka daadsan waxay dadka ka dhigaan inay turunturoodaan oo dhacaan. Sidaas darteed meeshaada nadiifi inta lagu jiro maalinta, ma aha dhammaadka oo keliya. Qashinka waa la kala soocaa: alwaaxda, dhagaxa iyo birta badanaa waxay galaan konteenarro kala duwan. Ma hubtid midka saxda ah? Weydii. Ma aragtaa musmaar soo taagan, ama god aan dabool lahayn? Hagaaji haddii aad si ammaan ah u samayn karto, ama u sheeg maamulaha goobta (de uitvoerder). Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "Tan waan nadiifinayaa. Markaas qofna ma turunturoonayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': "Looxyo musmaarro leh ayaa jidka yaal. Adigu ma lihid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': "Dhinac u dhig, ama u sheeg maamulaha goobta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': "Ka dul tallaab: looxyadaadii ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': "Sug: qof kale ayaa qaadi doona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "Qof walba isla jidadkaas ayuu maraa. Qofkii khatar arka wax buu ka qabtaa: taasi waa caadi goobta dhismaha.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "Wareejinta shiftigaaga", // nieuw, nalezen
    'w.vroegedienst': "shiftiga hore (subaxda)", // nieuw, nalezen
    'w.latedienst': "shiftiga dambe (galabta iyo fiidka)", // nieuw, nalezen
    'w.nachtdienst': "shiftiga habeenka", // nieuw, nalezen
    'w.overdracht': "wareejinta (waxaad shiftiga xiga u sheegtaa wixii dhacay)", // nieuw, nalezen
    'w.aflossen': "kala wareegid (qofka xiga ayaa yimaada, adiguna waad tegi kartaa)", // nieuw, nalezen
    'w.teamleider': "hoggaamiyaha kooxda", // nieuw, nalezen
    's.shifts.1': "Toddobaadkan waxaan leeyahay shiftiga dambe.", // nieuw, nalezen
    's.shifts.2': "Yaa shaqada iga la wareegaya?", // nieuw, nalezen
    's.shifts.3': "Mashiinka labaad cillad ayaa ku timid.", // nieuw, nalezen
    'c.shifts.q': "Wax ma dhaceen shiftigaaga?", // nieuw, nalezen
    'c.shifts.a': "Haa. Khadku nus saac ayuu taagnaa.", // nieuw, nalezen
    'c.shifts': "U sheeg shiftiga xiga", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': "Warshaddu badanaa waxay shaqaysaa habeen iyo maalin, shiftiyo ahaan. Dhammaadka shiftigaaga, saaxiib shaqo ayaa meeshaada kala wareega. Iska ha tegin: sug ilaa saaxiibkaaga shaqadu yimaado. Dhowr eray ku sheeg wixii dhacay: cillad, badeeco khaldanayd, wax aan la dhammayn. Shirkado badan waxay tan u leeyihiin liis ama shaashad sidoo kale. Dhibaato aadan gudbin waxay ku soo noqotaa shiftiga xiga, markaasna qofna ma oga sababta. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "Mashiinka cillad ayaa ku timid. Hadda mar kale wuu shaqaynayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': "Shiftigaagu wuu dhammaaday. Saaxiibkaaga shaqadu shan daqiiqo ayuu daahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': "Sug, oo u sheeg hoggaamiyaha kooxda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': "Guriga aad: shiftigaagu wuu dhammaaday.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': "Mashiinka jooji oo tag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': "Mashiin shaqaynaya keligiis lagama tegi karo. Marka aad sugto oo aad sheegto, shaqadu si ammaan ah ayay u socotaa, hoggaamiyaha kooxduna wuu xallin karaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': "Sheeg waxa aad aragto", // nieuw, nalezen
    'w.duizelig': "dawakhsan", // nieuw, nalezen
    'w.misselijk': "lallabbo (waxaad dareemaysaa inaad matagayso)", // nieuw, nalezen
    'w.benauwd': "neefsashadu ku adag tahay", // nieuw, nalezen
    'w.koorts': "qandhada", // nieuw, nalezen
    'w.verward': "wareersan (qofku ma oga meesha uu joogo)", // nieuw, nalezen
    'w.anders': "ka duwan (sida caadiga ah ma aha)", // nieuw, nalezen
    's.signals.1': "Marwadu way dawakhsan tahay.", // nieuw, nalezen
    's.signals.2': "Mudanuhu maanta wax ma cunayo.", // nieuw, nalezen
    's.signals.3': "Ma iman kartaa oo ma eegi kartaa?", // nieuw, nalezen
    'c.signals.q': "Mudane Jansen sidee yahay?", // nieuw, nalezen
    'c.signals.a': "Wuu wareersan yahay. Taasi way ka duwan tahay shalay.", // nieuw, nalezen
    'c.signals': "Macmiilka maalin walba waad aragtaa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': "Badanaa adiga ayaa ah qofka macmiilka ugu badan arka. Sidaas darteed adiga ayaa ugu horreeya ee dareema marka wax isbeddelaan: cunto yar, xanuun badan, wareer, neefsasho adag. Uma baahnid inaad ogaato waxa uu yahay. Sheeg waxa aad aragto, oo sheeg goorta aad aragtay. Isla maalintaas u sheeg kalkaalisada, oo qor haddii ay hawshaada tahay. Ma u muuqataa wax culus? Ha sugin: isla markiiba u yeer kalkaalisada. Hal mar oo dheeraad ah ayaa ka fiican hal mar oo yar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "Marwadu wax ma cunayso, wayna dawakhsan tahay. Taasi way ka duwan tahay sida caadiga ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': "Macmiil ayaa maanta aamusan oo aan rabin inay wax cunto. Caadi ahaan aad bay u hadashaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': "Maanta u sheeg kalkaalisada waxa aad aragto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': "Dhowr maalmood sug: waxaa laga yaabaa inay iska tagto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': "Kiniin ka soo qaad armaajada oo sii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': "Isbeddel yar wuxuu noqon karaa calaamadda ugu horreysa ee cudur. Adigu ma go'aamisid waxa uu yahay: kalkaalisada ayaa go'aamisa. Laakiin wax bay qaban kartaa oo keliya haddii aad u sheegto.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "Qof ka caawinta inuu kaco", // nieuw, nalezen
    'w.tillift': "wiishka dadka (mashiin qof kor u qaada)", // nieuw, nalezen
    'w.rollator': "qalabka socodka ee taayirrada leh", // nieuw, nalezen
    'w.bed': "sariirta", // nieuw, nalezen
    'w.opstaan': "kicid, istaagid", // nieuw, nalezen
    'w.gaanzitten': "fariisasho", // nieuw, nalezen
    'w.voorzichtig': "si taxaddar leh, si tartiib ah", // nieuw, nalezen
    's.transfer.1': "Waxaan kaa caawinayaa inaad kacdo.", // nieuw, nalezen
    's.transfer.2': "Ma rabtaa inaad xoogaa fariisato?", // nieuw, nalezen
    's.transfer.3': "Marka hore wiishka dadka ayaan soo qaadanayaa.", // nieuw, nalezen
    'c.transfer.q': "Ma ka soo qaadi kartaa marwada sariirta?", // nieuw, nalezen
    'c.transfer.a': "Keligay maya. Wiishka dadka ayaan soo qaadanayaa.", // nieuw, nalezen
    'c.transfer': "Marka hore sheeg, kadib caawi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': "Ka hor intaadan macmiil taaban, sheeg waxa aad samaynayso: “Ik help u nu met opstaan.” Markaas macmiilku ma naxayo, wuuna kula caawin karaa. Macmiilka u daa inuu sameeyo waxa uu weli samayn karo: taasi xoog bay u yeeshaa. Qof keligaa ha qaadin. Isticmaal qalabka caawinta ee jira, sida wiishka dadka, oo u shaqee sidii lagu tusay. Weli laguma tusin? Marka hore weydii. Dhabarkaagu waa inuu kuu adkaystaa nolosha shaqada oo dhan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "Hadda waxaan kaa caawinayaa inaad kacdo. Ma diyaar baad tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': "Macmiil ayaa rabta inay sariirta ka kacdo. Weli ma aadan baran sida wiishka dadka loo isticmaalo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': "Weydii saaxiib shaqo oo wiishka yaqaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': "Adigu qaad: ma cusla.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': "Wiishka isku day: ma adkaan karo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': "Qof si khaldan loo qaado waxay dhaawici kartaa macmiilka iyo dhabarkaaga. In saaxiib shaqo la weydiiyo waxay qaadataa dhowr daqiiqo. Dhicitaan wuxuu qaadan karaa bilo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "Weel-dhaqidda", // nieuw, nalezen
    'w.afwas': "weel-dhaqidda, weelasha la dhaqayo", // nieuw, nalezen
    'w.vaatwasser': "mashiinka weelka dhaqa", // nieuw, nalezen
    'w.bord': "saxanka", // nieuw, nalezen
    'w.glas': "galaaska (koobka muraayadda ah)", // nieuw, nalezen
    'w.bestek': "qalabka wax lagu cuno (mindi, fargeeto iyo qaaddo)", // nieuw, nalezen
    'w.afdrogen': "qalajin (maro ku tirtir)", // nieuw, nalezen
    's.dishes.1': "Mashiinka weelka dhaqa wuu dhammeeyay.", // nieuw, nalezen
    's.dishes.2': "Iska jir, galaas ayaa jabay.", // nieuw, nalezen
    's.dishes.3': "Qalab wax lagu cuno oo nadiif ah ma harin.", // nieuw, nalezen
    'c.dishes.q': "Galaasyo nadiif ah ma hareen?", // nieuw, nalezen
    'c.dishes.a': "Haa, isla markiiba waan keenayaa.", // nieuw, nalezen
    'c.dishes': "Galaas jabay: isla markiiba sheeg", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': "Jikada, galaasku wuu jabaa. Taasi waa caadi, qofna kama xanaaqo. Laakiin isla markiiba sheeg, si cod dheer oo cad: “Glas!” Jajabka gacmo qaawan ha ku qaadin: isticmaal burush. Galaasku ma ku dhacay cunto agteeda, ama barafka dhexdiisa? Markaas cuntadaas ama barafkaas waa in la tuuraa, dhammaantiis. Jajab yar oo galaas ah oo cunto ku jira aad buu khatar ugu yahay martida. Galaasku wuxuu galaa weel u gaar ah, ma aha bac uu qof qaadayo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "Iska jir, galaas! Isla markiiba waan nadiifinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': "Galaas ayaa ku dul jabay barafka cabitaannada. Aad baa loo mashquulsan yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': "Sheeg, oo barafka oo dhan tuur.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': "Ka saar jajabka aad arki karto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': "Waxba ha oran: hadda aad baa loo mashquulsan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "Jajabka yaryar ee galaaska kuma arki kartid barafka dhexdiisa. Baraf cusub qiimo yar ayuu leeyahay. Marti cabitaankiisa galaas ku jiro si xun ayuu u dhaawacmi karaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "Marka la mashquulsan yahay", // nieuw, nalezen
    'w.heet': "kulul", // nieuw, nalezen
    'w.chef': "shefka (madaxa jikada)", // nieuw, nalezen
    'w.terras': "barxadda (miisaska dibadda yaal)", // nieuw, nalezen
    'w.tafel': "miiska", // nieuw, nalezen
    'w.dienblad': "siiniyadda (saxanka weyn ee wax lagu qaado)", // nieuw, nalezen
    'w.wachten': "sugid", // nieuw, nalezen
    's.rush.1': "Waa kulul! Gadaashaada ayaan marayaa.", // nieuw, nalezen
    's.rush.2': "Miiska lixaad cuntada ayuu sugayaa.", // nieuw, nalezen
    's.rush.3': "Tan waxaan geynayaa barxadda.", // nieuw, nalezen
    'c.rush.q': "Ma qaban kartaa miiska afraad?", // nieuw, nalezen
    'c.rush.a': "Haa, shef. Waan imanayaa.", // nieuw, nalezen
    'c.rush': "Erayo gaagaaban marka la mashquulsan yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': "Marka la mashquulsan yahay, dadka jikada ku jira waxay ku hadlaan erayo gaagaaban: “Heet!”, “Achter!”, “Tafel zes!” Taasi edeb-darro ma aha. Waa degdeg iyo ammaan: qof walba wuu ogaanayaa meesha ay joogaan digsiyada kulul iyo mindiyaha. Adiguna ku dhawaaq “Heet!” ama “Achter!” marka aad qof gadaashiisa marayso. Ma amar baad maqashay? Dib u dheh: “Ja, chef.” Markaas shefku wuu ogaanayaa inaad maqashay. Qof ma si gaaban oo adag ayuu kuula hadlay intii la mashquulsanaa? Badanaa taasi way dhammaataa adeegga kadib. Weli ma kugu xun tahay? Markaas kala hadal waqti deggan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "Gadaal! Digsi kulul ayaan sitaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': "Aad baa loo mashquulsan yahay. Shefku wuxuu ku dhawaaqay: “Tafel zes, nu!” Fadlan ma dhihin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': "Dheh “Ja, chef”, oo samee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': "Joogso, oo u sheeg inuu edeb-daran yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': "Samee, laakiin waxba ha ku celin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': "Marka la mashquulsan yahay, hadal gaaban waa caadi, shakhsi ahaanna laguuma jeedo. Inaad dib u dhahdo waxay muujinaysaa inaad maqashay. Taasi jikada waxay ka dhigtaa mid degdeg ah oo ammaan ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': "Wareeggaaga", // nieuw, nalezen
    'w.kantoor': "xafiiska", // nieuw, nalezen
    'w.verdieping': "dabaqa (dabaqa 1aad ama 2aad ee dhismaha)", // nieuw, nalezen
    'w.gang': "marinka (dhismaha gudihiisa)", // nieuw, nalezen
    'w.toiletpapier': "warqadda musqusha", // nieuw, nalezen
    'w.zeep': "saabuunta", // nieuw, nalezen
    'w.bijvullen': "dib u buuxin", // nieuw, nalezen
    's.rounds.1': "Waxaan ka bilaabayaa dabaqa labaad.", // nieuw, nalezen
    's.rounds.2': "Warqaddii musqushu way dhammaatay.", // nieuw, nalezen
    's.rounds.3': "Saabuunta ayaan dib u buuxinayaa.", // nieuw, nalezen
    'c.rounds.q': "Xafiiska saddexaad ma dhammaysay?", // nieuw, nalezen
    'c.rounds.a': "Maya, qof ayaa weli halkaas ka shaqaynaya.", // nieuw, nalezen
    'c.rounds': "Nadiifinta meel dadku ka shaqeeyaan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': "Badanaa waxaad nadiifisaa iyadoo dad kale weli shaqaynayaan. Salaan, oo weydii: “Mag ik hier even schoonmaken?” Dadka badankoodu haa ayay yiraahdaan. Qof ma shir buu ku jiraa ama taleefan buu ku hadlayaa? Markaas goor dambe ku soo noqo. Waraaqaha miiska saaran ha dhaqaajin, hana akhrin: hareerahooda nadiifi. Wareeggaaga waxaad u haysataa waqti go'an. Waqtigu ma aad buu u yar yahay in si fiican loo qabto? Qolal ha ka boodin adigoon waxba sheegin. U sheeg madaxaaga waxa aad qaban weyday, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "Galab wanaagsan. Ma nadiifin karaa halkan in yar?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': "Wareeggaagu maanta wuu dheeraaday: hal qol aad buu u wasakhaysnaa. Laba xafiis lama dhammayn. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': "U sheeg madaxaaga labada ay yihiin, iyo sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': "Guriga aad, oo rajee inaan qofna arkin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': "Si aad u degdeg ah u samee, dhulkana ka tag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': "Macmiil helaya xafiis wasakh ah wuu cabanayaa. Madax arrinta og wuu sharxi karaa, ama waqti dheeraad ah ayuu ku siin karaa. Inaad sheegto guuldarro ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "Midabbada iyo maryaha nadiifinta", // nieuw, nalezen
    'w.doek': "marada nadiifinta", // nieuw, nalezen
    'w.spons': "isbuunyada", // nieuw, nalezen
    'w.rood': "casaan", // nieuw, nalezen
    'w.blauw': "buluug", // nieuw, nalezen
    'w.geel': "jaalle", // nieuw, nalezen
    'w.groen': "cagaar", // nieuw, nalezen
    's.colours.1': "Marada casaanka ah waxaa loogu talagalay musqusha.", // nieuw, nalezen
    's.colours.2': "Qaado maro nadiif ah.", // nieuw, nalezen
    's.colours.3': "Midabkee ayaan halkan ku isticmaalaa?", // nieuw, nalezen
    'c.colours.q': "Maradan ma u isticmaali karaa miiska xafiiska?", // nieuw, nalezen
    'c.colours.a': "Maya, tan casaanka ah waxaa leh musqusha oo keliya.", // nieuw, nalezen
    'c.colours': "Midab walba meeshiisa ayuu leeyahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': "Shirkado badan oo nadiifin waxay ku shaqeeyaan midabbo. Midab kasta oo maro, isbuunyo iyo baaldi waxaa loogu talagalay hal meel. Badanaa casaanku waa musqusha, buluuguna waa miisaska xafiiska iyo miisaska kale. Sidaas wasakhda musqushu kuma gaarto miis ama jiko. Midabbadu way ku kala duwanaan karaan shirkad kasta, sidaas darteed weydii maalintaada ugu horreysa. Maro ma wasakhowday, mise dhulka ayay ku dhacday? Mid nadiif ah qaado. Maryaha la isticmaalay waxay galaan bacda dharka la dhaqayo, kuma noqdaan gaariga nadiifinta. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "Midabkee ayaa halkan musqusha loogu talagalay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': "Maryahaagii buluugga ahaa way dhammaadeen. Weli waa inaad saddex miis nadiifisaa. Waxaad haysataa maryo casaan ah oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': "Marka hore soo qaado maryo buluug ah oo cusub.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': "Isticmaal maro casaan ah: nadiif waa nadiif.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': "Hal maro buluug ah mar kale u isticmaal saddexdaba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "Nidaamka midabbadu wuxuu shaqeeyaa oo keliya marka qof walba mar walba raaco. Markaas qofna uma baahna inuu isweydiiyo meesha maro ku jirtay.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "Caawinta macmiil", // nieuw, nalezen
    'w.aanbieding': "dalabka gaarka ah (muddo gaaban ayuu ka jaban yahay)", // nieuw, nalezen
    'w.korting': "qiimo-dhimista (lacag yar ayaad bixinaysaa)", // nieuw, nalezen
    'w.uitverkocht': "wuu dhammaaday (waa la wada iibsaday)", // nieuw, nalezen
    'w.magazijn': "bakhaarka", // nieuw, nalezen
    'w.tas': "boorsada, bacda", // nieuw, nalezen
    'w.bestellen': "dalbasho", // nieuw, nalezen
    's.shophelp.1': "Waan ka xumahay, taasi way dhammaatay.", // nieuw, nalezen
    's.shophelp.2': "Ma rabtaa bac?", // nieuw, nalezen
    's.shophelp.3': "Kafeegani hadda waa dalab gaar ah.", // nieuw, nalezen
    'c.shophelp.q': "Caano ma idiin hartay?", // nieuw, nalezen
    'c.shophelp.a': "Bakhaarka ayaan kuu soo eegayaa.", // nieuw, nalezen
    'c.shophelp': "“Ma aqaan” ma aha dhammaadka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': "Macmiil ayaa wax ku weydiiyay, adiguna jawaabta ma taqaan. Taasi waa caadi: qofna wax walba ma yaqaan. Laakiin ha oran oo keliya “nee” ama “weet ik niet”, hana iska tegin. Dheh: “Ik vraag het even voor u”, oo soo kaxee saaxiib shaqo. Badeeco ma dhammaatay? Sheeg goorta ay mar kale imanayso, ama tus wax u eg. Macmiilka eeg oo salaan, xitaa marka aad ku mashquulsan tahay buuxinta khaanadaha. Su'aasha ma fahmi weyday? Macmiilka weydii inuu mar kale yiraahdo, si tartiib ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "Taas ma aqaan. Waan kuu soo weydiinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': "Macmiil ayaa badeeco ku weydiisay. Erayga ma taqaan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': "Dheh: “Ik vraag het even voor u.”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': "Dheh “nee”, oo shaqada sii wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': "Meel uun u tilmaan, si ay u tagto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': "Macmiilku dhib uma arko inaad cusub tahay ama aad weli Af-Holandiis baranayso. Macmiilku wuxuu dhib u arkaa inuusan caawimo helin. Inaad saaxiib shaqo soo kaxayso waa adeeg wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "Xilliyo adag", // nieuw, nalezen
    'w.bedrijfsleider': "maamulaha dukaanka", // nieuw, nalezen
    'w.beveiliger': "ilaaliyaha ammaanka", // nieuw, nalezen
    'w.dief': "tuugga", // nieuw, nalezen
    'w.stelen': "xadid", // nieuw, nalezen
    'w.schreeuwen': "qaylin", // nieuw, nalezen
    'w.geldterug': "lacag celin (lacagtaada oo laguu soo celiyo)", // nieuw, nalezen
    's.shoptrouble.1': "Maamulaha dukaanka ayaan soo kaxaynayaa.", // nieuw, nalezen
    's.shoptrouble.2': "Fadlan ha qaylin.", // nieuw, nalezen
    's.shoptrouble.3': "Waxaan u malaynayaa in qof wax xadayo.", // nieuw, nalezen
    'c.shoptrouble.q': "Lacagtayda hadda ha la ii celiyo!", // nieuw, nalezen
    'c.shoptrouble.a': "Waan fahmay. Saaxiibkayga shaqada ayaan soo kaxaynayaa.", // nieuw, nalezen
    'c.shoptrouble': "Macmiil xanaaqsan ama tuug: adiga ayaa ugu horreeya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': "Mararka qaarkood macmiil ayaa xanaaqa, ama waxaad aragtaa qof wax xadaya. Ammaankaaga ayaa ugu horreeya, mar walba. Macmiil xanaaqsan: deganow, qaylo ha ku celin, oo soo kaxee maamulaha dukaanka. Khasab ma aha inaad keligaa xalliso. Ma tuug baad aragtaa? Ha ka daba ordin, ha qaban, albaabkana ha ka xirin. Si fiican u eeg waxa aad aragto, oo isla markiiba u sheeg maamulaha ama ilaaliyaha ammaanka. Alaabta waa la beddeli karaa. Adiga lagu beddeli maayo. Ma naxdin baad dareentay kadib? Kala hadal madaxaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "Waxaan arkaa qof wax boorsadiisa gelinaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': "Nin ayaa dhalo jaakaddiisa hoosteeda geliyay oo u socda albaabka laga baxo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': "U sheeg maamulaha ama ilaaliyaha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': "Ka daba orod oo gacanta qabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': "Albaabka hortiisa istaag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': "Tuug la joojiyo wuxuu noqon karaa mid rabshad sameeya. Maamulaha iyo ilaaliyuhu way yaqaanaan waxa la sameeyo. Badeeco u qalanta inaad ku dhaawacanto ma jirto.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "Daryeelka dhirta", // nieuw, nalezen
    'w.plantblad': "caleenta", // nieuw, nalezen
    'w.stengel': "jirridda", // nieuw, nalezen
    'w.bloem': "ubaxa", // nieuw, nalezen
    'w.knippen': "jarid (maqas ku jar)", // nieuw, nalezen
    'w.tomaat': "yaanyada", // nieuw, nalezen
    'w.rijp': "bislaaday (diyaar u ah in la guro)", // nieuw, nalezen
    's.plantcare.1': "Yaanyadani weli ma bislaan.", // nieuw, nalezen
    's.plantcare.2': "Caleenta ayaan ka jarayaa.", // nieuw, nalezen
    's.plantcare.3': "Jirriddu way jaban tahay.", // nieuw, nalezen
    'c.plantcare.q': "Yaanyadee ayaan gurayaa?", // nieuw, nalezen
    'c.plantcare.a': "Kuwa casaanka ah oo keliya. Kuwa cagaaran weli ma bislaan.", // nieuw, nalezen
    'c.plantcare': "Gacmo nadiif ah, dhir caafimaad qabta", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': "Dhirtuna way xanuunsan kartaa. Fayrasku geed ilaa geed ayuu ku gudbaa gacmaha, gacmo-gashiyada, mindiyaha iyo dharka. Aqalka dhirta, hal geed oo xanuunsan wuxuu keeni karaa in kumanaan geed la tuuro. Sidaas darteed albaabka waxaa ka jira xeerar adag: gacmaha dhaq, xiro dharka shaqada ee shirkadda, oo dhex mar weelka cagaha lagu nadiifiyo. Aqallo badan oo dhir ma oggola in qadadaada ay ku jiraan yaanyo, basbaas ama qajaar aad adigu keensatay. Ma aragtaa geed si yaab leh u muuqda? Ha taaban. U sheeg madaxaaga safka uu ku yaal. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "Geed xanuunsan ayaa ku yaal safka laba iyo tobnaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': "Waxaad aragtaa geed leh baro jaalle ah oo yaab leh. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': "Iska daa, oo u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': "Soo rujiso oo la tag.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': "Ka jar caleemaha baraha leh.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': "Marka aad geed xanuunsan taabato, fayrasku wuu kula socdaa geedaha xiga. Madaxaagu wuu yaqaan sida si ammaan ah looga saaro.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "Ka shaqeynta dibadda", // nieuw, nalezen
    'w.land': "beerta (meesha dhirtu dibadda ka baxdo)", // nieuw, nalezen
    'w.regen': "roobka", // nieuw, nalezen
    'w.zon': "qorraxda", // nieuw, nalezen
    'w.laarzen': "buudhka (kabaha dhaadheer)", // nieuw, nalezen
    'w.regenpak': "dharka roobka (jaakad iyo surwaal roobka laga xirto)", // nieuw, nalezen
    'w.onweer': "onkodka iyo hillaaca", // nieuw, nalezen
    's.outdoors.1': "Roob baa da'aya. Dharkayga roobka ayaan xiranayaa.", // nieuw, nalezen
    's.outdoors.2': "Buudhkaygu waa qoyan yahay.", // nieuw, nalezen
    's.outdoors.3': "Qorraxdu maanta way kulushahay.", // nieuw, nalezen
    'c.outdoors.q': "Onkod iyo hillaac ayaa soo socda. Maxaynu samaynaa?", // nieuw, nalezen
    'c.outdoors.a': "Waan joojinaynaa oo gudaha ayaan gelaynaa.", // nieuw, nalezen
    'c.outdoors': "Qorrax, roob iyo onkod", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': "Dibadda, cimilo kasta ayaad ku shaqaysaa. Qorraxda: dabool madaxaaga iyo maqaarkaaga, isticmaal kareemka qorraxda, oo biyo badanaa cab. Roobka: xiro dharkaaga roobka iyo buudhkaaga, oo nasashadaada dhar qallalan xiro. Qoyaanka iyo qabowgu way ku xanuunsiiyaan, wayna ku gaabiyaan. Ma onkod baa jira? Markaas jooji oo gudaha gal, ama gaari ama baabuur yar gal. Geed ha hoos gelin, beer bannaanna ha joogin. Shaqada ma ugu baahan tahay dhar roob ama buudh? Weydii loo-shaqeeyahaaga ka hor intaadan adigu iibsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "Onkod ayaa imanaya. Ma gudaha gallaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': "Beerta ayaad joogtaa. Onkod dhow ayaad maqlaysaa. Safkaagu wuu ku dhow yahay inuu dhammaado. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': "Jooji, oo gudaha gal ama baabuurka yar gal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': "Marka hore safka si degdeg ah u dhammee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': "Ku sug geedka weyn hoostiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': "Hillaacu wuxuu ku dhacaa meesha ugu sarraysa, beer siman dhexdeedana taasi waa adiga. Safku wuxuu sugi karaa rubuc saac.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "Sawir-farsameedka iyo cabbirka", // nieuw, nalezen
    'w.tekening': "sawir-farsameedka (wuxuu muujiyaa sida qaybtu noqonayso)", // nieuw, nalezen
    'w.maat': "cabbirka", // nieuw, nalezen
    'w.millimeter': "millimitirka", // nieuw, nalezen
    'w.schuifmaat': "kalibarka (si aad u sax ah ayuu wax u cabbiraa)", // nieuw, nalezen
    'w.passen': "ku habboonaan (si sax ah u gelid)", // nieuw, nalezen
    'w.bout': "boolka", // nieuw, nalezen
    's.drawing.1': "Cabbirka sawirka ku qoran waa maxay?", // nieuw, nalezen
    's.drawing.2': "Qaybtani kuma habboona.", // nieuw, nalezen
    's.drawing.3': "Laba millimitir ayay ka weyn tahay.", // nieuw, nalezen
    'c.drawing.q': "Boolku ma ku habboon yahay?", // nieuw, nalezen
    'c.drawing.a': "Maya. Mar kale ayaan cabbirayaa.", // nieuw, nalezen
    'c.drawing': "Sawirka ayaa go'aamiya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': "Goobta farsamada waxaad samaysaa waxa sawirku sheego, ma aha wax u muuqda inuu ku dhow yahay. Cabbirradu waa millimitir, hal millimitirna wuu badnaan karaa. Qayb ma ku habboonaan weyday? Xoog ha isticmaalin, godkana ha weynayn “wax yar uun”. Mar kale cabbir, oo sawirka eeg. Sawirka ma akhrin kari weyday, mise cabbir ayaa ka maqan? Weydii ka hor intaadan bilaabin. Su'aal waxay qaadataa hal daqiiqo. Qayb khaldan waxay lumisaa alaab iyo saacado.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': "Cabbirkan ma akhrin karo. Ma eegi kartaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': "Qayb kuma habboona: hal millimitir ayay ka weyn tahay. Haddii dubbe lagu garaaco way geli lahayd. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': "Mar kale cabbir, oo weydii waxa la sameeyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': "Dubbaha ku garaac ilaa ay gasho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': "Wax yar ka shiid, waxbana ha oran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': "Qayb xoog lagu geliyay goor dambe ayay jabi kartaa, macmiilka agtiisa. Marka aad sheegto, sababta waa la heli karaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "Alxanka iyo shaqada kulul", // nieuw, nalezen
    'w.lassen': "alxamid (bir ku dheji kulayl aad u badan)", // nieuw, nalezen
    'w.laskap': "koofiyadda alxanka", // nieuw, nalezen
    'w.rook': "qiiqa", // nieuw, nalezen
    'w.afzuiging': "qiiq-nuugaha (wuxuu qiiqa ka saaraa)", // nieuw, nalezen
    'w.afkoelen': "qaboobid", // nieuw, nalezen
    'w.brandwond': "gubashada (nabar kulayl ka yimid)", // nieuw, nalezen
    's.weld.1': "Koofiyaddayda alxanka ayaan xiranayaa.", // nieuw, nalezen
    's.weld.2': "Shid qiiq-nuugaha.", // nieuw, nalezen
    's.weld.3': "Iska jir, birtu weli way kulushahay.", // nieuw, nalezen
    'c.weld.q': "Tan hadda ma qaadi karaa?", // nieuw, nalezen
    'c.weld.a': "Maya, sug. Marka hore waa inay qabowdaa.", // nieuw, nalezen
    'c.weld': "Bir kulul waxay u egtahay mid qabow", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': "Alxanku wuxuu bixiyaa iftiin aad u xooggan. Ha eegin adigoon xiran koofiyadda alxanka, xitaa meel fog: indhahaagu way guban karaan, waxaadna dareemaysaa saacado kadib oo keliya. Saaxiib shaqo ma agtaada ayuu wax ku alxamayaa? Dhinac kale eeg, ama istaag shaashadda gadaasheeda. Bir hadda la alxamay ama la shiiday caadi ayay u egtahay, laakiin aad bay u kulushahay. Gacmo qaawan ha ku qaadin. Qiiqa alxanku wuu u xun yahay sambabadaada: shid qiiq-nuugaha. Ma gubatay? Isla markiiba biyo ku qabooji, ugu yaraan toban daqiiqo, oo sheeg. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "Tani ma qabowday?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': "Saaxiib shaqo ayaa agtaada wax ku alxamaya. Koofiyadda alxanka ma xirnid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': "Dhinac kale eeg, oo istaag shaashadda gadaasheeda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': "In yar daawo: wax baad ka baran kartaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': "Indhaha badh xir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': "Iftiinka alxanku indhahaaga wuu gubaa, xitaa dhinaca iyo meel fog. Xanuunka goor dambe ayaad dareemaysaa, badanaa habeenkii.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "Qaybaha baabuurka", // nieuw, nalezen
    'w.motor': "matoorka", // nieuw, nalezen
    'w.motorkap': "boonada (daboolka matoorka dul saaran)", // nieuw, nalezen
    'w.rem': "bareegga", // nieuw, nalezen
    'w.lamp': "nalka", // nieuw, nalezen
    'w.ruitenwisser': "tirtiraha muraayadda hore", // nieuw, nalezen
    'w.stoel': "kursiga", // nieuw, nalezen
    's.carparts.1': "Boonada fur.", // nieuw, nalezen
    's.carparts.2': "Nalka hore ee bidix waa jaban yahay.", // nieuw, nalezen
    's.carparts.3': "Bareegyadu sanqadh ayay samaynayaan.", // nieuw, nalezen
    'c.carparts.q': "Maxaad maqlaysaa?", // nieuw, nalezen
    'c.carparts.a': "Matoorku wuxuu samaynayaa sanqadh yaab leh.", // nieuw, nalezen
    'c.carparts': "Baabuurka waxaa leh macmiilka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': "Baabuur garaashka ku jira adigu ma lihid: waxaa leh macmiilka. Kursiga iyo isteerinka dabool saar ka hor intaadan gelin, gudahana gacmo nadiif ah kaga shaqee. Kursiga, muraayadaha iyo raadiyaha u daa sidii ay ahaayeen. Ma khasab bay kugu noqotay inaad kursiga dhaqaajiso? Dib ugu celi. Ha taaban alaabta gaarka ah ee baabuurka ku jirta. Ma xagtin ama wasakh baad u yeeshay? Isla markiiba u sheeg madaxaaga. Macmiil gurigiisa ku arka dib uma soo noqdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "Xagtin ayaan u yeelay. Waan ka xumahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': "Xagtin yar ayaad u yeeshay albaabka baabuurka macmiil. Qofna ma arkin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': "Isla markiiba u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': "Waxba ha oran: aad bay u yar tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': "Maro ku masax, oo rajee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "Qof walba mararka qaarkood wuu khaldamaa. Garaashku xagtinta wuu hagaajin karaa, ama si daacad ah ayuu macmiilka ugu sheegi karaa. Xagtin la qariyay waxay garaashka ka lumisaa magaciisa wanaagsan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "Baansiin, gaas iyo koronto", // nieuw, nalezen
    'w.krik': "jaagga (wuxuu kor u qaadaa hal dhinac oo baabuurka ah)", // nieuw, nalezen
    'w.benzine': "baansiinka", // nieuw, nalezen
    'w.elektrischeauto': "baabuurka korontada ku shaqeeya", // nieuw, nalezen
    'w.oranje': "oranji (midabka liinta)", // nieuw, nalezen
    'w.morsen': "daadin", // nieuw, nalezen
    'w.lap': "calalka (maro shaqada wasakhda leh)", // nieuw, nalezen
    's.carsafe.1': "Baansiin ayaa ii uraya.", // nieuw, nalezen
    's.carsafe.2': "Saliid ayaa daadatay. Calal ayaan soo qaadanayaa.", // nieuw, nalezen
    's.carsafe.3': "Fiilooyinka oranjiga ah ma taabto.", // nieuw, nalezen
    'c.carsafe.q': "Baabuurkan ma ka shaqayn karaa?", // nieuw, nalezen
    'c.carsafe.a': "Weli maya. Waa baabuur koronto ku shaqeeya.", // nieuw, nalezen
    'c.carsafe': "Fiilooyin oranji ah iyo matoorro shaqaynaya", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': "Baabuurka korontada ama hybrid-ka ah wuxuu leeyahay baytari koronto aad u xooggan. Fiilooyinkiisu waa oranji. Ha taaban hana furin: makaanik tababar gaar ah leh waa inuu marka hore baabuurka ammaan ka dhigaa. Calaamad ama koon ma ag yaal baabuurka? Markaas ka fogow. Matoor gudaha ka shaqaynaya wuxuu sameeyaa gaas aadan urin karin arkina karin, wuuna ku dili karaa. Sidaas darteed: ku xir tuubada qiiqa saarta, ama albaabbada fur. Baansiin ma kuu uraysaa? Dhimbiil ma jirto, sigaarna lama cabbo. Isla markiiba u sheeg madaxaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "Baabuurkan ma ammaan baa laga dhigay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': "Waa inaad taayir ka beddesho baabuur koronto ku shaqeeya. Baabuurka hoostiisa waxaad ku aragtaa fiilo oranji ah oo debecsan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': "Waxba ha taaban, oo soo kaxee makaanikiga tababaran.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': "Fiilada gacantaada dib ugu riix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': "Maro qallalan dib ugu riix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "Baytariga baabuurka korontada wuxuu leeyahay koronto ku filan inay qof disho, xitaa marka baabuurku demsan yahay. Qof tababarka leh oo keliya ayaa taaban kara qaybahan.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "Hubinta baabuurka", // nieuw, nalezen
    'w.schade': "waxyeellada", // nieuw, nalezen
    'w.deuk': "godanka", // nieuw, nalezen
    'w.spiegel': "muraayadda", // nieuw, nalezen
    'w.tanken': "shidaal ku shubid (baabuurka shidaal ku shub)", // nieuw, nalezen
    'w.opladen': "dab gelin (baabuur koronto ku shaqeeya, taleefan)", // nieuw, nalezen
    'w.parkeren': "baarkin", // nieuw, nalezen
    's.vancheck.1': "Albaabka godan ayaa ku yaal.", // nieuw, nalezen
    's.vancheck.2': "Waxyeelladani hore ayay u jirtay.", // nieuw, nalezen
    's.vancheck.3': "Marka hore waa inaan shidaal ku shubto.", // nieuw, nalezen
    'c.vancheck.q': "Baabuurka gaarsiintu ma wada fiican yahay?", // nieuw, nalezen
    'c.vancheck.a': "Maya, muraayaddu waa jaban tahay.", // nieuw, nalezen
    'c.vancheck': "Eeg ka hor inta aadan wadin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': "Ku wareeg baabuurka ka hor safarkaaga ugu horreeya. Ma aragtaa godan, xagtin ama muraayad jaban? Sawir ka qaad, oo sheeg ka hor inta aadan dhaqaaqin. Markaas qof walba wuu ogyahay in waxyeelladu hore u jirtay. Wax ma dhaceen intii aad safarka ku jirtay? Sheeg isla maalintaas, xitaa haddii ay yar tahay. Qarinta waxyeelladu waxay hadhow keentaa dhibaatooyin ka waaweyn. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "Baabuurka gaarsiinta waxyeello ayaa gaartay. Waa kan sawir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': "Subaxdii waxaad baabuurka ku aragtaa godan cusub. Adigu ma aadan samayn. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': "Sawir ka qaad, oo sheeg ka hor inta aadan wadin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': "Waxba ha oran: adigu ma aadan samayn.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': "Sug oo eeg in qof wax ka weydiiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': "Marka aad sheegto ka hor inta aadan wadin, qofna ma malayn karo inaad adigu samaysay. Sawir waqtigu ku qoran yahay qof walba wuu u cad yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "Daahitaanka waddada", // nieuw, nalezen
    'w.file': "saxmadda baabuurta", // nieuw, nalezen
    'w.vertraging': "daahitaanka (waad ka dambaysaa qorshihii)", // nieuw, nalezen
    'w.omleiding': "jid-leexinta (waddo kale, sababtoo ah waddadii waa xiran tahay)", // nieuw, nalezen
    'w.navigatie': "navigeshanka (app-ka jidka tusa)", // nieuw, nalezen
    'w.planner': "qorsheeyaha (qofka jidadka sameeya)", // nieuw, nalezen
    'w.retour': "soo-celinta (baakad dib u noqonaysa)", // nieuw, nalezen
    's.delay.1': "Saxmad baabuur ayaan ku jiraa.", // nieuw, nalezen
    's.delay.2': "Nus saac ayaan daahayaa.", // nieuw, nalezen
    's.delay.3': "Baakaddani dib ayay u noqonaysaa.", // nieuw, nalezen
    'c.delay.q': "Xaggee joogtaa hadda?", // nieuw, nalezen
    'c.delay.a': "Jid-leexinta agteeda. Toban daqiiqo ayaan daahayaa.", // nieuw, nalezen
    'c.delay': "Ma daahaysaa? Waqtigeeda sheeg", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': "Saxmad baabuur ama waddo xiran adiga khaladkaaga ma aha. Laakiin u sheeg qorsheeyaha isla marka aad ogaato inaad daahayso. Markaas qorsheeyuhu wuu u sheegi karaa macaamiisha, ama jidka wuu beddeli karaa. Marka hore meel ammaan ah istaag: ha wicin adigoo taleefanka gacanta ku haya oo wadaya. Hana u wadin si ka dhakhso badan si aad waqtiga u soo ceshato. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "Saxmad baabuur ayaan ku jiraa. Nus saac ayaan daahayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': "Waddo ayaa xiran. Jid-leexintu waxay kaa qaadanaysaa soddon daqiiqo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': "U sheeg qorsheeyaha isla marka aad si ammaan ah u istaagi karto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': "Si ka dhakhso badan u wad si aad waqtiga u soo ceshato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': "Waxba ha oran: waxaa laga yaabaa inaan qofna ogaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "Marka qorsheeyuhu goor hore ogaado, macaamiishu way maqlaan, qofna si aan loo baahnayn uma sugo. Xawaare ku wadiddu waa khatar, waqti ku dhowaad waxba kama soo ceshato.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "Tilmaamaha", // nieuw, nalezen
    'l.putdown': "Halkaas dhig", // nieuw, nalezen
    'w.zetten': "dhigid (wax taagan: kartoon, baaldi)", // nieuw, nalezen
    'w.leggen': "dhigid, jiifin (wax fidsan oo jiifa)", // nieuw, nalezen
    'w.brengen': "geyn, keenid (meel ama qof)", // nieuw, nalezen
    'w.geven': "siin", // nieuw, nalezen
    'w.vasthouden': "hayn", // nieuw, nalezen
    'w.loslaten': "sii deyn", // nieuw, nalezen
    's.putdown.1': "Halkaas dhig.", // nieuw, nalezen
    's.putdown.2': "Tan gee makhaayadda shaqada.", // nieuw, nalezen
    's.putdown.3': "Tan wax yar ii hay.", // nieuw, nalezen
    'c.putdown.q': "Tan wax yar ma ii hayn kartaa?", // nieuw, nalezen
    'c.putdown.a': "Haa. Xaggee waa inaan dhigo?", // nieuw, nalezen
    'c.putdown': "Sheeg inaad hayso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': "Ma wax baad wada qaadaysaan, mise saaxiib shaqo ayaa wax culus kuu dhiibaya? Dheh “Ik heb hem” marka aad si fiican u hayso. Markaas saaxiibkaaga shaqadu wuu ogyahay inay ammaan tahay inuu sii daayo. Ma adiga ayaa doonaya inaad sii dayso? Marka hore weydii: “Heb je hem?” Oo jawaabta sug. Tani waa caadi goob kasta oo shaqo. Waxay ka hortagtaa in wax ku dhacaan lugaha iyo gacmaha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': "Waan hayaa. Waad sii dayn kartaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': "Saaxiib shaqo ayaa kartoon culus kuu dhiibaya. Weli si fiican uma haysid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': "Dheh “wacht”, oo marka hore si ka fiican u qabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': "Waxba ha oran: isagaa arki doona.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': "Si dhakhso ah u qaado, si uusan u sugin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': "Saaxiibkaaga shaqadu wuu sii daayaa marka uu u maleeyo inaad hayso. Hal eray ayaa ku siinaya waqti aad si fiican ugu qabato.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "Shidan iyo demsan, furan iyo xiran", // nieuw, nalezen
    'w.aanzetten': "shidid", // nieuw, nalezen
    'w.opendoen': "furid", // nieuw, nalezen
    'w.dichtdoen': "xirid", // nieuw, nalezen
    'w.drukken': "riixid (badhan)", // nieuw, nalezen
    'w.draaien': "wareejin", // nieuw, nalezen
    'w.stoppen': "joogsasho, joojin", // nieuw, nalezen
    's.onoff.1': "Albaabka xir.", // nieuw, nalezen
    's.onoff.2': "Badhanka riix.", // nieuw, nalezen
    's.onoff.3': "Joogso! Demi.", // nieuw, nalezen
    'c.onoff.q': "Albaabku ma xiran yahay?", // nieuw, nalezen
    'c.onoff.a': "Maya. Hadda ayaan xirayaa.", // nieuw, nalezen
    'c.onoff': "Joogso waa joogso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': "Ma qof baa ku dhawaaqay “Stop!”? Isla markiiba joogso, xitaa marka aadan garanayn sababta. Kadib weydii. Eray gaaban oo cod dheer halkan cadho ma aha: waa sida ay saaxiibbada shaqadu isu ilaaliyaan. Ma adiga ayaa arkay wax khatar ah? Adiguna ku dhawaaq “Stop!”, xitaa qof sannado badan halkan ka shaqaynayay. Qofna la yaabi maayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': "Joogso! Wax yar sug.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': "Mashiin ayaad shidaysaa. Saaxiib shaqo ayaa ku dhawaaqay “Stop!”. Dhibaato ma aragtid. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': "Isla markiiba joogso, kadibna weydii sababta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': "Sii wad: dhibaato ma aragtid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': "Marka hore weydii sababta aad u joogsanayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': "Saaxiibkaaga shaqadu waxaa laga yaabaa inuu arko wax aadan arkayn. Marka hore joogso, kadib hadal: taasi waxay qof walba ka dhigtaa ammaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "Riix, jiid, buuxi", // nieuw, nalezen
    'w.duwen': "riixid, durkin", // nieuw, nalezen
    'w.trekken': "jiidid", // nieuw, nalezen
    'w.vullen': "buuxin", // nieuw, nalezen
    'w.leegmaken': "faaruqin", // nieuw, nalezen
    'w.schoonmaken': "nadiifin", // nieuw, nalezen
    'w.vol': "buuxa", // nieuw, nalezen
    's.fillempty.1': "Ha riixin, jiid.", // nieuw, nalezen
    's.fillempty.2': "Kani waa buuxa. Faaruqi.", // nieuw, nalezen
    's.fillempty.3': "Tan nadiifi, fadlan.", // nieuw, nalezen
    'c.fillempty.q': "Durba ma buuxsamay?", // nieuw, nalezen
    'c.fillempty.a': "Haa. Waan faaruqinayaa.", // nieuw, nalezen
    'c.fillempty': "Ma dhammaysay? Sheeg", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': "Ma dhammaysay hawl? Sheeg: “Ik ben klaar.” Oo weydii waxa aad kadib qaban karto. Inaad aamusnaan ku sugto ilaa qof ku arko waxay u ekaan kartaa inaadan doonayn inaad shaqeyso, xitaa marka aysan run ahayn. Saaxiibbada shaqada ee weydiiya hawsha xigta waxay inta badan muddo kadib helaan shaqo ka xiiso badan. Ma doonaysaa inaad wax cusub barato? Taasna weydii: “Mag ik dat ook leren?”", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "Waan dhammeeyay. Maxaan kale oo qaban karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': "Hawshaadii waad dhammaysay. Madaxaagu wax kale ayuu ku mashquulsan yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': "Sheeg inaad dhammaysay, oo weydii waxa xiga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': "Sug ilaa madaxaagu ku arko.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': "Naso: shaqadaadii way dhammaatay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': "Madaxu wax walba ma arki karo. Marka aad sheegto inaad dhammaysay, shaqadu way sii socotaa, waxaadna muujinaysaa inaad doonayso inaad wax badan qabato.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "Marka hore tan, kadib taas", // nieuw, nalezen
    'w.nu': "hadda", // nieuw, nalezen
    'w.dan': "kadib, markaas", // nieuw, nalezen
    'w.altijd': "mar walba, had iyo jeer", // nieuw, nalezen
    'w.genoeg': "ku filan", // nieuw, nalezen
    'w.meer': "ka badan, dheeraad", // nieuw, nalezen
    'w.alles': "wax walba", // nieuw, nalezen
    's.order.1': "Marka hore tan, kadib taas.", // nieuw, nalezen
    's.order.2': "Taasi waa ku filan tahay.", // nieuw, nalezen
    's.order.3': "Tan mar walba sidan u samee.", // nieuw, nalezen
    'c.order.q': "Tan hadda ma samayn kartaa?", // nieuw, nalezen
    'c.order.a': "Haa. Marka hore tan, kadibna?", // nieuw, nalezen
    'c.order': "Hawlo badan hal mar? Weydii tan ugu horraysa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': "Mararka qaarkood saddex hawlood ayaa hal weedh lagugu siiyaa. Taas way adag tahay in la xusuusto, xitaa dadka Af-Holandiiska si fiican ugu hadla. Weydii midda ugu horraysa: “Wat moet ik eerst doen?” Waxaad kaloo hawlaha qori kartaa, ama farahaaga ku tirin kartaa oo dib u sheegi kartaa. Ma mid baad illowday? Dib u noqo oo weydii. Taasi waa ka fiican tahay qiyaas.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "Taasi waa badan tahay. Maxaan marka hore sameeyaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': "Madaxaagu saddex hawlood ayuu ku siiyay, si aad u dhakhso badan. Midda koowaad oo keliya ayaad xusuusataa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': "Isla markiiba codso in hawlaha mar kale laguu sheego.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': "Midda koowaad samee, oo rajee inaad inta kale xusuusato.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': "Waxba ha samayn: saddexdaba ma wada taqaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': "Inaad isla markiiba weydiiso waxay qaadataa toban ilbiriqsi. Hadhow madaxaagu waa laga yaabaa inuu tago, markaasna waad sugaysaa ama waad qiyaasaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "Jaajuur, malaas iyo rinji", // nieuw, nalezen
    'l.tiletools': "Qalabka qofka jaajuurka dhiga", // nieuw, nalezen
    'w.lijmkam': "malqaacadda ilkaha leh (xabagta jaajuurka xariiqyo ku fidisa)", // nieuw, nalezen
    'w.troffel': "malqaacadda dhismaha", // nieuw, nalezen
    'w.tegelsnijder': "qalabka jaajuurka lagu jaro", // nieuw, nalezen
    'w.nijptang': "biinsada (lagu gooyo jajab yar oo jaajuurka ah)", // nieuw, nalezen
    'w.mixer': "mashiinka qasa (xabag ama malaas ku qasa baaldi dhexdiisa)", // nieuw, nalezen
    'w.duimstok': "mitirka laablaabma", // nieuw, nalezen
    's.tiletools.1': "Malqaacadda ilkaha leh ii soo dhiib wax yar.", // nieuw, nalezen
    's.tiletools.2': "Jaajuurka waxaan ku jaraa qalabka jaajuurka lagu jaro.", // nieuw, nalezen
    's.tiletools.3': "Marka hore ku cabbir mitirka laablaabma.", // nieuw, nalezen
    'c.tiletools.q': "Xaggee buu yaal mashiinka qasa?", // nieuw, nalezen
    'c.tiletools.a': "Baaldiga agtiisa, albaabka dhinaciisa.", // nieuw, nalezen
    'c.tiletools': "Nadiifi qalabkaaga inta xabagtu aanay adkaan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': "Xabagta jaajuurka iyo malaasku si dhakhso ah ayay u adkaadaan, xataa qalabkaaga dushiisa. Sidaas darteed malqaacadda ilkaha leh, malqaacadda iyo mashiinka qasa isla markiiba ku nadiifi baaldi biyo ah, xataa ka hor nasashadaada. Xabag adkaatay ma baxdo, malqaacad ilkaha leh oo xabag adag ku taallana waxay samaysaa xariiqyo xun. Biyaha wasakhda ah ha ku shubin weelka gacmaha lagu dhaqdo ama dhuunta biyaha: way xirmaysaa. Weydii meesha biyaha lagu shubi karo. Mashiinka qasa: laba gacmood ku qabo, oo si tartiib ah u shid. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "Malqaacadda ilkaha leh ayaan nadiifinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': "Waa waqtigii nasashadaada. Malqaacaddaada ilkaha leh waxaa ka buuxa xabag qoyan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': "Biyo ku nadiifi, kadibna naso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': "Iska daa: shaqada kadib ayaad nadiifinaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': "Ku rid baaldiga xabagta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': "Xabagta jaajuurku xataa nasashadaada way adkaataa. Malqaacad ilkaha leh oo nadiif ah waxay samaysaa xariiqyo wanaagsan, jaajuurkuna si fiican ayuu u dhegaa. Xabag adag oo ku taal waa shaqo badan, ama qalab cusub.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "Jaajuur, xabag iyo xariiqda dhexe", // nieuw, nalezen
    'w.tegel': "jaajuurka", // nieuw, nalezen
    'w.tegellijm': "xabagta jaajuurka", // nieuw, nalezen
    'w.tegelkruisje': "kala-dhigaha jaajuurka (qalab yar oo + u eg oo jaajuurrada dhexdooda la geliyo)", // nieuw, nalezen
    'w.hartlijn': "xariiqda dhexe (jaajuurka halkaas ayaa laga bilaabaa)", // nieuw, nalezen
    'w.tegelplaat': "looxa tababarka jaajuurka (loox lagu barto dhigista jaajuurka)", // nieuw, nalezen
    'w.potlood': "qalin qoriga", // nieuw, nalezen
    's.tiling.1': "Xabagta jaajuurku weli waa qoyan tahay.", // nieuw, nalezen
    's.tiling.2': "Kala-dhige geli jaajuurrada dhexdooda.", // nieuw, nalezen
    's.tiling.3': "Marka hore xariiqda dhexe ku sawir qalin qoriga.", // nieuw, nalezen
    'c.tiling.q': "Jaajuurka xaggee baan ka bilaabaa?", // nieuw, nalezen
    'c.tiling.a': "Bartamaha, xariiqda dhexe.", // nieuw, nalezen
    'c.tiling': "Ka bilow xariiqda dhexe, xabag yar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': "Qofka jaajuurka dhigaa kama bilaabo gees. Marka hore waxaad sawirtaa xariiqda dhexe, qalin qori iyo miisaanka biyaha, halkaasna waad ka bilowdaa. Markaas jaajuurrada la jaray ee labada dhinac waa isku cabbir. Xabag mari inta aad jaajuur ku dabooli karto waqti gaaban oo keliya. Xabagta muddo dheer taal waxaa ku sameysma diir qalalan, markaas jaajuurku si fiican uma dhego. Kala-dhige geli meel kasta oo xariiqyadu isku gooyaan, si dhammaan kala-goysyadu isku mid u noqdaan. Inta badan ku hubi miisaanka biyaha: jaajuur qalloocan hadda way fududahay in la hagaajiyo, berrina way adag tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "Xabag badan hal mar ma marinayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': "Wicitaan taleefan oo dheer kadib, xabagta derbiga ku taal waxaa ku sameysmay diir qalalan. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': "Xoq, oo xabag cusub mari.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': "Jaajuurka si kastaba ugu riix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': "Isbuunyo ku qoy, oo sii wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "Xabag diir qalalan leh si fiican uma hayso jaajuurka. Hadhow jaajuurku wuu ka soo bixi karaa, markaas shaqada mar kale ayaa la qabanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "Malaasid", // nieuw, nalezen
    'w.stucspaan': "malqaacadda malaaska (bir siman oo malaaska lagu simo)", // nieuw, nalezen
    'w.oplegspaan': "looxa malaaska (loox siman oo malaaska lagu haysto)", // nieuw, nalezen
    'w.spackmes': "mindida buuxinta (mindi ballaaran oo siman)", // nieuw, nalezen
    'w.rei': "ulka toosan (ul dheer oo toosan oo malaaska lagu simo)", // nieuw, nalezen
    'w.sponsspaan': "malqaacadda isbuunyada leh", // nieuw, nalezen
    'w.hoekprofiel': "birta geeska (bir dhuuban oo gees toosan samaysa)", // nieuw, nalezen
    's.plaster.1': "Marka hore birta geeska saar geeska.", // nieuw, nalezen
    's.plaster.2': "Derbiga ku sim malqaacadda malaaska.", // nieuw, nalezen
    's.plaster.3': "Ulka toosan derbiga dul jiid.", // nieuw, nalezen
    'c.plaster.q': "Derbigu ma qallalay?", // nieuw, nalezen
    'c.plaster.a': "Maya, sug maalin kale.", // nieuw, nalezen
    'c.plaster': "Malaasku waqti ayuu u baahan yahay si uu u qallalo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': "Malaas cusub muddo dheer ayuu qoyan yahay. Derbi qoyan wuu ka madow yahay mid qallalan. Rinjiiluhu wuxuu bilaabi karaa oo keliya marka derbigu meel kasta ka qallalo, taasina waxay qaadan kartaa maalmo ama toddobaadyo. Ha ku qallajin si dhakhso ah kuleyliye: markaas malaasku wuu dildillaaci karaa. Qof ma rabaa inuu rinjiyeeyo goor aad u hore? Dheh in derbigu aanu weli qallalin. Oo ka hor intaadan bilaabin, dabool dhulka, daaqadaha iyo godadka korontada: malaaska way adag tahay in la saaro.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': "Derbigu weli waa qoyan yahay. Weli ma rinjiyeyn kartid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': "Rinjiiluhu wuxuu rabaa inuu berri bilaabo. Malaaska cusub weli waxaa ku yaal baro madow. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': "U sheeg rinjiilaha: derbigu weli ma qallalin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': "Caawa kuleyliye hor dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': "Waxba ha odhan: rinjiiluhu wuu arki doonaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "Barooyinka madow waxay muujiyaan in malaasku weli qoyan yahay. Rinjiga derbi qoyan wuu ka soo bixi karaa, kuleyliyena wuxuu samayn karaa dildillaac. Sugiddu way ka jaban tahay in shaqada mar kale la qabto.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "Dhisid, alwaax iyo ku xirid", // nieuw, nalezen
    'u.machines': "Mashiinnada iyo qalabka", // nieuw, nalezen
    'l.shapes': "Qaababka", // nieuw, nalezen
    'w.vierkant': "afargeeslaha (afar dhinac oo isku dherer ah)", // nieuw, nalezen
    'w.rechthoek': "leydiga", // nieuw, nalezen
    'w.driehoek': "saddexagalka", // nieuw, nalezen
    'w.cirkel': "goobada", // nieuw, nalezen
    'w.kubus': "kuubka", // nieuw, nalezen
    'w.balk': "qaabka sanduuqa (qaab sanduuq dheer)", // nieuw, nalezen
    's.shapes.1': "Jaajuurku waa afargeesle.", // nieuw, nalezen
    's.shapes.2': "Qolkani waa leydi.", // nieuw, nalezen
    's.shapes.3': "Bulukeetigu wuxuu leeyahay qaab sanduuq dheer.", // nieuw, nalezen
    'c.shapes.q': "Ma afargeesle baa?", // nieuw, nalezen
    'c.shapes.a': "Maya, waa leydi. Dhererkiisu wuu ka badan yahay ballaciisa.", // nieuw, nalezen
    'c.shapes': "Leydi ku hubi laba xariiq oo isdhaafa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': "Qol, dhul ama firaam badanaa waa leydi. Laakiin geesuhu ma dhab ahaan qumman yihiin? Hubin fudud ayaa jirta. Ka cabbir hal gees ilaa geeska ka soo horjeeda. Kadib cabbir labada gees ee kale dhexdooda. Labada dherer ma isku mid baa? Markaas geesuhu waa sax. Isku mid ma aha? Markaas qaabku wax yar buu janjeeraa, jaajuurka ama dhulkuna si fiican uma galayaan. U sheeg madaxaaga ka hor intaadan bilaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "Labadan cabbir isku mid ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': "Dhul ayaad ka cabbirtaa gees ilaa gees, labada dhinacba. Mid ayaa ka dheer. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': "U sheeg madaxaaga ka hor intaadan bilaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': "Gees ka bilow, way fiicnaan doontaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': "Hal dhinac oo keliya mar kale cabbir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "Laba dherer oo kala duwan waxay muujiyaan in geesuhu aanay qummanayn. Markaas jaajuurka ama looxyadu ma galaan. Way fiican tahay inaad taas ogaato ka hor intaadan bilaabin.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "Xagallada iyo qaababka wareegsan", // nieuw, nalezen
    'w.hoek': "xagasha", // nieuw, nalezen
    'w.graad': "darajada (°)", // nieuw, nalezen
    'w.geodriehoek': "saddexagalka cabbirka (leh qalabka xagasha lagu cabbiro)", // nieuw, nalezen
    'w.boog': "qaansada, qalooca", // nieuw, nalezen
    'w.cilinder': "dhululubka", // nieuw, nalezen
    'w.parallellogram': "afargeesle janjeera (dhinacyadiisu way is barbar socdaan)", // nieuw, nalezen
    's.angles.1': "Xagashani waa sagaashan darajo.", // nieuw, nalezen
    's.angles.2': "Xagasha ku cabbir saddexagalka cabbirka.", // nieuw, nalezen
    's.angles.3': "Tuubadu waxay leedahay qaab dhululub.", // nieuw, nalezen
    'c.angles.q': "Xagashani waa immisa darajo?", // nieuw, nalezen
    'c.angles.a': "Shan iyo afartan. Badhka xagal qumman.", // nieuw, nalezen
    'c.angles': "Gees weyn ku hubi 3, 4 iyo 5", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': "Goobta dhismaha badanaa waxaad hubisaa xagal qumman: derbi dhul saaran, geeska qol. Gees yar waxaad ku hubisaa xagal-cabbiraha ama saddexagalka cabbirka. Gees weyn waxaa loo hayaa xeelad duug ah. Hal dhinac ku cabbir 3 mitir, dhinaca kalena 4 mitir, oo labadaba calaamad dhig. Calaamad ilaa calaamad ma si sax ah 5 mitir baa? Markaas xagashu waa 90 darajo. Wax ka yar sidoo kale way shaqeeyaan: 30, 40 iyo 50 sentimitir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "Xagashani ma qummana.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': "Waa inaad hubisaa gees weyn oo derbi cusub ah. Xagal-cabbirahaagu aad buu u yar yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': "Cabbir 3, 4 iyo 5 mitir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': "Meel fog ka eeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': "Si kastaba u isticmaal xagal-cabbiraha yar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': "3, 4 iyo 5 waxaad si sax ah ugu hubin kartaa gees weyn, mitirka duuban oo keliya. Isha, gees wuxuu u ekaan karaa mid sax ah, laakiin weli wuu khaldan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "Dherer, bed iyo mug", // nieuw, nalezen
    'w.lengte': "dhererka", // nieuw, nalezen
    'w.breedte': "ballaca", // nieuw, nalezen
    'w.hoogte': "joogga (inta uu kor u dheer yahay)", // nieuw, nalezen
    'w.oppervlakte': "bedka (dherer jeer ballac, mitir laba jibbaaran)", // nieuw, nalezen
    'w.inhoud': "mugga (dherer jeer ballac jeer joog)", // nieuw, nalezen
    'w.centimeter': "sentimitirka", // nieuw, nalezen
    's.size.1': "Bedku waa dhererka jeer ballaca.", // nieuw, nalezen
    's.size.2': "Muggu waa dherer jeer ballac jeer joog.", // nieuw, nalezen
    's.size.3': "Toban millimitir waa hal sentimitir.", // nieuw, nalezen
    'c.size.q': "Dhulku waa immisa mitir laba jibbaaran?", // nieuw, nalezen
    'c.size.a': "Afar jeer shan mitir, markaa labaatan mitir laba jibbaaran.", // nieuw, nalezen
    'c.size': "Xisaabi waxa aad u baahan tahay, kadib wax yar ku dar", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': "Immisa jaajuur, immisa rinji, immisa ciid? Waxaad ku xisaabisaa bedka ama mugga. Bedka: dhererka jeer ballaca, mitir laba jibbaaran. Mugga: dhererka jeer ballaca jeer joogga, mitir saddex jibbaaran. Wax walba ku cabbir isku cabbir: dhammaan mitir, ama dhammaan sentimitir. Cabbirrada qor, madaxaaga ha ku haynin. Kadib wax yar oo dheeraad ah ku dar, jajabka la jaray iyo khaladaadka. Ma hubtid? Saaxiib shaqo ka codso inuu xisaabtaada hubiyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "Cabbirrada waan qorayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': "Dhulka ayaad cabbirtay. Maanta waa inaad dalbataa jaajuurka. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': "Bedka xisaabi, oo wax yar ku dar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': "Bedka dalbo, hal jaajuur oo dheeraad ah ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': "Qiyaas: dhulka waad aragtay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': "Had iyo jeer jaajuur qaar ayaad jartaa, qaarna way jabaan. Wax yar oo dheeraad ah, uma baahnid inaad badhka shaqada joojiso oo mar kale dalbato.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "Rinjiyeyn", // nieuw, nalezen
    'w.verf': "rinjiga", // nieuw, nalezen
    'w.kwast': "burushka rinjiga (burush ballaaran)", // nieuw, nalezen
    'w.penseel': "burushka yar (geesaha iyo cidhifyada)", // nieuw, nalezen
    'w.roerstok': "usha lagu qaso", // nieuw, nalezen
    'w.tape': "cajaladda dahaadhka", // nieuw, nalezen
    'w.strijkvaatje': "weelka yar ee rinjiga (dheri yar oo aad gacanta ku hayso marka aad rinjiyeyso)", // nieuw, nalezen
    's.paint.1': "Marka hore rinjiga si fiican u qas.", // nieuw, nalezen
    's.paint.2': "Cidhifka cajalad ku dahaadh.", // nieuw, nalezen
    's.paint.3': "Rinji yar ku shub weelka yar ee rinjiga.", // nieuw, nalezen
    'c.paint.q': "Burushkee baan qaataa?", // nieuw, nalezen
    'c.paint.a': "Kan ballaaran derbiga, burushka yarna geesaha.", // nieuw, nalezen
    'c.paint': "Si fiican u qas, oo kor ilaa hoos u rinjiyee", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': "Rinji muddo taagnaa wuu ku qaro weyn yahay qasacadda hoosteeda. Sidaas darteed marka hore si fiican ugu qas usha lagu qaso, ilaa midabku meel kasta isku mid ka noqdo. Ha ka rinjiyeyn qasacadda weyn: rinji yar ku shub weelka yar ee rinjiga, oo qasacadda mar kale xir. Markaas rinjigu wuu fiicnaanayaa. Kor ilaa hoos u rinjiyee, si dhibcuhu ugu dhacaan rinji qoyan oo aad weli burushka ugu masaxi karto. Derbiga u isticmaal burushka ballaaran, geesahana burushka yar. Dhammaadka, burushyada isla markiiba nadiifi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "Marka hore rinjiga si fiican ayaan u qasayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': "Qasacad rinji ah oo duug ah ayaad furtay. Korka waa khafiif, hoosta waa qaro weyn. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': "Marka hore si fiican ugu qas usha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': "Ku rinjiyee rinjiga khafiifka ah ee korka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': "Biyo ku dar ilaa uu meel kasta khafiif ka noqdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "Qayb ka mid ah midabku wuxuu ku jiraa qasacadda hoosteeda. Qasid la'aan, derbigu wuxuu yeelanayaa baro iyo xariiqyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "U diyaargarow rinjiyeynta", // nieuw, nalezen
    'w.plamuurmes': "mindida buuxinta (godadka lagu buuxiyo)", // nieuw, nalezen
    'w.schuurpapier': "warqadda qalafsan (wax lagu simo)", // nieuw, nalezen
    'w.verfkrabber': "xoqaha rinjiga", // nieuw, nalezen
    'w.stoffertje': "burushka boodhka (boodhka lagu xaaqo)", // nieuw, nalezen
    'w.schuren': "simid (ku masaxid warqad qalafsan)", // nieuw, nalezen
    'w.afplakken': "dahaadhid (cidhif cajalad ku dabool)", // nieuw, nalezen
    's.prep.1': "Marka hore rinjiga duugga ah ka xoq.", // nieuw, nalezen
    's.prep.2': "Alwaaxda ku sim warqadda qalafsan.", // nieuw, nalezen
    's.prep.3': "Boodhka ku xaaq burushka boodhka.", // nieuw, nalezen
    'c.prep.q': "Ma rinjiyeyn karaa hadda?", // nieuw, nalezen
    'c.prep.a': "Maya, marka hore sim oo godka buuxi.", // nieuw, nalezen
    'c.prep': "Rinjiyeyn wanaagsan waxay bilaabataa rinjiga ka hor", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': "Rinjigu si fiican uguma dhego wasakh, boodh ama rinji duug ah oo dabacsan. Sidaas darteed marka hore rinjiga dabacsan ka xoq xoqaha rinjiga. Godadka ku buuxi alaabta buuxinta iyo mindida buuxinta, oo u daa alaabta buuxintu inay qallasho. Kadib ku sim warqadda qalafsan. Simidda kadib, boodhka ku xaaq burushka boodhka, cidhifyadana sidoo kale. Ugu dambayn, dahaadh waxa ay tahay inay nadiif ahaadaan, sida daaqadaha iyo godadka korontada. Simiddu waxay samaysaa boodh aad u yar: xiro maaskaro boodhka, oo weydii midka saxda ah. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "Marka hore sim, kadib rinjiyee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': "Albaabka ayaad simtay. Boodh ayaa weli saaran. Saaxiibkaaga shaqadu hadda ayuu rabaa inuu rinjiyeeyo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': "Marka hore boodhka ka xaaq, burushka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': "U oggolow inuu rinjiyeeyo: rinjigu boodhka wuu daboolayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': "Boodhka gacantaada ku masax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "Rinji boodh saaran si fiican uma dhego. Hadhow wuxuu u soo dhacaa jajab, markaas shaqada oo dhan mar kale ayaa la qabanayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "Bulukeeti dhisid", // nieuw, nalezen
    'w.speciekuip': "weelka malaaska", // nieuw, nalezen
    'w.metseltroffel': "malqaacadda dhismaha (bulukeetiga lagu dhiso)", // nieuw, nalezen
    'w.baksteen': "bulukeetiga", // nieuw, nalezen
    'w.cement': "sibidhka", // nieuw, nalezen
    'w.voegijzer': "birta kala-goysyada (lagu simo kala-goysyada u dhexeeya bulukeetiyada)", // nieuw, nalezen
    'w.handveger': "burushka gacanta", // nieuw, nalezen
    's.brick.1': "Weelka malaaska weli sibidh baa ku jira.", // nieuw, nalezen
    's.brick.2': "Kala-goyska ku sim birta kala-goysyada.", // nieuw, nalezen
    's.brick.3': "Derbiga ku nadiifi burushka gacanta.", // nieuw, nalezen
    'c.brick.q': "Immisa bulukeeti ayaa kuu haray?", // nieuw, nalezen
    'c.brick.a': "Hal baaleet oo kale. Maanta way ku filan yihiin.", // nieuw, nalezen
    'c.brick': "Derbiga nadiif ka dhig inta aad shaqaynayso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': "Malaasku waa qoyan yahay marka aad bulukeetiga dhigayso, saacado yar gudahoodna wuu adkaadaa. Sidaas darteed si nadiif ah u shaqee. Malaaska kala-goyska ka soo baxa isla markiiba ka xoq malqaacadda. Kala-goysyada ku sim birta kala-goysyada marka malaasku wax yar adkaado, ma aha marka uu weli qoyan yahay. Kadib derbiga ku xaaq burushka gacanta. Malaas adkaaday oo bulukeetiga hortiisa ku yaal aad bay u adag tahay in la saaro. Dhammaadka maalinta, dabool derbiga korkiisa, si roobku u maydhin malaaska.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "Kala-goysyada waan simayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': "Dhammaadka maalinta, malaas ayaa ku yaal bulukeetiyada hortooda. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': "Hadda ka xaaq, ka hor intaanu adkaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': "Iska daa: toddobaadka dambe ayaad nadiifinaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': "Derbiga ku dhaq biyo badan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "Malaas cusub si fudud ayuu burush ugu baxaa. Malaas adag bulukeetiga ayuu ku hadhaa, markaas derbigu si fiican uma muuqdo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "Derbi toosan", // nieuw, nalezen
    'w.metseltouw': "xarigga dhismaha (xarig loogu talagalay saf toosan)", // nieuw, nalezen
    'w.klos': "qabtaha xarigga (xarigga geeska ku haya)", // nieuw, nalezen
    'w.lagenmaatlat': "usha safafka (waxay muujisaa joogga saf kasta)", // nieuw, nalezen
    'w.profiel': "tiirka geeska (tiir toosan oo derbiga dhammaadkiisa ah)", // nieuw, nalezen
    'w.kop': "madaxa (dhinaca gaaban ee bulukeetiga)", // nieuw, nalezen
    'w.strek': "dhinaca dheer (dhinaca dheer ee bulukeetiga)", // nieuw, nalezen
    's.wall.1': "Xarigga dhismaha si adag u jiid.", // nieuw, nalezen
    's.wall.2': "Tiirka geesku waa inuu toosan yahay.", // nieuw, nalezen
    's.wall.3': "Bulukeetiga u dhig dhinaca dheer oo dibadda u jeeda.", // nieuw, nalezen
    'c.wall.q': "Safkan joogtiisu waa inuu noqdaa immisa?", // nieuw, nalezen
    'c.wall.a': "Eeg usha safafka.", // nieuw, nalezen
    'c.wall': "Xariggu derbiga ayuu toosiyaa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': "Qofka dhisaa isha kuma dhiso. Marka hore tiirarka geesku waa inay toosan yihiin, derbiga labadiisa dhammaad. Dhexdooda xarigga dhismaha si adag u jiid, joogga safka xiga. Bulukeeti kasta u dhig xarigga dhinaciisa, laakiin xarigga ha riixin. Usha safafku waxay muujisaa joogga saf kasta. Inta badan ku hubi miisaanka biyaha. Bulukeeti qalloocan way fududahay in la hagaajiyo inta malaasku qoyan yahay, berrina aad bay u adag tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "Xarigga dhismaha ma adag yahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': "Xarigga dhismaha waa dabacsan yahay oo dhexda wax yar buu ka laalaadaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': "Marka hore si adag u jiid, kadib sii wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': "Si kastaba bulukeetiga hoostiisa u dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': "Bulukeetiga isha ku dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "Xarig dabacsan dhexda ayuu ka laalaadaa, sidaas darteed safkuna wuu laalaadaa. Xarig adag wuxuu bixiyaa saf toosan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "Ka shaqaynta alwaaxda", // nieuw, nalezen
    'w.handzaag': "miinshaarka gacanta", // nieuw, nalezen
    'w.kapzaag': "miinshaarka yar (miinshaar yar oo dhabar adag leh)", // nieuw, nalezen
    'w.houtbeitel': "shiisalka alwaaxda (bir af leh oo alwaaxda lagu qoro)", // nieuw, nalezen
    'w.handschaaf': "randada gacanta (alwaaxda lagu simo)", // nieuw, nalezen
    'w.timmermanshamer': "dubbaha nijaarka", // nieuw, nalezen
    'w.houtenhamer': "dubbaha alwaaxda (dubbe alwaax ka samaysan)", // nieuw, nalezen
    's.wood.1': "Looxa cabbirkiisa ku jar.", // nieuw, nalezen
    's.wood.2': "Cidhifka ku sim randada.", // nieuw, nalezen
    's.wood.3': "Shiisalka ku garaac dubbaha alwaaxda.", // nieuw, nalezen
    'c.wood.q': "Miinshaarkee baan u baahanahay?", // nieuw, nalezen
    'c.wood.a': "Miinshaarka yar, gabalkan yar.", // nieuw, nalezen
    'c.wood': "Wixii gaaban lama hagaajin karo", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': "Alwaax aad u gaaban la jaray mar kale lama dheerayn karo. Sidaas darteed laba jeer cabbir, oo xariiqda sawir ka hor intaadan jarin. Ka jar xariiqda dhinaceeda, dhinaca gabalka aadan u baahnayn. Alwaaxda si deggan u hay: miis shaqo dushiis ama qabtaha, ma aha jilibkaaga. Miinshaarka u daa shaqada, dhaqdhaqaaq dheer oo deggan. Shiisalka ka riix jidhkaaga iyo gacantaada kale. Oo shiisalka iyo randada afkooda fiiq ka dhig: qalab af la' si fudud ayuu u simbiriirixdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "Mar kale ayaan cabbirayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': "Waa inaad looxa cabbirkiisa ku jartaa. Hal mar ayaad cabbirtay, si dhakhso ah. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': "Mar kale cabbir, kadib xariiqda sawir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': "Hadda jar: malaha waa sax.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': "Isha ku jar, xariiq la'aan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': "Aad u dheer mar kale waad jari kartaa, aad u gaabanna ma hagaajin kartid. Mar kale cabbiriddu waxay qaadataa daqiiqad; loox cusubna wax aad uga badan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "Calaamadeyn", // nieuw, nalezen
    'w.winkelhaak': "xagal-cabbiraha (wuxuu muujiyaa xagal qumman)", // nieuw, nalezen
    'w.verstekhaak': "xagal-cabbiraha goynta (45 darajo)", // nieuw, nalezen
    'w.zwaaihaak': "xagal-cabbiraha la dhaqaajiyo (xagasha adigu ayaa dejisa)", // nieuw, nalezen
    'w.kruishout': "qalabka xariiqda (xariiq buu ku sawiraa cidhifka dhinaciisa)", // nieuw, nalezen
    'w.passer': "barkaarka (goobo lagu sawiro)", // nieuw, nalezen
    'w.aftekenen': "calaamadeyn (sawir meesha aad jari doonto)", // nieuw, nalezen
    's.square.1': "Xariiqda ku calaamadee xagal-cabbiraha.", // nieuw, nalezen
    's.square.2': "Xagal-cabbiraha la dhaqaajiyo u deji xagasha saxda ah.", // nieuw, nalezen
    's.square.3': "Goobo ku sawir barkaarka.", // nieuw, nalezen
    'c.square.q': "Xagashu ma qumman tahay?", // nieuw, nalezen
    'c.square.a': "Haa, xagal-cabbiraha si sax ah ayuu ugu habboon yahay.", // nieuw, nalezen
    'c.square': "Ka calaamadee hal cidhif oo toosan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': "Ka hor intaadan jarin ama daloolin, waxaad calaamadaysaa meesha. Isticmaal qalin qori oo af fiiqan leh: xariiq qaro weyn sax ma aha. Dooro hal cidhif oo toosan oo alwaaxda ah, oo wax walba ka cabbir cidhifkaas. Qaybta qaro weyn ee xagal-cabbiraha si adag ugu hay, oo xariiqda u sawir birta dhinaceeda. Calaamad yar oo iskutallaab ah ku sawir gabalka aadan isticmaalayn. Kadib waxaad jartaa xariiqda dhinaceeda, dhinaca iskutallaabta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "Marka hore waan calaamadeynayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': "Qalinkaaga qoriga afkiisu waa xun yahay oo wuxuu sawiraa xariiq qaro weyn. Waxaad rabtaa inaad loox calaamadeyso. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': "Marka hore qalinka fiiq, kadib sawir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': "Si kastaba xariiqda u sawir, waa caadi.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': "Ciddiyahaaga ku calaamadee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': "Xariiq qaro weyn dhowr millimitir ayay ballaaran tahay. Markaas ma ogid meesha aad ka jarayso, gabalkuna sax ma noqonayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "Dariillada iyo musmaarrada la maroojiyo", // nieuw, nalezen
    'w.accuboor': "dariilka baytariga", // nieuw, nalezen
    'w.boormachine': "dariilka fiilada leh", // nieuw, nalezen
    'w.bitje': "afka dariilka (madaxa yar ee musmaarka maroojiya)", // nieuw, nalezen
    'w.plug': "caagga derbiga (caag yar oo godka la geliyo)", // nieuw, nalezen
    'w.schroevendraaier': "maroojiyaha musmaarka", // nieuw, nalezen
    'w.spijker': "musmaarka", // nieuw, nalezen
    's.screw.1': "God daloolji oo caagga derbiga geli.", // nieuw, nalezen
    's.screw.2': "Afka dariilkee ayaa ku habboon musmaarkan?", // nieuw, nalezen
    's.screw.3': "Musmaarka alwaaxda ku garaac.", // nieuw, nalezen
    'c.screw.q': "Xaggee buu yaal dariilka baytarigu?", // nieuw, nalezen
    'c.screw.a': "Dabka (charger-ka) ayuu ku jiraa, ku dhowaad wuu buuxaa.", // nieuw, nalezen
    'c.screw': "Eeg ka hor intaadan daloolin", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': "Ka hor intaadan derbi daloolin, ka fikir waxa gadaashiisa ah. Tuubooyinka iyo fiilooyinku badanaa waxay si toos ah kor, hoos ama dhinac uga socdaan god koronto ama badhan. Weydii meesha ay ku yaalaan, ama ku hubi qalab baara. Dooro dariil la cabbir ah caagga derbiga, oo godka ka dhig wax yar ka qoto dheer caagga. Musmaarka u isticmaal afka dariilka saxda ah: af khaldan wuu simbiriirixdaa oo madaxa musmaarka wuu burburiyaa. Xiro muraayadaha badbaadada marka aad daloolinayso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "Halkan ma daloolin karaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': "Waa inaad god ka daloolisaa god koronto dushiisa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': "Marka hore weydii meesha fiiladu marto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': "Daloolji: fiilo weligeed ma jirto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': "Si tartiib ah u daloolji, markaas waa ammaan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "Fiilo badanaa waxay si toos ah kor ugu socotaa god korontada. In la daloolsho way khatar tahay, hagaajintuna waa shaqo badan.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "Wax ku xirid", // nieuw, nalezen
    'w.bevestigen': "ku xirid (wax si adag derbiga ugu xirid)", // nieuw, nalezen
    'w.vastzetten': "adkayn (maroojin ilaa uu adkaado)", // nieuw, nalezen
    'w.lijmen': "xabag ku dhejin", // nieuw, nalezen
    'w.inbussleutel': "furaha lix-geeslaha (fure lix gees leh)", // nieuw, nalezen
    'w.kruisschroevendraaier': "maroojiyaha musmaarka ee iskutallaabta (af + u eg)", // nieuw, nalezen
    'w.platteschroevendraaier': "maroojiyaha musmaarka ee afka siman", // nieuw, nalezen
    's.fix.1': "Khaanadda derbiga ku xir.", // nieuw, nalezen
    's.fix.2': "Boolka ku adkee furaha lix-geeslaha.", // nieuw, nalezen
    's.fix.3': "Qaado maroojiyaha afka siman, ma aha kan iskutallaabta.", // nieuw, nalezen
    'c.fix.q': "Sideen khaanaddan u xiraa?", // nieuw, nalezen
    'c.fix.a': "Laba caag oo derbi iyo laba musmaar oo la maroojiyo.", // nieuw, nalezen
    'c.fix': "Adag, laakiin aan aad u adkayn", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': "Musmaar la maroojiyo ama bool waa inuu adag yahay, laakiin aanu aad u adkayn. Haddii aad aad u maroojiso, xarriiqyada musmaarka ayaa jaba ama alwaaxdu way dillaacdaa. Maroojii ilaa uusan dhaqaaqin, kadib jooji. Dariilka baytariga, marka hore giraanta lambarrada leh u wareeji lambar hoose. Khaanad derbiga saaran waxay u baahan tahay caag ku habboon derbiga: dhagaxu wuxuu u baahan yahay caag ka duwan derbi loox khafiif ah. Xabagtu waqti ayay u baahan tahay: qaybaha isku riix, ku qabo qabtaha, oo sug ilaa xabagtu qallasho.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "Khaanaddu si fiican ma ugu xiran tahay?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': "Laba gabal oo alwaax ah ayaad xabag isku dhejisay. Saaxiibkaaga shaqadu wuxuu rabaa inuu isla markiiba isticmaalo. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': "Dheh: xabagtu marka hore waa inay qallashaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': "U oggolow inuu isticmaalo: xabagtu way dhakhso badan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': "Daqiiqad gacmahaaga ku hay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': "Xabag qoyan weli wax ma hayso. Haddii goor hore la isticmaalo, qaybuhu mar kale way kala baxaan. Markaas waa inaad dib u bilowdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "Mashiinka agtiisa", // nieuw, nalezen
    'w.bedieningspaneel': "looxa xakamaynta (badhamada iyo shaashadda mashiinka)", // nieuw, nalezen
    'w.startknop': "badhanka bilowga (cagaar)", // nieuw, nalezen
    'w.hendel': "gacanta mashiinka (ul la jiido ama la riixo)", // nieuw, nalezen
    'w.afscherming': "daboolka ilaalinta (dabool qaybaha dhaqaaqa daboola)", // nieuw, nalezen
    'w.sensor': "dareemaha (wuxuu arkaa in wax halkaas yaalaan)", // nieuw, nalezen
    'w.signaallamp': "nalka digniinta (nalal midab leh oo mashiinka korkiisa ah)", // nieuw, nalezen
    's.atmachine.1': "Riix badhanka bilowga ee cagaarka ah.", // nieuw, nalezen
    's.atmachine.2': "Nalka digniintu waa casaan. Cillad ayaa jirta.", // nieuw, nalezen
    's.atmachine.3': "Waligaa ha ka qaadin daboolka ilaalinta.", // nieuw, nalezen
    'c.atmachine.q': "Maxay mashiinku had iyo jeer u istaagaa?", // nieuw, nalezen
    'c.atmachine.a': "Dareemuhu si fiican uma arko sanduuqa.", // nieuw, nalezen
    'c.atmachine': "Daboolka ilaalintu wuu joogaa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': "Qaybaha dhaqaaqa ee mashiinku waxay jiidi karaan gacan, gacanta shaatiga ama timo, hal ilbiriqsi gudihiis. Daboolka ilaalintu taas ayuu u jiraa. Waligaa ha ka qaadin, waligaana gacanta ha gelin gadaashiisa inta mashiinku shaqaynayo. Dabool ama dareeme miyaanay shaqayn? Markaas mashiinku ammaan ma aha: jooji oo u sheeg hoggaamiyaha kooxdaada. Wax ma ku dhegay? Marka hore jooji mashiinka, oo hubi inaan qofna shidi karin inta aad shaqaynayso. Sida taas loo sameeyo way ku kala duwan tahay shirkad kasta: weydii sharaxaadda ka hor intaadan bilaabin. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "Daboolka ilaalintu waa jaban yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': "Sanduuq ayaa ku dhegay mashiinka, daboolka ilaalinta gadaashiisa. Mashiinku wuu shaqaynayaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': "Marka hore jooji mashiinka, kadib caawimaad raadso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': "Si dhakhso ah gacanta u geli oo sanduuqa soo saar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': "Fur daboolka inta uu shaqaynayo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': "Mashiin shaqaynaya wuxuu jiidi karaa gacantaada ka hor intaadan wax samayn karin. Joojintu waxay qaadataa daqiiqad yar; gacan dhaawacantayna bilo.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "Cabbirid iyo hubin", // nieuw, nalezen
    'w.weegschaal': "miisaanka", // nieuw, nalezen
    'w.meetklok': "saacadda cabbirka (waxay cabbirtaa farqi aad u yar)", // nieuw, nalezen
    'w.loep': "muraayadda weyneysa", // nieuw, nalezen
    'w.monster': "muunadda (hal alaab oo aad u soo saarto si aad u hubiso)", // nieuw, nalezen
    'w.afkeurbak': "weelka alaabta la diiday (alaabta aan fiicnayn)", // nieuw, nalezen
    'w.teller': "tiriyaha (wuxuu tiriyaa alaabta)", // nieuw, nalezen
    's.inspect.1': "Alaabta saar miisaanka.", // nieuw, nalezen
    's.inspect.2': "Alaabtani waa waxyeelloobtay. Waxay galaysaa weelka alaabta la diiday.", // nieuw, nalezen
    's.inspect.3': "Calaamadda waxaan ku eegayaa muraayadda weyneysa.", // nieuw, nalezen
    'c.inspect.q': "Intee jeer ayaan muunad qaataa?", // nieuw, nalezen
    'c.inspect.a': "Saacad kasta hal. Ku qor liiska.", // nieuw, nalezen
    'c.inspect': "Qor waxa aad hubiso", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': "Warshadda waxaad alaabta hubisaa inta shaqadu socoto: waad miisaamtaa, waad cabbirtaa, ama si dhow ayaad u eegtaa. Hubin kasta isla markiiba ku qor liiska, iyo waqtiga. Ma aha hadhow, xusuustaada. Hal alaab miyaanay sax ahayn? Ku rid weelka alaabta la diiday oo si fiican u eeg kuwa xiga. Alaab badan ma khaldan tahay? Markaas mashiinka ayaa wax ka khaldan yihiin. Isla markiiba u sheeg hoggaamiyaha kooxdaada. Dhibaato goor hore la helo waxay badbaadisaa alaab badan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "Alaab badan ayaa khaldan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': "Miisaanku wuxuu muujinayaa in saddex alaab oo isku xiga ay aad u fudud yihiin. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': "Isla markiiba u sheeg hoggaamiyaha kooxdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': "Dib ugu celi khadka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': "Waxba ha oran: way dhacdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': "Saddex alaab oo khaldan oo isku xiga waxay tilmaamaan dhibaato mashiinka ku jirta. Inta aad goor hore u sheegto, ayaa alaab yar oo lumaysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "Baakadeyn", // nieuw, nalezen
    'w.verpakking': "baakadda", // nieuw, nalezen
    'w.krimpfolie': "caagga kululaynta (caag khafiif ah oo kulaylka ku adkaada)", // nieuw, nalezen
    'w.sealmachine': "mashiinka xiraha (baakad buu ku xiraa kulayl)", // nieuw, nalezen
    'w.vulmateriaal': "alaabta buuxinta (barkimooyin hawo ah ama warqad sanduuqa ku jira)", // nieuw, nalezen
    'w.afbreekmes': "mindida afkeeda la jebiyo", // nieuw, nalezen
    'w.tapepistool': "qalabka cajaladda", // nieuw, nalezen
    's.packing.1': "Alaabta buuxinta ku rid sanduuqa.", // nieuw, nalezen
    's.packing.2': "Sanduuqa ku xir qalabka cajaladda.", // nieuw, nalezen
    's.packing.3': "Mashiinka xirahu waa kulul yahay. Iska jir!", // nieuw, nalezen
    'c.packing.q': "Immisa alaab ayaa sanduuq gala?", // nieuw, nalezen
    'c.packing.a': "Laba iyo toban. Taas liiska ayay ku qoran tahay.", // nieuw, nalezen
    'c.packing': "Ka jar jidhkaaga dhinaca ka soo horjeeda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': "Baakadeyntu waa shaqo dhakhso ah, mindida afkeeda la jebiyona aad bay u fiiqan tahay. Had iyo jeer ka jar jidhkaaga iyo gacantaada kale dhinaca ka soo horjeeda. Afka mindida dib u geli jar kasta kadib, xataa marka aad mindida daqiiqad dhigayso. Gabal af la' si taxaddar leh uga jebi, oo ku tuur sanduuqa afafka duugga ah, ma aha qashinka caadiga ah. Mashiinka xiraha iyo qalabka kulaylka ee caagga kululaynta aad bay u kululaadaan: ha taaban qaybaha kulul. Oo sanduuq kasta hubi: alaabta saxda ah, tirada saxda ah, iyo calaamadda oo toosan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "Marka hore mindida dib ayaan u gelinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': "Mindida afkeeda la jebiyo daqiiqad ayaad miiska saartay. Afku weli wuu baxsan yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': "Marka hore afka dib u geli.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': "Iska daa: dhowaan ayaad mar kale u baahanaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': "Sidan jeebkaaga ku rid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': "Af furan oo miis ama jeeb ku jira wuu ku jari karaa adiga ama saaxiib shaqo. Dib u gelintu waxay qaadataa hal ilbiriqsi.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "Dayactirka", // nieuw, nalezen
    'w.persluchtpistool': "qoriga hawada (hawo cadaadis leh)", // nieuw, nalezen
    'w.steeksleutel': "furaha afka furan", // nieuw, nalezen
    'w.oliekannetje': "dhalada yar ee saliidda", // nieuw, nalezen
    'w.smeerpistool': "qoriga giriiska", // nieuw, nalezen
    'w.lekbak': "weelka dhibcaha (wuxuu qabtaa saliidda daadata)", // nieuw, nalezen
    'w.poetsdoek': "maradda nadiifinta", // nieuw, nalezen
    's.upkeep.1': "Saliid ayaa daadanaysa. Weelka dhibcaha hoos dhig.", // nieuw, nalezen
    's.upkeep.2': "Saliidda ku masax maradda nadiifinta.", // nieuw, nalezen
    's.upkeep.3': "Waligaa qoriga hawada ha ku fiiqin qof.", // nieuw, nalezen
    'c.upkeep.q': "Goorma ayaan mashiinka giriis marinaa?", // nieuw, nalezen
    'c.upkeep.a': "Isniin kasta, shiftiga ugu horreeya ka hor.", // nieuw, nalezen
    'c.upkeep': "Mashiin nadiif ah dhibaatooyinkiisa wuu muujiyaa", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': "Dayactir yar badanaa waa qayb ka mid ah shaqada: masaxid, saliid marin iyo giriis marin. Samee oo keliya marka mashiinku dansan yahay, iyo marka lagu baray sida loo sameeyo. Mashiin nadiif ah way fududahay in la hubiyo: daadasho ama qayb dabacsan isla markiiba waad aragtaa. Saliidda dhulka ku jirtaa way simbiriirixdaa. Weelka dhibcaha dhig daadashada hoosteeda, dhulka masax, oo u sheeg hoggaamiyaha kooxdaada. Marooyinka saliidda leh ku tuur weelka qashinka ee gaarka ah. Waligaa qoriga hawada ha ku fiiqin qof, waligaana ha ku nadiifin dharkaaga ama maqaarkaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "Mashiinka saliid ayaa ka daadanaysa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': "Waxaad aragtaa saliid yar oo mashiinka hoostiisa ku taal. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': "Weelka dhibcaha hoos dhig, oo sheeg.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': "Iska daa: waa wax yar oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': "Warqad dul saar, oo sii wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "Daadashadu way weynaataa, saliidda dhulka ku jirtaana dadka ayay simbiriirixisaa. Haddii goor hore la helo, waa hagaajin yar.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "Koronto, tuubooyin iyo bir", // nieuw, nalezen
    'l.wiring': "Isku xidhka siligyada", // nieuw, nalezen
    'w.draad': "siligga (hal silig, fiilada gudaheeda)", // nieuw, nalezen
    'w.stopcontact': "god korontada (derbiga ku yaal)", // nieuw, nalezen
    'w.schakelaar': "badhanka (nalka loogu talagalay)", // nieuw, nalezen
    'w.lasklem': "isku-xiraha siligyada (wuxuu isku xiraa siligyada)", // nieuw, nalezen
    'w.striptang': "biinsada siligga lagu qaawiyo", // nieuw, nalezen
    'w.kabelgoot': "marinka fiilooyinka (jid loogu talagalay fiilooyinka)", // nieuw, nalezen
    's.wiring.1': "Siligga hal sentimitir ka qaawi.", // nieuw, nalezen
    's.wiring.2': "Siligyada ku adkee isku-xiraha.", // nieuw, nalezen
    's.wiring.3': "Fiilooyinku waxay galaan marinka fiilooyinka.", // nieuw, nalezen
    'c.wiring.q': "Siliggee meeshee ayuu galaa?", // nieuw, nalezen
    'c.wiring.a': "Bunni iyo bunni, buluug iyo buluug.", // nieuw, nalezen
    'c.wiring': "Midabku wuxuu sheegaa waxa siliggu qabto", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': "Dhismaha gudihiisa siligyadu waxay leeyihiin midabyo go'an. Bunnigu (mararka qaar madow ama cawl) wuxuu keenaa korontada. Buluuggu wuu soo noqdaa. Cagaarka iyo jaallaha waa dhulka: wuxuu ilaaliyaa dadka, weligiisna wax kale looma isticmaalo. Midab ku xir midabkiisa. Qaawi oo keliya inta ku filan isku-xiraha: naxaas qaawan waa inaysan ka soo bixin. Siligga gudaha u riix, kadib si tartiib ah u jiid si aad u hubiso inuu adag yahay. Ma hubtid siliggu kee yahay? Jooji oo weydii.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "Dhulku waa midabkee?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': "Waxaad xiraysaa laambad. Gabal naxaas ah ayaa ka soo baxaya isku-xiraha. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': "Gaabi, oo mar kale xir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': "Iska daa: laambaddu way shaqaynaysaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': "Cajalad ku duub.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "Naxaas qaawan oo ka baxsan isku-xiraha wax ayay taaban kartaa. Taasi waxay keeni kartaa koronto ku qabata ama gaagaabin koronto, xitaa bilo kadib.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "Cabbirid iyo shaqo ammaan ah", // nieuw, nalezen
    'w.multimeter': "multimiitarka (wuxuu cabbiraa korontada)", // nieuw, nalezen
    'w.spanningzoeker': "baaraha korontada (maroojiye leh nal yar)", // nieuw, nalezen
    'w.meterkast': "sanduuqa fiyuusyada", // nieuw, nalezen
    'w.zekering': "fiyuuska (wuxuu damiyaa korontada marka wax khaldan yihiin)", // nieuw, nalezen
    'w.hangslot': "qufulka", // nieuw, nalezen
    'w.aardedraad': "siligga dhulka (cagaar iyo jaalle)", // nieuw, nalezen
    's.testing.1': "Fiyuusku wuu dhacay.", // nieuw, nalezen
    's.testing.2': "Badhanka quful ku xir.", // nieuw, nalezen
    's.testing.3': "Marka hore ku cabbir multimiitarka.", // nieuw, nalezen
    'c.testing.q': "Ma furi karaa sanduuqa fiyuusyada?", // nieuw, nalezen
    'c.testing.a': "Maya, farsamayaqaanka korontada ayaa sameeya.", // nieuw, nalezen
    'c.testing': "Dami, qufuli, cabbir", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': "Ka hor intaadan koronto ka shaqayn, qaad saddex tallaabo. Dami: fiyuuska saxda ah ee sanduuqa fiyuusyada, ma aha oo keliya badhanka derbiga. Qufuli: ku xir qufulkaaga, furahana adigu hay, si aan qofna mar kale u shidin. Cabbir: ku hubi baaraha korontada ama multimiitarka in aysan dhab ahaantii koronto jirin. Markaas oo keliya ayaad bilaabaysaa. Fiyuus ma mar kasta ayuu dhacaa? Ha sii shidin: u sheeg madaxaaga. Shaqo koronto samee oo keliya marka laguu sheego inaad samayn karto. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "Hadda koronto kuma jirto.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': "Waxaad damisay fiyuuska. Saaxiib shaqo ayaa yiri: “Hadda bilow, waa demsan yahay.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': "Qufuli, oo marka hore cabbir.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': "Bilow: saaxiibkaaga shaqadu wuu og yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': "Siligga si dhakhso ah u taabo si aad u hubiso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "Mararka qaar fiyuus khaldan ayaa la damiyaa, ama qof ayaa mar kale shida. Quful iyo cabbir ayaa muujiya inay dhab ahaantii ammaan tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "Tuubooyin iyo biyo", // nieuw, nalezen
    'w.buis': "tuubada", // nieuw, nalezen
    'w.koppeling': "isku-xiraha tuubada (wuxuu isku xiraa laba tuubo)", // nieuw, nalezen
    'w.pijpsnijder': "jaraha tuubada", // nieuw, nalezen
    'w.waterpomptang': "biinsada tuubooyinka", // nieuw, nalezen
    'w.afsluiter': "waalka biyaha (wuxuu xiraa biyaha)", // nieuw, nalezen
    'w.teflontape': "cajaladda xarriiqyada (cajalad cad oo loogu talagalay xarriiqyada tuubada)", // nieuw, nalezen
    's.pipes.1': "Xir waalka biyaha.", // nieuw, nalezen
    's.pipes.2': "Tuubada ku jar jaraha tuubada.", // nieuw, nalezen
    's.pipes.3': "Cajaladda xarriiqyada ku duub xarriiqyada.", // nieuw, nalezen
    'c.pipes.q': "Isku-xiraha weli ma daadanayaa?", // nieuw, nalezen
    'c.pipes.a': "Wax yar. Waxaan sii adkaynayaa in yar.", // nieuw, nalezen
    'c.pipes': "Marka hore biyaha xir, baaldina diyaari", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': "Ka hor intaadan furin tuubo biyo, xir waalka biyaha. Kadib fur qasabad ka hoosaysa, si tuubadu u madhato. Baaldi iyo maro dhig meesha aad ka shaqaynayso hoosteeda. Tuubada naxaasta ah ku jar jaraha tuubada, ha ku jarin miinshaar: afku wuxuu ahaanayaa wareeg oo nadiif ah. Isku-xiraha si adag u maroojii, laakiin aan aad u xoog badnayn. Marka aad dhammayso, biyaha si tartiib ah u fur oo dhibco raadi. Daadasho yar oo aad iska dhaafto waxay noqotaa waxyeello biyo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "Biyaha ma la xiray?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': "Waxaad samaysay isku-xire cusub. Biyaha ayaad furaysaa. Daqiiqad kasta dhibic yar ayaa dhacda. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': "Biyaha xir, oo adkee ama dib u samee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': "Iska daa: waa hal dhibic oo keliya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': "Baaldi hoos dhig oo guriga aad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "Hal dhibic daqiiqaddii waa litirro badan toddobaadkii. Biyuhu waxay waxyeelayn karaan dhulka ama saqafka hoose.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "Ka shaqaynta birta", // nieuw, nalezen
    'w.bankschroef': "qabtaha miiska (wuxuu qayb si adag ugu hayaa miiska shaqada)", // nieuw, nalezen
    'w.vijl': "soofaha (birta gacanta lagu simo)", // nieuw, nalezen
    'w.ijzerzaag': "miinshaarka birta (miinshaar loogu talagalay birta)", // nieuw, nalezen
    'w.kolomboormachine': "dariilka taagan (dariil weyn oo istaag saaran)", // nieuw, nalezen
    'w.draadtap': "xarriiq-sameeyaha (wuxuu god ku sameeyaa xarriiqyo)", // nieuw, nalezen
    'w.braam': "geeska fiiqan (cidhif fiiqan oo ka hara jaridda birta)", // nieuw, nalezen
    's.metalwork.1': "Birta ku adkee qabtaha miiska.", // nieuw, nalezen
    's.metalwork.2': "Geeska fiiqan ka soofee.", // nieuw, nalezen
    's.metalwork.3': "Gacmahaaga ka fogee dariilka.", // nieuw, nalezen
    'c.metalwork.q': "Maxay cidhifku sidaas u fiiqan yahay?", // nieuw, nalezen
    'c.metalwork.a': "Weli geeso fiiqan ayaa ku yaal.", // nieuw, nalezen
    'c.metalwork': "Ku adkee, weligaa gacanta ha ku qaban", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': "Dariilka taagan agtiisa, weligaa qayb yar gacanta ha ku qaban. Dariilku wuu qabsan karaa oo aad iyo aad ayuu u wareejin karaa. Ku adkee qabtaha miiska. Timo dheer gadaal u xir, hana xiran gacmo-gashi dariil wareegaya agtiisa: gacmo-gashiga wuu jiidi karaa. Xiro muraayadaha badbaadada. Miinshaarid ama daloolin kadib, birtu waxay leedahay geeso fiiqan: cidhif af leh. Ka soofee ka hor intaadan qaybta gacanta ku qaadin ama qof u dhiibin. Jajabka birta ku xaaq burush, ha ku xaaqin gacantaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "Marka hore waan adkaynayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': "Waa inaad god ka daloolisaa gabal yar oo bir ah. Qabtaha miisku wuxuu saaran yahay miis kale. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': "Soo qaado qabtaha miiska, oo gabalka ku adkee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': "Gacantaada si adag ugu qabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': "Xiro gacmo-gashi oo qabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': "Dariilku wuu qabsan karaa qayb yar oo wareejin karaa. Markaas wuxuu ku dhacaa gacantaada. Qabtaha miiska dhexdiisa wuu deggan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "Rakibaadda", // nieuw, nalezen
    'l.assembly': "Khadka rakibaadda agtiisa", // nieuw, nalezen
    'w.werkinstructie': "tilmaanta shaqada (warqad ay tallaabooyinku ku qoran yihiin)", // nieuw, nalezen
    'w.onderdelenbak': "weelka qaybaha", // nieuw, nalezen
    'w.mal': "qaabka qabta (wuxuu qaybta ku hayaa meesha saxda ah)", // nieuw, nalezen
    'w.rolbaan': "khadka giraangiraha", // nieuw, nalezen
    'w.montagetafel': "miiska rakibaadda", // nieuw, nalezen
    'w.voetpedaal': "badhanka cagta (badhan aad cagta ku riixdo)", // nieuw, nalezen
    's.assembly.1': "Marka hore akhri tilmaanta shaqada.", // nieuw, nalezen
    's.assembly.2': "Weelka qaybuhu ku dhowaad wuu madhan yahay.", // nieuw, nalezen
    's.assembly.3': "Qaybta dhig qaabka qabta.", // nieuw, nalezen
    'c.assembly.q': "Tallaabadee ayaa hadda xigta?", // nieuw, nalezen
    'c.assembly.a': "Tallaabada afraad. Eeg tilmaanta shaqada.", // nieuw, nalezen
    'c.assembly': "Raac tallaabooyinka, isla kala horreyskii", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': "Khadka rakibaadda, tallaabo kasta waxay leedahay meesheeda iyo kala horreyskeeda. Tilmaanta shaqada ayaa muujisa, badanaa sawirro leh. Tallaabooyinka mar kasta ku samee isla kala horreyskii, xataa marka aad u malaynayso inaad taqaanid hab ka dhakhso badan. Kala horreys kale wuxuu samayn karaa alaab u muuqata mid fiican laakiin aan shaqayn. Weel ma ku dhowaad madhan yahay? Goor hore sheeg, si khadku u istaagin. Ma aragtaa tallaabo ka fiicnaan karta? U sheeg hoggaamiyaha kooxdaada: markaas way u beddelmi kartaa qof walba.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "Waxaan u baahanahay qaybo cusub.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': "Waxaad heshay hab ka dhakhso badan oo tallaabada saddexaad lagu sameeyo. Tilmaanta shaqadu wax kale ayay sheegaysaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': "Marka hore weydii hoggaamiyaha kooxdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': "Hadda kadib habkaaga u samee.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': "Saaxiibbadaa shaqada bar habkaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': "Kala horreysku badanaa wuxuu leeyahay sabab aadan arki karin. Haddii habkaagu ka fiican yahay, way u beddelmi kartaa qof walba.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "Adkaynta iyo isku xirka", // nieuw, nalezen
    'w.schroefmachine': "mashiinka musmaarka maroojiya (khadka korkiisa ayuu ka laalan yahay)", // nieuw, nalezen
    'w.momentsleutel': "furaha xoogga (wuu dhawaaqaa marka boolku si ku filan u adag yahay)", // nieuw, nalezen
    'w.tiewrap': "xarigga caagga ee fiilooyinka", // nieuw, nalezen
    'w.sluitring': "giraanta boolka", // nieuw, nalezen
    'w.klinknagel': "musmaarka la tumo", // nieuw, nalezen
    'w.popnageltang': "qalabka musmaarka la tumo", // nieuw, nalezen
    's.fastening.1': "Boolka ku adkee furaha xoogga.", // nieuw, nalezen
    's.fastening.2': "Ha illoobin giraanta boolka.", // nieuw, nalezen
    's.fastening.3': "Fiilooyinka isku xir xarigga caagga.", // nieuw, nalezen
    'c.fastening.q': "Boolkan intee le'eg ayaa la adkeeyaa?", // nieuw, nalezen
    'c.fastening.a': "Ilaa furaha xooggu dhawaaqo.", // nieuw, nalezen
    'c.fastening': "Dhawaaqu wuu ku filan yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': "Furaha xooggu wuu dhawaaqaa marka boolku si ku filan u adag yahay. Ku jooji dhawaaqa: ha sii maroojin. Aad u adag wuxuu jebin karaa boolka ama qaybta, aad u dabacsanna wuu ka furmi karaa. Mashiinka musmaarka maroojiya sidaas oo kale ayuu u shaqeeyaa: isagaa is joojiya. Giraan kasta meesheeda dhig: giraan maqan hadhow way adag tahay in la arko. Tiri boolalkaaga. Mid ma kuu hadhay, mise mid kale ayaad u baahan tahay? Markaas wax ayaa khaldan: u sheeg hoggaamiyaha kooxdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "Bool ayaa hadhay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': "Furaha xooggaagu wuu dhawaaqay. Boolku weli wax yar dabacsan ayuu kula yahay. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': "Jooji, oo weydii hoggaamiyaha kooxdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': "Gacanta ku sii maroojii wax yar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': "Isticmaal fure ka dheer.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "Dhawaaqa waxaa loo dejiyay xoogga saxda ah. Haddii ay khaldan kula tahay, furaha ayaa laga yaabaa inuu u baahan yahay hubin. Sii maroojintu waxay jebin kartaa boolka.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "Qaadid iyo dhaqaajin", // nieuw, nalezen
    'w.takel': "wiishka silsiladda (wuxuu silsilad ku qaadaa qaybaha culus)", // nieuw, nalezen
    'w.hijshaak': "jillaabka wiishka", // nieuw, nalezen
    'w.tilhulp': "qalabka qaadista (wuxuu qayb ku qabtaa nuugid)", // nieuw, nalezen
    'w.onderdelenkar': "gaariga qaybaha", // nieuw, nalezen
    'w.draaitafel': "miiska wareega (qaybta ayaad wareejisaa, ma aha naftaada)", // nieuw, nalezen
    'w.rolcontainer': "qafiska giraangiraha leh (qafis dheer oo giraangiro saaran)", // nieuw, nalezen
    's.handling.1': "Tan keligaa ha qaadin. Isticmaal wiishka silsiladda.", // nieuw, nalezen
    's.handling.2': "Jillaabka wiishku si fiican ma u xiran yahay?", // nieuw, nalezen
    's.handling.3': "Gaariga qaybaha riix, ha jiidin.", // nieuw, nalezen
    'c.handling.q': "Ma istaagi karaa wiishka silsiladda hoostiisa?", // nieuw, nalezen
    'c.handling.a': "Maya, weligaa xamuul laalan hoostiisa.", // nieuw, nalezen
    'c.handling': "Wiishku ha qabto shaqada culus", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': "Qaybaha culus waxaa lagu qaadaa wiish silsilad ama qalab qaadis, ma aha dhabarkaaga. Hubi jillaabka ka hor intaadan qaadin: qufulka jillaabku waa inuu xirmaa. Si tartiib ah u qaad, gacmahaaga iyo cagahaagana ka fogee xamuulka. Weligaa ha istaagin ama ha marin xamuul laalan hoostiisa. Miiska wareega u isticmaal si aad qayb u wareejiso: markaas uma baahnid inaad dhabarkaaga qalloociso. Gaari ama qafis giraangiro leh riix: waad aragtaa meesha aad u socoto, dhabarkaaguna shaqo yar ayuu qabtaa. Wiishka silsiladda isticmaal oo keliya marka lagu baray sida loo isticmaalo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "Waxaan isticmaalayaa wiishka silsiladda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': "Qayb ayaa aad u culus. Wiishku wuu mashquulsan yahay toban daqiiqo oo kale. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': "Sug wiishka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': "Keligaa si dhakhso ah u qaad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': "Dhulka ku jiid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': "Qayb culus waxay dhabarkaaga ku dhaawici kartaa hal ilbiriqsi. Toban daqiiqo oo sugid ah ayaa ka fiican bilo xanuun ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "Hubinta ugu dambaysa", // nieuw, nalezen
    'w.typeplaatje': "looxa nooca (loox bir ah oo yar oo nooca iyo lambarka ku qoran yihiin)", // nieuw, nalezen
    'w.stempel': "shaabadda", // nieuw, nalezen
    'w.testbank': "miiska tijaabada", // nieuw, nalezen
    'w.goedkeursticker': "dhejiska oggolaanshaha (dhejis cagaar ah: alaabtu waa fiican tahay)", // nieuw, nalezen
    'w.kras': "xoqidda", // nieuw, nalezen
    'w.barst': "dillaaca", // nieuw, nalezen
    's.finalcheck.1': "Looxa noocu wuu qalloocan yahay.", // nieuw, nalezen
    's.finalcheck.2': "Alaabtan xoqid ayaa ku taal.", // nieuw, nalezen
    's.finalcheck.3': "Dhejiska oggolaanshaha la'aantiis ma baxayso.", // nieuw, nalezen
    'c.finalcheck.q': "Alaabtani ma fiican tahay?", // nieuw, nalezen
    'c.finalcheck.a': "Maya, dillaac ayaa ku jira.", // nieuw, nalezen
    'c.finalcheck': "Alaabta fiican oo keliya ayaa hela dhejiska", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': "Hubinta ugu dambaysa waa fursadda ugu dambaysa ee khalad lagu helo ka hor intaanu macmiilku helin. Hubi qodob kasta oo liiska ku jira, xataa marka shaqadu badan tahay. Xoqid yar ama dillaac way fududahay in la dhaafo: ku eeg iftiin fiican, iyo in ka badan hal dhinac. Dhejiska oggolaanshaha ama shaabadda saar oo keliya marka qodob kastaa fiican yahay. Ma hubtid? Alaabta dhinac dhig oo weydii. Khalad halkan lagu helo wax yar ayuu ku kacaa, khalad macmiilka gaarana wax badan ayuu ku kacaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "Alaabtan dhinac ayaa la dhigayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': "Khadku waa mashquul. Waxaad aragtaa xoqid yar oo alaab ku taal, calaamadda hoosteeda. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': "Dhinac dhig, oo u sheeg hoggaamiyaha kooxdaada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': "Dhejiska saar: xoqiddu waa yar tahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': "Calaamadda u dhaqaaji xoqidda dusheeda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "Xoqid yar waxay noqon kartaa calaamad dhibaato khadka ku jirta. Qarintu waxay dhibaatada oo keliya u wareejisaa macmiilka.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "Beerista, kala soocidda iyo aqalka dhirta", // nieuw, nalezen
    'l.sowing': "Abuurka iyo laamaha la beero", // nieuw, nalezen
    'w.zaad': "abuurka (iniinaha)", // nieuw, nalezen
    'w.zaaibak': "saxanka abuurka", // nieuw, nalezen
    'w.stek': "laanta la beero (qayb geed ah oo xidido cusub soo saarta)", // nieuw, nalezen
    'w.potgrond': "carrada dheriga", // nieuw, nalezen
    'w.kweekpot': "dheriga beerista", // nieuw, nalezen
    'w.gieter': "weelka dhirta lagu waraabiyo", // nieuw, nalezen
    's.sowing.1': "God kasta laba iniinood geli.", // nieuw, nalezen
    's.sowing.2': "Laanta geli carrada dheriga.", // nieuw, nalezen
    's.sowing.3': "Dhirta yaryar xoogaa biyo ah sii.", // nieuw, nalezen
    'c.sowing.q': "Abuurku intee in le'eg ayuu hoos u galaa?", // nieuw, nalezen
    'c.sowing.a': "Badh sentimitir. Wax ka badan maya.", // nieuw, nalezen
    'c.sowing': "Dhirta yaryar waxay u baahan yihiin gacan jilicsan", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': "Dhirta yaryar way tabar yar yihiin. Laanta ama geedka yar ka qabo caleen, ha ka qaban jirridda: caleentu mar kale way soo baxdaa, jirrid jabtayse ma soo baxdo. Carrada si tartiib ah u riix, ha u riixin si adag. Biyaha si tartiib ah ugu shub buufin jilicsan, si aanay iniinuhu u qulqulin. Gacmo nadiif ah iyo saxanno nadiif ah ku shaqee: dhirta yaryar si fudud ayay u xanuunsadaan. Saxan kasta ku qor taariikhda iyo nooca geedka, si qof walba u ogaado waxa ku jira.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "Waxaan ka qabtaa caleenta.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': "Waa inaad geed yar u wareejiso dheri. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': "Si tartiib ah uga qabo caleen.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': "Ka soo jiid jirridda.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': "Carrada la tuuji oo soo saar.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "Caleentu mar kale way soo bixi kartaa. Jirrid jabtay ma soo bixi karto, markaasna geedku wuu dhintaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "Kala soocidda iyo baakadeynta", // nieuw, nalezen
    'w.tros': "rucubta (yaanyo badan oo hal jirrid ku taal)", // nieuw, nalezen
    'w.bakje': "sanduuqa yar (sanduuq yar oo miraha loogu talagalay)", // nieuw, nalezen
    'w.sorteermachine': "mashiinka kala soocidda", // nieuw, nalezen
    'w.etiketpistool': "qalabka calaamadaha lagu dhejiyo", // nieuw, nalezen
    'w.kleurenkaart': "kaarka midabada (wuxuu muujiyaa inta ay tahay inay miruhu bislaadaan)", // nieuw, nalezen
    'w.tomatenschaar': "maqaska goosashada", // nieuw, nalezen
    's.sorting.1': "Rucubyada si taxaddar leh ugu rid sanduuqa.", // nieuw, nalezen
    's.sorting.2': "Yaanyadan aad bay u bislaatay. Gooni ayay u socotaa.", // nieuw, nalezen
    's.sorting.3': "Eeg kaarka midabada.", // nieuw, nalezen
    'c.sorting.q': "Yaanyadan si ku filan ma u bislaatay?", // nieuw, nalezen
    'c.sorting.a': "Maya, weli aad bay u cagaaran tahay. Geedka ku daa.", // nieuw, nalezen
    'c.sorting': "Mire kasta wuu muhiim yahay", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': "Miraha iyo khudradda si fudud ayay u nabaraan. Si tartiib ah u dhig, ha ridin hana tuurin. Maanta nabarka ma aragtid, laakiin berri miruhu waa jilicsan yihiin oo bunni yihiin. Eeg kaarka midabada si aad u ogaato midabkee meeshee aado. Mire dhaawacan ama qudhmay gooni u dhig: hal mire xun oo sanduuq yar ku jira ayaa kuwa kale halleyn kara. Sanduuqyada yaryar iyo sanduuqyada kale nadiif ka dhig, waligaana dhulka ha dhigin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "Kani waa dhaawacan yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': "Waxaad buuxinaysaa sanduuqyo yaryar. Hal yaanyo ayaa leh bar jilicsan oo bunni ah. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': "Gooni u dhig.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': "Ku qari sanduuqa hoostiisa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': "Si kastaba ha ahaatee ku rid.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "Yaanyo qudhuntay waxay ka dhigtaa kuwa kale inay si dhakhso ah u qudhmaan. Macmiilka ayaa hela, sanduuqa oo dhanna dib ayuu u soo noqdaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "Aqalka dhirta iyo cimiladiisa", // nieuw, nalezen
    'w.buisrailkar': "gaariga tuubooyinka (wuxuu ku socdaa tuubooyinka kululeynta)", // nieuw, nalezen
    'w.druppelaar': "dhibcisaha (biyaha dhibic dhibic ayuu u bixiyaa)", // nieuw, nalezen
    'w.luchtraam': "daaqadda saqafka (daaqad saqafka ku taal)", // nieuw, nalezen
    'w.kasscherm': "daahda aqalka dhirta (maro saqafka hoostiisa ku jirta)", // nieuw, nalezen
    'w.ventilator': "marawaxadda", // nieuw, nalezen
    'w.thermometer': "heerkulbeegga", // nieuw, nalezen
    's.greenhouse.1': "Gaariga tuubooyinka u wad dhammaadka safka.", // nieuw, nalezen
    's.greenhouse.2': "Dhibcisuhu wuu debecsan yahay.", // nieuw, nalezen
    's.greenhouse.3': "Waa kulayl. Daaqadaha saqafka ayaa furmaya.", // nieuw, nalezen
    'c.greenhouse.q': "Maxay aqalka dhirta sidan ugu kulul tahay?", // nieuw, nalezen
    'c.greenhouse.a': "Daahdu waa xiran tahay, daaqaduhuna sidoo kale.", // nieuw, nalezen
    'c.greenhouse': "Cimilada u daa kombiyuutarka", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': "Aqalka dhirta kombiyuutar ayaa dejiya cimilada: daaqadaha, daahda, kululeynta iyo biyaha. Daaqad ha furin, dejinna ha beddelin adigoo keligaa ah. Ma aragtaa wax yaab leh, sida dhibcis daadanaya ama daaqad aan xirmin? U sheeg madaxaaga. Gaariga tuubooyinka wuxuu ku socdaa tuubooyinka kululeynta: isticmaal oo keliya marka aad baratay sida loo isticmaalo. Cagahaaga ku hay sagxadda gaariga, waligaana ha taaban tuubooyinka: way kululaan karaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "Dhibcisahan ayaa daadanaya.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': "Dhibcis ayaa debecsan. Biyo ayaa dhulka ku qulqulaya. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': "Dib u geli, oo u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': "Iska daa: waa biyo uun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': "Biyaha ka xir safka oo dhan.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "Dhibcis debecsan biyo ayuu khasaariyaa, geedku wax yar ayuu helaa, dhul qoyanna waa simbiriirix.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "Cayayaanka waxyeelada iyo shaqo nadiif ah", // nieuw, nalezen
    'w.luis': "injirta dhirta (cayayaan yar oo cagaaran oo dhirta ku nool)", // nieuw, nalezen
    'w.vangplaat': "kaarka dhejiska (kaar jaalle ah oo cayayaanka qabta)", // nieuw, nalezen
    'w.rups': "dirxiga", // nieuw, nalezen
    'w.sluipwesp': "dabbarka faa'iidada leh (dabbar yar oo dila cayayaanka waxyeelada)", // nieuw, nalezen
    'w.schimmel': "caarada", // nieuw, nalezen
    'w.ontsmettingsmat': "rooga jeermis-dilaha (albaabka ayaad ku tallaabsataa)", // nieuw, nalezen
    's.pests.1': "Caleentan injir ayaa ku taal.", // nieuw, nalezen
    's.pests.2': "Kaarka dhejiska ka laadlaadi dhirta korkeeda.", // nieuw, nalezen
    's.pests.3': "Ku dul soco rooga jeermis-dilaha.", // nieuw, nalezen
    'c.pests.q': "Dabbarkan ma dili karaa?", // nieuw, nalezen
    'c.pests.a': "Maya, kani waa dabbar faa'iido leh. Wuu na caawiyaa.", // nieuw, nalezen
    'c.pests': "Cudurrada ha u qaadin saf ilaa saf", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': "Cudur ama cayayaan waxyeelo leh si dhakhso ah ayuu ugu faafaa aqalka dhirta. Waxaad ku qaadi kartaa gacmahaaga, dharkaaga iyo qalabkaaga. Sidaas darteed albaab kasta ku dul soco rooga jeermis-dilaha, gacmahaagana dhaq marka aad u gudubto qayb kale oo aqalka dhirta ah. Shaqadaada ka bilow safafka caafimaadka qaba, kuna dhammee safafka xanuunsan. Ma aragtaa cayayaan, baro ama caarad geed ku taal? Ha taaban, laakiin u sheeg madaxaaga meesha ay ku taal. Cayayaanka aqalka dhirta qaarkood waa caawiyeyaal: iska daa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "Halkan caarad ayaa ku taal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': "Waxaad aragtaa caarad cawl ah oo ku taal dhawr geed oo safkaaga ah. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': "U sheeg madaxaaga meesha ay ku taal.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': "Ka gooso caleemaha xun oo sii wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': "Waxba ha oran: waa dhawr geed uun.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "Caaradu si dhakhso ah ayay u faaftaa. Madaxaagu wuu og yahay waxa la sameeyo iyo meesha laga bilaabo.", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "Taayirada, saliidda iyo bareegyada", // nieuw, nalezen
    'l.tyres': "Beddelidda taayirada", // nieuw, nalezen
    'w.wielbout': "boolka shaagga", // nieuw, nalezen
    'w.slagmoersleutel': "furaha garaaca", // nieuw, nalezen
    'w.bandenspanningsmeter': "cabbiraha hawada taayirka", // nieuw, nalezen
    'w.bandenprofiel': "ilkaha taayirka (jeexyada taayirka)", // nieuw, nalezen
    'w.velg': "jaantada", // nieuw, nalezen
    'w.bandenwisselaar': "mashiinka taayirka (mashiin taayirka ka saara jaantada)", // nieuw, nalezen
    's.tyres.1': "Boolasha shaagga u adkee si iskutallaab ah.", // nieuw, nalezen
    's.tyres.2': "Ilkaha taayirku aad bay u hooseeyaan.", // nieuw, nalezen
    's.tyres.3': "Hawada ku cabbir cabbiraha hawada taayirka.", // nieuw, nalezen
    'c.tyres.q': "Taayiradan miyaa la furayaa?", // nieuw, nalezen
    'c.tyres.a': "Haa, ilkihii ku dhowaad way dhammaadeen.", // nieuw, nalezen
    'c.tyres': "Gacanta ku geli, furaha xoogga ku adkee", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': "Furaha garaacu waa dhakhso, aadna wuu u xoog badan yahay. U isticmaal inaad boolasha shaagga ku furto, laakiin ha ugu adkeyn si xoog leh. Marka hore boolasha gacanta ku geli. Kadib si iskutallaab ah ugu adkee furaha xoogga, ilaa xoogga baabuurkaas loogu talagalay. Shaag aan adkeyn wuu ka furmi karaa inta baabuurku socdo. Hubi ilkaha iyo hawada taayir kasta oo aad gacmahaaga ku qaado. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "Marka hore gacanta ayaan ku gelinayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': "Shaag ayaad dib u rakibaysaa. Saaxiibka shaqada ayaa yiri: “Isticmaal furaha garaaca, waa ka dhakhso badan yahay.” Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': "Gacanta ku geli, kadib isticmaal furaha xoogga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': "Si xoog leh ugu adkee furaha garaaca.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': "Gacanta ku geli, oo sidaas ku daa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "Furaha garaacu boolka wuu ka dhigi karaa mid aad u adag ama aan ku filnayn. Furaha xoogga oo keliya ayaa bixiya xoogga saxda ah.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "Beddelidda saliidda", // nieuw, nalezen
    'w.oliefilter': "shaandhada saliidda", // nieuw, nalezen
    'w.oliepeilstok': "ulka cabbirka saliidda (wuxuu muujiyaa inta saliid ah ee ku jirta)", // nieuw, nalezen
    'w.opvangbak': "weelka saliidda qabta (wuxuu qabtaa saliidda duugga ah)", // nieuw, nalezen
    'w.trechter': "fanalka (weel dareeraha lagu shubo)", // nieuw, nalezen
    'w.aftapplug': "boolka daadinta", // nieuw, nalezen
    'w.olievat': "fuustada saliidda", // nieuw, nalezen
    's.oilchange.1': "Weelka saliidda qabta dhig matoorka hoostiisa.", // nieuw, nalezen
    's.oilchange.2': "Fur boolka daadinta.", // nieuw, nalezen
    's.oilchange.3': "Eeg ulka cabbirka saliidda.", // nieuw, nalezen
    'c.oilchange.q': "Immisa saliid ah ayaa la gelinayaa?", // nieuw, nalezen
    'c.oilchange.a': "Afar litir. Kadib eeg ulka cabbirka.", // nieuw, nalezen
    'c.oilchange': "Saliidda duugga ah waxay galaysaa fuustada, ma aha bullaacadda", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': "Saliidda duugga ah way u xun tahay biyaha iyo carrada. Saliid yar ayaa wasakhayn karta biyo badan. Sidaas darteed saliidda duugga ah oo dhan ku qabo weelka saliidda qabta, kuna shub fuustada saliidda duugga ah. Waligaa ha ku shubin bullaacad ama meesha gacmaha lagu dhaqo. Shaandhooyinka duugga ah iyo marooyinka saliidda leh waxay galaan qashin-qub u gaar ah. Saliid kulul ayaa maqaarkaaga gubi karta: marka hore matoorka u daa inuu xoogaa qaboobo, oo xiro gacmo-gashiyo. Saliidda daadatay isla markiiba nadiifi: saliidda dhulka ku jirta waa simbiriirix. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "Xagee bay saliidda duugga ahi aadaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': "Weelka saliidda qabta wuxuu ka buuxaa saliid duug ah. Fuustadu waxay ku taal dhinaca kale ee garaashka. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': "Si taxaddar leh ugu qaad fuustada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': "Ku shub bullaacadda bannaanka.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': "Baabuurka hoostiisa uga tag hadhow.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "Saliid duug ah oo bullaacad la geliyo biyaha ayay wasakhaysaa. Weel buuxa oo baabuur hoostiisa yaal qof ayaa lugta ku dhufta oo wuu rogmadaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "Bareegyada iyo nalalka", // nieuw, nalezen
    'w.remschijf': "saxanka bareegga", // nieuw, nalezen
    'w.remblok': "kabaha bareegga", // nieuw, nalezen
    'w.koplamp': "nalka hore", // nieuw, nalezen
    'w.remvloeistof': "dareeraha bareegga", // nieuw, nalezen
    'w.remklauw': "qabsiyaha bareegga", // nieuw, nalezen
    'w.achterlamp': "nalka dambe", // nieuw, nalezen
    's.brakes.1': "Kabaha bareeggu way duugoobeen.", // nieuw, nalezen
    's.brakes.2': "Hubi dareeraha bareegga.", // nieuw, nalezen
    's.brakes.3': "Nalka dambe ee bidix ma shaqeeyo.", // nieuw, nalezen
    'c.brakes.q': "Saxanka bareeggana ma la beddelayaa?", // nieuw, nalezen
    'c.brakes.a': "Haa, aad buu u khafiif yahay.", // nieuw, nalezen
    'c.brakes': "Bareegyada: laba jeer hubi", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': "Bareegyadu dadka ayay nool ku hayaan. Sidaas darteed si deggan u shaqee, oo shaqadaada laba jeer hubi. Kabo ama saxanno cusub kadib, bedaalka bareegga dhawr jeer riix ka hor inta baabuurku dhaqaaqin: riixitaanka koowaad badanaa aad buu hoos ugu dhacaa. Dareeraha bareeggu wuu u xun yahay maqaarkaaga iyo rinjiga: xiro gacmo-gashiyo, oo dhibcaha isla markiiba masax. Boodhka bareegga ha ku afuufin hawo cadaadis leh: ku nadiifi nadiifiyaha bareegga iyo maro. Ka hor inta baabuurku bixin, hubi nal kasta, nalalka bareeggana sidoo kale.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "Bedaalka bareegga dhawr jeer ayaan riixayaa.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': "Kabo bareeg oo cusub ayaad rakibtay. Baabuurku waa inuu bannaanka u baxaa. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': "Bedaalka bareegga dhawr jeer riix.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': "Isla markiiba bannaanka u wad.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': "Bannaanka u riix adigoon hubin.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "Kabo cusub kadib bedaalku mar koowaad aad buu hoos ugu dhici karaa. Markaas baabuurku ma istaago.", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "Akhrinta cilladaha iyo kaarka shaqada", // nieuw, nalezen
    'w.diagnosecomputer': "kombiyuutarka baaritaanka (wuxuu akhriyaa cilladaha baabuurka)", // nieuw, nalezen
    'w.waarschuwingslampje': "nalka digniinta (looxa hore ee baabuurka)", // nieuw, nalezen
    'w.werkorder': "kaarka shaqada (waxa baabuurka laga qabanayo)", // nieuw, nalezen
    'w.kentekenplaat': "taarikada baabuurka", // nieuw, nalezen
    'w.autosleutel': "furaha baabuurka", // nieuw, nalezen
    'w.stoelhoes': "daboolka kursiga (kursiga nadiif ayuu ka dhigaa)", // nieuw, nalezen
    's.diagnosis.1': "Ku xir kombiyuutarka baaritaanka.", // nieuw, nalezen
    's.diagnosis.2': "Nalka digniintu wuu shidan yahay.", // nieuw, nalezen
    's.diagnosis.3': "Kursiga dabool saar.", // nieuw, nalezen
    'c.diagnosis.q': "Maxaa baabuurkan laga qabanayaa?", // nieuw, nalezen
    'c.diagnosis.a': "Eeg kaarka shaqada.", // nieuw, nalezen
    'c.diagnosis': "Baabuurka ula dhaqan sidii adigaa leh", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': "Macmiil ayaa ku siiya baabuurkiisa iyo furahiisa. Labadaba si taxaddar leh ula dhaqan. Kursiga dabool saar, dhulkana roog dhig, ka hor intaadan gelin. Samee oo keliya waxa kaarka shaqada ku qoran. Ma heshay wax kale oo khaldan? Qor oo u sheeg madaxaaga: macmiilka ayaa go'aamiya. Furaha ku hay meeshiisa, calaamaddiisa la socota. Ha isticmaalin raadiyaha, taleefanka ama alaabta baabuurka ku jirta. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "Tani kuma qorna kaarka shaqada.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': "Saliidda ayaad beddelaysaa. Taayir ayaa ilkihiisu ku dhowaad dhammaadeen. Kuma qorna kaarka shaqada. Maxaad samaynaysaa?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': "Qor, oo u sheeg madaxaaga.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': "Taayirka isla markiiba beddel.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': "Waxba ha oran: shaqadaadu ma aha.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "Macmiilka ayaa go'aamiya waxa la sameeyo oo la bixiyo. Laakiin waa inuu ogaadaa in taayirku khatar yahay.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "Jarista cawska iyo jarista laamaha", // nieuw, nalezen
    'l.mowing': "Jarista cawska", // nieuw, nalezen
    'w.gras': "cawska", // nieuw, nalezen
    'w.maaien': "jarid cawska (cawska oo la gooyo)", // nieuw, nalezen
    'w.grasmaaier': "mashiinka cawska jara", // nieuw, nalezen
    'w.zitmaaier': "mashiinka cawska ee lagu fadhiisto (mashiin cawska jara oo aad korkiisa fadhiisato)", // nieuw, nalezen
    'w.bosmaaier': "mashiinka cawska ee ulka leh (mashiin cawska jara oo ku yaal ul dheer)", // nieuw, nalezen
    'w.gelaatsscherm': "daboolka wejiga", // nieuw, nalezen
    's.mowing.1': "Marka hore cawska ka jar cidhifka agtiisa.", // nieuw, nalezen
    's.mowing.2': "Cawsku aad buu u qoyan yahay. Berri ayaan jaraynaa.", // nieuw, nalezen
    's.mowing.3': "Xiro daboolka wejigaaga.", // nieuw, nalezen
    'c.mowing.q': "Mashiinka lagu fadhiisto ma qaadan karaa?", // nieuw, nalezen
    'c.mowing.a': "Haa, laakiin marka hore dhagxaanta ka qaad.", // nieuw, nalezen
    'c.mowing': "Dhagxaantu meel fog ayay u duulaan", // nieuw, nalezen
    'c.mowing.b': "Mashiinka cawska jara ama mashiinka ulka leh dhagax ayuu u tuuri karaa meel aad u fog, si aad u xoog badanna. Sidaas darteed marka hore cawska dul mar, oo ka qaad dhagxaanta, dhalada iyo laamaha. Xiro daboolka wejigaaga ama muraayadaha badbaadada, ilaaliyaha maqalka iyo kabaha badbaadada. Dadka kale meel fog ka dhig. Qof ma soo dhowaanayaa? Jooji mashiinka. Waligaa gacanta ha gelin mashiinka hoostiisa inta matoorku shaqaynayo: dami, oo sug ilaa sakiintu joogsato. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.mowing.p': "Fadlan, ma iga fogaan kartaa?", // nieuw, nalezen
    'c.mowing.s': "Waxaad isticmaalaysaa mashiinka ulka leh. Nin eey wata ayaa kuu soo socda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.mowing.o1': "Jooji mashiinka ilaa uu ka gudbo.", // nieuw, nalezen
    'c.mowing.o2': "Sii wad: wuu ku arki karaa.", // nieuw, nalezen
    'c.mowing.o3': "Dhinac uga leexo, oo sii wad.", // nieuw, nalezen
    'c.mowing.w': "Dhagax ka yimid mashiinka ulka leh qof ayuu si xun u dhaawici karaa, xitaa meel fog.", // nieuw, nalezen
    'l.pruning': "Jarista laamaha", // nieuw, nalezen
    'w.snoeien': "jarid laamaha (laamo oo geed laga gooyo)", // nieuw, nalezen
    'w.snoeischaar': "maqaska laamaha", // nieuw, nalezen
    'w.tak': "laanta", // nieuw, nalezen
    'w.struik': "geedka yar, duurka", // nieuw, nalezen
    'w.boom': "geedka weyn", // nieuw, nalezen
    'w.snoeizaag': "miinshaarka laamaha", // nieuw, nalezen
    's.pruning.1': "Jar geedaha yaryar ee waddada yar agteeda.", // nieuw, nalezen
    's.pruning.2': "Laantani way dhimatay. Ka jar miinshaarka.", // nieuw, nalezen
    's.pruning.3': "Laamaha isku tuul dhig.", // nieuw, nalezen
    'c.pruning.q': "Laamahee ayaa la jarayaa?", // nieuw, nalezen
    'c.pruning.a': "Laamaha dhintay oo keliya.", // nieuw, nalezen
    'c.pruning': "Goyn nadiif ah ayaa ugu fiican bogsashada", // nieuw, nalezen
    'c.pruning.b': "Ku jar maqas fiiqan oo nadiif ah. Goyn nadiif ah si dhakhso ah ayay u bogsataa; laan la jeexjeexay way xanuunsataa. Ka jar wax yar kor ka xiga gun ama laan dhinaca ah, oo ha ka tagin gabal dheer. Marka hore ka jar laamaha dhintay iyo kuwa jabay. Gacantaada kale ka fogee sakiinta. Xiro gacmo-gashiyo: dhirta qaarkood qodxo ayay leeyihiin, ama maqaarkaaga ayay casaysaa. Shaqada kadib maqaska nadiifi.", // nieuw, nalezen
    'c.pruning.p': "Xagee ayaan ka jaraa?", // nieuw, nalezen
    'c.pruning.s': "Maqaskaaga laamuhu waa af-xun yahay. Laamaha ayuu jeexjeexaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.pruning.o1': "Weydiiso maqas fiiqan.", // nieuw, nalezen
    'c.pruning.o2': "Laanta si xoog badan u jiid.", // nieuw, nalezen
    'c.pruning.o3': "Sii wad: waa geed yar uun.", // nieuw, nalezen
    'c.pruning.w': "Maqas af-xun laanta ayuu jeexjeexaa. Geedku wuu xanuunsadaa, adiguna si adag ayaad u shaqaysaa.", // nieuw, nalezen
    'l.hedge': "Jarista ooda geedaha", // nieuw, nalezen
    'w.heg': "ooda geedaha (geedo safaf ah oo xayn ah)", // nieuw, nalezen
    'w.heggenschaar': "mashiinka ooda jara (mashiin ooda geedaha jara)", // nieuw, nalezen
    'w.kruiwagen': "gaariga gacanta", // nieuw, nalezen
    'w.hark': "fargeetada dhulka", // nieuw, nalezen
    'w.snoeiafval': "qashinka cagaaran (laamo iyo caleemo la jaray)", // nieuw, nalezen
    'w.zeil': "shiraaca (go' weyn oo caag ah)", // nieuw, nalezen
    's.hedge.1': "Shiraaca dhig ooda hoosteeda.", // nieuw, nalezen
    's.hedge.2': "Ooda si qurux badan oo toos ah u jar.", // nieuw, nalezen
    's.hedge.3': "Qashinka cagaaran ku qaad gaariga gacanta.", // nieuw, nalezen
    'c.hedge.q': "Intee le'eg ayay oodu dhererkeedu ahaanaysaa?", // nieuw, nalezen
    'c.hedge.a': "Ilaa xarigga. Ka hoos ha u jarin.", // nieuw, nalezen
    'c.hedge': "Marka hore buulal raadi", // nieuw, nalezen
    'c.hedge.b': "Gu'ga iyo xagaaga, shimbiruhu buulal ayay ka sameystaan oodaha iyo geedaha yaryar. Buulasha ay shimbiruhu isticmaalaan waa la ilaaliyaa. Sidaas darteed ooda dhex eeg ka hor intaadan jarin. Ma aragtaa buul ukumo ama shimbiro yaryar ku jiraan? Halkaas ha jarin, oo u sheeg madaxaaga. Mashiinka ooda jara ku qabo labada gacmood. Si adag u istaag dhulka ama jaranjaro fiican, waligaa kursi ama baaldi ha ku istaagin. Fiilada gadaashaada ku hay.", // nieuw, nalezen
    'c.hedge.p': "Halkan buul ayaa ku yaal.", // nieuw, nalezen
    'c.hedge.s': "Bisha May ayaad ood jaraysaa. Waxaad aragtaa buul shimbiro yaryar ku jiraan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hedge.o1': "Halkaas ku jooji, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.hedge.o2': "Si taxaddar leh agagaarkiisa u jar.", // nieuw, nalezen
    'c.hedge.o3': "Buulka ka saar, oo sii wad.", // nieuw, nalezen
    'c.hedge.w': "Buulasha ay shimbiruhu isticmaalaan waa la ilaaliyaa. Madaxaaga ayaa go'aamiya waxa ku dhacaya qaybtan oodda.", // nieuw, nalezen
    'l.chainsaw': "Miinshaarka silsiladda iyo afuufaha caleemaha", // nieuw, nalezen
    'w.kettingzaag': "miinshaarka silsiladda", // nieuw, nalezen
    'w.stam': "jirridda (geedka)", // nieuw, nalezen
    'w.zaagbroek': "surwaalka miinshaarka (silsiladda ayuu joojiyaa)", // nieuw, nalezen
    'w.bladblazer': "afuufaha caleemaha", // nieuw, nalezen
    'w.bladeren': "caleemaha", // nieuw, nalezen
    'w.jerrycan': "jeerikaanka (weel shidaal)", // nieuw, nalezen
    's.chainsaw.1': "Xiro surwaalkaaga miinshaarka.", // nieuw, nalezen
    's.chainsaw.2': "Caleemaha u afuuf meel isku tuul ah.", // nieuw, nalezen
    's.chainsaw.3': "Shidaal ku shub oo keliya marka matoorku qabow yahay.", // nieuw, nalezen
    'c.chainsaw.q': "Miinshaarka silsiladda ma ku shaqayn karaa?", // nieuw, nalezen
    'c.chainsaw.a': "Weli maya. Marka hore koorso ayaad qaadanaysaa.", // nieuw, nalezen
    'c.chainsaw': "Miinshaarka silsiladda oo keliya tababar kadib", // nieuw, nalezen
    'c.chainsaw.b': "Miinshaarka silsiladdu waa mid ka mid ah qalabka ugu khatarta badan shaqada cagaaran. Ku shaqee oo keliya marka aad koorso qaadatay, madaxaaguna kuu oggolaado. Mar walba xiro surwaalka miinshaarka, koofiyad leh daboolka wejiga iyo ilaaliyaha maqalka, gacmo-gashiyo iyo kabaha badbaadada. Waligaa keligaa ha ku shaqayn miinshaarka silsiladda. Ku qabo labada gacmood, waligaana ha ku jarin garbahaaga ka sarreeya. Afuufaha caleemaha: waligaa ha u afuufin dadka, baabuurta ama daaqadaha furan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.chainsaw.p': "Weli koorso uma aanan qaadan tan.", // nieuw, nalezen
    'c.chainsaw.s': "Saaxiib shaqo ayaa yiri: “Qaado miinshaarka silsiladda, waa fudud yahay.” Waligaa koorso ma aadan qaadan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.chainsaw.o1': "Dheh inaadan weli koorso qaadan.", // nieuw, nalezen
    'c.chainsaw.o2': "Si taxaddar leh isku day, hal mar oo keliya.", // nieuw, nalezen
    'c.chainsaw.o3': "Qaado, oo marka hore daawo muuqaal.", // nieuw, nalezen
    'c.chainsaw.w': "Miinshaarka silsiladdu lugtaada ayuu ku jari karaa hal ilbiriqsi. Tababar la'aan ma garanaysid sida uu dib ugu boodi karo.", // nieuw, nalezen
    'u.planting': "Beerista, haramaha iyo waddada", // nieuw, nalezen
    'l.weeding': "Saarista haramaha", // nieuw, nalezen
    'w.onkruid': "haramaha (dhir waa in la saaraa)", // nieuw, nalezen
    'w.wieden': "saarid haramaha (haramaha oo la siibo)", // nieuw, nalezen
    'w.schoffel': "yaambada", // nieuw, nalezen
    'w.perk': "beerta ubaxa", // nieuw, nalezen
    'w.onkruidbrander': "gubaha haramaha (kulayl ayuu haramaha ku dilaa)", // nieuw, nalezen
    'w.wortel': "xididka (geedka)", // nieuw, nalezen
    's.weeding.1': "Haramaha siib, xididka la socda.", // nieuw, nalezen
    's.weeding.2': "Beerta ubaxa ee albaabka agteeda yaambo ku qod.", // nieuw, nalezen
    's.weeding.3': "Taxaddar: gubaha haramuhu waa kulul yahay.", // nieuw, nalezen
    'c.weeding.q': "Kani ma haramo baa?", // nieuw, nalezen
    'c.weeding.a': "Maya, taasi waa geed. Iska daa.", // nieuw, nalezen
    'c.weeding': "Haramaha: xididku waa inuu baxaa", // nieuw, nalezen
    'c.weeding.b': "Haramuhu dib ayuu u soo baxaa marka xididku dhulka ku hadho. Sidaas darteed xididka la socda u siib, ama yaambo ku qod wax yar carrada hoosteeda. Shaqee marka carradu wax yar qoyan tahay: markaas xididku si fudud ayuu u soo baxaa. Ha isticmaalin buufiyeyaal haramaha looga hortago, ilaa aad baratay sida loo isticmaalo oo madaxaagu sidaas yiraahdo. Gubaha haramuhu aad buu u kulul yahay: ka fogee cawska qallalan, caleemaha, oodaha, baabuurta iyo weelasha qashinka. Waligaa ha dhigin inta uu gubayo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.weeding.p': "Kani ma haramo baa mise waa geed?", // nieuw, nalezen
    'c.weeding.s': "Waxaad isticmaalaysaa gubaha haramaha. Waddada yar agteeda waxaa ku taal ood qallalan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.weeding.o1': "Halkaas haramaha gacanta ku siib.", // nieuw, nalezen
    'c.weeding.o2': "Si dhakhso ah u gub, oo sii soco.", // nieuw, nalezen
    'c.weeding.o3': "Gub, oo hal mar dib u eeg.", // nieuw, nalezen
    'c.weeding.w': "Ood qallalan si dhakhso ah ayay dab u qabsataa. Dab guryo ama baabuur u dhow aad buu khatar u yahay.", // nieuw, nalezen
    'l.planting': "Beerista", // nieuw, nalezen
    'w.planten': "beerid", // nieuw, nalezen
    'w.schep': "majarafadda, yaambada weyn", // nieuw, nalezen
    'w.plantgat': "godka beerista", // nieuw, nalezen
    'w.kluit': "kubbadda xididka (carrada xididdada ku wareegsan)", // nieuw, nalezen
    'w.compost': "bacriminta dabiiciga ah (kombost)", // nieuw, nalezen
    'w.boompaal': "tiirka geedka (ul qabata geed yar)", // nieuw, nalezen
    's.planting.1': "Geedka u qod god beereed.", // nieuw, nalezen
    's.planting.2': "Geedka si toos ah u dhig, tiirka agtiisa.", // nieuw, nalezen
    's.planting.3': "Dhirta cusub sii biyo badan.", // nieuw, nalezen
    'c.planting.q': "Geedkan xagee buu galayaa?", // nieuw, nalezen
    'c.planting.a': "Beerta ubaxa gadaasheeda, derbiga agtiisa.", // nieuw, nalezen
    'c.planting': "Dhulka hoostiisa: fiilooyin iyo tuubooyin", // nieuw, nalezen
    'c.planting.b': "Cawska iyo laamiga hoostooda badanaa waxaa ku jira fiilooyin iyo tuubooyin: koronto, gaas, biyo iyo internet. Sidaas darteed si taxaddar leh u qod. Ma aragtaa cajalad midab leh ama saxan caag ah oo dhulka ku jira, mise wax adag ayaad ku dhacday? Jooji qodista, oo u sheeg madaxaaga. Waligaa xoog ha ku sii qodin. Geed culus ama kubbad xidid oo weyn wada qaada, jilbahaaga oo laaban. Geed cusub isla maalintaas sii biyo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.planting.p': "Wax adag ayaan ku dhacayaa.", // nieuw, nalezen
    'c.planting.s': "Waxaad qodaysaa god beereed. Majarafaddaadu waxay ku dhacday cajalad caag ah oo casaan ah. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.planting.o1': "Jooji qodista, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.planting.o2': "Si taxaddar leh u sii qod, cajaladda agteeda.", // nieuw, nalezen
    'c.planting.o3': "Cajaladda soo jiid, oo sii wad.", // nieuw, nalezen
    'c.planting.w': "Cajalad dhulka ku jirta waxay ka digaysaa in fiilo ama tuubo hoosteeda ku jirto. Tuubada gaaska ama fiilada korontadu aad bay khatar u yihiin.", // nieuw, nalezen
    'l.roadside': "Ka shaqaynta waddada agteeda", // nieuw, nalezen
    'w.pion': "koorta taraafikada", // nieuw, nalezen
    'w.verkeer': "taraafikada (gaadiidka socda)", // nieuw, nalezen
    'w.stoep': "waddada lugta (jidka waddada dhinaceeda ah)", // nieuw, nalezen
    'w.fietser': "baaskiil-waduhu", // nieuw, nalezen
    'w.pijlwagen': "tarelada fallaarta (tarelo leh fallaar weyn oo darawallada uga digta)", // nieuw, nalezen
    'w.berm': "cidhifka cawska leh (cawska waddada dhinaceeda ah)", // nieuw, nalezen
    's.roadside.1': "Xiro jaakaddaada. Waxaan ka shaqaynaynaa waddada agteeda.", // nieuw, nalezen
    's.roadside.2': "Koorayaasha dhig gaariga gadaashiisa.", // nieuw, nalezen
    's.roadside.3': "Ka feejignow baaskiil-wadayaasha.", // nieuw, nalezen
    'c.roadside.q': "Hadda ma tallaabi karaa?", // nieuw, nalezen
    'c.roadside.a': "Maya, sug. Gaari xamuul ayaa imanaya.", // nieuw, nalezen
    'c.roadside': "Waddada agteeda: la arag, koorayaasha gadaashooda joog", // nieuw, nalezen
    'c.roadside.b': "Shaqada waddada agteeda waa khatar: darawalladu taleefankooda ayay eegaan, ama si xad-dhaaf ah ayay u dheereeyaan. Sidaas darteed mar walba xiro jaakadda iftiinka leh, xitaa shaqo gaaban. Koorayaasha iyo calaamadaha dhig ka hor intaadan bilaabin, oo ugu dambayn soo qaad. Gaariga u dhig sidii gaashaan adiga iyo taraafikada dhexdooda ah. Koorayaasha gadaashooda joog. Waligaa dib ha u tallaabsan adigoon eegin, oo marka aad kartid, wejigaaga u jeedi taraafikada adigoo shaqaynaya. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.roadside.p': "Marka hore koorayaasha ayaan dhigayaa.", // nieuw, nalezen
    'c.roadside.s': "Waa inaad jartaa geed yar oo waddada agteeda ah. Waxay qaadanaysaa shan daqiiqo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.roadside.o1': "Xiro jaakadda, oo dhig koorayaasha.", // nieuw, nalezen
    'c.roadside.o2': "Si dhakhso ah u samee, koorayaal la'aan.", // nieuw, nalezen
    'c.roadside.o3': "Saaxiib shaqo ka codso inuu baabuurta kuu eego.", // nieuw, nalezen
    'c.roadside.w': "Shil wuxuu qaataa hal ilbiriqsi oo keliya. Shan daqiiqo oo koorayaal la'aan ah waa shan daqiiqo oo ilaalin la'aan ah.", // nieuw, nalezen
    'l.litter': "Qashinka daadsan iyo xaafadda", // nieuw, nalezen
    'w.zwerfafval': "qashinka daadsan (qashin waddada yaal)", // nieuw, nalezen
    'w.grijper': "qabsadaha qashinka (ul qashinka qabata)", // nieuw, nalezen
    'w.vuilniszak': "bacda qashinka", // nieuw, nalezen
    'w.scherven': "dhalada jabtay (jajab fiiqan)", // nieuw, nalezen
    'w.aanhanger': "tarelada", // nieuw, nalezen
    'w.bewoner': "deggane (qof halkan ku nool)", // nieuw, nalezen
    's.litter.1': "Qashinka daadsan ku qaad qabsadaha qashinka.", // nieuw, nalezen
    's.litter.2': "Taxaddar, halkan dhalo jabtay ayaa yaal.", // nieuw, nalezen
    's.litter.3': "Bacaha qashinka dhig tarelada agteeda.", // nieuw, nalezen
    'c.litter.q': "Goorma ayaa geedkan laamihiisa la jarayaa?", // nieuw, nalezen
    'c.litter.a': "Ma garanayo. Weydii dowladda hoose.", // nieuw, nalezen
    'c.litter': "Waligaa ha taaban irbad", // nieuw, nalezen
    'c.litter.b': "Beerta dadweynaha iyo geedaha yaryar mararka qaarkood waxaad ka heshaa irbad duritaan. Waligaa gacanta ha ku qaadin, xitaa adigoo gacmo-gashiyo xiran. Isticmaal qabsadaha qashinka, oo irbadda geli sanduuq adag ama dhalo dabool leh, waligaa bac qashin ha gelin. U sheeg madaxaaga. Irbad ma ku muday? Nabarka ku dhaq biyo badan, oo isla markiiba wac dhakhtar. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.litter.p': "Halkan irbad ayaa taal.", // nieuw, nalezen
    'c.litter.s': "Waxaad aragtaa irbad cawska ku jirta, kursi fadhi agtiisa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.litter.o1': "Ku qaad qabsadaha qashinka.", // nieuw, nalezen
    'c.litter.o2': "Ku qaad adigoo gacmo-gashiyo xiran.", // nieuw, nalezen
    'c.litter.o3': "Geli bacda qashinka.", // nieuw, nalezen
    'c.litter.w': "Irbaddu waxay sidi kartaa cudur. Gacmo-gashiyadu ma joojiyaan irbad, sanduuq adaguna dadka kale ayuu badbaadiyaa.", // nieuw, nalezen
    'u.frontdesk': "Soo dhaweynta, boostada iyo shirarka", // nieuw, nalezen
    'l.reception': "Miiska soo dhaweynta", // nieuw, nalezen
    'w.balie': "miiska soo dhaweynta, miiska adeegga", // nieuw, nalezen
    'w.bezoeker': "booqdaha", // nieuw, nalezen
    'w.intercom': "intarkomka (qofka albaabka jooga ayaad la hadashaa)", // nieuw, nalezen
    'w.doorverbinden': "u gudbin (wicitaan taleefan)", // nieuw, nalezen
    'w.toestel': "lambarka gudaha (lambar taleefan oo dhismaha gudihiisa ah)", // nieuw, nalezen
    'w.wachtruimte': "meesha sugitaanka", // nieuw, nalezen
    's.reception.1': "Subax wanaagsan, ma ku caawin karaa?", // nieuw, nalezen
    's.reception.2': "Waan kuu gudbinayaa.", // nieuw, nalezen
    's.reception.3': "Fadlan ku fadhiiso meesha sugitaanka.", // nieuw, nalezen
    'c.reception.q': "Ballan ayaan la leeyahay Marwo Jansen.", // nieuw, nalezen
    'c.reception.a': "Daqiiqad. Waan u yeerayaa.", // nieuw, nalezen
    'c.reception': "Adiga ayaa ah wejiga ugu horreeya", // nieuw, nalezen
    'c.reception.b': "Miiska soo dhaweynta adiga ayaa ah qofka ugu horreeya ee booqduhu la kulmo. Kor u eeg, dhoola cadee oo salaan, xitaa marka aad taleefanka ku mashquulsan tahay. Booqdayaasha kula hadal “u”. Taleefanka ku jawaab magaca shirkadda iyo magacaaga. Jawaabta ma garanaysid? Sidaas dheh, oo raadi qof garanaya. Waligaa ha siin dad aanad aqoon magacyada, lambarrada taleefanka ama qolalka shaqaalaha.", // nieuw, nalezen
    'c.reception.p': "Subax wanaagsan, sideen kuu caawin karaa?", // nieuw, nalezen
    'c.reception.s': "Taleefanka ayaad ku jirtaa. Booqde ayaa miiska yimid oo sugaya. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.reception.o1': "Kor u eeg, oo tus inaad dhowaan imanayso.", // nieuw, nalezen
    'c.reception.o2': "Wicitaankaaga dhammee, adigoon kor u eegin.", // nieuw, nalezen
    'c.reception.o3': "Taleefanka isla markiiba dhig.", // nieuw, nalezen
    'c.reception.w': "Booqde la arkay si deggan ayuu u sugaa. Booqde aan la arkin wuxuu dareemaa in aan la soo dhaweyn.", // nieuw, nalezen
    'l.visitors': "Soo dhaweynta booqdayaasha", // nieuw, nalezen
    'w.bezoekerspasje': "kaarka booqdaha", // nieuw, nalezen
    'w.lift': "wiishka", // nieuw, nalezen
    'w.garderobe': "qolka jaakadaha (meesha jaakaddaada lagu laadlaadiyo)", // nieuw, nalezen
    'w.parkeerplaats': "meesha baabuurka la dhigto", // nieuw, nalezen
    'w.hal': "hoolka (qolka weyn ee albaabka laga galo)", // nieuw, nalezen
    'w.begeleiden': "gaarsiin (qof oo aad la socoto meel)", // nieuw, nalezen
    's.visitors.1': "Fadlan magacaaga halkan ma ku qori kartaa?", // nieuw, nalezen
    's.visitors.2': "Waa kan kaarkaaga booqdaha.", // nieuw, nalezen
    's.visitors.3': "Waxaan ku geynayaa wiishka.", // nieuw, nalezen
    'c.visitors.q': "Xagee jaakaddayda uga tagi karaa?", // nieuw, nalezen
    'c.visitors.a': "Qolka jaakadaha, wiishka agtiisa.", // nieuw, nalezen
    'c.visitors': "Booqde kasta wuu is-diiwaangeliyaa", // nieuw, nalezen
    'c.visitors.b': "Booqde kasta magaciisa ayuu ku qoraa liiska, ama shaashadda ayuu iska diiwaangeliyaa, oo wuxuu helaa kaarka booqdaha. Markaas waad ogtahay cidda dhismaha ku jirta. Tani waa muhiim marka dab jiro: qof walba waa inuu baxaa, qofna liiska ayuu hubiyaa. Booqashada dhammaadkeeda, booqduhu kaarka ayuu soo celiyaa. Dad aanad aqoon ha u oggolaan inay gadaashaada ka soo galaan: si edeb leh u weydii cidda ay halkan u yimaadeen. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.visitors.p': "Yaad halkan u timid?", // nieuw, nalezen
    'c.visitors.s': "Nin ayaa saaxiib shaqo gadaashiisa ka soo galay. Kaar ma haysto. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.visitors.o1': "Si edeb leh u weydii cidda uu halkan u yimid.", // nieuw, nalezen
    'c.visitors.o2': "Iska daa: shaqaale ayuu la soo galay.", // nieuw, nalezen
    'c.visitors.o3': "Isla markiiba wac booliska.", // nieuw, nalezen
    'c.visitors.w': "Xaalad degdeg ah, waa inaad ogaataa cidda gudaha ku jirta. Qof kasta oo soo galana ma laha sabab uu halkaas u joogo.", // nieuw, nalezen
    'l.mailroom': "Boostada iyo baakadaha", // nieuw, nalezen
    'w.postkamer': "qolka boostada", // nieuw, nalezen
    'w.koerier': "qaybiyaha (qof baakadaha keena)", // nieuw, nalezen
    'w.postvak': "khaanadda boostada (sanduuq boosto, qof kasta mid)", // nieuw, nalezen
    'w.envelop': "baqshadda", // nieuw, nalezen
    'w.afdeling': "qaybta (shirkadda)", // nieuw, nalezen
    'w.postkar': "gaariga boostada", // nieuw, nalezen
    's.mailroom.1': "Qaybiyuhu baakad ayuu keenayaa.", // nieuw, nalezen
    's.mailroom.2': "Waraaqaha geli khaanadda boostada ee saxda ah.", // nieuw, nalezen
    's.mailroom.3': "Baakaddani waa dhaawacan tahay.", // nieuw, nalezen
    'c.mailroom.q': "Baakaddani yaa iska leh?", // nieuw, nalezen
    'c.mailroom.a': "Qaybta Maaliyadda, dabaqa labaad.", // nieuw, nalezen
    'c.mailroom': "Boostadu waa sir", // nieuw, nalezen
    'c.mailroom.b': "Boostada iyo baakaduhu waa sir. Waligaa ha furin warqad ama baakad qof kale leeyahay. Shay kasta ku hubi magaca iyo qaybta, oo geli khaanadda boostada ee saxda ah. Marka qaybiye baakad keeno, eeg ka hor intaadan saxiixin: ma dhaawacan tahay? Taas qor. Baakad ma yaab leh tahay: ur bay leedahay, way daadanaysaa, mise diraha lagama qorin? Ha furin, oo u sheeg madaxaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.mailroom.p': "Sanduuqu waa qoyan yahay oo jaban yahay.", // nieuw, nalezen
    'c.mailroom.s': "Qaybiye ayaa baakad keenay. Hal gees ayaa qoyan oo jeexan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.mailroom.o1': "Qor dhaawaca ka hor intaadan saxiixin.", // nieuw, nalezen
    'c.mailroom.o2': "Saxiix, oo qofna ha u sheegin.", // nieuw, nalezen
    'c.mailroom.o3': "Fur, si aad u aragto inay wax walba ku jiraan.", // nieuw, nalezen
    'c.mailroom.w': "Marka aad saxiixdo kadib, waxay u ekaanaysaa in baakaddu fiicnayd. Markaas qofna ma bixiyo dhaawaca.", // nieuw, nalezen
    'l.meetingroom': "Diyaarinta qolka shirka", // nieuw, nalezen
    'w.vergaderzaal': "qolka shirka", // nieuw, nalezen
    'w.beamer': "borojektarka", // nieuw, nalezen
    'w.whiteboard': "looxa cad", // nieuw, nalezen
    'w.thermoskan': "termuska (kafeega kulul ayuu ku hayaa)", // nieuw, nalezen
    'w.kopje': "koobka", // nieuw, nalezen
    'w.koffieautomaat': "mashiinka kafeega", // nieuw, nalezen
    's.meetingroom.1': "Toban kursi miiska ku wareeji.", // nieuw, nalezen
    's.meetingroom.2': "Kafeega iyo shaaha diyaari.", // nieuw, nalezen
    's.meetingroom.3': "Borojektarku ma shaqaynayo.", // nieuw, nalezen
    'c.meetingroom.q': "Saacaddee ayuu shirku bilaabanayaa?", // nieuw, nalezen
    'c.meetingroom.a': "Tobanka. Hubi in wax walba diyaar yihiin.", // nieuw, nalezen
    'c.meetingroom': "Diyaar ka hor martida ugu horreysa", // nieuw, nalezen
    'c.meetingroom.b': "Qolka shirku waa inuu diyaar yahay ka hor inta qofka ugu horreeya soo gelin. Hubi kuraasta, miiska, borojektarka iyo fiilooyinka. Dhig kafeeg, shaah iyo biyo, koobab iyo caano la socda. Cabbitaannada kulul si taxaddar leh u qaad, waligaana dadka korkooda ha ka qaadin. Shirka kadib, miiska nadiifi oo wax walba dib u celi. Waxa aad qolka shirka ka maqasho, naftaada ku hay.", // nieuw, nalezen
    'c.meetingroom.p': "Qolku waa diyaar.", // nieuw, nalezen
    'c.meetingroom.s': "Shirku wuxuu bilaabanayaa shan daqiiqo kadib. Borojektarku ma shaqaynayo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.meetingroom.o1': "Isla markiiba u sheeg qabanqaabiyaha.", // nieuw, nalezen
    'c.meetingroom.o2': "Sug: waxaa laga yaabaa in qofna u baahnayn.", // nieuw, nalezen
    'c.meetingroom.o3': "Miiska kaga tag warqad yar.", // nieuw, nalezen
    'c.meetingroom.w': "Shan daqiiqo weli waa waqti lagu hagaajiyo ama qol kale lagu helo. Hadhow, qof walba wuu sugaa.", // nieuw, nalezen
    'u.maintenance': "Cilladaha, dayactirka iyo raridda", // nieuw, nalezen
    'l.faults': "Sheegidda cillad", // nieuw, nalezen
    'w.melding': "warbixinta (waxaad sheegtaa in wax khaldan yihiin)", // nieuw, nalezen
    'w.lekkage': "daadashada (biyo ayaa soo baxaya)", // nieuw, nalezen
    'w.verwarming': "kululeynta", // nieuw, nalezen
    'w.airco': "qaboojiyaha hawada", // nieuw, nalezen
    'w.afvoer': "bullaacadda (tuubada biyaha ka saarta)", // nieuw, nalezen
    'w.verstopt': "xiran (waxba kama gudbaan)", // nieuw, nalezen
    's.faults.1': "Cilladda ayaan sheegayaa.", // nieuw, nalezen
    's.faults.2': "Jikada daadasho ayaa ka jirta.", // nieuw, nalezen
    's.faults.3': "Bullaacadda musqusha waa xiran tahay.", // nieuw, nalezen
    'c.faults.q': "Maxay halkan sidan ugu qabow tahay?", // nieuw, nalezen
    'c.faults.a': "Kululeyntu waa jaban tahay. Farsamayaqaanku berri ayuu imanayaa.", // nieuw, nalezen
    'c.faults': "Sheeg, keligaa ha hagaajin", // nieuw, nalezen
    'c.faults.b': "Ma aragtaa wax jaban, sida daadasho, nal demay ama albaab aan xirmin? Sheeg, xitaa marka uu yar yahay: nidaamka ku qor ama u sheeg madaxaaga. Sheeg meesha uu ku yaal, waxa aad aragto iyo tan iyo goorma. Korontada, gaaska ama kululeynta adigu ha hagaajin. Ma urinaysaa gaas? Ha isticmaalin badhan ama taleefan agtiisa, fur daaqadaha, dadka ka saar, oo caawimaad ka wac bannaanka. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.faults.p': "Waxaan rabaa inaan cillad sheego.", // nieuw, nalezen
    'c.faults.s': "Biyo ayaa ka soo tiifaya saqafka marinka. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.faults.o1': "Sheeg, oo baaldi hoos dhig.", // nieuw, nalezen
    'c.faults.o2': "Sug: waxaa laga yaabaa inuu iskiis u joogsado.", // nieuw, nalezen
    'c.faults.o3': "Fur saqafka si aad u eegto.", // nieuw, nalezen
    'c.faults.w': "Daadasho yar waxay noqon kartaa waxyeelo weyn. Baaldigu sagxadda ayuu qallaliyaa, si aanu qofna u simbiriirixan.", // nieuw, nalezen
    'l.repairs': "Dayactir yaryar", // nieuw, nalezen
    'w.vervangen': "beddelid (mid cusub oo la geliyo)", // nieuw, nalezen
    'w.deurklink': "gacanta albaabka", // nieuw, nalezen
    'w.scharnier': "musmaarka albaabka (birta albaabka ku xirta)", // nieuw, nalezen
    'w.gereedschapskist': "sanduuqa qalabka", // nieuw, nalezen
    'w.rookmelder': "digaha qiiqa", // nieuw, nalezen
    'w.batterij': "baytariga", // nieuw, nalezen
    's.repairs.1': "Beddel nalka marinka.", // nieuw, nalezen
    's.repairs.2': "Gacanta albaabku way debecsan tahay.", // nieuw, nalezen
    's.repairs.3': "Qaado jaranjarada yar, ha qaadan kursi.", // nieuw, nalezen
    'c.repairs.q': "Digaha qiiqu ma dhawaaqayaa?", // nieuw, nalezen
    'c.repairs.a': "Haa, baytarigu ku dhowaad wuu dhammaaday.", // nieuw, nalezen
    'c.repairs': "Jaranjaro yar, waligaa kursi", // nieuw, nalezen
    'c.repairs.b': "Nal ama khaanad sare, isticmaal jaranjaro yar, waligaa kursi, miis ama sanduuq. Dhig sagxad siman, si buuxda u fur, oo ha istaagin jaranjarta ugu sarreysa. Nalka dami ka hor intaadan beddelin guluubka, oo guluubka duugga ah u daa inuu qaboobo. Samee oo keliya dayactirka aad baratay. Qalabkaaga dib ugu celi sanduuqa qalabka marka aad dhammeyso, si aanu qofna ugu turunturoon. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.repairs.p': "Jaranjarada yar ayaan keenayaa.", // nieuw, nalezen
    'c.repairs.s': "Nal ku yaal xafiiska ayaa jaban. Jaranjarada yari waxay ku taal dabaq kale. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.repairs.o1': "Keen jaranjarada yar.", // nieuw, nalezen
    'c.repairs.o2': "Ku istaag kursiga xafiiska.", // nieuw, nalezen
    'c.repairs.o3': "Ku istaag miiska xafiiska.", // nieuw, nalezen
    'c.repairs.w': "Kursigu wuu dhaqaaqi karaa ama wuu rogmi karaa. Ka dhicidda kursi si xun ayay kuu dhaawici kartaa.", // nieuw, nalezen
    'l.moving': "Raridda goob shaqo", // nieuw, nalezen
    'w.verhuisdoos': "sanduuqa raridda", // nieuw, nalezen
    'w.bureau': "miiska xafiiska", // nieuw, nalezen
    'w.bureaustoel': "kursiga xafiiska", // nieuw, nalezen
    'w.werkplek': "goobta shaqada (miiska qof ka shaqeeyo)", // nieuw, nalezen
    'w.kamernummer': "lambarka qolka", // nieuw, nalezen
    'w.plattegrond': "khariidadda dhismaha (sawirka dhismaha)", // nieuw, nalezen
    's.moving.1': "Lambarka qolka ku qor sanduuq kasta.", // nieuw, nalezen
    's.moving.2': "Sanduuqyada saar gaariga gacanta.", // nieuw, nalezen
    's.moving.3': "Goobta shaqada faaruqi.", // nieuw, nalezen
    'c.moving.q': "Miiskan xagee buu aadayaa?", // nieuw, nalezen
    'c.moving.a': "Qolka laba iyo tobnaad. Eeg khariidadda dhismaha.", // nieuw, nalezen
    'c.moving': "Raridda: si caqli leh u qaad, wax walba calaamadee", // nieuw, nalezen
    'c.moving.b': "Raridda waa shaqo culus. Sanduuq ha ka buuxin xad-dhaaf: buugaagta iyo faylasha waa culus yihiin. Ku qaad jilbahaaga oo laaban iyo dhabarkaaga oo toosan, jidhkaaga u dhow. Sanduuqyo badan u isticmaal gaariga gacanta, miiskana wada qaada. Lambarka qolka cusub ku qor sanduuq kasta, kursi kasta iyo kombiyuutar kasta. Marka hore fiilooyinka ka saar. Waligaa sanduuqyo ha dhigin marin ama albaabka gurmadka hortiisa.", // nieuw, nalezen
    'c.moving.p': "Ma iga caawin kartaa inaan tan qaado?", // nieuw, nalezen
    'c.moving.s': "Waa inaad rartaa miis culus. Saaxiibkaa shaqadu wuu nasanayaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.moving.o1': "Sug caawimaad, oo wada qaada.", // nieuw, nalezen
    'c.moving.o2': "Keligaa jiid.", // nieuw, nalezen
    'c.moving.o3': "Keligaa qaad, si aad u taxaddar badan.", // nieuw, nalezen
    'c.moving.w': "Miis culus dhabarkaaga ayuu dhaawici karaa marka aad keligaa qaaddo. Wadajir waa fudud tahay oo waa ammaan.", // nieuw, nalezen
    'l.closing': "Furidda iyo xiridda dhismaha", // nieuw, nalezen
    'w.sleutelbos': "furayaasha (furayaal badan oo isku xiran)", // nieuw, nalezen
    'w.afsluiten': "qufulid", // nieuw, nalezen
    'w.ronde': "wareegga (socod qol kasta ah)", // nieuw, nalezen
    'w.raam': "daaqadda", // nieuw, nalezen
    'w.alarmcode': "koodhka alaarmiga", // nieuw, nalezen
    'w.nachtslot': "qufulka habeenka (qufulka dheeriga ah ee habeenka)", // nieuw, nalezen
    's.closing.1': "Wareegga ugu dambeeya ee dhismaha ayaan samaynayaa.", // nieuw, nalezen
    's.closing.2': "Daaqadaha oo dhan ma xiran yihiin?", // nieuw, nalezen
    's.closing.3': "Albaabka ku xir qufulka habeenka.", // nieuw, nalezen
    'c.closing.q': "Qof weli gudaha ma joogaa?", // nieuw, nalezen
    'c.closing.a': "Maya, qof walba wuu tagay. Waan qufulayaa.", // nieuw, nalezen
    'c.closing': "Koodhka alaarmigu waa sir", // nieuw, nalezen
    'c.closing.b': "Maalinta dhammaadkeeda waxaad samaynaysaa wareegga ugu dambeeya. Hubi in qofna gudaha ku harin, daaqaduhu xiran yihiin, nalaluna demsan yihiin. Albaabada gurmadku bannaan bay ahaanayaan. Furayaasha adiga kula jiraan, waligaa khaanad ha dhex dhigin. Koodhka alaarmigu waa sir: waligaa qofna ha siin, xitaa taleefanka. Alaarmigu ma dhawaaqay? Raac tallaabooyinka shirkaddaada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.closing.p': "Koodhka alaarmiga qofna ma siiyo.", // nieuw, nalezen
    'c.closing.s': "Qof ayaa wacay: “Waxaan ka socdaa shirkadda alaarmiga. Waa maxay koodhkaagu?” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.closing.o1': "Maya dheh, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.closing.o2': "Sii koodhka: wuxuu u ekaa mid naxariis leh.", // nieuw, nalezen
    'c.closing.o3': "Sii badh koodhka oo keliya.", // nieuw, nalezen
    'c.closing.w': "Shirkad alaarmi oo dhab ah koodhkaaga taleefanka kuma weydiiso. Tuug ayaa laga yaabaa inuu weydiiyo.", // nieuw, nalezen
    'u.guarding': "Wareegyada ilaalinta iyo gelitaanka", // nieuw, nalezen
    'l.patrol': "Wareegga", // nieuw, nalezen
    'w.surveilleren': "ilaalin wareeg ah (agagaarka oo la maro oo la eego)", // nieuw, nalezen
    'w.zaklamp': "tooshka", // nieuw, nalezen
    'w.terrein': "dhulka goobta (dhulka dhismaha ku wareegsan)", // nieuw, nalezen
    'w.hek': "xayndaabka, irridda", // nieuw, nalezen
    'w.inbraak': "jabsashada (qof ayaa u soo gala si uu wax u xado)", // nieuw, nalezen
    'w.openstaan': "furnaan (albaab ama daaqad ay ahayd inay xirnaato)", // nieuw, nalezen
    's.patrol.1': "Labadii saacadoodba mar ayaan wareeg sameeyaa.", // nieuw, nalezen
    's.patrol.2': "Irridda hoolka gadaashiisa waa furan tahay.", // nieuw, nalezen
    's.patrol.3': "Tooshkaaga qaado.", // nieuw, nalezen
    'c.patrol.q': "Wareeggaaga wax ma ku aragtay?", // nieuw, nalezen
    'c.patrol.a': "Haa. Daaqad ayaa furnayd albaabka dambe agtiisa.", // nieuw, nalezen
    'c.patrol': "Eeg oo sheeg, geesi ha iska dhigin", // nieuw, nalezen
    'c.patrol.b': "Wareeggaaga waxaad eegtaa: albaabada iyo daaqaduhu ma xiran yihiin, xayndaabku ma dhan yahay, ma jiraa qof aan ahayn inuu halkaas joogo? Qor waxa aad aragto, iyo waqtiga. Ma aragtaa wax yaab leh, sida daaqad jaban ama qof habeenkii jooga? Keligaa ha gelin. Ku wac qolka xakamaynta ama booliska raadiyaha ama taleefanka, oo ku sug meel ammaan ah. Ammaankaaga ayaa ugu horreeya. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.patrol.p': "Qof ayaan ku arkaa xayndaabka agtiisa.", // nieuw, nalezen
    'c.patrol.s': "Habeenkii waxaad aragtaa albaab la jabiyay oo la furay. Gudaha buuq ayaad ka maqlaysaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.patrol.o1': "Bannaanka joog, oo caawimaad wac.", // nieuw, nalezen
    'c.patrol.o2': "Si dhakhso ah u gal, oo eeg.", // nieuw, nalezen
    'c.patrol.o3': "Gudaha ugu qayli inaad imanayso.", // nieuw, nalezen
    'c.patrol.w': "Tuug gudaha jooga wuxuu noqon karaa khatar. Booliisku wuu og yahay waxa la sameeyo; shaqadaadu waa inaad aragto oo sheegto.", // nieuw, nalezen
    'l.access': "Xakamaynta gelitaanka", // nieuw, nalezen
    'w.slagboom': "albaabka ulka (ul waddada ka gudubta oo kor u kacda)", // nieuw, nalezen
    'w.toegangspas': "kaarka gelitaanka (kaar albaabka fura)", // nieuw, nalezen
    'w.legitimatie': "aqoonsiga (baasaboor ama kaarka aqoonsiga)", // nieuw, nalezen
    'w.draaihek': "irridda wareegta (irrid wareegta, hal qof mar)", // nieuw, nalezen
    'w.kenteken': "taarikada (xarfaha iyo lambarrada baabuurka)", // nieuw, nalezen
    'w.toegang': "gelitaanka (waad geli kartaa)", // nieuw, nalezen
    's.access.1': "Ma arki karaa aqoonsigaaga?", // nieuw, nalezen
    's.access.2': "Kaarkaagu ma shaqaynayo. Waan wacayaa.", // nieuw, nalezen
    's.access.3': "Albaabka ulka ayaan furayaa.", // nieuw, nalezen
    'c.access.q': "Ma geli karaa? Kaarkaygii waan ilaabay.", // nieuw, nalezen
    'c.access.a': "Waan ka xumahay, kaar la'aan ma geli kartid.", // nieuw, nalezen
    'c.access': "Kaar la'aan, gelitaan ma jiro", // nieuw, nalezen
    'c.access.b': "Irridda ama miiska waxaad ku hubisaa cidda soo galaysa. Qof walba wuxuu u baahan yahay kaar, ama waa inuu liiska ku jiraa. Naxariis yeelo, xitaa marka qof xanaaqsan yahay ama degdegsan yahay. Ha samayn ka-reebis sababtoo ah qof ayaa yiri isagaa madaxa ah: hubi. Waligaa kaarkaaga qofna ha amaahin, waligaana qof ha u oggolaan inuu gadaashaada ka soo galo. Kaar lumay waa in isla markiiba la sheegaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.access.p': "Ma arki karaa kaarkaaga?", // nieuw, nalezen
    'c.access.s': "Nin suud xiran ayaa yiri: “Waxaan ahay agaasimaha cusub. Weli kaar ma haysto.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.access.o1': "Hubi, ka hor intaadan u oggolaan inuu galo.", // nieuw, nalezen
    'c.access.o2': "U oggolow inuu galo: wuxuu u eg yahay qof muhiim ah.", // nieuw, nalezen
    'c.access.o3': "Sii kaarkaaga.", // nieuw, nalezen
    'c.access.w': "Qof kasta wuxuu dhihi karaa isagaa agaasimaha ah. Hubin degdeg ah ayaa dhismaha ammaan ka dhigta, agaasime dhab ahna wuu fahmi doonaa.", // nieuw, nalezen
    'l.cameras': "Kamaradaha iyo qolka xakamaynta", // nieuw, nalezen
    'w.meldkamer': "qolka xakamaynta (meesha dadku ka daawadaan kamaradaha oo ka qaataan wicitaannada)", // nieuw, nalezen
    'w.beeldscherm': "shaashadda", // nieuw, nalezen
    'w.camerabeelden': "muuqaallada kamarada (waxa kamaradu duubtay)", // nieuw, nalezen
    'w.inzoomen': "soo weynayn (sawirka oo la soo dhoweeyo)", // nieuw, nalezen
    'w.bewegingsmelder': "dareemaha dhaqdhaqaaqa (wuu arkaa marka wax dhaqaaqaan)", // nieuw, nalezen
    'w.verdachte': "qofka laga shakiyo", // nieuw, nalezen
    's.cameras.1': "Kamarada saddexaad waxaan ku arkaa qof xayndaabka agtiisa ah.", // nieuw, nalezen
    's.cameras.2': "Waan soo weyneynayaa.", // nieuw, nalezen
    's.cameras.3': "Qolka xakamayntu booliska ayuu wacayaa.", // nieuw, nalezen
    'c.cameras.q': "Maxaad shaashadda ku aragtaa?", // nieuw, nalezen
    'c.cameras.a': "Nin xayndaabka agtiisa ah. Saaxiib shaqo ayaan u dirayaa.", // nieuw, nalezen
    'c.cameras': "Muuqaallada kamaradu waa sir", // nieuw, nalezen
    'c.cameras.b': "Kamaraduhu dadka ayay duubaan: shaqaalaha, booqdayaasha iyo dadka dhinaca maraya. Waxa aad shaashadaha ku aragto waa sir. U daawo oo keliya shaqadaada, waligaana shaashadda ha ku duubin taleefankaaga. Waligaa muuqaallo ha u dirin saaxiibbo, hana dhigin internetka. Dhacdo ma jirtaa? Qor kamarada iyo waqtiga, oo u sheeg madaxaaga. Shirkaddaada oo keliya ayaa go'aamisa cidda hesha muuqaallada, tusaale ahaan booliska. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.cameras.p': "Looma oggola inaan taas tuso.", // nieuw, nalezen
    'c.cameras.s': "Saaxiib shaqo ayaa kaa codsaday inaad u dirto muuqaal qosol leh oo kamaradaha laga duubay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.cameras.o1': "Maya dheh: muuqaalladu waa sir.", // nieuw, nalezen
    'c.cameras.o2': "U dir, isaga oo keliya.", // nieuw, nalezen
    'c.cameras.o3': "Shaashadda ku duub taleefankaaga.", // nieuw, nalezen
    'c.cameras.w': "Dadka muuqaallada ku jira kuma raacin in la wadaago. Diristeedu waxay kaa qaadi kartaa shaqadaada.", // nieuw, nalezen
    'l.report': "Raadiyaha iyo warbixinta", // nieuw, nalezen
    'w.portofoon': "raadiyaha gacanta (walkie-talkie)", // nieuw, nalezen
    'w.rapport': "warbixinta (waxa dhacay oo la qoray)", // nieuw, nalezen
    'w.incident': "dhacdada (wax khaldamay)", // nieuw, nalezen
    'w.tijdstip': "waqtiga (goorta wax dhaceen)", // nieuw, nalezen
    'w.logboek': "buugga diiwaanka (buug ama app aad wax walba ku qorto)", // nieuw, nalezen
    'w.oproepen': "u yeerid (raadiyaha)", // nieuw, nalezen
    's.report.1': "Warbixin ayaan ka qorayaa dhacdada.", // nieuw, nalezen
    's.report.2': "Saacaddu si sax ah immisa ayay ahayd?", // nieuw, nalezen
    's.report.3': "Si fiican kuuma maqlayo. Mar kale dheh.", // nieuw, nalezen
    'c.report.q': "Maxaa warbixinta ku jiraya?", // nieuw, nalezen
    'c.report.a': "Waxa dhacay, meesha iyo saacadda.", // nieuw, nalezen
    'c.report': "Isla markiiba qor", // nieuw, nalezen
    'c.report.b': "Warbixin qor isla markiiba dhacdada kadib, inta aad weli si fiican u xasuusato. Qor waxa adigu aad aragtay oo maqashay: waxa dhacay, meesha, saacadda, iyo cidda joogtay. Qor xaqiiqooyin, ha qorin waxa aad u malaynayso. Raadiyaha, si gaaban oo cad u hadal, oo sug ilaa qofka kale dhammeeyo. Sheeg cidda aad tahay iyo meesha aad joogto. Warbixin fiican waxay caawisaa booliska, shirkaddaada iyo adiga.", // nieuw, nalezen
    'c.report.p': "Isla markiiba ayaan qorayaa.", // nieuw, nalezen
    'c.report.s': "Habeen mashquul ah kadib aad baad u daallan tahay. Hal dhacdo oo yar ayaa jirtay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.report.o1': "Qor warbixinta ka hor intaadan guriga aadin.", // nieuw, nalezen
    'c.report.o2': "Berri qor, hurdo fiican kadib.", // nieuw, nalezen
    'c.report.o3': "Iska daa: waxay ahayd mid yar uun.", // nieuw, nalezen
    'c.report.w': "Berri faahfaahinta waad ilaawaysaa. Warbixin aan waqti ama meel lahayn qofna ma caawiso.", // nieuw, nalezen
    'u.incidents': "Xaaladaha degdegga ah iyo dukaanka", // nieuw, nalezen
    'l.evacuation': "Dabka iyo ka bixinta dhismaha", // nieuw, nalezen
    'w.brandmelder': "badhanka alaarmiga dabka (sanduuq cas oo aad riixdo marka dab jiro)", // nieuw, nalezen
    'w.brandweer': "dab-demiska", // nieuw, nalezen
    'w.branddeur': "albaabka dabka (wuxuu joojiyaa dabka iyo qiiqa)", // nieuw, nalezen
    'w.brandmeldcentrale': "looxa alaarmiga dabka (wuxuu muujiyaa meesha alaarmigu ka dhacay)", // nieuw, nalezen
    'w.ontruimingsplan': "qorshaha ka bixinta (cidda waxa ay samayso marka qof walba bannaanka u baxayo)", // nieuw, nalezen
    'w.sirene': "jibbaaxa (sireenka)", // nieuw, nalezen
    's.evacuation.1': "Alaarmiga dabka ayaa ka dhacay hoolka labaad.", // nieuw, nalezen
    's.evacuation.2': "Albaabada dabka xiran ku hay.", // nieuw, nalezen
    's.evacuation.3': "Dab-demiska ayaan ku sugayaa albaabka laga galo.", // nieuw, nalezen
    'c.evacuation.q': "Qof walba bannaanka ma joogaa?", // nieuw, nalezen
    'c.evacuation.a': "Maya, laba qof oo liiska ku jira ayaa weli maqan.", // nieuw, nalezen
    'c.evacuation': "Dab: marka hore alaarmiga, kadib bannaanka", // nieuw, nalezen
    'c.evacuation.b': "Ma aragtaa dab ama qiiq? Riix badhanka alaarmiga dabka, ama wac 112. Kadib dadka ka caawi inay ka baxaan waddooyinka baxsashada, waligaa wiishka. Albaabada xir markaad dhaafto, laakiin ha qufulin. Dab la dagaallan oo keliya marka uu yar yahay oo aad baratay sida loo sameeyo. Aad meesha isu imaatinka, oo tiri cidda joogta. Dab-demiska kula kulan albaabka laga galo, oo u sheeg waxa aad taqaan. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.evacuation.p': "Qof walba bannaanka, meesha isu imaatinka.", // nieuw, nalezen
    'c.evacuation.s': "Alaarmiga dabka ayaa dhawaaqaya. Nin ayaa doonaya inuu wiishka qaato. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.evacuation.o1': "U dir jaranjarada.", // nieuw, nalezen
    'c.evacuation.o2': "Iska daa: wiishku waa ka dhakhso badan yahay.", // nieuw, nalezen
    'c.evacuation.o3': "La raac wiishka.", // nieuw, nalezen
    'c.evacuation.w': "Dab marka uu jiro, wiishku wuu istaagi karaa ama qiiq ayuu ka buuxsami karaa. Jaranjaradu waa jidka ammaanka ah ee bannaanka loo baxo.", // nieuw, nalezen
    'l.firstaid': "Gargaarka degdegga ah iyo 112", // nieuw, nalezen
    'w.ehbo': "gargaarka degdegga ah", // nieuw, nalezen
    'w.aed': "AED-ga (mashiin caawiya wadne istaagay)", // nieuw, nalezen
    'w.reanimeren': "samaynta CPR (laabta oo la riixo si nolol loo badbaadiyo)", // nieuw, nalezen
    'w.bewusteloos': "miyir la'aan (qofku ma soo toosayo)", // nieuw, nalezen
    'w.ademen': "neefsasho", // nieuw, nalezen
    'w.alarmnummer': "lambarka degdegga (112)", // nieuw, nalezen
    's.firstaid.1': "Wac 112. Weydiiso ambalaas.", // nieuw, nalezen
    's.firstaid.2': "AED-ga ka keen miiska soo dhaweynta.", // nieuw, nalezen
    's.firstaid.3': "Ma neefsanayo. CPR ayaan samaynayaa.", // nieuw, nalezen
    'c.firstaid.q': "Xagee AED-gu yaal?", // nieuw, nalezen
    'c.firstaid.a': "Albaabka laga galo, wiishka agtiisa.", // nieuw, nalezen
    'c.firstaid': "Wac 112, bilow CPR, keen AED-ga", // nieuw, nalezen
    'c.firstaid.b': "Qof ayaa dhacay oo aan dhaqaaqin? Isla markiiba wac 112, ama qof kale ha waco. Hubi in qofku si caadi ah u neefsanayo. Haddii kale: bilow CPR, oo qof ha keeno AED-ga. AED-gu wuu hadlaa oo wuxuu kuu sheegaa waxa aad samayso; si khaldan uma samayn kartid. Sii wad ilaa ambalaasku la wareego. Ma qaadatay koorsada gargaarka degdegga ah? U sheeg saaxiibbadaa shaqada, si ay u ogaadaan cidda ay u yeeraan.", // nieuw, nalezen
    'c.firstaid.p': "Wac 112 oo keen AED-ga.", // nieuw, nalezen
    'c.firstaid.s': "Nin ayaa ku dhacay hoolka. Ma dhaqaaqo, mana neefsanayo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.firstaid.o1': "Wac 112, oo bilow CPR.", // nieuw, nalezen
    'c.firstaid.o2': "Sug si aad u aragto inuu soo toosayo.", // nieuw, nalezen
    'c.firstaid.o3': "Kor u qaad, oo kursi saar.", // nieuw, nalezen
    'c.firstaid.w': "Marka wadnuhu istaago, daqiiqad kastaa waa muhiim. CPR iyo AED waxay badbaadin karaan nolol ka hor inta ambalaasku iman.", // nieuw, nalezen
    'l.shoplifting': "Tuugada dukaanka", // nieuw, nalezen
    'w.winkeldiefstal': "tuugada dukaanka", // nieuw, nalezen
    'w.heterdaad': "gacan-ku-dhiig (waxaad aragtaa marka ay dhacayso)", // nieuw, nalezen
    'w.aanhouden': "qabasho (qof oo la hayo ilaa booliisku yimaado)", // nieuw, nalezen
    'w.detectiepoortje': "irridda ammaanka (albaabka ayay ka dhawaaqdaa)", // nieuw, nalezen
    'w.alarmlabel': "calaamadda ammaanka (waxay ka dhigtaa irridda inay dhawaaqdo)", // nieuw, nalezen
    'w.verstoppen': "qarin", // nieuw, nalezen
    's.shoplifting.1': "Irridda ammaanku waxay ka dhawaaqaysaa albaabka laga baxo.", // nieuw, nalezen
    's.shoplifting.2': "Waxaan arkay markii ay dhacaysay.", // nieuw, nalezen
    's.shoplifting.3': "Waan hayaa ilaa booliisku yimaado.", // nieuw, nalezen
    'c.shoplifting.q': "Bacdiisa ma baari karaa?", // nieuw, nalezen
    'c.shoplifting.a': "Maya. Booliiska ayaa taas sameeya.", // nieuw, nalezen
    'c.shoplifting': "Tuugada dukaanka: eeg, sheeg, xoog qallafsan ha isticmaalin", // nieuw, nalezen
    'c.shoplifting.b': "Ma aragtay qof wax xadaya? Deganow, oo isla markiiba wac booliska. Dukaamada qaarkood waxay u oggolaadaan ilaaliyaha inuu tuugga hayo ilaa booliisku yimaado; kuwa kalena waxay leeyihiin: eeg oo keliya, sheeg oo xasuuso sida uu qofku u eg yahay. Waligaa ha garaacin hana laadin, waligaana qof qoorta ha ka qaban. Waligaa ha baarin qof, jeebabkiisa ama bacdiisa: taasi waa shaqada booliiska. Qor waxa aad aragtay, oo kaydi muuqaallada kamarada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.shoplifting.p': "Fadlan, ma i raaci kartaa?", // nieuw, nalezen
    'c.shoplifting.s': "Waxaad aragtay naag dhalo bacdeeda gelisay. Way baxaysaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.shoplifting.o1': "Si deggan u jooji, oo wac booliska.", // nieuw, nalezen
    'c.shoplifting.o2': "Bacdeeda si dhakhso ah ugu baar albaabka.", // nieuw, nalezen
    'c.shoplifting.o3': "Si xoog leh dhulka ugu tuur.", // nieuw, nalezen
    'c.shoplifting.w': "Baaritaanka qofku waa shaqada booliiska, xoog qallafsanna qof ayuu dhaawici karaa, adigana dhibaato ayuu kugu ridi karaa.", // nieuw, nalezen
    'l.aggression': "Dadka adag", // nieuw, nalezen
    'w.agressie': "gardarrada (dabeecad xanaaq iyo rabshad leh)", // nieuw, nalezen
    'w.schelden': "caayid (qof oo la caayo)", // nieuw, nalezen
    'w.kalmeren': "degid", // nieuw, nalezen
    'w.afstand': "masaafada (fogaanta)", // nieuw, nalezen
    'w.huisverbod': "mamnuucidda (halkan mar dambe ma soo geli kartid)", // nieuw, nalezen
    'w.bodycam': "kamarada jidhka (kamarad yar oo labiskaaga ku taal)", // nieuw, nalezen
    's.aggression.1': "Deganow, mudane. Waxaan rabaa inaan ku caawiyo.", // nieuw, nalezen
    's.aggression.2': "Masaafo ilaali oo deganow.", // nieuw, nalezen
    's.aggression.3': "Waa lagaa mamnuucay. Waa inaad hadda baxdo.", // nieuw, nalezen
    'c.aggression.q': "Maxaan u geli waayay?", // nieuw, nalezen
    'c.aggression.a': "Halkan waa lagaa mamnuucay.", // nieuw, nalezen
    'c.aggression': "Deganow, masaafo ilaali", // nieuw, nalezen
    'c.aggression.b': "Qof xanaaqsan si dhakhso ah ayuu u dego marka aad adigu deggan tahay. Si tartiib ah oo hoose u hadal, oo qofka kula hadal “u”. Dhexdiinna ku hay dherer gacan ama ka badan, oo gadaashaada ku hay meel aad ka baxdo. Qofka ha taaban, qaylona ha ku celin. Ma khatar bay noqonaysaa? Dib u dhaqaaq, oo wac saaxiib shaqo ama booliska. Kadib qor. Dhacdo xun kadib, qof kala hadal. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.aggression.p': "Deganow. Waxaan rabaa inaan ku caawiyo.", // nieuw, nalezen
    'c.aggression.s': "Nin ayaa kugu qaylinaya oo aad kuugu soo dhowaanaya. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.aggression.o1': "Dib u dhaqaaq, oo si deggan u hadal.", // nieuw, nalezen
    'c.aggression.o2': "Ugu qayli dib, isaga ka cod dheer.", // nieuw, nalezen
    'c.aggression.o3': "Iska riix.", // nieuw, nalezen
    'c.aggression.w': "Erayo deggan iyo meel bannaan ayaa kululaanta ka saara. Qaylada ama riixiddu way ka sii dartaa.", // nieuw, nalezen
    'u.foodhygiene': "Nadaafadda iyo qabowga", // nieuw, nalezen
    'l.hygienelock': "Qolka nadaafadda", // nieuw, nalezen
    'w.hygienesluis': "qolka nadaafadda (qolka aad ku nadiifsato ka hor intaadan gelin)", // nieuw, nalezen
    'w.baardnetje': "shabagga gadhka", // nieuw, nalezen
    'w.laarzenwasser': "dhaqaha kabaha dhaadheer (burushyo kabahaaga nadiifiya)", // nieuw, nalezen
    'w.desinfecteren': "jeermis-dilid (jeermiska oo la dilo)", // nieuw, nalezen
    'w.werkjas': "koodhka shaqada", // nieuw, nalezen
    'w.bacterie': "jeermiska, bakteeriyada", // nieuw, nalezen
    's.hygienelock.1': "Gacmahaaga dhaq oo jeermis-dil.", // nieuw, nalezen
    's.hygienelock.2': "Xiro shabagga timahaaga iyo shabagga gadhkaaga.", // nieuw, nalezen
    's.hygienelock.3': "Dhex mar dhaqaha kabaha.", // nieuw, nalezen
    'c.hygienelock.q': "Saacaddayda ma xiran karaa?", // nieuw, nalezen
    'c.hygienelock.a': "Maya, dahabka iyo qurxinta oo dhan waa la iska siibaa.", // nieuw, nalezen
    'c.hygienelock': "Nadiif u gal, mar kasta", // nieuw, nalezen
    'c.hygienelock.b': "Warshad cunto, adiga ayaa ah khatarta ugu weyn ee cuntada: jeermisku wuxuu ka yimaadaa gacmahaaga, timahaaga iyo dharkaaga. Sidaas darteed mar kasta oo aad gasho dhex mar qolka nadaafadda, xitaa nasasho ama musqusha kadib. Shabagga timaha xiro, shabagga gadhka haddii aad gadh leedahay, dhar shaqo oo nadiif ah, dahabka iyo qurxinta oo dhan iska siib. Gacmahaaga saabuun ku dhaq, qallaji oo jeermis-dil. Ma xanuunsan tahay, shuban ama matag? U sheeg madaxaaga ka hor intaadan bilaabin. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.hygienelock.p': "Shuban ayaan qabaa. Maanta ma shaqayn karaa?", // nieuw, nalezen
    'c.hygienelock.s': "Musqusha ayaad ka soo laabatay. Saaxiibkaa shaqadu wuxuu yiri: “Qolka nadaafadda ka bood, waan mashquulsannahay.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hygienelock.o1': "Si kastaba ha ahaatee dhex mar qolka nadaafadda.", // nieuw, nalezen
    'c.hygienelock.o2': "Ka bood, hal mar oo keliya.", // nieuw, nalezen
    'c.hygienelock.o3': "Xiro gacmo-gashiyo cusub oo keliya.", // nieuw, nalezen
    'c.hygienelock.w': "Jeermiska musqusha ka yimaada macaamiil badan ayuu xanuunsiin karaa. Dhawr daqiiqo oo qolka nadaafadda ah ayaa taas ka hortaga.", // nieuw, nalezen
    'l.allergens': "Walxaha xasaasiyadda keena", // nieuw, nalezen
    'w.allergeen': "walaxda xasaasiyadda keenta (cunto dadka qaarkood aad u xanuunsiisa)", // nieuw, nalezen
    'w.noten': "loosta", // nieuw, nalezen
    'w.pinda': "looska dhulka (fuul)", // nieuw, nalezen
    'w.gluten': "gluteenka (wuxuu ku jiraa sarreenka, sidaas darteed rootiga iyo keega)", // nieuw, nalezen
    'w.sesam': "sisinta (abuur yaryar, tusaale ahaan rootiga korkiisa)", // nieuw, nalezen
    'w.kruisbesmetting': "isku-wasakhaynta (wax ayaa galaya cunto aanu ahayn inuu galo)", // nieuw, nalezen
    's.allergens.1': "Alaabtan loos ayaa ku jira.", // nieuw, nalezen
    's.allergens.2': "Calaamadda ka eeg walxaha xasaasiyadda keena ee ku jira.", // nieuw, nalezen
    's.allergens.3': "Looska dhulka kadib wax walba si fiican u nadiifi.", // nieuw, nalezen
    'c.allergens.q': "Weelkan ma la raaci karaa kuwa kale?", // nieuw, nalezen
    'c.allergens.a': "Maya, loos ayaa ku jira.", // nieuw, nalezen
    'c.allergens': "Raad yar ayaa ku filan", // nieuw, nalezen
    'c.allergens.b': "Dadka qaarkood, xabbad aad u yar oo loos, loos dhulka, caano, ukun, gluteen ama sisin ah waxay noqon kartaa khatar nafeed. Taas darteed calaamaddu waa inay si sax ah u sheegtaa waxa alaab ku jira. Walxaha xasaasiyadda keena gooni u hay: weelal, qalab iyo midabyo u gaar ah. Alaab walax xasaasiyadeed leh kadib, khadka waa la nadiifiyaa ka hor alaabta xigta. Waligaa ha beddelin walax cuntada ka mid ah, xitaa marka ay isku mid u eg yihiin. Ma shakisan tahay? Weydii. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.allergens.p': "Tan loos ma ku jiraa?", // nieuw, nalezen
    'c.allergens.s': "Looska yicibta ah waa dhammaaday. Saaxiib shaqo ayaa yiri: “Isticmaal looska kale, qofna ma ogaanayo.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.allergens.o1': "Maya dheh, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.allergens.o2': "Isticmaal: loos waa loos.", // nieuw, nalezen
    'c.allergens.o3': "Isticmaal, oo calaamadda waxba ha ka beddelin.", // nieuw, nalezen
    'c.allergens.w': "Calaamaddu waa inay sheegtaa waxa ku jira. Loos khaldan qof xasaasiyad qaba aad ayuu u xanuunsiin karaa.", // nieuw, nalezen
    'l.coldroom': "Qolka qabow iyo qaboojiyaha barafka", // nieuw, nalezen
    'w.temperatuur': "heerkulka", // nieuw, nalezen
    'w.graden': "darajooyinka (°C)", // nieuw, nalezen
    'w.bevroren': "barafoobay", // nieuw, nalezen
    'w.ontdooien': "dhalaalin (barafka oo laga saaro)", // nieuw, nalezen
    'w.koelketen': "silsiladda qabowga (cuntadu waxay ahaanaysaa qabow jidka oo dhan)", // nieuw, nalezen
    'w.thermokleding': "dharka qabowga (dhar diirran oo qabowga loogu talagalay)", // nieuw, nalezen
    's.coldroom.1': "Qolka qaboojiyaha barafka waa siddeed iyo toban darajo ka hooseeya eber.", // nieuw, nalezen
    's.coldroom.2': "Hilibka isla markiiba geli qolka qabow.", // nieuw, nalezen
    's.coldroom.3': "Heerkulka ku qor liiska.", // nieuw, nalezen
    'c.coldroom.q': "Maxuu qolka qabowgu u dhawaaqayaa?", // nieuw, nalezen
    'c.coldroom.a': "Albaabku waa furan yahay. Si dhakhso ah u xir.", // nieuw, nalezen
    'c.coldroom': "Shaqada qabowga: diirran u labiso, cuntada qabow ku hay", // nieuw, nalezen
    'c.coldroom.b': "Cuntadu waa inay qabow ahaataa jidka oo dhan: gaariga xamuulka ilaa qolka qabow ilaa dukaanka. Sidaas darteed alaabta qabow isla markiiba meesheeda geli, oo albaabada qolka qabow iyo qaboojiyaha barafka xiran ku hay. Hubi heerkulka oo qor. Qaboojiyaha barafka, xiro dharkaaga qabowga, gacmo-gashiyo iyo koofiyad, oo waqtigeeda qaado nasasho diirran. Hubi inaad mar walba albaabka gudaha ka furi karto. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.coldroom.p': "Halkan aad bay u kulul tahay. Qaboojintu ma shaqaynayso.", // nieuw, nalezen
    'c.coldroom.s': "Heerkulbeegga qolka qabow wuxuu muujinayaa lambar ka sarreeya kan caadiga ah si aad ah. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.coldroom.o1': "Isla markiiba u sheeg madaxaaga.", // nieuw, nalezen
    'c.coldroom.o2': "Sug: mar kale ayuu qaboobi doonaa.", // nieuw, nalezen
    'c.coldroom.o3': "Lambarka caadiga ah ku qor liiska.", // nieuw, nalezen
    'c.coldroom.w': "Kulayl xad-dhaaf ah wuxuu ka dhigan yahay in jeermisku koro. Madaxaaga ayaa go'aamiya in cuntadu weli ammaan tahay.", // nieuw, nalezen
    'l.foreignbody': "Dhalo, bir iyo caag cuntada ku jira", // nieuw, nalezen
    'w.metaaldetector': "baaraha birta", // nieuw, nalezen
    'w.glasbreuk': "dhalo jabtay", // nieuw, nalezen
    'w.splinter': "jajabka (gabal yar oo fiiqan)", // nieuw, nalezen
    'w.vreemdvoorwerp': "shay shisheeye (wax cuntada ku jira oo aan halkaas ka mid ahayn)", // nieuw, nalezen
    'w.vervuild': "wasakhoobay (wax wasakh ah ayaa galay)", // nieuw, nalezen
    'w.ploegleider': "hoggaamiyaha wareegga shaqada", // nieuw, nalezen
    's.foreignbody.1': "Baaraha birtu wuu dhawaaqayaa. Jooji khadka.", // nieuw, nalezen
    's.foreignbody.2': "Dhalo ayaa ku jabtay khadka labaad.", // nieuw, nalezen
    's.foreignbody.3': "Alaabta geli weelka alaabta la diiday.", // nieuw, nalezen
    'c.foreignbody.q': "Maxaan ku sameeyaa gabalkan caagga ah?", // nieuw, nalezen
    'c.foreignbody.a': "Tus hoggaamiyaha wareegga shaqada.", // nieuw, nalezen
    'c.foreignbody': "Wax ma ku jiraan cuntada? Jooji oo sheeg", // nieuw, nalezen
    'c.foreignbody.b': "Dhalo, bir, caag, balaastar ama timo waligood waa inaysan cuntada gelin. Baaraha birtu ma dhawaaqayaa, mise wax yaab leh ayaad heshay? Alaabta dhinac dhig, oo u sheeg hoggaamiyaha wareegga shaqada. Dhalo ma jabtay? Jooji khadka u dhow: hoggaamiyaha wareegga shaqada ayaa go'aamiya waxa la tuurayo. Isticmaal oo keliya balaastar buluug ah, si si fudud loo arko. Waligaa ha keenin dhalo, qalimaan ama wax dabacsan goobta shaqada. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.foreignbody.p': "Wax ayaan ka helay alaabta.", // nieuw, nalezen
    'c.foreignbody.s': "Nal dhalo ah ayaa ku jabay khadka korkiisa. Alaabtu way sii socotaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.foreignbody.o1': "Jooji khadka, oo u yeer hoggaamiyaha wareegga shaqada.", // nieuw, nalezen
    'c.foreignbody.o2': "Ka soo saar dhalada aad arki karto.", // nieuw, nalezen
    'c.foreignbody.o3': "Sii wad: baaruhu dhalada wuu helaa.", // nieuw, nalezen
    'c.foreignbody.w': "Baaraha birtu dhalo ma helo. Jajab yar oo aanad arki karin macmiil ayay si xun u dhaawici karaan.", // nieuw, nalezen
    'u.foodline': "Khadka wax soo saarka", // nieuw, nalezen
    'l.cutting': "Goynta iyo miisaamidda", // nieuw, nalezen
    'w.uitbenen': "lafo ka saarid (lafaha oo hilibka laga gooyo)", // nieuw, nalezen
    'w.fileren': "fileeyn (kalluun ama hilib oo loo gooyo gabalo fidsan)", // nieuw, nalezen
    'w.portie': "qaybta (cunto qof u go'an)", // nieuw, nalezen
    'w.wegen': "miisaamid", // nieuw, nalezen
    'w.gewicht': "miisaanka (culayska)", // nieuw, nalezen
    'w.snijplank': "looxa wax lagu jaro", // nieuw, nalezen
    's.cutting.1': "Qayb kasta miisaam.", // nieuw, nalezen
    's.cutting.2': "Miisaanku aad buu u yar yahay.", // nieuw, nalezen
    's.cutting.3': "Mindidaada afee ka hor intaadan bilaabin.", // nieuw, nalezen
    'c.cutting.q': "Immisa ayaa weel galaya?", // nieuw, nalezen
    'c.cutting.a': "Shan boqol oo garaam. Eeg miisaanka.", // nieuw, nalezen
    'c.cutting': "Mindi fiiqan, gacan ammaan ah", // nieuw, nalezen
    'c.cutting.b': "Mindi fiiqan waa ka ammaan badan tahay mid af-xun: xoog yar ayaad u baahan tahay, sidaas darteed way ka yar tahay simbiriirixdeedu. Mar walba gacanta kale ku xiro gacmo-gashigaaga goynta u adkaysta. Ka jar dhinaca jidhkaaga ka fog. Mindida si siman u dhig looxa, waligaa ha gelin weelka maydhista ama hilibka hoostiisa. Ha isku dayin inaad qabato mindi dhacaysa: dib u dhaqaaq. Mindida u qaad afka oo hoos u jeeda, lugtaada u dhow. Xitaa goyn yar waa in la daboolaa oo la sheegaa.", // nieuw, nalezen
    'c.cutting.p': "Mindidaydu waa af-xun tahay.", // nieuw, nalezen
    'c.cutting.s': "Mindidaadu gacantaada ayay ka siibatay oo way dhacaysaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.cutting.o1': "Dib u dhaqaaq, oo u daa inay dhacdo.", // nieuw, nalezen
    'c.cutting.o2': "Si dhakhso ah u qabo.", // nieuw, nalezen
    'c.cutting.o3': "Cagtaada ku jooji.", // nieuw, nalezen
    'c.cutting.w': "Mindi dhacaysa si qoto dheer ayay u jartaa marka aad qabato. Dhulka dhexdiisa waxyeelo ma geysan karto.", // nieuw, nalezen
    'l.labels': "Baakadeynta iyo calaamadaha", // nieuw, nalezen
    'w.etiketteren': "calaamadeyn (calaamado oo la dhejiyo)", // nieuw, nalezen
    'w.lotnummer': "lambarka dufcadda (hal lambar oo hal dufcad alaab ah leh)", // nieuw, nalezen
    'w.vacuum': "faakuum lagu xiray (hawada oo dhan waa laga saaray)", // nieuw, nalezen
    'w.schaal': "saxanka (weel fidsan oo cuntada loogu talagalay)", // nieuw, nalezen
    'w.printer': "daabacaha", // nieuw, nalezen
    'w.omdoos': "sanduuqa dibadda (sanduuqa weyn ee baakadaha yaryar ku wareegsan)", // nieuw, nalezen
    's.labels.1': "Hubi in taariikhda calaamaddu sax tahay.", // nieuw, nalezen
    's.labels.2': "Baakaddan faakuum laguma xirin. Mar kale baakadee.", // nieuw, nalezen
    's.labels.3': "Lambarka dufcadda ku qor liiska.", // nieuw, nalezen
    'c.labels.q': "Taariikhdee ayaa la dul dhigayaa?", // nieuw, nalezen
    'c.labels.a': "Toban maalmood kadib. Eeg liiska.", // nieuw, nalezen
    'c.labels': "Calaamad khaldan waa khatar", // nieuw, nalezen
    'c.labels.b': "Calaamaddu waxay macmiilka u sheegtaa waxa ku jira, inta uu miisaamayo iyo ilaa goorma uu fiican yahay. Taariikh khaldan ama calaamad khaldan dadka ayay xanuunsiin kartaa, tusaale ahaan marka walax xasaasiyadeed ka maqan tahay. Sidaas darteed hubi calaamadaha ugu horreeya ee shaqo-socod cusub kasta: alaabta, taariikhda iyo lambarka dufcadda. Wax ma khaldan yihiin? Jooji, oo u sheeg madaxaaga. Alaabta calaamadda khaldan leh dhinac ayaa la dhigaa, waligeed lama iibiyo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.labels.p': "Calaamaddu sax ma aha.", // nieuw, nalezen
    'c.labels.s': "Waxaad aragtaa in taariikhda calaamadaha ay hal toddobaad ka dambayso. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.labels.o1': "Jooji baakadeynta, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.labels.o2': "Sii wad: hal toddobaad waxba ma aha.", // nieuw, nalezen
    'c.labels.o3': "Taariikhda qalin ku beddel.", // nieuw, nalezen
    'c.labels.w': "Taariikh khaldan waxay dadka u oggolaan kartaa inay cunaan cunto aan hadda ammaan ahayn. Waa ka fiican tahay in hadda la joojiyo intii hadhow dib loo soo celin lahaa.", // nieuw, nalezen
    'l.linecleaning': "Nadiifinta khadka", // nieuw, nalezen
    'w.schuim': "xumbada", // nieuw, nalezen
    'w.hogedrukspuit': "buufiyaha cadaadiska sare", // nieuw, nalezen
    'w.naspoelen': "biyo raacin (biyo nadiif ah oo lagu dhaqo)", // nieuw, nalezen
    'w.demonteren': "kala furid", // nieuw, nalezen
    'w.borstel': "burushka", // nieuw, nalezen
    'w.restjes': "hadhaaga (xabbado cunto ah oo yaryar)", // nieuw, nalezen
    's.linecleaning.1': "Marka hore mashiinka dami.", // nieuw, nalezen
    's.linecleaning.2': "Xumbada ku buufi suunka.", // nieuw, nalezen
    's.linecleaning.3': "Kadib wax walba biyo nadiif ah ku raaci.", // nieuw, nalezen
    'c.linecleaning.q': "Suunku ma nadiif yahay hadda?", // nieuw, nalezen
    'c.linecleaning.a': "Weli maya. Weli waa inaan biyo raaciyo.", // nieuw, nalezen
    'c.linecleaning': "Korontada dami ka hor intaadan nadiifin", // nieuw, nalezen
    'c.linecleaning.b': "Waligaa ha nadiifin mashiin shaqaynaya. Dami, oo hubi inaan qofna dib u shidi karin: raac tallaabooyinka shirkaddaada. Xiro gacmo-gashiyada, muraayadaha iyo kabaha dhaadheer ee saxda ah: alaabta nadiifintu waxay gubi kartaa maqaarkaaga iyo indhahaaga. Waligaa alaabo ha isku darin. Marka hore hadhaaga ka qaad, kadib xumbee, xoqo oo biyo raaci. Biyo ha ku buufin sanduuqyada korontada ama fiilooyinka. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.linecleaning.p': "Mashiinku ma demsan yahay?", // nieuw, nalezen
    'c.linecleaning.s': "Hilib ayaa ku dhegay suunka. Mashiinku weli wuu shaqaynayaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.linecleaning.o1': "Marka hore dami, kadib ka saar.", // nieuw, nalezen
    'c.linecleaning.o2': "Gacantaada si dhakhso ah ugu soo saar.", // nieuw, nalezen
    'c.linecleaning.o3': "Mindi ku riix oo ka saar.", // nieuw, nalezen
    'c.linecleaning.w': "Suun shaqaynaya gacantaada ayuu jiidi karaa hal ilbiriqsi. Damintu waxay qaadataa waqti yar oo keliya.", // nieuw, nalezen
    'l.haccp': "Hubinta iyo qorista (HACCP)", // nieuw, nalezen
    'w.controlepunt': "barta hubinta (tallaabo aad wax ku hubiso)", // nieuw, nalezen
    'w.kerntemperatuur': "heerkulka gudaha (heerkulka cuntada gudaheeda)", // nieuw, nalezen
    'w.prikthermometer': "heerkulbeegga la mudo (cuntada ayaad ku mudaa)", // nieuw, nalezen
    'w.afwijking': "leexashada (wax sidii ay ahayd ma aha)", // nieuw, nalezen
    'w.steekproef': "baaritaan kedis ah (dhawr alaab ayaad tijaabisaa)", // nieuw, nalezen
    'w.kwaliteitsdienst': "qaybta tayada (QA)", // nieuw, nalezen
    's.haccp.1': "Heerkulka gudaha ku cabbir heerkulbeegga la mudo.", // nieuw, nalezen
    's.haccp.2': "Wax walba ku qor liiska.", // nieuw, nalezen
    's.haccp.3': "Wax ma khaldan yihiin? Isla markiiba sheeg.", // nieuw, nalezen
    'c.haccp.q': "Maxaan wax walba u qoraa?", // nieuw, nalezen
    'c.haccp.a': "Sidaas ayaan ku ogaanaa in cuntadu ammaan tahay.", // nieuw, nalezen
    'c.haccp': "HACCP: hubi, qor, sheeg", // nieuw, nalezen
    'c.haccp.b': "Shirkad kasta oo cunto waxay ku shaqaysaa qorshe badbaadada cuntada (HACCP). Wuxuu sheegaa tallaabooyinka aad wax ku hubinayso, sida heerkulka qolka qabow ama heerkulka gudaha ee hilib la kariyey. Waad hubisaa, waad qortaa, waadna saxiixdaa. Qor waxa aad dhab ahaan cabbirtay, xitaa marka uu khaldan yahay. Lambar khaldan eeddaada ma aha, laakiin qarintiisu waa khatar. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.haccp.p': "Heerkulku aad buu u sarreeyaa.", // nieuw, nalezen
    'c.haccp.s': "Waad ilowday inaad cabbirto saacadda tobnaad. Saaxiibkaa shaqadu wuxuu yiri: “Iska qor lambar fiican.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.haccp.o1': "Hadda cabbir, oo qor waqtiga dhabta ah.", // nieuw, nalezen
    'c.haccp.o2': "Qor lambar fiican saacadda tobnaad.", // nieuw, nalezen
    'c.haccp.o3': "Safka banaan ka tag.", // nieuw, nalezen
    'c.haccp.w': "Liisku waa inuu muujiyaa waxa dhab ahaan dhacay. Lambar la sameystay wuxuu qariyaa dhibaato dadka xanuunsiin karta.", // nieuw, nalezen
    'u.collection': "Ururinta qashinka", // nieuw, nalezen
    'l.binlorry': "Gaariga qashinka", // nieuw, nalezen
    'w.vuilniswagen': "gaariga qashinka", // nieuw, nalezen
    'w.kliko': "weelka qashinka ee shaagagga leh (weel qashin oo shaag leh)", // nieuw, nalezen
    'w.kieplift': "wiishka weelka (weelka ayuu kor u qaadaa oo faaruqiyaa)", // nieuw, nalezen
    'w.treeplank': "tallaabada dambe (meel lagu istaago oo gaariga gadaashiisa ah)", // nieuw, nalezen
    'w.bijplaatsing': "qashinka dheeriga ah (bacaha laga tagay weelka agtiisa)", // nieuw, nalezen
    'w.ophaaldag': "maalinta ururinta", // nieuw, nalezen
    's.binlorry.1': "Weelka qashinka saar wiishka weelka.", // nieuw, nalezen
    's.binlorry.2': "Bacaha ayaa yaal konteenarka agtiisa.", // nieuw, nalezen
    's.binlorry.3': "Weelka qashinku aad buu u culus yahay. Iska daa.", // nieuw, nalezen
    'c.binlorry.q': "Gadaasha ma ku raaci karaa?", // nieuw, nalezen
    'c.binlorry.a': "Maya, qolka darawalka ayaad gelaysaa.", // nieuw, nalezen
    'c.binlorry': "La arag, oo gudaha ku raac", // nieuw, nalezen
    'c.binlorry.b': "Wareeg kasta xiro dharkaaga iftiinka leh. Ka gal oo ka bax dhinaca waddada lugta, waligaa dhinaca taraafikada. Ku raac qolka darawalka, ha ku raacin gaariga gadaashiisa: oo keliya marka shirkaddaadu si cad u oggolaato, waligaana marka uu dib u socdo ama uu dheereeyo. Ka fogow wiishka weelka inta uu dhaqaaqayo. Weel ma aad u culus yahay, mise wax ayaa ka soo baxaya? Iska daa, oo sheeg. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.binlorry.p': "Weelkan qashinku aad buu u culus yahay.", // nieuw, nalezen
    'c.binlorry.s': "Waddada xigta aad bay u dhow tahay. Darawalku wuxuu yiri: “Ku istaag tallaabada dambe.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.binlorry.o1': "Si kastaba ha ahaatee gal qolka darawalka.", // nieuw, nalezen
    'c.binlorry.o2': "Ku istaag tallaabada: waa dhow tahay.", // nieuw, nalezen
    'c.binlorry.o3': "Gaariga gadaashiisa ka soco.", // nieuw, nalezen
    'c.binlorry.w': "Ka dhicidda gaari socda waa mid ka mid ah khataraha ugu waaweyn ee shaqadan. Qolka darawalka waad ku ammaan tahay.", // nieuw, nalezen
    'l.reversing': "Dib u socod ammaan ah", // nieuw, nalezen
    'w.achteruitrijden': "dib u wadid (gaariga oo gadaal loo wado)", // nieuw, nalezen
    'w.dodehoek': "meesha indha la'aanta (meesha darawalku ku arki karin)", // nieuw, nalezen
    'w.aanwijzer': "tilmaamaha (qofka darawalka hago)", // nieuw, nalezen
    'w.oogcontact': "isha-isu-eegidda", // nieuw, nalezen
    'w.piepen': "dhawaaqid (biib)", // nieuw, nalezen
    'w.cabine': "qolka darawalka (meesha darawalku fadhiyo)", // nieuw, nalezen
    's.reversing.1': "Waligaa ha istaagin gaariga gadaashiisa.", // nieuw, nalezen
    's.reversing.2': "Muraayadda kuguma arko.", // nieuw, nalezen
    's.reversing.3': "Darawalka il-isu-eeg la samee.", // nieuw, nalezen
    'c.reversing.q': "Ma iga caawin kartaa inaan dib u wado?", // nieuw, nalezen
    'c.reversing.a': "Haa, bidix ayaan joogaa. Muraayaddaada eeg.", // nieuw, nalezen
    'c.reversing': "Waligaa gaari dib u socda gadaashiisa ha joogin", // nieuw, nalezen
    'c.reversing.b': "Shilal badan oo gaadiidka qashinka ah waxay dhacaan marka ay gadaal u socdaan. Darawalku ma arki karo meesha gaariga si toos ah uga dambeysa: meesha indha la'aanta. Sidaas darteed waligaa ha istaagin hana marin gaari dib u socon kara gadaashiisa. Darawalka ka hag dhinaca, meesha aad isku arki kartaan muraayadda. Isha-isu-eegiddu ma lumay? Darawalku wuu istaagaa. Ku heshiiya calaamado cad ka hor intaydaan bilaabin. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.reversing.p': "Jooji! Mar dambe kuma arko.", // nieuw, nalezen
    'c.reversing.s': "Gaarigu dib ayuu u socdaa. Waxaad gadaashiisa u socotaa si aad bac u soo qaaddo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.reversing.o1': "Sug ilaa gaarigu istaago.", // nieuw, nalezen
    'c.reversing.o2': "Si dhakhso ah u soco: waa hal ilbiriqsi uun.", // nieuw, nalezen
    'c.reversing.o3': "Darawalka gacanta u haadi, oo tag.", // nieuw, nalezen
    'c.reversing.w': "Darawalku kuma arki karo gaariga gadaashiisa. Hal ilbiriqsi ayaa shil ku filan.", // nieuw, nalezen
    'l.wastesorting': "Kala soocidda qashinka", // nieuw, nalezen
    'w.papier': "warqadda", // nieuw, nalezen
    'w.plastic': "caagga (balaastigga)", // nieuw, nalezen
    'w.gft': "qashinka cuntada iyo beerta (miro, khudaar iyo dhir)", // nieuw, nalezen
    'w.restafval': "qashinka guud (waxa aan la kala sooci karin)", // nieuw, nalezen
    'w.karton': "kartoonka", // nieuw, nalezen
    'w.blik': "qasacadda", // nieuw, nalezen
    's.wastesorting.1': "Dhaladu waxay galaysaa weelka dhalooyinka.", // nieuw, nalezen
    's.wastesorting.2': "Tani waxay ka mid tahay qashinka guud.", // nieuw, nalezen
    's.wastesorting.3': "Kartoonka laab oo fidi.", // nieuw, nalezen
    'c.wastesorting.q': "Sanduuqa pizza-da xagee buu galaa?", // nieuw, nalezen
    'c.wastesorting.a': "Qashinka guud. Saliid ayaa ku taal.", // nieuw, nalezen
    'c.wastesorting': "Kala sooc fiican shaqo ayuu badbaadiyaa", // nieuw, nalezen
    'c.wastesorting.b': "Qashinka la kala sooco mar kale ayaa la isticmaali karaa: warqaddu warqad ayay noqotaa, dhaladuna dhalo. Laakiin hal shay oo khaldan ayaa halleyn kara rar dhan. Sidaas darteed weelka dhex eeg ka hor intaadan faaruqin. Wax ma ku jiraan oo aan halkaas ka mid ahayn, sida bac qashin guud ah oo warqadda ku jirta? Iska daa, ama raac xeerarka shirkaddaada. Qashinkee meeshee galaa way ku kala duwan tahay magaalo kasta: baro xeerarka deegaankaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.wastesorting.p': "Tani halkan kama mid aha.", // nieuw, nalezen
    'c.wastesorting.s': "Weel warqadeed ayaa ka buuxa bacaha qashinka ee madow. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.wastesorting.o1': "Iska daa, oo sheeg.", // nieuw, nalezen
    'c.wastesorting.o2': "Ku faaruqi warqadda.", // nieuw, nalezen
    'c.wastesorting.o3': "Bacaha gacanta ku soo saar.", // nieuw, nalezen
    'c.wastesorting.w': "Qashinka warqadda ku jira rarka oo dhan ayuu halleeyaa. Bacaha waxaa kale oo ku jiri kara waxyaabo fiiqan ama wasakh ah.", // nieuw, nalezen
    'l.wastesafety': "Waxyaabaha fiiqan iyo qaadista", // nieuw, nalezen
    'w.snijwond': "goynta (nabar wax fiiqan ka yimid)", // nieuw, nalezen
    'w.prikken': "mudid (af fiiqan ayaa maqaarkaaga gala)", // nieuw, nalezen
    'w.naald': "irbadda", // nieuw, nalezen
    'w.scherp': "fiiqan", // nieuw, nalezen
    'w.rugpijn': "xanuunka dhabarka", // nieuw, nalezen
    'w.tetanusprik': "tallaalka teetanada (irbad ka hortagta cudur ka yimaada wasakh nabar gasha)", // nieuw, nalezen
    's.wastesafety.1': "Waligaa bac hoosta ha ka qaban.", // nieuw, nalezen
    's.wastesafety.2': "Taxaddar, baccan dhalo ayaa ku jirta.", // nieuw, nalezen
    's.wastesafety.3': "Irbad ayaa i muday.", // nieuw, nalezen
    'c.wastesafety.q': "Waan is jaray. Maxaan sameeyaa?", // nieuw, nalezen
    'c.wastesafety.a': "Nabarka si fiican u dhaq. Oo ii sheeg.", // nieuw, nalezen
    'c.wastesafety': "Waligaa bac ha tuujin", // nieuw, nalezen
    'c.wastesafety.b': "Bac qashin ah waxaa ku jiri kara dhalo, mindiyo ama irbado. Sidaas darteed waligaa bac jidhkaaga ha ku cadaadin, waligaa ha tuujin, waligaana lugtaada ha ku qaadin: kor ka qabo, adiga kaa fog. Xiro gacmo-gashiyadaada. Ku qaad jilbahaaga oo laaban iyo dhabarkaaga oo toosan, weelkana riix, ha qaadin. Wax ma ku mudeen ama ma ku jareen? Nabarka si fiican biyo ugu dhaq, oo isla maalintaas u sheeg madaxaaga.", // nieuw, nalezen
    'c.wastesafety.p': "Wax ayaa i muday.", // nieuw, nalezen
    'c.wastesafety.s': "Bac ayaa jeexantay. Waxaad ku dhex aragtaa irbad. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.wastesafety.o1': "Ha taaban, oo sheeg.", // nieuw, nalezen
    'c.wastesafety.o2': "Ku qaad adigoo gacmo-gashiyo xiran.", // nieuw, nalezen
    'c.wastesafety.o3': "Dib ugu riix bacda.", // nieuw, nalezen
    'c.wastesafety.w': "Gacmo-gashiyadu ma joojiyaan irbad. Irbaddu waxay sidi kartaa cudur.", // nieuw, nalezen
    'u.recycling': "Goobta dib-u-warshadaynta", // nieuw, nalezen
    'l.yard': "Goobta dib-u-warshadaynta", // nieuw, nalezen
    'w.milieustraat': "goobta dib-u-warshadaynta (meesha dadku keenaan qashin weyn ama gaar ah)", // nieuw, nalezen
    'w.grofvuil': "qashinka waaweyn (waxyaabo waaweyn, sida fadhi)", // nieuw, nalezen
    'w.puin': "burburka (dhagxaan iyo leben jabay)", // nieuw, nalezen
    'w.matras': "furaashka", // nieuw, nalezen
    'w.weegbrug': "miisaanka gaadiidka (miisaan baabuurta iyo gaadiidka xamuulka)", // nieuw, nalezen
    'w.afvalpas': "kaarka qashinka (deggeneyaashu irridda ayay ka tusaan)", // nieuw, nalezen
    's.yard.1': "Burburku wuxuu galayaa konteenarka afraad.", // nieuw, nalezen
    's.yard.2': "Ma arki karaa kaarkaaga qashinka?", // nieuw, nalezen
    's.yard.3': "Marka hore dul mar miisaanka gaadiidka.", // nieuw, nalezen
    'c.yard.q': "Furaashkan xagee buu galayaa?", // nieuw, nalezen
    'c.yard.a': "Konteenarka qashinka waaweyn, gadaasha.", // nieuw, nalezen
    'c.yard': "Caawi, laakiin goobta ammaan ku hay", // nieuw, nalezen
    'c.yard.b': "Goobta dib-u-warshadaynta waxaad booqdayaasha u sheegtaa meesha qashinkoodu galayo, waxaadna hubisaa in si fiican loo kala soocay. Naxariis yeelo: dad badan sannadkii dhawr jeer oo keliya ayay yimaadaan, xeerarkana ma yaqaanaan. Carruurta iyo booqdayaasha ka fogee mashiinnada iyo cidhifka konteenarrada dhaadheer. Waxyaabaha culus wada qaada, ama booqdaha u daa inuu isagu qaado. Qof ma keenay wax aanad aqoon? Weydii ka hor inta uusan gelin. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.yard.p': "Tani waxay galaysaa konteenarka afraad.", // nieuw, nalezen
    'c.yard.s': "Nin ayaa doonaya inuu bac buuxda ku tuuro konteenarka alwaaxda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.yard.o1': "Weydii waxa bacda ku jira.", // nieuw, nalezen
    'c.yard.o2': "Iska daa: waa qashinkiisa.", // nieuw, nalezen
    'c.yard.o3': "Adigu u tuur.", // nieuw, nalezen
    'c.yard.w': "Hal shay oo khaldan ayaa halleyn kara konteenar buuxa. Su'aal naxariis leh ayaa qashinka nadiif ku haysa.", // nieuw, nalezen
    'l.hazardous': "Qashinka kiimikada", // nieuw, nalezen
    'w.chemischafval': "qashinka kiimikada (qashin khatar ah, sida rinji iyo saliid)", // nieuw, nalezen
    'w.spuitbus': "gasacadda la buufiyo", // nieuw, nalezen
    'w.asbest': "asbestoska (walax khatar ah oo ku jirta dhismayaasha duugga ah)", // nieuw, nalezen
    'w.lekken': "daadasho", // nieuw, nalezen
    'w.gevarensymbool': "astaanta khatarta (sawir khatar ka digaya)", // nieuw, nalezen
    'w.vat': "fuustada", // nieuw, nalezen
    's.hazardous.1': "Rinjiga dhig qashinka kiimikada.", // nieuw, nalezen
    's.hazardous.2': "Dhaladani way daadanaysaa. Ku qaad gacmo-gashiyo.", // nieuw, nalezen
    's.hazardous.3': "Asbestoska waa in si fiican loo baakadeeyo.", // nieuw, nalezen
    'c.hazardous.q': "Maxaa dhaladan ku jira?", // nieuw, nalezen
    'c.hazardous.a': "Ma garanayo. Dhinac dhig.", // nieuw, nalezen
    'c.hazardous': "Lama yaqaan? Ha furin, ha urin", // nieuw, nalezen
    'c.hazardous.b': "Qashinka kiimikada, sida rinjiga, saliidda, alaabta nadiifinta, baytariyada iyo gasacadaha la buufiyo, wuu gubi karaa, sumayn karaa ama qarxi karaa. Raadi astaamaha khatarta. Xiro gacmo-gashiyo iyo muraayadaha badbaadada. Waligaa ha furin dhalo si aad u uriso waxa ku jira, waligaana alaabo ha isku darin. Dhalo daadanaysa si toos ah u hay, oo geli saxan. Asbestoska waxaa la qaadan karaa oo keliya marka si fiican loo baakadeeyay: waligaa ha jebin, hana ka saarin baakadda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.hazardous.p': "Maxaa halkan ku jira?", // nieuw, nalezen
    'c.hazardous.s': "Naag ayaa keentay dhalo aan calaamad lahayn. Ur xooggan ayay leedahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hazardous.o1': "Gooni u dhig, oo u sheeg madaxaaga.", // nieuw, nalezen
    'c.hazardous.o2': "Fur, oo uri waxa ay tahay.", // nieuw, nalezen
    'c.hazardous.o3': "Ku shub fuustada rinjiga.", // nieuw, nalezen
    'c.hazardous.w': "Alaab aan la aqoon waxay la falgeli kartaa kuwa kale. Madaxaagu wuu og yahay meesha ay si ammaan ah u geli karto.", // nieuw, nalezen
    'l.baler': "Mashiinka isku cadaadiya", // nieuw, nalezen
    'w.balenpers': "mashiinka isku cadaadiya (mashiin qashinka u cadaadiya baloog)", // nieuw, nalezen
    'w.baal': "baloogga (gabal warqad ama caag ah oo la cadaadiyay)", // nieuw, nalezen
    'w.persen': "cadaadin", // nieuw, nalezen
    'w.vastlopen': "ku dhegid, xannibmid", // nieuw, nalezen
    'w.binddraad': "siligga xiridda", // nieuw, nalezen
    'w.vulopening': "afka buuxinta (meesha qashinku galo)", // nieuw, nalezen
    's.baler.1': "Mashiinka cadaadisku wuu xannibmay. Riix badhanka joojinta degdegga.", // nieuw, nalezen
    's.baler.2': "Waligaa gacanta ha gelin mashiinka cadaadiska.", // nieuw, nalezen
    's.baler.3': "Baloogga si fiican u xir.", // nieuw, nalezen
    'c.baler.q': "Mashiinka cadaadisku wuu xannibmayaa. Ma eegi karaa?", // nieuw, nalezen
    'c.baler.a': "Maya. Marka hore korontada ayaa la damiyaa.", // nieuw, nalezen
    'c.baler': "Waligaa gacanta ha gelin mashiinka isku cadaadiya", // nieuw, nalezen
    'c.baler.b': "Mashiinka isku cadaadiyaa wuxuu ku cadaadiyaa xoog aad u weyn. Isticmaal oo keliya marka aad baratay sida loo isticmaalo. Waligaa gacan, cudud ama cag ha gelin afka buuxinta, xitaa marka mashiinku u eg yahay mid istaagan. Ma xannibmay? Riix badhanka joojinta degdegga, dami oo hubi inaan qofna shidi karin: raac tallaabooyinka shirkaddaada. Markaas oo keliya eeg. Waligaa ha fuulin mashiinka isku cadaadiya ama konteenar. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.baler.p': "Mashiinka cadaadisku wuu xannibmay.", // nieuw, nalezen
    'c.baler.s': "Gabal kartoon ah ayaa ku dhegay afka. Mashiinku wuu istaagan yahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.baler.o1': "Si buuxda u dami, kadib ka saar.", // nieuw, nalezen
    'c.baler.o2': "Gacantaada si dhakhso ah ugu soo saar.", // nieuw, nalezen
    'c.baler.o3': "Cagtaada ku riix oo geli.", // nieuw, nalezen
    'c.baler.w': "Mashiin istaagan mar kale wuu bilaaban karaa. Korontada oo aan la damin, gacantaadu waxay ku jirtaa khatar.", // nieuw, nalezen
    'l.shovel': "Shooladda goobta", // nieuw, nalezen
    'w.shovel': "shooladda (mashiin weyn oo hore ka leh baaldi)", // nieuw, nalezen
    'w.zwaailamp': "nalka wareega (nal oranji ah oo mashiinka korkiisa ku yaal)", // nieuw, nalezen
    'w.bunker': "qaybta qashinka (meel weyn oo shub ah oo hal nooc qashin ah)", // nieuw, nalezen
    'w.looppad': "jidka lugta (jid dadka oo keliya loogu talagalay)", // nieuw, nalezen
    'w.toeteren': "hoonka garaacid", // nieuw, nalezen
    'w.opscheppen': "majarafadayn (kor u qaadid)", // nieuw, nalezen
    's.shovel.1': "Jidka lugta ku joog.", // nieuw, nalezen
    's.shovel.2': "Shooladdu dib ayay u socotaa. Taxaddar!", // nieuw, nalezen
    's.shovel.3': "Nalka wareegu wuu shidan yahay. Mashiinku wuu dhaqaaqayaa.", // nieuw, nalezen
    'c.shovel.q': "Shooladda agteeda ma dhaafi karaa?", // nieuw, nalezen
    'c.shovel.a': "Oo keliya haddii darawalku ku arko.", // nieuw, nalezen
    'c.shovel': "Jidka shooladda ka bax", // nieuw, nalezen
    'c.shovel.b': "Shooladdu way weyn tahay, darawalkeeduna wax yar ayuu agagaarkeeda ka arkaa, gaar ahaan gadaasheeda. Sidaas darteed ku joog jidadka lugta, oo xiro dharkaaga iftiinka leh. Waligaa ha marin mashiin dhaqaaqaya gadaashiisa. Ma rabtaa inaad dhaafto? Sug ilaa darawalku ku arko oo calaamad ku siiyo. Nalka wareegu wuxuu ka dhigan yahay: mashiinkani wuu shaqaynayaa. Booqdayaasha meel fog ka hay. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.shovel.p': "Ma i aragtay?", // nieuw, nalezen
    'c.shovel.s': "Waa inaad dhaafto shoolad shaqaynaysa. Darawalku dhinaca kale ayuu eegayaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.shovel.o1': "Sug ilaa uu ku arko.", // nieuw, nalezen
    'c.shovel.o2': "Si dhakhso ah u dhaaf.", // nieuw, nalezen
    'c.shovel.o3': "Mashiinka gadaashiisa mar.", // nieuw, nalezen
    'c.shovel.w': "Darawal aan ku arkin kuuma istaagi karo.", // nieuw, nalezen
    'u.toddlers': "Carruurta", // nieuw, nalezen
    'l.nappies': "Beddelidda xafaayadaha", // nieuw, nalezen
    'w.luier': "xafaayadda (bambeerka)", // nieuw, nalezen
    'w.verschonen': "beddelid (xafaayad)", // nieuw, nalezen
    'w.commode': "miiska beddelidda", // nieuw, nalezen
    'w.billendoekje': "masaxaadda ilmaha (maro qoyan)", // nieuw, nalezen
    'w.potje': "weelka saxarada ilmaha (budo)", // nieuw, nalezen
    'w.zindelijk': "musqusha bartay (ilmuhu musqusha wuu isticmaali karaa)", // nieuw, nalezen
    's.nappies.1': "Sem ayaan beddelayaa.", // nieuw, nalezen
    's.nappies.2': "Gacmahaaga dhaq kadib markaad xafaayad beddesho.", // nieuw, nalezen
    's.nappies.3': "Waligaa ilmo keligiis ha kaga tagin miiska beddelidda.", // nieuw, nalezen
    'c.nappies.q': "Goormaad beddeshay Noor?", // nieuw, nalezen
    'c.nappies.a': "Tobanka. App-ka ayay ku qoran tahay.", // nieuw, nalezen
    'c.nappies': "Hal gacan ilmaha ku hay", // nieuw, nalezen
    'c.nappies.b': "Wax walba diyaari ka hor intaadan ilmo saarin miiska beddelidda: xafaayad nadiif ah, masaxaado iyo dhar. Kadib mar walba hal gacan ilmaha ku hay. Waligaa ha ka tagin, xitaa hal ilbiriqsi. Gacmahaaga dhaq beddelid kasta kadib, oo miiska nadiifi. Qor goorta aad xafaayadda beddeshay, si waalidku u ogaadaan. Ma aragtaa finan ama nabar? Qor, oo u sheeg saaxiib shaqo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.nappies.p': "Hadda ayaan beddelayaa.", // nieuw, nalezen
    'c.nappies.s': "Ilmo yar ayaad beddelaysaa. Waad ilowday masaxaadaha; waxay yaalaan qolka dhinaciisa kale. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.nappies.o1': "Ilmaha kaxee.", // nieuw, nalezen
    'c.nappies.o2': "Si dhakhso ah u keen: waa dhow yihiin.", // nieuw, nalezen
    'c.nappies.o3': "Ilmaha ka tag, oo u dhawaaq.", // nieuw, nalezen
    'c.nappies.w': "Ilmo yar wuxuu ka rogman karaa miiska beddelidda hal ilbiriqsi. Waligaa ilmo keligiis ha kaga tagin halkaas korkeeda.", // nieuw, nalezen
    'l.mealtime': "Cunidda iyo cabbidda", // nieuw, nalezen
    'w.fles': "dhalada caanaha (ilmo yar)", // nieuw, nalezen
    'w.slabbetje': "maro-laabeedka (maro ilmaha laabta loo xiro marka uu wax cunayo)", // nieuw, nalezen
    'w.beker': "koobka (gacan leh)", // nieuw, nalezen
    'w.kinderstoel': "kursiga dheer ee ilmaha", // nieuw, nalezen
    'w.fruithap': "miraha la shiiday", // nieuw, nalezen
    'w.boertje': "daacada (hawada ilmuhu afka ka soo saaro)", // nieuw, nalezen
    's.mealtime.1': "Gacmahaaga dhaq ka hor cuntada.", // nieuw, nalezen
    's.mealtime.2': "Lisa sii dhaladeeda laba iyo tobanka.", // nieuw, nalezen
    's.mealtime.3': "Qof walba miiska ayuu fadhiyaa.", // nieuw, nalezen
    'c.mealtime.q': "Daan buskud ma qaadan karaa?", // nieuw, nalezen
    'c.mealtime.a': "Maya, xasaasiyad ayuu qabaa. Eeg liiska.", // nieuw, nalezen
    'c.mealtime': "Hubi liiska ka hor intaadan cunto bixin", // nieuw, nalezen
    'c.mealtime.b': "Ka hor intaadan ilmo siin cunto ama cabbitaan, hubi liiska: carruurta qaarkood xasaasiyad ayay qabaan, qaar kalena ma cuni karaan cunto gaar ah caafimaadkooda ama diintooda darteed. Gacmahaaga iyo gacmaha carruurta dhaq ka hor cunidda. Carruurta fadhiisi inta ay wax cunayaan oo cabbayaan, waligood ha socon hana ordin. Carruurta yaryar cuntada u jar yar, sida canabka oo gabalo loo jaro. Waligaa ilmo ha siin wax ilmo kale gurigiisa laga keenay. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.mealtime.p': "Tan ma cuni karaa?", // nieuw, nalezen
    'c.mealtime.s': "Ilmo ayaa u ooyaya buskud. Ilmahan si fiican uma taqaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.mealtime.o1': "Marka hore hubi liiska.", // nieuw, nalezen
    'c.mealtime.o2': "Sii: waa buskud uun.", // nieuw, nalezen
    'c.mealtime.o3': "Sii badh buskud.", // nieuw, nalezen
    'c.mealtime.w': "Buskud waxaa ku jiri kara loos, caano ama ukun. Ilmo xasaasiyad qaba, taasi aad bay khatar ugu noqon kartaa.", // nieuw, nalezen
    'l.naptime': "Hurdada", // nieuw, nalezen
    'w.bedje': "sariirta ilmaha (sariir yar oo ilmo yar)", // nieuw, nalezen
    'w.slaapkamer': "qolka hurdada", // nieuw, nalezen
    'w.knuffel': "caruusadda jilicsan", // nieuw, nalezen
    'w.speen': "nuugaha (ibta been abuurka ah)", // nieuw, nalezen
    'w.babyfoon': "dhegeysiga ilmaha (qalab aad ku maqasho ilmaha)", // nieuw, nalezen
    'w.slaapzak': "kiishka hurdada ee ilmaha", // nieuw, nalezen
    's.naptime.1': "Ilmaha dhabarka u seexi.", // nieuw, nalezen
    's.naptime.2': "Inta badan ayaan qolka hurdada eegaa.", // nieuw, nalezen
    's.naptime.3': "Waa tan caruusaddaada. Si fiican u seexo.", // nieuw, nalezen
    'c.naptime.q': "Mila ma seexatay?", // nieuw, nalezen
    'c.naptime.a': "Haa, tan iyo saacadda kowaad. Dhowaan mar kale ayaan eegayaa.", // nieuw, nalezen
    'c.naptime': "Ilmaha yaryar dhabarka ayay u seexdaan", // nieuw, nalezen
    'c.naptime.b': "Ilmo yar wuxuu si ugu ammaan badan u seexdaa dhabarkiisa, kiishka hurdada dhexdiisa, sariirtiisa gaarka ah. Barkin ma jiro, buste dabacsan ma jiro, caruusado waaweyna sariirta kuma jiraan. Qolka qabow oo hawo fiican ku hay. Carruurta hurudda inta badan hubi: eeg oo dhegeyso, xitaa marka dhegeysiga ilmuhu shidan yahay. Waalid ma kaa codsaday inaad ilmihiisa u seexiso si kale? Marka hore u sheeg madaxaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.naptime.p': "Waan aadayaa inaan qolka hurdada eego.", // nieuw, nalezen
    'c.naptime.s': "Ilmo yar ayaa ku seexday caloosha sariirtiisa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.naptime.o1': "Si tartiib ah dhabarka ugu rog.", // nieuw, nalezen
    'c.naptime.o2': "Iska daa ha seexdo: hadda wuu hurdaa.", // nieuw, nalezen
    'c.naptime.o3': "Barkin agtiisa dhig.", // nieuw, nalezen
    'c.naptime.w': "Dhabarkiisa, ilmo yar si xor ah ayuu u neefsan karaa. Barkin wejigiisa ayay dabooli kartaa.", // nieuw, nalezen
    'l.playtime': "Ciyaarta", // nieuw, nalezen
    'w.spelen': "ciyaarid", // nieuw, nalezen
    'w.speelgoed': "alaabta ciyaarta", // nieuw, nalezen
    'w.zandbak': "sanduuqa ciidda (meel ciid ah oo carruurtu ku ciyaaraan)", // nieuw, nalezen
    'w.glijbaan': "siibiska (meel carruurtu ka siibtaan)", // nieuw, nalezen
    'w.puzzel': "halxiraalaha (ciyaar gabalo la isku dhejiyo)", // nieuw, nalezen
    'w.buitenspelen': "bannaanka ku ciyaarid", // nieuw, nalezen
    's.playtime.1': "Waxaan u baxaynaa inaan bannaanka ku ciyaarno. Jaakadaha xirta!", // nieuw, nalezen
    's.playtime.2': "Alaabta ciyaarta isku urursada.", // nieuw, nalezen
    's.playtime.3': "Siibiska hal ilmo mar.", // nieuw, nalezen
    'c.playtime.q': "Halxiraalaha ma ku ciyaari karaa?", // nieuw, nalezen
    'c.playtime.a': "Haa, miiska. Kadib waad isku urursanaysaa.", // nieuw, nalezen
    'c.playtime': "Si ammaan ah u ciyaar: eeg, tiri, hubi", // nieuw, nalezen
    'c.playtime.b': "Carruurtu waxay wax ku bartaan ciyaarta, sidaas darteed u oggolow inay waxyaabo isku dayaan. Laakiin mar walba indhahaaga ku hay, xitaa bannaanka. Tiri carruurta marka aad bannaanka u baxdaan iyo marka aad gudaha dib ugu soo gashaan. Marka hore hubi goobta ciyaarta: irriddu ma xiran tahay, dhalo ama qashin ma jiraa? Alaabta ciyaarta ee leh qaybo yaryar uma aha carruurta ka yar saddex sano: way ku ceeshoon karaan. Alaabta ciyaarta ee afka la geliyo inta badan nadiifi. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.playtime.p': "Qof walba ma joogaa?", // nieuw, nalezen
    'c.playtime.s': "Goobta ciyaarta ayaad gudaha uga soo gashay. Waxaad tirisay hal ilmo oo yar. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.playtime.o1': "U sheeg saaxiib shaqo, oo isla markiiba raadi.", // nieuw, nalezen
    'c.playtime.o2': "Sug: ilmuhu iskiis ayuu u soo geli doonaa.", // nieuw, nalezen
    'c.playtime.o3': "Berri mar kale tiri.", // nieuw, nalezen
    'c.playtime.w': "Ilmo keligiis bannaanka jooga wuu dhaawacmi karaa ama wuu tagi karaa. Daqiiqad kastaa waa muhiim.", // nieuw, nalezen
    'u.daycare': "Waalidka, ammaanka iyo kooxda", // nieuw, nalezen
    'l.pickup': "Keenidda iyo qaadidda", // nieuw, nalezen
    'w.ouder': "waalidka", // nieuw, nalezen
    'w.afscheid': "nabadgelyada (sagootinta)", // nieuw, nalezen
    'w.oppas': "ilaaliyaha carruurta (qof carruurta haya)", // nieuw, nalezen
    'w.schriftje': "buugga yar (qoraallada u dhexeeya waalidka iyo shaqaalaha)", // nieuw, nalezen
    'w.ouderapp': "app-ka waalidka (sawirro iyo fariimo waalidka loo diro)", // nieuw, nalezen
    'w.wennen': "la qabsasho (meel cusub oo la baro)", // nieuw, nalezen
    's.pickup.1': "Buugga yar ayaan ku qorayaa.", // nieuw, nalezen
    's.pickup.2': "Aabbe nabadgelyo u dheh.", // nieuw, nalezen
    's.pickup.3': "Sawir ayaan gelinayaa app-ka waalidka.", // nieuw, nalezen
    'c.pickup.q': "Yaa maanta qaadaya Sem?", // nieuw, nalezen
    'c.pickup.a': "Ayeeyadiis. Liiska ayay ku jirtaa.", // nieuw, nalezen
    'c.pickup': "Oo keliya dadka liiska ku jira", // nieuw, nalezen
    'c.pickup.b': "Ilmo u dhiib oo keliya waalid, ama qof waalidku kuu sheegeen. Qofka ma taqaanid? Weydii cidda uu yahay, eeg aqoonsigiisa, oo la hubi waalidka ama madaxaaga. Marka la qaadayo, u sheeg waalidka sida maalintu u dhacday: cunidda, hurdada, ciyaarta, iyo wax kasta oo gaar ah. Waxyaabaha muhiimka ah ku qor buugga yar ama app-ka. Carruurta kale kala hadal oo keliya waalidkooda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.pickup.p': "Yaad tahay? Waalidka ayaan wacayaa.", // nieuw, nalezen
    'c.pickup.s': "Nin aanad aqoon ayaa u yimid inuu qaado Sem. Liiska kuma jiro. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.pickup.o1': "Wac waalidka ka hor inta Sem uusan tagin.", // nieuw, nalezen
    'c.pickup.o2': "Sem u oggolow inuu tago: magaca wuu yaqaan.", // nieuw, nalezen
    'c.pickup.o3': "Sem weydii inuu isaga yaqaan.", // nieuw, nalezen
    'c.pickup.w': "Adiga ayaa mas'uul ka ah ilmaha ilaa qof ay waalidku doorteen uu la wareego.", // nieuw, nalezen
    'l.childsafety': "Ammaanka kooxda", // nieuw, nalezen
    'w.traphekje': "irridda jaranjarada", // nieuw, nalezen
    'w.vingerstrip': "ilaaliyaha farta (albaabka ku yaal, si aysan faruhu ugu qabsoomin)", // nieuw, nalezen
    'w.verslikken': "ceeshoon (cuntada ayaa jid khaldan gashay)", // nieuw, nalezen
    'w.bult': "barara (madaxa)", // nieuw, nalezen
    'w.schaafwond': "xoqan (maqaarka ayaa xoqmay)", // nieuw, nalezen
    'w.toezicht': "ilaalinta (carruurta ayaad eegaysaa)", // nieuw, nalezen
    's.childsafety.1': "Mar walba xir irridda jaranjarada.", // nieuw, nalezen
    's.childsafety.2': "Baraf yar ayaan saarayaa bararka.", // nieuw, nalezen
    's.childsafety.3': "Sem wuu ceeshoonayaa. Waan caawinayaa.", // nieuw, nalezen
    'c.childsafety.q': "Bo ma dhacday?", // nieuw, nalezen
    'c.childsafety.a': "Haa, barar ayay leedahay. Hooyadeed ayaan wacayaa.", // nieuw, nalezen
    'c.childsafety': "Agagaarka ku eeg indhaha ilmo", // nieuw, nalezen
    'c.childsafety.b': "Carruurta yaryar wax walba afka ayay geliyaan oo wax walba way fuulaan. Sidaas darteed irridda jaranjarada xiran ku hay, alaabta nadiifinta iyo daawooyinka meel aysan gaari karin dhig, cabbitaannada kululna carruurta ka fogee. Qolka maalin kasta hubi. Ilmo ma dhaawacmay? Sii gargaarka degdegga ah, ilmaha qalbi qaboji, u sheeg waalidka, oo qor. Ma culus tahay? Wac 112. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.childsafety.p': "Irridda jaranjaradu waa furan tahay.", // nieuw, nalezen
    'c.childsafety.s': "Kafeegaagii kulul waxaad dhigtay miis hooseeya. Ilmo yar ayaa u socda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.childsafety.o1': "Kafeega isla markiiba meel sare dhig.", // nieuw, nalezen
    'c.childsafety.o2': "U sheeg ilmaha yar inuusan taaban.", // nieuw, nalezen
    'c.childsafety.o3': "Si dhakhso ah u cab.", // nieuw, nalezen
    'c.childsafety.w': "Kafeeg kulul ilmo yar si xun ayuu u gubi karaa. Meel aysan gaari karin waa meesha keliya ee ammaanka ah.", // nieuw, nalezen
    'l.sickchild': "Ilmo xanuunsan iyo xasaasiyadda", // nieuw, nalezen
    'w.huiduitslag': "finanka (barro cas oo maqaarka ku yaal)", // nieuw, nalezen
    'w.diarree': "shubanka", // nieuw, nalezen
    'w.overgeven': "matagid", // nieuw, nalezen
    'w.allergielijst': "liiska xasaasiyadda", // nieuw, nalezen
    'w.adrenalinepen': "qalinka adrenaline-ka (qalin daawo ah oo xasaasiyad xooggan loogu talagalay)", // nieuw, nalezen
    'w.temperaturen': "cabbirid heerkulka jidhka", // nieuw, nalezen
    's.sickchild.1': "Sem qandho ayuu qabaa. Aabbihiis ayaan wacayaa.", // nieuw, nalezen
    's.sickchild.2': "Eeg liiska xasaasiyadda ka hor cuntada.", // nieuw, nalezen
    's.sickchild.3': "Waligaa daawo ha bixin oggolaansho la'aan.", // nieuw, nalezen
    'c.sickchild.q': "Jip sidee buu yahay?", // nieuw, nalezen
    'c.sickchild.a': "Aad buu u kulul yahay. Heerkulkiisa ayaan cabbirayaa.", // nieuw, nalezen
    'c.sickchild': "Ilmo xanuunsan: sheeg, ha qiyaasin", // nieuw, nalezen
    'c.sickchild.b': "Fiiri sida ay carruurtu u yihiin. Ilmo ma kulul yahay, ma aad u daallan yahay, ma matagayaa, mise finan ayuu leeyahay? Cabbir heerkulkiisa, u sheeg saaxiibkaa shaqada, oo wac waalidka. Daawo bixi oo keliya oggolaansho qoraal ah oo waalidka ka yimid, oo qor waxa aad siisay iyo goorta. Ogow carruurta xasaasiyadda qaba, iyo meesha daawadoodu ku jirto. Ilmo xasaasiyad xooggan ku dhacday: sii qalinka adrenaline-ka haddii aad baratay, oo wac 112. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.sickchild.p': "Ilmahaagu wuu xanuunsan yahay. Ma iman kartaa inaad qaaddo?", // nieuw, nalezen
    'c.sickchild.s': "Hooyo ayaa tiri: “Sii daawada qandhada saacadda labaad.” Foom ma jiro. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.sickchild.o1': "Marka hore ka codso inay foomka saxiixdo.", // nieuw, nalezen
    'c.sickchild.o2': "Sii: hooyada ayaa codsatay.", // nieuw, nalezen
    'c.sickchild.o3': "Sii badh, si loo badbaado.", // nieuw, nalezen
    'c.sickchild.w': "Oggolaansho qoraal ah la'aan looma oggola inaad daawo bixiso. Foomku wuxuu ilaaliyaa ilmaha iyo adiga.", // nieuw, nalezen
    'l.grouprules': "Kooxda iyo xeerarka", // nieuw, nalezen
    'w.pedagogischmedewerker': "shaqaalaha xannaanada carruurta", // nieuw, nalezen
    'w.mentor': "la-taliyaha (shaqaalaha si dhow ula socda hal ilmo)", // nieuw, nalezen
    'w.vierogenprincipe': "xeerka afarta il (qof weyn oo kale mar walba wuu ku arki karaa ama ku maqli karaa)", // nieuw, nalezen
    'w.observeren': "daawasho (si taxaddar leh u eeg, oo qor)", // nieuw, nalezen
    'w.peuter': "ilmaha yar (ilmo laba ama saddex jir ah)", // nieuw, nalezen
    'w.groep': "kooxda (carruurta maalin kasta wada jooga)", // nieuw, nalezen
    's.grouprules.1': "Waxaan ahay la-taliyaha Lisa.", // nieuw, nalezen
    's.grouprules.2': "Saaxiib shaqo ayaa mar walba na arki kara ama na maqli kara.", // nieuw, nalezen
    's.grouprules.3': "Daan ayaan ka welwelsanahay.", // nieuw, nalezen
    'c.grouprules.q': "Kooxda keligay bannaanka ma ula bixi karaa?", // nieuw, nalezen
    'c.grouprules.a': "Haa, laakiin marka hore u sheeg saaxiib shaqo.", // nieuw, nalezen
    'c.grouprules': "Waligaa keligaa ha noqon meel aan lagu arkin", // nieuw, nalezen
    'c.grouprules.b': "Xannaanada carruurta, qof weyn oo kale waa inuu mar walba ku arki karaa ama ku maqli karaa marka aad carruurta la joogto. Taasi waxay ilaalisaa carruurta iyo adiga. Ilmo kasta wuxuu leeyahay la-taliye: hal shaqaale oo si dhow ula socda ilmahaas oo la hadla waalidka. Ma ka welwelsan tahay ilmo gurigiisa, tusaale ahaan nabarro madow ama cabsi? Ilmaha su'aalo badan ha weydiin: u sheeg madaxaaga, oo yaqaan tallaabooyinka. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.grouprules.p': "Ilmahan ayaan ka welwelsanahay.", // nieuw, nalezen
    'c.grouprules.s': "Mar kale ayaad ilmo ku aragtaa nabarro madow. Ilmuhu wuu aamusan yahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.grouprules.o1': "Isla maalintaas u sheeg madaxaaga.", // nieuw, nalezen
    'c.grouprules.o2': "Ilmaha weydii su'aalo badan.", // nieuw, nalezen
    'c.grouprules.o3': "Wac waalidka oo weydii sababta.", // nieuw, nalezen
    'c.grouprules.w': "Madaxaagu wuu yaqaan tallaabooyinka marka laga welwelo ilmo. Su'aalo badan ilmaha way cabsiin karaan.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "Musqulaha, qolalka hoteelka iyo mashiinnada", // nieuw, nalezen
    'l.sanitary': "Musqulaha iyo saxannada gacmaha lagu dhaqo", // nieuw, nalezen
    'w.wastafel': "saxanka gacmaha lagu dhaqo (saxanka biyaha ee qubeyska ama musqusha)", // nieuw, nalezen
    'w.toiletpot': "weelka musqusha (kursiga musqusha)", // nieuw, nalezen
    'w.toiletborstel': "burushka musqusha", // nieuw, nalezen
    'w.urinoir': "musqusha kaadida ee ragga", // nieuw, nalezen
    'w.kalk': "nuuradda biyaha (wax cad oo biyuhu ka tagaan tuubbooyinka iyo dhagxaanta)", // nieuw, nalezen
    'w.ontstopper': "furaha xannibaadda (qalab loogu talagalay musqul ama tuubbo xiran)", // nieuw, nalezen
    's.sanitary.1': "Marka hore waxaan nadiifinayaa saxannada gacmaha, kadib musqulaha.", // nieuw, nalezen
    's.sanitary.2': "Tuubbada biyaha waxaa ku yaal nuurad.", // nieuw, nalezen
    's.sanitary.3': "Musqusha dabaqa koowaad way xiran tahay.", // nieuw, nalezen
    'c.sanitary.q': "Musqulaha ma la dhammeeyay?", // nieuw, nalezen
    'c.sanitary.a': "Weli maya. Hal musqul ayaa xiran.", // nieuw, nalezen
    'c.sanitary': "Laga bilaabo nadiif ilaa wasakh", // nieuw, nalezen
    'c.sanitary.b': "Qolka musqusha waxaad ka shaqaysaa nadiif ilaa wasakh: marka hore muraayadaha iyo saxannada gacmaha, kadib musqulaha, dhulkana ugu dambayn. Sidaas ayaadan wasakhda musqusha ugu qaadin saxanka gacmaha. Isticmaal marada midabka musqusha leh, oo xiro gacmo-gashi. Burushka musqushana nadiifi, oo u daa inuu qallalo. Musqul ma xiran tahay ama ma jaban tahay? Albaabka calaamad ku dheji, oo soo sheeg. Gacmahaaga dhaq marka aad dhammayso, xataa haddii aad gacmo-gashi xirnayd. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.sanitary.p': "Musqushan way xiran tahay. Calaamad ayaan ku dhejinayaa.", // nieuw, nalezen
    'c.sanitary.s': "Waxaad nadiifisay musqul. Hadda waxaa xiga saxanka gacmaha. Weli waxaad haysaa isla maradii. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.sanitary.o1': "Qaado maro leh midabka saxanka gacmaha.", // nieuw, nalezen
    'c.sanitary.o2': "Isticmaal isla maradii: weli way nadiif u muuqataa.", // nieuw, nalezen
    'c.sanitary.o3': "Marka hore marada ku biyo-raaci musqusha.", // nieuw, nalezen
    'c.sanitary.w': "Jeermiska musqusha ayaa marada ku jira, xataa marka aadan arkin. Maro cusub ayaa ka fogaynaysa gacmaha iyo wejiyada.", // nieuw, nalezen
    'l.hotelroom': "Qolalka hoteelka", // nieuw, nalezen
    'w.laken': "go'a sariirta (sariirta dushiisa)", // nieuw, nalezen
    'w.kussensloop': "dabool barkinta", // nieuw, nalezen
    'w.dekbed': "buste (go' qaro weyn oo sariirta)", // nieuw, nalezen
    'w.handdoek': "shukumaanka", // nieuw, nalezen
    'w.kamerlijst': "liiska qolalka (qolalka ay tahay inaad maanta samayso)", // nieuw, nalezen
    'w.opmaken': "goglid (sariir)", // nieuw, nalezen
    's.hotelroom.1': "Sariirta waxaan ku goglayaa go'yaal nadiif ah.", // nieuw, nalezen
    's.hotelroom.2': "Laba shukumaan oo nadiif ah dhig qubeyska.", // nieuw, nalezen
    's.hotelroom.3': "Qolka laba iyo tobnaad waa diyaar. Waxaan u socdaa saddex iyo tobnaad.", // nieuw, nalezen
    'c.hotelroom.q': "Immisa qol ayaa kuu haray?", // nieuw, nalezen
    'c.hotelroom.a': "Afar kale. Kadib liiskaygu waa dhammaanayaa.", // nieuw, nalezen
    'c.hotelroom': "Garaac, sheeg cidda aad tahay, oo sug", // nieuw, nalezen
    'c.hotelroom.b': "Ka hor intaadan gelin qol hoteel, garaac oo sheeg cidda aad tahay, tusaale ahaan “Housekeeping!”. Wax yar sug, oo mar kale garaac. Albaabka ma ku dheggan tahay calaamadda “Niet storen”? Markaas ha gelin, oo ku qor liiska qolalkaaga. Martida ma joogtaa qolka? Weydii inaad hadda nadiifin karto, ama dib u soo noqo. Alaabta martida meesha ay taallo ayay joogaysaa. Marti ma wax ayay iska illowday? U gee xafiiska soo dhaweynta. Waligaa waxba ha qaadan naftaada, xataa wax yar. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.hotelroom.p': "Subax wanaagsan. Qolka hadda ma nadiifin karaa?", // nieuw, nalezen
    'c.hotelroom.s': "Qol madhan waxaad ka heshay taleefan sariirta hoosteeda. Martidii way tagtay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hotelroom.o1': "U gee xafiiska soo dhaweynta.", // nieuw, nalezen
    'c.hotelroom.o2': "Hayso: martidu way tagtay.", // nieuw, nalezen
    'c.hotelroom.o3': "Uga tag sariirta hoosteeda.", // nieuw, nalezen
    'c.hotelroom.w': "Alaabta lumay weli waxaa iska leh martida. Xafiiska soo dhaweyntu way u celin karaan. Inaad haysato waa xatooyo, waxayna kaa lumin kartaa shaqadaada.", // nieuw, nalezen
    'l.dosing': "Alaabta nadiifinta iyo mashiinnada", // nieuw, nalezen
    'w.doseren': "qiyaasid (qaddarka saxda ah ee alaab isticmaalid)", // nieuw, nalezen
    'w.maatbeker': "koobka qiyaasta", // nieuw, nalezen
    'w.sprayflacon': "dhalada buufinta", // nieuw, nalezen
    'w.concentraat': "alaab xoog leh (alaab adag oo aad biyo ku qasto)", // nieuw, nalezen
    'w.veiligheidsblad': "warqadda badbaadada (waxay sheegtaa khatarta alaab iyo waxa la sameeyo)", // nieuw, nalezen
    'w.schrobzuigmachine': "mashiinka xoqa oo qallajiya (mashiin dhulka xoqa oo jiidaya biyaha)", // nieuw, nalezen
    's.dosing.1': "Hal dabool ku shub baaldi biyo ah.", // nieuw, nalezen
    's.dosing.2': "Marka hore akhri calaamadda.", // nieuw, nalezen
    's.dosing.3': "Mashiinka dhulka xoqa waa in lagu xiraa dabka.", // nieuw, nalezen
    'c.dosing.q': "Alaab yar oo dheeraad ah ku shub. Markaas way nadiifsanaanaysaa.", // nieuw, nalezen
    'c.dosing.a': "Maya, badan ma fiicna. Waxaan isticmaalayaa koobka qiyaasta.", // nieuw, nalezen
    'c.dosing': "Qaddarka saxda ah, wax ka badan maya", // nieuw, nalezen
    'c.dosing.b': "Alaab badan si fiican uma nadiifiso. Wax aad u badan waxay ka tagaan lakab dheg-dheg leh, sidaas dhulku si dhakhso ah ayuu u wasakhoobaa wuxuuna noqon karaa simbiriirix. Sidoo kale way u xun tahay maqaarkaaga iyo sambabadaada. Isticmaal koobka qiyaasta ama bamka qiyaasta, oo raac calaamadda. Marka hore biyaha, kadib alaabta: si aanay u firdhin. Ka hor intaadan isticmaalin mashiinka dhulka xoqa, hubi inuu dab ku jiro, oo biyo nadiif ah ay haantiisa ku jiraan. Dhammaadka, faaruji oo biyo-raaci haanta biyaha wasakhda ah. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.dosing.p': "Immisa ayay tahay inaan ku shubo?", // nieuw, nalezen
    'c.dosing.s': "Dhulku wuu sii dheg-dheg leeyahay. Saaxiib shaqo ayaa yiri: “Alaabta laba jibbaar ka dhig.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.dosing.o1': "Isticmaal qaddarka calaamadda ku qoran, oo weydii.", // nieuw, nalezen
    'c.dosing.o2': "Laba jibbaar isticmaal: markaas wuu nadiifsanaanayaa.", // nieuw, nalezen
    'c.dosing.o3': "Alaabta si toos ah dhulka ugu shub.", // nieuw, nalezen
    'c.dosing.w': "Dhul dheg-dheg leh badanaa wuxuu ka dhigan yahay alaab aad u badan, ma aha mid yar. Qaddarka saxda ah ayaa ugu fiican nadiifinta, waana kan ugu ammaansan.", // nieuw, nalezen
    'l.officenight': "Xafiisyada, subax hore ama habeen dambe", // nieuw, nalezen
    'w.toetsenbord': "kiiboorka", // nieuw, nalezen
    'w.papierbak': "weelka warqadaha (warqadaha duugga ah)", // nieuw, nalezen
    'w.lichtschakelaar': "badhanka nalka", // nieuw, nalezen
    'w.pantry': "jikada yar (jikada yar ee xafiiska)", // nieuw, nalezen
    'w.deurmat': "rooga albaabka (rooga albaabka laga soo galo)", // nieuw, nalezen
    'w.alleenwerken': "keligaa shaqayn (qof kale ma joogo dhismaha)", // nieuw, nalezen
    's.officenight.1': "Waxaan faaruqinayaa weelasha qashinka iyo weelka warqadaha.", // nieuw, nalezen
    's.officenight.2': "Ma taabto warqadaha miiska saaran.", // nieuw, nalezen
    's.officenight.3': "Nalka ayaan demiyaa marka aan dhammeeyo.", // nieuw, nalezen
    'c.officenight.q': "Caawa ma keligaa ayaad ka shaqaynaysaa dhismaha?", // nieuw, nalezen
    'c.officenight.a': "Haa. Fariin ayaan kuu soo dirayaa marka aan dhammeeyo.", // nieuw, nalezen
    'c.officenight': "Keligaa dhismaha", // nieuw, nalezen
    'c.officenight.b': "Subax hore ama habeen dambe badanaa keligaa ayaad xafiis nadiifisaa. Ogow waxa aad samaynayso haddii wax dhacaan: yaad wacaysaa, xaggeese ku yaal sanduuqa gargaarka degdegga ah? Taleefankaaga la jir. La heshiis madaxaaga ama saaxiib shaqo inaad fariin dirto marka aad bilowdo iyo marka aad dhammayso. Ha soo gelin qof aadan aqoon. Ha taaban warqadaha, shaashadaha ama kiiboorrada wax ka badan inta nadiifintu u baahan tahay, waligaana ha akhrin waxa ku qoran. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.officenight.p': "Waan dhammeeyay, hadda guriga ayaan u socdaa.", // nieuw, nalezen
    'c.officenight.s': "Habeenkii nin ayaa garaacaya albaabka muraayadda ah. Wuxuu leeyahay halkan ayuu ka shaqeeyaa, furihiisana wuu illaaway. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.officenight.o1': "Ha furin. Wac madaxaaga.", // nieuw, nalezen
    'c.officenight.o2': "Soo geli: wuxuu u eg yahay qof wanaagsan.", // nieuw, nalezen
    'c.officenight.o3': "Sii furahaaga.", // nieuw, nalezen
    'c.officenight.w': "Qof kasta wuxuu dhihi karaa halkaas ayuu ka shaqeeyaa. Madaxaagu wuu hubin karaa. Badbaadadaada iyo dhismuhu ayaa ka horreeya.", // nieuw, nalezen
    'u.cooking': "Jikada iyo adeegga", // nieuw, nalezen
    'l.knives': "Mindiyaha iyo jarista", // nieuw, nalezen
    'w.koksmes': "mindida shefka (mindi weyn oo jikada)", // nieuw, nalezen
    'w.dunschiller': "diirtaha khudradda", // nieuw, nalezen
    'w.schillen': "diirid", // nieuw, nalezen
    'w.hakken': "jajabin (aad u yar u jarid)", // nieuw, nalezen
    'w.raspen': "xoqid (rasp lagu xoqo)", // nieuw, nalezen
    'w.blokjes': "xabbadaha afargeeska ah (gabal yar oo afar gees leh)", // nieuw, nalezen
    's.knives.1': "Karootada u jar xabbado afargees ah.", // nieuw, nalezen
    's.knives.2': "Mindida ha dhigin saxanka weelka lagu dhaqo.", // nieuw, nalezen
    's.knives.3': "Kabsarka si yar u jajabi.", // nieuw, nalezen
    'c.knives.q': "Basasha ma jari kartaa?", // nieuw, nalezen
    'c.knives.a': "Haa, shef. Wareegyo mise xabbado afargees ah?", // nieuw, nalezen
    'c.knives': "Mindidu waa qalab, ma aha wax lagu ciyaaro", // nieuw, nalezen
    'c.knives.b': "Mindidaada af ha lahaato: mindi af la'aan ah si fudud ayay u siibataa. Ku jar loox aan dhaqaaqin: hoostiisa dhig maro qoyan. Farahaaga gudaha u qalloocin, sida ciddiyaha. Ku soco caarada oo hoos u jeedda, oo lugtaada u dhow, oo dheh “Mes!” marka aad qof ag marayso. Waligaa mindi ha dhigin saxan biyo ka buuxaan: qof ayaa qabsan kara isagoon arkin. Mindi ma dhacaysaa? Gadaal u dhaqaaq, ha qaban. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.knives.p': "Mindi! Gadaashaada ayaan marayaa.", // nieuw, nalezen
    'c.knives.s': "Wax ayaad jaraysaa. Mindidaadu waxay ka siibatay looxa oo way dhacaysaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.knives.o1': "Gadaal u dhaqaaq, oo u daa inay dhacdo.", // nieuw, nalezen
    'c.knives.o2': "Si dhakhso ah gacanta ugu qabo.", // nieuw, nalezen
    'c.knives.o3': "Cagtaada ku jooji.", // nieuw, nalezen
    'c.knives.w': "Mindi dhacaysa waxay si qoto dheer u jari kartaa gacantaada ama cagtaada. Mindi dhulka taal waxay u baahan tahay oo keliya in la dhaqo.", // nieuw, nalezen
    'l.rawcooked': "Ceeriin, karsan iyo xasaasiyadda", // nieuw, nalezen
    'w.rauw': "ceeriin (aan la karin)", // nieuw, nalezen
    'w.gaar': "bislaaday, karsan (diyaar u ah in la cuno)", // nieuw, nalezen
    'w.afdekken': "daboolid (dabool ama warqad foil ah)", // nieuw, nalezen
    'w.kleurcode': "calaamadda midabka (hal midab oo loox iyo mindi ah nooc kasta oo cunto ah)", // nieuw, nalezen
    'w.allergenenlijst': "liiska xasaasiyadda (wuxuu sheegaa waxa ku jira cunto kasta)", // nieuw, nalezen
    'w.glutenvrij': "gluten la'aan (aan lahayn gluten)", // nieuw, nalezen
    's.rawcooked.1': "Hilibka ceeriinka ah wuxuu galaa qaybta hoose ee qaboojiyaha.", // nieuw, nalezen
    's.rawcooked.2': "Digaagga ma bislaaday?", // nieuw, nalezen
    's.rawcooked.3': "Dabool weelasha ku jira qolka qaboojiyaha.", // nieuw, nalezen
    'c.rawcooked.q': "Suugadan ma gluten la'aan baa?", // nieuw, nalezen
    'c.rawcooked.a': "Si hubaal ah ma garanayo. Waxaan eegayaa liiska xasaasiyadda.", // nieuw, nalezen
    'c.rawcooked': "Ceeriin iyo diyaar waligood isma taabtaan", // nieuw, nalezen
    'c.rawcooked.b': "Hilibka, kalluunka iyo ukunta ceeriinka ah waxay sidi karaan jeermis. Ka fogee cuntada diyaarka u ah in la cuno. Isticmaal loox iyo mindi gaar ah, ama calaamadda midabka ee jikadaada, oo gacmahaaga dhaq kadib markaad taabato cunto ceeriin ah. Hilibka ceeriinka ah wuxuu galaa qaybta hoose ee qaboojiyaha, si aanu waxba ugu tifqin cuntada kale. Cuntada dabool oo taariikh ku qor. Xasaasiyadda, raad yar ayaa ku filnaan kara: isticmaal qalab nadiif ah. Makhaayaddu waa inay martida u sheegi kartaa xasaasiyadaha ku jira cunto: eeg liiska xasaasiyadda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.rawcooked.p': "Looxee loogu talagalay hilibka ceeriinka ah?", // nieuw, nalezen
    'c.rawcooked.s': "Waxaad jartay digaag ceeriin ah. Kadib waa inaad yaanyo u jartaa saladh. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.rawcooked.o1': "Qaado loox nadiif ah iyo mindi nadiif ah.", // nieuw, nalezen
    'c.rawcooked.o2': "Looxa maro ku masax, oo sii wad.", // nieuw, nalezen
    'c.rawcooked.o3': "Yaanyada ku jar isla looxii.", // nieuw, nalezen
    'c.rawcooked.w': "Jeermiska digaagga ceeriinka ah ayaa ku dhacaya yaanyada, saladhkana dib looma kariyo. Loox nadiif ah ayaa taas joojiya.", // nieuw, nalezen
    'l.pass': "Qolka weelka lagu dhaqo iyo miiska cuntada", // nieuw, nalezen
    'w.pass': "miiska cuntada (miiska ay saxannadu ku sugaan kabalyeeriga)", // nieuw, nalezen
    'w.bon': "warqadda dalabka (dalabka kabalyeeriga u diro jikada)", // nieuw, nalezen
    'w.spoelkeuken': "qolka weelka lagu dhaqo (halka weelka lagu dhaqo)", // nieuw, nalezen
    'w.vaatwaskorf': "dambiisha weelka (dambiisha mashiinka weelka dhaqa la gelinayo)", // nieuw, nalezen
    'w.voorspoelen': "horay u biyo-raacin (biyo-raacin ka hor mashiinka)", // nieuw, nalezen
    'w.warmhoudlamp': "nalka kululeeyaha (wuxuu saxannada ku hayaa kulayl)", // nieuw, nalezen
    's.pass.1': "Miiska siddeedaad wuxuu yaal miiska cuntada.", // nieuw, nalezen
    's.pass.2': "Laba warqadood oo dalab cusub ayaa soo galaya.", // nieuw, nalezen
    's.pass.3': "Marka hore saxannada biyo-raaci.", // nieuw, nalezen
    'c.pass.q': "Xaggee buu joogaa miiska laba iyo tobnaad?", // nieuw, nalezen
    'c.pass.a': "Wuxuu yaal miiska cuntada. Hadda ayaan keenayaa.", // nieuw, nalezen
    'c.pass': "Miiska cuntada: saxannadu ma sugaan", // nieuw, nalezen
    'c.pass.b': "Miiska cuntada jikadu waxay dhigtaa saxannada kabalyeeriga. Cuntada kulul waa inay si dhakhso ah u gaartaa martida, sidaas darteed saxanku muddo dheer kuma sugo miiska cuntada. Hubi warqadda dalabka: miiska saxda ah, cuntooyinka saxda ah, geesta saxanka oo nadiif ah? Markaas qaado. Qolka weelka lagu dhaqo: horay u biyo-raaci, wax walba dambiisha geli, mashiinkana u daa inta kale. Ha furin mashiinka inta uu shaqaynayo: uumiga aad ayuu u kulul yahay. Xiro gacmo-gashi marka aad mashiinka ku shubayso alaabtiisa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.pass.p': "Kani waa miiskee?", // nieuw, nalezen
    'c.pass.s': "Miiska cuntada waxaa yaal laba saxan. Ma ogid miiska ay u socdaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.pass.o1': "Eeg warqadda dalabka, ama weydii shefka.", // nieuw, nalezen
    'c.pass.o2': "U gee miis sugaya.", // nieuw, nalezen
    'c.pass.o3': "Sug ilaa qof kale qaado.", // nieuw, nalezen
    'c.pass.w': "Saxan miis khaldan gaara wuxuu ka dhigan yahay laba marti oo sugaya iyo cunto qabowday. Su'aal gaaban ayaa ka dhakhso badan.", // nieuw, nalezen
    'l.bill': "Cuntooyinka iyo biilka", // nieuw, nalezen
    'w.voorgerecht': "cuntada ugu horraysa (koorsada koowaad)", // nieuw, nalezen
    'w.hoofdgerecht': "cuntada ugu weyn", // nieuw, nalezen
    'w.nagerecht': "macmacaanka (cuntada ugu dambaysa)", // nieuw, nalezen
    'w.reservering': "ballanta miiska (miis horay loo qabsaday)", // nieuw, nalezen
    'w.pinapparaat': "mashiinka kaarka", // nieuw, nalezen
    'w.apartbetalen': "gooni u bixin (qof kasta wuxuu bixiyaa wixiisa)", // nieuw, nalezen
    's.bill.1': "Miis ma qabsateen?", // nieuw, nalezen
    's.bill.2': "Ma rabtaan inaad wada bixisaan mise gooni-gooni?", // nieuw, nalezen
    's.bill.3': "Cuntada ugu weyn hadda ma keenaa?", // nieuw, nalezen
    'c.bill.q': "Gooni-gooni ma u bixin karnaa?", // nieuw, nalezen
    'c.bill.a': "Haa, hubaal. Mashiinka kaarka ayaan keenayaa.", // nieuw, nalezen
    'c.bill': "Lacagta miiska: laba jeer tiri", // nieuw, nalezen
    'c.bill.b': "Marka martidu bixinayso, si cad u sheeg lacagta oo martida u tus mashiinka kaarka. Lacag caddaan ah, tiri marka aad hesho, oo mar kale tiri marka aad baaqiga bixinayso. Lacagtu waxay galaysaa khasnadda ama boorsada lacagta kabalyeeriga, waligeedna ma galayso jeebkaaga. Bakhshiishka (fooi) wuxuu galaa meesha shirkaddaadu sheegto, tusaale ahaan weelka bakhshiishka. Marti ma baxday iyadoon bixin? Ha daba orodin: u sheeg maamulahaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.bill.p': "Waa shan iyo afartan yuuro, fadlan.", // nieuw, nalezen
    'c.bill.s': "Marti ayaa ku siisay lacag oo tiri: “Waa sax.” Ma aadan tirin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.bill.o1': "Tiri inta martidu joogto.", // nieuw, nalezen
    'c.bill.o2': "Meel dhig, oo goor dambe tiri.", // nieuw, nalezen
    'c.bill.o3': "Martida aamin: dheh mahadsanid.", // nieuw, nalezen
    'c.bill.w': "Haddii aad goor dambe tirto oo lacag ka maqan tahay, qofna ma hubin karo waxa dhacay. Tirinta miiska agtiisa waxay ilaalisaa martida iyo adiga.", // nieuw, nalezen
    'u.carework': "Daryeelka jirka iyo daryeelka guriga", // nieuw, nalezen
    'l.washing': "Maydhid iyo labbisid", // nieuw, nalezen
    'w.washandje': "marada yar ee maydhashada (maro yar oo u eg gacmo-gashi)", // nieuw, nalezen
    'w.douchestoel': "kursiga qubeyska", // nieuw, nalezen
    'w.tandenpoetsen': "ilkaha cadaysiga", // nieuw, nalezen
    'w.kammen': "shanlayn", // nieuw, nalezen
    'w.scheren': "xiirid", // nieuw, nalezen
    'w.steunkous': "sharabaatada taageerada (sharabaad adag oo lugaha loogu talagalay)", // nieuw, nalezen
    's.washing.1': "Biyuhu ma ku filan yihiin kulaylka?", // nieuw, nalezen
    's.washing.2': "Ma rabtaa inaad adigu wejigaaga dhaqdo?", // nieuw, nalezen
    's.washing.3': "Hadda waxaan kuu xirayaa sharabaatada taageerada.", // nieuw, nalezen
    'c.washing.q': "Maanta ma rabo inaan qubaysto.", // nieuw, nalezen
    'c.washing.a': "Waa hagaag. Ma kaa caawiyaa saxanka gacmaha?", // nieuw, nalezen
    'c.washing': "Marka hore weydii, dabool, oo u daa inay doortaan", // nieuw, nalezen
    'c.washing.b': "In qof la maydho waa arrin aad u gaar ah. Sheeg waxa aad samaynayso, oo marka hore weydii. Qaybaha jirka ee aadan maydhaynin shukumaan ku dabool. Xir albaabka ama daaha. Macmiilka u daa inuu doorto: qubeys ama maydhid saxanka gacmaha, iyo dharka uu xiranayo. Macmiilka u daa inuu sameeyo waxa uu weli samayn karo, xataa haddii ay ka gaabis badan tahay. Macmiil ma yiri maya? Ha ku qasbin. Mar kale isku day goor dambe, wax kale u bandhig, oo u sheeg kalkaaliyaha caafimaadka.", // nieuw, nalezen
    'c.washing.p': "Maanta maxaad rabtaa inaad xiratid?", // nieuw, nalezen
    'c.washing.s': "Macmiil ayaa sheegtay inaanay rabin in maanta la maydho. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.washing.o1': "Aqbal, oo u sheeg kalkaaliyaha caafimaadka.", // nieuw, nalezen
    'c.washing.o2': "Si kastaba u maydh: liiska ayay ku jirtaa.", // nieuw, nalezen
    'c.washing.o3': "Ka bood, oo waxba ha odhan.", // nieuw, nalezen
    'c.washing.w': "Macmiilku wuu dhihi karaa maya. Daryeel lagu qasbo wuxuu dhaawacaa kalsoonida. Kalkaaliyaha caafimaadku wuu eegi karaa sababta, iyo waxa la samayn karo.", // nieuw, nalezen
    'l.observing': "Indha-indhayn iyo soo sheegid", // nieuw, nalezen
    'w.rapporteren': "warbixin qorid (qorid waxa aad aragtay, faylka daryeelka)", // nieuw, nalezen
    'w.zorgdossier': "faylka daryeelka (wax walba oo ku saabsan daryeelka hal macmiil)", // nieuw, nalezen
    'w.drukplek': "nabarka cadaadiska (meel casaan ah oo ka timaada jiif ama fadhi dheer)", // nieuw, nalezen
    'w.huid': "maqaarka", // nieuw, nalezen
    'w.plassen': "kaadin", // nieuw, nalezen
    'w.vochtlijst': "liiska cabbitaanka (inta macmiil cabbo)", // nieuw, nalezen
    's.observing.1': "Marwadu waxay ciribta ku leedahay meel casaan ah.", // nieuw, nalezen
    's.observing.2': "Ninku maanta wax yar ayuu cabbay.", // nieuw, nalezen
    's.observing.3': "Waxaan ku qorayaa faylka daryeelka.", // nieuw, nalezen
    'c.observing.q': "Ma jiraa wax gaar ah oo ku saabsan Marwo Jansen?", // nieuw, nalezen
    'c.observing.a': "Haa. Maanta ku dhowaad ma kaadin.", // nieuw, nalezen
    'c.observing': "Qor waxa aad aragto, ma aha waxa aad u malaynayso", // nieuw, nalezen
    'c.observing.b': "Waxa aad ku qorto faylka daryeelka, saaxiibka shaqada ee xiga ayaa akhriya. Qor xaqiiqooyin: waxa aad aragtay, maqashay ama cabbirtay, iyo goorta. Ma aha “Mevrouw is lastig”, balse “Mevrouw wilde niet eten en duwde het bord weg.” Isla maalinta qor, jumlado gaagaaban. Ma hubtid sida loogu qoro Af-Holandiis? U sheeg kalkaaliyaha caafimaadka, oo wada qora. Eeg maqaarka marka aad qof maydhayso: meel casaan ah oo aan baabbi'in waxay noqon kartaa bilowga nabar cadaadis. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.observing.p': "Waxaan qorayaa waxa aan arkay.", // nieuw, nalezen
    'c.observing.s': "Macmiil ayaa ka xanaaqday inta maydhashadu socotay. Waa inaad ku qortaa faylka. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.observing.o1': "Qor waxa ay tiri iyo waxa ay samaysay, iyo goorta.", // nieuw, nalezen
    'c.observing.o2': "Qor: “Marwo dhib badan, sida had iyo jeer.”", // nieuw, nalezen
    'c.observing.o3': "Waxba ha qorin: waa caadi.", // nieuw, nalezen
    'c.observing.w': "Xaqiiqooyinku waxay ka caawiyaan saaxiibka shaqada ee xiga iyo kalkaaliyaha caafimaadka inay wax qabtaan. Ra'yi ma sheego waxa dhacay.", // nieuw, nalezen
    'l.homecare': "Daryeelka guriga", // nieuw, nalezen
    'w.thuiszorg': "daryeelka guriga (daryeel lagu bixiyo guriga macmiilka)", // nieuw, nalezen
    'w.sleutelkluis': "sanduuqa furaha (sanduuq yar oo kood leh, furaha gurigana ku jiro)", // nieuw, nalezen
    'w.zorgplan': "qorshaha daryeelka (daryeelka macmiilku helayo, iyo sida)", // nieuw, nalezen
    'w.wijkverpleegkundige': "kalkaaliyaha xaafadda (kalkaaliyaha caafimaadka ee kooxda daryeelka guriga)", // nieuw, nalezen
    'w.mantelzorger': "daryeelaha qoyska (qaraabo ama saaxiib daryeela macmiilka)", // nieuw, nalezen
    'w.alarmknop': "badhanka gurmadka (macmiilku wuu xirtaa, si uu caawimaad ugu yeerto)", // nieuw, nalezen
    's.homecare.1': "Marka hore jarasta ayaan garaacaa. Kadib furaha ayaan qaataa.", // nieuw, nalezen
    's.homecare.2': "Maxaa ku qoran qorshaha daryeelka?", // nieuw, nalezen
    's.homecare.3': "Maanta rubuc saac ayaan daahayaa.", // nieuw, nalezen
    'c.homecare.q': "Yaa jooga?", // nieuw, nalezen
    'c.homecare.a': "Subax wanaagsan, waa daryeelka guriga. Ma soo geli karaa?", // nieuw, nalezen
    'c.homecare': "Marti ku ah guriga qof kale", // nieuw, nalezen
    'c.homecare.b': "Daryeelka guriga waxaad ka shaqaysaa guriga macmiilka. Halkaas marti ayaad ku tahay: garaac jarasta oo sheeg cidda aad tahay, xataa haddii aad furo haysato. Koodka sanduuqa furaha waa sir. Waligaa ha ku qorin meel ay dad kale arki karaan, had iyo jeerna dib u xir sanduuqa furaha. Raac qorshaha daryeelka: waxa aad samaynayso halkaas ayay ku qoran yihiin. Wax ma ka duwan yihiin, mise macmiilku albaabka ma furin? Si fudud ha iska tagin. Wac kooxdaada ama kalkaaliyaha xaafadda. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.homecare.p': "Subax wanaagsan, waxaan ka imid daryeelka guriga.", // nieuw, nalezen
    'c.homecare.s': "Jarasta ayaad garaacday. Macmiishu albaabka ma furin. Baabuurkeedu wuu joogaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.homecare.o1': "Wac kooxdaada, oo sug.", // nieuw, nalezen
    'c.homecare.o2': "U gudub macmiilka xiga.", // nieuw, nalezen
    'c.homecare.o3': "Mar kale garaac, kadib tag.", // nieuw, nalezen
    'c.homecare.w': "Macmiishu waxaa laga yaabaa inay dhacday, ama ay jirran tahay. Kooxdaadu way garanaysaa waxa la sameeyo, iyo cidda furo haysata.", // nieuw, nalezen
    'l.liftaids': "Qalabka qaadista iyo badbaadada", // nieuw, nalezen
    'w.glijlaken': "go'a simbiriirixa (go' siman oo macmiilka sariirta lagu dhaqaajiyo)", // nieuw, nalezen
    'w.tilband': "suunka wiishka (wuxuu galaa macmiilka hoostiisa, wiishka dadka awgiis)", // nieuw, nalezen
    'w.stalift': "wiishka istaagga (wuxuu macmiilka ka caawiyaa inuu istaago)", // nieuw, nalezen
    'w.werkhoogte': "joogga shaqada (sariirta oo dhererka sinahaaga ah)", // nieuw, nalezen
    'w.bedhek': "ilaalada sariirta (birta dhinaca sariirta)", // nieuw, nalezen
    'w.transferplank': "looxa wareejinta (loox lagu simbiriirixo sariirta ilaa kursi)", // nieuw, nalezen
    's.liftaids.1': "Sariirta dhig joogga shaqada.", // nieuw, nalezen
    's.liftaids.2': "Kursiga taayirada leh bareegga ma lagu xiray?", // nieuw, nalezen
    's.liftaids.3': "Tan laba qof ayaan ku samaynaynaa.", // nieuw, nalezen
    'c.liftaids.q': "Ma keligaa rogi kartaa marwada?", // nieuw, nalezen
    'c.liftaids.a': "Go'a simbiriirixa ayaan ku samayn karaa. Hadda ayaan keenayaa.", // nieuw, nalezen
    'c.liftaids': "Qalabka u daa qaadista", // nieuw, nalezen
    'c.liftaids.b': "Ka hor intaadan isticmaalin wiishka dadka, hubi: batariga ma dab ku jiraa, suunkuna ma cabbirka saxda ah yahay oo ma jeexna? Bareegga ku xir sariirta iyo kursiga taayirada leh. Sariirta keen dhererka sinahaaga, si aadan u foorarsan. Macmiilka u sheeg tallaabo kasta. Qorshaha daryeelka ayaa sheegaya qalabka uu macmiilku u baahan yahay. Qalab ma jaban yahay mise ma maqan yahay? Ha ka dhex shaqayn: soo sheeg, oo saaxiib shaqo ka codso inuu ku caawiyo. Laguma tusin sida qalab u shaqeeyo? Weydii ka hor intaadan bilaabin. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.liftaids.p': "Suunku wuu jaban yahay. Mid kale ayaan keenayaa.", // nieuw, nalezen
    'c.liftaids.s': "Waxaad rabtaa inaad isticmaasho wiishka dadka. Suunku wuxuu leeyahay jeex yar. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.liftaids.o1': "Qaado suun kale, oo soo sheeg jeexa.", // nieuw, nalezen
    'c.liftaids.o2': "Isticmaal: jeexu aad buu u yar yahay.", // nieuw, nalezen
    'c.liftaids.o3': "Suunka guntin ku xir.", // nieuw, nalezen
    'c.liftaids.w': "Jeex yar wuu ka weynaan karaa culayska qof hoostiisa. Ka dhicid wiishka dadka waxay si xun u dhaawici kartaa macmiilka.", // nieuw, nalezen
    'u.shopfloor': "Khasnadda, kaydka iyo xiridda", // nieuw, nalezen
    'l.returns': "Soo celinta iyo khasnadda", // nieuw, nalezen
    'w.terugbrengen': "soo celin (alaab dukaanka loo celiyo)", // nieuw, nalezen
    'w.klantenkaart': "kaarka macmiilka (kaar dhibcaha lagu kaydsado)", // nieuw, nalezen
    'w.statiegeld': "lacagta dhalada (lacag laguu celiyo dhalo ama gasac madhan)", // nieuw, nalezen
    'w.kassalade': "khaanadda khasnadda (khaanadda lacagta ku jirto)", // nieuw, nalezen
    'w.streepjescode': "koodka xarriiqyada (barcode)", // nieuw, nalezen
    'w.tegoedbon': "warqadda deynta (warqad aad goor dambe dukaanka ku isticmaasho)", // nieuw, nalezen
    's.returns.1': "Dhibco ma ku kaydsataa kaarka macmiilka?", // nieuw, nalezen
    's.returns.2': "Koodka xarriiqyadu ma shaqaynayo.", // nieuw, nalezen
    's.returns.3': "Ma rabtaa lacagta oo laguu celiyo mise warqad deyn ah?", // nieuw, nalezen
    'c.returns.q': "Waxaan rabaa inaan soo celiyo funaanaddan.", // nieuw, nalezen
    'c.returns.a': "Waa suurtagal. Rasiidhka weli ma haysaa?", // nieuw, nalezen
    'c.returns': "Soo celinta: raac xeerarka dukaanka", // nieuw, nalezen
    'c.returns.b': "Dukaan kasta wuxuu leeyahay xeerar u gaar ah oo soo celinta ah: immisa maalmood, rasiidh leh ama la'aan, lacag celin ama warqad deyn. Baro, oo u raac macmiil kasta. Ma hubtid? Weydii saaxiib shaqo ama maamulaha, oo keligaa ha go'aamin. Dhammaadka wareeggaaga shaqo, tiri khaanadda khasnaddaada, saaxiib shaqo la jira haddii dukaankaagu sidaas sameeyo. Waligaa lacag ha ka qaadan khasnadda naftaada, xataa inaad wax yar amaahato. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.returns.p': "Bal maamulaha dukaanka ayaan weydiinayaa.", // nieuw, nalezen
    'c.returns.s': "Macmiil ayaa rabta lacag celin kabo. Rasiidh ma haysato. Ma taqaanid xeerka. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.returns.o1': "Weydii maamulaha waxa la sameeyo.", // nieuw, nalezen
    'c.returns.o2': "Lacagta u celi: way wanaagsan tahay.", // nieuw, nalezen
    'c.returns.o3': "Dheh maya, oo dir.", // nieuw, nalezen
    'c.returns.w': "Maamulaha ayaa yaqaan xeerarka oo go'aamin kara. Markaas macmiishu waxay helaysaa jawaab cadaalad ah, adna eed kuma lihid.", // nieuw, nalezen
    'l.facing': "Hagaajinta khaanadaha iyo alaabta qabow", // nieuw, nalezen
    'w.facen': "hor u soo jiidid (alaabta hore u soo jiid, calaamaddu hore ha u jeeddo)", // nieuw, nalezen
    'w.afprijzen': "qiimo dhimid (qiimo ka hooseeya siin)", // nieuw, nalezen
    'w.koelvak': "khaanadda qabow (khaanadda qaboojiyaha ee dukaanka)", // nieuw, nalezen
    'w.diepvries': "barafaysiyaha", // nieuw, nalezen
    'w.uitpakken': "furid (sanduuq alaab ka bixin)", // nieuw, nalezen
    'w.schapkaartje': "kaarka qiimaha khaanadda (kaarka qiimaha ee khaanadda)", // nieuw, nalezen
    's.facing.1': "Marka hore khaanadda qabow, kadib inta kale.", // nieuw, nalezen
    's.facing.2': "Wax walba si habsami ah hore u dhig.", // nieuw, nalezen
    's.facing.3': "Alaabta maanta qiimaha ka dhim.", // nieuw, nalezen
    'c.facing.q': "Ma dhammaysay khaanadda qabow?", // nieuw, nalezen
    'c.facing.a': "Ku dhowaad. Weli waa inaan alaabta hore u soo jiido.", // nieuw, nalezen
    'c.facing': "Qabowga marka hore, khaanaduna ha buuxsanaato", // nieuw, nalezen
    'c.facing.b': "Alaabta qabow iyo tan barafaysan marka hore waxay galaan qaboojiyaha ama barafaysiyaha, wax kasta ka hor. Muddo dheer ma joogi karaan meel kulul. Kadib inta kale. Hor u soo jiidid waxay ka dhigan tahay: alaabta hore u soo jiid, calaamadduna ha u jeeddo macmiilka. Markaas khaanaddu waxay u muuqataa mid buuxda oo habsami ah. Hubi kaarka qiimaha: qiimuhu ma sax yahay alaabtan? Marka aad sanduuqyo furayso, ka jar dhinaca jirkaaga ka fog, hana jarin qoto dheer: alaabta ayaad waxyeelayn kartaa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.facing.p': "Marka hore alaabta qabow, kadib inta kale.", // nieuw, nalezen
    'c.facing.s': "Baaleet caano ah iyo baaleet jibs ah ayaa yimid. Keligaa ayaad joogtaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.facing.o1': "Marka hore caanaha geli qaboojiyaha.", // nieuw, nalezen
    'c.facing.o2': "Ka bilow jibska: way fudud yihiin.", // nieuw, nalezen
    'c.facing.o3': "Labadaba uga tag ilaa saaxiib shaqo yimaado.", // nieuw, nalezen
    'c.facing.w': "Caano muddo dheer kulayl ku jiray waxay jirran karaan macaamiisha, waana in la tuuraa. Jibsku wuu sugi karaa.", // nieuw, nalezen
    'l.shrink': "Waxyeello iyo xatooyo", // nieuw, nalezen
    'w.derving': "khasaaraha alaabta (waxa dukaanku lumiyo: alaab jaban, duug ah ama la xaday)", // nieuw, nalezen
    'w.afschrijven': "ka saarid diiwaanka (alaab in ay lumtay la diiwaangeliyo)", // nieuw, nalezen
    'w.personeelsaankoop': "iibsiga shaqaalaha (waxa aad ka iibsato dukaankaaga)", // nieuw, nalezen
    'w.tassencontrole': "baaritaanka boorsada", // nieuw, nalezen
    'w.kassamedewerker': "qofka khasnadda (shaqaalaha khasnadda)", // nieuw, nalezen
    'w.winkelwagen': "gaariga dukaanka (gaari yar oo alaabta lagu riixo)", // nieuw, nalezen
    's.shrink.1': "Dhaladan way jaban tahay. Diiwaanka ayaan ka saarayaa.", // nieuw, nalezen
    's.shrink.2': "Iibsigayga waxaan ka bixiyaa khasnadda saaxiib shaqo.", // nieuw, nalezen
    's.shrink.3': "Albaabka laga baxo waxaa yaal gaari dukaan oo buuxa.", // nieuw, nalezen
    'c.shrink.q': "Bal boorsadaada ma eegi karaa?", // nieuw, nalezen
    'c.shrink.a': "Haa, hubaal. Waa kan rasiidhkaygu.", // nieuw, nalezen
    'c.shrink': "Iibsigaaga: u bixi sida macmiil", // nieuw, nalezen
    'c.shrink.b': "Dukaanku wax badan ayuu ku lumiyaa alaab jaban, alaab duug ah iyo xatooyo. Ka caawi inay yaraato. Alaab jaban ama waxyeeloobay? Dib ha u celin khaanadda: diiwaanka ka saar sida dukaankaagu u sameeyo. Iibsigaaga: ka bixi khasnadda sida macmiil kasta, oo hayso rasiidhka. Dukaanno badan kuma oggola inaad adigu khasnadda ka gasho iibsigaaga: saaxiib shaqo ayaa sameeya. Waligaa ha cunin ama ha qaadan alaab adigoon bixin, xataa mid yar. Dukaannada qaar waxay baaraan boorsooyinka: taasi waa xeer dukaan, ma aha calaamad kalsooni la'aan adiga lagugu qabo. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.shrink.p': "Marka hore waan bixinayaa, rasiidhkana waan hayanayaa.", // nieuw, nalezen
    'c.shrink.s': "Dhammaadka wareeggaaga shaqo waad gaajaysan tahay. Sandwij ayaa taariikhdiisu maanta dhacday. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.shrink.o1': "Weydii maamulaha waxa uu yahay xeerku.", // nieuw, nalezen
    'c.shrink.o2': "Cun: si kastaba waa la tuurayaa.", // nieuw, nalezen
    'c.shrink.o3': "Boorsadaada ku qaado oo guriga u gee.", // nieuw, nalezen
    'c.shrink.w': "Dukaanno badan, in alaab la qaato iyadoon la bixin waa xatooyo, xataa haddii ay duug tahay. Marka hore weydiintu way ku badbaadisaa.", // nieuw, nalezen
    'l.shopclose': "Xiridda dukaanka", // nieuw, nalezen
    'w.sluitingstijd': "waqtiga xiridda", // nieuw, nalezen
    'w.rolluik': "albaabka birta ee duuban", // nieuw, nalezen
    'w.kasverschil': "farqiga khasnadda (lacag ka badan ama ka yar inta khasnadda ku jirta lahayd)", // nieuw, nalezen
    'w.kluis': "khasnadda adag (sanduuq adag oo lacagta loogu talagalay)", // nieuw, nalezen
    'w.overval': "dhac hubaysan (qof lacag ku qaada hanjabaad)", // nieuw, nalezen
    'w.achterdeur': "albaabka dambe", // nieuw, nalezen
    's.shopclose.1': "Toban daqiiqo kadib ayaan xiraynaa.", // nieuw, nalezen
    's.shopclose.2': "Khasnadda laba qof ayaan ku tirinnaa.", // nieuw, nalezen
    's.shopclose.3': "Albaabka dambe ma la qufulay?", // nieuw, nalezen
    'c.shopclose.q': "Si dhakhso ah ma u soo geli karaa?", // nieuw, nalezen
    'c.shopclose.a': "Waan ka xumahay, waan xiranahay. Berri siddeedda ayaan furaynaa.", // nieuw, nalezen
    'c.shopclose': "Dhac: sii, oo badbaad", // nieuw, nalezen
    'c.shopclose.b': "Waqtiga xiridda lacag badan ayaa khasnadda ku jirta, sidaas darteed dukaannadu waxay leeyihiin xeerar: laba qof ku tiri, lacagta geey khasnadda adag, oo marka hore quful albaabka dambe. Dhac (overval)? Noloshaadu way ka qiimo badan tahay lacagta. Deggenaan, samee waxa ay yiraahdaan, hana la dagaallamin hana daba orodin. Xasuuso waxa aad kari karto: dharka, dhererka, codka. Marka ay tagaan: quful albaabka, wac 112, waxna ha taaban. Kadib, kala hadal maamulahaaga ama qof aad aaminto. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.shopclose.p': "Waan xiraynaa. Albaabka ayaan qufulayaa.", // nieuw, nalezen
    'c.shopclose.s': "Nin mindi sita ayaa rabaa lacagta khasnaddaada. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.shopclose.o1': "Deggenaan, oo sii lacagta.", // nieuw, nalezen
    'c.shopclose.o2': "La dagaallan: lacagtu isaga ma leh.", // nieuw, nalezen
    'c.shopclose.o3': "Gadaal u orod, oo iska quful.", // nieuw, nalezen
    'c.shopclose.w': "Dagaalka ama oroddu waxay tuugga ka dhigaan mid walwalsan oo khatar badan. Lacagta waa la beddeli karaa. Adiga lama beddeli karo.", // nieuw, nalezen
    'u.uitzend': "Shaqo adigoo maraya xafiis shaqo-qoris", // nieuw, nalezen
    'l.hirer': "Xafiiska shaqo-qorista iyo shirkadda kiraysata", // nieuw, nalezen
    'w.inlener': "shirkadda kiraysata (shirkadda xafiiska shaqo-qoristu kuu diro inaad ka shaqeyso)", // nieuw, nalezen
    'w.vestiging': "laanta (xafiiska shaqo-qorista ee magaaladaada)", // nieuw, nalezen
    'w.intakegesprek': "wareysiga koowaad (wadahadalka ugu horreeya ee xafiiska shaqo-qorista)", // nieuw, nalezen
    'w.opstapplaats': "meesha laga raaco (halka baska xafiiska shaqo-qoristu kaa qaado)", // nieuw, nalezen
    'w.bedrijfsregels': "xeerarka shirkadda (xeerarka shirkadda kiraysata)", // nieuw, nalezen
    'w.aanspreekpunt': "qofka xiriirka (qofka aad su'aalaha u keento)", // nieuw, nalezen
    's.hirer.1': "Berri waxaad ka shaqaynaysaa shirkad kiraysata oo cusub.", // nieuw, nalezen
    's.hirer.2': "Yaa halkan ah qofka xiriirkaygu?", // nieuw, nalezen
    's.hirer.3': "Baskku wuxuu ka dhaqaaqaa meesha laga raaco saacadda lixaad.", // nieuw, nalezen
    'c.hirer.q': "Berri ma ka bilaabi kartaa shirkad kiraysata oo cusub?", // nieuw, nalezen
    'c.hirer.a': "Haa. Saacaddee ayay tahay inaan halkaas joogo?", // nieuw, nalezen
    'c.hirer': "Laba shirkadood: yaa maxay qabtaa?", // nieuw, nalezen
    'c.hirer.b': "Waxaad ka shaqaysaa adigoo maraya xafiis shaqo-qoris (uitzendbureau), laakiin shaqada waxaad ka qabataa shirkad kale: shirkadda kiraysata (inlener). Xafiiska shaqo-qoristu waa loo-shaqeeyahaaga: qandaraaskaaga, mushaharkaaga, warqadda mushaharkaaga iyo maalmahaaga fasaxa waxay ka yimaadaan xafiiska shaqo-qorista. Shirkadda kiraysata ayaa kuu sheegta waxa aad ka qabanayso goobta shaqada, waana inay shaqadaada ka dhigtaa mid ammaan ah, sida shaqaalaheeda. U sheeg in aad jirran tahay sida xafiiska shaqo-qoristaadu sheego: badanaa xafiiska iyo shirkadda kiraysata. Magaca iyo lambarka taleefanka qofka xiriirkaaga ee xafiiska shaqo-qorista ku kaydi taleefankaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.hirer.p': "Yaa ah qofka xiriirkayga ee xafiiska shaqo-qorista?", // nieuw, nalezen
    'c.hirer.s': "Shirkadda kiraysata waa inaad ku shaqaysaa mashiin. Qofna kuma tusin sida. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.hirer.o1': "Shirkadda kiraysata ka codso inay marka hore ku tusaan.", // nieuw, nalezen
    'c.hirer.o2': "Isku day: xafiiska shaqo-qorista ayaa mas'uul ah.", // nieuw, nalezen
    'c.hirer.o3': "Guriga tag, oo waxba ha odhan.", // nieuw, nalezen
    'c.hirer.w': "Shirkadda kiraysata waa inay ku tustaa sida si ammaan ah loo shaqeeyo, sida shaqaalaheeda. Inaad weydiisato waa xaqaaga.", // nieuw, nalezen
    'l.phases': "Qandaraaskaaga iyo heerarka", // nieuw, nalezen
    'w.fase': "heerka (tallaabo ka mid ah qandaraaskaaga xafiiska shaqo-qorista: A, B ama C)", // nieuw, nalezen
    'w.uitzendbeding': "qodobka xafiiska shaqo-qorista (shaqadaadu way joogsan kartaa marka shirkadda kiraysatu aanay kuu baahnayn)", // nieuw, nalezen
    'w.aflopen': "dhammaad, ku dhammaad (qandaraas)", // nieuw, nalezen
    'w.doorwerken': "sii shaqayn (isla meeshii)", // nieuw, nalezen
    'w.vastecontract': "qandaraaska joogtada ah (qandaraas aan lahayn taariikh dhammaad)", // nieuw, nalezen
    'w.onderbreking': "joogsiga (waqti aan shaqo lahayn oo u dhexeeya laba qandaraas)", // nieuw, nalezen
    's.phases.1': "Hadda heerkee ayaan ku jiraa?", // nieuw, nalezen
    's.phases.2': "Qandaraaskaygu wuxuu dhammaanayaa toddobaadka soo socda.", // nieuw, nalezen
    's.phases.3': "Halkan ma sii shaqayn karaa?", // nieuw, nalezen
    'c.phases.q': "Shaqadaadu waxay joogsanaysaa Jimcaha.", // nieuw, nalezen
    'c.phases.a': "Hagaag. Shaqo kale ma ii haysaa?", // nieuw, nalezen
    'c.phases': "Heerarka A, B iyo C", // nieuw, nalezen
    'c.phases.b': "Shaqaalaha xafiisyada shaqo-qorista badankoodu waxay ku shaqeeyaan cao loogu talagalay shaqaalaha xafiisyada shaqo-qorista (uitzend-cao). Waxay leedahay heerar. Heerka A, shaqadaadu badanaa way joogsan kartaa marka shirkadda kiraysatu aanay kuu baahnayn (uitzendbeding). Heerka B, waxaad helaysaa qandaraasyo waqti go'an leh. Heerka C, waxaad helaysaa qandaraas joogto ah oo xafiiska shaqo-qorista. Inta heer kasta socdo waxay ku qoran tahay cao-gaaga. Weydii xafiiska shaqo-qorista heerka aad ku jirto, oo hayso dhammaan qandaraasyadaada. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.phases.p': "Heerka A immisa ayuu ii socdaa?", // nieuw, nalezen
    'c.phases.s': "Muddo dheer ayaad u shaqaysay isla xafiiskii shaqo-qorista. Weli waxaad helaysaa qandaraasyo gaagaaban. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.phases.o1': "Weydii xafiiska shaqo-qorista heerka aad ku jirto.", // nieuw, nalezen
    'c.phases.o2': "Waxba: shaqada xafiiska shaqo-qoristu had iyo jeer waa gaaban tahay.", // nieuw, nalezen
    'c.phases.o3': "Jooji, oo raadi xafiis shaqo-qoris kale.", // nieuw, nalezen
    'c.phases.w': "Waqti ku filan kadib, cao-gu waxay ku siisaa ammaan badan. Xafiiska shaqo-qoristu wuu kuu sheegi karaa meesha aad joogto, ururka shaqaaluhuna wuu kula hubin karaa.", // nieuw, nalezen
    'l.deductions': "Mushaharka iyo jaridda", // nieuw, nalezen
    'w.inhouding': "jaridda (lacag mushaharkaaga laga jaro)", // nieuw, nalezen
    'w.vastekracht': "shaqaale joogto ah (shaqaale ay shirkadda kiraysatu iyadu shaqaalaysiisay)", // nieuw, nalezen
    'w.vervoer': "gaadiidka (baska ama gaariga shaqada lagu tago)", // nieuw, nalezen
    'w.schriftelijk': "qoraal ahaan (warqad ama iimayl)", // nieuw, nalezen
    'w.navragen': "hubin, wax ka weydiin (ogaan in wax sax yihiin)", // nieuw, nalezen
    'w.brutoloon': "mushaharka guud (mushaharkaaga ka hor canshuurta iyo jaridda)", // nieuw, nalezen
    's.deductions.1': "Waa maxay jariddan warqadda mushaharkayga ku jirta?", // nieuw, nalezen
    's.deductions.2': "Ma helaa isla inta shaqaalaha joogtada ahi helaan?", // nieuw, nalezen
    's.deductions.3': "Taas marka hore waxaan rabaa inaan warqad ku arko.", // nieuw, nalezen
    'c.deductions.q': "Kharashka baska waxaan ka jaraynaa mushaharkaaga.", // nieuw, nalezen
    'c.deductions.a': "Ma la oggol yahay? Marka hore taas waan hubinayaa.", // nieuw, nalezen
    'c.deductions': "Maxaa laga jari karaa mushaharkaaga?", // nieuw, nalezen
    'c.deductions.b': "Waxaad xaq u leedahay ugu yaraan mushahar la mid ah kan shaqaalaha shirkadda kiraysata ee qabta isla shaqada. Lacagta mushaharkaaga laga jaro (inhouding) waa inay ku qoran tahay warqadda mushaharkaaga. Canshuurta iyo lacagaha caymiska waxaa laga jaraa sharci ahaan. Kuwaas marka laga reebo, xafiiska shaqo-qoristu wuxuu mushaharka ugu yar ka jari karaa oo keliya laba kharash: kirada gurigaaga iyo lacagta caymiska caafimaadka, oo keliya haddii aad qoraal ku oggolaatay. Kharashyada kale, sida gaadiidka, dharka shaqada, ganaaxyada ama lacag shaqo laguu helay, lagama jari karo mushaharka ugu yar. Ma fahmin jarid? Xafiiska shaqo-qorista ka codso inay qoraal ahaan kuu sharxaan. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.deductions.p': "Jariddani maxay u tahay?", // nieuw, nalezen
    'c.deductions.s': "Xafiiska shaqo-qoristu wuxuu mushaharkaaga ka jaraa lacag baska shaqada. Waxaad qaadataa mushaharka ugu yar. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.deductions.o1': "Wax ka weydii: tan lama oggola.", // nieuw, nalezen
    'c.deductions.o2': "Waxba: maalin kasta baska ayaad raacdaa.", // nieuw, nalezen
    'c.deductions.o3': "Jooji raacista baska, oo lugee.", // nieuw, nalezen
    'c.deductions.w': "Mushaharka ugu yar waxaa laga jari karaa oo keliya kirada iyo caymiska caafimaadka, oo keliya haa qoraal ah oo adiga kaa timid. Ururka shaqaalaha ama Juridisch Loket ayaa ku caawin kara.", // nieuw, nalezen
    'l.agencyhome': "Guriga iyo caawimaadda", // nieuw, nalezen
    'w.huisvesting': "hoyga (meel lagu noolaado, oo xafiiska shaqo-qoristu diyaariyo)", // nieuw, nalezen
    'w.huisgenoot': "qofka guriga la deggan (qof isla guriga ku nool)", // nieuw, nalezen
    'w.huisregels': "xeerarka guriga (xeerarka guriga aad ku nooshahay)", // nieuw, nalezen
    'w.huismeester': "maamulaha guriga (qofka guriga dayactira)", // nieuw, nalezen
    'w.meldpunt': "xarunta warbixinta (meel aad dhibaato ka soo sheegi karto)", // nieuw, nalezen
    'w.advies': "talada", // nieuw, nalezen
    's.agencyhome.1': "Waxaan rabaa qandaraas kiro oo aniga ii gaar ah.", // nieuw, nalezen
    's.agencyhome.2': "Qubeyska caarad ayaa ku jirta.", // nieuw, nalezen
    's.agencyhome.3': "Ururka shaqaalaha ayaan u wacayaa si aan talo u helo.", // nieuw, nalezen
    'c.agencyhome.q': "Waa inaad guriga ka baxdaa Jimcaha.", // nieuw, nalezen
    'c.agencyhome.a': "Taasi aad bay u gaaban tahay. Marka hore talo ayaan weydiinayaa.", // nieuw, nalezen
    'c.agencyhome': "Gurigaaga, iyo halka aad caawimaad ka heli karto", // nieuw, nalezen
    'c.agencyhome.b': "Xafiiska shaqo-qoristu ma kuu diyaariyaa hoyga? Markaas waxaad helaysaa qandaraas kiro oo kuu gaar ah, qoraal ah, oo ka gooni ah qandaraaska shaqadaada. Nuqul hayso. Waxaa ku qoran waxa aad bixiso, iyo sida iyo goorta kiradu dhammaanayso. Shaqadaadu ma joogsanaysaa? Gurigaagu had iyo jeer isla maalintaas ma joogsado: talo weydiiso ka hor intaadan bixin. Hoy aan ammaan ahayn ama aad u buuxa, hanjabaad, ama mushahar aad u yar? Caawimaad hel: ururka shaqaalaha, Juridisch Loket (talo sharci oo bilaash ah), FairWork, ama Nederlandse Arbeidsinspectie, halkaas oo aad sidoo kale ku soo sheegi karto adigoon magacaaga bixin. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.agencyhome.p': "Ma heli karaa nuqul qandaraaska kirada?", // nieuw, nalezen
    'c.agencyhome.s': "Shaqadaadu way joogsanaysaa. Maamulaha guriga ayaa yiri waa inaad maanta guriga ka baxdaa. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.agencyhome.o1': "Marka hore weydii ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.agencyhome.o2': "Maanta ka bax, oo u seexo saaxiib.", // nieuw, nalezen
    'c.agencyhome.o3': "Boorsadaada diyaarso, oo banaanka seexo.", // nieuw, nalezen
    'c.agencyhome.w': "Qandaraaska kirada wuxuu leeyahay xeerar u gaar ah, oo ka gooni ah shaqadaada. Taladu waxay kaa caawinaysaa inaad ogaato goorta ay dhab ahaan tahay inaad baxdo.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "Akhrinta xayeysiis shaqo", // nieuw, nalezen
    'w.advertentie': "xayeysiiska (qoraal shaqo ama wax kale bixiya)", // nieuw, nalezen
    'w.eis': "shuruudda (waxa ay tahay inaad haysato ama aad samayn karto)", // nieuw, nalezen
    'w.parttime': "waqti-dhiman (saacado ka yar toddobaadkii)", // nieuw, nalezen
    'w.fulltime': "waqti-buuxa (toddobaad shaqo oo dhan)", // nieuw, nalezen
    'w.sollicitatiebrief': "warqadda codsiga shaqada", // nieuw, nalezen
    'w.contactpersoon': "qofka xiriirka (qofka aad wici karto ama u qori karto)", // nieuw, nalezen
    's.vacancy.1': "Xayeysiiskaaga ayaan ku arkay internetka.", // nieuw, nalezen
    's.vacancy.2': "Shaqadu ma waqti-dhiman baa mise waqti-buuxa?", // nieuw, nalezen
    's.vacancy.3': "Waa maxay shuruudaha?", // nieuw, nalezen
    'c.vacancy.q': "Maxaad u soo wacaysaa?", // nieuw, nalezen
    'c.vacancy.a': "Waxaan u soo wacayaa shaqada bannaan. Weli ma furan tahay?", // nieuw, nalezen
    'l.result': "Wareysiga kadib", // nieuw, nalezen
    'w.aangenomen': "la qaatay (shaqada waad heshay)", // nieuw, nalezen
    'w.afwijzing': "diidmada (shaqada ma aadan helin)", // nieuw, nalezen
    'w.aanbod': "dalabka (shaqada ayay kuu soo bandhigayaan)", // nieuw, nalezen
    'w.proefdag': "maalinta tijaabada (hal maalin shaqo, si loo tijaabiyo)", // nieuw, nalezen
    'w.nabellen': "dib u wacid (si aad u weydiiso sida ay wax u socdaan)", // nieuw, nalezen
    'w.teleurgesteld': "niyad-jabsan", // nieuw, nalezen
    's.result.1': "Waa lagu qaatay!", // nieuw, nalezen
    's.result.2': "Diidmo ayaa la ii soo diray.", // nieuw, nalezen
    's.result.3': "Maalinta tijaabada lacag ma laga bixiyaa?", // nieuw, nalezen
    'c.result.q': "Nasiib darro, qof kale ayaan dooranaynaa.", // nieuw, nalezen
    'c.result.a': "Waa nasiib darro. Ma weydiin karaa sababta?", // nieuw, nalezen
    'l.residence': "Waraaqahaaga deganaanshaha", // nieuw, nalezen
    'w.verblijfsvergunning': "sharciga deganaanshaha", // nieuw, nalezen
    'w.pasfoto': "sawirka baasaboorka", // nieuw, nalezen
    'w.vingerafdruk': "faraha raadkooda (fingerprint)", // nieuw, nalezen
    'w.geldig': "ansax ah (weli waa la isticmaali karaa)", // nieuw, nalezen
    'w.verloopdatum': "taariikhda dhicitaanka (maalinta ugu dambaysa ee uu ansax yahay)", // nieuw, nalezen
    'w.volgnummer': "lambarka safka (warqadda kaaga sheegaysa goorta aad tahay)", // nieuw, nalezen
    's.residence.1': "Sharcigayga deganaanshaha weli hal sano ayuu ansax yahay.", // nieuw, nalezen
    's.residence.2': "Waa maxay taariikhda dhicitaanka baasaboorkaaga?", // nieuw, nalezen
    's.residence.3': "Ballan ayaan ku leeyahay gemeente-ga.", // nieuw, nalezen
    'c.residence.q': "Sharcigaaga deganaanshaha wuu dhici gaadhay.", // nieuw, nalezen
    'c.residence.a': "Markaas isla markiiba mid cusub ayaan codsanayaa.", // nieuw, nalezen
    'l.newhome': "Guri u guurid", // nieuw, nalezen
    'w.brievenbus': "sanduuqa boostada", // nieuw, nalezen
    'w.meterstand': "akhriska mitirka (lambarada mitirka gaaska, korontada ama biyaha)", // nieuw, nalezen
    'w.naambordje': "calaamadda magaca (magacaaga albaabka ku qoran)", // nieuw, nalezen
    'w.woning': "guriga (aqal ama abaarteemo)", // nieuw, nalezen
    'w.doorsturen': "u gudbin (u dirid cinwaan cusub)", // nieuw, nalezen
    'w.verhuisdag': "maalinta guuritaanka", // nieuw, nalezen
    's.newhome.1': "Toddobaadka soo socda ayaan guurayaa.", // nieuw, nalezen
    's.newhome.2': "Magacaygu kuma qorna sanduuqa boostada.", // nieuw, nalezen
    's.newhome.3': "Cinwaankayga cusub ayaan bixinayaa.", // nieuw, nalezen
    'c.newhome.q': "Xaggee ayaad hadda ku nooshahay?", // nieuw, nalezen
    'c.newhome.a': "Guri cusub. Waa kan cinwaankayga cusub.", // nieuw, nalezen
    'l.payparts': "Waxa ku qoran warqadda mushaharkaaga", // nieuw, nalezen
    'w.pensioen': "hawlgabka (lacag loogu talagalay markaad gabowdo)", // nieuw, nalezen
    'w.periode': "muddada (toddobaadyada ama bisha mushaharkan)", // nieuw, nalezen
    'w.bedrag': "qaddarka (lacagta)", // nieuw, nalezen
    'w.totaal': "wadarta", // nieuw, nalezen
    'w.afkorting': "soo gaabinta (qaab gaaban oo eray ah)", // nieuw, nalezen
    'w.personeelsnummer': "lambarka shaqaalaha (lambarkaaga shirkadda)", // nieuw, nalezen
    's.payparts.1': "Muxuu ka dhigan yahay soo gaabintan?", // nieuw, nalezen
    's.payparts.2': "Qaddarkan wuxuu aadaa hawlgabkayga.", // nieuw, nalezen
    's.payparts.3': "Mushaharkani muddadee buu ku saabsan yahay?", // nieuw, nalezen
    'c.payparts.q': "Waa maxay lambarkaaga shaqaalaha?", // nieuw, nalezen
    'c.payparts.a': "Wuxuu ku qoran yahay xagga sare, magacayga agtiisa.", // nieuw, nalezen
    'l.latepay': "Mushahar daahay, maqan ama lacag caddaan ah", // nieuw, nalezen
    'w.zwartwerken': "shaqo madow (qandaraas la'aan, canshuur la'aan, xuquuq aan warqad ku qornayn)", // nieuw, nalezen
    'w.voorschot': "horumarinta mushaharka (qayb mushaharkaaga ah oo maalinta mushaharka ka hor la bixiyo)", // nieuw, nalezen
    'w.nabetaling': "dib-u-bixinta (lacag aad goor dambe hesho, si mushaharkaaga loo saxo)", // nieuw, nalezen
    'w.tekort': "dhimanaanta (lacag maqan)", // nieuw, nalezen
    'w.betaaldag': "maalinta mushaharka", // nieuw, nalezen
    'w.bankafschrift': "bayaanka bangiga (liiska lacagta soo gashay iyo tan baxday)", // nieuw, nalezen
    's.latepay.1': "Mushaharkaygu wuu daahay.", // nieuw, nalezen
    's.latepay.2': "Shaqo madow ma shaqeeyo.", // nieuw, nalezen
    's.latepay.3': "Ma heli karaa horumarin mushahar?", // nieuw, nalezen
    'c.latepay.q': "Lacagta maqan waxaad helaysaa bisha soo socota.", // nieuw, nalezen
    'c.latepay.a': "Ma ii qori kartaa taas?", // nieuw, nalezen
    'l.holiday': "Qorshaynta fasaxaaga", // nieuw, nalezen
    'w.saldo': "haraaga (inta maalmood ee aad weli haysato)", // nieuw, nalezen
    'w.goedkeuren': "oggolaansho (haa ku dhihid)", // nieuw, nalezen
    'w.verlopen': "dhicid (mar dambe ansax ma aha)", // nieuw, nalezen
    'w.zomervakantie': "fasaxa xagaaga", // nieuw, nalezen
    'w.drukte': "waqtiga mashquulka (shaqo badan)", // nieuw, nalezen
    'w.aanvraag': "codsiga (wax baad weydiisanaysaa, badanaa foom ku qoran)", // nieuw, nalezen
    's.holiday.1': "Immisa maalmood oo fasax ah ayaa ii haray?", // nieuw, nalezen
    's.holiday.2': "Fasaxayga waa la oggolaaday.", // nieuw, nalezen
    's.holiday.3': "Foomka ayaan buuxinayaa.", // nieuw, nalezen
    'c.holiday.q': "Xagaaga waa mashquul. Ma aadi kartaa fasax bisha May?", // nieuw, nalezen
    'c.holiday.a': "Waxaan door bidayaa July. Markaas qoyskaygu guriga ayuu joogaa.", // nieuw, nalezen
    'l.special': "Maalmo fasax gaar ah", // nieuw, nalezen
    'w.bruiloft': "aroosyada", // nieuw, nalezen
    'w.begrafenis': "aaska", // nieuw, nalezen
    'w.geboorteverlof': "fasaxa dhalashada (lammaanaha, marka ilmo dhasho)", // nieuw, nalezen
    'w.bijzonderverlof': "fasaxa gaarka ah (tusaale ahaan aroos ama aas)", // nieuw, nalezen
    'w.kerstdagen': "Kirismaska (labada maalmood ee Kirismaska)", // nieuw, nalezen
    'w.vrijvragen': "fasax maalin ah weydiisasho", // nieuw, nalezen
    's.special.1': "Walaalkay ayaa guursanaya. Ma weydiisan karaa fasax maalin ah?", // nieuw, nalezen
    's.special.2': "Adeerkay wuu dhintay. Aasku waa Jimcaha.", // nieuw, nalezen
    's.special.3': "Ma waajib baa inaan shaqeeyo Kirismaska?", // nieuw, nalezen
    'c.special.q': "Hambalyo ilmahaaga! Ma qaadanaysaa fasaxa dhalashada?", // nieuw, nalezen
    'c.special.a': "Haa, toddobaadka koowaad guriga ayaan joogaa.", // nieuw, nalezen
    'l.unwell': "Inaadan caafimaad fiicnayn", // nieuw, nalezen
    'w.hoofdpijn': "madax-xanuunka", // nieuw, nalezen
    'w.griep': "hargabka (fluu)", // nieuw, nalezen
    'w.verkouden': "duray qabid", // nieuw, nalezen
    'w.nietlekker': "aan fiicnayn (waxaad dareemaysaa xanuun yar)", // nieuw, nalezen
    'w.naarhuis': "guriga aadid", // nieuw, nalezen
    'w.uitzieken': "guriga joogid ilaa aad ka bogsato", // nieuw, nalezen
    's.unwell.1': "Ma fiicni.", // nieuw, nalezen
    's.unwell.2': "Madax-xanuun ayaan qabaa, durayna waan qabaa.", // nieuw, nalezen
    's.unwell.3': "Guriga ayaan aadayaa. Waan xanuunsanahay.", // nieuw, nalezen
    'c.unwell.q': "Waad cirro-caddahay. Ma fiicantahay?", // nieuw, nalezen
    'c.unwell.a': "Maya, ma fiicni. Ma aadi karaa guriga?", // nieuw, nalezen
    'l.injury': "Shaqadaada oo ku dhaawacday", // nieuw, nalezen
    'w.bedrijfsongeval': "shilka shaqada", // nieuw, nalezen
    'w.verzekering': "caymiska", // nieuw, nalezen
    'w.schadevergoeding': "magdhawga (lacag lagu bixiyo khasaaraha)", // nieuw, nalezen
    'w.oorzaak': "sababta (waxa ay ku dhacday)", // nieuw, nalezen
    'w.letsel': "dhaawaca (waxyeello jirkaaga gaartay)", // nieuw, nalezen
    'w.verklaring': "warbixinta (waxa aad ka qorto ama ka sheegto waxa dhacay)", // nieuw, nalezen
    's.injury.1': "Shil shaqo ayaa igu dhacay.", // nieuw, nalezen
    's.injury.2': "Maxay ahayd sababta?", // nieuw, nalezen
    's.injury.3': "Saaxiibkayga shaqada ayaa arkay.", // nieuw, nalezen
    'c.injury.q': "Ma halkan ku qori doontaa warbixintaada?", // nieuw, nalezen
    'c.injury.a': "Haa. Ma heli karaa nuqul?", // nieuw, nalezen
    'l.debt': "Deyn madaxa ama xafiiska lagu leeyahay", // nieuw, nalezen
    'w.lening': "amaahda", // nieuw, nalezen
    'w.lenen': "amaahasho, amaahin", // nieuw, nalezen
    'w.vastzitten': "ku xayirnaansho (ma bixi kartid)", // nieuw, nalezen
    'w.tussenpersoon': "dhexdhexaadiyaha (qof lacag ku helo inuu shaqo kuu diyaariyo)", // nieuw, nalezen
    'w.rente': "dulsaarka (lacag dheeraad ah oo aad ku bixiso amaah)", // nieuw, nalezen
    'w.belofte': "ballanqaadka", // nieuw, nalezen
    's.debt.1': "Waxay ahayd inaan shaqadan lacag ku bixiyo.", // nieuw, nalezen
    's.debt.2': "Deyntaydu bil kasta way sii kordhaysaa.", // nieuw, nalezen
    's.debt.3': "Dhexdhexaadiyaha ayaa haya baasaboorkayga.", // nieuw, nalezen
    'c.debt.q': "Waxaad bixi kartaa oo keliya marka deyntaada la bixiyo.", // nieuw, nalezen
    'c.debt.a': "Taasi lama oggola. Caawimaad ayaan raadsanayaa.", // nieuw, nalezen
    'l.inspection': "Kormeerka iyo caawimaad kale", // nieuw, nalezen
    'w.inspectie': "kormeerka (dad hubiya in shaqadu cadaalad tahay oo ammaan tahay)", // nieuw, nalezen
    'w.controle': "hubinta", // nieuw, nalezen
    'w.slachtoffer': "dhibbanaha", // nieuw, nalezen
    'w.mensenhandel': "ka ganacsiga dadka (dad loo isticmaalo oo loo iibiyo shaqo ama galmo)", // nieuw, nalezen
    'w.vertrouwen': "aaminid", // nieuw, nalezen
    'w.tolk': "turjubaanka", // nieuw, nalezen
    's.inspection.1': "Berri kormeerku wuu imanayaa.", // nieuw, nalezen
    's.inspection.2': "Ma heli karaa turjubaan?", // nieuw, nalezen
    's.inspection.3': "Ninkan ma aamino.", // nieuw, nalezen
    'c.inspection.q': "Ma rabtaa inaad la hadasho kormeerka?", // nieuw, nalezen
    'c.inspection.a': "Haa, laakiin madaxaygu waa inuusan maqlin.", // nieuw, nalezen
    'l.carpool': "Baabuur wadaag iyo baabuurka shaqada", // nieuw, nalezen
    'w.carpoolen': "baabuur wadaagid (hal baabuur wada raacid shaqada)", // nieuw, nalezen
    'w.meerijden': "la raacid (baabuurka qof kale)", // nieuw, nalezen
    'w.gordel': "suunka kursiga", // nieuw, nalezen
    'w.instappen': "fuulid (baabuur, bas ama tareen)", // nieuw, nalezen
    'w.uitstappen': "ka degid (baabuur, bas ama tareen)", // nieuw, nalezen
    'w.bijrijder': "rakaabka hore (darawalka agtiisa)", // nieuw, nalezen
    's.carpool.1': "Ma ku raaci karaa?", // nieuw, nalezen
    's.carpool.2': "Xiro suunkaaga.", // nieuw, nalezen
    's.carpool.3': "Saldhigga ayaan ka degayaa.", // nieuw, nalezen
    'c.carpool.q': "Yaa wadaya berri?", // nieuw, nalezen
    'c.carpool.a': "Aniga ayaa wadaya. Saacadda lixda ayaan ku soo qaadayaa.", // nieuw, nalezen
    'l.train': "Tareenka, dib u dhaca iyo soo daahid", // nieuw, nalezen
    'w.station': "saldhigga tareenka", // nieuw, nalezen
    'w.perron': "madalka (meesha tareenka laga fuulo)", // nieuw, nalezen
    'w.overstappen': "beddelid (tareen ama bas kale u gudbid)", // nieuw, nalezen
    'w.uitvallen': "la joojiyo (tareenku ma socdo)", // nieuw, nalezen
    'w.kaartje': "tigidhka", // nieuw, nalezen
    'w.reisplanner': "qorsheeyaha safarka (app tusa tareenada iyo basaska)", // nieuw, nalezen
    's.train.1': "Tareenkaygii waa la joojiyay.", // nieuw, nalezen
    's.train.2': "Waa inaan hal mar beddelaa tareenka.", // nieuw, nalezen
    's.train.3': "Madalkee ayuu tareenku ka baxayaa?", // nieuw, nalezen
    'c.train.q': "Maxaad sidaas ugu soo daahday?", // nieuw, nalezen
    'c.train.a': "Tareenkaygii waa la joojiyay. Fariin ayaan kuu soo diray.", // nieuw, nalezen
    'l.checklist': "Hubi ka hor intaadan dhammayn", // nieuw, nalezen
    'w.checklist': "liiska hubinta (liis waxyaabo la hubinayo)", // nieuw, nalezen
    'w.afvinken': "calaamadin (calaamad saarid hawl kasta gadaasheeda)", // nieuw, nalezen
    'w.overdoen': "mar kale samayn", // nieuw, nalezen
    'w.compleet': "dhammaystiran (waxba kama maqna)", // nieuw, nalezen
    'w.vergeten': "illaawid", // nieuw, nalezen
    'w.resultaat': "natiijada", // nieuw, nalezen
    's.checklist.1': "Wax walba waan ku calaamadiyaa liiska hubinta.", // nieuw, nalezen
    's.checklist.2': "Dalabku ma dhammaystiran yahay?", // nieuw, nalezen
    's.checklist.3': "Tan waa inaan mar kale sameeyaa.", // nieuw, nalezen
    'c.checklist.q': "Waxba ma illaawin?", // nieuw, nalezen
    'c.checklist.a': "Mar kale ayaan eegayaa liiska hubinta.", // nieuw, nalezen
    'l.leavesite': "Ka bixidda goobta shaqada", // nieuw, nalezen
    'w.terugzetten': "dib u celin (meeshiisa)", // nieuw, nalezen
    'w.vegen': "xaaqid", // nieuw, nalezen
    'w.vloer': "dabaqa", // nieuw, nalezen
    'w.uitdoen': "demin (nalka, mashiin)", // nieuw, nalezen
    'w.alslaatste': "qofka ugu dambeeya", // nieuw, nalezen
    'w.achterlaten': "ka tagid (sida aad meeshaada uga tagto)", // nieuw, nalezen
    's.leavesite.1': "Meeshayda nadiif ayaan uga tagaa.", // nieuw, nalezen
    's.leavesite.2': "Yaa ugu dambeyn baxaya?", // nieuw, nalezen
    's.leavesite.3': "Dami nalka oo xir albaabka.", // nieuw, nalezen
    'c.leavesite.q': "Maanta adiga ma ugu dambeyn baxaysaa?", // nieuw, nalezen
    'c.leavesite.a': "Haa. Wax walba waan demiyaa oo albaabka waan qufulaa.", // nieuw, nalezen
    'l.stagedays': "Maalin kasta tababarkaaga shaqada", // nieuw, nalezen
    'w.stageplek': "goobta tababarka (shirkadda aad tababarka ku qaadato)", // nieuw, nalezen
    'w.afwezig': "maqan (ma joogo)", // nieuw, nalezen
    'w.aanwezig': "jooga (wuu joogaa)", // nieuw, nalezen
    'w.stagevergoeding': "gunnada tababarka (lacag aad heli karto tababarka)", // nieuw, nalezen
    'w.begeleiding': "hagidda (caawimaad hagahaaga kaa timaadda)", // nieuw, nalezen
    'w.leerling': "ardayga (dugsiga)", // nieuw, nalezen
    's.stagedays.1': "Berri waan maqnaan doonaa. Waan xanuunsanahay.", // nieuw, nalezen
    's.stagedays.2': "Ma helayaa gunnada tababarka?", // nieuw, nalezen
    's.stagedays.3': "Goobta tababarkayga afar maalmood ayaan ka shaqeeyaa.", // nieuw, nalezen
    'c.stagedays.q': "Maxaad shalay u maqnayd?", // nieuw, nalezen
    'c.stagedays.a': "Waan xanuunsanaa. Dugsiga iyo shirkadda ayaan wacay.", // nieuw, nalezen
    'l.stageend': "Dhammaadka tababarkaaga", // nieuw, nalezen
    'w.eindgesprek': "wada-hadalka dhammaadka (dhammaadka tababarkaaga)", // nieuw, nalezen
    'w.geslaagd': "gudbay (si fiican ayaad u samaysay)", // nieuw, nalezen
    'w.gezakt': "dhacay (markan kuma filna)", // nieuw, nalezen
    'w.herkansing': "fursadda labaad (fursad cusub)", // nieuw, nalezen
    'w.bedanken': "u mahadcelin", // nieuw, nalezen
    'w.trakteren': "martiqaadid (wax macaan oo la cuno u keenid qof walba)", // nieuw, nalezen
    's.stageend.1': "Berri waxaan leeyahay wada-hadalkayga dhammaadka.", // nieuw, nalezen
    's.stageend.2': "Tababarkayga waan ku gudbay.", // nieuw, nalezen
    's.stageend.3': "Waxaan rabaa inaan qof walba u mahadceliyo.", // nieuw, nalezen
    'c.stageend.q': "Maalintaadii ugu dambaysay! Maxaad hadda samayn doontaa?", // nieuw, nalezen
    'c.stageend.a': "Marka hore shahaadadayda ayaan qaadanayaa. Kadib shaqo ayaan raadsanayaa.", // nieuw, nalezen
    'l.neighbours': "Xaafaddaada", // nieuw, nalezen
    'w.buurt': "xaafadda", // nieuw, nalezen
    'w.buurthuis': "xarunta xaafadda (guri hawlaha xaafaddaada loogu talagalay)", // nieuw, nalezen
    'w.straat': "waddada", // nieuw, nalezen
    'w.kennismaken': "is-barasho (qof markii ugu horreysay la kulmid)", // nieuw, nalezen
    'w.overlast': "dhibaatada (buuq ama qas dadka kale u keena)", // nieuw, nalezen
    'w.buurvrouw': "deriska (haweeney)", // nieuw, nalezen
    's.neighbours.1': "Waqti yar ayaan ku noolaa waddadan.", // nieuw, nalezen
    's.neighbours.2': "Maktabadda ayaan ku tababartaa Af-Holandiiska.", // nieuw, nalezen
    's.neighbours.3': "Waan ka xumahay dhibaatada.", // nieuw, nalezen
    'c.neighbours.q': "Salaan, waxaan ahay deriskaaga cusub.", // nieuw, nalezen
    'c.neighbours.a': "Ku faraxsanahay inaan ku barto! Waxaan ahay Ali.", // nieuw, nalezen
    'l.join': "Dugsiga, ciyaaraha iyo tabarucaadda", // nieuw, nalezen
    'w.vrijwilliger': "tabaruceha (qof caawiya isagoo aan lacag qaadan)", // nieuw, nalezen
    'w.vrijwilligerswerk': "shaqada tabarucaadda", // nieuw, nalezen
    'w.sportclub': "naadiga ciyaaraha", // nieuw, nalezen
    'w.ouderavond': "habeenka waalidiinta (dugsiga)", // nieuw, nalezen
    'w.leraar': "macallinka", // nieuw, nalezen
    'w.basisschool': "dugsiga hoose", // nieuw, nalezen
    's.join.1': "Wiilkaygu wuxuu dhigtaa dugsiga hoose.", // nieuw, nalezen
    's.join.2': "Kubadda cagta ayaan ka ciyaaraa naadi ciyaareed.", // nieuw, nalezen
    's.join.3': "Sabtida waxaan qabtaa shaqo tabarucaad ah.", // nieuw, nalezen
    'c.join.q': "Ma imanaysaa habeenka waalidiinta?", // nieuw, nalezen
    'c.join.a': "Haa. Waxaan jeclaan lahaa inaan la hadlo macallinka.", // nieuw, nalezen
    'l.workphotos': "Sawirro iyo xog", // nieuw, nalezen
    'w.gezicht': "wejiga", // nieuw, nalezen
    'w.klantgegevens': "xogta macmiilka (magaca, cinwaanka, taleefanka macmiil)", // nieuw, nalezen
    'w.onlinezetten': "internetka dhigid", // nieuw, nalezen
    'w.wissen': "tirtirid", // nieuw, nalezen
    'w.werktelefoon': "taleefanka shaqada", // nieuw, nalezen
    'w.bestand': "faylka (kombiyuutar ku jira)", // nieuw, nalezen
    's.workphotos.1': "Sawirro shaqada ah internetka ma dhigo.", // nieuw, nalezen
    's.workphotos.2': "Sawirka isla markiiba waan tirtiraa.", // nieuw, nalezen
    's.workphotos.3': "Wejigiisa ayaa sawirka ku jira.", // nieuw, nalezen
    'c.workphotos.q': "Ma kaa qaadi karaa sawir? Internetka loogu talagalay.", // nieuw, nalezen
    'c.workphotos.a': "Maya, ma doonayo. Ma rabo inaan internetka ku jiro.", // nieuw, nalezen
    'l.device': "Taleefan iyo kombiyuutar ammaan ah", // nieuw, nalezen
    'w.update': "cusboonaysiinta (nooc cusub oo app ama barnaamij ah)", // nieuw, nalezen
    'w.virus': "fayraska (barnaamij waxyeelleeya kombiyuutarkaaga)", // nieuw, nalezen
    'w.wifi': "wifi-ga", // nieuw, nalezen
    'w.usbstick': "USB-ga (flash)", // nieuw, nalezen
    'w.installeren': "rakibid", // nieuw, nalezen
    'w.openbaar': "dadweyne (qof walba)", // nieuw, nalezen
    's.device.1': "Caawa ayaan rakibayaa cusboonaysiinta.", // nieuw, nalezen
    's.device.2': "USB-gan wuxuu yaallay dhulka.", // nieuw, nalezen
    's.device.3': "Wifi-gan ma ammaan baa?", // nieuw, nalezen
    'c.device.q': "Ma ku shubi karaa app-kan taleefanka shaqada?", // nieuw, nalezen
    'c.device.a': "Marka hore weydii waaxda IT-ga.", // nieuw, nalezen
    'c.vacancy': "Wac, ama dir fariin gaaban", // nieuw, nalezen
    'c.vacancy.b': "Si fiican u akhri xayeysiiska: saacadaha, goobta, iyo waxa ay tahay inaad haysato, sida liisanka darawalnimada ama shahaado. Uma baahnid inaad wax walba haysato: haddii aad inta badan haysato, isku day si kastaba. Wac ama qor fariin gaaban: sheeg magacaaga, shaqada, iyo sababta aad u rabto. Weligaa lacag ha bixin si aad shaqo u hesho, oo weligaa ha u dirin koodhadhkaaga galitaanka xayeysiis.", // nieuw, nalezen
    'c.vacancy.p': "Shahaado ma haysto, laakiin khibrad badan ayaan leeyahay.", // nieuw, nalezen
    'c.vacancy.s': "Xayeysiis ayaa weydiinaya 3 sano oo khibrad ah. Waxaad leedahay 2 sano. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.vacancy.o1': "Si kastaba codso, oo sheeg waxa aad samayn karto.", // nieuw, nalezen
    'c.vacancy.o2': "Ha codsan: waxaad haysataa wax aad u yar.", // nieuw, nalezen
    'c.vacancy.o3': "Qor 3 sano: cidna ma hubiso.", // nieuw, nalezen
    'c.vacancy.w': "Xayeysiisku badanaa wuxuu weydiiyaa wax ka badan inta shaqadu dhab ahaan u baahan tahay. Inaad daacad ka ahaato waxa aad samayn karto ayaa ka fiican been.", // nieuw, nalezen
    'c.result': "Maya ma aha dhammaadka", // nieuw, nalezen
    'c.result.b': "Toddobaad kadib waxba ma maqlin? Waad dib u wici kartaa oo si edeb leh u weydiin kartaa. Maya ma lagu yiri? Weydii waxa aad mar kale si fiican u samayn karto: loo-shaqeeyayaal badan ayaa kuu sheega. Kadib mar kale isku day: dadka intooda badan marka hore dhowr maya ayay helaan. Haa ma lagu yiri? Weydii goorta aad bilaabayso, oo weydiiso qandaraaskaaga ka hor intaadan bilaabin. Maalin tijaabo ma laguu yeeray? Hore u weydii inta ay le'eg tahay, iyo in lacag laga bixiyo.", // nieuw, nalezen
    'c.result.p': "Maxaan mar kale si fiican u samayn karaa?", // nieuw, nalezen
    'c.result.s': "Wareysi shaqo kadib, maya ayaa lagugu soo diray e-mail. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.result.o1': "Si edeb leh u weydii waxa aad si fiican u samayn karto.", // nieuw, nalezen
    'c.result.o2': "Dib ugu qor inay qalad sameeyeen.", // nieuw, nalezen
    'c.result.o3': "Jooji codsashada: ma shaqaynayso.", // nieuw, nalezen
    'c.result.w': "Jawaab-celintu waxay kaa caawinaysaa wareysigaaga xiga. Su'aal edeb leh waxay sidoo kale kaa tagtaa sawir wanaagsan.", // nieuw, nalezen
    'c.residence': "Waraaqahaaga: hubi taariikhda", // nieuw, nalezen
    'c.residence.b': "Ma ka timid EU? Markaas waxaad halkan ku noolaan kartaa oo ka shaqayn kartaa baasaboor ama kaadh aqoonsi oo ansax ah: uma baahnid sharci. Ma ka timid meel ka baxsan EU? Markaas waxaad u baahan tahay sharci deganaansho oo ansax ah. Kaadhka waxaa ku qoran haddii aad shaqayn karto. Hubi taariikhda dhicitaanka waraaqahaaga. Sharci cusub ka codso IND waqtigiisa: bilo ka hor taariikhda, ha noqon toddobaadka ugu dambeeya. Hayso nuqul warqad kasta. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.residence.p': "Sharcigaygu dhowaan wuu dhacayaa. Maxay tahay inaan sameeyo?", // nieuw, nalezen
    'c.residence.s': "Sharcigaaga deganaanshaha wuxuu dhacayaa laba bilood kadib. Shaqada aad ayaad ugu mashquulsan tahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.residence.o1': "Hadda codso mid cusub.", // nieuw, nalezen
    'c.residence.o2': "Sug ilaa toddobaadka ugu dambeeya.", // nieuw, nalezen
    'c.residence.o3': "Waxba ha samayn: shaqada ayaa hormaraysa.", // nieuw, nalezen
    'c.residence.w': "Sharci ansax ah la'aantiis, waxaa laga yaabaa in lagu oggolaan waayo inaad shaqayso. Sharci cusub waqti ayuu qaataa, sidaas darteed goor hore ayaad bilaabaysaa.", // nieuw, nalezen
    'c.newhome': "Cinwaan cusub? U sheeg qof walba", // nieuw, nalezen
    'c.newhome.b': "Ma guuraysaa? Si dhakhso ah ugu sheeg gemeente cinwaankaaga cusub: waa inaad taas samaysaa. Sidoo kale u sheeg loo-shaqeeyahaaga, bangigaaga, caymiskaaga iyo dhakhtarkaaga. Magacaaga ku qor sanduuqa boostada, haddii kale warqaduhu kuuma soo gaarayaan. Maalinta guuritaanka, qor akhriska mitirada oo sawir ka qaad. Markaas waxaad bixinaysaa oo keliya waxa aad isticmaashay.", // nieuw, nalezen
    'c.newhome.p': "Waan guuray. Kani waa cinwaankayga cusub.", // nieuw, nalezen
    'c.newhome.s': "Laba toddobaad ka hor ayaad guurtay. Warqadahaagu weli waxay aadaan cinwaankaagii hore. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.newhome.o1': "Hadda sii gemeente cinwaankaaga cusub.", // nieuw, nalezen
    'c.newhome.o2': "Sug: boostadu way ku heli doontaa.", // nieuw, nalezen
    'c.newhome.o3': "Weydiiso derisikaagii hore inuu kuu hayo warqadahaaga.", // nieuw, nalezen
    'c.newhome.w': "Warqadaha muhiimka ah, sida ganaaxyada ama warqadaha canshuurta, waxay leeyihiin taariikho. Marka ay aadaan cinwaan khaldan, waa ku seegi kartaa.", // nieuw, nalezen
    'c.payparts': "Akhri sadar kasta", // nieuw, nalezen
    'c.payparts.b': "Warqadda mushaharkaaga waxay leedahay sadarro badan iyo erayo gaagaaban. Xagga sare: magacaaga, lambarkaaga shaqaalaha iyo muddada. Kadib mushaharkaaga guud, saacadahaaga iyo lacag dheeraad ah haddii ay jirto. Kadib waxa laga jaro: canshuurta iyo lacagaha caymiska. Shaqooyin badan, adiga iyo loo-shaqeeyahaagu labadiinaba waxaad bixisaan hawlgabkaaga: qaybtaada waxaad ku aragtaa warqadda mushaharkaaga. Xagga hoose: mushaharkaaga saafiga ah. Sadar ma fahmin? Weydii loo-shaqeeyahaaga inuu kuu sharxo. Hayso dhammaan warqadaha mushaharkaaga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.payparts.p': "Muxuu ka dhigan yahay sadarkan warqadda mushaharkayga?", // nieuw, nalezen
    'c.payparts.s': "Warqadda mushaharkaaga, lacag ayaa aadaysa “pensioen”. Ma garanaysid sababta. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.payparts.o1': "Weydii loo-shaqeeyahaaga inuu kuu sharxo.", // nieuw, nalezen
    'c.payparts.o2': "Codso in la joojiyo, si aad hadda lacag badan u hesho.", // nieuw, nalezen
    'c.payparts.o3': "Iska dhaaf: muddo dheer ma joogaysid.", // nieuw, nalezen
    'c.payparts.w': "Lacagta hawlgabka adiga ayaa laguu kaydiyaa, mustaqbalka. Badanaa waad sii haysaa marka aad shaqo beddesho. Weydiintu waxay kaa caawinaysaa inaad ogaato waxa adiga kuu gaar ah.", // nieuw, nalezen
    'c.latepay': "Mushahar daahay ama caddaan? Waqtiga ku dhaqaaq", // nieuw, nalezen
    'c.latepay.b': "Mushaharkaagu waa inuu yimaadaa maalinta ku qoran qandaraaskaaga ama cao. Ma daahay, mise lacag ayaa maqan? Qoraal ku weydii, tusaale ahaan e-mail. Hayso bayaanada bangigaaga iyo liiskaaga saacadaha. Lacag caddaan ah lagu siiyay, warqad mushahar la'aan? Markaas badanaa waa shaqo madow (zwart): saacadahaaga lama diiwaangelin, oo goor dambe way adag tahay inaad caddayso shaqadaada ama aad gunno hesho. Weydiiso warqad mushahar. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.latepay.p': "Mushaharkaygu weli ma soo gelin. Goorma ayuu imanayaa?", // nieuw, nalezen
    'c.latepay.s': "Madaxaaga ayaa yiri: “Hadda kadib lacag caddaan ah ayaan ku siinayaa. Warqad mushahar ma jirto, taasi way fududahay.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.latepay.o1': "Dheh maya, oo weydiiso warqad mushahar.", // nieuw, nalezen
    'c.latepay.o2': "Dheh haa: caddaanku waa lacag badan.", // nieuw, nalezen
    'c.latepay.o3': "Dheh haa, laakiin oo keliya bishan.", // nieuw, nalezen
    'c.latepay.w': "Warqad mushahar la'aanteed, shaqadaadu warqad kuma qorna. Markaas waxaad lumin kartaa xuquuq, tusaale ahaan gunno marka aad shaqada waydo.", // nieuw, nalezen
    'c.holiday': "Maalmahaaga fasaxa: waqtigooda isticmaal", // nieuw, nalezen
    'c.holiday.b': "Hubi inta maalmood ee fasax ah ee aad weli haysato: badanaa waxay ku qoran tahay warqadda mushaharkaaga ama app-ka. Fasaxaaga goor hore qorshee, oo qoraal ku weydii. Maalmaha fasaxa sharciga ah waxay dhacaan 6 bilood kadib dhammaadka sannadka, haddii aadan awoodin inaad qaadato mooyee. Maalmaha dheeraadka ah ee cao ama qandaraaskaaga muddo dheer ayay ansax ahaanayaan, badanaa 5 sano. Shaqadaadu ma dhammaanaysaa? Markaas lacag ayaad ku helaysaa maalmaha aadan qaadan. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.holiday.p': "Waxaan rabaa inaan maalmahayga fasaxa qaato sannadkan.", // nieuw, nalezen
    'c.holiday.s': "Waa November. Weli waxaad haysataa 12 maalmood oo fasax ah sannadkan. Madaxaagu waxba kama sheegin. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.holiday.o1': "Weydii goorta aad qaadan karto.", // nieuw, nalezen
    'c.holiday.o2': "Waxba ha samayn: weligood way jiraan.", // nieuw, nalezen
    'c.holiday.o3': "Iska illow: hadda way tageen.", // nieuw, nalezen
    'c.holiday.w': "Maalmaha fasaxu waa nasasho, wayna dhici karaan. Marka aad waqtiga ku weydiiso, weli waad qorshayn kartaa.", // nieuw, nalezen
    'c.special': "Aroos, aas, ilmo", // nieuw, nalezen
    'c.special.b': "Ilmahaagu ma dhashay, oo adigu ma lammaanaha baad tahay? Markaas waxaad helaysaa 1 toddobaad oo fasax dhalasho ah oo lacag leh, 4-ta toddobaad ee ugu horreeya gudahood. Cao-gaagu badanaa wuxuu bixiyaa fasax gaar ah (bijzonder verlof) arooskaaga, ama aas qoyskaaga ka dhacay. Maalmaha ciidaha, sida Kirismaska: sharci ma jiro oo leh waad fasaxan tahay. Qandaraaskaaga ama cao ayaa sheega haddii aad fasaxan tahay, ama haddii aad lacag dheeraad ah hesho. Maalmahaaga fasaxa waqtiga ku weydiiso. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.special.p': "Xaaskaygu waxay dhalaysaa ilmo. Sideen u codsadaa fasaxa dhalashada?", // nieuw, nalezen
    'c.special.s': "Aabbahaa ayaa dibadda ku dhintay. Waxaad rabtaa inaad aaska aaddo. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.special.o1': "U sheeg loo-shaqeeyahaaga, oo weydii fasaxa aad heli karto.", // nieuw, nalezen
    'c.special.o2': "Iska tag, oo u sheeg markaad soo noqoto.", // nieuw, nalezen
    'c.special.o3': "Ha tagin: maalmo fasax ah kuuma harin.", // nieuw, nalezen
    'c.special.w': "Loo-shaqeeyahaagu wuu fahmayaa in tani aad muhiim u tahay. Cao badan ayaa bixiya fasax gaar ah, oo sidoo kale waxaad isticmaali kartaa maalmahaaga fasaxa.", // nieuw, nalezen
    'c.unwell': "Ku xanuunsaday shaqada, ama fasaxa", // nieuw, nalezen
    'c.unwell.b': "Ma dareemaysaa xanuun shaqada? U sheeg madaxaaga ka hor intaadan guriga aadin: taasi waa sheegiddaada xanuunka. Ha iska tegin. Ma ku xanuunsatay fasaxaaga? U sheeg loo-shaqeeyahaaga si la mid ah sida guriga, xitaa adigoo dibadda jooga. Markaas maalmaha xanuunku badanaa looma xisaabiyo maalmo fasax. Waxaa laga yaabaa inaad u baahato warqad dhakhtar halkaas jooga. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.unwell.p': "Fasaxa ayaan ku xanuunsaday.", // nieuw, nalezen
    'c.unwell.s': "Waxaad fasax ku joogtaa waddankaagii. Hargab ayaa ku qabtay oo 5 maalmood ayaad sariirta ku jirtay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.unwell.o1': "Isla markiiba u sheeg loo-shaqeeyahaaga.", // nieuw, nalezen
    'c.unwell.o2': "Waxba: si kastaba waad fasax ku jirtaa.", // nieuw, nalezen
    'c.unwell.o3': "U sheeg loo-shaqeeyahaaga markaad soo noqoto.", // nieuw, nalezen
    'c.unwell.w': "Marka aad waqtiga ku sheegto, maalmaha xanuunku badanaa looma xisaabiyo maalmo fasax. Markaas maalmahaas weli goor dambe ayaad isticmaali kartaa.", // nieuw, nalezen
    'c.injury': "Ku dhaawacmay shaqada: qor", // nieuw, nalezen
    'c.injury.b': "Ma ku dhaawacantay shaqada? Qor waxa dhacay, goorta iyo meesha, iyo cidda aragtay. Sawirro qaad, oo hayso dhammaan waraaqaha dhakhtarka. Weydiiso nuqul warbixinta shilka. Ma ku dhaawacantay sababtoo ah shaqadu ammaan ma ahayn? Markaas loo-shaqeeyahaagu badanaa waa inuu bixiyaa khasaarahaaga. Uma baahnid inaad caddayso inay ahayd qaladkooda: loo-shaqeeyaha ayaa waajib ku ah inuu muujiyo inuu wax ku filan u sameeyay ammaankaaga. Talo weydiiso ka hor intaadan waxba saxeexin. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.injury.p': "Ma heli karaa nuqul warbixinta?", // nieuw, nalezen
    'c.injury.s': "Gacanta ayaad ku dhaawacantay mashiin aan ilaalin lahayn. Goor dambe, madaxaagu wuxuu kaa codsaday inaad saxeexdo warqad: “Waxay ahayd qaladkayga.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.injury.o1': "Ha saxeexin. Marka hore talo weydiiso.", // nieuw, nalezen
    'c.injury.o2': "Saxeex, si aysan dhibaato u dhicin.", // nieuw, nalezen
    'c.injury.o3': "Saxeex, laakiin sawir ka qaad.", // nieuw, nalezen
    'c.injury.w': "Waxa aad saxeexdo goor dambe ayuu xisaab noqon karaa, tusaale ahaan marka aad magdhaw codsato. Marka hore talo ka qaado ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.debt': "Deyn aan dhammaanayn", // nieuw, nalezen
    'c.debt.b': "Holland, xafiis shaqo-qoris ah lacag kaama weydiin karo inuu shaqo kuu helo. Ma ahayd inaad lacag u amaahato safarka ama shaqada, oo deyntu ma sii kordhaysaa? Ma waajib baa inaad joogto ilaa la bixiyo? Taasi waa calaamad ka faa'iidaysi xun. Deyntu weligeed macnaheedu maaha inaad sii shaqayso: waad joojin kartaa. Hayso warqad kasta iyo fariin kasta oo ku saabsan deynta. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.debt.p': "Immisa ayaa weli iga haray inaan bixiyo? Waxaan rabaa in la ii qoro.", // nieuw, nalezen
    'c.debt.s': "Xafiiska shaqo-qoristu wuxuu bixiyay tigidhkaaga baska. Hadda toddobaad kasta lacag ayuu kaa jaraa mushaharkaaga, deyntuna ma yaraanayso. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.debt.o1': "Weydiiso liis qoraal ah, oo caawimaad hel.", // nieuw, nalezen
    'c.debt.o2': "Saacado badan shaqee si aad dhakhso ugu bixiso.", // nieuw, nalezen
    'c.debt.o3': "Waxba ha odhan: xafiiska ayaa ku caawiyay.", // nieuw, nalezen
    'c.debt.w': "Deyn aan yaraanayn way ku xayirtaa. Liiskaas, ururka shaqaalaha ama FairWork ayaa ku hubin kara inay cadaalad tahay.", // nieuw, nalezen
    'c.inspection': "Kormeerku adiga ayuu kuu jiraa", // nieuw, nalezen
    'c.inspection.b': "Nederlandse Arbeidsinspectie waxay hubisaa in shaqadu ammaan tahay oo cadaalad tahay: mushaharka, saacadaha iyo ka faa'iidaysiga xun. Kormeerayaashu way iman karaan shaqadaada oo la hadli karaan shaqaalaha. Runta ayaad u sheegi kartaa: uma sheegaan madaxaaga cidda wax soo sheegtay. Ma u baahan tahay caawimaad luqaddaada? Weydiiso turjubaan. FairWork waxay bilaash u caawisaa dhibbanayaasha ka faa'iidaysiga xun, xitaa dadka aan haysan waraaqo ansax ah. Macluumaad guud. Xaaladdaada gaarka ah: weydii ururka shaqaalaha, Juridisch Loket ama FairWork.", // nieuw, nalezen
    'c.inspection.p': "Waxaan rabaa inaan wax sheego, laakiin madaxaygu yuusan joogin.", // nieuw, nalezen
    'c.inspection.s': "Kormeere ayaa ku weydiiyay saacadahaaga. Madaxaagu wuxuu kuu sheegay inaad dhahdo 8 saacadood. Waxaad shaqaysaa 12. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.inspection.o1': "U sheeg kormeeraha runta.", // nieuw, nalezen
    'c.inspection.o2': "Dheh 8 saacadood, sidii madaxaagu yiri.", // nieuw, nalezen
    'c.inspection.o3': "Waxba ha odhan, oo iska tag.", // nieuw, nalezen
    'c.inspection.w': "Kormeeraha wuxuu caawin karaa oo keliya marka uu runta ogaado. Waxa aad sheegto adiga ayay ku caawinaysaa, iyo saaxiibbadaada shaqada sidoo kale.", // nieuw, nalezen
    'c.carpool': "Baabuurka: suunka xiro, oo ku heshiiya kharashka", // nieuw, nalezen
    'c.carpool.b': "Qof kasta oo baabuurka ku jira wuxuu xirtaa suunka kursiga, xitaa gadaashiisa. Darawalku wuxuu u baahan yahay liisan darawalnimo oo ansax ah, oo waa inuusan khamri cabbin ka hor intaanu wadin. Dad aad u badan baabuurka, mise darawalku si khatar ah ayuu u wadaa? Sheeg, oo ha fuulin. Ma la wadaagtaa baabuurka saaxiibbadaada shaqada? Marka hore ku heshiiya sida aad u qaybsanaysaan kharashka shidaalka. Ma waxaad ku jirtaa baabuurka shaqada ee xafiiska shaqo-qorista? Weydii inta ay kaa qaadayso, oo qoraal ku hel.", // nieuw, nalezen
    'c.carpool.p': "Dad aad u badan ayaa baabuurka ku jira. Ma fuulayo.", // nieuw, nalezen
    'c.carpool.s': "Baabuurka shaqadu wuxuu leeyahay 9 kursi. Saaka 11 qof ayaa rabta inay fuulaan. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.carpool.o1': "Ha fuulin, oo wac madaxaaga.", // nieuw, nalezen
    'c.carpool.o2': "Dhulka gadaasha ku fadhiiso.", // nieuw, nalezen
    'c.carpool.o3': "Isku cadaadi: waa 20 daqiiqo oo keliya.", // nieuw, nalezen
    'c.carpool.w': "Kursi iyo suun la'aan, shil yar ayaa noqon kara mid aad u culus. Loo-shaqeeyahaaga ama xafiiska shaqo-qoristu waxay heli karaan xal kale.", // nieuw, nalezen
    'c.train': "Tareenku ma daahay? Isla markiiba fariin dir", // nieuw, nalezen
    'c.train.b': "Hubi qorsheeyaha safarka ka hor intaadan bixin: tareenada iyo basaska way daahi karaan ama waa la joojin karaa. Tareenkaagu ma daahay? Isla markiiba fariin u dir madaxaaga, oo ku dar waqtiga aad imanayso. Maalmaha duufaanta ama shaqada khadka, qaado tareen ka horreeya. Dib u dhac dheer kadib, badanaa lacag ayaad dib u heli kartaa: eeg websaydka shirkadda tareenka.", // nieuw, nalezen
    'c.train.p': "Tareenkaygu wuu daahay. Saacadda sagaalka ayaan iman doonaa.", // nieuw, nalezen
    'c.train.s': "Tareenkaagii waa la joojiyay. Kan xiga wuxuu baxayaa 30 daqiiqo kadib. Wareeggaaga shaqadu wuxuu bilaabmayaa 40 daqiiqo kadib. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.train.o1': "Hadda fariin dir inaad soo daahayso.", // nieuw, nalezen
    'c.train.o2': "Sug, oo sharax markaad timaado.", // nieuw, nalezen
    'c.train.o3': "Guriga aad: qaladkaaga ma aha.", // nieuw, nalezen
    'c.train.w': "Madaxaagu si fiican ayuu u qorshayn karaa marka uu goor hore ogaado. Dib u dhacu qaladkaaga ma aha, laakiin sheegiddiisu waa shaqadaada.", // nieuw, nalezen
    'c.checklist': "Marka hore adigu hubi", // nieuw, nalezen
    'c.checklist.b': "Ka hor intaadan dhihin “klaar”, hubi shaqadaada. Isticmaal liiska hubinta haddii mid jiro, oo calaamadi tallaabo kasta. Shaqadaada u eeg sidii adigoo macmiilka ah. Wax aan fiicnayn ma jiraan? Hadda mar kale samee: taasi way ka dhakhso badan tahay goor dambe. Ma hubtid? Weydiiso saaxiib shaqo inuu eego. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.checklist.p': "Waan dhammeeyay. Ma ii eegi kartaa wax yar?", // nieuw, nalezen
    'c.checklist.s': "Waad dhammaysay. Liiska hubinta, hal tallaabo lama calaamadin. Waxaad u malaynaysaa inaad samaysay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.checklist.o1': "Mar kale hubi tallaabadaas, kadibna calaamadi.", // nieuw, nalezen
    'c.checklist.o2': "Calaamadi: malaha waad samaysay.", // nieuw, nalezen
    'c.checklist.o3': "Furan uga tag: cidna liiska ma akhriso.", // nieuw, nalezen
    'c.checklist.w': "Liiska hubintu wuxuu caawiyaa oo keliya marka uu run yahay. Mar kale eegid waxay qaadataa hal daqiiqo. Qalad wuxuu qaadan karaa saacado.", // nieuw, nalezen
    'c.leavesite': "Uga tag sida aad rabto inaad u hesho", // nieuw, nalezen
    'c.leavesite.b': "Dhammaadka shaqadaada, meeshaada uga tag nadiif oo ammaan ah. Qalabka iyo agabka dib u celi, oo dabaqa xaaq. Dami mashiinada iyo nalalka aad isticmaashay. Ma adigaa ugu dambeeya? Hubi daaqadaha iyo albaabada, oo u qufulo sida shirkaddaadu sheegto. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.leavesite.p': "Aniga ayaa ugu dambeeya. Ma waajib baa inaan albaabka qufulo?", // nieuw, nalezen
    'c.leavesite.s': "Adiga ayaa shaqada ugu dambeeya. Ma taqaanid sida alaarmiga loo shido. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.leavesite.o1': "Wac madaxaaga oo weydii.", // nieuw, nalezen
    'c.leavesite.o2': "Alaarmi la'aan ka bax: waa goor dambe.", // nieuw, nalezen
    'c.leavesite.o3': "Badhamada isku day ilaa uu dhawaaqo.", // nieuw, nalezen
    'c.leavesite.w': "Dhisme aan alaarmi lahayn ammaan ma aha. Madaxaagu wuxuu door bidaa inuu helo wicitaan intii uu berri dhibaato heli lahaa.", // nieuw, nalezen
    'c.stagedays': "Arday, iyo saaxiib shaqo", // nieuw, nalezen
    'c.stagedays.b': "Tababarka shaqada waxaad u joogtaa inaad wax barato, laakiin waxaad u shaqaysaa sida saaxiib shaqo: waqtiga, xeerarka guriga, oo waad wacdaa marka aad xanuunsan tahay. Su'aalo badan ayaad weydiin kartaa: taasi waa sababta aad u joogto. Shaqadaadu waa inay kaa caawisaa inaad wax barato, ma aha oo keliya nadiifin ama xambaarid maalinta oo dhan. Sidaas ma aha? La hadal hagahaaga tababarka ee dugsiga. Gunnada tababarka had iyo jeer lama bixiyo: weydii ka hor intaadan bilaabin. Xeerarku way ku kala duwan yihiin dugsi kasta: weydii hagahaaga tababarka.", // nieuw, nalezen
    'c.stagedays.p': "Tan sidoo kale waxaan rabaa inaan barto. Ma daawan karaa?", // nieuw, nalezen
    'c.stagedays.s': "Tababarkaaga shaqada waxaad oo keliya nadiifisaa maqaaxida shaqaalaha, maalin kasta, saddex toddobaad. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.stagedays.o1': "Kala hadal hagahaaga tababarka.", // nieuw, nalezen
    'c.stagedays.o2': "Samee oo waxba ha odhan: arday baad tahay.", // nieuw, nalezen
    'c.stagedays.o3': "Guriga joog ilaa ay shaqo kale ku siiyaan.", // nieuw, nalezen
    'c.stagedays.w': "Tababarka shaqadu waa in lagu barto xirfaddaada. Hagahaagu wuxuu shirkadda kala hadli karaa hawlo ka wanaagsan.", // nieuw, nalezen
    'c.stageend': "Si fiican u dhammee, oo weydiiso tixraac", // nieuw, nalezen
    'c.stageend.b': "Wada-hadalka dhammaadka waxaad ku maqlaysaa waxa si fiican u socday iyo waxa ka fiicnaan kara. Weydiiso tusaalooyin, oo u qor shaqadaada xigta. Si fiican ma u dhacday? Weydii haddii aad magacooda u bixin karto tixraac ahaan. Maalintaada ugu dambaysa, u mahadceli saaxiibbadaada shaqada: dad badan oo halkan jooga ayaa keena wax yar oo la cuno, sida keeg ama nacnac. Xeerarku way ku kala duwan yihiin dugsi kasta: weydii hagahaaga tababarka.", // nieuw, nalezen
    'c.stageend.p': "Ma bixin karaa magacaaga tixraac ahaan?", // nieuw, nalezen
    'c.stageend.s': "Waa maalinta ugu dambaysa ee tababarkaaga shaqada. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.stageend.o1': "U mahadceli saaxiibbadaada shaqada, oo nabadgelyo dheh.", // nieuw, nalezen
    'c.stageend.o2': "Si aamusan u bax, adigoon waxba odhan.", // nieuw, nalezen
    'c.stageend.o3': "Shirkadda ka codso hadiyad.", // nieuw, nalezen
    'c.stageend.w': "Nabadgelyo wanaagsan waxay kaa tagtaa sawir wanaagsan. Waxaa laga yaabaa inaad goor dambe rabto inaad halkaas ka shaqayso, ama aad u baahato inay tixraac kuu noqdaan.", // nieuw, nalezen
    'c.neighbours': "Salaan deriskaaga", // nieuw, nalezen
    'c.neighbours.b': "Ma ku cusub tahay waddo? Salaan deriskaaga oo u sheeg magacaaga. Taasi waxay goor dambe fududaysaa xallinta dhibaatooyinka. Ma habeenkii ayaad shaqaysaa, mise dad badan ayaad la nooshahay? Aamus fiidka dambe iyo habeenkii. Qashinkaaga bannaanka dhig maalinta saxda ah. Maktabadda iyo xarunta xaafadda badanaa waxaad ku tababaran kartaa Af-Holandiiska, mararka qaarkood bilaash.", // nieuw, nalezen
    'c.neighbours.p': "Salaan, waxaan ahay Ali. Waxaan ku noolahay dhinaca.", // nieuw, nalezen
    'c.neighbours.s': "Waxaad la nooshahay shan saaxiib shaqo. Deris ayaa yiri habeenkii badanaa waa buuq. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.neighbours.o1': "Raali gelin bixi, oo ku heshiiya inaad aamusaysaan.", // nieuw, nalezen
    'c.neighbours.o2': "Dheh dhammaantiin waad shaqaysaan oo waxaad u baahan tihiin nasasho.", // nieuw, nalezen
    'c.neighbours.o3': "Waxba ha odhan, oo albaabka xir.", // nieuw, nalezen
    'c.neighbours.w': "Wada-hadal wanaagsan oo goor hore ah ayaa joojiya dhibaatooyin waaweyn. Deriska ku yaqaan badanaa way ka saaxiibtinimo iyo caawimaad badan yihiin.", // nieuw, nalezen
    'c.join': "Ka qayb qaado: Af-Holandiiska si dhakhso ah ayaad u baranaysaa", // nieuw, nalezen
    'c.join.b': "Shaqada dibaddeeda, Af-Holandiiska waxaad sida ugu dhakhsaha badan u barataa adigoo dad wax la qabanaya: ciyaaraha, naadi, ama shaqo tabarucaad ah. Ilmahaagu ma dugsi buu dhigtaa? Aad habeenka waalidiinta, xitaa haddii Af-Holandiiskaagu aanu dhammaystirnayn: macallinku wuxuu rabaa inuu ku barto. Waxaad codsan kartaa Af-Holandiis tartiib ah, ama isticmaal app turjumaad. Shaqada tabarucaaddu sidoo kale si fiican ayay ugu muuqataa CV-gaaga.", // nieuw, nalezen
    'c.join.p': "Ma ii hadli kartaa wax yar oo tartiib ah?", // nieuw, nalezen
    'c.join.s': "Waxaa lagugu casuumay habeenka waalidiinta. Af-Holandiiskaagu weli ma fiicna. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.join.o1': "Aad, oo isticmaal Af-Holandiis fudud ama app.", // nieuw, nalezen
    'c.join.o2': "Ha aadin: macallinku ku fahmi maayo.", // nieuw, nalezen
    'c.join.o3': "Dir fariin gaaban oo ah inaad mashquul tahay.", // nieuw, nalezen
    'c.join.w': "Macallinku wuxuu rabaa inuu kaala hadlo ilmahaaga, ma aha Af-Holandiiskaaga. Imaatinkaagu wuxuu muujinayaa inaad dan ka leedahay.", // nieuw, nalezen
    'c.workphotos': "Marka hore weydii, kadib dhig", // nieuw, nalezen
    'c.workphotos.b': "Sawir shaqada laga qaaday wuxuu muujin karaa wax ka badan inta aad u malaynayso: macmiil, qof aad u adeegto, shaashad ama warqad magacyo leh. Sawirro shaqada ah internetka ha dhigin oggolaansho la'aan loo-shaqeeyahaaga, oo weligaa ha dhigin sawirro dad ah haa-dooda la'aan. Xogta macmiilka shaqada ayay ku hartaa: ha u dirin taleefankaaga ama e-mailkaaga. Si qalad ah ma wax u dirtay? Isla markiiba u sheeg madaxaaga. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.workphotos.p': "Marka hore oggolaansho ayaan weydiisanayaa.", // nieuw, nalezen
    'c.workphotos.s': "Saaxiib shaqo ayaa sawir qosol leh oo macmiil ah gelinaya app-ka kooxda. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.workphotos.o1': "Dheh taasi ma fiicna, oo ha wadaagin.", // nieuw, nalezen
    'c.workphotos.o2': "Wadaag: waa app-ka kooxda oo keliya.", // nieuw, nalezen
    'c.workphotos.o3': "Like sii, laakiin ha wadaagin.", // nieuw, nalezen
    'c.workphotos.w': "Macmiilku haa kuma odhan sawirkan. Sawirrada app ku jira meel kasta ayay si dhakhso ah u gaari karaan. Inaad si naxariis leh u sheegto waxay ilaalinaysaa macmiilka iyo saaxiibkaaga shaqada.", // nieuw, nalezen
    'c.device': "Cusboonaysiin haa, USB aan la aqoon maya", // nieuw, nalezen
    'c.device.b': "Ku rakib cusboonaysiinta taleefankaaga iyo kombiyuutarkaaga: waxay xiraan godadka ay hackers-ku isticmaalaan. Ma heshay USB? Ha gelin kombiyuutarkaaga: sii waaxda IT-ga. Taleefanka ama kombiyuutarka shaqada, ku rakib oo keliya apps ay shaqadaadu oggoshahay. Wifi dadweyne, ha ka gelin bangigaaga ama shaqadaada. Taleefankaaga ku xir koodh. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.device.p': "USB ayaan helay. Maxaan ku sameeyaa?", // nieuw, nalezen
    'c.device.s': "Waxaad USB ka heshay goobta baabuurta la dhigto. Waxaa ku qoran “Salaris”. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.device.o1': "Sii waaxda IT-ga.", // nieuw, nalezen
    'c.device.o2': "Geli kombiyuutarkaaga si aad u ogaato cidda iska leh.", // nieuw, nalezen
    'c.device.o3': "Guriga u qaado oo halkaas ku eeg.", // nieuw, nalezen
    'c.device.w': "USB wuxuu ku jiri karaa fayras, xitaa marka uu u eeg yahay mid xiiso leh. Waaxda IT-ga ayaa si ammaan ah u hubin karta.", // nieuw, nalezen
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "Badbaadada shaqada", // nieuw, nalezen
    'l.vog': "Waayahaagii hore: VOG-ga", // nieuw, nalezen
    'w.vog': "shahaadada dhaqan-wanaagga (VOG: warqad dowladda ka timaadda oo sheegta in waayahaagii hore aysan dhibaato u ahayn shaqadan)", // nieuw, nalezen
    'w.strafblad': "diiwaanka dembiyada (dembiyada maxkamad kugu xukuntay)", // nieuw, nalezen
    'w.screening': "baaritaanka taariikhda (hubinta waayahaagii hore kahor intaadan bilaabin)", // nieuw, nalezen
    'w.personenregister': "diiwaanka daryeelka carruurta (qof kasta oo ka shaqeeya daryeelka carruurta waa inuu ku jiraa)", // nieuw, nalezen
    'w.beveiligerspas': "kaarka ilaalada (kaarka aad u baahan tahay si aad ilaalo ahaan u shaqeyso)", // nieuw, nalezen
    'w.verleden': "waayihii hore", // nieuw, nalezen
    's.vog.1': "Shaqada daryeelka had iyo jeer ku dhowaad waxay weydiiyaan VOG.", // nieuw, nalezen
    's.vog.2': "Waxaan haystaa VOG, waxaanan ku jiraa diiwaanka daryeelka carruurta.", // nieuw, nalezen
    's.vog.3': "Kaarka ilaalada waxaan helayaa baaritaanka taariikhda kadib.", // nieuw, nalezen
    'c.vog.q': "Xafiiska shaqo-qoristu wuxuu weydiinayaa VOG. Weli ma haysataa?", // nieuw, nalezen
    'c.vog.a': "Maya. Weli waxaan sugayaa iimaylka Justis.", // nieuw, nalezen
    'l.safetysigns': "Calaamadaha badbaadada", // nieuw, nalezen
    'w.verbodsbord': "calaamadda mamnuucidda (goobaabin cas oo xariiq ka gudubto: tan lama samayn karo)", // nieuw, nalezen
    'w.gebodsbord': "calaamadda waajibka (goobaabin buluug ah oo sawir cad leh: tan waa inaad samaysaa)", // nieuw, nalezen
    'w.waarschuwingsbord': "calaamadda digniinta (saddex-xagal jaalle ah oo gees madow leh: taxaddar, khatar)", // nieuw, nalezen
    'w.reddingsbord': "calaamadda badbaadinta (laydi cagaar ah: jidka bannaanka loo baxo, ama gargaarka degdegga ah)", // nieuw, nalezen
    'w.brandbord': "calaamadda qalabka dabka (afargees cas: halkan waxaa yaal qalabka dab-demiska ama tuubada dabka)", // nieuw, nalezen
    'w.pictogram': "sawir-calaamadeedka (sawir fudud oo wax sheega erayo la'aan)", // nieuw, nalezen
    's.safetysigns.1': "Calaamad cas oo wareegsan waxay ka dhigan tahay: tan lama oggola.", // nieuw, nalezen
    's.safetysigns.2': "Calaamad buluug ah waxay sheegtaa waxa ay tahay inaad samayso.", // nieuw, nalezen
    's.safetysigns.3': "Raac calaamadaha cagaaran ilaa albaabka gurmadka.", // nieuw, nalezen
    'c.safetysigns.q': "Calaamaddan jaallaha ah maxay ka dhigan tahay?", // nieuw, nalezen
    'c.safetysigns.a': "Taxaddar, khatar. Waa calaamad digniin.", // nieuw, nalezen
    'l.substances': "Walxaha khatarta ah", // nieuw, nalezen
    'w.stofmasker': "maaskarada boodhka (waxay daboolaa sankaaga iyo afkaaga)", // nieuw, nalezen
    'w.giftig': "sun ah", // nieuw, nalezen
    'w.bijtend': "gubaya (wuxuu gubaa maqaarkaaga ama cunaa birta)", // nieuw, nalezen
    'w.drinkfles': "dhalada cabbitaanka", // nieuw, nalezen
    'w.opbergen': "meel dhigid (meeshiisa gaarka ah, tusaale ahaan armaajo la quful karo)", // nieuw, nalezen
    'w.dop': "daboolka (dhalo ama gasac)", // nieuw, nalezen
    's.substances.1': "Marka hore eeg astaanta khatarta ee calaamadda.", // nieuw, nalezen
    's.substances.2': "Weligaa ha ku shubin dhalo cabbitaan.", // nieuw, nalezen
    's.substances.3': "Halkan waa inaad xirataa maaskarada boodhka.", // nieuw, nalezen
    'c.substances.q': "Alaabtani ma sun baa?", // nieuw, nalezen
    'c.substances.a': "Taas waxay ku qoran tahay warqadda badbaadada. Waan eegayaa.", // nieuw, nalezen
    'l.firefight': "Dab", // nieuw, nalezen
    'w.branddriehoek': "saddex-xagalka dabka (dabku wuxuu u baahan yahay shidaal, hawo iyo kulayl; mid ka qaad, dabkuna wuu demayaa)", // nieuw, nalezen
    'w.zuurstof': "ogsijiinta (waxay ku jirtaa hawada; dabku wuu u baahan yahay)", // nieuw, nalezen
    'w.blussen': "demin (dab)", // nieuw, nalezen
    'w.blusdeken': "bustaha dab-demiska", // nieuw, nalezen
    'w.openvuur': "dab furan (olol, tusaale ahaan mid laydar ama dab-shiid gaas ka yimaada)", // nieuw, nalezen
    'w.brandslang': "tuubada dabka (waxay ku duuban tahay giraan derbiga ku taal)", // nieuw, nalezen
    's.firefight.1': "Weligaa biyo ha ku tuurin saliid gubanaysa.", // nieuw, nalezen
    's.firefight.2': "Dab yar oo keliya ayaad adigu demisaa.", // nieuw, nalezen
    's.firefight.3': "Bustaha dab-demiska saar digsiga.", // nieuw, nalezen
    'c.firefight.q': "Dab ayaa ka kacay qashin-qubka!", // nieuw, nalezen
    'c.firefight.a': "Waa yar yahay. Waan keenayaa qalabka dab-demiska.", // nieuw, nalezen
    'l.permitwork': "Ogolaanshaha shaqada, meelaha xiran iyo kor u qaadidda", // nieuw, nalezen
    'w.werkvergunningveilig': "ogolaanshaha shaqada khatarta ah (warqad badbaado oo loogu talagalay shaqo khatar ah: maxaa, xaggee iyo khataraha; ma aha warqadahaaga deganaanshaha ama shaqada)", // nieuw, nalezen
    'w.beslotenruimte': "meesha xiran (taangi, god ama tuubada bullaacadda: yar, hawo nadiif ah oo yar)", // nieuw, nalezen
    'w.gasmeting': "cabbiraadda gaaska (hawada ayaad cabbirtaa kahor intaadan gelin)", // nieuw, nalezen
    'w.mangatwacht': "ilaaliyaha godka (qofka ku hara bannaanka, albaabka agtiisa, xiriirka sii haya oo alaarmiga bixiya)", // nieuw, nalezen
    'w.signaalgever': "calaamad-bixiyaha (qofka darawalka kireenka calaamado gacmeed siiya)", // nieuw, nalezen
    'w.hijsen': "kor u qaadid (culays, kireen lagu qaado)", // nieuw, nalezen
    's.permitwork.1': "Ogolaanshaha shaqada khatarta ah la'aantiis ma bilaabno.", // nieuw, nalezen
    's.permitwork.2': "Marka hore cabbiraadda gaaska, kaddib oo keliya meesha xiran gal.", // nieuw, nalezen
    's.permitwork.3': "Eeg calaamad-bixiyaha: kor u qaad, hoos u dhig, jooji.", // nieuw, nalezen
    'c.permitwork.q': "Yaa bannaanka ku haraya taangiga agtiisa?", // nieuw, nalezen
    'c.permitwork.a': "Aniga. Anigaa ah ilaaliyaha godka.", // nieuw, nalezen
    'c.vog': "VOG-ga: hubinta waayahaagii hore", // nieuw, nalezen
    'c.vog.b': "Shaqooyinka qaarkood, xafiiska shaqo-qorista ama loo-shaqeeyaha ayaa weydiiya VOG (Verklaring Omtrent het Gedrag). Waa warqad dowladda ka timaadda: waxay sheegtaa in waayahaagii hore aysan dhibaato u ahayn shaqadan. Daryeelka, daryeelka carruurta iyo shaqada ilaalada ku dhowaad had iyo jeer waad u baahan tahay. Badanaa loo-shaqeeyaha ayaa codsiga ka bilaaba onlayn. Waxaad iimayl ka heshaa Justis, adiguna waxaad ku dhammaysaa DigiD oo waad bixisaa. Marka hore weydii cidda bixinaysa: badanaa loo-shaqeeyaha ayaa lacagta kuu celiya. Mutadawacyada la shaqeeya carruurta ama dadka nugul badanaa waa bilaash. Ma leedahay diiwaan dembi? Taasi had iyo jeer macnaheedu ma aha VOG la'aan: Justis wuxuu eegaa waxa muhiimka u ah shaqadan. Ma hubtid? Weydii Juridisch Loket. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.vog.p': "Ma waa inaan VOG-ga anigu bixiyaa?", // nieuw, nalezen
    'c.vog.s': "Shaqadaada cusub ee guriga daryeelka ayaa weydiinaysa VOG. Sanado ka hor, dhibaato ayaad la lahayd booliiska. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.vog.o1': "Codso, oo weydii Juridisch Loket haddii aad walwalsan tahay.", // nieuw, nalezen
    'c.vog.o2': "Ha codsan: weligaa ma heli doontid.", // nieuw, nalezen
    'c.vog.o3': "Dheh waqti ma haysatid, oo raadi shaqo kale.", // nieuw, nalezen
    'c.vog.w': "Justis wuxuu eegaa oo keliya waxa muhiimka u ah shaqada. Dad badan oo waayahoodii hore wax ku jiraan ayaa weli hela VOG. Talo ayaa ku caawisa haddii aadan hubin.", // nieuw, nalezen
    'c.safetysigns': "Waa maxay VCA?", // nieuw, nalezen
    'c.safetysigns.b': "VCA waa shahaado badbaado. Shirkado badan, sidoo kale adigoo maraya xafiis shaqo-qoris, ayaa weydiiya, tusaale ahaan dhismaha iyo warshadaha. Shaqaalaha badankoodu waxay qaataan B-VCA (VCA Basis); madaxa shaqadu wuxuu qaataa VOL-VCA. Waxaad qaadataa koorso, iyo imtixaan su'aalo doorasho leh oo laga qaado xarun imtixaan oo la aqoonsan yahay. Imtixaanka badanaa waxaad ku qaadan kartaa luuqado kala duwan, tusaale ahaan Ingiriis ama Boolish: weydii xarunta imtixaanka. Shahaadadu waxay ansax tahay 10 sano. Badanaa loo-shaqeeyaha ama xafiiska shaqo-qorista ayaa bixiya: weydii kahor intaadan adigu bixin. Xafiiska shaqo-qoristu ma jari karo kharash kasta oo uu doono mushaharkaaga (eeg mawduuca shaqada xafiiska shaqo-qorista). Casharradan waxaad ku baranaysaa erayo ka mid ah kuwa aad kala kulanto shaqada ammaanka ah iyo VCA. VCA waxaad u qaadataa koorso iyo imtixaan. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama Juridisch Loket.", // nieuw, nalezen
    'c.safetysigns.p': "Yaa bixiya koorsada VCA?", // nieuw, nalezen
    'c.safetysigns.s': "Xafiis shaqo-qoris ayaa yiri: “Waxaad u baahan tahay VCA. Koorsada adigaa bixinaya, ama waxaan ka jaraynaa mushaharkaaga.” Maxaad samaynaysaa?", // nieuw, nalezen
    'c.safetysigns.o1': "Weydii cidda bixinaysa, oo qoraal ku hel.", // nieuw, nalezen
    'c.safetysigns.o2': "Isla markiiba bixi, si aad shaqada u hesho.", // nieuw, nalezen
    'c.safetysigns.o3': "Waxba ha odhan, oo saxiix.", // nieuw, nalezen
    'c.safetysigns.w': "Badanaa loo-shaqeeyaha ama xafiiska shaqo-qorista ayaa bixiya VCA. Haddii ay tahay inaad wax bixiso, waxaad rabtaa inaad horay u ogaato, warqad ku qoran.", // nieuw, nalezen
    'c.substances': "Akhri calaamadda, kadibna shaqee", // nieuw, nalezen
    'c.substances.b': "Alaab khatar ah waxay calaamaddeeda ku leedahay dheeman cas oo sawir madow ku dhex jiro: astaanta khatarta. Sawirku wuxuu muujiyaa khatarta, tusaale ahaan dab, sun, ama alaab maqaarkaaga gubta. Calaamadda iyo warqadda badbaadada (veiligheidsblad) waxay sheegaan sida si ammaan ah loogu shaqeeyo, iyo waxa la sameeyo haddii wax khaldamaan. Xiro waxa ay sheegaan: gacmo-gashiyo, muraayadaha badbaadada ama maaskaro. Xir daboolka, oo alaabta dhig meeshiisa gaarka ah. Weligaa ha ku shubin dhalo cabbitaan: qof ayaa cabbi kara. Ha cunin, ha cabbin, hana sigaar cabbin inta aad la shaqaynayso, oo gacmahaaga dhaq kadib. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.substances.p': "Xagee ku taal warqadda badbaadada ee alaabtan?", // nieuw, nalezen
    'c.substances.s': "Saaxiib shaqo ayaa alaab nadiifineed ku shubay dhalo biyo oo madhan, si uu u qaato. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.substances.o1': "Dheh waa khatar: qof ayaa cabbi kara.", // nieuw, nalezen
    'c.substances.o2': "Waxba: waa dhaladiisa.", // nieuw, nalezen
    'c.substances.o3': "Dhalada ku dheji calaamad yar oo dheg ah.", // nieuw, nalezen
    'c.substances.w': "Dhalo cabbitaan gudaheed, alaabtu waxay u ekaataa biyo ama cabbitaan macaan. Qof ayaa si qalad ah u cabbi kara. Alaabtu waxay ku jirtaa baakadkeeda, calaamadda la leh.", // nieuw, nalezen
    'c.firefight': "Dab yar mise dab weyn?", // nieuw, nalezen
    'c.firefight.b': "Dabku wuxuu u baahan yahay saddex shay: shidaal, hawo iyo kulayl. Tani waa saddex-xagalka dabka. Mid ka qaad, dabkuna wuu demayaa. Bustaha dab-demisku wuxuu qaadaa hawada. Biyuhu waxay qaadaan kulaylka, laakiin weligaa biyo ha ku isticmaalin saliid ama subag gubanaya, ama qalab koronto. Eeg qalabka dab-demiska: wuxuu sheegaa waxa loogu talagalay. Xumbada iyo budadu waxay ku shaqeeyaan dab badan; CO2 wuxuu u fiican yahay dabka korontada. Dhimbiilaha iyo dabka furan ka fogee alaabta si fudud u gubata. Dab yar oo keliya adigu demi, oo keliya marka ay ammaan tahay. Ma ka weyn yahay? Bax, albaabka xir markaad dhaafto, oo alaarmiga bixi. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.firefight.p': "Xagee ku sudhan yahay bustaha dab-demisku?", // nieuw, nalezen
    'c.firefight.s': "Saliid digsi ku jirta ayaa dab qabsatay maqaayadda shaqada. Ololku weli waa yar yahay. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.firefight.o1': "Bustaha dab-demiska saar digsiga.", // nieuw, nalezen
    'c.firefight.o2': "Koob biyo ah ku tuur.", // nieuw, nalezen
    'c.firefight.o3': "Digsiga u qaad bannaanka.", // nieuw, nalezen
    'c.firefight.w': "Biyo saliid gubanaysa lagu shubo waxay sameeyaan kubbad dab oo weyn. Bustuhu wuxuu qaadaa hawada, dabkuna wuu demayaa. Dami kulaylka haddii aad awoodo.", // nieuw, nalezen
    'c.permitwork': "Shaqo khatar ah: marka hore ogolaanshaha", // nieuw, nalezen
    'c.permitwork.b': "Shaqo khatar ah, sida alxanka meel u dhow waxyaabo guba, ama shaqo taangi ama god gudihiisa, shirkaddu badanaa waxay isticmaashaa ogolaanshaha shaqada khatarta ah (werkvergunning). Tani waa warqad badbaado, ma aha warqadahaaga deganaanshaha ama shaqada. Waxay sheegtaa waxa aad qabanayso, meesha, khataraha jira, iyo waxa laga qabanayo. Akhri, oo bilow oo keliya marka la saxiixo. Meel xiran waxaa ku jiri kara hawo aad u yar ama gaas khatar ah: marka hore cabbiraadda gaaska, ilaaliyaha godkuna bannaanka ayuu joogaa. Qof gudaha ku jira ma dhibaato ku jiraa? Alaarmiga bixi: weligaa ha gelin ilaalin la'aan. Kireenka, hal qof ayaa calaamadaha bixiya: calaamad-bixiyaha. Weligaa ha istaagin culays sudhan hoostiisa. Xeerarku way ku kala duwan yihiin shirkad kasta: weydii madaxaaga waxa ay yihiin xeerarka meesha aad ka shaqeyso.", // nieuw, nalezen
    'c.permitwork.p': "Ogolaanshaha shaqada khatarta ah weli ma la saxiixay?", // nieuw, nalezen
    'c.permitwork.s': "Saaxiibkaa shaqada ee taangiga ku jira ma jawaabayo. Adigu waxaad tahay ilaaliyaha godka. Maxaad samaynaysaa?", // nieuw, nalezen
    'c.permitwork.o1': "Alaarmiga bixi, oo bannaanka joog.", // nieuw, nalezen
    'c.permitwork.o2': "Si dhakhso ah u gal si aad u caawiso.", // nieuw, nalezen
    'c.permitwork.o3': "Sug dhowr daqiiqo, kadib eeg.", // nieuw, nalezen
    'c.permitwork.w': "Gaaska dhaawacay saaxiibkaa adigana wuu ku dhaawici karaa. Dhibbanayaal badan oo taangiyada ku jiray waxay ahaayeen caawiyayaal. Alaarmiga kadib, caawimo ilaalin leh ayaa timaadda.", // nieuw, nalezen
  },
};

export default t;

