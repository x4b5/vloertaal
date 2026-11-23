import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Tigrinya (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "ሕጂ እንታይ ክገብር እኽእል?", // nieuw, nalezen
    kunNote: "እቲ ጥቓ ነፍሲ ወከፍ ሓረግ ዘሎ ደረጃ መምርሒ ጥራይ እዩ፣ ወግዓዊ ደረጃ ኣይኮነን።", // nieuw, nalezen
    coachCanDo: "ቁጽሪ ሓረጋት «… እኽእል እየ» ካብ ዝተወድኡ ኣርእስትታት", // nieuw, nalezen
    kunLuisteren: "ምስማዕ", // nieuw, nalezen
    kunSpreken: "ምዝራብ", // nieuw, nalezen
    kunLezen: "ምንባብ", // nieuw, nalezen
    kunSchrijven: "ምጽሓፍ", // nieuw, nalezen
    kunGesprekken: "ዘተ", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "ንሓደ መሳርሕተይ ርእሰይ ከላልዮ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.firstday.2': "ናብ መን ክቐርብ ከም ዘለኒ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.help.1': "ከም ዘይተረደኣኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.help.2': "ሓደ ሰብ ቀስ ኢሉ ክዛረብ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.do.1': "ከም «Zet het neer» ዝኣመሰለ ሓጺር መምርሒ ክርድኦ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.do.2': "ሓደ ዕማም ከም ዝወዳእኩ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.tools.1': "ሓደ ሰብ ክጽሕፎ ወይ ከርእየኒ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.tools.2': "ከም ዝተረዳእኩ ንምርግጋጽ ዝተዋህበኒ መምርሒ ደጊመ ክብሎ እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.tools.3': "ሆላንድኛ ክለማመድ ከም ዝደሊ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.data.1': "ስመይ ብፊደል ክብሎ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.data.2': "ኣበየኖት መዓልትታት ክሰርሕ ከም ዝኽእል ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.data.3': "ዕለት ምስ ሰማዕኩ ክርድኦ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sounds.1': "ከም man ከምኡውን maan ዝኣመሰሉ ቃላት ክፈልዮም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sounds.2': "ከቢድ ድምጺ ዘለዎም ሓጸርቲ ሓረጋት ክደግሞም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.safety.1': "ከም «Pas op!» ዝኣመሰለ መጠንቀቕታ ክርድኦ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.safety.2': "ገና ዘይተማሃርክዎ ነገር ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.emergency.1': "መጥፋእቲ ሓዊ ኣበይ ከም ዘሎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.emergency.2': "ሓደጋ ክሕብር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.apply.1': "እንታይ ተመኩሮ ከም ዘለኒ ክነግር እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.apply.2': "ኣብ ቃለ-መሕትት ስራሕ ብዛዕባ ርእሰይ ክዛረብ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contract.1': "ኣብ ሰሙን ክንደይ ሰዓት ከም ዝሰርሕ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contract.2': "ውዕለይ ግዝያዊ ድዩ ወይስ ቀዋሚ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contract.3': "መዓስ ክሰርሕ ከም ዝኽእልን ከም ዘይክእልን ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.grow.1': "እንታይ ዲፕሎማን ሰርቲፊኬትን ከም ዘለኒ ክነግር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.grow.2': "ኣብ እንታይ ጽቡቕ ከም ዝኾንኩ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.lost.1': "ውዕለይ ይውዳእ ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.lost.2': "ተወሳኺ ክፍሊት ዓመታዊ ዕረፍተይ ክኽፈለኒ ድዩ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.stage.1': "ኣብ ትካል ኣሰልጣኒይ መን ምዃኑ ክሓትት እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.stage.2': "ርእይቶን ኣብነትን ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.time.1': "ፈረቓ ስራሐይ ሰዓት ክንደይ ከም ዝጅምር ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.time.2': "ሕማም ከም ዘለኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.pay.1': "ወረቐት ደሞዘይ ከም ዘይቅኑዕ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.pay.2': "ከም bruto ከምኡውን netto ዝኣመሰሉ ቃላት ከንብብ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.leave.1': "ፍቓድ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.leave.2': "ውላደይ ከም ዝሓመመ ክብል እኽእል እየ።", // nieuw, nalezen (5 nov 2026: nieuwe zin; de oude staat nu bij kjn.u.sick.1)
    'kjn.u.sick.1': "ሕማመይን ናብ ስራሕ ምምላሰይን ክሕብር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sick.2': "እንታይ ገና ከም ዘይክእል ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sick.3': "ቅድም ፍርቂ መዓልትታት ከም ዝሰርሕ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contact.1': "ደዊለ መን ምዃነይ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contact.2': "ሓደ ሰብ ተመሊሱ ክድውለለይ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.contact.3': "ናብ ስራሐይ ሓጺር መልእኽቲ ክጽሕፍ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.house.1': "ከም «Roken verboden» ዝኣመሰሉ ሕግታት ከንብብ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.house.2': "ኣበይ ሽጋራ ምትካኽ ከም ዝፍቀድ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.house.3': "ሓደ ነገር ከም ዘይፍቀድ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.numbers.1': "ከም «kwart over vier» ዝኣመሰሉ ሰዓታት ክርድኦም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.numbers.2': "ሓደ ነገር ክንደይ ዋጋኡ ወይ ክብደቱ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.numbers.3': "ከም 13ን 30ን ዝኣመሰሉ ቁጽርታት ክፈልዮም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.shop.1': "ንዓሚል ብካርድ ክኸፍል ይደሊ እንተኾይኑ ክሓትቶ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.shop.2': "ንዓሚል ኣብ ድኳን መንገዲ ከርእዮ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.ai.1': "ሓደ መልሲ ቅኑዕ ድዩ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.ai.2': "ምስ ሰብ ክዛረብ ከም ዝደሊ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.finish.1': "ኣብ ወረቐት ስራሕ ዘሎ ቃል እንታይ ማለት ምዃኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.finish.2': "እንታይ ከም ዝተወድአን እንታይ ከም ዘይተወድአን ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.online.1': "መሕለፊ ቃለይ ከም ዘይሰርሕ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.online.2': "ዘጠራጥር ኢመይል ክፈልጦ እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.teamwork.1': "ገለ ነገር ከም ዘሸግረኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.teamwork.2': "ንተወሳኺ ስራሕ ብህድኣት ኣይፋል ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.teamwork.3': "ቅድም እንታይ ክገብር ከም ዘለኒ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.social.1': "ኣብ ዕረፍቲ ቁሩብ ክዘራረብ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.social.2': "ጌጋ ከም ዝገበርኩ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.social.3': "ገለ ነገር ንደረተይ ከም ዝሓልፍ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sayings.1': "ገለ ልሙዳት ኣበሃህላታት ክርዳእ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.sayings.2': "ገለ ነገር ኣዝዩ ቀሊል (een eitje) ምዃኑ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.rights.1': "ዕረፍቲ ናይ ምውሳድ መሰል ከም ዘለኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.rights.2': "ጥርዓን ከቕርብ ከም ዝደሊ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.exploit.1': "ፓስፖርተይ ኣብ ኢደይ ከም ዝጸንሕ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.exploit.2': "ብዘይ ስመይ ገለ ነገር ክሕብር ይከኣል እንተኾይኑ ክሓትት እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.papers.1': "ኣድራሻይ ከም ዝተቐየረ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.papers.2': "ክራይ ክንደይ ምዃኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.health.1': "ኣበይ ከም ዘቐንዝወኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.health.2': "ምስ ሓኪም ስድራ ቆጸራ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.health.3': "እቲ ስራሕ ኣዝዩ ከም ዝበዝሓኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.money.1': "ሓደ ደብዳቤ ከም ዘይተረደኣኒ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.money.2': "ንተታላሊ ብተሌፎን ኣይፋል ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.travel.1': "ናብ ስራሐይ ብኸመይ ከም ዝኸይድ ክገልጽ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.travel.2': "መዕረፊ ኣውቶቡስ ኣበይ ከም ዘሎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.society.1': "ድምጺ ክህብ ይፍቀደለይ እንተኾይኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.society.2': "ተቓውሞ ከቕርብ ከም ዝደሊ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.warehouse.1': "ኣብ መኽዘን ሓጸርቲ መምርሒታት ክርዳእ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.warehouse.2': "ሓደ ነገር ኣበይ ከም ዘሎ ክብል እኽእል እየ፡ ኣብ ጸጋም ወይ ኣብ የማን።", // nieuw, nalezen
    'kjn.u.build.1': "ኣብ ቦታ ህንጻ መጠንቀቕታ ክርዳእ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.build.2': "መሳርሒ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.factory.1': "ኣብ ማሽን ጸገም ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.factory.2': "ኣብ ሓደ ፍርያት እንታይ ጸገም ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.factory.3': "ንእሽቶ መቑሰሊ ከም ዘለኒ ክሕብር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.care.1': "ንተገልጋሊ ክሕግዞ ይፍቀደለይ እንተኾይኑ ክሓትቶ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.care.2': "ገለ ነገር ናብ ነርስ ከሕልፍ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.horeca.1': "ንጋሻ እንታይ ክሰትዩ ከም ዝደልዩ ክሓትቶም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.horeca.2': "ንሸፍ ከም ዝሓቶ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.clean.1': "መጽረዪ ነገራት ኣበይ ከም ዘለዉ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.clean.2': "ንሓደ ሰብ እቲ መሬት ከም ዘንሸራትት ከጠንቅቖ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.kas.1': "ኣብ ኣየናይ መስርዕ ከም ዝጅምር ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.kas.2': "ሓደ ገዛ ኣትክልቲ ተነስኒሱ እንተኾይኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.tech.1': "ገና ኤሌክትሪክ እንተሎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.tech.2': "ሓደ ገመድ ኤሌክትሪክ ከም ዝተበላሸወ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.garage.1': "ጎማ ከም ዝተቐደደ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.garage.2': "ዓሚል ቅድም ክሰማማዕ ከም ዘለዎ ክብል እኽእል እየ።", // nieuw, nalezen
    // Vervoer en bezorging (5 nov 2026)
    'kjn.u.delivery.1': "እቲ ዓሚል ኣብ ገዛ ከም ዘየለ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.delivery.2': "ንጎረባብቲ ሓደ ጥቕሊል ክቕበሉ ክሓቶም እኽእል እየ።", // nieuw, nalezen
    'kjn.u.delivery.3': "መስመረይን ሰዓታተይን መን ከም ዝውስኖ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.afbouw.1': "ኣስናን ዘለዎ ማንካ ወይ ማንካ ህንጻ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.afbouw.2': "ሸክላ ካበይ ከም ዝጅምር ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.afbouw.3': "እቲ መንደቕ ገና ከም ዘይነቐጸ ክብል እኽእል እየ።", // nieuw, nalezen
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'kjn.u.communicate.1': "እንታይ ጸገም ከም ዘሎ ክገልጽ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.communicate.2': "ዝሰማዕክዎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.communicate.3': "ብግዜኡ ዘተ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.feedback.1': "ርእይቶ ምስ ዝወሃበኒ ኣብነት ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.feedback.2': "እንታይ ክመሓየሽ ከም ዝኽእል ብሕያውነት ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.feedback.3': "ኣብ ኣኼባ ጉጅለ ሕቶ ክሓትት እኽእል እየ።", // nieuw, nalezen
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "መጋዝ ኢድ ወይ ብባተሪ ዝሰርሕ መሰርሒ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.ruwbouw.2': "ሰሌዳ ብኸመይ ከም ዝትክሎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.machines.1': "እቲ መከላኸሊ ማሽን ከም ዝተበላሸወ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.machines.2': "ክንደይ ግዜ ናሙና ከም ዝወስድ ክሓትት እኽእል እየ።", // nieuw, nalezen
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "ነቲ ሳጹን ፊውዝ ክኸፍቶ ይፍቀደኒ ድዩ ኢለ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.install.2': "መራኸቢ ቱቦ ከም ዘፍስስ ክብል እኽእል እየ።", // nieuw, nalezen
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "እቲ ሳጹን ክፍልታት ዳርጋ ጥራሑ ምዃኑ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.montage.2': "ሓደ ቡሎን ክሳብ ክንደይ ክጸንዕ ከም ዘለዎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "ኣብ ተኽሊ ፈንገስ ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.kweek.2': "ሓንቲ ኮሚደረ እኹል በሲላ እንተ ኾይና ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.carservice.1': "እቲ መጠንቀቕታ መብራህቲ ይበርህ ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.carservice.2': "ክንደይ ዘይቲ ክኣቱ ከም ዘለዎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "እቲ ሳዕሪ ኣዝዩ ጠሊሉ ምዃኑ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.mowing.2': "ኣየኖት ጨናፍር ክቑረጹ ከም ዘለዎም ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.planting.1': "ስባር ብርጭቆ ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.planting.2': "ጽርግያ ክሰግር ይፍቀደኒ ድዩ ኢለ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.frontdesk.1': "ንበጻሒ ሰላም ክብልን ክሕግዝን እኽእል እየ።", // nieuw, nalezen
    'kjn.u.frontdesk.2': "ሓደ ጥቕላል ንመን ምዃኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.maintenance.1': "ብልሽት ከሕብር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.maintenance.2': "ሓደ ጠረጴዛ ናበይ ክኸይድ ከም ዘለዎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.guarding.1': "መንነት ወረቐት ሓደ ሰብ ክርኢ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.guarding.2': "እንታይ ከም ዝርኢ ብሬድዮ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.incidents.1': "ናብ 112 ደዊለ እንታይ ከም ዘሎ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.incidents.2': "ምስ ሕሩቕ ዓሚል ብህድኣት ክዛረብ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.foodhygiene.1': "እቲ ዝሑል ክፍሊ ኣዝዩ ውዑይ ምዃኑ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.foodhygiene.2': "ኣብኡ ለውዝ ኣሎ ድዩ ኢለ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.foodline.1': "እቲ ኤቲኬት ቅኑዕ ከም ዘይኮነ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.foodline.2': "ኣብ ሓደ ሳጹን ክንደይ ክኣቱ ከም ዘለዎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.collection.1': "ነቲ መራሒ ንድሕሪት ክዝውር ክሕግዞ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.collection.2': "ሓደ መጕሓፊ ኣዝዩ ከቢድ ምዃኑ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.recycling.1': "ንበጻሒ ጎሓፉ ናበይ ከም ዝኸይድ ክነግሮ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.recycling.2': "እቲ መጸቕጢ ከም ዝተጣበቐ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.toddlers.1': "ንሓደ ቈልዓ ፓምፐርስ ክቕይረሉ ምዃነይ ክብል እኽእል እየ።", // nieuw, nalezen
    'kjn.u.toddlers.2': "ሓደ ቈልዓ ደቂሱ ድዩ ኢለ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.daycare.1': "ንወላዲ እታ መዓልቲ ብኸመይ ከም ዝሓለፈት ክነግሮ እኽእል እየ።", // nieuw, nalezen
    'kjn.u.daycare.2': "ሓደ ቈልዓ መን ክወስዶ ይመጽእ ከም ዘሎ ክሓትት እኽእል እየ።", // nieuw, nalezen
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "ኣብ ኣየናይ ደረጃ ከም ዘለኹ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.uitzend.2': "ካብ ደሞዘይ ዝቑረጽ ገንዘብ ንምንታይ ምዃኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.housekeeping.1': "ሽቓቕ ከም ዝተዓጽወ ክነግር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.housekeeping.2': "ኣብ ባልዲ ክንደይ ፍርያት ከም ዝኣቱ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.cooking.1': "ንሸፍ ሓደ ነገር ብኸመይ ከም ዝቖርጾ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.cooking.2': "ንጋሻ በበይኑ ክኸፍል ይደሊ እንተ ኾይኑ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.carework.1': "ንተገልጋሊ እንታይ ክኽደን ከም ዝደሊ ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.carework.2': "ንነርስ ዝረኣኹዎ ክነግር እኽእል እየ።", // nieuw, nalezen
    'kjn.u.shopfloor.1': "ንዓሚል ቅብሊት ክሓትት እኽእል እየ።", // nieuw, nalezen
    'kjn.u.shopfloor.2': "እቲ ድኳን ቀልጢፉ ከም ዝዕጾ ክነግር እኽእል እየ።", // nieuw, nalezen
  },
};

export default t;
