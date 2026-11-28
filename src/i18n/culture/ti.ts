import type { CultureTranslation } from './types';

const t: CultureTranslation = {
  ui: {
    cultureBadge: 'ኣብዚ ከምዚ እዩ ዝሰርሕ',
    whatDoYouDo: { m: 'እንታይ ትገብር?', f: 'እንታይ ትገብሪ?', x: 'እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    whatDoYouSay: { m: 'እንታይ ትብል?', f: 'እንታይ ትብሊ?', x: 'እንታይ ትብሉ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    whatIsRight: 'ኣየናይ ቅኑዕ እዩ?',
    sayThis: { m: 'ከምዚ በሎ', f: 'ከምዚ በልዮ' },
    goodChoice: 'ጽቡቕ ምርጫ!',
    otherChoice: 'ኣብዚ ብተለምዶ ብኻልእ መንገዲ እዩ ዝኸይድ',
    cultureTips: 'ምኽርታት ንቦታ ስራሕ',
    cultureTipsHint: { m: 'ኣብ ሆላንዳዊ ቦታ ስራሕ ነገራት ብተለምዶ ከመይ ከም ዝኸዱ። ደጊምካ ከተንብቦ ኣብ ሓደ ምኽሪ ጠውቕ።', f: 'ኣብ ሆላንዳዊ ቦታ ስራሕ ነገራት ብተለምዶ ከመይ ከም ዝኸዱ። ደጊምኪ ከተንብብዮ ኣብ ሓደ ምኽሪ ጠውቒ።' },
  },
  gloss: {
    'c.je': '«je» ድዩ «u»?',
    'c.je.b': { m: 'ኣብ ስራሕ መብዛሕትኦም ሰባት ንሓድሕዶም «je» (ንስኻ) ይብሉ፡ መብዛሕትኡ ግዜ ንሓላፊ እውን። እንተ ዘይተረጋገጽካ፡ ብ«u» (ንስኹም፡ ናይ ኽብሪ) ጀምር እሞ ካልኦት እንታይ ከም ዝገብሩ ስማዕ። ኣብዚ «je» ምባል ዘይምኽባር ኣይኮነን።', f: 'ኣብ ስራሕ መብዛሕትኦም ሰባት ንሓድሕዶም «je» (ንስኺ) ይብሉ፡ መብዛሕትኡ ግዜ ንሓላፊ እውን። እንተ ዘይተረጋገጽኪ፡ ብ«u» (ንስኹም፡ ናይ ኽብሪ) ጀምሪ እሞ ካልኦት እንታይ ከም ዝገብሩ ስምዒ። ኣብዚ «je» ምባል ዘይምኽባር ኣይኮነን።', x: 'ኣብ ስራሕ መብዛሕትኦም ሰባት ንሓድሕዶም «je» (ንስኻ / ንስኺ) ይብሉ፡ መብዛሕትኡ ግዜ ንሓላፊ እውን። እንተ ዘይተረጋገጽኩም፡ ብ«u» (ንስኹም፡ ናይ ኽብሪ) ጀምሩ እሞ ካልኦት እንታይ ከም ዝገብሩ ስምዑ። ኣብዚ «je» ምባል ዘይምኽባር ኣይኮነን።' }, // x: nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.je.p': '«je» ክብለካ ይፍቀደለይ ዶ?',
    'c.je.s': { m: 'ሓዳስ ተቖጻጻሪትካ «Zeg maar je, hoor!» ትብል። እንታይ ማለታ እያ?', f: 'ሓዳስ ተቖጻጻሪትኪ «Zeg maar je, hoor!» ትብል። እንታይ ማለታ እያ?', x: 'ሓዳስ ተቖጻጻሪትኩም «Zeg maar je, hoor!» ትብል። እንታይ ማለታ እያ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.je.o1': { m: '«je» ክትብላ ትደሊ።', f: '«je» ክትብልያ ትደሊ።' },
    'c.je.o2': { m: 'ገለ ክትብል ትሓተካ ኣላ።', f: 'ገለ ክትብሊ ትሓተኪ ኣላ።', x: 'ገለ ክትብሉ ትሓተኩም ኣላ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.je.o3': { m: 'ብዝያዳ ትሕትና ክትዛረብ ትደሊ።', f: 'ብዝያዳ ትሕትና ክትዛረቢ ትደሊ።', x: 'ብዝያዳ ትሕትና ክትዛረቡ ትደሊ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.je.w': '«Zeg maar je» ናይ ሕያውነት ምልክት እዩ፡ ብዘይ ብዙሕ ወግዒ ክትዘራረቡ ትደሊ። ኣብ ብዙሓት ሆላንዳውያን ቦታታት ስራሕ ንተቖጻጻሪ «je» ምባል ልሙድ እዩ።',
    'c.names': 'ቀዳማይ ስምን ኢድ ምጭባጥን',
    'c.names.b': { m: 'ኣብ ቀዳመይቲ መዓልትኻ፡ ብሓጺሩ ኢድ ጨብጥ፡ ነቲ ሰብ ጠምቶ፡ ቀዳማይ ስምካ ድማ ንገሮ። ሰባት ንብጾት ስራሕን ንሓለፍትን ብተለምዶ ብቀዳማይ ስሞም ይጽውዕዎም።', f: 'ኣብ ቀዳመይቲ መዓልትኺ፡ ብሓጺሩ ኢድ ጨብጢ፡ ነቲ ሰብ ጠምትዮ፡ ቀዳማይ ስምኪ ድማ ንገርዮ። ሰባት ንብጾት ስራሕን ንሓለፍትን ብተለምዶ ብቀዳማይ ስሞም ይጽውዕዎም።' },
    'c.names.p': 'ሰላም፡ ኣነ ዓሊ እየ። ኣብዚ ሓድሽ እየ።',
    'c.names.s': { m: 'ሓደ ብጻይ ስራሕ ናባኻ መጺኡ «Hoi, ik ben Mark.» ይብለካ። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ ናባኺ መጺኡ «Hoi, ik ben Mark.» ይብለኪ። እንታይ ትገብሪ?', x: 'ሓደ ብጻይ ስራሕ ናባኹም መጺኡ «Hoi, ik ben Mark.» ይብለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.names.o1': { m: 'ኢዱ ጨቢጥካ ስምካ ንገሮ።', f: 'ኢዱ ጨቢጥኪ ስምኪ ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o2': { m: 'ርእስኻ ነቕንቕ፡ ፍሽኽ በል፡ ሕቶታት ድማ ተጸበ።', f: 'ርእስኺ ነቕንቒ፡ ፍሽኽ በሊ፡ ሕቶታት ድማ ተጸበዪ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.o3': { m: 'ኢዱ ጨቢጥካ «meneer» (ኣቶ) ኢልካ ጸውዖ።', f: 'ኢዱ ጨቢጥኪ «meneer» (ኣቶ) ኢልኪ ጸውዕዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.names.w': { m: 'ብቀዳማይ ስምካ ሓጺር ምልላይ ልሙድ ጅማሮ እዩ። ብጾት ስራሕ ክዝክሩኻን ምሳታቶም ክዕድሙኻን ይሕግዞም።', f: 'ብቀዳማይ ስምኪ ሓጺር ምልላይ ልሙድ ጅማሮ እዩ። ብጾት ስራሕ ክዝክሩኺን ምሳታቶም ክዕድሙኺን ይሕግዞም።' },
    'c.arrive': { m: 'ቀዳመይቲ መዓልትኻ፡ ናበይ ትኸይድ?', f: 'ቀዳመይቲ መዓልትኺ፡ ናበይ ትኸዲ?' },
    'c.arrive.b': { m: 'ኣብ ቀዳመይቲ መዓልትኻ፡ ቅድም ናብ መቐበሊ ኣጋይሽ ወይ ናብ ቀንዲ መእተዊ ኪድ። ስምካ፡ ኤጀንሲ ስራሕ እንተሎካ ስሙ፡ ንመን ክትረክብ ከም ዘለካን ንገር። ብዙሓት ትካላት ሓጋዚ ብጻይ (buddy) ይህቡኻ፡ ኩሉ ክትሓትቶ ትኽእል ኢኻ።', f: 'ኣብ ቀዳመይቲ መዓልትኺ፡ ቅድም ናብ መቐበሊ ኣጋይሽ ወይ ናብ ቀንዲ መእተዊ ኪዲ። ስምኪ፡ ኤጀንሲ ስራሕ እንተሎኪ ስሙ፡ ንመን ክትረክቢ ከም ዘለኪን ንገሪ። ብዙሓት ትካላት ሓጋዚ ብጻይ (buddy) ይህቡኺ፡ ኩሉ ክትሓትትዮ ትኽእሊ ኢኺ።' },
    'c.arrive.p': 'ደሓን ሓዲርኩም፡ ኣነ ዓሊ እየ። ሎሚ እጅምር። ናብ መን ክኸይድ ኣለኒ?',
    'c.arrive.s': { m: 'ቀዳመይቲ መዓልትኻ ሰዓት 6:45 እዩ። እቲ ኣፍ-ደገ ዕጹው እዩ። ደወል ምስ መዛረቢ (ኢንተርኮም) ኣሎ። እንታይ ትገብር?', f: 'ቀዳመይቲ መዓልትኺ ሰዓት 6:45 እዩ። እቲ ኣፍ-ደገ ዕጹው እዩ። ደወል ምስ መዛረቢ (ኢንተርኮም) ኣሎ። እንታይ ትገብሪ?', x: 'ቀዳመይቲ መዓልትኹም ሰዓት 6:45 እዩ። እቲ ኣፍ-ደገ ዕጹው እዩ። ደወል ምስ መዛረቢ (ኢንተርኮም) ኣሎ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.arrive.o1': { m: 'ደውል፡ ስምካን ሎሚ ከም እትጅምርን ንገር።', f: 'ደውሊ፡ ስምኪን ሎሚ ከም እትጅምሪን ንገሪ።' },
    'c.arrive.o2': { m: 'ሓደ ሰብ ክሳዕ ዝወጽእ ኣብቲ ኣፍ-ደገ ተጸበ።', f: 'ሓደ ሰብ ክሳዕ ዝወጽእ ኣብቲ ኣፍ-ደገ ተጸበዪ።' },
    'c.arrive.o3': { m: 'ካልእ ማዕጾ ንምርካብ ነቲ ህንጻ ዙሮ።', f: 'ካልእ ማዕጾ ንምርካብ ነቲ ህንጻ ዙርዮ።' },
    'c.arrive.w': { m: 'ደወል ምስ መዛረቢ (ኢንተርኮም) ንበጻሕትን ንሓደስቲ ሰራሕተኛታትን እዩ። መን ምዃንካ ምስ እትነግር፡ ነቲ ቅኑዕ ሰብ ክጽውዑ ይኽእሉ።', f: 'ደወል ምስ መዛረቢ (ኢንተርኮም) ንበጻሕትን ንሓደስቲ ሰራሕተኛታትን እዩ። መን ምዃንኪ ምስ እትነግሪ፡ ነቲ ቅኑዕ ሰብ ክጽውዑ ይኽእሉ።', x: 'ደወል ምስ መዛረቢ (ኢንተርኮም) ንበጻሕትን ንሓደስቲ ሰራሕተኛታትን እዩ። መን ምዃንኩም ምስ እትነግሩ፡ ነቲ ቅኑዕ ሰብ ክጽውዑ ይኽእሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ask': 'ሕቶ ምሕታት ጽቡቕ እዩ',
    'c.ask.b': { m: 'ሕቶ ምሕታት ነቲ ስራሕ ብጽቡቕ ክትሰርሖ ከም ትደሊ የርኢ። ከይተረደኣካ ብርእስኻ «እወ» ምባል ናብ ጌጋ ወይ ሓደጋ ከብጽሕ ይኽእል። ደጊምካ ምሕታት ብምሉኡ ልሙድ እዩ።', f: 'ሕቶ ምሕታት ነቲ ስራሕ ብጽቡቕ ክትሰርሕዮ ከም ትደልዪ የርኢ። ከይተረደኣኪ ብርእስኺ «እወ» ምባል ናብ ጌጋ ወይ ሓደጋ ከብጽሕ ይኽእል። ደጊምኪ ምሕታት ብምሉኡ ልሙድ እዩ።' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.ask.p': 'ይቕሬታ፡ ኣይተረድኣንን። ሓንሳብ ደጊምካ ክትገልጸለይ ትኽእል ዶ?',
    'c.ask.s': { m: 'ተቖጻጻሪኻ ሓደ ዕማም ብጣዕሚ ቅልጡፍ ይገልጽ። ኣይተረደኣካን። እንታይ ትገብር?', f: 'ተቖጻጻሪኺ ሓደ ዕማም ብጣዕሚ ቅልጡፍ ይገልጽ። ኣይተረደኣክን። እንታይ ትገብሪ?' },
    'c.ask.o1': { m: 'ደጊሙ ክገልጸልካ ሕተት።', f: 'ደጊሙ ክገልጸልኪ ሕተቲ።', x: 'ደጊሙ ክገልጸልኩም ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ask.o2': { m: 'ብርእስኻ «እወ» በል እሞ ክትግምት ፈትን።', f: 'ብርእስኺ «እወ» በሊ እሞ ክትግምቲ ፈትኒ።', x: 'ብርእስኹም «እወ» በሉ እሞ ክትግምቱ ፈትኑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ask.o3': { m: 'ብሰንኪ ሆላንድኛኻ ይቕረታ ሕተት፡ ስራሕ ድማ ጀምር።', f: 'ብሰንኪ ሆላንድኛኺ ይቕረታ ሕተቲ፡ ስራሕ ድማ ጀምሪ።', x: 'ብሰንኪ ሆላንድኛኹም ይቕረታ ሕተቱ፡ ስራሕ ድማ ጀምሩ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.ask.w': 'ኣብዚ ተቖጻጸርቲ ሕቶታት ይጽበዩ። ጌጋ ካብ ምግባር ክልተ ግዜ ምሕታት ይሓይሽ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.gear': 'ሕጊ ድሕንነት ንኹሉ ሰብ እዩ',
    'c.gear.b': { m: 'ሕጊ ብዛዕባ ሄልመት፡ ጫማን ጓንትን ሓሳብ ጥራይ ኣይኮነን፡ ኩሉ ሰብ ይስዕቦ፡ ሓላፊ እውን። ኣስራሒኻ ዘድልየካ መከላኸሊ ናውቲ ብነጻ ክህበካ ኣለዎ። ዘይገጥመካ ናውቲ ጽቡቕ ኣይከላኸለካን። ስለዚ ናይ ዓቐንካ ሕተት፡ «Heb je dit ook in mijn maat?»።', f: 'ሕጊ ብዛዕባ ሄልመት፡ ጫማን ጓንትን ሓሳብ ጥራይ ኣይኮነን፡ ኩሉ ሰብ ይስዕቦ፡ ሓላፊ እውን። ኣስራሒኺ ዘድልየኪ መከላኸሊ ናውቲ ብነጻ ክህበኪ ኣለዎ። ዘይገጥመኪ ናውቲ ጽቡቕ ኣይከላኸለክን። ስለዚ ናይ ዓቐንኪ ሕተቲ፡ «Heb je dit ook in mijn maat?»።' },
    'c.gear.p': 'ጓንተይ ተበላሽዩ። ሓድሽ ካበይ ክረኽብ እኽእል?',
    'c.gear.s': { m: 'ጓንትኻ ተቐዲዱ። እንታይ ትገብር?', f: 'ጓንትኺ ተቐዲዱ። እንታይ ትገብሪ?', x: 'ጓንትኹም ተቐዲዱ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.o1': { m: 'ንተቖጻጻሪኻ ሓድሽ ጓንቲ ሕተቶ።', f: 'ንተቖጻጻሪኺ ሓድሽ ጓንቲ ሕተትዮ።' },
    'c.gear.o2': { m: 'ብዘይ ጓንቲ ስራሕካ ቀጽል።', f: 'ብዘይ ጓንቲ ስራሕኪ ቀጽሊ።', x: 'ብዘይ ጓንቲ ስራሕኩም ቀጽሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.o3': { m: 'ብስቕታ ብገንዘብካ ሓድሽ ጓንቲ ግዛእ።', f: 'ብስቕታ ብገንዘብኪ ሓድሽ ጓንቲ ግዝኢ።', x: 'ብስቕታ ብገንዘብኩም ሓድሽ ጓንቲ ግዝኡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.gear.w': { m: 'መከላኸሊ ናውቲ ምሃብ ዕማም ኣስራሒ እዩ። ምሕታቱ ልሙድ እዩ፡ ንድሕንነት ብዕቱብ ከም ትርእዮ ድማ የርኢ።', f: 'መከላኸሊ ናውቲ ምሃብ ዕማም ኣስራሒ እዩ። ምሕታቱ ልሙድ እዩ፡ ንድሕንነት ብዕቱብ ከም ትርእይዮ ድማ የርኢ።' },
    'c.unsafe': { m: 'ሓደገኛ እንተኾይኑ ተዛረብ', f: 'ሓደገኛ እንተኾይኑ ተዛረቢ', x: 'ሓደገኛ እንተኾይኑ ተዛረቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.b': { m: 'ገለ ነገር ሓደገኛ እንተኾይኑ፡ ብኡብኡ ተዛረብ፡ ንሓላፊኻ እውን። ብሓቂ ሓደገኛ ዝኾነ ስራሕ ከተቋርጽ ትኽእል ኢኻ። ሓደጋታትን ቁሩብ ተሪፉዎም ዝነበሩ ሓደጋታትን ሕበር፡ ንኣሽቱ እንተኾኑ እውን።', f: 'ገለ ነገር ሓደገኛ እንተኾይኑ፡ ብኡብኡ ተዛረቢ፡ ንሓላፊኺ እውን። ብሓቂ ሓደገኛ ዝኾነ ስራሕ ከተቋርጺ ትኽእሊ ኢኺ። ሓደጋታትን ቁሩብ ተሪፉዎም ዝነበሩ ሓደጋታትን ሕበሪ፡ ንኣሽቱ እንተኾኑ እውን።', x: 'ገለ ነገር ሓደገኛ እንተኾይኑ፡ ብኡብኡ ተዛረቡ፡ ንሓላፊኹም እውን። ብሓቂ ሓደገኛ ዝኾነ ስራሕ ከተቋርጹ ትኽእሉ ኢኹም። ሓደጋታትን ቁሩብ ተሪፉዎም ዝነበሩ ሓደጋታትን ሕበሩ፡ ንኣሽቱ እንተኾኑ እውን።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.p': 'ደው በል! እዚ ውሑስ ኣይኮነን።',
    'c.unsafe.s': { m: 'ሓደ ፓለት ኣዝዩ ብልዕሊ ተደሪቡ ክወድቕ ቁሩብ ተሪፉዎ። ዝተጎድአ ሰብ የለን። እንታይ ትገብር?', f: 'ሓደ ፓለት ኣዝዩ ብልዕሊ ተደሪቡ ክወድቕ ቁሩብ ተሪፉዎ። ዝተጎድአ ሰብ የለን። እንታይ ትገብሪ?', x: 'ሓደ ፓለት ኣዝዩ ብልዕሊ ተደሪቡ ክወድቕ ቁሩብ ተሪፉዎ። ዝተጎድአ ሰብ የለን። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.o1': { m: 'ንብጾት ስራሕ ኣጠንቅቕ፡ ንተቖጻጻሪኻ ድማ ንገሮ።', f: 'ንብጾት ስራሕ ኣጠንቅቒ፡ ንተቖጻጻሪኺ ድማ ንገርዮ።' },
    'c.unsafe.o2': { m: 'ገለ ስለ ዘየጋጠመ፡ ገለ ኣይትበል።', f: 'ገለ ስለ ዘየጋጠመ፡ ገለ ኣይትበሊ።', x: 'ገለ ስለ ዘየጋጠመ፡ ገለ ኣይትበሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.o3': { m: 'ነቲ ፓለት ባዕልኻ ኣዐርዮ፡ ንሓደ እኳ ኣይትንገር።', f: 'ነቲ ፓለት ባዕልኺ ኣዐርይዮ፡ ንሓደ እኳ ኣይትንገሪ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.unsafe.w': { m: 'ቁሩብ ተሪፉዎ ዝነበረ ሓደጋ መጠንቀቕታ እዩ። ምሕባሩ ሓቀኛ ሓደጋ ንምክልኻል ይሕግዝ። ኣስራሒኻ ብሰንኪ ምሕባርካ ክቐጽዓካ ኣይፍቀዶን።', f: 'ቁሩብ ተሪፉዎ ዝነበረ ሓደጋ መጠንቀቕታ እዩ። ምሕባሩ ሓቀኛ ሓደጋ ንምክልኻል ይሕግዝ። ኣስራሒኺ ብሰንኪ ምሕባርኪ ክቐጽዓኪ ኣይፍቀዶን።', x: 'ቁሩብ ተሪፉዎ ዝነበረ ሓደጋ መጠንቀቕታ እዩ። ምሕባሩ ሓቀኛ ሓደጋ ንምክልኻል ይሕግዝ። ኣስራሒኹም ብሰንኪ ምሕባርኩም ክቐጽዓኩም ኣይፍቀዶን።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm': { m: 'ደወል ሓደጋ ይድውል: ደው በል፡ ናብ ደገ ውጻእ', f: 'ደወል ሓደጋ ይድውል: ደው በሊ፡ ናብ ደገ ውጽኢ', x: 'ደወል ሓደጋ ይድውል: ደው በሉ፡ ናብ ደገ ውጽኡ' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.b': { m: 'ኣብ ናይ መጀመርታ መዓልትኻ፡ መውጽኢታት ህጹጽ ግዜን ቦታ ምእካብን ኣበይ ከም ዘለዉ ሕተት። ደወል ሓደጋ ምስ ደወለ፡ ብቕጽበት ስራሕካ ደው ኣብሎ። ንብረትካ ግደፎ፡ ብመገዲ ምህዳም ናብ ደገ ውጻእ። መደያይቦ ተጠቐም፡ ሊፍት ፈጺምካ ኣይትጠቐም። ኣብ ቦታ ምእካብ መን ከም ዝወጸ ይቖጽሩ፡ ስለዚ ኣብኡ ጽናሕ። ልምምድ ጥራይ እንተመሰለካ እውን ውጻእ።', f: 'ኣብ ናይ መጀመርታ መዓልትኺ፡ መውጽኢታት ህጹጽ ግዜን ቦታ ምእካብን ኣበይ ከም ዘለዉ ሕተቲ። ደወል ሓደጋ ምስ ደወለ፡ ብቕጽበት ስራሕኪ ደው ኣብልዮ። ንብረትኪ ግደፍዮ፡ ብመገዲ ምህዳም ናብ ደገ ውጽኢ። መደያይቦ ተጠቐሚ፡ ሊፍት ፈጺምኪ ኣይትጠቐሚ። ኣብ ቦታ ምእካብ መን ከም ዝወጸ ይቖጽሩ፡ ስለዚ ኣብኡ ጽንሒ። ልምምድ ጥራይ እንተመሰለኪ እውን ውጽኢ።', x: 'ኣብ ናይ መጀመርታ መዓልትኹም፡ መውጽኢታት ህጹጽ ግዜን ቦታ ምእካብን ኣበይ ከም ዘለዉ ሕተቱ። ደወል ሓደጋ ምስ ደወለ፡ ብቕጽበት ስራሕኩም ደው ኣብልዎ። ንብረትኩም ግደፍዎ፡ ብመገዲ ምህዳም ናብ ደገ ውጽኡ። መደያይቦ ተጠቐሙ፡ ሊፍት ፈጺምኩም ኣይትጠቐሙ። ኣብ ቦታ ምእካብ መን ከም ዝወጸ ይቖጽሩ፡ ስለዚ ኣብኡ ጽንሑ። ልምምድ ጥራይ እንተመሰለኩም እውን ውጽኡ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.p': { m: 'ሓድሽ እየ። ቦታ ምእካብ ኣበይ እዩ?', f: 'ሓዳስ እየ። ቦታ ምእካብ ኣበይ እዩ?', x: 'ሎሚ ናይ መጀመርታ መዓልተይ እዩ። ቦታ ምእካብ ኣበይ እዩ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.s': { m: 'ደወል ሓዊ ይድውል ኣሎ። ሓደ ስራሕ ክትውድእ ቁሩብ ተሪፉካ። እንታይ ትገብር?', f: 'ደወል ሓዊ ይድውል ኣሎ። ሓደ ስራሕ ክትውድኢ ቁሩብ ተሪፉኪ። እንታይ ትገብሪ?', x: 'ደወል ሓዊ ይድውል ኣሎ። ሓደ ስራሕ ክትውድኡ ቁሩብ ተሪፉኩም። እንታይ ትገብሩ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o1': 'ብቕጽበት ደው ምባልን ናብ ቦታ ምእካብ ምኻድን።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o2': 'ቅድም ነቲ ስራሕ ምውዳእ፡ ደሓር ናብ ደገ ምውጻእ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.o3': 'ቅድም ጃኬትን ተሌፎንን ካብ ሎከር ምውሳድ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.alarm.w': 'ትኪ ቀልጢፉ ይዝርጋሕ፡ ስለዚ ብቕጽበት ምውጻእ የድሊ። ንብረት ክጽበ ይኽእል። ኣብ ቦታ ምእካብ ንኹሉ ሰብ ይቖጽሩ፡ ከምኡ ድማ ሓደ እኳ ኣብ ውሽጢ ክድለ ኣየድልን።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident': { m: 'ኩሉ ሓደጋ ሕበር', f: 'ኩሉ ሓደጋ ሕበሪ', x: 'ኩሉ ሓደጋ ሕበሩ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.b': { m: 'ንተቖጻጻሪኻ ወይ ንBHV’er (ኣብ ትካል ቀዳማይ ረዲኤት ዝህብ ሰብ) ብዛዕባ ኩሉ ሓደጋ ንገሮም፡ ንእሽቶ እንተኾነ እውን። ብኤጀንሲ ስራሕ ኢኻ ትሰርሕ? ነቲ ኤጀንሲ እውን ንገሮ። ኣብ ህጹጽ ኩነታት፡ ቅድም ናብ 112 ደውል። እቲ ሓደጋ ዝኣጋጠመሉ ትካል ከቢድ ሓደጋ ናብ Nederlandse Arbeidsinspectie ክሕብር ኣለዎ (ብኤጀንሲ ስራሕ እንተ ሰሪሕካ እውን)፡ ሓደ ሰብ እንተሞይቱ፡ ንሓዋሩ እንተተጎድአ ወይ ኣብ ሆስፒታል ክጸንሕ እንተኣለዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ንተቖጻጻሪኺ ወይ ንBHV’er (ኣብ ትካል ቀዳማይ ረዲኤት ዝህብ ሰብ) ብዛዕባ ኩሉ ሓደጋ ንገርዮም፡ ንእሽቶ እንተኾነ እውን። ብኤጀንሲ ስራሕ ኢኺ ትሰርሒ? ነቲ ኤጀንሲ እውን ንገርዮ። ኣብ ህጹጽ ኩነታት፡ ቅድም ናብ 112 ደውሊ። እቲ ሓደጋ ዝኣጋጠመሉ ትካል ከቢድ ሓደጋ ናብ Nederlandse Arbeidsinspectie ክሕብር ኣለዎ (ብኤጀንሲ ስራሕ እንተ ሰሪሕኪ እውን)፡ ሓደ ሰብ እንተሞይቱ፡ ንሓዋሩ እንተተጎድአ ወይ ኣብ ሆስፒታል ክጸንሕ እንተኣለዎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.accident.p': 'ብጻይ ስራሐይ ተጎዲኡ። ቀዳማይ ረዲኤት ዝህብ ሰብ ኣበይ ኣሎ?',
    'c.accident.s': { m: 'ክትልዕል ከለኻ ሕቖኻ ይጉዳእ። ስራሕካ ከይትስእን ትፈርህ። እንታይ ትገብር?', f: 'ክትልዕሊ ከለኺ ሕቖኺ ይጉዳእ። ስራሕኪ ከይትስእኒ ትፈርሂ። እንታይ ትገብሪ?', x: 'ክትልዕሉ ከለኹም ሕቖኹም ይጉዳእ። ስራሕኩም ከይትስእኑ ትፈርሁ። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.o1': { m: 'በታ መዓልቲ እቲኣ ንተቖጻጻሪኻ ሕበሮ።', f: 'በታ መዓልቲ እቲኣ ንተቖጻጻሪኺ ሕበርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.accident.o2': { m: 'ስራሕካ ከይትስእን፡ ገለ ኣይትበል።', f: 'ስራሕኪ ከይትስእኒ፡ ገለ ኣይትበሊ።', x: 'ስራሕኩም ከይትስእኑ፡ ገለ ኣይትበሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.o3': { m: 'ተጸበ፡ እቲ ቃንዛ ባዕሉ ዶ ይሓልፍ ርአ።', f: 'ተጸበዪ፡ እቲ ቃንዛ ባዕሉ ዶ ይሓልፍ ርኣዪ።' },
    'c.accident.w': { m: 'በታ ዝኣጋጠመላ መዓልቲ ሕበሮ፡ ንእሽቶ እንተመሰለ እውን፡ ቃንዛ ደሓር ክገድድ ይኽእል እዩ። ኣስራሒኻ ብሰንኪ ምሕባርካ ክቐጽዓካ ኣይፍቀዶን። ብኤጀንሲ ስራሕ ትሰርሕ ዲኻ? ነቲ ኤጀንሲ እውን ንገሮ።', f: 'በታ ዝኣጋጠመላ መዓልቲ ሕበርዮ፡ ንእሽቶ እንተመሰለ እውን፡ ቃንዛ ደሓር ክገድድ ይኽእል እዩ። ኣስራሒኺ ብሰንኪ ምሕባርኪ ክቐጽዓኪ ኣይፍቀዶን። ብኤጀንሲ ስራሕ ትሰርሒ ዲኺ? ነቲ ኤጀንሲ እውን ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.notyet': { m: 'ገና ኣይተማሃርካዮን? ንገር', f: 'ገና ኣይተማሃርክዮን? ንገሪ' },
    'c.notyet.b': { m: 'እቲ እትሰርሓሉ ትካል ብኸመይ ብድሕንነት ክትሰርሕ ከም ዘለካ ክገልጸልካ ኣለዎ። ዝኾነ ሰብ ዘይመሃረካ ማሽን ወይ ፎርክሊፍት ኣይትጠቐም። «Dit heb ik nog niet geleerd» ምባል ኣብዚ ልሙድ እዩ፡ ብድሕንነት ከም እትሰርሕ የርኢ።', f: 'እቲ እትሰርሕሉ ትካል ብኸመይ ብድሕንነት ክትሰርሒ ከም ዘለኪ ክገልጸልኪ ኣለዎ። ዝኾነ ሰብ ዘይመሃረኪ ማሽን ወይ ፎርክሊፍት ኣይትጠቐሚ። «Dit heb ik nog niet geleerd» ምባል ኣብዚ ልሙድ እዩ፡ ብድሕንነት ከም እትሰርሒ የርኢ።' },
    'c.notyet.p': 'እዚ ገና ኣይተማሃርክዎን። ገይርካ ከተርእየኒ ትኽእል ዲኻ?',
    'c.notyet.s': { m: 'ብዙሕ ስራሕ ዘለዎ ንግሆ። ተቖጻጻሪኻ «Pak jij even de heftruck? Het is makkelijk.» ይብለካ። ፎርክሊፍት ዘዊርካ ኣይትፈልጥን። እንታይ ትገብር?', f: 'ብዙሕ ስራሕ ዘለዎ ንግሆ። ተቖጻጻሪኺ «Pak jij even de heftruck? Het is makkelijk.» ይብለኪ። ፎርክሊፍት ዘዊርኪ ኣይትፈልጢን። እንታይ ትገብሪ?' },
    'c.notyet.o1': { m: 'ከም ዘይተማሃርካዮ ንገር። መምርሒ ሕተት።', f: 'ከም ዘይተማሃርክዮ ንገሪ። መምርሒ ሕተቲ።' },
    'c.notyet.o2': { m: 'ሕጂ ሓንሳእ ጥራይ ቀስ ኢልካን ተጠንቂቕካን ዘውር።', f: 'ሕጂ ሓንሳእ ጥራይ ቀስ ኢልኪን ተጠንቂቕኪን ዘውሪ።' },
    'c.notyet.o3': { m: '«ja» በል፡ ጽቡቕ ክኸውን ድማ ተስፋ ግበር።', f: '«ja» በሊ፡ ጽቡቕ ክኸውን ድማ ተስፋ ግበሪ።', x: '«ja» በሉ፡ ጽቡቕ ክኸውን ድማ ተስፋ ግበሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.notyet.w': { m: 'ብዘይ መምርሒ ፎርክሊፍት ምዝዋር ንዓኻን ንኻልኦትን ሓደገኛ እዩ። መምርሒ ወይ ካልእ ስራሕ ምሕታት ልሙድ እዩ፡ ስራሕ ምስ በዝሐ እውን።', f: 'ብዘይ መምርሒ ፎርክሊፍት ምዝዋር ንዓኺን ንኻልኦትን ሓደገኛ እዩ። መምርሒ ወይ ካልእ ስራሕ ምሕታት ልሙድ እዩ፡ ስራሕ ምስ በዝሐ እውን።' },
    'c.direct': 'ቀጥታ ምዝራብ ዘይምኽባር ኣይኮነን',
    'c.direct.b': { m: 'ሆላንዳውያን ብጾት ስራሕ መብዛሕትኡ ግዜ ብጣዕሚ ብቀጥታ ይዛረቡ፡ ከም «Dat is fout» ወይ «Doe het zo»። ብተለምዶ ብኽፉእ ሓሳብ ኣይብልዎን። ንስኻ እውን ሕያዋይ ክሳዕ ዝኾንካ ብቀጥታ ክትዛረብ ትኽእል ኢኻ።', f: 'ሆላንዳውያን ብጾት ስራሕ መብዛሕትኡ ግዜ ብጣዕሚ ብቀጥታ ይዛረቡ፡ ከም «Dat is fout» ወይ «Doe het zo»። ብተለምዶ ብኽፉእ ሓሳብ ኣይብልዎን። ንስኺ እውን ሕያወይቲ ክሳዕ ዝኾንኪ ብቀጥታ ክትዛረቢ ትኽእሊ ኢኺ።' },
    'c.direct.p': 'ሕራይ፡ እሞ ከመይ ክግበር ኣለዎ?',
    'c.direct.s': { m: 'ሓደ ብጻይ ስራሕ «Nee, dat is fout. Die doos moet daar.» ይብል። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ «Nee, dat is fout. Die doos moet daar.» ይብል። እንታይ ትገብሪ?', x: 'ሓደ ብጻይ ስራሕ «Nee, dat is fout. Die doos moet daar.» ይብል። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.direct.o1': { m: 'ከመይ ክግበር ከም ዘለዎ ሕተት፡ ነቲ ሳጹን ድማ ቦታኡ ቀይሮ።', f: 'ከመይ ክግበር ከም ዘለዎ ሕተቲ፡ ነቲ ሳጹን ድማ ቦታኡ ቀይርዮ።' },
    'c.direct.o2': { m: 'ብዙሕ ግዜ ይቕረታ ሕተት፡ ብጻይ ስራሕካ ተቖጢዑ ኣሎ።', f: 'ብዙሕ ግዜ ይቕረታ ሕተቲ፡ ብጻይ ስራሕኪ ተቖጢዑ ኣሎ።', x: 'ብዙሕ ግዜ ይቕረታ ሕተቱ፡ ብጻይ ስራሕኩም ተቖጢዑ ኣሎ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.direct.o3': { m: 'ዋላ ሓንቲ ኣይትበል፡ ነቲ ሳንዱቕ ኣብ ዘለዎ ግደፎ።', f: 'ዋላ ሓንቲ ኣይትበሊ፡ ነቲ ሳንዱቕ ኣብ ዘለዎ ግደፍዮ።' },
    'c.direct.w': { m: 'ቀጥታ ርእይቶ ብዛዕባ እቲ ስራሕ እዩ፡ ብዛዕባኻ ኣይኮነን። «hoe moet het dan?» ምሕታት ክትመሃር ከም ትደሊ የርኢ።', f: 'ቀጥታ ርእይቶ ብዛዕባ እቲ ስራሕ እዩ፡ ብዛዕባኺ ኣይኮነን። «hoe moet het dan?» ምሕታት ክትመሃሪ ከም ትደልዪ የርኢ።' },
    'c.limits': { m: 'ኣዝዩ ከቢድ እንተኾይኑ ተዛረብ', f: 'ኣዝዩ ከቢድ እንተኾይኑ ተዛረቢ', x: 'ኣዝዩ ከቢድ እንተኾይኑ ተዛረቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.limits.b': { m: 'ኩሉ ንበይንኻ ከተልዕል ዝጽበየካ ሰብ የለን። «dit is te zwaar» ምባልን ሓገዝ ወይ መሳርሒ ምሕታትን ብልሒ እዩ፡ ድኽመት ኣይኮነን። ንሕቖኻ ይሕልዎ።', f: 'ኩሉ ንበይንኺ ከተልዕሊ ዝጽበየኪ ሰብ የለን። «dit is te zwaar» ምባልን ሓገዝ ወይ መሳርሒ ምሕታትን ብልሒ እዩ፡ ድኽመት ኣይኮነን። ንሕቖኺ ይሕልዎ።', x: 'ኩሉ ንበይንኹም ከተልዕሉ ዝጽበየኩም ሰብ የለን። «dit is te zwaar» ምባልን ሓገዝ ወይ መሳርሒ ምሕታትን ብልሒ እዩ፡ ድኽመት ኣይኮነን። ንሕቖኹም ይሕልዎ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.limits.p': 'እዚ ሳጹን ኣዝዩ ከቢድ እዩ። ንሓጺር ግዜ ክትሕግዘኒ ትኽእል ዶ?',
    'c.limits.s': { m: 'ንዓኻ ኣዝዩ ከቢድ ዝኾነ ሳጹን ከተልዕል ኣለካ። እንታይ ትገብር?', f: 'ንዓኺ ኣዝዩ ከቢድ ዝኾነ ሳጹን ከተልዕሊ ኣለኪ። እንታይ ትገብሪ?', x: 'ንዓኹም ኣዝዩ ከቢድ ዝኾነ ሳጹን ከተልዕሉ ኣለኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.limits.o1': { m: 'ንብጻይ ስራሕ ሓገዝ ሕተት ወይ ዓረብያ ተጠቐም።', f: 'ንብጻይ ስራሕ ሓገዝ ሕተቲ ወይ ዓረብያ ተጠቐሚ።', x: 'ንብጻይ ስራሕ ሓገዝ ሕተቱ ወይ ዓረብያ ተጠቐሙ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.limits.o2': { m: 'ሰብ ድኹም ኢኻ ከይመስሎ፡ ብዘየገድስ ኣልዕሎ።', f: 'ሰብ ድኽምቲ ኢኺ ከይመስሎ፡ ብዘየገድስ ኣልዕልዮ።' },
    'c.limits.o3': { m: 'ኣብኡ ግደፎ እሞ ገለ ኣይትበል።', f: 'ኣብኡ ግደፍዮ እሞ ገለ ኣይትበሊ።' },
    'c.limits.w': 'ሓገዝ ምሕታት ልሙድ ናይ ጉጅለ ስራሕ እዩ። ዝተጎድአ ሕቖ ካብ ናይ ሓንቲ ደቒቕ ሓገዝ ብዙሕ ዝያዳ ዋጋ የኽፍል።',
    'c.time': { m: 'ብግዜ ማለት ቁሩብ ኣቐዲምካ', f: 'ብግዜ ማለት ቁሩብ ኣቐዲምኪ', x: 'ብግዜ ማለት ቁሩብ ኣቐዲምኩም' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.time.b': { m: 'ብግዜ ምብጻሕ ኣዝዩ ኣገዳሲ እዩ። ብዙሓት ሰባት ፈረቓ ስራሕ ቅድሚ ምጅማሩ ሓሙሽተ ወይ ዓሰርተ ደቓይቕ ኣቐዲሞም ይመጹ። ክትድንጒ እንተኾንካ፡ ፈረቓኻ ቅድሚ ምጅማሩ መልእኽቲ ስደድ ወይ ደውል፡ ድሕሪኡ ኣይኮነን።', f: 'ብግዜ ምብጻሕ ኣዝዩ ኣገዳሲ እዩ። ብዙሓት ሰባት ፈረቓ ስራሕ ቅድሚ ምጅማሩ ሓሙሽተ ወይ ዓሰርተ ደቓይቕ ኣቐዲሞም ይመጹ። ክትድንጊ እንተኾንኪ፡ ፈረቓኺ ቅድሚ ምጅማሩ መልእኽቲ ስደዲ ወይ ደውሊ፡ ድሕሪኡ ኣይኮነን።' },
    'c.time.p': 'ይቕሬታ፡ ኣውቶቡስ ደንጉዩ። ሰዓት 8:00 ኣብኡ ክኸውን እየ።',
    'c.time.s': { m: 'ኣውቶቡስካ ደንጉዩ፡ 15 ደቒቕ ክትድንጒ ኢኻ። እንታይ ትገብር?', f: 'ኣውቶቡስኪ ደንጉዩ፡ 15 ደቒቕ ክትድንጊ ኢኺ። እንታይ ትገብሪ?' },
    'c.time.o1': { m: 'ብኡብኡ ንተቖጻጻሪኻ ሕበሮ።', f: 'ብኡብኡ ንተቖጻጻሪኺ ሕበርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.time.o2': { m: 'ምስ በጻሕካ ግለጾ።', f: 'ምስ በጻሕኪ ግለጽዮ።' },
    'c.time.o3': { m: 'ሎሚ ጨሪስካ ናብ ስራሕ ኣይትኺድ።', f: 'ሎሚ ጨሪስኪ ናብ ስራሕ ኣይትኺዲ።', x: 'ሎሚ ጨሪስኩም ናብ ስራሕ ኣይትኺዱ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.time.w': { m: 'ኣቐዲምካ ምሕባር ንጉጅለ ክውድብ የኽእሎ። ብዘይ መልእኽቲ ምድንጓይ ካብቲ ምድንጓይ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ።', f: 'ኣቐዲምኪ ምሕባር ንጉጅለ ክውድብ የኽእሎ። ብዘይ መልእኽቲ ምድንጓይ ካብቲ ምድንጓይ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ።', x: 'ኣቐዲምኩም ምሕባር ንጉጅለ ክውድብ የኽእሎ። ብዘይ መልእኽቲ ምድንጓይ ካብቲ ምድንጓይ ባዕሉ ብዙሕ ዝኸፍአ ኮይኑ ይርአ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.sick': { m: 'ሕማም ከመይ ትሕብር', f: 'ሕማም ከመይ ትሕብሪ', x: 'ሕማም ከመይ ትሕብሩ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.sick.b': { m: 'ፈረቓኻ ቅድሚ ምጅማሩ ባዕልኻ ንተቖጻጻሪኻ ደውል፡ ትካልካ ካልእ ሕጊ እንተ ዘይብሉ። ብኤጀንሲ ስራሕ ኢኻ ትሰርሕ? ነቲ ኤጀንሲ እውን ንገሮ። እንታይ ሕማም ከም ዘለካ ክትነግር ኣየድልየካን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።', f: 'ፈረቓኺ ቅድሚ ምጅማሩ ባዕልኺ ንተቖጻጻሪኺ ደውሊ፡ ትካልኪ ካልእ ሕጊ እንተ ዘይብሉ። ብኤጀንሲ ስራሕ ኢኺ ትሰርሒ? ነቲ ኤጀንሲ እውን ንገርዮ። እንታይ ሕማም ከም ዘለኪ ክትነግሪ ኣየድልየክን። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።' },
    'c.sick.p': { m: 'ሕሙም እየ። ሎሚ ናብ ስራሕ ክመጽእ ኣይክእልን እየ።', f: 'ሕምምቲ እየ። ሎሚ ናብ ስራሕ ክመጽእ ኣይክእልን እየ።' },
    'c.sick.s': { m: 'ምስ ረስኒ ካብ ድቃስ ትበራበር። ፈረቓኻ ሰዓት 7:00 ይጅምር። እንታይ ትገብር?', f: 'ምስ ረስኒ ካብ ድቃስ ትበራበሪ። ፈረቓኺ ሰዓት 7:00 ይጅምር። እንታይ ትገብሪ?', x: 'ምስ ረስኒ ካብ ድቃስ ትበራበሩ። ፈረቓኹም ሰዓት 7:00 ይጅምር። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.sick.o1': { m: 'ቅድሚ ሰዓት 7:00 ንተቖጻጻሪኻ ደውል።', f: 'ቅድሚ ሰዓት 7:00 ንተቖጻጻሪኺ ደውሊ።', x: 'ቅድሚ ሰዓት 7:00 ንተቖጻጻሪኹም ደውሉ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.sick.o2': { m: 'ሓደ ብጻይ ስራሕ ደሓር ንሓላፊ ክነግሮ ሕተቶ።', f: 'ሓደ ብጻይ ስራሕ ደሓር ንሓላፊ ክነግሮ ሕተትዮ።' },
    'c.sick.o3': { m: 'ኣብ ገዛ ጽናሕ እሞ ጽባሕ ደውል።', f: 'ኣብ ገዛ ጽንሒ እሞ ጽባሕ ደውሊ።', x: 'ኣብ ገዛ ጽንሑ እሞ ጽባሕ ደውሉ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.sick.w': { m: 'ኣብ መብዛሕትኦም ሆላንዳውያን ቦታታት ስራሕ፡ ባዕልኻን ብግዜን ሕማም ምሕባር እዩ እቲ ሕጊ። ኣስራሒኻ ክንደይ ግዜ ከም ዝወስድ ክሓተካ ይኽእል፡ እንታይ ሕማም ምዃኑ ግን ኣይኮነን።', f: 'ኣብ መብዛሕትኦም ሆላንዳውያን ቦታታት ስራሕ፡ ባዕልኺን ብግዜን ሕማም ምሕባር እዩ እቲ ሕጊ። ኣስራሒኺ ክንደይ ግዜ ከም ዝወስድ ክሓተኪ ይኽእል፡ እንታይ ሕማም ምዃኑ ግን ኣይኮነን።' },
    'c.speakup': { m: 'ዘሸግረካ ነገር ተዛረብ', f: 'ዘሸግረኪ ነገር ተዛረቢ', x: 'ዘሸግረኩም ነገር ተዛረቡ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.speakup.b': { m: 'ኣብዚ ገለ ነገር ከሸግረካ ከሎ ብህድኣት ምዝራብ ልሙድን ዝኽበርን እዩ። ቅድም ኣብ ህዱእ ግዜ ምስቲ ሰብ ተዛረብ። ብ«ik» ዝጅምሩ ሓረጋት ተጠቐም፡ «Ik vind het niet fijn dat ...»። እንተ ዘይሓገዘ፡ ምስ ተቖጻጻሪኻ ተዛረብ።', f: 'ኣብዚ ገለ ነገር ከሸግረኪ ከሎ ብህድኣት ምዝራብ ልሙድን ዝኽበርን እዩ። ቅድም ኣብ ህዱእ ግዜ ምስቲ ሰብ ተዛረቢ። ብ«ik» ዝጅምሩ ሓረጋት ተጠቐሚ፡ «Ik vind het niet fijn dat ...»። እንተ ዘይሓገዘ፡ ምስ ተቖጻጻሪኺ ተዛረቢ።', x: 'ኣብዚ ገለ ነገር ከሸግረኩም ከሎ ብህድኣት ምዝራብ ልሙድን ዝኽበርን እዩ። ቅድም ኣብ ህዱእ ግዜ ምስቲ ሰብ ተዛረቡ። ብ«ik» ዝጅምሩ ሓረጋት ተጠቐሙ፡ «Ik vind het niet fijn dat ...»። እንተ ዘይሓገዘ፡ ምስ ተቖጻጻሪኹም ተዛረቡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.speakup.p': 'ገለ ነገር የሸግረኒ ኣሎ። ንሓጺር ግዜ ክንዘራረብ ንኽእል ዶ?',
    'c.speakup.s': { m: 'ሓደ ብጻይ ስራሕ ኩሉ ግዜ ነቲ ከቢድ ስራሕ ንዓኻ ይገድፈልካ። እዚ የሸግረካ። እንታይ ትገብር?', f: 'ሓደ ብጻይ ስራሕ ኩሉ ግዜ ነቲ ከቢድ ስራሕ ንዓኺ ይገድፈልኪ። እዚ የሸግረኪ። እንታይ ትገብሪ?', x: 'ሓደ ብጻይ ስራሕ ኩሉ ግዜ ነቲ ከቢድ ስራሕ ንዓኹም ይገድፈልኩም። እዚ የሸግረኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.speakup.o1': { m: 'ንብጻይካ እንታይ ከም ዘሸግረካ ንገሮ።', f: 'ንብጻይኪ እንታይ ከም ዘሸግረኪ ንገርዮ።' }, // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.speakup.o2': { m: 'ስቕ በል እሞ ቀስ ብቐስ ዝያዳ ተቖጥዕ።', f: 'ስቕ በሊ እሞ ቀስ ብቐስ ዝያዳ ተቖጥዒ።', x: 'ስቕ በሉ እሞ ቀስ ብቐስ ዝያዳ ተቖጥዑ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.speakup.o3': { m: 'ብዛዕባኡ ንኹሎም ካልኦት ብጾት ስራሕ ኣማርር።', f: 'ብዛዕባኡ ንኹሎም ካልኦት ብጾት ስራሕ ኣማርሪ።', x: 'ብዛዕባኡ ንኹሎም ካልኦት ብጾት ስራሕ ኣማርሩ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.speakup.w': { m: 'ሆላንዳውያን ብጾት ስራሕ ብተለምዶ ብቀጥታ ክሰምዕዎ ይመርጹ። ኣቐዲምካን ብህድኣትን ምዝራብ ንዝምድና ጽቡቕ ይገብሮ።', f: 'ሆላንዳውያን ብጾት ስራሕ ብተለምዶ ብቀጥታ ክሰምዕዎ ይመርጹ። ኣቐዲምኪን ብህድኣትን ምዝራብ ንዝምድና ጽቡቕ ይገብሮ።' },
    'c.no': '«Afspraak is afspraak» (ስምምዕ ስምምዕ እዩ)',
    'c.no.b': { m: '«ja» ክትብል ከለኻ፡ ሰባት ይኣምኑሉ፡ ስምምዕ ስምምዕ እዩ። ስለዚ ገለ ነገር ክትገብር እንተ ዘይከኣልካ «nee» ወይ «dat lukt niet» ምባል ጸገም የብሉን። ብግዜ ንገር፡ እንተ ኽኢልካ ድማ ካልእ ኣማራጺ ኣቕርብ።', f: '«ja» ክትብሊ ከለኺ፡ ሰባት ይኣምኑሉ፡ ስምምዕ ስምምዕ እዩ። ስለዚ ገለ ነገር ክትገብሪ እንተ ዘይከኣልኪ «nee» ወይ «dat lukt niet» ምባል ጸገም የብሉን። ብግዜ ንገሪ፡ እንተ ኽኢልኪ ድማ ካልእ ኣማራጺ ኣቕርቢ።', x: '«ja» ክትብሉ ከለኹም፡ ሰባት ይኣምኑሉ፡ ስምምዕ ስምምዕ እዩ። ስለዚ ገለ ነገር ክትገብሩ እንተ ዘይከኣልኩም «nee» ወይ «dat lukt niet» ምባል ጸገም የብሉን። ብግዜ ንገሩ፡ እንተ ኽኢልኩም ድማ ካልእ ኣማራጺ ኣቕርቡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.no.p': 'ኣይፋል፡ ሎሚ ኣይኽእልን እየ። ጽባሕ ግን ይኽእል እየ።',
    'c.no.s': { m: 'ተቖጻጻሪኻ ቀዳም ተወሳኺ ሰዓት ክትሰርሕ ትኽእል እንተኾንካ ይሓተካ። ኣይትኽእልን ኢኻ። እንታይ ትገብር?', f: 'ተቖጻጻሪኺ ቀዳም ተወሳኺ ሰዓት ክትሰርሒ ትኽእሊ እንተኾንኪ ይሓተኪ። ኣይትኽእሊን ኢኺ። እንታይ ትገብሪ?' },
    'c.no.o1': { m: 'ኣይፋል በል እሞ ካልእ መዓልቲ ኣቕርብ።', f: 'ኣይፋል በሊ እሞ ካልእ መዓልቲ ኣቕርቢ።', x: 'ኣይፋል በሉ እሞ ካልእ መዓልቲ ኣቕርቡ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.no.o2': { m: 'እወ በል እሞ ድሕሪኡ ኣይትምጻእ።', f: 'እወ በሊ እሞ ድሕሪኡ ኣይትምጽኢ።', x: 'እወ በሉ እሞ ድሕሪኡ ኣይትምጽኡ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.no.o3': { m: 'እወ በል፡ ንሓለቓ ኣይፋል ክትብል ኣይትኽእልን ኢኻ።', f: 'እወ በሊ፡ ንሓለቓ ኣይፋል ክትብሊ ኣይትኽእልን ኢኺ።', x: 'እወ በሉ፡ ንሓለቓ ኣይፋል ክትብሉ ኣይትኽእሉን ኢኹም።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 31 okt // nagelezen AI 22 nov
    'c.no.w': { m: 'ንጹር «nee» ይኽበር። «ja» ኢልካ ዘይምምጻእ ንእምነት ብዙሕ ዝያዳ ይሰብሮ።', f: 'ንጹር «nee» ይኽበር። «ja» ኢልኪ ዘይምምጻእ ንእምነት ብዙሕ ዝያዳ ይሰብሮ።', x: 'ንጹር «nee» ይኽበር። «ja» ኢልኩም ዘይምምጻእ ንእምነት ብዙሕ ዝያዳ ይሰብሮ።' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.task': { m: 'ምስ ወዳእካ ንገር፡ ንጹር እንተ ዘይኮይኑ ሕተት', f: 'ምስ ወዳእኪ ንገሪ፡ ንጹር እንተ ዘይኮይኑ ሕተቲ', x: 'ምስ ወዳእኩም ንገሩ፡ ንጹር እንተ ዘይኮይኑ ሕተቱ' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.task.b': { m: 'ኣብ ሆላንድ ተቖጻጻሪ ብዙሕ ግዜ ዕማም ብሒደት ቃላት ይህብ። ምስ ወዳእካ ባዕልኻ ትነግሮ። ከይተረዳእካ «ja» ምባል ብዙሕ ግዜ ናብ ጌጋ የብጽሕ። ደጊምካ ምሕታት ወይ ከርእዩኻ ምሕታት ኣብዚ ልሙድ እዩ፡ ዘይትሕትና ኣይኮነን።', f: 'ኣብ ሆላንድ ተቖጻጻሪ ብዙሕ ግዜ ዕማም ብሒደት ቃላት ይህብ። ምስ ወዳእኪ ባዕልኺ ትነግርዮ። ከይተረዳእኪ «ja» ምባል ብዙሕ ግዜ ናብ ጌጋ የብጽሕ። ደጊምኪ ምሕታት ወይ ከርእዩኺ ምሕታት ኣብዚ ልሙድ እዩ፡ ዘይትሕትና ኣይኮነን።' },
    'c.task.p': 'ወዲአ! ሕጂ እንታይ ክገብር?',
    'c.task.s': { m: 'ተቖጻጻሪኻ ሓደ ዕማም ኣዝዩ ቀልጢፉ ይገልጸልካ። ፍርቁ ጥራይ ተረዲኡካ። እንታይ ትገብር?', f: 'ተቖጻጻሪኺ ሓደ ዕማም ኣዝዩ ቀልጢፉ ይገልጸልኪ። ፍርቁ ጥራይ ተረዲኡኪ። እንታይ ትገብሪ?', x: 'ተቖጻጻሪኹም ሓደ ዕማም ኣዝዩ ቀልጢፉ ይገልጸልኩም። ፍርቁ ጥራይ ተረዲኡኩም። እንታይ ትገብሩ?' }, // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.task.o1': { m: 'ደጊሙ ከርእየካ ሕተት።', f: 'ደጊሙ ከርእየኪ ሕተቲ።', x: 'ደጊሙ ከርእየኩም ሕተቱ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.task.o2': { m: 'በቲ ዝተረደኣካ ፍርቂ ጀምር።', f: 'በቲ ዝተረደኣኪ ፍርቂ ጀምሪ።', x: 'በቲ ዝተረደኣኩም ፍርቂ ጀምሩ።' }, // nagelezen (2e lezing) // x: nieuw, nalezen // nagelezen AI 22 nov
    'c.task.o3': { m: 'ሓደ ብጻይ ስራሕ ክሳዕ ዝገብሮ ተጸበ።', f: 'ሓደ ብጻይ ስራሕ ክሳዕ ዝገብሮ ተጸበዪ።' },
    'c.task.w': 'እንደገና ምሕታት ልሙድ እዩ፡ ሓንቲ ደቒቕ ጥራይ ይወስድ። ጌጋ ምእራም ግን ብዙሕ ዝያዳ ግዜ ይወስድ። መብዛሕትኦም ተቖጻጸርቲ ክልተ ግዜ ከርእዩ ይመርጹ።', // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.clear': { m: 'ቅድም እቲ ኣገዳሲ ንገር', f: 'ቅድም እቲ ኣገዳሲ ንገሪ', x: 'ቅድም እቲ ኣገዳሲ ንገሩ' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.b': { m: 'ኣብ ብዙሓት ቋንቋታት፡ ቅድም ምሉእ ዛንታ ምንጋር፡ ነቲ ቀንዲ ነጥቢ ድማ ኣብ መወዳእታ ምግላጽ ትሕትና እዩ። ኣብዚ ኣብ ስራሕ ግን ብኣንጻሩ እዩ። ቅድም እንታይ ጸገም ከም ዘሎ ወይ እንታይ ከም ዘድልየካ ንገር። ድሕሪኡ ነቲ ምኽንያት ንገር። ብህድኣት ተዛረብ፡ ድሕሪ ክልተ ወይ ሰለስተ ሓረጋት ድማ ደው በል፡ እቲ ካልእ ሰብ ገለ ክሓትት ምእንቲ ክኽእል። ኣብ ቃለ መሕትት ስራሕ እውን፡ ቅድም እቲ መልሲ፡ ድሕሪኡ ኣብነት። ቀስ ኢልካ ምዝራብ ኣብዚ ዘይምኽባር ኣይኮነን፡ ሰባት ክርድኡኻ ይሕግዝ።', f: 'ኣብ ብዙሓት ቋንቋታት፡ ቅድም ምሉእ ዛንታ ምንጋር፡ ነቲ ቀንዲ ነጥቢ ድማ ኣብ መወዳእታ ምግላጽ ትሕትና እዩ። ኣብዚ ኣብ ስራሕ ግን ብኣንጻሩ እዩ። ቅድም እንታይ ጸገም ከም ዘሎ ወይ እንታይ ከም ዘድልየኪ ንገሪ። ድሕሪኡ ነቲ ምኽንያት ንገሪ። ብህድኣት ተዛረቢ፡ ድሕሪ ክልተ ወይ ሰለስተ ሓረጋት ድማ ደው በሊ፡ እቲ ካልእ ሰብ ገለ ክሓትት ምእንቲ ክኽእል። ኣብ ቃለ መሕትት ስራሕ እውን፡ ቅድም እቲ መልሲ፡ ድሕሪኡ ኣብነት። ቀስ ኢልኪ ምዝራብ ኣብዚ ዘይምኽባር ኣይኮነን፡ ሰባት ክርድኡኺ ይሕግዝ።', x: 'ኣብ ብዙሓት ቋንቋታት፡ ቅድም ምሉእ ዛንታ ምንጋር፡ ነቲ ቀንዲ ነጥቢ ድማ ኣብ መወዳእታ ምግላጽ ትሕትና እዩ። ኣብዚ ኣብ ስራሕ ግን ብኣንጻሩ እዩ። ቅድም እንታይ ጸገም ከም ዘሎ ወይ እንታይ ከም ዘድልየኩም ንገሩ። ድሕሪኡ ነቲ ምኽንያት ንገሩ። ብህድኣት ተዛረቡ፡ ድሕሪ ክልተ ወይ ሰለስተ ሓረጋት ድማ ደው በሉ፡ እቲ ካልእ ሰብ ገለ ክሓትት ምእንቲ ክኽእል። ኣብ ቃለ መሕትት ስራሕ እውን፡ ቅድም እቲ መልሲ፡ ድሕሪኡ ኣብነት። ቀስ ኢልኩም ምዝራብ ኣብዚ ዘይምኽባር ኣይኮነን፡ ሰባት ክርድኡኹም ይሕግዝ።' },
    'c.clear.p': 'ይቕሬታ፡ ብህድኣት ደጊመ ክብሎ እየ።', // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.s': { m: '20 ደቒቕ ደንጒኻ ናብ ስራሕ ትኣቱ። ተቖጻጻሪኻ «Wat is er?» ኢሉ ይሓተካ። እንታይ ትገብር?', f: '20 ደቒቕ ደንጒኺ ናብ ስራሕ ትኣትዊ። ተቖጻጻሪኺ «Wat is er?» ኢሉ ይሓተኪ። እንታይ ትገብሪ?', x: '20 ደቒቕ ደንጒኹም ናብ ስራሕ ትኣትዉ። ተቖጻጻሪኹም «Wat is er?» ኢሉ ይሓተኩም። እንታይ ትገብሩ?' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o1': { m: 'ቅድም ከም ዝደንጎኻ ንገር፡ ይቕሬታ ድማ ሕተት። ድሕሪኡ ምኽንያቱ ንገር።', f: 'ቅድም ከም ዝደንጎኺ ንገሪ፡ ይቕሬታ ድማ ሕተቲ። ድሕሪኡ ምኽንያቱ ንገሪ።', x: 'ቅድም ከም ዝደንጎኹም ንገሩ፡ ይቕሬታ ድማ ሕተቱ። ድሕሪኡ ምኽንያቱ ንገሩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o2': { m: 'ሎሚ ንግሆ ዘጋጠመ ኩሉ ካብ መጀመርታ ጀሚርካ ንገር።', f: 'ሎሚ ንግሆ ዘጋጠመ ኩሉ ካብ መጀመርታ ጀሚርኪ ንገሪ።', x: 'ሎሚ ንግሆ ዘጋጠመ ኩሉ ካብ መጀመርታ ጀሚርኩም ንገሩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.o3': { m: 'ገለ ኣይትበል፡ ቀልጢፍካ ስራሕ ጀምር።', f: 'ገለ ኣይትበሊ፡ ቀልጢፍኪ ስራሕ ጀምሪ።', x: 'ገለ ኣይትበሉ፡ ቀልጢፍኩም ስራሕ ጀምሩ።' }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.clear.w': 'እቲ ተቖጻጻሪ ቅድም እንታይ ከም ዘሎ ክፈልጥ ይደሊ። ምኽንያቱ ድሕሪኡ ይመጽእ። ሓጺርን ህዱእን ንጹር እዩ፡ ኣብዚ ድማ ትሕትና እዩ።', // nieuw, nalezen // nagelezen AI 22 nov
    'u.teamwork': 'ብሓባር ምስራሕ',
    'l.speakup': 'ገለ ነገር የሸግረኒ',
    'w.probleem': 'ጸገም',
    'w.praten': 'ምዝራብ',
    'w.nietfijn': 'ዘየሐጉስ',
    'w.eerlijk': 'ፍትሓዊ፡ ቅኑዕ',
    'w.boos': { m: 'ሕሩቕ', f: 'ሕርቕቲ', x: 'ሕሩቓት' }, // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'w.samen': 'ብሓባር',
    's.speakup.1': 'ገለ ነገር የሸግረኒ ኣሎ።',
    's.speakup.2': 'ንሓጺር ግዜ ክንዘራረብ ንኽእል ዶ?',
    's.speakup.3': 'እዚ ፍትሓዊ ኣይመስለንን።',
    'd.speakup.q': 'ገለ ጸገም ኣሎ ድዩ?',
    'd.speakup.a': 'እወ፡ ገለ ነገር የሸግረኒ ኣሎ።',
    'l.agree': 'ስምምዓትን «ኣይፋል» ምባልን',
    'w.afspraak': 'ስምምዕ፡ ቆጸራ',
    'w.lukken': 'ምዕዋት፡ ምኽኣል',
    'w.oneens': 'ዘይምስምማዕ',
    'w.zaterdag': 'ቀዳም',
    'w.overwerken': 'ተወሳኺ ሰዓት ምስራሕ',
    'w.misschien': 'ምናልባት',
    's.agree.1': 'ኣይፋል፡ ሎሚ ኣይኽእልን እየ።',
    's.agree.2': 'ምሳኻ ኣይሰማማዕን እየ።',
    's.agree.3': 'ስምምዕ ስምምዕ እዩ።',
    'd.agree.q': { m: 'ቀዳም ተወሳኺ ሰዓት ክትሰርሕ ትኽእል ዶ?', f: 'ቀዳም ተወሳኺ ሰዓት ክትሰርሒ ትኽእሊ ዶ?', x: 'ቀዳም ተወሳኺ ሰዓት ክትሰርሑ ትኽእሉ ዶ?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'd.agree.a': 'ኣይፋል፡ ኣይኽእልን እየ። ሰንበት ግን እኽእል እየ።', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'l.task': 'መምርሒታት ካብ ተቖጻጻሪ',
    'w.taak': 'ዕማም',
    'w.eerst': 'ቅድም',
    'w.daarna': 'ድሕሪኡ',
    'w.afmaken': 'ምውዳእ',
    'w.snel': 'ቀልጢፉ፡ ቅልጡፍ',
    'w.bijna': 'ዳርጋ',
    's.task.1': 'ቅድም እንታይ ክገብር ኣለኒ?',
    's.task.2': 'ነዚ ዕማም እዚ ወዲአዮ።',
    's.task.3': 'ሓንሳብ ደጊምኩም ከተርእዩኒ ትኽእሉ ዶ?', // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'd.task.q': { m: 'ወዲእካ ዲኻ?', f: 'ወዲእኪ ዲኺ?', x: 'ወዲእኩም ዲኹም?' }, // x: nieuw, nalezen // nagelezen AI 28 nov
    'd.task.a': 'ዳርጋ። ሓሙሽተ ደቒቕ ተሪፉ።',
    'l.clear': 'ሓጺርን ንጹርን', // nieuw, nalezen // nagelezen AI 28 nov
    'w.kort': 'ሓጺር', // nieuw, nalezen // nagelezen AI 28 nov
    'w.duidelijk': 'ንጹር', // nieuw, nalezen // nagelezen AI 28 nov
    'w.belangrijkste': 'እቲ ኣዝዩ ኣገዳሲ', // nieuw, nalezen // nagelezen AI 28 nov
    'w.rustig': 'ህዱእ፡ ብህድኣት', // nieuw, nalezen // nagelezen AI 28 nov
    'w.teveel': 'ልዕሊ ዓቐን፡ ኣዝዩ ብዙሕ', // nieuw, nalezen // nagelezen AI 28 nov
    'w.vraag': 'ሕቶ', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.1': 'ብሓጺሩ እብል፡ እቲ ማሽን ተበላሽዩ ኣሎ።', // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.2': { m: 'ቅድም እቲ ኣገዳሲ፡ ሕሙም እየ።', f: 'ቅድም እቲ ኣገዳሲ፡ ሕምምቲ እየ።', x: 'ቅድም እቲ ኣገዳሲ፡ ሓሚመ ኣለኹ።' }, // nieuw, nalezen // nagelezen AI 28 nov
    's.clear.3': 'ይቕሬታ፡ ኣዝየ ቀልጢፈ እዛረብ ኣለኹ፡ ብዙሕ ድማ እዛረብ።', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.q': 'ንጹር ድዩ?', // nieuw, nalezen // nagelezen AI 28 nov
    'd.clear.a': 'እወ። ገና ሓንቲ ሕቶ ኣላትኒ።', // nieuw, nalezen // nagelezen AI 28 nov
    // Een nieuwe collega helpen (5 nov 2026)
    'l.newcolleague': "ንሓድሽ መሳርሕቲ ምሕጋዝ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.welkom': "እንቋዕ ብደሓን መጻእኩም", // nieuw, nalezen // nagelezen AI 28 nov
    'w.inwerken': "ንሓድሽ መሳርሕቲ ስራሕ ምርኣይ (ኣብ ቀዳሞት መዓልትታት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stap': "ስጉምቲ (ንእሽቶ ክፋል ናይ ሓደ ዕማም)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadoen': "ምድጋም (ሓደ ሰብ ዘርኣዮ ምግባር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.geduld': "ትዕግስቲ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kast': "ቁምሳጥን", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.1': "እንቋዕ ብደሓን መጻእካ! ሎሚ ነቲ ስራሕ ከርእየካ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.2': "ቅድም ርአ። ድሕሪኡ ከማይ ግበሮ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.newcolleague.3': "ጓንትታት ኣብቲ ቁምሳጥን ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.q': "ተረዲኡኒ፡ ይመስለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.newcolleague.a': "ጽቡቕ። እስኪ ኣርእየኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.newcolleague': { m: "ስጉምቲ ብስጉምቲ ኣርእዮ", f: "ስጉምቲ ብስጉምቲ ኣርእይዮ", x: "ስጉምቲ ብስጉምቲ ኣርእይዎ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.b': { m: "ኣብ ቀዳሞት ሰሙናትካ ንዓኻ ዘሸገረካ፡ ንሓድሽ መሳርሕቲ እውን የሸግሮ እዩ። ነቲ ስራሕ ብንኣሽቱ ስጉምትታት ግለጾ፡ ቅድም እዚ፡ ድሕሪኡ እቲ። ብቕልጡፍ ወይ ብዓው ኢልካ ኣይትዛረብ፡ ኣርእዮ፡ ድሕሪኡ ባዕሉ ክገብሮ ግደፎ። «Snap je het?» ኢልካ ኣይትሕተት፡ ብዙሓት ሰባት ዋላ እንተ ዘይተረድኦም «እወ» ይብሉ። ኣብ ክንዳኡ «Laat eens zien» በል፡ ተዓዘብ ድማ። ነገራት ኣበይ ከም ዘለዉ ንገሮ፡ ከም ሽቓቕ፡ ካንቲናን ጓንትታትን። ተዓገስ (geduld)፡ ምምሃር ንኹሉ ሰብ ግዜ ይወስድ።", f: "ኣብ ቀዳሞት ሰሙናትኪ ንዓኺ ዘሸገረኪ፡ ንሓድሽ መሳርሕቲ እውን የሸግሮ እዩ። ነቲ ስራሕ ብንኣሽቱ ስጉምትታት ግለጽዮ፡ ቅድም እዚ፡ ድሕሪኡ እቲ። ብቕልጡፍ ወይ ብዓው ኢልኪ ኣይትዛረቢ፡ ኣርእይዮ፡ ድሕሪኡ ባዕሉ ክገብሮ ግደፍዮ። «Snap je het?» ኢልኪ ኣይትሕተቲ፡ ብዙሓት ሰባት ዋላ እንተ ዘይተረድኦም «እወ» ይብሉ። ኣብ ክንዳኡ «Laat eens zien» በሊ፡ ተዓዘቢ ድማ። ነገራት ኣበይ ከም ዘለዉ ንገርዮ፡ ከም ሽቓቕ፡ ካንቲናን ጓንትታትን። ተዓገሲ (geduld)፡ ምምሃር ንኹሉ ሰብ ግዜ ይወስድ።", x: "ኣብ ቀዳሞት ሰሙናትኩም ንዓኹም ዘሸገረኩም፡ ንሓድሽ መሳርሕቲ እውን የሸግሮ እዩ። ነቲ ስራሕ ብንኣሽቱ ስጉምትታት ግለጽዎ፡ ቅድም እዚ፡ ድሕሪኡ እቲ። ብቕልጡፍ ወይ ብዓው ኢልኩም ኣይትዛረቡ፡ ኣርእይዎ፡ ድሕሪኡ ባዕሉ ክገብሮ ግደፍዎ። «Snap je het?» ኢልኩም ኣይትሕተቱ፡ ብዙሓት ሰባት ዋላ እንተ ዘይተረድኦም «እወ» ይብሉ። ኣብ ክንዳኡ «Laat eens zien» በሉ፡ ተዓዘቡ ድማ። ነገራት ኣበይ ከም ዘለዉ ንገርዎ፡ ከም ሽቓቕ፡ ካንቲናን ጓንትታትን። ተዓገሱ (geduld)፡ ምምሃር ንኹሉ ሰብ ግዜ ይወስድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.p': "ጽቡቕ! ሕጂ እቲ ዝቕጽል ስጉምቲ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.s': { m: "ንሓድሽ መሳርሕቲ ሓደ ዕማም ትገልጸሉ ኣለኻ። ንሱ «Ja, ja, ik snap het.» ይብል። እንታይ ትገብር?", f: "ንሓድሽ መሳርሕቲ ሓደ ዕማም ትገልጽሉ ኣለኺ። ንሱ «Ja, ja, ik snap het.» ይብል። እንታይ ትገብሪ?", x: "ንሓድሽ መሳርሕቲ ሓደ ዕማም ትገልጽሉ ኣለኹም። ንሱ «Ja, ja, ik snap het.» ይብል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o1': { m: "«Laat eens zien» በል፡ ክገብሮ ድማ ተዓዘቦ።", f: "«Laat eens zien» በሊ፡ ክገብሮ ድማ ተዓዘብዮ።", x: "«Laat eens zien» በሉ፡ ክገብሮ ድማ ተዓዘብዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o2': { m: "«Goed zo» በል፡ ናብ ስራሕካ ተመለስ።", f: "«Goed zo» በሊ፡ ናብ ስራሕኪ ተመለሲ።", x: "«Goed zo» በሉ፡ ናብ ስራሕኩም ተመለሱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.o3': { m: "ኩሉ ደጊምካ ግለጽ፡ ብቕልጡፍን ብዓውን።", f: "ኩሉ ደጊምኪ ግለጺ፡ ብቕልጡፍን ብዓውን።", x: "ኩሉ ደጊምኩም ግለጹ፡ ብቕልጡፍን ብዓውን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.newcolleague.w': "ብዙሓት ሰባት ዋላ እንተ ዘይተረድኦም «ja» ይብሉ። ንሱ ምስ ዘርኢ፡ ክልቴኹም ይሰርሕ እንተ ኾይኑ ትርእዩ። እዚ ደሓር ጌጋ ካብ ምእራም ይቀልጥፍ።", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'u.communicate': "ጽቡቕ ምዝርራብ", // nieuw, nalezen // nagelezen AI 28 nov
    'u.feedback': "ርእይቶን ኣኼባ ጉጅለን", // nieuw, nalezen // nagelezen AI 28 nov
    'l.explain': "እንታይ ጸገም ከም ዘሎ ምንጋር", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ietsmis': "ገለ ጸገም ኣሎ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.stilstaan': "ደው ምባል (ማሽን፡ ባንድ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.lampje': "መብራህቲ (ናይ መጠንቀቕታ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.komen': "ምምጻእ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nodighebben': "ምድላይ (የድሊ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.meteen': "ብቕጽበት፡ ሕጂ ንሕጂ", // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.1': "እቲ ባንድ ደው ኢሉ። ኣብ መስመር ክልተ። ክትመጽእ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.2': "ኣብቲ ማሽን ቀይሕ መብራህቲ ይበርህ ኣሎ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.explain.3': "ሓደገኛ እዩ። ሕጂ ንሕጂ ክትመጽእ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.q': "እንታይ ጸገም ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.explain.a': "እቲ ስካነር ኣይሰርሕን እዩ። ሓድሽ የድልየኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.listen': "ብጽቡቕ ምስማዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.uitpraten': "ዘረባ ምውዳእ (ሓደ ሰብ ክውድእ ምግዳፍ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onderbreken': "ዘረባ ምቁራጽ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.aankijken': "ናብ ሓደ ሰብ ምጥማት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bedoelen': "ማለት (እንታይ ማለት እዩ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dus': "ስለዚ (ዝተሰምዐ ንምርግጋጽ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doorvragen': "ብዝያዳ ምሕታት (ክሳዕ ዝበርህ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.1': "ስለዚ ቅድም ሳጹናት ምቑጻር፡ ድሕሪኡ ምጥቕላል?", // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.2': "በዚ ቃል እንታይ ማለትካ እዩ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.listen.3': "ይቕሬታ፡ ዘረባኻ ወድእ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.q': { m: "ጽባሕ ኣብ ሰዓት ኣርባዕተ ኢኻ ትጅምር።", f: "ጽባሕ ኣብ ሰዓት ኣርባዕተ ኢኺ ትጅምሪ።", x: "ጽባሕ ኣብ ሰዓት ኣርባዕተ ኢኹም ትጅምሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'd.listen.a': "ብሓቂ? ወይስ ቀልዲ ድዩ ነይሩ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.calm': "ህዱእ ምዃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.nadenken': "ምሕሳብ (ብዛዕባ ገለ ነገር)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ademhalen': "ምስትንፋስ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossen': "ምፍታሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.druk': "ጽዑቕ (ብዙሕ ስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.straks': "ድሕሪ ቁሩብ፡ ደሓር (ሎሚ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.misverstand': "ዘይምርድዳእ", // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.1': "ብህድኣት ክፈትሖ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.2': "ቁሩብ ክሓስብ ይፍቀደለይ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.calm.3': "ድሕሪ ቁሩብ ክንዛረብ ንኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.q': "እዚ ስለምንታይ ገና ኣይተወድአን?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.calm.a': "ይቕሬታ፡ ብዙሕ ስራሕ ኣሎ። እንታይ ቅድም ክኸውን ኣለዎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.talkintime': "ብግዜኡ ምዝራብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gesprek': "ዘተ፡ ምዝርራብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bespreken': "ምዝታይ (ብዛዕባ ገለ ምዝራብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.zorgenmaken': "ምጭናቕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.oplossing': "ፍታሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ineens': "ብሃንደበት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.wegblijven': "ምትራፍ (ናብ ስራሕ ዘይምምጻእ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.1': "ገለ ዘሸግረኒ ነገር ኣሎ። ቁሩብ ግዜ ኣለካ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.2': "ምሳኻ ገለ ነገር ክዛተ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.talkintime.3': "ስራሕ ከቋርጽ እሓስብ ኣለኹ። ቅድም ክንዛረብ ንኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.q': { m: "ቁሩብ ግዜ ኣለካ ዶ? ገለ ዘሸግረኒ ነገር ኣሎ።", f: "ቁሩብ ግዜ ኣለኪ ዶ? ገለ ዘሸግረኒ ነገር ኣሎ።", x: "ቁሩብ ግዜ ኣለኩም ዶ? ገለ ዘሸግረኒ ነገር ኣሎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'd.talkintime.a': "እወ ደኣ። እንታይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'l.reachable': "ብተሌፎን ተረኻቢ ምዃን", // nieuw, nalezen // nagelezen AI 28 nov
    'w.opnemen': "ተሌፎን ምልዓል (ምምላስ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.gemisteoproep': "ዘይተመለሰ ጻውዒት", // nieuw, nalezen // nagelezen AI 28 nov
    'w.voicemail': "ናይ ድምጺ መልእኽቲ (ቮይስሜይል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beltegoed': "ባላንስ ተሌፎን (ቅድመ-ክፍሊት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.bereik': "ኔትዎርክ (ኣብ ተሌፎን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.onbekend': "ዘይፍለጥ (ዘይፍለጥ ቁጽሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.1': "ሆላንድኛይ ገና ጽቡቕ ኣይኮነን። ቀስ ኢልኩም ክትዛረቡ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.2': "ብመልእኽቲ እውን ክትሰድዎ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.reachable.3': "ሓድሽ ቁጽሪ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.q': "ደሓን ሓደርኩም፡ ካብ ክፍሊ መደብ ስራሕ ኢና።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.reachable.a': "ደሓን ሓደርኩም። ደዊልኩምለይ ነይርኩም? ይቕሬታ፡ ኣምሊጡኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.getfeedback': "ርእይቶ ምቕባል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.tip': "ምኽሪ (ሓጺር ምኽሪ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.verbeterpunt': "ዝመሓየሽ ነጥቢ (ክሓይሽ ዝኽእል)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedbedoeld': "ብጽቡቕ ሓሳብ (ንምሕጋዝ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.kritiek': "ነቐፌታ (ሓደ ሰብ ጽቡቕ ኣይኮነን ዝብሎ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.normaal': "ልሙድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.positief': "ኣወንታዊ (ብዛዕባ እቲ ጽቡቕ ዝኸይድ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.1': "የቐንየለይ፡ ምፍላጡ ጽቡቕ እዩ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.2': "ኣብነት ክትህበኒ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.getfeedback.3': "እንታይ ከመሓይሽ እኽእል?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.q': { m: "ገለ ርእይቶ ክህበካ ይኽእል ዶ?", f: "ገለ ርእይቶ ክህበኪ ይኽእል ዶ?", x: "ገለ ርእይቶ ክህበኩም ይኽእል ዶ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'd.getfeedback.a': "እወ፡ ብደስታ። ብጽቡቕ ክገብሮ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.givefeedback': "ርእይቶ ምሃብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.dichtplakken': "ብተፕ ምዕጻው", // nieuw, nalezen // nagelezen AI 28 nov
    'w.netjes': "ጽፉፍ፡ ስሩዕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.scheef': "ዝዘንበለ፡ ዘይቀጥታ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.vriendelijk': "ሕያዋይ፡ ፍሽኹ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.concreet': "ንጹር (ምስ ንጹር ኣብነት)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.ondervierogen': "ብብሕቲ (ክልተ ሰባት ጥራይ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.1': "እዚ ብጽቡቕ ትገብሮ ኣለኻ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.2': "ነቶም ሳጹናት እውን ብተፕ ክትዓጽዎም ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.givefeedback.3': "እቶም ሳጹናት ዘንቢሎም ከም ዘለዉ እርኢ ኣለኹ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.q': { m: "ስራሐይ ከመይ ትርእዮ?", f: "ስራሐይ ከመይ ትርእይዮ?", x: "ስራሐይ ከመይ ትርእይዎ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'd.givefeedback.a': "ጽፉፍ! እቶም ሳጹናት ጥራይ ዘንቢሎም ኣለዉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'l.meeting': "ኣብ ኣኼባ ጉጅለ ምዝራብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.werkoverleg': "ኣኼባ ጉጅለ (ብዛዕባ ስራሕ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.beurt': "ተራ (ግዜ ምዝራብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.idee': "ሓሳብ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.mening': "ርእይቶ (ብዛዕባ ገለ ነገር ዝሕሰብ)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.handopsteken': "ኢድ ምልዓል", // nieuw, nalezen // nagelezen AI 28 nov
    'w.agenda': "ኣጀንዳ (ዝርዝር ነጥብታት ናይቲ ኣኼባ)", // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.1': "ገለ ክብል ይፍቀደለይ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.2': "ብዛዕባ መደብ ስራሕ ሕቶ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.meeting.3': "ሓሳብ ኣለኒ።", // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.q': "ዝኾነ ሰብ ሕቶ ኣለዎ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.meeting.a': "እወ። እቲ ሓድሽ መደብ ስራሕ መዓስ ይመጽእ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.explain': { m: "እንታይ፡ ኣበይ፡ እንታይ የድልየካ", f: "እንታይ፡ ኣበይ፡ እንታይ የድልየኪ", x: "እንታይ፡ ኣበይ፡ እንታይ የድልየኩም" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.b': { m: "ኣብ ስራሕ ገለ ጸገም ምስ ዘጋጥም፡ ብሰለስተ ስጉምትታት ንገሮ። ቅድም እንታይ ጸገም ከም ዘሎ፡ «De band staat stil.»። ድሕሪኡ ኣበይ፡ «Bij lijn twee.»። ድሕሪኡ እንታይ ከም ዘድልየካ፡ «Kun je komen?»። ሕጂ እቲ ካልእ ሰብ ብዘይ ብዙሕ ሕቶ እንታይ ክገብር ከም ዘለዎ ይፈልጥ። ነቲ ቃል ኣይትፈልጦን ዲኻ? ናብኡ ኣመልክት። ሓደገኛ ድዩ? ቅድም ንሱ ንገር፡ «Het is gevaarlijk.»። ሓደጋ? ቅድም ሓገዝ ጸውዕ (ዝያዳ ኣብቲ ትምህርቲ «ሓደጋ ምሕባር»)።", f: "ኣብ ስራሕ ገለ ጸገም ምስ ዘጋጥም፡ ብሰለስተ ስጉምትታት ንገርዮ። ቅድም እንታይ ጸገም ከም ዘሎ፡ «De band staat stil.»። ድሕሪኡ ኣበይ፡ «Bij lijn twee.»። ድሕሪኡ እንታይ ከም ዘድልየኪ፡ «Kun je komen?»። ሕጂ እቲ ካልእ ሰብ ብዘይ ብዙሕ ሕቶ እንታይ ክገብር ከም ዘለዎ ይፈልጥ። ነቲ ቃል ኣይትፈልጥዮን ዲኺ? ናብኡ ኣመልክቲ። ሓደገኛ ድዩ? ቅድም ንሱ ንገሪ፡ «Het is gevaarlijk.»። ሓደጋ? ቅድም ሓገዝ ጸውዒ (ዝያዳ ኣብቲ ትምህርቲ «ሓደጋ ምሕባር»)።", x: "ኣብ ስራሕ ገለ ጸገም ምስ ዘጋጥም፡ ብሰለስተ ስጉምትታት ንገርዎ። ቅድም እንታይ ጸገም ከም ዘሎ፡ «De band staat stil.»። ድሕሪኡ ኣበይ፡ «Bij lijn twee.»። ድሕሪኡ እንታይ ከም ዘድልየኩም፡ «Kun je komen?»። ሕጂ እቲ ካልእ ሰብ ብዘይ ብዙሕ ሕቶ እንታይ ክገብር ከም ዘለዎ ይፈልጥ። ነቲ ቃል ኣይትፈልጥዎን ዲኹም? ናብኡ ኣመልክቱ። ሓደገኛ ድዩ? ቅድም ንሱ ንገሩ፡ «Het is gevaarlijk.»። ሓደጋ? ቅድም ሓገዝ ጸውዑ (ዝያዳ ኣብቲ ትምህርቲ «ሓደጋ ምሕባር»)።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.p': "መጺእካ ክትርእዮ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.s': { m: "ኣብ ቦታኻ ዘሎ ስካነር ምስራሕ የቋርጽ። ንመራሒ ጉጅለኻ ትድውለሉ። እንታይ ትብል?", f: "ኣብ ቦታኺ ዘሎ ስካነር ምስራሕ የቋርጽ። ንመራሒ ጉጅለኺ ትድውልሉ። እንታይ ትብሊ?", x: "ኣብ ቦታኹም ዘሎ ስካነር ምስራሕ የቋርጽ። ንመራሒ ጉጅለኹም ትድውሉሉ። እንታይ ትብሉ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o1': "«De scanner is kapot. Bij gang vier. Kun je komen?»", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o2': { m: "«Hallo, ik heb een probleem.» ድሕሪኡ ትጽበ።", f: "«Hallo, ik heb een probleem.» ድሕሪኡ ትጽበዪ።", x: "«Hallo, ik heb een probleem.» ድሕሪኡ ትጽበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.o3': "«Sorry, sorry! Het is niet mijn schuld!»", // nieuw, nalezen // nagelezen AI 22 nov
    'c.explain.w': { m: "ሕጂ መራሒ ጉጅለኻ እንታይ ጸገም ከም ዘሎ፡ ኣበይ ከም ዘሎን እንታይ ከም ዘድልየካን ይፈልጥ። ዝኾነ ሰብ ቅድም ሰለስተ ሕቶታት ክሓትት ኣየድልዮን።", f: "ሕጂ መራሒ ጉጅለኺ እንታይ ጸገም ከም ዘሎ፡ ኣበይ ከም ዘሎን እንታይ ከም ዘድልየኪን ይፈልጥ። ዝኾነ ሰብ ቅድም ሰለስተ ሕቶታት ክሓትት ኣየድልዮን።", x: "ሕጂ መራሒ ጉጅለኹም እንታይ ጸገም ከም ዘሎ፡ ኣበይ ከም ዘሎን እንታይ ከም ዘድልየኩምን ይፈልጥ። ዝኾነ ሰብ ቅድም ሰለስተ ሕቶታት ክሓትት ኣየድልዮን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen': { m: "ቅድም ስማዕ፡ ድሕሪኡ ኣረጋግጽ", f: "ቅድም ስምዒ፡ ድሕሪኡ ኣረጋግጺ", x: "ቅድም ስምዑ፡ ድሕሪኡ ኣረጋግጹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.b': { m: "ቅድሚ ምምላስካ፡ እቲ ካልእ ሰብ ዘረባኡ ክውድእ ግደፎ (uitpraten)። ነቲ ዝዛረበካ ዘሎ ሰብ ጠምቶ፡ ኣብዚ እዚ ከም እትሰምዕ የርኢ። ኣብ ብዙሓት ሃገራት ንሓለቓኻ ኣብ ዓይኑ ኣይትጥምቶን ኢኻ። እዚ ናይ ክብሪ ምልክት እዩ። ኣብዚ ግን ሓደ ሓደ ግዜ ምጥማቱ ትሕትና እዩ። እቲ ካልእ ሰብ ምስ ወድአ፡ ዝሰማዕካዮ መሊስካ ንገር፡ «Dus eerst …, en dan …?»። ሓደ ቃል እንታይ ማለት ምዃኑ ርግጸኛ ኣይኮንካን? ሕተት፡ «Wat bedoel je met …?»። ገሊኦም ብጾት ስራሕ ብጽኑዕ ገጽ ይቕልዱ። ርግጸኛ ኣይኮንካን? ሕተት፡ «Was dat een grapje?»", f: "ቅድሚ ምምላስኪ፡ እቲ ካልእ ሰብ ዘረባኡ ክውድእ ግደፍዮ (uitpraten)። ነቲ ዝዛረበኪ ዘሎ ሰብ ጠምትዮ፡ ኣብዚ እዚ ከም እትሰምዒ የርኢ። ኣብ ብዙሓት ሃገራት ንሓለቓኺ ኣብ ዓይኑ ኣይትጥምትዮን ኢኺ። እዚ ናይ ክብሪ ምልክት እዩ። ኣብዚ ግን ሓደ ሓደ ግዜ ምጥማቱ ትሕትና እዩ። እቲ ካልእ ሰብ ምስ ወድአ፡ ዝሰማዕክዮ መሊስኪ ንገሪ፡ «Dus eerst …, en dan …?»። ሓደ ቃል እንታይ ማለት ምዃኑ ርግጸኛ ኣይኮንክን? ሕተቲ፡ «Wat bedoel je met …?»። ገሊኦም ብጾት ስራሕ ብጽኑዕ ገጽ ይቕልዱ። ርግጸኛ ኣይኮንክን? ሕተቲ፡ «Was dat een grapje?»", x: "ቅድሚ ምምላስኩም፡ እቲ ካልእ ሰብ ዘረባኡ ክውድእ ግደፍዎ (uitpraten)። ነቲ ዝዛረበኩም ዘሎ ሰብ ጠምትዎ፡ ኣብዚ እዚ ከም እትሰምዑ የርኢ። ኣብ ብዙሓት ሃገራት ንሓለቓኹም ኣብ ዓይኑ ኣይትጥምትዎን ኢኹም። እዚ ናይ ክብሪ ምልክት እዩ። ኣብዚ ግን ሓደ ሓደ ግዜ ምጥማቱ ትሕትና እዩ። እቲ ካልእ ሰብ ምስ ወድአ፡ ዝሰማዕኩምዎ መሊስኩም ንገሩ፡ «Dus eerst …, en dan …?»። ሓደ ቃል እንታይ ማለት ምዃኑ ርግጸኛታት ኣይኮንኩምን? ሕተቱ፡ «Wat bedoel je met …?»። ገሊኦም ብጾት ስራሕ ብጽኑዕ ገጽ ይቕልዱ። ርግጸኛታት ኣይኮንኩምን? ሕተቱ፡ «Was dat een grapje?»" },
    'c.listen.p': "ቁሩብ፡ ብጽቡቕ ክርድኦ እደሊ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.s': { m: "ተቖጻጻሪትካ ሓድሽ ዕማም ትገልጽ ኣላ። ገለ ክትብል ትደሊ፡ ግን ንሳ ገና ትዛረብ ኣላ። እንታይ ትገብር?", f: "ተቖጻጻሪትኪ ሓድሽ ዕማም ትገልጽ ኣላ። ገለ ክትብሊ ትደልዪ፡ ግን ንሳ ገና ትዛረብ ኣላ። እንታይ ትገብሪ?", x: "ተቖጻጻሪትኩም ሓድሽ ዕማም ትገልጽ ኣላ። ገለ ክትብሉ ትደልዩ፡ ግን ንሳ ገና ትዛረብ ኣላ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o1': { m: "ክትውድእ ግደፋ። ድሕሪኡ ዝሰማዕካዮ መሊስካ ንገር።", f: "ክትውድእ ግደፍያ። ድሕሪኡ ዝሰማዕክዮ መሊስኪ ንገሪ።", x: "ክትውድእ ግደፍዋ። ድሕሪኡ ዝሰማዕኩምዎ መሊስኩም ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o2': { m: "ከይረሳዕካዮ ብቕጽበት ክትዛረብ ጀምር።", f: "ከይረሳዕክዮ ብቕጽበት ክትዛረቢ ጀምሪ።", x: "ከይረሳዕኩምዎ ብቕጽበት ክትዛረቡ ጀምሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.o3': { m: "ንኹሉ ርእስኻ ነቕንቕ፡ ገለ ኣይትሕተት።", f: "ንኹሉ ርእስኺ ነቕንቒ፡ ገለ ኣይትሕተቲ።", x: "ንኹሉ ርእስኹም ነቕንቑ፡ ገለ ኣይትሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.listen.w': { m: "ምስ ወድአት፡ ምሉእ ዕማም ትፈልጥ። መሊስካ ምንጋር ከም ዝሰማዕካ የርኢ፡ ንሳ ድማ ገና ክተእርመካ ትኽእል።", f: "ምስ ወድአት፡ ምሉእ ዕማም ትፈልጢ። መሊስኪ ምንጋር ከም ዝሰማዕኪ የርኢ፡ ንሳ ድማ ገና ክተእርመኪ ትኽእል።", x: "ምስ ወድአት፡ ምሉእ ዕማም ትፈልጡ። መሊስኩም ምንጋር ከም ዝሰማዕኩም የርኢ፡ ንሳ ድማ ገና ክተእርመኩም ትኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm': { m: "ዋላ ከቢድ እንተ ኾነ ህዱእ ኹን", f: "ዋላ ከቢድ እንተ ኾነ ህድእቲ ኹኒ", x: "ዋላ ከቢድ እንተ ኾነ ህዱኣት ኩኑ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.b': { m: "ኩሉ ሰብ ሓደ ሓደ ግዜ ይሓርቕ፡ ኣብ ስራሕ እውን። ሓደ ሰብ ኣባኻ ሓሪቑ ድዩ? ቅድም ስማዕ፡ ህዱእ ድማ ኹን። ብቕጽበት ክትምልስ ኣየድልየካን፡ «Mag ik even nadenken?»። ንስኻ ባዕልኻ ክትሓርቕ ጀሚርካ ዲኻ? ቀስ ኢልካ ኣስተንፍስ፡ ከምዚ ድማ በል፡ «Kunnen we straks praten?»። ድሕሪኡ ክልቴኹም ምስ ሃደእኩም ተዛረቡ። ብዙሕ ስራሕ ኣሎ? እንታይ ቅድም ክግበር ከም ዘለዎ ሕተት። ምጭራሕ፡ ምፍርራሕ ወይ ምድፋእ ኣብ ስራሕ ፈጺሙ ቅቡል ኣይኮነን። ደው በል በሎ፡ ንተቖጻጻሪኻ ድማ ንገሮ (ዝያዳ ኣብቲ ትምህርትታት «ክብሪ ንኹሉ ሰብ»ን «ዶብ ምሕላፍ»ን)።", f: "ኩሉ ሰብ ሓደ ሓደ ግዜ ይሓርቕ፡ ኣብ ስራሕ እውን። ሓደ ሰብ ኣባኺ ሓሪቑ ድዩ? ቅድም ስምዒ፡ ህድእቲ ድማ ኹኒ። ብቕጽበት ክትምልሲ ኣየድልየኪን፡ «Mag ik even nadenken?»። ንስኺ ባዕልኺ ክትሓርቒ ጀሚርኪ ዲኺ? ቀስ ኢልኪ ኣስተንፍሲ፡ ከምዚ ድማ በሊ፡ «Kunnen we straks praten?»። ድሕሪኡ ክልቴኹም ምስ ሃደእኩም ተዛረቡ። ብዙሕ ስራሕ ኣሎ? እንታይ ቅድም ክግበር ከም ዘለዎ ሕተቲ። ምጭራሕ፡ ምፍርራሕ ወይ ምድፋእ ኣብ ስራሕ ፈጺሙ ቅቡል ኣይኮነን። ደው በል በልዮ፡ ንተቖጻጻሪኺ ድማ ንገርዮ (ዝያዳ ኣብቲ ትምህርትታት «ክብሪ ንኹሉ ሰብ»ን «ዶብ ምሕላፍ»ን)።", x: "ኩሉ ሰብ ሓደ ሓደ ግዜ ይሓርቕ፡ ኣብ ስራሕ እውን። ሓደ ሰብ ኣባኹም ሓሪቑ ድዩ? ቅድም ስምዑ፡ ህዱኣት ድማ ኩኑ። ብቕጽበት ክትምልሱ ኣየድልየኩምን፡ «Mag ik even nadenken?»። ንስኹም ባዕልኹም ክትሓርቑ ጀሚርኩም ዲኹም? ቀስ ኢልኩም ኣስተንፍሱ፡ ከምዚ ድማ በሉ፡ «Kunnen we straks praten?»። ድሕሪኡ ክልቴኹም ምስ ሃደእኩም ተዛረቡ። ብዙሕ ስራሕ ኣሎ? እንታይ ቅድም ክግበር ከም ዘለዎ ሕተቱ። ምጭራሕ፡ ምፍርራሕ ወይ ምድፋእ ኣብ ስራሕ ፈጺሙ ቅቡል ኣይኮነን። ደው በል በልዎ፡ ንተቖጻጻሪኹም ድማ ንገርዎ (ዝያዳ ኣብቲ ትምህርትታት «ክብሪ ንኹሉ ሰብ»ን «ዶብ ምሕላፍ»ን)።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.p': "ዘይምርድዳእ እዩ ይመስለኒ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.s': { m: "ሓደ ብጻይ ስራሕ ሓሪቑ ኣሎ፡ እቲ ፓለት ኣብ ጌጋ ቦታ ኣሎ። ንስኻ ዘይኮንካ ይመስለካ። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ሓሪቑ ኣሎ፡ እቲ ፓለት ኣብ ጌጋ ቦታ ኣሎ። ንስኺ ዘይኮንኪ ይመስለኪ። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ሓሪቑ ኣሎ፡ እቲ ፓለት ኣብ ጌጋ ቦታ ኣሎ። ንስኹም ዘይኮንኩም ይመስለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o1': { m: "ህዱእ ኹን፡ ስማዕ፡ ድሕሪኡ ዝፈለጥካዮ ንገር።", f: "ህድእቲ ኹኒ፡ ስምዒ፡ ድሕሪኡ ዝፈለጥክዮ ንገሪ።", x: "ህዱኣት ኩኑ፡ ስምዑ፡ ድሕሪኡ ዝፈለጥኩምዎ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o2': { m: "ንስኻ እውን ሕረቕ፡ ብዓው ኢልካ ድማ ተዛረብ።", f: "ንስኺ እውን ሕረቒ፡ ብዓው ኢልኪ ድማ ተዛረቢ።", x: "ንስኹም እውን ሕረቑ፡ ብዓው ኢልኩም ድማ ተዛረቡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.o3': { m: "ገዲፍካ ኪድ፡ ደጊም ድማ ኣይተዛርቦ።", f: "ገዲፍኪ ኪዲ፡ ደጊም ድማ ኣይተዛርብዮ።", x: "ገዲፍኩም ኪዱ፡ ደጊም ድማ ኣይተዛርብዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.calm.w': { m: "ንስኻ ህዱእ ምስ ዝኾንካ፡ እቲ ካልእ ሰብ እውን መብዛሕትኡ ግዜ ይሃድእ። ድሕሪኡ እንታይ ከም ዘጋጠመ ክትፈልጡን ብሓባር ክትፈትሕዎን ትኽእሉ።", f: "ንስኺ ህድእቲ ምስ ዝኾንኪ፡ እቲ ካልእ ሰብ እውን መብዛሕትኡ ግዜ ይሃድእ። ድሕሪኡ እንታይ ከም ዘጋጠመ ክትፈልጡን ብሓባር ክትፈትሕዎን ትኽእሉ።", x: "ንስኹም ህዱኣት ምስ ዝኾንኩም፡ እቲ ካልእ ሰብ እውን መብዛሕትኡ ግዜ ይሃድእ። ድሕሪኡ እንታይ ከም ዘጋጠመ ክትፈልጡን ብሓባር ክትፈትሕዎን ትኽእሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime': { m: "ጸገም ገና ንእሽቶ ከሎ ተዛረብ", f: "ጸገም ገና ንእሽቶ ከሎ ተዛረቢ", x: "ጸገም ገና ንእሽቶ ከሎ ተዛረቡ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.b': { m: "ንእሽቶ ጸገም ብዛዕባኡ ምስ ዘይትዛረብ ዓቢ ይኸውን። ድሕሪኡ ብሃንደበት ትሓርቕ፡ ወይ ብሃንደበት ስራሕ ተቋርጽ። ብግዜኡ ተዛረብ፡ ምስ ተቖጻጻሪኻ፡ ምስ ብጻይ ስራሕ ወይ ምስ vertrouwenspersoon (ምስጢራዊ ኣማኻሪ፡ እንተሎ)። ቁሩብ ግዜ ሕተት፡ «Heb je even tijd?»። እንታይ ጸገም ከም ዘሎን እንታይ ከም እትደልን ብሓጺሩ ንገር። ስራሕ ከተቋርጽ ትሓስብ ኣለኻ ዶ? ቅድም ተዛረብ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ ከም ካልእ ፈረቓ ወይ ካልእ ዕማም። ባዕልኻ ስራሕ እንተ ኣቋሪጽካ፡ ሓገዝ ገንዘብካ (uitkering) ክተጥፍእ ትኽእል ኢኻ፡ መብዛሕትኡ ግዜ ድማ ግዜ ቅድመ-ምሕባር (opzegtermijn) ኣሎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ንእሽቶ ጸገም ብዛዕባኡ ምስ ዘይትዛረቢ ዓቢ ይኸውን። ድሕሪኡ ብሃንደበት ትሓርቒ፡ ወይ ብሃንደበት ስራሕ ተቋርጺ። ብግዜኡ ተዛረቢ፡ ምስ ተቖጻጻሪኺ፡ ምስ ብጻይ ስራሕ ወይ ምስ vertrouwenspersoon (ምስጢራዊ ኣማኻሪ፡ እንተሎ)። ቁሩብ ግዜ ሕተቲ፡ «Heb je even tijd?»። እንታይ ጸገም ከም ዘሎን እንታይ ከም እትደልዪን ብሓጺሩ ንገሪ። ስራሕ ከተቋርጺ ትሓስቢ ኣለኺ ዶ? ቅድም ተዛረቢ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ ከም ካልእ ፈረቓ ወይ ካልእ ዕማም። ባዕልኺ ስራሕ እንተ ኣቋሪጽኪ፡ ሓገዝ ገንዘብኪ (uitkering) ከተጥፍኢ ትኽእሊ ኢኺ፡ መብዛሕትኡ ግዜ ድማ ግዜ ቅድመ-ምሕባር (opzegtermijn) ኣሎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ንእሽቶ ጸገም ብዛዕባኡ ምስ ዘይትዛረቡ ዓቢ ይኸውን። ድሕሪኡ ብሃንደበት ትሓርቑ፡ ወይ ብሃንደበት ስራሕ ተቋርጹ። ብግዜኡ ተዛረቡ፡ ምስ ተቖጻጻሪኹም፡ ምስ ብጻይ ስራሕ ወይ ምስ vertrouwenspersoon (ምስጢራዊ ኣማኻሪ፡ እንተሎ)። ቁሩብ ግዜ ሕተቱ፡ «Heb je even tijd?»። እንታይ ጸገም ከም ዘሎን እንታይ ከም እትደልዩን ብሓጺሩ ንገሩ። ስራሕ ከተቋርጹ ትሓስቡ ኣለኹም ዶ? ቅድም ተዛረቡ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ ከም ካልእ ፈረቓ ወይ ካልእ ዕማም። ባዕልኹም ስራሕ እንተ ኣቋሪጽኩም፡ ሓገዝ ገንዘብኩም (uitkering) ከተጥፍኡ ትኽእሉ ኢኹም፡ መብዛሕትኡ ግዜ ድማ ግዜ ቅድመ-ምሕባር (opzegtermijn) ኣሎ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.p': "ብሓባር ፍታሕ ክንደሊ ንኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.s': { m: "ንሰሙናት መደብ ስራሕካ ጸገም ኮይኑ ኣሎ። ሎሚ ሓሪቕካ ብቕጽበት ስራሕ ከተቋርጽ ትደሊ። እንታይ ትገብር?", f: "ንሰሙናት መደብ ስራሕኪ ጸገም ኮይኑ ኣሎ። ሎሚ ሓሪቕኪ ብቕጽበት ስራሕ ከተቋርጺ ትደልዪ። እንታይ ትገብሪ?", x: "ንሰሙናት መደብ ስራሕኩም ጸገም ኮይኑ ኣሎ። ሎሚ ሓሪቕኩም ብቕጽበት ስራሕ ከተቋርጹ ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o1': { m: "ቅድም ንተቖጻጻሪኻ ዘተ ሕተቶ።", f: "ቅድም ንተቖጻጻሪኺ ዘተ ሕተትዮ።", x: "ቅድም ንተቖጻጻሪኹም ዘተ ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o2': { m: "ሕጂ ኪድ፡ ደጊም ኣይትመለስ።", f: "ሕጂ ኪዲ፡ ደጊም ኣይትመለሲ።", x: "ሕጂ ኪዱ፡ ደጊም ኣይትመለሱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.o3': { m: "ገለ ኣይትበል፡ ቀጽል ጥራይ።", f: "ገለ ኣይትበሊ፡ ቀጽሊ ጥራይ።", x: "ገለ ኣይትበሉ፡ ቀጽሉ ጥራይ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.talkintime.w': { m: "ብግዜኡ ምዝራብ ንጸገም ንእሽቶ ይገብሮ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ በዚ ድማ መብዛሕትኡ ግዜ ስራሕካን እቶትካን ትዕቅብ።", f: "ብግዜኡ ምዝራብ ንጸገም ንእሽቶ ይገብሮ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ በዚ ድማ መብዛሕትኡ ግዜ ስራሕኪን እቶትኪን ትዕቅቢ።", x: "ብግዜኡ ምዝራብ ንጸገም ንእሽቶ ይገብሮ። መብዛሕትኡ ግዜ ፍታሕ ኣሎ፡ በዚ ድማ መብዛሕትኡ ግዜ ስራሕኩምን እቶትኩምን ትዕቅቡ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable': { m: "ተሌፎን ልዓል፡ ወይ በታ መዓልቲ ተመሊስካ ደውል", f: "ተሌፎን ልዓሊ፡ ወይ በታ መዓልቲ ተመሊስኪ ደውሊ", x: "ተሌፎን ልዓሉ፡ ወይ በታ መዓልቲ ተመሊስኩም ደውሉ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.b': { m: "ኤጀንሲታት ስራሕን ኣስራሕትን ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። መብዛሕትኡ ግዜ እቲ ቀዳማይ ተሌፎን ዘልዓለ ወይ ተመሊሱ ዝደወለ ሰብ እቲ ስራሕ ይረክብ። ጻውዒት ኣምሊጡካ? በታ መዓልቲ ተመሊስካ ደውል። ኣብ ስራሕ ተሌፎን የብልካን? ኣብ ዕረፍትኻ ተመሊስካ ደውል። ቮይስሜይልካ ስማዕ፡ ኣብ ተሌፎንካ ድማ ቁሩብ ባላንስ (beltegoed) ሓዝ። ብተሌፎን ምርዳእ ከቢዱካ? ንገር፡ ከምዚ ድማ ሕተት፡ «Kunt u het ook appen?»። ሓደ ሰብ ገንዘብ ወይ ኮድ ይሓተካ? ተሌፎን ዕጸው (ዝያዳ ኣብቲ ትምህርቲ «ካብ ምትላል ተጠንቀቕ»)። ሓድሽ ቁጽሪ? ንስራሕካ፡ ንኤጀንሲ ስራሕን ንምምሕዳር ከተማ (gemeente) ሓብር።", f: "ኤጀንሲታት ስራሕን ኣስራሕትን ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። መብዛሕትኡ ግዜ እቲ ቀዳማይ ተሌፎን ዘልዓለ ወይ ተመሊሱ ዝደወለ ሰብ እቲ ስራሕ ይረክብ። ጻውዒት ኣምሊጡኪ? በታ መዓልቲ ተመሊስኪ ደውሊ። ኣብ ስራሕ ተሌፎን የብልክን? ኣብ ዕረፍትኺ ተመሊስኪ ደውሊ። ቮይስሜይልኪ ስምዒ፡ ኣብ ተሌፎንኪ ድማ ቁሩብ ባላንስ (beltegoed) ሓዚ። ብተሌፎን ምርዳእ ከቢዱኪ? ንገሪ፡ ከምዚ ድማ ሕተቲ፡ «Kunt u het ook appen?»። ሓደ ሰብ ገንዘብ ወይ ኮድ ይሓተኪ? ተሌፎን ዕጸዊ (ዝያዳ ኣብቲ ትምህርቲ «ካብ ምትላል ተጠንቀቒ»)። ሓድሽ ቁጽሪ? ንስራሕኪ፡ ንኤጀንሲ ስራሕን ንምምሕዳር ከተማ (gemeente) ሓብሪ።", x: "ኤጀንሲታት ስራሕን ኣስራሕትን ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። መብዛሕትኡ ግዜ እቲ ቀዳማይ ተሌፎን ዘልዓለ ወይ ተመሊሱ ዝደወለ ሰብ እቲ ስራሕ ይረክብ። ጻውዒት ኣምሊጡኩም? በታ መዓልቲ ተመሊስኩም ደውሉ። ኣብ ስራሕ ተሌፎን የብልኩምን? ኣብ ዕረፍትኹም ተመሊስኩም ደውሉ። ቮይስሜይልኩም ስምዑ፡ ኣብ ተሌፎንኩም ድማ ቁሩብ ባላንስ (beltegoed) ሓዙ። ብተሌፎን ምርዳእ ከቢዱኩም? ንገሩ፡ ከምዚ ድማ ሕተቱ፡ «Kunt u het ook appen?»። ሓደ ሰብ ገንዘብ ወይ ኮድ ይሓተኩም? ተሌፎን ዕጸዉ (ዝያዳ ኣብቲ ትምህርቲ «ካብ ምትላል ተጠንቀቑ»)። ሓድሽ ቁጽሪ? ንስራሕኩም፡ ንኤጀንሲ ስራሕን ንምምሕዳር ከተማ (gemeente) ሓብሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.p': "ኣብ ዕረፍተይ ተመሊሰ ክድውለልኩም እየ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.s': { m: "ኣብ ዕረፍትኻ ካብ ኤጀንሲ ስራሕ ዘይተመለሰ ጻውዒት ትርኢ። እንታይ ትገብር?", f: "ኣብ ዕረፍትኺ ካብ ኤጀንሲ ስራሕ ዘይተመለሰ ጻውዒት ትርእዪ። እንታይ ትገብሪ?", x: "ኣብ ዕረፍትኹም ካብ ኤጀንሲ ስራሕ ዘይተመለሰ ጻውዒት ትርእዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o1': { m: "ሕጂ፡ ኣብ ዕረፍትኻ፡ ተመሊስካ ደውል።", f: "ሕጂ፡ ኣብ ዕረፍትኺ፡ ተመሊስኪ ደውሊ።", x: "ሕጂ፡ ኣብ ዕረፍትኹም፡ ተመሊስኩም ደውሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o2': { m: "ደጊሞም ክሳዕ ዝድውሉልካ ተጸበ።", f: "ደጊሞም ክሳዕ ዝድውሉልኪ ተጸበዪ።", x: "ደጊሞም ክሳዕ ዝድውሉልኩም ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.o3': { m: "ኣብ ዝመጽእ ሰሙን፡ ነጻ ምስ ኮንካ፡ ተመሊስካ ደውል።", f: "ኣብ ዝመጽእ ሰሙን፡ ነጻ ምስ ኮንኪ፡ ተመሊስኪ ደውሊ።", x: "ኣብ ዝመጽእ ሰሙን፡ ነጻ ምስ ኮንኩም፡ ተመሊስኩም ደውሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.reachable.w': { m: "ኤጀንሲታት ስራሕ ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። በታ መዓልቲ ተመሊስካ ምስ እትድውል፡ ከም እትደልዮ ተርኢ፡ ምናልባት ድማ ነቲ ስራሕ ትረኽቦ።", f: "ኤጀንሲታት ስራሕ ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። በታ መዓልቲ ተመሊስኪ ምስ እትድውሊ፡ ከም እትደልይዮ ተርእዪ፡ ምናልባት ድማ ነቲ ስራሕ ትረኽብዮ።", x: "ኤጀንሲታት ስራሕ ስራሕ ምስ ዝህሉ መብዛሕትኡ ግዜ ይድውሉ። በታ መዓልቲ ተመሊስኩም ምስ እትድውሉ፡ ከም እትደልይዎ ተርእዩ፡ ምናልባት ድማ ነቲ ስራሕ ትረኽብዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback': { m: "ርእይቶ ብዛዕባ ስራሕካ እዩ", f: "ርእይቶ ብዛዕባ ስራሕኪ እዩ", x: "ርእይቶ ብዛዕባ ስራሕኩም እዩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.b': { m: "ርእይቶ (feedback) ሓደ ሰብ ብዛዕባ ስራሕካ ዝብሎ እዩ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ድማ ክመሓየሽ ይኽእል። ብዛዕባ ስራሕካ እዩ፡ ብዛዕባኻ ኣይኮነን። ኣብዚ ኣብ ስራሕ፡ ርእይቶ ልሙድ እዩ፡ ንምሕጋዝ ድማ እዩ። እንታይ ብኻልእ መንገዲ ክትገብር ከም ዘለካ ንጹር ኣይኮነን? ኣብነት ሕተት። ቅድም ስማዕ፡ ብቕጽበት ድማ ንርእስኻ ኣይትከላኸል። ድሕሪኡ የቐንየለይ በል፡ ፈትኖ ድማ። ባዕልኻ እውን ርእይቶ ክትሓትት ትኽእል ኢኻ፡ «Wat kan ik beter doen?»", f: "ርእይቶ (feedback) ሓደ ሰብ ብዛዕባ ስራሕኪ ዝብሎ እዩ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ድማ ክመሓየሽ ይኽእል። ብዛዕባ ስራሕኪ እዩ፡ ብዛዕባኺ ኣይኮነን። ኣብዚ ኣብ ስራሕ፡ ርእይቶ ልሙድ እዩ፡ ንምሕጋዝ ድማ እዩ። እንታይ ብኻልእ መንገዲ ክትገብሪ ከም ዘለኪ ንጹር ኣይኮነን? ኣብነት ሕተቲ። ቅድም ስምዒ፡ ብቕጽበት ድማ ንርእስኺ ኣይትከላኸሊ። ድሕሪኡ የቐንየለይ በሊ፡ ፈትንዮ ድማ። ባዕልኺ እውን ርእይቶ ክትሓቲ ትኽእሊ ኢኺ፡ «Wat kan ik beter doen?»", x: "ርእይቶ (feedback) ሓደ ሰብ ብዛዕባ ስራሕኩም ዝብሎ እዩ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ድማ ክመሓየሽ ይኽእል። ብዛዕባ ስራሕኩም እዩ፡ ብዛዕባኹም ኣይኮነን። ኣብዚ ኣብ ስራሕ፡ ርእይቶ ልሙድ እዩ፡ ንምሕጋዝ ድማ እዩ። እንታይ ብኻልእ መንገዲ ክትገብሩ ከም ዘለኩም ንጹር ኣይኮነን? ኣብነት ሕተቱ። ቅድም ስምዑ፡ ብቕጽበት ድማ ንርእስኹም ኣይትከላኸሉ። ድሕሪኡ የቐንየለይ በሉ፡ ፈትንዎ ድማ። ባዕልኹም እውን ርእይቶ ክትሓቱ ትኽእሉ ኢኹም፡ «Wat kan ik beter doen?»" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.p': "የቐንየለይ። ኣብነት ክትህበኒ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.s': { m: "ተቖጻጻሪትካ ንስራሕካ ርእያ «Dit kan beter.» ትብል። እንታይ ማለታ ምዃኑ ኣይትፈልጥን። እንታይ ትገብር?", f: "ተቖጻጻሪትኪ ንስራሕኪ ርእያ «Dit kan beter.» ትብል። እንታይ ማለታ ምዃኑ ኣይትፈልጢን። እንታይ ትገብሪ?", x: "ተቖጻጻሪትኩም ንስራሕኩም ርእያ «Dit kan beter.» ትብል። እንታይ ማለታ ምዃኑ ኣይትፈልጡን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o1': { m: "የቐንየለይ በል፡ ኣብነት ድማ ሕተት።", f: "የቐንየለይ በሊ፡ ኣብነት ድማ ሕተቲ።", x: "የቐንየለይ በሉ፡ ኣብነት ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o2': { m: "ብሓቂ ዝከኣለካ ከም ዝገበርካ ንገር።", f: "ብሓቂ ዝከኣለኪ ከም ዝገበርኪ ንገሪ።", x: "ብሓቂ ዝከኣለኩም ከም ዝገበርኩም ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.o3': { m: "ርእስኻ ነቕንቕ፡ ብተመሳሳሊ መንገዲ ድማ ደጊምካ ግበሮ።", f: "ርእስኺ ነቕንቒ፡ ብተመሳሳሊ መንገዲ ድማ ደጊምኪ ግበርዮ።", x: "ርእስኹም ነቕንቑ፡ ብተመሳሳሊ መንገዲ ድማ ደጊምኩም ግበርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.getfeedback.w': { m: "ርእይቶ ንኣኻ ንምሕጋዝ እዩ። ኣብነት እንታይ ከም እትደሊ የርኢ። «የቐንየለይ» ድማ ከም እትሰምዕ የርኢ።", f: "ርእይቶ ንኣኺ ንምሕጋዝ እዩ። ኣብነት እንታይ ከም እትደሊ የርኢ። «የቐንየለይ» ድማ ከም እትሰምዒ የርኢ።", x: "ርእይቶ ንኣኹም ንምሕጋዝ እዩ። ኣብነት እንታይ ከም እትደሊ የርኢ። «የቐንየለይ» ድማ ከም እትሰምዑ የርኢ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback': "ርእይቶ ምሃብ፡ ቅድም እቲ ጽቡቕ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.b': { m: "ብዛዕባ ስራሕ ሓደ ብጻይ ስራሕ ገለ ክትብል ትደሊ ዲኻ? ቅድም እንታይ ጽቡቕ ከም ዝኸይድ ንገር። ድሕሪኡ እንታይ ክመሓየሽ ከም ዝኽእል ብሕያውነትን ብንጹርን ንገር፡ ምስ ሓደ ኣብነት። ኣብ ጽቡቕ ግዜ ንዕኡ ጥራይ ንገሮ፡ ኩሉ ሰብ ኣብ ዘለዎ ኣይኮነን። እትርእዮ ንገር፡ ብዛዕባ እቲ ሰብ እትሓስቦ ኣይኮነን፡ «Ik zie dat ...»። ሕያዋይ ኹን፡ ክትሕግዝ ኢኻ ትደሊ፡ ክትስዕር ኣይኮነን።", f: "ብዛዕባ ስራሕ ሓደ ብጻይ ስራሕ ገለ ክትብሊ ትደልዪ ዲኺ? ቅድም እንታይ ጽቡቕ ከም ዝኸይድ ንገሪ። ድሕሪኡ እንታይ ክመሓየሽ ከም ዝኽእል ብሕያውነትን ብንጹርን ንገሪ፡ ምስ ሓደ ኣብነት። ኣብ ጽቡቕ ግዜ ንዕኡ ጥራይ ንገርዮ፡ ኩሉ ሰብ ኣብ ዘለዎ ኣይኮነን። እትርእይዮ ንገሪ፡ ብዛዕባ እቲ ሰብ እትሓስብዮ ኣይኮነን፡ «Ik zie dat ...»። ሕያወይቲ ኹኒ፡ ክትሕግዚ ኢኺ ትደልዪ፡ ክትስዕሪ ኣይኮነን።", x: "ብዛዕባ ስራሕ ሓደ ብጻይ ስራሕ ገለ ክትብሉ ትደልዩ ዲኹም? ቅድም እንታይ ጽቡቕ ከም ዝኸይድ ንገሩ። ድሕሪኡ እንታይ ክመሓየሽ ከም ዝኽእል ብሕያውነትን ብንጹርን ንገሩ፡ ምስ ሓደ ኣብነት። ኣብ ጽቡቕ ግዜ ንዕኡ ጥራይ ንገርዎ፡ ኩሉ ሰብ ኣብ ዘለዎ ኣይኮነን። እትርእይዎ ንገሩ፡ ብዛዕባ እቲ ሰብ እትሓስብዎ ኣይኮነን፡ «Ik zie dat ...»። ሕያዋያን ኩኑ፡ ክትሕግዙ ኢኹም ትደልዩ፡ ክትስዕሩ ኣይኮነን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.p': "እዚ ብጽቡቕ ትገብሮ ኣለኻ። ነቶም ሳጹናት እውን ብተፕ ክትዓጽዎም ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.s': { m: "ሓደ ሓድሽ ብጻይ ስራሕ ነቶም ሳጹናት ብተፕ ምዕጻው ይርስዕ። ኩላትኩም ኣብ ካንቲን ኢኹም። እንታይ ትገብር?", f: "ሓደ ሓድሽ ብጻይ ስራሕ ነቶም ሳጹናት ብተፕ ምዕጻው ይርስዕ። ኩላትኩም ኣብ ካንቲን ኢኹም። እንታይ ትገብሪ?", x: "ሓደ ሓድሽ ብጻይ ስራሕ ነቶም ሳጹናት ብተፕ ምዕጻው ይርስዕ። ኩላትኩም ኣብ ካንቲን ኢኹም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o1': "ደሓር፡ ንበይኑ፡ ቅድም እቲ ጽቡቕ ዝኸይድ፡ ድሕሪኡ እቶም ሳጹናት።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o2': { m: "ኣብ ቅድሚ ኩሉ ሰብ ጌጋ ምዃኑ ንገሮ።", f: "ኣብ ቅድሚ ኩሉ ሰብ ጌጋ ምዃኑ ንገርዮ።", x: "ኣብ ቅድሚ ኩሉ ሰብ ጌጋ ምዃኑ ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.o3': { m: "ገለ ኣይትበል፡ ሳጹናቱ ባዕልኻ ዕጸዎም።", f: "ገለ ኣይትበሊ፡ ሳጹናቱ ባዕልኺ ዕጸውዮም።", x: "ገለ ኣይትበሉ፡ ሳጹናቱ ባዕልኹም ዕጸውዎም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.givefeedback.w': { m: "ንበይኑ ምስ ዝኸውን፡ ከይሓፈረ ክሰምዕ ይኽእል። ቅድም እቲ ጽቡቕ ዝኸይድ ምስ እትነግሮ፡ ነቲ ዝተረፈ ብዝሓሸ ይሰምዖ።", f: "ንበይኑ ምስ ዝኸውን፡ ከይሓፈረ ክሰምዕ ይኽእል። ቅድም እቲ ጽቡቕ ዝኸይድ ምስ እትነግርዮ፡ ነቲ ዝተረፈ ብዝሓሸ ይሰምዖ።", x: "ንበይኑ ምስ ዝኸውን፡ ከይሓፈረ ክሰምዕ ይኽእል። ቅድም እቲ ጽቡቕ ዝኸይድ ምስ እትነግርዎ፡ ነቲ ዝተረፈ ብዝሓሸ ይሰምዖ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting': { m: "ኣብ ኣኼባ ድምጽኻ ኣገዳሲ እዩ", f: "ኣብ ኣኼባ ድምጽኺ ኣገዳሲ እዩ", x: "ኣብ ኣኼባ ድምጽኹም ኣገዳሲ እዩ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.b': { m: "ብዙሓት ጉጅለታት ብዛዕባ ስራሕ ሓጺር ኣኼባ ኣለዎም (het werkoverleg)። ኣብኡ ርእይቶኻ ተቐባልነት ኣለዎ፡ ሆላንድኛኻ ፍጹም እንተ ዘይኮነ እውን። ሕቶ እውን ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ክፈልጥዎ ይደልዩ። ተራኻ ተጸበ፡ እቲ ካልእ ሰብ ድማ ክውድእ ግደፎ። ድሕሪኡ ኢድካ ልዓል፡ ወይ በል፡ «Mag ik iets zeggen?»። ኣብ ቅድሚ እቲ ጉጅለ ክትብሎ ትፈርህ ዲኻ? ድሕሪ እቲ ኣኼባ ንተቖጻጻሪኻ ንገሮ።", f: "ብዙሓት ጉጅለታት ብዛዕባ ስራሕ ሓጺር ኣኼባ ኣለዎም (het werkoverleg)። ኣብኡ ርእይቶኺ ተቐባልነት ኣለዎ፡ ሆላንድኛኺ ፍጹም እንተ ዘይኮነ እውን። ሕቶ እውን ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ክፈልጥዎ ይደልዩ። ተራኺ ተጸበዪ፡ እቲ ካልእ ሰብ ድማ ክውድእ ግደፍዮ። ድሕሪኡ ኢድኪ ልዓሊ፡ ወይ በሊ፡ «Mag ik iets zeggen?»። ኣብ ቅድሚ እቲ ጉጅለ ክትብልዮ ትፈርሂ ዲኺ? ድሕሪ እቲ ኣኼባ ንተቖጻጻሪኺ ንገርዮ።", x: "ብዙሓት ጉጅለታት ብዛዕባ ስራሕ ሓጺር ኣኼባ ኣለዎም (het werkoverleg)። ኣብኡ ርእይቶኹም ተቐባልነት ኣለዎ፡ ሆላንድኛኹም ፍጹም እንተ ዘይኮነ እውን። ሕቶ እውን ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ክፈልጥዎ ይደልዩ። ተራኹም ተጸበዩ፡ እቲ ካልእ ሰብ ድማ ክውድእ ግደፍዎ። ድሕሪኡ ኢድኩም ልዓሉ፡ ወይ በሉ፡ «Mag ik iets zeggen?»። ኣብ ቅድሚ እቲ ጉጅለ ክትብልዎ ትፈርሁ ዲኹም? ድሕሪ እቲ ኣኼባ ንተቖጻጻሪኹም ንገርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.p': "ገለ ክብል ይፍቀደለይ ዶ? ሓሳብ ኣለኒ።", // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.s': { m: "ኣብ ኣኼባ ጉጅለ፡ ተቖጻጻሪትካ ነቲ ሓድሽ መደብ ስራሕ ትገልጽ። ፈረቓኻ መዓስ ከም ዝጅምር ኣይተረድኣካን። እንታይ ትገብር?", f: "ኣብ ኣኼባ ጉጅለ፡ ተቖጻጻሪትኪ ነቲ ሓድሽ መደብ ስራሕ ትገልጽ። ፈረቓኺ መዓስ ከም ዝጅምር ኣይተረድኣክን። እንታይ ትገብሪ?", x: "ኣብ ኣኼባ ጉጅለ፡ ተቖጻጻሪትኹም ነቲ ሓድሽ መደብ ስራሕ ትገልጽ። ፈረቓኹም መዓስ ከም ዝጅምር ኣይተረድኣኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o1': { m: "ዘረባ ምስ ወድአት፡ ሕቶኻ ሕተት።", f: "ዘረባ ምስ ወድአት፡ ሕቶኺ ሕተቲ።", x: "ዘረባ ምስ ወድአት፡ ሕቶኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o2': { m: "ግዜ ከይተጥፍእ ገለ ኣይትበል።", f: "ግዜ ከይተጥፍኢ ገለ ኣይትበሊ።", x: "ግዜ ከይተጥፍኡ ገለ ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.o3': { m: "ንሳ ገና እናተዛረበት ከላ ብቕጽበት ሕተት።", f: "ንሳ ገና እናተዛረበት ከላ ብቕጽበት ሕተቲ።", x: "ንሳ ገና እናተዛረበት ከላ ብቕጽበት ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.meeting.w': { m: "ሕቶ ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ኣይተረድኦምን ይኾኑ። ተራኻ ምስ እትጽበ፡ ኩሉ ሰብ ክሰምዖ ይኽእል።", f: "ሕቶ ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ኣይተረድኦምን ይኾኑ። ተራኺ ምስ እትጽበዪ፡ ኩሉ ሰብ ክሰምዖ ይኽእል።", x: "ሕቶ ጽቡቕ ኣበርክቶ እዩ፡ ምናልባት ካልኦት እውን ኣይተረድኦምን ይኾኑ። ተራኹም ምስ እትጽበዩ፡ ኩሉ ሰብ ክሰምዖ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking': { m: "ኣቕሓ ጎዲሉ? ተዛረብ", f: "ኣቕሓ ጎዲሉ? ተዛረቢ", x: "ኣቕሓ ጎዲሉ? ተዛረቡ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.b': { m: "እቲ ክፍሊ ጥርሑ ድዩ፡ ወይስ እቲ ኣቕሓ የለን? ተመሳሳሊ ዝመስል ካልእ ኣቕሓ ኣይትውሰድ፡ ሽዑ እቲ ዓሚል ጌጋ ነገር ይረክብ። ንሓላፊ ጉጅለኻ ንገሮ፡ ወይ ኣብ ስካነር ሕበሮ። ነቲ ኣብ ስቲከር ዘሎ ቁጽሪ ፈትሾ፡ ሕብሪ ወይ ስእሊ ጥራይ ዘይኮነ። ብልክዕ ምስራሕ ካብ ቀልጢፍካ ምስራሕ ይበልጽ።", f: "እቲ ክፍሊ ጥርሑ ድዩ፡ ወይስ እቲ ኣቕሓ የለን? ተመሳሳሊ ዝመስል ካልእ ኣቕሓ ኣይትውሰዲ፡ ሽዑ እቲ ዓሚል ጌጋ ነገር ይረክብ። ንሓላፊ ጉጅለኺ ንገርዮ፡ ወይ ኣብ ስካነር ሕበርዮ። ነቲ ኣብ ስቲከር ዘሎ ቁጽሪ ፈትሽዮ፡ ሕብሪ ወይ ስእሊ ጥራይ ዘይኮነ። ብልክዕ ምስራሕ ካብ ቀልጢፍኪ ምስራሕ ይበልጽ።", x: "እቲ ክፍሊ ጥርሑ ድዩ፡ ወይስ እቲ ኣቕሓ የለን? ተመሳሳሊ ዝመስል ካልእ ኣቕሓ ኣይትውሰዱ፡ ሽዑ እቲ ዓሚል ጌጋ ነገር ይረክብ። ንሓላፊ ጉጅለኹም ንገርዎ፡ ወይ ኣብ ስካነር ሕበርዎ። ነቲ ኣብ ስቲከር ዘሎ ቁጽሪ ፈትሽዎ፡ ሕብሪ ወይ ስእሊ ጥራይ ዘይኮነ። ብልክዕ ምስራሕ ካብ ቀልጢፍኩም ምስራሕ ይበልጽ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.p': "እዚ ኣቕሓ ጎዲሉ ኣሎ። እንታይ ክገብር ኣለኒ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.s': { m: "እቲ ክፍሊ ጥርሑ እዩ። ኣብቲ ኣብ ጎድኑ ዘሎ ክፍሊ፡ ዳርጋ ተመሳሳሊ ዝመስል ኣቕሓ ኣሎ። እንታይ ትገብር?", f: "እቲ ክፍሊ ጥርሑ እዩ። ኣብቲ ኣብ ጎድኑ ዘሎ ክፍሊ፡ ዳርጋ ተመሳሳሊ ዝመስል ኣቕሓ ኣሎ። እንታይ ትገብሪ?", x: "እቲ ክፍሊ ጥርሑ እዩ። ኣብቲ ኣብ ጎድኑ ዘሎ ክፍሊ፡ ዳርጋ ተመሳሳሊ ዝመስል ኣቕሓ ኣሎ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o1': { m: "እቲ ኣቕሓ ከም ዝጎደለ ሕበር።", f: "እቲ ኣቕሓ ከም ዝጎደለ ሕበሪ።", x: "እቲ ኣቕሓ ከም ዝጎደለ ሕበሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o2': { m: "ነቲ ካልእ ኣቕሓ ውሰዶ፡ ተመሳሳሊ ይመስል።", f: "ነቲ ካልእ ኣቕሓ ውሰድዮ፡ ተመሳሳሊ ይመስል።", x: "ነቲ ካልእ ኣቕሓ ውሰድዎ፡ ተመሳሳሊ ይመስል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.o3': { m: "ነቲ ኣቕሓ ሕለፎ፡ ገለ ድማ ኣይትበል።", f: "ነቲ ኣቕሓ ሕለፍዮ፡ ገለ ድማ ኣይትበሊ።", x: "ነቲ ኣቕሓ ሕለፍዎ፡ ገለ ድማ ኣይትበሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.picking.w': { m: "ጌጋ ኣቕሓ ይምለስ፡ እዚ ድማ ካብ ምሕታት ዝያዳ ግዜ ይወስድ። ምስ እትሕብር፡ ሓደ ሰብ ነቲ ክፍሊ ክመልኦ ወይ ነቲ ትእዛዝ ክቕይሮ ይኽእል።", f: "ጌጋ ኣቕሓ ይምለስ፡ እዚ ድማ ካብ ምሕታት ዝያዳ ግዜ ይወስድ። ምስ እትሕብሪ፡ ሓደ ሰብ ነቲ ክፍሊ ክመልኦ ወይ ነቲ ትእዛዝ ክቕይሮ ይኽእል።", x: "ጌጋ ኣቕሓ ይምለስ፡ እዚ ድማ ካብ ምሕታት ዝያዳ ግዜ ይወስድ። ምስ እትሕብሩ፡ ሓደ ሰብ ነቲ ክፍሊ ክመልኦ ወይ ነቲ ትእዛዝ ክቕይሮ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading': { m: "ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምካ ኣይትሕለፍ", f: "ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምኪ ኣይትሕለፊ", x: "ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምኩም ኣይትሕለፉ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.b': { m: "እቲ ዘዋሪ ብድሕሪ እታ መኪና ዘሎ ኩሉ ክርኢ ኣይክእልን። ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምካ ኣይትኺድ፡ ኣብ መንጎ እታ መኪናን እቲ ማዕጾን ድማ ደው ኣይትበል። እታ መኪና ደው ክሳዕ እትብልን እቲ ዘዋሪ ክሳዕ ዝርእየካን ተጸበ። ክተራግፍ ከለኻ ፓለት ጎዲሉ ወይ ተሰይሩ ድዩ? እቲ ዘዋሪ ቅድሚ ምኻዱ ንገር።", f: "እቲ ዘዋሪ ብድሕሪ እታ መኪና ዘሎ ኩሉ ክርኢ ኣይክእልን። ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምኪ ኣይትኺዲ፡ ኣብ መንጎ እታ መኪናን እቲ ማዕጾን ድማ ደው ኣይትበሊ። እታ መኪና ደው ክሳዕ እትብልን እቲ ዘዋሪ ክሳዕ ዝርእየኪን ተጸበዪ። ክተራግፊ ከለኺ ፓለት ጎዲሉ ወይ ተሰይሩ ድዩ? እቲ ዘዋሪ ቅድሚ ምኻዱ ንገሪ።", x: "እቲ ዘዋሪ ብድሕሪ እታ መኪና ዘሎ ኩሉ ክርኢ ኣይክእልን። ብድሕሪ ንድሕሪት እትኸይድ ናይ ጽዕነት መኪና ፈጺምኩም ኣይትኺዱ፡ ኣብ መንጎ እታ መኪናን እቲ ማዕጾን ድማ ደው ኣይትበሉ። እታ መኪና ደው ክሳዕ እትብልን እቲ ዘዋሪ ክሳዕ ዝርእየኩምን ተጸበዩ። ክተራግፉ ከለኹም ፓለት ጎዲሉ ወይ ተሰይሩ ድዩ? እቲ ዘዋሪ ቅድሚ ምኻዱ ንገሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.p': { m: "ቁሩብ ተጸበ። እታ ናይ ጽዕነት መኪና ንድሕሪት ትኸይድ ኣላ።", f: "ቁሩብ ተጸበዪ። እታ ናይ ጽዕነት መኪና ንድሕሪት ትኸይድ ኣላ።", x: "ቁሩብ ተጸበዩ። እታ ናይ ጽዕነት መኪና ንድሕሪት ትኸይድ ኣላ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.s': { m: "ሓንቲ ናይ ጽዕነት መኪና ንድሕሪት ናብቲ ማዕጾ ትኸይድ ኣላ። ብድሕሪኣ ቀልጢፍካ ክትሳገር ትደሊ። እንታይ ትገብር?", f: "ሓንቲ ናይ ጽዕነት መኪና ንድሕሪት ናብቲ ማዕጾ ትኸይድ ኣላ። ብድሕሪኣ ቀልጢፍኪ ክትሳገሪ ትደልዪ። እንታይ ትገብሪ?", x: "ሓንቲ ናይ ጽዕነት መኪና ንድሕሪት ናብቲ ማዕጾ ትኸይድ ኣላ። ብድሕሪኣ ቀልጢፍኩም ክትሳገሩ ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o1': { m: "እታ መኪና ደው ክሳዕ እትብል ተጸበ።", f: "እታ መኪና ደው ክሳዕ እትብል ተጸበዪ።", x: "እታ መኪና ደው ክሳዕ እትብል ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o2': { m: "ብድሕሪኣ ጉየ፡ እኹል ቅልጡፍ ኢኻ።", f: "ብድሕሪኣ ጉየዪ፡ እኹል ቅልጥፍቲ ኢኺ።", x: "ብድሕሪኣ ጉየዩ፡ እኹል ቅልጡፋት ኢኹም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.o3': { m: "ብድሕሪኣ ኪድ፡ ነቲ ዘዋሪ ድማ ኢድካ ኣወዛውዘሉ።", f: "ብድሕሪኣ ኪዲ፡ ነቲ ዘዋሪ ድማ ኢድኪ ኣወዛውዝሉ።", x: "ብድሕሪኣ ኪዱ፡ ነቲ ዘዋሪ ድማ ኢድኩም ኣወዛውዙሉ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.w': "ብድሕሪ ናይ ጽዕነት መኪና እቲ ዘዋሪ ክርእዮ ዘይክእል ቦታ ኣሎ። ምጽባይ ሓንቲ ደቒቕ ይወስድ። ኣብኡ ዘጋጥም ሓደጋ ኣዝዩ ከቢድ እዩ።", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto': { m: "ጽቡቕ ትገብሮ እንተ ኣለኻ ኣረጋግጽ", f: "ጽቡቕ ትገብርዮ እንተ ኣለኺ ኣረጋግጺ", x: "ጽቡቕ ትገብርዎ እንተ ኣለኹም ኣረጋግጹ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.b': { m: "ሓደ ዕማም ብኸመይ ከም ዝግበር ርግጸኛ ኣይኮንካን? ብኸመይ ከም ዝግበር ሕተት፡ ወይ ንብጻይ ስራሕ ንስራሕካ ንሓጺር ግዜ ክርእየልካ ሕተት። ምርግጋጽ ኣብዚ ልሙድ እዩ፡ ድሕሪ ሰሙን ወይ ወርሒ እውን። ምግማት ካብ ምሕታት ዝያዳ ግዜ ይወስድ፡ ጌጋ ዝኾነ ስራሕ ከም ብሓድሽ ክስራሕ ኣለዎ። «Doe ik het zo goed?» ብጾት ስራሕ ክሰምዕዎ ዝፈትዉ ሕቶ እዩ።", f: "ሓደ ዕማም ብኸመይ ከም ዝግበር ርግጸኛ ኣይኮንክን? ብኸመይ ከም ዝግበር ሕተቲ፡ ወይ ንብጻይ ስራሕ ንስራሕኪ ንሓጺር ግዜ ክርእየልኪ ሕተቲ። ምርግጋጽ ኣብዚ ልሙድ እዩ፡ ድሕሪ ሰሙን ወይ ወርሒ እውን። ምግማት ካብ ምሕታት ዝያዳ ግዜ ይወስድ፡ ጌጋ ዝኾነ ስራሕ ከም ብሓድሽ ክስራሕ ኣለዎ። «Doe ik het zo goed?» ብጾት ስራሕ ክሰምዕዎ ዝፈትዉ ሕቶ እዩ።", x: "ሓደ ዕማም ብኸመይ ከም ዝግበር ርግጸኛታት ኣይኮንኩምን? ብኸመይ ከም ዝግበር ሕተቱ፡ ወይ ንብጻይ ስራሕ ንስራሕኩም ንሓጺር ግዜ ክርእየልኩም ሕተቱ። ምርግጋጽ ኣብዚ ልሙድ እዩ፡ ድሕሪ ሰሙን ወይ ወርሒ እውን። ምግማት ካብ ምሕታት ዝያዳ ግዜ ይወስድ፡ ጌጋ ዝኾነ ስራሕ ከም ብሓድሽ ክስራሕ ኣለዎ። «Doe ik het zo goed?» ብጾት ስራሕ ክሰምዕዎ ዝፈትዉ ሕቶ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.p': "ጽቡቕ እንተ ኾይኑ ንሓጺር ግዜ ክትርእዩለይ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.s': { m: "ሓድሽ ዕማም ትሰርሕ ኣለኻ። ጽቡቕ ትገብሮ ከም ዘለኻ ርግጸኛ ኣይኮንካን። እንታይ ትገብር?", f: "ሓድሽ ዕማም ትሰርሒ ኣለኺ። ጽቡቕ ትገብርዮ ከም ዘለኺ ርግጸኛ ኣይኮንክን። እንታይ ትገብሪ?", x: "ሓድሽ ዕማም ትሰርሑ ኣለኹም። ጽቡቕ ትገብርዎ ከም ዘለኹም ርግጸኛታት ኣይኮንኩምን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o1': { m: "ንብጻይ ስራሕ ክርእዮ ሕተት።", f: "ንብጻይ ስራሕ ክርእዮ ሕተቲ።", x: "ንብጻይ ስራሕ ክርእዮ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o2': { m: "ቀጽል፡ ምናልባት ጽቡቕ ይኸውን።", f: "ቀጽሊ፡ ምናልባት ጽቡቕ ይኸውን።", x: "ቀጽሉ፡ ምናልባት ጽቡቕ ይኸውን።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.o3': { m: "ደው በል እሞ ሰብ ክሳዕ ዝመጽእ ተጸበ።", f: "ደው በሊ እሞ ሰብ ክሳዕ ዝመጽእ ተጸበዪ።", x: "ደው በሉ እሞ ሰብ ክሳዕ ዝመጽእ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.howto.w': { m: "ብጻይ ስራሕ ሓንሳብ ንሓጺር ግዜ ምስ ዝርእዮ፡ ደሓር ብዙሕ ስራሕ የድሕን። ነቲ ዕማም ድማ ቀልጢፍካ ትመሃሮ።", f: "ብጻይ ስራሕ ሓንሳብ ንሓጺር ግዜ ምስ ዝርእዮ፡ ደሓር ብዙሕ ስራሕ የድሕን። ነቲ ዕማም ድማ ቀልጢፍኪ ትመሃርዮ።", x: "ብጻይ ስራሕ ሓንሳብ ንሓጺር ግዜ ምስ ዝርእዮ፡ ደሓር ብዙሕ ስራሕ የድሕን። ነቲ ዕማም ድማ ቀልጢፍኩም ትመሃርዎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask': "ንምሕታት ቅኑዕ ግዜ", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.b': { m: "ብዛዕባ ድሕንነት ድዩ፡ ወይስ ሕጂ ገለ ነገር ክበላሾ ይኽእል ድዩ? ብጻይ ስራሕካ ስራሕ ሒዙ እንተሎ እውን፡ ብቕጽበት ሕተት። ህጹጽ ኣይኮነን ድዩ? ብጻይ ስራሕካ ክሳዕ ዝውድእ ተጸበ፡ ድሕሪኡ «Heb je even tijd?» ኢልካ ሕተት። ብዙሓት ንኣሽቱ ሕቶታት ኣለዉኻ ድዮም? ጽሓፎም እሞ ብሓባር ሕተቶም። ሕቶ ዘረብሾ ሰብ የለን። ጌጋ ዝያዳ ግዜ ይወስድ።", f: "ብዛዕባ ድሕንነት ድዩ፡ ወይስ ሕጂ ገለ ነገር ክበላሾ ይኽእል ድዩ? ብጻይ ስራሕኪ ስራሕ ሒዙ እንተሎ እውን፡ ብቕጽበት ሕተቲ። ህጹጽ ኣይኮነን ድዩ? ብጻይ ስራሕኪ ክሳዕ ዝውድእ ተጸበዪ፡ ድሕሪኡ «Heb je even tijd?» ኢልኪ ሕተቲ። ብዙሓት ንኣሽቱ ሕቶታት ኣለዉኺ ድዮም? ጽሓፍዮም እሞ ብሓባር ሕተትዮም። ሕቶ ዘረብሾ ሰብ የለን። ጌጋ ዝያዳ ግዜ ይወስድ።", x: "ብዛዕባ ድሕንነት ድዩ፡ ወይስ ሕጂ ገለ ነገር ክበላሾ ይኽእል ድዩ? ብጻይ ስራሕኩም ስራሕ ሒዙ እንተሎ እውን፡ ብቕጽበት ሕተቱ። ህጹጽ ኣይኮነን ድዩ? ብጻይ ስራሕኩም ክሳዕ ዝውድእ ተጸበዩ፡ ድሕሪኡ «Heb je even tijd?» ኢልኩም ሕተቱ። ብዙሓት ንኣሽቱ ሕቶታት ኣለዉኹም ድዮም? ጽሓፍዎም እሞ ብሓባር ሕተትዎም። ሕቶ ዘረብሾ ሰብ የለን። ጌጋ ዝያዳ ግዜ ይወስድ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.p': "ይቕሬታ፡ ስለ ዝረበሽኩኹም። ቁሩብ ግዜ ኣለኩም ድዩ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.s': { m: "ብጻይ ስራሕካ ብተሌፎን ይዛረብ ኣሎ። ህጹጽ ዘይኮነ ሕቶ ኣለካ። እንታይ ትገብር?", f: "ብጻይ ስራሕኪ ብተሌፎን ይዛረብ ኣሎ። ህጹጽ ዘይኮነ ሕቶ ኣለኪ። እንታይ ትገብሪ?", x: "ብጻይ ስራሕኩም ብተሌፎን ይዛረብ ኣሎ። ህጹጽ ዘይኮነ ሕቶ ኣለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o1': { m: "እቲ ዘረባ ተሌፎን ክሳዕ ዝውዳእ ተጸበ፡ ድሕሪኡ ሕተት።", f: "እቲ ዘረባ ተሌፎን ክሳዕ ዝውዳእ ተጸበዪ፡ ድሕሪኡ ሕተቲ።", x: "እቲ ዘረባ ተሌፎን ክሳዕ ዝውዳእ ተጸበዩ፡ ድሕሪኡ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o2': { m: "ሕጂ ሕተት፡ ሕቶ ኩሉ ግዜ ጽቡቕ እዩ።", f: "ሕጂ ሕተቲ፡ ሕቶ ኩሉ ግዜ ጽቡቕ እዩ።", x: "ሕጂ ሕተቱ፡ ሕቶ ኩሉ ግዜ ጽቡቕ እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.o3': { m: "ኣይትሕተት፡ ብጻይ ስራሕካ ስራሕ ሒዙ ኣሎ።", f: "ኣይትሕተቲ፡ ብጻይ ስራሕኪ ስራሕ ሒዙ ኣሎ።", x: "ኣይትሕተቱ፡ ብጻይ ስራሕኩም ስራሕ ሒዙ ኣሎ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.w': { m: "ቁሩብ ምጽባይ ኣኽብሮት የርኢ፡ መልስኻ ድማ ትረክብ ኢኻ። ሓደጋ ጥራይ እዩ ክጽበ ዘይክእል።", f: "ቁሩብ ምጽባይ ኣኽብሮት የርኢ፡ መልስኺ ድማ ትረኽቢ ኢኺ። ሓደጋ ጥራይ እዩ ክጽበ ዘይክእል።", x: "ቁሩብ ምጽባይ ኣኽብሮት የርኢ፡ መልስኹም ድማ ትረኽቡ ኢኹም። ሓደጋ ጥራይ እዩ ክጽበ ዘይክእል።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis': { m: "መገዲ ጠፊኡካ? ሕተት ጥራይ", f: "መገዲ ጠፊኡኪ? ሕተቲ ጥራይ", x: "መገዲ ጠፊኡኩም? ሕተቱ ጥራይ" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.b': { m: "ሓድሽ ቦታ ስራሕ ዓቢ እዩ፡ ብዙሓት ማዕጾታት ድማ ተመሳሰልቲ እዮም። ድሕሪ ሓንቲ መዓልቲ ኩሉ ክትረክብ ዝጽበየካ ሰብ የለን። ክፍሊ፡ መሳርሒ ወይ ሰብ ክትረክብ ኣይከኣልካን? ነቲ ቀዳማይ እትርእዮ ብጻይ ስራሕ ሕተት። ብዙሓት ብጾት ስራሕ ምሳኻ ይኸዱ፡ ወይ ነቲ መገዲ የመልክቱልካ። መውጽኢታት ኣበይ ከም ዘለዉ ትፈልጥ ዲኻ? ኣብ ቀዳመይቲ መዓልትኻ ሕተት፡ እዚ ንድሕንነትካ እዩ።", f: "ሓድሽ ቦታ ስራሕ ዓቢ እዩ፡ ብዙሓት ማዕጾታት ድማ ተመሳሰልቲ እዮም። ድሕሪ ሓንቲ መዓልቲ ኩሉ ክትረኽቢ ዝጽበየኪ ሰብ የለን። ክፍሊ፡ መሳርሒ ወይ ሰብ ክትረኽቢ ኣይከኣልክን? ነቲ ቀዳማይ እትርእይዮ ብጻይ ስራሕ ሕተቲ። ብዙሓት ብጾት ስራሕ ምሳኺ ይኸዱ፡ ወይ ነቲ መገዲ የመልክቱልኪ። መውጽኢታት ኣበይ ከም ዘለዉ ትፈልጢ ዲኺ? ኣብ ቀዳመይቲ መዓልትኺ ሕተቲ፡ እዚ ንድሕንነትኪ እዩ።", x: "ሓድሽ ቦታ ስራሕ ዓቢ እዩ፡ ብዙሓት ማዕጾታት ድማ ተመሳሰልቲ እዮም። ድሕሪ ሓንቲ መዓልቲ ኩሉ ክትረኽቡ ዝጽበየኩም ሰብ የለን። ክፍሊ፡ መሳርሒ ወይ ሰብ ክትረኽቡ ኣይከኣልኩምን? ነቲ ቀዳማይ እትርእይዎ ብጻይ ስራሕ ሕተቱ። ብዙሓት ብጾት ስራሕ ምሳኹም ይኸዱ፡ ወይ ነቲ መገዲ የመልክቱልኩም። መውጽኢታት ኣበይ ከም ዘለዉ ትፈልጡ ዲኹም? ኣብ ቀዳመይቲ መዓልትኹም ሕተቱ፡ እዚ ንድሕንነትኩም እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.p': "መገዲ ጠፊኡኒ። ካንቲን ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.s': { m: "ካልአይቲ መዓልትኻ እያ። ክፍሊ ምቕያር ክዳን ክትረኽቦ ኣይከኣልካን፡ ፈረቓኻ ድማ ድሕሪ ሓሙሽተ ደቒቕ ይጅምር። እንታይ ትገብር?", f: "ካልአይቲ መዓልትኺ እያ። ክፍሊ ምቕያር ክዳን ክትረኽብዮ ኣይከኣልክን፡ ፈረቓኺ ድማ ድሕሪ ሓሙሽተ ደቒቕ ይጅምር። እንታይ ትገብሪ?", x: "ካልአይቲ መዓልትኹም እያ። ክፍሊ ምቕያር ክዳን ክትረኽብዎ ኣይከኣልኩምን፡ ፈረቓኹም ድማ ድሕሪ ሓሙሽተ ደቒቕ ይጅምር። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o1': { m: "ነቲ ቀዳማይ እትርእዮ ብጻይ ስራሕ ሕተት።", f: "ነቲ ቀዳማይ እትርእይዮ ብጻይ ስራሕ ሕተቲ።", x: "ነቲ ቀዳማይ እትርእይዎ ብጻይ ስራሕ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o2': { m: "ምድላይ ቀጽል፡ ደጊምካ ምሕታት ዘሕፍር እዩ።", f: "ምድላይ ቀጽሊ፡ ደጊምኪ ምሕታት ዘሕፍር እዩ።", x: "ምድላይ ቀጽሉ፡ ደጊምኩም ምሕታት ዘሕፍር እዩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.o3': { m: "ብናይ ገዛእ ርእስኻ ክዳን ስራሕ ጀምር።", f: "ብናይ ገዛእ ርእስኺ ክዳን ስራሕ ጀምሪ።", x: "ብናይ ገዛእ ርእስኹም ክዳን ስራሕ ጀምሩ።" }, // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.w': { m: "ምሕታት ዓሰርተ ካልኢት ይወስድ። በይንኻ ምድላይ ከደንጉየካ ይኽእል። ብጾት ስራሕ ኣብ ሓድሽ ቦታ መገዲ ምርካብ ኣጸጋሚ ምዃኑ ይፈልጡ እዮም።", f: "ምሕታት ዓሰርተ ካልኢት ይወስድ። በይንኺ ምድላይ ከደንጉየኪ ይኽእል። ብጾት ስራሕ ኣብ ሓድሽ ቦታ መገዲ ምርካብ ኣጸጋሚ ምዃኑ ይፈልጡ እዮም።", x: "ምሕታት ዓሰርተ ካልኢት ይወስድ። በይንኹም ምድላይ ከደንጉየኩም ይኽእል። ብጾት ስራሕ ኣብ ሓድሽ ቦታ መገዲ ምርካብ ኣጸጋሚ ምዃኑ ይፈልጡ እዮም።" }, // nieuw, nalezen // nagelezen AI 22 nov
    // "Tijd en rooster" and "Als het misgaat" at four lessons (23 November 2026): the tips of l.roster, l.breaks, l.wound and l.callhelp.
    'c.wound': { m: "ቃጸሎ? ብማይ ኣዝሕሎ", f: "ቃጸሎ? ብማይ ኣዝሕልዮ", x: "ቃጸሎ? ብማይ ኣዝሕልዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.b': { m: "ንእሽቶ መቑሰሊ፡ ብጽሩይ ጨርቂ ወይ መሸፈኒ ቁስሊ ጸቅጦ፡ ንሰብ ቀዳማይ ረዲኤት ድማ ንገሮ። ቃጸሎ፡ ብቕጽበት ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕሎ፡ እንተ ወሓደ ን10 ደቒቕ። ኣብ ዓይኒኻ ገለ ኣትዩ? ብማይ ሓጽቦ፡ ወይ ኣብ መሕጸቢ ዓይኒ። ከቢድ ድዩ? ናብ 112 ደውል። ኣብ ቀዳመይቲ መዓልቲኻ፡ ሳጹን ቀዳማይ ረዲኤትን መሕጸቢ ዓይንን ኣበይ ከም ዘለዉ ሕተት።", f: "ንእሽቶ መቑሰሊ፡ ብጽሩይ ጨርቂ ወይ መሸፈኒ ቁስሊ ጸቅጥዮ፡ ንሰብ ቀዳማይ ረዲኤት ድማ ንገርዮ። ቃጸሎ፡ ብቕጽበት ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕልዮ፡ እንተ ወሓደ ን10 ደቒቕ። ኣብ ዓይኒኺ ገለ ኣትዩ? ብማይ ሓጽብዮ፡ ወይ ኣብ መሕጸቢ ዓይኒ። ከቢድ ድዩ? ናብ 112 ደውሊ። ኣብ ቀዳመይቲ መዓልቲኺ፡ ሳጹን ቀዳማይ ረዲኤትን መሕጸቢ ዓይንን ኣበይ ከም ዘለዉ ሕተቲ።", x: "ንእሽቶ መቑሰሊ፡ ብጽሩይ ጨርቂ ወይ መሸፈኒ ቁስሊ ጸቅጥዎ፡ ንሰብ ቀዳማይ ረዲኤት ድማ ንገርዎ። ቃጸሎ፡ ብቕጽበት ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕልዎ፡ እንተ ወሓደ ን10 ደቒቕ። ኣብ ዓይኒኹም ገለ ኣትዩ? ብማይ ሓጽብዎ፡ ወይ ኣብ መሕጸቢ ዓይኒ። ከቢድ ድዩ? ናብ 112 ደውሉ። ኣብ ቀዳመይቲ መዓልቲኹም፡ ሳጹን ቀዳማይ ረዲኤትን መሕጸቢ ዓይንን ኣበይ ከም ዘለዉ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.p': "ተቓጺለ። ቡምባ ማይ ኣበይ ኣሎ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.s': { m: "ሓደ ብጻይ ስራሕ ኣብ ውዑይ ማሽን ኢዱ ይቃጸል። እንታይ ትገብር?", f: "ሓደ ብጻይ ስራሕ ኣብ ውዑይ ማሽን ኢዱ ይቃጸል። እንታይ ትገብሪ?", x: "ሓደ ብጻይ ስራሕ ኣብ ውዑይ ማሽን ኢዱ ይቃጸል። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o1': { m: "ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕሎ።", f: "ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕልዮ።", x: "ብዝውሕዝ ለበጥ ዝበለ ማይ ኣዝሕልዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o2': { m: "ብቕጽበት ጠስሚ ወይ ክሬም ግበረሉ።", f: "ብቕጽበት ጠስሚ ወይ ክሬም ግበርሉ።", x: "ብቕጽበት ጠስሚ ወይ ክሬም ግበሩሉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.o3': { m: "በረድ ብቐጥታ ኣብ ቆርበት ግበር፡ ተጸበ ድማ።", f: "በረድ ብቐጥታ ኣብ ቆርበት ግበሪ፡ ተጸበዪ ድማ።", x: "በረድ ብቐጥታ ኣብ ቆርበት ግበሩ፡ ተጸበዩ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.w': "ማይ ነቲ ሙቐት ካብ ቆርበት የውጽኦ፡ ስለዚ እቲ ቃጸሎ ብዙሕ ኣይዓሙቕን። በረድ፡ ጠስምን ክሬምን ከጋድድዎ ይኽእሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp': { m: "ናብ 112 ምድዋል፡ ቅድም ኣበይ ከም ዘለኻ ንገር", f: "ናብ 112 ምድዋል፡ ቅድም ኣበይ ከም ዘለኺ ንገሪ", x: "ናብ 112 ምድዋል፡ ቅድም ኣበይ ከም ዘለኹም ንገሩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.b': { m: "ህይወት ኣብ ሓደጋ ክህሉ ከሎ፡ ወይ ነፍሲ ወከፍ ደቒቕ ኣገዳሲ ክትከውን ከላ፡ ናብ 112 ደውል። ቅድም ኣበይ ከም ዘለኻ ንገር፡ ጎደና፡ ቁጽሪ ገዛን ከተማን። ድሕሪኡ እንታይ ከም ዘጋጠመ ንገር። ኣብ መስመር ጽናሕ፡ ንሕቶታት ድማ መልስ። ንሓደ ብጻይ ስራሕ ኣብ መእተዊ ንኣምቡላንስ ክጽበ ሕተቶ። ኣድራሻ ስራሕካ ኣይትፈልጥን ዲኻ? ሎሚ ድለዮ።", f: "ህይወት ኣብ ሓደጋ ክህሉ ከሎ፡ ወይ ነፍሲ ወከፍ ደቒቕ ኣገዳሲ ክትከውን ከላ፡ ናብ 112 ደውሊ። ቅድም ኣበይ ከም ዘለኺ ንገሪ፡ ጎደና፡ ቁጽሪ ገዛን ከተማን። ድሕሪኡ እንታይ ከም ዘጋጠመ ንገሪ። ኣብ መስመር ጽንሒ፡ ንሕቶታት ድማ መልሲ። ንሓደ ብጻይ ስራሕ ኣብ መእተዊ ንኣምቡላንስ ክጽበ ሕተትዮ። ኣድራሻ ስራሕኪ ኣይትፈልጢን ዲኺ? ሎሚ ድለይዮ።", x: "ህይወት ኣብ ሓደጋ ክህሉ ከሎ፡ ወይ ነፍሲ ወከፍ ደቒቕ ኣገዳሲ ክትከውን ከላ፡ ናብ 112 ደውሉ። ቅድም ኣበይ ከም ዘለኹም ንገሩ፡ ጎደና፡ ቁጽሪ ገዛን ከተማን። ድሕሪኡ እንታይ ከም ዘጋጠመ ንገሩ። ኣብ መስመር ጽንሑ፡ ንሕቶታት ድማ መልሱ። ንሓደ ብጻይ ስራሕ ኣብ መእተዊ ንኣምቡላንስ ክጽበ ሕተትዎ። ኣድራሻ ስራሕኩም ኣይትፈልጡን ዲኹም? ሎሚ ድለይዎ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.callhelp.p': "ናብ 112 እድውል ኣለኹ። ንኣምቡላንስ ክትጽበይዎ ትኽእሉ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.s': { m: "ናብ 112 ትድውል። እቲ ዝምልስ ሰብ ብዙሕ ሕቶታት ይሓተካ፡ ንስኻ ግን ንብጻይ ስራሕካ ክትሕግዝ ትደሊ። እንታይ ትገብር?", f: "ናብ 112 ትድውሊ። እቲ ዝምልስ ሰብ ብዙሕ ሕቶታት ይሓተኪ፡ ንስኺ ግን ንብጻይ ስራሕኪ ክትሕግዚ ትደልዪ። እንታይ ትገብሪ?", x: "ናብ 112 ትድውሉ። እቲ ዝምልስ ሰብ ብዙሕ ሕቶታት ይሓተኩም፡ ንስኹም ግን ንብጻይ ስራሕኩም ክትሕግዙ ትደልዩ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o1': { m: "ኣብ መስመር ጽናሕ፡ መልስ ድማ።", f: "ኣብ መስመር ጽንሒ፡ መልሲ ድማ።", x: "ኣብ መስመር ጽንሑ፡ መልሱ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o2': { m: "ተሌፎን ዕጸው፡ ናብ ብጻይ ስራሕካ ኪድ።", f: "ተሌፎን ዕጸዊ፡ ናብ ብጻይ ስራሕኪ ኪዲ።", x: "ተሌፎን ዕጸዉ፡ ናብ ብጻይ ስራሕኩም ኪዱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.o3': { m: "«ቀልጢፍኩም ምጹ» በል፡ ተሌፎን ድማ ዕጸው።", f: "«ቀልጢፍኩም ምጹ» በሊ፡ ተሌፎን ድማ ዕጸዊ።", x: "«ቀልጢፍኩም ምጹ» በሉ፡ ተሌፎን ድማ ዕጸዉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.w': { m: "እቲ ዝምልስ ሰብ ክትዛረብ ከለኻ ሓገዝ ይሰድድ፡ እንታይ ክትገብር ከም ዘለካ ድማ ይነግረካ። ቀልጢፍካ ተሌፎን ምስ ዓጸኻ፡ ሓገዝ ናብ ጌጋ ቦታ ክኸይድ ይኽእል።", f: "እቲ ዝምልስ ሰብ ክትዛረቢ ከለኺ ሓገዝ ይሰድድ፡ እንታይ ክትገብሪ ከም ዘለኪ ድማ ይነግረኪ። ቀልጢፍኪ ተሌፎን ምስ ዓጸኺ፡ ሓገዝ ናብ ጌጋ ቦታ ክኸይድ ይኽእል።", x: "እቲ ዝምልስ ሰብ ክትዛረቡ ከለኹም ሓገዝ ይሰድድ፡ እንታይ ክትገብሩ ከም ዘለኩም ድማ ይነግረኩም። ቀልጢፍኩም ተሌፎን ምስ ዓጸኹም፡ ሓገዝ ናብ ጌጋ ቦታ ክኸይድ ይኽእል።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster': { m: "መዓልታዊ መደብ ስራሕካ ርአ", f: "መዓልታዊ መደብ ስራሕኪ ርአዪ", x: "መዓልታዊ መደብ ስራሕኩም ርአዩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.b': { m: "መደብ ስራሕ ክቕየር ይኽእል፡ ብሓጺር ግዜ እውን። መዓልታዊ ርአዮ፡ ኣብቲ ኣፕ ወይ ኣብ ሰሌዳ። ለውጢ ትርኢ ዶ? ክትመጽእ ከም እትኽእል ኣረጋግጽ። ሓንቲ መዓልቲ ክትሰርሕ ኣይትኽእልን? ኣቐዲምካ ንገር፡ በታ መዓልቲ እቲኣ ኣይኮነን። ፈረቓ ስራሕ ክትቕይር ትደሊ? ቅድም ንተቖጻጻሪኻ ሕተት፡ ብዙሓት ትካላት ንዕኡ ሕጊ ኣለዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መደብ ስራሕ ክቕየር ይኽእል፡ ብሓጺር ግዜ እውን። መዓልታዊ ርአይዮ፡ ኣብቲ ኣፕ ወይ ኣብ ሰሌዳ። ለውጢ ትርእዪ ዶ? ክትመጽኢ ከም እትኽእሊ ኣረጋግጺ። ሓንቲ መዓልቲ ክትሰርሒ ኣይትኽእሊን? ኣቐዲምኪ ንገሪ፡ በታ መዓልቲ እቲኣ ኣይኮነን። ፈረቓ ስራሕ ክትቕይሪ ትደልዪ? ቅድም ንተቖጻጻሪኺ ሕተቲ፡ ብዙሓት ትካላት ንዕኡ ሕጊ ኣለዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መደብ ስራሕ ክቕየር ይኽእል፡ ብሓጺር ግዜ እውን። መዓልታዊ ርአይዎ፡ ኣብቲ ኣፕ ወይ ኣብ ሰሌዳ። ለውጢ ትርእዩ ዶ? ክትመጽኡ ከም እትኽእሉ ኣረጋግጹ። ሓንቲ መዓልቲ ክትሰርሑ ኣይትኽእሉን? ኣቐዲምኩም ንገሩ፡ በታ መዓልቲ እቲኣ ኣይኮነን። ፈረቓ ስራሕ ክትቕይሩ ትደልዩ? ቅድም ንተቖጻጻሪኹም ሕተቱ፡ ብዙሓት ትካላት ንዕኡ ሕጊ ኣለዎም። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.roster.p': "ቀዳም ክሰርሕ ኣይክእልን እየ። ክቕይር ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.s': { m: "መደብ ስራሕካ ተቐይሩ። ሕጂ ቀዳም ክትሰርሕ ኣለካ፡ ግን ኣይትኽእልን። እንታይ ትገብር?", f: "መደብ ስራሕኪ ተቐይሩ። ሕጂ ቀዳም ክትሰርሒ ኣለኪ፡ ግን ኣይትኽእሊን። እንታይ ትገብሪ?", x: "መደብ ስራሕኩም ተቐይሩ። ሕጂ ቀዳም ክትሰርሑ ኣለኩም፡ ግን ኣይትኽእሉን። እንታይ ትገብሩ?" }, // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.roster.o1': { m: "ሎሚ ንተቖጻጻሪኻ ንገሮ፡ ክትቕይር ድማ ሕተት።", f: "ሎሚ ንተቖጻጻሪኺ ንገርዮ፡ ክትቕይሪ ድማ ሕተቲ።", x: "ሎሚ ንተቖጻጻሪኹም ንገርዎ፡ ክትቕይሩ ድማ ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o2': { m: "ገለ ኣይትበል፡ ቀዳም ኣብ ገዛ ጽናሕ።", f: "ገለ ኣይትበሊ፡ ቀዳም ኣብ ገዛ ጽንሒ።", x: "ገለ ኣይትበሉ፡ ቀዳም ኣብ ገዛ ጽንሑ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.o3': { m: "ንብጻይ ስራሕ ክኸይድ ሕተቶ፡ ንሓደ እውን ኣይትንገር።", f: "ንብጻይ ስራሕ ክኸይድ ሕተትዮ፡ ንሓደ እውን ኣይትንገሪ።", x: "ንብጻይ ስራሕ ክኸይድ ሕተትዎ፡ ንሓደ እውን ኣይትንገሩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.roster.w': { m: "ኣቐዲምካ ምስ ነገርካ፡ ተቖጻጻሪኻ ካልእ ሰብ ክረክብ ይኽእል። ብዘይ ቃል ምትራፍ ከም ኣዝዩ ከቢድ ነገር እዩ ዝርአ።", f: "ኣቐዲምኪ ምስ ነገርኪ፡ ተቖጻጻሪኺ ካልእ ሰብ ክረክብ ይኽእል። ብዘይ ቃል ምትራፍ ከም ኣዝዩ ከቢድ ነገር እዩ ዝርአ።", x: "ኣቐዲምኩም ምስ ነገርኩም፡ ተቖጻጻሪኹም ካልእ ሰብ ክረክብ ይኽእል። ብዘይ ቃል ምትራፍ ከም ኣዝዩ ከቢድ ነገር እዩ ዝርአ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks': { m: "ሰዓታትካ ጽሓፍ", f: "ሰዓታትኪ ጽሓፊ", x: "ሰዓታትኩም ጽሓፉ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.b': { m: "መዓልታዊ መዓስ ከም እትጅምር፡ መዓስ ከም እትውድእን ዕረፍቲኻ ክንደይ ከም ዝወስድን ጽሓፍ። ደሞዝካ ቅኑዕ ምስ ዘይከውን፡ ናይ ባዕልካ ዝርዝር ይሕግዝ። ኣቐዲምካ ክትከይድ ኣለካ ድዩ፡ ንኣብነት ናብ ሓኪም? ብግዜኡ ንተቖጻጻሪኻ ሕተቶ። ካብቲ ዝተመደበ ንላዕሊ ሰሪሕካ? ንሱ እውን ጽሓፎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "መዓልታዊ መዓስ ከም እትጅምሪ፡ መዓስ ከም እትውድኢን ዕረፍቲኺ ክንደይ ከም ዝወስድን ጽሓፊ። ደሞዝኪ ቅኑዕ ምስ ዘይከውን፡ ናይ ባዕልኪ ዝርዝር ይሕግዝ። ኣቐዲምኪ ክትከዲ ኣለኪ ድዩ፡ ንኣብነት ናብ ሓኪም? ብግዜኡ ንተቖጻጻሪኺ ሕተትዮ። ካብቲ ዝተመደበ ንላዕሊ ሰሪሕኪ? ንሱ እውን ጽሓፍዮ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "መዓልታዊ መዓስ ከም እትጅምሩ፡ መዓስ ከም እትውድኡን ዕረፍቲኹም ክንደይ ከም ዝወስድን ጽሓፉ። ደሞዝኩም ቅኑዕ ምስ ዘይከውን፡ ናይ ባዕልኩም ዝርዝር ይሕግዝ። ኣቐዲምኩም ክትከዱ ኣለኩም ድዩ፡ ንኣብነት ናብ ሓኪም? ብግዜኡ ንተቖጻጻሪኹም ሕተትዎ። ካብቲ ዝተመደበ ንላዕሊ ሰሪሕኩም? ንሱ እውን ጽሓፍዎ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.p': "ጽባሕ ናብ ሓኪም ክኸይድ ኣለኒ። ኣቐዲመ ክኸይድ ይኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.s': { m: "ጽባሕ ሰዓት ሰለስተ ናብ ሓኪም ክትከይድ ኣለካ። ፈረቓ ስራሕካ ሰዓት ሓሙሽተ ይውዳእ። እንታይ ትገብር?", f: "ጽባሕ ሰዓት ሰለስተ ናብ ሓኪም ክትከዲ ኣለኪ። ፈረቓ ስራሕኪ ሰዓት ሓሙሽተ ይውዳእ። እንታይ ትገብሪ?", x: "ጽባሕ ሰዓት ሰለስተ ናብ ሓኪም ክትከዱ ኣለኩም። ፈረቓ ስራሕኩም ሰዓት ሓሙሽተ ይውዳእ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o1': { m: "ኣቐዲምካ ክትከይድ ይፍቀደልካ እንተ ኾይኑ ሎሚ ንተቖጻጻሪኻ ሕተቶ።", f: "ኣቐዲምኪ ክትከዲ ይፍቀደልኪ እንተ ኾይኑ ሎሚ ንተቖጻጻሪኺ ሕተትዮ።", x: "ኣቐዲምኩም ክትከዱ ይፍቀደልኩም እንተ ኾይኑ ሎሚ ንተቖጻጻሪኹም ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o2': { m: "ሰዓት ሰለስተ ኪድ፡ ንጽባሒቱ ድማ ግለጾ።", f: "ሰዓት ሰለስተ ኪዲ፡ ንጽባሒቱ ድማ ግለጽዮ።", x: "ሰዓት ሰለስተ ኪዱ፡ ንጽባሒቱ ድማ ግለጽዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.o3': { m: "ሓኪም ሕደጎ፡ ፈረቓ ስራሕካ ድማ ወድእ።", f: "ሓኪም ሕደግዮ፡ ፈረቓ ስራሕኪ ድማ ወድኢ።", x: "ሓኪም ሕደግዎ፡ ፈረቓ ስራሕኩም ድማ ወድኡ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.w': { m: "ብግዜኡ ምሕታት ንተቖጻጻሪኻ ስራሕ ከውጽን የኽእሎ። ከይሓተትካ ምኻድ ከም ዘይእሙን ምዃን እዩ ዝርአ።", f: "ብግዜኡ ምሕታት ንተቖጻጻሪኺ ስራሕ ከውጽን የኽእሎ። ከይሓተትኪ ምኻድ ከም ዘይእሙን ምዃን እዩ ዝርአ።", x: "ብግዜኡ ምሕታት ንተቖጻጻሪኹም ስራሕ ከውጽን የኽእሎ። ከይሓተትኩም ምኻድ ከም ዘይእሙን ምዃን እዩ ዝርአ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'c.firstweeks': { m: "ደጊምካ ሕተት፡ እዚ ልሙድ እዩ", f: "ደጊምኪ ሕተቲ፡ እዚ ልሙድ እዩ", x: "ደጊምኩም ሕተቱ፡ እዚ ልሙድ እዩ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.b': { m: "ኣብ ቀዳሞት ሰሙናትካ፡ ኩሉ ከም እትፈልጥ ዝጽበ ሰብ የለን። መብዛሕትኡ ግዜ ዙረት ምልላይ (rondleiding) ይግበረልካ፡ ዝመርሓካ ብጻይ ስራሕ ድማ ይወሃበካ። ቅድም ተዓዘብ፡ ድሕሪኡ ብጻይ ስራሕካ እናተዓዘበ ባዕልካ ግበሮ። ገለ ነገር ረሲዕካ ዲኻ? «Wil je het nog een keer laten zien?» ኢልካ ደጊምካ ሕተት። እዚ ካብ ምግማት ይሓይሽ። ሓደሽቲ ቃላትን ስጉምትታትን ኣብ ንእሽቶ መጽሓፍ ማስታወሻ ጽሓፍ። ገለ ውዕላት ብግዜ ፈተነ (proeftijd) ይጅምሩ፡ ሽዑ ንስኻ ወይ ኣስራሒኻ ነቲ ስራሕ ብቕልጡፍ ከተቋርጽዎ ትኽእሉ ኢኹም። ውዕልካ ግዜ ፈተነ እንተ ኣለዎ ሕተት። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ቀዳሞት ሰሙናትኪ፡ ኩሉ ከም እትፈልጢ ዝጽበ ሰብ የለን። መብዛሕትኡ ግዜ ዙረት ምልላይ (rondleiding) ይግበረልኪ፡ ዝመርሓኪ ብጻይ ስራሕ ድማ ይወሃበኪ። ቅድም ተዓዘቢ፡ ድሕሪኡ ብጻይ ስራሕኪ እናተዓዘበ ባዕልኺ ግበርዮ። ገለ ነገር ረሲዕኪ ዲኺ? «Wil je het nog een keer laten zien?» ኢልኪ ደጊምኪ ሕተቲ። እዚ ካብ ምግማት ይሓይሽ። ሓደሽቲ ቃላትን ስጉምትታትን ኣብ ንእሽቶ መጽሓፍ ማስታወሻ ጽሓፊ። ገለ ውዕላት ብግዜ ፈተነ (proeftijd) ይጅምሩ፡ ሽዑ ንስኺ ወይ ኣስራሒኺ ነቲ ስራሕ ብቕልጡፍ ከተቋርጽዎ ትኽእሉ ኢኹም። ውዕልኪ ግዜ ፈተነ እንተ ኣለዎ ሕተቲ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ቀዳሞት ሰሙናትኩም፡ ኩሉ ከም እትፈልጡ ዝጽበ ሰብ የለን። መብዛሕትኡ ግዜ ዙረት ምልላይ (rondleiding) ይግበረልኩም፡ ዝመርሓኩም ብጻይ ስራሕ ድማ ይወሃበኩም። ቅድም ተዓዘቡ፡ ድሕሪኡ ብጻይ ስራሕኩም እናተዓዘበ ባዕልኹም ግበርዎ። ገለ ነገር ረሲዕኩም ዲኹም? «Wil je het nog een keer laten zien?» ኢልኩም ደጊምኩም ሕተቱ። እዚ ካብ ምግማት ይሓይሽ። ሓደሽቲ ቃላትን ስጉምትታትን ኣብ ንእሽቶ መጽሓፍ ማስታወሻ ጽሓፉ። ገለ ውዕላት ብግዜ ፈተነ (proeftijd) ይጅምሩ፡ ሽዑ ንስኹም ወይ ኣስራሒኹም ነቲ ስራሕ ብቕልጡፍ ከተቋርጽዎ ትኽእሉ ኢኹም። ውዕልኩም ግዜ ፈተነ እንተ ኣለዎ ሕተቱ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.p': "ረሲዐዮ። ሓንሳብ ደጊምካ ከተርእየኒ ትኽእል ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.s': { m: "ትማሊ ብጻይ ስራሕካ ነቲ ማሽን ብኸመይ ከም ዝብገስ ኣርእዩካ። ሎሚ ነቲ ሳልሳይ ስጉምቲ ኣይትዝክሮን። እንታይ ትገብር?", f: "ትማሊ ብጻይ ስራሕኪ ነቲ ማሽን ብኸመይ ከም ዝብገስ ኣርእዩኪ። ሎሚ ነቲ ሳልሳይ ስጉምቲ ኣይትዝክርዮን። እንታይ ትገብሪ?", x: "ትማሊ ብጻይ ስራሕኩም ነቲ ማሽን ብኸመይ ከም ዝብገስ ኣርእዩኩም። ሎሚ ነቲ ሳልሳይ ስጉምቲ ኣይትዝክርዎን። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o1': { m: "ብጻይ ስራሕካ ሓንሳብ ደጊሙ ከርእየካ ሕተቶ።", f: "ብጻይ ስራሕኪ ሓንሳብ ደጊሙ ከርእየኪ ሕተትዮ።", x: "ብጻይ ስራሕኩም ሓንሳብ ደጊሙ ከርእየኩም ሕተትዎ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o2': { m: "ገምት፡ ፈትን ድማ።", f: "ገምቲ፡ ፈትኒ ድማ።", x: "ገምቱ፡ ፈትኑ ድማ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.o3': { m: "ካልእ ሰብ ክሳብ ዘበግሶ ተጸበ።", f: "ካልእ ሰብ ክሳብ ዘበግሶ ተጸበዪ።", x: "ካልእ ሰብ ክሳብ ዘበግሶ ተጸበዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.w': "ኣብ ቀዳሞት ሰሙናት ዳግማይ ምሕታት ልሙድ እዩ። ኣብ ማሽን ምግማት ሓደገኛ ክኸውን ይኽእል፡ ዝያዳ ግዜ ድማ ይወስድ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick': { m: "ኣብ መንገዲ እግሪ ተጓዓዝ", f: "ኣብ መንገዲ እግሪ ተጓዓዚ", x: "ኣብ መንገዲ እግሪ ተጓዓዙ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.b': { m: "ኣብ ዓቢ መኽዘን፡ ብዝርዝር ምእካብን ስካነርን ትእዛዛት ትእክብ፡ ነፍሲ ወከፍ ኣቕሓ ስካን ትገብር፡ ከምኡ ትኽክለኛ ፍርያት ናብ ትኽክለኛ ዓሚል ይኸይድ። ብዙሓት ኣኻባት ትእዛዝ ናብ ላዕሊ ዘልዕሎም ንእሽቶ መኪና፡ ወይ ንነዋሕቲ መደርደሪታት ሪች ትራክ ይዝውሩ። ስልጠናኡ ምስ ወሰድካ ጥራይ ዘውሮ፡ መብዛሕትኡ ግዜ ምስ ሰርቲፊኬት። ኣብ መንገድታት እግሪ ተጓዓዝ፡ ካብ ዝንቀሳቐሳ መካይን ድማ ርሓቕ፡ ዘዋሪ ኩሉ ግዜ ክርእየካ ኣይክእልን እዩ። ኣብ ዝሑል ክፍሊ ወይ ፍሪዘር፡ ካብ ስራሕ ዝወሃበካ ውዑይ ክዳን፡ ጓንትን ቆብዕን ኽደን። ናይ ምውዓይ ዕረፍትታትካ ውሰድ፡ ክትኣቱ ከለኻ ድማ ንሓደ ሰብ ንገር። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።", f: "ኣብ ዓቢ መኽዘን፡ ብዝርዝር ምእካብን ስካነርን ትእዛዛት ትእክቢ፡ ነፍሲ ወከፍ ኣቕሓ ስካን ትገብሪ፡ ከምኡ ትኽክለኛ ፍርያት ናብ ትኽክለኛ ዓሚል ይኸይድ። ብዙሓት ኣኻባት ትእዛዝ ናብ ላዕሊ ዘልዕሎም ንእሽቶ መኪና፡ ወይ ንነዋሕቲ መደርደሪታት ሪች ትራክ ይዝውሩ። ስልጠናኡ ምስ ወሰድኪ ጥራይ ዘውርዮ፡ መብዛሕትኡ ግዜ ምስ ሰርቲፊኬት። ኣብ መንገድታት እግሪ ተጓዓዚ፡ ካብ ዝንቀሳቐሳ መካይን ድማ ርሓቒ፡ ዘዋሪ ኩሉ ግዜ ክርእየኪ ኣይክእልን እዩ። ኣብ ዝሑል ክፍሊ ወይ ፍሪዘር፡ ካብ ስራሕ ዝወሃበኪ ውዑይ ክዳን፡ ጓንትን ቆብዕን ኽደኒ። ናይ ምውዓይ ዕረፍትታትኪ ውሰዲ፡ ክትኣትዊ ከለኺ ድማ ንሓደ ሰብ ንገሪ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።", x: "ኣብ ዓቢ መኽዘን፡ ብዝርዝር ምእካብን ስካነርን ትእዛዛት ትእክቡ፡ ነፍሲ ወከፍ ኣቕሓ ስካን ትገብሩ፡ ከምኡ ትኽክለኛ ፍርያት ናብ ትኽክለኛ ዓሚል ይኸይድ። ብዙሓት ኣኻባት ትእዛዝ ናብ ላዕሊ ዘልዕሎም ንእሽቶ መኪና፡ ወይ ንነዋሕቲ መደርደሪታት ሪች ትራክ ይዝውሩ። ስልጠናኡ ምስ ወሰድኩም ጥራይ ዘውርዎ፡ መብዛሕትኡ ግዜ ምስ ሰርቲፊኬት። ኣብ መንገድታት እግሪ ተጓዓዙ፡ ካብ ዝንቀሳቐሳ መካይን ድማ ርሓቑ፡ ዘዋሪ ኩሉ ግዜ ክርእየኩም ኣይክእልን እዩ። ኣብ ዝሑል ክፍሊ ወይ ፍሪዘር፡ ካብ ስራሕ ዝወሃበኩም ውዑይ ክዳን፡ ጓንትን ቆብዕን ኽደኑ። ናይ ምውዓይ ዕረፍትታትኩም ውሰዱ፡ ክትኣትዉ ከለኹም ድማ ንሓደ ሰብ ንገሩ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.p': "ኣብ ካንቲን ቁሩብ ክውዕይ እየ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.s': { m: "ናብቲ ካልእ መተሓላለፊ ክትከይድ ኣለካ። እቲ መንገዲ እግሪ ይዞር፡ ብማእከል መካይን ትኽ ኢልካ ምስጋር ይቐልጥፍ። እንታይ ትገብር?", f: "ናብቲ ካልእ መተሓላለፊ ክትከዲ ኣለኪ። እቲ መንገዲ እግሪ ይዞር፡ ብማእከል መካይን ትኽ ኢልኪ ምስጋር ይቐልጥፍ። እንታይ ትገብሪ?", x: "ናብቲ ካልእ መተሓላለፊ ክትከዱ ኣለኩም። እቲ መንገዲ እግሪ ይዞር፡ ብማእከል መካይን ትኽ ኢልኩም ምስጋር ይቐልጥፍ። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o1': { m: "ነዊሕ እንተ ኾነ እውን፡ ነቲ መንገዲ እግሪ ተጠቐም።", f: "ነዊሕ እንተ ኾነ እውን፡ ነቲ መንገዲ እግሪ ተጠቐሚ።", x: "ነዊሕ እንተ ኾነ እውን፡ ነቲ መንገዲ እግሪ ተጠቐሙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o2': { m: "ብማእከል መካይን ቀልጢፍካ ጉየ።", f: "ብማእከል መካይን ቀልጢፍኪ ጉየዪ።", x: "ብማእከል መካይን ቀልጢፍኩም ጉየዩ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.o3': { m: "ብእግርኻ ሕለፍ፡ ንዘወርቲ ድማ ኢድካ ወዝውዘሎም።", f: "ብእግርኺ ሕለፊ፡ ንዘወርቲ ድማ ኢድኪ ወዝውዝሎም።", x: "ብእግርኹም ሕለፉ፡ ንዘወርቲ ድማ ኢድኩም ወዝውዙሎም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.w': { m: "ዘዋሪ መኪና መብዛሕትኡ ግዜ ክርእየካ ኣይክእልን፡ ንኣብነት ድሕሪ ነዊሕ ጽዕነት። ኣብ መንገዲ እግሪ፡ ሰባት ከም ዝህልዉ ይፍለጥ፡ ውሑሳት ድማ እዮም።", f: "ዘዋሪ መኪና መብዛሕትኡ ግዜ ክርእየኪ ኣይክእልን፡ ንኣብነት ድሕሪ ነዊሕ ጽዕነት። ኣብ መንገዲ እግሪ፡ ሰባት ከም ዝህልዉ ይፍለጥ፡ ውሑሳት ድማ እዮም።", x: "ዘዋሪ መኪና መብዛሕትኡ ግዜ ክርእየኩም ኣይክእልን፡ ንኣብነት ድሕሪ ነዊሕ ጽዕነት። ኣብ መንገዲ እግሪ፡ ሰባት ከም ዝህልዉ ይፍለጥ፡ ውሑሳት ድማ እዮም።" }, // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (27 November 2026).
    'l.appraisal': "ዘተ ብዛዕባ ኣፈጻጽማ ስራሕ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.functioneringsgesprek': { m: "ዘተ ኣፈጻጽማ (ምስ ተቖጻጻሪኻ ብዛዕባ ከመይ ይኸይድ ከም ዘሎ ስራሕካን እንታይ ክትመሃር ከም እትደልን ዝግበር ዘተ)", f: "ዘተ ኣፈጻጽማ (ምስ ተቖጻጻሪኺ ብዛዕባ ከመይ ይኸይድ ከም ዘሎ ስራሕኪን እንታይ ክትመሃሪ ከም እትደልዪን ዝግበር ዘተ)", x: "ዘተ ኣፈጻጽማ (ምስ ተቖጻጻሪኹም ብዛዕባ ከመይ ይኸይድ ከም ዘሎ ስራሕኩምን እንታይ ክትመሃሩ ከም እትደልዩን ዝግበር ዘተ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.beoordelingsgesprek': { m: "ዘተ ገምጋም (ተቖጻጻሪኻ ብዛዕባ ስራሕካ ፍርዲ ዝህበሉ ዘተ)", f: "ዘተ ገምጋም (ተቖጻጻሪኺ ብዛዕባ ስራሕኪ ፍርዲ ዝህበሉ ዘተ)", x: "ዘተ ገምጋም (ተቖጻጻሪኹም ብዛዕባ ስራሕኩም ፍርዲ ዝህበሉ ዘተ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorbereiden': "ምድላው (ንሓደ ነገር ድሉው ምዃን)", // nieuw, nalezen // nagelezen AI 28 nov
    'w.goedgaan': "ጽቡቕ ምኻድ", // nieuw, nalezen // nagelezen AI 28 nov
    'w.doel': { m: "ዕላማ (ክትበጽሖ እትደሊ)", f: "ዕላማ (ክትበጽሕዮ እትደልዪ)", x: "ዕላማ (ክትበጽሕዎ እትደልዩ)" }, // nieuw, nalezen // nagelezen AI 28 nov
    'w.voorgezien': { m: "«ተራእዩ» ኢልካ ምፍራም (ኣንቢብካዮ ኣለኻ፡ ትሰማማዕ ኣለኻ ማለት ኣይኮነን)", f: "«ተራእዩ» ኢልኪ ምፍራም (ኣንቢብክዮ ኣለኺ፡ ትሰማምዒ ኣለኺ ማለት ኣይኮነን)", x: "«ተራእዩ» ኢልኩም ምፍራም (ኣንቢብኩምዎ ኣለኹም፡ ትሰማምዑ ኣለኹም ማለት ኣይኮነን)" }, // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.1': "ነቲ ዘተ ብጽቡቕ እዳሉ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.2': "ገለ ሓድሽ ነገር ክመሃር እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    's.appraisal.3': "ነቲ ጸብጻብ ቅድም ከንብቦ ይፍቀደለይ ዶ?", // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.q': { m: "ንዝመጽእ ዓመት ዕላማኻ እንታይ እዩ?", f: "ንዝመጽእ ዓመት ዕላማኺ እንታይ እዩ?", x: "ንዝመጽእ ዓመት ዕላማኹም እንታይ እዩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'd.appraisal.a': "ሰርቲፊኬት ፎርክሊፍት ክረክብ እደሊ።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal': { m: "ዘተኻ፡ ኣዳልዎ፡ ኣንብቦ", f: "ዘተኺ፡ ኣዳልውዮ፡ ኣንብብዮ", x: "ዘተኹም፡ ኣዳልውዎ፡ ኣንብብዎ" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.b': { m: "ብዙሓት ትካላት ኣብ ዓመት ሓንሳብ ወይ ክልተ ግዜ ብዛዕባ ስራሕካ ዘተ ይገብሩ። ኣብ ዘተ ኣፈጻጽማ (functioneringsgesprek) ብሓባር ትዘራረቡ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ክመሓየሽ ይኽእል፡ እንታይ ክትመሃር ከም እትደሊ ድማ። ኣብ ዘተ ገምጋም (beoordelingsgesprek) ተቖጻጻሪኻ ፍርዲ ይህብ። እዚ ኣብ ደሞዝካ ወይ ኣብ ሓድሽ ውዕል ክጸሉ ይኽእል። ነቲ ዘተ ኣዳልዎ፡ እንታይ ጽቡቕ ከም ዝኸይድ፡ እንታይ ከቢድ ከም ዝኾነ፡ እንታይ ክትመሃር ከም እትደሊ ድማ ጽሓፍ። ኮርስ ወይ ስልጠና ክትሓትት ይፍቀደልካ እዩ። ኣብ መወዳእታ ስምምዓት (afspraken) ትገብሩ፡ መብዛሕትኡ ግዜ ኣብ ሓጺር ጸብጻብ። ቅድሚ ምፍራምካ ብጽቡቕ ኣንብቦ፡ ቅዳሕ ድማ ሕተት። ኣይትሰማማዕን ዲኻ? «voor gezien» (ተራእዩ) ፈርም፡ «voor akkoord» (ተሰማሚዐ) ኣይኮነን፡ ናይ ገዛእ ርእስኻ ርእይቶ ድማ ጽሓፍ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።", f: "ብዙሓት ትካላት ኣብ ዓመት ሓንሳብ ወይ ክልተ ግዜ ብዛዕባ ስራሕኪ ዘተ ይገብሩ። ኣብ ዘተ ኣፈጻጽማ (functioneringsgesprek) ብሓባር ትዘራረቡ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ክመሓየሽ ይኽእል፡ እንታይ ክትመሃሪ ከም እትደልዪ ድማ። ኣብ ዘተ ገምጋም (beoordelingsgesprek) ተቖጻጻሪኺ ፍርዲ ይህብ። እዚ ኣብ ደሞዝኪ ወይ ኣብ ሓድሽ ውዕል ክጸሉ ይኽእል። ነቲ ዘተ ኣዳልውዮ፡ እንታይ ጽቡቕ ከም ዝኸይድ፡ እንታይ ከቢድ ከም ዝኾነ፡ እንታይ ክትመሃሪ ከም እትደልዪ ድማ ጽሓፊ። ኮርስ ወይ ስልጠና ክትሓትቲ ይፍቀደልኪ እዩ። ኣብ መወዳእታ ስምምዓት (afspraken) ትገብሩ፡ መብዛሕትኡ ግዜ ኣብ ሓጺር ጸብጻብ። ቅድሚ ምፍራምኪ ብጽቡቕ ኣንብብዮ፡ ቅዳሕ ድማ ሕተቲ። ኣይትሰማምዒን ዲኺ? «voor gezien» (ተራእዩ) ፈርሚ፡ «voor akkoord» (ተሰማሚዐ) ኣይኮነን፡ ናይ ገዛእ ርእስኺ ርእይቶ ድማ ጽሓፊ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቲ።", x: "ብዙሓት ትካላት ኣብ ዓመት ሓንሳብ ወይ ክልተ ግዜ ብዛዕባ ስራሕኩም ዘተ ይገብሩ። ኣብ ዘተ ኣፈጻጽማ (functioneringsgesprek) ብሓባር ትዘራረቡ፡ እንታይ ጽቡቕ ይኸይድ፡ እንታይ ክመሓየሽ ይኽእል፡ እንታይ ክትመሃሩ ከም እትደልዩ ድማ። ኣብ ዘተ ገምጋም (beoordelingsgesprek) ተቖጻጻሪኹም ፍርዲ ይህብ። እዚ ኣብ ደሞዝኩም ወይ ኣብ ሓድሽ ውዕል ክጸሉ ይኽእል። ነቲ ዘተ ኣዳልውዎ፡ እንታይ ጽቡቕ ከም ዝኸይድ፡ እንታይ ከቢድ ከም ዝኾነ፡ እንታይ ክትመሃሩ ከም እትደልዩ ድማ ጽሓፉ። ኮርስ ወይ ስልጠና ክትሓትቱ ይፍቀደልኩም እዩ። ኣብ መወዳእታ ስምምዓት (afspraken) ትገብሩ፡ መብዛሕትኡ ግዜ ኣብ ሓጺር ጸብጻብ። ቅድሚ ምፍራምኩም ብጽቡቕ ኣንብብዎ፡ ቅዳሕ ድማ ሕተቱ። ኣይትሰማምዑን ዲኹም? «voor gezien» (ተራእዩ) ፈርሙ፡ «voor akkoord» (ተሰማሚዐ) ኣይኮነን፡ ናይ ገዛእ ርእስኹም ርእይቶ ድማ ጽሓፉ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.p': "«ተራእዩ» ኢለ እፍርም፡ «ተሰማሚዐ» ኣይኮነን።", // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.s': { m: "ድሕሪ ዘተ ገምጋምካ ነቲ ጸብጻብ ክትፍርመሉ ይወሃበካ። ሓደ ነጥቢ ኣብኡ ሓቂ ኣይኮነን ይመስለካ። እንታይ ትገብር?", f: "ድሕሪ ዘተ ገምጋምኪ ነቲ ጸብጻብ ክትፍርምሉ ይወሃበኪ። ሓደ ነጥቢ ኣብኡ ሓቂ ኣይኮነን ይመስለኪ። እንታይ ትገብሪ?", x: "ድሕሪ ዘተ ገምጋምኩም ነቲ ጸብጻብ ክትፍርሙሉ ይወሃበኩም። ሓደ ነጥቢ ኣብኡ ሓቂ ኣይኮነን ይመስለኩም። እንታይ ትገብሩ?" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o1': { m: "«voor gezien» ፈርም፡ ርእይቶኻ ድማ ጽሓፍ።", f: "«voor gezien» ፈርሚ፡ ርእይቶኺ ድማ ጽሓፊ።", x: "«voor gezien» ፈርሙ፡ ርእይቶኹም ድማ ጽሓፉ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o2': { m: "ክውዳእ ኢልካ ቀልጢፍካ «voor akkoord» ፈርም።", f: "ክውዳእ ኢልኪ ቀልጢፍኪ «voor akkoord» ፈርሚ።", x: "ክውዳእ ኢልኩም ቀልጢፍኩም «voor akkoord» ፈርሙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.o3': { m: "ገለ ኣይትበል፡ ፈጺምካ ድማ ኣይትፈርም።", f: "ገለ ኣይትበሊ፡ ፈጺምኪ ድማ ኣይትፈርሚ።", x: "ገለ ኣይትበሉ፡ ፈጺምኩም ድማ ኣይትፈርሙ።" }, // nieuw, nalezen // nagelezen AI 28 nov
    'c.appraisal.w': { m: "«Voor gezien» ማለት ኣንቢብካዮ ኣለኻ ማለት እዩ፡ ትሰማማዕ ኣለኻ ማለት ኣይኮነን። እዚ ምስ እትብልን ናይ ገዛእ ርእስኻ ርእይቶ ምስ እትጽሕፍን፡ ተቖጻጻሪኻ እንታይ ከም እትሓስብ ይፈልጥ።", f: "«Voor gezien» ማለት ኣንቢብክዮ ኣለኺ ማለት እዩ፡ ትሰማምዒ ኣለኺ ማለት ኣይኮነን። እዚ ምስ እትብሊን ናይ ገዛእ ርእስኺ ርእይቶ ምስ እትጽሕፊን፡ ተቖጻጻሪኺ እንታይ ከም እትሓስቢ ይፈልጥ።", x: "«Voor gezien» ማለት ኣንቢብኩምዎ ኣለኹም ማለት እዩ፡ ትሰማምዑ ኣለኹም ማለት ኣይኮነን። እዚ ምስ እትብሉን ናይ ገዛእ ርእስኹም ርእይቶ ምስ እትጽሕፉን፡ ተቖጻጻሪኹም እንታይ ከም እትሓስቡ ይፈልጥ።" }, // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
