import type { CultureTranslation } from '../../culture/types';
import { ar as arBase, ti as tiBase, fa as faBase, prs as prsBase, uk as ukBase, tr as trBase, pl as plBase, ro as roBase, bg as bgBase, es as esBase, pt as ptBase, fr as frBase, de as deBase } from '../base';
import type { Gloss } from '../types';

// The translations of the Belgian version of u.rights (src/content/taalBe/units/rights.ts): de Welzijnswet, de inspectie, het justitiehuis, and the tips on breaks and on discrimination and dismissal. One object per help language.
// A text whose English is the same as the Dutch tip's is the Dutch unit's translation (src/i18n/work/<lang>.ts);
// the rest is new: // nieuw, nalezen. The Belgian names (justitiehuis, ziekenfonds, VDAB, RVA, HVW, C4,
// Unia, Payoke …) stay Dutch, as in the English. Arabic and Tigrinya: written without a gender.

/** A tip's body with the Belgian closing line of this language (src/i18n/be/base.ts, src/lib/tipText.ts). */
const end = (body: string, base: CultureTranslation, kind: 'advice' | 'abuse'): string => {
  const line = base.gloss[`be.closing.${kind}`];
  return `${body} ${typeof line === 'string' ? line : (line.x ?? line.m)}`;
};

export const ar: Gloss = {
  'be.w.arbowet': "قانون السلامة والصحة في العمل (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "تفتيش العمل (يراقب قواعد العمل)", // nieuw, nalezen
  'be.s.health.3': "أبلّغ عن ذلك لتفتيش العمل.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (أول استشارة قانونية مجانية)", // nieuw, nalezen
  'be.c.health': 'الاستراحات وساعات العمل',
  'be.c.health.b': end("القانون يحمي السلامة والصحة في العمل (Welzijnswet). العمل أكثر من 6 ساعات؟ عندها توجد استراحة. إذا لم يكن في القطاع قاعدة أخرى، فهي 15 دقيقة على الأقل. عادةً يكون العمل 8 ساعات في اليوم على الأكثر، و38 ساعة في الأسبوع في المتوسط. يمكن أن تكون في القطاع قواعد أخرى. على صاحب العمل أن يعطي معدات الحماية مجاناً، مثل أحذية السلامة أو القفازات. عمل غير آمن؟ الإبلاغ يكون لدى Toezicht op het Welzijn op het Werk. ساعات طويلة جداً أو أجر قليل جداً؟ الإبلاغ يكون لدى Toezicht op de Sociale Wetten. الاسم يبقى سرّياً.", arBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'لم آخذ استراحة بعد.',
  'be.c.health.s': "مرّت 7 ساعات من العمل بدون استراحة. المشرف يطلب الاستمرار. ما التصرف الصحيح؟", // nieuw, nalezen
  'be.c.health.o1': { m: 'قل إنك تحتاج استراحتك الآن.', f: 'قولي إنك تحتاجين استراحتك الآن.' },
  'be.c.health.o2': { m: 'استمر، وخذ استراحة أطول لاحقاً.', f: 'استمري، وخذي استراحة أطول لاحقاً.' },
  'be.c.health.o3': { m: 'اترك العمل واذهب إلى البيت دون كلمة.', f: 'اتركي العمل واذهبي إلى البيت دون كلمة.' },
  'be.c.health.w': "عند العمل أكثر من 6 ساعات، الاستراحة قانون وليست معروفاً. الراحة تساعد أيضاً على العمل بأمان.", // nieuw, nalezen
  'be.c.rights': 'التمييز والفصل من العمل',
  'be.c.rights.b': end("التمييز في العمل ممنوع، مثلاً بسبب الأصل أو الدين أو الجنس أو العمر أو الإعاقة. يمكن الإبلاغ عنه مجاناً لدى Unia. وفي ما يخصّ الخدمات الفلامندية، مثل VDAB، يكون التوجّه إلى Vlaams Mensenrechteninstituut. يحق لصاحب العمل إنهاء العقد، لكن عليه أن يعطي مهلة إشعار (opzegtermijn) أو أن يدفع الأجر عن تلك المدة (opzegvergoeding). غالباً يمكن السؤال عن الأسباب برسالة مسجّلة. عند انتهاء العمل يأتي ورق C4: هو ضروري لإعانة البطالة. لا توقيع على ورقة عن الفصل من العمل غير مفهومة. أولاً طلب المساعدة من النقابة (ABVV أو ACV أو ACLVB)، أو من ممثل النقابة في مكان العمل (syndicale afgevaardigde)، أو من justitiehuis.", arBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'أريد أن أطلب النصيحة أولاً.',
  'be.c.rights.s': { m: 'مديرك يعطيك ورقة: «وقّع اليوم، وتغادر باتفاق بيننا.» أنت لا تفهمها جيداً. ماذا تفعل؟', f: 'مديرك يعطيك ورقة: «وقّعي اليوم، وتغادرين باتفاق بيننا.» أنت لا تفهمينها جيداً. ماذا تفعلين؟' },
  'be.c.rights.o1': { m: 'لا توقّع الآن. اطلب وقتاً واطلب النصيحة أولاً.', f: 'لا توقّعي الآن. اطلبي وقتاً واطلبي النصيحة أولاً.' },
  'be.c.rights.o2': { m: 'وقّعها، لأن المدير يقول إنها جيدة.', f: 'وقّعيها، لأن المدير يقول إنها جيدة.' },
  'be.c.rights.o3': { m: 'ضع الورقة جانباً ولا تتكلم عنها أبداً.', f: 'ضعي الورقة جانباً ولا تتكلمي عنها أبداً.' },
  'be.c.rights.w': "التوقيع قد يُفقد حقوقاً: مثلاً مهلة الإشعار، وإعانة البطالة لفترة. طلب وقت للاستشارة أمر عادي ومسموح.", // nieuw, nalezen
};

export const ti: Gloss = {
  'be.w.arbowet': "ሕጊ ድሕንነትን ጥዕናን ኣብ ስራሕ (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "ምርመራ ስራሕ (ሕግታት ስራሕ ይቆጻጸር)", // nieuw, nalezen
  'be.s.health.3': "ናብ ምርመራ ስራሕ እሕብሮ።", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (ናይ መጀመርታ ናጻ ሕጋዊ ምኽሪ)", // nieuw, nalezen
  'be.c.health': 'ዕረፍትን ሰዓታት ስራሕን',
  'be.c.health.b': end("ሕጊ ድሕንነትኩምን ጥዕናኹምን ኣብ ስራሕ ይሕሉ (Welzijnswet)። ካብ 6 ሰዓት ንላዕሊ ትሰርሑ ዶ? ሽዑ ዕረፍቲ ኣለኩም። ዘርፍኹም ካልእ ሕጊ እንተ ዘይብሉ፡ እቲ ዕረፍቲ እንተ ወሓደ 15 ደቒቕ እዩ። ልሙድ ኣብ መዓልቲ እንተ በዝሐ 8 ሰዓት፡ ኣብ ሰሙን ድማ ብማእከላይ 38 ሰዓት ትሰርሑ። ዘርፍኹም ካልእ ሕግታት ክህልዎ ይኽእል። ኣስራሒ ናይ መከላኸሊ ናውቲ፡ ከም ሳእኒ ድሕንነት ወይ ጓንቲ፡ ብናጻ ክህበኩም ኣለዎ። ዘይውሑስ ስራሕ? ናብ Toezicht op het Welzijn op het Werk ሓብሩ። ኣዝዩ ነዊሕ ሰዓታት ወይ ኣዝዩ ውሑድ ደሞዝ? ናብ Toezicht op de Sociale Wetten ሓብሩ። ስምኩም ምስጢር ኮይኑ ይጸንሕ።", tiBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'ገና ዕረፍቲ ኣይወሰድኩን።',
  'be.c.health.s': "ብዘይ ዕረፍቲ 7 ሰዓት ሰሪሕኩም። ተቖጻጻሪኹም ክትቕጽሉ ይሓተኩም። እንታይ ትገብሩ?", // nieuw, nalezen
  'be.c.health.o1': { m: 'ሕጂ ዕረፍትኻ ከም ዘድልየካ ንገር።', f: 'ሕጂ ዕረፍትኺ ከም ዘድልየኪ ንገሪ።', x: 'ሕጂ ዕረፍትኹም ከም ዘድልየኩም ንገሩ።' },
  'be.c.health.o2': { m: 'ቀጽል፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰድ።', f: 'ቀጽሊ፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰዲ።', x: 'ቀጽሉ፡ ደሓር ድማ ዝነውሐ ዕረፍቲ ውሰዱ።' },
  'be.c.health.o3': { m: 'ቃል ከይበልካ ስራሕ ገዲፍካ ናብ ገዛ ኪድ።', f: 'ቃል ከይበልኪ ስራሕ ገዲፍኪ ናብ ገዛ ኪዲ።', x: 'ቃል ከይበልኩም ስራሕ ገዲፍኩም ናብ ገዛ ኪዱ።' },
  'be.c.health.w': "ካብ 6 ሰዓት ንላዕሊ ክትሰርሑ ከለኹም፡ ዕረፍቲ ሕጊ እዩ፡ ውዕለት ኣይኮነን። ዕረፍቲ ብውሑስ መንገዲ ክትሰርሑ እውን ይሕግዘኩም።", // nieuw, nalezen
  'be.c.rights': 'ኣድልዎን ካብ ስራሕ ምስጓግን',
  'be.c.rights.b': end("ኣብ ስራሕ ኣድልዎ ክልኩል እዩ፡ ንኣብነት ብሰንኪ መበቆል፡ ሃይማኖት፡ ጾታ፡ ዕድመ ወይ ስንክልና። ናብ Unia ብናጻ ክትሕብሩ ትኽእሉ። ንፍላማዊ ኣገልግሎታት፡ ከም VDAB፡ ናብ Vlaams Mensenrechteninstituut ትኸዱ። ኣስራሒ ውዕልኩም ከቋርጽ ይኽእል፡ ግን ግዜ ምልክት (opzegtermijn) ክህበኩም ወይ ደሞዝ ናይቲ ግዜ ክኸፍለኩም (opzegvergoeding) ኣለዎ። መብዛሕትኡ ግዜ ምኽንያታት ብዝተመዝገበ ደብዳቤ ክትሓቱ ትኽእሉ። ስራሕኩም ምስ ተወደአ C4 ትረኽቡ፡ ንሓገዝ ስራሕ ኣልቦነት የድልየኩም። ብዛዕባ ምብራርኩም ዘይተረድኣኩም ወረቐት ኣይትፈርሙ። መጀመርታ ካብ ማሕበር ሰራሕተኛታት (ABVV፡ ACV ወይ ACLVB)፡ ካብ ወኪል ማሕበር ኣብ ስራሕ (syndicale afgevaardigde) ወይ ካብ justitiehuis ሓገዝ ሕተቱ።", tiBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'ቅድም ምኽሪ ክሓትት እደሊ።',
  'be.c.rights.s': { m: 'ሓላፊኻ ወረቐት ሂቡካ «ሎሚ ፈርም፡ ሽዑ ብስምምዕ ትወጽእ።» ይብለካ። ብጽቡቕ ኣይተረደኣካን። እንታይ ትገብር?', f: 'ሓላፊኺ ወረቐት ሂቡኪ «ሎሚ ፈርሚ፡ ሽዑ ብስምምዕ ትወጽኢ።» ይብለኪ። ብጽቡቕ ኣይተረደኣክን። እንታይ ትገብሪ?' },
  'be.c.rights.o1': { m: 'ገና ኣይትፈርም። ግዜ ሕተት እሞ ቅድም ምኽሪ ውሰድ።', f: 'ገና ኣይትፈርሚ። ግዜ ሕተቲ እሞ ቅድም ምኽሪ ውሰዲ።', x: 'ገና ኣይትፈርሙ። ግዜ ሕተቱ እሞ ቅድም ምኽሪ ውሰዱ።' },
  'be.c.rights.o2': { m: 'ሓላፊ ጽቡቕ እዩ ስለ ዝበለ፡ ፈርሞ።', f: 'ሓላፊ ጽቡቕ እዩ ስለ ዝበለ፡ ፈርምዮ።' },
  'be.c.rights.o3': { m: 'ነቲ ወረቐት ኣልግሶ እሞ ፈጺምካ ብዛዕባኡ ኣይትዛረብ።', f: 'ነቲ ወረቐት ኣልግስዮ እሞ ፈጺምኪ ብዛዕባኡ ኣይትዛረቢ።' },
  'be.c.rights.w': "እንተ ፈሪምኩም መሰላት ከተጥፍኡ ትኽእሉ ኢኹም፡ ንኣብነት ግዜ ምልክትኩም፡ ንግዜ ድማ ሓገዝ ስራሕ ኣልቦነት። ምኽሪ ንምውሳድ ግዜ ምሕታት ልሙድን ዝፍቀድን እዩ።", // nieuw, nalezen
};

export const fa: Gloss = {
  'be.w.arbowet': "قانون ایمنی و سلامت در کار (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "بازرسی کار (قانون‌های محل کار را کنترل می‌کند)", // nieuw, nalezen
  'be.s.health.3': "آن را به بازرسی کار گزارش می‌دهم.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (اولین مشاورهٔ حقوقی رایگان)", // nieuw, nalezen
  'be.c.health': 'استراحت و ساعت‌های کار',
  'be.c.health.b': end("قانون از ایمنی و سلامت تو در کار محافظت می‌کند (Welzijnswet). بیشتر از ۶ ساعت کار می‌کنی؟ پس حق استراحت داری. اگر رشتهٔ کاری‌ات قانون دیگری ندارد، استراحت دست‌کم ۱۵ دقیقه است. معمولاً حداکثر ۸ ساعت در روز و به‌طور میانگین ۳۸ ساعت در هفته کار می‌کنی. رشتهٔ کاری‌ات می‌تواند قانون‌های دیگری داشته باشد. کارفرما باید وسایل ایمنی، مثل کفش ایمنی یا دستکش، را رایگان به تو بدهد. کار ناامن؟ به Toezicht op het Welzijn op het Werk گزارش بده. ساعت‌های خیلی طولانی یا دستمزد خیلی کم؟ به Toezicht op de Sociale Wetten گزارش بده. نامت مخفی می‌ماند.", faBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'من هنوز استراحت نکرده‌ام.',
  'be.c.health.s': "۷ ساعت بدون استراحت کار کرده‌ای. سرپرستت از تو می‌خواهد ادامه بدهی. چه کار می‌کنی؟", // nieuw, nalezen
  'be.c.health.o1': 'بگو که الان به استراحتت نیاز داری.',
  'be.c.health.o2': 'ادامه بده، و بعداً استراحت طولانی‌تری بکن.',
  'be.c.health.o3': 'بدون یک کلمه کار را ول کن و برو خانه.',
  'be.c.health.w': "وقتی بیشتر از ۶ ساعت کار می‌کنی، استراحت قانون است، نه لطف. استراحت به تو کمک می‌کند ایمن کار کنی.", // nieuw, nalezen
  'be.c.rights': 'تبعیض و اخراج',
  'be.c.rights.b': end("تبعیض در کار ممنوع است، مثلاً به خاطر اصل و نسب، دین، جنسیت، سن یا معلولیت. می‌توانی آن را رایگان به Unia گزارش بدهی. برای اداره‌های فلاندری، مثل VDAB، به Vlaams Mensenrechteninstituut مراجعه می‌کنی. کارفرما می‌تواند قراردادت را تمام کند، اما باید به تو مهلت پیش‌آگهی (opzegtermijn) بدهد یا دستمزد آن مدت را بپردازد (opzegvergoeding). اغلب می‌توانی با نامهٔ سفارشی دلیل‌ها را بپرسی. وقتی کارت تمام می‌شود، یک C4 می‌گیری: برای کمک‌هزینهٔ بیکاری به آن نیاز داری. کاغذی دربارهٔ اخراجت را که نمی‌فهمی امضا نکن. اول از اتحادیهٔ کارگری (ABVV، ACV یا ACLVB)، نمایندهٔ اتحادیه در محل کار (syndicale afgevaardigde) یا justitiehuis کمک بخواه.", faBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'می‌خواهم اول مشورت بگیرم.',
  'be.c.rights.s': 'رئیست کاغذی به تو می‌دهد: «امروز امضا کن، بعد با توافق می‌روی.» خوب متوجهش نمی‌شوی. چه کار می‌کنی؟',
  'be.c.rights.o1': 'هنوز امضا نکن. وقت بخواه و اول مشورت بگیر.',
  'be.c.rights.o2': 'امضایش کن، چون رئیس می‌گوید مشکلی نیست.',
  'be.c.rights.o3': 'کاغذ را کنار بگذار و هیچ‌وقت درباره‌اش حرف نزن.',
  'be.c.rights.w': "اگر امضا کنی، ممکن است حق‌هایی را از دست بدهی: مثلاً مهلت پیش‌آگهی‌ات، و برای مدتی کمک‌هزینهٔ بیکاری. وقت خواستن برای مشورت گرفتن عادی و مجاز است.", // nieuw, nalezen
};

export const prs: Gloss = {
  'be.w.arbowet': "قانون مصئونیت و صحت در کار (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "تفتیش کار (مقررات جای کار را کنترول می‌کند)", // nieuw, nalezen
  'be.s.health.3': "آن را به تفتیش کار گزارش می‌دهم.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (اولین مشورهٔ حقوقی رایگان)", // nieuw, nalezen
  'be.c.health': 'تفریح و ساعت‌های کار',
  'be.c.health.b': end("قانون از مصئونیت و صحت شما در کار محافظت می‌کند (Welzijnswet). بیشتر از ۶ ساعت کار می‌کنید؟ پس حق تفریح دارید. اگر بخش کاری شما قاعدهٔ دیگری ندارد، تفریح دست‌کم ۱۵ دقیقه است. معمولاً حداکثر ۸ ساعت در روز و به‌طور اوسط ۳۸ ساعت در هفته کار می‌کنید. بخش کاری شما می‌تواند مقررات دیگری داشته باشد. کارفرما باید وسایل محافظتی، مانند بوت مصئونیت یا دستکش، را رایگان به شما بدهد. کار خطرناک؟ به Toezicht op het Welzijn op het Werk گزارش بدهید. ساعات بسیار طولانی یا معاش بسیار کم؟ به Toezicht op de Sociale Wetten گزارش بدهید. نام شما مخفی می‌ماند.", prsBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'من هنوز تفریح نکرده‌ام.',
  'be.c.health.s': "شما ۷ ساعت بدون تفریح کار کرده‌اید. سرپرست شما می‌خواهد که ادامه بدهید. چه می‌کنید؟", // nieuw, nalezen
  'be.c.health.o1': 'بگویید که حالا تفریح خود را لازم دارید.',
  'be.c.health.o2': 'ادامه بدهید، و بعداً تفریح درازتر بگیرید.',
  'be.c.health.o3': 'بدون یک کلمه کار را بگذارید و به خانه بروید.',
  'be.c.health.w': "وقتی بیشتر از ۶ ساعت کار می‌کنید، تفریح قانون است، نه لطف. استراحت به شما کمک می‌کند که مصئون کار کنید.", // nieuw, nalezen
  'be.c.rights': 'تبعیض و برطرفی از کار',
  'be.c.rights.b': end("تبعیض در کار ممنوع است، مثلاً به خاطر اصلیت، دین، جنسیت، سن یا معلولیت. می‌توانید آن را رایگان به Unia گزارش بدهید. برای اداره‌های فلاندری، مانند VDAB، به Vlaams Mensenrechteninstituut مراجعه می‌کنید. کارفرما می‌تواند قرارداد شما را ختم کند، اما باید به شما مهلت اطلاع قبلی (opzegtermijn) بدهد یا معاش آن مدت را بپردازد (opzegvergoeding). اکثراً می‌توانید با نامهٔ ثبت‌شده دلایل را بپرسید. وقتی کار شما ختم می‌شود، یک C4 می‌گیرید: برای کمک‌پول بیکاری به آن ضرورت دارید. کاغذی را دربارهٔ برطرفی خود که نمی‌فهمید امضا نکنید. اول از اتحادیهٔ کارگری (ABVV، ACV یا ACLVB)، نمایندهٔ اتحادیه در جای کار (syndicale afgevaardigde) یا justitiehuis کمک بخواهید.", prsBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'می‌خواهم اول مشوره بگیرم.',
  'be.c.rights.s': 'آمر شما یک کاغذ به شما می‌دهد: «امروز امضا کن، بعد با موافقه می‌روی.» آن را خوب نمی‌فهمید. چه می‌کنید؟',
  'be.c.rights.o1': 'هنوز امضا نکنید. وقت بخواهید و اول مشوره بگیرید.',
  'be.c.rights.o2': 'امضا کنید، چون آمر می‌گوید مشکلی نیست.',
  'be.c.rights.o3': 'کاغذ را یک طرف بگذارید و هیچ وقت دربارهٔ آن گپ نزنید.',
  'be.c.rights.w': "اگر امضا کنید، شاید حقوقی را از دست بدهید: مثلاً مهلت اطلاع قبلی، و برای مدتی کمک‌پول بیکاری. وقت خواستن برای مشوره گرفتن عادی و اجازه است.", // nieuw, nalezen
};

export const uk: Gloss = {
  'be.w.arbowet': "закон про безпеку й здоровʼя на роботі (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "трудова інспекція (перевіряє правила на роботі)", // nieuw, nalezen
  'be.s.health.3': "Я повідомляю про це інспекцію.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (перша безкоштовна юридична порада)", // nieuw, nalezen
  'be.c.health': 'Перерви й робочий час',
  'be.c.health.b': end("Закон захищає твою безпеку й здоровʼя на роботі (Welzijnswet). Працюєш більше ніж 6 годин? Тоді маєш перерву. Якщо у твоїй галузі немає іншого правила, вона триває щонайменше 15 хвилин. Зазвичай ти працюєш не більше ніж 8 годин на день і в середньому 38 годин на тиждень. У твоїй галузі можуть бути інші правила. Роботодавець має безкоштовно дати тобі засоби захисту, наприклад захисне взуття чи рукавиці. Небезпечна робота? Повідом Toezicht op het Welzijn op het Werk. Задовгі години чи замала зарплата? Повідом Toezicht op de Sociale Wetten. Твоє імʼя залишиться в таємниці.", ukBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'У мене ще не було перерви.',
  'be.c.health.s': "Ти працюєш уже 7 годин без перерви. Керівник просить тебе працювати далі. Що ти зробиш?", // nieuw, nalezen
  'be.c.health.o1': 'Скажеш, що тобі зараз потрібна перерва.',
  'be.c.health.o2': 'Працюватимеш далі, а пізніше зробиш довшу перерву.',
  'be.c.health.o3': 'Мовчки підеш з роботи додому.',
  'be.c.health.w': "Коли ти працюєш більше ніж 6 годин, перерва — це закон, а не ласка. Відпочинок також допомагає працювати безпечно.", // nieuw, nalezen
  'be.c.rights': 'Дискримінація й звільнення',
  'be.c.rights.b': end("Дискримінація на роботі заборонена, наприклад через твоє походження, релігію, стать, вік чи інвалідність. Ти можеш безкоштовно повідомити про це Unia. Щодо фламандських служб, як-от VDAB, звертайся до Vlaams Mensenrechteninstituut. Роботодавець може розірвати твій договір, але має дати тобі строк попередження (opzegtermijn) або заплатити зарплату за цей час (opzegvergoeding). Часто ти можеш рекомендованим листом запитати причини. Коли твоя робота закінчується, ти отримуєш C4: він потрібен для допомоги з безробіття. Не підписуй папір про звільнення, якого не розумієш. Спершу попроси допомоги в профспілки (ABVV, ACV чи ACLVB), у профспілкового представника на роботі (syndicale afgevaardigde) або в justitiehuis.", ukBase, 'abuse'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.rights.p': 'Я хочу спершу порадитися.',
  'be.c.rights.s': 'Начальник дає тобі папір: «Підпиши сьогодні, тоді звільнишся за згодою сторін». Ти погано його розумієш. Що ти зробиш?',
  'be.c.rights.o1': 'Поки не підписуватимеш. Попросиш час і спершу порадишся.',
  'be.c.rights.o2': 'Підпишеш, бо начальник каже, що все гаразд.',
  'be.c.rights.o3': 'Сховаєш папір і ніколи про нього не говоритимеш.',
  'be.c.rights.w': "Якщо підпишеш, можеш утратити права: наприклад строк попередження і на якийсь час допомогу з безробіття. Попросити час, щоб порадитися, — це нормально й дозволено.", // nieuw, nalezen
};

export const tr: Gloss = {
  'be.w.arbowet': "iş güvenliği ve sağlığı yasası (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "iş müfettişliği (iş yerindeki kuralları denetler)", // nieuw, nalezen
  'be.s.health.3': "Bunu müfettişliğe bildiriyorum.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (ücretsiz ilk hukuki danışmanlık)", // nieuw, nalezen
  'be.c.health': 'Molalar ve çalışma saatleri',
  'be.c.health.b': end("Yasa iş yerinde güvenliğini ve sağlığını korur (Welzijnswet). 6 saatten fazla mı çalışıyorsun? O zaman mola hakkın var. Sektörünün başka bir kuralı yoksa mola en az 15 dakikadır. Normalde günde en fazla 8 saat ve haftada ortalama 38 saat çalışırsın. Sektörünün başka kuralları olabilir. İşverenin sana iş ayakkabısı ya da eldiven gibi koruyucu ekipmanı ücretsiz vermek zorundadır. Tehlikeli iş mi? Toezicht op het Welzijn op het Werk’e bildir. Çok uzun saatler ya da çok az maaş mı? Toezicht op de Sociale Wetten’e bildir. Adın gizli kalır.", trBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Henüz mola vermedim.',
  'be.c.health.s': "7 saattir molasız çalışıyorsun. Amirin devam etmeni istiyor. Ne yaparsın?", // nieuw, nalezen
  'be.c.health.o1': 'Şimdi molaya ihtiyacın olduğunu söylersin.',
  'be.c.health.o2': 'Devam eder, sonra daha uzun bir mola verirsin.',
  'be.c.health.o3': 'Tek kelime etmeden işi bırakıp eve gidersin.',
  'be.c.health.w': "6 saatten fazla çalıştığında mola bir iyilik değil, yasadır. Dinlenmek güvenli çalışmana da yardım eder.", // nieuw, nalezen
  'be.c.rights': 'Ayrımcılık ve işten çıkarılma',
  'be.c.rights.b': end("İşte ayrımcılık yasaktır, örneğin kökenin, dinin, cinsiyetin, yaşın ya da bir engelin yüzünden. Bunu Unia’ya ücretsiz bildirebilirsin. VDAB gibi Flaman kurumları için Vlaams Mensenrechteninstituut’a başvurursun. İşverenin sözleşmeni bitirebilir, ama sana bir ihbar süresi (opzegtermijn) vermeli ya da o sürenin maaşını ödemelidir (opzegvergoeding). Çoğu zaman nedenleri taahhütlü mektupla sorabilirsin. İşin bittiğinde bir C4 alırsın: işsizlik ödeneği için ona ihtiyacın var. İşten çıkarılmanla ilgili anlamadığın bir kâğıdı imzalama. Önce sendikadan (ABVV, ACV ya da ACLVB), iş yerindeki sendika temsilcisinden (syndicale afgevaardigde) ya da justitiehuis’ten yardım iste.", trBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Önce tavsiye almak istiyorum.',
  'be.c.rights.s': 'Patronun sana bir kâğıt veriyor: “Bugün imzala, anlaşmayla ayrılırsın.” Tam anlamıyorsun. Ne yaparsın?',
  'be.c.rights.o1': 'Henüz imzalamazsın. Zaman ister ve önce tavsiye alırsın.',
  'be.c.rights.o2': 'Patron sorun olmadığını söylediği için imzalarsın.',
  'be.c.rights.o3': 'Kâğıdı kaldırır ve bu konuda bir daha hiç konuşmazsın.',
  'be.c.rights.w': "İmzalarsan haklarını kaybedebilirsin: örneğin ihbar süreni ve bir süre işsizlik ödeneğini. Danışmak için zaman istemek normaldir ve serbesttir.", // nieuw, nalezen
};

export const pl: Gloss = {
  'be.w.arbowet': "ustawa o bezpieczeństwie i zdrowiu w pracy (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "inspekcja pracy (sprawdza zasady w pracy)", // nieuw, nalezen
  'be.s.health.3': "Zgłaszam to do inspekcji.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (pierwsza bezpłatna porada prawna)", // nieuw, nalezen
  'be.c.health': 'Przerwy i godziny pracy',
  'be.c.health.b': end("Prawo chroni twoje bezpieczeństwo i zdrowie w pracy (Welzijnswet). Pracujesz dłużej niż 6 godzin? Wtedy masz przerwę. Jeśli twoja branża nie ma innej zasady, trwa ona co najmniej 15 minut. Zwykle pracujesz najwyżej 8 godzin dziennie i średnio 38 godzin w tygodniu. Twoja branża może mieć inne zasady. Pracodawca musi dać ci za darmo środki ochrony, na przykład buty ochronne albo rękawice. Niebezpieczna praca? Zgłoś to do Toezicht op het Welzijn op het Werk. Za długie godziny albo za niska pensja? Zgłoś to do Toezicht op de Sociale Wetten. Twoje nazwisko pozostaje tajne.", plBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': { m: 'Nie miałem jeszcze przerwy.', f: 'Nie miałam jeszcze przerwy.', x: 'Wciąż czekam na przerwę.' },
  'be.c.health.s': { m: "Pracujesz od 7 godzin bez przerwy. Przełożony prosi, żebyś pracował dalej. Co robisz?", f: "Pracujesz od 7 godzin bez przerwy. Przełożony prosi, żebyś pracowała dalej. Co robisz?", x: "Pracujesz od 7 godzin bez przerwy. Przełożony prosi cię o dalszą pracę. Co robisz?" }, // nieuw, nalezen
  'be.c.health.o1': 'Mówisz, że teraz potrzebujesz przerwy.',
  'be.c.health.o2': 'Pracujesz dalej, a później robisz dłuższą przerwę.',
  'be.c.health.o3': 'Bez słowa wychodzisz z pracy do domu.',
  'be.c.health.w': "Gdy pracujesz dłużej niż 6 godzin, przerwa wynika z prawa, to nie jest przysługa. Odpoczynek pomaga też pracować bezpiecznie.", // nieuw, nalezen
  'be.c.rights': 'Dyskryminacja i zwolnienie',
  'be.c.rights.b': end("Dyskryminacja w pracy jest zakazana, na przykład z powodu pochodzenia, religii, płci, wieku albo niepełnosprawności. Możesz ją bezpłatnie zgłosić do Unia. W sprawie flamandzkich służb, takich jak VDAB, zwracasz się do Vlaams Mensenrechteninstituut. Pracodawca może rozwiązać twoją umowę, ale musi dać ci okres wypowiedzenia (opzegtermijn) albo zapłacić ci pensję za ten czas (opzegvergoeding). Często możesz listem poleconym zapytać o powody. Kiedy twoja praca się kończy, dostajesz C4: potrzebujesz go do zasiłku dla bezrobotnych. Nie podpisuj papieru o zwolnieniu, którego nie rozumiesz. Najpierw poproś o pomoc związek zawodowy (ABVV, ACV albo ACLVB), przedstawiciela związku w firmie (syndicale afgevaardigde) albo justitiehuis.", plBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Najpierw chcę poprosić o radę.',
  'be.c.rights.s': 'Szef daje ci papier: „Podpisz dzisiaj, wtedy odejdziesz za porozumieniem.” Nie rozumiesz go dobrze. Co robisz?',
  'be.c.rights.o1': 'Jeszcze nie podpisujesz. Prosisz o czas i najpierw szukasz porady.',
  'be.c.rights.o2': 'Podpisujesz, bo szef mówi, że wszystko w porządku.',
  'be.c.rights.o3': 'Odkładasz papier i nigdy o nim nie rozmawiasz.',
  'be.c.rights.w': "Jeśli podpiszesz, możesz stracić prawa: na przykład okres wypowiedzenia i na jakiś czas zasiłek dla bezrobotnych. Poproszenie o czas na poradę jest normalne i dozwolone.", // nieuw, nalezen
};

export const ro: Gloss = {
  'be.w.arbowet': "legea privind siguranța și sănătatea la locul de muncă (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "inspecția muncii (verifică regulile la locul de muncă)", // nieuw, nalezen
  'be.s.health.3': "Raportez asta la inspecție.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (primul sfat juridic gratuit)", // nieuw, nalezen
  'be.c.health': 'Pauze și ore de lucru',
  'be.c.health.b': end("Legea îți protejează siguranța și sănătatea la locul de muncă (Welzijnswet). Lucrezi mai mult de 6 ore? Atunci ai o pauză. Dacă sectorul tău nu are altă regulă, ea durează cel puțin 15 minute. De obicei lucrezi cel mult 8 ore pe zi și în medie 38 de ore pe săptămână. Sectorul tău poate avea alte reguli. Angajatorul trebuie să îți dea gratuit echipament de protecție, de exemplu încălțăminte de protecție sau mănuși. Muncă periculoasă? Raportează la Toezicht op het Welzijn op het Werk. Ore prea multe sau salariu prea mic? Raportează la Toezicht op de Sociale Wetten. Numele tău rămâne secret.", roBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Încă nu am avut pauză.',
  'be.c.health.s': "Ai lucrat 7 ore fără pauză. Șeful îți cere să continui. Ce faci?", // nieuw, nalezen
  'be.c.health.o1': 'Spui că acum ai nevoie de pauză.',
  'be.c.health.o2': 'Lucrezi mai departe și iei mai târziu o pauză mai lungă.',
  'be.c.health.o3': 'Pleci de la muncă acasă fără un cuvânt.',
  'be.c.health.w': "Când lucrezi mai mult de 6 ore, pauza e prevăzută de lege, nu e o favoare. Odihna te ajută și să lucrezi în siguranță.", // nieuw, nalezen
  'be.c.rights': 'Discriminare și concediere',
  'be.c.rights.b': end("Discriminarea la locul de muncă este interzisă, de exemplu din cauza originii, religiei, genului, vârstei sau a unui handicap. O poți raporta gratuit la Unia. Pentru serviciile flamande, de exemplu VDAB, te adresezi la Vlaams Mensenrechteninstituut. Angajatorul poate pune capăt contractului tău, dar trebuie să îți dea un preaviz (opzegtermijn) sau să îți plătească salariul pentru acea perioadă (opzegvergoeding). Deseori poți cere motivele printr-o scrisoare recomandată. Când munca ta se termină, primești un C4: ai nevoie de el pentru ajutorul de șomaj. Nu semna o hârtie despre concedierea ta pe care nu o înțelegi. Cere mai întâi ajutor de la sindicat (ABVV, ACV sau ACLVB), de la delegatul sindical de la firmă (syndicale afgevaardigde) sau de la justitiehuis.", roBase, 'abuse'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.rights.p': 'Vreau să cer întâi un sfat.',
  'be.c.rights.s': 'Șeful îți dă o hârtie: „Semnează azi și pleci de comun acord.” Nu o înțelegi bine. Ce faci?',
  'be.c.rights.o1': 'Nu semnezi încă. Ceri timp și ceri întâi un sfat.',
  'be.c.rights.o2': 'O semnezi, pentru că șeful spune că e în regulă.',
  'be.c.rights.o3': 'Pui hârtia deoparte și nu mai vorbești niciodată despre ea.',
  'be.c.rights.w': "Dacă semnezi, poți pierde drepturi: de exemplu preavizul și, pentru o vreme, ajutorul de șomaj. E normal și permis să ceri timp ca să te consulți.", // nieuw, nalezen
};

export const bg: Gloss = {
  'be.w.arbowet': "законът за безопасността и здравето при работа (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "трудовата инспекция (проверява правилата на работа)", // nieuw, nalezen
  'be.s.health.3': "Съобщавам за това на инспекцията.", // nieuw, nalezen
  'be.w.juridischloket': "justitiehuis (първи безплатен правен съвет)", // nieuw, nalezen
  'be.c.health': 'Почивки и работно време',
  'be.c.health.b': end("Законът пази твоята безопасност и здраве на работа (Welzijnswet). Работиш повече от 6 часа? Тогава имаш почивка. Ако в твоя сектор няма друго правило, тя е поне 15 минути. Обикновено работиш най-много 8 часа на ден и средно 38 часа седмично. Твоят сектор може да има други правила. Работодателят трябва да ти даде безплатно предпазни средства, например защитни обувки или ръкавици. Опасна работа? Съобщи на Toezicht op het Welzijn op het Werk. Твърде дълги часове или твърде ниска заплата? Съобщи на Toezicht op de Sociale Wetten. Името ти остава в тайна.", bgBase, 'advice'), // nieuw, nalezen // nagelezen AI ronde 3
  'be.c.health.p': { m: 'Още не съм имал почивка.', f: 'Още не съм имала почивка.', x: 'Още чакам почивка.' },
  'be.c.health.s': { m: "Работил си 7 часа без почивка. Началникът те моли да продължиш. Какво правиш?", f: "Работила си 7 часа без почивка. Началникът те моли да продължиш. Какво правиш?", x: "Работиш вече 7 часа без почивка. Началникът те моли да продължиш. Какво правиш?" }, // nieuw, nalezen
  'be.c.health.o1': 'Казваш, че сега ти трябва почивка.',
  'be.c.health.o2': 'Продължаваш и по-късно правиш по-дълга почивка.',
  'be.c.health.o3': 'Тръгваш си от работа, без да кажеш дума.',
  'be.c.health.w': "Когато работиш повече от 6 часа, почивката е по закон, а не услуга. Почивката ти помага и да работиш безопасно.", // nieuw, nalezen
  'be.c.rights': 'Дискриминация и уволнение',
  'be.c.rights.b': end("Дискриминацията на работа е забранена, например заради произход, религия, пол, възраст или увреждане. Можеш безплатно да съобщиш за нея на Unia. За фламандски служби, като VDAB, се обръщаш към Vlaams Mensenrechteninstituut. Работодателят може да прекрати договора ти, но трябва да ти даде срок на предизвестие (opzegtermijn) или да ти плати заплатата за това време (opzegvergoeding). Често можеш с препоръчано писмо да поискаш причините. Когато работата ти свърши, получаваш C4: трябва ти за обезщетението за безработица. Не подписвай документ за уволнението си, който не разбираш. Първо потърси помощ от синдиката (ABVV, ACV или ACLVB), от синдикалния представител във фирмата (syndicale afgevaardigde) или от justitiehuis.", bgBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Първо искам да потърся съвет.',
  'be.c.rights.s': 'Шефът ти дава документ: „Подпиши днес, тогава напускаш по взаимно съгласие.“ Не го разбираш добре. Какво правиш?',
  'be.c.rights.o1': 'Още не подписваш. Искаш време и първо търсиш съвет.',
  'be.c.rights.o2': 'Подписваш, защото шефът казва, че е наред.',
  'be.c.rights.o3': 'Прибираш документа и никога не говориш за него.',
  'be.c.rights.w': "Ако подпишеш, можеш да загубиш права: например предизвестието си и за известно време обезщетението за безработица. Да поискаш време за съвет е нормално и позволено.", // nieuw, nalezen
};

export const es: Gloss = {
  'be.w.arbowet': "la ley de seguridad y salud en el trabajo (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "la inspección de trabajo (controla las normas en el trabajo)", // nieuw, nalezen
  'be.s.health.3': "Lo denuncio a la inspección.", // nieuw, nalezen
  'be.w.juridischloket': "el justitiehuis (primer consejo legal gratis)", // nieuw, nalezen
  'be.c.health': 'Pausas y horas de trabajo',
  'be.c.health.b': end("La ley protege tu seguridad y tu salud en el trabajo (Welzijnswet). ¿Trabajas más de 6 horas? Entonces tienes una pausa. Si tu sector no tiene otra norma, dura al menos 15 minutos. Normalmente trabajas como máximo 8 horas al día y 38 horas a la semana de media. Tu sector puede tener otras normas. Tu empresa tiene que darte gratis el equipo de protección, como zapatos de seguridad o guantes. ¿Trabajo peligroso? Denúncialo a Toezicht op het Welzijn op het Werk. ¿Horarios demasiado largos o poco sueldo? Denúncialo a Toezicht op de Sociale Wetten. Tu nombre queda en secreto.", esBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Todavía no he tenido pausa.',
  'be.c.health.s': "Has trabajado 7 horas sin pausa. Tu encargado te pide que sigas. ¿Qué haces?", // nieuw, nalezen
  'be.c.health.o1': 'Dices que ahora necesitas tu pausa.',
  'be.c.health.o2': 'Sigues, y más tarde haces una pausa más larga.',
  'be.c.health.o3': 'Dejas el trabajo y te vas a casa sin decir nada.',
  'be.c.health.w': "Si trabajas más de 6 horas, la pausa es la ley, no un favor. Descansar también te ayuda a trabajar con seguridad.", // nieuw, nalezen
  'be.c.rights': 'Discriminación y despido',
  'be.c.rights.b': end("La discriminación en el trabajo está prohibida, por ejemplo por tu origen, tu religión, tu género, tu edad o una discapacidad. Puedes denunciarla gratis en Unia. Para servicios flamencos, como el VDAB, vas al Vlaams Mensenrechteninstituut. Tu empresa puede terminar tu contrato, pero tiene que darte un preaviso (opzegtermijn) o pagarte el sueldo de ese tiempo (opzegvergoeding). Muchas veces puedes pedir los motivos por carta certificada. Cuando tu trabajo termina, recibes un C4: lo necesitas para la prestación por desempleo. No firmes un papel sobre tu despido que no entiendes. Pide ayuda primero al sindicato (ABVV, ACV o ACLVB), al delegado sindical de tu empresa (syndicale afgevaardigde) o al justitiehuis.", esBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Primero quiero pedir consejo.',
  'be.c.rights.s': 'Tu jefe te da un papel: “Firma hoy, así te vas de mutuo acuerdo.” No lo entiendes bien. ¿Qué haces?',
  'be.c.rights.o1': 'Todavía no firmas. Pides tiempo y primero pides consejo.',
  'be.c.rights.o2': 'Lo firmas, porque el jefe dice que está bien.',
  'be.c.rights.o3': 'Guardas el papel y nunca hablas de ello.',
  'be.c.rights.w': "Si firmas, puedes perder derechos: por ejemplo tu preaviso, y durante un tiempo tu prestación por desempleo. Pedir tiempo para consultar es normal y está permitido.", // nieuw, nalezen
};

export const pt: Gloss = {
  'be.w.arbowet': "a lei da segurança e saúde no trabalho (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "a inspeção do trabalho (controla as regras no trabalho)", // nieuw, nalezen
  'be.s.health.3': "Eu denuncio isso à inspeção.", // nieuw, nalezen
  'be.w.juridischloket': "o justitiehuis (primeiro conselho jurídico grátis)", // nieuw, nalezen
  'be.c.health': 'Pausas e horário de trabalho',
  'be.c.health.b': end("A lei protege a tua segurança e a tua saúde no trabalho (Welzijnswet). Trabalhas mais de 6 horas? Então tens uma pausa. Se o teu setor não tiver outra regra, ela dura pelo menos 15 minutos. Normalmente trabalhas no máximo 8 horas por dia e 38 horas por semana, em média. O teu setor pode ter outras regras. O teu empregador tem de te dar o equipamento de proteção de graça, como sapatos de segurança ou luvas. Trabalho perigoso? Denuncia à Toezicht op het Welzijn op het Werk. Horários longos demais ou salário baixo demais? Denuncia à Toezicht op de Sociale Wetten. O teu nome fica em segredo.", ptBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Ainda não fiz pausa.',
  'be.c.health.s': "Trabalhaste 7 horas sem pausa. O teu chefe pede-te para continuares. O que fazes?", // nieuw, nalezen
  'be.c.health.o1': 'Dizes que agora precisas da tua pausa.',
  'be.c.health.o2': 'Continuas, e mais tarde fazes uma pausa mais longa.',
  'be.c.health.o3': 'Sais do trabalho e vais para casa sem dizer nada.',
  'be.c.health.w': "Quando trabalhas mais de 6 horas, a pausa é lei, não um favor. Descansar também te ajuda a trabalhar com segurança.", // nieuw, nalezen
  'be.c.rights': 'Discriminação e despedimento',
  'be.c.rights.b': end("A discriminação no trabalho é proibida, por exemplo por causa da tua origem, religião, género, idade ou deficiência. Podes denunciá-la de graça à Unia. Para serviços flamengos, como o VDAB, vais ao Vlaams Mensenrechteninstituut. O teu empregador pode acabar com o teu contrato, mas tem de te dar um aviso prévio (opzegtermijn) ou pagar o teu salário por esse tempo (opzegvergoeding). Muitas vezes podes pedir os motivos por carta registada. Quando o teu trabalho acaba, recebes um C4: precisas dele para o subsídio de desemprego. Não assines um papel sobre o teu despedimento que não entendes. Pede ajuda primeiro ao sindicato (ABVV, ACV ou ACLVB), ao delegado sindical da tua empresa (syndicale afgevaardigde) ou ao justitiehuis.", ptBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Primeiro quero pedir conselho.',
  'be.c.rights.s': 'O teu patrão dá-te um papel: "Assina hoje, assim sais por acordo." Não percebes bem. O que fazes?',
  'be.c.rights.o1': 'Ainda não assinas. Pedes tempo e primeiro pedes conselho.',
  'be.c.rights.o2': 'Assinas, porque o patrão diz que está tudo bem.',
  'be.c.rights.o3': 'Guardas o papel e nunca falas disso.',
  'be.c.rights.w': "Se assinares, podes perder direitos: por exemplo o teu aviso prévio, e durante algum tempo o teu subsídio de desemprego. Pedir tempo para pedir conselho é normal e permitido.", // nieuw, nalezen
};

export const fr: Gloss = {
  'be.w.arbowet': "la loi sur la sécurité et la santé au travail (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "l’inspection du travail (elle contrôle les règles au travail)", // nieuw, nalezen
  'be.s.health.3': "Je le signale à l’inspection.", // nieuw, nalezen
  'be.w.juridischloket': "le justitiehuis (maison de justice : premier conseil juridique gratuit)", // nieuw, nalezen
  'be.c.health': 'Les pauses et les horaires de travail',
  'be.c.health.b': end("La loi protège ta sécurité et ta santé au travail (Welzijnswet). Tu travailles plus de 6 heures ? Alors tu as droit à une pause. Si ton secteur n’a pas d’autre règle, elle dure au moins 15 minutes. Normalement, tu travailles au maximum 8 heures par jour et 38 heures par semaine en moyenne. Ton secteur peut avoir d’autres règles. Ton employeur doit te donner gratuitement l’équipement de protection, comme des chaussures de sécurité ou des gants. Travail dangereux ? Signale-le à Toezicht op het Welzijn op het Werk (Contrôle du bien-être au travail). Horaires trop longs ou salaire trop bas ? Signale-le à Toezicht op de Sociale Wetten (Contrôle des lois sociales). Ton nom reste secret.", frBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Je n’ai pas encore eu de pause.',
  'be.c.health.s': "Tu as travaillé 7 heures sans pause. Ton responsable te demande de continuer. Que fais-tu ?", // nieuw, nalezen
  'be.c.health.o1': 'Dis que tu as besoin de ta pause maintenant.',
  'be.c.health.o2': 'Continue, et prends une pause plus longue plus tard.',
  'be.c.health.o3': 'Quitte le travail et rentre chez toi sans rien dire.',
  'be.c.health.w': "Quand tu travailles plus de 6 heures, la pause, c’est la loi, pas une faveur. Le repos t’aide aussi à travailler en sécurité.", // nieuw, nalezen
  'be.c.rights': 'Discrimination et licenciement',
  'be.c.rights.b': end("La discrimination au travail est interdite, par exemple à cause de ton origine, de ta religion, de ton genre, de ton âge ou d’un handicap. Tu peux la signaler gratuitement à Unia. Pour les services flamands, comme le VDAB, tu t’adresses au Vlaams Mensenrechteninstituut. Ton employeur peut mettre fin à ton contrat, mais il doit te donner un préavis (opzegtermijn) ou te payer ton salaire pour cette période (opzegvergoeding : indemnité de préavis). Souvent, tu peux demander les motifs par lettre recommandée. Quand ton travail s’arrête, tu reçois un C4 : tu en as besoin pour les allocations de chômage. Ne signe pas un papier sur ton licenciement que tu ne comprends pas. Demande d’abord de l’aide au syndicat (ABVV, ACV ou ACLVB), au délégué syndical de ton entreprise (syndicale afgevaardigde) ou au justitiehuis.", frBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Je veux d’abord demander conseil.',
  'be.c.rights.s': 'Ton patron te donne un papier : “Signe aujourd’hui, et tu pars d’un commun accord.” Tu ne le comprends pas bien. Que fais-tu ?',
  'be.c.rights.o1': 'Ne signe pas encore. Demande du temps et demande d’abord conseil.',
  'be.c.rights.o2': 'Signe, parce que le patron dit que c’est bon.',
  'be.c.rights.o3': 'Range le papier et n’en parle jamais.',
  'be.c.rights.w': "Si tu signes, tu peux perdre des droits : par exemple ton préavis, et pendant un temps tes allocations de chômage. Demander du temps pour te faire conseiller, c’est normal et permis.", // nieuw, nalezen
};

export const de: Gloss = {
  'be.w.arbowet': "das Gesetz über Sicherheit und Gesundheit bei der Arbeit (Welzijnswet)", // nieuw, nalezen
  'be.w.arbeidsinspectie': "die Arbeitsinspektion (sie kontrolliert die Regeln bei der Arbeit)", // nieuw, nalezen
  'be.s.health.3': "Ich melde es bei der Inspektion.", // nieuw, nalezen
  'be.w.juridischloket': "das Justitiehuis (kostenlose erste Rechtsberatung)", // nieuw, nalezen
  'be.c.health': 'Pausen und Arbeitszeiten',
  'be.c.health.b': end("Das Gesetz schützt deine Sicherheit und Gesundheit bei der Arbeit (Welzijnswet). Arbeitest du mehr als 6 Stunden? Dann bekommst du eine Pause. Hat deine Branche keine andere Regel, dauert sie mindestens 15 Minuten. Normalerweise arbeitest du höchstens 8 Stunden am Tag und im Durchschnitt 38 Stunden pro Woche. Deine Branche kann andere Regeln haben. Dein Arbeitgeber muss dir Schutzausrüstung, zum Beispiel Sicherheitsschuhe oder Handschuhe, kostenlos geben. Unsichere Arbeit? Melde es bei Toezicht op het Welzijn op het Werk. Zu lange Arbeitszeiten oder zu wenig Lohn? Melde es bei Toezicht op de Sociale Wetten. Dein Name bleibt geheim.", deBase, 'advice'), // nieuw, nalezen
  'be.c.health.p': 'Ich hatte noch keine Pause.',
  'be.c.health.s': "Du hast 7 Stunden ohne Pause gearbeitet. Dein Vorgesetzter bittet dich weiterzumachen. Was machst du?", // nieuw, nalezen
  'be.c.health.o1': 'Sag, dass du jetzt deine Pause brauchst.',
  'be.c.health.o2': 'Mach weiter und mach später eine längere Pause.',
  'be.c.health.o3': 'Hör auf zu arbeiten und geh ohne ein Wort nach Hause.',
  'be.c.health.w': "Wenn du mehr als 6 Stunden arbeitest, ist eine Pause Gesetz, kein Gefallen. Erholung hilft dir auch, sicher zu arbeiten.", // nieuw, nalezen
  'be.c.rights': 'Diskriminierung und Kündigung',
  'be.c.rights.b': end("Diskriminierung bei der Arbeit ist verboten, zum Beispiel wegen deiner Herkunft, Religion, deines Geschlechts, deines Alters oder einer Behinderung. Du kannst sie kostenlos bei Unia melden. Bei flämischen Diensten, zum Beispiel beim VDAB, gehst du zum Vlaams Mensenrechteninstituut. Dein Arbeitgeber darf deinen Vertrag beenden, muss dir aber eine Kündigungsfrist (opzegtermijn) geben oder deinen Lohn für diese Zeit zahlen (opzegvergoeding). Oft darfst du die Gründe mit einem Einschreiben erfragen. Wenn deine Arbeit endet, bekommst du ein C4: Das brauchst du für das Arbeitslosengeld. Unterschreib kein Papier über deine Kündigung, das du nicht verstehst. Hol dir zuerst Hilfe bei der Gewerkschaft (ABVV, ACV oder ACLVB), beim Gewerkschaftsvertreter im Betrieb (syndicale afgevaardigde) oder im Justitiehuis.", deBase, 'abuse'), // nieuw, nalezen
  'be.c.rights.p': 'Ich möchte mich zuerst beraten lassen.',
  'be.c.rights.s': 'Dein Chef gibt dir ein Papier: „Unterschreib heute, dann gehst du im gegenseitigen Einvernehmen.“ Du verstehst es nicht gut. Was machst du?',
  'be.c.rights.o1': 'Unterschreib noch nicht. Bitte um Zeit und lass dich zuerst beraten.',
  'be.c.rights.o2': 'Unterschreib, der Chef sagt ja, es ist in Ordnung.',
  'be.c.rights.o3': 'Leg das Papier weg und sprich nie darüber.',
  'be.c.rights.w': "Wenn du unterschreibst, kannst du Rechte verlieren: zum Beispiel deine Kündigungsfrist und für eine Zeit dein Arbeitslosengeld. Um Zeit für eine Beratung zu bitten ist normal und erlaubt.", // nieuw, nalezen
};
