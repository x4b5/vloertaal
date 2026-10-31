import type { Gloss } from '../types';

// The translations of the Belgian version of u.pay (src/content/taalBe/units/pay.ts), one object
// per help language: de loonbrief, de premie, het barema, and the tips about the loonbrief (RSZ,
// bedrijfsvoorheffing, paritair comité, maaltijdcheques) and about vakantiegeld. Gendered languages
// use a form without gender where they can (Arabic: the verbal noun; Tigrinya: the polite plural).
// Every line: // nieuw, nalezen

export const ar: Gloss = {
    'be.w.loonstrook': "قسيمة الراتب (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "قسيمة راتبي ليست صحيحة.", // nieuw, nalezen
    'be.c.payslip.q': "هل استلمت قسيمة راتبك؟", // nieuw, nalezen
    'be.w.toeslag': "العلاوة، الأجر الإضافي (مثلاً للعمل الليلي)", // nieuw, nalezen
    'be.w.minimumloon': "سلّم الأجور الأدنى (لقطاعك)", // nieuw, nalezen
    'be.s.extra.1': "هل أحصل على علاوة للعمل الليلي؟", // nieuw, nalezen
    'be.c.payslip': "فحص قسيمة الراتب (loonbrief)", // nieuw, nalezen
    'be.c.payslip.b': { m: 'Brutoloon (الأجر الإجمالي) هو الأجر قبل أي خصم. Nettoloon (الأجر الصافي) هو ما يصل إلى الحساب البنكي. بينهما يُخصم شيئان: RSZ (الضمان الاجتماعي، 13.07% من الأجر الإجمالي) وbedrijfsvoorheffing (دفعة مسبقة من الضريبة). على صاحب العمل أن يعطي قسيمة راتب (loonbrief). عليها غالباً رقم الـparitair comité: اتفاقات القطاع، ومنها الأجر الأدنى. هل توجد قسائم وجبات (maaltijdcheques)؟ جزء صغير منها يُدفع من الأجر. المطلوب فحص الساعات والأجر في كل loonbrief، وتسجيل ساعات العمل. معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', f: 'Brutoloon (الأجر الإجمالي) هو الأجر قبل أي خصم. Nettoloon (الأجر الصافي) هو ما يصل إلى الحساب البنكي. بينهما يُخصم شيئان: RSZ (الضمان الاجتماعي، 13.07% من الأجر الإجمالي) وbedrijfsvoorheffing (دفعة مسبقة من الضريبة). على صاحب العمل أن يعطي قسيمة راتب (loonbrief). عليها غالباً رقم الـparitair comité: اتفاقات القطاع، ومنها الأجر الأدنى. هل توجد قسائم وجبات (maaltijdcheques)؟ جزء صغير منها يُدفع من الأجر. المطلوب فحص الساعات والأجر في كل loonbrief، وتسجيل ساعات العمل. معلومات عامة. لوضعك أنت: اسألي صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', x: 'Brutoloon (الأجر الإجمالي) هو الأجر قبل أي خصم. Nettoloon (الأجر الصافي) هو ما يصل إلى الحساب البنكي. بينهما يُخصم شيئان: RSZ (الضمان الاجتماعي، 13.07% من الأجر الإجمالي) وbedrijfsvoorheffing (دفعة مسبقة من الضريبة). على صاحب العمل أن يعطي قسيمة راتب (loonbrief). عليها غالباً رقم الـparitair comité: اتفاقات القطاع، ومنها الأجر الأدنى. هل توجد قسائم وجبات (maaltijdcheques)؟ جزء صغير منها يُدفع من الأجر. المطلوب فحص الساعات والأجر في كل loonbrief، وتسجيل ساعات العمل. معلومات عامة. للوضع الشخصي: السؤال عند صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).' }, // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "عملت ساعات أكثر. هل يمكنك أن تتحقّق من ذلك؟", // nieuw, nalezen
    'be.c.payslip.s': "قسيمة الراتب (loonbrief) فيها ساعات أقل من ساعات العمل. ما التصرف الصحيح؟", // nieuw, nalezen
    'be.c.payslip.o1': "عرض الملاحظات على صاحب العمل وطلب التحقق.", // nieuw, nalezen
    'be.c.payslip.o2': "السكوت، لتجنّب المشاكل.", // nieuw, nalezen
    'be.c.payslip.o3': "انتظار شهر: ستكون صحيحة في القسيمة القادمة.", // nieuw, nalezen
    'be.c.payslip.w': "الأخطاء في قسيمة الراتب تحدث. السؤال عنها أمر عادي وهو حق. الملاحظات عن التواريخ والساعات تساعد كثيراً. ما زالت غير صحيحة؟ النقابة تستطيع المساعدة.", // nieuw, nalezen
    'be.c.extra': "أجر العطلة وعلاوة نهاية السنة", // nieuw, nalezen
    'be.c.extra.b': { m: 'هناك أجر عطلة (vakantiegeld). يتوقف على العمل في السنة السابقة. موظف (bediende، غالباً عمل مكتبي أو في متجر)؟ صاحب العمل يدفعه: الأجر العادي أثناء العطلة، ومرة في السنة مال إضافي (dubbel vakantiegeld). عامل (arbeider، غالباً عمل يدوي)؟ صندوق العطل (vakantiekas أو RJV) يدفعه، ابتداءً من مايو. قطاعات كثيرة تعطي أيضاً علاوة نهاية السنة (eindejaarspremie). الأجر لا يكون أبداً أقل من الحد الأدنى للـparitair comité (barema). الساعات الإضافية تعطي 50% إضافية على الأقل، وغالباً وقت راحة لاحقاً. معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', f: 'هناك أجر عطلة (vakantiegeld). يتوقف على العمل في السنة السابقة. موظف (bediende، غالباً عمل مكتبي أو في متجر)؟ صاحب العمل يدفعه: الأجر العادي أثناء العطلة، ومرة في السنة مال إضافي (dubbel vakantiegeld). عامل (arbeider، غالباً عمل يدوي)؟ صندوق العطل (vakantiekas أو RJV) يدفعه، ابتداءً من مايو. قطاعات كثيرة تعطي أيضاً علاوة نهاية السنة (eindejaarspremie). الأجر لا يكون أبداً أقل من الحد الأدنى للـparitair comité (barema). الساعات الإضافية تعطي 50% إضافية على الأقل، وغالباً وقت راحة لاحقاً. معلومات عامة. لوضعك أنت: اسألي صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', x: 'هناك أجر عطلة (vakantiegeld). يتوقف على العمل في السنة السابقة. موظف (bediende، غالباً عمل مكتبي أو في متجر)؟ صاحب العمل يدفعه: الأجر العادي أثناء العطلة، ومرة في السنة مال إضافي (dubbel vakantiegeld). عامل (arbeider، غالباً عمل يدوي)؟ صندوق العطل (vakantiekas أو RJV) يدفعه، ابتداءً من مايو. قطاعات كثيرة تعطي أيضاً علاوة نهاية السنة (eindejaarspremie). الأجر لا يكون أبداً أقل من الحد الأدنى للـparitair comité (barema). الساعات الإضافية تعطي 50% إضافية على الأقل، وغالباً وقت راحة لاحقاً. معلومات عامة. للوضع الشخصي: السؤال عند صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).' }, // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra.p': "متى أحصل على أجر العطلة؟", // nieuw, nalezen
    'be.c.extra.s': "العمل في مصنع بصفة arbeider. زميل يقول: «في مايو يأتي مال إضافي، لكن ليس من المدير.» ما هو؟", // nieuw, nalezen
    'be.c.extra.o1': "أجر العطلة، من صندوق العطل (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "هدية من النقابة، لأعضائها.", // nieuw, nalezen
    'be.c.extra.o3': "شهر ثالث عشر من المدير، للجميع.", // nieuw, nalezen
    'be.c.extra.w': "للـarbeider، صندوق العطل يدفع أجر العطلة، لا المدير. هو حق، لا هدية: يتراكم مع العمل. علاوة نهاية السنة تتوقف على القطاع.", // nieuw, nalezen
};

export const ti: Gloss = {
    'be.w.loonstrook': "ወረቐት ደሞዝ (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "ወረቐት ደሞዘይ ልክዕ ኣይኮነን።", // nieuw, nalezen
    'be.c.payslip.q': "ወረቐት ደሞዝኩም ተቐቢልኩም ዶ?", // nieuw, nalezen
    'be.w.toeslag': "ተወሳኺ ክፍሊት (ንኣብነት ንናይ ለይቲ ስራሕ)", // nieuw, nalezen
    'be.w.minimumloon': "ዝተሓተ መጠን ደሞዝ (ናይ ዘርፍኹም)", // nieuw, nalezen
    'be.s.extra.1': 'ንናይ ለይቲ ስራሕ ተወሳኺ ክፍሊት እረክብ ዶ?', // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip': "ወረቐት ደሞዝኩም (loonbrief) ተቖጻጸሩ", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon ቅድሚ ዝኾነ ቅናስ ዘሎ ደሞዝ እዩ። Nettoloon ናብ ሕሳብ ባንኪኹም ዝኣቱ እዩ። ኣብ መንጎ ክልተ ነገራት ይቕነሱ፡ RSZ (ማሕበራዊ ውሕስነት፡ 13.07% ካብ ጠቕላሊ ደሞዝ) ከምኡውን bedrijfsvoorheffing (ቅድመ ክፍሊት ግብሪ)። ኣስራሒኹም ወረቐት ደሞዝ (loonbrief) ክህበኩም ኣለዎ። ኣብኡ ብዙሕ ግዜ ቁጽሪ paritair comité ኣሎ፡ ስምምዓት ዘርፍኹም፡ ብዛዕባ ዝተሓተ ደሞዝ እውን። ናይ መግቢ ቼክ (maaltijdcheques) ትረኽቡ ዶ? ንእሽቶ ክፋሉ ባዕልኹም ትኸፍሉ። ኣብ ነፍሲ ወከፍ loonbrief ሰዓታትን ደሞዝን ተቖጻጸሩ፡ ዝሰራሕኩምዎ ሰዓታት ጽሓፉ። ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።", // nieuw, nalezen
    'be.c.payslip.p': 'ዝያዳ ሰዓታት ሰሪሐ። ክትቆጻጸርዎ ትኽእሉ ዶ?', // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.s': "ወረቐት ደሞዝኩም (loonbrief) ካብ ዝሰራሕኩምዎ ዝወሓደ ሰዓታት የርኢ። እንታይ ትገብሩ?", // nieuw, nalezen
    'be.c.payslip.o1': "መዘኻኸሪኹም ኣርእዩ፡ ኣስራሒ ክቆጻጸሮ ሕተቱ።", // nieuw, nalezen
    'be.c.payslip.o2': 'ጸገም ስለ ዘይትደልዩ ስቕ በሉ።', // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.o3': "ሓደ ወርሒ ተጸበዩ፡ ኣብ ዝመጽእ loonbrief ልክዕ ክኸውን እዩ።", // nieuw, nalezen
    'be.c.payslip.w': "ኣብ ወረቐት ደሞዝ ጌጋ ይፍጠር እዩ። ምሕታት ንቡርን መሰልኩምን እዩ። ናይ ዕለታትን ሰዓታትን መዘኻኸሪ ብዙሕ ይሕግዝ። ገና ልክዕ ኣይኮነን? ማሕበር ሰራሕተኛታት ክሕግዝ ይኽእል።", // nieuw, nalezen
    'be.c.extra': "ገንዘብ ዕረፍቲን ናይ መወዳእታ ዓመት ጉርሻን", // nieuw, nalezen
    'be.c.extra.b': "ገንዘብ ዕረፍቲ (vakantiegeld) ትረኽቡ። ኣብ ዝሓለፈ ዓመት ዝሰራሕኩምዎ ይምርኮስ። bediende (ብዙሕ ግዜ ስራሕ ቤት ጽሕፈት ወይ ድኳን) ዲኹም? ኣስራሒኹም ይኸፍሎ፡ ኣብ ግዜ ዕረፍቲ ንቡር ደሞዝ፡ ኣብ ዓመት ሓንሳእ ድማ ተወሳኺ ገንዘብ (dubbel vakantiegeld)። arbeider (ብዙሕ ግዜ ስራሕ ኢድ) ዲኹም? ፈንድ ዕረፍቲ (vakantiekas ወይ RJV) ይኸፍሎ፡ ካብ ግንቦት። ብዙሓት ዘርፍታት ናይ መወዳእታ ዓመት ጉርሻ (eindejaarspremie) እውን ይህቡ። ደሞዝኩም ካብ ዝተሓተ መጠን paritair comité (barema) ፈጺሙ ክትሕት የብሉን። ተወሳኺ ሰዓታት እንተ ወሓደ 50% ተወሳኺ ይህብ፡ ብዙሕ ግዜ ድማ ደሓር ዕረፍቲ። ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።", // nieuw, nalezen
    'be.c.extra.p': "ገንዘብ ዕረፍተይ መዓስ እረክብ?", // nieuw, nalezen
    'be.c.extra.s': "ኣብ ፋብሪካ ከም arbeider ትሰርሑ። መሳርሕቲ ይብል፡ «ኣብ ግንቦት ተወሳኺ ገንዘብ ትረኽቡ፡ ካብ ሓለቓ ግን ኣይኮነን።» እዚ እንታይ እዩ?", // nieuw, nalezen
    'be.c.extra.o1': "ገንዘብ ዕረፍቲ፡ ካብ ፈንድ ዕረፍቲ (vakantiekas)።", // nieuw, nalezen
    'be.c.extra.o2': "ካብ ማሕበር ሰራሕተኛታት ንኣባላቱ ዝወሃብ ህያብ።", // nieuw, nalezen
    'be.c.extra.o3': "ካብ ሓለቓ 13ይ ወርሒ፡ ንኹሉ ሰብ።", // nieuw, nalezen
    'be.c.extra.w': "ንarbeider ፈንድ ዕረፍቲ እዩ ገንዘብ ዕረፍቲ ዝኸፍል፡ ሓለቓ ኣይኮነን። መሰልኩም እዩ፡ ህያብ ኣይኮነን፡ ብስራሕኩም ትእክብዎ። ናይ መወዳእታ ዓመት ጉርሻ ኣብ ዘርፍኹም ይምርኮስ።", // nieuw, nalezen
};

export const fa: Gloss = {
    'be.w.loonstrook': "فیش حقوقی (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "فیش حقوقی‌ام درست نیست.", // nieuw, nalezen
    'be.c.payslip.q': "فیش حقوقی‌ات را گرفتی؟", // nieuw, nalezen
    'be.w.toeslag': "پاداش، پول اضافه (مثلاً برای کار شبانه)", // nieuw, nalezen
    'be.w.minimumloon': "جدول حداقل دستمزد (رشتهٔ کاری تو)", // nieuw, nalezen
    'be.s.extra.1': "برای کار شبانه پاداش می‌گیرم؟", // nieuw, nalezen
    'be.c.payslip': "فیش حقوقی‌ات (loonbrief) را چک کن", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon حقوق تو قبل از هر کسری است. Nettoloon همان است که به حساب بانکی‌ات می‌آید. در این میان دو چیز کم می‌شود: RSZ (تأمین اجتماعی، 13.07% از حقوق ناخالص) و bedrijfsvoorheffing (پیش‌پرداخت مالیات). کارفرما باید به تو فیش حقوقی (loonbrief) بدهد. روی آن اغلب شمارهٔ paritair comité هست: توافق‌های رشتهٔ کاری تو، از جمله دربارهٔ حداقل حقوق. بُن غذا (maaltijdcheques) می‌گیری؟ بخش کوچکی از آن را خودت می‌پردازی. ساعت‌ها و حقوق را در هر loonbrief چک کن، و ساعت‌های کارت را یادداشت کن. اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.", // nieuw, nalezen
    'be.c.payslip.p': "ساعت‌های بیشتری کار کرده‌ام. می‌شود آن را بررسی کنید؟", // nieuw, nalezen
    'be.c.payslip.s': "فیش حقوقی‌ات (loonbrief) ساعت‌های کمتری از کارت نشان می‌دهد. چه کار می‌کنی؟", // nieuw, nalezen
    'be.c.payslip.o1': "یادداشت‌هایت را نشان بده و از کارفرما بخواه بررسی کند.", // nieuw, nalezen
    'be.c.payslip.o2': "چیزی نگو، چون نمی‌خواهی دردسر شود.", // nieuw, nalezen
    'be.c.payslip.o3': "یک ماه صبر کن: در loonbrief بعدی درست می‌شود.", // nieuw, nalezen
    'be.c.payslip.w': "اشتباه در فیش حقوقی پیش می‌آید. پرسیدن دربارهٔ آن عادی و حق توست. یادداشت تاریخ‌ها و ساعت‌ها خیلی کمک می‌کند. هنوز درست نیست؟ اتحادیهٔ کارگری می‌تواند کمک کند.", // nieuw, nalezen
    'be.c.extra': "پول تعطیلات و پاداش آخر سال", // nieuw, nalezen
    'be.c.extra.b': "تو پول تعطیلات (vakantiegeld) می‌گیری. مقدارش به کار سال قبل بستگی دارد. bediende هستی (اغلب کار اداری یا در فروشگاه)؟ کارفرما آن را می‌پردازد: حقوق معمول در تعطیلات، و سالی یک بار پول اضافه (dubbel vakantiegeld). arbeider هستی (اغلب کار با دست)؟ صندوق تعطیلات (vakantiekas یا RJV) آن را می‌پردازد، از ماه مه. خیلی از رشته‌ها پاداش آخر سال (eindejaarspremie) هم می‌دهند. حقوق تو هرگز نباید کمتر از حداقل paritair comité (barema) باشد. اضافه‌کاری دست‌کم 50% بیشتر می‌دهد، و اغلب بعداً مرخصی. اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.", // nieuw, nalezen
    'be.c.extra.p': "پول تعطیلاتم را کی می‌گیرم؟", // nieuw, nalezen
    'be.c.extra.s': "تو در یک کارخانه arbeider هستی. همکاری می‌گوید: «در ماه مه پول اضافه می‌گیری، ولی نه از رئیس.» این چیست؟", // nieuw, nalezen
    'be.c.extra.o1': "پول تعطیلات، از صندوق تعطیلات (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "هدیه‌ای از اتحادیه، برای اعضایش.", // nieuw, nalezen
    'be.c.extra.o3': "حقوق ماه سیزدهم از رئیس، برای همه.", // nieuw, nalezen
    'be.c.extra.w': "برای arbeider، صندوق تعطیلات پول تعطیلات را می‌پردازد، نه رئیس. این حق توست، نه هدیه: با کارت جمعش می‌کنی. پاداش آخر سال به رشتهٔ کاری‌ات بستگی دارد.", // nieuw, nalezen
};

export const prs: Gloss = {
    'be.w.loonstrook': "ورق معاش (loonbrief)", // nieuw, nalezen // nagelezen AI ronde 3
    'be.s.payslip.2': "ورق معاشم درست نیست.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.q': "ورق معاش تان را گرفتید؟", // nieuw, nalezen // nagelezen AI ronde 3
    'be.w.toeslag': "پاداش، پول اضافی (مثلاً برای کار شب)", // nieuw, nalezen
    'be.w.minimumloon': "جدول حداقل معاش (در رشتهٔ کاری شما)", // nieuw, nalezen
    'be.s.extra.1': "برای کار شب پاداش می‌گیرم؟", // nieuw, nalezen
    'be.c.payslip': "ورق معاش (loonbrief) خود را چک کنید", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.b': "Brutoloon معاش شما پیش از هر کسر است. Nettoloon همان است که به حساب بانکی تان می‌آید. در این میان دو چیز کم می‌شود: RSZ (تأمین اجتماعی، 13.07% از معاش ناخالص) و bedrijfsvoorheffing (پیش‌پرداخت مالیه). کارفرما باید به شما ورق معاش (loonbrief) بدهد. روی آن اکثراً نمبر paritair comité است: توافق‌های رشتهٔ کاری شما، همچنان دربارهٔ حداقل معاش. کوپون غذا (maaltijdcheques) می‌گیرید؟ بخش کوچک آن را خود تان می‌پردازید. ساعت‌ها و معاش را در هر loonbrief چک کنید، و ساعت‌های کار تان را یادداشت کنید. معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "من ساعت‌های بیشتر کار کرده‌ام. می‌شود آن را بررسی کنید؟", // nieuw, nalezen
    'be.c.payslip.s': "ورق معاش (loonbrief) شما ساعت‌های کمتر از کار تان نشان می‌دهد. چه می‌کنید؟", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.o1': "یادداشت‌های خود را نشان دهید و از کارفرما بخواهید بررسی کند.", // nieuw, nalezen
    'be.c.payslip.o2': "چیزی نگویید، چون نمی‌خواهید مشکل شود.", // nieuw, nalezen
    'be.c.payslip.o3': "یک ماه صبر کنید: در loonbrief بعدی درست می‌شود.", // nieuw, nalezen
    'be.c.payslip.w': "اشتباه در ورق معاش پیش می‌آید. پرسیدن دربارهٔ آن عادی و حق شماست. یادداشت تاریخ‌ها و ساعت‌ها بسیار کمک می‌کند. هنوز درست نیست؟ اتحادیهٔ کارگری کمک کرده می‌تواند.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra': "پول رخصتی و پاداش آخر سال", // nieuw, nalezen
    'be.c.extra.b': "شما پول رخصتی (vakantiegeld) می‌گیرید. مقدار آن به کار سال گذشته بستگی دارد. bediende هستید (اکثراً کار دفتری یا در دکان)؟ کارفرما آن را می‌پردازد: معاش معمول در رخصتی، و سالی یک بار پول اضافی (dubbel vakantiegeld). arbeider هستید (اکثراً کار با دست)؟ صندوق رخصتی (vakantiekas یا RJV) آن را می‌پردازد، از ماه می. بسیاری از رشته‌ها پاداش آخر سال (eindejaarspremie) هم می‌دهند. معاش شما هرگز نباید کمتر از حداقل paritair comité (barema) باشد. اضافه‌کاری دست‌کم 50% بیشتر می‌دهد، و اکثراً بعداً رخصتی. معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.", // nieuw, nalezen
    'be.c.extra.p': "پول رخصتی خود را چه وقت می‌گیرم؟", // nieuw, nalezen
    'be.c.extra.s': "شما در یک فابریکه arbeider هستید. یک همکار می‌گوید: «در ماه می پول اضافی می‌گیرید، ولی نه از آمر.» این چیست؟", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra.o1': "پول رخصتی، از صندوق رخصتی (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "تحفه‌ای از اتحادیه، برای اعضای آن.", // nieuw, nalezen
    'be.c.extra.o3': "معاش ماه سیزدهم از آمر، برای همه.", // nieuw, nalezen
    'be.c.extra.w': "برای arbeider، صندوق رخصتی پول رخصتی را می‌پردازد، نه آمر. این حق شماست، نه تحفه: با کار تان جمع می‌شود. پاداش آخر سال به رشتهٔ کاری شما بستگی دارد.", // nieuw, nalezen
};

export const uk: Gloss = {
    'be.w.loonstrook': "розрахунковий лист (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Мій розрахунковий лист неправильний.", // nieuw, nalezen
    'be.c.payslip.q': "Ти отримав / отримала розрахунковий лист?", // nieuw, nalezen
    'be.w.toeslag': "премія, доплата (наприклад, за нічну роботу)", // nieuw, nalezen
    'be.w.minimumloon': "шкала мінімальної оплати (твоєї галузі)", // nieuw, nalezen
    'be.s.extra.1': "Чи отримую я премію за нічну роботу?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip': "Перевіряй свій loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon — це твоя зарплата до будь-яких відрахувань. Nettoloon — це те, що приходить на твій банківський рахунок. Між ними відраховують дві речі: RSZ (соціальне страхування, 13,07% від зарплати брутто) і bedrijfsvoorheffing (аванс податку). Роботодавець мусить давати тобі розрахунковий лист (loonbrief). Там часто є номер твого paritair comité: домовленості твоєї галузі, також про мінімальну оплату. Отримуєш талони на харчування (maaltijdcheques)? Невелику частину ти платиш сам / сама. Перевіряй години й оплату в кожному loonbrief і записуй свої робочі години. Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "Я працював / працювала більше годин. Можете перевірити?", // nieuw, nalezen
    'be.c.payslip.s': "У твоєму loonbrief менше годин, ніж ти працював / працювала. Що ти зробиш?", // nieuw, nalezen
    'be.c.payslip.o1': "Покажеш свої записи й попросиш роботодавця перевірити.", // nieuw, nalezen
    'be.c.payslip.o2': "Нічого не скажеш, бо не хочеш проблем.", // nieuw, nalezen
    'be.c.payslip.o3': "Почекаєш місяць: у наступному loonbrief усе буде правильно.", // nieuw, nalezen
    'be.c.payslip.w': "Помилки в розрахунковому листі бувають. Питати про це нормально, це твоє право. Твої записи дат і годин дуже допомагають. Досі неправильно? Профспілка може допомогти.", // nieuw, nalezen
    'be.c.extra': "Відпускні й премія наприкінці року", // nieuw, nalezen
    'be.c.extra.b': "Ти отримуєш відпускні (vakantiegeld). Вони залежать від роботи в попередньому році. Ти bediende (часто робота в офісі чи магазині)? Тоді платить роботодавець: звичайна зарплата під час відпустки, а раз на рік ще додаткові гроші (dubbel vakantiegeld). Ти arbeider (часто робота руками)? Тоді платить відпускна каса (vakantiekas або RJV), з травня. Багато галузей також дають премію наприкінці року (eindejaarspremie). Твоя зарплата ніколи не може бути нижчою за мінімум твого paritair comité (barema). Понаднормова робота дає щонайменше 50% доплати, а часто й вихідні пізніше. Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra.p': "Коли я отримаю відпускні?", // nieuw, nalezen
    'be.c.extra.s': "Ти arbeider на фабриці. Колега каже: «У травні ти отримаєш додаткові гроші, але не від шефа.» Що це?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra.o1': "Відпускні, від відпускної каси (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Подарунок від профспілки, для її членів.", // nieuw, nalezen
    'be.c.extra.o3': "Тринадцята зарплата від шефа, для всіх.", // nieuw, nalezen
    'be.c.extra.w': "Для arbeider відпускні платить відпускна каса, а не шеф. Це твоє право, не подарунок: ти накопичуєш їх своєю роботою. Премія наприкінці року залежить від твоєї галузі.", // nieuw, nalezen
};

export const tr: Gloss = {
    'be.w.loonstrook': "maaş bordrosu (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Maaş bordrom doğru değil.", // nieuw, nalezen
    'be.c.payslip.q': "Maaş bordronu aldın mı?", // nieuw, nalezen
    'be.w.toeslag': "prim, ek ödeme (örneğin gece işi için)", // nieuw, nalezen
    'be.w.minimumloon': "asgari ücret skalası (sektörünün)", // nieuw, nalezen
    'be.s.extra.1': "Gece işi için prim alıyor muyum?", // nieuw, nalezen
    'be.c.payslip': "Loonbrief’ini kontrol et", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon, hiçbir kesinti yapılmadan önceki maaşındır. Nettoloon, banka hesabına gelen paradır. Arada iki şey kesilir: RSZ (sosyal güvenlik, brüt maaşın %13,07’si) ve bedrijfsvoorheffing (vergi avansı). İşverenin sana bir maaş bordrosu (loonbrief) vermek zorunda. Üzerinde çoğu zaman paritair comité’nin numarası vardır: sektörünün anlaşmaları, asgari ücret dahil. Yemek çeki (maaltijdcheques) alıyor musun? Küçük bir kısmını kendin ödersin. Her loonbrief’te saatleri ve ücreti kontrol et, çalıştığın saatleri not et. Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "Daha fazla saat çalıştım. Kontrol edebilir misiniz?", // nieuw, nalezen
    'be.c.payslip.s': "Loonbrief’inde çalıştığından daha az saat görünüyor. Ne yaparsın?", // nieuw, nalezen
    'be.c.payslip.o1': "Notlarını gösterip işverenden kontrol etmesini istersin.", // nieuw, nalezen
    'be.c.payslip.o2': "Sorun istemediğin için hiçbir şey söylemezsin.", // nieuw, nalezen
    'be.c.payslip.o3': "Bir ay beklersin: bir sonraki loonbrief’te düzelir.", // nieuw, nalezen
    'be.c.payslip.w': "Maaş bordrosunda hata olabilir. Bunu sormak normaldir ve senin hakkındır. Tarih ve saat notların çok yardımcı olur. Hâlâ doğru değil mi? Sendika yardım edebilir.", // nieuw, nalezen
    'be.c.extra': "Tatil parası ve yıl sonu primi", // nieuw, nalezen
    'be.c.extra.b': "Tatil parası (vakantiegeld) alırsın. Bu, bir önceki yıl yaptığın işe bağlıdır. Bediende misin (çoğu zaman büro ya da mağaza işi)? O zaman işverenin öder: tatilde normal maaşın, yılda bir kez de ek para (dubbel vakantiegeld). Arbeider mısın (çoğu zaman el işi)? O zaman bir tatil kasası (vakantiekas veya RJV) öder, mayıstan itibaren. Birçok sektör ayrıca yıl sonu primi (eindejaarspremie) verir. Maaşın paritair comité’nin asgarisinden (barema) asla düşük olamaz. Fazla mesai en az %50 ek ödeme getirir, çoğu zaman sonra izin de. Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.", // nieuw, nalezen
    'be.c.extra.p': "Tatil paramı ne zaman alırım?", // nieuw, nalezen
    'be.c.extra.s': "Bir fabrikada arbeider olarak çalışıyorsun. Bir iş arkadaşın diyor ki: “Mayısta ek para alırsın, ama patrondan değil.” Bu nedir?", // nieuw, nalezen
    'be.c.extra.o1': "Tatil parası, tatil kasasından (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Sendikadan üyelerine bir hediye.", // nieuw, nalezen
    'be.c.extra.o3': "Patrondan herkese 13. maaş.", // nieuw, nalezen
    'be.c.extra.w': "Arbeider için tatil parasını patron değil, tatil kasası öder. Bu senin hakkın, hediye değil: çalışarak biriktirirsin. Yıl sonu primi sektörüne bağlıdır.", // nieuw, nalezen
};

export const pl: Gloss = {
    'be.w.loonstrook': "pasek wypłaty (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Mój pasek wypłaty się nie zgadza.", // nieuw, nalezen
    'be.c.payslip.q': "Masz już pasek wypłaty?", // nieuw, nalezen
    'be.w.toeslag': "premia, dodatek (na przykład za pracę w nocy)", // nieuw, nalezen
    'be.w.minimumloon': "tabela płac minimalnych (twojej branży)", // nieuw, nalezen
    'be.s.extra.1': "Czy dostaję premię za pracę w nocy?", // nieuw, nalezen
    'be.c.payslip': "Sprawdzaj swój loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon to twoja płaca przed wszystkimi potrąceniami. Nettoloon to to, co trafia na twoje konto. Pomiędzy odchodzą dwie rzeczy: RSZ (ubezpieczenie społeczne, 13.07% płacy brutto) i bedrijfsvoorheffing (zaliczka na podatek). Pracodawca musi dawać ci pasek wypłaty (loonbrief). Często jest na nim numer twojego paritair comité: umowy twojej branży, także o płacy minimalnej. Dostajesz bony na posiłki (maaltijdcheques)? Małą część płacisz za nie sam / sama. Sprawdzaj godziny i płacę na każdym loonbrief i zapisuj godziny pracy. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen
    'be.c.payslip.p': "Przepracowałem / przepracowałam więcej godzin. Może pan / pani to sprawdzić?", // nieuw, nalezen
    'be.c.payslip.s': "Na twoim loonbrief jest mniej godzin, niż przepracowano. Co robisz?", // nieuw, nalezen
    'be.c.payslip.o1': "Pokazujesz swoje notatki i prosisz pracodawcę o sprawdzenie.", // nieuw, nalezen
    'be.c.payslip.o2': "Nic nie mówisz, bo nie chcesz problemów.", // nieuw, nalezen
    'be.c.payslip.o3': "Czekasz miesiąc: na następnym loonbrief będzie dobrze.", // nieuw, nalezen
    'be.c.payslip.w': "Błędy na pasku wypłaty się zdarzają. Pytanie o nie jest normalne i to twoje prawo. Notatki z datami i godzinami bardzo pomagają. Nadal się nie zgadza? Związek zawodowy może pomóc.", // nieuw, nalezen
    'be.c.extra': "Wynagrodzenie urlopowe i premia na koniec roku", // nieuw, nalezen
    'be.c.extra.b': "Dostajesz wynagrodzenie urlopowe (vakantiegeld). Zależy ono od pracy w poprzednim roku. Jesteś bediende (często praca w biurze lub sklepie)? Wtedy płaci pracodawca: zwykłą płacę w czasie urlopu, a raz w roku dodatkowe pieniądze (dubbel vakantiegeld). Jesteś arbeider (często praca fizyczna)? Wtedy płaci kasa urlopowa (vakantiekas lub RJV), od maja. Wiele branż daje też premię na koniec roku (eindejaarspremie). Twoja płaca nigdy nie może być niższa niż minimum twojego paritair comité (barema). Nadgodziny dają co najmniej 50% dodatku, a często także czas wolny później. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen
    'be.c.extra.p': "Kiedy dostanę wynagrodzenie urlopowe?", // nieuw, nalezen
    'be.c.extra.s': "Pracujesz w fabryce jako arbeider. Kolega mówi: „W maju dostaniesz dodatkowe pieniądze, ale nie od szefa.” Co to jest?", // nieuw, nalezen
    'be.c.extra.o1': "Wynagrodzenie urlopowe, z kasy urlopowej (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Prezent od związku, dla jego członków.", // nieuw, nalezen
    'be.c.extra.o3': "Trzynastka od szefa, dla wszystkich.", // nieuw, nalezen
    'be.c.extra.w': "Arbeider dostaje wynagrodzenie urlopowe z kasy urlopowej, nie od szefa. To twoje prawo, nie prezent: zbierasz je swoją pracą. Premia na koniec roku zależy od twojej branży.", // nieuw, nalezen
};

export const ro: Gloss = {
    'be.w.loonstrook': "fluturașul de salariu (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Fluturașul meu de salariu nu e corect.", // nieuw, nalezen
    'be.c.payslip.q': "Ți-ai primit fluturașul de salariu?", // nieuw, nalezen
    'be.w.toeslag': "prima, plata în plus (de exemplu pentru munca de noapte)", // nieuw, nalezen
    'be.w.minimumloon': "grila de salarii minime (a sectorului tău)", // nieuw, nalezen
    'be.s.extra.1': "Primesc o primă pentru munca de noapte?", // nieuw, nalezen
    'be.c.payslip': "Verifică-ți loonbrief-ul", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon e salariul tău înainte de orice reținere. Nettoloon e ce primești în contul bancar. Între ele se rețin două lucruri: RSZ (asigurările sociale, 13,07% din salariul brut) și bedrijfsvoorheffing (un avans din impozit). Angajatorul trebuie să-ți dea un fluturaș de salariu (loonbrief). Pe el vezi des numărul paritair comité-ului tău: înțelegerile sectorului tău, și despre salariul minim. Primești tichete de masă (maaltijdcheques)? O mică parte o plătești tu. Verifică orele și plata pe fiecare loonbrief și notează-ți orele lucrate. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "Am lucrat mai multe ore. Puteți verifica?", // nieuw, nalezen
    'be.c.payslip.s': "Pe loonbrief-ul tău sunt mai puține ore decât ai lucrat. Ce faci?", // nieuw, nalezen
    'be.c.payslip.o1': "Îți arăți notițele și îi ceri angajatorului să verifice.", // nieuw, nalezen
    'be.c.payslip.o2': "Nu spui nimic, pentru că nu vrei probleme.", // nieuw, nalezen
    'be.c.payslip.o3': "Aștepți o lună: pe următorul loonbrief va fi corect.", // nieuw, nalezen
    'be.c.payslip.w': "Greșelile pe fluturașul de salariu se întâmplă. Să întrebi e normal și e dreptul tău. Notițele cu date și ore ajută mult. Tot nu e corect? Sindicatul te poate ajuta.", // nieuw, nalezen
    'be.c.extra': "Banii de concediu și prima de sfârșit de an", // nieuw, nalezen
    'be.c.extra.b': "Primești bani de concediu (vakantiegeld). Ei depind de munca din anul dinainte. Ești bediende (des muncă de birou sau în magazin)? Atunci plătește angajatorul: salariul obișnuit în concediu, și o dată pe an bani în plus (dubbel vakantiegeld). Ești arbeider (des muncă fizică)? Atunci plătește o casă de concedii (vakantiekas sau RJV), din mai. Multe sectoare dau și o primă de sfârșit de an (eindejaarspremie). Salariul tău nu poate fi niciodată mai mic decât minimul paritair comité-ului tău (barema). Orele suplimentare aduc cel puțin 50% în plus, și des timp liber mai târziu. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen
    'be.c.extra.p': "Când primesc banii de concediu?", // nieuw, nalezen
    'be.c.extra.s': "Lucrezi ca arbeider într-o fabrică. Un coleg spune: „În mai primești bani în plus, dar nu de la șef.” Ce sunt?", // nieuw, nalezen
    'be.c.extra.o1': "Banii de concediu, de la casa de concedii (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Un cadou de la sindicat, pentru membrii lui.", // nieuw, nalezen
    'be.c.extra.o3': "Al 13-lea salariu de la șef, pentru toți.", // nieuw, nalezen
    'be.c.extra.w': "Pentru un arbeider, casa de concedii plătește banii de concediu, nu șeful. E dreptul tău, nu un cadou: îi strângi prin munca ta. Prima de sfârșit de an depinde de sectorul tău.", // nieuw, nalezen
};

export const bg: Gloss = {
    'be.w.loonstrook': "фишът за заплата (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Фишът ми за заплата не е верен.", // nieuw, nalezen
    'be.c.payslip.q': "Получи ли фиша си за заплата?", // nieuw, nalezen
    'be.w.toeslag': "премията, добавката (например за нощен труд)", // nieuw, nalezen
    'be.w.minimumloon': "скалата на минималните заплати (на твоя сектор)", // nieuw, nalezen
    'be.s.extra.1': "Получавам ли премия за нощен труд?", // nieuw, nalezen
    'be.c.payslip': "Проверявай своя loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon е заплатата ти преди всякакви удръжки. Nettoloon е това, което идва по банковата ти сметка. Между тях се удържат две неща: RSZ (социалното осигуряване, 13,07% от брутната заплата) и bedrijfsvoorheffing (аванс за данъка). Работодателят трябва да ти дава фиш за заплата (loonbrief). На него често има номера на твоя paritair comité: споразуменията на твоя сектор, също за минималната заплата. Получаваш ли ваучери за храна (maaltijdcheques)? Малка част от тях плащаш ти. Проверявай часовете и заплатата на всеки loonbrief и записвай часовете си. Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.payslip.p': "Работих повече часове. Можете ли да проверите?", // nieuw, nalezen
    'be.c.payslip.s': "На твоя loonbrief има по-малко часове, отколкото си работил / работила. Какво правиш?", // nieuw, nalezen
    'be.c.payslip.o1': "Показваш бележките си и молиш работодателя да провери.", // nieuw, nalezen
    'be.c.payslip.o2': "Не казваш нищо, защото не искаш проблеми.", // nieuw, nalezen
    'be.c.payslip.o3': "Чакаш месец: на следващия loonbrief ще е вярно.", // nieuw, nalezen
    'be.c.payslip.w': "Грешки във фиша за заплата се случват. Да питаш е нормално и е твое право. Бележките с дати и часове много помагат. Още не е вярно? Синдикатът може да помогне.", // nieuw, nalezen
    'be.c.extra': "Отпускарски пари и премия в края на годината", // nieuw, nalezen
    'be.c.extra.b': "Получаваш отпускарски пари (vakantiegeld). Те зависят от работата през предходната година. Bediende ли си (често работа в офис или магазин)? Тогава плаща работодателят: обичайната заплата по време на отпуската, и веднъж годишно допълнителни пари (dubbel vakantiegeld). Arbeider ли си (често физическа работа)? Тогава плаща касата за отпуски (vakantiekas или RJV), от май. Много сектори дават и премия в края на годината (eindejaarspremie). Заплатата ти никога не може да е по-ниска от минимума на твоя paritair comité (barema). Извънредният труд носи поне 50% добавка, и често почивка по-късно. Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen
    'be.c.extra.p': "Кога ще получа отпускарските си пари?", // nieuw, nalezen
    'be.c.extra.s': "Работиш като arbeider във фабрика. Колега казва: „През май получаваш допълнителни пари, но не от шефа.“ Какво е това?", // nieuw, nalezen
    'be.c.extra.o1': "Отпускарски пари, от касата за отпуски (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Подарък от синдиката, за членовете му.", // nieuw, nalezen
    'be.c.extra.o3': "Тринадесета заплата от шефа, за всички.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.extra.w': "За arbeider отпускарските пари плаща касата за отпуски, не шефът. Това е твое право, не подарък: трупаш ги с работата си. Премията в края на годината зависи от сектора ти.", // nieuw, nalezen
};

export const es: Gloss = {
    'be.w.loonstrook': "la nómina (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Mi nómina no está bien.", // nieuw, nalezen
    'be.c.payslip.q': "¿Te ha llegado la nómina?", // nieuw, nalezen
    'be.w.toeslag': "la prima, el pago extra (por ejemplo por trabajo de noche)", // nieuw, nalezen
    'be.w.minimumloon': "la tabla de salarios mínimos (de tu sector)", // nieuw, nalezen
    'be.s.extra.1': "¿Me dan una prima por el trabajo de noche?", // nieuw, nalezen
    'be.c.payslip': "Revisa tu loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "El brutoloon es tu sueldo antes de cualquier descuento. El nettoloon es lo que llega a tu cuenta del banco. Entre los dos se descuentan dos cosas: la RSZ (seguridad social, el 13.07% del sueldo bruto) y la bedrijfsvoorheffing (un adelanto de tus impuestos). Tu empresa tiene que darte una nómina (loonbrief). Muchas veces lleva el número de tu paritair comité: los acuerdos de tu sector, también sobre el sueldo mínimo. ¿Recibes cheques de comida (maaltijdcheques)? Una pequeña parte la pagas tú. Revisa las horas y el sueldo en cada loonbrief, y apunta las horas que trabajas. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen
    'be.c.payslip.p': "He trabajado más horas. ¿Puede revisarlo?", // nieuw, nalezen
    'be.c.payslip.s': "Tu loonbrief muestra menos horas de las que trabajaste. ¿Qué haces?", // nieuw, nalezen
    'be.c.payslip.o1': "Enseñas tus notas y pides a tu empresa que lo revise.", // nieuw, nalezen
    'be.c.payslip.o2': "No dices nada, porque no quieres problemas.", // nieuw, nalezen
    'be.c.payslip.o3': "Esperas un mes: en el próximo loonbrief estará bien.", // nieuw, nalezen
    'be.c.payslip.w': "En una nómina puede haber errores. Preguntar es normal y es tu derecho. Tus notas con fechas y horas ayudan mucho. ¿Sigue sin estar bien? El sindicato puede ayudarte.", // nieuw, nalezen
    'be.c.extra': "La paga de vacaciones y la prima de fin de año", // nieuw, nalezen
    'be.c.extra.b': "Recibes paga de vacaciones (vakantiegeld). Depende del trabajo del año anterior. ¿Eres bediende (muchas veces trabajo de oficina o de tienda)? Entonces paga tu empresa: tu sueldo normal durante las vacaciones, y una vez al año dinero extra (dubbel vakantiegeld). ¿Eres arbeider (muchas veces trabajo manual)? Entonces paga una caja de vacaciones (vakantiekas o RJV), desde mayo. Muchos sectores dan también una prima de fin de año (eindejaarspremie). Tu sueldo nunca puede ser más bajo que el mínimo de tu paritair comité (barema). Las horas extra dan al menos un 50% más, y muchas veces tiempo libre después. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen
    'be.c.extra.p': "¿Cuándo recibo mi paga de vacaciones?", // nieuw, nalezen
    'be.c.extra.s': "Trabajas como arbeider en una fábrica. Un compañero dice: “En mayo te llega dinero extra, pero no del jefe.” ¿Qué es?", // nieuw, nalezen
    'be.c.extra.o1': "La paga de vacaciones, de la caja de vacaciones (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Un regalo del sindicato, para sus miembros.", // nieuw, nalezen
    'be.c.extra.o3': "Una paga extra del jefe, para todos.", // nieuw, nalezen
    'be.c.extra.w': "A un arbeider, la paga de vacaciones se la paga la caja de vacaciones, no el jefe. Es tu derecho, no un regalo: lo vas ganando con tu trabajo. La prima de fin de año depende de tu sector.", // nieuw, nalezen
};

export const pt: Gloss = {
    'be.w.loonstrook': "o recibo de vencimento (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "O meu recibo de vencimento não está certo.", // nieuw, nalezen
    'be.c.payslip.q': "Já recebeste o recibo de vencimento?", // nieuw, nalezen
    'be.w.toeslag': "o prémio, o pagamento extra (por exemplo pelo trabalho noturno)", // nieuw, nalezen
    'be.w.minimumloon': "a tabela de salários mínimos (do teu setor)", // nieuw, nalezen
    'be.s.extra.1': "Recebo um prémio pelo trabalho noturno?", // nieuw, nalezen
    'be.c.payslip': "Verifica o teu loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "O brutoloon é o teu salário antes de qualquer desconto. O nettoloon é o que chega à tua conta bancária. Pelo meio saem duas coisas: a RSZ (segurança social, 13.07% do salário bruto) e a bedrijfsvoorheffing (um adiantamento do imposto). O teu empregador tem de te dar um recibo de vencimento (loonbrief). Muitas vezes tem o número do teu paritair comité: os acordos do teu setor, também sobre o salário mínimo. Recebes vales de refeição (maaltijdcheques)? Pagas tu uma pequena parte. Verifica as horas e o salário em cada loonbrief, e aponta as horas que trabalhas. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
    'be.c.payslip.p': "Trabalhei mais horas. Pode verificar?", // nieuw, nalezen
    'be.c.payslip.s': "O teu loonbrief mostra menos horas do que as que trabalhaste. O que fazes?", // nieuw, nalezen
    'be.c.payslip.o1': "Mostras as tuas notas e pedes ao empregador para verificar.", // nieuw, nalezen
    'be.c.payslip.o2': "Não dizes nada, porque não queres problemas.", // nieuw, nalezen
    'be.c.payslip.o3': "Esperas um mês: no próximo loonbrief vai estar certo.", // nieuw, nalezen
    'be.c.payslip.w': "Os erros num recibo de vencimento acontecem. Perguntar é normal e é um direito teu. As tuas notas com datas e horas ajudam muito. Continua errado? O sindicato pode ajudar.", // nieuw, nalezen
    'be.c.extra': "Subsídio de férias e prémio de fim de ano", // nieuw, nalezen
    'be.c.extra.b': "Recebes subsídio de férias (vakantiegeld). Depende do trabalho do ano anterior. És bediende (muitas vezes trabalho de escritório ou de loja)? Então paga o teu empregador: o salário normal durante as férias, e uma vez por ano dinheiro extra (dubbel vakantiegeld). És arbeider (muitas vezes trabalho manual)? Então paga uma caixa de férias (vakantiekas ou RJV), a partir de maio. Muitos setores dão também um prémio de fim de ano (eindejaarspremie). O teu salário nunca pode ser mais baixo do que o mínimo do teu paritair comité (barema). As horas extra dão pelo menos 50% a mais, e muitas vezes tempo livre depois. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
    'be.c.extra.p': "Quando recebo o meu subsídio de férias?", // nieuw, nalezen
    'be.c.extra.s': "Trabalhas como arbeider numa fábrica. Um colega diz: “Em maio recebes dinheiro extra, mas não do patrão.” O que é?", // nieuw, nalezen
    'be.c.extra.o1': "O subsídio de férias, da caixa de férias (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Um presente do sindicato, para os sócios.", // nieuw, nalezen
    'be.c.extra.o3': "Um 13.º mês do patrão, para todos.", // nieuw, nalezen
    'be.c.extra.w': "Para um arbeider, quem paga o subsídio de férias é a caixa de férias, não o patrão. É um direito teu, não um presente: vais juntando-o com o teu trabalho. O prémio de fim de ano depende do teu setor.", // nieuw, nalezen
};

export const fr: Gloss = {
    'be.w.loonstrook': "la fiche de paie (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Ma fiche de paie n’est pas correcte.", // nieuw, nalezen
    'be.c.payslip.q': "Tu as reçu ta fiche de paie ?", // nieuw, nalezen
    'be.w.toeslag': "la prime, le supplément (par exemple pour le travail de nuit)", // nieuw, nalezen
    'be.w.minimumloon': "le barème (les salaires minimums de ton secteur)", // nieuw, nalezen
    'be.s.extra.1': "Est-ce que j’ai une prime pour le travail de nuit ?", // nieuw, nalezen
    'be.c.payslip': "Vérifie ta loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "Le brutoloon, c’est ton salaire avant toute retenue. Le nettoloon, c’est ce qui arrive sur ton compte en banque. Entre les deux, on retire deux choses : l’ONSS (RSZ, la sécurité sociale, 13.07% du salaire brut) et le précompte professionnel (bedrijfsvoorheffing, une avance sur ton impôt). Ton employeur doit te donner une fiche de paie (loonbrief). On y voit souvent le numéro de ta commission paritaire (paritair comité) : les accords de ton secteur, aussi sur le salaire minimum. Tu reçois des chèques-repas (maaltijdcheques) ? Tu en paies toi-même une petite partie. Vérifie les heures et le salaire sur chaque loonbrief, et note les heures que tu travailles. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
    'be.c.payslip.p': "J’ai travaillé plus d’heures. Vous pouvez vérifier ?", // nieuw, nalezen
    'be.c.payslip.s': "Ta loonbrief montre moins d’heures que tu n’en as travaillé. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'be.c.payslip.o1': "Tu montres tes notes et tu demandes à l’employeur de vérifier.", // nieuw, nalezen
    'be.c.payslip.o2': "Tu ne dis rien, parce que tu ne veux pas de problèmes.", // nieuw, nalezen
    'be.c.payslip.o3': "Tu attends un mois : la prochaine loonbrief sera juste.", // nieuw, nalezen
    'be.c.payslip.w': "Les erreurs sur une fiche de paie, ça arrive. Poser la question est normal, c’est ton droit. Tes notes avec les dates et les heures aident beaucoup. Toujours pas juste ? Le syndicat peut t’aider.", // nieuw, nalezen
    'be.c.extra': "Pécule de vacances et prime de fin d’année", // nieuw, nalezen
    'be.c.extra.b': "Tu reçois un pécule de vacances (vakantiegeld). Il dépend du travail de l’année d’avant. Tu es employé·e (bediende, souvent au bureau ou en magasin) ? Alors ton employeur le paie : ton salaire normal pendant les vacances, et une fois par an de l’argent en plus (le double pécule, dubbel vakantiegeld). Tu es ouvrier·ère (arbeider, souvent un travail manuel) ? Alors une caisse de vacances (vakantiekas ou ONVA, RJV) le paie, à partir de mai. Beaucoup de secteurs donnent aussi une prime de fin d’année (eindejaarspremie). Ton salaire ne peut jamais être plus bas que le minimum de ta commission paritaire (barema). Les heures supplémentaires donnent au moins 50% en plus, et souvent du repos plus tard. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
    'be.c.extra.p': "Quand est-ce que je reçois mon pécule de vacances ?", // nieuw, nalezen
    'be.c.extra.s': "Tu travailles comme ouvrier·ère (arbeider) dans une usine. Un collègue dit : « En mai, tu reçois de l’argent en plus, mais pas du patron. » Qu’est-ce que c’est ?", // nieuw, nalezen
    'be.c.extra.o1': "Le pécule de vacances, de la caisse de vacances (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Un cadeau du syndicat, pour ses membres.", // nieuw, nalezen
    'be.c.extra.o3': "Un 13e mois du patron, pour tout le monde.", // nieuw, nalezen
    'be.c.extra.w': "Pour un arbeider, c’est la caisse de vacances qui paie le pécule, pas le patron. C’est ton droit, pas un cadeau : tu le gagnes avec ton travail. La prime de fin d’année dépend de ton secteur.", // nieuw, nalezen
};

export const de: Gloss = {
    'be.w.loonstrook': "die Lohnabrechnung (loonbrief)", // nieuw, nalezen
    'be.s.payslip.2': "Meine Lohnabrechnung stimmt nicht.", // nieuw, nalezen
    'be.c.payslip.q': "Hast du deine Lohnabrechnung bekommen?", // nieuw, nalezen
    'be.w.toeslag': "die Prämie, der Zuschlag (zum Beispiel für Nachtarbeit)", // nieuw, nalezen
    'be.w.minimumloon': "die Lohntabelle mit den Mindestlöhnen (deiner Branche)", // nieuw, nalezen
    'be.s.extra.1': "Bekomme ich eine Prämie für Nachtarbeit?", // nieuw, nalezen
    'be.c.payslip': "Prüf deinen loonbrief", // nieuw, nalezen
    'be.c.payslip.b': "Brutoloon ist dein Lohn, bevor etwas abgezogen wird. Nettoloon ist, was auf dein Bankkonto kommt. Dazwischen gehen zwei Dinge ab: die RSZ (Sozialversicherung, 13.07% vom Bruttolohn) und die bedrijfsvoorheffing (eine Vorauszahlung auf deine Steuer). Dein Arbeitgeber muss dir eine Lohnabrechnung (loonbrief) geben. Darauf steht oft die Nummer deiner paritair comité: die Vereinbarungen deiner Branche, auch über den Mindestlohn. Bekommst du Essensgutscheine (maaltijdcheques)? Einen kleinen Teil zahlst du selbst. Prüf auf jedem loonbrief die Stunden und den Lohn, und schreib deine Arbeitsstunden auf. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
    'be.c.payslip.p': "Ich habe mehr Stunden gearbeitet. Können Sie das prüfen?", // nieuw, nalezen
    'be.c.payslip.s': "Auf deinem loonbrief stehen weniger Stunden, als du gearbeitet hast. Was machst du?", // nieuw, nalezen
    'be.c.payslip.o1': "Du zeigst deine Notizen und bittest den Arbeitgeber, es zu prüfen.", // nieuw, nalezen
    'be.c.payslip.o2': "Du sagst nichts, weil du keine Probleme willst.", // nieuw, nalezen
    'be.c.payslip.o3': "Du wartest einen Monat: Auf dem nächsten loonbrief stimmt es.", // nieuw, nalezen
    'be.c.payslip.w': "Fehler auf einer Lohnabrechnung kommen vor. Nachfragen ist normal und dein Recht. Deine Notizen mit Daten und Stunden helfen sehr. Stimmt es immer noch nicht? Die Gewerkschaft kann helfen.", // nieuw, nalezen
    'be.c.extra': "Urlaubsgeld und Jahresendprämie", // nieuw, nalezen
    'be.c.extra.b': "Du bekommst Urlaubsgeld (vakantiegeld). Es hängt von deiner Arbeit im Jahr davor ab. Bist du bediende (oft Büro- oder Ladenarbeit)? Dann zahlt dein Arbeitgeber: deinen normalen Lohn im Urlaub, und einmal im Jahr zusätzliches Geld (dubbel vakantiegeld). Bist du arbeider (oft Arbeit mit den Händen)? Dann zahlt eine Urlaubskasse (vakantiekas oder RJV), ab Mai. Viele Branchen geben auch eine Jahresendprämie (eindejaarspremie). Dein Lohn darf nie niedriger sein als das Minimum deiner paritair comité (barema). Überstunden bringen mindestens 50% Zuschlag, und oft später freie Zeit. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
    'be.c.extra.p': "Wann bekomme ich mein Urlaubsgeld?", // nieuw, nalezen
    'be.c.extra.s': "Du arbeitest als arbeider in einer Fabrik. Ein Kollege sagt: „Im Mai bekommst du extra Geld, aber nicht vom Chef.“ Was ist das?", // nieuw, nalezen
    'be.c.extra.o1': "Urlaubsgeld, von der Urlaubskasse (vakantiekas).", // nieuw, nalezen
    'be.c.extra.o2': "Ein Geschenk der Gewerkschaft, für ihre Mitglieder.", // nieuw, nalezen
    'be.c.extra.o3': "Ein 13. Monatsgehalt vom Chef, für alle.", // nieuw, nalezen
    'be.c.extra.w': "Bei einem arbeider zahlt die Urlaubskasse das Urlaubsgeld, nicht der Chef. Es ist dein Recht, kein Geschenk: Du baust es mit deiner Arbeit auf. Die Jahresendprämie hängt von deiner Branche ab.", // nieuw, nalezen
};
