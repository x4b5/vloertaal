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
    'c.hello.a.why': "ሰላምታ ምፍልላይ ብሰላምታ ምፍልላይ ይምለስ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.people.a.why': "ሕቶ ብዛዕባ ስም እዩ። እዚ መልሲ ስም ይህብ።",
    'c.arrive.a.why': "እቲ ሕቶ ንምንታይ ከም ዝመጸ እዩ። እዚ መልሲ ሓድሽ ምዃኑን ሎሚ ከም ዝጅምርን ይነግር።",
    'c.understand.a.why': "ዘይተረድአ ነገር? ክድገም ምሕታት ንቡር እዩ።",
    'c.translate.a.why': "እታ ወረቐት ገና ንጹር ስለ ዘይኮነት፡ ቅድም ትትርጎም።",
    'c.understood.a.why': "ዕማም ምድጋም፡ እቲ ትእዛዝ ንጹር ምዃኑ የረጋግጽ።",
    'c.keeplearning.a.why': "ሆላንድኛ ምሕታት ጸገም የብሉን፡ ልምምድ ይሕግዝ።",
    'c.gear.a.why': "ሕቶ ብዛዕባ ሄልመት እዩ፡ እወ፡ ኣብ ርእሲ ኣሎ።",
    'c.danger.a.why': "ኣብ ሓደጋ፡ ቅድም ናብ 112 ይድወል።",
    'c.alarm.a.why': "ሕቶ ኩሉ ሰብ ወጺኡ ድዩ ዝብል እዩ። እዚ መልሲ መን ገና ከም ዘይመጸ ይነግር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "ሕቶ ብዛዕባ ዝኣጋጠመ እዩ። እዚ መልሲ እንታይ ከም ዘጋጠመን ከመይ ከም ዘሎን ይነግር።",
    'c.notyet.a.why': "«ፈትን ጥራይ» ምስ ተባህለ፡ ቅድም ገይሩ ከርኢ ምሕታት እቲ ውሑስ መልሲ እዩ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.things.a.why': "ሕቶ «ናበይ» እዩ። እዚ መልሲ ቦታ ይጠቅስ።",
    'c.directions.a.why': "ጸጋም ወይስ የማን? እዚ መልሲ ሓደ መሪጹ ኣበይ ምዃኑ ይብል።",
    'c.shift.a.why': "ፈረቓ መዓስ ይጅምር? እዚ መልሲ መዓልትን ሰዓትን ይነግር።",
    'c.sick.a.why': "ሕማም ማለት ኣብ ገዛ ምጽናሕን ምሕባርን እዩ።",
    'd.speakup.a.why': "ገለ ነገር ኣሎ ድዩ ምስ ዝሕተት፡ ቅኑዕ «እወ» ጽቡቕ እዩ።",
    'd.agree.a.why': "ኣይፋል ምባል ይፍቀድ። ካልእ መዓልቲ ምሕባር ይሕግዝ።",
    'd.task.a.why': "ተወዲኡ ድዩ ተባሂሉ ምስ ዝሕተት፡ እዚ መልሲ «ዳርጋ» ይብል፡ ክንደይ ከም ዝተረፈ ድማ ይነግር።",
    'd.clear.a.why': "ንጹር ድዩ ምስ ዝሕተት፡ ቅድም «እወ»፡ ድሕሪኡ እታ ሓንቲ ሕቶ።", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.mustmay.a.why': "ብድሌት ማለት ምርጫ ኣሎ፡ ቀዳም ምስራሕ ኣየድልን እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
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
    'c.counting.a.why': "ሕቶ ብዛዕባ ብዝሒ እዩ። እዚ መልሲ ነቲ ቁጽሪ ይህብ፡ ኣሃዝ ብኣሃዝ ድማ የረጋግጾ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "እቲ ሕቶ ብዛዕባ ሰዓት እዩ። እዚ መልሲ ሰዓት ይህብ።",
    'c.measures.a.why': "እቲ ሕቶ ብዛዕባ ንውሓት እዩ። እዚ መልሲ ንውሓት ይህብ።",
    'c.aihelp.a.why': "መን ከም ዝጸሓፎ ተሓቲቱ፡ ነቲ ሓገዝ ዝጠቅስ ቅኑዕ «እወ»።",
    'c.aiprivate.a.why': "ኣስማት ኣብ ቻትቦት ከተእቱ ተሓቲቱ፡ እዚ መልሲ «ኣይፋል» ይብል፡ ምኽንያቱ ድማ ይገልጽ።",
    'c.aifake.a.why': "ሓድሽ ቁጽሪ ገንዘብ ይሓትት፡ እዚ መልሲ ቅድም የረጋግጽ።",
    'c.aiplan.a.why': "መደብ ስራሕ ብኣፕ ተዳልዩ፡ እዚ መልሲ ሰብ ይሓትት።",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': 'ክንደይ መስርዕ ተሓቲቱ፡ እዚ መልሲ ቁጽሪ ይህብ፡ ዝተረፈ እውን ይነግር።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': 'ሕጂ ተነስኒሱ፡ እዚ መልሲ «ገና» ይብል፡ ምኽንያቱ ድማ ይገልጽ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': 'ስም ስድራ ተሓቲቱ፡ እዚ መልሲ ነቲ ስም ይህብ፡ ብፊደል ክብሎ ድማ ይሓትት።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.a.why': 'ዕለት ተሓቲቱ፡ እዚ መልሲ መዓልትን ዕለትን ይህብ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.permit.a.why': '«ኣይፋል» ምስ ምኽንያት ጸገም የብሉን። ካልእ መዓልቲ ምቕራብ ይሕግዝ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.a.why': 'ስለምንታይ ተሓቲቱ፡ እዚ መልሲ ምኽንያቱ ይህብ፡ መውዓሊ ህጻናት ደዊሎም።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.a.why': 'ኣበይ ከም ዘቐንዝው ተሓቲቱ፡ እዚ መልሲ ቦታን ምኽንያትን ይጠቕስ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.a.why': 'እቲ ገዛ ምስቲ ስራሕ ዝተኣሳሰረ እዩ፡ እዚ መልሲ ብዛዕባ ግዜ ቅድመ-ምሕባር ይሓትት።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "ዘይንጹር ቃል: ቅድሚ ምጅማር ምሕታት ቅኑዕ መልሲ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "ኩሉ ተወዲኡ ዶ ተባሂሉ: እዚ መልሲ እንታይ ከምዘይተወድአን ስለምንታይን ይነግር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "ስለምንታይ ተባሂሉ: እዚ መልሲ ምኽንያት ይህብ፡ ዓይኒ ሓለዋ የድልዮ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "ስራሕ ኣብ መብራህቲ: እዚ መልሲ ቅድም ኤሌክትሪክ ተቋሪጹ ዶ ይሓትት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "ጎማ ክቕየር ተሓቲቱ: እወ፡ ጎማታት ኣበይ ከም ዘለዉ ሕቶ እውን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "ተወሳኺ ስራሕ: ዓሚል ቅድም ክሰማማዕ ኣለዎ፡ ስለዚ እዚ መልሲ ንሓላፊ ይሓትት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "መዓስ ተባሂሉ: እዚ መልሲ መዓልቲ ይህብ፡ ውዕል ድማ ቅድም ይመጽእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "ርእይቶ ገና ንጹር ኣይኮነን: ከርእዩ ምሕታት ጽቡቕ መልሲ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "ብዛዕባ ድምጺ ምሃብ: እወ፡ ክውሰዱ ዘለዎም ክልተ ነገራት እውን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "ፖሊስ መንነት ወረቐት ይሓትት: ምርኣይን እንታይ ከም ዘጋጠመ ምሕታትን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "ምእታው ይሰርሕ ዶ ተባሂሉ: እዚ መልሲ ኣይፋል ይብል፡ ስለምንታይ እውን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "ብዛዕባ ሊንክ: ብቕንዕና «እወ»፡ ናብ ክፍሊ IT ምድዋል እውን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "ብዛዕባ ሓያል ጎድኒ ተሓቲቱ: እዚ መልሲ ሓደ ብኣብነት ይጠቕስ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.nextstep.a.why': "ብዛዕባ መደብ ተሓቲቱ: እዚ መልሲ bblን ትርጉሙን ይጠቕስ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "ተላኢኹ ዶ ተባሂሉ: ገና፡ ቅድም ይፍተሽ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "«ጸኒሕካ ክፈል» ቀሪቡ: ትሑት ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "ከኒና ቀሪቡ: ትሑት ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen // nagelezen AI 22 nov
    // 5 nov 2026
    'd.newcolleague.a.why': "«ይመስለኒ» ገና ርግጸኛ ኣይኮነን: ኣርእየኒ ምባል ይሰርሕ እንተ ኾይኑ የረጋግጽ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "ስለምንታይ እቲ መስመር ይጸሪ ተሓቲቱ: ዝቕጽል ፍርያት ለውዝ የብሉን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "እቲ ጥቕሊል ናቱ ድዩ ተሓቲቱ: እወ፡ ድሕሪኡ ፊርማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "ሓደ ተወሳኺ ዙረት ተሓቲቱ: ኣይፋል፡ ቅድም ዕረፍቲ ስለ ዝመጽእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "ስፍሓቱ ክንደይ ተሓቲቱ: ቁጽሪ ምስ መዐቀኒኡ፡ ተጻሒፉ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "እቲ ዕንጨይቲ ናበይ ተሓቲቱ: ቦታ፡ ኣበይ ምዃኑ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "እንታይ ኣጋጢሙ ተሓቲቱ: እወ፡ እንታይ፡ ንኽንደይ ግዜ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "ከመይ ከም ዘሎ ተሓቲቱ: እቲ ዝርአ፡ ሓድሽ ምዃኑ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "ሰብ ምልዓል ተሓቲቱ: በይኑ ኣይኮነን፡ ቅድም እታ መልዓሊት ማሽን ትመጽእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "ጽሩይ ብርጭቆታት ተሓቲቱ: እወ፡ መዓስ ከም ዝመጹ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "ትእዛዝ ካብ ሸፍ: ተደጊሙ፡ ከም ዝተሰምዐ ክፈልጥ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "እቲ ቤት ጽሕፈት ተገይሩ ድዩ ተሓቲቱ: ኣይፋል፡ ምስ ምኽንያት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "ብዛዕባ ጨርቂ ተሓቲቱ: ኣይፋል፡ ቀይሕ ንሽቓቕ ስለ ዝኾነ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "ጸባ ተሓቲቱ: «ኣይፋል» ዘይኮነ፡ ኣብ መኽዘን ምርኣይ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "ዝሓረቐ ዓሚል: ህዱእ ቃላት፡ ብጻይ ስራሕ ድማ ይመጽእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "ኣየኖት ክቕንጠባ ተሓቲቱ: እቲ ሕብሪ ዝበሰለ ኣየናይ ምዃኑ ይነግር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "ነጎዳ ይመጽእ ኣሎ: ደው ምባልን ናብ ውሽጢ ምእታውን ውሑስ ምርጫ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "ብልክዕ ይኣቱ ድዩ ተሓቲቱ: ኣይፋል፡ ቅድሚ ሓይሊ ምጥቃም ድማ እንደገና ምዕቃን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "ምልዓል ተሓቲቱ: ገና፡ ውዑይ ሓጺን ክዝሕል ኣለዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "እንታይ ከም ዝስማዕ ተሓቲቱ: ኣየናይ ኣካል፡ እንታይ ከም ዝገብር ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "ስራሕ ምጅማር ተሓቲቱ: ገና፡ እታ መኪና ናይ ኤሌክትሪክ ስለ ዝኾነት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "ብዛዕባ ጥዕና ተሓቲቱ: ሓጺር «እወ»፡ ቀስ ብቐስ ምኻድ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "ብዛዕባ ኩነታት ተሓቲቱ: ሓቀኛ «ብዙሕ ጽቡቕ ኣይኮነን» ጸገም የብሉን።", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'd.explain.a.why': "እንታይ ጸገም ከም ዘሎ ተሓቲቱ: እዚ መልሲ እንታይ ምዃኑን እንታይ ከም ዘድሊን ይብል።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "ቀልዲ ምዃኑ ርግጸኛ ዘይምዃን: ምሕታት ካብ ምግማት ይሓይሽ።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "ስለምንታይ ከም ዘይተወድአ ተሓቲቱ: ህዱእ ምኽንያት፡ እንታይ ቅድም ከም ዝመጽእ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "ሓደ ሰብ ቁሩብ ግዜ ይሓትት: «እወ»፡ ክነግር ምእንቲ ድማ ሕቶ።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "ድሕሪ ዘይተመለሰ ጻውዒት ምምላስ ጻውዒት: ሰላምታ፡ ምኽንያት ናይቲ ጻውዒት ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "ርእይቶ ቀሪቡ: «እወ»፡ ብጽቡቕ ክግበር ከም ዝድለ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "ብዛዕባ ስራሕ ተሓቲቱ: ቅድም እቲ ጽቡቕ፡ ድሕሪኡ እቲ ክመሓየሽ ዝኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "ሕቶታት ተሓቲቱ: እዚ መልሲ ብዛዕባ መደብ ስራሕ ሓደ ሕቶ ይሓትት።", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "ኣየናይ ቦታ ምዃኑ ተሓቲቱ: እቲ ኮሪደርን እቲ ክፍልን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "እቲ ፓለት ተዳልዩ ድዩ ተሓቲቱ: ኣይፋል፡ ገና እንታይ ከም ዘድልዮ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "እታ ቫን ደሓን እንተ ኾነት ተሓቲቱ: ኣይፋል፡ እንታይ ከም ዝተሰብረ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "ኣበይ ምህላው ተሓቲቱ: እቲ ቦታ፡ ክንደይ ምድንጓይ ከም ዘሎ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "ብኸመይ ከም ዝግበር ይፍለጥ ድዩ ምስ ዝሕተት፡ እዚ መልሲ ብቕንዕና «ኣይፋል፡ ገና» ይብል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "ሕቶ ኣሎ ድዩ ምስ ዝሕተት፡ እዚ መልሲ «እወ» ይብል፡ ቅድም ድማ ግዜ እንተሎ ይሓትት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "ክርከብ ይከኣል ድዩ ምስ ዝሕተት፡ እዚ መልሲ «ኣይፋል» ይብል፡ ክምልከት ድማ ይሓትት።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "ገለ ነገር ምሓዝ ተሓቲቱ: እወ፡ ኣበይ ከም ዝቕመጥ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "እቲ ማዕጾ ተዓጽዩ ድዩ ተሓቲቱ: ኣይፋል፡ ሕጂ ምዕጻዉ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "ድሮ መሊኡ ድዩ ተሓቲቱ: እወ፡ ባዶ ምግባሩ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "ሕጂ ክግበር ተሓቲቱ: እወ፡ ድሕሪኡ እንታይ ከም ዝመጽእ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "ሚክሰር ኣበይ ከም ዘሎ ተሓቲቱ: ቦታ፡ ኣብ ጥቓኡ እንታይ ከም ዘሎ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "ካበይ ከም ዝጅመር ተሓቲቱ: ኣብ ማእከል፡ ኣብቲ ማእከላይ መስመር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "እቲ መንደቕ ነቒጹ እንተ ኾይኑ ተሓቲቱ: ኣይፋል፡ ክንደይ ክጽበ ከም ዘለዎ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "ርቡዕ እንተ ኾይኑ ተሓቲቱ: ኣይፋል፡ ነዊሕ ርቡዕ፡ ስለምንታይ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "ክንደይ ዲግሪ ተሓቲቱ: እቲ ቁጽሪ፡ ፈረቓ እንታይ ምዃኑ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "እቲ መሬት ክንደይ ዓቢ ምዃኑ ተሓቲቱ: እቲ ሕሳብ፡ እቲ መልሲ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "ኣየናይ ብርሽ ተሓቲቱ: ገፊሕ ንመንደቕ፡ ንእሽቶ ድማ ንኩርናዓት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "ክቕባእ ይከኣል እንተ ኾይኑ ተሓቲቱ: ኣይፋል፡ ቅድም እንታይ ከም ዝመጽእ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "ክንደይ ጡብ ከም ዝተረፈ ተሓቲቱ: ሓደ ፓለት፡ ከም ዝኣክል ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "እቲ መስርዕ ክንደይ ብራኸ ክኸውን ከም ዘለዎ ተሓቲቱ: ኣበይ ክርአ ከም ዝከኣል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "ኣየናይ መጋዝ ተሓቲቱ: እቲ ንእሽቶ መጋዝ፡ ስለምንታይ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "እቲ ኩርናዕ ቀጥታዊ እንተ ኾይኑ ተሓቲቱ: እወ፡ ብኸመይ ከም ዝፍለጥ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "እቲ መሰርሒ ኣበይ ከም ዘሎ ተሓቲቱ: ቦታ፡ ዳርጋ ከም ዝመልአ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "እቲ መደርደሪ ብኸመይ ከም ዝትከል ተሓቲቱ: ብእንታይ፡ ክንደይ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "ስለምንታይ ደው ከም ዝብል ተሓቲቱ: እቲ ሰንሰር፡ እንታይ ከም ዘይርኢ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "ክንደይ ግዜ ተሓቲቱ: ኣብ ሰዓት ሓደ ግዜ፡ ኣበይ ከም ዝጽሓፍ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "ኣብ ሓደ ሳጹን ክንደይ ተሓቲቱ: እቲ ቁጽሪ፡ ኣበይ ከም ዝተጻሕፈ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "መዓስ ተሓቲቱ: መዓልቲ ሰሙን፡ ኣብታ መዓልቲ እቲ ህሞት ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "ኣየናይ ሽቦ ናበይ ከም ዝኸይድ ተሓቲቱ: ተመሳሳሊ ሕብሪ ምስ ተመሳሳሊ ሕብሪ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "ክኽፈት ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ መን ከም ዝገብሮ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "ገና የፍስስ ድዩ ተሓቲቱ: ቁሩብ፡ እንታይ ከም ዝግበረሉ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "ስለምንታይ በሊሕ ከም ዝኾነ ተሓቲቱ: ገና በሊሕ ተረፍ ኣለዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "ኣየናይ ደረጃ ተሓቲቱ: እቲ ቁጽሪ፡ ኣበይ ከም ዝርአ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "ክሳብ ክንደይ ክጸንዕ ተሓቲቱ: ክሳብ እቲ መፍትሕ ቲክ ዝብል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "ኣብኡ ደው ምባል ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ ፈጺሙ፡ ምኽንያቱ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "ጽቡቕ ድዩ ተሓቲቱ: ኣይፋል፡ እንታይ ጌጋ ከም ዘለዎ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "ክሳብ ክንደይ ክዓሙቕ ተሓቲቱ: እቲ ዕምቈት፡ ካብኡ ከይዓመቐ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "በሲላ ድያ ተሓቲቱ: ኣይፋል፡ ገና ቀጠልያ፡ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "ስለምንታይ ውዑይ ምዃኑ ተሓቲቱ: መጋረጃን መሳኹትን ዕጹዋት እዮም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "ክቕተል ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ ስለምንታይ ከም ዝሕግዝ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "ክወጹ ኣለዎም ድዩ ተሓቲቱ: እወ፡ ምኽንያቱ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "ክንደይ ተሓቲቱ: እቲ ሊትሮ፡ ብኸመይ ከም ዝፍተሽ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "ሓድሽ ክኸውን ኣለዎ ድዩ ተሓቲቱ: እወ፡ ምኽንያቱ ድማ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "እንታይ ክግበር ከም ዘለዎ ተሓቲቱ: ኣብቲ ትእዛዝ ስራሕ ምርኣይ።", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "ክወስዶ ይፍቀድ ድዩ ተሓቲቱ: እወ፡ ቅድም እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.pruning.a.why': "ኣየኖት ጨናፍር ተሓቲቱ: እቶም ዝነቐጹ ጥራይ።", // nieuw, nalezen
    'c.hedge.a.why': "ክሳዕ ክንደይ ቁመት ተሓቲቱ: ክሳዕ እቲ ገመድ፡ ካብኡ ዝሓጸረ ኣይኮነን።", // nieuw, nalezen
    'c.chainsaw.a.why': "ይፍቀድ ድዩ ተሓቲቱ: ገና ኣይኮነን፡ ቅድም እንታይ ከም ዝመጽእ ድማ።", // nieuw, nalezen
    'c.weeding.a.why': "ዘይድለ ሳዕሪ ድዩ ተሓቲቱ: ኣይፋል፡ እንታይ ከም ዝግበረሉ ድማ።", // nieuw, nalezen
    'c.planting.a.why': "ናበይ ከም ዝኸይድ ተሓቲቱ: ኣብቲ ቦታ ዕምባባ ዘሎ ቦታኡ።", // nieuw, nalezen
    'c.roadside.a.why': "ክሰግር ይኽእል ድዩ ተሓቲቱ: ኣይፋል፡ ምጽባይ፡ ምኽንያቱ ድማ።", // nieuw, nalezen
    'c.litter.a.why': "ነባሪ መዓስ ኢሉ ይሓትት: ኣይፍለጥን፡ መን ከም ዝፈልጥ ድማ።", // nieuw, nalezen
    'c.reception.a.why': "በጻሒ ቆጸራ ኣለዎ: ሓንሳእ፡ ጻውዒት ይግበር።", // nieuw, nalezen
    'c.visitors.a.why': "ጃኬት ናበይ ከም ዝኸይድ ተሓቲቱ: እቲ ቦታ፡ ኣበይ ከም ዘሎ ድማ።", // nieuw, nalezen
    'c.mailroom.a.why': "ንመን ምዃኑ ተሓቲቱ: እቲ ክፍሊ፡ እቲ ደርቢ ድማ።", // nieuw, nalezen
    'c.meetingroom.a.why': "ሰዓት ክንደይ ተሓቲቱ: እቲ ሰዓት፡ እንታይ ክግበር ከም ዘለዎ ድማ።", // nieuw, nalezen
    'c.faults.a.why': "ስለምንታይ ዝሑል ምዃኑ ተሓቲቱ: እንታይ ከም ዝተበላሸወ፡ ሓገዝ መዓስ ከም ዝመጽእ ድማ።", // nieuw, nalezen
    'c.repairs.a.why': "ቢፕ ይብል ድዩ ተሓቲቱ: እወ፡ ምኽንያቱ ድማ።", // nieuw, nalezen
    'c.moving.a.why': "ናበይ ከም ዝኸይድ ተሓቲቱ: እቲ ክፍሊ፡ ኣበይ ከም ዝርአ ድማ።", // nieuw, nalezen
    'c.closing.a.why': "ኣብ ውሽጢ ሰብ ኣሎ ድዩ ተሓቲቱ: ኣይፋል፡ ሕጂ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.patrol.a.why': "ገለ ነገር ተራእዩ ድዩ ተሓቲቱ: እወ፡ እንታይን ኣበይን።", // nieuw, nalezen
    'c.access.a.why': "ብዘይ ካርድ ክኣቱ ተሓቲቱ: ይቕሬታ፡ ብዘይ ካርድ ኣይከኣልን።", // nieuw, nalezen
    'c.cameras.a.why': "እንታይ ከም ዝርአ ተሓቲቱ: መን፡ ኣበይ፡ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.report.a.why': "ኣብ ጸብጻብ እንታይ ከም ዝኣቱ ተሓቲቱ: እንታይ፡ ኣበይን መዓስን።", // nieuw, nalezen
    'c.evacuation.a.why': "ኩሉ ኣብ ደገ ድዩ ተሓቲቱ: ኣይፋል፡ ክንደይ ከም ዝጎድሉ።", // nieuw, nalezen
    'c.firstaid.a.why': "AED ኣበይ ከም ዘሎ ተሓቲቱ: እቲ ቦታ፡ ኣብ ጎኑ እንታይ ከም ዘሎ ድማ።", // nieuw, nalezen
    'c.shoplifting.a.why': "ቦርሳ ክፍተሽ ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ መን ከም ዝገብሮ ድማ።", // nieuw, nalezen
    'c.aggression.a.why': "ስለምንታይ ዘይፍቀድ ተሓቲቱ: እቲ ምኽንያት፡ ብህድኣት ዝተባህለ።", // nieuw, nalezen
    'c.hygienelock.a.why': "ብዛዕባ ሰዓት ኢድ ተሓቲቱ: ኣይፋል፡ እቲ ሕጊ ድማ።", // nieuw, nalezen
    'c.allergens.a.why': "ብሓባር ክኸይድ ይኽእል ድዩ ተሓቲቱ: ኣይፋል፡ ምኽንያቱ ድማ።", // nieuw, nalezen
    'c.coldroom.a.why': "ስለምንታይ ቢፕ ከም ዝብል ተሓቲቱ: እቲ ምኽንያት፡ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.foreignbody.a.why': "እንታይ ከም ዝግበር ተሓቲቱ: ንመን ክርአ ከም ዘለዎ።", // nieuw, nalezen
    'c.cutting.a.why': "ክንደይ ተሓቲቱ: እቲ ክብደት፡ ኣበይ ከም ዝርአ ድማ።", // nieuw, nalezen
    'c.labels.a.why': "ኣየናይ ዕለት ተሓቲቱ: መዓስ፡ ኣበይ ከም ዝርአ ድማ።", // nieuw, nalezen
    'c.linecleaning.a.why': "ጽሩይ ድዩ ተሓቲቱ: ገና፡ እንታይ ከም ዝተረፈ ድማ።", // nieuw, nalezen
    'c.haccp.a.why': "ስለምንታይ ተሓቲቱ: እቲ መግቢ ውሑስ ምዃኑ ንምፍላጥ።", // nieuw, nalezen
    'c.binlorry.a.why': "ኣብ ድሕሪት ክጓዓዝ ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ ኣበይ ከም ዝጓዓዝ ድማ።", // nieuw, nalezen
    'c.reversing.a.why': "ሓገዝ ተሓቲቱ: እወ፡ ኣበይ ደው ከም ዝበለ፡ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.wastesorting.a.why': "ናበይ ከም ዝኸይድ ተሓቲቱ: እቲ መጕሓፊ፡ ምኽንያቱ ድማ።", // nieuw, nalezen
    'c.wastesafety.a.why': "ድሕሪ ምቑራጽ እንታይ ከም ዝግበር ተሓቲቱ: ምሕጻብ፡ ምንጋር ድማ።", // nieuw, nalezen
    'c.yard.a.why': "ናበይ ከም ዝኸይድ ተሓቲቱ: እቲ ኮንተይነር፡ ኣበይ ከም ዘሎ ድማ።", // nieuw, nalezen
    'c.hazardous.a.why': "ኣብ ውሽጢ እንታይ ከም ዘሎ ተሓቲቱ: ኣይፍለጥን፡ ስለዚ ኣብ ጎኒ ይቕመጥ።", // nieuw, nalezen
    'c.baler.a.why': "ክርአ ይፍቀድ ድዩ ተሓቲቱ: ኣይፋል፡ ቅድም እንታይ ከም ዝመጽእ ድማ።", // nieuw, nalezen
    'c.shovel.a.why': "ክሓልፍ ይፍቀድ ድዩ ተሓቲቱ: እቲ መራሒ ምስ ዝርኢ ጥራይ።", // nieuw, nalezen
    'c.nappies.a.why': "መዓስ ተሓቲቱ: እቲ ሰዓት፡ ኣበይ ከም ዝተጻሕፈ ድማ።", // nieuw, nalezen
    'c.mealtime.a.why': "ክወስድ ይፍቀደሉ ድዩ ተሓቲቱ: ኣይፋል፡ ምኽንያቱ፡ ኣበይ ከም ዝርአ ድማ።", // nieuw, nalezen
    'c.naptime.a.why': "ደቂሳ ድያ ተሓቲቱ: እወ፡ ካብ መዓስ፡ ከም ብሓድሽ ከም እትፍተሽ ድማ።", // nieuw, nalezen
    'c.playtime.a.why': "ቈልዓ ክጻወት ይፍቀድ ድዩ ተሓቲቱ: እወ፡ ኣበይ፡ ድሕሪኡ እንታይ ድማ።", // nieuw, nalezen
    'c.pickup.a.why': "መን ከም ዝወስድ ተሓቲቱ: እቲ ሰብ፡ ኣብቲ ዝርዝር ከም ዘላ ድማ።", // nieuw, nalezen
    'c.childsafety.a.why': "ወዲቓ ድያ ተሓቲቱ: እወ፡ እንታይ ከም ዘለዋ፡ መን ከም ዝድወለሉ ድማ።", // nieuw, nalezen
    'c.sickchild.a.why': "ከመይ ኣሎ ተሓቲቱ: እንታይ ከም ዝርአ፡ እንታይ ከም ዝግበር ድማ።", // nieuw, nalezen
    'c.grouprules.a.why': "በይኑ ምኻድ ይፍቀድ ድዩ ተሓቲቱ: እወ፡ ግን ቅድም ንብጻይ ስራሕ ምንጋር።", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "ተወዲኡ ድዩ ተሓቲቱ: ገና፡ ስለምንታይ ድማ።", // nieuw, nalezen
    'c.hotelroom.a.why': "ክንደይ ተሪፉ ተሓቲቱ: እቲ ቁጽሪ፡ መዓስ ከም ዝውዳእ ድማ።", // nieuw, nalezen
    'c.dosing.a.why': "ዝያዳ ክጥቀም ተባሂሉ: ኣይፋልን፡ ብዙሕ ዝሓሸ ኣይኮነን፡ እንታይ ከም ዝጥቀም ድማ።", // nieuw, nalezen
    'c.officenight.a.why': "በይኑ ድዩ ዝሰርሕ ተሓቲቱ: እወ፡ መልእኽቲ ከም ዝሰድድ ድማ።", // nieuw, nalezen
    'c.knives.a.why': "ክቖርጽ ተሓቲቱ: እወ ሸፍ፡ ብኸመይ ዝብል ሕቶ ድማ።", // nieuw, nalezen
    'c.rawcooked.a.why': "ብዘይ ግሉተን ድዩ ተሓቲቱ: ርግጸኛ ኣይኮነን፡ ስለዚ ነቲ ዝርዝር ይርኢ።", // nieuw, nalezen
    'c.pass.a.why': "መግቢ ኣበይ ኣሎ ተሓቲቱ: ኣብ ፓስ፡ ሕጂ ድማ የምጽኦ።", // nieuw, nalezen
    'c.bill.a.why': "በበይኖም ክኸፍሉ ተሓቲቱ: እወ፡ ማሽን ካርድ ድማ የምጽእ።", // nieuw, nalezen
    'c.washing.a.why': "ተገልጋሊ ኣይፋልን ይብል: ጽቡቕ፡ ካልእ ነገር ድማ የቕርብ።", // nieuw, nalezen
    'c.observing.a.why': "ፍሉይ ነገር ኣሎ ድዩ ተሓቲቱ: እወ፡ እንታይ ምዃኑ ብልክዕ ድማ።", // nieuw, nalezen
    'c.homecare.a.why': "መን ኢዩ ተሓቲቱ: ሰላምታ፡ መን ምዃኑ፡ ክኣቱ ይኽእል ዶ ድማ።", // nieuw, nalezen
    'c.liftaids.a.why': "በይኑ ክገብሮ ተሓቲቱ: እወ፡ ብመሸርተቲ ኣንሶላ፡ ከምጽኦ ድማ።", // nieuw, nalezen
    'c.returns.a.why': "ክመልሶ ተሓቲቱ: እወ፡ ብዛዕባ ቅብሊት ሕቶ ድማ።", // nieuw, nalezen
    'c.facing.a.why': "ወዲኡ ድዩ ተሓቲቱ: ዳርጋ፡ እንታይ ከም ዝተረፈ ድማ።", // nieuw, nalezen
    'c.shrink.a.why': "ቦርሳ ክርአ ተሓቲቱ: እወ፡ ቅብሊት ድማ የርኢ።", // nieuw, nalezen
    'c.shopclose.a.why': "ክኣቱ ተሓቲቱ: ይቕሬታ፡ ተዓጽዩ፡ መዓስ ከም ዝኽፈት ድማ።", // nieuw, nalezen
    'c.hirer.a.why': "ኣብ ሓድሽ ቦታ ክጅምር ተሓቲቱ: እወ፡ ብዛዕባ ሰዓት ሕቶ ድማ።", // nieuw, nalezen
    'c.phases.a.why': "ስራሕ ከም ዝውዳእ ተነጊሩ: ሕራይ፡ ካልእ ስራሕ ድማ ይሓትት።", // nieuw, nalezen
    'c.deductions.a.why': "ብዛዕባ ቁርጸት ተነጊሩ: ይፍቀድ ድዩ ኢሉ ይሓትት፡ የረጋግጽ ድማ።", // nieuw, nalezen
    'c.agencyhome.a.why': "ቀልጢፉ ክወጽእ ተነጊሩ: እዚ ሓጺር እዩ፡ ቅድም ድማ ምኽሪ ይደሊ።", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "መደብ ስራሕ ከም ዝተቐየረ ተነጊሩ: ሕራይ፡ ኣየናይ መዓልቲ ድማ።", // nieuw, nalezen
    'c.breaks.a.why': "ብዛዕባ ዕረፍቲ ምሳሕ ተሓቲቱ: ሰዓቱ፡ ክንደይ ከም ዝወስድ ድማ።", // nieuw, nalezen
    'c.wound.a.why': "ክወድቕ ቀሪቡ: ይደቅስ፡ ሓገዝ ድማ ይመጽእ።", // nieuw, nalezen
    'c.callhelp.a.why': "ይምልስ ድዩ ተሓቲቱ: ኣይፋል፡ ኣይምልስን።", // nieuw, nalezen
    'c.vacancy.a.why': "ስለምንታይ ከም ዝድውል ተሓቲቱ: እቲ ክፉት ቦታ ስራሕ፡ ገና ክፉት ድዩ ድማ።", // nieuw, nalezen
    'c.result.a.why': "ኣይፋል ተባሂሉ: ህዱእ መልሲ፡ ምኽንያቱ ድማ ይሓትት።", // nieuw, nalezen
    'c.residence.a.why': "ፍቓድ ግዜኡ ክሓልፍ ከም ዝቐረበ ተነጊሩ: ብቕጽበት ይሓትት።", // nieuw, nalezen
    'c.newhome.a.why': "ኣበይ ከም ዝነብር ተሓቲቱ: ሓድሽ ገዛ፡ ሓድሽ ኣድራሻ ድማ።", // nieuw, nalezen
    'c.payparts.a.why': "ቁጽሪ ሰራሕተኛ ተሓቲቱ: ኣብ ወረቐት ደሞዝ ኣበይ ከም ዘሎ።", // nieuw, nalezen
    'c.latepay.a.why': "ገንዘብ ደሓር ከም ዝመጽእ ተነጊሩ: ብጽሑፍ ይደሊ።", // nieuw, nalezen
    'c.holiday.a.why': "ኣብ ግንቦት ክኸይድ ተሓቲቱ: ሓምለ ይሓይሽ፡ ምኽንያቱ ድማ።", // nieuw, nalezen
    'c.special.a.why': "ብዛዕባ ፍቓድ ሕርሲ ተሓቲቱ: እወ፡ መዓስ ድማ።", // nieuw, nalezen
    'c.unwell.a.why': "ደሓን ድዩ ተሓቲቱ: ኣይፋል፡ ናብ ገዛ ክኸይድ ይኽእል ድዩ ድማ።", // nieuw, nalezen
    'c.injury.a.why': "ቃል ተሓቲቱ: እወ፡ ንዕኡ ቅዳሕ ድማ።", // nieuw, nalezen
    'c.debt.a.why': "ክሳብ ዕዳ ዝኽፈል ክጸንሕ ተነጊሩ: ኣይፍቀድን፡ ሓገዝ ይደሊ።", // nieuw, nalezen
    'c.inspection.a.why': "ክዛረብ ተሓቲቱ: እወ፡ ግን ሓላፊ ኣብ ዘይሰምዓሉ።", // nieuw, nalezen
    'c.carpool.a.why': "መን ከም ዝዝውር ተሓቲቱ: ንሱ፡ መዓስ ከም ዝወስዶም ድማ።", // nieuw, nalezen
    'c.train.a.why': "ስለምንታይ ከም ዝደንጎየ ተሓቲቱ: ባቡር፡ መልእኽቲ ድማ ሰዲዱ።", // nieuw, nalezen
    'c.checklist.a.why': "ዝረስዖ ነገር እንተ ሃልዩ ተሓቲቱ: ሓንሳእ ደጊሙ ነቲ ዝርዝር ይርኢ።", // nieuw, nalezen
    'c.leavesite.a.why': "ናይ መወዳእታ ይወጽእ ድዩ ተሓቲቱ: እወ፡ ኩሉ ጠፊኡ ማዕጾ ድማ ተዓጽዩ።", // nieuw, nalezen
    'c.stagedays.a.why': "ስለምንታይ ከም ዘይመጸ ተሓቲቱ: ሓሚሙ፡ ንኽልቲኦም ድማ ደዊሉ።", // nieuw, nalezen
    'c.stageend.a.why': "ብዛዕባ መደባቱ ተሓቲቱ: ቅድም ዲፕሎማ፡ ድሕሪኡ ስራሕ።", // nieuw, nalezen
    'c.neighbours.a.why': "ሓዳስ ጎረቤት ሰላም ትብል: ብምፍላጣ ሕጉስ፡ ስሙ ድማ።", // nieuw, nalezen
    'c.join.a.why': "ክመጽእ ተሓቲቱ: እወ፡ ምስ መምህር ክዛረብ ድማ ይደሊ።", // nieuw, nalezen
    'c.workphotos.a.why': "ንኢንተርነት ስእሊ ተሓቲቱ: ብትሕትና ኣይፋል።", // nieuw, nalezen
    'c.device.a.why': "ብዛዕባ ሓድሽ ኣፕ ተሓቲቱ: ቅድም ንክፍሊ IT ምሕታት።", // nieuw, nalezen
  },
};

export default t;
