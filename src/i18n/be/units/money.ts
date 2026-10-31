import type { Gloss } from '../types';

// The translations of the Belgian version of u.money (src/content/taalBe/units/money.ts), one
// object per help language: FOD Financiën, terugkrijgen, MyMinfin, and the tip about official
// letters (eBox, MyMinfin, Groeipakket, OCMW, CAW, Wikifin). Gendered languages use a form without
// gender where they can (Arabic: the verbal noun; Tigrinya: the polite plural).
// Every line: // nieuw, nalezen

export const ar: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (مصلحة الضرائب الفدرالية)", // nieuw, nalezen
    'be.w.terugbetalen': "استرجاع (المال)", // nieuw, nalezen
    'be.c.letters.a': "نعم، عبر MyMinfin. سأسترجع مالاً.", // nieuw, nalezen
    'be.c.letters': "عدم تجاهل الرسائل", // nieuw, nalezen
    'be.c.letters.b': { m: 'الرسائل من FOD Financiën (الضرائب) أو البلدية (gemeente) أو RVA أو OCMW لا تُهمل. رسائل كثيرة تصل أيضاً عبر الإنترنت، في eBox. من المفيد طلب المساعدة في القراءة من شخص موثوق. التصريح الضريبي (aangifte) يكون على MyMinfin، بـitsme أو بـeID. غالباً يصل اقتراح معبّأ مسبقاً: المطلوب فحصه جيداً. FOD Financiën يساعد مجاناً. أطفال؟ Groeipakket مال للأطفال من الحكومة الفلامنكية. مشاكل مالية؟ OCMW وCAW يساعدان مجاناً. نصائح عن المال: wikifin.be. معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', f: 'الرسائل من FOD Financiën (الضرائب) أو البلدية (gemeente) أو RVA أو OCMW لا تُهمل. رسائل كثيرة تصل أيضاً عبر الإنترنت، في eBox. من المفيد طلب المساعدة في القراءة من شخص موثوق. التصريح الضريبي (aangifte) يكون على MyMinfin، بـitsme أو بـeID. غالباً يصل اقتراح معبّأ مسبقاً: المطلوب فحصه جيداً. FOD Financiën يساعد مجاناً. أطفال؟ Groeipakket مال للأطفال من الحكومة الفلامنكية. مشاكل مالية؟ OCMW وCAW يساعدان مجاناً. نصائح عن المال: wikifin.be. معلومات عامة. لوضعك أنت: اسألي صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', x: 'الرسائل من FOD Financiën (الضرائب) أو البلدية (gemeente) أو RVA أو OCMW لا تُهمل. رسائل كثيرة تصل أيضاً عبر الإنترنت، في eBox. من المفيد طلب المساعدة في القراءة من شخص موثوق. التصريح الضريبي (aangifte) يكون على MyMinfin، بـitsme أو بـeID. غالباً يصل اقتراح معبّأ مسبقاً: المطلوب فحصه جيداً. FOD Financiën يساعد مجاناً. أطفال؟ Groeipakket مال للأطفال من الحكومة الفلامنكية. مشاكل مالية؟ OCMW وCAW يساعدان مجاناً. نصائح عن المال: wikifin.be. معلومات عامة. للوضع الشخصي: السؤال عند صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).' }, // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.letters.p': "وصلتني رسالة. هل تستطيع أن تساعدني؟", // nieuw, nalezen
    'be.c.letters.s': "وصلت رسالة من FOD Financiën، وهي غير مفهومة. ما التصرف الصحيح؟", // nieuw, nalezen
    'be.c.letters.o1': "طلب المساعدة في القراءة من شخص موثوق.", // nieuw, nalezen
    'be.c.letters.o2': "وضعها في درج والانتظار.", // nieuw, nalezen
    'be.c.letters.o3': "رميها، لأنها على الأغلب إعلان.", // nieuw, nalezen
    'be.c.letters.w': "الرسائل الرسمية فيها غالباً موعد للرد. الرد في الوقت يجعل حل المشاكل أسهل عادةً. وربما يأتي مال مسترجع.", // nieuw, nalezen
};

export const ti: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (ቤት ጽሕፈት ግብሪ ፌደራል)", // nieuw, nalezen
    'be.w.terugbetalen': 'ተመላሲ ገንዘብ ምርካብ', // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.letters.a': "እወ፡ ብMyMinfin። ገንዘብ ይምለሰለይ እዩ።", // nieuw, nalezen
    'be.c.letters': "ደብዳቤታት ሸለል ኣይትበሉ", // nieuw, nalezen
    'be.c.letters.b': "ካብ FOD Financiën (ግብሪ)፡ gemeente፡ RVA ወይ OCMW ዝመጹ ደብዳቤታት ሸለል ኣይትበልዎም። ብዙሓት ደብዳቤታት ብኢንተርነት እውን ይመጹ፡ ኣብ eBoxኹም። ከተንብብዎም ክሕግዘኩም ዝእመን ሰብ ሕተቱ። መግለጺ ግብሪ (aangifte) ኣብ MyMinfin ብitsme ወይ ብeID ትገብሩ። ብዙሕ ግዜ ዝተመልአ ሓሳብ ይመጸኩም፡ ጽቡቕ ገይርኩም ተቖጻጸርዎ። FOD Financiën ብናጻ ይሕግዘኩም። ቆልዑ ኣለዉኹም ዶ? Groeipakket ካብ መንግስቲ ፍላንደርስ ንቆልዑ ዝወሃብ ገንዘብ እዩ። ናይ ገንዘብ ጸገም? OCMWን CAWን ብናጻ ይሕግዙ። ብዛዕባ ገንዘብ ምኽሪ፡ wikifin.be። ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።", // nieuw, nalezen
    'be.c.letters.p': "ደብዳቤ በጺሑኒ። ክትሕግዘኒ ትኽእል ዶ?", // nieuw, nalezen
    'be.c.letters.s': "ካብ FOD Financiën ደብዳቤ ይመጸኩም። ኣይተረድኣኩምን። እንታይ ትገብሩ?", // nieuw, nalezen
    'be.c.letters.o1': "ከተንብብዎ ክሕግዘኩም ዝእመን ሰብ ሕተቱ።", // nieuw, nalezen
    'be.c.letters.o2': "ኣብ መሳቢ ኣእትውዎ እሞ ተጸበዩ።", // nieuw, nalezen
    'be.c.letters.o3': "ምናልባት ረኽላም ስለ ዝኾነ፡ ደርብይዎ።", // nieuw, nalezen
    'be.c.letters.w': "ወግዓዊ ደብዳቤታት ብዙሕ ግዜ ክትምልሱሉ ዘለኩም ዕለት ኣለዎም። ብግዜኡ እንተ መለስኩም፡ ጸገማት ብዙሕ ግዜ ብቐሊሉ ይፍትሑ። ምናልባት ገንዘብ እውን ይምለሰልኩም።", // nieuw, nalezen
};

export const fa: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (ادارهٔ مالیات فدرال)", // nieuw, nalezen
    'be.w.terugbetalen': "پس گرفتن (پول)", // nieuw, nalezen
    'be.c.letters.a': "بله، از طریق MyMinfin. پول پس می‌گیرم.", // nieuw, nalezen
    'be.c.letters': "نامه‌ها را نادیده نگیر", // nieuw, nalezen
    'be.c.letters.b': "نامه‌های FOD Financiën (مالیات)، شهرداری (gemeente)، RVA یا OCMW را نادیده نگیر. خیلی از نامه‌ها آنلاین هم می‌آیند، در eBox تو. از کسی که به او اعتماد داری بخواه در خواندن کمکت کند. اظهارنامهٔ مالیاتی (aangifte) را در MyMinfin انجام می‌دهی، با itsme یا eID. اغلب یک پیشنهاد ازپیش‌پرشده می‌گیری: آن را خوب چک کن. FOD Financiën رایگان کمکت می‌کند. بچه داری؟ Groeipakket پولی برای بچه‌هایت از دولت فلاندر است. مشکل مالی؟ OCMW و CAW رایگان کمک می‌کنند. نکته‌هایی دربارهٔ پول: wikifin.be. اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.", // nieuw, nalezen
    'be.c.letters.p': "نامه‌ای گرفته‌ام. می‌توانی کمکم کنی؟", // nieuw, nalezen
    'be.c.letters.s': "نامه‌ای از FOD Financiën می‌گیری. آن را نمی‌فهمی. چه کار می‌کنی؟", // nieuw, nalezen
    'be.c.letters.o1': "از کسی که به او اعتماد داری بخواه در خواندنش کمکت کند.", // nieuw, nalezen
    'be.c.letters.o2': "آن را در کشو بگذار و صبر کن.", // nieuw, nalezen
    'be.c.letters.o3': "دورش بینداز، چون احتمالاً تبلیغ است.", // nieuw, nalezen
    'be.c.letters.w': "نامه‌های رسمی اغلب تاریخی برای جواب دادن دارند. اگر به‌موقع جواب بدهی، مشکل معمولاً آسان‌تر حل می‌شود. شاید حتی پول پس بگیری.", // nieuw, nalezen
};

export const prs: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (ادارهٔ مالیه فدرال)", // nieuw, nalezen
    'be.w.terugbetalen': "پس گرفتن (پول)", // nieuw, nalezen
    'be.c.letters.a': "بلی، از طریق MyMinfin. پول پس می‌گیرم.", // nieuw, nalezen
    'be.c.letters': "نامه‌ها را نادیده نگیرید", // nieuw, nalezen
    'be.c.letters.b': "نامه‌های FOD Financiën (مالیه)، شاروالی (gemeente)، RVA یا OCMW را نادیده نگیرید. بسیاری از نامه‌ها آنلاین هم می‌آیند، در eBox شما. از کسی که به او اعتماد دارید بخواهید در خواندن کمک تان کند. اظهارنامهٔ مالیاتی (aangifte) را در MyMinfin انجام می‌دهید، با itsme یا eID. اکثراً یک پیشنهاد از قبل پرشده می‌گیرید: آن را خوب چک کنید. FOD Financiën رایگان کمک تان می‌کند. اولاد دارید؟ Groeipakket پولی برای اولاد شما از دولت فلاندر است. مشکل پولی؟ OCMW و CAW رایگان کمک می‌کنند. رهنمایی دربارهٔ پول: wikifin.be. معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.", // nieuw, nalezen
    'be.c.letters.p': "یک نامه گرفته‌ام. می‌توانی کمکم کنی؟", // nieuw, nalezen
    'be.c.letters.s': "از FOD Financiën نامه‌ای می‌گیرید. آن را نمی‌فهمید. چه می‌کنید؟", // nieuw, nalezen
    'be.c.letters.o1': "از کسی که به او اعتماد دارید بخواهید در خواندنش کمک کند.", // nieuw, nalezen
    'be.c.letters.o2': "آن را در دراز بگذارید و صبر کنید.", // nieuw, nalezen
    'be.c.letters.o3': "دورش بیندازید، چون احتمالاً اعلان است.", // nieuw, nalezen
    'be.c.letters.w': "نامه‌های رسمی اکثراً تاریخی برای جواب دادن دارند. اگر به وقتش جواب بدهید، مشکل معمولاً آسان‌تر حل می‌شود. شاید حتی پول پس بگیرید.", // nieuw, nalezen
};

export const uk: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (федеральна податкова служба)", // nieuw, nalezen
    'be.w.terugbetalen': "отримувати назад (гроші)", // nieuw, nalezen
    'be.c.letters.a': "Так, через MyMinfin. Я отримаю гроші назад.", // nieuw, nalezen
    'be.c.letters': "Не ігноруй листи", // nieuw, nalezen
    'be.c.letters.b': "Не ігноруй листи від FOD Financiën (податки), громади (gemeente), RVA чи OCMW. Багато листів приходить і онлайн, у твій eBox. Попроси людину, якій довіряєш, допомогти їх прочитати. Податкову декларацію (aangifte) ти подаєш у MyMinfin, через itsme або eID. Часто ти отримуєш уже заповнену пропозицію: уважно її перевір. FOD Financiën допомагає безкоштовно. Маєш дітей? Groeipakket — це гроші на дітей від уряду Фландрії. Проблеми з грошима? OCMW і CAW допомагають безкоштовно. Поради про гроші: wikifin.be. Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).", // nieuw, nalezen
    'be.c.letters.p': "Я отримав / отримала лист. Можеш мені допомогти?", // nieuw, nalezen
    'be.c.letters.s': "Ти отримуєш лист від FOD Financiën. Ти його не розумієш. Що ти зробиш?", // nieuw, nalezen
    'be.c.letters.o1': "Попросиш людину, якій довіряєш, допомогти прочитати.", // nieuw, nalezen
    'be.c.letters.o2': "Покладеш його в шухляду й чекатимеш.", // nieuw, nalezen
    'be.c.letters.o3': "Викинеш, бо це, мабуть, реклама.", // nieuw, nalezen
    'be.c.letters.w': "В офіційних листах часто є дата, до якої треба відповісти. Якщо відповісти вчасно, проблеми зазвичай легше розв’язати. Може, ти навіть отримаєш гроші назад.", // nieuw, nalezen
};

export const tr: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (federal vergi dairesi)", // nieuw, nalezen
    'be.w.terugbetalen': "geri almak (para)", // nieuw, nalezen
    'be.c.letters.a': "Evet, MyMinfin’den. Para iadesi alacağım.", // nieuw, nalezen
    'be.c.letters': "Mektupları görmezden gelme", // nieuw, nalezen
    'be.c.letters.b': "FOD Financiën’den (vergi), belediyeden (gemeente), RVA’dan ya da OCMW’den gelen mektupları görmezden gelme. Birçok mektup internetten de gelir, eBox’ına. Güvendiğin birinden okumana yardım etmesini iste. Vergi beyannameni (aangifte) MyMinfin’de, itsme ya da eID ile yaparsın. Çoğu zaman önceden doldurulmuş bir öneri gelir: onu iyice kontrol et. FOD Financiën ücretsiz yardım eder. Çocuğun var mı? Groeipakket, Flaman hükümetinden çocukların için bir paradır. Para sorunun mu var? OCMW ve CAW ücretsiz yardım eder. Para hakkında ipuçları: wikifin.be. Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.", // nieuw, nalezen
    'be.c.letters.p': "Bir mektup aldım. Bana yardım edebilir misin?", // nieuw, nalezen
    'be.c.letters.s': "FOD Financiën’den bir mektup alıyorsun. Anlamıyorsun. Ne yaparsın?", // nieuw, nalezen
    'be.c.letters.o1': "Güvendiğin birinden okumana yardım etmesini istersin.", // nieuw, nalezen
    'be.c.letters.o2': "Bir çekmeceye koyup beklersin.", // nieuw, nalezen
    'be.c.letters.o3': "Atarsın, çünkü büyük ihtimalle reklamdır.", // nieuw, nalezen
    'be.c.letters.w': "Resmî mektuplarda çoğu zaman cevap vermen gereken bir tarih olur. Zamanında cevap verirsen sorunlar genelde daha kolay çözülür. Belki para da geri alırsın.", // nieuw, nalezen
};

export const pl: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (federalny urząd skarbowy)", // nieuw, nalezen
    'be.w.terugbetalen': "dostać zwrot (pieniędzy)", // nieuw, nalezen
    'be.c.letters.a': "Tak, przez MyMinfin. Dostanę zwrot pieniędzy.", // nieuw, nalezen
    'be.c.letters': "Nie ignoruj listów", // nieuw, nalezen
    'be.c.letters.b': "Nie ignoruj listów od FOD Financiën (podatki), gminy (gemeente), RVA ani OCMW. Wiele listów przychodzi też przez internet, do twojej skrzynki eBox. Poproś kogoś, komu ufasz, o pomoc w czytaniu. Zeznanie podatkowe (aangifte) składasz w MyMinfin, przez itsme albo eID. Często dostajesz gotową, wypełnioną propozycję: sprawdź ją dokładnie. FOD Financiën pomaga za darmo. Masz dzieci? Groeipakket to pieniądze na dzieci od rządu Flandrii. Problemy z pieniędzmi? OCMW i CAW pomagają za darmo. Porady o pieniądzach: wikifin.be. To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).", // nieuw, nalezen
    'be.c.letters.p': "Dostałem / dostałam list. Możesz mi pomóc?", // nieuw, nalezen
    'be.c.letters.s': "Dostajesz list od FOD Financiën. Nie rozumiesz go. Co robisz?", // nieuw, nalezen
    'be.c.letters.o1': "Prosisz kogoś, komu ufasz, o pomoc w czytaniu.", // nieuw, nalezen
    'be.c.letters.o2': "Wkładasz go do szuflady i czekasz.", // nieuw, nalezen
    'be.c.letters.o3': "Wyrzucasz go, bo to pewnie reklama.", // nieuw, nalezen
    'be.c.letters.w': "W urzędowych listach często jest data, do której trzeba odpowiedzieć. Gdy odpowiesz na czas, problemy zwykle łatwiej rozwiązać. Może nawet dostaniesz zwrot pieniędzy.", // nieuw, nalezen
};

export const ro: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (fiscul federal)", // nieuw, nalezen
    'be.w.terugbetalen': "a primi înapoi (bani)", // nieuw, nalezen
    'be.c.letters.a': "Da, pe MyMinfin. Primesc bani înapoi.", // nieuw, nalezen
    'be.c.letters': "Nu ignora scrisorile", // nieuw, nalezen
    'be.c.letters.b': "Nu ignora scrisorile de la FOD Financiën (impozite), primărie (gemeente), RVA sau OCMW. Multe scrisori vin și online, în eBox-ul tău. Roagă pe cineva în care ai încredere să te ajute să le citești. Declarația de impozit (aangifte) o faci pe MyMinfin, cu itsme sau cu eID. Des primești o propunere deja completată: verific-o bine. FOD Financiën te ajută gratuit. Ai copii? Groeipakket înseamnă bani pentru copiii tăi de la guvernul Flandrei. Probleme cu banii? OCMW și CAW ajută gratuit. Sfaturi despre bani: wikifin.be. Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).", // nieuw, nalezen
    'be.c.letters.p': "Am primit o scrisoare. Mă poți ajuta?", // nieuw, nalezen
    'be.c.letters.s': "Primești o scrisoare de la FOD Financiën. Nu o înțelegi. Ce faci?", // nieuw, nalezen
    'be.c.letters.o1': "Rogi pe cineva în care ai încredere să te ajute s-o citești.", // nieuw, nalezen
    'be.c.letters.o2': "O pui într-un sertar și aștepți.", // nieuw, nalezen
    'be.c.letters.o3': "O arunci, pentru că probabil e reclamă.", // nieuw, nalezen
    'be.c.letters.w': "Scrisorile oficiale au des o dată până la care trebuie să răspunzi. Dacă răspunzi la timp, problemele se rezolvă de obicei mai ușor. Poate primești chiar bani înapoi.", // nieuw, nalezen
};

export const bg: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (федералната данъчна служба)", // nieuw, nalezen
    'be.w.terugbetalen': "получавам обратно (пари)", // nieuw, nalezen
    'be.c.letters.a': "Да, през MyMinfin. Ще получа пари обратно.", // nieuw, nalezen
    'be.c.letters': "Не пренебрегвай писмата", // nieuw, nalezen
    'be.c.letters.b': "Не пренебрегвай писма от FOD Financiën (данъци), общината (gemeente), RVA или OCMW. Много писма идват и онлайн, в твоя eBox. Помоли човек, на когото имаш доверие, да ти помогне да ги прочетеш. Данъчната декларация (aangifte) подаваш в MyMinfin, с itsme или с eID. Често получаваш вече попълнено предложение: провери го добре. FOD Financiën помага безплатно. Имаш деца? Groeipakket са пари за децата ти от фламандското правителство. Проблеми с парите? OCMW и CAW помагат безплатно. Съвети за парите: wikifin.be. Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).", // nieuw, nalezen
    'be.c.letters.p': "Получих писмо. Можеш ли да ми помогнеш?", // nieuw, nalezen
    'be.c.letters.s': "Получаваш писмо от FOD Financiën. Не го разбираш. Какво правиш?", // nieuw, nalezen
    'be.c.letters.o1': "Молиш човек, на когото имаш доверие, да ти помогне да го прочетеш.", // nieuw, nalezen
    'be.c.letters.o2': "Слагаш го в чекмеджето и чакаш.", // nieuw, nalezen
    'be.c.letters.o3': "Изхвърляш го, защото вероятно е реклама.", // nieuw, nalezen
    'be.c.letters.w': "Официалните писма често имат дата, до която трябва да отговориш. Ако отговориш навреме, проблемите обикновено се решават по-лесно. Може дори да получиш пари обратно.", // nieuw, nalezen
};

export const es: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (Hacienda federal)", // nieuw, nalezen
    'be.w.terugbetalen': "recuperar (dinero)", // nieuw, nalezen
    'be.c.letters.a': "Sí, por MyMinfin. Me devuelven dinero.", // nieuw, nalezen
    'be.c.letters': "No ignores las cartas", // nieuw, nalezen
    'be.c.letters.b': "No ignores las cartas de FOD Financiën (impuestos), del ayuntamiento (gemeente), de la RVA o del OCMW. Muchas cartas también llegan por internet, a tu eBox. Pide a alguien de confianza que te ayude a leerlas. La declaración de la renta (aangifte) la haces en MyMinfin, con itsme o con tu eID. Muchas veces recibes una propuesta ya rellenada: revísala bien. FOD Financiën te ayuda gratis. ¿Tienes hijos? El Groeipakket es dinero para tus hijos del Gobierno flamenco. ¿Problemas de dinero? El OCMW y el CAW ayudan gratis. Consejos sobre dinero: wikifin.be. Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).", // nieuw, nalezen
    'be.c.letters.p': "He recibido una carta. ¿Me puedes ayudar?", // nieuw, nalezen
    'be.c.letters.s': "Recibes una carta de FOD Financiën. No la entiendes. ¿Qué haces?", // nieuw, nalezen
    'be.c.letters.o1': "Pides a alguien de confianza que te ayude a leerla.", // nieuw, nalezen
    'be.c.letters.o2': "La guardas en un cajón y esperas.", // nieuw, nalezen
    'be.c.letters.o3': "La tiras, porque seguramente es publicidad.", // nieuw, nalezen
    'be.c.letters.w': "Las cartas oficiales muchas veces tienen una fecha para responder. Si respondes a tiempo, los problemas suelen ser más fáciles de resolver. A lo mejor hasta te devuelven dinero.", // nieuw, nalezen
};

export const pt: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (as Finanças federais)", // nieuw, nalezen
    'be.w.terugbetalen': "receber de volta (dinheiro)", // nieuw, nalezen
    'be.c.letters.a': "Sim, no MyMinfin. Vou receber dinheiro de volta.", // nieuw, nalezen
    'be.c.letters': "Não ignores as cartas", // nieuw, nalezen
    'be.c.letters.b': "Não ignores as cartas de FOD Financiën (impostos), da câmara municipal (gemeente), da RVA ou do OCMW. Muitas cartas também chegam online, à tua eBox. Pede a alguém de confiança que te ajude a lê-las. A declaração de impostos (aangifte) fazes no MyMinfin, com o itsme ou o eID. Muitas vezes recebes uma proposta já preenchida: verifica-a bem. FOD Financiën ajuda-te de graça. Tens filhos? O Groeipakket é dinheiro para os teus filhos do Governo flamengo. Problemas de dinheiro? O OCMW e o CAW ajudam de graça. Dicas sobre dinheiro: wikifin.be. Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).", // nieuw, nalezen
    'be.c.letters.p': "Recebi uma carta. Podes ajudar-me?", // nieuw, nalezen
    'be.c.letters.s': "Recebes uma carta de FOD Financiën. Não a percebes. O que fazes?", // nieuw, nalezen
    'be.c.letters.o1': "Pedes a alguém de confiança que te ajude a lê-la.", // nieuw, nalezen
    'be.c.letters.o2': "Guarda-la numa gaveta e esperas.", // nieuw, nalezen
    'be.c.letters.o3': "Deita-la fora, porque deve ser publicidade.", // nieuw, nalezen
    'be.c.letters.w': "As cartas oficiais têm muitas vezes uma data para responder. Se responderes a tempo, os problemas costumam ser mais fáceis de resolver. Talvez até recebas dinheiro de volta.", // nieuw, nalezen
};

export const fr: Gloss = {
    'be.w.belastingdienst': "le SPF Finances (FOD Financiën, les impôts fédéraux)", // nieuw, nalezen
    'be.w.terugbetalen': "récupérer (de l’argent)", // nieuw, nalezen
    'be.c.letters.a': "Oui, sur MyMinfin. Je vais récupérer de l’argent.", // nieuw, nalezen
    'be.c.letters': "N’ignore pas les lettres", // nieuw, nalezen
    'be.c.letters.b': "N’ignore pas les lettres du SPF Finances (FOD Financiën, les impôts), de la commune (gemeente), de l’ONEM (RVA) ou du CPAS (OCMW). Beaucoup de lettres arrivent aussi en ligne, dans ton eBox. Demande à une personne de confiance de t’aider à les lire. Ta déclaration d’impôts (aangifte), tu la fais sur MyMinfin, avec itsme ou ton eID. Souvent, tu reçois une proposition déjà remplie : vérifie-la bien. Le SPF Finances t’aide gratuitement. Tu as des enfants ? Le Groeipakket, c’est de l’argent pour tes enfants du gouvernement flamand. Des problèmes d’argent ? Le CPAS (OCMW) et le CAW aident gratuitement. Des conseils sur l’argent : wikifin.be. Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).", // nieuw, nalezen
    'be.c.letters.p': "J’ai reçu une lettre. Tu peux m’aider ?", // nieuw, nalezen
    'be.c.letters.s': "Tu reçois une lettre du SPF Finances (FOD Financiën). Tu ne la comprends pas. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'be.c.letters.o1': "Tu demandes à une personne de confiance de t’aider à la lire.", // nieuw, nalezen
    'be.c.letters.o2': "Tu la mets dans un tiroir et tu attends.", // nieuw, nalezen
    'be.c.letters.o3': "Tu la jettes, parce que c’est sûrement de la publicité.", // nieuw, nalezen
    'be.c.letters.w': "Les lettres officielles ont souvent une date pour répondre. Si tu réponds à temps, les problèmes sont en général plus faciles à régler. Peut-être même que tu récupères de l’argent.", // nieuw, nalezen
};

export const de: Gloss = {
    'be.w.belastingdienst': "FOD Financiën (das föderale Finanzamt)", // nieuw, nalezen
    'be.w.terugbetalen': "zurückbekommen (Geld)", // nieuw, nalezen
    'be.c.letters.a': "Ja, über MyMinfin. Ich bekomme Geld zurück.", // nieuw, nalezen
    'be.c.letters': "Ignorier keine Briefe", // nieuw, nalezen
    'be.c.letters.b': "Ignorier keine Briefe von FOD Financiën (Steuern), der Gemeinde (gemeente), dem RVA oder dem OCMW. Viele Briefe kommen auch online, in deine eBox. Bitte jemanden, dem du vertraust, dir beim Lesen zu helfen. Deine Steuererklärung (aangifte) machst du auf MyMinfin, mit itsme oder deiner eID. Oft bekommst du einen schon ausgefüllten Vorschlag: Prüf ihn gut. FOD Financiën hilft dir kostenlos. Hast du Kinder? Das Groeipakket ist Geld für deine Kinder von der flämischen Regierung. Geldprobleme? Das OCMW und das CAW helfen kostenlos. Tipps zum Thema Geld: wikifin.be. Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).", // nieuw, nalezen
    'be.c.letters.p': "Ich habe einen Brief bekommen. Kannst du mir helfen?", // nieuw, nalezen
    'be.c.letters.s': "Du bekommst einen Brief von FOD Financiën. Du verstehst ihn nicht. Was machst du?", // nieuw, nalezen
    'be.c.letters.o1': "Du bittest jemanden, dem du vertraust, dir beim Lesen zu helfen.", // nieuw, nalezen
    'be.c.letters.o2': "Du legst ihn in eine Schublade und wartest.", // nieuw, nalezen
    'be.c.letters.o3': "Du wirfst ihn weg, weil es wohl Werbung ist.", // nieuw, nalezen
    'be.c.letters.w': "Offizielle Briefe haben oft ein Datum, bis zu dem du antworten musst. Wenn du rechtzeitig antwortest, lassen sich Probleme meist leichter lösen. Vielleicht bekommst du sogar Geld zurück.", // nieuw, nalezen
};
