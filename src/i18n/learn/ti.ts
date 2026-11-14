import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: { m: "ማይክሮፎን ኣየድልን። ብዓው ኢልካ በሎ፡ ድሕሪኡ ቀጽል።", f: "ማይክሮፎን ኣየድልን። ብዓው ኢልኪ በልዮ፡ ድሕሪኡ ቀጽሊ።" },
    micRetry: { m: "ማይክሮፎን ደጊምካ ፈትን", f: "ማይክሮፎን ደጊምኪ ፈትኒ", x: 'ማይክሮፎን ደጊምኩም ፈትኑ' }, // x: nieuw, nalezen
    micFailed: { m: "ማይክሮፎን ኣይሰርሐን። ብዓው ኢልካ በሎ፡ ድሕሪኡ ቀጽል።", f: "ማይክሮፎን ኣይሰርሐን። ብዓው ኢልኪ በልዮ፡ ድሕሪኡ ቀጽሊ።" },
    micRefused: { m: "እታ ኣፕ ማይክሮፎንካ ክትጥቀም ኣይተፈቕደላን። ክትከፍቶ ትኽእል ኢኻ።", f: "እታ ኣፕ ማይክሮፎንኪ ክትጥቀም ኣይተፈቕደላን። ክትከፍትዮ ትኽእሊ ኢኺ።", x: "እታ ኣፕ ማይክሮፎንኩም ክትጥቀም ኣይተፈቕደላን። ክትከፍትዎ ትኽእሉ ኢኹም።" }, // nieuw, nalezen
    micTurnOn: { m: "ማይክሮፎን ክፈት", f: "ማይክሮፎን ክፈቲ", x: "ማይክሮፎን ክፈቱ" }, // nieuw, nalezen
    micStepsIos: { m: "ኣብ መስመር ኣድራሻ “•••” ወይ “aA” ጠውቕ › “Website Settings” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “Safari” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቕ።", f: "ኣብ መስመር ኣድራሻ “•••” ወይ “aA” ጠውቒ › “Website Settings” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “Safari” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቒ።", x: "ኣብ መስመር ኣድራሻ “•••” ወይ “aA” ጠውቑ › “Website Settings” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “Safari” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቑ።" }, // nieuw, nalezen
    micStepsIosOther: { m: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቕ › “Permissions” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “{app}” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቕ።", f: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቒ › “Permissions” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “{app}” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቒ።", x: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቑ › “Permissions” › “Microphone” › “Allow”። ወይ: “Settings” › “Apps” › “{app}” › “Microphone”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቑ።" }, // nieuw, nalezen
    micStepsAndroid: { m: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቕ › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቕ።", f: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቒ › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቒ።", x: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቑ › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቑ።" }, // nieuw, nalezen
    micStepsAndroidApp: { m: "ምልክት Vloertaal ኣብ ቀንዲ ስክሪን ጠዊቕካ ሓዝ › “App info” › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቕ።", f: "ምልክት Vloertaal ኣብ ቀንዲ ስክሪን ጠዊቕኪ ሓዝዮ › “App info” › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቒ።", x: "ምልክት Vloertaal ኣብ ቀንዲ ስክሪን ጠዊቕኩም ሓዙ › “App info” › “Permissions” › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቑ።" }, // nieuw, nalezen
    micStepsDesktop: { m: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቕ › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቕ።", f: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቒ › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቒ።", x: "ኣብ ጸጋም እቲ ኣድራሻ ዘሎ ምልክት ጠውቑ › “Microphone” › “Allow”። ድሕሪኡ ኣብ ታሕቲ ዘሎ መልጎም ጠውቑ።" }, // nieuw, nalezen
    whichPicture: "ኣየናይ ስእሊ እዩ?",
    sayAloudInstead: { m: "ኣብ ክንድኡ ብዓው ኢልካ በሎ", f: "ኣብ ክንድኡ ብዓው ኢልኪ በልዮ" },
    wordsPractised: "ዝተደገሙ ቃላት",
    reviewComplete: "ድግግም ተወዲኡ!",
  },
  gloss: {
    'c.hello.a.why': "ሰላምታ ምፍልላይ ብሰላምታ ምፍልላይ ይምለስ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.people.a.why': "ሕቶ ብዛዕባ ስም እዩ። እዚ መልሲ ስም ይህብ።",
    'c.arrive.a.why': "እቲ ሕቶ ንምንታይ ከም ዝመጸ እዩ። እዚ መልሲ ሓድሽ ምዃኑን ሎሚ ከም ዝጅምርን ይነግር።",
    'c.understand.a.why': "ዘይተረድአ ነገር? ክድገም ምሕታት ንቡር እዩ።",
    'c.translate.a.why': "እታ ወረቐት ገና ንጹር ስለ ዘይኮነት፡ ቅድም ትትርጎም።",
    'c.understood.a.why': "ዕማም ምድጋም፡ እቲ ትእዛዝ ንጹር ምዃኑ የረጋግጽ።",
    'c.keeplearning.a.why': "ሆላንድኛ ምሕታት ጸገም የብሉን፡ ልምምድ ይሕግዝ።",
    'c.gear.a.why': "ሕቶ ብዛዕባ ሄልመት እዩ፡ እወ፡ ኣብ ርእሲ ኣሎ።",
    'c.danger.a.why': "ኣብ ሓደጋ፡ ቅድም ናብ 112 ይድወል።",
    'c.alarm.a.why': "ሕቶ ኩሉ ሰብ ወጺኡ ድዩ ዝብል እዩ። እዚ መልሲ መን ገና ከም ዘይመጸ ይነግር።", // nieuw, nalezen
    'c.accident.a.why': "ሕቶ ብዛዕባ ዝኣጋጠመ እዩ። እዚ መልሲ እንታይ ከም ዘጋጠመን ከመይ ከም ዘሎን ይነግር።",
    'c.notyet.a.why': "«ፈትን ጥራይ» ምስ ተባህለ፡ ቅድም ገይሩ ከርኢ ምሕታት እቲ ውሑስ መልሲ እዩ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.things.a.why': "ሕቶ «ናበይ» እዩ። እዚ መልሲ ቦታ ይጠቅስ።",
    'c.directions.a.why': "ጸጋም ወይስ የማን? እዚ መልሲ ሓደ መሪጹ ኣበይ ምዃኑ ይብል።",
    'c.shift.a.why': "ፈረቓ መዓስ ይጅምር? እዚ መልሲ መዓልትን ሰዓትን ይነግር።",
    'c.sick.a.why': "ሕማም ማለት ኣብ ገዛ ምጽናሕን ምሕባርን እዩ።",
    'd.speakup.a.why': "ገለ ነገር ኣሎ ድዩ ምስ ዝሕተት፡ ቅኑዕ «እወ» ጽቡቕ እዩ።",
    'd.agree.a.why': "ኣይፋል ምባል ይፍቀድ። ካልእ መዓልቲ ምሕባር ይሕግዝ።",
    'd.task.a.why': "ተወዲኡ ድዩ ተባሂሉ ምስ ዝሕተት፡ እዚ መልሲ «ዳርጋ» ይብል፡ ክንደይ ከም ዝተረፈ ድማ ይነግር።",
    'd.clear.a.why': "ንጹር ድዩ ምስ ዝሕተት፡ ቅድም «እወ»፡ ድሕሪኡ እታ ሓንቲ ሕቶ።", // nieuw, nalezen
    'c.cv.a.why': "መወከሲ ብዛዕባ ስራሕ ክዛረብ ዝኽእል ናይ ቀደም ሓላፊ እዩ።",
    'c.interview.a.why': "ኣብ ቃለ-መሕትት ስራሕ፡ ተመኩሮ ስራሕ እዩ ዘገድስ።",
    'c.findwork.a.why': "ሕቶ ብዛዕባ ዓይነት ስራሕ እዩ። እዚ መልሲ ይጠቅሶ።",
    'c.contract.a.why': "«እወ» ምስ ሕቶ ሰዓት ንጹርን ድሉውነት ዘርኢን እዩ።",
    'c.agency.a.why': "ሕቶ ብዛዕባ ሰዓታት እዩ፡ እዚ መልሲ «እወ» ይብል፡ መዓስን ብኸመይን ድማ ይነግር።",
    'c.bsn.a.why': "ኣስራሒ መንነት ወረቐት ከም ፓስፖርት ክርኢ ክሓትት ይኽእል።",
    'c.housing.a.why': "ካብ ደሞዝ ዝቑረጽ ገንዘብ ብጽሑፍ ስምምዕ ክህልዎ ኣለዎ።",
    'c.payslip.a.why': "ኣብ ወረቐት ደሞዝ ዝጎደሉ ሰዓታት ክሕበሩ ኣለዎም።",
    'c.extra.a.why': "ተወሳኺ ሰዓታት ኣብ ወረቐት ደሞዝ ክረጋገጹ ምእንቲ ይጽሓፉ።",
    'c.phone.a.why': "ኣብ ጥቓ ማሽን ተሌፎን የለን፡ መልእኽትታት ንዕረፍቲ ይጽበዩ።",
    'c.smoking.a.why': "ዕረፍቲ ኣብ ዝተወሰነ ሰዓት እዩ፡ ቅድሚኡ ኣይኮነን።",
    'c.clock.a.why': "ኣብ ክንዲ ካልእ ሰብ ምምዝጋብ ኣይፍቀድን።",
    'c.hygiene.a.why': "መርበብ ጸጉሪ ኣብ ርእሲ፡ ስልማት ተወጺኡ፡ ሕግታት ጽሩይ መግቢ።",
    'c.smalltalk.a.why': "ሕቶ ብዛዕባ ቀዳምን ሰንበትን እዩ፡ ሓደ ነገር ይኣክል።",
    'c.mistakes.a.why': "ንናእዳ ብምስጋና ይምለስ።",
    'c.respect.a.why': "ምጽቃጥ ክንገር ኣለዎ፡ ሓደ ሰብ ክሕግዝ ምእንቲ።",
    'c.gossip.a.why': "ኣብ ሕሜት ዘይምስታፍ ኣብ ጉጅለ እምነት ይሕሉ።",
    'c.boundaries.a.why': "ዝጎድእ ዋዛ ብንጹር ክቋረጽ ይኽእል።",
    'c.health.a.why': "ዕረፍቲ ጥዕና ይሕሉ፡ ስለዚ ይውሰድ።",
    'c.rights.a.why': "ካብ ስራሕ ምስጓግ ፈጺሙ ብቕጽበት ኣይፍረምን። ቅድም ምኽሪ ይሕተት።",
    'c.mustmay.a.why': "ብድሌት ማለት ምርጫ ኣሎ፡ ቀዳም ምስራሕ ኣየድልን እዩ።", // nieuw, nalezen
    'c.leave.a.why': "መዓስ? እዚ መልሲ ወርሕን ንክንደይ ግዜን ይህብ።",
    'c.illness.a.why': "ሕክምናዊ ዝርዝራት ንሓኪም ትካል እዩ፡ ንሓላፊ ኣይኮነን።",
    'c.warning.a.why': "ኣስራሒ ቅዳሕ ፓስፖርት ክወስድ ይኽእል፡ ፓስፖርት ግን ክሕዞ ኣይኽእልን።",
    'c.gethelp.a.why': "እንታይ ከም ዘይቅኑዕ ብንጹር ምንጋር ክሕግዙ የኽእሎም።",
    'c.callin.a.why': "መዓስ ምምላስ? እዚ መልሲ መዓልቲ ይህብ።",
    'c.texting.a.why': "ኣብ ኣፕ ቅልጡፍ መልሲ ንመደብ ይሕግዝ።",
    'c.certs.a.why': "ቅኑዕ «ኣይፋል» ምስ ድሌት ምምሃር፡ ጽቡቕ መልሲ።",
    'c.diploma.a.why': "ንስልጠና «እወ» ምባልን መን ከም ዝኸፍል ምሕታትን ንቡር እዩ።",
    'c.doctor.a.why': "ግልጋሎት ሓኪም (huisartsenpost) መን ከም ዝሓመመን እንታይ ከም ዘለዎን ክፈልጥ ኣለዎ።",
    'c.insurance.a.why': "ስም ትካል መድሕን ኣብ ካርድ መድሕን ጥዕና ተጻሒፉ ኣሎ።",
    'c.letters.a.why': "ጸብጻብ ግብሪ ክሳብ 1 ግንቦት ይወሃብ።",
    'c.scams.a.why': "ባንኪ ፈጺሙ PIN ኣይሓትትን። ተሌፎን ምዕጻው ቅኑዕ እዩ።",
    'c.bike.a.why': "ብኸመይ? እዚ መልሲ መጓዓዝያን ግዜን ይህብ።",
    'c.transit.a.why': "ባቡር ኣይኮነን፡ እዚ መልሲ ኣውቶቡስ ይጠቅስ።",
    'c.ww.a.why': "ሓገዝ ስራሕ ኣልቦነት (WW) ብቕጽበት ክሕተት ኣለዎ።",
    'c.newjob.a.why': "ቁጽሪ ተሌፎን ተመሊሶም ክድውሉ የኽእሎም።",
    'c.tools.a.why': "ኣበይ? እዚ መልሲ ቦታ ይህብ፡ ኣብቲ መኪና።",
    'c.site.a.why': "ኣብ ናሕሲ፡ መከላኸሊ ውድቀት ኩሉ ግዜ ቀዳማይ እዩ።",
    'c.line.a.why': "ከመይ ይኸይድ ኣሎ? እዚ መልሲ ከመይ ምዃኑ ይብልን ጸገም ይጠቅስን።",
    'c.quality.a.why': "ስለምንታይ ተፈሊዩ? እዚ መልሲ ጉድለት ይህብ።",
    'c.client.a.why': "ተገልጋሊ ሓገዝ ይሓትት፡ ብትሕትና «እወ»፡ ምስ «u»።",
    'c.privacy.a.why': 'መድሃኒት ንዝሰልጠኑ ሰራሕተኛታት እዩ፡ ነርሳት እዮም ዝህብዎ።',
    'c.kitchen.a.why': "ኣለርጂ ከቢድ እዩ፡ ሸፍ ክፈልጥ ኣለዎ።",
    'c.service.a.why': "ሕሳብ ተሓቲቱ፡ ሓጺር «እወ» ከምኡ ድማ ምኻድ።",
    'c.cleaning.a.why': "ተወዲኡ ድዩ? እዚ መልሲ ዳርጋ ይብል፡ ክንደይ ከም ዝተረፈ ድማ።",
    'c.cleansafe.a.why': "ዝጠለለ መሬት ዘንሸራትት እዩ፡ መጠንቀቕታ ይሕግዝ።",
    'c.shelves.a.why': "እቲ ሕቶ «ኣበይ» እዩ። እዚ መልሲ ነቲ መተላለዪ ይጠቅስ፡ ሓገዝ ድማ የቕርብ።",
    'c.checkout.a.why': "ብካርድ ምኽፋል ይከኣል ድዩ ተባሂሉ፡ ሓጺር ፍሽሕው «እወ»።",
    'c.counting.a.why': "ሕቶ ብዛዕባ ብዝሒ እዩ። እዚ መልሲ ነቲ ቁጽሪ ይህብ፡ ኣሃዝ ብኣሃዝ ድማ የረጋግጾ።", // nieuw, nalezen
    'c.hours.a.why': "እቲ ሕቶ ብዛዕባ ሰዓት እዩ። እዚ መልሲ ሰዓት ይህብ።",
    'c.measures.a.why': "እቲ ሕቶ ብዛዕባ ንውሓት እዩ። እዚ መልሲ ንውሓት ይህብ።",
    'c.aihelp.a.why': "መን ከም ዝጸሓፎ ተሓቲቱ፡ ነቲ ሓገዝ ዝጠቅስ ቅኑዕ «እወ»።",
    'c.aiprivate.a.why': "ኣስማት ኣብ ቻትቦት ከተእቱ ተሓቲቱ፡ እዚ መልሲ «ኣይፋል» ይብል፡ ምኽንያቱ ድማ ይገልጽ።",
    'c.aifake.a.why': "ሓድሽ ቁጽሪ ገንዘብ ይሓትት፡ እዚ መልሲ ቅድም የረጋግጽ።",
    'c.aiplan.a.why': "መደብ ስራሕ ብኣፕ ተዳልዩ፡ እዚ መልሲ ሰብ ይሓትት።",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': 'ክንደይ መስርዕ ተሓቲቱ፡ እዚ መልሲ ቁጽሪ ይህብ፡ ዝተረፈ እውን ይነግር።', // nagelezen (2e lezing)
    'c.greensafe.a.why': 'ሕጂ ተነስኒሱ፡ እዚ መልሲ «ገና» ይብል፡ ምኽንያቱ ድማ ይገልጽ።', // nagelezen (2e lezing)
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': 'ስም ስድራ ተሓቲቱ፡ እዚ መልሲ ነቲ ስም ይህብ፡ ብፊደል ክብሎ ድማ ይሓትት።', // nagelezen (2e lezing)
    'c.dates.a.why': 'ዕለት ተሓቲቱ፡ እዚ መልሲ መዓልትን ዕለትን ይህብ።', // nagelezen (2e lezing)
    'c.permit.a.why': '«ኣይፋል» ምስ ምኽንያት ጸገም የብሉን። ካልእ መዓልቲ ምቕራብ ይሕግዝ።', // nagelezen (2e lezing)
    'c.kids.a.why': 'ስለምንታይ ተሓቲቱ፡ እዚ መልሲ ምኽንያቱ ይህብ፡ መውዓሊ ህጻናት ደዊሎም።', // nagelezen (2e lezing)
    'c.body.a.why': 'ኣበይ ከም ዘቐንዝው ተሓቲቱ፡ እዚ መልሲ ቦታን ምኽንያትን ይጠቅስ።', // nagelezen (2e lezing)
    'c.jobends.a.why': 'እቲ ገዛ ምስቲ ስራሕ ዝተኣሳሰረ እዩ፡ እዚ መልሲ ብዛዕባ ግዜ ቅድመ-ምሕባር ይሓትት።', // nagelezen (2e lezing)
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "ዘይንጹር ቃል: ቅድሚ ምጅማር ምሕታት ቅኑዕ መልሲ እዩ።", // nieuw, nalezen
    'c.handover.a.why': "ኩሉ ተወዲኡ ዶ ተባሂሉ: እዚ መልሲ እንታይ ከምዘይተወድአን ስለምንታይን ይነግር።", // nieuw, nalezen
    'c.workshop.a.why': "ስለምንታይ ተባሂሉ: እዚ መልሲ ምኽንያት ይህብ፡ ዓይኒ ሓለዋ የድልዮ።", // nieuw, nalezen
    'c.power.a.why': "ስራሕ ኣብ መብራህቲ: እዚ መልሲ ቅድም ኤሌክትሪክ ተቋሪጹ ዶ ይሓትት።", // nieuw, nalezen
    'c.garage.a.why': "ጎማ ክቕየር ተሓቲቱ: እወ፡ ጎማታት ኣበይ ከም ዘለዉ ሕቶ እውን።", // nieuw, nalezen
    'c.carjob.a.why': "ተወሳኺ ስራሕ: ዓሚል ቅድም ክሰማማዕ ኣለዎ፡ ስለዚ እዚ መልሲ ንሓላፊ ይሓትት።", // nieuw, nalezen
    'c.placement.a.why': "መዓስ ተባሂሉ: እዚ መልሲ መዓልቲ ይህብ፡ ውዕል ድማ ቅድም ይመጽእ።", // nieuw, nalezen
    'c.review.a.why': "ርእይቶ ገና ንጹር ኣይኮነን: ከርእዩ ምሕታት ጽቡቕ መልሲ እዩ።", // nieuw, nalezen
    'c.council.a.why': "ብዛዕባ ድምጺ ምሃብ: እወ፡ ክውሰዱ ዘለዎም ክልተ ነገራት እውን።", // nieuw, nalezen
    'c.police.a.why': "ፖሊስ መንነት ወረቐት ይሓትት: ምርኣይን እንታይ ከም ዘጋጠመ ምሕታትን።", // nieuw, nalezen
    'c.login.a.why': "ምእታው ይሰርሕ ዶ ተባሂሉ: እዚ መልሲ ኣይፋል ይብል፡ ስለምንታይ እውን።", // nieuw, nalezen
    'c.phish.a.why': "ብዛዕባ ሊንክ: ቅኑዕ እወ፡ ናብ ክፍሊ IT ምድዋል እውን።", // nieuw, nalezen
    'c.mychoice.a.why': "ብዛዕባ ሓያል ጎድኒ ተሓቲቱ: እዚ መልሲ ሓደ ብኣብነት ይጠቕስ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'c.nextstep.a.why': "ብዛዕባ መደብ ተሓቲቱ: እዚ መልሲ bblን ትርጉሙን ይጠቕስ።", // nieuw, nalezen
    'c.email.a.why': "ተላኢኹ ዶ ተባሂሉ: ገና፡ ቅድም ይፍተሽ።", // nieuw, nalezen
    'c.budget.a.why': "«ጸኒሕካ ክፈል» ቀሪቡ: ትሑት ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen
    'c.healthy.a.why': "ከኒና ቀሪቡ: ትሑት ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen
    // 5 nov 2026
    'd.newcolleague.a.why': "«ይመስለኒ» ገና ርግጸኛ ኣይኮነን: ኣርእየኒ ምባል ይሰርሕ እንተ ኾይኑ የረጋግጽ።", // nieuw, nalezen
    'c.food.a.why': "ስለምንታይ እቲ መስመር ይጸሪ ተሓቲቱ: ዝቕጽል ፍርያት ለውዝ የብሉን።", // nieuw, nalezen
    'c.parcel.a.why': "እቲ ጥቕሊል ናቱ ድዩ ተሓቲቱ: እወ፡ ድሕሪኡ ፊርማ።", // nieuw, nalezen
    'c.road.a.why': "ሓደ ተወሳኺ ዙረት ተሓቲቱ: ኣይፋል፡ ቅድም ዕረፍቲ ስለ ዝመጽእ።", // nieuw, nalezen
    'c.measure.a.why': "ስፍሓቱ ክንደይ ተሓቲቱ: ቁጽሪ ምስ መዐቀኒኡ፡ ተጻሒፉ ድማ።", // nieuw, nalezen
    'c.siteday.a.why': "እቲ ዕንጨይቲ ናበይ ተሓቲቱ: ቦታ፡ ኣበይ ምዃኑ ድማ።", // nieuw, nalezen
    'c.shifts.a.why': "እንታይ ኣጋጢሙ ተሓቲቱ: እወ፡ እንታይ፡ ንኽንደይ ግዜ ድማ።", // nieuw, nalezen
    'c.signals.a.why': "ከመይ ከም ዘሎ ተሓቲቱ: እቲ ዝርአ፡ ሓድሽ ምዃኑ ድማ።", // nieuw, nalezen
    'c.transfer.a.why': "ሰብ ምልዓል ተሓቲቱ: በይኑ ኣይኮነን፡ ቅድም እታ መልዓሊት ማሽን ትመጽእ።", // nieuw, nalezen
    'c.dishes.a.why': "ጽሩይ ብርጭቆታት ተሓቲቱ: እወ፡ መዓስ ከም ዝመጹ ድማ።", // nieuw, nalezen
    'c.rush.a.why': "ትእዛዝ ካብ ሸፍ: ተደጊሙ፡ ከም ዝተሰምዐ ክፈልጥ።", // nieuw, nalezen
    'c.rounds.a.why': "እቲ ቤት ጽሕፈት ተገይሩ ድዩ ተሓቲቱ: ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen
    'c.colours.a.why': "ብዛዕባ ጨርቂ ተሓቲቱ: ኣይፋል፡ ቀይሕ ንሽቓቕ ስለ ዝኾነ።", // nieuw, nalezen
    'c.shophelp.a.why': "ጸባ ተሓቲቱ: «ኣይፋል» ዘይኮነ፡ ኣብ መኽዘን ምርኣይ።", // nieuw, nalezen
    'c.shoptrouble.a.why': "ዝሓረቐ ዓሚል: ህዱእ ቃላት፡ ብጻይ ስራሕ ድማ ይመጽእ።", // nieuw, nalezen
    'c.plantcare.a.why': "ኣየኖት ክቕንጠባ ተሓቲቱ: እቲ ሕብሪ ዝበሰለ ኣየናይ ምዃኑ ይነግር።", // nieuw, nalezen
    'c.outdoors.a.why': "ነጎዳ ይመጽእ ኣሎ: ደው ምባልን ናብ ውሽጢ ምእታውን ውሑስ ምርጫ እዩ።", // nieuw, nalezen
    'c.drawing.a.why': "ብልክዕ ይኣቱ ድዩ ተሓቲቱ: ኣይፋል፡ ቅድሚ ሓይሊ ምጥቃም ድማ እንደገና ምዕቃን።", // nieuw, nalezen
    'c.weld.a.why': "ምልዓል ተሓቲቱ: ገና፡ ውዑይ ሓጺን ክዝሕል ኣለዎ።", // nieuw, nalezen
    'c.carparts.a.why': "እንታይ ከም ዝስማዕ ተሓቲቱ: ኣየናይ ኣካል፡ እንታይ ከም ዝገብር ድማ።", // nieuw, nalezen
    'c.carsafe.a.why': "ስራሕ ምጅማር ተሓቲቱ: ገና፡ እታ መኪና ናይ ኤሌክትሪክ ስለ ዝኾነት።", // nieuw, nalezen
    'c.backtowork.a.why': "ብዛዕባ ጥዕና ተሓቲቱ: ሓጺር «እወ»፡ ቀስ ብቐስ ምኻድ ድማ።", // nieuw, nalezen
    'c.feelwell.a.why': "ብዛዕባ ኩነታት ተሓቲቱ: ሓቀኛ «ብዙሕ ጽቡቕ ኣይኮነን» ጸገም የብሉን።", // nieuw, nalezen
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'd.explain.a.why': "እንታይ ጸገም ከም ዘሎ ተሓቲቱ: እዚ መልሲ እንታይ ምዃኑን እንታይ ከም ዘድሊን ይብል።", // nieuw, nalezen
    'd.listen.a.why': "ቀልዲ ምዃኑ ርግጸኛ ዘይምዃን: ምሕታት ካብ ምግማት ይሓይሽ።", // nieuw, nalezen
    'd.calm.a.why': "ስለምንታይ ከም ዘይተወድአ ተሓቲቱ: ህዱእ ምኽንያት፡ እንታይ ቅድም ከም ዝመጽእ ድማ።", // nieuw, nalezen
    'd.talkintime.a.why': "ሓደ ሰብ ቁሩብ ግዜ ይሓትት: «እወ»፡ ክነግር ምእንቲ ድማ ሕቶ።", // nieuw, nalezen
    'd.reachable.a.why': "ድሕሪ ዘይተመለሰ ጻውዒት ምምላስ ጻውዒት: ሰላምታ፡ ምኽንያት ናይቲ ጻውዒት ድማ።", // nieuw, nalezen
    'd.getfeedback.a.why': "ርእይቶ ቀሪቡ: «እወ»፡ ብጽቡቕ ክግበር ከም ዝድለ ድማ።", // nieuw, nalezen
    'd.givefeedback.a.why': "ብዛዕባ ስራሕ ተሓቲቱ: ቅድም እቲ ጽቡቕ፡ ድሕሪኡ እቲ ክመሓየሽ ዝኽእል።", // nieuw, nalezen
    'd.meeting.a.why': "ሕቶታት ተሓቲቱ: እዚ መልሲ ብዛዕባ መደብ ስራሕ ሓደ ሕቶ ይሓትት።", // nieuw, nalezen
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "ኣየናይ ቦታ ምዃኑ ተሓቲቱ: እቲ ኮሪደርን እቲ ክፍልን።", // nieuw, nalezen
    'c.loading.a.why': "እቲ ፓለት ተዳልዩ ድዩ ተሓቲቱ: ኣይፋል፡ ገና እንታይ ከም ዘድልዮ ድማ።", // nieuw, nalezen
    'c.vancheck.a.why': "እታ ቫን ደሓን እንተ ኾነት ተሓቲቱ: ኣይፋል፡ እንታይ ከም ዝተሰብረ ድማ።", // nieuw, nalezen
    'c.delay.a.why': "ኣበይ ምህላው ተሓቲቱ: እቲ ቦታ፡ ክንደይ ምድንጓይ ከም ዘሎ ድማ።", // nieuw, nalezen
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "ብኸመይ ከም ዝግበር ይፍለጥ ድዩ ምስ ዝሕተት፡ እዚ መልሲ ብቕንዕና «ኣይፋል፡ ገና» ይብል።", // nieuw, nalezen
    'c.mayask.a.why': "ሕቶ ኣሎ ድዩ ምስ ዝሕተት፡ እዚ መልሲ «እወ» ይብል፡ ቅድም ድማ ግዜ እንተሎ ይሓትት።", // nieuw, nalezen
    'c.whereis.a.why': "ክርከብ ይከኣል ድዩ ምስ ዝሕተት፡ እዚ መልሲ «ኣይፋል» ይብል፡ ክምልከት ድማ ይሓትት።", // nieuw, nalezen
  },
};

export default t;
