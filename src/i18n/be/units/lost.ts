import type { CultureTranslation } from '../../culture/types';
import { ar as arBase, ti as tiBase, fa as faBase, prs as prsBase, uk as ukBase, tr as trBase, pl as plBase, ro as roBase, bg as bgBase, es as esBase, pt as ptBase, fr as frBase, de as deBase } from '../base';
import type { Gloss } from '../types';

// The translations of the Belgian version of u.lost (src/content/taalBe/units/lost.ts): de C4, de RVA, de VDAB, het justitiehuis, het ziekenfonds, de loonbrieven, and the three tips. One object per help language.
// A text whose English is the same as the Dutch tip's is the Dutch unit's translation (src/i18n/work/<lang>.ts);
// the rest is new: // nieuw, nalezen. The Belgian names (justitiehuis, ziekenfonds, VDAB, RVA, HVW, C4,
// Unia, Payoke …) stay Dutch, as in the English. Arabic and Tigrinya: written without a gender.

/** A tip's body with the Belgian closing line of this language (src/i18n/be/base.ts, src/lib/tipText.ts). */
const end = (body: string, base: CultureTranslation, kind: 'advice' | 'abuse'): string => {
  const line = base.gloss[`be.closing.${kind}`];
  return `${body} ${typeof line === 'string' ? line : (line.x ?? line.m)}`;
};

export const ar: Gloss = {
  'be.w.ww': "C4 (الورقة من صاحب العمل عند انتهاء العمل)", // nieuw, nalezen
  'be.w.uwv': "RVA (المكتب الوطني الذي يقرّر في إعانة البطالة)", // nieuw, nalezen
  'be.s.ww.1': "أسجّل نفسي في VDAB.", // nieuw, nalezen
  'be.c.ww.a': "أطلب ورقة C4 وأذهب إلى النقابة.", // nieuw, nalezen
  'be.s.jobends.2': "أطلب النصيحة في justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "أسأل ziekenfonds إن كان تأميني مستمراً.", // nieuw, nalezen
  'be.s.newjob.2': 'أحتفظ بقسائم راتبي.',
  'be.c.ww': "إعانة البطالة", // nieuw, nalezen
  'be.c.ww.b': end("فقدان العمل؟ صاحب العمل يعطي ورقة C4، في آخر يوم عمل على الأكثر. التسجيل فوراً كباحث عن عمل في VDAB. ثم طلب الإعانة عن طريق نقابة (ABVV أو ACV أو ACLVB)، أو عن طريق HVW لمن ليس عضواً. الطلب لا يُقدَّم إلى RVA نفسها: RVA هي التي تقرّر. يجب أولاً العمل مدة كافية. الإعانة محدودة في الزمن: مدتها تتوقف على مدة العمل. ترك العمل بدون سبب وجيه؟ عندها غالباً لا توجد إعانة لفترة.", arBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "أريد أن أطلب إعانة. ماذا يجب أن أفعل؟", // nieuw, nalezen
  'be.c.ww.s': { m: 'أنت غاضب من عملك وتريد أن تستقيل اليوم. ما التصرّف الحكيم؟', f: 'أنت غاضبة من عملك وتريدين أن تستقيلي اليوم. ما التصرّف الحكيم؟' },
  'be.c.ww.o1': { m: 'اطلب النصيحة أولاً، قبل أن تستقيل.', f: 'اطلبي النصيحة أولاً، قبل أن تستقيلي.' },
  'be.c.ww.o2': "الاستقالة اليوم: الإعانة ستأتي على كل حال.", // nieuw, nalezen
  'be.c.ww.o3': { m: 'توقف عن المجيء إلى العمل دون أن تقول شيئاً.', f: 'توقفي عن المجيء إلى العمل دون أن تقولي شيئاً.' },
  'be.c.ww.w': "الاستقالة قد تُفقد الإعانة لفترة. الحديث أولاً مع المشرف أو النقابة أو justitiehuis قد يساعد على إيجاد طريق أفضل.", // nieuw, nalezen
  'be.c.jobends': "ينتهي عملك: ماذا يتوقف أيضاً؟",
  'be.c.jobends.b': end("عند انتهاء العمل، يجب التحقق من التسوية النهائية (eindafrekening) وطلب ورقة C4. موظف مكتب (bediende)؟ عندها يأتي مال العطلة مع آخر أجر. عامل (arbeider)؟ عندها يأتي في السنة التالية من صندوق العطل (vakantiekas). السكن أو الحافلة الصغيرة عن طريق الوكالة قد ينتهيان في الوقت نفسه. لعقد الإيجار قواعده الخاصة: طلب النصيحة قبل ترك البيت. التأمين على العلاج يكون عن طريق ziekenfonds. مع إعانة البطالة يبقى التأمين عادةً. انتقال إلى سكن آخر؟ إخبار gemeente (البلدية) خلال 8 أيام عمل. عودة إلى البلد الأصلي؟ السؤال لدى ziekenfonds.", arBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "متى أحصل على التسوية النهائية؟",
  'be.c.jobends.s': "العمل ينتهي يوم الجمعة. الوكالة ترتّب الغرفة أيضاً. ما التصرف الصحيح؟", // nieuw, nalezen
  'be.c.jobends.o1': "السؤال عمّا يقوله عقد الإيجار، وطلب النصيحة.", // nieuw, nalezen
  'be.c.jobends.o2': "ترك الغرفة يوم الجمعة، لأن العمل ينتهي.", // nieuw, nalezen
  'be.c.jobends.o3': "البقاء، وعدم الحديث عن ذلك مع أحد.", // nieuw, nalezen
  'be.c.jobends.w': "عقد الإيجار منفصل عن عقد العمل. فيه مدة البقاء المسموحة. justitiehuis يعطي أول استشارة مجانية.", // nieuw, nalezen
  'be.c.newjob': 'البحث عن عمل جديد',
  'be.c.newjob.b': end("قبل الرحيل، طلب رسالة توصية (referentie). الاحتفاظ بقسائم الأجر (loonbrieven) والعقد وورقة C4. تحديث السيرة الذاتية. البحث عن عمل في VDAB (vdab.be) وفي وكالات العمل المؤقت (interimkantoren). لا دفع للمال أبداً مقابل الحصول على عمل.", arBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'هل يمكنني أن أعطي اسمك كمرجع؟',
  'be.c.newjob.s': { m: 'شخص يعرض عليك عملاً، لكن يجب أولاً أن تدفع 300 يورو «من أجل الوظيفة». ماذا تفعل؟', f: 'شخص يعرض عليك عملاً، لكن يجب أولاً أن تدفعي 300 يورو «من أجل الوظيفة». ماذا تفعلين؟' },
  'be.c.newjob.o1': "عدم الدفع. البحث عن وكالة عمل مؤقت حقيقية.", // nieuw, nalezen
  'be.c.newjob.o2': { m: 'ادفع، لأن الوظيفة الجيدة تستحق ذلك.', f: 'ادفعي، لأن الوظيفة الجيدة تستحق ذلك.' },
  'be.c.newjob.o3': { m: 'ادفع النصف الآن والباقي لاحقاً.', f: 'ادفعي النصف الآن والباقي لاحقاً.' },
  'be.c.newjob.w': "طلب المال مقابل عمل علامة تحذير. لا يحق لوكالة العمل المؤقت أن تأخذ مالاً مقابل إيجاد عمل. البحث عن عمل ممكن أيضاً في VDAB.", // nieuw, nalezen
};

export const ti: Gloss = {
  'be.w.ww': "C4 (ስራሕኩም ምስ ተወደአ ካብ ኣስራሒ እትረኽብዎ ወረቐት)", // nieuw, nalezen
  'be.w.uwv': "RVA (ብዛዕባ ሓገዝ ስራሕ ኣልቦነት ዝውስን ሃገራዊ ቤት ጽሕፈት)", // nieuw, nalezen
  'be.s.ww.1': "ኣብ VDAB እምዝገብ።", // nieuw, nalezen
  'be.c.ww.a': "C4 ይሓትት፡ ናብ ማሕበር ሰራሕተኛታት ድማ እኸይድ።", // nieuw, nalezen
  'be.s.jobends.2': "ኣብ justitiehuis ምኽሪ እሓትት።", // nieuw, nalezen
  'be.s.jobends.3': "መድሕነይ ይቕጽል እንተ ኾይኑ ንziekenfonds እሓትት።", // nieuw, nalezen
  'be.s.newjob.2': 'ወረቓቕቲ ደሞዘይ እዕቅቦም።',
  'be.c.ww': "ሓገዝ ስራሕ ኣልቦነት", // nieuw, nalezen
  'be.c.ww.b': end("ስራሕኩም ኣጥፊእኩም? ኣስራሒ እንተ ደንጎየ ኣብ ናይ መወዳእታ መዓልቲ ስራሕ C4 ይህበኩም። ብቕጽበት ኣብ VDAB ከም ስራሕ ደላዪ ተመዝገቡ። ድሕሪኡ ብማሕበር ሰራሕተኛታት (ABVV፡ ACV ወይ ACLVB) ወይ ኣባል እንተ ዘይኮንኩም ብHVW ሓገዝ ሕተቱ። ንRVA ባዕሉ ኣይትሓቱን፡ RVA ይውስን። መጀመርታ እኹል ግዜ ክትሰርሑ ኣለኩም። እቲ ሓገዝ ብግዜ ዝተገደበ እዩ፡ ክንደይ ይጸንሕ ክንደይ ከም ዝሰራሕኩም ይምርኮስ። ብዘይ ጽቡቕ ምኽንያት ባዕልኹም ስራሕ ገዲፍኩም? ሽዑ መብዛሕትኡ ግዜ ንግዜ ሓገዝ ኣይትረኽቡን።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "ሓገዝ ክሓትት እደሊ። እንታይ ክገብር ኣለኒ?", // nieuw, nalezen
  'be.c.ww.s': { m: 'ብስራሕካ ተቖጢዕካ ሎሚ ክትገድፎ ትደሊ። ብልሒ ዝኾነ እንታይ እዩ?', f: 'ብስራሕኪ ተቖጢዕኪ ሎሚ ክትገድፍዮ ትደልዪ። ብልሒ ዝኾነ እንታይ እዩ?' },
  'be.c.ww.o1': { m: 'ቅድሚ ምግዳፍካ፡ ቅድም ምኽሪ ውሰድ።', f: 'ቅድሚ ምግዳፍኪ፡ ቅድም ምኽሪ ውሰዲ።', x: 'ቅድሚ ምግዳፍኩም፡ ቅድም ምኽሪ ውሰዱ።' },
  'be.c.ww.o2': "ሎሚ ስራሕ ምግዳፍ፡ ብዝኾነ ሓገዝ ክትረኽቡ ኢኹም።", // nieuw, nalezen
  'be.c.ww.o3': { m: 'ገለ ከይበልካ ናብ ስራሕ ምምጻእ ኣቋርጽ።', f: 'ገለ ከይበልኪ ናብ ስራሕ ምምጻእ ኣቋርጺ።', x: 'ገለ ከይበልኩም ናብ ስራሕ ምምጻእ ኣቋርጹ።' },
  'be.c.ww.w': "ስራሕ ምግዳፍ ንግዜ ሓገዝኩም ከጥፍኣልኩም ይኽእል። መጀመርታ ምስ ተቖጻጻሪ፡ ማሕበር ሰራሕተኛታት ወይ justitiehuis ምዝራብ ዝሓሸ መንገዲ ክትረኽቡ ይሕግዘኩም።", // nieuw, nalezen
  'be.c.jobends': { m: 'ስራሕካ ይውዳእ፡ ካልእ እንታይ ይቋረጽ?', f: 'ስራሕኪ ይውዳእ፡ ካልእ እንታይ ይቋረጽ?', x: 'ስራሕኩም ይውዳእ፡ ካልእ እንታይ ይቋረጽ?' },
  'be.c.jobends.b': end("ስራሕኩም ምስ ተወደአ፡ ናይ መወዳእታ ሕሳብ (eindafrekening) ተቖጻጸሩ፡ C4 ድማ ሕተቱ። ሰራሕተኛ ቤት ጽሕፈት (bediende) ዶ ኢኹም? ሽዑ ገንዘብ ዕረፍቲ ምስ ናይ መወዳእታ ደሞዝ ትረኽቡ። ሰራሕተኛ ኢድ (arbeider)? ሽዑ ኣብ ዝቕጽል ዓመት ካብ ሳጹን ዕረፍቲ (vakantiekas) ትረኽብዎ። ብኤጀንሲ ዝመጸ ገዛ ወይ ሚኒባስ ብሓደ ግዜ ክውዳእ ይኽእል። ውዕል ክራይኩም ናይ ገዛእ ርእሱ ሕግታት ኣለዎ፡ ቅድሚ ካብ ገዛ ምውጻእኩም ምኽሪ ሕተቱ። ንሕክምና ብziekenfonds ዝተመሓደርኩም ኢኹም። ምስ ሓገዝ ስራሕ ኣልቦነት መብዛሕትኡ ግዜ መድሕን ይቕጽል። ገዛ ትቕይሩ ዶ? ኣብ ውሽጢ 8 መዓልቲ ስራሕ ንgemeente (ምምሕዳር ከተማ) ሓብሩ። ናብ ሃገርኩም ትምለሱ ዶ? ንziekenfonds ሕተቱ።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': 'ናይ መወዳእታ ክፍሊተይ መዓስ ይበጽሓኒ?',
  'be.c.jobends.s': "ስራሕኩም ዓርቢ ይውዳእ። ኤጀንሲ ክፍልኹም እውን የዳሉ። እንታይ ትገብሩ?", // nieuw, nalezen
  'be.c.jobends.o1': "ውዕል ክራይ እንታይ ከም ዝብል ምሕታት፡ ምኽሪ ድማ ምውሳድ።", // nieuw, nalezen
  'be.c.jobends.o2': "ስራሕ ስለ ዝውዳእ ዓርቢ ካብ ክፍሊ ምውጻእ።", // nieuw, nalezen
  'be.c.jobends.o3': "ምጽናሕ፡ ምስ ዝኾነ ሰብ ብዛዕባኡ ዘይምዝራብ።", // nieuw, nalezen
  'be.c.jobends.w': "ውዕል ክራይኩም ካብ ውዕል ስራሕኩም ፍሉይ እዩ። ክንደይ ግዜ ክትጸንሑ ከም ትኽእሉ ኣብኡ ይጽሓፍ። justitiehuis ናይ መጀመርታ ናጻ ምኽሪ ክህበኩም ይኽእል።", // nieuw, nalezen
  'be.c.newjob': 'ሓድሽ ስራሕ ምድላይ',
  'be.c.newjob.b': end("ቅድሚ ምኻድኩም ናይ ምስክርነት ደብዳቤ (referentie) ሕተቱ። ወረቓቕቲ ደሞዝ (loonbrieven)፡ ውዕልኩምን C4ን ዓቅቡ። CV ኣሐድሱ። ኣብ VDAB (vdab.be)ን ኣብ ናይ ግዚያዊ ስራሕ ኤጀንሲታት (interimkantoren)ን ስራሕ ድለዩ። ስራሕ ንምርካብ ፈጺምኩም ገንዘብ ኣይትኽፈሉ።", tiBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'ስምኩም ከም መወከሲ ክህብ ይኽእል ዶ?',
  'be.c.newjob.s': { m: 'ሓደ ሰብ ስራሕ የቕርበልካ፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍል ኣለካ። እንታይ ትገብር?', f: 'ሓደ ሰብ ስራሕ የቕርበልኪ፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍሊ ኣለኪ። እንታይ ትገብሪ?', x: 'ሓደ ሰብ ስራሕ የቕርበልኩም፡ ግን ቅድም 300 ዩሮ «ንስራሕ» ክትከፍሉ ኣለኩም። እንታይ ትገብሩ?' },
  'be.c.newjob.o1': "ዘይምኽፋል። ሓቀኛ ኤጀንሲ ምድላይ።", // nieuw, nalezen
  'be.c.newjob.o2': { m: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈል።', f: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈሊ።', x: 'ጽቡቕ ስራሕ ዋጋ ስለ ዘለዎ፡ ክፈሉ።' },
  'be.c.newjob.o3': { m: 'ሕጂ ፍርቂ ክፈል፡ እቲ ዝተረፈ ድማ ደሓር።', f: 'ሕጂ ፍርቂ ክፈሊ፡ እቲ ዝተረፈ ድማ ደሓር።', x: 'ሕጂ ፍርቂ ክፈሉ፡ እቲ ዝተረፈ ድማ ደሓር።' },
  'be.c.newjob.w': "ንስራሕ ገንዘብ ምሕታት ምልክት ሓደጋ እዩ። ናይ ግዚያዊ ስራሕ ኤጀንሲ ስራሕ ስለ ዝረኸበልኩም ገንዘብ ክወስድ ኣይፍቀዶን። ኣብ VDAB እውን ስራሕ ክትደልዩ ትኽእሉ።", // nieuw, nalezen
};

export const fa: Gloss = {
  'be.w.ww': "C4 (کاغذی از کارفرما وقتی کارت تمام می‌شود)", // nieuw, nalezen
  'be.w.uwv': "RVA (ادارهٔ ملی که دربارهٔ کمک‌هزینهٔ بیکاری تصمیم می‌گیرد)", // nieuw, nalezen
  'be.s.ww.1': "در VDAB ثبت‌نام می‌کنم.", // nieuw, nalezen
  'be.c.ww.a': "C4 خودم را می‌خواهم و به اتحادیه می‌روم.", // nieuw, nalezen
  'be.s.jobends.2': "از justitiehuis مشورت می‌گیرم.", // nieuw, nalezen
  'be.s.jobends.3': "از ziekenfonds خودم می‌پرسم که بیمه‌ام ادامه دارد یا نه.", // nieuw, nalezen
  'be.s.newjob.2': 'فیش‌های حقوقی‌ام را نگه می‌دارم.',
  'be.c.ww': "کمک‌هزینهٔ بیکاری", // nieuw, nalezen
  'be.c.ww.b': end("کارت را از دست داده‌ای؟ کارفرما حداکثر در آخرین روز کاری‌ات یک C4 به تو می‌دهد. فوراً در VDAB به‌عنوان کارجو ثبت‌نام کن. بعد کمک‌هزینه‌ات را از طریق اتحادیهٔ کارگری (ABVV، ACV یا ACLVB) درخواست کن، یا اگر عضو نیستی از طریق HVW. درخواست را به خود RVA نمی‌دهی: RVA تصمیم می‌گیرد. اول باید به اندازهٔ کافی کار کرده باشی. کمک‌هزینه از نظر زمانی محدود است: مدت آن به این بستگی دارد که چقدر کار کرده‌ای. خودت بدون دلیل خوب استعفا داده‌ای؟ پس معمولاً برای مدتی کمک‌هزینه نمی‌گیری.", faBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "می‌خواهم کمک‌هزینه درخواست کنم. چه باید بکنم؟", // nieuw, nalezen
  'be.c.ww.s': 'از کارت عصبانی هستی و می‌خواهی امروز استعفا بدهی. کار عاقلانه چیست؟',
  'be.c.ww.o1': 'اول مشورت بگیر، قبل از اینکه استعفا بدهی.',
  'be.c.ww.o2': "امروز استعفا بده: به هر حال کمک‌هزینه می‌گیری.", // nieuw, nalezen
  'be.c.ww.o3': 'بدون اینکه چیزی بگویی دیگر سر کار نرو.',
  'be.c.ww.w': "استعفا می‌تواند برای مدتی کمک‌هزینه‌ات را از بین ببرد. حرف زدن اول با سرپرست، اتحادیه یا justitiehuis می‌تواند کمکت کند راه بهتری پیدا کنی.", // nieuw, nalezen
  'be.c.jobends': "کارت تمام می‌شود: چه چیزهای دیگری تمام می‌شود؟",
  'be.c.jobends.b': end("وقتی کارت تمام می‌شود، تسویه‌حساب نهایی (eindafrekening) را بررسی کن و C4 خودت را بخواه. کارمند اداری (bediende) هستی؟ پس پول تعطیلاتت را با آخرین حقوقت می‌گیری. کارگر (arbeider) هستی؟ پس آن را سال بعد از صندوق تعطیلات (vakantiekas) می‌گیری. خانه یا ون از طریق آژانس ممکن است همزمان تمام شود. قرارداد اجاره‌ات قانون‌های خودش را دارد: پیش از ترک خانه مشورت بگیر. برای درمان از طریق ziekenfonds بیمه هستی. با کمک‌هزینهٔ بیکاری معمولاً بیمه می‌مانی. اسباب‌کشی می‌کنی؟ ظرف ۸ روز کاری به gemeente (شهرداری) خبر بده. به کشور خودت برمی‌گردی؟ از ziekenfonds خودت بپرس.", faBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "کی تسویه‌حساب نهایی‌ام را می‌گیرم؟",
  'be.c.jobends.s': "کارت جمعه تمام می‌شود. آژانس اتاقت را هم جور کرده است. چه کار می‌کنی؟", // nieuw, nalezen
  'be.c.jobends.o1': "بپرس در قرارداد اجاره‌ات چه نوشته، و مشورت بگیر.", // nieuw, nalezen
  'be.c.jobends.o2': "جمعه از اتاق برو، چون کار تمام می‌شود.", // nieuw, nalezen
  'be.c.jobends.o3': "بمان، و با هیچ‌کس دربارهٔ آن حرف نزن.", // nieuw, nalezen
  'be.c.jobends.w': "قرارداد اجاره‌ات از قرارداد کارت جداست. در آن نوشته چه مدت می‌توانی بمانی. justitiehuis می‌تواند اولین مشاوره را رایگان به تو بدهد.", // nieuw, nalezen
  'be.c.newjob': 'دنبال کار جدید گشتن',
  'be.c.newjob.b': end("پیش از رفتن، یک معرفی‌نامه (referentie) بخواه. فیش‌های حقوقی (loonbrieven)، قرارداد و C4 خودت را نگه دار. رزومه‌ات را به‌روز کن. در VDAB (vdab.be) و در دفترهای کاریابی موقت (interimkantoren) دنبال کار بگرد. هرگز برای گرفتن کار پول نده.", faBase, 'abuse'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.newjob.p': 'می‌توانم اسم شما را به‌عنوان معرف بدهم؟',
  'be.c.newjob.s': 'کسی به تو کاری پیشنهاد می‌کند، ولی اول باید ۳۰۰ یورو «برای کار» بدهی. چه کار می‌کنی؟',
  'be.c.newjob.o1': "پول نده. دنبال یک دفتر کاریابی موقت واقعی بگرد.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.newjob.o2': 'پول بده، چون یک کار خوب ارزشش را دارد.',
  'be.c.newjob.o3': 'الان نصفش را بده و بقیه را بعداً.',
  'be.c.newjob.w': "پول خواستن برای کار یک نشانهٔ خطر است. دفتر کاریابی موقت حق ندارد برای پیدا کردن کار از تو پول بگیرد. در VDAB هم می‌توانی دنبال کار بگردی.", // nieuw, nalezen // nagelezen AI ronde 3
};

export const prs: Gloss = {
  'be.w.ww': "C4 (کاغذی از کارفرما وقتی کار شما ختم می‌شود)", // nieuw, nalezen
  'be.w.uwv': "RVA (ادارهٔ ملی که دربارهٔ کمک‌پول بیکاری تصمیم می‌گیرد)", // nieuw, nalezen
  'be.s.ww.1': "در VDAB ثبت‌نام می‌کنم.", // nieuw, nalezen
  'be.c.ww.a': "C4 خود را می‌خواهم و به اتحادیه می‌روم.", // nieuw, nalezen
  'be.s.jobends.2': "از justitiehuis مشوره می‌گیرم.", // nieuw, nalezen
  'be.s.jobends.3': "از ziekenfonds خود می‌پرسم که بیمه‌ام ادامه دارد یا نی.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.s.newjob.2': 'ورق‌های معاش خود را نگه می‌دارم.',
  'be.c.ww': "کمک‌پول بیکاری", // nieuw, nalezen
  'be.c.ww.b': end("کار خود را از دست داده‌اید؟ کارفرما حداکثر در آخرین روز کاری شما یک C4 به شما می‌دهد. فوراً در VDAB به‌حیث کارجو ثبت‌نام کنید. بعد کمک‌پول خود را از طریق اتحادیهٔ کارگری (ABVV، ACV یا ACLVB) درخواست کنید، یا اگر عضو نیستید از طریق HVW. درخواست را به خود RVA نمی‌دهید: RVA تصمیم می‌گیرد. اول باید به اندازهٔ کافی کار کرده باشید. کمک‌پول از نظر زمان محدود است: مدت آن به این بستگی دارد که چقدر کار کرده‌اید. خود تان بدون دلیل خوب استعفا داده‌اید؟ پس معمولاً برای مدتی کمک‌پول نمی‌گیرید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "می‌خواهم کمک‌پول درخواست کنم. چه باید بکنم؟", // nieuw, nalezen
  'be.c.ww.s': 'شما از کار خود قهر هستید و می‌خواهید امروز استعفا بدهید. کار هوشیارانه چیست؟',
  'be.c.ww.o1': 'اول مشوره بگیرید، پیش از اینکه استعفا بدهید.',
  'be.c.ww.o2': "امروز استعفا بدهید: به هر حال کمک‌پول می‌گیرید.", // nieuw, nalezen
  'be.c.ww.o3': 'بدون اینکه چیزی بگویید دیگر به کار نیایید.',
  'be.c.ww.w': "استعفا می‌تواند برای مدتی کمک‌پول شما را از بین ببرد. گپ زدن اول با سرپرست، اتحادیه یا justitiehuis می‌تواند کمک کند که راه بهتری پیدا کنید.", // nieuw, nalezen
  'be.c.jobends': "کار شما تمام می‌شود: دیگر چه چیزها تمام می‌شود؟",
  'be.c.jobends.b': end("وقتی کار شما ختم می‌شود، تصفیه‌حساب نهایی (eindafrekening) را چک کنید و C4 خود را بخواهید. کارمند دفتری (bediende) هستید؟ پس پول رخصتی خود را با آخرین معاش می‌گیرید. کارگر (arbeider) هستید؟ پس آن را سال بعد از صندوق رخصتی (vakantiekas) می‌گیرید. خانه یا موتر وان از طریق آژانس شاید همزمان ختم شود. قرارداد کرایهٔ شما مقررات خود را دارد: پیش از ترک خانه مشوره بگیرید. برای تداوی از طریق ziekenfonds بیمه هستید. با کمک‌پول بیکاری معمولاً بیمه می‌مانید. کوچ می‌کنید؟ در ظرف ۸ روز کاری به gemeente (شاروالی) خبر بدهید. به کشور خود برمی‌گردید؟ از ziekenfonds خود بپرسید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "تصفیه‌حساب آخر خود را چه وقت می‌گیرم؟",
  'be.c.jobends.s': "کار شما روز جمعه ختم می‌شود. آژانس اتاق شما را هم جور کرده است. چه می‌کنید؟", // nieuw, nalezen
  'be.c.jobends.o1': "بپرسید که در قرارداد کرایه چه نوشته، و مشوره بگیرید.", // nieuw, nalezen
  'be.c.jobends.o2': "روز جمعه از اتاق بروید، چون کار ختم می‌شود.", // nieuw, nalezen
  'be.c.jobends.o3': "بمانید، و با هیچ کس دربارهٔ آن گپ نزنید.", // nieuw, nalezen
  'be.c.jobends.w': "قرارداد کرایهٔ شما از قرارداد کار جداست. در آن نوشته که چه مدت می‌توانید بمانید. justitiehuis می‌تواند اولین مشوره را رایگان به شما بدهد.", // nieuw, nalezen
  'be.c.newjob': 'کار نو پالیدن',
  'be.c.newjob.b': end("پیش از رفتن، یک معرفی‌نامه (referentie) بخواهید. ورق‌های معاش (loonbrieven)، قرارداد و C4 خود را نگه دارید. CV خود را تازه کنید. در VDAB (vdab.be) و در دفترهای کاریابی موقت (interimkantoren) کار بپالید. هرگز برای گرفتن کار پول ندهید.", prsBase, 'abuse'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.newjob.p': 'نام شما را به حیث معرف داده می‌توانم؟',
  'be.c.newjob.s': 'کسی به شما کار پیشنهاد می‌کند، اما اول باید ۳۰۰ یورو «برای کار» بدهید. چه می‌کنید؟',
  'be.c.newjob.o1': "پول ندهید. یک دفتر کاریابی موقت واقعی بپالید.", // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.newjob.o2': 'پول بدهید، چون یک کار خوب ارزشش را دارد.',
  'be.c.newjob.o3': 'حالا نیمه‌اش را بدهید و باقی را بعداً.',
  'be.c.newjob.w': "پول خواستن برای کار یک نشانهٔ خطر است. دفتر کاریابی موقت حق ندارد برای پیدا کردن کار از شما پول بگیرد. در VDAB هم می‌توانید کار بپالید.", // nieuw, nalezen // nagelezen AI ronde 3
};

export const uk: Gloss = {
  'be.w.ww': "C4 (папір від роботодавця, коли твоя робота закінчується)", // nieuw, nalezen
  'be.w.uwv': "RVA (національна служба, яка вирішує щодо допомоги з безробіття)", // nieuw, nalezen
  'be.s.ww.1': "Я реєструюся у VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Я попрошу свій C4 і піду до профспілки.", // nieuw, nalezen
  'be.s.jobends.2': "Я питаю поради в justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Я питаю свій ziekenfonds, чи моє страхування триває.", // nieuw, nalezen
  'be.s.newjob.2': 'Я зберігаю свої розрахункові листи.',
  'be.c.ww': "Допомога з безробіття", // nieuw, nalezen
  'be.c.ww.b': end("Втратив / втратила роботу? Роботодавець дає тобі C4, найпізніше в останній робочий день. Одразу зареєструйся як шукач роботи у VDAB. Потім подай заяву на допомогу через профспілку (ABVV, ACV чи ACLVB) або через HVW, якщо ти не член профспілки. Заяву подають не в саму RVA: RVA вирішує. Спершу ти маєш пропрацювати достатньо довго. Допомога обмежена в часі: як довго, залежить від того, скільки ти працював / працювала. Ти звільнився / звільнилася сам / сама без поважної причини? Тоді зазвичай якийсь час не отримуєш допомоги.", ukBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Я хочу подати заяву на допомогу. Що мені робити?", // nieuw, nalezen
  'be.c.ww.s': 'Ти сердишся через роботу й хочеш сьогодні звільнитися. Що розумно?',
  'be.c.ww.o1': 'Спершу порадитися, перш ніж звільнятися.',
  'be.c.ww.o2': "Звільнитися сьогодні: допомогу однаково дадуть.", // nieuw, nalezen
  'be.c.ww.o3': 'Перестати ходити на роботу й нічого не казати.',
  'be.c.ww.w': "Звільнення може коштувати тобі допомоги на якийсь час. Розмова спершу з керівником, профспілкою чи justitiehuis може допомогти знайти кращий шлях.", // nieuw, nalezen
  'be.c.jobends': "Робота закінчується: що ще припиняється?",
  'be.c.jobends.b': end("Коли твоя робота закінчується, перевір остаточний розрахунок (eindafrekening) і попроси свій C4. Ти службовець (bediende)? Тоді отримуєш відпускні разом з останньою зарплатою. Робітник (arbeider)? Тоді отримуєш їх наступного року з відпускної каси (vakantiekas). Житло чи бус через агентство можуть закінчитися водночас. Твій договір оренди має свої правила: порадься, перш ніж виїжджати з житла. На лікування ти застрахований / застрахована через свій ziekenfonds. З допомогою з безробіття ти зазвичай залишаєшся застрахованим / застрахованою. Переїжджаєш? Повідом gemeente протягом 8 робочих днів. Повертаєшся до своєї країни? Запитай свій ziekenfonds.", ukBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Коли я отримаю остаточний розрахунок?",
  'be.c.jobends.s': "Твоя робота закінчується в пʼятницю. Агентство також дає тобі кімнату. Що ти зробиш?", // nieuw, nalezen
  'be.c.jobends.o1': "Запитаєш, що написано в договорі оренди, і порадишся.", // nieuw, nalezen
  'be.c.jobends.o2': "Виїдеш із кімнати в пʼятницю, бо робота закінчується.", // nieuw, nalezen
  'be.c.jobends.o3': "Залишишся й ні з ким про це не говоритимеш.", // nieuw, nalezen
  'be.c.jobends.w': "Твій договір оренди окремий від трудового договору. У ньому написано, як довго ти можеш жити там. Justitiehuis може дати тобі першу безкоштовну пораду.", // nieuw, nalezen
  'be.c.newjob': 'Пошук нової роботи',
  'be.c.newjob.b': end("Перш ніж піти, попроси рекомендацію (referentie). Зберігай свої розрахункові листи (loonbrieven), контракт і C4. Онови резюме. Шукай роботу у VDAB (vdab.be) і в агентствах тимчасової роботи (interimkantoren). Ніколи не плати гроші, щоб отримати роботу.", ukBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Можна вказати вас як рекомендацію?',
  'be.c.newjob.s': 'Тобі пропонують роботу, але спершу треба заплатити 300 євро «за роботу». Що ти зробиш?',
  'be.c.newjob.o1': "Не платитимеш. Шукатимеш справжнє агентство.", // nieuw, nalezen
  'be.c.newjob.o2': 'Заплатиш, бо добра робота того варта.',
  'be.c.newjob.o3': 'Заплатиш половину зараз, а решту потім.',
  'be.c.newjob.w': "Вимагати гроші за роботу — це тривожний знак. Агентство тимчасової роботи не може брати з тебе гроші за пошук роботи. Також можна шукати роботу у VDAB.", // nieuw, nalezen
};

export const tr: Gloss = {
  'be.w.ww': "C4 (işin bittiğinde işverenden aldığın kâğıt)", // nieuw, nalezen
  'be.w.uwv': "RVA (işsizlik ödeneğine karar veren ulusal kurum)", // nieuw, nalezen
  'be.s.ww.1': "VDAB’ye kaydoluyorum.", // nieuw, nalezen
  'be.c.ww.a': "C4’ümü isteyip sendikaya gidiyorum.", // nieuw, nalezen
  'be.s.jobends.2': "Justitiehuis’ten tavsiye istiyorum.", // nieuw, nalezen
  'be.s.jobends.3': "Ziekenfonds’uma sigortamın devam edip etmediğini soruyorum.", // nieuw, nalezen
  'be.s.newjob.2': 'Maaş bordrolarımı saklıyorum.',
  'be.c.ww': "İşsizlik ödeneği", // nieuw, nalezen
  'be.c.ww.b': end("İşini mi kaybettin? İşverenin sana en geç son iş gününde bir C4 verir. Hemen VDAB’ye iş arayan olarak kaydol. Sonra ödeneğe bir sendika (ABVV, ACV ya da ACLVB) üzerinden, üye değilsen HVW üzerinden başvur. Başvuruyu doğrudan RVA’ya yapmazsın: kararı RVA verir. Önce yeterince uzun çalışmış olman gerekir. Ödenek süreyle sınırlıdır: ne kadar süreceği ne kadar çalıştığına bağlıdır. İşten iyi bir neden olmadan kendin mi ayrıldın? O zaman genellikle bir süre ödenek alamazsın.", trBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Ödenek için başvurmak istiyorum. Ne yapmalıyım?", // nieuw, nalezen
  'be.c.ww.s': 'İşine kızgınsın ve bugün istifa etmek istiyorsun. Akıllıca olan ne?',
  'be.c.ww.o1': 'Ayrılmadan önce tavsiye alırsın.',
  'be.c.ww.o2': "Bugün istifa edersin: nasılsa ödenek alırsın.", // nieuw, nalezen
  'be.c.ww.o3': 'Hiçbir şey söylemeden işe gitmeyi bırakırsın.',
  'be.c.ww.w': "İstifa etmek bir süre ödeneğine mal olabilir. Önce amirinle, sendikayla ya da justitiehuis’le konuşmak daha iyi bir yol bulmana yardım edebilir.", // nieuw, nalezen
  'be.c.jobends': "İşin bitiyor: başka ne bitiyor?",
  'be.c.jobends.b': end("İşin bittiğinde son hesaplamanı (eindafrekening) kontrol et ve C4’ünü iste. Büro çalışanı (bediende) mısın? O zaman tatil paranı son maaşınla alırsın. İşçi (arbeider) misin? O zaman onu ertesi yıl tatil kasasından (vakantiekas) alırsın. Ajans üzerinden konut ya da minibüs aynı anda bitebilir. Kira sözleşmenin kendi kuralları var: evden çıkmadan önce tavsiye al. Sağlık için ziekenfonds’un üzerinden sigortalısın. İşsizlik ödeneğiyle genellikle sigortalı kalırsın. Taşınıyor musun? 8 iş günü içinde gemeente’ye (belediye) bildir. Kendi ülkene mi dönüyorsun? Ziekenfonds’una sor.", trBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Son hesabımı ne zaman alırım?",
  'be.c.jobends.s': "İşin cuma günü bitiyor. Ajans odanı da ayarlıyor. Ne yaparsın?", // nieuw, nalezen
  'be.c.jobends.o1': "Kira sözleşmende ne yazdığını sorar, tavsiye alırsın.", // nieuw, nalezen
  'be.c.jobends.o2': "İş bittiği için cuma günü odadan çıkarsın.", // nieuw, nalezen
  'be.c.jobends.o3': "Kalırsın ve bunu kimseyle konuşmazsın.", // nieuw, nalezen
  'be.c.jobends.w': "Kira sözleşmen iş sözleşmenden ayrıdır. Ne kadar kalabileceğin onda yazar. Justitiehuis sana ücretsiz ilk tavsiyeyi verebilir.", // nieuw, nalezen
  'be.c.newjob': 'Yeni iş aramak',
  'be.c.newjob.b': end("Ayrılmadan önce bir referans (referentie) iste. Maaş bordrolarını (loonbrieven), sözleşmeni ve C4’ünü sakla. CV’ni güncelle. VDAB’de (vdab.be) ve geçici iş ajanslarında (interimkantoren) iş ara. İş bulmak için asla para ödeme.", trBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Adınızı referans olarak verebilir miyim?',
  'be.c.newjob.s': 'Biri sana iş teklif ediyor, ama önce “iş için” 300 euro ödemen gerekiyor. Ne yaparsın?',
  'be.c.newjob.o1': "Ödemezsin. Gerçek bir ajans ararsın.", // nieuw, nalezen
  'be.c.newjob.o2': 'İyi bir iş buna değer diye ödersin.',
  'be.c.newjob.o3': 'Yarısını şimdi, kalanını sonra ödersin.',
  'be.c.newjob.w': "İş için para istemek bir uyarı işaretidir. Geçici iş ajansı sana iş bulduğu için para alamaz. VDAB’de de iş arayabilirsin.", // nieuw, nalezen
};

export const pl: Gloss = {
  'be.w.ww': "C4 (papier od pracodawcy, gdy kończy się twoja praca)", // nieuw, nalezen
  'be.w.uwv': "RVA (krajowy urząd, który decyduje o zasiłku dla bezrobotnych)", // nieuw, nalezen
  'be.s.ww.1': "Rejestruję się w VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Proszę o mój C4 i idę do związku zawodowego.", // nieuw, nalezen
  'be.s.jobends.2': "Pytam o radę w justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Pytam mój ziekenfonds, czy moje ubezpieczenie trwa dalej.", // nieuw, nalezen
  'be.s.newjob.2': 'Zachowuję moje paski wypłaty.',
  'be.c.ww': "Zasiłek dla bezrobotnych", // nieuw, nalezen
  'be.c.ww.b': end("Straciłeś / straciłaś pracę? Pracodawca daje ci C4, najpóźniej w ostatnim dniu pracy. Od razu zarejestruj się w VDAB jako osoba szukająca pracy. Potem złóż wniosek o zasiłek przez związek zawodowy (ABVV, ACV albo ACLVB) albo przez HVW, jeśli nie jesteś członkiem związku. Nie składasz go w samym RVA: RVA decyduje. Najpierw musisz przepracować wystarczająco długo. Zasiłek jest ograniczony w czasie: jak długo, zależy od tego, jak długo pracowałeś / pracowałaś. Sam / sama się zwolniłeś / zwolniłaś bez ważnego powodu? Wtedy zwykle przez jakiś czas nie dostajesz zasiłku.", plBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Chcę złożyć wniosek o zasiłek. Co mam zrobić?", // nieuw, nalezen
  'be.c.ww.s': { m: 'Jesteś zły na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', f: 'Jesteś zła na swoją pracę i chcesz się dziś zwolnić. Co jest mądre?', x: 'Twoja praca cię złości i chcesz się dziś zwolnić. Co jest mądre?' },
  'be.c.ww.o1': 'Najpierw prosisz o radę, zanim odejdziesz z pracy.',
  'be.c.ww.o2': "Zwalniasz się dzisiaj: zasiłek i tak dostaniesz.", // nieuw, nalezen
  'be.c.ww.o3': 'Przestajesz przychodzić do pracy i nic nie mówisz.',
  'be.c.ww.w': "Zwolnienie się może cię kosztować zasiłek na jakiś czas. Rozmowa najpierw z przełożonym, związkiem zawodowym albo justitiehuis może pomóc znaleźć lepsze wyjście.", // nieuw, nalezen
  'be.c.jobends': "Kończy się praca: co jeszcze się kończy?",
  'be.c.jobends.b': end("Kiedy twoja praca się kończy, sprawdź końcowe rozliczenie (eindafrekening) i poproś o C4. Jesteś pracownikiem umysłowym (bediende)? Wtedy dostajesz dodatek urlopowy z ostatnią pensją. Pracownikiem fizycznym (arbeider)? Wtedy dostajesz go w następnym roku z kasy urlopowej (vakantiekas). Mieszkanie albo bus przez agencję mogą skończyć się w tym samym czasie. Twoja umowa najmu ma własne zasady: poproś o radę, zanim wyprowadzisz się z mieszkania. Na leczenie jesteś ubezpieczony / ubezpieczona przez swój ziekenfonds. Z zasiłkiem dla bezrobotnych zwykle zostajesz ubezpieczony / ubezpieczona. Przeprowadzasz się? Powiedz gemeente w ciągu 8 dni roboczych. Wracasz do swojego kraju? Zapytaj swój ziekenfonds.", plBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Kiedy dostanę rozliczenie końcowe?",
  'be.c.jobends.s': "Twoja praca kończy się w piątek. Agencja załatwia ci też pokój. Co robisz?", // nieuw, nalezen
  'be.c.jobends.o1': "Pytasz, co jest w umowie najmu, i prosisz o radę.", // nieuw, nalezen
  'be.c.jobends.o2': "Wyprowadzasz się z pokoju w piątek, bo praca się kończy.", // nieuw, nalezen
  'be.c.jobends.o3': "Zostajesz i z nikim o tym nie rozmawiasz.", // nieuw, nalezen
  'be.c.jobends.w': "Twoja umowa najmu jest oddzielna od umowy o pracę. Jest w niej, jak długo możesz zostać. Justitiehuis może dać ci pierwszą bezpłatną poradę.", // nieuw, nalezen
  'be.c.newjob': 'Szukanie nowej pracy',
  'be.c.newjob.b': end("Zanim odejdziesz, poproś o referencje (referentie). Zachowaj swoje odcinki wypłaty (loonbrieven), umowę i C4. Zaktualizuj CV. Szukaj pracy w VDAB (vdab.be) i w agencjach pracy tymczasowej (interimkantoren). Nigdy nie płać, żeby dostać pracę.", plBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Czy mogę podać pana/panią jako osobę do referencji?',
  'be.c.newjob.s': 'Ktoś proponuje ci pracę, ale najpierw musisz zapłacić 300 euro „za pracę”. Co robisz?',
  'be.c.newjob.o1': "Nie płacisz. Szukasz prawdziwej agencji.", // nieuw, nalezen
  'be.c.newjob.o2': 'Płacisz, bo dobra praca jest tego warta.',
  'be.c.newjob.o3': 'Płacisz połowę teraz, a resztę później.',
  'be.c.newjob.w': "Żądanie pieniędzy za pracę to sygnał ostrzegawczy. Agencja pracy tymczasowej nie może brać od ciebie pieniędzy za znalezienie pracy. Pracy możesz też szukać w VDAB.", // nieuw, nalezen
};

export const ro: Gloss = {
  'be.w.ww': "C4 (hârtia de la angajator când munca ta se termină)", // nieuw, nalezen
  'be.w.uwv': "RVA (oficiul național care decide despre ajutorul de șomaj)", // nieuw, nalezen
  'be.s.ww.1': "Mă înscriu la VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Îmi cer C4-ul și merg la sindicat.", // nieuw, nalezen
  'be.s.jobends.2': "Cer sfat la justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Întreb la ziekenfonds dacă asigurarea mea continuă.", // nieuw, nalezen
  'be.s.newjob.2': 'Îmi păstrez fluturașii de salariu.',
  'be.c.ww': "Ajutorul de șomaj", // nieuw, nalezen
  'be.c.ww.b': end("Ți-ai pierdut locul de muncă? Angajatorul îți dă un C4, cel târziu în ultima ta zi de muncă. Înscrie-te imediat ca persoană care caută un loc de muncă la VDAB. Apoi cere ajutorul de șomaj printr-un sindicat (ABVV, ACV sau ACLVB) sau prin HVW, dacă nu ești membru. Nu îl ceri la RVA direct: RVA decide. Trebuie să fi lucrat mai întâi destul timp. Ajutorul este limitat în timp: cât durează depinde de cât ai lucrat. Ți-ai dat singur sau singură demisia, fără un motiv bun? Atunci de obicei nu primești ajutor o vreme.", roBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Vreau să cer un ajutor. Ce trebuie să fac?", // nieuw, nalezen
  'be.c.ww.s': { m: 'Ești supărat pe munca ta și vrei să demisionezi azi. Ce e înțelept?', f: 'Ești supărată pe munca ta și vrei să demisionezi azi. Ce e înțelept?', x: 'Munca ta te enervează și vrei să demisionezi azi. Ce e înțelept?' },
  'be.c.ww.o1': 'Ceri întâi un sfat, înainte să demisionezi.',
  'be.c.ww.o2': "Demisionezi azi: oricum primești ajutor.", // nieuw, nalezen
  'be.c.ww.o3': 'Nu mai vii la muncă și nu spui nimic.',
  'be.c.ww.w': "Demisia te poate costa ajutorul pentru o vreme. Dacă vorbești întâi cu șeful, cu sindicatul sau cu justitiehuis, poți găsi o cale mai bună.", // nieuw, nalezen
  'be.c.jobends': "Se termină munca: ce se mai termină?",
  'be.c.jobends.b': end("Când munca ta se termină, verifică lichidarea finală (eindafrekening) și cere-ți C4-ul. Ești funcționar (bediende)? Atunci primești banii de concediu odată cu ultimul salariu. Muncitor (arbeider)? Atunci îi primești anul următor, de la casa de concedii (vakantiekas). Locuința sau un microbuz prin agenție se pot termina în același timp. Contractul tău de închiriere are regulile lui: cere sfat înainte să pleci din casă. Pentru îngrijiri medicale ești asigurat prin ziekenfonds. Cu ajutor de șomaj, de obicei rămâi asigurat. Te muți? Anunță gemeente (primăria) în 8 zile lucrătoare. Te întorci în țara ta? Întreabă la ziekenfonds.", roBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Când primesc lichidarea finală?",
  'be.c.jobends.s': "Munca ta se termină vineri. Agenția îți dă și camera. Ce faci?", // nieuw, nalezen
  'be.c.jobends.o1': "Întrebi ce scrie în contractul de închiriere și ceri sfat.", // nieuw, nalezen
  'be.c.jobends.o2': "Pleci din cameră vineri, pentru că se termină munca.", // nieuw, nalezen
  'be.c.jobends.o3': "Rămâi și nu vorbești cu nimeni despre asta.", // nieuw, nalezen
  'be.c.jobends.w': "Contractul de închiriere e separat de contractul de muncă. În el scrie cât timp poți rămâne. Justitiehuis îți poate da un prim sfat gratuit.", // nieuw, nalezen
  'be.c.newjob': 'Cum cauți o muncă nouă',
  'be.c.newjob.b': end("Înainte să pleci, cere o recomandare (referentie). Păstrează-ți fluturașii de salariu (loonbrieven), contractul și C4-ul. Actualizează-ți CV-ul. Caută de lucru la VDAB (vdab.be) și la agențiile de muncă temporară (interimkantoren). Nu plăti niciodată ca să obții un loc de muncă.", roBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Pot să dau numele dumneavoastră ca referință?',
  'be.c.newjob.s': 'Cineva îți oferă un loc de muncă, dar întâi trebuie să plătești 300 de euro „pentru post”. Ce faci?',
  'be.c.newjob.o1': "Nu plătești. Cauți o agenție adevărată.", // nieuw, nalezen
  'be.c.newjob.o2': 'Plătești, pentru că un loc de muncă bun merită.',
  'be.c.newjob.o3': 'Plătești jumătate acum și restul mai târziu.',
  'be.c.newjob.w': "Să ți se ceară bani pentru un loc de muncă e un semnal de alarmă. O agenție de muncă temporară nu are voie să îți ceară bani ca să îți găsească de lucru. Poți căuta de lucru și la VDAB.", // nieuw, nalezen
};

export const bg: Gloss = {
  'be.w.ww': "C4 (документът от работодателя, когато работата ти свърши)", // nieuw, nalezen
  'be.w.uwv': "RVA (националната служба, която решава за обезщетението за безработица)", // nieuw, nalezen
  'be.s.ww.1': "Записвам се във VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Ще поискам моя C4 и ще отида в синдиката.", // nieuw, nalezen
  'be.s.jobends.2': "Питам за съвет в justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Питам моя ziekenfonds дали осигуровката ми продължава.", // nieuw, nalezen
  'be.s.newjob.2': 'Пазя фишовете си за заплата.',
  'be.c.ww': "Обезщетение за безработица", // nieuw, nalezen
  'be.c.ww.b': end("Загуби работата си? Работодателят ти дава C4, най-късно в последния ти работен ден. Веднага се запиши като търсещ работа във VDAB. След това подай молба за обезщетение чрез синдикат (ABVV, ACV или ACLVB) или чрез HVW, ако не си член. Не подаваш молбата в самата RVA: RVA решава. Първо трябва да си работил / работила достатъчно дълго. Обезщетението е ограничено във времето: колко дълго зависи от това колко дълго си работил / работила. Напусна сам / сама, без основателна причина? Тогава обикновено известно време не получаваш обезщетение.", bgBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Искам да подам молба за обезщетение. Какво трябва да направя?", // nieuw, nalezen
  'be.c.ww.s': { m: 'Ядосан си на работата си и искаш да напуснеш днес. Кое е разумно?', f: 'Ядосана си на работата си и искаш да напуснеш днес. Кое е разумно?', x: 'Работата те ядосва и искаш да напуснеш днес. Кое е разумно?' },
  'be.c.ww.o1': 'Първо да потърсиш съвет, преди да напуснеш.',
  'be.c.ww.o2': "Да напуснеш днес: и без това ще получиш обезщетение.", // nieuw, nalezen
  'be.c.ww.o3': 'Да спреш да ходиш на работа, без да кажеш нищо.',
  'be.c.ww.w': "Напускането може да ти струва обезщетението за известно време. Ако първо говориш с началника, синдиката или justitiehuis, може да намериш по-добър път.", // nieuw, nalezen
  'be.c.jobends': "Работата свършва: какво друго спира?",
  'be.c.jobends.b': end("Когато работата ти свърши, провери окончателното плащане (eindafrekening) и поискай своя C4. Служител ли си (bediende)? Тогава получаваш парите за отпуск с последната си заплата. Работник (arbeider)? Тогава ги получаваш следващата година от отпускарската каса (vakantiekas). Жилището или бусът чрез агенцията може да спрат по същото време. Договорът ти за наем има свои правила: потърси съвет, преди да напуснеш жилището. За лечение си осигурен / осигурена чрез своя ziekenfonds. С обезщетение за безработица обикновено оставаш осигурен / осигурена. Местиш се? Кажи на gemeente до 8 работни дни. Връщаш се в своята страна? Попитай своя ziekenfonds.", bgBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Кога ще получа окончателното плащане?",
  'be.c.jobends.s': "Работата ти свършва в петък. Агенцията ти урежда и стаята. Какво правиш?", // nieuw, nalezen
  'be.c.jobends.o1': "Питаш какво пише в договора за наем и търсиш съвет.", // nieuw, nalezen
  'be.c.jobends.o2': "Напускаш стаята в петък, защото работата свършва.", // nieuw, nalezen
  'be.c.jobends.o3': "Оставаш и не говориш за това с никого.", // nieuw, nalezen
  'be.c.jobends.w': "Договорът ти за наем е отделен от трудовия договор. В него пише колко дълго можеш да останеш. Justitiehuis може да ти даде първи безплатен съвет.", // nieuw, nalezen
  'be.c.newjob': 'Търсене на нова работа',
  'be.c.newjob.b': end("Преди да си тръгнеш, поискай препоръка (referentie). Пази фишовете си за заплата (loonbrieven), договора и C4. Обнови CV-то си. Търси работа във VDAB (vdab.be) и в агенции за временна работа (interimkantoren). Никога не плащай, за да получиш работа.", bgBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Може ли да ви посоча като препоръка?',
  'be.c.newjob.s': 'Някой ти предлага работа, но първо трябва да платиш 300 евро „за работата“. Какво правиш?',
  'be.c.newjob.o1': "Не плащаш. Търсиш истинска агенция.", // nieuw, nalezen
  'be.c.newjob.o2': 'Плащаш, защото добрата работа си струва.',
  'be.c.newjob.o3': 'Плащаш половината сега, а останалото после.',
  'be.c.newjob.w': "Да искат пари за работа е предупредителен знак. Агенция за временна работа няма право да ти взима пари, за да ти намери работа. Можеш да търсиш работа и във VDAB.", // nieuw, nalezen
};

export const es: Gloss = {
  'be.w.ww': "el C4 (el papel de tu empresa cuando termina tu trabajo)", // nieuw, nalezen
  'be.w.uwv': "la RVA (la oficina nacional que decide sobre la prestación por desempleo)", // nieuw, nalezen
  'be.s.ww.1': "Me inscribo en el VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Pido mi C4 y voy al sindicato.", // nieuw, nalezen
  'be.s.jobends.2': "Pido consejo en el justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Pregunto a mi mutua si mi seguro sigue.", // nieuw, nalezen
  'be.s.newjob.2': 'Guardo mis nóminas.',
  'be.c.ww': "Prestación por desempleo", // nieuw, nalezen
  'be.c.ww.b': end("¿Has perdido tu trabajo? Tu empresa te da un C4, como muy tarde tu último día de trabajo. Inscríbete enseguida como demandante de empleo en el VDAB. Después pide tu prestación a través de un sindicato (ABVV, ACV o ACLVB), o de la HVW si no eres afiliado o afiliada. No la pides en la RVA misma: la RVA decide. Primero tienes que haber trabajado bastante tiempo. La prestación está limitada en el tiempo: cuánto dura depende de cuánto tiempo trabajaste. ¿Te fuiste tú, sin una buena razón? Entonces normalmente no tienes prestación durante un tiempo.", esBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Quiero pedir una prestación. ¿Qué tengo que hacer?", // nieuw, nalezen
  'be.c.ww.s': 'Tu trabajo te enfada y quieres dejarlo hoy. ¿Qué es lo más sensato?',
  'be.c.ww.o1': 'Primero pides consejo, antes de dejar el trabajo.',
  'be.c.ww.o2': "Te vas hoy: igual vas a tener una prestación.", // nieuw, nalezen
  'be.c.ww.o3': 'Dejas de ir al trabajo sin decir nada.',
  'be.c.ww.w': "Irte puede costarte tu prestación durante un tiempo. Hablar primero con tu encargado, el sindicato o el justitiehuis puede ayudarte a encontrar una salida mejor.", // nieuw, nalezen
  'be.c.jobends': "Termina tu trabajo: ¿qué más se acaba?",
  'be.c.jobends.b': end("Cuando termina tu trabajo, revisa tu liquidación final (eindafrekening) y pide tu C4. ¿Eres empleado o empleada (bediende)? Entonces recibes tu paga de vacaciones con tu último sueldo. ¿Obrero u obrera (arbeider)? Entonces la recibes el año siguiente, de la caja de vacaciones (vakantiekas). La vivienda o una furgoneta de la agencia pueden terminar al mismo tiempo. Tu contrato de alquiler tiene sus propias normas: pide consejo antes de dejar la casa. Para tu salud estás asegurado o asegurada por tu mutua (ziekenfonds). Con la prestación por desempleo, normalmente sigues asegurado o asegurada. ¿Te mudas? Avisa a la gemeente (ayuntamiento) en 8 días laborables. ¿Vuelves a tu país? Pregunta a tu mutua.", esBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "¿Cuándo recibo mi finiquito?",
  'be.c.jobends.s': "Tu trabajo termina el viernes. La agencia también te consigue la habitación. ¿Qué haces?", // nieuw, nalezen
  'be.c.jobends.o1': "Preguntas qué dice tu contrato de alquiler, y pides consejo.", // nieuw, nalezen
  'be.c.jobends.o2': "Dejas la habitación el viernes, porque el trabajo termina.", // nieuw, nalezen
  'be.c.jobends.o3': "Te quedas, y no hablas de ello con nadie.", // nieuw, nalezen
  'be.c.jobends.w': "Tu contrato de alquiler es aparte de tu contrato de trabajo. Dice cuánto tiempo puedes quedarte. El justitiehuis puede darte un primer consejo gratis.", // nieuw, nalezen
  'be.c.newjob': 'Buscar un trabajo nuevo',
  'be.c.newjob.b': end("Antes de irte, pide una referencia (referentie). Guarda tus nóminas (loonbrieven), tu contrato y tu C4. Actualiza tu CV. Busca trabajo en el VDAB (vdab.be) y en agencias de trabajo temporal (interimkantoren). Nunca pagues para conseguir un trabajo.", esBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': '¿Puedo darle su nombre como referencia?',
  'be.c.newjob.s': 'Alguien te ofrece un trabajo, pero primero tienes que pagar 300 euros “por el trabajo”. ¿Qué haces?',
  'be.c.newjob.o1': "No pagas. Buscas una agencia de verdad.", // nieuw, nalezen
  'be.c.newjob.o2': 'Pagas, porque un buen trabajo lo vale.',
  'be.c.newjob.o3': 'Pagas la mitad ahora y el resto después.',
  'be.c.newjob.w': "Pedir dinero por un trabajo es una señal de alarma. Una agencia de trabajo temporal no puede cobrarte por encontrarte trabajo. También puedes buscar trabajo en el VDAB.", // nieuw, nalezen
};

export const pt: Gloss = {
  'be.w.ww': "o C4 (o papel do teu empregador quando o teu trabalho acaba)", // nieuw, nalezen
  'be.w.uwv': "a RVA (o serviço nacional que decide sobre o subsídio de desemprego)", // nieuw, nalezen
  'be.s.ww.1': "Inscrevo-me no VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Peço o meu C4 e vou ao sindicato.", // nieuw, nalezen
  'be.s.jobends.2': "Peço conselho no justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Pergunto ao meu ziekenfonds se o meu seguro continua.", // nieuw, nalezen
  'be.s.newjob.2': 'Guardo os meus recibos de vencimento.',
  'be.c.ww': "Subsídio de desemprego", // nieuw, nalezen
  'be.c.ww.b': end("Perdeste o teu trabalho? O teu empregador dá-te um C4, o mais tardar no teu último dia de trabalho. Inscreve-te logo como candidato a emprego no VDAB. Depois pede o teu subsídio através de um sindicato (ABVV, ACV ou ACLVB), ou da HVW se não fores sócio. Não pedes na própria RVA: é a RVA que decide. Primeiro tens de ter trabalhado tempo suficiente. O subsídio é limitado no tempo: quanto tempo dura depende de quanto tempo trabalhaste. Despediste-te tu, sem uma boa razão? Então normalmente ficas algum tempo sem subsídio.", ptBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Quero pedir um subsídio. O que tenho de fazer?", // nieuw, nalezen
  'be.c.ww.s': 'O teu trabalho irrita-te e queres despedir-te hoje. O que é sensato?',
  'be.c.ww.o1': 'Pedes conselho primeiro, antes de te despedires.',
  'be.c.ww.o2': "Despedes-te hoje: vais receber um subsídio na mesma.", // nieuw, nalezen
  'be.c.ww.o3': 'Deixas de ir trabalhar sem dizer nada.',
  'be.c.ww.w': "Despedires-te pode custar-te o subsídio durante algum tempo. Falar primeiro com o teu chefe, o sindicato ou o justitiehuis pode ajudar-te a encontrar uma solução melhor.", // nieuw, nalezen
  'be.c.jobends': "O teu trabalho acaba: o que mais acaba?",
  'be.c.jobends.b': end("Quando o teu trabalho acaba, confere o teu acerto final (eindafrekening) e pede o teu C4. És empregado de escritório (bediende)? Então recebes o subsídio de férias com o teu último salário. Operário (arbeider)? Então recebes no ano seguinte, da caixa de férias (vakantiekas). A casa ou uma carrinha da agência podem acabar ao mesmo tempo. O teu contrato de arrendamento tem regras próprias: pede conselho antes de saíres da casa. Para a saúde, estás seguro pelo teu ziekenfonds. Com subsídio de desemprego, normalmente continuas seguro. Mudas de casa? Avisa a gemeente (câmara) em 8 dias úteis. Voltas para o teu país? Pergunta ao teu ziekenfonds.", ptBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Quando recebo o acerto final de contas?",
  'be.c.jobends.s': "O teu trabalho acaba na sexta-feira. A agência também te arranja o quarto. O que fazes?", // nieuw, nalezen
  'be.c.jobends.o1': "Perguntas o que diz o teu contrato de arrendamento, e pedes conselho.", // nieuw, nalezen
  'be.c.jobends.o2': "Sais do quarto na sexta-feira, porque o trabalho acaba.", // nieuw, nalezen
  'be.c.jobends.o3': "Ficas, e não falas disso com ninguém.", // nieuw, nalezen
  'be.c.jobends.w': "O teu contrato de arrendamento é separado do teu contrato de trabalho. Diz quanto tempo podes ficar. O justitiehuis pode dar-te um primeiro conselho grátis.", // nieuw, nalezen
  'be.c.newjob': 'Procurar um novo trabalho',
  'be.c.newjob.b': end("Antes de saíres, pede uma referência (referentie). Guarda os teus recibos de vencimento (loonbrieven), o teu contrato e o teu C4. Atualiza o teu CV. Procura trabalho no VDAB (vdab.be) e em agências de trabalho temporário (interimkantoren). Nunca pagues para conseguir um trabalho.", ptBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Posso dar o seu nome como referência?',
  'be.c.newjob.s': 'Alguém te oferece um emprego, mas primeiro tens de pagar 300 euros "pelo emprego". O que fazes?',
  'be.c.newjob.o1': "Não pagas. Procuras uma agência a sério.", // nieuw, nalezen
  'be.c.newjob.o2': 'Pagas, porque um bom emprego vale a pena.',
  'be.c.newjob.o3': 'Pagas metade agora e o resto mais tarde.',
  'be.c.newjob.w': "Pedir dinheiro por um trabalho é um sinal de alerta. Uma agência de trabalho temporário não te pode cobrar por te arranjar trabalho. Também podes procurar trabalho no VDAB.", // nieuw, nalezen
};

export const fr: Gloss = {
  'be.w.ww': "le C4 (le papier de ton employeur quand ton travail s’arrête)", // nieuw, nalezen
  'be.w.uwv': "la RVA (ONEM : l’office national qui décide des allocations de chômage)", // nieuw, nalezen
  'be.s.ww.1': "Je m’inscris au VDAB.", // nieuw, nalezen
  'be.c.ww.a': "Je demande mon C4 et je vais au syndicat.", // nieuw, nalezen
  'be.s.jobends.2': "Je demande conseil au justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Je demande à ma mutualité si mon assurance continue.", // nieuw, nalezen
  'be.s.newjob.2': 'Je garde mes fiches de paie.',
  'be.c.ww': "Allocations de chômage", // nieuw, nalezen
  'be.c.ww.b': end("Tu as perdu ton travail ? Ton employeur te donne un C4, au plus tard ton dernier jour de travail. Inscris-toi tout de suite comme demandeur d’emploi au VDAB. Ensuite, demande tes allocations par un syndicat (ABVV, ACV ou ACLVB), ou par la HVW (CAPAC) si tu n’es pas membre. Tu ne fais pas la demande à la RVA elle-même : c’est la RVA qui décide. Tu dois d’abord avoir travaillé assez longtemps. Les allocations sont limitées dans le temps : la durée dépend de combien de temps tu as travaillé. Tu as démissionné toi-même, sans bonne raison ? Alors, en général, tu n’as pas d’allocations pendant un temps.", frBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Je veux demander une allocation. Qu’est-ce que je dois faire ?", // nieuw, nalezen
  'be.c.ww.s': 'Ton travail t’énerve et tu veux démissionner aujourd’hui. Qu’est-ce qui est sage ?',
  'be.c.ww.o1': 'Demande d’abord conseil, avant de démissionner.',
  'be.c.ww.o2': "Démissionne aujourd’hui : tu auras quand même des allocations.", // nieuw, nalezen
  'be.c.ww.o3': 'Ne viens plus au travail sans rien dire.',
  'be.c.ww.w': "Démissionner peut te coûter tes allocations pendant un temps. Parler d’abord avec ton responsable, le syndicat ou le justitiehuis peut t’aider à trouver une meilleure solution.", // nieuw, nalezen
  'be.c.jobends': "Ton travail s’arrête : qu’est-ce qui s’arrête aussi ?",
  'be.c.jobends.b': end("Quand ton travail s’arrête, vérifie ton décompte final (eindafrekening), et demande ton C4. Tu es employé ou employée (bediende) ? Alors tu reçois ton pécule de vacances avec ton dernier salaire. Ouvrier ou ouvrière (arbeider) ? Alors tu le reçois l’année suivante, de la caisse de vacances (vakantiekas). Le logement ou une camionnette par l’agence peuvent s’arrêter en même temps. Ton contrat de location a ses propres règles : demande conseil avant de quitter le logement. Pour tes soins, tu es assuré ou assurée par ta mutualité (ziekenfonds). Avec des allocations de chômage, tu restes en général assuré ou assurée. Tu déménages ? Préviens la gemeente (commune) dans les 8 jours ouvrables. Tu retournes dans ton pays ? Demande à ta mutualité.", frBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Quand est-ce que je reçois mon solde de tout compte ?",
  'be.c.jobends.s': "Ton travail s’arrête vendredi. L’agence s’occupe aussi de ta chambre. Que fais-tu ?", // nieuw, nalezen
  'be.c.jobends.o1': "Demande ce que dit ton contrat de location, et fais-toi conseiller.", // nieuw, nalezen
  'be.c.jobends.o2': "Quitte la chambre vendredi, parce que le travail s’arrête.", // nieuw, nalezen
  'be.c.jobends.o3': "Reste, et n’en parle à personne.", // nieuw, nalezen
  'be.c.jobends.w': "Ton contrat de location est séparé de ton contrat de travail. Il dit combien de temps tu peux rester. Le justitiehuis peut te donner un premier conseil gratuit.", // nieuw, nalezen
  'be.c.newjob': 'Chercher un nouveau travail',
  'be.c.newjob.b': end("Avant de partir, demande une référence (referentie). Garde tes fiches de paie (loonbrieven), ton contrat et ton C4. Mets ton CV à jour. Cherche du travail au VDAB (vdab.be) et dans les agences d’intérim (interimkantoren). Ne paie jamais pour obtenir un travail.", frBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Je peux donner votre nom comme référence ?',
  'be.c.newjob.s': 'Quelqu’un te propose un travail, mais d’abord tu dois payer 300 euros “pour le travail”. Que fais-tu ?',
  'be.c.newjob.o1': "Ne paie pas. Cherche une vraie agence d’intérim.", // nieuw, nalezen
  'be.c.newjob.o2': 'Paie, parce qu’un bon travail le vaut bien.',
  'be.c.newjob.o3': 'Paie la moitié maintenant et le reste plus tard.',
  'be.c.newjob.w': "Demander de l’argent pour un travail est un signal d’alerte. Une agence d’intérim ne peut pas te faire payer pour te trouver du travail. Tu peux aussi chercher du travail au VDAB.", // nieuw, nalezen
};

export const de: Gloss = {
  'be.w.ww': "das C4 (das Papier von deinem Arbeitgeber, wenn deine Arbeit endet)", // nieuw, nalezen
  'be.w.uwv': "die RVA (das nationale Amt, das über das Arbeitslosengeld entscheidet)", // nieuw, nalezen
  'be.s.ww.1': "Ich melde mich beim VDAB an.", // nieuw, nalezen
  'be.c.ww.a': "Ich frage nach meinem C4 und gehe zur Gewerkschaft.", // nieuw, nalezen
  'be.s.jobends.2': "Ich hole mir Rat im Justitiehuis.", // nieuw, nalezen
  'be.s.jobends.3': "Ich frage mein ziekenfonds, ob meine Versicherung weiterläuft.", // nieuw, nalezen
  'be.s.newjob.2': 'Ich bewahre meine Lohnabrechnungen auf.',
  'be.c.ww': "Arbeitslosengeld", // nieuw, nalezen
  'be.c.ww.b': end("Arbeit verloren? Dein Arbeitgeber gibt dir ein C4, spätestens an deinem letzten Arbeitstag. Melde dich sofort beim VDAB als arbeitssuchend. Beantrage dann dein Arbeitslosengeld über eine Gewerkschaft (ABVV, ACV oder ACLVB) oder über die HVW, wenn du kein Mitglied bist. Du beantragst es nicht bei der RVA selbst: Die RVA entscheidet. Du musst vorher lange genug gearbeitet haben. Das Arbeitslosengeld ist zeitlich begrenzt: Wie lange, hängt davon ab, wie lange du gearbeitet hast. Hast du selbst gekündigt, ohne guten Grund? Dann bekommst du meistens eine Zeit lang kein Arbeitslosengeld.", deBase, 'advice'), // nieuw, nalezen
  'be.c.ww.p': "Ich möchte eine Leistung beantragen. Was muss ich tun?", // nieuw, nalezen
  'be.c.ww.s': 'Du bist wütend wegen deiner Arbeit und willst heute kündigen. Was ist klug?',
  'be.c.ww.o1': 'Lass dich zuerst beraten, bevor du kündigst.',
  'be.c.ww.o2': "Kündige heute: Du bekommst sowieso Arbeitslosengeld.", // nieuw, nalezen
  'be.c.ww.o3': 'Komm einfach nicht mehr zur Arbeit, ohne etwas zu sagen.',
  'be.c.ww.w': "Eine Kündigung kann dich eine Zeit lang dein Arbeitslosengeld kosten. Wenn du zuerst mit deinem Vorgesetzten, der Gewerkschaft oder dem Justitiehuis sprichst, findest du vielleicht einen besseren Weg.", // nieuw, nalezen
  'be.c.jobends': "Dein Job endet: Was hört noch auf?",
  'be.c.jobends.b': end("Wenn deine Arbeit endet, prüfe deine Schlussabrechnung (eindafrekening) und frag nach deinem C4. Bist du Angestellter (bediende)? Dann bekommst du dein Urlaubsgeld mit deinem letzten Lohn. Arbeiter (arbeider)? Dann bekommst du es im Jahr danach von der Urlaubskasse (vakantiekas). Wohnung oder ein Kleinbus über die Agentur können gleichzeitig enden. Dein Mietvertrag hat eigene Regeln: Hol dir Rat, bevor du aus der Wohnung ausziehst. Für deine Gesundheitskosten bist du über dein ziekenfonds versichert. Mit Arbeitslosengeld bleibst du meistens versichert. Du ziehst um? Sag es der gemeente innerhalb von 8 Arbeitstagen. Du gehst zurück in dein Land? Frag dein ziekenfonds.", deBase, 'advice'), // nieuw, nalezen
  'be.c.jobends.p': "Wann bekomme ich meine Schlussabrechnung?",
  'be.c.jobends.s': "Deine Arbeit endet am Freitag. Die Agentur besorgt dir auch dein Zimmer. Was machst du?", // nieuw, nalezen
  'be.c.jobends.o1': "Frag, was in deinem Mietvertrag steht, und lass dich beraten.", // nieuw, nalezen
  'be.c.jobends.o2': "Verlass das Zimmer am Freitag, weil die Arbeit aufhört.", // nieuw, nalezen
  'be.c.jobends.o3': "Bleib und sprich mit niemandem darüber.", // nieuw, nalezen
  'be.c.jobends.w': "Dein Mietvertrag ist getrennt von deinem Arbeitsvertrag. Darin steht, wie lange du bleiben darfst. Das Justitiehuis kann dich kostenlos ein erstes Mal beraten.", // nieuw, nalezen
  'be.c.newjob': 'Neue Arbeit suchen',
  'be.c.newjob.b': end("Bevor du gehst, bitte um eine Referenz (referentie). Bewahre deine Lohnabrechnungen (loonbrieven), deinen Vertrag und dein C4 auf. Aktualisiere deinen Lebenslauf. Such Arbeit beim VDAB (vdab.be) und bei Zeitarbeitsfirmen (interimkantoren). Zahl nie Geld, um eine Arbeit zu bekommen.", deBase, 'abuse'), // nieuw, nalezen
  'be.c.newjob.p': 'Darf ich Sie als Referenz angeben?',
  'be.c.newjob.s': 'Jemand bietet dir eine Arbeit an, aber zuerst musst du 300 Euro „für die Stelle“ zahlen. Was machst du?',
  'be.c.newjob.o1': "Zahl nicht. Such eine echte Zeitarbeitsfirma.", // nieuw, nalezen
  'be.c.newjob.o2': 'Zahl, eine gute Stelle ist das wert.',
  'be.c.newjob.o3': 'Zahl jetzt die Hälfte und den Rest später.',
  'be.c.newjob.w': "Geld für eine Stelle zu verlangen ist ein Warnzeichen. Eine Zeitarbeitsfirma darf dir kein Geld dafür berechnen, dass sie Arbeit für dich findet. Du kannst auch beim VDAB nach Arbeit suchen.", // nieuw, nalezen
};
