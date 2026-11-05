import type { CultureTranslation } from '../../culture/types';
import type { Gloss } from '../types';
import { ar as arBase, ti as tiBase, fa as faBase, prs as prsBase, tr as trBase } from '../base';

/** A tip's body with the Belgian closing line of this language (src/i18n/be/base.ts, src/lib/tipText.ts), as in ./leave.ts. */
const end = (body: string, base: CultureTranslation, kind: 'advice' | 'abuse'): string => {
  const line = base.gloss[`be.closing.${kind}`];
  return `${body} ${typeof line === 'string' ? line : (line.x ?? line.m)}`;
};

// The translations of the Belgian version of u.sick, "Ziekte" (src/content/taalBe/units/sick.ts),
// one object per help language. The lines and the tip of "Sick at home" (l.illness) kept their ids
// when the unit was split (5 November 2026): their translations stay in ./leave.ts.
// TO DO (the translation round): the new ids of "Back to work after illness" (l.backtowork):
// be.s.backtowork.3, and the tip be.c.backtowork (.b, .p, .s, .o1-.o3, .w; .b ends with the
// Belgian closing line, as in ./leave.ts: end(…, <lang>Base, 'advice')); then import this file in
// src/i18n/be/<lang>.ts like ./leave.ts. Until then the Belgian lesson shows English there.

export const ar: Gloss = {
  'be.s.backtowork.3': "طبيب العمل يقول: يجب أن أزيد العمل ببطء.", // nieuw, nalezen
  'be.c.backtowork': "العودة خطوة خطوة", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': end("تحسّن الحال؟ يجب إخبار صاحب العمل قبل العودة، حتى عندما يكون ذلك أبكر مما تقوله الشهادة الطبية. بعد مرض طويل، تكون البداية غالباً خطوة خطوة: أولاً ساعات أقل، أو عمل أخف. طبيب العمل (arbeidsarts) ينظر في العمل الممكن. مرض منذ وقت طويل؟ عندها يمكن وضع خطة للعودة معاً، مع صاحب العمل وطبيب العمل (re-integratietraject). هل يوجد تعويض من الـziekenfonds؟ عندها يجب سؤال الـziekenfonds أولاً، قبل العمل بدوام جزئي. المهم قول ما هو ممكن بوضوح، وما ليس ممكناً بعد. ليس من الواجب إخبار الزملاء بنوع المرض.", arBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "هذا أستطيع أن أفعله الآن. ذلك لا أستطيعه بعد.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "كنت مريضاً ثلاثة أسابيع. في يومك الأول بعد العودة، يطلب منك مشرفك أن ترفع صناديق ثقيلة. طبيب العمل قال: عمل خفيف فقط الآن. ماذا تفعل؟", f: "كنتِ مريضة ثلاثة أسابيع. في يومك الأول بعد العودة، يطلب منكِ مشرفك أن ترفعي صناديق ثقيلة. طبيب العمل قال: عمل خفيف فقط الآن. ماذا تفعلين؟", x: "بعد مرض ثلاثة أسابيع، في اليوم الأول من العودة، يطلب المشرف رفع صناديق ثقيلة. طبيب العمل قال: عمل خفيف فقط الآن. ما التصرف الصحيح؟" }, // nieuw, nalezen
  'be.c.backtowork.o1': { m: "قل بهدوء إنك تستطيع الآن عملاً خفيفاً، وما لا تستطيعه بعد.", f: "قولي بهدوء إنكِ تستطيعين الآن عملاً خفيفاً، وما لا تستطيعينه بعد.", x: "القول بهدوء إن العمل الخفيف ممكن الآن، وما ليس ممكناً بعد." }, // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': { m: "ارفع الصناديق رغم ذلك: لا تريد أن تسبّب مشاكل.", f: "ارفعي الصناديق رغم ذلك: لا تريدين أن تسبّبي مشاكل.", x: "رفع الصناديق رغم ذلك، لتجنّب المشاكل." }, // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': { m: "اذهب إلى البيت بدون كلمة.", f: "اذهبي إلى البيت بدون كلمة.", x: "الذهاب إلى البيت بدون كلمة." }, // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "المشرف يريد عودتك، وبصحة جيدة. عند القول بوضوح ما هو ممكن، يستطيع أن يخطّط العمل. العمل الكثير بسرعة كبيرة قد يسبّب المرض من جديد.", // nieuw, nalezen (= c.backtowork.w)
};
export const ti: Gloss = {
  'be.s.backtowork.3': "ሓኪም ስራሕ ይብል: ቀስ ብቐስ ክውስኽ ኣለኒ።", // nieuw, nalezen
  'be.c.backtowork': "ስጉምቲ ብስጉምቲ ምምላስ", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': end("ሓይሽኩም ዶ? ቅድሚ ምምላስኩም ንኣስራሒ ንገሩ፡ ወረቐት ሕማምኩም ካብ ዝብሎ ቀልጢፉ እንተ ኾነ እውን። ድሕሪ ነዊሕ ሕማም፡ መብዛሕትኡ ግዜ ስጉምቲ ብስጉምቲ ትጅምሩ፡ ቅድም ውሑድ ሰዓታት፡ ወይ ፈኲስ ስራሕ። ሓኪም ስራሕ (arbeidsarts) እንታይ ስራሕ ክትሰርሑ ከም እትኽእሉ ይርኢ። ንነዊሕ ግዜ ሕሙማት ዲኹም? ሽዑ ንስኹም፡ ኣስራሒኹምን ሓኪም ስራሕን ንምምላስኩም ብሓባር መደብ ክትገብሩ ትኽእሉ (re-integratietraject)። ካብ ziekenfonds ገንዘብ ሓገዝ ትረኽቡ ዶ? ሽዑ ቅድሚ ኣብ ክፋል ግዜ ምስራሕኩም፡ ቅድም ንziekenfonds ሕተቱ። እንታይ ክትገብሩ ከም እትኽእሉን እንታይ ገና ከም ዘይትኽእሉን ብንጹር ንገሩ። ዝነበረኩም ሕማም እንታይ ምዃኑ ንመሳርሕትኹም ክትነግርዎም ኣየድልየኩምን።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "እዚ ክገብሮ እኽእል እየ። እቲ ግን ገና ኣይክእልን።", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "ንሰለስተ ሰሙን ሓሚምካ ነይርካ። ኣብ ናይ መጀመርታ መዓልቲ ምምላስካ፡ ተቖጻጻሪኻ ከበድቲ ሳጹናት ከተልዕል ይሓተካ። ሓኪም ስራሕ ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብር?", f: "ንሰለስተ ሰሙን ሓሚምኪ ነይርኪ። ኣብ ናይ መጀመርታ መዓልቲ ምምላስኪ፡ ተቖጻጻሪኺ ከበድቲ ሳጹናት ከተልዕሊ ይሓተኪ። ሓኪም ስራሕ ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብሪ?", x: "ንሰለስተ ሰሙን ሓሚምኩም ነይርኩም። ኣብ ናይ መጀመርታ መዓልቲ ምምላስኩም፡ ተቖጻጻሪኹም ከበድቲ ሳጹናት ከተልዕሉ ይሓተኩም። ሓኪም ስራሕ ኢሉ ነይሩ: ንሕጂ ፈኲስ ስራሕ ጥራይ። እንታይ ትገብሩ?" }, // nieuw, nalezen
  'be.c.backtowork.o1': { m: "ሕጂ ፈኲስ ስራሕ ክትሰርሕ ከም እትኽእልን እንታይ ገና ከም ዘይትኽእልን ብህድኣት ንገር።", f: "ሕጂ ፈኲስ ስራሕ ክትሰርሒ ከም እትኽእሊን እንታይ ገና ከም ዘይትኽእሊን ብህድኣት ንገሪ።", x: "ሕጂ ፈኲስ ስራሕ ክትሰርሑ ከም እትኽእሉን እንታይ ገና ከም ዘይትኽእሉን ብህድኣት ንገሩ።" }, // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': { m: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕሎም፡ ኣሸጋሪ ክትከውን ኣይትደልን።", f: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕልዮም፡ ኣሸጋሪት ክትኮኒ ኣይትደልዪን።", x: "ዋላ ከምኡ ነቲ ሳጹናት ኣልዕልዎም፡ ኣሸገርቲ ክትኮኑ ኣይትደልዩን።" }, // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': { m: "ቃል ከይበልካ ናብ ገዛ ኪድ።", f: "ቃል ከይበልኪ ናብ ገዛ ኪዲ።", x: "ቃል ከይበልኩም ናብ ገዛ ኪዱ።" }, // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': { m: "ተቖጻጻሪኻ ክትምለስ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብር ከም እትኽእል ብንጹር ምስ እትነግር፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመካ ይኽእል።", f: "ተቖጻጻሪኺ ክትምለሲ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብሪ ከም እትኽእሊ ብንጹር ምስ እትነግሪ፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመኪ ይኽእል።", x: "ተቖጻጻሪኹም ክትምለሱ ይደሊ፡ ብጥዕና ድማ። እንታይ ክትገብሩ ከም እትኽእሉ ብንጹር ምስ እትነግሩ፡ ነቲ ስራሕ ክውድቦ ይኽእል። ብቕልጡፍ ብዙሕ ምስራሕ ከም ብሓድሽ ከሕመኩም ይኽእል።" }, // nieuw, nalezen (= c.backtowork.w)
};
export const fa: Gloss = {
  'be.s.backtowork.3': "پزشک طب کار می‌گوید: آرام‌آرام بیشترش کن.", // nieuw, nalezen
  'be.c.backtowork': "برگشتن قدم به قدم", // nieuw, nalezen
  'be.c.backtowork.b': end("خوب شده‌ای؟ قبل از اینکه برگردی به کارفرما خبر بده، حتی وقتی زودتر از تاریخی است که در گواهی پزشکی‌ات نوشته شده. بعد از یک بیماری طولانی‌تر، اغلب قدم به قدم شروع می‌کنی: اول ساعت‌های کمتر، یا کار سبک‌تر. پزشک طب کار (arbeidsarts) بررسی می‌کند چه کاری از تو برمی‌آید. مدت طولانی‌تری مریض بوده‌ای؟ آن وقت تو، کارفرما و arbeidsarts می‌توانید با هم برای برگشتنت برنامه‌ای بریزید (re-integratietraject). از ziekenfonds کمک‌هزینه می‌گیری؟ پس اول از ziekenfonds بپرس، قبل از اینکه پاره‌وقت کار کنی. روشن بگو چه کاری از تو برمی‌آید، و چه کاری هنوز نه. لازم نیست به همکاران بگویی چه بیماری‌ای داشتی.", faBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "این را دیگر می‌توانم. آن را هنوز نمی‌توانم.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "سه هفته مریض بودی. در اولین روز برگشتنت، سرپرستت از تو می‌خواهد جعبه‌های سنگین بلند کنی. پزشک طب کار گفته: فعلاً فقط کار سبک. چه کار می‌کنی؟", // nieuw, nalezen
  'be.c.backtowork.o1': "آرام می‌گویی که حالا کار سبک می‌توانی بکنی، و چه کاری را هنوز نمی‌توانی.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "با این حال جعبه‌ها را بلند می‌کنی: نمی‌خواهی دردسر درست کنی.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "بدون یک کلمه به خانه می‌روی.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "سرپرستت می‌خواهد برگردی، آن هم سالم. وقتی روشن بگویی چه کاری از تو برمی‌آید، او می‌تواند کار را برنامه‌ریزی کند. زود زیاد کار کردن می‌تواند دوباره مریضت کند.", // nieuw, nalezen (= c.backtowork.w)
};
export const prs: Gloss = {
  'be.s.backtowork.3': "داکتر طب کار می‌گوید: آهسته آهسته زیاد کنید.", // nieuw, nalezen
  'be.c.backtowork': "برگشتن قدم به قدم", // nieuw, nalezen
  'be.c.backtowork.b': end("جور شده‌اید؟ پیش از اینکه برگردید به کارفرما خبر بدهید، حتی وقتی زودتر از تاریخی است که در تصدیق داکتر شما نوشته شده. بعد از یک مریضی درازتر، اکثراً قدم به قدم شروع می‌کنید: اول ساعت‌های کمتر، یا کار سبک‌تر. داکتر طب کار (arbeidsarts) می‌بیند که چه کاری کرده می‌توانید. مدت درازتری مریض بوده‌اید؟ آن وقت شما، کارفرما و arbeidsarts می‌توانید با هم برای برگشت شما یک پلان بسازید (re-integratietraject). از ziekenfonds کمک‌پول می‌گیرید؟ پس اول از ziekenfonds بپرسید، پیش از اینکه نیمه‌وقت کار کنید. واضح بگویید که چه کاری کرده می‌توانید، و چه کاری هنوز نی. لازم نیست به همکاران بگویید که چه مریضی داشتید.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "این را حالا کرده می‌توانم. آن را هنوز کرده نمی‌توانم.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "شما سه هفته مریض بودید. در روز اول برگشت، سرپرست شما از شما می‌خواهد که قطی‌های سنگین را بلند کنید. داکتر طب کار گفته: فعلاً فقط کار سبک. چه می‌کنید؟", // nieuw, nalezen
  'be.c.backtowork.o1': "آرام بگویید که حالا کار سبک کرده می‌توانید، و چه کاری را هنوز کرده نمی‌توانید.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "با این هم قطی‌ها را بلند کنید: نمی‌خواهید مشکل پیدا کنید.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "بدون یک کلمه به خانه بروید.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "سرپرست شما می‌خواهد که برگردید، آن هم صحتمند. وقتی واضح بگویید که چه کرده می‌توانید، او می‌تواند کار را پلان کند. خیلی زود کار زیاد کردن می‌تواند شما را دوباره مریض کند.", // nieuw, nalezen (= c.backtowork.w)
};
export const uk: Gloss = {
  'be.s.backtowork.3': "Лікар з медицини праці каже: збільшувати навантаження поступово.", // nieuw, nalezen
  'be.c.backtowork': "Повертаєшся крок за кроком", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': "Тобі вже краще? Скажи роботодавцю, перш ніж повернешся, навіть якщо це раніше, ніж написано в лікарняній довідці. Після довшої хвороби часто починають крок за кроком: спершу менше годин або легша робота. Лікар з медицини праці (arbeidsarts) дивиться, яку роботу ти можеш виконувати. Хворієш довго? Тоді ти, роботодавець і arbeidsarts можете разом скласти план твого повернення (re-integratietraject). Ти отримуєш допомогу від свого ziekenfonds? Тоді спершу запитай ziekenfonds, перш ніж працювати неповний день. Чітко кажи, що ти можеш робити, а чого ще ні. Ти не мусиш казати колегам, яка в тебе була хвороба. Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen (slotregel = be.closing.advice)
  'be.c.backtowork.p': "Це я вже можу. Того ще не можу.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "Ти хворів три тижні. У перший день після повернення керівник просить тебе піднімати важкі ящики. Лікар з медицини праці сказав: поки що тільки легка робота. Що ти зробиш?", f: "Ти хворіла три тижні. У перший день після повернення керівник просить тебе піднімати важкі ящики. Лікар з медицини праці сказав: поки що тільки легка робота. Що ти зробиш?", x: "Твоя хвороба тривала три тижні. У перший день після повернення керівник просить тебе піднімати важкі ящики. Лікар з медицини праці сказав: поки що тільки легка робота. Що ти зробиш?" }, // nieuw, nalezen
  'be.c.backtowork.o1': "Спокійно скажеш, що зараз можеш робити легку роботу, і чого ще не можеш.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "Усе одно піднімеш ящики: не хочеш створювати проблем.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Мовчки підеш додому.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Керівник чекає на твоє повернення і хоче, щоб із твоїм здоров’ям усе було добре. Коли ти чітко кажеш, що можеш робити, він може спланувати роботу. Якщо зробити забагато й надто рано, можна знову захворіти.", // nieuw, nalezen (= c.backtowork.w)
};
export const tr: Gloss = {
  'be.s.backtowork.3': "İş yeri hekimi diyor ki: yavaş yavaş artır.", // nieuw, nalezen
  'be.c.backtowork': "Adım adım geri dönmek", // nieuw, nalezen
  'be.c.backtowork.b': end("İyileştin mi? Geri dönmeden önce işverenine haber ver, doktor raporunda yazandan daha erken olsa da. Daha uzun bir hastalıktan sonra çoğu zaman adım adım başlarsın: önce daha az saat ya da daha hafif iş. İş yeri hekimi (arbeidsarts) hangi işleri yapabileceğine bakar. Daha uzun süre mi hastaydın? O zaman sen, işverenin ve arbeidsarts dönüşün için birlikte bir plan yapabilirsiniz (re-integratietraject). Ziekenfonds’tan ödenek mi alıyorsun? O zaman yarı zamanlı çalışmadan önce ziekenfonds’una sor. Neler yapabildiğini ve neleri henüz yapamadığını açıkça söyle. Hangi hastalığı geçirdiğini iş arkadaşlarına söylemek zorunda değilsin.", trBase, 'advice'), // nieuw, nalezen
  'be.c.backtowork.p': "Bunu artık yapabiliyorum. Şunu henüz yapamıyorum.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': "Üç hafta hastaydın. Döndüğün ilk gün amirin senden ağır kutuları kaldırmanı istiyor. İş yeri hekimi dedi ki: şimdilik sadece hafif iş. Ne yaparsın?", // nieuw, nalezen
  'be.c.backtowork.o1': "Şimdi hafif iş yapabildiğini ve neyi henüz yapamadığını sakince söylersin.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "Yine de kutuları kaldırırsın: zorluk çıkarmak istemiyorsun.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Tek kelime etmeden eve gidersin.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Amirin geri dönmeni istiyor, hem de sağlıklı olarak. Neler yapabildiğini açıkça söylersen, işi planlayabilir. Çok erken çok fazla iş yapmak seni yeniden hasta edebilir.", // nieuw, nalezen (= c.backtowork.w)
};
export const pl: Gloss = {
  'be.s.backtowork.3': "Lekarz medycyny pracy mówi: zwiększaj obciążenie powoli.", // nieuw, nalezen
  'be.c.backtowork': "Wracasz krok po kroku", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': "Czujesz się lepiej? Powiedz pracodawcy, zanim wrócisz, także jeśli to wcześniej, niż mówi zwolnienie lekarskie. Po dłuższej chorobie często zaczynasz krok po kroku: najpierw mniej godzin albo lżejsza praca. Lekarz medycyny pracy (arbeidsarts) sprawdza, jaką pracę możesz wykonywać. Chorujesz dłuższy czas? Wtedy ty, pracodawca i arbeidsarts możecie razem zrobić plan twojego powrotu (re-integratietraject). Dostajesz zasiłek z ziekenfonds? Wtedy najpierw zapytaj ziekenfonds, zanim zaczniesz pracować w niepełnym wymiarze. Mów jasno, co możesz robić, a czego jeszcze nie. Nie musisz mówić kolegom, jaka to była choroba. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen (slotregel = be.closing.advice)
  'be.c.backtowork.p': "To już mogę robić. Tego jeszcze nie mogę.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "Byłeś chory przez trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz medycyny pracy powiedział: na razie tylko lekka praca. Co robisz?", f: "Byłaś chora przez trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz medycyny pracy powiedział: na razie tylko lekka praca. Co robisz?", x: "Twoja choroba trwała trzy tygodnie. Pierwszego dnia po powrocie przełożony prosi cię o podnoszenie ciężkich pudeł. Lekarz medycyny pracy powiedział: na razie tylko lekka praca. Co robisz?" }, // nieuw, nalezen
  'be.c.backtowork.o1': "Spokojnie mówisz, że teraz możesz wykonywać lekką pracę, i czego jeszcze nie możesz.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "I tak podnosisz pudła: nie chcesz robić problemów.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Idziesz do domu bez słowa.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Przełożony chce mieć cię z powrotem, i to w zdrowiu. Kiedy jasno mówisz, co możesz robić, może zaplanować pracę. Za dużo i za wcześnie może sprawić, że znowu zachorujesz.", // nieuw, nalezen (= c.backtowork.w)
};
export const ro: Gloss = {
  'be.s.backtowork.3': "Medicul de medicina muncii spune: crește treptat, încet.", // nieuw, nalezen
  'be.c.backtowork': "Revii pas cu pas", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': "Te simți mai bine? Spune-i angajatorului înainte să revii, chiar dacă e mai devreme decât scrie în adeverința medicală. După o boală mai lungă, de multe ori începi pas cu pas: întâi mai puține ore sau muncă mai ușoară. Medicul de medicina muncii (arbeidsarts) se uită ce muncă poți face. Boala durează mai mult? Atunci tu, angajatorul și arbeidsarts puteți face împreună un plan pentru întoarcerea ta (re-integratietraject). Primești o indemnizație de la ziekenfonds? Atunci întreabă întâi ziekenfonds, înainte să lucrezi cu jumătate de normă. Spune clar ce poți face și ce nu încă. Nu trebuie să le spui colegilor ce boală ai avut. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen (slotregel = be.closing.advice)
  'be.c.backtowork.p': "Asta pot deja. Aia încă nu pot.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "Ai fost bolnav trei săptămâni. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?", f: "Ai fost bolnavă trei săptămâni. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?", x: "Ai lipsit trei săptămâni din cauza bolii. În prima zi după întoarcere, șeful îți cere să ridici cutii grele. Medicul de medicina muncii a spus: deocamdată doar muncă ușoară. Ce faci?" }, // nieuw, nalezen (= c.backtowork.s)
  'be.c.backtowork.o1': "Spui calm că acum poți face muncă ușoară și ce nu poți face încă.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "Ridici totuși cutiile: nu vrei să faci probleme.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Pleci acasă fără un cuvânt.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Șeful vrea să revii la muncă și să fii bine. Când spui clar ce poți face, poate planifica munca. Prea mult, prea devreme te poate îmbolnăvi din nou.", // nieuw, nalezen (= c.backtowork.w)
};
export const bg: Gloss = {
  'be.s.backtowork.3': "Лекарят по трудова медицина казва: увеличавай постепенно.", // nieuw, nalezen
  'be.c.backtowork': "Връщане стъпка по стъпка", // nieuw, nalezen (= c.backtowork)
  'be.c.backtowork.b': "По-добре ли си? Кажи на работодателя, преди да се върнеш, и когато е по-рано, отколкото пише в болничната бележка. След по-дълга болест често започваш стъпка по стъпка: първо по-малко часове или по-лека работа. Лекарят по трудова медицина (arbeidsarts) преценява каква работа можеш да вършиш. Боледуваш по-дълго? Тогава ти, работодателят и arbeidsarts можете заедно да направите план за връщането ти (re-integratietraject). Получаваш обезщетение от ziekenfonds? Тогава първо питай ziekenfonds, преди да работиш на непълен работен ден. Казвай ясно какво можеш и какво още не. Не е нужно да казваш на колегите каква е била болестта ти. Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen (slotregel = be.closing.advice)
  'be.c.backtowork.p': "Това вече мога. Онова още не мога.", // nieuw, nalezen (= c.backtowork.p)
  'be.c.backtowork.s': { m: "Бил си болен три седмици. В първия ден след връщането началникът те моли да вдигаш тежки кашони. Лекарят по трудова медицина е казал: засега само лека работа. Какво правиш?", f: "Била си болна три седмици. В първия ден след връщането началникът те моли да вдигаш тежки кашони. Лекарят по трудова медицина е казал: засега само лека работа. Какво правиш?", x: "Болестта ти е продължила три седмици. В първия ден след връщането началникът те моли да вдигаш тежки кашони. Лекарят по трудова медицина е казал: засега само лека работа. Какво правиш?" }, // nieuw, nalezen
  'be.c.backtowork.o1': "Спокойно казваш, че сега можеш да вършиш лека работа, и какво още не можеш.", // nieuw, nalezen (= c.backtowork.o1)
  'be.c.backtowork.o2': "Все пак вдигаш кашоните: не искаш да създаваш проблеми.", // nieuw, nalezen (= c.backtowork.o2)
  'be.c.backtowork.o3': "Тръгваш си вкъщи без дума.", // nieuw, nalezen (= c.backtowork.o3)
  'be.c.backtowork.w': "Началникът иска да се върнеш и да си добре. Когато казваш ясно какво можеш, той може да планира работата. Твърде много твърде рано може пак да те разболее.", // nieuw, nalezen (= c.backtowork.w)
};
export const es: Gloss = {
  "be.s.backtowork.3": "El médico del trabajo dice: ir aumentando despacio.", // nieuw, nalezen
  "be.c.backtowork": "Volver paso a paso", // nieuw, nalezen
  "be.c.backtowork.b": "¿Ya estás bien? Avisa a tu empresa antes de volver, también cuando es antes de lo que dice tu certificado médico. Después de una enfermedad larga, muchas veces empiezas paso a paso: primero menos horas, o un trabajo más ligero. El médico del trabajo (arbeidsarts) mira qué trabajo puedes hacer. ¿Llevas mucho tiempo de baja? Entonces puedes hacer un plan para tu vuelta junto con tu empresa y el arbeidsarts (re-integratietraject). ¿Recibes una prestación de tu mutua (ziekenfonds)? Entonces pregunta primero a tu mutua, antes de trabajar a tiempo parcial. Di claramente lo que puedes hacer, y lo que todavía no. No tienes que contar a tus compañeros qué enfermedad has tenido. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen
  "be.c.backtowork.p": "Esto ya lo puedo hacer. Eso todavía no.", // nieuw, nalezen
  "be.c.backtowork.s": { m: "Has estado enfermo tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico del trabajo dijo: por ahora, solo trabajo ligero. ¿Qué haces?", f: "Has estado enferma tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico del trabajo dijo: por ahora, solo trabajo ligero. ¿Qué haces?", x: "Has estado de baja tres semanas. En tu primer día de vuelta, tu encargado te pide que levantes cajas pesadas. El médico del trabajo dijo: por ahora, solo trabajo ligero. ¿Qué haces?" }, // nieuw, nalezen
  "be.c.backtowork.o1": "Dices con calma que ahora puedes hacer trabajo ligero, y lo que todavía no puedes hacer.", // nieuw, nalezen
  "be.c.backtowork.o2": "Levantas las cajas de todos modos: no quieres poner problemas.", // nieuw, nalezen
  "be.c.backtowork.o3": "Te vas a casa sin decir nada.", // nieuw, nalezen
  "be.c.backtowork.w": "Tu encargado quiere que vuelvas, y con buena salud. Si dices claramente lo que puedes hacer, puede organizar el trabajo. Hacer demasiado demasiado pronto puede hacer que vuelvas a enfermar.", // nieuw, nalezen
};
export const pt: Gloss = {
  "be.s.backtowork.3": "O médico do trabalho diz: aumentar aos poucos.", // nieuw, nalezen
  "be.c.backtowork": "Voltar passo a passo", // nieuw, nalezen
  "be.c.backtowork.b": "Estás melhor? Avisa o teu empregador antes de voltares, também quando é mais cedo do que diz o teu atestado médico. Depois de uma doença longa, muitas vezes começas passo a passo: primeiro menos horas, ou trabalho mais leve. O médico do trabalho (arbeidsarts) vê que trabalho consegues fazer. Estás doente há muito tempo? Então tu, o teu empregador e o arbeidsarts podem fazer juntos um plano para o teu regresso (re-integratietraject). Recebes um subsídio do teu ziekenfonds (a caixa de saúde)? Então pergunta primeiro ao teu ziekenfonds, antes de trabalhares a tempo parcial. Diz claramente o que consegues fazer, e o que ainda não. Não tens de contar aos colegas que doença tiveste. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
  "be.c.backtowork.p": "Isto já consigo fazer. Aquilo ainda não.", // nieuw, nalezen
  "be.c.backtowork.s": "Estiveste doente três semanas. No teu primeiro dia de volta, o teu chefe pede-te para levantares caixas pesadas. O médico do trabalho disse: por agora, só trabalho leve. O que fazes?", // nieuw, nalezen
  "be.c.backtowork.o1": "Dizes com calma que agora consegues fazer trabalho leve, e o que ainda não consegues.", // nieuw, nalezen
  "be.c.backtowork.o2": "Levantas as caixas na mesma: não queres criar problemas.", // nieuw, nalezen
  "be.c.backtowork.o3": "Vais para casa sem dizer nada.", // nieuw, nalezen
  "be.c.backtowork.w": "O teu chefe quer-te de volta, e com saúde. Quando dizes claramente o que consegues fazer, ele pode planear o trabalho. Fazer demasiado, cedo demais, pode fazer-te adoecer outra vez.", // nieuw, nalezen
};
export const fr: Gloss = {
  "be.s.backtowork.3": "Le médecin du travail dit : reprendre petit à petit.", // nieuw, nalezen
  "be.c.backtowork": "Revenir étape par étape", // nieuw, nalezen
  "be.c.backtowork.b": "Tu vas mieux ? Préviens ton employeur avant de revenir, même si c’est plus tôt que ce que dit ton certificat médical. Après une longue maladie, tu reprends souvent étape par étape : d’abord moins d’heures, ou un travail plus léger. Le médecin du travail (arbeidsarts) regarde quel travail tu peux faire. Malade depuis longtemps ? Alors ton employeur, l’arbeidsarts et toi pouvez faire ensemble un plan pour ton retour (re-integratietraject). Tu reçois une indemnité de ta mutualité (ziekenfonds) ? Alors demande d’abord à ta mutualité, avant de travailler à temps partiel. Dis clairement ce que tu peux faire, et ce que tu ne peux pas encore faire. Tu n’as pas à dire à tes collègues quelle maladie tu as eue. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
  "be.c.backtowork.p": "Ça, je peux déjà le faire. Ça, pas encore.", // nieuw, nalezen
  "be.c.backtowork.s": "Tu as été malade pendant trois semaines. Le premier jour de ton retour, ton responsable te demande de porter des cartons lourds. Le médecin du travail a dit : seulement du travail léger pour l’instant. Que fais-tu ?", // nieuw, nalezen
  "be.c.backtowork.o1": "Tu dis calmement que tu peux faire du travail léger maintenant, et ce que tu ne peux pas encore faire.", // nieuw, nalezen
  "be.c.backtowork.o2": "Tu portes quand même les cartons : tu ne veux pas faire d’histoires.", // nieuw, nalezen
  "be.c.backtowork.o3": "Tu rentres chez toi sans rien dire.", // nieuw, nalezen
  "be.c.backtowork.w": "Ton responsable veut te voir revenir, et en bonne santé. Quand tu dis clairement ce que tu peux faire, il peut organiser le travail. En faire trop, trop tôt, peut te rendre malade à nouveau.", // nieuw, nalezen
};
export const de: Gloss = {
  "be.s.backtowork.3": "Der Arbeitsarzt sagt: langsam steigern.", // nieuw, nalezen
  "be.c.backtowork": "Schritt für Schritt zurück", // nieuw, nalezen
  "be.c.backtowork.b": "Bist du wieder gesund? Sag es deinem Arbeitgeber, bevor du zurückkommst, auch wenn es früher ist, als auf deinem Attest steht. Nach einer längeren Krankheit fängst du oft Schritt für Schritt an: zuerst weniger Stunden oder leichtere Arbeit. Der Arbeitsarzt (arbeidsarts) schaut, welche Arbeit du machen kannst. Länger krank? Dann können du, dein Arbeitgeber und der Arbeitsarzt zusammen einen Plan für deine Rückkehr machen (re-integratietraject). Bekommst du Geld von deinem ziekenfonds (Krankenkasse)? Dann frag zuerst deinen ziekenfonds, bevor du Teilzeit arbeitest. Sag deutlich, was du kannst und was noch nicht. Du musst Kollegen nicht sagen, welche Krankheit du hattest. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
  "be.c.backtowork.p": "Das kann ich schon. Das kann ich noch nicht.", // nieuw, nalezen
  "be.c.backtowork.s": "Du warst drei Wochen krank. An deinem ersten Tag zurück bittet dich dein Vorgesetzter, schwere Kisten zu heben. Der Arbeitsarzt hat gesagt: vorerst nur leichte Arbeit. Was machst du?", // nieuw, nalezen
  "be.c.backtowork.o1": "Du sagst ruhig, dass du jetzt leichte Arbeit machen kannst und was du noch nicht kannst.", // nieuw, nalezen
  "be.c.backtowork.o2": "Du hebst die Kisten trotzdem: Du willst keine Umstände machen.", // nieuw, nalezen
  "be.c.backtowork.o3": "Du gehst ohne ein Wort nach Hause.", // nieuw, nalezen
  "be.c.backtowork.w": "Dein Vorgesetzter will dich zurück, und zwar gesund. Wenn du deutlich sagst, was du kannst, kann er die Arbeit planen. Zu viel zu früh kann dich wieder krank machen.", // nieuw, nalezen
};

/** Somali (so): to be translated, like `de` above. */
export const so: Gloss = {
  "be.s.backtowork.3": "Dhakhtarka shaqadu wuxuu leeyahay: si tartiib ah u kordhi.", // nieuw, nalezen
  "be.c.backtowork": "Ku soo noqoshada tallaabo tallaabo", // nieuw, nalezen
  "be.c.backtowork.b": "Ma ka bogsatay? U sheeg loo-shaqeeyahaaga ka hor inta aadan soo noqon, xitaa haddii ay ka horreyso taariikhda warqadda dhakhtarku sheegayso. Xanuun dheer kadib, inta badan waxaad bilaabaysaa tallaabo tallaabo: marka hore saacado yar, ama shaqo fudud. Dhakhtarka shaqada (arbeidsarts) ayaa eega shaqada aad qaban karto. Muddo dheer ma xanuunsanayd? Markaas adiga, loo-shaqeeyahaaga iyo arbeidsarts ayaa wada samayn kara qorshe aad ku soo noqonayso (re-integratietraject). Ma lacag kaalmo ah ayaad ka helaysaa ziekenfonds (sanduuqa caafimaadka)? Markaas marka hore weydii ziekenfonds, ka hor inta aadan qayb-waqti shaqeyn. Si cad u sheeg waxa aad qaban karto, iyo waxa aadan weli qaban karin. Uma baahnid inaad saaxiibada shaqada u sheegto cudurka aad qabtay. Macluumaad guud. Xaaladdaada gaarka ah: weydii loo-shaqeeyahaaga, ururka shaqaalaha ama justitiehuis (talo sharci oo bilaash ah).", // nieuw, nalezen
  "be.c.backtowork.p": "Tan hadda waan qaban karaa. Taas weli ma qaban karo.", // nieuw, nalezen
  "be.c.backtowork.s": "Saddex toddobaad ayaad xanuunsanayd. Maalintaada ugu horreysa ee aad soo noqoto, madaxaagu wuxuu kaa codsanayaa inaad qaaddo sanduuqyo culus. Dhakhtarka shaqadu wuxuu yidhi: hadda shaqo fudud oo keliya. Maxaad samaynaysaa?", // nieuw, nalezen
  "be.c.backtowork.o1": "Si deggan u sheeg inaad hadda qaban karto shaqo fudud, iyo waxa aadan weli qaban karin.", // nieuw, nalezen
  "be.c.backtowork.o2": "Sanduuqyada si kastaba u qaad: ma rabtid inaad dhib abuurto.", // nieuw, nalezen
  "be.c.backtowork.o3": "Guriga aad adigoon hal eray odhan.", // nieuw, nalezen
  "be.c.backtowork.w": "Madaxaagu wuxuu rabaa inaad soo noqoto, adigoo caafimaad qaba. Markaad si cad u sheegto waxa aad qaban karto, wuu qorsheyn karaa shaqada. Shaqo badan oo goor hore ah ayaa mar kale ku xanuunin karta.", // nieuw, nalezen
};
