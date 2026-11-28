import type { CultureTranslation } from '../culture/types';

/** Work-and-rights units (src/content/work.ts): lessons, words, sentences, chats and tips. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.apply': 'ስራሕ ምሕታት',
    'l.cv': { m: 'CVኻን ደብዳቤኻን', f: 'CVኺን ደብዳቤኺን' },
    'w.cv': { m: 'CV (ሓጺር ታሪኽ ስራሕካ)', f: 'CV (ሓጺር ታሪኽ ስራሕኪ)', x: 'CV (ሓጺር ታሪኽ ስራሕኩም)' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.motivatie': 'ድሌት (ስለምንታይ ነቲ ስራሕ ከም ትደልዮ)',
    'w.ervaring': 'ተመኩሮ',
    'w.opleiding': 'ትምህርቲ፡ ስልጠና',
    'w.vaardigheden': 'ክእለታት',
    'w.referentie': { m: 'መወከሲ (ብዛዕባ ስራሕካ ክነግር ዝኽእል ሰብ)', f: 'መወከሲ (ብዛዕባ ስራሕኪ ክነግር ዝኽእል ሰብ)', x: 'መወከሲ (ብዛዕባ ስራሕኩም ክነግር ዝኽእል ሰብ)' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.cv.1': 'እንሆ CVይ።',
    's.cv.2': 'ኣብ ስራሕ ህንጻ ተመኩሮ ኣለኒ።',
    's.cv.3': 'ሰለስተ ቋንቋታት እዛረብ።',
    'c.cv.q': { m: 'መወከሲ ሰብ ኣለካ ድዩ?', f: 'መወከሲ ሰብ ኣለኪ ድዩ?', x: 'መወከሲ ሰብ ኣለኩም ድዩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.cv.a': 'እወ፡ ናይ ቀደም ሓላፊይ።',
    'l.interview': 'ቃለ-መሕትት ስራሕ',
    'w.sollicitatiegesprek': 'ቃለ-መሕትት ስራሕ',
    'w.begroeten': 'ሰላምታ ምሃብ',
    'w.vertellen': 'ምንጋር',
    'w.vraagstellen': 'ሕቶ ምሕታት',
    'w.salaris': 'ደሞዝ',
    'w.functie': 'ስራሕ፡ መዝነት',
    's.interview.1': 'ቃለ-መሕትት ስራሕ ኣለኒ።',
    's.interview.2': 'ገና ሆላንድኛ እመሃር ኣለኹ።',
    's.interview.3': 'መዓስ ካባኻትኩም ክሰምዕ እየ?',
    'c.interview.q': { m: 'ብዛዕባ ርእስኻ ገለ ንገረኒ።', f: 'ብዛዕባ ርእስኺ ገለ ንገርኒ።', x: 'ብዛዕባ ርእስኹም ገለ ንገሩኒ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.interview.a': 'ንሓሙሽተ ዓመት ኣብ መኽዘን ሰሪሐ።',
    'u.contract': 'ስራሕን ውዕላትን',
    'l.findwork': 'ስራሕ ምድላይ',
    'w.vacature': 'ክፉት ቦታ ስራሕ',
    'w.uitzendbureau': 'ኤጀንሲ ስራሕ',
    'w.solliciteren': 'ንስራሕ ምሕታት',
    'w.contract': 'ውዕል',
    'w.tekenen': 'ምፍራም',
    'w.tijdelijk': 'ግዝያዊ',
    's.findwork.1': 'ንስራሕ ክሓትት እደሊ።', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.findwork.2': 'እቲ ውዕል ግዝያዊ ድዩ ቀዋሚ?',
    's.findwork.3': 'ቅዳሕ ናይቲ ውዕል ክረኽብ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.findwork.q': { m: 'እንታይ ዓይነት ስራሕ ኢኻ ትደሊ?', f: 'እንታይ ዓይነት ስራሕ ኢኺ ትደልዪ?' },
    'c.findwork.a': 'ኣብ መኽዘን ስራሕ እደሊ ኣለኹ።',
    'l.contract': { m: 'ውዕልካ', f: 'ውዕልኪ', x: 'ውዕልኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.werkgever': 'ኣስራሒ',
    'w.uren': 'ሰዓታት',
    'w.oproepkracht': 'ብጻውዒት ዝሰርሕ ሰራሕተኛ',
    'w.proeftijd': 'ግዜ ፈተነ',
    'w.opzegtermijn': 'ግዜ ቅድመ-ምሕባር (ቅድሚ ስራሕ ምቁራጽ)',
    'w.cao': 'ሓባራዊ ስምምዕ ስራሕ',
    's.contract.1': 'ኣብ ሰሙን ክንደይ ሰዓት እሰርሕ?',
    's.contract.2': 'ግዜ ፈተነ ክንደይ እዩ ዝነውሕ?',
    's.contract.3': 'ኣየናይ ሓባራዊ ስምምዕ ስራሕ እዩ ዝምልከተኒ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.contract.q': { m: 'ጽባሕ ናብ ስራሕ ክትመጽእ ትኽእል ዶ?', f: 'ጽባሕ ናብ ስራሕ ክትመጽኢ ትኽእሊ ዶ?', x: 'ጽባሕ ናብ ስራሕ ክትመጽኡ ትኽእሉ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.a': 'እወ፡ ሰዓት ክንደይ ኣብኡ ክኸውን ኣለኒ?',
    'l.agency': 'ብኤጀንሲ ስራሕ ምስራሕ',
    'w.uitzendkracht': 'ብኤጀንሲ ዝሰርሕ ግዝያዊ ሰራሕተኛ',
    'w.intercedent': 'ኣብ ኤጀንሲ ስራሕ ተራኺቢ ሰብ',
    'w.urenbriefje': 'ወረቐት ሰዓታት ስራሕ',
    'w.opdracht': 'ዕማም (ኣብ ሓደ ትካል ዝስራሕ ስራሕ)',
    'w.verlengen': 'ምንዋሕ (ግዜ ምውሳኽ)',
    'w.uitbetalen': 'ምኽፋል (ገንዘብ)',
    's.agency.1': 'ብኤጀንሲ ስራሕ እሰርሕ።',
    's.agency.2': 'ዕማመይ ክናዋሕ ድዩ?',
    's.agency.3': 'ዕማመይ መዓስ እዩ ዝውዳእ?',
    'c.agency.q': { m: 'ሰዓታትካ ሓቢርካ ዶ?', f: 'ሰዓታትኪ ሓቢርኪ ዶ?', x: 'ሰዓታትኩም ሓቢርኩም ዶ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.a': 'እወ፡ ትማሊ ብኣፕ።',
    'u.papers': 'መንበሪ ገዛን ወረቓቕትን',
    'l.bsn': { m: 'BSNካን ወረቓቕትካን', f: 'BSNኪን ወረቓቕትኪን' },
    'w.bsn': 'ቁጽሪ ግልጋሎት ዜጋ',
    'w.identiteitsbewijs': 'መንነት ወረቐት',
    'w.gemeente': 'ቤት ጽሕፈት ከተማ፡ ምምሕዳር ከተማ',
    'w.inschrijven': 'ምምዝጋብ',
    'w.adres': 'ኣድራሻ',
    'w.zorgverzekering': 'መድሕን ጥዕና',
    's.bsn.1': 'ኣብ ምምሕዳር ከተማ እምዝገብ።',
    's.bsn.2': 'ኣድራሻይ ተቐይሩ።',
    's.bsn.3': 'ብDigiD እኣቱ።',
    'c.bsn.q': { m: 'መንነት ወረቐትካ ክርኢ ይፍቀደለይ ዶ?', f: 'መንነት ወረቐትኪ ክርኢ ይፍቀደለይ ዶ?', x: 'መንነት ወረቐትኩም ክርኢ ይፍቀደለይ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.bsn.a': 'እወ፡ እንሆ ፓስፖርተይ።',
    'l.housing': 'መንበሪ ገዛ',
    'w.kamer': 'ክፍሊ',
    'w.huur': 'ክራይ',
    'w.huurcontract': 'ውዕል ክራይ',
    'w.borg': 'ዋሕስ ገንዘብ',
    'w.huisbaas': 'ዋና ገዛ',
    'w.inhouden': { m: 'ምቑራጽ (ካብ ደሞዝካ)', f: 'ምቑራጽ (ካብ ደሞዝኪ)', x: 'ምቑራጽ (ካብ ደሞዝኩም)' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.housing.1': 'ክራይ ኣብ ሰሙን ክንደይ እዩ?',
    's.housing.2': 'ዋሕስ ገንዘብ ይምለሰለይ ድዩ?',
    's.housing.3': 'ፍሉይ ውዕል ክራይ እደሊ።',
    'c.housing.q': { m: 'ክራይ ካብ ደሞዝካ ንቖርጾ።', f: 'ክራይ ካብ ደሞዝኪ ንቖርጾ።', x: 'ክራይ ካብ ደሞዝኩም ንቖርጾ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.housing.a': 'እሞ እዚ ብጽሑፍ እደልዮ።',
    'u.pay': 'ደሞዝ',
    'l.payslip': { m: 'ወረቐት ደሞዝካ', f: 'ወረቐት ደሞዝኪ', x: 'ወረቐት ደሞዝኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.loon': 'ደሞዝ',
    'w.bruto': 'ጠቕላላ (ቅድሚ ግብሪ)',
    'w.netto': { m: 'ጽሩይ (ዝበጽሓካ)', f: 'ጽሩይ (ዝበጽሓኪ)', x: 'ጽሩይ (ዝበጽሓኩም)' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.loonstrook': 'ወረቐት ደሞዝ',
    'w.belasting': 'ግብሪ',
    'w.uurloon': 'ደሞዝ ብሰዓት',
    's.payslip.1': 'ደሞዘይ ብሰዓት ክንደይ እዩ?',
    's.payslip.2': 'ወረቐት ደሞዘይ ቅኑዕ ኣይኮነን።',
    's.payslip.3': 'ጽሩይ ካብ ጠቕላላ ይውሕድ።',
    'c.payslip.q': { m: 'ወረቐት ደሞዝካ በጺሑካ ድዩ?', f: 'ወረቐት ደሞዝኪ በጺሑኪ ድዩ?', x: 'ወረቐት ደሞዝኩም በጺሑኩም ድዩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.a': 'እወ፡ ግን ገለ ሰዓታት ጎዲሎም።',
    'l.extra': 'ተወሳኺ ገንዘብ',
    'w.vakantiegeld': 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ',
    'w.overuren': 'ተወሳኺ ሰዓታት',
    'w.toeslag': 'ተወሳኺ ክፍሊት',
    'w.minimumloon': 'ዝተሓተ ደሞዝ',
    'w.bankrekening': 'ሕሳብ ባንኪ',
    'w.betalen': 'ምኽፋል',
    's.extra.1': 'ንስራሕ ለይቲ ተወሳኺ ክፍሊት እረኽብ ድየ?',
    's.extra.2': 'ተወሳኺ ሰዓታት ይኽፈሉ ድዮም?',
    's.extra.3': 'ደሞዘይ ናብ ሕሳብ ባንከይ ይኣቱ።',
    'c.extra.q': { m: 'ሎሚ ክልተ ሰዓት ዝያዳ ክትጸንሕ ትኽእል ዶ?', f: 'ሎሚ ክልተ ሰዓት ዝያዳ ክትጸንሒ ትኽእሊ ዶ?', x: 'ሎሚ ክልተ ሰዓት ዝያዳ ክትጸንሑ ትኽእሉ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.a': 'እወ፡ ነቲ ተወሳኺ ሰዓታት ክትጽሕፎ ዲኻ?',
    'u.house': 'ሕግታት ትካል',
    'l.phone': { m: 'ተሌፎንካ ኣብ ስራሕ', f: 'ተሌፎንኪ ኣብ ስራሕ', x: 'ተሌፎንኩም ኣብ ስራሕ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.telefoon': 'ተሌፎን',
    'w.appen': 'መልእኽቲ ምስዳድ (ብኣፕ)',
    'w.kluisje': 'ናይ ውልቂ ሳንዱቕ ምስ ቁልፊ',
    'w.uitzetten': 'ምጥፋእ',
    'w.prive': 'ውልቃዊ',
    'w.foto': 'ስእሊ',
    's.phone.1': 'ተሌፎነይ ኣብ ሳንዱቐይ ኣሎ።',
    's.phone.2': 'ተሌፎነይ ከጥፍኦ እየ።',
    's.phone.3': 'ኣብዚ ስእሊ ክወስድ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.phone.q': 'ኣብ ጥቓ ማሽን ተሌፎን የለን፡ ሕራይ?',
    'c.phone.a': 'ሕራይ፡ ኣብ ዕረፍቲ መልእኽቲ ክሰድድ እየ።',
    'l.smoking': 'ሽጋራ ምትካኽ',
    'w.roken': 'ሽጋራ ምትካኽ',
    'w.rookplek': 'ቦታ ሽጋራ',
    'w.verboden': 'ዘይፍቀድ፡ ክልኩል',
    'w.buiten': 'ደገ',
    'w.esigaret': 'ኤለክትሮኒካዊ ሽጋራ (ቬፕ)',
    'w.brandbaar': 'ቀልጢፉ ዝነድድ',
    's.smoking.1': 'ኣብዚ ሽጋራ ምትካኽ ኣይፍቀድን።',
    's.smoking.2': 'ቦታ ሽጋራ ኣበይ ኣሎ?',
    's.smoking.3': 'ኣብ ዕረፍቲ ኣብ ደገ ጥራይ እየ ዘትክኽ።',
    'c.smoking.q': { m: 'ሽጋራ ከተትክኽ ትመጽእ ዶ?', f: 'ሽጋራ ከተትክኺ ትመጽኢ ዶ?', x: 'ሽጋራ ከተትክኹ ትመጽኡ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.smoking.a': 'ኣይፋል፡ ገና ዕረፍተይ ኣይበጽሐን።',
    'l.clock': 'ሰዓት ምምዝጋብን ብግዜ ምምጻእን',
    'w.inklokken': 'ምጅማር ስራሕ ምምዝጋብ',
    'w.uitklokken': 'ምውዳእ ስራሕ ምምዝጋብ',
    'w.pasje': 'ካርድ (ናይ ሰራሕተኛ)',
    'w.prikklok': 'ሰዓት መመዝገቢ',
    'w.optijd': 'ብግዜ',
    'w.rooster': 'መደብ ስራሕ',
    's.clock.1': 'ሰዓት 6:00 ምጅማር ስራሐይ እምዝግብ።',
    's.clock.2': 'ካርደይ ረሲዐዮ።',
    's.clock.3': 'መደብ ስራሕ ኣበይ ኣሎ?',
    'c.clock.q': { m: 'ኣብ ክንዳይ ክትምዝግበለይ ትኽእል ዶ?', f: 'ኣብ ክንዳይ ክትምዝግብለይ ትኽእሊ ዶ?' },
    'c.clock.a': 'ኣይፋል፡ እዚ ኣይፍቀድን።',
    'l.hygiene': 'ኣልኮል፡ ኣደንዛዚ ዕጸን ጽሬትን',
    'w.alcohol': 'ኣልኮል',
    'w.medicijn': 'መድሃኒት',
    'w.handenwassen': 'ኣእዳው ምሕጻብ',
    'w.werkkleding': 'ክዳን ስራሕ',
    'w.haarnetje': 'መሸፈኒ ጸጉሪ (መርበብ)',
    'w.schoon': 'ጽሩይ',
    's.hygiene.1': { m: 'ቅድሚ ስራሕ ኣእዳውካ ተሓጸብ።', f: 'ቅድሚ ስራሕ ኣእዳውኪ ተሓጸቢ።', x: 'ቅድሚ ስራሕ ኣእዳውኩም ተሓጸቡ።' },
    's.hygiene.2': 'ኣልኮልን ኣደንዛዚ ዕጽን ኣይፍቀዱን።',
    's.hygiene.3': 'ክዳን ስራሐይ ጽሩይ እዩ።',
    'c.hygiene.q': { m: 'መሸፈኒ ጸጉርኻ ገይርካ ዲኻ?', f: 'መሸፈኒ ጸጉርኺ ገይርኪ ዲኺ?', x: 'መሸፈኒ ጸጉርኹም ገይርኩም ዲኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.hygiene.a': 'እወ፡ ቀለበተይ እውን ኣውጺአ።',
    'u.social': 'ምስ ካልኦት ጽቡቕ ርክብ',
    'l.smalltalk': 'ሓጺር ዕላልን ዕረፍትን',
    'w.weekend': 'ቀዳምን ሰንበትን',
    'w.koffie': 'ቡን',
    'w.gezellig': 'ምቹእ፡ ብሓባር ጽቡቕ',
    'w.weer': 'ኩነታት ኣየር',
    'w.verjaardag': 'መዓልቲ ልደት',
    'w.gefeliciteerd': 'እንቋዕ ሓጎሰካ / እንቋዕ ሓጎሰኪ',
    's.smalltalk.1': 'ቀዳምን ሰንበትን ከመይ ነይሩ?',
    's.smalltalk.2': 'ምሳኻትኩም ክቕመጥ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.smalltalk.3': 'ሎሚ ኣየር ጽቡቕ እዩ።',
    'c.smalltalk.q': { m: 'ኣብ ቀዳምን ሰንበትን እንታይ ገበርካ?', f: 'ኣብ ቀዳምን ሰንበትን እንታይ ገበርኪ?', x: 'ኣብ ቀዳምን ሰንበትን እንታይ ገበርኩም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.smalltalk.a': 'ምስ ኣዕሩኽተይ ኩዕሶ እግሪ ተጻዊተ።',
    'l.mistakes': 'ርእይቶን ጌጋታትን',
    'w.fout': 'ጌጋ',
    'w.compliment': 'ናእዳ',
    'w.feedback': { m: "ርእይቶ (ሓደ ሰብ ብዛዕባ ስራሕካ ዝብሎ)", f: "ርእይቶ (ሓደ ሰብ ብዛዕባ ስራሕኪ ዝብሎ)", x: "ርእይቶ (ሓደ ሰብ ብዛዕባ ስራሕኩም ዝብሎ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitleggen': 'ምግላጽ',
    'w.leren': 'ምምሃር',
    'w.verbeteren': 'ምምሕያሽ፡ ምእራም',
    's.mistakes.1': 'ይቕሬታ፡ ጌጋ ገይረ።',
    's.mistakes.2': 'ክትገልጾ ትኽእል ዶ?',
    's.mistakes.3': 'ስለቲ ናእዳ የቐንየለይ!',
    'c.mistakes.q': { m: 'ጽቡቕ ገይርካ!', f: 'ጽቡቕ ገይርኪ!', x: 'ጽቡቕ ገይርኩም!' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.mistakes.a': 'የቐንየለይ፡ ምስማዑ የሐጉስ።',
    'l.respect': 'ክብሪ ንኹሉ ሰብ',
    'w.respect': 'ክብሪ',
    'w.gelijk': 'ማዕረ',
    'w.grens': 'ደረት',
    'w.neezeggen': 'ኣይፋል ምባል',
    'w.pesten': 'ምጽቃጥ (ብተደጋጋሚ ምህሳይን ምንዓቕን)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.vertrouwenspersoon': 'ምስጢራዊ ኣማኻሪ (ዝእመን ሰብ)',
    's.respect.1': 'ኣብዚ ኩሉ ሰብ ማዕረ እዩ።',
    's.respect.2': 'እዚ ኣይቕበሎን እየ።',
    's.respect.3': 'ደው በል፡ እዚ ደረተይ እዩ።',
    'c.respect.q': { m: 'እንታይ ኮይንካ? ጓሂ ዘለካ ትመስል።', f: 'እንታይ ኮይንኪ? ጓሂ ዘለኪ ትመስሊ።', x: 'እንታይ ኮይንኩም? ጓሂ ዘለኩም ትመስሉ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.respect.a': 'ሓደ ብጻይ ስራሕ ይጸቕጠኒ ኣሎ።',
    'u.rights': 'ሕግታትን መሰላትን',
    'l.health': 'ውሑስን ጥዕናዊን ስራሕ',
    'w.arbowet': 'ሕጊ ጥዕናን ድሕንነትን ስራሕ',
    'w.veilig': 'ውሑስ',
    'w.werktijden': 'ሰዓታት ስራሕ',
    'w.rust': 'ዕረፍቲ',
    'w.beschermingsmiddelen': 'መከላኸሊ ናውቲ',
    'w.arbeidsinspectie': 'ቤት ጽሕፈት መርመራ ስራሕ',
    's.health.1': 'ዕረፍቲ ናይ ምውሳድ መሰል ኣለኒ።',
    's.health.2': 'ስራሕ ውሑስ ክኸውን ኣለዎ።',
    's.health.3': 'ንቤት ጽሕፈት መርመራ ስራሕ እሕብሮ።',
    'c.health.q': { m: 'ሕጂ ዕረፍቲ ክትወስድ ኣለካ።', f: 'ሕጂ ዕረፍቲ ክትወስዲ ኣለኪ።', x: 'ሕጂ ዕረፍቲ ክትወስዱ ኣለኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.a': 'ሕራይ፡ ንሓጺር ግዜ ክቕመጥ እየ።',
    'l.rights': { m: 'መሰላትካ', f: 'መሰላትኪ', x: 'መሰላትኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.recht': 'መሰል',
    'w.discriminatie': 'ኣድልዎ',
    'w.vakbond': 'ማሕበር ሰራሕተኛታት',
    'w.juridischloket': 'ቤት ጽሕፈት ናጻ ሕጋዊ ሓገዝ', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.klacht': 'ጥርዓን',
    'w.ontslag': 'ካብ ስራሕ ምስጓግ',
    's.rights.1': 'ጥርዓን ከቕርብ እደሊ።',
    's.rights.2': 'ኣባል ማሕበር ሰራሕተኛታት እየ።',
    's.rights.3': 'እዚ ኣድልዎ እዩ።',
    'c.rights.q': { m: 'ንምስጓግካ ኣብዚ ፈርም።', f: 'ንምስጓግኪ ኣብዚ ፈርሚ።', x: 'ንምስጓግኩም ኣብዚ ፈርሙ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.a': 'ኣይፋል፡ ገና ኣይፍርምን እየ።',
    'l.mustmay': { m: 'ግድን ድዩ፡ ወይስ ክትመርጽ ትኽእል?', f: 'ግድን ድዩ፡ ወይስ ክትመርጺ ትኽእሊ?', x: 'ግድን ድዩ፡ ወይስ ክትመርጹ ትኽእሉ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'w.moeten': 'ግድን ምዃን', // nieuw, nalezen // nagelezen AI 22 nov
    'w.niethoeven': 'ግድን ዘይምዃን', // nieuw, nalezen // nagelezen AI 22 nov
    'w.nodig': 'ኣድላዪ', // nieuw, nalezen // nagelezen AI 22 nov
    'w.vrijwillig': 'ብድሌት፡ ብምርጫ', // nieuw, nalezen // nagelezen AI 22 nov
    'w.keuze': 'ምርጫ', // nieuw, nalezen // nagelezen AI 22 nov
    'w.regel': 'ሕጊ', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.1': 'ነዚ ክፍርሞ ግድን ድዩ?', // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.2': { m: 'ኣይፋል፡ ክትፍርም ግድን ኣይኮነን።', f: 'ኣይፋል፡ ክትፍርሚ ግድን ኣይኮነን።', x: 'ኣይፋል፡ ክትፍርሙ ግድን ኣይኮነን።' }, // nieuw, nalezen // nagelezen AI 22 nov
    's.mustmay.3': 'እዚ እዩ ሕጊ፡ ሄልመት ግዴታ እዩ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.q': 'ቀዳም ተወሳኺ ሰዓት ክሰርሕ ግድን ድዩ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.a': 'ኣይፋል፡ ኣየድልን እዩ። ብድሌት እዩ።', // nieuw, nalezen // nagelezen AI 22 nov
    'u.leave': "ዕረፍቲ", // nieuw, nalezen (5 nov 2026: nu alleen "Leave"; Ziekte is u.sick) // nagelezen AI 22 nov
    'l.leave': 'መዓልትታት ዕረፍቲ',
    'w.vakantiedagen': 'መዓልትታት ዕረፍቲ (በዓል)',
    'w.verlof': 'ፍቓድ (ዕረፍቲ)',
    'w.aanvragen': 'ምሕታት፡ ምጥላብ',
    'w.feestdag': 'ህዝባዊ በዓል',
    'w.vrij': 'ናጻ፡ ዘይትሰርሓሉ', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.calamiteitenverlof': 'ናይ ህጹጽ ኩነታት ፍቓድ',
    's.leave.1': 'ፍቓድ ክሓትት እደሊ።',
    's.leave.2': 'ኣብ ህዝባዊ በዓል ናጻ ድየ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.leave.3': 'ኣብ ገዛ ህጹጽ ኩነታት ኣለኒ።',
    'c.leave.q': { m: 'መዓስ ናብ ዕረፍቲ ክትከይድ ትደሊ?', f: 'መዓስ ናብ ዕረፍቲ ክትከዲ ትደልዪ?' },
    'c.leave.a': 'ኣብ ሓምለ፡ ሰለስተ ሰሙን።',
    'l.illness': { m: 'ሕሙም ኣብ ገዛ', f: 'ሕምምቲ ኣብ ገዛ' },
    'w.ziekmelden': 'ሕማም ምሕባር',
    'w.betermelden': { m: 'ከም ዝሓወኻ ምሕባር', f: 'ከም ዝሓወኺ ምሕባር', x: 'ከም ዝሓወኹም ምሕባር' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.bedrijfsarts': 'ሓኪም ትካል',
    'w.ziekte': 'ሕማም',
    'w.doorbetalen': 'ደሞዝ ምቕጻል',
    'w.wachtdag': 'መዓልቲ ምጽባይ (ብዘይ ደሞዝ)',
    's.illness.1': { m: 'ሕሙም ምዃነይ እሕብር ኣለኹ።', f: 'ሕምምቲ ምዃነይ እሕብር ኣለኹ።' },
    's.illness.2': 'ምስ ሓኪም ትካል ቆጸራ ኣለኒ።',
    's.illness.3': 'ጽባሕ ናብ ስራሕ ክምለስ እየ።',
    'c.illness.q': { m: 'ብልክዕ እንታይ እዩ ዘሕመመካ?', f: 'ብልክዕ እንታይ እዩ ዘሕመመኪ?', x: 'ብልክዕ እንታይ እዩ ዘሕመመኩም?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.a': 'ብዛዕባ እዚ ምስ ሓኪም ትካል ክዛረብ እየ።',
    'u.exploit': { m: 'መሰላትካ ፍለጥ፡ ምዝመዛ', f: 'መሰላትኪ ፍለጢ፡ ምዝመዛ', x: 'መሰላትኩም ፍለጡ፡ ምዝመዛ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'l.warning': 'ምልክታት መጠንቀቕታ',
    'w.uitbuiting': 'ምዝመዛ',
    'w.paspoort': 'ፓስፖርት',
    'w.schuld': 'ዕዳ',
    'w.dreigen': 'ምፍርራሕ',
    'w.onderbetaald': 'ብጣዕሚ ውሑድ ዝኽፈል',
    'w.afpakken': 'ምምንዛዕ',
    's.warning.1': 'ሓላፊይ ፓስፖርተይ ሒዝዎ ኣሎ።',
    's.warning.2': 'ወረቐት ደሞዝ ኣይወሃበንን።',
    's.warning.3': 'ዕዳ ክመልስ ኣለኒ።',
    'c.warning.q': { m: 'ፓስፖርትካ ሃበኒ።', f: 'ፓስፖርትኪ ሃብኒ።', x: 'ፓስፖርትኩም ሃቡኒ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.a': 'ኣይፋል፡ ቅዳሕ ጥራይ ክትወስዱ ትኽእሉ ኢኹም።',
    'l.gethelp': 'ሓገዝ ምርካብ',
    'w.politie': 'ፖሊስ',
    'w.anoniem': { m: 'ብዘይ ስምካ', f: 'ብዘይ ስምኪ', x: 'ብዘይ ስምኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.melden': 'ምሕባር',
    'w.hulp': 'ሓገዝ',
    'w.gevaar': 'ሓደጋ',
    'w.bang': { m: 'ፍርሒ ዘለዎ', f: 'ፍርሒ ዘለዋ', x: 'ፍርሒ ዘለዎም' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.gethelp.1': 'ገለ ነገር ክሕብር እደሊ።',
    's.gethelp.2': 'ብዘይ ስመይ ክገብሮ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    's.gethelp.3': 'ንሓላፊይ እፈርሆ እየ።',
    'c.gethelp.q': { m: 'ብኸመይ ክሕግዘካ እኽእል?', f: 'ብኸመይ ክሕግዘኪ እኽእል?', x: 'ብኸመይ ክሕግዘኩም እኽእል?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.a': 'ኣብ ስራሕ ብኽፉእ እተሓዝ ኣለኹ።',
    'u.contact': 'ናብ ስራሕ ምድዋልን መልእኽቲ ምስዳድን',
    'l.callin': 'ብተሌፎን ምሕባር',
    'w.telefoontje': 'ጻውዒት ተሌፎን',
    'w.terugbellen': { m: 'ተመሊስካ ምድዋል', f: 'ተመሊስኪ ምድዋል', x: 'ተመሊስኩም ምድዋል' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.bereikbaar': 'ክርከብ ዝኽእል (ብተሌፎን)',
    'w.reden': 'ምኽንያት',
    'w.overmorgen': 'ድሕሪ ጽባሕ',
    'w.inspreken': 'ናይ ድምጺ መልእኽቲ ምግዳፍ',
    's.callin.1': 'ሰላም፡ Ali እየ።',
    's.callin.2': 'ድሕሪ ጽባሕ ክምለስ እየ ዝመስለኒ።',
    's.callin.3': 'ተመሊስኩም ክትድውሉለይ ትኽእሉ ዶ?',
    'c.callin.q': { m: 'መዓስ ኢኻ ትምለስ?', f: 'መዓስ ኢኺ ትምለሲ?', x: 'መዓስ ኢኹም ትምለሱ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.callin.a': 'ሰኑይ ይመስለኒ።',
    'l.texting': 'መልእኽትታትን ኣፕ መደብ ስራሕን',
    'w.bericht': 'መልእኽቲ',
    'w.app': 'ኣፕ',
    'w.reageren': 'ምምላስ',
    'w.ruilen': 'ምልውዋጥ',
    'w.kijken': 'ምርኣይ፡ ምፍታሽ',
    'w.groet': 'ሰላምታ (ኣብ መወዳእታ መልእኽቲ)',
    's.texting.1': 'ዓሰርተ ደቓይቕ ክድንጒ እየ።',
    's.texting.2': 'ፈረቓ ስራሕ ምሳይ ክለዋወጥ ዝደሊ ሰብ ኣሎ ዶ?',
    's.texting.3': 'መዓልታዊ ነቲ ኣፕ እርእዮ።',
    'c.texting.q': { m: 'ቀዳም ተወሳኺ ፈረቓ ክትሰርሕ ትኽእል ዶ?', f: 'ቀዳም ተወሳኺ ፈረቓ ክትሰርሒ ትኽእሊ ዶ?', x: 'ቀዳም ተወሳኺ ፈረቓ ክትሰርሑ ትኽእሉ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.texting.a': 'እወ፡ ብኡብኡ ኣብቲ ኣፕ ክምልስ እየ።',
    'u.grow': 'ዲፕሎማታትን ምዕባለን',
    'l.certs': 'ሰርቲፊኬታት',
    'w.certificaat': 'ሰርቲፊኬት',
    'w.cursus': 'ኮርስ',
    'w.examen': 'ፈተና',
    'w.slagen': 'ምሕላፍ (ፈተና)',
    'w.heftruckcertificaat': 'ሰርቲፊኬት ፎርክሊፍት',
    'w.halen': 'ምርካብ (ሰርቲፊኬት)',
    's.certs.1': 'ናይ ድሕንነት ሰርቲፊኬት VCA ኣለኒ።',
    's.certs.2': 'ኮርስ ክወስድ እደሊ።',
    's.certs.3': 'ኣስራሒ ንኮርስ ይኸፍል ድዩ?',
    'c.certs.q': { m: 'ሰርቲፊኬት ፎርክሊፍት ኣለካ ድዩ?', f: 'ሰርቲፊኬት ፎርክሊፍት ኣለኪ ድዩ?', x: 'ሰርቲፊኬት ፎርክሊፍት ኣለኩም ድዩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.certs.a': 'ኣይፋል፡ ግን ክረኽቦ ደስ ይብለኒ።',
    'l.diploma': { m: 'ዲፕሎማኻን ስልጠናኻን', f: 'ዲፕሎማኺን ስልጠናኺን' },
    'w.diploma': 'ዲፕሎማ',
    'w.waarderen': 'ዲፕሎማ ምግምጋም',
    'w.training': 'ስልጠና',
    'w.verplicht': 'ግዴታ',
    'w.werktijd': 'ግዜ ስራሕ',
    'w.verderkomen': 'ንቕድሚት ምኻድ',
    's.diploma.1': 'ካብ ሃገረይ ዲፕሎማ ኣለኒ።',
    's.diploma.2': 'እዚ ስልጠና ግዴታ ድዩ?',
    's.diploma.3': 'ኣብ ስራሐይ ንቕድሚት ክኸይድ እደሊ።',
    'c.diploma.q': { m: 'ስልጠና ክትወስድ ትደሊ ዶ?', f: 'ስልጠና ክትወስዲ ትደልዪ ዶ?' },
    'c.diploma.a': 'እወ፡ በጃኻ! መን እዩ ዝኸፍሎ?',
    'u.health': 'ጥዕና',
    'l.doctor': 'ሓኪም ድዩ 112?',
    'w.huisarts': 'ሓኪም ስድራ',
    'w.huisartsenpost': 'ግልጋሎት ሓኪም ንምሸት፡ ለይትን ቀዳም-ሰንበትን',
    'w.apotheek': 'ፋርማሲ',
    'w.recept': 'ወረቐት መድሃኒት (ካብ ሓኪም)',
    'w.spoed': 'ህጹጽ',
    'w.ambulance': 'ኣምቡላንስ',
    's.doctor.1': 'ምስ ሓኪም ስድራ ቆጸራ እደሊ።',
    's.doctor.2': 'ፋርማሲ ኣበይ ኣሎ?',
    's.doctor.3': 'ህጹጽ እዩ።',
    'c.doctor.q': 'ግልጋሎት ሓኪም፡ እንታይ ክሕግዘኩም?',
    'c.doctor.a': 'ወደይ ብርቱዕ ረስኒ ኣለዎ።',
    'l.insurance': 'መድሕን ጥዕና',
    'w.premie': 'ክፍሊት መድሕን (ወርሓዊ)',
    'w.eigenrisico': { m: 'ናይ ገዛእ ርእስኻ ክፍሊት (ቅድም ባዕልካ እትኸፍሎ ወጻኢ)', f: 'ናይ ገዛእ ርእስኺ ክፍሊት (ቅድም ባዕልኺ እትኸፍልዮ ወጻኢ)', x: 'ናይ ገዛእ ርእስኹም ክፍሊት (ቅድም ባዕልኹም እትኸፍልዎ ወጻኢ)' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.zorgtoeslag': 'ሓገዝ ክፍሊት ጥዕና',
    'w.verzekeraar': 'ትካል መድሕን',
    'w.permaand': 'ኣብ ወርሒ',
    'w.vergoeden': 'ወጻኢታት ምሽፋን',
    's.insurance.1': 'ወርሒ ወርሒ ክፍሊት መድሕን እኸፍል።',
    's.insurance.2': 'እዚ ይሽፈን ድዩ?',
    's.insurance.3': 'ሓገዝ ክፍሊት ጥዕና እሓትት።',
    'c.insurance.q': { m: 'ኣብ ኣየናይ ትካል መድሕን ኢኻ ዘለኻ?', f: 'ኣብ ኣየናይ ትካል መድሕን ኢኺ ዘለኺ?', x: 'ኣብ ኣየናይ ትካል መድሕን ኢኹም ዘለኹም?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.a': 'እዚ ኣብ ካርድ መድሕን ጥዕናይ ኣሎ።',
    'u.money': 'ገንዘብን ደብዳቤታትን',
    'l.letters': 'ወግዓዊ ደብዳቤታት',
    'w.brief': 'ደብዳቤ',
    'w.post': 'ፖስታ',
    'w.belastingdienst': 'ቤት ጽሕፈት ግብሪ',
    'w.aangifte': 'ጸብጻብ ግብሪ',
    'w.inkomen': 'ኣታዊ',
    'w.terugbetalen': 'ምምላስ (ገንዘብ)',
    's.letters.1': 'እዚ ደብዳቤ ኣይተረድኣንን።',
    's.letters.2': 'በዚ ደብዳቤ ክትሕግዘኒ ትኽእል ዶ?',
    's.letters.3': 'ኣታወይ ተቐይሩ።',
    'c.letters.q': { m: 'ጸብጻብ ግብሪኻ ገይርካዮ ዲኻ?', f: 'ጸብጻብ ግብሪኺ ገይርክዮ ዲኺ?' },
    'c.letters.a': 'ኣይፋል፡ ቅድሚ 1 ግንቦት ክገብሮ እየ።',
    'l.scams': { m: 'ካብ ምትላል ተጠንቀቕ', f: 'ካብ ምትላል ተጠንቀቒ', x: 'ካብ ምትላል ተጠንቀቑ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.pincode': 'ምስጢራዊ ቁጽሪ (PIN)',
    'w.link': 'ሊንክ',
    'w.oplichter': 'ተታላሊ',
    'w.sms': 'ጽሑፍ መልእኽቲ (SMS)',
    'w.controleren': 'ምፍታሽ',
    'w.nep': 'ናይ ሓሶት',
    's.scams.1': 'ምስጢራዊ ቁጽረይ ፈጺመ ኣይህብን።',
    's.scams.2': 'ኣብቲ ሊንክ ኣይጠውቕን።',
    's.scams.3': 'እዚ መልእኽቲ ናይ ሓሶት እዩ።',
    'c.scams.q': { m: 'እዚ ባንኪ እዩ። ምስጢራዊ ቁጽርኻ እንታይ እዩ?', f: 'እዚ ባንኪ እዩ። ምስጢራዊ ቁጽርኺ እንታይ እዩ?', x: 'እዚ ባንኪ እዩ። ምስጢራዊ ቁጽርኹም እንታይ እዩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.scams.a': 'ኣይህቦን። ተሌፎን ክዓጽዎ እየ።',
    'u.travel': 'ናብ ስራሕ ምብጻሕ',
    'l.bike': 'ብብሽክለታ',
    'w.fiets': 'ብሽክለታ',
    'w.fietspad': 'መንገዲ ብሽክለታ',
    'w.licht': 'መብራህቲ',
    'w.slot': 'ቁልፊ',
    'w.stoplicht': 'መብራህቲ ትራፊክ',
    'w.bel': 'ደወል',
    's.bike.1': 'ብብሽክለታ ናብ ስራሐይ እኸይድ።',
    's.bike.2': { m: 'መብራህትኻ ወልዖ!', f: 'መብራህትኺ ወልዕዮ!' },
    's.bike.3': { m: 'ብሽክለታኻ ቆልፋ።', f: 'ብሽክለታኺ ቆልፍያ።' },
    'c.bike.q': { m: 'ናብ ስራሕ ብኸመይ ትኸይድ?', f: 'ናብ ስራሕ ብኸመይ ትኸዲ?' },
    'c.bike.a': 'ብብሽክለታ፡ ዕስራ ደቒቕ።',
    'l.transit': 'ህዝባዊ መጓዓዝያን ወጻኢ መጓዓዝያን',
    'w.bus': 'ኣውቶቡስ',
    'w.trein': 'ባቡር',
    'w.inchecken': { m: 'ምስ ኣተኻ ካርድ ምንካእ', f: 'ምስ ኣተኺ ካርድ ምንካእ', x: 'ምስ ኣተኹም ካርድ ምንካእ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.uitchecken': { m: 'ምስ ወረድካ ካርድ ምንካእ', f: 'ምስ ወረድኪ ካርድ ምንካእ', x: 'ምስ ወረድኩም ካርድ ምንካእ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.bankpas': 'ካርድ ባንኪ',
    'w.reiskosten': 'ክፍሊት መጓዓዝያ',
    's.transit.1': 'ምስ ኣተኹ ብካርድ ባንከይ እምዝገብ።',
    's.transit.2': { m: 'ምስ ወረድካ ምምዝጋብ ኣይትረስዕ።', f: 'ምስ ወረድኪ ምምዝጋብ ኣይትረስዒ።', x: 'ምስ ወረድኩም ምምዝጋብ ኣይትረስዑ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.transit.3': 'መዕረፊ ኣውቶቡስ ኣበይ ኣሎ?',
    'c.transit.q': { m: 'ብባቡር ዲኻ ትመጽእ?', f: 'ብባቡር ዲኺ ትመጽኢ?', x: 'ብባቡር ዲኹም ትመጽኡ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.transit.a': 'ኣይፋል፡ ብኣውቶቡስ። ኣብ ቅድሚ ማዕጾ ደው ይብል።',
    'u.lost': 'ስራሕ ምጥፋእ',
    'l.ww': 'ሓገዝ ስራሕ ኣልቦነት',
    'w.uitkering': 'ሓገዝ ገንዘብ (ካብ መንግስቲ)',
    'w.ww': 'ሓገዝ ስራሕ ኣልቦነት',
    'w.werkloos': { m: 'ስራሕ ዘይብሉ', f: 'ስራሕ ዘይብላ', x: 'ስራሕ ዘይብሎም' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.uwv': 'UWV (ቤት ጽሕፈት ስራሕን ሓገዝ ገንዘብን)',
    'w.ontslagnemen': { m: 'ባዕልኻ ስራሕ ምግዳፍ', f: 'ባዕልኺ ስራሕ ምግዳፍ', x: 'ባዕልኹም ስራሕ ምግዳፍ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.werkzoekende': 'ስራሕ ዝደሊ ሰብ',
    's.ww.1': 'ኣብ UWV ሓገዝ ስራሕ ኣልቦነት እሓትት።',
    's.ww.2': 'ስራሕ የብለይን።',
    's.ww.3': 'ውዕለይ ይውዳእ ኣሎ።',
    'c.ww.q': { m: 'ውዕልካ ስለ ዝውዳእ፡ ሕጂ እንታይ ክትገብር ኢኻ?', f: 'ውዕልኪ ስለ ዝውዳእ፡ ሕጂ እንታይ ክትገብሪ ኢኺ?', x: 'ውዕልኩም ስለ ዝውዳእ፡ ሕጂ እንታይ ክትገብሩ ኢኹም?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.a': 'ብኡብኡ ሓገዝ ስራሕ ኣልቦነት ክሓትት እየ።',
    'l.newjob': 'ሓድሽ ስራሕ ምድላይ',
    'w.baan': 'ስራሕ',
    'w.zoeken': 'ምድላይ',
    'w.bewaren': 'ምዕቃብ',
    'w.bijwerken': 'ምሕዳስ',
    'w.gratis': 'ብናጻ (ብዘይ ክፍሊት)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'w.nooit': 'ፈጺሙ (ዋላ ሓንሳብ)',
    's.newjob.1': 'ሓድሽ ስራሕ እደሊ ኣለኹ።',
    's.newjob.2': 'ወረቓቕቲ ደሞዘይ እዕቅቦም።',
    's.newjob.3': 'ስራሕ ምድላይ ብናጻ እዩ።', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.newjob.q': { m: 'ስራሕ ምስ ዝህሉ ክንድውለልካ ንኽእል ዶ?', f: 'ስራሕ ምስ ዝህሉ ክንድውለልኪ ንኽእል ዶ?', x: 'ስራሕ ምስ ዝህሉ ክንድውለልኩም ንኽእል ዶ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.a': 'እወ፡ በጃኹም። እንሆ ቁጽረይ።',
    'u.build': 'ኣብ ቦታ ህንጻ',
    'l.tools': 'መሳርሒታትን ኣቑሑን',
    'w.steiger': 'መደያይቦ ህንጻ (ስካፎልድ)',
    'w.ladder': 'መሳልል',
    'w.boor': 'መሰርሒ (ድሪል)',
    'w.hamer': 'መዶሻ',
    'w.beton': 'ኮንክሪት',
    'w.kraan': 'ክሬን',
    's.tools.1': { m: 'ነቲ መዶሻ ንሓጺር ግዜ ሃበኒ።', f: 'ነቲ መዶሻ ንሓጺር ግዜ ሃብኒ።', x: 'ነቲ መዶሻ ንሓጺር ግዜ ሃቡኒ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    's.tools.2': 'እቲ መሳልል ኣብ መደያይቦ ተጸጊዑ ኣሎ።',
    's.tools.3': 'እቲ ኮንክሪት ገና ርሒሱ ኣሎ።',
    'c.tools.q': 'እቲ መሰርሒ ኣበይ ኣሎ?',
    'c.tools.a': 'ኣብቲ መኪና፡ ኣብ ድሕሪት።',
    'l.site': 'ድሕንነት ኣብ ቦታ ስራሕ',
    'w.valbeveiliging': 'መከላኸሊ ውድቀት (ቀበቶ)',
    'w.last': 'ጽዕነት',
    'w.gat': 'ጉድጓድ',
    'w.vallen': 'ምውዳቕ',
    'w.risico': 'ስግኣት',
    'w.weigeren': 'ምእባይ',
    's.site.1': { m: 'ተጠንቀቕ፡ ኣብ ልዕሊ ርእስኻ ጽዕነት ኣሎ!', f: 'ተጠንቀቒ፡ ኣብ ልዕሊ ርእስኺ ጽዕነት ኣሎ!', x: 'ተጠንቀቑ፡ ኣብ ልዕሊ ርእስኹም ጽዕነት ኣሎ!' },
    's.site.2': { m: 'መከላኸሊ ውድቀትካ ግበር።', f: 'መከላኸሊ ውድቀትኪ ግበሪ።', x: 'መከላኸሊ ውድቀትኩም ግበሩ።' },
    's.site.3': 'ቅድም ናይ መወዳእታ ደቒቕ ምርመራ ስግኣት እገብር።',
    'c.site.q': { m: 'ኣብ ናሕሲ ንሓጺር ግዜ ክትሕግዝ ትኽእል ዶ?', f: 'ኣብ ናሕሲ ንሓጺር ግዜ ክትሕግዚ ትኽእሊ ዶ?', x: 'ኣብ ናሕሲ ንሓጺር ግዜ ክትሕግዙ ትኽእሉ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.site.a': 'እወ፡ ግን ቅድም መከላኸሊ ውድቀተይ።',
    'u.factory': 'ኣብ ፋብሪካ',
    'l.line': 'መስመር ምፍራይን ማሽናትን',
    'w.lopendeband': 'ዝንቀሳቐስ መስመር (ባንድ)',
    'w.machine': 'ማሽን',
    'w.storing': 'ብልሽት',
    'w.noodstop': 'ናይ ህጹጽ መጠጠዊ',
    'w.inpakken': 'ምዕሻግ',
    'w.productie': 'ምፍራይ',
    's.line.1': 'እቲ መስመር ደው ኢሉ።',
    's.line.2': 'ብልሽት ኣሎ።',
    's.line.3': 'ነቶም ፍርያት እዕሽጎም።',
    'c.line.q': 'ኣብ መስመር ከመይ ይኸይድ ኣሎ?',
    'c.line.a': 'ጽቡቕ፡ ግን እቲ ማሽን ኣዝዩ ደንጓዪ እዩ።',
    'l.quality': 'ጽሬት',
    'w.kwaliteit': 'ጽሬት',
    'w.product': 'ፍርያት',
    'w.afkeuren': 'ምንጻግ',
    'w.beschadigd': 'ዝተጎድአ',
    'w.etiket': 'ኤቲኬት (ምልክት)',
    'w.lijst': 'ዝርዝር',
    's.quality.1': 'እዚ ፍርያት ተጎዲኡ እዩ።',
    's.quality.2': 'እቲ ኤቲኬት ቅኑዕ ኣይኮነን።',
    's.quality.3': 'እዚ ክነጽጎ ኣለኒ ድዩ?',
    'c.quality.q': 'እዚ ስለምንታይ ተፈሊዩ ተቐሚጡ?',
    'c.quality.a': 'እቲ ኤቲኬት ጠዊዩ እዩ።',
    'u.care': 'ኣብ ክንክን',
    'l.client': 'ተገልጋሊን መዓልታዊ ክንክንን',
    'w.client': 'ተገልጋሊ (እትከናኸኖ ሰብ)',
    'w.wassen': 'ምሕጻብ',
    'w.aankleden': 'ምኽዳን፡ ንሰብ ምኽዳን',
    'w.eten': 'መግቢ',
    'w.rolstoel': 'ዓረብያ ስንኩላን',
    'w.verpleegkundige': 'ነርስ',
    's.client.1': 'ጽቡቕ ደቂስኩም ዶ?',
    's.client.2': 'ክዳንኩም ክትክደኑ ክሕግዘኩም እየ።',
    's.client.3': 'ተወሳኺ መግቢ ትደልዩ ዶ?',
    'c.client.q': 'ጃኬተይ ክኽደን ክትሕግዙኒ ትኽእሉ ዶ?',
    'c.client.a': 'ብርግጽ፡ ክሕግዘኩም እየ።',
    'l.privacy': 'ውልቃውነትን ድሕንነትን ኣብ ክንክን',
    'w.privacy': 'ውልቃውነት',
    'w.hygiene': 'ጽሬት',
    'w.doorgeven': 'ሓበሬታ ምሕላፍ',
    'w.geheim': 'ምስጢር',
    'w.toestemming': 'ፍቓድ',
    'w.gevallen': 'ወዲቑ / ወዲቓ',
    's.privacy.1': 'እታ ወይዘሮ ወዲቓ።',
    's.privacy.2': 'ናብ ነርስ ከሕልፎ እየ።',
    's.privacy.3': 'ኣብ ገዛ ብዛዕባ ተገልገልቲ ኣይዛረብን።',
    'c.privacy.q': { m: 'ንኣቶ Jansen ከኒናታቱ ክትህቦ ትኽእል ዶ?', f: 'ንኣቶ Jansen ከኒናታቱ ክትህብዮ ትኽእሊ ዶ?' },
    'c.privacy.a': 'ኣይፋል፡ ኣይፍቀደለይን። ነርስ ከምጽእ እየ።',
    'u.horeca': 'ኣብ ቤት ብልዕን ሆቴልን',
    'l.kitchen': 'ኣብ ክሽነ',
    'w.keuken': 'ክሽነ',
    'w.snijden': 'ምቑራጽ',
    'w.pan': 'ድስቲ',
    'w.koelcel': 'ዝሑል ክፍሊ (ዓቢ ፍሪጅ)', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.allergie': 'ኣለርጂ',
    'w.datum': 'ዕለት',
    's.kitchen.1': { m: 'ነቲ ስጋ ኣብ ዝሑል ክፍሊ ኣቐምጦ።', f: 'ነቲ ስጋ ኣብ ዝሑል ክፍሊ ኣቐምጥዮ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.kitchen.2': { m: 'ነቲ ሽጉርቲ ንኣሽቱ ጌርካ ቁረጾ።', f: 'ነቲ ሽጉርቲ ንኣሽቱ ጌርኪ ቁረጽዮ።' },
    's.kitchen.3': 'ኣብዚ ለውዝ ኣሎ ድዩ?',
    'c.kitchen.q': 'ሓደ ጋሻ ናይ ለውዝ ኣለርጂ ኣለዎ።',
    'c.kitchen.a': 'ንሸፍ ክሓቶ እየ።',
    'l.service': 'ንጋሻ ምግልጋል',
    'w.gast': 'ጋሻ',
    'w.bestelling': 'ትእዛዝ',
    'w.rekening': 'ሕሳብ',
    'w.menu': 'ዝርዝር መግቢ (ሜኑ)',
    'w.afruimen': 'ጣውላ ምእላይ',
    'w.fooi': 'ቲፕ (ካብ ጋሻ ተወሳኺ ገንዘብ)',
    's.service.1': 'እንታይ ክትሰትዩ ትደልዩ?',
    's.service.2': 'ትእዛዝኩም ክወስድ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.service.3': 'ነቲ ጣውላ ኣጽርዮ ኣለኹ።',
    'c.service.q': 'ሕሳብ ክንረኽብ ንኽእል ዶ?',
    'c.service.a': 'ብርግጽ፡ እመጽእ ኣለኹ።',
    'u.clean': 'ጽሬት',
    'l.cleaning': 'ናውቲ ጽሬት',
    'w.dweil': 'መጽረዪ መሬት (ሞፕ)',
    'w.emmer': 'ባልዲ',
    'w.schoonmaakmiddel': 'መጽረዪ ኬሚካል',
    'w.stofzuiger': 'ቫኩም (መጽረዪ ሓመድ)',
    'w.stoffen': 'ሓመድ ምእላይ',
    'w.prullenbak': 'መጕሓፊ ጓሓፍ',
    's.cleaning.1': 'እቲ ባልዲ ኣበይ ኣሎ?',
    's.cleaning.2': 'ነቲ ኮሪዶር ብቫኩም ከጽርዮ እየ።',
    's.cleaning.3': { m: 'ነቲ መጕሓፊ ጓሓፍ ኣራግፎ።', f: 'ነቲ መጕሓፊ ጓሓፍ ኣራግፍዮ።' },
    'c.cleaning.q': { m: 'ሽቓቓት ወዲእካዮም ዲኻ?', f: 'ሽቓቓት ወዲእክዮም ዲኺ?' },
    'c.cleaning.a': 'ዳርጋ፡ ክልተ ተሪፎም።',
    'l.cleansafe': 'ውሑስ ጽሬት',
    'w.glad': 'ዘንሸራትት',
    'w.bordje': 'ምልክት (ሰሌዳ)',
    'w.mengen': 'ምሕዋስ',
    'w.damp': 'ትኪ (ጋዝ)',
    'w.luchten': 'ንጹህ ኣየር ምእታው',
    'w.spoelen': 'ብማይ ምሕጻብ',
    's.cleansafe.1': { m: 'ተጠንቀቕ፡ የንሸራትት!', f: 'ተጠንቀቒ፡ የንሸራትት!', x: 'ተጠንቀቑ፡ የንሸራትት!' },
    's.cleansafe.2': { m: 'ነቲ ምልክት ኣቐምጦ።', f: 'ነቲ ምልክት ኣቐምጥዮ።' },
    's.cleansafe.3': { m: 'መጽረዪ ኬሚካላት ፈጺምካ ኣይትሐውስ።', f: 'መጽረዪ ኬሚካላት ፈጺምኪ ኣይትሐውሲ።', x: 'መጽረዪ ኬሚካላት ፈጺምኩም ኣይትሐውሱ።' },
    'c.cleansafe.q': 'ኣብዚ ክኸይድ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.cleansafe.a': 'ተጠንቀቕ፡ እቲ መሬት ገና የንሸራትት እዩ።',
    'c.cv': 'ሓጺር CV', // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.b': { m: 'ኣብዚ CV ሓጺር እዩ፡ 1 ወይ 2 ገጽ። መራኸቢ ሓበሬታኻ፡ ተመኩሮ ስራሕ፡ ትምህርቲ፡ ቋንቋታትን ክእለታትን ጽሓፍ። ስእሊ ኣየድልን። ሃይማኖትካ፡ ዕድመኻ ወይ ኩነታት ሓዳርካ ክትጽሕፍ ኣየድልየካን። ብዛዕባ እትኽእሎ ሓቀኛ ኩን። ሆላንድኛኻ ክርእየልካ ሓደ ሰብ ሕተት።', f: 'ኣብዚ CV ሓጺር እዩ፡ 1 ወይ 2 ገጽ። መራኸቢ ሓበሬታኺ፡ ተመኩሮ ስራሕ፡ ትምህርቲ፡ ቋንቋታትን ክእለታትን ጽሓፊ። ስእሊ ኣየድልን። ሃይማኖትኪ፡ ዕድመኺ ወይ ኩነታት ሓዳርኪ ክትጽሕፊ ኣየድልየክን። ብዛዕባ እትኽእልዮ ሓቀኛ ኩኒ። ሆላንድኛኺ ክርእየልኪ ሓደ ሰብ ሕተቲ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.p': 'CVይ ከተንብበለይ ትኽእል ዶ? ሆላንድኛይ ቅኑዕ ድዩ?',
    'c.cv.s': { m: 'ኣብ ሃገርካ 3 ዓመት ኣብ ፋብሪካ ሰሪሕካ፡ ግን ዲፕሎማ የብልካን። ኣብ CVኻ እንታይ ትጽሕፍ?', f: 'ኣብ ሃገርኪ 3 ዓመት ኣብ ፋብሪካ ሰሪሕኪ፡ ግን ዲፕሎማ የብልክን። ኣብ CVኺ እንታይ ትጽሕፊ?' },
    'c.cv.o1': { m: 'ነቲ ስራሕን ኣብኡ ዝገበርካዮን ብሓቂ ጽሓፍ።', f: 'ነቲ ስራሕን ኣብኡ ዝገበርክዮን ብሓቂ ጽሓፊ።' },
    'c.cv.o2': { m: 'ዲፕሎማ ስለ ዘይብልካ፡ ገለ ኣይትጽሓፍ።', f: 'ዲፕሎማ ስለ ዘይብልኪ፡ ገለ ኣይትጽሓፊ።', x: 'ዲፕሎማ ስለ ዘይብልኩም፡ ገለ ኣይትጽሓፉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.o3': { m: 'ዝሓሸ ክትመስል፡ ዲፕሎማ ከም ዘለካ ጽሓፍ።', f: 'ዝሓሸ ክትመስሊ፡ ዲፕሎማ ከም ዘለኪ ጽሓፊ።', x: 'ዝሓሸ ክትመስሉ፡ ዲፕሎማ ከም ዘለኩም ጽሓፉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.w': 'ተመኩሮ ስራሕ ይቑጸር እዩ፡ ካብ ወጻኢ ሃገር እውን። ሓቀኛ ምዃን ኣገዳሲ እዩ፡ ኣስራሕቲ ከረጋግጽዎ ይኽእሉ እዮም።',
    'c.interview': 'ቃለ-መሕትት ስራሕ',
    'c.interview.b': { m: 'ብግዜ ምጻእ፡ 5 ክሳዕ 10 ደቒቕ ኣቐዲምካ። ብትሕትና ሰላምታ ሃብ፡ ነቲ ሰብ ድማ ጠምቶ። እንታይ ክትገብር ከም ትኽእል ብሓጺሩ ንገር። ባዕልኻ ሕቶ ምሕታት ልሙድን ኣወንታውን እዩ፡ ንኣብነት ብዛዕባ ሰዓታት፡ እቲ ስራሕ ወይ ስልጠና። ኣብ መወዳእታ መዓስ ክትሰምዕ ከም ትኽእል ክትሓትት ትኽእል ኢኻ። ገና ሆላንድኛ ትመሃር ከም ዘለኻ ምባል ጸገም የብሉን። ኣስራሒ ብዛዕባ ሃይማኖትካ፡ ጥንሲ ወይ ጥዕናኻ ክሓተካ ኣይፍቀዶን። ክትምልስ ኣየድልየካን፡ ብትሕትና ክትምልስ ከም ዘይትደሊ ክትብል ትኽእል ኢኻ።', f: 'ብግዜ ምጽኢ፡ 5 ክሳዕ 10 ደቒቕ ኣቐዲምኪ። ብትሕትና ሰላምታ ሃቢ፡ ነቲ ሰብ ድማ ጠምትዮ። እንታይ ክትገብሪ ከም ትኽእሊ ብሓጺሩ ንገሪ። ባዕልኺ ሕቶ ምሕታት ልሙድን ኣወንታውን እዩ፡ ንኣብነት ብዛዕባ ሰዓታት፡ እቲ ስራሕ ወይ ስልጠና። ኣብ መወዳእታ መዓስ ክትሰምዒ ከም ትኽእሊ ክትሓትቲ ትኽእሊ ኢኺ። ገና ሆላንድኛ ትመሃሪ ከም ዘለኺ ምባል ጸገም የብሉን። ኣስራሒ ብዛዕባ ሃይማኖትኪ፡ ጥንሲ ወይ ጥዕናኺ ክሓተኪ ኣይፍቀዶን። ክትምልሲ ኣየድልየክን፡ ብትሕትና ክትምልሲ ከም ዘይትደልዪ ክትብሊ ትኽእሊ ኢኺ።' },
    'c.interview.p': 'ኣነ እውን ገለ ክሓትት ይኽእል ዶ? እቲ ስራሕ ኣብ ሰሙን ክንደይ ሰዓት እዩ?',
    'c.interview.s': { m: 'ኣብ መወዳእታ ቃለ-መሕትት፡ ኣስራሒ «Heb je nog vragen?» ይሓተካ። እንታይ ትገብር?', f: 'ኣብ መወዳእታ ቃለ-መሕትት፡ ኣስራሒ «Heb je nog vragen?» ይሓተኪ። እንታይ ትገብሪ?', x: 'ኣብ መወዳእታ ቃለ-መሕትት፡ ኣስራሒ «Heb je nog vragen?» ይሓተኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o1': { m: 'ብዛዕባ ሰዓታት ወይ ስልጠና ሓደ ሕቶ ሕተት።', f: 'ብዛዕባ ሰዓታት ወይ ስልጠና ሓደ ሕቶ ሕተቲ።', x: 'ብዛዕባ ሰዓታት ወይ ስልጠና ሓደ ሕቶ ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o2': { m: 'ሕቶ ምሕታት ትሕትና ስለ ዘይኮነ፡ ኣይፋል በል።', f: 'ሕቶ ምሕታት ትሕትና ስለ ዘይኮነ፡ ኣይፋል በሊ።', x: 'ሕቶ ምሕታት ትሕትና ስለ ዘይኮነ፡ ኣይፋል በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.o3': { m: 'ጽቡቕ ከም እትሰርሕ ንምርኣይ፡ ብዛዕባ ርእስኻ ዝያዳ ተዛረብ።', f: 'ጽቡቕ ከም እትሰርሒ ንምርኣይ፡ ብዛዕባ ርእስኺ ዝያዳ ተዛረቢ።', x: 'ጽቡቕ ከም እትሰርሑ ንምርኣይ፡ ብዛዕባ ርእስኹም ዝያዳ ተዛረቡ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.interview.w': { m: 'ሕቶታት ነቲ ስራሕ ከም እትደልዮ የርእዩ። ኣብዚ ኣስራሕቲ መብዛሕትኡ ግዜ ሕቶታት ይጽበዩ።', f: 'ሕቶታት ነቲ ስራሕ ከም እትደልይዮ የርእዩ። ኣብዚ ኣስራሕቲ መብዛሕትኡ ግዜ ሕቶታት ይጽበዩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork': { m: 'ውዕልካ ብጽሑፍ ውሰድ', f: 'ውዕልኪ ብጽሑፍ ውሰዲ', x: 'ውዕልኩም ብጽሑፍ ውሰዱ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.b': { m: 'ኩሉ ግዜ ብጽሑፍ ዝተዳለወ ውዕልን ንዓኻ ዝኸውን ቅዳሕን ሕተት። ቅድሚ ምፍራምካ ኣንብቦ፡ ወይ ዝእመን ሰብ ክሕግዘካ ሕተት። ኤጀንሲ ስራሕ (uitzendbureau) ስራሕ ክረኽበልካ ገንዘብ ክሓተካ ኣይፍቀዶን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ኩሉ ግዜ ብጽሑፍ ዝተዳለወ ውዕልን ንዓኺ ዝኸውን ቅዳሕን ሕተቲ። ቅድሚ ምፍራምኪ ኣንብብዮ፡ ወይ ዝእመን ሰብ ክሕግዘኪ ሕተቲ። ኤጀንሲ ስራሕ (uitzendbureau) ስራሕ ክረኽበልኪ ገንዘብ ክሓተኪ ኣይፍቀዶን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.findwork.p': 'ቅድም ነቲ ውዕል ከንብቦ ይኽእል ዶ?',
    'c.findwork.s': { m: 'ሓድሽ ኣስራሒ «ሕጂ ኣብዚ ፈርም። ደሓር ከተንብቦ ትኽእል ኢኻ።» ይብለካ። እንታይ ትገብር?', f: 'ሓድሽ ኣስራሒ «ሕጂ ኣብዚ ፈርሚ። ደሓር ከተንብብዮ ትኽእሊ ኢኺ።» ይብለኪ። እንታይ ትገብሪ?' },
    'c.findwork.o1': { m: 'ከተንብቦ ግዜ ሕተት፡ ወይ ቅዳሕ ሕተት።', f: 'ከተንብብዮ ግዜ ሕተቲ፡ ወይ ቅዳሕ ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.findwork.o2': { m: 'ነቲ ስራሕ ከይተጥፍኦ፡ ቀልጢፍካ ፈርም።', f: 'ነቲ ስራሕ ከይተጥፍእዮ፡ ቀልጢፍኪ ፈርሚ።' },
    'c.findwork.o3': { m: 'ፈርም፡ ድሕሪኡ ድማ ቅዳሕ ሕተት።', f: 'ፈርሚ፡ ድሕሪኡ ድማ ቅዳሕ ሕተቲ።', x: 'ፈርሙ፡ ድሕሪኡ ድማ ቅዳሕ ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.findwork.w': { m: 'ውዕልካ ክንደይ ከም እትረኽብን እንታይ መሰላት ከም ዘለዉኻን ይነግር። ጽቡቕ ኣስራሒ ከተንብቦ ግዜ ይህበካ። ብዛዕባ ዘይተረደኣካ ኩሉ ክትሓትት ትኽእል ኢኻ።', f: 'ውዕልኪ ክንደይ ከም እትረኽቢን እንታይ መሰላት ከም ዘለዉኺን ይነግር። ጽቡቕ ኣስራሒ ከተንብብዮ ግዜ ይህበኪ። ብዛዕባ ዘይተረደኣኪ ኩሉ ክትሓትቲ ትኽእሊ ኢኺ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.contract': 'ግዜ ፈተነን ብጻውዒት ምስራሕን',
    'c.contract.b': { m: 'ግዜ ፈተነ (proeftijd) ብጽሑፍ ክኸውን ኣለዎ። ኣብ ውዕል ናይ 6 ወርሒ ወይ ካብኡ ዝሓጸረ ኣይፍቀድን። ኣብ ካብ 6 ወርሒ ዝነውሕ ግን ካብ 2 ዓመት ዝሓጸረ ውዕል፡ እንተ በዝሐ 1 ወርሒ እዩ። ኣብ ውዕል ናይ 2 ዓመት ወይ ካብኡ ዝነውሕ፡ ወይ ቀዋሚ ውዕል፡ እንተ በዝሐ 2 ወርሒ እዩ። ብጻውዒት ትሰርሕ ዲኻ (oproepkracht)? ብተለምዶ ኣስራሒኻ እንተ ወሓደ 4 መዓልቲ ኣቐዲሙ ክጽውዓካ ኣለዎ። ካብኡ ደንጒዩ እንተ ጸዊዑካ፡ ክትመጽእ ኣየድልየካን። cao ነዘን 4 መዓልቲ ከሕጽረን ይኽእል፡ ካብ 1 መዓልቲ ግን ኣይሓጽርን። ካብኡ ደንጒዮም ስራሕካ እንተ ሰሪዞም፡ ደሞዝካ ትረኽብ ኢኻ። ካብ 3 ሰዓት ንዝወሓደ ስራሕ እንተ ጸዊዖምኻ፡ ብተለምዶ ናይ 3 ሰዓት ደሞዝ ትረኽብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ግዜ ፈተነ (proeftijd) ብጽሑፍ ክኸውን ኣለዎ። ኣብ ውዕል ናይ 6 ወርሒ ወይ ካብኡ ዝሓጸረ ኣይፍቀድን። ኣብ ካብ 6 ወርሒ ዝነውሕ ግን ካብ 2 ዓመት ዝሓጸረ ውዕል፡ እንተ በዝሐ 1 ወርሒ እዩ። ኣብ ውዕል ናይ 2 ዓመት ወይ ካብኡ ዝነውሕ፡ ወይ ቀዋሚ ውዕል፡ እንተ በዝሐ 2 ወርሒ እዩ። ብጻውዒት ትሰርሒ ዲኺ (oproepkracht)? ብተለምዶ ኣስራሒኺ እንተ ወሓደ 4 መዓልቲ ኣቐዲሙ ክጽውዓኪ ኣለዎ። ካብኡ ደንጒዩ እንተ ጸዊዑኪ፡ ክትመጽኢ ኣየድልየክን። cao ነዘን 4 መዓልቲ ከሕጽረን ይኽእል፡ ካብ 1 መዓልቲ ግን ኣይሓጽርን። ካብኡ ደንጒዮም ስራሕኪ እንተ ሰሪዞም፡ ደሞዝኪ ትረኽቢ ኢኺ። ካብ 3 ሰዓት ንዝወሓደ ስራሕ እንተ ጸዊዖምኺ፡ ብተለምዶ ናይ 3 ሰዓት ደሞዝ ትረኽቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nalezen: feit gelijk getrokken // nagelezen AI 22 nov
    'c.contract.p': 'ግዜ ፈተነ ኣብ ውዕለይ ኣሎ ድዩ?',
    'c.contract.s': { m: 'ውዕልካ ን3 ወርሒ እዩ። ኣብኡ «Proeftijd: 1 maand» ይብል። እንታይ ትገብር?', f: 'ውዕልኪ ን3 ወርሒ እዩ። ኣብኡ «Proeftijd: 1 maand» ይብል። እንታይ ትገብሪ?', x: 'ውዕልኩም ን3 ወርሒ እዩ። ኣብኡ «Proeftijd: 1 maand» ይብል። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o1': { m: 'ሕተት፡ እዚ ግዜ ፈተነ እዚ ኣይቑጸርን እዩ።', f: 'ሕተቲ፡ እዚ ግዜ ፈተነ እዚ ኣይቑጸርን እዩ።', x: 'ሕተቱ፡ እዚ ግዜ ፈተነ እዚ ኣይቑጸርን እዩ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o2': { m: 'ገለ ኣይትግበር። ኩሉ ውዕል ግዜ ፈተነ ኣለዎ።', f: 'ገለ ኣይትግበሪ። ኩሉ ውዕል ግዜ ፈተነ ኣለዎ።', x: 'ገለ ኣይትግበሩ። ኩሉ ውዕል ግዜ ፈተነ ኣለዎ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.o3': { m: 'ሓላፊ ዝበለጸ ስለ ዝፈልጥ፡ ፈርም እሞ ፈጺምካ ኣይትሕተት።', f: 'ሓላፊ ዝበለጸ ስለ ዝፈልጥ፡ ፈርሚ እሞ ፈጺምኪ ኣይትሕተቲ።', x: 'ሓላፊ ዝበለጸ ስለ ዝፈልጥ፡ ፈርሙ እሞ ፈጺምኩም ኣይትሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.contract.w': { m: 'ኣብ ውዕል ናይ 6 ወርሒ ወይ ካብኡ ዝሓጸረ ዘሎ ግዜ ፈተነ ኣይቑጸርን። ብህድኣት ምሕታት ልሙድ እዩ። እቲ መልሲ ንጹር እንተ ዘይኮይኑ፡ ካብ ማሕበር ሰራሕተኛታት ወይ ካብ Juridisch Loket ምኽሪ ውሰድ።', f: 'ኣብ ውዕል ናይ 6 ወርሒ ወይ ካብኡ ዝሓጸረ ዘሎ ግዜ ፈተነ ኣይቑጸርን። ብህድኣት ምሕታት ልሙድ እዩ። እቲ መልሲ ንጹር እንተ ዘይኮይኑ፡ ካብ ማሕበር ሰራሕተኛታት ወይ ካብ Juridisch Loket ምኽሪ ውሰዲ።', x: 'ኣብ ውዕል ናይ 6 ወርሒ ወይ ካብኡ ዝሓጸረ ዘሎ ግዜ ፈተነ ኣይቑጸርን። ብህድኣት ምሕታት ልሙድ እዩ። እቲ መልሲ ንጹር እንተ ዘይኮይኑ፡ ካብ ማሕበር ሰራሕተኛታት ወይ ካብ Juridisch Loket ምኽሪ ውሰዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency': { m: 'ኤጀንሲ ስራሕ ኣስራሒኻ እዩ', f: 'ኤጀንሲ ስራሕ ኣስራሒኺ እዩ', x: 'ኤጀንሲ ስራሕ ኣስራሒኹም እዩ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.b': { m: 'ብኤጀንሲ ስራሕ (uitzendbureau) እንተ ሰሪሕካ፡ ኣስራሒኻ እቲ ኤጀንሲ እዩ፡ እቲ እትሰርሓሉ ትካል ኣይኮነን። ውዕልካን ደሞዝካን ካብቲ ኤጀንሲ እዮም ዝመጹ፡ ንግዝያውያን ሰራሕተኛታት ድማ ሓባራዊ ስምምዕ ስራሕ (uitzend-cao) ኣሎ። ከምቶም ተመሳሳሊ ስራሕ ዝሰርሑ ሰራሕተኛታት እቲ ትካል ተመሳሳሊ ደሞዝ ክትረኽብ መሰል ኣለካ። ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ (vakantiegeld) እውን ትረኽብ፡ መዓልትታት ዕረፍቲ ድማ ትእክብ። ዝሰራሕካዮ ሰዓታት ብባዕልኻ ጽሓፎ፡ ኣብ ወረቐት ደሞዝካ ድማ ኣረጋግጾ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ብኤጀንሲ ስራሕ (uitzendbureau) እንተ ሰሪሕኪ፡ ኣስራሒኺ እቲ ኤጀንሲ እዩ፡ እቲ እትሰርሕሉ ትካል ኣይኮነን። ውዕልኪን ደሞዝኪን ካብቲ ኤጀንሲ እዮም ዝመጹ፡ ንግዝያውያን ሰራሕተኛታት ድማ ሓባራዊ ስምምዕ ስራሕ (uitzend-cao) ኣሎ። ከምቶም ተመሳሳሊ ስራሕ ዝሰርሑ ሰራሕተኛታት እቲ ትካል ተመሳሳሊ ደሞዝ ክትረኽቢ መሰል ኣለኪ። ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ (vakantiegeld) እውን ትረኽቢ፡ መዓልትታት ዕረፍቲ ድማ ትእክቢ። ዝሰራሕክዮ ሰዓታት ብባዕልኺ ጽሓፍዮ፡ ኣብ ወረቐት ደሞዝኪ ድማ ኣረጋግጽዮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.agency.x': 'ካብ ካልእ ሃገር ዝመጸ ኣስራሒ ንግዜኡ ናብዚ ሰዲዱኩም ዶ? ሽዑ ብምልኣኽ (gedetacheerd) ኢኹም ትሰርሑ። ካብ ኣስራሒኹም ናይ A1 ወረቐት ሕተቱ፡ ኣበይ ከም እተወሐስኩም የርኢ። ኣብዚ ግን እንተወሓደ ናይ ሆላንድ ዝተሓተ ደሞዝ ትረኽቡ።', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.agency.p': 'ኣብ ወረቐት ደሞዘይ ዘሎ ሰዓታት ውሑድ እዩ።',
    'c.agency.s': { m: 'ወረቐት ደሞዝካ 32 ሰዓት የርኢ፡ ንስኻ ግን 38 ሰዓት ሰሪሕካ። እንታይ ትገብር?', f: 'ወረቐት ደሞዝኪ 32 ሰዓት የርኢ፡ ንስኺ ግን 38 ሰዓት ሰሪሕኪ። እንታይ ትገብሪ?', x: 'ወረቐት ደሞዝኩም 32 ሰዓት የርኢ፡ ንስኹም ግን 38 ሰዓት ሰሪሕኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o1': { m: 'ናይ ባዕልኻ ዝርዝር ሰዓታት ነቲ ኤጀንሲ ኣርእዮ፡ ክእርሞ ድማ ሕተቶ።', f: 'ናይ ባዕልኺ ዝርዝር ሰዓታት ነቲ ኤጀንሲ ኣርእይዮ፡ ክእርሞ ድማ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.agency.o2': { m: '6 ሰዓት ጥራይ ስለ ዝኾነ፡ ገለ ኣይትበል።', f: '6 ሰዓት ጥራይ ስለ ዝኾነ፡ ገለ ኣይትበሊ።', x: '6 ሰዓት ጥራይ ስለ ዝኾነ፡ ገለ ኣይትበሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.agency.o3': { m: 'ነቲ ኣብቲ እትሰርሓሉ ትካል ዘሎ ሓላፊ ነተን 6 ሰዓታት ክኸፍለካ ሕተቶ።', f: 'ነቲ ኣብቲ እትሰርሕሉ ትካል ዘሎ ሓላፊ ነተን 6 ሰዓታት ክኸፍለኪ ሕተትዮ።' },
    'c.agency.w': { m: 'ዝኸፍለካ እቲ ኤጀንሲ ስለ ዝኾነ፡ ነቲ ጌጋ ክእርሞ ዘለዎ እቲ ኤጀንሲ እዩ። ዕለታትን ሰዓታትን ዝጸሓፍካሉ ናይ ባዕልኻ ዝርዝር ይሕግዝ። ብዛዕባኡ ምሕታት መሰልካ እዩ።', f: 'ዝኸፍለኪ እቲ ኤጀንሲ ስለ ዝኾነ፡ ነቲ ጌጋ ክእርሞ ዘለዎ እቲ ኤጀንሲ እዩ። ዕለታትን ሰዓታትን ዝጸሓፍክሉ ናይ ባዕልኺ ዝርዝር ይሕግዝ። ብዛዕባኡ ምሕታት መሰልኪ እዩ።' },
    'c.bsn': { m: 'BSNካ፡ ብጥንቃቐ ሓልዎ', f: 'BSNኪ፡ ብጥንቃቐ ሓልውዮ' },
    'c.bsn.b': { m: 'ኣብ ምምሕዳር ከተማ (gemeente) ምስ ተመዝገብካ BSN (burgerservicenummer) ትረኽብ። ኣብዚ ንሓጺር ግዜ ጥራይ ዲኻ ዘለኻ? ሽዑ ኣብ ቤት ጽሕፈት RNI ትምዝገብ። ንስራሕ፡ ንግብሪ፡ ንመድሕን ጥዕናን ንሕሳብ ባንክን BSNካ የድልየካ። ኣስራሒኻ መንነት ወረቐትካን BSNካን የድልዮ። BSNካ ወይ ቅዳሕ መንነት ወረቐትካ ንዝኾነ ሰብ ኣይትሃብ። ቅድም ስለምንታይ ከም ዘድልዮም ሕተቶም። ገዛ ትቕይር ዲኻ? ኣብ ውሽጢ 5 መዓልቲ ሓድሽ ኣድራሻኻ ኣብ gemeente ኣመዝግብ። DigiD ናብ መርበባት ሓበሬታ መንግስቲ እትኣትወሉ እዩ፡ ፈጺምካ ንኻልእ ሰብ ኣይትሃቦ። ኣብዚ ትነብር ወይ ትሰርሕ ዲኻ? ሽዑ ብተለምዶ ሆላንዳዊ መድሕን ጥዕና (zorgverzekering) ክህልወካ ኣለዎ። ቀልጢፍካ ኣዳልዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ኣብ ምምሕዳር ከተማ (gemeente) ምስ ተመዝገብኪ BSN (burgerservicenummer) ትረኽቢ። ኣብዚ ንሓጺር ግዜ ጥራይ ዲኺ ዘለኺ? ሽዑ ኣብ ቤት ጽሕፈት RNI ትምዝገቢ። ንስራሕ፡ ንግብሪ፡ ንመድሕን ጥዕናን ንሕሳብ ባንክን BSNኪ የድልየኪ። ኣስራሒኺ መንነት ወረቐትኪን BSNኪን የድልዮ። BSNኪ ወይ ቅዳሕ መንነት ወረቐትኪ ንዝኾነ ሰብ ኣይትሃቢ። ቅድም ስለምንታይ ከም ዘድልዮም ሕተትዮም። ገዛ ትቕይሪ ዲኺ? ኣብ ውሽጢ 5 መዓልቲ ሓድሽ ኣድራሻኺ ኣብ gemeente ኣመዝግቢ። DigiD ናብ መርበባት ሓበሬታ መንግስቲ እትኣትውሉ እዩ፡ ፈጺምኪ ንኻልእ ሰብ ኣይትሃብዮ። ኣብዚ ትነብሪ ወይ ትሰርሒ ዲኺ? ሽዑ ብተለምዶ ሆላንዳዊ መድሕን ጥዕና (zorgverzekering) ክህልወኪ ኣለዎ። ቀልጢፍኪ ኣዳልውዮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.bsn.p': 'BSNይ ስለምንታይ የድልየኩም?',
    'c.bsn.s': { m: 'ዘይትፈልጦ ሰብ ብWhatsApp ስራሕ የቕርበልካ። ስእሊ ፓስፖርትካን ናይ DigiD መእተዊኻን ይሓተካ። እንታይ ትገብር?', f: 'ዘይትፈልጥዮ ሰብ ብWhatsApp ስራሕ የቕርበልኪ። ስእሊ ፓስፖርትኪን ናይ DigiD መእተዊኺን ይሓተኪ። እንታይ ትገብሪ?' },
    'c.bsn.o1': { m: 'ናይ DigiD መእተዊኻ ፈጺምካ ኣይትሃብ። መን ምዃኑ ኣረጋግጽ።', f: 'ናይ DigiD መእተዊኺ ፈጺምኪ ኣይትሃቢ። መን ምዃኑ ኣረጋግጺ።', x: 'ናይ DigiD መእተዊኹም ፈጺምኩም ኣይትሃቡ። መን ምዃኑ ኣረጋግጹ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.o2': { m: 'ነቲ ስራሕ ክትረኽብ፡ ኩሉ ቀልጢፍካ ስደድ።', f: 'ነቲ ስራሕ ክትረኽቢ፡ ኩሉ ቀልጢፍኪ ስደዲ።', x: 'ነቲ ስራሕ ክትረኽቡ፡ ኩሉ ቀልጢፍኩም ስደዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.bsn.o3': { m: 'ስእሊ ፓስፖርት ጥራይ ስደድ።', f: 'ስእሊ ፓስፖርት ጥራይ ስደዲ።', x: 'ስእሊ ፓስፖርት ጥራይ ስደዱ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.bsn.w': { m: 'ብDigiDካ ወይ ብቅዳሕ መንነት ወረቐትካ፡ ካልኦት ሰባት ስምካ ክጥቀሙ ይኽእሉ፡ ንኣብነት ንልቓሕ ወይ ንሓገዝ ገንዘብ። ሓቀኛ ኣስራሒ መንነት ወረቐትካን BSNካን የድልዮ፡ ናይ DigiD መእተዊኻ ግን ፈጺሙ ኣየድልዮን።', f: 'ብDigiDኪ ወይ ብቅዳሕ መንነት ወረቐትኪ፡ ካልኦት ሰባት ስምኪ ክጥቀሙ ይኽእሉ፡ ንኣብነት ንልቓሕ ወይ ንሓገዝ ገንዘብ። ሓቀኛ ኣስራሒ መንነት ወረቐትኪን BSNኪን የድልዮ፡ ናይ DigiD መእተዊኺ ግን ፈጺሙ ኣየድልዮን።' },
    'c.housing': { m: 'ካብ ኣስራሒኻ ዝወሃብ መንበሪ ገዛ', f: 'ካብ ኣስራሒኺ ዝወሃብ መንበሪ ገዛ', x: 'ካብ ኣስራሒኹም ዝወሃብ መንበሪ ገዛ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.b': { m: 'ኣስራሒኻ ወይ ኤጀንሲ መንበሪ ገዛ የዳልወልካ ድዩ? ሽዑ ውዕል ክራይ ካብ ውዕል ስራሕካ ፍሉይ ክኸውን ኣለዎ። ብጽሑፍ ዝተዳለወ ውዕል ክራይን ዝኸፈልካዮ መረጋገጺን ሕተት። ክራይ ካብ ደሞዝካ ክቑረጽ ዝኽእል፡ ብጽሑፍ እንተ ተሰማሚዕካን ኣብ ውሽጢ ሕጋዊ ደረትን ጥራይ እዩ፡ ኣብ ወረቐት ደሞዝካ ኣረጋግጾ። ዋሕስ ገንዘብ (borg) እንተ በዝሐ ናይ 2 ወርሒ መሰረታዊ ክራይ እዩ። ክትወጽእ ከለኻ ይምለሰልካ፡ ሓቀኛ ጉድኣት ጥራይ ተቐኒሱ። ኣብ ኣድራሻኻ ኣብ gemeente ተመዝገብ። ውሑስ ዘይኮነ ገዛ፡ ምፍርራሕ ወይ ዘይፍትሓዊ ክፍሊት ኣሎ ድዩ? ናብ gemeente (meldpunt) ሕበር፡ ካብ Juridisch Loket ወይ ካብ ኣገልግሎት ምኽሪ ገዛ ድማ ነጻ ምኽሪ ውሰድ። ብዛዕባ ዋጋ ክራይ ወይ ክፍሊት ኣገልግሎት ጸገም እንተሎ፡ Huurcommissie ኣሎ። ስራሕካ ይውዳእ ድዩ? ካብ ገዛኻ ቅድሚ ምውጻእካ ምኽሪ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ኣስራሒኺ ወይ ኤጀንሲ መንበሪ ገዛ የዳልወልኪ ድዩ? ሽዑ ውዕል ክራይ ካብ ውዕል ስራሕኪ ፍሉይ ክኸውን ኣለዎ። ብጽሑፍ ዝተዳለወ ውዕል ክራይን ዝኸፈልክዮ መረጋገጺን ሕተቲ። ክራይ ካብ ደሞዝኪ ክቑረጽ ዝኽእል፡ ብጽሑፍ እንተ ተሰማሚዕኪን ኣብ ውሽጢ ሕጋዊ ደረትን ጥራይ እዩ፡ ኣብ ወረቐት ደሞዝኪ ኣረጋግጽዮ። ዋሕስ ገንዘብ (borg) እንተ በዝሐ ናይ 2 ወርሒ መሰረታዊ ክራይ እዩ። ክትወጽኢ ከለኺ ይምለሰልኪ፡ ሓቀኛ ጉድኣት ጥራይ ተቐኒሱ። ኣብ ኣድራሻኺ ኣብ gemeente ተመዝገቢ። ውሑስ ዘይኮነ ገዛ፡ ምፍርራሕ ወይ ዘይፍትሓዊ ክፍሊት ኣሎ ድዩ? ናብ gemeente (meldpunt) ሕበሪ፡ ካብ Juridisch Loket ወይ ካብ ኣገልግሎት ምኽሪ ገዛ ድማ ነጻ ምኽሪ ውሰዲ። ብዛዕባ ዋጋ ክራይ ወይ ክፍሊት ኣገልግሎት ጸገም እንተሎ፡ Huurcommissie ኣሎ። ስራሕኪ ይውዳእ ድዩ? ካብ ገዛኺ ቅድሚ ምውጻእኪ ምኽሪ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' },
    'c.housing.p': 'ከም ዝኸፈልኩ መረጋገጺ ክረኽብ ይኽእል ዶ?',
    'c.housing.s': { m: 'ስራሕካ ይውዳእ። ኤጀንሲ «ጽባሕ ካብቲ ገዛ ክትወጽእ ኣለካ።» ይብለካ። እንታይ ትገብር?', f: 'ስራሕኪ ይውዳእ። ኤጀንሲ «ጽባሕ ካብቲ ገዛ ክትወጽኢ ኣለኪ።» ይብለኪ። እንታይ ትገብሪ?', x: 'ስራሕኩም ይውዳእ። ኤጀንሲ «ጽባሕ ካብቲ ገዛ ክትወጽኡ ኣለኩም።» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.o1': { m: 'ቅድም ካብ Juridisch Loket ምኽሪ ሕተት።', f: 'ቅድም ካብ Juridisch Loket ምኽሪ ሕተቲ።', x: 'ቅድም ካብ Juridisch Loket ምኽሪ ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.o2': { m: 'ብኡብኡ ውጻእ እሞ ዋሕስ ገንዘብካ ረስዖ።', f: 'ብኡብኡ ውጽኢ እሞ ዋሕስ ገንዘብኪ ረስዕዮ።' },
    'c.housing.o3': { m: 'ጽናሕ፡ ንኤጀንሲ ድማ ምምላስ ኣቋርጽ።', f: 'ጽንሒ፡ ንኤጀንሲ ድማ ምምላስ ኣቋርጺ።', x: 'ጽንሑ፡ ንኤጀንሲ ድማ ምምላስ ኣቋርጹ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.housing.w': { m: 'ውዕል ክራይካ ካብ ስራሕካ ዝተፈለየ ናይ ባዕሉ ሕግታት ኣለዎ። ነጻ ምኽሪ መሰላትካ ክትፈልጥ ይሕግዘካ፡ ንኣብነት መዓስ ክትወጽእ ከም ዘለካን ብዛዕባ ዋሕስ ገንዘብካን።', f: 'ውዕል ክራይኪ ካብ ስራሕኪ ዝተፈለየ ናይ ባዕሉ ሕግታት ኣለዎ። ነጻ ምኽሪ መሰላትኪ ክትፈልጢ ይሕግዘኪ፡ ንኣብነት መዓስ ክትወጽኢ ከም ዘለኪን ብዛዕባ ዋሕስ ገንዘብኪን።' },
    'c.payslip': { m: 'ወረቐት ደሞዝካ ኣረጋግጽ', f: 'ወረቐት ደሞዝኪ ኣረጋግጺ', x: 'ወረቐት ደሞዝኩም ኣረጋግጹ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.payslip.b': { m: 'Bruto ቅድሚ ግብሪ ዘሎ ደሞዝካ እዩ። Netto ናብ ሕሳብ ባንክኻ ዝኣቱ እዩ፡ bruto ኣጕዲልካ ግብርን ክፍሊታትን (loonheffing)። ኣስራሒኻ ወረቐት ደሞዝ (loonstrook) ክህበካ ኣለዎ። ኣብ ነፍሲ ወከፍ ወረቐት ደሞዝ ሰዓታትን ደሞዝን ኣረጋግጽ፡ ዝሰራሕካዮ ሰዓታት ድማ ጽሓፍ። ክልተ ስራሕ ኣለካ ድዩ? ቅናስ ግብሪ (loonheffingskorting) ኣብ ሓደ ኣስራሒ ጥራይ ተጠቐመሉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'Bruto ቅድሚ ግብሪ ዘሎ ደሞዝኪ እዩ። Netto ናብ ሕሳብ ባንክኺ ዝኣቱ እዩ፡ bruto ኣጕዲልኪ ግብርን ክፍሊታትን (loonheffing)። ኣስራሒኺ ወረቐት ደሞዝ (loonstrook) ክህበኪ ኣለዎ። ኣብ ነፍሲ ወከፍ ወረቐት ደሞዝ ሰዓታትን ደሞዝን ኣረጋግጺ፡ ዝሰራሕክዮ ሰዓታት ድማ ጽሓፊ። ክልተ ስራሕ ኣለኪ ድዩ? ቅናስ ግብሪ (loonheffingskorting) ኣብ ሓደ ኣስራሒ ጥራይ ተጠቐምሉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.payslip.p': 'ዝያዳ ሰዓታት ሰሪሐ። ክትርእዮ ትኽእል ዶ?',
    'c.payslip.s': { m: 'ወረቐት ደሞዝካ ካብ ዝሰራሕካዮ ዝወሓደ ሰዓታት የርኢ። እንታይ ትገብር?', f: 'ወረቐት ደሞዝኪ ካብ ዝሰራሕክዮ ዝወሓደ ሰዓታት የርኢ። እንታይ ትገብሪ?' },
    'c.payslip.o1': { m: 'ጽሑፍካ ኣርእዮ፡ ተቖጻጻሪኻ ክርእዮ ድማ ሕተቶ።', f: 'ጽሑፍኪ ኣርእይዮ፡ ተቖጻጻሪኺ ክርእዮ ድማ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.o2': { m: 'ጸገም ስለ ዘይትደሊ፡ ገለ ኣይትበል።', f: 'ጸገም ስለ ዘይትደልዪ፡ ገለ ኣይትበሊ።' },
    'c.payslip.o3': { m: 'ሓደ ወርሒ ተጸበ፡ ኣብቲ ዝቕጽል ወረቐት ደሞዝ ቅኑዕ ክኸውን እዩ።', f: 'ሓደ ወርሒ ተጸበዪ፡ ኣብቲ ዝቕጽል ወረቐት ደሞዝ ቅኑዕ ክኸውን እዩ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.payslip.w': { m: 'ኣብ ወረቐት ደሞዝ ጌጋታት ይኽሰቱ እዮም። ብዛዕባኡ ምሕታት ልሙድን መሰልካን እዩ። ዕለታትን ሰዓታትን ዝጸሓፍካሉ ናይ ባዕልኻ ጽሑፍ ብዙሕ ይሕግዝ።', f: 'ኣብ ወረቐት ደሞዝ ጌጋታት ይኽሰቱ እዮም። ብዛዕባኡ ምሕታት ልሙድን መሰልኪን እዩ። ዕለታትን ሰዓታትን ዝጸሓፍክሉ ናይ ባዕልኺ ጽሑፍ ብዙሕ ይሕግዝ።' },
    'c.extra': 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍትን ዝተሓተ ደሞዝን',
    'c.extra.b': { m: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ (vakantiegeld) ትረኽብ፡ እንተ ወሓደ 8% ካብ ጠቕላላ ደሞዝካ። መብዛሕትኦም ኣስራሕቲ ኣብ ዓመት ሓንሳብ ይኸፍልዎ፡ ኣብ ግንቦት ወይ ሰነ። ደሞዝካ ፈጺሙ ካብ ሕጋዊ ዝተሓተ ደሞዝ (minimumloon) ክትሕት የብሉን፡ ንሰራሕተኛታት ትሕቲ 21 ዓመት ዝተሓተ እዩ። እቲ መጠን ዓመት ዓመት ይቕየር፡ ኣብ rijksoverheid.nl ርኣዮ። cao መብዛሕትኡ ግዜ ንተወሳኺ ሰዓታት ወይ ንስራሕ ለይቲ ተወሳኺ ክፍሊት ይህብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ (vakantiegeld) ትረኽቢ፡ እንተ ወሓደ 8% ካብ ጠቕላላ ደሞዝኪ። መብዛሕትኦም ኣስራሕቲ ኣብ ዓመት ሓንሳብ ይኸፍልዎ፡ ኣብ ግንቦት ወይ ሰነ። ደሞዝኪ ፈጺሙ ካብ ሕጋዊ ዝተሓተ ደሞዝ (minimumloon) ክትሕት የብሉን፡ ንሰራሕተኛታት ትሕቲ 21 ዓመት ዝተሓተ እዩ። እቲ መጠን ዓመት ዓመት ይቕየር፡ ኣብ rijksoverheid.nl ርኣይዮ። cao መብዛሕትኡ ግዜ ንተወሳኺ ሰዓታት ወይ ንስራሕ ለይቲ ተወሳኺ ክፍሊት ይህብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.extra.p': 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ መዓስ እረኽብ?',
    'c.extra.s': { m: 'ሓደ ብጻይ ስራሕ «ኣብ ግንቦት ካብ ሓላፊ ተወሳኺ ገንዘብ ትረኽብ።» ይብለካ። እዚ እንታይ እዩ?', f: 'ሓደ ብጻይ ስራሕ «ኣብ ግንቦት ካብ ሓላፊ ተወሳኺ ገንዘብ ትረኽቢ።» ይብለኪ። እዚ እንታይ እዩ?', x: 'ሓደ ብጻይ ስራሕ «ኣብ ግንቦት ካብ ሓላፊ ተወሳኺ ገንዘብ ትረኽቡ።» ይብለኩም። እዚ እንታይ እዩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.o1': { m: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ፡ እንተ ወሓደ 8% ካብ ጠቕላላ ደሞዝካ።', f: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ፡ እንተ ወሓደ 8% ካብ ጠቕላላ ደሞዝኪ።', x: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ፡ እንተ ወሓደ 8% ካብ ጠቕላላ ደሞዝኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.extra.o2': 'ህያብ፡ ንዝበለጹ ሰራሕተኛታት ጥራይ።',
    'c.extra.o3': 'መበል 13 ወርሒ፡ ንኹሉ ሰብ ደሞዝ ሓደ ተወሳኺ ወርሒ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.extra.w': { m: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ መሰልካ እዩ፡ ህያብ ኣይኮነን። በብሰዓት ዝሰራሕካዮ ይእከብ። ቀልጢፍካ ስራሕካ እንተ ገዲፍካ፡ ምስ ናይ መወዳእታ ደሞዝካ ትረኽቦ።', f: 'ተወሳኺ ክፍሊት ዓመታዊ ዕረፍቲ መሰልኪ እዩ፡ ህያብ ኣይኮነን። በብሰዓት ዝሰራሕክዮ ይእከብ። ቀልጢፍኪ ስራሕኪ እንተ ገዲፍኪ፡ ምስ ናይ መወዳእታ ደሞዝኪ ትረኽብዮ።' },
    'c.phone': { m: 'ተሌፎንካ ኣብ ስራሕ', f: 'ተሌፎንኪ ኣብ ስራሕ', x: 'ተሌፎንኩም ኣብ ስራሕ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.b': { m: 'ብዙሓት ቦታታት ስራሕ ኣብ ግዜ ስራሕ ተሌፎን ኣየፍቅዱን፡ ብፍላይ ኣብ ጥቓ ማሽናትን ፎርክሊፍትን፡ ወይ ኣብ ምፍራይ መግቢ። ውሑስ ወይ ጽሩይ ዘይኮነ ክኸውን ይኽእል። ተሌፎንካ ኣብ ዕረፍቲ ተጠቐመሉ። ካብ ስድራኻ ህጹጽ ጻውዒት ትጽበ ዲኻ? ቅድም ንተቖጻጻሪኻ ንገሮ። ብዘይ ፍቓድ ኣብ ስራሕ ስእሊ ወይ ቪድዮ ኣይትውሰድ፡ ብዛዕባ ውልቃውነት ብጾት ስራሕን ምስጢራት ትካልን ሕሰብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ብዙሓት ቦታታት ስራሕ ኣብ ግዜ ስራሕ ተሌፎን ኣየፍቅዱን፡ ብፍላይ ኣብ ጥቓ ማሽናትን ፎርክሊፍትን፡ ወይ ኣብ ምፍራይ መግቢ። ውሑስ ወይ ጽሩይ ዘይኮነ ክኸውን ይኽእል። ተሌፎንኪ ኣብ ዕረፍቲ ተጠቐምሉ። ካብ ስድራኺ ህጹጽ ጻውዒት ትጽበዪ ዲኺ? ቅድም ንተቖጻጻሪኺ ንገርዮ። ብዘይ ፍቓድ ኣብ ስራሕ ስእሊ ወይ ቪድዮ ኣይትውሰዲ፡ ብዛዕባ ውልቃውነት ብጾት ስራሕን ምስጢራት ትካልን ሕሰቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.phone.p': 'ውላደይ ሓሚሙ። ተሌፎነይ ክውላዕ ይኽእል ዶ?',
    'c.phone.s': { m: 'ኣዴኻ ኣብ ሆስፒታል ኣላ፡ ሎሚ ክትድውል ትኽእል። ኣብ ቦታ ስራሕ ተሌፎን ኣይፍቀድን። እንታይ ትገብር?', f: 'ኣዴኺ ኣብ ሆስፒታል ኣላ፡ ሎሚ ክትድውል ትኽእል። ኣብ ቦታ ስራሕ ተሌፎን ኣይፍቀድን። እንታይ ትገብሪ?', x: 'ኣዴኹም ኣብ ሆስፒታል ኣላ፡ ሎሚ ክትድውል ትኽእል። ኣብ ቦታ ስራሕ ተሌፎን ኣይፍቀድን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.o1': { m: 'ንተቖጻጻሪኻ ንገሮ እሞ ብኸመይ ክትርከብ ከም ትኽእል ሕተት።', f: 'ንተቖጻጻሪኺ ንገርዮ እሞ ብኸመይ ክትርከቢ ከም ትኽእሊ ሕተቲ።' },
    'c.phone.o2': { m: 'ተሌፎንካ ኣብ ጁባኻ ሓዞ እሞ ኣብ ጥቓ ማሽን ብሕቡእ መልስ።', f: 'ተሌፎንኪ ኣብ ጁባኺ ሓዝዮ እሞ ኣብ ጥቓ ማሽን ብሕቡእ መልሲ።' },
    'c.phone.o3': { m: 'ስለምንታይ ምዃኑ ንሓደ እኳ ከይነገርካ ኣብ ገዛ ጽናሕ።', f: 'ስለምንታይ ምዃኑ ንሓደ እኳ ከይነገርኪ ኣብ ገዛ ጽንሒ።', x: 'ስለምንታይ ምዃኑ ንሓደ እኳ ከይነገርኩም ኣብ ገዛ ጽንሑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.phone.w': { m: 'ተቖጻጸርቲ ብተለምዶ ህጹጽ ጉዳይ ስድራ ይርድኦም። ምስ ፈለጡ ውሑስ መፍትሒ ክረኽቡ ይኽእሉ፡ ንኣብነት ተሌፎንካ እትርእየሉ ዝተወሰነ ግዜ።', f: 'ተቖጻጸርቲ ብተለምዶ ህጹጽ ጉዳይ ስድራ ይርድኦም። ምስ ፈለጡ ውሑስ መፍትሒ ክረኽቡ ይኽእሉ፡ ንኣብነት ተሌፎንኪ እትርእይሉ ዝተወሰነ ግዜ።' },
    'c.smoking': 'ሽጋራ ኣብ ደገ ጥራይ',
    'c.smoking.b': { m: 'ኣብ ሆላንድ ኣብ ውሽጢ ቦታ ስራሕ ሽጋራ ምትካኽ ብሕጊ ክልኩል እዩ። ንኤለክትሮኒካዊ ሽጋራ (ቬፕ) እውን ከምኡ እዩ። ካብ 2022 ጀሚሩ ኣብ ውሽጢ ትካላት ክፍሊ ሽጋራ ኣይፍቀድን። ኣብ ደገ ጥራይ፡ ኣስራሒኻ ኣብ ዝፈቐዶ ቦታ፡ ብተለምዶ ድማ ኣብ ዕረፍትኻ ጥራይ ኣትክኽ። ተወሳኺ ዕረፍቲ ንሽጋራ መሰል ኣይኮነን፡ ምስ ተቖጻጻሪኻ ተሰማማዕ። ኣብ ጥቓ ቀልጢፉ ዝነድድ ነገር፡ ከም ነዳዲ ወይ ኣብ መኽዘን ዘለዉ ሳጹናት፡ ፈጺምካ ሽጋራ ኣይተትክኽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ኣብ ሆላንድ ኣብ ውሽጢ ቦታ ስራሕ ሽጋራ ምትካኽ ብሕጊ ክልኩል እዩ። ንኤለክትሮኒካዊ ሽጋራ (ቬፕ) እውን ከምኡ እዩ። ካብ 2022 ጀሚሩ ኣብ ውሽጢ ትካላት ክፍሊ ሽጋራ ኣይፍቀድን። ኣብ ደገ ጥራይ፡ ኣስራሒኺ ኣብ ዝፈቐዶ ቦታ፡ ብተለምዶ ድማ ኣብ ዕረፍትኺ ጥራይ ኣትክኺ። ተወሳኺ ዕረፍቲ ንሽጋራ መሰል ኣይኮነን፡ ምስ ተቖጻጻሪኺ ተሰማምዒ። ኣብ ጥቓ ቀልጢፉ ዝነድድ ነገር፡ ከም ነዳዲ ወይ ኣብ መኽዘን ዘለዉ ሳጹናት፡ ፈጺምኪ ሽጋራ ኣይተትክኺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።', x: 'ኣብ ሆላንድ ኣብ ውሽጢ ቦታ ስራሕ ሽጋራ ምትካኽ ብሕጊ ክልኩል እዩ። ንኤለክትሮኒካዊ ሽጋራ (ቬፕ) እውን ከምኡ እዩ። ካብ 2022 ጀሚሩ ኣብ ውሽጢ ትካላት ክፍሊ ሽጋራ ኣይፍቀድን። ኣብ ደገ ጥራይ፡ ኣስራሒኹም ኣብ ዝፈቐዶ ቦታ፡ ብተለምዶ ድማ ኣብ ዕረፍትኹም ጥራይ ኣትክኹ። ተወሳኺ ዕረፍቲ ንሽጋራ መሰል ኣይኮነን፡ ምስ ተቖጻጻሪኹም ተሰማምዑ። ኣብ ጥቓ ቀልጢፉ ዝነድድ ነገር፡ ከም ነዳዲ ወይ ኣብ መኽዘን ዘለዉ ሳጹናት፡ ፈጺምኩም ሽጋራ ኣይተትክኹ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.p': 'ኣብ ዕረፍተይ ኣብ ደገ ሽጋራ ከትክኽ ይኽእል ዶ?',
    'c.smoking.s': { m: 'ዝሑል እዩ፡ ዝናብ ድማ ይዘንብ። ሓደ ብጻይ ስራሕ «ኣብ ክፍሊ መኽዘን ኣትክኽ፡ ዝርእየካ የለን።» ይብለካ። እንታይ ትገብር?', f: 'ዝሑል እዩ፡ ዝናብ ድማ ይዘንብ። ሓደ ብጻይ ስራሕ «ኣብ ክፍሊ መኽዘን ኣትክኺ፡ ዝርእየኪ የለን።» ይብለኪ። እንታይ ትገብሪ?', x: 'ዝሑል እዩ፡ ዝናብ ድማ ይዘንብ። ሓደ ብጻይ ስራሕ «ኣብ ክፍሊ መኽዘን ኣትክኹ፡ ዝርእየኩም የለን።» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o1': { m: 'ኣይፋል በል፡ ኣብ ዕረፍትኻ ኣብ ደገ ኣትክኽ።', f: 'ኣይፋል በሊ፡ ኣብ ዕረፍትኺ ኣብ ደገ ኣትክኺ።', x: 'ኣይፋል በሉ፡ ኣብ ዕረፍትኹም ኣብ ደገ ኣትክኹ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o2': { m: 'ሓንሳብ ጥራይ፡ ኣብ ክፍሊ መኽዘን ቀልጢፍካ ኣትክኽ።', f: 'ሓንሳብ ጥራይ፡ ኣብ ክፍሊ መኽዘን ቀልጢፍኪ ኣትክኺ።', x: 'ሓንሳብ ጥራይ፡ ኣብ ክፍሊ መኽዘን ቀልጢፍኩም ኣትክኹ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.o3': { m: 'እዚ ስለ ዝፍቀድ፡ ኣብ ክንድኡ ቬፕካ ኣብ ውሽጢ ተጠቐም።', f: 'እዚ ስለ ዝፍቀድ፡ ኣብ ክንድኡ ቬፕኪ ኣብ ውሽጢ ተጠቐሚ።', x: 'እዚ ስለ ዝፍቀድ፡ ኣብ ክንድኡ ቬፕኩም ኣብ ውሽጢ ተጠቐሙ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smoking.w': 'ኣብ ውሽጢ ሽጋራ ምትካኽ ኣንጻር ሕጊ እዩ፡ ሓዊ ድማ ከልዕል ይኽእል። ኣብ ውሽጢ ቬፕ እውን ኣይፍቀድን። ነቲ ሕጊ ምኽባር ንኹሉ ሰብ ውሑስ ይገብሮ።',
    'c.clock': { m: 'ባዕልኻ ተመዝገብ', f: 'ባዕልኺ ተመዝገቢ', x: 'ባዕልኹም ተመዝገቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.clock.b': { m: 'ስራሕ ብሓቂ ኣብ እትጅምረሉን ኣብ እተቋርጸሉን ህሞት፡ ምእታውካን ምውጻእካን ባዕልኻ ኣመዝግብ። ፈጺምካ ኣብ ክንዲ ብጻይ ስራሕ ኣይትመዝግብ፡ ካልእ ሰብ ካርድካ ክጥቀመሉ ድማ ፈጺምካ ኣይተፍቅድ። እዚ ከም ምትላል ይቑጸር፡ ካብ ስራሕ ክሰጎካ ድማ ይኽእል። ክትድንጒ ዲኻ? ፈረቓኻ ቅድሚ ምጅማሩ ደውል። ዝተመዝገበ ሰዓታትካ ምስ ወረቐት ደሞዝካ ከም ዝሰማማዕ ኣረጋግጽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ስራሕ ብሓቂ ኣብ እትጅምርሉን ኣብ እተቋርጽሉን ህሞት፡ ምእታውኪን ምውጻእኪን ባዕልኺ ኣመዝግቢ። ፈጺምኪ ኣብ ክንዲ ብጻይ ስራሕ ኣይትመዝግቢ፡ ካልእ ሰብ ካርድኪ ክጥቀመሉ ድማ ፈጺምኪ ኣይተፍቅዲ። እዚ ከም ምትላል ይቑጸር፡ ካብ ስራሕ ክሰጎኪ ድማ ይኽእል። ክትድንጊ ዲኺ? ፈረቓኺ ቅድሚ ምጅማሩ ደውሊ። ዝተመዝገበ ሰዓታትኪ ምስ ወረቐት ደሞዝኪ ከም ዝሰማማዕ ኣረጋግጺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.clock.p': 'ምውጻአይ ምምዝጋብ ረሲዐ። ከተዐርዮ ትኽእል ዶ?',
    'c.clock.s': { m: 'ሓደ ብጻይ ስራሕ ካርዱ ሂቡካ «ኣብ ክንዳይ ተመዝገበለይ፡ 20 ደቒቕ ክድንጒ እየ።» ይብለካ። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ ካርዱ ሂቡኪ «ኣብ ክንዳይ ተመዝገብለይ፡ 20 ደቒቕ ክድንጒ እየ።» ይብለኪ። እንታይ ትገብሪ?' },
    'c.clock.o1': { m: 'ኣይፋል በሎ፡ ንተቖጻጻሪ ክድውል ድማ ንገሮ።', f: 'ኣይፋል በልዮ፡ ንተቖጻጻሪ ክድውል ድማ ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.clock.o2': { m: 'ዓርክኻ ስለ ዝኾነ፡ ሓንሳብ ጥራይ ግበሮ።', f: 'ዓርክኺ ስለ ዝኾነ፡ ሓንሳብ ጥራይ ግበርዮ።' },
    'c.clock.o3': { m: 'ኣመዝግቦ እሞ ደሓር ንተቖጻጻሪ ንገሮ።', f: 'ኣመዝግብዮ እሞ ደሓር ንተቖጻጻሪ ንገርዮ።' },
    'c.clock.w': { m: 'ኣብ ክንዲ ካልእ ሰብ ምምዝጋብ ንኽልቴኹም ከም ምትላል ይቑጸር። ኣይፋል ምባል ንብጻይካን ንስራሕካን ይከላኸል።', f: 'ኣብ ክንዲ ካልእ ሰብ ምምዝጋብ ንኽልቴኹም ከም ምትላል ይቑጸር። ኣይፋል ምባል ንብጻይኪን ንስራሕኪን ይከላኸል።' },
    'c.hygiene': 'ንጹር ኣእምሮ፡ ጽሩይ ኢድ',
    'c.hygiene.b': { m: 'ኣብ ስራሕ ኣልኮልን ኣደንዛዚ ዕጽን፡ ወይ ድሕሪ ምጥቃሞም ናብ ስራሕ ምምጻእ፡ ኣብ ዳርጋ ኩሉ ትካላት ክልኩል እዩ። ኣብ ጥቓ ማሽናትን ፎርክሊፍትን ኣዝዩ ሓደገኛ እዩ፡ ካብ ስራሕ ክሰጎካ ድማ ይኽእል። መድሃኒት ድቃስ ወይ ዙረት የምጽኣልካ ድዩ? ውሑስ ስራሕ ክትሰርሕ ምእንቲ፡ ንተቖጻጻሪኻ ንገሮ። ኣየናይ መድሃኒት ምዃኑ ክትነግር ኣየድልየካን። ኣብ ምፍራይ መግቢ ሕግታት ጽሬት ተሪር እዩ፡ ኣእዳውካ ተሓጸብ፡ ጽሩይ ክዳን ስራሕ ግበር፡ እንተ ኣድልዩ መሸፈኒ ጸጉሪ ግበር፡ ስልማት ድማ ኣይትግበር። ተምላስ ወይ ውጽኣት ኣለካ ድዩ? ቅድሚ ምጅማርካ ሕበር። ቦታ ስራሕካ ጽሩይን ስሩዕን ሓልዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ኣብ ስራሕ ኣልኮልን ኣደንዛዚ ዕጽን፡ ወይ ድሕሪ ምጥቃሞም ናብ ስራሕ ምምጻእ፡ ኣብ ዳርጋ ኩሉ ትካላት ክልኩል እዩ። ኣብ ጥቓ ማሽናትን ፎርክሊፍትን ኣዝዩ ሓደገኛ እዩ፡ ካብ ስራሕ ክሰጎኪ ድማ ይኽእል። መድሃኒት ድቃስ ወይ ዙረት የምጽኣልኪ ድዩ? ውሑስ ስራሕ ክትሰርሒ ምእንቲ፡ ንተቖጻጻሪኺ ንገርዮ። ኣየናይ መድሃኒት ምዃኑ ክትነግሪ ኣየድልየክን። ኣብ ምፍራይ መግቢ ሕግታት ጽሬት ተሪር እዩ፡ ኣእዳውኪ ተሓጸቢ፡ ጽሩይ ክዳን ስራሕ ግበሪ፡ እንተ ኣድልዩ መሸፈኒ ጸጉሪ ግበሪ፡ ስልማት ድማ ኣይትግበሪ። ተምላስ ወይ ውጽኣት ኣለኪ ድዩ? ቅድሚ ምጅማርኪ ሕበሪ። ቦታ ስራሕኪ ጽሩይን ስሩዕን ሓልውዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.hygiene.p': 'መድሃኒት እወስድ ኣለኹ። ድቃስ የምጽኣለይ።',
    'c.hygiene.s': { m: 'ሓኪምካ ድቃስ ዘምጽእ መድሃኒት ይህበካ። ጽባሕ ፎርክሊፍት ክትዝውር ኣለካ። እንታይ ትገብር?', f: 'ሓኪምኪ ድቃስ ዘምጽእ መድሃኒት ይህበኪ። ጽባሕ ፎርክሊፍት ክትዝውሪ ኣለኪ። እንታይ ትገብሪ?', x: 'ሓኪምኩም ድቃስ ዘምጽእ መድሃኒት ይህበኩም። ጽባሕ ፎርክሊፍት ክትዝውሩ ኣለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o1': { m: 'ቅድሚ ምጅማርካ ንተቖጻጻሪኻ ንገሮ።', f: 'ቅድሚ ምጅማርኪ ንተቖጻጻሪኺ ንገርዮ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o2': { m: 'ገለ ኣይትበል እሞ ብጣዕሚ ቀስ ኢልካ ዝወር።', f: 'ገለ ኣይትበሊ እሞ ብጣዕሚ ቀስ ኢልኪ ዝወሪ።', x: 'ገለ ኣይትበሉ እሞ ብጣዕሚ ቀስ ኢልኩም ዝወሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.o3': { m: 'ንሓኪምካ ከይሓተትካ ነቲ መድሃኒት ምውሳድ ኣቋርጽ።', f: 'ንሓኪምኪ ከይሓተትኪ ነቲ መድሃኒት ምውሳድ ኣቋርጺ።', x: 'ንሓኪምኩም ከይሓተትኩም ነቲ መድሃኒት ምውሳድ ኣቋርጹ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hygiene.w': { m: 'ተቖጻጻሪኻ ኣየናይ መድሃኒት ምዃኑ ክፈልጥ ኣየድልዮን፡ ሕጂ ክትዝውር ወይ ብማሽን ክትሰርሕ ከም ዘይትኽእል ጥራይ። እዚ ንዓኻን ንብጾት ስራሕካን ውሑሳት ይገብረኩም።', f: 'ተቖጻጻሪኺ ኣየናይ መድሃኒት ምዃኑ ክፈልጥ ኣየድልዮን፡ ሕጂ ክትዝውሪ ወይ ብማሽን ክትሰርሒ ከም ዘይትኽእሊ ጥራይ። እዚ ንዓኺን ንብጾት ስራሕኪን ውሑሳት ይገብረኩም።' },
    'c.smalltalk': 'ሓጺር ዕላል ኣብ ዕረፍቲ',
    'c.smalltalk.b': { m: 'ኣብ ዕረፍቲ ሓጺር ዕላል ልሙድ እዩ። ከም ኣባል ጉጅለ ክስመዓካ ይሕግዝ። ኣብ ጣውላ ቡን ወይ ምሳሕ እንቋዕ ብደሓን መጻእካ ትበሃል። ቀለልቲ ኣርእስታት፡ ቀዳምን ሰንበትን፡ ኩነታት ኣየር፡ ስፖርትን ዕረፍትን እዮም። ብዛዕባ ደሞዝ፡ ሃይማኖት ወይ ውልቃዊ ናብራ ሰብ ዝሕተቱ ሕቶታት ኣብ መጀመርታ መብዛሕትኡ ግዜ ኣዝዮም ውልቃውያን እዮም። ኣብ መዓልቲ ልደቶም፡ ሰባት መብዛሕትኡ ግዜ ንጉጅለ ገለ ጥዑም የምጽኡ (trakteren)፡ ከም ኬክ። ናይ ብጻይ ስራሕ መዓልቲ ልደት ድዩ? «Gefeliciteerd!» በል።', f: 'ኣብ ዕረፍቲ ሓጺር ዕላል ልሙድ እዩ። ከም ኣባል ጉጅለ ክስመዓኪ ይሕግዝ። ኣብ ጣውላ ቡን ወይ ምሳሕ እንቋዕ ብደሓን መጻእኪ ትበሃሊ። ቀለልቲ ኣርእስታት፡ ቀዳምን ሰንበትን፡ ኩነታት ኣየር፡ ስፖርትን ዕረፍትን እዮም። ብዛዕባ ደሞዝ፡ ሃይማኖት ወይ ውልቃዊ ናብራ ሰብ ዝሕተቱ ሕቶታት ኣብ መጀመርታ መብዛሕትኡ ግዜ ኣዝዮም ውልቃውያን እዮም። ኣብ መዓልቲ ልደቶም፡ ሰባት መብዛሕትኡ ግዜ ንጉጅለ ገለ ጥዑም የምጽኡ (trakteren)፡ ከም ኬክ። ናይ ብጻይ ስራሕ መዓልቲ ልደት ድዩ? «Gefeliciteerd!» በሊ።', x: 'ኣብ ዕረፍቲ ሓጺር ዕላል ልሙድ እዩ። ከም ኣባል ጉጅለ ክስመዓኩም ይሕግዝ። ኣብ ጣውላ ቡን ወይ ምሳሕ እንቋዕ ብደሓን መጻእኩም ትበሃሉ። ቀለልቲ ኣርእስታት፡ ቀዳምን ሰንበትን፡ ኩነታት ኣየር፡ ስፖርትን ዕረፍትን እዮም። ብዛዕባ ደሞዝ፡ ሃይማኖት ወይ ውልቃዊ ናብራ ሰብ ዝሕተቱ ሕቶታት ኣብ መጀመርታ መብዛሕትኡ ግዜ ኣዝዮም ውልቃውያን እዮም። ኣብ መዓልቲ ልደቶም፡ ሰባት መብዛሕትኡ ግዜ ንጉጅለ ገለ ጥዑም የምጽኡ (trakteren)፡ ከም ኬክ። ናይ ብጻይ ስራሕ መዓልቲ ልደት ድዩ? «Gefeliciteerd!» በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.smalltalk.p': 'ርሑስ መዓልቲ ልደት!',
    'c.smalltalk.s': { m: 'ኣብ ዕረፍቲ፡ ብጾት ስራሕካ ኣብ ሓደ ጣውላ ብሓባር ተቐሚጦም ኣለዉ። ገና ብጽቡቕ ኣይትፈልጦምን ኢኻ። እንታይ ትገብር?', f: 'ኣብ ዕረፍቲ፡ ብጾት ስራሕኪ ኣብ ሓደ ጣውላ ብሓባር ተቐሚጦም ኣለዉ። ገና ብጽቡቕ ኣይትፈልጥዮምን ኢኺ። እንታይ ትገብሪ?' },
    'c.smalltalk.o1': { m: '«Mag ik bij jullie zitten?» ኢልካ ሕተት፡ ብሓጺር ዕላል ድማ ተጸንበሮም።', f: '«Mag ik bij jullie zitten?» ኢልኪ ሕተቲ፡ ብሓጺር ዕላል ድማ ተጸንበርዮም።' },
    'c.smalltalk.o2': { m: 'ከይትረብሾም፡ መዓልታዊ በይንኻ ኣብ ደገ ብላዕ።', f: 'ከይትረብሽዮም፡ መዓልታዊ በይንኺ ኣብ ደገ ብልዒ።' },
    'c.smalltalk.o3': { m: 'ንነፍሲ ወከፍ ብጻይ ስራሕ ክንደይ ከም ዝረኽብ ሕተቶ።', f: 'ንነፍሲ ወከፍ ብጻይ ስራሕ ክንደይ ከም ዝረኽብ ሕተትዮ።' },
    'c.smalltalk.w': { m: 'ኣብቲ ጣውላ ምጽንባር ተቐባልነት ኣለዎ፡ ነቲ ጉጅለ ክትፈልጦ ድማ ይሕግዘካ። ከም «Hoe was je weekend?» ዝኣመሰለ ቀሊል ሕቶ ጽቡቕ ጅማሮ እዩ።', f: 'ኣብቲ ጣውላ ምጽንባር ተቐባልነት ኣለዎ፡ ነቲ ጉጅለ ክትፈልጥዮ ድማ ይሕግዘኪ። ከም «Hoe was je weekend?» ዝኣመሰለ ቀሊል ሕቶ ጽቡቕ ጅማሮ እዩ።' },
    'c.mistakes': 'ጌጋታት ልሙዳት እዮም',
    'c.mistakes.b': { m: 'ኩሉ ሰብ ኣብ ስራሕ ጌጋ ይገብር። ክዕረ ምእንቲ ቀልጢፍካ ንገር፡ «Sorry, ik heb een fout gemaakt.»። ጌጋ ምሕባእ ካብቲ ጌጋ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ። ርእይቶ ብዛዕባ እቲ ስራሕ እዩ፡ ብዛዕባኻ ከም ሰብ ኣይኮነን። ናእዳ ረኺብካ ድዩ? የቐንየለይ ጥራይ በል። እንታይ ከተመሓይሽ ከም ዘለካ ንጹር ኣይኮነን? ሕተት፡ «Kun je het uitleggen?»', f: 'ኩሉ ሰብ ኣብ ስራሕ ጌጋ ይገብር። ክዕረ ምእንቲ ቀልጢፍኪ ንገሪ፡ «Sorry, ik heb een fout gemaakt.»። ጌጋ ምሕባእ ካብቲ ጌጋ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ። ርእይቶ ብዛዕባ እቲ ስራሕ እዩ፡ ብዛዕባኺ ከም ሰብ ኣይኮነን። ናእዳ ረኺብኪ ድዩ? የቐንየለይ ጥራይ በሊ። እንታይ ከተመሓይሺ ከም ዘለኪ ንጹር ኣይኮነን? ሕተቲ፡ «Kun je het uitleggen?»', x: 'ኩሉ ሰብ ኣብ ስራሕ ጌጋ ይገብር። ክዕረ ምእንቲ ቀልጢፍኩም ንገሩ፡ «Sorry, ik heb een fout gemaakt.»። ጌጋ ምሕባእ ካብቲ ጌጋ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ። ርእይቶ ብዛዕባ እቲ ስራሕ እዩ፡ ብዛዕባኹም ከም ሰብ ኣይኮነን። ናእዳ ረኺብኩም ድዩ? የቐንየለይ ጥራይ በሉ። እንታይ ከተመሓይሹ ከም ዘለኩም ንጹር ኣይኮነን? ሕተቱ፡ «Kun je het uitleggen?»' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.p': 'ይቕሬታ፡ ጌጋ ገይረ። ብኸመይ ከዐርዮ እኽእል?',
    'c.mistakes.s': { m: '20 ሳጹናት ኣብ ጌጋ ፓለት ኣቐሚጥካ። ገና ዝረኣዮ ሰብ የለን። እንታይ ትገብር?', f: '20 ሳጹናት ኣብ ጌጋ ፓለት ኣቐሚጥኪ። ገና ዝረኣዮ ሰብ የለን። እንታይ ትገብሪ?', x: '20 ሳጹናት ኣብ ጌጋ ፓለት ኣቐሚጥኩም። ገና ዝረኣዮ ሰብ የለን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o1': { m: 'ንተቖጻጻሪኻ ንገሮ እሞ ኣብ ምእራሙ ሓግዝ።', f: 'ንተቖጻጻሪኺ ንገርዮ እሞ ኣብ ምእራሙ ሓግዚ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.mistakes.o2': { m: 'ገለ ኣይትበል እሞ ሓደ እኳ ከይርእዮ ተስፋ ግበር።', f: 'ገለ ኣይትበሊ እሞ ሓደ እኳ ከይርእዮ ተስፋ ግበሪ።', x: 'ገለ ኣይትበሉ እሞ ሓደ እኳ ከይርእዮ ተስፋ ግበሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.o3': { m: 'ሓደ ብጻይ ስራሕ ከም ዝገበሮ በል።', f: 'ሓደ ብጻይ ስራሕ ከም ዝገበሮ በሊ።', x: 'ሓደ ብጻይ ስራሕ ከም ዝገበሮ በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.mistakes.w': { m: 'ኣቐዲሙ ዝተነግረ ጌጋ ብቐሊሉ ይዕረ። ሓቀኛ ምዃን እምነት ይሃንጽ፡ እዚ ድማ ካብ ፈጺምካ ጌጋ ዘይምግባር ዝያዳ ይቑጸር።', f: 'ኣቐዲሙ ዝተነግረ ጌጋ ብቐሊሉ ይዕረ። ሓቀኛ ምዃን እምነት ይሃንጽ፡ እዚ ድማ ካብ ፈጺምኪ ጌጋ ዘይምግባር ዝያዳ ይቑጸር።', x: 'ኣቐዲሙ ዝተነግረ ጌጋ ብቐሊሉ ይዕረ። ሓቀኛ ምዃን እምነት ይሃንጽ፡ እዚ ድማ ካብ ፈጺምኩም ጌጋ ዘይምግባር ዝያዳ ይቑጸር።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.respect': 'ክብሪ ንኹሉ ሰብ',
    'c.respect.b': { m: 'ኣብ ስራሕ ኩሉ ሰብ ማዕረ እዩ፡ ኩሉ ሰብ ድማ ብኽብሪ ይተሓዝ፡ ጾታኡ፡ መበቆሉ፡ ሃይማኖቱ ወይ ጾታዊ ዝንባለኡ ብዘየገድስ። ብዛዕባ ኣካላዊ ርክብ ንስኻ ኢኻ ትውስን። ኢድ ምጭባጥ ልሙድ እዩ። ግን ብኻልእ ትሑት መንገዲ እውን ሰላምታ ክትህብ ትኽእል ኢኻ፡ ከም ርእሲ ቁሩብ ምድናንን ፍሽኽታን። ድሕሪኡ ብሓጺሩ ግለጾ። ብዛዕባ መበቆል ወይ ሃይማኖት ሰብ ዝግበር ቀልዲ፡ ምፍርራሕ፡ ምጽቃጥ (pesten)ን ዘይድለ ጾታዊ ባህርይን ተቐባልነት የብሎምን። ንተቖጻጻሪኻ፡ ወይ ትካልካ እንተ ኣለዎ ንምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ክትሕብር ትኽእል ኢኻ።', f: 'ኣብ ስራሕ ኩሉ ሰብ ማዕረ እዩ፡ ኩሉ ሰብ ድማ ብኽብሪ ይተሓዝ፡ ጾታኡ፡ መበቆሉ፡ ሃይማኖቱ ወይ ጾታዊ ዝንባለኡ ብዘየገድስ። ብዛዕባ ኣካላዊ ርክብ ንስኺ ኢኺ ትውስኒ። ኢድ ምጭባጥ ልሙድ እዩ። ግን ብኻልእ ትሑት መንገዲ እውን ሰላምታ ክትህቢ ትኽእሊ ኢኺ፡ ከም ርእሲ ቁሩብ ምድናንን ፍሽኽታን። ድሕሪኡ ብሓጺሩ ግለጽዮ። ብዛዕባ መበቆል ወይ ሃይማኖት ሰብ ዝግበር ቀልዲ፡ ምፍርራሕ፡ ምጽቃጥ (pesten)ን ዘይድለ ጾታዊ ባህርይን ተቐባልነት የብሎምን። ንተቖጻጻሪኺ፡ ወይ ትካልኪ እንተ ኣለዎ ንምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ክትሕብሪ ትኽእሊ ኢኺ።' },
    'c.respect.p': 'ኢድ ዘይምጭባጥ እመርጽ፡ ግን ሰላምታ ክህበካ ደስ ይብለኒ።',
    'c.respect.s': { m: 'ሓደ ብጻይ ስራሕ ብዙሕ ግዜ ብዛዕባ ሃይማኖትካ ይቀልድ። ደው ከብሎ ሓቲትካዮ፡ ግን ይቕጽል። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ ብዙሕ ግዜ ብዛዕባ ሃይማኖትኪ ይቀልድ። ደው ከብሎ ሓቲትክዮ፡ ግን ይቕጽል። እንታይ ትገብሪ?' },
    'c.respect.o1': { m: 'ንተቖጻጻሪኻ ወይ ንvertrouwenspersoon ንገር።', f: 'ንተቖጻጻሪኺ ወይ ንvertrouwenspersoon ንገሪ።', x: 'ንተቖጻጻሪኹም ወይ ንvertrouwenspersoon ንገሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o2': { m: 'ጸገም ከይመጽእ፡ ምስኡ ስሓቕ።', f: 'ጸገም ከይመጽእ፡ ምስኡ ስሓቒ።', x: 'ጸገም ከይመጽእ፡ ምስኡ ስሓቑ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.o3': { m: 'ንስኻ እውን ብዛዕባ መበቆሉ ቀልድ።', f: 'ንስኺ እውን ብዛዕባ መበቆሉ ቀልዲ።', x: 'ንስኹም እውን ብዛዕባ መበቆሉ ቀልዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.respect.w': 'ከምዚ ዝበለ ቀልዲ ኣብ ስራሕ ተቐባልነት የብሉን። ምሕባሩ ልሙድ እዩ፡ ትካል ንኹሉ ሰብ ውሑስ ቦታ ስራሕ ክሕሉ ኣለዎ።',
    'c.health': 'ዕረፍትን ሰዓታት ስራሕን',
    'c.health.b': { m: 'ሕጊ ጥዕናኻ ይሕሉ። ካብ 5.5 ሰዓት ንላዕሊ ትሰርሕ ዲኻ? ሽዑ እንተ ወሓደ 30 ደቒቕ ዕረፍቲ ትረኽብ (2 ግዜ 15 ደቒቕ ክኸውን ይኽእል)። ካብ 10 ሰዓት ንላዕሊ? ሽዑ እንተ ወሓደ 45 ደቒቕ። cao ቁሩብ ዝተፈልየ ሕግታት ዕረፍቲ ክህልዎ ይኽእል። ኣብ ሓደ ፈረቓ እንተ በዝሐ 12 ሰዓት፡ ኣብ ሓደ ሰሙን ድማ እንተ በዝሐ 60 ሰዓት ክትሰርሕ ትኽእል። ካብ 18 ዓመት ትንእስ ዲኻ? ሽዑ ዝወሓደ ሰዓታት ጥራይ ክትሰርሕ ይፍቀደልካ። ኣስራሒኻ መከላኸሊ ናውቲ፡ ከም ናይ ድሕንነት ጫማ ወይ ጓንቲ፡ ብነጻ ክህበካ ኣለዎ። ውሑስ ዘይኮነ ስራሕ ወይ ኣዝዩ ውሑድ ደሞዝ ኣሎ ድዩ? ናብ Nederlandse Arbeidsinspectie ክትሕብር ትኽእል ኢኻ፡ ስምካ ከይሃብካ እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ሕጊ ጥዕናኺ ይሕሉ። ካብ 5.5 ሰዓት ንላዕሊ ትሰርሒ ዲኺ? ሽዑ እንተ ወሓደ 30 ደቒቕ ዕረፍቲ ትረኽቢ (2 ግዜ 15 ደቒቕ ክኸውን ይኽእል)። ካብ 10 ሰዓት ንላዕሊ? ሽዑ እንተ ወሓደ 45 ደቒቕ። cao ቁሩብ ዝተፈልየ ሕግታት ዕረፍቲ ክህልዎ ይኽእል። ኣብ ሓደ ፈረቓ እንተ በዝሐ 12 ሰዓት፡ ኣብ ሓደ ሰሙን ድማ እንተ በዝሐ 60 ሰዓት ክትሰርሒ ትኽእሊ። ካብ 18 ዓመት ትንእሲ ዲኺ? ሽዑ ዝወሓደ ሰዓታት ጥራይ ክትሰርሒ ይፍቀደልኪ። ኣስራሒኺ መከላኸሊ ናውቲ፡ ከም ናይ ድሕንነት ጫማ ወይ ጓንቲ፡ ብነጻ ክህበኪ ኣለዎ። ውሑስ ዘይኮነ ስራሕ ወይ ኣዝዩ ውሑድ ደሞዝ ኣሎ ድዩ? ናብ Nederlandse Arbeidsinspectie ክትሕብሪ ትኽእሊ ኢኺ፡ ስምኪ ከይሃብኪ እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።', x: 'ሕጊ ጥዕናኹም ይሕሉ። ካብ 5.5 ሰዓት ንላዕሊ ትሰርሑ ዲኹም? ሽዑ እንተ ወሓደ 30 ደቒቕ ዕረፍቲ ትረኽቡ (2 ግዜ 15 ደቒቕ ክኸውን ይኽእል)። ካብ 10 ሰዓት ንላዕሊ? ሽዑ እንተ ወሓደ 45 ደቒቕ። cao ቁሩብ ዝተፈልየ ሕግታት ዕረፍቲ ክህልዎ ይኽእል። ኣብ ሓደ ፈረቓ እንተ በዝሐ 12 ሰዓት፡ ኣብ ሓደ ሰሙን ድማ እንተ በዝሐ 60 ሰዓት ክትሰርሑ ትኽእሉ። ካብ 18 ዓመት ትንእሱ ዲኹም? ሽዑ ዝወሓደ ሰዓታት ጥራይ ክትሰርሑ ይፍቀደልኩም። ኣስራሒኹም መከላኸሊ ናውቲ፡ ከም ናይ ድሕንነት ጫማ ወይ ጓንቲ፡ ብነጻ ክህበኩም ኣለዎ። ውሑስ ዘይኮነ ስራሕ ወይ ኣዝዩ ውሑድ ደሞዝ ኣሎ ድዩ? ናብ Nederlandse Arbeidsinspectie ክትሕብሩ ትኽእሉ ኢኹም፡ ስምኩም ከይሃብኩም እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.health.p': 'ገና ዕረፍቲ ኣይወሰድኩን።',
    'c.health.s': { m: 'ብዘይ ዕረፍቲ 6 ሰዓት ሰሪሕካ። ተቖጻጻሪኻ ክትቕጽል ይሓተካ። እንታይ ትገብር?', f: 'ብዘይ ዕረፍቲ 6 ሰዓት ሰሪሕኪ። ተቖጻጻሪኺ ክትቕጽሊ ይሓተኪ። እንታይ ትገብሪ?', x: 'ብዘይ ዕረፍቲ 6 ሰዓት ሰሪሕኩም። ተቖጻጻሪኹም ክትቕጽሉ ይሓተኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o1': { m: 'ሕጂ ዕረፍትኻ ከም ዘድልየካ ንገር።', f: 'ሕጂ ዕረፍትኺ ከም ዘድልየኪ ንገሪ።', x: 'ሕጂ ዕረፍትኹም ከም ዘድልየኩም ንገሩ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o2': { m: 'ቀጽል፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰድ።', f: 'ቀጽሊ፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰዲ።', x: 'ቀጽሉ፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰዱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.o3': { m: 'ቃል ከይበልካ ስራሕ ገዲፍካ ናብ ገዛ ኪድ።', f: 'ቃል ከይበልኪ ስራሕ ገዲፍኪ ናብ ገዛ ኪዲ።', x: 'ቃል ከይበልኩም ስራሕ ገዲፍኩም ናብ ገዛ ኪዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.health.w': { m: 'ካብ 5.5 ሰዓት ንላዕሊ ክትሰርሕ ከለኻ፡ ዕረፍቲ ሕጊ እዩ፡ ውዕለት ኣይኮነን። ዕረፍቲ ብውሑስ መንገዲ ክትሰርሕ እውን ይሕግዘካ።', f: 'ካብ 5.5 ሰዓት ንላዕሊ ክትሰርሒ ከለኺ፡ ዕረፍቲ ሕጊ እዩ፡ ውዕለት ኣይኮነን። ዕረፍቲ ብውሑስ መንገዲ ክትሰርሒ እውን ይሕግዘኪ።', x: 'ካብ 5.5 ሰዓት ንላዕሊ ክትሰርሑ ከለኹም፡ ዕረፍቲ ሕጊ እዩ፡ ውዕለት ኣይኮነን። ዕረፍቲ ብውሑስ መንገዲ ክትሰርሑ እውን ይሕግዘኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.rights': 'ኣድልዎን ካብ ስራሕ ምስጓግን',
    'c.rights.b': { m: 'ኣብ ስራሕ ኣድልዎ ክልኩል እዩ፡ ንኣብነት ብሰንኪ መበቆልካ፡ ሃይማኖትካ ወይ ጾታኻ። ኣስራሒኻ ብቐሊሉ ካብ ስራሕ ክሰጎካ ኣይክእልን፡ ብተለምዶ ፍቓድ ካብ UWV ወይ ካብ ፈራዲ፡ ወይ ስምምዕካ የድልዮ። (ኣብ ግዜ ፈተነ ወይ ኣብ መወዳእታ ግዝያዊ ውዕል ካልእ ሕግታት ይሰርሑ።) ዘይተረደኣካ ወረቐት ብዛዕባ ምስጓግካ ኣይትፈርም። ስራሕካ ንምውዳእ ስምምዕ (vaststellingsovereenkomst) ፈሪምካ ዲኻ? ሽዑ ብተለምዶ ኣብ ውሽጢ 14 መዓልቲ ብጽሑፍ ክትስርዞ ገና ትኽእል ኢኻ። ቅድም ሓገዝ ውሰድ። ናብ ማሕበር ሰራሕተኛታት (ንኣብነት FNV)፡ ናብ ቤት ጽሕፈት ሓገዝ ኣድልዎ ወይ ናብ Juridisch Loket ኪድ። Juridisch Loket ነጻ ሕጋዊ ምኽሪ ይህብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ኣብ ስራሕ ኣድልዎ ክልኩል እዩ፡ ንኣብነት ብሰንኪ መበቆልኪ፡ ሃይማኖትኪ ወይ ጾታኺ። ኣስራሒኺ ብቐሊሉ ካብ ስራሕ ክሰጎኪ ኣይክእልን፡ ብተለምዶ ፍቓድ ካብ UWV ወይ ካብ ፈራዲ፡ ወይ ስምምዕኪ የድልዮ። (ኣብ ግዜ ፈተነ ወይ ኣብ መወዳእታ ግዝያዊ ውዕል ካልእ ሕግታት ይሰርሑ።) ዘይተረደኣኪ ወረቐት ብዛዕባ ምስጓግኪ ኣይትፈርሚ። ስራሕኪ ንምውዳእ ስምምዕ (vaststellingsovereenkomst) ፈሪምኪ ዲኺ? ሽዑ ብተለምዶ ኣብ ውሽጢ 14 መዓልቲ ብጽሑፍ ክትስርዝዮ ገና ትኽእሊ ኢኺ። ቅድም ሓገዝ ውሰዲ። ናብ ማሕበር ሰራሕተኛታት (ንኣብነት FNV)፡ ናብ ቤት ጽሕፈት ሓገዝ ኣድልዎ ወይ ናብ Juridisch Loket ኪዲ። Juridisch Loket ነጻ ሕጋዊ ምኽሪ ይህብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' },
    'c.rights.p': 'ቅድም ምኽሪ ክሓትት እደሊ።',
    'c.rights.s': { m: 'ሓላፊኻ ወረቐት ሂቡካ «ሎሚ ፈርም፡ ሽዑ ብስምምዕ ትወጽእ።» ይብለካ። ብጽቡቕ ኣይተረደኣካን። እንታይ ትገብር?', f: 'ሓላፊኺ ወረቐት ሂቡኪ «ሎሚ ፈርሚ፡ ሽዑ ብስምምዕ ትወጽኢ።» ይብለኪ። ብጽቡቕ ኣይተረደኣክን። እንታይ ትገብሪ?' },
    'c.rights.o1': { m: 'ገና ኣይትፈርም። ቅድም ምኽሪ ውሰድ።', f: 'ገና ኣይትፈርሚ። ቅድም ምኽሪ ውሰዲ።', x: 'ገና ኣይትፈርሙ። ቅድም ምኽሪ ውሰዱ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rights.o2': { m: 'ሓላፊ ጽቡቕ እዩ ስለ ዝበለ፡ ፈርሞ።', f: 'ሓላፊ ጽቡቕ እዩ ስለ ዝበለ፡ ፈርምዮ።' },
    'c.rights.o3': { m: 'ነቲ ወረቐት ኣልግሶ እሞ ፈጺምካ ብዛዕባኡ ኣይትዛረብ።', f: 'ነቲ ወረቐት ኣልግስዮ እሞ ፈጺምኪ ብዛዕባኡ ኣይትዛረቢ።' },
    'c.rights.w': { m: 'ኣብኡ ጌጋ ነገር እንተሎ፡ መሰላት ከተጥፍእ ትኽእል ኢኻ፡ ንኣብነት ናይ ሓገዝ ስራሕ ኣልቦነት (WW)። ምኽሪ ንምውሳድ ግዜ ምሕታት ልሙድን ዝፍቀድን እዩ።', f: 'ኣብኡ ጌጋ ነገር እንተሎ፡ መሰላት ከተጥፍኢ ትኽእሊ ኢኺ፡ ንኣብነት ናይ ሓገዝ ስራሕ ኣልቦነት (WW)። ምኽሪ ንምውሳድ ግዜ ምሕታት ልሙድን ዝፍቀድን እዩ።', x: 'ኣብኡ ጌጋ ነገር እንተሎ፡ መሰላት ከተጥፍኡ ትኽእሉ ኢኹም፡ ንኣብነት ናይ ሓገዝ ስራሕ ኣልቦነት (WW)። ምኽሪ ንምውሳድ ግዜ ምሕታት ልሙድን ዝፍቀድን እዩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay': 'ግድን፡ ግድን ኣይኮነን፡ ክልኩል', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.b': { m: 'ብሆላንድኛ፡ ተጻራሪ «moeten» «niet hoeven» እዩ። «Je moet tekenen» ማለት፡ ምርጫ የብልካን። «Je hoeft niet te tekenen» ማለት፡ ክትመርጽ ትኽእል ኢኻ። «Je mag niet tekenen» ማለት፡ ክልኩል እዩ። ተጠንቀቕ፡ ብእንግሊዝኛ «must not» ማለት «mag niet» እዩ። ብትግርኛ፡ «ግድን ኣይኮነን» ማለት «hoeft niet» እዩ። ርግጸኛ ኣይኮንካን? ሕተት።', f: 'ብሆላንድኛ፡ ተጻራሪ «moeten» «niet hoeven» እዩ። «Je moet tekenen» ማለት፡ ምርጫ የብልክን። «Je hoeft niet te tekenen» ማለት፡ ክትመርጺ ትኽእሊ ኢኺ። «Je mag niet tekenen» ማለት፡ ክልኩል እዩ። ተጠንቀቒ፡ ብእንግሊዝኛ «must not» ማለት «mag niet» እዩ። ብትግርኛ፡ «ግድን ኣይኮነን» ማለት «hoeft niet» እዩ። ርግጸኛ ኣይኮንክን? ሕተቲ።', x: 'ብሆላንድኛ፡ ተጻራሪ «moeten» «niet hoeven» እዩ። «Je moet tekenen» ማለት፡ ምርጫ የብልኩምን። «Je hoeft niet te tekenen» ማለት፡ ክትመርጹ ትኽእሉ ኢኹም። «Je mag niet tekenen» ማለት፡ ክልኩል እዩ። ተጠንቀቑ፡ ብእንግሊዝኛ «must not» ማለት «mag niet» እዩ። ብትግርኛ፡ «ግድን ኣይኮነን» ማለት «hoeft niet» እዩ። ርግጸኛታት ኣይኮንኩምን? ሕተቱ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.p': 'ግድን ድዩ፡ ወይስ ምርጫ ኣለኒ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.s': { m: 'ሓላፊ ጉጅለኻ «Je hoeft zaterdag niet te komen.» ይብለካ። እንታይ ማለቱ እዩ?', f: 'ሓላፊ ጉጅለኺ «Je hoeft zaterdag niet te komen.» ይብለኪ። እንታይ ማለቱ እዩ?', x: 'ሓላፊ ጉጅለኹም «Je hoeft zaterdag niet te komen.» ይብለኩም። እንታይ ማለቱ እዩ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o1': { m: 'ቀዳም ክትመጽእ ግድን ኣይኮነን። ክትመርጽ ትኽእል ኢኻ።', f: 'ቀዳም ክትመጽኢ ግድን ኣይኮነን። ክትመርጺ ትኽእሊ ኢኺ።', x: 'ቀዳም ክትመጹ ግድን ኣይኮነን። ክትመርጹ ትኽእሉ ኢኹም።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o2': { m: 'ቀዳም ክትመጽእ ኣይፍቀደልካን እዩ።', f: 'ቀዳም ክትመጽኢ ኣይፍቀደልክን እዩ።', x: 'ቀዳም ክትመጹ ኣይፍቀደልኩምን እዩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.o3': { m: 'ቀዳም ክትመጽእ ኣለካ።', f: 'ቀዳም ክትመጽኢ ኣለኪ።', x: 'ቀዳም ክትመጹ ኣለኩም።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mustmay.w': { m: '«Niet hoeven» ማለት ግዴታ ኣይኮነን፡ ክትመርጽ ትኽእል ኢኻ። «Niet mogen» ግን ክልኩል እዩ ማለት እዩ።', f: '«Niet hoeven» ማለት ግዴታ ኣይኮነን፡ ክትመርጺ ትኽእሊ ኢኺ። «Niet mogen» ግን ክልኩል እዩ ማለት እዩ።', x: '«Niet hoeven» ማለት ግዴታ ኣይኮነን፡ ክትመርጹ ትኽእሉ ኢኹም። «Niet mogen» ግን ክልኩል እዩ ማለት እዩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave': 'ዕረፍትን ናይ ህጹጽ ኩነታት ፍቓድን',
    'c.leave.b': { m: 'ብሕጊ ደሞዝ ዘለዎ መዓልትታት ዕረፍቲ ትረኽብ፡ እንተ ወሓደ ኣብ ሰሙን እትሰርሓሉ መዓልትታት 4 ግዜ። ምሉእ ግዜ፡ ኣብ ሰሙን 5 መዓልቲ ትሰርሕ ዲኻ? ሽዑ ኣብ ዓመት እንተ ወሓደ 20 መዓልቲ። cao ዝያዳ ክህብ ይኽእል። ፍቓድ ብግዜን ብጽሑፍን ሕተት። ሃንደበታዊ ህጹጽ ኩነታት፡ ከም ሓደጋ ወይ ሕማም ኣብ ስድራኻ? ሽዑ ደሞዝ ዘለዎ ሓጺር ፍቓድ (calamiteitenverlof) ክትረኽብ ትኽእል ኢኻ። ብኡብኡ ንኣስራሒኻ ንገሮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ብሕጊ ደሞዝ ዘለዎ መዓልትታት ዕረፍቲ ትረኽቢ፡ እንተ ወሓደ ኣብ ሰሙን እትሰርሕሉ መዓልትታት 4 ግዜ። ምሉእ ግዜ፡ ኣብ ሰሙን 5 መዓልቲ ትሰርሒ ዲኺ? ሽዑ ኣብ ዓመት እንተ ወሓደ 20 መዓልቲ። cao ዝያዳ ክህብ ይኽእል። ፍቓድ ብግዜን ብጽሑፍን ሕተቲ። ሃንደበታዊ ህጹጽ ኩነታት፡ ከም ሓደጋ ወይ ሕማም ኣብ ስድራኺ? ሽዑ ደሞዝ ዘለዎ ሓጺር ፍቓድ (calamiteitenverlof) ክትረኽቢ ትኽእሊ ኢኺ። ብኡብኡ ንኣስራሒኺ ንገርዮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.leave.p': 'ንሓምለ ፍቓድ ክሓትት ደስ ይብለኒ።',
    'c.leave.s': { m: 'ኣብ ክረምቲ ንሰለስተ ሰሙን ኣብ ወጻኢ ዘሎ ስድራኻ ክትበጽሕ ትደሊ። እንታይ ትገብር?', f: 'ኣብ ክረምቲ ንሰለስተ ሰሙን ኣብ ወጻኢ ዘሎ ስድራኺ ክትበጽሒ ትደልዪ። እንታይ ትገብሪ?' },
    'c.leave.o1': { m: 'ኣቐዲምካ ብጽሑፍ ንኣስራሒኻ ፍቓድ ሕተት።', f: 'ኣቐዲምኪ ብጽሑፍ ንኣስራሒኺ ፍቓድ ሕተቲ።', x: 'ኣቐዲምኩም ብጽሑፍ ንኣስራሒኹም ፍቓድ ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.o2': { m: 'ጥራይ ኪድ፡ ምስ ተመለስካ ንሓላፊኻ ንገሮ።', f: 'ጥራይ ኪዲ፡ ምስ ተመለስኪ ንሓላፊኺ ንገርዮ።' },
    'c.leave.o3': { m: 'ሓደ ብጻይ ስራሕ ሓደ መዓልቲ ኣቐዲሙ ንሓላፊ ክነግሮ ሕተቶ።', f: 'ሓደ ብጻይ ስራሕ ሓደ መዓልቲ ኣቐዲሙ ንሓላፊ ክነግሮ ሕተትዮ።' },
    'c.leave.w': { m: 'ኣስራሒኻ ብልሙድ «እወ» ክብል ኣለዎ። ብኣዝዩ ኣገዳሲ ምኽንያት ጥራይ «ኣይፋል» ክብል ይኽእል፡ ሽዑ ድማ ብጽሑፍ ኣብ ውሽጢ 2 ሰሙን። ኣቐዲምካ ምሕታት «እወ» ንምርካብ ዝበለጸ ዕድል ይህብ።', f: 'ኣስራሒኺ ብልሙድ «እወ» ክብል ኣለዎ። ብኣዝዩ ኣገዳሲ ምኽንያት ጥራይ «ኣይፋል» ክብል ይኽእል፡ ሽዑ ድማ ብጽሑፍ ኣብ ውሽጢ 2 ሰሙን። ኣቐዲምኪ ምሕታት «እወ» ንምርካብ ዝበለጸ ዕድል ይህብ።', x: 'ኣስራሒኹም ብልሙድ «እወ» ክብል ኣለዎ። ብኣዝዩ ኣገዳሲ ምኽንያት ጥራይ «ኣይፋል» ክብል ይኽእል፡ ሽዑ ድማ ብጽሑፍ ኣብ ውሽጢ 2 ሰሙን። ኣቐዲምኩም ምሕታት «እወ» ንምርካብ ዝበለጸ ዕድል ይህብ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness': { m: 'ክትሓምም ከለኻ መሰላትካ', f: 'ክትሓምሚ ከለኺ መሰላትኪ', x: 'ክትሓምሙ ከለኹም መሰላትኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.b': { m: 'ክትሓምም ከለኻ፡ ኣስራሒኻ እንተ ወሓደ 70% ደሞዝካ ክሳዕ 2 ዓመት ክኸፍል ኣለዎ። cao መብዛሕትኡ ግዜ ዝያዳ ይህብ። ክሳዕ 2 መዓልትታት ምጽባይ (wachtdagen) ብዘይ ደሞዝ ክህልዋ ይኽእላ፡ ግን ውዕልካ ወይ cao እንተ ኢሉ ጥራይ። ሓላፊኻ እንታይ ሕማም ከም ዘለካ ክሓተካ ኣይፍቀዶን። ብዛዕባ ጥዕናኻን ስራሕካን ምስ ሓኪም ትካል (bedrijfsarts) ኢኻ ትዛረብ። ምስ ሓዊኻ ንኣስራሒኻ ደውል (betermelden)። ኣብ ቀዳማይ ዓመት እንተ ወሓደ ዝተሓተ ደሞዝ (minimumloon) ትረክብ። ግዝያዊ ውዕል ኣብ መወዳእታ ዕለቱ ይውዳእ፡ ክትሓምም ከለኻ እውን። ብኤጀንሲ ስራሕ ትሰርሕ ዲኻ? ኣብ ውዕልካ ዓንቀጽ ኤጀንሲ (uitzendbeding) እንተሎ፡ ክትሓምም ከለኻ ውዕልካ ክውዳእ ይኽእል። ሽዑ ንUWV ብዛዕባ Ziektewet ሕተት፡ ወይ ንማሕበር ሰራሕተኛታት ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ክትሓምሚ ከለኺ፡ ኣስራሒኺ እንተ ወሓደ 70% ደሞዝኪ ክሳዕ 2 ዓመት ክኸፍል ኣለዎ። cao መብዛሕትኡ ግዜ ዝያዳ ይህብ። ክሳዕ 2 መዓልትታት ምጽባይ (wachtdagen) ብዘይ ደሞዝ ክህልዋ ይኽእላ፡ ግን ውዕልኪ ወይ cao እንተ ኢሉ ጥራይ። ሓላፊኺ እንታይ ሕማም ከም ዘለኪ ክሓተኪ ኣይፍቀዶን። ብዛዕባ ጥዕናኺን ስራሕኪን ምስ ሓኪም ትካል (bedrijfsarts) ኢኺ ትዛረቢ። ምስ ሓዊኺ ንኣስራሒኺ ደውሊ (betermelden)። ኣብ ቀዳማይ ዓመት እንተ ወሓደ ዝተሓተ ደሞዝ (minimumloon) ትረኽቢ። ግዝያዊ ውዕል ኣብ መወዳእታ ዕለቱ ይውዳእ፡ ክትሓምሚ ከለኺ እውን። ብኤጀንሲ ስራሕ ትሰርሒ ዲኺ? ኣብ ውዕልኪ ዓንቀጽ ኤጀንሲ (uitzendbeding) እንተሎ፡ ክትሓምሚ ከለኺ ውዕልኪ ክውዳእ ይኽእል። ሽዑ ንUWV ብዛዕባ Ziektewet ሕተቲ፡ ወይ ንማሕበር ሰራሕተኛታት ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.illness.x': 'ሓሚምኩም ናብ ሃገርኩም ክትከዱ ትደልዩ ዶ? ቅድም ንኣስራሒኹም ወይ ንኤጀንሲ ሕተቱ። ብዘይ ፍቓድ ደሞዝኩም ክቋረጽ ይኽእል። ኣብኡ ኣድራሻኹም ሃቡ፡ ተሌፎን ድማ ኣልዕሉ።', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.illness.p': 'ሓዊየ ኣለኹ። ጽባሕ ናብ ስራሕ ክመጽእ እየ።',
    'c.illness.s': { m: 'ንሓደ ሰሙን ሓሚምካ ኣለኻ። ኣስራሒኻ ናብ ሓኪም ትካል ይሰደካ። እንታይ ትገብር?', f: 'ንሓደ ሰሙን ሓሚምኪ ኣለኺ። ኣስራሒኺ ናብ ሓኪም ትካል ይሰደኪ። እንታይ ትገብሪ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o1': { m: 'ኪድ፡ ብዛዕባ ጥዕናኻን ስራሕካን ተዛረብ።', f: 'ኪዲ፡ ብዛዕባ ጥዕናኺን ስራሕኪን ተዛረቢ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.o2': { m: 'ናይ ባዕልኻ ሓኪም ስለ ዘለካ፡ ኣይትኺድ።', f: 'ናይ ባዕልኺ ሓኪም ስለ ዘለኪ፡ ኣይትኺዲ።', x: 'ናይ ባዕልኹም ሓኪም ስለ ዘለኩም፡ ኣይትኺዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.illness.o3': { m: 'ገና ሕሙም ከለኻ ናብ ስራሕ ተመለስ።', f: 'ገና ሕምምቲ ከለኺ ናብ ስራሕ ተመለሲ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.illness.w': { m: 'ሓኪም ትካል ብጥዕና ናብ ስራሕ ክትምለስ ይሕግዘካ። እቲ ሓኪም ሕክምናዊ ሓበሬታኻ ንሓላፊኻ ኣይነግሮን፡ እንታይ ስራሕ ክትሰርሕ ከም ትኽእል ጥራይ።', f: 'ሓኪም ትካል ብጥዕና ናብ ስራሕ ክትምለሲ ይሕግዘኪ። እቲ ሓኪም ሕክምናዊ ሓበሬታኺ ንሓላፊኺ ኣይነግሮን፡ እንታይ ስራሕ ክትሰርሒ ከም ትኽእሊ ጥራይ።', x: 'ሓኪም ትካል ብጥዕና ናብ ስራሕ ክትምለሱ ይሕግዘኩም። እቲ ሓኪም ሕክምናዊ ሓበሬታኹም ንሓላፊኹም ኣይነግሮን፡ እንታይ ስራሕ ክትሰርሑ ከም ትኽእሉ ጥራይ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.warning': 'ምልክታት ምዝመዛ',
    'c.warning.b': { m: 'ነዞም ምልክታት ተጠንቀቐሎም። ኣስራሒኻ ፓስፖርትካ ወይ መንነት ወረቐትካ ሒዙ ይጸንሕ። እዚ ኣይፍቀድን፡ መንነት ወረቐትካ ባዕልኻ ትሕዞ። ኣስራሒ ቅዳሕ ጥራይ ክወስድ ይኽእል። ካብቲ ዝተሰማማዕኩምሉ ብዙሕ ዝወሓደ ደሞዝ ትረኽብ፡ ወይ ወረቐት ደሞዝ ኣይወሃበካን። ንኣስራሒ ወይ ንኤጀንሲ ዓቢ ዕዳ ክትከፍል ኣለካ። ብዘይ ምርጫ ኣዝዩ ነዊሕ ሰዓታት ክትሰርሕ ኣለካ። ሓደ ሰብ የፈራርሓካ፡ ወይ መንበሪ ገዛኻ ተጠቒሙ ጸቕጢ የብጽሓልካ። እዚ ልሙድ ኣይኮነን፡ ኣይፍቀድን ድማ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ነዞም ምልክታት ተጠንቀቕሎም። ኣስራሒኺ ፓስፖርትኪ ወይ መንነት ወረቐትኪ ሒዙ ይጸንሕ። እዚ ኣይፍቀድን፡ መንነት ወረቐትኪ ባዕልኺ ትሕዝዮ። ኣስራሒ ቅዳሕ ጥራይ ክወስድ ይኽእል። ካብቲ ዝተሰማማዕኩምሉ ብዙሕ ዝወሓደ ደሞዝ ትረኽቢ፡ ወይ ወረቐት ደሞዝ ኣይወሃበክን። ንኣስራሒ ወይ ንኤጀንሲ ዓቢ ዕዳ ክትከፍሊ ኣለኪ። ብዘይ ምርጫ ኣዝዩ ነዊሕ ሰዓታት ክትሰርሒ ኣለኪ። ሓደ ሰብ የፈራርሓኪ፡ ወይ መንበሪ ገዛኺ ተጠቒሙ ጸቕጢ የብጽሓልኪ። እዚ ልሙድ ኣይኮነን፡ ኣይፍቀድን ድማ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' },
    'c.warning.p': 'ፓስፖርተይ ክምለሰለይ እደሊ።',
    'c.warning.s': { m: 'ኣብ ቀዳመይቲ መዓልትኻ፡ ኤጀንሲ «ንድሕንነት ክኸውን፡ ፓስፖርትካ ንሕዞ።» ይብለካ። እንታይ ትገብር?', f: 'ኣብ ቀዳመይቲ መዓልትኺ፡ ኤጀንሲ «ንድሕንነት ክኸውን፡ ፓስፖርትኪ ንሕዞ።» ይብለኪ። እንታይ ትገብሪ?', x: 'ኣብ ቀዳመይቲ መዓልትኹም፡ ኤጀንሲ «ንድሕንነት ክኸውን፡ ፓስፖርትኩም ንሕዞ።» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.warning.o1': { m: 'ባዕልኻ ሓዞ። ቅዳሕ ክወስዱ ይኽእሉ።', f: 'ባዕልኺ ሓዝዮ። ቅዳሕ ክወስዱ ይኽእሉ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.warning.o2': { m: 'ኤጀንሲ ነቲ ሕግታት ስለ ዝፈልጦ፡ ሃቦም።', f: 'ኤጀንሲ ነቲ ሕግታት ስለ ዝፈልጦ፡ ሃብዮም።' },
    'c.warning.o3': { m: 'ሃቦም፡ ግን ቅድም ስእሉ ውሰድ።', f: 'ሃብዮም፡ ግን ቅድም ስእሉ ውሰዲ።' },
    'c.warning.w': { m: 'ፓስፖርትካ ናትካ እዩ። ምሓዙ ንሰራሕተኛታት ንምቁጽጻር ዝጥቀምሉ መንገዲ እዩ። ኣስራሒ ንፋይል ቅዳሕ ጥራይ የድልዮ።', f: 'ፓስፖርትኪ ናትኪ እዩ። ምሓዙ ንሰራሕተኛታት ንምቁጽጻር ዝጥቀምሉ መንገዲ እዩ። ኣስራሒ ንፋይል ቅዳሕ ጥራይ የድልዮ።', x: 'ፓስፖርትኩም ናትኩም እዩ። ምሓዙ ንሰራሕተኛታት ንምቁጽጻር ዝጥቀምሉ መንገዲ እዩ። ኣስራሒ ንፋይል ቅዳሕ ጥራይ የድልዮ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp': { m: 'ሓገዝ ካበይ ትረኽብ', f: 'ሓገዝ ካበይ ትረኽቢ', x: 'ሓገዝ ካበይ ትረኽቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.b': { m: 'ንዓኻ ወይ ንኻልእ ሰብ ምልክታት ምዝመዛ ትርኢ ዲኻ? ሓገዝ ውሰድ። ናብ Nederlandse Arbeidsinspectie፡ ብዘይ ስም እውን፡ ወይ ናብ ፖሊስ ክትሕብር ትኽእል ኢኻ። Meld Misdaad Anoniem: 0800-7000። ነጻ ሕጋዊ ምኽሪ፡ Juridisch Loket። ኣብ ሓደጋ ዲኻ? ናብ 112 ደውል። ኣብ ሆላንድ ዝሰርሕ ኩሉ ሰብ ሓገዝ ክረኽብ ይኽእል፡ ካብ ወጻኢ ዝመጹ ሰባት እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ንዓኺ ወይ ንኻልእ ሰብ ምልክታት ምዝመዛ ትርእዪ ዲኺ? ሓገዝ ውሰዲ። ናብ Nederlandse Arbeidsinspectie፡ ብዘይ ስም እውን፡ ወይ ናብ ፖሊስ ክትሕብሪ ትኽእሊ ኢኺ። Meld Misdaad Anoniem: 0800-7000። ነጻ ሕጋዊ ምኽሪ፡ Juridisch Loket። ኣብ ሓደጋ ዲኺ? ናብ 112 ደውሊ። ኣብ ሆላንድ ዝሰርሕ ኩሉ ሰብ ሓገዝ ክረኽብ ይኽእል፡ ካብ ወጻኢ ዝመጹ ሰባት እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' },
    'c.gethelp.p': 'ሓገዝ የድልየኒ። እዝመዝ ኣለኹ።',
    'c.gethelp.s': { m: 'ሓደ ዓርክኻ ኣብ መዓልቲ 14 ሰዓት ይሰርሕ፡ ዳርጋ ደሞዝ ኣይረኽብን። ንሓላፊኡ ይፈርሆ። እንታይ ክትገብር ትኽእል?', f: 'ሓደ ዓርክኺ ኣብ መዓልቲ 14 ሰዓት ይሰርሕ፡ ዳርጋ ደሞዝ ኣይረኽብን። ንሓላፊኡ ይፈርሆ። እንታይ ክትገብሪ ትኽእሊ?', x: 'ሓደ ዓርክኹም ኣብ መዓልቲ 14 ሰዓት ይሰርሕ፡ ዳርጋ ደሞዝ ኣይረኽብን። ንሓላፊኡ ይፈርሆ። እንታይ ክትገብሩ ትኽእሉ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.o1': { m: 'ምስ Arbeidsinspectie ወይ Juridisch Loket ክራኸብ ሓግዞ።', f: 'ምስ Arbeidsinspectie ወይ Juridisch Loket ክራኸብ ሓግዝዮ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.gethelp.o2': { m: 'ንሓደሽቲ ሰራሕተኛታት እዚ ልሙድ ምዃኑ ንገሮ።', f: 'ንሓደሽቲ ሰራሕተኛታት እዚ ልሙድ ምዃኑ ንገርዮ።' },
    'c.gethelp.o3': { m: 'ውዕሉ ክሳዕ ዝውዳእ ክጽበ፡ ድሕሪኡ ክኸይድ ንገሮ።', f: 'ውዕሉ ክሳዕ ዝውዳእ ክጽበ፡ ድሕሪኡ ክኸይድ ንገርዮ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.gethelp.w': 'ኣብ ሆላንድ ንዝሰርሕ ኩሉ ሰብ ሓገዝ ኣሎ። ሓበሬታ ብዘይ ስም እውን ክወሃብ ይኽእል።',
    'c.callin': { m: 'ንተቖጻጻሪኻ ምድዋል', f: 'ንተቖጻጻሪኺ ምድዋል', x: 'ንተቖጻጻሪኹም ምድዋል' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.b': { m: 'ንተቖጻጻሪኻ ክትድውል ከለኻ፡ ስምካ፡ ምኽንያቱን መዓስ ክትምለስ ከም እትጽበን ንገር። ሕሙም ዲኻ? ሕሙም ምዃንካ ጥራይ ኢኻ ትነግር፡ እንታይ ሕማም ከም ዘለካ ኣይኮነን። ደውል፡ ትካልካ መልእኽቲ ጽሑፍ ይኣክል እንተ ዘይበለ፡ መልእኽቲ ጥራይ ኣይትስደድ። መልሲ የለን? ናይ ድምጺ መልእኽቲ ግደፍ እሞ ደጊምካ ፈትን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ንተቖጻጻሪኺ ክትድውሊ ከለኺ፡ ስምኪ፡ ምኽንያቱን መዓስ ክትምለሲ ከም እትጽበዪን ንገሪ። ሕምምቲ ዲኺ? ሕምምቲ ምዃንኪ ጥራይ ኢኺ ትነግሪ፡ እንታይ ሕማም ከም ዘለኪ ኣይኮነን። ደውሊ፡ ትካልኪ መልእኽቲ ጽሑፍ ይኣክል እንተ ዘይበለ፡ መልእኽቲ ጥራይ ኣይትስደዲ። መልሲ የለን? ናይ ድምጺ መልእኽቲ ግደፊ እሞ ደጊምኪ ፈትኒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.callin.p': 'ሰላም፡ Ali እየ። ሎሚ ክመጽእ ኣይክእልን እየ።',
    'c.callin.s': { m: 'ውላድካ ሓሚሙ ናብ ስራሕ ክትመጽእ ኣይትኽእልን ኢኻ። ትካልካ ክትድውል ይደሊ። እንታይ ትገብር?', f: 'ውላድኪ ሓሚሙ ናብ ስራሕ ክትመጽኢ ኣይትኽእሊን ኢኺ። ትካልኪ ክትድውሊ ይደሊ። እንታይ ትገብሪ?' },
    'c.callin.o1': { m: 'ቅድሚ ፈረቓኻ ንተቖጻጻሪኻ ደውል።', f: 'ቅድሚ ፈረቓኺ ንተቖጻጻሪኺ ደውሊ።', x: 'ቅድሚ ፈረቓኹም ንተቖጻጻሪኹም ደውሉ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o2': { m: 'ኣብ መጀመርታ ፈረቓኻ ሓጺር መልእኽቲ ስደድ።', f: 'ኣብ መጀመርታ ፈረቓኺ ሓጺር መልእኽቲ ስደዲ።', x: 'ኣብ መጀመርታ ፈረቓኹም ሓጺር መልእኽቲ ስደዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.callin.o3': { m: 'ጎረቤትካ ኣብ ክንዳኻ ክድውል ሕተቶ።', f: 'ጎረቤትኪ ኣብ ክንዳኺ ክድውል ሕተትዮ።' },
    'c.callin.w': { m: 'ጻውዒት ንጹርን ቅልጡፍን እዩ፡ ተቖጻጻሪኻ ድማ ሕቶታት ክሓትት ይኽእል። መዓስ ክትምለስ ከም እትጽበ ምንጋር ስራሕ ንምውዳብ ይሕግዞም። ስምካን ምኽንያቱን እውን ንገር።', f: 'ጻውዒት ንጹርን ቅልጡፍን እዩ፡ ተቖጻጻሪኺ ድማ ሕቶታት ክሓትት ይኽእል። መዓስ ክትምለሲ ከም እትጽበዪ ምንጋር ስራሕ ንምውዳብ ይሕግዞም። ስምኪን ምኽንያቱን እውን ንገሪ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.texting': 'ናብ ስራሕ ዝስደድ መልእኽቲ፡ ሓጺርን ትሑትን',
    'c.texting.b': { m: 'ናብ ስራሕ ዝስደድ መልእኽቲ ሓጺርን ትሑትን ግበሮ። መን ምዃንካን እንታይ ይኸውን ከም ዘሎን ንገር፡ ብሰላምታ ድማ ወድኦ። ንኣብነት፡ «Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali»። መደብ ስራሕካ (rooster) ኣብቲ ኣፕ ብዙሕ ግዜ ርአ። ንሕቶታት ፈረቓ ብግዜ መልስ። ፈረቓ ንምልውዋጥ፡ ተቖጻጻሪኻ ወይ እቲ መደብ ዘውጽእ ሰብ ቅድም ክሰማማዕ ኣለዎ፣ ስለዚ ሕተት፡ «Mag ik mijn dienst ruilen?»። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ናብ ስራሕ ዝስደድ መልእኽቲ ሓጺርን ትሑትን ግበርዮ። መን ምዃንኪን እንታይ ይኸውን ከም ዘሎን ንገሪ፡ ብሰላምታ ድማ ወድእዮ። ንኣብነት፡ «Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali»። መደብ ስራሕኪ (rooster) ኣብቲ ኣፕ ብዙሕ ግዜ ርኣዪ። ንሕቶታት ፈረቓ ብግዜ መልሲ። ፈረቓ ንምልውዋጥ፡ ተቖጻጻሪኺ ወይ እቲ መደብ ዘውጽእ ሰብ ቅድም ክሰማማዕ ኣለዎ፣ ስለዚ ሕተቲ፡ «Mag ik mijn dienst ruilen?»። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.texting.p': 'ሰላም Mark፡ 10 ደቒቕ ክድንጒ እየ። ይቕሬታ! ሰላምታ፡ Ali',
    'c.texting.s': { m: '10 ደቒቕ ክትድንጒ ኢኻ። ናብ ተቖጻጻሪኻ ኣየናይ መልእኽቲ ዝበለጸ እዩ?', f: '10 ደቒቕ ክትድንጊ ኢኺ። ናብ ተቖጻጻሪኺ ኣየናይ መልእኽቲ ዝበለጸ እዩ?' },
    'c.texting.o1': '«Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali»',
    'c.texting.o2': { m: '«Sorry, ik ben er zo!» (ብዘይ ስምካ፡ ብዘይ ሰዓት)።', f: '«Sorry, ik ben er zo!» (ብዘይ ስምኪ፡ ብዘይ ሰዓት)።', x: '«Sorry, ik ben er zo!» (ብዘይ ስምኩም፡ ብዘይ ሰዓት)።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.texting.o3': 'ብዛዕባ ትራፊክ ናይ ሰለስተ ደቒቕ ናይ ድምጺ መልእኽቲ።',
    'c.texting.w': { m: 'ጽቡቕ መልእኽቲ መን ምዃንካን እንታይ ይኸውን ከም ዘሎን ብውሑድ ቃላት ይነግር። ሽዑ ተቖጻጻሪኻ ብኡብኡ ይፈልጦ።', f: 'ጽቡቕ መልእኽቲ መን ምዃንኪን እንታይ ይኸውን ከም ዘሎን ብውሑድ ቃላት ይነግር። ሽዑ ተቖጻጻሪኺ ብኡብኡ ይፈልጦ።' },
    'c.certs': { m: 'ሰርቲፊኬታት ይሕግዙኻ', f: 'ሰርቲፊኬታት ይሕግዙኺ', x: 'ሰርቲፊኬታት ይሕግዙኹም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.b': { m: 'ኣብ ስራሕ ህንጻ፡ ኢንዱስትሪን ግዝያዊ ስራሕን መብዛሕትኡ ግዜ ሰርቲፊኬት VCA (ድሕንነት) የድልየካ። ፎርክሊፍት ንምዝዋር ብተለምዶ ሰርቲፊኬት ፎርክሊፍት (heftruckcertificaat) የድልየካ። ኣስራሒኻ ንኮርስን ንፈተናን ዝኸፍል እንተ ኾይኑ ሕተቶ።', f: 'ኣብ ስራሕ ህንጻ፡ ኢንዱስትሪን ግዝያዊ ስራሕን መብዛሕትኡ ግዜ ሰርቲፊኬት VCA (ድሕንነት) የድልየኪ። ፎርክሊፍት ንምዝዋር ብተለምዶ ሰርቲፊኬት ፎርክሊፍት (heftruckcertificaat) የድልየኪ። ኣስራሒኺ ንኮርስን ንፈተናን ዝኸፍል እንተ ኾይኑ ሕተትዮ።' },
    'c.certs.p': 'ኣብዚ ኮርስ VCA ክወስድ ይኽእል ዶ?',
    'c.certs.s': { m: 'ሓደ ስራሕ ሰርቲፊኬት VCA ይሓትት። ገና የብልካን። እንታይ ትገብር?', f: 'ሓደ ስራሕ ሰርቲፊኬት VCA ይሓትት። ገና የብልክን። እንታይ ትገብሪ?' },
    'c.certs.o1': { m: 'ኣስራሒ ወይ ኤጀንሲ ክትረኽቦ ክሕግዙኻ ሕተቶም።', f: 'ኣስራሒ ወይ ኤጀንሲ ክትረኽብዮ ክሕግዙኺ ሕተትዮም።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.certs.o2': { m: 'ነቲ ስራሕ ፈጺምካ ስለ ዘይትረኽቦ፡ ኣይትሕተት።', f: 'ነቲ ስራሕ ፈጺምኪ ስለ ዘይትረኽብዮ፡ ኣይትሕተቲ።' },
    'c.certs.o3': { m: 'ከም ዘለካ በል፡ ዝፍትሾ ሰብ ከም ዘየለ ድማ ተስፋ ግበር።', f: 'ከም ዘለኪ በሊ፡ ዝፍትሾ ሰብ ከም ዘየለ ድማ ተስፋ ግበሪ።', x: 'ከም ዘለኩም በሉ፡ ዝፍትሾ ሰብ ከም ዘየለ ድማ ተስፋ ግበሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.certs.w': { m: 'ብዙሓት ኣስራሕትን ኤጀንሲታትን ብVCA ይሕግዙ። ምሕታት ክትመሃር ከም ትደሊ የርኢ።', f: 'ብዙሓት ኣስራሕትን ኤጀንሲታትን ብVCA ይሕግዙ። ምሕታት ክትመሃሪ ከም ትደልዪ የርኢ።' },
    'c.diploma': { m: 'ዲፕሎማኻ ይቑጸር', f: 'ዲፕሎማኺ ይቑጸር', x: 'ዲፕሎማኹም ይቑጸር' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.b': { m: 'ካብ ካልእ ሃገር ዲፕሎማ ኣለካ ድዩ? ኣብ IDW (Internationale Diplomawaardering) ከም ዝግምገም ክትገብሮ ትኽእል ኢኻ። ሽዑ ኣስራሕቲ ኣብዚ ክንደይ ዋጋ ከም ዘለዎ ክርእዩ ይኽእሉ። ንስራሕካ ስልጠና ግዴታ ድዩ? ሽዑ ኣስራሒኻ ክኸፍሎ ኣለዎ፡ ከም ግዜ ስራሕ ድማ ይቑጸር። ብዛዕባ ኮርሳት ንተቖጻጻሪኻ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ካብ ካልእ ሃገር ዲፕሎማ ኣለኪ ድዩ? ኣብ IDW (Internationale Diplomawaardering) ከም ዝግምገም ክትገብርዮ ትኽእሊ ኢኺ። ሽዑ ኣስራሕቲ ኣብዚ ክንደይ ዋጋ ከም ዘለዎ ክርእዩ ይኽእሉ። ንስራሕኪ ስልጠና ግዴታ ድዩ? ሽዑ ኣስራሒኺ ክኸፍሎ ኣለዎ፡ ከም ግዜ ስራሕ ድማ ይቑጸር። ብዛዕባ ኮርሳት ንተቖጻጻሪኺ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.diploma.p': 'ንዓይ ዝኸውን ኮርሳት ኣለዉ ድዮም?',
    'c.diploma.s': { m: 'ኣስራሒኻ ቀዳም ብዘይ ደሞዝ ግዴታ ዝኾነ ስልጠና ድሕንነት ክትወስድ ኣለካ ይብለካ። ሓቂ እንታይ እዩ?', f: 'ኣስራሒኺ ቀዳም ብዘይ ደሞዝ ግዴታ ዝኾነ ስልጠና ድሕንነት ክትወስዲ ኣለኪ ይብለኪ። ሓቂ እንታይ እዩ?', x: 'ኣስራሒኹም ቀዳም ብዘይ ደሞዝ ግዴታ ዝኾነ ስልጠና ድሕንነት ክትወስዱ ኣለኩም ይብለኩም። ሓቂ እንታይ እዩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.o1': 'ኣስራሒ ይኸፍሎ፡ ግዜ ስራሕ ድማ እዩ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.diploma.o2': { m: 'ስልጠና ኩሉ ግዜ ኣብ ናይ ባዕልኻ ነጻ ግዜ እዩ።', f: 'ስልጠና ኩሉ ግዜ ኣብ ናይ ባዕልኺ ነጻ ግዜ እዩ።', x: 'ስልጠና ኩሉ ግዜ ኣብ ናይ ባዕልኹም ነጻ ግዜ እዩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.o3': { m: 'ንስልጠና ባዕልኻ ክትከፍል ኣለካ።', f: 'ንስልጠና ባዕልኺ ክትከፍሊ ኣለኪ።', x: 'ንስልጠና ባዕልኹም ክትከፍሉ ኣለኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.diploma.w': { m: 'ስልጠና ንስራሕካ ግዴታ እንተ ኾይኑ፡ ኣስራሒ ይኸፍል፡ ከም ግዜ ስራሕ ድማ ይቑጸር። ንጹር እንተ ዘይኮይኑ፡ ምኽሪ ሕተት።', f: 'ስልጠና ንስራሕኪ ግዴታ እንተ ኾይኑ፡ ኣስራሒ ይኸፍል፡ ከም ግዜ ስራሕ ድማ ይቑጸር። ንጹር እንተ ዘይኮይኑ፡ ምኽሪ ሕተቲ።', x: 'ስልጠና ንስራሕኩም ግዴታ እንተ ኾይኑ፡ ኣስራሒ ይኸፍል፡ ከም ግዜ ስራሕ ድማ ይቑጸር። ንጹር እንተ ዘይኮይኑ፡ ምኽሪ ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor': 'ሓኪም ድዩ 112?',
    'c.doctor.b': { m: 'ኣብ ጥቓ ገዛኻ ምስ ሓኪም ስድራ (huisarts) ተመዝገብ። ኣብ ምሸት፡ ለይቲ ወይ ቀዳም-ሰንበት ህጹጽ ክንክን የድልየካ ድዩ? ናብ huisartsenpost ደውል። ኣብ ህጹጽ ኩነታት ጥራይ ናብ 112 ደውል፡ ንህይወት ሓደጋ፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ዘሎ ገበን። መድሃኒት ኣብ ፋርማሲ (apotheek) ትረኽብ።', f: 'ኣብ ጥቓ ገዛኺ ምስ ሓኪም ስድራ (huisarts) ተመዝገቢ። ኣብ ምሸት፡ ለይቲ ወይ ቀዳም-ሰንበት ህጹጽ ክንክን የድልየኪ ድዩ? ናብ huisartsenpost ደውሊ። ኣብ ህጹጽ ኩነታት ጥራይ ናብ 112 ደውሊ፡ ንህይወት ሓደጋ፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ዘሎ ገበን። መድሃኒት ኣብ ፋርማሲ (apotheek) ትረኽቢ።', x: 'ኣብ ጥቓ ገዛኹም ምስ ሓኪም ስድራ (huisarts) ተመዝገቡ። ኣብ ምሸት፡ ለይቲ ወይ ቀዳም-ሰንበት ህጹጽ ክንክን የድልየኩም ድዩ? ናብ huisartsenpost ደውሉ። ኣብ ህጹጽ ኩነታት ጥራይ ናብ 112 ደውሉ፡ ንህይወት ሓደጋ፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ዘሎ ገበን። መድሃኒት ኣብ ፋርማሲ (apotheek) ትረኽቡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.p': 'ምስ ሓኪም ስድራ ክምዝገብ እደሊ።',
    'c.doctor.s': { m: 'ቀዳም ለይቲ እዩ። ውላድካ ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብር?', f: 'ቀዳም ለይቲ እዩ። ውላድኪ ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብሪ?', x: 'ቀዳም ለይቲ እዩ። ውላድኩም ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o1': { m: 'ናብ huisartsenpost ደውል።', f: 'ናብ huisartsenpost ደውሊ።', x: 'ናብ huisartsenpost ደውሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o2': { m: 'ናብ 112 ደውል።', f: 'ናብ 112 ደውሊ።', x: 'ናብ 112 ደውሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.doctor.o3': { m: 'ክሳዕ ሰኑይ ተጸበ፡ ገለ ድማ ኣይትግበር።', f: 'ክሳዕ ሰኑይ ተጸበዪ፡ ገለ ድማ ኣይትግበሪ።' },
    'c.doctor.w': 'huisartsenpost ካብ ሰዓታት ስራሕ ወጻኢ ንህጹጽ ክንክን ይሕግዝ። 112 ንህጹጽ ኩነታት እዩ፡ ንህይወት ሓደጋ፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ዘሎ ገበን።',
    'c.insurance': 'መድሕን ጥዕና',
    'c.insurance.b': { m: 'ኣብ ሆላንድ ክትነብር ወይ ክትሰርሕ ከለኻ፡ መሰረታዊ መድሕን ጥዕና ብተለምዶ ግዴታ እዩ። ወርሒ ወርሒ ክፍሊት መድሕን ትኸፍል። ዓመት ዓመት ናይ ገዛእ ርእስኻ ክፍሊት (eigen risico) ኣሎ፡ ቀዳሞት ወጻኢታት ባዕልኻ ትኸፍሎም። እቲ መጠን ይቕየር፡ ምስ ትካል መድሕንካ ኣረጋግጽ። ምብጻሕ ሓኪም ስድራ (huisarts) ኣብ eigen risico ኣይቑጸርን። ውሑድ ኣታዊ እንተ ኣሎካ፡ ሓገዝ ክፍሊት ጥዕና (zorgtoeslag) ክትረኽብ ትኽእል ኢኻ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ኣብ ሆላንድ ክትነብሪ ወይ ክትሰርሒ ከለኺ፡ መሰረታዊ መድሕን ጥዕና ብተለምዶ ግዴታ እዩ። ወርሒ ወርሒ ክፍሊት መድሕን ትኸፍሊ። ዓመት ዓመት ናይ ገዛእ ርእስኺ ክፍሊት (eigen risico) ኣሎ፡ ቀዳሞት ወጻኢታት ባዕልኺ ትኸፍልዮም። እቲ መጠን ይቕየር፡ ምስ ትካል መድሕንኪ ኣረጋግጺ። ምብጻሕ ሓኪም ስድራ (huisarts) ኣብ eigen risico ኣይቑጸርን። ውሑድ ኣታዊ እንተ ኣሎኪ፡ ሓገዝ ክፍሊት ጥዕና (zorgtoeslag) ክትረኽቢ ትኽእሊ ኢኺ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.insurance.p': 'መድሕን ጥዕና የድልየኒ። ክትሕግዙኒ ትኽእሉ ዶ?',
    'c.insurance.s': { m: 'ቅድሚ ክልተ ሰሙን ኣብዚ ክትሰርሕ ጀሚርካ፡ ገና መድሕን ጥዕና የብልካን። እንታይ ትገብር?', f: 'ቅድሚ ክልተ ሰሙን ኣብዚ ክትሰርሒ ጀሚርኪ፡ ገና መድሕን ጥዕና የብልክን። እንታይ ትገብሪ?' },
    'c.insurance.o1': { m: 'ቀልጢፍካ መድሕን ጥዕና ኣዳሉ።', f: 'ቀልጢፍኪ መድሕን ጥዕና ኣዳልዊ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o2': { m: 'ተጸበ፡ መድሕን ናይ ዓድኻ ይኣክል እዩ።', f: 'ተጸበዪ፡ መድሕን ናይ ዓድኺ ይኣክል እዩ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.insurance.o3': { m: 'ካርድ መድሕን ናይ ዓርክኻ ተጠቐም።', f: 'ካርድ መድሕን ናይ ዓርክኺ ተጠቐሚ።', x: 'ካርድ መድሕን ናይ ዓርክኹም ተጠቐሙ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.insurance.w': { m: 'ብዘይ መድሕን፡ ሓኪም ወይ ሆስፒታል ብዙሕ ገንዘብ ከኽፍለካ ይኽእል፡ መቕጻዕቲ እውን ክወሃበካ ይኽእል። ቀልጢፍካ ምድላዉ ይከላኸለካ። ኣስራሒኻ ወይ ኤጀንሲኻ ክሕግዘካ ይኽእል።', f: 'ብዘይ መድሕን፡ ሓኪም ወይ ሆስፒታል ብዙሕ ገንዘብ ከኽፍለኪ ይኽእል፡ መቕጻዕቲ እውን ክወሃበኪ ይኽእል። ቀልጢፍኪ ምድላዉ ይከላኸለኪ። ኣስራሒኺ ወይ ኤጀንሲኺ ክሕግዘኪ ይኽእል።', x: 'ብዘይ መድሕን፡ ሓኪም ወይ ሆስፒታል ብዙሕ ገንዘብ ከኽፍለኩም ይኽእል፡ መቕጻዕቲ እውን ክወሃበኩም ይኽእል። ቀልጢፍኩም ምድላዉ ይከላኸለኩም። ኣስራሒኹም ወይ ኤጀንሲኹም ክሕግዘኩም ይኽእል።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.letters': { m: 'ደብዳቤታት ሸለል ኣይትበል', f: 'ደብዳቤታት ሸለል ኣይትበሊ', x: 'ደብዳቤታት ሸለል ኣይትበሉ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.letters.b': { m: 'ካብ Belastingdienst፡ gemeente ወይ UWV ዝመጹ ደብዳቤታት ሸለል ኣይትበሎም። ከተንብቦም ክሕግዘካ ዝእመን ሰብ ሕተት። ጸብጻብ ግብሪ (aangifte) ናይ ዝሓለፈ ዓመት ብተለምዶ ቅድሚ 1 ግንቦት ክግበር ኣለዎ። ተወሳኺ ግዜ ክትሓትት ትኽእል ኢኻ። ሓገዛት ገንዘብ (toeslagen)፡ ከም zorgtoeslagን huurtoeslagን፡ ኣብ ኣታዊኻ ይምርኮሱ። ካብ ዝግብኣካ ንላዕሊ እንተ ረኺብካ ክትመልሶ ኣለካ፡ ስለዚ ሓበሬታ ኣታዊኻ ወትሩ ሓድሽ ግበሮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ካብ Belastingdienst፡ gemeente ወይ UWV ዝመጹ ደብዳቤታት ሸለል ኣይትበልዮም። ከተንብብዮም ክሕግዘኪ ዝእመን ሰብ ሕተቲ። ጸብጻብ ግብሪ (aangifte) ናይ ዝሓለፈ ዓመት ብተለምዶ ቅድሚ 1 ግንቦት ክግበር ኣለዎ። ተወሳኺ ግዜ ክትሓትቲ ትኽእሊ ኢኺ። ሓገዛት ገንዘብ (toeslagen)፡ ከም zorgtoeslagን huurtoeslagን፡ ኣብ ኣታዊኺ ይምርኮሱ። ካብ ዝግብኣኪ ንላዕሊ እንተ ረኺብኪ ክትመልስዮ ኣለኪ፡ ስለዚ ሓበሬታ ኣታዊኺ ወትሩ ሓድሽ ግበርዮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.letters.p': 'ደብዳቤ በጺሑኒ። ክትሕግዘኒ ትኽእል ዶ?',
    'c.letters.s': { m: 'ካብ Belastingdienst ደብዳቤ ይመጸካ። ኣይተረደኣካን። እንታይ ትገብር?', f: 'ካብ Belastingdienst ደብዳቤ ይመጸኪ። ኣይተረደኣክን። እንታይ ትገብሪ?' },
    'c.letters.o1': { m: 'ከተንብቦ ክሕግዘካ ዝእመን ሰብ ሕተት።', f: 'ከተንብብዮ ክሕግዘኪ ዝእመን ሰብ ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.letters.o2': { m: 'ኣብ መሳቢ ኣእትዎ እሞ ተጸበ።', f: 'ኣብ መሳቢ ኣእትውዮ እሞ ተጸበዪ።' },
    'c.letters.o3': { m: 'ምናልባት ረኽላም ስለ ዝኾነ፡ ደርብዮ።', f: 'ምናልባት ረኽላም ስለ ዝኾነ፡ ደርብይዮ።' },
    'c.letters.w': { m: 'ወግዓዊ ደብዳቤታት መብዛሕትኡ ግዜ ናይ መወዳእታ ዕለት ኣለዎም። ብግዜ እንተ መለስካ፡ ጸገማት ብተለምዶ ብቐሊሉ ይፍትሑ።', f: 'ወግዓዊ ደብዳቤታት መብዛሕትኡ ግዜ ናይ መወዳእታ ዕለት ኣለዎም። ብግዜ እንተ መለስኪ፡ ጸገማት ብተለምዶ ብቐሊሉ ይፍትሑ።', x: 'ወግዓዊ ደብዳቤታት መብዛሕትኡ ግዜ ናይ መወዳእታ ዕለት ኣለዎም። ብግዜ እንተ መለስኩም፡ ጸገማት ብተለምዶ ብቐሊሉ ይፍትሑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams': { m: 'ካብ ምትላል ተጠንቀቕ', f: 'ካብ ምትላል ተጠንቀቒ', x: 'ካብ ምትላል ተጠንቀቑ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.b': { m: 'ባንክኻ ፈጺሙ ብተሌፎን፡ ብSMS ወይ ብኢመይል ኮዳትካ ወይ PINካ ኣይሓትትን። ኣብ ዘይተጸበኻዮ መልእኽቲ ዘሎ ሊንክ ኣይትጠውቕ። ሓደ ሰብ ቀልጢፍካ ክትከፍል ይጸቕጠካ ድዩ? ደው በል እሞ ቅድም ኣረጋግጽ። ብወግዓዊ ቁጽሪ ናብ ባንክኻ ደውል፡ ንኣብነት እቲ ኣብ ካርድ ባንክኻ ወይ ኣብ መርበብ ሓበሬታኡ ዘሎ ቁጽሪ።', f: 'ባንክኺ ፈጺሙ ብተሌፎን፡ ብSMS ወይ ብኢመይል ኮዳትኪ ወይ PINኪ ኣይሓትትን። ኣብ ዘይተጸበኽዮ መልእኽቲ ዘሎ ሊንክ ኣይትጠውቒ። ሓደ ሰብ ቀልጢፍኪ ክትከፍሊ ይጸቕጠኪ ድዩ? ደው በሊ እሞ ቅድም ኣረጋግጺ። ብወግዓዊ ቁጽሪ ናብ ባንክኺ ደውሊ፡ ንኣብነት እቲ ኣብ ካርድ ባንክኺ ወይ ኣብ መርበብ ሓበሬታኡ ዘሎ ቁጽሪ።' },
    'c.scams.p': 'ባዕለይ ናብ ባንኪ ተመሊሰ ክድውል እየ።',
    'c.scams.s': { m: 'SMS ይመጸካ፡ «ሕሳብ ባንክኻ ክዕጾ እዩ። ሕጂ ኣብዚ ሊንክ ጠውቕ።» እንታይ ትገብር?', f: 'SMS ይመጸኪ፡ «ሕሳብ ባንክኺ ክዕጾ እዩ። ሕጂ ኣብዚ ሊንክ ጠውቒ።» እንታይ ትገብሪ?', x: 'SMS ይመጸኩም፡ «ሕሳብ ባንክኹም ክዕጾ እዩ። ሕጂ ኣብዚ ሊንክ ጠውቑ።» እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o1': { m: 'ኣይትጠውቕ። ብወግዓዊ ቁጽሪ ናብ ባንክኻ ደውል።', f: 'ኣይትጠውቒ። ብወግዓዊ ቁጽሪ ናብ ባንክኺ ደውሊ።', x: 'ኣይትጠውቑ። ብወግዓዊ ቁጽሪ ናብ ባንክኹም ደውሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o2': { m: 'ሕሳብካ ከይዕጾ፡ ቀልጢፍካ ጠውቕ።', f: 'ሕሳብኪ ከይዕጾ፡ ቀልጢፍኪ ጠውቒ።', x: 'ሕሳብኩም ከይዕጾ፡ ቀልጢፍኩም ጠውቑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.o3': { m: 'ነቲ SMS መልስ እሞ ሓቂ እንተ ኾይኑ ሕተት።', f: 'ነቲ SMS መልሲ እሞ ሓቂ እንተ ኾይኑ ሕተቲ።', x: 'ነቲ SMS መልሱ እሞ ሓቂ እንተ ኾይኑ ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.scams.w': { m: 'ተታለልቲ ጸቕጥን ናይ ሓሶት ሊንክን ይጥቀሙ። ባንክኻ ፈጺሙ ብሊንክ ወይ ብመልእኽቲ ኮዳትካ ኣይሓትትን።', f: 'ተታለልቲ ጸቕጥን ናይ ሓሶት ሊንክን ይጥቀሙ። ባንክኺ ፈጺሙ ብሊንክ ወይ ብመልእኽቲ ኮዳትኪ ኣይሓትትን።', x: 'ተታለልቲ ጸቕጥን ናይ ሓሶት ሊንክን ይጥቀሙ። ባንክኹም ፈጺሙ ብሊንክ ወይ ብመልእኽቲ ኮዳትኩም ኣይሓትትን።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.bike': 'ብብሽክለታ ናብ ስራሕ',
    'c.bike.b': { m: 'ምስ ጸልመተ መብራህትኻ ወልዕ። ኣብ መንገዲ ብሽክለታ ዘውር፡ መብራህቲ ትራፊክን ምልክታትን ድማ ስዓብ። ብሽክለታኻ ኩሉ ግዜ ቆልፋ። ብሽክለታ እናዘወርካ ተሌፎን ብኢድካ ምሓዝ ክልኩል እዩ።', f: 'ምስ ጸልመተ መብራህትኺ ወልዒ። ኣብ መንገዲ ብሽክለታ ዘውሪ፡ መብራህቲ ትራፊክን ምልክታትን ድማ ስዓቢ። ብሽክለታኺ ኩሉ ግዜ ቆልፍያ። ብሽክለታ እናዘወርኪ ተሌፎን ብኢድኪ ምሓዝ ክልኩል እዩ።' },
    'c.bike.p': 'ብሽክለታይ ኣበይ ከቐምጣ እኽእል?',
    'c.bike.s': { m: 'ጸልማት እዩ፡ ናብ ፈረቓ ለይቲ ብብሽክለታ ትኸይድ ኣለኻ። ተሌፎንካ ይድውል። እንታይ ትገብር?', f: 'ጸልማት እዩ፡ ናብ ፈረቓ ለይቲ ብብሽክለታ ትኸዲ ኣለኺ። ተሌፎንኪ ይድውል። እንታይ ትገብሪ?' },
    'c.bike.o1': { m: 'ቅድሚ ምምላስካ ኣብ ውሑስ ቦታ ደው በል።', f: 'ቅድሚ ምምላስኪ ኣብ ውሑስ ቦታ ደው በሊ።', x: 'ቅድሚ ምምላስኩም ኣብ ውሑስ ቦታ ደው በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.o2': { m: 'እናዘወርካ ተሌፎን ብኢድካ ሒዝካ መልስ።', f: 'እናዘወርኪ ተሌፎን ብኢድኪ ሒዝኪ መልሲ።', x: 'እናዘወርኩም ተሌፎን ብኢድኩም ሒዝኩም መልሱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.bike.o3': { m: 'ቀጽል፡ ንተሌፎንካ ድማ ቀልጢፍካ ርኣዮ።', f: 'ቀጽሊ፡ ንተሌፎንኪ ድማ ቀልጢፍኪ ርኣይዮ።' },
    'c.bike.w': { m: 'ብሽክለታ እናዘወርካ ተሌፎን ብኢድካ ምሓዝ ክልኩልን ሓደገኛን እዩ። ቅድም ደው ምባል ንሓጺር ግዜ ጥራይ እዩ ዝወስድ።', f: 'ብሽክለታ እናዘወርኪ ተሌፎን ብኢድኪ ምሓዝ ክልኩልን ሓደገኛን እዩ። ቅድም ደው ምባል ንሓጺር ግዜ ጥራይ እዩ ዝወስድ።', x: 'ብሽክለታ እናዘወርኩም ተሌፎን ብኢድኩም ምሓዝ ክልኩልን ሓደገኛን እዩ። ቅድም ደው ምባል ንሓጺር ግዜ ጥራይ እዩ ዝወስድ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.transit': 'ኣውቶቡስ፡ ባቡርን ወጻኢ መጓዓዝያን',
    'c.transit.b': { m: 'ኣብ መብዛሕትኦም ኣውቶቡሳትን ባቡራትን ብካርድ ባንክኻ (OVpay) ክትከፍል ትኽእል ኢኻ። ምስ ኣተኻን ምስ ወረድካን ብሓደ ካርድ ኣንክእ (check in ከምኡ እውን check out)፡ እንተ ዘይኮይኑ ብዙሕ ትኸፍል። ክፍሊት መጓዓዝያ (reiskostenvergoeding) ሕጋዊ መሰል ኣይኮነን፡ ኣብ ኣስራሒኻ ወይ ኣብ cao ይምርኮስ። ብዛዕባኡ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ኣብ መብዛሕትኦም ኣውቶቡሳትን ባቡራትን ብካርድ ባንክኺ (OVpay) ክትከፍሊ ትኽእሊ ኢኺ። ምስ ኣተኺን ምስ ወረድኪን ብሓደ ካርድ ኣንክኢ (check in ከምኡ እውን check out)፡ እንተ ዘይኮይኑ ብዙሕ ትኸፍሊ። ክፍሊት መጓዓዝያ (reiskostenvergoeding) ሕጋዊ መሰል ኣይኮነን፡ ኣብ ኣስራሒኺ ወይ ኣብ cao ይምርኮስ። ብዛዕባኡ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.transit.p': 'ንወጻኢ መጓዓዝያይ ገንዘብ እረኽብ ድየ?',
    'c.transit.s': { m: 'መዓልታዊ ብኣውቶቡስ ናብ ስራሕ ትኸይድ። ሓደ ብጻይ ስራሕ ገንዘብ መጓዓዝያ ይረኽብ፡ ንስኻ ግን ኣይትረኽብን። እንታይ ትገብር?', f: 'መዓልታዊ ብኣውቶቡስ ናብ ስራሕ ትኸዲ። ሓደ ብጻይ ስራሕ ገንዘብ መጓዓዝያ ይረኽብ፡ ንስኺ ግን ኣይትረኽቢን። እንታይ ትገብሪ?' },
    'c.transit.o1': { m: 'ኣብ ትካልካ ወይ ኣብ cao እንታይ ሕግታት ከም ዘሎ ንተቖጻጻሪኻ ሕተቶ።', f: 'ኣብ ትካልኪ ወይ ኣብ cao እንታይ ሕግታት ከም ዘሎ ንተቖጻጻሪኺ ሕተትዮ።' },
    'c.transit.o2': { m: 'ምናልባት ንዓኻ ስለ ዘይኮነ፡ ገለ ኣይትበል።', f: 'ምናልባት ንዓኺ ስለ ዘይኮነ፡ ገለ ኣይትበሊ።', x: 'ምናልባት ንዓኹም ስለ ዘይኮነ፡ ገለ ኣይትበሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.transit.o3': { m: 'ንተቖጻጻሪኻ «ብሕጊ ንዓይ እውን ክወሃበኒ ኣለዎ» በሎ።', f: 'ንተቖጻጻሪኺ «ብሕጊ ንዓይ እውን ክወሃበኒ ኣለዎ» በልዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.transit.w': { m: 'ክፍሊት መጓዓዝያ ኣብ ኣስራሒ ወይ ኣብ cao ይምርኮስ። ብዛዕባኡ ምሕታት ልሙድ እዩ፡ መሰላትካ ክትፈልጥ ድማ ይሕግዘካ።', f: 'ክፍሊት መጓዓዝያ ኣብ ኣስራሒ ወይ ኣብ cao ይምርኮስ። ብዛዕባኡ ምሕታት ልሙድ እዩ፡ መሰላትኪ ክትፈልጢ ድማ ይሕግዘኪ።', x: 'ክፍሊት መጓዓዝያ ኣብ ኣስራሒ ወይ ኣብ cao ይምርኮስ። ብዛዕባኡ ምሕታት ልሙድ እዩ፡ መሰላትኩም ክትፈልጡ ድማ ይሕግዘኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww': 'ሓገዝ ስራሕ ኣልቦነት (WW)',
    'c.ww.b': { m: 'ስራሕካ ኣጥፊእካ ዲኻ? ብዝከኣል መጠን ቀልጢፍካ፡ ድሕሪ ናይ መጀመርታ መዓልቲ ብዘይ ስራሕ ኣብ ውሽጢ ሓደ ሰሙን፡ ኣብ UWV WW ሕተት። ብተለምዶ ካብተን ናይ መወዳእታ 36 ሰሙናት እንተ ወሓደ 26 ሰሙን ሰሪሕካ ክትከውን ኣለካ። ባዕልኻ ስራሕካ እንተ ገዲፍካ፡ ብተለምዶ WW ኣይትረኽብን። ኣብ werk.nl ከም ስራሕ ዝደሊ ሰብ ተመዝገብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ስራሕኪ ኣጥፊእኪ ዲኺ? ብዝከኣል መጠን ቀልጢፍኪ፡ ድሕሪ ናይ መጀመርታ መዓልቲ ብዘይ ስራሕ ኣብ ውሽጢ ሓደ ሰሙን፡ ኣብ UWV WW ሕተቲ። ብተለምዶ ካብተን ናይ መወዳእታ 36 ሰሙናት እንተ ወሓደ 26 ሰሙን ሰሪሕኪ ክትኮኒ ኣለኪ። ባዕልኺ ስራሕኪ እንተ ገዲፍኪ፡ ብተለምዶ WW ኣይትረኽቢን። ኣብ werk.nl ከም ስራሕ ዝደሊ ሰብ ተመዝገቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.ww.x': 'ኣብ ካልእ ሃገር ኤውሮጳዊ ሕብረት ስራሕ ትደልዩ ዶ? ሓድሓደ ግዜ WW ምሳኹም ክትወስዱ ትኽእሉ። ቅድሚ ምኻድኩም ካብ UWV ቅጥዒ U2 ሕተቱ። ብዘይ U2 WW ይቋረጽ።', // nieuw, nalezen (uit een ander land, 10 nov 2026) // nagelezen AI 22 nov
    'c.ww.p': 'ሓገዝ ስራሕ ኣልቦነት ክሓትት እደሊ። እንታይ ክገብር ኣለኒ?',
    'c.ww.s': { m: 'ብስራሕካ ተቖጢዕካ ሎሚ ክትገድፎ ትደሊ። ብልሒ ዝኾነ እንታይ እዩ?', f: 'ብስራሕኪ ተቖጢዕኪ ሎሚ ክትገድፍዮ ትደልዪ። ብልሒ ዝኾነ እንታይ እዩ?' },
    'c.ww.o1': { m: 'ቅድሚ ምግዳፍካ፡ ቅድም ምኽሪ ውሰድ።', f: 'ቅድሚ ምግዳፍኪ፡ ቅድም ምኽሪ ውሰዲ።', x: 'ቅድሚ ምግዳፍኩም፡ ቅድም ምኽሪ ውሰዱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.o2': { m: 'ሎሚ ግደፎ፡ ብዘየገድስ WW ክትረኽብ ኢኻ።', f: 'ሎሚ ግደፍዮ፡ ብዘየገድስ WW ክትረኽቢ ኢኺ።' },
    'c.ww.o3': { m: 'ገለ ከይበልካ ናብ ስራሕ ምምጻእ ኣቋርጽ።', f: 'ገለ ከይበልኪ ናብ ስራሕ ምምጻእ ኣቋርጺ።', x: 'ገለ ከይበልኩም ናብ ስራሕ ምምጻእ ኣቋርጹ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ww.w': { m: 'ስራሕ ምግዳፍ ሓገዝካ ከጥፍኣልካ ይኽእል። ቅድም ምስ ተቖጻጻሪኻ፡ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምዝራብ ዝሓሸ መንገዲ ክትረኽብ ይሕግዘካ።', f: 'ስራሕ ምግዳፍ ሓገዝኪ ከጥፍኣልኪ ይኽእል። ቅድም ምስ ተቖጻጻሪኺ፡ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምዝራብ ዝሓሸ መንገዲ ክትረኽቢ ይሕግዘኪ።', x: 'ስራሕ ምግዳፍ ሓገዝኩም ከጥፍኣልኩም ይኽእል። ቅድም ምስ ተቖጻጻሪኹም፡ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምዝራብ ዝሓሸ መንገዲ ክትረኽቡ ይሕግዘኩም።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob': 'ሓድሽ ስራሕ ምድላይ',
    'c.newjob.b': { m: 'ቅድሚ ምውጻእካ መወከሲ (referentie) ሕተት። ወረቓቕቲ ደሞዝካን ውዕልካን ዓቅብ። CVኻ ሓድሽ ግበሮ። ኣብ ኤጀንሲታት ስራሕ (uitzendbureaus) ከምኡ እውን ኣብ werk.nl ስራሕ ድለ። ስራሕ ንምርካብ ፈጺምካ ገንዘብ ኣይትኽፈል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ቅድሚ ምውጻእኪ መወከሲ (referentie) ሕተቲ። ወረቓቕቲ ደሞዝኪን ውዕልኪን ዓቅቢ። CVኺ ሓድሽ ግበርዮ። ኣብ ኤጀንሲታት ስራሕ (uitzendbureaus) ከምኡ እውን ኣብ werk.nl ስራሕ ድለዪ። ስራሕ ንምርካብ ፈጺምኪ ገንዘብ ኣይትኽፈሊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' },
    'c.newjob.p': 'ስምኩም ከም መወከሲ ክህብ ይኽእል ዶ?',
    'c.newjob.s': { m: 'ሓደ ሰብ ስራሕ የቕርበልካ፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍል ኣለካ። እንታይ ትገብር?', f: 'ሓደ ሰብ ስራሕ የቕርበልኪ፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍሊ ኣለኪ። እንታይ ትገብሪ?', x: 'ሓደ ሰብ ስራሕ የቕርበልኩም፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍሉ ኣለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.o1': { m: 'ኣይትኽፈል። ሓቀኛ ኤጀንሲ ድለ።', f: 'ኣይትኽፈሊ። ሓቀኛ ኤጀንሲ ድለዪ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.newjob.o2': { m: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈል።', f: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈሊ።', x: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.o3': { m: 'ሕጂ ፍርቂ ክፈል፡ እቲ ዝተረፈ ድማ ደሓር።', f: 'ሕጂ ፍርቂ ክፈሊ፡ እቲ ዝተረፈ ድማ ደሓር።', x: 'ሕጂ ፍርቂ ክፈሉ፡ እቲ ዝተረፈ ድማ ደሓር።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.newjob.w': { m: 'ንስራሕ ገንዘብ ምሕታት ምልክት መጠንቀቕታ እዩ። ኤጀንሲ ስራሕ ስራሕ ስለ ዝረኸበልካ ገንዘብ ክሓተካ ኣይፍቀዶን። ኣብ werk.nl እውን ስራሕ ክትደሊ ትኽእል ኢኻ።', f: 'ንስራሕ ገንዘብ ምሕታት ምልክት መጠንቀቕታ እዩ። ኤጀንሲ ስራሕ ስራሕ ስለ ዝረኸበልኪ ገንዘብ ክሓተኪ ኣይፍቀዶን። ኣብ werk.nl እውን ስራሕ ክትደልዪ ትኽእሊ ኢኺ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools': 'ኣኼባ toolbox',
    'c.tools.b': { m: 'ኣብ ብዙሓት ቦታታት ህንጻ ብስሩዕ ግዜ ሓጺር ኣኼባ ድሕንነት ኣሎ፡ ኣኼባ toolbox። ብዛዕባ ሓደጋታትን ሓደሽቲ ሕግታትን ትሰምዕ። ኪድ፡ ስማዕ፡ እንተ ዘይተረዲኡካ ድማ ሕቶታት ሕተት። ቅድሚ ምጥቃምካ መሳርሒታትካ ኣረጋግጽ። መሳርሒ ተሰቢሩ ድዩ? ንተቖጻጻሪኻ ንገሮ።', f: 'ኣብ ብዙሓት ቦታታት ህንጻ ብስሩዕ ግዜ ሓጺር ኣኼባ ድሕንነት ኣሎ፡ ኣኼባ toolbox። ብዛዕባ ሓደጋታትን ሓደሽቲ ሕግታትን ትሰምዒ። ኪዲ፡ ስምዒ፡ እንተ ዘይተረዲኡኪ ድማ ሕቶታት ሕተቲ። ቅድሚ ምጥቃምኪ መሳርሒታትኪ ኣረጋግጺ። መሳርሒ ተሰቢሩ ድዩ? ንተቖጻጻሪኺ ንገርዮ።' },
    'c.tools.p': 'እዚ መሰርሒ ተበላሽዩ። ካልእ ኣሎ ድዩ?',
    'c.tools.s': { m: 'ኣኼባ toolbox ኣሎ፡ ግን ሆላንድኛኻ ገና ጽቡቕ ኣይኮነን። እንታይ ትገብር?', f: 'ኣኼባ toolbox ኣሎ፡ ግን ሆላንድኛኺ ገና ጽቡቕ ኣይኮነን። እንታይ ትገብሪ?', x: 'ኣኼባ toolbox ኣሎ፡ ግን ሆላንድኛኹም ገና ጽቡቕ ኣይኮነን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.o1': { m: 'ኪድ፡ ድሕሪኡ ዝሓለፈካ ንሓደ ብጻይ ስራሕ ሕተቶ።', f: 'ኪዲ፡ ድሕሪኡ ዝሓለፈኪ ንሓደ ብጻይ ስራሕ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.tools.o2': { m: 'ብዘየገድስ ስለ ዘይርድኣካ፡ ሕለፎ።', f: 'ብዘየገድስ ስለ ዘይርድኣኪ፡ ሕለፍዮ።' },
    'c.tools.o3': { m: 'ከይከድካ ኣብ ዝርዝር ተሳተፍቲ ፈርም።', f: 'ከይከድኪ ኣብ ዝርዝር ተሳተፍቲ ፈርሚ።', x: 'ከይከድኩም ኣብ ዝርዝር ተሳተፍቲ ፈርሙ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.tools.w': { m: 'ሓበሬታ ድሕንነት ንኹሉ ሰብ እዩ። ኣብቲ ኣኼባ ተሌፎን እንተ ተፈቒዱ፡ ኣፕ ትርጉም ነቲ ኣኼባ ክትከታተሎ ይሕግዘካ። ድሕሪኡ ንብጻይ ስራሕ ምሕታት ልሙድ እዩ፡ ብቕኑዕ ከም ዝተረዳእካ ድማ የረጋግጽ።', f: 'ሓበሬታ ድሕንነት ንኹሉ ሰብ እዩ። ኣብቲ ኣኼባ ተሌፎን እንተ ተፈቒዱ፡ ኣፕ ትርጉም ነቲ ኣኼባ ክትከታተልዮ ይሕግዘኪ። ድሕሪኡ ንብጻይ ስራሕ ምሕታት ልሙድ እዩ፡ ብቕኑዕ ከም ዝተረዳእኪ ድማ የረጋግጽ።' },
    'c.site': { m: 'ደው በል እሞ ኣረጋግጽ፡ LMRA', f: 'ደው በሊ እሞ ኣረጋግጺ፡ LMRA', x: 'ደው በሉ እሞ ኣረጋግጹ፡ LMRA' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site.b': { m: 'ቅድሚ ሓደ ስራሕ ምጅማርካ፡ ንሓጺር ግዜ ደው በል እሞ ኣረጋግጽ፡ ኣብዚ እንታይ ክጋገ ይኽእል? እዚ እዩ LMRA (ናይ መወዳእታ ደቒቕ ትንተና ስግኣት)። ኩሉ ግዜ ሄልመትካ ግበር፡ ኣብ ብራኸ ክትሰርሕ ከለኻ ድማ መከላኸሊ ውድቀት። ፈጺምካ ኣብ ትሕቲ ተሰቒሉ ዘሎ ጽዕነት ደው ኣይትበል። እቲ ስራሕ ብሓቂ ሓደገኛ ድዩ? ሽዑ ከተቋርጾ ትኽእል ኢኻ፡ ንተቖጻጻሪኻ ድማ ብኡብኡ ክትነግሮ ኣለካ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ቅድሚ ሓደ ስራሕ ምጅማርኪ፡ ንሓጺር ግዜ ደው በሊ እሞ ኣረጋግጺ፡ ኣብዚ እንታይ ክጋገ ይኽእል? እዚ እዩ LMRA (ናይ መወዳእታ ደቒቕ ትንተና ስግኣት)። ኩሉ ግዜ ሄልመትኪ ግበሪ፡ ኣብ ብራኸ ክትሰርሒ ከለኺ ድማ መከላኸሊ ውድቀት። ፈጺምኪ ኣብ ትሕቲ ተሰቒሉ ዘሎ ጽዕነት ደው ኣይትበሊ። እቲ ስራሕ ብሓቂ ሓደገኛ ድዩ? ሽዑ ከተቋርጽዮ ትኽእሊ ኢኺ፡ ንተቖጻጻሪኺ ድማ ብኡብኡ ክትነግርዮ ኣለኪ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.site.p': 'ገና ኣይጀምርን እየ። እዚ ውሑስ ኣይኮነን።',
    'c.site.s': { m: 'ኣብ መደያይቦ ክትሰርሕ ኣለካ፡ ግን መከላኸሊ ሓጹር ጎዲሉ። ሓደ ብጻይ ስራሕ «ጥራይ ተጠንቀቕ።» ይብለካ። እንታይ ትገብር?', f: 'ኣብ መደያይቦ ክትሰርሒ ኣለኪ፡ ግን መከላኸሊ ሓጹር ጎዲሉ። ሓደ ብጻይ ስራሕ «ጥራይ ተጠንቀቒ።» ይብለኪ። እንታይ ትገብሪ?', x: 'ኣብ መደያይቦ ክትሰርሑ ኣለኩም፡ ግን መከላኸሊ ሓጹር ጎዲሉ። ሓደ ብጻይ ስራሕ «ጥራይ ተጠንቀቑ።» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o1': { m: 'ኣይትጀምር፡ ንተቖጻጻሪኻ ድማ ሕበሮ።', f: 'ኣይትጀምሪ፡ ንተቖጻጻሪኺ ድማ ሕበርዮ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o2': { m: 'ጀምር፡ ግን ኣዝዩ ተጠንቀቕ።', f: 'ጀምሪ፡ ግን ኣዝዩ ተጠንቀቒ።', x: 'ጀምሩ፡ ግን ኣዝዩ ተጠንቀቑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.site.o3': { m: 'ነቲ ሓጹር ባዕልኻ ብገመድ ኣዐርዮ።', f: 'ነቲ ሓጹር ባዕልኺ ብገመድ ኣዐርይዮ።' },
    'c.site.w': { m: 'ካብ ብራኸ ምውዳቕ ኣዝዩ ከቢድ ማህሰይቲ ከስዕብ ይኽእል። ሓደገኛ ስራሕ ከተቋርጽ ትኽእል ኢኻ፡ ምሕባሩ ድማ ንብምሉኡ ጉጅለ ይከላኸል።', f: 'ካብ ብራኸ ምውዳቕ ኣዝዩ ከቢድ ማህሰይቲ ከስዕብ ይኽእል። ሓደገኛ ስራሕ ከተቋርጺ ትኽእሊ ኢኺ፡ ምሕባሩ ድማ ንብምሉኡ ጉጅለ ይከላኸል።', x: 'ካብ ብራኸ ምውዳቕ ኣዝዩ ከቢድ ማህሰይቲ ከስዕብ ይኽእል። ሓደገኛ ስራሕ ከተቋርጹ ትኽእሉ ኢኹም፡ ምሕባሩ ድማ ንብምሉኡ ጉጅለ ይከላኸል።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.line': { m: 'ኣእዳውካ ካብ ዝሰርሓ ማሽናት ኣርሕቕ', f: 'ኣእዳውኪ ካብ ዝሰርሓ ማሽናት ኣርሕቒ', x: 'ኣእዳውኩም ካብ ዝሰርሓ ማሽናት ኣርሕቑ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.line.b': { m: 'ፈጺምካ ናብ ዝሰርሕ ዘሎ ማሽን ኢድካ ኣይተእቱ፡ ንሓንቲ ካልኢት እኳ። ብልሽት (storing) ምስ ዘጋጥም፡ ናይ ህጹጽ መጠጠዊ (noodstop) ጠውቕ እሞ ንተቖጻጻሪኻ ጸውዕ። ምዕቃብን ጽገናን ዝግበር እቲ ማሽን ምስ ተዓጽወን ተቖልፈን (lock-out) ጥራይ እዩ፡ ብዝሰልጠኑ ሰባት ጥራይ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ፈጺምኪ ናብ ዝሰርሕ ዘሎ ማሽን ኢድኪ ኣይተእትዊ፡ ንሓንቲ ካልኢት እኳ። ብልሽት (storing) ምስ ዘጋጥም፡ ናይ ህጹጽ መጠጠዊ (noodstop) ጠውቒ እሞ ንተቖጻጻሪኺ ጸውዒ። ምዕቃብን ጽገናን ዝግበር እቲ ማሽን ምስ ተዓጽወን ተቖልፈን (lock-out) ጥራይ እዩ፡ ብዝሰልጠኑ ሰባት ጥራይ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.line.p': 'ብልሽት ኣሎ። ናይ ህጹጽ መጠጠዊ ጠዊቐ።',
    'c.line.s': { m: 'ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብር?', f: 'ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብሪ?', x: 'ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o1': { m: 'ናይ ህጹጽ መጠጠዊ ጠውቕ እሞ ንተቖጻጻሪኻ ጸውዕ።', f: 'ናይ ህጹጽ መጠጠዊ ጠውቒ እሞ ንተቖጻጻሪኺ ጸውዒ።', x: 'ናይ ህጹጽ መጠጠዊ ጠውቑ እሞ ንተቖጻጻሪኹም ጸውዑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o2': { m: 'ከይተሰብረ ከሎ፡ ብኢድካ ቀልጢፍካ ኣውጽኦ።', f: 'ከይተሰብረ ከሎ፡ ብኢድኪ ቀልጢፍኪ ኣውጽእዮ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.line.o3': { m: 'ግደፎ፡ እቲ ማሽን ባዕሉ ክዓርዮ ድማ ተስፋ ግበር።', f: 'ግደፍዮ፡ እቲ ማሽን ባዕሉ ክዓርዮ ድማ ተስፋ ግበሪ።' },
    'c.line.w': 'ዝሰርሓ ማሽናት ኣብ ሓንቲ ካልኢት ከቢድ ሓደጋ ከስዕባ ይኽእላ። ማሽን ደው ምባል ኩሉ ግዜ ይፍቀድ፡ ኩሉ ግዜ ድማ ይሓይሽ።',
    'c.quality': { m: 'ጽሬት፡ ዝረኣኻዮ ንገር', f: 'ጽሬት፡ ዝረኣኽዮ ንገሪ' },
    'c.quality.b': { m: 'ኣብ ፍርያት ጸገም ትርኢ ዲኻ፡ ከም ጉድኣት ወይ ጌጋ ኤቲኬት? ሕበሮ እሞ ፈሊኻ ኣቐምጦ። እቲ መስመር ምእንቲ ክቕጽል ጥራይ ክሓልፍ ኣይትሕደጎ። ጸገም ኣቐዲምካ ምርካብ ብዙሕ ስራሕን ገንዘብን የድሕን። ተቖጻጻሪኻ ስለ ዝተዛረብካ ክሕጎስ እዩ።', f: 'ኣብ ፍርያት ጸገም ትርእዪ ዲኺ፡ ከም ጉድኣት ወይ ጌጋ ኤቲኬት? ሕበርዮ እሞ ፈሊኺ ኣቐምጥዮ። እቲ መስመር ምእንቲ ክቕጽል ጥራይ ክሓልፍ ኣይትሕደግዮ። ጸገም ኣቐዲምኪ ምርካብ ብዙሕ ስራሕን ገንዘብን የድሕን። ተቖጻጻሪኺ ስለ ዝተዛረብኪ ክሕጎስ እዩ።' },
    'c.quality.p': 'ኣብዞም ፍርያት ገለ ጸገም ዘሎ ይመስለኒ።',
    'c.quality.s': { m: 'ብዙሓት ፍርያት ኣብ ኤቲኬቶም ጌጋ ዕለት ከም ዘለዎም ትርኢ። እቲ መስመር ብጣዕሚ ስራሕ በዚሕዎ ኣሎ። እንታይ ትገብር?', f: 'ብዙሓት ፍርያት ኣብ ኤቲኬቶም ጌጋ ዕለት ከም ዘለዎም ትርእዪ። እቲ መስመር ብጣዕሚ ስራሕ በዚሕዎ ኣሎ። እንታይ ትገብሪ?' },
    'c.quality.o1': { m: 'ብኡብኡ ንተቖጻጻሪኻ ወይ ንሓላፊ ጽሬት ንገሮ።', f: 'ብኡብኡ ንተቖጻጻሪኺ ወይ ንሓላፊ ጽሬት ንገርዮ።' },
    'c.quality.o2': { m: 'ስራሕካ ስለ ዘይኮነ፡ ይሕለፉ።', f: 'ስራሕኪ ስለ ዘይኮነ፡ ይሕለፉ።', x: 'ስራሕኩም ስለ ዘይኮነ፡ ይሕለፉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.quality.o3': { m: 'ብስቕታ ደርብዮም።', f: 'ብስቕታ ደርብይዮም።' },
    'c.quality.w': { m: 'ጌጋ ኤቲኬት ኩሎም ፍርያት ካብ ድኳናት ክምለሱ ከድልዮም ይኽእል። ኣቐዲምካ ምዝራብ ጽቡቕ ኣባል ጉጅለ ዝገብሮ እዩ።', f: 'ጌጋ ኤቲኬት ኩሎም ፍርያት ካብ ድኳናት ክምለሱ ከድልዮም ይኽእል። ኣቐዲምኪ ምዝራብ ጽቡቕ ኣባል ጉጅለ ዝገብሮ እዩ።', x: 'ጌጋ ኤቲኬት ኩሎም ፍርያት ካብ ድኳናት ክምለሱ ከድልዮም ይኽእል። ኣቐዲምኩም ምዝራብ ጽቡቕ ኣባል ጉጅለ ዝገብሮ እዩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.client': 'ክብሪ ንተገልጋሊ',
    'c.client.b': { m: 'ናብ ክፍሊ ተገልጋሊ ቅድሚ ምእታውካ ማዕጾ ኳሕኳሕ። መን ምዃንካ ንገር፡ እንታይ ክትገብር ከም ዘለኻ ግለጽ፡ ፍቓድ ድማ ሕተት። ንተገልገልቲ «u» በሎም፡ «je» ክትብሎም እንተ ዘይሓተቱኻ። ተገልገልቲ ባዕሎም ክገብርዎ ዝኽእሉ ነገር ይግበርዎ።', f: 'ናብ ክፍሊ ተገልጋሊ ቅድሚ ምእታውኪ ማዕጾ ኳሕኳሒ። መን ምዃንኪ ንገሪ፡ እንታይ ክትገብሪ ከም ዘለኺ ግለጺ፡ ፍቓድ ድማ ሕተቲ። ንተገልገልቲ «u» በልዮም፡ «je» ክትብልዮም እንተ ዘይሓተቱኺ። ተገልገልቲ ባዕሎም ክገብርዎ ዝኽእሉ ነገር ይግበርዎ።' },
    'c.client.p': 'ክኣቱ ይኽእል ዶ? ክትሕጸቡ ክሕግዘኩም መጺአ ኣለኹ።',
    'c.client.s': { m: 'ንሓንቲ ተገልጋሊት ክትሕጸብ ክትሕግዛ ኣለካ። ማዕጾ ክፍላ ዕጹው እዩ። እንታይ ትገብር?', f: 'ንሓንቲ ተገልጋሊት ክትሕጸብ ክትሕግዝያ ኣለኪ። ማዕጾ ክፍላ ዕጹው እዩ። እንታይ ትገብሪ?' },
    'c.client.o1': { m: 'ኳሕኳሕ፡ ተጸበ፡ መን ምዃንካን ምኽንያትካን ንገር።', f: 'ኳሕኳሒ፡ ተጸበዪ፡ መን ምዃንኪን ምኽንያትኪን ንገሪ።' }, // nalezen: korter goed antwoord // nagelezen AI 22 nov
    'c.client.o2': { m: 'ስራሕ ስለ ዘብዝሓካ፡ ቀልጢፍካ እቶ።', f: 'ስራሕ ስለ ዘብዝሓኪ፡ ቀልጢፍኪ እትዊ።' },
    'c.client.o3': { m: 'ከይትረብሻ፡ ምሕጻብ ሕለፎ።', f: 'ከይትረብሽያ፡ ምሕጻብ ሕለፍዮ።' },
    'c.client.w': 'እቲ ክፍሊ ገዛ ናይቲ ተገልጋሊ እዩ። ምኹሕኳሕን ምግላጽን ክብሪ የርኢ፡ ንክንክን ድማ ዝያዳ ህዱእ ይገብሮ።',
    'c.privacy': 'ውልቃውነት፡ ጽሬትን መድሃኒትን',
    'c.privacy.b': { m: 'ብዛዕባ ተገልገልቲ ዝረኣኻዮን ዝሰማዕካዮን ኣብ ስራሕ ይተርፍ። ካብ ስራሕ ወጻኢ ብዛዕባ ተገልገልቲ ኣይትዛረብ፡ ስእሎም ድማ ፈጺምካ ኣይትዘርግሕ። ቅድሚን ድሕሪን ክንክን ኣእዳውካ ኣጽርይ። ኣብ ተገልጋሊ ለውጢ ትዕዘብ ዲኻ፡ ከም ቃንዛ ወይ ምውዳቕ? ብኡብኡ ንነርስ ንገር። ዝሰልጠንካን ፍቓድ ዘለካን እንተ ዘይኮንካ፡ ፈጺምካ መድሃኒት ኣይትሃብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ብዛዕባ ተገልገልቲ ዝረኣኽዮን ዝሰማዕክዮን ኣብ ስራሕ ይተርፍ። ካብ ስራሕ ወጻኢ ብዛዕባ ተገልገልቲ ኣይትዛረቢ፡ ስእሎም ድማ ፈጺምኪ ኣይትዘርግሒ። ቅድሚን ድሕሪን ክንክን ኣእዳውኪ ኣጽርዪ። ኣብ ተገልጋሊ ለውጢ ትዕዘቢ ዲኺ፡ ከም ቃንዛ ወይ ምውዳቕ? ብኡብኡ ንነርስ ንገሪ። ዝሰልጠንኪን ፍቓድ ዘለኪን እንተ ዘይኮንኪ፡ ፈጺምኪ መድሃኒት ኣይትሃቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.privacy.p': 'እቲ ሰብኣይ ካብ ትማሊ ዝያዳ ቃንዛ ኣለዎ።',
    'c.privacy.s': { m: 'ሓንቲ ተገልጋሊት ከኒናታ ትሓተካ። መድሃኒት ንምሃብ ኣይሰልጠንካን። እንታይ ትገብር?', f: 'ሓንቲ ተገልጋሊት ከኒናታ ትሓተኪ። መድሃኒት ንምሃብ ኣይሰልጠንክን። እንታይ ትገብሪ?' },
    'c.privacy.o1': { m: 'ነርስ ከተምጽእ ምዃንካ ብትሕትና ንገራ።', f: 'ነርስ ከተምጽኢ ምዃንኪ ብትሕትና ንገርያ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.privacy.o2': { m: 'ንሳ እንታይ ከም ዘድልያ ስለ እትፈልጥ፡ ነቲ ከኒና ሃባ።', f: 'ንሳ እንታይ ከም ዘድልያ ስለ እትፈልጥ፡ ነቲ ከኒና ሃብያ።' },
    'c.privacy.o3': { m: 'ኣይፋል በላ እሞ ገዲፍካ ኪድ።', f: 'ኣይፋል በልያ እሞ ገዲፍኪ ኪዲ።' },
    'c.privacy.w': { m: 'ጌጋ መድሃኒት ሓደገኛ ክኸውን ይኽእል። ነቲ ቅኑዕ ሰብ ቀልጢፍካ ምምጻእ ንተገልጋሊ ይሕግዝ፡ ንኹሉ ሰብ ድማ ውሑስ ይገብር።', f: 'ጌጋ መድሃኒት ሓደገኛ ክኸውን ይኽእል። ነቲ ቅኑዕ ሰብ ቀልጢፍኪ ምምጻእ ንተገልጋሊ ይሕግዝ፡ ንኹሉ ሰብ ድማ ውሑስ ይገብር።', x: 'ጌጋ መድሃኒት ሓደገኛ ክኸውን ይኽእል። ነቲ ቅኑዕ ሰብ ቀልጢፍኩም ምምጻእ ንተገልጋሊ ይሕግዝ፡ ንኹሉ ሰብ ድማ ውሑስ ይገብር።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen': 'ድሕንነት መግቢ',
    'c.kitchen.b': { m: 'ኣእዳውካ ብዙሕ ግዜ ተሓጸብ፡ ድሕሪ ሽቓቕን ጥረ ስጋ ድሕሪ ምትንካፍን እውን። ዝሑል መግቢ ዝሑል፡ ውዑይ መግቢ ድማ ውዑይ ሓልዎ። ኣብ እትዕቅቦ መግቢ ዕለት ዘለዎ ኤቲኬት ግበር። እዞም ሕግታት HACCP ይበሃሉ። ኣለርጂ ከቢድ እዩ፡ ኣብ ሓደ መግቢ እንታይ ከም ዘሎ ርግጸኛ ኣይኮንካን? ኩሉ ግዜ ንሸፍ ሕተቶ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ኣእዳውኪ ብዙሕ ግዜ ተሓጸቢ፡ ድሕሪ ሽቓቕን ጥረ ስጋ ድሕሪ ምትንካፍን እውን። ዝሑል መግቢ ዝሑል፡ ውዑይ መግቢ ድማ ውዑይ ሓልውዮ። ኣብ እትዕቅብዮ መግቢ ዕለት ዘለዎ ኤቲኬት ግበሪ። እዞም ሕግታት HACCP ይበሃሉ። ኣለርጂ ከቢድ እዩ፡ ኣብ ሓደ መግቢ እንታይ ከም ዘሎ ርግጸኛ ኣይኮንክን? ኩሉ ግዜ ንሸፍ ሕተትዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.kitchen.p': 'ሸፍ፡ ኣብዚ ስጎ ግሉተን ኣሎ ድዩ?',
    'c.kitchen.s': { m: 'ሓደ ጋሻ ኣብ ሓደ መግቢ ለውዝ እንተሎ ይሓትት። ርግጸኛ ኣይኮንካን። እንታይ ትገብር?', f: 'ሓደ ጋሻ ኣብ ሓደ መግቢ ለውዝ እንተሎ ይሓትት። ርግጸኛ ኣይኮንክን። እንታይ ትገብሪ?' },
    'c.kitchen.o1': { m: 'ከም እተረጋግጽ ንገር፡ ንሸፍ ድማ ሕተቶ።', f: 'ከም እተረጋግጺ ንገሪ፡ ንሸፍ ድማ ሕተትዮ።' },
    'c.kitchen.o2': { m: 'እቲ ጋሻ ምእንቲ ክሕጎስ፡ «የለን» በል።', f: 'እቲ ጋሻ ምእንቲ ክሕጎስ፡ «የለን» በሊ።', x: 'እቲ ጋሻ ምእንቲ ክሕጎስ፡ «የለን» በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kitchen.o3': { m: 'ነቲ ጋሻ፡ ነቲ ለውዝ ባዕሉ ከውጽኦ ንገሮ።', f: 'ነቲ ጋሻ፡ ነቲ ለውዝ ባዕሉ ከውጽኦ ንገርዮ።' },
    'c.kitchen.w': 'ኣለርጂ ንዘለዎ ጋሻ፡ ንእሽቶ ጌጋ ኣዝያ ሓደገኛ ክትከውን ትኽእል። ምስ ሸፍ ምርግጋጽ ኩሉ ግዜ ቅኑዕ እዩ።',
    'c.service': { m: 'ምስ ጋሻ ትሑት ኩን', f: 'ምስ ጋሻ ትሕትቲ ኩኒ' },
    'c.service.b': { m: 'ንጋሻ «u» በሎም፡ «je» ክትብሎም እንተ ዘይሓተቱኻ። ሕያዋይን ህዱእን ኩን፡ ስራሕ ምስ በዝሐ እውን። ብዛዕባ ሓደ ሕቶ ርግጸኛ ኣይኮንካን? ከም እተረጋግጽ ንገር። ቲፕ (fooi)፡ ሕግታት ካብ ቦታ ናብ ቦታ ይፈላለ። ኣብ እትሰርሓሉ ቦታ ቲፕ ብኸመይ ከም ዝመቓቐል ሕተት።', f: 'ንጋሻ «u» በልዮም፡ «je» ክትብልዮም እንተ ዘይሓተቱኺ። ሕያወይትን ህድእትን ኩኒ፡ ስራሕ ምስ በዝሐ እውን። ብዛዕባ ሓደ ሕቶ ርግጸኛ ኣይኮንክን? ከም እተረጋግጺ ንገሪ። ቲፕ (fooi)፡ ሕግታት ካብ ቦታ ናብ ቦታ ይፈላለ። ኣብ እትሰርሕሉ ቦታ ቲፕ ብኸመይ ከም ዝመቓቐል ሕተቲ።' },
    'c.service.p': 'ሓንሳብ፡ ቀልጢፈ ክመጸኩም እየ።',
    'c.service.s': { m: 'ብጣዕሚ ስራሕ በዚሑ። ሓደ ጋሻ ይጽውዓካ፡ ንስኻ ግን ናብ ካልእ ጣውላ ሸሓኒ ተሰኪምካ ኣለኻ። እንታይ ትገብር?', f: 'ብጣዕሚ ስራሕ በዚሑ። ሓደ ጋሻ ይጽውዓኪ፡ ንስኺ ግን ናብ ካልእ ጣውላ ሸሓኒ ተሰኪምኪ ኣለኺ። እንታይ ትገብሪ?', x: 'ብጣዕሚ ስራሕ በዚሑ። ሓደ ጋሻ ይጽውዓኩም፡ ንስኹም ግን ናብ ካልእ ጣውላ ሸሓኒ ተሰኪምኩም ኣለኹም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.service.o1': { m: 'ነቲ ጋሻ ጠምቶ እሞ «Een moment, ik kom zo bij u.» በል።', f: 'ነቲ ጋሻ ጠምትዮ እሞ «Een moment, ik kom zo bij u.» በሊ።' },
    'c.service.o2': { m: 'ግዜ ክሳዕ ዝህልወካ ነቲ ጋሻ ሸለል በሎ።', f: 'ግዜ ክሳዕ ዝህልወኪ ነቲ ጋሻ ሸለል በልዮ።' },
    'c.service.o3': { m: 'ነቲ ሸሓኒ ኣብ ባዶ ጣውላ ኣንብሮ እሞ ቅድም ናብቲ ጋሻ ኪድ።', f: 'ነቲ ሸሓኒ ኣብ ባዶ ጣውላ ኣንብርዮ እሞ ቅድም ናብቲ ጋሻ ኪዲ።' },
    'c.service.w': { m: 'ሓጺር ምልክት ንጋሻ ከም ዝረኣኻዮ የርኢ። ሽዑ ዕማምካ ብህድኣት ክትውድእ ትኽእል ኢኻ።', f: 'ሓጺር ምልክት ንጋሻ ከም ዝረኣኽዮ የርኢ። ሽዑ ዕማምኪ ብህድኣት ክትውድኢ ትኽእሊ ኢኺ።' },
    'c.cleaning': { m: 'ነቲ ኤቲኬት ኣንብብ', f: 'ነቲ ኤቲኬት ኣንብቢ', x: 'ነቲ ኤቲኬት ኣንብቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.b': { m: 'ነፍሲ ወከፍ መጽረዪ ኬሚካል ኤቲኬት ኣለዎ። ስእላዊ ምልክታት (ኣብ ቀይሕ ዳይመንድ ዘለዋ ንኣሽቱ ስእልታት) ነቲ ሓደጋ የርእያ፡ ንኣብነት ንቖርበትካ፡ ንኣዒንትኻ ወይ ንሳንቡእካ። ነቲ ኤቲኬት ኣንብብ፡ ወይ እቲ ፍርያት ንምንታይ ምዃኑን ብኸመይ ከም ዝጥቀምሉን ሕተት። ኣስራሒኻ ዝህበካ ጓንቲ ግበር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ነፍሲ ወከፍ መጽረዪ ኬሚካል ኤቲኬት ኣለዎ። ስእላዊ ምልክታት (ኣብ ቀይሕ ዳይመንድ ዘለዋ ንኣሽቱ ስእልታት) ነቲ ሓደጋ የርእያ፡ ንኣብነት ንቖርበትኪ፡ ንኣዒንትኺ ወይ ንሳንቡእኪ። ነቲ ኤቲኬት ኣንብቢ፡ ወይ እቲ ፍርያት ንምንታይ ምዃኑን ብኸመይ ከም ዝጥቀምሉን ሕተቲ። ኣስራሒኺ ዝህበኪ ጓንቲ ግበሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።', x: 'ነፍሲ ወከፍ መጽረዪ ኬሚካል ኤቲኬት ኣለዎ። ስእላዊ ምልክታት (ኣብ ቀይሕ ዳይመንድ ዘለዋ ንኣሽቱ ስእልታት) ነቲ ሓደጋ የርእያ፡ ንኣብነት ንቖርበትኩም፡ ንኣዒንትኹም ወይ ንሳንቡእኩም። ነቲ ኤቲኬት ኣንብቡ፡ ወይ እቲ ፍርያት ንምንታይ ምዃኑን ብኸመይ ከም ዝጥቀምሉን ሕተቱ። ኣስራሒኹም ዝህበኩም ጓንቲ ግበሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.p': 'እዚ ፍርያት ንምንታይ እዩ?',
    'c.cleaning.s': { m: 'ሓድሽ መጽረዪ ኬሚካል ትረኽብ። ነቲ ኤቲኬት ብጽቡቕ ከተንብቦ ኣይትኽእልን ኢኻ። እንታይ ትገብር?', f: 'ሓድሽ መጽረዪ ኬሚካል ትረኽቢ። ነቲ ኤቲኬት ብጽቡቕ ከተንብብዮ ኣይትኽእሊን ኢኺ። እንታይ ትገብሪ?' },
    'c.cleaning.o1': { m: 'ብኸመይ ብውሑስ ከም እትጥቀመሉ ሕተት።', f: 'ብኸመይ ብውሑስ ከም እትጥቀምሉ ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.cleaning.o2': { m: 'ብዙሕ ተጠቐም፡ ሽዑ ዝያዳ ይሰርሕ።', f: 'ብዙሕ ተጠቐሚ፡ ሽዑ ዝያዳ ይሰርሕ።', x: 'ብዙሕ ተጠቐሙ፡ ሽዑ ዝያዳ ይሰርሕ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleaning.o3': { m: 'ብዘይ ጓንቲ ጥራይ ፈትኖ።', f: 'ብዘይ ጓንቲ ጥራይ ፈትንዮ።' },
    'c.cleaning.w': { m: 'ጌጋ ፍርያት፡ ወይ ብዙሕ ካብኡ፡ ንቖርበትካ፡ ንኣዒንትኻ ወይ ንሳንቡእካ ክጎድእ ይኽእል። ምሕታት ሓንቲ ደቒቕ ጥራይ ይወስድ።', f: 'ጌጋ ፍርያት፡ ወይ ብዙሕ ካብኡ፡ ንቖርበትኪ፡ ንኣዒንትኺ ወይ ንሳንቡእኪ ክጎድእ ይኽእል። ምሕታት ሓንቲ ደቒቕ ጥራይ ይወስድ።', x: 'ጌጋ ፍርያት፡ ወይ ብዙሕ ካብኡ፡ ንቖርበትኩም፡ ንኣዒንትኹም ወይ ንሳንቡእኩም ክጎድእ ይኽእል። ምሕታት ሓንቲ ደቒቕ ጥራይ ይወስድ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe': { m: 'ፍርያት ፈጺምካ ኣይትሐውስ', f: 'ፍርያት ፈጺምኪ ኣይትሐውሲ', x: 'ፍርያት ፈጺምኩም ኣይትሐውሱ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.b': { m: 'መጽረዪ ኬሚካላት ፈጺምካ ኣይትሐውስ፡ ንኣብነት ብሊች ምስ መጽረዪ ሽቓቕ። እዚ ሓደገኛ ጋዝ ክፈጥር ይኽእል። ንጹህ ኣየር ኣእቱ። መሬት ብሞፕ ተጽርይ ዲኻ? ሓደ እኳ ከይንሸራተት፡ ምልክት ዝጠለለ መሬት (Pas op, glad!) ኣቐምጥ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'መጽረዪ ኬሚካላት ፈጺምኪ ኣይትሐውሲ፡ ንኣብነት ብሊች ምስ መጽረዪ ሽቓቕ። እዚ ሓደገኛ ጋዝ ክፈጥር ይኽእል። ንጹህ ኣየር ኣእትዊ። መሬት ብሞፕ ተጽርዪ ዲኺ? ሓደ እኳ ከይንሸራተት፡ ምልክት ዝጠለለ መሬት (Pas op, glad!) ኣቐምጢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.cleansafe.p': 'ነቲ ምልክት የቐምጦ ኣለኹ። እቲ መሬት ጠሊሉ እዩ።',
    'c.cleansafe.s': { m: 'እቲ ሽቓቕ ኣዝዩ ረሲሑ እዩ። ሓደ ብጻይ ስራሕ «ክልተ ፍርያት ሐውስ፡ ሽዑ ዝያዳ ይሰርሕ።» ይብለካ። እንታይ ትገብር?', f: 'እቲ ሽቓቕ ኣዝዩ ረሲሑ እዩ። ሓደ ብጻይ ስራሕ «ክልተ ፍርያት ሐውሲ፡ ሽዑ ዝያዳ ይሰርሕ።» ይብለኪ። እንታይ ትገብሪ?', x: 'እቲ ሽቓቕ ኣዝዩ ረሲሑ እዩ። ሓደ ብጻይ ስራሕ «ክልተ ፍርያት ሐውሱ፡ ሽዑ ዝያዳ ይሰርሕ።» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.o1': { m: 'ኣይትሐውስ። ሓደ ፍርያት ተጠቐም።', f: 'ኣይትሐውሲ። ሓደ ፍርያት ተጠቐሚ።', x: 'ኣይትሐውሱ። ሓደ ፍርያት ተጠቐሙ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.cleansafe.o2': { m: 'ሐውሶም፡ ግን መስኮት ክፈት።', f: 'ሐውስዮም፡ ግን መስኮት ክፈቲ።' },
    'c.cleansafe.o3': { m: 'ቀልጢፍካ ሐውሶም እሞ ካብቲ ክፍሊ ውጻእ።', f: 'ቀልጢፍኪ ሐውስዮም እሞ ካብቲ ክፍሊ ውጽኢ።' },
    'c.cleansafe.w': { m: 'ፍርያት ምሕዋስ መርዛም ጋዝ ክፈጥር ይኽእል፡ መስኮት ክፉት እንተ ኾነ እውን። ብጽቡቕ ዝተጠቐምካሉ ሓደ ፍርያት ይኣክል።', f: 'ፍርያት ምሕዋስ መርዛም ጋዝ ክፈጥር ይኽእል፡ መስኮት ክፉት እንተ ኾነ እውን። ብጽቡቕ ዝተጠቐምክሉ ሓደ ፍርያት ይኣክል።' },
    'u.tools': 'ብልሒ ዘለዎም መሳርሒታት',
    'l.translate': { m: 'ብተሌፎንካ ተርጕም', f: 'ብተሌፎንኪ ተርጕሚ', x: 'ብተሌፎንኩም ተርጕሙ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.vertaalapp': 'ኣፕ ትርጉም',
    'w.vertalen': 'ምትርጓም',
    'w.camera': 'ካሜራ',
    'w.briefje': 'ንእሽቶ ጽሑፍ (ንእሽቶ ወረቐት)',
    'w.spreken': 'ምዝራብ',
    'w.vertaling': 'ትርጉም',
    's.translate.1': 'ብተሌፎነይ እተርጕሞ።',
    's.translate.2': 'ቀልጢፈ ክተርጕሞ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.translate.3': 'በጃኹም፡ ሓንሳብ ናብ ተሌፎነይ ክትዛረቡ ትኽእሉ ዶ?',
    'c.translate.q': 'ኣብቲ ጽሑፍ እንታይ ይብል?',
    'c.translate.a': 'ሓንሳብ ተጸበ፡ ክተርጕሞ እየ።',
    'l.understood': 'ምርዳእን ክትርዳእን',
    'w.herhalen': 'ምድጋም',
    'w.opschrijven': 'ምጽሓፍ',
    'w.latenzien': 'ምርኣይ (ንሓደ ሰብ)',
    'w.ondertiteling': 'ንኡስ ጽሑፍ (ዘረባ ከም ጽሑፍ)',
    'w.instructie': 'መምርሒ',
    'w.plaatje': 'ስእሊ',
    's.understood.1': 'ክትጽሕፉለይ ትኽእሉ ዶ?',
    's.understood.2': 'ከተርእዩኒ ትኽእሉ ዶ?',
    's.understood.3': 'ስእሊ ዘለዎ መምርሒ ኣሎ ድዩ?',
    'c.understood.q': { m: 'ቅድም ኣዋድድ፡ ድሕሪኡ ጠርንፍ።', f: 'ቅድም ኣዋድዲ፡ ድሕሪኡ ጠርንፊ።', x: 'ቅድም ኣዋድዱ፡ ድሕሪኡ ጠርንፉ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.understood.a': 'ስለዚ ቅድም ከዋድድ ኣለኒ ማለት ድዩ?',
    'l.keeplearning': { m: 'ምምሃር ቀጽል', f: 'ምምሃር ቀጽሊ', x: 'ምምሃር ቀጽሉ' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.bibliotheek': '(ህዝባዊ) ቤት መጻሕፍቲ',
    'w.taalhuis': 'Taalhuis (ናጻ ሓገዝ ሆላንድኛ)',
    'w.oefenen': 'ምልምማድ',
    'w.luisteren': 'ምስማዕ',
    'w.elkedag': 'መዓልቲ መዓልቲ',
    'w.woord': 'ቃል',
    's.keeplearning.1': 'መዓልቲ መዓልቲ ዓሰርተ ደቒቕ እለማመድ።',
    's.keeplearning.2': 'እዚ ቃል እንታይ ማለት እዩ?',
    's.keeplearning.3': 'ምሳይ ሆላንድኛ ክትዛረብ ትኽእል ዶ?',
    'c.keeplearning.q': 'እንግሊዝኛ ክዛረብ ዶ?',
    'c.keeplearning.a': 'ኣይፋል፡ ሆላንድኛ በጃኻ። ክለማመድ እደሊ።',
    'c.translate': { m: 'ኣፕ ትርጉም፡ ብልሒ ኣለዎ፡ ግን ኣረጋግጽ', f: 'ኣፕ ትርጉም፡ ብልሒ ኣለዎ፡ ግን ኣረጋግጺ', x: 'ኣፕ ትርጉም፡ ብልሒ ኣለዎ፡ ግን ኣረጋግጹ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.translate.b': { m: 'ኣፕ ትርጉም፡ ከም Google Translate፡ ብዙሕ ይሕግዝ። ክትጽሕፍ፡ ክትዛረብ ወይ ምስ ብጻይ ስራሕካ ንምዝርራብ ናይ ዘተ ኣገባብ ክትጥቀም ትኽእል። ብካሜራ ምልክታት፡ ጽሑፋትን መምርሒታትን ክትትርጕም ትኽእል። ኣብ ብዙሓት ተሌፎናት፡ WhatsApp እውን መልእኽትታት ክተርጕም ይኽእል። ተሌፎንካ ውሑስን ዝተፈቕደን ኣብ ዝኾነሉ ጥራይ ተጠቐመሉ። ኣብ ጥቓ ማሽናት ወይ ፎርክሊፍት ፈጺምካ ኣይትጠቐመሉ። ኩሉ ግዜ ቅድም ሕተት። ኣፕታት ጌጋ ይገብሩ። ንኣገደስቲ ነገራት፡ ከም ውዕልካ፡ ደብዳቤ ወይ መምርሒ ድሕንነት፡ ሓደ ሰብ እውን ክገልጸልካ ሕተት። ብዘይ ፍቓድ ስእሊ ምስጢራዊ ወረቓቕቲ ስራሕ ኣይትውሰድ።', f: 'ኣፕ ትርጉም፡ ከም Google Translate፡ ብዙሕ ይሕግዝ። ክትጽሕፊ፡ ክትዛረቢ ወይ ምስ ብጻይ ስራሕኪ ንምዝርራብ ናይ ዘተ ኣገባብ ክትጥቀሚ ትኽእሊ። ብካሜራ ምልክታት፡ ጽሑፋትን መምርሒታትን ክትትርጕሚ ትኽእሊ። ኣብ ብዙሓት ተሌፎናት፡ WhatsApp እውን መልእኽትታት ክተርጕም ይኽእል። ተሌፎንኪ ውሑስን ዝተፈቕደን ኣብ ዝኾነሉ ጥራይ ተጠቐምሉ። ኣብ ጥቓ ማሽናት ወይ ፎርክሊፍት ፈጺምኪ ኣይትጠቐምሉ። ኩሉ ግዜ ቅድም ሕተቲ። ኣፕታት ጌጋ ይገብሩ። ንኣገደስቲ ነገራት፡ ከም ውዕልኪ፡ ደብዳቤ ወይ መምርሒ ድሕንነት፡ ሓደ ሰብ እውን ክገልጸልኪ ሕተቲ። ብዘይ ፍቓድ ስእሊ ምስጢራዊ ወረቓቕቲ ስራሕ ኣይትውሰዲ።' },
    'c.translate.p': 'ንምትርጓም ተሌፎነይ ክጥቀም ይኽእል ዶ?',
    'c.translate.s': { m: 'ተቖጻጻሪኻ ብሆላንድኛ መምርሒ ድሕንነት ይህበካ። ቁሩብ ቃላት ጥራይ ትርዳእ። እንታይ ትገብር?', f: 'ተቖጻጻሪኺ ብሆላንድኛ መምርሒ ድሕንነት ይህበኪ። ቁሩብ ቃላት ጥራይ ትርድኢ። እንታይ ትገብሪ?', x: 'ተቖጻጻሪኹም ብሆላንድኛ መምርሒ ድሕንነት ይህበኩም። ቁሩብ ቃላት ጥራይ ትርድኡ። እንታይ ትገብሩ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o1': { m: 'መግለጺ ሕተት፡ ኣፕ ይፍቀድ እንተ ኾይኑ ድማ ሕተት።', f: 'መግለጺ ሕተቲ፡ ኣፕ ይፍቀድ እንተ ኾይኑ ድማ ሕተቲ።', x: 'መግለጺ ሕተቱ፡ ኣፕ ይፍቀድ እንተ ኾይኑ ድማ ሕተቱ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o2': { m: '«ja, ja» በል እሞ ስራሕ ጀምር።', f: '«ja, ja» በሊ እሞ ስራሕ ጀምሪ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.o3': { m: 'ስእሊ ውሰድ እሞ ክትርጕምዎ ናብ ኣዕሩኽካ ስደዶ።', f: 'ስእሊ ውሰዲ እሞ ክትርጕምዎ ናብ ኣዕሩኽኪ ስደድዮ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.translate.w': { m: 'ኣፕ ትርጉም ቀልጢፍካ ክትርዳእ ይሕግዘካ፡ ግን ጌጋ ክገብር ይኽእል። ንድሕንነት፡ ካብ ሰብ ዝመጽእ መብርሂ እቲ ዝበለጸ መረጋገጺ እዩ። ወረቓቕቲ ስራሕ ምስጢራዊ ክኾኑ ይኽእሉ፡ ስለዚ ብዘይ ፍቓድ ኣይተካፍሎም።', f: 'ኣፕ ትርጉም ቀልጢፍኪ ክትርድኢ ይሕግዘኪ፡ ግን ጌጋ ክገብር ይኽእል። ንድሕንነት፡ ካብ ሰብ ዝመጽእ መብርሂ እቲ ዝበለጸ መረጋገጺ እዩ። ወረቓቕቲ ስራሕ ምስጢራዊ ክኾኑ ይኽእሉ፡ ስለዚ ብዘይ ፍቓድ ኣይተካፍልዮም።', x: 'ኣፕ ትርጉም ቀልጢፍኩም ክትርድኡ ይሕግዘኩም፡ ግን ጌጋ ክገብር ይኽእል። ንድሕንነት፡ ካብ ሰብ ዝመጽእ መብርሂ እቲ ዝበለጸ መረጋገጺ እዩ። ወረቓቕቲ ስራሕ ምስጢራዊ ክኾኑ ይኽእሉ፡ ስለዚ ብዘይ ፍቓድ ኣይተካፍልዎም።' }, // x: nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.understood': { m: 'ከም ዝተረዳእካ ኣረጋግጽ', f: 'ከም ዝተረዳእኪ ኣረጋግጺ', x: 'ከም ዝተረዳእኩም ኣረጋግጹ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.b': { m: 'ተሌፎንካ ዘረባ ናብ ጽሑፍ ክቕይር ይኽእል (ቀጥታዊ ንኡስ ጽሑፍ)፡ ኣብ Android Live Transcribe፡ ኣብ iPhone Live Captions። ተሌፎንካ ኣየኖት ቋንቋታት ከም ዝድግፍ ኣረጋግጽ። ሓደ ሰብ ክጽሕፎ፡ ከርእየካ ወይ ቀስ ኢሉ ክዛረብ እውን ክትሓቶ ትኽእል። ስእሊ ዘለዎ ወይ ብቋንቋኻ ዝተጻሕፈ መምርሒ እንተሎ ሕተት። ድሕሪኡ ዝተረዳእካዮ መሊስካ ንገር፡ «Dus ik moet eerst …?» ኣብዚ እዚ ልሙድ እዩ፡ ጌጋታት ድማ ይከላኸል።', f: 'ተሌፎንኪ ዘረባ ናብ ጽሑፍ ክቕይር ይኽእል (ቀጥታዊ ንኡስ ጽሑፍ)፡ ኣብ Android Live Transcribe፡ ኣብ iPhone Live Captions። ተሌፎንኪ ኣየኖት ቋንቋታት ከም ዝድግፍ ኣረጋግጺ። ሓደ ሰብ ክጽሕፎ፡ ከርእየኪ ወይ ቀስ ኢሉ ክዛረብ እውን ክትሓትዮ ትኽእሊ። ስእሊ ዘለዎ ወይ ብቋንቋኺ ዝተጻሕፈ መምርሒ እንተሎ ሕተቲ። ድሕሪኡ ዝተረዳእክዮ መሊስኪ ንገሪ፡ «Dus ik moet eerst …?» ኣብዚ እዚ ልሙድ እዩ፡ ጌጋታት ድማ ይከላኸል።' },
    'c.understood.p': 'ስለዚ ቅድም ነቶም ሳጹናት ክቖጽሮም ኣለኒ ማለት ድዩ?',
    'c.understood.s': { m: 'ሓንቲ ብጻይ ስራሕ ሓድሽ ማሽን ብኸመይ ከም ዝሰርሕ ትገልጽ። ቀልጢፋ ትዛረብ፡ ገለ ቃላት ድማ የምልጡኻ። እንታይ ትገብር?', f: 'ሓንቲ ብጻይ ስራሕ ሓድሽ ማሽን ብኸመይ ከም ዝሰርሕ ትገልጽ። ቀልጢፋ ትዛረብ፡ ገለ ቃላት ድማ የምልጡኺ። እንታይ ትገብሪ?', x: 'ሓንቲ ብጻይ ስራሕ ሓድሽ ማሽን ብኸመይ ከም ዝሰርሕ ትገልጽ። ቀልጢፋ ትዛረብ፡ ገለ ቃላት ድማ የምልጡኹም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.o1': { m: 'ከተርእየካ ወይ ክትጽሕፎ ሕተታ፡ ድሕሪኡ መሊስካ ንገር።', f: 'ከተርእየኪ ወይ ክትጽሕፎ ሕተትያ፡ ድሕሪኡ መሊስኪ ንገሪ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.understood.o2': { m: 'ግዜ ከይጠፍኣ፡ ብርእስኻ «እወ» እናበልካ «ja, ja» በል።', f: 'ግዜ ከይጠፍኣ፡ ብርእስኺ «እወ» እናበልኪ «ja, ja» በሊ።', x: 'ግዜ ከይጠፍኣ፡ ብርእስኹም «እወ» እናበልኩም «ja, ja» በሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.understood.o3': { m: 'ደሓር ንበይንኻ ነቲ ማሽን ፈትኖ እሞ እንታይ ከም ዝኸውን ርአ።', f: 'ደሓር ንበይንኺ ነቲ ማሽን ፈትንዮ እሞ እንታይ ከም ዝኸውን ርኣዪ።' },
    'c.understood.w': { m: 'ምርኣይ፡ ምጽሓፍን መሊስካ ምንጋርን ቅልጡፋት መረጋገጺታት እዮም። ብጻይ ስራሕካ ቅድሚ ገለ ነገር ምብልሻዉ ከተስተኻኽለካ ትኽእል። ኣብዚ፡ እዚ ከም ጥንቃቐ እዩ ዝርአ፡ ከም ድንጉይነት ኣይኮነን።', f: 'ምርኣይ፡ ምጽሓፍን መሊስኪ ምንጋርን ቅልጡፋት መረጋገጺታት እዮም። ብጻይ ስራሕኪ ቅድሚ ገለ ነገር ምብልሻዉ ከተስተኻኽለኪ ትኽእል። ኣብዚ፡ እዚ ከም ጥንቃቐ እዩ ዝርአ፡ ከም ድንጉይነት ኣይኮነን።', x: 'ምርኣይ፡ ምጽሓፍን መሊስኩም ምንጋርን ቅልጡፋት መረጋገጺታት እዮም። ብጻይ ስራሕኩም ቅድሚ ገለ ነገር ምብልሻዉ ከተስተኻኽለኩም ትኽእል። ኣብዚ፡ እዚ ከም ጥንቃቐ እዩ ዝርአ፡ ከም ድንጉይነት ኣይኮነን።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning': { m: 'ምምሃር ቀጽል፡ መዓልቲ መዓልቲ ቁሩብ', f: 'ምምሃር ቀጽሊ፡ መዓልቲ መዓልቲ ቁሩብ', x: 'ምምሃር ቀጽሉ፡ መዓልቲ መዓልቲ ቁሩብ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.b': { m: 'መዓልቲ መዓልቲ ቁሩብ ደቓይቕ፡ ካብ ኣብ ሰሙን ሓንቲ ነዊሕ ሰዓት ዝያዳ ይሕግዝ። ካብ ስራሕ ዝረኸብካዮም ሓደሽቲ ቃላት ኣብ ኣፕ ጽሑፍ (notes) ናይ ተሌፎንካ ዓቅቦም። ቀሊል ሆላንድኛ ስማዕ፡ ንኣብነት NOS Jeugdjournaal (ዜና ንቖልዑ) ወይ ብቐስታ ሆላንድኛ ዝቐርብ ፖድካስት። ብዙሓት ህዝባዊ ኣባይቲ መጻሕፍቲ Taalhuis ኣለዎም፡ ናጻ ሓገዝ ሆላንድኛ፡ መብዛሕትኡ ግዜ ምስ taalcafé (ምዝራብ እትለማመደሉ ቦታ) ወይ ብጻይ ቋንቋ (taalmaatje)። ብጾት ስራሕ ክሕግዙኻ ኢሎም መብዛሕትኡ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ምሳኻ ሆላንድኛ ክዛረቡ ብትሕትና ሕተቶም፡ መብዛሕትኦም ሰባት ክሕግዙ ይፈትዉ እዮም።', f: 'መዓልቲ መዓልቲ ቁሩብ ደቓይቕ፡ ካብ ኣብ ሰሙን ሓንቲ ነዊሕ ሰዓት ዝያዳ ይሕግዝ። ካብ ስራሕ ዝረኸብክዮም ሓደሽቲ ቃላት ኣብ ኣፕ ጽሑፍ (notes) ናይ ተሌፎንኪ ዓቅብዮም። ቀሊል ሆላንድኛ ስምዒ፡ ንኣብነት NOS Jeugdjournaal (ዜና ንቖልዑ) ወይ ብቐስታ ሆላንድኛ ዝቐርብ ፖድካስት። ብዙሓት ህዝባዊ ኣባይቲ መጻሕፍቲ Taalhuis ኣለዎም፡ ናጻ ሓገዝ ሆላንድኛ፡ መብዛሕትኡ ግዜ ምስ taalcafé (ምዝራብ እትለማመድሉ ቦታ) ወይ ብጻይ ቋንቋ (taalmaatje)። ብጾት ስራሕ ክሕግዙኺ ኢሎም መብዛሕትኡ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ምሳኺ ሆላንድኛ ክዛረቡ ብትሕትና ሕተትዮም፡ መብዛሕትኦም ሰባት ክሕግዙ ይፈትዉ እዮም።' },
    'c.keeplearning.p': 'ምሳይ ሆላንድኛ ጥራይ ተዛረብ፡ ሽዑ ቀልጢፈ እመሃሮ።',
    'c.keeplearning.s': { m: 'ብጾት ስራሕካ ምሳኻ ክዛረቡ ከለዉ ኩሉ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ሆላንድኛ ክትመሃር ትደሊ። እንታይ ትገብር?', f: 'ብጾት ስራሕኪ ምሳኺ ክዛረቡ ከለዉ ኩሉ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ሆላንድኛ ክትመሃሪ ትደልዪ። እንታይ ትገብሪ?' },
    'c.keeplearning.o1': { m: 'ኣመስግኖም፡ ምሳኻ ሆላንድኛ ክዛረቡ ድማ ሕተቶም።', f: 'ኣመስግንዮም፡ ምሳኺ ሆላንድኛ ክዛረቡ ድማ ሕተትዮም።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.o2': { m: 'ገለ ኣይትበል። ሆላንድኛ ባዕሉ ክመጽእ እዩ።', f: 'ገለ ኣይትበሊ። ሆላንድኛ ባዕሉ ክመጽእ እዩ።', x: 'ገለ ኣይትበሉ። ሆላንድኛ ባዕሉ ክመጽእ እዩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.keeplearning.o3': { m: 'ንስኻ እውን ብእንግሊዝኛ መልስ፡ እዚ ዝያዳ ትሕትና ስለ ዝኾነ።', f: 'ንስኺ እውን ብእንግሊዝኛ መልሺ፡ እዚ ዝያዳ ትሕትና ስለ ዝኾነ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.keeplearning.w': { m: 'ብጾት ስራሕ ንምሕጋዝ ኢሎም መብዛሕትኡ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ሆላንድኛ ምስ እትሓቶም፡ መብዛሕትኦም ብሓጎስ ይሕግዙ። ኣብ ስራሕ መዓልቲ መዓልቲ ቁሩብ ምዝራብ ሓደ ካብቶም ቀልጠፍቲ መንገድታት ምምሃር እዩ።', f: 'ብጾት ስራሕ ንምሕጋዝ ኢሎም መብዛሕትኡ ግዜ ናብ እንግሊዝኛ ይቕይሩ። ሆላንድኛ ምስ እትሓትዮም፡ መብዛሕትኦም ብሓጎስ ይሕግዙ። ኣብ ስራሕ መዓልቲ መዓልቲ ቁሩብ ምዝራብ ሓደ ካብቶም ቀልጠፍቲ መንገድታት ምምሃር እዩ።' },
    'l.gossip': "ሕሜትን ማሕበራዊ ሚድያን",
    'w.roddelen': "ምሕማይ",
    'w.posten': "ምልጣፍ (ኣብ ኢንተርነት)",
    'w.groepsapp': "ጉጅለ ቻት",
    'w.socialemedia': "ማሕበራዊ ሚድያ",
    'w.delen': "ምክፋል (ምልኣኽ)",
    'w.screenshot': "ስክሪንሾት (ስእሊ ስክሪን)",
    's.gossip.1': "ኣነ ብዛዕባ ብጾተይ ኣይሓምን እየ።",
    's.gossip.2': "ኣነ ስእልታት ስራሕ ኣብ ኢንተርነት ኣየቐምጥን እየ።",
    's.gossip.3': "ንዓይ ባዕለይ እንተ ትነግረኒ ይሓይሽ።",
    'c.gossip.q': { m: 'ማርክ እንታይ ከም ዝገበረ ሰሚዕካ ዲኻ?', f: 'ማርክ እንታይ ከም ዝገበረ ሰሚዕኪ ዲኺ?', x: 'ማርክ እንታይ ከም ዝገበረ ሰሚዕኩም ዲኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.gossip.a': "ኣይሰማዕኩን፡ ብዛዕባኡ ክዛረብ ድማ ኣይደልን።",
    'l.boundaries': "ዶብ ምሕላፍ",
    'w.aanraken': "ምትንካፍ",
    'w.ongewenst': "ዘይድለ",
    'w.opmerking': "ርእይቶ፡ ዘረባ",
    'w.intimidatie': "ምህሳይ፡ ምፍርራሕ",
    'w.getuige': "መሰኻኽር",
    'w.grapje': "ቀልዲ",
    's.boundaries.1': "ኣይትተንክፈኒ።", // nieuw, nalezen ("Blijf van me af.", 4 nov 2026) // nagelezen AI 28 nov
    's.boundaries.2': "እዚ ዘረባ እዚ ኣየስሕቐንን እዩ።",
    's.boundaries.3': "ንምስጢራዊ ኣማኻሪ ገለ ነገር ክሕብር እደሊ።",
    'c.boundaries.q': { m: 'ከምኡ ኣይትተሸገር፡ ቀልዲ ጥራይ እዩ ነይሩ።', f: 'ከምኡ ኣይትተሸገሪ፡ ቀልዲ ጥራይ እዩ ነይሩ።', x: 'ከምኡ ኣይትተሸገሩ፡ ቀልዲ ጥራይ እዩ ነይሩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.boundaries.a': "ንዓይ ቀልዲ ኣይኮነን። ደው ክተብሎ እደሊ።",
    'c.gossip': "ሕሜትን ማሕበራዊ ሚድያን",
    'c.gossip.b': { m: 'ብድሕሪ ሓደ ብጻይ ስራሕ ምዝራብ (roddelen) ኣብ ጉጅለ ዘሎ እምነት የበላሹ። ምስ ሓደ ሰብ ጸገም ኣለካ ድዩ? ምስቲ ሰብ ባዕሉ፡ ወይ ምስ ተቖጻጻሪኻ ተዛረብ። ኣብ ኢንተርነት እውን ከምቲ ኣብ ስራሕ ዘሎ ሕግታት ይሰርሑ። ብዛዕባ ብጾት ስራሕ፡ ተገልገልቲ ወይ ትካል ብዘይ ፍቓድ ዋላ ሓንቲ ኣይትለጥፍ። እዚ ስእሊ፡ ቪድዮን መልእኽትን የጠቓልል። ሓላፊኻ እትለጥፎ ክርኢ ይኽእል፡ ንብዙሕ ዓመታት ድማ ኣብ ኢንተርነት ክጸንሕ ይኽእል። ብዙሓት ጉጅለታት ንስራሕ ጉጅለ ቻት (groepsapp) ኣለዎም፡ ብዛዕባ ስራሕ ጥራይ ይኹን፡ ስክሪንሾት ካብኡ ድማ ንኻልኦት ኣይተካፍል። ናይ ሓደ ብጻይ ውልቃዊ ነገራት ምዝርጋሕ ወይ ኣብ ኢንተርነት ንሰብ ምልጋጽ እውን ምጽቃጥ እዩ።', f: 'ብድሕሪ ሓደ ብጻይ ስራሕ ምዝራብ (roddelen) ኣብ ጉጅለ ዘሎ እምነት የበላሹ። ምስ ሓደ ሰብ ጸገም ኣለኪ ድዩ? ምስቲ ሰብ ባዕሉ፡ ወይ ምስ ተቖጻጻሪኺ ተዛረቢ። ኣብ ኢንተርነት እውን ከምቲ ኣብ ስራሕ ዘሎ ሕግታት ይሰርሑ። ብዛዕባ ብጾት ስራሕ፡ ተገልገልቲ ወይ ትካል ብዘይ ፍቓድ ዋላ ሓንቲ ኣይትለጥፊ። እዚ ስእሊ፡ ቪድዮን መልእኽትን የጠቓልል። ሓላፊኺ እትለጥፍዮ ክርኢ ይኽእል፡ ንብዙሕ ዓመታት ድማ ኣብ ኢንተርነት ክጸንሕ ይኽእል። ብዙሓት ጉጅለታት ንስራሕ ጉጅለ ቻት (groepsapp) ኣለዎም፡ ብዛዕባ ስራሕ ጥራይ ይኹን፡ ስክሪንሾት ካብኡ ድማ ንኻልኦት ኣይተካፍሊ። ናይ ሓደ ብጻይ ውልቃዊ ነገራት ምዝርጋሕ ወይ ኣብ ኢንተርነት ንሰብ ምልጋጽ እውን ምጽቃጥ እዩ።' },
    'c.gossip.p': "እዚ ኣብ ኢንተርነት ክኸውን ኣይደልን።",
    'c.gossip.s': { m: 'ሓደ ብጻይ ስራሕ ኣብ ጠሊ ዘለዎ መሬት ክትሾልቕ ከለኻ ቪድዮ የልዕለካ። ነቲ ቪድዮ ኣብ TikTok ክልጥፎ ይደሊ። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ ኣብ ጠሊ ዘለዎ መሬት ክትሾልቒ ከለኺ ቪድዮ የልዕለኪ። ነቲ ቪድዮ ኣብ TikTok ክልጥፎ ይደሊ። እንታይ ትገብሪ?', x: 'ሓደ ብጻይ ስራሕ ኣብ ጠሊ ዘለዎ መሬት ክትሾልቑ ከለኹም ቪድዮ የልዕለኩም። ነቲ ቪድዮ ኣብ TikTok ክልጥፎ ይደሊ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gossip.o1': { m: '«Nee, dat wil ik niet» በል፡ ክድምስሶ ድማ ሕተቶ።', f: '«Nee, dat wil ik niet» በሊ፡ ክድምስሶ ድማ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.gossip.o2': { m: 'ስሓቕ፡ ከይትሽገር ድማ ክልጥፎ ግደፎ።', f: 'ስሓቒ፡ ከይትሽገሪ ድማ ክልጥፎ ግደፍዮ።' },
    'c.gossip.o3': { m: 'ብዘይ ስምካ ክልጥፎ ሕተቶ።', f: 'ብዘይ ስምኪ ክልጥፎ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.gossip.w': { m: 'መብዛሕትኡ ግዜ ዝኾነ ሰብ ብዘይ ፍቓድካ ቪድዮኻ ኣብ ኢንተርነት ከቐምጥ ኣይፍቀዶን። ኣይፋልን ምባል ንቡር እዩ፡ ብጾት ስራሕ ኣብ ኢንተርነት ንሓድሕዶም ክላገጹ ከለዉ ድማ ኣስራሒኻ ስጉምቲ ክወስድ ኣለዎ። ብዘየገድስ እንተ ለጢፍዎ፡ ንተቖጻጻሪኻ ንገር።', f: 'መብዛሕትኡ ግዜ ዝኾነ ሰብ ብዘይ ፍቓድኪ ቪድዮኺ ኣብ ኢንተርነት ከቐምጥ ኣይፍቀዶን። ኣይፋልን ምባል ንቡር እዩ፡ ብጾት ስራሕ ኣብ ኢንተርነት ንሓድሕዶም ክላገጹ ከለዉ ድማ ኣስራሒኺ ስጉምቲ ክወስድ ኣለዎ። ብዘየገድስ እንተ ለጢፍዎ፡ ንተቖጻጻሪኺ ንገሪ።', x: 'መብዛሕትኡ ግዜ ዝኾነ ሰብ ብዘይ ፍቓድኩም ቪድዮኹም ኣብ ኢንተርነት ከቐምጥ ኣይፍቀዶን። ኣይፋልን ምባል ንቡር እዩ፡ ብጾት ስራሕ ኣብ ኢንተርነት ንሓድሕዶም ክላገጹ ከለዉ ድማ ኣስራሒኹም ስጉምቲ ክወስድ ኣለዎ። ብዘየገድስ እንተ ለጢፍዎ፡ ንተቖጻጻሪኹም ንገሩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries': "ዶብ ምሕላፍ",
    'c.boundaries.b': { m: 'Grensoverschrijdend gedrag ናይ ሓደ ሰብ ዶብ ዝሓልፍ ባህርይ እዩ። ንኣብነት፡ ዘይድለ ምትንካፍ፡ ጾታዊ ዘረባ ወይ ቀልዲ፡ ኣጸቢቕካ ምጥማት፡ ዘይድለ ስእልታት፡ ምፍርራሕ ወይ ምጭራሕ። እቲ ካልእ ሰብ «ብቀልዲ እዩ ዝበሎ» እንተ በለ ኣየገድስን፡ ኣገዳሲ ንስኻ ከመይ ከም ዝስምዓካ እዩ። እንተ ኽኢልካ፡ ደው ክብል ከም ትደሊ ብንጹር ተዛረብ። እንታይ ከም ዘጋጠመ፡ መዓስ፡ መን ድማ ከም ዝረኣዮ ጽሓፍ። ንተቖጻጻሪኻ፡ ንምስጢራዊ ኣማኻሪ (vertrouwenspersoon፡ እንተ ሃልዩ) ወይ ንHR ንገር። ኣስራሒኻ ክከላኸለልካ ኣለዎ፡ ስለ ዝሓበርካ ድማ ክትቕጻዕ ኣይፍቀድን። ኣብ ሓደ ብጻይ ስራሕ ከጋጥም ርኢኻ ዲኻ? ደሓን ድዩ ሕተቶ፡ መሰኻኽር ክትኮኖ ከም እትኽእል ድማ ንገሮ።', f: 'Grensoverschrijdend gedrag ናይ ሓደ ሰብ ዶብ ዝሓልፍ ባህርይ እዩ። ንኣብነት፡ ዘይድለ ምትንካፍ፡ ጾታዊ ዘረባ ወይ ቀልዲ፡ ኣጸቢቕኪ ምጥማት፡ ዘይድለ ስእልታት፡ ምፍርራሕ ወይ ምጭራሕ። እቲ ካልእ ሰብ «ብቀልዲ እዩ ዝበሎ» እንተ በለ ኣየገድስን፡ ኣገዳሲ ንስኺ ከመይ ከም ዝስምዓኪ እዩ። እንተ ኽኢልኪ፡ ደው ክብል ከም ትደልዪ ብንጹር ተዛረቢ። እንታይ ከም ዘጋጠመ፡ መዓስ፡ መን ድማ ከም ዝረኣዮ ጽሓፊ። ንተቖጻጻሪኺ፡ ንምስጢራዊ ኣማኻሪ (vertrouwenspersoon፡ እንተ ሃልዩ) ወይ ንHR ንገሪ። ኣስራሒኺ ክከላኸለልኪ ኣለዎ፡ ስለ ዝሓበርኪ ድማ ክትቕጽዒ ኣይፍቀድን። ኣብ ሓደ ብጻይ ስራሕ ከጋጥም ርኢኺ ዲኺ? ደሓን ድዩ ሕተትዮ፡ መሰኻኽር ክትኮንዮ ከም እትኽእሊ ድማ ንገርዮ።' },
    'c.boundaries.p': "ደው ክተብሎ እደሊ።",
    'c.boundaries.s': { m: 'መራሒ ጉጅለኻ ብዙሕ ግዜ ኢዱ ኣብ ዝባንካ የንብር፡ «ጽቡቕ» ትመስል ድማ ይብለካ። እዚ ምቾት ይኸልኣካ። ንሱ ፈረቓታትካ (shifts) ይውስን። እንታይ ትገብር?', f: 'መራሒ ጉጅለኺ ብዙሕ ግዜ ኢዱ ኣብ ዝባንኪ የንብር፡ «ጽብቕቲ» ትመስሊ ድማ ይብለኪ። እዚ ምቾት ይኸልኣኪ። ንሱ ፈረቓታትኪ (shifts) ይውስን። እንታይ ትገብሪ?', x: 'መራሒ ጉጅለኹም ብዙሕ ግዜ ኢዱ ኣብ ዝባንኩም የንብር፡ «ጽቡቕ» ትመስሉ ድማ ይብለኩም። እዚ ምቾት ይኸልኣኩም። ንሱ ፈረቓታትኩም (shifts) ይውስን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.boundaries.o1': { m: 'ዘጋጥም ዘሎ ጽሓፍ፡ ምስ vertrouwenspersoon ድማ ተዛረብ።', f: 'ዘጋጥም ዘሎ ጽሓፊ፡ ምስ vertrouwenspersoon ድማ ተዛረቢ።', x: 'ዘጋጥም ዘሎ ጽሓፉ፡ ምስ vertrouwenspersoon ድማ ተዛረቡ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o2': { m: 'ገለ ኣይትበል፡ ምኽንያቱ ንሱ ፈረቓታትካ ይውስን።', f: 'ገለ ኣይትበሊ፡ ምኽንያቱ ንሱ ፈረቓታትኪ ይውስን።', x: 'ገለ ኣይትበሉ፡ ምኽንያቱ ንሱ ፈረቓታትኩም ይውስን።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.o3': { m: 'ንዝኾነ ሰብ ምኽንያቱ ከይነገርካ ስራሕካ ግደፍ።', f: 'ንዝኾነ ሰብ ምኽንያቱ ከይነገርኪ ስራሕኪ ግደፊ።', x: 'ንዝኾነ ሰብ ምኽንያቱ ከይነገርኩም ስራሕኩም ግደፉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.boundaries.w': { m: 'እዚ ዘይድለ ባህርይ እዩ፡ ጌጋኻ ድማ ኣይኮነን። ምስጢራዊ ኣማኻሪ ብምስጢር ይሰምዓካ፡ ቀጻሊ ስጉምቲ ክትመርጽ ድማ ይሕግዘካ። ክትሕብር ከለኻ ውሑስ ኢኻ። ምስ HR እውን ክትዛረብ ትኽእል ኢኻ።', f: 'እዚ ዘይድለ ባህርይ እዩ፡ ጌጋኺ ድማ ኣይኮነን። ምስጢራዊ ኣማኻሪ ብምስጢር ይሰምዓኪ፡ ቀጻሊ ስጉምቲ ክትመርጺ ድማ ይሕግዘኪ። ክትሕብሪ ከለኺ ውሕስቲ ኢኺ። ምስ HR እውን ክትዛረቢ ትኽእሊ ኢኺ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'u.shop': 'ኣብ ድኳን',
    'l.shelves': 'መደርደሪታትን ክዝናን',
    'w.schap': 'መደርደሪ (ኣብ ድኳን)',
    'w.vakkenvullen': 'መደርደሪታት ምምላእ',
    'w.voorraad': 'ክዝና (ኣብ መኽዘን ዘሎ ኣቕሓ)',
    'w.houdbaarheidsdatum': 'ዕለት ምብቃዕ ግዜ (ቅድሚ እዚ ዕለት ተጠቐም)',
    'w.prijskaartje': 'ናይ ዋጋ ወረቐት',
    'w.achteraan': 'ኣብ ድሕሪት',
    's.shelves.1': { m: 'ነቶም ሓደስቲ ፍርያት ኣብ ድሕሪት ኣቐምጦም።', f: 'ነቶም ሓደስቲ ፍርያት ኣብ ድሕሪት ኣቐምጥዮም።' },
    's.shelves.2': 'እዚ ፍርያት ግዜኡ ሓሊፉ እዩ።',
    's.shelves.3': 'ገና ክዝና ኣሎ ዶ?',
    'c.shelves.q': 'ሩዝ ኣበይ ክረኽብ እኽእል?',
    'c.shelves.a': 'ኣብ መተላለዪ ቁጽሪ ኣርባዕተ። ምሳኹም ክኸይድ እየ።',
    'l.checkout': 'ኣብ መኽፈሊ (ካሳ)',
    'w.klant': 'ዓሚል',
    'w.kassa': 'መኽፈሊ (ካሳ)',
    'w.wisselgeld': 'ምልሰት (ንዓሚል እትመልሶ ገንዘብ)',
    'w.bonnetje': 'ቅብሊት',
    'w.pinnen': 'ብካርድ ምኽፋል',
    'w.contant': 'ብጥረ ገንዘብ (ካሽ)',
    's.checkout.1': 'ብካርድ ዶ ወይስ ብጥረ ገንዘብ ክትከፍሉ ትደልዩ?',
    's.checkout.2': 'እንሆ ምልሰትኩም።',
    's.checkout.3': 'መንነት ወረቐትኩም ክርኢ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.checkout.q': 'ኣብዚ ብካርድ ክኸፍል እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.checkout.a': 'እወ፡ ብርግጽ፡ ይከኣል።',
    'u.numbers': 'ግዜ፡ ገንዘብን መለክዒታትን',
    'l.counting': 'ቁጽርታት', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertien': 'ዓሰርተ ሰለስተ (13)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.dertig': 'ሰላሳ (30)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventien': 'ዓሰርተ ሸውዓተ (17)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeventig': 'ሰብዓ (70)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.zevenenveertig': 'ኣርብዓን ሸውዓተን (47)', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierenzeventig': 'ሰብዓን ኣርባዕተን (74)', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.1': 'ዓሰርተ ሰለስተ ሳጹናት ኣለዉኒ፡ ሰላሳ ኣይኮኑን።', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.2': 'ቦታ ሰብዓን ኣርባዕተን ባዶ እዩ።', // nieuw, nalezen // nagelezen AI 28 nov
    's.counting.3': 'ኣሃዝ ብኣሃዝ ክትብልዎ ትኽእሉ ዶ?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.q': 'ክንደይ ሳጹናት ተሪፎም?', // nieuw, nalezen // nagelezen AI 28 nov
    'c.counting.a': 'ሰብዓ። ሸውዓተ፡ ዜሮ።', // nieuw, nalezen // nagelezen AI 28 nov
    'l.hours': 'ሰዓታትን ግዜን',
    'w.uur': 'ሰዓት (60 ደቒቕ)',
    'w.minuut': 'ደቒቕ',
    'w.kwartier': 'ርብዒ ሰዓት (15 ደቒቕ)',
    'w.halfuur': 'ፍርቂ ሰዓት (30 ደቒቕ)',
    'w.duren': 'ምውሳድ (ግዜ)፡ ምቕጻል',
    'w.optellen': 'ምድማር',
    's.hours.1': 'ኣብ ሰዓት 7:30 እጅምር።',
    's.hours.2': 'ሎሚ ሸሞንተ ሰዓት እሰርሕ።',
    's.hours.3': 'እቲ ዕረፍቲ ፍርቂ ሰዓት ይወስድ።',
    'c.hours.q': { m: 'ኣብ ክንደይ ሰዓት ትውድእ?', f: 'ኣብ ክንደይ ሰዓት ትውድኢ?', x: 'ኣብ ክንደይ ሰዓት ትውድኡ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.hours.a': 'ኣብ ሰዓት 16:15።',
    'l.measures': 'ገንዘብን መለክዒታትን',
    'w.euro': 'ዩሮ',
    'w.cent': 'ሳንቲም (ሴንት)',
    'w.kilo': 'ኪሎ',
    'w.liter': 'ሊትሮ',
    'w.meter': 'ሜትሮ',
    'w.tellen': 'ምቑጻር',
    's.measures.1': 'ዋጋኡ ሽዱሽተ ዩሮን ሓምሳ ሳንቲምን እዩ።',
    's.measures.2': 'እዚ ሳጹን ዓሰርተ ኪሎ ይምዝን።',
    's.measures.3': 'ኣርብዓ ሳጹናት ቈጺረ።',
    'c.measures.q': 'እቲ ጣውላ ንውሓቱ ክንደይ እዩ?',
    'c.measures.a': 'ልክዕ ክልተ ሜትሮ።',
    'c.shelves': 'ኣረጊት ናብ ቅድሚት',
    'c.shelves.b': { m: 'መደርደሪታት ክትመልእ ከለኻ፡ ነቲ ኣብ ፍርያት ዘሎ ዕለት ርአ። እቶም ዕለቶም ዝቐረበ ፍርያት ኣብ ቅድሚት፡ እቶም ሓደስቲ ድማ ኣብ ድሕሪት ኣቐምጦም። ዓማዊል ካብ ቅድሚት ይወስዱ፡ ስለዚ እቶም ኣረጊት ፍርያት ቀዲሞም ይሽየጡ። ሓደ ፍርያት ግዜኡ ሓሊፉ ወይ ተበላሺዩ ድዩ? ካብቲ መደርደሪ ኣልዕሎ፡ እንታይ ክትገብረሉ ከም ዘለካ ድማ ሕተት። መተላለዪታት ካብ ሳጹናትን ዓረብያታትን ነጻ ግበሮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'መደርደሪታት ክትመልኢ ከለኺ፡ ነቲ ኣብ ፍርያት ዘሎ ዕለት ርኣዪ። እቶም ዕለቶም ዝቐረበ ፍርያት ኣብ ቅድሚት፡ እቶም ሓደስቲ ድማ ኣብ ድሕሪት ኣቐምጥዮም። ዓማዊል ካብ ቅድሚት ይወስዱ፡ ስለዚ እቶም ኣረጊት ፍርያት ቀዲሞም ይሽየጡ። ሓደ ፍርያት ግዜኡ ሓሊፉ ወይ ተበላሺዩ ድዩ? ካብቲ መደርደሪ ኣልዕልዮ፡ እንታይ ክትገብርሉ ከም ዘለኪ ድማ ሕተቲ። መተላለዪታት ካብ ሳጹናትን ዓረብያታትን ነጻ ግበርዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.shelves.p': 'ግዜኦም ዝሓለፈ ፍርያት እንታይ ክገብሮም?',
    'c.shelves.s': { m: 'ሓድሽ ጸባ ኣብ መደርደሪ ተቐምጥ ኣለኻ። ኣብ ቅድሚት ዕለቱ ዝቐረበ ጸባ ኣሎ። እንታይ ትገብር?', f: 'ሓድሽ ጸባ ኣብ መደርደሪ ተቐምጢ ኣለኺ። ኣብ ቅድሚት ዕለቱ ዝቐረበ ጸባ ኣሎ። እንታይ ትገብሪ?', x: 'ሓድሽ ጸባ ኣብ መደርደሪ ተቐምጡ ኣለኹም። ኣብ ቅድሚት ዕለቱ ዝቐረበ ጸባ ኣሎ። እንታይ ትገብሩ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.o1': { m: 'ነቲ ሓድሽ ጸባ ኣብ ድሕሪት፡ ነቲ ኣረጊት ጸባ ድማ ኣብ ቅድሚት ኣቐምጦ።', f: 'ነቲ ሓድሽ ጸባ ኣብ ድሕሪት፡ ነቲ ኣረጊት ጸባ ድማ ኣብ ቅድሚት ኣቐምጥዮ።' },
    'c.shelves.o2': { m: 'ነቲ ሓድሽ ጸባ ኣብ ቅድሚት ኣቐምጦ፡ ምኽንያቱ ዝሓደሰ እዩ።', f: 'ነቲ ሓድሽ ጸባ ኣብ ቅድሚት ኣቐምጥዮ፡ ምኽንያቱ ዝሓደሰ እዩ።' },
    'c.shelves.o3': { m: 'ነቲ ኣረጊት ጸባ ጕሓፎ።', f: 'ነቲ ኣረጊት ጸባ ጕሓፍዮ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.shelves.w': 'ዓማዊል ካብ ቅድሚት ይወስዱ። እቶም ኣረጊት ፍርያት ቀዲሞም ክሽየጡ ከለዉ፡ ዝጕሓፍ መግቢ ይውሕድ።',
    'c.checkout': 'ንኣልኮልን ትምባኾን መንነት ወረቐት',
    'c.checkout.b': { m: 'ኣልኮል ወይ ትምባኾ ንዕድሚኡ ትሕቲ 18 ዝኾነ ሰብ ክትሸይጥ ኣይፍቀደካን፡ እዚ ሕጊ እዩ። ብዛዕባ ዕድመ እቲ ዓሚል ርግጸኛ ኣይኮንካን ዲኻ? መንነት ወረቐቱ ሕተት። ብዙሓት ድኳናት ካብ 25 ዝንእስ ዝመስል ኩሉ ሰብ መንነት ወረቐት ይሓቱ። መንነት ወረቐት የብሉን፡ ወይ ትሕቲ 18 እዩ? እንተኾይኑ ኣይትሽጠሉ፡ ትሑት ድማ ኩን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ኣልኮል ወይ ትምባኾ ንዕድሚኡ ትሕቲ 18 ዝኾነ ሰብ ክትሸጢ ኣይፍቀደክን፡ እዚ ሕጊ እዩ። ብዛዕባ ዕድመ እቲ ዓሚል ርግጸኛ ኣይኮንክን ዲኺ? መንነት ወረቐቱ ሕተቲ። ብዙሓት ድኳናት ካብ 25 ዝንእስ ዝመስል ኩሉ ሰብ መንነት ወረቐት ይሓቱ። መንነት ወረቐት የብሉን፡ ወይ ትሕቲ 18 እዩ? እንተኾይኑ ኣይትሽጥሉ፡ ትሕትቲ ድማ ኩኒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.checkout.p': 'ብዘይ መንነት ወረቐት እዚ ክሸጥ ኣይፍቀደለይን።',
    'c.checkout.s': { m: 'ሓደ መንእሰይ ቢራ ክገዝእ ይደሊ። ዕድሚኡ 17 ዝኸውን ይመስል። 19 ዓመት ከም ዝኾነ ይብል፡ ግን መንነት ወረቐት ሒዙ ኣይመጸን። እንታይ ትገብር?', f: 'ሓደ መንእሰይ ቢራ ክገዝእ ይደሊ። ዕድሚኡ 17 ዝኸውን ይመስል። 19 ዓመት ከም ዝኾነ ይብል፡ ግን መንነት ወረቐት ሒዙ ኣይመጸን። እንታይ ትገብሪ?', x: 'ሓደ መንእሰይ ቢራ ክገዝእ ይደሊ። ዕድሚኡ 17 ዝኸውን ይመስል። 19 ዓመት ከም ዝኾነ ይብል፡ ግን መንነት ወረቐት ሒዙ ኣይመጸን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.checkout.o1': { m: 'ብዘይ መንነት ወረቐት ከም ዘይትሸጠሉ ንገሮ።', f: 'ብዘይ መንነት ወረቐት ከም ዘይትሸጥሉ ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.checkout.o2': { m: '19 ዓመት እየ ስለ ዝበለ ሽጠሉ።', f: '19 ዓመት እየ ስለ ዝበለ ሽጥሉ።' },
    'c.checkout.o3': { m: 'ሽጠሉ፡ ግን ሓንቲ ጣሳ ጥራይ።', f: 'ሽጥሉ፡ ግን ሓንቲ ጣሳ ጥራይ።' },
    'c.checkout.w': { m: 'ብዘይ መንነት ወረቐት ዕድሚኡ ክትፈልጥ ኣይትኽእልን ኢኻ። ንዕድሚኡ ትሕቲ 18 ዝኾነ ሰብ ኣልኮል ምሻጥ ሕጊ ይጥሕስ፡ እቲ ድኳን ድማ ክቕጻዕ ይኽእል።', f: 'ብዘይ መንነት ወረቐት ዕድሚኡ ክትፈልጢ ኣይትኽእሊን ኢኺ። ንዕድሚኡ ትሕቲ 18 ዝኾነ ሰብ ኣልኮል ምሻጥ ሕጊ ይጥሕስ፡ እቲ ድኳን ድማ ክቕጻዕ ይኽእል።' },
    'c.counting': 'Vijfentwintig: ቅድም 5፡ ደሓር 20', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.b': 'ብሆላንድኛ፡ ካብ 0 ክሳብ 12 ነፍሲ ወከፍ ቁጽሪ ናቱ ቃል ኣለዎ: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf። ካብ 13 ክሳብ 19 ብ -tien ይውድኡ: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien። ዓሰርተታት ብ -tig ይውድኡ: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig። ካብ 21 ክሳብ 99 እቲ ናይ መወዳእታ ኣሃዝ ቅድም ይበሃል: 25 vijfentwintig እዩ፡ «ሓሙሽተን ዕስራን»። ስለዚ 47 zevenenveertig እዩ፡ 74 ድማ vierenzeventig። Dertien ምስ dertig ዳርጋ ሓደ ይመስሉ፡ ክሳብ መወዳእታ ምስማዕ ኣገዳሲ እዩ። ጥርጥር ኣሎ ድዩ? ነቶም ኣሃዛት ሓደ ብሓደ ምድጋም ይሕግዝ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.p': 'ኣርባዕተ፡ ሸውዓተ? ስለዚ ኣርብዓን ሸውዓተን?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.s': 'ተቖጻጻሪ «Ga naar gang zevenenveertig.» ይብል። ኣየናይ መተላለዪ እዩ?', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o1': 'መተላለዪ 47።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o2': 'መተላለዪ 74።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.o3': 'መተላለዪ 40።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.counting.w': '«Zevenenveertig» ማለት «ሸውዓተን ኣርብዓን» እዩ: ቅድም 7፡ ደሓር 40። ስለዚ መተላለዪ 47 እዩ። ብዙሓት ሓደስቲ ሰራሕተኛታት 74 ይሰምዑ፡ ናብ ጌጋ መተላለዪ ድማ ይኸዱ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours': '«Half acht» ማለት 7:30 እዩ',
    'c.hours.b': { m: 'ብሆላንድኛ «half» ናብቲ ዝቕጽል ሰዓት ይቑጸር፡ half acht ማለት 7:30 እዩ፡ 8:30 ኣይኮነን። Kwart over acht ማለት 8:15፡ kwart voor acht ድማ 7:45 እዩ። ሰዓታትካ ባዕልኻ ተቘጻጸር፡ ሰዓት መወዳእታ ጎድል ሰዓት መጀመርታ፡ ጎድል እቲ ዕረፍቲ። ዕረፍቲ መብዛሕትኡ ግዜ ኣይክፈልን እዩ። ሰዓታትካ መዓልታዊ ጽሓፍ።', f: 'ብሆላንድኛ «half» ናብቲ ዝቕጽል ሰዓት ይቑጸር፡ half acht ማለት 7:30 እዩ፡ 8:30 ኣይኮነን። Kwart over acht ማለት 8:15፡ kwart voor acht ድማ 7:45 እዩ። ሰዓታትኪ ባዕልኺ ተቘጻጸሪ፡ ሰዓት መወዳእታ ጎድል ሰዓት መጀመርታ፡ ጎድል እቲ ዕረፍቲ። ዕረፍቲ መብዛሕትኡ ግዜ ኣይክፈልን እዩ። ሰዓታትኪ መዓልታዊ ጽሓፊ።', x: 'ብሆላንድኛ «half» ናብቲ ዝቕጽል ሰዓት ይቑጸር፡ half acht ማለት 7:30 እዩ፡ 8:30 ኣይኮነን። Kwart over acht ማለት 8:15፡ kwart voor acht ድማ 7:45 እዩ። ሰዓታትኩም ባዕልኹም ተቘጻጸሩ፡ ሰዓት መወዳእታ ጎድል ሰዓት መጀመርታ፡ ጎድል እቲ ዕረፍቲ። ዕረፍቲ መብዛሕትኡ ግዜ ኣይክፈልን እዩ። ሰዓታትኩም መዓልታዊ ጽሓፉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.p': '«Half acht»? ማለት ቅድሚ ሰዓት 8:00 ፍርቂ ሰዓት?',
    'c.hours.s': { m: 'ተቖጻጻሪኻ «Morgen begin je om half negen.» ይብለካ። ጽባሕ ኣብ ክንደይ ሰዓት ትጅምር?', f: 'ተቖጻጻሪኺ «Morgen begin je om half negen.» ይብለኪ። ጽባሕ ኣብ ክንደይ ሰዓት ትጅምሪ?', x: 'ተቖጻጻሪኹም «Morgen begin je om half negen.» ይብለኩም። ጽባሕ ኣብ ክንደይ ሰዓት ትጅምሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.o1': 'ኣብ 8:30።',
    'c.hours.o2': 'ኣብ 9:30።',
    'c.hours.o3': 'ኣብ 8:00።',
    'c.hours.w': '«Half negen» ማለት ቅድሚ ሰዓት 9:00 ፍርቂ ሰዓት፡ 8:30 እዩ። ብዙሓት ሓደስቲ መጻእቲ 9:30 ይመስሎም፡ ሓደ ሰዓት ድማ ደንጕዮም ይመጹ።',
    'c.measures': { m: 'ብብልሓት ቍጸር፡ ልክዕ፡ ኣይትገምት', f: 'ብብልሓት ቍጸሪ፡ ልክዒ፡ ኣይትገምቲ', x: 'ብብልሓት ቍጸሩ፡ ልክዑ፡ ኣይትገምቱ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.b': { m: 'ብዙሓት ሳጹናት ትቖጽር ዲኻ? ኣብ ሓደ ደርቢ ዘለዉ ሳጹናት ቍጸር፡ ብዝሒ ደርብታት ድማ ቍጸር። ድሕሪኡ ኣባዝሕ፡ ኣብ ሓደ ደርቢ 8 ሳጹናትን 5 ደርብታትን 40 ሳጹናት እዩ። ብመጽረዪ ኬሚካል፡ ነቲ ኣብ ኤቲኬት ዝተጻሕፈ መጠን ልክዕ። ዝበዝሐ ዝሓይሽ ኣይኮነን፡ ንቖርበትካ ክጎድእ ይኽእል፡ ገንዘብ ድማ የኽስር። ብዛዕባ ሓደ ቍጽሪ ርግጸኛ ኣይኮንካን? እንደገና ቍጸር፡ ወይ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ብዙሓት ሳጹናት ትቖጽሪ ዲኺ? ኣብ ሓደ ደርቢ ዘለዉ ሳጹናት ቍጸሪ፡ ብዝሒ ደርብታት ድማ ቍጸሪ። ድሕሪኡ ኣባዝሒ፡ ኣብ ሓደ ደርቢ 8 ሳጹናትን 5 ደርብታትን 40 ሳጹናት እዩ። ብመጽረዪ ኬሚካል፡ ነቲ ኣብ ኤቲኬት ዝተጻሕፈ መጠን ልክዒ። ዝበዝሐ ዝሓይሽ ኣይኮነን፡ ንቖርበትኪ ክጎድእ ይኽእል፡ ገንዘብ ድማ የኽስር። ብዛዕባ ሓደ ቍጽሪ ርግጸኛ ኣይኮንክን? እንደገና ቍጸሪ፡ ወይ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.measures.p': 'ክልተ ግዜ ቈጺረዮ።',
    'c.measures.s': { m: 'ሓደ ፓለት 6 ደርብታት ኣለዎ። ኣብ ነፍሲ ወከፍ ደርቢ 8 ሳጹናት ኣለዉ። ተቖጻጻሪኻ ክንደይ ሳጹናት ከም ዘለዉ ይሓተካ። እንታይ ትብል?', f: 'ሓደ ፓለት 6 ደርብታት ኣለዎ። ኣብ ነፍሲ ወከፍ ደርቢ 8 ሳጹናት ኣለዉ። ተቖጻጻሪኺ ክንደይ ሳጹናት ከም ዘለዉ ይሓተኪ። እንታይ ትብሊ?', x: 'ሓደ ፓለት 6 ደርብታት ኣለዎ። ኣብ ነፍሲ ወከፍ ደርቢ 8 ሳጹናት ኣለዉ። ተቖጻጻሪኹም ክንደይ ሳጹናት ከም ዘለዉ ይሓተኩም። እንታይ ትብሉ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.measures.o1': '48 ሳጹናት።',
    'c.measures.o2': '14 ሳጹናት።',
    'c.measures.o3': 'ዳርጋ 50፡ ይመስለኒ።',
    'c.measures.w': '6 ደርብታት ናይ 8 ሳጹናት፡ 6 ብ 8 ማለት እዩ፡ 48። ሓደ ደርቢ ምቍጻርን ምብዛሕን ቅልጡፍ እዩ፡ ልክዕ ቍጽሪ ድማ ካብ ግምት ይሓይሽ።',
    'u.ai': 'ብልሒ ዘለዎም ኣፕታትን AIን',
    'l.aihelp': 'AI ከም ሓጋዚ',
    'w.ai': 'ሰብ-ሰርሖ ኣእምሮ (AI)',
    'w.chatbot': 'ቻትቦት (ክትጽሕፈሉ እትኽእል ኣፕ)',
    'w.antwoord': 'መልሲ',
    'w.meekijken': 'ምስ ካልእ ሰብ ብሓባር ምርኣይ፡ ብሓባር ምፍታሽ',
    'w.kloppen': 'ቅኑዕ ምዃን',
    'w.zeker': 'ርግጸኛ',
    's.aihelp.1': 'ነዚ ደብዳቤ ክትገልጾ ትኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.aihelp.2': 'እዚ መልሲ ቅኑዕ ድዩ?',
    's.aihelp.3': 'ምሳይ ሓንሳብ ክትርእይዎ ትኽእሉ ዶ?',
    'c.aihelp.q': { m: 'ነዚ ባዕልኻ ዲኻ ጽሒፍካዮ?', f: 'ነዚ ባዕልኺ ዲኺ ጽሒፍክዮ?' },
    'c.aihelp.a': 'እወ፡ ብሓገዝ AI።',
    'l.aiprivate': 'ዘይከፋፈል ሓበሬታ',
    'w.persoonlijk': 'ውልቃዊ',
    'w.gegevens': 'ሓበሬታ (ስም፡ ኣድራሻ፡ ቁጽሪ)',
    'w.wachtwoord': 'መሕለፊ ቃል (password)',
    'w.typen': 'ምጽሓፍ (ብመጽሓፊ ቁልፍታት)',
    'w.opslaan': 'ምዕቃብ፡ ምቕማጥ',
    'w.inloggen': 'ናብ ሕሳብ ምእታው',
    's.aiprivate.1': 'ኣስማት ዓማዊል ኣይካፈልን እየ።',
    's.aiprivate.2': 'ንስራሐይ AI ክጥቀም ይፍቀደለይ ዶ?',
    's.aiprivate.3': 'መሕለፊ ቃለይ ምስጢር እዩ።',
    'c.aiprivate.q': { m: 'እዚ ኣብቲ ቻትቦት ኣእትዎ።', f: 'እዚ ኣብቲ ቻትቦት ኣእትዊዮ።' },
    'c.aiprivate.a': 'ይሓይሽ ኣይፋል፡ ኣስማት ዓማዊል ኣለውዎ።',
    'l.aifake': 'ናይ ሓሶት ድዩ ናይ ሓቂ?',
    'w.echt': 'ናይ ሓቂ',
    'w.stem': 'ድምጺ',
    'w.filmpje': 'ቪድዮ',
    'w.ophangen': 'ስልኪ ምዕጻው',
    'w.nummer': 'ቁጽሪ (ስልኪ)',
    'w.haast': 'ህጹጽነት፡ ምህዋኽ',
    's.aifake.1': 'እዚ ናይ ሓቂ ድዩ ናይ ሓሶት?',
    's.aifake.2': 'ስልኪ ዓጽየ ባዕለይ መሊሰ እድውል።',
    's.aifake.3': 'ገንዘብ ኣይሰድድን እየ።',
    'c.aifake.q': { m: 'ሰላም፡ እዚ ሓድሽ ቁጽረይ እዩ። ቀልጢፍካ ገንዘብ ክትሰድደለይ ትኽእል ዶ?', f: 'ሰላም፡ እዚ ሓድሽ ቁጽረይ እዩ። ቀልጢፍኪ ገንዘብ ክትሰድድለይ ትኽእሊ ዶ?' },
    'c.aifake.a': 'ቅድም ናብቲ ናይ ቀደም ቁጽሪ እድውል።',
    'l.aiplan': 'ኣፕ ክውስን ከሎ',
    'w.planning': 'መደብ ስራሕ',
    'w.mens': 'ሰብ',
    'w.computer': 'ኮምፒተር',
    'w.tempo': 'ቅልጣፈ (ስራሕ)',
    'w.automatisch': 'ባዕሉ ዝሰርሕ፡ ኣውቶማቲክ',
    'w.besluit': 'ውሳነ',
    's.aiplan.1': 'ነዚ ውሳነ መን ወሲንዎ?',
    's.aiplan.2': 'ምስ ሰብ ክዛረብ እደሊ።',
    's.aiplan.3': 'ስለምንታይ ኣብ መደብ ስራሐይ ውሑድ ሰዓታት ኣለዉኒ?',
    'c.aiplan.q': { m: 'እቲ ኣፕ መደብ ስራሕካ ኣዳልዩ።', f: 'እቲ ኣፕ መደብ ስራሕኪ ኣዳልዩ።', x: 'እቲ ኣፕ መደብ ስራሕኩም ኣዳልዩ።' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.aiplan.a': 'ብዛዕባኡ ምስ ሰብ ክዛረብ እኽእል ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.aihelp': 'AI ይሕግዝ፡ ሰብ የረጋግጽ',
    'c.aihelp.b': { m: 'ኣፕታት AIን ቻትቦታትን፡ ከም ChatGPT፡ ክተርጉሙ፡ ደብዳበ ክገልጹ ወይ መልእኽቲ ክትጽሕፍ ክሕግዙኻ ይኽእሉ። እዚ ጠቓሚ እዩ። ግን AI ሓደ ሓደ ግዜ ይጋገ፡ ኮይኑ ግን ኣዝዩ ርግጸኛ ይመስል። ብዛዕባ ውዕልካ፡ ደሞዝካ፡ መድሃኒት ወይ ድሕንነት ድዩ? ሽዑ ኩሉ ግዜ ነቲ መልሲ ምስ ሰብ ኣረጋግጾ። ንኣብነት ምስ ተቖጻጻሪኻ፡ ክፍሊ ሰብኣዊ ሃብቲ (HR) ወይ Juridisch Loket።', f: 'ኣፕታት AIን ቻትቦታትን፡ ከም ChatGPT፡ ክተርጉሙ፡ ደብዳበ ክገልጹ ወይ መልእኽቲ ክትጽሕፊ ክሕግዙኺ ይኽእሉ። እዚ ጠቓሚ እዩ። ግን AI ሓደ ሓደ ግዜ ይጋገ፡ ኮይኑ ግን ኣዝዩ ርግጸኛ ይመስል። ብዛዕባ ውዕልኪ፡ ደሞዝኪ፡ መድሃኒት ወይ ድሕንነት ድዩ? ሽዑ ኩሉ ግዜ ነቲ መልሲ ምስ ሰብ ኣረጋግጽዮ። ንኣብነት ምስ ተቖጻጻሪኺ፡ ክፍሊ ሰብኣዊ ሃብቲ (HR) ወይ Juridisch Loket።' },
    'c.aihelp.p': 'እዚ ቅኑዕ ድዩ? ምሳይ ሓንሳብ ክትርእይዎ ትኽእሉ ዶ?',
    'c.aihelp.s': { m: 'ንሓደ ቻትቦት ብዛዕባ ውዕልካ ትሓትቶ። ገንዘብ ዕረፍቲ (vakantiegeld) ከም ዘይትረክብ ይብለካ። እንታይ ትገብር?', f: 'ንሓደ ቻትቦት ብዛዕባ ውዕልኪ ትሓትትዮ። ገንዘብ ዕረፍቲ (vakantiegeld) ከም ዘይትረኽቢ ይብለኪ። እንታይ ትገብሪ?' },
    'c.aihelp.o1': { m: 'HR ወይ Juridisch Loket ክርእይዎ ሕተቶም።', f: 'HR ወይ Juridisch Loket ክርእይዎ ሕተትዮም።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aihelp.o2': { m: 'እመኖ፡ እቲ ቻትቦት ኣዝዩ ርግጸኛ ይመስል።', f: 'እመንዮ፡ እቲ ቻትቦት ኣዝዩ ርግጸኛ ይመስል።' },
    'c.aihelp.o3': { m: 'ገለ ኣይትበል፡ ረስዖ።', f: 'ገለ ኣይትበሊ፡ ረስዕዮ።' },
    'c.aihelp.w': 'ቻትቦት ብዛዕባ ሕግታትን ውዕላትን ክጋገ ይኽእል። ኣብ ሆላንድ ዳርጋ ኩሉ ሰራሕተኛ ገንዘብ ዕረፍቲ ይረክብ። ሕግታት ዝፈልጥ ሰብ ከረጋግጾ ይኽእል።',
    'c.aiprivate': 'ቅድሚ ምጽሓፍ ምሕሳብ',
    'c.aiprivate.b': { m: 'ኣብ ቻትቦት እትጽሕፎ ነገር ክዕቀብን በቲ ዝሰርሖ ትካል ክጥቀመሉን ይኽእል። ስለዚ BSNካ፡ መሕለፊ ቃል ወይ ሓበሬታ ባንክኻ ፈጺምካ ኣይትጽሓፍ። ኣስማት ወይ ስእልታት ዓማዊል፡ ሕሙማት ወይ መሳርሕቲ፡ ወይ ወረቓቕቲ ስራሕ ኣይተእቱ። ብዙሓት ኣስራሕቲ ብዛዕባ AI ሕግታት ኣለዎም። ንስራሕካ ክትጥቀመሉ ይፍቀደልካ እንተኾይኑ ቅድም ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ኣብ ቻትቦት እትጽሕፍዮ ነገር ክዕቀብን በቲ ዝሰርሖ ትካል ክጥቀመሉን ይኽእል። ስለዚ BSNኪ፡ መሕለፊ ቃል ወይ ሓበሬታ ባንክኺ ፈጺምኪ ኣይትጽሓፊ። ኣስማት ወይ ስእልታት ዓማዊል፡ ሕሙማት ወይ መሳርሕቲ፡ ወይ ወረቓቕቲ ስራሕ ኣይተእትዊ። ብዙሓት ኣስራሕቲ ብዛዕባ AI ሕግታት ኣለዎም። ንስራሕኪ ክትጥቀምሉ ይፍቀደልኪ እንተኾይኑ ቅድም ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።' },
    'c.aiprivate.p': 'ነዚ AI ክጥቀም ይፍቀደለይ ዶ?',
    'c.aiprivate.s': { m: 'ቻትቦት ብዛዕባ ሓደ ዓሚል ጸብጻብ ክጽሕፈልካ ትደሊ። ኣብቲ ጸብጻብ ስምን ኣድራሻን ናይቲ ዓሚል ኣሎ። እንታይ ትገብር?', f: 'ቻትቦት ብዛዕባ ሓደ ዓሚል ጸብጻብ ክጽሕፈልኪ ትደልዪ። ኣብቲ ጸብጻብ ስምን ኣድራሻን ናይቲ ዓሚል ኣሎ። እንታይ ትገብሪ?' },
    'c.aiprivate.o1': { m: 'ቅድም ሕተት፡ ነቲ ስምን ኣድራሻን ድማ ኣውጽኦ።', f: 'ቅድም ሕተቲ፡ ነቲ ስምን ኣድራሻን ድማ ኣውጽእዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiprivate.o2': { m: 'ኩሉ ኣብቲ ቻትቦት ኣእትዎ፡ ዝቐልጠፈ እዩ።', f: 'ኩሉ ኣብቲ ቻትቦት ኣእትዊዮ፡ ዝቐልጠፈ እዩ።' },
    'c.aiprivate.o3': { m: 'ነቲ ጸብጻብ ክርእዮ ናብ ዓርክኻ ስደዶ።', f: 'ነቲ ጸብጻብ ክርእዮ ናብ ዓርክኺ ስደድዮ።' },
    'c.aiprivate.w': { m: 'ስምን ኣድራሻን ውልቃዊ ሓበሬታ እዮም። ብቐሊሉ ናብ ካልእ ትካል ክኸዱ ኣይግባእን። ኣስራሒኻ ኣየኖት ኣፕታት ከም ዝፍቀዱ ይፈልጥ።', f: 'ስምን ኣድራሻን ውልቃዊ ሓበሬታ እዮም። ብቐሊሉ ናብ ካልእ ትካል ክኸዱ ኣይግባእን። ኣስራሒኺ ኣየኖት ኣፕታት ከም ዝፍቀዱ ይፈልጥ።', x: 'ስምን ኣድራሻን ውልቃዊ ሓበሬታ እዮም። ብቐሊሉ ናብ ካልእ ትካል ክኸዱ ኣይግባእን። ኣስራሒኹም ኣየኖት ኣፕታት ከም ዝፍቀዱ ይፈልጥ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake': 'ናይ ሓሶት ድምጽታትን ቪድዮታትን',
    'c.aifake.b': { m: 'ብAI ገበነኛታት ድምጺ ክቐድሑ፡ ናይ ሓሶት ስእልታትን ቪድዮታትን ክሰርሑ ይኽእሉ። ከም ሓላፊኻ፡ ባንክኻ ወይ ሓደ ካብ ስድራኻ ዝመስል ጻውዒት ወይ መልእኽቲ ናይ ሓሶት ክኸውን ይኽእል። ህጹጽነት፡ ገንዘብን ሓድሽ ቁጽርን ምስ ዝህሉ ተጠንቀቕ። ስልኪ ዕጸው፡ ናብቲ እትፈልጦ ቁጽሪ ባዕልኻ ደውል። ናይ ሓቂ ባንክ፡ ኣስራሒ ወይ ፖሊስ ኮዳትካ ፈጺሞም ኣይሓቱን።', f: 'ብAI ገበነኛታት ድምጺ ክቐድሑ፡ ናይ ሓሶት ስእልታትን ቪድዮታትን ክሰርሑ ይኽእሉ። ከም ሓላፊኺ፡ ባንክኺ ወይ ሓደ ካብ ስድራኺ ዝመስል ጻውዒት ወይ መልእኽቲ ናይ ሓሶት ክኸውን ይኽእል። ህጹጽነት፡ ገንዘብን ሓድሽ ቁጽርን ምስ ዝህሉ ተጠንቀቒ። ስልኪ ዕጸዊ፡ ናብቲ እትፈልጥዮ ቁጽሪ ባዕልኺ ደውሊ። ናይ ሓቂ ባንክ፡ ኣስራሒ ወይ ፖሊስ ኮዳትኪ ፈጺሞም ኣይሓቱን።' },
    'c.aifake.p': 'ስልኪ ዓጽየ ባዕለይ መሊሰ እድውል።',
    'c.aifake.s': { m: 'ስልክኻ ይድውል። ልክዕ ከም ድምጺ ሓላፊኻ ዝመስል ድምጺ «ነዚ ፋክቱር ሕጂ ክፈል፡ ህጹጽ እዩ» ይብለካ። እንታይ ትገብር?', f: 'ስልክኺ ይድውል። ልክዕ ከም ድምጺ ሓላፊኺ ዝመስል ድምጺ «ነዚ ፋክቱር ሕጂ ክፈሊ፡ ህጹጽ እዩ» ይብለኪ። እንታይ ትገብሪ?', x: 'ስልክኹም ይድውል። ልክዕ ከም ድምጺ ሓላፊኹም ዝመስል ድምጺ «ነዚ ፋክቱር ሕጂ ክፈሉ፡ ህጹጽ እዩ» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o1': { m: 'ስልኪ ዕጸው፡ ባዕልኻ ንሓላፊኻ ደውል።', f: 'ስልኪ ዕጸዊ፡ ባዕልኺ ንሓላፊኺ ደውሊ።', x: 'ስልኪ ዕጸዉ፡ ባዕልኹም ንሓላፊኹም ደውሉ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o2': { m: 'ቀልጢፍካ ክፈል፡ ሓላፊኻ እዩ።', f: 'ቀልጢፍኪ ክፈሊ፡ ሓላፊኺ እዩ።', x: 'ቀልጢፍኩም ክፈሉ፡ ሓላፊኹም እዩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.o3': { m: 'ሓላፊኻ ክኸፍል ምእንቲ ኮድ ባንክኻ ሃብ።', f: 'ሓላፊኺ ክኸፍል ምእንቲ ኮድ ባንክኺ ሃቢ።', x: 'ሓላፊኹም ክኸፍል ምእንቲ ኮድ ባንክኹም ሃቡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aifake.w': { m: 'ድምጺ ብAI ክቕዳሕ ይኽእል። ህጹጽነትን ገንዘብን ብሓባር ምልክት ሓደጋ እዩ። ናብ እትፈልጦ ቁጽሪ መሊስካ ምድዋል ቅልጡፍን ውሑስን መረጋገጺ እዩ።', f: 'ድምጺ ብAI ክቕዳሕ ይኽእል። ህጹጽነትን ገንዘብን ብሓባር ምልክት ሓደጋ እዩ። ናብ እትፈልጥዮ ቁጽሪ መሊስኪ ምድዋል ቅልጡፍን ውሑስን መረጋገጺ እዩ።' },
    'c.aiplan': 'እዚ መን ወሲንዎ?',
    'c.aiplan.b': { m: 'ብዙሓት ትካላት ብዝያዳ ውሳነታት ብኣፕ ወይ ብኮምፒተር የሕልፉ። ንኣብነት መደብ ስራሕ የዳልው ወይ ቅልጣፈኻ ብስካነር ይዕቅን። ብዛዕባኻ እንታይ ሓበሬታ ከም ዝእከብ ክትሓትት ትኽእል ኢኻ። ብዛዕባኻ ዓቢ ውሳነ ኣሎ ድዩ፡ ከም ውሑድ ሰዓታት፡ መጠንቀቕታ ወይ ካብ ስራሕ ምስጓግ? መን ከም ዝወሰኖ ሕተት። እቲ ውሳነ ኮምፒተር ባዕሉ ጥራይ ድዩ ወሲንዎ? ሽዑ ሰብ ደጊሙ ክርእዮን ክገልጸልካን ክትሓትት ትኽእል ኢኻ። ሰዓታት ስራሕካ ባዕልኻ ጽሓፍ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ብዙሓት ትካላት ብዝያዳ ውሳነታት ብኣፕ ወይ ብኮምፒተር የሕልፉ። ንኣብነት መደብ ስራሕ የዳልው ወይ ቅልጣፈኺ ብስካነር ይዕቅን። ብዛዕባኺ እንታይ ሓበሬታ ከም ዝእከብ ክትሓትቲ ትኽእሊ ኢኺ። ብዛዕባኺ ዓቢ ውሳነ ኣሎ ድዩ፡ ከም ውሑድ ሰዓታት፡ መጠንቀቕታ ወይ ካብ ስራሕ ምስጓግ? መን ከም ዝወሰኖ ሕተቲ። እቲ ውሳነ ኮምፒተር ባዕሉ ጥራይ ድዩ ወሲንዎ? ሽዑ ሰብ ደጊሙ ክርእዮን ክገልጸልኪን ክትሓትቲ ትኽእሊ ኢኺ። ሰዓታት ስራሕኪ ባዕልኺ ጽሓፊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.aiplan.p': 'ሰብ ነዚ ክርእዮ ይኽእል ዶ?',
    'c.aiplan.s': { m: 'ኣፕ መደብ ስራሕ ኣብ ዝመጽእ ወርሒ ኣዝዩ ውሑድ ሰዓታት ይህበካ። ስለምንታይ ዝብለካ የለን። እንታይ ትገብር?', f: 'ኣፕ መደብ ስራሕ ኣብ ዝመጽእ ወርሒ ኣዝዩ ውሑድ ሰዓታት ይህበኪ። ስለምንታይ ዝብለኪ የለን። እንታይ ትገብሪ?', x: 'ኣፕ መደብ ስራሕ ኣብ ዝመጽእ ወርሒ ኣዝዩ ውሑድ ሰዓታት ይህበኩም። ስለምንታይ ዝብለኩም የለን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.o1': { m: 'ሰብ ክገልጸልካ ሕተት።', f: 'ሰብ ክገልጸልኪ ሕተቲ።', x: 'ሰብ ክገልጸልኩም ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.aiplan.o2': { m: 'ተቐበሎ፡ እቲ ኣፕ ኩሉ ግዜ ቅኑዕ እዩ።', f: 'ተቐበልዮ፡ እቲ ኣፕ ኩሉ ግዜ ቅኑዕ እዩ።' },
    'c.aiplan.o3': { m: 'ነቲ ኣብቲ ኣፕ ዘሎ ቻትቦት ስለምንታይ ኢልካ ሕተቶ።', f: 'ነቲ ኣብቲ ኣፕ ዘሎ ቻትቦት ስለምንታይ ኢልኪ ሕተትዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.aiplan.w': { m: 'ኣፕታት ይጋገዩ፡ ብዛዕባኻ ድማ ኩሉ ኣይፈልጡን። መግለጺ ክትሓትት ትኽእል ኢኻ፡ ሰብ ድማ ደጊሙ ክርእዮ ይኽእል።', f: 'ኣፕታት ይጋገዩ፡ ብዛዕባኺ ድማ ኩሉ ኣይፈልጡን። መግለጺ ክትሓትቲ ትኽእሊ ኢኺ፡ ሰብ ድማ ደጊሙ ክርእዮ ይኽእል።', x: 'ኣፕታት ይጋገዩ፡ ብዛዕባኹም ድማ ኩሉ ኣይፈልጡን። መግለጺ ክትሓትቱ ትኽእሉ ኢኹም፡ ሰብ ድማ ደጊሙ ክርእዮ ይኽእል።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'u.kas': 'ኣብ ገዛ ኣትክልቲ', // nagelezen (2e lezing)
    'l.harvest': 'ምእራይን ምፍላይን', // nagelezen (2e lezing)
    'w.kas': 'ገዛ ኣትክልቲ (ናይ መስተዋት ወይ ፕላስቲክ ገዛ ንኣትክልቲ)', // nagelezen (2e lezing)
    'w.gewas': 'ዘራእቲ (ዝበቝሉ ኣትክልቲ)', // nagelezen (2e lezing)
    'w.rij': 'መስርዕ (ናይ ኣትክልቲ)', // nagelezen (2e lezing)
    'w.oogsten': 'ምእራይ', // nagelezen (2e lezing)
    'w.sorteren': 'ምፍላይ (ብዓይነት ምስራዕ)', // nagelezen (2e lezing)
    'w.krat': 'ሳጹን (ናይ ፕላስቲክ)', // nagelezen (2e lezing)
    's.harvest.1': 'ኣብ ገዛ ኣትክልቲ እሰርሕ።', // nagelezen (2e lezing)
    's.harvest.2': 'ኣብ ኣየናይ መስርዕ እጅምር?', // nagelezen (2e lezing)
    's.harvest.3': 'እቲ ሳጹን መሊኡ።', // nagelezen (2e lezing)
    'c.harvest.q': { m: 'ክንደይ መስርዕ ወዲእካ?', f: 'ክንደይ መስርዕ ወዲእኪ?', x: 'ክንደይ መስርዕ ወዲእኩም?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.harvest.a': 'ኣርባዕተ። ገና ክልተ ተሪፎም።', // nagelezen (2e lezing)
    'l.greensafe': 'ብድሕንነት ኣብ ገዛ ኣትክልቲ', // nagelezen (2e lezing)
    'w.spuitmiddelen': 'መድሃኒት ኣትክልቲ (ኣብ ኣትክልቲ ዝንስነስ ኬሚካል)', // nagelezen (2e lezing)
    'w.bespoten': 'ዝተነስነሰ (ብመድሃኒት ኣትክልቲ)', // nagelezen (2e lezing)
    'w.plukkar': 'ናይ ምእራይ ዓረብያ', // nagelezen (2e lezing)
    'w.bukken': 'ምድናን', // nagelezen (2e lezing)
    'w.drinken': 'ምስታይ', // nagelezen (2e lezing)
    'w.hitte': 'ሃሩር (ኣዝዩ ምስ ዝውዕይ)', // nagelezen (2e lezing)
    's.greensafe.1': 'እዚ ገዛ ኣትክልቲ ተነስኒሱ ድዩ?', // nagelezen (2e lezing)
    's.greensafe.2': 'ቁሩብ ማይ ክሰቲ እኸይድ።', // nagelezen (2e lezing)
    's.greensafe.3': 'እታ ናይ ምእራይ ዓረብያ ኣበይ ኣላ?', // nagelezen (2e lezing)
    'c.greensafe.q': 'ኣብ ገዛ ኣትክልቲ ቁጽሪ ሰለስተ ክሰርሕ ይፍቀደለይ ዶ?', // nagelezen (2e lezing)
    'c.greensafe.a': 'ኣይፋል፡ ገና። ሕጂ እዩ ተነስኒሱ።', // nagelezen (2e lezing)
    'c.harvest': 'ቅልጣፈን ብብዝሒ ዝኽፈል ደሞዝን', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.b': { m: 'ኣብ ገዛ ኣትክልቲ ብዙሕ ግዜ ብዝተወሰነ ቅልጣፈ (tempo) ትሰርሕ። ገለ ኣስራሕቲ ብሳጹን፡ ብመስርዕ ወይ ብኪሎ ይኸፍሉ፡ እዚ ብብዝሒ ዝኽፈል ደሞዝ (stukloon) እዩ። ብstukloon እኳ እንተ ኾነ፡ ንዝሰራሕካዮ ነፍሲ ወከፍ ሰዓት እንተ ወሓደ ዝተሓተ ደሞዝ ክትረክብ ኣለካ። እቲ መጠን ኣብ rijksoverheid.nl ርአ። መዓልታዊ ሰዓታትካን ሳጹናትካን ጽሓፍ፡ ምስ ወረቐት ደሞዝካ ድማ ኣወዳድሮም። ቀልጢፍካ ምስራሕ ጽቡቕ እዩ፡ ግን ብድሕንነት ምስራሕ ይቕድም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።', f: 'ኣብ ገዛ ኣትክልቲ ብዙሕ ግዜ ብዝተወሰነ ቅልጣፈ (tempo) ትሰርሒ። ገለ ኣስራሕቲ ብሳጹን፡ ብመስርዕ ወይ ብኪሎ ይኸፍሉ፡ እዚ ብብዝሒ ዝኽፈል ደሞዝ (stukloon) እዩ። ብstukloon እኳ እንተ ኾነ፡ ንዝሰራሕክዮ ነፍሲ ወከፍ ሰዓት እንተ ወሓደ ዝተሓተ ደሞዝ ክትረክቢ ኣለኪ። እቲ መጠን ኣብ rijksoverheid.nl ርኣዪ። መዓልታዊ ሰዓታትኪን ሳጹናትኪን ጽሓፊ፡ ምስ ወረቐት ደሞዝኪ ድማ ኣወዳድርዮም። ቀልጢፍኪ ምስራሕ ጽቡቕ እዩ፡ ግን ብድሕንነት ምስራሕ ይቕድም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.p': 'ሎሚ ክንደይ ሳጹን ወዲአ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.harvest.s': { m: 'ብሳጹን ትኽፈል። ኣብዚ ሰሙን ብሰዓት ካብ ዝተሓተ ደሞዝ ዝወሓደ ትረክብ። እንታይ ትገብር?', f: 'ብሳጹን ትኽፈሊ። ኣብዚ ሰሙን ብሰዓት ካብ ዝተሓተ ደሞዝ ዝወሓደ ትረክቢ። እንታይ ትገብሪ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o1': { m: 'ናይ ባዕልኻ ዝርዝር ሰዓታትን ሳጹናትን ኣርኢ።', f: 'ናይ ባዕልኺ ዝርዝር ሰዓታትን ሳጹናትን ኣርእዪ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o2': { m: 'ገለ ኣይትበል፡ ዝያዳ ቀልጢፍካ ስራሕ።', f: 'ገለ ኣይትበሊ፡ ዝያዳ ቀልጢፍኪ ስርሒ።', x: 'ገለ ኣይትበሉ፡ ዝያዳ ቀልጢፍኩም ስርሑ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.o3': { m: 'ተቐበሎ፡ ብstukloon እዚ ንቡር እዩ።', f: 'ተቐበልዮ፡ ብstukloon እዚ ንቡር እዩ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.harvest.w': { m: 'ብstukloon እኳ፡ ንዝሰራሕካዮ ነፍሲ ወከፍ ሰዓት እንተ ወሓደ ዝተሓተ ደሞዝ ክትረክብ ኣለካ። ናይ ባዕልኻ ዝርዝር ሰዓታትን ሳጹናትን እንታይ ከም ዝሰራሕካ ንምርኣይ ይሕግዘካ። እንተ ዘይተኣሪሙ፡ ሓገዝ ሕተት።', f: 'ብstukloon እኳ፡ ንዝሰራሕክዮ ነፍሲ ወከፍ ሰዓት እንተ ወሓደ ዝተሓተ ደሞዝ ክትረክቢ ኣለኪ። ናይ ባዕልኺ ዝርዝር ሰዓታትን ሳጹናትን እንታይ ከም ዝሰራሕኪ ንምርኣይ ይሕግዘኪ። እንተ ዘይተኣሪሙ፡ ሓገዝ ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe': 'ሃሩርን መድሃኒት ኣትክልትን', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.b': { m: 'ኣብ ገዛ ኣትክልቲ ኣዝዩ ክውዕይ ይኽእል፡ ኣብ ጽድያ እውን። ብዙሕ ግዜ ማይ ስተ፡ ቅድሚ ምጽማእካ እውን፡ ዕረፍትኻ ድማ ኣብ ዝዛሓለ ቦታ ውሰድ። ርእሲ ምዝዋር፡ ምምላስ ዘምጽእ ስምዒት ወይ ቃንዛ ርእሲ ይስመዓካ ድዩ? ደው በል፡ ንሓደ ሰብ ድማ ንገሮ። ኣትክልቲ ሓደ ሓደ ግዜ ብኬሚካል (spuitmiddelen) ይንስነሱ። ሕጂ ዝተነስነሰ ገዛ ኣትክልቲ ብዙሕ ግዜ ኣብ ማዕጾኡ ምልክት ኣለዎ። ተቖጻጻሪኻ ውሑስ ምዃኑ ክሳብ ዝነግረካ ኣይትእቶ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ኣብ ገዛ ኣትክልቲ ኣዝዩ ክውዕይ ይኽእል፡ ኣብ ጽድያ እውን። ብዙሕ ግዜ ማይ ስተዪ፡ ቅድሚ ምጽማእኪ እውን፡ ዕረፍትኺ ድማ ኣብ ዝዛሓለ ቦታ ውሰዲ። ርእሲ ምዝዋር፡ ምምላስ ዘምጽእ ስምዒት ወይ ቃንዛ ርእሲ ይስመዓኪ ድዩ? ደው በሊ፡ ንሓደ ሰብ ድማ ንገርዮ። ኣትክልቲ ሓደ ሓደ ግዜ ብኬሚካል (spuitmiddelen) ይንስነሱ። ሕጂ ዝተነስነሰ ገዛ ኣትክልቲ ብዙሕ ግዜ ኣብ ማዕጾኡ ምልክት ኣለዎ። ተቖጻጻሪኺ ውሑስ ምዃኑ ክሳብ ዝነግረኪ ኣይትእተዊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.p': 'ኣብዚ ገዛ ኣትክልቲ ሕጂ ክሰርሕ ይፍቀደለይ ድዩ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.s': { m: 'ሓደ ገዛ ኣትክልቲ ሎሚ ንግሆ ተነስኒሱ። ኣብ ማዕጾ ምልክት ኣሎ። ሓደ ብጻይ ስራሕካ «ንዓ፡ ንሓጺር ግዜ ጥራይ እዩ» ይብል። እንታይ ትገብር?', f: 'ሓደ ገዛ ኣትክልቲ ሎሚ ንግሆ ተነስኒሱ። ኣብ ማዕጾ ምልክት ኣሎ። ሓደ ብጻይ ስራሕኪ «ንዒ፡ ንሓጺር ግዜ ጥራይ እዩ» ይብል። እንታይ ትገብሪ?', x: 'ሓደ ገዛ ኣትክልቲ ሎሚ ንግሆ ተነስኒሱ። ኣብ ማዕጾ ምልክት ኣሎ። ሓደ ብጻይ ስራሕኩም «ንዑ፡ ንሓጺር ግዜ ጥራይ እዩ» ይብል። እንታይ ትገብሩ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.o1': { m: 'ኣብ ደገ ጽናሕ፡ መዓስ ውሑስ ከም ዝኸውን ድማ ሕተት።', f: 'ኣብ ደገ ጽናሒ፡ መዓስ ውሑስ ከም ዝኸውን ድማ ሕተቲ።', x: 'ኣብ ደገ ጽናሑ፡ መዓስ ውሑስ ከም ዝኸውን ድማ ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.greensafe.o2': { m: 'ቀልጢፍካ እቶ፡ ትንፋስካ ድማ ሓዝ።', f: 'ቀልጢፍኪ እተዊ፡ ትንፋስኪ ድማ ሓዚ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.o3': { m: 'እቶ፡ ድሕሪኡ ኣእዳውካ ጽቡቕ ገይርካ ተሓጸብ።', f: 'እተዊ፡ ድሕሪኡ ኣእዳውኪ ጽቡቕ ገይርኪ ተሓጸቢ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.w': { m: 'መድሃኒት ኣትክልቲ ንቖርበትካ፡ ንኣዒንትኻን ንሳንቡእካን ክጎድእ ይኽእል፡ ዋላ ገለ እንተ ዘይሸተተካ። ድሕሪ ምንስናስ፡ ሰባት ደጊሞም ቅድሚ ምእታዎም ናይ ምጽባይ ግዜ ኣሎ። መዓስ ከም ዝውዳእ ተቖጻጻሪኻ ይፈልጥ።', f: 'መድሃኒት ኣትክልቲ ንቖርበትኪ፡ ንኣዒንትኺን ንሳንቡእኪን ክጎድእ ይኽእል፡ ዋላ ገለ እንተ ዘይሸተተኪ። ድሕሪ ምንስናስ፡ ሰባት ደጊሞም ቅድሚ ምእታዎም ናይ ምጽባይ ግዜ ኣሎ። መዓስ ከም ዝውዳእ ተቖጻጻሪኺ ይፈልጥ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): Getallen en gegevens (u.data), l.permit, l.kids, l.body, l.jobends and their tips (30 October 2026).
    'u.data': 'ቁጽርታትን ሓበሬታን', // nagelezen (2e lezing)
    'l.details': { m: 'ሓበሬታኻ', f: 'ሓበሬታኺ', x: 'ሓበሬታኹም' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 28 nov
    'w.voornaam': 'ቀዳማይ ስም', // nagelezen (2e lezing)
    'w.achternaam': 'ስም ስድራ፡ ናይ መወዳእታ ስም', // nagelezen (2e lezing)
    'w.spellen': 'ብፊደል ምባል (ፊደላት ሓደ ብሓደ ምባል)', // nagelezen (2e lezing)
    'w.telefoonnummer': 'ቁጽሪ ተሌፎን', // nagelezen (2e lezing)
    'w.geboortedatum': 'ዕለት ልደት', // nagelezen (2e lezing)
    'w.formulier': 'ቅጥዒ (ዝምላእ ወረቐት ወይ ገጽ)', // nagelezen (2e lezing)
    's.details.1': 'ነዚ ብፊደል ክትብልዎ ትኽእሉ ዶ?', // nagelezen (2e lezing)
    's.details.2': 'ሓድሽ ቁጽሪ ተሌፎነይ እሕብር።', // nagelezen (2e lezing)
    's.details.3': 'እዚ ቅጥዒ ንቤት ጽሕፈት ግብሪ እዩ።', // nagelezen (2e lezing)
    'c.details.q': { m: 'ስም ስድራኻ እንታይ እዩ?', f: 'ስም ስድራኺ እንታይ እዩ?', x: 'ስም ስድራኹም እንታይ እዩ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 28 nov
    'c.details.a': 'Haddad። ብፊደል ክብሎ ዶ?', // nagelezen (2e lezing)
    'l.dates': 'መዓልታትን ዕለታትን', // nagelezen (2e lezing)
    'w.maandag': 'ሰኑይ', // nagelezen (2e lezing)
    'w.week': 'ሰሙን', // nagelezen (2e lezing)
    'w.maand': 'ወርሒ', // nagelezen (2e lezing)
    'w.volgendeweek': 'ዝመጽእ ሰሙን', // nagelezen (2e lezing)
    'w.vorigeweek': 'ዝሓለፈ ሰሙን', // nagelezen (2e lezing)
    'w.totenmet': 'ክሳብ፡ ምስኡ ብምሕዋስ (እታ ናይ መወዳእታ መዓልቲ እውን ትቑጸር)', // nagelezen (2e lezing)
    's.dates.1': 'ካብ ሰኑይ ክሳብ ሓሙስ (ሓሙስ እውን) ክሰርሕ እኽእል።', // nagelezen (2e lezing)
    's.dates.2': 'ኣብ ዝመጽእ ሰሙን ኣርባዕተ መዓልቲ እሰርሕ።', // nagelezen (2e lezing)
    's.dates.3': 'ኣብ ዝሓለፈ ሰሙን ኣርብዓ ሰዓት ሰሪሐ።', // nagelezen (2e lezing)
    'c.dates.q': 'ሎሚ ዕለት ክንደይ እዩ?', // nagelezen (2e lezing)
    'c.dates.a': 'ሰኑይ 3 ሰነ እዩ።', // nagelezen (2e lezing)
    'l.permit': { m: 'ወረቓቕቲ፡ ምውህሃድን ስራሕካን', f: 'ወረቓቕቲ፡ ምውህሃድን ስራሕኪን' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.papieren': 'ወረቓቕቲ (ሰነዳት)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.werkvergunning': 'ፍቓድ ስራሕ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.werknemer': { m: 'ሰራሕተኛ (ንኣስራሒ ትሰርሕ)', f: 'ሰራሕተኛ (ንኣስራሒ ትሰርሒ)', x: 'ሰራሕተኛ (ንኣስራሒ ትሰርሑ)' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.zzper': { m: 'ናይ ርእሱ ሰራሕተኛ (ንርእስኻ ትሰርሕ)', f: 'ናይ ርእሳ ሰራሕተኛ (ንርእስኺ ትሰርሒ)' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.inburgering': 'ምውህሃድ (ትምህርትን ፈተናታትን ንሓደስቲ መጻእቲ)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.taalles': 'ትምህርቲ ቋንቋ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.permit.1': 'ብወረቓቕተይ ኣብዚ ክሰርሕ ይፍቀደለይ ዶ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.permit.2': 'ሰራሕተኛ ድየ ወይስ ናይ ርእሰይ ሰራሕተኛ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.permit.3': 'ብጻውዒት ዝሰርሕ ሰራሕተኛ ኮይነ እሰርሕ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.permit.q': { m: 'ሰሉስ ክትሰርሕ ትኽእል ዶ?', f: 'ሰሉስ ክትሰርሒ ትኽእሊ ዶ?', x: 'ሰሉስ ክትሰርሑ ትኽእሉ ዶ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.a': 'ኣይፋል፡ ሽዑ ትምህርቲ ቋንቋ ኣለኒ። ረቡዕ ግን ይኸኣለኒ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'l.kids': 'ቆልዑን ስራሕን', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.zwanger': 'ነፍሰ ጾር', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.kinderopvang': 'መውዓሊ ህጻናት', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.ophalen': 'ምምጻእ (ንሓደ ሰብ ኬድካ ምውሳድ)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.ziekkind': 'ሕሙም ቆልዓ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.ouderschapsverlof': 'ፍቓድ ወለዲ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.zorgverlof': 'ፍቓድ ክንክን (ንሕሙም ኣባል ስድራ ንምክንኻን ዝውሰድ ግዜ)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.kids.1': 'ቆልዓይ ሓሚሙ። ክወስዶ ኣለኒ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.kids.2': 'ናይ ህጹጽ ኩነታት ፍቓድ ክወስድ ይፍቀደለይ ዶ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.kids.3': 'ኣስራሒይ ደሞዘይ ምኽፋል ይቕጽል ድዩ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.kids.q': { m: 'ስለምንታይ ሕጂ ክትከይድ ኣለካ?', f: 'ስለምንታይ ሕጂ ክትከዲ ኣለኪ?' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.a': 'ካብ መውዓሊ ህጻናት ደዊሎም። ወደይ ረስኒ ኣለዎ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'l.body': 'ኣካልን ቃንዛን', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.hoofd': 'ርእሲ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.rug': { m: 'ሕቖ (ናይ ኣካልካ)', f: 'ሕቖ (ናይ ኣካልኪ)', x: 'ሕቖ (ናይ ኣካልኩም)' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.arm': 'ቅልጽም', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.hand': 'ኢድ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.buik': 'ከብዲ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.oog': 'ዓይኒ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.body.1': 'ኢደይ የቐንዝወኒ ኣሎ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.body.2': 'ጽቡቕ ኣይተሰምዓንን።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.body.3': 'ኣብ ቅልጽመይ ወዲቐ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.q': { m: 'ኣበይ እዩ ዘቐንዝወካ?', f: 'ኣበይ እዩ ዘቐንዝወኪ?', x: 'ኣበይ እዩ ዘቐንዝወኩም?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.a': 'ሕቖይ። ከቢድ ሳጹን ኣልዒለ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'l.jobends': { m: 'ስራሕካ ምስ ዝውዳእ', f: 'ስራሕኪ ምስ ዝውዳእ', x: 'ስራሕኩም ምስ ዝውዳእ' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.eindafrekening': { m: 'ናይ መወዳእታ ክፍሊት (ስራሕ ምስ ተወድአ ናይ መወዳእታ ደሞዝካ)', f: 'ናይ መወዳእታ ክፍሊት (ስራሕ ምስ ተወድአ ናይ መወዳእታ ደሞዝኪ)', x: 'ናይ መወዳእታ ክፍሊት (ስራሕ ምስ ተወድአ ናይ መወዳእታ ደሞዝኩም)' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.opzeggen': 'ምቁራጽ (ውዕል)፡ ምስራዝ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.uitschrijven': { m: 'ምዝገባ ምስራዝ (ስምካ ካብ ዝርዝር ምውጻእ)', f: 'ምዝገባ ምስራዝ (ስምኪ ካብ ዝርዝር ምውጻእ)', x: 'ምዝገባ ምስራዝ (ስምኩም ካብ ዝርዝር ምውጻእ)' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'w.sleutel': 'መፍትሕ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.verhuizen': 'ገዛ ምቕያር (ናብ ካልእ ገዛ ምግዓዝ)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'w.busje': 'ሚኒባስ (ንእሽቶ ኣውቶቡስ)', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.jobends.1': 'ተወሳኺ ክፍሊት ዕረፍተይን ዘይወሰድክዎም መዓልታት ዕረፍትን ይኽፈለኒ ድዩ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.jobends.2': 'ኣብ Juridisch Loket ምኽሪ እሓትት።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    's.jobends.3': 'ሓድሽ መድሕን ጥዕና ባዕለይ ኣዳሉ።', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.jobends.q': { m: 'ስራሕካ ዓርቢ ይውዳእ። ሽዑ ነቲ ገዛ እውን ክትገድፎ ኣለካ።', f: 'ስራሕኪ ዓርቢ ይውዳእ። ሽዑ ነቲ ገዛ እውን ክትገድፍዮ ኣለኪ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.a': 'ግዜ ቅድመ-ምሕባር ናይ ውዕል ክራየይ ክንደይ እዩ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details': { m: 'ሓበሬታኻ፡ ብቕኑዕ ሃቦ', f: 'ሓበሬታኺ፡ ብቕኑዕ ሃብዮ' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.b': { m: 'ኣብ መጀመርታ ስራሕ ሓበሬታኻ ትህብ። ማለት ስምካ፡ ኣድራሻኻ፡ ቁጽሪ ተሌፎንካ፡ ዕለት ልደትካን BSNካን። ስምካ ቀስ ኢልካ ፊደል ብፊደል በሎ። ድሕሪኡ ኣብ ውዕልካን ወረቐት ደሞዝካን ስምካ ኣረጋግጽ። ኣብ ስምካ ወይ BSNካ ዘሎ ጌጋ ኣብ ደሞዝካ ወይ ግብርኻ ጸገም ከምጽእ ይኽእል። ሓድሽ ኣድራሻ ወይ ቁጽሪ ተሌፎን ኣለካ ድዩ? ንኣስራሒኻ ንገሮ።', f: 'ኣብ መጀመርታ ስራሕ ሓበሬታኺ ትህቢ። ማለት ስምኪ፡ ኣድራሻኺ፡ ቁጽሪ ተሌፎንኪ፡ ዕለት ልደትኪን BSNኪን። ስምኪ ቀስ ኢልኪ ፊደል ብፊደል በልዮ። ድሕሪኡ ኣብ ውዕልኪን ወረቐት ደሞዝኪን ስምኪ ኣረጋግጺ። ኣብ ስምኪ ወይ BSNኪ ዘሎ ጌጋ ኣብ ደሞዝኪ ወይ ግብርኺ ጸገም ከምጽእ ይኽእል። ሓድሽ ኣድራሻ ወይ ቁጽሪ ተሌፎን ኣለኪ ድዩ? ንኣስራሒኺ ንገርዮ።' }, // nagelezen AI 22 nov
    'c.details.p': 'ብፊደል ክብሎ፡ A, L, I።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.s': { m: 'ብተሌፎን እቲ ኤጀንሲ ስም ስድራኻ ይጽሕፎ። ብጌጋ ከም ዝጽሕፍዎ ትሰምዕ። እንታይ ትገብር?', f: 'ብተሌፎን እቲ ኤጀንሲ ስም ስድራኺ ይጽሕፎ። ብጌጋ ከም ዝጽሕፍዎ ትሰምዒ። እንታይ ትገብሪ?', x: 'ብተሌፎን እቲ ኤጀንሲ ስም ስድራኹም ይጽሕፎ። ብጌጋ ከም ዝጽሕፍዎ ትሰምዑ። እንታይ ትገብሩ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.details.o1': { m: 'ስምካ ቀስ ኢልካ ፊደል ብፊደል በሎ፡ ደጊሞም ከንብብዎ ሕተቶም።', f: 'ስምኪ ቀስ ኢልኪ ፊደል ብፊደል በልዮ፡ ደጊሞም ከንብብዎ ሕተትዮም።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.details.o2': { m: 'ገለ ኣይትበል፡ ኣብ ስምካ ዘሎ ንእሽቶ ጌጋ ጸገም የብሉን።', f: 'ገለ ኣይትበሊ፡ ኣብ ስምኪ ዘሎ ንእሽቶ ጌጋ ጸገም የብሉን።', x: 'ገለ ኣይትበሉ፡ ኣብ ስምኩም ዘሎ ንእሽቶ ጌጋ ጸገም የብሉን።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.details.o3': { m: 'ስልኪ ዕጸው፡ ነቲ ጌጋ ደሓር ክረኽብዎ ድማ ተስፋ ግበር።', f: 'ስልኪ ዕጸዊ፡ ነቲ ጌጋ ደሓር ክረኽብዎ ድማ ተስፋ ግበሪ።', x: 'ስልኪ ዕጸዉ፡ ነቲ ጌጋ ደሓር ክረኽብዎ ድማ ተስፋ ግበሩ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.details.w': { m: 'ስምካ ኣብ ውዕልካ፡ ኣብ ወረቐት ደሞዝካን ኣብ መንነት ወረቐትካን ሓደ ዓይነት ክኸውን ኣለዎ። ሽዑ ደሞዝካን ግብርኻን ብቕኑዕ ይኸዱ። ብፊደል ምባልን ደጊምካ ምስማዕን ቅልጡፍ መረጋገጺ እዩ።', f: 'ስምኪ ኣብ ውዕልኪ፡ ኣብ ወረቐት ደሞዝኪን ኣብ መንነት ወረቐትኪን ሓደ ዓይነት ክኸውን ኣለዎ። ሽዑ ደሞዝኪን ግብርኺን ብቕኑዕ ይኸዱ። ብፊደል ምባልን ደጊምኪ ምስማዕን ቅልጡፍ መረጋገጺ እዩ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates': 'ዕለታት፡ መዓልቲ ቅድም ትመጽእ', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.b': { m: 'ብሆላንድኛ መዓልቲ ቅድሚ ወርሒ ትመጽእ፡ 3-6 ማለት 3 ሰነ እዩ፡ 6 መጋቢት ኣይኮነን። «Tot en met» ማለት እታ ናይ መወዳእታ መዓልቲ እውን ትቑጸር። መዓልታትን ኣዋርሕን ብንኡስ ፊደል ይጅምሩ፡ maandag, juni። ብዛዕባ ሓደ ዕለት ርግጸኛ ኣይኮንካን? ሕተት፡ ደጊምካ ድማ በሎ።', f: 'ብሆላንድኛ መዓልቲ ቅድሚ ወርሒ ትመጽእ፡ 3-6 ማለት 3 ሰነ እዩ፡ 6 መጋቢት ኣይኮነን። «Tot en met» ማለት እታ ናይ መወዳእታ መዓልቲ እውን ትቑጸር። መዓልታትን ኣዋርሕን ብንኡስ ፊደል ይጅምሩ፡ maandag, juni። ብዛዕባ ሓደ ዕለት ርግጸኛ ኣይኮንኪን? ሕተቲ፡ ደጊምኪ ድማ በልዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.p': '3 ሰነ ማለት ድዩ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.s': { m: 'መደብ ስራሕካ «Vrij: 3-6 tot en met 5-6» ይብል። መዓስ ኢኻ ነጻ?', f: 'መደብ ስራሕኪ «Vrij: 3-6 tot en met 5-6» ይብል። መዓስ ኢኺ ነጻ?', x: 'መደብ ስራሕኩም «Vrij: 3-6 tot en met 5-6» ይብል። መዓስ ኢኹም ነጻ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.dates.o1': 'ኣብ 3፡ 4ን 5ን ሰነ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.o2': 'ኣብ 3ን 4ን ሰነ ጥራይ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.o3': 'ካብ 6 መጋቢት ክሳብ 6 ግንቦት።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.dates.w': { m: 'መዓልቲ ቅድም፡ ድሕሪኡ ወርሒ ትመጽእ፡ 3-6 ማለት 3 ሰነ እዩ። «Tot en met» ማለት 5 ሰነ እውን ትቑጸር፡ ስለዚ ሰለስተ መዓልቲ ነጻ ኢኻ።', f: 'መዓልቲ ቅድም፡ ድሕሪኡ ወርሒ ትመጽእ፡ 3-6 ማለት 3 ሰነ እዩ። «Tot en met» ማለት 5 ሰነ እውን ትቑጸር፡ ስለዚ ሰለስተ መዓልቲ ነጻ ኢኺ።', x: 'መዓልቲ ቅድም፡ ድሕሪኡ ወርሒ ትመጽእ፡ 3-6 ማለት 3 ሰነ እዩ። «Tot en met» ማለት 5 ሰነ እውን ትቑጸር፡ ስለዚ ሰለስተ መዓልቲ ነጻ ኢኹም።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.permit': 'ስራሕን ምውህሃድን', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.permit.b': { m: 'ምውህሃድ (inburgering) ክትገብር ኣለካ ድዩ? ንኣስራሒኻ ንገሮ፡ ከም እትሰርሕ ድማ ንgemeente ንገሮም። ትምህርቲ ቋንቋኻ ምስ መደብ ስራሕካ ክሰማማዕ ይኽእል እንተ ኾይኑ ኣቐዲምካ ሕተት። ኣብዚ ክትሰርሕ ከም ዝፍቀደልካ ርግጸኛ ኣይኮንካን? ቅድሚ ምጅማርካ ኣረጋግጽ፡ ንኣብነት ኣብ IND፡ UWV ወይ VluchtelingenWerk። ነዚ ስራሕ ከም ናይ ርእሱ ሰራሕተኛ (zzp’er) ክትምዝገብ ይሓቱኻ ድዮም? ቅድም ምኽሪ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ምውህሃድ (inburgering) ክትገብሪ ኣለኪ ድዩ? ንኣስራሒኺ ንገርዮ፡ ከም እትሰርሒ ድማ ንgemeente ንገርዮም። ትምህርቲ ቋንቋኺ ምስ መደብ ስራሕኪ ክሰማማዕ ይኽእል እንተ ኾይኑ ኣቐዲምኪ ሕተቲ። ኣብዚ ክትሰርሒ ከም ዝፍቀደልኪ ርግጸኛ ኣይኮንኪን? ቅድሚ ምጅማርኪ ኣረጋግጺ፡ ንኣብነት ኣብ IND፡ UWV ወይ VluchtelingenWerk። ነዚ ስራሕ ከም ናይ ርእሳ ሰራሕተኛ (zzp’er) ክትምዝገቢ ይሓቱኺ ድዮም? ቅድም ምኽሪ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.permit.p': 'ሰሉስ ትምህርቲ ቋንቋ ኣለኒ። መደብ ስራሐይ ነዚ ኣብ ግምት ከእትዎ ይኽእል ዶ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.permit.s': { m: 'ትምህርቲ ቋንቋኻ ሰሉስ ንግሆ እዩ። ብሓድሽ መደብ ስራሕካ ሽዑ ትሰርሕ ኢኻ። እንታይ ትገብር?', f: 'ትምህርቲ ቋንቋኺ ሰሉስ ንግሆ እዩ። ብሓድሽ መደብ ስራሕኪ ሽዑ ትሰርሒ ኢኺ። እንታይ ትገብሪ?', x: 'ትምህርቲ ቋንቋኹም ሰሉስ ንግሆ እዩ። ብሓድሽ መደብ ስራሕኩም ሽዑ ትሰርሑ ኢኹም። እንታይ ትገብሩ?' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o1': { m: 'ንተቖጻጻሪኻ መደብ ስራሕ ክቕየር ሕተቶ።', f: 'ንተቖጻጻሪኺ መደብ ስራሕ ክቕየር ሕተትዮ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o2': { m: 'ነቲ ትምህርቲ ግደፎ፡ ስራሕ ይቕድም።', f: 'ነቲ ትምህርቲ ግደፍዮ፡ ስራሕ ይቕድም።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.permit.o3': { m: 'ገለ ከይበልካ ኩሉ ሰሉስ ኣብ ገዛ ጽናሕ።', f: 'ገለ ከይበልኪ ኩሉ ሰሉስ ኣብ ገዛ ጽናሒ።', x: 'ገለ ከይበልኩም ኩሉ ሰሉስ ኣብ ገዛ ጽናሑ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.permit.w': { m: 'ምውህሃድካ እውን ግዴታ እዩ። ብዙሓት ኣስራሕቲ ኣቐዲሞም እንተ ፈሊጦም ይሕግዙ። እቲ gemeente እውን መደብካ ምስ ስራሕካ ንምስምማዕ ክሕግዘካ ይኽእል።', f: 'ምውህሃድኪ እውን ግዴታ እዩ። ብዙሓት ኣስራሕቲ ኣቐዲሞም እንተ ፈሊጦም ይሕግዙ። እቲ gemeente እውን መደብኪ ምስ ስራሕኪ ንምስምማዕ ክሕግዘኪ ይኽእል።', x: 'ምውህሃድኩም እውን ግዴታ እዩ። ብዙሓት ኣስራሕቲ ኣቐዲሞም እንተ ፈሊጦም ይሕግዙ። እቲ gemeente እውን መደብኩም ምስ ስራሕኩም ንምስምማዕ ክሕግዘኩም ይኽእል።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kids': { m: 'ቆልዓኻ ሓሚሙ', f: 'ቆልዓኺ ሓሚሙ', x: 'ቆልዓኹም ሓሚሙ' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.b': { m: 'ቆልዓኻ ብሃንደበት ሓሚሙ ድዩ? ብቕጽበት ንኣስራሒኻ ንገሮ። ንመጀመርታ ሰዓታት ወይ መዓልታት ናይ ህጹጽ ኩነታት ፍቓድ (calamiteitenverlof) ክትወስድ ትኽእል፡ ኣስራሒኻ ድማ ደሞዝካ ምኽፋል ይቕጽል። ቆልዓኻ ንነዊሕ ግዜ ክንክን የድልዮ ድዩ? ሽዑ ፍቓድ ክንክን (zorgverlof) ክትሓትት ትኽእል። ነፍሰ ጾር ዝኾነት ሰራሕተኛ ድያ? ኣስራሒኣ ብሰንኪ እዚ ካብ ስራሕ ክሰጉጋ ኣይፍቀዶን። ብዛዕባ ፍቓድ ጥንስን ሕርስን ፍቓድ ወለድን (ouderschapsverlof) ብግዜኡ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ቆልዓኺ ብሃንደበት ሓሚሙ ድዩ? ብቕጽበት ንኣስራሒኺ ንገርዮ። ንመጀመርታ ሰዓታት ወይ መዓልታት ናይ ህጹጽ ኩነታት ፍቓድ (calamiteitenverlof) ክትወስዲ ትኽእሊ፡ ኣስራሒኺ ድማ ደሞዝኪ ምኽፋል ይቕጽል። ቆልዓኺ ንነዊሕ ግዜ ክንክን የድልዮ ድዩ? ሽዑ ፍቓድ ክንክን (zorgverlof) ክትሓትቲ ትኽእሊ። ነፍሰ ጾር ኢኺ? ኣስራሒኺ ብሰንኪ እዚ ካብ ስራሕ ክሰጉገኪ ኣይፍቀዶን። ብዛዕባ ፍቓድ ጥንስን ሕርስን ፍቓድ ወለድን (ouderschapsverlof) ብግዜኡ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.p': 'ቆልዓይ ሓሚሙ። ሎሚ ኣቐዲመ ክኸይድ ይኽእል ዶ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.s': { m: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልካ። ቆልዓኻ ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብር?', f: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልኪ። ቆልዓኺ ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብሪ?', x: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልኩም። ቆልዓኹም ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብሩ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.o1': { m: 'ንተቖጻጻሪኻ ንገሮ፡ ናይ ህጹጽ ኩነታት ፍቓድ ድማ ሕተት።', f: 'ንተቖጻጻሪኺ ንገርዮ፡ ናይ ህጹጽ ኩነታት ፍቓድ ድማ ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o2': { m: 'ቃል ከይበልካ ኪድ፡ ጽባሕ ድማ ግለጾ።', f: 'ቃል ከይበልኪ ኪዲ፡ ጽባሕ ድማ ግለጽዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.kids.o3': { m: 'ኣብ ስራሕ ጽናሕ፡ ቆልዓኻ ድማ ክሳብ ፈረቓኻ ዝውዳእ ይጽበ።', f: 'ኣብ ስራሕ ጽናሒ፡ ቆልዓኺ ድማ ክሳብ ፈረቓኺ ዝውዳእ ይጽበ።', x: 'ኣብ ስራሕ ጽናሑ፡ ቆልዓኹም ድማ ክሳብ ፈረቓኹም ዝውዳእ ይጽበ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.kids.w': { m: 'ሕሙም ቆልዓ ኣብ ገዛ ህጹጽ ኩነታት እዩ። ቅድም ንተቖጻጻሪኻ ምስ እትነግሮ፡ ነቲ ስራሕ ከመሓድሮ ይኽእል። ናይ ህጹጽ ኩነታት ፍቓድ ንከምዚ ዝኣመሰለ ግዜ እዩ።', f: 'ሕሙም ቆልዓ ኣብ ገዛ ህጹጽ ኩነታት እዩ። ቅድም ንተቖጻጻሪኺ ምስ እትነግርዮ፡ ነቲ ስራሕ ከመሓድሮ ይኽእል። ናይ ህጹጽ ኩነታት ፍቓድ ንከምዚ ዝኣመሰለ ግዜ እዩ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body': { m: 'እንታይ ከም ዘጋጠመን ኣበይ ከም ዘቐንዝወካን ንገር', f: 'እንታይ ከም ዘጋጠመን ኣበይ ከም ዘቐንዝወኪን ንገሪ' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.b': { m: 'ኣብ ሓኪም እንታይ ከም ዘጋጠመን ኣበይ ከም ዘቐንዝወካን ንገር። ንኣብነት፡ «Ik ben gevallen. Mijn arm doet pijn.»። ካብ መዓስ ጀሚሩ እቲ ቃንዛ ከም ዘለካ እውን ንገር። እንታይ ከም ዘለካ ክትግምት ኣየድልየካን፡ ሓኪም የረጋግጾ። ኣብ ስራሕ ድዩ ኣጋጢሙ? ኣብታ መዓልቲ እቲኣ ንተቖጻጻሪኻ ንገሮ።', f: 'ኣብ ሓኪም እንታይ ከም ዘጋጠመን ኣበይ ከም ዘቐንዝወኪን ንገሪ። ንኣብነት፡ «Ik ben gevallen. Mijn arm doet pijn.»። ካብ መዓስ ጀሚሩ እቲ ቃንዛ ከም ዘለኪ እውን ንገሪ። እንታይ ከም ዘለኪ ክትግምቲ ኣየድልየኪን፡ ሓኪም የረጋግጾ። ኣብ ስራሕ ድዩ ኣጋጢሙ? ኣብታ መዓልቲ እቲኣ ንተቖጻጻሪኺ ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.p': 'ወዲቐ። ቅልጽመይ የቐንዝወኒ ኣሎ።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.s': { m: 'ኣብ ስራሕ ከቢድ ሳጹን ኣልዒልካ። ሕጂ ሕቖኻ ኣዝዩ የቐንዝወካ ኣሎ። ኣብ ሓኪም ስድራ (huisarts) ኢኻ። እንታይ ትብል?', f: 'ኣብ ስራሕ ከቢድ ሳጹን ኣልዒልኪ። ሕጂ ሕቖኺ ኣዝዩ የቐንዝወኪ ኣሎ። ኣብ ሓኪም ስድራ (huisarts) ኢኺ። እንታይ ትብሊ?', x: 'ኣብ ስራሕ ከቢድ ሳጹን ኣልዒልኩም። ሕጂ ሕቖኹም ኣዝዩ የቐንዝወኩም ኣሎ። ኣብ ሓኪም ስድራ (huisarts) ኢኹም። እንታይ ትብሉ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o1': { m: 'ኣበይ ከም ዘቐንዝወካን ከቢድ ሳጹን ከም ዘልዓልካን።', f: 'ኣበይ ከም ዘቐንዝወኪን ከቢድ ሳጹን ከም ዘልዓልኪን።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.o2': { m: 'ሕማቕ ከም ዝስምዓካ ጥራይ፡ ካልእ የለን።', f: 'ሕማቕ ከም ዝስምዓኪ ጥራይ፡ ካልእ የለን።', x: 'ሕማቕ ከም ዝስምዓኩም ጥራይ፡ ካልእ የለን።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.body.o3': { m: 'ኣብ ኢንተርነት ዝረኸብካዮ ስም ሕማም።', f: 'ኣብ ኢንተርነት ዝረኸብክዮ ስም ሕማም።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.body.w': { m: 'ኣበይ ከም ዘቐንዝወካን እንታይ ከም ዘጋጠመን ምስ እትነግር፡ ሓኪም ቀልጢፉ ይርድኣካ። እንታይ ምዃኑ ሓኪም የረጋግጽ። ኣብ ስራሕ ድዩ ኣጋጢሙ? ንተቖጻጻሪኻ እውን ንገሮ።', f: 'ኣበይ ከም ዘቐንዝወኪን እንታይ ከም ዘጋጠመን ምስ እትነግሪ፡ ሓኪም ቀልጢፉ ይርድኣኪ። እንታይ ምዃኑ ሓኪም የረጋግጽ። ኣብ ስራሕ ድዩ ኣጋጢሙ? ንተቖጻጻሪኺ እውን ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends': { m: 'ስራሕካ ይውዳእ፡ ካልእ እንታይ ይቋረጽ?', f: 'ስራሕኪ ይውዳእ፡ ካልእ እንታይ ይቋረጽ?', x: 'ስራሕኩም ይውዳእ፡ ካልእ እንታይ ይቋረጽ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.b': { m: 'ስራሕካ ምስ ዝውዳእ፡ ናይ መወዳእታ ክፍሊትካ (eindafrekening) ኣረጋግጽ። ዘይተጠቐምካሎም መዓልታት ዕረፍትን ተወሳኺ ክፍሊት ዓመታዊ ዕረፍትኻን ብዙሕ ግዜ ምስኡ ይኽፈሉ። ብኤጀንሲ ዝረኸብካዮ ገዛ፡ መድሕን ጥዕና ወይ ሚኒባስ ኣብ ሓደ ግዜ ክቋረጽ ይኽእል። ናይ ባዕልኻ መድሕን ጥዕና ብግዜኡ ኣዳሉ። ውዕል ክራይካ ናይ ባዕሉ ሕግታት ኣለዎ፡ ነቲ ገዛ ቅድሚ ምግዳፍካ ምኽሪ ሕተት። ገዛ ትቕይር ወይ ካብ ሆላንድ ትወጽእ ኣለኻ? ንgemeente ንገሮም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ስራሕኪ ምስ ዝውዳእ፡ ናይ መወዳእታ ክፍሊትኪ (eindafrekening) ኣረጋግጺ። ዘይተጠቐምክሎም መዓልታት ዕረፍትን ተወሳኺ ክፍሊት ዓመታዊ ዕረፍትኺን ብዙሕ ግዜ ምስኡ ይኽፈሉ። ብኤጀንሲ ዝረኸብክዮ ገዛ፡ መድሕን ጥዕና ወይ ሚኒባስ ኣብ ሓደ ግዜ ክቋረጽ ይኽእል። ናይ ባዕልኺ መድሕን ጥዕና ብግዜኡ ኣዳልዊ። ውዕል ክራይኪ ናይ ባዕሉ ሕግታት ኣለዎ፡ ነቲ ገዛ ቅድሚ ምግዳፍኪ ምኽሪ ሕተቲ። ገዛ ትቕይሪ ወይ ካብ ሆላንድ ትወጽኢ ኣለኺ? ንgemeente ንገርዮም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.p': 'ናይ መወዳእታ ክፍሊተይ መዓስ ይበጽሓኒ?', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.s': { m: 'ስራሕካ ዓርቢ ይውዳእ። መድሕን ጥዕናኻ ብኤጀንሲ እዩ። እንታይ ትገብር?', f: 'ስራሕኪ ዓርቢ ይውዳእ። መድሕን ጥዕናኺ ብኤጀንሲ እዩ። እንታይ ትገብሪ?', x: 'ስራሕኩም ዓርቢ ይውዳእ። መድሕን ጥዕናኹም ብኤጀንሲ እዩ። እንታይ ትገብሩ?' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.jobends.o1': { m: 'መዓስ ከም ዝቋረጽ ሕተት፡ ናትካ ብግዜኡ ኣዳሉ።', f: 'መዓስ ከም ዝቋረጽ ሕተቲ፡ ናትኪ ብግዜኡ ኣዳልዊ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o2': 'ገለ የለን፡ እቲ መድሕን ባዕሉ ይቕጽል።', // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.o3': { m: 'ክሳብ ትሓምም ተጸበ፡ ሽዑ ኣዳልዎ።', f: 'ክሳብ ትሓምሚ ተጸበዪ፡ ሽዑ ኣዳልውዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.jobends.w': { m: 'ብኤጀንሲ ዝመጽእ መድሕን ብዙሕ ግዜ ስራሕካ ምስ ዝቋረጽ ይቋረጽ። ኣብ ሆላንድ እንተ ትነብር ወይ እንተ ትሰርሕ፡ ብዙሕ ግዜ መድሕን ጥዕና ክህልወካ ኣለዎ። ብግዜኡ ምስ እተዳሉ፡ ብዘይ መድሕን ኣይትተርፍን።', f: 'ብኤጀንሲ ዝመጽእ መድሕን ብዙሕ ግዜ ስራሕኪ ምስ ዝቋረጽ ይቋረጽ። ኣብ ሆላንድ እንተ ትነብሪ ወይ እንተ ትሰርሒ፡ ብዙሕ ግዜ መድሕን ጥዕና ክህልወኪ ኣለዎ። ብግዜኡ ምስ እተዳልዊ፡ ብዘይ መድሕን ኣይትተርፊን።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026): nieuw, nalezen.
    'u.finish': "ስራሕ ምውዳእ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workorder': "ወረቐት ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkbon': "ወረቐት ስራሕ (ዕማምካ ዘለዎ ወረቐት ወይ ኣፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lezen': "ምንባብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aantal': "ብዝሒ (ክንደይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.materiaal': "ኣቑሑ (ንስራሕ ዘድልየካ ነገራት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klaarleggen': "ምድላው (ዘድልየካ ነገራት ኣዳሊኻ ምቕማጥ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handtekening': "ፊርማ", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.1': "ቅድም ነቲ ወረቐት ስራሕ ኣንብቦ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.workorder.2': "እዚ ብዝሒ ቅኑዕ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workorder.3': "ነቲ ኣቑሑ ኣዳልዎ ኣለኹ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.workorder.q': { m: "እንታይ ክትገብር ከም ዘለካ ትፈልጥ ዲኻ?", f: "እንታይ ክትገብሪ ከም ዘለኪ ትፈልጢ ዲኺ?", x: "እንታይ ክትገብሩ ከም ዘለኩም ትፈልጡ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workorder.a': "ዳርጋ። እዚ ቃል ኣብ ወረቐት ስራሕ እንታይ ማለት እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.handover': "ተወዲኡ ድዩ ወይስ ገና?", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opruimen': "ምጽርራይ፡ ነገራት ናብ ቦታኦም ምምላስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nakijken': "ምርኣይ፡ ምፍታሽ (ነቲ ስራሕ ደጊምካ ምርኣይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afmelden': "ምውዳእ ስራሕ ምሕባር (ስራሕ ከም ዝተወድአ ምንጋርን ምኻድን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapot': "ዝተበላሸወ፡ ዝተሰብረ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opslot': "ዕጹው (ብመፍትሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderheid': "ማዕጾ", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.1': "ቦታ ስራሐይ ኣጽርዮ ኣለኹ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.handover.2': "ስራሐይ ክትርእዩለይ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handover.3': "ስራሐይ ከም ዝወዳእኩ ንተቖጻጻሪ እሕብሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.q': "ኩሉ ተወዲኡ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handover.a': "ዳርጋ። ክፍሊ ቁጽሪ ኣርባዕተ ዕጹው ነይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.tech': "ኣብ ወርክሾፕ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workshop': "መሳርሒታት ወርክሾፕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschap': "መሳርሒታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zagen': "ብመጋዝ ምቑራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slijpen': "ምልጋጽ (ብማሽን ሓጺን ምልማጽ ወይ ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vonk': "ብልጭታ (ሓዊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gehoorbescherming': "ሓላዊ እዝኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lawaai': "ጫውጫው (ብዙሕ ዓው ዝበለ ድምጺ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.1': "እቶም መሳርሒታት ኣበይ ኣለዉ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.2': "ክልግጽ ከለኹ ሓላዊ እዝኒ እገብር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.workshop.3': "ካብ ብልጭታ ተጠንቀቑ!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.q': { m: "ስለምንታይ መነጽር ገይርካ?", f: "ስለምንታይ መነጽር ገይርኪ?", x: "ስለምንታይ መነጽር ገይርኩም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workshop.a': "ብመጋዝ ክቖርጽ ከለኹ፡ ንኣሽቱ ስብርባራት ናብ ዓይነይ ክኣትዉ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.power': "ቅድም መብራህቲ ኣጥፍእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stroom': "መብራህቲ፡ ኤሌክትሪክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabel': "ገመድ ኤሌክትሪክ (ኬብል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stekker': "ሶኬት (ፊሽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderspanning': "ኤሌክትሪክ ዘለዎ (ጅረት ኣለዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningsloos': "ኤሌክትሪክ ዘይብሉ፡ ውሑስ (ጅረት የብሉን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektricien': "ኤሌክትሪሻን", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.1': "ኣብዚ ገና ኤሌክትሪክ ኣሎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.2': "እዚ ገመድ ተበላሽዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.power.3': "ኤሌክትሪክ ክሳብ ዝቋረጽ እጽበ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.q': { m: "ነታ መብራህቲ ክትቕይራ ትኽእል ዲኻ?", f: "ነታ መብራህቲ ክትቕይርያ ትኽእሊ ዲኺ?", x: "ነታ መብራህቲ ክትቕይርዋ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.power.a': "ኤሌክትሪክ ተቋሪጹ ድዩ? እንተዘይኮይኑ ንኤሌክትሪሻን እጽበ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.garage': "ኣብ ጋራጅ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.garage': "ጎማ፡ ዘይቲ ከምኡ'ውን ሊፍት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.band': "ጎማ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olie': "ዘይቲ (ናይ መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accu': "ባተሪ መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monteur': "መካኒክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hefbrug': "ሊፍት መኪና (ንመኪና ናብ ላዕሊ የልዕላ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lek': "ዝተቐደደ፡ ዘፍስስ (ኣየር ወይ ማይ ይወጽእ)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.garage.1': "ጎማ ተቐዲዱ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.2': "እቲ ሓድሽ ዘይቲ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.garage.3': "መኪና ኣብ ሊፍት ኣላ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.q': { m: "ጎማታት ናይዛ መኪና ክትቕይር ትኽእል ዲኻ?", f: "ጎማታት ናይዛ መኪና ክትቕይሪ ትኽእሊ ዲኺ?", x: "ጎማታት ናይዛ መኪና ክትቕይሩ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.garage.a': "እወ። ናይ ክረምቲ ጎማታት ኣበይ ኣለዉ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carjob': "ዓሚል እዩ ዝውስን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefrit': "ፈተነ ምዝዋር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijbewijs': "ፍቓድ ምዝዋር መኪና (ፓተንተ)", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.akkoord': "ተሰማሚዑ፡ ሕራይ (እወ ትብል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kosten': "ወጻኢታት (ዝኽፈል ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.repareren': "ምጽጋን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdeel': "ኣካል (ናይ መኪና ወይ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.1': "ዓሚል ብወጻኢታት ተሰማሚዑ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.2': "እዚ ኣካል ተበላሽዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.carjob.3': "ፈተነ ምዝዋር ክገብር እኽእል ዶ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.carjob.q': { m: "ፍሬናት እውን ሕማቓት እዮም። ሕጂ ክትገብሮም ዲኻ?", f: "ፍሬናት እውን ሕማቓት እዮም። ሕጂ ክትገብርዮም ዲኺ?", x: "ፍሬናት እውን ሕማቓት እዮም። ሕጂ ክትገብርዎም ዶ?" }, // nieuw, nalezen // nagelezen AI 31 okt
    'c.carjob.a': "ቅድም ንተቖጻጻሪየይ እሓቶ። ዓሚል ክሰማማዕ ኣለዎ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'u.stage': "ልምምድ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.placement': "ልምምድ ስራሕካ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stage': "ልምምድ ስራሕ (ኣብ ትካል ትመሃር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.praktijkopleider': "መሰልጠኒ ኣብ ትካል (ኣብ ትካል ዝመርሓካ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagebegeleider': "ተኸታታሊ ልምምድ ካብ ቤት ትምህርቲ (ካብ ቤት ትምህርቲ ዝመርሓካ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pok': "ውዕል ልምምድ (ንስኻ፡ ቤት ትምህርትን ትካልን እትፍርምዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.school': "ቤት ትምህርቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerbedrijf': "መሰልጠኒ ትካል (ተማሃሮ ክመሃሩ ዝኽእሉሉ ትካል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.1': "ልምምድ ስራሐይ ኣብ መኽዘን እገብር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.2': "ኣብ ትካል መሰልጠኒይ መን እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.placement.3': "ገና ውዕል ልምምድ ኣይፈረምኩን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.q': { m: "ልምምድ ስራሕካ መዓስ ትጅምር?", f: "ልምምድ ስራሕኪ መዓስ ትጅምሪ?", x: "ልምምድ ስራሕኩም መዓስ ትጅምሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.placement.a': "ሰኑይ። ቅድም ውዕል ልምምድ ንፍርም።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.review': "ርእይቶ ብዛዕባ ልምምድካ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordeling': "ገምጋም (ክንደይ ጽቡቕ ትሰርሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerdoel': "ዕላማ ትምህርቲ (ክትመሃሮ እትደሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbeeld': "ኣብነት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portfolio': "ፖርትፎልዮ (ስራሕካን መረጋገጺታትን ዘለዎ ፋይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cijfer': "ነጥቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslag': "ጸብጻብ (ብዛዕባ ስራሕካ ዝጽሓፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.1': "እንታይ ዝሓሸ ክገብር እኽእል?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.review.2': "ኣብነት ክትህቡኒ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.review.3': "ገምጋመይ ኣብ ዝመጽእ ሰሙን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.q': { m: "ቀልጢፍካ ክትሰርሕ ኣለካ።", f: "ቀልጢፍኪ ክትሰርሒ ኣለኪ።", x: "ቀልጢፍኩም ክትሰርሑ ኣለኩም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.review.a': "ሕራይ። ብኸመይ ቀልጢፈ ክሰርሕ ከም ዝኽእል ከተርእዩኒ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.society': "ኣብ ሆላንድ ምስታፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.council': "ምምሕዳር ከተማን ድምጺ ምሃብን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stemmen': "ድምጺ ምሃብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkiezing': "ምርጫ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemeenteraad': "ቤት ምኽሪ ከተማ (ብዛዕባ ከተማኻ ዝውስን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parlement': "ባይቶ (ሕግታት ዘውጽእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempas': "ካርድ ምርጫ (ድምጺ ንምሃብ ዘድልየካ ካርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.burgemeester': "ከንቲባ", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.1': "ድምጺ ክህብ ይፍቀደለይ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.2': "ካርድ ምርጫይ ብፖስታ መጺኡ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.council.3': "ቤት ምኽሪ ከተማ ብዛዕባ ከባቢየይ ይውስን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.q': { m: "ረቡዕ ድምጺ ክትህብ ክትከይድ ዲኻ?", f: "ረቡዕ ድምጺ ክትህቢ ክትከዲ ዲኺ?", x: "ረቡዕ ድምጺ ክትህቡ ክትከዱ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.council.a': "እወ። ካርድ ምርጫይን መንነት ወረቐተይን ኣለዉኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.police': "ፖሊስን መሰላትካን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agent': "ፖሊስ (ኣባል ፖሊስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boete': "መቕጻዕቲ ገንዘብ (ከም መቕጻዕቲ ዝኽፈል ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezwaar': "ተቓውሞ (ከም ዘይትሰማማዕ ብጽሑፍ ትገልጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechter': "ዳኛ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advocaat': "ጠበቓ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wet': "ሕጊ", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.1': "መቕጻዕቲ ገንዘብ ተቐቢለ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.2': "ተቓውሞ ከቕርብ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.police.3': "ምስ ጠበቓ ክዛረብ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.police.q': "መንነት ወረቐትኩም ክርእዮ እኽእል ዶ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.police.a': "እወ፡ እንሆ። እንታይ ኣጋጢሙ?", // nieuw, nalezen // nagelezen AI 28 nov
    'u.online': "ኣብ ስራሕ ብኢንተርነት", // nieuw, nalezen // nagelezen AI 28 nov
    'l.login': "ናብ ሕሳብ ምእታው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitloggen': "ካብ ሕሳብ ምውጻእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.account': "ሕሳብ (ኣካውንት)", // nieuw, nalezen // nagelezen AI 31 okt
    'w.scherm': "ስክሪን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergrendelen': "ምዕጻው (ስክሪን ወይ ተሌፎን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebruikersnaam': "ስም ተጠቃሚ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlogcode': "ኮድ ምእታው (ብSMS ወይ ብኣፕ ዝመጽእ ኮድ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.1': "መሕለፊ ቃለይ ረሲዐዮ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.2': "ኩሉ ግዜ ካብ ሕሳበይ እወጽእ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.login.3': "DigiD ንዝኾነ ሰብ ኣይህቦን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.q': { m: "ናብ ሕሳብ ክትኣቱ ትኽእል ዲኻ?", f: "ናብ ሕሳብ ክትኣትዊ ትኽእሊ ዲኺ?", x: "ናብ ሕሳብ ክትኣትዉ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.login.a': "ኣይፋል፡ መሕለፊ ቃለይ ኣይሰርሕን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.phish': "ናይ ሓሶት ኢመይላት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzender': "ሰዳዲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klikken': "ምጥዋቕ (ብጣት ወይ ብማውስ)", // nieuw, nalezen // nagelezen AI 31 okt
    'w.bijlage': "ተተሓሒዙ ዝመጽእ ፋይል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdacht': "ዘጠራጥር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ictafdeling': "ክፍሊ IT", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijzigen': "ምቕያር", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.1': "እዚ ኢመይል ዘጠራጥር እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.2': "ነቲ ተተሓሒዙ ዝመጸ ፋይል ኣይኸፍቶን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.phish.3': "መሕለፊ ቃለይ ብቕጽበት እቕይሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.q': { m: "ንሊንክ ጠዊቕካዮ ዲኻ?", f: "ንሊንክ ጠዊቕክዮ ዲኺ?", x: "ንሊንክ ጠዊቕኩምዎ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phish.a': "እወ። ናብ ክፍሊ IT እድውል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mychoice': "ኣብ እንታይ ጽቡቕ እየ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedin': "ኣብ ሓደ ነገር ጽቡቕ ምዃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiezen': "ምምራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beroep': "ሞያ፡ ዓይነት ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijbaan': "ንእሽቶ ስራሕ (ጎኒ ትምህርቲ ዝስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nauwkeurig': "ጥንቁቕን ልክዕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meeloopdag': "መዓልቲ ምስዓብ (ምስ ሓደ ሰብ ናብ ስራሕ እትኸደሉ መዓልቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.1': "ብኣእዳወይ ጽቡቕ ክሰርሕ እኽእል እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.mychoice.2': "ምስ ሰባት ምስራሕ እፈቱ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.mychoice.3': "ነቲ ስራሕ ንምርኣይ ሓደ መዓልቲ ምሳኹም ክውዕል እኽእል ዶ?", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.mychoice.q': { m: "ኣብ እንታይ ጽቡቕ ኢኻ?", f: "ኣብ እንታይ ጽቡቕ ኢኺ?", x: "ኣብ እንታይ ጽቡቓት ኢኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mychoice.a': "ንሰባት ጽቡቕ ክኣሊ እኽእል እየ። ኣብ ገዛ ንኣደይ እኣሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nextstep': "ድሕሪ Entree", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau2': "ደረጃ 2 (ቀጻሊ ደረጃ ናይ mbo)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startkwalificatie': "መሰረታዊ ብቕዓት (ዲፕሎማ mbo ደረጃ 2 ወይ ልዕሊኡ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bbl': "bbl (ኣብ ትካል ትሰርሕ፡ ኣብ ሰሙን ድማ ሓደ መዓልቲ ኣቢሉ ናብ ቤት ትምህርቲ ትኸይድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorstromen': "ምቕጻል (ናብ ዝለዓለ ደረጃ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmelden': "ምምዝጋብ (ኣብ ቤት ትምህርቲ ወይ ኮርስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendag': "መዓልቲ ክፉት ኣፍደገ (ቤት ትምህርቲ ክትበጽሕ ትኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.1': "ድሕሪ Entree ናብ ደረጃ 2 ክኸይድ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.2': "ብሓደ ግዜ ክሰርሕን ክመሃርን እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.nextstep.3': "መዓልቲ ክፉት ኣፍደገ መዓስ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.q': { m: "ድሕሪ Entree እንታይ ክትገብር ኢኻ?", f: "ድሕሪ Entree እንታይ ክትገብሪ ኢኺ?", x: "ድሕሪ Entree እንታይ ክትገብሩ ኢኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nextstep.a': "bbl ክገብር እደሊ። ሽዑ እሰርሕን እመሃርን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.email': "ናብ ስራሕ ምጽሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mail': "ኢመይል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderwerp': "ኣርእስቲ (ናይ ኢመይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beste': "ክቡር፡ ፍቑር (ኣብ መጀመርታ ደብዳቤ ወይ ኢመይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beleefd': "ትሑት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nalezen': "ደጊምካ ምንባብ (ቅድሚ ምልኣኽ ምፍታሽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.versturen': "ምልኣኽ", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.1': "ኣብ ኣርእስቲ እንታይ ክጽሕፍ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.email.2': "ኢመይለይ ሓንሳእ ደጊመ ኣንብቦ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    's.email.3': "ነቲ ኢመይል ጽባሕ እልእኮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.email.q': { m: "ብዛዕባ መዓልቲ ዕረፍትኻ ኢመይል ሊኢኽካ ዲኻ?", f: "ብዛዕባ መዓልቲ ዕረፍትኺ ኢመይል ሊኢኽኪ ዲኺ?", x: "ብዛዕባ መዓልቲ ዕረፍትኹም ኢመይል ሊኢኽኩም ዶ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'c.email.a': "ገና። ቅድም ደጊመ ከንብቦ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.budget': "ገንዘብካ ኣብ ነፍሲ ወከፍ ወርሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastelasten': "ቀወምቲ ወጻኢታት (ክራይ፡ መድሕን፡ ተሌፎን፡ ወርሓዊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sparen': "ምቁጣብ (ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.abonnement': "ምዝገባ ክፍሊት (ኣብ ወርሒ ትኸፍሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterafbetalen': "ጸኒሕካ ምኽፋል (ሕጂ ግዛእ፡ ጸኒሕካ ክፈል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedenktijd': "ግዜ ምሕሳብ (ሓሳብካ ክትቕይር እትኽእለሉ ግዜ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garantie': "ውሕስነት (ክሰርሕ ኣለዎ፡ እንተዘይኮይኑ ይጽገነልካ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.1': "ቅድም ቀወምቲ ወጻኢታት እኸፍል።", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.2': "ኣብ ነፍሲ ወከፍ ወርሒ ቁሩብ እቝጥብ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.budget.3': "ነዚ ምዝገባ ክፍሊት እሰርዞ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.q': { m: "ነዛ ተሌፎን ሕጂ ግዝኣያ፡ ጸኒሕካ ክፈል!", f: "ነዛ ተሌፎን ሕጂ ግዝእያ፡ ጸኒሕኪ ክፈሊ!", x: "ነዛ ተሌፎን ሕጂ ግዝእዋ፡ ጸኒሕኩም ክፈሉ!" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.budget.a': "ኣይፋል፡ የቐንየለይ። ጸኒሕካ ምኽፋል እውን ዕዳ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.healthy': "ንስራሕ ድልዊ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.slapen': "ምድቃስ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ontbijt': "ቁርሲ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.bewegen': "ምንቅስቓስ፡ ንጡፍ ምዃን", // nieuw, nalezen // nagelezen AI 22 nov
    'w.moe': "ዝደኸመ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.drugs': "ኣደንዘዝቲ ዕጸ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.somber': "ጓሂ ዝሓደሮ (ንነዊሕ ግዜ ዝጓሃየ)", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.1': "ሎሚ ኣዝየ ደኺመ እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.2': "ኩሉ ግዜ ቅድም ቁርሲ እበልዕ።", // nieuw, nalezen // nagelezen AI 22 nov
    's.healthy.3': "ኣብ ግዜ ዕረፍቲ ቁሩብ እዛወር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.q': { m: "ከኒና ትደሊ ዲኻ? ሽዑ ንቑሕ ትጸንሕ።", f: "ከኒና ትደልዪ ዲኺ? ሽዑ ንቕሕቲ ትጸንሒ።", x: "ከኒና ትደልዩ ዶ? ሽዑ ንቑሓት ትጸንሑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a': "ኣይፋል፡ የቐንየለይ። ኣብ ትሕቲ ጽልዋ ዝኾነ ነገር ኣይሰርሕን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder': { m: 'ቅድም ኣንብብ፡ ደሓር ጀምር', f: 'ቅድም ኣንብቢ፡ ደሓር ጀምሪ', x: 'ቅድም ኣንብቡ፡ ደሓር ጀምሩ' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.workorder.b': { m: 'ቅድሚ ምጅማርካ፡ ነቲ ወረቐት ስራሕ (werkbon) ወይ ኣብ ኣፕ ዘሎ ዕማም ኣንብብ። ኣድራሻ፡ ዕማምን ብዝሒ ነገራትን ኣረጋግጽ። ዘይንጹር ነገር ኣሎ ድዩ? ቅድሚ ምጅማርካ ሕተት፡ ኣብ ማእከል ኣይኮነን። ደሓር መሳርሒታትካን ኣቑሑን ኣዳሉ። እዚ ግዜ የቑጥብ፡ ውሑድ ጌጋ ድማ ትገብር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ቅድሚ ምጅማርኪ፡ ነቲ ወረቐት ስራሕ (werkbon) ወይ ኣብ ኣፕ ዘሎ ዕማም ኣንብቢ። ኣድራሻ፡ ዕማምን ብዝሒ ነገራትን ኣረጋግጺ። ዘይንጹር ነገር ኣሎ ድዩ? ቅድሚ ምጅማርኪ ሕተቲ፡ ኣብ ማእከል ኣይኮነን። ደሓር መሳርሒታትኪን ኣቑሑን ኣዳልዊ። እዚ ግዜ የቑጥብ፡ ውሑድ ጌጋ ድማ ትገብሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።', x: 'ቅድሚ ምጅማርኩም፡ ነቲ ወረቐት ስራሕ (werkbon) ወይ ኣብ ኣፕ ዘሎ ዕማም ኣንብቡ። ኣድራሻ፡ ዕማምን ብዝሒ ነገራትን ኣረጋግጹ። ዘይንጹር ነገር ኣሎ ድዩ? ቅድሚ ምጅማርኩም ሕተቱ፡ ኣብ ማእከል ኣይኮነን። ደሓር መሳርሒታትኩምን ኣቑሑን ኣዳልዉ። እዚ ግዜ የቑጥብ፡ ውሑድ ጌጋ ድማ ትገብሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።' }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.workorder.p': "ኣብ ወረቐት ስራሕ ዓሰርተ ካርቶን ተጻሒፉ ኣሎ። ቅኑዕ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.s': { m: "ኣብ ወረቐት ስራሕካ: ክፍሊ 3 ሕብሪ ቀብእ ይብል። መሳርሕትኻ ክፍሊ 5 እዩ ይብል። እንታይ ትገብር?", f: "ኣብ ወረቐት ስራሕኪ: ክፍሊ 3 ሕብሪ ቀብእ ይብል። መሳርሕትኺ ክፍሊ 5 እዩ ይብል። እንታይ ትገብሪ?", x: "ኣብ ወረቐት ስራሕኩም: ክፍሊ 3 ሕብሪ ቀብእ ይብል። መሳርሕትኹም ክፍሊ 5 እዩ ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o1': "ንተቖጻጻሪ ኣየናይ ክፍሊ ቅኑዕ ምዃኑ ምሕታት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o2': "ክፍሊ 3 ምቅባእ፡ ኣብ ወረቐት ስራሕ ከምኡ ስለ ዝተጻሕፈ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.o3': "ክልቲኦም ክፍልታት ምቅባእ፡ ምእንቲ ርግጸኛ ምዃን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workorder.w': "ክልተ ነገራት ምስ ዘይሰማምዑ፡ ቅድሚ ምጅማር ምርግጋጽ የድሊ። ሓጺር ሕቶ ካብ ስራሕ ደጊምካ ምስራሕ ዝወሓደ ግዜ ይወስድ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover': { m: 'እንታይ ከም ዝተወድአን እንታይ ከም ዘይተወድአን ንገር', f: 'እንታይ ከም ዝተወድአን እንታይ ከም ዘይተወድአን ንገሪ', x: 'እንታይ ከም ዝተወድአን እንታይ ከም ዘይተወድአን ንገሩ' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.handover.b': { m: 'ደው ምስ በልካ ስራሕ ኣይተወድአን። ቅድም ቦታኻን መሳርሒታትካን ኣጽሪ። ደሓር ሓደ ሰብ ስራሕ ክርእየልካ ሕተት። እንታይ ተወዲኡ እንታይ ከምዘይተወድአ ንተቖጻጻሪኻ ንገሮ። ጌጋ ኣጋጢሙ ድዩ ወይስ ሓደ ነገር ተበላሽዩ? ሕጂ ንገር፡ ጽባሕ ኣይኮነን። ምውዳእ ስራሕ ምሕባር ክፋል ስራሕ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ደው ምስ በልኪ ስራሕ ኣይተወድአን። ቅድም ቦታኺን መሳርሒታትኪን ኣጽርዪ። ደሓር ሓደ ሰብ ስራሕ ክርእየልኪ ሕተቲ። እንታይ ተወዲኡ እንታይ ከምዘይተወድአ ንተቖጻጻሪኺ ንገርዮ። ጌጋ ኣጋጢሙ ድዩ ወይስ ሓደ ነገር ተበላሽዩ? ሕጂ ንገሪ፡ ጽባሕ ኣይኮነን። ምውዳእ ስራሕ ምሕባር ክፋል ስራሕ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።', x: 'ደው ምስ በልኩም ስራሕ ኣይተወድአን። ቅድም ቦታኹምን መሳርሒታትኩምን ኣጽርዩ። ደሓር ሓደ ሰብ ስራሕ ክርእየልኩም ሕተቱ። እንታይ ተወዲኡ እንታይ ከምዘይተወድአ ንተቖጻጻሪኹም ንገርዎ። ጌጋ ኣጋጢሙ ድዩ ወይስ ሓደ ነገር ተበላሽዩ? ሕጂ ንገሩ፡ ጽባሕ ኣይኮነን። ምውዳእ ስራሕ ምሕባር ክፋል ስራሕ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።' }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.handover.p': "ክፍሊ ኣርባዕተ ገና ኣይተወድአን። ማዕጾ ዕጹው ነይሩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.s': { m: "ሓሙሽተ ክፍልታት ኣጽሪኻ። ክፍሊ 4 ዕጹው ነይሩ። ፈረቓ ስራሕካ ይውዳእ ኣሎ። እንታይ ትገብር?", f: "ሓሙሽተ ክፍልታት ኣጽሪኺ። ክፍሊ 4 ዕጹው ነይሩ። ፈረቓ ስራሕኪ ይውዳእ ኣሎ። እንታይ ትገብሪ?", x: "ሓሙሽተ ክፍልታት ኣጽሪኹም። ክፍሊ 4 ዕጹው ነይሩ። ፈረቓ ስራሕኩም ይውዳእ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o1': "ንተቖጻጻሪ ክፍሊ 4 ከምዘይተወድአ ምንጋር።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.o2': "ናብ ገዛ ምኻድ፡ ክፍሊ 4 ዕጹው ነይሩ፡ ጌጋ ናይ ሰራሕተኛ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.o3': "ኣብ ዝርዝር «ኩሉ ተወዲኡ» ምጽሓፍ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.handover.w': "ተቖጻጻሪ ንስራሕ የመሓድሮ። ክፍሊ 4 ከምዘይተወድአ ምስ ዝፈልጥ፡ ካልእ ሰብ ክሰድድ ይኽእል። ሽዑ ዝኾነ ዓሚል ርሱሕ ክፍሊ ኣይረክብን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop': "ዓይኒ፡ እዝኒን ሓውን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.b': { m: "ምልጋጽ፡ ብመጋዝ ምቑራጽን ምብሳዕን ብልጭታ፡ ንኣሽቱ ስብርባራትን ብዙሕ ጫውጫውን የስዕብ። ንሓጺር ስራሕ እውን ናይ ድሕንነት መነጽርን ሓላዊ እዝንን ተጠቐም። ጫውጫው ኣዝዩ ምስ ዝበዝሕ፡ ኣስራሒኻ ሓላዊ እዝኒ ክህበካ ኣለዎ። ብልጭታ ሓዊ ከልዕል ይኽእል። ንምልሓም፡ ወይ ኣብ ጥቓ ዝነድድ ነገራት ንምልጋጽ፡ ተወሳኺ ሕግታት ኣለዉ (heet werk): ቅድሚ ምጅማርካ ሕተት። ድሕሪ ስራሕ ስብርባራት ሓጺን ኣኪብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ምልጋጽ፡ ብመጋዝ ምቑራጽን ምብሳዕን ብልጭታ፡ ንኣሽቱ ስብርባራትን ብዙሕ ጫውጫውን የስዕብ። ንሓጺር ስራሕ እውን ናይ ድሕንነት መነጽርን ሓላዊ እዝንን ተጠቐሚ። ጫውጫው ኣዝዩ ምስ ዝበዝሕ፡ ኣስራሒኺ ሓላዊ እዝኒ ክህበኪ ኣለዎ። ብልጭታ ሓዊ ከልዕል ይኽእል። ንምልሓም፡ ወይ ኣብ ጥቓ ዝነድድ ነገራት ንምልጋጽ፡ ተወሳኺ ሕግታት ኣለዉ (heet werk): ቅድሚ ምጅማርኪ ሕተቲ። ድሕሪ ስራሕ ስብርባራት ሓጺን ኣኪቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ምልጋጽ፡ ብመጋዝ ምቑራጽን ምብሳዕን ብልጭታ፡ ንኣሽቱ ስብርባራትን ብዙሕ ጫውጫውን የስዕብ። ንሓጺር ስራሕ እውን ናይ ድሕንነት መነጽርን ሓላዊ እዝንን ተጠቐሙ። ጫውጫው ኣዝዩ ምስ ዝበዝሕ፡ ኣስራሒኹም ሓላዊ እዝኒ ክህበኩም ኣለዎ። ብልጭታ ሓዊ ከልዕል ይኽእል። ንምልሓም፡ ወይ ኣብ ጥቓ ዝነድድ ነገራት ንምልጋጽ፡ ተወሳኺ ሕግታት ኣለዉ (heet werk): ቅድሚ ምጅማርኩም ሕተቱ። ድሕሪ ስራሕ ስብርባራት ሓጺን ኣኪቡ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.p': "ክልግጽ እየ። ሓላዊ እዝኒ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.s': { m: "ሓደ ንእሽቶ ቁራጽ ሓጺን ክትልግጽ ኣለካ። ሓንቲ ደቒቕ ይወስድ። ናይ ድሕንነት መነጽርካ ኣብ ካልእ ክፍሊ እዩ። እንታይ ትገብር?", f: "ሓደ ንእሽቶ ቁራጽ ሓጺን ክትልግጺ ኣለኪ። ሓንቲ ደቒቕ ይወስድ። ናይ ድሕንነት መነጽርኪ ኣብ ካልእ ክፍሊ እዩ። እንታይ ትገብሪ?", x: "ሓደ ንእሽቶ ቁራጽ ሓጺን ክትልግጹ ኣለኩም። ሓንቲ ደቒቕ ይወስድ። ናይ ድሕንነት መነጽርኩም ኣብ ካልእ ክፍሊ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o1': "ንሓንቲ ደቒቕ እውን ቅድም መነጽር ምምጻእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o2': "ብፍርቂ ዝተዓምተ ዓይኒ ምልጋጽ፡ ቀልጢፉ ስለ ዝውዳእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.o3': "ነታ ካልእ ኢድ ኣብ ቅድሚ ዓይኒ ምሓዝ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.w': "ብልጭታ ወይ ስብርባር ሓጺን ኣብ ዓይኒ ንሓዋሩ ክጎድእ ይኽእል። እዚ ኣብ ሓንቲ ካልኢት ክኸውን ይኽእል። ናይ ድሕንነት መነጽር ንሓጺር ስራሕ እውን ይሕግዝ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power': "ኤሌክትሪክ: ፈጺሙ ብዘይ ጥንቃቐ ኣይኮነን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.b': { m: "ኣብ ኤሌክትሪክ ዘለዎ (onder spanning) ነገር ፈጺምካ ኣይትስራሕ። ቅድም ዝሰልጠነ መሳርሕቲ ውሑስ ይገብሮ: ኤሌክትሪክ የቋርጽ፡ የረጋግጽ ድማ። እዚ ክገብሩ ዝፍቀደሎም ቅኑዕ ስልጠና ዘለዎም ጥራይ እዮም። ዝተበላሸወ ገመድ ወይ ሶኬት ትርኢ ዲኻ? ኣይትጠቐመሉ፡ ብቕጽበት ድማ ንተቖጻጻሪኻ ንገሮ። ኤሌክትሪክ ከም ዝተቋረጸ ርግጸኛ ኣይኮንካን? ሽዑ ኤሌክትሪክ ኣሎ ማለት እዩ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ኣብ ኤሌክትሪክ ዘለዎ (onder spanning) ነገር ፈጺምኪ ኣይትስርሒ። ቅድም ዝሰልጠነ መሳርሕቲ ውሑስ ይገብሮ: ኤሌክትሪክ የቋርጽ፡ የረጋግጽ ድማ። እዚ ክገብሩ ዝፍቀደሎም ቅኑዕ ስልጠና ዘለዎም ጥራይ እዮም። ዝተበላሸወ ገመድ ወይ ሶኬት ትርእዪ ዲኺ? ኣይትጠቐምሉ፡ ብቕጽበት ድማ ንተቖጻጻሪኺ ንገርዮ። ኤሌክትሪክ ከም ዝተቋረጸ ርግጸኛ ኣይኮንክን? ሽዑ ኤሌክትሪክ ኣሎ ማለት እዩ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ኣብ ኤሌክትሪክ ዘለዎ (onder spanning) ነገር ፈጺምኩም ኣይትስርሑ። ቅድም ዝሰልጠነ መሳርሕቲ ውሑስ ይገብሮ: ኤሌክትሪክ የቋርጽ፡ የረጋግጽ ድማ። እዚ ክገብሩ ዝፍቀደሎም ቅኑዕ ስልጠና ዘለዎም ጥራይ እዮም። ዝተበላሸወ ገመድ ወይ ሶኬት ትርእዩ ዶ? ኣይትጠቐሙሉ፡ ብቕጽበት ድማ ንተቖጻጻሪኹም ንገርዎ። ኤሌክትሪክ ከም ዝተቋረጸ ርግጸኛታት ኣይኮንኩምን? ሽዑ ኤሌክትሪክ ኣሎ ማለት እዩ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.p': "ዝተበላሸወ ገመድ እርኢ ኣለኹ። መን ክርእዮ ይኽእል?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.s': { m: "መብራህቲ ክትሰቕል ኣለካ። ሓደ መሳርሕቲ «ኤሌክትሪክ ተቋሪጹ እዩ፡ ይመስለኒ» ይብል። እንታይ ትገብር?", f: "መብራህቲ ክትሰቕሊ ኣለኪ። ሓደ መሳርሕቲ «ኤሌክትሪክ ተቋሪጹ እዩ፡ ይመስለኒ» ይብል። እንታይ ትገብሪ?", x: "መብራህቲ ክትሰቕሉ ኣለኩም። ሓደ መሳርሕቲ «ኤሌክትሪክ ተቋሪጹ እዩ፡ ይመስለኒ» ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o1': "ኤሌክትሪክ ከም ዝተቋረጸ ዝሰልጠነ መሳርሕቲ ከረጋግጽ ምሕታት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o2': "ምጅማር፡ ግን ገመዳት ኣብ ምትንካፍ ረጒድ ጓንቲ ምግባር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.o3': "ኤሌክትሪክ ከም ዝተቋረጸ ንምርግጋጽ መብራህቲ ምውላዕን ምጥፋእን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.w': 'ምስ ኤሌክትሪክ «ይመስለኒ» ኣይኣክልን። ምውቃዕ ኤሌክትሪክ ክቐትል ይኽእል። ዝሰልጠነ መሳርሕቲ ኤሌክትሪክ ከም ዘየለ የረጋግጽ፡ ደሓር ምጅማር ይከኣል።', // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.garage': "ኣብ ትሕቲ መኪና ብድሕንነት", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.b': { m: "ኣብ ጃክ ጥራይ ኣብ ዘላ መኪና ትሕቲ ፈጺምካ ኣይትእቶ። መኪና ኣብ ሊፍት ወይ ኣብ መቐመጢታት ጸኒዓ ክትቐውም ኣለዋ። ዝፈሰሰ ዘይቲ ንመሬት ሙሉጭ ይገብሮ: ብቕጽበት ኣጽርዮ። ኣረጊት ዘይቲ፡ ባተሪታትን ናይ ጽሬት ፍርያትን ሓደገኛ ጓሓፍ እዮም። ናብ ፍሉይ ቦታ ይኸዱ፡ ፈጺሞም ናብ ልሙድ መጕሓፊ ወይ ቦኽቦኽ ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ጃክ ጥራይ ኣብ ዘላ መኪና ትሕቲ ፈጺምኪ ኣይትእተዊ። መኪና ኣብ ሊፍት ወይ ኣብ መቐመጢታት ጸኒዓ ክትቐውም ኣለዋ። ዝፈሰሰ ዘይቲ ንመሬት ሙሉጭ ይገብሮ: ብቕጽበት ኣጽርይዮ። ኣረጊት ዘይቲ፡ ባተሪታትን ናይ ጽሬት ፍርያትን ሓደገኛ ጓሓፍ እዮም። ናብ ፍሉይ ቦታ ይኸዱ፡ ፈጺሞም ናብ ልሙድ መጕሓፊ ወይ ቦኽቦኽ ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ጃክ ጥራይ ኣብ ዘላ መኪና ትሕቲ ፈጺምኩም ኣይትእተዉ። መኪና ኣብ ሊፍት ወይ ኣብ መቐመጢታት ጸኒዓ ክትቐውም ኣለዋ። ዝፈሰሰ ዘይቲ ንመሬት ሙሉጭ ይገብሮ: ብቕጽበት ኣጽርይዎ። ኣረጊት ዘይቲ፡ ባተሪታትን ናይ ጽሬት ፍርያትን ሓደገኛ ጓሓፍ እዮም። ናብ ፍሉይ ቦታ ይኸዱ፡ ፈጺሞም ናብ ልሙድ መጕሓፊ ወይ ቦኽቦኽ ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.p': "ኣብ መሬት ዘይቲ ኣሎ። ከጽርዮ እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.s': { m: "ትሕቲ መኪና ክትርኢ ኣለካ። ኣብ ጃክ ጥራይ ኣላ። መሳርሕትኻ «ጸገም የለን፡ ቀልጢፍካ» ይብል። እንታይ ትገብር?", f: "ትሕቲ መኪና ክትርእዪ ኣለኪ። ኣብ ጃክ ጥራይ ኣላ። መሳርሕትኺ «ጸገም የለን፡ ቀልጢፍኪ» ይብል። እንታይ ትገብሪ?", x: "ትሕቲ መኪና ክትርእዩ ኣለኩም። ኣብ ጃክ ጥራይ ኣላ። መሳርሕትኹም «ጸገም የለን፡ ቀልጢፍኩም» ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o1': "ንሊፍት ወይ ንመቐመጢታት ምጽባይ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o2': "ብቕልጡፍ ትሕቲኣ ምእታው፡ ኣእጋር ኣብ ደገ።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.o3': "መሳርሕቲ ንመኪና ክሕዛ ምሕታት።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.garage.w': "ጃክ ክሾልቕ ይኽእል። መኪና ኣዝያ ከባድ እያ፡ ካብ ትሕቲኣ ቀልጢፍካ ምውጻእ ድማ ኣይከኣልን። መቐመጢታት ወይ ሊፍት ንመኪና ኣብ ቦታኣ ይሕዝዋ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob': { m: 'ተወሳኺ ስራሕ? ቅድም ንዓሚል ሕተት', f: 'ተወሳኺ ስራሕ? ቅድም ንዓሚል ሕተቲ', x: 'ተወሳኺ ስራሕ? ቅድም ንዓሚል ሕተቱ' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.carjob.b': { m: "ኣብ ወረቐት ስራሕ ካብ ዘሎ ንላዕሊ ጸገማት ትረክብ ዲኻ? ከምኡ ጥራይ ኣይትጸግኖም። ዓሚል ቅድም ብተወሳኺ ስራሕን ወጻኢታትን ክሰማማዕ ኣለዎ። ተቖጻጻሪኻ ወይ ቤት ጽሕፈት ኣገልግሎት ናብ ዓሚል ይድውል። ፈተነ ምዝዋር ብፍቓድ ጥራይ፡ ምስ ግዜኡ ዘይሓለፈ መንጃ ፍቓድ ጥራይ እዩ። እንታይ ከም ዝገበርካን ኣየኖት ኣካላት ከም ዝተጠቐምካን ጽሓፍ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ኣብ ወረቐት ስራሕ ካብ ዘሎ ንላዕሊ ጸገማት ትረኽቢ ዲኺ? ከምኡ ጥራይ ኣይትጸግንዮም። ዓሚል ቅድም ብተወሳኺ ስራሕን ወጻኢታትን ክሰማማዕ ኣለዎ። ተቖጻጻሪኺ ወይ ቤት ጽሕፈት ኣገልግሎት ናብ ዓሚል ይድውል። ፈተነ ምዝዋር ብፍቓድ ጥራይ፡ ምስ ግዜኡ ዘይሓለፈ መንጃ ፍቓድ ጥራይ እዩ። እንታይ ከም ዝገበርክን ኣየኖት ኣካላት ከም ዝተጠቐምክን ጽሓፊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ኣብ ወረቐት ስራሕ ካብ ዘሎ ንላዕሊ ጸገማት ትረኽቡ ዶ? ከምኡ ጥራይ ኣይትጸግንዎም። ዓሚል ቅድም ብተወሳኺ ስራሕን ወጻኢታትን ክሰማማዕ ኣለዎ። ተቖጻጻሪኹም ወይ ቤት ጽሕፈት ኣገልግሎት ናብ ዓሚል ይድውል። ፈተነ ምዝዋር ብፍቓድ ጥራይ፡ ምስ ግዜኡ ዘይሓለፈ መንጃ ፍቓድ ጥራይ እዩ። እንታይ ከም ዝገበርኩምን ኣየኖት ኣካላት ከም ዝተጠቐምኩምን ጽሓፉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.carjob.p': "ካልእ ጸገም እውን እርኢ ኣለኹ። ናብ ዓሚል መን ይድውል?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.s': { m: "ዘይቲ ናይ ሓንቲ መኪና ትቕይር ኣለኻ። ፍሬናት እውን ሕማቓት እዮም። ኣብ ሓደ ሰዓት ድልውቲ ክትከውን ኣለዋ። እንታይ ትገብር?", f: "ዘይቲ ናይ ሓንቲ መኪና ትቕይሪ ኣለኺ። ፍሬናት እውን ሕማቓት እዮም። ኣብ ሓደ ሰዓት ድልውቲ ክትከውን ኣለዋ። እንታይ ትገብሪ?", x: "ዘይቲ ናይ ሓንቲ መኪና ትቕይሩ ኣለኹም። ፍሬናት እውን ሕማቓት እዮም። ኣብ ሓደ ሰዓት ድልውቲ ክትከውን ኣለዋ። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o1': "ንዓሚል ምእንቲ ክድውለሉ ንተቖጻጻሪ ምንጋር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.o2': "ፍሬናት እውን ምጽጋን፡ ንድሕንነት።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.o3': "ዋላ ሓንቲ ዘይምባል፡ ኣብ ወረቐት ስራሕ የለዉን።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.carjob.w': "ዓሚል እዩ ዝኸፍል፡ ስለዚ ዓሚል እዩ ዝውስን። ብዘይ ፍቓዱ ጋራጅ ከምኡ ጥራይ ተወሳኺ ስራሕ ክገብር ኣይፍቀዶን። ሕማቕ ፍሬን ሓደገኛ እዩ፡ ስለዚ ምንጋሩ ኣገዳሲ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement': { m: 'ቅድም ፈርም፡ ደሓር ጀምር', f: 'ቅድም ፈርሚ፡ ደሓር ጀምሪ', x: 'ቅድም ፈርሙ፡ ደሓር ጀምሩ' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.placement.b': { m: "ኣብ Entree ኣብ ትካል ብዙሕ ትመሃር: እዚ ልምምድ ስራሕ እዩ (stage ወይ bpv)። ቅድሚ ምጅማርካ፡ ንስኻ፡ ቤት ትምህርትን ትካልን ውዕል ትፍርሙ: POK። ኣብ ትካል መሰልጠኒ (praktijkopleider) ይሕግዘካ። ኣብ ቤት ትምህርቲ ተኸታታሊ ልምምድ (stagebegeleider) ይሕግዘካ። ሓሚምካ ዲኻ? ቅድሚ ሰዓት ምጅማር ናብ ትካል ደውል፡ ንቤት ትምህርቲ እውን ሓብር። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ: ንተኸታታሊ ልምምድካ ሕተት።", f: "ኣብ Entree ኣብ ትካል ብዙሕ ትመሃሪ: እዚ ልምምድ ስራሕ እዩ (stage ወይ bpv)። ቅድሚ ምጅማርኪ፡ ንስኺ፡ ቤት ትምህርትን ትካልን ውዕል ትፍርሙ: POK። ኣብ ትካል መሰልጠኒ (praktijkopleider) ይሕግዘኪ። ኣብ ቤት ትምህርቲ ተኸታታሊ ልምምድ (stagebegeleider) ይሕግዘኪ። ሓሚምኪ ዲኺ? ቅድሚ ሰዓት ምጅማር ናብ ትካል ደውሊ፡ ንቤት ትምህርቲ እውን ሓብሪ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ: ንተኸታታሊ ልምምድኪ ሕተቲ።", x: "ኣብ Entree ኣብ ትካል ብዙሕ ትመሃሩ: እዚ ልምምድ ስራሕ እዩ (stage ወይ bpv)። ቅድሚ ምጅማርኩም፡ ንስኹም፡ ቤት ትምህርትን ትካልን ውዕል ትፍርሙ: POK። ኣብ ትካል መሰልጠኒ (praktijkopleider) ይሕግዘኩም። ኣብ ቤት ትምህርቲ ተኸታታሊ ልምምድ (stagebegeleider) ይሕግዘኩም። ሓሚምኩም ዶ? ቅድሚ ሰዓት ምጅማር ናብ ትካል ደውሉ፡ ንቤት ትምህርቲ እውን ሓብሩ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ: ንተኸታታሊ ልምምድኩም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.p': "ውዕል ልምምድ ምስ ተፈርመ ጥራይ እጅምር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.s': { m: "ትካል ጽባሕ ክትጅምር ይደሊ። POK ገና ኣይተፈርመን። እንታይ ትገብር?", f: "ትካል ጽባሕ ክትጅምሪ ይደሊ። POK ገና ኣይተፈርመን። እንታይ ትገብሪ?", x: "ትካል ጽባሕ ክትጅምሩ ይደሊ። POK ገና ኣይተፈርመን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o1': "ንተኸታታሊ ልምምድ ቅድም POK ከዳልው ምሕታት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o2': "ጽባሕ ምጅማር፡ POK ግዜ ምስ ተረኽበ ምፍራም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.o3': "ምጅማር፡ ግን ሕጂ ንቤት ትምህርቲ ዘይምሕባር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.w': "ኣብ POK እንታይ ከም ዝምሃርን መን ከም ዝሕግዝን ተጻሒፉ ኣሎ። ብዘይ ዝተፈርመ POK፡ ልምምድ ንዲፕሎማ ዘይቑጸር ክኸውን ይኽእል። ስለዚ ቅድሚ ምጅማር ይፍረም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review': { m: 'ርእይቶ ሕተት፡ ኣብነት እውን', f: 'ርእይቶ ሕተቲ፡ ኣብነት እውን', x: 'ርእይቶ ሕተቱ፡ ኣብነት እውን' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.review.b': { m: "ኣብ ልምምድ፡ ሰባት እንታይ ጽቡቕ ይኸይድ ከም ዘሎን እንታይ ክመሓየሽ ከም ዝኽእልን ይነግሩኻ: ርእይቶ (feedback)። እዚ ንቡር እዩ፡ ንምምሃር ድማ ይሕግዝ። ኣይተረድኣካን ድዩ? ኣብነት ሕተት። ባዕልኻ እውን ርእይቶ ሕተት፡ ንኣብነት ኣብ ሰሙን ሓንሳእ። ኣብ ልምምድ ብሓቂ ጸገም ኣሎ ድዩ? ቅድም ምስ መሰልጠኒ ኣብ ትካል ተዛረብ። ኣይሓገዘን ድዩ? ሽዑ ናብ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ኪድ።", f: "ኣብ ልምምድ፡ ሰባት እንታይ ጽቡቕ ይኸይድ ከም ዘሎን እንታይ ክመሓየሽ ከም ዝኽእልን ይነግሩኺ: ርእይቶ (feedback)። እዚ ንቡር እዩ፡ ንምምሃር ድማ ይሕግዝ። ኣይተረድኣክን ድዩ? ኣብነት ሕተቲ። ባዕልኺ እውን ርእይቶ ሕተቲ፡ ንኣብነት ኣብ ሰሙን ሓንሳእ። ኣብ ልምምድ ብሓቂ ጸገም ኣሎ ድዩ? ቅድም ምስ መሰልጠኒ ኣብ ትካል ተዛረቢ። ኣይሓገዘን ድዩ? ሽዑ ናብ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ኪዲ።", x: "ኣብ ልምምድ፡ ሰባት እንታይ ጽቡቕ ይኸይድ ከም ዘሎን እንታይ ክመሓየሽ ከም ዝኽእልን ይነግሩኹም: ርእይቶ (feedback)። እዚ ንቡር እዩ፡ ንምምሃር ድማ ይሕግዝ። ኣይተረድኣኩምን ድዩ? ኣብነት ሕተቱ። ባዕልኹም እውን ርእይቶ ሕተቱ፡ ንኣብነት ኣብ ሰሙን ሓንሳእ። ኣብ ልምምድ ብሓቂ ጸገም ኣሎ ድዩ? ቅድም ምስ መሰልጠኒ ኣብ ትካል ተዛረቡ። ኣይሓገዘን ድዩ? ሽዑ ናብ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.p': "እንታይ ጽቡቕ ከደ፡ እንታይከ ክመሓየሽ ይኽእል?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.s': { m: "መሰልጠኒኻ «ብዝያዳ ጥንቃቐ ክትሰርሕ ኣለካ» ይብል። እንታይ ማለቱ ምዃኑ ኣይትፈልጥን። እንታይ ትገብር?", f: "መሰልጠኒኺ «ብዝያዳ ጥንቃቐ ክትሰርሒ ኣለኪ» ይብል። እንታይ ማለቱ ምዃኑ ኣይትፈልጢን። እንታይ ትገብሪ?", x: "መሰልጠኒኹም «ብዝያዳ ጥንቃቐ ክትሰርሑ ኣለኩም» ይብል። እንታይ ማለቱ ምዃኑ ኣይትፈልጡን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o1': "ብኻልእ መንገዲ እንታይ ክግበር ከም ዘለዎ ኣብነት ምሕታት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o2': "እወ ምባል፡ ብዘይ ሕቶ ክርዳእ ተስፋ ምግባር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.o3': "ካብ ሕጂ ዋላ ሓንቲ ከይተበላሸወ ብዙሕ ብቐስታ ምስራሕ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.w': "ብኣብነት እንታይ ክቕየር ከም ዘለዎ ይንጸር። ምሕታት ክትመሃር ከም እትደሊ የርኢ። መሰልጠንቲ ነዚ ይፈትውዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council': "መን እዩ ድምጺ ክህብ ዝኽእል?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.b': { m: "ኣብ ሆላንድ መን ከም ዝውስን ብድምጺ ትመርጽ። ቤት ምኽሪ ከተማ (gemeenteraad) ብዛዕባ ከተማኻ ይውስን። Tweede Kamer ንመላእ ሃገር ሕግታት የውጽእ። ሆላንዳዊት ዜግነት እንተሃልዩካ፡ ካብ 18 ዓመት ኣብ ኩሉ ምርጫታት ድምጺ ክትህብ ትኽእል። ንቤት ምኽሪ ከተማ ዝያዳ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ካልእ ሃገር ሕብረት ኤውሮጳ ኮይኖም ኣብዚ ዝነብሩ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ደገ ሕብረት ኤውሮጳ ዝመጹ ሰባት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ ድምጺ ክህቡ ይኽእሉ። ምምሕዳር ከተማ (gemeente) ካርድ ምርጫ (stempas) ይሰደልካ። ምስ መንነት ወረቐትካ ሒዝካዮ ኪድ። ድምጺ ክትህብ ከም እትኽእል ርግጸኛ ኣይኮንካን? ንምምሕዳር ከተማ ሕተት።", f: "ኣብ ሆላንድ መን ከም ዝውስን ብድምጺ ትመርጺ። ቤት ምኽሪ ከተማ (gemeenteraad) ብዛዕባ ከተማኺ ይውስን። Tweede Kamer ንመላእ ሃገር ሕግታት የውጽእ። ሆላንዳዊት ዜግነት እንተሃልዩኪ፡ ካብ 18 ዓመት ኣብ ኩሉ ምርጫታት ድምጺ ክትህቢ ትኽእሊ። ንቤት ምኽሪ ከተማ ዝያዳ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ካልእ ሃገር ሕብረት ኤውሮጳ ኮይኖም ኣብዚ ዝነብሩ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ደገ ሕብረት ኤውሮጳ ዝመጹ ሰባት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ ድምጺ ክህቡ ይኽእሉ። ምምሕዳር ከተማ (gemeente) ካርድ ምርጫ (stempas) ይሰደልኪ። ምስ መንነት ወረቐትኪ ሒዝክዮ ኪዲ። ድምጺ ክትህቢ ከም እትኽእሊ ርግጸኛ ኣይኮንክን? ንምምሕዳር ከተማ ሕተቲ።", x: "ኣብ ሆላንድ መን ከም ዝውስን ብድምጺ ትመርጹ። ቤት ምኽሪ ከተማ (gemeenteraad) ብዛዕባ ከተማኹም ይውስን። Tweede Kamer ንመላእ ሃገር ሕግታት የውጽእ። ሆላንዳዊት ዜግነት እንተሃልዩኩም፡ ካብ 18 ዓመት ኣብ ኩሉ ምርጫታት ድምጺ ክትህቡ ትኽእሉ። ንቤት ምኽሪ ከተማ ዝያዳ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ካልእ ሃገር ሕብረት ኤውሮጳ ኮይኖም ኣብዚ ዝነብሩ ሰባት ድምጺ ክህቡ ይኽእሉ። ካብ ደገ ሕብረት ኤውሮጳ ዝመጹ ሰባት ድሕሪ 5 ዓመት ሕጋዊ መንበሪ ድምጺ ክህቡ ይኽእሉ። ምምሕዳር ከተማ (gemeente) ካርድ ምርጫ (stempas) ይሰደልኩም። ምስ መንነት ወረቐትኩም ሒዝኩምዎ ኪዱ። ድምጺ ክትህቡ ከም እትኽእሉ ርግጸኛታት ኣይኮንኩምን? ንምምሕዳር ከተማ ሕተቱ።" }, // nagelezen AI 22 nov
    'c.council.p': "ንቤት ምኽሪ ከተማ ድምጺ ክህብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.s': { m: "ካብ ሞሮኮ ኢኻ፡ ኣብዚ ድማ ንሽዱሽተ ዓመት ብሕጋዊ ትነብር ኣለኻ፡ ብዘይ ሆላንዳዊት ዜግነት። እንታይ እዩ ሓቂ?", f: "ካብ ሞሮኮ ኢኺ፡ ኣብዚ ድማ ንሽዱሽተ ዓመት ብሕጋዊ ትነብሪ ኣለኺ፡ ብዘይ ሆላንዳዊት ዜግነት። እንታይ እዩ ሓቂ?", x: "ካብ ሞሮኮ ኢኹም፡ ኣብዚ ድማ ንሽዱሽተ ዓመት ብሕጋዊ ትነብሩ ኣለኹም፡ ብዘይ ሆላንዳዊት ዜግነት። እንታይ እዩ ሓቂ?" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.o1': "ንቤት ምኽሪ ከተማ ድምጺ ምሃብ ይፍቀድ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o2': "ንTweede Kamer እውን ድምጺ ምሃብ ይፍቀድ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.o3': "ብዘይ ሆላንዳዊ ፓስፖርት ድምጺ ምሃብ ኣይፍቀድን።", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.council.w': "ድሕሪ 5 ዓመት ሕጋዊ መንበሪ ንቤት ምኽሪ ከተማ ድምጺ ምሃብ ይፍቀድ። ንTweede Kamer ግን ሆላንዳዊት ዜግነት የድሊ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police': "መንነት ወረቐትኩምን መሰላትኩምን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.b': { m: "ካብ 14 ዓመት፡ ፖሊስ ምስ ዝሓተ መንነት ወረቐትካ ከተርኢ ኣለካ። ስለዚ ኩሉ ግዜ ሒዝካዮ ኩን። ንኣብነት ካብ ምምሕዳር ከተማ ወይ ካብ UWV ደብዳቤ ተቐቢልካ ዲኻ? ምስቲ ኣብኡ ዘሎ ውሳነ ኣይትሰማማዕን ዲኻ? ሽዑ ብጽሑፍ ተቓውሞ (bezwaar maken) ምቕራብ ይከኣል። ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት ግበሮ። ፖሊስን ዳኛን ንኹሉ ብማዕረ ክሕዙ ኣለዎም። ተኣሲርካ ዲኻ? ጠበቓ ክሕተት ይከኣል። Juridisch Loket ብናጻ ምኽሪ ይህብ።", f: "ካብ 14 ዓመት፡ ፖሊስ ምስ ዝሓተ መንነት ወረቐትኪ ከተርእዪ ኣለኪ። ስለዚ ኩሉ ግዜ ሒዝክዮ ኩኒ። ንኣብነት ካብ ምምሕዳር ከተማ ወይ ካብ UWV ደብዳቤ ተቐቢልኪ ዲኺ? ምስቲ ኣብኡ ዘሎ ውሳነ ኣይትሰማምዕን ዲኺ? ሽዑ ብጽሑፍ ተቓውሞ (bezwaar maken) ምቕራብ ይከኣል። ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት ግበርዮ። ፖሊስን ዳኛን ንኹሉ ብማዕረ ክሕዙ ኣለዎም። ተኣሲርኪ ዲኺ? ጠበቓ ክሕተት ይከኣል። Juridisch Loket ብናጻ ምኽሪ ይህብ።", x: "ካብ 14 ዓመት፡ ፖሊስ ምስ ዝሓተ መንነት ወረቐትኩም ከተርእዩ ኣለኩም። ስለዚ ኩሉ ግዜ ሒዝኩምዎ ኩኑ። ንኣብነት ካብ ምምሕዳር ከተማ ወይ ካብ UWV ደብዳቤ ተቐቢልኩም ዲኹም? ምስቲ ኣብኡ ዘሎ ውሳነ ኣይትሰማምዑን ዲኹም? ሽዑ ብጽሑፍ ተቓውሞ (bezwaar maken) ምቕራብ ይከኣል። ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት ግበርዎ። ፖሊስን ዳኛን ንኹሉ ብማዕረ ክሕዙ ኣለዎም። ተኣሲርኩም ዶ? ጠበቓ ክሕተት ይከኣል። Juridisch Loket ብናጻ ምኽሪ ይህብ።" }, // nagelezen AI 22 nov
    'c.police.p': "ምስዚ ውሳነ ኣይሰማማዕን። ተቓውሞ የቕርብ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.s': { m: "ካብ ምምሕዳር ከተማ ደብዳቤ ትቕበል። ምስ ውሳነኦም ኣይትሰማማዕን። ኣብቲ ደብዳቤ ሽዱሽተ ሰሙን ግዜ ከም ዘለካ ይብል። እንታይ ትገብር?", f: "ካብ ምምሕዳር ከተማ ደብዳቤ ትቕበሊ። ምስ ውሳነኦም ኣይትሰማምዕን። ኣብቲ ደብዳቤ ሽዱሽተ ሰሙን ግዜ ከም ዘለኪ ይብል። እንታይ ትገብሪ?", x: "ካብ ምምሕዳር ከተማ ደብዳቤ ትቕበሉ። ምስ ውሳነኦም ኣይትሰማምዑን። ኣብቲ ደብዳቤ ሽዱሽተ ሰሙን ግዜ ከም ዘለኩም ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o1': "ቅድሚ እቲ ዕለት ደብዳቤ ተቓውሞ ምጽሓፍ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o2': "ሓንሳእ ምድዋሎምን ክሳብ መሊሶም ዝድውሉ ምጽባይን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.o3': "ምጽባይ: ድሕሪ ሽዱሽተ ሰሙን ባዕሉ ይውዳእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.w': "ተቓውሞ ብጽሑፍ፡ ቅድሚ እቲ ኣብ ደብዳቤ ዘሎ ዕለት ይቐርብ። ድሕሪኡ መብዛሕትኡ ግዜ ደንጒዩ ይኸውን። Juridisch Loket ንምጽሓፉ ክሕግዝ ይኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login': "ምእታውኩም ናትኩም ጥራይ እዩ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.b': { m: "መሕለፊ ቃልካን DigiDን ንዓኻ ጥራይ እዮም። ንዝኾነ ሰብ ኣይትሃቦም፡ ንኣስራሒ ወይ ንመሳርሕቲ እውን ከይተረፈ። ኣብ ናይ ሓባር ኮምፒተር፡ ምስ ወዳእካ ኩሉ ግዜ ካብ ሕሳብ ውጻእ። ንቑሩብ ትኸይድ ዲኻ? ስክሪን ዕጸዎ። መሕለፊ ቃል ረሲዕካ ዲኻ? ካብ ክፍሊ IT (ICT-afdeling) ሓድሽ ሕተት። ሕግታት ኮምፒተር ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንክፍሊ IT ሕተት።", f: "መሕለፊ ቃልኪን DigiDን ንዓኺ ጥራይ እዮም። ንዝኾነ ሰብ ኣይትሃብዮም፡ ንኣስራሒ ወይ ንመሳርሕቲ እውን ከይተረፈ። ኣብ ናይ ሓባር ኮምፒተር፡ ምስ ወዳእኪ ኩሉ ግዜ ካብ ሕሳብ ውጽኢ። ንቑሩብ ትኸዲ ዲኺ? ስክሪን ዕጸውዮ። መሕለፊ ቃል ረሲዕኪ ዲኺ? ካብ ክፍሊ IT (ICT-afdeling) ሓድሽ ሕተቲ። ሕግታት ኮምፒተር ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንክፍሊ IT ሕተቲ።", x: "መሕለፊ ቃልኩምን DigiDን ንዓኹም ጥራይ እዮም። ንዝኾነ ሰብ ኣይትሃብዎም፡ ንኣስራሒ ወይ ንመሳርሕቲ እውን ከይተረፈ። ኣብ ናይ ሓባር ኮምፒተር፡ ምስ ወዳእኩም ኩሉ ግዜ ካብ ሕሳብ ውጽኡ። ንቑሩብ ትኸዱ ዶ? ስክሪን ዕጸውዎ። መሕለፊ ቃል ረሲዕኩም ዶ? ካብ ክፍሊ IT (ICT-afdeling) ሓድሽ ሕተቱ። ሕግታት ኮምፒተር ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንክፍሊ IT ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.p': "ንቑሩብ እኸይድ ኣለኹ። ስክሪነይ እዓጹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.s': { m: "ተቖጻጻሪኻ ወረቓቕቲ ቀልጢፉ ንምድላው DigiDን መሕለፊ ቃልን ይሓተካ። እንታይ ትገብር?", f: "ተቖጻጻሪኺ ወረቓቕቲ ቀልጢፉ ንምድላው DigiDን መሕለፊ ቃልን ይሓተኪ። እንታይ ትገብሪ?", x: "ተቖጻጻሪኹም ወረቓቕቲ ቀልጢፉ ንምድላው DigiDን መሕለፊ ቃልን ይሓተኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.login.o1': "ኣይፋል ምባል፡ ንሱ እናሓገዘ ብውልቂ ምእታው።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o2': "ሓለቓ ስለ ዝኾነ፡ ሓንሳእ ጥራይ ምሃብ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.o3': "ደሓር ክጥቀመሉ ኣብ ወረቐት ምጽሓፍ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.w': "ብDigiD ሓደ ሰብ ግብሪ፡ ሓገዝ ገንዘብን ወረቓቕቲ ጥዕናን ክርኢን ክቕይርን ይኽእል። ናይ ውልቂ ጥራይ እዩ። ብውልቂ ምእታውን ሓደ ሰብ ክሕግዝ ምፍቃድን ይከኣል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish': "ህጹጽን መጠወቕን? ኣይትጠውቑ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.b': { m: "ናይ ሓሶት ኢመይል (phishing) መብዛሕትኡ ግዜ ሓቀኛ ይመስል። ቀልጢፍካ ክትገብር ይደሊ: «ሕሳብኩም ሎሚ ክዕጾ እዩ!»። ንሰዳዲ ኣረጋግጽ። ኣብ ዘይተጸበኻዮ ሊንክ ኣይትጠውቕ፡ ዘይተጸበኻዮ ፋይል እውን ኣይትኽፈት። ባዕልኻ ናብቲ ሓቀኛ መርበብ ወይ ኣፕ ኪድ። ዋላ ከምኡ ጠዊቕካ ዲኻ? መሕለፊ ቃል ብቕጽበት ቀይር፡ ናብ ክፍሊ IT ድማ ደውል። ነውሪ ኣይኮነን: ቀልጢፎም ምስ ዝፈልጡ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ናይ ሓሶት ኢመይል (phishing) መብዛሕትኡ ግዜ ሓቀኛ ይመስል። ቀልጢፍኪ ክትገብሪ ይደሊ: «ሕሳብኩም ሎሚ ክዕጾ እዩ!»። ንሰዳዲ ኣረጋግጺ። ኣብ ዘይተጸበኺዮ ሊንክ ኣይትጠውቒ፡ ዘይተጸበኺዮ ፋይል እውን ኣይትኽፈቲ። ባዕልኺ ናብቲ ሓቀኛ መርበብ ወይ ኣፕ ኪዲ። ዋላ ከምኡ ጠዊቕኪ ዲኺ? መሕለፊ ቃል ብቕጽበት ቀይሪ፡ ናብ ክፍሊ IT ድማ ደውሊ። ነውሪ ኣይኮነን: ቀልጢፎም ምስ ዝፈልጡ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ናይ ሓሶት ኢመይል (phishing) መብዛሕትኡ ግዜ ሓቀኛ ይመስል። ቀልጢፍኩም ክትገብሩ ይደሊ: «ሕሳብኩም ሎሚ ክዕጾ እዩ!»። ንሰዳዲ ኣረጋግጹ። ኣብ ዘይተጸበኹምዎ ሊንክ ኣይትጠውቑ፡ ዘይተጸበኹምዎ ፋይል እውን ኣይትኽፈቱ። ባዕልኹም ናብቲ ሓቀኛ መርበብ ወይ ኣፕ ኪዱ። ዋላ ከምኡ ጠዊቕኩም ዶ? መሕለፊ ቃል ብቕጽበት ቀይሩ፡ ናብ ክፍሊ IT ድማ ደውሉ። ነውሪ ኣይኮነን: ቀልጢፎም ምስ ዝፈልጡ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.p': "ኣብ ዘጠራጥር ሊንክ ጠዊቐ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.s': { m: 'ኣብ ሓደ ኢመይል ዘሎ ሊንክ ጠዊቕካ፡ መሕለፊ ቃል ድማ ጸሒፍካ። ደሓር እቲ ኢመይል ናይ ሓሶት ምንባሩ ትርኢ። እንታይ ትገብር?', f: 'ኣብ ሓደ ኢመይል ዘሎ ሊንክ ጠዊቕኪ፡ መሕለፊ ቃል ድማ ጸሒፍኪ። ደሓር እቲ ኢመይል ናይ ሓሶት ምንባሩ ትርእዪ። እንታይ ትገብሪ?', x: 'ኣብ ሓደ ኢመይል ዘሎ ሊንክ ጠዊቕኩም፡ መሕለፊ ቃል ድማ ጸሒፍኩም። ደሓር እቲ ኢመይል ናይ ሓሶት ምንባሩ ትርእዩ። እንታይ ትገብሩ?' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.phish.o1': "መሕለፊ ቃል ምቕያርን ናብ ክፍሊ IT ምድዋልን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o2': "ካልእ ሰብ ከይጠውቖ ነቲ ኢመይል ምድምሳስ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.o3': "ገለ ነገር እንተ ተበላሽዩ ንምርኣይ ሓንቲ መዓልቲ ምጽባይ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.w': "ብመሕለፊ ቃል ካልእ ሰብ ናብ ሲስተማት ስራሕ ክኣቱ ይኽእል። ብቕልጡፍ ምስ ዝቕየርን ክፍሊ IT ምስ ዝሕበርን፡ ብግዜኡ ደው ከብልዎ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice': "ጥንካረታትኩም ኣገደስቲ እዮም", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.b': { m: "ኣብ እንታይ ጽቡቕ ኢኻ? ብዛዕባ ስራሕ፡ ቤት ትምህርትን ገዛን ሕሰብ። ስድራ ምእላይ፡ ንእሽቶ ስራሕ ወይ ናይ ወለንታ ስራሕ እውን ይቑጸሩ። እንታይ ትፈቱ፡ እንታይከ ዘይትፈቱ? ኣየናይ ስራሕ ከም ዝሰማማዓካ ኣይትፈልጥን ዲኻ? ሓደ መዓልቲ ምስ ሓደ ሰብ ናብ ስራሕ ክትከይድ ሕተት (meeloopdag)። ኣብ ቤት ትምህርቲ ዘሎ መራሒ ክትመርጽ ክሕግዘካ ይኽእል።", f: "ኣብ እንታይ ጽቡቕ ኢኺ? ብዛዕባ ስራሕ፡ ቤት ትምህርትን ገዛን ሕሰቢ። ስድራ ምእላይ፡ ንእሽቶ ስራሕ ወይ ናይ ወለንታ ስራሕ እውን ይቑጸሩ። እንታይ ትፈትዊ፡ እንታይከ ዘይትፈትዊ? ኣየናይ ስራሕ ከም ዝሰማማዓኪ ኣይትፈልጥን ዲኺ? ሓደ መዓልቲ ምስ ሓደ ሰብ ናብ ስራሕ ክትከዲ ሕተቲ (meeloopdag)። ኣብ ቤት ትምህርቲ ዘሎ መራሒ ክትመርጺ ክሕግዘኪ ይኽእል።", x: "ኣብ እንታይ ጽቡቓት ኢኹም? ብዛዕባ ስራሕ፡ ቤት ትምህርትን ገዛን ሕሰቡ። ስድራ ምእላይ፡ ንእሽቶ ስራሕ ወይ ናይ ወለንታ ስራሕ እውን ይቑጸሩ። እንታይ ትፈትዉ፡ እንታይከ ዘይትፈትዉ? ኣየናይ ስራሕ ከም ዝሰማማዓኩም ኣይትፈልጡን ዶ? ሓደ መዓልቲ ምስ ሓደ ሰብ ናብ ስራሕ ክትከዱ ሕተቱ (meeloopdag)። ኣብ ቤት ትምህርቲ ዘሎ መራሒ ክትመርጹ ክሕግዘኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.p': "ምስ ሰባት ጽቡቕ ክዛመድ እኽእል እየ። ኣብ ገዛ ብዙሕ እሕግዝ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.s': { m: "ኣብ ቤት ትምህርቲ «ኣብ እንታይ ጽቡቕ ኢኻ?» ይሓቱኻ። ክፍሊት ዘለዎ ስራሕ ፈጺሙ ኣይነበረካን። እንታይ ትብል?", f: "ኣብ ቤት ትምህርቲ «ኣብ እንታይ ጽቡቕ ኢኺ?» ይሓቱኺ። ክፍሊት ዘለዎ ስራሕ ፈጺሙ ኣይነበረኪን። እንታይ ትብሊ?", x: "ኣብ ቤት ትምህርቲ «ኣብ እንታይ ጽቡቓት ኢኹም?» ይሓቱኹም። ክፍሊት ዘለዎ ስራሕ ፈጺሙ ኣይነበረኩምን። እንታይ ትብሉ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o1': "ኣብ ገዛ ጽቡቕ ዝግበር ነገር፡ ከም ንኻልኦት ምእላይ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o2': "ስራሕ ስለ ዘይነበረ፡ ገና ከም ዘይፍለጥ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.o3': "ዝኾነ ዓይነት ስራሕ ክግበር ከም ዝከኣል፡ ብሓቂ ኩሉ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.w': "ክእለት ካብ ገዛ እውን ይቑጸር። ምእላይ፡ ምውጣንን ምሕጋዝን ኣስራሕቲ ዘድልዮም ክእለታት እዮም። ዝተገብረ ብኣብነት ምንጋር ይሕግዝ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep': "ድሕሪ Entree: ደረጃ 2 ወይ ስራሕ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.b': { m: "ብዲፕሎማ Entree ናብ ደረጃ 2 ናይ mbo ክትቕጽል ትኽእል። ዲፕሎማ ደረጃ 2 ወይ ልዕሊኡ መሰረታዊ ብቕዓት (startkwalificatie) እዩ። ስራሕ ንምርካብን ንምሓዝን ይሕግዝ። ኣብ bbl ኣብ ትካል ትሰርሕ፡ ኣብ ሰሙን ድማ ሓደ መዓልቲ ኣቢሉ ናብ ቤት ትምህርቲ ትኸይድ። ንእኡ ስራሕ ወይ ቦታ ስራሕን ትምህርትን (leerwerkbaan) የድሊ። ናብ መዓልቲ ክፉት ኣፍደገ ኪድ፡ ምስ መራሒ ቤት ትምህርቲ ድማ ተዛረብ።", f: "ብዲፕሎማ Entree ናብ ደረጃ 2 ናይ mbo ክትቕጽሊ ትኽእሊ። ዲፕሎማ ደረጃ 2 ወይ ልዕሊኡ መሰረታዊ ብቕዓት (startkwalificatie) እዩ። ስራሕ ንምርካብን ንምሓዝን ይሕግዝ። ኣብ bbl ኣብ ትካል ትሰርሒ፡ ኣብ ሰሙን ድማ ሓደ መዓልቲ ኣቢሉ ናብ ቤት ትምህርቲ ትኸዲ። ንእኡ ስራሕ ወይ ቦታ ስራሕን ትምህርትን (leerwerkbaan) የድሊ። ናብ መዓልቲ ክፉት ኣፍደገ ኪዲ፡ ምስ መራሒ ቤት ትምህርቲ ድማ ተዛረቢ።", x: "ብዲፕሎማ Entree ናብ ደረጃ 2 ናይ mbo ክትቕጽሉ ትኽእሉ። ዲፕሎማ ደረጃ 2 ወይ ልዕሊኡ መሰረታዊ ብቕዓት (startkwalificatie) እዩ። ስራሕ ንምርካብን ንምሓዝን ይሕግዝ። ኣብ bbl ኣብ ትካል ትሰርሑ፡ ኣብ ሰሙን ድማ ሓደ መዓልቲ ኣቢሉ ናብ ቤት ትምህርቲ ትኸዱ። ንእኡ ስራሕ ወይ ቦታ ስራሕን ትምህርትን (leerwerkbaan) የድሊ። ናብ መዓልቲ ክፉት ኣፍደገ ኪዱ፡ ምስ መራሒ ቤት ትምህርቲ ድማ ተዛረቡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.p': "ድሕሪ Entree ናብ ደረጃ 2 ክኸይድ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.s': { m: "ዲፕሎማ Entree ኣለካ። ሓደ ትካል ብዘይ ስልጠና ስራሕ የቕርበልካ። ምምሃር ክትቕጽል እውን ትደሊ። እንታይ ትገብር?", f: "ዲፕሎማ Entree ኣለኪ። ሓደ ትካል ብዘይ ስልጠና ስራሕ የቕርበልኪ። ምምሃር ክትቕጽሊ እውን ትደልዪ። እንታይ ትገብሪ?", x: "ዲፕሎማ Entree ኣለኩም። ሓደ ትካል ብዘይ ስልጠና ስራሕ የቕርበልኩም። ምምሃር ክትቕጽሉ እውን ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.nextstep.o1': "ቦታ bbl ክርከብ ይኽእል እንተኾይኑ ንትካል ምሕታት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o2': "ነቲ ስራሕ ምቕባልን ንሓዋሩ ምምሃር ምቁራጽን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.o3': "ሓደ ቤት ትምህርቲ ክሳብ ዝድውል ኣብ ገዛ ምጽናሕ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.w': "ኣብ bbl ብሓደ ግዜ ይስራሕን ይምሃርን። ገንዘብ ይርከብ፡ ዲፕሎማ ደረጃ 2 እውን። ብዙሓት ትካላት ነዚ ይፈትውዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email': "ሓጺር ኢመይል: መን፡ እንታይ፡ መዓስ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.b': { m: 'ናብ ስራሕ ዝኸይድ ኢመይል ሓጺርን ትሑትን እዩ። ብሰላምታ ጀምር፡ ንኣብነት «Beste Karin,»። ደሓር እንታይ ከም እትደሊን መዓስን ጽሓፍ። ብሰላምታን ምሉእ ስምካን ዛዝም። ሓጺር ኣርእስቲ ጽሓፍ፡ ንኣብነት «Vrij op vrijdag»። ቅድሚ ምልኣኽካ ኢመይልካ ደጊምካ ኣንብብ።', f: 'ናብ ስራሕ ዝኸይድ ኢመይል ሓጺርን ትሑትን እዩ። ብሰላምታ ጀምሪ፡ ንኣብነት «Beste Karin,»። ደሓር እንታይ ከም እትደልዪን መዓስን ጽሓፊ። ብሰላምታን ምሉእ ስምኪን ዛዝሚ። ሓጺር ኣርእስቲ ጽሓፊ፡ ንኣብነት «Vrij op vrijdag»። ቅድሚ ምልኣኽኪ ኢመይልኪ ደጊምኪ ኣንብቢ።', x: 'ናብ ስራሕ ዝኸይድ ኢመይል ሓጺርን ትሑትን እዩ። ብሰላምታ ጀምሩ፡ ንኣብነት «Beste Karin,»። ደሓር እንታይ ከም እትደልዩን መዓስን ጽሓፉ። ብሰላምታን ምሉእ ስምኩምን ዛዝሙ። ሓጺር ኣርእስቲ ጽሓፉ፡ ንኣብነት «Vrij op vrijdag»። ቅድሚ ምልኣኽኩም ኢመይልኩም ደጊምኩም ኣንብቡ።' }, // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.email.p': "ክብርቲ ካሪን፡ ዓርቢ ዕረፍቲ ክወስድ ይኽእል ዶ? ሰላምታ፡ ዓሊ ሓዳድ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.s': { m: "ዝመጽእ ዓርቢ ዕረፍቲ ትደሊ። ናብ ተቖጻጻሪኻ ኣየናይ ኢመይል ዝበለጸ እዩ?", f: "ዝመጽእ ዓርቢ ዕረፍቲ ትደልዪ። ናብ ተቖጻጻሪኺ ኣየናይ ኢመይል ዝበለጸ እዩ?", x: "ዝመጽእ ዓርቢ ዕረፍቲ ትደልዩ። ናብ ተቖጻጻሪኹም ኣየናይ ኢመይል ዝበለጸ እዩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o1': "«Beste Karin, mag ik vrijdag vrij? Groet, Ali Haddad»", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o2': "«Vrijdag ben ik er niet.» (ብዘይ ሰላምታን ብዘይ ስምን)።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.o3': "ብዛዕባ ሰሙን ነዊሕ ኢመይል፡ ሕቶ ኣብ መወዳእታ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.w': "ጽቡቕ ኢመይል ሰላምታ፡ ሓንቲ ንጽርቲ ሕቶን ስምን ኣለዎ። ሽዑ ተቖጻጻሪ ቀልጢፉ ክምልስ ይኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget': "ቅድም ቀወምቲ ወጻኢታት", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.b': { m: "ደሞዝ ምስ ተቐበልካ፡ ቅድም ቀወምቲ ወጻኢታት ክፈል: ክራይ፡ መድሕንን ተሌፎንን። ኣብ ነፍሲ ወከፍ ወርሒ ንእሽቶ መጠን ክትቁጥብ ፈትን፡ 10 ዩሮ እውን እንተኾነ። ሕጂ ግዛእ፡ ጸኒሕካ ክፈል እውን ዕዳ እዩ። ብኢንተርነት ገለ ነገር ገዚእካ ዲኻ? ሽዑ ብተለምዶ ኣብ ውሽጢ 14 መዓልቲ ሓሳብ ምቕያር ይከኣል። ቅብሊት ሓዞ: ንውሕስነት የድሊ።", f: "ደሞዝ ምስ ተቐበልኪ፡ ቅድም ቀወምቲ ወጻኢታት ክፈሊ: ክራይ፡ መድሕንን ተሌፎንን። ኣብ ነፍሲ ወከፍ ወርሒ ንእሽቶ መጠን ክትቁጥቢ ፈትኒ፡ 10 ዩሮ እውን እንተኾነ። ሕጂ ግዛእ፡ ጸኒሕካ ክፈል እውን ዕዳ እዩ። ብኢንተርነት ገለ ነገር ገዚእኪ ዲኺ? ሽዑ ብተለምዶ ኣብ ውሽጢ 14 መዓልቲ ሓሳብ ምቕያር ይከኣል። ቅብሊት ሓዝዮ: ንውሕስነት የድሊ።", x: "ደሞዝ ምስ ተቐበልኩም፡ ቅድም ቀወምቲ ወጻኢታት ክፈሉ: ክራይ፡ መድሕንን ተሌፎንን። ኣብ ነፍሲ ወከፍ ወርሒ ንእሽቶ መጠን ክትቁጥቡ ፈትኑ፡ 10 ዩሮ እውን እንተኾነ። ሕጂ ግዛእ፡ ጸኒሕካ ክፈል እውን ዕዳ እዩ። ብኢንተርነት ገለ ነገር ገዚእኩም ዶ? ሽዑ ብተለምዶ ኣብ ውሽጢ 14 መዓልቲ ሓሳብ ምቕያር ይከኣል። ቅብሊት ሓዝዎ: ንውሕስነት የድሊ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.p': "ሕጂ ክኸፍል ይሓይሸኒ። ሽዑ ዕዳ የብለይን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.s': { m: "ሎሚ ደሞዝ ትቕበል። ሓደሽቲ ጫማ ትደሊ፡ ክራይ ድማ ገና ኣይተኸፍለን። እንታይ ትገብር?", f: "ሎሚ ደሞዝ ትቕበሊ። ሓደሽቲ ጫማ ትደልዪ፡ ክራይ ድማ ገና ኣይተኸፍለን። እንታይ ትገብሪ?", x: "ሎሚ ደሞዝ ትቕበሉ። ሓደሽቲ ጫማ ትደልዩ፡ ክራይ ድማ ገና ኣይተኸፍለን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.o1': 'ቅድም ክራይ ምኽፋል፡ ደሓር ዝተረፈ ምርኣይ።', // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.budget.o2': 'ጫማ ምግዛእ፡ ክራይ ደሓር ምኽፋል።', // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.budget.o3': "ጫማ ብ«ጸኒሕካ ክፈል» ምግዛእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.w': "ክራይ፡ መድሕንን ተሌፎንን ኣብ ነፍሲ ወከፍ ወርሒ ይመጹ። ቅድም ምስ ዝኽፈሉ፡ ክንደይ ገንዘብ ከም ዝተረፈ ይፍለጥ። ሽዑ ዕዳ ኣይእከብን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy': "ድቃስ፡ መግብን ብዘይ ኣደንዘዝቲ ዕጸን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.b': { m: "እኹል ምስ እትድቅስ፡ ብዝሓሸን ብዝያዳ ድሕንነትን ትሰርሕ፡ ድሕሪ ምሸታዊ ፈረቓ እውን። ቁርሲ ብላዕ፡ ኣብ ውሽጢ መዓልቲ ድማ ማይ ስተ። ኣብ ግዜ ዕረፍቲ ተንቀሳቐስ፡ ንኣብነት ሓጺር ዙረት። ኣብ ትሕቲ ጽልዋ ኣልኮል ወይ ኣደንዘዝቲ ዕጸ ምስራሕ ሓደገኛ እዩ፡ መብዛሕትኦም ኣስራሕቲ ድማ ይኽልክልዎ። ንነዊሕ ግዜ ጓሂ ተሰሚዑካ ድዩ፡ ወይስ ምስታይ ወይ ምጥቃም ደው ከተብሎ ኣይከኣልካን? ምስ ሓኪም ስድራ (huisarts) ተዛረብ። ሓኪም ክሕግዝ ይኽእል፡ ብምስጢር ድማ ይሕዞ።", f: "እኹል ምስ እትድቅሲ፡ ብዝሓሸን ብዝያዳ ድሕንነትን ትሰርሒ፡ ድሕሪ ምሸታዊ ፈረቓ እውን። ቁርሲ ብልዒ፡ ኣብ ውሽጢ መዓልቲ ድማ ማይ ስተዪ። ኣብ ግዜ ዕረፍቲ ተንቀሳቐሲ፡ ንኣብነት ሓጺር ዙረት። ኣብ ትሕቲ ጽልዋ ኣልኮል ወይ ኣደንዘዝቲ ዕጸ ምስራሕ ሓደገኛ እዩ፡ መብዛሕትኦም ኣስራሕቲ ድማ ይኽልክልዎ። ንነዊሕ ግዜ ጓሂ ተሰሚዑኪ ድዩ፡ ወይስ ምስታይ ወይ ምጥቃም ደው ከተብልዮ ኣይከኣልክን? ምስ ሓኪም ስድራ (huisarts) ተዛረቢ። ሓኪም ክሕግዝ ይኽእል፡ ብምስጢር ድማ ይሕዞ።", x: "እኹል ምስ እትድቅሱ፡ ብዝሓሸን ብዝያዳ ድሕንነትን ትሰርሑ፡ ድሕሪ ምሸታዊ ፈረቓ እውን። ቁርሲ ብልዑ፡ ኣብ ውሽጢ መዓልቲ ድማ ማይ ስተዩ። ኣብ ግዜ ዕረፍቲ ተንቀሳቐሱ፡ ንኣብነት ሓጺር ዙረት። ኣብ ትሕቲ ጽልዋ ኣልኮል ወይ ኣደንዘዝቲ ዕጸ ምስራሕ ሓደገኛ እዩ፡ መብዛሕትኦም ኣስራሕቲ ድማ ይኽልክልዎ። ንነዊሕ ግዜ ጓሂ ተሰሚዑኩም ድዩ፡ ወይስ ምስታይ ወይ ምጥቃም ደው ከተብልዎ ኣይከኣልኩምን? ምስ ሓኪም ስድራ (huisarts) ተዛረቡ። ሓኪም ክሕግዝ ይኽእል፡ ብምስጢር ድማ ይሕዞ።" }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.healthy.p': "ንነዊሕ ግዜ ጓሂ ተሰሚዑኒ። ቆጸራ ክሕዝ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.s': { m: "ሎሚ ምሸት ናይ ለይቲ ፈረቓ ኣለካ። ሓደ መሳርሕቲ ንቑሕ ንምጽናሕ ከኒና የቕርበልካ። እንታይ ትገብር?", f: "ሎሚ ምሸት ናይ ለይቲ ፈረቓ ኣለኪ። ሓደ መሳርሕቲ ንቑሕ ንምጽናሕ ከኒና የቕርበልኪ። እንታይ ትገብሪ?", x: "ሎሚ ምሸት ናይ ለይቲ ፈረቓ ኣለኩም። ሓደ መሳርሕቲ ንቑሕ ንምጽናሕ ከኒና የቕርበልኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o1': "ኣይፋል ምባል፡ ቅድሚ ፈረቓ ቁሩብ ሰዓታት ምድቃስ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o2': "ፍርቂ ከኒና ምውሳድ፡ ሓደገኛ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.o3': "ምውሳድ፡ ግን ኣብ ስራሕ ንዝኾነ ሰብ ዘይምንጋር።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.w': "ካብ መሳርሕቲ ዝመጽእ ከኒና ኣደንዘዝቲ ዕጸ ክኸውን ይኽእል። ሕማም ወይ ኣብ ስራሕ ጌጋ ከስዕብ ይኽእል። ድቃስ ንንቑሕ ምጽናሕ ውሑስ መንገዲ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    // Vervoer en bezorging, Voedselverwerking, Je goed voelen, Weer aan het werk na ziekte (5 nov 2026)
    'u.sick': "ሕማም", // nieuw, nalezen // nagelezen AI 22 nov
    'u.delivery': "መጓዓዝያን ምብጻሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.food': "ምስ መግቢ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mes': "ካራ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijhandschoen': "ጓንቲ መከላኸሊ ምቑራጽ (ካብ ምቑራጽ ዝከላኸል ጓንቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriescel': "ክፍሊ ፍሪዘር (ኣዝዩ ዝዝሕል ክፍሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sieraden': "ስልማት (ቀለበት፡ ሰዓት፡ ጉትቻ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pleister': "ፕላስተር (ንንእሽቶ መቑሰሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vlees': "ስጋ", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.1': "ስልማተይ የውጽእ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.2': "ጓንቲ መከላኸሊ ምቑራጽ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.food.3': "ኣብ ክፍሊ ፍሪዘር ውዑይ ጃኬት እኽደን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.q': "ስለምንታይ ሕጂ ነቲ መስመር ነጽርዮ ኣለና?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food.a': "ዝቕጽል ፍርያት ብዘይ ለውዝ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.parcel': "ጥቕሊላት ምብጻሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pakket': "ጥቕሊል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestelbus': "መኪና ምብጻሕ ኣቕሑ (ቫን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezorgen': "ምብጻሕ (ናብ ዓሚል ምውሳድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inladen': "ምጽዓን (ነገራት ናብ መኪና ምእታው)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbellen': "ደወል ማዕጾ ምድዋል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewijs': "መረጋገጺ (እንታይ ከም ዘጋጠመ ዘርኢ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.1': "ነፍሲ ወከፍ ጥቕሊል ስካን እገብር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.2': "እቲ ዓሚል ኣብ ገዛ የለን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.parcel.3': "ንጎረባብቲ ሓደ ጥቕሊል ክትቕበሉ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.q': "እዚ ጥቕሊል ናተይ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.parcel.a': "እወ። በጃኹም ኣብዚ ፈርሙ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.road': "ኣብ ጽርግያ ውሑስን ፍትሓውን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijden': "ምዝዋር (መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaar': "ከቢድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekwagen': "ናይ ኢድ ዓረብያ (ንኸበድቲ ሳጹናት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.route': "መስመር (ዝኽየድ መገዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loondienst': "ብደሞዝ ዝሰርሕ ሰራሕተኛ (ንኣስራሒ ይሰርሕ፡ ደሞዝ ይረክብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bepalen': "ምውሳን (ብኸመይ ክግበር ከም ዘለዎ ምንጋር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.1': "እዚ ጥቕሊል ኣዝዩ ከቢድ እዩ። ናይ ኢድ ዓረብያ ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.2': "ዘንሸራትት እዩ። ቀስ ኢለ እዝውር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.road.3': "መስመረይን ሰዓታተይን መን እዩ ዝውስኖ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.q': { m: "ሎሚ ሓደ ተወሳኺ ዙረት ክትገብር ትኽእል ዶ?", f: "ሎሚ ሓደ ተወሳኺ ዙረት ክትገብሪ ትኽእሊ ዶ?", x: "ሎሚ ሓደ ተወሳኺ ዙረት ክትገብሩ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.road.a': "ኣይፋል፡ ሽዑ ንዕረፍተይ ግዜ ኣይህልወንን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.food': "ጽሩይ ኢድ፡ ውሑስ መግቢ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.b': { m: "ምስ መግቢ ምስራሕ ጽኑዕ ሕግታት ጽሬት ኣለዎ፡ መሸፈኒ ጸጉሪ፡ ጽሩይ ክዳን ስራሕ፡ ዝተሓጽበ ኢድን ብዘይ ስልማትን። እዞም ሕግታት ንኹሉ ሰብ ሓደ እዮም። ብዛዕባኻ ገለ ኣይብሉን፡ ነቲ መግቢ ንዝበልዕዎ ሰባት ውሑስ ይገብርዎ። ምስ ካራ ኩሉ ግዜ ጓንቲ መከላኸሊ ምቑራጽካ ግበር። ኣብ ዝሑል ክፍሊ ወይ ክፍሊ ፍሪዘር፡ ነቲ ዝወሃበካ ውዑይ ክዳን ተኸደን፡ ኣብ ግዜ ዕረፍትኻ ድማ ተሞቐ። ሕሙም ዲኻ፡ ወይስ ኣብ ኢድካ መቑሰሊ ኣለካ? ቅድሚ ምጅማርካ ሕበር። ሽዑ ፍሉይ ፕላስተር፡ ወይ ንግዜኡ ካልእ ስራሕ ክትረክብ ትኽእል ኢኻ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ምስ መግቢ ምስራሕ ጽኑዕ ሕግታት ጽሬት ኣለዎ፡ መሸፈኒ ጸጉሪ፡ ጽሩይ ክዳን ስራሕ፡ ዝተሓጽበ ኢድን ብዘይ ስልማትን። እዞም ሕግታት ንኹሉ ሰብ ሓደ እዮም። ብዛዕባኺ ገለ ኣይብሉን፡ ነቲ መግቢ ንዝበልዕዎ ሰባት ውሑስ ይገብርዎ። ምስ ካራ ኩሉ ግዜ ጓንቲ መከላኸሊ ምቑራጽኪ ግበሪ። ኣብ ዝሑል ክፍሊ ወይ ክፍሊ ፍሪዘር፡ ነቲ ዝወሃበኪ ውዑይ ክዳን ተኸደኒ፡ ኣብ ግዜ ዕረፍትኺ ድማ ተሞቐዪ። ሕምምቲ ዲኺ፡ ወይስ ኣብ ኢድኪ መቑሰሊ ኣለኪ? ቅድሚ ምጅማርኪ ሕበሪ። ሽዑ ፍሉይ ፕላስተር፡ ወይ ንግዜኡ ካልእ ስራሕ ክትረኽቢ ትኽእሊ ኢኺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ምስ መግቢ ምስራሕ ጽኑዕ ሕግታት ጽሬት ኣለዎ፡ መሸፈኒ ጸጉሪ፡ ጽሩይ ክዳን ስራሕ፡ ዝተሓጽበ ኢድን ብዘይ ስልማትን። እዞም ሕግታት ንኹሉ ሰብ ሓደ እዮም። ብዛዕባኹም ገለ ኣይብሉን፡ ነቲ መግቢ ንዝበልዕዎ ሰባት ውሑስ ይገብርዎ። ምስ ካራ ኩሉ ግዜ ጓንቲ መከላኸሊ ምቑራጽኩም ግበሩ። ኣብ ዝሑል ክፍሊ ወይ ክፍሊ ፍሪዘር፡ ነቲ ዝወሃበኩም ውዑይ ክዳን ተኸደኑ፡ ኣብ ግዜ ዕረፍትኹም ድማ ተሞቐዩ። ሕሙማት ዲኹም፡ ወይስ ኣብ ኢድኩም መቑሰሊ ኣለኩም? ቅድሚ ምጅማርኩም ሕበሩ። ሽዑ ፍሉይ ፕላስተር፡ ወይ ንግዜኡ ካልእ ስራሕ ክትረኽቡ ትኽእሉ ኢኹም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.p': "ኣብ ኢደይ ንእሽቶ መቑሰሊ ኣለኒ። ፕላስተር ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.s': { m: "ኣብ ገዛ ኣጻብዕካ ቁሩብ ቆሪጽካ። ሎሚ ምስ ስጋ ትሰርሕ። እንታይ ትገብር?", f: "ኣብ ገዛ ኣጻብዕኪ ቁሩብ ቆሪጽኪ። ሎሚ ምስ ስጋ ትሰርሒ። እንታይ ትገብሪ?", x: "ኣብ ገዛ ኣጻብዕኩም ቁሩብ ቆሪጽኩም። ሎሚ ምስ ስጋ ትሰርሑ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o1': { m: "ንተቖጻጻሪኻ ንገሮ፡ ፕላስተር ድማ ሕተት።", f: "ንተቖጻጻሪኺ ንገርዮ፡ ፕላስተር ድማ ሕተቲ።", x: "ንተቖጻጻሪኹም ንገርዎ፡ ፕላስተር ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o2': { m: "ገለ ኣይትበል፡ ንእሽቶ መቑሰሊ ጥራይ እያ።", f: "ገለ ኣይትበሊ፡ ንእሽቶ መቑሰሊ ጥራይ እያ።", x: "ገለ ኣይትበሉ፡ ንእሽቶ መቑሰሊ ጥራይ እያ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.o3': { m: "ሰብ ከይርእዮ ጓንቲ ኣብ ልዕሊኡ ግበር።", f: "ሰብ ከይርእዮ ጓንቲ ኣብ ልዕሊኡ ግበሪ።", x: "ሰብ ከይርእዮ ጓንቲ ኣብ ልዕሊኡ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.w': { m: "ንእሽቶ መቑሰሊ ጀርም ናብ መግቢ ከእቱ ይኽእል። ምስ እትሕብሮ፡ ፍሉይ ፕላስተር ወይ ንግዜኡ ካልእ ስራሕ ክትረክብ ትኽእል። ምሕባር ልሙድ እዩ፡ ሓደ እኳ ኣይወቕሰካን።", f: "ንእሽቶ መቑሰሊ ጀርም ናብ መግቢ ከእቱ ይኽእል። ምስ እትሕብርዮ፡ ፍሉይ ፕላስተር ወይ ንግዜኡ ካልእ ስራሕ ክትረኽቢ ትኽእሊ። ምሕባር ልሙድ እዩ፡ ሓደ እኳ ኣይወቕሰክን።", x: "ንእሽቶ መቑሰሊ ጀርም ናብ መግቢ ከእቱ ይኽእል። ምስ እትሕብርዎ፡ ፍሉይ ፕላስተር ወይ ንግዜኡ ካልእ ስራሕ ክትረኽቡ ትኽእሉ። ምሕባር ልሙድ እዩ፡ ሓደ እኳ ኣይወቕሰኩምን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel': "ኣብ ገዛ የለን፡ ወይ ዝተሰየረ ጥቕሊል", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.b': { m: "እቲ ዓሚል ኣብ ገዛ የለን ድዩ? ሕግታት ትካልካ ተኸተል፡ ንጎረባብቲ ፈትን፡ ወይ ነቲ ጥቕሊል መልሶ። እቲ ዓሚል እንተ ዘይሓተተ፡ ኣብ ማዕጾ ጥራይ ኣይትግደፎ። ጥቕሊል ተሰይሩ ወይ ጠልዩ ድዩ? ገለ ከም ዘይኮነ ጌርካ ኣይተብጽሖ። ከም መረጋገጺ ስእሊ ውሰድ፡ ኣብ ስካነር ወይ ኣብ ኣፕ ድማ ሕበሮ። ብዛዕባ ጸገም ሓቀኛ ምዃን ካብ ምሕባኡ ኩሉ ግዜ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "እቲ ዓሚል ኣብ ገዛ የለን ድዩ? ሕግታት ትካልኪ ተኸተሊ፡ ንጎረባብቲ ፈትኒ፡ ወይ ነቲ ጥቕሊል መልስዮ። እቲ ዓሚል እንተ ዘይሓተተ፡ ኣብ ማዕጾ ጥራይ ኣይትግደፍዮ። ጥቕሊል ተሰይሩ ወይ ጠልዩ ድዩ? ገለ ከም ዘይኮነ ጌርኪ ኣይተብጽሕዮ። ከም መረጋገጺ ስእሊ ውሰዲ፡ ኣብ ስካነር ወይ ኣብ ኣፕ ድማ ሕበርዮ። ብዛዕባ ጸገም ሓቀኛ ምዃን ካብ ምሕባኡ ኩሉ ግዜ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "እቲ ዓሚል ኣብ ገዛ የለን ድዩ? ሕግታት ትካልኩም ተኸተሉ፡ ንጎረባብቲ ፈትኑ፡ ወይ ነቲ ጥቕሊል መልስዎ። እቲ ዓሚል እንተ ዘይሓተተ፡ ኣብ ማዕጾ ጥራይ ኣይትግደፍዎ። ጥቕሊል ተሰይሩ ወይ ጠልዩ ድዩ? ገለ ከም ዘይኮነ ጌርኩም ኣይተብጽሕዎ። ከም መረጋገጺ ስእሊ ውሰዱ፡ ኣብ ስካነር ወይ ኣብ ኣፕ ድማ ሕበርዎ። ብዛዕባ ጸገም ሓቀኛ ምዃን ካብ ምሕባኡ ኩሉ ግዜ ይሓይሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.p': "እዚ ጥቕሊል ተሰይሩ እዩ። ስእሊ እንሆ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.s': { m: "እቲ ዓሚል ኣብ ገዛ የለን፡ ጎረባብቲ እውን የለዉን። እንታይ ትገብር?", f: "እቲ ዓሚል ኣብ ገዛ የለን፡ ጎረባብቲ እውን የለዉን። እንታይ ትገብሪ?", x: "እቲ ዓሚል ኣብ ገዛ የለን፡ ጎረባብቲ እውን የለዉን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o1': { m: "«ኣብ ገዛ የለን» ኢልካ ስካን ግበር፡ ነቲ ጥቕሊል ድማ መልሶ።", f: "«ኣብ ገዛ የለን» ኢልኪ ስካን ግበሪ፡ ነቲ ጥቕሊል ድማ መልስዮ።", x: "«ኣብ ገዛ የለን» ኢልኩም ስካን ግበሩ፡ ነቲ ጥቕሊል ድማ መልስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o2': { m: "ከም ዝበጸሐ ስካን ግበሮ፡ ኣብ ማዕጾ ድማ ግደፎ።", f: "ከም ዝበጸሐ ስካን ግበርዮ፡ ኣብ ማዕጾ ድማ ግደፍዮ።", x: "ከም ዝበጸሐ ስካን ግበርዎ፡ ኣብ ማዕጾ ድማ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.o3': { m: "ሰብ ከይርእዮ ድሕሪ መጕሓፊ ጎሓፍ ሓብኦ።", f: "ሰብ ከይርእዮ ድሕሪ መጕሓፊ ጎሓፍ ሓብእዮ።", x: "ሰብ ከይርእዮ ድሕሪ መጕሓፊ ጎሓፍ ሓብእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.w': { m: "ከም ዝበጸሐ ዝተሰከነ ጥቕሊል ብሓቂ ኣብ ኢድ እቲ ዓሚል ክህሉ ኣለዎ። ብሓቂ ዘጋጠመ ስካን ምስ እትገብር፡ እቲ ዓሚል ደሓር ነቲ ጥቕሊል ክረክቦ ይኽእል፡ ሓደ እኳ ከም ዘጥፋእካዮ ኣይሓስብን።", f: "ከም ዝበጸሐ ዝተሰከነ ጥቕሊል ብሓቂ ኣብ ኢድ እቲ ዓሚል ክህሉ ኣለዎ። ብሓቂ ዘጋጠመ ስካን ምስ እትገብሪ፡ እቲ ዓሚል ደሓር ነቲ ጥቕሊል ክረክቦ ይኽእል፡ ሓደ እኳ ከም ዘጥፋእክዮ ኣይሓስብን።", x: "ከም ዝበጸሐ ዝተሰከነ ጥቕሊል ብሓቂ ኣብ ኢድ እቲ ዓሚል ክህሉ ኣለዎ። ብሓቂ ዘጋጠመ ስካን ምስ እትገብሩ፡ እቲ ዓሚል ደሓር ነቲ ጥቕሊል ክረክቦ ይኽእል፡ ሓደ እኳ ከም ዘጥፋእኩምዎ ኣይሓስብን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road': "ኣብ ጽርግያ ውሑስ፡ ፍትሓዊ ስራሕ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.b': { m: "እናዘወርካ ፈጺምካ ተሌፎንካ ብኢድካ ኣይትሓዝ፡ ክልኩል እዩ። ንናቪጌሽን መትሓዚ ተሌፎን ተጠቐም። ዕረፍትኻ ውሰድ፡ ኣብ ዝተጸምደ መዓልቲ እውን። ከቢድ ጥቕሊል? ናይ ኢድ ዓረብያ ተጠቐም፡ ወይ ብሓባር ኣልዕሎ። በረድ ወይ ኣስሓይታ? ቀስ ኢልካ ዝወር፡ ምድንጓይ ካብ ሓደጋ ይሓይሽ። ገለ ትካላት ከም ናይ ርእስኻ ሰራሕተኛ (zelfstandig) ከም እትሰርሕ ይብሉ። ግን ሰዓታትካ፡ መስመርካን ክዳንካን መን እዩ ዝውስኖ? ኩሉ እቲ ትካል እንተ ወሲንዎ፡ ብሓቂ ብደሞዝ ዝሰርሕ ሰራሕተኛ (in loondienst) ክትከውን ትኽእል ኢኻ። ሽዑ መብዛሕትኡ ግዜ ዝያዳ መሰላት ኣለካ፡ ከም ክትሓምም ከለኻ ደሞዝ። ብዛዕባ እዚ ዝያዳ ኣብ ትምህርቲ «ወረቓቕቲ፡ ምውህሃድን ስራሕካን»። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "እናዘወርኪ ፈጺምኪ ተሌፎንኪ ብኢድኪ ኣይትሓዚ፡ ክልኩል እዩ። ንናቪጌሽን መትሓዚ ተሌፎን ተጠቐሚ። ዕረፍትኺ ውሰዲ፡ ኣብ ዝተጸምደ መዓልቲ እውን። ከቢድ ጥቕሊል? ናይ ኢድ ዓረብያ ተጠቐሚ፡ ወይ ብሓባር ኣልዕልዮ። በረድ ወይ ኣስሓይታ? ቀስ ኢልኪ ዝወሪ፡ ምድንጓይ ካብ ሓደጋ ይሓይሽ። ገለ ትካላት ከም ናይ ርእስኺ ሰራሕተኛ (zelfstandig) ከም እትሰርሒ ይብሉ። ግን ሰዓታትኪ፡ መስመርኪን ክዳንኪን መን እዩ ዝውስኖ? ኩሉ እቲ ትካል እንተ ወሲንዎ፡ ብሓቂ ብደሞዝ እትሰርሒ ሰራሕተኛ (in loondienst) ክትኮኒ ትኽእሊ ኢኺ። ሽዑ መብዛሕትኡ ግዜ ዝያዳ መሰላት ኣለኪ፡ ከም ክትሓምሚ ከለኺ ደሞዝ። ብዛዕባ እዚ ዝያዳ ኣብ ትምህርቲ «ወረቓቕቲ፡ ምውህሃድን ስራሕኪን»። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.p': "ሕጂ ዕረፍተይ እወስድ ኣለኹ። ድሕሪኡ ምዝዋር ክቕጽል እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.s': { m: "እቲ ትካል ናይ ርእስኻ ሰራሕተኛ ይብለካ። ግን ሰዓታትካ፡ መስመርካን ክዳንካን ባዕሉ ይውስን። እንታይ ትገብር?", f: "እቲ ትካል ናይ ርእስኺ ሰራሕተኛ ይብለኪ። ግን ሰዓታትኪ፡ መስመርኪን ክዳንኪን ባዕሉ ይውስን። እንታይ ትገብሪ?", x: "እቲ ትካል ናይ ርእስኹም ሰራሕተኛታት ይብለኩም። ግን ሰዓታትኩም፡ መስመርኩምን ክዳንኩምን ባዕሉ ይውስን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o1': { m: "ምኽሪ ሕተት፡ ምናልባት ብደሞዝ ዝሰርሕ ሰራሕተኛ ኢኻ።", f: "ምኽሪ ሕተቲ፡ ምናልባት ብደሞዝ እትሰርሒ ሰራሕተኛ ኢኺ።", x: "ምኽሪ ሕተቱ፡ ምናልባት ብደሞዝ እትሰርሑ ሰራሕተኛታት ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o2': "ዋላ ሓንቲ፡ እቲ ውዕል «ናይ ርእሱ ሰራሕተኛ» ይብል፡ ስለዚ ከምኡ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.o3': { m: "ተመሳሳሊ ክትረክብ ዝያዳ ሰዓታት ስራሕ።", f: "ተመሳሳሊ ክትረኽቢ ዝያዳ ሰዓታት ስርሒ።", x: "ተመሳሳሊ ክትረኽቡ ዝያዳ ሰዓታት ስርሑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.w': { m: "ኣገዳሲ ብሓቂ ብኸመይ ከም እትሰርሕ እዩ፡ ኣብ ውዕል ዘሎ ቃል ጥራይ ኣይኮነን። እቲ ትካል ብኸመይ፡ መዓስን ኣበይን ከም እትሰርሕ እንተ ወሲኑ፡ መብዛሕትኡ ግዜ ብደሞዝ ዝሰርሕ ሰራሕተኛ ኢኻ። ሽዑ ዝያዳ መሰላት ኣለካ።", f: "ኣገዳሲ ብሓቂ ብኸመይ ከም እትሰርሒ እዩ፡ ኣብ ውዕል ዘሎ ቃል ጥራይ ኣይኮነን። እቲ ትካል ብኸመይ፡ መዓስን ኣበይን ከም እትሰርሒ እንተ ወሲኑ፡ መብዛሕትኡ ግዜ ብደሞዝ እትሰርሒ ሰራሕተኛ ኢኺ። ሽዑ ዝያዳ መሰላት ኣለኪ።", x: "ኣገዳሲ ብሓቂ ብኸመይ ከም እትሰርሑ እዩ፡ ኣብ ውዕል ዘሎ ቃል ጥራይ ኣይኮነን። እቲ ትካል ብኸመይ፡ መዓስን ኣበይን ከም እትሰርሑ እንተ ወሲኑ፡ መብዛሕትኡ ግዜ ብደሞዝ እትሰርሑ ሰራሕተኛታት ኢኹም። ሽዑ ዝያዳ መሰላት ኣለኩም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.feelwell': "ኣብ ስራሕ ጽቡቕ ምስምዕ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.werkdruk': "ጸቕጢ ስራሕ (ኣብ ውሑድ ግዜ ብዙሕ ስራሕ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.wakkerliggen': "ኣብ ዓራት ብንቕሓት ምጽናሕ (ድቃስ ምስኣን)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.ploegendienst': "ስራሕ ብፈረቓ (ንግሆ፡ ምሸትን ለይትን ብተራ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.heimwee': "ናፍቖት ዓዲ (ንገዛን ንዓድን ምንፋቕ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.familie': "ስድራቤት", // nieuw, nalezen // nagelezen AI 22 nov
    'w.alleen': "በይን", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.1': "ብሰንኪ ስራሕ ብፈረቓ ጽቡቕ ኣይድቅስን እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.2': "ኣዝዩ በዚሑ። በይነይ ክኽእሎ ኣይክእልን እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    's.feelwell.3': "ናፍቖት ዓዲ ኣለኒ። ስድራቤተይ ኣብ ርሑቕ እዮም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.q': { m: "ደሓን ዲኻ?", f: "ደሓን ዲኺ?", x: "ደሓን ዲኹም?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a': "ብዙሕ ጽቡቕ ኣይኮነን። ብዙሕ ግዜ ለይቲ ድቃስ ይኸልአኒ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell': { m: "ኣዝዩ በዚሑ? በይንኻ ክትጸሮ ኣየድልየካን", f: "ኣዝዩ በዚሑ? በይንኺ ክትጸርዮ ኣየድልየኪን", x: "ኣዝዩ በዚሑ? በይንኹም ክትጸርዎ ኣየድልየኩምን" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.b': { m: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኻ ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኻ ክትጸሮ ኣየድልየካን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምኖ ሰብ ተዛረብ። ንኣብነት ተቖጻጻሪኻ፡ ሓኪም ትካል (bedrijfsarts) ወይ ሓኪም ስድራኻ (huisarts)። ወይ ድማ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon)፡ ትካልካ እንተሃልይዎ። ባዕልኻ እውን ምስ ሓኪም ትካል ዘተ ክትሓትት ትኽእል ኢኻ። ሓካይም ዝበልካዮ ንሓላፊኻ ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስብ ዲኻ፡ ወይስ ብዛዕባ ሓደ ሰብ ትሻቐል ዲኻ? ናብ 113 ደውል (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ 113.nl ብጽሑፍ ተዘራረብ።", f: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኺ ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኺ ክትጸርዮ ኣየድልየኪን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምንዮ ሰብ ተዛረቢ። ንኣብነት ተቖጻጻሪኺ፡ ሓኪም ትካል (bedrijfsarts) ወይ ሓኪም ስድራኺ (huisarts)። ወይ ድማ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon)፡ ትካልኪ እንተሃልይዎ። ባዕልኺ እውን ምስ ሓኪም ትካል ዘተ ክትሓትቲ ትኽእሊ ኢኺ። ሓካይም ዝበልክዮ ንሓላፊኺ ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስቢ ዲኺ፡ ወይስ ብዛዕባ ሓደ ሰብ ትሻቐሊ ዲኺ? ናብ 113 ደውሊ (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ 113.nl ብጽሑፍ ተዘራረቢ።", x: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኹም ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኹም ክትጸርዎ ኣየድልየኩምን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምንዎ ሰብ ተዛረቡ። ንኣብነት ተቖጻጻሪኹም፡ ሓኪም ትካል (bedrijfsarts) ወይ ሓኪም ስድራኹም (huisarts)። ወይ ድማ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon)፡ ትካልኩም እንተሃልይዎ። ባዕልኹም እውን ምስ ሓኪም ትካል ዘተ ክትሓትቱ ትኽእሉ ኢኹም። ሓካይም ዝበልኩምዎ ንሓላፊኹም ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስቡ ዲኹም፡ ወይስ ብዛዕባ ሓደ ሰብ ትሻቐሉ ዲኹም? ናብ 113 ደውሉ (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ 113.nl ብጽሑፍ ተዘራረቡ።" }, // nagelezen AI 22 nov
    'c.feelwell.p': "ብዙሕ ጽቡቕ ኣይኮንኩን። ንሓጺር ግዜ ምሳኹም ክዛረብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.s': { m: "ንሰሙናት ሕማቕ ትድቅስ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምካ። እንታይ ትገብር?", f: "ንሰሙናት ሕማቕ ትድቅሲ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምኪ። እንታይ ትገብሪ?", x: "ንሰሙናት ሕማቕ ትድቅሱ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o1': { m: "ንተቖጻጻሪኻ ወይ ንሓኪም ትካል ንገር።", f: "ንተቖጻጻሪኺ ወይ ንሓኪም ትካል ንገሪ።", x: "ንተቖጻጻሪኹም ወይ ንሓኪም ትካል ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o2': { m: "ገለ ኣይትበል፡ ዝያዳን ቀልጢፍካን ስራሕ።", f: "ገለ ኣይትበሊ፡ ዝያዳን ቀልጢፍክን ስርሒ።", x: "ገለ ኣይትበሉ፡ ዝያዳን ቀልጢፍኩምን ስርሑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.o3': { m: "ኣብ ገዛ ጽናሕ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገር።", f: "ኣብ ገዛ ጽንሒ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገሪ።", x: "ኣብ ገዛ ጽንሑ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.w': { m: "ኣቐዲምካ ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኻ ክትጸሮ ኣየድልየካን።", f: "ኣቐዲምኪ ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኺ ክትጸርዮ ኣየድልየኪን።", x: "ኣቐዲምኩም ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኹም ክትጸርዎ ኣየድልየኩምን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.backtowork': "ድሕሪ ሕማም ናብ ስራሕ ምምላስ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.opbouwen': "ብኸይዲ ምውሳኽ (ቀስ ብቐስ፡ ስጉምቲ ብስጉምቲ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.halvedagen': "ፍርቂ መዓልትታት (ክፋል መዓልቲ ጥራይ ምስራሕ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.lichtwerk': "ፈኲስ ስራሕ (ከቢድ ዘይኮነ)", // nieuw, nalezen // nagelezen AI 22 nov
    'w.zwaarwerk': "ከቢድ ስራሕ", // nieuw, nalezen // nagelezen AI 22 nov
    'w.herstellen': "ምሕዋይ፡ ደሓን ምዃን", // nieuw, nalezen // nagelezen AI 22 nov
    'w.welkomterug': { m: "እንቋዕ ብደሓን ተመለስካ", f: "እንቋዕ ብደሓን ተመለስኪ", x: "እንቋዕ ብደሓን ተመለስኩም" }, // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.1': "ብፍርቂ መዓልትታት እጅምር ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.2': "ፈኲስ ስራሕ ክሰርሕ እኽእል እየ። ከቢድ ስራሕ ገና ኣይኮነን።", // nieuw, nalezen // nagelezen AI 22 nov
    's.backtowork.3': "ሓኪም ትካል ይብል: ቀስ ብቐስ ክውስኽ ኣለኒ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.q': { m: "እንቋዕ ብደሓን ተመለስካ! ሓይሽካ ዶ?", f: "እንቋዕ ብደሓን ተመለስኪ! ሓይሽኪ ዶ?", x: "እንቋዕ ብደሓን ተመለስኩም! ሓይሽኩም ዶ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a': "እወ፡ ይሓይሽ ኣሎ። ቀስ ኢለ እየ ዝኸይድ ዘለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork': "ስጉምቲ ብስጉምቲ ምምላስ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.b': { m: "ሓይሽካ ዶ? ክትሰርሕ ከም እትኽእል ንኣስራሒኻ ንገሮ (betermelden)። ድሕሪ ነዊሕ ሕማም፡ መብዛሕትኡ ግዜ ስጉምቲ ብስጉምቲ ትጅምር፡ ቅድም ውሑድ ሰዓታት፡ ወይ ፈኲስ ስራሕ። ሓኪም ትካል (bedrijfsarts) እንታይ ክትገብር ከም እትኽእል ምኽሪ ይህብ። ንነዊሕ ግዜ ሕሙም ዲኻ? ሽዑ ንስኻን ኣስራሒኻን ንምምላስካ ብሓባር መደብ ትገብሩ። እዚ ሕጊ እዩ (Wet verbetering poortwachter)። እንታይ ክትገብር ከም እትኽእልን እንታይ ገና ከም ዘይትኽእልን ብንጹር ንገር። ዝነበረካ ሕማም እንታይ ምዃኑ ንመሳርሕትኻ ክትነግሮም ኣየድልየካን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ሓይሽኪ ዶ? ክትሰርሒ ከም እትኽእሊ ንኣስራሒኺ ንገርዮ (betermelden)። ድሕሪ ነዊሕ ሕማም፡ መብዛሕትኡ ግዜ ስጉምቲ ብስጉምቲ ትጅምሪ፡ ቅድም ውሑድ ሰዓታት፡ ወይ ፈኲስ ስራሕ። ሓኪም ትካል (bedrijfsarts) እንታይ ክትገብሪ ከም እትኽእሊ ምኽሪ ይህብ። ንነዊሕ ግዜ ሕምምቲ ዲኺ? ሽዑ ንስኽን ኣስራሒኽን ንምምላስኪ ብሓባር መደብ ትገብሩ። እዚ ሕጊ እዩ (Wet verbetering poortwachter)። እንታይ ክትገብሪ ከም እትኽእሊን እንታይ ገና ከም ዘይትኽእሊን ብንጹር ንገሪ። ዝነበረኪ ሕማም እንታይ ምዃኑ ንመሳርሕትኺ ክትነግርዮም ኣየድልየኪን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ሓይሽኩም ዶ? ክትሰርሑ ከም እትኽእሉ ንኣስራሒኹም ንገርዎ (betermelden)። ድሕሪ ነዊሕ ሕማም፡ መብዛሕትኡ ግዜ ስጉምቲ ብስጉምቲ ትጅምሩ፡ ቅድም ውሑድ ሰዓታት፡ ወይ ፈኲስ ስራሕ። ሓኪም ትካል (bedrijfsarts) እንታይ ክትገብሩ ከም እትኽእሉ ምኽሪ ይህብ። ንነዊሕ ግዜ ሕሙማት ዲኹም? ሽዑ ንስኹምን ኣስራሒኹምን ንምምላስኩም ብሓባር መደብ ትገብሩ። እዚ ሕጊ እዩ (Wet verbetering poortwachter)። እንታይ ክትገብሩ ከም እትኽእሉን እንታይ ገና ከም ዘይትኽእሉን ብንጹር ንገሩ። ዝነበረኩም ሕማም እንታይ ምዃኑ ንመሳርሕትኹም ክትነግርዎም ኣየድልየኩምን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.p': "እዚ ክገብሮ እኽእል እየ። እቲ ግን ገና ኣይክእልን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.s': { m: "ንሰለስተ ሰሙን ሓሚምካ ነይርካ። ኣብ ናይ መጀመርታ መዓልቲ ምምላስካ፡ ተቖጻጻሪኻ ከበድቲ ሳጹናት ከተልዕል ይሓተካ። ሓኪም ትካል ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብር?", f: "ንሰለስተ ሰሙን ሓሚምኪ ነይርኪ። ኣብ ናይ መጀመርታ መዓልቲ ምምላስኪ፡ ተቖጻጻሪኺ ከበድቲ ሳጹናት ከተልዕሊ ይሓተኪ። ሓኪም ትካል ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብሪ?", x: "ንሰለስተ ሰሙን ሓሚምኩም ነይርኩም። ኣብ ናይ መጀመርታ መዓልቲ ምምላስኩም፡ ተቖጻጻሪኹም ከበድቲ ሳጹናት ከተልዕሉ ይሓተኩም። ሓኪም ትካል ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o1': { m: "ሕጂ ፈኲስ ስራሕ ክትሰርሕ ከም እትኽእልን እንታይ ገና ከም ዘይትኽእልን ብህድኣት ንገር።", f: "ሕጂ ፈኲስ ስራሕ ክትሰርሒ ከም እትኽእሊን እንታይ ገና ከም ዘይትኽእሊን ብህድኣት ንገሪ።", x: "ሕጂ ፈኲስ ስራሕ ክትሰርሑ ከም እትኽእሉን እንታይ ገና ከም ዘይትኽእሉን ብህድኣት ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o2': { m: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕሎም፡ ኣሸጋሪ ክትከውን ኣይትደልን።", f: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕልዮም፡ ኣሸጋሪት ክትኮኒ ኣይትደልዪን።", x: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕልዎም፡ ኣሸገርቲ ክትኮኑ ኣይትደልዩን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.o3': { m: "ቃል ከይበልካ ናብ ገዛ ኪድ።", f: "ቃል ከይበልኪ ናብ ገዛ ኪዲ።", x: "ቃል ከይበልኩም ናብ ገዛ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.w': { m: "ተቖጻጻሪኻ ክትምለስ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብር ከም እትኽእል ብንጹር ምስ እትነግር፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመካ ይኽእል።", f: "ተቖጻጻሪኺ ክትምለሲ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብሪ ከም እትኽእሊ ብንጹር ምስ እትነግሪ፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመኪ ይኽእል።", x: "ተቖጻጻሪኹም ክትምለሱ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብሩ ከም እትኽእሉ ብንጹር ምስ እትነግሩ፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.measure': "ምዕቃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolmaat': "ዝጥቕለል ሜትሮ (መዐቀኒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpas': "ሊቨሎ (ገለ ነገር ትኽ ኢሉ እንተ ሎ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meten': "ምዕቃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechtlijn': "ትኽ ዝበለ (ዘይተጠወየ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plank': "ሰሌዳ ዕንጨይቲ (ጣውላ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroef': "ቪተ (ዝጥምዘዝ ምስማር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.1': "እዚ ሰሌዳ ክንደይ ንውሓቱ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.2': "እቲ መንደቕ ትኽ ዝበለ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.measure.3': "ክልተ ሳዕ እዕቅኖ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.q': "ስፍሓቱ ክንደይ ክኸውን ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure.a': "ተስዓ ሰንቲሜተር። እጽሕፎ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.measure': { m: "ክልተ ሳዕ ዓቅን፡ ሓንሳብ ቁረጽ", f: "ክልተ ሳዕ ዓቅኒ፡ ሓንሳብ ቁረጺ", x: "ክልተ ሳዕ ዓቅኑ፡ ሓንሳብ ቁረጹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.b': { m: "ኣብ ቦታ ህንጻ፡ ዓቐናት መብዛሕትኡ ግዜ ብሚሊሜተር እዮም። ስለዚ «ትሽዓተ ሚእቲ» 90 ሰንቲሜተር ማለት ክኸውን ይኽእል። ርግጸኛ ኣይኮንካን? «ሚሊሜተር ድዩ ወይስ ሰንቲሜተር?» ኢልካ ሕተት። ነቲ ቁጽሪ ድገሞ፡ ጸሓፎ ድማ። ቅድሚ ብመጋዝ ምቑራጽ ወይ ምብሳዕ ክልተ ሳዕ ዓቅን፡ ሓጺሩ ዝተቖርጸ ሰሌዳ ሓጺሩ እዩ ዝተርፍ። ጌጋ ጌርካ ዲኻ? ብቕጽበት ንገር። ሽዑ እቲ ጉጅለ ገና ከዐርዮ ይኽእል፡ ክሳራኡ ድማ ይንኪ።", f: "ኣብ ቦታ ህንጻ፡ ዓቐናት መብዛሕትኡ ግዜ ብሚሊሜተር እዮም። ስለዚ «ትሽዓተ ሚእቲ» 90 ሰንቲሜተር ማለት ክኸውን ይኽእል። ርግጸኛ ኣይኮንክን? «ሚሊሜተር ድዩ ወይስ ሰንቲሜተር?» ኢልኪ ሕተቲ። ነቲ ቁጽሪ ድገምዮ፡ ጸሓፍዮ ድማ። ቅድሚ ብመጋዝ ምቑራጽ ወይ ምብሳዕ ክልተ ሳዕ ዓቅኒ፡ ሓጺሩ ዝተቖርጸ ሰሌዳ ሓጺሩ እዩ ዝተርፍ። ጌጋ ጌርኪ ዲኺ? ብቕጽበት ንገሪ። ሽዑ እቲ ጉጅለ ገና ከዐርዮ ይኽእል፡ ክሳራኡ ድማ ይንኪ።", x: "ኣብ ቦታ ህንጻ፡ ዓቐናት መብዛሕትኡ ግዜ ብሚሊሜተር እዮም። ስለዚ «ትሽዓተ ሚእቲ» 90 ሰንቲሜተር ማለት ክኸውን ይኽእል። ርግጸኛታት ኣይኮንኩምን? «ሚሊሜተር ድዩ ወይስ ሰንቲሜተር?» ኢልኩም ሕተቱ። ነቲ ቁጽሪ ድገምዎ፡ ጸሓፍዎ ድማ። ቅድሚ ብመጋዝ ምቑራጽ ወይ ምብሳዕ ክልተ ሳዕ ዓቅኑ፡ ሓጺሩ ዝተቖርጸ ሰሌዳ ሓጺሩ እዩ ዝተርፍ። ጌጋ ጌርኩም ዲኹም? ብቕጽበት ንገሩ። ሽዑ እቲ ጉጅለ ገና ከዐርዮ ይኽእል፡ ክሳራኡ ድማ ይንኪ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.p': "እዚ ብሚሊሜተር ድዩ ወይስ ብሰንቲሜተር?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.s': { m: "ብጻይ ስራሕካ ዓቐን ይጽውዕ። ጽቡቕ ኣይሰማዕካዮን። እንታይ ትገብር?", f: "ብጻይ ስራሕኪ ዓቐን ይጽውዕ። ጽቡቕ ኣይሰማዕክዮን። እንታይ ትገብሪ?", x: "ብጻይ ስራሕኩም ዓቐን ይጽውዕ። ጽቡቕ ኣይሰማዕኩምዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o1': { m: "ነቲ ቁጽሪ ድገሞ፡ ቅኑዕ እንተ ኾይኑ ድማ ሕተት።", f: "ነቲ ቁጽሪ ድገምዮ፡ ቅኑዕ እንተ ኾይኑ ድማ ሕተቲ።", x: "ነቲ ቁጽሪ ድገምዎ፡ ቅኑዕ እንተ ኾይኑ ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o2': { m: "ከም ዝሰማዕካ ዝመሰለካ ነቲ ሰሌዳ ቁረጾ።", f: "ከም ዝሰማዕኪ ዝመሰለኪ ነቲ ሰሌዳ ቁረጽዮ።", x: "ከም ዝሰማዕኩም ዝመሰለኩም ነቲ ሰሌዳ ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.o3': { m: "ባዕሉ መጺኡ ክሳብ ዝርእዮ ተጸበ።", f: "ባዕሉ መጺኡ ክሳብ ዝርእዮ ተጸበዪ።", x: "ባዕሉ መጺኡ ክሳብ ዝርእዮ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.w': "ግጉይ ዓቐን ንብረትን ግዜን የኽስር። ቁጽሪ ምድጋም ክልተ ካልኢት ጥራይ ይወስድ፡ ኣብ ቦታ ህንጻ ኩሉ ሰብ ድማ ይገብሮ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.siteday': "ጽሩይ ቦታ ህንጻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bouwplaats': "ቦታ ህንጻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvoerder': "ሓላፊ ቦታ ህንጻ (ኣብ ቦታ ህንጻ ዘሎ ሓለቓ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.keet': "ኬት (ኣብ ቦታ ህንጻ ንዕረፍትን ኣኼባን ዝኸውን ንእሽቶ ገዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afval': "ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.container': "ኮንተይነር (ንጎሓፍ ዝኸውን ኣዝዩ ዓቢ ሳንዱቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struikelen': "ምዕንቃፍ (ብገለ ነገር እግሪ ተታሒዙ ምውዳቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.1': "ጎሓፍ ናብ ኮንተይነር ይኣቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.2': "ሓላፊ ቦታ ህንጻ ኣብ ኬት ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.siteday.3': { m: "ተጠንቀቕ፡ ኣብዚ ክትዕንቀፍ ትኽእል ኢኻ።", f: "ተጠንቀቒ፡ ኣብዚ ክትዕንቀፊ ትኽእሊ ኢኺ።", x: "ተጠንቀቑ፡ ኣብዚ ክትዕንቀፉ ትኽእሉ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.q': "እዚ ዕንጨይቲ ናበይ ክኸይድ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday.a': "ናብቲ ኣብ መእተዊ ዘሎ ኮንተይነር።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.siteday': "ጽሩይ ቦታ ስራሕ፡ ውሑስ ቦታ ስራሕ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.b': { m: "ኣብ ቦታ ህንጻ፡ ምጽርራይ ክፋል ናይቲ ስራሕ እዩ፡ ንኹሉ ሰብ። ፋሕ ዝበሉ ሰሌዳታት፡ ገመዳትን ጎሓፍን ሰባት ተዓንቂፎም ከም ዝወድቁ ይገብሩ። ስለዚ ቦታኻ ኣብ ውሽጢ መዓልቲ ኣጽሪ፡ ኣብ መወዳእታ ጥራይ ኣይኮነን። ጎሓፍ ይፍለ እዩ፡ ዕንጨይቲ፡ እምንን ሓጺንን መብዛሕትኡ ግዜ ኣብ ዝተፈላለዩ ኮንተይነራት ይኣትዉ። ኣየናይ ምዃኑ ርግጸኛ ኣይኮንካን? ሕተት። ንላዕሊ ዝወጸ ምስማር፡ ወይ መኽደኒ ዘይብሉ ጉድጓድ ትርኢ ዲኻ? ብውሑስ መገዲ ክትገብሮ እንተ ኽኢልካ ኣዐርዮ፡ ወይ ንሓላፊ ቦታ ህንጻ (de uitvoerder) ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ቦታ ህንጻ፡ ምጽርራይ ክፋል ናይቲ ስራሕ እዩ፡ ንኹሉ ሰብ። ፋሕ ዝበሉ ሰሌዳታት፡ ገመዳትን ጎሓፍን ሰባት ተዓንቂፎም ከም ዝወድቁ ይገብሩ። ስለዚ ቦታኺ ኣብ ውሽጢ መዓልቲ ኣጽርዪ፡ ኣብ መወዳእታ ጥራይ ኣይኮነን። ጎሓፍ ይፍለ እዩ፡ ዕንጨይቲ፡ እምንን ሓጺንን መብዛሕትኡ ግዜ ኣብ ዝተፈላለዩ ኮንተይነራት ይኣትዉ። ኣየናይ ምዃኑ ርግጸኛ ኣይኮንክን? ሕተቲ። ንላዕሊ ዝወጸ ምስማር፡ ወይ መኽደኒ ዘይብሉ ጉድጓድ ትርእዪ ዲኺ? ብውሑስ መገዲ ክትገብርዮ እንተ ኽኢልኪ ኣዐርይዮ፡ ወይ ንሓላፊ ቦታ ህንጻ (de uitvoerder) ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ቦታ ህንጻ፡ ምጽርራይ ክፋል ናይቲ ስራሕ እዩ፡ ንኹሉ ሰብ። ፋሕ ዝበሉ ሰሌዳታት፡ ገመዳትን ጎሓፍን ሰባት ተዓንቂፎም ከም ዝወድቁ ይገብሩ። ስለዚ ቦታኹም ኣብ ውሽጢ መዓልቲ ኣጽርዩ፡ ኣብ መወዳእታ ጥራይ ኣይኮነን። ጎሓፍ ይፍለ እዩ፡ ዕንጨይቲ፡ እምንን ሓጺንን መብዛሕትኡ ግዜ ኣብ ዝተፈላለዩ ኮንተይነራት ይኣትዉ። ኣየናይ ምዃኑ ርግጸኛታት ኣይኮንኩምን? ሕተቱ። ንላዕሊ ዝወጸ ምስማር፡ ወይ መኽደኒ ዘይብሉ ጉድጓድ ትርእዩ ዲኹም? ብውሑስ መገዲ ክትገብርዎ እንተ ኽኢልኩም ኣዐርይዎ፡ ወይ ንሓላፊ ቦታ ህንጻ (de uitvoerder) ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.p': "እዚ ከጽርዮ እየ። ሽዑ ሓደ እኳ ኣይዕንቀፍን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.s': { m: "ምስማር ዘለዎም ሰሌዳታት ኣብ መገዲ ኣለዉ። ናትካ ኣይኮኑን። እንታይ ትገብር?", f: "ምስማር ዘለዎም ሰሌዳታት ኣብ መገዲ ኣለዉ። ናትኪ ኣይኮኑን። እንታይ ትገብሪ?", x: "ምስማር ዘለዎም ሰሌዳታት ኣብ መገዲ ኣለዉ። ናትኩም ኣይኮኑን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o1': { m: "ናብ ጎድኒ ኣልግሶም፡ ወይ ንሓላፊ ቦታ ህንጻ ንገሮ።", f: "ናብ ጎድኒ ኣልግስዮም፡ ወይ ንሓላፊ ቦታ ህንጻ ንገርዮ።", x: "ናብ ጎድኒ ኣልግስዎም፡ ወይ ንሓላፊ ቦታ ህንጻ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o2': { m: "ስገሮም፡ ናትካ ሰሌዳታት ኣይኮኑን።", f: "ስገርዮም፡ ናትኪ ሰሌዳታት ኣይኮኑን።", x: "ስገርዎም፡ ናትኩም ሰሌዳታት ኣይኮኑን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.o3': { m: "ተጸበ፡ ካልእ ሰብ ከጽርዮም እዩ።", f: "ተጸበዪ፡ ካልእ ሰብ ከጽርዮም እዩ።", x: "ተጸበዩ፡ ካልእ ሰብ ከጽርዮም እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.w': "ኩሉ ሰብ ብሓደ መገዲ እዩ ዝኸይድ። ሓደጋ ዝረኣየ ገለ ይገብር፡ እዚ ኣብ ቦታ ህንጻ ልሙድ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shifts': "ፈረቓ ምርኽኻብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vroegedienst': "ናይ ንግሆ ፈረቓ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.latedienst': "ናይ ምሸት ፈረቓ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtdienst': "ናይ ለይቲ ፈረቓ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdracht': "ምርኽኻብ (ንዝቕጽል ፈረቓ እንታይ ከም ዘጋጠመ ምንጋር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflossen': { m: "ምትካእ (ዝቕጽል ሰብ ይመጽእ፡ ንስኻ ድማ ክትከይድ ትኽእል)", f: "ምትካእ (ዝቕጽል ሰብ ይመጽእ፡ ንስኺ ድማ ክትከዲ ትኽእሊ)", x: "ምትካእ (ዝቕጽል ሰብ ይመጽእ፡ ንስኹም ድማ ክትከዱ ትኽእሉ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.teamleider': "ሓላፊ ጉጅለ", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.1': "ኣብዚ ሰሙን ናይ ምሸት ፈረቓ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.2': "መን እዩ ዝትክኣኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shifts.3': "ማሽን ክልተ ብልሽት ነይርዋ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.q': { m: "ኣብ ፈረቓኻ ገለ ኣጋጢሙ ዶ?", f: "ኣብ ፈረቓኺ ገለ ኣጋጢሙ ዶ?", x: "ኣብ ፈረቓኹም ገለ ኣጋጢሙ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts.a': "እወ። እቲ መስመር ንፍርቂ ሰዓት ደው ኢሉ ነይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shifts': { m: "ንዝቕጽል ፈረቓ ንገር", f: "ንዝቕጽል ፈረቓ ንገሪ", x: "ንዝቕጽል ፈረቓ ንገሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.b': { m: "ፋብሪካ መብዛሕትኡ ግዜ መዓልትን ለይትን ይሰርሕ፡ ብፈረቓ። ኣብ መወዳእታ ፈረቓኻ፡ ሓደ ብጻይ ስራሕ ቦታኻ ይትክእ። ከምኡ ኢልካ ኣይትኺድ፡ ብጻይ ስራሕካ ክሳብ ዝመጽእ ተጸበ። እንታይ ከም ዘጋጠመ ብሒደት ቃላት ንገር፡ ብልሽት፡ ግጉይ ዝነበረ ፍርያት፡ ዘይተወድአ ነገር። ብዙሓት ትካላት ነዚ ዝኸውን ዝርዝር ወይ ስክሪን እውን ኣለዎም። ዘይነገርካዮ ጸገም ኣብ ዝቕጽል ፈረቓ ይምለስ፡ ሽዑ ድማ ስለምንታይ ምዃኑ ዝፈልጥ የለን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ፋብሪካ መብዛሕትኡ ግዜ መዓልትን ለይትን ይሰርሕ፡ ብፈረቓ። ኣብ መወዳእታ ፈረቓኺ፡ ሓደ ብጻይ ስራሕ ቦታኺ ይትክእ። ከምኡ ኢልኪ ኣይትኺዲ፡ ብጻይ ስራሕኪ ክሳብ ዝመጽእ ተጸበዪ። እንታይ ከም ዘጋጠመ ብሒደት ቃላት ንገሪ፡ ብልሽት፡ ግጉይ ዝነበረ ፍርያት፡ ዘይተወድአ ነገር። ብዙሓት ትካላት ነዚ ዝኸውን ዝርዝር ወይ ስክሪን እውን ኣለዎም። ዘይነገርክዮ ጸገም ኣብ ዝቕጽል ፈረቓ ይምለስ፡ ሽዑ ድማ ስለምንታይ ምዃኑ ዝፈልጥ የለን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ፋብሪካ መብዛሕትኡ ግዜ መዓልትን ለይትን ይሰርሕ፡ ብፈረቓ። ኣብ መወዳእታ ፈረቓኹም፡ ሓደ ብጻይ ስራሕ ቦታኹም ይትክእ። ከምኡ ኢልኩም ኣይትኺዱ፡ ብጻይ ስራሕኩም ክሳብ ዝመጽእ ተጸበዩ። እንታይ ከም ዘጋጠመ ብሒደት ቃላት ንገሩ፡ ብልሽት፡ ግጉይ ዝነበረ ፍርያት፡ ዘይተወድአ ነገር። ብዙሓት ትካላት ነዚ ዝኸውን ዝርዝር ወይ ስክሪን እውን ኣለዎም። ዘይነገርኩምዎ ጸገም ኣብ ዝቕጽል ፈረቓ ይምለስ፡ ሽዑ ድማ ስለምንታይ ምዃኑ ዝፈልጥ የለን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.p': "እታ ማሽን ብልሽት ነይርዋ። ሕጂ እንደገና ትሰርሕ ኣላ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.s': { m: "ፈረቓኻ ተወዲኡ። ብጻይ ስራሕካ ሓሙሽተ ደቒቕ ደንጕዩ። እንታይ ትገብር?", f: "ፈረቓኺ ተወዲኡ። ብጻይ ስራሕኪ ሓሙሽተ ደቒቕ ደንጕዩ። እንታይ ትገብሪ?", x: "ፈረቓኹም ተወዲኡ። ብጻይ ስራሕኩም ሓሙሽተ ደቒቕ ደንጕዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o1': { m: "ተጸበ፡ ንሓላፊ ጉጅለ ድማ ንገሮ።", f: "ተጸበዪ፡ ንሓላፊ ጉጅለ ድማ ንገርዮ።", x: "ተጸበዩ፡ ንሓላፊ ጉጅለ ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o2': { m: "ናብ ገዛ ኪድ፡ ፈረቓኻ ተወዲኡ እዩ።", f: "ናብ ገዛ ኪዲ፡ ፈረቓኺ ተወዲኡ እዩ።", x: "ናብ ገዛ ኪዱ፡ ፈረቓኹም ተወዲኡ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.o3': { m: "ነታ ማሽን ኣቁምካ ኪድ።", f: "ነታ ማሽን ኣቁምኪ ኪዲ።", x: "ነታ ማሽን ኣቁምኩም ኪዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.w': { m: "ትሰርሕ ዘላ ማሽን በይና ክትተርፍ የብላን። ምስ እትጽበን እትሕብርን፡ እቲ ስራሕ ብውሑስ ይቕጽል፡ ሓላፊ ጉጅለ ድማ ክፈትሖ ይኽእል።", f: "ትሰርሕ ዘላ ማሽን በይና ክትተርፍ የብላን። ምስ እትጽበዪን እትሕብሪን፡ እቲ ስራሕ ብውሑስ ይቕጽል፡ ሓላፊ ጉጅለ ድማ ክፈትሖ ይኽእል።", x: "ትሰርሕ ዘላ ማሽን በይና ክትተርፍ የብላን። ምስ እትጽበዩን እትሕብሩን፡ እቲ ስራሕ ብውሑስ ይቕጽል፡ ሓላፊ ጉጅለ ድማ ክፈትሖ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.signals': { m: "እትርእዮ ንገር", f: "እትርእይዮ ንገሪ", x: "እትርእይዎ ንገሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.duizelig': "ርእሱ ዝዘውሮ (ጽርውርው ዝብሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.misselijk': "ዕግርግር ዝበሎ (ከምልስ ከም ዝደለየ ዝስምዖ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benauwd': "ትንፋስ ዝሓጸሮ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koorts': "ረስኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verward': "ዝተደናገረ (እቲ ሰብ ኣበይ ከም ዘሎ ኣይፈልጥን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.anders': "ፍልይ ዝበለ (ከም ልሙድ ዘይኮነ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.1': "እታ ወይዘሮ ርእሳ ይዘውራ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.2': "እቲ ኣቶ ሎሚ ኣይበልዕን ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.signals.3': { m: "መጺእካ ክትርኢ ትኽእል ዶ?", f: "መጺእኪ ክትርእዪ ትኽእሊ ዶ?", x: "መጺእኩም ክትርእዩ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.q': "ኣቶ Jansen ከመይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals.a': "ተደናጊሩ ኣሎ። እዚ ካብ ትማሊ ዝተፈልየ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.signals': { m: "ነቲ ተገልጋሊ ኩሉ መዓልቲ ትርእዮ", f: "ነቲ ተገልጋሊ ኩሉ መዓልቲ ትርእይዮ", x: "ነቲ ተገልጋሊ ኩሉ መዓልቲ ትርእይዎ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.b': { m: "መብዛሕትኡ ግዜ ንሓደ ተገልጋሊ ብዝያዳ እትርእዮ ንስኻ ኢኻ። ስለዚ ገለ ነገር ምስ ዝቕየር ቅድሚ ኹሉ ተስተብህል፡ ውሑድ ምብላዕ፡ ዝያዳ ቃንዛ፡ ምድንጋር፡ ሕጽረት ትንፋስ። እንታይ ምዃኑ ክትፈልጥ ኣየድልየካን። እትርእዮ ንገር፡ መዓስ ከም ዝረኣኻዮ ድማ ንገር። ኣብታ መዓልቲ እቲኣ ንነርስ ንገር፡ ዕማምካ እንተ ኾይኑ ድማ ጸሓፎ። ከቢድ ይመስል ድዩ? ኣይትጸበ፡ ብቕጽበት ንነርስ ጸውዕ። ሓንሳብ ምብዛሕ ካብ ሓንሳብ ምውሓድ ይሓይሽ።", f: "መብዛሕትኡ ግዜ ንሓደ ተገልጋሊ ብዝያዳ እትርእይዮ ንስኺ ኢኺ። ስለዚ ገለ ነገር ምስ ዝቕየር ቅድሚ ኹሉ ተስተብህሊ፡ ውሑድ ምብላዕ፡ ዝያዳ ቃንዛ፡ ምድንጋር፡ ሕጽረት ትንፋስ። እንታይ ምዃኑ ክትፈልጢ ኣየድልየኪን። እትርእይዮ ንገሪ፡ መዓስ ከም ዝረኣኽዮ ድማ ንገሪ። ኣብታ መዓልቲ እቲኣ ንነርስ ንገሪ፡ ዕማምኪ እንተ ኾይኑ ድማ ጸሓፍዮ። ከቢድ ይመስል ድዩ? ኣይትጸበዪ፡ ብቕጽበት ንነርስ ጸውዒ። ሓንሳብ ምብዛሕ ካብ ሓንሳብ ምውሓድ ይሓይሽ።", x: "መብዛሕትኡ ግዜ ንሓደ ተገልጋሊ ብዝያዳ እትርእይዎ ንስኹም ኢኹም። ስለዚ ገለ ነገር ምስ ዝቕየር ቅድሚ ኹሉ ተስተብህሉ፡ ውሑድ ምብላዕ፡ ዝያዳ ቃንዛ፡ ምድንጋር፡ ሕጽረት ትንፋስ። እንታይ ምዃኑ ክትፈልጡ ኣየድልየኩምን። እትርእይዎ ንገሩ፡ መዓስ ከም ዝረኣኹምዎ ድማ ንገሩ። ኣብታ መዓልቲ እቲኣ ንነርስ ንገሩ፡ ዕማምኩም እንተ ኾይኑ ድማ ጸሓፍዎ። ከቢድ ይመስል ድዩ? ኣይትጸበዩ፡ ብቕጽበት ንነርስ ጸውዑ። ሓንሳብ ምብዛሕ ካብ ሓንሳብ ምውሓድ ይሓይሽ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.p': "እታ ወይዘሮ ኣይትበልዕን ኣላ፡ ርእሳ ድማ ይዘውራ ኣሎ። እዚ ካብ ልሙድ ዝተፈልየ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.s': { m: "ሓንቲ ተገልጋሊት ሎሚ ስቕ ኢላ ኣላ፡ ክትበልዕ ድማ ኣይትደልን። ብልሙድ ብዙሕ እያ ትዛረብ። እንታይ ትገብር?", f: "ሓንቲ ተገልጋሊት ሎሚ ስቕ ኢላ ኣላ፡ ክትበልዕ ድማ ኣይትደልን። ብልሙድ ብዙሕ እያ ትዛረብ። እንታይ ትገብሪ?", x: "ሓንቲ ተገልጋሊት ሎሚ ስቕ ኢላ ኣላ፡ ክትበልዕ ድማ ኣይትደልን። ብልሙድ ብዙሕ እያ ትዛረብ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o1': { m: "እትርእዮ ንነርስ ንገር፡ ሎሚ።", f: "እትርእይዮ ንነርስ ንገሪ፡ ሎሚ።", x: "እትርእይዎ ንነርስ ንገሩ፡ ሎሚ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o2': { m: "ገለ መዓልታት ተጸበ፡ ምናልባት ይሓልፍ።", f: "ገለ መዓልታት ተጸበዪ፡ ምናልባት ይሓልፍ።", x: "ገለ መዓልታት ተጸበዩ፡ ምናልባት ይሓልፍ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.o3': { m: "ካብ ከብሒ ከኒና ሃባ።", f: "ካብ ከብሒ ከኒና ሃብያ።", x: "ካብ ከብሒ ከኒና ሃብዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.w': { m: "ንእሽቶ ለውጢ ናይ መጀመርታ ምልክት ሕማም ክኸውን ይኽእል። እንታይ ምዃኑ ንስኻ ኣይኮንካን ትውስን፡ ነርስ እያ ትውስን። ግን ገለ ክትገብር እትኽእል እንተ ነጊርካያ ጥራይ እዩ።", f: "ንእሽቶ ለውጢ ናይ መጀመርታ ምልክት ሕማም ክኸውን ይኽእል። እንታይ ምዃኑ ንስኺ ኣይኮንክን ትውስኒ፡ ነርስ እያ ትውስን። ግን ገለ ክትገብር እትኽእል እንተ ነጊርክያ ጥራይ እዩ።", x: "ንእሽቶ ለውጢ ናይ መጀመርታ ምልክት ሕማም ክኸውን ይኽእል። እንታይ ምዃኑ ንስኹም ኣይኮንኩምን ትውስኑ፡ ነርስ እያ ትውስን። ግን ገለ ክትገብር እትኽእል እንተ ነጊርኩማ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.transfer': "ሰብ ክትንስእ ምሕጋዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tillift': "መልዓሊት ማሽን (ንሰብ እተልዕል ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rollator': "ሮላቶር (መንኮርኮር ዘለዎ መመርኮሲ ንምኻድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bed': "ዓራት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstaan': "ምትንሳእ፡ ደው ምባል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaanzitten': "ኮፍ ምባል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorzichtig': "ጥንቁቕ፡ ብህድኣት", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.1': "ክትትንስኡ ክሕግዘኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.2': "ንሓጺር ግዜ ኮፍ ክትብሉ ትደልዩ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.transfer.3': "ቅድም እታ መልዓሊት ማሽን ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.q': { m: "ነታ ወይዘሮ ካብ ዓራት ከተልዕላ ትኽእል ዶ?", f: "ነታ ወይዘሮ ካብ ዓራት ከተልዕልያ ትኽእሊ ዶ?", x: "ነታ ወይዘሮ ካብ ዓራት ከተልዕልዋ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer.a': "በይነይ ኣይኮነን። እታ መልዓሊት ማሽን ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.transfer': { m: "ቅድም ንገር፡ ድሕሪኡ ሓግዝ", f: "ቅድም ንገሪ፡ ድሕሪኡ ሓግዚ", x: "ቅድም ንገሩ፡ ድሕሪኡ ሓግዙ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.b': { m: "ንተገልጋሊ ቅድሚ ምትንካፍካ፡ እንታይ ክትገብር ከም ዝኾንካ «Ik help u nu met opstaan.» ኢልካ ንገር። ሽዑ እቲ ተገልጋሊ ኣይስንብድን፡ ክተሓጋገዝ ድማ ይኽእል። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፎ፡ እዚ ሓያል ከም ዝጸንሕ ይገብሮ። ንሰብ በይንኻ ኣይተልዕል። ነቶም ዘለዉ መሳርሒታት ሓገዝ፡ ከም መልዓሊት ማሽን፡ ተጠቐም፡ ከምቲ ዘርኣዩኻ ድማ ስራሕ። ገና ኣየርኣዩኻን? ቅድም ሕተት። ሕቖኻ ንምሉእ ዕድመ ስራሕ ክጸንሕ ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንተገልጋሊ ቅድሚ ምትንካፍኪ፡ እንታይ ክትገብሪ ከም ዝኾንኪ «Ik help u nu met opstaan.» ኢልኪ ንገሪ። ሽዑ እቲ ተገልጋሊ ኣይስንብድን፡ ክተሓጋገዝ ድማ ይኽእል። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፍዮ፡ እዚ ሓያል ከም ዝጸንሕ ይገብሮ። ንሰብ በይንኺ ኣይተልዕሊ። ነቶም ዘለዉ መሳርሒታት ሓገዝ፡ ከም መልዓሊት ማሽን፡ ተጠቐሚ፡ ከምቲ ዘርኣዩኺ ድማ ስርሒ። ገና ኣየርኣዩኽን? ቅድም ሕተቲ። ሕቖኺ ንምሉእ ዕድመ ስራሕ ክጸንሕ ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንተገልጋሊ ቅድሚ ምትንካፍኩም፡ እንታይ ክትገብሩ ከም ዝኾንኩም «Ik help u nu met opstaan.» ኢልኩም ንገሩ። ሽዑ እቲ ተገልጋሊ ኣይስንብድን፡ ክተሓጋገዝ ድማ ይኽእል። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፍዎ፡ እዚ ሓያል ከም ዝጸንሕ ይገብሮ። ንሰብ በይንኹም ኣይተልዕሉ። ነቶም ዘለዉ መሳርሒታት ሓገዝ፡ ከም መልዓሊት ማሽን፡ ተጠቐሙ፡ ከምቲ ዘርኣዩኹም ድማ ስርሑ። ገና ኣየርኣዩኹምን? ቅድም ሕተቱ። ሕቖኹም ንምሉእ ዕድመ ስራሕ ክጸንሕ ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.p': "ሕጂ ክትትንስኡ ክሕግዘኩም እየ። ድሉዋት ዲኹም?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.s': { m: "ሓንቲ ተገልጋሊት ካብ ዓራት ክትወጽእ ትደሊ። ነታ መልዓሊት ማሽን ምጥቃም ገና ኣይተመሃርካን። እንታይ ትገብር?", f: "ሓንቲ ተገልጋሊት ካብ ዓራት ክትወጽእ ትደሊ። ነታ መልዓሊት ማሽን ምጥቃም ገና ኣይተመሃርክን። እንታይ ትገብሪ?", x: "ሓንቲ ተገልጋሊት ካብ ዓራት ክትወጽእ ትደሊ። ነታ መልዓሊት ማሽን ምጥቃም ገና ኣይተመሃርኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o1': { m: "ነታ መልዓሊት ማሽን ዝፈልጥ ብጻይ ስራሕ ሕተት።", f: "ነታ መልዓሊት ማሽን ዝፈልጥ ብጻይ ስራሕ ሕተቲ።", x: "ነታ መልዓሊት ማሽን ዝፈልጥ ብጻይ ስራሕ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o2': { m: "ባዕልኻ ኣልዕላ፡ ከባድ ኣይኮነትን።", f: "ባዕልኺ ኣልዕልያ፡ ከባድ ኣይኮነትን።", x: "ባዕልኹም ኣልዕልዋ፡ ከባድ ኣይኮነትን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.o3': { m: "ነታ መልዓሊት ማሽን ፈትና፡ ከቢድ ክኸውን ኣይክእልን።", f: "ነታ መልዓሊት ማሽን ፈትንያ፡ ከቢድ ክኸውን ኣይክእልን።", x: "ነታ መልዓሊት ማሽን ፈትንዋ፡ ከቢድ ክኸውን ኣይክእልን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.w': { m: "ንሰብ ብግጉይ መገዲ ምልዓል ነቲ ተገልጋሊን ንሕቖኻን ክጎድእ ይኽእል። ንብጻይ ስራሕ ምሕታት ሒደት ደቓይቕ ይወስድ። ምውዳቕ ግን ኣዋርሕ ክወስድ ይኽእል።", f: "ንሰብ ብግጉይ መገዲ ምልዓል ነቲ ተገልጋሊን ንሕቖኺን ክጎድእ ይኽእል። ንብጻይ ስራሕ ምሕታት ሒደት ደቓይቕ ይወስድ። ምውዳቕ ግን ኣዋርሕ ክወስድ ይኽእል።", x: "ንሰብ ብግጉይ መገዲ ምልዓል ነቲ ተገልጋሊን ንሕቖኹምን ክጎድእ ይኽእል። ንብጻይ ስራሕ ምሕታት ሒደት ደቓይቕ ይወስድ። ምውዳቕ ግን ኣዋርሕ ክወስድ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.dishes': "ኣቕሑ ክሽነ ምሕጻብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwas': "ዝሕጸብ ኣቕሑ ክሽነ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwasser': "ማሽን መሕጸቢት ኣቕሑ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bord': "ሸሓኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glas': "ብርጭቆ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestek': "መብልዒ ኣቕሑ (ካራ፡ ፋርከታን ማንካን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdrogen': "ምንቃጽ (ብጨርቂ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.1': "እታ ማሽን መሕጸቢት ኣቕሑ ወዲኣ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.2': { m: "ተጠንቀቕ፡ ብርጭቆ ተሰይሩ።", f: "ተጠንቀቒ፡ ብርጭቆ ተሰይሩ።", x: "ተጠንቀቑ፡ ብርጭቆ ተሰይሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.dishes.3': "ጽሩይ መብልዒ ኣቕሑ ተወዲኡ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.q': "ጽሩይ ብርጭቆታት ተሪፉ ኣሎ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes.a': "እወ፡ ሕጂ ከምጽኦም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dishes': { m: "ዝተሰብረ ብርጭቆ፡ ብቕጽበት ንገር", f: "ዝተሰብረ ብርጭቆ፡ ብቕጽበት ንገሪ", x: "ዝተሰብረ ብርጭቆ፡ ብቕጽበት ንገሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.b': { m: "ኣብ ክሽነ ብርጭቆ ይስበር እዩ። እዚ ልሙድ እዩ፡ ሓደ እኳ ድማ ኣይሓርቕን። ግን ብቕጽበት፡ ዓው ኢልካን ብንጹርን «Glas!» በል። ነቲ ስባር ብጥራይ ኢድካ ኣይተልዕሎ፡ መኾስተር ተጠቐም። ብርጭቆ ኣብ ጥቓ መግቢ፡ ወይ ኣብ በረድ ወዲቑ ድዩ? ሽዑ እቲ መግቢ ወይ እቲ በረድ ክጉሓፍ ኣለዎ፡ ኩሉ። ኣብ መግቢ ዘሎ ንእሽቶ ስባር ብርጭቆ ንጋሻ ኣዝዩ ሓደገኛ እዩ። ብርጭቆ ናብ ናይ ባዕሉ መጕሓፊ ይኣቱ፡ ሰብ ናብ ዘልዕሎ ከረጺት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ክሽነ ብርጭቆ ይስበር እዩ። እዚ ልሙድ እዩ፡ ሓደ እኳ ድማ ኣይሓርቕን። ግን ብቕጽበት፡ ዓው ኢልኪን ብንጹርን «Glas!» በሊ። ነቲ ስባር ብጥራይ ኢድኪ ኣይተልዕልዮ፡ መኾስተር ተጠቐሚ። ብርጭቆ ኣብ ጥቓ መግቢ፡ ወይ ኣብ በረድ ወዲቑ ድዩ? ሽዑ እቲ መግቢ ወይ እቲ በረድ ክጉሓፍ ኣለዎ፡ ኩሉ። ኣብ መግቢ ዘሎ ንእሽቶ ስባር ብርጭቆ ንጋሻ ኣዝዩ ሓደገኛ እዩ። ብርጭቆ ናብ ናይ ባዕሉ መጕሓፊ ይኣቱ፡ ሰብ ናብ ዘልዕሎ ከረጺት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ክሽነ ብርጭቆ ይስበር እዩ። እዚ ልሙድ እዩ፡ ሓደ እኳ ድማ ኣይሓርቕን። ግን ብቕጽበት፡ ዓው ኢልኩምን ብንጹርን «Glas!» በሉ። ነቲ ስባር ብጥራይ ኢድኩም ኣይተልዕልዎ፡ መኾስተር ተጠቐሙ። ብርጭቆ ኣብ ጥቓ መግቢ፡ ወይ ኣብ በረድ ወዲቑ ድዩ? ሽዑ እቲ መግቢ ወይ እቲ በረድ ክጉሓፍ ኣለዎ፡ ኩሉ። ኣብ መግቢ ዘሎ ንእሽቶ ስባር ብርጭቆ ንጋሻ ኣዝዩ ሓደገኛ እዩ። ብርጭቆ ናብ ናይ ባዕሉ መጕሓፊ ይኣቱ፡ ሰብ ናብ ዘልዕሎ ከረጺት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.p': "ተጠንቀቑ፡ ብርጭቆ! ሕጂ ከጽርዮ እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.s': { m: "ኣብ ልዕሊ እቲ ንመስተ ዝኸውን በረድ ብርጭቆ ይስበር። ኣዝዩ ስራሕ በዚሑ ኣሎ። እንታይ ትገብር?", f: "ኣብ ልዕሊ እቲ ንመስተ ዝኸውን በረድ ብርጭቆ ይስበር። ኣዝዩ ስራሕ በዚሑ ኣሎ። እንታይ ትገብሪ?", x: "ኣብ ልዕሊ እቲ ንመስተ ዝኸውን በረድ ብርጭቆ ይስበር። ኣዝዩ ስራሕ በዚሑ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o1': { m: "ንገር፡ ንኹሉ እቲ በረድ ድማ ጉሓፎ።", f: "ንገሪ፡ ንኹሉ እቲ በረድ ድማ ጉሓፍዮ።", x: "ንገሩ፡ ንኹሉ እቲ በረድ ድማ ጉሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o2': { m: "ነቶም እትርእዮም ስባራት ኣውጽኦም።", f: "ነቶም እትርእይዮም ስባራት ኣውጽእዮም።", x: "ነቶም እትርእይዎም ስባራት ኣውጽእዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.o3': { m: "ገለ ኣይትበል፡ ሕጂ ስራሕ በዚሑ ኣሎ።", f: "ገለ ኣይትበሊ፡ ሕጂ ስራሕ በዚሑ ኣሎ።", x: "ገለ ኣይትበሉ፡ ሕጂ ስራሕ በዚሑ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.w': "ኣብ በረድ ዘሎ ንኣሽቱ ስባራት ብርጭቆ ክርአ ኣይከኣልን። ሓድሽ በረድ ዋግኡ ውሑድ እዩ። ኣብ መስተኡ ብርጭቆ ዘለዎ ጋሻ ብኸቢድ ክጉዳእ ይኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.rush': "ስራሕ ምስ ዝበዝሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heet': "ኣዝዩ ውዑይ (ዘንድድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chef': "ሸፍ (ሓላፊ ክሽነ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terras': "ተራስ (ኣብ ደገ ዘለዉ ጣውላታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tafel': "ጣውላ (መመገቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dienblad': "ትሪ (መግብን መስተን ዝስከመሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachten': "ምጽባይ", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.1': { m: "ውዑይ! ብድሕሬኻ እሓልፍ ኣለኹ።", f: "ውዑይ! ብድሕሬኺ እሓልፍ ኣለኹ።", x: "ውዑይ! ብድሕሬኹም እሓልፍ ኣለኹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.2': "ጣውላ ሽዱሽተ መግቢ ትጽበ ኣላ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.rush.3': "እዚ ናብ ተራስ እወስዶ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.q': { m: "ጣውላ ኣርባዕተ ክትገብራ ትኽእል ዶ?", f: "ጣውላ ኣርባዕተ ክትገብርያ ትኽእሊ ዶ?", x: "ጣውላ ኣርባዕተ ክትገብርዋ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush.a': "እወ፡ ሸፍ። እመጽእ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rush': "ስራሕ ምስ ዝበዝሕ ሓጸርቲ ቃላት", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.b': { m: "ስራሕ ምስ ዝበዝሕ፡ ኣብ ክሽነ ሰባት ብሓጸርቲ ቃላት ይዛረቡ፡ «Heet!»፡ «Achter!»፡ «Tafel zes!»። እዚ ሕማቕ ጠባይ ኣይኮነን። ቅልጡፍን ውሑስን እዩ፡ ኩሉ ሰብ እቶም ውዑያት ድስትታትን ካራታትን ኣበይ ከም ዘለዉ ይፈልጥ። ብድሕሪ ሰብ ምስ እትሓልፍ፡ ባዕልኻ «Heet!» ወይ «Achter!» ኢልካ ጸውዕ። ትእዛዝ ሰሚዕካ ዲኻ? «Ja, chef.» ኢልካ መልስ። ሽዑ እቲ ሸፍ ከም ዝሰማዕካዮ ይፈልጥ። ኣብቲ ህጹጽ ግዜ ሓደ ሰብ ብሓጺር ተዛሪቡካ ድዩ? መብዛሕትኡ ግዜ ድሕሪ ስራሕ ይሓልፍ እዩ። ዘየሐጉስ ኮይኑ ይቕጽል ድዩ? ሽዑ ኣብ ህዱእ ግዜ ብዛዕባኡ ተዘራረብ።", f: "ስራሕ ምስ ዝበዝሕ፡ ኣብ ክሽነ ሰባት ብሓጸርቲ ቃላት ይዛረቡ፡ «Heet!»፡ «Achter!»፡ «Tafel zes!»። እዚ ሕማቕ ጠባይ ኣይኮነን። ቅልጡፍን ውሑስን እዩ፡ ኩሉ ሰብ እቶም ውዑያት ድስትታትን ካራታትን ኣበይ ከም ዘለዉ ይፈልጥ። ብድሕሪ ሰብ ምስ እትሓልፊ፡ ባዕልኺ «Heet!» ወይ «Achter!» ኢልኪ ጸውዒ። ትእዛዝ ሰሚዕኪ ዲኺ? «Ja, chef.» ኢልኪ መልሲ። ሽዑ እቲ ሸፍ ከም ዝሰማዕክዮ ይፈልጥ። ኣብቲ ህጹጽ ግዜ ሓደ ሰብ ብሓጺር ተዛሪቡኪ ድዩ? መብዛሕትኡ ግዜ ድሕሪ ስራሕ ይሓልፍ እዩ። ዘየሐጉስ ኮይኑ ይቕጽል ድዩ? ሽዑ ኣብ ህዱእ ግዜ ብዛዕባኡ ተዘራረቢ።", x: "ስራሕ ምስ ዝበዝሕ፡ ኣብ ክሽነ ሰባት ብሓጸርቲ ቃላት ይዛረቡ፡ «Heet!»፡ «Achter!»፡ «Tafel zes!»። እዚ ሕማቕ ጠባይ ኣይኮነን። ቅልጡፍን ውሑስን እዩ፡ ኩሉ ሰብ እቶም ውዑያት ድስትታትን ካራታትን ኣበይ ከም ዘለዉ ይፈልጥ። ብድሕሪ ሰብ ምስ እትሓልፉ፡ ባዕልኹም «Heet!» ወይ «Achter!» ኢልኩም ጸውዑ። ትእዛዝ ሰሚዕኩም ዲኹም? «Ja, chef.» ኢልኩም መልሱ። ሽዑ እቲ ሸፍ ከም ዝሰማዕኩምዎ ይፈልጥ። ኣብቲ ህጹጽ ግዜ ሓደ ሰብ ብሓጺር ተዛሪቡኩም ድዩ? መብዛሕትኡ ግዜ ድሕሪ ስራሕ ይሓልፍ እዩ። ዘየሐጉስ ኮይኑ ይቕጽል ድዩ? ሽዑ ኣብ ህዱእ ግዜ ብዛዕባኡ ተዘራረቡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.p': "ብድሕሪት! ውዑይ ድስቲ ሒዘ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.s': { m: "ኣዝዩ ስራሕ በዚሑ ኣሎ። እቲ ሸፍ «Tafel zes, nu!» ኢሉ ይጽውዕ። «በጃኻ» ኣይብልን። እንታይ ትገብር?", f: "ኣዝዩ ስራሕ በዚሑ ኣሎ። እቲ ሸፍ «Tafel zes, nu!» ኢሉ ይጽውዕ። «በጃኺ» ኣይብልን። እንታይ ትገብሪ?", x: "ኣዝዩ ስራሕ በዚሑ ኣሎ። እቲ ሸፍ «Tafel zes, nu!» ኢሉ ይጽውዕ። «በጃኹም» ኣይብልን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o1': { m: "«Ja, chef» ኢልካ ግበሮ።", f: "«Ja, chef» ኢልኪ ግበርዮ።", x: "«Ja, chef» ኢልኩም ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o2': { m: "ደው በል፡ ጠባዩ ሕማቕ ምዃኑ ድማ ንገሮ።", f: "ደው በሊ፡ ጠባዩ ሕማቕ ምዃኑ ድማ ንገርዮ።", x: "ደው በሉ፡ ጠባዩ ሕማቕ ምዃኑ ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.o3': { m: "ግበሮ፡ ግን ዋላ ሓንቲ ኣይትመልስ።", f: "ግበርዮ፡ ግን ዋላ ሓንቲ ኣይትመልሲ።", x: "ግበርዎ፡ ግን ዋላ ሓንቲ ኣይትመልሱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.w': { m: "ኣብ ህጹጽ ግዜ ሓጺር ዘረባ ልሙድ እዩ፡ ብውልቂ ንዓኻ ዝጠመተ ድማ ኣይኮነን። ምምላስ ከም ዝሰማዕካዮ የርኢ። እዚ ነቲ ክሽነ ቅልጡፍን ውሑስን ይገብሮ።", f: "ኣብ ህጹጽ ግዜ ሓጺር ዘረባ ልሙድ እዩ፡ ብውልቂ ንዓኺ ዝጠመተ ድማ ኣይኮነን። ምምላስ ከም ዝሰማዕክዮ የርኢ። እዚ ነቲ ክሽነ ቅልጡፍን ውሑስን ይገብሮ።", x: "ኣብ ህጹጽ ግዜ ሓጺር ዘረባ ልሙድ እዩ፡ ብውልቂ ንዓኹም ዝጠመተ ድማ ኣይኮነን። ምምላስ ከም ዝሰማዕኩምዎ የርኢ። እዚ ነቲ ክሽነ ቅልጡፍን ውሑስን ይገብሮ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.rounds': { m: "ዙረትካ", f: "ዙረትኪ", x: "ዙረትኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.kantoor': "ቤት ጽሕፈት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdieping': "ደርቢ (ቀዳማይ ወይ ካልኣይ ደርቢ ናይ ህንጻ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gang': "ኮሪደር (ኣብ ውሽጢ ህንጻ መሕለፊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpapier': "ወረቐት ሽቓቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeep': "ሳሙና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijvullen': "ምምላእ (ዝወሓደ ምውሳኽ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.1': "ካብ ካልኣይ ደርቢ እጅምር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.2': "ወረቐት ሽቓቕ ተወዲኡ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.rounds.3': "ሳሙና እመልእ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.q': { m: "ቤት ጽሕፈት ሰለስተ ገይርካዮ ዲኻ?", f: "ቤት ጽሕፈት ሰለስተ ገይርክዮ ዲኺ?", x: "ቤት ጽሕፈት ሰለስተ ገይርኩምዎ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds.a': "ኣይፋል፡ ገና ሰብ ኣብኡ ይሰርሕ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rounds': "ሰባት ኣብ ዝሰርሑሉ ቦታ ምጽራይ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.b': { m: "መብዛሕትኡ ግዜ፡ ካልኦት ሰባት ገና እናሰርሑ ከለዉ ተጽርይ። ሰላም በሎም፡ «Mag ik hier even schoonmaken?» ኢልካ ድማ ሕተት። መብዛሕትኦም ሰባት እወ ይብሉ። ሓደ ሰብ ኣብ ኣኼባ ወይ ኣብ ተሌፎን ድዩ ዘሎ? ሽዑ ደሓር ተመለስ። ኣብ ጣውላ ጽሕፈት ዘለዉ ወረቓቕቲ ኣይተንቀሳቕሶም፡ ኣይተንብቦም ድማ፡ ኣብ ዙርያኦም ኣጽሪ። ንዙረትካ ዝተወሰነ ግዜ ኣለካ። ብጽቡቕ ንምግባሩ እቲ ግዜ ኣዝዩ ሓጺር ድዩ? ስቕ ኢልካ ክፍልታት ኣይትዝለል። እንታይ ክትገብር ከም ዘይከኣልካን ስለምንታይን ንተቖጻጻሪኻ ንገሮ።", f: "መብዛሕትኡ ግዜ፡ ካልኦት ሰባት ገና እናሰርሑ ከለዉ ተጽርዪ። ሰላም በልዮም፡ «Mag ik hier even schoonmaken?» ኢልኪ ድማ ሕተቲ። መብዛሕትኦም ሰባት እወ ይብሉ። ሓደ ሰብ ኣብ ኣኼባ ወይ ኣብ ተሌፎን ድዩ ዘሎ? ሽዑ ደሓር ተመለሲ። ኣብ ጣውላ ጽሕፈት ዘለዉ ወረቓቕቲ ኣይተንቀሳቕስዮም፡ ኣይተንብብዮም ድማ፡ ኣብ ዙርያኦም ኣጽርዪ። ንዙረትኪ ዝተወሰነ ግዜ ኣለኪ። ብጽቡቕ ንምግባሩ እቲ ግዜ ኣዝዩ ሓጺር ድዩ? ስቕ ኢልኪ ክፍልታት ኣይትዝለሊ። እንታይ ክትገብሪ ከም ዘይከኣልኪን ስለምንታይን ንተቖጻጻሪኺ ንገርዮ።", x: "መብዛሕትኡ ግዜ፡ ካልኦት ሰባት ገና እናሰርሑ ከለዉ ተጽርዩ። ሰላም በልዎም፡ «Mag ik hier even schoonmaken?» ኢልኩም ድማ ሕተቱ። መብዛሕትኦም ሰባት እወ ይብሉ። ሓደ ሰብ ኣብ ኣኼባ ወይ ኣብ ተሌፎን ድዩ ዘሎ? ሽዑ ደሓር ተመለሱ። ኣብ ጣውላ ጽሕፈት ዘለዉ ወረቓቕቲ ኣይተንቀሳቕስዎም፡ ኣይተንብብዎም ድማ፡ ኣብ ዙርያኦም ኣጽርዩ። ንዙረትኩም ዝተወሰነ ግዜ ኣለኩም። ብጽቡቕ ንምግባሩ እቲ ግዜ ኣዝዩ ሓጺር ድዩ? ስቕ ኢልኩም ክፍልታት ኣይትዝለሉ። እንታይ ክትገብሩ ከም ዘይከኣልኩምን ስለምንታይን ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.p': "ከመይ ውዒልኩም። ኣብዚ ንሓጺር ግዜ ከጽሪ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.s': { m: "ሎሚ ዙረትካ ዝያዳ ግዜ ይወስድ፡ ሓደ ክፍሊ ኣዝዩ ረሲሑ ነይሩ። ክልተ ቤት ጽሕፈታት ኣይተገብሩን። እንታይ ትገብር?", f: "ሎሚ ዙረትኪ ዝያዳ ግዜ ይወስድ፡ ሓደ ክፍሊ ኣዝዩ ረሲሑ ነይሩ። ክልተ ቤት ጽሕፈታት ኣይተገብሩን። እንታይ ትገብሪ?", x: "ሎሚ ዙረትኩም ዝያዳ ግዜ ይወስድ፡ ሓደ ክፍሊ ኣዝዩ ረሲሑ ነይሩ። ክልተ ቤት ጽሕፈታት ኣይተገብሩን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o1': { m: "ኣየኖት ክልተ ምዃኖምን ስለምንታይን ንተቖጻጻሪኻ ንገሮ።", f: "ኣየኖት ክልተ ምዃኖምን ስለምንታይን ንተቖጻጻሪኺ ንገርዮ።", x: "ኣየኖት ክልተ ምዃኖምን ስለምንታይን ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o2': { m: "ናብ ገዛ ኪድ፡ ሰብ ከይርእዮ ድማ ተስፋ ግበር።", f: "ናብ ገዛ ኪዲ፡ ሰብ ከይርእዮ ድማ ተስፋ ግበሪ።", x: "ናብ ገዛ ኪዱ፡ ሰብ ከይርእዮ ድማ ተስፋ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.o3': { m: "ኣዝዩ ብቕልጡፍ ግበሮም፡ መሬት ከየጽረኻ።", f: "ኣዝዩ ብቕልጡፍ ግበርዮም፡ መሬት ከየጽረኺ።", x: "ኣዝዩ ብቕልጡፍ ግበርዎም፡ መሬት ከየጽረኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.w': { m: "ረሳሕ ቤት ጽሕፈት ዝረኸበ ዓሚል የማርር። ዝፈለጠ ተቖጻጻሪ ግን ከረድኦ ይኽእል፡ ወይ ዝያዳ ግዜ ክህበካ ይኽእል። ምንጋር ምፍሻል ኣይኮነን።", f: "ረሳሕ ቤት ጽሕፈት ዝረኸበ ዓሚል የማርር። ዝፈለጠ ተቖጻጻሪ ግን ከረድኦ ይኽእል፡ ወይ ዝያዳ ግዜ ክህበኪ ይኽእል። ምንጋር ምፍሻል ኣይኮነን።", x: "ረሳሕ ቤት ጽሕፈት ዝረኸበ ዓሚል የማርር። ዝፈለጠ ተቖጻጻሪ ግን ከረድኦ ይኽእል፡ ወይ ዝያዳ ግዜ ክህበኩም ይኽእል። ምንጋር ምፍሻል ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.colours': "ሕብርታትን ጨርቅታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doek': "ጨርቂ (መጽረዪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spons': "ስፖንጅ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rood': "ቀይሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauw': "ሰማያዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geel': "ብጫ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groen': "ቀጠልያ", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.1': "እቲ ቀይሕ ጨርቂ ንሽቓቕ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.2': { m: "ጽሩይ ጨርቂ ውሰድ።", f: "ጽሩይ ጨርቂ ውሰዲ።", x: "ጽሩይ ጨርቂ ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.colours.3': "ኣብዚ ኣየናይ ሕብሪ እጥቀም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.q': "እዚ ጨርቂ ንጣውላ ጽሕፈት ክጥቀመሉ ይፍቀደኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours.a': "ኣይፋል፡ እቲ ቀይሕ ንሽቓቕ ጥራይ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.colours': "ነፍሲ ወከፍ ሕብሪ ቦታኡ ኣለዎ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.b': { m: "ብዙሓት ትካላት ጽሬት ብሕብርታት ይሰርሑ። ነፍሲ ወከፍ ሕብሪ ጨርቂ፡ ስፖንጅን ባልዲን ንሓደ ቦታ እዩ። መብዛሕትኡ ግዜ ቀይሕ ንሽቓቕ፡ ሰማያዊ ድማ ንጣውላታት ጽሕፈትን ካልኦት ጣውላታትን እዩ። ብኸምዚ፡ ረስሓት ሽቓቕ ናብ ጣውላ ጽሕፈት ወይ ናብ ክሽነ ኣይበጽሕን። እቶም ሕብርታት ኣብ ነፍሲ ወከፍ ትካል ክፈላለዩ ይኽእሉ፡ ስለዚ ኣብ ናይ መጀመርታ መዓልትኻ ሕተት። ጨርቂ ረሲሑ ድዩ፡ ወይስ ኣብ መሬት ወዲቑ? ጽሩይ ውሰድ። ዝተሰርሓሎም ጨርቅታት ናብ ከረጺት ዝሕጸብ ክዳን ይኣትዉ፡ ናብ ዓረብያ ኣይምለሱን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ብዙሓት ትካላት ጽሬት ብሕብርታት ይሰርሑ። ነፍሲ ወከፍ ሕብሪ ጨርቂ፡ ስፖንጅን ባልዲን ንሓደ ቦታ እዩ። መብዛሕትኡ ግዜ ቀይሕ ንሽቓቕ፡ ሰማያዊ ድማ ንጣውላታት ጽሕፈትን ካልኦት ጣውላታትን እዩ። ብኸምዚ፡ ረስሓት ሽቓቕ ናብ ጣውላ ጽሕፈት ወይ ናብ ክሽነ ኣይበጽሕን። እቶም ሕብርታት ኣብ ነፍሲ ወከፍ ትካል ክፈላለዩ ይኽእሉ፡ ስለዚ ኣብ ናይ መጀመርታ መዓልትኺ ሕተቲ። ጨርቂ ረሲሑ ድዩ፡ ወይስ ኣብ መሬት ወዲቑ? ጽሩይ ውሰዲ። ዝተሰርሓሎም ጨርቅታት ናብ ከረጺት ዝሕጸብ ክዳን ይኣትዉ፡ ናብ ዓረብያ ኣይምለሱን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ብዙሓት ትካላት ጽሬት ብሕብርታት ይሰርሑ። ነፍሲ ወከፍ ሕብሪ ጨርቂ፡ ስፖንጅን ባልዲን ንሓደ ቦታ እዩ። መብዛሕትኡ ግዜ ቀይሕ ንሽቓቕ፡ ሰማያዊ ድማ ንጣውላታት ጽሕፈትን ካልኦት ጣውላታትን እዩ። ብኸምዚ፡ ረስሓት ሽቓቕ ናብ ጣውላ ጽሕፈት ወይ ናብ ክሽነ ኣይበጽሕን። እቶም ሕብርታት ኣብ ነፍሲ ወከፍ ትካል ክፈላለዩ ይኽእሉ፡ ስለዚ ኣብ ናይ መጀመርታ መዓልትኹም ሕተቱ። ጨርቂ ረሲሑ ድዩ፡ ወይስ ኣብ መሬት ወዲቑ? ጽሩይ ውሰዱ። ዝተሰርሓሎም ጨርቅታት ናብ ከረጺት ዝሕጸብ ክዳን ይኣትዉ፡ ናብ ዓረብያ ኣይምለሱን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.p': "ኣብዚ ንሽቓቕ ኣየናይ ሕብሪ እዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.s': { m: "ሰማያዊ ጨርቅታትካ ተወዲኦም። ገና ሰለስተ ጣውላ ጽሕፈት ከተጽርይ ኣለካ። ቀይሕ ጨርቅታት ጥራይ ኣለዉኻ። እንታይ ትገብር?", f: "ሰማያዊ ጨርቅታትኪ ተወዲኦም። ገና ሰለስተ ጣውላ ጽሕፈት ከተጽርዪ ኣለኪ። ቀይሕ ጨርቅታት ጥራይ ኣለዉኺ። እንታይ ትገብሪ?", x: "ሰማያዊ ጨርቅታትኩም ተወዲኦም። ገና ሰለስተ ጣውላ ጽሕፈት ከተጽርዩ ኣለኩም። ቀይሕ ጨርቅታት ጥራይ ኣለዉኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o1': { m: "ቅድም ሓደስቲ ሰማያዊ ጨርቅታት ኣምጽእ።", f: "ቅድም ሓደስቲ ሰማያዊ ጨርቅታት ኣምጽኢ።", x: "ቅድም ሓደስቲ ሰማያዊ ጨርቅታት ኣምጽኡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o2': { m: "ቀይሕ ጨርቂ ተጠቐም፡ ጽሩይ ጽሩይ እዩ።", f: "ቀይሕ ጨርቂ ተጠቐሚ፡ ጽሩይ ጽሩይ እዩ።", x: "ቀይሕ ጨርቂ ተጠቐሙ፡ ጽሩይ ጽሩይ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.o3': { m: "ንሰለስቲኦም ሓደ ሰማያዊ ጨርቂ ደጊምካ ተጠቐም።", f: "ንሰለስቲኦም ሓደ ሰማያዊ ጨርቂ ደጊምኪ ተጠቐሚ።", x: "ንሰለስቲኦም ሓደ ሰማያዊ ጨርቂ ደጊምኩም ተጠቐሙ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.w': "ስርዓት ሕብርታት ኩሉ ሰብ ኩሉ ግዜ እንተ ተኸቲልዎ ጥራይ እዩ ዝሰርሕ። ሽዑ እቲ ጨርቂ ኣበይ ከም ዝነበረ ሓደ እኳ ክጠራጠር ኣየድልዮን።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.shophelp': "ንዓሚል ምሕጋዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbieding': "ፍሉይ ዋጋ (ንሓጺር ግዜ ዝሓሰረ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.korting': "ምጉዳል ዋጋ (ዝወሓደ ምኽፋል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitverkocht': "ተሸይጡ ዝተወድአ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.magazijn': "መኽዘን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tas': "ሳንጣ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestellen': "ምእዛዝ", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.1': "ይቕሬታ፡ ተሸይጡ ተወዲኡ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.2': "ምስኡ ሳንጣ ትደልዩ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.shophelp.3': "እዚ ቡን ብፍሉይ ዋጋ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.q': "ጸባ ተሪፉኩም ኣሎ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp.a': "ኣብ መኽዘን ክርእየልኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shophelp': "«ኣይፈልጥን» መወዳእታ ኣይኮነን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.b': { m: "ዓሚል ገለ ይሓትት፡ ንስኻ ድማ መልሱ ኣይትፈልጥን። ጸገም የለን፡ ኩሉ ዝፈልጥ ሰብ የለን። ግን «nee» ወይ «weet ik niet» ጥራይ ኣይትበል፡ ገዲፍካ ድማ ኣይትኺድ። «Ik vraag het even voor u» በል፡ ብጻይ ስራሕ ድማ ኣምጽእ። ፍርያት ተሸይጡ ተወዲኡ ድዩ? መዓስ እንደገና ከም ዝኣቱ ንገር፡ ወይ ተመሳሳሊ ነገር ኣርኢ። ነቲ ዓሚል ርአዮ፡ ሰላም ድማ በሎ፡ መደርደሪታት ኣብ ምምላእ ተጸሚድካ ከለኻ እውን። ነቲ ሕቶ ኣይተረዳእካዮን ዲኻ? እቲ ዓሚል ቀስ ኢሉ ክደግሞ ሕተቶ።", f: "ዓሚል ገለ ይሓትት፡ ንስኺ ድማ መልሱ ኣይትፈልጢን። ጸገም የለን፡ ኩሉ ዝፈልጥ ሰብ የለን። ግን «nee» ወይ «weet ik niet» ጥራይ ኣይትበሊ፡ ገዲፍኪ ድማ ኣይትኺዲ። «Ik vraag het even voor u» በሊ፡ ብጻይ ስራሕ ድማ ኣምጽኢ። ፍርያት ተሸይጡ ተወዲኡ ድዩ? መዓስ እንደገና ከም ዝኣቱ ንገሪ፡ ወይ ተመሳሳሊ ነገር ኣርእዪ። ነቲ ዓሚል ርአይዮ፡ ሰላም ድማ በልዮ፡ መደርደሪታት ኣብ ምምላእ ተጸሚድኪ ከለኺ እውን። ነቲ ሕቶ ኣይተረዳእክዮን ዲኺ? እቲ ዓሚል ቀስ ኢሉ ክደግሞ ሕተትዮ።", x: "ዓሚል ገለ ይሓትት፡ ንስኹም ድማ መልሱ ኣይትፈልጡን። ጸገም የለን፡ ኩሉ ዝፈልጥ ሰብ የለን። ግን «nee» ወይ «weet ik niet» ጥራይ ኣይትበሉ፡ ገዲፍኩም ድማ ኣይትኺዱ። «Ik vraag het even voor u» በሉ፡ ብጻይ ስራሕ ድማ ኣምጽኡ። ፍርያት ተሸይጡ ተወዲኡ ድዩ? መዓስ እንደገና ከም ዝኣቱ ንገሩ፡ ወይ ተመሳሳሊ ነገር ኣርእዩ። ነቲ ዓሚል ርአይዎ፡ ሰላም ድማ በልዎ፡ መደርደሪታት ኣብ ምምላእ ተጸሚድኩም ከለኹም እውን። ነቲ ሕቶ ኣይተረዳእኩምዎን ዲኹም? እቲ ዓሚል ቀስ ኢሉ ክደግሞ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.p': "እዚ ኣይፈልጦን እየ። ክሓተልኩም እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.s': { m: "ዓሚል ብዛዕባ ሓደ ፍርያት ትሓትት። ነቲ ቃል ኣይትፈልጦን። እንታይ ትገብር?", f: "ዓሚል ብዛዕባ ሓደ ፍርያት ትሓትት። ነቲ ቃል ኣይትፈልጥዮን። እንታይ ትገብሪ?", x: "ዓሚል ብዛዕባ ሓደ ፍርያት ትሓትት። ነቲ ቃል ኣይትፈልጥዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o1': { m: "«Ik vraag het even voor u.» በል።", f: "«Ik vraag het even voor u.» በሊ።", x: "«Ik vraag het even voor u.» በሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o2': { m: "«nee» ኢልካ ስራሕካ ቀጽል።", f: "«nee» ኢልኪ ስራሕኪ ቀጽሊ።", x: "«nee» ኢልኩም ስራሕኩም ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.o3': { m: "ክትከይድ ምእንቲ፡ ናብ ገለ ቦታ ኣመልክት።", f: "ክትከይድ ምእንቲ፡ ናብ ገለ ቦታ ኣመልክቲ።", x: "ክትከይድ ምእንቲ፡ ናብ ገለ ቦታ ኣመልክቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.w': { m: "ዓሚል ሓድሽ ምዃንካ ወይ ገና ሆላንድኛ ትመሃር ምህላውካ ጸገም የብሉን። ሓገዝ ዘይምርካብ ግን ንዓሚል ጸገም እዩ። ብጻይ ስራሕ ምምጻእ ጽቡቕ ኣገልግሎት እዩ።", f: "ዓሚል ሓዳስ ምዃንኪ ወይ ገና ሆላንድኛ ትመሃሪ ምህላውኪ ጸገም የብሉን። ሓገዝ ዘይምርካብ ግን ንዓሚል ጸገም እዩ። ብጻይ ስራሕ ምምጻእ ጽቡቕ ኣገልግሎት እዩ።", x: "ዓሚል ሓደስቲ ምዃንኩም ወይ ገና ሆላንድኛ ትመሃሩ ምህላውኩም ጸገም የብሉን። ሓገዝ ዘይምርካብ ግን ንዓሚል ጸገም እዩ። ብጻይ ስራሕ ምምጻእ ጽቡቕ ኣገልግሎት እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.shoptrouble': "ከበድቲ ህሞታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsleider': "ሓላፊ ድኳን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiliger': "ሓላዊ ጸጥታ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dief': "ሰራቒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stelen': "ምስራቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schreeuwen': "ምጭዳር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldterug': "ምምላስ ገንዘብ", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.1': "ንሓላፊ ድኳን ከምጽኦ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.2': "በጃኹም ኣይትጭድሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoptrouble.3': "ሓደ ሰብ ገለ ይሰርቕ ዘሎ ይመስለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.q': "ገንዘበይ ሕጂ ክምለሰለይ እደሊ!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble.a': "ይርድኣኒ እዩ። ንብጻይ ስራሐይ ከምጽኦ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoptrouble': { m: "ዝሓረቐ ዓሚል ወይ ሰራቒ፡ ቅድም ንስኻ", f: "ዝሓረቐ ዓሚል ወይ ሰራቒ፡ ቅድም ንስኺ", x: "ዝሓረቐ ዓሚል ወይ ሰራቒ፡ ቅድም ንስኹም" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.b': { m: "ሓደ ሓደ ግዜ ዓሚል ይሓርቕ፡ ወይ ሰብ ክሰርቕ ከሎ ትርኢ። ድሕነትካ ይቕድም፡ ኩሉ ግዜ። ምስ ዝሓረቐ ዓሚል፡ ህድእ በል፡ ኣይትጭድር፡ ንሓላፊ ድኳን ድማ ጸውዕ። በይንኻ ክትፈትሖ ኣየድልየካን። ሰራቒ ትርኢ ዲኻ? ደድሕሪኡ ኣይትጉየ፡ ኣይትሓዞ፡ ኣብ ቅድሚ ማዕጾ ድማ ደው ኣይትበል። እትርእዮ ጽቡቕ ጌርካ ርአ፡ ብቕጽበት ድማ ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገር። ንብረት ክትካእ ይከኣል። ንስኻ ግን ኣይትትካእን። ድሕሪኡ ሰምቢድካ ዲኻ? ምስ ተቖጻጻሪኻ ብዛዕባኡ ተዘራረብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሓደ ሓደ ግዜ ዓሚል ይሓርቕ፡ ወይ ሰብ ክሰርቕ ከሎ ትርእዪ። ድሕነትኪ ይቕድም፡ ኩሉ ግዜ። ምስ ዝሓረቐ ዓሚል፡ ህድእ በሊ፡ ኣይትጭድሪ፡ ንሓላፊ ድኳን ድማ ጸውዒ። በይንኺ ክትፈትሕዮ ኣየድልየኪን። ሰራቒ ትርእዪ ዲኺ? ደድሕሪኡ ኣይትጉየዪ፡ ኣይትሓዝዮ፡ ኣብ ቅድሚ ማዕጾ ድማ ደው ኣይትበሊ። እትርእይዮ ጽቡቕ ጌርኪ ርአዪ፡ ብቕጽበት ድማ ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገሪ። ንብረት ክትካእ ይከኣል። ንስኺ ግን ኣይትትክኢን። ድሕሪኡ ሰምቢድኪ ዲኺ? ምስ ተቖጻጻሪኺ ብዛዕባኡ ተዘራረቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሓደ ሓደ ግዜ ዓሚል ይሓርቕ፡ ወይ ሰብ ክሰርቕ ከሎ ትርእዩ። ድሕነትኩም ይቕድም፡ ኩሉ ግዜ። ምስ ዝሓረቐ ዓሚል፡ ህድእ በሉ፡ ኣይትጭድሩ፡ ንሓላፊ ድኳን ድማ ጸውዑ። በይንኹም ክትፈትሕዎ ኣየድልየኩምን። ሰራቒ ትርእዩ ዲኹም? ደድሕሪኡ ኣይትጉየዩ፡ ኣይትሓዝዎ፡ ኣብ ቅድሚ ማዕጾ ድማ ደው ኣይትበሉ። እትርእይዎ ጽቡቕ ጌርኩም ርአዩ፡ ብቕጽበት ድማ ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገሩ። ንብረት ክትካእ ይከኣል። ንስኹም ግን ኣይትትክኡን። ድሕሪኡ ሰምቢድኩም ዲኹም? ምስ ተቖጻጻሪኹም ብዛዕባኡ ተዘራረቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.p': "ሓደ ሰብ ገለ ነገር ኣብ ሳንጣኡ ከእቱ እርኢ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.s': { m: "ሓደ ሰብኣይ ጥርሙዝ ኣብ ትሕቲ ጃኬቱ የእቱ እሞ ናብ መውጽኢ ይኸይድ። እንታይ ትገብር?", f: "ሓደ ሰብኣይ ጥርሙዝ ኣብ ትሕቲ ጃኬቱ የእቱ እሞ ናብ መውጽኢ ይኸይድ። እንታይ ትገብሪ?", x: "ሓደ ሰብኣይ ጥርሙዝ ኣብ ትሕቲ ጃኬቱ የእቱ እሞ ናብ መውጽኢ ይኸይድ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o1': { m: "ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገር።", f: "ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገሪ።", x: "ንሓላፊ ወይ ንሓላዊ ጸጥታ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o2': { m: "ደድሕሪኡ ጉየ እሞ ቅልጽሙ ሓዝ።", f: "ደድሕሪኡ ጉየዪ እሞ ቅልጽሙ ሓዚ።", x: "ደድሕሪኡ ጉየዩ እሞ ቅልጽሙ ሓዙ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.o3': { m: "ኣብ ቅድሚ ማዕጾ ደው በል።", f: "ኣብ ቅድሚ ማዕጾ ደው በሊ።", x: "ኣብ ቅድሚ ማዕጾ ደው በሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.w': { m: "ዝተታሕዘ ሰራቒ ዓመጽ ክጥቀም ይኽእል። ሓላፊን ሓላዊ ጸጥታን እንታይ ከም ዝግበር ይፈልጡ። ምእንታኡ ክትጉዳእ ዝግብኦ ፍርያት የለን።", f: "ዝተታሕዘ ሰራቒ ዓመጽ ክጥቀም ይኽእል። ሓላፊን ሓላዊ ጸጥታን እንታይ ከም ዝግበር ይፈልጡ። ምእንታኡ ክትጉድኢ ዝግብኦ ፍርያት የለን።", x: "ዝተታሕዘ ሰራቒ ዓመጽ ክጥቀም ይኽእል። ሓላፊን ሓላዊ ጸጥታን እንታይ ከም ዝግበር ይፈልጡ። ምእንታኡ ክትጉድኡ ዝግብኦ ፍርያት የለን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.plantcare': "ነቲ ተኽሊ ምክንኻን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantblad': "ቆጽሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stengel': "ጕንዲ (ናይ ተኽሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bloem': "ዕምባባ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knippen': "ምቑራጽ (ብመቐስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomaat': "ኮሚደረ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rijp': "ዝበሰለ (ንምቕንጣብ ድሉው)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.1': "እዛ ኮሚደረ ገና ኣይበሰለትን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.2': "ነቲ ቆጽሊ እቖርጾ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantcare.3': "እቲ ጕንዲ ተሰይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.q': "ኣየኖት ኮሚደረ እየ ዝቕንጥብ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare.a': "እተን ቀያሕቲ ጥራይ። እተን ቀጠልያ ገና ኣይበሰላን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantcare': "ጽሩይ ኢድ፡ ጥዑይ ተኽሊ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.b': { m: "ኣትክልቲ እውን ክሓሙ ይኽእሉ። ቫይረስ ብኢድ፡ ጓንቲ፡ ካራን ክዳንን ካብ ተኽሊ ናብ ተኽሊ ይሓልፍ። ኣብ ገዛ ኣትክልቲ፡ ሓደ ሕሙም ተኽሊ ኣሽሓት ኣትክልቲ ክእለዩ ኣለዎም ማለት ክኸውን ይኽእል። ስለዚ ኣብ ማዕጾ ጽኑዕ ሕግታት ኣሎ፡ ኢድካ ሕጸብ፡ ናይቲ ትካል ክዳን ስራሕ ተኸደን፡ ብመሕጸቢ እግሪ ድማ ሕለፍ። ብዙሓት ገዛውቲ ኣትክልቲ ኣብ ምሳሕካ ናይ ገዛኻ ኮሚደረ፡ ፐፐሮኒ ወይ ኩኩምበር ኣይፈቕዱን። ፍሉይ ዝመስል ተኽሊ ትርኢ ዲኻ? ኣይትተንክፎ። ኣየናይ መስርዕ ምዃኑ ንተቖጻጻሪኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣትክልቲ እውን ክሓሙ ይኽእሉ። ቫይረስ ብኢድ፡ ጓንቲ፡ ካራን ክዳንን ካብ ተኽሊ ናብ ተኽሊ ይሓልፍ። ኣብ ገዛ ኣትክልቲ፡ ሓደ ሕሙም ተኽሊ ኣሽሓት ኣትክልቲ ክእለዩ ኣለዎም ማለት ክኸውን ይኽእል። ስለዚ ኣብ ማዕጾ ጽኑዕ ሕግታት ኣሎ፡ ኢድኪ ሕጸቢ፡ ናይቲ ትካል ክዳን ስራሕ ተኸደኒ፡ ብመሕጸቢ እግሪ ድማ ሕለፊ። ብዙሓት ገዛውቲ ኣትክልቲ ኣብ ምሳሕኪ ናይ ገዛኺ ኮሚደረ፡ ፐፐሮኒ ወይ ኩኩምበር ኣይፈቕዱን። ፍሉይ ዝመስል ተኽሊ ትርእዪ ዲኺ? ኣይትተንክፍዮ። ኣየናይ መስርዕ ምዃኑ ንተቖጻጻሪኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣትክልቲ እውን ክሓሙ ይኽእሉ። ቫይረስ ብኢድ፡ ጓንቲ፡ ካራን ክዳንን ካብ ተኽሊ ናብ ተኽሊ ይሓልፍ። ኣብ ገዛ ኣትክልቲ፡ ሓደ ሕሙም ተኽሊ ኣሽሓት ኣትክልቲ ክእለዩ ኣለዎም ማለት ክኸውን ይኽእል። ስለዚ ኣብ ማዕጾ ጽኑዕ ሕግታት ኣሎ፡ ኢድኩም ሕጸቡ፡ ናይቲ ትካል ክዳን ስራሕ ተኸደኑ፡ ብመሕጸቢ እግሪ ድማ ሕለፉ። ብዙሓት ገዛውቲ ኣትክልቲ ኣብ ምሳሕኩም ናይ ገዛኹም ኮሚደረ፡ ፐፐሮኒ ወይ ኩኩምበር ኣይፈቕዱን። ፍሉይ ዝመስል ተኽሊ ትርእዩ ዲኹም? ኣይትተንክፍዎ። ኣየናይ መስርዕ ምዃኑ ንተቖጻጻሪኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.p': "ኣብ መስርዕ ዓሰርተው ክልተ ሕሙም ተኽሊ ኣሎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.s': { m: "ፍሉይ ብጫ ነጠብጣብ ዘለዎ ተኽሊ ትርኢ። እንታይ ትገብር?", f: "ፍሉይ ብጫ ነጠብጣብ ዘለዎ ተኽሊ ትርእዪ። እንታይ ትገብሪ?", x: "ፍሉይ ብጫ ነጠብጣብ ዘለዎ ተኽሊ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o1': { m: "ግደፎ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ግደፍዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ግደፍዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o2': { m: "ነቒልካ ምሳኻ ውሰዶ።", f: "ነቒልኪ ምሳኺ ውሰድዮ።", x: "ነቒልኩም ምሳኹም ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.o3': { m: "ነተን ነጠብጣብ ዘለወን ኣቑጽልቲ ቁረጸን።", f: "ነተን ነጠብጣብ ዘለወን ኣቑጽልቲ ቁረጽየን።", x: "ነተን ነጠብጣብ ዘለወን ኣቑጽልቲ ቁረጽወን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.w': { m: "ሕሙም ተኽሊ ምስ እትትንክፍ፡ እቲ ቫይረስ ምሳኻ ናብ ዝቕጽሉ ኣትክልቲ ይኸይድ። ተቖጻጻሪኻ ብኸመይ ብውሑስ መገዲ ከም ዝእለ ይፈልጥ።", f: "ሕሙም ተኽሊ ምስ እትትንክፊ፡ እቲ ቫይረስ ምሳኺ ናብ ዝቕጽሉ ኣትክልቲ ይኸይድ። ተቖጻጻሪኺ ብኸመይ ብውሑስ መገዲ ከም ዝእለ ይፈልጥ።", x: "ሕሙም ተኽሊ ምስ እትትንክፉ፡ እቲ ቫይረስ ምሳኹም ናብ ዝቕጽሉ ኣትክልቲ ይኸይድ። ተቖጻጻሪኹም ብኸመይ ብውሑስ መገዲ ከም ዝእለ ይፈልጥ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.outdoors': "ኣብ ደገ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.land': "ግራት (ኣትክልቲ ኣብ ደገ ዝበቑሉሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regen': "ዝናብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zon': "ጸሓይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzen': "ነዊሕ ጫማ (ቡት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.regenpak': "ክዳን ዝናብ (ካብ ዝናብ ዝከላኸል ጃኬትን ስረን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onweer': "ነጎዳን በርቅን", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.1': "ዝናብ ይዘንብ ኣሎ። ክዳን ዝናበይ እኽደን ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.2': "ነዊሕ ጫማይ ጠልቂዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.outdoors.3': "ሎሚ ጸሓይ ሓያል እያ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.q': "ነጎዳ ይመጽእ ኣሎ። እንታይ ንግበር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors.a': "ደው ኢልና ናብ ውሽጢ ንኣቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.outdoors': "ጸሓይ፡ ዝናብን ነጎዳን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.b': { m: "ኣብ ደገ፡ ኣብ ኩሉ ዓይነት ኩነታት ኣየር ትሰርሕ። ኣብ ጸሓይ፡ ርእስኻን ቆርበትካን ሸፍን፡ ክሬም ጸሓይ ተጠቐም፡ ማይ ድማ ብዙሕ ግዜ ስተ። ኣብ ዝናብ፡ ክዳን ዝናብካን ነዊሕ ጫማኻን ተኸደን፡ ኣብ ዕረፍትኻ ድማ ንቑጽ ክዳን ግበር። ጥልቀትን ቁርን የሕምመካን የደንጕየካን። ነጎዳ ኣሎ ድዩ? ሽዑ ደው ኢልካ ናብ ውሽጢ እቶ፡ ወይ ናብ መኪና ወይ ቫን። ኣብ ትሕቲ ኦም ኣይኮነን፡ ኣብ ክፉት ግራት እውን ኣይኮነን። ንስራሕ ክዳን ዝናብ ወይ ነዊሕ ጫማ የድልየካ ድዩ? ባዕልኻ ቅድሚ ምግዛእካ፡ ንኣስራሒኻ ብዛዕባኡ ሕተት።", f: "ኣብ ደገ፡ ኣብ ኩሉ ዓይነት ኩነታት ኣየር ትሰርሒ። ኣብ ጸሓይ፡ ርእስኺን ቆርበትኪን ሸፍኒ፡ ክሬም ጸሓይ ተጠቐሚ፡ ማይ ድማ ብዙሕ ግዜ ስተዪ። ኣብ ዝናብ፡ ክዳን ዝናብኪን ነዊሕ ጫማኺን ተኸደኒ፡ ኣብ ዕረፍትኺ ድማ ንቑጽ ክዳን ግበሪ። ጥልቀትን ቁርን የሕምመክን የደንጕየክን። ነጎዳ ኣሎ ድዩ? ሽዑ ደው ኢልኪ ናብ ውሽጢ እተዊ፡ ወይ ናብ መኪና ወይ ቫን። ኣብ ትሕቲ ኦም ኣይኮነን፡ ኣብ ክፉት ግራት እውን ኣይኮነን። ንስራሕ ክዳን ዝናብ ወይ ነዊሕ ጫማ የድልየኪ ድዩ? ባዕልኺ ቅድሚ ምግዛእኪ፡ ንኣስራሒኺ ብዛዕባኡ ሕተቲ።", x: "ኣብ ደገ፡ ኣብ ኩሉ ዓይነት ኩነታት ኣየር ትሰርሑ። ኣብ ጸሓይ፡ ርእስኹምን ቆርበትኩምን ሸፍኑ፡ ክሬም ጸሓይ ተጠቐሙ፡ ማይ ድማ ብዙሕ ግዜ ስተዩ። ኣብ ዝናብ፡ ክዳን ዝናብኩምን ነዊሕ ጫማኹምን ተኸደኑ፡ ኣብ ዕረፍትኹም ድማ ንቑጽ ክዳን ግበሩ። ጥልቀትን ቁርን የሕምመኩምን የደንጕየኩምን። ነጎዳ ኣሎ ድዩ? ሽዑ ደው ኢልኩም ናብ ውሽጢ እተዉ፡ ወይ ናብ መኪና ወይ ቫን። ኣብ ትሕቲ ኦም ኣይኮነን፡ ኣብ ክፉት ግራት እውን ኣይኮነን። ንስራሕ ክዳን ዝናብ ወይ ነዊሕ ጫማ የድልየኩም ድዩ? ባዕልኹም ቅድሚ ምግዛእኩም፡ ንኣስራሒኹም ብዛዕባኡ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.p': "ነጎዳ ክመጽእ እዩ። ናብ ውሽጢ ንእቶ ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.s': { m: "ኣብ ግራት ኣለኻ። ኣብ ቀረባ ነጎዳ ትሰምዕ። መስርዕካ ዳርጋ ተወዲኡ። እንታይ ትገብር?", f: "ኣብ ግራት ኣለኺ። ኣብ ቀረባ ነጎዳ ትሰምዒ። መስርዕኪ ዳርጋ ተወዲኡ። እንታይ ትገብሪ?", x: "ኣብ ግራት ኣለኹም። ኣብ ቀረባ ነጎዳ ትሰምዑ። መስርዕኩም ዳርጋ ተወዲኡ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o1': { m: "ደው በል፡ ናብ ውሽጢ ወይ ናብ ቫን ድማ እቶ።", f: "ደው በሊ፡ ናብ ውሽጢ ወይ ናብ ቫን ድማ እተዊ።", x: "ደው በሉ፡ ናብ ውሽጢ ወይ ናብ ቫን ድማ እተዉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o2': { m: "ቅድም ነቲ መስርዕ ቀልጢፍካ ወድእ።", f: "ቅድም ነቲ መስርዕ ቀልጢፍኪ ወድኢ።", x: "ቅድም ነቲ መስርዕ ቀልጢፍኩም ወድኡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.o3': { m: "ኣብ ትሕቲ እቲ ዓቢ ኦም ተጸበ።", f: "ኣብ ትሕቲ እቲ ዓቢ ኦም ተጸበዪ።", x: "ኣብ ትሕቲ እቲ ዓቢ ኦም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.w': { m: "በርቂ ነቲ ዝለዓለ ነጥቢ ይወቅዕ፡ ኣብ ሰጥ ዝበለ ግራት ድማ እቲ ዝለዓለ ንስኻ ኢኻ። እቲ መስርዕ ርብዒ ሰዓት ክጽበ ይኽእል።", f: "በርቂ ነቲ ዝለዓለ ነጥቢ ይወቅዕ፡ ኣብ ሰጥ ዝበለ ግራት ድማ እቲ ዝለዓለ ንስኺ ኢኺ። እቲ መስርዕ ርብዒ ሰዓት ክጽበ ይኽእል።", x: "በርቂ ነቲ ዝለዓለ ነጥቢ ይወቅዕ፡ ኣብ ሰጥ ዝበለ ግራት ድማ እቲ ዝለዓለ ንስኹም ኢኹም። እቲ መስርዕ ርብዒ ሰዓት ክጽበ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.drawing': "ንድፍን ዓቐንን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekening': "ንድፊ (እቲ ኣካል ከመይ ክኸውን ከም ዘለዎ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maat': "ዓቐን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.millimeter': "ሚሊሜተር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuifmaat': "ካሊበር (ኣዝዩ ብልክዕ ዝዕቅን መሳርሒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passen': "ብልክዕ ምእታው (ኣካል ኣብ ቦታኡ ይኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bout': "ቡሎን", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.1': "ኣብቲ ንድፊ ዘሎ ዓቐን ክንደይ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.2': "እዚ ኣካል ብልክዕ ኣይኣቱን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.drawing.3': "ብኽልተ ሚሊሜተር ይዓቢ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.q': "እቲ ቡሎን ብልክዕ ይኣቱ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing.a': "ኣይፋል። ሓንሳብ ደጊመ ክዕቅኖ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.drawing': "እቲ ንድፊ እዩ ዝውስን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.b': { m: "ኣብ ቤት ዕዮ፡ እቲ ንድፊ ዝብሎ ትገብር፡ ቅኑዕ ዝመስል ኣይኮነን። ዓቐናት ብሚሊሜተር እዮም፡ ሓደ ሚሊሜተር ድማ ኣዝዩ ብዙሕ ክኸውን ይኽእል። ኣካል ብልክዕ ኣይኣቱን ድዩ? ሓይሊ ኣይትጠቐም፡ ነቲ ነዃል ድማ «ቁሩብ ጥራይ» ኢልካ ኣይተግፍሖ። ደጊምካ ዓቅን፡ ነቲ ንድፊ ድማ ርአዮ። ነቲ ንድፊ ከተንብቦ ኣይትኽእልን ዲኻ፡ ወይስ ዓቐን ጎዲሉ? ቅድሚ ምጅማርካ ሕተት። ሕቶ ሓንቲ ደቒቕ ትወስድ። ግጉይ ኣካል ንብረትን ሰዓታትን የኽስር።", f: "ኣብ ቤት ዕዮ፡ እቲ ንድፊ ዝብሎ ትገብሪ፡ ቅኑዕ ዝመስል ኣይኮነን። ዓቐናት ብሚሊሜተር እዮም፡ ሓደ ሚሊሜተር ድማ ኣዝዩ ብዙሕ ክኸውን ይኽእል። ኣካል ብልክዕ ኣይኣቱን ድዩ? ሓይሊ ኣይትጠቐሚ፡ ነቲ ነዃል ድማ «ቁሩብ ጥራይ» ኢልኪ ኣይተግፍሕዮ። ደጊምኪ ዓቅኒ፡ ነቲ ንድፊ ድማ ርአይዮ። ነቲ ንድፊ ከተንብብዮ ኣይትኽእሊን ዲኺ፡ ወይስ ዓቐን ጎዲሉ? ቅድሚ ምጅማርኪ ሕተቲ። ሕቶ ሓንቲ ደቒቕ ትወስድ። ግጉይ ኣካል ንብረትን ሰዓታትን የኽስር።", x: "ኣብ ቤት ዕዮ፡ እቲ ንድፊ ዝብሎ ትገብሩ፡ ቅኑዕ ዝመስል ኣይኮነን። ዓቐናት ብሚሊሜተር እዮም፡ ሓደ ሚሊሜተር ድማ ኣዝዩ ብዙሕ ክኸውን ይኽእል። ኣካል ብልክዕ ኣይኣቱን ድዩ? ሓይሊ ኣይትጠቐሙ፡ ነቲ ነዃል ድማ «ቁሩብ ጥራይ» ኢልኩም ኣይተግፍሕዎ። ደጊምኩም ዓቅኑ፡ ነቲ ንድፊ ድማ ርአይዎ። ነቲ ንድፊ ከተንብብዎ ኣይትኽእሉን ዲኹም፡ ወይስ ዓቐን ጎዲሉ? ቅድሚ ምጅማርኩም ሕተቱ። ሕቶ ሓንቲ ደቒቕ ትወስድ። ግጉይ ኣካል ንብረትን ሰዓታትን የኽስር።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.p': { m: "ነዚ ዓቐን ከንብቦ ኣይክእልን። ክትርእዮ ትኽእል ዶ?", f: "ነዚ ዓቐን ከንብቦ ኣይክእልን። ክትርእይዮ ትኽእሊ ዶ?", x: "ነዚ ዓቐን ከንብቦ ኣይክእልን። ክትርእይዎ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.s': { m: "ኣካል ብልክዕ ኣይኣቱን፡ ብሓደ ሚሊሜተር ይዓቢ። ብመዶሻ ግን ምኣተወ። እንታይ ትገብር?", f: "ኣካል ብልክዕ ኣይኣቱን፡ ብሓደ ሚሊሜተር ይዓቢ። ብመዶሻ ግን ምኣተወ። እንታይ ትገብሪ?", x: "ኣካል ብልክዕ ኣይኣቱን፡ ብሓደ ሚሊሜተር ይዓቢ። ብመዶሻ ግን ምኣተወ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o1': { m: "ደጊምካ ዓቅን፡ እንታይ ከም ዝግበር ድማ ሕተት።", f: "ደጊምኪ ዓቅኒ፡ እንታይ ከም ዝግበር ድማ ሕተቲ።", x: "ደጊምኩም ዓቅኑ፡ እንታይ ከም ዝግበር ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o2': { m: "ብመዶሻ ወቒዕካ ኣእትዎ።", f: "ብመዶሻ ወቒዕኪ ኣእትውዮ።", x: "ብመዶሻ ወቒዕኩም ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.o3': { m: "ቁሩብ ልገጸሉ፡ ዋላ ሓንቲ ድማ ኣይትበል።", f: "ቁሩብ ልገጽሉ፡ ዋላ ሓንቲ ድማ ኣይትበሊ።", x: "ቁሩብ ልገጹሉ፡ ዋላ ሓንቲ ድማ ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.w': { m: "ብሓይሊ ዝኣተወ ኣካል ደሓር፡ ኣብ ዓሚል፡ ክስበር ይኽእል። ምስ እትሕብሮ፡ እቲ ጠንቂ ክርከብ ይከኣል።", f: "ብሓይሊ ዝኣተወ ኣካል ደሓር፡ ኣብ ዓሚል፡ ክስበር ይኽእል። ምስ እትሕብርዮ፡ እቲ ጠንቂ ክርከብ ይከኣል።", x: "ብሓይሊ ዝኣተወ ኣካል ደሓር፡ ኣብ ዓሚል፡ ክስበር ይኽእል። ምስ እትሕብርዎ፡ እቲ ጠንቂ ክርከብ ይከኣል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.weld': "ምልሓምን ውዑይ ስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lassen': "ምልሓም (ሓጺን ብብርቱዕ ሙቐት ምልጋብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laskap': "ማስኬራ ምልሓም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rook': "ትኪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afzuiging': "መምጠጢ ትኪ (ነቲ ትኪ የውጽኦ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkoelen': "ምዝሓል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandwond': "ቃጸሎ (ካብ ሙቐት ዝመጽእ መቑሰሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.1': "ማስኬራ ምልሓመይ እገብር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.2': { m: "ነቲ መምጠጢ ትኪ ወልዓዮ።", f: "ነቲ መምጠጢ ትኪ ወልዕዮ።", x: "ነቲ መምጠጢ ትኪ ወልዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.weld.3': { m: "ተጠንቀቕ፡ እቲ ሓጺን ገና ውዑይ እዩ።", f: "ተጠንቀቒ፡ እቲ ሓጺን ገና ውዑይ እዩ።", x: "ተጠንቀቑ፡ እቲ ሓጺን ገና ውዑይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.q': "ሕጂ ከልዕሎ ይፍቀደኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld.a': { m: "ኣይፋል፡ ተጸበ። ቅድም ክዝሕል ኣለዎ።", f: "ኣይፋል፡ ተጸበዪ። ቅድም ክዝሕል ኣለዎ።", x: "ኣይፋል፡ ተጸበዩ። ቅድም ክዝሕል ኣለዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weld': "ውዑይ ሓጺን ዝሑል ይመስል", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.b': { m: "ምልሓም ኣዝዩ ብሩህ ብርሃን ይህብ። ብዘይ ማስኬራ ምልሓም ኣይትጠምቶ፡ ካብ ርሑቕ እውን፡ ኣዒንትኻ ክነድዳ ይኽእላ፡ ድሕሪ ሰዓታት ጥራይ ድማ ይስምዓካ። ብጻይ ስራሕ ኣብ ጥቓኻ ይልሕም ኣሎ ድዩ? ናብ ካልእ ጠምት፡ ወይ ብድሕሪ እቲ መከላኸሊ መጋረጃ ደው በል። ሕጂ ዝተለሓመ ወይ ዝተለገጸ ሓጺን ልሙድ ይመስል፡ ግን ኣዝዩ ውዑይ እዩ። ብጥራይ ኢድካ ኣይተልዕሎ። ትኪ ምልሓም ንሳንቡእካ ሕማቕ እዩ፡ ነቲ መምጠጢ ትኪ ወልዓዮ። ቃጸሎ? ብቕጽበት ብማይ ኣዝሕሎ፡ እንተ ወሓደ ንዓሰርተ ደቒቕ፡ ሕበሮ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ምልሓም ኣዝዩ ብሩህ ብርሃን ይህብ። ብዘይ ማስኬራ ምልሓም ኣይትጠምትዮ፡ ካብ ርሑቕ እውን፡ ኣዒንትኺ ክነድዳ ይኽእላ፡ ድሕሪ ሰዓታት ጥራይ ድማ ይስምዓኪ። ብጻይ ስራሕ ኣብ ጥቓኺ ይልሕም ኣሎ ድዩ? ናብ ካልእ ጠምቲ፡ ወይ ብድሕሪ እቲ መከላኸሊ መጋረጃ ደው በሊ። ሕጂ ዝተለሓመ ወይ ዝተለገጸ ሓጺን ልሙድ ይመስል፡ ግን ኣዝዩ ውዑይ እዩ። ብጥራይ ኢድኪ ኣይተልዕልዮ። ትኪ ምልሓም ንሳንቡእኪ ሕማቕ እዩ፡ ነቲ መምጠጢ ትኪ ወልዕዮ። ቃጸሎ? ብቕጽበት ብማይ ኣዝሕልዮ፡ እንተ ወሓደ ንዓሰርተ ደቒቕ፡ ሕበርዮ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ምልሓም ኣዝዩ ብሩህ ብርሃን ይህብ። ብዘይ ማስኬራ ምልሓም ኣይትጠምትዎ፡ ካብ ርሑቕ እውን፡ ኣዒንትኹም ክነድዳ ይኽእላ፡ ድሕሪ ሰዓታት ጥራይ ድማ ይስምዓኩም። ብጻይ ስራሕ ኣብ ጥቓኹም ይልሕም ኣሎ ድዩ? ናብ ካልእ ጠምቱ፡ ወይ ብድሕሪ እቲ መከላኸሊ መጋረጃ ደው በሉ። ሕጂ ዝተለሓመ ወይ ዝተለገጸ ሓጺን ልሙድ ይመስል፡ ግን ኣዝዩ ውዑይ እዩ። ብጥራይ ኢድኩም ኣይተልዕልዎ። ትኪ ምልሓም ንሳንቡእኩም ሕማቕ እዩ፡ ነቲ መምጠጢ ትኪ ወልዕዎ። ቃጸሎ? ብቕጽበት ብማይ ኣዝሕልዎ፡ እንተ ወሓደ ንዓሰርተ ደቒቕ፡ ሕበርዎ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.p': "እዚ ዝሒሉ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.s': { m: "ብጻይ ስራሕ ኣብ ጎድንኻ ይልሕም ኣሎ። ማስኬራ ምልሓም ኣይገበርካን። እንታይ ትገብር?", f: "ብጻይ ስራሕ ኣብ ጎድንኺ ይልሕም ኣሎ። ማስኬራ ምልሓም ኣይገበርክን። እንታይ ትገብሪ?", x: "ብጻይ ስራሕ ኣብ ጎድንኹም ይልሕም ኣሎ። ማስኬራ ምልሓም ኣይገበርኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o1': { m: "ናብ ካልእ ጠምት፡ ብድሕሪ እቲ መከላኸሊ መጋረጃ ድማ ደው በል።", f: "ናብ ካልእ ጠምቲ፡ ብድሕሪ እቲ መከላኸሊ መጋረጃ ድማ ደው በሊ።", x: "ናብ ካልእ ጠምቱ፡ ብድሕሪ እቲ መከላኸሊ መጋረጃ ድማ ደው በሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o2': { m: "ንሓጺር ግዜ ርአ፡ ካብኡ ክትመሃር ትኽእል።", f: "ንሓጺር ግዜ ርአዪ፡ ካብኡ ክትመሃሪ ትኽእሊ።", x: "ንሓጺር ግዜ ርአዩ፡ ካብኡ ክትመሃሩ ትኽእሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.o3': { m: "ኣዒንትኻ ብፍርቂ ዕጾ።", f: "ኣዒንትኺ ብፍርቂ ዕጸዊ።", x: "ኣዒንትኹም ብፍርቂ ዕጸዉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.w': { m: "ብርሃን ምልሓም ንኣዒንትኻ የንድደን፡ ካብ ጎድንን ካብ ርሑቕን እውን። እቲ ቃንዛ ደሓር ጥራይ ይስምዓካ፡ መብዛሕትኡ ግዜ ብለይቲ።", f: "ብርሃን ምልሓም ንኣዒንትኺ የንድደን፡ ካብ ጎድንን ካብ ርሑቕን እውን። እቲ ቃንዛ ደሓር ጥራይ ይስምዓኪ፡ መብዛሕትኡ ግዜ ብለይቲ።", x: "ብርሃን ምልሓም ንኣዒንትኹም የንድደን፡ ካብ ጎድንን ካብ ርሑቕን እውን። እቲ ቃንዛ ደሓር ጥራይ ይስምዓኩም፡ መብዛሕትኡ ግዜ ብለይቲ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.carparts': "ኣካላት መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motor': "ሞተር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.motorkap': "ኮፋኖ (መኽደኒ ሞተር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rem': "ፍሬኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lamp': "መብራህቲ (ናይ መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ruitenwisser': "መጽረዪ መስተዋት መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoel': "መንበር", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.1': { m: "ኮፋኖ ክፈት።", f: "ኮፋኖ ክፈቲ።", x: "ኮፋኖ ክፈቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.2': "እታ ናይ ቅድሚት ጸጋመይቲ መብራህቲ ተበላሽያ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.carparts.3': "ፍሬኖ ድምጺ የስምዕ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.q': { m: "እንታይ ትሰምዕ?", f: "እንታይ ትሰምዒ?", x: "እንታይ ትሰምዑ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts.a': "እቲ ሞተር ፍሉይ ድምጺ የስምዕ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carparts': "እታ መኪና ናይቲ ዓሚል እያ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.b': { m: "ኣብ ጋራዥ ዘላ መኪና ናትካ ኣይኮነትን፡ ናይቲ ዓሚል እያ። ቅድሚ ምእታውካ ኣብ መንበርን ኣብ መሪሕን መሸፈኒ ግበር፡ ኣብ ውሽጢ ድማ ብጽሩይ ኢድ ስራሕ። መንበር፡ መስትያታትን ሬድዮን ከምቲ ዝነበርዎ ግደፎም። ነቲ መንበር ከተንቀሳቕሶ ኣድልዩካ ድዩ? ናብ ቦታኡ መልሶ። ኣብታ መኪና ዘሎ ናይ ውልቂ ንብረት ኣይትተንክፍ። ጭሕጋር ወይ ርስሓት ጌርካ ዲኻ? ብቕጽበት ንተቖጻጻሪኻ ንገሮ። ኣብ ገዛኡ ዝረኸቦ ዓሚል ኣይምለስን።", f: "ኣብ ጋራዥ ዘላ መኪና ናትኪ ኣይኮነትን፡ ናይቲ ዓሚል እያ። ቅድሚ ምእታውኪ ኣብ መንበርን ኣብ መሪሕን መሸፈኒ ግበሪ፡ ኣብ ውሽጢ ድማ ብጽሩይ ኢድ ስርሒ። መንበር፡ መስትያታትን ሬድዮን ከምቲ ዝነበርዎ ግደፍዮም። ነቲ መንበር ከተንቀሳቕስዮ ኣድልዩኪ ድዩ? ናብ ቦታኡ መልስዮ። ኣብታ መኪና ዘሎ ናይ ውልቂ ንብረት ኣይትተንክፊ። ጭሕጋር ወይ ርስሓት ጌርኪ ዲኺ? ብቕጽበት ንተቖጻጻሪኺ ንገርዮ። ኣብ ገዛኡ ዝረኸቦ ዓሚል ኣይምለስን።", x: "ኣብ ጋራዥ ዘላ መኪና ናትኩም ኣይኮነትን፡ ናይቲ ዓሚል እያ። ቅድሚ ምእታውኩም ኣብ መንበርን ኣብ መሪሕን መሸፈኒ ግበሩ፡ ኣብ ውሽጢ ድማ ብጽሩይ ኢድ ስርሑ። መንበር፡ መስትያታትን ሬድዮን ከምቲ ዝነበርዎ ግደፍዎም። ነቲ መንበር ከተንቀሳቕስዎ ኣድልዩኩም ድዩ? ናብ ቦታኡ መልስዎ። ኣብታ መኪና ዘሎ ናይ ውልቂ ንብረት ኣይትተንክፉ። ጭሕጋር ወይ ርስሓት ጌርኩም ዲኹም? ብቕጽበት ንተቖጻጻሪኹም ንገርዎ። ኣብ ገዛኡ ዝረኸቦ ዓሚል ኣይምለስን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.p': "ጭሕጋር ጌረ። ይቕሬታ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.s': { m: "ኣብ ማዕጾ መኪና ዓሚል ንእሽቶ ጭሕጋር ትገብር። ዝረኣዮ ሰብ የለን። እንታይ ትገብር?", f: "ኣብ ማዕጾ መኪና ዓሚል ንእሽቶ ጭሕጋር ትገብሪ። ዝረኣዮ ሰብ የለን። እንታይ ትገብሪ?", x: "ኣብ ማዕጾ መኪና ዓሚል ንእሽቶ ጭሕጋር ትገብሩ። ዝረኣዮ ሰብ የለን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o1': { m: "ብቕጽበት ንተቖጻጻሪኻ ንገሮ።", f: "ብቕጽበት ንተቖጻጻሪኺ ንገርዮ።", x: "ብቕጽበት ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o2': { m: "ገለ ኣይትበል፡ ኣዝዩ ንእሽቶ እዩ።", f: "ገለ ኣይትበሊ፡ ኣዝዩ ንእሽቶ እዩ።", x: "ገለ ኣይትበሉ፡ ኣዝዩ ንእሽቶ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.o3': { m: "ብጨርቂ ፍሓቆ፡ ተስፋ ድማ ግበር።", f: "ብጨርቂ ፍሓቕዮ፡ ተስፋ ድማ ግበሪ።", x: "ብጨርቂ ፍሓቕዎ፡ ተስፋ ድማ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.w': "ኩሉ ሰብ ሓደ ሓደ ግዜ ጌጋ ይገብር። ጋራዥ ጭሕጋር ከዐሪ ይኽእል፡ ወይ ንዓሚል ብሓቂ ክነግሮ ይኽእል። ዝተሓብአ ጭሕጋር ንጽቡቕ ስም እቲ ጋራዥ የጥፍኦ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.carsafe': "በንዚን፡ ጋዝን ኤሌክትሪክን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krik': "ክሪክ (ንሓደ ወገን መኪና የልዕል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.benzine': "በንዚን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.elektrischeauto': "ናይ ኤሌክትሪክ መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oranje': "ኣራንሾኒ (ሕብሪ ኣራንሺ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.morsen': "ምፍሳስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lap': "እርጊት ጨርቂ (ንረሳሕ ስራሕ ዝኸውን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.1': "ሽታ በንዚን ይሽትተኒ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.2': "ዘይቲ ፈሲሱ። ጨርቂ ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.carsafe.3': "ነቶም ኣራንሾኒ ገመዳት ኣይትንክፎምን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.q': "ኣብዛ መኪና ክሰርሕ ይፍቀደኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe.a': "ገና። ናይ ኤሌክትሪክ መኪና እያ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carsafe': "ኣራንሾኒ ገመዳትን ዝሰርሕ ዘሎ ሞተርን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.b': { m: "ናይ ኤሌክትሪክ ወይ ሃይብሪድ መኪና ኣዝዩ ልዑል ሓይሊ ዘለዎ ባተሪ ኣለዋ። ናቱ ገመዳት ኣራንሾኒ እዮም። ኣይትተንክፎም፡ ኣይትፍትሖም ድማ፡ ፍሉይ ስልጠና ዘለዎ መካኒክ ቅድም ነታ መኪና ውሕስቲ ክገብራ ኣለዎ። ኣብታ መኪና ምልክት ወይ ኮኖ ኣሎ ድዩ? ሽዑ ርሓቕ። ኣብ ውሽጢ ገዛ ዝሰርሕ ሞተር ክትሽትቶ ወይ ክትርእዮ ዘይትኽእል ጋዝ የውጽእ፡ ክቐትል ድማ ይኽእል። ስለዚ፡ ነቲ ናይ ትኪ ቱቦ ግበሮ፡ ወይ መዓጹ ክፈት። ሽታ በንዚን ይሽትተካ ድዩ? ብልጭታ ኣይሃሉ፡ ሽጋራ ምትካኽ እውን ኣይሃሉ። ብቕጽበት ንተቖጻጻሪኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ናይ ኤሌክትሪክ ወይ ሃይብሪድ መኪና ኣዝዩ ልዑል ሓይሊ ዘለዎ ባተሪ ኣለዋ። ናቱ ገመዳት ኣራንሾኒ እዮም። ኣይትተንክፍዮም፡ ኣይትፍትሕዮም ድማ፡ ፍሉይ ስልጠና ዘለዎ መካኒክ ቅድም ነታ መኪና ውሕስቲ ክገብራ ኣለዎ። ኣብታ መኪና ምልክት ወይ ኮኖ ኣሎ ድዩ? ሽዑ ርሓቒ። ኣብ ውሽጢ ገዛ ዝሰርሕ ሞተር ክትሽትትዮ ወይ ክትርእይዮ ዘይትኽእሊ ጋዝ የውጽእ፡ ክቐትል ድማ ይኽእል። ስለዚ፡ ነቲ ናይ ትኪ ቱቦ ግበርዮ፡ ወይ መዓጹ ክፈቲ። ሽታ በንዚን ይሽትተኪ ድዩ? ብልጭታ ኣይሃሉ፡ ሽጋራ ምትካኽ እውን ኣይሃሉ። ብቕጽበት ንተቖጻጻሪኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ናይ ኤሌክትሪክ ወይ ሃይብሪድ መኪና ኣዝዩ ልዑል ሓይሊ ዘለዎ ባተሪ ኣለዋ። ናቱ ገመዳት ኣራንሾኒ እዮም። ኣይትተንክፍዎም፡ ኣይትፍትሕዎም ድማ፡ ፍሉይ ስልጠና ዘለዎ መካኒክ ቅድም ነታ መኪና ውሕስቲ ክገብራ ኣለዎ። ኣብታ መኪና ምልክት ወይ ኮኖ ኣሎ ድዩ? ሽዑ ርሓቑ። ኣብ ውሽጢ ገዛ ዝሰርሕ ሞተር ክትሽትትዎ ወይ ክትርእይዎ ዘይትኽእሉ ጋዝ የውጽእ፡ ክቐትል ድማ ይኽእል። ስለዚ፡ ነቲ ናይ ትኪ ቱቦ ግበርዎ፡ ወይ መዓጹ ክፈቱ። ሽታ በንዚን ይሽትተኩም ድዩ? ብልጭታ ኣይሃሉ፡ ሽጋራ ምትካኽ እውን ኣይሃሉ። ብቕጽበት ንተቖጻጻሪኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.p': "እዛ መኪና ውሕስቲ ተገይራ ድያ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.s': { m: "ኣብ ናይ ኤሌክትሪክ መኪና ጎማ ክትቅይር ኣለካ። ኣብ ትሕቲ እታ መኪና ዝተፈትሐ ኣራንሾኒ ገመድ ትርኢ። እንታይ ትገብር?", f: "ኣብ ናይ ኤሌክትሪክ መኪና ጎማ ክትቅይሪ ኣለኪ። ኣብ ትሕቲ እታ መኪና ዝተፈትሐ ኣራንሾኒ ገመድ ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ ናይ ኤሌክትሪክ መኪና ጎማ ክትቅይሩ ኣለኩም። ኣብ ትሕቲ እታ መኪና ዝተፈትሐ ኣራንሾኒ ገመድ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o1': { m: "ዋላ ሓንቲ ኣይትተንክፍ፡ ነቲ ዝሰልጠነ መካኒክ ድማ ጸውዓዮ።", f: "ዋላ ሓንቲ ኣይትተንክፊ፡ ነቲ ዝሰልጠነ መካኒክ ድማ ጸውዕዮ።", x: "ዋላ ሓንቲ ኣይትተንክፉ፡ ነቲ ዝሰልጠነ መካኒክ ድማ ጸውዕዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o2': { m: "ነቲ ገመድ ብኢድካ ናብ ቦታኡ ድፍኣዮ።", f: "ነቲ ገመድ ብኢድኪ ናብ ቦታኡ ድፍእዮ።", x: "ነቲ ገመድ ብኢድኩም ናብ ቦታኡ ድፍእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.o3': { m: "ብንቑጽ ጨርቂ ናብ ቦታኡ ድፍኣዮ።", f: "ብንቑጽ ጨርቂ ናብ ቦታኡ ድፍእዮ።", x: "ብንቑጽ ጨርቂ ናብ ቦታኡ ድፍእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.w': "ባተሪ ናይ ኤሌክትሪክ መኪና ክቐትል ዝኽእል ሓይሊ ኣለዎ፡ እታ መኪና ጠፊኣ ከላ እውን። ነዞም ኣካላት ክትንክፍ ዝፍቀደሉ ስልጠና ዘለዎ ሰብ ጥራይ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'l.vancheck': "ቫን ምፍታሽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schade': "ጉድኣት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deuk': "ጎድጓድ (ብማህረምቲ ዝኣተወ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spiegel': "መስትያት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tanken': "ነዳዲ ምምላእ (ኣብ ቫን ነዳዲ ምእታው)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opladen': "ቻርጅ ምግባር (ናይ ኤሌክትሪክ ቫን፡ ተሌፎን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeren': "ፓርክ ምግባር", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.1': "ኣብቲ ማዕጾ ጎድጓድ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.2': "እዚ ጉድኣት ድሮ ነይሩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.vancheck.3': "ቅድም ገና ነዳዲ ክመልእ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.q': "እታ ቫን ኩሉ ደሓን ድያ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck.a': "ኣይፋል፡ እቲ መስትያት ተሰይሩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vancheck': { m: "ቅድሚ ምዝዋርካ ርአ", f: "ቅድሚ ምዝዋርኪ ርአዪ", x: "ቅድሚ ምዝዋርኩም ርአዩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.b': { m: "ቅድሚ ቀዳማይ ዙረትካ ኣብ ዙርያ እታ ቫን ዙር። ጎድጓድ፡ ጭሕጋር ወይ ዝተሰብረ መስትያት ትርኢ ዲኻ? ስእሊ ውሰድ፡ ቅድሚ ምብጋስካ ድማ ሕበሮ። ሽዑ እቲ ጉድኣት ድሮ ከም ዝነበረ ኩሉ ሰብ ይፈልጥ። ኣብ ዙረትካ ገለ ኣጋጢሙ ድዩ? ንእሽቶ እንተ ኾነ እውን፡ ኣብታ መዓልቲ እቲኣ ሕበሮ። ጉድኣት ምሕባእ ደሓር ዝዓበየ ጸገም የምጽእ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ቅድሚ ቀዳማይ ዙረትኪ ኣብ ዙርያ እታ ቫን ዙሪ። ጎድጓድ፡ ጭሕጋር ወይ ዝተሰብረ መስትያት ትርእዪ ዲኺ? ስእሊ ውሰዲ፡ ቅድሚ ምብጋስኪ ድማ ሕበርዮ። ሽዑ እቲ ጉድኣት ድሮ ከም ዝነበረ ኩሉ ሰብ ይፈልጥ። ኣብ ዙረትኪ ገለ ኣጋጢሙ ድዩ? ንእሽቶ እንተ ኾነ እውን፡ ኣብታ መዓልቲ እቲኣ ሕበርዮ። ጉድኣት ምሕባእ ደሓር ዝዓበየ ጸገም የምጽእ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ቅድሚ ቀዳማይ ዙረትኩም ኣብ ዙርያ እታ ቫን ዙሩ። ጎድጓድ፡ ጭሕጋር ወይ ዝተሰብረ መስትያት ትርእዩ ዲኹም? ስእሊ ውሰዱ፡ ቅድሚ ምብጋስኩም ድማ ሕበርዎ። ሽዑ እቲ ጉድኣት ድሮ ከም ዝነበረ ኩሉ ሰብ ይፈልጥ። ኣብ ዙረትኩም ገለ ኣጋጢሙ ድዩ? ንእሽቶ እንተ ኾነ እውን፡ ኣብታ መዓልቲ እቲኣ ሕበርዎ። ጉድኣት ምሕባእ ደሓር ዝዓበየ ጸገም የምጽእ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.p': "ኣብታ ቫን ጉድኣት ኣሎ። ስእሊ እንሆ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.s': { m: "ንጉሆ ኣብታ ቫን ሓድሽ ጎድጓድ ትርኢ። ንስኻ ኣይገበርካዮን። እንታይ ትገብር?", f: "ንጉሆ ኣብታ ቫን ሓድሽ ጎድጓድ ትርእዪ። ንስኺ ኣይገበርክዮን። እንታይ ትገብሪ?", x: "ንጉሆ ኣብታ ቫን ሓድሽ ጎድጓድ ትርእዩ። ንስኻትኩም ኣይገበርኩምዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o1': { m: "ስእሊ ውሰድ፡ ቅድሚ ምዝዋርካ ድማ ሕበሮ።", f: "ስእሊ ውሰዲ፡ ቅድሚ ምዝዋርኪ ድማ ሕበርዮ።", x: "ስእሊ ውሰዱ፡ ቅድሚ ምዝዋርኩም ድማ ሕበርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o2': { m: "ገለ ኣይትበል፡ ናትካ ጎድጓድ ኣይኮነን።", f: "ገለ ኣይትበሊ፡ ናትኪ ጎድጓድ ኣይኮነን።", x: "ገለ ኣይትበሉ፡ ናትኩም ጎድጓድ ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.o3': { m: "ሓደ ሰብ እንተ ሓተተ ተጸቢኻ ርአ።", f: "ሓደ ሰብ እንተ ሓተተ ተጸቢኺ ርአዪ።", x: "ሓደ ሰብ እንተ ሓተተ ተጸቢኹም ርአዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.w': { m: "ቅድሚ ምዝዋርካ ምስ እትሕብሮ፡ ንስኻ ከም ዝገበርካዮ ክሓስብ ዝኽእል ሰብ የለን። ሰዓት ዘለዎ ስእሊ ንኹሉ ሰብ ንጹር እዩ።", f: "ቅድሚ ምዝዋርኪ ምስ እትሕብርዮ፡ ንስኺ ከም ዝገበርክዮ ክሓስብ ዝኽእል ሰብ የለን። ሰዓት ዘለዎ ስእሊ ንኹሉ ሰብ ንጹር እዩ።", x: "ቅድሚ ምዝዋርኩም ምስ እትሕብርዎ፡ ንስኻትኩም ከም ዝገበርኩምዎ ክሓስብ ዝኽእል ሰብ የለን። ሰዓት ዘለዎ ስእሊ ንኹሉ ሰብ ንጹር እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.delay': "ኣብ መገዲ ምድንጓይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.file': "ምጭንናቕ ትራፊክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertraging': "ምድንጓይ (ካብቲ ዝተመደበ ግዜ ምድሓር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omleiding': "መተካእታ መገዲ (እቲ ጽርግያ ስለ ዝተዓጽወ፡ ካልእ መገዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navigatie': "ናቪጌሽን (መገዲ ዘርኢ ኣፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planner': "ፕላነር (መስመራት ዘውጽእ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.retour': "ተመላሲ (ዝምለስ ጥቕሊል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.1': "ኣብ ምጭንናቕ ትራፊክ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.2': "ናይ ፍርቂ ሰዓት ምድንጓይ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.delay.3': "እዚ ጥቕሊል ይምለስ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.q': { m: "ሕጂ ኣበይ ኣለኻ?", f: "ሕጂ ኣበይ ኣለኺ?", x: "ሕጂ ኣበይ ኣለኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay.a': "ኣብቲ መተካእታ መገዲ። ዓሰርተ ደቒቕ ክድንጒ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.delay': { m: "ደንጒኻ? ኣብ ግዜኡ ንገር", f: "ደንጒኺ? ኣብ ግዜኡ ንገሪ", x: "ደንጒኹም? ኣብ ግዜኡ ንገሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.b': { m: "ምጭንናቕ ትራፊክ ወይ ዝተዓጽወ ጽርግያ ጌጋኻ ኣይኮነን። ግን ምድንጓይ ከም ዘሎ ምስ ፈለጥካ፡ ብኡብኡ ንፕላነር ንገሮ። ሽዑ እቲ ፕላነር ንዓማዊል ክነግሮም፡ ወይ ነቲ መስመር ክቕይሮ ይኽእል። ቅድም ኣብ ውሑስ ቦታ ደው በል፡ እናዘወርካ ተሌፎን ብኢድካ ሒዝካ ኣይትደውል። ነቲ ግዜ ንምምላስ ኢልካ ድማ ዝያዳ ቀልጢፍካ ኣይትዘውር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ምጭንናቕ ትራፊክ ወይ ዝተዓጽወ ጽርግያ ጌጋኺ ኣይኮነን። ግን ምድንጓይ ከም ዘሎ ምስ ፈለጥኪ፡ ብኡብኡ ንፕላነር ንገርዮ። ሽዑ እቲ ፕላነር ንዓማዊል ክነግሮም፡ ወይ ነቲ መስመር ክቕይሮ ይኽእል። ቅድም ኣብ ውሑስ ቦታ ደው በሊ፡ እናዘወርኪ ተሌፎን ብኢድኪ ሒዝኪ ኣይትደውሊ። ነቲ ግዜ ንምምላስ ኢልኪ ድማ ዝያዳ ቀልጢፍኪ ኣይትዘውሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ምጭንናቕ ትራፊክ ወይ ዝተዓጽወ ጽርግያ ጌጋኹም ኣይኮነን። ግን ምድንጓይ ከም ዘሎ ምስ ፈለጥኩም፡ ብኡብኡ ንፕላነር ንገርዎ። ሽዑ እቲ ፕላነር ንዓማዊል ክነግሮም፡ ወይ ነቲ መስመር ክቕይሮ ይኽእል። ቅድም ኣብ ውሑስ ቦታ ደው በሉ፡ እናዘወርኩም ተሌፎን ብኢድኩም ሒዝኩም ኣይትደውሉ። ነቲ ግዜ ንምምላስ ኢልኩም ድማ ዝያዳ ቀልጢፍኩም ኣይትዘውሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.p': "ኣብ ምጭንናቕ ትራፊክ ኣለኹ። ፍርቂ ሰዓት ክድንጒ እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.s': { m: "ሓደ ጽርግያ ተዓጽዩ ኣሎ። እቲ መተካእታ መገዲ ሰላሳ ደቒቕ ይወስደልካ። እንታይ ትገብር?", f: "ሓደ ጽርግያ ተዓጽዩ ኣሎ። እቲ መተካእታ መገዲ ሰላሳ ደቒቕ ይወስደልኪ። እንታይ ትገብሪ?", x: "ሓደ ጽርግያ ተዓጽዩ ኣሎ። እቲ መተካእታ መገዲ ሰላሳ ደቒቕ ይወስደልኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o1': { m: "ብውሑስ ደው ክትብል ምስ ከኣልካ፡ ብኡብኡ ንፕላነር ንገሮ።", f: "ብውሑስ ደው ክትብሊ ምስ ከኣልኪ፡ ብኡብኡ ንፕላነር ንገርዮ።", x: "ብውሑስ ደው ክትብሉ ምስ ከኣልኩም፡ ብኡብኡ ንፕላነር ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o2': { m: "ነቲ ግዜ ንምምላስ ዝያዳ ቀልጢፍካ ዘውር።", f: "ነቲ ግዜ ንምምላስ ዝያዳ ቀልጢፍኪ ዘውሪ።", x: "ነቲ ግዜ ንምምላስ ዝያዳ ቀልጢፍኩም ዘውሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.o3': { m: "ገለ ኣይትበል፡ ምናልባት ሓደ እኳ ኣየስተውዕሎን።", f: "ገለ ኣይትበሊ፡ ምናልባት ሓደ እኳ ኣየስተውዕሎን።", x: "ገለ ኣይትበሉ፡ ምናልባት ሓደ እኳ ኣየስተውዕሎን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.w': "እቲ ፕላነር ኣቐዲሙ ምስ ዝፈልጥ፡ እቶም ዓማዊል ይሰምዑ፡ ሓደ እኳ ድማ ብኸንቱ ኣይጽበን። ብዝያዳ ፍጥነት ምዝዋር ሓደገኛ እዩ፡ ዳርጋ ግዜ እውን ኣየትርፍን።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'u.do': "መምርሒታት", // nieuw, nalezen // nagelezen AI 28 nov
    'l.putdown': { m: "ኣብኡ ኣቐምጦ", f: "ኣብኡ ኣቐምጥዮ", x: "ኣብኡ ኣቐምጥዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.zetten': "ምቕማጥ (ደው ዝብል ነገር፡ ሳጹን፡ ባልዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leggen': "ምቕማጥ፡ ምግዳም (ተጋዲሙ ዝቕመጥ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brengen': "ምብጻሕ፡ ምውሳድ (ናብ ቦታ ወይ ናብ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geven': "ምሃብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vasthouden': "ምሓዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loslaten': "ምልቃቕ", // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.1': { m: "ኣብኡ ኣቐምጦ።", f: "ኣብኡ ኣቐምጥዮ።", x: "ኣብኡ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.2': { m: "ነዚ ናብ ካንቲን ውሰዶ።", f: "ነዚ ናብ ካንቲን ውሰድዮ።", x: "ነዚ ናብ ካንቲን ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.putdown.3': { m: "ነዚ ንሓጺር ግዜ ሓዞ።", f: "ነዚ ንሓጺር ግዜ ሓዝዮ።", x: "ነዚ ንሓጺር ግዜ ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.q': { m: "ነዚ ንሓጺር ግዜ ክትሕዞ ትኽእል ዶ?", f: "ነዚ ንሓጺር ግዜ ክትሕዝዮ ትኽእሊ ዶ?", x: "ነዚ ንሓጺር ግዜ ክትሕዝዎ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown.a': "እወ። ኣበይ ከቐምጦ ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.putdown': { m: "ከም ዝሓዝካዮ ንገር", f: "ከም ዝሓዝክዮ ንገሪ", x: "ከም ዝሓዝኩምዎ ንገሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.b': { m: "ምስ ብጻይ ስራሕ ብሓባር ገለ ነገር ትጸውር ዲኻ፡ ወይስ ብጻይ ስራሕ ከቢድ ነገር ይህበካ ድዩ? ብጽቡቕ ምስ ሓዝካዮ «Ik heb hem» በል። ሽዑ ብጻይ ስራሕካ ክለቅቖ ውሑስ ምዃኑ ይፈልጥ። ባዕልኻ ክትለቅቖ ትደሊ ዲኻ? ቅድም «Heb je hem?» ኢልካ ሕተት። ነቲ መልሲ ድማ ተጸበ። እዚ ኣብ ኩሉ ቦታ ስራሕ ልሙድ እዩ። ነገራት ኣብ እግርን ኢድን ከይወድቁ ይከላኸል።", f: "ምስ ብጻይ ስራሕ ብሓባር ገለ ነገር ትጸውሪ ዲኺ፡ ወይስ ብጻይ ስራሕ ከቢድ ነገር ይህበኪ ድዩ? ብጽቡቕ ምስ ሓዝክዮ «Ik heb hem» በሊ። ሽዑ ብጻይ ስራሕኪ ክለቅቖ ውሑስ ምዃኑ ይፈልጥ። ባዕልኺ ክትለቅቕዮ ትደልዪ ዲኺ? ቅድም «Heb je hem?» ኢልኪ ሕተቲ። ነቲ መልሲ ድማ ተጸበዪ። እዚ ኣብ ኩሉ ቦታ ስራሕ ልሙድ እዩ። ነገራት ኣብ እግርን ኢድን ከይወድቁ ይከላኸል።", x: "ምስ ብጻይ ስራሕ ብሓባር ገለ ነገር ትጸውሩ ዲኹም፡ ወይስ ብጻይ ስራሕ ከቢድ ነገር ይህበኩም ድዩ? ብጽቡቕ ምስ ሓዝኩምዎ «Ik heb hem» በሉ። ሽዑ ብጻይ ስራሕኩም ክለቅቖ ውሑስ ምዃኑ ይፈልጥ። ባዕልኹም ክትለቅቕዎ ትደልዩ ዲኹም? ቅድም «Heb je hem?» ኢልኩም ሕተቱ። ነቲ መልሲ ድማ ተጸበዩ። እዚ ኣብ ኩሉ ቦታ ስራሕ ልሙድ እዩ። ነገራት ኣብ እግርን ኢድን ከይወድቁ ይከላኸል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.p': { m: "ሒዘዮ ኣለኹ። ክትለቅቖ ትኽእል ኢኻ።", f: "ሒዘዮ ኣለኹ። ክትለቅቕዮ ትኽእሊ ኢኺ።", x: "ሒዘዮ ኣለኹ። ክትለቅቕዎ ትኽእሉ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.s': { m: "ብጻይ ስራሕ ከቢድ ሳጹን ይህበካ። ገና ብጽቡቕ ኣይሓዝካዮን። እንታይ ትገብር?", f: "ብጻይ ስራሕ ከቢድ ሳጹን ይህበኪ። ገና ብጽቡቕ ኣይሓዝክዮን። እንታይ ትገብሪ?", x: "ብጻይ ስራሕ ከቢድ ሳጹን ይህበኩም። ገና ብጽቡቕ ኣይሓዝኩምዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o1': { m: "«wacht» በል፡ ቅድም ድማ ብዝሓሸ ሓዞ።", f: "«wacht» በሊ፡ ቅድም ድማ ብዝሓሸ ሓዝዮ።", x: "«wacht» በሉ፡ ቅድም ድማ ብዝሓሸ ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o2': { m: "ገለ ኣይትበል፡ ባዕሉ ክርእዮ እዩ።", f: "ገለ ኣይትበሊ፡ ባዕሉ ክርእዮ እዩ።", x: "ገለ ኣይትበሉ፡ ባዕሉ ክርእዮ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.o3': { m: "ከይጽበ፡ ቀልጢፍካ ውሰዶ።", f: "ከይጽበ፡ ቀልጢፍኪ ውሰድዮ።", x: "ከይጽበ፡ ቀልጢፍኩም ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.putdown.w': { m: "ብጻይ ስራሕካ፡ ሒዝካዮ ኣለኻ ኢሉ ምስ ሓሰበ ይለቅቖ። ሓንቲ ቃል ብጽቡቕ ክትሕዞ ግዜ ትህበካ።", f: "ብጻይ ስራሕኪ፡ ሒዝክዮ ኣለኺ ኢሉ ምስ ሓሰበ ይለቅቖ። ሓንቲ ቃል ብጽቡቕ ክትሕዝዮ ግዜ ትህበኪ።", x: "ብጻይ ስራሕኩም፡ ሒዝኩምዎ ኣለኹም ኢሉ ምስ ሓሰበ ይለቅቖ። ሓንቲ ቃል ብጽቡቕ ክትሕዝዎ ግዜ ትህበኩም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.onoff': "ምውላዕን ምጥፋእን፡ ምኽፋትን ምዕጻውን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanzetten': "ምውላዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opendoen': "ምኽፋት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtdoen': "ምዕጻው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukken': "ምጥዋቕ (መጠወቒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaien': "ምዝዋር፡ ምጥዋይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoppen': "ደው ምባል", // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.1': { m: "ነቲ ማዕጾ ዕጸዎ።", f: "ነቲ ማዕጾ ዕጸውዮ።", x: "ነቲ ማዕጾ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.2': { m: "ነቲ መጠወቒ ጠውቆ።", f: "ነቲ መጠወቒ ጠውቕዮ።", x: "ነቲ መጠወቒ ጠውቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.onoff.3': { m: "ደው በል! ኣጥፍኦ።", f: "ደው በሊ! ኣጥፍእዮ።", x: "ደው በሉ! ኣጥፍእዎ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.onoff.q': "እቲ ማዕጾ ተዓጽዩ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff.a': "ኣይፋል። ሕጂ ክዓጽዎ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.onoff': "ደው ምባል ማለት ደው ምባል እዩ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.b': { m: "ሓደ ሰብ ዓው ኢሉ «Stop!» ይብል ድዩ? ስለምንታይ ምዃኑ እንተ ዘይፈለጥካ እውን፡ ብቕጽበት ደው በል። ደሓር ሕተት። ሓጺር ዓው ዝበለ ቃል ኣብዚ ሕርቃን ኣይኮነን፡ ብጾት ስራሕ ንሓድሕዶም ብኸምዚ እዮም ብድሕንነት ዝሕልዉ። ባዕልኻ ሓደገኛ ነገር ትርኢ ዲኻ? ንስኻ እውን ዓው ኢልካ «Stop!» በል፡ ኣብዚ ንዓመታት ንዝሰርሐ ሰብ እውን። እዚ ንማንም ኣየገርሞን።", f: "ሓደ ሰብ ዓው ኢሉ «Stop!» ይብል ድዩ? ስለምንታይ ምዃኑ እንተ ዘይፈለጥኪ እውን፡ ብቕጽበት ደው በሊ። ደሓር ሕተቲ። ሓጺር ዓው ዝበለ ቃል ኣብዚ ሕርቃን ኣይኮነን፡ ብጾት ስራሕ ንሓድሕዶም ብኸምዚ እዮም ብድሕንነት ዝሕልዉ። ባዕልኺ ሓደገኛ ነገር ትርእዪ ዲኺ? ንስኺ እውን ዓው ኢልኪ «Stop!» በሊ፡ ኣብዚ ንዓመታት ንዝሰርሐ ሰብ እውን። እዚ ንማንም ኣየገርሞን።", x: "ሓደ ሰብ ዓው ኢሉ «Stop!» ይብል ድዩ? ስለምንታይ ምዃኑ እንተ ዘይፈለጥኩም እውን፡ ብቕጽበት ደው በሉ። ደሓር ሕተቱ። ሓጺር ዓው ዝበለ ቃል ኣብዚ ሕርቃን ኣይኮነን፡ ብጾት ስራሕ ንሓድሕዶም ብኸምዚ እዮም ብድሕንነት ዝሕልዉ። ባዕልኹም ሓደገኛ ነገር ትርእዩ ዲኹም? ንስኻትኩም እውን ዓው ኢልኩም «Stop!» በሉ፡ ኣብዚ ንዓመታት ንዝሰርሐ ሰብ እውን። እዚ ንማንም ኣየገርሞን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.p': { m: "ደው በል! ቁሩብ ተጸበ።", f: "ደው በሊ! ቁሩብ ተጸበዪ።", x: "ደው በሉ! ቁሩብ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.s': { m: "ማሽን ትወልዕ ኣለኻ። ብጻይ ስራሕ ዓው ኢሉ «Stop!» ይብል። ጸገም ኣይትርእን ኢኻ። እንታይ ትገብር?", f: "ማሽን ትወልዒ ኣለኺ። ብጻይ ስራሕ ዓው ኢሉ «Stop!» ይብል። ጸገም ኣይትርእይን ኢኺ። እንታይ ትገብሪ?", x: "ማሽን ትወልዑ ኣለኹም። ብጻይ ስራሕ ዓው ኢሉ «Stop!» ይብል። ጸገም ኣይትርእዩን ኢኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o1': { m: "ብቕጽበት ደው በል፡ ስለምንታይ ምዃኑ ድማ ደሓር ሕተት።", f: "ብቕጽበት ደው በሊ፡ ስለምንታይ ምዃኑ ድማ ደሓር ሕተቲ።", x: "ብቕጽበት ደው በሉ፡ ስለምንታይ ምዃኑ ድማ ደሓር ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o2': { m: "ቀጽል፡ ጸገም ኣይትርእን ኢኻ።", f: "ቀጽሊ፡ ጸገም ኣይትርእይን ኢኺ።", x: "ቀጽሉ፡ ጸገም ኣይትርእዩን ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.o3': { m: "ስለምንታይ ደው ክትብል ከም ዘለካ ቅድም ሕተት።", f: "ስለምንታይ ደው ክትብሊ ከም ዘለኪ ቅድም ሕተቲ።", x: "ስለምንታይ ደው ክትብሉ ከም ዘለኩም ቅድም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.w': { m: "ብጻይ ስራሕካ ንስኻ ዘይትርእዮ ነገር ክርኢ ይኽእል። ቅድም ደው ምባል፡ ድሕሪኡ ምዝራብ፡ እዚ ንኹሉ ሰብ ውሑስ ይገብሮ።", f: "ብጻይ ስራሕኪ ንስኺ ዘይትርእይዮ ነገር ክርኢ ይኽእል። ቅድም ደው ምባል፡ ድሕሪኡ ምዝራብ፡ እዚ ንኹሉ ሰብ ውሑስ ይገብሮ።", x: "ብጻይ ስራሕኩም ንስኻትኩም ዘይትርእይዎ ነገር ክርኢ ይኽእል። ቅድም ደው ምባል፡ ድሕሪኡ ምዝራብ፡ እዚ ንኹሉ ሰብ ውሑስ ይገብሮ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.fillempty': "ምድፋእ፡ ምስሓብ፡ ምምላእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duwen': "ምድፋእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trekken': "ምስሓብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vullen': "ምምላእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leegmaken': "ባዶ ምግባር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoonmaken': "ምጽራይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vol': "ምሉእ", // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.1': { m: "ኣይትድፍእ፡ ስሓብ።", f: "ኣይትድፍኢ፡ ስሓቢ።", x: "ኣይትድፍኡ፡ ስሓቡ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.fillempty.2': { m: "እዚ ምሉእ እዩ። ባዶ ግበሮ።", f: "እዚ ምሉእ እዩ። ባዶ ግበርዮ።", x: "እዚ ምሉእ እዩ። ባዶ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.fillempty.3': { m: "ነዚ ሓንሳብ ኣጽርዮ።", f: "ነዚ ሓንሳብ ኣጽርይዮ።", x: "ነዚ ሓንሳብ ኣጽርይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.q': "ድሮ መሊኡ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty.a': "እወ። ባዶ እገብሮ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fillempty': { m: "ወዲእካ? ንገር", f: "ወዲእኪ? ንገሪ", x: "ወዲእኩም? ንገሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.b': { m: "ሓደ ዕማም ወዲእካ ዲኻ? «Ik ben klaar.» ኢልካ ንገር። ድሕሪኡ እንታይ ክትገብር ከም እትኽእል ድማ ሕተት። ሰብ ክሳዕ ዝርእየካ ስቕ ኢልካ ምጽባይ፡ ሓቂ እንተ ዘይኮነ እውን፡ ክትሰርሕ ዘይትደሊ ክመስል ይኽእል። ብዛዕባ ዝቕጽል ዕማም ዝሓቱ ብጾት ስራሕ፡ ድሕሪ ግዜ መብዛሕትኡ ግዜ ዝያዳ ማራኺ ስራሕ ይረኽቡ። ሓድሽ ነገር ክትመሃር ትደሊ ዲኻ? ንሱ እውን ሕተት፡ «Mag ik dat ook leren?»", f: "ሓደ ዕማም ወዲእኪ ዲኺ? «Ik ben klaar.» ኢልኪ ንገሪ። ድሕሪኡ እንታይ ክትገብሪ ከም እትኽእሊ ድማ ሕተቲ። ሰብ ክሳዕ ዝርእየኪ ስቕ ኢልኪ ምጽባይ፡ ሓቂ እንተ ዘይኮነ እውን፡ ክትሰርሒ ዘይትደልዪ ክመስል ይኽእል። ብዛዕባ ዝቕጽል ዕማም ዝሓቱ ብጾት ስራሕ፡ ድሕሪ ግዜ መብዛሕትኡ ግዜ ዝያዳ ማራኺ ስራሕ ይረኽቡ። ሓድሽ ነገር ክትመሃሪ ትደልዪ ዲኺ? ንሱ እውን ሕተቲ፡ «Mag ik dat ook leren?»", x: "ሓደ ዕማም ወዲእኩም ዲኹም? «Ik ben klaar.» ኢልኩም ንገሩ። ድሕሪኡ እንታይ ክትገብሩ ከም እትኽእሉ ድማ ሕተቱ። ሰብ ክሳዕ ዝርእየኩም ስቕ ኢልኩም ምጽባይ፡ ሓቂ እንተ ዘይኮነ እውን፡ ክትሰርሑ ዘይትደልዩ ክመስል ይኽእል። ብዛዕባ ዝቕጽል ዕማም ዝሓቱ ብጾት ስራሕ፡ ድሕሪ ግዜ መብዛሕትኡ ግዜ ዝያዳ ማራኺ ስራሕ ይረኽቡ። ሓድሽ ነገር ክትመሃሩ ትደልዩ ዲኹም? ንሱ እውን ሕተቱ፡ «Mag ik dat ook leren?»" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.p': "ወዲአ። ካልእ እንታይ ክገብር እኽእል?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.s': { m: "ዕማምካ ወዲእካ። ተቖጻጻሪኻ ካልእ ስራሕ ሒዙ ኣሎ። እንታይ ትገብር?", f: "ዕማምኪ ወዲእኪ። ተቖጻጻሪኺ ካልእ ስራሕ ሒዙ ኣሎ። እንታይ ትገብሪ?", x: "ዕማምኩም ወዲእኩም። ተቖጻጻሪኹም ካልእ ስራሕ ሒዙ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o1': { m: "ከም ዝወዳእካ ንገር፡ እንታይ ከም ዝቕጽል ድማ ሕተት።", f: "ከም ዝወዳእኪ ንገሪ፡ እንታይ ከም ዝቕጽል ድማ ሕተቲ።", x: "ከም ዝወዳእኩም ንገሩ፡ እንታይ ከም ዝቕጽል ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o2': { m: "ተቖጻጻሪኻ ክሳዕ ዝርእየካ ተጸበ።", f: "ተቖጻጻሪኺ ክሳዕ ዝርእየኪ ተጸበዪ።", x: "ተቖጻጻሪኹም ክሳዕ ዝርእየኩም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.o3': { m: "ዕረፍቲ ውሰድ፡ ስራሕካ ተወዲኡ እዩ።", f: "ዕረፍቲ ውሰዲ፡ ስራሕኪ ተወዲኡ እዩ።", x: "ዕረፍቲ ውሰዱ፡ ስራሕኩም ተወዲኡ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.w': { m: "ተቖጻጻሪ ኩሉ ክርኢ ኣይክእልን። ከም ዝወዳእካ ምስ እትነግር፡ ስራሕ ይቕጽል፡ ዝያዳ ክትሰርሕ ከም እትደሊ ድማ ተርኢ።", f: "ተቖጻጻሪ ኩሉ ክርኢ ኣይክእልን። ከም ዝወዳእኪ ምስ እትነግሪ፡ ስራሕ ይቕጽል፡ ዝያዳ ክትሰርሒ ከም እትደልዪ ድማ ተርእዪ።", x: "ተቖጻጻሪ ኩሉ ክርኢ ኣይክእልን። ከም ዝወዳእኩም ምስ እትነግሩ፡ ስራሕ ይቕጽል፡ ዝያዳ ክትሰርሑ ከም እትደልዩ ድማ ተርእዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.order': "ቅድም እዚ፡ ድሕሪኡ እቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nu': "ሕጂ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dan': "ድሕሪኡ፡ ሽዑ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.altijd': "ኩሉ ግዜ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.genoeg': "እኹል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meer': "ዝያዳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alles': "ኩሉ", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.1': "ቅድም እዚ፡ ድሕሪኡ እቲ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.2': "እዚ እኹል እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.order.3': { m: "ነዚ ኩሉ ግዜ ከምዚ ግበሮ።", f: "ነዚ ኩሉ ግዜ ከምዚ ግበርዮ።", x: "ነዚ ኩሉ ግዜ ከምዚ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.q': { m: "እዚ ሕጂ ክትገብሮ ትኽእል ዶ?", f: "እዚ ሕጂ ክትገብርዮ ትኽእሊ ዶ?", x: "እዚ ሕጂ ክትገብርዎ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.order.a': "እወ። ቅድም እዚ፡ ድሕሪኡኸ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.order': { m: "ብዙሕ ዕማማት ብሓንሳብ? ቀዳማይ ኣየናይ ምዃኑ ሕተት", f: "ብዙሕ ዕማማት ብሓንሳብ? ቀዳማይ ኣየናይ ምዃኑ ሕተቲ", x: "ብዙሕ ዕማማት ብሓንሳብ? ቀዳማይ ኣየናይ ምዃኑ ሕተቱ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.b': { m: "ሓደ ሓደ ግዜ ኣብ ሓደ ምሉእ ሓሳብ ሰለስተ ዕማማት ይወሃበካ። እዚ ንምዝካር ከቢድ እዩ፡ ሆላንድኛ ጽቡቕ ንዝዛረቡ ሰባት እውን። ኣየናይ ቅድም ከም ዝመጽእ ሕተት፡ «Wat moet ik eerst doen?»። ነቶም ዕማማት ክትጽሕፎም እውን ትኽእል ኢኻ፡ ወይ ብኣጻብዕካ ቆጺርካ ደጊምካ ክትብሎም። ሓደ ረሲዕካ ዲኻ? ተመሊስካ ሕተት። እዚ ካብ ምግማት ይሓይሽ።", f: "ሓደ ሓደ ግዜ ኣብ ሓደ ምሉእ ሓሳብ ሰለስተ ዕማማት ይወሃበኪ። እዚ ንምዝካር ከቢድ እዩ፡ ሆላንድኛ ጽቡቕ ንዝዛረቡ ሰባት እውን። ኣየናይ ቅድም ከም ዝመጽእ ሕተቲ፡ «Wat moet ik eerst doen?»። ነቶም ዕማማት ክትጽሕፍዮም እውን ትኽእሊ ኢኺ፡ ወይ ብኣጻብዕኪ ቆጺርኪ ደጊምኪ ክትብልዮም። ሓደ ረሲዕኪ ዲኺ? ተመሊስኪ ሕተቲ። እዚ ካብ ምግማት ይሓይሽ።", x: "ሓደ ሓደ ግዜ ኣብ ሓደ ምሉእ ሓሳብ ሰለስተ ዕማማት ይወሃበኩም። እዚ ንምዝካር ከቢድ እዩ፡ ሆላንድኛ ጽቡቕ ንዝዛረቡ ሰባት እውን። ኣየናይ ቅድም ከም ዝመጽእ ሕተቱ፡ «Wat moet ik eerst doen?»። ነቶም ዕማማት ክትጽሕፍዎም እውን ትኽእሉ ኢኹም፡ ወይ ብኣጻብዕኩም ቆጺርኩም ደጊምኩም ክትብልዎም። ሓደ ረሲዕኩም ዲኹም? ተመሊስኩም ሕተቱ። እዚ ካብ ምግማት ይሓይሽ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.p': "እዚ ብዙሕ እዩ። ቅድም እንታይ ክገብር ኣለኒ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.s': { m: "ተቖጻጻሪኻ ሰለስተ ዕማማት ኣዝዩ ቀልጢፉ ይህበካ። ነቲ ቀዳማይ ጥራይ ትዝክሮ። እንታይ ትገብር?", f: "ተቖጻጻሪኺ ሰለስተ ዕማማት ኣዝዩ ቀልጢፉ ይህበኪ። ነቲ ቀዳማይ ጥራይ ትዝክርዮ። እንታይ ትገብሪ?", x: "ተቖጻጻሪኹም ሰለስተ ዕማማት ኣዝዩ ቀልጢፉ ይህበኩም። ነቲ ቀዳማይ ጥራይ ትዝክርዎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o1': { m: "ነቶም ዕማማት ደጊምካ ክትሰምዖም ብኡብኡ ሕተት።", f: "ነቶም ዕማማት ደጊምኪ ክትሰምዕዮም ብኡብኡ ሕተቲ።", x: "ነቶም ዕማማት ደጊምኩም ክትሰምዕዎም ብኡብኡ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o2': { m: "ነቲ ቀዳማይ ግበሮ፡ ነቲ ዝተረፈ ክትዝክሮ ድማ ተስፋ ግበር።", f: "ነቲ ቀዳማይ ግበርዮ፡ ነቲ ዝተረፈ ክትዝክርዮ ድማ ተስፋ ግበሪ።", x: "ነቲ ቀዳማይ ግበርዎ፡ ነቲ ዝተረፈ ክትዝክርዎ ድማ ተስፋ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.o3': { m: "ዋላ ሓንቲ ኣይትግበር፡ ንሰለስቲኦም ኣይትፈልጦምን ኢኻ።", f: "ዋላ ሓንቲ ኣይትግበሪ፡ ንሰለስቲኦም ኣይትፈልጥዮምን ኢኺ።", x: "ዋላ ሓንቲ ኣይትግበሩ፡ ንሰለስቲኦም ኣይትፈልጥዎምን ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.w': { m: "ብኡብኡ ምሕታት ዓሰርተ ካልኢት ይወስድ። ደሓር ተቖጻጻሪኻ ከይዱ ክኸውን ይኽእል፡ ሽዑ ትጽበ ወይ ትግምት።", f: "ብኡብኡ ምሕታት ዓሰርተ ካልኢት ይወስድ። ደሓር ተቖጻጻሪኺ ከይዱ ክኸውን ይኽእል፡ ሽዑ ትጽበዪ ወይ ትግምቲ።", x: "ብኡብኡ ምሕታት ዓሰርተ ካልኢት ይወስድ። ደሓር ተቖጻጻሪኹም ከይዱ ክኸውን ይኽእል፡ ሽዑ ትጽበዩ ወይ ትግምቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'u.afbouw': "ሸክላ፡ ጀሶን ሕብርን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tiletools': "መሳርሒታት ነጻፊ ሸክላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmkam': "ኣስናን ዘለዎ ማንካ (ኮላ ሸክላ ብመስመራት ዝዝርግሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.troffel': "ማንካ ህንጻ (ካዝዋራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelsnijder': "መቑረጺ ሸክላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nijptang': "ፒንሳ (ካብ ሸክላ ንኣሽቱ ቁራጻት ንምቑራስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mixer': "ሚክሰር (ኣብ ባልዲ ኮላ ወይ ጀሶ ዝሕውስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.duimstok': "ዝዕጸፍ ሜትሮ", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.1': { m: "ነቲ ኣስናን ዘለዎ ማንካ ቁሩብ ሃበኒ።", f: "ነቲ ኣስናን ዘለዎ ማንካ ቁሩብ ሃብኒ።", x: "ነቲ ኣስናን ዘለዎ ማንካ ቁሩብ ሃቡኒ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.2': "ነቲ ሸክላ ብመቑረጺ ሸክላ እቖርጾ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiletools.3': { m: "ቅድም ብዝዕጸፍ ሜትሮ ዓቅን።", f: "ቅድም ብዝዕጸፍ ሜትሮ ዓቅኒ።", x: "ቅድም ብዝዕጸፍ ሜትሮ ዓቅኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.q': "እቲ ሚክሰር ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools.a': "ኣብ ጥቓ ባልዲ፡ ኣብ ጎድኒ ማዕጾ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiletools': { m: "ኮላ ከይተረረ መሳርሒታትካ ኣጽሪ", f: "ኮላ ከይተረረ መሳርሒታትኪ ኣጽርዪ", x: "ኮላ ከይተረረ መሳርሒታትኩም ኣጽርዩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.b': { m: "ኮላ ሸክላን ጀሶን ቀልጢፎም ይተርሩ፡ ኣብ መሳርሒታትካ እውን። ስለዚ ነቲ ኣስናን ዘለዎ ማንካ፡ ማንካ ህንጻን ሚክሰርን ብኡብኡ ኣብ ባልዲ ማይ ኣጽርዮም፡ ቅድሚ ዕረፍትኻ እውን። ዝተረረ ኮላ ኣይወጽእን፡ ዝተረረ ኮላ ዘለዎ ኣስናን ዘለዎ ማንካ ድማ ሕማቕ መስመራት ይገብር። ነቲ ረሳሕ ማይ ኣብ መሕጸቢ ወይ ኣብ ፍሳስ ኣይተፍስሶ፡ ይድፈን እዩ። እቲ ማይ ናበይ ክፍሰስ ከም ዝኽእል ሕተት። ሚክሰር፡ ብክልተ ኢድካ ሓዞ፡ ቀስ ኢልካ ድማ ኣበግሶ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኮላ ሸክላን ጀሶን ቀልጢፎም ይተርሩ፡ ኣብ መሳርሒታትኪ እውን። ስለዚ ነቲ ኣስናን ዘለዎ ማንካ፡ ማንካ ህንጻን ሚክሰርን ብኡብኡ ኣብ ባልዲ ማይ ኣጽርይዮም፡ ቅድሚ ዕረፍትኺ እውን። ዝተረረ ኮላ ኣይወጽእን፡ ዝተረረ ኮላ ዘለዎ ኣስናን ዘለዎ ማንካ ድማ ሕማቕ መስመራት ይገብር። ነቲ ረሳሕ ማይ ኣብ መሕጸቢ ወይ ኣብ ፍሳስ ኣይተፍስስዮ፡ ይድፈን እዩ። እቲ ማይ ናበይ ክፍሰስ ከም ዝኽእል ሕተቲ። ሚክሰር፡ ብክልተ ኢድኪ ሓዝዮ፡ ቀስ ኢልኪ ድማ ኣበግስዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኮላ ሸክላን ጀሶን ቀልጢፎም ይተርሩ፡ ኣብ መሳርሒታትኩም እውን። ስለዚ ነቲ ኣስናን ዘለዎ ማንካ፡ ማንካ ህንጻን ሚክሰርን ብኡብኡ ኣብ ባልዲ ማይ ኣጽርይዎም፡ ቅድሚ ዕረፍትኹም እውን። ዝተረረ ኮላ ኣይወጽእን፡ ዝተረረ ኮላ ዘለዎ ኣስናን ዘለዎ ማንካ ድማ ሕማቕ መስመራት ይገብር። ነቲ ረሳሕ ማይ ኣብ መሕጸቢ ወይ ኣብ ፍሳስ ኣይተፍስስዎ፡ ይድፈን እዩ። እቲ ማይ ናበይ ክፍሰስ ከም ዝኽእል ሕተቱ። ሚክሰር፡ ብክልተ ኢድኩም ሓዝዎ፡ ቀስ ኢልኩም ድማ ኣበግስዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.p': "ነቲ ኣስናን ዘለዎ ማንካ ቁሩብ የጽርዮ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.s': { m: "ግዜ ዕረፍትኻ እዩ። ኣስናን ዘለዎ ማንካኻ ብርሑስ ኮላ መሊኡ እዩ። እንታይ ትገብር?", f: "ግዜ ዕረፍትኺ እዩ። ኣስናን ዘለዎ ማንካኺ ብርሑስ ኮላ መሊኡ እዩ። እንታይ ትገብሪ?", x: "ግዜ ዕረፍትኹም እዩ። ኣስናን ዘለዎ ማንካኹም ብርሑስ ኮላ መሊኡ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o1': { m: "ብማይ ኣጽርዮ፡ ድሕሪኡ ዕረፍትኻ ውሰድ።", f: "ብማይ ኣጽርይዮ፡ ድሕሪኡ ዕረፍትኺ ውሰዲ።", x: "ብማይ ኣጽርይዎ፡ ድሕሪኡ ዕረፍትኹም ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o2': { m: "ግደፎ፡ ድሕሪ ስራሕ ከተጽርዮ ኢኻ።", f: "ግደፍዮ፡ ድሕሪ ስራሕ ከተጽርይዮ ኢኺ።", x: "ግደፍዎ፡ ድሕሪ ስራሕ ከተጽርይዎ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.o3': { m: "ኣብቲ ባልዲ ኮላ ኣእትዎ።", f: "ኣብቲ ባልዲ ኮላ ኣእትውዮ።", x: "ኣብቲ ባልዲ ኮላ ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiletools.w': { m: "ኮላ ሸክላ ኣብ ግዜ ዕረፍትኻ እውን ይተርር። ጽሩይ ኣስናን ዘለዎ ማንካ ጽቡቕ መስመራት ይገብር፡ እቶም ሸክላታት ድማ ጽቡቕ ይጣበቑ። ዝተረረ ኮላ ዘለዎ ማንካ ብዙሕ ስራሕ እዩ፡ ወይ ሓድሽ መሳርሒ።", f: "ኮላ ሸክላ ኣብ ግዜ ዕረፍትኺ እውን ይተርር። ጽሩይ ኣስናን ዘለዎ ማንካ ጽቡቕ መስመራት ይገብር፡ እቶም ሸክላታት ድማ ጽቡቕ ይጣበቑ። ዝተረረ ኮላ ዘለዎ ማንካ ብዙሕ ስራሕ እዩ፡ ወይ ሓድሽ መሳርሒ።", x: "ኮላ ሸክላ ኣብ ግዜ ዕረፍትኹም እውን ይተርር። ጽሩይ ኣስናን ዘለዎ ማንካ ጽቡቕ መስመራት ይገብር፡ እቶም ሸክላታት ድማ ጽቡቕ ይጣበቑ። ዝተረረ ኮላ ዘለዎ ማንካ ብዙሕ ስራሕ እዩ፡ ወይ ሓድሽ መሳርሒ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.tiling': "ሸክላ፡ ኮላን ማእከላይ መስመርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegel': "ሸክላ (ፒያስትረላ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegellijm': "ኮላ ሸክላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelkruisje': "መስቀል ሸክላ (ኣብ መንጎ ሸክላታት ዝቕመጥ ንእሽቶ መስቀል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hartlijn': "ማእከላይ መስመር (ሸክላ ምንጻፍ ካብኡ ይጅመር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegelplaat': "ሰሌዳ ልምምድ ሸክላ (ሸክላ ምንጻፍ ንምልማድ ዝኸውን ሰሌዳ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potlood': "ርሳስ", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.1': "እቲ ኮላ ሸክላ ገና ርሑስ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.2': { m: "ኣብ መንጎ ሸክላታት መስቀል ሸክላ ኣቐምጥ።", f: "ኣብ መንጎ ሸክላታት መስቀል ሸክላ ኣቐምጢ።", x: "ኣብ መንጎ ሸክላታት መስቀል ሸክላ ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.tiling.3': { m: "ቅድም ነቲ ማእከላይ መስመር ብርሳስ ስኣሎ።", f: "ቅድም ነቲ ማእከላይ መስመር ብርሳስ ስኣልዮ።", x: "ቅድም ነቲ ማእከላይ መስመር ብርሳስ ስኣልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.q': "ሸክላ ካበይ እጅምር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling.a': "ኣብ ማእከል፡ ኣብቲ ማእከላይ መስመር።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tiling': { m: "ካብ ማእከላይ መስመር ጀምር፡ ብቑሩብ ኮላ", f: "ካብ ማእከላይ መስመር ጀምሪ፡ ብቑሩብ ኮላ", x: "ካብ ማእከላይ መስመር ጀምሩ፡ ብቑሩብ ኮላ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.b': { m: "ነጻፊ ሸክላ ካብ ኩርናዕ ኣይጅምርን። ቅድም ብርሳስን ሊቨሎን ነቲ ማእከላይ መስመር ትስእሎ፡ ካብኡ ድማ ትጅምር። ሽዑ እቶም ኣብ ክልቲኡ ጫፍ ዘለዉ ዝተቖርጹ ሸክላታት ሓደ ዓቐን ይኾኑ። ኣብ ሓጺር ግዜ ብሸክላ ክትሸፍኖ እትኽእል ኮላ ጥራይ ቀብእ። ነዊሕ ግዜ ዝጸንሐ ኮላ ንቑጽ ቆርበት የውጽእ፡ ሽዑ እቶም ሸክላታት ጽቡቕ ኣይጣበቑን። ኣብ ነፍሲ ወከፍ መራኸቢ መስመራት መስቀል ሸክላ ኣቐምጥ፡ ምእንቲ ኩሎም ጋግታት ማዕረ ክኾኑ። ብተደጋጋሚ ብሊቨሎ ፈትሽ፡ ዝተጠወየ ሸክላ ሕጂ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ከቢድ።", f: "ነጻፊ ሸክላ ካብ ኩርናዕ ኣይጅምርን። ቅድም ብርሳስን ሊቨሎን ነቲ ማእከላይ መስመር ትስእልዮ፡ ካብኡ ድማ ትጅምሪ። ሽዑ እቶም ኣብ ክልቲኡ ጫፍ ዘለዉ ዝተቖርጹ ሸክላታት ሓደ ዓቐን ይኾኑ። ኣብ ሓጺር ግዜ ብሸክላ ክትሸፍንዮ እትኽእሊ ኮላ ጥራይ ቀብኢ። ነዊሕ ግዜ ዝጸንሐ ኮላ ንቑጽ ቆርበት የውጽእ፡ ሽዑ እቶም ሸክላታት ጽቡቕ ኣይጣበቑን። ኣብ ነፍሲ ወከፍ መራኸቢ መስመራት መስቀል ሸክላ ኣቐምጢ፡ ምእንቲ ኩሎም ጋግታት ማዕረ ክኾኑ። ብተደጋጋሚ ብሊቨሎ ፈትሺ፡ ዝተጠወየ ሸክላ ሕጂ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ከቢድ።", x: "ነጻፊ ሸክላ ካብ ኩርናዕ ኣይጅምርን። ቅድም ብርሳስን ሊቨሎን ነቲ ማእከላይ መስመር ትስእልዎ፡ ካብኡ ድማ ትጅምሩ። ሽዑ እቶም ኣብ ክልቲኡ ጫፍ ዘለዉ ዝተቖርጹ ሸክላታት ሓደ ዓቐን ይኾኑ። ኣብ ሓጺር ግዜ ብሸክላ ክትሸፍንዎ እትኽእሉ ኮላ ጥራይ ቀብኡ። ነዊሕ ግዜ ዝጸንሐ ኮላ ንቑጽ ቆርበት የውጽእ፡ ሽዑ እቶም ሸክላታት ጽቡቕ ኣይጣበቑን። ኣብ ነፍሲ ወከፍ መራኸቢ መስመራት መስቀል ሸክላ ኣቐምጡ፡ ምእንቲ ኩሎም ጋግታት ማዕረ ክኾኑ። ብተደጋጋሚ ብሊቨሎ ፈትሹ፡ ዝተጠወየ ሸክላ ሕጂ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ከቢድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.p': "ብሓደ ግዜ ብዙሕ ኮላ ኣይቀብእን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.s': { m: "ድሕሪ ነዊሕ ናይ ተሌፎን ዝርርብ፡ እቲ ኣብ መንደቕ ዘሎ ኮላ ንቑጽ ቆርበት ኣውጺኡ። እንታይ ትገብር?", f: "ድሕሪ ነዊሕ ናይ ተሌፎን ዝርርብ፡ እቲ ኣብ መንደቕ ዘሎ ኮላ ንቑጽ ቆርበት ኣውጺኡ። እንታይ ትገብሪ?", x: "ድሕሪ ነዊሕ ናይ ተሌፎን ዝርርብ፡ እቲ ኣብ መንደቕ ዘሎ ኮላ ንቑጽ ቆርበት ኣውጺኡ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o1': { m: "ብማንካ ኣልግሶ፡ ሓድሽ ኮላ ድማ ቀብእ።", f: "ብማንካ ኣልግስዮ፡ ሓድሽ ኮላ ድማ ቀብኢ።", x: "ብማንካ ኣልግስዎ፡ ሓድሽ ኮላ ድማ ቀብኡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o2': { m: "ዋላ እውን ነቶም ሸክላታት ኣብኡ ጸቕጦም።", f: "ዋላ እውን ነቶም ሸክላታት ኣብኡ ጸቕጥዮም።", x: "ዋላ እውን ነቶም ሸክላታት ኣብኡ ጸቕጥዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.o3': { m: "ብስፖንጅ ኣጠልሎ፡ ቀጽል ድማ።", f: "ብስፖንጅ ኣጠልልዮ፡ ቀጽሊ ድማ።", x: "ብስፖንጅ ኣጠልልዎ፡ ቀጽሉ ድማ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.w': "ንቑጽ ቆርበት ዘለዎ ኮላ ንሸክላ ጽቡቕ ኣይሕዞን። ደሓር እቲ ሸክላ ክፍታሕ ይኽእል፡ ሽዑ እቲ ስራሕ እንደገና ክስራሕ ኣለዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.plaster': "ጀሶ ምልባጥ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stucspaan': "ማንካ ጀሶ (ጀሶ ንምልማጽ ጸፊሕ ናይ ሓጺን ማንካ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplegspaan': "ሰሌዳ ጀሶ (ጀሶ ኣብ ልዕሊኡ ዝሕዝ ጸፊሕ ሰሌዳ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spackmes': "ስፓቱላ (ገፊሕን ጸፊሕን ካራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rei': "ነዊሕ ትኽ በትሪ፡ ሪጋ (ጀሶ ማዕረ ንምግባር ዝኸውን ነዊሕን ትኽ ዝበለን በትሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sponsspaan': "ማንካ ስፖንጅ (ስፖንጅ ዘለዎ ማንካ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoekprofiel': "ሓጺን ኩርናዕ (ኩርናዕ ትኽ ንክኸውን ዝግበር ቀጢን ሓጺን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.1': { m: "ቅድም ነቲ ሓጺን ኩርናዕ ኣብ ኩርናዕ ኣቐምጦ።", f: "ቅድም ነቲ ሓጺን ኩርናዕ ኣብ ኩርናዕ ኣቐምጥዮ።", x: "ቅድም ነቲ ሓጺን ኩርናዕ ኣብ ኩርናዕ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.2': { m: "ነቲ መንደቕ ብማንካ ጀሶ ልሙጽ ግበሮ።", f: "ነቲ መንደቕ ብማንካ ጀሶ ልሙጽ ግበርዮ።", x: "ነቲ መንደቕ ብማንካ ጀሶ ልሙጽ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.plaster.3': { m: "ነቲ ነዊሕ ትኽ በትሪ ኣብ ልዕሊ መንደቕ ስሓቦ።", f: "ነቲ ነዊሕ ትኽ በትሪ ኣብ ልዕሊ መንደቕ ስሓብዮ።", x: "ነቲ ነዊሕ ትኽ በትሪ ኣብ ልዕሊ መንደቕ ስሓብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.q': "እቲ መንደቕ ነቒጹ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster.a': { m: "ኣይፋል፡ ሓንቲ መዓልቲ ተወሳኺ ተጸበ።", f: "ኣይፋል፡ ሓንቲ መዓልቲ ተወሳኺ ተጸበዪ።", x: "ኣይፋል፡ ሓንቲ መዓልቲ ተወሳኺ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plaster': "ጀሶ ንምንቃጽ ግዜ የድልዮ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.b': { m: "ሓድሽ ጀሶ ንነዊሕ ግዜ ርሑስ ይጸንሕ። ርሑስ መንደቕ ካብ ንቑጽ መንደቕ ዝያዳ ጸሊም ይመስል። ቀባኣይ ሕብሪ ክጅምር ዝኽእል እቲ መንደቕ ኣብ ኩሉ ቦታ ምስ ነቐጸ ጥራይ እዩ፡ እዚ ድማ መዓልታት ወይ ሰሙናት ክወስድ ይኽእል። ብመውዓዪ ቀልጢፍካ ኣይተንቅጾ፡ ሽዑ እቲ ጀሶ ክስንጠቕ ይኽእል። ሓደ ሰብ ኣዝዩ ኣቐዲሙ ሕብሪ ክቐብእ ይደሊ ድዩ? እቲ መንደቕ ገና ከም ዘይነቐጸ ንገር። ቅድሚ ምጅማርካ ድማ፡ ነቲ መሬት፡ መሳኹትን ሶኬታት ኤሌክትሪክን ሸፍን፡ ጀሶ ምውጻእ ከቢድ እዩ።", f: "ሓድሽ ጀሶ ንነዊሕ ግዜ ርሑስ ይጸንሕ። ርሑስ መንደቕ ካብ ንቑጽ መንደቕ ዝያዳ ጸሊም ይመስል። ቀባኣይ ሕብሪ ክጅምር ዝኽእል እቲ መንደቕ ኣብ ኩሉ ቦታ ምስ ነቐጸ ጥራይ እዩ፡ እዚ ድማ መዓልታት ወይ ሰሙናት ክወስድ ይኽእል። ብመውዓዪ ቀልጢፍኪ ኣይተንቅጽዮ፡ ሽዑ እቲ ጀሶ ክስንጠቕ ይኽእል። ሓደ ሰብ ኣዝዩ ኣቐዲሙ ሕብሪ ክቐብእ ይደሊ ድዩ? እቲ መንደቕ ገና ከም ዘይነቐጸ ንገሪ። ቅድሚ ምጅማርኪ ድማ፡ ነቲ መሬት፡ መሳኹትን ሶኬታት ኤሌክትሪክን ሸፍኒ፡ ጀሶ ምውጻእ ከቢድ እዩ።", x: "ሓድሽ ጀሶ ንነዊሕ ግዜ ርሑስ ይጸንሕ። ርሑስ መንደቕ ካብ ንቑጽ መንደቕ ዝያዳ ጸሊም ይመስል። ቀባኣይ ሕብሪ ክጅምር ዝኽእል እቲ መንደቕ ኣብ ኩሉ ቦታ ምስ ነቐጸ ጥራይ እዩ፡ እዚ ድማ መዓልታት ወይ ሰሙናት ክወስድ ይኽእል። ብመውዓዪ ቀልጢፍኩም ኣይተንቅጽዎ፡ ሽዑ እቲ ጀሶ ክስንጠቕ ይኽእል። ሓደ ሰብ ኣዝዩ ኣቐዲሙ ሕብሪ ክቐብእ ይደሊ ድዩ? እቲ መንደቕ ገና ከም ዘይነቐጸ ንገሩ። ቅድሚ ምጅማርኩም ድማ፡ ነቲ መሬት፡ መሳኹትን ሶኬታት ኤሌክትሪክን ሸፍኑ፡ ጀሶ ምውጻእ ከቢድ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.p': { m: "እቲ መንደቕ ገና ርሑስ እዩ። ገና ሕብሪ ክትቐብእ ኣይትኽእልን ኢኻ።", f: "እቲ መንደቕ ገና ርሑስ እዩ። ገና ሕብሪ ክትቐብኢ ኣይትኽእሊን ኢኺ።", x: "እቲ መንደቕ ገና ርሑስ እዩ። ገና ሕብሪ ክትቐብኡ ኣይትኽእሉን ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.s': { m: "ቀባኣይ ሕብሪ ጽባሕ ክጅምር ይደሊ። እቲ ሓድሽ ጀሶ ገና ጸለምቲ ቦታታት ኣለዎ። እንታይ ትገብር?", f: "ቀባኣይ ሕብሪ ጽባሕ ክጅምር ይደሊ። እቲ ሓድሽ ጀሶ ገና ጸለምቲ ቦታታት ኣለዎ። እንታይ ትገብሪ?", x: "ቀባኣይ ሕብሪ ጽባሕ ክጅምር ይደሊ። እቲ ሓድሽ ጀሶ ገና ጸለምቲ ቦታታት ኣለዎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o1': { m: "ንቀባኣይ ሕብሪ ንገሮ፡ እቲ መንደቕ ገና ኣይነቐጸን።", f: "ንቀባኣይ ሕብሪ ንገርዮ፡ እቲ መንደቕ ገና ኣይነቐጸን።", x: "ንቀባኣይ ሕብሪ ንገርዎ፡ እቲ መንደቕ ገና ኣይነቐጸን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o2': { m: "ሎሚ ምሸት ኣብ ቅድሚኡ መውዓዪ ኣቐምጥ።", f: "ሎሚ ምሸት ኣብ ቅድሚኡ መውዓዪ ኣቐምጢ።", x: "ሎሚ ምሸት ኣብ ቅድሚኡ መውዓዪ ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.o3': { m: "ዋላ ሓንቲ ኣይትበል፡ ቀባኣይ ሕብሪ ባዕሉ ክርእዮ እዩ።", f: "ዋላ ሓንቲ ኣይትበሊ፡ ቀባኣይ ሕብሪ ባዕሉ ክርእዮ እዩ።", x: "ዋላ ሓንቲ ኣይትበሉ፡ ቀባኣይ ሕብሪ ባዕሉ ክርእዮ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.w': "ጸለምቲ ቦታታት እቲ ጀሶ ገና ርሑስ ምዃኑ የርእዩ። ኣብ ርሑስ መንደቕ ዝተቐብአ ሕብሪ ክፍታሕ ይኽእል፡ መውዓዪ ድማ ስንጥቓት ክገብር ይኽእል። ምጽባይ ካብ እንደገና ምስራሕ ዝሓሰረ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint and l.prep (u.afbouw), "Metselen, hout en vastmaken" (u.ruwbouw), three lessons of Rekenen (u.numbers) and "Machines en gereedschap" (u.machines), 20-21 November 2026.
    'u.ruwbouw': "ጡብ ምህናጽ፡ ዕንጨይትን ምትኻልን", // nieuw, nalezen // nagelezen AI 28 nov
    'u.machines': "ማሽናትን መሳርሒታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shapes': "ቅርጽታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierkant': "ርቡዕ (ስኩዌር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rechthoek': "ነዊሕ ርቡዕ (ሬክታንግል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.driehoek': "ሰለስተ መኣዝን (ትሪያንግል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cirkel': "ክቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kubus': "ኩብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balk': "ብሎክ፡ ኩቦይድ (ነዊሕ ቅርጺ ሳጹን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.1': "እቲ ሸክላ ርቡዕ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.2': "እዚ ክፍሊ ነዊሕ ርቡዕ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shapes.3': "ጡብ ቅርጺ ኩቦይድ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.q': "ርቡዕ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes.a': "ኣይፋል፡ ነዊሕ ርቡዕ እዩ። ንውሓቱ ካብ ግፍሑ ይበዝሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shapes': { m: "ነዊሕ ርቡዕ ብክልተ ሰጋሪ መስመራት ፈትሽ", f: "ነዊሕ ርቡዕ ብክልተ ሰጋሪ መስመራት ፈትሺ", x: "ነዊሕ ርቡዕ ብክልተ ሰጋሪ መስመራት ፈትሹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.b': { m: "ክፍሊ፡ መሬት ወይ ፍሬም ብዙሕ ግዜ ነዊሕ ርቡዕ እዩ። ግን እቶም ኩርናዓት ብሓቂ ቀጥታውያን ድዮም? ቀሊል ምፍታሽ ኣሎ። ካብ ሓደ ኩርናዕ ክሳብ እቲ ኣብ ቅድሚኡ ዘሎ ኩርናዕ ዓቅን። ድሕሪኡ ኣብ መንጎ እቶም ካልኦት ክልተ ኩርናዓት ዓቅን። እቶም ክልተ ንውሓት ማዕረ ድዮም? ሽዑ እቶም ኩርናዓት ቅኑዓት እዮም። ማዕረ ኣይኮኑን? ሽዑ እቲ ቅርጺ ቁሩብ ዘምበለ እዩ፡ ሸክላታት ወይ መሬት ድማ ጽቡቕ ኣይኣትዉን። ቅድሚ ምጅማርካ ንተቖጻጻሪኻ ንገሮ።", f: "ክፍሊ፡ መሬት ወይ ፍሬም ብዙሕ ግዜ ነዊሕ ርቡዕ እዩ። ግን እቶም ኩርናዓት ብሓቂ ቀጥታውያን ድዮም? ቀሊል ምፍታሽ ኣሎ። ካብ ሓደ ኩርናዕ ክሳብ እቲ ኣብ ቅድሚኡ ዘሎ ኩርናዕ ዓቅኒ። ድሕሪኡ ኣብ መንጎ እቶም ካልኦት ክልተ ኩርናዓት ዓቅኒ። እቶም ክልተ ንውሓት ማዕረ ድዮም? ሽዑ እቶም ኩርናዓት ቅኑዓት እዮም። ማዕረ ኣይኮኑን? ሽዑ እቲ ቅርጺ ቁሩብ ዘምበለ እዩ፡ ሸክላታት ወይ መሬት ድማ ጽቡቕ ኣይኣትዉን። ቅድሚ ምጅማርኪ ንተቖጻጻሪኺ ንገርዮ።", x: "ክፍሊ፡ መሬት ወይ ፍሬም ብዙሕ ግዜ ነዊሕ ርቡዕ እዩ። ግን እቶም ኩርናዓት ብሓቂ ቀጥታውያን ድዮም? ቀሊል ምፍታሽ ኣሎ። ካብ ሓደ ኩርናዕ ክሳብ እቲ ኣብ ቅድሚኡ ዘሎ ኩርናዕ ዓቅኑ። ድሕሪኡ ኣብ መንጎ እቶም ካልኦት ክልተ ኩርናዓት ዓቅኑ። እቶም ክልተ ንውሓት ማዕረ ድዮም? ሽዑ እቶም ኩርናዓት ቅኑዓት እዮም። ማዕረ ኣይኮኑን? ሽዑ እቲ ቅርጺ ቁሩብ ዘምበለ እዩ፡ ሸክላታት ወይ መሬት ድማ ጽቡቕ ኣይኣትዉን። ቅድሚ ምጅማርኩም ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.p': "እዞም ክልተ መለክዒታት ማዕረ ኣይኮኑን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.s': { m: "መሬት ካብ ኩርናዕ ናብ ኩርናዕ፡ ብክልቲኡ ኣንፈት ትዕቅኖ። ሓደ ይነውሕ። እንታይ ትገብር?", f: "መሬት ካብ ኩርናዕ ናብ ኩርናዕ፡ ብክልቲኡ ኣንፈት ትዕቅንዮ። ሓደ ይነውሕ። እንታይ ትገብሪ?", x: "መሬት ካብ ኩርናዕ ናብ ኩርናዕ፡ ብክልቲኡ ኣንፈት ትዕቅንዎ። ሓደ ይነውሕ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o1': { m: "ቅድሚ ምጅማርካ ንተቖጻጻሪኻ ንገሮ።", f: "ቅድሚ ምጅማርኪ ንተቖጻጻሪኺ ንገርዮ።", x: "ቅድሚ ምጅማርኩም ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o2': { m: "ካብ ሓደ ኩርናዕ ጀምር፡ ደሓን ክኸውን እዩ።", f: "ካብ ሓደ ኩርናዕ ጀምሪ፡ ደሓን ክኸውን እዩ።", x: "ካብ ሓደ ኩርናዕ ጀምሩ፡ ደሓን ክኸውን እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.o3': { m: "ሓደ ጎድኒ ጥራይ ደጊምካ ዓቅን።", f: "ሓደ ጎድኒ ጥራይ ደጊምኪ ዓቅኒ።", x: "ሓደ ጎድኒ ጥራይ ደጊምኩም ዓቅኑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.shapes.w': "ክልተ ዝተፈላለየ ንውሓት እቶም ኩርናዓት ቀጥታውያን ከም ዘይኮኑ የርኢ። ሽዑ ሸክላታት ወይ ሰሌዳታት ኣይኣትዉን። ቅድሚ ምጅማር እዚ ምፍላጥ ይሓይሽ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.angles': "መኣዝናትን ክቢ ቅርጽታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoek': "መኣዝን (ኩርናዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graad': "ዲግሪ (°)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geodriehoek': "ሰለስተ መኣዝን መስመሪ ምስ መዐቀኒ መኣዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boog': "ቀስቲ፡ ዝተጠውየ መስመር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cilinder': "ሲሊንደር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parallellogram': "ፓራለሎግራም", // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.1': "እዚ መኣዝን ተስዓ ዲግሪ እዩ።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.angles.2': { m: "ነቲ መኣዝን ብሰለስተ መኣዝን መስመሪ ዓቅኖ።", f: "ነቲ መኣዝን ብሰለስተ መኣዝን መስመሪ ዓቅንዮ።", x: "ነቲ መኣዝን ብሰለስተ መኣዝን መስመሪ ዓቅንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.angles.3': "እቲ ቱቦ ቅርጺ ሲሊንደር ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.q': "እዚ መኣዝን ክንደይ ዲግሪ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles.a': "ኣርብዓን ሓሙሽተን። ፈረቓ ቀጥታዊ መኣዝን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.angles': { m: "ዓቢ ኩርናዕ ብ3፡ 4ን 5ን ፈትሽ", f: "ዓቢ ኩርናዕ ብ3፡ 4ን 5ን ፈትሺ", x: "ዓቢ ኩርናዕ ብ3፡ 4ን 5ን ፈትሹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.b': { m: "ኣብ ቦታ ህንጻ ብዙሕ ግዜ ቀጥታዊ መኣዝን ትፈትሽ፡ መንደቕ ኣብ ልዕሊ መሬት፡ ኩርናዕ ክፍሊ። ንእሽቶ ኩርናዕ ብስኳድራ ወይ ብሰለስተ መኣዝን መስመሪ ትፈትሾ። ንዓቢ ኩርናዕ ጥንታዊ ብልሓት ኣሎ። ኣብ ሓደ ጎድኒ 3 ሜትሮ፡ ኣብቲ ካልእ ጎድኒ ድማ 4 ሜትሮ ዓቅን፡ ኣብ ክልቲኡ ድማ ምልክት ግበር። ካብ ምልክት ክሳብ ምልክት ልክዕ 5 ሜትሮ ድዩ? ሽዑ እቲ መኣዝን 90 ዲግሪ እዩ። ብንኣሽቱ እውን ይሰርሕ፡ 30፡ 40ን 50ን ሴንቲሜተር።", f: "ኣብ ቦታ ህንጻ ብዙሕ ግዜ ቀጥታዊ መኣዝን ትፈትሺ፡ መንደቕ ኣብ ልዕሊ መሬት፡ ኩርናዕ ክፍሊ። ንእሽቶ ኩርናዕ ብስኳድራ ወይ ብሰለስተ መኣዝን መስመሪ ትፈትሽዮ። ንዓቢ ኩርናዕ ጥንታዊ ብልሓት ኣሎ። ኣብ ሓደ ጎድኒ 3 ሜትሮ፡ ኣብቲ ካልእ ጎድኒ ድማ 4 ሜትሮ ዓቅኒ፡ ኣብ ክልቲኡ ድማ ምልክት ግበሪ። ካብ ምልክት ክሳብ ምልክት ልክዕ 5 ሜትሮ ድዩ? ሽዑ እቲ መኣዝን 90 ዲግሪ እዩ። ብንኣሽቱ እውን ይሰርሕ፡ 30፡ 40ን 50ን ሴንቲሜተር።", x: "ኣብ ቦታ ህንጻ ብዙሕ ግዜ ቀጥታዊ መኣዝን ትፈትሹ፡ መንደቕ ኣብ ልዕሊ መሬት፡ ኩርናዕ ክፍሊ። ንእሽቶ ኩርናዕ ብስኳድራ ወይ ብሰለስተ መኣዝን መስመሪ ትፈትሽዎ። ንዓቢ ኩርናዕ ጥንታዊ ብልሓት ኣሎ። ኣብ ሓደ ጎድኒ 3 ሜትሮ፡ ኣብቲ ካልእ ጎድኒ ድማ 4 ሜትሮ ዓቅኑ፡ ኣብ ክልቲኡ ድማ ምልክት ግበሩ። ካብ ምልክት ክሳብ ምልክት ልክዕ 5 ሜትሮ ድዩ? ሽዑ እቲ መኣዝን 90 ዲግሪ እዩ። ብንኣሽቱ እውን ይሰርሕ፡ 30፡ 40ን 50ን ሴንቲሜተር።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.p': "እዚ ኩርናዕ ቀጥታዊ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.s': { m: "ዓቢ ኩርናዕ ናይ ሓድሽ መንደቕ ክትፈትሽ ኣለካ። ስኳድራኻ ኣዝዩ ንእሽቶ እዩ። እንታይ ትገብር?", f: "ዓቢ ኩርናዕ ናይ ሓድሽ መንደቕ ክትፈትሺ ኣለኪ። ስኳድራኺ ኣዝዩ ንእሽቶ እዩ። እንታይ ትገብሪ?", x: "ዓቢ ኩርናዕ ናይ ሓድሽ መንደቕ ክትፈትሹ ኣለኩም። ስኳድራኹም ኣዝዩ ንእሽቶ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o1': { m: "3፡ 4ን 5ን ሜትሮ ዓቅን።", f: "3፡ 4ን 5ን ሜትሮ ዓቅኒ።", x: "3፡ 4ን 5ን ሜትሮ ዓቅኑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o2': { m: "ካብ ርሑቕ ርአዮ።", f: "ካብ ርሑቕ ርኣይዮ።", x: "ካብ ርሑቕ ርኣይዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.o3': { m: "ዋላ እውን ብቲ ንእሽቶ ስኳድራ ፈትሽ።", f: "ዋላ እውን ብቲ ንእሽቶ ስኳድራ ፈትሺ።", x: "ዋላ እውን ብቲ ንእሽቶ ስኳድራ ፈትሹ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.w': { m: "ብ3፡ 4ን 5ን፡ ብዝጥቕለል ሜትሮ ጥራይ፡ ዓቢ ኩርናዕ ልክዕ ክትፈትሽ ትኽእል ኢኻ። ብዓይኒ፡ ኩርናዕ ቅኑዕ ክመስል ይኽእል፡ ግን ጌጋ ክኸውን ይኽእል።", f: "ብ3፡ 4ን 5ን፡ ብዝጥቕለል ሜትሮ ጥራይ፡ ዓቢ ኩርናዕ ልክዕ ክትፈትሺ ትኽእሊ ኢኺ። ብዓይኒ፡ ኩርናዕ ቅኑዕ ክመስል ይኽእል፡ ግን ጌጋ ክኸውን ይኽእል።", x: "ብ3፡ 4ን 5ን፡ ብዝጥቕለል ሜትሮ ጥራይ፡ ዓቢ ኩርናዕ ልክዕ ክትፈትሹ ትኽእሉ ኢኹም። ብዓይኒ፡ ኩርናዕ ቅኑዕ ክመስል ይኽእል፡ ግን ጌጋ ክኸውን ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.size': "ንውሓት፡ ስፍሓትን ትሕዝቶን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lengte': "ንውሓት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.breedte': "ግፍሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoogte': "ቁመት፡ ብራኸ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppervlakte': "ስፍሓት (ንውሓት ብግፍሒ ተባዚሑ፡ ብትርብዒት ሜትሮ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhoud': "ትሕዝቶ (ንውሓት ብግፍሒ ብቑመት ተባዚሑ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.centimeter': "ሴንቲሜተር", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.1': "ስፍሓት፡ ንውሓት ብግፍሒ ተባዚሑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.2': "ትሕዝቶ፡ ንውሓት ብግፍሒ ብቑመት ተባዚሑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.size.3': "ዓሰርተ ሚሊሜተር ሓደ ሴንቲሜተር እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.q': "እቲ መሬት ክንደይ ትርብዒት ሜትሮ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size.a': "ኣርባዕተ ብሓሙሽተ ሜትሮ፡ ስለዚ ዕስራ ትርብዒት ሜትሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.size': { m: "ዘድልየካ ሕሰብ፡ ድሕሪኡ ቁሩብ ወስኽ", f: "ዘድልየኪ ሕሰቢ፡ ድሕሪኡ ቁሩብ ወስኺ", x: "ዘድልየኩም ሕሰቡ፡ ድሕሪኡ ቁሩብ ወስኹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.b': { m: "ክንደይ ሸክላ፡ ክንደይ ሕብሪ፡ ክንደይ ሑጻ? ብስፍሓት ወይ ብትሕዝቶ ትሓስቦ። ስፍሓት፡ ንውሓት ብግፍሒ ተባዚሑ፡ ብትርብዒት ሜትሮ። ትሕዝቶ፡ ንውሓት ብግፍሒ ብቑመት ተባዚሑ፡ ብኩብ ሜትሮ። ኩሉ ብሓደ መለክዒ ዓቅን፡ ኩሉ ብሜትሮ፡ ወይ ኩሉ ብሴንቲሜተር። ነቶም መለክዒታት ጽሓፎም፡ ኣብ ርእስኻ ኣይትሓዞም። ድሕሪኡ ቁሩብ ተወሳኺ ወስኽ፡ ንዝቑረጹ ቁራጻትን ንጌጋታትን። ርግጸኛ ኣይኮንካን? ንብጻይ ስራሕካ ሕሳብካ ክፈትሾ ሕተት።", f: "ክንደይ ሸክላ፡ ክንደይ ሕብሪ፡ ክንደይ ሑጻ? ብስፍሓት ወይ ብትሕዝቶ ትሓስብዮ። ስፍሓት፡ ንውሓት ብግፍሒ ተባዚሑ፡ ብትርብዒት ሜትሮ። ትሕዝቶ፡ ንውሓት ብግፍሒ ብቑመት ተባዚሑ፡ ብኩብ ሜትሮ። ኩሉ ብሓደ መለክዒ ዓቅኒ፡ ኩሉ ብሜትሮ፡ ወይ ኩሉ ብሴንቲሜተር። ነቶም መለክዒታት ጽሓፍዮም፡ ኣብ ርእስኺ ኣይትሓዝዮም። ድሕሪኡ ቁሩብ ተወሳኺ ወስኺ፡ ንዝቑረጹ ቁራጻትን ንጌጋታትን። ርግጸኛ ኣይኮንክን? ንብጻይ ስራሕኪ ሕሳብኪ ክፈትሾ ሕተቲ።", x: "ክንደይ ሸክላ፡ ክንደይ ሕብሪ፡ ክንደይ ሑጻ? ብስፍሓት ወይ ብትሕዝቶ ትሓስብዎ። ስፍሓት፡ ንውሓት ብግፍሒ ተባዚሑ፡ ብትርብዒት ሜትሮ። ትሕዝቶ፡ ንውሓት ብግፍሒ ብቑመት ተባዚሑ፡ ብኩብ ሜትሮ። ኩሉ ብሓደ መለክዒ ዓቅኑ፡ ኩሉ ብሜትሮ፡ ወይ ኩሉ ብሴንቲሜተር። ነቶም መለክዒታት ጽሓፍዎም፡ ኣብ ርእስኹም ኣይትሓዝዎም። ድሕሪኡ ቁሩብ ተወሳኺ ወስኹ፡ ንዝቑረጹ ቁራጻትን ንጌጋታትን። ርግጸኛ ኣይኮንኩምን? ንብጻይ ስራሕኩም ሕሳብኩም ክፈትሾ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.p': "ነቶም መለክዒታት እጽሕፎም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.s': { m: "ነቲ መሬት ዓቂንካዮ። ሎሚ ነቶም ሸክላታት ክትእዝዞም ኣለካ። እንታይ ትገብር?", f: "ነቲ መሬት ዓቂንክዮ። ሎሚ ነቶም ሸክላታት ክትእዝዝዮም ኣለኪ። እንታይ ትገብሪ?", x: "ነቲ መሬት ዓቂንኩምዎ። ሎሚ ነቶም ሸክላታት ክትእዝዝዎም ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o1': { m: "ነቲ ስፍሓት ሕሰቦ፡ ቁሩብ ድማ ወስኽ።", f: "ነቲ ስፍሓት ሕሰብዮ፡ ቁሩብ ድማ ወስኺ።", x: "ነቲ ስፍሓት ሕሰብዎ፡ ቁሩብ ድማ ወስኹ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o2': { m: "ነቲ ስፍሓት ጥራይ ኣዝዝ፡ ሓደ ሸክላ እውን ኣይትወስኽ።", f: "ነቲ ስፍሓት ጥራይ ኣዝዚ፡ ሓደ ሸክላ እውን ኣይትወስኺ።", x: "ነቲ ስፍሓት ጥራይ ኣዝዙ፡ ሓደ ሸክላ እውን ኣይትወስኹ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.o3': { m: "ግመት፡ ነቲ መሬት ርኢኻዮ ኢኻ።", f: "ግመቲ፡ ነቲ መሬት ርኢኽዮ ኢኺ።", x: "ግመቱ፡ ነቲ መሬት ርኢኹምዎ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.w': { m: "ኩሉ ግዜ ገለ ሸክላታት ትቖርጽ፡ ገለ ድማ ይስበሩ። ብቑሩብ ተወሳኺ፡ ኣብ ፍርቂ ደው ኢልካ እንደገና ክትእዝዝ ኣየድልየካን።", f: "ኩሉ ግዜ ገለ ሸክላታት ትቖርጺ፡ ገለ ድማ ይስበሩ። ብቑሩብ ተወሳኺ፡ ኣብ ፍርቂ ደው ኢልኪ እንደገና ክትእዝዚ ኣየድልየኪን።", x: "ኩሉ ግዜ ገለ ሸክላታት ትቖርጹ፡ ገለ ድማ ይስበሩ። ብቑሩብ ተወሳኺ፡ ኣብ ፍርቂ ደው ኢልኩም እንደገና ክትእዝዙ ኣየድልየኩምን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.paint': "ሕብሪ ምቕባእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verf': "ሕብሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwast': "ብርሽ ሕብሪ (ገፊሕ ብርሽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.penseel': "ንእሽቶ ብርሽ (ንኩርናዓትን ጫፋትን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.roerstok': "በትሪ መሕወሲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tape': "ተፕ ሕብሪ (ማስኪንግ ተፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strijkvaatje': "ንእሽቶ ጣኒካ ሕብሪ (ኣብ ግዜ ምቕባእ ብኢድ ዝሓዝ ንእሽቶ ጣኒካ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.1': { m: "ቅድም ነቲ ሕብሪ ጽቡቕ ገይርካ ሕወሶ።", f: "ቅድም ነቲ ሕብሪ ጽቡቕ ገይርኪ ሕወስዮ።", x: "ቅድም ነቲ ሕብሪ ጽቡቕ ገይርኩም ሕወስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.2': { m: "ነቲ ጫፍ ብተፕ ሸፍኖ።", f: "ነቲ ጫፍ ብተፕ ሸፍንዮ።", x: "ነቲ ጫፍ ብተፕ ሸፍንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.paint.3': { m: "ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበር።", f: "ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበሪ።", x: "ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.q': "ኣየናይ ብርሽ ክወስድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint.a': "እቲ ገፊሕ ንመንደቕ፡ እቲ ንእሽቶ ብርሽ ድማ ንኩርናዓት።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.paint': { m: "ጽቡቕ ሕወስ፡ ካብ ላዕሊ ናብ ታሕቲ ድማ ቀብእ", f: "ጽቡቕ ሕወሲ፡ ካብ ላዕሊ ናብ ታሕቲ ድማ ቀብኢ", x: "ጽቡቕ ሕወሱ፡ ካብ ላዕሊ ናብ ታሕቲ ድማ ቀብኡ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.b': { m: "ንገለ ግዜ ብዘይ ምንቅስቓስ ዝጸንሐ ሕብሪ ኣብ ታሕቲ ጣኒካ ረጒድ ይኸውን። ስለዚ ቅድም ብበትሪ መሕወሲ ጽቡቕ ገይርካ ሕወሶ፡ ክሳብ እቲ ሕብሪ ኣብ ኩሉ ቦታ ሓደ ዝኸውን። ካብቲ ዓቢ ጣኒካ ኣይትቀብእ፡ ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበር፡ ነቲ ዓቢ ጣኒካ ድማ ተመሊስካ ዕጸዎ። ሽዑ እቲ ሕብሪ ጽቡቕ ይጸንሕ። ካብ ላዕሊ ናብ ታሕቲ ቀብእ፡ ምእንቲ ዝንጠባት ኣብ ርሑስ ሕብሪ ክወድቑ፡ ገና ክተልግሶም ድማ ክትክእል። ንመንደቕ እቲ ገፊሕ ብርሽ፡ ንኩርናዓት ድማ እቲ ንእሽቶ ብርሽ ተጠቐም። ኣብ መወዳእታ ነቶም ብርሻት ብኡብኡ ኣጽርዮም።", f: "ንገለ ግዜ ብዘይ ምንቅስቓስ ዝጸንሐ ሕብሪ ኣብ ታሕቲ ጣኒካ ረጒድ ይኸውን። ስለዚ ቅድም ብበትሪ መሕወሲ ጽቡቕ ገይርኪ ሕወስዮ፡ ክሳብ እቲ ሕብሪ ኣብ ኩሉ ቦታ ሓደ ዝኸውን። ካብቲ ዓቢ ጣኒካ ኣይትቀብኢ፡ ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበሪ፡ ነቲ ዓቢ ጣኒካ ድማ ተመሊስኪ ዕጸውዮ። ሽዑ እቲ ሕብሪ ጽቡቕ ይጸንሕ። ካብ ላዕሊ ናብ ታሕቲ ቀብኢ፡ ምእንቲ ዝንጠባት ኣብ ርሑስ ሕብሪ ክወድቑ፡ ገና ክተልግስዮም ድማ ክትክእሊ። ንመንደቕ እቲ ገፊሕ ብርሽ፡ ንኩርናዓት ድማ እቲ ንእሽቶ ብርሽ ተጠቐሚ። ኣብ መወዳእታ ነቶም ብርሻት ብኡብኡ ኣጽርይዮም።", x: "ንገለ ግዜ ብዘይ ምንቅስቓስ ዝጸንሐ ሕብሪ ኣብ ታሕቲ ጣኒካ ረጒድ ይኸውን። ስለዚ ቅድም ብበትሪ መሕወሲ ጽቡቕ ገይርኩም ሕወስዎ፡ ክሳብ እቲ ሕብሪ ኣብ ኩሉ ቦታ ሓደ ዝኸውን። ካብቲ ዓቢ ጣኒካ ኣይትቀብኡ፡ ኣብቲ ንእሽቶ ጣኒካ ቁሩብ ሕብሪ ግበሩ፡ ነቲ ዓቢ ጣኒካ ድማ ተመሊስኩም ዕጸውዎ። ሽዑ እቲ ሕብሪ ጽቡቕ ይጸንሕ። ካብ ላዕሊ ናብ ታሕቲ ቀብኡ፡ ምእንቲ ዝንጠባት ኣብ ርሑስ ሕብሪ ክወድቑ፡ ገና ክተልግስዎም ድማ ክትክእሉ። ንመንደቕ እቲ ገፊሕ ብርሽ፡ ንኩርናዓት ድማ እቲ ንእሽቶ ብርሽ ተጠቐሙ። ኣብ መወዳእታ ነቶም ብርሻት ብኡብኡ ኣጽርይዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.p': "ቅድም ነቲ ሕብሪ ጽቡቕ ገይረ እሕውሶ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.s': { m: "ኣረጊት ጣኒካ ሕብሪ ትኸፍት። ኣብ ላዕሊ ቀጢን እዩ፡ ኣብ ታሕቲ ድማ ረጒድ። እንታይ ትገብር?", f: "ኣረጊት ጣኒካ ሕብሪ ትኸፍቲ። ኣብ ላዕሊ ቀጢን እዩ፡ ኣብ ታሕቲ ድማ ረጒድ። እንታይ ትገብሪ?", x: "ኣረጊት ጣኒካ ሕብሪ ትኸፍቱ። ኣብ ላዕሊ ቀጢን እዩ፡ ኣብ ታሕቲ ድማ ረጒድ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o1': { m: "ቅድም ብበትሪ ጽቡቕ ገይርካ ሕወሶ።", f: "ቅድም ብበትሪ ጽቡቕ ገይርኪ ሕወስዮ።", x: "ቅድም ብበትሪ ጽቡቕ ገይርኩም ሕወስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o2': { m: "በቲ ኣብ ላዕሊ ዘሎ ቀጢን ሕብሪ ቀብእ።", f: "በቲ ኣብ ላዕሊ ዘሎ ቀጢን ሕብሪ ቀብኢ።", x: "በቲ ኣብ ላዕሊ ዘሎ ቀጢን ሕብሪ ቀብኡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.o3': { m: "ኣብ ኩሉ ቦታ ክሳብ ዝቐጥን ማይ ወስኽ።", f: "ኣብ ኩሉ ቦታ ክሳብ ዝቐጥን ማይ ወስኺ።", x: "ኣብ ኩሉ ቦታ ክሳብ ዝቐጥን ማይ ወስኹ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.w': "ገለ ክፋል ናይቲ ሕብሪ ኣብ ታሕቲ ጣኒካ ኣሎ። ብዘይ ምሕዋስ፡ ኣብቲ መንደቕ ነጠብጣባትን መስመራትን ይርከቡ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.prep': "ንምቕባእ ምድላው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plamuurmes': "ካራ ስቱኮ (ጉድጓዳት ንምምላእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuurpapier': "ወረቐት መሞረዲ (ካርታ ቬትራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verfkrabber': "መፋሓቕ ሕብሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoffertje': "ንእሽቶ መጥረጊ (ሓመድ ንምጽራግ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuren': "ምምራድ፡ ብወረቐት መሞረዲ ምልማጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afplakken': "ብተፕ ምሽፋን (ጫፍ ብተፕ ምሽፋን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.1': { m: "ቅድም ነቲ ኣረጊት ሕብሪ ፍሓቖ።", f: "ቅድም ነቲ ኣረጊት ሕብሪ ፍሓቕዮ።", x: "ቅድም ነቲ ኣረጊት ሕብሪ ፍሓቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.2': { m: "ነቲ ዕንጨይቲ ምረዶ፡ ልሙጽ ግበሮ።", f: "ነቲ ዕንጨይቲ ምረድዮ፡ ልሙጽ ግበርዮ።", x: "ነቲ ዕንጨይቲ ምረድዎ፡ ልሙጽ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.prep.3': { m: "ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረጎ።", f: "ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረግዮ።", x: "ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረግዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.q': "ሕጂ ክቕብእ ይፍቀደኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep.a': "ኣይፋል፡ ቅድም ምምራድን ነቲ ጉድጓድ ምምላእን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.prep': "ጽቡቕ ምቕባእ ቅድሚ ሕብሪ ይጅምር", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.b': { m: "ሕብሪ ኣብ ረሳሕ፡ ሓመድ ወይ ልሕሉሕ ኣረጊት ሕብሪ ጽቡቕ ኣይጣበቕን። ስለዚ ቅድም ነቲ ልሕሉሕ ሕብሪ ብመፋሓቕ ሕብሪ ፍሓቖ። ጉድጓዳት ብስቱኮን ብካራ ስቱኮን ምልኦም፡ ነቲ ስቱኮ ድማ ክነቅጽ ግደፎ። ድሕሪኡ ምረዶ፡ ልሙጽ ግበሮ። ድሕሪ ምምራድ፡ ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረጎ፡ ካብ ጫፋት እውን። ኣብ መወዳእታ፡ ጽሩይ ክጸንሕ ዘለዎ፡ ከም መሳኹትን ሶኬታትን፡ ብተፕ ሸፍኖ። ምምራድ ደቂቕ ሓመድ ይገብር፡ ማስክ ሓመድ ግበር፡ ኣየናይ ምዃኑ ድማ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሕብሪ ኣብ ረሳሕ፡ ሓመድ ወይ ልሕሉሕ ኣረጊት ሕብሪ ጽቡቕ ኣይጣበቕን። ስለዚ ቅድም ነቲ ልሕሉሕ ሕብሪ ብመፋሓቕ ሕብሪ ፍሓቕዮ። ጉድጓዳት ብስቱኮን ብካራ ስቱኮን ምልእዮም፡ ነቲ ስቱኮ ድማ ክነቅጽ ግደፍዮ። ድሕሪኡ ምረድዮ፡ ልሙጽ ግበርዮ። ድሕሪ ምምራድ፡ ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረግዮ፡ ካብ ጫፋት እውን። ኣብ መወዳእታ፡ ጽሩይ ክጸንሕ ዘለዎ፡ ከም መሳኹትን ሶኬታትን፡ ብተፕ ሸፍንዮ። ምምራድ ደቂቕ ሓመድ ይገብር፡ ማስክ ሓመድ ግበሪ፡ ኣየናይ ምዃኑ ድማ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሕብሪ ኣብ ረሳሕ፡ ሓመድ ወይ ልሕሉሕ ኣረጊት ሕብሪ ጽቡቕ ኣይጣበቕን። ስለዚ ቅድም ነቲ ልሕሉሕ ሕብሪ ብመፋሓቕ ሕብሪ ፍሓቕዎ። ጉድጓዳት ብስቱኮን ብካራ ስቱኮን ምልእዎም፡ ነቲ ስቱኮ ድማ ክነቅጽ ግደፍዎ። ድሕሪኡ ምረድዎ፡ ልሙጽ ግበርዎ። ድሕሪ ምምራድ፡ ነቲ ሓመድ ብንእሽቶ መጥረጊ ጽረግዎ፡ ካብ ጫፋት እውን። ኣብ መወዳእታ፡ ጽሩይ ክጸንሕ ዘለዎ፡ ከም መሳኹትን ሶኬታትን፡ ብተፕ ሸፍንዎ። ምምራድ ደቂቕ ሓመድ ይገብር፡ ማስክ ሓመድ ግበሩ፡ ኣየናይ ምዃኑ ድማ ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.p': "ቅድም ምምራድ፡ ድሕሪኡ ምቕባእ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.s': { m: "ነቲ ማዕጾ መሪድካዮ። ገና ሓመድ ኣለዎ። ብጻይ ስራሕካ ሕጂ ክቕብእ ይደሊ። እንታይ ትገብር?", f: "ነቲ ማዕጾ መሪድክዮ። ገና ሓመድ ኣለዎ። ብጻይ ስራሕኪ ሕጂ ክቕብእ ይደሊ። እንታይ ትገብሪ?", x: "ነቲ ማዕጾ መሪድኩምዎ። ገና ሓመድ ኣለዎ። ብጻይ ስራሕኩም ሕጂ ክቕብእ ይደሊ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o1': { m: "ቅድም ነቲ ሓመድ ብመጥረጊ ጽረጎ።", f: "ቅድም ነቲ ሓመድ ብመጥረጊ ጽረግዮ።", x: "ቅድም ነቲ ሓመድ ብመጥረጊ ጽረግዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o2': { m: "ይቕብእ ግደፎ፡ እቲ ሕብሪ ነቲ ሓመድ ይሽፍኖ።", f: "ይቕብእ ግደፍዮ፡ እቲ ሕብሪ ነቲ ሓመድ ይሽፍኖ።", x: "ይቕብእ ግደፍዎ፡ እቲ ሕብሪ ነቲ ሓመድ ይሽፍኖ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.o3': { m: "ነቲ ሓመድ ብኢድካ ኣልግሶ።", f: "ነቲ ሓመድ ብኢድኪ ኣልግስዮ።", x: "ነቲ ሓመድ ብኢድኩም ኣልግስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.w': "ኣብ ሓመድ ዝተቐብአ ሕብሪ ጽቡቕ ኣይጣበቕን። ደሓር ቁራጽ ቁራጽ ኮይኑ ይፍንጸል፡ ሽዑ ኩሉ እቲ ስራሕ እንደገና ክስራሕ ኣለዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brick': "ጡብ ምህናጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speciekuip': "ገንዳ ማልታ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltroffel': "ማንካ ጡብ (ካዝዋራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baksteen': "ጡብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cement': "ስሚንቶ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voegijzer': "ሓጺን ጋግ (ኣብ መንጎ ጡባት ዘሎ ጋግ ንምልማጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handveger': "መጥረጊ ኢድ", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.1': "ኣብቲ ገንዳ ማልታ ገና ስሚንቶ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.2': { m: "ነቲ ጋግ ብሓጺን ጋግ ልሙጽ ግበሮ።", f: "ነቲ ጋግ ብሓጺን ጋግ ልሙጽ ግበርዮ።", x: "ነቲ ጋግ ብሓጺን ጋግ ልሙጽ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.brick.3': { m: "ነቲ መንደቕ ብመጥረጊ ኢድ ኣጽርዮ።", f: "ነቲ መንደቕ ብመጥረጊ ኢድ ኣጽርይዮ።", x: "ነቲ መንደቕ ብመጥረጊ ኢድ ኣጽርይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.q': { m: "ክንደይ ጡብ ተሪፉካ?", f: "ክንደይ ጡብ ተሪፉኪ?", x: "ክንደይ ጡብ ተሪፉኩም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick.a': "ገና ሓደ ፓለት ኣሎ። ንሎሚ ይኣክል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brick': { m: "ክትሰርሕ ከለኻ ነቲ መንደቕ ጽሩይ ሓዞ", f: "ክትሰርሒ ከለኺ ነቲ መንደቕ ጽሩይ ሓዝዮ", x: "ክትሰርሑ ከለኹም ነቲ መንደቕ ጽሩይ ሓዝዎ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.b': { m: "ጡብ ክተንብር ከለኻ ማልታ ርሑስ እዩ፡ ኣብ ውሽጢ ቁሩብ ሰዓታት ድማ ይተርር። ስለዚ ጽሩይ ገይርካ ስራሕ። እቲ ካብ ጋግ ዝወጽእ ማልታ ብኡብኡ ብማንካ ፍሓቖ። እቲ ማልታ ቁሩብ ምስ ተረረ ነቶም ጋግታት ብሓጺን ጋግ ልሙጽ ግበሮም፡ ገና ርሑስ ከሎ ኣይኮነን። ድሕሪኡ ነቲ መንደቕ ብመጥረጊ ኢድ ጽረጎ። ኣብ ቅድሚት ጡብ ዝተረረ ማልታ ምውጻእ ኣዝዩ ከቢድ እዩ። ኣብ መወዳእታ መዓልቲ፡ ዝናብ ነቲ ማልታ ከይሓጽቦ ነቲ ላዕለዋይ ክፋል መንደቕ ሸፍኖ።", f: "ጡብ ክተንብሪ ከለኺ ማልታ ርሑስ እዩ፡ ኣብ ውሽጢ ቁሩብ ሰዓታት ድማ ይተርር። ስለዚ ጽሩይ ገይርኪ ስርሒ። እቲ ካብ ጋግ ዝወጽእ ማልታ ብኡብኡ ብማንካ ፍሓቕዮ። እቲ ማልታ ቁሩብ ምስ ተረረ ነቶም ጋግታት ብሓጺን ጋግ ልሙጽ ግበርዮም፡ ገና ርሑስ ከሎ ኣይኮነን። ድሕሪኡ ነቲ መንደቕ ብመጥረጊ ኢድ ጽረግዮ። ኣብ ቅድሚት ጡብ ዝተረረ ማልታ ምውጻእ ኣዝዩ ከቢድ እዩ። ኣብ መወዳእታ መዓልቲ፡ ዝናብ ነቲ ማልታ ከይሓጽቦ ነቲ ላዕለዋይ ክፋል መንደቕ ሸፍንዮ።", x: "ጡብ ክተንብሩ ከለኹም ማልታ ርሑስ እዩ፡ ኣብ ውሽጢ ቁሩብ ሰዓታት ድማ ይተርር። ስለዚ ጽሩይ ገይርኩም ስርሑ። እቲ ካብ ጋግ ዝወጽእ ማልታ ብኡብኡ ብማንካ ፍሓቕዎ። እቲ ማልታ ቁሩብ ምስ ተረረ ነቶም ጋግታት ብሓጺን ጋግ ልሙጽ ግበርዎም፡ ገና ርሑስ ከሎ ኣይኮነን። ድሕሪኡ ነቲ መንደቕ ብመጥረጊ ኢድ ጽረግዎ። ኣብ ቅድሚት ጡብ ዝተረረ ማልታ ምውጻእ ኣዝዩ ከቢድ እዩ። ኣብ መወዳእታ መዓልቲ፡ ዝናብ ነቲ ማልታ ከይሓጽቦ ነቲ ላዕለዋይ ክፋል መንደቕ ሸፍንዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.p': "ነቶም ጋግታት ልሙጽ እገብሮም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.s': { m: "ኣብ መወዳእታ መዓልቲ፡ ኣብ ቅድሚት ጡባት ማልታ ኣሎ። እንታይ ትገብር?", f: "ኣብ መወዳእታ መዓልቲ፡ ኣብ ቅድሚት ጡባት ማልታ ኣሎ። እንታይ ትገብሪ?", x: "ኣብ መወዳእታ መዓልቲ፡ ኣብ ቅድሚት ጡባት ማልታ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o1': { m: "ከይተረረ ሕጂ ብመጥረጊ ኣልግሶ።", f: "ከይተረረ ሕጂ ብመጥረጊ ኣልግስዮ።", x: "ከይተረረ ሕጂ ብመጥረጊ ኣልግስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o2': { m: "ግደፎ፡ ኣብ ዝመጽእ ሰሙን ከተጽርዮ ኢኻ።", f: "ግደፍዮ፡ ኣብ ዝመጽእ ሰሙን ከተጽርይዮ ኢኺ።", x: "ግደፍዎ፡ ኣብ ዝመጽእ ሰሙን ከተጽርይዎ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.o3': { m: "ነቲ መንደቕ ብብዙሕ ማይ ሕጸቦ።", f: "ነቲ መንደቕ ብብዙሕ ማይ ሕጸብዮ።", x: "ነቲ መንደቕ ብብዙሕ ማይ ሕጸብዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.w': "ሓድሽ ማልታ ብመጥረጊ ብቐሊሉ ይወጽእ። ዝተረረ ማልታ ኣብቲ ጡብ ይጸንሕ፡ ሽዑ እቲ መንደቕ ጽቡቕ ኣይመስልን።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wall': "ትኽ ዝበለ መንደቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metseltouw': "ገመድ ህንጻ (ንትኽ ዝበለ መስርዕ ዝኸውን ገመድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klos': "መትሓዚ ገመድ (ነቲ ገመድ ኣብ ኩርናዕ ዝሕዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lagenmaatlat': "በትሪ መዐቀኒ መስርዕ (ብራኸ ነፍሲ ወከፍ መስርዕ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.profiel': "ፕሮፋይል ኩርናዕ (ኣብ ጫፍ መንደቕ ዝቖመ ትኽ ዓንዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kop': "ርእሲ ጡብ (ሓጺር ጫፍ ጡብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.strek': "ጎድኒ ጡብ (ነዊሕ ጎድኒ ጡብ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.1': { m: "ነቲ ገመድ ህንጻ ወጥሮ።", f: "ነቲ ገመድ ህንጻ ወጥርዮ።", x: "ነቲ ገመድ ህንጻ ወጥርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.2': "እቲ ፕሮፋይል ኩርናዕ ትኽ ኢሉ ደው ክብል ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.wall.3': { m: "ነቲ ጡብ፡ ነቲ ነዊሕ ጎድኑ ናብ ደገ ገይርካ ኣንብሮ።", f: "ነቲ ጡብ፡ ነቲ ነዊሕ ጎድኑ ናብ ደገ ገይርኪ ኣንብርዮ።", x: "ነቲ ጡብ፡ ነቲ ነዊሕ ጎድኑ ናብ ደገ ገይርኩም ኣንብርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.q': "ብራኸ እዚ መስርዕ ክንደይ ክኸውን ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall.a': { m: "ኣብቲ በትሪ መዐቀኒ መስርዕ ርአ።", f: "ኣብቲ በትሪ መዐቀኒ መስርዕ ርኣዪ።", x: "ኣብቲ በትሪ መዐቀኒ መስርዕ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wall': "እቲ ገመድ ነቲ መንደቕ ትኽ ገይሩ ይሕዞ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.b': { m: "ሃናጺ ጡብ ብዓይኒ ኣይሃንጽን። ቅድም እቶም ፕሮፋይላት ኩርናዕ ኣብ ክልቲኡ ጫፍ መንደቕ ትኽ ኢሎም ደው ይብሉ። ኣብ መንጎኦም ነቲ ገመድ ህንጻ ኣብ ብራኸ እቲ ዝቕጽል መስርዕ ትወጥሮ። ነፍሲ ወከፍ ጡብ ብጎኒ እቲ ገመድ ኣንብሮ፡ ግን ነቲ ገመድ ኣይትድፍኦ። እቲ በትሪ መዐቀኒ መስርዕ ነፍሲ ወከፍ መስርዕ ክንደይ ብራኸ ክኸውን ከም ዘለዎ የርኢ። ብተደጋጋሚ ብሊቨሎ ፈትሽ። ዘምበለ ጡብ እቲ ማልታ ርሑስ ከሎ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ኣዝዩ ከቢድ።", f: "ሃናጺ ጡብ ብዓይኒ ኣይሃንጽን። ቅድም እቶም ፕሮፋይላት ኩርናዕ ኣብ ክልቲኡ ጫፍ መንደቕ ትኽ ኢሎም ደው ይብሉ። ኣብ መንጎኦም ነቲ ገመድ ህንጻ ኣብ ብራኸ እቲ ዝቕጽል መስርዕ ትወጥርዮ። ነፍሲ ወከፍ ጡብ ብጎኒ እቲ ገመድ ኣንብርዮ፡ ግን ነቲ ገመድ ኣይትድፍእዮ። እቲ በትሪ መዐቀኒ መስርዕ ነፍሲ ወከፍ መስርዕ ክንደይ ብራኸ ክኸውን ከም ዘለዎ የርኢ። ብተደጋጋሚ ብሊቨሎ ፈትሺ። ዘምበለ ጡብ እቲ ማልታ ርሑስ ከሎ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ኣዝዩ ከቢድ።", x: "ሃናጺ ጡብ ብዓይኒ ኣይሃንጽን። ቅድም እቶም ፕሮፋይላት ኩርናዕ ኣብ ክልቲኡ ጫፍ መንደቕ ትኽ ኢሎም ደው ይብሉ። ኣብ መንጎኦም ነቲ ገመድ ህንጻ ኣብ ብራኸ እቲ ዝቕጽል መስርዕ ትወጥርዎ። ነፍሲ ወከፍ ጡብ ብጎኒ እቲ ገመድ ኣንብርዎ፡ ግን ነቲ ገመድ ኣይትድፍእዎ። እቲ በትሪ መዐቀኒ መስርዕ ነፍሲ ወከፍ መስርዕ ክንደይ ብራኸ ክኸውን ከም ዘለዎ የርኢ። ብተደጋጋሚ ብሊቨሎ ፈትሹ። ዘምበለ ጡብ እቲ ማልታ ርሑስ ከሎ ምዕራዩ ቀሊል እዩ፡ ጽባሕ ግን ኣዝዩ ከቢድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.p': "እቲ ገመድ ህንጻ ተወጢሩ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.s': { m: "እቲ ገመድ ህንጻ ልሕሉሕ እዩ፡ ኣብ ማእከል ድማ ቁሩብ ተንጠልጢሉ። እንታይ ትገብር?", f: "እቲ ገመድ ህንጻ ልሕሉሕ እዩ፡ ኣብ ማእከል ድማ ቁሩብ ተንጠልጢሉ። እንታይ ትገብሪ?", x: "እቲ ገመድ ህንጻ ልሕሉሕ እዩ፡ ኣብ ማእከል ድማ ቁሩብ ተንጠልጢሉ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o1': { m: "ቅድም ወጥሮ፡ ድሕሪኡ ቀጽል።", f: "ቅድም ወጥርዮ፡ ድሕሪኡ ቀጽሊ።", x: "ቅድም ወጥርዎ፡ ድሕሪኡ ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o2': { m: "ዋላ እውን ነቶም ጡባት ኣብ ትሕቲኡ ኣንብሮም።", f: "ዋላ እውን ነቶም ጡባት ኣብ ትሕቲኡ ኣንብርዮም።", x: "ዋላ እውን ነቶም ጡባት ኣብ ትሕቲኡ ኣንብርዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.o3': { m: "ነቶም ጡባት ብዓይኒ ኣንብሮም።", f: "ነቶም ጡባት ብዓይኒ ኣንብርዮም።", x: "ነቶም ጡባት ብዓይኒ ኣንብርዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.w': "ልሕሉሕ ገመድ ኣብ ማእከል ይንጠልጠል፡ ስለዚ እቲ መስርዕ እውን ይንጠልጠል። ዝተወጠረ ገመድ ትኽ ዝበለ መስርዕ ይህብ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.wood': "ምስ ዕንጨይቲ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handzaag': "መጋዝ ኢድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kapzaag': "ንእሽቶ መጋዝ (ድሕሪቱ ተሪር ዝኾነ ንእሽቶ መጋዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtbeitel': "መሕፈሪ ዕንጨይቲ (ስካልፔሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handschaaf': "መለስለሲ ዕንጨይቲ ብኢድ (ፕያላ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.timmermanshamer': "መዶሻ ጸራቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.houtenhamer': "መዶሻ ዕንጨይቲ (ካብ ዕንጨይቲ ዝተሰርሐ መዶሻ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.1': { m: "ነቲ ሰሌዳ ብልክዕ ዓቐኑ ብመጋዝ ቁረጾ።", f: "ነቲ ሰሌዳ ብልክዕ ዓቐኑ ብመጋዝ ቁረጽዮ።", x: "ነቲ ሰሌዳ ብልክዕ ዓቐኑ ብመጋዝ ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.2': { m: "ነቲ ጫፍ ብፕያላ ልሙጽ ግበሮ።", f: "ነቲ ጫፍ ብፕያላ ልሙጽ ግበርዮ።", x: "ነቲ ጫፍ ብፕያላ ልሙጽ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wood.3': { m: "ነቲ መሕፈሪ ብመዶሻ ዕንጨይቲ ህረሞ።", f: "ነቲ መሕፈሪ ብመዶሻ ዕንጨይቲ ህረምዮ።", x: "ነቲ መሕፈሪ ብመዶሻ ዕንጨይቲ ህረምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.q': "ኣየናይ መጋዝ የድልየኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood.a': "እቲ ንእሽቶ መጋዝ፡ ነዚ ንእሽቶ ቁራጽ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wood': "ዝሓጸረ ክእረም ኣይክእልን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.b': { m: "ኣዝዩ ሓጺር ተቖሪጹ ዝወጸ ዕንጨይቲ ደጊሙ ነዊሕ ክኸውን ኣይክእልን። ስለዚ ክልተ ግዜ ዓቅን፡ ቅድሚ ምቑራጽካ ድማ ነቲ መስመር ስኣሎ። ኣብ ጎድኒ እቲ መስመር ቁረጽ፡ ኣብቲ ዘየድልየካ ክፋል። ነቲ ዕንጨይቲ ኣርጊእካ ሓዞ፡ ኣብ ጠረጴዛ ስራሕ ወይ ብመጨበጢ፡ ኣብ ብርክኻ ኣይኮነን። ነቲ ስራሕ ንመጋዝ ግደፎ፡ ብነዊሕን ህዱእን ምንቅስቓስ። መሕፈሪ ካብ ሰውነትካን ካብቲ ካልእ ኢድካን ንደገ ድፍኦ። ነቲ መሕፈርን ፕያላን ድማ በሊሕ ሓዞም፡ በሊሕ ዘይኮነ መሳርሒ ብቐሊሉ ካብ ቦታኡ ይወጽእ።", f: "ኣዝዩ ሓጺር ተቖሪጹ ዝወጸ ዕንጨይቲ ደጊሙ ነዊሕ ክኸውን ኣይክእልን። ስለዚ ክልተ ግዜ ዓቅኒ፡ ቅድሚ ምቑራጽኪ ድማ ነቲ መስመር ስኣልዮ። ኣብ ጎድኒ እቲ መስመር ቁረጺ፡ ኣብቲ ዘየድልየኪ ክፋል። ነቲ ዕንጨይቲ ኣርጊእኪ ሓዝዮ፡ ኣብ ጠረጴዛ ስራሕ ወይ ብመጨበጢ፡ ኣብ ብርክኺ ኣይኮነን። ነቲ ስራሕ ንመጋዝ ግደፍዮ፡ ብነዊሕን ህዱእን ምንቅስቓስ። መሕፈሪ ካብ ሰውነትኪን ካብቲ ካልእ ኢድኪን ንደገ ድፍእዮ። ነቲ መሕፈርን ፕያላን ድማ በሊሕ ሓዝዮም፡ በሊሕ ዘይኮነ መሳርሒ ብቐሊሉ ካብ ቦታኡ ይወጽእ።", x: "ኣዝዩ ሓጺር ተቖሪጹ ዝወጸ ዕንጨይቲ ደጊሙ ነዊሕ ክኸውን ኣይክእልን። ስለዚ ክልተ ግዜ ዓቅኑ፡ ቅድሚ ምቑራጽኩም ድማ ነቲ መስመር ስኣልዎ። ኣብ ጎድኒ እቲ መስመር ቁረጹ፡ ኣብቲ ዘየድልየኩም ክፋል። ነቲ ዕንጨይቲ ኣርጊእኩም ሓዝዎ፡ ኣብ ጠረጴዛ ስራሕ ወይ ብመጨበጢ፡ ኣብ ብርክኹም ኣይኮነን። ነቲ ስራሕ ንመጋዝ ግደፍዎ፡ ብነዊሕን ህዱእን ምንቅስቓስ። መሕፈሪ ካብ ሰውነትኩምን ካብቲ ካልእ ኢድኩምን ንደገ ድፍእዎ። ነቲ መሕፈርን ፕያላን ድማ በሊሕ ሓዝዎም፡ በሊሕ ዘይኮነ መሳርሒ ብቐሊሉ ካብ ቦታኡ ይወጽእ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.p': "ሓንሳእ ደጊመ እዕቅኖ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.s': { m: "ሰሌዳ ብልክዕ ዓቐኑ ክትቖርጽ ኣለካ። ሓንሳእ ብቕልጡፍ ዓቂንካዮ። እንታይ ትገብር?", f: "ሰሌዳ ብልክዕ ዓቐኑ ክትቖርጺ ኣለኪ። ሓንሳእ ብቕልጡፍ ዓቂንክዮ። እንታይ ትገብሪ?", x: "ሰሌዳ ብልክዕ ዓቐኑ ክትቖርጹ ኣለኩም። ሓንሳእ ብቕልጡፍ ዓቂንኩምዎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o1': { m: "ደጊምካ ዓቅን፡ ድሕሪኡ ነቲ መስመር ስኣሎ።", f: "ደጊምኪ ዓቅኒ፡ ድሕሪኡ ነቲ መስመር ስኣልዮ።", x: "ደጊምኩም ዓቅኑ፡ ድሕሪኡ ነቲ መስመር ስኣልዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o2': { m: "ሕጂ ቁረጾ፡ ምናልባት ቅኑዕ እዩ።", f: "ሕጂ ቁረጽዮ፡ ምናልባት ቅኑዕ እዩ።", x: "ሕጂ ቁረጽዎ፡ ምናልባት ቅኑዕ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.o3': { m: "ብዘይ መስመር ብዓይኒ ቁረጾ።", f: "ብዘይ መስመር ብዓይኒ ቁረጽዮ።", x: "ብዘይ መስመር ብዓይኒ ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.w': { m: "ነዊሕ እንተ ኾይኑ እንደገና ክትቖርጾ ትኽእል ኢኻ፡ ሓጺር እንተ ኾይኑ ግን ክትዓርዮ ኣይትኽእልን ኢኻ። ደጊምካ ምዕቃን ሓንቲ ደቒቕ ይወስድ፡ ሓድሽ ሰሌዳ ግን ብዙሕ ይወስድ።", f: "ነዊሕ እንተ ኾይኑ እንደገና ክትቖርጽዮ ትኽእሊ ኢኺ፡ ሓጺር እንተ ኾይኑ ግን ክትዓርይዮ ኣይትኽእሊን ኢኺ። ደጊምኪ ምዕቃን ሓንቲ ደቒቕ ይወስድ፡ ሓድሽ ሰሌዳ ግን ብዙሕ ይወስድ።", x: "ነዊሕ እንተ ኾይኑ እንደገና ክትቖርጽዎ ትኽእሉ ኢኹም፡ ሓጺር እንተ ኾይኑ ግን ክትዓርይዎ ኣይትኽእሉን ኢኹም። ደጊምኩም ምዕቃን ሓንቲ ደቒቕ ይወስድ፡ ሓድሽ ሰሌዳ ግን ብዙሕ ይወስድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.square': "ምምልካት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelhaak': "ስኳድራ (ቀጥታዊ ኩርናዕ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstekhaak': "ስኳድራ ፈረቓ ኩርናዕ (45 ዲግሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaaihaak': "ዝስተኻኸል ስኳድራ (ኩርናዑ ብኢድ ይስተኻኸል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruishout': "መስመሪ ጫፍ (ብጎኒ ጫፍ መስመር ይስእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.passer': "ኮምፓስ (ክቢ ይስእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftekenen': "ምምልካት (ዝቑረጸሉ ቦታ ምስኣል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.square.1': { m: "ነቲ መስመር ብስኳድራ ስኣሎ።", f: "ነቲ መስመር ብስኳድራ ስኣልዮ።", x: "ነቲ መስመር ብስኳድራ ስኣልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.square.2': { m: "ነቲ ዝስተኻኸል ስኳድራ ኣብቲ ቅኑዕ ኩርናዕ ኣቐምጦ።", f: "ነቲ ዝስተኻኸል ስኳድራ ኣብቲ ቅኑዕ ኩርናዕ ኣቐምጥዮ።", x: "ነቲ ዝስተኻኸል ስኳድራ ኣብቲ ቅኑዕ ኩርናዕ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.square.3': { m: "ብኮምፓስ ክቢ ስኣል።", f: "ብኮምፓስ ክቢ ስኣሊ።", x: "ብኮምፓስ ክቢ ስኣሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.q': "እቲ ኩርናዕ ቀጥታዊ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square.a': "እወ፡ እቲ ስኳድራ ልክዕ ይገጥም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.square': { m: "ካብ ሓደ ትኽ ዝበለ ጫፍ ምልክት ግበር", f: "ካብ ሓደ ትኽ ዝበለ ጫፍ ምልክት ግበሪ", x: "ካብ ሓደ ትኽ ዝበለ ጫፍ ምልክት ግበሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.b': { m: "ቅድሚ ምቑራጽካ ወይ ጉድጓድ ምግባርካ፡ ኣበይ ከም ዝኸውን ትምልክት። በሊሕ ርሳስ ተጠቐም፡ ረጒድ መስመር ልክዕ ኣይኮነን። ሓደ ትኽ ዝበለ ጫፍ ናይቲ ዕንጨይቲ ምረጽ፡ ኩሉ ድማ ካብቲ ጫፍ ዓቅን። ነቲ ረጒድ ክፋል ስኳድራ ኣብኡ ኣጽኒዕካ ኣጣብቖ፡ ነቲ መስመር ድማ ብጎኒ እቲ ሓጺን ስኣሎ። ኣብቲ ዘይትጥቀመሉ ክፋል ንእሽቶ መስቀል ስኣል። ሽዑ ኣብ ጎኒ እቲ መስመር፡ ኣብ ወገን እቲ መስቀል ትቖርጽ።", f: "ቅድሚ ምቑራጽኪ ወይ ጉድጓድ ምግባርኪ፡ ኣበይ ከም ዝኸውን ትምልክቲ። በሊሕ ርሳስ ተጠቐሚ፡ ረጒድ መስመር ልክዕ ኣይኮነን። ሓደ ትኽ ዝበለ ጫፍ ናይቲ ዕንጨይቲ ምረጺ፡ ኩሉ ድማ ካብቲ ጫፍ ዓቅኒ። ነቲ ረጒድ ክፋል ስኳድራ ኣብኡ ኣጽኒዕኪ ኣጣብቕዮ፡ ነቲ መስመር ድማ ብጎኒ እቲ ሓጺን ስኣልዮ። ኣብቲ ዘይትጥቀምሉ ክፋል ንእሽቶ መስቀል ስኣሊ። ሽዑ ኣብ ጎኒ እቲ መስመር፡ ኣብ ወገን እቲ መስቀል ትቖርጺ።", x: "ቅድሚ ምቑራጽኩም ወይ ጉድጓድ ምግባርኩም፡ ኣበይ ከም ዝኸውን ትምልክቱ። በሊሕ ርሳስ ተጠቐሙ፡ ረጒድ መስመር ልክዕ ኣይኮነን። ሓደ ትኽ ዝበለ ጫፍ ናይቲ ዕንጨይቲ ምረጹ፡ ኩሉ ድማ ካብቲ ጫፍ ዓቅኑ። ነቲ ረጒድ ክፋል ስኳድራ ኣብኡ ኣጽኒዕኩም ኣጣብቕዎ፡ ነቲ መስመር ድማ ብጎኒ እቲ ሓጺን ስኣልዎ። ኣብቲ ዘይትጥቀሙሉ ክፋል ንእሽቶ መስቀል ስኣሉ። ሽዑ ኣብ ጎኒ እቲ መስመር፡ ኣብ ወገን እቲ መስቀል ትቖርጹ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.p': "ቅድም ምልክት እገብረሉ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.s': { m: "ርሳስካ በሊሕ ኣይኮነን፡ ረጒድ መስመር ድማ ይገብር። ሰሌዳ ክትምልክት ትደሊ። እንታይ ትገብር?", f: "ርሳስኪ በሊሕ ኣይኮነን፡ ረጒድ መስመር ድማ ይገብር። ሰሌዳ ክትምልክቲ ትደልዪ። እንታይ ትገብሪ?", x: "ርሳስኩም በሊሕ ኣይኮነን፡ ረጒድ መስመር ድማ ይገብር። ሰሌዳ ክትምልክቱ ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o1': { m: "ቅድም ነቲ ርሳስ ቅረጾ፡ ድሕሪኡ ስኣል።", f: "ቅድም ነቲ ርሳስ ቅረጽዮ፡ ድሕሪኡ ስኣሊ።", x: "ቅድም ነቲ ርሳስ ቅረጽዎ፡ ድሕሪኡ ስኣሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o2': { m: "ዋላ እውን ነቲ መስመር ስኣሎ፡ ደሓን እዩ።", f: "ዋላ እውን ነቲ መስመር ስኣልዮ፡ ደሓን እዩ።", x: "ዋላ እውን ነቲ መስመር ስኣልዎ፡ ደሓን እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.o3': { m: "ብጽፍርኻ ምልክት ግበር።", f: "ብጽፍርኺ ምልክት ግበሪ።", x: "ብጽፍርኹም ምልክት ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.w': { m: "ረጒድ መስመር ገለ ሚሊሜተር ግፍሒ ኣለዎ። ሽዑ ኣበይ ክትቖርጽ ከም ዘለካ ኣይትፈልጥን፡ እቲ ቁራጽ ድማ ልክዕ ኣይኮነን።", f: "ረጒድ መስመር ገለ ሚሊሜተር ግፍሒ ኣለዎ። ሽዑ ኣበይ ክትቖርጺ ከም ዘለኪ ኣይትፈልጢን፡ እቲ ቁራጽ ድማ ልክዕ ኣይኮነን።", x: "ረጒድ መስመር ገለ ሚሊሜተር ግፍሒ ኣለዎ። ሽዑ ኣበይ ክትቖርጹ ከም ዘለኩም ኣይትፈልጡን፡ እቲ ቁራጽ ድማ ልክዕ ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.screw': "መሰርሕን ቪተታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.accuboor': "ብባተሪ ዝሰርሕ መሰርሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boormachine': "ናይ ኤሌክትሪክ መሰርሒ (ምስ ገመድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bitje': "ጫፍ ካቻቪተ (ቢት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plug': "ፕላግ መንደቕ (ፊሸር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroevendraaier': "ካቻቪተ (መፍትሒ ቪተ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spijker': "ምስማር", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.1': { m: "ብመሰርሒ ጉድጓድ ግበር፡ ፕላግ ድማ ኣእትወሉ።", f: "ብመሰርሒ ጉድጓድ ግበሪ፡ ፕላግ ድማ ኣእትውሉ።", x: "ብመሰርሒ ጉድጓድ ግበሩ፡ ፕላግ ድማ ኣእትዉሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.2': "ምስዚ ቪተ ኣየናይ ቢት ይኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.screw.3': { m: "ነቲ ምስማር ናብቲ ዕንጨይቲ ብመዶሻ ኣእትዎ።", f: "ነቲ ምስማር ናብቲ ዕንጨይቲ ብመዶሻ ኣእትውዮ።", x: "ነቲ ምስማር ናብቲ ዕንጨይቲ ብመዶሻ ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.q': "እቲ ብባተሪ ዝሰርሕ መሰርሒ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw.a': "ኣብ ቻርጀር ኣሎ፡ ዳርጋ መሊኡ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.screw': { m: "ቅድሚ ጉድጓድ ምግባርካ ርአ", f: "ቅድሚ ጉድጓድ ምግባርኪ ርኣዪ", x: "ቅድሚ ጉድጓድ ምግባርኩም ርኣዩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.b': { m: "ኣብ መንደቕ ቅድሚ ጉድጓድ ምግባርካ፡ ኣብ ድሕሪኡ እንታይ ከም ዘሎ ሕሰብ። ቱቦታትን ገመዳት ኤሌክትሪክን ብዙሕ ግዜ ካብ ሶኬት ወይ መወልዒ ብትኽ ናብ ላዕሊ፡ ናብ ታሕቲ ወይ ናብ ጎኒ ይኸዱ። ኣበይ ከም ዘለዉ ሕተት፡ ወይ ብመርመሪ (ዲተክተር) ፈትሽ። ምስቲ ፕላግ ሓደ ዓቐን ዘለዎ ጫፍ መሰርሒ ምረጽ፡ ነቲ ጉድጓድ ድማ ካብቲ ፕላግ ቁሩብ ዝዓሞቐ ግበሮ። ንቪተ እቲ ቅኑዕ ቢት ተጠቐም፡ ጌጋ ቢት ካብ ቦታኡ ይወጽእ፡ ንርእሲ እቲ ቪተ ድማ የበላሽዎ። ጉድጓድ ክትገብር ከለኻ መከላኸሊ መነጽር ግበር።", f: "ኣብ መንደቕ ቅድሚ ጉድጓድ ምግባርኪ፡ ኣብ ድሕሪኡ እንታይ ከም ዘሎ ሕሰቢ። ቱቦታትን ገመዳት ኤሌክትሪክን ብዙሕ ግዜ ካብ ሶኬት ወይ መወልዒ ብትኽ ናብ ላዕሊ፡ ናብ ታሕቲ ወይ ናብ ጎኒ ይኸዱ። ኣበይ ከም ዘለዉ ሕተቲ፡ ወይ ብመርመሪ (ዲተክተር) ፈትሺ። ምስቲ ፕላግ ሓደ ዓቐን ዘለዎ ጫፍ መሰርሒ ምረጺ፡ ነቲ ጉድጓድ ድማ ካብቲ ፕላግ ቁሩብ ዝዓሞቐ ግበርዮ። ንቪተ እቲ ቅኑዕ ቢት ተጠቐሚ፡ ጌጋ ቢት ካብ ቦታኡ ይወጽእ፡ ንርእሲ እቲ ቪተ ድማ የበላሽዎ። ጉድጓድ ክትገብሪ ከለኺ መከላኸሊ መነጽር ግበሪ።", x: "ኣብ መንደቕ ቅድሚ ጉድጓድ ምግባርኩም፡ ኣብ ድሕሪኡ እንታይ ከም ዘሎ ሕሰቡ። ቱቦታትን ገመዳት ኤሌክትሪክን ብዙሕ ግዜ ካብ ሶኬት ወይ መወልዒ ብትኽ ናብ ላዕሊ፡ ናብ ታሕቲ ወይ ናብ ጎኒ ይኸዱ። ኣበይ ከም ዘለዉ ሕተቱ፡ ወይ ብመርመሪ (ዲተክተር) ፈትሹ። ምስቲ ፕላግ ሓደ ዓቐን ዘለዎ ጫፍ መሰርሒ ምረጹ፡ ነቲ ጉድጓድ ድማ ካብቲ ፕላግ ቁሩብ ዝዓሞቐ ግበርዎ። ንቪተ እቲ ቅኑዕ ቢት ተጠቐሙ፡ ጌጋ ቢት ካብ ቦታኡ ይወጽእ፡ ንርእሲ እቲ ቪተ ድማ የበላሽዎ። ጉድጓድ ክትገብሩ ከለኹም መከላኸሊ መነጽር ግበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.p': "ኣብዚ ጉድጓድ ክገብር ይፍቀደኒ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.s': { m: "ልክዕ ኣብ ልዕሊ ሶኬት ጉድጓድ ክትገብር ኣለካ። እንታይ ትገብር?", f: "ልክዕ ኣብ ልዕሊ ሶኬት ጉድጓድ ክትገብሪ ኣለኪ። እንታይ ትገብሪ?", x: "ልክዕ ኣብ ልዕሊ ሶኬት ጉድጓድ ክትገብሩ ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o1': { m: "ቅድም እቲ ገመድ ኤሌክትሪክ ኣበይ ከም ዝኸይድ ሕተት።", f: "ቅድም እቲ ገመድ ኤሌክትሪክ ኣበይ ከም ዝኸይድ ሕተቲ።", x: "ቅድም እቲ ገመድ ኤሌክትሪክ ኣበይ ከም ዝኸይድ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o2': { m: "ጉድጓድ ግበር፡ ፈጺሙ ገመድ የለን።", f: "ጉድጓድ ግበሪ፡ ፈጺሙ ገመድ የለን።", x: "ጉድጓድ ግበሩ፡ ፈጺሙ ገመድ የለን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.o3': { m: "ቀስ ኢልካ ጉድጓድ ግበር፡ ሽዑ ውሑስ እዩ።", f: "ቀስ ኢልኪ ጉድጓድ ግበሪ፡ ሽዑ ውሑስ እዩ።", x: "ቀስ ኢልኩም ጉድጓድ ግበሩ፡ ሽዑ ውሑስ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.w': "ገመድ ኤሌክትሪክ ብዙሕ ግዜ ካብ ሶኬት ብትኽ ናብ ላዕሊ ይኸይድ። ኣብኡ ጉድጓድ ምግባር ሓደገኛ እዩ፡ እቲ ጽገና ድማ ብዙሕ ስራሕ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.fix': "ነገራት ምትኻል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevestigen': "ምትኻል (ገለ ነገር ኣብ መንደቕ ብጽኑዕ ምጥባቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzetten': "ምጽናዕ (ክሳብ ዝጸንዕ ምጥምዛዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lijmen': "ብኮላ ምጥባቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbussleutel': "መፍትሕ ኣለን (ሽዱሽተ ጎኒ ዘለዎ መፍትሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisschroevendraaier': "ካቻቪተ መስቀል (ጫፉ መስቀል ዝመስል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.platteschroevendraaier': "ጸፊሕ ካቻቪተ", // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.1': { m: "ነቲ መደርደሪ ኣብ መንደቕ ትኸሎ።", f: "ነቲ መደርደሪ ኣብ መንደቕ ትኸልዮ።", x: "ነቲ መደርደሪ ኣብ መንደቕ ትኸልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.2': { m: "ነቲ ቡሎን ብመፍትሕ ኣለን ኣጽንዖ።", f: "ነቲ ቡሎን ብመፍትሕ ኣለን ኣጽንዕዮ።", x: "ነቲ ቡሎን ብመፍትሕ ኣለን ኣጽንዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.fix.3': { m: "ነቲ ጸፊሕ ካቻቪተ ውሰድ፡ ነቲ መስቀል ኣይኮነን።", f: "ነቲ ጸፊሕ ካቻቪተ ውሰዲ፡ ነቲ መስቀል ኣይኮነን።", x: "ነቲ ጸፊሕ ካቻቪተ ውሰዱ፡ ነቲ መስቀል ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.q': "ነዚ መደርደሪ ብኸመይ ክተኽሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix.a': "ብክልተ ፕላግን ክልተ ቪተን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fix': "ጽኑዕ፡ ግን ልዕሊ ዓቐን ኣይኮነን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.b': { m: "ቪተ ወይ ቡሎን ጽኑዕ ክኸውን ኣለዎ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ኣዝዩ ብሓይሊ እንተ ጠምዚዝካ፡ እቲ ጥምዘት ቪተ ይበላሾ ወይ እቲ ዕንጨይቲ ይነቕዕ። ክሳብ ዘይንቀሳቐስ ጠምዝዝ፡ ድሕሪኡ ደው በል። ኣብ ብባተሪ ዝሰርሕ መሰርሒ፡ ቅድም ነቲ ቁጽርታት ዘለዎ ቀለቤት ናብ ትሑት ቁጽሪ ጠምዝዞ። ኣብ መንደቕ ዝትከል መደርደሪ ምስቲ መንደቕ ዝሰማማዕ ፕላግ የድልዮ፡ እምኒ ካብ ቀጢን መንደቕ ሰሌዳ ዝተፈልየ ፕላግ የድልዮ። ኮላ ግዜ የድልዮ፡ ነቶም ክፍልታት ጸቕጦም፡ ብመጨበጢ ሓዞም፡ ክሳብ እቲ ኮላ ዝነቅጽ ድማ ተጸበ።", f: "ቪተ ወይ ቡሎን ጽኑዕ ክኸውን ኣለዎ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ኣዝዩ ብሓይሊ እንተ ጠምዚዝኪ፡ እቲ ጥምዘት ቪተ ይበላሾ ወይ እቲ ዕንጨይቲ ይነቕዕ። ክሳብ ዘይንቀሳቐስ ጠምዝዚ፡ ድሕሪኡ ደው በሊ። ኣብ ብባተሪ ዝሰርሕ መሰርሒ፡ ቅድም ነቲ ቁጽርታት ዘለዎ ቀለቤት ናብ ትሑት ቁጽሪ ጠምዝዝዮ። ኣብ መንደቕ ዝትከል መደርደሪ ምስቲ መንደቕ ዝሰማማዕ ፕላግ የድልዮ፡ እምኒ ካብ ቀጢን መንደቕ ሰሌዳ ዝተፈልየ ፕላግ የድልዮ። ኮላ ግዜ የድልዮ፡ ነቶም ክፍልታት ጸቕጥዮም፡ ብመጨበጢ ሓዝዮም፡ ክሳብ እቲ ኮላ ዝነቅጽ ድማ ተጸበዪ።", x: "ቪተ ወይ ቡሎን ጽኑዕ ክኸውን ኣለዎ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ኣዝዩ ብሓይሊ እንተ ጠምዚዝኩም፡ እቲ ጥምዘት ቪተ ይበላሾ ወይ እቲ ዕንጨይቲ ይነቕዕ። ክሳብ ዘይንቀሳቐስ ጠምዝዙ፡ ድሕሪኡ ደው በሉ። ኣብ ብባተሪ ዝሰርሕ መሰርሒ፡ ቅድም ነቲ ቁጽርታት ዘለዎ ቀለቤት ናብ ትሑት ቁጽሪ ጠምዝዝዎ። ኣብ መንደቕ ዝትከል መደርደሪ ምስቲ መንደቕ ዝሰማማዕ ፕላግ የድልዮ፡ እምኒ ካብ ቀጢን መንደቕ ሰሌዳ ዝተፈልየ ፕላግ የድልዮ። ኮላ ግዜ የድልዮ፡ ነቶም ክፍልታት ጸቕጥዎም፡ ብመጨበጢ ሓዝዎም፡ ክሳብ እቲ ኮላ ዝነቅጽ ድማ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.p': "እቲ መደርደሪ ጽቡቕ ተተኺሉ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.s': { m: "ክልተ ቁራጽ ዕንጨይቲ ብኮላ ኣጣቢቕካ። ብጻይ ስራሕካ ብኡብኡ ክጥቀመሉ ይደሊ። እንታይ ትገብር?", f: "ክልተ ቁራጽ ዕንጨይቲ ብኮላ ኣጣቢቕኪ። ብጻይ ስራሕኪ ብኡብኡ ክጥቀመሉ ይደሊ። እንታይ ትገብሪ?", x: "ክልተ ቁራጽ ዕንጨይቲ ብኮላ ኣጣቢቕኩም። ብጻይ ስራሕኩም ብኡብኡ ክጥቀመሉ ይደሊ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o1': { m: "በል፡ እቲ ኮላ ቅድም ክነቅጽ ኣለዎ።", f: "በሊ፡ እቲ ኮላ ቅድም ክነቅጽ ኣለዎ።", x: "በሉ፡ እቲ ኮላ ቅድም ክነቅጽ ኣለዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o2': { m: "ይጠቐመሉ ግደፎ፡ ኮላ ቀልጢፉ ይነቅጽ።", f: "ይጠቐመሉ ግደፍዮ፡ ኮላ ቀልጢፉ ይነቅጽ።", x: "ይጠቐመሉ ግደፍዎ፡ ኮላ ቀልጢፉ ይነቅጽ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.o3': { m: "ንሓንቲ ደቒቕ ብኢድካ ሓዞ።", f: "ንሓንቲ ደቒቕ ብኢድኪ ሓዝዮ።", x: "ንሓንቲ ደቒቕ ብኢድኩም ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.w': { m: "ርሑስ ኮላ ገና ኣይሕዝን። ኣቐዲምካ እንተ ተጠቐምካሉ፡ እቶም ክፍልታት ደጊሞም ይፍትሑ። ሽዑ እንደገና ክትጅምር ኣለካ።", f: "ርሑስ ኮላ ገና ኣይሕዝን። ኣቐዲምኪ እንተ ተጠቐምክሉ፡ እቶም ክፍልታት ደጊሞም ይፍትሑ። ሽዑ እንደገና ክትጅምሪ ኣለኪ።", x: "ርሑስ ኮላ ገና ኣይሕዝን። ኣቐዲምኩም እንተ ተጠቐምኩምሉ፡ እቶም ክፍልታት ደጊሞም ይፍትሑ። ሽዑ እንደገና ክትጅምሩ ኣለኩም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.atmachine': "ኣብ ማሽን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedieningspaneel': "ሰሌዳ መቆጻጸሪ (መጠወቒታትን ስክሪንን ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.startknop': "መጀመሪ መጠወቒ (ቀጠልያ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hendel': "መጎተቲ (ሌቨር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscherming': "መከላኸሊ ማሽን (ኣብ ልዕሊ ዝንቀሳቐሱ ክፍልታት ዘሎ ሽፋን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sensor': "ሰንሰር (ገለ ነገር እንተሎ ይርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaallamp': "መብራህቲ ምልክት (ኣብ ላዕሊ ማሽን ዘለዉ ሕብራውያን መብራህቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.1': { m: "ነቲ ቀጠልያ መጀመሪ መጠወቒ ጠውቖ።", f: "ነቲ ቀጠልያ መጀመሪ መጠወቒ ጠውቕዮ።", x: "ነቲ ቀጠልያ መጀመሪ መጠወቒ ጠውቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.2': "እቲ መብራህቲ ምልክት ቀይሕ እዩ። ብልሽት ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.atmachine.3': { m: "ነቲ መከላኸሊ ማሽን ፈጺምካ ኣይተልግሶ።", f: "ነቲ መከላኸሊ ማሽን ፈጺምኪ ኣይተልግስዮ።", x: "ነቲ መከላኸሊ ማሽን ፈጺምኩም ኣይተልግስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.q': "እቲ ማሽን ስለምንታይ ደጋጊሙ ደው ይብል?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine.a': "እቲ ሰንሰር ነቲ ሳጹን ጽቡቕ ኣይርእዮን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.atmachine': "እቲ መከላኸሊ ኣብ ቦታኡ ይጸንሕ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.b': { m: "ዝንቀሳቐሱ ክፍልታት ማሽን ኢድ፡ ኢድ ክዳን ወይ ጸጉሪ ኣብ ትሕቲ ሓንቲ ካልኢት ክስሕቡ ይኽእሉ። እቲ መከላኸሊ ስለዚ እዩ ዘሎ። ፈጺምካ ኣይተልግሶ፡ እቲ ማሽን ክሰርሕ ከሎ ድማ ፈጺምካ ኢድካ ናብ ድሕሪኡ ኣይተእቱ። መከላኸሊ ወይ ሰንሰር ኣይሰርሕን ድዩ? ሽዑ እቲ ማሽን ውሑስ ኣይኮነን፡ ደው ኣብሎ፡ ንሓላፊ ጉጅለኻ ድማ ንገሮ። ገለ ነገር ተጣቢቑ ድዩ? ቅድም ነቲ ማሽን ደው ኣብሎ፡ ክትሰርሕ ከለኻ ድማ ዝኾነ ሰብ ከየበግሶ ኣረጋግጽ። እዚ ብኸመይ ከም ዝግበር ካብ ትካል ናብ ትካል ይፈላለ፡ ቅድሚ ምጅማርካ መብርሂ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ዝንቀሳቐሱ ክፍልታት ማሽን ኢድ፡ ኢድ ክዳን ወይ ጸጉሪ ኣብ ትሕቲ ሓንቲ ካልኢት ክስሕቡ ይኽእሉ። እቲ መከላኸሊ ስለዚ እዩ ዘሎ። ፈጺምኪ ኣይተልግስዮ፡ እቲ ማሽን ክሰርሕ ከሎ ድማ ፈጺምኪ ኢድኪ ናብ ድሕሪኡ ኣይተእትዊ። መከላኸሊ ወይ ሰንሰር ኣይሰርሕን ድዩ? ሽዑ እቲ ማሽን ውሑስ ኣይኮነን፡ ደው ኣብልዮ፡ ንሓላፊ ጉጅለኺ ድማ ንገርዮ። ገለ ነገር ተጣቢቑ ድዩ? ቅድም ነቲ ማሽን ደው ኣብልዮ፡ ክትሰርሒ ከለኺ ድማ ዝኾነ ሰብ ከየበግሶ ኣረጋግጺ። እዚ ብኸመይ ከም ዝግበር ካብ ትካል ናብ ትካል ይፈላለ፡ ቅድሚ ምጅማርኪ መብርሂ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ዝንቀሳቐሱ ክፍልታት ማሽን ኢድ፡ ኢድ ክዳን ወይ ጸጉሪ ኣብ ትሕቲ ሓንቲ ካልኢት ክስሕቡ ይኽእሉ። እቲ መከላኸሊ ስለዚ እዩ ዘሎ። ፈጺምኩም ኣይተልግስዎ፡ እቲ ማሽን ክሰርሕ ከሎ ድማ ፈጺምኩም ኢድኩም ናብ ድሕሪኡ ኣይተእትዉ። መከላኸሊ ወይ ሰንሰር ኣይሰርሕን ድዩ? ሽዑ እቲ ማሽን ውሑስ ኣይኮነን፡ ደው ኣብልዎ፡ ንሓላፊ ጉጅለኹም ድማ ንገርዎ። ገለ ነገር ተጣቢቑ ድዩ? ቅድም ነቲ ማሽን ደው ኣብልዎ፡ ክትሰርሑ ከለኹም ድማ ዝኾነ ሰብ ከየበግሶ ኣረጋግጹ። እዚ ብኸመይ ከም ዝግበር ካብ ትካል ናብ ትካል ይፈላለ፡ ቅድሚ ምጅማርኩም መብርሂ ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.p': "እቲ መከላኸሊ ማሽን ተበላሺዩ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.s': { m: "ሓደ ሳጹን ኣብ ማሽን፡ ልክዕ ኣብ ድሕሪ እቲ መከላኸሊ ተጣቢቑ። እቲ ማሽን ይሰርሕ ኣሎ። እንታይ ትገብር?", f: "ሓደ ሳጹን ኣብ ማሽን፡ ልክዕ ኣብ ድሕሪ እቲ መከላኸሊ ተጣቢቑ። እቲ ማሽን ይሰርሕ ኣሎ። እንታይ ትገብሪ?", x: "ሓደ ሳጹን ኣብ ማሽን፡ ልክዕ ኣብ ድሕሪ እቲ መከላኸሊ ተጣቢቑ። እቲ ማሽን ይሰርሕ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o1': { m: "ቅድም ነቲ ማሽን ደው ኣብሎ፡ ድሕሪኡ ሓገዝ ድለ።", f: "ቅድም ነቲ ማሽን ደው ኣብልዮ፡ ድሕሪኡ ሓገዝ ድለዪ።", x: "ቅድም ነቲ ማሽን ደው ኣብልዎ፡ ድሕሪኡ ሓገዝ ድለዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o2': { m: "ቀልጢፍካ ኢድካ ኣእቲኻ ነቲ ሳጹን ኣውጽኦ።", f: "ቀልጢፍኪ ኢድኪ ኣእቲኺ ነቲ ሳጹን ኣውጽእዮ።", x: "ቀልጢፍኩም ኢድኩም ኣእቲኹም ነቲ ሳጹን ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.o3': { m: "ክሰርሕ ከሎ ነቲ መከላኸሊ ክፈቶ።", f: "ክሰርሕ ከሎ ነቲ መከላኸሊ ክፈትዮ።", x: "ክሰርሕ ከሎ ነቲ መከላኸሊ ክፈትዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.w': { m: "ዝሰርሕ ማሽን ቅድሚ ምንቅስቓስካ ኢድካ ክስሕብ ይኽእል። ማሽን ደው ምባል ሓጺር ግዜ ይወስድ፡ ዝተጎድአ ኢድ ግን ኣዋርሕ ይወስድ።", f: "ዝሰርሕ ማሽን ቅድሚ ምንቅስቓስኪ ኢድኪ ክስሕብ ይኽእል። ማሽን ደው ምባል ሓጺር ግዜ ይወስድ፡ ዝተጎድአ ኢድ ግን ኣዋርሕ ይወስድ።", x: "ዝሰርሕ ማሽን ቅድሚ ምንቅስቓስኩም ኢድኩም ክስሕብ ይኽእል። ማሽን ደው ምባል ሓጺር ግዜ ይወስድ፡ ዝተጎድአ ኢድ ግን ኣዋርሕ ይወስድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.inspect': "ምዕቃንን ምፍታሽን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegschaal': "ሚዛን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meetklok': "መዐቀኒ ሰዓት (ኣዝዮም ንኣሽቱ ፍልልያት ይዕቅን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loep': "መጕልሒ መነጽር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.monster': "ናሙና (ንምፍታሽ ዝውሰድ ሓደ ፍርያት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkeurbak': "ሳጹን ዝተነጽጉ (ንዘይጽቡቓት ፍርያት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teller': "ቆጻሪ (ነቶም ፍርያት ይቖጽሮም)", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.1': { m: "ነቲ ፍርያት ኣብ ሚዛን ኣቐምጦ።", f: "ነቲ ፍርያት ኣብ ሚዛን ኣቐምጥዮ።", x: "ነቲ ፍርያት ኣብ ሚዛን ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.2': "እዚ ፍርያት ተጎዲኡ እዩ። ናብ ሳጹን ዝተነጽጉ ይኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspect.3': "ነቲ ኤቲኬት ብመጕልሒ መነጽር እርእዮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.q': "ክንደይ ግዜ ናሙና እወስድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect.a': { m: "ኣብ ነፍሲ ወከፍ ሰዓት ሓደ። ኣብቲ ዝርዝር ጽሓፎ።", f: "ኣብ ነፍሲ ወከፍ ሰዓት ሓደ። ኣብቲ ዝርዝር ጽሓፍዮ።", x: "ኣብ ነፍሲ ወከፍ ሰዓት ሓደ። ኣብቲ ዝርዝር ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspect': { m: "ዝፈተሽካዮ ጽሓፍ", f: "ዝፈተሽክዮ ጽሓፊ", x: "ዝፈተሽኩምዎ ጽሓፉ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.b': { m: "ኣብ ፋብሪካ ኣብ ግዜ ስራሕ ነቶም ፍርያት ትፈትሾም፡ ትምዝኖም፡ ትዕቅኖም፡ ወይ ብጥንቃቐ ትርእዮም። ነፍሲ ወከፍ ምፍታሽ ምስ ሰዓቱ ብኡብኡ ኣብቲ ዝርዝር ጽሓፎ። ደሓር ካብ ዝኽሪ ኣይኮነን። ሓደ ፍርያት ቅኑዕ ኣይኮነን ድዩ? ናብ ሳጹን ዝተነጽጉ ኣእትዎ፡ ነቶም ዝቕጽሉ ድማ ብጥንቃቐ ርኣዮም። ተወሰኽቲ ፍርያት ጌጋ ድዮም? ሽዑ ኣብቲ ማሽን ጸገም ኣሎ። ብኡብኡ ንሓላፊ ጉጅለኻ ንገሮ። ኣቐዲሙ ዝርከብ ጸገም ብዙሓት ፍርያት የድሕን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ፋብሪካ ኣብ ግዜ ስራሕ ነቶም ፍርያት ትፈትሽዮም፡ ትምዝንዮም፡ ትዕቅንዮም፡ ወይ ብጥንቃቐ ትርእይዮም። ነፍሲ ወከፍ ምፍታሽ ምስ ሰዓቱ ብኡብኡ ኣብቲ ዝርዝር ጽሓፍዮ። ደሓር ካብ ዝኽሪ ኣይኮነን። ሓደ ፍርያት ቅኑዕ ኣይኮነን ድዩ? ናብ ሳጹን ዝተነጽጉ ኣእትውዮ፡ ነቶም ዝቕጽሉ ድማ ብጥንቃቐ ርኣይዮም። ተወሰኽቲ ፍርያት ጌጋ ድዮም? ሽዑ ኣብቲ ማሽን ጸገም ኣሎ። ብኡብኡ ንሓላፊ ጉጅለኺ ንገርዮ። ኣቐዲሙ ዝርከብ ጸገም ብዙሓት ፍርያት የድሕን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ፋብሪካ ኣብ ግዜ ስራሕ ነቶም ፍርያት ትፈትሽዎም፡ ትምዝንዎም፡ ትዕቅንዎም፡ ወይ ብጥንቃቐ ትርእይዎም። ነፍሲ ወከፍ ምፍታሽ ምስ ሰዓቱ ብኡብኡ ኣብቲ ዝርዝር ጽሓፍዎ። ደሓር ካብ ዝኽሪ ኣይኮነን። ሓደ ፍርያት ቅኑዕ ኣይኮነን ድዩ? ናብ ሳጹን ዝተነጽጉ ኣእትውዎ፡ ነቶም ዝቕጽሉ ድማ ብጥንቃቐ ርኣይዎም። ተወሰኽቲ ፍርያት ጌጋ ድዮም? ሽዑ ኣብቲ ማሽን ጸገም ኣሎ። ብኡብኡ ንሓላፊ ጉጅለኹም ንገርዎ። ኣቐዲሙ ዝርከብ ጸገም ብዙሓት ፍርያት የድሕን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.p': "ተወሰኽቲ ፍርያት ጌጋ እዮም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.s': { m: "እቲ ሚዛን፡ ሰለስተ ፍርያት ተኸታቲሎም ኣዝዮም ፈኲሶም ከም ዘለዉ የርኢ። እንታይ ትገብር?", f: "እቲ ሚዛን፡ ሰለስተ ፍርያት ተኸታቲሎም ኣዝዮም ፈኲሶም ከም ዘለዉ የርኢ። እንታይ ትገብሪ?", x: "እቲ ሚዛን፡ ሰለስተ ፍርያት ተኸታቲሎም ኣዝዮም ፈኲሶም ከም ዘለዉ የርኢ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o1': { m: "ብኡብኡ ንሓላፊ ጉጅለኻ ንገሮ።", f: "ብኡብኡ ንሓላፊ ጉጅለኺ ንገርዮ።", x: "ብኡብኡ ንሓላፊ ጉጅለኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o2': { m: "ናብቲ መስመር መሊስካ ኣቐምጦም።", f: "ናብቲ መስመር መሊስኪ ኣቐምጥዮም።", x: "ናብቲ መስመር መሊስኩም ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.o3': { m: "ዋላ ሓንቲ ኣይትበል፡ የጋጥም እዩ።", f: "ዋላ ሓንቲ ኣይትበሊ፡ የጋጥም እዩ።", x: "ዋላ ሓንቲ ኣይትበሉ፡ የጋጥም እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.w': { m: "ሰለስተ ተኸታተልቲ ጌጋ ፍርያት ኣብቲ ማሽን ጸገም ከም ዘሎ የርእዩ። ቀልጢፍካ ምስ እትነግር፡ ዝበላሸዉ ፍርያት ይውሕዱ።", f: "ሰለስተ ተኸታተልቲ ጌጋ ፍርያት ኣብቲ ማሽን ጸገም ከም ዘሎ የርእዩ። ቀልጢፍኪ ምስ እትነግሪ፡ ዝበላሸዉ ፍርያት ይውሕዱ።", x: "ሰለስተ ተኸታተልቲ ጌጋ ፍርያት ኣብቲ ማሽን ጸገም ከም ዘሎ የርእዩ። ቀልጢፍኩም ምስ እትነግሩ፡ ዝበላሸዉ ፍርያት ይውሕዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.packing': "ምዕሻግ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verpakking': "መዐሸጊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.krimpfolie': "ዝጸብብ ፕላስቲክ (ብሙቐት ዝጸብብ ቀጢን ፕላስቲክ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sealmachine': "ማሽን ምዕጻው (ብሙቐት መዐሸጊ ዝዓጹ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulmateriaal': "መምልኢ (ኣብ ሳጹን ዝቕመጥ ናይ ኣየር ፕላስቲክ ወይ ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afbreekmes': "ኩተር (ስለቱ ዝስበር ካራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tapepistool': "መጠቐሚ ተፕ (ተፕ ፒስቶላ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.1': { m: "ኣብቲ ሳጹን መምልኢ ግበር።", f: "ኣብቲ ሳጹን መምልኢ ግበሪ።", x: "ኣብቲ ሳጹን መምልኢ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.2': { m: "ነቲ ሳጹን ብመጠቐሚ ተፕ ዕጸዎ።", f: "ነቲ ሳጹን ብመጠቐሚ ተፕ ዕጸውዮ።", x: "ነቲ ሳጹን ብመጠቐሚ ተፕ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.packing.3': { m: "እቲ ማሽን ምዕጻው ውዑይ እዩ። ተጠንቀቕ!", f: "እቲ ማሽን ምዕጻው ውዑይ እዩ። ተጠንቀቒ!", x: "እቲ ማሽን ምዕጻው ውዑይ እዩ። ተጠንቀቑ!" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.q': "ኣብ ሓደ ሳጹን ክንደይ ፍርያት ይኣቱ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing.a': "ዓሰርተው ክልተ። ኣብቲ ዝርዝር ተጻሒፉ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.packing': { m: "ካብ ሰውነትካ ንደገ ቁረጽ", f: "ካብ ሰውነትኪ ንደገ ቁረጺ", x: "ካብ ሰውነትኩም ንደገ ቁረጹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.b': { m: "ምዕሻግ ቅልጡፍ ስራሕ እዩ፡ ኩተር ድማ ኣዝዩ በሊሕ እዩ። ኩሉ ግዜ ካብ ሰውነትካን ካብቲ ካልእ ኢድካን ንደገ ቁረጽ። ድሕሪ ነፍሲ ወከፍ ምቑራጽ ነቲ ስለት መሊስካ ኣእትዎ፡ ነቲ ካራ ንሓጺር ግዜ ኣብ ታሕቲ ክተቐምጦ ከለኻ እውን። በሊሕ ዘይኮነ ቁራጽ ብጥንቃቐ ስበሮ፡ ኣብቲ ሳጹን ኣረገውቲ ስለታት ድማ ጕሓፎ፡ ኣብቲ ንቡር መጕሓፊ ኣይኮነን። እቲ ማሽን ምዕጻውን እቲ ንዝጸብብ ፕላስቲክ ዝኸውን መውዓዪ ኣየርን ኣዝዮም ይውዕዩ፡ ነቶም ውዑያት ክፍልታት ኣይትተንክፎም። ነፍሲ ወከፍ ሳጹን ድማ ፈትሽ፡ ቅኑዕ ፍርያት፡ ቅኑዕ ቁጽሪ፡ እቲ ኤቲኬት ድማ ትኽ ዝበለ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ምዕሻግ ቅልጡፍ ስራሕ እዩ፡ ኩተር ድማ ኣዝዩ በሊሕ እዩ። ኩሉ ግዜ ካብ ሰውነትኪን ካብቲ ካልእ ኢድኪን ንደገ ቁረጺ። ድሕሪ ነፍሲ ወከፍ ምቑራጽ ነቲ ስለት መሊስኪ ኣእትውዮ፡ ነቲ ካራ ንሓጺር ግዜ ኣብ ታሕቲ ክተቐምጥዮ ከለኺ እውን። በሊሕ ዘይኮነ ቁራጽ ብጥንቃቐ ስበርዮ፡ ኣብቲ ሳጹን ኣረገውቲ ስለታት ድማ ጕሓፍዮ፡ ኣብቲ ንቡር መጕሓፊ ኣይኮነን። እቲ ማሽን ምዕጻውን እቲ ንዝጸብብ ፕላስቲክ ዝኸውን መውዓዪ ኣየርን ኣዝዮም ይውዕዩ፡ ነቶም ውዑያት ክፍልታት ኣይትተንክፍዮም። ነፍሲ ወከፍ ሳጹን ድማ ፈትሺ፡ ቅኑዕ ፍርያት፡ ቅኑዕ ቁጽሪ፡ እቲ ኤቲኬት ድማ ትኽ ዝበለ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ምዕሻግ ቅልጡፍ ስራሕ እዩ፡ ኩተር ድማ ኣዝዩ በሊሕ እዩ። ኩሉ ግዜ ካብ ሰውነትኩምን ካብቲ ካልእ ኢድኩምን ንደገ ቁረጹ። ድሕሪ ነፍሲ ወከፍ ምቑራጽ ነቲ ስለት መሊስኩም ኣእትውዎ፡ ነቲ ካራ ንሓጺር ግዜ ኣብ ታሕቲ ክተቐምጥዎ ከለኹም እውን። በሊሕ ዘይኮነ ቁራጽ ብጥንቃቐ ስበርዎ፡ ኣብቲ ሳጹን ኣረገውቲ ስለታት ድማ ጕሓፍዎ፡ ኣብቲ ንቡር መጕሓፊ ኣይኮነን። እቲ ማሽን ምዕጻውን እቲ ንዝጸብብ ፕላስቲክ ዝኸውን መውዓዪ ኣየርን ኣዝዮም ይውዕዩ፡ ነቶም ውዑያት ክፍልታት ኣይትተንክፍዎም። ነፍሲ ወከፍ ሳጹን ድማ ፈትሹ፡ ቅኑዕ ፍርያት፡ ቅኑዕ ቁጽሪ፡ እቲ ኤቲኬት ድማ ትኽ ዝበለ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.p': "ቅድም ነቲ ካራ መሊሰ የእትዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.s': { m: "ነቲ ኩተር ንሓጺር ግዜ ኣብ ጠረጴዛ ተቐምጦ። እቲ ስለት ገና ወጺኡ ኣሎ። እንታይ ትገብር?", f: "ነቲ ኩተር ንሓጺር ግዜ ኣብ ጠረጴዛ ተቐምጥዮ። እቲ ስለት ገና ወጺኡ ኣሎ። እንታይ ትገብሪ?", x: "ነቲ ኩተር ንሓጺር ግዜ ኣብ ጠረጴዛ ተቐምጥዎ። እቲ ስለት ገና ወጺኡ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o1': { m: "ቅድም ነቲ ስለት መሊስካ ኣእትዎ።", f: "ቅድም ነቲ ስለት መሊስኪ ኣእትውዮ።", x: "ቅድም ነቲ ስለት መሊስኩም ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o2': { m: "ግደፎ፡ ቀልጢፉ ደጊሙ ከድልየካ እዩ።", f: "ግደፍዮ፡ ቀልጢፉ ደጊሙ ከድልየኪ እዩ።", x: "ግደፍዎ፡ ቀልጢፉ ደጊሙ ከድልየኩም እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.o3': { m: "ከምዚ ኢሉ ኣብ ጁባኻ ኣእትዎ።", f: "ከምዚ ኢሉ ኣብ ጁባኺ ኣእትውዮ።", x: "ከምዚ ኢሉ ኣብ ጁባኹም ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.w': { m: "ኣብ ጠረጴዛ ወይ ኣብ ጁባ ዘሎ ክፉት ስለት ንዓኻ ወይ ንብጻይ ስራሕካ ክቖርጽ ይኽእል። መሊስካ ምእታዉ ሓንቲ ካልኢት ይወስድ።", f: "ኣብ ጠረጴዛ ወይ ኣብ ጁባ ዘሎ ክፉት ስለት ንዓኺ ወይ ንብጻይ ስራሕኪ ክቖርጽ ይኽእል። መሊስኪ ምእታዉ ሓንቲ ካልኢት ይወስድ።", x: "ኣብ ጠረጴዛ ወይ ኣብ ጁባ ዘሎ ክፉት ስለት ንዓኹም ወይ ንብጻይ ስራሕኩም ክቖርጽ ይኽእል። መሊስኩም ምእታዉ ሓንቲ ካልኢት ይወስድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.upkeep': "ክንክን ማሽን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persluchtpistool': "ፒስቶላ ጸቕጢ ኣየር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steeksleutel': "ክፉት መፍትሕ (ቻቨ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliekannetje': "ንእሽቶ ጣኒካ ዘይቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeerpistool': "ፒስቶላ ግራሶ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekbak': "መቐበሊ ዘይቲ (ዝፈስስ ዘይቲ ይቕበል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.poetsdoek': "ጨርቂ መጽረዪ", // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.1': { m: "ዘይቲ ይፈስስ ኣሎ። ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲኡ ኣቐምጦ።", f: "ዘይቲ ይፈስስ ኣሎ። ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲኡ ኣቐምጥዮ።", x: "ዘይቲ ይፈስስ ኣሎ። ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲኡ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.2': { m: "ነቲ ዘይቲ ብጨርቂ መጽረዪ ኣልግሶ።", f: "ነቲ ዘይቲ ብጨርቂ መጽረዪ ኣልግስዮ።", x: "ነቲ ዘይቲ ብጨርቂ መጽረዪ ኣልግስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.upkeep.3': { m: "ነቲ ፒስቶላ ጸቕጢ ኣየር ፈጺምካ ናብ ሰብ ኣይተቕንዖ።", f: "ነቲ ፒስቶላ ጸቕጢ ኣየር ፈጺምኪ ናብ ሰብ ኣይተቕንዕዮ።", x: "ነቲ ፒስቶላ ጸቕጢ ኣየር ፈጺምኩም ናብ ሰብ ኣይተቕንዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.q': "ነቲ ማሽን መዓስ ግራሶ ንገብረሉ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep.a': "ኩሉ ሰኑይ፡ ቅድሚ እቲ ቀዳማይ ፈረቓ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.upkeep': "ጽሩይ ማሽን ጸገማቱ የርኢ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.b': { m: "ንእሽቶ ክንክን ብዙሕ ግዜ ክፋል ናይቲ ስራሕ እዩ፡ ምጽራግ፡ ዘይቲ ምግባርን ግራሶ ምግባርን። ነዚ እቲ ማሽን ጠፊኡ ከሎ፡ ብኸመይ ከም ዝግበር ምስ ተማሃርካ ጥራይ ግበሮ። ጽሩይ ማሽን ንምፍታሽ ቀሊል እዩ፡ ዝፈስስ ዘይቲ ወይ ልሕሉሕ ክፋል ብኡብኡ ትርኢ። ኣብ መሬት ዘሎ ዘይቲ ሰብ ከም ዝወድቕ ይገብር። ኣብ ትሕቲ እቲ ዝፈስስ መቐበሊ ዘይቲ ኣቐምጥ፡ ነቲ መሬት ኣጽሪ፡ ንሓላፊ ጉጅለኻ ድማ ንገሮ። ዘይቲ ዘለዎም ጨርቂታት ኣብቲ ፍሉይ መጕሓፊ ጕሓፎም። ፒስቶላ ጸቕጢ ኣየር ፈጺምካ ናብ ሰብ ኣይተቕንዕ፡ ክዳንካ ወይ ቆርበትካ ድማ ፈጺምካ ብኡ ኣይተጽሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንእሽቶ ክንክን ብዙሕ ግዜ ክፋል ናይቲ ስራሕ እዩ፡ ምጽራግ፡ ዘይቲ ምግባርን ግራሶ ምግባርን። ነዚ እቲ ማሽን ጠፊኡ ከሎ፡ ብኸመይ ከም ዝግበር ምስ ተማሃርኪ ጥራይ ግበርዮ። ጽሩይ ማሽን ንምፍታሽ ቀሊል እዩ፡ ዝፈስስ ዘይቲ ወይ ልሕሉሕ ክፋል ብኡብኡ ትርእዪ። ኣብ መሬት ዘሎ ዘይቲ ሰብ ከም ዝወድቕ ይገብር። ኣብ ትሕቲ እቲ ዝፈስስ መቐበሊ ዘይቲ ኣቐምጢ፡ ነቲ መሬት ኣጽርዪ፡ ንሓላፊ ጉጅለኺ ድማ ንገርዮ። ዘይቲ ዘለዎም ጨርቂታት ኣብቲ ፍሉይ መጕሓፊ ጕሓፍዮም። ፒስቶላ ጸቕጢ ኣየር ፈጺምኪ ናብ ሰብ ኣይተቕንዒ፡ ክዳንኪ ወይ ቆርበትኪ ድማ ፈጺምኪ ብኡ ኣይተጽርዪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንእሽቶ ክንክን ብዙሕ ግዜ ክፋል ናይቲ ስራሕ እዩ፡ ምጽራግ፡ ዘይቲ ምግባርን ግራሶ ምግባርን። ነዚ እቲ ማሽን ጠፊኡ ከሎ፡ ብኸመይ ከም ዝግበር ምስ ተማሃርኩም ጥራይ ግበርዎ። ጽሩይ ማሽን ንምፍታሽ ቀሊል እዩ፡ ዝፈስስ ዘይቲ ወይ ልሕሉሕ ክፋል ብኡብኡ ትርእዩ። ኣብ መሬት ዘሎ ዘይቲ ሰብ ከም ዝወድቕ ይገብር። ኣብ ትሕቲ እቲ ዝፈስስ መቐበሊ ዘይቲ ኣቐምጡ፡ ነቲ መሬት ኣጽርዩ፡ ንሓላፊ ጉጅለኹም ድማ ንገርዎ። ዘይቲ ዘለዎም ጨርቂታት ኣብቲ ፍሉይ መጕሓፊ ጕሓፍዎም። ፒስቶላ ጸቕጢ ኣየር ፈጺምኩም ናብ ሰብ ኣይተቕንዑ፡ ክዳንኩም ወይ ቆርበትኩም ድማ ፈጺምኩም ብኡ ኣይተጽርዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.p': "እቲ ማሽን ዘይቲ የፍስስ ኣሎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.s': { m: "ኣብ ትሕቲ እቲ ማሽን ንእሽቶ ዝተኣከበ ዘይቲ ትርኢ። እንታይ ትገብር?", f: "ኣብ ትሕቲ እቲ ማሽን ንእሽቶ ዝተኣከበ ዘይቲ ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ ትሕቲ እቲ ማሽን ንእሽቶ ዝተኣከበ ዘይቲ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o1': { m: "ኣብ ትሕቲኡ መቐበሊ ዘይቲ ኣቐምጥ፡ ሕበሮ ድማ።", f: "ኣብ ትሕቲኡ መቐበሊ ዘይቲ ኣቐምጢ፡ ሕበርዮ ድማ።", x: "ኣብ ትሕቲኡ መቐበሊ ዘይቲ ኣቐምጡ፡ ሕበርዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o2': { m: "ግደፎ፡ ቁሩብ ጥራይ እዩ።", f: "ግደፍዮ፡ ቁሩብ ጥራይ እዩ።", x: "ግደፍዎ፡ ቁሩብ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.o3': { m: "ቁሩብ ወረቐት ኣንብረሉ፡ ቀጽል ድማ።", f: "ቁሩብ ወረቐት ኣንብርሉ፡ ቀጽሊ ድማ።", x: "ቁሩብ ወረቐት ኣንብሩሉ፡ ቀጽሉ ድማ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.w': "ዝፈስስ ዘይቲ ይዓቢ፡ ኣብ መሬት ዘሎ ዘይቲ ድማ ሰባት የውድቕ። ኣቐዲሙ እንተ ተረኺቡ፡ ንእሽቶ ጽገና እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'u.install': "ኤሌክትሪክ፡ ቱቦታትን ሓጺንን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wiring': "ሽቦታት ምርኻብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draad': "ሽቦ (ሓደ ሽቦ፡ ኣብ ውሽጢ ገመድ ኤሌክትሪክ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stopcontact': "ሶኬት (ኣብ መንደቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schakelaar': "መወልዒ (ናይ መብራህቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lasklem': "መራኸቢ ሽቦ (ሽቦታት የራኽብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.striptang': "ፒንሳ መቐንጠጢ ሽቦ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kabelgoot': "መሕለፊ ገመዳት (ቦይ ንገመዳት ኤሌክትሪክ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.1': { m: "ካብቲ ሽቦ ሓደ ሴንቲሜተር ፕላስቲክ ኣልግስ።", f: "ካብቲ ሽቦ ሓደ ሴንቲሜተር ፕላስቲክ ኣልግሲ።", x: "ካብቲ ሽቦ ሓደ ሴንቲሜተር ፕላስቲክ ኣልግሱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.2': { m: "ነቶም ሽቦታት ኣብቲ መራኸቢ ሽቦ ኣጽንዖም።", f: "ነቶም ሽቦታት ኣብቲ መራኸቢ ሽቦ ኣጽንዕዮም።", x: "ነቶም ሽቦታት ኣብቲ መራኸቢ ሽቦ ኣጽንዕዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wiring.3': "እቶም ገመዳት ኤሌክትሪክ ናብቲ መሕለፊ ገመዳት ይኣትዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.q': "ኣየናይ ሽቦ ናበይ ይኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring.a': "ቡናዊ ምስ ቡናዊ፡ ሰማያዊ ምስ ሰማያዊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wiring': "ሕብሪ እቲ ሽቦ ስርሑ ይነግር", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.b': { m: "ኣብ ህንጻ፡ ሽቦታት ዝተወሰኑ ሕብርታት ኣለዎም። ቡናዊ (ሓደ ሓደ ግዜ ጸሊም ወይ ሓሙኽሽቲ) ኤሌክትሪክ የምጽእ። ሰማያዊ ይምለስ። ቀጠልያን ብጫን ሽቦ መሬት እዩ፡ ንሰባት ይከላኸል፡ ንኻልእ ነገር ድማ ፈጺሙ ኣይውዕልን። ተመሳሳሊ ሕብሪ ምስ ተመሳሳሊ ሕብሪ ኣራኽብ። ኣብቲ መራኸቢ ዝኣቱ ክንዲ ጥራይ ኣልግስ፡ ጥራዩ ዘሎ መዳብ ክወጽእ የብሉን። ነቲ ሽቦ ኣእትዎ፡ ድሕሪኡ ጽኑዕ ምዃኑ ንምርግጋጽ ቀስ ኢልካ ሰሓቦ። ኣየናይ ሽቦ እንታይ ምዃኑ ርግጸኛ ኣይኮንካን? ደው በል፡ ሕተት ድማ።", f: "ኣብ ህንጻ፡ ሽቦታት ዝተወሰኑ ሕብርታት ኣለዎም። ቡናዊ (ሓደ ሓደ ግዜ ጸሊም ወይ ሓሙኽሽቲ) ኤሌክትሪክ የምጽእ። ሰማያዊ ይምለስ። ቀጠልያን ብጫን ሽቦ መሬት እዩ፡ ንሰባት ይከላኸል፡ ንኻልእ ነገር ድማ ፈጺሙ ኣይውዕልን። ተመሳሳሊ ሕብሪ ምስ ተመሳሳሊ ሕብሪ ኣራኽቢ። ኣብቲ መራኸቢ ዝኣቱ ክንዲ ጥራይ ኣልግሲ፡ ጥራዩ ዘሎ መዳብ ክወጽእ የብሉን። ነቲ ሽቦ ኣእትውዮ፡ ድሕሪኡ ጽኑዕ ምዃኑ ንምርግጋጽ ቀስ ኢልኪ ሰሓብዮ። ኣየናይ ሽቦ እንታይ ምዃኑ ርግጸኛ ኣይኮንክን? ደው በሊ፡ ሕተቲ ድማ።", x: "ኣብ ህንጻ፡ ሽቦታት ዝተወሰኑ ሕብርታት ኣለዎም። ቡናዊ (ሓደ ሓደ ግዜ ጸሊም ወይ ሓሙኽሽቲ) ኤሌክትሪክ የምጽእ። ሰማያዊ ይምለስ። ቀጠልያን ብጫን ሽቦ መሬት እዩ፡ ንሰባት ይከላኸል፡ ንኻልእ ነገር ድማ ፈጺሙ ኣይውዕልን። ተመሳሳሊ ሕብሪ ምስ ተመሳሳሊ ሕብሪ ኣራኽቡ። ኣብቲ መራኸቢ ዝኣቱ ክንዲ ጥራይ ኣልግሱ፡ ጥራዩ ዘሎ መዳብ ክወጽእ የብሉን። ነቲ ሽቦ ኣእትውዎ፡ ድሕሪኡ ጽኑዕ ምዃኑ ንምርግጋጽ ቀስ ኢልኩም ሰሓብዎ። ኣየናይ ሽቦ እንታይ ምዃኑ ርግጸኛ ኣይኮንኩምን? ደው በሉ፡ ሕተቱ ድማ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.p': "ሽቦ መሬት ኣየናይ ሕብሪ እዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.s': { m: "መብራህቲ ተራኽብ ኣለኻ። ቁራጽ መዳብ ካብቲ መራኸቢ ወጺኡ ኣሎ። እንታይ ትገብር?", f: "መብራህቲ ተራኽቢ ኣለኺ። ቁራጽ መዳብ ካብቲ መራኸቢ ወጺኡ ኣሎ። እንታይ ትገብሪ?", x: "መብራህቲ ተራኽቡ ኣለኹም። ቁራጽ መዳብ ካብቲ መራኸቢ ወጺኡ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o1': { m: "ኣሕጽሮ፡ ደጊምካ ድማ ኣራኽብ።", f: "ኣሕጽርዮ፡ ደጊምኪ ድማ ኣራኽቢ።", x: "ኣሕጽርዎ፡ ደጊምኩም ድማ ኣራኽቡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o2': { m: "ግደፎ፡ እቲ መብራህቲ ይሰርሕ እዩ።", f: "ግደፍዮ፡ እቲ መብራህቲ ይሰርሕ እዩ።", x: "ግደፍዎ፡ እቲ መብራህቲ ይሰርሕ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.o3': { m: "ኣብ ዙርያኡ ቁራጽ ተፕ ጠቕልለሉ።", f: "ኣብ ዙርያኡ ቁራጽ ተፕ ጠቕልልሉ።", x: "ኣብ ዙርያኡ ቁራጽ ተፕ ጠቕልሉሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.wiring.w': "ካብ መራኸቢ ወጻኢ ዘሎ ጥራዩ መዳብ ንገለ ነገር ክትንክፍ ይኽእል። እዚ ብኤሌክትሪክ ምህራም ወይ ሾርት ከስዕብ ይኽእል፡ ድሕሪ ኣዋርሕ እውን።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.testing': "ምዕቃንን ብውሕስነት ምስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.multimeter': "መልቲሜተር (ኤሌክትሪክ ይዕቅን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spanningzoeker': "መርመሪ ኤሌክትሪክ (ካቻቪተ ምስ ንእሽቶ መብራህቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterkast': "ሳጹን ፊውዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zekering': "ፊውዝ (ጌጋ ምስ ዝህሉ ኤሌክትሪክ የቋርጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hangslot': "ሉኬቶ (ዝሕንጠጥ ቁልፊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aardedraad': "ሽቦ መሬት (ቀጠልያን ብጫን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.1': "እቲ ፊውዝ ወዲቑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.2': { m: "ኣብቲ መወልዒ ሉኬቶ ግበረሉ።", f: "ኣብቲ መወልዒ ሉኬቶ ግበርሉ።", x: "ኣብቲ መወልዒ ሉኬቶ ግበሩሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.testing.3': { m: "ቅድም ብመልቲሜተር ዓቅን።", f: "ቅድም ብመልቲሜተር ዓቅኒ።", x: "ቅድም ብመልቲሜተር ዓቅኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.q': "ነቲ ሳጹን ፊውዝ ክኸፍቶ ይፍቀደኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing.a': "ኣይፋል፡ እዚ ኤሌክትሪሻን እዩ ዝገብሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.testing': "ጠፊኡ፡ ተቖሊፉ፡ ተዓቂኑ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.b': { m: "ኣብ ኤሌክትሪክ ቅድሚ ምስራሕካ፡ ሰለስተ ስጉምትታት ውሰድ። ኣጥፍእ፡ ኣብ ሳጹን ፊውዝ ዘሎ ቅኑዕ ፊውዝ፡ ኣብ መንደቕ ዘሎ መወልዒ ጥራይ ኣይኮነን። ቆልፍ፡ ናትካ ሉኬቶ ግበረሉ፡ ዝኾነ ሰብ ደጊሙ ከይውልዖ ድማ እቲ መፍትሕ ምሳኻ ሓዞ። ዓቅን፡ ብመርመሪ ኤሌክትሪክ ወይ ብመልቲሜተር ብሓቂ ኤሌክትሪክ ከም ዘየለ ኣረጋግጽ። ድሕሪኡ ጥራይ ትጅምር። ፊውዝ ደጋጊሙ ይወድቕ ድዩ? ምውላዕ ኣይትቀጽል፡ ንተቖጻጻሪኻ ንገሮ። ክትገብሮ ከም ዝፍቀደልካ ምስ ተነግረካ ጥራይ ናይ ኤሌክትሪክ ስራሕ ግበር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ኤሌክትሪክ ቅድሚ ምስራሕኪ፡ ሰለስተ ስጉምትታት ውሰዲ። ኣጥፍኢ፡ ኣብ ሳጹን ፊውዝ ዘሎ ቅኑዕ ፊውዝ፡ ኣብ መንደቕ ዘሎ መወልዒ ጥራይ ኣይኮነን። ቆልፊ፡ ናትኪ ሉኬቶ ግበርሉ፡ ዝኾነ ሰብ ደጊሙ ከይውልዖ ድማ እቲ መፍትሕ ምሳኺ ሓዝዮ። ዓቅኒ፡ ብመርመሪ ኤሌክትሪክ ወይ ብመልቲሜተር ብሓቂ ኤሌክትሪክ ከም ዘየለ ኣረጋግጺ። ድሕሪኡ ጥራይ ትጅምሪ። ፊውዝ ደጋጊሙ ይወድቕ ድዩ? ምውላዕ ኣይትቀጽሊ፡ ንተቖጻጻሪኺ ንገርዮ። ክትገብርዮ ከም ዝፍቀደልኪ ምስ ተነግረኪ ጥራይ ናይ ኤሌክትሪክ ስራሕ ግበሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ኤሌክትሪክ ቅድሚ ምስራሕኩም፡ ሰለስተ ስጉምትታት ውሰዱ። ኣጥፍኡ፡ ኣብ ሳጹን ፊውዝ ዘሎ ቅኑዕ ፊውዝ፡ ኣብ መንደቕ ዘሎ መወልዒ ጥራይ ኣይኮነን። ቆልፉ፡ ናትኩም ሉኬቶ ግበሩሉ፡ ዝኾነ ሰብ ደጊሙ ከይውልዖ ድማ እቲ መፍትሕ ምሳኹም ሓዝዎ። ዓቅኑ፡ ብመርመሪ ኤሌክትሪክ ወይ ብመልቲሜተር ብሓቂ ኤሌክትሪክ ከም ዘየለ ኣረጋግጹ። ድሕሪኡ ጥራይ ትጅምሩ። ፊውዝ ደጋጊሙ ይወድቕ ድዩ? ምውላዕ ኣይትቀጽሉ፡ ንተቖጻጻሪኹም ንገርዎ። ክትገብርዎ ከም ዝፍቀደልኩም ምስ ተነግረኩም ጥራይ ናይ ኤሌክትሪክ ስራሕ ግበሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.p': "ደጊም ኤሌክትሪክ የብሉን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.s': { m: "ነቲ ፊውዝ ኣጥፊእካዮ። ብጻይ ስራሕ ይብል፡ «ሕጂ ጀምር፡ ጠፊኡ እዩ።» እንታይ ትገብር?", f: "ነቲ ፊውዝ ኣጥፊእክዮ። ብጻይ ስራሕ ይብል፡ «ሕጂ ጀምሪ፡ ጠፊኡ እዩ።» እንታይ ትገብሪ?", x: "ነቲ ፊውዝ ኣጥፊእኩምዎ። ብጻይ ስራሕ ይብል፡ «ሕጂ ጀምሩ፡ ጠፊኡ እዩ።» እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o1': { m: "ቆልፎ፡ ቅድም ድማ ዓቅን።", f: "ቆልፍዮ፡ ቅድም ድማ ዓቅኒ።", x: "ቆልፍዎ፡ ቅድም ድማ ዓቅኑ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o2': { m: "ጀምር፡ ብጻይ ስራሕካ ይፈልጦ እዩ።", f: "ጀምሪ፡ ብጻይ ስራሕኪ ይፈልጦ እዩ።", x: "ጀምሩ፡ ብጻይ ስራሕኩም ይፈልጦ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.o3': { m: "ንምርግጋጽ ነቲ ሽቦ ቀልጢፍካ ተንክፎ።", f: "ንምርግጋጽ ነቲ ሽቦ ቀልጢፍኪ ተንክፍዮ።", x: "ንምርግጋጽ ነቲ ሽቦ ቀልጢፍኩም ተንክፍዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.w': "ሓደ ሓደ ግዜ ጌጋ ፊውዝ እዩ ዝጠፍእ፡ ወይ ሓደ ሰብ ደጊሙ ይውልዖ። ሉኬቶን ምዕቃንን ብሓቂ ውሑስ ምዃኑ የርእዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pipes': "ቱቦታትን ማይን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buis': "ቱቦ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koppeling': "መራኸቢ ቱቦ (ክልተ ቱቦታት የራኽብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijpsnijder': "መቑረጺ ቱቦ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waterpomptang': "ዝስተኻኸል ፒንሳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiter': "መዕጸዊ ማይ (ነቲ ማይ ይዓጹ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teflontape': "ተፕ ቴፍሎን (ጻዕዳ ተፕ ንጥምዘት ቱቦ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.1': { m: "ነቲ መዕጸዊ ማይ ዕጸዎ።", f: "ነቲ መዕጸዊ ማይ ዕጸውዮ።", x: "ነቲ መዕጸዊ ማይ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.2': { m: "ነቲ ቱቦ ብመቑረጺ ቱቦ ቁረጾ።", f: "ነቲ ቱቦ ብመቑረጺ ቱቦ ቁረጽዮ።", x: "ነቲ ቱቦ ብመቑረጺ ቱቦ ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pipes.3': { m: "ኣብ ዙርያ እቲ ጥምዘት ተፕ ቴፍሎን ጠቕልል።", f: "ኣብ ዙርያ እቲ ጥምዘት ተፕ ቴፍሎን ጠቕልሊ።", x: "ኣብ ዙርያ እቲ ጥምዘት ተፕ ቴፍሎን ጠቕልሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.q': "እቲ መራኸቢ ቱቦ ገና የፍስስ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes.a': "ቁሩብ። ቁሩብ ወሲኸ ከጽንዖ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pipes': "ቅድም ማይ ምዕጻው፡ ባልዲ ድማ ድሉው", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.b': { m: "ቱቦ ማይ ቅድሚ ምኽፋትካ፡ ነቲ መዕጸዊ ማይ ዕጸዎ። ድሕሪኡ እቲ ቱቦ ባዶ ምእንቲ ክኸውን፡ ኣብ ታሕቲ ዘሎ ቡምባ ክፈት። ኣብ ትሕቲ እትሰርሓሉ ቦታ ባልድን ጨርቅን ኣቐምጥ። ቱቦ መዳብ ብመቑረጺ ቱቦ ቁረጾ፡ ብመጋዝ ኣይኮነን፡ እቲ ጫፍ ክቡብን ጽሩይን ይጸንሕ። መራኸቢ ቱቦ ኣጸቢቕካ ኣጽንዖ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ምስ ወዳእካ፡ ነቲ ማይ ቀስ ኢልካ ክፈቶ፡ ነጠብጣብ ድማ ድለ። እትገድፎ ንእሽቶ ፍሳስ ናብ ጉድኣት ማይ ይቕየር።", f: "ቱቦ ማይ ቅድሚ ምኽፋትኪ፡ ነቲ መዕጸዊ ማይ ዕጸውዮ። ድሕሪኡ እቲ ቱቦ ባዶ ምእንቲ ክኸውን፡ ኣብ ታሕቲ ዘሎ ቡምባ ክፈቲ። ኣብ ትሕቲ እትሰርሕሉ ቦታ ባልድን ጨርቅን ኣቐምጢ። ቱቦ መዳብ ብመቑረጺ ቱቦ ቁረጽዮ፡ ብመጋዝ ኣይኮነን፡ እቲ ጫፍ ክቡብን ጽሩይን ይጸንሕ። መራኸቢ ቱቦ ኣጸቢቕኪ ኣጽንዕዮ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ምስ ወዳእኪ፡ ነቲ ማይ ቀስ ኢልኪ ክፈትዮ፡ ነጠብጣብ ድማ ድለዪ። እትገድፍዮ ንእሽቶ ፍሳስ ናብ ጉድኣት ማይ ይቕየር።", x: "ቱቦ ማይ ቅድሚ ምኽፋትኩም፡ ነቲ መዕጸዊ ማይ ዕጸውዎ። ድሕሪኡ እቲ ቱቦ ባዶ ምእንቲ ክኸውን፡ ኣብ ታሕቲ ዘሎ ቡምባ ክፈቱ። ኣብ ትሕቲ እትሰርሑሉ ቦታ ባልድን ጨርቅን ኣቐምጡ። ቱቦ መዳብ ብመቑረጺ ቱቦ ቁረጽዎ፡ ብመጋዝ ኣይኮነን፡ እቲ ጫፍ ክቡብን ጽሩይን ይጸንሕ። መራኸቢ ቱቦ ኣጸቢቕኩም ኣጽንዕዎ፡ ግን ልዕሊ ዓቐን ኣይኮነን። ምስ ወዳእኩም፡ ነቲ ማይ ቀስ ኢልኩም ክፈትዎ፡ ነጠብጣብ ድማ ድለዩ። እትገድፍዎ ንእሽቶ ፍሳስ ናብ ጉድኣት ማይ ይቕየር።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.p': "እቲ ማይ ተዓጽዩ ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.s': { m: "ሓድሽ መራኸቢ ቱቦ ገይርካ። ነቲ ማይ ትኸፍቶ። ኣብ ደቒቕ ሓንቲ ንእሽቶ ነጠብጣብ ትወድቕ። እንታይ ትገብር?", f: "ሓድሽ መራኸቢ ቱቦ ገይርኪ። ነቲ ማይ ትኸፍትዮ። ኣብ ደቒቕ ሓንቲ ንእሽቶ ነጠብጣብ ትወድቕ። እንታይ ትገብሪ?", x: "ሓድሽ መራኸቢ ቱቦ ገይርኩም። ነቲ ማይ ትኸፍትዎ። ኣብ ደቒቕ ሓንቲ ንእሽቶ ነጠብጣብ ትወድቕ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o1': { m: "ነቲ ማይ ዕጸዎ፡ ኣጽንዖ ወይ ደጊምካ ስርሖ።", f: "ነቲ ማይ ዕጸውዮ፡ ኣጽንዕዮ ወይ ደጊምኪ ስርሕዮ።", x: "ነቲ ማይ ዕጸውዎ፡ ኣጽንዕዎ ወይ ደጊምኩም ስርሕዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o2': { m: "ግደፎ፡ ሓንቲ ነጠብጣብ ጥራይ እያ።", f: "ግደፍዮ፡ ሓንቲ ነጠብጣብ ጥራይ እያ።", x: "ግደፍዎ፡ ሓንቲ ነጠብጣብ ጥራይ እያ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.o3': { m: "ኣብ ትሕቲኡ ባልዲ ኣቐምጥ፡ ናብ ገዛ ድማ ኪድ።", f: "ኣብ ትሕቲኡ ባልዲ ኣቐምጢ፡ ናብ ገዛ ድማ ኪዲ።", x: "ኣብ ትሕቲኡ ባልዲ ኣቐምጡ፡ ናብ ገዛ ድማ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.w': "ኣብ ደቒቕ ሓንቲ ነጠብጣብ፡ ኣብ ሰሙን ብዙሕ ሊትሮ እዩ። እቲ ማይ ነቲ መሬት ወይ ኣብ ታሕቲ ዘሎ ናሕሲ ክጎድእ ይኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.metalwork': "ምስራሕ ሓጺን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankschroef': "ሞርሳ (ኣብ ጠረጴዛ ስራሕ ኣካል ኣጽኒዑ ይሕዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vijl': "ሊማ (ብኢድ ሓጺን ንምልማጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ijzerzaag': "መጋዝ ሓጺን (ንሓጺን ዝኸውን መጋዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kolomboormachine': "መሰርሒ ኮሎና (ኣብ መቐመጢ ዘሎ ዓቢ መሰርሒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draadtap': "መጠምዘዚ ጉድጓድ (ኣብ ጉድጓድ ጥምዘት ይቖርጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.braam': "በሊሕ ተረፍ (ድሕሪ ምቑራጽ ሓጺን ዝተርፍ በሊሕ ወሰን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.1': { m: "ነቲ ሓጺን ኣብ ሞርሳ ኣጽንዖ።", f: "ነቲ ሓጺን ኣብ ሞርሳ ኣጽንዕዮ።", x: "ነቲ ሓጺን ኣብ ሞርሳ ኣጽንዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.2': { m: "ነቲ በሊሕ ተረፍ ብሊማ ኣልግሶ።", f: "ነቲ በሊሕ ተረፍ ብሊማ ኣልግስዮ።", x: "ነቲ በሊሕ ተረፍ ብሊማ ኣልግስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.metalwork.3': { m: "ኣእዳውካ ካብቲ መሰርሒ ኣርሕቕ።", f: "ኣእዳውኪ ካብቲ መሰርሒ ኣርሕቒ።", x: "ኣእዳውኩም ካብቲ መሰርሒ ኣርሕቑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.q': "እቲ ወሰን ስለምንታይ ከምዚ ኣዝዩ በሊሕ ኮይኑ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork.a': "ገና በሊሕ ተረፍ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.metalwork': { m: "ኣጽንዖ፡ ፈጺምካ ብኢድ ኣይትሓዞ", f: "ኣጽንዕዮ፡ ፈጺምኪ ብኢድ ኣይትሓዝዮ", x: "ኣጽንዕዎ፡ ፈጺምኩም ብኢድ ኣይትሓዝዎ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.b': { m: "ኣብ መሰርሒ ኮሎና፡ ንእሽቶ ኣካል ፈጺምካ ብኢድካ ኣይትሓዝ። እቲ መሰርሒ ክሕዞ፡ ኣዝዩ ቀልጢፉ ድማ ከዙሮ ይኽእል። ኣብ ሞርሳ ኣጽንዖ። ነዊሕ ጸጉሪ ንድሕሪት እሰሮ፡ ኣብ ዝዞር መሰርሒ ድማ ጓንቲ ኣይትግበር፡ ጓንቲ ናብ ውሽጢ ክስሕብ ይኽእል። መከላኸሊ መነጽር ግበር። ድሕሪ ብመጋዝ ምቑራጽ ወይ ምብሳዕ፡ ሓጺን በሊሕ ተረፍ ይህልዎ፡ በሊሕ ወሰን። ነቲ ኣካል ብኢድካ ቅድሚ ምሓዝካ ወይ ንኻልእ ቅድሚ ምሃብካ፡ ብሊማ ኣልግሶ። ስብርባራት ሓጺን ብብሩሽ ኣልግሶም፡ ብኢድካ ኣይኮነን።", f: "ኣብ መሰርሒ ኮሎና፡ ንእሽቶ ኣካል ፈጺምኪ ብኢድኪ ኣይትሓዚ። እቲ መሰርሒ ክሕዞ፡ ኣዝዩ ቀልጢፉ ድማ ከዙሮ ይኽእል። ኣብ ሞርሳ ኣጽንዕዮ። ነዊሕ ጸጉሪ ንድሕሪት እሰርዮ፡ ኣብ ዝዞር መሰርሒ ድማ ጓንቲ ኣይትግበሪ፡ ጓንቲ ናብ ውሽጢ ክስሕብ ይኽእል። መከላኸሊ መነጽር ግበሪ። ድሕሪ ብመጋዝ ምቑራጽ ወይ ምብሳዕ፡ ሓጺን በሊሕ ተረፍ ይህልዎ፡ በሊሕ ወሰን። ነቲ ኣካል ብኢድኪ ቅድሚ ምሓዝኪ ወይ ንኻልእ ቅድሚ ምሃብኪ፡ ብሊማ ኣልግስዮ። ስብርባራት ሓጺን ብብሩሽ ኣልግስዮም፡ ብኢድኪ ኣይኮነን።", x: "ኣብ መሰርሒ ኮሎና፡ ንእሽቶ ኣካል ፈጺምኩም ብኢድኩም ኣይትሓዙ። እቲ መሰርሒ ክሕዞ፡ ኣዝዩ ቀልጢፉ ድማ ከዙሮ ይኽእል። ኣብ ሞርሳ ኣጽንዕዎ። ነዊሕ ጸጉሪ ንድሕሪት እሰርዎ፡ ኣብ ዝዞር መሰርሒ ድማ ጓንቲ ኣይትግበሩ፡ ጓንቲ ናብ ውሽጢ ክስሕብ ይኽእል። መከላኸሊ መነጽር ግበሩ። ድሕሪ ብመጋዝ ምቑራጽ ወይ ምብሳዕ፡ ሓጺን በሊሕ ተረፍ ይህልዎ፡ በሊሕ ወሰን። ነቲ ኣካል ብኢድኩም ቅድሚ ምሓዝኩም ወይ ንኻልእ ቅድሚ ምሃብኩም፡ ብሊማ ኣልግስዎ። ስብርባራት ሓጺን ብብሩሽ ኣልግስዎም፡ ብኢድኩም ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.p': "ቅድም የጽንዖ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.s': { m: "ኣብ ንእሽቶ ቁራጽ ሓጺን ጉድጓድ ክትገብር ኣለካ። እቲ ሞርሳ ኣብ ካልእ ጠረጴዛ እዩ ዘሎ። እንታይ ትገብር?", f: "ኣብ ንእሽቶ ቁራጽ ሓጺን ጉድጓድ ክትገብሪ ኣለኪ። እቲ ሞርሳ ኣብ ካልእ ጠረጴዛ እዩ ዘሎ። እንታይ ትገብሪ?", x: "ኣብ ንእሽቶ ቁራጽ ሓጺን ጉድጓድ ክትገብሩ ኣለኩም። እቲ ሞርሳ ኣብ ካልእ ጠረጴዛ እዩ ዘሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o1': { m: "ነቲ ሞርሳ ኣምጽኦ፡ ነቲ ቁራጽ ድማ ኣጽንዖ።", f: "ነቲ ሞርሳ ኣምጽእዮ፡ ነቲ ቁራጽ ድማ ኣጽንዕዮ።", x: "ነቲ ሞርሳ ኣምጽእዎ፡ ነቲ ቁራጽ ድማ ኣጽንዕዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o2': { m: "ብኢድካ ኣጽኒዕካ ሓዞ።", f: "ብኢድኪ ኣጽኒዕኪ ሓዝዮ።", x: "ብኢድኩም ኣጽኒዕኩም ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.o3': { m: "ጓንቲ ግበር፡ ሓዞ ድማ።", f: "ጓንቲ ግበሪ፡ ሓዝዮ ድማ።", x: "ጓንቲ ግበሩ፡ ሓዝዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.w': { m: "መሰርሒ ንእሽቶ ኣካል ሒዙ ከዙሮ ይኽእል። ሽዑ ንኢድካ ይወቕዓ። ኣብ ሞርሳ ግን ደው ኢሉ ይጸንሕ።", f: "መሰርሒ ንእሽቶ ኣካል ሒዙ ከዙሮ ይኽእል። ሽዑ ንኢድኪ ይወቕዓ። ኣብ ሞርሳ ግን ደው ኢሉ ይጸንሕ።", x: "መሰርሒ ንእሽቶ ኣካል ሒዙ ከዙሮ ይኽእል። ሽዑ ንኢድኩም ይወቕዓ። ኣብ ሞርሳ ግን ደው ኢሉ ይጸንሕ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'u.montage': "ምግጣምን ምትኻልን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.assembly': "ኣብ መስመር ምግጣም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkinstructie': "መምርሒ ስራሕ (ደረጃታት ዘለዎ ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenbak': "ሳጹን ክፍልታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mal': "መትሓዚ (ነቲ ክፋል ኣብ ቅኑዕ ቦታ ይሕዞ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolbaan': "ሮላት ዘለዎ መስመር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.montagetafel': "ጠረጴዛ ምግጣም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voetpedaal': "ፔዳል እግሪ (ብእግሪ ዝጥወቕ መጠወቒ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.1': { m: "ቅድም ነቲ መምርሒ ስራሕ ኣንብቦ።", f: "ቅድም ነቲ መምርሒ ስራሕ ኣንብብዮ።", x: "ቅድም ነቲ መምርሒ ስራሕ ኣንብብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.2': "እቲ ሳጹን ክፍልታት ዳርጋ ጥራሑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.assembly.3': { m: "ነቲ ክፋል ኣብቲ መትሓዚ ኣቐምጦ።", f: "ነቲ ክፋል ኣብቲ መትሓዚ ኣቐምጥዮ።", x: "ነቲ ክፋል ኣብቲ መትሓዚ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.q': "ሕጂ ኣየናይ ደረጃ እዩ ዝመጽእ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly.a': { m: "ደረጃ ኣርባዕተ። ኣብቲ መምርሒ ስራሕ ርአ።", f: "ደረጃ ኣርባዕተ። ኣብቲ መምርሒ ስራሕ ርኣዪ።", x: "ደረጃ ኣርባዕተ። ኣብቲ መምርሒ ስራሕ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.assembly': { m: "ነቶም ደረጃታት ብተመሳሳሊ ስርዓት ስዓቦም", f: "ነቶም ደረጃታት ብተመሳሳሊ ስርዓት ስዓብዮም", x: "ነቶም ደረጃታት ብተመሳሳሊ ስርዓት ስዓብዎም" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.b': { m: "ኣብ መስመር ምግጣም ነፍሲ ወከፍ ደረጃ ቦታኡን ስርዓቱን ኣለዎ። እቲ መምርሒ ስራሕ የርእዮም፡ ብዙሕ ግዜ ምስ ስእልታት። ነቶም ደረጃታት ኩሉ ግዜ ብተመሳሳሊ ስርዓት ግበሮም፡ ዝቐልጠፈ መንገዲ ከም ትፈልጥ እንተ መሰለካ እውን። ካልእ ስርዓት ጽቡቕ ዝመስል ግን ዘይሰርሕ ፍርያት ክህብ ይኽእል። ሳጹን ዳርጋ ጥራሑ ድዩ? እቲ መስመር ደው ከይብል፡ ብግዜኡ ተዛረብ። ዝሓይሽ ክኸውን ዝኽእል ደረጃ ትርኢ ዲኻ? ንሓላፊ ጉጅለኻ ንገሮ፡ ሽዑ ንኹሉ ሰብ ክቕየር ይኽእል።", f: "ኣብ መስመር ምግጣም ነፍሲ ወከፍ ደረጃ ቦታኡን ስርዓቱን ኣለዎ። እቲ መምርሒ ስራሕ የርእዮም፡ ብዙሕ ግዜ ምስ ስእልታት። ነቶም ደረጃታት ኩሉ ግዜ ብተመሳሳሊ ስርዓት ግበርዮም፡ ዝቐልጠፈ መንገዲ ከም ትፈልጢ እንተ መሰለኪ እውን። ካልእ ስርዓት ጽቡቕ ዝመስል ግን ዘይሰርሕ ፍርያት ክህብ ይኽእል። ሳጹን ዳርጋ ጥራሑ ድዩ? እቲ መስመር ደው ከይብል፡ ብግዜኡ ተዛረቢ። ዝሓይሽ ክኸውን ዝኽእል ደረጃ ትርእዪ ዲኺ? ንሓላፊ ጉጅለኺ ንገርዮ፡ ሽዑ ንኹሉ ሰብ ክቕየር ይኽእል።", x: "ኣብ መስመር ምግጣም ነፍሲ ወከፍ ደረጃ ቦታኡን ስርዓቱን ኣለዎ። እቲ መምርሒ ስራሕ የርእዮም፡ ብዙሕ ግዜ ምስ ስእልታት። ነቶም ደረጃታት ኩሉ ግዜ ብተመሳሳሊ ስርዓት ግበርዎም፡ ዝቐልጠፈ መንገዲ ከም ትፈልጡ እንተ መሰለኩም እውን። ካልእ ስርዓት ጽቡቕ ዝመስል ግን ዘይሰርሕ ፍርያት ክህብ ይኽእል። ሳጹን ዳርጋ ጥራሑ ድዩ? እቲ መስመር ደው ከይብል፡ ብግዜኡ ተዛረቡ። ዝሓይሽ ክኸውን ዝኽእል ደረጃ ትርእዩ ዲኹም? ንሓላፊ ጉጅለኹም ንገርዎ፡ ሽዑ ንኹሉ ሰብ ክቕየር ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.p': "ሓደስቲ ክፍልታት የድልዩኒ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.s': { m: "ንደረጃ ሰለስተ ዝቐልጠፈ መንገዲ ረኺብካ። እቲ መምርሒ ስራሕ ግን ካልእ ይብል። እንታይ ትገብር?", f: "ንደረጃ ሰለስተ ዝቐልጠፈ መንገዲ ረኺብኪ። እቲ መምርሒ ስራሕ ግን ካልእ ይብል። እንታይ ትገብሪ?", x: "ንደረጃ ሰለስተ ዝቐልጠፈ መንገዲ ረኺብኩም። እቲ መምርሒ ስራሕ ግን ካልእ ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o1': { m: "ቅድም ንሓላፊ ጉጅለኻ ሕተቶ።", f: "ቅድም ንሓላፊ ጉጅለኺ ሕተትዮ።", x: "ቅድም ንሓላፊ ጉጅለኹም ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o2': { m: "ካብ ሕጂ ብናትካ መንገዲ ግበሮ።", f: "ካብ ሕጂ ብናትኪ መንገዲ ግበርዮ።", x: "ካብ ሕጂ ብናትኩም መንገዲ ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.o3': { m: "ንብጾት ስራሕካ ናትካ መንገዲ ምሃሮም።", f: "ንብጾት ስራሕኪ ናትኪ መንገዲ ምሃርዮም።", x: "ንብጾት ስራሕኩም ናትኩም መንገዲ ምሃርዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.assembly.w': { m: "እቲ ስርዓት ብዙሕ ግዜ ዘይርአ ምኽንያት ኣለዎ። ናትካ መንገዲ እንተ ሓይሹ፡ ንኹሉ ሰብ ክቕየር ይኽእል።", f: "እቲ ስርዓት ብዙሕ ግዜ ዘይርአ ምኽንያት ኣለዎ። ናትኪ መንገዲ እንተ ሓይሹ፡ ንኹሉ ሰብ ክቕየር ይኽእል።", x: "እቲ ስርዓት ብዙሕ ግዜ ዘይርአ ምኽንያት ኣለዎ። ናትኩም መንገዲ እንተ ሓይሹ፡ ንኹሉ ሰብ ክቕየር ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.fastening': "ምጽናዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schroefmachine': "ኤሌክትሪካዊ መጠምዘዚ ቪተ (ኣብ ልዕሊ እቲ መስመር ተንጠልጢሉ ኣሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.momentsleutel': "መፍትሕ ቶርክ (እቲ ቡሎን እኹል ምስ ጸንዐ ቲክ ይብል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tiewrap': "ማእሰሪ ገመድ (ታይራፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitring': "ሮንደላ (ቀለቤት ሓጺን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klinknagel': "ሪቬት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.popnageltang': "ፒንሳ ሪቬት", // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.1': { m: "ነቲ ቡሎን ብመፍትሕ ቶርክ ኣጽንዖ።", f: "ነቲ ቡሎን ብመፍትሕ ቶርክ ኣጽንዕዮ።", x: "ነቲ ቡሎን ብመፍትሕ ቶርክ ኣጽንዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.2': { m: "ነቲ ሮንደላ ኣይትረስዖ።", f: "ነቲ ሮንደላ ኣይትረስዕዮ።", x: "ነቲ ሮንደላ ኣይትረስዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.fastening.3': { m: "ነቶም ገመዳት ብማእሰሪ ገመድ ብሓደ እሰሮም።", f: "ነቶም ገመዳት ብማእሰሪ ገመድ ብሓደ እሰርዮም።", x: "ነቶም ገመዳት ብማእሰሪ ገመድ ብሓደ እሰርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.q': "እዚ ቡሎን ክሳብ ክንደይ ክጸንዕ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening.a': "ክሳብ እቲ መፍትሕ ቶርክ ቲክ ዝብል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.fastening': "ቲክ እኹል እዩ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.b': { m: "መፍትሕ ቶርክ ቡሎን እኹል ምስ ጸንዐ ቲክ ይብል። ኣብቲ ቲክ ደው በል፡ ተወሳኺ ኣይትጠምዝዝ። ኣዝዩ ጽኑዕ ነቲ ቡሎን ወይ ነቲ ክፋል ክሰብሮ ይኽእል፡ ኣዝዩ ልሕሉሕ ድማ ክፍታሕ ይኽእል። እቲ ኤሌክትሪካዊ መጠምዘዚ ቪተ ብተመሳሳሊ መንገዲ ይሰርሕ፡ ባዕሉ ደው ይብል። ነፍሲ ወከፍ ሮንደላ ኣብ ቦታኡ ኣቐምጥ፡ ዝጎደለ ሮንደላ ድሓር ንምርኣዩ ከቢድ እዩ። ቡሎናትካ ቍጸሮም። ሓደ ተሪፉ ድዩ፡ ወይስ ሓደ ተወሳኺ የድልየካ ድዩ? ሽዑ ገለ ጌጋ ኣሎ፡ ንሓላፊ ጉጅለኻ ንገሮ።", f: "መፍትሕ ቶርክ ቡሎን እኹል ምስ ጸንዐ ቲክ ይብል። ኣብቲ ቲክ ደው በሊ፡ ተወሳኺ ኣይትጠምዝዚ። ኣዝዩ ጽኑዕ ነቲ ቡሎን ወይ ነቲ ክፋል ክሰብሮ ይኽእል፡ ኣዝዩ ልሕሉሕ ድማ ክፍታሕ ይኽእል። እቲ ኤሌክትሪካዊ መጠምዘዚ ቪተ ብተመሳሳሊ መንገዲ ይሰርሕ፡ ባዕሉ ደው ይብል። ነፍሲ ወከፍ ሮንደላ ኣብ ቦታኡ ኣቐምጢ፡ ዝጎደለ ሮንደላ ድሓር ንምርኣዩ ከቢድ እዩ። ቡሎናትኪ ቍጸርዮም። ሓደ ተሪፉ ድዩ፡ ወይስ ሓደ ተወሳኺ የድልየኪ ድዩ? ሽዑ ገለ ጌጋ ኣሎ፡ ንሓላፊ ጉጅለኺ ንገርዮ።", x: "መፍትሕ ቶርክ ቡሎን እኹል ምስ ጸንዐ ቲክ ይብል። ኣብቲ ቲክ ደው በሉ፡ ተወሳኺ ኣይትጠምዝዙ። ኣዝዩ ጽኑዕ ነቲ ቡሎን ወይ ነቲ ክፋል ክሰብሮ ይኽእል፡ ኣዝዩ ልሕሉሕ ድማ ክፍታሕ ይኽእል። እቲ ኤሌክትሪካዊ መጠምዘዚ ቪተ ብተመሳሳሊ መንገዲ ይሰርሕ፡ ባዕሉ ደው ይብል። ነፍሲ ወከፍ ሮንደላ ኣብ ቦታኡ ኣቐምጡ፡ ዝጎደለ ሮንደላ ድሓር ንምርኣዩ ከቢድ እዩ። ቡሎናትኩም ቍጸርዎም። ሓደ ተሪፉ ድዩ፡ ወይስ ሓደ ተወሳኺ የድልየኩም ድዩ? ሽዑ ገለ ጌጋ ኣሎ፡ ንሓላፊ ጉጅለኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.p': "ሓደ ቡሎን ተሪፉ ኣሎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.s': { m: "መፍትሕ ቶርክካ ቲክ ኢሉ። እቲ ቡሎን ግን ገና ቁሩብ ልሕሉሕ ኮይኑ ይስመዓካ። እንታይ ትገብር?", f: "መፍትሕ ቶርክኪ ቲክ ኢሉ። እቲ ቡሎን ግን ገና ቁሩብ ልሕሉሕ ኮይኑ ይስመዓኪ። እንታይ ትገብሪ?", x: "መፍትሕ ቶርክኩም ቲክ ኢሉ። እቲ ቡሎን ግን ገና ቁሩብ ልሕሉሕ ኮይኑ ይስመዓኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o1': { m: "ደው በል፡ ንሓላፊ ጉጅለኻ ድማ ሕተቶ።", f: "ደው በሊ፡ ንሓላፊ ጉጅለኺ ድማ ሕተትዮ።", x: "ደው በሉ፡ ንሓላፊ ጉጅለኹም ድማ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o2': { m: "ብኢድካ ቁሩብ ወሲኽካ ጠምዝዞ።", f: "ብኢድኪ ቁሩብ ወሲኽኪ ጠምዝዝዮ።", x: "ብኢድኩም ቁሩብ ወሲኽኩም ጠምዝዝዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.o3': { m: "ዝነውሐ መፍትሕ ተጠቐም።", f: "ዝነውሐ መፍትሕ ተጠቐሚ።", x: "ዝነውሐ መፍትሕ ተጠቐሙ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.w': "እቲ ቲክ ኣብቲ ቅኑዕ ሓይሊ ተሰሪዑ እዩ። ጌጋ እንተ መሲሉ፡ እቲ መፍትሕ ምፍታሽ የድልዮ ይኸውን። ተወሳኺ ምጥምዛዝ ነቲ ቡሎን ክሰብሮ ይኽእል።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.handling': "ምልዓልን ምንቕናቕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.takel': "ፓራንኮ (ብሰንሰለት ከበድቲ ክፍልታት የልዕል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijshaak': "ጋንቾ ምልዓል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilhulp': "መሐገዚ ምልዓል (ነቲ ክፋል ብምምጣጥ ኣየር ይሕዞ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderdelenkar': "ዓረብያ ክፍልታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaitafel': "ዝዘውር ጠረጴዛ (እቲ ክፋል እዩ ዝዝውር፡ ሰብ ኣይኮነን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolcontainer': "ሮል ኮንተይነር (ነዊሕ ሳጹን ሽቦ ምስ መንኮርኮር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.1': { m: "ነዚ በይንኻ ኣይተልዕሎ። ነቲ ፓራንኮ ተጠቐመሉ።", f: "ነዚ በይንኺ ኣይተልዕልዮ። ነቲ ፓራንኮ ተጠቐምሉ።", x: "ነዚ በይንኹም ኣይተልዕልዎ። ነቲ ፓራንኮ ተጠቐሙሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.2': "እቲ ጋንቾ ምልዓል ጽቡቕ ተዓጺዩ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.handling.3': { m: "ነቲ ዓረብያ ክፍልታት ድፍኦ፡ ኣይትስሓቦ።", f: "ነቲ ዓረብያ ክፍልታት ድፍእዮ፡ ኣይትስሓብዮ።", x: "ነቲ ዓረብያ ክፍልታት ድፍእዎ፡ ኣይትስሓብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.q': "ኣብ ትሕቲ እቲ ፓራንኮ ደው ክብል ይፍቀደኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.handling.a': "ኣይፋል፡ ኣብ ትሕቲ ዝተንጠልጠለ ጽዕነት ፈጺሙ ኣይኮነን።", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.handling': "ከቢድ ስራሕ ናይ ፓራንኮ እዩ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.b': { m: "ከበድቲ ክፍልታት ብፓራንኮ ወይ ብመሐገዚ ምልዓል እዮም ዝለዓሉ፡ ብሕቖኻ ኣይኮነን። ቅድሚ ምልዓልካ ነቲ ጋንቾ ፈትሾ፡ እቲ መዕጸዊኡ ክዕጾ ኣለዎ። ቀስ ኢልካ ኣልዕል፡ ኣእዳውካን ኣእጋርካን ድማ ካብቲ ጽዕነት ኣርሕቕ። ኣብ ትሕቲ ዝተንጠልጠለ ጽዕነት ፈጺምካ ደው ኣይትበል፡ ኣይትሕለፍ ድማ። ክፋል ንምዝዋር ነቲ ዝዘውር ጠረጴዛ ተጠቐመሉ፡ ሽዑ ሕቖኻ ክትጠውዮ ኣየድልየካን። ዓረብያ ወይ ሮል ኮንተይነር ድፋእ፡ ናበይ ከም እትኸይድ ትርኢ፡ ሕቖኻ ድማ ውሑድ ይጽዕን። ፓራንኮ ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሃርካ ጥራይ ተጠቐመሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ከበድቲ ክፍልታት ብፓራንኮ ወይ ብመሐገዚ ምልዓል እዮም ዝለዓሉ፡ ብሕቖኺ ኣይኮነን። ቅድሚ ምልዓልኪ ነቲ ጋንቾ ፈትሽዮ፡ እቲ መዕጸዊኡ ክዕጾ ኣለዎ። ቀስ ኢልኪ ኣልዕሊ፡ ኣእዳውኪን ኣእጋርኪን ድማ ካብቲ ጽዕነት ኣርሕቒ። ኣብ ትሕቲ ዝተንጠልጠለ ጽዕነት ፈጺምኪ ደው ኣይትበሊ፡ ኣይትሕለፊ ድማ። ክፋል ንምዝዋር ነቲ ዝዘውር ጠረጴዛ ተጠቐምሉ፡ ሽዑ ሕቖኺ ክትጠውይዮ ኣየድልየኪን። ዓረብያ ወይ ሮል ኮንተይነር ድፍኢ፡ ናበይ ከም እትኸዲ ትርእዪ፡ ሕቖኺ ድማ ውሑድ ይጽዕን። ፓራንኮ ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሃርኪ ጥራይ ተጠቐምሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ከበድቲ ክፍልታት ብፓራንኮ ወይ ብመሐገዚ ምልዓል እዮም ዝለዓሉ፡ ብሕቖኹም ኣይኮነን። ቅድሚ ምልዓልኩም ነቲ ጋንቾ ፈትሽዎ፡ እቲ መዕጸዊኡ ክዕጾ ኣለዎ። ቀስ ኢልኩም ኣልዕሉ፡ ኣእዳውኩምን ኣእጋርኩምን ድማ ካብቲ ጽዕነት ኣርሕቑ። ኣብ ትሕቲ ዝተንጠልጠለ ጽዕነት ፈጺምኩም ደው ኣይትበሉ፡ ኣይትሕለፉ ድማ። ክፋል ንምዝዋር ነቲ ዝዘውር ጠረጴዛ ተጠቐሙሉ፡ ሽዑ ሕቖኹም ክትጠውዩዎ ኣየድልየኩምን። ዓረብያ ወይ ሮል ኮንተይነር ድፍኡ፡ ናበይ ከም እትኸዱ ትርእዩ፡ ሕቖኹም ድማ ውሑድ ይጽዕን። ፓራንኮ ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሃርኩም ጥራይ ተጠቐሙሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.p': "ነቲ ፓራንኮ እጥቀመሉ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.s': { m: "ሓደ ክፋል ኣዝዩ ከቢድ እዩ። እቲ ፓራንኮ ንዓሰርተ ደቒቕ ተወሳኺ ትሑዝ እዩ። እንታይ ትገብር?", f: "ሓደ ክፋል ኣዝዩ ከቢድ እዩ። እቲ ፓራንኮ ንዓሰርተ ደቒቕ ተወሳኺ ትሑዝ እዩ። እንታይ ትገብሪ?", x: "ሓደ ክፋል ኣዝዩ ከቢድ እዩ። እቲ ፓራንኮ ንዓሰርተ ደቒቕ ተወሳኺ ትሑዝ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o1': { m: "ነቲ ፓራንኮ ተጸበዮ።", f: "ነቲ ፓራንኮ ተጸበይዮ።", x: "ነቲ ፓራንኮ ተጸበይዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o2': { m: "በይንኻ ቀልጢፍካ ኣልዕሎ።", f: "በይንኺ ቀልጢፍኪ ኣልዕልዮ።", x: "በይንኹም ቀልጢፍኩም ኣልዕልዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.o3': { m: "ኣብ መሬት ጎቲትካ ውሰዶ።", f: "ኣብ መሬት ጎቲትኪ ውሰድዮ።", x: "ኣብ መሬት ጎቲትኩም ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.w': { m: "ከቢድ ክፋል ኣብ ሓንቲ ካልኢት ንሕቖኻ ክጎድኦ ይኽእል። ዓሰርተ ደቒቕ ምጽባይ ካብ ኣዋርሕ ቃንዛ ይሓይሽ።", f: "ከቢድ ክፋል ኣብ ሓንቲ ካልኢት ንሕቖኺ ክጎድኦ ይኽእል። ዓሰርተ ደቒቕ ምጽባይ ካብ ኣዋርሕ ቃንዛ ይሓይሽ።", x: "ከቢድ ክፋል ኣብ ሓንቲ ካልኢት ንሕቖኹም ክጎድኦ ይኽእል። ዓሰርተ ደቒቕ ምጽባይ ካብ ኣዋርሕ ቃንዛ ይሓይሽ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'l.finalcheck': "ናይ መወዳእታ ምፍታሽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.typeplaatje': "ሰሌዳ ዓይነት (ዓይነትን ቁጽርን ዘለዎ ንእሽቶ ሰሌዳ ሓጺን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stempel': "ማሕተም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.testbank': "ጠረጴዛ ምፍታን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeursticker': "ስቲከር ፍቓድ (ቀጠልያ ስቲከር፡ እቲ ፍርያት ጽቡቕ እዩ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kras': "ዝተሓከኸ ምልክት (ፍሕቓቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.barst': "ንቕዓት", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.1': "እቲ ሰሌዳ ዓይነት ጠዊዩ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.2': "ኣብዚ ፍርያት ዝተሓከኸ ምልክት ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.finalcheck.3': "ብዘይ ስቲከር ፍቓድ ኣይወጽእን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.q': "እዚ ፍርያት ጽቡቕ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck.a': "ኣይፋል፡ ንቕዓት ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.finalcheck': "ጽቡቓት ፍርያት ጥራይ እዮም ስቲከር ዝረኽቡ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.b': { m: "ናይ መወዳእታ ምፍታሽ፡ ቅድሚ እቲ ዓሚል ምርካቡ ጌጋ ንምርካብ ናይ መወዳእታ ዕድል እዩ። ስራሕ ዝበዝሐሉ ግዜ እውን፡ ነፍሲ ወከፍ ነጥቢ ኣብቲ ዝርዝር ፈትሽ። ንእሽቶ ዝተሓከኸ ምልክት ወይ ንቕዓት ብቐሊሉ ይሓልፍ፡ ኣብ ጽቡቕ ብርሃን፡ ካብ ልዕሊ ሓደ ጎኒ ድማ ርአ። ኩሉ ነጥብታት ጽቡቕ ምስ ዝኸውን ጥራይ ስቲከር ፍቓድ ወይ ማሕተም ግበረሉ። ርግጸኛ ኣይኮንካን? ነቲ ፍርያት ፈሊኻ ኣቐምጦ፡ ሕተት ድማ። ኣብዚ ዝርከብ ጌጋ ውሑድ የኽስር፡ ኣብ ዓሚል ዝርከብ ጌጋ ግን ብዙሕ የኽስር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ናይ መወዳእታ ምፍታሽ፡ ቅድሚ እቲ ዓሚል ምርካቡ ጌጋ ንምርካብ ናይ መወዳእታ ዕድል እዩ። ስራሕ ዝበዝሐሉ ግዜ እውን፡ ነፍሲ ወከፍ ነጥቢ ኣብቲ ዝርዝር ፈትሺ። ንእሽቶ ዝተሓከኸ ምልክት ወይ ንቕዓት ብቐሊሉ ይሓልፍ፡ ኣብ ጽቡቕ ብርሃን፡ ካብ ልዕሊ ሓደ ጎኒ ድማ ርኣዪ። ኩሉ ነጥብታት ጽቡቕ ምስ ዝኸውን ጥራይ ስቲከር ፍቓድ ወይ ማሕተም ግበርሉ። ርግጸኛ ኣይኮንክን? ነቲ ፍርያት ፈሊኺ ኣቐምጥዮ፡ ሕተቲ ድማ። ኣብዚ ዝርከብ ጌጋ ውሑድ የኽስር፡ ኣብ ዓሚል ዝርከብ ጌጋ ግን ብዙሕ የኽስር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ናይ መወዳእታ ምፍታሽ፡ ቅድሚ እቲ ዓሚል ምርካቡ ጌጋ ንምርካብ ናይ መወዳእታ ዕድል እዩ። ስራሕ ዝበዝሐሉ ግዜ እውን፡ ነፍሲ ወከፍ ነጥቢ ኣብቲ ዝርዝር ፈትሹ። ንእሽቶ ዝተሓከኸ ምልክት ወይ ንቕዓት ብቐሊሉ ይሓልፍ፡ ኣብ ጽቡቕ ብርሃን፡ ካብ ልዕሊ ሓደ ጎኒ ድማ ርኣዩ። ኩሉ ነጥብታት ጽቡቕ ምስ ዝኸውን ጥራይ ስቲከር ፍቓድ ወይ ማሕተም ግበሩሉ። ርግጸኛ ኣይኮንኩምን? ነቲ ፍርያት ፈሊኹም ኣቐምጥዎ፡ ሕተቱ ድማ። ኣብዚ ዝርከብ ጌጋ ውሑድ የኽስር፡ ኣብ ዓሚል ዝርከብ ጌጋ ግን ብዙሕ የኽስር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.p': "እዚ ፍርያት ተፈልዩ ይቕመጥ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.s': { m: "ኣብ መስመር ብዙሕ ስራሕ ኣሎ። ኣብ ሓደ ፍርያት፡ ኣብ ትሕቲ እቲ ኤቲኬት፡ ንእሽቶ ዝተሓከኸ ምልክት ትርኢ። እንታይ ትገብር?", f: "ኣብ መስመር ብዙሕ ስራሕ ኣሎ። ኣብ ሓደ ፍርያት፡ ኣብ ትሕቲ እቲ ኤቲኬት፡ ንእሽቶ ዝተሓከኸ ምልክት ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ መስመር ብዙሕ ስራሕ ኣሎ። ኣብ ሓደ ፍርያት፡ ኣብ ትሕቲ እቲ ኤቲኬት፡ ንእሽቶ ዝተሓከኸ ምልክት ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o1': { m: "ፈሊኻ ኣቐምጦ፡ ንሓላፊ ጉጅለኻ ድማ ንገሮ።", f: "ፈሊኺ ኣቐምጥዮ፡ ንሓላፊ ጉጅለኺ ድማ ንገርዮ።", x: "ፈሊኹም ኣቐምጥዎ፡ ንሓላፊ ጉጅለኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o2': { m: "ነቲ ስቲከር ለጥፎ፡ ንእሽቶ እዩ።", f: "ነቲ ስቲከር ለጥፍዮ፡ ንእሽቶ እዩ።", x: "ነቲ ስቲከር ለጥፍዎ፡ ንእሽቶ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.o3': { m: "ነቲ ኤቲኬት ኣብ ልዕሊ እቲ ዝተሓከኸ ምልክት ኣንቀሳቕሶ።", f: "ነቲ ኤቲኬት ኣብ ልዕሊ እቲ ዝተሓከኸ ምልክት ኣንቀሳቕስዮ።", x: "ነቲ ኤቲኬት ኣብ ልዕሊ እቲ ዝተሓከኸ ምልክት ኣንቀሳቕስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.w': "ንእሽቶ ዝተሓከኸ ምልክት ኣብቲ መስመር ጸገም ከም ዘሎ ምልክት ክኸውን ይኽእል። ምሕባኡ ነቲ ጸገም ናብ ዓሚል ጥራይ የሕልፎ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'u.kweek': "ምትኻል፡ ምፍላይን ገዛ ኣትክልትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sowing': "ምዝራእን ጨናፍር ምትኻልን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaad': "ዘርኢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaaibak': "ናይ ምዝራእ ትሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stek': "ጨንፈር ንምትኻል (ሓድሽ ሱር ዘውጽእ ቁራጽ ተኽሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potgrond': "ናይ ድስቲ ሓመድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kweekpot': "ድስቲ ምትኻል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gieter': "መስተዪ ኣትክልቲ", // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.1': { m: "ኣብ ነፍሲ ወከፍ ክፍሊ ክልተ ዘርኢ ኣንብር።", f: "ኣብ ነፍሲ ወከፍ ክፍሊ ክልተ ዘርኢ ኣንብሪ።", x: "ኣብ ነፍሲ ወከፍ ክፍሊ ክልተ ዘርኢ ኣንብሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.2': { m: "ነቲ ጨንፈር ኣብቲ ናይ ድስቲ ሓመድ ትከሎ።", f: "ነቲ ጨንፈር ኣብቲ ናይ ድስቲ ሓመድ ትከልዮ።", x: "ነቲ ጨንፈር ኣብቲ ናይ ድስቲ ሓመድ ትከልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.sowing.3': { m: "ነቶም ንኣሽቱ ኣትክልቲ ቁሩብ ማይ ሃብ።", f: "ነቶም ንኣሽቱ ኣትክልቲ ቁሩብ ማይ ሃቢ።", x: "ነቶም ንኣሽቱ ኣትክልቲ ቁሩብ ማይ ሃቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.q': "እቲ ዘርኢ ክሳብ ክንደይ ክዓሙቕ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing.a': "ፍርቂ ሴንቲሜተር። ካብኡ ዝዓሞቐ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sowing': "ንኣሽቱ ኣትክልቲ ልሙዕ ኢድ የድልዮም", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.b': { m: "ንኣሽቱ ኣትክልቲ ድኹማት እዮም። ጨንፈር ወይ ንእሽቶ ተኽሊ ብቆጽሊ ሓዞ፡ ብጕንዲ ኣይኮነን፡ ቆጽሊ ደጊሙ ይበቍል፡ ዝተሰብረ ጕንዲ ግን ኣይበቍልን። ነቲ ሓመድ ቀስ ኢልካ ጸቕጦ፡ ብሓይሊ ኣይኮነን። እቲ ዘርኢ ምስ ማይ ከይኸይድ፡ ማይ ቀስ ኢልካ ብቐጢን ነስነስ ሃብ። ብጽሩይ ኢድን ጽሩይ ትሪን ስራሕ፡ ንኣሽቱ ኣትክልቲ ብቐሊሉ ይሓሙ። ኩሉ ሰብ እንታይ ከም ዘሎ ምእንቲ ክፈልጥ፡ ኣብ ነፍሲ ወከፍ ትሪ ዕለትን ዓይነት ተኽልን ጽሓፍ።", f: "ንኣሽቱ ኣትክልቲ ድኹማት እዮም። ጨንፈር ወይ ንእሽቶ ተኽሊ ብቆጽሊ ሓዝዮ፡ ብጕንዲ ኣይኮነን፡ ቆጽሊ ደጊሙ ይበቍል፡ ዝተሰብረ ጕንዲ ግን ኣይበቍልን። ነቲ ሓመድ ቀስ ኢልኪ ጸቕጥዮ፡ ብሓይሊ ኣይኮነን። እቲ ዘርኢ ምስ ማይ ከይኸይድ፡ ማይ ቀስ ኢልኪ ብቐጢን ነስነስ ሃቢ። ብጽሩይ ኢድን ጽሩይ ትሪን ስርሒ፡ ንኣሽቱ ኣትክልቲ ብቐሊሉ ይሓሙ። ኩሉ ሰብ እንታይ ከም ዘሎ ምእንቲ ክፈልጥ፡ ኣብ ነፍሲ ወከፍ ትሪ ዕለትን ዓይነት ተኽልን ጽሓፊ።", x: "ንኣሽቱ ኣትክልቲ ድኹማት እዮም። ጨንፈር ወይ ንእሽቶ ተኽሊ ብቆጽሊ ሓዝዎ፡ ብጕንዲ ኣይኮነን፡ ቆጽሊ ደጊሙ ይበቍል፡ ዝተሰብረ ጕንዲ ግን ኣይበቍልን። ነቲ ሓመድ ቀስ ኢልኩም ጸቕጥዎ፡ ብሓይሊ ኣይኮነን። እቲ ዘርኢ ምስ ማይ ከይኸይድ፡ ማይ ቀስ ኢልኩም ብቐጢን ነስነስ ሃቡ። ብጽሩይ ኢድን ጽሩይ ትሪን ስርሑ፡ ንኣሽቱ ኣትክልቲ ብቐሊሉ ይሓሙ። ኩሉ ሰብ እንታይ ከም ዘሎ ምእንቲ ክፈልጥ፡ ኣብ ነፍሲ ወከፍ ትሪ ዕለትን ዓይነት ተኽልን ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.p': "ብቆጽሊ እሕዞ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.s': { m: "ንእሽቶ ተኽሊ ናብ ድስቲ ከተሰጋግሮ ኣለካ። እንታይ ትገብር?", f: "ንእሽቶ ተኽሊ ናብ ድስቲ ከተሰጋግርዮ ኣለኪ። እንታይ ትገብሪ?", x: "ንእሽቶ ተኽሊ ናብ ድስቲ ከተሰጋግርዎ ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o1': { m: "ቀስ ኢልካ ብቆጽሊ ሓዞ።", f: "ቀስ ኢልኪ ብቆጽሊ ሓዝዮ።", x: "ቀስ ኢልኩም ብቆጽሊ ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o2': { m: "ብጕንዱ ሰሒብካ ኣውጽኦ።", f: "ብጕንዱ ሰሒብኪ ኣውጽእዮ።", x: "ብጕንዱ ሰሒብኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.o3': { m: "ምስ ሓመዱ ጸቒጥካ ኣውጽኦ።", f: "ምስ ሓመዱ ጸቒጥኪ ኣውጽእዮ።", x: "ምስ ሓመዱ ጸቒጥኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sowing.w': "ቆጽሊ ደጊሙ ክበቍል ይኽእል። ዝተሰብረ ጕንዲ ግን ኣይክእልን፡ ሽዑ እቲ ተኽሊ ይሞት።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.sorting': "ምፍላይን ምዕሻግን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tros': "ዘለላ (ኣብ ሓደ ጕንዲ ዘለዉ ኮሚደረታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bakje': "ንእሽቶ ሳጹን (ንፍሩታት ዝኸውን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sorteermachine': "ማሽን ምፍላይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketpistool': "ፒስቶላ ኤቲኬት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurenkaart': "ካርድ ሕብሪ (ፍረ ክሳብ ክንደይ ክበስል ከም ዘለዎ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tomatenschaar': "መቐስ ምእራይ", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.1': { m: "ነቶም ዘለላታት ብጥንቃቐ ኣብቲ ሳጹን ኣንብሮም።", f: "ነቶም ዘለላታት ብጥንቃቐ ኣብቲ ሳጹን ኣንብርዮም።", x: "ነቶም ዘለላታት ብጥንቃቐ ኣብቲ ሳጹን ኣንብርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.2': "እዛ ኮሚደረ ልዕሊ ዓቐን በሲላ። ተፈልያ ትቕመጥ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.sorting.3': { m: "ኣብቲ ካርድ ሕብሪ ርአ።", f: "ኣብቲ ካርድ ሕብሪ ርኣዪ።", x: "ኣብቲ ካርድ ሕብሪ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.q': "እዛ ኮሚደረ እኹል በሲላ ድያ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting.a': { m: "ኣይፋል፡ ገና ቀጠልያ እያ። ኣብ ተኽሊ ግደፋ።", f: "ኣይፋል፡ ገና ቀጠልያ እያ። ኣብ ተኽሊ ግደፍያ።", x: "ኣይፋል፡ ገና ቀጠልያ እያ። ኣብ ተኽሊ ግደፍዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sorting': "ነፍሲ ወከፍ ፍረ ኣገዳሲ እዩ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.b': { m: "ፍሩታትን ኣሕምልትን ብቐሊሉ ይጭፍለቑ። ቀስ ኢልካ ኣንብሮም፡ ኣይተውድቖም፡ ኣይትደርብዮም ድማ። ሎሚ እቲ ምጭፍላቕ ኣይትርእዮን ኢኻ፡ ጽባሕ ግን እቲ ፍረ ልሕሉሕን ቡናውን ይኸውን። ኣየናይ ሕብሪ ናበይ ከም ዝኸይድ ንምፍላጥ፡ ኣብቲ ካርድ ሕብሪ ርአ። ዝተጎድአ ወይ ዝበስበሰ ፍረ ፈሊኻ ኣቐምጥ፡ ኣብ ሓደ ንእሽቶ ሳጹን ዘሎ ሓደ ሕማቕ ፍረ ነቶም ካልኦት ከበላሽዮም ይኽእል። ነቶም ንኣሽቱን ዓበይትን ሳጹናት ጽሩያት ሓዞም፡ ኣብ መሬት ድማ ፈጺምካ ኣይተንብሮም።", f: "ፍሩታትን ኣሕምልትን ብቐሊሉ ይጭፍለቑ። ቀስ ኢልኪ ኣንብርዮም፡ ኣይተውድቕዮም፡ ኣይትደርብይዮም ድማ። ሎሚ እቲ ምጭፍላቕ ኣይትርእይዮን ኢኺ፡ ጽባሕ ግን እቲ ፍረ ልሕሉሕን ቡናውን ይኸውን። ኣየናይ ሕብሪ ናበይ ከም ዝኸይድ ንምፍላጥ፡ ኣብቲ ካርድ ሕብሪ ርኣዪ። ዝተጎድአ ወይ ዝበስበሰ ፍረ ፈሊኺ ኣቐምጢ፡ ኣብ ሓደ ንእሽቶ ሳጹን ዘሎ ሓደ ሕማቕ ፍረ ነቶም ካልኦት ከበላሽዮም ይኽእል። ነቶም ንኣሽቱን ዓበይትን ሳጹናት ጽሩያት ሓዝዮም፡ ኣብ መሬት ድማ ፈጺምኪ ኣይተንብርዮም።", x: "ፍሩታትን ኣሕምልትን ብቐሊሉ ይጭፍለቑ። ቀስ ኢልኩም ኣንብርዎም፡ ኣይተውድቕዎም፡ ኣይትደርብይዎም ድማ። ሎሚ እቲ ምጭፍላቕ ኣይትርእይዎን ኢኹም፡ ጽባሕ ግን እቲ ፍረ ልሕሉሕን ቡናውን ይኸውን። ኣየናይ ሕብሪ ናበይ ከም ዝኸይድ ንምፍላጥ፡ ኣብቲ ካርድ ሕብሪ ርኣዩ። ዝተጎድአ ወይ ዝበስበሰ ፍረ ፈሊኹም ኣቐምጡ፡ ኣብ ሓደ ንእሽቶ ሳጹን ዘሎ ሓደ ሕማቕ ፍረ ነቶም ካልኦት ከበላሽዮም ይኽእል። ነቶም ንኣሽቱን ዓበይትን ሳጹናት ጽሩያት ሓዝዎም፡ ኣብ መሬት ድማ ፈጺምኩም ኣይተንብርዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.p': "እዚኣ ተጎዲኣ እያ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.s': { m: "ንኣሽቱ ሳጹናት ትመልእ ኣለኻ። ሓንቲ ኮሚደረ ልሕሉሕ ቡናዊ ነጠብጣብ ኣለዋ። እንታይ ትገብር?", f: "ንኣሽቱ ሳጹናት ትመልኢ ኣለኺ። ሓንቲ ኮሚደረ ልሕሉሕ ቡናዊ ነጠብጣብ ኣለዋ። እንታይ ትገብሪ?", x: "ንኣሽቱ ሳጹናት ትመልኡ ኣለኹም። ሓንቲ ኮሚደረ ልሕሉሕ ቡናዊ ነጠብጣብ ኣለዋ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o1': { m: "ፈሊኻ ኣቐምጣ።", f: "ፈሊኺ ኣቐምጥያ።", x: "ፈሊኹም ኣቐምጥዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o2': { m: "ኣብ ታሕቲ ሕብኣያ።", f: "ኣብ ታሕቲ ሕብእያ።", x: "ኣብ ታሕቲ ሕብእዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.o3': { m: "ብዘየገድስ ዓሽጋ።", f: "ብዘየገድስ ዓሽግያ።", x: "ብዘየገድስ ዓሽግዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.w': "ዝበስበሰት ኮሚደረ ነተን ካልኦት ቀልጢፈን ክበስብሳ ትገብረን። እቲ ዓሚል ይረኽባ፡ እቲ ምሉእ ሳጹን ድማ ይምለስ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.greenhouse': "ገዛ ኣትክልትን ክሊማኡን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buisrailkar': "ዓረብያ ሓዲድ ቱቦ (ኣብ ቱቦታት ማሞቒ ትጓዓዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.druppelaar': "መንጠብጠቢ (ማይ ነጠብጣብ ብነጠብጣብ ይህብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luchtraam': "መስኮት ናሕሲ (ኣብ ናሕሲ ዘሎ መስኮት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasscherm': "መጋረጃ ገዛ ኣትክልቲ (ኣብ ትሕቲ ናሕሲ ዘሎ ጨርቂ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ventilator': "ቬንቲላተር (መንፈሒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermometer': "ቴርሞሜተር", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.1': { m: "ነታ ዓረብያ ሓዲድ ቱቦ ክሳብ መወዳእታ እቲ መስርዕ ዘውራ።", f: "ነታ ዓረብያ ሓዲድ ቱቦ ክሳብ መወዳእታ እቲ መስርዕ ዘውርያ።", x: "ነታ ዓረብያ ሓዲድ ቱቦ ክሳብ መወዳእታ እቲ መስርዕ ዘውርዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.2': "እቲ መንጠብጠቢ ተፈቲሑ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.greenhouse.3': "ውዑይ እዩ። መሳኹቲ ናሕሲ ይኽፈቱ ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.q': "ኣብ ገዛ ኣትክልቲ ስለምንታይ ከምዚ ኣዝዩ ውዑይ ኮይኑ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse.a': "እቲ መጋረጃ ዕጹው እዩ፡ መሳኹቲ እውን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.greenhouse': { m: "ክሊማ ንኮምፒተር ግደፎ", f: "ክሊማ ንኮምፒተር ግደፍዮ", x: "ክሊማ ንኮምፒተር ግደፍዎ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.b': { m: "ኣብ ገዛ ኣትክልቲ ኮምፒተር እዩ ነቲ ክሊማ ዝውስን፡ መሳኹቲ፡ መጋረጃ፡ ማሞቕን ማይን። ባዕልኻ መስኮት ኣይትኽፈት፡ ምድላው እውን ኣይትቀይር። ከም ዘፍስስ መንጠብጠቢ ወይ ዘይዕጾ መስኮት ዝኣመሰለ ፍሉይ ነገር ትርኢ ዲኻ? ንተቖጻጻሪኻ ንገሮ። እታ ዓረብያ ሓዲድ ቱቦ ኣብ ቱቦታት ማሞቒ እያ ትጓዓዝ፡ ብኸመይ ከም እትጥቀመላ ምስ ተማሃርካ ጥራይ ተጠቐመላ። እግርኻ ኣብቲ መድረኽ ሓዞ፡ ነቶም ቱቦታት ድማ ፈጺምካ ኣይትተንክፎም፡ ውዑያት ክኾኑ ይኽእሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ገዛ ኣትክልቲ ኮምፒተር እዩ ነቲ ክሊማ ዝውስን፡ መሳኹቲ፡ መጋረጃ፡ ማሞቕን ማይን። ባዕልኺ መስኮት ኣይትኽፈቲ፡ ምድላው እውን ኣይትቀይሪ። ከም ዘፍስስ መንጠብጠቢ ወይ ዘይዕጾ መስኮት ዝኣመሰለ ፍሉይ ነገር ትርእዪ ዲኺ? ንተቖጻጻሪኺ ንገርዮ። እታ ዓረብያ ሓዲድ ቱቦ ኣብ ቱቦታት ማሞቒ እያ ትጓዓዝ፡ ብኸመይ ከም እትጥቀምላ ምስ ተማሃርኪ ጥራይ ተጠቐምላ። እግርኺ ኣብቲ መድረኽ ሓዝዮ፡ ነቶም ቱቦታት ድማ ፈጺምኪ ኣይትተንክፍዮም፡ ውዑያት ክኾኑ ይኽእሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ገዛ ኣትክልቲ ኮምፒተር እዩ ነቲ ክሊማ ዝውስን፡ መሳኹቲ፡ መጋረጃ፡ ማሞቕን ማይን። ባዕልኹም መስኮት ኣይትኽፈቱ፡ ምድላው እውን ኣይትቀይሩ። ከም ዘፍስስ መንጠብጠቢ ወይ ዘይዕጾ መስኮት ዝኣመሰለ ፍሉይ ነገር ትርእዩ ዲኹም? ንተቖጻጻሪኹም ንገርዎ። እታ ዓረብያ ሓዲድ ቱቦ ኣብ ቱቦታት ማሞቒ እያ ትጓዓዝ፡ ብኸመይ ከም እትጥቀሙላ ምስ ተማሃርኩም ጥራይ ተጠቐሙላ። እግርኹም ኣብቲ መድረኽ ሓዝዎ፡ ነቶም ቱቦታት ድማ ፈጺምኩም ኣይትተንክፍዎም፡ ውዑያት ክኾኑ ይኽእሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.p': "እዚ መንጠብጠቢ የፍስስ ኣሎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.s': { m: "ሓደ መንጠብጠቢ ተፈቲሑ። ማይ ናብ መሬት ይፈስስ ኣሎ። እንታይ ትገብር?", f: "ሓደ መንጠብጠቢ ተፈቲሑ። ማይ ናብ መሬት ይፈስስ ኣሎ። እንታይ ትገብሪ?", x: "ሓደ መንጠብጠቢ ተፈቲሑ። ማይ ናብ መሬት ይፈስስ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o1': { m: "ናብ ቦታኡ መልሶ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ናብ ቦታኡ መልስዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ናብ ቦታኡ መልስዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o2': { m: "ግደፎ፡ ማይ ጥራይ እዩ።", f: "ግደፍዮ፡ ማይ ጥራይ እዩ።", x: "ግደፍዎ፡ ማይ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.o3': { m: "ንምሉእ መስርዕ ነቲ ማይ ዕጸዎ።", f: "ንምሉእ መስርዕ ነቲ ማይ ዕጸውዮ።", x: "ንምሉእ መስርዕ ነቲ ማይ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.w': "ዝተፈትሐ መንጠብጠቢ ማይ የባኽን፡ እቲ ተኽሊ ውሑድ ይረክብ፡ ጥሉቕ መሬት ድማ የንሸራትት።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.pests': "ተባዮትን ጽሩይ ስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luis': "ቅማል ኣትክልቲ (ኣብ ኣትክልቲ ዘላ ንእሽቶ ቀጠልያ ሓሸራ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vangplaat': "መጥመዲ ካርድ (ሓሸራታት ዝሕዝ ብጫ ለጋቢ ካርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rups': "ሓሰኻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluipwesp': "ጥገኛ ተርቢ (ንተባዮት እትቐትል ንእሽቶ ተርቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schimmel': "ፈንገስ (ሻጋታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontsmettingsmat': "ምንጣፍ ምንጻህ (ኣብ ማዕጾ ዝርገጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.1': "ኣብዚ ቆጽሊ ቅማል ኣትክልቲ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.2': { m: "ነቲ መጥመዲ ካርድ ኣብ ልዕሊ እቶም ኣትክልቲ ስቐሎ።", f: "ነቲ መጥመዲ ካርድ ኣብ ልዕሊ እቶም ኣትክልቲ ስቐልዮ።", x: "ነቲ መጥመዲ ካርድ ኣብ ልዕሊ እቶም ኣትክልቲ ስቐልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pests.3': { m: "ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፍ።", f: "ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፊ።", x: "ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.q': "ነዛ ተርቢ ክቐትላ ይፍቀደኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests.a': "ኣይፋል፡ እዚኣ ጥገኛ ተርቢ እያ። ትሕግዘና እያ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pests': { m: "ሕማም ካብ መስርዕ ናብ መስርዕ ኣይተሰጋግር", f: "ሕማም ካብ መስርዕ ናብ መስርዕ ኣይተሰጋግሪ", x: "ሕማም ካብ መስርዕ ናብ መስርዕ ኣይተሰጋግሩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.b': { m: "ሕማም ወይ ተባዮት ኣብ ገዛ ኣትክልቲ ቀልጢፉ ይላባዕ። ብኢድካ፡ ብክዳንካን ብመሳርሒታትካን ከተሰጋግሮ ትኽእል። ስለዚ ኣብ ነፍሲ ወከፍ ማዕጾ ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፍ፡ ናብ ካልእ ክፋል ናይቲ ገዛ ኣትክልቲ ክትከይድ ከለኻ ድማ ኢድካ ተሓጸብ። ስራሕካ ኣብቶም ጥዑያት መስርዓት ጀምሮ፡ ኣብቶም ሕሙማት መስርዓት ድማ ወድኦ። ኣብ ተኽሊ ሓሸራታት፡ ነጠብጣብ ወይ ፈንገስ ትርኢ ዲኻ? ኣይትተንክፎ፡ ግን ኣበይ ምዃኑ ንተቖጻጻሪኻ ንገሮ። ገለ ሓሸራታት ኣብ ገዛ ኣትክልቲ ሓገዝቲ እዮም፡ ግደፎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሕማም ወይ ተባዮት ኣብ ገዛ ኣትክልቲ ቀልጢፉ ይላባዕ። ብኢድኪ፡ ብክዳንኪን ብመሳርሒታትኪን ከተሰጋግርዮ ትኽእሊ። ስለዚ ኣብ ነፍሲ ወከፍ ማዕጾ ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፊ፡ ናብ ካልእ ክፋል ናይቲ ገዛ ኣትክልቲ ክትከዲ ከለኺ ድማ ኢድኪ ተሓጸቢ። ስራሕኪ ኣብቶም ጥዑያት መስርዓት ጀምርዮ፡ ኣብቶም ሕሙማት መስርዓት ድማ ወድእዮ። ኣብ ተኽሊ ሓሸራታት፡ ነጠብጣብ ወይ ፈንገስ ትርእዪ ዲኺ? ኣይትተንክፍዮ፡ ግን ኣበይ ምዃኑ ንተቖጻጻሪኺ ንገርዮ። ገለ ሓሸራታት ኣብ ገዛ ኣትክልቲ ሓገዝቲ እዮም፡ ግደፍዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሕማም ወይ ተባዮት ኣብ ገዛ ኣትክልቲ ቀልጢፉ ይላባዕ። ብኢድኩም፡ ብክዳንኩምን ብመሳርሒታትኩምን ከተሰጋግርዎ ትኽእሉ። ስለዚ ኣብ ነፍሲ ወከፍ ማዕጾ ብልዕሊ እቲ ምንጣፍ ምንጻህ ሕለፉ፡ ናብ ካልእ ክፋል ናይቲ ገዛ ኣትክልቲ ክትከዱ ከለኹም ድማ ኢድኩም ተሓጸቡ። ስራሕኩም ኣብቶም ጥዑያት መስርዓት ጀምርዎ፡ ኣብቶም ሕሙማት መስርዓት ድማ ወድእዎ። ኣብ ተኽሊ ሓሸራታት፡ ነጠብጣብ ወይ ፈንገስ ትርእዩ ዲኹም? ኣይትተንክፍዎ፡ ግን ኣበይ ምዃኑ ንተቖጻጻሪኹም ንገርዎ። ገለ ሓሸራታት ኣብ ገዛ ኣትክልቲ ሓገዝቲ እዮም፡ ግደፍዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.p': "ኣብዚ ፈንገስ ኣሎ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.s': { m: "ኣብ መስርዕካ ኣብ ገለ ኣትክልቲ ሓሙኽሽቲ ፈንገስ ትርኢ። እንታይ ትገብር?", f: "ኣብ መስርዕኪ ኣብ ገለ ኣትክልቲ ሓሙኽሽቲ ፈንገስ ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ መስርዕኩም ኣብ ገለ ኣትክልቲ ሓሙኽሽቲ ፈንገስ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o1': { m: "ኣበይ ምዃኑ ንተቖጻጻሪኻ ንገሮ።", f: "ኣበይ ምዃኑ ንተቖጻጻሪኺ ንገርዮ።", x: "ኣበይ ምዃኑ ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o2': { m: "ነቶም ሕማቓት ኣቑጽልቲ ቀንጢብካ ቀጽል።", f: "ነቶም ሕማቓት ኣቑጽልቲ ቀንጢብኪ ቀጽሊ።", x: "ነቶም ሕማቓት ኣቑጽልቲ ቀንጢብኩም ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.o3': { m: "ገለ ኣይትበል፡ ውሑዳት ኣትክልቲ ጥራይ እዮም።", f: "ገለ ኣይትበሊ፡ ውሑዳት ኣትክልቲ ጥራይ እዮም።", x: "ገለ ኣይትበሉ፡ ውሑዳት ኣትክልቲ ጥራይ እዮም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.w': "ፈንገስ ቀልጢፉ ይላባዕ። እቲ ተቖጻጻሪ እንታይ ከም ዝግበርን ካበይ ከም ዝጅመርን ይፈልጥ።", // nieuw, nalezen // nagelezen AI 22 nov
    'u.carservice': "ጎማታት፡ ዘይትን ፍሬናትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.tyres': "ጎማ ምቕያር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wielbout': "ቡሎን ጎማ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagmoersleutel': "ኢምፓክት መፍትሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenspanningsmeter': "መዐቀኒ ጸቕጢ ጎማ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenprofiel': "ፕሮፋይል ጎማ (ኣብ ጎማ ዘለዉ ሕንጻጻት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.velg': "ቸርኪዮ (ናይ ጎማ ሓጺን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bandenwisselaar': "ማሽን ምቕያር ጎማ (ጎማ ካብ ቸርኪዮ ዘውጽእ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.1': { m: "ነቶም ቡሎናት ጎማ ብመስቀላዊ ስርዓት ኣጽንዖም።", f: "ነቶም ቡሎናት ጎማ ብመስቀላዊ ስርዓት ኣጽንዕዮም።", x: "ነቶም ቡሎናት ጎማ ብመስቀላዊ ስርዓት ኣጽንዕዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.2': "እቲ ፕሮፋይል ጎማ ኣዝዩ ትሑት እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.tyres.3': { m: "ነቲ ጸቕጢ ብመዐቀኒ ጸቕጢ ጎማ ዓቅኖ።", f: "ነቲ ጸቕጢ ብመዐቀኒ ጸቕጢ ጎማ ዓቅንዮ።", x: "ነቲ ጸቕጢ ብመዐቀኒ ጸቕጢ ጎማ ዓቅንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.q': "እዞም ጎማታት ክወጹ ኣለዎም ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres.a': "እወ፡ እቲ ፕሮፋይል ዳርጋ ጠፊኡ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.tyres': { m: "ብኢድካ ጠምዝዝ፡ ብመፍትሕ ቶርክ ኣጽንዕ", f: "ብኢድኪ ጠምዝዚ፡ ብመፍትሕ ቶርክ ኣጽንዒ", x: "ብኢድኩም ጠምዝዙ፡ ብመፍትሕ ቶርክ ኣጽንዑ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.b': { m: "ኢምፓክት መፍትሕ ቅልጡፍን ኣዝዩ ሓያልን እዩ። ቡሎናት ጎማ ንምፍታሕ ተጠቐመሉ፡ ብሓይሊ ንምጽናዕ ግን ኣይኮነን። ቅድም ነቶም ቡሎናት ብኢድካ ጠምዝዞም። ድሕሪኡ ብመፍትሕ ቶርክ ብመስቀላዊ ስርዓት ኣጽንዖም፡ ክሳብ እቲ ንዛ መኪና ዝተወሰነ ሓይሊ። ዘይጸንዐ ጎማ ኣብ ምዝዋር ክወጽእ ይኽእል። ፕሮፋይልን ጸቕጥን ናይ ነፍሲ ወከፍ ኣብ ኢድካ እትሕዞ ጎማ ፈትሽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኢምፓክት መፍትሕ ቅልጡፍን ኣዝዩ ሓያልን እዩ። ቡሎናት ጎማ ንምፍታሕ ተጠቐምሉ፡ ብሓይሊ ንምጽናዕ ግን ኣይኮነን። ቅድም ነቶም ቡሎናት ብኢድኪ ጠምዝዝዮም። ድሕሪኡ ብመፍትሕ ቶርክ ብመስቀላዊ ስርዓት ኣጽንዕዮም፡ ክሳብ እቲ ንዛ መኪና ዝተወሰነ ሓይሊ። ዘይጸንዐ ጎማ ኣብ ምዝዋር ክወጽእ ይኽእል። ፕሮፋይልን ጸቕጥን ናይ ነፍሲ ወከፍ ኣብ ኢድኪ እትሕዝዮ ጎማ ፈትሺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኢምፓክት መፍትሕ ቅልጡፍን ኣዝዩ ሓያልን እዩ። ቡሎናት ጎማ ንምፍታሕ ተጠቐሙሉ፡ ብሓይሊ ንምጽናዕ ግን ኣይኮነን። ቅድም ነቶም ቡሎናት ብኢድኩም ጠምዝዝዎም። ድሕሪኡ ብመፍትሕ ቶርክ ብመስቀላዊ ስርዓት ኣጽንዕዎም፡ ክሳብ እቲ ንዛ መኪና ዝተወሰነ ሓይሊ። ዘይጸንዐ ጎማ ኣብ ምዝዋር ክወጽእ ይኽእል። ፕሮፋይልን ጸቕጥን ናይ ነፍሲ ወከፍ ኣብ ኢድኩም እትሕዝዎ ጎማ ፈትሹ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.p': "ቅድም ብኢደይ እጠምዝዞም።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.s': { m: "ጎማ ናብ ቦታኡ ትመልስ ኣለኻ። ብጻይ ስራሕ ይብል፡ «ኢምፓክት መፍትሕ ተጠቐም፡ ይቐልጥፍ እዩ።» እንታይ ትገብር?", f: "ጎማ ናብ ቦታኡ ትመልሲ ኣለኺ። ብጻይ ስራሕ ይብል፡ «ኢምፓክት መፍትሕ ተጠቐሚ፡ ይቐልጥፍ እዩ።» እንታይ ትገብሪ?", x: "ጎማ ናብ ቦታኡ ትመልሱ ኣለኹም። ብጻይ ስራሕ ይብል፡ «ኢምፓክት መፍትሕ ተጠቐሙ፡ ይቐልጥፍ እዩ።» እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o1': { m: "ብኢድካ ጠምዝዞም፡ ድሕሪኡ ብመፍትሕ ቶርክ ኣጽንዖም።", f: "ብኢድኪ ጠምዝዝዮም፡ ድሕሪኡ ብመፍትሕ ቶርክ ኣጽንዕዮም።", x: "ብኢድኩም ጠምዝዝዎም፡ ድሕሪኡ ብመፍትሕ ቶርክ ኣጽንዕዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o2': { m: "ብኢምፓክት መፍትሕ ብሓይሊ ኣጽንዖም።", f: "ብኢምፓክት መፍትሕ ብሓይሊ ኣጽንዕዮም።", x: "ብኢምፓክት መፍትሕ ብሓይሊ ኣጽንዕዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.o3': { m: "ብኢድካ ጠምዝዞም፡ በቃ ግደፎም።", f: "ብኢድኪ ጠምዝዝዮም፡ በቃ ግደፍዮም።", x: "ብኢድኩም ጠምዝዝዎም፡ በቃ ግደፍዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.w': "ኢምፓክት መፍትሕ ንቡሎን ልዕሊ ዓቐን ወይ ትሕቲ ዓቐን ከጽንዖ ይኽእል። ቅኑዕ ሓይሊ ዝህብ መፍትሕ ቶርክ ጥራይ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.oilchange': "ዘይቲ ምቕያር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliefilter': "ፊልትሮ ዘይቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oliepeilstok': "መዐቀኒ ዘይቲ (ክንደይ ዘይቲ ከም ዘሎ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opvangbak': "መቐበሊ ዘይቲ (ነቲ ኣረጊት ዘይቲ ይቕበል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trechter': "ኢምቡቶ (መፍሰሲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aftapplug': "ቱፖ መውጽኢ ዘይቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.olievat': "በርሚል ዘይቲ", // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.1': { m: "ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲ እቲ ሞተር ኣቐምጦ።", f: "ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲ እቲ ሞተር ኣቐምጥዮ።", x: "ነቲ መቐበሊ ዘይቲ ኣብ ትሕቲ እቲ ሞተር ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.2': { m: "ነቲ ቱፖ መውጽኢ ዘይቲ ፍትሖ።", f: "ነቲ ቱፖ መውጽኢ ዘይቲ ፍትሕዮ።", x: "ነቲ ቱፖ መውጽኢ ዘይቲ ፍትሕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.oilchange.3': { m: "ኣብቲ መዐቀኒ ዘይቲ ርአ።", f: "ኣብቲ መዐቀኒ ዘይቲ ርኣዪ።", x: "ኣብቲ መዐቀኒ ዘይቲ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.q': "ክንደይ ዘይቲ ክኣቱ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange.a': { m: "ኣርባዕተ ሊትሮ። ድሕሪኡ ኣብቲ መዐቀኒ ርአ።", f: "ኣርባዕተ ሊትሮ። ድሕሪኡ ኣብቲ መዐቀኒ ርኣዪ።", x: "ኣርባዕተ ሊትሮ። ድሕሪኡ ኣብቲ መዐቀኒ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.oilchange': "ኣረጊት ዘይቲ ናብ በርሚል እዩ ዝኸይድ፡ ናብ ቦይ ኣይኮነን", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.b': { m: "ኣረጊት ዘይቲ ንማይን ንሓመድን ሕማቕ እዩ። ቁሩብ ዘይቲ ብዙሕ ማይ ከርስሕ ይኽእል። ስለዚ ኩሉ ኣረጊት ዘይቲ ኣብቲ መቐበሊ ዘይቲ ተቐበሎ፡ ናብቲ ናይ ኣረጊት ዘይቲ በርሚል ድማ ኣፍስሶ። ፈጺምካ ናብ ቦይ ወይ መሕጸቢ ኣይተፍስሶ። ኣረጊት ፊልትሮታትን ዘይቲ ዝለኸዮም ጨርቅታትን ናብ ናቶም መጉሓፊ እዮም ዝኸዱ። ውዑይ ዘይቲ ቆርበትካ ከንድድ ይኽእል፡ ቅድም ነቲ ሞተር ቁሩብ ክዝሕል ግደፎ፡ ጓንቲ ድማ ግበር። ዝፈሰሰ ዘይቲ ብቕጽበት ኣጽርዮ፡ ኣብ መሬት ዘሎ ዘይቲ የንሸራትት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣረጊት ዘይቲ ንማይን ንሓመድን ሕማቕ እዩ። ቁሩብ ዘይቲ ብዙሕ ማይ ከርስሕ ይኽእል። ስለዚ ኩሉ ኣረጊት ዘይቲ ኣብቲ መቐበሊ ዘይቲ ተቐበልዮ፡ ናብቲ ናይ ኣረጊት ዘይቲ በርሚል ድማ ኣፍስስዮ። ፈጺምኪ ናብ ቦይ ወይ መሕጸቢ ኣይተፍስስዮ። ኣረጊት ፊልትሮታትን ዘይቲ ዝለኸዮም ጨርቅታትን ናብ ናቶም መጉሓፊ እዮም ዝኸዱ። ውዑይ ዘይቲ ቆርበትኪ ከንድድ ይኽእል፡ ቅድም ነቲ ሞተር ቁሩብ ክዝሕል ግደፍዮ፡ ጓንቲ ድማ ግበሪ። ዝፈሰሰ ዘይቲ ብቕጽበት ኣጽርይዮ፡ ኣብ መሬት ዘሎ ዘይቲ የንሸራትት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣረጊት ዘይቲ ንማይን ንሓመድን ሕማቕ እዩ። ቁሩብ ዘይቲ ብዙሕ ማይ ከርስሕ ይኽእል። ስለዚ ኩሉ ኣረጊት ዘይቲ ኣብቲ መቐበሊ ዘይቲ ተቐበልዎ፡ ናብቲ ናይ ኣረጊት ዘይቲ በርሚል ድማ ኣፍስስዎ። ፈጺምኩም ናብ ቦይ ወይ መሕጸቢ ኣይተፍስስዎ። ኣረጊት ፊልትሮታትን ዘይቲ ዝለኸዮም ጨርቅታትን ናብ ናቶም መጉሓፊ እዮም ዝኸዱ። ውዑይ ዘይቲ ቆርበትኩም ከንድድ ይኽእል፡ ቅድም ነቲ ሞተር ቁሩብ ክዝሕል ግደፍዎ፡ ጓንቲ ድማ ግበሩ። ዝፈሰሰ ዘይቲ ብቕጽበት ኣጽርይዎ፡ ኣብ መሬት ዘሎ ዘይቲ የንሸራትት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.p': "እቲ ኣረጊት ዘይቲ ናበይ እዩ ዝኸይድ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.s': { m: "እቲ መቐበሊ ዘይቲ ብኣረጊት ዘይቲ መሊኡ። እቲ በርሚል ኣብቲ ካልእ ጫፍ ናይቲ ጋራጅ እዩ። እንታይ ትገብር?", f: "እቲ መቐበሊ ዘይቲ ብኣረጊት ዘይቲ መሊኡ። እቲ በርሚል ኣብቲ ካልእ ጫፍ ናይቲ ጋራጅ እዩ። እንታይ ትገብሪ?", x: "እቲ መቐበሊ ዘይቲ ብኣረጊት ዘይቲ መሊኡ። እቲ በርሚል ኣብቲ ካልእ ጫፍ ናይቲ ጋራጅ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o1': { m: "ብጥንቃቐ ናብቲ በርሚል ውሰዶ።", f: "ብጥንቃቐ ናብቲ በርሚል ውሰድዮ።", x: "ብጥንቃቐ ናብቲ በርሚል ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o2': { m: "ኣብ ደገ ናብ ዘሎ ቦይ ኣፍስሶ።", f: "ኣብ ደገ ናብ ዘሎ ቦይ ኣፍስስዮ።", x: "ኣብ ደገ ናብ ዘሎ ቦይ ኣፍስስዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.o3': { m: "ንደሓር ኣብ ትሕቲ እታ መኪና ግደፎ።", f: "ንደሓር ኣብ ትሕቲ እታ መኪና ግደፍዮ።", x: "ንደሓር ኣብ ትሕቲ እታ መኪና ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.w': "ኣብ ቦይ ዝፈሰሰ ኣረጊት ዘይቲ ነቲ ማይ የርስሖ። ኣብ ትሕቲ መኪና ዘሎ ምሉእ መቐበሊ ብእግሪ ተሃሪሙ ይግምጠል።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.brakes': "ፍሬናትን መብራህትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remschijf': "ዲስኮ ፍሬኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remblok': "ፋሻ ፍሬኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koplamp': "ናይ ቅድሚት መብራህቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remvloeistof': "ፈሳሲ ፍሬኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.remklauw': "ካሊፐር ፍሬኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlamp': "ናይ ድሕሪት መብራህቲ", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.1': "እቶም ፋሻታት ፍሬኖ ተሃሊኾም እዮም።", // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.2': { m: "ነቲ ፈሳሲ ፍሬኖ ፈትሾ።", f: "ነቲ ፈሳሲ ፍሬኖ ፈትሽዮ።", x: "ነቲ ፈሳሲ ፍሬኖ ፈትሽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.brakes.3': "እታ ናይ ድሕሪት ጸጋመይቲ መብራህቲ ኣይትሰርሕን እያ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.q': "እቲ ዲስኮ ፍሬኖ እውን ሓድሽ ክኸውን ኣለዎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes.a': "እወ፡ ኣዝዩ ቀጢኑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.brakes': { m: "ፍሬናት፡ ክልተ ግዜ ፈትሽ", f: "ፍሬናት፡ ክልተ ግዜ ፈትሺ", x: "ፍሬናት፡ ክልተ ግዜ ፈትሹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.b': { m: "ፍሬናት ህይወት ሰባት የድሕኑ። ስለዚ ብህድኣት ስራሕ፡ ስራሕካ ድማ ክልተ ግዜ ፈትሽ። ድሕሪ ሓደስቲ ፋሻታት ወይ ዲስኮታት፡ እታ መኪና ቅድሚ ምንቅስቓሳ ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቖ፡ እቲ ቀዳማይ ምጥዋቕ ብዙሕ ግዜ ኣዝዩ ናብ ታሕቲ ይኸይድ። ፈሳሲ ፍሬኖ ንቖርበትካን ንሕብሪ መኪናን ሕማቕ እዩ፡ ጓንቲ ግበር፡ ነጠብጣብ ድማ ብቕጽበት ደምስሶ። ሓመድ ፍሬኖ ብጸቕጢ ኣየር ኣይትንፍሖ፡ ብመጽረዪ ፍሬኖን ብጨርቅን ኣጽርዮ። እታ መኪና ቅድሚ ምውጻኣ፡ ኩሉ መብራህቲ ፈትሽ፡ መብራህቲ ፍሬኖ እውን።", f: "ፍሬናት ህይወት ሰባት የድሕኑ። ስለዚ ብህድኣት ስርሒ፡ ስራሕኪ ድማ ክልተ ግዜ ፈትሺ። ድሕሪ ሓደስቲ ፋሻታት ወይ ዲስኮታት፡ እታ መኪና ቅድሚ ምንቅስቓሳ ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቕዮ፡ እቲ ቀዳማይ ምጥዋቕ ብዙሕ ግዜ ኣዝዩ ናብ ታሕቲ ይኸይድ። ፈሳሲ ፍሬኖ ንቖርበትኪን ንሕብሪ መኪናን ሕማቕ እዩ፡ ጓንቲ ግበሪ፡ ነጠብጣብ ድማ ብቕጽበት ደምስስዮ። ሓመድ ፍሬኖ ብጸቕጢ ኣየር ኣይትንፍሕዮ፡ ብመጽረዪ ፍሬኖን ብጨርቅን ኣጽርይዮ። እታ መኪና ቅድሚ ምውጻኣ፡ ኩሉ መብራህቲ ፈትሺ፡ መብራህቲ ፍሬኖ እውን።", x: "ፍሬናት ህይወት ሰባት የድሕኑ። ስለዚ ብህድኣት ስርሑ፡ ስራሕኩም ድማ ክልተ ግዜ ፈትሹ። ድሕሪ ሓደስቲ ፋሻታት ወይ ዲስኮታት፡ እታ መኪና ቅድሚ ምንቅስቓሳ ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቕዎ፡ እቲ ቀዳማይ ምጥዋቕ ብዙሕ ግዜ ኣዝዩ ናብ ታሕቲ ይኸይድ። ፈሳሲ ፍሬኖ ንቖርበትኩምን ንሕብሪ መኪናን ሕማቕ እዩ፡ ጓንቲ ግበሩ፡ ነጠብጣብ ድማ ብቕጽበት ደምስስዎ። ሓመድ ፍሬኖ ብጸቕጢ ኣየር ኣይትንፍሕዎ፡ ብመጽረዪ ፍሬኖን ብጨርቅን ኣጽርይዎ። እታ መኪና ቅድሚ ምውጻኣ፡ ኩሉ መብራህቲ ፈትሹ፡ መብራህቲ ፍሬኖ እውን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.p': "ነቲ ፔዳል ፍሬኖ ገለ ግዜ እጥውቖ ኣለኹ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.s': { m: "ሓደስቲ ፋሻታት ፍሬኖ ገጢምካ። እታ መኪና ናብ ደገ ክትወጽእ ኣለዋ። እንታይ ትገብር?", f: "ሓደስቲ ፋሻታት ፍሬኖ ገጢምኪ። እታ መኪና ናብ ደገ ክትወጽእ ኣለዋ። እንታይ ትገብሪ?", x: "ሓደስቲ ፋሻታት ፍሬኖ ገጢምኩም። እታ መኪና ናብ ደገ ክትወጽእ ኣለዋ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o1': { m: "ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቖ።", f: "ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቕዮ።", x: "ነቲ ፔዳል ፍሬኖ ገለ ግዜ ጠውቕዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o2': { m: "ብቕጽበት ዘዊርካ ኣውጽኣ።", f: "ብቕጽበት ዘዊርኪ ኣውጽእያ።", x: "ብቕጽበት ዘዊርኩም ኣውጽእዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.o3': { m: "ከይፈተሽካ ደፊእካ ኣውጽኣ።", f: "ከይፈተሽኪ ደፊእኪ ኣውጽእያ።", x: "ከይፈተሽኩም ደፊእኩም ኣውጽእዋ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.w': "ድሕሪ ሓደስቲ ፋሻታት፡ እቲ ፔዳል ኣብ ቀዳማይ ግዜ ኣዝዩ ናብ ታሕቲ ክኸይድ ይኽእል። ሽዑ እታ መኪና ደው ኣይትብልን።", // nieuw, nalezen // nagelezen AI 22 nov
    'l.diagnosis': "ጌጋታት ምንባብን ትእዛዝ ስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diagnosecomputer': "ኮምፒተር መርመራ (ጌጋታት መኪና የንብብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingslampje': "መጠንቀቕታ መብራህቲ (ኣብ ዳሽቦርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkorder': "ትእዛዝ ስራሕ (ኣብ መኪና እንታይ ክግበር ከም ዘለዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kentekenplaat': "ታርጋ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.autosleutel': "መፍትሕ መኪና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoelhoes': "መሸፈኒ መንበር (ንመንበር ጽሩይ ይሕዞ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.1': { m: "ነቲ ኮምፒተር መርመራ ኣራኽቦ።", f: "ነቲ ኮምፒተር መርመራ ኣራኽብዮ።", x: "ነቲ ኮምፒተር መርመራ ኣራኽብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.2': "እቲ መጠንቀቕታ መብራህቲ ይበርህ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.diagnosis.3': { m: "ኣብቲ መንበር መሸፈኒ መንበር ግበር።", f: "ኣብቲ መንበር መሸፈኒ መንበር ግበሪ።", x: "ኣብቲ መንበር መሸፈኒ መንበር ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.q': "ኣብዛ መኪና እንታይ ክግበር ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis.a': { m: "ኣብቲ ትእዛዝ ስራሕ ርአ።", f: "ኣብቲ ትእዛዝ ስራሕ ርኣዪ።", x: "ኣብቲ ትእዛዝ ስራሕ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.diagnosis': { m: "ንመኪና ከም ናትካ ገይርካ ሓዛ", f: "ንመኪና ከም ናትኪ ገይርኪ ሓዝያ", x: "ንመኪና ከም ናትኩም ገይርኩም ሓዝዋ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.b': { m: "ዓሚል መኪናኡን መፍትሑን ይህበካ። ንክልቲኦም ብጥንቃቐ ሓዞም። ቅድሚ ምእታውካ ኣብ መንበር መሸፈኒ፡ ኣብ መሬት ድማ ምንጣፍ ግበር። ኣብቲ ትእዛዝ ስራሕ ዘሎ ጥራይ ግበር። ካልእ ዝተበላሸወ ነገር ትረኽብ ዲኻ? ጽሓፎ፡ ንተቖጻጻሪኻ ድማ ንገሮ፡ ዓሚል እዩ ዝውስን። ነቲ መፍትሕ ምስ ምልክቱ ኣብ ቦታኡ ሓዞ። ሬድዮ፡ ተሌፎን ወይ ኣብ መኪና ዘለዉ ነገራት ኣይትጠቐም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ዓሚል መኪናኡን መፍትሑን ይህበኪ። ንክልቲኦም ብጥንቃቐ ሓዝዮም። ቅድሚ ምእታውኪ ኣብ መንበር መሸፈኒ፡ ኣብ መሬት ድማ ምንጣፍ ግበሪ። ኣብቲ ትእዛዝ ስራሕ ዘሎ ጥራይ ግበሪ። ካልእ ዝተበላሸወ ነገር ትረኽቢ ዲኺ? ጽሓፍዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ፡ ዓሚል እዩ ዝውስን። ነቲ መፍትሕ ምስ ምልክቱ ኣብ ቦታኡ ሓዝዮ። ሬድዮ፡ ተሌፎን ወይ ኣብ መኪና ዘለዉ ነገራት ኣይትጠቐሚ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ዓሚል መኪናኡን መፍትሑን ይህበኩም። ንክልቲኦም ብጥንቃቐ ሓዝዎም። ቅድሚ ምእታውኩም ኣብ መንበር መሸፈኒ፡ ኣብ መሬት ድማ ምንጣፍ ግበሩ። ኣብቲ ትእዛዝ ስራሕ ዘሎ ጥራይ ግበሩ። ካልእ ዝተበላሸወ ነገር ትረኽቡ ዲኹም? ጽሓፍዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ፡ ዓሚል እዩ ዝውስን። ነቲ መፍትሕ ምስ ምልክቱ ኣብ ቦታኡ ሓዝዎ። ሬድዮ፡ ተሌፎን ወይ ኣብ መኪና ዘለዉ ነገራት ኣይትጠቐሙ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.p': "እዚ ኣብቲ ትእዛዝ ስራሕ የለን።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.s': { m: "ዘይቲ ትቕይር ኣለኻ። ሓደ ጎማ ዳርጋ ልሙጽ እዩ። ኣብቲ ትእዛዝ ስራሕ የለን። እንታይ ትገብር?", f: "ዘይቲ ትቕይሪ ኣለኺ። ሓደ ጎማ ዳርጋ ልሙጽ እዩ። ኣብቲ ትእዛዝ ስራሕ የለን። እንታይ ትገብሪ?", x: "ዘይቲ ትቕይሩ ኣለኹም። ሓደ ጎማ ዳርጋ ልሙጽ እዩ። ኣብቲ ትእዛዝ ስራሕ የለን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o1': { m: "ጽሓፎ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ጽሓፍዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ጽሓፍዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o2': { m: "ነቲ ጎማ ብቕጽበት ቀይሮ።", f: "ነቲ ጎማ ብቕጽበት ቀይርዮ።", x: "ነቲ ጎማ ብቕጽበት ቀይርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.o3': { m: "ገለ ኣይትበል፡ ስራሕካ ኣይኮነን።", f: "ገለ ኣይትበሊ፡ ስራሕኪ ኣይኮነን።", x: "ገለ ኣይትበሉ፡ ስራሕኩም ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.w': "እንታይ ከም ዝግበርን ዝኽፈልን ዓሚል እዩ ዝውስን። ግን እቲ ጎማ ሓደገኛ ምዃኑ ክፈልጥ ኣለዎ።", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang, two units each (23 November 2026).
    'u.mowing': "ሳዕሪ ምቑራጽን ምግራዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.mowing': "ሳዕሪ ምቑራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gras': "ሳዕሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maaien': "ምሕጻድ (ሳዕሪ ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grasmaaier': "መቑረጺ ሳዕሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zitmaaier': "ዝቕመጡሉ መቑረጺ ሳዕሪ (ሰብ ኣብ ልዕሊኡ ተቐሚጡ ዝዝውሮ መቑረጺ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bosmaaier': "ብሩሽ ካተር (ኣብ ነዊሕ በትሪ ዘሎ መቑረጺ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gelaatsscherm': "መከላኸሊ ገጽ", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.1': { m: "ቅድም ነቲ ኣብ ጥቓ ጫፍ ዘሎ ሳዕሪ ቑረጾ።", f: "ቅድም ነቲ ኣብ ጥቓ ጫፍ ዘሎ ሳዕሪ ቑረጽዮ።", x: "ቅድም ነቲ ኣብ ጥቓ ጫፍ ዘሎ ሳዕሪ ቑረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.2': "እቲ ሳዕሪ ኣዝዩ ጠሊሉ እዩ። ጽባሕ ክንቈርጾ ኢና።", // nieuw, nalezen // nagelezen AI 28 nov
    's.mowing.3': { m: "መከላኸሊ ገጽካ ግበር።", f: "መከላኸሊ ገጽኪ ግበሪ።", x: "መከላኸሊ ገጽኩም ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.q': "ነቲ ዝቕመጡሉ መቑረጺ ሳዕሪ ክወስዶ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.a': { m: "እወ፡ ግን ቅድም ነቶም ኣእማን ኣልግሶም።", f: "እወ፡ ግን ቅድም ነቶም ኣእማን ኣልግስዮም።", x: "እወ፡ ግን ቅድም ነቶም ኣእማን ኣልግስዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing': "ኣእማን ርሑቕ ይፍንጠሩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.b': { m: "መቑረጺ ሳዕሪ ወይ ብሩሽ ካተር ንሓደ እምኒ ኣዝዩ ርሑቕን ኣዝዩ ብሓይልን ክድርብዮ ይኽእል። ስለዚ ቅድም ኣብቲ ሳዕሪ ተዘዋወር፡ ኣእማን፡ ብርጭቆን ጨናፍርን ድማ ኣልግስ። መከላኸሊ ገጽካ ወይ ናይ ድሕንነት መነጽር፡ ሓላዊ እዝንን ናይ ድሕንነት ጫማን ግበር። ካልኦት ሰባት ኣዝዮም ርሒቖም ክጸንሑ ግበር። ሓደ ሰብ ይቐርብ ድዩ? ነቲ ማሽን ደው ኣብሎ። እቲ ሞተር ክሰርሕ ከሎ ፈጺምካ ኢድካ ናብ ትሕቲ መቑረጺ ሳዕሪ ኣይተእቱ፡ ኣጥፍኦ፡ እቲ ላማ ደው ክሳዕ ዝብል ድማ ተጸበ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መቑረጺ ሳዕሪ ወይ ብሩሽ ካተር ንሓደ እምኒ ኣዝዩ ርሑቕን ኣዝዩ ብሓይልን ክድርብዮ ይኽእል። ስለዚ ቅድም ኣብቲ ሳዕሪ ተዘዋወሪ፡ ኣእማን፡ ብርጭቆን ጨናፍርን ድማ ኣልግሲ። መከላኸሊ ገጽኪ ወይ ናይ ድሕንነት መነጽር፡ ሓላዊ እዝንን ናይ ድሕንነት ጫማን ግበሪ። ካልኦት ሰባት ኣዝዮም ርሒቖም ክጸንሑ ግበሪ። ሓደ ሰብ ይቐርብ ድዩ? ነቲ ማሽን ደው ኣብልዮ። እቲ ሞተር ክሰርሕ ከሎ ፈጺምኪ ኢድኪ ናብ ትሕቲ መቑረጺ ሳዕሪ ኣይተእትዊ፡ ኣጥፍእዮ፡ እቲ ላማ ደው ክሳዕ ዝብል ድማ ተጸበዪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መቑረጺ ሳዕሪ ወይ ብሩሽ ካተር ንሓደ እምኒ ኣዝዩ ርሑቕን ኣዝዩ ብሓይልን ክድርብዮ ይኽእል። ስለዚ ቅድም ኣብቲ ሳዕሪ ተዘዋወሩ፡ ኣእማን፡ ብርጭቆን ጨናፍርን ድማ ኣልግሱ። መከላኸሊ ገጽኩም ወይ ናይ ድሕንነት መነጽር፡ ሓላዊ እዝንን ናይ ድሕንነት ጫማን ግበሩ። ካልኦት ሰባት ኣዝዮም ርሒቖም ክጸንሑ ግበሩ። ሓደ ሰብ ይቐርብ ድዩ? ነቲ ማሽን ደው ኣብልዎ። እቲ ሞተር ክሰርሕ ከሎ ፈጺምኩም ኢድኩም ናብ ትሕቲ መቑረጺ ሳዕሪ ኣይተእትዉ፡ ኣጥፍእዎ፡ እቲ ላማ ደው ክሳዕ ዝብል ድማ ተጸበዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.p': "በጃኹም፡ ርሒቕኩም ክትጸንሑ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.s': { m: "ብብሩሽ ካተር ትሰርሕ ኣለኻ። ሓደ ሰብኣይ ምስ ከልቡ ናባኻ ይመጽእ ኣሎ። እንታይ ትገብር?", f: "ብብሩሽ ካተር ትሰርሒ ኣለኺ። ሓደ ሰብኣይ ምስ ከልቡ ናባኺ ይመጽእ ኣሎ። እንታይ ትገብሪ?", x: "ብብሩሽ ካተር ትሰርሑ ኣለኹም። ሓደ ሰብኣይ ምስ ከልቡ ናባኹም ይመጽእ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o1': { m: "ክሳዕ ዝሓልፍ ነቲ ማሽን ደው ኣብሎ።", f: "ክሳዕ ዝሓልፍ ነቲ ማሽን ደው ኣብልዮ።", x: "ክሳዕ ዝሓልፍ ነቲ ማሽን ደው ኣብልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o2': { m: "ቀጽል፡ ንሱ ክርእየካ ይኽእል እዩ።", f: "ቀጽሊ፡ ንሱ ክርእየኪ ይኽእል እዩ።", x: "ቀጽሉ፡ ንሱ ክርእየኩም ይኽእል እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.o3': { m: "ካብኡ ናብ ካልእ ገጽ ተመለስ፡ ድሕሪኡ ቀጽል።", f: "ካብኡ ናብ ካልእ ገጽ ተመለሲ፡ ድሕሪኡ ቀጽሊ።", x: "ካብኡ ናብ ካልእ ገጽ ተመለሱ፡ ድሕሪኡ ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mowing.w': "ካብ ብሩሽ ካተር ዝፍንጠር እምኒ ንሓደ ሰብ ብኽፉእ ከቑስሎ ይኽእል፡ ካብ ርሑቕ እውን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pruning': "ምግራዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeien': "ምግራዝ (ካብ ተኽሊ ጨናፍር ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeischaar': "መቐስ ምግራዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tak': "ጨንፈር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.struik': "ቆጥቋጥ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boom': "ኦም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeizaag': "መጋዝ ምግራዝ", // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.1': { m: "ነቶም ኣብ ጥቓ መንገዲ ዘለዉ ቆጥቋጣት ግረዞም።", f: "ነቶም ኣብ ጥቓ መንገዲ ዘለዉ ቆጥቋጣት ግረዝዮም።", x: "ነቶም ኣብ ጥቓ መንገዲ ዘለዉ ቆጥቋጣት ግረዝዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.2': { m: "እዚ ጨንፈር ነቒጹ እዩ። ብመጋዝ ቑረጾ።", f: "እዚ ጨንፈር ነቒጹ እዩ። ብመጋዝ ቑረጽዮ።", x: "እዚ ጨንፈር ነቒጹ እዩ። ብመጋዝ ቑረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pruning.3': { m: "ነቶም ጨናፍር ኣብ ሓደ ኩምራ ኣቐምጦም።", f: "ነቶም ጨናፍር ኣብ ሓደ ኩምራ ኣቐምጥዮም።", x: "ነቶም ጨናፍር ኣብ ሓደ ኩምራ ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.q': "ኣየኖት ጨናፍር እዮም ክቑረጹ ዘለዎም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a': "እቶም ዝነቐጹ ጨናፍር ጥራይ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning': "ጽሩይ ምቑራጽ ብዝበለጸ ይሓዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.b': { m: "ብበሊሕን ጽሩይን መቐስ ግረዝ። ጽሩይ ምቑራጽ ቀልጢፉ ይሓዊ፡ ዝተቐደደ ጨንፈር ግን ይሓምም። ልክዕ ኣብ ልዕሊ ቡቝሊ ወይ ናይ ጎኒ ጨንፈር ቑረጽ፡ ነዊሕ ቁራጽ ድማ ኣይትግደፍ። ቅድም ነቶም ዝነቐጹን ዝተሰብሩን ጨናፍር ኣልግሶም። እታ ካልእ ኢድካ ካብቶም ላማታት ርሒቓ ክትጸንሕ ግበር። ጓንቲ ግበር፡ ገለ ኣትክልቲ እሾኽ ኣለዎም፡ ወይ ንቖርበትካ የቐይሕዎ። ድሕሪ ስራሕ ነቲ መቐስ ኣጽርዮ።", f: "ብበሊሕን ጽሩይን መቐስ ግረዚ። ጽሩይ ምቑራጽ ቀልጢፉ ይሓዊ፡ ዝተቐደደ ጨንፈር ግን ይሓምም። ልክዕ ኣብ ልዕሊ ቡቝሊ ወይ ናይ ጎኒ ጨንፈር ቑረጺ፡ ነዊሕ ቁራጽ ድማ ኣይትግደፊ። ቅድም ነቶም ዝነቐጹን ዝተሰብሩን ጨናፍር ኣልግስዮም። እታ ካልእ ኢድኪ ካብቶም ላማታት ርሒቓ ክትጸንሕ ግበሪ። ጓንቲ ግበሪ፡ ገለ ኣትክልቲ እሾኽ ኣለዎም፡ ወይ ንቖርበትኪ የቐይሕዎ። ድሕሪ ስራሕ ነቲ መቐስ ኣጽርይዮ።", x: "ብበሊሕን ጽሩይን መቐስ ግረዙ። ጽሩይ ምቑራጽ ቀልጢፉ ይሓዊ፡ ዝተቐደደ ጨንፈር ግን ይሓምም። ልክዕ ኣብ ልዕሊ ቡቝሊ ወይ ናይ ጎኒ ጨንፈር ቑረጹ፡ ነዊሕ ቁራጽ ድማ ኣይትግደፉ። ቅድም ነቶም ዝነቐጹን ዝተሰብሩን ጨናፍር ኣልግስዎም። እታ ካልእ ኢድኩም ካብቶም ላማታት ርሒቓ ክትጸንሕ ግበሩ። ጓንቲ ግበሩ፡ ገለ ኣትክልቲ እሾኽ ኣለዎም፡ ወይ ንቖርበትኩም የቐይሕዎ። ድሕሪ ስራሕ ነቲ መቐስ ኣጽርይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.p': "ኣበይ እየ ክቖርጽ ዘለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.s': { m: "መቐስ ምግራዝካ በሊሕ ኣይኮነን። ነቶም ጨናፍር ይቐዶም ኣሎ። እንታይ ትገብር?", f: "መቐስ ምግራዝኪ በሊሕ ኣይኮነን። ነቶም ጨናፍር ይቐዶም ኣሎ። እንታይ ትገብሪ?", x: "መቐስ ምግራዝኩም በሊሕ ኣይኮነን። ነቶም ጨናፍር ይቐዶም ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o1': { m: "በሊሕ መቐስ ሕተት።", f: "በሊሕ መቐስ ሕተቲ።", x: "በሊሕ መቐስ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o2': { m: "ነቲ ጨንፈር ብዝያዳ ሓይሊ ስሓቦ።", f: "ነቲ ጨንፈር ብዝያዳ ሓይሊ ስሓብዮ።", x: "ነቲ ጨንፈር ብዝያዳ ሓይሊ ስሓብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.o3': { m: "ቀጽል፡ ቆጥቋጥ ጥራይ እዩ።", f: "ቀጽሊ፡ ቆጥቋጥ ጥራይ እዩ።", x: "ቀጽሉ፡ ቆጥቋጥ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.w': { m: "በሊሕ ዘይኮነ መቐስ ነቲ ጨንፈር ይቐዶ። እቲ ተኽሊ ይሓምም፡ ንስኻ ድማ ብዝያዳ ትጽዕር።", f: "በሊሕ ዘይኮነ መቐስ ነቲ ጨንፈር ይቐዶ። እቲ ተኽሊ ይሓምም፡ ንስኺ ድማ ብዝያዳ ትጽዕሪ።", x: "በሊሕ ዘይኮነ መቐስ ነቲ ጨንፈር ይቐዶ። እቲ ተኽሊ ይሓምም፡ ንስኹም ድማ ብዝያዳ ትጽዕሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.hedge': "ሓጹር ምቑራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heg': "ሓጹር ኣትክልቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heggenschaar': "መቑረጺ ሓጹር (ሓጹር ዝቖርጽ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruiwagen': "ካሪዮላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hark': "ራስትረሎ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snoeiafval': "ጎሓፍ ኣትክልቲ (ዝተቘርጹ ጨናፍርን ቈጽልን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zeil': "ኢንቸራታ (ዓቢ ሽፋን ፕላስቲክ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.1': { m: "ነቲ ኢንቸራታ ኣብ ትሕቲ እቲ ሓጹር ዘርግሖ።", f: "ነቲ ኢንቸራታ ኣብ ትሕቲ እቲ ሓጹር ዘርግሕዮ።", x: "ነቲ ኢንቸራታ ኣብ ትሕቲ እቲ ሓጹር ዘርግሕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.2': { m: "ነቲ ሓጹር ጽቡቕን ቅኑዕን ገይርካ ቑረጾ።", f: "ነቲ ሓጹር ጽቡቕን ቅኑዕን ገይርኪ ቑረጽዮ።", x: "ነቲ ሓጹር ጽቡቕን ቅኑዕን ገይርኩም ቑረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hedge.3': { m: "ነቲ ጎሓፍ ኣትክልቲ ብካሪዮላ ውሰዶ።", f: "ነቲ ጎሓፍ ኣትክልቲ ብካሪዮላ ውሰድዮ።", x: "ነቲ ጎሓፍ ኣትክልቲ ብካሪዮላ ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.q': "እቲ ሓጹር ክሳዕ ክንደይ ቁመት ክጸንሕ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a': "ክሳዕ እቲ ገመድ። ካብኡ ክሓጽር የብሉን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge': { m: "ቅድም ቤት ዑፍ ድለይ", f: "ቅድም ቤት ዑፍ ድለዪ", x: "ቅድም ቤት ዑፍ ድለዩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.b': { m: "ኣብ ጽድያን ሓጋይን ኣዕዋፍ ኣብ ሓጹራትን ቆጥቋጣትን ኣባይቲ ይሰርሑ። ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። ስለዚ ቅድሚ ምቑራጽካ ናብ ውሽጢ እቲ ሓጹር ጠምት። እንቋቑሖ ወይ ጨቓዊት ዘለዎ ቤት ዑፍ ትርኢ ዲኻ? ኣብኡ ኣይትቑረጽ፡ ንተቖጻጻሪኻ ድማ ንገሮ። ነቲ መቑረጺ ሓጹር ብኽልተ ኣእዳው ሓዞ። ኣብ መሬት ወይ ኣብ ጽቡቕ መሳልል ጸኒዕካ ደው በል፡ ኣብ መንበር ወይ ባልዲ ግን ፈጺሙ ኣይኮነን። ነቲ ኬብል ኣብ ድሕሬኻ ሓዞ።", f: "ኣብ ጽድያን ሓጋይን ኣዕዋፍ ኣብ ሓጹራትን ቆጥቋጣትን ኣባይቲ ይሰርሑ። ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። ስለዚ ቅድሚ ምቑራጽኪ ናብ ውሽጢ እቲ ሓጹር ጠምቲ። እንቋቑሖ ወይ ጨቓዊት ዘለዎ ቤት ዑፍ ትርእዪ ዲኺ? ኣብኡ ኣይትቑረጺ፡ ንተቖጻጻሪኺ ድማ ንገርዮ። ነቲ መቑረጺ ሓጹር ብኽልተ ኣእዳው ሓዝዮ። ኣብ መሬት ወይ ኣብ ጽቡቕ መሳልል ጸኒዕኪ ደው በሊ፡ ኣብ መንበር ወይ ባልዲ ግን ፈጺሙ ኣይኮነን። ነቲ ኬብል ኣብ ድሕሬኺ ሓዝዮ።", x: "ኣብ ጽድያን ሓጋይን ኣዕዋፍ ኣብ ሓጹራትን ቆጥቋጣትን ኣባይቲ ይሰርሑ። ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። ስለዚ ቅድሚ ምቑራጽኩም ናብ ውሽጢ እቲ ሓጹር ጠምቱ። እንቋቑሖ ወይ ጨቓዊት ዘለዎ ቤት ዑፍ ትርእዩ ዲኹም? ኣብኡ ኣይትቑረጹ፡ ንተቖጻጻሪኹም ድማ ንገርዎ። ነቲ መቑረጺ ሓጹር ብኽልተ ኣእዳው ሓዝዎ። ኣብ መሬት ወይ ኣብ ጽቡቕ መሳልል ጸኒዕኩም ደው በሉ፡ ኣብ መንበር ወይ ባልዲ ግን ፈጺሙ ኣይኮነን። ነቲ ኬብል ኣብ ድሕሬኹም ሓዝዎ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.hedge.p': "ኣብዚ ቤት ዑፍ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.s': { m: "ኣብ ግንቦት ሓጹር ትቖርጽ ኣለኻ። ጨቓዊት ዘለዉዎ ቤት ዑፍ ትርኢ። እንታይ ትገብር?", f: "ኣብ ግንቦት ሓጹር ትቖርጺ ኣለኺ። ጨቓዊት ዘለዉዎ ቤት ዑፍ ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ ግንቦት ሓጹር ትቖርጹ ኣለኹም። ጨቓዊት ዘለዉዎ ቤት ዑፍ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o1': { m: "ኣብኡ ደው በል፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ኣብኡ ደው በሊ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ኣብኡ ደው በሉ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o2': { m: "ብጥንቃቐ ኣብ ዙርያኡ ቑረጽ።", f: "ብጥንቃቐ ኣብ ዙርያኡ ቑረጺ።", x: "ብጥንቃቐ ኣብ ዙርያኡ ቑረጹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.o3': { m: "ነቲ ቤት ዑፍ ኣውጺእካ ቀጽል።", f: "ነቲ ቤት ዑፍ ኣውጺእኪ ቀጽሊ።", x: "ነቲ ቤት ዑፍ ኣውጺእኩም ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.w': { m: "ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። በዚ ክፋል ሓጹር እንታይ ከም ዝግበር ተቖጻጻሪኻ እዩ ዝውስን።", f: "ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። በዚ ክፋል ሓጹር እንታይ ከም ዝግበር ተቖጻጻሪኺ እዩ ዝውስን።", x: "ኣዕዋፍ ዝጥቀሙሉ ኣባይቲ ብሕጊ ዝተሓለዉ እዮም። በዚ ክፋል ሓጹር እንታይ ከም ዝግበር ተቖጻጻሪኹም እዩ ዝውስን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.chainsaw': "መጋዝ ሰንሰለትን መንፈሒ ቈጽልን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kettingzaag': "መጋዝ ሰንሰለት (ሞቶሰጋ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stam': "ጉንዲ (ናይ ኦም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaagbroek': "ናይ መጋዝ ሰንሰለት ስረ (ንሰንሰለት ደው የብሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladblazer': "መንፈሒ ቈጽሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bladeren': "ቈጽሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jerrycan': "ታኒካ (ንነዳዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.1': { m: "ናይ መጋዝ ሰንሰለት ስረኻ ኽደን።", f: "ናይ መጋዝ ሰንሰለት ስረኺ ኽደኒ።", x: "ናይ መጋዝ ሰንሰለት ስረኹም ኽደኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.2': { m: "ነቲ ቈጽሊ ናብ ሓደ ኩምራ ንፍሖ።", f: "ነቲ ቈጽሊ ናብ ሓደ ኩምራ ንፍሕዮ።", x: "ነቲ ቈጽሊ ናብ ሓደ ኩምራ ንፍሕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.chainsaw.3': { m: "እቲ ሞተር ምስ ዝዝሕል ጥራይ ነዳዲ ምላእ።", f: "እቲ ሞተር ምስ ዝዝሕል ጥራይ ነዳዲ ምላኢ።", x: "እቲ ሞተር ምስ ዝዝሕል ጥራይ ነዳዲ ምላኡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.q': "ብመጋዝ ሰንሰለት ክሰርሕ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a': { m: "ገና ኣይኮነን። ቅድም ኮርስ ትወስድ።", f: "ገና ኣይኮነን። ቅድም ኮርስ ትወስዲ።", x: "ገና ኣይኮነን። ቅድም ኮርስ ትወስዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw': "መጋዝ ሰንሰለት ብስልጠና ጥራይ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.b': { m: "መጋዝ ሰንሰለት ኣብ ስራሕ ኣትክልቲ ካብቶም ኣዝዮም ሓደገኛታት መሳርሒታት ሓደ እዩ። ኮርስ ምስ ወሰድካ፡ ተቖጻጻሪኻ ድማ ይፍቀደካ እዩ ምስ በለ ጥራይ ብኡ ስራሕ። ኩሉ ግዜ ናይ መጋዝ ሰንሰለት ስረ፡ መከላኸሊ ገጽን ሓላዊ እዝንን ዘለዎ ሄልመት፡ ጓንትን ናይ ድሕንነት ቡትስን ግበር። ፈጺምካ በይነኻ ብመጋዝ ሰንሰለት ኣይትስራሕ። ብኽልተ ኣእዳው ሓዞ፡ ካብ መናኩብካ ንላዕሊ ድማ ፈጺምካ ኣይትቑረጽ። ብመንፈሒ ቈጽሊ፡ ፈጺምካ ናብ ሰባት፡ መኻይን ወይ ክፉታት መሳኹቲ ኣይትንፋሕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መጋዝ ሰንሰለት ኣብ ስራሕ ኣትክልቲ ካብቶም ኣዝዮም ሓደገኛታት መሳርሒታት ሓደ እዩ። ኮርስ ምስ ወሰድኪ፡ ተቖጻጻሪኺ ድማ ይፍቀደኪ እዩ ምስ በለ ጥራይ ብኡ ስርሒ። ኩሉ ግዜ ናይ መጋዝ ሰንሰለት ስረ፡ መከላኸሊ ገጽን ሓላዊ እዝንን ዘለዎ ሄልመት፡ ጓንትን ናይ ድሕንነት ቡትስን ግበሪ። ፈጺምኪ በይነኺ ብመጋዝ ሰንሰለት ኣይትስርሒ። ብኽልተ ኣእዳው ሓዝዮ፡ ካብ መናኩብኪ ንላዕሊ ድማ ፈጺምኪ ኣይትቑረጺ። ብመንፈሒ ቈጽሊ፡ ፈጺምኪ ናብ ሰባት፡ መኻይን ወይ ክፉታት መሳኹቲ ኣይትንፍሒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መጋዝ ሰንሰለት ኣብ ስራሕ ኣትክልቲ ካብቶም ኣዝዮም ሓደገኛታት መሳርሒታት ሓደ እዩ። ኮርስ ምስ ወሰድኩም፡ ተቖጻጻሪኹም ድማ ይፍቀደኩም እዩ ምስ በለ ጥራይ ብኡ ስርሑ። ኩሉ ግዜ ናይ መጋዝ ሰንሰለት ስረ፡ መከላኸሊ ገጽን ሓላዊ እዝንን ዘለዎ ሄልመት፡ ጓንትን ናይ ድሕንነት ቡትስን ግበሩ። ፈጺምኩም በይነኹም ብመጋዝ ሰንሰለት ኣይትስርሑ። ብኽልተ ኣእዳው ሓዝዎ፡ ካብ መናኩብኩም ንላዕሊ ድማ ፈጺምኩም ኣይትቑረጹ። ብመንፈሒ ቈጽሊ፡ ፈጺምኩም ናብ ሰባት፡ መኻይን ወይ ክፉታት መሳኹቲ ኣይትንፍሑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.p': "ገና ኣብዚ ኮርስ ኣይወሰድኩን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.s': { m: "ሓደ ብጻይ ስራሕ ከምዚ ይብለካ: \"ነቲ መጋዝ ሰንሰለት ውሰድ፡ ቀሊል እዩ\"። ፈጺምካ ኮርስ ኣይወሰድካን። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ከምዚ ይብለኪ: \"ነቲ መጋዝ ሰንሰለት ውሰዲ፡ ቀሊል እዩ\"። ፈጺምኪ ኮርስ ኣይወሰድክን። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ከምዚ ይብለኩም: \"ነቲ መጋዝ ሰንሰለት ውሰዱ፡ ቀሊል እዩ\"። ፈጺምኩም ኮርስ ኣይወሰድኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o1': { m: "ገና ኮርስ ከም ዘይወሰድካ ንገር።", f: "ገና ኮርስ ከም ዘይወሰድኪ ንገሪ።", x: "ገና ኮርስ ከም ዘይወሰድኩም ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o2': { m: "ሓንሳእ ጥራይ ብጥንቃቐ ፈትኖ።", f: "ሓንሳእ ጥራይ ብጥንቃቐ ፈትንዮ።", x: "ሓንሳእ ጥራይ ብጥንቃቐ ፈትንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.o3': { m: "ውሰዶ፡ ቅድም ግን ቪድዮ ርአ።", f: "ውሰድዮ፡ ቅድም ግን ቪድዮ ርኣዪ።", x: "ውሰድዎ፡ ቅድም ግን ቪድዮ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.w': { m: "መጋዝ ሰንሰለት ኣብ ሓንቲ ካልኢት እግሪኻ ክቖርጽ ይኽእል። ብዘይ ስልጠና ብኸመይ ንድሕሪት ክዘልል ከም ዝኽእል ኣይትፈልጥ።", f: "መጋዝ ሰንሰለት ኣብ ሓንቲ ካልኢት እግሪኺ ክቖርጽ ይኽእል። ብዘይ ስልጠና ብኸመይ ንድሕሪት ክዘልል ከም ዝኽእል ኣይትፈልጢ።", x: "መጋዝ ሰንሰለት ኣብ ሓንቲ ካልኢት እግሪኹም ክቖርጽ ይኽእል። ብዘይ ስልጠና ብኸመይ ንድሕሪት ክዘልል ከም ዝኽእል ኣይትፈልጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.planting': "ምትካል፡ ዘይድለ ሳዕሪን ጎደናን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.weeding': "ዘይድለ ሳዕሪ ምንቃል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruid': "ዘይድለ ሳዕሪ (ክለዓሉ ዘለዎም ኣትክልቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wieden': "ዘይድለ ሳዕሪ ምንቃል (ዘይድለ ሳዕሪ ብሱሩ ምልዓል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schoffel': "ዛፓ (መኳዓቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perk': "ቦታ ዕምባባ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onkruidbrander': "መንደዲ ዘይድለ ሳዕሪ (ብሙቐት ዘይድለ ሳዕሪ ይቐትል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wortel': "ሱር (ናይ ተኽሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.1': { m: "ነቲ ዘይድለ ሳዕሪ ምስ ሱሩ ንቐሎ።", f: "ነቲ ዘይድለ ሳዕሪ ምስ ሱሩ ንቐልዮ።", x: "ነቲ ዘይድለ ሳዕሪ ምስ ሱሩ ንቐልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.2': { m: "ነቲ ኣብ ጥቓ መእተዊ ዘሎ ቦታ ዕምባባ ብዛፓ ኹዓቶ።", f: "ነቲ ኣብ ጥቓ መእተዊ ዘሎ ቦታ ዕምባባ ብዛፓ ኹዓትዮ።", x: "ነቲ ኣብ ጥቓ መእተዊ ዘሎ ቦታ ዕምባባ ብዛፓ ኹዓትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.weeding.3': { m: "ተጠንቀቕ፡ እቲ መንደዲ ዘይድለ ሳዕሪ ውዑይ እዩ።", f: "ተጠንቀቒ፡ እቲ መንደዲ ዘይድለ ሳዕሪ ውዑይ እዩ።", x: "ተጠንቀቑ፡ እቲ መንደዲ ዘይድለ ሳዕሪ ውዑይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.q': "እዚ ዘይድለ ሳዕሪ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a': { m: "ኣይፋል፡ እዚ ተኽሊ እዩ። ግደፎ።", f: "ኣይፋል፡ እዚ ተኽሊ እዩ። ግደፍዮ።", x: "ኣይፋል፡ እዚ ተኽሊ እዩ። ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding': "ዘይድለ ሳዕሪ፡ እቲ ሱር ክለዓል ኣለዎ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.b': { m: "ሱሩ ኣብ መሬት እንተ ተሪፉ፡ ዘይድለ ሳዕሪ ተመሊሱ ይበቍል። ስለዚ ምስ ሱሩ ንቐሎ፡ ወይ ልክዕ ኣብ ትሕቲ ሓመድ ብዛፓ ኹዓት። እቲ ሓመድ ቁሩብ ጠሊሉ ከሎ ስራሕ፡ ሽዑ እቲ ሱር ብቐሊሉ ይወጽእ። ብኸመይ ከም ዝግበር እንተ ዘይተማሂርካ፡ ተቖጻጻሪኻ ድማ እንተ ዘይበለ፡ ኣንጻር ዘይድለ ሳዕሪ ዝንፋሕ መድሃኒት ኣይትጠቐም። መንደዲ ዘይድለ ሳዕሪ ኣዝዩ ውዑይ እዩ፡ ካብ ደረቕ ሳዕሪ፡ ቈጽሊ፡ ሓጹራት፡ መኻይንን መጕሓፍያታትን ኣርሒቕካ ሓዞ። ክነድድ ከሎ ፈጺምካ ኣብ መሬት ኣይተቐምጦ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሱሩ ኣብ መሬት እንተ ተሪፉ፡ ዘይድለ ሳዕሪ ተመሊሱ ይበቍል። ስለዚ ምስ ሱሩ ንቐልዮ፡ ወይ ልክዕ ኣብ ትሕቲ ሓመድ ብዛፓ ኹዓቲ። እቲ ሓመድ ቁሩብ ጠሊሉ ከሎ ስርሒ፡ ሽዑ እቲ ሱር ብቐሊሉ ይወጽእ። ብኸመይ ከም ዝግበር እንተ ዘይተማሂርኪ፡ ተቖጻጻሪኺ ድማ እንተ ዘይበለ፡ ኣንጻር ዘይድለ ሳዕሪ ዝንፋሕ መድሃኒት ኣይትጠቐሚ። መንደዲ ዘይድለ ሳዕሪ ኣዝዩ ውዑይ እዩ፡ ካብ ደረቕ ሳዕሪ፡ ቈጽሊ፡ ሓጹራት፡ መኻይንን መጕሓፍያታትን ኣርሒቕኪ ሓዝዮ። ክነድድ ከሎ ፈጺምኪ ኣብ መሬት ኣይተቐምጥዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሱሩ ኣብ መሬት እንተ ተሪፉ፡ ዘይድለ ሳዕሪ ተመሊሱ ይበቍል። ስለዚ ምስ ሱሩ ንቐልዎ፡ ወይ ልክዕ ኣብ ትሕቲ ሓመድ ብዛፓ ኹዓቱ። እቲ ሓመድ ቁሩብ ጠሊሉ ከሎ ስርሑ፡ ሽዑ እቲ ሱር ብቐሊሉ ይወጽእ። ብኸመይ ከም ዝግበር እንተ ዘይተማሂርኩም፡ ተቖጻጻሪኹም ድማ እንተ ዘይበለ፡ ኣንጻር ዘይድለ ሳዕሪ ዝንፋሕ መድሃኒት ኣይትጠቐሙ። መንደዲ ዘይድለ ሳዕሪ ኣዝዩ ውዑይ እዩ፡ ካብ ደረቕ ሳዕሪ፡ ቈጽሊ፡ ሓጹራት፡ መኻይንን መጕሓፍያታትን ኣርሒቕኩም ሓዝዎ። ክነድድ ከሎ ፈጺምኩም ኣብ መሬት ኣይተቐምጥዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.p': "እዚ ዘይድለ ሳዕሪ ድዩ ወይስ ተኽሊ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.s': { m: "ብመንደዲ ዘይድለ ሳዕሪ ትሰርሕ ኣለኻ። ኣብ ጎኒ እቲ መንገዲ ደረቕ ሓጹር ኣሎ። እንታይ ትገብር?", f: "ብመንደዲ ዘይድለ ሳዕሪ ትሰርሒ ኣለኺ። ኣብ ጎኒ እቲ መንገዲ ደረቕ ሓጹር ኣሎ። እንታይ ትገብሪ?", x: "ብመንደዲ ዘይድለ ሳዕሪ ትሰርሑ ኣለኹም። ኣብ ጎኒ እቲ መንገዲ ደረቕ ሓጹር ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o1': { m: "ነቲ ኣብኡ ዘሎ ዘይድለ ሳዕሪ ብኢድ ንቐሎ።", f: "ነቲ ኣብኡ ዘሎ ዘይድለ ሳዕሪ ብኢድ ንቐልዮ።", x: "ነቲ ኣብኡ ዘሎ ዘይድለ ሳዕሪ ብኢድ ንቐልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o2': { m: "ቀልጢፍካ ኣንድድ፡ ድሕሪኡ ቀጺልካ ኪድ።", f: "ቀልጢፍኪ ኣንድዲ፡ ድሕሪኡ ቀጺልኪ ኪዲ።", x: "ቀልጢፍኩም ኣንድዱ፡ ድሕሪኡ ቀጺልኩም ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.o3': { m: "ኣንድድ፡ ሓንሳእ ድማ ንድሕሪት ጠምት።", f: "ኣንድዲ፡ ሓንሳእ ድማ ንድሕሪት ጠምቲ።", x: "ኣንድዱ፡ ሓንሳእ ድማ ንድሕሪት ጠምቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.w': "ደረቕ ሓጹር ቀልጢፉ ይነድድ። ኣብ ጥቓ ኣባይቲ ወይ መኻይን ዘሎ ሓዊ ኣዝዩ ሓደገኛ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.planting': "ምትካል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.planten': "ምትካል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schep': "ፓላ (መኳዓቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plantgat': "ጉድጓድ ተኽሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluit': "ሓመድ ሱር (ኣብ ዙርያ ሱራት ዘሎ ሓመድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compost': "ኮምፖስት (ማዳበርያ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boompaal': "ዓንዲ ኦም (ንንኡስ ኦም ዝሕዝ በትሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.1': { m: "ንኦም ጉድጓድ ተኽሊ ኹዓት።", f: "ንኦም ጉድጓድ ተኽሊ ኹዓቲ።", x: "ንኦም ጉድጓድ ተኽሊ ኹዓቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.2': { m: "ነቲ ኦም ኣብ ጎኒ እቲ ዓንዲ ቅኑዕ ገይርካ ኣቐምጦ።", f: "ነቲ ኦም ኣብ ጎኒ እቲ ዓንዲ ቅኑዕ ገይርኪ ኣቐምጥዮ።", x: "ነቲ ኦም ኣብ ጎኒ እቲ ዓንዲ ቅኑዕ ገይርኩም ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.planting.3': { m: "ነቶም ሓደስቲ ኣትክልቲ ብዙሕ ማይ ሃቦም።", f: "ነቶም ሓደስቲ ኣትክልቲ ብዙሕ ማይ ሃብዮም።", x: "ነቶም ሓደስቲ ኣትክልቲ ብዙሕ ማይ ሃብዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.q': "እዚ ተኽሊ ኣበይ እዩ ዝኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a': "ኣብ ድሕሪት እቲ ቦታ ዕምባባ፡ ኣብ ጥቓ እቲ መንደቕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting': "ኣብ ትሕቲ መሬት፡ ኬብላትን ቱቦታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.b': { m: "ኣብ ትሕቲ ሳዕርን ጽርግያ ኣግርን ብዙሕ ግዜ ኬብላትን ቱቦታትን ኣለዉ፡ ንኤሌክትሪክ፡ ጋዝ፡ ማይን ኢንተርነትን። ስለዚ ብጥንቃቐ ኹዓት። ኣብ መሬት ሕብሪ ዘለዎ ቴፕ ወይ ሰሌዳ ፕላስቲክ ትርኢ ዲኻ፡ ወይ ሓደ ተሪር ነገር ትሃርም ዲኻ? ምኹዓት ኣቋርጽ፡ ንተቖጻጻሪኻ ድማ ንገሮ። ፈጺምካ ብሓይሊ ምኹዓት ኣይትቕጽል። ከቢድ ኦም ወይ ዓቢ ሓመድ ሱር ብሓባር፡ ኣብራኽካ ዓጺፍካ ኣልዕል። ንሓድሽ ተኽሊ ኣብታ ሓንቲ መዓልቲ ማይ ሃቦ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ትሕቲ ሳዕርን ጽርግያ ኣግርን ብዙሕ ግዜ ኬብላትን ቱቦታትን ኣለዉ፡ ንኤሌክትሪክ፡ ጋዝ፡ ማይን ኢንተርነትን። ስለዚ ብጥንቃቐ ኹዓቲ። ኣብ መሬት ሕብሪ ዘለዎ ቴፕ ወይ ሰሌዳ ፕላስቲክ ትርእዪ ዲኺ፡ ወይ ሓደ ተሪር ነገር ትሃርሚ ዲኺ? ምኹዓት ኣቋርጺ፡ ንተቖጻጻሪኺ ድማ ንገርዮ። ፈጺምኪ ብሓይሊ ምኹዓት ኣይትቕጽሊ። ከቢድ ኦም ወይ ዓቢ ሓመድ ሱር ብሓባር፡ ኣብራኽኪ ዓጺፍኪ ኣልዕሊ። ንሓድሽ ተኽሊ ኣብታ ሓንቲ መዓልቲ ማይ ሃብዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ትሕቲ ሳዕርን ጽርግያ ኣግርን ብዙሕ ግዜ ኬብላትን ቱቦታትን ኣለዉ፡ ንኤሌክትሪክ፡ ጋዝ፡ ማይን ኢንተርነትን። ስለዚ ብጥንቃቐ ኹዓቱ። ኣብ መሬት ሕብሪ ዘለዎ ቴፕ ወይ ሰሌዳ ፕላስቲክ ትርእዩ ዲኹም፡ ወይ ሓደ ተሪር ነገር ትሃርሙ ዲኹም? ምኹዓት ኣቋርጹ፡ ንተቖጻጻሪኹም ድማ ንገርዎ። ፈጺምኩም ብሓይሊ ምኹዓት ኣይትቕጽሉ። ከቢድ ኦም ወይ ዓቢ ሓመድ ሱር ብሓባር፡ ኣብራኽኩም ዓጺፍኩም ኣልዕሉ። ንሓድሽ ተኽሊ ኣብታ ሓንቲ መዓልቲ ማይ ሃብዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.p': "ሓደ ተሪር ነገር እሃርም ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.s': { m: "ጉድጓድ ተኽሊ ትኹዕት ኣለኻ። ፓላኻ ቀይሕ ቴፕ ፕላስቲክ ትሃርም። እንታይ ትገብር?", f: "ጉድጓድ ተኽሊ ትኹዕቲ ኣለኺ። ፓላኺ ቀይሕ ቴፕ ፕላስቲክ ትሃርም። እንታይ ትገብሪ?", x: "ጉድጓድ ተኽሊ ትኹዕቱ ኣለኹም። ፓላኹም ቀይሕ ቴፕ ፕላስቲክ ትሃርም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o1': { m: "ምኹዓት ኣቋርጽ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ምኹዓት ኣቋርጺ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ምኹዓት ኣቋርጹ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o2': { m: "ኣብ ጎኒ እቲ ቴፕ ብጥንቃቐ ምኹዓት ቀጽል።", f: "ኣብ ጎኒ እቲ ቴፕ ብጥንቃቐ ምኹዓት ቀጽሊ።", x: "ኣብ ጎኒ እቲ ቴፕ ብጥንቃቐ ምኹዓት ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.o3': { m: "ነቲ ቴፕ ስሒብካ ኣውጽኦ፡ ቀጽል።", f: "ነቲ ቴፕ ስሒብኪ ኣውጽእዮ፡ ቀጽሊ።", x: "ነቲ ቴፕ ስሒብኩም ኣውጽእዎ፡ ቀጽሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.w': "ኣብ መሬት ዘሎ ቴፕ ኣብ ትሕቲኡ ኬብል ወይ ቱቦ ከም ዘሎ የጠንቅቕ። ቱቦ ጋዝ ወይ ኬብል ኤሌክትሪክ ኣዝዩ ሓደገኛ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.roadside': "ኣብ ጥቓ ጽርግያ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pion': "ኮኖ (ናይ ትራፊክ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkeer': "ትራፊክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoep': "ጽርግያ ኣግሪ (ኣብ ጎኒ ጽርግያ ዘሎ መንገዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fietser': "ዘዋሪ ብሽክለታ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pijlwagen': "ተጐታቲት ፍላጻ (ንመራሕቲ መኪና ዘጠንቅቕ ዓቢ ፍላጻ ዘለዋ ተጐታቲት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.berm': "ጎኒ ጽርግያ (ኣብ ጎኒ ጽርግያ ዘሎ ሳዕሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.1': { m: "ጃኬትካ ኽደን። ኣብ ጥቓ ጽርግያ ኢና እንሰርሕ።", f: "ጃኬትኪ ኽደኒ። ኣብ ጥቓ ጽርግያ ኢና እንሰርሕ።", x: "ጃኬትኩም ኽደኑ። ኣብ ጥቓ ጽርግያ ኢና እንሰርሕ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.2': { m: "ነቶም ኮኖታት ኣብ ድሕሪ እታ ቫን ኣቐምጦም።", f: "ነቶም ኮኖታት ኣብ ድሕሪ እታ ቫን ኣቐምጥዮም።", x: "ነቶም ኮኖታት ኣብ ድሕሪ እታ ቫን ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.roadside.3': { m: "ንዘወርቲ ብሽክለታ ተጠንቀቕ።", f: "ንዘወርቲ ብሽክለታ ተጠንቀቒ።", x: "ንዘወርቲ ብሽክለታ ተጠንቀቑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.q': "ሕጂ ክሰግር ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a': { m: "ኣይፋል፡ ተጸበ። ሓንቲ ዓባይ መኪና ጽዕነት ትመጽእ ኣላ።", f: "ኣይፋል፡ ተጸበዪ። ሓንቲ ዓባይ መኪና ጽዕነት ትመጽእ ኣላ።", x: "ኣይፋል፡ ተጸበዩ። ሓንቲ ዓባይ መኪና ጽዕነት ትመጽእ ኣላ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside': { m: "ኣብ ጥቓ ጽርግያ፡ ክትረአ ኣለካ፡ ኣብ ድሕሪ ኮኖታት ጽናሕ", f: "ኣብ ጥቓ ጽርግያ፡ ክትረኣዪ ኣለኪ፡ ኣብ ድሕሪ ኮኖታት ጽንሒ", x: "ኣብ ጥቓ ጽርግያ፡ ክትረኣዩ ኣለኩም፡ ኣብ ድሕሪ ኮኖታት ጽንሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.b': { m: "ኣብ ጥቓ ጽርግያ ምስራሕ ሓደገኛ እዩ፡ መራሕቲ መኪና ናብ ተሌፎኖም ይጥምቱ፡ ወይ ብዙሕ ይቀላጠፉ። ስለዚ ኩሉ ግዜ ዝበርቕ ጃኬትካ ኽደን፡ ንሓጺር ስራሕ እውን። ቅድሚ ምጅማርካ ነቶም ኮኖታትን ምልክታትን ኣቐምጦም፡ ኣብ መወዳእታ ድማ ኣልዕሎም። ነታ ቫን ከም መከላኸሊ ኣብ መንጎኻን ትራፊክን ኣቑማ። ኣብ ድሕሪ እቶም ኮኖታት ጽናሕ። ከይጠመትካ ፈጺምካ ንድሕሪት ኣይትስጐም፡ ምስ ዝከኣል ድማ ገጽካ ናብ ትራፊክ ገይርካ ስራሕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ጥቓ ጽርግያ ምስራሕ ሓደገኛ እዩ፡ መራሕቲ መኪና ናብ ተሌፎኖም ይጥምቱ፡ ወይ ብዙሕ ይቀላጠፉ። ስለዚ ኩሉ ግዜ ዝበርቕ ጃኬትኪ ኽደኒ፡ ንሓጺር ስራሕ እውን። ቅድሚ ምጅማርኪ ነቶም ኮኖታትን ምልክታትን ኣቐምጥዮም፡ ኣብ መወዳእታ ድማ ኣልዕልዮም። ነታ ቫን ከም መከላኸሊ ኣብ መንጎኺን ትራፊክን ኣቑምያ። ኣብ ድሕሪ እቶም ኮኖታት ጽንሒ። ከይጠመትኪ ፈጺምኪ ንድሕሪት ኣይትስጐሚ፡ ምስ ዝከኣል ድማ ገጽኪ ናብ ትራፊክ ገይርኪ ስርሒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ጥቓ ጽርግያ ምስራሕ ሓደገኛ እዩ፡ መራሕቲ መኪና ናብ ተሌፎኖም ይጥምቱ፡ ወይ ብዙሕ ይቀላጠፉ። ስለዚ ኩሉ ግዜ ዝበርቕ ጃኬትኩም ኽደኑ፡ ንሓጺር ስራሕ እውን። ቅድሚ ምጅማርኩም ነቶም ኮኖታትን ምልክታትን ኣቐምጥዎም፡ ኣብ መወዳእታ ድማ ኣልዕልዎም። ነታ ቫን ከም መከላኸሊ ኣብ መንጎኹምን ትራፊክን ኣቑምዋ። ኣብ ድሕሪ እቶም ኮኖታት ጽንሑ። ከይጠመትኩም ፈጺምኩም ንድሕሪት ኣይትስጐሙ፡ ምስ ዝከኣል ድማ ገጽኩም ናብ ትራፊክ ገይርኩም ስርሑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.p': "ቅድም ነቶም ኮኖታት ኤቐምጦም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.s': { m: "ኣብ ጥቓ ጽርግያ ሓደ ንእሽቶ ቆጥቋጥ ክትቖርጽ ኣለካ። ሓሙሽተ ደቒቕ ጥራይ ይወስድ። እንታይ ትገብር?", f: "ኣብ ጥቓ ጽርግያ ሓደ ንእሽቶ ቆጥቋጥ ክትቖርጺ ኣለኪ። ሓሙሽተ ደቒቕ ጥራይ ይወስድ። እንታይ ትገብሪ?", x: "ኣብ ጥቓ ጽርግያ ሓደ ንእሽቶ ቆጥቋጥ ክትቖርጹ ኣለኩም። ሓሙሽተ ደቒቕ ጥራይ ይወስድ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o1': { m: "ነቲ ጃኬት ኽደን፡ ነቶም ኮኖታት ድማ ኣቐምጦም።", f: "ነቲ ጃኬት ኽደኒ፡ ነቶም ኮኖታት ድማ ኣቐምጥዮም።", x: "ነቲ ጃኬት ኽደኑ፡ ነቶም ኮኖታት ድማ ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o2': { m: "ብዘይ ኮኖታት ቀልጢፍካ ግበሮ።", f: "ብዘይ ኮኖታት ቀልጢፍኪ ግበርዮ።", x: "ብዘይ ኮኖታት ቀልጢፍኩም ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.o3': { m: "ሓደ ብጻይ ስራሕ ነተን መኻይን ክከታተለን ሕተቶ።", f: "ሓደ ብጻይ ስራሕ ነተን መኻይን ክከታተለን ሕተትዮ።", x: "ሓደ ብጻይ ስራሕ ነተን መኻይን ክከታተለን ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.w': "ሓደጋ ሓንቲ ካልኢት ጥራይ ይወስድ። ብዘይ ኮኖታት ሓሙሽተ ደቒቕ፡ ብዘይ መከላኸሊ ሓሙሽተ ደቒቕ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.litter': "ዝተደርበየ ጎሓፍን እቲ ሰፈርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwerfafval': "ዝተደርበየ ጎሓፍ (ኣብ ጎደና ዘሎ ጎሓፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grijper': "መልቀሚ ጎሓፍ (ጎሓፍ ዝሕዝ በትሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniszak': "ሳንጣ ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherven': "ስባር ብርጭቆ (በሊሕ ቁራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhanger': "ተጐታቲት (ሪሞርኪዮ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewoner': "ነባሪ (ኣብዚ ዝነብር ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.1': { m: "ነቲ ጎሓፍ ብመልቀሚ ጎሓፍ ልቐሞ።", f: "ነቲ ጎሓፍ ብመልቀሚ ጎሓፍ ልቐምዮ።", x: "ነቲ ጎሓፍ ብመልቀሚ ጎሓፍ ልቐምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.2': { m: "ተጠንቀቕ፡ ኣብዚ ስባር ብርጭቆ ኣሎ።", f: "ተጠንቀቒ፡ ኣብዚ ስባር ብርጭቆ ኣሎ።", x: "ተጠንቀቑ፡ ኣብዚ ስባር ብርጭቆ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.litter.3': { m: "ነቶም ሳንጣታት ጎሓፍ ኣብ ጥቓ እታ ተጐታቲት ኣቐምጦም።", f: "ነቶም ሳንጣታት ጎሓፍ ኣብ ጥቓ እታ ተጐታቲት ኣቐምጥዮም።", x: "ነቶም ሳንጣታት ጎሓፍ ኣብ ጥቓ እታ ተጐታቲት ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.q': "እዚ ኦም መዓስ እዩ ዝግረዝ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a': "ኣይፈልጥን። ንምምሕዳር ከተማ ሕተቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter': { m: "ፈጺምካ መርፍእ ኣይትተንክፍ", f: "ፈጺምኪ መርፍእ ኣይትተንክፊ", x: "ፈጺምኩም መርፍእ ኣይትተንክፉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.b': { m: "ኣብ መናፈሻታትን ቆጥቋጣትን ሓድሓደ ግዜ መርፍእ ሲሪንጋ ትረክብ። ፈጺምካ ብኢድካ ኣይትልቐሞ፡ ጓንቲ ገይርካ እውን። መልቀሚ ጎሓፍ ተጠቐም፡ ነቲ መርፍእ ድማ ኣብ ተሪር ሳጹን ወይ ክዳን ዘለዎ ጥርሙዝ ኣእትዎ፡ ኣብ ሳንጣ ጎሓፍ ግን ፈጺሙ ኣይኮነን። ንተቖጻጻሪኻ ንገሮ። መርፍእ ወጊኡካ ድዩ? ነቲ መቑሰሊ ብብዙሕ ማይ ሕጸቦ፡ ብቕጽበት ድማ ናብ ሓኪም ደውል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ መናፈሻታትን ቆጥቋጣትን ሓድሓደ ግዜ መርፍእ ሲሪንጋ ትረኽቢ። ፈጺምኪ ብኢድኪ ኣይትልቐምዮ፡ ጓንቲ ገይርኪ እውን። መልቀሚ ጎሓፍ ተጠቐሚ፡ ነቲ መርፍእ ድማ ኣብ ተሪር ሳጹን ወይ ክዳን ዘለዎ ጥርሙዝ ኣእትውዮ፡ ኣብ ሳንጣ ጎሓፍ ግን ፈጺሙ ኣይኮነን። ንተቖጻጻሪኺ ንገርዮ። መርፍእ ወጊኡኪ ድዩ? ነቲ መቑሰሊ ብብዙሕ ማይ ሕጸብዮ፡ ብቕጽበት ድማ ናብ ሓኪም ደውሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ መናፈሻታትን ቆጥቋጣትን ሓድሓደ ግዜ መርፍእ ሲሪንጋ ትረኽቡ። ፈጺምኩም ብኢድኩም ኣይትልቐምዎ፡ ጓንቲ ገይርኩም እውን። መልቀሚ ጎሓፍ ተጠቐሙ፡ ነቲ መርፍእ ድማ ኣብ ተሪር ሳጹን ወይ ክዳን ዘለዎ ጥርሙዝ ኣእትውዎ፡ ኣብ ሳንጣ ጎሓፍ ግን ፈጺሙ ኣይኮነን። ንተቖጻጻሪኹም ንገርዎ። መርፍእ ወጊኡኩም ድዩ? ነቲ መቑሰሊ ብብዙሕ ማይ ሕጸብዎ፡ ብቕጽበት ድማ ናብ ሓኪም ደውሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.litter.p': "ኣብዚ መርፍእ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.s': { m: "ኣብ ሳዕሪ፡ ኣብ ጎኒ ሓደ መንበር፡ መርፍእ ትርኢ። እንታይ ትገብር?", f: "ኣብ ሳዕሪ፡ ኣብ ጎኒ ሓደ መንበር፡ መርፍእ ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ ሳዕሪ፡ ኣብ ጎኒ ሓደ መንበር፡ መርፍእ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o1': { m: "ብመልቀሚ ጎሓፍ ልቐሞ።", f: "ብመልቀሚ ጎሓፍ ልቐምዮ።", x: "ብመልቀሚ ጎሓፍ ልቐምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o2': { m: "ጓንቲ ገይርካ ልቐሞ።", f: "ጓንቲ ገይርኪ ልቐምዮ።", x: "ጓንቲ ገይርኩም ልቐምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.o3': { m: "ኣብ ሳንጣ ጎሓፍ ኣእትዎ።", f: "ኣብ ሳንጣ ጎሓፍ ኣእትውዮ።", x: "ኣብ ሳንጣ ጎሓፍ ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.w': "መርፍእ ሕማም ከመሓላልፍ ይኽእል። ጓንቲ ንመርፍእ ደው ኣየብሎን፡ ተሪር ሳጹን ድማ ንኻልኦት ውሑሳት ይገብሮም።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.frontdesk': "ምቕባል ኣጋይሽ፡ ፖስጣን ኣኼባታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reception': "ኣብ ቅበላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balie': "ቅበላ፡ ባንኮ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoeker': "በጻሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intercom': "ኢንተርኮም (ምስ ኣብ ማዕጾ ዘሎ ሰብ ዝዝረበሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorverbinden': "ምራኻብ (ጻውዒት ተሌፎን ናብ ካልእ ሰብ ምሕላፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toestel': "ውሽጣዊ ቁጽሪ (ኣብ ውሽጢ ህንጻ ዘሎ ቁጽሪ ተሌፎን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wachtruimte': "መጽበዪ ቦታ", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.1': "ደሓን ሓዲርኩም፡ ክሕግዘኩም ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.2': "ክራኽበኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.reception.3': "በጃኹም ኣብቲ መጽበዪ ቦታ ተቐመጡ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.q': "ምስ ወይዘሮ ያንሰን ቆጸራ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a': "ሓንሳእ። ሕጂ ክድውል እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception': { m: "ንስኻ ቀዳማይ ገጽ ኢኻ", f: "ንስኺ ቀዳማይ ገጽ ኢኺ", x: "ንስኹም ቀዳማይ ገጽ ኢኹም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.b': { m: "ኣብ ቅበላ፡ ንስኻ እቲ በጻሒ ዝረኽቦ ቀዳማይ ሰብ ኢኻ። ቀና በል፡ ፍሽኽ በል፡ ሰላም ድማ በል፡ ብተሌፎን ስራሕ ምስ በዝሓካ እውን። ንበጻሕቲ ብኽብሪ፡ ብ\"u\"፡ ተዛረቦም። ተሌፎን ክትልዕል ከለኻ፡ ስም እቲ ትካልን ስምካን በል። መልሱ ኣይትፈልጥን ዲኻ? ከም ዘይትፈልጥ ንገር፡ ዝፈልጥ ሰብ ድማ ድለይ። ንዘይትፈልጦም ሰባት ፈጺምካ ኣስማት፡ ቁጽሪ ተሌፎን ወይ ክፍልታት ሰራሕተኛታት ኣይትሃብ።", f: "ኣብ ቅበላ፡ ንስኺ እቲ በጻሒ ዝረኽቦ ቀዳማይ ሰብ ኢኺ። ቀና በሊ፡ ፍሽኽ በሊ፡ ሰላም ድማ በሊ፡ ብተሌፎን ስራሕ ምስ በዝሓኪ እውን። ንበጻሕቲ ብኽብሪ፡ ብ\"u\"፡ ተዛረብዮም። ተሌፎን ክትልዕሊ ከለኺ፡ ስም እቲ ትካልን ስምኪን በሊ። መልሱ ኣይትፈልጢን ዲኺ? ከም ዘይትፈልጢ ንገሪ፡ ዝፈልጥ ሰብ ድማ ድለዪ። ንዘይትፈልጥዮም ሰባት ፈጺምኪ ኣስማት፡ ቁጽሪ ተሌፎን ወይ ክፍልታት ሰራሕተኛታት ኣይትሃቢ።", x: "ኣብ ቅበላ፡ ንስኹም እቲ በጻሒ ዝረኽቦ ቀዳማይ ሰብ ኢኹም። ቀና በሉ፡ ፍሽኽ በሉ፡ ሰላም ድማ በሉ፡ ብተሌፎን ስራሕ ምስ በዝሓኩም እውን። ንበጻሕቲ ብኽብሪ፡ ብ\"u\"፡ ተዛረብዎም። ተሌፎን ክትልዕሉ ከለኹም፡ ስም እቲ ትካልን ስምኩምን በሉ። መልሱ ኣይትፈልጡን ዲኹም? ከም ዘይትፈልጡ ንገሩ፡ ዝፈልጥ ሰብ ድማ ድለዩ። ንዘይትፈልጥዎም ሰባት ፈጺምኩም ኣስማት፡ ቁጽሪ ተሌፎን ወይ ክፍልታት ሰራሕተኛታት ኣይትሃቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.p': "ደሓን ሓዲርኩም፡ ብኸመይ ክሕግዘኩም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.s': { m: "ብተሌፎን ትዛረብ ኣለኻ። ሓደ በጻሒ ናብ ቅበላ መጺኡ ይጽበ። እንታይ ትገብር?", f: "ብተሌፎን ትዛረቢ ኣለኺ። ሓደ በጻሒ ናብ ቅበላ መጺኡ ይጽበ። እንታይ ትገብሪ?", x: "ብተሌፎን ትዛረቡ ኣለኹም። ሓደ በጻሒ ናብ ቅበላ መጺኡ ይጽበ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o1': { m: "ቀና በል፡ ቀልጢፍካ ከም እትመጽእ ኣርኢ።", f: "ቀና በሊ፡ ቀልጢፍኪ ከም እትመጽኢ ኣርእዪ።", x: "ቀና በሉ፡ ቀልጢፍኩም ከም እትመጽኡ ኣርእዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o2': { m: "ቀና ከይበልካ ጻውዒትካ ወድእ።", f: "ቀና ከይበልኪ ጻውዒትኪ ወድኢ።", x: "ቀና ከይበልኩም ጻውዒትኩም ወድኡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.o3': { m: "ነቲ ተሌፎን ብቕጽበት ዕጸዎ።", f: "ነቲ ተሌፎን ብቕጽበት ዕጸውዮ።", x: "ነቲ ተሌፎን ብቕጽበት ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.w': "ዝተራእየ በጻሒ ብህድኣት ይጽበ። ዘይተራእየ በጻሒ ከም ዘይተቐበልዎ ይስምዖ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.visitors': "ኣጋይሽ ምቕባል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bezoekerspasje': "ካርድ በጻሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lift': "ሊፍት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.garderobe': "ጋርደሮብ (ጃኬት ዝስቀለሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parkeerplaats': "መዕረፊ መኪና", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.hal': "ኣዳራሽ መእተዊ (ኣብ መእተዊ ዘሎ ዓቢ ክፍሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiden': "ምስናይ (ምስ ሓደ ሰብ ናብ ሓደ ቦታ ምኻድ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.1': "ስምኩም ኣብዚ ክትጽሕፉ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.2': "እንሆ ካርድ በጻሒኹም።", // nieuw, nalezen // nagelezen AI 28 nov
    's.visitors.3': "ክሳዕ እቲ ሊፍት ከሰንየኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.q': "ጃኬተይ ኣበይ ክገድፎ ይኽእል?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a': "ኣብቲ ጋርደሮብ፡ ኣብ ጎኒ እቲ ሊፍት።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors': "ነፍሲ ወከፍ በጻሒ ይምዝገብ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.b': { m: "ነፍሲ ወከፍ በጻሒ ስሙ ኣብቲ ዝርዝር ይጽሕፍ፡ ወይ ኣብቲ ስክሪን ይምዝገብ፡ ካርድ በጻሒ ድማ ይወስድ። ሽዑ መን ኣብቲ ህንጻ ከም ዘሎ ትፈልጥ። ሓዊ ምስ ዝህሉ እዚ ኣገዳሲ እዩ፡ ኩሉ ሰብ ክወጽእ ኣለዎ፡ ሓደ ሰብ ድማ ነቲ ዝርዝር ይፍትሾ። ኣብ መወዳእታ ናይቲ ምብጻሕ፡ እቲ በጻሒ ነቲ ካርድ ይመልሶ። ዘይትፈልጦም ሰባት ምሳኻ ክኣትዉ ኣይተፍቅድ፡ ናብ መን ከም ዝመጹ ብሕያውነት ሕተቶም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ነፍሲ ወከፍ በጻሒ ስሙ ኣብቲ ዝርዝር ይጽሕፍ፡ ወይ ኣብቲ ስክሪን ይምዝገብ፡ ካርድ በጻሒ ድማ ይወስድ። ሽዑ መን ኣብቲ ህንጻ ከም ዘሎ ትፈልጢ። ሓዊ ምስ ዝህሉ እዚ ኣገዳሲ እዩ፡ ኩሉ ሰብ ክወጽእ ኣለዎ፡ ሓደ ሰብ ድማ ነቲ ዝርዝር ይፍትሾ። ኣብ መወዳእታ ናይቲ ምብጻሕ፡ እቲ በጻሒ ነቲ ካርድ ይመልሶ። ዘይትፈልጥዮም ሰባት ምሳኺ ክኣትዉ ኣይተፍቅዲ፡ ናብ መን ከም ዝመጹ ብሕያውነት ሕተትዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ነፍሲ ወከፍ በጻሒ ስሙ ኣብቲ ዝርዝር ይጽሕፍ፡ ወይ ኣብቲ ስክሪን ይምዝገብ፡ ካርድ በጻሒ ድማ ይወስድ። ሽዑ መን ኣብቲ ህንጻ ከም ዘሎ ትፈልጡ። ሓዊ ምስ ዝህሉ እዚ ኣገዳሲ እዩ፡ ኩሉ ሰብ ክወጽእ ኣለዎ፡ ሓደ ሰብ ድማ ነቲ ዝርዝር ይፍትሾ። ኣብ መወዳእታ ናይቲ ምብጻሕ፡ እቲ በጻሒ ነቲ ካርድ ይመልሶ። ዘይትፈልጥዎም ሰባት ምሳኹም ክኣትዉ ኣይተፍቅዱ፡ ናብ መን ከም ዝመጹ ብሕያውነት ሕተትዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.p': "ናብ መን ኢኹም መጺእኩም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.s': { m: "ሓደ ሰብኣይ ኣብ ድሕሪ ሓደ ብጻይ ስራሕ ይኣቱ። ካርድ የብሉን። እንታይ ትገብር?", f: "ሓደ ሰብኣይ ኣብ ድሕሪ ሓደ ብጻይ ስራሕ ይኣቱ። ካርድ የብሉን። እንታይ ትገብሪ?", x: "ሓደ ሰብኣይ ኣብ ድሕሪ ሓደ ብጻይ ስራሕ ይኣቱ። ካርድ የብሉን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o1': { m: "ናብ መን ከም ዝመጸ ብሕያውነት ሕተቶ።", f: "ናብ መን ከም ዝመጸ ብሕያውነት ሕተትዮ።", x: "ናብ መን ከም ዝመጸ ብሕያውነት ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o2': { m: "ግደፎ፡ ምስ ሰራሕተኛ እዩ ኣትዩ።", f: "ግደፍዮ፡ ምስ ሰራሕተኛ እዩ ኣትዩ።", x: "ግደፍዎ፡ ምስ ሰራሕተኛ እዩ ኣትዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.o3': { m: "ብቕጽበት ናብ ፖሊስ ደውል።", f: "ብቕጽበት ናብ ፖሊስ ደውሊ።", x: "ብቕጽበት ናብ ፖሊስ ደውሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.w': { m: "ኣብ ህጹጽ ኩነታት፡ መን ኣብ ውሽጢ ከም ዘሎ ክትፈልጥ ኣለካ። ዝኣቱ ኩሉ ሰብ ድማ ኣብኡ ንምህላው ምኽንያት ኣለዎ ማለት ኣይኮነን።", f: "ኣብ ህጹጽ ኩነታት፡ መን ኣብ ውሽጢ ከም ዘሎ ክትፈልጢ ኣለኪ። ዝኣቱ ኩሉ ሰብ ድማ ኣብኡ ንምህላው ምኽንያት ኣለዎ ማለት ኣይኮነን።", x: "ኣብ ህጹጽ ኩነታት፡ መን ኣብ ውሽጢ ከም ዘሎ ክትፈልጡ ኣለኩም። ዝኣቱ ኩሉ ሰብ ድማ ኣብኡ ንምህላው ምኽንያት ኣለዎ ማለት ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.mailroom': "ፖስጣን ጥቕላላትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkamer': "ክፍሊ ፖስጣ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koerier': "ኩሪየር (ጥቕላላት ዘምጽእ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postvak': "ሳጹን ፖስጣ (ንነፍሲ ወከፍ ሰብ ሓደ ሳጹን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.envelop': "ቡስጣ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdeling': "ክፍሊ (ናይ ትካል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.postkar': "ዓረብያ ፖስጣ", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.1': "እቲ ኩሪየር ጥቕላል የምጽእ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.2': { m: "ነተን ደብዳቤታት ኣብቲ ቅኑዕ ሳጹን ፖስጣ ኣእትወን።", f: "ነተን ደብዳቤታት ኣብቲ ቅኑዕ ሳጹን ፖስጣ ኣእትውየን።", x: "ነተን ደብዳቤታት ኣብቲ ቅኑዕ ሳጹን ፖስጣ ኣእትውወን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mailroom.3': "እዚ ጥቕላል ተበላሽዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.q': "እዚ ጥቕላል ንመን እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a': "ንክፍሊ ፋይናንስ፡ ኣብ ካልኣይ ደርቢ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom': "ፖስጣ ውልቃዊ እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.b': { m: "ፖስጣን ጥቕላላትን ውልቃዊ እዮም። ፈጺምካ ናይ ካልእ ሰብ ደብዳቤ ወይ ጥቕላል ኣይትኽፈት። ኣብ ነፍሲ ወከፍ ኣቕሓ ስምን ክፍልን ፈትሽ፡ ኣብቲ ቅኑዕ ሳጹን ፖስጣ ድማ ኣእትዎ። ኩሪየር ጥቕላል ምስ ዘምጽእ፡ ቅድሚ ምፍራምካ ጠምቶ፡ ተበላሽዩ ድዩ? ጽሓፎ። ሓደ ጥቕላል ዘገርም ድዩ፡ ይጨና፡ የንጠብጥብ፡ ወይ ሰዳዲ የብሉን? ኣይትኽፈቶ፡ ንተቖጻጻሪኻ ድማ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ፖስጣን ጥቕላላትን ውልቃዊ እዮም። ፈጺምኪ ናይ ካልእ ሰብ ደብዳቤ ወይ ጥቕላል ኣይትኽፈቲ። ኣብ ነፍሲ ወከፍ ኣቕሓ ስምን ክፍልን ፈትሺ፡ ኣብቲ ቅኑዕ ሳጹን ፖስጣ ድማ ኣእትውዮ። ኩሪየር ጥቕላል ምስ ዘምጽእ፡ ቅድሚ ምፍራምኪ ጠምትዮ፡ ተበላሽዩ ድዩ? ጽሓፍዮ። ሓደ ጥቕላል ዘገርም ድዩ፡ ይጨና፡ የንጠብጥብ፡ ወይ ሰዳዲ የብሉን? ኣይትኽፈትዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ፖስጣን ጥቕላላትን ውልቃዊ እዮም። ፈጺምኩም ናይ ካልእ ሰብ ደብዳቤ ወይ ጥቕላል ኣይትኽፈቱ። ኣብ ነፍሲ ወከፍ ኣቕሓ ስምን ክፍልን ፈትሹ፡ ኣብቲ ቅኑዕ ሳጹን ፖስጣ ድማ ኣእትውዎ። ኩሪየር ጥቕላል ምስ ዘምጽእ፡ ቅድሚ ምፍራምኩም ጠምትዎ፡ ተበላሽዩ ድዩ? ጽሓፍዎ። ሓደ ጥቕላል ዘገርም ድዩ፡ ይጨና፡ የንጠብጥብ፡ ወይ ሰዳዲ የብሉን? ኣይትኽፈትዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.p': "እቲ ሳጹን ጠሊሉን ተሰይሩን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.s': { m: "ሓደ ኩሪየር ጥቕላል የምጽእ። ሓደ ኩርናዕ ጠሊሉን ተቐዲዱን እዩ። እንታይ ትገብር?", f: "ሓደ ኩሪየር ጥቕላል የምጽእ። ሓደ ኩርናዕ ጠሊሉን ተቐዲዱን እዩ። እንታይ ትገብሪ?", x: "ሓደ ኩሪየር ጥቕላል የምጽእ። ሓደ ኩርናዕ ጠሊሉን ተቐዲዱን እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o1': { m: "ቅድሚ ምፍራምካ ነቲ ጉድኣት ጽሓፎ።", f: "ቅድሚ ምፍራምኪ ነቲ ጉድኣት ጽሓፍዮ።", x: "ቅድሚ ምፍራምኩም ነቲ ጉድኣት ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o2': { m: "ፈርም፡ ንዝኾነ ሰብ ድማ ኣይትንገር።", f: "ፈርሚ፡ ንዝኾነ ሰብ ድማ ኣይትንገሪ።", x: "ፈርሙ፡ ንዝኾነ ሰብ ድማ ኣይትንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.o3': { m: "ኩሉ ምሉእ ምዃኑ ንምርኣይ ክፈቶ።", f: "ኩሉ ምሉእ ምዃኑ ንምርኣይ ክፈትዮ።", x: "ኩሉ ምሉእ ምዃኑ ንምርኣይ ክፈትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.w': { m: "ድሕሪ ምፍራምካ፡ እቲ ጥቕላል ደሓን ከም ዝነበረ ይመስል። ሽዑ ንጉድኣት ዝኸፍል ሰብ የለን።", f: "ድሕሪ ምፍራምኪ፡ እቲ ጥቕላል ደሓን ከም ዝነበረ ይመስል። ሽዑ ንጉድኣት ዝኸፍል ሰብ የለን።", x: "ድሕሪ ምፍራምኩም፡ እቲ ጥቕላል ደሓን ከም ዝነበረ ይመስል። ሽዑ ንጉድኣት ዝኸፍል ሰብ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.meetingroom': "ክፍሊ ኣኼባ ምድላው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergaderzaal': "ክፍሊ ኣኼባ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beamer': "ፕሮጀክተር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.whiteboard': "ጻዕዳ ሰሌዳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermoskan': "ተርሞስ (ቡን ውዑይ ይሕዞ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kopje': "ፊንጃል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koffieautomaat': "ማሽን ቡን", // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.1': { m: "ኣብ ዙርያ እቲ ጠረጴዛ ዓሰርተ መናብር ኣቐምጥ።", f: "ኣብ ዙርያ እቲ ጠረጴዛ ዓሰርተ መናብር ኣቐምጢ።", x: "ኣብ ዙርያ እቲ ጠረጴዛ ዓሰርተ መናብር ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.meetingroom.2': { m: "ቡንን ሻሂን ኣዳሉ።", f: "ቡንን ሻሂን ኣዳልዊ።", x: "ቡንን ሻሂን ኣዳልዉ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.meetingroom.3': "እቲ ፕሮጀክተር ኣይሰርሕን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.q': "እቲ ኣኼባ ሰዓት ክንደይ እዩ ዝጅምር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a': { m: "ሰዓት ዓሰርተ። ኩሉ ድሉው ምዃኑ ኣረጋግጽ።", f: "ሰዓት ዓሰርተ። ኩሉ ድሉው ምዃኑ ኣረጋግጺ።", x: "ሰዓት ዓሰርተ። ኩሉ ድሉው ምዃኑ ኣረጋግጹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom': "ቅድሚ እቲ ቀዳማይ ጋሻ ድሉው", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.b': { m: "ክፍሊ ኣኼባ ቅድሚ እቲ ቀዳማይ ሰብ ምእታዉ ድሉው ክኸውን ኣለዎ። መናብር፡ ጠረጴዛ፡ ፕሮጀክተርን ኬብላትን ፈትሽ። ቡን፡ ሻሂን ማይን፡ ምስ ፊንጃላትን ጸባን ኣቐምጥ። ውዑይ መስተ ብጥንቃቐ ተሰከም፡ ኣብ ልዕሊ ሰባት ግን ፈጺሙ ኣይኮነን። ድሕሪ እቲ ኣኼባ ነቲ ጠረጴዛ ኣጽርዮ፡ ኩሉ ድማ ናብ ቦታኡ መልሶ። ኣብ ክፍሊ ኣኼባ ዝሰማዕካዮ ንባዕልኻ ሓዞ።", f: "ክፍሊ ኣኼባ ቅድሚ እቲ ቀዳማይ ሰብ ምእታዉ ድሉው ክኸውን ኣለዎ። መናብር፡ ጠረጴዛ፡ ፕሮጀክተርን ኬብላትን ፈትሺ። ቡን፡ ሻሂን ማይን፡ ምስ ፊንጃላትን ጸባን ኣቐምጢ። ውዑይ መስተ ብጥንቃቐ ተሰከሚ፡ ኣብ ልዕሊ ሰባት ግን ፈጺሙ ኣይኮነን። ድሕሪ እቲ ኣኼባ ነቲ ጠረጴዛ ኣጽርይዮ፡ ኩሉ ድማ ናብ ቦታኡ መልስዮ። ኣብ ክፍሊ ኣኼባ ዝሰማዕክዮ ንባዕልኺ ሓዝዮ።", x: "ክፍሊ ኣኼባ ቅድሚ እቲ ቀዳማይ ሰብ ምእታዉ ድሉው ክኸውን ኣለዎ። መናብር፡ ጠረጴዛ፡ ፕሮጀክተርን ኬብላትን ፈትሹ። ቡን፡ ሻሂን ማይን፡ ምስ ፊንጃላትን ጸባን ኣቐምጡ። ውዑይ መስተ ብጥንቃቐ ተሰከሙ፡ ኣብ ልዕሊ ሰባት ግን ፈጺሙ ኣይኮነን። ድሕሪ እቲ ኣኼባ ነቲ ጠረጴዛ ኣጽርይዎ፡ ኩሉ ድማ ናብ ቦታኡ መልስዎ። ኣብ ክፍሊ ኣኼባ ዝሰማዕኩምዎ ንባዕልኹም ሓዝዎ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.meetingroom.p': "እቲ ክፍሊ ድሉው እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.s': { m: "እቲ ኣኼባ ኣብ ሓሙሽተ ደቒቕ ይጅምር። እቲ ፕሮጀክተር ኣይሰርሕን። እንታይ ትገብር?", f: "እቲ ኣኼባ ኣብ ሓሙሽተ ደቒቕ ይጅምር። እቲ ፕሮጀክተር ኣይሰርሕን። እንታይ ትገብሪ?", x: "እቲ ኣኼባ ኣብ ሓሙሽተ ደቒቕ ይጅምር። እቲ ፕሮጀክተር ኣይሰርሕን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o1': { m: "ንኣዳላዊ እቲ ኣኼባ ብቕጽበት ንገሮ።", f: "ንኣዳላዊ እቲ ኣኼባ ብቕጽበት ንገርዮ።", x: "ንኣዳላዊ እቲ ኣኼባ ብቕጽበት ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o2': { m: "ተጸበ፡ ምናልባት ዝደልዮ ሰብ የለን።", f: "ተጸበዪ፡ ምናልባት ዝደልዮ ሰብ የለን።", x: "ተጸበዩ፡ ምናልባት ዝደልዮ ሰብ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.o3': { m: "ኣብ ጠረጴዛ ጽሑፍ ግደፍ።", f: "ኣብ ጠረጴዛ ጽሑፍ ግደፊ።", x: "ኣብ ጠረጴዛ ጽሑፍ ግደፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.w': "ሓሙሽተ ደቒቕ ንምጽጋኑ ወይ ካልእ ክፍሊ ንምርካብ ገና ግዜ እዩ። ደሓር ግን ኩሉ ሰብ ይጽበ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.maintenance': "ብልሽታት፡ ጽገናን ምግዕዓዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.faults': "ብልሽት ምሕባር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.melding': "ምሕባር (ገለ ነገር ጌጋ ከም ዘሎ ምንጋር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekkage': "ምንጣብ ማይ (ማይ ይወጽእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verwarming': "መሞቒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.airco': "ኤር ኮንዲሽን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvoer': "መፍሰሲ ማይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstopt': "ዝተዓጽወ (ዋላ ሓንቲ ኣይሓልፍን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.1': "ነቲ ብልሽት እሕብር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.2': "ኣብ ክሽነ ምንጣብ ማይ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.faults.3': "መፍሰሲ እቲ ሽቓቕ ተዓጽዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.q': "ስለምንታይ ኣብዚ ከምዚ ዝኣክል ዝሑል ኮይኑ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a': "እቲ መሞቒ ተበላሽዩ። እቲ ቴክኒሻን ጽባሕ ይመጽእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults': { m: "ሕበር፡ በይነኻ ኣይትጽገን", f: "ሕበሪ፡ በይነኺ ኣይትጽገኒ", x: "ሕበሩ፡ በይነኹም ኣይትጽገኑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.b': { m: "ተበላሽዩ ዘሎ ነገር ትርኢ ዲኻ፡ ከም ምንጣብ ማይ፡ ዝጠፍአ መብራህቲ ወይ ዘይዕጾ ማዕጾ? ንእሽቶ እንተ ኾነ እውን ሕበሮ፡ ኣብቲ ሲስተም ወይ ንተቖጻጻሪኻ። ኣበይ ከም ዘሎ፡ እንታይ ከም እትርኢን ካብ መዓስ ጀሚሩ ከም ዘሎን ንገር። ኤሌክትሪክ፡ ጋዝ ወይ መሞቒ ባዕልኻ ኣይትጽገን። ሽታ ጋዝ ይስምዓካ ድዩ? ኣብ ጥቓኡ ስዊች ወይ ተሌፎን ኣይትጠቐም፡ መሳኹቲ ክፈት፡ ሰባት ኣውጽኦም፡ ኣብ ደገ ኾይንካ ድማ ሓገዝ ጸውዕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ተበላሽዩ ዘሎ ነገር ትርእዪ ዲኺ፡ ከም ምንጣብ ማይ፡ ዝጠፍአ መብራህቲ ወይ ዘይዕጾ ማዕጾ? ንእሽቶ እንተ ኾነ እውን ሕበርዮ፡ ኣብቲ ሲስተም ወይ ንተቖጻጻሪኺ። ኣበይ ከም ዘሎ፡ እንታይ ከም እትርእዪን ካብ መዓስ ጀሚሩ ከም ዘሎን ንገሪ። ኤሌክትሪክ፡ ጋዝ ወይ መሞቒ ባዕልኺ ኣይትጽገኒ። ሽታ ጋዝ ይስምዓኪ ድዩ? ኣብ ጥቓኡ ስዊች ወይ ተሌፎን ኣይትጠቐሚ፡ መሳኹቲ ክፈቲ፡ ሰባት ኣውጽእዮም፡ ኣብ ደገ ኾይንኪ ድማ ሓገዝ ጸውዒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ተበላሽዩ ዘሎ ነገር ትርእዩ ዲኹም፡ ከም ምንጣብ ማይ፡ ዝጠፍአ መብራህቲ ወይ ዘይዕጾ ማዕጾ? ንእሽቶ እንተ ኾነ እውን ሕበርዎ፡ ኣብቲ ሲስተም ወይ ንተቖጻጻሪኹም። ኣበይ ከም ዘሎ፡ እንታይ ከም እትርእዩን ካብ መዓስ ጀሚሩ ከም ዘሎን ንገሩ። ኤሌክትሪክ፡ ጋዝ ወይ መሞቒ ባዕልኹም ኣይትጽገኑ። ሽታ ጋዝ ይስምዓኩም ድዩ? ኣብ ጥቓኡ ስዊች ወይ ተሌፎን ኣይትጠቐሙ፡ መሳኹቲ ክፈቱ፡ ሰባት ኣውጽእዎም፡ ኣብ ደገ ኾይንኩም ድማ ሓገዝ ጸውዑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.p': "ብልሽት ከሕብር እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.s': { m: "ኣብቲ ኮሪዶር ካብ ናሕሲ ማይ የንጠብጥብ ኣሎ። እንታይ ትገብር?", f: "ኣብቲ ኮሪዶር ካብ ናሕሲ ማይ የንጠብጥብ ኣሎ። እንታይ ትገብሪ?", x: "ኣብቲ ኮሪዶር ካብ ናሕሲ ማይ የንጠብጥብ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o1': { m: "ሕበሮ፡ ኣብ ትሕቲኡ ድማ ባልዲ ኣቐምጥ።", f: "ሕበርዮ፡ ኣብ ትሕቲኡ ድማ ባልዲ ኣቐምጢ።", x: "ሕበርዎ፡ ኣብ ትሕቲኡ ድማ ባልዲ ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o2': { m: "ተጸበ፡ ምናልባት ባዕሉ ደው ይብል።", f: "ተጸበዪ፡ ምናልባት ባዕሉ ደው ይብል።", x: "ተጸበዩ፡ ምናልባት ባዕሉ ደው ይብል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.o3': { m: "ንምርኣይ ነቲ ናሕሲ ክፈቶ።", f: "ንምርኣይ ነቲ ናሕሲ ክፈትዮ።", x: "ንምርኣይ ነቲ ናሕሲ ክፈትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.w': "ንእሽቶ ምንጣብ ማይ ዓቢ ጉድኣት ክኸውን ይኽእል። ባልዲ ነቲ መሬት ደረቕ ይሕዞ፡ ስለዚ ዝሸራተት ሰብ የለን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.repairs': "ንኣሽቱ ጽገናታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervangen': "ምቕያር (ሓድሽ ምእታው)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurklink': "ማኒልያ ማዕጾ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scharnier': "ቸርኒየራ (መዘውር ማዕጾ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gereedschapskist': "ሳጹን መሳርሒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rookmelder': "መጠንቀቕታ ትኪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batterij': "ባተሪ", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.1': { m: "ነቲ ኣብ ኮሪዶር ዘሎ መብራህቲ ቀይሮ።", f: "ነቲ ኣብ ኮሪዶር ዘሎ መብራህቲ ቀይርዮ።", x: "ነቲ ኣብ ኮሪዶር ዘሎ መብራህቲ ቀይርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.2': "እቲ ማኒልያ ማዕጾ ተፈቲሑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.repairs.3': { m: "ነቲ ንእሽቶ መሳልል ውሰድ፡ መንበር ኣይኮነን።", f: "ነቲ ንእሽቶ መሳልል ውሰዲ፡ መንበር ኣይኮነን።", x: "ነቲ ንእሽቶ መሳልል ውሰዱ፡ መንበር ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.q': "እቲ መጠንቀቕታ ትኪ ቢፕ ይብል ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a': "እወ፡ እቲ ባተሪ ዳርጋ ተወዲኡ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs': "ንእሽቶ መሳልል፡ መንበር ፈጺሙ ኣይኮነን", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.repairs.b': { m: "ንመብራህቲ ወይ ንልዑል መደርደሪ፡ ንእሽቶ መሳልል ተጠቐም፡ መንበር፡ ጠረጴዛ ወይ ሳጹን ግን ፈጺሙ ኣይኮነን። ኣብ ማዕሩ መሬት ኣቐምጦ፡ ምሉእ ብምሉእ ክፈቶ፡ ኣብቲ ናይ ላዕሊ ደረጃ ድማ ደው ኣይትበል። ቅድሚ ላምባዲና ምቕያርካ ነቲ መብራህቲ ኣጥፍኦ፡ ኣረጊት ላምባዲና ድማ ክዝሕል ግደፎ። ዝተማሀርካዮ ጽገና ጥራይ ግበር። ምስ ወዳእካ፡ ዝኾነ ሰብ ከይዕንቀፍ፡ መሳርሒታትካ ናብ ሳጹን መሳርሒ መልሶም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንመብራህቲ ወይ ንልዑል መደርደሪ፡ ንእሽቶ መሳልል ተጠቐሚ፡ መንበር፡ ጠረጴዛ ወይ ሳጹን ግን ፈጺሙ ኣይኮነን። ኣብ ማዕሩ መሬት ኣቐምጥዮ፡ ምሉእ ብምሉእ ክፈትዮ፡ ኣብቲ ናይ ላዕሊ ደረጃ ድማ ደው ኣይትበሊ። ቅድሚ ላምባዲና ምቕያርኪ ነቲ መብራህቲ ኣጥፍእዮ፡ ኣረጊት ላምባዲና ድማ ክዝሕል ግደፍዮ። ዝተማሀርክዮ ጽገና ጥራይ ግበሪ። ምስ ወዳእኪ፡ ዝኾነ ሰብ ከይዕንቀፍ፡ መሳርሒታትኪ ናብ ሳጹን መሳርሒ መልስዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንመብራህቲ ወይ ንልዑል መደርደሪ፡ ንእሽቶ መሳልል ተጠቐሙ፡ መንበር፡ ጠረጴዛ ወይ ሳጹን ግን ፈጺሙ ኣይኮነን። ኣብ ማዕሩ መሬት ኣቐምጥዎ፡ ምሉእ ብምሉእ ክፈትዎ፡ ኣብቲ ናይ ላዕሊ ደረጃ ድማ ደው ኣይትበሉ። ቅድሚ ላምባዲና ምቕያርኩም ነቲ መብራህቲ ኣጥፍእዎ፡ ኣረጊት ላምባዲና ድማ ክዝሕል ግደፍዎ። ዝተማሀርኩምዎ ጽገና ጥራይ ግበሩ። ምስ ወዳእኩም፡ ዝኾነ ሰብ ከይዕንቀፍ፡ መሳርሒታትኩም ናብ ሳጹን መሳርሒ መልስዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.repairs.p': "ነቲ ንእሽቶ መሳልል ከምጽኦ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.s': { m: "ኣብ ቤት ጽሕፈት ሓደ መብራህቲ ተበላሽዩ። እቲ ንእሽቶ መሳልል ኣብ ካልእ ደርቢ እዩ። እንታይ ትገብር?", f: "ኣብ ቤት ጽሕፈት ሓደ መብራህቲ ተበላሽዩ። እቲ ንእሽቶ መሳልል ኣብ ካልእ ደርቢ እዩ። እንታይ ትገብሪ?", x: "ኣብ ቤት ጽሕፈት ሓደ መብራህቲ ተበላሽዩ። እቲ ንእሽቶ መሳልል ኣብ ካልእ ደርቢ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o1': { m: "ነቲ ንእሽቶ መሳልል ኣምጽኦ።", f: "ነቲ ንእሽቶ መሳልል ኣምጽእዮ።", x: "ነቲ ንእሽቶ መሳልል ኣምጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o2': { m: "ኣብ መንበር ቤት ጽሕፈት ደው በል።", f: "ኣብ መንበር ቤት ጽሕፈት ደው በሊ።", x: "ኣብ መንበር ቤት ጽሕፈት ደው በሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.o3': { m: "ኣብ ልዕሊ እቲ ጠረጴዛ ደው በል።", f: "ኣብ ልዕሊ እቲ ጠረጴዛ ደው በሊ።", x: "ኣብ ልዕሊ እቲ ጠረጴዛ ደው በሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.w': { m: "መንበር ክንከባለል ወይ ክግምጠል ይኽእል። ካብ መንበር ምውዳቕ ብኽፉእ ክጎድኣካ ይኽእል።", f: "መንበር ክንከባለል ወይ ክግምጠል ይኽእል። ካብ መንበር ምውዳቕ ብኽፉእ ክጎድኣኪ ይኽእል።", x: "መንበር ክንከባለል ወይ ክግምጠል ይኽእል። ካብ መንበር ምውዳቕ ብኽፉእ ክጎድኣኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.moving': "ቦታ ስራሕ ምግዕዓዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdoos': "ሳጹን ምግዕዓዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureau': "ጠረጴዛ ቤት ጽሕፈት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bureaustoel': "መንበር ቤት ጽሕፈት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkplek': "ቦታ ስራሕ (ሓደ ሰብ ዝሰርሓሉ ጠረጴዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamernummer': "ቁጽሪ ክፍሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plattegrond': "ፕላን ህንጻ (ካርታ ናይቲ ህንጻ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.1': { m: "ኣብ ነፍሲ ወከፍ ሳጹን ቁጽሪ ክፍሊ ጽሓፍ።", f: "ኣብ ነፍሲ ወከፍ ሳጹን ቁጽሪ ክፍሊ ጽሓፊ።", x: "ኣብ ነፍሲ ወከፍ ሳጹን ቁጽሪ ክፍሊ ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.2': { m: "ነቶም ሳጹናት ኣብ ዓረብያ ኢድ ኣቐምጦም።", f: "ነቶም ሳጹናት ኣብ ዓረብያ ኢድ ኣቐምጥዮም።", x: "ነቶም ሳጹናት ኣብ ዓረብያ ኢድ ኣቐምጥዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.moving.3': { m: "ነቲ ቦታ ስራሕ ኣራግፎ።", f: "ነቲ ቦታ ስራሕ ኣራግፍዮ።", x: "ነቲ ቦታ ስራሕ ኣራግፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.q': "እዚ ጠረጴዛ ናበይ እዩ ዝኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a': { m: "ናብ ክፍሊ ዓሰርተው ክልተ። ኣብቲ ፕላን ህንጻ ርአ።", f: "ናብ ክፍሊ ዓሰርተው ክልተ። ኣብቲ ፕላን ህንጻ ርኣዪ።", x: "ናብ ክፍሊ ዓሰርተው ክልተ። ኣብቲ ፕላን ህንጻ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving': { m: "ምግዕዓዝ፡ ብብልሓት ኣልዕል፡ ኣብ ኩሉ ምልክት ግበር", f: "ምግዕዓዝ፡ ብብልሓት ኣልዕሊ፡ ኣብ ኩሉ ምልክት ግበሪ", x: "ምግዕዓዝ፡ ብብልሓት ኣልዕሉ፡ ኣብ ኩሉ ምልክት ግበሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.b': { m: "ምግዕዓዝ ከቢድ ስራሕ እዩ። ሳጹን ኣዝዩ ኣይትመልኦ፡ መጻሕፍትን ፋይላትን ከቢዳት እዮም። ኣብራኽካ ዓጺፍካ፡ ሕቖኻ ቀጥ ኣቢልካ፡ ኣብ ጥቓ ኣካላትካ ኣልዕል። ንብዙሓት ሳጹናት ዓረብያ ኢድ ተጠቐም፡ ጠረጴዛ ድማ ምስ ካልእ ሰብ ብሓባር ኣልዕል። ኣብ ነፍሲ ወከፍ ሳጹን፡ መንበርን ኮምፒተርን እቲ ሓድሽ ቁጽሪ ክፍሊ ጽሓፍ። ቅድም ነቶም ኬብላት ፍትሖም። ፈጺምካ ሳጹናት ኣብ ኮሪዶር ወይ ኣብ ቅድሚ መውጽኢ ህጹጽ ኩነታት ኣይተቐምጥ።", f: "ምግዕዓዝ ከቢድ ስራሕ እዩ። ሳጹን ኣዝዩ ኣይትመልእዮ፡ መጻሕፍትን ፋይላትን ከቢዳት እዮም። ኣብራኽኪ ዓጺፍኪ፡ ሕቖኺ ቀጥ ኣቢልኪ፡ ኣብ ጥቓ ኣካላትኪ ኣልዕሊ። ንብዙሓት ሳጹናት ዓረብያ ኢድ ተጠቐሚ፡ ጠረጴዛ ድማ ምስ ካልእ ሰብ ብሓባር ኣልዕሊ። ኣብ ነፍሲ ወከፍ ሳጹን፡ መንበርን ኮምፒተርን እቲ ሓድሽ ቁጽሪ ክፍሊ ጽሓፊ። ቅድም ነቶም ኬብላት ፍትሕዮም። ፈጺምኪ ሳጹናት ኣብ ኮሪዶር ወይ ኣብ ቅድሚ መውጽኢ ህጹጽ ኩነታት ኣይተቐምጢ።", x: "ምግዕዓዝ ከቢድ ስራሕ እዩ። ሳጹን ኣዝዩ ኣይትመልእዎ፡ መጻሕፍትን ፋይላትን ከቢዳት እዮም። ኣብራኽኩም ዓጺፍኩም፡ ሕቖኹም ቀጥ ኣቢልኩም፡ ኣብ ጥቓ ኣካላትኩም ኣልዕሉ። ንብዙሓት ሳጹናት ዓረብያ ኢድ ተጠቐሙ፡ ጠረጴዛ ድማ ምስ ካልእ ሰብ ብሓባር ኣልዕሉ። ኣብ ነፍሲ ወከፍ ሳጹን፡ መንበርን ኮምፒተርን እቲ ሓድሽ ቁጽሪ ክፍሊ ጽሓፉ። ቅድም ነቶም ኬብላት ፍትሕዎም። ፈጺምኩም ሳጹናት ኣብ ኮሪዶር ወይ ኣብ ቅድሚ መውጽኢ ህጹጽ ኩነታት ኣይተቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.p': "እዚ ንምልዓል ክትሕግዙኒ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.s': { m: "ከቢድ ጠረጴዛ ከተግዕዝ ኣለካ። ብጻይ ስራሕካ ኣብ ዕረፍቲ እዩ። እንታይ ትገብር?", f: "ከቢድ ጠረጴዛ ከተግዕዚ ኣለኪ። ብጻይ ስራሕኪ ኣብ ዕረፍቲ እዩ። እንታይ ትገብሪ?", x: "ከቢድ ጠረጴዛ ከተግዕዙ ኣለኩም። ብጻይ ስራሕኩም ኣብ ዕረፍቲ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o1': { m: "ሓገዝ ተጸበ፡ ምስ ካልእ ሰብ ብሓባር ድማ ኣልዕሎ።", f: "ሓገዝ ተጸበዪ፡ ምስ ካልእ ሰብ ብሓባር ድማ ኣልዕልዮ።", x: "ሓገዝ ተጸበዩ፡ ምስ ካልእ ሰብ ብሓባር ድማ ኣልዕልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o2': { m: "በይነኻ ጎቲትካ ኣግዕዞ።", f: "በይነኺ ጎቲትኪ ኣግዕዝዮ።", x: "በይነኹም ጎቲትኩም ኣግዕዝዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.o3': { m: "በይነኻ ብዙሕ ብጥንቃቐ ኣልዕሎ።", f: "በይነኺ ብዙሕ ብጥንቃቐ ኣልዕልዮ።", x: "በይነኹም ብዙሕ ብጥንቃቐ ኣልዕልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.w': { m: "ከቢድ ጠረጴዛ በይነኻ ምስ ኣልዓልካዮ ንሕቖኻ ክጎድኦ ይኽእል። ብሓባር ቀሊልን ውሑስን እዩ።", f: "ከቢድ ጠረጴዛ በይነኺ ምስ ኣልዓልክዮ ንሕቖኺ ክጎድኦ ይኽእል። ብሓባር ቀሊልን ውሑስን እዩ።", x: "ከቢድ ጠረጴዛ በይነኹም ምስ ኣልዓልኩምዎ ንሕቖኹም ክጎድኦ ይኽእል። ብሓባር ቀሊልን ውሑስን እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.closing': "ህንጻ ምኽፋትን ምዕጻውን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelbos': "ጥቕላል መፋትሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afsluiten': "ብመፍትሕ ምዕጻው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ronde': "ዙረት (ኣብ ኩሉ ክፍሊ ምሕላፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raam': "መስኮት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmcode': "ኮድ ኣላርም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nachtslot': "ናይ ለይቲ ቁልፊ (ንለይቲ ተወሳኺ ቁልፊ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.1': "ናይ መወዳእታ ዙረት ናይቲ ህንጻ እገብር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.2': "ኩሎም መሳኹቲ ተዓጽዮም ድዮም?", // nieuw, nalezen // nagelezen AI 28 nov
    's.closing.3': { m: "ነቲ ማዕጾ ብናይ ለይቲ ቁልፊ ዕጸዎ።", f: "ነቲ ማዕጾ ብናይ ለይቲ ቁልፊ ዕጸውዮ።", x: "ነቲ ማዕጾ ብናይ ለይቲ ቁልፊ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.q': "ገና ኣብ ውሽጢ ዝኾነ ሰብ ኣሎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a': "ኣይፋል፡ ኩሉ ሰብ ከይዱ እዩ። ሕጂ እዓጽዎ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing': "ኮድ ኣላርም ምስጢር እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.b': { m: "ኣብ መወዳእታ መዓልቲ ነቲ ናይ መወዳእታ ዙረት ትገብር። ኣብ ውሽጢ ዝተረፈ ሰብ ከም ዘየለ፡ መሳኹቲ ዕጹዋት ምዃኖምን መብራህቲ ዝጠፍአ ምዃኑን ኣረጋግጽ። መውጽኢ ህጹጽ ኩነታት ነጻ ይጸንሑ። ነቶም መፋትሕ ምሳኻ ሓዞም፡ ኣብ መሳቢ ግን ፈጺሙ ኣይኮነን። ኮድ ኣላርም ምስጢር እዩ፡ ፈጺምካ ንዝኾነ ሰብ ኣይትሃቦ፡ ብተሌፎን እውን። እቲ ኣላርም ይድውል ድዩ? ነቲ ስጉምትታት ትካልካ ተኸተል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ መወዳእታ መዓልቲ ነቲ ናይ መወዳእታ ዙረት ትገብሪ። ኣብ ውሽጢ ዝተረፈ ሰብ ከም ዘየለ፡ መሳኹቲ ዕጹዋት ምዃኖምን መብራህቲ ዝጠፍአ ምዃኑን ኣረጋግጺ። መውጽኢ ህጹጽ ኩነታት ነጻ ይጸንሑ። ነቶም መፋትሕ ምሳኺ ሓዝዮም፡ ኣብ መሳቢ ግን ፈጺሙ ኣይኮነን። ኮድ ኣላርም ምስጢር እዩ፡ ፈጺምኪ ንዝኾነ ሰብ ኣይትሃብዮ፡ ብተሌፎን እውን። እቲ ኣላርም ይድውል ድዩ? ነቲ ስጉምትታት ትካልኪ ተኸተሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ መወዳእታ መዓልቲ ነቲ ናይ መወዳእታ ዙረት ትገብሩ። ኣብ ውሽጢ ዝተረፈ ሰብ ከም ዘየለ፡ መሳኹቲ ዕጹዋት ምዃኖምን መብራህቲ ዝጠፍአ ምዃኑን ኣረጋግጹ። መውጽኢ ህጹጽ ኩነታት ነጻ ይጸንሑ። ነቶም መፋትሕ ምሳኹም ሓዝዎም፡ ኣብ መሳቢ ግን ፈጺሙ ኣይኮነን። ኮድ ኣላርም ምስጢር እዩ፡ ፈጺምኩም ንዝኾነ ሰብ ኣይትሃብዎ፡ ብተሌፎን እውን። እቲ ኣላርም ይድውል ድዩ? ነቲ ስጉምትታት ትካልኩም ተኸተሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.closing.p': "ኮድ ኣላርም ንኻልእ ኣይህብን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.s': { m: "ሓደ ሰብ ይድውል: \"ካብ ትካል ኣላርም እየ። ኮድኩም እንታይ እዩ\"? እንታይ ትገብር?", f: "ሓደ ሰብ ይድውል: \"ካብ ትካል ኣላርም እየ። ኮድኩም እንታይ እዩ\"? እንታይ ትገብሪ?", x: "ሓደ ሰብ ይድውል: \"ካብ ትካል ኣላርም እየ። ኮድኩም እንታይ እዩ\"? እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o1': { m: "ኣይፋል በል፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ኣይፋል በሊ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ኣይፋል በሉ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o2': { m: "ነቲ ኮድ ሃቦ፡ ሕያዋይ ይመስል።", f: "ነቲ ኮድ ሃብዮ፡ ሕያዋይ ይመስል።", x: "ነቲ ኮድ ሃብዎ፡ ሕያዋይ ይመስል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.o3': { m: "ፍርቂ ናይቲ ኮድ ጥራይ ሃቦ።", f: "ፍርቂ ናይቲ ኮድ ጥራይ ሃብዮ።", x: "ፍርቂ ናይቲ ኮድ ጥራይ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.w': { m: "ሓቀኛ ትካል ኣላርም ብተሌፎን ኮድካ ኣይሓትትን። ሰራቒ ግን ክሓትት ይኽእል።", f: "ሓቀኛ ትካል ኣላርም ብተሌፎን ኮድኪ ኣይሓትትን። ሰራቒ ግን ክሓትት ይኽእል።", x: "ሓቀኛ ትካል ኣላርም ብተሌፎን ኮድኩም ኣይሓትትን። ሰራቒ ግን ክሓትት ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.guarding': "ዙረት ሓለዋን መእተውን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.patrol': "ዙረት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.surveilleren': "ዙረት ሓለዋ ምግባር (እናተዘዋወሩ ምክትታል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zaklamp': "ፒላ (መብራህቲ ኢድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terrein': "ግቢ (ኣብ ዙርያ ህንጻ ዘሎ መሬት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hek': "ሓጹር፡ ካንቸሎ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inbraak': "ስርቂ ብምስባር (ሓደ ሰብ ንምስራቕ ሰይሩ ይኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openstaan': "ክፉት ምዃን (ክዕጾ ዝነበሮ ማዕጾ ወይ መስኮት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.1': "ኣብ ነፍሲ ወከፍ ክልተ ሰዓት ዙረት እገብር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.2': "እቲ ኣብ ድሕሪ እቲ ኣዳራሽ ዘሎ ካንቸሎ ክፉት እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.patrol.3': { m: "ፒላኻ ምሳኻ ሓዝ።", f: "ፒላኺ ምሳኺ ሓዚ።", x: "ፒላኹም ምሳኹም ሓዙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.q': { m: "ኣብ ዙረትካ ገለ ነገር ርኢኻ ዶ?", f: "ኣብ ዙረትኪ ገለ ነገር ርኢኺ ዶ?", x: "ኣብ ዙረትኩም ገለ ነገር ርኢኹም ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a': "እወ። ኣብ ጥቓ እቲ ናይ ድሕሪት ማዕጾ ሓደ መስኮት ክፉት ነይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol': { m: "ርአ፡ ሕበር፡ ጅግና ንምምሳል ኣይትፈትን", f: "ርኣዪ፡ ሕበሪ፡ ጅግና ንምምሳል ኣይትፈትኒ", x: "ርኣዩ፡ ሕበሩ፡ ጅግና ንምምሳል ኣይትፈትኑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.b': { m: "ኣብ ዙረትካ ትርኢ: ማዕጾታትን መሳኹትን ዕጹዋት ድዮም፡ እቲ ሓጹር ምሉእ ድዩ፡ ኣብኡ ክህሉ ዘይግብኦ ሰብ ኣሎ ድዩ? ዝረኣኻዮ ምስ ሰዓቱ ጽሓፍ። ዘገርም ነገር ትርኢ ዲኻ፡ ከም ዝተሰብረ መስኮት ወይ ብለይቲ ዘሎ ሰብ? በይነኻ ኣይትእቶ። ብሬድዮ ወይ ብተሌፎን ናብ ክፍሊ ቁጽጽር ወይ ፖሊስ ደውል፡ ኣብ ውሑስ ቦታ ድማ ተጸበ። ናይ ባዕልኻ ድሕንነት ቅድሚ ኩሉ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ዙረትኪ ትርእዪ: ማዕጾታትን መሳኹትን ዕጹዋት ድዮም፡ እቲ ሓጹር ምሉእ ድዩ፡ ኣብኡ ክህሉ ዘይግብኦ ሰብ ኣሎ ድዩ? ዝረኣኽዮ ምስ ሰዓቱ ጽሓፊ። ዘገርም ነገር ትርእዪ ዲኺ፡ ከም ዝተሰብረ መስኮት ወይ ብለይቲ ዘሎ ሰብ? በይነኺ ኣይትእተዊ። ብሬድዮ ወይ ብተሌፎን ናብ ክፍሊ ቁጽጽር ወይ ፖሊስ ደውሊ፡ ኣብ ውሑስ ቦታ ድማ ተጸበዪ። ናይ ባዕልኺ ድሕንነት ቅድሚ ኩሉ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ዙረትኩም ትርእዩ: ማዕጾታትን መሳኹትን ዕጹዋት ድዮም፡ እቲ ሓጹር ምሉእ ድዩ፡ ኣብኡ ክህሉ ዘይግብኦ ሰብ ኣሎ ድዩ? ዝረኣኹምዎ ምስ ሰዓቱ ጽሓፉ። ዘገርም ነገር ትርእዩ ዲኹም፡ ከም ዝተሰብረ መስኮት ወይ ብለይቲ ዘሎ ሰብ? በይነኹም ኣይትእተዉ። ብሬድዮ ወይ ብተሌፎን ናብ ክፍሊ ቁጽጽር ወይ ፖሊስ ደውሉ፡ ኣብ ውሑስ ቦታ ድማ ተጸበዩ። ናይ ባዕልኹም ድሕንነት ቅድሚ ኩሉ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.p': "ኣብ ጥቓ እቲ ሓጹር ሓደ ሰብ እርኢ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.s': { m: "ብለይቲ ተሰይሩ ዝተኸፍተ ማዕጾ ትርኢ። ኣብ ውሽጢ ድምጺ ትሰምዕ። እንታይ ትገብር?", f: "ብለይቲ ተሰይሩ ዝተኸፍተ ማዕጾ ትርእዪ። ኣብ ውሽጢ ድምጺ ትሰምዒ። እንታይ ትገብሪ?", x: "ብለይቲ ተሰይሩ ዝተኸፍተ ማዕጾ ትርእዩ። ኣብ ውሽጢ ድምጺ ትሰምዑ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o1': { m: "ኣብ ደገ ጽናሕ፡ ሓገዝ ድማ ጸውዕ።", f: "ኣብ ደገ ጽንሒ፡ ሓገዝ ድማ ጸውዒ።", x: "ኣብ ደገ ጽንሑ፡ ሓገዝ ድማ ጸውዑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o2': { m: "ቀልጢፍካ እቶ፡ ድማ ርአ።", f: "ቀልጢፍኪ እተዊ፡ ድማ ርኣዪ።", x: "ቀልጢፍኩም እተዉ፡ ድማ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.o3': { m: "ከም እትመጽእ ብዓውታ ናብ ውሽጢ ንገሮም።", f: "ከም እትመጽኢ ብዓውታ ናብ ውሽጢ ንገርዮም።", x: "ከም እትመጽኡ ብዓውታ ናብ ውሽጢ ንገርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.w': { m: "ኣብ ውሽጢ ዘሎ ሰራቒ ሓደገኛ ክኸውን ይኽእል። ፖሊስ እንታይ ከም ዝግበር ይፈልጥ፡ ስራሕካ ምርኣይን ምሕባርን እዩ።", f: "ኣብ ውሽጢ ዘሎ ሰራቒ ሓደገኛ ክኸውን ይኽእል። ፖሊስ እንታይ ከም ዝግበር ይፈልጥ፡ ስራሕኪ ምርኣይን ምሕባርን እዩ።", x: "ኣብ ውሽጢ ዘሎ ሰራቒ ሓደገኛ ክኸውን ይኽእል። ፖሊስ እንታይ ከም ዝግበር ይፈልጥ፡ ስራሕኩም ምርኣይን ምሕባርን እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.access': "ቁጽጽር መእተዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slagboom': "ባሪየራ (ኣብ ልዕሊ መንገዲ ዘሎ ናብ ላዕሊ ዝለዓል በትሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegangspas': "ካርድ መእተዊ (ማዕጾ ዝኸፍት ካርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.legitimatie': "መንነት ወረቐት (ፓስፖርት ወይ መንነት ካርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.draaihek': "ዝዘውር ካንቸሎ (ሓደ ሓደ ሰብ ዘሕልፍ ካንቸሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kenteken': "ታርጋ (ፊደላትን ቁጽርታትን ናይ መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toegang': "መእተዊ ፍቓድ (ምእታው ይፍቀድ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.1': "መንነት ወረቐትኩም ክርኢ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.2': "ካርድኩም ኣይሰርሕን እዩ። ክድውል እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.access.3': "ነቲ ባሪየራ ክኸፍቶ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.q': "ክኣቱ ይኽእል ዶ? ካርደይ ረሲዐዮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a': "ይቕሬታ፡ ብዘይ ካርድ ክትኣትዉ ኣይፍቀደኩምን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access': "ካርድ እንተ ዘይብሉ፡ መእተዊ የለን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.b': { m: "ኣብ ካንቸሎ ወይ ኣብ ቅበላ መን ከም ዝኣቱ ትቆጻጸር። ኩሉ ሰብ ካርድ የድልዮ፡ ወይ ኣብቲ ዝርዝር ክህሉ ኣለዎ። ሓደ ሰብ ምስ ዝሓርቕ ወይ ምስ ዝህወኽ እውን ሕያዋይ ኹን። ሓደ ሰብ ሓለቓ እየ ስለ ዝበለ ፍሉይ ፍቓድ ኣይትሃብ፡ ኣረጋግጾ። ካርድካ ፈጺምካ ንዝኾነ ሰብ ኣይተልቅሕ፡ ፈጺምካ ድማ ሓደ ሰብ ኣብ ድሕሬኻ ክኣቱ ኣይተፍቅድ። ዝጠፍአ ካርድ ብቕጽበት ክሕበር ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ካንቸሎ ወይ ኣብ ቅበላ መን ከም ዝኣቱ ትቆጻጸሪ። ኩሉ ሰብ ካርድ የድልዮ፡ ወይ ኣብቲ ዝርዝር ክህሉ ኣለዎ። ሓደ ሰብ ምስ ዝሓርቕ ወይ ምስ ዝህወኽ እውን ሕያወይቲ ኹኒ። ሓደ ሰብ ሓለቓ እየ ስለ ዝበለ ፍሉይ ፍቓድ ኣይትሃቢ፡ ኣረጋግጽዮ። ካርድኪ ፈጺምኪ ንዝኾነ ሰብ ኣይተልቅሒ፡ ፈጺምኪ ድማ ሓደ ሰብ ኣብ ድሕሬኺ ክኣቱ ኣይተፍቅዲ። ዝጠፍአ ካርድ ብቕጽበት ክሕበር ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ካንቸሎ ወይ ኣብ ቅበላ መን ከም ዝኣቱ ትቆጻጸሩ። ኩሉ ሰብ ካርድ የድልዮ፡ ወይ ኣብቲ ዝርዝር ክህሉ ኣለዎ። ሓደ ሰብ ምስ ዝሓርቕ ወይ ምስ ዝህወኽ እውን ሕያዋት ኹኑ። ሓደ ሰብ ሓለቓ እየ ስለ ዝበለ ፍሉይ ፍቓድ ኣይትሃቡ፡ ኣረጋግጽዎ። ካርድኩም ፈጺምኩም ንዝኾነ ሰብ ኣይተልቅሑ፡ ፈጺምኩም ድማ ሓደ ሰብ ኣብ ድሕሬኹም ክኣቱ ኣይተፍቅዱ። ዝጠፍአ ካርድ ብቕጽበት ክሕበር ኣለዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.p': "ካርድኩም ክርኢ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.s': { m: "ሱፍ ዝለበሰ ሰብኣይ ከምዚ ይብል: \"ሓድሽ ዳይረክተር እየ። ገና ካርድ የብለይን\"። እንታይ ትገብር?", f: "ሱፍ ዝለበሰ ሰብኣይ ከምዚ ይብል: \"ሓድሽ ዳይረክተር እየ። ገና ካርድ የብለይን\"። እንታይ ትገብሪ?", x: "ሱፍ ዝለበሰ ሰብኣይ ከምዚ ይብል: \"ሓድሽ ዳይረክተር እየ። ገና ካርድ የብለይን\"። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o1': { m: "ቅድሚ ምእታዉ ኣረጋግጾ።", f: "ቅድሚ ምእታዉ ኣረጋግጽዮ።", x: "ቅድሚ ምእታዉ ኣረጋግጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o2': { m: "ኣእትዎ፡ ኣገዳሲ ሰብ ይመስል።", f: "ኣእትውዮ፡ ኣገዳሲ ሰብ ይመስል።", x: "ኣእትውዎ፡ ኣገዳሲ ሰብ ይመስል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.o3': { m: "ናይ ባዕልኻ ካርድ ሃቦ።", f: "ናይ ባዕልኺ ካርድ ሃብዮ።", x: "ናይ ባዕልኹም ካርድ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.w': "ዝኾነ ሰብ ዳይረክተር እየ ክብል ይኽእል። ቅልጡፍ ምርግጋጽ ነቲ ህንጻ ውሑስ ይገብሮ፡ ሓቀኛ ዳይረክተር ድማ ክርድኦ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cameras': "ካሜራታትን ክፍሊ ቁጽጽርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldkamer': "ክፍሊ ቁጽጽር (ሰባት ካሜራታት ዝከታተሉሉን ጻውዒት ዝቕበሉሉን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beeldscherm': "ስክሪን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.camerabeelden': "ቪድዮ ካሜራ (እቲ ካሜራ ዝቐረጾ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inzoomen': "ዙም ምግባር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewegingsmelder': "ሰንሰር ምንቅስቓስ (ገለ ነገር ክንቀሳቐስ ከሎ ይፈልጥ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verdachte': "ተጠርጣሪ", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.1': "ኣብ ካሜራ ሰለስተ ኣብ ጥቓ እቲ ሓጹር ሓደ ሰብ እርኢ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.2': "ዙም ክገብር እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.cameras.3': "ክፍሊ ቁጽጽር ናብ ፖሊስ ይድውል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.q': { m: "ኣብቲ ስክሪን እንታይ ትርኢ ኣለኻ?", f: "ኣብቲ ስክሪን እንታይ ትርእዪ ኣለኺ?", x: "ኣብቲ ስክሪን እንታይ ትርእዩ ኣለኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a': "ኣብ ጥቓ እቲ ሓጹር ሓደ ሰብኣይ። ሓደ ብጻይ ስራሕ እሰድድ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras': "ቪድዮ ካሜራ ውልቃዊ እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.b': { m: "ካሜራታት ንሰባት ይቐርጹ፡ ሰራሕተኛታት፡ በጻሕትን ብኡ ዝሓልፉ ሰባትን። ኣብቲ ስክሪናት ዝረኣኻዮ ውልቃዊ እዩ። ንስራሕካ ጥራይ ተዓዘብ፡ ነቲ ስክሪን ድማ ፈጺምካ ብተሌፎንካ ኣይትቕረጾ። ፈጺምካ ቪድዮ ናብ ኣዕሩኽ ኣይትስደድ፡ ኣብ ኢንተርነት ድማ ኣይተቐምጥ። ፍጻመ ኣሎ ድዩ? ነቲ ካሜራን ሰዓትን ጽሓፍ፡ ንተቖጻጻሪኻ ድማ ንገሮ። እቲ ቪድዮ መን ከም ዝወስዶ ትካልካ ጥራይ እዩ ዝውስን፡ ንኣብነት ፖሊስ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ካሜራታት ንሰባት ይቐርጹ፡ ሰራሕተኛታት፡ በጻሕትን ብኡ ዝሓልፉ ሰባትን። ኣብቲ ስክሪናት ዝረኣኽዮ ውልቃዊ እዩ። ንስራሕኪ ጥራይ ተዓዘቢ፡ ነቲ ስክሪን ድማ ፈጺምኪ ብተሌፎንኪ ኣይትቕረጽዮ። ፈጺምኪ ቪድዮ ናብ ኣዕሩኽ ኣይትስደዲ፡ ኣብ ኢንተርነት ድማ ኣይተቐምጢ። ፍጻመ ኣሎ ድዩ? ነቲ ካሜራን ሰዓትን ጽሓፊ፡ ንተቖጻጻሪኺ ድማ ንገርዮ። እቲ ቪድዮ መን ከም ዝወስዶ ትካልኪ ጥራይ እዩ ዝውስን፡ ንኣብነት ፖሊስ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ካሜራታት ንሰባት ይቐርጹ፡ ሰራሕተኛታት፡ በጻሕትን ብኡ ዝሓልፉ ሰባትን። ኣብቲ ስክሪናት ዝረኣኹምዎ ውልቃዊ እዩ። ንስራሕኩም ጥራይ ተዓዘቡ፡ ነቲ ስክሪን ድማ ፈጺምኩም ብተሌፎንኩም ኣይትቕረጽዎ። ፈጺምኩም ቪድዮ ናብ ኣዕሩኽ ኣይትስደዱ፡ ኣብ ኢንተርነት ድማ ኣይተቐምጡ። ፍጻመ ኣሎ ድዩ? ነቲ ካሜራን ሰዓትን ጽሓፉ፡ ንተቖጻጻሪኹም ድማ ንገርዎ። እቲ ቪድዮ መን ከም ዝወስዶ ትካልኩም ጥራይ እዩ ዝውስን፡ ንኣብነት ፖሊስ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.p': "ነዚ ከርኢ ኣይፍቀደለይን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.s': { m: "ሓደ ብጻይ ስራሕ ካብቶም ካሜራታት ዘስሕቕ ቪድዮ ክትሰድደሉ ይሓተካ። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ካብቶም ካሜራታት ዘስሕቕ ቪድዮ ክትሰድድሉ ይሓተኪ። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ካብቶም ካሜራታት ዘስሕቕ ቪድዮ ክትሰድዱሉ ይሓተኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o1': { m: "ኣይፋል በል፡ እቲ ቪድዮ ውልቃዊ እዩ።", f: "ኣይፋል በሊ፡ እቲ ቪድዮ ውልቃዊ እዩ።", x: "ኣይፋል በሉ፡ እቲ ቪድዮ ውልቃዊ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o2': { m: "ንዕኡ ጥራይ ስደዶ።", f: "ንዕኡ ጥራይ ስደድዮ።", x: "ንዕኡ ጥራይ ስደድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.o3': { m: "ነቲ ስክሪን ብተሌፎንካ ቕረጾ።", f: "ነቲ ስክሪን ብተሌፎንኪ ቕረጽዮ።", x: "ነቲ ስክሪን ብተሌፎንኩም ቕረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.w': { m: "እቶም ኣብቲ ቪድዮ ዘለዉ ሰባት ክዝርጋሕ ኣይተሰማምዑን። ምስዳዱ ስራሕካ ከጥፍኣካ ይኽእል።", f: "እቶም ኣብቲ ቪድዮ ዘለዉ ሰባት ክዝርጋሕ ኣይተሰማምዑን። ምስዳዱ ስራሕኪ ከጥፍኣኪ ይኽእል።", x: "እቶም ኣብቲ ቪድዮ ዘለዉ ሰባት ክዝርጋሕ ኣይተሰማምዑን። ምስዳዱ ስራሕኩም ከጥፍኣኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.report': "ሬድዮን ጸብጻብን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portofoon': "ሬድዮ መራኸቢ (ዎኪ ቶኪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapport': "ጸብጻብ (ዝተፈጸመ ነገር ብጽሑፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.incident': "ፍጻመ (ጌጋ ዝኸደ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tijdstip': "ግዜ (ገለ ነገር መዓስ ከም ዝተፈጸመ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.logboek': "መዝገብ (ኩሉ ዝጽሓፈሉ መጽሓፍ ወይ ኣፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oproepen': "ምጽዋዕ (ብሬድዮ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.1': "ናይቲ ፍጻመ ጸብጻብ እጽሕፍ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.2': "ብልክዕ ሰዓት ክንደይ ነይሩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.report.3': { m: "ብጽቡቕ ኣይሰምዓካን ኣለኹ። ከም ብሓድሽ በሎ።", f: "ብጽቡቕ ኣይሰምዓክን ኣለኹ። ከም ብሓድሽ በልዮ።", x: "ብጽቡቕ ኣይሰምዓኩምን ኣለኹ። ከም ብሓድሽ በልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.q': "ኣብቲ ጸብጻብ እንታይ ክኣቱ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a': "እንታይ ከም ዝተፈጸመ፡ ኣበይን ሰዓት ክንደይን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report': { m: "ብቕጽበት ጽሓፎ", f: "ብቕጽበት ጽሓፍዮ", x: "ብቕጽበት ጽሓፍዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.b': { m: "ገና ብጽቡቕ ክትዝክሮ ከለኻ፡ ድሕሪ ፍጻመ ብቕጽበት ጸብጻብ ጽሓፍ። ባዕልኻ ዝረኣኻዮን ዝሰማዕካዮን ጽሓፍ: እንታይ ከም ዝተፈጸመ፡ ኣበይ፡ ሰዓት ክንደይ፡ መን ድማ ከም ዝነበረ። ሓቅታት ጽሓፍ፡ ዝሓሰብካዮ ኣይኮነን። ብሬድዮ ሓጺርን ንጹርን ተዛረብ፡ እቲ ካልእ ሰብ ክሳዕ ዝውድእ ድማ ተጸበ። መን ምዃንካን ኣበይ ከም ዘለኻን ንገር። ጽቡቕ ጸብጻብ ንፖሊስ፡ ንትካልካን ንዓኻን ይሕግዝ።", f: "ገና ብጽቡቕ ክትዝክርዮ ከለኺ፡ ድሕሪ ፍጻመ ብቕጽበት ጸብጻብ ጽሓፊ። ባዕልኺ ዝረኣኽዮን ዝሰማዕክዮን ጽሓፊ: እንታይ ከም ዝተፈጸመ፡ ኣበይ፡ ሰዓት ክንደይ፡ መን ድማ ከም ዝነበረ። ሓቅታት ጽሓፊ፡ ዝሓሰብክዮ ኣይኮነን። ብሬድዮ ሓጺርን ንጹርን ተዛረቢ፡ እቲ ካልእ ሰብ ክሳዕ ዝውድእ ድማ ተጸበዪ። መን ምዃንኪን ኣበይ ከም ዘለኺን ንገሪ። ጽቡቕ ጸብጻብ ንፖሊስ፡ ንትካልኪን ንዓኺን ይሕግዝ።", x: "ገና ብጽቡቕ ክትዝክርዎ ከለኹም፡ ድሕሪ ፍጻመ ብቕጽበት ጸብጻብ ጽሓፉ። ባዕልኹም ዝረኣኹምዎን ዝሰማዕኩምዎን ጽሓፉ: እንታይ ከም ዝተፈጸመ፡ ኣበይ፡ ሰዓት ክንደይ፡ መን ድማ ከም ዝነበረ። ሓቅታት ጽሓፉ፡ ዝሓሰብኩምዎ ኣይኮነን። ብሬድዮ ሓጺርን ንጹርን ተዛረቡ፡ እቲ ካልእ ሰብ ክሳዕ ዝውድእ ድማ ተጸበዩ። መን ምዃንኩምን ኣበይ ከም ዘለኹምን ንገሩ። ጽቡቕ ጸብጻብ ንፖሊስ፡ ንትካልኩምን ንዓኹምን ይሕግዝ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.p': "ብቕጽበት ክጽሕፎ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.s': { m: "ድሕሪ ብዙሕ ስራሕ ዝነበሮ ለይቲ ኣዝዩ ደኺምካ ኣለኻ። ሓደ ንእሽቶ ፍጻመ ነይሩ። እንታይ ትገብር?", f: "ድሕሪ ብዙሕ ስራሕ ዝነበሮ ለይቲ ኣዝዩ ደኺምኪ ኣለኺ። ሓደ ንእሽቶ ፍጻመ ነይሩ። እንታይ ትገብሪ?", x: "ድሕሪ ብዙሕ ስራሕ ዝነበሮ ለይቲ ኣዝዩ ደኺምኩም ኣለኹም። ሓደ ንእሽቶ ፍጻመ ነይሩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o1': { m: "ናብ ገዛ ቅድሚ ምኻድካ ነቲ ጸብጻብ ጽሓፎ።", f: "ናብ ገዛ ቅድሚ ምኻድኪ ነቲ ጸብጻብ ጽሓፍዮ።", x: "ናብ ገዛ ቅድሚ ምኻድኩም ነቲ ጸብጻብ ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o2': { m: "ጽቡቕ ምስ ደቀስካ፡ ጽባሕ ጽሓፎ።", f: "ጽቡቕ ምስ ደቀስኪ፡ ጽባሕ ጽሓፍዮ።", x: "ጽቡቕ ምስ ደቀስኩም፡ ጽባሕ ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.o3': { m: "ግደፎ፡ ንእሽቶ ጥራይ ነይሩ።", f: "ግደፍዮ፡ ንእሽቶ ጥራይ ነይሩ።", x: "ግደፍዎ፡ ንእሽቶ ጥራይ ነይሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.w': { m: "ጽባሕ ዝርዝራት ትርስዕ። ብዘይ ሰዓት ወይ ቦታ ዘሎ ጸብጻብ ንዝኾነ ሰብ ኣይሕግዝን።", f: "ጽባሕ ዝርዝራት ትርስዒ። ብዘይ ሰዓት ወይ ቦታ ዘሎ ጸብጻብ ንዝኾነ ሰብ ኣይሕግዝን።", x: "ጽባሕ ዝርዝራት ትርስዑ። ብዘይ ሰዓት ወይ ቦታ ዘሎ ጸብጻብ ንዝኾነ ሰብ ኣይሕግዝን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.incidents': "ህጹጽ ኩነታትን እቲ ድኳንን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.evacuation': "ሓዊን ምልቃቕ ህንጻን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmelder': "መጠውቒ ኣላርም ሓዊ (ሓዊ ምስ ዝህሉ ዝጥወቕ ቀይሕ ሳጹን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandweer': "ሓይሊ ምጥፋእ ሓዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddeur': "ማዕጾ ሓዊ (ሓውን ትክን ደው የብል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandmeldcentrale': "ፓነል ኣላርም ሓዊ (ኣላርም ኣበይ ከም ዘሎ የርኢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontruimingsplan': "ፕላን ምልቃቕ (ኩሉ ሰብ ክወጽእ ከሎ መን እንታይ ከም ዝገብር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sirene': "ሲረና", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.1': "ኣብ ኣዳራሽ ክልተ ኣላርም ሓዊ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.2': { m: "ነቶም ማዕጾታት ሓዊ ዕጹዋት ሓዞም።", f: "ነቶም ማዕጾታት ሓዊ ዕጹዋት ሓዝዮም።", x: "ነቶም ማዕጾታት ሓዊ ዕጹዋት ሓዝዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.evacuation.3': "ንሓይሊ ምጥፋእ ሓዊ ኣብ መእተዊ እጽበዮም ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.q': "ኩሉ ሰብ ኣብ ደገ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a': "ኣይፋል፡ ኣብቲ ዝርዝር ዘለዉ ክልተ ሰባት ገና የለዉን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation': "ሓዊ፡ ቅድም ኣላርም፡ ድሕሪኡ ናብ ደገ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.b': { m: "ሓዊ ወይ ትኪ ትርኢ ዲኻ? ነቲ መጠውቒ ኣላርም ሓዊ ጠውቖ፡ ወይ ናብ 112 ደውል። ድሕሪኡ ብመንገድታት ህጹጽ ምውጻእ ሰባት ክወጹ ሓግዞም፡ ብሊፍት ግን ፈጺሙ ኣይኮነን። ኣብ ድሕሬኻ ማዕጾታት ዕጸዎም፡ ብመፍትሕ ግን ኣይትቖልፎም። ሓዊ ንእሽቶ ምስ ዝኸውን፡ ብኸመይ ከም ዝጠፍእ ድማ ምስ ተማሂርካ ጥራይ ከተጥፍኦ ፈትን። ናብ መአከቢ ቦታ ኪድ፡ መን ከም ዘሎ ድማ ቑጸር። ንሓይሊ ምጥፋእ ሓዊ ኣብ መእተዊ ተቐበሎም፡ ዝፈለጥካዮ ድማ ንገሮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሓዊ ወይ ትኪ ትርእዪ ዲኺ? ነቲ መጠውቒ ኣላርም ሓዊ ጠውቕዮ፡ ወይ ናብ 112 ደውሊ። ድሕሪኡ ብመንገድታት ህጹጽ ምውጻእ ሰባት ክወጹ ሓግዝዮም፡ ብሊፍት ግን ፈጺሙ ኣይኮነን። ኣብ ድሕሬኺ ማዕጾታት ዕጸውዮም፡ ብመፍትሕ ግን ኣይትቖልፍዮም። ሓዊ ንእሽቶ ምስ ዝኸውን፡ ብኸመይ ከም ዝጠፍእ ድማ ምስ ተማሂርኪ ጥራይ ከተጥፍኦ ፈትኒ። ናብ መአከቢ ቦታ ኪዲ፡ መን ከም ዘሎ ድማ ቑጸሪ። ንሓይሊ ምጥፋእ ሓዊ ኣብ መእተዊ ተቐበልዮም፡ ዝፈለጥክዮ ድማ ንገርዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሓዊ ወይ ትኪ ትርእዩ ዲኹም? ነቲ መጠውቒ ኣላርም ሓዊ ጠውቕዎ፡ ወይ ናብ 112 ደውሉ። ድሕሪኡ ብመንገድታት ህጹጽ ምውጻእ ሰባት ክወጹ ሓግዝዎም፡ ብሊፍት ግን ፈጺሙ ኣይኮነን። ኣብ ድሕሬኹም ማዕጾታት ዕጸውዎም፡ ብመፍትሕ ግን ኣይትቖልፍዎም። ሓዊ ንእሽቶ ምስ ዝኸውን፡ ብኸመይ ከም ዝጠፍእ ድማ ምስ ተማሂርኩም ጥራይ ከተጥፍኦ ፈትኑ። ናብ መአከቢ ቦታ ኪዱ፡ መን ከም ዘሎ ድማ ቑጸሩ። ንሓይሊ ምጥፋእ ሓዊ ኣብ መእተዊ ተቐበልዎም፡ ዝፈለጥኩምዎ ድማ ንገርዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.evacuation.p': "ኩሉ ሰብ ናብ ደገ፡ ናብ መአከቢ ቦታ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.s': { m: "ኣላርም ሓዊ ይድውል። ሓደ ሰብኣይ ሊፍት ክወስድ ይደሊ። እንታይ ትገብር?", f: "ኣላርም ሓዊ ይድውል። ሓደ ሰብኣይ ሊፍት ክወስድ ይደሊ። እንታይ ትገብሪ?", x: "ኣላርም ሓዊ ይድውል። ሓደ ሰብኣይ ሊፍት ክወስድ ይደሊ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o1': { m: "ናብ መደያይቦ ስደዶ።", f: "ናብ መደያይቦ ስደድዮ።", x: "ናብ መደያይቦ ስደድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o2': { m: "ግደፎ፡ ሊፍት ዝቐልጠፈ እዩ።", f: "ግደፍዮ፡ ሊፍት ዝቐልጠፈ እዩ።", x: "ግደፍዎ፡ ሊፍት ዝቐልጠፈ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.o3': { m: "ምስኡ ብሊፍት ኪድ።", f: "ምስኡ ብሊፍት ኪዲ።", x: "ምስኡ ብሊፍት ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.w': "ኣብ ሓዊ፡ ሊፍት ደው ክብል ወይ ብትኪ ክመልእ ይኽእል። መደያይቦ እቲ ውሑስ መውጽኢ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firstaid': "ቀዳማይ ረድኤትን 112ን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ehbo': "ቀዳማይ ረድኤት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aed': "AED (ደው ዝበለ ልቢ ዝሕግዝ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reanimeren': "CPR ምግባር (ህይወት ንምድሓን ኣብ ኣፍ ልቢ ምጽቃጥ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bewusteloos': "ስምዒቱ ዝሰሓተ (እቲ ሰብ ኣይነቅሕን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademen': "ምስትንፋስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmnummer': "ቁጽሪ ህጹጽ ረድኤት (112)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.1': { m: "ናብ 112 ደውል። ኣምቡላንስ ሕተት።", f: "ናብ 112 ደውሊ። ኣምቡላንስ ሕተቲ።", x: "ናብ 112 ደውሉ። ኣምቡላንስ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.2': { m: "ነቲ AED ካብ ቅበላ ኣምጽኦ።", f: "ነቲ AED ካብ ቅበላ ኣምጽእዮ።", x: "ነቲ AED ካብ ቅበላ ኣምጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.firstaid.3': "ኣየተንፍስን እዩ። CPR ክገብር እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.q': "እቲ AED ኣበይ እዩ ዘሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a': "ኣብ መእተዊ፡ ኣብ ጎኒ እቲ ሊፍት።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid': { m: "ናብ 112 ደውል፡ CPR ጀምር፡ AED ኣምጽእ", f: "ናብ 112 ደውሊ፡ CPR ጀምሪ፡ AED ኣምጽኢ", x: "ናብ 112 ደውሉ፡ CPR ጀምሩ፡ AED ኣምጽኡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.b': { m: "ሓደ ሰብ ወዲቑ ምንም ኣይምልስን ድዩ? ብቕጽበት ናብ 112 ደውል፡ ወይ ካልእ ሰብ ክድውል ግበር። እቲ ሰብ ብንቡር የተንፍስ እንተ ኾይኑ ፈትሽ። እንተ ዘየተንፍስ: CPR ጀምር፡ ሓደ ሰብ ድማ ነቲ AED ከምጽኦ ግበር። እቲ AED ይዛረብ፡ እንታይ ክትገብር ከም ዘለካ ድማ ይነግረካ፡ ክትጋገይ ኣይትኽእልን። ሰራሕተኛታት ኣምቡላንስ ክሳዕ ዝቕበሉ ቀጽል። ኮርስ ቀዳማይ ረድኤት ኣለካ ድዩ? መን ክጽውዑ ከም ዘለዎም ምእንቲ ክፈልጡ፡ ንብጾት ስራሕካ ንገሮም።", f: "ሓደ ሰብ ወዲቑ ምንም ኣይምልስን ድዩ? ብቕጽበት ናብ 112 ደውሊ፡ ወይ ካልእ ሰብ ክድውል ግበሪ። እቲ ሰብ ብንቡር የተንፍስ እንተ ኾይኑ ፈትሺ። እንተ ዘየተንፍስ: CPR ጀምሪ፡ ሓደ ሰብ ድማ ነቲ AED ከምጽኦ ግበሪ። እቲ AED ይዛረብ፡ እንታይ ክትገብሪ ከም ዘለኪ ድማ ይነግረኪ፡ ክትጋገዪ ኣይትኽእሊን። ሰራሕተኛታት ኣምቡላንስ ክሳዕ ዝቕበሉ ቀጽሊ። ኮርስ ቀዳማይ ረድኤት ኣለኪ ድዩ? መን ክጽውዑ ከም ዘለዎም ምእንቲ ክፈልጡ፡ ንብጾት ስራሕኪ ንገርዮም።", x: "ሓደ ሰብ ወዲቑ ምንም ኣይምልስን ድዩ? ብቕጽበት ናብ 112 ደውሉ፡ ወይ ካልእ ሰብ ክድውል ግበሩ። እቲ ሰብ ብንቡር የተንፍስ እንተ ኾይኑ ፈትሹ። እንተ ዘየተንፍስ: CPR ጀምሩ፡ ሓደ ሰብ ድማ ነቲ AED ከምጽኦ ግበሩ። እቲ AED ይዛረብ፡ እንታይ ክትገብሩ ከም ዘለኩም ድማ ይነግረኩም፡ ክትጋገዩ ኣይትኽእሉን። ሰራሕተኛታት ኣምቡላንስ ክሳዕ ዝቕበሉ ቀጽሉ። ኮርስ ቀዳማይ ረድኤት ኣለኩም ድዩ? መን ክጽውዑ ከም ዘለዎም ምእንቲ ክፈልጡ፡ ንብጾት ስራሕኩም ንገርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.p': "ናብ 112 ደውሉ፡ ነቲ AED ድማ ኣምጽኡ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.s': { m: "ሓደ ሰብኣይ ኣብቲ ኣዳራሽ ይወድቕ። ኣይንቀሳቐስን፡ ኣየተንፍስን ድማ። እንታይ ትገብር?", f: "ሓደ ሰብኣይ ኣብቲ ኣዳራሽ ይወድቕ። ኣይንቀሳቐስን፡ ኣየተንፍስን ድማ። እንታይ ትገብሪ?", x: "ሓደ ሰብኣይ ኣብቲ ኣዳራሽ ይወድቕ። ኣይንቀሳቐስን፡ ኣየተንፍስን ድማ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o1': { m: "ናብ 112 ደውል፡ CPR ድማ ጀምር።", f: "ናብ 112 ደውሊ፡ CPR ድማ ጀምሪ።", x: "ናብ 112 ደውሉ፡ CPR ድማ ጀምሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o2': { m: "ዝነቅሕ እንተ ኾይኑ ንምርኣይ ተጸበ።", f: "ዝነቅሕ እንተ ኾይኑ ንምርኣይ ተጸበዪ።", x: "ዝነቅሕ እንተ ኾይኑ ንምርኣይ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.o3': { m: "ኣልዒልካ ኣብ መንበር ኣቐምጦ።", f: "ኣልዒልኪ ኣብ መንበር ኣቐምጥዮ።", x: "ኣልዒልኩም ኣብ መንበር ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.w': "ልቢ ደው ምስ ዝብል፡ ነፍሲ ወከፍ ደቒቕ ኣገዳሲ እዩ። CPRን AEDን ቅድሚ ኣምቡላንስ ምምጻኣ ህይወት ከድሕኑ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shoplifting': "ስርቂ ድኳን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkeldiefstal': "ስርቂ ድኳን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.heterdaad': "ኣብ ግብሪ (ክፍጸም ከሎ ይርአ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanhouden': "ምሓዝ (ፖሊስ ክሳዕ ዝመጽእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.detectiepoortje': "ካንቸሎ ድሕንነት (ኣብ ማዕጾ ቢፕ ይብል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmlabel': "ምልክት ድሕንነት (ነቲ ካንቸሎ ቢፕ የብሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verstoppen': "ምሕባእ", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.1': "እቲ ካንቸሎ ኣብ መውጽኢ ቢፕ ይብል ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.2': "ክፍጸም ከሎ ርእየዮ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shoplifting.3': "ፖሊስ ክሳዕ ዝመጽእ ሒዘዮ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.q': "ቦርሳኡ ክፍትሽ ይፍቀደኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a': "ኣይፋል። እዚ ፖሊስ እዩ ዝገብሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting': { m: "ስርቂ ድኳን፡ ተዓዘብ፡ ሕበር፡ ጎበጣ የለን", f: "ስርቂ ድኳን፡ ተዓዘቢ፡ ሕበሪ፡ ጎበጣ የለን", x: "ስርቂ ድኳን፡ ተዓዘቡ፡ ሕበሩ፡ ጎበጣ የለን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.b': { m: "ሓደ ሰብ ክሰርቕ ርኢኻ ዶ? ህዱእ ኹን፡ ብቕጽበት ድማ ናብ ፖሊስ ደውል። ገለ ድኳናት ሓላዊ ንሰራቒ ፖሊስ ክሳዕ ዝመጽእ ክሕዞ የፍቅዱ፡ ካልኦት ድማ ከምዚ ይብሉ: ምዕዛብ፡ ምሕባርን እቲ ሰብ እንታይ ከም ዝመስል ምዝካርን ጥራይ። ፈጺምካ ኣይትውቃዕ፡ ኣይትርገጽ፡ ፈጺምካ ድማ ንሓደ ሰብ ብክሳዱ ኣይትሓዞ። ፈጺምካ ንሰብ፡ ጁባታቱ ወይ ቦርሳኡ ኣይትፈትሽ፡ እዚ ናይ ፖሊስ ስራሕ እዩ። ዝረኣኻዮ ጽሓፍ፡ ነቲ ቪድዮ ካሜራ ድማ ዓቅቦ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሓደ ሰብ ክሰርቕ ርኢኺ ዶ? ህድእቲ ኹኒ፡ ብቕጽበት ድማ ናብ ፖሊስ ደውሊ። ገለ ድኳናት ሓላዊ ንሰራቒ ፖሊስ ክሳዕ ዝመጽእ ክሕዞ የፍቅዱ፡ ካልኦት ድማ ከምዚ ይብሉ: ምዕዛብ፡ ምሕባርን እቲ ሰብ እንታይ ከም ዝመስል ምዝካርን ጥራይ። ፈጺምኪ ኣይትውቅዒ፡ ኣይትርገጺ፡ ፈጺምኪ ድማ ንሓደ ሰብ ብክሳዱ ኣይትሓዝዮ። ፈጺምኪ ንሰብ፡ ጁባታቱ ወይ ቦርሳኡ ኣይትፈትሺ፡ እዚ ናይ ፖሊስ ስራሕ እዩ። ዝረኣኽዮ ጽሓፊ፡ ነቲ ቪድዮ ካሜራ ድማ ዓቅብዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሓደ ሰብ ክሰርቕ ርኢኹም ዶ? ህዱኣት ኹኑ፡ ብቕጽበት ድማ ናብ ፖሊስ ደውሉ። ገለ ድኳናት ሓላዊ ንሰራቒ ፖሊስ ክሳዕ ዝመጽእ ክሕዞ የፍቅዱ፡ ካልኦት ድማ ከምዚ ይብሉ: ምዕዛብ፡ ምሕባርን እቲ ሰብ እንታይ ከም ዝመስል ምዝካርን ጥራይ። ፈጺምኩም ኣይትውቅዑ፡ ኣይትርገጹ፡ ፈጺምኩም ድማ ንሓደ ሰብ ብክሳዱ ኣይትሓዝዎ። ፈጺምኩም ንሰብ፡ ጁባታቱ ወይ ቦርሳኡ ኣይትፈትሹ፡ እዚ ናይ ፖሊስ ስራሕ እዩ። ዝረኣኹምዎ ጽሓፉ፡ ነቲ ቪድዮ ካሜራ ድማ ዓቅብዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.p': "በጃኹም ምሳይ ክትመጹ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.s': { m: "ሓንቲ ሰበይቲ ጥርሙዝ ኣብ ቦርሳኣ ክተእቱ ርኢኻ። ናብ ደገ ትወጽእ ኣላ። እንታይ ትገብር?", f: "ሓንቲ ሰበይቲ ጥርሙዝ ኣብ ቦርሳኣ ክተእቱ ርኢኺ። ናብ ደገ ትወጽእ ኣላ። እንታይ ትገብሪ?", x: "ሓንቲ ሰበይቲ ጥርሙዝ ኣብ ቦርሳኣ ክተእቱ ርኢኹም። ናብ ደገ ትወጽእ ኣላ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o1': { m: "ብህድኣት ደው ኣብላ፡ ናብ ፖሊስ ድማ ደውል።", f: "ብህድኣት ደው ኣብልያ፡ ናብ ፖሊስ ድማ ደውሊ።", x: "ብህድኣት ደው ኣብልዋ፡ ናብ ፖሊስ ድማ ደውሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o2': { m: "ኣብ ማዕጾ ቀልጢፍካ ቦርሳኣ ፈትሽ።", f: "ኣብ ማዕጾ ቀልጢፍኪ ቦርሳኣ ፈትሺ።", x: "ኣብ ማዕጾ ቀልጢፍኩም ቦርሳኣ ፈትሹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.o3': { m: "ብሓይሊ ደፊእካ ናብ መሬት ኣውድቓ።", f: "ብሓይሊ ደፊእኪ ናብ መሬት ኣውድቕያ።", x: "ብሓይሊ ደፊእኩም ናብ መሬት ኣውድቕዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.w': { m: "ሰብ ምፍታሽ ናይ ፖሊስ ስራሕ እዩ፡ ጎበጣ ድማ ንሰብ ክጎድእ፡ ንዓኻ ድማ ኣብ ጸገም ከእቱካ ይኽእል።", f: "ሰብ ምፍታሽ ናይ ፖሊስ ስራሕ እዩ፡ ጎበጣ ድማ ንሰብ ክጎድእ፡ ንዓኺ ድማ ኣብ ጸገም ከእቱኪ ይኽእል።", x: "ሰብ ምፍታሽ ናይ ፖሊስ ስራሕ እዩ፡ ጎበጣ ድማ ንሰብ ክጎድእ፡ ንዓኹም ድማ ኣብ ጸገም ከእቱኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.aggression': "ኣሸገርቲ ሰባት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agressie': "ዓመጽ (ሕሩቕን ዓመጸኛን ጠባይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schelden': "ምጽራፍ (ንሓደ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalmeren': "ምህዳእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afstand': "ርሕቀት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisverbod': "ክልከላ ምእታው (ደጊም ናብዚ ምእታው ኣይፍቀድን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bodycam': "ካሜራ ኣካል (ኣብ ዩኒፎርም ዘላ ንእሽቶ ካሜራ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.1': "ተሃደኡ፡ ጐይታ። ክሕግዘኩም እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.2': { m: "ርሕቀትካ ሓዝ፡ ህዱእ ኹን።", f: "ርሕቀትኪ ሓዚ፡ ህድእቲ ኹኒ።", x: "ርሕቀትኩም ሓዙ፡ ህዱኣት ኹኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.aggression.3': "ምእታው ተኸልኪልኩም ኣለኹም። ሕጂ ክትወጹ ኣለኩም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.q': "ስለምንታይ ክኣቱ ኣይፍቀደለይን?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a': "ኣብዚ ምእታው ተኸልኪልኩም ኢኹም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression': { m: "ህዱእ ኹን፡ ርሕቀትካ ሓዝ", f: "ህድእቲ ኹኒ፡ ርሕቀትኪ ሓዚ", x: "ህዱኣት ኹኑ፡ ርሕቀትኩም ሓዙ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.b': { m: "ህዱእ ምስ እትኸውን፡ ሕሩቕ ሰብ ቀልጢፉ ይህዳእ። ቀስ ኢልካን ብህድኣትን ተዛረብ፡ ነቲ ሰብ ድማ ብኽብሪ፡ ብ\"u\"፡ ተዛረቦ። ኣብ መንጎኹም ሓደ ቅልጽም ወይ ካብኡ ዝበዝሕ ርሕቀት ሓዝ፡ ኣብ ድሕሬኻ ድማ መውጽኢ ክህሉ ግበር። ነቲ ሰብ ኣይትተንክፎ፡ ንስኻ እውን ኣይትጨድር። ሓደገኛ ይኸውን ድዩ? ንድሕሪት ስጐም፡ ሓደ ብጻይ ስራሕ ወይ ፖሊስ ድማ ጸውዕ። ድሕሪኡ ጽሓፎ። ድሕሪ ከቢድ ፍጻመ፡ ምስ ሓደ ሰብ ብዛዕባኡ ተዛረብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ህድእቲ ምስ እትኾኒ፡ ሕሩቕ ሰብ ቀልጢፉ ይህዳእ። ቀስ ኢልኪን ብህድኣትን ተዛረቢ፡ ነቲ ሰብ ድማ ብኽብሪ፡ ብ\"u\"፡ ተዛረብዮ። ኣብ መንጎኹም ሓደ ቅልጽም ወይ ካብኡ ዝበዝሕ ርሕቀት ሓዚ፡ ኣብ ድሕሬኺ ድማ መውጽኢ ክህሉ ግበሪ። ነቲ ሰብ ኣይትተንክፍዮ፡ ንስኺ እውን ኣይትጨድሪ። ሓደገኛ ይኸውን ድዩ? ንድሕሪት ስጐሚ፡ ሓደ ብጻይ ስራሕ ወይ ፖሊስ ድማ ጸውዒ። ድሕሪኡ ጽሓፍዮ። ድሕሪ ከቢድ ፍጻመ፡ ምስ ሓደ ሰብ ብዛዕባኡ ተዛረቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ህዱኣት ምስ እትኾኑ፡ ሕሩቕ ሰብ ቀልጢፉ ይህዳእ። ቀስ ኢልኩምን ብህድኣትን ተዛረቡ፡ ነቲ ሰብ ድማ ብኽብሪ፡ ብ\"u\"፡ ተዛረብዎ። ኣብ መንጎኹም ሓደ ቅልጽም ወይ ካብኡ ዝበዝሕ ርሕቀት ሓዙ፡ ኣብ ድሕሬኹም ድማ መውጽኢ ክህሉ ግበሩ። ነቲ ሰብ ኣይትተንክፍዎ፡ ንስኹም እውን ኣይትጨድሩ። ሓደገኛ ይኸውን ድዩ? ንድሕሪት ስጐሙ፡ ሓደ ብጻይ ስራሕ ወይ ፖሊስ ድማ ጸውዑ። ድሕሪኡ ጽሓፍዎ። ድሕሪ ከቢድ ፍጻመ፡ ምስ ሓደ ሰብ ብዛዕባኡ ተዛረቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.p': "ተሃደኡ። ክሕግዘኩም እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.s': { m: "ሓደ ሰብኣይ ኣብ ልዕሌኻ ይጭድር፡ ኣዝዩ ድማ ይቐርበካ። እንታይ ትገብር?", f: "ሓደ ሰብኣይ ኣብ ልዕሌኺ ይጭድር፡ ኣዝዩ ድማ ይቐርበኪ። እንታይ ትገብሪ?", x: "ሓደ ሰብኣይ ኣብ ልዕሌኹም ይጭድር፡ ኣዝዩ ድማ ይቐርበኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o1': { m: "ንድሕሪት ስጐም፡ ብህድኣት ድማ ተዛረብ።", f: "ንድሕሪት ስጐሚ፡ ብህድኣት ድማ ተዛረቢ።", x: "ንድሕሪት ስጐሙ፡ ብህድኣት ድማ ተዛረቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o2': { m: "ካብኡ ብዝዓበየ ድምጺ መሊስካ ጨድር።", f: "ካብኡ ብዝዓበየ ድምጺ መሊስኪ ጨድሪ።", x: "ካብኡ ብዝዓበየ ድምጺ መሊስኩም ጨድሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.o3': { m: "ካባኻ ደፊእካ ኣርሕቖ።", f: "ካባኺ ደፊእኪ ኣርሕቕዮ።", x: "ካባኹም ደፊእኩም ኣርሕቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.w': "ህዱእ ቃላትን ቦታን ነቲ ሓርቖት የዝሕልዎ። ምጭዳር ወይ ምድፋእ ዝያዳ የኽፍኦ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodhygiene': "ጽሬትን ዝሑል ምዕቃብን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hygienelock': "መእተዊ ጽሬት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hygienesluis': "መእተዊ ጽሬት (ቅድሚ ምእታው ዝጸርየሉ ክፍሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baardnetje': "መሸፈኒ ጭሕሚ (መርበብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laarzenwasser': "መሕጸቢ ቡትስ (ቡትስ ዘጽርያ ብሩሽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.desinfecteren': "ዲዚንፌክት ምግባር (ጀርምታት ምቕታል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkjas': "ካፖት ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bacterie': "ጀርም፡ ባክተርያ", // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.1': { m: "ኣእዳውካ ተሓጸብ፡ ዲዚንፌክት ድማ ግበሮም።", f: "ኣእዳውኪ ተሓጸቢ፡ ዲዚንፌክት ድማ ግበርዮም።", x: "ኣእዳውኩም ተሓጸቡ፡ ዲዚንፌክት ድማ ግበርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.2': { m: "መሸፈኒ ጸጉሪኻን መሸፈኒ ጭሕሚኻን ግበር።", f: "መሸፈኒ ጸጉሪኺን መሸፈኒ ጭሕሚኺን ግበሪ።", x: "መሸፈኒ ጸጉሪኹምን መሸፈኒ ጭሕሚኹምን ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hygienelock.3': { m: "ብመሕጸቢ ቡትስ ሕለፍ።", f: "ብመሕጸቢ ቡትስ ሕለፊ።", x: "ብመሕጸቢ ቡትስ ሕለፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.q': "ሰዓተይ ክገብራ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a': "ኣይፋል፡ ኩሉ ስልማት ይውጻእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock': { m: "ኩሉ ግዜ ብጽሬት እቶ", f: "ኩሉ ግዜ ብጽሬት እተዊ", x: "ኩሉ ግዜ ብጽሬት እተዉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.b': { m: "ኣብ ፋብሪካ መግቢ፡ ንስኻ ነቲ መግቢ እቲ ዝዓበየ ሓደጋ ኢኻ፡ ጀርምታት ካብ ኣእዳውካ፡ ጸጉሪኻን ክዳውንቲካን ይመጹ። ስለዚ ኣብ ነፍሲ ወከፍ ምእታውካ፡ ድሕሪ ዕረፍቲ ወይ ሽቓቕ እውን፡ ብመእተዊ ጽሬት ሕለፍ። መሸፈኒ ጸጉሪ ግበር፡ ጭሕሚ እንተ ኣለካ መሸፈኒ ጭሕሚ፡ ጽሩይ ክዳን ስራሕ ኽደን፡ ኩሉ ስልማት ድማ ኣውጽእ። ኣእዳውካ ብሳሙና ተሓጸብ፡ ኣንቅጾም፡ ዲዚንፌክት ድማ ግበሮም። ብውጽኣት ወይ ተምላስ ሓሚምካ ዲኻ? ቅድሚ ምጅማርካ ንተቖጻጻሪኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ፋብሪካ መግቢ፡ ንስኺ ነቲ መግቢ እቲ ዝዓበየ ሓደጋ ኢኺ፡ ጀርምታት ካብ ኣእዳውኪ፡ ጸጉሪኺን ክዳውንቲኪን ይመጹ። ስለዚ ኣብ ነፍሲ ወከፍ ምእታውኪ፡ ድሕሪ ዕረፍቲ ወይ ሽቓቕ እውን፡ ብመእተዊ ጽሬት ሕለፊ። መሸፈኒ ጸጉሪ ግበሪ፡ ጭሕሚ እንተ ኣለኪ መሸፈኒ ጭሕሚ፡ ጽሩይ ክዳን ስራሕ ኽደኒ፡ ኩሉ ስልማት ድማ ኣውጽኢ። ኣእዳውኪ ብሳሙና ተሓጸቢ፡ ኣንቅጽዮም፡ ዲዚንፌክት ድማ ግበርዮም። ብውጽኣት ወይ ተምላስ ሓሚምኪ ዲኺ? ቅድሚ ምጅማርኪ ንተቖጻጻሪኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ፋብሪካ መግቢ፡ ንስኹም ነቲ መግቢ እቲ ዝዓበየ ሓደጋ ኢኹም፡ ጀርምታት ካብ ኣእዳውኩም፡ ጸጉሪኹምን ክዳውንቲኩምን ይመጹ። ስለዚ ኣብ ነፍሲ ወከፍ ምእታውኩም፡ ድሕሪ ዕረፍቲ ወይ ሽቓቕ እውን፡ ብመእተዊ ጽሬት ሕለፉ። መሸፈኒ ጸጉሪ ግበሩ፡ ጭሕሚ እንተ ኣለኩም መሸፈኒ ጭሕሚ፡ ጽሩይ ክዳን ስራሕ ኽደኑ፡ ኩሉ ስልማት ድማ ኣውጽኡ። ኣእዳውኩም ብሳሙና ተሓጸቡ፡ ኣንቅጽዎም፡ ዲዚንፌክት ድማ ግበርዎም። ብውጽኣት ወይ ተምላስ ሓሚምኩም ዲኹም? ቅድሚ ምጅማርኩም ንተቖጻጻሪኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.p': "ውጽኣት ኣለኒ። ሎሚ ክሰርሕ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.s': { m: "ካብ ሽቓቕ ትምለስ። ብጻይ ስራሕካ ከምዚ ይብለካ: \"ነቲ መእተዊ ጽሬት ግደፎ፡ ስራሕ በዚሑና\"። እንታይ ትገብር?", f: "ካብ ሽቓቕ ትምለሲ። ብጻይ ስራሕኪ ከምዚ ይብለኪ: \"ነቲ መእተዊ ጽሬት ግደፍዮ፡ ስራሕ በዚሑና\"። እንታይ ትገብሪ?", x: "ካብ ሽቓቕ ትምለሱ። ብጻይ ስራሕኩም ከምዚ ይብለኩም: \"ነቲ መእተዊ ጽሬት ግደፍዎ፡ ስራሕ በዚሑና\"። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o1': { m: "ዋላ እንተ ኾነ ብመእተዊ ጽሬት ሕለፍ።", f: "ዋላ እንተ ኾነ ብመእተዊ ጽሬት ሕለፊ።", x: "ዋላ እንተ ኾነ ብመእተዊ ጽሬት ሕለፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o2': { m: "ሎሚ ጥራይ ግደፎ።", f: "ሎሚ ጥራይ ግደፍዮ።", x: "ሎሚ ጥራይ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.o3': { m: "ሓደስቲ ጓንቲ ጥራይ ግበር።", f: "ሓደስቲ ጓንቲ ጥራይ ግበሪ።", x: "ሓደስቲ ጓንቲ ጥራይ ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.w': "ካብ ሽቓቕ ዝመጹ ጀርምታት ንብዙሓት ዓማዊል ከሕምሙ ይኽእሉ። ኣብ መእተዊ ጽሬት ዝሕለፍ ቁሩብ ደቓይቕ ነዚ ይከላኸል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.allergens': "ኣለርጀናት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergeen': "ኣለርጀን (ንገሊኦም ሰባት ኣዝዩ ዘሕምም መግቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.noten': "ለውዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinda': "ኦቾሎኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gluten': "ግሉተን (ኣብ ስርናይ ዘሎ፡ ስለዚ ኣብ ባኒን ኬክን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sesam': "ሰሊጥ (ንኣሽቱ ፍረታት፡ ንኣብነት ኣብ ባኒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kruisbesmetting': "ምትሕልላፍ ረኽሲ (ገለ ነገር ኣብ ዘይቦታኡ ናብ መግቢ ይኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.1': "እዚ ፍርያት ለውዝ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.2': { m: "ኣየኖት ኣለርጀናት ከም ዘለዉዎ ኣብቲ ኤቲኬት ርአ።", f: "ኣየኖት ኣለርጀናት ከም ዘለዉዎ ኣብቲ ኤቲኬት ርኣዪ።", x: "ኣየኖት ኣለርጀናት ከም ዘለዉዎ ኣብቲ ኤቲኬት ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.allergens.3': { m: "ድሕሪ እቲ ኦቾሎኒ ኩሉ ብጽቡቕ ኣጽርዮ።", f: "ድሕሪ እቲ ኦቾሎኒ ኩሉ ብጽቡቕ ኣጽርይዮ።", x: "ድሕሪ እቲ ኦቾሎኒ ኩሉ ብጽቡቕ ኣጽርይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.q': "እዚ ሳጹን ምስቶም ካልኦት ክኸይድ ይኽእል ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a': "ኣይፋል፡ ለውዝ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens': "ቁሩብ ጥራይ እኹል እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.b': { m: "ንገሊኦም ሰባት፡ ኣዝዩ ንእሽቶ ለውዝ፡ ኦቾሎኒ፡ ጸባ፡ እንቋቑሖ፡ ግሉተን ወይ ሰሊጥ ንህይወት ሓደገኛ ክኸውን ይኽእል። ስለዚ እቲ ኤቲኬት ኣብ ሓደ ፍርያት እንታይ ከም ዘሎ ብልክዕ ክብል ኣለዎ። ኣለርጀናት ፈሊኻ ሓዞም: ናይ ገዛእ ርእሶም ሳጹናት፡ መሳርሒታትን ሕብርታትን። ድሕሪ ኣለርጀን ዘለዎ ፍርያት፡ እቲ መስመር ቅድሚ እቲ ዝቕጽል ፍርያት ይጸሪ። ፈጺምካ ሓደ ኣካል መግቢ ኣይትቀይር፡ ተመሳሳሊ እንተ መሰለ እውን። ትጠራጠር ዲኻ? ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንገሊኦም ሰባት፡ ኣዝዩ ንእሽቶ ለውዝ፡ ኦቾሎኒ፡ ጸባ፡ እንቋቑሖ፡ ግሉተን ወይ ሰሊጥ ንህይወት ሓደገኛ ክኸውን ይኽእል። ስለዚ እቲ ኤቲኬት ኣብ ሓደ ፍርያት እንታይ ከም ዘሎ ብልክዕ ክብል ኣለዎ። ኣለርጀናት ፈሊኺ ሓዝዮም: ናይ ገዛእ ርእሶም ሳጹናት፡ መሳርሒታትን ሕብርታትን። ድሕሪ ኣለርጀን ዘለዎ ፍርያት፡ እቲ መስመር ቅድሚ እቲ ዝቕጽል ፍርያት ይጸሪ። ፈጺምኪ ሓደ ኣካል መግቢ ኣይትቀይሪ፡ ተመሳሳሊ እንተ መሰለ እውን። ትጠራጠሪ ዲኺ? ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንገሊኦም ሰባት፡ ኣዝዩ ንእሽቶ ለውዝ፡ ኦቾሎኒ፡ ጸባ፡ እንቋቑሖ፡ ግሉተን ወይ ሰሊጥ ንህይወት ሓደገኛ ክኸውን ይኽእል። ስለዚ እቲ ኤቲኬት ኣብ ሓደ ፍርያት እንታይ ከም ዘሎ ብልክዕ ክብል ኣለዎ። ኣለርጀናት ፈሊኹም ሓዝዎም: ናይ ገዛእ ርእሶም ሳጹናት፡ መሳርሒታትን ሕብርታትን። ድሕሪ ኣለርጀን ዘለዎ ፍርያት፡ እቲ መስመር ቅድሚ እቲ ዝቕጽል ፍርያት ይጸሪ። ፈጺምኩም ሓደ ኣካል መግቢ ኣይትቀይሩ፡ ተመሳሳሊ እንተ መሰለ እውን። ትጠራጠሩ ዲኹም? ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.p': "ኣብዚ ለውዝ ኣሎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.s': { m: "እቲ ሎዝ ተወዲኡ። ሓደ ብጻይ ስራሕ ከምዚ ይብል: \"ኖቾላ ተጠቐም፡ ዝፈልጦ ሰብ የለን\"። እንታይ ትገብር?", f: "እቲ ሎዝ ተወዲኡ። ሓደ ብጻይ ስራሕ ከምዚ ይብል: \"ኖቾላ ተጠቐሚ፡ ዝፈልጦ ሰብ የለን\"። እንታይ ትገብሪ?", x: "እቲ ሎዝ ተወዲኡ። ሓደ ብጻይ ስራሕ ከምዚ ይብል: \"ኖቾላ ተጠቐሙ፡ ዝፈልጦ ሰብ የለን\"። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o1': { m: "ኣይፋል በል፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ኣይፋል በሊ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ኣይፋል በሉ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o2': { m: "ተጠቐም፡ ለውዝ ለውዝ እዩ።", f: "ተጠቐሚ፡ ለውዝ ለውዝ እዩ።", x: "ተጠቐሙ፡ ለውዝ ለውዝ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.o3': { m: "ተጠቐም፡ ኣብቲ ኤቲኬት ድማ ዋላ ሓንቲ ኣይትቀይር።", f: "ተጠቐሚ፡ ኣብቲ ኤቲኬት ድማ ዋላ ሓንቲ ኣይትቀይሪ።", x: "ተጠቐሙ፡ ኣብቲ ኤቲኬት ድማ ዋላ ሓንቲ ኣይትቀይሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.w': "እቲ ኤቲኬት ኣብ ውሽጢ እንታይ ከም ዘሎ ክብል ኣለዎ። ጌጋ ለውዝ ንኣለርጂ ዘለዎ ሰብ ኣዝዩ ከሕምሞ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.coldroom': "ዝሑል ክፍልን ፍሪዘርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperatuur': "መጠን ሙቐት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.graden': "ዲግሪ (°C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bevroren': "ዝረግአ (ብበረድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontdooien': "ካብ በረድ ምፍታሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelketen': "ሰንሰለት ዝሑል (መግቢ ኣብ ኩሉ መንገዲ ዝሑል ይጸንሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thermokleding': "ክዳን ቁሪ (ንቑሪ ዝኸውን ውዑይ ክዳን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.1': "ኣብቲ ክፍሊ ፍሪዘር ሚኑስ ዓሰርተው ሸሞንተ ዲግሪ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.2': { m: "ነቲ ስጋ ብቕጽበት ናብቲ ዝሑል ክፍሊ ኣእትዎ።", f: "ነቲ ስጋ ብቕጽበት ናብቲ ዝሑል ክፍሊ ኣእትውዮ።", x: "ነቲ ስጋ ብቕጽበት ናብቲ ዝሑል ክፍሊ ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.coldroom.3': { m: "ነቲ መጠን ሙቐት ኣብቲ ዝርዝር ጽሓፎ።", f: "ነቲ መጠን ሙቐት ኣብቲ ዝርዝር ጽሓፍዮ።", x: "ነቲ መጠን ሙቐት ኣብቲ ዝርዝር ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.q': "እቲ ዝሑል ክፍሊ ስለምንታይ ቢፕ ይብል ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a': { m: "እቲ ማዕጾ ክፉት እዩ። ቀልጢፍካ ዕጸዎ።", f: "እቲ ማዕጾ ክፉት እዩ። ቀልጢፍኪ ዕጸውዮ።", x: "እቲ ማዕጾ ክፉት እዩ። ቀልጢፍኩም ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom': { m: "ስራሕ ቁሪ፡ ውዑይ ኽደን፡ ነቲ መግቢ ዝሑል ሓዞ", f: "ስራሕ ቁሪ፡ ውዑይ ኽደኒ፡ ነቲ መግቢ ዝሑል ሓዝዮ", x: "ስራሕ ቁሪ፡ ውዑይ ኽደኑ፡ ነቲ መግቢ ዝሑል ሓዝዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.b': { m: "መግቢ ኣብ ኩሉ መንገዲ ዝሑል ክጸንሕ ኣለዎ፡ ካብ መኪና ጽዕነት ናብ ዝሑል ክፍሊ፡ ናብ ድኳን። ስለዚ ዝሑላት ፍርያት ብቕጽበት ኣቐምጦም፡ ማዕጾታት ዝሑል ክፍልን ፍሪዘርን ድማ ዕጹዋት ሓዞም። መጠን ሙቐት ፈትሽ፡ ጽሓፎ ድማ። ኣብ ፍሪዘር፡ ክዳን ቁሪ፡ ጓንትን ቆብዕን ኽደን፡ ብግዜኡ ድማ ውዑይ ዕረፍቲ ውሰድ። ኩሉ ግዜ ነቲ ማዕጾ ካብ ውሽጢ ክትከፍቶ ከም እትኽእል ኣረጋግጽ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መግቢ ኣብ ኩሉ መንገዲ ዝሑል ክጸንሕ ኣለዎ፡ ካብ መኪና ጽዕነት ናብ ዝሑል ክፍሊ፡ ናብ ድኳን። ስለዚ ዝሑላት ፍርያት ብቕጽበት ኣቐምጥዮም፡ ማዕጾታት ዝሑል ክፍልን ፍሪዘርን ድማ ዕጹዋት ሓዝዮም። መጠን ሙቐት ፈትሺ፡ ጽሓፍዮ ድማ። ኣብ ፍሪዘር፡ ክዳን ቁሪ፡ ጓንትን ቆብዕን ኽደኒ፡ ብግዜኡ ድማ ውዑይ ዕረፍቲ ውሰዲ። ኩሉ ግዜ ነቲ ማዕጾ ካብ ውሽጢ ክትከፍትዮ ከም እትኽእሊ ኣረጋግጺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መግቢ ኣብ ኩሉ መንገዲ ዝሑል ክጸንሕ ኣለዎ፡ ካብ መኪና ጽዕነት ናብ ዝሑል ክፍሊ፡ ናብ ድኳን። ስለዚ ዝሑላት ፍርያት ብቕጽበት ኣቐምጥዎም፡ ማዕጾታት ዝሑል ክፍልን ፍሪዘርን ድማ ዕጹዋት ሓዝዎም። መጠን ሙቐት ፈትሹ፡ ጽሓፍዎ ድማ። ኣብ ፍሪዘር፡ ክዳን ቁሪ፡ ጓንትን ቆብዕን ኽደኑ፡ ብግዜኡ ድማ ውዑይ ዕረፍቲ ውሰዱ። ኩሉ ግዜ ነቲ ማዕጾ ካብ ውሽጢ ክትከፍትዎ ከም እትኽእሉ ኣረጋግጹ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.p': "ኣብዚ ኣዝዩ ውዑይ እዩ። እቲ መዝሓሊ ኣይሰርሕን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.s': { m: "ቴርሞሜተር ናይቲ ዝሑል ክፍሊ ካብ ንቡር ኣዝዩ ዝለዓለ ቁጽሪ የርኢ። እንታይ ትገብር?", f: "ቴርሞሜተር ናይቲ ዝሑል ክፍሊ ካብ ንቡር ኣዝዩ ዝለዓለ ቁጽሪ የርኢ። እንታይ ትገብሪ?", x: "ቴርሞሜተር ናይቲ ዝሑል ክፍሊ ካብ ንቡር ኣዝዩ ዝለዓለ ቁጽሪ የርኢ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o1': { m: "ብቕጽበት ንተቖጻጻሪኻ ንገሮ።", f: "ብቕጽበት ንተቖጻጻሪኺ ንገርዮ።", x: "ብቕጽበት ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o2': { m: "ተጸበ፡ ከም ብሓድሽ ክዝሕል እዩ።", f: "ተጸበዪ፡ ከም ብሓድሽ ክዝሕል እዩ።", x: "ተጸበዩ፡ ከም ብሓድሽ ክዝሕል እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.o3': { m: "ነቲ ንቡር ቁጽሪ ኣብቲ ዝርዝር ጽሓፎ።", f: "ነቲ ንቡር ቁጽሪ ኣብቲ ዝርዝር ጽሓፍዮ።", x: "ነቲ ንቡር ቁጽሪ ኣብቲ ዝርዝር ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.w': { m: "ኣዝዩ ውዑይ ማለት ጀርምታት ይዓብዩ ማለት እዩ። እቲ መግቢ ገና ውሑስ እንተ ኾይኑ ተቖጻጻሪኻ እዩ ዝውስን።", f: "ኣዝዩ ውዑይ ማለት ጀርምታት ይዓብዩ ማለት እዩ። እቲ መግቢ ገና ውሑስ እንተ ኾይኑ ተቖጻጻሪኺ እዩ ዝውስን።", x: "ኣዝዩ ውዑይ ማለት ጀርምታት ይዓብዩ ማለት እዩ። እቲ መግቢ ገና ውሑስ እንተ ኾይኑ ተቖጻጻሪኹም እዩ ዝውስን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.foreignbody': "ኣብ መግቢ ብርጭቆ፡ ሓጺንን ፕላስቲክን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.metaaldetector': "መርመሪ ሓጺን (ሜታል ዲተክተር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glasbreuk': "ስብረት ብርጭቆ (ዝተሰብረ ብርጭቆ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.splinter': "ቁራጽ ስባር (ንእሽቶ በሊሕ ቁራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vreemdvoorwerp': "ጓና ነገር (ኣብ መግቢ ዘይቦታኡ ዘሎ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervuild': "ዝረኸሰ (ረሳሕ ነገር ኣትዩዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegleider': "ሓላፊ ፈረቓ", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.1': { m: "እቲ መርመሪ ሓጺን ቢፕ ይብል ኣሎ። ነቲ መስመር ደው ኣብሎ።", f: "እቲ መርመሪ ሓጺን ቢፕ ይብል ኣሎ። ነቲ መስመር ደው ኣብልዮ።", x: "እቲ መርመሪ ሓጺን ቢፕ ይብል ኣሎ። ነቲ መስመር ደው ኣብልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.2': "ኣብ መስመር ክልተ ብርጭቆ ተሰይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.foreignbody.3': { m: "ነቲ ፍርያት ኣብቲ መቐመጢ ዝተነጸገ ፍርያት ኣእትዎ።", f: "ነቲ ፍርያት ኣብቲ መቐመጢ ዝተነጸገ ፍርያት ኣእትውዮ።", x: "ነቲ ፍርያት ኣብቲ መቐመጢ ዝተነጸገ ፍርያት ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.q': "በዚ ቁራጽ ፕላስቲክ እንታይ ክገብር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a': { m: "ንሓላፊ ፈረቓ ኣርእዮ።", f: "ንሓላፊ ፈረቓ ኣርእይዮ።", x: "ንሓላፊ ፈረቓ ኣርእይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody': { m: "ኣብ መግቢ ገለ ነገር ኣሎ ድዩ? ደው በል፡ ሕበር", f: "ኣብ መግቢ ገለ ነገር ኣሎ ድዩ? ደው በሊ፡ ሕበሪ", x: "ኣብ መግቢ ገለ ነገር ኣሎ ድዩ? ደው በሉ፡ ሕበሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.b': { m: "ብርጭቆ፡ ሓጺን፡ ፕላስቲክ፡ ፕላስተር ወይ ጸጉሪ ፈጺሙ ኣብ መግቢ ክኣቱ የብሉን። እቲ መርመሪ ሓጺን ቢፕ ይብል ድዩ፡ ወይ ዘገርም ነገር ትረክብ ዲኻ? ነቲ ፍርያት ኣብ ጎኒ ኣቐምጦ፡ ንሓላፊ ፈረቓ ድማ ንገሮ። ብርጭቆ ተሰይሩ ድዩ? ኣብ ጥቓኡ ዘሎ መስመር ደው ኣብሎ፡ እንታይ ክጉሓፍ ከም ዘለዎ ሓላፊ ፈረቓ እዩ ዝውስን። ብቐሊሉ ምእንቲ ክርኣዩ፡ ሰማያዊ ፕላስተር ጥራይ ተጠቐም። ፈጺምካ ብርጭቆ፡ ፒሮታት ወይ ፍሉሓት ነገራት ናብ ቦታ ስራሕ ኣይተእቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ብርጭቆ፡ ሓጺን፡ ፕላስቲክ፡ ፕላስተር ወይ ጸጉሪ ፈጺሙ ኣብ መግቢ ክኣቱ የብሉን። እቲ መርመሪ ሓጺን ቢፕ ይብል ድዩ፡ ወይ ዘገርም ነገር ትረኽቢ ዲኺ? ነቲ ፍርያት ኣብ ጎኒ ኣቐምጥዮ፡ ንሓላፊ ፈረቓ ድማ ንገርዮ። ብርጭቆ ተሰይሩ ድዩ? ኣብ ጥቓኡ ዘሎ መስመር ደው ኣብልዮ፡ እንታይ ክጉሓፍ ከም ዘለዎ ሓላፊ ፈረቓ እዩ ዝውስን። ብቐሊሉ ምእንቲ ክርኣዩ፡ ሰማያዊ ፕላስተር ጥራይ ተጠቐሚ። ፈጺምኪ ብርጭቆ፡ ፒሮታት ወይ ፍሉሓት ነገራት ናብ ቦታ ስራሕ ኣይተእትዊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ብርጭቆ፡ ሓጺን፡ ፕላስቲክ፡ ፕላስተር ወይ ጸጉሪ ፈጺሙ ኣብ መግቢ ክኣቱ የብሉን። እቲ መርመሪ ሓጺን ቢፕ ይብል ድዩ፡ ወይ ዘገርም ነገር ትረኽቡ ዲኹም? ነቲ ፍርያት ኣብ ጎኒ ኣቐምጥዎ፡ ንሓላፊ ፈረቓ ድማ ንገርዎ። ብርጭቆ ተሰይሩ ድዩ? ኣብ ጥቓኡ ዘሎ መስመር ደው ኣብልዎ፡ እንታይ ክጉሓፍ ከም ዘለዎ ሓላፊ ፈረቓ እዩ ዝውስን። ብቐሊሉ ምእንቲ ክርኣዩ፡ ሰማያዊ ፕላስተር ጥራይ ተጠቐሙ። ፈጺምኩም ብርጭቆ፡ ፒሮታት ወይ ፍሉሓት ነገራት ናብ ቦታ ስራሕ ኣይተእትዉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.p': "ኣብቲ ፍርያት ገለ ነገር ረኺበ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.s': { m: "ኣብ ልዕሊ እቲ መስመር ናይ ብርጭቆ መብራህቲ ይሰበር። እቶም ፍርያት ምኻድ ይቕጽሉ። እንታይ ትገብር?", f: "ኣብ ልዕሊ እቲ መስመር ናይ ብርጭቆ መብራህቲ ይሰበር። እቶም ፍርያት ምኻድ ይቕጽሉ። እንታይ ትገብሪ?", x: "ኣብ ልዕሊ እቲ መስመር ናይ ብርጭቆ መብራህቲ ይሰበር። እቶም ፍርያት ምኻድ ይቕጽሉ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o1': { m: "ነቲ መስመር ደው ኣብሎ፡ ንሓላፊ ፈረቓ ድማ ጸውዖ።", f: "ነቲ መስመር ደው ኣብልዮ፡ ንሓላፊ ፈረቓ ድማ ጸውዕዮ።", x: "ነቲ መስመር ደው ኣብልዎ፡ ንሓላፊ ፈረቓ ድማ ጸውዕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o2': { m: "ነቲ እትርእዮ ብርጭቆ ኣልዒልካ ኣውጽኦ።", f: "ነቲ እትርእይዮ ብርጭቆ ኣልዒልኪ ኣውጽእዮ።", x: "ነቲ እትርእይዎ ብርጭቆ ኣልዒልኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.o3': { m: "ቀጽል፡ እቲ መርመሪ ብርጭቆ ይረክብ እዩ።", f: "ቀጽሊ፡ እቲ መርመሪ ብርጭቆ ይረክብ እዩ።", x: "ቀጽሉ፡ እቲ መርመሪ ብርጭቆ ይረክብ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.w': "መርመሪ ሓጺን ብርጭቆ ኣይረክብን። ዘይርኣዩ ንኣሽቱ ቁራጻት ንዓሚል ብኽፉእ ክጎድኡ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.foodline': "መስመር ምፍራይ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.cutting': "ምቑራጽን ምምዛንን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitbenen': "ኣዕጽምቲ ምውጻእ (ካብ ስጋ ኣዕጽምቲ ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fileren': "ፊሌቶ ምግባር (ዓሳ ወይ ስጋ ናብ ጸፋሕቲ ቁራጻት ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.portie': "ክፋል መግቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegen': "ምምዛን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gewicht': "ክብደት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijplank': "ሰሌዳ ምቑራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.1': { m: "ነፍሲ ወከፍ ክፋል መግቢ ሚዘኖ።", f: "ነፍሲ ወከፍ ክፋል መግቢ ሚዘንዮ።", x: "ነፍሲ ወከፍ ክፋል መግቢ ሚዘንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.2': "እቲ ክብደት ኣዝዩ ትሑት እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.cutting.3': { m: "ቅድሚ ምጅማርካ ካራኻ ኣብሊሖ።", f: "ቅድሚ ምጅማርኪ ካራኺ ኣብሊሕዮ።", x: "ቅድሚ ምጅማርኩም ካራኹም ኣብሊሕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.q': "ኣብ ሓደ ሳጹን ክንደይ ክኣቱ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a': { m: "ሓሙሽተ ሚእቲ ግራም። ኣብቲ ሚዛን ርአ።", f: "ሓሙሽተ ሚእቲ ግራም። ኣብቲ ሚዛን ርኣዪ።", x: "ሓሙሽተ ሚእቲ ግራም። ኣብቲ ሚዛን ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting': "በሊሕ ካራ፡ ውሕስቲ ኢድ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.b': { m: "በሊሕ ካራ ካብ ዘይበልሕ ዝያዳ ውሑስ እዩ፡ ውሑድ ሓይሊ የድልየካ፡ ስለዚ ብውሑድ ይሸራተት። ኩሉ ግዜ ኣብታ ካልእ ኢድካ ጓንቲ መከላኸሊ ምቑራጽ ግበር። ካብ ኣካላትካ ናብ ወጻኢ ቑረጽ። ካራ ኣብቲ ሰሌዳ ጸፊሕ ገይርካ ኣቐምጦ፡ ኣብ መሕጸቢ ወይ ኣብ ትሕቲ ስጋ ግን ፈጺሙ ኣይኮነን። ዝወድቕ ካራ ክትሕዞ ኣይትፈትን፡ ንድሕሪት ስጐም። ካራ ጫፉ ናብ ታሕቲ ገይርካ፡ ኣብ ጥቓ እግሪኻ ተሰከሞ። ንእሽቶ መቑሰሊ እውን ክሽፈንን ክሕበርን ኣለዎ።", f: "በሊሕ ካራ ካብ ዘይበልሕ ዝያዳ ውሑስ እዩ፡ ውሑድ ሓይሊ የድልየኪ፡ ስለዚ ብውሑድ ይሸራተት። ኩሉ ግዜ ኣብታ ካልእ ኢድኪ ጓንቲ መከላኸሊ ምቑራጽ ግበሪ። ካብ ኣካላትኪ ናብ ወጻኢ ቑረጺ። ካራ ኣብቲ ሰሌዳ ጸፊሕ ገይርኪ ኣቐምጥዮ፡ ኣብ መሕጸቢ ወይ ኣብ ትሕቲ ስጋ ግን ፈጺሙ ኣይኮነን። ዝወድቕ ካራ ክትሕዝዮ ኣይትፈትኒ፡ ንድሕሪት ስጐሚ። ካራ ጫፉ ናብ ታሕቲ ገይርኪ፡ ኣብ ጥቓ እግሪኺ ተሰከምዮ። ንእሽቶ መቑሰሊ እውን ክሽፈንን ክሕበርን ኣለዎ።", x: "በሊሕ ካራ ካብ ዘይበልሕ ዝያዳ ውሑስ እዩ፡ ውሑድ ሓይሊ የድልየኩም፡ ስለዚ ብውሑድ ይሸራተት። ኩሉ ግዜ ኣብታ ካልእ ኢድኩም ጓንቲ መከላኸሊ ምቑራጽ ግበሩ። ካብ ኣካላትኩም ናብ ወጻኢ ቑረጹ። ካራ ኣብቲ ሰሌዳ ጸፊሕ ገይርኩም ኣቐምጥዎ፡ ኣብ መሕጸቢ ወይ ኣብ ትሕቲ ስጋ ግን ፈጺሙ ኣይኮነን። ዝወድቕ ካራ ክትሕዝዎ ኣይትፈትኑ፡ ንድሕሪት ስጐሙ። ካራ ጫፉ ናብ ታሕቲ ገይርኩም፡ ኣብ ጥቓ እግሪኹም ተሰከምዎ። ንእሽቶ መቑሰሊ እውን ክሽፈንን ክሕበርን ኣለዎ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.cutting.p': "ካራይ በሊሕ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.s': { m: "ካራኻ ካብ ኢድካ ተሸሪቱ ይወድቕ። እንታይ ትገብር?", f: "ካራኺ ካብ ኢድኪ ተሸሪቱ ይወድቕ። እንታይ ትገብሪ?", x: "ካራኹም ካብ ኢድኩም ተሸሪቱ ይወድቕ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o1': { m: "ንድሕሪት ስጐም፡ ክወድቕ ድማ ግደፎ።", f: "ንድሕሪት ስጐሚ፡ ክወድቕ ድማ ግደፍዮ።", x: "ንድሕሪት ስጐሙ፡ ክወድቕ ድማ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o2': { m: "ቀልጢፍካ ሓዞ።", f: "ቀልጢፍኪ ሓዝዮ።", x: "ቀልጢፍኩም ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.o3': { m: "ብእግሪኻ ደው ኣብሎ።", f: "ብእግሪኺ ደው ኣብልዮ።", x: "ብእግሪኹም ደው ኣብልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.w': { m: "ዝወድቕ ካራ ክትሕዞ ከለኻ ዓሚቝ ይቖርጽ። ኣብ መሬት ግን ጉድኣት ኣየውርድን።", f: "ዝወድቕ ካራ ክትሕዝዮ ከለኺ ዓሚቝ ይቖርጽ። ኣብ መሬት ግን ጉድኣት ኣየውርድን።", x: "ዝወድቕ ካራ ክትሕዝዎ ከለኹም ዓሚቝ ይቖርጽ። ኣብ መሬት ግን ጉድኣት ኣየውርድን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.labels': "ምዕሻግን ኤቲኬታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.etiketteren': "ኤቲኬት ምልጣፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lotnummer': "ቁጽሪ ሎት (ንሓደ ጕጅለ ፍርያት ሓደ ቁጽሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vacuum': "ብቫኩም ዝተዓሸገ (ኩሉ ኣየር ወጺኡ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaal': "ትሪ (ንመግቢ ዝኸውን ጸፊሕ ሸሓኒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.printer': "ፕሪንተር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.omdoos': "ደጋዊ ሳጹን (ኣብ ዙርያ እቶም ንኣሽቱ ጥቕላላት ዘሎ ዓቢ ሳጹን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.1': { m: "እቲ ኣብ ኤቲኬት ዘሎ ዕለት ቅኑዕ ምዃኑ ፈትሽ።", f: "እቲ ኣብ ኤቲኬት ዘሎ ዕለት ቅኑዕ ምዃኑ ፈትሺ።", x: "እቲ ኣብ ኤቲኬት ዘሎ ዕለት ቅኑዕ ምዃኑ ፈትሹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.2': { m: "እዚ ጥቕላል ብቫኩም ኣይተዓሸገን። ከም ብሓድሽ ዓሽጎ።", f: "እዚ ጥቕላል ብቫኩም ኣይተዓሸገን። ከም ብሓድሽ ዓሽግዮ።", x: "እዚ ጥቕላል ብቫኩም ኣይተዓሸገን። ከም ብሓድሽ ዓሽግዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.labels.3': { m: "ነቲ ቁጽሪ ሎት ኣብቲ ዝርዝር ጽሓፎ።", f: "ነቲ ቁጽሪ ሎት ኣብቲ ዝርዝር ጽሓፍዮ።", x: "ነቲ ቁጽሪ ሎት ኣብቲ ዝርዝር ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.q': "ኣየናይ ዕለት እዩ ክኸውን ዘለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a': { m: "ድሕሪ ዓሰርተ መዓልቲ። ኣብቲ ዝርዝር ርአ።", f: "ድሕሪ ዓሰርተ መዓልቲ። ኣብቲ ዝርዝር ርኣዪ።", x: "ድሕሪ ዓሰርተ መዓልቲ። ኣብቲ ዝርዝር ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels': "ጌጋ ኤቲኬት ሓደገኛ እዩ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.b': { m: "እቲ ኤቲኬት ንዓሚል ኣብ ውሽጢ እንታይ ከም ዘሎ፡ ክንደይ ከም ዝምዘንን ክሳዕ መዓስ ጽቡቕ ከም ዝኸውንን ይነግሮ። ጌጋ ዕለት ወይ ጌጋ ኤቲኬት ሰባት ከሕምም ይኽእል፡ ንኣብነት ሓደ ኣለርጀን ምስ ዝጎድል። ስለዚ ነቶም ቀዳሞት ኤቲኬታት ናይ ነፍሲ ወከፍ ሓድሽ ምፍራይ ፈትሾም: እቲ ፍርያት፡ እቲ ዕለትን ቁጽሪ ሎትን። ገለ ጌጋ ኣሎ ድዩ? ደው በል፡ ንተቖጻጻሪኻ ድማ ንገሮ። ጌጋ ኤቲኬት ዘለዎም ፍርያት ኣብ ጎኒ ይቕመጡ፡ ፈጺሞም ኣይሽየጡን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "እቲ ኤቲኬት ንዓሚል ኣብ ውሽጢ እንታይ ከም ዘሎ፡ ክንደይ ከም ዝምዘንን ክሳዕ መዓስ ጽቡቕ ከም ዝኸውንን ይነግሮ። ጌጋ ዕለት ወይ ጌጋ ኤቲኬት ሰባት ከሕምም ይኽእል፡ ንኣብነት ሓደ ኣለርጀን ምስ ዝጎድል። ስለዚ ነቶም ቀዳሞት ኤቲኬታት ናይ ነፍሲ ወከፍ ሓድሽ ምፍራይ ፈትሽዮም: እቲ ፍርያት፡ እቲ ዕለትን ቁጽሪ ሎትን። ገለ ጌጋ ኣሎ ድዩ? ደው በሊ፡ ንተቖጻጻሪኺ ድማ ንገርዮ። ጌጋ ኤቲኬት ዘለዎም ፍርያት ኣብ ጎኒ ይቕመጡ፡ ፈጺሞም ኣይሽየጡን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "እቲ ኤቲኬት ንዓሚል ኣብ ውሽጢ እንታይ ከም ዘሎ፡ ክንደይ ከም ዝምዘንን ክሳዕ መዓስ ጽቡቕ ከም ዝኸውንን ይነግሮ። ጌጋ ዕለት ወይ ጌጋ ኤቲኬት ሰባት ከሕምም ይኽእል፡ ንኣብነት ሓደ ኣለርጀን ምስ ዝጎድል። ስለዚ ነቶም ቀዳሞት ኤቲኬታት ናይ ነፍሲ ወከፍ ሓድሽ ምፍራይ ፈትሽዎም: እቲ ፍርያት፡ እቲ ዕለትን ቁጽሪ ሎትን። ገለ ጌጋ ኣሎ ድዩ? ደው በሉ፡ ንተቖጻጻሪኹም ድማ ንገርዎ። ጌጋ ኤቲኬት ዘለዎም ፍርያት ኣብ ጎኒ ይቕመጡ፡ ፈጺሞም ኣይሽየጡን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.p': "እቲ ኤቲኬት ቅኑዕ ኣይኮነን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.s': { m: "እቲ ኣብ ኤቲኬታት ዘሎ ዕለት ብሓደ ሰሙን ኣዝዩ ደንጒዩ ከም ዘሎ ትርኢ። እንታይ ትገብር?", f: "እቲ ኣብ ኤቲኬታት ዘሎ ዕለት ብሓደ ሰሙን ኣዝዩ ደንጒዩ ከም ዘሎ ትርእዪ። እንታይ ትገብሪ?", x: "እቲ ኣብ ኤቲኬታት ዘሎ ዕለት ብሓደ ሰሙን ኣዝዩ ደንጒዩ ከም ዘሎ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o1': { m: "ምዕሻግ ኣቋርጽ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ምዕሻግ ኣቋርጺ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ምዕሻግ ኣቋርጹ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o2': { m: "ቀጽል፡ ሓደ ሰሙን ጸገም የብሉን።", f: "ቀጽሊ፡ ሓደ ሰሙን ጸገም የብሉን።", x: "ቀጽሉ፡ ሓደ ሰሙን ጸገም የብሉን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.o3': { m: "ነቲ ዕለት ብፒሮ ቀይሮ።", f: "ነቲ ዕለት ብፒሮ ቀይርዮ።", x: "ነቲ ዕለት ብፒሮ ቀይርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.w': "ጌጋ ዕለት ሰባት ደጊም ውሑስ ዘይኮነ መግቢ ክበልዑ ክገብር ይኽእል። ደሓር ካብ ምምላሱ፡ ሕጂ ደው ምባል ይሓይሽ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.linecleaning': "መስመር ምጽራይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuim': "ዓፍራ (ናይ ሳሙና)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hogedrukspuit': "መንፈሒ ማይ ብጸቕጢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naspoelen': "ብጽሩይ ማይ ምሕጻብ (ሳሙና ምውጻእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.demonteren': "ምፍታሕ (ናብ ክፍልታት ምፍላይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.borstel': "ብሩሽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restjes': "ተረፍ (ንኣሽቱ ቁራጻት መግቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.1': { m: "ቅድም ነቲ ማሽን ኣጥፍኦ።", f: "ቅድም ነቲ ማሽን ኣጥፍእዮ።", x: "ቅድም ነቲ ማሽን ኣጥፍእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.2': { m: "ነቲ ዓፍራ ኣብቲ ቀበቶ ንፍሖ።", f: "ነቲ ዓፍራ ኣብቲ ቀበቶ ንፍሕዮ።", x: "ነቲ ዓፍራ ኣብቲ ቀበቶ ንፍሕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.linecleaning.3': { m: "ድሕሪኡ ኩሉ ብጽሩይ ማይ ሕጸቦ።", f: "ድሕሪኡ ኩሉ ብጽሩይ ማይ ሕጸብዮ።", x: "ድሕሪኡ ኩሉ ብጽሩይ ማይ ሕጸብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.q': "እቲ ቀበቶ ጸሪዩ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a': "ገና። ገና ብጽሩይ ማይ ክሓጽቦ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning': { m: "ቅድሚ ምጽራይ፡ ሓይሊ ኣጥፍእ", f: "ቅድሚ ምጽራይ፡ ሓይሊ ኣጥፍኢ", x: "ቅድሚ ምጽራይ፡ ሓይሊ ኣጥፍኡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.b': { m: "ፈጺምካ ዝሰርሕ ዘሎ ማሽን ኣይተጽሪ። ኣጥፍኦ፡ ዝኾነ ሰብ ከም ብሓድሽ ከም ዘየበግሶ ድማ ኣረጋግጽ: ስጉምትታት ትካልካ ተኸተል። ቅኑዕ ጓንቲ፡ መነጽርን ቡትስን ግበር: ፍርያት ጽሬት ንቖርበትካን ንኣዒንቲካን ከንድዶ ይኽእል። ፈጺምካ ፍርያት ኣይትሕወስ። ቅድም ነቲ ተረፍ ኣልግሶ፡ ድሕሪኡ ዓፍራ ግበር፡ ሕኸኽ፡ ሕጸብ። ኣብ ሳጹናት ኤሌክትሪክ ወይ ሶኬታት ማይ ኣይትንፋሕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ፈጺምኪ ዝሰርሕ ዘሎ ማሽን ኣይተጽርዪ። ኣጥፍእዮ፡ ዝኾነ ሰብ ከም ብሓድሽ ከም ዘየበግሶ ድማ ኣረጋግጺ: ስጉምትታት ትካልኪ ተኸተሊ። ቅኑዕ ጓንቲ፡ መነጽርን ቡትስን ግበሪ: ፍርያት ጽሬት ንቖርበትኪን ንኣዒንቲኪን ከንድዶ ይኽእል። ፈጺምኪ ፍርያት ኣይትሕወሲ። ቅድም ነቲ ተረፍ ኣልግስዮ፡ ድሕሪኡ ዓፍራ ግበሪ፡ ሕኸኺ፡ ሕጸቢ። ኣብ ሳጹናት ኤሌክትሪክ ወይ ሶኬታት ማይ ኣይትንፍሒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ፈጺምኩም ዝሰርሕ ዘሎ ማሽን ኣይተጽርዩ። ኣጥፍእዎ፡ ዝኾነ ሰብ ከም ብሓድሽ ከም ዘየበግሶ ድማ ኣረጋግጹ: ስጉምትታት ትካልኩም ተኸተሉ። ቅኑዕ ጓንቲ፡ መነጽርን ቡትስን ግበሩ: ፍርያት ጽሬት ንቖርበትኩምን ንኣዒንቲኩምን ከንድዶ ይኽእል። ፈጺምኩም ፍርያት ኣይትሕወሱ። ቅድም ነቲ ተረፍ ኣልግስዎ፡ ድሕሪኡ ዓፍራ ግበሩ፡ ሕኸኹ፡ ሕጸቡ። ኣብ ሳጹናት ኤሌክትሪክ ወይ ሶኬታት ማይ ኣይትንፍሑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.p': "እቲ ማሽን ጠፊኡ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.s': { m: "ቁሩብ ስጋ ኣብቲ ቀበቶ ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብር?", f: "ቁሩብ ስጋ ኣብቲ ቀበቶ ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብሪ?", x: "ቁሩብ ስጋ ኣብቲ ቀበቶ ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o1': { m: "ቅድም ኣጥፍኦ፡ ድሕሪኡ ኣውጽኦ።", f: "ቅድም ኣጥፍእዮ፡ ድሕሪኡ ኣውጽእዮ።", x: "ቅድም ኣጥፍእዎ፡ ድሕሪኡ ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o2': { m: "ብኢድካ ቀልጢፍካ ስሒብካ ኣውጽኦ።", f: "ብኢድኪ ቀልጢፍኪ ስሒብኪ ኣውጽእዮ።", x: "ብኢድኩም ቀልጢፍኩም ስሒብኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.o3': { m: "ብካራ ደፊእካ ኣውጽኦ።", f: "ብካራ ደፊእኪ ኣውጽእዮ።", x: "ብካራ ደፊእኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.w': { m: "ዝሰርሕ ቀበቶ ኣብ ሓንቲ ካልኢት ኢድካ ክስሕብ ይኽእል። ምጥፋኡ ሓጺር ግዜ ጥራይ ይወስድ።", f: "ዝሰርሕ ቀበቶ ኣብ ሓንቲ ካልኢት ኢድኪ ክስሕብ ይኽእል። ምጥፋኡ ሓጺር ግዜ ጥራይ ይወስድ።", x: "ዝሰርሕ ቀበቶ ኣብ ሓንቲ ካልኢት ኢድኩም ክስሕብ ይኽእል። ምጥፋኡ ሓጺር ግዜ ጥራይ ይወስድ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.haccp': "ምፍታሽን ምጽሓፍን (HACCP)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlepunt': "ነጥቢ ምፍታሽ (ገለ ነገር ክፍተሽ ዘለዎ ስጉምቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerntemperatuur': "ውሽጣዊ መጠን ሙቐት (ኣብ ውሽጢ መግቢ ዘሎ ሙቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikthermometer': "ዝውጋእ ቴርሞሜተር (ናብ ውሽጢ መግቢ ዝኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijking': "ፍልልይ (ገለ ነገር ከም ዝግባእ ኣይኮነን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steekproef': "ናይ ኣጋጣሚ ምርመራ (ቁሩብ ፍርያት ይፍተኑ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwaliteitsdienst': "ክፍሊ ብቕዓት (QA)", // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.1': { m: "ነቲ ውሽጣዊ መጠን ሙቐት ብዝውጋእ ቴርሞሜተር ዕቐኖ።", f: "ነቲ ውሽጣዊ መጠን ሙቐት ብዝውጋእ ቴርሞሜተር ዕቐንዮ።", x: "ነቲ ውሽጣዊ መጠን ሙቐት ብዝውጋእ ቴርሞሜተር ዕቐንዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.2': { m: "ኩሉ ኣብቲ ዝርዝር ጽሓፍ።", f: "ኩሉ ኣብቲ ዝርዝር ጽሓፊ።", x: "ኩሉ ኣብቲ ዝርዝር ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.haccp.3': { m: "ገለ ጌጋ ኣሎ ድዩ? ብቕጽበት ሕበሮ።", f: "ገለ ጌጋ ኣሎ ድዩ? ብቕጽበት ሕበርዮ።", x: "ገለ ጌጋ ኣሎ ድዩ? ብቕጽበት ሕበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.q': "ስለምንታይ ኩሉ ክጽሕፍ ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a': "ከምኡ እንተ ጌርና፡ እቲ መግቢ ውሑስ ምዃኑ ንፈልጥ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp': { m: "HACCP: ፈትሽ፡ ጽሓፍ፡ ሕበር", f: "HACCP: ፈትሺ፡ ጽሓፊ፡ ሕበሪ", x: "HACCP: ፈትሹ፡ ጽሓፉ፡ ሕበሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.b': { m: "ነፍሲ ወከፍ ትካል መግቢ ብፕላን ድሕንነት መግቢ (HACCP) ይሰርሕ። ኣብ ኣየኖት ስጉምትታት ገለ ነገር ክትፍትሽ ከም ዘለካ ይገልጽ፡ ከም መጠን ሙቐት ዝሑል ክፍሊ ወይ ውሽጣዊ መጠን ሙቐት ዝበሰለ ስጋ። ትፍትሽ፡ ትጽሕፎ፡ ድሕሪኡ ድማ ትፍርም። ብሓቂ ዝዓቐንካዮ ጽሓፍ፡ ጌጋ እንተ ኾነ እውን። ጌጋ ቁጽሪ ጌጋኻ ኣይኮነን፡ ምሕባኡ ግን ሓደገኛ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ነፍሲ ወከፍ ትካል መግቢ ብፕላን ድሕንነት መግቢ (HACCP) ይሰርሕ። ኣብ ኣየኖት ስጉምትታት ገለ ነገር ክትፍትሺ ከም ዘለኪ ይገልጽ፡ ከም መጠን ሙቐት ዝሑል ክፍሊ ወይ ውሽጣዊ መጠን ሙቐት ዝበሰለ ስጋ። ትፍትሺ፡ ትጽሕፍዮ፡ ድሕሪኡ ድማ ትፍርሚ። ብሓቂ ዝዓቐንክዮ ጽሓፊ፡ ጌጋ እንተ ኾነ እውን። ጌጋ ቁጽሪ ጌጋኺ ኣይኮነን፡ ምሕባኡ ግን ሓደገኛ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ነፍሲ ወከፍ ትካል መግቢ ብፕላን ድሕንነት መግቢ (HACCP) ይሰርሕ። ኣብ ኣየኖት ስጉምትታት ገለ ነገር ክትፍትሹ ከም ዘለኩም ይገልጽ፡ ከም መጠን ሙቐት ዝሑል ክፍሊ ወይ ውሽጣዊ መጠን ሙቐት ዝበሰለ ስጋ። ትፍትሹ፡ ትጽሕፍዎ፡ ድሕሪኡ ድማ ትፍርሙ። ብሓቂ ዝዓቐንኩምዎ ጽሓፉ፡ ጌጋ እንተ ኾነ እውን። ጌጋ ቁጽሪ ጌጋኹም ኣይኮነን፡ ምሕባኡ ግን ሓደገኛ እዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.p': "እቲ መጠን ሙቐት ኣዝዩ ልዑል እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.s': { m: "ሰዓት ዓሰርተ ምዕቃን ረሲዕካ። ብጻይ ስራሕካ ከምዚ ይብል: \"ጽቡቕ ቁጽሪ ጥራይ ጽሓፍ\"። እንታይ ትገብር?", f: "ሰዓት ዓሰርተ ምዕቃን ረሲዕኪ። ብጻይ ስራሕኪ ከምዚ ይብል: \"ጽቡቕ ቁጽሪ ጥራይ ጽሓፊ\"። እንታይ ትገብሪ?", x: "ሰዓት ዓሰርተ ምዕቃን ረሲዕኩም። ብጻይ ስራሕኩም ከምዚ ይብል: \"ጽቡቕ ቁጽሪ ጥራይ ጽሓፉ\"። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o1': { m: "ሕጂ ዕቐን፡ እቲ ሓቀኛ ሰዓት ድማ ጽሓፍ።", f: "ሕጂ ዕቐኒ፡ እቲ ሓቀኛ ሰዓት ድማ ጽሓፊ።", x: "ሕጂ ዕቐኑ፡ እቲ ሓቀኛ ሰዓት ድማ ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o2': { m: "ንሰዓት ዓሰርተ ጽቡቕ ቁጽሪ ጽሓፍ።", f: "ንሰዓት ዓሰርተ ጽቡቕ ቁጽሪ ጽሓፊ።", x: "ንሰዓት ዓሰርተ ጽቡቕ ቁጽሪ ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.o3': { m: "ነቲ ቦታ ኣብቲ ዝርዝር ባዶ ግደፎ።", f: "ነቲ ቦታ ኣብቲ ዝርዝር ባዶ ግደፍዮ።", x: "ነቲ ቦታ ኣብቲ ዝርዝር ባዶ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.w': "እቲ ዝርዝር ብሓቂ እንታይ ከም ዝተፈጸመ ከርኢ ኣለዎ። ዝተፈጠረ ቁጽሪ ሰባት ከሕምም ዝኽእል ጸገም ይሓብእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.collection': "ጎሓፍ ምእካብ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.binlorry': "መኪና ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vuilniswagen': "መኪና ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kliko': "መንኮርኮር ዘለዎ መጕሓፊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kieplift': "መልዓሊ መጕሓፊ (ነቲ መጕሓፊ ኣልዒሉ የራግፎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.treeplank': "ናይ ድሕሪት መርገጺ (ኣብ ድሕሪት መኪና ዘሎ መርገጺ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijplaatsing': "ተወሳኺ ጎሓፍ (ኣብ ጎኒ መጕሓፊ ዝተገድፉ ሳንጣታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ophaaldag': "መዓልቲ ምእካብ ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.1': { m: "ነቲ መጕሓፊ ኣብቲ መልዓሊ ኣቐምጦ።", f: "ነቲ መጕሓፊ ኣብቲ መልዓሊ ኣቐምጥዮ።", x: "ነቲ መጕሓፊ ኣብቲ መልዓሊ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.2': "ኣብ ጎኒ እቲ ኮንተይነር ሳንጣታት ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.binlorry.3': { m: "እቲ መጕሓፊ ኣዝዩ ከቢድ እዩ። ግደፎ።", f: "እቲ መጕሓፊ ኣዝዩ ከቢድ እዩ። ግደፍዮ።", x: "እቲ መጕሓፊ ኣዝዩ ከቢድ እዩ። ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.q': "ኣብ ድሕሪት ደው ኢለ ክጓዓዝ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a': { m: "ኣይፋል፡ ናብቲ ካቢና እቶ።", f: "ኣይፋል፡ ናብቲ ካቢና እተዊ።", x: "ኣይፋል፡ ናብቲ ካቢና እተዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry': { m: "ክትረአ ኣለካ፡ ኣብ ውሽጢ ተጓዓዝ", f: "ክትረኣዪ ኣለኪ፡ ኣብ ውሽጢ ተጓዓዚ", x: "ክትረኣዩ ኣለኩም፡ ኣብ ውሽጢ ተጓዓዙ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.b': { m: "ኣብ ነፍሲ ወከፍ ዙረት ዝበርቕ ክዳንካ ኽደን። ብወገን ጽርግያ ኣግሪ ደይብን ውረድን፡ ብወገን ትራፊክ ግን ፈጺሙ ኣይኮነን። ኣብቲ ካቢና ተጓዓዝ፡ ኣብ ድሕሪት እታ መኪና ኣይኮነን: ትካልካ ብንጹር እንተ ኣፍቂዱ ጥራይ፡ ንድሕሪት ክትከይድ ወይ ቀልጢፋ ክትጓዓዝ ከላ ድማ ፈጺሙ ኣይኮነን። እቲ መልዓሊ መጕሓፊ ክንቀሳቐስ ከሎ ርሒቕካ ጽናሕ። መጕሓፊ ኣዝዩ ከቢድ ድዩ፡ ወይ ገለ ነገር ካብኡ ወጺኡ ኣሎ ድዩ? ግደፎ፡ ሕበሮ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ነፍሲ ወከፍ ዙረት ዝበርቕ ክዳንኪ ኽደኒ። ብወገን ጽርግያ ኣግሪ ደይቢን ውረዲን፡ ብወገን ትራፊክ ግን ፈጺሙ ኣይኮነን። ኣብቲ ካቢና ተጓዓዚ፡ ኣብ ድሕሪት እታ መኪና ኣይኮነን: ትካልኪ ብንጹር እንተ ኣፍቂዱ ጥራይ፡ ንድሕሪት ክትከይድ ወይ ቀልጢፋ ክትጓዓዝ ከላ ድማ ፈጺሙ ኣይኮነን። እቲ መልዓሊ መጕሓፊ ክንቀሳቐስ ከሎ ርሒቕኪ ጽንሒ። መጕሓፊ ኣዝዩ ከቢድ ድዩ፡ ወይ ገለ ነገር ካብኡ ወጺኡ ኣሎ ድዩ? ግደፍዮ፡ ሕበርዮ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ነፍሲ ወከፍ ዙረት ዝበርቕ ክዳንኩም ኽደኑ። ብወገን ጽርግያ ኣግሪ ደይቡን ውረዱን፡ ብወገን ትራፊክ ግን ፈጺሙ ኣይኮነን። ኣብቲ ካቢና ተጓዓዙ፡ ኣብ ድሕሪት እታ መኪና ኣይኮነን: ትካልኩም ብንጹር እንተ ኣፍቂዱ ጥራይ፡ ንድሕሪት ክትከይድ ወይ ቀልጢፋ ክትጓዓዝ ከላ ድማ ፈጺሙ ኣይኮነን። እቲ መልዓሊ መጕሓፊ ክንቀሳቐስ ከሎ ርሒቕኩም ጽንሑ። መጕሓፊ ኣዝዩ ከቢድ ድዩ፡ ወይ ገለ ነገር ካብኡ ወጺኡ ኣሎ ድዩ? ግደፍዎ፡ ሕበርዎ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.binlorry.p': "እዚ መጕሓፊ ኣዝዩ ከቢድ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.s': { m: "እቲ ዝቕጽል ጎደና ኣዝዩ ቀረባ እዩ። እቲ መራሒ መኪና ከምዚ ይብል: \"ኣብቲ ናይ ድሕሪት መርገጺ ደው በል\"። እንታይ ትገብር?", f: "እቲ ዝቕጽል ጎደና ኣዝዩ ቀረባ እዩ። እቲ መራሒ መኪና ከምዚ ይብል: \"ኣብቲ ናይ ድሕሪት መርገጺ ደው በሊ\"። እንታይ ትገብሪ?", x: "እቲ ዝቕጽል ጎደና ኣዝዩ ቀረባ እዩ። እቲ መራሒ መኪና ከምዚ ይብል: \"ኣብቲ ናይ ድሕሪት መርገጺ ደው በሉ\"። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o1': { m: "ዋላ እንተ ኾነ ናብቲ ካቢና እቶ።", f: "ዋላ እንተ ኾነ ናብቲ ካቢና እተዊ።", x: "ዋላ እንተ ኾነ ናብቲ ካቢና እተዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o2': { m: "ኣብቲ መርገጺ ደው በል፡ ቀረባ እዩ።", f: "ኣብቲ መርገጺ ደው በሊ፡ ቀረባ እዩ።", x: "ኣብቲ መርገጺ ደው በሉ፡ ቀረባ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.o3': { m: "ኣብ ድሕሪ እታ መኪና ብእግሪ ኪድ።", f: "ኣብ ድሕሪ እታ መኪና ብእግሪ ኪዲ።", x: "ኣብ ድሕሪ እታ መኪና ብእግሪ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.w': { m: "ካብ እትንቀሳቐስ መኪና ምውዳቕ ካብቶም ዝዓበዩ ሓደጋታት ናይዚ ስራሕ ሓደ እዩ። ኣብቲ ካቢና ውሑስ ኢኻ።", f: "ካብ እትንቀሳቐስ መኪና ምውዳቕ ካብቶም ዝዓበዩ ሓደጋታት ናይዚ ስራሕ ሓደ እዩ። ኣብቲ ካቢና ውሕስቲ ኢኺ።", x: "ካብ እትንቀሳቐስ መኪና ምውዳቕ ካብቶም ዝዓበዩ ሓደጋታት ናይዚ ስራሕ ሓደ እዩ። ኣብቲ ካቢና ውሑሳት ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.reversing': "ብውሕስና ንድሕሪት ምዝዋር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achteruitrijden': "ንድሕሪት ምዝዋር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dodehoek': "ዘይርአ ቦታ (መራሒ ክርኢ ዘይክእለሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwijzer': "ኣመልካቲ (ንመራሒ መኪና ዝመርሕ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oogcontact': "ምርኽኻብ ዓይኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.piepen': "ቢፕ ምባል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.cabine': "ካቢና (መራሒ ዝቕመጠሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.1': { m: "ፈጺምካ ኣብ ድሕሪ እታ መኪና ደው ኣይትበል።", f: "ፈጺምኪ ኣብ ድሕሪ እታ መኪና ደው ኣይትበሊ።", x: "ፈጺምኩም ኣብ ድሕሪ እታ መኪና ደው ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.2': { m: "ኣብቲ መስትያት ክርእየካ ኣይክእልን እየ።", f: "ኣብቲ መስትያት ክርእየኪ ኣይክእልን እየ።", x: "ኣብቲ መስትያት ክርእየኩም ኣይክእልን እየ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.reversing.3': { m: "ምስቲ መራሒ ብዓይኒ ተራኸብ።", f: "ምስቲ መራሒ ብዓይኒ ተራኸቢ።", x: "ምስቲ መራሒ ብዓይኒ ተራኸቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.q': { m: "ንድሕሪት ክዝውር ክትሕግዘኒ ትኽእል ዶ?", f: "ንድሕሪት ክዝውር ክትሕግዝኒ ትኽእሊ ዶ?", x: "ንድሕሪት ክዝውር ክትሕግዙኒ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a': "እወ፡ ኣብ ጸጋም እየ ዘለኹ። ኣብ መስትያትኩም ርኣዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing': "ኣብ ድሕሪ ንድሕሪት እትኸይድ መኪና ፈጺሙ ኣይኮነን", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.reversing.b': { m: "ብዙሓት ሓደጋታት ምስ መኻይን ጎሓፍ ንድሕሪት ክኸዳ ከለዋ እዩ ዝፍጸም። እቲ መራሒ ልክዕ ኣብ ድሕሪ እታ መኪና ክርኢ ኣይክእልን: እዚ እቲ ዘይርአ ቦታ እዩ። ስለዚ ፈጺምካ ኣብ ድሕሪ ንድሕሪት ክትከይድ እትኽእል መኪና ደው ኣይትበል፡ ኣይትኺድ ድማ። ኣብቲ መስትያት ክትረኣኣዩ እትኽእሉሉ ጎኒ ኾይንካ ነቲ መራሒ ምርሖ። ምርኽኻብ ዓይኒ ጠፊኡ ድዩ? እቲ መራሒ ደው ይብል። ቅድሚ ምጅማርካ ኣብ ንጹራት ምልክታት ተሰማማዕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ብዙሓት ሓደጋታት ምስ መኻይን ጎሓፍ ንድሕሪት ክኸዳ ከለዋ እዩ ዝፍጸም። እቲ መራሒ ልክዕ ኣብ ድሕሪ እታ መኪና ክርኢ ኣይክእልን: እዚ እቲ ዘይርአ ቦታ እዩ። ስለዚ ፈጺምኪ ኣብ ድሕሪ ንድሕሪት ክትከይድ እትኽእል መኪና ደው ኣይትበሊ፡ ኣይትኺዲ ድማ። ኣብቲ መስትያት ክትረኣኣዩ እትኽእሉሉ ጎኒ ኾይንኪ ነቲ መራሒ ምርሕዮ። ምርኽኻብ ዓይኒ ጠፊኡ ድዩ? እቲ መራሒ ደው ይብል። ቅድሚ ምጅማርኪ ኣብ ንጹራት ምልክታት ተሰማማዒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ብዙሓት ሓደጋታት ምስ መኻይን ጎሓፍ ንድሕሪት ክኸዳ ከለዋ እዩ ዝፍጸም። እቲ መራሒ ልክዕ ኣብ ድሕሪ እታ መኪና ክርኢ ኣይክእልን: እዚ እቲ ዘይርአ ቦታ እዩ። ስለዚ ፈጺምኩም ኣብ ድሕሪ ንድሕሪት ክትከይድ እትኽእል መኪና ደው ኣይትበሉ፡ ኣይትኺዱ ድማ። ኣብቲ መስትያት ክትረኣኣዩ እትኽእሉሉ ጎኒ ኾይንኩም ነቲ መራሒ ምርሕዎ። ምርኽኻብ ዓይኒ ጠፊኡ ድዩ? እቲ መራሒ ደው ይብል። ቅድሚ ምጅማርኩም ኣብ ንጹራት ምልክታት ተሰማማዑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.p': "ደው በሉ! ደጊም ኣይርእየኩምን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.s': { m: "እታ መኪና ንድሕሪት ትኸይድ ኣላ። ሳንጣ ንምውሳድ ኣብ ድሕሪኣ ትኸይድ ኣለኻ። እንታይ ትገብር?", f: "እታ መኪና ንድሕሪት ትኸይድ ኣላ። ሳንጣ ንምውሳድ ኣብ ድሕሪኣ ትኸዲ ኣለኺ። እንታይ ትገብሪ?", x: "እታ መኪና ንድሕሪት ትኸይድ ኣላ። ሳንጣ ንምውሳድ ኣብ ድሕሪኣ ትኸዱ ኣለኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o1': { m: "እታ መኪና ደው ክሳዕ እትብል ተጸበ።", f: "እታ መኪና ደው ክሳዕ እትብል ተጸበዪ።", x: "እታ መኪና ደው ክሳዕ እትብል ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o2': { m: "ቀልጢፍካ ኪድ፡ ሓንቲ ካልኢት ጥራይ እያ።", f: "ቀልጢፍኪ ኪዲ፡ ሓንቲ ካልኢት ጥራይ እያ።", x: "ቀልጢፍኩም ኪዱ፡ ሓንቲ ካልኢት ጥራይ እያ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.o3': { m: "ንመራሒ ብኢድ ምልክት ሃቦ፡ ኪድ።", f: "ንመራሒ ብኢድ ምልክት ሃብዮ፡ ኪዲ።", x: "ንመራሒ ብኢድ ምልክት ሃብዎ፡ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.w': { m: "መራሒ ኣብ ድሕሪ እታ መኪና ክርእየካ ኣይክእልን። ንሓደጋ ሓንቲ ካልኢት እኹል እያ።", f: "መራሒ ኣብ ድሕሪ እታ መኪና ክርእየኪ ኣይክእልን። ንሓደጋ ሓንቲ ካልኢት እኹል እያ።", x: "መራሒ ኣብ ድሕሪ እታ መኪና ክርእየኩም ኣይክእልን። ንሓደጋ ሓንቲ ካልኢት እኹል እያ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesorting': "ጎሓፍ ምፍላይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papier': "ወረቐት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plastic': "ፕላስቲክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gft': "ጎሓፍ መግብን ኣትክልትን (ፍረታት፡ ኣሕምልትን ኣትክልትን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.restafval': "ሓፈሻዊ ጎሓፍ (ክፍለ ዘይክእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.karton': "ካርቶን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blik': "ላቲና (ናይ ሓጺን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.1': "እቲ ብርጭቆ ናብቲ መእከቢ ጥርሙዛት እዩ ዝኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.2': "እዚ ምስ ሓፈሻዊ ጎሓፍ እዩ ዝኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesorting.3': { m: "ነቲ ካርቶን ጸፊሕ ገይርካ ዕጸፎ።", f: "ነቲ ካርቶን ጸፊሕ ገይርኪ ዕጸፍዮ።", x: "ነቲ ካርቶን ጸፊሕ ገይርኩም ዕጸፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.q': "ሳጹን ፒዛ ናበይ እዩ ዝኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a': "ምስ ሓፈሻዊ ጎሓፍ። ስብሒ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting': "ጽቡቕ ምፍላይ ስራሕ ይቑጥብ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.b': { m: "ዝተፈለየ ጎሓፍ ከም ብሓድሽ ክጥቀመሉ ይከኣል፡ ወረቐት ወረቐት ይኸውን፡ ብርጭቆ ብርጭቆ ይኸውን። ግን ሓደ ጌጋ ነገር ምሉእ ጽዕነት ከበላሹ ይኽእል። ስለዚ ቅድሚ ምርጋፍካ ናብ ውሽጢ እቲ መጕሓፊ ጠምት። ኣብኡ ዘይግብኦ ነገር ኣሎ ድዩ፡ ከም ኣብ ወረቐት ዘሎ ሳንጣ ሓፈሻዊ ጎሓፍ? ግደፎ፡ ወይ ሕግታት ትካልካ ተኸተል። ኣየናይ ጎሓፍ ናበይ ከም ዝኸይድ ካብ ከተማ ናብ ከተማ ይፈላለ፡ ሕግታት ከባቢኻ ተማሃር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ዝተፈለየ ጎሓፍ ከም ብሓድሽ ክጥቀመሉ ይከኣል፡ ወረቐት ወረቐት ይኸውን፡ ብርጭቆ ብርጭቆ ይኸውን። ግን ሓደ ጌጋ ነገር ምሉእ ጽዕነት ከበላሹ ይኽእል። ስለዚ ቅድሚ ምርጋፍኪ ናብ ውሽጢ እቲ መጕሓፊ ጠምቲ። ኣብኡ ዘይግብኦ ነገር ኣሎ ድዩ፡ ከም ኣብ ወረቐት ዘሎ ሳንጣ ሓፈሻዊ ጎሓፍ? ግደፍዮ፡ ወይ ሕግታት ትካልኪ ተኸተሊ። ኣየናይ ጎሓፍ ናበይ ከም ዝኸይድ ካብ ከተማ ናብ ከተማ ይፈላለ፡ ሕግታት ከባቢኺ ተማሃሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ዝተፈለየ ጎሓፍ ከም ብሓድሽ ክጥቀመሉ ይከኣል፡ ወረቐት ወረቐት ይኸውን፡ ብርጭቆ ብርጭቆ ይኸውን። ግን ሓደ ጌጋ ነገር ምሉእ ጽዕነት ከበላሹ ይኽእል። ስለዚ ቅድሚ ምርጋፍኩም ናብ ውሽጢ እቲ መጕሓፊ ጠምቱ። ኣብኡ ዘይግብኦ ነገር ኣሎ ድዩ፡ ከም ኣብ ወረቐት ዘሎ ሳንጣ ሓፈሻዊ ጎሓፍ? ግደፍዎ፡ ወይ ሕግታት ትካልኩም ተኸተሉ። ኣየናይ ጎሓፍ ናበይ ከም ዝኸይድ ካብ ከተማ ናብ ከተማ ይፈላለ፡ ሕግታት ከባቢኹም ተማሃሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.p': "እዚ ኣብዚ ኣይኮነን ቦታኡ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.s': { m: "ሓደ መጕሓፊ ወረቐት ብጸለምቲ ሳንጣታት ጎሓፍ መሊኡ እዩ። እንታይ ትገብር?", f: "ሓደ መጕሓፊ ወረቐት ብጸለምቲ ሳንጣታት ጎሓፍ መሊኡ እዩ። እንታይ ትገብሪ?", x: "ሓደ መጕሓፊ ወረቐት ብጸለምቲ ሳንጣታት ጎሓፍ መሊኡ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o1': { m: "ግደፎ፡ ሕበሮ ድማ።", f: "ግደፍዮ፡ ሕበርዮ ድማ።", x: "ግደፍዎ፡ ሕበርዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o2': { m: "ናብቲ ወረቐት ኣራግፎ።", f: "ናብቲ ወረቐት ኣራግፍዮ።", x: "ናብቲ ወረቐት ኣራግፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.o3': { m: "ነቶም ሳንጣታት ብኢድ ኣውጽኦም።", f: "ነቶም ሳንጣታት ብኢድ ኣውጽእዮም።", x: "ነቶም ሳንጣታት ብኢድ ኣውጽእዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.w': "ኣብ ወረቐት ዘሎ ጎሓፍ ንምሉእ ጽዕነት የበላሽዎ። ሳንጣታት እውን በሊሕ ወይ ረሳሕ ነገራት ክሕዙ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.wastesafety': "በሊሕ ነገራትን ምልዓልን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snijwond': "ቑስሊ ምቑራጽ (ካብ በሊሕ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.prikken': "ምውጋእ (በሊሕ ጫፍ ናብ ቆርበት ይኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naald': "መርፍእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherp': "በሊሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rugpijn': "ቃንዛ ሕቖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tetanusprik': "መርፍእ ቴታነስ (ኣብ ቑስሊ ካብ ረሳሕ ዝመጽእ ሕማም ዝከላኸል መርፍእ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.1': { m: "ፈጺምካ ሳንጣ ካብ ታሕቲ ኣይትሓዝ።", f: "ፈጺምኪ ሳንጣ ካብ ታሕቲ ኣይትሓዚ።", x: "ፈጺምኩም ሳንጣ ካብ ታሕቲ ኣይትሓዙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.2': { m: "ተጠንቀቕ፡ ኣብዚ ሳንጣ ብርጭቆ ኣሎ።", f: "ተጠንቀቒ፡ ኣብዚ ሳንጣ ብርጭቆ ኣሎ።", x: "ተጠንቀቑ፡ ኣብዚ ሳንጣ ብርጭቆ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.wastesafety.3': "መርፍእ ወጊኡኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.q': "ተቖሪጸ። እንታይ ክገብር ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a': { m: "ነቲ ቑስሊ ብጽቡቕ ሕጸቦ። ንዓይ ድማ ንገረኒ።", f: "ነቲ ቑስሊ ብጽቡቕ ሕጸብዮ። ንዓይ ድማ ንገርኒ።", x: "ነቲ ቑስሊ ብጽቡቕ ሕጸብዎ። ንዓይ ድማ ንገሩኒ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety': { m: "ፈጺምካ ሳንጣ ኣይትጸቕጥ", f: "ፈጺምኪ ሳንጣ ኣይትጸቕጢ", x: "ፈጺምኩም ሳንጣ ኣይትጸቕጡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.b': { m: "ሳንጣ ጎሓፍ ብርጭቆ፡ ካራታት ወይ መርፍኣት ክሕዝ ይኽእል። ስለዚ ፈጺምካ ሳንጣ ናብ ኣካላትካ ኣይተጠግዖ፡ ፈጺምካ ኣይትጸቕጦ፡ ፈጺምካ ድማ ኣብ እግሪኻ ኣይትሰከሞ: ካብ ላዕሊ ሒዝካ፡ ካባኻ ኣርሒቕካ ተሰከሞ። ጓንቲኻ ግበር። ኣብራኽካ ዓጺፍካ፡ ሕቖኻ ቀጥ ኣቢልካ ኣልዕል፡ መጕሓፊ ድማ ድፍኦ፡ ኣይትሰከሞ። ገለ ነገር ወጊኡካ ወይ ቆሪጹካ ድዩ? ነቲ ቑስሊ ብማይ ብጽቡቕ ሕጸቦ፡ ኣብታ ሓንቲ መዓልቲ ድማ ንተቖጻጻሪኻ ንገሮ።", f: "ሳንጣ ጎሓፍ ብርጭቆ፡ ካራታት ወይ መርፍኣት ክሕዝ ይኽእል። ስለዚ ፈጺምኪ ሳንጣ ናብ ኣካላትኪ ኣይተጠግዕዮ፡ ፈጺምኪ ኣይትጸቕጥዮ፡ ፈጺምኪ ድማ ኣብ እግሪኺ ኣይትሰከምዮ: ካብ ላዕሊ ሒዝኪ፡ ካባኺ ኣርሒቕኪ ተሰከምዮ። ጓንቲኺ ግበሪ። ኣብራኽኪ ዓጺፍኪ፡ ሕቖኺ ቀጥ ኣቢልኪ ኣልዕሊ፡ መጕሓፊ ድማ ድፍእዮ፡ ኣይትሰከምዮ። ገለ ነገር ወጊኡኪ ወይ ቆሪጹኪ ድዩ? ነቲ ቑስሊ ብማይ ብጽቡቕ ሕጸብዮ፡ ኣብታ ሓንቲ መዓልቲ ድማ ንተቖጻጻሪኺ ንገርዮ።", x: "ሳንጣ ጎሓፍ ብርጭቆ፡ ካራታት ወይ መርፍኣት ክሕዝ ይኽእል። ስለዚ ፈጺምኩም ሳንጣ ናብ ኣካላትኩም ኣይተጠግዕዎ፡ ፈጺምኩም ኣይትጸቕጥዎ፡ ፈጺምኩም ድማ ኣብ እግሪኹም ኣይትሰከምዎ: ካብ ላዕሊ ሒዝኩም፡ ካባኹም ኣርሒቕኩም ተሰከምዎ። ጓንቲኹም ግበሩ። ኣብራኽኩም ዓጺፍኩም፡ ሕቖኹም ቀጥ ኣቢልኩም ኣልዕሉ፡ መጕሓፊ ድማ ድፍእዎ፡ ኣይትሰከምዎ። ገለ ነገር ወጊኡኩም ወይ ቆሪጹኩም ድዩ? ነቲ ቑስሊ ብማይ ብጽቡቕ ሕጸብዎ፡ ኣብታ ሓንቲ መዓልቲ ድማ ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.p': "ተወጊአ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.s': { m: "ሓደ ሳንጣ ይቕደድ። ኣብኡ መርፍእ ትርኢ። እንታይ ትገብር?", f: "ሓደ ሳንጣ ይቕደድ። ኣብኡ መርፍእ ትርእዪ። እንታይ ትገብሪ?", x: "ሓደ ሳንጣ ይቕደድ። ኣብኡ መርፍእ ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o1': { m: "ኣይትተንክፎ፡ ሕበሮ ድማ።", f: "ኣይትተንክፍዮ፡ ሕበርዮ ድማ።", x: "ኣይትተንክፍዎ፡ ሕበርዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o2': { m: "ጓንቲ ገይርካ ልቐሞ።", f: "ጓንቲ ገይርኪ ልቐምዮ።", x: "ጓንቲ ገይርኩም ልቐምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.o3': { m: "ናብቲ ሳንጣ መሊስካ ድፍኦ።", f: "ናብቲ ሳንጣ መሊስኪ ድፍእዮ።", x: "ናብቲ ሳንጣ መሊስኩም ድፍእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.w': "ጓንቲ ንመርፍእ ደው ኣየብሎን። መርፍእ ሕማም ከመሓላልፍ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.recycling': "መእከቢ ሪሳይክሊንግ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.yard': "ኣብ መእከቢ ሪሳይክሊንግ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.milieustraat': "መእከቢ ሪሳይክሊንግ (ሰባት ዓበይቲ ወይ ፍሉያት ጎሓፍ ዘምጽኡሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grofvuil': "ዓቢ ጎሓፍ (ዓበይቲ ነገራት፡ ከም ሶፋ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puin': "ፍርስራስ (ዝተሰብሩ ኣእማንን ጡብን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.matras': "ፍራሽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.weegbrug': "ሚዛን መኻይን (ንመኻይንን ንመኻይን ጽዕነትን ዝኸውን ሚዛን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvalpas': "ካርድ ጎሓፍ (ነበርቲ ኣብ ካንቸሎ የርእይዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.1': "እቲ ፍርስራስ ናብ ኮንተይነር ኣርባዕተ እዩ ዝኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.2': "ካርድ ጎሓፍኩም ክርኢ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.yard.3': "ቅድም ብልዕሊ እቲ ሚዛን መኻይን ዘውሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.q': "እዚ ፍራሽ ናበይ እዩ ዝኸይድ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a': "ኣብቲ ናይ ዓቢ ጎሓፍ ኮንተይነር፡ ኣብ ድሕሪት።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard': { m: "ሓግዝ፡ ግን ነቲ ቦታ ውሑስ ሓዞ", f: "ሓግዚ፡ ግን ነቲ ቦታ ውሑስ ሓዝዮ", x: "ሓግዙ፡ ግን ነቲ ቦታ ውሑስ ሓዝዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.b': { m: "ኣብ መእከቢ ሪሳይክሊንግ ንበጻሕቲ ጎሓፎም ናበይ ከም ዝኸይድ ትነግሮም፡ ብጽቡቕ ከም ዝተፈልየ ድማ ትፍትሽ። ሕያዋይ ኹን: ብዙሓት ሰባት ኣብ ዓመት ሒደት ግዜ ጥራይ ይመጹ፡ ነቲ ሕግታት ድማ ኣይፈልጥዎን። ቈልዑን በጻሕትን ካብ ማሽናትን ካብ ጫፍ ነዋሕቲ ኮንተይነራትን ኣርሒቕካ ሓዞም። ከበድቲ ነገራት ብሓባር ኣልዕል፡ ወይ እቲ በጻሒ ናቱ ባዕሉ ክስከም ግደፎ። ሓደ ሰብ ዘይትፈልጦ ነገር የምጽእ ድዩ? ቅድሚ ምእታዉ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ መእከቢ ሪሳይክሊንግ ንበጻሕቲ ጎሓፎም ናበይ ከም ዝኸይድ ትነግርዮም፡ ብጽቡቕ ከም ዝተፈልየ ድማ ትፍትሺ። ሕያወይቲ ኹኒ: ብዙሓት ሰባት ኣብ ዓመት ሒደት ግዜ ጥራይ ይመጹ፡ ነቲ ሕግታት ድማ ኣይፈልጥዎን። ቈልዑን በጻሕትን ካብ ማሽናትን ካብ ጫፍ ነዋሕቲ ኮንተይነራትን ኣርሒቕኪ ሓዝዮም። ከበድቲ ነገራት ብሓባር ኣልዕሊ፡ ወይ እቲ በጻሒ ናቱ ባዕሉ ክስከም ግደፍዮ። ሓደ ሰብ ዘይትፈልጥዮ ነገር የምጽእ ድዩ? ቅድሚ ምእታዉ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ መእከቢ ሪሳይክሊንግ ንበጻሕቲ ጎሓፎም ናበይ ከም ዝኸይድ ትነግርዎም፡ ብጽቡቕ ከም ዝተፈልየ ድማ ትፍትሹ። ሕያዋት ኹኑ: ብዙሓት ሰባት ኣብ ዓመት ሒደት ግዜ ጥራይ ይመጹ፡ ነቲ ሕግታት ድማ ኣይፈልጥዎን። ቈልዑን በጻሕትን ካብ ማሽናትን ካብ ጫፍ ነዋሕቲ ኮንተይነራትን ኣርሒቕኩም ሓዝዎም። ከበድቲ ነገራት ብሓባር ኣልዕሉ፡ ወይ እቲ በጻሒ ናቱ ባዕሉ ክስከም ግደፍዎ። ሓደ ሰብ ዘይትፈልጥዎ ነገር የምጽእ ድዩ? ቅድሚ ምእታዉ ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.p': "እዚ ናብ ኮንተይነር ኣርባዕተ እዩ ዝኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.s': { m: "ሓደ ሰብኣይ ምሉእ ሳንጣ ናብቲ ናይ ዕንጨይቲ ኮንተይነር ክድርቦ ይደሊ። እንታይ ትገብር?", f: "ሓደ ሰብኣይ ምሉእ ሳንጣ ናብቲ ናይ ዕንጨይቲ ኮንተይነር ክድርቦ ይደሊ። እንታይ ትገብሪ?", x: "ሓደ ሰብኣይ ምሉእ ሳንጣ ናብቲ ናይ ዕንጨይቲ ኮንተይነር ክድርቦ ይደሊ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o1': { m: "ኣብቲ ሳንጣ እንታይ ከም ዘሎ ሕተቶ።", f: "ኣብቲ ሳንጣ እንታይ ከም ዘሎ ሕተትዮ።", x: "ኣብቲ ሳንጣ እንታይ ከም ዘሎ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o2': { m: "ግደፎ፡ ናቱ ጎሓፍ እዩ።", f: "ግደፍዮ፡ ናቱ ጎሓፍ እዩ።", x: "ግደፍዎ፡ ናቱ ጎሓፍ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.o3': { m: "ኣብ ክንዳኡ ባዕልኻ ደርብዮ።", f: "ኣብ ክንዳኡ ባዕልኺ ደርብይዮ።", x: "ኣብ ክንዳኡ ባዕልኹም ደርብይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.w': "ሓደ ጌጋ ነገር ምሉእ ኮንተይነር ከበላሹ ይኽእል። ሕያዋይ ሕቶ ነቲ ጎሓፍ ጽሩይ ይሕዞ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hazardous': "ኬሚካላዊ ጎሓፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.chemischafval': "ኬሚካላዊ ጎሓፍ (ሓደገኛ ጎሓፍ፡ ከም ቀለምን ዘይትን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spuitbus': "ስፕረይ (መንፍሒ ቆርቆሮ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.asbest': "ኣስቤስቶስ (ኣብ ኣረጊት ህንጻታት ዘሎ ሓደገኛ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lekken': "ምንጣብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gevarensymbool': "ምልክት ሓደጋ (ብዛዕባ ሓደጋ ዘጠንቅቕ ስእሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vat': "በርሚል", // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.1': { m: "ነቲ ቀለም ምስቲ ኬሚካላዊ ጎሓፍ ኣቐምጦ።", f: "ነቲ ቀለም ምስቲ ኬሚካላዊ ጎሓፍ ኣቐምጥዮ።", x: "ነቲ ቀለም ምስቲ ኬሚካላዊ ጎሓፍ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.2': { m: "እዚ ጥርሙዝ የንጠብጥብ ኣሎ። ብጓንቲ ኣልዕሎ።", f: "እዚ ጥርሙዝ የንጠብጥብ ኣሎ። ብጓንቲ ኣልዕልዮ።", x: "እዚ ጥርሙዝ የንጠብጥብ ኣሎ። ብጓንቲ ኣልዕልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hazardous.3': "ኣስቤስቶስ ብጽቡቕ ክዕሸግ ኣለዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.q': "ኣብዚ ጥርሙዝ እንታይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a': { m: "ኣይፈልጥን። ኣብ ጎኒ ኣቐምጦ።", f: "ኣይፈልጥን። ኣብ ጎኒ ኣቐምጥዮ።", x: "ኣይፈልጥን። ኣብ ጎኒ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous': { m: "ዘይፍለጥ ድዩ? ኣይትኽፈቶ፡ ሽታኡ ኣይትስሓብ", f: "ዘይፍለጥ ድዩ? ኣይትኽፈትዮ፡ ሽታኡ ኣይትስሓቢ", x: "ዘይፍለጥ ድዩ? ኣይትኽፈትዎ፡ ሽታኡ ኣይትስሓቡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.b': { m: "ኬሚካላዊ ጎሓፍ፡ ከም ቀለም፡ ዘይቲ፡ ፍርያት ጽሬት፡ ባተሪታትን ስፕረያትን፡ ከንድድ፡ ክመርዝ ወይ ክፍንጀር ይኽእል። ምልክታት ሓደጋ ድለይ። ጓንትን ናይ ድሕንነት መነጽርን ግበር። ፈጺምካ ኣብ ውሽጢ እንታይ ከም ዘሎ ንምሽታት ጥርሙዝ ኣይትኽፈት፡ ፈጺምካ ድማ ፍርያት ኣይትሕወስ። ዘንጠብጥብ ጥርሙዝ ቀጥ ኣቢልካ ሓዞ፡ ኣብ ትሪ ድማ ኣቐምጦ። ኣስቤስቶስ ብጽቡቕ ምስ ዝተዓሸገ ጥራይ እዩ ክኣቱ ዝኽእል: ፈጺምካ ኣይትስበሮ፡ ካብ ዕሽጉ ድማ ኣይተውጽኦ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኬሚካላዊ ጎሓፍ፡ ከም ቀለም፡ ዘይቲ፡ ፍርያት ጽሬት፡ ባተሪታትን ስፕረያትን፡ ከንድድ፡ ክመርዝ ወይ ክፍንጀር ይኽእል። ምልክታት ሓደጋ ድለዪ። ጓንትን ናይ ድሕንነት መነጽርን ግበሪ። ፈጺምኪ ኣብ ውሽጢ እንታይ ከም ዘሎ ንምሽታት ጥርሙዝ ኣይትኽፈቲ፡ ፈጺምኪ ድማ ፍርያት ኣይትሕወሲ። ዘንጠብጥብ ጥርሙዝ ቀጥ ኣቢልኪ ሓዝዮ፡ ኣብ ትሪ ድማ ኣቐምጥዮ። ኣስቤስቶስ ብጽቡቕ ምስ ዝተዓሸገ ጥራይ እዩ ክኣቱ ዝኽእል: ፈጺምኪ ኣይትስበርዮ፡ ካብ ዕሽጉ ድማ ኣይተውጽእዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኬሚካላዊ ጎሓፍ፡ ከም ቀለም፡ ዘይቲ፡ ፍርያት ጽሬት፡ ባተሪታትን ስፕረያትን፡ ከንድድ፡ ክመርዝ ወይ ክፍንጀር ይኽእል። ምልክታት ሓደጋ ድለዩ። ጓንትን ናይ ድሕንነት መነጽርን ግበሩ። ፈጺምኩም ኣብ ውሽጢ እንታይ ከም ዘሎ ንምሽታት ጥርሙዝ ኣይትኽፈቱ፡ ፈጺምኩም ድማ ፍርያት ኣይትሕወሱ። ዘንጠብጥብ ጥርሙዝ ቀጥ ኣቢልኩም ሓዝዎ፡ ኣብ ትሪ ድማ ኣቐምጥዎ። ኣስቤስቶስ ብጽቡቕ ምስ ዝተዓሸገ ጥራይ እዩ ክኣቱ ዝኽእል: ፈጺምኩም ኣይትስበርዎ፡ ካብ ዕሽጉ ድማ ኣይተውጽእዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.p': "ኣብዚ እንታይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.s': { m: "ሓንቲ ሰበይቲ ኤቲኬት ዘይብሉ ጥርሙዝ ተምጽእ። ብርቱዕ ሽታ ኣለዎ። እንታይ ትገብር?", f: "ሓንቲ ሰበይቲ ኤቲኬት ዘይብሉ ጥርሙዝ ተምጽእ። ብርቱዕ ሽታ ኣለዎ። እንታይ ትገብሪ?", x: "ሓንቲ ሰበይቲ ኤቲኬት ዘይብሉ ጥርሙዝ ተምጽእ። ብርቱዕ ሽታ ኣለዎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o1': { m: "ፈሊኻ ኣቐምጦ፡ ንተቖጻጻሪኻ ድማ ንገሮ።", f: "ፈሊኺ ኣቐምጥዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።", x: "ፈሊኹም ኣቐምጥዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o2': { m: "ክፈቶ፡ እንታይ ምዃኑ ንምፍላጥ ድማ ሽታኡ ስሓብ።", f: "ክፈትዮ፡ እንታይ ምዃኑ ንምፍላጥ ድማ ሽታኡ ስሓቢ።", x: "ክፈትዎ፡ እንታይ ምዃኑ ንምፍላጥ ድማ ሽታኡ ስሓቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.o3': { m: "ናብቲ በርሚል ቀለም ኣፍስሶ።", f: "ናብቲ በርሚል ቀለም ኣፍስስዮ።", x: "ናብቲ በርሚል ቀለም ኣፍስስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.w': { m: "ዘይፍለጡ ፍርያት ምስ ካልኦት ክዋሰቡ ይኽእሉ። ብውሕስና ናበይ ክኸይድ ከም ዝኽእል ተቖጻጻሪኻ ይፈልጥ።", f: "ዘይፍለጡ ፍርያት ምስ ካልኦት ክዋሰቡ ይኽእሉ። ብውሕስና ናበይ ክኸይድ ከም ዝኽእል ተቖጻጻሪኺ ይፈልጥ።", x: "ዘይፍለጡ ፍርያት ምስ ካልኦት ክዋሰቡ ይኽእሉ። ብውሕስና ናበይ ክኸይድ ከም ዝኽእል ተቖጻጻሪኹም ይፈልጥ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.baler': "መጸቕጢ ባላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.balenpers': "መጸቕጢ ባላ (ጎሓፍ ናብ ብሎኬታት ዝጸቕጥ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.baal': "ባላ (ዝተጸቕጠ ብሎኬት ወረቐት ወይ ፕላስቲክ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.persen': "ምጽቃጥ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastlopen': "ምጥባቕ (ገለ ነገር ተታሒዙ ደው ምባል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.binddraad': "ሽቦ ምእሳር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulopening': "መእተዊ ጎሓፍ (ጎሓፍ ዝኣትወሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.1': { m: "እቲ መጸቕጢ ተጣቢቑ። ነቲ ናይ ህጹጽ መጠጠዊ ጠውቖ።", f: "እቲ መጸቕጢ ተጣቢቑ። ነቲ ናይ ህጹጽ መጠጠዊ ጠውቕዮ።", x: "እቲ መጸቕጢ ተጣቢቑ። ነቲ ናይ ህጹጽ መጠጠዊ ጠውቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.2': { m: "ፈጺምካ ኢድካ ናብቲ መጸቕጢ ኣይተእቱ።", f: "ፈጺምኪ ኢድኪ ናብቲ መጸቕጢ ኣይተእትዊ።", x: "ፈጺምኩም ኢድኩም ናብቲ መጸቕጢ ኣይተእትዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.baler.3': { m: "ነቲ ባላ ብጽቡቕ ኣስሮ።", f: "ነቲ ባላ ብጽቡቕ ኣስርዮ።", x: "ነቲ ባላ ብጽቡቕ ኣስርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.q': "እቲ መጸቕጢ ይጣበቕ ኣሎ። ክርእዮ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a': "ኣይፋል። ቅድም እቲ ሓይሊ ይጠፍእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler': { m: "ፈጺምካ ናብ ውሽጢ መጸቕጢ ባላ ኢድ ኣይተእቱ", f: "ፈጺምኪ ናብ ውሽጢ መጸቕጢ ባላ ኢድ ኣይተእትዊ", x: "ፈጺምኩም ናብ ውሽጢ መጸቕጢ ባላ ኢድ ኣይተእትዉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.b': { m: "መጸቕጢ ባላ ብኣዝዩ ዓቢ ሓይሊ ይጸቕጥ። ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሂርካ ጥራይ ተጠቐመሉ። ፈጺምካ ኢድ፡ ቅልጽም ወይ እግሪ ናብቲ መእተዊ ጎሓፍ ኣይተእቱ፡ እቲ ማሽን ደው ዝበለ እንተ መሰለ እውን። ይጣበቕ ድዩ? ነቲ ናይ ህጹጽ መጠጠዊ ጠውቖ፡ ኣጥፍኦ፡ ዝኾነ ሰብ ከም ዘየበግሶ ድማ ኣረጋግጽ: ስጉምትታት ትካልካ ተኸተል። ድሕሪኡ ጥራይ ርአ። ፈጺምካ ናብ መጸቕጢ ባላ ወይ ኮንተይነር ኣይትደይብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መጸቕጢ ባላ ብኣዝዩ ዓቢ ሓይሊ ይጸቕጥ። ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሂርኪ ጥራይ ተጠቐምሉ። ፈጺምኪ ኢድ፡ ቅልጽም ወይ እግሪ ናብቲ መእተዊ ጎሓፍ ኣይተእትዊ፡ እቲ ማሽን ደው ዝበለ እንተ መሰለ እውን። ይጣበቕ ድዩ? ነቲ ናይ ህጹጽ መጠጠዊ ጠውቕዮ፡ ኣጥፍእዮ፡ ዝኾነ ሰብ ከም ዘየበግሶ ድማ ኣረጋግጺ: ስጉምትታት ትካልኪ ተኸተሊ። ድሕሪኡ ጥራይ ርኣዪ። ፈጺምኪ ናብ መጸቕጢ ባላ ወይ ኮንተይነር ኣይትደይቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መጸቕጢ ባላ ብኣዝዩ ዓቢ ሓይሊ ይጸቕጥ። ብኸመይ ከም ዝጥቀሙሉ ምስ ተማሂርኩም ጥራይ ተጠቐሙሉ። ፈጺምኩም ኢድ፡ ቅልጽም ወይ እግሪ ናብቲ መእተዊ ጎሓፍ ኣይተእትዉ፡ እቲ ማሽን ደው ዝበለ እንተ መሰለ እውን። ይጣበቕ ድዩ? ነቲ ናይ ህጹጽ መጠጠዊ ጠውቕዎ፡ ኣጥፍእዎ፡ ዝኾነ ሰብ ከም ዘየበግሶ ድማ ኣረጋግጹ: ስጉምትታት ትካልኩም ተኸተሉ። ድሕሪኡ ጥራይ ርኣዩ። ፈጺምኩም ናብ መጸቕጢ ባላ ወይ ኮንተይነር ኣይትደይቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.p': "እቲ መጸቕጢ ተጣቢቑ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.s': { m: "ሓደ ቁራጽ ካርቶን ኣብቲ መእተዊ ተጣቢቑ። እቲ ማሽን ደው ኢሉ ኣሎ። እንታይ ትገብር?", f: "ሓደ ቁራጽ ካርቶን ኣብቲ መእተዊ ተጣቢቑ። እቲ ማሽን ደው ኢሉ ኣሎ። እንታይ ትገብሪ?", x: "ሓደ ቁራጽ ካርቶን ኣብቲ መእተዊ ተጣቢቑ። እቲ ማሽን ደው ኢሉ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o1': { m: "ምሉእ ብምሉእ ኣጥፍኦ፡ ድሕሪኡ ኣውጽኦ።", f: "ምሉእ ብምሉእ ኣጥፍእዮ፡ ድሕሪኡ ኣውጽእዮ።", x: "ምሉእ ብምሉእ ኣጥፍእዎ፡ ድሕሪኡ ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o2': { m: "ብኢድካ ቀልጢፍካ ስሒብካ ኣውጽኦ።", f: "ብኢድኪ ቀልጢፍኪ ስሒብኪ ኣውጽእዮ።", x: "ብኢድኩም ቀልጢፍኩም ስሒብኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.o3': { m: "ብእግሪኻ ናብ ውሽጢ ድፍኦ።", f: "ብእግሪኺ ናብ ውሽጢ ድፍእዮ።", x: "ብእግሪኹም ናብ ውሽጢ ድፍእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.w': { m: "ደው ዝበለ ማሽን ከም ብሓድሽ ክጅምር ይኽእል። ሓይሊ እንተ ዘይጠፊኡ፡ ኢድካ ኣብ ሓደጋ እያ።", f: "ደው ዝበለ ማሽን ከም ብሓድሽ ክጅምር ይኽእል። ሓይሊ እንተ ዘይጠፊኡ፡ ኢድኪ ኣብ ሓደጋ እያ።", x: "ደው ዝበለ ማሽን ከም ብሓድሽ ክጅምር ይኽእል። ሓይሊ እንተ ዘይጠፊኡ፡ ኢድኩም ኣብ ሓደጋ እያ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.shovel': "ሾቨል ኣብቲ ግቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.shovel': "ሾቨል (ኣብ ቅድሚኡ ባልዲ ዘለዎ ዓቢ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwaailamp': "ዝበርቕ መብራህቲ (ኣብ ልዕሊ ማሽን ዘሎ ብርቱኳናዊ መብራህቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bunker': "መኽዘን ጎሓፍ (ንሓደ ዓይነት ጎሓፍ ዝኸውን ዓቢ ናይ ቤቶን ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.looppad': "መንገዲ እግሪ (ንሰባት ጥራይ ዝኸውን መንገዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toeteren': "ጡሩምባ ምንፋሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opscheppen': "ብባልዲ ምልዓል", // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.1': { m: "ኣብቲ መንገዲ እግሪ ጽናሕ።", f: "ኣብቲ መንገዲ እግሪ ጽንሒ።", x: "ኣብቲ መንገዲ እግሪ ጽንሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.2': { m: "እቲ ሾቨል ንድሕሪት ይኸይድ ኣሎ። ተጠንቀቕ!", f: "እቲ ሾቨል ንድሕሪት ይኸይድ ኣሎ። ተጠንቀቒ!", x: "እቲ ሾቨል ንድሕሪት ይኸይድ ኣሎ። ተጠንቀቑ!" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.shovel.3': "እቲ ዝበርቕ መብራህቲ በሪሁ ኣሎ። እቲ ማሽን ይንቀሳቐስ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.q': "ብጥቓ እቲ ሾቨል ክሓልፍ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a': { m: "እቲ መራሒ እንተ ርእዩካ ጥራይ።", f: "እቲ መራሒ እንተ ርእዩኪ ጥራይ።", x: "እቲ መራሒ እንተ ርእዩኩም ጥራይ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel': { m: "ካብ መንገዲ ሾቨል ርሒቕካ ጽናሕ", f: "ካብ መንገዲ ሾቨል ርሒቕኪ ጽንሒ", x: "ካብ መንገዲ ሾቨል ርሒቕኩም ጽንሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.b': { m: "ሾቨል ዓቢ እዩ፡ መራሒኡ ድማ ኣብ ዙርያኡ ቁሩብ ጥራይ ይርኢ፡ ብፍላይ ኣብ ድሕሪኡ። ስለዚ ኣብቲ መንገዲ እግሪ ጽናሕ፡ ዝበርቕ ክዳንካ ድማ ኽደን። ፈጺምካ ኣብ ድሕሪ ዝንቀሳቐስ ማሽን ኣይትኺድ። ክትሓልፍ ትደሊ ዲኻ? እቲ መራሒ ክሳዕ ዝርእየካን ምልክት ክሳዕ ዝህበካን ተጸበ። እቲ ዝበርቕ መብራህቲ፡ እዚ ማሽን ይሰርሕ ኣሎ ማለት እዩ። በጻሕቲ ካብኡ ኣዝዮም ርሒቖም ክጸንሑ ግበር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሾቨል ዓቢ እዩ፡ መራሒኡ ድማ ኣብ ዙርያኡ ቁሩብ ጥራይ ይርኢ፡ ብፍላይ ኣብ ድሕሪኡ። ስለዚ ኣብቲ መንገዲ እግሪ ጽንሒ፡ ዝበርቕ ክዳንኪ ድማ ኽደኒ። ፈጺምኪ ኣብ ድሕሪ ዝንቀሳቐስ ማሽን ኣይትኺዲ። ክትሓልፊ ትደልዪ ዲኺ? እቲ መራሒ ክሳዕ ዝርእየኪን ምልክት ክሳዕ ዝህበኪን ተጸበዪ። እቲ ዝበርቕ መብራህቲ፡ እዚ ማሽን ይሰርሕ ኣሎ ማለት እዩ። በጻሕቲ ካብኡ ኣዝዮም ርሒቖም ክጸንሑ ግበሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሾቨል ዓቢ እዩ፡ መራሒኡ ድማ ኣብ ዙርያኡ ቁሩብ ጥራይ ይርኢ፡ ብፍላይ ኣብ ድሕሪኡ። ስለዚ ኣብቲ መንገዲ እግሪ ጽንሑ፡ ዝበርቕ ክዳንኩም ድማ ኽደኑ። ፈጺምኩም ኣብ ድሕሪ ዝንቀሳቐስ ማሽን ኣይትኺዱ። ክትሓልፉ ትደልዩ ዲኹም? እቲ መራሒ ክሳዕ ዝርእየኩምን ምልክት ክሳዕ ዝህበኩምን ተጸበዩ። እቲ ዝበርቕ መብራህቲ፡ እዚ ማሽን ይሰርሕ ኣሎ ማለት እዩ። በጻሕቲ ካብኡ ኣዝዮም ርሒቖም ክጸንሑ ግበሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.p': "ርኢኹምኒ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.s': { m: "ብጥቓ ዝሰርሕ ዘሎ ሾቨል ክትሓልፍ ኣለካ። እቲ መራሒ ናብ ካልእ ወገን ይጥምት ኣሎ። እንታይ ትገብር?", f: "ብጥቓ ዝሰርሕ ዘሎ ሾቨል ክትሓልፊ ኣለኪ። እቲ መራሒ ናብ ካልእ ወገን ይጥምት ኣሎ። እንታይ ትገብሪ?", x: "ብጥቓ ዝሰርሕ ዘሎ ሾቨል ክትሓልፉ ኣለኩም። እቲ መራሒ ናብ ካልእ ወገን ይጥምት ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o1': { m: "ክሳዕ ዝርእየካ ተጸበ።", f: "ክሳዕ ዝርእየኪ ተጸበዪ።", x: "ክሳዕ ዝርእየኩም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o2': { m: "ቀልጢፍካ ሕለፍ።", f: "ቀልጢፍኪ ሕለፊ።", x: "ቀልጢፍኩም ሕለፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.o3': { m: "ብድሕሪ እቲ ማሽን ኪድ።", f: "ብድሕሪ እቲ ማሽን ኪዲ።", x: "ብድሕሪ እቲ ማሽን ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.w': { m: "ዘይረኣየካ መራሒ ምእንታኻ ደው ክብል ኣይክእልን።", f: "ዘይረኣየኪ መራሒ ምእንታኺ ደው ክብል ኣይክእልን።", x: "ዘይረኣየኩም መራሒ ምእንታኹም ደው ክብል ኣይክእልን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.toddlers': "እቶም ቈልዑ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.nappies': "ፓምፐርስ ምቕያር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.luier': "ፓምፐርስ፡ ዳይፐር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verschonen': "ምቕያር (ፓምፐርስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.commode': "ጠረጴዛ ምቕያር ፓምፐርስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.billendoekje': "ርሑስ ሶፍት ህጻን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.potje': "ፖቲ (ናይ ቈልዓ ሽቓቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zindelijk': "ሽቓቕ ዝለመደ (እቲ ቈልዓ ሽቓቕ ክጥቀም ይኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.1': "ንሰም ፓምፐርስ ክቕይረሉ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.2': { m: "ድሕሪ ፓምፐርስ ምቕያር ኣእዳውካ ተሓጸብ።", f: "ድሕሪ ፓምፐርስ ምቕያር ኣእዳውኪ ተሓጸቢ።", x: "ድሕሪ ፓምፐርስ ምቕያር ኣእዳውኩም ተሓጸቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.nappies.3': { m: "ፈጺምካ ቈልዓ ኣብ ጠረጴዛ ምቕያር በይኑ ኣይትግደፍ።", f: "ፈጺምኪ ቈልዓ ኣብ ጠረጴዛ ምቕያር በይኑ ኣይትግደፊ።", x: "ፈጺምኩም ቈልዓ ኣብ ጠረጴዛ ምቕያር በይኑ ኣይትግደፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.q': { m: "ንኖር መዓስ ቀይርካላ?", f: "ንኖር መዓስ ቀይርክላ?", x: "ንኖር መዓስ ቀይርኩምላ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a': "ሰዓት ዓሰርተ። ኣብቲ ኣፕ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies': "ሓንቲ ኢድ ኣብ ልዕሊ እቲ ቈልዓ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.b': { m: "ቈልዓ ኣብ ጠረጴዛ ምቕያር ቅድሚ ምቕማጥካ ኩሉ ኣዳሉ: ጽሩይ ፓምፐርስ፡ ርሑስ ሶፍትን ክዳንን። ድሕሪኡ ኩሉ ግዜ ሓንቲ ኢድካ ኣብ ልዕሊ እቲ ቈልዓ ሓዛ። ፈጺምካ ኣይትኺድ፡ ንሓንቲ ካልኢት እውን። ድሕሪ ነፍሲ ወከፍ ምቕያር ኣእዳውካ ተሓጸብ፡ ነቲ ጠረጴዛ ድማ ኣጽርዮ። ወለዲ ምእንቲ ክፈልጡ፡ መዓስ ፓምፐርስ ከም ዝቐየርካ ጽሓፍ። ዝቐልሐ ቆርበት ወይ ቑስሊ ትርኢ ዲኻ? ጽሓፎ፡ ንሓደ ብጻይ ስራሕ ድማ ንገር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ቈልዓ ኣብ ጠረጴዛ ምቕያር ቅድሚ ምቕማጥኪ ኩሉ ኣዳልዊ: ጽሩይ ፓምፐርስ፡ ርሑስ ሶፍትን ክዳንን። ድሕሪኡ ኩሉ ግዜ ሓንቲ ኢድኪ ኣብ ልዕሊ እቲ ቈልዓ ሓዝያ። ፈጺምኪ ኣይትኺዲ፡ ንሓንቲ ካልኢት እውን። ድሕሪ ነፍሲ ወከፍ ምቕያር ኣእዳውኪ ተሓጸቢ፡ ነቲ ጠረጴዛ ድማ ኣጽርይዮ። ወለዲ ምእንቲ ክፈልጡ፡ መዓስ ፓምፐርስ ከም ዝቐየርኪ ጽሓፊ። ዝቐልሐ ቆርበት ወይ ቑስሊ ትርእዪ ዲኺ? ጽሓፍዮ፡ ንሓደ ብጻይ ስራሕ ድማ ንገሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ቈልዓ ኣብ ጠረጴዛ ምቕያር ቅድሚ ምቕማጥኩም ኩሉ ኣዳልዉ: ጽሩይ ፓምፐርስ፡ ርሑስ ሶፍትን ክዳንን። ድሕሪኡ ኩሉ ግዜ ሓንቲ ኢድኩም ኣብ ልዕሊ እቲ ቈልዓ ሓዝዋ። ፈጺምኩም ኣይትኺዱ፡ ንሓንቲ ካልኢት እውን። ድሕሪ ነፍሲ ወከፍ ምቕያር ኣእዳውኩም ተሓጸቡ፡ ነቲ ጠረጴዛ ድማ ኣጽርይዎ። ወለዲ ምእንቲ ክፈልጡ፡ መዓስ ፓምፐርስ ከም ዝቐየርኩም ጽሓፉ። ዝቐልሐ ቆርበት ወይ ቑስሊ ትርእዩ ዲኹም? ጽሓፍዎ፡ ንሓደ ብጻይ ስራሕ ድማ ንገሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.nappies.p': "ሕጂ ፓምፐርስ እቕይረሉ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.s': { m: "ንሓደ ህጻን ፓምፐርስ ትቕይረሉ ኣለኻ። ርሑስ ሶፍት ረሲዕካ፡ ኣብ ካልእ ጫፍ ናይቲ ክፍሊ እዩ ዘሎ። እንታይ ትገብር?", f: "ንሓደ ህጻን ፓምፐርስ ትቕይርሉ ኣለኺ። ርሑስ ሶፍት ረሲዕኪ፡ ኣብ ካልእ ጫፍ ናይቲ ክፍሊ እዩ ዘሎ። እንታይ ትገብሪ?", x: "ንሓደ ህጻን ፓምፐርስ ትቕይሩሉ ኣለኹም። ርሑስ ሶፍት ረሲዕኩም፡ ኣብ ካልእ ጫፍ ናይቲ ክፍሊ እዩ ዘሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o1': { m: "ነቲ ህጻን ምሳኻ ውሰዶ።", f: "ነቲ ህጻን ምሳኺ ውሰድዮ።", x: "ነቲ ህጻን ምሳኹም ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o2': { m: "ቀልጢፍካ ኣምጽኦ፡ ቀረባ እዩ።", f: "ቀልጢፍኪ ኣምጽእዮ፡ ቀረባ እዩ።", x: "ቀልጢፍኩም ኣምጽእዎ፡ ቀረባ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.o3': { m: "ነቲ ህጻን ግደፎ፡ ብዓውታ ድማ ጸውዕ።", f: "ነቲ ህጻን ግደፍዮ፡ ብዓውታ ድማ ጸውዒ።", x: "ነቲ ህጻን ግደፍዎ፡ ብዓውታ ድማ ጸውዑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.w': { m: "ህጻን ኣብ ሓንቲ ካልኢት ካብ ጠረጴዛ ምቕያር ተንከባሊሉ ክወድቕ ይኽእል። ፈጺምካ ቈልዓ ኣብኡ በይኑ ኣይትግደፍ።", f: "ህጻን ኣብ ሓንቲ ካልኢት ካብ ጠረጴዛ ምቕያር ተንከባሊሉ ክወድቕ ይኽእል። ፈጺምኪ ቈልዓ ኣብኡ በይኑ ኣይትግደፊ።", x: "ህጻን ኣብ ሓንቲ ካልኢት ካብ ጠረጴዛ ምቕያር ተንከባሊሉ ክወድቕ ይኽእል። ፈጺምኩም ቈልዓ ኣብኡ በይኑ ኣይትግደፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.mealtime': "ምብላዕን ምስታይን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fles': "ጥርሙዝ (ንህጻን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slabbetje': "ቢብ (ኣብ እዋን መግቢ ኣብ ክሳድ ዝእሰር ጨርቂ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beker': "ኩባያ (መሓዝ ዘለዋ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kinderstoel': "መንበር ቈልዓ (ነዊሕ መንበር ንቈልዓ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fruithap': "ዝተጸፍጸፈ ፍረታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boertje': "ግሳስ (ድሕሪ ምስታይ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.1': { m: "ቅድሚ መግቢ ኣእዳውካ ተሓጸብ።", f: "ቅድሚ መግቢ ኣእዳውኪ ተሓጸቢ።", x: "ቅድሚ መግቢ ኣእዳውኩም ተሓጸቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.2': { m: "ንሊዛ ሰዓት ዓሰርተው ክልተ ጥርሙዛ ሃባ።", f: "ንሊዛ ሰዓት ዓሰርተው ክልተ ጥርሙዛ ሃብያ።", x: "ንሊዛ ሰዓት ዓሰርተው ክልተ ጥርሙዛ ሃብዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mealtime.3': "ኩሉ ሰብ ኣብ ጠረጴዛ ይቕመጥ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.q': "ዳን ሓንቲ ብሽኮቲ ክበልዕ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a': { m: "ኣይፋል፡ ኣለርጂ ኣለዎ። ኣብቲ ዝርዝር ርአ።", f: "ኣይፋል፡ ኣለርጂ ኣለዎ። ኣብቲ ዝርዝር ርኣዪ።", x: "ኣይፋል፡ ኣለርጂ ኣለዎ። ኣብቲ ዝርዝር ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime': { m: "ቅድሚ መግቢ ምሃብካ ነቲ ዝርዝር ፈትሾ", f: "ቅድሚ መግቢ ምሃብኪ ነቲ ዝርዝር ፈትሽዮ", x: "ቅድሚ መግቢ ምሃብኩም ነቲ ዝርዝር ፈትሽዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.b': { m: "ንቈልዓ መግቢ ወይ መስተ ቅድሚ ምሃብካ፡ ነቲ ዝርዝር ፈትሾ: ገለ ቈልዑ ኣለርጂ ኣለዎም፡ ካልኦት ድማ ብምኽንያት ጥዕንኦም ወይ እምነቶም ገለ መግቢ ክበልዑ ኣይፍቀደሎምን። ቅድሚ መግቢ ኣእዳውካ ተሓጸብ፡ ኣእዳው ቈልዑ ድማ ኣሕጽብ። ቈልዑ ክበልዑን ክሰትዩን ከለዉ ክቕመጡ ግበር፡ ክኸዱ ወይ ክጓየዩ ፈጺሞም የብሎምን። ንንኣሽቱ ቈልዑ መግቢ ንኣሽቱ ገይርካ ቑረጾ፡ ከም ወይኒ ብቑራጽ። ፈጺምካ ንቈልዓ ካብ ገዛ ካልእ ቈልዓ ዝመጸ ነገር ኣይትሃብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንቈልዓ መግቢ ወይ መስተ ቅድሚ ምሃብኪ፡ ነቲ ዝርዝር ፈትሽዮ: ገለ ቈልዑ ኣለርጂ ኣለዎም፡ ካልኦት ድማ ብምኽንያት ጥዕንኦም ወይ እምነቶም ገለ መግቢ ክበልዑ ኣይፍቀደሎምን። ቅድሚ መግቢ ኣእዳውኪ ተሓጸቢ፡ ኣእዳው ቈልዑ ድማ ኣሕጽቢ። ቈልዑ ክበልዑን ክሰትዩን ከለዉ ክቕመጡ ግበሪ፡ ክኸዱ ወይ ክጓየዩ ፈጺሞም የብሎምን። ንንኣሽቱ ቈልዑ መግቢ ንኣሽቱ ገይርኪ ቑረጽዮ፡ ከም ወይኒ ብቑራጽ። ፈጺምኪ ንቈልዓ ካብ ገዛ ካልእ ቈልዓ ዝመጸ ነገር ኣይትሃቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንቈልዓ መግቢ ወይ መስተ ቅድሚ ምሃብኩም፡ ነቲ ዝርዝር ፈትሽዎ: ገለ ቈልዑ ኣለርጂ ኣለዎም፡ ካልኦት ድማ ብምኽንያት ጥዕንኦም ወይ እምነቶም ገለ መግቢ ክበልዑ ኣይፍቀደሎምን። ቅድሚ መግቢ ኣእዳውኩም ተሓጸቡ፡ ኣእዳው ቈልዑ ድማ ኣሕጽቡ። ቈልዑ ክበልዑን ክሰትዩን ከለዉ ክቕመጡ ግበሩ፡ ክኸዱ ወይ ክጓየዩ ፈጺሞም የብሎምን። ንንኣሽቱ ቈልዑ መግቢ ንኣሽቱ ገይርኩም ቑረጽዎ፡ ከም ወይኒ ብቑራጽ። ፈጺምኩም ንቈልዓ ካብ ገዛ ካልእ ቈልዓ ዝመጸ ነገር ኣይትሃቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.p': "እዚ ክበልዕ ይኽእል ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.s': { m: "ሓደ ቈልዓ ብሽኮቲ ደልዩ ይበኪ። ነዚ ቈልዓ ብጽቡቕ ኣይትፈልጦን። እንታይ ትገብር?", f: "ሓደ ቈልዓ ብሽኮቲ ደልዩ ይበኪ። ነዚ ቈልዓ ብጽቡቕ ኣይትፈልጥዮን። እንታይ ትገብሪ?", x: "ሓደ ቈልዓ ብሽኮቲ ደልዩ ይበኪ። ነዚ ቈልዓ ብጽቡቕ ኣይትፈልጥዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o1': { m: "ቅድም ነቲ ዝርዝር ፈትሾ።", f: "ቅድም ነቲ ዝርዝር ፈትሽዮ።", x: "ቅድም ነቲ ዝርዝር ፈትሽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o2': { m: "ሃቦ፡ ብሽኮቲ ጥራይ እዩ።", f: "ሃብዮ፡ ብሽኮቲ ጥራይ እዩ።", x: "ሃብዎ፡ ብሽኮቲ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.o3': { m: "ፍርቂ ብሽኮቲ ሃቦ።", f: "ፍርቂ ብሽኮቲ ሃብዮ።", x: "ፍርቂ ብሽኮቲ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.w': "ብሽኮቲ ለውዝ፡ ጸባ ወይ እንቋቑሖ ክሕዝ ይኽእል። ኣለርጂ ንዘለዎ ቈልዓ፡ እዚ ኣዝዩ ሓደገኛ ክኸውን ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.naptime': "ምድቃስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedje': "ዓራት ህጻን (ንእሽቶ ዓራት ንህጻን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapkamer': "መደቀሲ ክፍሊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.knuffel': "ልስሉስ መጻወቲ (ዝሕቀፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speen': "ፓሲፋየር (ህጻን ዝጠብዎ ጎማ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.babyfoon': "ሬድዮ ህጻን (ድምጺ ህጻን ዘሰምዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slaapzak': "ሳንጣ ድቃስ ህጻን", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.1': { m: "ነቲ ህጻን ብሕቖኡ ኣደቅሶ።", f: "ነቲ ህጻን ብሕቖኡ ኣደቅስዮ።", x: "ነቲ ህጻን ብሕቖኡ ኣደቅስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.2': "ብዙሕ ግዜ ናብቲ መደቀሲ ክፍሊ እጥምት።", // nieuw, nalezen // nagelezen AI 28 nov
    's.naptime.3': { m: "እንሆ ልስሉስ መጻወቲኻ። ብሰላም ደቅስ።", f: "እንሆ ልስሉስ መጻወቲኺ። ብሰላም ደቅሲ።", x: "እንሆ ልስሉስ መጻወቲኹም። ብሰላም ደቅሱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.q': "ሚላ ደቂሳ ድያ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a': "እወ፡ ካብ ሰዓት ሓደ። ቀልጢፈ ከም ብሓድሽ ክርእያ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime': "ህጻናት ብሕቖኦም ይድቅሱ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.b': { m: "ህጻን ብሕቖኡ፡ ኣብ ሳንጣ ድቃስ፡ ኣብ ናቱ ዓራት እዩ ብዝበለጸ ብውሕስና ዝድቅስ። ኣብቲ ዓራት ትራስ፡ ፍቱሕ ኮቦርታ ወይ ዓበይቲ መጻወቲታት ኣይግበርን። ነቲ ክፍሊ ዝሑልን ንጹህ ኣየር ዘለዎን ሓዞ። ዝድቅሱ ቈልዑ ብዙሕ ግዜ ፈትሾም: ርአ፡ ስማዕ፡ ሬድዮ ህጻን ክሰርሕ ከሎ እውን። ሓደ ወላዲ ንህጻኑ ብካልእ ኣገባብ ከተደቅሶ ይሓተካ ድዩ? ቅድም ንተቖጻጻሪኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ህጻን ብሕቖኡ፡ ኣብ ሳንጣ ድቃስ፡ ኣብ ናቱ ዓራት እዩ ብዝበለጸ ብውሕስና ዝድቅስ። ኣብቲ ዓራት ትራስ፡ ፍቱሕ ኮቦርታ ወይ ዓበይቲ መጻወቲታት ኣይግበርን። ነቲ ክፍሊ ዝሑልን ንጹህ ኣየር ዘለዎን ሓዝዮ። ዝድቅሱ ቈልዑ ብዙሕ ግዜ ፈትሽዮም: ርኣዪ፡ ስምዒ፡ ሬድዮ ህጻን ክሰርሕ ከሎ እውን። ሓደ ወላዲ ንህጻኑ ብካልእ ኣገባብ ከተደቅስዮ ይሓተኪ ድዩ? ቅድም ንተቖጻጻሪኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ህጻን ብሕቖኡ፡ ኣብ ሳንጣ ድቃስ፡ ኣብ ናቱ ዓራት እዩ ብዝበለጸ ብውሕስና ዝድቅስ። ኣብቲ ዓራት ትራስ፡ ፍቱሕ ኮቦርታ ወይ ዓበይቲ መጻወቲታት ኣይግበርን። ነቲ ክፍሊ ዝሑልን ንጹህ ኣየር ዘለዎን ሓዝዎ። ዝድቅሱ ቈልዑ ብዙሕ ግዜ ፈትሽዎም: ርኣዩ፡ ስምዑ፡ ሬድዮ ህጻን ክሰርሕ ከሎ እውን። ሓደ ወላዲ ንህጻኑ ብካልእ ኣገባብ ከተደቅስዎ ይሓተኩም ድዩ? ቅድም ንተቖጻጻሪኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.p': "ናብቲ መደቀሲ ክፍሊ ክጥምት እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.s': { m: "ሓደ ህጻን ኣብ ዓራቱ ብኸብዱ ደቂሱ። እንታይ ትገብር?", f: "ሓደ ህጻን ኣብ ዓራቱ ብኸብዱ ደቂሱ። እንታይ ትገብሪ?", x: "ሓደ ህጻን ኣብ ዓራቱ ብኸብዱ ደቂሱ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o1': { m: "ብልስሉስ ብሕቖኡ ገልብጦ።", f: "ብልስሉስ ብሕቖኡ ገልብጥዮ።", x: "ብልስሉስ ብሕቖኡ ገልብጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o2': { m: "ይደቅስ ግደፎ፡ ሕጂ ደቂሱ እዩ።", f: "ይደቅስ ግደፍዮ፡ ሕጂ ደቂሱ እዩ።", x: "ይደቅስ ግደፍዎ፡ ሕጂ ደቂሱ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.o3': { m: "ኣብ ጎኑ ትራስ ኣቐምጥ።", f: "ኣብ ጎኑ ትራስ ኣቐምጢ።", x: "ኣብ ጎኑ ትራስ ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.w': "ብሕቖኡ፡ ህጻን ብነጻ ከተንፍስ ይኽእል። ትራስ ገጹ ክሸፍን ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.playtime': "ምጽዋት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spelen': "ምጽዋት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.speelgoed': "መጻወቲታት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zandbak': "መጻወቲ ሑጻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijbaan': "መንሸራተቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.puzzel': "ፑዝል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buitenspelen': "ኣብ ደገ ምጽዋት", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.1': "ናብ ደገ ክንጻወት ኢና። ጃኬታት ግበሩ!", // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.2': { m: "ነቲ መጻወቲታት ኣኪብካ ኣቐምጦ።", f: "ነቲ መጻወቲታት ኣኪብኪ ኣቐምጥዮ።", x: "ነቲ መጻወቲታት ኣኪብኩም ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.playtime.3': "ኣብቲ መንሸራተቲ ሓደ ሓደ ቈልዓ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.q': "ብፑዝል ክጻወት ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a': { m: "እወ፡ ኣብ ጠረጴዛ። ድሕሪኡ ኣኪብካ ትቕምጦ።", f: "እወ፡ ኣብ ጠረጴዛ። ድሕሪኡ ኣኪብኪ ትቕምጥዮ።", x: "እወ፡ ኣብ ጠረጴዛ። ድሕሪኡ ኣኪብኩም ትቕምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime': { m: "ውሑስ ጸወታ: ርአ፡ ቑጸር፡ ፈትሽ", f: "ውሑስ ጸወታ: ርኣዪ፡ ቑጸሪ፡ ፈትሺ", x: "ውሑስ ጸወታ: ርኣዩ፡ ቑጸሩ፡ ፈትሹ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.b': { m: "ቈልዑ ብምጽዋት ይማሃሩ፡ ስለዚ ነገራት ክፍትኑ ግደፎም። ግን ኩሉ ግዜ ኣብ ቅድሚ ዓይኒኻ ሓዞም፡ ኣብ ደገ እውን። ናብ ደገ ክትወጽእን ናብ ውሽጢ ክትምለስን ከለኻ ነቶም ቈልዑ ቑጸሮም። ቅድም ነቲ ቦታ ጸወታ ፈትሾ: እቲ ካንቸሎ ዕጹው ድዩ፡ ብርጭቆ ወይ ጎሓፍ ኣሎ ድዩ? ንኣሽቱ ክፍልታት ዘለዎም መጻወቲታት ንትሕቲ ሰለስተ ዓመት ዝዕድሚኦም ቈልዑ ኣይኮኑን: ክሕነቑሎም ይኽእሉ። ናብ ኣፍ ዝኣትዉ መጻወቲታት ብዙሕ ግዜ ኣጽርዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ቈልዑ ብምጽዋት ይማሃሩ፡ ስለዚ ነገራት ክፍትኑ ግደፍዮም። ግን ኩሉ ግዜ ኣብ ቅድሚ ዓይኒኺ ሓዝዮም፡ ኣብ ደገ እውን። ናብ ደገ ክትወጽኢን ናብ ውሽጢ ክትምለሲን ከለኺ ነቶም ቈልዑ ቑጸርዮም። ቅድም ነቲ ቦታ ጸወታ ፈትሽዮ: እቲ ካንቸሎ ዕጹው ድዩ፡ ብርጭቆ ወይ ጎሓፍ ኣሎ ድዩ? ንኣሽቱ ክፍልታት ዘለዎም መጻወቲታት ንትሕቲ ሰለስተ ዓመት ዝዕድሚኦም ቈልዑ ኣይኮኑን: ክሕነቑሎም ይኽእሉ። ናብ ኣፍ ዝኣትዉ መጻወቲታት ብዙሕ ግዜ ኣጽርይዮም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ቈልዑ ብምጽዋት ይማሃሩ፡ ስለዚ ነገራት ክፍትኑ ግደፍዎም። ግን ኩሉ ግዜ ኣብ ቅድሚ ዓይኒኹም ሓዝዎም፡ ኣብ ደገ እውን። ናብ ደገ ክትወጽኡን ናብ ውሽጢ ክትምለሱን ከለኹም ነቶም ቈልዑ ቑጸርዎም። ቅድም ነቲ ቦታ ጸወታ ፈትሽዎ: እቲ ካንቸሎ ዕጹው ድዩ፡ ብርጭቆ ወይ ጎሓፍ ኣሎ ድዩ? ንኣሽቱ ክፍልታት ዘለዎም መጻወቲታት ንትሕቲ ሰለስተ ዓመት ዝዕድሚኦም ቈልዑ ኣይኮኑን: ክሕነቑሎም ይኽእሉ። ናብ ኣፍ ዝኣትዉ መጻወቲታት ብዙሕ ግዜ ኣጽርይዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.p': "ኩሉ ሰብ ኣብዚ ኣሎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.s': { m: "ካብ ቦታ ጸወታ ናብ ውሽጢ ትምለስ። ሓደ ቈልዓ ጎዲሉ ትቖጽር። እንታይ ትገብር?", f: "ካብ ቦታ ጸወታ ናብ ውሽጢ ትምለሲ። ሓደ ቈልዓ ጎዲሉ ትቖጽሪ። እንታይ ትገብሪ?", x: "ካብ ቦታ ጸወታ ናብ ውሽጢ ትምለሱ። ሓደ ቈልዓ ጎዲሉ ትቖጽሩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o1': { m: "ንሓደ ብጻይ ስራሕ ንገሮ፡ ብቕጽበት ድማ ድለዮ።", f: "ንሓደ ብጻይ ስራሕ ንገርዮ፡ ብቕጽበት ድማ ድለይዮ።", x: "ንሓደ ብጻይ ስራሕ ንገርዎ፡ ብቕጽበት ድማ ድለይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o2': { m: "ተጸበ፡ እቲ ቈልዓ ባዕሉ ክኣቱ እዩ።", f: "ተጸበዪ፡ እቲ ቈልዓ ባዕሉ ክኣቱ እዩ።", x: "ተጸበዩ፡ እቲ ቈልዓ ባዕሉ ክኣቱ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.o3': { m: "ጽባሕ ከም ብሓድሽ ቑጸር።", f: "ጽባሕ ከም ብሓድሽ ቑጸሪ።", x: "ጽባሕ ከም ብሓድሽ ቑጸሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.w': "ኣብ ደገ በይኑ ዘሎ ቈልዓ ክጉዳእ ወይ ክኸይድ ይኽእል። ነፍሲ ወከፍ ደቒቕ ኣገዳሲ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.daycare': "ወለዲ፡ ድሕንነትን እቲ ጉጅለን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pickup': "ምምጻእን ምውሳድን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouder': "ወላዲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afscheid': "ምፍናው (ደሓን ኩን ምባል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oppas': "ሓላዪት ቈልዑ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftje': "ደብተር (ንመዘኻኸሪ ኣብ መንጎ ወለድን ሰራሕተኛታትን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderapp': "ኣፕ ወለዲ (ንስእልታትን መልእኽትታትን ናብ ወለዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wennen': "ምልማድ (ሓድሽ ቦታ ምልማድ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.1': "ኣብቲ ደብተር ክጽሕፎ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.2': { m: "ንኣቦኻ ቻው በሎ።", f: "ንኣቦኺ ቻው በልዮ።", x: "ንኣቦኹም ቻው በልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.pickup.3': "ኣብቲ ኣፕ ወለዲ ስእሊ ኤእቱ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.q': "ሎሚ ንሰም መን እዩ ዝወስዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a': "ዓባዩ። ኣብቲ ዝርዝር ኣላ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup': "ኣብቲ ዝርዝር ንዘለዉ ሰባት ጥራይ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.b': { m: "ንቈልዓ ንወላዲ ጥራይ ሃቦ፡ ወይ ወለዲ ብዛዕባኡ ዝነገሩኻ ሰብ። ነቲ ሰብ ኣይትፈልጦን ዲኻ? መን ምዃኑ ሕተት፡ መንነት ወረቐቱ ርአ፡ ምስ ወለዲ ወይ ተቖጻጻሪኻ ድማ ኣረጋግጽ። ኣብ ግዜ ምውሳድ፡ እታ መዓልቲ ብኸመይ ከም ዝሓለፈት ንወላዲ ንገሮ: ምብላዕ፡ ምድቃስ፡ ምጽዋትን ዝኾነ ፍሉይ ነገርን። ኣገደስቲ ነገራት ኣብ ደብተር ወይ ኣብቲ ኣፕ ጽሓፍ። ብዛዕባ ካልኦት ቈልዑ ምስ ወለዶም ጥራይ ተዛረብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንቈልዓ ንወላዲ ጥራይ ሃብዮ፡ ወይ ወለዲ ብዛዕባኡ ዝነገሩኺ ሰብ። ነቲ ሰብ ኣይትፈልጥዮን ዲኺ? መን ምዃኑ ሕተቲ፡ መንነት ወረቐቱ ርኣዪ፡ ምስ ወለዲ ወይ ተቖጻጻሪኺ ድማ ኣረጋግጺ። ኣብ ግዜ ምውሳድ፡ እታ መዓልቲ ብኸመይ ከም ዝሓለፈት ንወላዲ ንገርዮ: ምብላዕ፡ ምድቃስ፡ ምጽዋትን ዝኾነ ፍሉይ ነገርን። ኣገደስቲ ነገራት ኣብ ደብተር ወይ ኣብቲ ኣፕ ጽሓፊ። ብዛዕባ ካልኦት ቈልዑ ምስ ወለዶም ጥራይ ተዛረቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንቈልዓ ንወላዲ ጥራይ ሃብዎ፡ ወይ ወለዲ ብዛዕባኡ ዝነገሩኹም ሰብ። ነቲ ሰብ ኣይትፈልጥዎን ዲኹም? መን ምዃኑ ሕተቱ፡ መንነት ወረቐቱ ርኣዩ፡ ምስ ወለዲ ወይ ተቖጻጻሪኹም ድማ ኣረጋግጹ። ኣብ ግዜ ምውሳድ፡ እታ መዓልቲ ብኸመይ ከም ዝሓለፈት ንወላዲ ንገርዎ: ምብላዕ፡ ምድቃስ፡ ምጽዋትን ዝኾነ ፍሉይ ነገርን። ኣገደስቲ ነገራት ኣብ ደብተር ወይ ኣብቲ ኣፕ ጽሓፉ። ብዛዕባ ካልኦት ቈልዑ ምስ ወለዶም ጥራይ ተዛረቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.p': "መን ኢኹም? ንወለዲ ክድውለሎም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.s': { m: "ዘይትፈልጦ ሰብኣይ ንሰም ክወስድ ይመጽእ። ኣብቲ ዝርዝር የለን። እንታይ ትገብር?", f: "ዘይትፈልጥዮ ሰብኣይ ንሰም ክወስድ ይመጽእ። ኣብቲ ዝርዝር የለን። እንታይ ትገብሪ?", x: "ዘይትፈልጥዎ ሰብኣይ ንሰም ክወስድ ይመጽእ። ኣብቲ ዝርዝር የለን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o1': { m: "ሰም ቅድሚ ምኻዱ ናብ ወለዲ ደውል።", f: "ሰም ቅድሚ ምኻዱ ናብ ወለዲ ደውሊ።", x: "ሰም ቅድሚ ምኻዱ ናብ ወለዲ ደውሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o2': { m: "ንሰም ኣፋንዎ፡ እቲ ሰብኣይ ስሙ ይፈልጥ እዩ።", f: "ንሰም ኣፋንውዮ፡ እቲ ሰብኣይ ስሙ ይፈልጥ እዩ።", x: "ንሰም ኣፋንውዎ፡ እቲ ሰብኣይ ስሙ ይፈልጥ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.o3': { m: "ንሰም ይፈልጦ እንተ ኾይኑ ሕተቶ።", f: "ንሰም ይፈልጦ እንተ ኾይኑ ሕተትዮ።", x: "ንሰም ይፈልጦ እንተ ኾይኑ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.w': { m: "ወለዲ ዝሓረይዎ ሰብ ክሳዕ ዝቕበሎ፡ ንቈልዓ ሓላፍነት ዘለካ ንስኻ ኢኻ።", f: "ወለዲ ዝሓረይዎ ሰብ ክሳዕ ዝቕበሎ፡ ንቈልዓ ሓላፍነት ዘለኪ ንስኺ ኢኺ።", x: "ወለዲ ዝሓረይዎ ሰብ ክሳዕ ዝቕበሎ፡ ንቈልዓ ሓላፍነት ዘለኩም ንስኹም ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.childsafety': "ድሕንነት ኣብ ጉጅለ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.traphekje': "ካንቸሎ መደያይቦ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerstrip': "መከላኸሊ ኣጻብዕ (ኣብ ማዕጾ፡ ኣጻብዕ ከይቕጸዋ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verslikken': "ምሕናቕ (መግቢ ናብ ጌጋ መንገዲ ይኸይድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bult': "ሕበጥ (ኣብ ርእሲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schaafwond': "ምልጋጽ ቆርበት (ቆርበት ተሓሪጡ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toezicht': "ምክትታል (ንቈልዑ ምክትታል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.1': { m: "ኩሉ ግዜ ነቲ ካንቸሎ መደያይቦ ዕጸዎ።", f: "ኩሉ ግዜ ነቲ ካንቸሎ መደያይቦ ዕጸውዮ።", x: "ኩሉ ግዜ ነቲ ካንቸሎ መደያይቦ ዕጸውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.2': "ኣብቲ ሕበጥ ቁሩብ በረድ ኤቐምጥ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.childsafety.3': "ሰም ይሕነቕ ኣሎ። እሕግዞ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.q': "ቦ ወዲቓ ድያ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a': "እወ፡ ሕበጥ ኣለዋ። ንኣዲኣ እድውለላ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety': { m: "ብዓይኒ ቈልዓ ኣብ ዙርያኻ ጠምት", f: "ብዓይኒ ቈልዓ ኣብ ዙርያኺ ጠምቲ", x: "ብዓይኒ ቈልዓ ኣብ ዙርያኹም ጠምቱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.b': { m: "ንኣሽቱ ቈልዑ ኩሉ ናብ ኣፎም የእትዉ፡ ኣብ ኩሉ ድማ ይድይቡ። ስለዚ ነቲ ካንቸሎ መደያይቦ ዕጹው ሓዞ፡ ፍርያት ጽሬትን መድሃኒትን ቈልዑ ኣብ ዘይበጽሕዎ ኣቐምጦም፡ ውዑይ መስተ ድማ ካብ ቈልዑ ኣርሒቕካ ሓዞ። ነቲ ክፍሊ መዓልቲ መዓልቲ ፈትሾ። ሓደ ቈልዓ ይጉዳእ ድዩ? ቀዳማይ ረድኤት ሃብ፡ ነቲ ቈልዓ ኣጸናንዕ፡ ንወለዲ ንገሮም፡ ጽሓፎ ድማ። ከቢድ ድዩ? ናብ 112 ደውል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንኣሽቱ ቈልዑ ኩሉ ናብ ኣፎም የእትዉ፡ ኣብ ኩሉ ድማ ይድይቡ። ስለዚ ነቲ ካንቸሎ መደያይቦ ዕጹው ሓዝዮ፡ ፍርያት ጽሬትን መድሃኒትን ቈልዑ ኣብ ዘይበጽሕዎ ኣቐምጥዮም፡ ውዑይ መስተ ድማ ካብ ቈልዑ ኣርሒቕኪ ሓዝዮ። ነቲ ክፍሊ መዓልቲ መዓልቲ ፈትሽዮ። ሓደ ቈልዓ ይጉዳእ ድዩ? ቀዳማይ ረድኤት ሃቢ፡ ነቲ ቈልዓ ኣጸናንዒ፡ ንወለዲ ንገርዮም፡ ጽሓፍዮ ድማ። ከቢድ ድዩ? ናብ 112 ደውሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንኣሽቱ ቈልዑ ኩሉ ናብ ኣፎም የእትዉ፡ ኣብ ኩሉ ድማ ይድይቡ። ስለዚ ነቲ ካንቸሎ መደያይቦ ዕጹው ሓዝዎ፡ ፍርያት ጽሬትን መድሃኒትን ቈልዑ ኣብ ዘይበጽሕዎ ኣቐምጥዎም፡ ውዑይ መስተ ድማ ካብ ቈልዑ ኣርሒቕኩም ሓዝዎ። ነቲ ክፍሊ መዓልቲ መዓልቲ ፈትሽዎ። ሓደ ቈልዓ ይጉዳእ ድዩ? ቀዳማይ ረድኤት ሃቡ፡ ነቲ ቈልዓ ኣጸናንዑ፡ ንወለዲ ንገርዎም፡ ጽሓፍዎ ድማ። ከቢድ ድዩ? ናብ 112 ደውሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.p': "እቲ ካንቸሎ መደያይቦ ክፉት እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.s': { m: "ውዑይ ቡንካ ኣብ ትሑት ጠረጴዛ ኣቐሚጥካዮ። ሓደ ንእሽቶ ቈልዓ ናብኡ ይኸይድ ኣሎ። እንታይ ትገብር?", f: "ውዑይ ቡንኪ ኣብ ትሑት ጠረጴዛ ኣቐሚጥክዮ። ሓደ ንእሽቶ ቈልዓ ናብኡ ይኸይድ ኣሎ። እንታይ ትገብሪ?", x: "ውዑይ ቡንኩም ኣብ ትሑት ጠረጴዛ ኣቐሚጥኩምዎ። ሓደ ንእሽቶ ቈልዓ ናብኡ ይኸይድ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o1': { m: "ነቲ ቡን ብቕጽበት ኣብ ልዑል ቦታ ኣቐምጦ።", f: "ነቲ ቡን ብቕጽበት ኣብ ልዑል ቦታ ኣቐምጥዮ።", x: "ነቲ ቡን ብቕጽበት ኣብ ልዑል ቦታ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o2': { m: "ነቲ ቈልዓ ከይትንክፎ ንገሮ።", f: "ነቲ ቈልዓ ከይትንክፎ ንገርዮ።", x: "ነቲ ቈልዓ ከይትንክፎ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.o3': { m: "ቀልጢፍካ ስተዮ።", f: "ቀልጢፍኪ ስተይዮ።", x: "ቀልጢፍኩም ስተይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.w': "ውዑይ ቡን ንንእሽቶ ቈልዓ ብኽፉእ ከንድዶ ይኽእል። ቈልዑ ዘይበጽሕዎ ቦታ እቲ ሓደ ውሑስ ቦታ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sickchild': "ሕሙም ቈልዓን ኣለርጂታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huiduitslag': "ምቕላሕ ቆርበት (ኣብ ቆርበት ቀይሕ ነጥብታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diarree': "ውጽኣት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overgeven': "ምምላስ (ምትፋእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergielijst': "ዝርዝር ኣለርጂ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.adrenalinepen': "ፔን ኣድረናሊን (ንብርቱዕ ኣለርጂ መድሃኒት ዘለዎ ፔን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.temperaturen': "ሙቐት ምዕቃን (ሙቐት ኣካል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.1': "ሰም ረስኒ ኣለዎ። ንኣቦኡ እድውለሉ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.2': { m: "ቅድሚ መግቢ ኣብቲ ዝርዝር ኣለርጂ ርአ።", f: "ቅድሚ መግቢ ኣብቲ ዝርዝር ኣለርጂ ርኣዪ።", x: "ቅድሚ መግቢ ኣብቲ ዝርዝር ኣለርጂ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.sickchild.3': { m: "ፈጺምካ ብዘይ ፍቓድ መድሃኒት ኣይትሃብ።", f: "ፈጺምኪ ብዘይ ፍቓድ መድሃኒት ኣይትሃቢ።", x: "ፈጺምኩም ብዘይ ፍቓድ መድሃኒት ኣይትሃቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.q': "ጂፕ ከመይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a': "ኣዝዩ ውዑይ እዩ። ሙቐቱ ክዕቅን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild': { m: "ሕሙም ቈልዓ፡ ንገር፡ ኣይትገምት", f: "ሕሙም ቈልዓ፡ ንገሪ፡ ኣይትገምቲ", x: "ሕሙም ቈልዓ፡ ንገሩ፡ ኣይትገምቱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.b': { m: "ቈልዑ ከመይ ከም ዘለዉ ተኸታተል። ሓደ ቈልዓ ውዑይ፡ ኣዝዩ ዝደኸመ፡ ዝምለስ ድዩ፡ ወይ ምቕላሕ ቆርበት ኣለዎ ድዩ? ሙቐቱ ዕቐን፡ ንብጻይ ስራሕካ ንገሮ፡ ናብ ወለዲ ድማ ደውል። መድሃኒት ብጽሑፍ ፍቓድ ወለዲ ጥራይ ሃብ፡ እንታይ ከም ዝሃብካን መዓስን ድማ ጽሓፍ። ኣየኖት ቈልዑ ኣለርጂ ከም ዘለዎም፡ መድሃኒቶም ኣበይ ከም ዘሎን ፍለጥ። ብርቱዕ ግብረ መልሲ ኣለርጂ ዘለዎ ቈልዓ: ብኸመይ ከም ዝወሃብ ተማሂርካ እንተ ኾይንካ፡ ፔን ኣድረናሊን ሃብ፡ ናብ 112 ድማ ደውል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ቈልዑ ከመይ ከም ዘለዉ ተኸታተሊ። ሓደ ቈልዓ ውዑይ፡ ኣዝዩ ዝደኸመ፡ ዝምለስ ድዩ፡ ወይ ምቕላሕ ቆርበት ኣለዎ ድዩ? ሙቐቱ ዕቐኒ፡ ንብጻይ ስራሕኪ ንገርዮ፡ ናብ ወለዲ ድማ ደውሊ። መድሃኒት ብጽሑፍ ፍቓድ ወለዲ ጥራይ ሃቢ፡ እንታይ ከም ዝሃብኪን መዓስን ድማ ጽሓፊ። ኣየኖት ቈልዑ ኣለርጂ ከም ዘለዎም፡ መድሃኒቶም ኣበይ ከም ዘሎን ፍለጢ። ብርቱዕ ግብረ መልሲ ኣለርጂ ዘለዎ ቈልዓ: ብኸመይ ከም ዝወሃብ ተማሂርኪ እንተ ኾይንኪ፡ ፔን ኣድረናሊን ሃቢ፡ ናብ 112 ድማ ደውሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ቈልዑ ከመይ ከም ዘለዉ ተኸታተሉ። ሓደ ቈልዓ ውዑይ፡ ኣዝዩ ዝደኸመ፡ ዝምለስ ድዩ፡ ወይ ምቕላሕ ቆርበት ኣለዎ ድዩ? ሙቐቱ ዕቐኑ፡ ንብጻይ ስራሕኩም ንገርዎ፡ ናብ ወለዲ ድማ ደውሉ። መድሃኒት ብጽሑፍ ፍቓድ ወለዲ ጥራይ ሃቡ፡ እንታይ ከም ዝሃብኩምን መዓስን ድማ ጽሓፉ። ኣየኖት ቈልዑ ኣለርጂ ከም ዘለዎም፡ መድሃኒቶም ኣበይ ከም ዘሎን ፍለጡ። ብርቱዕ ግብረ መልሲ ኣለርጂ ዘለዎ ቈልዓ: ብኸመይ ከም ዝወሃብ ተማሂርኩም እንተ ኾይንኩም፡ ፔን ኣድረናሊን ሃቡ፡ ናብ 112 ድማ ደውሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.p': "ቈልዓኹም ሓሚሙ እዩ። መጺእኩም ክትወስድዎ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.s': { m: "ሓንቲ ኣደ ከምዚ ትብል: \"ሰዓት ክልተ ናይ ረስኒ መድሃኒት ሃቦ\"። ፎርም የለን። እንታይ ትገብር?", f: "ሓንቲ ኣደ ከምዚ ትብል: \"ሰዓት ክልተ ናይ ረስኒ መድሃኒት ሃብዮ\"። ፎርም የለን። እንታይ ትገብሪ?", x: "ሓንቲ ኣደ ከምዚ ትብል: \"ሰዓት ክልተ ናይ ረስኒ መድሃኒት ሃብዎ\"። ፎርም የለን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o1': { m: "ቅድም ነቲ ፎርም ክትፍርም ሕተታ።", f: "ቅድም ነቲ ፎርም ክትፍርም ሕተትያ።", x: "ቅድም ነቲ ፎርም ክትፍርም ሕተትዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o2': { m: "ሃቦ፡ ኣዲኡ እያ ሓቲታ።", f: "ሃብዮ፡ ኣዲኡ እያ ሓቲታ።", x: "ሃብዎ፡ ኣዲኡ እያ ሓቲታ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.o3': { m: "ንውሕስና ፍርቂ ሃቦ።", f: "ንውሕስና ፍርቂ ሃብዮ።", x: "ንውሕስና ፍርቂ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.w': { m: "ብዘይ ጽሑፍ ፍቓድ መድሃኒት ክትህብ ኣይፍቀደካን። እቲ ፎርም ንቈልዓን ንዓኻን ይከላኸል።", f: "ብዘይ ጽሑፍ ፍቓድ መድሃኒት ክትህቢ ኣይፍቀደክን። እቲ ፎርም ንቈልዓን ንዓኺን ይከላኸል።", x: "ብዘይ ጽሑፍ ፍቓድ መድሃኒት ክትህቡ ኣይፍቀደኩምን። እቲ ፎርም ንቈልዓን ንዓኹምን ይከላኸል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.grouprules': "እቲ ጉጅለን ሕግታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pedagogischmedewerker': "ሰራሕተኛ ክንክን ቈልዑ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mentor': "መንቶር (ንሓደ ቈልዓ ብቐረባ ዝከታተል ሰራሕተኛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vierogenprincipe': "ሕጊ ኣርባዕተ ኣዒንቲ (ካልእ ዓቢ ሰብ ኩሉ ግዜ ክርኢ ወይ ክሰምዕ ይኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.observeren': "ምዕዛብ (ብጥንቃቐ ምርኣይን ምጽሓፍን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.peuter': "ንእሽቶ ቈልዓ (ናይ ክልተ ወይ ሰለስተ ዓመት ቈልዓ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.groep': "ጉጅለ (መዓልቲ መዓልቲ ብሓባር ዝውዕሉ ቈልዑ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.1': "ኣነ መንቶር ሊዛ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.2': "ሓደ ብጻይ ስራሕ ኩሉ ግዜ ክርእየና ወይ ክሰምዓና ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    's.grouprules.3': "ብዛዕባ ዳን ተሻቒለ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.q': "ምስቲ ጉጅለ በይነይ ናብ ደገ ክወጽእ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a': { m: "እወ፡ ግን ቅድም ንሓደ ብጻይ ስራሕ ንገሮ።", f: "እወ፡ ግን ቅድም ንሓደ ብጻይ ስራሕ ንገርዮ።", x: "እወ፡ ግን ቅድም ንሓደ ብጻይ ስራሕ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules': { m: "ፈጺምካ በይነኻ ካብ ዓይኒ ርሒቕካ ኣይትኹን", f: "ፈጺምኪ በይነኺ ካብ ዓይኒ ርሒቕኪ ኣይትኹኒ", x: "ፈጺምኩም በይነኹም ካብ ዓይኒ ርሒቕኩም ኣይትኹኑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.b': { m: "ኣብ ክንክን ቈልዑ፡ ምስ ቈልዑ ክትህሉ ከለኻ፡ ካልእ ዓቢ ሰብ ኩሉ ግዜ ክርእየካ ወይ ክሰምዓካ ክኽእል ኣለዎ። እዚ ንቈልዑን ንዓኻን ይከላኸል። ነፍሲ ወከፍ ቈልዓ መንቶር ኣለዎ: ነቲ ቈልዓ ብቐረባ ዝከታተልን ምስ ወለዲ ዝዛረብን ሓደ ሰራሕተኛ። ብዛዕባ ሓደ ቈልዓ ኣብ ገዛ ዘሎ ኩነታት ትሻቐል ዲኻ፡ ንኣብነት ብሰንኪ ምልክታት ማህሰይቲ ወይ ፍርሒ? ነቲ ቈልዓ ብዙሕ ኣይትሕተቶ: ንተቖጻጻሪኻ ንገሮ፡ ንሱ ነቲ ስጉምትታት ይፈልጥ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ክንክን ቈልዑ፡ ምስ ቈልዑ ክትህልዊ ከለኺ፡ ካልእ ዓቢ ሰብ ኩሉ ግዜ ክርእየኪ ወይ ክሰምዓኪ ክኽእል ኣለዎ። እዚ ንቈልዑን ንዓኺን ይከላኸል። ነፍሲ ወከፍ ቈልዓ መንቶር ኣለዎ: ነቲ ቈልዓ ብቐረባ ዝከታተልን ምስ ወለዲ ዝዛረብን ሓደ ሰራሕተኛ። ብዛዕባ ሓደ ቈልዓ ኣብ ገዛ ዘሎ ኩነታት ትሻቐሊ ዲኺ፡ ንኣብነት ብሰንኪ ምልክታት ማህሰይቲ ወይ ፍርሒ? ነቲ ቈልዓ ብዙሕ ኣይትሕተትዮ: ንተቖጻጻሪኺ ንገርዮ፡ ንሱ ነቲ ስጉምትታት ይፈልጥ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ክንክን ቈልዑ፡ ምስ ቈልዑ ክትህልዉ ከለኹም፡ ካልእ ዓቢ ሰብ ኩሉ ግዜ ክርእየኩም ወይ ክሰምዓኩም ክኽእል ኣለዎ። እዚ ንቈልዑን ንዓኹምን ይከላኸል። ነፍሲ ወከፍ ቈልዓ መንቶር ኣለዎ: ነቲ ቈልዓ ብቐረባ ዝከታተልን ምስ ወለዲ ዝዛረብን ሓደ ሰራሕተኛ። ብዛዕባ ሓደ ቈልዓ ኣብ ገዛ ዘሎ ኩነታት ትሻቐሉ ዲኹም፡ ንኣብነት ብሰንኪ ምልክታት ማህሰይቲ ወይ ፍርሒ? ነቲ ቈልዓ ብዙሕ ኣይትሕተትዎ: ንተቖጻጻሪኹም ንገርዎ፡ ንሱ ነቲ ስጉምትታት ይፈልጥ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.p': "ብዛዕባ እዚ ቈልዓ ተሻቒለ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.s': { m: "ከም ብሓድሽ ኣብ ሓደ ቈልዓ ምልክታት ማህሰይቲ ትርኢ። እቲ ቈልዓ ስቕ ኢሉ እዩ። እንታይ ትገብር?", f: "ከም ብሓድሽ ኣብ ሓደ ቈልዓ ምልክታት ማህሰይቲ ትርእዪ። እቲ ቈልዓ ስቕ ኢሉ እዩ። እንታይ ትገብሪ?", x: "ከም ብሓድሽ ኣብ ሓደ ቈልዓ ምልክታት ማህሰይቲ ትርእዩ። እቲ ቈልዓ ስቕ ኢሉ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o1': { m: "ኣብታ ሓንቲ መዓልቲ ንተቖጻጻሪኻ ንገሮ።", f: "ኣብታ ሓንቲ መዓልቲ ንተቖጻጻሪኺ ንገርዮ።", x: "ኣብታ ሓንቲ መዓልቲ ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o2': { m: "ነቲ ቈልዓ ብዙሕ ሕቶታት ሕተቶ።", f: "ነቲ ቈልዓ ብዙሕ ሕቶታት ሕተትዮ።", x: "ነቲ ቈልዓ ብዙሕ ሕቶታት ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.o3': { m: "ናብ ወለዲ ደውል፡ ስለምንታይ ድማ ሕተቶም።", f: "ናብ ወለዲ ደውሊ፡ ስለምንታይ ድማ ሕተትዮም።", x: "ናብ ወለዲ ደውሉ፡ ስለምንታይ ድማ ሕተትዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.w': { m: "ተቖጻጻሪኻ ብዛዕባ ሻቕሎት ቈልዓ ዘድልዩ ስጉምትታት ይፈልጥ። ብዙሕ ሕቶታት ነቲ ቈልዓ ከፍርሆ ይኽእል።", f: "ተቖጻጻሪኺ ብዛዕባ ሻቕሎት ቈልዓ ዘድልዩ ስጉምትታት ይፈልጥ። ብዙሕ ሕቶታት ነቲ ቈልዓ ከፍርሆ ይኽእል።", x: "ተቖጻጻሪኹም ብዛዕባ ሻቕሎት ቈልዓ ዘድልዩ ስጉምትታት ይፈልጥ። ብዙሕ ሕቶታት ነቲ ቈልዓ ከፍርሆ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and "Werken via een uitzendbureau" (23 November 2026).
    'u.housekeeping': "ሽቓቓት፡ ክፍልታት ሆቴልን ማሽናትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.sanitary': "ሽቓቓትን መሕጸቢ ኢድን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wastafel': "መሕጸቢ ኢድ (ላቫቦ፡ ኣብ ባኞ ወይ ሽቓቕ ዘሎ መሕጸቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletpot': "መንበር ሽቓቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toiletborstel': "ብሩሽ ሽቓቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.urinoir': "መሸነ ደቂ ተባዕትዮ (ብደው ዝሽነሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kalk': "ኖራ ማይ (ካብ ማይ ኣብ ቱቦታትን ፕያስትረላታትን ዝተርፍ ጻዕዳ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ontstopper': "መኽፈቲ ዝተዓጽወ ሽቓቕ (ንዝተዓጽወ ሽቓቕ ወይ ቱቦ ዝኸውን መሳርሒ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.1': "ቅድም ላቫቦታት እገብር፡ ድሕሪኡ ሽቓቓት።", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.2': "ኣብቲ ቱቦ ማይ ኖራ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.sanitary.3': "እቲ ኣብ ቀዳማይ ደርቢ ዘሎ ሽቓቕ ተዓጽዩ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.q': "ሽቓቓት ተወዲኦም ድዮም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.a': "ገና። ሓደ ሽቓቕ ተዓጽዩ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary': "ካብ ጽሩይ ናብ ረሳሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.b': { m: "ኣብ ክፍሊ ሽቓቕ ካብ ጽሩይ ናብ ረሳሕ ትሰርሕ፡ ቅድም መስትያትን ላቫቦታትን፡ ድሕሪኡ ሽቓቓት፡ ኣብ መወዳእታ ድማ መሬት። ከምኡ ጌርካ ረሳሕ ካብ ሽቓቕ ናብ ላቫቦ ኣይተብጽሕን። ነቲ ሕብሪ ሽቓቕ ዘለዎ ጨርቂ ተጠቐም፡ ጓንቲ ድማ ግበር። ነቲ ብሩሽ ሽቓቕ እውን ኣጽርዮ፡ ክነቅጽ ድማ ግደፎ። ሽቓቕ ተዓጽዩ ወይ ተበላሽዩ ድዩ? ኣብ ማዕጾ ምልክት ለጥፍ፡ ሕበር ድማ። ምስ ወዳእካ ኣእዳውካ ተሓጸብ፡ ጓንቲ እንተ ገበርካ እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ክፍሊ ሽቓቕ ካብ ጽሩይ ናብ ረሳሕ ትሰርሒ፡ ቅድም መስትያትን ላቫቦታትን፡ ድሕሪኡ ሽቓቓት፡ ኣብ መወዳእታ ድማ መሬት። ከምኡ ጌርኪ ረሳሕ ካብ ሽቓቕ ናብ ላቫቦ ኣይተብጽሒን። ነቲ ሕብሪ ሽቓቕ ዘለዎ ጨርቂ ተጠቐሚ፡ ጓንቲ ድማ ግበሪ። ነቲ ብሩሽ ሽቓቕ እውን ኣጽርይዮ፡ ክነቅጽ ድማ ግደፍዮ። ሽቓቕ ተዓጽዩ ወይ ተበላሽዩ ድዩ? ኣብ ማዕጾ ምልክት ለጥፊ፡ ሕበሪ ድማ። ምስ ወዳእኪ ኣእዳውኪ ተሓጸቢ፡ ጓንቲ እንተ ገበርኪ እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ክፍሊ ሽቓቕ ካብ ጽሩይ ናብ ረሳሕ ትሰርሑ፡ ቅድም መስትያትን ላቫቦታትን፡ ድሕሪኡ ሽቓቓት፡ ኣብ መወዳእታ ድማ መሬት። ከምኡ ጌርኩም ረሳሕ ካብ ሽቓቕ ናብ ላቫቦ ኣይተብጽሑን። ነቲ ሕብሪ ሽቓቕ ዘለዎ ጨርቂ ተጠቐሙ፡ ጓንቲ ድማ ግበሩ። ነቲ ብሩሽ ሽቓቕ እውን ኣጽርይዎ፡ ክነቅጽ ድማ ግደፍዎ። ሽቓቕ ተዓጽዩ ወይ ተበላሽዩ ድዩ? ኣብ ማዕጾ ምልክት ለጥፉ፡ ሕበሩ ድማ። ምስ ወዳእኩም ኣእዳውኩም ተሓጸቡ፡ ጓንቲ እንተ ገበርኩም እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.sanitary.p': "እዚ ሽቓቕ ተዓጽዩ ኣሎ። ምልክት ይለጥፈሉ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.s': { m: "ሓደ ሽቓቕ ኣጽሪኻ። ቀጺሉ ላቫቦ እዩ። ገና ነቲ ሓደ ጨርቂ ሒዝካ ኣለኻ። እንታይ ትገብር?", f: "ሓደ ሽቓቕ ኣጽሪኺ። ቀጺሉ ላቫቦ እዩ። ገና ነቲ ሓደ ጨርቂ ሒዝኪ ኣለኺ። እንታይ ትገብሪ?", x: "ሓደ ሽቓቕ ኣጽሪኹም። ቀጺሉ ላቫቦ እዩ። ገና ነቲ ሓደ ጨርቂ ሒዝኩም ኣለኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o1': { m: "ሕብሪ ላቫቦ ዘለዎ ጨርቂ ውሰድ።", f: "ሕብሪ ላቫቦ ዘለዎ ጨርቂ ውሰዲ።", x: "ሕብሪ ላቫቦ ዘለዎ ጨርቂ ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o2': { m: "ነቲ ሓደ ጨርቂ ተጠቐም፡ ገና ጽሩይ ይመስል።", f: "ነቲ ሓደ ጨርቂ ተጠቐሚ፡ ገና ጽሩይ ይመስል።", x: "ነቲ ሓደ ጨርቂ ተጠቐሙ፡ ገና ጽሩይ ይመስል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.o3': { m: "ነቲ ጨርቂ ቅድም ኣብ ሽቓቕ ለቕልቖ።", f: "ነቲ ጨርቂ ቅድም ኣብ ሽቓቕ ለቕልቕዮ።", x: "ነቲ ጨርቂ ቅድም ኣብ ሽቓቕ ለቕልቕዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.sanitary.w': "ካብ ሽቓቕ ዝመጹ ጀርምታት ኣብቲ ጨርቂ ኣለዉ፡ ዘይርኣዩ እንተ ኾኑ እውን። ሓድሽ ጨርቂ ካብ ኣእዳውን ገጻትን የርሕቖም።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hotelroom': "ክፍልታት ሆቴል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laken': "ኣንሶላ (ኣብ ዓራት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kussensloop': "ጨርቂ መተርኣስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dekbed': "ኮቦርታ (ረጒድ መጎልበቢ ዓራት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handdoek': "ሽጎማኖ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kamerlijst': "ዝርዝር ክፍልታት (ሎሚ ክትገብሮም ዘለካ ክፍልታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opmaken': "ምንጻፍ (ዓራት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.1': "ነቲ ዓራት ብጽሩይ ኣንሶላ እነጽፎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.2': { m: "ኣብ ባኞ ክልተ ጽሩይ ሽጎማኖ ኣቐምጥ።", f: "ኣብ ባኞ ክልተ ጽሩይ ሽጎማኖ ኣቐምጢ።", x: "ኣብ ባኞ ክልተ ጽሩይ ሽጎማኖ ኣቐምጡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hotelroom.3': "ክፍሊ ዓሰርተው ክልተ ተወዲኡ። ናብ ዓሰርተው ሰለስተ ይኸይድ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.q': { m: "ክንደይ ክፍልታት ተሪፉካ?", f: "ክንደይ ክፍልታት ተሪፉኪ?", x: "ክንደይ ክፍልታት ተሪፉኩም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a': "ገና ኣርባዕተ። ሽዑ ዝርዝረይ ይውዳእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom': { m: "ኳሕኵሕ፡ መን ምዃንካ ንገር፡ ተጸበ", f: "ኳሕኵሒ፡ መን ምዃንኪ ንገሪ፡ ተጸበዪ", x: "ኳሕኵሑ፡ መን ምዃንኩም ንገሩ፡ ተጸበዩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.b': { m: "ናብ ክፍሊ ሆቴል ቅድሚ ምእታውካ፡ ኳሕኵሕ መን ምዃንካ ድማ ንገር፡ ንኣብነት “Housekeeping!”። ቁሩብ ተጸበ፡ ከም ብሓድሽ ድማ ኳሕኵሕ። ኣብ ማዕጾ “Niet storen” ዝብል ምልክት ኣሎ ድዩ? ሽዑ ኣይትእቶ፡ ኣብ ዝርዝር ክፍልታትካ ድማ ጽሓፎ። እቲ ጋሻ ኣብቲ ክፍሊ ኣሎ ድዩ? ሕጂ ከተጽርይ ትኽእል እንተ ኾይንካ ሕተት፡ ወይ ጸኒሕካ ተመለስ። ኣቕሑ እቲ ጋሻ ኣብ ቦታኡ ይጸንሕ። ጋሻ ገለ ነገር ረሲዑ ድዩ? ናብ ረሴፕሽን ውሰዶ። ፈጺምካ ዝኾነ ነገር ንዓኻ ኣይትሓዝ፡ ንእሽቶ ነገር እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ናብ ክፍሊ ሆቴል ቅድሚ ምእታውኪ፡ ኳሕኵሒ መን ምዃንኪ ድማ ንገሪ፡ ንኣብነት “Housekeeping!”። ቁሩብ ተጸበዪ፡ ከም ብሓድሽ ድማ ኳሕኵሒ። ኣብ ማዕጾ “Niet storen” ዝብል ምልክት ኣሎ ድዩ? ሽዑ ኣይትእተዊ፡ ኣብ ዝርዝር ክፍልታትኪ ድማ ጽሓፍዮ። እቲ ጋሻ ኣብቲ ክፍሊ ኣሎ ድዩ? ሕጂ ከተጽርዪ ትኽእሊ እንተ ኾይንኪ ሕተቲ፡ ወይ ጸኒሕኪ ተመለሲ። ኣቕሑ እቲ ጋሻ ኣብ ቦታኡ ይጸንሕ። ጋሻ ገለ ነገር ረሲዑ ድዩ? ናብ ረሴፕሽን ውሰድዮ። ፈጺምኪ ዝኾነ ነገር ንዓኺ ኣይትሓዚ፡ ንእሽቶ ነገር እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ናብ ክፍሊ ሆቴል ቅድሚ ምእታውኩም፡ ኳሕኵሑ መን ምዃንኩም ድማ ንገሩ፡ ንኣብነት “Housekeeping!”። ቁሩብ ተጸበዩ፡ ከም ብሓድሽ ድማ ኳሕኵሑ። ኣብ ማዕጾ “Niet storen” ዝብል ምልክት ኣሎ ድዩ? ሽዑ ኣይትእተዉ፡ ኣብ ዝርዝር ክፍልታትኩም ድማ ጽሓፍዎ። እቲ ጋሻ ኣብቲ ክፍሊ ኣሎ ድዩ? ሕጂ ከተጽርዩ ትኽእሉ እንተ ኾይንኩም ሕተቱ፡ ወይ ጸኒሕኩም ተመለሱ። ኣቕሑ እቲ ጋሻ ኣብ ቦታኡ ይጸንሕ። ጋሻ ገለ ነገር ረሲዑ ድዩ? ናብ ረሴፕሽን ውሰድዎ። ፈጺምኩም ዝኾነ ነገር ንዓኹም ኣይትሓዙ፡ ንእሽቶ ነገር እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.p': "ደሓን ሓዲርኩም። ሕጂ ነቲ ክፍሊ ከጽርዮ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.s': { m: "ኣብ ሓደ ባዶ ክፍሊ ኣብ ትሕቲ ዓራት ተሌፎን ትረኽብ። እቲ ጋሻ ከይዱ እዩ። እንታይ ትገብር?", f: "ኣብ ሓደ ባዶ ክፍሊ ኣብ ትሕቲ ዓራት ተሌፎን ትረኽቢ። እቲ ጋሻ ከይዱ እዩ። እንታይ ትገብሪ?", x: "ኣብ ሓደ ባዶ ክፍሊ ኣብ ትሕቲ ዓራት ተሌፎን ትረኽቡ። እቲ ጋሻ ከይዱ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o1': { m: "ናብ ረሴፕሽን ውሰዶ።", f: "ናብ ረሴፕሽን ውሰድዮ።", x: "ናብ ረሴፕሽን ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o2': { m: "ሓዞ፡ እቲ ጋሻ ከይዱ እዩ።", f: "ሓዝዮ፡ እቲ ጋሻ ከይዱ እዩ።", x: "ሓዝዎ፡ እቲ ጋሻ ከይዱ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.o3': { m: "ኣብ ትሕቲ ዓራት ግደፎ።", f: "ኣብ ትሕቲ ዓራት ግደፍዮ።", x: "ኣብ ትሕቲ ዓራት ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.w': { m: "ዝጠፍኡ ኣቕሑ ገና ናይቲ ጋሻ እዮም። ረሴፕሽን ክመልሶም ይኽእል። ምሓዞም ስርቂ እዩ፡ ስራሕካ ድማ ከስእነኻ ይኽእል።", f: "ዝጠፍኡ ኣቕሑ ገና ናይቲ ጋሻ እዮም። ረሴፕሽን ክመልሶም ይኽእል። ምሓዞም ስርቂ እዩ፡ ስራሕኪ ድማ ከስእነኺ ይኽእል።", x: "ዝጠፍኡ ኣቕሑ ገና ናይቲ ጋሻ እዮም። ረሴፕሽን ክመልሶም ይኽእል። ምሓዞም ስርቂ እዩ፡ ስራሕኩም ድማ ከስእነኹም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.dosing': "ፍርያትን ማሽናትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doseren': "ምዕቃን (ቅኑዕ መጠን ፍርያት ምጥቃም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.maatbeker': "መዐቀኒ ኩባያ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sprayflacon': "ጥርሙዝ ስፕረይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.concentraat': "ብርቱዕ ፍርያት (ምስ ማይ እትሕውሶ ሓያል ፍርያት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.veiligheidsblad': "ወረቐት ድሕንነት (ሓደጋታት ናይ ሓደ ፍርያትን እንታይ ከም ዝግበርን ትገልጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schrobzuigmachine': "ማሽን ምሕጻብን ምንቃጽን መሬት (መሬት ፈሕፊሓ ማዩ እትመጽዮ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.1': { m: "ኣብ ሓደ ባልዲ ማይ ሓደ መኽደን ኣእቱ።", f: "ኣብ ሓደ ባልዲ ማይ ሓደ መኽደን ኣእትዊ።", x: "ኣብ ሓደ ባልዲ ማይ ሓደ መኽደን ኣእትዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.2': { m: "ቅድም ነቲ ኤቲኬት ኣንብቦ።", f: "ቅድም ነቲ ኤቲኬት ኣንብብዮ።", x: "ቅድም ነቲ ኤቲኬት ኣንብብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.dosing.3': "እታ ማሽን ምሕጻብ መሬት ኣብ ቻርጀር ክትኣቱ ኣለዋ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.q': { m: "ቁሩብ ተወሳኺ ፍርያት ኣእቱ። ሽዑ ዝያዳ ይጸሪ።", f: "ቁሩብ ተወሳኺ ፍርያት ኣእትዊ። ሽዑ ዝያዳ ይጸሪ።", x: "ቁሩብ ተወሳኺ ፍርያት ኣእትዉ። ሽዑ ዝያዳ ይጸሪ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a': "ኣይፋልን፡ ብዙሕ ዝሓሸ ኣይኮነን። መዐቀኒ ኩባያ እጥቀም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing': "ቅኑዕ መጠን፡ ዝያዳ ኣይኮነን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.b': { m: "ብዙሕ ፍርያት ዝሓሸ ኣየጽሪን። ኣዝዩ ብዙሕ ዝለገበ ንብሪ ይገድፍ፡ ስለዚ መሬት ቀልጢፉ ይረስሕ፡ ከንሸራትት ድማ ይኽእል። ንቆርበትካን ንሳንቡእካን እውን ዝኸፍአ እዩ። መዐቀኒ ኩባያ ወይ ፓምፕ መዐቀኒ ተጠቐም፡ ነቲ ኤቲኬት ድማ ተኸተሎ። ቅድም ማይ፡ ድሕሪኡ ፍርያት፡ ከይነጠረ። ነታ ማሽን ምሕጻብ መሬት ቅድሚ ምጥቃምካ፡ ቻርጅ ከም ዘለዋን ኣብቲ ታንካ ጽሩይ ማይ ከም ዘሎን ኣረጋግጽ። ኣብ መወዳእታ ነቲ ረሳሕ ማይ ዘለዎ ታንካ ኣራግፎ፡ ለቕልቖ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ብዙሕ ፍርያት ዝሓሸ ኣየጽሪን። ኣዝዩ ብዙሕ ዝለገበ ንብሪ ይገድፍ፡ ስለዚ መሬት ቀልጢፉ ይረስሕ፡ ከንሸራትት ድማ ይኽእል። ንቆርበትኪን ንሳንቡእኪን እውን ዝኸፍአ እዩ። መዐቀኒ ኩባያ ወይ ፓምፕ መዐቀኒ ተጠቐሚ፡ ነቲ ኤቲኬት ድማ ተኸተልዮ። ቅድም ማይ፡ ድሕሪኡ ፍርያት፡ ከይነጠረ። ነታ ማሽን ምሕጻብ መሬት ቅድሚ ምጥቃምኪ፡ ቻርጅ ከም ዘለዋን ኣብቲ ታንካ ጽሩይ ማይ ከም ዘሎን ኣረጋግጺ። ኣብ መወዳእታ ነቲ ረሳሕ ማይ ዘለዎ ታንካ ኣራግፍዮ፡ ለቕልቕዮ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ብዙሕ ፍርያት ዝሓሸ ኣየጽሪን። ኣዝዩ ብዙሕ ዝለገበ ንብሪ ይገድፍ፡ ስለዚ መሬት ቀልጢፉ ይረስሕ፡ ከንሸራትት ድማ ይኽእል። ንቆርበትኩምን ንሳንቡእኩምን እውን ዝኸፍአ እዩ። መዐቀኒ ኩባያ ወይ ፓምፕ መዐቀኒ ተጠቐሙ፡ ነቲ ኤቲኬት ድማ ተኸተልዎ። ቅድም ማይ፡ ድሕሪኡ ፍርያት፡ ከይነጠረ። ነታ ማሽን ምሕጻብ መሬት ቅድሚ ምጥቃምኩም፡ ቻርጅ ከም ዘለዋን ኣብቲ ታንካ ጽሩይ ማይ ከም ዘሎን ኣረጋግጹ። ኣብ መወዳእታ ነቲ ረሳሕ ማይ ዘለዎ ታንካ ኣራግፍዎ፡ ለቕልቕዎ ድማ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.p': "ክንደይ ከእቱ ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.s': { m: "እቲ መሬት ለጋብ ኮይኑ ይጸንሕ። ሓደ ብጻይ ስራሕ «ዕጽፊ ፍርያት ተጠቐም» ይብለካ። እንታይ ትገብር?", f: "እቲ መሬት ለጋብ ኮይኑ ይጸንሕ። ሓደ ብጻይ ስራሕ «ዕጽፊ ፍርያት ተጠቐሚ» ይብለኪ። እንታይ ትገብሪ?", x: "እቲ መሬት ለጋብ ኮይኑ ይጸንሕ። ሓደ ብጻይ ስራሕ «ዕጽፊ ፍርያት ተጠቐሙ» ይብለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.dosing.o1': { m: "ነቲ ኣብ ኤቲኬት ዘሎ መጠን ተጠቐም፡ ሕተት ድማ።", f: "ነቲ ኣብ ኤቲኬት ዘሎ መጠን ተጠቐሚ፡ ሕተቲ ድማ።", x: "ነቲ ኣብ ኤቲኬት ዘሎ መጠን ተጠቐሙ፡ ሕተቱ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o2': { m: "ዕጽፊ ተጠቐም፡ ሽዑ ይጸሪ።", f: "ዕጽፊ ተጠቐሚ፡ ሽዑ ይጸሪ።", x: "ዕጽፊ ተጠቐሙ፡ ሽዑ ይጸሪ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.o3': { m: "ነቲ ፍርያት ብቐጥታ ኣብ መሬት ኣፍስሶ።", f: "ነቲ ፍርያት ብቐጥታ ኣብ መሬት ኣፍስስዮ።", x: "ነቲ ፍርያት ብቐጥታ ኣብ መሬት ኣፍስስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.w': "ለጋብ መሬት መብዛሕትኡ ግዜ ብዙሕ ፍርያት ማለት እዩ፡ ውሑድ ኣይኮነን። ቅኑዕ መጠን ብዝበለጸ የጽሪ፡ ብዝበለጸ ድማ ውሑስ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.officenight': "ቤት ጽሕፈታት፡ ንግሆ ወይ ምሸት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.toetsenbord': "ኪቦርድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.papierbak': "መእከቢ ወረቐት (ንኣረጊት ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lichtschakelaar': "መወልዒ መብራህቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pantry': "ንእሽቶ ክሽነ (ኣብ ቤት ጽሕፈት ዘላ ንእሽቶ ክሽነ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurmat': "መጽረዪ እግሪ (ኣብ ኣፍ ደገ ዘሎ ምንጻፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alleenwerken': "በይንኻ ምስራሕ (ኣብቲ ህንጻ ካልእ ሰብ የለን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.1': "መጕሓፊ ጓሓፍን መእከቢ ወረቐትን ኣራግፍ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.2': "ነቶም ኣብ ጠረጴዛ ዘለዉ ወረቐታት ኣይትንክፎምን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.officenight.3': "ምስ ወዳእኩ መብራህቲ የጥፍእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.q': { m: "ሎሚ ምሸት ኣብቲ ህንጻ በይንኻ ዲኻ ትሰርሕ?", f: "ሎሚ ምሸት ኣብቲ ህንጻ በይንኺ ዲኺ ትሰርሒ?", x: "ሎሚ ምሸት ኣብቲ ህንጻ በይንኹም ዲኹም ትሰርሑ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a': "እወ። ምስ ወዳእኩ መልእኽቲ ክሰድድ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight': { m: "በይንኻ ኣብ ህንጻ", f: "በይንኺ ኣብ ህንጻ", x: "በይንኹም ኣብ ህንጻ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.b': { m: "ንግሆ ኣንጊሁ ወይ ምሸት ደንጒዩ መብዛሕትኡ ግዜ በይንኻ ቤት ጽሕፈት ተጽርይ። ገለ እንተ ኣጋጢሙ እንታይ ከም ትገብር ፍለጥ፡ ናብ መን ትድውል፡ ሳንዱቕ ቀዳማይ ረድኤት ድማ ኣበይ ኣሎ? ተሌፎንካ ምሳኻ ሓዞ። ኣብ መጀመርታን መወዳእታን ስራሕካ መልእኽቲ ክትሰድድ፡ ምስ ተቖጻጻሪኻ ወይ ምስ ብጻይ ስራሕ ተሰማማዕ። ዘይትፈልጦ ሰብ ኣይተእቱ። ንምጽራይ ካብ ዘድሊ ንላዕሊ ወረቐታት፡ ስክሪናት ወይ ኪቦርድ ኣይትተንክፍ፡ ኣብኡ ዘሎ ድማ ፈጺምካ ኣይተንብብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንግሆ ኣንጊሁ ወይ ምሸት ደንጒዩ መብዛሕትኡ ግዜ በይንኺ ቤት ጽሕፈት ተጽርዪ። ገለ እንተ ኣጋጢሙ እንታይ ከም ትገብሪ ፍለጢ፡ ናብ መን ትድውሊ፡ ሳንዱቕ ቀዳማይ ረድኤት ድማ ኣበይ ኣሎ? ተሌፎንኪ ምሳኺ ሓዝዮ። ኣብ መጀመርታን መወዳእታን ስራሕኪ መልእኽቲ ክትሰድዲ፡ ምስ ተቖጻጻሪኺ ወይ ምስ ብጻይ ስራሕ ተሰማማዒ። ዘይትፈልጥዮ ሰብ ኣይተእትዊ። ንምጽራይ ካብ ዘድሊ ንላዕሊ ወረቐታት፡ ስክሪናት ወይ ኪቦርድ ኣይትተንክፊ፡ ኣብኡ ዘሎ ድማ ፈጺምኪ ኣይተንብቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንግሆ ኣንጊሁ ወይ ምሸት ደንጒዩ መብዛሕትኡ ግዜ በይንኹም ቤት ጽሕፈት ተጽርዩ። ገለ እንተ ኣጋጢሙ እንታይ ከም ትገብሩ ፍለጡ፡ ናብ መን ትድውሉ፡ ሳንዱቕ ቀዳማይ ረድኤት ድማ ኣበይ ኣሎ? ተሌፎንኩም ምሳኹም ሓዝዎ። ኣብ መጀመርታን መወዳእታን ስራሕኩም መልእኽቲ ክትሰድዱ፡ ምስ ተቖጻጻሪኹም ወይ ምስ ብጻይ ስራሕ ተሰማማዑ። ዘይትፈልጥዎ ሰብ ኣይተእትዉ። ንምጽራይ ካብ ዘድሊ ንላዕሊ ወረቐታት፡ ስክሪናት ወይ ኪቦርድ ኣይትተንክፉ፡ ኣብኡ ዘሎ ድማ ፈጺምኩም ኣይተንብቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.p': "ወዲአ እየ፡ ሕጂ ናብ ገዛ ይኸይድ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.s': { m: "ለይቲ ሓደ ሰብኣይ ነቲ ናይ ብርጭቆ ማዕጾ የኳሕኵሕ። ኣብዚ ከም ዝሰርሕን መፍትሑ ከም ዝረስዐን ይብል። እንታይ ትገብር?", f: "ለይቲ ሓደ ሰብኣይ ነቲ ናይ ብርጭቆ ማዕጾ የኳሕኵሕ። ኣብዚ ከም ዝሰርሕን መፍትሑ ከም ዝረስዐን ይብል። እንታይ ትገብሪ?", x: "ለይቲ ሓደ ሰብኣይ ነቲ ናይ ብርጭቆ ማዕጾ የኳሕኵሕ። ኣብዚ ከም ዝሰርሕን መፍትሑ ከም ዝረስዐን ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o1': { m: "ኣይትኽፈት። ናብ ተቖጻጻሪኻ ደውል።", f: "ኣይትኽፈቲ። ናብ ተቖጻጻሪኺ ደውሊ።", x: "ኣይትኽፈቱ። ናብ ተቖጻጻሪኹም ደውሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o2': { m: "ኣእትዎ፡ ሕያዋይ ይመስል።", f: "ኣእትውዮ፡ ሕያዋይ ይመስል።", x: "ኣእትውዎ፡ ሕያዋይ ይመስል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.o3': { m: "ናይ ባዕልኻ መፍትሕ ሃቦ።", f: "ናይ ባዕልኺ መፍትሕ ሃብዮ።", x: "ናይ ባዕልኹም መፍትሕ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.w': { m: "ዝኾነ ሰብ ኣብኡ ከም ዝሰርሕ ክብል ይኽእል። ተቖጻጻሪኻ ከረጋግጾ ይኽእል። ድሕንነትካን እቲ ህንጻን ቅድሚ ኩሉ እዮም።", f: "ዝኾነ ሰብ ኣብኡ ከም ዝሰርሕ ክብል ይኽእል። ተቖጻጻሪኺ ከረጋግጾ ይኽእል። ድሕንነትኪን እቲ ህንጻን ቅድሚ ኩሉ እዮም።", x: "ዝኾነ ሰብ ኣብኡ ከም ዝሰርሕ ክብል ይኽእል። ተቖጻጻሪኹም ከረጋግጾ ይኽእል። ድሕንነትኩምን እቲ ህንጻን ቅድሚ ኩሉ እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.cooking': "ክሽነን ኣገልግሎትን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.knives': "ካራታትን ምቑራጽን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koksmes': "ካራ ሸፍ (ዓቢ ካራ ክሽነ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dunschiller': "መቐረፊ ኣሕምልቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schillen': "ምቕራፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hakken': "ምሕርፋፍ (ኣዝዩ ንኣሽቱ ምቑራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.raspen': "ምፍሓቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blokjes': "ንኣሽቱ ቁራጻት (ንኣሽቱ ኣርባዕተ ኩርናዕ ዘለዎም ቁራጻት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.1': { m: "ነቲ ካሮት ንኣሽቱ ቁራጻት ጌርካ ቁረጾ።", f: "ነቲ ካሮት ንኣሽቱ ቁራጻት ጌርኪ ቁረጽዮ።", x: "ነቲ ካሮት ንኣሽቱ ቁራጻት ጌርኩም ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.2': { m: "ነቲ ካራ ኣብ መሕጸቢ ኣቕሑ ኣይተቐምጦ።", f: "ነቲ ካራ ኣብ መሕጸቢ ኣቕሑ ኣይተቐምጥዮ።", x: "ነቲ ካራ ኣብ መሕጸቢ ኣቕሑ ኣይተቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.knives.3': { m: "ነቲ ፕረዘሞሎ ደቒቕ ጌርካ ሕርፍፎ።", f: "ነቲ ፕረዘሞሎ ደቒቕ ጌርኪ ሕርፍፍዮ።", x: "ነቲ ፕረዘሞሎ ደቒቕ ጌርኩም ሕርፍፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.q': { m: "ነቲ ሽጉርቲ ክትቖርጾ ትኽእል ዶ?", f: "ነቲ ሽጉርቲ ክትቖርጽዮ ትኽእሊ ዶ?", x: "ነቲ ሽጉርቲ ክትቖርጽዎ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.a': "እወ ሸፍ። ከም ቀለበት ድዩ ወይስ ንኣሽቱ ቁራጻት?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives': "ካራ መሳርሒ እዩ፡ መጻወቲ ኣይኮነን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.b': { m: "ካራኻ ብሉሕ ጌርካ ሓዞ፡ ዱዱም ካራ ብቐሊሉ ይሸራተት። ኣብ ዘይንቀሳቐስ ሰሌዳ ቁረጽ፡ ኣብ ትሕቲኡ ጥሉል ጨርቂ ኣንብር። ኣጻብዕካ ከም መጓፍሕቲ ናብ ውሽጢ ዕጸፍ። ጫፍ ካራ ናብ ታሕቲ፡ ቀረባ እግሪኻ ጌርካ ተጓዓዝ፡ ብጥቓ ሰብ ክትሓልፍ ከለኻ ድማ “Mes!” በል። ፈጺምካ ካራ ኣብ ማይ ዝመልኦ መሕጸቢ ኣቕሑ ኣይተቐምጥ፡ ሓደ ሰብ ከይረኣዮ ክሕዞ ይኽእል። ካራ ይወድቕ ድዩ? ንድሕሪት ተመለስ፡ ኣይትሓዞ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ካራኺ ብሉሕ ጌርኪ ሓዝዮ፡ ዱዱም ካራ ብቐሊሉ ይሸራተት። ኣብ ዘይንቀሳቐስ ሰሌዳ ቁረጺ፡ ኣብ ትሕቲኡ ጥሉል ጨርቂ ኣንብሪ። ኣጻብዕኪ ከም መጓፍሕቲ ናብ ውሽጢ ዕጸፊ። ጫፍ ካራ ናብ ታሕቲ፡ ቀረባ እግሪኺ ጌርኪ ተጓዓዚ፡ ብጥቓ ሰብ ክትሓልፊ ከለኺ ድማ “Mes!” በሊ። ፈጺምኪ ካራ ኣብ ማይ ዝመልኦ መሕጸቢ ኣቕሑ ኣይተቐምጢ፡ ሓደ ሰብ ከይረኣዮ ክሕዞ ይኽእል። ካራ ይወድቕ ድዩ? ንድሕሪት ተመለሲ፡ ኣይትሓዝዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ካራኹም ብሉሕ ጌርኩም ሓዝዎ፡ ዱዱም ካራ ብቐሊሉ ይሸራተት። ኣብ ዘይንቀሳቐስ ሰሌዳ ቁረጹ፡ ኣብ ትሕቲኡ ጥሉል ጨርቂ ኣንብሩ። ኣጻብዕኩም ከም መጓፍሕቲ ናብ ውሽጢ ዕጸፉ። ጫፍ ካራ ናብ ታሕቲ፡ ቀረባ እግሪኹም ጌርኩም ተጓዓዙ፡ ብጥቓ ሰብ ክትሓልፉ ከለኹም ድማ “Mes!” በሉ። ፈጺምኩም ካራ ኣብ ማይ ዝመልኦ መሕጸቢ ኣቕሑ ኣይተቐምጡ፡ ሓደ ሰብ ከይረኣዮ ክሕዞ ይኽእል። ካራ ይወድቕ ድዩ? ንድሕሪት ተመለሱ፡ ኣይትሓዝዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.knives.p': "ካራ! ብድሕሪት ይሓልፍ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.s': { m: "ትቖርጽ ኣለኻ። ካራኻ ካብ ሰሌዳ ሓሊፉ ይወድቕ። እንታይ ትገብር?", f: "ትቖርጺ ኣለኺ። ካራኺ ካብ ሰሌዳ ሓሊፉ ይወድቕ። እንታይ ትገብሪ?", x: "ትቖርጹ ኣለኹም። ካራኹም ካብ ሰሌዳ ሓሊፉ ይወድቕ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o1': { m: "ንድሕሪት ተመለስ፡ ክወድቕ ድማ ግደፎ።", f: "ንድሕሪት ተመለሲ፡ ክወድቕ ድማ ግደፍዮ።", x: "ንድሕሪት ተመለሱ፡ ክወድቕ ድማ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o2': { m: "ቀልጢፍካ ብኢድካ ሓዞ።", f: "ቀልጢፍኪ ብኢድኪ ሓዝዮ።", x: "ቀልጢፍኩም ብኢድኩም ሓዝዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.o3': { m: "ብእግሪኻ ዓግቶ።", f: "ብእግሪኺ ዓግትዮ።", x: "ብእግሪኹም ዓግትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.w': { m: "ዝወድቕ ካራ ንኢድካ ወይ ንእግሪኻ ዓሚቝ ክቖርጾ ይኽእል። ኣብ መሬት ዘሎ ካራ ምሕጻብ ጥራይ እዩ ዘድልዮ።", f: "ዝወድቕ ካራ ንኢድኪ ወይ ንእግሪኺ ዓሚቝ ክቖርጾ ይኽእል። ኣብ መሬት ዘሎ ካራ ምሕጻብ ጥራይ እዩ ዘድልዮ።", x: "ዝወድቕ ካራ ንኢድኩም ወይ ንእግሪኹም ዓሚቝ ክቖርጾ ይኽእል። ኣብ መሬት ዘሎ ካራ ምሕጻብ ጥራይ እዩ ዘድልዮ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.rawcooked': "ጥረ፡ ብሱልን ኣለርጂን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rauw': "ጥረ (ዘይበሰለ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaar': "ብሱል (ንምብላዕ ድሉው)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afdekken': "ምሽፋን (ብመኽደን ወይ ፎይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kleurcode': "ኮድ ሕብሪ (ንነፍሲ ወከፍ ዓይነት መግቢ ሓደ ሕብሪ ሰሌዳን ካራን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.allergenenlijst': "ዝርዝር ኣለርጂ (ኣብ ነፍሲ ወከፍ መግቢ እንታይ ከም ዘሎ ይገልጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glutenvrij': "ብዘይ ግሉተን (ግሉተን ዘይብሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.1': "ጥረ ስጋ ኣብ ታሕተዋይ ክፍሊ ፍሪጅ ይኣቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.2': "እቲ ደርሆ በሲሉ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.rawcooked.3': { m: "ኣብቲ ዝሑል ክፍሊ ዘለዉ ኣቕሑ ሸፍኖም።", f: "ኣብቲ ዝሑል ክፍሊ ዘለዉ ኣቕሑ ሸፍንዮም።", x: "ኣብቲ ዝሑል ክፍሊ ዘለዉ ኣቕሑ ሸፍንዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.q': "እዚ ጸብሒ ብዘይ ግሉተን ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a': "ብርግጽ ኣይፈልጥን። ኣብ ዝርዝር ኣለርጂ ክርኢ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked': "ጥረን ድሉውን ፈጺሞም ኣይራኸቡን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.b': { m: "ጥረ ስጋ፡ ዓሳን እንቋቝሖን ጀርምታት ክሕዙ ይኽእሉ። ካብ ንምብላዕ ድሉው ዝኾነ መግቢ ኣርሕቖም። ፍሉይ ሰሌዳን ካራን፡ ወይ ኮድ ሕብሪ ክሽነኻ ተጠቐም፡ ጥረ መግቢ ምስ ተንከፍካ ድማ ኣእዳውካ ተሓጸብ። ኣብ ካልእ መግቢ ከየንጠብጥብ፡ ጥረ ስጋ ኣብ ታሕተዋይ ክፍሊ ፍሪጅ ይኣቱ። መግቢ ሸፍን፡ ዕለት ድማ ጽሓፈሉ። ኣብ ኣለርጂ ንእሽቶ ርዝራዝ እኳ ክኣክል ይኽእል፡ ጽሩይ መሳርሒ ተጠቐም። ቤት መግቢ ኣብ ሓደ መግቢ ኣየኖት ኣለርጂታት ከም ዘለዉ ንጋሻ ክነግር ክኽእል ኣለዎ፡ ዝርዝር ኣለርጂ ርአ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ጥረ ስጋ፡ ዓሳን እንቋቝሖን ጀርምታት ክሕዙ ይኽእሉ። ካብ ንምብላዕ ድሉው ዝኾነ መግቢ ኣርሕቕዮም። ፍሉይ ሰሌዳን ካራን፡ ወይ ኮድ ሕብሪ ክሽነኺ ተጠቐሚ፡ ጥረ መግቢ ምስ ተንከፍኪ ድማ ኣእዳውኪ ተሓጸቢ። ኣብ ካልእ መግቢ ከየንጠብጥብ፡ ጥረ ስጋ ኣብ ታሕተዋይ ክፍሊ ፍሪጅ ይኣቱ። መግቢ ሸፍኒ፡ ዕለት ድማ ጽሓፍሉ። ኣብ ኣለርጂ ንእሽቶ ርዝራዝ እኳ ክኣክል ይኽእል፡ ጽሩይ መሳርሒ ተጠቐሚ። ቤት መግቢ ኣብ ሓደ መግቢ ኣየኖት ኣለርጂታት ከም ዘለዉ ንጋሻ ክነግር ክኽእል ኣለዎ፡ ዝርዝር ኣለርጂ ርኣዪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ጥረ ስጋ፡ ዓሳን እንቋቝሖን ጀርምታት ክሕዙ ይኽእሉ። ካብ ንምብላዕ ድሉው ዝኾነ መግቢ ኣርሕቕዎም። ፍሉይ ሰሌዳን ካራን፡ ወይ ኮድ ሕብሪ ክሽነኹም ተጠቐሙ፡ ጥረ መግቢ ምስ ተንከፍኩም ድማ ኣእዳውኩም ተሓጸቡ። ኣብ ካልእ መግቢ ከየንጠብጥብ፡ ጥረ ስጋ ኣብ ታሕተዋይ ክፍሊ ፍሪጅ ይኣቱ። መግቢ ሸፍኑ፡ ዕለት ድማ ጽሓፉሉ። ኣብ ኣለርጂ ንእሽቶ ርዝራዝ እኳ ክኣክል ይኽእል፡ ጽሩይ መሳርሒ ተጠቐሙ። ቤት መግቢ ኣብ ሓደ መግቢ ኣየኖት ኣለርጂታት ከም ዘለዉ ንጋሻ ክነግር ክኽእል ኣለዎ፡ ዝርዝር ኣለርጂ ርኣዩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.p': "ንጥረ ስጋ ኣየናይ ሰሌዳ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.s': { m: "ጥረ ደርሆ ቆሪጽካ። ቀጺልካ ንሰላጣ ኮሚደረ ክትቆርጽ ኣለካ። እንታይ ትገብር?", f: "ጥረ ደርሆ ቆሪጽኪ። ቀጺልኪ ንሰላጣ ኮሚደረ ክትቆርጺ ኣለኪ። እንታይ ትገብሪ?", x: "ጥረ ደርሆ ቆሪጽኩም። ቀጺልኩም ንሰላጣ ኮሚደረ ክትቆርጹ ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o1': { m: "ጽሩይ ሰሌዳን ጽሩይ ካራን ውሰድ።", f: "ጽሩይ ሰሌዳን ጽሩይ ካራን ውሰዲ።", x: "ጽሩይ ሰሌዳን ጽሩይ ካራን ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o2': { m: "ነቲ ሰሌዳ ብጨርቂ ደምስሶ፡ ቀጽል ድማ።", f: "ነቲ ሰሌዳ ብጨርቂ ደምስስዮ፡ ቀጽሊ ድማ።", x: "ነቲ ሰሌዳ ብጨርቂ ደምስስዎ፡ ቀጽሉ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.o3': { m: "ነቲ ኮሚደረ ኣብቲ ሓደ ሰሌዳ ቁረጾ።", f: "ነቲ ኮሚደረ ኣብቲ ሓደ ሰሌዳ ቁረጽዮ።", x: "ነቲ ኮሚደረ ኣብቲ ሓደ ሰሌዳ ቁረጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.w': "ካብ ጥረ ደርሆ ዝመጹ ጀርምታት ናብ ኮሚደረ ይሰግሩ፡ ሰላጣ ድማ እንደገና ኣይበስልን። ጽሩይ ሰሌዳ ነዚ ይከላኸሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.pass': "ክፍሊ ምሕጻብ ኣቕሑን ፓስን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pass': "ፓስ (ሸሓናት ንኣሳላፊ ዝጽበዩሉ ባንኮ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bon': "ወረቐት ትእዛዝ (ትእዛዝ ካብ ኣሳላፊ ናብ ክሽነ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.spoelkeuken': "ክፍሊ ምሕጻብ ኣቕሑ (ኣቕሑ ዝሕጸበሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vaatwaskorf': "ቅርጫት ማሽን (ናብ ማሽን መሕጸቢት ኣቕሑ ዝኣቱ ቅርጫት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorspoelen': "ኣቐዲምካ ምልቕላቕ (ቅድሚ ማሽን ምልቕላቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.warmhoudlamp': "መውዓዪ መብራህቲ (ንሸሓናት ውዑያት ይሕዞም)", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.1': "ጠረጴዛ ሸሞንተ ኣብ ፓስ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.2': "ክልተ ሓደስቲ ወረቐት ትእዛዝ ይኣትዋ ኣለዋ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.pass.3': { m: "ነቶም ሸሓናት ቅድም ለቕልቖም።", f: "ነቶም ሸሓናት ቅድም ለቕልቕዮም።", x: "ነቶም ሸሓናት ቅድም ለቕልቕዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.q': "ጠረጴዛ ዓሰርተው ክልተ ኣበይ በጺሑ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a': "ኣብ ፓስ ኣሎ። ሕጂ የምጽኦ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass': "ፓስ፡ ሸሓናት ኣይጽበዩን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.b': { m: "ኣብ ፓስ ክሽነ ንኣሳላፊ ሸሓናት የቐምጥ። ውዑይ መግቢ ቀልጢፉ ናብ ጋሻ ክበጽሕ ኣለዎ፡ ስለዚ ሸሓኒ ኣብ ፓስ ነዊሕ ኣይጽበን። ነቲ ወረቐት ትእዛዝ ርአ፡ ቅኑዕ ጠረጴዛ፡ ቅኑዕ መግቢ፡ ጽሩይ ደረት ሸሓኒ? ሽዑ ውሰዶ። ኣብ ክፍሊ ምሕጻብ ኣቕሑ፡ ኣቐዲምካ ለቕልቕ፡ ኩሉ ኣብ ቅርጫታት ኣእቱ፡ እቲ ዝተረፈ ድማ ንማሽን ግደፎ። ማሽን ክሰርሕ ከሎ ኣይትኽፈቶ፡ እቲ ህፋው ኣዝዩ ውዑይ እዩ። ፍርያት ማሽን ክትመልእ ከለኻ ጓንቲ ግበር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ፓስ ክሽነ ንኣሳላፊ ሸሓናት የቐምጥ። ውዑይ መግቢ ቀልጢፉ ናብ ጋሻ ክበጽሕ ኣለዎ፡ ስለዚ ሸሓኒ ኣብ ፓስ ነዊሕ ኣይጽበን። ነቲ ወረቐት ትእዛዝ ርኣዪ፡ ቅኑዕ ጠረጴዛ፡ ቅኑዕ መግቢ፡ ጽሩይ ደረት ሸሓኒ? ሽዑ ውሰድዮ። ኣብ ክፍሊ ምሕጻብ ኣቕሑ፡ ኣቐዲምኪ ለቕልቒ፡ ኩሉ ኣብ ቅርጫታት ኣእትዊ፡ እቲ ዝተረፈ ድማ ንማሽን ግደፍዮ። ማሽን ክሰርሕ ከሎ ኣይትኽፈትዮ፡ እቲ ህፋው ኣዝዩ ውዑይ እዩ። ፍርያት ማሽን ክትመልኢ ከለኺ ጓንቲ ግበሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ፓስ ክሽነ ንኣሳላፊ ሸሓናት የቐምጥ። ውዑይ መግቢ ቀልጢፉ ናብ ጋሻ ክበጽሕ ኣለዎ፡ ስለዚ ሸሓኒ ኣብ ፓስ ነዊሕ ኣይጽበን። ነቲ ወረቐት ትእዛዝ ርኣዩ፡ ቅኑዕ ጠረጴዛ፡ ቅኑዕ መግቢ፡ ጽሩይ ደረት ሸሓኒ? ሽዑ ውሰድዎ። ኣብ ክፍሊ ምሕጻብ ኣቕሑ፡ ኣቐዲምኩም ለቕልቑ፡ ኩሉ ኣብ ቅርጫታት ኣእትዉ፡ እቲ ዝተረፈ ድማ ንማሽን ግደፍዎ። ማሽን ክሰርሕ ከሎ ኣይትኽፈትዎ፡ እቲ ህፋው ኣዝዩ ውዑይ እዩ። ፍርያት ማሽን ክትመልኡ ከለኹም ጓንቲ ግበሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.p': "እዚ ናይ ኣየናይ ጠረጴዛ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.s': { m: "ኣብ ፓስ ክልተ ሸሓናት ኣለዉ። ናይ ኣየናይ ጠረጴዛ ምዃኖም ኣይትፈልጥን። እንታይ ትገብር?", f: "ኣብ ፓስ ክልተ ሸሓናት ኣለዉ። ናይ ኣየናይ ጠረጴዛ ምዃኖም ኣይትፈልጢን። እንታይ ትገብሪ?", x: "ኣብ ፓስ ክልተ ሸሓናት ኣለዉ። ናይ ኣየናይ ጠረጴዛ ምዃኖም ኣይትፈልጡን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o1': { m: "ነቲ ወረቐት ትእዛዝ ርአ፡ ወይ ንሸፍ ሕተቶ።", f: "ነቲ ወረቐት ትእዛዝ ርኣዪ፡ ወይ ንሸፍ ሕተትዮ።", x: "ነቲ ወረቐት ትእዛዝ ርኣዩ፡ ወይ ንሸፍ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o2': { m: "ናብ ዝጽበ ዘሎ ጠረጴዛ ውሰዶም።", f: "ናብ ዝጽበ ዘሎ ጠረጴዛ ውሰድዮም።", x: "ናብ ዝጽበ ዘሎ ጠረጴዛ ውሰድዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.o3': { m: "ካልእ ሰብ ክሳዕ ዝወስዶም ተጸበ።", f: "ካልእ ሰብ ክሳዕ ዝወስዶም ተጸበዪ።", x: "ካልእ ሰብ ክሳዕ ዝወስዶም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.w': "ኣብ ጌጋ ጠረጴዛ ዝበጽሐ ሸሓኒ ክልተ ዝጽበዩ ጋሻን ዝዘሓለ መግብን ማለት እዩ። ሓንቲ ሓጻር ሕቶ ይቀልጥፍ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.bill': "ተኸታተልቲ መግብታትን ሕሳብን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgerecht': "ቀዳማይ መግቢ (እቲ ቅድም ዝቐርብ መግቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdgerecht': "ቀንዲ መግቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nagerecht': "ድሕሪ መግቢ (ጥዑም፡ ዶልቺ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reservering': "ምሕዛእ ቦታ (ኣቐዲሙ ዝተሓዝአ ጠረጴዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pinapparaat': "ማሽን ካርድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.apartbetalen': "በበይኑ ምኽፋል (ነፍሲ ወከፍ ሰብ ናቱ ይኸፍል)", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.1': "ቦታ ሓዚእኩም ዲኹም?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.2': "ብሓባር ዶ ወይስ በበይንኹም ክትከፍሉ ትደልዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.bill.3': "ነቲ ቀንዲ መግቢ ሕጂ የምጽኦ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.q': "በበይንና ክንከፍል ንኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.a': "እወ ብዘይ ጸገም። ማሽን ካርድ የምጽእ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill': { m: "ገንዘብ ኣብ ጠረጴዛ፡ ክልተ ግዜ ቑጸሮ", f: "ገንዘብ ኣብ ጠረጴዛ፡ ክልተ ግዜ ቑጸርዮ", x: "ገንዘብ ኣብ ጠረጴዛ፡ ክልተ ግዜ ቑጸርዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.b': { m: "ጋሻ ክኸፍል ከሎ፡ እቲ መጠን ብንጹር ንገር፡ ነቲ ጋሻ ድማ ማሽን ካርድ ክርኢ ግደፎ። ብጥረ ገንዘብ እንተ ኾይኑ፡ ገንዘብ ክትቅበል ከለኻ ቑጸሮ፡ መልሲ ክትህብ ከለኻ ድማ ከም ብሓድሽ ቑጸሮ። እቲ ገንዘብ ናብ ካሳ ወይ ናብ ቦርሳ ኣሳላፊ ይኣቱ፡ ፈጺሙ ናብ ጁባኻ ኣይኣቱን። ቲፕ (fooi) ናብቲ ትካልካ ዝበሎ ቦታ ይኸይድ፡ ንኣብነት ናብ ሳንዱቕ ቲፕ። ጋሻ ከይከፈለ ከይዱ ድዩ? ኣይትስዓቦ፡ ንሓላፊኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ጋሻ ክኸፍል ከሎ፡ እቲ መጠን ብንጹር ንገሪ፡ ነቲ ጋሻ ድማ ማሽን ካርድ ክርኢ ግደፍዮ። ብጥረ ገንዘብ እንተ ኾይኑ፡ ገንዘብ ክትቅበሊ ከለኺ ቑጸርዮ፡ መልሲ ክትህቢ ከለኺ ድማ ከም ብሓድሽ ቑጸርዮ። እቲ ገንዘብ ናብ ካሳ ወይ ናብ ቦርሳ ኣሳላፊ ይኣቱ፡ ፈጺሙ ናብ ጁባኺ ኣይኣቱን። ቲፕ (fooi) ናብቲ ትካልኪ ዝበሎ ቦታ ይኸይድ፡ ንኣብነት ናብ ሳንዱቕ ቲፕ። ጋሻ ከይከፈለ ከይዱ ድዩ? ኣይትስዓብዮ፡ ንሓላፊኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ጋሻ ክኸፍል ከሎ፡ እቲ መጠን ብንጹር ንገሩ፡ ነቲ ጋሻ ድማ ማሽን ካርድ ክርኢ ግደፍዎ። ብጥረ ገንዘብ እንተ ኾይኑ፡ ገንዘብ ክትቅበሉ ከለኹም ቑጸርዎ፡ መልሲ ክትህቡ ከለኹም ድማ ከም ብሓድሽ ቑጸርዎ። እቲ ገንዘብ ናብ ካሳ ወይ ናብ ቦርሳ ኣሳላፊ ይኣቱ፡ ፈጺሙ ናብ ጁባኹም ኣይኣቱን። ቲፕ (fooi) ናብቲ ትካልኩም ዝበሎ ቦታ ይኸይድ፡ ንኣብነት ናብ ሳንዱቕ ቲፕ። ጋሻ ከይከፈለ ከይዱ ድዩ? ኣይትስዓብዎ፡ ንሓላፊኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.p': "ኣርብዓን ሓሙሽተን ዩሮ እዩ፡ በጃኹም።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.s': { m: "ሓደ ጋሻ ገንዘብ ሂቡካ «ልክዕ እዩ» ይብለካ። ኣይቆጸርካዮን። እንታይ ትገብር?", f: "ሓደ ጋሻ ገንዘብ ሂቡኪ «ልክዕ እዩ» ይብለኪ። ኣይቆጸርክዮን። እንታይ ትገብሪ?", x: "ሓደ ጋሻ ገንዘብ ሂቡኩም «ልክዕ እዩ» ይብለኩም። ኣይቆጸርኩሞን። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.bill.o1': { m: "እቲ ጋሻ ኣብኡ ከሎ ቑጸሮ።", f: "እቲ ጋሻ ኣብኡ ከሎ ቑጸርዮ።", x: "እቲ ጋሻ ኣብኡ ከሎ ቑጸርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o2': { m: "ኣቐምጦ፡ ጸኒሕካ ድማ ቑጸሮ።", f: "ኣቐምጥዮ፡ ጸኒሕኪ ድማ ቑጸርዮ።", x: "ኣቐምጥዎ፡ ጸኒሕኩም ድማ ቑጸርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.o3': { m: "ነቲ ጋሻ እመኖ፡ የቐንየለይ በል።", f: "ነቲ ጋሻ እመንዮ፡ የቐንየለይ በሊ።", x: "ነቲ ጋሻ እመንዎ፡ የቐንየለይ በሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.w': { m: "ጸኒሕካ እንተ ቆጺርካ ገንዘብ እንተ ጎደለ፡ እንታይ ከም ዘጋጠመ ዝኾነ ሰብ ከረጋግጽ ኣይክእልን። ኣብ ጠረጴዛ ምቑጻር ንጋሻን ንዓኻን ይከላኸል።", f: "ጸኒሕኪ እንተ ቆጺርኪ ገንዘብ እንተ ጎደለ፡ እንታይ ከም ዘጋጠመ ዝኾነ ሰብ ከረጋግጽ ኣይክእልን። ኣብ ጠረጴዛ ምቑጻር ንጋሻን ንዓኺን ይከላኸል።", x: "ጸኒሕኩም እንተ ቆጺርኩም ገንዘብ እንተ ጎደለ፡ እንታይ ከም ዘጋጠመ ዝኾነ ሰብ ከረጋግጽ ኣይክእልን። ኣብ ጠረጴዛ ምቑጻር ንጋሻን ንዓኹምን ይከላኸል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.carework': "ክንክን ኣካልን ክንክን ኣብ ገዛን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.washing': "ምሕጻብን ምኽዳንን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.washandje': "ንእሽቶ መሕጸቢ ጨርቂ (ከም ጓንቲ ዝመስል ንእሽቶ ጨርቂ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.douchestoel': "መንበር ሻወር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandenpoetsen': "ኣስናን ምሕጻብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kammen': "ምምሻጥ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheren': "ምልጻይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.steunkous': "ደጋፊ ካልሲ (ንኣእጋር ዝኸውን ጽቡቕ ዝጸቕጥ ካልሲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.1': "እቲ ማይ እኹል ውዑይ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.2': "ገጽኩም ባዕልኹም ክትሕጸቡ ትደልዩ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.washing.3': "ሕጂ ደጋፊ ካልሲኹም ከኽድነኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.q': "ሎሚ ሻወር ክወስድ ኣይደልን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.a': "ጽቡቕ። ኣብ ላቫቦ ክሕግዘኩም ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing': { m: "ቅድም ሕተት፡ ሸፍን፡ ክመርጹ ድማ ግደፎም", f: "ቅድም ሕተቲ፡ ሸፍኒ፡ ክመርጹ ድማ ግደፍዮም", x: "ቅድም ሕተቱ፡ ሸፍኑ፡ ክመርጹ ድማ ግደፍዎም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.b': { m: "ንሓደ ሰብ ምሕጻብ ኣዝዩ ውልቃዊ እዩ። እንታይ ክትገብር ከም ዝኾንካ ንገር፡ ቅድም ድማ ሕተት። ነቶም ዘይትሓጽቦም ዘለኻ ክፍልታት ኣካል ብሽጎማኖ ሸፍኖም። ነቲ ማዕጾ ወይ መጋረጃ ዕጸዎ። ነቲ ተገልጋሊ ክመርጽ ግደፎ፡ ሻወር ወይ ኣብ ላቫቦ ምሕጻብ፡ ኣየናይ ክዳን ከም ዝኽደን ድማ። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፎ፡ ዝደንጎየ እንተ ኾነ እውን። ተገልጋሊ ኣይፋልን ይብል ድዩ? ኣይተገድዶ። ጸኒሕካ ከም ብሓድሽ ፈትን፡ ካልእ ነገር ኣቕርብ፡ ንነርስ ድማ ንገር።", f: "ንሓደ ሰብ ምሕጻብ ኣዝዩ ውልቃዊ እዩ። እንታይ ክትገብሪ ከም ዝኾንኪ ንገሪ፡ ቅድም ድማ ሕተቲ። ነቶም ዘይትሓጽብዮም ዘለኺ ክፍልታት ኣካል ብሽጎማኖ ሸፍንዮም። ነቲ ማዕጾ ወይ መጋረጃ ዕጸውዮ። ነቲ ተገልጋሊ ክመርጽ ግደፍዮ፡ ሻወር ወይ ኣብ ላቫቦ ምሕጻብ፡ ኣየናይ ክዳን ከም ዝኽደን ድማ። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፍዮ፡ ዝደንጎየ እንተ ኾነ እውን። ተገልጋሊ ኣይፋልን ይብል ድዩ? ኣይተገድድዮ። ጸኒሕኪ ከም ብሓድሽ ፈትኒ፡ ካልእ ነገር ኣቕርቢ፡ ንነርስ ድማ ንገሪ።", x: "ንሓደ ሰብ ምሕጻብ ኣዝዩ ውልቃዊ እዩ። እንታይ ክትገብሩ ከም ዝኾንኩም ንገሩ፡ ቅድም ድማ ሕተቱ። ነቶም ዘይትሓጽብዎም ዘለኹም ክፍልታት ኣካል ብሽጎማኖ ሸፍንዎም። ነቲ ማዕጾ ወይ መጋረጃ ዕጸውዎ። ነቲ ተገልጋሊ ክመርጽ ግደፍዎ፡ ሻወር ወይ ኣብ ላቫቦ ምሕጻብ፡ ኣየናይ ክዳን ከም ዝኽደን ድማ። እቲ ተገልጋሊ ገና ክገብሮ ዝኽእል ባዕሉ ክገብሮ ግደፍዎ፡ ዝደንጎየ እንተ ኾነ እውን። ተገልጋሊ ኣይፋልን ይብል ድዩ? ኣይተገድድዎ። ጸኒሕኩም ከም ብሓድሽ ፈትኑ፡ ካልእ ነገር ኣቕርቡ፡ ንነርስ ድማ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.p': "ሎሚ እንታይ ክትክደኑ ትደልዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.s': { m: "ሓንቲ ተገልጋሊት ሎሚ ክትሕጸብ ከም ዘይደለየት ትብል። እንታይ ትገብር?", f: "ሓንቲ ተገልጋሊት ሎሚ ክትሕጸብ ከም ዘይደለየት ትብል። እንታይ ትገብሪ?", x: "ሓንቲ ተገልጋሊት ሎሚ ክትሕጸብ ከም ዘይደለየት ትብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o1': { m: "ተቐበሎ፡ ንነርስ ድማ ንገር።", f: "ተቐበልዮ፡ ንነርስ ድማ ንገሪ።", x: "ተቐበልዎ፡ ንነርስ ድማ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o2': { m: "ብዘየገድስ ሕጸባ፡ ኣብ ዝርዝር ኣሎ።", f: "ብዘየገድስ ሕጸብያ፡ ኣብ ዝርዝር ኣሎ።", x: "ብዘየገድስ ሕጸብዋ፡ ኣብ ዝርዝር ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.o3': { m: "ሕለፎ፡ ገለ ድማ ኣይትበል።", f: "ሕለፍዮ፡ ገለ ድማ ኣይትበሊ።", x: "ሕለፍዎ፡ ገለ ድማ ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.w': "ተገልጋሊት ኣይፋልን ክትብል ትኽእል እያ። ብግዲ ዝወሃብ ክንክን እምነት የጥፍእ። ነርስ ስለምንታይ ከም ዝኾነን እንታይ ክግበር ከም ዝኽእልን ክትርኢ ትኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.observing': "ምዕዛብን ምሕባርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rapporteren': "ጸብጻብ ምጽሓፍ (ዝረኣኻዮ ኣብ ፋይል ክንክን ምጽሓፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgdossier': "ፋይል ክንክን (ብዛዕባ ክንክን ሓደ ተገልጋሊ ዘሎ ኩሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukplek': "ቁስሊ ጸቕጢ (ብነዊሕ ምድቃስ ወይ ኮፍ ምባል ዝመጽእ ቀይሕ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huid': "ቆርበት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.plassen': "ምሻን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vochtlijst': "ዝርዝር ፈሳሲ (ተገልጋሊ ክንደይ ከም ዝሰትይ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.1': "እታ ወይዘሮ ኣብ ተረኽዛ ቀይሕ ቦታ ኣለዋ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.2': "እቲ ኣቦ ሎሚ ውሑድ ሰትዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.observing.3': "ኣብ ፋይል ክንክን እጽሕፎ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.q': "ብዛዕባ ወይዘሮ Jansen ፍሉይ ነገር ኣሎ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.a': "እወ። ሎሚ ዳርጋ ኣይሸነትን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing': { m: "ዝረኣኻዮ ጽሓፍ፡ ዝሓሰብካዮ ኣይኮነን", f: "ዝረኣኽዮ ጽሓፊ፡ ዝሓሰብክዮ ኣይኮነን", x: "ዝረኣኹሞ ጽሓፉ፡ ዝሓሰብኩሞ ኣይኮነን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.b': { m: "ኣብ ፋይል ክንክን እትጽሕፎ፡ እቲ ዝቕጽል ብጻይ ስራሕ የንብቦ። ሓቅታት ጽሓፍ፡ ዝረኣኻዮ፡ ዝሰማዕካዮ ወይ ዝዓቀንካዮ፡ መዓስ ድማ። “Mevrouw is lastig” ዘይኮነስ፡ “Mevrouw wilde niet eten en duwde het bord weg.” ጽሓፍ። ኣብታ ሓንቲ መዓልቲ፡ ብሓጸርቲ ምሉኣት ሓሳባት ጽሓፎ። ብሆላንድኛ ብኸመይ ከም እትጽሕፎ ርግጸኛ ኣይኮንካን? ንነርስ ንገር፡ ብሓባር ድማ ጽሓፍዎ። ንሓደ ሰብ ክትሓጽብ ከለኻ ነቲ ቆርበት ርኣዮ፡ ዘይሃሰስ ቀይሕ ቦታ መጀመርታ ቁስሊ ጸቕጢ ክኸውን ይኽእል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ፋይል ክንክን እትጽሕፍዮ፡ እቲ ዝቕጽል ብጻይ ስራሕ የንብቦ። ሓቅታት ጽሓፊ፡ ዝረኣኽዮ፡ ዝሰማዕክዮ ወይ ዝዓቀንክዮ፡ መዓስ ድማ። “Mevrouw is lastig” ዘይኮነስ፡ “Mevrouw wilde niet eten en duwde het bord weg.” ጽሓፊ። ኣብታ ሓንቲ መዓልቲ፡ ብሓጸርቲ ምሉኣት ሓሳባት ጽሓፍዮ። ብሆላንድኛ ብኸመይ ከም እትጽሕፍዮ ርግጸኛ ኣይኮንክን? ንነርስ ንገሪ፡ ብሓባር ድማ ጽሓፍዎ። ንሓደ ሰብ ክትሓጽቢ ከለኺ ነቲ ቆርበት ርኣይዮ፡ ዘይሃሰስ ቀይሕ ቦታ መጀመርታ ቁስሊ ጸቕጢ ክኸውን ይኽእል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ፋይል ክንክን እትጽሕፍዎ፡ እቲ ዝቕጽል ብጻይ ስራሕ የንብቦ። ሓቅታት ጽሓፉ፡ ዝረኣኹሞ፡ ዝሰማዕኩሞ ወይ ዝዓቀንኩሞ፡ መዓስ ድማ። “Mevrouw is lastig” ዘይኮነስ፡ “Mevrouw wilde niet eten en duwde het bord weg.” ጽሓፉ። ኣብታ ሓንቲ መዓልቲ፡ ብሓጸርቲ ምሉኣት ሓሳባት ጽሓፍዎ። ብሆላንድኛ ብኸመይ ከም እትጽሕፍዎ ርግጸኛ ኣይኮንኩምን? ንነርስ ንገሩ፡ ብሓባር ድማ ጽሓፍዎ። ንሓደ ሰብ ክትሓጽቡ ከለኹም ነቲ ቆርበት ርኣይዎ፡ ዘይሃሰስ ቀይሕ ቦታ መጀመርታ ቁስሊ ጸቕጢ ክኸውን ይኽእል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.observing.p': "ዝረኣኹዎ እጽሕፍ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.s': { m: "ሓንቲ ተገልጋሊት ኣብ ግዜ ምሕጻብ ተቖጢዓ። ኣብቲ ፋይል ክትጽሕፎ ኣለካ። እንታይ ትገብር?", f: "ሓንቲ ተገልጋሊት ኣብ ግዜ ምሕጻብ ተቖጢዓ። ኣብቲ ፋይል ክትጽሕፍዮ ኣለኪ። እንታይ ትገብሪ?", x: "ሓንቲ ተገልጋሊት ኣብ ግዜ ምሕጻብ ተቖጢዓ። ኣብቲ ፋይል ክትጽሕፍዎ ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o1': { m: "እንታይ ከም ዝበለትን ዝገበረትን፡ መዓስ ድማ ጽሓፍ።", f: "እንታይ ከም ዝበለትን ዝገበረትን፡ መዓስ ድማ ጽሓፊ።", x: "እንታይ ከም ዝበለትን ዝገበረትን፡ መዓስ ድማ ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o2': { m: "“ከም ወትሩ ሸጋሪት ወይዘሮ።” ጽሓፍ።", f: "“ከም ወትሩ ሸጋሪት ወይዘሮ።” ጽሓፊ።", x: "“ከም ወትሩ ሸጋሪት ወይዘሮ።” ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.o3': { m: "ገለ ኣይትጽሓፍ፡ ንቡር እዩ።", f: "ገለ ኣይትጽሓፊ፡ ንቡር እዩ።", x: "ገለ ኣይትጽሓፉ፡ ንቡር እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.w': "ሓቅታት ንዝቕጽል ብጻይ ስራሕን ንነርስን ስጉምቲ ክወስዱ ይሕግዙ። ርእይቶ እንታይ ከም ዘጋጠመ ኣይገልጽን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.homecare': "ክንክን ኣብ ገዛ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.thuiszorg': "ክንክን ኣብ ገዛ (ኣብ ናይ ባዕሉ ገዛ ተገልጋሊ ዝወሃብ ክንክን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sleutelkluis': "ሳንዱቕ መፍትሕ (ኮድ ዘለዎ ንእሽቶ ሳንዱቕ፡ መፍትሕ ገዛ ኣብ ውሽጡ ዘሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgplan': "ትልሚ ክንክን (ተገልጋሊ እንታይ ክንክን ከም ዝረኽብን ብኸመይን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wijkverpleegkundige': "ነርስ ከባቢ (ነርስ ናይ ጉጅለ ክንክን ኣብ ገዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mantelzorger': "ኣላዪ ስድራ (ንተገልጋሊ ዝኣሊ ቤተሰብ ወይ ዓርኪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmknop': "መጠወቒ ሓገዝ (ተገልጋሊ ሓገዝ ንምጽዋዕ ዝሕዞ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.1': "ቅድም ደወል እወቕዕ። ድሕሪኡ መፍትሕ እወስድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.2': "ኣብ ትልሚ ክንክን እንታይ ተጻሒፉ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.homecare.3': "ሎሚ ርብዒ ሰዓት ክድንጒ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.q': "መን ኢዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a': "ደሓን ሓዲርኩም፡ ክንክን ኣብ ገዛ እየ። ክኣቱ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare': "ኣብ ገዛ ካልእ ሰብ ጋሻ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.b': { m: "ኣብ ክንክን ኣብ ገዛ፡ ኣብ ናይ ባዕሉ ገዛ ተገልጋሊ ትሰርሕ። ኣብኡ ጋሻ ኢኻ፡ መፍትሕ ሒዝካ እንተ ኾንካ እውን ደወል ውቕዕ፡ መን ምዃንካ ድማ ንገር። ኮድ ሳንዱቕ መፍትሕ ምስጢር እዩ። ካልኦት ኣብ ዝርእይዎ ቦታ ፈጺምካ ኣይትጽሓፎ፡ ነቲ ሳንዱቕ መፍትሕ ድማ ኩሉ ግዜ መሊስካ ዕጸዎ። ነቲ ትልሚ ክንክን ተኸተሎ፡ እትገብሮ ኣብኡ ተጻሒፉ ኣሎ። ገለ ፍሉይ ነገር ኣሎ ድዩ፡ ወይስ እቲ ተገልጋሊ ማዕጾ ኣይከፍትን ድዩ? ብቐሊሉ ኣይትኺድ። ናብ ጉጅለካ ወይ ናብ ነርስ ከባቢ ደውል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ክንክን ኣብ ገዛ፡ ኣብ ናይ ባዕሉ ገዛ ተገልጋሊ ትሰርሒ። ኣብኡ ጋሻ ኢኺ፡ መፍትሕ ሒዝኪ እንተ ኾንኪ እውን ደወል ውቕዒ፡ መን ምዃንኪ ድማ ንገሪ። ኮድ ሳንዱቕ መፍትሕ ምስጢር እዩ። ካልኦት ኣብ ዝርእይዎ ቦታ ፈጺምኪ ኣይትጽሓፍዮ፡ ነቲ ሳንዱቕ መፍትሕ ድማ ኩሉ ግዜ መሊስኪ ዕጸውዮ። ነቲ ትልሚ ክንክን ተኸተልዮ፡ እትገብርዮ ኣብኡ ተጻሒፉ ኣሎ። ገለ ፍሉይ ነገር ኣሎ ድዩ፡ ወይስ እቲ ተገልጋሊ ማዕጾ ኣይከፍትን ድዩ? ብቐሊሉ ኣይትኺዲ። ናብ ጉጅለኪ ወይ ናብ ነርስ ከባቢ ደውሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ክንክን ኣብ ገዛ፡ ኣብ ናይ ባዕሉ ገዛ ተገልጋሊ ትሰርሑ። ኣብኡ ጋሻ ኢኹም፡ መፍትሕ ሒዝኩም እንተ ኾንኩም እውን ደወል ውቕዑ፡ መን ምዃንኩም ድማ ንገሩ። ኮድ ሳንዱቕ መፍትሕ ምስጢር እዩ። ካልኦት ኣብ ዝርእይዎ ቦታ ፈጺምኩም ኣይትጽሓፍዎ፡ ነቲ ሳንዱቕ መፍትሕ ድማ ኩሉ ግዜ መሊስኩም ዕጸውዎ። ነቲ ትልሚ ክንክን ተኸተልዎ፡ እትገብርዎ ኣብኡ ተጻሒፉ ኣሎ። ገለ ፍሉይ ነገር ኣሎ ድዩ፡ ወይስ እቲ ተገልጋሊ ማዕጾ ኣይከፍትን ድዩ? ብቐሊሉ ኣይትኺዱ። ናብ ጉጅለኩም ወይ ናብ ነርስ ከባቢ ደውሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.p': "ደሓን ሓዲርኩም፡ ካብ ክንክን ኣብ ገዛ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.s': { m: "ደወል ወቒዕካ። እታ ተገልጋሊት ኣይከፈተትን። መኪናኣ ኣብኡ ኣላ። እንታይ ትገብር?", f: "ደወል ወቒዕኪ። እታ ተገልጋሊት ኣይከፈተትን። መኪናኣ ኣብኡ ኣላ። እንታይ ትገብሪ?", x: "ደወል ወቒዕኩም። እታ ተገልጋሊት ኣይከፈተትን። መኪናኣ ኣብኡ ኣላ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o1': { m: "ናብ ጉጅለካ ደውል፡ ተጸበ ድማ።", f: "ናብ ጉጅለኪ ደውሊ፡ ተጸበዪ ድማ።", x: "ናብ ጉጅለኩም ደውሉ፡ ተጸበዩ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o2': { m: "ናብታ ቀጻሊት ተገልጋሊት ኪድ።", f: "ናብታ ቀጻሊት ተገልጋሊት ኪዲ።", x: "ናብታ ቀጻሊት ተገልጋሊት ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.o3': { m: "ሓንሳብ ደጊምካ ደወል ውቕዕ፡ ድሕሪኡ ኪድ።", f: "ሓንሳብ ደጊምኪ ደወል ውቕዒ፡ ድሕሪኡ ኪዲ።", x: "ሓንሳብ ደጊምኩም ደወል ውቕዑ፡ ድሕሪኡ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.w': { m: "እታ ተገልጋሊት ወዲቓ ወይ ሓሚማ ክትከውን ትኽእል። ጉጅለካ እንታይ ከም ዝግበርን መን መፍትሕ ከም ዘለዎን ይፈልጥ።", f: "እታ ተገልጋሊት ወዲቓ ወይ ሓሚማ ክትከውን ትኽእል። ጉጅለኪ እንታይ ከም ዝግበርን መን መፍትሕ ከም ዘለዎን ይፈልጥ።", x: "እታ ተገልጋሊት ወዲቓ ወይ ሓሚማ ክትከውን ትኽእል። ጉጅለኩም እንታይ ከም ዝግበርን መን መፍትሕ ከም ዘለዎን ይፈልጥ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.liftaids': "መሳርሒታት ምልዓልን ድሕንነትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glijlaken': "መሸርተቲ ኣንሶላ (ንተገልጋሊ ኣብ ዓራት ንምንቅስቓስ ዝሽሙጥ ኣንሶላ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tilband': "መልዓሊ ጨርቂ (ንመልዓሊት ማሽን ኣብ ትሕቲ ተገልጋሊ ዝኣቱ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stalift': "መትንሲኢት ማሽን (ተገልጋሊ ደው ክብል እትሕግዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkhoogte': "ቁመት ስራሕ (ዓራት ኣብ ቁመት ሕቘኻ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedhek': "መከላኸሊ ዓራት (ሓጺን ኣብ ጎኒ ዓራት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.transferplank': "መሰጋገሪ ሰሌዳ (ካብ ዓራት ናብ መንበር ንምሽርታት ዝኸውን ሰሌዳ)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    's.liftaids.1': { m: "ነቲ ዓራት ኣብ ቁመት ስራሕ ኣቐምጦ።", f: "ነቲ ዓራት ኣብ ቁመት ስራሕ ኣቐምጥዮ።", x: "ነቲ ዓራት ኣብ ቁመት ስራሕ ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.2': "ዓረብያ ስንኩላን ፍረን ተገይሩላ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.liftaids.3': "እዚ ብኽልተ ሰባት ኢና ንገብሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.q': { m: "ነታ ወይዘሮ በይንኻ ክትግልብጣ ትኽእል ዶ?", f: "ነታ ወይዘሮ በይንኺ ክትግልብጥያ ትኽእሊ ዶ?", x: "ነታ ወይዘሮ በይንኹም ክትግልብጥዋ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.a': "ብመሸርተቲ ኣንሶላ እኽእል እየ። ሕጂ የምጽኦ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids': "እቲ መሳርሒ የልዕል", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.b': { m: "መልዓሊት ማሽን ቅድሚ ምጥቃምካ ኣረጋግጻ፡ ባትሪ ቻርጅ ኣለዋ ድዩ፡ መልዓሊ ጨርቂ ቅኑዕ ዓቐን ድዩ፡ ዘይተቐደደ ድዩ? ኣብ ዓራትን ዓረብያ ስንኩላንን ፍረን ግበር። ከይትደንን፡ ነቲ ዓራት ናብ ቁመት ሕቘኻ ኣምጽኦ። ነቲ ተገልጋሊ ነፍሲ ወከፍ ስጉምቲ ንገሮ። ተገልጋሊ ኣየናይ መሳርሒ ከም ዘድልዮ ኣብ ትልሚ ክንክን ተጻሒፉ ኣሎ። መሳርሒ ተበላሽዩ ወይ ጠፊኡ ድዩ? ብኻልእ መገዲ ኣይትፈትን፡ ሕበሮ፡ ንብጻይ ስራሕ ድማ ክሕግዘኻ ሕተቶ። መሳርሒ ብኸመይ ከም ዝሰርሕ ኣየርኣዩኻን? ቅድሚ ምጅማርካ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መልዓሊት ማሽን ቅድሚ ምጥቃምኪ ኣረጋግጽያ፡ ባትሪ ቻርጅ ኣለዋ ድዩ፡ መልዓሊ ጨርቂ ቅኑዕ ዓቐን ድዩ፡ ዘይተቐደደ ድዩ? ኣብ ዓራትን ዓረብያ ስንኩላንን ፍረን ግበሪ። ከይትደንኒ፡ ነቲ ዓራት ናብ ቁመት ሕቘኺ ኣምጽእዮ። ነቲ ተገልጋሊ ነፍሲ ወከፍ ስጉምቲ ንገርዮ። ተገልጋሊ ኣየናይ መሳርሒ ከም ዘድልዮ ኣብ ትልሚ ክንክን ተጻሒፉ ኣሎ። መሳርሒ ተበላሽዩ ወይ ጠፊኡ ድዩ? ብኻልእ መገዲ ኣይትፈትኒ፡ ሕበርዮ፡ ንብጻይ ስራሕ ድማ ክሕግዘኺ ሕተትዮ። መሳርሒ ብኸመይ ከም ዝሰርሕ ኣየርኣዩኽን? ቅድሚ ምጅማርኪ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መልዓሊት ማሽን ቅድሚ ምጥቃምኩም ኣረጋግጽዋ፡ ባትሪ ቻርጅ ኣለዋ ድዩ፡ መልዓሊ ጨርቂ ቅኑዕ ዓቐን ድዩ፡ ዘይተቐደደ ድዩ? ኣብ ዓራትን ዓረብያ ስንኩላንን ፍረን ግበሩ። ከይትደንኑ፡ ነቲ ዓራት ናብ ቁመት ሕቘኹም ኣምጽእዎ። ነቲ ተገልጋሊ ነፍሲ ወከፍ ስጉምቲ ንገርዎ። ተገልጋሊ ኣየናይ መሳርሒ ከም ዘድልዮ ኣብ ትልሚ ክንክን ተጻሒፉ ኣሎ። መሳርሒ ተበላሽዩ ወይ ጠፊኡ ድዩ? ብኻልእ መገዲ ኣይትፈትኑ፡ ሕበርዎ፡ ንብጻይ ስራሕ ድማ ክሕግዘኹም ሕተትዎ። መሳርሒ ብኸመይ ከም ዝሰርሕ ኣየርኣዩኹምን? ቅድሚ ምጅማርኩም ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.liftaids.p': "እቲ መልዓሊ ጨርቂ ተበላሽዩ። ካልእ ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.s': { m: "ነታ መልዓሊት ማሽን ክትጥቀመላ ትደሊ። እቲ መልዓሊ ጨርቂ ንእሽቶ ቅዳድ ኣለዎ። እንታይ ትገብር?", f: "ነታ መልዓሊት ማሽን ክትጥቀምላ ትደልዪ። እቲ መልዓሊ ጨርቂ ንእሽቶ ቅዳድ ኣለዎ። እንታይ ትገብሪ?", x: "ነታ መልዓሊት ማሽን ክትጥቀሙላ ትደልዩ። እቲ መልዓሊ ጨርቂ ንእሽቶ ቅዳድ ኣለዎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o1': { m: "ካልእ መልዓሊ ጨርቂ ውሰድ፡ ነቲ ቅዳድ ድማ ሕበሮ።", f: "ካልእ መልዓሊ ጨርቂ ውሰዲ፡ ነቲ ቅዳድ ድማ ሕበርዮ።", x: "ካልእ መልዓሊ ጨርቂ ውሰዱ፡ ነቲ ቅዳድ ድማ ሕበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o2': { m: "ተጠቐመሉ፡ እቲ ቅዳድ ኣዝዩ ንእሽቶ እዩ።", f: "ተጠቐምሉ፡ እቲ ቅዳድ ኣዝዩ ንእሽቶ እዩ።", x: "ተጠቐሙሉ፡ እቲ ቅዳድ ኣዝዩ ንእሽቶ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.o3': { m: "ኣብቲ መልዓሊ ጨርቂ ቋጸራ ግበረሉ።", f: "ኣብቲ መልዓሊ ጨርቂ ቋጸራ ግበርሉ።", x: "ኣብቲ መልዓሊ ጨርቂ ቋጸራ ግበሩሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.w': "ንእሽቶ ቅዳድ ብክብደት ሰብ ክዓቢ ይኽእል። ካብ መልዓሊት ማሽን ምውዳቕ ንተገልጋሊ ብጽኑዕ ክጎድኦ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'u.shopfloor': "ካሳ፡ ክዝናን ምዕጻውን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.returns': "ምምላስ ኣቕሓን ካሳን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugbrengen': "ምምላስ (ኣቕሓ ናብ ድኳን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantenkaart': "ካርድ ዓሚል (ነጥብታት ንምእካብ ዝኸውን ካርድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.statiegeld': "ገንዘብ ጥርሙዝ (ንባዶ ጥርሙዝ ወይ ታኒካ ዝምለስ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassalade': "መሳቢ ካሳ (ገንዘብ ዘለዎ መሳቢ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.streepjescode': "ባርኮድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tegoedbon': "ቮቸር (ጸኒሕካ ኣብቲ ድኳን እትጥቀመሉ ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.1': "ብካርድ ዓሚል ነጥብታት ትእክቡ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.2': "እቲ ባርኮድ ኣይሰርሕን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.returns.3': "ገንዘብኩም ክምለሰኩም ዶ ትደልዩ ወይስ ቮቸር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.q': "ነዚ ማልያ ክመልሶ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.a': "ይከኣል እዩ። ገና ቅብሊት ኣለኩም ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns': { m: "ምምላስ፡ ሕግታት ድኳን ተኸተል", f: "ምምላስ፡ ሕግታት ድኳን ተኸተሊ", x: "ምምላስ፡ ሕግታት ድኳን ተኸተሉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.b': { m: "ነፍሲ ወከፍ ድኳን ንምምላስ ናይ ባዕሉ ሕግታት ኣለዎ፡ ክንደይ መዓልቲ፡ ብቕብሊት ወይ ብዘይ ቅብሊት፡ ገንዘብ ምምላስ ወይ ቮቸር። ተማሃሮም፡ ንነፍሲ ወከፍ ዓሚል ድማ ተኸተሎም። ርግጸኛ ኣይኮንካን? ንብጻይ ስራሕ ወይ ንሓላፊ ሕተት፡ በይንኻ ድማ ኣይትወስን። ኣብ መወዳእታ ፈረቓኻ፡ መሳቢ ካሳኻ ቑጸሮ፡ ድኳንካ ከምኡ እንተ ገይሩ ምስ ብጻይ ስራሕ። ፈጺምካ ንዓኻ ካብ ካሳ ገንዘብ ኣይትውሰድ፡ ንቑሩብ ግዜ ንምልቃሕ እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ነፍሲ ወከፍ ድኳን ንምምላስ ናይ ባዕሉ ሕግታት ኣለዎ፡ ክንደይ መዓልቲ፡ ብቕብሊት ወይ ብዘይ ቅብሊት፡ ገንዘብ ምምላስ ወይ ቮቸር። ተማሃርዮም፡ ንነፍሲ ወከፍ ዓሚል ድማ ተኸተልዮም። ርግጸኛ ኣይኮንክን? ንብጻይ ስራሕ ወይ ንሓላፊ ሕተቲ፡ በይንኺ ድማ ኣይትወስኒ። ኣብ መወዳእታ ፈረቓኺ፡ መሳቢ ካሳኺ ቑጸርዮ፡ ድኳንኪ ከምኡ እንተ ገይሩ ምስ ብጻይ ስራሕ። ፈጺምኪ ንዓኺ ካብ ካሳ ገንዘብ ኣይትውሰዲ፡ ንቑሩብ ግዜ ንምልቃሕ እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ነፍሲ ወከፍ ድኳን ንምምላስ ናይ ባዕሉ ሕግታት ኣለዎ፡ ክንደይ መዓልቲ፡ ብቕብሊት ወይ ብዘይ ቅብሊት፡ ገንዘብ ምምላስ ወይ ቮቸር። ተማሃርዎም፡ ንነፍሲ ወከፍ ዓሚል ድማ ተኸተልዎም። ርግጸኛ ኣይኮንኩምን? ንብጻይ ስራሕ ወይ ንሓላፊ ሕተቱ፡ በይንኹም ድማ ኣይትወስኑ። ኣብ መወዳእታ ፈረቓኹም፡ መሳቢ ካሳኹም ቑጸርዎ፡ ድኳንኩም ከምኡ እንተ ገይሩ ምስ ብጻይ ስራሕ። ፈጺምኩም ንዓኹም ካብ ካሳ ገንዘብ ኣይትውሰዱ፡ ንቑሩብ ግዜ ንምልቃሕ እውን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.p': "ንሓላፊ ድኳን ክሓቶ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.s': { m: "ሓንቲ ዓሚል ንጫማ ገንዘብ ክምለሳ ትደሊ። ቅብሊት የብላን። ነቲ ሕጊ ኣይትፈልጦን። እንታይ ትገብር?", f: "ሓንቲ ዓሚል ንጫማ ገንዘብ ክምለሳ ትደሊ። ቅብሊት የብላን። ነቲ ሕጊ ኣይትፈልጥዮን። እንታይ ትገብሪ?", x: "ሓንቲ ዓሚል ንጫማ ገንዘብ ክምለሳ ትደሊ። ቅብሊት የብላን። ነቲ ሕጊ ኣይትፈልጥዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o1': { m: "እንታይ ክግበር ከም ዘለዎ ንሓላፊ ሕተቶ።", f: "እንታይ ክግበር ከም ዘለዎ ንሓላፊ ሕተትዮ።", x: "እንታይ ክግበር ከም ዘለዎ ንሓላፊ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o2': { m: "ገንዘባ መልሰላ፡ ሕያወይ እያ።", f: "ገንዘባ መልስላ፡ ሕያወይ እያ።", x: "ገንዘባ መልሱላ፡ ሕያወይ እያ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.o3': { m: "ኣይፋልን በላ፡ ስጐጓ ድማ።", f: "ኣይፋልን በልያ፡ ስጐጕያ ድማ።", x: "ኣይፋልን በልዋ፡ ስጐጕዋ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.w': { m: "ሓላፊ ነቲ ሕግታት ይፈልጥ፡ ክውስን ድማ ይኽእል። ሽዑ እታ ዓሚል ፍትሓዊ መልሲ ትረኽብ፡ ንስኻ ድማ ተሓታቲ ኣይኮንካን።", f: "ሓላፊ ነቲ ሕግታት ይፈልጥ፡ ክውስን ድማ ይኽእል። ሽዑ እታ ዓሚል ፍትሓዊ መልሲ ትረኽብ፡ ንስኺ ድማ ተሓታቲ ኣይኮንክን።", x: "ሓላፊ ነቲ ሕግታት ይፈልጥ፡ ክውስን ድማ ይኽእል። ሽዑ እታ ዓሚል ፍትሓዊ መልሲ ትረኽብ፡ ንስኹም ድማ ተሓታቲ ኣይኮንኩምን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.facing': "ኣቕሑ ምስራዕን ዝሑል ፍርያትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.facen': "ኣቕሑ ናብ ቅድሚት ምስሓብ (ፍርያት ናብ ቅድሚት ምስሓብ፡ ኤቲኬት ናብ ቅድሚት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afprijzen': "ዋጋ ምንካይ (ዝተሓተ ዋጋ ምሃብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.koelvak': "ዝሑል መደርደሪ (ኣብ ድኳን ዘሎ ዝሑል መደርደሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.diepvries': "ፍሪዘር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpakken': "ምፍታሕ (ኣቕሑ ካብ ካርቶን ምውጻእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schapkaartje': "ናይ ዋጋ ወረቐት መደርደሪ (ኣብ መደርደሪ ዘሎ ካርድ ዋጋ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.1': "ቅድም እቲ ዝሑል መደርደሪ፡ ድሕሪኡ እቲ ዝተረፈ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.2': { m: "ኩሉ ጽፉፍ ጌርካ ናብ ቅድሚት ኣቐምጦ።", f: "ኩሉ ጽፉፍ ጌርኪ ናብ ቅድሚት ኣቐምጥዮ።", x: "ኩሉ ጽፉፍ ጌርኩም ናብ ቅድሚት ኣቐምጥዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.facing.3': { m: "ናይ ሎሚ ፍርያት ዋጋኦም ኣንክዮ።", f: "ናይ ሎሚ ፍርያት ዋጋኦም ኣንክይዮ።", x: "ናይ ሎሚ ፍርያት ዋጋኦም ኣንክይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.q': { m: "ዝሑል መደርደሪ ወዲእካዮ ዲኻ?", f: "ዝሑል መደርደሪ ወዲእክዮ ዲኺ?", x: "ዝሑል መደርደሪ ወዲእኩሞ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a': "ዳርጋ። ገና ኣቕሑ ናብ ቅድሚት ክስሕብ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing': "ዝሑል ቅድም፡ መደርደሪ ድማ ምሉእ ይመስል", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.b': { m: "ዝሑልን ዝደስከለን ፍርያት ቅድሚ ኩሉ ነገር ናብ ፍሪጅ ወይ ፍሪዘር ይኣትዉ። ነዊሕ ግዜ ኣብ ሙቐት ክጸንሑ ኣይፍቀድን። ድሕሪኡ እቲ ዝተረፈ። ኣቕሑ ናብ ቅድሚት ምስሓብ ማለት፡ ፍርያት ናብ ቅድሚት ምስሓብ፡ ኤቲኬት ናብ ዓሚል ጠውዩ። ሽዑ እቲ መደርደሪ ምሉእን ጽፉፍን ይመስል። ነቲ ናይ ዋጋ ወረቐት ኣረጋግጽ፡ እቲ ዋጋ ነዚ ፍርያት ቅኑዕ ድዩ? ካርቶናት ክትከፍት ከለኻ፡ ካብ ኣካልካ ርሒቕካ ቁረጽ፡ ኣዝዩ ዓሚቝ ድማ ኣይትቑረጽ፡ ነቲ ፍርያት ክትጎድኦ ትኽእል ኢኻ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ዝሑልን ዝደስከለን ፍርያት ቅድሚ ኩሉ ነገር ናብ ፍሪጅ ወይ ፍሪዘር ይኣትዉ። ነዊሕ ግዜ ኣብ ሙቐት ክጸንሑ ኣይፍቀድን። ድሕሪኡ እቲ ዝተረፈ። ኣቕሑ ናብ ቅድሚት ምስሓብ ማለት፡ ፍርያት ናብ ቅድሚት ምስሓብ፡ ኤቲኬት ናብ ዓሚል ጠውዩ። ሽዑ እቲ መደርደሪ ምሉእን ጽፉፍን ይመስል። ነቲ ናይ ዋጋ ወረቐት ኣረጋግጺ፡ እቲ ዋጋ ነዚ ፍርያት ቅኑዕ ድዩ? ካርቶናት ክትከፍቲ ከለኺ፡ ካብ ኣካልኪ ርሒቕኪ ቁረጺ፡ ኣዝዩ ዓሚቝ ድማ ኣይትቑረጺ፡ ነቲ ፍርያት ክትጎድእዮ ትኽእሊ ኢኺ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ዝሑልን ዝደስከለን ፍርያት ቅድሚ ኩሉ ነገር ናብ ፍሪጅ ወይ ፍሪዘር ይኣትዉ። ነዊሕ ግዜ ኣብ ሙቐት ክጸንሑ ኣይፍቀድን። ድሕሪኡ እቲ ዝተረፈ። ኣቕሑ ናብ ቅድሚት ምስሓብ ማለት፡ ፍርያት ናብ ቅድሚት ምስሓብ፡ ኤቲኬት ናብ ዓሚል ጠውዩ። ሽዑ እቲ መደርደሪ ምሉእን ጽፉፍን ይመስል። ነቲ ናይ ዋጋ ወረቐት ኣረጋግጹ፡ እቲ ዋጋ ነዚ ፍርያት ቅኑዕ ድዩ? ካርቶናት ክትከፍቱ ከለኹም፡ ካብ ኣካልኩም ርሒቕኩም ቁረጹ፡ ኣዝዩ ዓሚቝ ድማ ኣይትቑረጹ፡ ነቲ ፍርያት ክትጎድእዎ ትኽእሉ ኢኹም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.p': "ቅድም ዝሑል ፍርያት፡ ድሕሪኡ እቲ ዝተረፈ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.s': { m: "ጸባ ዘለዎ ፓለትን ቺፕስ ዘለዎ ፓለትን ይመጹ። በይንኻ ኢኻ። እንታይ ትገብር?", f: "ጸባ ዘለዎ ፓለትን ቺፕስ ዘለዎ ፓለትን ይመጹ። በይንኺ ኢኺ። እንታይ ትገብሪ?", x: "ጸባ ዘለዎ ፓለትን ቺፕስ ዘለዎ ፓለትን ይመጹ። በይንኹም ኢኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o1': { m: "ቅድም ነቲ ጸባ ናብ ፍሪጅ ኣእትዎ።", f: "ቅድም ነቲ ጸባ ናብ ፍሪጅ ኣእትውዮ።", x: "ቅድም ነቲ ጸባ ናብ ፍሪጅ ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o2': { m: "ብቺፕስ ጀምር፡ ፈኲሶም እዮም።", f: "ብቺፕስ ጀምሪ፡ ፈኲሶም እዮም።", x: "ብቺፕስ ጀምሩ፡ ፈኲሶም እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.o3': { m: "ብጻይ ስራሕ ክሳዕ ዝመጽእ ክልቲኦም ግደፎም።", f: "ብጻይ ስራሕ ክሳዕ ዝመጽእ ክልቲኦም ግደፍዮም።", x: "ብጻይ ስራሕ ክሳዕ ዝመጽእ ክልቲኦም ግደፍዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.w': "ነዊሕ ግዜ ኣብ ሙቐት ዝጸንሐ ጸባ ንዓማዊል ከሕምም ይኽእል፡ ክድርበ ድማ ኣለዎ። ቺፕስ ክጽበ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.shrink': "ጉድኣትን ስርቅን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.derving': "ክሳራ ኣቕሑ (ድኳን ዘጥፍኦ፡ ዝተሰብረ፡ ዝኣረገ ወይ ዝተሰርቀ ፍርያት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afschrijven': "ከም ክሳራ ምምዝጋብ (ፍርያት ከም ዝጠፍአ ምምዝጋብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsaankoop': "ዕድጊ ሰራሕተኛ (ኣብ ናይ ባዕልኻ ድኳን እትዕድጎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tassencontrole': "ምፍታሽ ቦርሳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kassamedewerker': "ሰራሕተኛ ካሳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.winkelwagen': "ዓረብያ ድኳን", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.1': "እዚ ጥርሙዝ ተሰይሩ እዩ። ከም ክሳራ እምዝግቦ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.2': "ዕድጊ ናተይ ኣብ ካሳ ናይ ብጻይ ስራሕ እኸፍሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shrink.3': "ኣብ መውጽኢ ምሉእ ዓረብያ ድኳን ደው ኢሉ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.q': { m: "ቦርሳኻ ቁሩብ ክርእዮ ይኽእል ዶ?", f: "ቦርሳኺ ቁሩብ ክርእዮ ይኽእል ዶ?", x: "ቦርሳኹም ቁሩብ ክርእዮ ይኽእል ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a': "እወ ብዘይ ጸገም። እንሆ ቅብሊተይ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink': { m: "ናይ ባዕልኻ ዕድጊ፡ ከም ዓሚል ክፈል", f: "ናይ ባዕልኺ ዕድጊ፡ ከም ዓሚል ክፈሊ", x: "ናይ ባዕልኹም ዕድጊ፡ ከም ዓሚል ክፈሉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.b': { m: "ድኳን ብዝተሰብረ ፍርያት፡ ብዝኣረገ ፍርያትን ብስርቅን ብዙሕ የጥፍእ። ውሑድ ክኸውን ሓግዝ። ዝተሰብረ ወይ ዝተጎድአ ፍርያት? ናብ መደርደሪ ኣይትመልሶ፡ ከምቲ ድኳንካ ዝገብሮ ከም ክሳራ መዝግቦ። ናይ ባዕልኻ ዕድጊ፡ ከም ኩሉ ዓሚል ኣብ ካሳ ክፈል፡ ቅብሊት ድማ ዕቀብ። ኣብ ብዙሓት ድኳውር ናይ ባዕልኻ ዕድጊ ባዕልኻ ኣብ ካሳ ከተሕልፎ ኣይፍቀደልካን፡ ብጻይ ስራሕ እዩ ዝገብሮ። ፈጺምካ ከይከፈልካ ፍርያት ኣይትብላዕ ወይ ኣይትውሰድ፡ ንእሽቶ እኳ እንተ ኾነ። ገለ ድኳውር ቦርሳታት ይፍትሹ፡ እዚ ሕጊ ድኳን እዩ፡ ኣብ ልዕሌኻ ዘሎ ዘይምእማን ዘርኢ ምልክት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ድኳን ብዝተሰብረ ፍርያት፡ ብዝኣረገ ፍርያትን ብስርቅን ብዙሕ የጥፍእ። ውሑድ ክኸውን ሓግዚ። ዝተሰብረ ወይ ዝተጎድአ ፍርያት? ናብ መደርደሪ ኣይትመልስዮ፡ ከምቲ ድኳንኪ ዝገብሮ ከም ክሳራ መዝግብዮ። ናይ ባዕልኺ ዕድጊ፡ ከም ኩሉ ዓሚል ኣብ ካሳ ክፈሊ፡ ቅብሊት ድማ ዕቀቢ። ኣብ ብዙሓት ድኳውር ናይ ባዕልኺ ዕድጊ ባዕልኺ ኣብ ካሳ ከተሕልፍዮ ኣይፍቀደልክን፡ ብጻይ ስራሕ እዩ ዝገብሮ። ፈጺምኪ ከይከፈልኪ ፍርያት ኣይትብልዒ ወይ ኣይትውሰዲ፡ ንእሽቶ እኳ እንተ ኾነ። ገለ ድኳውር ቦርሳታት ይፍትሹ፡ እዚ ሕጊ ድኳን እዩ፡ ኣብ ልዕሌኺ ዘሎ ዘይምእማን ዘርኢ ምልክት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ድኳን ብዝተሰብረ ፍርያት፡ ብዝኣረገ ፍርያትን ብስርቅን ብዙሕ የጥፍእ። ውሑድ ክኸውን ሓግዙ። ዝተሰብረ ወይ ዝተጎድአ ፍርያት? ናብ መደርደሪ ኣይትመልስዎ፡ ከምቲ ድኳንኩም ዝገብሮ ከም ክሳራ መዝግብዎ። ናይ ባዕልኹም ዕድጊ፡ ከም ኩሉ ዓሚል ኣብ ካሳ ክፈሉ፡ ቅብሊት ድማ ዕቀቡ። ኣብ ብዙሓት ድኳውር ናይ ባዕልኹም ዕድጊ ባዕልኹም ኣብ ካሳ ከተሕልፍዎ ኣይፍቀደልኩምን፡ ብጻይ ስራሕ እዩ ዝገብሮ። ፈጺምኩም ከይከፈልኩም ፍርያት ኣይትብልዑ ወይ ኣይትውሰዱ፡ ንእሽቶ እኳ እንተ ኾነ። ገለ ድኳውር ቦርሳታት ይፍትሹ፡ እዚ ሕጊ ድኳን እዩ፡ ኣብ ልዕሌኹም ዘሎ ዘይምእማን ዘርኢ ምልክት ኣይኮነን። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.p': "ቅድም እኸፍል፡ ቅብሊት ድማ እዕቅብ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.s': { m: "ኣብ መወዳእታ ፈረቓኻ ጠምዩካ። ሓደ ሳንድዊች ሎሚ ዕለቱ ሓሊፉ። እንታይ ትገብር?", f: "ኣብ መወዳእታ ፈረቓኺ ጠምዩኪ። ሓደ ሳንድዊች ሎሚ ዕለቱ ሓሊፉ። እንታይ ትገብሪ?", x: "ኣብ መወዳእታ ፈረቓኹም ጠምዩኩም። ሓደ ሳንድዊች ሎሚ ዕለቱ ሓሊፉ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o1': { m: "እቲ ሕጊ እንታይ ምዃኑ ንሓላፊ ሕተቶ።", f: "እቲ ሕጊ እንታይ ምዃኑ ንሓላፊ ሕተትዮ።", x: "እቲ ሕጊ እንታይ ምዃኑ ንሓላፊ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o2': { m: "ብልዓዮ፡ ብዘየገድስ ክድርበ እዩ።", f: "ብልዕዮ፡ ብዘየገድስ ክድርበ እዩ።", x: "ብልዕዎ፡ ብዘየገድስ ክድርበ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.o3': { m: "ኣብ ቦርሳኻ ጌርካ ናብ ገዛ ውሰዶ።", f: "ኣብ ቦርሳኺ ጌርኪ ናብ ገዛ ውሰድዮ።", x: "ኣብ ቦርሳኹም ጌርኩም ናብ ገዛ ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.w': { m: "ኣብ ብዙሓት ድኳውር፡ ከይከፈልካ ፍርያት ምውሳድ ስርቂ እዩ፡ ዝኣረገ እንተ ኾነ እውን። ቅድም ምሕታት ውሑስ ይገብረኻ።", f: "ኣብ ብዙሓት ድኳውር፡ ከይከፈልኪ ፍርያት ምውሳድ ስርቂ እዩ፡ ዝኣረገ እንተ ኾነ እውን። ቅድም ምሕታት ውሑስ ይገብረኺ።", x: "ኣብ ብዙሓት ድኳውር፡ ከይከፈልኩም ፍርያት ምውሳድ ስርቂ እዩ፡ ዝኣረገ እንተ ኾነ እውን። ቅድም ምሕታት ውሑስ ይገብረኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.shopclose': "ድኳን ምዕጻው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sluitingstijd': "ሰዓት ምዕጻው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rolluik': "ዝጥቕለል ሓጺን ማዕጾ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kasverschil': "ፍልልይ ካሳ (ኣብ ካሳ ካብቲ ክህሉ ዝግበኦ ዝበዝሐ ወይ ዝወሓደ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kluis': "ካዝና (ንገንዘብ ዝኸውን ሓያል ሳንዱቕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overval': "ዝምቢ (ሰብ ብምፍርራሕ ገንዘብ ይወስድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterdeur': "ድሕሪት ማዕጾ", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.1': "ድሕሪ ዓሰርተ ደቒቕ ንዓጹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.2': "ካሳ ብኽልተ ሰባት ኢና ንቖጽሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shopclose.3': "ድሕሪት ማዕጾ ተሸሊሑ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.q': "ቀልጢፈ ክኣቱ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.a': "ይቕሬታ፡ ዓጽና ኢና። ጽባሕ ሰዓት ሸሞንተ ንኸፍት።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose': { m: "ዝምቢ፡ ሃብ፡ ውሑስ ኮይንካ ጽናሕ", f: "ዝምቢ፡ ሃቢ፡ ውሑስ ኮይንኪ ጽናሒ", x: "ዝምቢ፡ ሃቡ፡ ውሑስ ኮይንኩም ጽናሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.b': { m: "ኣብ ሰዓት ምዕጻው ኣብ ካሳ ብዙሕ ገንዘብ ኣሎ፡ ስለዚ ድኳውር ሕግታት ኣለዎም፡ ብኽልተ ሰባት ምቑጻር፡ ገንዘብ ናብ ካዝና ምውሳድ፡ ቅድም ድማ ድሕሪት ማዕጾ ምሽላሕ። ዝምቢ (overval)? ህይወትካ ካብ ገንዘብ ትበልጽ። ህዱእ ኮይንካ ጽናሕ፡ ዝበልዎ ግበር፡ ኣይትቃለስ፡ ኣይትስዓቦም ድማ። ዝኸኣልካዮ ዘክር፡ ክዳን፡ ቁመት፡ ድምጺ። ምስ ከዱ፡ ማዕጾ ሸልሕ፡ ናብ 112 ደውል፡ ገለ ድማ ኣይትተንክፍ። ድሕሪኡ ምስ ሓላፊኻ ወይ ምስ እትኣምኖ ሰብ ተዛረብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ሰዓት ምዕጻው ኣብ ካሳ ብዙሕ ገንዘብ ኣሎ፡ ስለዚ ድኳውር ሕግታት ኣለዎም፡ ብኽልተ ሰባት ምቑጻር፡ ገንዘብ ናብ ካዝና ምውሳድ፡ ቅድም ድማ ድሕሪት ማዕጾ ምሽላሕ። ዝምቢ (overval)? ህይወትኪ ካብ ገንዘብ ትበልጽ። ህዱእ ኮይንኪ ጽናሒ፡ ዝበልዎ ግበሪ፡ ኣይትቃለሲ፡ ኣይትስዓብዮም ድማ። ዝኸኣልክዮ ዘክሪ፡ ክዳን፡ ቁመት፡ ድምጺ። ምስ ከዱ፡ ማዕጾ ሸልሒ፡ ናብ 112 ደውሊ፡ ገለ ድማ ኣይትተንክፊ። ድሕሪኡ ምስ ሓላፊኺ ወይ ምስ እትኣምንዮ ሰብ ተዛረቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ሰዓት ምዕጻው ኣብ ካሳ ብዙሕ ገንዘብ ኣሎ፡ ስለዚ ድኳውር ሕግታት ኣለዎም፡ ብኽልተ ሰባት ምቑጻር፡ ገንዘብ ናብ ካዝና ምውሳድ፡ ቅድም ድማ ድሕሪት ማዕጾ ምሽላሕ። ዝምቢ (overval)? ህይወትኩም ካብ ገንዘብ ትበልጽ። ህዱእ ኮይንኩም ጽናሑ፡ ዝበልዎ ግበሩ፡ ኣይትቃለሱ፡ ኣይትስዓብዎም ድማ። ዝኸኣልኩሞ ዘክሩ፡ ክዳን፡ ቁመት፡ ድምጺ። ምስ ከዱ፡ ማዕጾ ሸልሑ፡ ናብ 112 ደውሉ፡ ገለ ድማ ኣይትተንክፉ። ድሕሪኡ ምስ ሓላፊኹም ወይ ምስ እትኣምንዎ ሰብ ተዛረቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.p': "ንዓጹ ኣለና። ማዕጾ እሸልሕ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.s': { m: "ካራ ዝሓዘ ሰብኣይ ነቲ ኣብ ካሳኻ ዘሎ ገንዘብ ይደሊ። እንታይ ትገብር?", f: "ካራ ዝሓዘ ሰብኣይ ነቲ ኣብ ካሳኺ ዘሎ ገንዘብ ይደሊ። እንታይ ትገብሪ?", x: "ካራ ዝሓዘ ሰብኣይ ነቲ ኣብ ካሳኹም ዘሎ ገንዘብ ይደሊ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o1': { m: "ህዱእ ኮይንካ ጽናሕ፡ ነቲ ገንዘብ ድማ ሃቦ።", f: "ህዱእ ኮይንኪ ጽናሒ፡ ነቲ ገንዘብ ድማ ሃብዮ።", x: "ህዱእ ኮይንኩም ጽናሑ፡ ነቲ ገንዘብ ድማ ሃብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o2': { m: "ተቓለሶ፡ እቲ ገንዘብ ናቱ ኣይኮነን።", f: "ተቓለስዮ፡ እቲ ገንዘብ ናቱ ኣይኮነን።", x: "ተቓለስዎ፡ እቲ ገንዘብ ናቱ ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.o3': { m: "ናብ ድሕሪት ጒየ፡ ኣብ ውሽጢ ተዓጸው።", f: "ናብ ድሕሪት ጒየዪ፡ ኣብ ውሽጢ ተዓጸዊ።", x: "ናብ ድሕሪት ጒየዩ፡ ኣብ ውሽጢ ተዓጸዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.w': { m: "ምቅላስ ወይ ምህዳም ንዘማቲ የሻቕሎ፡ ዝያዳ ሓደገኛ ድማ ይገብሮ። ገንዘብ ክትካእ ይኽእል። ንዓኻ ግን ዝትክእ የለን።", f: "ምቅላስ ወይ ምህዳም ንዘማቲ የሻቕሎ፡ ዝያዳ ሓደገኛ ድማ ይገብሮ። ገንዘብ ክትካእ ይኽእል። ንዓኺ ግን ዝትክእ የለን።", x: "ምቅላስ ወይ ምህዳም ንዘማቲ የሻቕሎ፡ ዝያዳ ሓደገኛ ድማ ይገብሮ። ገንዘብ ክትካእ ይኽእል። ንዓኹም ግን ዝትክእ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'u.uitzend': "ብኤጀንሲ ስራሕ ምስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.hirer': "ኤጀንሲ ስራሕን ተቐባሊ ትካልን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inlener': "ተቐባሊ ትካል (ኤጀንሲ ስራሕ ክትሰርሓሉ ዝሰደካ ትካል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vestiging': "ጨንፈር (ቤት ጽሕፈት ኤጀንሲ ስራሕ ኣብ ከተማኻ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.intakegesprek': "ቀዳማይ ቃለ-መጠይቕ (ኣብ ኤጀንሲ ስራሕ ዝግበር ቀዳማይ ዝርርብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstapplaats': "መሳፈሪ ቦታ (ኣውቶቡስ ኤጀንሲ ዝወስደካ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsregels': "ሕግታት ትካል (ሕግታት ተቐባሊ ትካል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanspreekpunt': "ተራኺቢ ሰብ (ሕቶ ምስ ዝህልወካ እትኸደሉ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.1': { m: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ትሰርሕ።", f: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ትሰርሒ።", x: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ትሰርሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.2': "ኣብዚ ተራኺቢ ሰበይ መን እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.hirer.3': "እቲ ኣውቶቡስ ሰዓት ሽዱሽተ ካብ መሳፈሪ ቦታ ይብገስ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.q': { m: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ክትጅምር ትኽእል ዶ?", f: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ክትጅምሪ ትኽእሊ ዶ?", x: "ጽባሕ ኣብ ሓድሽ ተቐባሊ ትካል ክትጅምሩ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a': "እወ። ሰዓት ክንደይ ኣብኡ ክኸውን ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer': "ክልተ ትካላት፡ መን እንታይ ይገብር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.b': { m: "ብኤጀንሲ ስራሕ (uitzendbureau) ትሰርሕ፡ ነቲ ስራሕ ግን ኣብ ካልእ ትካል ትሰርሖ፡ ኣብ ተቐባሊ ትካል (inlener)። ኤጀንሲ ስራሕ ኣስራሒኻ እዩ፡ ውዕልካ፡ ደሞዝካ፡ ወረቐት ደሞዝካን መዓልትታት ዕረፍቲኻን ካብ ኤጀንሲ ስራሕ እዮም ዝመጹ። ተቐባሊ ትካል ኣብ ቦታ ስራሕ እንታይ ከም እትገብር ይነግረኻ፡ ከምቲ ንናይ ባዕሉ ሰራሕተኛታት ዝገብሮ ድማ ስራሕካ ውሑስ ክገብሮ ኣለዎ። ከምቲ ኤጀንሲ ስራሕካ ዝበሎ ሕማም ሕበር፡ መብዛሕትኡ ግዜ ንኤጀንሲ ስራሕን ንተቐባሊ ትካልን። ስምን ቁጽሪ ተሌፎንን ተራኺቢ ሰብካ ኣብ ኤጀንሲ ስራሕ ኣብ ተሌፎንካ ዕቀቦ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ብኤጀንሲ ስራሕ (uitzendbureau) ትሰርሒ፡ ነቲ ስራሕ ግን ኣብ ካልእ ትካል ትሰርሕዮ፡ ኣብ ተቐባሊ ትካል (inlener)። ኤጀንሲ ስራሕ ኣስራሒኺ እዩ፡ ውዕልኪ፡ ደሞዝኪ፡ ወረቐት ደሞዝኪን መዓልትታት ዕረፍቲኺን ካብ ኤጀንሲ ስራሕ እዮም ዝመጹ። ተቐባሊ ትካል ኣብ ቦታ ስራሕ እንታይ ከም እትገብሪ ይነግረኺ፡ ከምቲ ንናይ ባዕሉ ሰራሕተኛታት ዝገብሮ ድማ ስራሕኪ ውሑስ ክገብሮ ኣለዎ። ከምቲ ኤጀንሲ ስራሕኪ ዝበሎ ሕማም ሕበሪ፡ መብዛሕትኡ ግዜ ንኤጀንሲ ስራሕን ንተቐባሊ ትካልን። ስምን ቁጽሪ ተሌፎንን ተራኺቢ ሰብኪ ኣብ ኤጀንሲ ስራሕ ኣብ ተሌፎንኪ ዕቀብዮ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ብኤጀንሲ ስራሕ (uitzendbureau) ትሰርሑ፡ ነቲ ስራሕ ግን ኣብ ካልእ ትካል ትሰርሕዎ፡ ኣብ ተቐባሊ ትካል (inlener)። ኤጀንሲ ስራሕ ኣስራሒኹም እዩ፡ ውዕልኩም፡ ደሞዝኩም፡ ወረቐት ደሞዝኩምን መዓልትታት ዕረፍቲኹምን ካብ ኤጀንሲ ስራሕ እዮም ዝመጹ። ተቐባሊ ትካል ኣብ ቦታ ስራሕ እንታይ ከም እትገብሩ ይነግረኹም፡ ከምቲ ንናይ ባዕሉ ሰራሕተኛታት ዝገብሮ ድማ ስራሕኩም ውሑስ ክገብሮ ኣለዎ። ከምቲ ኤጀንሲ ስራሕኩም ዝበሎ ሕማም ሕበሩ፡ መብዛሕትኡ ግዜ ንኤጀንሲ ስራሕን ንተቐባሊ ትካልን። ስምን ቁጽሪ ተሌፎንን ተራኺቢ ሰብኩም ኣብ ኤጀንሲ ስራሕ ኣብ ተሌፎንኩም ዕቀብዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.p': "ኣብ ኤጀንሲ ስራሕ ተራኺቢ ሰበይ መን እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.s': { m: "ኣብ ተቐባሊ ትካል ብማሽን ክትሰርሕ ኣለካ። ብኸመይ ከም ዝስራሕ ዝኾነ ሰብ ኣየርኣየካን። እንታይ ትገብር?", f: "ኣብ ተቐባሊ ትካል ብማሽን ክትሰርሒ ኣለኪ። ብኸመይ ከም ዝስራሕ ዝኾነ ሰብ ኣየርኣየክን። እንታይ ትገብሪ?", x: "ኣብ ተቐባሊ ትካል ብማሽን ክትሰርሑ ኣለኩም። ብኸመይ ከም ዝስራሕ ዝኾነ ሰብ ኣየርኣየኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o1': { m: "ተቐባሊ ትካል ቅድም ከርእየኻ ሕተት።", f: "ተቐባሊ ትካል ቅድም ከርእየኺ ሕተቲ።", x: "ተቐባሊ ትካል ቅድም ከርእየኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o2': { m: "ፈትኖ፡ ሓላፍነት ናይ ኤጀንሲ ስራሕ እዩ።", f: "ፈትንዮ፡ ሓላፍነት ናይ ኤጀንሲ ስራሕ እዩ።", x: "ፈትንዎ፡ ሓላፍነት ናይ ኤጀንሲ ስራሕ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.o3': { m: "ናብ ገዛ ኪድ፡ ገለ ድማ ኣይትበል።", f: "ናብ ገዛ ኪዲ፡ ገለ ድማ ኣይትበሊ።", x: "ናብ ገዛ ኪዱ፡ ገለ ድማ ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.w': { m: "ተቐባሊ ትካል ከምቲ ንናይ ባዕሉ ሰራሕተኛታት፡ ብኸመይ ብውሑስ ከም እትሰርሕ ከርእየኻ ኣለዎ። ብዛዕባኡ ምሕታት መሰልካ እዩ።", f: "ተቐባሊ ትካል ከምቲ ንናይ ባዕሉ ሰራሕተኛታት፡ ብኸመይ ብውሑስ ከም እትሰርሒ ከርእየኺ ኣለዎ። ብዛዕባኡ ምሕታት መሰልኪ እዩ።", x: "ተቐባሊ ትካል ከምቲ ንናይ ባዕሉ ሰራሕተኛታት፡ ብኸመይ ብውሑስ ከም እትሰርሑ ከርእየኹም ኣለዎ። ብዛዕባኡ ምሕታት መሰልኩም እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.phases': { m: "ውዕልካን ደረጃታትን", f: "ውዕልኪን ደረጃታትን", x: "ውዕልኩምን ደረጃታትን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.fase': "ደረጃ (fase፡ ኣብ ውዕል ኤጀንሲ ስራሕ ዘሎ ስጉምቲ፡ A፡ B ወይ C)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzendbeding': "ዓንቀጽ ኤጀንሲ (ተቐባሊ ትካል ምስ ዘየድልየካ ስራሕካ ክቋረጽ ይኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflopen': "ምውዳእ፡ ግዜኡ ምሕላፍ (ውዕል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorwerken': "ምቕጻል ስራሕ (ኣብቲ ሓደ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastecontract': "ቀዋሚ ውዕል (ዕለት መወዳእታ ዘይብሉ ውዕል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreking': "ምቁራጽ (ኣብ መንጎ ክልተ ውዕላት ስራሕ ዘይብሉ ግዜ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.1': "ሕጂ ኣብ ኣየናይ ደረጃ እየ ዘለኹ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.2': "ውዕለይ ኣብ ዝመጽእ ሰሙን ይውዳእ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.phases.3': "ኣብዚ ክቕጽል ክሰርሕ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.q': { m: "ስራሕካ ዓርቢ ይውዳእ።", f: "ስራሕኪ ዓርቢ ይውዳእ።", x: "ስራሕኩም ዓርቢ ይውዳእ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.a': "ሕራይ። ካልእ ስራሕ ኣለኩም ዶ ንዓይ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases': "ደረጃ A፡ B ን C ን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.b': { m: "መብዛሕትኦም ሰራሕተኛታት ኤጀንሲ ስራሕ ብሓባራዊ ስምምዕ ስራሕ ንሰራሕተኛታት ኤጀንሲ (uitzend-cao) እዮም ዝሰርሑ። ደረጃታት ኣለዎ። ኣብ ደረጃ A፡ ተቐባሊ ትካል ምስ ዘየድልየኻ መብዛሕትኡ ግዜ ስራሕካ ክቋረጽ ይኽእል (uitzendbeding)። ኣብ ደረጃ B፡ ንዝተወሰነ ግዜ ውዕላት ትረኽብ። ኣብ ደረጃ C፡ ምስ ኤጀንሲ ስራሕ ቀዋሚ ውዕል ትረኽብ። ነፍሲ ወከፍ ደረጃ ክንደይ ከም ዝጸንሕ ኣብ cao ናትካ ተጻሒፉ ኣሎ። ኣብ ኣየናይ ደረጃ ከም ዘለኻ ንኤጀንሲ ስራሕ ሕተት፡ ኩሎም ውዕላትካ ድማ ዕቀቦም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "መብዛሕትኦም ሰራሕተኛታት ኤጀንሲ ስራሕ ብሓባራዊ ስምምዕ ስራሕ ንሰራሕተኛታት ኤጀንሲ (uitzend-cao) እዮም ዝሰርሑ። ደረጃታት ኣለዎ። ኣብ ደረጃ A፡ ተቐባሊ ትካል ምስ ዘየድልየኺ መብዛሕትኡ ግዜ ስራሕኪ ክቋረጽ ይኽእል (uitzendbeding)። ኣብ ደረጃ B፡ ንዝተወሰነ ግዜ ውዕላት ትረኽቢ። ኣብ ደረጃ C፡ ምስ ኤጀንሲ ስራሕ ቀዋሚ ውዕል ትረኽቢ። ነፍሲ ወከፍ ደረጃ ክንደይ ከም ዝጸንሕ ኣብ cao ናትኪ ተጻሒፉ ኣሎ። ኣብ ኣየናይ ደረጃ ከም ዘለኺ ንኤጀንሲ ስራሕ ሕተቲ፡ ኩሎም ውዕላትኪ ድማ ዕቀብዮም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "መብዛሕትኦም ሰራሕተኛታት ኤጀንሲ ስራሕ ብሓባራዊ ስምምዕ ስራሕ ንሰራሕተኛታት ኤጀንሲ (uitzend-cao) እዮም ዝሰርሑ። ደረጃታት ኣለዎ። ኣብ ደረጃ A፡ ተቐባሊ ትካል ምስ ዘየድልየኹም መብዛሕትኡ ግዜ ስራሕኩም ክቋረጽ ይኽእል (uitzendbeding)። ኣብ ደረጃ B፡ ንዝተወሰነ ግዜ ውዕላት ትረኽቡ። ኣብ ደረጃ C፡ ምስ ኤጀንሲ ስራሕ ቀዋሚ ውዕል ትረኽቡ። ነፍሲ ወከፍ ደረጃ ክንደይ ከም ዝጸንሕ ኣብ cao ናትኩም ተጻሒፉ ኣሎ። ኣብ ኣየናይ ደረጃ ከም ዘለኹም ንኤጀንሲ ስራሕ ሕተቱ፡ ኩሎም ውዕላትኩም ድማ ዕቀብዎም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.p': "ደረጃ A ንዓይ ክንደይ ይጸንሕ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.s': { m: "ንሓደ ኤጀንሲ ስራሕ ነዊሕ ግዜ ሰሪሕካ። ገና ሓጸርቲ ውዕላት ትረኽብ ኣለኻ። እንታይ ትገብር?", f: "ንሓደ ኤጀንሲ ስራሕ ነዊሕ ግዜ ሰሪሕኪ። ገና ሓጸርቲ ውዕላት ትረኽቢ ኣለኺ። እንታይ ትገብሪ?", x: "ንሓደ ኤጀንሲ ስራሕ ነዊሕ ግዜ ሰሪሕኩም። ገና ሓጸርቲ ውዕላት ትረኽቡ ኣለኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o1': { m: "ኣብ ኣየናይ ደረጃ ከም ዘለኻ ንኤጀንሲ ስራሕ ሕተት።", f: "ኣብ ኣየናይ ደረጃ ከም ዘለኺ ንኤጀንሲ ስራሕ ሕተቲ።", x: "ኣብ ኣየናይ ደረጃ ከም ዘለኹም ንኤጀንሲ ስራሕ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o2': "ገለ ኣይኮነን፡ ስራሕ ኤጀንሲ ኩሉ ግዜ ሓጺር እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.o3': { m: "ኣቋርጽ፡ ካልእ ኤጀንሲ ስራሕ ድለ።", f: "ኣቋርጺ፡ ካልእ ኤጀንሲ ስራሕ ድለዪ።", x: "ኣቋርጹ፡ ካልእ ኤጀንሲ ስራሕ ድለዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.w': { m: "ድሕሪ እኹል ግዜ፡ cao ዝያዳ ውሕስነት ይህበኻ። ኤጀንሲ ስራሕ ኣበይ ከም ዘለኻ ክነግረኻ ይኽእል፡ ማሕበር ሰራሕተኛታት ድማ ምሳኻ ከረጋግጾ ይኽእል።", f: "ድሕሪ እኹል ግዜ፡ cao ዝያዳ ውሕስነት ይህበኺ። ኤጀንሲ ስራሕ ኣበይ ከም ዘለኺ ክነግረኺ ይኽእል፡ ማሕበር ሰራሕተኛታት ድማ ምሳኺ ከረጋግጾ ይኽእል።", x: "ድሕሪ እኹል ግዜ፡ cao ዝያዳ ውሕስነት ይህበኹም። ኤጀንሲ ስራሕ ኣበይ ከም ዘለኹም ክነግረኹም ይኽእል፡ ማሕበር ሰራሕተኛታት ድማ ምሳኹም ከረጋግጾ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.deductions': "ደሞዝን ቁርጸታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inhouding': "ቁርጸት (ካብ ደሞዝካ ዝቑረጽ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastekracht': "ቀዋሚ ሰራሕተኛ (ብተቐባሊ ትካል ባዕሉ ዝተቖጽረ ሰራሕተኛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vervoer': "መጓዓዝያ (ናብ ስራሕ ዘብጽሕ ኣውቶቡስ ወይ ቫን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schriftelijk': "ብጽሑፍ (ኣብ ወረቐት ወይ ብኢመይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.navragen': "ምሕታትን ምርግጋጽን (ሓደ ነገር ቅኑዕ ምዃኑ ምፍላጥ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brutoloon': "ጠቕላላ ደሞዝ (ቅድሚ ግብርን ቁርጸታትን ዘሎ ደሞዝካ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.1': "እዚ ኣብ ወረቐት ደሞዘይ ዘሎ ቁርጸት እንታይ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.2': "ከምቶም ቀወምቲ ሰራሕተኛታት ተመሳሳሊ ደሞዝ ድየ ዝረኽብ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.deductions.3': "ቅድም ኣብ ወረቐት ክርእዮ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.q': { m: "ክፍሊት ኣውቶቡስ ካብ ደሞዝካ ንቖርጾ።", f: "ክፍሊት ኣውቶቡስ ካብ ደሞዝኪ ንቖርጾ።", x: "ክፍሊት ኣውቶቡስ ካብ ደሞዝኩም ንቖርጾ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.a': "ይፍቀድ ድዩ? ቅድም ክሓትትን ከረጋግጽን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions': { m: "ካብ ደሞዝካ እንታይ ክቑረጽ ይኽእል?", f: "ካብ ደሞዝኪ እንታይ ክቑረጽ ይኽእል?", x: "ካብ ደሞዝኩም እንታይ ክቑረጽ ይኽእል?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.b': { m: "ከምቶም ተመሳሳሊ ስራሕ ዝሰርሑ ሰራሕተኛታት ተቐባሊ ትካል፡ እንተ ወሓደ ተመሳሳሊ ደሞዝ ክትረኽብ መሰል ኣለካ። ካብ ደሞዝካ ዝቑረጽ ገንዘብ (inhouding) ኣብ ወረቐት ደሞዝካ ክጽሓፍ ኣለዎ። ግብርን ክፍሊታት መድሕንን ብሕጊ ይቑረጹ። ብዘይካኦም፡ ኤጀንሲ ስራሕ ካብ ዝተሓተ ደሞዝ ክልተ ክፍሊታት ጥራይ ክቖርጽ ይኽእል፡ ክራይ መንበሪ ገዛኻን ክፍሊት መድሕን ጥዕናን፡ ብጽሑፍ እንተ ተሰማሚዕካ ጥራይ ድማ። ካልኦት ክፍሊታት፡ ከም መጓዓዝያ፡ ክዳን ስራሕ፡ መቕጻዕቲ ገንዘብ ወይ ስራሕ ንምርካብ ዝኽፈል ክፍሊት፡ ካብ ዝተሓተ ደሞዝ ክቑረጹ ኣይፍቀድን። ቁርጸት ኣይተረድኣካን? ኤጀንሲ ስራሕ ብጽሑፍ ክገልጸኻ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "ከምቶም ተመሳሳሊ ስራሕ ዝሰርሑ ሰራሕተኛታት ተቐባሊ ትካል፡ እንተ ወሓደ ተመሳሳሊ ደሞዝ ክትረኽቢ መሰል ኣለኪ። ካብ ደሞዝኪ ዝቑረጽ ገንዘብ (inhouding) ኣብ ወረቐት ደሞዝኪ ክጽሓፍ ኣለዎ። ግብርን ክፍሊታት መድሕንን ብሕጊ ይቑረጹ። ብዘይካኦም፡ ኤጀንሲ ስራሕ ካብ ዝተሓተ ደሞዝ ክልተ ክፍሊታት ጥራይ ክቖርጽ ይኽእል፡ ክራይ መንበሪ ገዛኺን ክፍሊት መድሕን ጥዕናን፡ ብጽሑፍ እንተ ተሰማሚዕኪ ጥራይ ድማ። ካልኦት ክፍሊታት፡ ከም መጓዓዝያ፡ ክዳን ስራሕ፡ መቕጻዕቲ ገንዘብ ወይ ስራሕ ንምርካብ ዝኽፈል ክፍሊት፡ ካብ ዝተሓተ ደሞዝ ክቑረጹ ኣይፍቀድን። ቁርጸት ኣይተረድኣክን? ኤጀንሲ ስራሕ ብጽሑፍ ክገልጸኺ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "ከምቶም ተመሳሳሊ ስራሕ ዝሰርሑ ሰራሕተኛታት ተቐባሊ ትካል፡ እንተ ወሓደ ተመሳሳሊ ደሞዝ ክትረኽቡ መሰል ኣለኩም። ካብ ደሞዝኩም ዝቑረጽ ገንዘብ (inhouding) ኣብ ወረቐት ደሞዝኩም ክጽሓፍ ኣለዎ። ግብርን ክፍሊታት መድሕንን ብሕጊ ይቑረጹ። ብዘይካኦም፡ ኤጀንሲ ስራሕ ካብ ዝተሓተ ደሞዝ ክልተ ክፍሊታት ጥራይ ክቖርጽ ይኽእል፡ ክራይ መንበሪ ገዛኹምን ክፍሊት መድሕን ጥዕናን፡ ብጽሑፍ እንተ ተሰማሚዕኩም ጥራይ ድማ። ካልኦት ክፍሊታት፡ ከም መጓዓዝያ፡ ክዳን ስራሕ፡ መቕጻዕቲ ገንዘብ ወይ ስራሕ ንምርካብ ዝኽፈል ክፍሊት፡ ካብ ዝተሓተ ደሞዝ ክቑረጹ ኣይፍቀድን። ቁርጸት ኣይተረድኣኩምን? ኤጀንሲ ስራሕ ብጽሑፍ ክገልጸኹም ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.p': "እዚ ቁርጸት ንምንታይ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.s': { m: "ኤጀንሲ ስራሕ ንኣውቶቡስ ስራሕ ካብ ደሞዝካ ገንዘብ ይቖርጽ። ዝተሓተ ደሞዝ ትረኽብ። እንታይ ትገብር?", f: "ኤጀንሲ ስራሕ ንኣውቶቡስ ስራሕ ካብ ደሞዝኪ ገንዘብ ይቖርጽ። ዝተሓተ ደሞዝ ትረኽቢ። እንታይ ትገብሪ?", x: "ኤጀንሲ ስራሕ ንኣውቶቡስ ስራሕ ካብ ደሞዝኩም ገንዘብ ይቖርጽ። ዝተሓተ ደሞዝ ትረኽቡ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o1': { m: "ብዛዕባኡ ሕተት፡ እዚ ኣይፍቀድን እዩ።", f: "ብዛዕባኡ ሕተቲ፡ እዚ ኣይፍቀድን እዩ።", x: "ብዛዕባኡ ሕተቱ፡ እዚ ኣይፍቀድን እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o2': { m: "ገለ ኣይኮነን፡ መዓልቲ መዓልቲ ብኣውቶቡስ ትኸይድ ኢኻ።", f: "ገለ ኣይኮነን፡ መዓልቲ መዓልቲ ብኣውቶቡስ ትኸዲ ኢኺ።", x: "ገለ ኣይኮነን፡ መዓልቲ መዓልቲ ብኣውቶቡስ ትኸዱ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.o3': { m: "ብኣውቶቡስ ምኻድ ኣቋርጽ፡ ብእግሪኻ ኪድ።", f: "ብኣውቶቡስ ምኻድ ኣቋርጺ፡ ብእግሪኺ ኪዲ።", x: "ብኣውቶቡስ ምኻድ ኣቋርጹ፡ ብእግሪኹም ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.w': { m: "ካብ ዝተሓተ ደሞዝ ክራይን መድሕን ጥዕናን ጥራይ ክቑረጹ ይኽእሉ፡ ብጽሑፍ ዝሃብካዮ እወ ምስ ዝህሉ ጥራይ ድማ። ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ክሕግዘኻ ይኽእል።", f: "ካብ ዝተሓተ ደሞዝ ክራይን መድሕን ጥዕናን ጥራይ ክቑረጹ ይኽእሉ፡ ብጽሑፍ ዝሃብክዮ እወ ምስ ዝህሉ ጥራይ ድማ። ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ክሕግዘኺ ይኽእል።", x: "ካብ ዝተሓተ ደሞዝ ክራይን መድሕን ጥዕናን ጥራይ ክቑረጹ ይኽእሉ፡ ብጽሑፍ ዝሃብኩሞ እወ ምስ ዝህሉ ጥራይ ድማ። ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ክሕግዘኹም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.agencyhome': "መንበሪ ገዛን ሓገዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisvesting': "መንበሪ ገዛ (ኤጀንሲ ስራሕ ዘዳለዎ ቦታ መንበሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisgenoot': "ብጻይ ገዛ (ኣብቲ ሓደ ገዛ ዝነብር ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huisregels': "ሕግታት ገዛ (ሕግታት ናይቲ እትነብረሉ ገዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.huismeester': "ሓላፊ ገዛ (ነቲ ገዛ ዝከታተል ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meldpunt': "መሕበሪ ቦታ (ጸገም ክትሕብረሉ እትኽእል ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advies': "ምኽሪ", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.1': "ናይ ባዕለይ ውዕል ክራይ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.2': "ኣብ ባኞ ፈንገስ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.agencyhome.3': "ምኽሪ ንምርካብ ናብ ማሕበር ሰራሕተኛታት እድውል ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.q': { m: "ዓርቢ ካብቲ ገዛ ክትወጽእ ኣለካ።", f: "ዓርቢ ካብቲ ገዛ ክትወጽኢ ኣለኪ።", x: "ዓርቢ ካብቲ ገዛ ክትወጽኡ ኣለኩም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a': "እዚ ኣዝዩ ሓጺር እዩ። ቅድም ምኽሪ ክሓትት እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome': { m: "ገዛኻ፡ ሓገዝ ካበይ ከም እትረኽብ", f: "ገዛኺ፡ ሓገዝ ካበይ ከም እትረኽቢ", x: "ገዛኹም፡ ሓገዝ ካበይ ከም እትረኽቡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.b': { m: "ኤጀንሲ ስራሕ መንበሪ ገዛ የዳልወልካ ድዩ? ሽዑ ካብ ውዕል ስራሕካ ዝተፈልየ፡ ናይ ባዕልኻ ብጽሑፍ ዝተዳለወ ውዕል ክራይ ትረኽብ። ቅዳሕ ዕቀብ። እንታይ ከም እትኸፍል፡ እቲ ክራይ ብኸመይን መዓስን ከም ዝውዳእን ኣብኡ ተጻሒፉ ኣሎ። ስራሕካ ይውዳእ ድዩ? ገዛኻ ኩሉ ግዜ ኣብታ ሓንቲ መዓልቲ ኣይውዳእን፡ ቅድሚ ምውጻእካ ምኽሪ ሕተት። ዘይውሑስ ወይ ብዙሕ ሰብ ዝመልኦ ገዛ፡ ምፍርራሕ ወይ ኣዝዩ ትሑት ደሞዝ? ሓገዝ ድለ፡ ማሕበር ሰራሕተኛታት፡ Juridisch Loket (ነጻ ሕጋዊ ምኽሪ)፡ FairWork ወይ Nederlandse Arbeidsinspectie፡ ኣብኡ ብዘይ ስም እውን ክትሕብር ትኽእል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "ኤጀንሲ ስራሕ መንበሪ ገዛ የዳልወልኪ ድዩ? ሽዑ ካብ ውዕል ስራሕኪ ዝተፈልየ፡ ናይ ባዕልኺ ብጽሑፍ ዝተዳለወ ውዕል ክራይ ትረኽቢ። ቅዳሕ ዕቀቢ። እንታይ ከም እትኸፍሊ፡ እቲ ክራይ ብኸመይን መዓስን ከም ዝውዳእን ኣብኡ ተጻሒፉ ኣሎ። ስራሕኪ ይውዳእ ድዩ? ገዛኺ ኩሉ ግዜ ኣብታ ሓንቲ መዓልቲ ኣይውዳእን፡ ቅድሚ ምውጻእኪ ምኽሪ ሕተቲ። ዘይውሑስ ወይ ብዙሕ ሰብ ዝመልኦ ገዛ፡ ምፍርራሕ ወይ ኣዝዩ ትሑት ደሞዝ? ሓገዝ ድለዪ፡ ማሕበር ሰራሕተኛታት፡ Juridisch Loket (ነጻ ሕጋዊ ምኽሪ)፡ FairWork ወይ Nederlandse Arbeidsinspectie፡ ኣብኡ ብዘይ ስም እውን ክትሕብሪ ትኽእሊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "ኤጀንሲ ስራሕ መንበሪ ገዛ የዳልወልኩም ድዩ? ሽዑ ካብ ውዕል ስራሕኩም ዝተፈልየ፡ ናይ ባዕልኹም ብጽሑፍ ዝተዳለወ ውዕል ክራይ ትረኽቡ። ቅዳሕ ዕቀቡ። እንታይ ከም እትኸፍሉ፡ እቲ ክራይ ብኸመይን መዓስን ከም ዝውዳእን ኣብኡ ተጻሒፉ ኣሎ። ስራሕኩም ይውዳእ ድዩ? ገዛኹም ኩሉ ግዜ ኣብታ ሓንቲ መዓልቲ ኣይውዳእን፡ ቅድሚ ምውጻእኩም ምኽሪ ሕተቱ። ዘይውሑስ ወይ ብዙሕ ሰብ ዝመልኦ ገዛ፡ ምፍርራሕ ወይ ኣዝዩ ትሑት ደሞዝ? ሓገዝ ድለዩ፡ ማሕበር ሰራሕተኛታት፡ Juridisch Loket (ነጻ ሕጋዊ ምኽሪ)፡ FairWork ወይ Nederlandse Arbeidsinspectie፡ ኣብኡ ብዘይ ስም እውን ክትሕብሩ ትኽእሉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.agencyhome.p': "ቅዳሕ ውዕል ክራየይ ክረኽብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.s': { m: "ስራሕካ ይውዳእ። ሓላፊ ገዛ ሎሚ ካብቲ ገዛ ክትወጽእ ከም ዘለካ ይብል። እንታይ ትገብር?", f: "ስራሕኪ ይውዳእ። ሓላፊ ገዛ ሎሚ ካብቲ ገዛ ክትወጽኢ ከም ዘለኪ ይብል። እንታይ ትገብሪ?", x: "ስራሕኩም ይውዳእ። ሓላፊ ገዛ ሎሚ ካብቲ ገዛ ክትወጽኡ ከም ዘለኩም ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o1': { m: "ቅድም ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ቅድም ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ቅድም ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o2': { m: "ሎሚ ውጻእ፡ ኣብ ዓርኪኻ ደቅስ።", f: "ሎሚ ውጽኢ፡ ኣብ ዓርኪኺ ደቅሲ።", x: "ሎሚ ውጽኡ፡ ኣብ ዓርኪኹም ደቅሱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.o3': { m: "ቦርሳኻ ጠቕልል፡ ኣብ ደገ ደቅስ።", f: "ቦርሳኺ ጠቕልሊ፡ ኣብ ደገ ደቅሲ።", x: "ቦርሳኹም ጠቕልሉ፡ ኣብ ደገ ደቅሱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.w': { m: "ውዕል ክራይካ ካብ ስራሕካ ዝተፈልየ ናይ ባዕሉ ሕግታት ኣለዎ። ምኽሪ ብሓቂ መዓስ ክትወጽእ ከም ዘለካ ክትፈልጥ ይሕግዘኻ።", f: "ውዕል ክራይኪ ካብ ስራሕኪ ዝተፈልየ ናይ ባዕሉ ሕግታት ኣለዎ። ምኽሪ ብሓቂ መዓስ ክትወጽኢ ከም ዘለኪ ክትፈልጢ ይሕግዘኺ።", x: "ውዕል ክራይኩም ካብ ስራሕኩም ዝተፈልየ ናይ ባዕሉ ሕግታት ኣለዎ። ምኽሪ ብሓቂ መዓስ ክትወጽኡ ከም ዘለኩም ክትፈልጡ ይሕግዘኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // The basis units at four lessons (23 November 2026): two new lessons each in Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte, Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online op je werk.
    'l.vacancy': "ምልክታ ስራሕ ምንባብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.advertentie': "ምልክታ (ስራሕ ወይ ነገር ዘቕርብ ጽሑፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.eis': "ቅድመ-ኩነት (ክህሉ ወይ ክኽእሎ ዘለዎ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.parttime': "ፍርቂ ግዜ (ኣብ ሰሙን ውሑድ ሰዓታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.fulltime': "ምሉእ ግዜ (ምሉእ ሰሙን ስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sollicitatiebrief': "ደብዳበ ሕቶ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contactpersoon': "ሰብ ርክብ (ክድወለሉ ወይ ክጽሓፈሉ ዝከኣል ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.1': "ምልክታኹም ኣብ ኢንተርነት ርእየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.2': "እቲ ስራሕ ፍርቂ ግዜ ድዩ ወይስ ምሉእ ግዜ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.vacancy.3': "ቅድመ-ኩነታት እንታይ እዮም?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.q': { m: "ስለምንታይ ትድውል ኣለኻ?", f: "ስለምንታይ ትድውሊ ኣለኺ?", x: "ስለምንታይ ትድውሉ ኣለኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a': "ብዛዕባ ክፉት ቦታ ስራሕኩም እየ ዝድውል ዘለኹ። ገና ክፉት ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.result': "ድሕሪ ቃለ-መሕትት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aangenomen': "ተቐቢሉ (ነቲ ስራሕ ረኺቡ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwijzing': "ምንጻግ (ነቲ ስራሕ ኣይረኸበን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanbod': "ዕድመ ስራሕ (ነቲ ስራሕ የቕርቡሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.proefdag': "መዓልቲ ፈተነ (ንምፍታን ሓንቲ መዓልቲ ስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabellen': "ተመሊስካ ምድዋል (ከመይ ከም ዘሎ ንምሕታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teleurgesteld': "ተስፋ ዝቖረጸ፡ ዝሓዘነ", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.1': { m: "ተቐቢልካ ኣለኻ!", f: "ተቐቢልኪ ኣለኺ!", x: "ተቐቢልኩም ኣለኹም!" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.result.2': "ምንጻግ በጺሑኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.result.3': "መዓልቲ ፈተነ ይኽፈላ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.q': "ይቕሬታ፡ ንካልእ ሰብ ኢና መሪጽና።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a': "ይሓዝን። ስለምንታይ ክሓትት ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.residence': { m: "ወረቐታት መንበሪኻ", f: "ወረቐታት መንበሪኺ", x: "ወረቐታት መንበሪኹም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.verblijfsvergunning': "ፍቓድ መንበሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pasfoto': "ስእሊ ፓስፖርት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vingerafdruk': "ኣሰር ኣጻብዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geldig': "ዝሰርሕ፡ ግዜኡ ዘይሓለፈ (ገና ክጥቀመሉ ይከኣል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verloopdatum': "ዕለት ምውዳእ (እታ ዝሰርሓላ ናይ መወዳእታ መዓልቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volgnummer': "ቁጽሪ መስርዕ (ተራ ዘርኢ ወረቐት)", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.1': "ፍቓድ መንበሪየይ ገና ንሓደ ዓመት ይሰርሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.2': "ዕለት ምውዳእ ፓስፖርትኩም መዓስ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.residence.3': "ኣብ gemeente ቆጸራ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.q': { m: "ፍቓድ መንበሪኻ ግዜኡ ክሓልፍ ቀሪቡ ኣሎ።", f: "ፍቓድ መንበሪኺ ግዜኡ ክሓልፍ ቀሪቡ ኣሎ።", x: "ፍቓድ መንበሪኹም ግዜኡ ክሓልፍ ቀሪቡ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a': "ሽዑ ብቕጽበት ሓድሽ ክሓትት እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.newhome': "ገዛ ምቕያር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brievenbus': "ሳጹን ደብዳበ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meterstand': "ንባብ መቑጸሪ (ኣብ መቑጸሪ ጋዝ፡ ኤሌክትሪክ ወይ ማይ ዘለዉ ቁጽርታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naambordje': "ሰሌዳ ስም (ኣብ ማዕጾ ዘሎ ስም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.woning': "መንበሪ ገዛ (ገዛ ወይ ኣፓርታማ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorsturen': "ምሕላፍ (ናብ ሓድሽ ኣድራሻ ምስዳድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verhuisdag': "መዓልቲ ምግዓዝ", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.1': "ኣብ ዝመጽእ ሰሙን ገዛ እቕይር።", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.2': "ስመይ ኣብ ሳጹን ደብዳበ የለን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.newhome.3': "ሓድሽ ኣድራሻይ እሕብር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.q': { m: "ሕጂ ኣበይ ትነብር?", f: "ሕጂ ኣበይ ትነብሪ?", x: "ሕጂ ኣበይ ትነብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.a': "ኣብ ሓድሽ ገዛ። እዚ ሓድሽ ኣድራሻይ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.payparts': { m: "ኣብ ወረቐት ደሞዝካ ዘሎ", f: "ኣብ ወረቐት ደሞዝኪ ዘሎ", x: "ኣብ ወረቐት ደሞዝኩም ዘሎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.pensioen': "ጡረታ (ኣብ እርጋን ዝኽፈል ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.periode': "እዋን (ናይዚ ደሞዝ ሰሙናት ወይ ወርሒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrag': "መጠን (ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.totaal': "ጠቕላላ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkorting': "ሕጽረት (ሓጺር ቅርጺ ቃል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.personeelsnummer': "ቁጽሪ ሰራሕተኛ (ኣብ ትካል ዘሎ ቁጽሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.1': "እዚ ሕጽረት እንታይ ማለት እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.2': "እዚ መጠን ናብ ጡረታይ ይኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.payparts.3': "እዚ ደሞዝ ናይ ኣየናይ እዋን እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.q': { m: "ቁጽሪ ሰራሕተኛኻ እንታይ እዩ?", f: "ቁጽሪ ሰራሕተኛኺ እንታይ እዩ?", x: "ቁጽሪ ሰራሕተኛኹም እንታይ እዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a': "ኣብ ላዕሊ፡ ኣብ ጥቓ ስመይ ተጻሒፉ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.latepay': "ዝደንጎየ፡ ዝጎደለ ወይ ብኢድ ዝኽፈል ደሞዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zwartwerken': "ብዘይ ሕጋዊ መንገዲ ምስራሕ (ውዕል የለን፡ ግብሪ የለን፡ ኣብ ወረቐት መሰል የለን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorschot': "ቅድመ-ክፍሊት (ቅድሚ መዓልቲ ደሞዝ ዝወሃብ ክፋል ደሞዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nabetaling': "ድሕረ-ክፍሊት (ደሞዝ ንምእራም ደሓር ዝወሃብ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tekort': "ጉድለት (ዝጎደለ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.betaaldag': "መዓልቲ ደሞዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bankafschrift': "መግለጺ ባንኪ (ዝኣተወን ዝወጸን ገንዘብ ዝርዝር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.1': "ደሞዘይ ደንጕዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.2': "ብዘይ ሕጋዊ መንገዲ ኣይሰርሕን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.latepay.3': "ቅድመ-ክፍሊት ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.q': { m: "ነቲ ዝጎደለ ገንዘብ ኣብ ዝመጽእ ወርሒ ክትረክቦ ኢኻ።", f: "ነቲ ዝጎደለ ገንዘብ ኣብ ዝመጽእ ወርሒ ክትረኽብዮ ኢኺ።", x: "ነቲ ዝጎደለ ገንዘብ ኣብ ዝመጽእ ወርሒ ክትረኽብዎ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a': "እዚ ብጽሑፍ ክረክቦ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.holiday': { m: "ዕረፍቲኻ ምውጣን", f: "ዕረፍቲኺ ምውጣን", x: "ዕረፍቲኹም ምውጣን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.saldo': "ዝተረፈ (ክንደይ መዓልትታት ገና ከም ዘለዉ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedkeuren': "ምጽዳቕ (እወ ምባል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verlopen': "ግዜኡ ምሕላፍ (ድሕሪ ሕጂ ኣይሰርሕን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zomervakantie': "ዕረፍቲ ክረምቲ (ኣብ ሓምለን ነሓሰን)", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'w.drukte': "ጽዑቕ ግዜ (ብዙሕ ስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvraag': "ሕቶ (ሓደ ነገር ምሕታት፡ መብዛሕትኡ ብቕጥዒ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.1': "ክንደይ መዓልትታት ዕረፍቲ ገና ኣለዉኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.2': "ፍቓደይ ጸዲቑ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.holiday.3': "ነቲ ቕጥዒ ይመልእ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.q': { m: "ኣብ ክረምቲ ጽዑቕ እዩ። ኣብ ግንቦት ዕረፍቲ ክትከይድ ትኽእል ዶ?", f: "ኣብ ክረምቲ ጽዑቕ እዩ። ኣብ ግንቦት ዕረፍቲ ክትከዲ ትኽእሊ ዶ?", x: "ኣብ ክረምቲ ጽዑቕ እዩ። ኣብ ግንቦት ዕረፍቲ ክትከዱ ትኽእሉ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a': "ኣብ ሓምለ ይሓይሸኒ። ሽዑ ስድራይ ኣብ ገዛ ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.special': "ፍሉያት መዓልትታት ዕረፍቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bruiloft': "መርዓ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begrafenis': "ቀብሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geboorteverlof': "ፍቓድ ሕርሲ (ንመጻምድቲ፡ ቆልዓ ምስ ዝውለድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijzonderverlof': "ፍሉይ ፍቓድ (ንኣብነት ንመርዓ ወይ ንቀብሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kerstdagen': "ልደት (ክልተ መዓልትታት ልደት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijvragen': "ፍቓድ መዓልቲ ምሕታት", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.1': "ሓወይ ይምርዖ ኣሎ። ፍቓድ መዓልቲ ክሓትት ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.2': "ኣኮይ ሞይቱ። እቲ ቀብሪ ዓርቢ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.special.3': "ብልደት ክሰርሕ ኣለኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.q': { m: "ብቆልዓኻ እንቋዕ ሓጎሰካ! ፍቓድ ሕርሲ ክትወስድ ዲኻ?", f: "ብቆልዓኺ እንቋዕ ሓጎሰኪ! ፍቓድ ሕርሲ ክትወስዲ ዲኺ?", x: "ብቆልዓኹም እንቋዕ ሓጎሰኩም! ፍቓድ ሕርሲ ክትወስዱ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a': "እወ፡ ቀዳማይ ሰሙን ኣብ ገዛ ክኸውን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.unwell': "ጽቡቕ ዘይምስማዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdpijn': "ሕማም ርእሲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.griep': "ኢንፍሉወንዛ (ከቢድ ጉንፋዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verkouden': "ጉንፋዕ ዝሓዞ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nietlekker': "ጽቡቕ ዘይምስማዕ (ቁሩብ ሕማም ምስማዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.naarhuis': "ናብ ገዛ ምኻድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitzieken': "ክሳብ ዝሓዊ ኣብ ገዛ ምጽናሕ", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.1': "ጽቡቕ ኣይስምዓንን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.2': "ርእሰይ የሕምመኒ፡ ጉንፋዕ ድማ ሒዙኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.unwell.3': "ናብ ገዛ እኸይድ ኣለኹ። ሓሚመ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.q': { m: "ገጽካ ሃሲሱ ኣሎ። ደሓን ዲኻ?", f: "ገጽኪ ሃሲሱ ኣሎ። ደሓን ዲኺ?", x: "ገጽኩም ሃሲሱ ኣሎ። ደሓን ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a': "ኣይፋል፡ ጽቡቕ ኣይስምዓንን። ናብ ገዛ ክኸይድ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.injury': "ብስራሕ ምጉዳእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedrijfsongeval': "ሓደጋ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verzekering': "መድሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schadevergoeding': "ካሕሳ (ንጉድኣት ዝኽፈል ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oorzaak': "ምኽንያት (ስለምንታይ ከም ዘጋጠመ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.letsel': "መጉዳእቲ (ኣብ ኣካላት ዝበጽሕ ጉድኣት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verklaring': "ቃል (ብዛዕባ ዘጋጠመ ዝጽሓፍ ወይ ዝንገር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.1': "ሓደጋ ስራሕ ኣጋጢሙኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.2': "ምኽንያቱ እንታይ ነበረ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.injury.3': "ብጻይ ስራሐይ ርእይዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.q': { m: "ቃልካ ኣብዚ ክትጽሕፎ ዶ?", f: "ቃልኪ ኣብዚ ክትጽሕፍዮ ዶ?", x: "ቃልኩም ኣብዚ ክትጽሕፍዎ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.a': "እወ። ቅዳሕ ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debt': "ናይ ሓላፊ ወይ ናይ ኤጀንሲ ዕዳ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lening': "ልቓሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lenen': "ምልቃሕ፡ ምልቓሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vastzitten': "ተታሒዝካ ምትራፍ (ምውጻእ ዘይምኽኣል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tussenpersoon': "ደላላ (ብገንዘብ ስራሕ ዘናዲ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.rente': "ወለድ (ኣብ ልቓሕ ዝኽፈል ተወሳኺ ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.belofte': "መብጽዓ", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.1': "ነዚ ስራሕ ክኸፍል ነይሩኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.2': "ዕዳይ ወርሒ ብወርሒ ይውስኽ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.debt.3': "እቲ ደላላ ፓስፖርተይ ሒዙ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.q': { m: "ዕዳኻ ምስ ተኸፍለ ጥራይ ክትከይድ ይፍቀደልካ።", f: "ዕዳኺ ምስ ተኸፍለ ጥራይ ክትከዲ ይፍቀደልኪ።", x: "ዕዳኹም ምስ ተኸፍለ ጥራይ ክትከዱ ይፍቀደልኩም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a': "እዚ ኣይፍቀድን እዩ። ሓገዝ እሓትት ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.inspection': "መርመራን ካልእ ሓገዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inspectie': "መርመራ (ስራሕ ፍትሓውን ውሑስን ምዃኑ ዝፍትሹ ሰባት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controle': "ፍተሻ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.slachtoffer': "ግዳይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mensenhandel': "ዘዋውራ ደቂ ሰባት (ሰባት ንስራሕ ወይ ንጾታዊ ግልጋሎት ይጥቀሙሎምን ይሸጡን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vertrouwen': "ምእማን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tolk': "ተርጓሚ", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.1': "ጽባሕ መርመራ ይመጽእ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.2': "ተርጓሚ ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.inspection.3': "ነዚ ሰብኣይ ኣይኣምኖን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.q': { m: "ምስ መርመራ ክትዛረብ ትደሊ ዶ?", f: "ምስ መርመራ ክትዛረቢ ትደልዪ ዶ?", x: "ምስ መርመራ ክትዛረቡ ትደልዩ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a': "እወ፡ ግን ሓላፊየይ ክሰምዖ የብሉን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.carpool': "ብሓባር ምጉዓዝን መኪና ስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.carpoolen': "ብሓባር ምጉዓዝ (ብሓንቲ መኪና ብሓባር ናብ ስራሕ ምኻድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meerijden': "ምስ ካልእ ምጉዓዝ (ብመኪና ካልእ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gordel': "ዕጥቂ ድሕንነት (ቀበቶ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.instappen': "ምስፋር (ናብ መኪና፡ ኣውቶቡስ ወይ ባቡር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstappen': "ምውራድ (ካብ መኪና፡ ኣውቶቡስ ወይ ባቡር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijrijder': "ተጓዓዚ (ኣብ ጥቓ መራሕ መኪና)", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.1': "ምሳኻትኩም ክጓዓዝ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.2': { m: "ዕጥቂ ድሕንነትካ ተዓጠቕ።", f: "ዕጥቂ ድሕንነትኪ ተዓጠቒ።", x: "ዕጥቂ ድሕንነትኩም ተዓጠቑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.carpool.3': "ኣብ መደበር እወርድ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.q': "ጽባሕ መን እዩ ዝዝውር?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a': "ኣነ እዝውር። ሰዓት ሽዱሽተ ክወስደኩም እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.train': "ባቡር፡ ምድንጓይን ብግዜኡ ዘይምብጻሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.station': "መደበር ባቡር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.perron': "መሳፈሪ (ናብ ባቡር ዝድየበሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overstappen': "ምቕያር (ናብ ካልእ ባቡር ወይ ኣውቶቡስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitvallen': "ምስራዝ (እቲ ባቡር ኣይኸይድን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kaartje': "ትኬት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reisplanner': "መደብ ጉዕዞ (ባቡራትን ኣውቶቡሳትን ዘርኢ ኣፕ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.1': "ባቡረይ ተሰሪዙ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.2': "ሓደ ግዜ ባቡር ክቕይር ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.train.3': "እቲ ባቡር ካብ ኣየናይ መሳፈሪ እዩ ዝብገስ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.q': { m: "ስለምንታይ ክሳዕ ክንድዚ ደንጒኻ?", f: "ስለምንታይ ክሳዕ ክንድዚ ደንጒኺ?", x: "ስለምንታይ ክሳዕ ክንድዚ ደንጒኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a': "ባቡረይ ተሰሪዙ። መልእኽቲ ልኢኸልኩም ነይረ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.checklist': "ቅድሚ ምውዳእ ኣረጋግጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.checklist': "ዝርዝር ምርግጋጽ (ዝረጋገጹ ነገራት ዝርዝር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afvinken': "ምምልካት (ድሕሪ ዕዮ ምልክት ምግባር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdoen': "ደጊምካ ምግባር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.compleet': "ምሉእ (ዝጎደለ የለን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vergeten': "ምርሳዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resultaat': "ውጽኢት", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.1': "ኣብ ዝርዝር ምርግጋጽ ንኹሉ ምልክት እገብረሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.2': "እቲ ትእዛዝ ምሉእ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.checklist.3': "እዚ ደጊመ ክገብሮ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.q': { m: "ዝረሳዕካዮ ነገር የለን ዶ?", f: "ዝረሳዕክዮ ነገር የለን ዶ?", x: "ዝረሳዕኩሞ ነገር የለን ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a': "ሓንሳእ ደጊመ ነቲ ዝርዝር ምርግጋጽ ክርእዮ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.leavesite': "ቦታ ስራሕ ምግዳፍ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.terugzetten': "ናብ ቦትኡ ምምላስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vegen': "ምጽራግ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vloer': "መሬት (ናይ ገዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitdoen': "ምጥፋእ (መብራህቲ፡ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alslaatste': "ከም ናይ መወዳእታ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterlaten': "ገዲፍካ ምኻድ (ቦታ ብኸመይ ከም ዝግደፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.1': "ቦታይ ጽሩይ ገዲፈ እኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.2': "መን እዩ ናይ መወዳእታ ዝወጽእ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.leavesite.3': { m: "መብራህቲ ኣጥፍእ፡ ማዕጾ ድማ ዕጸው።", f: "መብራህቲ ኣጥፍኢ፡ ማዕጾ ድማ ዕጸዊ።", x: "መብራህቲ ኣጥፍኡ፡ ማዕጾ ድማ ዕጸዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.q': { m: "ሎሚ ናይ መወዳእታ ክትወጽእ ዲኻ?", f: "ሎሚ ናይ መወዳእታ ክትወጽኢ ዲኺ?", x: "ሎሚ ናይ መወዳእታ ክትወጽኡ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a': "እወ። ኩሉ ኣጥፊአ ነቲ ማዕጾ ብመፍትሕ እዓጽዎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stagedays': { m: "መዓልታዊ ኣብ ልምምድ ስራሕካ", f: "መዓልታዊ ኣብ ልምምድ ስራሕኪ", x: "መዓልታዊ ኣብ ልምምድ ስራሕኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.stageplek': "ቦታ ልምምድ (ልምምድ ስራሕ ዝግበረሉ ትካል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwezig': "ዘይተረኽበ (ኣብኡ የለን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanwezig': "ዝተረኽበ (ኣብኡ ኣሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stagevergoeding': "ክፍሊት ልምምድ (ኣብ ልምምድ ክወሃብ ዝኽእል ገንዘብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.begeleiding': "ምኽትታል (ካብ ተኸታታሊ ዝወሃብ ሓገዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leerling': "ተመሃራይ (ኣብ ቤት ትምህርቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.1': "ጽባሕ ኣይክመጽእን እየ። ሓሚመ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.2': "ክፍሊት ልምምድ ክረክብ ድየ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.stagedays.3': "ኣብ ቦታ ልምምደይ ኣርባዕተ መዓልቲ እሰርሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.q': { m: "ትማሊ ስለምንታይ ኣይመጻካን?", f: "ትማሊ ስለምንታይ ኣይመጻክን?", x: "ትማሊ ስለምንታይ ኣይመጻኩምን?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a': "ሓሚመ ነይረ። ንቤት ትምህርትን ንትካልን ደዊለ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.stageend': { m: "መወዳእታ ልምምድ ስራሕካ", f: "መወዳእታ ልምምድ ስራሕኪ", x: "መወዳእታ ልምምድ ስራሕኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.eindgesprek': "ናይ መወዳእታ ዝርርብ (ኣብ መወዳእታ ልምምድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geslaagd': "ሓሊፉ (እኹል ጽቡቕ ገይሩ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezakt': "ወዲቑ (ኣብዚ ግዜ እኹል ኣይነበረን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herkansing': "ካልኣይ ዕድል (ሓድሽ ዕድል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedanken': "ምምስጋን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.trakteren': "ምጋባዝ (ንኹሉ ጥዑም መብልዕ ምምጻእ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.1': "ጽባሕ ናይ መወዳእታ ዝርርበይ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.2': "ልምምድ ስራሐይ ሓሊፈ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.stageend.3': "ንኹሉ ከመስግን እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.q': { m: "ናይ መወዳእታ መዓልትኻ! ሕጂ እንታይ ክትገብር ኢኻ?", f: "ናይ መወዳእታ መዓልትኺ! ሕጂ እንታይ ክትገብሪ ኢኺ?", x: "ናይ መወዳእታ መዓልትኹም! ሕጂ እንታይ ክትገብሩ ኢኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a': "ቅድም ዲፕሎማይ ክወስድ። ድሕሪኡ ስራሕ ክደሊ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.neighbours': { m: "ከባቢኻ", f: "ከባቢኺ", x: "ከባቢኹም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurt': "ከባቢ፡ ሰፈር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurthuis': "ማእከል ሰፈር (ንንጥፈታት ሰፈር ዝኸውን ገዛ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straat': "ጎደና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kennismaken': "ምልላይ (ንመጀመርታ ግዜ ምርኻብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overlast': "ረብሻ (ንኻልኦት ዝኸውን ድምጺ ወይ ጸገም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.buurvrouw': "ጎረቤት (ሰበይቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.1': "ኣብዚ ጎደና ካብ ዝነብር ቁሩብ ግዜ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.2': "ኣብ ቤተ-መጻሕፍቲ ሆላንድኛ እለማመድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.neighbours.3': "ይቕሬታ ብዛዕባ እቲ ረብሻ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.q': { m: "ሰላም፡ ኣነ ሓዳስ ጎረቤትካ እየ።", f: "ሰላም፡ ኣነ ሓዳስ ጎረቤትኪ እየ።", x: "ሰላም፡ ኣነ ሓዳስ ጎረቤትኩም እየ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a': "ብምፍላጥኪ ሕጉስ እየ! ኣነ ዓሊ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.join': "ቤት ትምህርቲ፡ ስፖርትን ወለንታዊ ስራሕን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilliger': "ወለንተኛ (ብዘይ ክፍሊት ዝሕግዝ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vrijwilligerswerk': "ወለንታዊ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.sportclub': "ክለብ ስፖርት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ouderavond': "ምሸት ወለዲ (ኣብ ቤት ትምህርቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.leraar': "መምህር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.basisschool': "ቀዳማይ ደረጃ ቤት ትምህርቲ", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.1': "ወደይ ቀዳማይ ደረጃ ቤት ትምህርቲ ይኸይድ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.2': "ኣብ ክለብ ስፖርት ኩዕሶ እግሪ እጻወት።", // nieuw, nalezen // nagelezen AI 28 nov
    's.join.3': "ቀዳም ወለንታዊ ስራሕ እሰርሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.q': { m: "ናብ ምሸት ወለዲ ክትመጽእ ዲኻ?", f: "ናብ ምሸት ወለዲ ክትመጽኢ ዲኺ?", x: "ናብ ምሸት ወለዲ ክትመጽኡ ዲኹም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a': "እወ። ምስ መምህር ክዛረብ ደስ ምበለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.workphotos': "ስእልታትን ሓበሬታን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gezicht': "ገጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.klantgegevens': "ሓበሬታ ዓሚል (ስም፡ ኣድራሻ፡ ቴሌፎን ናይ ዓሚል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onlinezetten': "ኣብ ኢንተርነት ምዝርጋሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wissen': "ምድምሳስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werktelefoon': "ተሌፎን ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bestand': "ፋይል (ኣብ ኮምፒተር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.1': "ስእልታት ስራሕ ኣብ ኢንተርነት ኣይዝርግሕን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.2': "ነቲ ስእሊ ብቕጽበት እድምስሶ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.workphotos.3': "ገጹ ኣብቲ ስእሊ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.q': { m: "ስእሊ ከልዕለካ ይኽእል ዶ? ንኢንተርነት።", f: "ስእሊ ከልዕለኪ ይኽእል ዶ? ንኢንተርነት።", x: "ስእሊ ከልዕለኩም ይኽእል ዶ? ንኢንተርነት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a': "ኣይፋል፡ ይሓይሸኒ። ኣብ ኢንተርነት ክወጽእ ኣይደልን።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.device': "ውሑስ ተሌፎንን ኮምፒተርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.update': "ምሕዳስ (ሓድሽ ስሪት ኣፕ ወይ ፕሮግራም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.virus': "ቫይረስ (ንኮምፒተር ዝጎድእ ፕሮግራም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wifi': "ዋይፋይ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.usbstick': "USB ስቲክ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.installeren': "ምእታው (ምጽዓን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openbaar': "ህዝባዊ (ንኹሉ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.1': "ሎሚ ምሸት ነቲ ምሕዳስ ከእትዎ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.2': "እዚ USB ስቲክ ኣብ መሬት ተደርብዩ ነይሩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.device.3': "እዚ ዋይፋይ ውሑስ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.q': "እዚ ኣፕ ኣብ ተሌፎን ስራሕ ከእትዎ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a': "ቅድም ንክፍሊ IT ሕተቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy': { m: "ደውል፡ ወይ ሓጺር መልእኽቲ ስደድ", f: "ደውሊ፡ ወይ ሓጺር መልእኽቲ ስደዲ", x: "ደውሉ፡ ወይ ሓጺር መልእኽቲ ስደዱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.b': { m: "ነቲ ምልክታ ጽቡቕ ገይርካ ኣንብቦ፡ ሰዓታት፡ ቦታ፡ ክህልወካ ዘለዎ ድማ፡ ከም ፍቓድ ምዝዋር ወይ ሰርቲፊኬት። ኩሉ ክህልወካ ኣየድልን፡ መብዛሕትኡ እንተ ሃልዩካ፡ ብዘየገድስ ፈትን። ደውል ወይ ሓጺር መልእኽቲ ጽሓፍ፡ ስምካ፡ ኣየናይ ስራሕ፡ ስለምንታይ ከም እትደልዮ ንገር። ስራሕ ንምርካብ ፈጺም ገንዘብ ኣይትኽፈል፡ ንምልክታ ኢልካ ድማ ኮድ ምእታውካ ፈጺም ኣይትስደድ።", f: "ነቲ ምልክታ ጽቡቕ ገይርኪ ኣንብብዮ፡ ሰዓታት፡ ቦታ፡ ክህልወኪ ዘለዎ ድማ፡ ከም ፍቓድ ምዝዋር ወይ ሰርቲፊኬት። ኩሉ ክህልወኪ ኣየድልን፡ መብዛሕትኡ እንተ ሃልዩኪ፡ ብዘየገድስ ፈትኒ። ደውሊ ወይ ሓጺር መልእኽቲ ጽሓፊ፡ ስምኪ፡ ኣየናይ ስራሕ፡ ስለምንታይ ከም እትደልይዮ ንገሪ። ስራሕ ንምርካብ ፈጺም ገንዘብ ኣይትኽፈሊ፡ ንምልክታ ኢልኪ ድማ ኮድ ምእታውኪ ፈጺም ኣይትስደዲ።", x: "ነቲ ምልክታ ጽቡቕ ገይርኩም ኣንብብዎ፡ ሰዓታት፡ ቦታ፡ ክህልወኩም ዘለዎ ድማ፡ ከም ፍቓድ ምዝዋር ወይ ሰርቲፊኬት። ኩሉ ክህልወኩም ኣየድልን፡ መብዛሕትኡ እንተ ሃልዩኩም፡ ብዘየገድስ ፈትኑ። ደውሉ ወይ ሓጺር መልእኽቲ ጽሓፉ፡ ስምኩም፡ ኣየናይ ስራሕ፡ ስለምንታይ ከም እትደልይዎ ንገሩ። ስራሕ ንምርካብ ፈጺም ገንዘብ ኣይትኽፈሉ፡ ንምልክታ ኢልኩም ድማ ኮድ ምእታውኩም ፈጺም ኣይትስደዱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.vacancy.p': "ዲፕሎማ የብለይን፡ ግን ብዙሕ ተመኩሮ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.s': { m: "ሓደ ምልክታ 3 ዓመት ተመኩሮ ይሓትት። ንስኻ 2 ዓመት ኣለካ። እንታይ ትገብር?", f: "ሓደ ምልክታ 3 ዓመት ተመኩሮ ይሓትት። ንስኺ 2 ዓመት ኣለኪ። እንታይ ትገብሪ?", x: "ሓደ ምልክታ 3 ዓመት ተመኩሮ ይሓትት። ንስኹም 2 ዓመት ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o1': { m: "ብዘየገድስ ኣመልክት፡ እንታይ ክትገብር ከም እትኽእል ድማ ንገር።", f: "ብዘየገድስ ኣመልክቲ፡ እንታይ ክትገብሪ ከም እትኽእሊ ድማ ንገሪ።", x: "ብዘየገድስ ኣመልክቱ፡ እንታይ ክትገብሩ ከም እትኽእሉ ድማ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o2': { m: "ኣይተመልክት፡ ዘለካ ኣዝዩ ውሑድ እዩ።", f: "ኣይተመልክቲ፡ ዘለኪ ኣዝዩ ውሑድ እዩ።", x: "ኣይተመልክቱ፡ ዘለኩም ኣዝዩ ውሑድ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.o3': { m: "3 ዓመት ጽሓፍ፡ ዝፍትሾ የለን።", f: "3 ዓመት ጽሓፊ፡ ዝፍትሾ የለን።", x: "3 ዓመት ጽሓፉ፡ ዝፍትሾ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.w': "ምልክታ መብዛሕትኡ ግዜ ካብቲ እቲ ስራሕ ብሓቂ ዘድልዮ ዝበዝሐ ይሓትት። ብዛዕባ እትኽእሎ ብሓቂ ምዝራብ ካብ ምሕሳው ይሓይሽ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result': "ኣይፋል ማለት መወዳእታ ኣይኮነን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.b': { m: "ድሕሪ ሰሙን ገለ ኣይሰማዕካን? ተመሊስካ ብትሕትና ክትሓትት ትኽእል ኢኻ። ኣይፋል ተባሂልካ? ኣብ ዝመጽእ እንታይ ከም እተመሓይሽ ሕተት፡ ብዙሓት ኣስራሕቲ ይነግሩኻ እዮም። ድሕሪኡ ደጊምካ ፈትን፡ መብዛሕትኦም ሰባት ቅድም ውሑዳት ኣይፋል ይረኽቡ። እወ ተባሂልካ? መዓስ ከም እትጅምር ሕተት፡ ቅድሚ ምጅማርካ ድማ ውዕልካ ሕተት። ንመዓልቲ ፈተነ ተዓዲምካ? ክንደይ ከም ዝወስድን ይኽፈል እንተ ኾይኑን ኣቐዲምካ ሕተት።", f: "ድሕሪ ሰሙን ገለ ኣይሰማዕክን? ተመሊስኪ ብትሕትና ክትሓትቲ ትኽእሊ ኢኺ። ኣይፋል ተባሂልኪ? ኣብ ዝመጽእ እንታይ ከም እተመሓይሽ ሕተቲ፡ ብዙሓት ኣስራሕቲ ይነግሩኺ እዮም። ድሕሪኡ ደጊምኪ ፈትኒ፡ መብዛሕትኦም ሰባት ቅድም ውሑዳት ኣይፋል ይረኽቡ። እወ ተባሂልኪ? መዓስ ከም እትጅምሪ ሕተቲ፡ ቅድሚ ምጅማርኪ ድማ ውዕልኪ ሕተቲ። ንመዓልቲ ፈተነ ተዓዲምኪ? ክንደይ ከም ዝወስድን ይኽፈል እንተ ኾይኑን ኣቐዲምኪ ሕተቲ።", x: "ድሕሪ ሰሙን ገለ ኣይሰማዕኩምን? ተመሊስኩም ብትሕትና ክትሓትቱ ትኽእሉ ኢኹም። ኣይፋል ተባሂልኩም? ኣብ ዝመጽእ እንታይ ከም እተመሓይሽ ሕተቱ፡ ብዙሓት ኣስራሕቲ ይነግሩኹም እዮም። ድሕሪኡ ደጊምኩም ፈትኑ፡ መብዛሕትኦም ሰባት ቅድም ውሑዳት ኣይፋል ይረኽቡ። እወ ተባሂልኩም? መዓስ ከም እትጅምሩ ሕተቱ፡ ቅድሚ ምጅማርኩም ድማ ውዕልኩም ሕተቱ። ንመዓልቲ ፈተነ ተዓዲምኩም? ክንደይ ከም ዝወስድን ይኽፈል እንተ ኾይኑን ኣቐዲምኩም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.p': "ኣብ ዝመጽእ እንታይ ከመሓይሽ ይኽእል?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.s': { m: "ድሕሪ ቃለ-መሕትት ስራሕ፡ ብኢመይል ኣይፋል ይበጽሓካ። እንታይ ትገብር?", f: "ድሕሪ ቃለ-መሕትት ስራሕ፡ ብኢመይል ኣይፋል ይበጽሓኪ። እንታይ ትገብሪ?", x: "ድሕሪ ቃለ-መሕትት ስራሕ፡ ብኢመይል ኣይፋል ይበጽሓኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o1': { m: "እንታይ ከም እተመሓይሽ ብትሕትና ሕተት።", f: "እንታይ ከም እተመሓይሽ ብትሕትና ሕተቲ።", x: "እንታይ ከም እተመሓይሽ ብትሕትና ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o2': { m: "ጌጋ ከም ዝገበሩ መሊስካ ጽሓፈሎም።", f: "ጌጋ ከም ዝገበሩ መሊስኪ ጽሓፍሎም።", x: "ጌጋ ከም ዝገበሩ መሊስኩም ጽሓፉሎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.o3': { m: "ምምልካት ኣቋርጽ፡ ኣይሰርሕን እዩ።", f: "ምምልካት ኣቋርጺ፡ ኣይሰርሕን እዩ።", x: "ምምልካት ኣቋርጹ፡ ኣይሰርሕን እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.w': { m: "ርእይቶ ኣብ ዝቕጽል ቃለ-መሕትት ይሕግዘካ። ትሕትና ዘለዎ ሕቶ እውን ብዛዕባኻ ጽቡቕ ስእሊ ይገድፍ።", f: "ርእይቶ ኣብ ዝቕጽል ቃለ-መሕትት ይሕግዘኪ። ትሕትና ዘለዎ ሕቶ እውን ብዛዕባኺ ጽቡቕ ስእሊ ይገድፍ።", x: "ርእይቶ ኣብ ዝቕጽል ቃለ-መሕትት ይሕግዘኩም። ትሕትና ዘለዎ ሕቶ እውን ብዛዕባኹም ጽቡቕ ስእሊ ይገድፍ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence': { m: "ወረቐታትካ፡ ነቲ ዕለት ኣረጋግጽ", f: "ወረቐታትኪ፡ ነቲ ዕለት ኣረጋግጺ", x: "ወረቐታትኩም፡ ነቲ ዕለት ኣረጋግጹ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.b': { m: "ካብ EU ዲኻ? ሽዑ ብዝሰርሕ ፓስፖርት ወይ መንነት ወረቐት ኣብዚ ክትነብርን ክትሰርሕን ይፍቀደልካ፡ ፍቓድ ኣየድልየካን። ካብ ደገ EU ዲኻ? ሽዑ ዝሰርሕ ፍቓድ መንበሪ የድልየካ። ክትሰርሕ ይፍቀደልካ እንተ ኾይኑ ኣብቲ ካርድ ተጻሒፉ ኣሎ። ዕለት ምውዳእ ወረቐታትካ ኣረጋግጽ። ሓድሽ ፍቓድ ኣብ IND ብግዜኡ ሕተት፡ ቅድሚ እቲ ዕለት ብወርሓት፡ ኣብ ናይ መወዳእታ ሰሙን ኣይኮነን። ናይ ነፍሲ ወከፍ ደብዳበ ቅዳሕ ዕቀብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ካብ EU ዲኺ? ሽዑ ብዝሰርሕ ፓስፖርት ወይ መንነት ወረቐት ኣብዚ ክትነብርን ክትሰርሒን ይፍቀደልኪ፡ ፍቓድ ኣየድልየኪን። ካብ ደገ EU ዲኺ? ሽዑ ዝሰርሕ ፍቓድ መንበሪ የድልየኪ። ክትሰርሒ ይፍቀደልኪ እንተ ኾይኑ ኣብቲ ካርድ ተጻሒፉ ኣሎ። ዕለት ምውዳእ ወረቐታትኪ ኣረጋግጺ። ሓድሽ ፍቓድ ኣብ IND ብግዜኡ ሕተቲ፡ ቅድሚ እቲ ዕለት ብወርሓት፡ ኣብ ናይ መወዳእታ ሰሙን ኣይኮነን። ናይ ነፍሲ ወከፍ ደብዳበ ቅዳሕ ዕቀቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ካብ EU ዲኹም? ሽዑ ብዝሰርሕ ፓስፖርት ወይ መንነት ወረቐት ኣብዚ ክትነብሩን ክትሰርሑን ይፍቀደልኩም፡ ፍቓድ ኣየድልየኩምን። ካብ ደገ EU ዲኹም? ሽዑ ዝሰርሕ ፍቓድ መንበሪ የድልየኩም። ክትሰርሑ ይፍቀደልኩም እንተ ኾይኑ ኣብቲ ካርድ ተጻሒፉ ኣሎ። ዕለት ምውዳእ ወረቐታትኩም ኣረጋግጹ። ሓድሽ ፍቓድ ኣብ IND ብግዜኡ ሕተቱ፡ ቅድሚ እቲ ዕለት ብወርሓት፡ ኣብ ናይ መወዳእታ ሰሙን ኣይኮነን። ናይ ነፍሲ ወከፍ ደብዳበ ቅዳሕ ዕቀቡ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.residence.p': "ፍቓደይ ቀልጢፉ ግዜኡ ክሓልፍ እዩ። እንታይ ክገብር ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.s': { m: "ፍቓድ መንበሪኻ ኣብ ክልተ ወርሒ ግዜኡ ይሓልፍ። ኣብ ስራሕ ኣዝዩ ተጸሚድካ ኣለኻ። እንታይ ትገብር?", f: "ፍቓድ መንበሪኺ ኣብ ክልተ ወርሒ ግዜኡ ይሓልፍ። ኣብ ስራሕ ኣዝዩ ተጸሚድኪ ኣለኺ። እንታይ ትገብሪ?", x: "ፍቓድ መንበሪኹም ኣብ ክልተ ወርሒ ግዜኡ ይሓልፍ። ኣብ ስራሕ ኣዝዩ ተጸሚድኩም ኣለኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.residence.o1': { m: "ሕጂ ሓድሽ ሕተት።", f: "ሕጂ ሓድሽ ሕተቲ።", x: "ሕጂ ሓድሽ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o2': { m: "ክሳብ ናይ መወዳእታ ሰሙን ተጸበ።", f: "ክሳብ ናይ መወዳእታ ሰሙን ተጸበዪ።", x: "ክሳብ ናይ መወዳእታ ሰሙን ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.o3': { m: "ገለ ኣይትግበር፡ ስራሕ ይቕድም።", f: "ገለ ኣይትግበሪ፡ ስራሕ ይቕድም።", x: "ገለ ኣይትግበሩ፡ ስራሕ ይቕድም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.w': { m: "ብዘይ ዝሰርሕ ፍቓድ፡ ክትሰርሕ ዘይፍቀደልካ ክኸውን ይኽእል። ሓድሽ ፍቓድ ግዜ ይወስድ፡ ስለዚ ኣቐዲምካ ትጅምር።", f: "ብዘይ ዝሰርሕ ፍቓድ፡ ክትሰርሒ ዘይፍቀደልኪ ክኸውን ይኽእል። ሓድሽ ፍቓድ ግዜ ይወስድ፡ ስለዚ ኣቐዲምኪ ትጅምሪ።", x: "ብዘይ ዝሰርሕ ፍቓድ፡ ክትሰርሑ ዘይፍቀደልኩም ክኸውን ይኽእል። ሓድሽ ፍቓድ ግዜ ይወስድ፡ ስለዚ ኣቐዲምኩም ትጅምሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome': { m: "ሓድሽ ኣድራሻ? ንኹሉ ንገር", f: "ሓድሽ ኣድራሻ? ንኹሉ ንገሪ", x: "ሓድሽ ኣድራሻ? ንኹሉ ንገሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.b': { m: "ገዛ ትቕይር ዲኻ? ሓድሽ ኣድራሻኻ ቀልጢፍካ ንgemeente ንገሮም፡ ክትገብሮ ኣለካ። ንኣስራሒኻ፡ ንባንኪኻ፡ ንመድሕንካን ንሓኪምካን እውን ንገሮም። ስምካ ኣብ ሳጹን ደብዳበ ግበር፡ እንተዘይኮይኑ ደብዳበታት ኣይበጽሑኻን። ኣብ መዓልቲ ምግዓዝ፡ ንባብ መቑጸርታት ጽሓፍ፡ ስእሊ ድማ ልዓሎም። ሽዑ ዝተጠቐምካሉ ጥራይ ትኸፍል።", f: "ገዛ ትቕይሪ ዲኺ? ሓድሽ ኣድራሻኺ ቀልጢፍኪ ንgemeente ንገርዮም፡ ክትገብርዮ ኣለኪ። ንኣስራሒኺ፡ ንባንኪኺ፡ ንመድሕንኪን ንሓኪምኪን እውን ንገርዮም። ስምኪ ኣብ ሳጹን ደብዳበ ግበሪ፡ እንተዘይኮይኑ ደብዳበታት ኣይበጽሑኺን። ኣብ መዓልቲ ምግዓዝ፡ ንባብ መቑጸርታት ጽሓፊ፡ ስእሊ ድማ ልዓልዮም። ሽዑ ዝተጠቐምክሉ ጥራይ ትኸፍሊ።", x: "ገዛ ትቕይሩ ዲኹም? ሓድሽ ኣድራሻኹም ቀልጢፍኩም ንgemeente ንገርዎም፡ ክትገብርዎ ኣለኩም። ንኣስራሒኹም፡ ንባንኪኹም፡ ንመድሕንኩምን ንሓኪምኩምን እውን ንገርዎም። ስምኩም ኣብ ሳጹን ደብዳበ ግበሩ፡ እንተዘይኮይኑ ደብዳበታት ኣይበጽሑኹምን። ኣብ መዓልቲ ምግዓዝ፡ ንባብ መቑጸርታት ጽሓፉ፡ ስእሊ ድማ ልዓልዎም። ሽዑ ዝተጠቐምኩምሉ ጥራይ ትኸፍሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.p': "ገዛ ቀይረ። እዚ ሓድሽ ኣድራሻይ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.s': { m: "ቅድሚ ክልተ ሰሙን ገዛ ቀይርካ። ደብዳበታትካ ገና ናብ ናይ ቀደም ኣድራሻኻ ይኸዱ ኣለዉ። እንታይ ትገብር?", f: "ቅድሚ ክልተ ሰሙን ገዛ ቀይርኪ። ደብዳበታትኪ ገና ናብ ናይ ቀደም ኣድራሻኺ ይኸዱ ኣለዉ። እንታይ ትገብሪ?", x: "ቅድሚ ክልተ ሰሙን ገዛ ቀይርኩም። ደብዳበታትኩም ገና ናብ ናይ ቀደም ኣድራሻኹም ይኸዱ ኣለዉ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o1': { m: "ሕጂ ሓድሽ ኣድራሻኻ ንgemeente ሃቦም።", f: "ሕጂ ሓድሽ ኣድራሻኺ ንgemeente ሃብዮም።", x: "ሕጂ ሓድሽ ኣድራሻኹም ንgemeente ሃብዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o2': { m: "ተጸበ፡ ፖስጣ ባዕሉ ክረኽበካ እዩ።", f: "ተጸበዪ፡ ፖስጣ ባዕሉ ክረኽበኪ እዩ።", x: "ተጸበዩ፡ ፖስጣ ባዕሉ ክረኽበኩም እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.o3': { m: "ናይ ቀደም ጎረቤትካ ደብዳበታትካ ክዕቅበልካ ሕተቶ።", f: "ናይ ቀደም ጎረቤትኪ ደብዳበታትኪ ክዕቅበልኪ ሕተትዮ።", x: "ናይ ቀደም ጎረቤትኩም ደብዳበታትኩም ክዕቅበልኩም ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.newhome.w': { m: "ኣገደስቲ ደብዳበታት፡ ከም መቕጻዕቲ ገንዘብ ወይ ደብዳበ ግብሪ፡ ዕለታት ኣለዎም። ናብ ጌጋ ኣድራሻ ምስ ዝኸዱ፡ ክሓልፉኻ ይኽእሉ እዮም።", f: "ኣገደስቲ ደብዳበታት፡ ከም መቕጻዕቲ ገንዘብ ወይ ደብዳበ ግብሪ፡ ዕለታት ኣለዎም። ናብ ጌጋ ኣድራሻ ምስ ዝኸዱ፡ ክሓልፉኺ ይኽእሉ እዮም።", x: "ኣገደስቲ ደብዳበታት፡ ከም መቕጻዕቲ ገንዘብ ወይ ደብዳበ ግብሪ፡ ዕለታት ኣለዎም። ናብ ጌጋ ኣድራሻ ምስ ዝኸዱ፡ ክሓልፉኹም ይኽእሉ እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts': { m: "ነፍሲ ወከፍ መስመር ኣንብብ", f: "ነፍሲ ወከፍ መስመር ኣንብቢ", x: "ነፍሲ ወከፍ መስመር ኣንብቡ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.b': { m: "ወረቐት ደሞዝካ ብዙሓት መስመራትን ሓጸርቲ ቃላትን ኣለዎ። ኣብ ላዕሊ፡ ስምካ፡ ቁጽሪ ሰራሕተኛኻን እቲ እዋንን። ድሕሪኡ ጠቕላላ ደሞዝካ፡ ሰዓታትካን ዝኾነ ተወሳኺ ክፍሊትን። ድሕሪኡ ዝቑረጽ፡ ግብርን ክፍሊታት መድሕንን። ኣብ ብዙሓት ስራሓት፡ ንስኻን ኣስራሒኻን ክልቴኹም ንጡረታኻ ትኸፍሉ፡ ናይካ ክፋል ኣብ ወረቐት ደሞዝካ ትርእዮ። ኣብ ታሕቲ፡ ጽሩይ ደሞዝካ። ሓደ መስመር ኣይተረድኣካን? ንኣስራሒኻ ክገልጸልካ ሕተቶ። ኩሉ ወረቐታት ደሞዝካ ዕቀብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ወረቐት ደሞዝኪ ብዙሓት መስመራትን ሓጸርቲ ቃላትን ኣለዎ። ኣብ ላዕሊ፡ ስምኪ፡ ቁጽሪ ሰራሕተኛኺን እቲ እዋንን። ድሕሪኡ ጠቕላላ ደሞዝኪ፡ ሰዓታትኪን ዝኾነ ተወሳኺ ክፍሊትን። ድሕሪኡ ዝቑረጽ፡ ግብርን ክፍሊታት መድሕንን። ኣብ ብዙሓት ስራሓት፡ ንስኺን ኣስራሒኺን ክልቴኹም ንጡረታኺ ትኸፍሉ፡ ናይኪ ክፋል ኣብ ወረቐት ደሞዝኪ ትርእይዮ። ኣብ ታሕቲ፡ ጽሩይ ደሞዝኪ። ሓደ መስመር ኣይተረድኣክን? ንኣስራሒኺ ክገልጸልኪ ሕተትዮ። ኩሉ ወረቐታት ደሞዝኪ ዕቀቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ወረቐት ደሞዝኩም ብዙሓት መስመራትን ሓጸርቲ ቃላትን ኣለዎ። ኣብ ላዕሊ፡ ስምኩም፡ ቁጽሪ ሰራሕተኛኹምን እቲ እዋንን። ድሕሪኡ ጠቕላላ ደሞዝኩም፡ ሰዓታትኩምን ዝኾነ ተወሳኺ ክፍሊትን። ድሕሪኡ ዝቑረጽ፡ ግብርን ክፍሊታት መድሕንን። ኣብ ብዙሓት ስራሓት፡ ንስኹምን ኣስራሒኹምን ክልቴኹም ንጡረታኹም ትኸፍሉ፡ ናይኩም ክፋል ኣብ ወረቐት ደሞዝኩም ትርእይዎ። ኣብ ታሕቲ፡ ጽሩይ ደሞዝኩም። ሓደ መስመር ኣይተረድኣኩምን? ንኣስራሒኹም ክገልጸልኩም ሕተትዎ። ኩሉ ወረቐታት ደሞዝኩም ዕቀቡ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.p': "እዚ ኣብ ወረቐት ደሞዘይ ዘሎ መስመር እንታይ ማለት እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.s': { m: "ኣብ ወረቐት ደሞዝካ፡ ገንዘብ ናብ «pensioen» ይኸይድ። ስለምንታይ ከም ዝኾነ ኣይትፈልጥን። እንታይ ትገብር?", f: "ኣብ ወረቐት ደሞዝኪ፡ ገንዘብ ናብ «pensioen» ይኸይድ። ስለምንታይ ከም ዝኾነ ኣይትፈልጢን። እንታይ ትገብሪ?", x: "ኣብ ወረቐት ደሞዝኩም፡ ገንዘብ ናብ «pensioen» ይኸይድ። ስለምንታይ ከም ዝኾነ ኣይትፈልጡን። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.payparts.o1': { m: "ንኣስራሒኻ ክገልጸልካ ሕተቶ።", f: "ንኣስራሒኺ ክገልጸልኪ ሕተትዮ።", x: "ንኣስራሒኹም ክገልጸልኩም ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o2': { m: "ሕጂ ዝያዳ ገንዘብ ክትረክብ፡ ክቋረጽ ሕተት።", f: "ሕጂ ዝያዳ ገንዘብ ክትረኽቢ፡ ክቋረጽ ሕተቲ።", x: "ሕጂ ዝያዳ ገንዘብ ክትረኽቡ፡ ክቋረጽ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.o3': { m: "ሸለል በሎ፡ ነዊሕ ግዜ ኣይክትጸንሕን ኢኻ።", f: "ሸለል በልዮ፡ ነዊሕ ግዜ ኣይክትጸንሒን ኢኺ።", x: "ሸለል በልዎ፡ ነዊሕ ግዜ ኣይክትጸንሑን ኢኹም።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.payparts.w': { m: "ገንዘብ ጡረታ ንዓኻ፡ ንደሓር ይዕቀብ። ስራሕ ምስ ቀየርካ መብዛሕትኡ ግዜ ኣይጠፍኣካን። ምሕታት እቲ ናትካ ዝኾነ ክትፈልጥ ይሕግዘካ።", f: "ገንዘብ ጡረታ ንዓኺ፡ ንደሓር ይዕቀብ። ስራሕ ምስ ቀየርኪ መብዛሕትኡ ግዜ ኣይጠፍኣኪን። ምሕታት እቲ ናትኪ ዝኾነ ክትፈልጢ ይሕግዘኪ።", x: "ገንዘብ ጡረታ ንዓኹም፡ ንደሓር ይዕቀብ። ስራሕ ምስ ቀየርኩም መብዛሕትኡ ግዜ ኣይጠፍኣኩምን። ምሕታት እቲ ናትኩም ዝኾነ ክትፈልጡ ይሕግዘኩም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay': { m: "ዝደንጎየ ወይ ብኢድ ዝኽፈል ደሞዝ? ብግዜኡ ስጉምቲ ውሰድ", f: "ዝደንጎየ ወይ ብኢድ ዝኽፈል ደሞዝ? ብግዜኡ ስጉምቲ ውሰዲ", x: "ዝደንጎየ ወይ ብኢድ ዝኽፈል ደሞዝ? ብግዜኡ ስጉምቲ ውሰዱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.b': { m: "ደሞዝካ ኣብታ ኣብ ውዕልካ ወይ ኣብ cao ዘላ መዓልቲ ክመጽእ ኣለዎ። ደንጒዩ ድዩ፡ ወይስ ገንዘብ ጎዲሉ? ብጽሑፍ ሕተት፡ ንኣብነት ብኢመይል። መግለጺታት ባንኪኻን ናይ ባዕልካ ዝርዝር ሰዓታትን ዕቀብ። ብዘይ ወረቐት ደሞዝ ብጥረ ገንዘብ ተኸፊልካ? ሽዑ መብዛሕትኡ ግዜ ብዘይ ሕጋዊ መንገዲ ዝግበር ስራሕ (zwart) እዩ፡ ሰዓታትካ ኣይተመዝገቡን፡ ደሓር ድማ ስራሕካ ምርግጋጽ ወይ ሓገዝ ገንዘብ ምርካብ ከቢድ እዩ። ወረቐት ደሞዝ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "ደሞዝኪ ኣብታ ኣብ ውዕልኪ ወይ ኣብ cao ዘላ መዓልቲ ክመጽእ ኣለዎ። ደንጒዩ ድዩ፡ ወይስ ገንዘብ ጎዲሉ? ብጽሑፍ ሕተቲ፡ ንኣብነት ብኢመይል። መግለጺታት ባንኪኺን ናይ ባዕልኪ ዝርዝር ሰዓታትን ዕቀቢ። ብዘይ ወረቐት ደሞዝ ብጥረ ገንዘብ ተኸፊልኪ? ሽዑ መብዛሕትኡ ግዜ ብዘይ ሕጋዊ መንገዲ ዝግበር ስራሕ (zwart) እዩ፡ ሰዓታትኪ ኣይተመዝገቡን፡ ደሓር ድማ ስራሕኪ ምርግጋጽ ወይ ሓገዝ ገንዘብ ምርካብ ከቢድ እዩ። ወረቐት ደሞዝ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "ደሞዝኩም ኣብታ ኣብ ውዕልኩም ወይ ኣብ cao ዘላ መዓልቲ ክመጽእ ኣለዎ። ደንጒዩ ድዩ፡ ወይስ ገንዘብ ጎዲሉ? ብጽሑፍ ሕተቱ፡ ንኣብነት ብኢመይል። መግለጺታት ባንኪኹምን ናይ ባዕልኩም ዝርዝር ሰዓታትን ዕቀቡ። ብዘይ ወረቐት ደሞዝ ብጥረ ገንዘብ ተኸፊልኩም? ሽዑ መብዛሕትኡ ግዜ ብዘይ ሕጋዊ መንገዲ ዝግበር ስራሕ (zwart) እዩ፡ ሰዓታትኩም ኣይተመዝገቡን፡ ደሓር ድማ ስራሕኩም ምርግጋጽ ወይ ሓገዝ ገንዘብ ምርካብ ከቢድ እዩ። ወረቐት ደሞዝ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.p': "ደሞዘይ ገና ኣይኣተወን። መዓስ ክመጽእ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.s': { m: "ሓላፊኻ «ካብ ሕጂ ብጥረ ገንዘብ ክኸፍለካ እየ። ወረቐት ደሞዝ የለን፡ ከምኡ ይቐልል።» ይብለካ። እንታይ ትገብር?", f: "ሓላፊኺ «ካብ ሕጂ ብጥረ ገንዘብ ክኸፍለኪ እየ። ወረቐት ደሞዝ የለን፡ ከምኡ ይቐልል።» ይብለኪ። እንታይ ትገብሪ?", x: "ሓላፊኹም «ካብ ሕጂ ብጥረ ገንዘብ ክኸፍለኩም እየ። ወረቐት ደሞዝ የለን፡ ከምኡ ይቐልል።» ይብለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o1': { m: "ኣይፋል በል፡ ወረቐት ደሞዝ ድማ ሕተት።", f: "ኣይፋል በሊ፡ ወረቐት ደሞዝ ድማ ሕተቲ።", x: "ኣይፋል በሉ፡ ወረቐት ደሞዝ ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o2': { m: "እወ በል፡ ጥረ ገንዘብ ዝያዳ ገንዘብ እዩ።", f: "እወ በሊ፡ ጥረ ገንዘብ ዝያዳ ገንዘብ እዩ።", x: "እወ በሉ፡ ጥረ ገንዘብ ዝያዳ ገንዘብ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.o3': { m: "እወ በል፡ ግን ነዛ ወርሒ ጥራይ።", f: "እወ በሊ፡ ግን ነዛ ወርሒ ጥራይ።", x: "እወ በሉ፡ ግን ነዛ ወርሒ ጥራይ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.w': { m: "ብዘይ ወረቐት ደሞዝ፡ ስራሕካ ኣብ ወረቐት የለን። ሽዑ መሰላት ክጠፍኡኻ ይኽእሉ፡ ንኣብነት ስራሕካ ምስ ሰኣንካ ሓገዝ ገንዘብ ምርካብ።", f: "ብዘይ ወረቐት ደሞዝ፡ ስራሕኪ ኣብ ወረቐት የለን። ሽዑ መሰላት ክጠፍኡኺ ይኽእሉ፡ ንኣብነት ስራሕኪ ምስ ሰኣንኪ ሓገዝ ገንዘብ ምርካብ።", x: "ብዘይ ወረቐት ደሞዝ፡ ስራሕኩም ኣብ ወረቐት የለን። ሽዑ መሰላት ክጠፍኡኹም ይኽእሉ፡ ንኣብነት ስራሕኩም ምስ ሰኣንኩም ሓገዝ ገንዘብ ምርካብ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday': { m: "መዓልትታት ዕረፍቲኻ፡ ብግዜኦም ተጠቐመሎም", f: "መዓልትታት ዕረፍቲኺ፡ ብግዜኦም ተጠቐምሎም", x: "መዓልትታት ዕረፍቲኹም፡ ብግዜኦም ተጠቐሙሎም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.b': { m: "ክንደይ መዓልትታት ዕረፍቲ ገና ከም ዘለዉኻ ኣረጋግጽ፡ መብዛሕትኡ ግዜ ኣብ ወረቐት ደሞዝካ ወይ ኣብቲ ኣፕ ይርከብ። ዕረፍቲኻ ኣቐዲምካ ኣዳሉ፡ ብጽሑፍ ድማ ሕተት። ሕጋዊ መዓልትታት ዕረፍቲኻ ድሕሪ መወዳእታ ዓመት ኣብ 6 ወርሒ ግዜኦም ይሓልፍ፡ ክትወስዶም ዘይከኣልካ እንተ ዘይኮይኑ። ካብ cao ወይ ውዕልካ ዝመጹ ተወሰኽቲ መዓልትታት ንነዊሕ ግዜ ይሰርሑ፡ መብዛሕትኡ ግዜ 5 ዓመት። ስራሕካ ይውዳእ ድዩ? ሽዑ ነቶም ዘይወሰድካዮም መዓልትታት ገንዘብ ትረክብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ክንደይ መዓልትታት ዕረፍቲ ገና ከም ዘለዉኺ ኣረጋግጺ፡ መብዛሕትኡ ግዜ ኣብ ወረቐት ደሞዝኪ ወይ ኣብቲ ኣፕ ይርከብ። ዕረፍቲኺ ኣቐዲምኪ ኣዳልዊ፡ ብጽሑፍ ድማ ሕተቲ። ሕጋዊ መዓልትታት ዕረፍቲኺ ድሕሪ መወዳእታ ዓመት ኣብ 6 ወርሒ ግዜኦም ይሓልፍ፡ ክትወስድዮም ዘይከኣልኪ እንተ ዘይኮይኑ። ካብ cao ወይ ውዕልኪ ዝመጹ ተወሰኽቲ መዓልትታት ንነዊሕ ግዜ ይሰርሑ፡ መብዛሕትኡ ግዜ 5 ዓመት። ስራሕኪ ይውዳእ ድዩ? ሽዑ ነቶም ዘይወሰድክዮም መዓልትታት ገንዘብ ትረኽቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ክንደይ መዓልትታት ዕረፍቲ ገና ከም ዘለዉኹም ኣረጋግጹ፡ መብዛሕትኡ ግዜ ኣብ ወረቐት ደሞዝኩም ወይ ኣብቲ ኣፕ ይርከብ። ዕረፍቲኹም ኣቐዲምኩም ኣዳልዉ፡ ብጽሑፍ ድማ ሕተቱ። ሕጋዊ መዓልትታት ዕረፍቲኹም ድሕሪ መወዳእታ ዓመት ኣብ 6 ወርሒ ግዜኦም ይሓልፍ፡ ክትወስድዎም ዘይከኣልኩም እንተ ዘይኮይኑ። ካብ cao ወይ ውዕልኩም ዝመጹ ተወሰኽቲ መዓልትታት ንነዊሕ ግዜ ይሰርሑ፡ መብዛሕትኡ ግዜ 5 ዓመት። ስራሕኩም ይውዳእ ድዩ? ሽዑ ነቶም ዘይወሰድኩሞም መዓልትታት ገንዘብ ትረኽቡ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.p': "መዓልትታት ዕረፍተይ ኣብዚ ዓመት ክወስዶም እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.s': { m: "ሕዳር እዩ። ካብዚ ዓመት ገና 12 መዓልትታት ዕረፍቲ ኣለዉኻ። ተቖጻጻሪኻ ብዛዕባኡ ገለ ኣይብልን። እንታይ ትገብር?", f: "ሕዳር እዩ። ካብዚ ዓመት ገና 12 መዓልትታት ዕረፍቲ ኣለዉኺ። ተቖጻጻሪኺ ብዛዕባኡ ገለ ኣይብልን። እንታይ ትገብሪ?", x: "ሕዳር እዩ። ካብዚ ዓመት ገና 12 መዓልትታት ዕረፍቲ ኣለዉኹም። ተቖጻጻሪኹም ብዛዕባኡ ገለ ኣይብልን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o1': { m: "መዓስ ክትወስዶም ከም እትኽእል ሕተት።", f: "መዓስ ክትወስድዮም ከም እትኽእሊ ሕተቲ።", x: "መዓስ ክትወስድዎም ከም እትኽእሉ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o2': { m: "ገለ ኣይትግበር፡ ንሓዋሩ ይጸንሑ።", f: "ገለ ኣይትግበሪ፡ ንሓዋሩ ይጸንሑ።", x: "ገለ ኣይትግበሩ፡ ንሓዋሩ ይጸንሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.o3': { m: "ረስዖም፡ ሕጂ ጠፊኦም እዮም።", f: "ረስዕዮም፡ ሕጂ ጠፊኦም እዮም።", x: "ረስዕዎም፡ ሕጂ ጠፊኦም እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.w': { m: "መዓልትታት ዕረፍቲ ንምዕራፍ እዮም፡ ግዜኦም ድማ ክሓልፍ ይኽእል። ብግዜኡ ምስ ሓተትካ፡ ገና ከተዳልዎም ትኽእል።", f: "መዓልትታት ዕረፍቲ ንምዕራፍ እዮም፡ ግዜኦም ድማ ክሓልፍ ይኽእል። ብግዜኡ ምስ ሓተትኪ፡ ገና ከተዳልውዮም ትኽእሊ።", x: "መዓልትታት ዕረፍቲ ንምዕራፍ እዮም፡ ግዜኦም ድማ ክሓልፍ ይኽእል። ብግዜኡ ምስ ሓተትኩም፡ ገና ከተዳልውዎም ትኽእሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special': "መርዓ፡ ቀብሪ፡ ቆልዓ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.b': { m: "ቆልዓኻ ተወሊዱ ድዩ፡ ንስኻ ድማ መጻምዲ ዲኻ? ሽዑ ኣብ ቀዳሞት 4 ሰሙን፡ ክፍሊት ዘለዎ 1 ሰሙን ፍቓድ ሕርሲ ትረክብ። caoኻ መብዛሕትኡ ግዜ ንመርዓኻ፡ ወይ ኣብ ስድራኻ ንዘጋጥም ቀብሪ፡ ፍሉይ ፍቓድ (bijzonder verlof) ይህብ። በዓላት፡ ከም ልደት፡ ዕረፍቲ ከም ዘለካ ዝብል ሕጊ የለን። ዕረፍቲ እንተ ኣለካ፡ ወይ ተወሳኺ ክፍሊት እንተ ረኺብካ፡ ውዕልካ ወይ cao እዩ ዝገልጽ። መዓልትታት ዕረፍቲኻ ብግዜኡ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ቆልዓኺ ተወሊዱ ድዩ፡ ንስኺ ድማ መጻምዲ ዲኺ? ሽዑ ኣብ ቀዳሞት 4 ሰሙን፡ ክፍሊት ዘለዎ 1 ሰሙን ፍቓድ ሕርሲ ትረኽቢ። caoኺ መብዛሕትኡ ግዜ ንመርዓኺ፡ ወይ ኣብ ስድራኺ ንዘጋጥም ቀብሪ፡ ፍሉይ ፍቓድ (bijzonder verlof) ይህብ። በዓላት፡ ከም ልደት፡ ዕረፍቲ ከም ዘለኪ ዝብል ሕጊ የለን። ዕረፍቲ እንተ ኣለኪ፡ ወይ ተወሳኺ ክፍሊት እንተ ረኺብኪ፡ ውዕልኪ ወይ cao እዩ ዝገልጽ። መዓልትታት ዕረፍቲኺ ብግዜኡ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ቆልዓኹም ተወሊዱ ድዩ፡ ንስኹም ድማ መጻምዲ ዲኹም? ሽዑ ኣብ ቀዳሞት 4 ሰሙን፡ ክፍሊት ዘለዎ 1 ሰሙን ፍቓድ ሕርሲ ትረኽቡ። caoኹም መብዛሕትኡ ግዜ ንመርዓኹም፡ ወይ ኣብ ስድራኹም ንዘጋጥም ቀብሪ፡ ፍሉይ ፍቓድ (bijzonder verlof) ይህብ። በዓላት፡ ከም ልደት፡ ዕረፍቲ ከም ዘለኩም ዝብል ሕጊ የለን። ዕረፍቲ እንተ ኣለኩም፡ ወይ ተወሳኺ ክፍሊት እንተ ረኺብኩም፡ ውዕልኩም ወይ cao እዩ ዝገልጽ። መዓልትታት ዕረፍቲኹም ብግዜኡ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.p': "ሰበይተይ ቆልዓ ክትወልድ እያ። ፍቓድ ሕርሲ ብኸመይ እሓትት?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.s': { m: "ኣቦኻ ኣብ ወጻኢ ሞይቱ። ናብ ቀብሪ ክትከይድ ትደሊ። እንታይ ትገብር?", f: "ኣቦኺ ኣብ ወጻኢ ሞይቱ። ናብ ቀብሪ ክትከዲ ትደልዪ። እንታይ ትገብሪ?", x: "ኣቦኹም ኣብ ወጻኢ ሞይቱ። ናብ ቀብሪ ክትከዱ ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o1': { m: "ንኣስራሒኻ ንገሮ፡ እንታይ ፍቓድ ክትረክብ ከም እትኽእል ድማ ሕተት።", f: "ንኣስራሒኺ ንገርዮ፡ እንታይ ፍቓድ ክትረኽቢ ከም እትኽእሊ ድማ ሕተቲ።", x: "ንኣስራሒኹም ንገርዎ፡ እንታይ ፍቓድ ክትረኽቡ ከም እትኽእሉ ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o2': { m: "ብቐጥታ ኪድ፡ ምስ ተመለስካ ድማ ንገሮም።", f: "ብቐጥታ ኪዲ፡ ምስ ተመለስኪ ድማ ንገርዮም።", x: "ብቐጥታ ኪዱ፡ ምስ ተመለስኩም ድማ ንገርዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.o3': { m: "ኣይትኺድ፡ ዝተረፈካ መዓልቲ ዕረፍቲ የለን።", f: "ኣይትኸዲ፡ ዝተረፈኪ መዓልቲ ዕረፍቲ የለን።", x: "ኣይትኸዱ፡ ዝተረፈኩም መዓልቲ ዕረፍቲ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.w': { m: "ኣስራሒኻ እዚ ኣዝዩ ኣገዳሲ ምዃኑ ይርዳእ። ብዙሓት cao ፍሉይ ፍቓድ ይህቡ፡ መዓልትታት ዕረፍቲኻ እውን ክትጥቀመሎም ትኽእል ኢኻ።", f: "ኣስራሒኺ እዚ ኣዝዩ ኣገዳሲ ምዃኑ ይርዳእ። ብዙሓት cao ፍሉይ ፍቓድ ይህቡ፡ መዓልትታት ዕረፍቲኺ እውን ክትጥቀምሎም ትኽእሊ ኢኺ።", x: "ኣስራሒኹም እዚ ኣዝዩ ኣገዳሲ ምዃኑ ይርዳእ። ብዙሓት cao ፍሉይ ፍቓድ ይህቡ፡ መዓልትታት ዕረፍቲኹም እውን ክትጥቀሙሎም ትኽእሉ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell': "ኣብ ስራሕ ወይ ኣብ ዕረፍቲ ምሕማም", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.b': { m: "ኣብ ስራሕ ሕማም ይስምዓካ ድዩ? ቅድሚ ናብ ገዛ ምኻድካ ንተቖጻጻሪኻ ንገሮ፡ እዚ ምሕባር ሕማምካ እዩ። ከይሓበርካ ኣይትኺድ። ኣብ ዕረፍቲኻ ሓሚምካ ዶ? ከምቲ ኣብ ገዛ ዝግበር ንኣስራሒኻ ሕበሮ፡ ካብ ወጻኢ እውን። ሽዑ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ካብ ሓኪም ናይቲ ቦታ ወረቐት ከድልየካ ይኽእል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ኣብ ስራሕ ሕማም ይስምዓኪ ድዩ? ቅድሚ ናብ ገዛ ምኻድኪ ንተቖጻጻሪኺ ንገርዮ፡ እዚ ምሕባር ሕማምኪ እዩ። ከይሓበርኪ ኣይትኸዲ። ኣብ ዕረፍቲኺ ሓሚምኪ ዶ? ከምቲ ኣብ ገዛ ዝግበር ንኣስራሒኺ ሕበርዮ፡ ካብ ወጻኢ እውን። ሽዑ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ካብ ሓኪም ናይቲ ቦታ ወረቐት ከድልየኪ ይኽእል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ኣብ ስራሕ ሕማም ይስምዓኩም ድዩ? ቅድሚ ናብ ገዛ ምኻድኩም ንተቖጻጻሪኹም ንገርዎ፡ እዚ ምሕባር ሕማምኩም እዩ። ከይሓበርኩም ኣይትኸዱ። ኣብ ዕረፍቲኹም ሓሚምኩም ዶ? ከምቲ ኣብ ገዛ ዝግበር ንኣስራሒኹም ሕበርዎ፡ ካብ ወጻኢ እውን። ሽዑ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ካብ ሓኪም ናይቲ ቦታ ወረቐት ከድልየኩም ይኽእል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.p': "ኣብ ዕረፍቲ ሓሚመ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.s': { m: "ኣብ ዓድኻ ኣብ ዕረፍቲ ኣለኻ። ኢንፍሉወንዛ ሒዙካ፡ ን5 መዓልቲ ኣብ ዓራት ትድቅስ። እንታይ ትገብር?", f: "ኣብ ዓድኺ ኣብ ዕረፍቲ ኣለኺ። ኢንፍሉወንዛ ሒዙኪ፡ ን5 መዓልቲ ኣብ ዓራት ትድቅሲ። እንታይ ትገብሪ?", x: "ኣብ ዓድኹም ኣብ ዕረፍቲ ኣለኹም። ኢንፍሉወንዛ ሒዙኩም፡ ን5 መዓልቲ ኣብ ዓራት ትድቅሱ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o1': { m: "ብቕጽበት ንኣስራሒኻ ሕበሮ።", f: "ብቕጽበት ንኣስራሒኺ ሕበርዮ።", x: "ብቕጽበት ንኣስራሒኹም ሕበርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o2': { m: "ገለ የለን፡ ብዝኾነ ኣብ ዕረፍቲ ኣለኻ።", f: "ገለ የለን፡ ብዝኾነ ኣብ ዕረፍቲ ኣለኺ።", x: "ገለ የለን፡ ብዝኾነ ኣብ ዕረፍቲ ኣለኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.o3': { m: "ምስ ተመለስካ ንኣስራሒኻ ንገሮ።", f: "ምስ ተመለስኪ ንኣስራሒኺ ንገርዮ።", x: "ምስ ተመለስኩም ንኣስራሒኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.w': { m: "ብግዜኡ ምስ ሓበርካ፡ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ሽዑ ነተን መዓልትታት ደሓር ክትጥቀመለን ትኽእል።", f: "ብግዜኡ ምስ ሓበርኪ፡ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ሽዑ ነተን መዓልትታት ደሓር ክትጥቀምለን ትኽእሊ።", x: "ብግዜኡ ምስ ሓበርኩም፡ መዓልትታት ሕማም መብዛሕትኡ ግዜ ከም መዓልትታት ዕረፍቲ ኣይቑጸሩን። ሽዑ ነተን መዓልትታት ደሓር ክትጥቀሙለን ትኽእሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury': { m: "ኣብ ስራሕ ምጉዳእ፡ ጽሓፎ", f: "ኣብ ስራሕ ምጉዳእ፡ ጽሓፍዮ", x: "ኣብ ስራሕ ምጉዳእ፡ ጽሓፍዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.b': { m: "ኣብ ስራሕ ተጎዲእካ ዶ? እንታይ ከም ዘጋጠመ፡ መዓስን ኣበይን፡ መን ከም ዝረኣዮን ጽሓፍ። ስእልታት ልዓል፡ ኩሉ ወረቐታት ሓኪም ድማ ዕቀብ። ቅዳሕ ጸብጻብ ሓደጋ ሕተት። እቲ ስራሕ ውሑስ ስለ ዘይነበረ ዲኻ ተጎዲእካ? ሽዑ መብዛሕትኡ ግዜ ኣስራሒኻ ንጉድኣትካ ክኸፍል ኣለዎ። ጌጋ ናቶም ምዃኑ ከተረጋግጽ የብልካን፡ ኣስራሒ እዩ ንድሕነትካ እኹል ከም ዝገበረ ከርኢ ዘለዎ። ቅድሚ ገለ ምፍራምካ ምኽሪ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ኣብ ስራሕ ተጎዲእኪ ዶ? እንታይ ከም ዘጋጠመ፡ መዓስን ኣበይን፡ መን ከም ዝረኣዮን ጽሓፊ። ስእልታት ልዓሊ፡ ኩሉ ወረቐታት ሓኪም ድማ ዕቀቢ። ቅዳሕ ጸብጻብ ሓደጋ ሕተቲ። እቲ ስራሕ ውሑስ ስለ ዘይነበረ ዲኺ ተጎዲእኪ? ሽዑ መብዛሕትኡ ግዜ ኣስራሒኺ ንጉድኣትኪ ክኸፍል ኣለዎ። ጌጋ ናቶም ምዃኑ ከተረጋግጺ የብልክን፡ ኣስራሒ እዩ ንድሕነትኪ እኹል ከም ዝገበረ ከርኢ ዘለዎ። ቅድሚ ገለ ምፍራምኪ ምኽሪ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ኣብ ስራሕ ተጎዲእኩም ዶ? እንታይ ከም ዘጋጠመ፡ መዓስን ኣበይን፡ መን ከም ዝረኣዮን ጽሓፉ። ስእልታት ልዓሉ፡ ኩሉ ወረቐታት ሓኪም ድማ ዕቀቡ። ቅዳሕ ጸብጻብ ሓደጋ ሕተቱ። እቲ ስራሕ ውሑስ ስለ ዘይነበረ ዲኹም ተጎዲእኩም? ሽዑ መብዛሕትኡ ግዜ ኣስራሒኹም ንጉድኣትኩም ክኸፍል ኣለዎ። ጌጋ ናቶም ምዃኑ ከተረጋግጹ የብልኩምን፡ ኣስራሒ እዩ ንድሕነትኩም እኹል ከም ዝገበረ ከርኢ ዘለዎ። ቅድሚ ገለ ምፍራምኩም ምኽሪ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.p': "ቅዳሕ እቲ ጸብጻብ ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.s': { m: "ኣብ ዘይተሓለወ ማሽን ኢድካ ተጎዲኣ። ደሓር ሓላፊኻ «ጌጋ ናተይ እዩ ነይሩ።» ዝብል ወረቐት ክትፍርም ይሓተካ። እንታይ ትገብር?", f: "ኣብ ዘይተሓለወ ማሽን ኢድኪ ተጎዲኣ። ደሓር ሓላፊኺ «ጌጋ ናተይ እዩ ነይሩ።» ዝብል ወረቐት ክትፍርሚ ይሓተኪ። እንታይ ትገብሪ?", x: "ኣብ ዘይተሓለወ ማሽን ኢድኩም ተጎዲኣ። ደሓር ሓላፊኹም «ጌጋ ናተይ እዩ ነይሩ።» ዝብል ወረቐት ክትፍርሙ ይሓተኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o1': { m: "ኣይትፈርሞ። ቅድም ምኽሪ ሕተት።", f: "ኣይትፈርምዮ። ቅድም ምኽሪ ሕተቲ።", x: "ኣይትፈርምዎ። ቅድም ምኽሪ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o2': { m: "ጸገም ከይመጽእ ፈርሞ።", f: "ጸገም ከይመጽእ ፈርምዮ።", x: "ጸገም ከይመጽእ ፈርምዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.o3': { m: "ፈርሞ፡ ግን ስእሉ ዕቀብ።", f: "ፈርምዮ፡ ግን ስእሉ ዕቀቢ።", x: "ፈርምዎ፡ ግን ስእሉ ዕቀቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.w': { m: "ዝፈረምካዮ ደሓር ክቑጸር ይኽእል፡ ንኣብነት ካሕሳ ምስ ሓተትካ። ቅድም ካብ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምኽሪ ውሰድ።", f: "ዝፈረምክዮ ደሓር ክቑጸር ይኽእል፡ ንኣብነት ካሕሳ ምስ ሓተትኪ። ቅድም ካብ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምኽሪ ውሰዲ።", x: "ዝፈረምኩሞ ደሓር ክቑጸር ይኽእል፡ ንኣብነት ካሕሳ ምስ ሓተትኩም። ቅድም ካብ ማሕበር ሰራሕተኛታት ወይ Juridisch Loket ምኽሪ ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt': "ዘይውዳእ ዕዳ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.b': { m: "ኣብ ሆላንድ፡ ኤጀንሲ ስራሕ ስለ ዝረኸበልካ ገንዘብ ክሓተካ ኣይፍቀደሉን። ንጉዕዞ ወይ ንስራሕ ገንዘብ ክትለቅሕ ነይሩካ ድዩ፡ እቲ ዕዳ ድማ ይውስኽ ድዩ? ክሳብ ዝኽፈል ክትጸንሕ ኣለካ ድዩ? እዚ ምልክት ምዝመዛ እዩ። ዕዳ ፈጺሙ ክትሰርሕ ክትቅጽል ኣለካ ማለት ኣይኮነን፡ ከተቋርጽ ይፍቀደልካ እዩ። ብዛዕባ እቲ ዕዳ ዘሎ ኩሉ ወረቐትን መልእኽትን ዕቀብ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "ኣብ ሆላንድ፡ ኤጀንሲ ስራሕ ስለ ዝረኸበልኪ ገንዘብ ክሓተኪ ኣይፍቀደሉን። ንጉዕዞ ወይ ንስራሕ ገንዘብ ክትለቅሒ ነይሩኪ ድዩ፡ እቲ ዕዳ ድማ ይውስኽ ድዩ? ክሳብ ዝኽፈል ክትጸንሒ ኣለኪ ድዩ? እዚ ምልክት ምዝመዛ እዩ። ዕዳ ፈጺሙ ክትሰርሒ ክትቅጽሊ ኣለኪ ማለት ኣይኮነን፡ ከተቋርጺ ይፍቀደልኪ እዩ። ብዛዕባ እቲ ዕዳ ዘሎ ኩሉ ወረቐትን መልእኽትን ዕቀቢ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "ኣብ ሆላንድ፡ ኤጀንሲ ስራሕ ስለ ዝረኸበልኩም ገንዘብ ክሓተኩም ኣይፍቀደሉን። ንጉዕዞ ወይ ንስራሕ ገንዘብ ክትለቅሑ ነይሩኩም ድዩ፡ እቲ ዕዳ ድማ ይውስኽ ድዩ? ክሳብ ዝኽፈል ክትጸንሑ ኣለኩም ድዩ? እዚ ምልክት ምዝመዛ እዩ። ዕዳ ፈጺሙ ክትሰርሑ ክትቅጽሉ ኣለኩም ማለት ኣይኮነን፡ ከተቋርጹ ይፍቀደልኩም እዩ። ብዛዕባ እቲ ዕዳ ዘሎ ኩሉ ወረቐትን መልእኽትን ዕቀቡ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.p': "ገና ክንደይ ክኸፍል ኣለኒ? ብጽሑፍ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.s': { m: "ኤጀንሲ ስራሕ ትኬት ኣውቶቡስካ ከፊሉ። ሕጂ ሰሙን ሰሙን ካብ ደሞዝካ ገንዘብ ይቖርጽ፡ እቲ ዕዳ ድማ ኣይንኪን። እንታይ ትገብር?", f: "ኤጀንሲ ስራሕ ትኬት ኣውቶቡስኪ ከፊሉ። ሕጂ ሰሙን ሰሙን ካብ ደሞዝኪ ገንዘብ ይቖርጽ፡ እቲ ዕዳ ድማ ኣይንኪን። እንታይ ትገብሪ?", x: "ኤጀንሲ ስራሕ ትኬት ኣውቶቡስኩም ከፊሉ። ሕጂ ሰሙን ሰሙን ካብ ደሞዝኩም ገንዘብ ይቖርጽ፡ እቲ ዕዳ ድማ ኣይንኪን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o1': { m: "ብጽሑፍ ዝርዝር ሕተት፡ ሓገዝ ድማ ድለ።", f: "ብጽሑፍ ዝርዝር ሕተቲ፡ ሓገዝ ድማ ድለዪ።", x: "ብጽሑፍ ዝርዝር ሕተቱ፡ ሓገዝ ድማ ድለዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o2': { m: "ቀልጢፍካ ክትከፍል ዝያዳ ሰዓታት ስራሕ።", f: "ቀልጢፍኪ ክትከፍሊ ዝያዳ ሰዓታት ስርሒ።", x: "ቀልጢፍኩም ክትከፍሉ ዝያዳ ሰዓታት ስርሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.o3': { m: "ገለ ኣይትበል፡ ኤጀንሲ ሓጊዙካ እዩ።", f: "ገለ ኣይትበሊ፡ ኤጀንሲ ሓጊዙኪ እዩ።", x: "ገለ ኣይትበሉ፡ ኤጀንሲ ሓጊዙኩም እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.w': { m: "ዘይንኪ ዕዳ ተታሒዝካ ከም እትተርፍ ይገብር። ብቲ ዝርዝር፡ ማሕበር ሰራሕተኛታት ወይ FairWork ፍትሓዊ እንተ ኾይኑ ከረጋግጹ ይኽእሉ።", f: "ዘይንኪ ዕዳ ተታሒዝኪ ከም እትተርፊ ይገብር። ብቲ ዝርዝር፡ ማሕበር ሰራሕተኛታት ወይ FairWork ፍትሓዊ እንተ ኾይኑ ከረጋግጹ ይኽእሉ።", x: "ዘይንኪ ዕዳ ተታሒዝኩም ከም እትተርፉ ይገብር። ብቲ ዝርዝር፡ ማሕበር ሰራሕተኛታት ወይ FairWork ፍትሓዊ እንተ ኾይኑ ከረጋግጹ ይኽእሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection': { m: "መርመራ ንዓኻ እዩ ዘሎ", f: "መርመራ ንዓኺ እዩ ዘሎ", x: "መርመራ ንዓኹም እዩ ዘሎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.b': { m: "Nederlandse Arbeidsinspectie ስራሕ ውሑስን ፍትሓውን ምዃኑ ይፍትሽ፡ ደሞዝ፡ ሰዓታትን ምዝመዛን። መርመርቲ ናብ ስራሕካ መጺኦም ምስ ሰራሕተኛታት ክዛረቡ ይፍቀደሎም። ሓቂ ክትነግሮም ይፍቀደልካ፡ መን ከም ዝሓበረ ንሓላፊኻ ኣይነግሩን። ብቋንቋኻ ሓገዝ የድልየካ ድዩ? ተርጓሚ ሕተት። FairWork ንግዳያት ምዝመዛ ብነጻ ይሕግዝ፡ ዝሰርሕ ወረቐት ንዘይብሎም ሰባት እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "Nederlandse Arbeidsinspectie ስራሕ ውሑስን ፍትሓውን ምዃኑ ይፍትሽ፡ ደሞዝ፡ ሰዓታትን ምዝመዛን። መርመርቲ ናብ ስራሕኪ መጺኦም ምስ ሰራሕተኛታት ክዛረቡ ይፍቀደሎም። ሓቂ ክትነግርዮም ይፍቀደልኪ፡ መን ከም ዝሓበረ ንሓላፊኺ ኣይነግሩን። ብቋንቋኺ ሓገዝ የድልየኪ ድዩ? ተርጓሚ ሕተቲ። FairWork ንግዳያት ምዝመዛ ብነጻ ይሕግዝ፡ ዝሰርሕ ወረቐት ንዘይብሎም ሰባት እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "Nederlandse Arbeidsinspectie ስራሕ ውሑስን ፍትሓውን ምዃኑ ይፍትሽ፡ ደሞዝ፡ ሰዓታትን ምዝመዛን። መርመርቲ ናብ ስራሕኩም መጺኦም ምስ ሰራሕተኛታት ክዛረቡ ይፍቀደሎም። ሓቂ ክትነግርዎም ይፍቀደልኩም፡ መን ከም ዝሓበረ ንሓላፊኹም ኣይነግሩን። ብቋንቋኹም ሓገዝ የድልየኩም ድዩ? ተርጓሚ ሕተቱ። FairWork ንግዳያት ምዝመዛ ብነጻ ይሕግዝ፡ ዝሰርሕ ወረቐት ንዘይብሎም ሰባት እውን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.p': "ገለ ክነግር እደሊ፡ ግን ሓላፊየይ ከይሃለወ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.s': { m: "ሓደ መርማሪ ብዛዕባ ሰዓታትካ ይሓተካ። ሓላፊኻ 8 ሰዓት ክትብል ነጊሩካ። ንስኻ 12 ትሰርሕ። እንታይ ትገብር?", f: "ሓደ መርማሪ ብዛዕባ ሰዓታትኪ ይሓተኪ። ሓላፊኺ 8 ሰዓት ክትብሊ ነጊሩኪ። ንስኺ 12 ትሰርሒ። እንታይ ትገብሪ?", x: "ሓደ መርማሪ ብዛዕባ ሰዓታትኩም ይሓተኩም። ሓላፊኹም 8 ሰዓት ክትብሉ ነጊሩኩም። ንስኹም 12 ትሰርሑ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o1': { m: "ንመርማሪ ሓቂ ንገሮ።", f: "ንመርማሪ ሓቂ ንገርዮ።", x: "ንመርማሪ ሓቂ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o2': { m: "ከምቲ ሓላፊኻ ዝበሎ 8 ሰዓት በል።", f: "ከምቲ ሓላፊኺ ዝበሎ 8 ሰዓት በሊ።", x: "ከምቲ ሓላፊኹም ዝበሎ 8 ሰዓት በሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.o3': { m: "ገለ ኣይትበል፡ ኪድ ድማ።", f: "ገለ ኣይትበሊ፡ ኪዲ ድማ።", x: "ገለ ኣይትበሉ፡ ኪዱ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.w': { m: "መርማሪ ክሕግዝ ዝኽእል ሓቂ ምስ ፈለጠ ጥራይ እዩ። ዝበልካዮ ንዓኻ፡ ንብጾት ስራሕካ እውን ይሕግዝ።", f: "መርማሪ ክሕግዝ ዝኽእል ሓቂ ምስ ፈለጠ ጥራይ እዩ። ዝበልክዮ ንዓኺ፡ ንብጾት ስራሕኪ እውን ይሕግዝ።", x: "መርማሪ ክሕግዝ ዝኽእል ሓቂ ምስ ፈለጠ ጥራይ እዩ። ዝበልኩሞ ንዓኹም፡ ንብጾት ስራሕኩም እውን ይሕግዝ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool': { m: "ኣብ መኪና፡ ዕጥቂ ድሕንነት ተዓጠቕ፡ ብዛዕባ ወጻኢ ድማ ተሰማማዕ", f: "ኣብ መኪና፡ ዕጥቂ ድሕንነት ተዓጠቒ፡ ብዛዕባ ወጻኢ ድማ ተሰማምዒ", x: "ኣብ መኪና፡ ዕጥቂ ድሕንነት ተዓጠቑ፡ ብዛዕባ ወጻኢ ድማ ተሰማምዑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.b': { m: "ኣብ መኪና ዘሎ ኩሉ ሰብ ዕጥቂ ድሕንነት ይዕጠቕ፡ ኣብ ድሕሪት እውን። መራሕ መኪና ዝሰርሕ ፍቓድ ምዝዋር የድልዮ፡ ቅድሚ ምዝዋር ድማ ኣልኮል ክሰቲ የብሉን። ኣብቲ ቫን ብዙሓት ሰባት ኣለዉ ድዮም፡ ወይስ መራሕ መኪና ብሓደገኛ መንገዲ ይዝውር? ንገር፡ ኣይትሳፈር ድማ። ምስ ብጾት ስራሕ ብሓባር ትጓዓዝ ዲኻ? ወጻኢ ነዳዲ ብኸመይ ከም እትመቓቐልዎ ቅድም ተሰማማዕ። ኣብ ቫን ስራሕ ናይ ኤጀንሲ? ክንደይ ከም ዘኽፍለካ ሕተት፡ ብጽሑፍ ድማ ውሰዶ።", f: "ኣብ መኪና ዘሎ ኩሉ ሰብ ዕጥቂ ድሕንነት ይዕጠቕ፡ ኣብ ድሕሪት እውን። መራሕ መኪና ዝሰርሕ ፍቓድ ምዝዋር የድልዮ፡ ቅድሚ ምዝዋር ድማ ኣልኮል ክሰቲ የብሉን። ኣብቲ ቫን ብዙሓት ሰባት ኣለዉ ድዮም፡ ወይስ መራሕ መኪና ብሓደገኛ መንገዲ ይዝውር? ንገሪ፡ ኣይትሳፈሪ ድማ። ምስ ብጾት ስራሕ ብሓባር ትጓዓዚ ዲኺ? ወጻኢ ነዳዲ ብኸመይ ከም እትመቓቐልዎ ቅድም ተሰማምዒ። ኣብ ቫን ስራሕ ናይ ኤጀንሲ? ክንደይ ከም ዘኽፍለኪ ሕተቲ፡ ብጽሑፍ ድማ ውሰድዮ።", x: "ኣብ መኪና ዘሎ ኩሉ ሰብ ዕጥቂ ድሕንነት ይዕጠቕ፡ ኣብ ድሕሪት እውን። መራሕ መኪና ዝሰርሕ ፍቓድ ምዝዋር የድልዮ፡ ቅድሚ ምዝዋር ድማ ኣልኮል ክሰቲ የብሉን። ኣብቲ ቫን ብዙሓት ሰባት ኣለዉ ድዮም፡ ወይስ መራሕ መኪና ብሓደገኛ መንገዲ ይዝውር? ንገሩ፡ ኣይትሳፈሩ ድማ። ምስ ብጾት ስራሕ ብሓባር ትጓዓዙ ዲኹም? ወጻኢ ነዳዲ ብኸመይ ከም እትመቓቐልዎ ቅድም ተሰማምዑ። ኣብ ቫን ስራሕ ናይ ኤጀንሲ? ክንደይ ከም ዘኽፍለኩም ሕተቱ፡ ብጽሑፍ ድማ ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.p': "ኣብቲ ቫን ኣዝዮም ብዙሓት ሰባት ኣለዉ። ኣይስፈርን እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.s': { m: "እቲ ቫን ስራሕ 9 መቐመጢ ኣለዎ። ሎሚ ንግሆ 11 ሰባት ክሳፈሩ ይደልዩ። እንታይ ትገብር?", f: "እቲ ቫን ስራሕ 9 መቐመጢ ኣለዎ። ሎሚ ንግሆ 11 ሰባት ክሳፈሩ ይደልዩ። እንታይ ትገብሪ?", x: "እቲ ቫን ስራሕ 9 መቐመጢ ኣለዎ። ሎሚ ንግሆ 11 ሰባት ክሳፈሩ ይደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o1': { m: "ኣይትሳፈር፡ ንተቖጻጻሪኻ ድማ ደውለሉ።", f: "ኣይትሳፈሪ፡ ንተቖጻጻሪኺ ድማ ደውልሉ።", x: "ኣይትሳፈሩ፡ ንተቖጻጻሪኹም ድማ ደውሉሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o2': { m: "ኣብ ድሕሪት ኣብ መሬት ኮፍ በል።", f: "ኣብ ድሕሪት ኣብ መሬት ኮፍ በሊ።", x: "ኣብ ድሕሪት ኣብ መሬት ኮፍ በሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.o3': { m: "ተጸቒጥካ ተሳፈር፡ 20 ደቒቕ ጥራይ እዩ።", f: "ተጸቒጥኪ ተሳፈሪ፡ 20 ደቒቕ ጥራይ እዩ።", x: "ተጸቒጥኩም ተሳፈሩ፡ 20 ደቒቕ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.w': { m: "ብዘይ መቐመጥን ዕጥቂ ድሕንነትን፡ ንእሽቶ ሓደጋ ኣዝዩ ከቢድ ክኸውን ይኽእል። ኣስራሒኻ ወይ ኤጀንሲ ካልእ መንገዲ ክረኽቡ ይኽእሉ።", f: "ብዘይ መቐመጥን ዕጥቂ ድሕንነትን፡ ንእሽቶ ሓደጋ ኣዝዩ ከቢድ ክኸውን ይኽእል። ኣስራሒኺ ወይ ኤጀንሲ ካልእ መንገዲ ክረኽቡ ይኽእሉ።", x: "ብዘይ መቐመጥን ዕጥቂ ድሕንነትን፡ ንእሽቶ ሓደጋ ኣዝዩ ከቢድ ክኸውን ይኽእል። ኣስራሒኹም ወይ ኤጀንሲ ካልእ መንገዲ ክረኽቡ ይኽእሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train': { m: "ባቡር ደንጒዩ? ብቕጽበት መልእኽቲ ስደድ", f: "ባቡር ደንጒዩ? ብቕጽበት መልእኽቲ ስደዲ", x: "ባቡር ደንጒዩ? ብቕጽበት መልእኽቲ ስደዱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.b': { m: "ቅድሚ ምውጻእካ መደብ ጉዕዞ ርአ፡ ባቡራትን ኣውቶቡሳትን ክደናጐዩ ወይ ክስረዙ ይኽእሉ። ባቡርካ ደንጒዩ ድዩ? ብቕጽበት ንተቖጻጻሪኻ መልእኽቲ ስደደሉ፡ ምስቲ እትበጽሓሉ ሰዓት። ማዕበል ወይ ኣብ መስመር ስራሕ ኣብ ዘለዎ መዓልትታት፡ ዝቐደመ ባቡር ውሰድ። ድሕሪ ነዊሕ ምድንጓይ፡ መብዛሕትኡ ግዜ ገንዘብ ክምለሰካ ይኽእል፡ ኣብ መርበብ ሓበሬታ ትካል ባቡር ርአ።", f: "ቅድሚ ምውጻእኪ መደብ ጉዕዞ ርአዪ፡ ባቡራትን ኣውቶቡሳትን ክደናጐዩ ወይ ክስረዙ ይኽእሉ። ባቡርኪ ደንጒዩ ድዩ? ብቕጽበት ንተቖጻጻሪኺ መልእኽቲ ስደድሉ፡ ምስቲ እትበጽሓሉ ሰዓት። ማዕበል ወይ ኣብ መስመር ስራሕ ኣብ ዘለዎ መዓልትታት፡ ዝቐደመ ባቡር ውሰዲ። ድሕሪ ነዊሕ ምድንጓይ፡ መብዛሕትኡ ግዜ ገንዘብ ክምለሰኪ ይኽእል፡ ኣብ መርበብ ሓበሬታ ትካል ባቡር ርአዪ።", x: "ቅድሚ ምውጻእኩም መደብ ጉዕዞ ርአዩ፡ ባቡራትን ኣውቶቡሳትን ክደናጐዩ ወይ ክስረዙ ይኽእሉ። ባቡርኩም ደንጒዩ ድዩ? ብቕጽበት ንተቖጻጻሪኹም መልእኽቲ ስደዱሉ፡ ምስቲ እትበጽሓሉ ሰዓት። ማዕበል ወይ ኣብ መስመር ስራሕ ኣብ ዘለዎ መዓልትታት፡ ዝቐደመ ባቡር ውሰዱ። ድሕሪ ነዊሕ ምድንጓይ፡ መብዛሕትኡ ግዜ ገንዘብ ክምለሰኩም ይኽእል፡ ኣብ መርበብ ሓበሬታ ትካል ባቡር ርአዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.p': "ባቡረይ ደንጒዩ። ሰዓት ትሽዓተ ክበጽሕ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.s': { m: "ባቡርካ ተሰሪዙ። እቲ ዝቕጽል ኣብ 30 ደቒቕ ይኸይድ። ፈረቓ ስራሕካ ኣብ 40 ደቒቕ ይጅምር። እንታይ ትገብር?", f: "ባቡርኪ ተሰሪዙ። እቲ ዝቕጽል ኣብ 30 ደቒቕ ይኸይድ። ፈረቓ ስራሕኪ ኣብ 40 ደቒቕ ይጅምር። እንታይ ትገብሪ?", x: "ባቡርኩም ተሰሪዙ። እቲ ዝቕጽል ኣብ 30 ደቒቕ ይኸይድ። ፈረቓ ስራሕኩም ኣብ 40 ደቒቕ ይጅምር። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o1': { m: "ከም እትደናጐ ሕጂ መልእኽቲ ስደድ።", f: "ከም እትደናጐዪ ሕጂ መልእኽቲ ስደዲ።", x: "ከም እትደናጐዩ ሕጂ መልእኽቲ ስደዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o2': { m: "ተጸበ፡ ምስ በጻሕካ ድማ ግለጾ።", f: "ተጸበዪ፡ ምስ በጻሕኪ ድማ ግለጽዮ።", x: "ተጸበዩ፡ ምስ በጻሕኩም ድማ ግለጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.o3': { m: "ናብ ገዛ ኪድ፡ ጌጋኻ ኣይኮነን።", f: "ናብ ገዛ ኪዲ፡ ጌጋኺ ኣይኮነን።", x: "ናብ ገዛ ኪዱ፡ ጌጋኹም ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.w': { m: "ተቖጻጻሪኻ ኣቐዲሙ ምስ ዝፈልጥ ዝሓሸ ከውጽን ይኽእል። ምድንጓይ ጌጋኻ ኣይኮነን፡ ምሕባሩ ግን ዕዮኻ እዩ።", f: "ተቖጻጻሪኺ ኣቐዲሙ ምስ ዝፈልጥ ዝሓሸ ከውጽን ይኽእል። ምድንጓይ ጌጋኺ ኣይኮነን፡ ምሕባሩ ግን ዕዮኺ እዩ።", x: "ተቖጻጻሪኹም ኣቐዲሙ ምስ ዝፈልጥ ዝሓሸ ከውጽን ይኽእል። ምድንጓይ ጌጋኹም ኣይኮነን፡ ምሕባሩ ግን ዕዮኹም እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist': { m: "ቅድም ባዕልካ ኣረጋግጽ", f: "ቅድም ባዕልኪ ኣረጋግጺ", x: "ቅድም ባዕልኩም ኣረጋግጹ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.b': { m: "«klaar» ቅድሚ ምባልካ፡ ስራሕካ ኣረጋግጽ። ዝርዝር ምርግጋጽ እንተ ሃልዩ ተጠቐመሉ፡ ነፍሲ ወከፍ ስጉምቲ ድማ ምልክት ግበረሉ። ከም ዓሚል ኮንካ ንስራሕካ ርአዮ። ሓደ ነገር ጽቡቕ ኣይኮነን? ሕጂ ደጊምካ ግበሮ፡ ካብ ደሓር ይቀልጥፍ። ርግጸኛ ኣይኮንካን? ንብጻይ ስራሕ ክርእዮ ሕተቶ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "«klaar» ቅድሚ ምባልኪ፡ ስራሕኪ ኣረጋግጺ። ዝርዝር ምርግጋጽ እንተ ሃልዩ ተጠቐምሉ፡ ነፍሲ ወከፍ ስጉምቲ ድማ ምልክት ግበርሉ። ከም ዓሚል ኮንኪ ንስራሕኪ ርአይዮ። ሓደ ነገር ጽቡቕ ኣይኮነን? ሕጂ ደጊምኪ ግበርዮ፡ ካብ ደሓር ይቀልጥፍ። ርግጸኛ ኣይኮንክን? ንብጻይ ስራሕ ክርእዮ ሕተትዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "«klaar» ቅድሚ ምባልኩም፡ ስራሕኩም ኣረጋግጹ። ዝርዝር ምርግጋጽ እንተ ሃልዩ ተጠቐሙሉ፡ ነፍሲ ወከፍ ስጉምቲ ድማ ምልክት ግበሩሉ። ከም ዓሚል ኮንኩም ንስራሕኩም ርአይዎ። ሓደ ነገር ጽቡቕ ኣይኮነን? ሕጂ ደጊምኩም ግበርዎ፡ ካብ ደሓር ይቀልጥፍ። ርግጸኛ ኣይኮንኩምን? ንብጻይ ስራሕ ክርእዮ ሕተትዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.p': "ወዲአ። ንሓጺር ግዜ ክትርእይዎ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.s': { m: "ወዲእካ። ኣብ ዝርዝር ምርግጋጽ ሓደ ስጉምቲ ምልክት ኣይተገብረሉን። ከም ዝገበርካዮ ትሓስብ። እንታይ ትገብር?", f: "ወዲእኪ። ኣብ ዝርዝር ምርግጋጽ ሓደ ስጉምቲ ምልክት ኣይተገብረሉን። ከም ዝገበርክዮ ትሓስቢ። እንታይ ትገብሪ?", x: "ወዲእኩም። ኣብ ዝርዝር ምርግጋጽ ሓደ ስጉምቲ ምልክት ኣይተገብረሉን። ከም ዝገበርኩሞ ትሓስቡ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o1': { m: "ነቲ ስጉምቲ ደጊምካ ኣረጋግጽ፡ ድሕሪኡ ምልክት ግበረሉ።", f: "ነቲ ስጉምቲ ደጊምኪ ኣረጋግጺ፡ ድሕሪኡ ምልክት ግበርሉ።", x: "ነቲ ስጉምቲ ደጊምኩም ኣረጋግጹ፡ ድሕሪኡ ምልክት ግበሩሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.o2': { m: "ምልክት ግበረሉ፡ ምናልባት ገይርካዮ ትኸውን።", f: "ምልክት ግበርሉ፡ ምናልባት ገይርክዮ ትኸውን።", x: "ምልክት ግበሩሉ፡ ምናልባት ገይርኩሞ ትኸውን።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.checklist.o3': { m: "ክፉት ግደፎ፡ ነቲ ዝርዝር ዘንብቦ የለን።", f: "ክፉት ግደፍዮ፡ ነቲ ዝርዝር ዘንብቦ የለን።", x: "ክፉት ግደፍዎ፡ ነቲ ዝርዝር ዘንብቦ የለን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.w': "ዝርዝር ምርግጋጽ ዝሕግዝ ሓቂ ምስ ዝኸውን ጥራይ እዩ። ካልኣይ ግዜ ምርኣይ ሓንቲ ደቒቕ ይወስድ። ጌጋ ሰዓታት ክወስድ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite': { m: "ከምቲ ክትረኽቦ እትደሊ ግደፎ", f: "ከምቲ ክትረኽቦ እትደሊ ግደፍዮ", x: "ከምቲ ክትረኽቦ እትደሊ ግደፍዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.b': { m: "ኣብ መወዳእታ ስራሕካ፡ ቦታኻ ጽሩይን ውሑስን ግደፎ። መሳርሒታትን ኣቑሑን ናብ ቦትኦም መልሶም፡ መሬት ድማ ጽረጎ። ዝተጠቐምካሎም ማሽናትን መብራህትን ኣጥፍኦም። ናይ መወዳእታ ዲኻ? መሳኹትን ማዕጾታትን ኣረጋግጽ፡ ከምቲ ትካልካ ዝብሎ ድማ ብመፍትሕ ዕጸው። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ መወዳእታ ስራሕኪ፡ ቦታኺ ጽሩይን ውሑስን ግደፍዮ። መሳርሒታትን ኣቑሑን ናብ ቦትኦም መልስዮም፡ መሬት ድማ ጽረግዮ። ዝተጠቐምክሎም ማሽናትን መብራህትን ኣጥፍእዮም። ናይ መወዳእታ ዲኺ? መሳኹትን ማዕጾታትን ኣረጋግጺ፡ ከምቲ ትካልኪ ዝብሎ ድማ ብመፍትሕ ዕጸዊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ መወዳእታ ስራሕኩም፡ ቦታኹም ጽሩይን ውሑስን ግደፍዎ። መሳርሒታትን ኣቑሑን ናብ ቦትኦም መልስዎም፡ መሬት ድማ ጽረግዎ። ዝተጠቐምኩምሎም ማሽናትን መብራህትን ኣጥፍእዎም። ናይ መወዳእታ ዲኹም? መሳኹትን ማዕጾታትን ኣረጋግጹ፡ ከምቲ ትካልኩም ዝብሎ ድማ ብመፍትሕ ዕጸዉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.p': "ኣነ ናይ መወዳእታ እየ። ነቲ ማዕጾ ብመፍትሕ ክዓጽዎ ኣለኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.s': { m: "ኣብ ስራሕ ናይ መወዳእታ ኢኻ። ደወል ሓደጋ ብኸመይ ከም ዝኽፈት ኣይትፈልጥን። እንታይ ትገብር?", f: "ኣብ ስራሕ ናይ መወዳእታ ኢኺ። ደወል ሓደጋ ብኸመይ ከም ዝኽፈት ኣይትፈልጢን። እንታይ ትገብሪ?", x: "ኣብ ስራሕ ናይ መወዳእታ ኢኹም። ደወል ሓደጋ ብኸመይ ከም ዝኽፈት ኣይትፈልጡን። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.leavesite.o1': { m: "ንተቖጻጻሪኻ ደውል፡ ሕተቶ ድማ።", f: "ንተቖጻጻሪኺ ደውሊ፡ ሕተትዮ ድማ።", x: "ንተቖጻጻሪኹም ደውሉ፡ ሕተትዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o2': { m: "ብዘይ ደወል ሓደጋ ኪድ፡ ኣምሲዩ እዩ።", f: "ብዘይ ደወል ሓደጋ ኪዲ፡ ኣምሲዩ እዩ።", x: "ብዘይ ደወል ሓደጋ ኪዱ፡ ኣምሲዩ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.o3': { m: "ክሳብ ዝጭርሕ መጠወቒታት ፈትን።", f: "ክሳብ ዝጭርሕ መጠወቒታት ፈትኒ።", x: "ክሳብ ዝጭርሕ መጠወቒታት ፈትኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.w': { m: "ብዘይ ደወል ሓደጋ ዘሎ ህንጻ ውሑስ ኣይኮነን። ተቖጻጻሪኻ ጽባሕ ጸገም ካብ ዝረክብ፡ ሕጂ ተሌፎን እንተ በጽሖ ይሓይሽ።", f: "ብዘይ ደወል ሓደጋ ዘሎ ህንጻ ውሑስ ኣይኮነን። ተቖጻጻሪኺ ጽባሕ ጸገም ካብ ዝረክብ፡ ሕጂ ተሌፎን እንተ በጽሖ ይሓይሽ።", x: "ብዘይ ደወል ሓደጋ ዘሎ ህንጻ ውሑስ ኣይኮነን። ተቖጻጻሪኹም ጽባሕ ጸገም ካብ ዝረክብ፡ ሕጂ ተሌፎን እንተ በጽሖ ይሓይሽ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays': "ተመሃራይ፡ ብጻይ ስራሕ ድማ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.b': { m: "ኣብ ልምምድ ስራሕ ክትመሃር ኢኻ ዘለኻ፡ ግን ከም ብጻይ ስራሕ ትሰርሕ፡ ብሰዓቱ፡ ብሕግታት ገዛ፡ ምስ ሓመምካ ድማ ትድውል። ብዙሕ ሕቶታት ክትሓትት ይፍቀደልካ፡ ስለኡ እዩ ኣብኡ ዘለኻ። ስራሕካ ክትመሃር ክሕግዘካ ኣለዎ፡ ምሉእ መዓልቲ ምጽራይ ወይ ምጽዓን ጥራይ ኣይኮነን። ከምኡ ኣይኮነን? ምስ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ተዛረብ። ክፍሊት ልምምድ ኩሉ ግዜ ኣይወሃብን፡ ቅድሚ ምጅማርካ ብዛዕባኡ ሕተት። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድካ ሕተት።", f: "ኣብ ልምምድ ስራሕ ክትመሃሪ ኢኺ ዘለኺ፡ ግን ከም ብጻይ ስራሕ ትሰርሒ፡ ብሰዓቱ፡ ብሕግታት ገዛ፡ ምስ ሓመምኪ ድማ ትድውሊ። ብዙሕ ሕቶታት ክትሓትቲ ይፍቀደልኪ፡ ስለኡ እዩ ኣብኡ ዘለኺ። ስራሕኪ ክትመሃሪ ክሕግዘኪ ኣለዎ፡ ምሉእ መዓልቲ ምጽራይ ወይ ምጽዓን ጥራይ ኣይኮነን። ከምኡ ኣይኮነን? ምስ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ተዛረቢ። ክፍሊት ልምምድ ኩሉ ግዜ ኣይወሃብን፡ ቅድሚ ምጅማርኪ ብዛዕባኡ ሕተቲ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድኪ ሕተቲ።", x: "ኣብ ልምምድ ስራሕ ክትመሃሩ ኢኹም ዘለኹም፡ ግን ከም ብጻይ ስራሕ ትሰርሑ፡ ብሰዓቱ፡ ብሕግታት ገዛ፡ ምስ ሓመምኩም ድማ ትድውሉ። ብዙሕ ሕቶታት ክትሓትቱ ይፍቀደልኩም፡ ስለኡ እዩ ኣብኡ ዘለኹም። ስራሕኩም ክትመሃሩ ክሕግዘኩም ኣለዎ፡ ምሉእ መዓልቲ ምጽራይ ወይ ምጽዓን ጥራይ ኣይኮነን። ከምኡ ኣይኮነን? ምስ ተኸታታሊ ልምምድ ኣብ ቤት ትምህርቲ ተዛረቡ። ክፍሊት ልምምድ ኩሉ ግዜ ኣይወሃብን፡ ቅድሚ ምጅማርኩም ብዛዕባኡ ሕተቱ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድኩም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.p': "እዚ እውን ክመሃሮ እደሊ። ክርኢ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.s': { m: "ኣብ ልምምድ ስራሕካ፡ መዓልቲ መዓልቲ ን3 ሰሙን፡ ካንቲና ጥራይ ተጽሪ። እንታይ ትገብር?", f: "ኣብ ልምምድ ስራሕኪ፡ መዓልቲ መዓልቲ ን3 ሰሙን፡ ካንቲና ጥራይ ተጽርዪ። እንታይ ትገብሪ?", x: "ኣብ ልምምድ ስራሕኩም፡ መዓልቲ መዓልቲ ን3 ሰሙን፡ ካንቲና ጥራይ ተጽርዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o1': { m: "ምስ ተኸታታሊ ልምምድካ ብዛዕባኡ ተዛረብ።", f: "ምስ ተኸታታሊ ልምምድኪ ብዛዕባኡ ተዛረቢ።", x: "ምስ ተኸታታሊ ልምምድኩም ብዛዕባኡ ተዛረቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o2': { m: "ግበሮ፡ ገለ ድማ ኣይትበል፡ ተመሃራይ ኢኻ።", f: "ግበርዮ፡ ገለ ድማ ኣይትበሊ፡ ተመሃራይ ኢኺ።", x: "ግበርዎ፡ ገለ ድማ ኣይትበሉ፡ ተመሃራይ ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.o3': { m: "ካልእ ስራሕ ክሳብ ዝህቡኻ ኣብ ገዛ ጽናሕ።", f: "ካልእ ስራሕ ክሳብ ዝህቡኺ ኣብ ገዛ ጽንሒ።", x: "ካልእ ስራሕ ክሳብ ዝህቡኹም ኣብ ገዛ ጽንሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.w': { m: "ልምምድ ስራሕ ሞያኻ ንምምሃር እዩ። ተኸታታሊኻ ብዛዕባ ዝሓሸ ዕዮታት ምስቲ ትካል ክዛረብ ይኽእል።", f: "ልምምድ ስራሕ ሞያኺ ንምምሃር እዩ። ተኸታታሊኺ ብዛዕባ ዝሓሸ ዕዮታት ምስቲ ትካል ክዛረብ ይኽእል።", x: "ልምምድ ስራሕ ሞያኹም ንምምሃር እዩ። ተኸታታሊኹም ብዛዕባ ዝሓሸ ዕዮታት ምስቲ ትካል ክዛረብ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend': { m: "ጽቡቕ ዛዝም፡ መወከሲ ድማ ሕተት", f: "ጽቡቕ ዛዝሚ፡ መወከሲ ድማ ሕተቲ", x: "ጽቡቕ ዛዝሙ፡ መወከሲ ድማ ሕተቱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.b': { m: "ኣብ ናይ መወዳእታ ዝርርብ፡ እንታይ ጽቡቕ ከም ዝኸደን እንታይ ክመሓየሽ ከም ዝኽእልን ትሰምዕ። ኣብነታት ሕተት፡ ንዝመጽእ ስራሕካ ድማ ጽሓፎም። ጽቡቕ ከይዱ ድዩ? ስሞም ከም መወከሲ ክትህብ ይፍቀደልካ እንተ ኾይኑ ሕተት። ኣብ ናይ መወዳእታ መዓልትኻ፡ ንብጾት ስራሕካ ኣመስግኖም፡ ኣብዚ ብዙሓት ሰባት ከም ኬክ ወይ ከረሜላ ዝኣመሰለ ንእሽቶ መብልዕ የምጽኡ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድካ ሕተት።", f: "ኣብ ናይ መወዳእታ ዝርርብ፡ እንታይ ጽቡቕ ከም ዝኸደን እንታይ ክመሓየሽ ከም ዝኽእልን ትሰምዒ። ኣብነታት ሕተቲ፡ ንዝመጽእ ስራሕኪ ድማ ጽሓፍዮም። ጽቡቕ ከይዱ ድዩ? ስሞም ከም መወከሲ ክትህቢ ይፍቀደልኪ እንተ ኾይኑ ሕተቲ። ኣብ ናይ መወዳእታ መዓልትኺ፡ ንብጾት ስራሕኪ ኣመስግንዮም፡ ኣብዚ ብዙሓት ሰባት ከም ኬክ ወይ ከረሜላ ዝኣመሰለ ንእሽቶ መብልዕ የምጽኡ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድኪ ሕተቲ።", x: "ኣብ ናይ መወዳእታ ዝርርብ፡ እንታይ ጽቡቕ ከም ዝኸደን እንታይ ክመሓየሽ ከም ዝኽእልን ትሰምዑ። ኣብነታት ሕተቱ፡ ንዝመጽእ ስራሕኩም ድማ ጽሓፍዎም። ጽቡቕ ከይዱ ድዩ? ስሞም ከም መወከሲ ክትህቡ ይፍቀደልኩም እንተ ኾይኑ ሕተቱ። ኣብ ናይ መወዳእታ መዓልትኹም፡ ንብጾት ስራሕኩም ኣመስግንዎም፡ ኣብዚ ብዙሓት ሰባት ከም ኬክ ወይ ከረሜላ ዝኣመሰለ ንእሽቶ መብልዕ የምጽኡ። ሕግታት ካብ ቤት ትምህርቲ ናብ ቤት ትምህርቲ ይፈላለ፡ ንተኸታታሊ ልምምድኩም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.p': "ስምኩም ከም መወከሲ ክህብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.s': { m: "ናይ መወዳእታ መዓልቲ ልምምድ ስራሕካ እያ። እንታይ ትገብር?", f: "ናይ መወዳእታ መዓልቲ ልምምድ ስራሕኪ እያ። እንታይ ትገብሪ?", x: "ናይ መወዳእታ መዓልቲ ልምምድ ስራሕኩም እያ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o1': { m: "ንብጾት ስራሕካ ኣመስግኖም፡ ደሓን ኩኑ ድማ በሎም።", f: "ንብጾት ስራሕኪ ኣመስግንዮም፡ ደሓን ኩኑ ድማ በልዮም።", x: "ንብጾት ስራሕኩም ኣመስግንዎም፡ ደሓን ኩኑ ድማ በልዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o2': { m: "ገለ ከይበልካ ብሱቕታ ኪድ።", f: "ገለ ከይበልኪ ብሱቕታ ኪዲ።", x: "ገለ ከይበልኩም ብሱቕታ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.o3': { m: "ነቲ ትካል ህያብ ሕተቶ።", f: "ነቲ ትካል ህያብ ሕተትዮ።", x: "ነቲ ትካል ህያብ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.w': { m: "ጽቡቕ ስንብት ጽቡቕ ስእሊ ይገድፍ። ምናልባት ደሓር ኣብኡ ክትሰርሕ ትደሊ፡ ወይ ከም መወከሲ የድልዩኻ።", f: "ጽቡቕ ስንብት ጽቡቕ ስእሊ ይገድፍ። ምናልባት ደሓር ኣብኡ ክትሰርሒ ትደልዪ፡ ወይ ከም መወከሲ የድልዩኺ።", x: "ጽቡቕ ስንብት ጽቡቕ ስእሊ ይገድፍ። ምናልባት ደሓር ኣብኡ ክትሰርሑ ትደልዩ፡ ወይ ከም መወከሲ የድልዩኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours': { m: "ንጎረባብቲኻ ሰላም በሎም", f: "ንጎረባብቲኺ ሰላም በልዮም", x: "ንጎረባብቲኹም ሰላም በልዎም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.b': { m: "ኣብ ሓደ ጎደና ሓድሽ ዲኻ? ንጎረባብቲኻ ሰላም በሎም፡ ስምካ ድማ ንገሮም። እዚ ደሓር ጸገማት ምፍታሕ የቕልል። ብለይቲ ትሰርሕ ዲኻ፡ ወይስ ምስ ብዙሓት ሰባት ትነብር? ምሸት ዳሕራይን ለይትን ህድእ በል። ጐሓፍካ ኣብታ ቅንዕቲ መዓልቲ ናብ ደገ ኣውጽእ። ኣብ ቤተ-መጻሕፍትን ማእከል ሰፈርን መብዛሕትኡ ግዜ ሆላንድኛ ክትለማመድ ትኽእል፡ ሓደ ሓደ ግዜ ብነጻ።", f: "ኣብ ሓደ ጎደና ሓድሽ ዲኺ? ንጎረባብቲኺ ሰላም በልዮም፡ ስምኪ ድማ ንገርዮም። እዚ ደሓር ጸገማት ምፍታሕ የቕልል። ብለይቲ ትሰርሒ ዲኺ፡ ወይስ ምስ ብዙሓት ሰባት ትነብሪ? ምሸት ዳሕራይን ለይትን ህድእ በሊ። ጐሓፍኪ ኣብታ ቅንዕቲ መዓልቲ ናብ ደገ ኣውጽኢ። ኣብ ቤተ-መጻሕፍትን ማእከል ሰፈርን መብዛሕትኡ ግዜ ሆላንድኛ ክትለማመዲ ትኽእሊ፡ ሓደ ሓደ ግዜ ብነጻ።", x: "ኣብ ሓደ ጎደና ሓድሽ ዲኹም? ንጎረባብቲኹም ሰላም በልዎም፡ ስምኩም ድማ ንገርዎም። እዚ ደሓር ጸገማት ምፍታሕ የቕልል። ብለይቲ ትሰርሑ ዲኹም፡ ወይስ ምስ ብዙሓት ሰባት ትነብሩ? ምሸት ዳሕራይን ለይትን ህድእ በሉ። ጐሓፍኩም ኣብታ ቅንዕቲ መዓልቲ ናብ ደገ ኣውጽኡ። ኣብ ቤተ-መጻሕፍትን ማእከል ሰፈርን መብዛሕትኡ ግዜ ሆላንድኛ ክትለማመዱ ትኽእሉ፡ ሓደ ሓደ ግዜ ብነጻ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.p': "ሰላም፡ ኣነ ዓሊ እየ። ኣብ ጥቓኹም እነብር።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.s': { m: "ምስ ሓሙሽተ ብጾት ስራሕ ትነብር። ሓንቲ ጎረቤት ብለይቲ መብዛሕትኡ ግዜ ዕግርግር ከም ዘሎ ትብል። እንታይ ትገብር?", f: "ምስ ሓሙሽተ ብጾት ስራሕ ትነብሪ። ሓንቲ ጎረቤት ብለይቲ መብዛሕትኡ ግዜ ዕግርግር ከም ዘሎ ትብል። እንታይ ትገብሪ?", x: "ምስ ሓሙሽተ ብጾት ስራሕ ትነብሩ። ሓንቲ ጎረቤት ብለይቲ መብዛሕትኡ ግዜ ዕግርግር ከም ዘሎ ትብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o1': { m: "ይቕሬታ ሕተት፡ ህድእ ክትብሉ ድማ ተሰማማዕ።", f: "ይቕሬታ ሕተቲ፡ ህድእ ክትብሉ ድማ ተሰማምዒ።", x: "ይቕሬታ ሕተቱ፡ ህድእ ክትብሉ ድማ ተሰማምዑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o2': { m: "ኩልኹም ከም እትሰርሑን ምዕራፍ ከም ዘድልየኩምን ንገራ።", f: "ኩልኹም ከም እትሰርሑን ምዕራፍ ከም ዘድልየኩምን ንገርያ።", x: "ኩልኹም ከም እትሰርሑን ምዕራፍ ከም ዘድልየኩምን ንገርዋ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.o3': { m: "ገለ ኣይትበል፡ ማዕጾ ድማ ዕጸው።", f: "ገለ ኣይትበሊ፡ ማዕጾ ድማ ዕጸዊ።", x: "ገለ ኣይትበሉ፡ ማዕጾ ድማ ዕጸዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.w': { m: "ኣቐዲሙ ዝግበር ጽቡቕ ዝርርብ ዝዓበዩ ጸገማት ይከላኸል። ዝፈልጡኻ ጎረባብቲ መብዛሕትኡ ግዜ ዝያዳ ፍቑራትን ሓገዝትን እዮም።", f: "ኣቐዲሙ ዝግበር ጽቡቕ ዝርርብ ዝዓበዩ ጸገማት ይከላኸል። ዝፈልጡኺ ጎረባብቲ መብዛሕትኡ ግዜ ዝያዳ ፍቑራትን ሓገዝትን እዮም።", x: "ኣቐዲሙ ዝግበር ጽቡቕ ዝርርብ ዝዓበዩ ጸገማት ይከላኸል። ዝፈልጡኹም ጎረባብቲ መብዛሕትኡ ግዜ ዝያዳ ፍቑራትን ሓገዝትን እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join': { m: "ተሳተፍ፡ ሆላንድኛ ቀልጢፍካ ትመሃር", f: "ተሳተፊ፡ ሆላንድኛ ቀልጢፍኪ ትመሃሪ", x: "ተሳተፉ፡ ሆላንድኛ ቀልጢፍኩም ትመሃሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.b': { m: "ብደገ ስራሕ፡ ምስ ሰባት ነገራት ብምግባር ሆላንድኛ ኣዝዩ ቀልጢፍካ ትመሃር፡ ስፖርት፡ ክለብ፡ ወይ ወለንታዊ ስራሕ። ቆልዓኻ ኣብ ቤት ትምህርቲ ድዩ? ሆላንድኛኻ ምሉእ እንተ ዘይኮነ እውን ናብ ምሸት ወለዲ ኪድ፡ መምህር ክፈልጠካ ይደሊ እዩ። ቀስ ዝበለ ሆላንድኛ ክትሓትት፡ ወይ ኣፕ ትርጉም ክትጥቀም ይፍቀደልካ። ወለንታዊ ስራሕ ኣብ CVኻ እውን ጽቡቕ ይመስል።", f: "ብደገ ስራሕ፡ ምስ ሰባት ነገራት ብምግባር ሆላንድኛ ኣዝዩ ቀልጢፍኪ ትመሃሪ፡ ስፖርት፡ ክለብ፡ ወይ ወለንታዊ ስራሕ። ቆልዓኺ ኣብ ቤት ትምህርቲ ድዩ? ሆላንድኛኺ ምሉእ እንተ ዘይኮነ እውን ናብ ምሸት ወለዲ ኪዲ፡ መምህር ክፈልጠኪ ይደሊ እዩ። ቀስ ዝበለ ሆላንድኛ ክትሓትቲ፡ ወይ ኣፕ ትርጉም ክትጥቀሚ ይፍቀደልኪ። ወለንታዊ ስራሕ ኣብ CVኺ እውን ጽቡቕ ይመስል።", x: "ብደገ ስራሕ፡ ምስ ሰባት ነገራት ብምግባር ሆላንድኛ ኣዝዩ ቀልጢፍኩም ትመሃሩ፡ ስፖርት፡ ክለብ፡ ወይ ወለንታዊ ስራሕ። ቆልዓኹም ኣብ ቤት ትምህርቲ ድዩ? ሆላንድኛኹም ምሉእ እንተ ዘይኮነ እውን ናብ ምሸት ወለዲ ኪዱ፡ መምህር ክፈልጠኩም ይደሊ እዩ። ቀስ ዝበለ ሆላንድኛ ክትሓትቱ፡ ወይ ኣፕ ትርጉም ክትጥቀሙ ይፍቀደልኩም። ወለንታዊ ስራሕ ኣብ CVኹም እውን ጽቡቕ ይመስል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.p': "ቁሩብ ቀስ ኢልኩም ክትዛረቡ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.s': { m: "ናብ ምሸት ወለዲ ተዓዲምካ። ሆላንድኛኻ ገና ጽቡቕ ኣይኮነን። እንታይ ትገብር?", f: "ናብ ምሸት ወለዲ ተዓዲምኪ። ሆላንድኛኺ ገና ጽቡቕ ኣይኮነን። እንታይ ትገብሪ?", x: "ናብ ምሸት ወለዲ ተዓዲምኩም። ሆላንድኛኹም ገና ጽቡቕ ኣይኮነን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o1': { m: "ኪድ፡ ቀሊል ሆላንድኛ ወይ ኣፕ ድማ ተጠቐም።", f: "ኪዲ፡ ቀሊል ሆላንድኛ ወይ ኣፕ ድማ ተጠቐሚ።", x: "ኪዱ፡ ቀሊል ሆላንድኛ ወይ ኣፕ ድማ ተጠቐሙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o2': { m: "ኣይትኺድ፡ መምህር ኣይርድኦካን እዩ።", f: "ኣይትኸዲ፡ መምህር ኣይርድኦኪን እዩ።", x: "ኣይትኸዱ፡ መምህር ኣይርድኦኩምን እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.o3': { m: "ከም ዝተጸመድካ ሓጺር መልእኽቲ ስደድ።", f: "ከም ዝተጸመድኪ ሓጺር መልእኽቲ ስደዲ።", x: "ከም ዝተጸመድኩም ሓጺር መልእኽቲ ስደዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.w': { m: "መምህር ብዛዕባ ቆልዓኻ እዩ ክዛረብ ዝደሊ፡ ብዛዕባ ሆላንድኛኻ ኣይኮነን። ምምጻእካ ከም ዘገድሰካ የርኢ።", f: "መምህር ብዛዕባ ቆልዓኺ እዩ ክዛረብ ዝደሊ፡ ብዛዕባ ሆላንድኛኺ ኣይኮነን። ምምጻእኪ ከም ዘገድሰኪ የርኢ።", x: "መምህር ብዛዕባ ቆልዓኹም እዩ ክዛረብ ዝደሊ፡ ብዛዕባ ሆላንድኛኹም ኣይኮነን። ምምጻእኩም ከም ዘገድሰኩም የርኢ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos': { m: "ቅድም ሕተት፡ ድሕሪኡ ዘርግሕ", f: "ቅድም ሕተቲ፡ ድሕሪኡ ዘርግሒ", x: "ቅድም ሕተቱ፡ ድሕሪኡ ዘርግሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.b': { m: "ኣብ ስራሕ ዝተላዕለ ስእሊ ካብቲ ዝሓሰብካዮ ዝያዳ ከርኢ ይኽእል፡ ዓሚል፡ ተገልጋሊ፡ ስክሪን ወይ ኣስማት ዘለዎ ወረቐት። ብዘይ ፍቓድ ኣስራሒኻ ስእልታት ስራሕ ኣብ ኢንተርነት ኣይተዘርግሕ፡ ብዘይ እወኦም ድማ ስእልታት ሰባት ፈጺም። ሓበሬታ ዓሚል ኣብ ስራሕ ይጸንሕ፡ ናብ ናይ ባዕልካ ተሌፎን ወይ ኢመይል ኣይትስደዶ። ብጌጋ ገለ ሰዲድካ? ብቕጽበት ንተቖጻጻሪኻ ንገሮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ስራሕ ዝተላዕለ ስእሊ ካብቲ ዝሓሰብክዮ ዝያዳ ከርኢ ይኽእል፡ ዓሚል፡ ተገልጋሊ፡ ስክሪን ወይ ኣስማት ዘለዎ ወረቐት። ብዘይ ፍቓድ ኣስራሒኺ ስእልታት ስራሕ ኣብ ኢንተርነት ኣይተዘርግሒ፡ ብዘይ እወኦም ድማ ስእልታት ሰባት ፈጺም። ሓበሬታ ዓሚል ኣብ ስራሕ ይጸንሕ፡ ናብ ናይ ባዕልኪ ተሌፎን ወይ ኢመይል ኣይትስደድዮ። ብጌጋ ገለ ሰዲድኪ? ብቕጽበት ንተቖጻጻሪኺ ንገርዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ስራሕ ዝተላዕለ ስእሊ ካብቲ ዝሓሰብኩሞ ዝያዳ ከርኢ ይኽእል፡ ዓሚል፡ ተገልጋሊ፡ ስክሪን ወይ ኣስማት ዘለዎ ወረቐት። ብዘይ ፍቓድ ኣስራሒኹም ስእልታት ስራሕ ኣብ ኢንተርነት ኣይተዘርግሑ፡ ብዘይ እወኦም ድማ ስእልታት ሰባት ፈጺም። ሓበሬታ ዓሚል ኣብ ስራሕ ይጸንሕ፡ ናብ ናይ ባዕልኩም ተሌፎን ወይ ኢመይል ኣይትስደድዎ። ብጌጋ ገለ ሰዲድኩም? ብቕጽበት ንተቖጻጻሪኹም ንገርዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.p': "ቅድም ፍቓድ ክሓትት እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.s': { m: "ሓደ ብጻይ ስራሕ ኣስሓቒ ስእሊ ዓሚል ኣብ ኣፕ ጉጅለ የእቱ። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ኣስሓቒ ስእሊ ዓሚል ኣብ ኣፕ ጉጅለ የእቱ። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ኣስሓቒ ስእሊ ዓሚል ኣብ ኣፕ ጉጅለ የእቱ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o1': { m: "ከምዚ ጽቡቕ ከም ዘይኮነ ንገሮ፡ ኣይተካፍሎ ድማ።", f: "ከምዚ ጽቡቕ ከም ዘይኮነ ንገርዮ፡ ኣይተካፍልዮ ድማ።", x: "ከምዚ ጽቡቕ ከም ዘይኮነ ንገርዎ፡ ኣይተካፍልዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o2': { m: "ኣካፍሎ፡ ኣብ ኣፕ ጉጅለ ጥራይ እዩ።", f: "ኣካፍልዮ፡ ኣብ ኣፕ ጉጅለ ጥራይ እዩ።", x: "ኣካፍልዎ፡ ኣብ ኣፕ ጉጅለ ጥራይ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.o3': { m: "ላይክ ግበረሉ፡ ግን ኣይተካፍሎ።", f: "ላይክ ግበርሉ፡ ግን ኣይተካፍልዮ።", x: "ላይክ ግበሩሉ፡ ግን ኣይተካፍልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.w': { m: "እቲ ዓሚል ነዚ ስእሊ እወ ኣይበለን። ኣብ ኣፕ ዘለዉ ስእልታት ቀልጢፎም ናብ ዝኾነ ቦታ ክኸዱ ይኽእሉ። ብሕያውነት ምዝራብ ንዓሚልን ንብጻይ ስራሕካን ይከላኸል።", f: "እቲ ዓሚል ነዚ ስእሊ እወ ኣይበለን። ኣብ ኣፕ ዘለዉ ስእልታት ቀልጢፎም ናብ ዝኾነ ቦታ ክኸዱ ይኽእሉ። ብሕያውነት ምዝራብ ንዓሚልን ንብጻይ ስራሕኪን ይከላኸል።", x: "እቲ ዓሚል ነዚ ስእሊ እወ ኣይበለን። ኣብ ኣፕ ዘለዉ ስእልታት ቀልጢፎም ናብ ዝኾነ ቦታ ክኸዱ ይኽእሉ። ብሕያውነት ምዝራብ ንዓሚልን ንብጻይ ስራሕኩምን ይከላኸል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device': "ምሕዳስ እወ፡ ዘይፍለጡ ስቲክ ኣይፋል", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.b': { m: "ኣብ ተሌፎንካን ኮምፒተርካን ምሕዳሳት ኣእቱ፡ ሃከርስ ዝጥቀሙሎም ነዃላት ይዓጽዉ። USB ስቲክ ረኺብካ? ናብ ኮምፒተርካ ኣይተእትዎ፡ ንክፍሊ IT ሃቦም። ኣብ ተሌፎን ወይ ኮምፒተር ስራሕ፡ ስራሕካ ዘፍቀደን ኣፕ ጥራይ ኣእቱ። ኣብ ህዝባዊ ዋይፋይ፡ ናብ ባንኪኻ ወይ ስራሕካ ኣይትእቶ። ተሌፎንካ ብኮድ ዕጸዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ተሌፎንኪን ኮምፒተርኪን ምሕዳሳት ኣእትዊ፡ ሃከርስ ዝጥቀሙሎም ነዃላት ይዓጽዉ። USB ስቲክ ረኺብኪ? ናብ ኮምፒተርኪ ኣይተእትውዮ፡ ንክፍሊ IT ሃብዮም። ኣብ ተሌፎን ወይ ኮምፒተር ስራሕ፡ ስራሕኪ ዘፍቀደን ኣፕ ጥራይ ኣእትዊ። ኣብ ህዝባዊ ዋይፋይ፡ ናብ ባንኪኺ ወይ ስራሕኪ ኣይትእትዊ። ተሌፎንኪ ብኮድ ዕጸውዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ተሌፎንኩምን ኮምፒተርኩምን ምሕዳሳት ኣእትዉ፡ ሃከርስ ዝጥቀሙሎም ነዃላት ይዓጽዉ። USB ስቲክ ረኺብኩም? ናብ ኮምፒተርኩም ኣይተእትውዎ፡ ንክፍሊ IT ሃብዎም። ኣብ ተሌፎን ወይ ኮምፒተር ስራሕ፡ ስራሕኩም ዘፍቀደን ኣፕ ጥራይ ኣእትዉ። ኣብ ህዝባዊ ዋይፋይ፡ ናብ ባንኪኹም ወይ ስራሕኩም ኣይትእትዉ። ተሌፎንኩም ብኮድ ዕጸውዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.p': "USB ስቲክ ረኺበ። እንታይ ክገብሮ ኣለኒ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.s': { m: "ኣብ መዕረፊ መካይን USB ስቲክ ትረክብ። ኣብኡ «Salaris» ተጻሒፉ ኣሎ። እንታይ ትገብር?", f: "ኣብ መዕረፊ መካይን USB ስቲክ ትረኽቢ። ኣብኡ «Salaris» ተጻሒፉ ኣሎ። እንታይ ትገብሪ?", x: "ኣብ መዕረፊ መካይን USB ስቲክ ትረኽቡ። ኣብኡ «Salaris» ተጻሒፉ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o1': { m: "ንክፍሊ IT ሃቦም።", f: "ንክፍሊ IT ሃብዮም።", x: "ንክፍሊ IT ሃብዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o2': { m: "ናይ መን ምዃኑ ንምፍላጥ ናብ ኮምፒተርካ ኣእትዎ።", f: "ናይ መን ምዃኑ ንምፍላጥ ናብ ኮምፒተርኪ ኣእትውዮ።", x: "ናይ መን ምዃኑ ንምፍላጥ ናብ ኮምፒተርኩም ኣእትውዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.o3': { m: "ናብ ገዛ ውሰዶ፡ ኣብኡ ድማ ርአዮ።", f: "ናብ ገዛ ውሰድዮ፡ ኣብኡ ድማ ርአይዮ።", x: "ናብ ገዛ ውሰድዎ፡ ኣብኡ ድማ ርአይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.w': "ስቲክ ዘገርም እንተ መሰለ እውን ቫይረስ ክህልዎ ይኽእል። ክፍሊ IT ብውሕስነት ክፍትሾ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" (four lessons) and the VOG lesson of "Werken via een uitzendbureau" (23 November 2026).
    'u.safework': "ድሕንነት ኣብ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.vog': { m: "ሕሉፍ ታሪኽካ፡ VOG", f: "ሕሉፍ ታሪኽኪ፡ VOG", x: "ሕሉፍ ታሪኽኩም፡ VOG" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.vog': { m: "ምስክር ወረቐት ጽቡቕ ጠባይ (VOG: ሕሉፍ ታሪኽካ ነዚ ስራሕ ጸገም ከም ዘይኮነ ዝገልጽ ካብ መንግስቲ ዝወሃብ ወረቐት)", f: "ምስክር ወረቐት ጽቡቕ ጠባይ (VOG: ሕሉፍ ታሪኽኪ ነዚ ስራሕ ጸገም ከም ዘይኮነ ዝገልጽ ካብ መንግስቲ ዝወሃብ ወረቐት)", x: "ምስክር ወረቐት ጽቡቕ ጠባይ (VOG: ሕሉፍ ታሪኽኩም ነዚ ስራሕ ጸገም ከም ዘይኮነ ዝገልጽ ካብ መንግስቲ ዝወሃብ ወረቐት)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.strafblad': { m: "መዝገብ ገበን (ቤት ፍርዲ በደለኛ ዝበለካ ገበናት)", f: "መዝገብ ገበን (ቤት ፍርዲ በደለኛ ዝበለኪ ገበናት)", x: "መዝገብ ገበን (ቤት ፍርዲ በደለኛ ዝበለኩም ገበናት)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.screening': { m: "ምርመራ ድሕረ-ባይታ (ቅድሚ ምጅማርካ ሕሉፍ ታሪኽካ ምፍታሽ)", f: "ምርመራ ድሕረ-ባይታ (ቅድሚ ምጅማርኪ ሕሉፍ ታሪኽኪ ምፍታሽ)", x: "ምርመራ ድሕረ-ባይታ (ቅድሚ ምጅማርኩም ሕሉፍ ታሪኽኩም ምፍታሽ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.personenregister': "መዝገብ ክንክን ህጻናት (ኣብ ክንክን ህጻናት ዝሰርሕ ኩሉ ሰብ ኣብኡ ክምዝገብ ኣለዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beveiligerspas': { m: "ካርድ ሓላዊ (ከም ሓላዊ ንምስራሕ ዘድልየካ ካርድ)", f: "ካርድ ሓላዊ (ከም ሓላዊ ንምስራሕ ዘድልየኪ ካርድ)", x: "ካርድ ሓላዊ (ከም ሓላዊ ንምስራሕ ዘድልየኩም ካርድ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.verleden': "ሕሉፍ ግዜ", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.1': "ኣብ ስራሕ ክንክን ዳርጋ ኩሉ ግዜ VOG ይሓቱ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.2': "VOG ኣሎኒ፡ ኣብ መዝገብ ክንክን ህጻናት ድማ ተመዝጊበ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.vog.3': "ድሕሪ ምርመራ ድሕረ-ባይታ ካርድ ሓላዊ ክረክብ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.q': { m: "ኤጀንሲ ስራሕ VOG ይሓትት ኣሎ። ድሮ ኣሎካ ድዩ?", f: "ኤጀንሲ ስራሕ VOG ይሓትት ኣሎ። ድሮ ኣሎኪ ድዩ?", x: "ኤጀንሲ ስራሕ VOG ይሓትት ኣሎ። ድሮ ኣሎኩም ድዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a': "ኣይፋል። ገና ካብ Justis ኢመይል እጽበ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.safetysigns': "ምልክታት ድሕንነት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbodsbord': { m: "ሰሌዳ ክልከላ (መስመር ዘለዎ ቀይሕ ክቢ፡ ነዚ ክትገብሮ ኣይፍቀደልካን)", f: "ሰሌዳ ክልከላ (መስመር ዘለዎ ቀይሕ ክቢ፡ ነዚ ክትገብርዮ ኣይፍቀደልክን)", x: "ሰሌዳ ክልከላ (መስመር ዘለዎ ቀይሕ ክቢ፡ ነዚ ክትገብርዎ ኣይፍቀደልኩምን)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebodsbord': { m: "ሰሌዳ ግዴታ (ጻዕዳ ስእሊ ዘለዎ ሰማያዊ ክቢ፡ ነዚ ክትገብሮ ኣለካ)", f: "ሰሌዳ ግዴታ (ጻዕዳ ስእሊ ዘለዎ ሰማያዊ ክቢ፡ ነዚ ክትገብርዮ ኣለኪ)", x: "ሰሌዳ ግዴታ (ጻዕዳ ስእሊ ዘለዎ ሰማያዊ ክቢ፡ ነዚ ክትገብርዎ ኣለኩም)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.waarschuwingsbord': "ሰሌዳ መጠንቀቕታ (ጸሊም ደረት ዘለዎ ብጫ ሰለስተ ኩርናዕ፡ ጥንቃቐ፡ ሓደጋ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.reddingsbord': "ሰሌዳ ምድሓን (ቀጠልያ ነዊሕ ርብዒ ኩርናዕ፡ መገዲ ናብ ደገ፡ ወይ ቀዳማይ ረድኤት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandbord': "ሰሌዳ መሳርሒ ሓዊ (ቀይሕ ማዕረ ርብዒ ኩርናዕ፡ ኣብዚ መጥፍኢ ሓዊ ወይ ቱቦ ማይ መጥፍኢ ሓዊ ኣሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pictogram': "ፒክቶግራም (ብዘይ ቃላት ገለ ዝነግር ቀሊል ስእሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.1': "ቀይሕ ክቢ ሰሌዳ ማለት፡ እዚ ኣይፍቀድን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.2': { m: "ሰማያዊ ሰሌዳ እንታይ ክትገብር ከም ዘለካ ይነግር።", f: "ሰማያዊ ሰሌዳ እንታይ ክትገብሪ ከም ዘለኪ ይነግር።", x: "ሰማያዊ ሰሌዳ እንታይ ክትገብሩ ከም ዘለኩም ይነግር።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.safetysigns.3': { m: "ነቶም ቀጠልያ ሰሌዳታት ስዒብካ ናብ መውጽኢ ህጹጽ ግዜ ኪድ።", f: "ነቶም ቀጠልያ ሰሌዳታት ስዒብኪ ናብ መውጽኢ ህጹጽ ግዜ ኪዲ።", x: "ነቶም ቀጠልያ ሰሌዳታት ስዒብኩም ናብ መውጽኢ ህጹጽ ግዜ ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.q': "እዚ ብጫ ሰሌዳ እንታይ ማለት እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.a': "ጥንቃቐ፡ ሓደጋ። ሰሌዳ መጠንቀቕታ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.substances': "ሓደገኛ ኬሚካላት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stofmasker': { m: "ማስክ ሓመድ (ኣፍንጫኻን ኣፍካን ይሽፍን)", f: "ማስክ ሓመድ (ኣፍንጫኺን ኣፍኪን ይሽፍን)", x: "ማስክ ሓመድ (ኣፍንጫኹምን ኣፍኩምን ይሽፍን)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.giftig': "መርዛም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bijtend': { m: "ዘቃጽል (ቆርበትካ የቃጽል ወይ ሓጺን ይበልዕ)", f: "ዘቃጽል (ቆርበትኪ የቃጽል ወይ ሓጺን ይበልዕ)", x: "ዘቃጽል (ቆርበትኩም የቃጽል ወይ ሓጺን ይበልዕ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.drinkfles': "ጥርሙዝ መስተ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opbergen': "ኣብ ቦትኡ ምቕማጥ (ኣብ ናይ ባዕሉ ቦታ፡ ንኣብነት ኣብ ዝቑለፍ ቁምሳጥን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dop': "መኸደኒ (ናይ ጥርሙዝ ወይ ታኒካ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.1': { m: "ቅድም ኣብቲ ኤቲኬት ዘሎ ምልክት ሓደጋ ርአ።", f: "ቅድም ኣብቲ ኤቲኬት ዘሎ ምልክት ሓደጋ ርኣዪ።", x: "ቅድም ኣብቲ ኤቲኬት ዘሎ ምልክት ሓደጋ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.2': { m: "ፈጺምካ ናብ ጥርሙዝ መስተ ኣይተፍስሶ።", f: "ፈጺምኪ ናብ ጥርሙዝ መስተ ኣይተፍስስዮ።", x: "ፈጺምኩም ናብ ጥርሙዝ መስተ ኣይተፍስስዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.substances.3': { m: "ኣብዚ ማስክ ሓመድ ክትገብር ኣለካ።", f: "ኣብዚ ማስክ ሓመድ ክትገብሪ ኣለኪ።", x: "ኣብዚ ማስክ ሓመድ ክትገብሩ ኣለኩም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.q': "እዚ ፍርያት መርዛም ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a': "ኣብ ወረቐት ድሕንነት ተጻሒፉ ኣሎ። ክርእዮ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.firefight': "ሓዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.branddriehoek': "ሰለስተ ኩርናዕ ሓዊ (ሓዊ ነዳዲ፡ ኣየርን ሙቐትን የድልዮ፡ ሓደ ምስ ዝእለ ሓዊ ይጠፍእ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zuurstof': "ኦክስጅን (ኣብ ኣየር ኣሎ፡ ሓዊ የድልዮ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blussen': "ምጥፋእ (ሓዊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.blusdeken': "ኮቦርታ መጥፍኢ ሓዊ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.openvuur': "ክፉት ሓዊ (ሃልሃልታ፡ ንኣብነት ካብ ላይተር ወይ ናይ ጋዝ መንደዲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.brandslang': "ቱቦ ማይ መጥፍኢ ሓዊ (ኣብ መንደቕ ኣብ መጠቕለሊ ዝተጠቕለለ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.1': { m: "ፈጺምካ ኣብ ዝነድድ ዘይቲ ማይ ኣይትደርቢ።", f: "ፈጺምኪ ኣብ ዝነድድ ዘይቲ ማይ ኣይትደርብዪ።", x: "ፈጺምኩም ኣብ ዝነድድ ዘይቲ ማይ ኣይትደርብዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.2': { m: "ንእሽቶ ሓዊ ጥራይ ባዕልኻ ተጥፍእ።", f: "ንእሽቶ ሓዊ ጥራይ ባዕልኺ ተጥፍኢ።", x: "ንእሽቶ ሓዊ ጥራይ ባዕልኹም ተጥፍኡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.firefight.3': { m: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብሮ።", f: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብርዮ።", x: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.q': "ኣብ ዘንቢል ጎሓፍ ሓዊ ተላዒሉ!", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a': "ንእሽቶ እዩ። መጥፍኢ ሓዊ ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.permitwork': "ናይ ድሕንነት ፍቓድ፡ ዕጹው ቦታን ምልዓልን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkvergunningveilig': { m: "ናይ ድሕንነት ፍቓድ (ንሓደገኛ ስራሕ ዝኸውን ወረቐት ድሕንነት፡ እንታይ፡ ኣበይን ኣየኖት ሓደጋታትን፡ ናትካ ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን)", f: "ናይ ድሕንነት ፍቓድ (ንሓደገኛ ስራሕ ዝኸውን ወረቐት ድሕንነት፡ እንታይ፡ ኣበይን ኣየኖት ሓደጋታትን፡ ናትኪ ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን)", x: "ናይ ድሕንነት ፍቓድ (ንሓደገኛ ስራሕ ዝኸውን ወረቐት ድሕንነት፡ እንታይ፡ ኣበይን ኣየኖት ሓደጋታትን፡ ናትኩም ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.beslotenruimte': "ዕጹው ቦታ (ታንኪ፡ ጉድጓድ ወይ መስመር ፈሳሲ፡ ንእሽቶ፡ ሒደት ንጹህ ኣየር ዘለዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gasmeting': "ምልካዕ ጋዝ (ቅድሚ ምእታው እቲ ኣየር ይልካዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mangatwacht': "ሓላዊ መእተዊ (ኣብ ደገ ኣብ ጥቓ እቲ ኣፍ ዝጸንሕ፡ ርክብ ዝሕዝን ኣላርም ዝህብን ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.signaalgever': "ምልክት ሃቢ (ንመራሒ ክሬን ብኢድ ምልክት ዝህብ ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.hijsen': "ምልዓል (ጽዕነት ብክሬን)", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.1': "ብዘይ ናይ ድሕንነት ፍቓድ ኣይንጅምርን።", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.2': "ቅድም ምልካዕ ጋዝ፡ ድሕሪኡ ጥራይ ናብ ዕጹው ቦታ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.permitwork.3': { m: "ነቲ ምልክት ሃቢ ርአዮ፡ ምልዓል፡ ምውራድ፡ ደው ምባል።", f: "ነቲ ምልክት ሃቢ ርአይዮ፡ ምልዓል፡ ምውራድ፡ ደው ምባል።", x: "ነቲ ምልክት ሃቢ ርአይዎ፡ ምልዓል፡ ምውራድ፡ ደው ምባል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.q': "ኣብ ጥቓ እቲ ታንኪ ኣብ ደገ መን ይጸንሕ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a': "ኣነ። ኣነ እየ ሓላዊ መእተዊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog': { m: "VOG፡ ምፍታሽ ሕሉፍ ታሪኽካ", f: "VOG፡ ምፍታሽ ሕሉፍ ታሪኽኪ", x: "VOG፡ ምፍታሽ ሕሉፍ ታሪኽኩም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.b': { m: "ንገለ ስራሕቲ፡ ኤጀንሲ ስራሕ ወይ ኣስራሒ VOG (Verklaring Omtrent het Gedrag) ይሓትት። ካብ መንግስቲ ዝወሃብ ወረቐት እዩ፡ ሕሉፍ ታሪኽካ ነዚ ስራሕ ጸገም ከም ዘይኮነ ይገልጽ። ኣብ ክንክን፡ ክንክን ህጻናትን ስራሕ ሓለዋን ዳርጋ ኩሉ ግዜ የድልየካ። መብዛሕትኡ ግዜ ኣስራሒ ነቲ ሕቶ ብኦንላይን ይጅምሮ። ካብ Justis ኢመይል ትረክብ፡ ብDigiD ትውድኦ፡ ትኸፍል ድማ። ቅድም መን ከም ዝኸፍል ሕተት፡ መብዛሕትኡ ግዜ ኣስራሒ ይመልሰልካ። ምስ ቆልዑ ወይ ተቓላዕቲ ሰባት ንዝሰርሑ ወለንተኛታት መብዛሕትኡ ግዜ ብነጻ እዩ። መዝገብ ገበን ኣሎካ ድዩ? እዚ ኩሉ ግዜ VOG ኣይትረክብን ማለት ኣይኮነን፡ Justis ነዚ ስራሕ ኣገዳሲ ዝኾነ እዩ ዝርኢ። ርግጸኛ ኣይኮንካን? ንJuridisch Loket ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ንገለ ስራሕቲ፡ ኤጀንሲ ስራሕ ወይ ኣስራሒ VOG (Verklaring Omtrent het Gedrag) ይሓትት። ካብ መንግስቲ ዝወሃብ ወረቐት እዩ፡ ሕሉፍ ታሪኽኪ ነዚ ስራሕ ጸገም ከም ዘይኮነ ይገልጽ። ኣብ ክንክን፡ ክንክን ህጻናትን ስራሕ ሓለዋን ዳርጋ ኩሉ ግዜ የድልየኪ። መብዛሕትኡ ግዜ ኣስራሒ ነቲ ሕቶ ብኦንላይን ይጅምሮ። ካብ Justis ኢመይል ትረኽቢ፡ ብDigiD ትውድእዮ፡ ትኸፍሊ ድማ። ቅድም መን ከም ዝኸፍል ሕተቲ፡ መብዛሕትኡ ግዜ ኣስራሒ ይመልሰልኪ። ምስ ቆልዑ ወይ ተቓላዕቲ ሰባት ንዝሰርሑ ወለንተኛታት መብዛሕትኡ ግዜ ብነጻ እዩ። መዝገብ ገበን ኣሎኪ ድዩ? እዚ ኩሉ ግዜ VOG ኣይትረኽቢን ማለት ኣይኮነን፡ Justis ነዚ ስራሕ ኣገዳሲ ዝኾነ እዩ ዝርኢ። ርግጸኛ ኣይኮንክን? ንJuridisch Loket ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ንገለ ስራሕቲ፡ ኤጀንሲ ስራሕ ወይ ኣስራሒ VOG (Verklaring Omtrent het Gedrag) ይሓትት። ካብ መንግስቲ ዝወሃብ ወረቐት እዩ፡ ሕሉፍ ታሪኽኩም ነዚ ስራሕ ጸገም ከም ዘይኮነ ይገልጽ። ኣብ ክንክን፡ ክንክን ህጻናትን ስራሕ ሓለዋን ዳርጋ ኩሉ ግዜ የድልየኩም። መብዛሕትኡ ግዜ ኣስራሒ ነቲ ሕቶ ብኦንላይን ይጅምሮ። ካብ Justis ኢመይል ትረኽቡ፡ ብDigiD ትውድእዎ፡ ትኸፍሉ ድማ። ቅድም መን ከም ዝኸፍል ሕተቱ፡ መብዛሕትኡ ግዜ ኣስራሒ ይመልሰልኩም። ምስ ቆልዑ ወይ ተቓላዕቲ ሰባት ንዝሰርሑ ወለንተኛታት መብዛሕትኡ ግዜ ብነጻ እዩ። መዝገብ ገበን ኣሎኩም ድዩ? እዚ ኩሉ ግዜ VOG ኣይትረኽቡን ማለት ኣይኮነን፡ Justis ነዚ ስራሕ ኣገዳሲ ዝኾነ እዩ ዝርኢ። ርግጸኛ ኣይኮንኩምን? ንJuridisch Loket ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.vog.p': "VOG ባዕለይ ክኸፍል ኣለኒ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.s': { m: "ሓድሽ ስራሕካ ኣብ ገዛ ክንክን VOG ይሓትት። ቅድሚ ብዙሕ ዓመታት ምስ ፖሊስ ጸገም ኣጋጢሙካ ነይሩ። እንታይ ትገብር?", f: "ሓድሽ ስራሕኪ ኣብ ገዛ ክንክን VOG ይሓትት። ቅድሚ ብዙሕ ዓመታት ምስ ፖሊስ ጸገም ኣጋጢሙኪ ነይሩ። እንታይ ትገብሪ?", x: "ሓድሽ ስራሕኩም ኣብ ገዛ ክንክን VOG ይሓትት። ቅድሚ ብዙሕ ዓመታት ምስ ፖሊስ ጸገም ኣጋጢሙኩም ነይሩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o1': { m: "ኣመልክት፡ እንተ ተሻቒልካ ድማ ንJuridisch Loket ሕተት።", f: "ኣመልክቲ፡ እንተ ተሻቒልኪ ድማ ንJuridisch Loket ሕተቲ።", x: "ኣመልክቱ፡ እንተ ተሻቒልኩም ድማ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o2': { m: "ኣይተመልክት፡ ፈጺምካ ኣይክትረኽቦን ኢኻ።", f: "ኣይተመልክቲ፡ ፈጺምኪ ኣይክትረኽብዮን ኢኺ።", x: "ኣይተመልክቱ፡ ፈጺምኩም ኣይክትረኽብዎን ኢኹም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.o3': { m: "ግዜ ከም ዘይብልካ ንገር፡ ካልእ ስራሕ ድማ ድለ።", f: "ግዜ ከም ዘይብልኪ ንገሪ፡ ካልእ ስራሕ ድማ ድለዪ።", x: "ግዜ ከም ዘይብልኩም ንገሩ፡ ካልእ ስራሕ ድማ ድለዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.w': { m: "Justis ነቲ ስራሕ ኣገዳሲ ዝኾነ ጥራይ እዩ ዝርኢ። ኣብ ሕሉፍ ታሪኾም ገለ ዘለዎም ብዙሓት ሰባት ሕጂ እውን VOG ይረኽቡ። ርግጸኛ እንተ ዘይኮንካ፡ ምኽሪ ይሕግዝ።", f: "Justis ነቲ ስራሕ ኣገዳሲ ዝኾነ ጥራይ እዩ ዝርኢ። ኣብ ሕሉፍ ታሪኾም ገለ ዘለዎም ብዙሓት ሰባት ሕጂ እውን VOG ይረኽቡ። ርግጸኛ እንተ ዘይኮንኪ፡ ምኽሪ ይሕግዝ።", x: "Justis ነቲ ስራሕ ኣገዳሲ ዝኾነ ጥራይ እዩ ዝርኢ። ኣብ ሕሉፍ ታሪኾም ገለ ዘለዎም ብዙሓት ሰባት ሕጂ እውን VOG ይረኽቡ። ርግጸኛ እንተ ዘይኮንኩም፡ ምኽሪ ይሕግዝ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns': "VCA እንታይ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.b': { m: "VCA ናይ ድሕንነት ምስክር ወረቐት እዩ። ብዙሓት ትካላት፡ ብኤጀንሲ ስራሕ እውን፡ ይሓትዎ፡ ንኣብነት ኣብ ህንጻን ኢንዱስትሪን። መብዛሕትኦም ሰራሕተኛታት B-VCA (VCA Basis) ይገብሩ፡ ተቖጻጻሪ ድማ VOL-VCA ይገብር። ኮርስ ትወስድ፡ ኣብ ፍሉጥ ማእከል ፈተና ድማ ብዙሕ ምርጫ ዘለዎም ሕቶታት ዘለዉዎ ፈተና ትገብር። ነቲ ፈተና መብዛሕትኡ ግዜ ብዝተፈላለዩ ቋንቋታት ክትገብሮ ትኽእል ኢኻ፡ ንኣብነት ብእንግሊዝኛ ወይ ብፖላንድኛ፡ ንማእከል ፈተና ሕተት። እቲ ዲፕሎማ ን10 ዓመት ይሰርሕ። መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ይኸፍል፡ ቅድሚ ባዕልኻ ምኽፋልካ ሕተት። ኤጀንሲ ስራሕ ዝደለዮ ክፍሊት ካብ ደሞዝካ ክቖርጽ ኣይፍቀደሉን (ነቲ ብዛዕባ ስራሕ ብኤጀንሲ ዘሎ ኣርእስቲ ርአ)። ኣብዚ ትምህርትታት ኣብ ውሑስ ስራሕን ኣብ VCAን ዘጋጥሙኻ ገለ ቃላት ትመሃር። ንVCA ኮርስን ፈተናን ትወስድ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "VCA ናይ ድሕንነት ምስክር ወረቐት እዩ። ብዙሓት ትካላት፡ ብኤጀንሲ ስራሕ እውን፡ ይሓትዎ፡ ንኣብነት ኣብ ህንጻን ኢንዱስትሪን። መብዛሕትኦም ሰራሕተኛታት B-VCA (VCA Basis) ይገብሩ፡ ተቖጻጻሪ ድማ VOL-VCA ይገብር። ኮርስ ትወስዲ፡ ኣብ ፍሉጥ ማእከል ፈተና ድማ ብዙሕ ምርጫ ዘለዎም ሕቶታት ዘለዉዎ ፈተና ትገብሪ። ነቲ ፈተና መብዛሕትኡ ግዜ ብዝተፈላለዩ ቋንቋታት ክትገብርዮ ትኽእሊ ኢኺ፡ ንኣብነት ብእንግሊዝኛ ወይ ብፖላንድኛ፡ ንማእከል ፈተና ሕተቲ። እቲ ዲፕሎማ ን10 ዓመት ይሰርሕ። መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ይኸፍል፡ ቅድሚ ባዕልኺ ምኽፋልኪ ሕተቲ። ኤጀንሲ ስራሕ ዝደለዮ ክፍሊት ካብ ደሞዝኪ ክቖርጽ ኣይፍቀደሉን (ነቲ ብዛዕባ ስራሕ ብኤጀንሲ ዘሎ ኣርእስቲ ርኣዪ)። ኣብዚ ትምህርትታት ኣብ ውሑስ ስራሕን ኣብ VCAን ዘጋጥሙኺ ገለ ቃላት ትመሃሪ። ንVCA ኮርስን ፈተናን ትወስዲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "VCA ናይ ድሕንነት ምስክር ወረቐት እዩ። ብዙሓት ትካላት፡ ብኤጀንሲ ስራሕ እውን፡ ይሓትዎ፡ ንኣብነት ኣብ ህንጻን ኢንዱስትሪን። መብዛሕትኦም ሰራሕተኛታት B-VCA (VCA Basis) ይገብሩ፡ ተቖጻጻሪ ድማ VOL-VCA ይገብር። ኮርስ ትወስዱ፡ ኣብ ፍሉጥ ማእከል ፈተና ድማ ብዙሕ ምርጫ ዘለዎም ሕቶታት ዘለዉዎ ፈተና ትገብሩ። ነቲ ፈተና መብዛሕትኡ ግዜ ብዝተፈላለዩ ቋንቋታት ክትገብርዎ ትኽእሉ ኢኹም፡ ንኣብነት ብእንግሊዝኛ ወይ ብፖላንድኛ፡ ንማእከል ፈተና ሕተቱ። እቲ ዲፕሎማ ን10 ዓመት ይሰርሕ። መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ይኸፍል፡ ቅድሚ ባዕልኹም ምኽፋልኩም ሕተቱ። ኤጀንሲ ስራሕ ዝደለዮ ክፍሊት ካብ ደሞዝኩም ክቖርጽ ኣይፍቀደሉን (ነቲ ብዛዕባ ስራሕ ብኤጀንሲ ዘሎ ኣርእስቲ ርኣዩ)። ኣብዚ ትምህርትታት ኣብ ውሑስ ስራሕን ኣብ VCAን ዘጋጥሙኹም ገለ ቃላት ትመሃሩ። ንVCA ኮርስን ፈተናን ትወስዱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.p': "ኮርስ VCA መን ይኸፍሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.s': { m: "ሓደ ኤጀንሲ ስራሕ «VCA የድልየካ እዩ። ነቲ ኮርስ ባዕልኻ ትኸፍሎ፡ ወይ ካብ ደሞዝካ ንቖርጾ።» ይብል። እንታይ ትገብር?", f: "ሓደ ኤጀንሲ ስራሕ «VCA የድልየኪ እዩ። ነቲ ኮርስ ባዕልኺ ትኸፍልዮ፡ ወይ ካብ ደሞዝኪ ንቖርጾ።» ይብል። እንታይ ትገብሪ?", x: "ሓደ ኤጀንሲ ስራሕ «VCA የድልየኩም እዩ። ነቲ ኮርስ ባዕልኹም ትኸፍልዎ፡ ወይ ካብ ደሞዝኩም ንቖርጾ።» ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o1': { m: "መን ከም ዝኸፍል ሕተት፡ ብጽሑፍ ድማ ውሰዶ።", f: "መን ከም ዝኸፍል ሕተቲ፡ ብጽሑፍ ድማ ውሰድዮ።", x: "መን ከም ዝኸፍል ሕተቱ፡ ብጽሑፍ ድማ ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o2': { m: "ነቲ ስራሕ ምእንቲ ክትረክብ፡ ብቕጽበት ክፈል።", f: "ነቲ ስራሕ ምእንቲ ክትረኽቢ፡ ብቕጽበት ክፈሊ።", x: "ነቲ ስራሕ ምእንቲ ክትረኽቡ፡ ብቕጽበት ክፈሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.o3': { m: "ገለ ኣይትበል፡ ፈርም ድማ።", f: "ገለ ኣይትበሊ፡ ፈርሚ ድማ።", x: "ገለ ኣይትበሉ፡ ፈርሙ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.safetysigns.w': { m: "መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ንVCA ይኸፍል። ገለ ክትከፍል እንተ ኣለካ፡ ኣቐዲምካ ብጽሑፍ ክትፈልጦ ትደሊ።", f: "መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ንVCA ይኸፍል። ገለ ክትከፍሊ እንተ ኣለኪ፡ ኣቐዲምኪ ብጽሑፍ ክትፈልጥዮ ትደልዪ።", x: "መብዛሕትኡ ግዜ ኣስራሒ ወይ ኤጀንሲ ስራሕ ንVCA ይኸፍል። ገለ ክትከፍሉ እንተ ኣለኩም፡ ኣቐዲምኩም ብጽሑፍ ክትፈልጥዎ ትደልዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances': { m: "ቅድም ኤቲኬት ኣንብብ፡ ድሕሪኡ ስራሕ", f: "ቅድም ኤቲኬት ኣንብቢ፡ ድሕሪኡ ስርሒ", x: "ቅድም ኤቲኬት ኣንብቡ፡ ድሕሪኡ ስርሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.b': { m: "ሓደገኛ ፍርያት ኣብ ኤቲኬቱ ጸሊም ስእሊ ዘለዎ ቀይሕ ዳያመንድ (ኣብ ኩርናዑ ደው ዝበለ ርብዒ) ኣለዎ፡ ምልክት ሓደጋ። እቲ ስእሊ ነቲ ሓደጋ የርኢ፡ ንኣብነት ሓዊ፡ መርዚ፡ ወይ ቆርበትካ ዘቃጽል ፍርያት። ኤቲኬትን ወረቐት ድሕንነትን (veiligheidsblad) ብኸመይ ብውሑስ ምስኡ ከም እትሰርሕ፡ ገለ እንተ ተጋጊዩ ድማ እንታይ ከም እትገብር ይነግሩ። ዝበልዎ ግበር፡ ጓንቲ፡ ናይ ድሕንነት መነጽር ወይ ማስክ። መኸደኒ ዕጸዎ፡ ነቲ ፍርያት ድማ ኣብ ናይ ባዕሉ ቦታ ኣቐምጦ። ፈጺምካ ናብ ጥርሙዝ መስተ ኣይተፍስሶ፡ ሓደ ሰብ ክሰትዮ ይኽእል። ምስኡ ክትሰርሕ ከለኻ ኣይትብላዕ፡ ኣይትስተ፡ ሽጋራ ድማ ኣይተትክኽ፡ ድሕሪኡ ኣእዳውካ ተሓጸብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሓደገኛ ፍርያት ኣብ ኤቲኬቱ ጸሊም ስእሊ ዘለዎ ቀይሕ ዳያመንድ (ኣብ ኩርናዑ ደው ዝበለ ርብዒ) ኣለዎ፡ ምልክት ሓደጋ። እቲ ስእሊ ነቲ ሓደጋ የርኢ፡ ንኣብነት ሓዊ፡ መርዚ፡ ወይ ቆርበትኪ ዘቃጽል ፍርያት። ኤቲኬትን ወረቐት ድሕንነትን (veiligheidsblad) ብኸመይ ብውሑስ ምስኡ ከም እትሰርሒ፡ ገለ እንተ ተጋጊዩ ድማ እንታይ ከም እትገብሪ ይነግሩ። ዝበልዎ ግበሪ፡ ጓንቲ፡ ናይ ድሕንነት መነጽር ወይ ማስክ። መኸደኒ ዕጸውዮ፡ ነቲ ፍርያት ድማ ኣብ ናይ ባዕሉ ቦታ ኣቐምጥዮ። ፈጺምኪ ናብ ጥርሙዝ መስተ ኣይተፍስስዮ፡ ሓደ ሰብ ክሰትዮ ይኽእል። ምስኡ ክትሰርሒ ከለኺ ኣይትብልዒ፡ ኣይትሰትዪ፡ ሽጋራ ድማ ኣይተትክኺ፡ ድሕሪኡ ኣእዳውኪ ተሓጸቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሓደገኛ ፍርያት ኣብ ኤቲኬቱ ጸሊም ስእሊ ዘለዎ ቀይሕ ዳያመንድ (ኣብ ኩርናዑ ደው ዝበለ ርብዒ) ኣለዎ፡ ምልክት ሓደጋ። እቲ ስእሊ ነቲ ሓደጋ የርኢ፡ ንኣብነት ሓዊ፡ መርዚ፡ ወይ ቆርበትኩም ዘቃጽል ፍርያት። ኤቲኬትን ወረቐት ድሕንነትን (veiligheidsblad) ብኸመይ ብውሑስ ምስኡ ከም እትሰርሑ፡ ገለ እንተ ተጋጊዩ ድማ እንታይ ከም እትገብሩ ይነግሩ። ዝበልዎ ግበሩ፡ ጓንቲ፡ ናይ ድሕንነት መነጽር ወይ ማስክ። መኸደኒ ዕጸውዎ፡ ነቲ ፍርያት ድማ ኣብ ናይ ባዕሉ ቦታ ኣቐምጥዎ። ፈጺምኩም ናብ ጥርሙዝ መስተ ኣይተፍስስዎ፡ ሓደ ሰብ ክሰትዮ ይኽእል። ምስኡ ክትሰርሑ ከለኹም ኣይትብልዑ፡ ኣይትሰትዩ፡ ሽጋራ ድማ ኣይተትክኹ፡ ድሕሪኡ ኣእዳውኩም ተሓጸቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.p': "ናይዚ ፍርያት ወረቐት ድሕንነት ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.s': { m: "ሓደ ብጻይ ስራሕ ምስኡ ክወስዶ ኢሉ፡ ፍርያት ጽሬት ናብ ባዶ ጥርሙዝ ማይ የፍስስ። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ምስኡ ክወስዶ ኢሉ፡ ፍርያት ጽሬት ናብ ባዶ ጥርሙዝ ማይ የፍስስ። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ምስኡ ክወስዶ ኢሉ፡ ፍርያት ጽሬት ናብ ባዶ ጥርሙዝ ማይ የፍስስ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o1': { m: "ሓደገኛ ምዃኑ ንገሮ፡ ሓደ ሰብ ክሰትዮ ይኽእል።", f: "ሓደገኛ ምዃኑ ንገርዮ፡ ሓደ ሰብ ክሰትዮ ይኽእል።", x: "ሓደገኛ ምዃኑ ንገርዎ፡ ሓደ ሰብ ክሰትዮ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o2': "ምንም ኣይኮነን፡ ናይ ባዕሉ ጥርሙዝ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.o3': { m: "ኣብቲ ጥርሙዝ ንእሽቶ ስቲከር ለጥፍ።", f: "ኣብቲ ጥርሙዝ ንእሽቶ ስቲከር ለጥፊ።", x: "ኣብቲ ጥርሙዝ ንእሽቶ ስቲከር ለጥፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.w': "ኣብ ጥርሙዝ መስተ፡ ፍርያት ከም ማይ ወይ ለሞናታ ይመስል። ሓደ ሰብ ብጌጋ ክሰትዮ ይኽእል። ፍርያት ምስ ኤቲኬቱ ኣብ ናይ ባዕሉ መዕሸጊ ይጸንሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight': "ንእሽቶ ሓዊ ድዩ ዓብዪ ሓዊ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.b': { m: "ሓዊ ሰለስተ ነገራት የድልዮ፡ ነዳዲ፡ ኣየርን ሙቐትን። እዚ እዩ ሰለስተ ኩርናዕ ሓዊ። ሓደ ኣልግስ፡ ሓዊ ድማ ይጠፍእ። ኮቦርታ መጥፍኢ ሓዊ ነቲ ኣየር የርሕቖ። ማይ ነቲ ሙቐት የርሕቖ፡ ግን ኣብ ዝነድድ ዘይቲ ወይ ስብሒ፡ ወይ ኣብ ኤሌክትሪካዊ ነገራት ፈጺምካ ማይ ኣይትጠቐም። ነቲ መጥፍኢ ሓዊ ርአዮ፡ ንምንታይ ከም ዝኸውን ተጻሒፉሉ ኣሎ። ፎምን ዱቄትን ኣብ ብዙሓት ሓዊታት ይሰርሑ፡ CO2 ድማ ንኤሌክትሪካዊ ሓዊ ጽቡቕ እዩ። ብልጭታን ክፉት ሓዊን ካብ ቀልጢፎም ዝነድዱ ፍርያት ኣርሕቕ። ንእሽቶ ሓዊ ጥራይ ባዕልኻ ኣጥፍእ፡ ውሑስ ምስ ዝኸውን ጥራይ ድማ። ዝዓበየ ድዩ? ናብ ደገ ውጻእ፡ ኣብ ድሕሬኻ ማዕጾ ዕጸው፡ ኣላርም ድማ ሃብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ሓዊ ሰለስተ ነገራት የድልዮ፡ ነዳዲ፡ ኣየርን ሙቐትን። እዚ እዩ ሰለስተ ኩርናዕ ሓዊ። ሓደ ኣልግሲ፡ ሓዊ ድማ ይጠፍእ። ኮቦርታ መጥፍኢ ሓዊ ነቲ ኣየር የርሕቖ። ማይ ነቲ ሙቐት የርሕቖ፡ ግን ኣብ ዝነድድ ዘይቲ ወይ ስብሒ፡ ወይ ኣብ ኤሌክትሪካዊ ነገራት ፈጺምኪ ማይ ኣይትጠቐሚ። ነቲ መጥፍኢ ሓዊ ርአይዮ፡ ንምንታይ ከም ዝኸውን ተጻሒፉሉ ኣሎ። ፎምን ዱቄትን ኣብ ብዙሓት ሓዊታት ይሰርሑ፡ CO2 ድማ ንኤሌክትሪካዊ ሓዊ ጽቡቕ እዩ። ብልጭታን ክፉት ሓዊን ካብ ቀልጢፎም ዝነድዱ ፍርያት ኣርሕቒ። ንእሽቶ ሓዊ ጥራይ ባዕልኺ ኣጥፍኢ፡ ውሑስ ምስ ዝኸውን ጥራይ ድማ። ዝዓበየ ድዩ? ናብ ደገ ውጽኢ፡ ኣብ ድሕሬኺ ማዕጾ ዕጸዊ፡ ኣላርም ድማ ሃቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ሓዊ ሰለስተ ነገራት የድልዮ፡ ነዳዲ፡ ኣየርን ሙቐትን። እዚ እዩ ሰለስተ ኩርናዕ ሓዊ። ሓደ ኣልግሱ፡ ሓዊ ድማ ይጠፍእ። ኮቦርታ መጥፍኢ ሓዊ ነቲ ኣየር የርሕቖ። ማይ ነቲ ሙቐት የርሕቖ፡ ግን ኣብ ዝነድድ ዘይቲ ወይ ስብሒ፡ ወይ ኣብ ኤሌክትሪካዊ ነገራት ፈጺምኩም ማይ ኣይትጠቐሙ። ነቲ መጥፍኢ ሓዊ ርአይዎ፡ ንምንታይ ከም ዝኸውን ተጻሒፉሉ ኣሎ። ፎምን ዱቄትን ኣብ ብዙሓት ሓዊታት ይሰርሑ፡ CO2 ድማ ንኤሌክትሪካዊ ሓዊ ጽቡቕ እዩ። ብልጭታን ክፉት ሓዊን ካብ ቀልጢፎም ዝነድዱ ፍርያት ኣርሕቑ። ንእሽቶ ሓዊ ጥራይ ባዕልኹም ኣጥፍኡ፡ ውሑስ ምስ ዝኸውን ጥራይ ድማ። ዝዓበየ ድዩ? ናብ ደገ ውጽኡ፡ ኣብ ድሕሬኹም ማዕጾ ዕጸዉ፡ ኣላርም ድማ ሃቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.p': "ኮቦርታ መጥፍኢ ሓዊ ኣበይ ተሰቒሉ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.s': { m: "ኣብ ካንቲና ኣብ ድስቲ ዘሎ ዘይቲ ሓዊ ይሕዝ። እቲ ሃልሃልታ ገና ንእሽቶ እዩ። እንታይ ትገብር?", f: "ኣብ ካንቲና ኣብ ድስቲ ዘሎ ዘይቲ ሓዊ ይሕዝ። እቲ ሃልሃልታ ገና ንእሽቶ እዩ። እንታይ ትገብሪ?", x: "ኣብ ካንቲና ኣብ ድስቲ ዘሎ ዘይቲ ሓዊ ይሕዝ። እቲ ሃልሃልታ ገና ንእሽቶ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o1': { m: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብሮ።", f: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብርዮ።", x: "ነቲ ኮቦርታ መጥፍኢ ሓዊ ኣብ ልዕሊ እቲ ድስቲ ኣንብርዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o2': { m: "ሓደ ብርጭቆ ማይ ደርብየሉ።", f: "ሓደ ብርጭቆ ማይ ደርብዪሉ።", x: "ሓደ ብርጭቆ ማይ ደርብዩሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.o3': { m: "ነቲ ድስቲ ናብ ደገ ውሰዶ።", f: "ነቲ ድስቲ ናብ ደገ ውሰድዮ።", x: "ነቲ ድስቲ ናብ ደገ ውሰድዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.w': { m: "ኣብ ዝነድድ ዘይቲ ዝፈሰሰ ማይ ዓብዪ ኩዕሶ ሓዊ ይፈጥር። እቲ ኮቦርታ ነቲ ኣየር የርሕቖ፡ ሓዊ ድማ ይጠፍእ። እንተ ክኢልካ ነቲ ሙቐት ኣጥፍኦ።", f: "ኣብ ዝነድድ ዘይቲ ዝፈሰሰ ማይ ዓብዪ ኩዕሶ ሓዊ ይፈጥር። እቲ ኮቦርታ ነቲ ኣየር የርሕቖ፡ ሓዊ ድማ ይጠፍእ። እንተ ክኢልኪ ነቲ ሙቐት ኣጥፍእዮ።", x: "ኣብ ዝነድድ ዘይቲ ዝፈሰሰ ማይ ዓብዪ ኩዕሶ ሓዊ ይፈጥር። እቲ ኮቦርታ ነቲ ኣየር የርሕቖ፡ ሓዊ ድማ ይጠፍእ። እንተ ክኢልኩም ነቲ ሙቐት ኣጥፍእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork': "ሓደገኛ ስራሕ፡ ቅድም ናይ ድሕንነት ፍቓድ", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.b': { m: "ንሓደገኛ ስራሕ፡ ከም ኣብ ጥቓ ዝነድዱ ነገራት ምልሓም፡ ወይ ኣብ ውሽጢ ታንኪ ወይ ጉድጓድ ምስራሕ፡ እቲ ትካል መብዛሕትኡ ግዜ ናይ ድሕንነት ፍቓድ (werkvergunning) ይጥቀም። እዚ ናይ ድሕንነት ወረቐት እዩ፡ ናትካ ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን። እንታይ ከም እትገብር፡ ኣበይ፡ ኣየኖት ሓደጋታት ከም ዘለዉን እንታይ ከም ዝግበረሎምን ይገልጽ። ኣንብቦ፡ ምስ ተፈረመ ጥራይ ድማ ጀምር። ኣብ ዕጹው ቦታ ኣዝዩ ሒደት ኣየር ወይ ሓደገኛ ጋዝ ክህሉ ይኽእል፡ ቅድም ምልካዕ ጋዝ፡ ሓላዊ መእተዊ ድማ ኣብ ደገ ይጸንሕ። ኣብ ውሽጢ ዘሎ ሰብ ኣብ ሽግር ድዩ? ኣላርም ሃብ፡ ብዘይ መከላኸሊ ፈጺምካ ኣይትእቶ። ምስ ክሬን፡ ሓደ ሰብ ጥራይ ምልክት ይህብ፡ ምልክት ሃቢ። ፈጺምካ ኣብ ትሕቲ ተሰቒሉ ዘሎ ጽዕነት ደው ኣይትበል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ንሓደገኛ ስራሕ፡ ከም ኣብ ጥቓ ዝነድዱ ነገራት ምልሓም፡ ወይ ኣብ ውሽጢ ታንኪ ወይ ጉድጓድ ምስራሕ፡ እቲ ትካል መብዛሕትኡ ግዜ ናይ ድሕንነት ፍቓድ (werkvergunning) ይጥቀም። እዚ ናይ ድሕንነት ወረቐት እዩ፡ ናትኪ ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን። እንታይ ከም እትገብሪ፡ ኣበይ፡ ኣየኖት ሓደጋታት ከም ዘለዉን እንታይ ከም ዝግበረሎምን ይገልጽ። ኣንብብዮ፡ ምስ ተፈረመ ጥራይ ድማ ጀምሪ። ኣብ ዕጹው ቦታ ኣዝዩ ሒደት ኣየር ወይ ሓደገኛ ጋዝ ክህሉ ይኽእል፡ ቅድም ምልካዕ ጋዝ፡ ሓላዊ መእተዊ ድማ ኣብ ደገ ይጸንሕ። ኣብ ውሽጢ ዘሎ ሰብ ኣብ ሽግር ድዩ? ኣላርም ሃቢ፡ ብዘይ መከላኸሊ ፈጺምኪ ኣይትእተዊ። ምስ ክሬን፡ ሓደ ሰብ ጥራይ ምልክት ይህብ፡ ምልክት ሃቢ። ፈጺምኪ ኣብ ትሕቲ ተሰቒሉ ዘሎ ጽዕነት ደው ኣይትበሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ንሓደገኛ ስራሕ፡ ከም ኣብ ጥቓ ዝነድዱ ነገራት ምልሓም፡ ወይ ኣብ ውሽጢ ታንኪ ወይ ጉድጓድ ምስራሕ፡ እቲ ትካል መብዛሕትኡ ግዜ ናይ ድሕንነት ፍቓድ (werkvergunning) ይጥቀም። እዚ ናይ ድሕንነት ወረቐት እዩ፡ ናትኩም ወረቐታት መንበሪ ወይ ስራሕ ኣይኮነን። እንታይ ከም እትገብሩ፡ ኣበይ፡ ኣየኖት ሓደጋታት ከም ዘለዉን እንታይ ከም ዝግበረሎምን ይገልጽ። ኣንብብዎ፡ ምስ ተፈረመ ጥራይ ድማ ጀምሩ። ኣብ ዕጹው ቦታ ኣዝዩ ሒደት ኣየር ወይ ሓደገኛ ጋዝ ክህሉ ይኽእል፡ ቅድም ምልካዕ ጋዝ፡ ሓላዊ መእተዊ ድማ ኣብ ደገ ይጸንሕ። ኣብ ውሽጢ ዘሎ ሰብ ኣብ ሽግር ድዩ? ኣላርም ሃቡ፡ ብዘይ መከላኸሊ ፈጺምኩም ኣይትእተዉ። ምስ ክሬን፡ ሓደ ሰብ ጥራይ ምልክት ይህብ፡ ምልክት ሃቢ። ፈጺምኩም ኣብ ትሕቲ ተሰቒሉ ዘሎ ጽዕነት ደው ኣይትበሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.p': "እቲ ናይ ድሕንነት ፍቓድ ድሮ ተፈሪሙ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.s': { m: "ኣብ ታንኪ ዘሎ ብጻይ ስራሕካ ኣይምልስን። ንስኻ ሓላዊ መእተዊ ኢኻ። እንታይ ትገብር?", f: "ኣብ ታንኪ ዘሎ ብጻይ ስራሕኪ ኣይምልስን። ንስኺ ሓላዊት መእተዊ ኢኺ። እንታይ ትገብሪ?", x: "ኣብ ታንኪ ዘሎ ብጻይ ስራሕኩም ኣይምልስን። ንስኹም ሓላዊ መእተዊ ኢኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o1': { m: "ኣላርም ሃብ፡ ኣብ ደገ ድማ ጽናሕ።", f: "ኣላርም ሃቢ፡ ኣብ ደገ ድማ ጽንሒ።", x: "ኣላርም ሃቡ፡ ኣብ ደገ ድማ ጽንሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o2': { m: "ንምሕጋዙ ቀልጢፍካ ናብ ውሽጢ እቶ።", f: "ንምሕጋዙ ቀልጢፍኪ ናብ ውሽጢ እተዊ።", x: "ንምሕጋዙ ቀልጢፍኩም ናብ ውሽጢ እተዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.o3': { m: "ቁሩብ ደቓይቕ ተጸበ፡ ድሕሪኡ ርአ።", f: "ቁሩብ ደቓይቕ ተጸበዪ፡ ድሕሪኡ ርኣዪ።", x: "ቁሩብ ደቓይቕ ተጸበዩ፡ ድሕሪኡ ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.w': { m: "ንብጻይ ስራሕካ ዝጎድኦ ጋዝ ንዓኻ እውን ክጎድኣካ ይኽእል። ኣብ ታንክታት ዝተጎድኡ ብዙሓት ሰባት ሓገዝቲ ነይሮም። ድሕሪ ኣላርም፡ መከላኸሊ ዘለዎ ሓገዝ ይመጽእ።", f: "ንብጻይ ስራሕኪ ዝጎድኦ ጋዝ ንዓኺ እውን ክጎድኣኪ ይኽእል። ኣብ ታንክታት ዝተጎድኡ ብዙሓት ሰባት ሓገዝቲ ነይሮም። ድሕሪ ኣላርም፡ መከላኸሊ ዘለዎ ሓገዝ ይመጽእ።", x: "ንብጻይ ስራሕኩም ዝጎድኦ ጋዝ ንዓኹም እውን ክጎድኣኩም ይኽእል። ኣብ ታንክታት ዝተጎድኡ ብዙሓት ሰባት ሓገዝቲ ነይሮም። ድሕሪ ኣላርም፡ መከላኸሊ ዘለዎ ሓገዝ ይመጽእ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie", the fourth own unit of Productie (23 November 2026).
    'u.process': "ኦፕሬተር ኣብ ኢንዱስትሪ መስርሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantround': "ዙረትን ክፍሊ ቁጽጽርን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.controlekamer': "ክፍሊ ቁጽጽር (ኦፕሬተራት ንብምሉኡ ፋብሪካ ብስክሪናት ዝከታተሉሉ ቦታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.operator': "ኦፕሬተር (ንማሽናት ፋብሪካ ዘንቀሳቕስን ዝከታተልን ሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.drukmeter': "መለክዒ ጸቕጢ (መርፍእ ዘለዎ ክቢ መለክዒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.niveau': "ደረጃ (ታንኪ ወይ ሲሎ ክንደይ ከም ዝመልአ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.snelheid': "ቅልጣፈ (መስመር ወይ ማሽን ክንደይ ቀልጢፉ ከም ዝሰርሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.alarmmelding': "መልእኽቲ ኣላርም (ገለ ነገር ከም ዝተጋገየ ዝሕብር ኣብ ስክሪን ዝወጽእ መጠንቀቕታ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.1': "ዙረተይ እገብር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.2': "እቲ ጸቕጢ ካብ ዓቐኑ ንላዕሊ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantround.3': "ነቲ ቁጽሪ እጽሕፎ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.q': "ስለምንታይ ኣብ ስክሪን ኣላርም ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.a': "ደረጃ ታንኪ ክልተ ካብ ዓቐኑ ንላዕሊ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.plantfault': "ብልሽት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstand': "ደው ምባል (እቲ መስመር ደው ይብል፡ ዝኾነ ነገር ድማ ኣይፍረን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opstarten': "ምብጋስ (ማሽን ወይ መስመር፡ ስጉምቲ ብስጉምቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilzetten': "ምዕጻው (ማሽን ብትኽክለኛ መገዲ ደው ምባል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.technischedienst': "ክፍሊ ጽገና (TD፡ ንማሽናት ይጽግኑ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhoudsmonteur': "መካኒክ ጽገና", // nieuw, nalezen // nagelezen AI 28 nov
    'w.resetten': "ሪሴት ምግባር (ኣብ ስክሪን ወይ ሰሌዳ መቆጻጸሪ ብልሽት ምድምሳስ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.1': "ብልሽት ምስ ዘጋጥም፡ ንሓላፊ ፈረቓ እድውል።", // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.2': { m: "ፈጺምካ ኢድካ ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእቱ።", f: "ፈጺምኪ ኢድኪ ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእትዊ።", x: "ፈጺምኩም ኢድኩም ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእትዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.plantfault.3': "ክፍሊ ጽገና ይመጽእ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.q': "ነቲ መስመር እንደገና ከበግሶ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a': { m: "ኣይፋል፡ ተጸበ። ቁልፊ እቲ መካኒክ ገና ኣብኡ ኣሎ።", f: "ኣይፋል፡ ተጸበዪ። ቁልፊ እቲ መካኒክ ገና ኣብኡ ኣሎ።", x: "ኣይፋል፡ ተጸበዩ። ቁልፊ እቲ መካኒክ ገና ኣብኡ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.shiftwork': "ፈረቓታትን ለይትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploeg': "ጉጅለ ፈረቓ (ተመሳሳሊ ፈረቓታት ዝሰርሕ ጉጅለ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ploegwissel': "ምቅይያር ፈረቓ (ሓደ ጉጅለ ናብ ገዛ ይኸይድ፡ ዝቕጽል ጉጅለ ድማ ይጅምር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.volcontinu': "ለይትን መዓልትን (እቲ ፋብሪካ ለይትን መዓልትን፡ ኩሉ መዓልቲ ሰሙን ይሰርሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.overdagslapen': "ብመዓልቲ ምድቃስ (ድሕሪ ናይ ለይቲ ፈረቓ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.broodtrommel': "ሳጹን ምግቢ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aflosser': { m: "ተካኢ (ቦታኻ ዝትክእ ብጻይ ስራሕ)", f: "ተካኢ (ቦታኺ ዝትክእ ብጻይ ስራሕ)", x: "ተካኢ (ቦታኹም ዝትክእ ብጻይ ስራሕ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.1': "ፋብሪካና ለይትን መዓልትን ይሰርሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.2': { m: "ንዝቕጽል ጉጅለ ፈረቓ ኣብ መዝገብ ጽሓፎ።", f: "ንዝቕጽል ጉጅለ ፈረቓ ኣብ መዝገብ ጽሓፍዮ።", x: "ንዝቕጽል ጉጅለ ፈረቓ ኣብ መዝገብ ጽሓፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.shiftwork.3': "ንምርኽኻብ ብግዜኡ እበጽሕ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.q': "ትማሊ ለይቲ እንታይ ኣጋጢሙ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a': "ፓምፕ ሰለስተ ደው ኢሉ። ኣብ መዝገብ ተጻሒፉ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.heatdust': "ሙቐት፡ ስቲምን ሓመድን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.smeltoven': "ምድጃ ምሕቓቕ (ብርጭቆ ወይ ሓጺን ዘሕቅቕ ኣዝዩ ዝውዒ ምድጃ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoom': "ስቲም (ኣዝዩ ዝውዒ ትኪ ማይ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stoomleiding': { m: "ቱቦ ስቲም (ስቲም እንተ ዘይረኣኻ እውን ውዑይ እዩ)", f: "ቱቦ ስቲም (ስቲም እንተ ዘይረኣኺ እውን ውዑይ እዩ)", x: "ቱቦ ስቲም (ስቲም እንተ ዘይረኣኹም እውን ውዑይ እዩ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.hittekleding': "ካብ ሙቐት ዝከላኸል ክዳን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kwartsstof': { m: "ሓመድ ኳርትዝ (ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ኣዝዩ ደቂቕ ሓመድ፡ ንሳንቡእካ ይጎድእ)", f: "ሓመድ ኳርትዝ (ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ኣዝዩ ደቂቕ ሓመድ፡ ንሳንቡእኪ ይጎድእ)", x: "ሓመድ ኳርትዝ (ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ኣዝዩ ደቂቕ ሓመድ፡ ንሳንቡእኩም ይጎድእ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.explosiegevaar': "ሓደጋ ምንፍጃር (ኣብ ኣየር ዘሎ ሓመድ ወይ ትኪ ክነፍጽ ይኽእል፡ EX ዝብል ብጫ ሰሌዳ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.1': { m: "ኣብ ጥቓ ምድጃ ምሕቓቕ ብተደጋጋሚ ማይ ስተ።", f: "ኣብ ጥቓ ምድጃ ምሕቓቕ ብተደጋጋሚ ማይ ስተዪ።", x: "ኣብ ጥቓ ምድጃ ምሕቓቕ ብተደጋጋሚ ማይ ስተዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.2': { m: "ሓመድ ኳርትዝ ኣይረአን እዩ። ማስክ ሓመድካ ግበር።", f: "ሓመድ ኳርትዝ ኣይረአን እዩ። ማስክ ሓመድኪ ግበሪ።", x: "ሓመድ ኳርትዝ ኣይረአን እዩ። ማስክ ሓመድኩም ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.heatdust.3': "ኣብዚ ሓደጋ ምንፍጃር ኣሎ፡ ብልጭታ ኣይፍቀድን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.q': "ተሌፎነይ ናብዚ ዞባ ክኣቱ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a': "ኣይፋል። ኣብዚ ሓደጋ ምንፍጃር ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround': { m: "ዙረትካ ግበር፡ ጽሓፎ", f: "ዙረትኪ ግበሪ፡ ጽሓፍዮ", x: "ዙረትኩም ግበሩ፡ ጽሓፍዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.b': { m: "ለይትን መዓልትን ዝሰርሕ ፋብሪካ ኣዒንትን ኣእዛንን የድልዮ። ኣብ ዙረትካ ትርኢ፡ ትሰምዕን ተሽትትን፡ ሓድሽ ድምጺ፡ ምንጣብ ወይ ዘይልሙድ ሽታ ቀዳማይ ምልክት ጸገም ክኸውን ይኽእል። መለክዒታት ተንብብ፡ መጠን ሙቐት፡ ጸቕጢ፡ ቅልጣፈን ደረጃን። ነፍሲ ወከፍ ቁጽሪ ብቕጽበት ምስ ሰዓቱ ኣብቲ ዝርዝር ወይ ኣብቲ ሲስተም ጽሓፎ። ደሓር ብዝኽሪ ኣይኮነን። ሓደ ቁጽሪ ካብ ዓቐኑ ንላዕሊ ወይ ንታሕቲ ድዩ? ብቕጽበት ንክፍሊ ቁጽጽር ወይ ንሓላፊ ፈረቓኻ ንገር። ኣብ ስክሪን ዝወጽእ ኣላርም ፈጺሙ «ኣላርም ጥራይ» ኣይኮነን፡ ስለምንታይ ከም ዝወጸ ከይፈለጥካ ኣይተጥፍኦ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ለይትን መዓልትን ዝሰርሕ ፋብሪካ ኣዒንትን ኣእዛንን የድልዮ። ኣብ ዙረትኪ ትርእዪ፡ ትሰምዒን ተሽትቲን፡ ሓድሽ ድምጺ፡ ምንጣብ ወይ ዘይልሙድ ሽታ ቀዳማይ ምልክት ጸገም ክኸውን ይኽእል። መለክዒታት ተንብቢ፡ መጠን ሙቐት፡ ጸቕጢ፡ ቅልጣፈን ደረጃን። ነፍሲ ወከፍ ቁጽሪ ብቕጽበት ምስ ሰዓቱ ኣብቲ ዝርዝር ወይ ኣብቲ ሲስተም ጽሓፍዮ። ደሓር ብዝኽሪ ኣይኮነን። ሓደ ቁጽሪ ካብ ዓቐኑ ንላዕሊ ወይ ንታሕቲ ድዩ? ብቕጽበት ንክፍሊ ቁጽጽር ወይ ንሓላፊ ፈረቓኺ ንገሪ። ኣብ ስክሪን ዝወጽእ ኣላርም ፈጺሙ «ኣላርም ጥራይ» ኣይኮነን፡ ስለምንታይ ከም ዝወጸ ከይፈለጥኪ ኣይተጥፍእዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ለይትን መዓልትን ዝሰርሕ ፋብሪካ ኣዒንትን ኣእዛንን የድልዮ። ኣብ ዙረትኩም ትርእዩ፡ ትሰምዑን ተሽትቱን፡ ሓድሽ ድምጺ፡ ምንጣብ ወይ ዘይልሙድ ሽታ ቀዳማይ ምልክት ጸገም ክኸውን ይኽእል። መለክዒታት ተንብቡ፡ መጠን ሙቐት፡ ጸቕጢ፡ ቅልጣፈን ደረጃን። ነፍሲ ወከፍ ቁጽሪ ብቕጽበት ምስ ሰዓቱ ኣብቲ ዝርዝር ወይ ኣብቲ ሲስተም ጽሓፍዎ። ደሓር ብዝኽሪ ኣይኮነን። ሓደ ቁጽሪ ካብ ዓቐኑ ንላዕሊ ወይ ንታሕቲ ድዩ? ብቕጽበት ንክፍሊ ቁጽጽር ወይ ንሓላፊ ፈረቓኹም ንገሩ። ኣብ ስክሪን ዝወጽእ ኣላርም ፈጺሙ «ኣላርም ጥራይ» ኣይኮነን፡ ስለምንታይ ከም ዝወጸ ከይፈለጥኩም ኣይተጥፍእዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.p': "መጠን ሙቐት ካብ ዓቐኑ ንላዕሊ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.s': { m: "ኣብ ዙረትካ፡ እቲ ጸቕጢ ቁሩብ ካብ ዓቐኑ ንላዕሊ እዩ። ፈረቓኻ ክውዳእ ቀሪቡ እዩ። እንታይ ትገብር?", f: "ኣብ ዙረትኪ፡ እቲ ጸቕጢ ቁሩብ ካብ ዓቐኑ ንላዕሊ እዩ። ፈረቓኺ ክውዳእ ቀሪቡ እዩ። እንታይ ትገብሪ?", x: "ኣብ ዙረትኩም፡ እቲ ጸቕጢ ቁሩብ ካብ ዓቐኑ ንላዕሊ እዩ። ፈረቓኹም ክውዳእ ቀሪቡ እዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o1': { m: "ብቕጽበት ንክፍሊ ቁጽጽር ንገር።", f: "ብቕጽበት ንክፍሊ ቁጽጽር ንገሪ።", x: "ብቕጽበት ንክፍሊ ቁጽጽር ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o2': { m: "ጽሓፎ፡ ንዝኾነ ሰብ ድማ ኣይትንገር።", f: "ጽሓፍዮ፡ ንዝኾነ ሰብ ድማ ኣይትንገሪ።", x: "ጽሓፍዎ፡ ንዝኾነ ሰብ ድማ ኣይትንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.o3': { m: "ንዝቕጽል ፈረቓ ግደፎ።", f: "ንዝቕጽል ፈረቓ ግደፍዮ።", x: "ንዝቕጽል ፈረቓ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantround.w': "ኣብ ፋብሪካ ንእሽቶ ለውጢ ቀልጢፉ ክዓቢ ይኽእል። ክፍሊ ቁጽጽር ኣቐዲሙ እንተ ፈሊጡ፡ ገለ ነገር ከይተበላሸወ ስጉምቲ ክወስድ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault': "ደው ምባል፡ ምቍላፍ፡ ድሕሪኡ ምጽጋን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.b': { m: "ብልሽት ምስ ዘጋጥም፡ እቲ መስመር ደው ይብል፡ ኩሉ ሰብ ድማ ቀልጢፉ እንደገና ክሰርሕ ይደሊ። ግን ብዙሓት ሓደጋታት ልክዕ ሽዑ እዮም ዘጋጥሙ። ፈጺምካ ኢድካ ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእቱ፡ «ንሓጺር ግዜ ጥራይ» እውን ኣይኮነን። ንሓላፊ ፈረቓኻ ወይ ንክፍሊ ጽገና ጸውዕ። ዝኾነ ሰብ ኣብቲ ማሽን ቅድሚ ምስራሑ፡ እቲ ማሽን ደው ይብልን ይቑለፍን፡ ሓደ እኳ ከየበግሶ። መብዛሕትኡ ግዜ ኣብኡ ዝሰርሕ ነፍሲ ወከፍ ሰብ ናይ ባዕሉ ቁልፊ የእትወሉ። ኩሉ ቁልፊ ምስ ተኣልየ፡ ሓላፊ ፈረቓኻ ድማ ውሑስ እዩ ምስ በለ ጥራይ እንደገና ኣበግስ። ከም ዝተማሃርካዮ፡ ስጉምቲ ብስጉምቲ ኣበግስ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ብልሽት ምስ ዘጋጥም፡ እቲ መስመር ደው ይብል፡ ኩሉ ሰብ ድማ ቀልጢፉ እንደገና ክሰርሕ ይደሊ። ግን ብዙሓት ሓደጋታት ልክዕ ሽዑ እዮም ዘጋጥሙ። ፈጺምኪ ኢድኪ ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእትዊ፡ «ንሓጺር ግዜ ጥራይ» እውን ኣይኮነን። ንሓላፊ ፈረቓኺ ወይ ንክፍሊ ጽገና ጸውዒ። ዝኾነ ሰብ ኣብቲ ማሽን ቅድሚ ምስራሑ፡ እቲ ማሽን ደው ይብልን ይቑለፍን፡ ሓደ እኳ ከየበግሶ። መብዛሕትኡ ግዜ ኣብኡ ዝሰርሕ ነፍሲ ወከፍ ሰብ ናይ ባዕሉ ቁልፊ የእትወሉ። ኩሉ ቁልፊ ምስ ተኣልየ፡ ሓላፊ ፈረቓኺ ድማ ውሑስ እዩ ምስ በለ ጥራይ እንደገና ኣበግሲ። ከም ዝተማሃርክዮ፡ ስጉምቲ ብስጉምቲ ኣበግሲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ብልሽት ምስ ዘጋጥም፡ እቲ መስመር ደው ይብል፡ ኩሉ ሰብ ድማ ቀልጢፉ እንደገና ክሰርሕ ይደሊ። ግን ብዙሓት ሓደጋታት ልክዕ ሽዑ እዮም ዘጋጥሙ። ፈጺምኩም ኢድኩም ናብ ዝሰርሕ ዘሎ ማሽን ኣይተእትዉ፡ «ንሓጺር ግዜ ጥራይ» እውን ኣይኮነን። ንሓላፊ ፈረቓኹም ወይ ንክፍሊ ጽገና ጸውዑ። ዝኾነ ሰብ ኣብቲ ማሽን ቅድሚ ምስራሑ፡ እቲ ማሽን ደው ይብልን ይቑለፍን፡ ሓደ እኳ ከየበግሶ። መብዛሕትኡ ግዜ ኣብኡ ዝሰርሕ ነፍሲ ወከፍ ሰብ ናይ ባዕሉ ቁልፊ የእትወሉ። ኩሉ ቁልፊ ምስ ተኣልየ፡ ሓላፊ ፈረቓኹም ድማ ውሑስ እዩ ምስ በለ ጥራይ እንደገና ኣበግሱ። ከም ዝተማሃርኩምዎ፡ ስጉምቲ ብስጉምቲ ኣበግሱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.p': "ገና ቁልፊ ኣብኡ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.s': { m: "ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። ሓደ ብጻይ ስራሕ «ቀልጢፍካ ኣውጽኦ።» ይብለካ። እንታይ ትገብር?", f: "ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። ሓደ ብጻይ ስራሕ «ቀልጢፍኪ ኣውጽእዮ።» ይብለኪ። እንታይ ትገብሪ?", x: "ሓደ ፍርያት ኣብ ማሽን ተጣቢቑ። እቲ ማሽን ገና ይሰርሕ ኣሎ። ሓደ ብጻይ ስራሕ «ቀልጢፍኩም ኣውጽእዎ።» ይብለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o1': { m: "ኢድካ ኣይተእቱ፡ ንሓላፊ ፈረቓ ጸውዕ።", f: "ኢድኪ ኣይተእትዊ፡ ንሓላፊ ፈረቓ ጸውዒ።", x: "ኢድኩም ኣይተእትዉ፡ ንሓላፊ ፈረቓ ጸውዑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o2': { m: "ቀልጢፍካ ብኢድካ ኣውጽኦ።", f: "ቀልጢፍኪ ብኢድኪ ኣውጽእዮ።", x: "ቀልጢፍኩም ብኢድኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.o3': { m: "ክሰርሕ ከሎ ብበትሪ ደፊእካ ኣውጽኦ።", f: "ክሰርሕ ከሎ ብበትሪ ደፊእኪ ኣውጽእዮ።", x: "ክሰርሕ ከሎ ብበትሪ ደፊእኩም ኣውጽእዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.w': { m: "ገና ዝሰርሕ ዘሎ ማሽን ኣብ ዝኾነ ህሞት ክንቀሳቐስ ይኽእል። ደው ኢሉ ዝተቖልፈ ማሽን ክጎድኣካ ኣይክእልን።", f: "ገና ዝሰርሕ ዘሎ ማሽን ኣብ ዝኾነ ህሞት ክንቀሳቐስ ይኽእል። ደው ኢሉ ዝተቖልፈ ማሽን ክጎድኣኪ ኣይክእልን።", x: "ገና ዝሰርሕ ዘሎ ማሽን ኣብ ዝኾነ ህሞት ክንቀሳቐስ ይኽእል። ደው ኢሉ ዝተቖልፈ ማሽን ክጎድኣኩም ኣይክእልን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork': { m: "ለይቲ፡ ደቅስ፡ ብላዕ፡ ብግዜ ብጻሕ", f: "ለይቲ፡ ደቅሲ፡ ብልዒ፡ ብግዜ ብጽሒ", x: "ለይቲ፡ ደቅሱ፡ ብልዑ፡ ብግዜ ብጽሑ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.b': { m: "ብዙሓት ፋብሪካታት ለይትን መዓልትን፡ ኩሉ መዓልቲ ሰሙን ይሰርሑ። ናይ ንግሆ፡ ምሸትን ለይትን ፈረቓታት ብተራ ትሰርሕ፡ መብዛሕትኡ ግዜ ኣብ ሰለስተ ወይ ሓሙሽተ ጉጅለታት ፈረቓ። ድሕሪ ናይ ለይቲ ፈረቓ፡ ኣብ ጸልማትን ህዱእን ክፍሊ ደቅስ፡ መዓስ ከም እትድቅስ ድማ ንስድራኻ ንገር። ኣብ ዝተወሰነ ሰዓታት ብላዕ፡ ናትካ ምግቢ ድማ ሓዝ፡ ብለይቲ ካንቲና መብዛሕትኡ ግዜ ዕጹው እዩ። ንምርኽኻብ ብግዜኡ ብጻሕ፡ ብጻይ ስራሕካ ይጽበየካ ኣሎ፡ እቲ ፋብሪካ ድማ በይኑ ክግደፍ የብሉን። ንናይ ለይቲ ፈረቓታት ተወሳኺ ሕግታት ኣለዉ፡ ኣብ ሕጊ፡ መብዛሕትኡ ግዜ ድማ ኣብ ሓባራዊ ስምምዕ ስራሕ (cao)፡ ንኣብነት ብዛዕባ ዕረፍቲ ድሕሪ ለይትታትካ። ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ብዙሓት ፋብሪካታት ለይትን መዓልትን፡ ኩሉ መዓልቲ ሰሙን ይሰርሑ። ናይ ንግሆ፡ ምሸትን ለይትን ፈረቓታት ብተራ ትሰርሒ፡ መብዛሕትኡ ግዜ ኣብ ሰለስተ ወይ ሓሙሽተ ጉጅለታት ፈረቓ። ድሕሪ ናይ ለይቲ ፈረቓ፡ ኣብ ጸልማትን ህዱእን ክፍሊ ደቅሲ፡ መዓስ ከም እትድቅሲ ድማ ንስድራኺ ንገሪ። ኣብ ዝተወሰነ ሰዓታት ብልዒ፡ ናትኪ ምግቢ ድማ ሓዚ፡ ብለይቲ ካንቲና መብዛሕትኡ ግዜ ዕጹው እዩ። ንምርኽኻብ ብግዜኡ ብጽሒ፡ ብጻይ ስራሕኪ ይጽበየኪ ኣሎ፡ እቲ ፋብሪካ ድማ በይኑ ክግደፍ የብሉን። ንናይ ለይቲ ፈረቓታት ተወሳኺ ሕግታት ኣለዉ፡ ኣብ ሕጊ፡ መብዛሕትኡ ግዜ ድማ ኣብ ሓባራዊ ስምምዕ ስራሕ (cao)፡ ንኣብነት ብዛዕባ ዕረፍቲ ድሕሪ ለይትታትኪ። ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ብዙሓት ፋብሪካታት ለይትን መዓልትን፡ ኩሉ መዓልቲ ሰሙን ይሰርሑ። ናይ ንግሆ፡ ምሸትን ለይትን ፈረቓታት ብተራ ትሰርሑ፡ መብዛሕትኡ ግዜ ኣብ ሰለስተ ወይ ሓሙሽተ ጉጅለታት ፈረቓ። ድሕሪ ናይ ለይቲ ፈረቓ፡ ኣብ ጸልማትን ህዱእን ክፍሊ ደቅሱ፡ መዓስ ከም እትድቅሱ ድማ ንስድራኹም ንገሩ። ኣብ ዝተወሰነ ሰዓታት ብልዑ፡ ናትኩም ምግቢ ድማ ሓዙ፡ ብለይቲ ካንቲና መብዛሕትኡ ግዜ ዕጹው እዩ። ንምርኽኻብ ብግዜኡ ብጽሑ፡ ብጻይ ስራሕኩም ይጽበየኩም ኣሎ፡ እቲ ፋብሪካ ድማ በይኑ ክግደፍ የብሉን። ንናይ ለይቲ ፈረቓታት ተወሳኺ ሕግታት ኣለዉ፡ ኣብ ሕጊ፡ መብዛሕትኡ ግዜ ድማ ኣብ ሓባራዊ ስምምዕ ስራሕ (cao)፡ ንኣብነት ብዛዕባ ዕረፍቲ ድሕሪ ለይትታትኩም። ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.p': "ንናይ ለይቲ ፈረቓታት እንታይ ሕግታት ኣለዉ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.s': { m: "ድሕሪ ኣርባዕተ ለይቲ፡ ሓላፊ ፈረቓኻ ሓንቲ ለይቲ ተወሳኺ ክትሰርሕ ይሓተካ። ኣዝዩ ደኺምካ ኣለኻ። እንታይ ትገብር?", f: "ድሕሪ ኣርባዕተ ለይቲ፡ ሓላፊ ፈረቓኺ ሓንቲ ለይቲ ተወሳኺ ክትሰርሒ ይሓተኪ። ኣዝዩ ደኺምኪ ኣለኺ። እንታይ ትገብሪ?", x: "ድሕሪ ኣርባዕተ ለይቲ፡ ሓላፊ ፈረቓኹም ሓንቲ ለይቲ ተወሳኺ ክትሰርሑ ይሓተኩም። ኣዝዩ ደኺምኩም ኣለኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o1': { m: "ኣዝዩ ከም ዝደኸምካ ንገር፡ ብዛዕባ እቲ ሕግታት ድማ ሕተት።", f: "ኣዝዩ ከም ዝደኸምኪ ንገሪ፡ ብዛዕባ እቲ ሕግታት ድማ ሕተቲ።", x: "ኣዝዩ ከም ዝደኸምኩም ንገሩ፡ ብዛዕባ እቲ ሕግታት ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o2': { m: "እወ በል፡ ብዙሕ ቡን ድማ ስተ።", f: "እወ በሊ፡ ብዙሕ ቡን ድማ ስተዪ።", x: "እወ በሉ፡ ብዙሕ ቡን ድማ ስተዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.o3': { m: "እወ በል፡ ኣብ ዕረፍቲኻ ድማ ቁሩብ ደቅስ።", f: "እወ በሊ፡ ኣብ ዕረፍቲኺ ድማ ቁሩብ ደቅሲ።", x: "እወ በሉ፡ ኣብ ዕረፍቲኹም ድማ ቁሩብ ደቅሱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.w': "ዝደኸሙ ሰባት ዝያዳ ጌጋ ይገብሩ፡ ኣብ ፋብሪካ ድማ ጌጋ ሓደገኛ ክኸውን ይኽእል። ድሕሪ ናይ ለይቲ ፈረቓታት ብዛዕባ ዕረፍቲ ሕግታት ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust': "ሙቐት፡ ሓመድን ብልጭታን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.b': { m: "ኣብ ጥቓ ምድጃ ምሕቓቕ፡ ምድጃ ጡብ ወይ ስቲም ኣዝዩ ውዑይ እዩ። ብተደጋጋሚ ማይ ስተ፡ ቅድሚ ምጽማእካ እውን። ካብ ሙቐት ዝከላኸል ክዳን ግበር፡ ብዘይ ጓንቲ ድማ ቱቦታት ወይ ክፍልታት ኣይትተንክፍ፡ ስቲምን ውዑይ ሓጺንን የቃጽሉ፡ እንተ ዘይረኣኻዮም እውን። ርእስኻ ይዘውረካ ወይ ዕግርግር ይብለካ ድዩ? ደው በል፡ ናብ ዝዝሕል ቦታ ኪድ፡ ንሓደ ሰብ ድማ ንገር። ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ሓመድ፡ ሓመድ ኳርትዝ (kwartsstof) ክሕዝ ይኽእል። ኣይትርእዮን ኢኻ፡ ግን ንሳንቡእካ ይጎድእ። መምጠጢ ሓመድ ተጠቐም፡ ማስክ ሓመድካ ግበር፡ ፈጺምካ ድማ ሓመድ ብዝተጸቕጠ ኣየር ኣይተንፍሖ። ኣብ ገለ ዞባታት፡ ሓመድ ወይ ህፋው ክነፍጽ ይኽእል፡ EX ዝብል ብጫ ሰሌዳ ነዚ የርኢ። ኣብኡ፡ ብልጭታ የለን፡ ሓዊ የለን፡ መብዛሕትኡ ግዜ ድማ ልሙድ ተሌፎን የለን። ኣብ ነፍሲ ወከፍ ዞባ እንታይ ከም ዝፍቀድ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ጥቓ ምድጃ ምሕቓቕ፡ ምድጃ ጡብ ወይ ስቲም ኣዝዩ ውዑይ እዩ። ብተደጋጋሚ ማይ ስተዪ፡ ቅድሚ ምጽማእኪ እውን። ካብ ሙቐት ዝከላኸል ክዳን ግበሪ፡ ብዘይ ጓንቲ ድማ ቱቦታት ወይ ክፍልታት ኣይትተንክፊ፡ ስቲምን ውዑይ ሓጺንን የቃጽሉ፡ እንተ ዘይረኣኽዮም እውን። ርእስኺ ይዘውረኪ ወይ ዕግርግር ይብለኪ ድዩ? ደው በሊ፡ ናብ ዝዝሕል ቦታ ኪዲ፡ ንሓደ ሰብ ድማ ንገሪ። ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ሓመድ፡ ሓመድ ኳርትዝ (kwartsstof) ክሕዝ ይኽእል። ኣይትርእይዮን ኢኺ፡ ግን ንሳንቡእኪ ይጎድእ። መምጠጢ ሓመድ ተጠቐሚ፡ ማስክ ሓመድኪ ግበሪ፡ ፈጺምኪ ድማ ሓመድ ብዝተጸቕጠ ኣየር ኣይተንፍሕዮ። ኣብ ገለ ዞባታት፡ ሓመድ ወይ ህፋው ክነፍጽ ይኽእል፡ EX ዝብል ብጫ ሰሌዳ ነዚ የርኢ። ኣብኡ፡ ብልጭታ የለን፡ ሓዊ የለን፡ መብዛሕትኡ ግዜ ድማ ልሙድ ተሌፎን የለን። ኣብ ነፍሲ ወከፍ ዞባ እንታይ ከም ዝፍቀድ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ጥቓ ምድጃ ምሕቓቕ፡ ምድጃ ጡብ ወይ ስቲም ኣዝዩ ውዑይ እዩ። ብተደጋጋሚ ማይ ስተዩ፡ ቅድሚ ምጽማእኩም እውን። ካብ ሙቐት ዝከላኸል ክዳን ግበሩ፡ ብዘይ ጓንቲ ድማ ቱቦታት ወይ ክፍልታት ኣይትተንክፉ፡ ስቲምን ውዑይ ሓጺንን የቃጽሉ፡ እንተ ዘይረኣኹምዎም እውን። ርእስኹም ይዘውረኩም ወይ ዕግርግር ይብለኩም ድዩ? ደው በሉ፡ ናብ ዝዝሕል ቦታ ኪዱ፡ ንሓደ ሰብ ድማ ንገሩ። ካብ ጭቃ፡ ሑጻ ወይ እምኒ ዝመጽእ ሓመድ፡ ሓመድ ኳርትዝ (kwartsstof) ክሕዝ ይኽእል። ኣይትርእይዎን ኢኹም፡ ግን ንሳንቡእኩም ይጎድእ። መምጠጢ ሓመድ ተጠቐሙ፡ ማስክ ሓመድኩም ግበሩ፡ ፈጺምኩም ድማ ሓመድ ብዝተጸቕጠ ኣየር ኣይተንፍሕዎ። ኣብ ገለ ዞባታት፡ ሓመድ ወይ ህፋው ክነፍጽ ይኽእል፡ EX ዝብል ብጫ ሰሌዳ ነዚ የርኢ። ኣብኡ፡ ብልጭታ የለን፡ ሓዊ የለን፡ መብዛሕትኡ ግዜ ድማ ልሙድ ተሌፎን የለን። ኣብ ነፍሲ ወከፍ ዞባ እንታይ ከም ዝፍቀድ ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.heatdust.p': "ጽቡቕ ኣይስምዓንን እዩ። ናብ ዝዝሕል ቦታ እኸይድ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.s': { m: "ኣብ ማሽንካ ደቂቕ ሓመድ ጭቃ ኣሎ። ሓደ ብጻይ ስራሕ «ብሽጉጥ ኣየር ንፍሖ።» ይብለካ። እንታይ ትገብር?", f: "ኣብ ማሽንኪ ደቂቕ ሓመድ ጭቃ ኣሎ። ሓደ ብጻይ ስራሕ «ብሽጉጥ ኣየር ንፍሕዮ።» ይብለኪ። እንታይ ትገብሪ?", x: "ኣብ ማሽንኩም ደቂቕ ሓመድ ጭቃ ኣሎ። ሓደ ብጻይ ስራሕ «ብሽጉጥ ኣየር ንፍሕዎ።» ይብለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o1': { m: "ብርሑስ ጨርቂ ወይ ብቫኩም ኣጽርዮ።", f: "ብርሑስ ጨርቂ ወይ ብቫኩም ኣጽርይዮ።", x: "ብርሑስ ጨርቂ ወይ ብቫኩም ኣጽርይዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o2': { m: "ንፍሖ፡ ዝቐልጠፈ እዩ።", f: "ንፍሕዮ፡ ዝቐልጠፈ እዩ።", x: "ንፍሕዎ፡ ዝቐልጠፈ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.o3': { m: "ንዝቕጽል ፈረቓ ግደፎ።", f: "ንዝቕጽል ፈረቓ ግደፍዮ።", x: "ንዝቕጽል ፈረቓ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.w': { m: "ምንፋሕ ነቲ ሓመድ ናብ ላዕሊ፡ ናብ ኣየርን ናብ ሳንቡእካን የልዕሎ። ርሑስ ጨርቂ ወይ ቫኩም ነቲ ሓመድ ኣብ ታሕቲ የጽንሖ።", f: "ምንፋሕ ነቲ ሓመድ ናብ ላዕሊ፡ ናብ ኣየርን ናብ ሳንቡእኪን የልዕሎ። ርሑስ ጨርቂ ወይ ቫኩም ነቲ ሓመድ ኣብ ታሕቲ የጽንሖ።", x: "ምንፋሕ ነቲ ሓመድ ናብ ላዕሊ፡ ናብ ኣየርን ናብ ሳንቡእኩምን የልዕሎ። ርሑስ ጨርቂ ወይ ቫኩም ነቲ ሓመድ ኣብ ታሕቲ የጽንሖ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (debts, taxes, discrimination, the union, kiln, mixing lab, first weeks, order picking) (26 November 2026).
    'l.discrimination': "ኣድልዎን ምህሳይን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.andersbehandelen': "ብዝተፈለየ መንገዲ ምሓዝ (ካብ ካልኦት ብዝኸፍአ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afkomst': "መበቆል (ሓደ ሰብ ወይ ስድራኡ ዝመጽሉ ሃገር ወይ ጉጅለ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geloof': "ሃይማኖት፡ እምነት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitschelden': "ምጽራፍ (ንሓደ ሰብ ክፉእ ቃላት ምዝራብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedreigen': "ምፍርራሕ (ንሓደ ሰብ ከም ዝጎድኦ ምንጋር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geweld': "ዓመጽ", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.1': "ብሰንኪ ሃይማኖተይ ብዝተፈለየ መንገዲ እየ ዝተሓዝ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.2': "የፈራርሓኒ ኣሎ። ውሕስነት ኣይስምዓንን እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.discrimination.3': "ኣይፋል ክብል ይፍቀደለይ እዩ፡ ንሓላፊየይ እውን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.q': { m: "ደሓን ዲኻ? ኩሉ ግዜ ይጸርፉኻ እዮም።", f: "ደሓን ዲኺ? ኩሉ ግዜ ይጸርፉኺ እዮም።", x: "ደሓን ዲኹም? ኩሉ ግዜ ይጸርፉኹም እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a': "ኣይፋል፡ ደሓን ኣይኮንኩን። ክሕብሮ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.union': "ማሕበር ሰራሕተኛታትን ባይቶ ሰራሕተኛታትን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lidworden': "ምጽንባር፡ ኣባል ምዃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.contributie': { m: "ክፍሊት ኣባልነት (ኣብ ነፍሲ ወከፍ ወርሒ ትኸፍሎ)", f: "ክፍሊት ኣባልነት (ኣብ ነፍሲ ወከፍ ወርሒ ትኸፍልዮ)", x: "ክፍሊት ኣባልነት (ኣብ ነፍሲ ወከፍ ወርሒ ትኸፍልዎ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.opkomenvoor': "ምጥባቕ (ንረብሓ ሓደ ሰብ ምክልኻል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderhandelen': "ምዝርራብ (ክልቲኦም ወገናት ክሳብ ዝሰማምዑ ምዝርራብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.loonsverhoging': "ወሰኽ ደሞዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondernemingsraad': "ባይቶ ሰራሕተኛታት (OR፡ ምስ ዳይረክተር ክዛረቡ ዝተመርጹ መሳርሕቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.1': "ናብ ማሕበር ሰራሕተኛታት እጽንበር ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.2': "ማሕበር ሰራሕተኛታት ብዛዕባ ሓባራዊ ስምምዕ ስራሕ (cao) ይዘራረብ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.union.3': "ኣብ ባይቶ ሰራሕተኛታት መን ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.q': { m: "ስለምንታይ ኣባል ማሕበር ሰራሕተኛታት ኮይንካ?", f: "ስለምንታይ ኣባል ማሕበር ሰራሕተኛታት ኮይንኪ?", x: "ስለምንታይ ኣባል ማሕበር ሰራሕተኛታት ኮይንኩም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a': "ጸገም ምስ ዝህሉ ይጣበቑለይ እዮም።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.debthelp': "ዕዳን ሓገዝን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.herinnering': { m: "መዘኻኸሪ (ደብዳቤ፡ ገና ኣይከፈልካን)", f: "መዘኻኸሪ (ደብዳቤ፡ ገና ኣይከፈልክን)", x: "መዘኻኸሪ (ደብዳቤ፡ ገና ኣይከፈልኩምን)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanmaning': { m: "ናይ መወዳእታ መዘኻኸሪ (ቅድሚ ሓደ ዕለት ክፈል፡ እንተ ዘይኮይኑ ተወሳኺ ወጻኢታት ክመጽእ ይኽእል)", f: "ናይ መወዳእታ መዘኻኸሪ (ቅድሚ ሓደ ዕለት ክፈሊ፡ እንተ ዘይኮይኑ ተወሳኺ ወጻኢታት ክመጽእ ይኽእል)", x: "ናይ መወዳእታ መዘኻኸሪ (ቅድሚ ሓደ ዕለት ክፈሉ፡ እንተ ዘይኮይኑ ተወሳኺ ወጻኢታት ክመጽእ ይኽእል)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.betalingsregeling': { m: "ውጥን ክፍሊት (ዕዳ ብንኣሽቱ ክፋላት ትኸፍሎ)", f: "ውጥን ክፍሊት (ዕዳ ብንኣሽቱ ክፋላት ትኸፍልዮ)", x: "ውጥን ክፍሊት (ዕዳ ብንኣሽቱ ክፋላት ትኸፍልዎ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.deurwaarder': "ኣኻቢ ዕዳ ቤት ፍርዲ (ዕዳ ዘኻክብ ወግዓዊ ሰራሕተኛ፡ መብዛሕትኡ ግዜ ድሕሪ ዳኛ ምውሳኑ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.schuldhulp': { m: "ሓገዝ ዕዳ (ካብ ምምሕዳር ከተማ ዝወሃብ ብዛዕባ ዕዳኻ ነጻ ሓገዝ)", f: "ሓገዝ ዕዳ (ካብ ምምሕዳር ከተማ ዝወሃብ ብዛዕባ ዕዳኺ ነጻ ሓገዝ)", x: "ሓገዝ ዕዳ (ካብ ምምሕዳር ከተማ ዝወሃብ ብዛዕባ ዕዳኹም ነጻ ሓገዝ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.achterstand': { m: "ዝተረፈ ክፍሊት (ቅድሚ ሕጂ ክትከፍሎ ዝነበረካ ገንዘብ)", f: "ዝተረፈ ክፍሊት (ቅድሚ ሕጂ ክትከፍልዮ ዝነበረኪ ገንዘብ)", x: "ዝተረፈ ክፍሊት (ቅድሚ ሕጂ ክትከፍልዎ ዝነበረኩም ገንዘብ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.1': "ናይ መወዳእታ መዘኻኸሪ በጺሑኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.2': "ብክፋላት ክኸፍል ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.debthelp.3': "ብዛዕባ ዕዳታተይ ሓገዝ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.q': { m: "ነቲ ሕሳብ ገና ኣይከፈልካዮን።", f: "ነቲ ሕሳብ ገና ኣይከፈልክዮን።", x: "ነቲ ሕሳብ ገና ኣይከፈልኩሞን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.a': "ቅኑዕ እዩ። ውጥን ክፍሊት ክረክብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.taxes': "ግብርን ሓገዛት ገንዘብን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.jaaropgave': { m: "ዓመታዊ ጸብጻብ ደሞዝ (ናይ ምሉእ ዓመት ደሞዝካ ዘርኢ ካብ ኣስራሒኻ ዝመጽእ ወረቐት)", f: "ዓመታዊ ጸብጻብ ደሞዝ (ናይ ምሉእ ዓመት ደሞዝኪ ዘርኢ ካብ ኣስራሒኺ ዝመጽእ ወረቐት)", x: "ዓመታዊ ጸብጻብ ደሞዝ (ናይ ምሉእ ዓመት ደሞዝኩም ዘርኢ ካብ ኣስራሒኹም ዝመጽእ ወረቐት)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.blauweenvelop': "ሰማያዊ ፖስታ (ደብዳቤታት Belastingdienst ብእኡ ይመጹ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.teruggave': { m: "ምምላስ ግብሪ (ዝምለሰልካ ገንዘብ ግብሪ)", f: "ምምላስ ግብሪ (ዝምለሰልኪ ገንዘብ ግብሪ)", x: "ምምላስ ግብሪ (ዝምለሰልኩም ገንዘብ ግብሪ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitstel': { m: "ተወሳኺ ግዜ (ጸኒሕካ ክትገብሮ ይፍቀደልካ)", f: "ተወሳኺ ግዜ (ጸኒሕኪ ክትገብርዮ ይፍቀደልኪ)", x: "ተወሳኺ ግዜ (ጸኒሕኩም ክትገብርዎ ይፍቀደልኩም)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.huurtoeslag': { m: "ሓገዝ ክራይ (ክራይ ክትከፍል ንምሕጋዝ ካብ መንግስቲ ዝወሃብ ገንዘብ)", f: "ሓገዝ ክራይ (ክራይ ክትከፍሊ ንምሕጋዝ ካብ መንግስቲ ዝወሃብ ገንዘብ)", x: "ሓገዝ ክራይ (ክራይ ክትከፍሉ ንምሕጋዝ ካብ መንግስቲ ዝወሃብ ገንዘብ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.belastingtelefoon': "ነጻ መስመር ተሌፎን Belastingdienst", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.1': "ንጸብጻብ ግብሪ ዓመታዊ ጸብጻብ ደሞዘይ የድልየኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.2': "ሕጂ ዝያዳ እረክብ ኣለኹ። ብቕጽበት ክሕብሮ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.taxes.3': "ካብ Belastingdienst ገንዘብ ይምለሰለይ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.q': { m: "ሰማያዊ ፖስታ ተቐሚጡልካ ኣሎ።", f: "ሰማያዊ ፖስታ ተቐሚጡልኪ ኣሎ።", x: "ሰማያዊ ፖስታ ተቐሚጡልኩም ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a': "የቐንየለይ። ብቕጽበት ክኸፍቶ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.kiln': "ምድጃ፡ ብርጭቆን ሴራሚክን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.pers': "መጸቐጢ (ጭቃ ወይ ዱቄት ናብ ቅርጺ ዝጸቕጥ ማሽን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.glazuur': "ግላዙር (ኣብ ሸክላ ወይ ኩባያ ዘሎ፡ ዝበርቕ ከም ብርጭቆ ዝኾነ ቅብኣት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tunneloven': "ምድጃ ቱነል (ነዊሕ ምድጃ፡ እቲ ፍርያት ቀስ ኢሉ ብውሽጡ ይሓልፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scherf': "ስባር (ካብ ዝተሰብረ ብርጭቆ ወይ ሸክላ ዝተረፈ በሊሕ ቁራጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gloeiend': "ፍሕሶ ዝኾነ ውዑይ (ብቐይሕ ክሳብ ዝበርቕ ዝውዒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.armbeschermer': { m: "መከላኸሊ ቅልጽም (ንቕልጽምካ ካብ ምቑራጽ ዝከላኸል እጅጌ)", f: "መከላኸሊ ቅልጽም (ንቕልጽምኪ ካብ ምቑራጽ ዝከላኸል እጅጌ)", x: "መከላኸሊ ቅልጽም (ንቕልጽምኩም ካብ ምቑራጽ ዝከላኸል እጅጌ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.1': "እቲ ሸክላታት ቀስ ኢሎም ብምድጃ ቱነል ይሓልፉ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.2': "ኣብዚ ሸክላ ስንጭሮ ኣሎ። ዘይቅቡል እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.kiln.3': { m: "ኣብ ጥቓ ብርጭቆ መከላኸሊ ቅልጽምካ ኽደን።", f: "ኣብ ጥቓ ብርጭቆ መከላኸሊ ቅልጽምኪ ኽደኒ።", x: "ኣብ ጥቓ ብርጭቆ መከላኸሊ ቅልጽምኩም ኽደኑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.q': "ነቲ ስባራት ብኢደይ ክእክቦ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a': { m: "ኣይፋል። መጥረግን መእከቢ ጎሓፍን ተጠቐም።", f: "ኣይፋል። መጥረግን መእከቢ ጎሓፍን ተጠቐሚ።", x: "ኣይፋል። መጥረግን መእከቢ ጎሓፍን ተጠቐሙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'l.mixlab': "ክፍሊ ምሕዋስን ላቦራቶሪን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.batch': "ባች (ብሓደ ቀመር ሓንሳብ ዝስራሕ ሓደ መጠን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.afwegen': "ምምዛን (ልክዕ ከምቲ ቀመር ዝብሎ መጠን ምምዛን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mengvat': "ታንኪ ምሕዋስ (ኣብ ውሽጡ መሐውሲ ዘለዎ ዓቢ ታንኪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.labjas': "ጋውን ላቦራቶሪ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.laboratorium': "ላቦራቶሪ (ላብ፡ ኣብዚ ነቲ ፍርያት ይፍትንዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.grondstof': "ጥረ ነገር (እቲ ፍርያት ዝስራሓሉ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.1': { m: "ነቲ ጥረ ነገራት ብልክዕ መዝኖም።", f: "ነቲ ጥረ ነገራት ብልክዕ መዝንዮም።", x: "ነቲ ጥረ ነገራት ብልክዕ መዝንዎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.2': "ንላብ ናሙና እወስድ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.mixlab.3': { m: "እዚ ኣየናይ ባች እዩ? ኣብቲ ኤቲኬት ርአ።", f: "እዚ ኣየናይ ባች እዩ? ኣብቲ ኤቲኬት ርኣዪ።", x: "እዚ ኣየናይ ባች እዩ? ኣብቲ ኤቲኬት ርኣዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.q': "እቲ ባች ጸዲቑ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a': "ገና። እቲ ላብ ነቲ ናሙና ይፍትኖ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination': { m: "ብዘይ ፍትሒ ተታሒዝካ? ጌጋኻ ኣይኮነን", f: "ብዘይ ፍትሒ ተታሒዝኪ? ጌጋኺ ኣይኮነን", x: "ብዘይ ፍትሒ ተታሒዝኩም? ጌጋኹም ኣይኮነን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.b': { m: "ኣድልዎ ማለት ብሰንኪ መንነትካ ብዝተፈለየ ወይ ብዝኸፍአ መንገዲ ክትተሓዝ ከለኻ እዩ፡ መበቆልካ፡ ሕብሪ ቆርበትካ፡ ሃይማኖትካ፡ ጾታኻ፡ ዕድመኻ፡ ስንክልና ወይ መን ከም እተፍቅር። ምህሳይ ንኣብነት ዘይተደልየ ምትንካፍ፡ ጾታዊ ዘረባታት፡ ምፍርራሕ ወይ ምጽራፍ እዩ። ክልቲኦም ኣብ ስራሕ ኣይፍቀዱን፡ ፈጺሙ ድማ ጌጋኻ ኣይኮነን። ኣይፋል ክትብል ይፍቀደልካ እዩ፡ ንሓላፊኻ እውን። እንታይ ከም ዘጋጠመ፡ መዓስ፡ መን ከም ዝረኣዮ ድማ ጽሓፍ። ምስ ተቖጻጻሪኻ፡ ወይ ትካልካ እንተ ሃልይዎ ምስ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ተዛረብ። ካብ ስራሕካ ወጻኢ፡ ኣብ ከተማኻ ዘሎ ቤት ጽሕፈት ጸረ ኣድልዎ ብነጻ ይሕግዝ (discriminatie.nl)። College voor de Rechten van de Mens እውን ብነጻ ፍርዲ ክህብ ይኽእል። ዓመጽ ወይ ምፍርራሕ? ናብ ፖሊስ ኪድ። ኣብ ሓደጋ እንተ ሃሊኻ፡ ናብ 112 ደውል። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።", f: "ኣድልዎ ማለት ብሰንኪ መንነትኪ ብዝተፈለየ ወይ ብዝኸፍአ መንገዲ ክትተሓዚ ከለኺ እዩ፡ መበቆልኪ፡ ሕብሪ ቆርበትኪ፡ ሃይማኖትኪ፡ ጾታኺ፡ ዕድመኺ፡ ስንክልና ወይ መን ከም እተፍቅሪ። ምህሳይ ንኣብነት ዘይተደልየ ምትንካፍ፡ ጾታዊ ዘረባታት፡ ምፍርራሕ ወይ ምጽራፍ እዩ። ክልቲኦም ኣብ ስራሕ ኣይፍቀዱን፡ ፈጺሙ ድማ ጌጋኺ ኣይኮነን። ኣይፋል ክትብሊ ይፍቀደልኪ እዩ፡ ንሓላፊኺ እውን። እንታይ ከም ዘጋጠመ፡ መዓስ፡ መን ከም ዝረኣዮ ድማ ጽሓፊ። ምስ ተቖጻጻሪኺ፡ ወይ ትካልኪ እንተ ሃልይዎ ምስ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ተዛረቢ። ካብ ስራሕኪ ወጻኢ፡ ኣብ ከተማኺ ዘሎ ቤት ጽሕፈት ጸረ ኣድልዎ ብነጻ ይሕግዝ (discriminatie.nl)። College voor de Rechten van de Mens እውን ብነጻ ፍርዲ ክህብ ይኽእል። ዓመጽ ወይ ምፍርራሕ? ናብ ፖሊስ ኪዲ። ኣብ ሓደጋ እንተ ሃሊኺ፡ ናብ 112 ደውሊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተቲ።", x: "ኣድልዎ ማለት ብሰንኪ መንነትኩም ብዝተፈለየ ወይ ብዝኸፍአ መንገዲ ክትተሓዙ ከለኹም እዩ፡ መበቆልኩም፡ ሕብሪ ቆርበትኩም፡ ሃይማኖትኩም፡ ጾታኹም፡ ዕድመኹም፡ ስንክልና ወይ መን ከም እተፍቅሩ። ምህሳይ ንኣብነት ዘይተደልየ ምትንካፍ፡ ጾታዊ ዘረባታት፡ ምፍርራሕ ወይ ምጽራፍ እዩ። ክልቲኦም ኣብ ስራሕ ኣይፍቀዱን፡ ፈጺሙ ድማ ጌጋኹም ኣይኮነን። ኣይፋል ክትብሉ ይፍቀደልኩም እዩ፡ ንሓላፊኹም እውን። እንታይ ከም ዘጋጠመ፡ መዓስ፡ መን ከም ዝረኣዮ ድማ ጽሓፉ። ምስ ተቖጻጻሪኹም፡ ወይ ትካልኩም እንተ ሃልይዎ ምስ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ተዛረቡ። ካብ ስራሕኩም ወጻኢ፡ ኣብ ከተማኹም ዘሎ ቤት ጽሕፈት ጸረ ኣድልዎ ብነጻ ይሕግዝ (discriminatie.nl)። College voor de Rechten van de Mens እውን ብነጻ ፍርዲ ክህብ ይኽእል። ዓመጽ ወይ ምፍርራሕ? ናብ ፖሊስ ኪዱ። ኣብ ሓደጋ እንተ ሃሊኹም፡ ናብ 112 ደውሉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.p': "ገለ ነገር ክሕብር እደሊ። ብምስጢር ምሳኹም ክዛረብ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.s': { m: "ሓደ ብጻይ ስራሕ ብሰንኪ መበቆልካ ብተደጋጋሚ ይጸርፈካ። ካልኦት ይስሕቑ። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ብሰንኪ መበቆልኪ ብተደጋጋሚ ይጸርፈኪ። ካልኦት ይስሕቑ። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ብሰንኪ መበቆልኩም ብተደጋጋሚ ይጸርፈኩም። ካልኦት ይስሕቑ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o1': { m: "ጽሓፎ፡ ንዝእመን ሰብ ድማ ንገር።", f: "ጽሓፍዮ፡ ንዝእመን ሰብ ድማ ንገሪ።", x: "ጽሓፍዎ፡ ንዝእመን ሰብ ድማ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o2': { m: "ገለ ኣይትበል፡ ናይ ስራሕ ክፋል እዩ።", f: "ገለ ኣይትበሊ፡ ናይ ስራሕ ክፋል እዩ።", x: "ገለ ኣይትበሉ፡ ናይ ስራሕ ክፋል እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.o3': { m: "ስራሕ ኣቋርጽ፡ ስለምንታይ ከም ዝኾነ ድማ ንዝኾነ ሰብ ኣይትንገር።", f: "ስራሕ ኣቋርጺ፡ ስለምንታይ ከም ዝኾነ ድማ ንዝኾነ ሰብ ኣይትንገሪ።", x: "ስራሕ ኣቋርጹ፡ ስለምንታይ ከም ዝኾነ ድማ ንዝኾነ ሰብ ኣይትንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.w': { m: "ብሰንኪ መበቆልካ ምጽራፍ ኣድልዎ እዩ፡ ኣይፍቀድን ድማ። ጽሒፍካ ብዛዕባኡ ምስ እትዛረብ፡ ሓደ ሰብ ደው ንኽብል ክሕግዘካ ይኽእል።", f: "ብሰንኪ መበቆልኪ ምጽራፍ ኣድልዎ እዩ፡ ኣይፍቀድን ድማ። ጽሒፍኪ ብዛዕባኡ ምስ እትዛረቢ፡ ሓደ ሰብ ደው ንኽብል ክሕግዘኪ ይኽእል።", x: "ብሰንኪ መበቆልኩም ምጽራፍ ኣድልዎ እዩ፡ ኣይፍቀድን ድማ። ጽሒፍኩም ብዛዕባኡ ምስ እትዛረቡ፡ ሓደ ሰብ ደው ንኽብል ክሕግዘኩም ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union': "ብሓባር ዝያዳ ሓያላት ኢኹም", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.b': { m: "ማሕበር ሰራሕተኛታት (vakbond)፡ ንኣብነት FNV ወይ CNV፡ ንሰራሕተኛታት ይጣበቐሎም። ምስ ኣስራሕቲ ብዛዕባ ደሞዝን ስራሕን ስምምዓት ይገብር፡ እዚ ድማ ሓባራዊ ስምምዕ ስራሕ (cao) እዩ። ብዙሓት cao ንኹሎም ኣብ ሓደ ዘርፊ ዝሰርሑ ይምልከቱ፡ ኣባል እንተ ዘይኮንካ እውን። ኣባላት ኣብ ነፍሲ ወከፍ ወርሒ ክፍሊት ኣባልነት (contributie) ይኸፍሉ፡ ምኽርን ሓገዝን ድማ ይረኽቡ፡ ንኣብነት ብዛዕባ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ጸገም። ብግዜ ጽንበር፡ መብዛሕትኡ ግዜ እቲ ማሕበር ዝሕግዝ ድሕሪ ምጽንባርካ ኣብ ዝጀመረ ጸገም ጥራይ እዩ። ምጽንባር ናይ ገዛእ ርእስኻ ምርጫ እዩ፡ ኣስራሒኻ ድማ ብሰንኩ ክቐጽዓካ ኣይፍቀደሉን። 50 ወይ ልዕሊኡ ሰራሕተኛታት ዘለዉዎ ትካል ባይቶ ሰራሕተኛታት (ondernemingsraad, OR) ክህልዎ ኣለዎ፡ ብሰራሕተኛታት ዝተመርጹ መሳርሕቲ። እቲ OR ምስ ዳይረክተር ብዛዕባ ንኣብነት ሰዓታት ስራሕን ድሕንነትን ይዛረብ። ዝነኣሰ ትካል ወከልቲ ሰራሕተኛታት (personeelsvertegenwoordiging) ክህልዎ ይኽእል። ሕቶ ኣለካ? ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ማሕበር ሰራሕተኛታት (vakbond)፡ ንኣብነት FNV ወይ CNV፡ ንሰራሕተኛታት ይጣበቐሎም። ምስ ኣስራሕቲ ብዛዕባ ደሞዝን ስራሕን ስምምዓት ይገብር፡ እዚ ድማ ሓባራዊ ስምምዕ ስራሕ (cao) እዩ። ብዙሓት cao ንኹሎም ኣብ ሓደ ዘርፊ ዝሰርሑ ይምልከቱ፡ ኣባል እንተ ዘይኮንኪ እውን። ኣባላት ኣብ ነፍሲ ወከፍ ወርሒ ክፍሊት ኣባልነት (contributie) ይኸፍሉ፡ ምኽርን ሓገዝን ድማ ይረኽቡ፡ ንኣብነት ብዛዕባ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ጸገም። ብግዜ ጽንበሪ፡ መብዛሕትኡ ግዜ እቲ ማሕበር ዝሕግዝ ድሕሪ ምጽንባርኪ ኣብ ዝጀመረ ጸገም ጥራይ እዩ። ምጽንባር ናይ ገዛእ ርእስኺ ምርጫ እዩ፡ ኣስራሒኺ ድማ ብሰንኩ ክቐጽዓኪ ኣይፍቀደሉን። 50 ወይ ልዕሊኡ ሰራሕተኛታት ዘለዉዎ ትካል ባይቶ ሰራሕተኛታት (ondernemingsraad, OR) ክህልዎ ኣለዎ፡ ብሰራሕተኛታት ዝተመርጹ መሳርሕቲ። እቲ OR ምስ ዳይረክተር ብዛዕባ ንኣብነት ሰዓታት ስራሕን ድሕንነትን ይዛረብ። ዝነኣሰ ትካል ወከልቲ ሰራሕተኛታት (personeelsvertegenwoordiging) ክህልዎ ይኽእል። ሕቶ ኣለኪ? ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ማሕበር ሰራሕተኛታት (vakbond)፡ ንኣብነት FNV ወይ CNV፡ ንሰራሕተኛታት ይጣበቐሎም። ምስ ኣስራሕቲ ብዛዕባ ደሞዝን ስራሕን ስምምዓት ይገብር፡ እዚ ድማ ሓባራዊ ስምምዕ ስራሕ (cao) እዩ። ብዙሓት cao ንኹሎም ኣብ ሓደ ዘርፊ ዝሰርሑ ይምልከቱ፡ ኣባል እንተ ዘይኮንኩም እውን። ኣባላት ኣብ ነፍሲ ወከፍ ወርሒ ክፍሊት ኣባልነት (contributie) ይኸፍሉ፡ ምኽርን ሓገዝን ድማ ይረኽቡ፡ ንኣብነት ብዛዕባ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ጸገም። ብግዜ ጽንበሩ፡ መብዛሕትኡ ግዜ እቲ ማሕበር ዝሕግዝ ድሕሪ ምጽንባርኩም ኣብ ዝጀመረ ጸገም ጥራይ እዩ። ምጽንባር ናይ ገዛእ ርእስኹም ምርጫ እዩ፡ ኣስራሒኹም ድማ ብሰንኩ ክቐጽዓኩም ኣይፍቀደሉን። 50 ወይ ልዕሊኡ ሰራሕተኛታት ዘለዉዎ ትካል ባይቶ ሰራሕተኛታት (ondernemingsraad, OR) ክህልዎ ኣለዎ፡ ብሰራሕተኛታት ዝተመርጹ መሳርሕቲ። እቲ OR ምስ ዳይረክተር ብዛዕባ ንኣብነት ሰዓታት ስራሕን ድሕንነትን ይዛረብ። ዝነኣሰ ትካል ወከልቲ ሰራሕተኛታት (personeelsvertegenwoordiging) ክህልዎ ይኽእል። ሕቶ ኣለኩም? ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.p': "ብዛዕባ እቲ ሓድሽ መደብ ስራሕ ሕቶ ኣለኒ። እቲ OR ገለ ክገብረሉ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.s': { m: "ትካልካ ብዙሕ ዝያዳ ናይ ምሸት ፈረቓታት ይሓስብ ኣሎ። ብዙሓት መሳርሕቲ ዕጉባት ኣይኮኑን። እንታይ ክትገብር ትኽእል?", f: "ትካልኪ ብዙሕ ዝያዳ ናይ ምሸት ፈረቓታት ይሓስብ ኣሎ። ብዙሓት መሳርሕቲ ዕጉባት ኣይኮኑን። እንታይ ክትገብሪ ትኽእሊ?", x: "ትካልኩም ብዙሕ ዝያዳ ናይ ምሸት ፈረቓታት ይሓስብ ኣሎ። ብዙሓት መሳርሕቲ ዕጉባት ኣይኮኑን። እንታይ ክትገብሩ ትኽእሉ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o1': { m: "ብዛዕባኡ ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተት።", f: "ብዛዕባኡ ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተቲ።", x: "ብዛዕባኡ ኣብ OR ንዘሎ ብጻይ ስራሕ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o2': { m: "ምሸት ምምጻእ ኣቋርጽ።", f: "ምሸት ምምጻእ ኣቋርጺ።", x: "ምሸት ምምጻእ ኣቋርጹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.o3': { m: "ገለ ኣይትበል፡ ዝኾነ ነገር ክቕየር ኣይክእልን።", f: "ገለ ኣይትበሊ፡ ዝኾነ ነገር ክቕየር ኣይክእልን።", x: "ገለ ኣይትበሉ፡ ዝኾነ ነገር ክቕየር ኣይክእልን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.w': "እቲ OR ኣብ ሕግታት ሰዓታት ስራሕ ድምጺ ኣለዎ። ብዛዕባኦም ምስ ዳይረክተር፡ ንኹሎም ሰራሕተኛታት ብሓባር፡ ክዛረብ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp': { m: "ነፍሲ ወከፍ ደብዳቤ ክፈት፡ ብኣጋ ድማ ሓገዝ ሕተት", f: "ነፍሲ ወከፍ ደብዳቤ ክፈቲ፡ ብኣጋ ድማ ሓገዝ ሕተቲ", x: "ነፍሲ ወከፍ ደብዳቤ ክፈቱ፡ ብኣጋ ድማ ሓገዝ ሕተቱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.b': { m: "ሓደ ሕሳብ ብግዜኡ ኣይከፈልካን ዲኻ? ሽዑ ቅድም መዘኻኸሪ (herinnering)፡ ደሓር ድማ ናይ መወዳእታ መዘኻኸሪ (aanmaning) ይመጸካ። ሓደ ትካል በዚ ምኽንያት ተወሳኺ ወጻኢታት ከኽፍለካ ቅድሚ ምፍቃዱ፡ ንምኽፋል 14 መዓልቲ ክህበካ ኣለዎ። ስለዚ ፈሪሕካ እንተ ኾንካ እውን፡ ነፍሲ ወከፍ ደብዳቤ ክፈት። ኩሉ ሓንሳብ ክትከፍል ኣይትኽእልን ዲኻ? ደውል ወይ ጽሓፍ፡ ውጥን ክፍሊት (betalingsregeling) ድማ ሕተት። Deurwaarder (ኣኻቢ ዕዳ ቤት ፍርዲ) ዕዳታት ዘኻክብ ወግዓዊ ሰራሕተኛ እዩ፡ መብዛሕትኡ ግዜ ድሕሪ ዳኛ ምውሳኑ። ንኣብነት ካብ ደሞዝካ ክፋል ክወስድ ይኽእል፡ ግን ወትሩ ንናብራኻ ዝኣክል ክገድፈልካ ኣለዎ። ዕዳ ኣለካ? ገና ንኣሽቱ ከለዉ፡ ብኣጋ ሓገዝ ሕተት። እቲ gemeente ነጻ ሓገዝ ዕዳ (schuldhulp) ይህብ። ኣብ geldfit.nl ነጻ ፈተና ክትገብር ትኽእል ኢኻ፡ ኣብ ጥቓኻ ዘሎ ሓገዝ ድማ ክትረክብ ትኽእል ኢኻ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ሓደ ሕሳብ ብግዜኡ ኣይከፈልክን ዲኺ? ሽዑ ቅድም መዘኻኸሪ (herinnering)፡ ደሓር ድማ ናይ መወዳእታ መዘኻኸሪ (aanmaning) ይመጸኪ። ሓደ ትካል በዚ ምኽንያት ተወሳኺ ወጻኢታት ከኽፍለኪ ቅድሚ ምፍቃዱ፡ ንምኽፋል 14 መዓልቲ ክህበኪ ኣለዎ። ስለዚ ፈሪሕኪ እንተ ኾንኪ እውን፡ ነፍሲ ወከፍ ደብዳቤ ክፈቲ። ኩሉ ሓንሳብ ክትከፍሊ ኣይትኽእሊን ዲኺ? ደውሊ ወይ ጽሓፊ፡ ውጥን ክፍሊት (betalingsregeling) ድማ ሕተቲ። Deurwaarder (ኣኻቢ ዕዳ ቤት ፍርዲ) ዕዳታት ዘኻክብ ወግዓዊ ሰራሕተኛ እዩ፡ መብዛሕትኡ ግዜ ድሕሪ ዳኛ ምውሳኑ። ንኣብነት ካብ ደሞዝኪ ክፋል ክወስድ ይኽእል፡ ግን ወትሩ ንናብራኺ ዝኣክል ክገድፈልኪ ኣለዎ። ዕዳ ኣለኪ? ገና ንኣሽቱ ከለዉ፡ ብኣጋ ሓገዝ ሕተቲ። እቲ gemeente ነጻ ሓገዝ ዕዳ (schuldhulp) ይህብ። ኣብ geldfit.nl ነጻ ፈተና ክትገብሪ ትኽእሊ ኢኺ፡ ኣብ ጥቓኺ ዘሎ ሓገዝ ድማ ክትረኽቢ ትኽእሊ ኢኺ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ሓደ ሕሳብ ብግዜኡ ኣይከፈልኩምን ዲኹም? ሽዑ ቅድም መዘኻኸሪ (herinnering)፡ ደሓር ድማ ናይ መወዳእታ መዘኻኸሪ (aanmaning) ይመጸኩም። ሓደ ትካል በዚ ምኽንያት ተወሳኺ ወጻኢታት ከኽፍለኩም ቅድሚ ምፍቃዱ፡ ንምኽፋል 14 መዓልቲ ክህበኩም ኣለዎ። ስለዚ ፈሪሕኩም እንተ ኾንኩም እውን፡ ነፍሲ ወከፍ ደብዳቤ ክፈቱ። ኩሉ ሓንሳብ ክትከፍሉ ኣይትኽእሉን ዲኹም? ደውሉ ወይ ጽሓፉ፡ ውጥን ክፍሊት (betalingsregeling) ድማ ሕተቱ። Deurwaarder (ኣኻቢ ዕዳ ቤት ፍርዲ) ዕዳታት ዘኻክብ ወግዓዊ ሰራሕተኛ እዩ፡ መብዛሕትኡ ግዜ ድሕሪ ዳኛ ምውሳኑ። ንኣብነት ካብ ደሞዝኩም ክፋል ክወስድ ይኽእል፡ ግን ወትሩ ንናብራኹም ዝኣክል ክገድፈልኩም ኣለዎ። ዕዳ ኣለኩም? ገና ንኣሽቱ ከለዉ፡ ብኣጋ ሓገዝ ሕተቱ። እቲ gemeente ነጻ ሓገዝ ዕዳ (schuldhulp) ይህብ። ኣብ geldfit.nl ነጻ ፈተና ክትገብሩ ትኽእሉ ኢኹም፡ ኣብ ጥቓኹም ዘሎ ሓገዝ ድማ ክትረኽቡ ትኽእሉ ኢኹም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.p': "ኩሉ ሓንሳብ ክኸፍል ኣይክእልን እየ። ብክፋላት ክኸፍል ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.s': { m: "ንሕሳብ ተሌፎንካ ናይ መወዳእታ መዘኻኸሪ ይመጸካ። ኣብዚ ወርሒ እቲ ገንዘብ የብልካን። እንታይ ትገብር?", f: "ንሕሳብ ተሌፎንኪ ናይ መወዳእታ መዘኻኸሪ ይመጸኪ። ኣብዚ ወርሒ እቲ ገንዘብ የብልክን። እንታይ ትገብሪ?", x: "ንሕሳብ ተሌፎንኩም ናይ መወዳእታ መዘኻኸሪ ይመጸኩም። ኣብዚ ወርሒ እቲ ገንዘብ የብልኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o1': { m: "ናብቲ ትካል ደውል፡ ውጥን ክፍሊት ድማ ሕተት።", f: "ናብቲ ትካል ደውሊ፡ ውጥን ክፍሊት ድማ ሕተቲ።", x: "ናብቲ ትካል ደውሉ፡ ውጥን ክፍሊት ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o2': { m: "ነቲ ደብዳቤ ኣልግሶ እሞ ተጸበ።", f: "ነቲ ደብዳቤ ኣልግስዮ እሞ ተጸበዪ።", x: "ነቲ ደብዳቤ ኣልግስዎ እሞ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.o3': { m: "ብ«ሕጂ ግዛእ፡ ጸኒሕካ ክፈል» ቀልጢፍካ ገንዘብ ልቃሕ።", f: "ብ«ሕጂ ግዛእ፡ ጸኒሕካ ክፈል» ቀልጢፍኪ ገንዘብ ልቐሒ።", x: "ብ«ሕጂ ግዛእ፡ ጸኒሕካ ክፈል» ቀልጢፍኩም ገንዘብ ልቐሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.debthelp.w': { m: "ብግዜ ምስ እትነግር፡ እቲ ትካል መብዛሕትኡ ግዜ ብንኣሽቱ ክፍሊታት ክሰማማዕ ይኽእል። ዘልገስካዮ ደብዳቤ ኣይጠፍእን እዩ፡ እቲ ወጻኢታት ጥራይ እዩ ዝውስኽ።", f: "ብግዜ ምስ እትነግሪ፡ እቲ ትካል መብዛሕትኡ ግዜ ብንኣሽቱ ክፍሊታት ክሰማማዕ ይኽእል። ዘልገስክዮ ደብዳቤ ኣይጠፍእን እዩ፡ እቲ ወጻኢታት ጥራይ እዩ ዝውስኽ።", x: "ብግዜ ምስ እትነግሩ፡ እቲ ትካል መብዛሕትኡ ግዜ ብንኣሽቱ ክፍሊታት ክሰማማዕ ይኽእል። ዘልገስኩሞ ደብዳቤ ኣይጠፍእን እዩ፡ እቲ ወጻኢታት ጥራይ እዩ ዝውስኽ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes': { m: "ጸብጻብ ግብሪኻን ሓገዛት ገንዘብካን", f: "ጸብጻብ ግብሪኺን ሓገዛት ገንዘብኪን", x: "ጸብጻብ ግብሪኹምን ሓገዛት ገንዘብኩምን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.b': { m: "ጸብጻብ ግብሪ (aangifte) ናይ ዝሓለፈ ዓመት ቅድሚ 1 ግንቦት ክግበር ኣለዎ። ክትገብሮ ዝሓትት ደብዳቤ በጺሑካ ድዩ? ሽዑ ክትገብሮ ኣለካ። ሓደ ሓደ ግዜ ገንዘብ ይምለሰልካ። ካብ ኣስራሒኻ ዓመታዊ ጸብጻብ ደሞዝ (jaaropgave) የድልየካ። ግዜ የብልካን? ተወሳኺ ግዜ (uitstel) ክትሓትት ትኽእል ኢኻ። ሓገዛት ገንዘብ (toeslagen)፡ ከም zorgtoeslagን huurtoeslagን፡ ቅድመ ክፍሊት እዮም፡ ኣብዚ ዓመት ኣብ እትረኽቦ ኣታዊ ይምርኮሱ። ዝያዳ ትረክብ ዲኻ፡ ወይስ ካልእ ነገር ተቐይሩ ድዩ? ብቕጽበት ኣብ Mijn toeslagen ሓብር። እንተ ዘይገበርካዮ፡ ደሓር ብዙሕ ገንዘብ ክትመልስ ክኸውን ይኽእል። ክትመልስ ኣለካ ድዩ? ውጥን ክፍሊት ክትሓትት ትኽእል ኢኻ። ነጻ ሓገዝ፡ BelastingTelefoon፡ ቤት ጽሕፈት Belastingdienst (ቅድም ቆጸራ ሓዝ) ወይ ቤተ መጻሕፍቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ጸብጻብ ግብሪ (aangifte) ናይ ዝሓለፈ ዓመት ቅድሚ 1 ግንቦት ክግበር ኣለዎ። ክትገብርዮ ዝሓትት ደብዳቤ በጺሑኪ ድዩ? ሽዑ ክትገብርዮ ኣለኪ። ሓደ ሓደ ግዜ ገንዘብ ይምለሰልኪ። ካብ ኣስራሒኺ ዓመታዊ ጸብጻብ ደሞዝ (jaaropgave) የድልየኪ። ግዜ የብልክን? ተወሳኺ ግዜ (uitstel) ክትሓትቲ ትኽእሊ ኢኺ። ሓገዛት ገንዘብ (toeslagen)፡ ከም zorgtoeslagን huurtoeslagን፡ ቅድመ ክፍሊት እዮም፡ ኣብዚ ዓመት ኣብ እትረኽብዮ ኣታዊ ይምርኮሱ። ዝያዳ ትረኽቢ ዲኺ፡ ወይስ ካልእ ነገር ተቐይሩ ድዩ? ብቕጽበት ኣብ Mijn toeslagen ሓብሪ። እንተ ዘይገበርክዮ፡ ደሓር ብዙሕ ገንዘብ ክትመልሲ ክኸውን ይኽእል። ክትመልሲ ኣለኪ ድዩ? ውጥን ክፍሊት ክትሓትቲ ትኽእሊ ኢኺ። ነጻ ሓገዝ፡ BelastingTelefoon፡ ቤት ጽሕፈት Belastingdienst (ቅድም ቆጸራ ሓዚ) ወይ ቤተ መጻሕፍቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ጸብጻብ ግብሪ (aangifte) ናይ ዝሓለፈ ዓመት ቅድሚ 1 ግንቦት ክግበር ኣለዎ። ክትገብርዎ ዝሓትት ደብዳቤ በጺሑኩም ድዩ? ሽዑ ክትገብርዎ ኣለኩም። ሓደ ሓደ ግዜ ገንዘብ ይምለሰልኩም። ካብ ኣስራሒኹም ዓመታዊ ጸብጻብ ደሞዝ (jaaropgave) የድልየኩም። ግዜ የብልኩምን? ተወሳኺ ግዜ (uitstel) ክትሓትቱ ትኽእሉ ኢኹም። ሓገዛት ገንዘብ (toeslagen)፡ ከም zorgtoeslagን huurtoeslagን፡ ቅድመ ክፍሊት እዮም፡ ኣብዚ ዓመት ኣብ እትረኽብዎ ኣታዊ ይምርኮሱ። ዝያዳ ትረኽቡ ዲኹም፡ ወይስ ካልእ ነገር ተቐይሩ ድዩ? ብቕጽበት ኣብ Mijn toeslagen ሓብሩ። እንተ ዘይገበርኩሞ፡ ደሓር ብዙሕ ገንዘብ ክትመልሱ ክኸውን ይኽእል። ክትመልሱ ኣለኩም ድዩ? ውጥን ክፍሊት ክትሓትቱ ትኽእሉ ኢኹም። ነጻ ሓገዝ፡ BelastingTelefoon፡ ቤት ጽሕፈት Belastingdienst (ቅድም ቆጸራ ሓዙ) ወይ ቤተ መጻሕፍቲ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.p': "ኣታወይ ተቐይሩ። ከመይ ገይረ እሕብሮ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.s': { m: "ሓድሽ ስራሕ ትረክብ፡ ኣብ ነፍሲ ወከፍ ወርሒ ድማ ዝያዳ ትረክብ። huurtoeslag ትቕበል። እንታይ ትገብር?", f: "ሓድሽ ስራሕ ትረኽቢ፡ ኣብ ነፍሲ ወከፍ ወርሒ ድማ ዝያዳ ትረኽቢ። huurtoeslag ትቕበሊ። እንታይ ትገብሪ?", x: "ሓድሽ ስራሕ ትረኽቡ፡ ኣብ ነፍሲ ወከፍ ወርሒ ድማ ዝያዳ ትረኽቡ። huurtoeslag ትቕበሉ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o1': { m: "ሓድሽ ኣታዊኻ ኣብ Mijn toeslagen ሓብር።", f: "ሓድሽ ኣታዊኺ ኣብ Mijn toeslagen ሓብሪ።", x: "ሓድሽ ኣታዊኹም ኣብ Mijn toeslagen ሓብሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o2': { m: "Belastingdienst ክሳብ ዝሓተካ ተጸበ።", f: "Belastingdienst ክሳብ ዝሓተኪ ተጸበዪ።", x: "Belastingdienst ክሳብ ዝሓተኩም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.o3': { m: "ክራይካ ምኽፋል ኣቋርጽ።", f: "ክራይኪ ምኽፋል ኣቋርጺ።", x: "ክራይኩም ምኽፋል ኣቋርጹ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.w': { m: "ሓገዝ ገንዘብካ ኣብ እትረኽቦ ኣታዊ ይምርኮስ። ነቲ ለውጢ ብግዜ ምስ እትሕብር፡ ትኽክለኛ መጠን ትረክብ፡ ደሓር ድማ ብዙሕ ክትመልስ ኣየድልየካን።", f: "ሓገዝ ገንዘብኪ ኣብ እትረኽብዮ ኣታዊ ይምርኮስ። ነቲ ለውጢ ብግዜ ምስ እትሕብሪ፡ ትኽክለኛ መጠን ትረኽቢ፡ ደሓር ድማ ብዙሕ ክትመልሲ ኣየድልየክን።", x: "ሓገዝ ገንዘብኩም ኣብ እትረኽብዎ ኣታዊ ይምርኮስ። ነቲ ለውጢ ብግዜ ምስ እትሕብሩ፡ ትኽክለኛ መጠን ትረኽቡ፡ ደሓር ድማ ብዙሕ ክትመልሱ ኣየድልየኩምን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln': "በሊሕ፡ ውዑይን ከቢድን", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.b': { m: "ኣብ ፋብሪካ ሸክላ ወይ ብርጭቆ፡ እቲ ፍርያት ናብ ቅርጺ ይጽቀጥ፡ ግላዙር ይግበረሉ፡ ቀስ ኢሉ ድማ ብነዊሕ ምድጃ ይሓልፍ። ድሕሪ ምድጃ ክዝሕል ኣለዎ፡ ውዑይ ከሎ ኣይትተንክፎ፡ ወይ ሙቐት ዝጻወር ጓንቲ ኽደን። ብርጭቆን ዝተሰብረ ሸክላን ኣዝዮም በሊሓት እዮም። ምቑራጽ ዝጻወር ጓንቲ፡ መከላኸሊ ቅልጽምን ናይ ድሕንነት መነጽርን ኽደን። ዝወድቕ ሰሌዳ ብርጭቆ ፈጺምካ ኣይትቕለብ፡ ንድሕሪት ተመለስ። ስባራት ብመጥረግን መእከቢ ጎሓፍን ኣኻኽቦም፡ ፈጺምካ ብኢድካ ኣይኮነን፡ ኣብቲ ትኽክለኛ ሳንዱቕ ጎሓፍ ድማ ኣእትዎም። ግላዙርን ሓመድን ጎዳኢ ነገራት ክህልዎም ይኽእል፡ ቅድሚ ምብላዕ ወይ ምስታይ ኣእዳውካ ሕጸብ። ኣብ መጸቐጢ፡ እናሰርሐ ከሎ ፈጺምካ ኢድካ ኣይተእቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ፋብሪካ ሸክላ ወይ ብርጭቆ፡ እቲ ፍርያት ናብ ቅርጺ ይጽቀጥ፡ ግላዙር ይግበረሉ፡ ቀስ ኢሉ ድማ ብነዊሕ ምድጃ ይሓልፍ። ድሕሪ ምድጃ ክዝሕል ኣለዎ፡ ውዑይ ከሎ ኣይትተንክፍዮ፡ ወይ ሙቐት ዝጻወር ጓንቲ ኽደኒ። ብርጭቆን ዝተሰብረ ሸክላን ኣዝዮም በሊሓት እዮም። ምቑራጽ ዝጻወር ጓንቲ፡ መከላኸሊ ቅልጽምን ናይ ድሕንነት መነጽርን ኽደኒ። ዝወድቕ ሰሌዳ ብርጭቆ ፈጺምኪ ኣይትቕለቢ፡ ንድሕሪት ተመለሲ። ስባራት ብመጥረግን መእከቢ ጎሓፍን ኣኻኽብዮም፡ ፈጺምኪ ብኢድኪ ኣይኮነን፡ ኣብቲ ትኽክለኛ ሳንዱቕ ጎሓፍ ድማ ኣእትውዮም። ግላዙርን ሓመድን ጎዳኢ ነገራት ክህልዎም ይኽእል፡ ቅድሚ ምብላዕ ወይ ምስታይ ኣእዳውኪ ሕጸቢ። ኣብ መጸቐጢ፡ እናሰርሐ ከሎ ፈጺምኪ ኢድኪ ኣይተእትዊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ፋብሪካ ሸክላ ወይ ብርጭቆ፡ እቲ ፍርያት ናብ ቅርጺ ይጽቀጥ፡ ግላዙር ይግበረሉ፡ ቀስ ኢሉ ድማ ብነዊሕ ምድጃ ይሓልፍ። ድሕሪ ምድጃ ክዝሕል ኣለዎ፡ ውዑይ ከሎ ኣይትተንክፍዎ፡ ወይ ሙቐት ዝጻወር ጓንቲ ኽደኑ። ብርጭቆን ዝተሰብረ ሸክላን ኣዝዮም በሊሓት እዮም። ምቑራጽ ዝጻወር ጓንቲ፡ መከላኸሊ ቅልጽምን ናይ ድሕንነት መነጽርን ኽደኑ። ዝወድቕ ሰሌዳ ብርጭቆ ፈጺምኩም ኣይትቕለቡ፡ ንድሕሪት ተመለሱ። ስባራት ብመጥረግን መእከቢ ጎሓፍን ኣኻኽብዎም፡ ፈጺምኩም ብኢድኩም ኣይኮነን፡ ኣብቲ ትኽክለኛ ሳንዱቕ ጎሓፍ ድማ ኣእትውዎም። ግላዙርን ሓመድን ጎዳኢ ነገራት ክህልዎም ይኽእል፡ ቅድሚ ምብላዕ ወይ ምስታይ ኣእዳውኩም ሕጸቡ። ኣብ መጸቐጢ፡ እናሰርሐ ከሎ ፈጺምኩም ኢድኩም ኣይተእትዉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.kiln.p': "ተጠንቀቑ፡ ስባራት! መጥረግን መእከቢ ጎሓፍን ከምጽእ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.s': { m: "ሰሌዳ ብርጭቆ ካብቲ መደርደሪ ሸሊቱ ክወድቕ ይጅምር። እንታይ ትገብር?", f: "ሰሌዳ ብርጭቆ ካብቲ መደርደሪ ሸሊቱ ክወድቕ ይጅምር። እንታይ ትገብሪ?", x: "ሰሌዳ ብርጭቆ ካብቲ መደርደሪ ሸሊቱ ክወድቕ ይጅምር። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o1': { m: "ንድሕሪት ተመለስ፡ ክወድቕ ድማ ግደፎ።", f: "ንድሕሪት ተመለሲ፡ ክወድቕ ድማ ግደፍዮ።", x: "ንድሕሪት ተመለሱ፡ ክወድቕ ድማ ግደፍዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o2': { m: "ብኣእዳውካ ቅለቦ።", f: "ብኣእዳውኪ ቅለብዮ።", x: "ብኣእዳውኩም ቅለብዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.o3': { m: "ብእግርኻ ዓግቶ።", f: "ብእግርኺ ዓግትዮ።", x: "ብእግርኹም ዓግትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.w': "ዝወድቕ ሰሌዳ፡ ብጓንቲ እውን ሓሊፉ፡ ኣዝዩ ዓሚቑ ክቖርጽ ይኽእል። ዝተሰብረ ሰሌዳ ገንዘብ ጥራይ እዩ ዘኽስር።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab': { m: "ነቲ ቀመር ብልክዕ ስዓቦ", f: "ነቲ ቀመር ብልክዕ ስዓብዮ", x: "ነቲ ቀመር ብልክዕ ስዓብዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.b': { m: "ኣብ ክፍሊ ምሕዋስ ብቀመር ባች ትሰርሕ፡ ኣየኖት ጥረ ነገራት፡ ክንደይ፡ ብኣየናይ ስርዓት ድማ። ኩሉ ብልክዕ መዝኖ፡ ዝወሰኽካዮ ድማ ምስ ቁጽሪ ባች ጽሓፍ። ርግጸኛ ኣይኮንካን? ሕተት፡ ኣይትገምት። በርሚል ወይ ጆንያ ቅድሚ ምጥቃምካ፡ ነቲ ኤቲኬት ኣንብቦ፡ ኣብ ውሽጡ ዘሎ፡ ቁጽሪ ባችን ምልክታት ሓደጋን። ዘይምልከቶ ነገር ናብ በርሚል ወይ ጆንያ ፈጺምካ ኣይተእቱ። ንናሙና፡ ጽሩይ ማንካን ጽሩይ ሳጹንን ተጠቐም፡ ብቕጽበት ድማ ኤቲኬት ለጥፈሉ። ዱቄትን ህፋውን ጎዳኢ ክኾኑ ይኽእሉ፡ ነቲ መምጠጢ ተጠቐም፡ ዘድሊ ድማ ኽደን፡ ከም ጋውን ላቦራቶሪ፡ መነጽር፡ ጓንቲ ወይ ማስክ። ኣብ መግቢ እውን መሸፈኒ ጸጉሪ ትኽደን፡ ኣእዳውካ ድማ ብተደጋጋሚ ትሓጽብ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ክፍሊ ምሕዋስ ብቀመር ባች ትሰርሒ፡ ኣየኖት ጥረ ነገራት፡ ክንደይ፡ ብኣየናይ ስርዓት ድማ። ኩሉ ብልክዕ መዝንዮ፡ ዝወሰኽክዮ ድማ ምስ ቁጽሪ ባች ጽሓፊ። ርግጸኛ ኣይኮንክን? ሕተቲ፡ ኣይትገምቲ። በርሚል ወይ ጆንያ ቅድሚ ምጥቃምኪ፡ ነቲ ኤቲኬት ኣንብብዮ፡ ኣብ ውሽጡ ዘሎ፡ ቁጽሪ ባችን ምልክታት ሓደጋን። ዘይምልከቶ ነገር ናብ በርሚል ወይ ጆንያ ፈጺምኪ ኣይተእትዊ። ንናሙና፡ ጽሩይ ማንካን ጽሩይ ሳጹንን ተጠቐሚ፡ ብቕጽበት ድማ ኤቲኬት ለጥፍሉ። ዱቄትን ህፋውን ጎዳኢ ክኾኑ ይኽእሉ፡ ነቲ መምጠጢ ተጠቐሚ፡ ዘድሊ ድማ ኽደኒ፡ ከም ጋውን ላቦራቶሪ፡ መነጽር፡ ጓንቲ ወይ ማስክ። ኣብ መግቢ እውን መሸፈኒ ጸጉሪ ትኽደኒ፡ ኣእዳውኪ ድማ ብተደጋጋሚ ትሓጽቢ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ክፍሊ ምሕዋስ ብቀመር ባች ትሰርሑ፡ ኣየኖት ጥረ ነገራት፡ ክንደይ፡ ብኣየናይ ስርዓት ድማ። ኩሉ ብልክዕ መዝንዎ፡ ዝወሰኽኩሞ ድማ ምስ ቁጽሪ ባች ጽሓፉ። ርግጸኛ ኣይኮንኩምን? ሕተቱ፡ ኣይትገምቱ። በርሚል ወይ ጆንያ ቅድሚ ምጥቃምኩም፡ ነቲ ኤቲኬት ኣንብብዎ፡ ኣብ ውሽጡ ዘሎ፡ ቁጽሪ ባችን ምልክታት ሓደጋን። ዘይምልከቶ ነገር ናብ በርሚል ወይ ጆንያ ፈጺምኩም ኣይተእትዉ። ንናሙና፡ ጽሩይ ማንካን ጽሩይ ሳጹንን ተጠቐሙ፡ ብቕጽበት ድማ ኤቲኬት ለጥፉሉ። ዱቄትን ህፋውን ጎዳኢ ክኾኑ ይኽእሉ፡ ነቲ መምጠጢ ተጠቐሙ፡ ዘድሊ ድማ ኽደኑ፡ ከም ጋውን ላቦራቶሪ፡ መነጽር፡ ጓንቲ ወይ ማስክ። ኣብ መግቢ እውን መሸፈኒ ጸጉሪ ትኽደኑ፡ ኣእዳውኩም ድማ ብተደጋጋሚ ትሓጽቡ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.mixlab.p': "ርግጸኛ ኣይኮንኩን። ክንደይ ክኣቱ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.s': { m: "እቲ ቀመር 25 ኪሎ ይብል። ብጌጋ 26 ኪሎ ኣእቲኻ፡ ድሮ ድማ ኣብ ታንኪ ምሕዋስ ኣሎ። እንታይ ትገብር?", f: "እቲ ቀመር 25 ኪሎ ይብል። ብጌጋ 26 ኪሎ ኣእቲኺ፡ ድሮ ድማ ኣብ ታንኪ ምሕዋስ ኣሎ። እንታይ ትገብሪ?", x: "እቲ ቀመር 25 ኪሎ ይብል። ብጌጋ 26 ኪሎ ኣእቲኹም፡ ድሮ ድማ ኣብ ታንኪ ምሕዋስ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o1': { m: "ንሓላፊ ፈረቓኻ ንገሮ፡ ጽሓፎ ድማ።", f: "ንሓላፊ ፈረቓኺ ንገርዮ፡ ጽሓፍዮ ድማ።", x: "ንሓላፊ ፈረቓኹም ንገርዎ፡ ጽሓፍዎ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o2': { m: "ገለ ኣይትበል፡ ሓደ ኪሎ ብዙሕ ኣይኮነን።", f: "ገለ ኣይትበሊ፡ ሓደ ኪሎ ብዙሕ ኣይኮነን።", x: "ገለ ኣይትበሉ፡ ሓደ ኪሎ ብዙሕ ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.o3': { m: "ብኢድካ ቁሩብ ኣውጽእ።", f: "ብኢድኪ ቁሩብ ኣውጽኢ።", x: "ብኢድኩም ቁሩብ ኣውጽኡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.w': "ሓደ ጌጋ መጠን ንብምሉኡ ባች ከበላሽዎ ይኽእል። ሓላፊ ፈረቓ ብግዜ ምስ ዝፈልጦ፡ እቲ ባች ቅድሚ ምቕጻሉ እቲ ላብ ክፍትሾ ይኽእል።", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (performance review, forms, voicemail, the dentist) (27 November 2026).
    'l.forms': "ቅጥዒ ምምላእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.invullen': "ምምላእ (ቅጥዒ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vakje': "ሳጹን (ኣብ ቅጥዒ ዘሎ ንእሽቶ ኣርባዕተ ኩርናዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankruisen': "ምምልካት (ኣብ ሳጹን ምልክት X ምግባር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verplichtveld': { m: "ግዴታዊ ቦታ (ክትመልኦ ኣለካ፡ መብዛሕትኡ ግዜ ብ * ይምልከት)", f: "ግዴታዊ ቦታ (ክትመልእዮ ኣለኪ፡ መብዛሕትኡ ግዜ ብ * ይምልከት)", x: "ግዴታዊ ቦታ (ክትመልእዎ ኣለኩም፡ መብዛሕትኡ ግዜ ብ * ይምልከት)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.postcode': { m: "ፖስታ ኮድ (ንጎደናኻ ወይ ከተማኻ ዝኸውን ሓጺር ኮድ፡ ክፋል ኣድራሻኻ)", f: "ፖስታ ኮድ (ንጎደናኺ ወይ ከተማኺ ዝኸውን ሓጺር ኮድ፡ ክፋል ኣድራሻኺ)", x: "ፖስታ ኮድ (ንጎደናኹም ወይ ከተማኹም ዝኸውን ሓጺር ኮድ፡ ክፋል ኣድራሻኹም)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.hoofdletters': "ዓበይቲ ፊደላት (A, B, C)", // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.1': { m: "ስምካ ብዓበይቲ ፊደላት ጽሓፍ።", f: "ስምኪ ብዓበይቲ ፊደላት ጽሓፊ።", x: "ስምኩም ብዓበይቲ ፊደላት ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.2': { m: "ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበር።", f: "ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበሪ።", x: "ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.forms.3': "በዚ ቅጥዒ ክትሕግዙኒ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.q': { m: "ነቲ ቅጥዒ ድሮ መሊእካዮ ዶ?", f: "ነቲ ቅጥዒ ድሮ መሊእክዮ ዶ?", x: "ነቲ ቅጥዒ ድሮ መሊእኩምዎ ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a': "ዳርጋ። ፊርማይ ኣበይ እዩ ዝኣቱ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.voicemail': { m: "ናይ ድምጺ መልእኽትን ተመሊስካ ምድዋልን", f: "ናይ ድምጺ መልእኽትን ተመሊስኪ ምድዋልን", x: "ናይ ድምጺ መልእኽትን ተመሊስኩም ምድዋልን" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.piep': { m: "ፒፕ (እቲ ሓጺር ድምጺ፡ ድሕሪኡ መልእኽትኻ ትዛረብ)", f: "ፒፕ (እቲ ሓጺር ድምጺ፡ ድሕሪኡ መልእኽትኺ ትዛረቢ)", x: "ፒፕ (እቲ ሓጺር ድምጺ፡ ድሕሪኡ መልእኽትኹም ትዛረቡ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.beluisteren': "ምስማዕ (መልእኽቲ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.boodschap': { m: "መልእኽቲ (ኣብ ቮይስሜይል ሓደ ሰብ እትብሎ)", f: "መልእኽቲ (ኣብ ቮይስሜይል ሓደ ሰብ እትብልዮ)", x: "መልእኽቲ (ኣብ ቮይስሜይል ሓደ ሰብ እትብልዎ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.noemen': { m: "ምጥቃስ፡ ምንጋር (ስምካ፡ ቁጽርኻ)", f: "ምጥቃስ፡ ምንጋር (ስምኪ፡ ቁጽርኺ)", x: "ምጥቃስ፡ ምንጋር (ስምኩም፡ ቁጽርኹም)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.zosnelmogelijk': "ብዝቐልጠፈ ግዜ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnieuw': "ከም ብሓድሽ፡ ደጊም (ሓንሳብ ተወሳኺ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.1': "Ali Haddad እየ። ብዛዕባ መደብ ስራሐይ እየ ዝድውል ዘለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.2': "መዓልቲ መዓልቲ ቮይስሜይለይ እሰምዕ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.voicemail.3': "ጸኒሐ ደጊመ ክድውል እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.q': "ድሕሪ እቲ ፒፕ ስምኩምን ቁጽርኹምን ግደፉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a': "Ali እየ። ብዝቐልጠፈ ግዜ ተመሊስኩም ክትድውሉለይ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.dentist': "ሓኪም ስኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tandarts': "ሓኪም ስኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kiespijn': "ቃንዛ ስኒ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gaatje': "ነቓዕ ስኒ (ኣብ ስኒ ዘሎ ንእሽቶ ነቓዕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vulling': "መምልኢ ስኒ (ሓኪም ስኒ ነቲ ኣብ ስኒ ዘሎ ነቓዕ ይዓጽዎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gebit': { m: "ኣስናን (ኩሎም ኣስናንካ ብሓባር)", f: "ኣስናን (ኩሎም ኣስናንኪ ብሓባር)", x: "ኣስናን (ኩሎም ኣስናንኩም ብሓባር)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.aanvullendeverzekering': { m: "ተወሳኺ መድሕን (ኣብ ልዕሊ መሰረታዊ መድሕን ጥዕና ክትመርጾ ትኽእል)", f: "ተወሳኺ መድሕን (ኣብ ልዕሊ መሰረታዊ መድሕን ጥዕና ክትመርጽዮ ትኽእሊ)", x: "ተወሳኺ መድሕን (ኣብ ልዕሊ መሰረታዊ መድሕን ጥዕና ክትመርጽዎ ትኽእሉ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.1': "ካብ ክልተ መዓልቲ ጀሚሩ ቃንዛ ስኒ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.2': "ነቓዕ ስኒ ኣለኒ። መምልኢ ክግበረለይ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.dentist.3': "መምልኢ ስኒ ክንደይ ዋጋ ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.q': { m: "ንመወዳእታ ግዜ መዓስ ኢኻ ናብ ሓኪም ስኒ ከይድካ?", f: "ንመወዳእታ ግዜ መዓስ ኢኺ ናብ ሓኪም ስኒ ከይድኪ?", x: "ንመወዳእታ ግዜ መዓስ ኢኹም ናብ ሓኪም ስኒ ከይድኩም?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a': "ቅድሚ ሓደ ዓመት። ፍተሻ ክግበረለይ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms': { m: "ቅጥዒ፡ ብንጹር ጽሓፍ፡ BSNካ ድማ ሓሉ", f: "ቅጥዒ፡ ብንጹር ጽሓፊ፡ BSNኪ ድማ ሓልዊ", x: "ቅጥዒ፡ ብንጹር ጽሓፉ፡ BSNኩም ድማ ሓልዉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.b': { m: "ቅጥዒ መብዛሕትኡ ግዜ ስምካ፡ ዕለት ልደትካ፡ ኣድራሻኻን ፖስታ ኮድካን ይሓትት። ብንጹር ጽሓፍ፡ መብዛሕትኡ ግዜ ብዓበይቲ ፊደላት። ኮኾብ (*) ዘለዎ ቦታ ግዴታ እዩ፡ ክትመልኦ ኣለካ። ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበር። ሓደ ሕቶ ኣይተረድኣካን ድዩ? ቅድሚ ምፍራምካ ሓገዝ ሕተት። ዘይተረድኣካ ነገር ፈጺምካ ኣይትፈርም። BSNካ፡ ገለ ትካላት ጥራይ እዮም ክሓቱኻ ዝፍቀደሎም፡ ከም ኣስራሒኻ፡ gemeente፡ Belastingdienst፡ ትካል መድሕን ጥዕናኻ፡ ሓኪምካን ባንክኻን። ድኳን ወይ ክለብ ስፖርት ኣይፍቀደሉን። BSNካ ፈጺምካ ንዘይትፈልጦ ሰብ፡ ኣብ ኤፕ ወይ ብተሌፎን ኣይትሃብ። ርግጸኛ ኣይኮንካን? ስለምንታይ ከም ዘድልዮም ሕተት። ብዙሓት ቤት መጻሕፍቲ ብቅጥዕታት ብነጻ ይሕግዙ፡ መብዛሕትኡ ግዜ ኣብ ብዘይ ቆጸራ ዝምጸኣሉ ሰዓት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ቅጥዒ መብዛሕትኡ ግዜ ስምኪ፡ ዕለት ልደትኪ፡ ኣድራሻኺን ፖስታ ኮድኪን ይሓትት። ብንጹር ጽሓፊ፡ መብዛሕትኡ ግዜ ብዓበይቲ ፊደላት። ኮኾብ (*) ዘለዎ ቦታ ግዴታ እዩ፡ ክትመልእዮ ኣለኪ። ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበሪ። ሓደ ሕቶ ኣይተረድኣክን ድዩ? ቅድሚ ምፍራምኪ ሓገዝ ሕተቲ። ዘይተረድኣኪ ነገር ፈጺምኪ ኣይትፈርሚ። BSNኪ፡ ገለ ትካላት ጥራይ እዮም ክሓቱኺ ዝፍቀደሎም፡ ከም ኣስራሒኺ፡ gemeente፡ Belastingdienst፡ ትካል መድሕን ጥዕናኺ፡ ሓኪምኪን ባንክኪን። ድኳን ወይ ክለብ ስፖርት ኣይፍቀደሉን። BSNኪ ፈጺምኪ ንዘይትፈልጥዮ ሰብ፡ ኣብ ኤፕ ወይ ብተሌፎን ኣይትሃቢ። ርግጸኛ ኣይኮንክን? ስለምንታይ ከም ዘድልዮም ሕተቲ። ብዙሓት ቤት መጻሕፍቲ ብቅጥዕታት ብነጻ ይሕግዙ፡ መብዛሕትኡ ግዜ ኣብ ብዘይ ቆጸራ ዝምጸኣሉ ሰዓት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ቅጥዒ መብዛሕትኡ ግዜ ስምኩም፡ ዕለት ልደትኩም፡ ኣድራሻኹምን ፖስታ ኮድኩምን ይሓትት። ብንጹር ጽሓፉ፡ መብዛሕትኡ ግዜ ብዓበይቲ ፊደላት። ኮኾብ (*) ዘለዎ ቦታ ግዴታ እዩ፡ ክትመልእዎ ኣለኩም። ኣብቲ ትኽክለኛ ሳጹን ምልክት ግበሩ። ሓደ ሕቶ ኣይተረድኣኩምን ድዩ? ቅድሚ ምፍራምኩም ሓገዝ ሕተቱ። ዘይተረድኣኩም ነገር ፈጺምኩም ኣይትፈርሙ። BSNኩም፡ ገለ ትካላት ጥራይ እዮም ክሓቱኹም ዝፍቀደሎም፡ ከም ኣስራሒኹም፡ gemeente፡ Belastingdienst፡ ትካል መድሕን ጥዕናኹም፡ ሓኪምኩምን ባንክኹምን። ድኳን ወይ ክለብ ስፖርት ኣይፍቀደሉን። BSNኩም ፈጺምኩም ንዘይትፈልጥዎ ሰብ፡ ኣብ ኤፕ ወይ ብተሌፎን ኣይትሃቡ። ርግጸኛ ኣይኮንኩምን? ስለምንታይ ከም ዘድልዮም ሕተቱ። ብዙሓት ቤት መጻሕፍቲ ብቅጥዕታት ብነጻ ይሕግዙ፡ መብዛሕትኡ ግዜ ኣብ ብዘይ ቆጸራ ዝምጸኣሉ ሰዓት። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.p': "BSNይ ኣብዚ ግዴታ ድዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.s': { m: "ኣብ ክለብ ስፖርት ትምዝገብ ኣለኻ። እቲ ቅጥዒ BSNካ ይሓትት። እንታይ ትገብር?", f: "ኣብ ክለብ ስፖርት ትምዝገቢ ኣለኺ። እቲ ቅጥዒ BSNኪ ይሓትት። እንታይ ትገብሪ?", x: "ኣብ ክለብ ስፖርት ትምዝገቡ ኣለኹም። እቲ ቅጥዒ BSNኩም ይሓትት። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o1': { m: "ባዶ ግደፎ፡ ስለምንታይ ከም ዘድልዮም ድማ ሕተት።", f: "ባዶ ግደፍዮ፡ ስለምንታይ ከም ዘድልዮም ድማ ሕተቲ።", x: "ባዶ ግደፍዎ፡ ስለምንታይ ከም ዘድልዮም ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o2': { m: "ምልኦ፡ ዝኾነ ቅጥዒ ክሓቶ ይፍቀደሉ እዩ።", f: "ምልእዮ፡ ዝኾነ ቅጥዒ ክሓቶ ይፍቀደሉ እዩ።", x: "ምልእዎ፡ ዝኾነ ቅጥዒ ክሓቶ ይፍቀደሉ እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.o3': { m: "ኣብ ክንድኡ ናይ DigiD መእተዊኻ ሃብ።", f: "ኣብ ክንድኡ ናይ DigiD መእተዊኺ ሃቢ።", x: "ኣብ ክንድኡ ናይ DigiD መእተዊኹም ሃቡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.w': { m: "ክለብ ስፖርት BSNካ ክጥቀም ኣይፍቀደሉን። ገለ ትካላት ጥራይ እዮም ዝፍቀደሎም፡ ከም ኣስራሒኻ፡ gemeenteን ትካል መድሕን ጥዕናኻን። ስለምንታይ ኢልካ ምስ እትሓትት፡ ቁጽርኻ ትሕሉ።", f: "ክለብ ስፖርት BSNኪ ክጥቀም ኣይፍቀደሉን። ገለ ትካላት ጥራይ እዮም ዝፍቀደሎም፡ ከም ኣስራሒኺ፡ gemeenteን ትካል መድሕን ጥዕናኺን። ስለምንታይ ኢልኪ ምስ እትሓትቲ፡ ቁጽርኺ ትሕልዊ።", x: "ክለብ ስፖርት BSNኩም ክጥቀም ኣይፍቀደሉን። ገለ ትካላት ጥራይ እዮም ዝፍቀደሎም፡ ከም ኣስራሒኹም፡ gemeenteን ትካል መድሕን ጥዕናኹምን። ስለምንታይ ኢልኩም ምስ እትሓትቱ፡ ቁጽርኹም ትሕልዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail': { m: "መልእኽቲ፡ መን፡ ስለምንታይ፡ ቁጽርኻ", f: "መልእኽቲ፡ መን፡ ስለምንታይ፡ ቁጽርኺ", x: "መልእኽቲ፡ መን፡ ስለምንታይ፡ ቁጽርኹም" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.b': { m: "መልሲ የለን? ድሕሪ እቲ ፒፕ (piep) ሓጺር መልእኽቲ (boodschap) ግደፍ። ስምካ፡ ስለምንታይ ከም እትድውል፡ ቁጽሪ ተሌፎንካን ንገር። ቀስ ኢልካ ተዛረብ፡ ቁጽርኻ ድማ ክልተ ግዜ ንገር። ጻውዒት ኣምሊጡካ? ቅድም ቮይስሜይልካ ስማዕ፡ ድሕሪኡ ብዝቐልጠፈ ግዜ ተመሊስካ ደውል። ሓደ መልእኽቲ ኣይተረድኣካን? ደጊምካ ስምዓዮ፡ ወይ ሓደ ብጻይ ስራሕ ምሳኻ ክሰምዖ ሕተቶ። ቮይስሜይልካ ኣዳሉ፡ መዓልቲ መዓልቲ ድማ ስምዓዮ። ሕሙም ምዃንካ ትሕብር ዲኻ? ኣብ ብዙሓት ትካላት መልእኽቲ ኣይኣክልን፡ ምስ ሓደ ሰብ ክሳዕ እትዛረብ ደጊምካ ደውል። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መልሲ የለን? ድሕሪ እቲ ፒፕ (piep) ሓጺር መልእኽቲ (boodschap) ግደፊ። ስምኪ፡ ስለምንታይ ከም እትድውሊ፡ ቁጽሪ ተሌፎንኪን ንገሪ። ቀስ ኢልኪ ተዛረቢ፡ ቁጽርኺ ድማ ክልተ ግዜ ንገሪ። ጻውዒት ኣምሊጡኪ? ቅድም ቮይስሜይልኪ ስምዒ፡ ድሕሪኡ ብዝቐልጠፈ ግዜ ተመሊስኪ ደውሊ። ሓደ መልእኽቲ ኣይተረድኣክን? ደጊምኪ ስምዕዮ፡ ወይ ሓደ ብጻይ ስራሕ ምሳኺ ክሰምዖ ሕተትዮ። ቮይስሜይልኪ ኣዳልዊ፡ መዓልቲ መዓልቲ ድማ ስምዕዮ። ሕምምቲ ምዃንኪ ትሕብሪ ዲኺ? ኣብ ብዙሓት ትካላት መልእኽቲ ኣይኣክልን፡ ምስ ሓደ ሰብ ክሳዕ እትዛረቢ ደጊምኪ ደውሊ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መልሲ የለን? ድሕሪ እቲ ፒፕ (piep) ሓጺር መልእኽቲ (boodschap) ግደፉ። ስምኩም፡ ስለምንታይ ከም እትድውሉ፡ ቁጽሪ ተሌፎንኩምን ንገሩ። ቀስ ኢልኩም ተዛረቡ፡ ቁጽርኹም ድማ ክልተ ግዜ ንገሩ። ጻውዒት ኣምሊጡኩም? ቅድም ቮይስሜይልኩም ስምዑ፡ ድሕሪኡ ብዝቐልጠፈ ግዜ ተመሊስኩም ደውሉ። ሓደ መልእኽቲ ኣይተረድኣኩምን? ደጊምኩም ስምዕዎ፡ ወይ ሓደ ብጻይ ስራሕ ምሳኹም ክሰምዖ ሕተትዎ። ቮይስሜይልኩም ኣዳልዉ፡ መዓልቲ መዓልቲ ድማ ስምዕዎ። ሕሙማት ምዃንኩም ትሕብሩ ዲኹም? ኣብ ብዙሓት ትካላት መልእኽቲ ኣይኣክልን፡ ምስ ሓደ ሰብ ክሳዕ እትዛረቡ ደጊምኩም ደውሉ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.p': "መልእኽቲ ክገድፍ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.s': { m: "ናብ ስራሕ ክትድንጒ ኢኻ፡ ንተቖጻጻሪትካ ድማ ትድውለላ። ቮይስሜይላ ትሰምዕ። ድሕሪ እቲ ፒፕ እንታይ ትብል?", f: "ናብ ስራሕ ክትድንጕዪ ኢኺ፡ ንተቖጻጻሪትኪ ድማ ትድውልላ። ቮይስሜይላ ትሰምዒ። ድሕሪ እቲ ፒፕ እንታይ ትብሊ?", x: "ናብ ስራሕ ክትድንጕዩ ኢኹም፡ ንተቖጻጻሪትኩም ድማ ትድውሉላ። ቮይስሜይላ ትሰምዑ። ድሕሪ እቲ ፒፕ እንታይ ትብሉ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.voicemail.o1': { m: "ስምካ፡ ስለምንታይ ከም እትድውል፡ ቁጽርኻን።", f: "ስምኪ፡ ስለምንታይ ከም እትድውሊ፡ ቁጽርኺን።", x: "ስምኩም፡ ስለምንታይ ከም እትድውሉ፡ ቁጽርኹምን።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o2': { m: "«Bel me terug» ጥራይ በል፡ ተሌፎን ድማ ዕጸው።", f: "«Bel me terug» ጥራይ በሊ፡ ተሌፎን ድማ ዕጸዊ።", x: "«Bel me terug» ጥራይ በሉ፡ ተሌፎን ድማ ዕጸዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.o3': { m: "ገለ ኣይትብልን፡ ተሌፎን ትዓጹ፡ ድሕሪኡ ትጽበ።", f: "ገለ ኣይትብሊን፡ ተሌፎን ትዓጽዊ፡ ድሕሪኡ ትጽበዪ።", x: "ገለ ኣይትብሉን፡ ተሌፎን ትዓጽዉ፡ ድሕሪኡ ትጽበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.w': { m: "ስምካ፡ ምኽንያቱን ቁጽርኻን ምስ እትገድፍ፡ ተቖጻጻሪትካ እንታይ ይኸውን ከም ዘሎ ትፈልጥ፡ ብቕጽበት ድማ ተመሊሳ ክትድውለልካ ትኽእል።", f: "ስምኪ፡ ምኽንያቱን ቁጽርኺን ምስ እትገድፊ፡ ተቖጻጻሪትኪ እንታይ ይኸውን ከም ዘሎ ትፈልጥ፡ ብቕጽበት ድማ ተመሊሳ ክትድውለልኪ ትኽእል።", x: "ስምኩም፡ ምኽንያቱን ቁጽርኹምን ምስ እትገድፉ፡ ተቖጻጻሪትኩም እንታይ ይኸውን ከም ዘሎ ትፈልጥ፡ ብቕጽበት ድማ ተመሊሳ ክትድውለልኩም ትኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist': { m: "ሓኪም ስኒ፡ ፍተሻ፡ ዋጋ ድማ ሕተት", f: "ሓኪም ስኒ፡ ፍተሻ፡ ዋጋ ድማ ሕተቲ", x: "ሓኪም ስኒ፡ ፍተሻ፡ ዋጋ ድማ ሕተቱ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.b': { m: "ኣብ ጥቓ ገዛኻ ምስ ሓኪም ስኒ (tandarts) ተመዝገብ፡ ብስሩዕ ድማ ናብ ፍተሻ (controle) ኪድ፡ መብዛሕትኡ ግዜ ኣብ ዓመት ሓንሳብ። ቃንዛ ስኒ? ናብ ናትካ ሓኪም ስኒ ደውል፡ ብርቱዕ ቃንዛ ከም ዘለካ ድማ ንገር፡ ሽዑ መብዛሕትኡ ግዜ ቀልጢፍካ ቆጸራ ትረክብ። ለይቲ ወይ ቀዳም-ሰንበት፡ ናብ ናትካ ሓኪም ስኒ ደውል፡ እቲ መልእኽቲ ተሌፎን ሕጂ ኣየናይ ሓኪም ስኒ ከም ዝሕግዝ ይነግረካ። ንዓበይቲ፡ መሰረታዊ መድሕን ጥዕና ኣብ ሓኪም ስኒ ኣዝዩ ውሑድ ጥራይ ይኸፍል፡ መብዛሕትኡ ግዜ ነቲ ፍተሻ ወይ መምልኢ ስኒ ኣይከፍልን። ንሓኪም ስኒ ተወሳኺ መድሕን (aanvullende verzekering) ክትመርጽ ትኽእል ኢኻ፡ እንታይ ከም ዝኸፍል ኣረጋግጽ። ንቖልዑ ትሕቲ 18 ዓመት፡ መሰረታዊ መድሕን ንመብዛሕትኡ ክንክን ስኒ ይኸፍል። ቅድሚ ሕክምና ምጅማሩ፡ ክንደይ ከም ዘኽፍል ሕተት። ንዓቢ ሕክምና፡ ሓኪም ስኒ ቅድም ነቲ ዋጋ ብጽሑፍ ክህበካ ኣለዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ኣብ ጥቓ ገዛኺ ምስ ሓኪም ስኒ (tandarts) ተመዝገቢ፡ ብስሩዕ ድማ ናብ ፍተሻ (controle) ኪዲ፡ መብዛሕትኡ ግዜ ኣብ ዓመት ሓንሳብ። ቃንዛ ስኒ? ናብ ናትኪ ሓኪም ስኒ ደውሊ፡ ብርቱዕ ቃንዛ ከም ዘለኪ ድማ ንገሪ፡ ሽዑ መብዛሕትኡ ግዜ ቀልጢፍኪ ቆጸራ ትረኽቢ። ለይቲ ወይ ቀዳም-ሰንበት፡ ናብ ናትኪ ሓኪም ስኒ ደውሊ፡ እቲ መልእኽቲ ተሌፎን ሕጂ ኣየናይ ሓኪም ስኒ ከም ዝሕግዝ ይነግረኪ። ንዓበይቲ፡ መሰረታዊ መድሕን ጥዕና ኣብ ሓኪም ስኒ ኣዝዩ ውሑድ ጥራይ ይኸፍል፡ መብዛሕትኡ ግዜ ነቲ ፍተሻ ወይ መምልኢ ስኒ ኣይከፍልን። ንሓኪም ስኒ ተወሳኺ መድሕን (aanvullende verzekering) ክትመርጺ ትኽእሊ ኢኺ፡ እንታይ ከም ዝኸፍል ኣረጋግጺ። ንቖልዑ ትሕቲ 18 ዓመት፡ መሰረታዊ መድሕን ንመብዛሕትኡ ክንክን ስኒ ይኸፍል። ቅድሚ ሕክምና ምጅማሩ፡ ክንደይ ከም ዘኽፍል ሕተቲ። ንዓቢ ሕክምና፡ ሓኪም ስኒ ቅድም ነቲ ዋጋ ብጽሑፍ ክህበኪ ኣለዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ኣብ ጥቓ ገዛኹም ምስ ሓኪም ስኒ (tandarts) ተመዝገቡ፡ ብስሩዕ ድማ ናብ ፍተሻ (controle) ኪዱ፡ መብዛሕትኡ ግዜ ኣብ ዓመት ሓንሳብ። ቃንዛ ስኒ? ናብ ናትኩም ሓኪም ስኒ ደውሉ፡ ብርቱዕ ቃንዛ ከም ዘለኩም ድማ ንገሩ፡ ሽዑ መብዛሕትኡ ግዜ ቀልጢፍኩም ቆጸራ ትረኽቡ። ለይቲ ወይ ቀዳም-ሰንበት፡ ናብ ናትኩም ሓኪም ስኒ ደውሉ፡ እቲ መልእኽቲ ተሌፎን ሕጂ ኣየናይ ሓኪም ስኒ ከም ዝሕግዝ ይነግረኩም። ንዓበይቲ፡ መሰረታዊ መድሕን ጥዕና ኣብ ሓኪም ስኒ ኣዝዩ ውሑድ ጥራይ ይኸፍል፡ መብዛሕትኡ ግዜ ነቲ ፍተሻ ወይ መምልኢ ስኒ ኣይከፍልን። ንሓኪም ስኒ ተወሳኺ መድሕን (aanvullende verzekering) ክትመርጹ ትኽእሉ ኢኹም፡ እንታይ ከም ዝኸፍል ኣረጋግጹ። ንቖልዑ ትሕቲ 18 ዓመት፡ መሰረታዊ መድሕን ንመብዛሕትኡ ክንክን ስኒ ይኸፍል። ቅድሚ ሕክምና ምጅማሩ፡ ክንደይ ከም ዘኽፍል ሕተቱ። ንዓቢ ሕክምና፡ ሓኪም ስኒ ቅድም ነቲ ዋጋ ብጽሑፍ ክህበኩም ኣለዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.p': "ብዙሕ ቃንዛ ኣለኒ። ሎሚ ክመጽእ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.s': { m: "ቀዳም ምሸት እዩ። ብርቱዕ ቃንዛ ስኒ ኣለካ፡ መድሃኒት ቃንዛ ድማ ኣይሕግዝን። እንታይ ትገብር?", f: "ቀዳም ምሸት እዩ። ብርቱዕ ቃንዛ ስኒ ኣለኪ፡ መድሃኒት ቃንዛ ድማ ኣይሕግዝን። እንታይ ትገብሪ?", x: "ቀዳም ምሸት እዩ። ብርቱዕ ቃንዛ ስኒ ኣለኩም፡ መድሃኒት ቃንዛ ድማ ኣይሕግዝን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o1': { m: "ናብ ናትካ ሓኪም ስኒ ደውል፡ እቲ መልእኽቲ ሕጂ መን ከም ዝሕግዝ ይነግር።", f: "ናብ ናትኪ ሓኪም ስኒ ደውሊ፡ እቲ መልእኽቲ ሕጂ መን ከም ዝሕግዝ ይነግር።", x: "ናብ ናትኩም ሓኪም ስኒ ደውሉ፡ እቲ መልእኽቲ ሕጂ መን ከም ዝሕግዝ ይነግር።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o2': { m: "ናብ 112 ደውል፡ ህጹጽ ኩነታት እዩ።", f: "ናብ 112 ደውሊ፡ ህጹጽ ኩነታት እዩ።", x: "ናብ 112 ደውሉ፡ ህጹጽ ኩነታት እዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.o3': { m: "ክሳዕ ሰኑይ ተጸበ፡ ተወሳኺ መድሃኒት ቃንዛ ድማ ውሰድ።", f: "ክሳዕ ሰኑይ ተጸበዪ፡ ተወሳኺ መድሃኒት ቃንዛ ድማ ውሰዲ።", x: "ክሳዕ ሰኑይ ተጸበዩ፡ ተወሳኺ መድሃኒት ቃንዛ ድማ ውሰዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.w': "ካብ ሰዓታት ስራሕ ወጻኢ፡ ተረኛ ሓኪም ስኒ ንህጹጽ ቃንዛ ይሕግዝ። 112 ንህጹጽ ኩነታት ጥራይ እዩ፡ ከም ንህይወት ሓደጋ።", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
