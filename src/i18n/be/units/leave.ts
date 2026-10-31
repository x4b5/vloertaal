import type { CultureTranslation } from '../../culture/types';
import { ar as arBase, ti as tiBase, fa as faBase, prs as prsBase, uk as ukBase, tr as trBase, pl as plBase, ro as roBase, bg as bgBase, es as esBase, pt as ptBase, fr as frBase, de as deBase } from '../base';
import type { Gloss } from '../types';

// The translations of the Belgian version of u.leave (src/content/taalBe/units/leave.ts): het verlof om dwingende redenen, de arbeidsarts, het gewaarborgd loon, het ziektebriefje, het geboorteverlof, and the three tips. One object per help language.
// A text whose English is the same as the Dutch tip's is the Dutch unit's translation (src/i18n/work/<lang>.ts);
// the rest is new: // nieuw, nalezen. The Belgian names (justitiehuis, ziekenfonds, VDAB, RVA, HVW, C4,
// Unia, Payoke …) stay Dutch, as in the English. Arabic and Tigrinya: written without a gender.

/** A tip's body with the Belgian closing line of this language (src/i18n/be/base.ts, src/lib/tipText.ts). */
const end = (body: string, base: CultureTranslation, kind: 'advice' | 'abuse'): string => {
  const line = base.gloss[`be.closing.${kind}`];
  return `${body} ${typeof line === 'string' ? line : (line.x ?? line.m)}`;
};

export const ar: Gloss = {
  'be.w.calamiteitenverlof': "إجازة لأسباب طارئة (غالباً بدون أجر)", // nieuw, nalezen
  'be.w.bedrijfsarts': "طبيب العمل (طبيب مكان العمل)", // nieuw, nalezen
  'be.w.wachtdag': "الأجر المضمون (صاحب العمل يدفع الأيام الأولى من المرض)", // nieuw, nalezen
  'be.w.doorbetalen': "الشهادة الطبية (ورقة المرض من الطبيب)", // nieuw, nalezen
  'be.w.betermelden': "العودة (إلى العمل، بعد المرض)", // nieuw, nalezen
  'be.s.illness.2': "عندي موعد مع طبيب العمل.", // nieuw, nalezen
  'be.c.illness.a': "أفضّل ألّا أقول. عندي شهادة طبية.", // nieuw, nalezen
  'be.s.kids.2': "هل يمكنني أخذ إجازة لأسباب طارئة؟", // nieuw, nalezen
  'be.w.zorgverlof': "إجازة الولادة (للوالد الآخر، عند ولادة طفل)", // nieuw, nalezen
  'be.c.leave': "العطل والإجازة لأسباب طارئة", // nieuw, nalezen
  'be.c.leave.b': end("أيام العطلة المدفوعة تتوقف على مقدار العمل في السنة السابقة. سنة كاملة بدوام كامل، 5 أيام في الأسبوع؟ عندها توجد 20 يوم عطلة. يمكن للقطاع أن يعطي أكثر. بداية جديدة في العمل؟ السؤال عمّا يمكن الحصول عليه في السنة الأولى. التواريخ يُتّفق عليها مع صاحب العمل: الطلب في الوقت المناسب وكتابةً. بعض الشركات تُغلق بضعة أسابيع، مثل عطلة البناء (bouwverlof). حالة طارئة مفاجئة، مثل حادث أو مرض في العائلة؟ عندها يمكن أخذ إجازة لأسباب طارئة (verlof om dwingende redenen): 10 أيام في السنة على الأكثر، غالباً بدون أجر. عرس أو جنازة في العائلة؟ عندها توجد بضعة أيام عطلة مدفوعة (klein verlet). يجب إخبار صاحب العمل فوراً.", arBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'أودّ أن أطلب إجازة في يوليو.',
  'be.c.leave.s': { m: 'تريد أن تزور عائلتك في الخارج ثلاثة أسابيع في الصيف. ماذا تفعل؟', f: 'تريدين أن تزوري عائلتك في الخارج ثلاثة أسابيع في الصيف. ماذا تفعلين؟' },
  'be.c.leave.o1': { m: 'اطلب الإجازة من صاحب العمل مبكراً، وكتابةً.', f: 'اطلبي الإجازة من صاحب العمل مبكراً، وكتابةً.' },
  'be.c.leave.o2': { m: 'سافر دون أن تسأل، وأخبر مديرك عندما تعود.', f: 'سافري دون أن تسألي، وأخبري مديرك عندما تعودين.' },
  'be.c.leave.o3': { m: 'اطلب من زميل أن يخبر المدير في اليوم السابق.', f: 'اطلبي من زميل أن يخبر المدير في اليوم السابق.' },
  'be.c.leave.w': "تواريخ العطلة يُتّفق عليها مع صاحب العمل. السؤال المبكر يعطي أفضل فرصة للموافقة. السفر بدون موافقة قد يسبّب مشاكل كبيرة في العمل.", // nieuw, nalezen
  'be.c.illness': { m: 'حقوقك عندما تكون مريضاً', f: 'حقوقك عندما تكونين مريضة', x: 'حقوقك في حال المرض' },
  'be.c.illness.b': end("مرض؟ يجب إخبار صاحب العمل فوراً، كما يقول نظام العمل الداخلي (arbeidsreglement). غالباً تلزم شهادة طبية (ziektebriefje) من الطبيب. يجب أن تصل إلى صاحب العمل خلال يومي عمل (2)، إلا إذا قال نظام العمل غير ذلك. الشهادة لا تذكر نوع المرض، ولا يحق للمدير أن يسأل. العمل هناك منذ شهر (1) على الأقل؟ عندها يُدفع في أول 30 يوماً الأجر أو معظمه (gewaarborgd loon). لا توجد أيام انتظار بدون أجر. بعد ذلك يدفع ziekenfonds (صندوق التأمين الصحي) إعانة: يجب إرسال استمارته في الوقت المناسب إلى طبيب ziekenfonds. يحق لصاحب العمل إرسال طبيب مراقبة (controlearts) للتأكد من أن العمل غير ممكن. طبيب العمل (arbeidsarts) يساعد على العودة إلى العمل، ولا يقول للمدير إلا نوع العمل الممكن.", arBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': { m: "أنا مريض. سأرسل شهادتي الطبية اليوم.", f: "أنا مريضة. سأرسل شهادتي الطبية اليوم.", x: "أنا مريض / مريضة. سأرسل شهادتي الطبية اليوم." }, // nieuw, nalezen
  'be.c.illness.s': "مرض في البيت. المدير يتصل ويسأل: «ما هو مرضك؟» ما التصرف الصحيح؟", // nieuw, nalezen
  'be.c.illness.o1': "قول إن هناك مرضاً، وإرسال الشهادة في الوقت المناسب.", // nieuw, nalezen
  'be.c.illness.o2': "قول كل شيء، لأن المدير يجب أن يعرف.", // nieuw, nalezen
  'be.c.illness.o3': "إنهاء المكالمة، وعدم إرسال شيء حتى الشفاء.", // nieuw, nalezen
  'be.c.illness.w': "ليس من الواجب قول نوع المرض. الشهادة تذكر فقط مدة المرض. يجب أن تصل إلى صاحب العمل خلال يومي عمل (2)، إلا إذا قال نظام العمل الداخلي غير ذلك.", // nieuw, nalezen
  'be.c.kids': "طفلك مريض",
  'be.c.kids.b': end("الطفل مرض فجأة؟ يجب إخبار صاحب العمل فوراً. يمكن أخذ إجازة لأسباب طارئة (verlof om dwingende redenen): 10 أيام في السنة على الأكثر، غالباً بدون أجر. يمكن للقطاع أن يعطي أكثر. الطفل يحتاج إلى رعاية أطول؟ عندها يمكن طلب إجازة والدية (ouderschapsverlof): عمل أقل أو لا عمل، مع إعانة من RVA. حمل؟ لا يحق لصاحب العمل الفصل من العمل بسبب ذلك. قبل الولادة وبعدها توجد إجازة (moederschapsrust)، مع مال من ziekenfonds. الشريكة ستلد طفلاً؟ عندها توجد 20 يوم إجازة ولادة (geboorteverlof).", arBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "طفلي مريض. هل يمكنني أن أخرج مبكراً اليوم؟",
  'be.c.kids.s': { m: "الحضانة (kinderopvang) تتصل بك في العمل. طفلك عنده حرارة ويجب أن يذهب إلى البيت. ماذا تفعل؟", f: "الحضانة (kinderopvang) تتصل بكِ في العمل. طفلكِ عنده حرارة ويجب أن يذهب إلى البيت. ماذا تفعلين؟" },
  'be.c.kids.o1': { m: 'أخبر المشرف، واطلب إجازة لأسباب طارئة.', f: 'أخبري المشرف، واطلبي إجازة لأسباب طارئة.', x: 'إخبار المشرف، وطلب إجازة لأسباب طارئة.' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.kids.o2': { m: "اذهب دون كلمة، واشرح الأمر غداً.", f: "اذهبي دون كلمة، واشرحي الأمر غداً." },
  'be.c.kids.o3': { m: "ابقَ في العمل، ودع طفلك ينتظر حتى تنتهي نوبتك.", f: "ابقي في العمل، ودعي طفلكِ ينتظر حتى تنتهي نوبتكِ." },
  'be.c.kids.w': "الطفل المريض حالة طارئة في البيت. إخبار المشرف أولاً يسمح له بتنظيم العمل. هذه الإجازة لمثل هذه اللحظات، لكنها غالباً بدون أجر.", // nieuw, nalezen
};

export const ti: Gloss = {
  'be.w.calamiteitenverlof': "ፍቓድ ብህጹጽ ምኽንያት (መብዛሕትኡ ግዜ ብዘይ ደሞዝ)", // nieuw, nalezen
  'be.w.bedrijfsarts': "ሓኪም ስራሕ (ሓኪም ናይ ቦታ ስራሕኩም)", // nieuw, nalezen
  'be.w.wachtdag': "ውሑስ ደሞዝ (ኣስራሒ ናይ መጀመርታ መዓልትታት ሕማም ይኸፍል)", // nieuw, nalezen
  'be.w.doorbetalen': "ናይ ሕማም ወረቐት (ካብ ሓኪም)", // nieuw, nalezen
  'be.w.betermelden': "ምምላስ (ናብ ስራሕ፡ ድሕሪ ሕማም)", // nieuw, nalezen
  'be.s.illness.2': "ምስ ሓኪም ስራሕ ቆጸራ ኣለኒ።", // nieuw, nalezen
  'be.c.illness.a': "ዘይምዝራብ ይሓይሽ። ናይ ሕማም ወረቐት ኣለኒ።", // nieuw, nalezen
  'be.s.kids.2': "ብህጹጽ ምኽንያት ፍቓድ ክወስድ ይኽእል ዶ?", // nieuw, nalezen
  'be.w.zorgverlof': "ፍቓድ ሕርሲ (ንካልኣይ ወላዲ፡ ህጻን ምስ ዝውለድ)", // nieuw, nalezen
  'be.c.leave': "ዕረፍቲን ፍቓድ ብህጹጽ ምኽንያትን", // nieuw, nalezen
  'be.c.leave.b': end("ዝኽፈሎም መዓልትታት ዕረፍትኹም ኣብ ዝሓለፈ ዓመት ክንደይ ከም ዝሰራሕኩም ይምርኮስ። ምሉእ ዓመት ምሉእ ግዜ፡ ኣብ ሰሙን 5 መዓልቲ? ሽዑ 20 መዓልቲ ዕረፍቲ ኣለኩም። ዘርፍኹም ዝያዳ ክህብ ይኽእል። ሓደሽቲ ኣብ ስራሕ ዶ ኢኹም? ኣብ ቀዳማይ ዓመት እንታይ ክትረኽቡ ከም ትኽእሉ ሕተቱ። ዕለታት ምስ ኣስራሒ ትሰማምዑ፡ ኣቐዲምኩም ብጽሑፍ ሕተቱ። ገለ ትካላት ንሓያሎ ሰሙናት ይዕጸዋ፡ ከም ዕረፍቲ ህንጻ (bouwverlof)። ሃንደበታዊ ህጹጽ ኩነታት፡ ከም ሓደጋ ወይ ሕማም ኣብ ስድራ? ሽዑ ፍቓድ ብህጹጽ ምኽንያት (verlof om dwingende redenen) ክትወስዱ ትኽእሉ፡ ኣብ ዓመት እንተ በዝሐ 10 መዓልቲ፡ መብዛሕትኡ ግዜ ብዘይ ደሞዝ። መርዓ ወይ ቀብሪ ኣብ ስድራ? ሽዑ ገለ ዝኽፈሎም መዓልትታት ዕረፍቲ ኣለኩም (klein verlet)። ብቕጽበት ንኣስራሒ ንገሩ።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'ንሓምለ ፍቓድ ክሓትት ደስ ይብለኒ።',
  'be.c.leave.s': { m: 'ኣብ ክረምቲ ንሰለስተ ሰሙን ኣብ ወጻኢ ዘሎ ስድራኻ ክትበጽሕ ትደሊ። እንታይ ትገብር?', f: 'ኣብ ክረምቲ ንሰለስተ ሰሙን ኣብ ወጻኢ ዘሎ ስድራኺ ክትበጽሒ ትደልዪ። እንታይ ትገብሪ?' },
  'be.c.leave.o1': { m: 'ኣቐዲምካ ብጽሑፍ ንኣስራሒኻ ፍቓድ ሕተት።', f: 'ኣቐዲምኪ ብጽሑፍ ንኣስራሒኺ ፍቓድ ሕተቲ።', x: 'ኣቐዲምኩም ብጽሑፍ ንኣስራሒኹም ፍቓድ ሕተቱ።' },
  'be.c.leave.o2': { m: 'ጥራይ ኪድ፡ ምስ ተመለስካ ንሓላፊኻ ንገሮ።', f: 'ጥራይ ኪዲ፡ ምስ ተመለስኪ ንሓላፊኺ ንገርዮ።' },
  'be.c.leave.o3': { m: 'ሓደ ብጻይ ስራሕ ሓደ መዓልቲ ኣቐዲሙ ንሓላፊ ክነግሮ ሕተቶ።', f: 'ሓደ ብጻይ ስራሕ ሓደ መዓልቲ ኣቐዲሙ ንሓላፊ ክነግሮ ሕተትዮ።' },
  'be.c.leave.w': 'ዕለታት ዕረፍትኹም ምስ ኣስራሒ ትሰማምዑ። ኣቐዲምኩም ምሕታት ዝበለጸ ዕድል «እወ» ይህብ። ብዘይ «እወ» ምኻድ ኣብ ስራሕ ዓቢ ጸገም ከምጽእ ይኽእል።', // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness': { m: 'ክትሓምም ከለኻ መሰላትካ', f: 'ክትሓምሚ ከለኺ መሰላትኪ', x: 'ክትሓምሙ ከለኹም መሰላትኩም' },
  'be.c.illness.b': end("ሓሚምኩም? ከምቲ ውሽጣዊ ሕጊ ስራሕ (arbeidsreglement) ዝብሎ ብቕጽበት ንኣስራሒ ንገሩ። መብዛሕትኡ ግዜ ካብ ሓኪምኩም ናይ ሕማም ወረቐት (ziektebriefje) የድልየኩም። ውሽጣዊ ሕጊ ካልእ እንተ ዘይበለ፡ ኣብ ውሽጢ 2 መዓልቲ ስራሕ ናብ ኣስራሒ ክበጽሕ ኣለዎ። ኣብቲ ወረቐት እንታይ ሕማም ከም ዘለኩም ኣይጽሓፍን፡ ሓላፊኹም ክሓትት ኣይፍቀዶን። እንተ ወሓደ 1 ወርሒ ኣብኡ ሰሪሕኩም? ሽዑ ኣብ ቀዳሞት 30 መዓልቲ ደሞዝኩም ወይ መብዛሕትኡ ትረኽቡ (gewaarborgd loon)። ብዘይ ደሞዝ መጸበዪ መዓልቲ የለን። ድሕሪኡ ziekenfonds (ትካል መድሕን ሕክምና) ሓገዝ ይኸፍለኩም፡ ቅጥዒ ናይቲ ziekenfonds ኣብ ግዜኡ ናብ ሓኪም ziekenfonds ስደዱ። ኣስራሒ ክትሰርሑ ከም ዘይትኽእሉ ንምርግጋጽ ሓኪም ቁጽጽር (controlearts) ክሰድድ ይኽእል። ሓኪም ስራሕ (arbeidsarts) ናብ ስራሕ ክትምለሱ ይሕግዘኩም፡ ንሓላፊኹም ድማ እንታይ ስራሕ ክትሰርሑ ከም ትኽእሉ ጥራይ ይነግሮ።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': "ሓሚመ ኣለኹ። ናይ ሕማም ወረቐተይ ሎሚ እሰድድ።", // nieuw, nalezen
  'be.c.illness.s': 'ኣብ ገዛ ሓሚምኩም ኣለኹም። ሓላፊኹም ደዊሉ «እንታይ ሕማም ኣለኩም?» ይሓተኩም። እንታይ ትገብሩ?', // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.o1': "ከም ዝሓመምኩም ምንጋር፡ ወረቐት ኣብ ግዜኡ ምስዳድ።", // nieuw, nalezen
  'be.c.illness.o2': "ኩሉ ምንጋር፡ ሓላፊ ክፈልጥ ስለ ዘለዎ።", // nieuw, nalezen
  'be.c.illness.o3': "ስልኪ ምዕጻው፡ ክሳብ ትሓውዩ ዋላ ሓንቲ ዘይምስዳድ።", // nieuw, nalezen
  'be.c.illness.w': "እንታይ ሕማም ከም ዘለኩም ክትነግሩ ኣየድልየኩምን። ወረቐት ሕማም ክንደይ ግዜ ከም ዝሓመምኩም ጥራይ ይብል። ውሽጣዊ ሕጊ ስራሕ ካልእ እንተ ዘይበለ፡ ኣብ ውሽጢ 2 መዓልቲ ስራሕ ናብ ኣስራሒ ክበጽሕ ኣለዎ።", // nieuw, nalezen
  'be.c.kids': { m: 'ቆልዓኻ ሓሚሙ', f: 'ቆልዓኺ ሓሚሙ', x: 'ቆልዓኹም ሓሚሙ' },
  'be.c.kids.b': end("ውላድኩም ሃንደበት ሓሚሙ ዶ? ብቕጽበት ንኣስራሒ ንገሩ። ፍቓድ ብህጹጽ ምኽንያት (verlof om dwingende redenen) ክትወስዱ ትኽእሉ፡ ኣብ ዓመት እንተ በዝሐ 10 መዓልቲ፡ መብዛሕትኡ ግዜ ብዘይ ደሞዝ። ዘርፍኹም ዝያዳ ክህብ ይኽእል። ውላድኩም ንነዊሕ ግዜ ክንክን የድልዮ ዶ? ሽዑ ፍቓድ ወለዲ (ouderschapsverlof) ክትሓቱ ትኽእሉ፡ ውሑድ ወይ ብፍጹም ዘይምስራሕ፡ ምስ ሓገዝ ካብ RVA። ነፍሰ ጾር? ኣስራሒ ብሰንኪ እዚ ካብ ስራሕ ክሰጉገኩም ኣይፍቀዶን። ቅድሚን ድሕሪን ሕርሲ ፍቓድ ኣለኩም (moederschapsrust)፡ ምስ ገንዘብ ካብ ziekenfonds። መጻምድትኹም ህጻን ክትወልድ ድያ? ሽዑ 20 መዓልቲ ፍቓድ ሕርሲ (geboorteverlof) ኣለኩም።", tiBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.kids.p': 'ቆልዓይ ሓሚሙ። ሎሚ ኣቐዲመ ክኸይድ ይኽእል ዶ?',
  'be.c.kids.s': { m: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልካ። ቆልዓኻ ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብር?', f: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልኪ። ቆልዓኺ ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብሪ?', x: 'መውዓሊ ህጻናት (kinderopvang) ኣብ ስራሕ ይድውለልኩም። ቆልዓኹም ረስኒ ኣለዎ፡ ናብ ገዛ ድማ ክኸይድ ኣለዎ። እንታይ ትገብሩ?' },
  'be.c.kids.o1': { m: 'ንተቖጻጻሪኻ ንገሮ፡ ፍቓድ ብህጹጽ ምኽንያት ድማ ሕተት።', f: 'ንተቖጻጻሪኺ ንገርዮ፡ ፍቓድ ብህጹጽ ምኽንያት ድማ ሕተቲ።', x: 'ንተቖጻጻሪኹም ንገርዎ፡ ፍቓድ ብህጹጽ ምኽንያት ድማ ሕተቱ።' }, // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.kids.o2': { m: 'ቃል ከይበልካ ኪድ፡ ጽባሕ ድማ ግለጾ።', f: 'ቃል ከይበልኪ ኪዲ፡ ጽባሕ ድማ ግለጽዮ።' },
  'be.c.kids.o3': { m: 'ኣብ ስራሕ ጽናሕ፡ ቆልዓኻ ድማ ክሳብ ፈረቓኻ ዝውዳእ ይጽበ።', f: 'ኣብ ስራሕ ጽናሒ፡ ቆልዓኺ ድማ ክሳብ ፈረቓኺ ዝውዳእ ይጽበ።', x: 'ኣብ ስራሕ ጽናሑ፡ ቆልዓኹም ድማ ክሳብ ፈረቓኹም ዝውዳእ ይጽበ።' },
  'be.c.kids.w': "ዝሓመመ ቆልዓ ኣብ ገዛ ህጹጽ ኩነታት እዩ። መጀመርታ ንተቖጻጻሪኹም እንተ ነጊርኩም ነቲ ስራሕ ክውጥን ይኽእል። እዚ ፍቓድ ንከምዚ ዝኣመሰለ ግዜ እዩ፡ ግን መብዛሕትኡ ግዜ ብዘይ ደሞዝ እዩ።", // nieuw, nalezen
};

export const fa: Gloss = {
  'be.w.calamiteitenverlof': "مرخصی به دلیل‌های فوری (اغلب بدون حقوق)", // nieuw, nalezen
  'be.w.bedrijfsarts': "پزشک طب کار (پزشک محل کارت)", // nieuw, nalezen
  'be.w.wachtdag': "دستمزد تضمین‌شده (کارفرما روزهای اول بیماری را می‌پردازد)", // nieuw, nalezen
  'be.w.doorbetalen': "گواهی پزشکی (از دکتر)", // nieuw, nalezen
  'be.w.betermelden': "برگشتن (سر کار، بعد از بیماری)", // nieuw, nalezen
  'be.s.illness.2': "با پزشک طب کار وقت ملاقات دارم.", // nieuw, nalezen
  'be.c.illness.a': "ترجیح می‌دهم نگویم. گواهی پزشکی دارم.", // nieuw, nalezen
  'be.s.kids.2': "می‌توانم مرخصی به دلیل‌های فوری بگیرم؟", // nieuw, nalezen
  'be.w.zorgverlof': "مرخصی تولد (برای والد دیگر، وقتی بچه به دنیا می‌آید)", // nieuw, nalezen
  'be.c.leave': "تعطیلات و مرخصی به دلیل‌های فوری", // nieuw, nalezen
  'be.c.leave.b': end("روزهای مرخصی با حقوق تو به این بستگی دارد که سال قبل چقدر کار کرده‌ای. یک سال کامل تمام‌وقت، ۵ روز در هفته؟ پس ۲۰ روز مرخصی داری. رشتهٔ کاری‌ات می‌تواند بیشتر بدهد. تازه شروع کرده‌ای؟ بپرس در سال اول چه چیزی می‌توانی بگیری. تاریخ‌ها را با کارفرما هماهنگ می‌کنی: به‌موقع و کتبی درخواست کن. بعضی شرکت‌ها چند هفته تعطیل می‌شوند، مثل تعطیلات ساختمانی (bouwverlof). یک وضعیت اضطراری ناگهانی، مثل حادثه یا بیماری در خانواده؟ پس می‌توانی مرخصی به دلیل‌های فوری (verlof om dwingende redenen) بگیری: حداکثر ۱۰ روز در سال، معمولاً بدون حقوق. عروسی یا مراسم خاکسپاری در خانواده؟ پس چند روز مرخصی با حقوق داری (klein verlet). فوراً به کارفرما بگو.", faBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.leave.p': 'می‌خواهم برای ژوئیه مرخصی بگیرم.',
  'be.c.leave.s': 'می‌خواهی تابستان سه هفته به دیدن خانواده‌ات در خارج بروی. چه کار می‌کنی؟',
  'be.c.leave.o1': 'زود و کتبی از کارفرمایت مرخصی بخواه.',
  'be.c.leave.o2': 'همین‌طوری برو، و وقتی برگشتی به رئیست بگو.',
  'be.c.leave.o3': 'از یک همکار بخواه روز قبل به رئیس بگوید.',
  'be.c.leave.w': "تاریخ مرخصی‌ات را با کارفرما هماهنگ می‌کنی. زود پرسیدن بیشترین شانس «بله» را می‌دهد. رفتن بدون «بله» می‌تواند در کار برایت دردسر بزرگ درست کند.", // nieuw, nalezen
  'be.c.illness': 'حق‌های تو وقتی مریضی',
  'be.c.illness.b': end("مریض هستی؟ همان‌طور که آیین‌نامهٔ کار (arbeidsreglement) می‌گوید، فوراً به کارفرما خبر بده. اغلب به گواهی پزشکی (ziektebriefje) از دکترت نیاز داری. گواهی باید ظرف ۲ روز کاری به کارفرما برسد، مگر اینکه آیین‌نامه چیز دیگری بگوید. در گواهی نوشته نمی‌شود چه بیماری‌ای داری، و رئیست حق ندارد بپرسد. دست‌کم ۱ ماه است آنجا کار می‌کنی؟ پس در ۳۰ روز اول دستمزدت، یا بیشتر آن را، می‌گیری (gewaarborgd loon). روز انتظار بدون حقوق وجود ندارد. بعد از آن، ziekenfonds (صندوق بیمهٔ درمانی) به تو کمک‌هزینه می‌دهد: فرم آن را به‌موقع برای پزشک ziekenfonds بفرست. کارفرما می‌تواند یک پزشک کنترل (controlearts) بفرستد تا ببیند واقعاً نمی‌توانی کار کنی. پزشک طب کار (arbeidsarts) کمکت می‌کند به کار برگردی، و فقط به رئیست می‌گوید چه کاری می‌توانی بکنی.", faBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.p': "مریضم. گواهی پزشکی‌ام را امروز می‌فرستم.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.s': "در خانه مریض هستی. رئیست زنگ می‌زند و می‌پرسد: «چه بیماری‌ای داری؟» چه کار می‌کنی؟", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.o1': "بگو مریض هستی، و گواهی‌ات را به‌موقع بفرست.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.o2': "همه چیز را بگو، چون رئیست باید بداند.", // nieuw, nalezen
  'be.c.illness.o3': "گوشی را بگذار، و تا خوب نشده‌ای چیزی نفرست.", // nieuw, nalezen
  'be.c.illness.w': "لازم نیست بگویی چه بیماری‌ای داری. در گواهی‌ات فقط نوشته شده چه مدت مریض هستی. گواهی باید ظرف ۲ روز کاری به کارفرما برسد، مگر اینکه آیین‌نامهٔ کار چیز دیگری بگوید.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.kids': "بچه‌ات مریض است",
  'be.c.kids.b': end("بچه‌ات ناگهان بیمار شده؟ فوراً به کارفرما بگو. می‌توانی مرخصی به دلیل‌های فوری (verlof om dwingende redenen) بگیری: حداکثر ۱۰ روز در سال، معمولاً بدون حقوق. رشتهٔ کاری‌ات می‌تواند بیشتر بدهد. بچه‌ات مدت بیشتری مراقبت لازم دارد؟ پس می‌توانی مرخصی والدین (ouderschapsverlof) بخواهی: کمتر کار می‌کنی یا اصلاً کار نمی‌کنی، با کمک‌هزینه از RVA. باردار هستی؟ کارفرما نمی‌تواند به این دلیل اخراجت کند. پیش و پس از زایمان مرخصی داری (moederschapsrust)، با پول از ziekenfonds. همسرت بچه‌دار می‌شود؟ پس ۲۰ روز مرخصی تولد (geboorteverlof) داری.", faBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "بچه‌ام مریض است. می‌توانم امروز زودتر بروم؟",
  'be.c.kids.s': "مهدکودک (kinderopvang) سر کار به تو زنگ می‌زند. بچه‌ات تب دارد و باید برود خانه. چه کار می‌کنی؟",
  'be.c.kids.o1': "به سرپرستت بگو، و مرخصی به دلیل‌های فوری بخواه.", // nieuw, nalezen
  'be.c.kids.o2': "بدون یک کلمه برو، و فردا توضیح بده.",
  'be.c.kids.o3': "سر کار بمان، و بگذار بچه‌ات تا آخر شیفتت منتظر بماند.",
  'be.c.kids.w': "بچهٔ بیمار یک وضعیت اضطراری در خانه است. وقتی اول به سرپرستت بگویی، او می‌تواند کار را برنامه‌ریزی کند. این مرخصی برای چنین لحظه‌هایی است، اما اغلب بدون حقوق است.", // nieuw, nalezen
};

export const prs: Gloss = {
  'be.w.calamiteitenverlof': "رخصتی به دلایل عاجل (اکثراً بدون معاش)", // nieuw, nalezen
  'be.w.bedrijfsarts': "داکتر طب کار (داکتر جای کار شما)", // nieuw, nalezen
  'be.w.wachtdag': "معاش تضمین‌شده (کارفرما روزهای اول مریضی را می‌پردازد)", // nieuw, nalezen
  'be.w.doorbetalen': "تصدیق داکتر (ورقهٔ مریضی)", // nieuw, nalezen
  'be.w.betermelden': "برگشتن (به کار، بعد از مریضی)", // nieuw, nalezen
  'be.s.illness.2': "با داکتر طب کار وقت ملاقات دارم.", // nieuw, nalezen
  'be.c.illness.a': "ترجیح می‌دهم نگویم. تصدیق داکتر دارم.", // nieuw, nalezen
  'be.s.kids.2': "آیا می‌توانم رخصتی به دلایل عاجل بگیرم؟", // nieuw, nalezen
  'be.w.zorgverlof': "رخصتی تولد (برای والد دیگر، وقتی طفل به دنیا می‌آید)", // nieuw, nalezen
  'be.c.leave': "رخصتی و رخصتی به دلایل عاجل", // nieuw, nalezen
  'be.c.leave.b': end("روزهای رخصتی با معاش شما به این بستگی دارد که سال گذشته چقدر کار کرده‌اید. یک سال کامل تمام‌وقت، ۵ روز در هفته؟ پس ۲۰ روز رخصتی دارید. بخش کاری شما می‌تواند بیشتر بدهد. تازه شروع کرده‌اید؟ بپرسید که در سال اول چه می‌توانید بگیرید. تاریخ‌ها را با کارفرما هماهنگ می‌کنید: به‌وقت و کتبی درخواست کنید. بعضی کمپنی‌ها چند هفته بسته می‌شوند، مانند رخصتی ساختمانی (bouwverlof). یک حالت عاجل ناگهانی، مانند حادثه یا مریضی در فامیل؟ پس می‌توانید رخصتی به دلایل عاجل (verlof om dwingende redenen) بگیرید: حداکثر ۱۰ روز در سال، معمولاً بدون معاش. عروسی یا جنازه در فامیل؟ پس چند روز رخصتی با معاش دارید (klein verlet). فوراً به کارفرما بگویید.", prsBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.leave.p': 'می‌خواهم برای ماه جولای رخصتی درخواست کنم.',
  'be.c.leave.s': 'می‌خواهید در تابستان سه هفته به دیدن فامیل خود در خارج بروید. چه می‌کنید؟',
  'be.c.leave.o1': 'زود و نوشته‌شده از کارفرما رخصتی بخواهید.',
  'be.c.leave.o2': 'همین طور بروید، و وقتی برگشتید به آمر بگویید.',
  'be.c.leave.o3': 'از یک همکار بخواهید که یک روز پیش به آمر بگوید.',
  'be.c.leave.w': "تاریخ رخصتی خود را با کارفرما هماهنگ می‌کنید. زود پرسیدن بیشترین چانس «بلی» را می‌دهد. رفتن بدون «بلی» می‌تواند در کار برای شما مشکل بزرگ پیدا کند.", // nieuw, nalezen
  'be.c.illness': 'حقوق شما وقتی مریض هستید',
  'be.c.illness.b': end("مریض هستید؟ همان‌طور که مقررات داخلی کار (arbeidsreglement) می‌گوید، فوراً به کارفرما خبر بدهید. اکثراً به تصدیق داکتر (ziektebriefje) ضرورت دارید. تصدیق باید در ظرف ۲ روز کاری به کارفرما برسد، مگر اینکه مقررات چیز دیگری بگوید. در تصدیق نوشته نمی‌شود که چه مریضی دارید، و آمر شما حق ندارد بپرسد. دست‌کم ۱ ماه است که آنجا کار می‌کنید؟ پس در ۳۰ روز اول معاش خود، یا بیشتر آن را، می‌گیرید (gewaarborgd loon). روز انتظار بدون معاش وجود ندارد. بعد از آن، ziekenfonds (صندوق بیمهٔ صحی) به شما کمک‌پول می‌دهد: فورم آن را به‌وقت به داکتر ziekenfonds بفرستید. کارفرما می‌تواند یک داکتر کنترول (controlearts) بفرستد تا ببیند که واقعاً نمی‌توانید کار کنید. داکتر طب کار (arbeidsarts) کمک می‌کند که به کار برگردید، و به آمر شما فقط می‌گوید که چه کاری می‌توانید بکنید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': "مریض هستم. تصدیق داکتر خود را امروز می‌فرستم.", // nieuw, nalezen
  'be.c.illness.s': "شما در خانه مریض هستید. آمر شما زنگ می‌زند و می‌پرسد: «چه مریضی دارید؟» چه می‌کنید؟", // nieuw, nalezen
  'be.c.illness.o1': "بگویید که مریض هستید، و تصدیق را به‌وقت بفرستید.", // nieuw, nalezen
  'be.c.illness.o2': "همه چیز را بگویید، چون آمر شما باید بداند.", // nieuw, nalezen
  'be.c.illness.o3': "تیلفون را قطع کنید، و تا جور نشده‌اید چیزی نفرستید.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.w': "لازم نیست بگویید که چه مریضی دارید. در تصدیق شما فقط نوشته شده که چه مدت مریض هستید. تصدیق باید در ظرف ۲ روز کاری به کارفرما برسد، مگر اینکه مقررات داخلی کار چیز دیگری بگوید.", // nieuw, nalezen
  'be.c.kids': "طفل شما مریض است",
  'be.c.kids.b': end("طفل شما ناگهان مریض شده؟ فوراً به کارفرما بگویید. می‌توانید رخصتی به دلایل عاجل (verlof om dwingende redenen) بگیرید: حداکثر ۱۰ روز در سال، معمولاً بدون معاش. بخش کاری شما می‌تواند بیشتر بدهد. طفل شما مدت بیشتری مراقبت لازم دارد؟ پس می‌توانید رخصتی والدین (ouderschapsverlof) بخواهید: کمتر کار می‌کنید یا هیچ کار نمی‌کنید، با کمک‌پول از RVA. حامله هستید؟ کارفرما نمی‌تواند به این دلیل شما را برطرف کند. پیش و پس از ولادت رخصتی دارید (moederschapsrust)، با پول از ziekenfonds. همسر شما طفل دار می‌شود؟ پس ۲۰ روز رخصتی تولد (geboorteverlof) دارید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "طفلم مریض است. آیا امروز زودتر رفته می‌توانم؟",
  'be.c.kids.s': "کودکستان (kinderopvang) سر کار به شما زنگ می‌زند. طفل شما تب دارد و باید به خانه برود. چه می‌کنید؟",
  'be.c.kids.o1': "به سرپرست خود بگویید، و رخصتی به دلایل عاجل بخواهید.", // nieuw, nalezen
  'be.c.kids.o2': "بدون یک کلمه بروید، و فردا توضیح بدهید.",
  'be.c.kids.o3': "سر کار بمانید، و بگذارید طفل تان تا آخر نوبت کاری شما منتظر بماند.",
  'be.c.kids.w': "طفل مریض یک حالت عاجل در خانه است. وقتی اول به سرپرست خود بگویید، او می‌تواند کار را پلان کند. این رخصتی برای چنین لحظه‌هاست، اما اکثراً بدون معاش است.", // nieuw, nalezen
};

export const uk: Gloss = {
  'be.w.calamiteitenverlof': "відпустка з невідкладних причин (часто без оплати)", // nieuw, nalezen
  'be.w.bedrijfsarts': "лікар з медицини праці (лікар твоєї роботи)", // nieuw, nalezen
  'be.w.wachtdag': "гарантована зарплата (роботодавець платить за перші дні хвороби)", // nieuw, nalezen
  'be.w.doorbetalen': "лікарняна довідка (від лікаря)", // nieuw, nalezen
  'be.w.betermelden': "повернутися (на роботу, після хвороби)", // nieuw, nalezen
  'be.s.illness.2': "У мене прийом у лікаря з медицини праці.", // nieuw, nalezen
  'be.c.illness.a': "Я краще не казатиму. У мене є лікарняна довідка.", // nieuw, nalezen
  'be.s.kids.2': "Можна мені взяти відпустку з невідкладних причин?", // nieuw, nalezen
  'be.w.zorgverlof': "відпустка у звʼязку з народженням (для другого з батьків, коли народжується дитина)", // nieuw, nalezen
  'be.c.leave': "Відпустка і відпустка з невідкладних причин", // nieuw, nalezen
  'be.c.leave.b': end("Скільки оплачуваних вихідних днів ти маєш, залежить від того, скільки ти працював / працювала минулого року. Цілий рік на повну ставку, 5 днів на тиждень? Тоді маєш 20 днів відпустки. Твоя галузь може дати більше. Тільки почав / почала працювати? Запитай, що тобі належить у перший рік. Дати ти погоджуєш із роботодавцем: проси вчасно й письмово. Деякі фірми зачиняються на кілька тижнів, як-от під час будівельної відпустки (bouwverlof). Раптова надзвичайна ситуація, наприклад нещасний випадок чи хвороба в родині? Тоді можеш узяти відпустку з невідкладних причин (verlof om dwingende redenen): не більше ніж 10 днів на рік, зазвичай без оплати. Весілля чи похорон у родині? Тоді маєш кілька оплачуваних вихідних (klein verlet). Одразу скажи роботодавцю.", ukBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': { m: 'Я хотів би попросити відпустку на липень.', f: 'Я хотіла б попросити відпустку на липень.', x: 'Можна попросити відпустку на липень?' },
  'be.c.leave.s': 'Влітку ти хочеш на три тижні поїхати до родини за кордон. Що ти зробиш?',
  'be.c.leave.o1': 'Заздалегідь письмово попросиш у роботодавця відпустку.',
  'be.c.leave.o2': 'Просто поїдеш, а начальнику скажеш, коли повернешся.',
  'be.c.leave.o3': 'Попросиш колегу сказати начальнику за день до того.',
  'be.c.leave.w': "Дати відпустки ти погоджуєш із роботодавцем. Якщо попросиш рано, найбільше шансів на «так». Якщо поїдеш без «так», можуть бути великі проблеми на роботі.", // nieuw, nalezen
  'be.c.illness': { m: 'Твої права, коли ти хворий', f: 'Твої права, коли ти хвора', x: 'Твої права під час хвороби' },
  'be.c.illness.b': end("Захворів / захворіла? Одразу скажи роботодавцю, як написано в правилах внутрішнього розпорядку (arbeidsreglement). Часто потрібна лікарняна довідка (ziektebriefje) від твого лікаря. Вона має потрапити до роботодавця протягом 2 робочих днів, якщо правила не кажуть інакше. У довідці не написано, яка в тебе хвороба, і начальник не може про це питати. Ти працюєш там щонайменше 1 місяць? Тоді перші 30 днів ти отримуєш свою зарплату або більшу її частину (gewaarborgd loon). Днів очікування без оплати немає. Після цього ziekenfonds (лікарняна каса) платить тобі допомогу: вчасно надішли його форму лікареві ziekenfonds. Роботодавець може надіслати контрольного лікаря (controlearts), щоб перевірити, що ти хворієш. Лікар з медицини праці (arbeidsarts) допомагає повернутися до роботи й каже начальникові лише, яку роботу ти можеш робити.", ukBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': "Я хворію. Свою лікарняну довідку надішлю сьогодні.", // nieuw, nalezen
  'be.c.illness.s': "Ти хворієш удома. Дзвонить начальник і питає: «Яка в тебе хвороба?» Що ти зробиш?", // nieuw, nalezen
  'be.c.illness.o1': "Скажеш, що хворієш, і вчасно надішлеш довідку.", // nieuw, nalezen
  'be.c.illness.o2': "Розкажеш усе, бо начальник має це знати.", // nieuw, nalezen
  'be.c.illness.o3': "Покладеш слухавку й нічого не надсилатимеш, поки не одужаєш.", // nieuw, nalezen
  'be.c.illness.w': "Ти не мусиш казати, яка в тебе хвороба. У довідці написано лише, скільки часу ти хворієш. Вона має потрапити до роботодавця протягом 2 робочих днів, якщо правила внутрішнього розпорядку не кажуть інакше.", // nieuw, nalezen
  'be.c.kids': "Твоя дитина захворіла",
  'be.c.kids.b': end("Твоя дитина раптово захворіла? Одразу скажи роботодавцю. Можеш узяти відпустку з невідкладних причин (verlof om dwingende redenen): не більше ніж 10 днів на рік, зазвичай без оплати. Твоя галузь може дати більше. Дитині потрібен довший догляд? Тоді можеш попросити відпустку для догляду за дитиною (ouderschapsverlof): ти працюєш менше або зовсім не працюєш, з допомогою від RVA. Вагітна? Роботодавець не може звільнити тебе через це. До й після пологів ти маєш відпустку (moederschapsrust) з грошима від ziekenfonds. У твоєї партнерки народжується дитина? Тоді ти маєш 20 днів відпустки у звʼязку з народженням (geboorteverlof).", ukBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Моя дитина захворіла. Можна мені сьогодні піти раніше?",
  'be.c.kids.s': "Із садка (kinderopvang) тобі дзвонять на роботу. У дитини температура, і її треба забрати додому. Що ти зробиш?",
  'be.c.kids.o1': "Скажеш керівнику й попросиш відпустку з невідкладних причин.", // nieuw, nalezen
  'be.c.kids.o2': "Підеш мовчки, а завтра поясниш.",
  'be.c.kids.o3': "Залишишся на роботі, а дитина чекатиме до кінця твоєї зміни.",
  'be.c.kids.w': "Хвора дитина — це надзвичайна ситуація вдома. Якщо спершу скажеш керівнику, він зможе спланувати роботу. Ця відпустка саме для таких моментів, але вона часто без оплати.", // nieuw, nalezen
};

export const tr: Gloss = {
  'be.w.calamiteitenverlof': "acil nedenlerle izin (çoğu zaman ücretsiz)", // nieuw, nalezen
  'be.w.bedrijfsarts': "iş yeri hekimi (işinin doktoru)", // nieuw, nalezen
  'be.w.wachtdag': "garanti ücret (işveren hastalığın ilk günlerini öder)", // nieuw, nalezen
  'be.w.doorbetalen': "doktor raporu (hastalık belgesi)", // nieuw, nalezen
  'be.w.betermelden': "geri dönmek (hastalıktan sonra işe)", // nieuw, nalezen
  'be.s.illness.2': "İş yeri hekimiyle randevum var.", // nieuw, nalezen
  'be.c.illness.a': "Söylememeyi tercih ederim. Doktor raporum var.", // nieuw, nalezen
  'be.s.kids.2': "Acil nedenlerle izin alabilir miyim?", // nieuw, nalezen
  'be.w.zorgverlof': "doğum izni (bebek doğduğunda diğer ebeveyn için)", // nieuw, nalezen
  'be.c.leave': "Tatil ve acil nedenlerle izin", // nieuw, nalezen
  'be.c.leave.b': end("Ücretli izin günlerin, bir önceki yıl ne kadar çalıştığına bağlıdır. Tam bir yıl tam zamanlı, haftada 5 gün mü? O zaman 20 gün iznin olur. Sektörün daha fazlasını verebilir. İşte yeni misin? İlk yılında ne alabileceğini sor. Tarihleri işverenle ayarlarsın: zamanında ve yazılı olarak iste. Bazı şirketler birkaç hafta kapanır, örneğin inşaat tatilinde (bouwverlof). Ailende kaza ya da hastalık gibi ani bir acil durum mu var? O zaman acil nedenlerle izin (verlof om dwingende redenen) alabilirsin: yılda en fazla 10 gün, genellikle ücretsiz. Ailende düğün ya da cenaze mi var? O zaman birkaç gün ücretli izin alırsın (klein verlet). Hemen işverenine söyle.", trBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Temmuz için izin istiyorum.',
  'be.c.leave.s': 'Yazın üç hafta yurt dışındaki aileni ziyaret etmek istiyorsun. Ne yaparsın?',
  'be.c.leave.o1': 'İşverenden erkenden, yazılı olarak izin istersin.',
  'be.c.leave.o2': 'Öylece gider ve döndüğünde patronuna söylersin.',
  'be.c.leave.o3': 'Bir iş arkadaşından patrona bir gün önce söylemesini istersin.',
  'be.c.leave.w': "İzin günlerinin tarihlerini işverenle ayarlarsın. Erken sormak en iyi “evet” şansını verir. “Evet” olmadan gitmek işte büyük sorun çıkarabilir.", // nieuw, nalezen
  'be.c.illness': 'Hastayken hakların',
  'be.c.illness.b': end("Hasta mısın? Çalışma yönetmeliğinin (arbeidsreglement) dediği gibi hemen işverenine haber ver. Çoğu zaman doktorundan bir rapor (ziektebriefje) gerekir. Yönetmelik başka bir şey demiyorsa, rapor 2 iş günü içinde işverenine ulaşmalıdır. Raporda hangi hastalığın olduğu yazmaz, şefin de soramaz. Orada en az 1 aydır çalışıyor musun? O zaman ilk 30 gün maaşını ya da büyük kısmını alırsın (gewaarborgd loon). Ücretsiz bekleme günü yoktur. Sonra ziekenfonds (sağlık sigortası kurumu) sana ödenek öder: onun formunu zamanında ziekenfonds doktoruna gönder. İşverenin, hasta olduğunu kontrol etmek için bir kontrol doktoru (controlearts) gönderebilir. İş yeri hekimi (arbeidsarts) işe dönmene yardım eder ve şefine yalnızca hangi işi yapabileceğini söyler.", trBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.p': "Hastayım. Doktor raporumu bugün gönderiyorum.", // nieuw, nalezen
  'be.c.illness.s': "Evde hastasın. Şefin arıyor ve soruyor: “Hastalığın ne?” Ne yaparsın?", // nieuw, nalezen
  'be.c.illness.o1': "Hasta olduğunu söylersin ve raporunu zamanında gönderirsin.", // nieuw, nalezen
  'be.c.illness.o2': "Her şeyi anlatırsın, çünkü şefin bilmeli.", // nieuw, nalezen
  'be.c.illness.o3': "Telefonu kapatır, iyileşene kadar hiçbir şey göndermezsin.", // nieuw, nalezen
  'be.c.illness.w': "Hangi hastalığın olduğunu söylemek zorunda değilsin. Raporda yalnızca ne kadar süre hasta olduğun yazar. Çalışma yönetmeliği başka bir şey demiyorsa, rapor 2 iş günü içinde işverenine ulaşmalıdır.", // nieuw, nalezen
  'be.c.kids': "Çocuğun hasta",
  'be.c.kids.b': end("Çocuğun birden mi hastalandı? Hemen işverenine söyle. Acil nedenlerle izin (verlof om dwingende redenen) alabilirsin: yılda en fazla 10 gün, genellikle ücretsiz. Sektörün daha fazlasını verebilir. Çocuğunun daha uzun bakıma mı ihtiyacı var? O zaman ebeveyn izni (ouderschapsverlof) isteyebilirsin: daha az çalışırsın ya da hiç çalışmazsın, RVA’dan bir ödenekle. Hamile misin? İşverenin seni bu yüzden işten çıkaramaz. Doğumdan önce ve sonra iznin olur (moederschapsrust), ziekenfonds’tan parayla. Partnerin bebek mi bekliyor? O zaman 20 gün doğum iznin (geboorteverlof) olur.", trBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Çocuğum hasta. Bugün erken çıkabilir miyim?",
  'be.c.kids.s': "Kreş (kinderopvang) seni işte arıyor. Çocuğunun ateşi var ve eve gitmesi gerekiyor. Ne yaparsın?",
  'be.c.kids.o1': "Amirine söylersin ve acil nedenlerle izin istersin.", // nieuw, nalezen
  'be.c.kids.o2': "Tek kelime etmeden çıkar, yarın açıklarsın.",
  'be.c.kids.o3': "İşte kalır, çocuğunu vardiyan bitene kadar bekletirsin.",
  'be.c.kids.w': "Hasta bir çocuk evde acil bir durumdur. Önce amirine söylersen işi planlayabilir. Bu izin böyle anlar içindir, ama çoğu zaman ücretsizdir.", // nieuw, nalezen
};

export const pl: Gloss = {
  'be.w.calamiteitenverlof': "urlop z pilnych powodów (często bez wynagrodzenia)", // nieuw, nalezen
  'be.w.bedrijfsarts': "lekarz medycyny pracy (lekarz twojej pracy)", // nieuw, nalezen
  'be.w.wachtdag': "gwarantowane wynagrodzenie (pracodawca płaci za pierwsze dni choroby)", // nieuw, nalezen
  'be.w.doorbetalen': "zwolnienie lekarskie (zaświadczenie od lekarza)", // nieuw, nalezen
  'be.w.betermelden': "wrócić (do pracy, po chorobie)", // nieuw, nalezen
  'be.s.illness.2': "Mam wizytę u lekarza medycyny pracy.", // nieuw, nalezen
  'be.c.illness.a': "Wolę tego nie mówić. Mam zwolnienie lekarskie.", // nieuw, nalezen
  'be.s.kids.2': "Czy mogę wziąć urlop z pilnych powodów?", // nieuw, nalezen
  'be.w.zorgverlof': "urlop z okazji narodzin (dla drugiego rodzica, gdy rodzi się dziecko)", // nieuw, nalezen
  'be.c.leave': "Urlop i urlop z pilnych powodów", // nieuw, nalezen
  'be.c.leave.b': end("Liczba płatnych dni wolnych zależy od tego, ile pracowałeś / pracowałaś w poprzednim roku. Cały rok na pełny etat, 5 dni w tygodniu? Wtedy masz 20 dni wolnych. Twoja branża może dać więcej. Dopiero zaczynasz? Zapytaj, co możesz dostać w pierwszym roku. Terminy ustalasz z pracodawcą: proś na czas i na piśmie. Niektóre firmy zamykają się na kilka tygodni, na przykład w czasie urlopu w budownictwie (bouwverlof). Nagły wypadek, na przykład wypadek albo choroba w rodzinie? Wtedy możesz wziąć urlop z pilnych powodów (verlof om dwingende redenen): najwyżej 10 dni w roku, zwykle bez wynagrodzenia. Ślub albo pogrzeb w rodzinie? Wtedy masz kilka płatnych dni wolnych (klein verlet). Od razu powiedz pracodawcy.", plBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': { m: 'Chciałbym poprosić o urlop w lipcu.', f: 'Chciałabym poprosić o urlop w lipcu.', x: 'Czy mogę prosić o urlop w lipcu?' },
  'be.c.leave.s': 'Latem chcesz na trzy tygodnie odwiedzić rodzinę za granicą. Co robisz?',
  'be.c.leave.o1': 'Wcześnie prosisz pracodawcę o urlop, na piśmie.',
  'be.c.leave.o2': 'Po prostu jedziesz i mówisz szefowi, gdy wrócisz.',
  'be.c.leave.o3': 'Prosisz kolegę, żeby dzień wcześniej powiedział szefowi.',
  'be.c.leave.w': "Terminy dni wolnych ustalasz z pracodawcą. Kto pyta wcześnie, ma największą szansę na „tak”. Wyjazd bez „tak” może narobić ci dużych kłopotów w pracy.", // nieuw, nalezen
  'be.c.illness': { m: 'Twoje prawa, gdy jesteś chory', f: 'Twoje prawa, gdy jesteś chora', x: 'Twoje prawa w czasie choroby' },
  'be.c.illness.b': end("Chorujesz? Od razu powiedz pracodawcy, tak jak mówi regulamin pracy (arbeidsreglement). Często potrzebujesz zwolnienia lekarskiego (ziektebriefje) od lekarza. Musi ono dotrzeć do pracodawcy w ciągu 2 dni roboczych, chyba że regulamin mówi inaczej. W zwolnieniu nie jest napisane, na co chorujesz, i szef nie może o to pytać. Pracujesz tam od co najmniej 1 miesiąca? Wtedy przez pierwsze 30 dni dostajesz swoją pensję albo jej większą część (gewaarborgd loon). Nie ma dni karencji bez wynagrodzenia. Potem twój ziekenfonds (kasa chorych) płaci ci zasiłek: wyślij na czas jego formularz do lekarza ziekenfonds. Pracodawca może wysłać lekarza kontrolnego (controlearts), żeby sprawdził, czy chorujesz. Lekarz medycyny pracy (arbeidsarts) pomaga ci wrócić do pracy i mówi szefowi tylko, jaką pracę możesz wykonywać.", plBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.p': { m: "Jestem chory. Dziś wysyłam moje zwolnienie lekarskie.", f: "Jestem chora. Dziś wysyłam moje zwolnienie lekarskie.", x: "Jestem chory / chora. Dziś wysyłam moje zwolnienie lekarskie." }, // nieuw, nalezen
  'be.c.illness.s': { m: "Jesteś chory w domu. Szef dzwoni i pyta: „Na co chorujesz?” Co robisz?", f: "Jesteś chora w domu. Szef dzwoni i pyta: „Na co chorujesz?” Co robisz?", x: "Chorujesz w domu. Szef dzwoni i pyta: „Na co chorujesz?” Co robisz?" }, // nieuw, nalezen
  'be.c.illness.o1': { m: "Mówisz, że jesteś chory, i wysyłasz zwolnienie na czas.", f: "Mówisz, że jesteś chora, i wysyłasz zwolnienie na czas.", x: "Mówisz, że chorujesz, i wysyłasz zwolnienie na czas." }, // nieuw, nalezen
  'be.c.illness.o2': "Mówisz wszystko, bo szef musi to wiedzieć.", // nieuw, nalezen
  'be.c.illness.o3': "Rozłączasz się i nic nie wysyłasz, dopóki nie wyzdrowiejesz.", // nieuw, nalezen
  'be.c.illness.w': "Nie musisz mówić, na co chorujesz. W zwolnieniu jest napisane tylko, jak długo chorujesz. Musi ono dotrzeć do pracodawcy w ciągu 2 dni roboczych, chyba że regulamin pracy mówi inaczej.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.kids': "Twoje dziecko jest chore",
  'be.c.kids.b': end("Twoje dziecko nagle zachorowało? Od razu powiedz pracodawcy. Możesz wziąć urlop z pilnych powodów (verlof om dwingende redenen): najwyżej 10 dni w roku, zwykle bez wynagrodzenia. Twoja branża może dać więcej. Dziecko potrzebuje dłuższej opieki? Wtedy możesz poprosić o urlop rodzicielski (ouderschapsverlof): pracujesz mniej albo wcale, z zasiłkiem z RVA. W ciąży? Pracodawca nie może cię z tego powodu zwolnić. Przed porodem i po nim masz urlop (moederschapsrust), z pieniędzmi z ziekenfonds. Twoja partnerka będzie mieć dziecko? Wtedy masz 20 dni urlopu z okazji narodzin (geboorteverlof).", plBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Moje dziecko jest chore. Czy mogę dziś wyjść wcześniej?",
  'be.c.kids.s': "Żłobek (kinderopvang) dzwoni do ciebie do pracy. Twoje dziecko ma gorączkę i musi wrócić do domu. Co robisz?",
  'be.c.kids.o1': "Mówisz przełożonemu i prosisz o urlop z pilnych powodów.", // nieuw, nalezen
  'be.c.kids.o2': "Wychodzisz bez słowa i wyjaśniasz to jutro.",
  'be.c.kids.o3': "Zostajesz w pracy, a dziecko czeka do końca twojej zmiany.",
  'be.c.kids.w': "Chore dziecko to nagła sytuacja w domu. Jeśli najpierw powiesz przełożonemu, może on zaplanować pracę. Ten urlop jest na takie chwile, ale często jest bez wynagrodzenia.", // nieuw, nalezen
};

export const ro: Gloss = {
  'be.w.calamiteitenverlof': "concediul din motive urgente (deseori neplătit)", // nieuw, nalezen
  'be.w.bedrijfsarts': "medicul de medicina muncii (medicul de la locul tău de muncă)", // nieuw, nalezen
  'be.w.wachtdag': "salariul garantat (angajatorul plătește primele zile de boală)", // nieuw, nalezen
  'be.w.doorbetalen': "adeverința medicală (de la medic)", // nieuw, nalezen
  'be.w.betermelden': "a reveni (la muncă, după boală)", // nieuw, nalezen
  'be.s.illness.2': "Am o programare la medicul de medicina muncii.", // nieuw, nalezen
  'be.c.illness.a': "Prefer să nu spun. Am o adeverință medicală.", // nieuw, nalezen
  'be.s.kids.2': "Pot să iau concediu din motive urgente?", // nieuw, nalezen
  'be.w.zorgverlof': "concediul de naștere (pentru celălalt părinte, când se naște un copil)", // nieuw, nalezen
  'be.c.leave': "Concediu și concediu din motive urgente", // nieuw, nalezen
  'be.c.leave.b': end("Zilele tale libere plătite depind de cât ai lucrat în anul dinainte. Un an întreg cu normă întreagă, 5 zile pe săptămână? Atunci ai 20 de zile libere. Sectorul tău poate da mai multe. Abia ai început? Întreabă ce poți primi în primul an. Datele le stabilești cu angajatorul: cere la timp și în scris. Unele firme se închid câteva săptămâni, de exemplu în concediul din construcții (bouwverlof). O urgență bruscă, de exemplu un accident sau o boală în familie? Atunci poți lua concediu din motive urgente (verlof om dwingende redenen): cel mult 10 zile pe an, de obicei neplătit. O nuntă sau o înmormântare în familie? Atunci ai câteva zile libere plătite (klein verlet). Spune-i imediat angajatorului.", roBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Aș vrea să cer concediu pentru iulie.',
  'be.c.leave.s': 'Vrei să-ți vizitezi familia din străinătate trei săptămâni vara. Ce faci?',
  'be.c.leave.o1': 'Îi ceri angajatorului concediu din timp, în scris.',
  'be.c.leave.o2': 'Pur și simplu pleci și îi spui șefului când te întorci.',
  'be.c.leave.o3': 'Îl rogi pe un coleg să-i spună șefului cu o zi înainte.',
  'be.c.leave.w': "Datele zilelor libere le stabilești cu angajatorul. Dacă întrebi devreme, ai cele mai mari șanse la un da. Dacă pleci fără un da, poți avea probleme mari la muncă.", // nieuw, nalezen
  'be.c.illness': { m: 'Drepturile tale când ești bolnav', f: 'Drepturile tale când ești bolnavă', x: 'Drepturile tale în caz de boală' },
  'be.c.illness.b': end("Bolnav sau bolnavă? Spune-i imediat angajatorului, cum scrie în regulamentul de muncă (arbeidsreglement). Deseori ai nevoie de o adeverință medicală (ziektebriefje) de la medicul tău. Ea trebuie să ajungă la angajator în 2 zile lucrătoare, dacă regulamentul nu spune altceva. Pe adeverință nu scrie ce boală ai, iar șeful nu are voie să întrebe. Lucrezi acolo de cel puțin 1 lună? Atunci în primele 30 de zile primești salariul, sau cea mai mare parte din el (gewaarborgd loon). Nu există zile de așteptare fără plată. După aceea, ziekenfonds (casa de asigurări de sănătate) îți plătește o indemnizație: trimite la timp formularul lui la medicul de la ziekenfonds. Angajatorul poate trimite un medic de control (controlearts) ca să verifice că nu poți lucra. Medicul de medicina muncii (arbeidsarts) te ajută să te întorci la muncă și îi spune șefului doar ce muncă poți face.", roBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': { m: "Sunt bolnav. Îmi trimit azi adeverința medicală.", f: "Sunt bolnavă. Îmi trimit azi adeverința medicală.", x: "Sunt bolnav / bolnavă. Îmi trimit azi adeverința medicală." }, // nieuw, nalezen
  'be.c.illness.s': { m: "Ești bolnav acasă. Șeful sună și întreabă: „Ce boală ai?” Ce faci?", f: "Ești bolnavă acasă. Șeful sună și întreabă: „Ce boală ai?” Ce faci?", x: "Ești bolnav / bolnavă acasă. Șeful sună și întreabă: „Ce boală ai?” Ce faci?" }, // nieuw, nalezen
  'be.c.illness.o1': { m: "Spui că ești bolnav și trimiți adeverința la timp.", f: "Spui că ești bolnavă și trimiți adeverința la timp.", x: "Spui că ești bolnav / bolnavă și trimiți adeverința la timp." }, // nieuw, nalezen
  'be.c.illness.o2': "Spui tot, pentru că șeful trebuie să știe.", // nieuw, nalezen
  'be.c.illness.o3': "Închizi și nu trimiți nimic până te faci bine.", // nieuw, nalezen
  'be.c.illness.w': "Nu trebuie să spui ce boală ai. Pe adeverință scrie doar cât durează boala. Ea trebuie să ajungă la angajator în 2 zile lucrătoare, dacă regulamentul de muncă nu spune altceva.", // nieuw, nalezen
  'be.c.kids': "Copilul tău e bolnav",
  'be.c.kids.b': end("Copilul tău s-a îmbolnăvit brusc? Spune-i imediat angajatorului. Poți lua concediu din motive urgente (verlof om dwingende redenen): cel mult 10 zile pe an, de obicei neplătit. Sectorul tău poate da mai mult. Copilul are nevoie de îngrijire mai mult timp? Atunci poți cere concediu parental (ouderschapsverlof): lucrezi mai puțin sau deloc, cu o indemnizație de la RVA. Însărcinată? Angajatorul nu te poate concedia din acest motiv. Înainte și după naștere ai concediu (moederschapsrust), cu bani de la ziekenfonds. Partenera ta are un copil? Atunci ai 20 de zile de concediu de naștere (geboorteverlof).", roBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Copilul meu e bolnav. Pot să plec mai devreme azi?",
  'be.c.kids.s': "Creșa (kinderopvang) te sună la muncă. Copilul tău are febră și trebuie să meargă acasă. Ce faci?",
  'be.c.kids.o1': "Îi spui șefului și ceri concediu din motive urgente.", // nieuw, nalezen
  'be.c.kids.o2': "Pleci fără un cuvânt și explici mâine.",
  'be.c.kids.o3': "Rămâi la muncă și îți lași copilul să aștepte până se termină tura.",
  'be.c.kids.w': "Un copil bolnav e o urgență acasă. Dacă îi spui întâi șefului, el poate organiza munca. Acest concediu e pentru asemenea momente, dar deseori e neplătit.", // nieuw, nalezen
};

export const bg: Gloss = {
  'be.w.calamiteitenverlof': "отпускът по неотложни причини (често неплатен)", // nieuw, nalezen
  'be.w.bedrijfsarts': "лекарят по трудова медицина (лекарят на работата ти)", // nieuw, nalezen
  'be.w.wachtdag': "гарантираната заплата (работодателят плаща първите дни на болест)", // nieuw, nalezen
  'be.w.doorbetalen': "болничната бележка (от лекаря)", // nieuw, nalezen
  'be.w.betermelden': "връщам се (на работа, след болест)", // nieuw, nalezen
  'be.s.illness.2': "Имам час при лекаря по трудова медицина.", // nieuw, nalezen
  'be.c.illness.a': "Предпочитам да не казвам. Имам болнична бележка.", // nieuw, nalezen
  'be.s.kids.2': "Може ли да взема отпуск по неотложни причини?", // nieuw, nalezen
  'be.w.zorgverlof': "отпускът при раждане (за другия родител, когато се роди бебе)", // nieuw, nalezen
  'be.c.leave': "Отпуск и отпуск по неотложни причини", // nieuw, nalezen
  'be.c.leave.b': end("Платените ти почивни дни зависят от това колко си работил / работила предишната година. Цяла година на пълен работен ден, 5 дни седмично? Тогава имаш 20 почивни дни. Твоят сектор може да дава повече. Нов / нова си на работа? Попитай какво можеш да получиш през първата година. Датите уговаряш с работодателя: питай навреме и писмено. Някои фирми затварят за няколко седмици, например през строителната ваканция (bouwverlof). Внезапна спешна ситуация, например злополука или болест в семейството? Тогава можеш да вземеш отпуск по неотложни причини (verlof om dwingende redenen): най-много 10 дни в годината, обикновено без заплата. Сватба или погребение в семейството? Тогава имаш няколко платени почивни дни (klein verlet). Кажи веднага на работодателя.", bgBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': { m: 'Бих искал да подам молба за отпуск за юли.', f: 'Бих искала да подам молба за отпуск за юли.', x: 'Може ли да подам молба за отпуск за юли?' },
  'be.c.leave.s': 'През лятото искаш да посетиш семейството си в чужбина за три седмици. Какво правиш?',
  'be.c.leave.o1': 'Искаш отпуск от работодателя рано и писмено.',
  'be.c.leave.o2': 'Просто заминаваш и казваш на шефа, когато се върнеш.',
  'be.c.leave.o3': 'Молиш колега да каже на шефа предния ден.',
  'be.c.leave.w': "Датите на почивните дни уговаряш с работодателя. Ако питаш рано, имаш най-голям шанс за „да“. Ако тръгнеш без „да“, може да имаш големи проблеми на работа.", // nieuw, nalezen
  'be.c.illness': { m: 'Правата ти, когато си болен', f: 'Правата ти, когато си болна', x: 'Правата ти при болест' },
  'be.c.illness.b': end("Болен / болна си? Кажи веднага на работодателя, както пише в правилника за работа (arbeidsreglement). Често ти трябва болнична бележка (ziektebriefje) от лекаря. Тя трябва да стигне до работодателя до 2 работни дни, освен ако правилникът казва друго. В бележката не пише каква болест имаш, а шефът няма право да пита. Работиш там поне 1 месец? Тогава през първите 30 дни получаваш заплатата си или по-голямата част от нея (gewaarborgd loon). Няма дни на изчакване без заплата. След това ziekenfonds (здравната каса) ти плаща обезщетение: изпрати навреме нейния формуляр на лекаря на ziekenfonds. Работодателят може да изпрати контролен лекар (controlearts), за да провери, че не можеш да работиш. Лекарят по трудова медицина (arbeidsarts) ти помага да се върнеш на работа и казва на шефа само каква работа можеш да вършиш.", bgBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': { m: "Болен съм. Днес изпращам болничната си бележка.", f: "Болна съм. Днес изпращам болничната си бележка.", x: "Болен / болна съм. Днес изпращам болничната си бележка." }, // nieuw, nalezen
  'be.c.illness.s': { m: "Болен си вкъщи. Шефът звъни и пита: „Каква болест имаш?“ Какво правиш?", f: "Болна си вкъщи. Шефът звъни и пита: „Каква болест имаш?“ Какво правиш?", x: "Болен / болна си вкъщи. Шефът звъни и пита: „Каква болест имаш?“ Какво правиш?" }, // nieuw, nalezen
  'be.c.illness.o1': { m: "Казваш, че си болен, и изпращаш бележката навреме.", f: "Казваш, че си болна, и изпращаш бележката навреме.", x: "Казваш, че си болен / болна, и изпращаш бележката навреме." }, // nieuw, nalezen
  'be.c.illness.o2': "Разказваш всичко, защото шефът трябва да знае.", // nieuw, nalezen
  'be.c.illness.o3': "Затваряш и не изпращаш нищо, докато не оздравееш.", // nieuw, nalezen
  'be.c.illness.w': "Не е нужно да казваш каква болест имаш. В бележката пише само колко време ще продължи болестта. Тя трябва да стигне до работодателя до 2 работни дни, освен ако правилникът за работа казва друго.", // nieuw, nalezen
  'be.c.kids': "Детето ти е болно",
  'be.c.kids.b': end("Детето ти внезапно се разболя? Кажи веднага на работодателя. Можеш да вземеш отпуск по неотложни причини (verlof om dwingende redenen): най-много 10 дни в годината, обикновено без заплата. Твоят сектор може да дава повече. Детето има нужда от грижи по-дълго? Тогава можеш да поискаш родителски отпуск (ouderschapsverlof): работиш по-малко или изобщо не работиш, с обезщетение от RVA. Бременна си? Работодателят няма право да те уволни заради това. Преди и след раждането имаш отпуск (moederschapsrust), с пари от ziekenfonds. Партньорката ти ще ражда? Тогава имаш 20 дни отпуск при раждане (geboorteverlof).", bgBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Детето ми е болно. Мога ли да си тръгна по-рано днес?",
  'be.c.kids.s': "От детската градина (kinderopvang) ти се обаждат на работа. Детето ти има температура и трябва да се прибере вкъщи. Какво правиш?",
  'be.c.kids.o1': "Казваш на началника и молиш за отпуск по неотложни причини.", // nieuw, nalezen
  'be.c.kids.o2': "Тръгваш си без дума и обясняваш утре.",
  'be.c.kids.o3': "Оставаш на работа, а детето чака до края на смяната ти.",
  'be.c.kids.w': "Болното дете е спешна ситуация вкъщи. Ако първо кажеш на началника, той може да планира работата. Този отпуск е за такива моменти, но често е неплатен.", // nieuw, nalezen
};

export const es: Gloss = {
  'be.w.calamiteitenverlof': "el permiso por motivos urgentes (a menudo sin sueldo)", // nieuw, nalezen
  'be.w.bedrijfsarts': "el médico / la médica del trabajo", // nieuw, nalezen
  'be.w.wachtdag': "el sueldo garantizado (tu empresa paga los primeros días de baja)", // nieuw, nalezen
  'be.w.doorbetalen': "el certificado médico (del médico)", // nieuw, nalezen
  'be.w.betermelden': "volver (al trabajo, después de una enfermedad)", // nieuw, nalezen
  'be.s.illness.2': "Tengo una cita con el médico del trabajo.", // nieuw, nalezen
  'be.c.illness.a': "Prefiero no decirlo. Tengo un certificado médico.", // nieuw, nalezen
  'be.s.kids.2': "¿Puedo tomar un permiso por motivos urgentes?", // nieuw, nalezen
  'be.w.zorgverlof': "el permiso por nacimiento (para el otro progenitor, cuando nace un bebé)", // nieuw, nalezen
  'be.c.leave': "Vacaciones y permiso por motivos urgentes", // nieuw, nalezen
  'be.c.leave.b': end("Tus días libres pagados dependen de lo que trabajaste el año anterior. ¿Un año entero a tiempo completo, 5 días por semana? Entonces tienes 20 días libres. Tu sector puede dar más. ¿Acabas de empezar? Pregunta qué puedes tener el primer año. Las fechas las acuerdas con tu empresa: pide a tiempo y por escrito. Algunas empresas cierran unas semanas, como en las vacaciones de la construcción (bouwverlof). ¿Una urgencia de repente, como un accidente o una enfermedad en tu familia? Entonces puedes tomar un permiso por motivos urgentes (verlof om dwingende redenen): como máximo 10 días al año, normalmente sin sueldo. ¿Una boda o un entierro en tu familia? Entonces tienes unos días libres pagados (klein verlet). Avisa enseguida a tu empresa.", esBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Me gustaría pedir vacaciones para julio.',
  'be.c.leave.s': 'En verano quieres visitar a tu familia en el extranjero durante tres semanas. ¿Qué haces?',
  'be.c.leave.o1': 'Pides las vacaciones a tu empresa con tiempo, por escrito.',
  'be.c.leave.o2': 'Simplemente te vas, y se lo dices a tu jefe cuando vuelves.',
  'be.c.leave.o3': 'Pides a un compañero que se lo diga al jefe el día antes.',
  'be.c.leave.w': "Las fechas de tus días libres las acuerdas con tu empresa. Pedirlo pronto da más posibilidades de un sí. Irte sin un sí puede darte grandes problemas en el trabajo.", // nieuw, nalezen
  'be.c.illness': 'Tus derechos durante una enfermedad',
  'be.c.illness.b': end("¿Enfermo o enferma? Avisa enseguida a tu empresa, como dice tu reglamento de trabajo (arbeidsreglement). A menudo necesitas un certificado médico (ziektebriefje) de tu médico. Tiene que llegar a tu empresa en 2 días laborables, salvo que tu reglamento diga otra cosa. El certificado no dice qué enfermedad tienes, y tu jefe no puede preguntarlo. ¿Llevas allí al menos 1 mes? Entonces los primeros 30 días recibes tu sueldo, o la mayor parte (gewaarborgd loon: sueldo garantizado). No hay días de espera sin sueldo. Después, tu mutua (ziekenfonds) te paga una prestación: manda a tiempo su formulario al médico de la mutua. Tu empresa puede mandar un médico de control (controlearts) para comprobar que estás enfermo o enferma. El médico del trabajo (arbeidsarts) te ayuda a volver al trabajo, y solo le dice a tu jefe qué trabajo puedes hacer.", esBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': { m: "Estoy enfermo. Hoy mando mi certificado médico.", f: "Estoy enferma. Hoy mando mi certificado médico.", x: "Estoy enfermo/a. Hoy mando mi certificado médico." }, // nieuw, nalezen
  'be.c.illness.s': { m: "Estás enfermo en casa. Tu jefe llama y pregunta: «¿Qué enfermedad tienes?» ¿Qué haces?", f: "Estás enferma en casa. Tu jefe llama y pregunta: «¿Qué enfermedad tienes?» ¿Qué haces?", x: "Estás enfermo/a en casa. Tu jefe llama y pregunta: «¿Qué enfermedad tienes?» ¿Qué haces?" }, // nieuw, nalezen
  'be.c.illness.o1': { m: "Dices que estás enfermo, y mandas tu certificado a tiempo.", f: "Dices que estás enferma, y mandas tu certificado a tiempo.", x: "Dices que estás enfermo/a, y mandas tu certificado a tiempo." }, // nieuw, nalezen
  'be.c.illness.o2': "Lo cuentas todo, porque tu jefe tiene que saberlo.", // nieuw, nalezen
  'be.c.illness.o3': "Cuelgas, y no mandas nada hasta que estés mejor.", // nieuw, nalezen
  'be.c.illness.w': "No tienes que decir qué enfermedad tienes. Tu certificado solo dice cuánto tiempo estás de baja. Tiene que llegar a tu empresa en 2 días laborables, salvo que tu reglamento de trabajo diga otra cosa.", // nieuw, nalezen
  'be.c.kids': "Tu hijo está enfermo",
  'be.c.kids.b': end("¿Tu hijo o tu hija se pone enfermo de repente? Avisa enseguida a tu empresa. Puedes tomar un permiso por motivos urgentes (verlof om dwingende redenen): como máximo 10 días al año, normalmente sin sueldo. Tu sector puede dar más. ¿Tu hijo necesita cuidados más tiempo? Entonces puedes pedir un permiso parental (ouderschapsverlof): trabajas menos o nada, con una prestación de la RVA. ¿Embarazada? Tu empresa no puede despedirte por eso. Antes y después del parto tienes un permiso (moederschapsrust), con dinero de tu mutua (ziekenfonds). ¿Tu pareja tiene un bebé? Entonces tienes 20 días de permiso por nacimiento (geboorteverlof).", esBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Mi hijo está enfermo. ¿Puedo irme antes hoy?",
  'be.c.kids.s': "La guardería (kinderopvang) te llama al trabajo. Tu hijo tiene fiebre y tiene que irse a casa. ¿Qué haces?",
  'be.c.kids.o1': "Avisas a tu encargado, y pides un permiso por motivos urgentes.", // nieuw, nalezen
  'be.c.kids.o2': "Te vas sin decir nada, y lo explicas mañana.",
  'be.c.kids.o3': "Te quedas en el trabajo, y dejas que tu hijo espere hasta el final de tu turno.",
  'be.c.kids.w': "Un hijo enfermo es una urgencia en casa. Si avisas primero a tu encargado, puede organizar el trabajo. Este permiso es para momentos así, pero a menudo es sin sueldo.", // nieuw, nalezen
};

export const pt: Gloss = {
  'be.w.calamiteitenverlof': "a licença por motivos urgentes (muitas vezes sem salário)", // nieuw, nalezen
  'be.w.bedrijfsarts': "o médico / a médica do trabalho", // nieuw, nalezen
  'be.w.wachtdag': "o salário garantido (o teu empregador paga os primeiros dias de doença)", // nieuw, nalezen
  'be.w.doorbetalen': "o atestado médico (do médico)", // nieuw, nalezen
  'be.w.betermelden': "voltar (ao trabalho, depois de uma doença)", // nieuw, nalezen
  'be.s.illness.2': "Tenho uma consulta com o médico do trabalho.", // nieuw, nalezen
  'be.c.illness.a': "Prefiro não dizer. Tenho um atestado médico.", // nieuw, nalezen
  'be.s.kids.2': "Posso tirar uma licença por motivos urgentes?", // nieuw, nalezen
  'be.w.zorgverlof': "a licença de nascimento (para o outro progenitor, quando nasce um bebé)", // nieuw, nalezen
  'be.c.leave': "Férias e licença por motivos urgentes", // nieuw, nalezen
  'be.c.leave.b': end("Os teus dias de férias pagos dependem de quanto trabalhaste no ano anterior. Um ano inteiro a tempo inteiro, 5 dias por semana? Então tens 20 dias de férias. O teu setor pode dar mais. Começaste há pouco? Pergunta o que podes ter no teu primeiro ano. As datas combinas com o teu empregador: pede a tempo e por escrito. Algumas empresas fecham umas semanas, como nas férias da construção (bouwverlof). Uma urgência de repente, como um acidente ou uma doença na tua família? Então podes tirar uma licença por motivos urgentes (verlof om dwingende redenen): no máximo 10 dias por ano, normalmente sem salário. Um casamento ou um funeral na tua família? Então tens alguns dias livres pagos (klein verlet). Avisa logo o teu empregador.", ptBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Gostava de pedir férias para julho.',
  'be.c.leave.s': 'No verão queres visitar a tua família no estrangeiro durante três semanas. O que fazes?',
  'be.c.leave.o1': 'Pedes as férias ao teu empregador com antecedência, por escrito.',
  'be.c.leave.o2': 'Vais simplesmente, e dizes ao patrão quando voltares.',
  'be.c.leave.o3': 'Pedes a um colega que diga ao patrão na véspera.',
  'be.c.leave.w': "As datas das tuas férias combinas com o teu empregador. Pedir cedo dá mais hipóteses de um sim. Ir sem um sim pode trazer-te grandes problemas no trabalho.", // nieuw, nalezen
  'be.c.illness': 'Os teus direitos quando estás doente',
  'be.c.illness.b': end("Doente? Avisa logo o teu empregador, como diz o regulamento de trabalho (arbeidsreglement). Muitas vezes precisas de um atestado médico (ziektebriefje) do teu médico. Ele tem de chegar ao teu empregador em 2 dias úteis, a não ser que o regulamento diga outra coisa. O atestado não diz que doença tens, e o teu chefe não pode perguntar. Trabalhas lá há pelo menos 1 mês? Então, nos primeiros 30 dias, recebes o teu salário, ou a maior parte dele (gewaarborgd loon: salário garantido). Não há dias de espera sem salário. Depois, o teu ziekenfonds (a caixa de saúde) paga-te um subsídio: envia o formulário dele a tempo ao médico do ziekenfonds. O teu empregador pode mandar um médico de controlo (controlearts) para ver se estás doente. O médico do trabalho (arbeidsarts) ajuda-te a voltar ao trabalho, e só diz ao teu chefe que trabalho podes fazer.", ptBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': "Estou doente. Envio hoje o meu atestado médico.", // nieuw, nalezen
  'be.c.illness.s': "Estás doente em casa. O teu chefe liga e pergunta: «Que doença tens?» O que fazes?", // nieuw, nalezen
  'be.c.illness.o1': "Dizes que estás doente, e envias o atestado a tempo.", // nieuw, nalezen
  'be.c.illness.o2': "Contas tudo, porque o teu chefe tem de saber.", // nieuw, nalezen
  'be.c.illness.o3': "Desligas, e não envias nada até estares melhor.", // nieuw, nalezen
  'be.c.illness.w': "Não tens de dizer que doença tens. O teu atestado só diz quanto tempo estás doente. Ele tem de chegar ao teu empregador em 2 dias úteis, a não ser que o regulamento de trabalho diga outra coisa.", // nieuw, nalezen
  'be.c.kids': "O teu filho está doente",
  'be.c.kids.b': end("O teu filho fica doente de repente? Avisa logo o teu empregador. Podes tirar uma licença por motivos urgentes (verlof om dwingende redenen): no máximo 10 dias por ano, normalmente sem salário. O teu setor pode dar mais. O teu filho precisa de cuidados por mais tempo? Então podes pedir uma licença parental (ouderschapsverlof): trabalhas menos ou nada, com um subsídio da RVA. Grávida? O teu empregador não te pode despedir por isso. Antes e depois do parto tens uma licença (moederschapsrust), com dinheiro do teu ziekenfonds. A tua companheira ou o teu companheiro vai ter um bebé? Então tens 20 dias de licença de nascimento (geboorteverlof).", ptBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "O meu filho está doente. Posso sair mais cedo hoje?",
  'be.c.kids.s': "A creche (kinderopvang) liga-te para o trabalho. O teu filho tem febre e tem de ir para casa. O que fazes?",
  'be.c.kids.o1': "Dizes ao teu chefe, e pedes uma licença por motivos urgentes.", // nieuw, nalezen
  'be.c.kids.o2': "Sais sem dizer nada, e explicas amanhã.",
  'be.c.kids.o3': "Ficas no trabalho, e deixas o teu filho à espera até ao fim do teu turno.",
  'be.c.kids.w': "Uma criança doente é uma urgência em casa. Se avisares primeiro o teu chefe, ele pode organizar o trabalho. Esta licença é para momentos assim, mas muitas vezes é sem salário.", // nieuw, nalezen
};

export const fr: Gloss = {
  'be.w.calamiteitenverlof': "le congé pour raisons impérieuses (souvent sans salaire)", // nieuw, nalezen
  'be.w.bedrijfsarts': "le médecin du travail (le médecin de ton travail)", // nieuw, nalezen
  'be.w.wachtdag': "le salaire garanti (ton employeur paie les premiers jours de maladie)", // nieuw, nalezen
  'be.w.doorbetalen': "le certificat médical (du médecin)", // nieuw, nalezen
  'be.w.betermelden': "revenir (au travail, après une maladie)", // nieuw, nalezen
  'be.s.illness.2': "J’ai rendez-vous chez le médecin du travail.", // nieuw, nalezen
  'be.c.illness.a': "Je préfère ne pas le dire. J’ai un certificat médical.", // nieuw, nalezen
  'be.s.kids.2': "Est-ce que je peux prendre un congé pour raisons impérieuses ?", // nieuw, nalezen
  'be.w.zorgverlof': "le congé de naissance (pour l’autre parent, quand un bébé naît)", // nieuw, nalezen
  'be.c.leave': "Vacances et congé pour raisons impérieuses", // nieuw, nalezen
  'be.c.leave.b': end("Tes jours de congé payés dépendent de ce que tu as travaillé l’année d’avant. Une année complète à temps plein, 5 jours par semaine ? Alors tu as 20 jours de congé. Ton secteur peut en donner plus. Nouveau ou nouvelle au travail ? Demande ce que tu peux avoir pendant ta première année. Tu fixes les dates avec ton employeur : demande à temps, et par écrit. Certaines entreprises ferment quelques semaines, comme pendant les congés du bâtiment (bouwverlof). Une urgence soudaine, comme un accident ou une maladie dans ta famille ? Alors tu peux prendre un congé pour raisons impérieuses (verlof om dwingende redenen) : au maximum 10 jours par an, en général sans salaire. Un mariage ou un enterrement dans ta famille ? Alors tu as quelques jours de congé payés (klein verlet : petit chômage). Préviens tout de suite ton employeur.", frBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Je voudrais demander un congé pour juillet.',
  'be.c.leave.s': 'Tu veux rendre visite à ta famille à l’étranger pendant trois semaines cet été. Que fais-tu ?',
  'be.c.leave.o1': 'Demande ton congé tôt à ton employeur, par écrit.',
  'be.c.leave.o2': 'Pars, et préviens ton patron à ton retour.',
  'be.c.leave.o3': 'Demande à un collègue de prévenir le patron la veille.',
  'be.c.leave.w': "Tu fixes les dates de tes congés avec ton employeur. Demander tôt donne le plus de chances d’avoir un oui. Partir sans un oui peut te causer de gros problèmes au travail.", // nieuw, nalezen
  'be.c.illness': 'Tes droits quand tu es malade',
  'be.c.illness.b': end("Malade ? Préviens tout de suite ton employeur, comme le dit ton règlement de travail (arbeidsreglement). Souvent, il te faut un certificat médical (ziektebriefje) de ton médecin. Il doit arriver chez ton employeur dans les 2 jours ouvrables, sauf si ton règlement de travail dit autre chose. Le certificat ne dit pas quelle maladie tu as, et ton chef ne peut pas le demander. Tu travailles là depuis au moins 1 mois ? Alors, les 30 premiers jours, tu reçois ton salaire, ou la plus grande partie (gewaarborgd loon : salaire garanti). Il n’y a pas de jours de carence sans salaire. Après, ta mutualité (ziekenfonds) te paie une indemnité : envoie son formulaire à temps au médecin de la mutualité. Ton employeur peut envoyer un médecin contrôleur (controlearts) pour vérifier que tu es malade. Le médecin du travail (arbeidsarts) t’aide à reprendre le travail, et dit seulement à ton chef quel travail tu peux faire.", frBase, 'advice'), // nieuw, nalezen
  'be.c.illness.p': "Je suis malade. J’envoie mon certificat médical aujourd’hui.", // nieuw, nalezen
  'be.c.illness.s': "Tu es malade à la maison. Ton chef appelle et demande : “Tu as quelle maladie ?” Que fais-tu ?", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.o1': "Dis que tu es malade, et envoie ton certificat à temps.", // nieuw, nalezen
  'be.c.illness.o2': "Raconte tout, parce que ton chef doit le savoir.", // nieuw, nalezen
  'be.c.illness.o3': "Raccroche, et n’envoie rien avant d’aller mieux.", // nieuw, nalezen
  'be.c.illness.w': "Tu n’as pas à dire quelle maladie tu as. Ton certificat dit seulement combien de temps tu es malade. Il doit arriver chez ton employeur dans les 2 jours ouvrables, sauf si ton règlement de travail dit autre chose.", // nieuw, nalezen
  'be.c.kids': "Ton enfant est malade",
  'be.c.kids.b': end("Ton enfant est malade tout à coup ? Préviens tout de suite ton employeur. Tu peux prendre un congé pour raisons impérieuses (verlof om dwingende redenen) : au maximum 10 jours par an, en général sans salaire. Ton secteur peut donner plus. Ton enfant a besoin de soins plus longtemps ? Alors tu peux demander un congé parental (ouderschapsverlof) : tu travailles moins ou plus du tout, avec une allocation de la RVA (ONEM). Enceinte ? Ton employeur ne peut pas te licencier pour cette raison. Avant et après la naissance, tu as un congé (moederschapsrust : repos de maternité), avec de l’argent de ta mutualité (ziekenfonds). Ta ou ton partenaire a un bébé ? Alors tu as 20 jours de congé de naissance (geboorteverlof).", frBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Mon enfant est malade. Je peux partir plus tôt aujourd’hui ?",
  'be.c.kids.s': "La crèche (kinderopvang) t’appelle au travail. Ton enfant a de la fièvre et doit rentrer à la maison. Que fais-tu ?",
  'be.c.kids.o1': "Préviens ton responsable, et demande un congé pour raisons impérieuses.", // nieuw, nalezen
  'be.c.kids.o2': "Pars sans rien dire, et explique-le demain.",
  'be.c.kids.o3': "Reste au travail, et laisse ton enfant attendre la fin de ton service.",
  'be.c.kids.w': "Un enfant malade, c’est une urgence à la maison. Si tu préviens d’abord ton responsable, il peut organiser le travail. Ce congé est fait pour ces moments-là, mais il est souvent sans salaire.", // nieuw, nalezen
};

export const de: Gloss = {
  'be.w.calamiteitenverlof': "der Urlaub aus dringenden Gründen (oft ohne Lohn)", // nieuw, nalezen
  'be.w.bedrijfsarts': "der Arbeitsarzt / die Arbeitsärztin (der Arzt deiner Arbeit)", // nieuw, nalezen
  'be.w.wachtdag': "der garantierte Lohn (dein Arbeitgeber zahlt die ersten Krankheitstage)", // nieuw, nalezen
  'be.w.doorbetalen': "die Krankmeldung vom Arzt (das Attest)", // nieuw, nalezen
  'be.w.betermelden': "zurückkommen (zur Arbeit, nach einer Krankheit)", // nieuw, nalezen
  'be.s.illness.2': "Ich habe einen Termin beim Arbeitsarzt.", // nieuw, nalezen
  'be.c.illness.a': "Das sage ich lieber nicht. Ich habe ein Attest.", // nieuw, nalezen
  'be.s.kids.2': "Darf ich Urlaub aus dringenden Gründen nehmen?", // nieuw, nalezen
  'be.w.zorgverlof': "der Geburtsurlaub (für den anderen Elternteil, wenn ein Baby geboren wird)", // nieuw, nalezen
  'be.c.leave': "Urlaub und Urlaub aus dringenden Gründen", // nieuw, nalezen
  'be.c.leave.b': end("Wie viele bezahlte freie Tage du bekommst, hängt davon ab, wie viel du im Jahr davor gearbeitet hast. Ein ganzes Jahr Vollzeit, 5 Tage pro Woche? Dann bekommst du 20 freie Tage. Deine Branche kann mehr geben. Neu bei der Arbeit? Frag, was du im ersten Jahr bekommen kannst. Die Daten sprichst du mit deinem Arbeitgeber ab: Frag rechtzeitig und schriftlich. Manche Firmen schließen für ein paar Wochen, zum Beispiel im Bauurlaub (bouwverlof). Ein plötzlicher Notfall, zum Beispiel ein Unfall oder eine Krankheit in deiner Familie? Dann kannst du Urlaub aus dringenden Gründen nehmen (verlof om dwingende redenen): höchstens 10 Tage im Jahr, meistens ohne Lohn. Eine Hochzeit oder eine Beerdigung in deiner Familie? Dann bekommst du ein paar bezahlte freie Tage (klein verlet). Sag es sofort deinem Arbeitgeber.", deBase, 'advice'), // nieuw, nalezen
  'be.c.leave.p': 'Ich möchte gern Urlaub für Juli beantragen.',
  'be.c.leave.s': 'Du willst im Sommer drei Wochen deine Familie im Ausland besuchen. Was machst du?',
  'be.c.leave.o1': 'Beantrage früh und schriftlich Urlaub bei deinem Arbeitgeber.',
  'be.c.leave.o2': 'Fahr einfach und sag es deinem Chef, wenn du zurück bist.',
  'be.c.leave.o3': 'Bitte einen Kollegen, es dem Chef am Tag vorher zu sagen.',
  'be.c.leave.w': "Die Daten deiner freien Tage sprichst du mit deinem Arbeitgeber ab. Wer früh fragt, hat die besten Chancen auf ein Ja. Wer ohne Ja geht, kann großen Ärger bei der Arbeit bekommen.", // nieuw, nalezen
  'be.c.illness': 'Deine Rechte, wenn du krank bist',
  'be.c.illness.b': end("Krank? Sag es sofort deinem Arbeitgeber, so wie es in der Arbeitsordnung (arbeidsreglement) steht. Oft brauchst du ein Attest (ziektebriefje) von deinem Arzt. Es muss innerhalb von 2 Arbeitstagen bei deinem Arbeitgeber sein, außer deine Arbeitsordnung sagt etwas anderes. Auf dem Attest steht nicht, welche Krankheit du hast, und dein Chef darf nicht danach fragen. Arbeitest du dort seit mindestens 1 Monat? Dann bekommst du in den ersten 30 Tagen deinen Lohn oder den größten Teil davon (gewaarborgd loon). Es gibt keine Karenztage ohne Lohn. Danach zahlt dir dein ziekenfonds (Krankenkasse) eine Leistung: Schick sein Formular rechtzeitig an den Arzt des ziekenfonds. Dein Arbeitgeber darf einen Kontrollarzt (controlearts) schicken, der prüft, ob du krank bist. Der Arbeitsarzt (arbeidsarts) hilft dir, wieder an die Arbeit zu kommen, und sagt deinem Chef nur, welche Arbeit du machen kannst.", deBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.illness.p': "Ich bin krank. Mein Attest schicke ich heute.", // nieuw, nalezen
  'be.c.illness.s': "Du bist krank zu Hause. Dein Chef ruft an und fragt: „Welche Krankheit hast du?“ Was machst du?", // nieuw, nalezen
  'be.c.illness.o1': "Sag, dass du krank bist, und schick dein Attest rechtzeitig.", // nieuw, nalezen
  'be.c.illness.o2': "Erzähl alles, dein Chef muss es ja wissen.", // nieuw, nalezen
  'be.c.illness.o3': "Leg auf und schick nichts, bis du wieder gesund bist.", // nieuw, nalezen
  'be.c.illness.w': "Du musst nicht sagen, welche Krankheit du hast. Auf deinem Attest steht nur, wie lange du krank bist. Es muss innerhalb von 2 Arbeitstagen bei deinem Arbeitgeber sein, außer deine Arbeitsordnung sagt etwas anderes.", // nieuw, nalezen
  'be.c.kids': "Dein Kind ist krank",
  'be.c.kids.b': end("Ist dein Kind plötzlich krank? Sag es sofort deinem Arbeitgeber. Du kannst Urlaub aus dringenden Gründen nehmen (verlof om dwingende redenen): höchstens 10 Tage im Jahr, meistens ohne Lohn. Deine Branche kann mehr geben. Braucht dein Kind länger Pflege? Dann kannst du Elternurlaub (ouderschapsverlof) beantragen: Du arbeitest weniger oder gar nicht, mit einer Leistung der RVA. Schwanger? Deshalb darf dein Arbeitgeber dir nicht kündigen. Vor und nach der Geburt bekommst du Urlaub (moederschapsrust), mit Geld von deinem ziekenfonds. Bekommt deine Partnerin ein Baby? Dann bekommst du 20 Tage Geburtsurlaub (geboorteverlof).", deBase, 'advice'), // nieuw, nalezen
  'be.c.kids.p': "Mein Kind ist krank. Kann ich heute früher gehen?",
  'be.c.kids.s': "Die Kita (kinderopvang) ruft dich bei der Arbeit an. Dein Kind hat Fieber und muss nach Hause. Was machst du?",
  'be.c.kids.o1': "Sag es deinem Vorgesetzten und bitte um Urlaub aus dringenden Gründen.", // nieuw, nalezen
  'be.c.kids.o2': "Geh ohne ein Wort und erklär es morgen.",
  'be.c.kids.o3': "Bleib bei der Arbeit und lass dein Kind warten, bis deine Schicht vorbei ist.",
  'be.c.kids.w': "Ein krankes Kind ist ein Notfall zu Hause. Wenn du es zuerst deinem Vorgesetzten sagst, kann er die Arbeit planen. Dieser Urlaub ist für solche Momente da, aber er ist oft unbezahlt.", // nieuw, nalezen
};
