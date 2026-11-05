import type { Gloss } from '../types';

// The translations of the Belgian version of u.health (src/content/taalBe/units/health.ts), one
// object per help language. "// nieuw, nalezen": a new translation, not yet read by a native speaker.
// "// = <id>": the same text as the Dutch translation of that id (src/i18n), unchanged.

export const ar: Gloss = {
    "be.w.huisartsenpost": "مركز الطبيب المناوب (huisartsenwachtpost) في المساء والليل وعطلة نهاية الأسبوع", // nieuw, nalezen
    "be.c.doctor.q": "مركز الطبيب المناوب، كيف يمكنني مساعدتك؟", // nieuw, nalezen
    "be.w.premie": "الاشتراك (ما يُدفع لصندوق التأمين الصحي ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": 'الحصة الشخصية (الجزء من التكلفة الذي يُدفع شخصياً)', // nieuw, nalezen // nagelezen AI ronde 3
    "be.w.zorgtoeslag": "التعويض المرتفع (مساعدة إضافية في تكاليف الصحة لذوي الدخل المنخفض)", // nieuw, nalezen
    "be.w.verzekeraar": "صندوق التأمين الصحي (ziekenfonds، mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "أنا عضو في صندوق تأمين صحي.", // nieuw, nalezen
    "be.s.insurance.2": "هل يُسترد هذا المبلغ؟", // nieuw, nalezen
    "be.s.insurance.3": "أطلب التعويض المرتفع.", // nieuw, nalezen
    "be.c.insurance.q": "في أي صندوق تأمين صحي أنت؟", // nieuw, nalezen
    "be.c.insurance.a": "لا أعرف. سأتحقق من ذلك.", // nieuw, nalezen
    "be.c.doctor": "الطبيب أم 112؟", // = c.doctor
    "be.c.doctor.b": 'من الأفضل اختيار طبيب عائلة (huisarts) قرب البيت. هل يلزم طبيب في المساء أو الليل أو عطلة نهاية الأسبوع؟ الاتصال بـ1733: هم يرسلونك إلى الطبيب المناوب (huisartsenwachtpost). الاتصال بـ112 فقط في حالة طوارئ: خطر على الحياة، أو حريق، أو جريمة تحدث الآن. الأدوية تُؤخذ من الصيدلية (apotheek).', // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.p": "هل ما زلتم تقبلون مرضى جدداً؟", // nieuw, nalezen
    "be.c.doctor.s": { m: "إنه السبت، في الليل. طفلك عنده حمّى شديدة، لكنه مستيقظ ويتنفس بشكل طبيعي. ماذا تفعل؟", f: "إنه السبت، في الليل. طفلك عنده حمّى شديدة، لكنه مستيقظ ويتنفس بشكل طبيعي. ماذا تفعلين؟" }, // = c.doctor.s
    "be.c.doctor.o1": { m: 'اتَّصِلْ بـ1733.', f: 'اتصلي بـ1733.', x: 'الاتصال بـ1733.' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": { m: 'اتَّصِلْ بـ112.', f: 'اتصلي بـ112.', x: 'الاتصال بـ112.' }, // = c.doctor.o2 // nagelezen AI ronde 3
    "be.c.doctor.o3": { m: "انتظر حتى يوم الاثنين ولا تفعل شيئاً.", f: "انتظري حتى يوم الاثنين ولا تفعلي شيئاً." }, // = c.doctor.o3
    "be.c.doctor.w": "الرقم 1733 يساعد في إيجاد طبيب خارج ساعات العمل. 112 لحالات الطوارئ: خطر على الحياة، أو حريق، أو جريمة تحدث الآن.", // nieuw, nalezen
    "be.c.insurance": "صندوق التأمين الصحي (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": { m: 'في بلجيكا يجب الانضمام إلى صندوق تأمين صحي: ziekenfonds (mutualiteit)، أو Hulpkas (HZIV). الأفضل فعل ذلك عند بداية العمل. الـziekenfonds يرد جزءاً من تكاليف الطبيب والمستشفى والأدوية. الجزء الذي يُدفع شخصياً هو الـremgeld. مع دخل منخفض قد تحصل على verhoogde tegemoetkoming: عندها تدفع أقل. مرض لمدة طويلة؟ عندها يدفع الـziekenfonds أيضاً تعويضاً. معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', f: 'في بلجيكا يجب الانضمام إلى صندوق تأمين صحي: ziekenfonds (mutualiteit)، أو Hulpkas (HZIV). الأفضل فعل ذلك عند بداية العمل. الـziekenfonds يرد جزءاً من تكاليف الطبيب والمستشفى والأدوية. الجزء الذي يُدفع شخصياً هو الـremgeld. مع دخل منخفض قد تحصلين على verhoogde tegemoetkoming: عندها تدفعين أقل. مرض لمدة طويلة؟ عندها يدفع الـziekenfonds أيضاً تعويضاً. معلومات عامة. لوضعك أنت: اسألي صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', x: 'في بلجيكا يجب الانضمام إلى صندوق تأمين صحي: ziekenfonds (mutualiteit)، أو Hulpkas (HZIV). الأفضل فعل ذلك عند بداية العمل. الـziekenfonds يرد جزءاً من تكاليف الطبيب والمستشفى والأدوية. الجزء الذي يُدفع شخصياً هو الـremgeld. مع دخل منخفض قد يوجد حق في verhoogde tegemoetkoming: عندها يكون الدفع أقل. مرض لمدة طويلة؟ عندها يدفع الـziekenfonds أيضاً تعويضاً. معلومات عامة. للوضع الشخصي: يمكن سؤال صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).' }, // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance.p": "أريد أن أصبح عضواً في صندوق تأمين صحي. هل يمكنك مساعدتي؟", // nieuw, nalezen
    "be.c.insurance.s": "بدأت العمل هنا قبل أسبوعين وليس لديك ziekenfonds بعد. ما التصرف الصحيح؟", // nieuw, nalezen
    "be.c.insurance.o1": { m: 'انضمّ بسرعة إلى ziekenfonds.', f: 'انضمّي بسرعة إلى ziekenfonds.', x: 'الانضمام بسرعة إلى ziekenfonds.' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": { m: 'انتظر: تأمينك من بلدك يكفي.', f: 'انتظري: تأمينك من بلدك يكفي.', x: 'الانتظار: التأمين من البلد الأصلي يكفي.' }, // = c.insurance.o2 // nagelezen AI ronde 3
    "be.c.insurance.o3": { m: 'استخدم بطاقة تأمين صديق.', f: 'استخدمي بطاقة تأمين صديق.', x: 'استخدام بطاقة تأمين صديق.' }, // = c.insurance.o3 // nagelezen AI ronde 3
    "be.c.insurance.w": 'من دون ziekenfonds، يُدفع للطبيب والمستشفى من المال الخاص. الانضمام بسرعة يحميك. يمكن لصاحب العمل أو مكتب العمل المؤقت المساعدة.', // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": { m: "كثير جداً؟ لست مضطراً أن تتحمّل ذلك وحدك", f: "كثير جداً؟ لستِ مضطرة أن تتحمّلي ذلك وحدك", x: "كثير جداً؟ لا داعي لتحمّل ذلك بلا مساعدة" }, // = c.feelwell
    "be.c.feelwell.b": { m: "كل شخص يشعر أحياناً بالتعب أو التوتر أو الحزن. العمل الكثير (werkdruk)، أو النوم السيئ بسبب النوبات، أو الشوق إلى عائلتك قد يجعل الأمر ثقيلاً. لست مضطراً أن تتحمّل ذلك وحدك، وأن تقول «هذا كثير جداً» ليس ضعفاً. تكلّم مع شخص تثق به: مشرفك، أو الشخص المؤتمن (vertrouwenspersoon)، أو مستشار الوقاية (preventieadviseur psychosociale aspecten)، أو طبيب العمل (arbeidsarts)، أو طبيب العائلة (huisarts). يمكنك أيضاً أن تطلب بنفسك موعداً للحديث مع طبيب العمل. الأطباء لا يخبرون مديرك بما قلته. هل تفكّر في الانتحار، أو أنت قلق على شخص ما؟ اتصل بـ1813 (مجاناً، ليلاً ونهاراً)، أو تحدّث كتابةً على zelfmoord1813.be.", f: "كل شخص يشعر أحياناً بالتعب أو التوتر أو الحزن. العمل الكثير (werkdruk)، أو النوم السيئ بسبب النوبات، أو الشوق إلى عائلتك قد يجعل الأمر ثقيلاً. لستِ مضطرة أن تتحمّلي ذلك وحدك، وأن تقولي «هذا كثير جداً» ليس ضعفاً. تكلّمي مع شخص تثقين به: مشرفك، أو الشخص المؤتمن (vertrouwenspersoon)، أو مستشار الوقاية (preventieadviseur psychosociale aspecten)، أو طبيب العمل (arbeidsarts)، أو طبيب العائلة (huisarts). يمكنكِ أيضاً أن تطلبي بنفسك موعداً للحديث مع طبيب العمل. الأطباء لا يخبرون مديرك بما قلتِه. هل تفكّرين في الانتحار، أو أنتِ قلقة على شخص ما؟ اتصلي بـ1813 (مجاناً، ليلاً ونهاراً)، أو تحدّثي كتابةً على zelfmoord1813.be.", x: "كل شخص يشعر أحياناً بالتعب أو التوتر أو الحزن. العمل الكثير (werkdruk)، أو النوم السيئ بسبب النوبات، أو الشوق إلى العائلة قد يجعل الأمر ثقيلاً. لا داعي لتحمّل ذلك بلا مساعدة، وقول «هذا كثير جداً» ليس ضعفاً. الكلام مع شخص موثوق يساعد: المشرف، أو الشخص المؤتمن (vertrouwenspersoon)، أو مستشار الوقاية (preventieadviseur psychosociale aspecten)، أو طبيب العمل (arbeidsarts)، أو طبيب العائلة (huisarts). يمكن أيضاً طلب موعد للحديث مع طبيب العمل مباشرةً. الأطباء لا يخبرون المدير بما قيل لهم. أفكار عن الانتحار، أو قلق على شخص ما؟ الاتصال بـ1813 (مجاناً، ليلاً ونهاراً)، أو المحادثة كتابةً على zelfmoord1813.be." }, // nieuw, nalezen
    "be.c.feelwell.p": "لستُ على ما يرام. هل يمكنني أن أتكلم معك قليلاً؟", // = c.feelwell.p
    "be.c.feelwell.s": { m: "منذ أسابيع تنام بشكل سيئ، والعمل كثير جداً. تشعر بتعب شديد. ماذا تفعل؟", f: "منذ أسابيع تنامين بشكل سيئ، والعمل كثير جداً. تشعرين بتعب شديد. ماذا تفعلين؟", x: "منذ أسابيع النوم سيئ، والعمل كثير جداً. التعب شديد. ما التصرف الصحيح؟" }, // = c.feelwell.s
    "be.c.feelwell.o1": { m: "أخبر مشرفك أو طبيب العمل.", f: "أخبري مشرفك أو طبيب العمل.", x: "إخبار المشرف أو طبيب العمل." }, // nieuw, nalezen
    "be.c.feelwell.o2": { m: "لا تقل شيئاً، واعمل أكثر وأسرع.", f: "لا تقولي شيئاً، واعملي أكثر وأسرع.", x: "السكوت، والعمل أكثر وأسرع." }, // = c.feelwell.o2
    "be.c.feelwell.o3": { m: "ابقَ في البيت، ولا تخبر أحداً بالسبب.", f: "ابقي في البيت، ولا تخبري أحداً بالسبب.", x: "البقاء في البيت، وعدم إخبار أحد بالسبب." }, // = c.feelwell.o3
    "be.c.feelwell.w": "قول ذلك مبكراً ليس ضعفاً. عندها يمكن البحث معاً عن حل، مثلاً نوبات أخرى. لا داعي لتحمّل ذلك بلا مساعدة.", // = c.feelwell.w
};

export const ti: Gloss = {
    "be.w.huisartsenpost": "ናይ ምሸት፡ ለይትን ቀዳመ-ሰንበትን ቤት ሕክምና ሓኪም ስድራ (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Huisartsenwachtpost፡ እንታይ ክሕግዘኩም እኽእል?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.w.premie": "ክፍሊት ኣባልነት (ንziekenfonds ትኸፍልዎ)", // nieuw, nalezen
    "be.w.eigenrisico": 'ናይ ባዕልኹም ክፋል (ካብቲ ወጻኢ ባዕልኹም እትኸፍልዎ)', // nieuw, nalezen // nagelezen AI ronde 3
    "be.w.zorgtoeslag": "ተወሳኺ ሓገዝ ንወጻኢ ጥዕና (ንትሑት ኣታዊ)", // nieuw, nalezen
    "be.w.verzekeraar": "ፈንድ ጥዕና (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "ኣባል ziekenfonds እየ።", // nieuw, nalezen
    "be.s.insurance.2": "እዚ ይምለስ ድዩ?", // nieuw, nalezen
    "be.s.insurance.3": "ተወሳኺ ሓገዝ ንወጻኢ ጥዕና እሓትት ኣለኹ።", // nieuw, nalezen
    "be.c.insurance.q": "ኣብ ኣየናይ ziekenfonds ኣለኹም?", // nieuw, nalezen
    "be.c.insurance.a": "ኣይፈልጦን። ክርእዮ እየ።", // nieuw, nalezen
    "be.c.doctor": "ሓኪም ድዩ 112?", // = c.doctor
    "be.c.doctor.b": "ኣብ ጥቓ ገዛኹም ሓኪም ስድራ (huisarts) ምረጹ። ምሸት፡ ለይቲ ወይ ቀዳመ-ሰንበት ሓኪም የድልየኩም ድዩ? ናብ 1733 ደውሉ፡ ናብቲ ብተራ ዝሰርሕ ሓኪም (huisartsenwachtpost) ይሰዱኹም። ናብ 112 ኣብ ህጹጽ ኩነታት ጥራይ ደውሉ፡ ሓደጋ ህይወት፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ገበን። መድሃኒት ካብ ፋርማሲ (apotheek) ትረኽቡ።", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.doctor.p": "ገና ሓደሽቲ ሕሙማት ትቕበሉ ዶ?", // nieuw, nalezen
    "be.c.doctor.s": { m: "ቀዳም ለይቲ እዩ። ውላድካ ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብር?", f: "ቀዳም ለይቲ እዩ። ውላድኪ ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብሪ?", x: "ቀዳም ለይቲ እዩ። ውላድኩም ብርቱዕ ረስኒ ኣለዎ፡ ግን ነቒሑ ኣሎ፡ ብልሙድ ድማ የስተንፍስ። እንታይ ትገብሩ?" }, // = c.doctor.s
    "be.c.doctor.o1": { m: 'ናብ 1733 ደውል።', f: 'ናብ 1733 ደውሊ።', x: 'ናብ 1733 ደውሉ።' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": { m: "ናብ 112 ደውል።", f: "ናብ 112 ደውሊ።", x: "ናብ 112 ደውሉ።" }, // = c.doctor.o2
    "be.c.doctor.o3": { m: "ክሳዕ ሰኑይ ተጸበ፡ ገለ ድማ ኣይትግበር።", f: "ክሳዕ ሰኑይ ተጸበዪ፡ ገለ ድማ ኣይትግበሪ።" }, // = c.doctor.o3
    "be.c.doctor.w": "1733 ካብ ሰዓታት ስራሕ ወጻኢ ሓኪም ክትረኽቡ ይሕግዘኩም። 112 ንህጹጽ ኩነታት እዩ፡ ሓደጋ ህይወት፡ ሓዊ፡ ወይ ሕጂ ዝፍጸም ገበን።", // nieuw, nalezen
    "be.c.insurance": "ziekenfonds ናትኩም", // nieuw, nalezen
    "be.c.insurance.b": { m: 'ኣብ ቤልጅዩም ኣባል ፈንድ ጥዕና ክትከውን ኣለካ፡ ziekenfonds (mutualiteit)፡ ወይ Hulpkas (HZIV)። ስራሕ ምስ ጀመርካ ግበሮ። ziekenfonds ክፋል ወጻኢታት ሓኪም፡ ሆስፒታልን መድሃኒትን ይመልስ። ባዕልኻ እትኸፍሎ ክፋል remgeld ይበሃል። ብትሑት ኣታዊ verhoogde tegemoetkoming ክትረክብ ትኽእል፡ ሽዑ ውሑድ ትኸፍል። ንነዊሕ ግዜ ሕሙም ዲኻ? ሽዑ ziekenfonds ገንዘብ ሓገዝ እውን ይኸፍለካ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተት።', f: 'ኣብ ቤልጅዩም ኣባል ፈንድ ጥዕና ክትኮኒ ኣለኪ፡ ziekenfonds (mutualiteit)፡ ወይ Hulpkas (HZIV)። ስራሕ ምስ ጀመርኪ ግበርዮ። ziekenfonds ክፋል ወጻኢታት ሓኪም፡ ሆስፒታልን መድሃኒትን ይመልስ። ባዕልኺ እትኸፍልዮ ክፋል remgeld ይበሃል። ብትሑት ኣታዊ verhoogde tegemoetkoming ክትረኽቢ ትኽእሊ፡ ሽዑ ውሑድ ትኸፍሊ። ንነዊሕ ግዜ ሕምምቲ ዲኺ? ሽዑ ziekenfonds ገንዘብ ሓገዝ እውን ይኸፍለኪ። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቲ።', x: 'ኣብ ቤልጅዩም ኣባል ፈንድ ጥዕና ክትኮኑ ኣለኩም፡ ziekenfonds (mutualiteit)፡ ወይ Hulpkas (HZIV)። ስራሕ ምስ ጀመርኩም ግበርዎ። ziekenfonds ክፋል ወጻኢታት ሓኪም፡ ሆስፒታልን መድሃኒትን ይመልስ። ባዕልኹም እትኸፍልዎ ክፋል remgeld ይበሃል። ብትሑት ኣታዊ verhoogde tegemoetkoming ክትረኽቡ ትኽእሉ፡ ሽዑ ውሑድ ትኸፍሉ። ንነዊሕ ግዜ ሕሙማት ዲኹም? ሽዑ ziekenfonds ገንዘብ ሓገዝ እውን ይኸፍለኩም። ሓፈሻዊ ሓበሬታ እዩ። ብዛዕባ ኩነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.p": "ኣባል ziekenfonds ክኸውን እደሊ። ክትሕግዙኒ ትኽእሉ ዶ?", // nieuw, nalezen
    "be.c.insurance.s": "ቅድሚ ክልተ ሰሙን ኣብዚ ስራሕ ጀሚርኩም፡ ገና ziekenfonds የብልኩምን። እንታይ ትገብሩ?", // nieuw, nalezen
    "be.c.insurance.o1": { m: 'ቀልጢፍካ ኣባል ziekenfonds ኩን።', f: 'ቀልጢፍኪ ኣባል ziekenfonds ኩኒ።', x: 'ቀልጢፍኩም ኣባል ziekenfonds ኩኑ።' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": { m: 'ተጸበ፡ መድሕን ናይ ዓድኻ ይኣክል እዩ።', f: 'ተጸበዪ፡ መድሕን ናይ ዓድኺ ይኣክል እዩ።', x: 'ተጸበዩ፡ መድሕን ናይ ዓድኹም ይኣክል እዩ።' }, // = c.insurance.o2 // nagelezen AI ronde 3
    "be.c.insurance.o3": { m: "ካርድ መድሕን ናይ ዓርክኻ ተጠቐም።", f: "ካርድ መድሕን ናይ ዓርክኺ ተጠቐሚ።", x: "ካርድ መድሕን ናይ ዓርክኹም ተጠቐሙ።" }, // = c.insurance.o3
    "be.c.insurance.w": "ብዘይ ziekenfonds፡ ሓኪምን ሆስፒታልን ባዕልኹም ትኸፍሉ። ቀልጢፍኩም ኣባል ምዃን ይሕልወኩም። ኣስራሒኹም ወይ ቤት ጽሕፈት ግዝያዊ ስራሕ ክሕግዘኩም ይኽእል።", // nieuw, nalezen
    "be.c.feelwell": { m: "ኣዝዩ በዚሑ? በይንኻ ክትጸሮ ኣየድልየካን", f: "ኣዝዩ በዚሑ? በይንኺ ክትጸርዮ ኣየድልየክን", x: "ኣዝዩ በዚሑ? በይንኹም ክትጸርዎ ኣየድልየኩምን" }, // = c.feelwell
    "be.c.feelwell.b": { m: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኻ ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኻ ክትጸሮ ኣየድልየካን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምኖ ሰብ ተዛረብ፡ ተቖጻጻሪኻ፡ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ወይ ኣማኻሪ መከላኸሊ (preventieadviseur psychosociale aspecten)፡ ሓኪም ስራሕ (arbeidsarts) ወይ ሓኪም ስድራኻ (huisarts)። ባዕልኻ እውን ምስ ሓኪም ስራሕ ዘተ ክትሓትት ትኽእል ኢኻ። ሓካይም ዝበልካዮ ንሓላፊኻ ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስብ ዲኻ፡ ወይስ ብዛዕባ ሓደ ሰብ ትሻቐል ዲኻ? ናብ 1813 ደውል (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ zelfmoord1813.be ብጽሑፍ ተዘራረብ።", f: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኺ ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኺ ክትጸርዮ ኣየድልየክን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምንዮ ሰብ ተዛረቢ፡ ተቖጻጻሪኺ፡ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ወይ ኣማኻሪ መከላኸሊ (preventieadviseur psychosociale aspecten)፡ ሓኪም ስራሕ (arbeidsarts) ወይ ሓኪም ስድራኺ (huisarts)። ባዕልኺ እውን ምስ ሓኪም ስራሕ ዘተ ክትሓትቲ ትኽእሊ ኢኺ። ሓካይም ዝበልክዮ ንሓላፊኺ ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስቢ ዲኺ፡ ወይስ ብዛዕባ ሓደ ሰብ ትሽቀሊ ዲኺ? ናብ 1813 ደውሊ (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ zelfmoord1813.be ብጽሑፍ ተዘራረቢ።", x: "ኩሉ ሰብ ሓደ ሓደ ግዜ ድኻም፡ ጸቕጢ ወይ ጓሂ ይስምዖ። ብዙሕ ስራሕ (werkdruk)፡ ብሰንኪ ፈረቓ ሕማቕ ድቃስ፡ ወይ ስድራኹም ምንፋቕ ነገራት ከኽብድ ይኽእል። በይንኹም ክትጸርዎ ኣየድልየኩምን፡ «ኣዝዩ በዚሑ» ምባል ድማ ድኽመት ኣይኮነን። ምስ እትኣምንዎ ሰብ ተዛረቡ፡ ተቖጻጻሪኹም፡ ምስጢራዊ ኣማኻሪ (vertrouwenspersoon) ወይ ኣማኻሪ መከላኸሊ (preventieadviseur psychosociale aspecten)፡ ሓኪም ስራሕ (arbeidsarts) ወይ ሓኪም ስድራኹም (huisarts)። ባዕልኹም እውን ምስ ሓኪም ስራሕ ዘተ ክትሓትቱ ትኽእሉ ኢኹም። ሓካይም ዝበልኩምዎ ንሓላፊኹም ኣይነግርዎን። ብዛዕባ ርእሰ-ቕትለት ትሓስቡ ዲኹም፡ ወይስ ብዛዕባ ሓደ ሰብ ትሻቐሉ ዲኹም? ናብ 1813 ደውሉ (ብናጻ፡ ለይትን መዓልትን)፡ ወይ ኣብ zelfmoord1813.be ብጽሑፍ ተዘራረቡ።" }, // nieuw, nalezen
    "be.c.feelwell.p": "ብዙሕ ጽቡቕ ኣይኮንኩን። ንሓጺር ግዜ ምሳኹም ክዛረብ ይኽእል ዶ?", // = c.feelwell.p
    "be.c.feelwell.s": { m: "ንሰሙናት ሕማቕ ትድቅስ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምካ። እንታይ ትገብር?", f: "ንሰሙናት ሕማቕ ትድቅሲ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምኪ። እንታይ ትገብሪ?", x: "ንሰሙናት ሕማቕ ትድቅሱ፡ እቲ ስራሕ ድማ ኣዝዩ በዚሑ። ኣዝዩ ደኺምኩም። እንታይ ትገብሩ?" }, // = c.feelwell.s
    "be.c.feelwell.o1": { m: "ንተቖጻጻሪኻ ወይ ንሓኪም ስራሕ ንገር።", f: "ንተቖጻጻሪኺ ወይ ንሓኪም ስራሕ ንገሪ።", x: "ንተቖጻጻሪኹም ወይ ንሓኪም ስራሕ ንገሩ።" }, // nieuw, nalezen
    "be.c.feelwell.o2": { m: "ገለ ኣይትበል፡ ዝያዳን ቀልጢፍካን ስራሕ።", f: "ገለ ኣይትበሊ፡ ዝያዳን ቀልጢፍክን ስርሒ።", x: "ገለ ኣይትበሉ፡ ዝያዳን ቀልጢፍኩምን ስርሑ።" }, // = c.feelwell.o2
    "be.c.feelwell.o3": { m: "ኣብ ገዛ ጽናሕ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገር።", f: "ኣብ ገዛ ጽንሒ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገሪ።", x: "ኣብ ገዛ ጽንሑ፡ ስለምንታይ ከም ዝኾነ ድማ ንሓደ እኳ ኣይትንገሩ።" }, // = c.feelwell.o3
    "be.c.feelwell.w": { m: "ኣቐዲምካ ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኻ ክትጸሮ ኣየድልየካን።", f: "ኣቐዲምኪ ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኺ ክትጸርዮ ኣየድልየክን።", x: "ኣቐዲምኩም ምንጋር ድኽመት ኣይኮነን። ሽዑ ብሓባር መውጽኢ ክትደልዩ ትኽእሉ፡ ንኣብነት ካልእ ፈረቓታት። በይንኹም ክትጸርዎ ኣየድልየኩምን።" }, // = c.feelwell.w
};

export const fa: Gloss = {
    "be.w.huisartsenpost": "مرکز پزشک کشیک عصر، شب و آخر هفته (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "مرکز پزشک کشیک، چه کمکی از من برمی‌آید؟", // nieuw, nalezen
    "be.w.premie": "حق عضویت (آنچه به ziekenfonds می‌پردازی)", // nieuw, nalezen
    "be.w.eigenrisico": "سهم خودت (بخشی از هزینه که خودت می‌پردازی)", // nieuw, nalezen
    "be.w.zorgtoeslag": "کمک بیشتر برای هزینه‌های درمان (برای درآمد کم)", // nieuw, nalezen
    "be.w.verzekeraar": "صندوق بیمهٔ درمان (ziekenfonds، mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "من عضو یک صندوق بیمهٔ درمان هستم.", // nieuw, nalezen
    "be.s.insurance.2": "آیا این هزینه برگردانده می‌شود؟", // nieuw, nalezen
    "be.s.insurance.3": "برای کمک بیشتر هزینه‌های درمان درخواست می‌دهم.", // nieuw, nalezen
    "be.c.insurance.q": "عضو کدام صندوق بیمهٔ درمان هستی؟", // nieuw, nalezen
    "be.c.insurance.a": "نمی‌دانم. بررسی‌اش می‌کنم.", // nieuw, nalezen
    "be.c.doctor": "پزشک یا ۱۱۲؟", // = c.doctor
    "be.c.doctor.b": "یک پزشک خانواده (huisarts) نزدیک خانه‌ات انتخاب کن. عصر، شب یا آخر هفته پزشک لازم داری؟ به 1733 زنگ بزن: تو را به پزشک کشیک (huisartsenwachtpost) می‌فرستند. فقط در وضعیت اضطراری به 112 زنگ بزن: خطر جانی، آتش‌سوزی یا جرمی که همین حالا اتفاق می‌افتد. دارو را از داروخانه (apotheek) می‌گیری.", // nieuw, nalezen
    "be.c.doctor.p": "آیا هنوز بیمار جدید قبول می‌کنید؟", // nieuw, nalezen
    "be.c.doctor.s": "شنبه شب است. بچه‌ات تب بالایی دارد، ولی بیدار است و عادی نفس می‌کشد. چه کار می‌کنی؟", // = c.doctor.s
    "be.c.doctor.o1": "به 1733 زنگ بزن.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "به ۱۱۲ زنگ بزن.", // = c.doctor.o2
    "be.c.doctor.o3": "تا دوشنبه صبر کن و هیچ کاری نکن.", // = c.doctor.o3
    "be.c.doctor.w": "1733 کمکت می‌کند بیرون از ساعت اداری پزشک پیدا کنی. 112 برای وضعیت اضطراری است: خطر جانی، آتش‌سوزی یا جرمی که همین حالا اتفاق می‌افتد.", // nieuw, nalezen
    "be.c.insurance": "صندوق بیمهٔ درمان تو (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "در بلژیک باید عضو یک صندوق بیمهٔ درمان شوی: یک ziekenfonds (mutualiteit)، یا Hulpkas (HZIV). وقتی شروع به کار می‌کنی این کار را بکن. ziekenfonds بخشی از هزینهٔ پزشک، بیمارستان و دارو را برمی‌گرداند. بخشی که خودت می‌پردازی remgeld است. با درآمد کم ممکن است verhoogde tegemoetkoming بگیری: آن وقت کمتر می‌پردازی. مدت طولانی بیماری؟ آن وقت ziekenfonds به تو کمک‌هزینه هم می‌دهد. اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.", // nieuw, nalezen
    "be.c.insurance.p": "می‌خواهم عضو یک صندوق بیمهٔ درمان شوم. می‌توانید کمکم کنید؟", // nieuw, nalezen
    "be.c.insurance.s": "دو هفته پیش اینجا شروع به کار کردی و هنوز ziekenfonds نداری. چه کار می‌کنی؟", // nieuw, nalezen
    "be.c.insurance.o1": "زود عضو یک ziekenfonds شو.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "صبر کن: بیمهٔ کشور خودت کافی است.", // = c.insurance.o2
    "be.c.insurance.o3": "از کارت بیمهٔ یک دوست استفاده کن.", // = c.insurance.o3
    "be.c.insurance.w": "بدون ziekenfonds، پول پزشک و بیمارستان را خودت می‌پردازی. زود عضو شدن از تو محافظت می‌کند. کارفرما یا دفتر کاریابی موقت می‌تواند کمکت کند.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "خیلی زیاد است؟ لازم نیست تنهایی از پسش بربیایی", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "همه گاهی خسته، تحت فشار یا غمگین می‌شوند. کار خیلی زیاد (werkdruk)، خواب بد به خاطر کار شیفتی یا دلتنگی برای خانواده می‌تواند همه چیز را سنگین کند. لازم نیست این بار را تنهایی به دوش بکشی، و گفتن «خیلی زیاد است» ضعف نیست. با کسی که به او اعتماد داری حرف بزن: سرپرستت، مشاور معتمد (vertrouwenspersoon) یا مشاور پیشگیری (preventieadviseur psychosociale aspecten)، پزشک طب کار (arbeidsarts) یا پزشک خانواده‌ات (huisarts). خودت هم می‌توانی برای گفت‌وگو با پزشک طب کار وقت بخواهی. پزشک‌ها به رئیست نمی‌گویند تو چه گفته‌ای. به خودکشی فکر می‌کنی، یا نگران کسی هستی؟ به 1813 زنگ بزن (رایگان، شب و روز)، یا در zelfmoord1813.be چت کن.", // nieuw, nalezen
    "be.c.feelwell.p": "حالم زیاد خوب نیست. می‌توانم یک لحظه با تو حرف بزنم؟", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": "چند هفته است که بد می‌خوابی و کار خیلی زیاد است. خیلی خسته‌ای. چه کار می‌کنی؟", // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "به سرپرستت یا arbeidsarts می‌گویی.", // nieuw, nalezen
    "be.c.feelwell.o2": "چیزی نمی‌گویی و بیشتر و تندتر کار می‌کنی.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "در خانه می‌مانی و به هیچ‌کس نمی‌گویی چرا.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "زود گفتنش ضعف نیست. آن وقت می‌توانید با هم دنبال راه‌حلی بگردید، مثلاً شیفت‌های دیگر. لازم نیست تنهایی از پسش بربیایی.", // nieuw, nalezen (= c.feelwell.w)
};

export const prs: Gloss = {
    "be.w.huisartsenpost": "مرکز داکتر نوکریوال شام، شب و آخر هفته (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "مرکز داکتر نوکریوال، چه کمکی کرده می‌توانم؟", // nieuw, nalezen
    "be.w.premie": "حق عضویت (آنچه به ziekenfonds می‌پردازید)", // nieuw, nalezen
    "be.w.eigenrisico": "سهم خود تان (بخشی از مصرف که خود تان می‌پردازید)", // nieuw, nalezen
    "be.w.zorgtoeslag": "کمک بیشتر برای مصارف صحی (برای عاید کم)", // nieuw, nalezen
    "be.w.verzekeraar": "صندوق بیمهٔ صحی (ziekenfonds، mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "من عضو یک صندوق بیمهٔ صحی هستم.", // nieuw, nalezen
    "be.s.insurance.2": "آیا پول این مصرف برایم پس داده می‌شود؟", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.s.insurance.3": "برای کمک بیشتر مصارف صحی درخواست می‌دهم.", // nieuw, nalezen
    "be.c.insurance.q": "عضو کدام صندوق بیمهٔ صحی هستید؟", // nieuw, nalezen
    "be.c.insurance.a": "نمی‌دانم. آن را می‌بینم.", // nieuw, nalezen
    "be.c.doctor": "داکتر یا ۱۱۲؟", // = c.doctor
    "be.c.doctor.b": "یک داکتر فامیلی (huisarts) نزدیک خانهٔ خود انتخاب کنید. شام، شب یا آخر هفته داکتر لازم دارید؟ به 1733 زنگ بزنید: شما را به داکتر نوکریوال (huisartsenwachtpost) می‌فرستند. تنها در حالت عاجل به 112 زنگ بزنید: خطر جانی، آتش‌سوزی یا جرمی که همین حالا رخ می‌دهد. دوا را از دواخانه (apotheek) می‌گیرید.", // nieuw, nalezen
    "be.c.doctor.p": "آیا هنوز مریض نو قبول می‌کنید؟", // nieuw, nalezen
    "be.c.doctor.s": "شنبه شب است. بچهٔ شما تب بلند دارد، اما بیدار است و عادی نفس می‌کشد. چه می‌کنید؟", // = c.doctor.s
    "be.c.doctor.o1": "به 1733 زنگ بزنید.", // nieuw, nalezen
    "be.c.doctor.o2": "به ۱۱۲ زنگ بزنید.", // = c.doctor.o2
    "be.c.doctor.o3": "تا دوشنبه صبر کنید و هیچ کار نکنید.", // = c.doctor.o3
    "be.c.doctor.w": "1733 کمک می‌کند که بیرون از ساعات رسمی داکتر پیدا کنید. 112 برای حالت عاجل است: خطر جانی، آتش‌سوزی یا جرمی که همین حالا رخ می‌دهد.", // nieuw, nalezen
    "be.c.insurance": "صندوق بیمهٔ صحی شما (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "در بلجیم باید عضو یک صندوق بیمهٔ صحی شوید: یک ziekenfonds (mutualiteit)، یا Hulpkas (HZIV). وقتی کار را شروع می‌کنید این کار را بکنید. ziekenfonds بخشی از مصارف داکتر، شفاخانه و دوا را دوباره می‌پردازد. بخشی که خود تان می‌پردازید remgeld است. با عاید کم شاید verhoogde tegemoetkoming بگیرید: آن وقت کمتر می‌پردازید. برای مدت طولانی مریض هستید؟ آن وقت ziekenfonds به شما کمک‌پول هم می‌دهد. معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.", // nieuw, nalezen
    "be.c.insurance.p": "می‌خواهم عضو یک صندوق بیمهٔ صحی شوم. می‌توانید کمکم کنید؟", // nieuw, nalezen
    "be.c.insurance.s": "دو هفته پیش اینجا کار را شروع کردید و هنوز ziekenfonds ندارید. چه می‌کنید؟", // nieuw, nalezen
    "be.c.insurance.o1": "زود عضو یک ziekenfonds شوید.", // nieuw, nalezen
    "be.c.insurance.o2": "صبر کنید: بیمهٔ کشور خود تان کافی است.", // = c.insurance.o2
    "be.c.insurance.o3": "از کارت بیمهٔ یک دوست استفاده کنید.", // = c.insurance.o3
    "be.c.insurance.w": "بدون ziekenfonds، پول داکتر و شفاخانه را خود تان می‌پردازید. زود عضو شدن از شما محافظت می‌کند. کارفرما یا دفتر کاریابی موقت می‌تواند کمک تان کند.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "خیلی زیاد است؟ لازم نیست به تنهایی از عهدهٔ آن برآیید", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "همه گاهی مانده، تحت فشار یا غمگین می‌شوند. کار خیلی زیاد (werkdruk)، خواب بد به خاطر کار نوبتی یا دلتنگی برای فامیل می‌تواند همه چیز را سنگین کند. لازم نیست این بار را به تنهایی بردارید، و گفتن «خیلی زیاد است» ضعف نیست. با کسی که به او اعتماد دارید گپ بزنید: سرپرست خود، مشاور معتمد (vertrouwenspersoon) یا مشاور پیشگیری (preventieadviseur psychosociale aspecten)، داکتر طب کار (arbeidsarts) یا داکتر خانوادگی خود (huisarts). خود تان هم می‌توانید برای گپ زدن با داکتر طب کار وقت بخواهید. داکترها به آمر شما نمی‌گویند که شما چه گفته‌اید. به خودکشی فکر می‌کنید، یا نگران کسی هستید؟ به 1813 زنگ بزنید (رایگان، شب و روز)، یا در zelfmoord1813.be چت کنید.", // nieuw, nalezen
    "be.c.feelwell.p": "حالم زیاد خوب نیست. می‌توانم یک لحظه با شما گپ بزنم؟", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": "چند هفته است که بد خواب می‌کنید و کار خیلی زیاد است. خیلی مانده هستید. چه می‌کنید؟", // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "به سرپرست خود یا arbeidsarts بگویید.", // nieuw, nalezen
    "be.c.feelwell.o2": "چیزی نگویید و سخت‌تر و تیزتر کار کنید.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "در خانه بمانید و به هیچ کس نگویید چرا.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "زود گفتن آن ضعف نیست. آن وقت می‌توانید با هم راه حلی پیدا کنید، مثلاً نوبت‌های کاری دیگر. لازم نیست به تنهایی از عهدهٔ آن برآیید.", // nieuw, nalezen (= c.feelwell.w)
};

export const uk: Gloss = {
    "be.w.huisartsenpost": "чергова служба сімейних лікарів увечері, вночі й на вихідних (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Чергова служба лікарів, чим я можу допомогти?", // nieuw, nalezen
    "be.w.premie": "членський внесок (те, що платиш у ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "власна частка (частина вартості, яку платиш ти)", // nieuw, nalezen // nagelezen AI ronde 3
    "be.w.zorgtoeslag": "підвищена компенсація (додаткова допомога з витратами на здоров’я при низькому доході)", // nieuw, nalezen
    "be.w.verzekeraar": "лікарняна каса (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Я член лікарняної каси.", // nieuw, nalezen
    "be.s.insurance.2": "Це відшкодовують?", // nieuw, nalezen
    "be.s.insurance.3": "Я подаю заяву на підвищену компенсацію.", // nieuw, nalezen
    "be.c.insurance.q": "У якій ти лікарняній касі?", // nieuw, nalezen
    "be.c.insurance.a": "Не знаю. Я перевірю.", // nieuw, nalezen
    "be.c.doctor": "Лікар чи 112?", // = c.doctor
    "be.c.doctor.b": "Обери сімейного лікаря (huisarts) біля дому. Потрібен лікар увечері, вночі або на вихідних? Дзвони 1733: тебе направлять до чергового лікаря (huisartsenwachtpost). Дзвони 112 тільки в надзвичайній ситуації: загроза життю, пожежа або злочин, який відбувається зараз. Ліки ти отримуєш в аптеці (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Ви ще приймаєте нових пацієнтів?", // nieuw, nalezen
    "be.c.doctor.s": "Суботній вечір. У твоєї дитини висока температура, але вона при тямі й дихає нормально. Що ти зробиш?", // = c.doctor.s
    "be.c.doctor.o1": "Подзвониш 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Подзвониш 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Чекатимеш до понеділка й нічого не робитимеш.", // = c.doctor.o3
    "be.c.doctor.w": "1733 допомагає знайти лікаря поза робочими годинами. 112 — для надзвичайних ситуацій: загроза життю, пожежа або злочин, який відбувається зараз.", // nieuw, nalezen
    "be.c.insurance": "Твоя лікарняна каса (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "У Бельгії ти мусиш вступити до лікарняної каси: ziekenfonds (mutualiteit) або Hulpkas (HZIV). Зроби це, коли починаєш працювати. Ziekenfonds повертає частину витрат на лікаря, лікарню та ліки. Частина, яку платиш ти, називається remgeld. З низьким доходом ти можеш отримати verhoogde tegemoetkoming: тоді платиш менше. Довго хворієш? Тоді ziekenfonds також виплачує тобі допомогу. Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.p": "Я хочу вступити до лікарняної каси. Ви можете мені допомогти?", // nieuw, nalezen
    "be.c.insurance.s": "Ти почав / почала тут працювати два тижні тому, і в тебе ще немає ziekenfonds. Що ти зробиш?", // nieuw, nalezen
    "be.c.insurance.o1": "Швидко вступиш до ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Почекаєш: страхування з твоєї країни вистачить.", // = c.insurance.o2
    "be.c.insurance.o3": "Користуватимешся страховою карткою друга.", // = c.insurance.o3
    "be.c.insurance.w": "Без ziekenfonds ти платиш лікарю та лікарні сам / сама. Швидко вступити — значить захистити себе. Роботодавець або агентство тимчасової роботи можуть допомогти.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "Забагато? Не залишайся з цим наодинці", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "Кожен часом почувається втомленим, напруженим або сумним. Забагато роботи (werkdruk), поганий сон через змінну роботу або туга за родиною можуть зробити все важким. Не треба нести це наодинці, і сказати «це забагато» — не слабкість. Поговори з кимось, кому довіряєш: з керівником, з довіреною особою (vertrouwenspersoon) або з радником з профілактики (preventieadviseur psychosociale aspecten), з лікарем з медицини праці (arbeidsarts) або зі своїм сімейним лікарем (huisarts). Ти також можеш з власної ініціативи попросити про розмову з лікарем з медицини праці. Лікарі не переказують керівникові того, що ти їм кажеш. Думаєш про самогубство або хвилюєшся за когось? Подзвони на 1813 (безкоштовно, вдень і вночі) або напиши в чат на zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Мені не дуже добре. Можна з тобою трохи поговорити?", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": { m: "Уже кілька тижнів ти погано спиш, а роботи забагато. Ти почуваєшся дуже втомленим. Що ти зробиш?", f: "Уже кілька тижнів ти погано спиш, а роботи забагато. Ти почуваєшся дуже втомленою. Що ти зробиш?", x: "Уже кілька тижнів ти погано спиш, а роботи забагато. Сил зовсім немає. Що ти зробиш?" }, // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "Скажеш керівнику або лікарю з медицини праці (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Нічого не скажеш і працюватимеш більше й швидше.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "Залишишся вдома й нікому не скажеш чому.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "Сказати про це рано — не слабкість. Тоді ви разом можете шукати вихід, наприклад інші зміни. Не треба справлятися з цим наодинці.", // nieuw, nalezen (= c.feelwell.w)
};

export const tr: Gloss = {
    "be.w.huisartsenpost": "akşam, gece ve hafta sonu nöbetçi aile hekimi merkezi (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Nöbetçi aile hekimi merkezi, size nasıl yardım edebilirim?", // nieuw, nalezen
    "be.w.premie": "üyelik aidatı (ziekenfonds’a ödediğin)", // nieuw, nalezen
    "be.w.eigenrisico": "katkı payı (masrafın kendin ödediğin kısmı)", // nieuw, nalezen
    "be.w.zorgtoeslag": "artırılmış geri ödeme (düşük gelirde sağlık masraflarına ek yardım)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.w.verzekeraar": "sağlık sigortası kurumu (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Bir sağlık sigortası kurumuna üyeyim.", // nieuw, nalezen
    "be.s.insurance.2": "Bu geri ödeniyor mu?", // nieuw, nalezen
    "be.s.insurance.3": "Artırılmış geri ödeme için başvuruyorum.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance.q": "Hangi sağlık sigortası kurumundasın?", // nieuw, nalezen
    "be.c.insurance.a": "Bilmiyorum. Kontrol edeceğim.", // nieuw, nalezen
    "be.c.doctor": "Doktor mu, 112 mi?", // = c.doctor
    "be.c.doctor.b": "Evine yakın bir aile hekimi (huisarts) seç. Akşam, gece veya hafta sonu doktora mı ihtiyacın var? 1733’ü ara: seni nöbetçi doktora (huisartsenwachtpost) yönlendirirler. 112’yi sadece acil durumda ara: hayati tehlike, yangın veya şu an işlenen bir suç. İlaçları eczaneden (apotheek) alırsın.", // nieuw, nalezen
    "be.c.doctor.p": "Hâlâ yeni hasta kabul ediyor musunuz?", // nieuw, nalezen
    "be.c.doctor.s": "Cumartesi gecesi. Çocuğunun ateşi yüksek ama uyanık ve normal nefes alıyor. Ne yaparsın?", // = c.doctor.s
    "be.c.doctor.o1": "1733’ü ararsın.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "112’yi ararsın.", // = c.doctor.o2
    "be.c.doctor.o3": "Pazartesiye kadar bekler ve hiçbir şey yapmazsın.", // = c.doctor.o3
    "be.c.doctor.w": "1733 mesai saatleri dışında doktor bulmana yardım eder. 112 acil durumlar içindir: hayati tehlike, yangın veya şu an işlenen bir suç.", // nieuw, nalezen
    "be.c.insurance": "Sağlık sigortası kurumun (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "Belçika’da bir sağlık sigortası kurumuna üye olmalısın: bir ziekenfonds (mutualiteit) ya da Hulpkas (HZIV). Bunu işe başladığında yap. Ziekenfonds doktor, hastane ve ilaç masraflarının bir kısmını geri öder. Kendin ödediğin kısım remgeld’dir. Gelirin düşükse verhoogde tegemoetkoming alabilirsin: o zaman daha az ödersin. Uzun süre mi hastasın? O zaman ziekenfonds sana bir ödenek de öder. Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.", // nieuw, nalezen
    "be.c.insurance.p": "Bir sağlık sigortası kurumuna üye olmak istiyorum. Bana yardım edebilir misiniz?", // nieuw, nalezen
    "be.c.insurance.s": "İki hafta önce burada çalışmaya başladın ve henüz bir ziekenfonds’un yok. Ne yaparsın?", // nieuw, nalezen
    "be.c.insurance.o1": "Hemen bir ziekenfonds’a üye olursun.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Beklersin: kendi ülkendeki sigortan yeterli.", // = c.insurance.o2
    "be.c.insurance.o3": "Bir arkadaşının sigorta kartını kullanırsın.", // = c.insurance.o3
    "be.c.insurance.w": "Ziekenfonds olmadan doktoru ve hastaneyi kendin ödersin. Hemen üye olmak seni korur. İşverenin veya geçici iş ajansın sana yardım edebilir.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "Çok mu fazla? Tek başına yapmak zorunda değilsin", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "Herkes bazen yorgun, stresli ya da üzgün hisseder. Çok fazla iş (werkdruk), vardiyalı çalışma yüzünden kötü uyku ya da aileni özlemek her şeyi ağırlaştırabilir. Bunu tek başına taşımak zorunda değilsin ve “bu çok fazla” demek zayıflık değildir. Güvendiğin biriyle konuş: amirin, güven danışmanı (vertrouwenspersoon) ya da önleme danışmanı (preventieadviseur psychosociale aspecten), iş yeri hekimi (arbeidsarts) ya da aile hekimin (huisarts). İş yeri hekimiyle bir görüşmeyi kendin de isteyebilirsin. Doktorlar ne söylediğini patronuna anlatmaz. İntihar etmeyi mi düşünüyorsun, ya da biri için endişeleniyor musun? 1813’ü ara (ücretsiz, gece gündüz) ya da zelfmoord1813.be’de sohbet et.", // nieuw, nalezen
    "be.c.feelwell.p": "Pek iyi değilim. Seninle biraz konuşabilir miyim?", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": "Haftalardır kötü uyuyorsun ve iş çok fazla. Kendini çok yorgun hissediyorsun. Ne yaparsın?", // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "Amirine ya da arbeidsarts’a söylersin.", // nieuw, nalezen
    "be.c.feelwell.o2": "Hiçbir şey söylemez, daha çok ve daha hızlı çalışırsın.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "Evde kalır, kimseye nedenini söylemezsin.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "Bunu erken söylemek zayıflık değildir. O zaman birlikte bir çıkış yolu arayabilirsiniz, örneğin başka vardiyalar. Bunu tek başına yapmak zorunda değilsin.", // nieuw, nalezen (= c.feelwell.w)
};

export const pl: Gloss = {
    "be.w.huisartsenpost": "dyżur lekarzy rodzinnych wieczorem, w nocy i w weekend (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Dyżur lekarzy rodzinnych, w czym mogę pomóc?", // nieuw, nalezen
    "be.w.premie": "składka członkowska (to, co płacisz do ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "udział własny (część kosztów, którą płacisz z własnej kieszeni)", // nieuw, nalezen // nagelezen AI ronde 3
    "be.w.zorgtoeslag": "podwyższony zwrot (dodatkowa pomoc w kosztach leczenia przy niskich dochodach)", // nieuw, nalezen
    "be.w.verzekeraar": "kasa chorych (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Należę do kasy chorych.", // nieuw, nalezen
    "be.s.insurance.2": "Czy to jest refundowane?", // nieuw, nalezen
    "be.s.insurance.3": "Składam wniosek o podwyższony zwrot.", // nieuw, nalezen
    "be.c.insurance.q": "W której jesteś kasie chorych?", // nieuw, nalezen
    "be.c.insurance.a": "Nie wiem. Sprawdzę to.", // nieuw, nalezen
    "be.c.doctor": "Lekarz czy 112?", // = c.doctor
    "be.c.doctor.b": "Wybierz lekarza rodzinnego (huisarts) blisko domu. Potrzebujesz lekarza wieczorem, w nocy albo w weekend? Dzwoń pod 1733: skierują cię do lekarza dyżurnego (huisartsenwachtpost). Pod 112 dzwoń tylko w nagłym wypadku: zagrożenie życia, pożar albo przestępstwo, które dzieje się teraz. Leki dostajesz w aptece (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Czy przyjmuje pan/pani jeszcze nowych pacjentów?", // nieuw, nalezen
    "be.c.doctor.s": "Jest sobota w nocy. Twoje dziecko ma wysoką gorączkę, ale jest przytomne i normalnie oddycha. Co robisz?", // = c.doctor.s
    "be.c.doctor.o1": "Dzwonisz pod 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Dzwonisz pod 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Czekasz do poniedziałku i nic nie robisz.", // = c.doctor.o3
    "be.c.doctor.w": "1733 pomaga znaleźć lekarza poza godzinami pracy przychodni. 112 jest na nagłe wypadki: zagrożenie życia, pożar albo przestępstwo, które dzieje się teraz.", // nieuw, nalezen
    "be.c.insurance": "Twoja kasa chorych (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "W Belgii musisz należeć do kasy chorych: ziekenfonds (mutualiteit) albo Hulpkas (HZIV). Zrób to, kiedy zaczynasz pracę. Ziekenfonds zwraca część kosztów lekarza, szpitala i leków. Część, którą płacisz z własnej kieszeni, to remgeld. Przy niskich dochodach możesz dostać verhoogde tegemoetkoming: wtedy płacisz mniej. Chorujesz długo? Wtedy ziekenfonds wypłaca ci też zasiłek. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.p": "Chcę zapisać się do kasy chorych. Może mi pan/pani pomóc?", // nieuw, nalezen
    "be.c.insurance.s": "Od dwóch tygodni tu pracujesz i nie masz jeszcze ziekenfonds. Co robisz?", // nieuw, nalezen
    "be.c.insurance.o1": "Szybko zapisujesz się do ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Czekasz: ubezpieczenie z twojego kraju wystarczy.", // = c.insurance.o2
    "be.c.insurance.o3": "Używasz karty ubezpieczenia kolegi.", // = c.insurance.o3
    "be.c.insurance.w": "Bez ziekenfonds za lekarza i szpital płacisz z własnej kieszeni. Szybkie zapisanie się chroni cię. Pracodawca albo agencja pracy tymczasowej może ci pomóc.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "Za dużo? Nie musisz radzić sobie w pojedynkę", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "Każdy czasem czuje się zmęczony, zestresowany albo smutny. Za dużo pracy (werkdruk), zły sen przez pracę zmianową albo tęsknota za rodziną mogą sprawić, że jest ciężko. Nie musisz dźwigać tego w pojedynkę, a powiedzieć „to za dużo” to nie słabość. Porozmawiaj z kimś, komu ufasz: z przełożonym, z osobą zaufania (vertrouwenspersoon) albo z doradcą ds. prewencji (preventieadviseur psychosociale aspecten), z lekarzem medycyny pracy (arbeidsarts) albo ze swoim lekarzem rodzinnym (huisarts). Możesz też z własnej inicjatywy poprosić o rozmowę z lekarzem medycyny pracy. Lekarze nie przekazują szefowi tego, co im mówisz. Myślisz o samobójstwie albo martwisz się o kogoś? Zadzwoń pod 1813 (bezpłatnie, w dzień i w nocy) albo napisz na czacie na zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Nie czuję się najlepiej. Czy mogę chwilę z tobą porozmawiać?", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": { m: "Od tygodni źle śpisz, a pracy jest za dużo. Czujesz się bardzo zmęczony. Co robisz?", f: "Od tygodni źle śpisz, a pracy jest za dużo. Czujesz się bardzo zmęczona. Co robisz?", x: "Od tygodni źle śpisz, a pracy jest za dużo. Bardzo brakuje ci sił. Co robisz?" }, // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "Mówisz o tym przełożonemu albo lekarzowi medycyny pracy (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Nic nie mówisz i pracujesz ciężej i szybciej.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "Zostajesz w domu i nikomu nie mówisz dlaczego.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "Powiedzieć o tym wcześnie to nie słabość. Wtedy razem możecie szukać wyjścia, na przykład innych zmian. Nie musisz radzić sobie z tym w pojedynkę.", // nieuw, nalezen (= c.feelwell.w)
};

export const ro: Gloss = {
    "be.w.huisartsenpost": "centrul de gardă al medicilor de familie seara, noaptea și în weekend (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Centrul de gardă, cu ce vă pot ajuta?", // nieuw, nalezen
    "be.w.premie": "cotizația (ce plătești la ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "partea ta (partea din cost pe care o plătești tu)", // nieuw, nalezen
    "be.w.zorgtoeslag": "rambursarea mărită (ajutor în plus la costurile de sănătate, pentru venit mic)", // nieuw, nalezen
    "be.w.verzekeraar": "casa de asigurări de sănătate (ziekenfonds, mutualiteit)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.s.insurance.1": "Sunt membru al unei case de asigurări de sănătate.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.s.insurance.2": "Se rambursează asta?", // nieuw, nalezen
    "be.s.insurance.3": "Cer rambursarea mărită.", // nieuw, nalezen
    "be.c.insurance.q": "La ce casă de asigurări de sănătate ești?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance.a": "Nu știu. Verific.", // nieuw, nalezen
    "be.c.doctor": "Doctor sau 112?", // = c.doctor
    "be.c.doctor.b": "Alege un medic de familie (huisarts) aproape de casă. Ai nevoie de un medic seara, noaptea sau în weekend? Sună la 1733: te trimit la medicul de gardă (huisartsenwachtpost). Sună la 112 doar în caz de urgență: pericol de moarte, incendiu sau o infracțiune care are loc acum. Medicamentele le iei de la farmacie (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Mai primiți pacienți noi?", // nieuw, nalezen
    "be.c.doctor.s": "E sâmbătă noaptea. Copilul tău are febră mare, dar e treaz și respiră normal. Ce faci?", // = c.doctor.s
    "be.c.doctor.o1": "Suni la 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Suni la 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Aștepți până luni și nu faci nimic.", // = c.doctor.o3
    "be.c.doctor.w": "1733 te ajută să găsești un medic în afara orelor de program. 112 e pentru urgențe: pericol de moarte, incendiu sau o infracțiune care are loc acum.", // nieuw, nalezen
    "be.c.insurance": "Casa ta de sănătate (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "În Belgia trebuie să te înscrii la o casă de sănătate: un ziekenfonds (mutualiteit) sau Hulpkas (HZIV). Fă asta când începi să lucrezi. Ziekenfonds-ul îți dă înapoi o parte din costurile pentru medic, spital și medicamente. Partea pe care o plătești tu e remgeld. Cu un venit mic poți primi verhoogde tegemoetkoming: atunci plătești mai puțin. Ești bolnav / bolnavă mult timp? Atunci ziekenfonds-ul îți plătește și o indemnizație. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.p": "Vreau să mă înscriu la o casă de sănătate. Mă puteți ajuta?", // nieuw, nalezen
    "be.c.insurance.s": "Lucrezi aici de două săptămâni și încă nu ai ziekenfonds. Ce faci?", // nieuw, nalezen
    "be.c.insurance.o1": "Te înscrii repede la un ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Aștepți: asigurarea din țara ta e suficientă.", // = c.insurance.o2
    "be.c.insurance.o3": "Folosești cardul de asigurare al unui prieten.", // = c.insurance.o3
    "be.c.insurance.w": "Fără ziekenfonds plătești singur / singură medicul și spitalul. Dacă te înscrii repede, te protejezi. Angajatorul sau agenția de muncă temporară te poate ajuta.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": { m: "Prea mult? Nu trebuie să faci totul singur", f: "Prea mult? Nu trebuie să faci totul singură", x: "Prea mult? Nu trebuie să faci totul fără ajutor" }, // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "Toată lumea se simte uneori obosită, stresată sau tristă. Prea mult de lucru (werkdruk), somnul prost din cauza schimburilor sau dorul de familie pot face totul greu. Nu trebuie să duci povara fără ajutor, iar să spui „e prea mult” nu e o slăbiciune. Vorbește cu cineva în care ai încredere: cu șeful, cu persoana de încredere (vertrouwenspersoon) sau cu consilierul de prevenire (preventieadviseur psychosociale aspecten), cu medicul de medicina muncii (arbeidsarts) sau cu medicul tău de familie (huisarts). Poți cere și tu o discuție cu medicul de medicina muncii. Medicii nu-i spun șefului ce le-ai spus. Te gândești la sinucidere sau îți faci griji pentru cineva? Sună la 1813 (gratuit, zi și noapte) sau scrie pe chat la zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Nu mă simt prea bine. Pot să vorbesc puțin cu tine?", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": { m: "De câteva săptămâni dormi prost și munca e prea multă. Te simți foarte obosit. Ce faci?", f: "De câteva săptămâni dormi prost și munca e prea multă. Te simți foarte obosită. Ce faci?", x: "De câteva săptămâni dormi prost și munca e prea multă. Simți o oboseală foarte mare. Ce faci?" }, // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "Îi spui șefului sau medicului de medicina muncii (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Nu spui nimic și muncești mai mult și mai repede.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "Rămâi acasă și nu spui nimănui de ce.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "Să spui asta din timp nu e o slăbiciune. Atunci puteți căuta împreună o soluție, de exemplu alte schimburi. Nu trebuie să treci prin asta fără ajutor.", // nieuw, nalezen (= c.feelwell.w)
};

export const bg: Gloss = {
    "be.w.huisartsenpost": "дежурният център на личните лекари вечер, нощем и през уикенда (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Дежурен лекарски център, с какво мога да помогна?", // nieuw, nalezen
    "be.w.premie": "членският внос (това, което плащаш на ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "собственото участие (частта от разходите, която плащаш ти)", // nieuw, nalezen // nagelezen AI ronde 3
    "be.w.zorgtoeslag": "повишеното възстановяване (допълнителна помощ за здравни разходи при нисък доход)", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.w.verzekeraar": "здравната каса (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Член съм на здравна каса.", // nieuw, nalezen
    "be.s.insurance.2": "Това възстановява ли се?", // nieuw, nalezen
    "be.s.insurance.3": "Кандидатствам за повишено възстановяване на здравните разходи.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance.q": "В коя здравна каса си?", // nieuw, nalezen
    "be.c.insurance.a": "Не знам. Ще проверя.", // nieuw, nalezen
    "be.c.doctor": "Лекар или 112?", // = c.doctor
    "be.c.doctor.b": "Избери си личен лекар (huisarts) близо до дома. Трябва ти лекар вечер, нощем или през уикенда? Обади се на 1733: ще те насочат към дежурния лекар (huisartsenwachtpost). Обаждай се на 112 само при спешен случай: опасност за живота, пожар или престъпление, което става сега. Лекарства взимаш от аптеката (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Приемате ли още нови пациенти?", // nieuw, nalezen
    "be.c.doctor.s": "Събота вечер е. Детето ти има висока температура, но е будно и диша нормално. Какво правиш?", // = c.doctor.s
    "be.c.doctor.o1": "Обаждаш се на 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Обаждаш се на 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Чакаш до понеделник и не правиш нищо.", // = c.doctor.o3
    "be.c.doctor.w": "1733 ти помага да намериш лекар извън работното време. 112 е за спешни случаи: опасност за живота, пожар или престъпление, което става сега.", // nieuw, nalezen
    "be.c.insurance": "Твоята здравна каса (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "В Белгия трябва да се запишеш в здравна каса: ziekenfonds (mutualiteit) или Hulpkas (HZIV). Направи го, когато започнеш работа. Ziekenfonds връща част от разходите за лекар, болница и лекарства. Частта, която плащаш ти, е remgeld. При нисък доход може да получиш verhoogde tegemoetkoming: тогава плащаш по-малко. Болен / болна си дълго време? Тогава ziekenfonds ти плаща и обезщетение. Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.p": "Искам да се запиша в здравна каса. Можете ли да ми помогнете?", // nieuw, nalezen
    "be.c.insurance.s": "Работиш тук от две седмици и още нямаш ziekenfonds. Какво правиш?", // nieuw, nalezen
    "be.c.insurance.o1": "Бързо се записваш в ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Чакаш: застраховката от твоята страна е достатъчна.", // = c.insurance.o2
    "be.c.insurance.o3": "Ползваш здравната карта на приятел.", // = c.insurance.o3
    "be.c.insurance.w": "Без ziekenfonds плащаш сам / сама на лекаря и болницата. Бързото записване те пази. Работодателят или агенцията за временна работа могат да ти помогнат.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "Твърде много? Не е нужно да се справяш без помощ", // nieuw, nalezen (= c.feelwell)
    "be.c.feelwell.b": "Всеки понякога се чувства уморен, стресиран или тъжен. Твърде много работа (werkdruk), лош сън заради сменната работа или липсата на семейството могат да направят всичко тежко. Не е нужно да носиш това без помощ, и да кажеш „твърде много е“ не е слабост. Поговори с човек, на когото имаш доверие: с началника си, с довереното лице (vertrouwenspersoon) или със съветника по превенция (preventieadviseur psychosociale aspecten), с лекаря по трудова медицина (arbeidsarts) или с личния си лекар (huisarts). Можеш и по своя инициатива да поискаш разговор с лекаря по трудова медицина. Лекарите не казват на шефа ти какво им казваш. Мислиш за самоубийство или се тревожиш за някого? Обади се на 1813 (безплатно, денем и нощем) или пиши в чата на zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Не съм много добре. Може ли да поговоря с теб за малко?", // nieuw, nalezen (= c.feelwell.p)
    "be.c.feelwell.s": { m: "От седмици спиш лошо и работата е твърде много. Чувстваш се много уморен. Какво правиш?", f: "От седмици спиш лошо и работата е твърде много. Чувстваш се много уморена. Какво правиш?", x: "От седмици спиш лошо и работата е твърде много. Чувстваш се много уморен / уморена. Какво правиш?" }, // nieuw, nalezen (= c.feelwell.s)
    "be.c.feelwell.o1": "Казваш на началника си или на лекаря по трудова медицина (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Не казваш нищо и работиш повече и по-бързо.", // nieuw, nalezen (= c.feelwell.o2)
    "be.c.feelwell.o3": "Оставаш вкъщи и не казваш на никого защо.", // nieuw, nalezen (= c.feelwell.o3)
    "be.c.feelwell.w": "Да го кажеш рано не е слабост. Тогава можете заедно да търсите изход, например други смени. Не е нужно да се справяш без помощ.", // nieuw, nalezen (= c.feelwell.w)
};

export const es: Gloss = {
    "be.w.huisartsenpost": "el servicio de médicos de guardia por la tarde, la noche y el fin de semana (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Médicos de guardia, ¿en qué puedo ayudarle?", // nieuw, nalezen
    "be.w.premie": "la cuota (lo que pagas al ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "el copago (la parte del coste que pagas tú)", // nieuw, nalezen
    "be.w.zorgtoeslag": "la ayuda aumentada (ayuda extra con los gastos de salud, para ingresos bajos)", // nieuw, nalezen
    "be.w.verzekeraar": "la mutua de salud (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Soy socio de una mutua de salud.", // nieuw, nalezen
    "be.s.insurance.2": "¿Esto se reembolsa?", // nieuw, nalezen
    "be.s.insurance.3": "Pido la ayuda aumentada.", // nieuw, nalezen
    "be.c.insurance.q": "¿En qué mutua de salud estás?", // nieuw, nalezen
    "be.c.insurance.a": "No lo sé. Lo miro.", // nieuw, nalezen
    "be.c.doctor": "¿Médico o 112?", // = c.doctor
    "be.c.doctor.b": "Elige un médico de cabecera (huisarts) cerca de tu casa. ¿Necesitas un médico por la tarde, por la noche o el fin de semana? Llama al 1733: te mandan al médico de guardia (huisartsenwachtpost). Llama al 112 solo en una emergencia: peligro para la vida, incendio o un delito que está pasando ahora. Las medicinas las recoges en la farmacia (apotheek).", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.doctor.p": "¿Todavía acepta pacientes nuevos?", // nieuw, nalezen
    "be.c.doctor.s": "Es sábado por la noche. Tu hijo tiene mucha fiebre, pero está despierto y respira normal. ¿Qué haces?", // = c.doctor.s
    "be.c.doctor.o1": "Llamas al 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Llamas al 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Esperas hasta el lunes y no haces nada.", // = c.doctor.o3
    "be.c.doctor.w": "El 1733 te ayuda a encontrar un médico fuera del horario de consulta. El 112 es para emergencias: peligro para la vida, incendio o un delito que está pasando ahora.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance": "Tu mutua de salud (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "En Bélgica tienes que apuntarte a una mutua de salud: un ziekenfonds (mutualiteit), o la Hulpkas (HZIV). Hazlo cuando empieces a trabajar. El ziekenfonds te devuelve una parte de lo que cuestan el médico, el hospital y las medicinas. La parte que pagas tú es el remgeld. Con ingresos bajos puedes recibir la verhoogde tegemoetkoming: entonces pagas menos. ¿Estás enfermo mucho tiempo? Entonces el ziekenfonds también te paga una prestación. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.insurance.p": "Quiero hacerme socio de una mutua de salud. ¿Me puede ayudar?", // nieuw, nalezen
    "be.c.insurance.s": "Empezaste a trabajar aquí hace dos semanas y todavía no tienes ziekenfonds. ¿Qué haces?", // nieuw, nalezen
    "be.c.insurance.o1": "Te apuntas pronto a un ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Esperas: el seguro de tu país es suficiente.", // = c.insurance.o2
    "be.c.insurance.o3": "Usas la tarjeta del seguro de un amigo.", // = c.insurance.o3
    "be.c.insurance.w": "Sin ziekenfonds, el médico y el hospital los pagas tú. Apuntarte pronto te protege. Tu empresa o tu agencia de trabajo temporal te pueden ayudar.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "¿Demasiado? No tienes que hacerlo sin ayuda", // nieuw, nalezen
    "be.c.feelwell.b": "Todo el mundo se siente a veces cansado, estresado o triste. Demasiado trabajo (werkdruk), dormir mal por los turnos o echar de menos a tu familia pueden hacerlo pesado. No tienes que cargar con ello sin ayuda, y decir “es demasiado” no es ser débil. Habla con alguien de confianza: tu encargado, la persona de confianza (vertrouwenspersoon) o el asesor de prevención (preventieadviseur psychosociale aspecten), el médico del trabajo (arbeidsarts) o tu médico de cabecera (huisarts). También puedes pedir por tu cuenta una conversación con el médico del trabajo. Los médicos no le cuentan a tu jefe lo que les has dicho. ¿Piensas en el suicidio, o te preocupa alguien? Llama al 1813 (gratis, de día y de noche), o chatea en zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "No estoy muy bien. ¿Puedo hablar contigo un momento?", // nieuw, nalezen
    "be.c.feelwell.s": { m: "Desde hace semanas duermes mal y el trabajo es demasiado. Te sientes muy cansado. ¿Qué haces?", f: "Desde hace semanas duermes mal y el trabajo es demasiado. Te sientes muy cansada. ¿Qué haces?", x: "Desde hace semanas duermes mal y el trabajo es demasiado. Sientes mucho cansancio. ¿Qué haces?" }, // nieuw, nalezen
    "be.c.feelwell.o1": "Se lo dices a tu encargado o al médico del trabajo (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "No dices nada, y trabajas más y más rápido.", // nieuw, nalezen
    "be.c.feelwell.o3": "Te quedas en casa, y no le dices a nadie por qué.", // nieuw, nalezen
    "be.c.feelwell.w": "Decirlo pronto no es ser débil. Entonces se puede buscar una solución entre todos, por ejemplo otros turnos. No tienes que hacerlo sin ayuda.", // nieuw, nalezen
};

export const pt: Gloss = {
    "be.w.huisartsenpost": "o posto de médicos de família de serviço à noite e ao fim de semana (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Posto de médicos de serviço, em que posso ajudar?", // nieuw, nalezen
    "be.w.premie": "a quota (o que pagas ao ziekenfonds)", // nieuw, nalezen
    "be.w.eigenrisico": "a taxa moderadora (a parte do custo que pagas tu)", // nieuw, nalezen
    "be.w.zorgtoeslag": "a comparticipação aumentada (ajuda extra nos custos de saúde, para rendimentos baixos)", // nieuw, nalezen
    "be.w.verzekeraar": "a mutualidade de saúde (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Sou membro de uma mutualidade de saúde.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.s.insurance.2": "Isto é reembolsado?", // nieuw, nalezen
    "be.s.insurance.3": "Peço a comparticipação aumentada.", // nieuw, nalezen
    "be.c.insurance.q": "Em que mutualidade de saúde estás?", // nieuw, nalezen
    "be.c.insurance.a": "Não sei. Vou ver.", // nieuw, nalezen
    "be.c.doctor": "Médico ou 112?", // = c.doctor
    "be.c.doctor.b": "Escolhe um médico de família (huisarts) perto de casa. Precisas de um médico à noite ou ao fim de semana? Liga para o 1733: mandam-te para o médico de serviço (huisartsenwachtpost). Liga para o 112 só numa emergência: perigo de vida, fogo ou um crime a acontecer agora. Os medicamentos levantas na farmácia (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Ainda aceita doentes novos?", // nieuw, nalezen
    "be.c.doctor.s": "É sábado à noite. O teu filho tem febre alta, mas está acordado e respira normalmente. O que fazes?", // = c.doctor.s
    "be.c.doctor.o1": "Ligas para o 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Ligas para o 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Esperas até segunda-feira e não fazes nada.", // = c.doctor.o3
    "be.c.doctor.w": "O 1733 ajuda-te a encontrar um médico fora do horário normal. O 112 é para emergências: perigo de vida, fogo ou um crime a acontecer agora.", // nieuw, nalezen
    "be.c.insurance": "A tua mutualidade de saúde (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "Na Bélgica tens de te inscrever numa mutualidade de saúde: um ziekenfonds (mutualiteit), ou a Hulpkas (HZIV). Fá-lo quando começas a trabalhar. O ziekenfonds devolve uma parte dos custos do médico, do hospital e dos medicamentos. A parte que pagas tu é o remgeld. Com rendimentos baixos podes receber a verhoogde tegemoetkoming: então pagas menos. Estás doente muito tempo? Então o ziekenfonds também te paga um subsídio. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
    "be.c.insurance.p": "Quero inscrever-me numa mutualidade de saúde. Pode ajudar-me?", // nieuw, nalezen
    "be.c.insurance.s": "Começaste a trabalhar aqui há duas semanas e ainda não tens ziekenfonds. O que fazes?", // nieuw, nalezen
    "be.c.insurance.o1": "Inscreves-te depressa num ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Esperas: o seguro do teu país chega.", // = c.insurance.o2
    "be.c.insurance.o3": "Usas o cartão do seguro de um amigo.", // = c.insurance.o3
    "be.c.insurance.w": "Sem ziekenfonds, o médico e o hospital pagas tu. Inscrever-te depressa protege-te. O teu empregador ou a agência de trabalho temporário podem ajudar-te.", // nieuw, nalezen
    "be.c.feelwell": "É demais? Não tens de passar por isto sem ajuda", // nieuw, nalezen
    "be.c.feelwell.b": "Toda a gente se sente às vezes cansada, stressada ou triste. Trabalho a mais (werkdruk), dormir mal por causa dos turnos ou ter saudades da família podem tornar tudo pesado. Não tens de carregar isso sem ajuda, e dizer \"é demais\" não é fraqueza. Fala com alguém de confiança: o teu chefe, a pessoa de confiança (vertrouwenspersoon) ou o conselheiro de prevenção (preventieadviseur psychosociale aspecten), o médico do trabalho (arbeidsarts) ou o teu médico de família (huisarts). Também podes ser tu a pedir uma conversa com o médico do trabalho. Os médicos não contam ao teu patrão o que disseste. Pensas em suicídio, ou preocupa-te alguém? Liga para o 1813 (grátis, de dia e de noite), ou fala por chat em zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Não estou muito bem. Posso falar contigo um momento?", // nieuw, nalezen
    "be.c.feelwell.s": { m: "Há semanas que dormes mal e o trabalho é demais. Sentes-te muito cansado. O que fazes?", f: "Há semanas que dormes mal e o trabalho é demais. Sentes-te muito cansada. O que fazes?", x: "Há semanas que dormes mal e o trabalho é demais. Sentes um grande cansaço. O que fazes?" }, // nieuw, nalezen
    "be.c.feelwell.o1": "Dizes ao teu chefe ou ao médico do trabalho (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Não dizes nada, e trabalhas mais e mais depressa.", // nieuw, nalezen
    "be.c.feelwell.o3": "Ficas em casa, e não dizes a ninguém porquê.", // nieuw, nalezen
    "be.c.feelwell.w": "Dizer cedo não é fraqueza. Assim podem procurar juntos uma saída, por exemplo outros turnos. Não tens de fazer isto sem ajuda.", // nieuw, nalezen
};

export const fr: Gloss = {
    "be.w.huisartsenpost": "le poste de garde des médecins généralistes le soir, la nuit et le week-end (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Poste de garde, que puis-je faire pour vous ?", // nieuw, nalezen
    "be.w.premie": "la cotisation (ce que tu paies au ziekenfonds, la mutuelle)", // nieuw, nalezen
    "be.w.eigenrisico": "le ticket modérateur (la part des frais que tu paies toi-même)", // nieuw, nalezen
    "be.w.zorgtoeslag": "l’intervention majorée (une aide en plus pour les frais de santé, pour un petit revenu)", // nieuw, nalezen
    "be.w.verzekeraar": "la mutuelle (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Je suis membre d’une mutuelle.", // nieuw, nalezen
    "be.s.insurance.2": "Est-ce que c’est remboursé ?", // nieuw, nalezen
    "be.s.insurance.3": "Je demande l’intervention majorée.", // nieuw, nalezen
    "be.c.insurance.q": "Tu es dans quelle mutuelle ?", // nieuw, nalezen
    "be.c.insurance.a": "Je ne sais pas. Je vais vérifier.", // nieuw, nalezen
    "be.c.doctor": "Médecin ou 112 ?", // = c.doctor
    "be.c.doctor.b": "Choisis un médecin généraliste (huisarts) près de chez toi. Tu as besoin d’un médecin le soir, la nuit ou le week-end ? Appelle le 1733 : on t’envoie au médecin de garde (huisartsenwachtpost). Appelle le 112 seulement en cas d’urgence : danger de mort, incendie ou crime en train de se passer. Les médicaments, tu les reçois à la pharmacie (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Vous prenez encore de nouveaux patients ?", // nieuw, nalezen
    "be.c.doctor.s": "C’est samedi soir. Ton enfant a beaucoup de fièvre, mais il est réveillé et respire normalement. Que fais-tu ?", // = c.doctor.s
    "be.c.doctor.o1": "Appelle le 1733.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Appelle le 112.", // = c.doctor.o2
    "be.c.doctor.o3": "Attends lundi et ne fais rien.", // = c.doctor.o3
    "be.c.doctor.w": "Le 1733 t’aide à trouver un médecin en dehors des heures de bureau. Le 112, c’est pour les urgences : danger de mort, incendie ou crime en train de se passer.", // nieuw, nalezen
    "be.c.insurance": "Ta mutuelle (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "En Belgique, tu dois t’inscrire à une mutuelle : un ziekenfonds (mutualiteit), ou la Hulpkas (HZIV, la CAAMI). Fais-le quand tu commences à travailler. Le ziekenfonds rembourse une partie des frais du médecin, de l’hôpital et des médicaments. La part que tu paies toi-même, c’est le remgeld. Avec un petit revenu, tu peux recevoir la verhoogde tegemoetkoming : alors tu paies moins. Tu es malade longtemps ? Alors le ziekenfonds te paie aussi une indemnité. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
    "be.c.insurance.p": "Je veux m’inscrire à une mutuelle. Vous pouvez m’aider ?", // nieuw, nalezen
    "be.c.insurance.s": "Tu as commencé à travailler ici il y a deux semaines et tu n’as pas encore de ziekenfonds. Que fais-tu ?", // nieuw, nalezen
    "be.c.insurance.o1": "Inscris-toi vite à un ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Attends : l’assurance de ton pays suffit.", // = c.insurance.o2
    "be.c.insurance.o3": "Utilise la carte d’assurance d’un ami.", // = c.insurance.o3
    "be.c.insurance.w": "Sans ziekenfonds, tu paies toi-même le médecin et l’hôpital. T’inscrire vite te protège. Ton employeur ou ton agence d’intérim peut t’aider.", // nieuw, nalezen
    "be.c.feelwell": "C’est trop ? Tu n’as pas à porter ça sans aide", // nieuw, nalezen
    "be.c.feelwell.b": "Tout le monde se sent parfois fatigué, stressé ou triste. Trop de travail (werkdruk), un mauvais sommeil à cause du travail posté ou le manque de ta famille peuvent rendre les choses lourdes. Tu n’as pas à porter ça sans aide, et dire “c’est trop” n’est pas une faiblesse. Parle à quelqu’un de confiance : ton responsable, la personne de confiance (vertrouwenspersoon) ou le conseiller en prévention (preventieadviseur psychosociale aspecten), le médecin du travail (arbeidsarts) ou ton médecin généraliste (huisarts). Tu peux aussi demander toi-même un entretien avec le médecin du travail. Les médecins ne répètent pas à ton patron ce que tu as dit. Tu penses au suicide, ou tu t’inquiètes pour quelqu’un ? Appelle le 1813 (gratuit, jour et nuit), ou chatte sur zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Ça ne va pas très bien. Je peux te parler un moment ?", // nieuw, nalezen
    "be.c.feelwell.s": { m: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatigué. Que fais-tu ?", f: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu te sens très fatiguée. Que fais-tu ?", x: "Depuis des semaines, tu dors mal et le travail est trop lourd. Tu ressens une grande fatigue. Que fais-tu ?" }, // nieuw, nalezen
    "be.c.feelwell.o1": "Tu en parles à ton responsable ou au médecin du travail (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Tu ne dis rien, et tu travailles plus dur et plus vite.", // nieuw, nalezen
    "be.c.feelwell.o3": "Tu restes à la maison, et tu ne dis à personne pourquoi.", // nieuw, nalezen
    "be.c.feelwell.w": "Le dire tôt n’est pas une faiblesse. Alors vous pouvez chercher ensemble une solution, par exemple d’autres horaires d’équipe. Tu n’as pas à faire ça sans aide.", // nieuw, nalezen
};

export const de: Gloss = {
    "be.w.huisartsenpost": "der hausärztliche Bereitschaftsdienst abends, nachts und am Wochenende (huisartsenwachtpost)", // nieuw, nalezen
    "be.c.doctor.q": "Hausärztlicher Bereitschaftsdienst, was kann ich für Sie tun?", // nieuw, nalezen
    "be.w.premie": "der Mitgliedsbeitrag (was du an den ziekenfonds zahlst)", // nieuw, nalezen
    "be.w.eigenrisico": "der Eigenanteil (der Teil der Kosten, den du selbst zahlst)", // nieuw, nalezen
    "be.w.zorgtoeslag": "die erhöhte Kostenerstattung (extra Hilfe bei Gesundheitskosten, für ein niedriges Einkommen)", // nieuw, nalezen
    "be.w.verzekeraar": "die Krankenkasse (ziekenfonds, mutualiteit)", // nieuw, nalezen
    "be.s.insurance.1": "Ich bin Mitglied einer Krankenkasse.", // nieuw, nalezen
    "be.s.insurance.2": "Wird das erstattet?", // nieuw, nalezen
    "be.s.insurance.3": "Ich beantrage die erhöhte Kostenerstattung.", // nieuw, nalezen
    "be.c.insurance.q": "Bei welcher Krankenkasse bist du?", // nieuw, nalezen
    "be.c.insurance.a": "Weiß ich nicht. Ich schaue nach.", // nieuw, nalezen
    "be.c.doctor": "Arzt oder 112?", // = c.doctor
    "be.c.doctor.b": "Such dir einen Hausarzt (huisarts) in der Nähe deiner Wohnung aus. Brauchst du abends, nachts oder am Wochenende einen Arzt? Ruf 1733 an: Man schickt dich zum Bereitschaftsarzt (huisartsenwachtpost). Ruf 112 nur im Notfall an: Lebensgefahr, Feuer oder eine Straftat, die gerade passiert. Medikamente bekommst du in der Apotheke (apotheek).", // nieuw, nalezen
    "be.c.doctor.p": "Nehmen Sie noch neue Patienten auf?", // nieuw, nalezen (AI-correctie 2 nov 2026)
    "be.c.doctor.s": "Es ist Samstagnacht. Dein Kind hat hohes Fieber, aber es ist wach und atmet normal. Was machst du?", // = c.doctor.s
    "be.c.doctor.o1": "Ruf 1733 an.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.doctor.o2": "Ruf 112 an.", // = c.doctor.o2
    "be.c.doctor.o3": "Warte bis Montag und tu nichts.", // = c.doctor.o3
    "be.c.doctor.w": "Die 1733 hilft dir, außerhalb der Sprechzeiten einen Arzt zu finden. Die 112 ist für Notfälle: Lebensgefahr, Feuer oder eine Straftat, die gerade passiert.", // nieuw, nalezen
    "be.c.insurance": "Deine Krankenkasse (ziekenfonds)", // nieuw, nalezen
    "be.c.insurance.b": "In Belgien musst du Mitglied einer Krankenkasse werden: eines ziekenfonds (mutualiteit) oder der Hulpkas (HZIV). Mach das, wenn du anfängst zu arbeiten. Der ziekenfonds zahlt einen Teil der Kosten für Arzt, Krankenhaus und Medikamente zurück. Den Teil, den du selbst zahlst, nennt man remgeld. Mit einem niedrigen Einkommen bekommst du vielleicht die verhoogde tegemoetkoming: Dann zahlst du weniger. Bist du lange krank? Dann zahlt dir der ziekenfonds auch Krankengeld. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
    "be.c.insurance.p": "Ich möchte Mitglied einer Krankenkasse werden. Können Sie mir helfen?", // nieuw, nalezen
    "be.c.insurance.s": "Du arbeitest seit zwei Wochen hier und hast noch keinen ziekenfonds. Was machst du?", // nieuw, nalezen
    "be.c.insurance.o1": "Werde schnell Mitglied eines ziekenfonds.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.insurance.o2": "Warte: Deine Versicherung von zu Hause reicht.", // = c.insurance.o2
    "be.c.insurance.o3": "Benutz die Versichertenkarte von einem Freund.", // = c.insurance.o3
    "be.c.insurance.w": "Ohne ziekenfonds bezahlst du Arzt und Krankenhaus selbst. Schnell Mitglied zu werden schützt dich. Dein Arbeitgeber oder deine Zeitarbeitsfirma kann dir helfen.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.feelwell": "Zu viel? Du musst das nicht allein schaffen", // nieuw, nalezen
    "be.c.feelwell.b": "Jeder ist manchmal müde, gestresst oder traurig. Zu viel Arbeit (werkdruk), schlechter Schlaf durch Schichtarbeit oder Sehnsucht nach deiner Familie können es schwer machen. Du musst das nicht allein tragen, und zu sagen „es ist zu viel“ ist keine Schwäche. Sprich mit jemandem, dem du vertraust: deinem Vorgesetzten, der Vertrauensperson (vertrouwenspersoon) oder dem Präventionsberater (preventieadviseur psychosociale aspecten), dem Arbeitsarzt (arbeidsarts) oder deinem Hausarzt (huisarts). Du kannst auch selbst um ein Gespräch mit dem Arbeitsarzt bitten. Ärzte erzählen deinem Chef nicht, was du gesagt hast. Denkst du an Suizid, oder machst du dir Sorgen um jemanden? Ruf 1813 an (kostenlos, Tag und Nacht), oder chatte auf zelfmoord1813.be.", // nieuw, nalezen
    "be.c.feelwell.p": "Mir geht es nicht so gut. Kann ich kurz mit dir reden?", // nieuw, nalezen
    "be.c.feelwell.s": "Seit Wochen schläfst du schlecht, und die Arbeit ist zu viel. Du bist sehr müde. Was machst du?", // nieuw, nalezen
    "be.c.feelwell.o1": "Du sagst es deinem Vorgesetzten oder dem Arbeitsarzt (arbeidsarts).", // nieuw, nalezen
    "be.c.feelwell.o2": "Du sagst nichts und arbeitest härter und schneller.", // nieuw, nalezen
    "be.c.feelwell.o3": "Du bleibst zu Hause und sagst niemandem, warum.", // nieuw, nalezen
    "be.c.feelwell.w": "Es früh zu sagen ist keine Schwäche. Dann könnt ihr zusammen einen Ausweg suchen, zum Beispiel andere Schichten. Du musst das nicht allein schaffen.", // nieuw, nalezen
};

/** Somali (so): to be translated, like `de` above. */
export const so: Gloss = {};
