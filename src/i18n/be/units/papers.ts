import type { Gloss } from '../types';

// The translations of the Belgian version of u.papers (src/content/taalBe/units/papers.ts), one
// object per help language: het rijksregisternummer, de verblijfskaart, het ziekenfonds, itsme and
// the eID, de huurwaarborg, afhouden, and the tips about your papers and housing from your employer.
// Gendered languages use a form without gender where they can (Arabic: the verbal noun; Tigrinya:
// the polite plural). Every line: // nieuw, nalezen

export const ar: Gloss = {
    'be.w.bsn': "رقم السجل الوطني (رقمك في بلجيكا)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "بطاقة الإقامة (لغير البلجيكيين)", // nieuw, nalezen
    'be.w.zorgverzekering': "صندوق التأمين الصحي (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "أسجّل الدخول بـitsme أو ببطاقة eID.", // nieuw, nalezen
    'be.c.bsn.q': "هل يمكنني أن أرى بطاقة إقامتك؟", // nieuw, nalezen
    'be.c.bsn.a': "نعم، تفضّل. رقم سجلي الوطني مكتوب عليها.", // nieuw, nalezen
    'be.w.borg': "تأمين الإيجار (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "خصم (من الأجر)", // nieuw, nalezen
    'be.s.housing.2': "هل أسترجع تأمين الإيجار؟", // nieuw, nalezen
    'be.c.housing.q': "سنخصم الإيجار من أجرك.", // nieuw, nalezen
    'be.c.bsn': "رقم السجل الوطني: الحفاظ عليه", // nieuw, nalezen
    'be.c.bsn.b': "القدوم للعيش في بلجيكا؟ عندها يكون التسجيل في بلدية (gemeente) العنوان. تأتي بطاقة: بطاقة هوية (eID) للبلجيكيين، وبطاقة إقامة (verblijfskaart) للآخرين. عليها رقم السجل الوطني (rijksregisternummer). لا تسجيل في السجل بعد؟ عندها يُعطى bisnummer. هذا الرقم لازم للعمل: صاحب العمل يطلبه. البطاقة نفسها لا تُعطى أبداً لصاحب العمل. انتقال إلى بيت آخر؟ إبلاغ البلدية خلال 8 أيام عمل. الدخول إلى مواقع الحكومة يكون بـitsme أو بـeID: الرموز لا تُعطى لأحد أبداً. الانضمام بسرعة إلى صندوق تأمين صحي (ziekenfonds). معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).", // nieuw, nalezen
    'be.c.bsn.p': "لماذا تحتاج رقم سجلي الوطني؟", // nieuw, nalezen
    'be.c.bsn.s': "شخص مجهول يعرض عملاً على واتساب. يطلب صورة بطاقة الإقامة ورمز itsme. ما التصرف الصحيح؟", // nieuw, nalezen
    'be.c.bsn.o1': "عدم إعطاء رمز itsme أبداً. التحقق أولاً من هويته.", // nieuw, nalezen
    'be.c.bsn.o2': "إرسال كل شيء بسرعة، للحصول على العمل.", // nieuw, nalezen
    'be.c.bsn.o3': "إرسال صورة البطاقة فقط، لا رمز itsme.", // nieuw, nalezen
    'be.c.bsn.w': "بـitsme أو بنسخة من البطاقة، يستطيع آخرون استعمال الاسم، مثلاً لقروض أو إعانات. صاحب العمل الحقيقي يحتاج رقم السجل الوطني، لكن أبداً لا يحتاج رمز itsme.", // nieuw, nalezen
    'be.c.housing': "السكن من صاحب العمل", // nieuw, nalezen
    'be.c.housing.b': "صاحب العمل أو مكتب العمل المؤقت (interimkantoor) يرتّب السكن؟ عندها يجب أن يكون عقد الإيجار منفصلاً عن عقد العمل. المطلوب عقد إيجار مكتوب وإثبات لما يُدفع. صاحب العمل لا يخصم مالاً من الأجر إلا إذا سمح القانون: الفحص في loonbrief. في فلاندرن تأمين الإيجار (huurwaarborg) لا يزيد عن 3 أشهر إيجار، في حساب بنكي مجمّد باسم المستأجر. يُسترجع عند المغادرة، ناقص الضرر الحقيقي. تسجيل العنوان في البلدية (gemeente). سكن غير آمن، تهديدات أو تكاليف غير عادلة؟ CAW يساعد مجاناً. انتهى العمل؟ طلب النصيحة قبل مغادرة البيت. معلومات عامة. لوضعك أنت: اسأل النقابة أو justitiehuis (استشارة قانونية مجانية) أو Payoke.", // nieuw, nalezen
    'be.c.housing.p': "هل يمكنني الحصول على إثبات أنني دفعت؟", // nieuw, nalezen
    'be.c.housing.s': "العمل انتهى. مكتب العمل المؤقت يقول: «يجب مغادرة البيت غداً.» ما التصرف الصحيح؟", // nieuw, nalezen
    'be.c.housing.o1': "طلب النصيحة أولاً من justitiehuis أو النقابة.", // nieuw, nalezen
    'be.c.housing.o2': "المغادرة فوراً ونسيان التأمين.", // nieuw, nalezen
    'be.c.housing.o3': "البقاء، والتوقف عن الرد على المكتب.", // nieuw, nalezen
    'be.c.housing.w': "لعقد الإيجار قواعده الخاصة، منفصلة عن العمل. فيه مدة البقاء المسموحة. النصيحة المجانية تساعد على معرفة الحقوق، ومنها حق التأمين.", // nieuw, nalezen
};

export const ti: Gloss = {
    'be.w.bsn': "ቁጽሪ ሃገራዊ መዝገብ (ቁጽርኹም ኣብ ቤልጅዩም)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "ካርድ መንበሪ (ንዘይቤልጅዩማውያን)", // nieuw, nalezen
    'be.w.zorgverzekering': "ፈንድ መድሕን ጥዕና (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "ብitsme ወይ ብeID ይኣቱ።", // nieuw, nalezen
    'be.c.bsn.q': "ካርድ መንበሪኹም ክርኢ ይኽእል ዶ?", // nieuw, nalezen
    'be.c.bsn.a': "እወ፡ እንሆ። ቁጽሪ ሃገራዊ መዝገበይ ኣብኡ ኣሎ።", // nieuw, nalezen
    'be.w.borg': "ውሕስነት ክራይ (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "ምቕናስ (ካብ ደሞዝ)", // nieuw, nalezen
    'be.s.housing.2': "ውሕስነት ክራይ ይምለሰለይ ዶ?", // nieuw, nalezen
    'be.c.housing.q': "ክራይ ካብ ደሞዝኩም ክንቕንሶ ኢና።", // nieuw, nalezen
    'be.c.bsn': "ቁጽሪ ሃገራዊ መዝገብኩም ሓልዉ", // nieuw, nalezen
    'be.c.bsn.b': "ኣብ ቤልጅዩም ክትነብሩ መጺእኩም ዶ? ሽዑ ኣብ gemeente ናይ ኣድራሻኹም ትምዝገቡ። ካርድ ትረኽቡ፡ ንቤልጅዩማውያን መንነት ካርድ (eID)፡ ንኻልኦት ካርድ መንበሪ (verblijfskaart)። ኣብኡ ቁጽሪ ሃገራዊ መዝገብኩም (rijksregisternummer) ኣሎ። ገና ኣብ መዝገብ የለኹምን? ሽዑ bisnummer ትረኽቡ። ንምስራሕ እቲ ቁጽሪ የድልየኩም፡ ኣስራሒኹም ይሓትቶ። ነቲ ካርድ ባዕሉ ንኣስራሒኹም ፈጺምኩም ኣይትሃቡ። ገዛ ትቕይሩ ዶ? ኣብ ውሽጢ 8 መዓልታት ስራሕ ንgemeente ሓብሩ። ናብ ናይ መንግስቲ መርበብ ብitsme ወይ ብeID ትኣትዉ፡ ኮድኩም ንዝኾነ ሰብ ፈጺምኩም ኣይትሃቡ። ቀልጢፍኩም ኣብ ziekenfonds (ፈንድ መድሕን ጥዕና) ተጸንበሩ። ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።", // nieuw, nalezen
    'be.c.bsn.p': "ስለምንታይ ቁጽሪ ሃገራዊ መዝገበይ የድልየኩም?", // nieuw, nalezen
    'be.c.bsn.s': "ዘይትፈልጥዎ ሰብ ብWhatsApp ስራሕ ይህበኩም። ስእሊ ካርድ መንበሪኹምን ኮድ itsmeኹምን ይሓተኩም። እንታይ ትገብሩ?", // nieuw, nalezen
    'be.c.bsn.o1': "ኮድ itsme ፈጺምኩም ኣይትሃቡ። ቅድም መን ምዃኑ ኣረጋግጹ።", // nieuw, nalezen
    'be.c.bsn.o2': "ነቲ ስራሕ ንምርካብ ኩሉ ቀልጢፍኩም ስደዱ።", // nieuw, nalezen
    'be.c.bsn.o3': "ስእሊ ካርድ ጥራይ ስደዱ፡ ኮድ itsme ኣይኮነን።", // nieuw, nalezen
    'be.c.bsn.w': "ብitsmeኹም ወይ ብቕዳሕ ካርድኩም፡ ካልኦት ሰባት ስምኩም ክጥቀሙ ይኽእሉ፡ ንኣብነት ንልቓሕ ወይ ሓገዝ። ሓቀኛ ኣስራሒ ቁጽሪ ሃገራዊ መዝገብኩም የድልዮ፡ ኮድ itsme ግን ፈጺሙ ኣየድልዮን።", // nieuw, nalezen
    'be.c.housing': "ካብ ኣስራሒ ዝወሃብ መንበሪ", // nieuw, nalezen
    'be.c.housing.b': "ኣስራሒኹም ወይ interimkantoor መንበሪ የዳልወልኩም ዶ? ሽዑ ውዕል ክራይ ካብ ውዕል ስራሕ ተፈልዩ ክኸውን ኣለዎ። ብጽሑፍ ውዕል ክራይን ናይ ዝኸፈልኩምዎ መረጋገጺን ሕተቱ። ኣስራሒኹም ሕጊ እንተ ፈቒዱ ጥራይ ካብ ደሞዝኩም ገንዘብ ክቕንስ ይኽእል፡ ኣብ loonbrief ተቖጻጸሩ። ኣብ ፍላንደርስ ውሕስነት ክራይ (huurwaarborg) ዝበዝሐ 3 ኣዋርሕ ክራይ እዩ፡ ኣብ ብስምኩም ዝተዓጸወ ሕሳብ ባንኪ። ክትወጹ ከለኹም ትረኽብዎ፡ ሓቀኛ ጉድኣት ተቐኒሱ። ኣድራሻኹም ኣብ gemeente ኣመዝግቡ። ዘይውሑስ መንበሪ፡ ምፍርራሕ ወይ ዘይፍትሓዊ ወጻኢታት? CAW ብናጻ ይሕግዝ። ስራሕኩም ይውዳእ ዶ? ቅድሚ ካብ ገዛኹም ምውጻእ ምኽሪ ሕተቱ። ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንማሕበር ሰራሕተኛታት፡ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ወይ ንPayoke ሕተቱ።", // nieuw, nalezen
    'be.c.housing.p': "ከም ዝኸፈልኩ መረጋገጺ ክረክብ ይኽእል ዶ?", // nieuw, nalezen
    'be.c.housing.s': "ስራሕኩም ይውዳእ። interimkantoor ይብል፡ «ጽባሕ ካብቲ ገዛ ክትወጹ ኣለኩም።» እንታይ ትገብሩ?", // nieuw, nalezen
    'be.c.housing.o1': "ቅድም ካብ justitiehuis ወይ ማሕበር ሰራሕተኛታት ምኽሪ ሕተቱ።", // nieuw, nalezen
    'be.c.housing.o2': "ብኡንብኡ ውጹ፡ ውሕስነትኩም ድማ ረስዑ።", // nieuw, nalezen
    'be.c.housing.o3': "ጽንሑ፡ ንinterimkantoor ድማ ምምላስ ኣቋርጹ።", // nieuw, nalezen
    'be.c.housing.w': "ውዕል ክራይ ካብ ስራሕኩም ዝተፈልየ ናቱ ሕግታት ኣለዎ። ክንደይ ግዜ ክትጸንሑ ከም ትኽእሉ ይነግር። ናጻ ምኽሪ መሰልኩም ንምፍላጥ ይሕግዝ፡ ብዛዕባ ውሕስነት እውን።", // nieuw, nalezen
};

export const fa: Gloss = {
    'be.w.bsn': "شمارهٔ ثبت ملی (شمارهٔ تو در بلژیک)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "کارت اقامت (برای کسانی که بلژیکی نیستند)", // nieuw, nalezen
    'be.w.zorgverzekering': "صندوق بیمهٔ درمانی (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "با itsme یا با eID خودم وارد می‌شوم.", // nieuw, nalezen
    'be.c.bsn.q': "می‌توانم کارت اقامتت را ببینم؟", // nieuw, nalezen
    'be.c.bsn.a': "بله، بفرمایید. شمارهٔ ثبت ملی‌ام رویش است.", // nieuw, nalezen
    'be.w.borg': "ودیعهٔ اجاره (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "کم کردن (از حقوق)", // nieuw, nalezen
    'be.s.housing.2': "ودیعهٔ اجاره را پس می‌گیرم؟", // nieuw, nalezen
    'be.c.housing.q': "اجاره را از حقوقت کم می‌کنیم.", // nieuw, nalezen
    'be.c.bsn': "شمارهٔ ثبت ملی‌ات: مراقبش باش", // nieuw, nalezen
    'be.c.bsn.b': "برای زندگی به بلژیک آمده‌ای؟ پس در شهرداری (gemeente) محل نشانی‌ات ثبت‌نام می‌کنی. یک کارت می‌گیری: کارت شناسایی (eID) برای بلژیکی‌ها، کارت اقامت (verblijfskaart) برای دیگران. روی آن شمارهٔ ثبت ملی‌ات (rijksregisternummer) است. هنوز در ثبت نیستی؟ پس یک bisnummer می‌گیری. این شماره را برای کار لازم داری: کارفرما آن را می‌خواهد. خود کارت را هرگز به کارفرما نده. اسباب‌کشی می‌کنی؟ ظرف 8 روز کاری به شهرداری خبر بده. با itsme یا eID وارد سایت‌های دولتی می‌شوی: کدهایت را هرگز به کسی نده. زود عضو یک ziekenfonds (صندوق بیمهٔ درمانی) شو. اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.", // nieuw, nalezen
    'be.c.bsn.p': "چرا شمارهٔ ثبت ملی مرا لازم دارید؟", // nieuw, nalezen
    'be.c.bsn.s': "کسی که نمی‌شناسی در واتس‌اپ به تو کار پیشنهاد می‌کند. عکس کارت اقامت و کد itsme‌ات را می‌خواهد. چه کار می‌کنی؟", // nieuw, nalezen
    'be.c.bsn.o1': "کد itsme را هرگز نده. اول ببین او کیست.", // nieuw, nalezen
    'be.c.bsn.o2': "همه‌چیز را زود بفرست تا کار را بگیری.", // nieuw, nalezen
    'be.c.bsn.o3': "فقط عکس کارت را بفرست، نه کد itsme را.", // nieuw, nalezen
    'be.c.bsn.w': "با itsme تو یا کپی کارتت، دیگران می‌توانند از نام تو استفاده کنند، مثلاً برای وام یا کمک‌هزینه. کارفرمای واقعی شمارهٔ ثبت ملی‌ات را لازم دارد، ولی هرگز کد itsme را نه.", // nieuw, nalezen
    'be.c.housing': "مسکن از طرف کارفرما", // nieuw, nalezen
    'be.c.housing.b': "کارفرما یا دفتر کاریابی موقت (interimkantoor) خانه‌ات را جور می‌کند؟ پس قرارداد اجاره باید از قرارداد کار جدا باشد. قرارداد اجارهٔ کتبی و رسید پرداخت‌هایت را بخواه. کارفرما فقط وقتی می‌تواند از حقوقت پول کم کند که قانون اجازه بدهد: آن را در loonbrief چک کن. در فلاندر ودیعهٔ اجاره (huurwaarborg) حداکثر 3 ماه اجاره است، در یک حساب بانکی مسدود به نام خودت. وقتی می‌روی آن را پس می‌گیری، منهای خسارت واقعی. نشانی‌ات را در شهرداری (gemeente) ثبت کن. خانهٔ ناامن، تهدید یا هزینه‌های ناعادلانه؟ CAW رایگان کمک می‌کند. کارت تمام می‌شود؟ پیش از ترک خانه مشورت بگیر. اطلاعات کلی. برای وضعیت خودت: از اتحادیهٔ کارگری، justitiehuis (مشاورهٔ حقوقی رایگان) یا Payoke بپرس.", // nieuw, nalezen
    'be.c.housing.p': "می‌شود رسیدی بگیرم که پرداخت کرده‌ام؟", // nieuw, nalezen
    'be.c.housing.s': "کارت تمام می‌شود. دفتر کاریابی موقت می‌گوید: «باید فردا از خانه بروی.» چه کار می‌کنی؟", // nieuw, nalezen
    'be.c.housing.o1': "اول از justitiehuis یا اتحادیه مشورت بخواه.", // nieuw, nalezen
    'be.c.housing.o2': "فوراً برو و ودیعه را فراموش کن.", // nieuw, nalezen
    'be.c.housing.o3': "بمان، و دیگر به دفتر جواب نده.", // nieuw, nalezen
    'be.c.housing.w': "قرارداد اجاره قانون‌های خودش را دارد، جدا از کارت. در آن آمده تا کی می‌توانی بمانی. مشاورهٔ رایگان کمک می‌کند حقوقت را بدانی، دربارهٔ ودیعه هم.", // nieuw, nalezen
};

export const prs: Gloss = {
    'be.w.bsn': "نمبر ثبت ملی (نمبر شما در بلجیم)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "کارت اقامت (برای کسانی که بلجیمی نیستند)", // nieuw, nalezen
    'be.w.zorgverzekering': "صندوق بیمهٔ صحی (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "با itsme یا با eID خود داخل می‌شوم.", // nieuw, nalezen
    'be.c.bsn.q': "می‌توانم کارت اقامت تان را ببینم؟", // nieuw, nalezen
    'be.c.bsn.a': "بلی، بفرمایید. نمبر ثبت ملی من روی آن است.", // nieuw, nalezen
    'be.w.borg': "ضمانت کرایه (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "کم کردن (از معاش)", // nieuw, nalezen
    'be.s.housing.2': "ضمانت کرایه را پس می‌گیرم؟", // nieuw, nalezen
    'be.c.housing.q': "کرایه را از معاش تان کم می‌کنیم.", // nieuw, nalezen
    'be.c.bsn': "نمبر ثبت ملی تان: از آن مواظبت کنید", // nieuw, nalezen
    'be.c.bsn.b': "برای زندگی به بلجیم آمده‌اید؟ پس در شاروالی (gemeente) آدرس خود ثبت نام می‌کنید. یک کارت می‌گیرید: کارت هویت (eID) برای بلجیمی‌ها، کارت اقامت (verblijfskaart) برای دیگران. روی آن نمبر ثبت ملی شما (rijksregisternummer) است. هنوز در ثبت نیستید؟ پس یک bisnummer می‌گیرید. این نمبر را برای کار لازم دارید: کارفرما آن را می‌خواهد. خود کارت را هرگز به کارفرما ندهید. کوچ می‌کنید؟ در ظرف 8 روز کاری به شاروالی خبر بدهید. با itsme یا eID به ویب‌سایت‌های دولت داخل می‌شوید: کودهای خود را هرگز به کسی ندهید. زود عضو یک ziekenfonds (صندوق بیمهٔ صحی) شوید. معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.bsn.p': "چرا نمبر ثبت ملی مرا کار دارید؟", // nieuw, nalezen
    'be.c.bsn.s': "کسی که نمی‌شناسید در واتس‌اپ به شما کار پیشنهاد می‌کند. عکس کارت اقامت و کود itsme شما را می‌خواهد. چه می‌کنید؟", // nieuw, nalezen
    'be.c.bsn.o1': "کود itsme را هرگز ندهید. اول ببینید او کیست.", // nieuw, nalezen
    'be.c.bsn.o2': "همه چیز را زود بفرستید تا کار را بگیرید.", // nieuw, nalezen
    'be.c.bsn.o3': "تنها عکس کارت را بفرستید، نه کود itsme را.", // nieuw, nalezen
    'be.c.bsn.w': "با itsme شما یا کاپی کارت تان، دیگران می‌توانند از نام شما استفاده کنند، مثلاً برای قرضه یا کمک‌پول. کارفرمای واقعی نمبر ثبت ملی شما را لازم دارد، ولی هرگز کود itsme را نه.", // nieuw, nalezen
    'be.c.housing': "خانه از طرف کارفرما", // nieuw, nalezen
    'be.c.housing.b': "کارفرما یا دفتر کاریابی موقت (interimkantoor) خانهٔ شما را جور می‌کند؟ پس قرارداد کرایه باید از قرارداد کار جدا باشد. قرارداد کرایهٔ کتبی و رسید پرداخت‌های خود را بخواهید. کارفرما تنها وقتی از معاش تان پول کم کرده می‌تواند که قانون اجازه بدهد: آن را در loonbrief چک کنید. در فلاندر ضمانت کرایه (huurwaarborg) حداکثر 3 ماه کرایه است، در یک حساب بانکی مسدود به نام خود تان. وقتی می‌روید آن را پس می‌گیرید، منهای خسارهٔ واقعی. آدرس خود را در شاروالی (gemeente) ثبت کنید. خانهٔ ناامن، تهدید یا مصارف ناعادلانه؟ CAW رایگان کمک می‌کند. کار تان تمام می‌شود؟ پیش از ترک خانه مشوره بگیرید. معلومات عمومی. برای وضعیت خود تان: از اتحادیهٔ کارگری، justitiehuis (مشورهٔ حقوقی رایگان) یا Payoke بپرسید.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.housing.p': "می‌شود رسیدی بگیرم که پرداخته‌ام؟", // nieuw, nalezen
    'be.c.housing.s': "کار تان تمام می‌شود. دفتر کاریابی موقت می‌گوید: «باید فردا از خانه بروید.» چه می‌کنید؟", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.housing.o1': "اول از justitiehuis یا اتحادیه مشوره بخواهید.", // nieuw, nalezen
    'be.c.housing.o2': "فوراً بروید و ضمانت را فراموش کنید.", // nieuw, nalezen
    'be.c.housing.o3': "بمانید، و دیگر به دفتر جواب ندهید.", // nieuw, nalezen
    'be.c.housing.w': "قرارداد کرایه مقررات خود را دارد، جدا از کار تان. در آن نوشته است تا چه وقت می‌توانید بمانید. مشورهٔ رایگان کمک می‌کند حقوق تان را بدانید، دربارهٔ ضمانت هم.", // nieuw, nalezen
};

export const uk: Gloss = {
    'be.w.bsn': "номер національного реєстру (твій номер у Бельгії)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "посвідка на проживання (для тих, хто не бельгієць)", // nieuw, nalezen
    'be.w.zorgverzekering': "лікарняна каса (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Я входжу через itsme або через свою eID.", // nieuw, nalezen
    'be.c.bsn.q': "Можна подивитися твою посвідку на проживання?", // nieuw, nalezen
    'be.c.bsn.a': "Так, ось. Мій номер національного реєстру є на ній.", // nieuw, nalezen
    'be.w.borg': "орендна застава (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "утримувати (із зарплати)", // nieuw, nalezen
    'be.s.housing.2': "Чи я отримаю орендну заставу назад?", // nieuw, nalezen
    'be.c.housing.q': "Оренду ми утримуємо з твоєї зарплати.", // nieuw, nalezen
    'be.c.bsn': "Твій номер національного реєстру: бережи його", // nieuw, nalezen
    'be.c.bsn.b': "Ти приїхав / приїхала жити в Бельгію? Тоді ти реєструєшся в громаді (gemeente) за своєю адресою. Ти отримуєш картку: посвідчення особи (eID) для бельгійців, посвідку на проживання (verblijfskaart) для інших. На ній є твій номер національного реєстру (rijksregisternummer). Тебе ще немає в реєстрі? Тоді ти отримуєш bisnummer. Цей номер потрібен для роботи: роботодавець його запитає. Саму картку ніколи не віддавай роботодавцю. Переїжджаєш? Повідом громаду протягом 8 робочих днів. До сайтів держави ти входиш через itsme або eID: ніколи нікому не давай свої коди. Швидко вступи до лікарняної каси (ziekenfonds). Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen
    'be.c.bsn.p': "Навіщо вам мій номер національного реєстру?", // nieuw, nalezen
    'be.c.bsn.s': "Незнайомець пропонує тобі роботу у WhatsApp. Він просить фото твоєї посвідки на проживання і твій код itsme. Що ти зробиш?", // nieuw, nalezen
    'be.c.bsn.o1': "Ніколи не даси код itsme. Спершу перевіриш, хто він.", // nieuw, nalezen
    'be.c.bsn.o2': "Швидко надішлеш усе, щоб отримати роботу.", // nieuw, nalezen
    'be.c.bsn.o3': "Надішлеш тільки фото картки, а не код itsme.", // nieuw, nalezen
    'be.c.bsn.w': "З твоїм itsme або копією твоєї картки інші люди можуть користуватися твоїм ім’ям, наприклад для кредитів чи допомог. Справжньому роботодавцю потрібен твій номер національного реєстру, але ніколи — твій код itsme.", // nieuw, nalezen
    'be.c.housing': "Житло від роботодавця", // nieuw, nalezen
    'be.c.housing.b': "Твій роботодавець або агентство тимчасової роботи (interimkantoor) влаштовує тобі житло? Тоді договір оренди має бути окремо від трудового договору. Попроси письмовий договір оренди й підтвердження того, що ти платиш. Роботодавець може утримувати гроші з зарплати тільки тоді, коли це дозволяє закон: перевір це у своєму loonbrief. У Фландрії застава (huurwaarborg) — щонайбільше 3 місяці оренди, на заблокованому банківському рахунку на твоє ім’я. Ти отримуєш її назад, коли виїжджаєш, мінус справжні пошкодження. Зареєструй свою адресу в громаді (gemeente). Небезпечне житло, погрози чи несправедливі витрати? CAW допомагає безкоштовно. Твоя робота закінчується? Попроси поради, перш ніж залишати житло. Це загальна інформація. Щодо твоєї ситуації запитай профспілку, justitiehuis (безкоштовна юридична порада) або Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Можна мені підтвердження, що я заплатив / заплатила?", // nieuw, nalezen
    'be.c.housing.s': "Твоя робота закінчується. Агентство каже: „Завтра ти мусиш виїхати з житла.“ Що ти зробиш?", // nieuw, nalezen
    'be.c.housing.o1': "Спершу попросиш поради в justitiehuis або профспілці.", // nieuw, nalezen
    'be.c.housing.o2': "Одразу поїдеш і забудеш про заставу.", // nieuw, nalezen
    'be.c.housing.o3': "Залишишся й перестанеш відповідати агентству.", // nieuw, nalezen
    'be.c.housing.w': "Договір оренди має власні правила, окремо від твоєї роботи. У ньому сказано, скільки ти ще можеш жити там. Безкоштовна порада допоможе знати свої права, також щодо застави.", // nieuw, nalezen
};

export const tr: Gloss = {
    'be.w.bsn': "ulusal sicil numarası (Belçika’daki numaran)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "oturma kartı (Belçikalı olmayanlar için)", // nieuw, nalezen
    'be.w.zorgverzekering': "sağlık sigortası kasası (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "itsme ile ya da eID’imle giriş yapıyorum.", // nieuw, nalezen
    'be.c.bsn.q': "Oturma kartını görebilir miyim?", // nieuw, nalezen
    'be.c.bsn.a': "Evet, buyurun. Ulusal sicil numaram üzerinde yazıyor.", // nieuw, nalezen
    'be.w.borg': "kira depozitosu (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "kesmek (maaştan)", // nieuw, nalezen
    'be.s.housing.2': "Kira depozitosunu geri alacak mıyım?", // nieuw, nalezen
    'be.c.housing.q': "Kirayı maaşından keseceğiz.", // nieuw, nalezen
    'be.c.bsn': "Ulusal sicil numaran: onu koru", // nieuw, nalezen
    'be.c.bsn.b': "Belçika’ya yaşamaya mı geldin? O zaman adresinin bağlı olduğu belediyeye (gemeente) kaydolursun. Bir kart alırsın: Belçikalılar için kimlik kartı (eID), diğerleri için oturma kartı (verblijfskaart). Üzerinde ulusal sicil numaran (rijksregisternummer) vardır. Henüz sicilde değil misin? O zaman bir bisnummer alırsın. Çalışmak için bu numara gerekir: işverenin onu ister. Kartın kendisini asla işverenine verme. Taşınıyor musun? 8 iş günü içinde belediyeye bildir. Devlet sitelerine itsme ya da eID ile girersin: kodlarını asla kimseye verme. Hemen bir ziekenfonds’a (sağlık sigortası kasası) üye ol. Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.", // nieuw, nalezen
    'be.c.bsn.p': "Ulusal sicil numaramı neden istiyorsunuz?", // nieuw, nalezen
    'be.c.bsn.s': "Tanımadığın biri WhatsApp’ta sana iş teklif ediyor. Oturma kartının fotoğrafını ve itsme kodunu istiyor. Ne yaparsın?", // nieuw, nalezen
    'be.c.bsn.o1': "itsme kodunu asla vermezsin. Önce kim olduğunu kontrol edersin.", // nieuw, nalezen
    'be.c.bsn.o2': "İşi almak için her şeyi hemen gönderirsin.", // nieuw, nalezen
    'be.c.bsn.o3': "Sadece kartın fotoğrafını gönderirsin, itsme kodunu değil.", // nieuw, nalezen
    'be.c.bsn.w': "itsme’nle ya da kartının bir kopyasıyla başkaları adını kullanabilir, örneğin kredi ya da yardım için. Gerçek bir işveren ulusal sicil numaranı ister, ama itsme kodunu asla istemez.", // nieuw, nalezen
    'be.c.housing': "İşverenden konut", // nieuw, nalezen
    'be.c.housing.b': "İşverenin ya da geçici iş bürosu (interimkantoor) konutunu mu ayarlıyor? O zaman kira sözleşmesi iş sözleşmesinden ayrı olmalı. Yazılı bir kira sözleşmesi ve ödediklerinin makbuzunu iste. İşverenin maaşından ancak yasa izin verdiğinde para kesebilir: bunu loonbrief’inde kontrol et. Flandra’da depozito (huurwaarborg) en fazla 3 aylık kiradır, senin adına bloke bir banka hesabında. Ayrılırken, gerçek hasar düşülerek geri alırsın. Adresini belediyeye (gemeente) kaydettir. Güvensiz konut, tehdit ya da haksız masraflar mı? CAW ücretsiz yardım eder. İşin mi bitiyor? Evden çıkmadan önce danış. Genel bilgi. Kendi durumun için sendikaya, justitiehuis’e (ücretsiz hukuki danışmanlık) veya Payoke’ye sor.", // nieuw, nalezen
    'be.c.housing.p': "Ödediğime dair bir makbuz alabilir miyim?", // nieuw, nalezen
    'be.c.housing.s': "İşin bitiyor. Geçici iş bürosu diyor ki: “Yarın evden çıkmalısın.” Ne yaparsın?", // nieuw, nalezen
    'be.c.housing.o1': "Önce justitiehuis’ten ya da sendikadan tavsiye istersin.", // nieuw, nalezen
    'be.c.housing.o2': "Hemen çıkar, depozitoyu unutursun.", // nieuw, nalezen
    'be.c.housing.o3': "Kalırsın ve büroya cevap vermeyi bırakırsın.", // nieuw, nalezen
    'be.c.housing.w': "Kira sözleşmesinin işinden ayrı kendi kuralları var. Ne kadar daha kalabileceğini söyler. Ücretsiz danışmanlık haklarını bilmene yardım eder, depozito konusunda da.", // nieuw, nalezen
};

export const pl: Gloss = {
    'be.w.bsn': "numer rejestru krajowego (twój numer w Belgii)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "karta pobytu (dla osób, które nie są Belgami)", // nieuw, nalezen
    'be.w.zorgverzekering': "kasa chorych (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Loguję się przez itsme albo moim eID.", // nieuw, nalezen
    'be.c.bsn.q': "Mogę zobaczyć twoją kartę pobytu?", // nieuw, nalezen
    'be.c.bsn.a': "Tak, proszę. Jest na niej mój numer rejestru krajowego.", // nieuw, nalezen
    'be.w.borg': "kaucja za wynajem (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "potrącać (z wypłaty)", // nieuw, nalezen
    'be.s.housing.2': "Czy dostanę kaucję z powrotem?", // nieuw, nalezen
    'be.c.housing.q': "Czynsz potrącamy z twojej wypłaty.", // nieuw, nalezen
    'be.c.bsn': "Twój numer rejestru krajowego: chroń go", // nieuw, nalezen
    'be.c.bsn.b': "Przyjeżdżasz mieszkać w Belgii? Wtedy meldujesz się w gminie (gemeente) swojego adresu. Dostajesz kartę: dowód osobisty (eID) dla Belgów, kartę pobytu (verblijfskaart) dla innych. Jest na niej twój numer rejestru krajowego (rijksregisternummer). Nie ma cię jeszcze w rejestrze? Wtedy dostajesz bisnummer. Ten numer jest potrzebny do pracy: pracodawca o niego zapyta. Samej karty nigdy nie oddawaj pracodawcy. Przeprowadzasz się? Zgłoś to w gminie w ciągu 8 dni roboczych. Do stron urzędów logujesz się przez itsme albo eID: nigdy nikomu nie dawaj swoich kodów. Szybko zapisz się do kasy chorych (ziekenfonds). To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen
    'be.c.bsn.p': "Dlaczego potrzebuje pan / pani mojego numeru rejestru krajowego?", // nieuw, nalezen
    'be.c.bsn.s': "Ktoś obcy proponuje ci pracę na WhatsAppie. Prosi o zdjęcie twojej karty pobytu i twój kod itsme. Co robisz?", // nieuw, nalezen
    'be.c.bsn.o1': "Nigdy nie dajesz kodu itsme. Najpierw sprawdzasz, kim on jest.", // nieuw, nalezen
    'be.c.bsn.o2': "Szybko wysyłasz wszystko, żeby dostać pracę.", // nieuw, nalezen
    'be.c.bsn.o3': "Wysyłasz tylko zdjęcie karty, bez kodu itsme.", // nieuw, nalezen
    'be.c.bsn.w': "Z twoim itsme albo kopią twojej karty inni mogą używać twojego nazwiska, na przykład do kredytów albo zasiłków. Prawdziwy pracodawca potrzebuje twojego numeru rejestru krajowego, ale nigdy kodu itsme.", // nieuw, nalezen
    'be.c.housing': "Mieszkanie od pracodawcy", // nieuw, nalezen
    'be.c.housing.b': "Pracodawca albo biuro pracy tymczasowej (interimkantoor) załatwia ci mieszkanie? Wtedy umowa najmu musi być oddzielna od umowy o pracę. Poproś o pisemną umowę najmu i potwierdzenie tego, co płacisz. Pracodawca może potrącać pieniądze z wypłaty tylko wtedy, gdy pozwala na to prawo: sprawdź to na swoim loonbrief. We Flandrii kaucja (huurwaarborg) to najwyżej 3 miesiące czynszu, na zablokowanym koncie bankowym na twoje nazwisko. Dostajesz ją z powrotem, gdy się wyprowadzasz, minus prawdziwe szkody. Zamelduj swój adres w gminie (gemeente). Niebezpieczne mieszkanie, groźby albo niesprawiedliwe koszty? CAW pomaga za darmo. Twoja praca się kończy? Poproś o radę, zanim opuścisz mieszkanie. To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, justitiehuis (bezpłatna porada prawna) albo Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Czy mogę dostać potwierdzenie zapłaty?", // nieuw, nalezen
    'be.c.housing.s': "Twoja praca się kończy. Biuro mówi: „Jutro musisz wyprowadzić się z domu.” Co robisz?", // nieuw, nalezen
    'be.c.housing.o1': "Najpierw prosisz o radę justitiehuis albo związek zawodowy.", // nieuw, nalezen
    'be.c.housing.o2': "Od razu się wyprowadzasz i zapominasz o kaucji.", // nieuw, nalezen
    'be.c.housing.o3': "Zostajesz i przestajesz odpowiadać biuru.", // nieuw, nalezen
    'be.c.housing.w': "Umowa najmu ma własne zasady, oddzielne od twojej pracy. Jest w niej napisane, jak długo możesz jeszcze zostać. Bezpłatna porada pomaga poznać twoje prawa, także co do kaucji.", // nieuw, nalezen
};

export const ro: Gloss = {
    'be.w.bsn': "numărul de registru național (numărul tău în Belgia)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "cartea de rezidență (pentru cine nu e belgian)", // nieuw, nalezen
    'be.w.zorgverzekering': "casa de asigurări de sănătate (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Intru în cont cu itsme sau cu eID-ul meu.", // nieuw, nalezen
    'be.c.bsn.q': "Pot să-ți văd cartea de rezidență?", // nieuw, nalezen
    'be.c.bsn.a': "Da, poftim. Numărul meu de registru național e pe ea.", // nieuw, nalezen
    'be.w.borg': "garanția de chirie (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "a reține (din salariu)", // nieuw, nalezen
    'be.s.housing.2': "Primesc înapoi garanția de chirie?", // nieuw, nalezen
    'be.c.housing.q': "Chiria o reținem din salariul tău.", // nieuw, nalezen
    'be.c.bsn': "Numărul tău de registru național: păstrează-l în siguranță", // nieuw, nalezen
    'be.c.bsn.b': "Vii să locuiești în Belgia? Atunci te înscrii la primăria (gemeente) adresei tale. Primești un card: o carte de identitate (eID) pentru belgieni, o carte de rezidență (verblijfskaart) pentru ceilalți. Pe el e numărul tău de registru național (rijksregisternummer). Nu ești încă în registru? Atunci primești un bisnummer. Ai nevoie de acest număr ca să lucrezi: angajatorul ți-l cere. Nu-i da niciodată angajatorului cardul în sine. Te muți? Anunță primăria în 8 zile lucrătoare. Pe site-urile statului intri cu itsme sau cu eID: nu-ți da niciodată codurile nimănui. Înscrie-te repede la o casă de asigurări de sănătate (ziekenfonds). Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen
    'be.c.bsn.p': "De ce aveți nevoie de numărul meu de registru național?", // nieuw, nalezen
    'be.c.bsn.s': "Cineva necunoscut îți oferă un loc de muncă pe WhatsApp. Îți cere o poză cu cartea de rezidență și codul tău itsme. Ce faci?", // nieuw, nalezen
    'be.c.bsn.o1': "Nu dai niciodată codul itsme. Verifici întâi cine e.", // nieuw, nalezen
    'be.c.bsn.o2': "Trimiți totul repede, ca să primești postul.", // nieuw, nalezen
    'be.c.bsn.o3': "Trimiți doar poza cardului, nu și codul itsme.", // nieuw, nalezen
    'be.c.bsn.w': "Cu itsme-ul tău sau cu o copie a cardului, alții îți pot folosi numele, de exemplu pentru credite sau ajutoare. Un angajator adevărat are nevoie de numărul tău de registru național, dar niciodată de codul itsme.", // nieuw, nalezen
    'be.c.housing': "Locuință de la angajator", // nieuw, nalezen
    'be.c.housing.b': "Angajatorul sau agenția de muncă temporară (interimkantoor) îți aranjează locuința? Atunci contractul de închiriere trebuie să fie separat de contractul de muncă. Cere un contract de închiriere scris și dovada a ceea ce plătești. Angajatorul poate reține bani din salariu doar când legea permite: verifică pe loonbrief. În Flandra, garanția (huurwaarborg) e de cel mult 3 luni de chirie, într-un cont bancar blocat pe numele tău. O primești înapoi când pleci, minus pagubele reale. Înregistrează-ți adresa la primărie (gemeente). Locuință nesigură, amenințări sau costuri nedrepte? CAW ajută gratuit. Ți se termină munca? Cere sfat înainte să pleci din locuință. Informații generale. Pentru situația ta: întreabă sindicatul, justitiehuis (sfat juridic gratuit) sau Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Pot primi o dovadă că am plătit?", // nieuw, nalezen
    'be.c.housing.s': "Ți se termină munca. Agenția spune: „Mâine trebuie să pleci din casă.” Ce faci?", // nieuw, nalezen
    'be.c.housing.o1': "Ceri întâi sfat la justitiehuis sau la sindicat.", // nieuw, nalezen
    'be.c.housing.o2': "Pleci imediat și uiți de garanție.", // nieuw, nalezen
    'be.c.housing.o3': "Rămâi și nu mai răspunzi agenției.", // nieuw, nalezen
    'be.c.housing.w': "Contractul de închiriere are regulile lui, separate de munca ta. Scrie în el cât timp mai poți sta. Un sfat gratuit te ajută să-ți știi drepturile, și despre garanție.", // nieuw, nalezen
};

export const bg: Gloss = {
    'be.w.bsn': "номерът в националния регистър (твоят номер в Белгия)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "картата за пребиваване (за хора, които не са белгийци)", // nieuw, nalezen
    'be.w.zorgverzekering': "здравната каса (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Влизам с itsme или с моята eID.", // nieuw, nalezen
    'be.c.bsn.q': "Може ли да видя картата ти за пребиваване?", // nieuw, nalezen
    'be.c.bsn.a': "Да, ето. Номерът ми в националния регистър е на нея.", // nieuw, nalezen
    'be.w.borg': "гаранцията за наема (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "удържам (от заплатата)", // nieuw, nalezen
    'be.s.housing.2': "Ще си получа ли гаранцията за наема обратно?", // nieuw, nalezen
    'be.c.housing.q': "Наема ще го удържаме от заплатата ти.", // nieuw, nalezen
    'be.c.bsn': "Номерът ти в националния регистър: пази го", // nieuw, nalezen
    'be.c.bsn.b': "Идваш да живееш в Белгия? Тогава се регистрираш в общината (gemeente) по адреса си. Получаваш карта: лична карта (eID) за белгийците, карта за пребиваване (verblijfskaart) за другите. На нея е номерът ти в националния регистър (rijksregisternummer). Още не си в регистъра? Тогава получаваш bisnummer. Този номер ти трябва, за да работиш: работодателят ще го поиска. Самата карта никога не я давай на работодателя. Местиш се? Съобщи на общината до 8 работни дни. В сайтовете на държавата влизаш с itsme или с eID: никога не давай кодовете си на никого. Бързо се запиши в здравна каса (ziekenfonds). Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen
    'be.c.bsn.p': "Защо ви трябва номерът ми в националния регистър?", // nieuw, nalezen
    'be.c.bsn.s': "Непознат ти предлага работа в WhatsApp. Иска снимка на картата ти за пребиваване и кода ти за itsme. Какво правиш?", // nieuw, nalezen
    'be.c.bsn.o1': "Никога не даваш кода за itsme. Първо проверяваш кой е той.", // nieuw, nalezen
    'be.c.bsn.o2': "Пращаш всичко бързо, за да получиш работата.", // nieuw, nalezen
    'be.c.bsn.o3': "Пращаш само снимката на картата, не и кода за itsme.", // nieuw, nalezen
    'be.c.bsn.w': "С твоето itsme или с копие на картата ти други хора могат да използват името ти, например за заеми или помощи. Истинският работодател има нужда от номера ти в националния регистър, но никога от кода ти за itsme.", // nieuw, nalezen
    'be.c.housing': "Жилище от работодателя", // nieuw, nalezen
    'be.c.housing.b': "Работодателят или агенцията за временна работа (interimkantoor) ти урежда жилище? Тогава договорът за наем трябва да е отделно от трудовия договор. Поискай писмен договор за наем и доказателство какво плащаш. Работодателят може да удържа пари от заплатата само когато законът позволява: провери го на loonbrief. Във Фландрия гаранцията (huurwaarborg) е най-много 3 месечни наема, по блокирана банкова сметка на твое име. Получаваш я обратно, когато напуснеш, минус истинските щети. Регистрирай адреса си в общината (gemeente). Опасно жилище, заплахи или несправедливи разходи? CAW помага безплатно. Работата ти свършва? Поискай съвет, преди да напуснеш жилището. Това е обща информация. За твоя случай питай синдиката, justitiehuis (безплатен правен съвет) или Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Може ли да получа доказателство, че съм платил / платила?", // nieuw, nalezen
    'be.c.housing.s': "Работата ти свършва. Агенцията казва: „Утре трябва да напуснеш къщата.“ Какво правиш?", // nieuw, nalezen
    'be.c.housing.o1': "Първо искаш съвет от justitiehuis или от синдиката.", // nieuw, nalezen
    'be.c.housing.o2': "Тръгваш веднага и забравяш за гаранцията.", // nieuw, nalezen
    'be.c.housing.o3': "Оставаш и спираш да отговаряш на агенцията.", // nieuw, nalezen
    'be.c.housing.w': "Договорът за наем има свои правила, отделно от работата ти. В него пише колко още можеш да останеш. Безплатният съвет ти помага да знаеш правата си, и за гаранцията.", // nieuw, nalezen
};

export const es: Gloss = {
    'be.w.bsn': "el número del registro nacional (tu número en Bélgica)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "la tarjeta de residencia (para quien no es belga)", // nieuw, nalezen
    'be.w.zorgverzekering': "la mutua de salud (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Entro con itsme o con mi eID.", // nieuw, nalezen
    'be.c.bsn.q': "¿Puedo ver tu tarjeta de residencia?", // nieuw, nalezen
    'be.c.bsn.a': "Sí, aquí está. Mi número del registro nacional está en ella.", // nieuw, nalezen
    'be.w.borg': "la fianza del alquiler (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "descontar (del sueldo)", // nieuw, nalezen
    'be.s.housing.2': "¿Me devuelven la fianza del alquiler?", // nieuw, nalezen
    'be.c.housing.q': "El alquiler te lo descontamos del sueldo.", // nieuw, nalezen
    'be.c.bsn': "Tu número del registro nacional: guárdalo bien", // nieuw, nalezen
    'be.c.bsn.b': "¿Vienes a vivir a Bélgica? Entonces te inscribes en el ayuntamiento (gemeente) de tu dirección. Recibes una tarjeta: un carné de identidad (eID) para los belgas, una tarjeta de residencia (verblijfskaart) para los demás. En ella está tu número del registro nacional (rijksregisternummer). ¿Todavía no estás en el registro? Entonces recibes un bisnummer. Necesitas ese número para trabajar: tu empresa te lo pide. Nunca le des la tarjeta en sí a tu empresa. ¿Te mudas? Avisa al ayuntamiento en 8 días laborables. En las webs del gobierno entras con itsme o con tu eID: nunca des tus códigos a nadie. Apúntate pronto a una mutua de salud (ziekenfonds). Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen
    'be.c.bsn.p': "¿Por qué necesita mi número del registro nacional?", // nieuw, nalezen
    'be.c.bsn.s': "Alguien que no conoces te ofrece un trabajo por WhatsApp. Te pide una foto de tu tarjeta de residencia y tu código de itsme. ¿Qué haces?", // nieuw, nalezen
    'be.c.bsn.o1': "Nunca das tu código de itsme. Primero compruebas quién es.", // nieuw, nalezen
    'be.c.bsn.o2': "Lo envías todo rápido, para conseguir el trabajo.", // nieuw, nalezen
    'be.c.bsn.o3': "Envías solo la foto de la tarjeta, no el código de itsme.", // nieuw, nalezen
    'be.c.bsn.w': "Con tu itsme o una copia de tu tarjeta, otras personas pueden usar tu nombre, por ejemplo para préstamos o ayudas. Una empresa de verdad necesita tu número del registro nacional, pero nunca tu código de itsme.", // nieuw, nalezen
    'be.c.housing': "La vivienda de tu empresa", // nieuw, nalezen
    'be.c.housing.b': "¿Tu empresa o la oficina de trabajo temporal (interimkantoor) te busca vivienda? Entonces el contrato de alquiler tiene que ir aparte del contrato de trabajo. Pide un contrato de alquiler por escrito y un justificante de lo que pagas. Tu empresa solo puede descontarte dinero del sueldo cuando la ley lo permite: compruébalo en tu loonbrief. En Flandes la fianza (huurwaarborg) es como mucho de 3 meses de alquiler, en una cuenta bloqueada a tu nombre. Te la devuelven cuando te vas, menos los daños reales. Inscribe tu dirección en el ayuntamiento (gemeente). ¿Vivienda insegura, amenazas o gastos injustos? El CAW ayuda gratis. ¿Se acaba tu trabajo? Pide consejo antes de dejar tu casa. Es información general. Para tu situación: pregunta al sindicato, al justitiehuis (consejo legal gratis) o a Payoke.", // nieuw, nalezen
    'be.c.housing.p': "¿Me puede dar un justificante de que he pagado?", // nieuw, nalezen
    'be.c.housing.s': "Tu trabajo se acaba. La oficina dice: “Mañana tienes que dejar la casa.” ¿Qué haces?", // nieuw, nalezen
    'be.c.housing.o1': "Pides consejo primero al justitiehuis o al sindicato.", // nieuw, nalezen
    'be.c.housing.o2': "Te vas enseguida y te olvidas de la fianza.", // nieuw, nalezen
    'be.c.housing.o3': "Te quedas y dejas de contestar a la oficina.", // nieuw, nalezen
    'be.c.housing.w': "Tu contrato de alquiler tiene sus propias reglas, aparte de tu trabajo. Dice cuánto tiempo puedes quedarte todavía. Un consejo gratis te ayuda a conocer tus derechos, también sobre la fianza.", // nieuw, nalezen
};

export const pt: Gloss = {
    'be.w.bsn': "o número do registo nacional (o teu número na Bélgica)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "o cartão de residência (para quem não é belga)", // nieuw, nalezen
    'be.w.zorgverzekering': "a mutualidade de saúde (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Entro com o itsme ou com o meu eID.", // nieuw, nalezen
    'be.c.bsn.q': "Posso ver o teu cartão de residência?", // nieuw, nalezen
    'be.c.bsn.a': "Sim, aqui está. O meu número do registo nacional está nele.", // nieuw, nalezen
    'be.w.borg': "a caução da renda (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "descontar (do salário)", // nieuw, nalezen
    'be.s.housing.2': "Recebo a caução da renda de volta?", // nieuw, nalezen
    'be.c.housing.q': "A renda descontamos do teu salário.", // nieuw, nalezen
    'be.c.bsn': "O teu número do registo nacional: guarda-o bem", // nieuw, nalezen
    'be.c.bsn.b': "Vens viver para a Bélgica? Então inscreves-te na câmara municipal (gemeente) da tua morada. Recebes um cartão: um cartão de identidade (eID) para os belgas, um cartão de residência (verblijfskaart) para os outros. Nele está o teu número do registo nacional (rijksregisternummer). Ainda não estás no registo? Então recebes um bisnummer. Precisas desse número para trabalhar: o teu empregador pede-o. Nunca dês o cartão em si ao teu empregador. Vais mudar de casa? Avisa a câmara no prazo de 8 dias úteis. Nos sites do Estado entras com o itsme ou com o eID: nunca dês os teus códigos a ninguém. Inscreve-te depressa numa mutualidade de saúde (ziekenfonds). Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
    'be.c.bsn.p': "Porque precisa do meu número do registo nacional?", // nieuw, nalezen
    'be.c.bsn.s': "Alguém que não conheces oferece-te um trabalho no WhatsApp. Pede uma foto do teu cartão de residência e o teu código itsme. O que fazes?", // nieuw, nalezen
    'be.c.bsn.o1': "Nunca dás o teu código itsme. Primeiro verificas quem ele é.", // nieuw, nalezen
    'be.c.bsn.o2': "Envias tudo depressa, para ficares com o trabalho.", // nieuw, nalezen
    'be.c.bsn.o3': "Envias só a foto do cartão, não o código itsme.", // nieuw, nalezen
    'be.c.bsn.w': "Com o teu itsme ou uma cópia do teu cartão, outras pessoas podem usar o teu nome, por exemplo para empréstimos ou apoios. Um empregador a sério precisa do teu número do registo nacional, mas nunca do teu código itsme.", // nieuw, nalezen
    'be.c.housing': "Casa dada pelo empregador", // nieuw, nalezen
    'be.c.housing.b': "O teu empregador ou a agência de trabalho temporário (interimkantoor) arranja-te casa? Então o contrato de arrendamento tem de ser separado do contrato de trabalho. Pede um contrato de arrendamento por escrito e um comprovativo do que pagas. O empregador só pode descontar dinheiro do teu salário quando a lei o permite: verifica no teu loonbrief. Na Flandres, a caução (huurwaarborg) é no máximo de 3 meses de renda, numa conta bloqueada em teu nome. Recebe-la de volta quando sais, menos os danos reais. Regista a tua morada na câmara municipal (gemeente). Casa sem segurança, ameaças ou custos injustos? O CAW ajuda de graça. O teu trabalho acaba? Pede conselho antes de saíres de casa. Informação geral. Para a tua situação: pergunta ao sindicato, ao justitiehuis (conselho jurídico grátis) ou à Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Pode dar-me um comprovativo de que paguei?", // nieuw, nalezen
    'be.c.housing.s': "O teu trabalho acaba. A agência diz: “Amanhã tens de sair da casa.” O que fazes?", // nieuw, nalezen
    'be.c.housing.o1': "Pedes conselho primeiro ao justitiehuis ou ao sindicato.", // nieuw, nalezen
    'be.c.housing.o2': "Sais logo e esqueces a caução.", // nieuw, nalezen
    'be.c.housing.o3': "Ficas, e deixas de responder à agência.", // nieuw, nalezen
    'be.c.housing.w': "O teu contrato de arrendamento tem as suas próprias regras, separadas do trabalho. Diz quanto tempo ainda podes ficar. Um conselho grátis ajuda-te a conhecer os teus direitos, também sobre a caução.", // nieuw, nalezen
};

export const fr: Gloss = {
    'be.w.bsn': "le numéro de registre national (ton numéro en Belgique)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "la carte de séjour (pour qui n’est pas belge)", // nieuw, nalezen
    'be.w.zorgverzekering': "la mutuelle (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Je me connecte avec itsme ou avec mon eID.", // nieuw, nalezen
    'be.c.bsn.q': "Je peux voir ta carte de séjour ?", // nieuw, nalezen
    'be.c.bsn.a': "Oui, la voici. Mon numéro de registre national est dessus.", // nieuw, nalezen
    'be.w.borg': "la garantie locative (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "retenir (sur le salaire)", // nieuw, nalezen
    'be.s.housing.2': "Est-ce que je récupère la garantie locative ?", // nieuw, nalezen
    'be.c.housing.q': "Le loyer, on le retient sur ton salaire.", // nieuw, nalezen
    'be.c.bsn': "Ton numéro de registre national : protège-le", // nieuw, nalezen
    'be.c.bsn.b': "Tu viens vivre en Belgique ? Alors tu t’inscris à la commune (gemeente) de ton adresse. Tu reçois une carte : une carte d’identité (eID) pour les Belges, une carte de séjour (verblijfskaart) pour les autres. Dessus, il y a ton numéro de registre national (rijksregisternummer). Pas encore dans le registre ? Alors tu reçois un numéro bis (bisnummer). Tu as besoin de ce numéro pour travailler : ton employeur te le demande. Ne donne jamais la carte elle-même à ton employeur. Tu déménages ? Préviens la commune dans les 8 jours ouvrables. Sur les sites de l’État, tu te connectes avec itsme ou ton eID : ne donne jamais tes codes à quelqu’un. Inscris-toi vite à une mutuelle (ziekenfonds). Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
    'be.c.bsn.p': "Pourquoi avez-vous besoin de mon numéro de registre national ?", // nieuw, nalezen
    'be.c.bsn.s': "Quelqu’un que tu ne connais pas t’offre un travail sur WhatsApp. Il demande une photo de ta carte de séjour et ton code itsme. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'be.c.bsn.o1': "Tu ne donnes jamais ton code itsme. Tu vérifies d’abord qui il est.", // nieuw, nalezen
    'be.c.bsn.o2': "Tu envoies tout vite, pour avoir le travail.", // nieuw, nalezen
    'be.c.bsn.o3': "Tu envoies seulement la photo de la carte, pas le code itsme.", // nieuw, nalezen
    'be.c.bsn.w': "Avec ton itsme ou une copie de ta carte, d’autres personnes peuvent utiliser ton nom, par exemple pour des prêts ou des allocations. Un vrai employeur a besoin de ton numéro de registre national, mais jamais de ton code itsme.", // nieuw, nalezen
    'be.c.housing': "Un logement par ton employeur", // nieuw, nalezen
    'be.c.housing.b': "Ton employeur ou ton agence d’intérim (interimkantoor) s’occupe de ton logement ? Alors le contrat de bail doit être séparé du contrat de travail. Demande un bail écrit et une preuve de ce que tu paies. Ton employeur peut seulement retenir de l’argent sur ton salaire quand la loi le permet : vérifie-le sur ta loonbrief. En Flandre, la garantie locative (huurwaarborg) est de 3 mois de loyer au maximum, sur un compte bloqué à ton nom. Tu la récupères quand tu pars, moins les vrais dégâts. Inscris ton adresse à la commune (gemeente). Logement dangereux, menaces ou frais injustes ? Le CAW aide gratuitement. Ton travail se termine ? Demande conseil avant de quitter ton logement. Informations générales. Pour ta situation : demande au syndicat, au justitiehuis (maison de justice : conseil juridique gratuit) ou à Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Je peux avoir une preuve que j’ai payé ?", // nieuw, nalezen
    'be.c.housing.s': "Ton travail se termine. L’agence dit : « Tu dois quitter la maison demain. » Qu’est-ce que tu fais ?", // nieuw, nalezen
    'be.c.housing.o1': "Tu demandes d’abord conseil au justitiehuis ou au syndicat.", // nieuw, nalezen
    'be.c.housing.o2': "Tu pars tout de suite et tu oublies ta garantie.", // nieuw, nalezen
    'be.c.housing.o3': "Tu restes, et tu ne réponds plus à l’agence.", // nieuw, nalezen
    'be.c.housing.w': "Ton bail a ses propres règles, séparées de ton travail. Il dit combien de temps tu peux encore rester. Un conseil gratuit t’aide à connaître tes droits, aussi pour ta garantie.", // nieuw, nalezen
};

export const de: Gloss = {
    'be.w.bsn': "die Nationalregisternummer (deine Nummer in Belgien)", // nieuw, nalezen
    'be.w.identiteitsbewijs': "die Aufenthaltskarte (für Menschen, die nicht belgisch sind)", // nieuw, nalezen
    'be.w.zorgverzekering': "die Krankenkasse (mutualiteit)", // nieuw, nalezen
    'be.s.bsn.3': "Ich logge mich mit itsme oder mit meiner eID ein.", // nieuw, nalezen
    'be.c.bsn.q': "Darf ich deine Aufenthaltskarte sehen?", // nieuw, nalezen
    'be.c.bsn.a': "Ja, hier. Meine Nationalregisternummer steht darauf.", // nieuw, nalezen
    'be.w.borg': "die Mietkaution (huurwaarborg)", // nieuw, nalezen
    'be.w.inhouden': "abziehen (vom Lohn)", // nieuw, nalezen
    'be.s.housing.2': "Bekomme ich die Mietkaution zurück?", // nieuw, nalezen
    'be.c.housing.q': "Die Miete ziehen wir von deinem Lohn ab.", // nieuw, nalezen
    'be.c.bsn': "Deine Nationalregisternummer: pass gut auf sie auf", // nieuw, nalezen
    'be.c.bsn.b': "Du kommst nach Belgien, um hier zu wohnen? Dann meldest du dich bei der Gemeinde (gemeente) deiner Adresse an. Du bekommst eine Karte: einen Personalausweis (eID) für Belgier, eine Aufenthaltskarte (verblijfskaart) für andere. Darauf steht deine Nationalregisternummer (rijksregisternummer). Noch nicht im Register? Dann bekommst du eine bisnummer. Diese Nummer brauchst du zum Arbeiten: Dein Arbeitgeber fragt danach. Gib die Karte selbst nie deinem Arbeitgeber. Du ziehst um? Sag es der Gemeinde innerhalb von 8 Arbeitstagen. Bei Websites des Staates loggst du dich mit itsme oder deiner eID ein: Gib deine Codes nie jemand anderem. Melde dich schnell bei einer Krankenkasse (ziekenfonds) an. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
    'be.c.bsn.p': "Warum brauchen Sie meine Nationalregisternummer?", // nieuw, nalezen
    'be.c.bsn.s': "Jemand, den du nicht kennst, bietet dir auf WhatsApp einen Job an. Er will ein Foto deiner Aufenthaltskarte und deinen itsme-Code. Was machst du?", // nieuw, nalezen
    'be.c.bsn.o1': "Du gibst deinen itsme-Code nie. Zuerst prüfst du, wer er ist.", // nieuw, nalezen
    'be.c.bsn.o2': "Du schickst schnell alles, damit du den Job bekommst.", // nieuw, nalezen
    'be.c.bsn.o3': "Du schickst nur das Foto der Karte, nicht den itsme-Code.", // nieuw, nalezen
    'be.c.bsn.w': "Mit deiner itsme oder einer Kopie deiner Karte können andere deinen Namen benutzen, zum Beispiel für Kredite oder Leistungen. Ein echter Arbeitgeber braucht deine Nationalregisternummer, aber nie deinen itsme-Code.", // nieuw, nalezen
    'be.c.housing': "Wohnen über den Arbeitgeber", // nieuw, nalezen
    'be.c.housing.b': "Besorgt dein Arbeitgeber oder dein Zeitarbeitsbüro (interimkantoor) deine Wohnung? Dann muss der Mietvertrag getrennt vom Arbeitsvertrag sein. Verlang einen schriftlichen Mietvertrag und einen Beleg für das, was du zahlst. Dein Arbeitgeber darf nur Geld von deinem Lohn abziehen, wenn das Gesetz es erlaubt: Prüf es auf deinem loonbrief. In Flandern ist eine Kaution (huurwaarborg) höchstens 3 Monatsmieten, auf einem gesperrten Bankkonto auf deinen Namen. Du bekommst sie zurück, wenn du ausziehst, minus echte Schäden. Melde deine Adresse bei der Gemeinde (gemeente) an. Unsichere Wohnung, Drohungen oder unfaire Kosten? Das CAW hilft kostenlos. Dein Job endet? Hol dir Rat, bevor du aus deiner Wohnung gehst. Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Justitiehuis (kostenlose Rechtsberatung) oder Payoke.", // nieuw, nalezen
    'be.c.housing.p': "Kann ich einen Beleg bekommen, dass ich bezahlt habe?", // nieuw, nalezen
    'be.c.housing.s': "Dein Job endet. Das Büro sagt: „Du musst morgen aus dem Haus.“ Was machst du?", // nieuw, nalezen
    'be.c.housing.o1': "Du fragst zuerst das Justitiehuis oder die Gewerkschaft um Rat.", // nieuw, nalezen
    'be.c.housing.o2': "Du gehst sofort und vergisst deine Kaution.", // nieuw, nalezen
    'be.c.housing.o3': "Du bleibst und antwortest dem Büro nicht mehr.", // nieuw, nalezen
    'be.c.housing.w': "Dein Mietvertrag hat eigene Regeln, getrennt von deinem Job. Darin steht, wie lange du noch bleiben darfst. Kostenloser Rat hilft dir, deine Rechte zu kennen, auch zur Kaution.", // nieuw, nalezen
};
