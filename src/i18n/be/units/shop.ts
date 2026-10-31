import type { Gloss } from '../types';

// The translations of the Belgian version of u.shop (src/content/taalBe/units/shop.ts), one
// object per help language. "// nieuw, nalezen": a new translation, not yet read by a native speaker.
// "// = <id>": the same text as the Dutch translation of that id (src/i18n), unchanged.

export const ar: Gloss = {
    "be.w.pinnen": "الدفع بالبطاقة", // nieuw, nalezen
    "be.w.bonnetje": "الإيصال", // nieuw, nalezen
    "be.s.checkout.1": "هل تدفع بالبطاقة أم نقداً؟", // nieuw, nalezen
    "be.c.checkout.q": "هل يمكنني الدفع بالبطاقة هنا؟", // nieuw, nalezen
    "be.c.checkout": "الهوية عند بيع الكحول والتبغ", // = c.checkout
    "be.c.checkout.b": { m: 'لا يجوز بيع البيرة أو النبيذ لمن هو دون 16 سنة، ولا المشروبات القوية أو التبغ لمن هو دون 18: هذا هو القانون. عند الشك في عمر الزبون، يُطلب منه إثبات الهوية (identiteitskaart). للتبغ، يُطلب إثبات الهوية من كل من يبدو أصغر من 25. لا هوية، أو صغير جداً؟ إذن لا بيع، مع البقاء مهذباً. القواعد تختلف من شركة لأخرى: اسأل مشرفك عن القواعد في مكان عملك.', f: 'لا يجوز بيع البيرة أو النبيذ لمن هو دون 16 سنة، ولا المشروبات القوية أو التبغ لمن هو دون 18: هذا هو القانون. عند الشك في عمر الزبون، يُطلب منه إثبات الهوية (identiteitskaart). للتبغ، يُطلب إثبات الهوية من كل من يبدو أصغر من 25. لا هوية، أو صغير جداً؟ إذن لا بيع، مع البقاء مهذباً. القواعد تختلف من شركة لأخرى: اسألي مشرفك عن القواعد في مكان عملك.', x: 'لا يجوز بيع البيرة أو النبيذ لمن هو دون 16 سنة، ولا المشروبات القوية أو التبغ لمن هو دون 18: هذا هو القانون. عند الشك في عمر الزبون، يُطلب منه إثبات الهوية (identiteitskaart). للتبغ، يُطلب إثبات الهوية من كل من يبدو أصغر من 25. لا هوية، أو صغير جداً؟ إذن لا بيع، مع البقاء مهذباً. القواعد تختلف من شركة لأخرى: السؤال عند المشرف عن القواعد في مكان العمل.' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "بدون هوية لا يُسمح لي أن أبيع هذا.", // = c.checkout.p
    "be.c.checkout.s": "شاب يريد شراء بيرة. يبدو عمره حوالي 14. يقول إن عمره 16، لكن ليس معه إثبات هوية. ما التصرف الصحيح؟", // nieuw, nalezen
    "be.c.checkout.o1": { m: "قل: لا أستطيع بيعه بدون هوية.", f: "قولي: لا أستطيع بيعه بدون هوية." }, // = c.checkout.o1
    "be.c.checkout.o2": { m: 'بِعه، لأنه يقول إن عمره 16.', f: 'بيعيه، لأنه يقول إن عمره 16.', x: 'البيع، لأنه يقول إن عمره 16.' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": { m: "بِعه، لكن علبة واحدة فقط.", f: "بيعيه، لكن علبة واحدة فقط." }, // = c.checkout.o3
    "be.c.checkout.w": "من دون إثبات هوية لا يمكن معرفة عمره. بيع البيرة لمن هو دون 16 مخالف للقانون، ويمكن أن يدفع المحل غرامة.", // nieuw, nalezen
};

export const ti: Gloss = {
    "be.w.pinnen": "ብካርድ ምኽፋል", // nieuw, nalezen
    "be.w.bonnetje": "ቅብሊት", // nieuw, nalezen
    "be.s.checkout.1": "ብካርድ ዲኹም ትኸፍሉ ወይስ ብጥረ ገንዘብ?", // nieuw, nalezen
    "be.c.checkout.q": "ኣብዚ ብካርድ ክኸፍል ይኽእል ድየ?", // nieuw, nalezen
    "be.c.checkout": "ንኣልኮልን ትምባኾን መንነት ወረቐት", // = c.checkout
    "be.c.checkout.b": { m: 'ንትሕቲ 16 ዓመት ዝዕድሚኡ ቢራ ወይ ወይኒ ክትሸጥ ኣይፍቀድን፡ ንትሕቲ 18 ድማ ሓያል መስተ ወይ ትምባኾ ኣይፍቀድን፡ እዚ ሕጊ እዩ። ዕድመ ዓሚል ርግጸኛ ኣይኮንካን? መንነት (identiteitskaart) ሕተት። ንትምባኾ፡ ካብ ኩሉ ትሕቲ 25 ዝመስል መንነት ሕተት። መንነት የብሉን ወይ ኣዝዩ ንእሽቶ እዩ? ሽዑ ኣይትሸጥ፡ ብትሕትና ድማ ጽናሕ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕካ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኻ ሕተት።', f: 'ንትሕቲ 16 ዓመት ዝዕድሚኡ ቢራ ወይ ወይኒ ክትሸጢ ኣይፍቀድን፡ ንትሕቲ 18 ድማ ሓያል መስተ ወይ ትምባኾ ኣይፍቀድን፡ እዚ ሕጊ እዩ። ዕድመ ዓሚል ርግጸኛ ኣይኮንክን? መንነት (identiteitskaart) ሕተቲ። ንትምባኾ፡ ካብ ኩሉ ትሕቲ 25 ዝመስል መንነት ሕተቲ። መንነት የብሉን ወይ ኣዝዩ ንእሽቶ እዩ? ሽዑ ኣይትሸጢ፡ ብትሕትና ድማ ጽንሒ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኪ እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኺ ሕተቲ።', x: 'ንትሕቲ 16 ዓመት ዝዕድሚኡ ቢራ ወይ ወይኒ ክትሸጡ ኣይፍቀድን፡ ንትሕቲ 18 ድማ ሓያል መስተ ወይ ትምባኾ ኣይፍቀድን፡ እዚ ሕጊ እዩ። ዕድመ ዓሚል ርግጸኛታት ኣይኮንኩምን? መንነት (identiteitskaart) ሕተቱ። ንትምባኾ፡ ካብ ኩሉ ትሕቲ 25 ዝመስል መንነት ሕተቱ። መንነት የብሉን ወይ ኣዝዩ ንእሽቶ እዩ? ሽዑ ኣይትሸጡ፡ ብትሕትና ድማ ጽንሑ። ሕግታት ካብ ትካል ናብ ትካል ይፈላለ፡ ኣብ ቦታ ስራሕኩም እንታይ ሕግታት ከም ዘለዉ ንተቖጻጻሪኹም ሕተቱ።' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "ብዘይ መንነት ወረቐት እዚ ክሸጥ ኣይፍቀደለይን።", // = c.checkout.p
    "be.c.checkout.s": "ሓደ መንእሰይ ቢራ ክገዝእ ይደሊ። ዕድሚኡ 14 ዝኣክል ይመስል። 16 እየ ይብል፡ ግን መንነት ምስኡ የብሉን። እንታይ ትገብሩ?", // nieuw, nalezen
    "be.c.checkout.o1": { m: "ብዘይ መንነት ወረቐት ከም ዘይትሸጠሉ ንገሮ።", f: "ብዘይ መንነት ወረቐት ከም ዘይትሸጥሉ ንገርዮ።" }, // = c.checkout.o1
    "be.c.checkout.o2": { m: 'ሽጠሉ፡ 16 እየ ስለ ዝበለ።', f: 'ሽጥሉ፡ 16 እየ ስለ ዝበለ።', x: 'ሽጡሉ፡ 16 እየ ስለ ዝበለ።' }, // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": { m: "ሽጠሉ፡ ግን ሓንቲ ጣሳ ጥራይ።", f: "ሽጥሉ፡ ግን ሓንቲ ጣሳ ጥራይ።" }, // = c.checkout.o3
    "be.c.checkout.w": "ብዘይ መንነት ዕድሚኡ ክትፈልጡ ኣይትኽእሉን። ንትሕቲ 16 ቢራ ምሻጥ ኣንጻር ሕጊ እዩ፡ እቲ ድኳን ድማ ቅጽዓት ገንዘብ ክወሃቦ ይኽእል።", // nieuw, nalezen
};

export const fa: Gloss = {
    "be.w.pinnen": "با کارت پرداختن", // nieuw, nalezen
    "be.w.bonnetje": "رسید خرید", // nieuw, nalezen
    "be.s.checkout.1": "با کارت پرداخت می‌کنید یا نقدی؟", // nieuw, nalezen
    "be.c.checkout.q": "می‌توانم اینجا با کارت پرداخت کنم؟", // nieuw, nalezen
    "be.c.checkout": "کارت شناسایی برای الکل و دخانیات", // = c.checkout
    "be.c.checkout.b": "نباید به کسی که زیر 16 سال است آبجو یا شراب بفروشی، و نه نوشیدنی قوی یا تنباکو به کسی که زیر 18 است: این قانون است. مطمئن نیستی مشتری چند سال دارد؟ کارت شناسایی‌اش (identiteitskaart) را بخواه. برای تنباکو، از هر کسی که جوان‌تر از 25 به نظر می‌رسد کارت شناسایی بخواه. کارت ندارد، یا خیلی جوان است؟ پس نفروش و مؤدب بمان. قانون‌ها در هر شرکت فرق دارد: از سرپرستت بپرس قانون‌های محل کارت چیست.", // nieuw, nalezen
    "be.c.checkout.p": "بدون کارت شناسایی اجازه ندارم این را بفروشم.", // = c.checkout.p
    "be.c.checkout.s": "یک پسر جوان می‌خواهد آبجو بخرد. حدود 14 ساله به نظر می‌رسد. می‌گوید 16 سال دارد، ولی کارت شناسایی همراهش نیست. چه کار می‌کنی؟", // nieuw, nalezen
    "be.c.checkout.o1": "بگو بدون کارت شناسایی نمی‌توانی بفروشی.", // = c.checkout.o1
    "be.c.checkout.o2": "بفروش، چون می‌گوید 16 سال دارد.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": "به او بفروش، اما فقط یک قوطی.", // = c.checkout.o3
    "be.c.checkout.w": "بدون کارت شناسایی نمی‌توانی سنش را بدانی. فروختن آبجو به کسی زیر 16 سال خلاف قانون است و فروشگاه ممکن است جریمه شود.", // nieuw, nalezen
};

export const prs: Gloss = {
    "be.w.pinnen": "با کارت پرداختن", // nieuw, nalezen
    "be.w.bonnetje": "رسید خرید", // nieuw, nalezen
    "be.s.checkout.1": "با کارت پرداخت می‌کنید یا نقد؟", // nieuw, nalezen
    "be.c.checkout.q": "می‌توانم اینجا با کارت پرداخت کنم؟", // nieuw, nalezen
    "be.c.checkout": "کارت هویت برای الکول و تنباکو", // = c.checkout
    "be.c.checkout.b": "نباید به کسی که زیر 16 سال است آبجو یا شراب بفروشید، و نه نوشیدنی قوی یا تنباکو به کسی که زیر 18 است: این قانون است. مطمئن نیستید مشتری چند سال دارد؟ کارت هویتش (identiteitskaart) را بخواهید. برای تنباکو، از هر کسی که جوان‌تر از 25 معلوم می‌شود کارت هویت بخواهید. کارت هویت ندارد، یا بسیار جوان است؟ پس نفروشید و مؤدب بمانید. مقررات در هر کمپنی فرق می‌کند: از سرپرست خود بپرسید که مقررات جای کار شما چیست.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "بدون کارت هویت اجازه ندارم این را بفروشم.", // = c.checkout.p
    "be.c.checkout.s": "یک پسر جوان می‌خواهد آبجو بخرد. حدود 14 ساله معلوم می‌شود. می‌گوید 16 سال دارد، ولی کارت هویت همراهش نیست. چه می‌کنید؟", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o1": "بگویید که بدون کارت هویت فروخته نمی‌توانید.", // = c.checkout.o1
    "be.c.checkout.o2": "بفروشید، چون می‌گوید 16 سال دارد.", // nieuw, nalezen
    "be.c.checkout.o3": "به او بفروشید، اما فقط یک قطی.", // = c.checkout.o3
    "be.c.checkout.w": "بدون کارت هویت نمی‌توانید سنش را بدانید. فروختن آبجو به کسی زیر 16 سال خلاف قانون است و دکان ممکن است جریمه شود.", // nieuw, nalezen // nagelezen AI ronde 3
};

export const uk: Gloss = {
    "be.w.pinnen": "платити карткою", // nieuw, nalezen
    "be.w.bonnetje": "чек", // nieuw, nalezen
    "be.s.checkout.1": "Ви платите карткою чи готівкою?", // nieuw, nalezen
    "be.c.checkout.q": "Можна тут заплатити карткою?", // nieuw, nalezen
    "be.c.checkout": "Документ для алкоголю й тютюну", // = c.checkout
    "be.c.checkout.b": "Не можна продавати пиво чи вино тим, кому менше 16, а міцні напої чи тютюн — тим, кому менше 18: це закон. Не знаєш точно, скільки покупцеві років? Попроси посвідчення (identiteitskaart). Для тютюну проси посвідчення в усіх, хто виглядає молодшим за 25. Немає посвідчення або замолодий? Тоді не продавай і залишайся ввічливим / ввічливою. У кожній фірмі свої правила: запитай керівника, які правила там, де ти працюєш.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "Без документа я не можу це продати.", // = c.checkout.p
    "be.c.checkout.s": "Молодий хлопець хоче купити пиво. На вигляд йому близько 14. Він каже, що йому 16, але посвідчення в нього немає. Що ти зробиш?", // nieuw, nalezen
    "be.c.checkout.o1": "Скажеш, що без документа не можеш продати.", // = c.checkout.o1
    "be.c.checkout.o2": "Продаси, бо він каже, що йому 16.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": "Продаси, але тільки одну банку.", // = c.checkout.o3
    "be.c.checkout.w": "Без посвідчення ти не можеш знати його вік. Продавати пиво тим, кому менше 16, — проти закону, і магазин може отримати штраф.", // nieuw, nalezen
};

export const tr: Gloss = {
    "be.w.pinnen": "kartla ödemek", // nieuw, nalezen
    "be.w.bonnetje": "fiş", // nieuw, nalezen
    "be.s.checkout.1": "Kartla mı ödüyorsunuz, nakit mi?", // nieuw, nalezen
    "be.c.checkout.q": "Burada kartla ödeyebilir miyim?", // nieuw, nalezen
    "be.c.checkout": "Alkol ve tütün için kimlik", // = c.checkout
    "be.c.checkout.b": "16 yaşından küçüklere bira veya şarap, 18 yaşından küçüklere de sert içki veya tütün satamazsın: bu yasadır. Müşterinin yaşından emin değil misin? Kimliğini (identiteitskaart) iste. Tütün için 25 yaşından genç görünen herkesten kimlik iste. Kimlik yok mu, ya da çok mu genç? O zaman satmazsın ve kibar kalırsın. Kurallar şirketten şirkete değişir: çalıştığın yerde kuralların ne olduğunu amirine sor.", // nieuw, nalezen
    "be.c.checkout.p": "Kimlik olmadan bunu satamam.", // = c.checkout.p
    "be.c.checkout.s": "Genç bir adam bira almak istiyor. Yaklaşık 14 yaşında görünüyor. 16 yaşında olduğunu söylüyor ama yanında kimliği yok. Ne yaparsın?", // nieuw, nalezen
    "be.c.checkout.o1": "Kimlik olmadan satamayacağını söylersin.", // = c.checkout.o1
    "be.c.checkout.o2": "Satarsın, çünkü 16 yaşında olduğunu söylüyor.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": "Satarsın, ama sadece bir kutu.", // = c.checkout.o3
    "be.c.checkout.w": "Kimlik olmadan yaşını bilemezsin. 16 yaşından küçüğe bira satmak yasaya aykırıdır ve dükkân para cezası alabilir.", // nieuw, nalezen
};

export const pl: Gloss = {
    "be.w.pinnen": "płacić kartą", // nieuw, nalezen
    "be.w.bonnetje": "paragon", // nieuw, nalezen
    "be.s.checkout.1": "Płaci pan/pani kartą czy gotówką?", // nieuw, nalezen
    "be.c.checkout.q": "Czy mogę tu zapłacić kartą?", // nieuw, nalezen
    "be.c.checkout": "Dowód przy alkoholu i tytoniu", // = c.checkout
    "be.c.checkout.b": "Nie wolno sprzedawać piwa ani wina osobom poniżej 16 lat, a mocnych alkoholi ani tytoniu osobom poniżej 18: takie jest prawo. Nie wiesz, ile lat ma klient? Poproś o dowód (identiteitskaart). Przy tytoniu proś o dowód każdego, kto wygląda na mniej niż 25 lat. Nie ma dowodu albo jest za młody? Wtedy nie sprzedajesz i zostajesz uprzejmy. Zasady są różne w każdej firmie: zapytaj przełożonego, jakie zasady obowiązują u ciebie w pracy.", // nieuw, nalezen
    "be.c.checkout.p": "Bez dowodu nie mogę tego sprzedać.", // = c.checkout.p
    "be.c.checkout.s": "Młody chłopak chce kupić piwo. Wygląda na około 14 lat. Mówi, że ma 16, ale nie ma przy sobie dowodu. Co robisz?", // nieuw, nalezen
    "be.c.checkout.o1": "Mówisz, że bez dowodu nie możesz sprzedać.", // = c.checkout.o1
    "be.c.checkout.o2": "Sprzedać, bo mówi, że ma 16 lat.", // nieuw, nalezen
    "be.c.checkout.o3": "Sprzedajesz, ale tylko jedną puszkę.", // = c.checkout.o3
    "be.c.checkout.w": "Bez dowodu nie możesz znać jego wieku. Sprzedaż piwa osobie poniżej 16 lat jest niezgodna z prawem, a sklep może dostać karę.", // nieuw, nalezen
};

export const ro: Gloss = {
    "be.w.pinnen": "a plăti cu cardul", // nieuw, nalezen
    "be.w.bonnetje": "bonul", // nieuw, nalezen
    "be.s.checkout.1": "Plătiți cu cardul sau cash?", // nieuw, nalezen
    "be.c.checkout.q": "Pot plăti aici cu cardul?", // nieuw, nalezen
    "be.c.checkout": "Act de identitate pentru alcool și tutun", // = c.checkout
    "be.c.checkout.b": "Nu ai voie să vinzi bere sau vin cuiva sub 16 ani, nici băuturi tari sau tutun cuiva sub 18: asta e legea. Nu știi sigur câți ani are un client? Cere-i actul de identitate (identiteitskaart). La tutun, cere actul oricui pare mai tânăr de 25. Nu are act sau e prea tânăr? Atunci nu vinzi și rămâi politicos / politicoasă. Regulile diferă de la o firmă la alta: întreabă-l pe șef care sunt regulile acolo unde lucrezi.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "Fără act de identitate nu am voie să vând asta.", // = c.checkout.p
    "be.c.checkout.s": "Un tânăr vrea să cumpere bere. Pare să aibă vreo 14 ani. Spune că are 16, dar nu are act de identitate la el. Ce faci?", // nieuw, nalezen
    "be.c.checkout.o1": "Îi spui că fără act nu poți să-i vinzi.", // = c.checkout.o1
    "be.c.checkout.o2": "Îi vinzi, fiindcă spune că are 16 ani.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": "Îi vinzi, dar doar o doză.", // = c.checkout.o3
    "be.c.checkout.w": "Fără act nu poți ști câți ani are. Să vinzi bere cuiva sub 16 ani e împotriva legii, iar magazinul poate primi amendă.", // nieuw, nalezen
};

export const bg: Gloss = {
    "be.w.pinnen": "плащам с карта", // nieuw, nalezen
    "be.w.bonnetje": "касовата бележка", // nieuw, nalezen
    "be.s.checkout.1": "Плащате с карта или в брой?", // nieuw, nalezen
    "be.c.checkout.q": "Мога ли да платя тук с карта?", // nieuw, nalezen
    "be.c.checkout": "Документ за алкохол и тютюн", // = c.checkout
    "be.c.checkout.b": "Не можеш да продаваш бира или вино на човек под 16 години, нито силен алкохол или тютюн на човек под 18: такъв е законът. Не знаеш на колко години е клиентът? Поискай лична карта (identiteitskaart). За тютюн искай лична карта от всеки, който изглежда по-млад от 25. Няма лична карта или е твърде млад? Тогава не продаваш и оставаш учтив / учтива. Правилата са различни във всяка фирма: питай началника си какви са правилата там, където работиш.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.p": "Без лична карта нямам право да продам това.", // = c.checkout.p
    "be.c.checkout.s": "Млад мъж иска да купи бира. Изглежда на около 14. Казва, че е на 16, но няма лична карта у себе си. Какво правиш?", // nieuw, nalezen
    "be.c.checkout.o1": "Казваш, че без документ не можеш да продадеш.", // = c.checkout.o1
    "be.c.checkout.o2": "Продаваш, защото казва, че е на 16.", // nieuw, nalezen // nagelezen AI ronde 3
    "be.c.checkout.o3": "Продаваш, но само една кутийка.", // = c.checkout.o3
    "be.c.checkout.w": "Без лична карта не можеш да знаеш на колко е. Да продадеш бира на човек под 16 е против закона, а магазинът може да получи глоба.", // nieuw, nalezen
};

export const es: Gloss = {
    "be.w.pinnen": "pagar con tarjeta", // nieuw, nalezen
    "be.w.bonnetje": "el tique", // nieuw, nalezen
    "be.s.checkout.1": "¿Paga con tarjeta o en efectivo?", // nieuw, nalezen
    "be.c.checkout.q": "¿Puedo pagar aquí con tarjeta?", // nieuw, nalezen
    "be.c.checkout": "Documento de identidad para el alcohol y el tabaco", // = c.checkout
    "be.c.checkout.b": "No puedes vender cerveza ni vino a menores de 16, ni bebidas fuertes ni tabaco a menores de 18: es la ley. ¿No sabes qué edad tiene un cliente? Pídele su documento de identidad (identiteitskaart). Para el tabaco, pide el documento a todos los que parezcan menores de 25. ¿No tiene documento, o es demasiado joven? Entonces no se lo vendes, y sigues siendo amable. Las normas cambian de una empresa a otra: pregunta a tu encargado cuáles son las normas en tu trabajo.", // nieuw, nalezen
    "be.c.checkout.p": "Sin documento de identidad no puedo vender esto.", // = c.checkout.p
    "be.c.checkout.s": "Un chico joven quiere comprar cerveza. Parece tener unos 14 años. Dice que tiene 16, pero no lleva documento. ¿Qué haces?", // nieuw, nalezen
    "be.c.checkout.o1": "Dices que sin documento no se la puedes vender.", // = c.checkout.o1
    "be.c.checkout.o2": "Vendérsela, porque dice que tiene 16.", // nieuw, nalezen
    "be.c.checkout.o3": "Se la vendes, pero solo una lata.", // = c.checkout.o3
    "be.c.checkout.w": "Sin documento no puedes saber su edad. Vender cerveza a un menor de 16 va contra la ley, y la tienda puede recibir una multa.", // nieuw, nalezen
};

export const pt: Gloss = {
    "be.w.pinnen": "pagar com cartão", // nieuw, nalezen
    "be.w.bonnetje": "o talão", // nieuw, nalezen
    "be.s.checkout.1": "Paga com cartão ou em dinheiro?", // nieuw, nalezen
    "be.c.checkout.q": "Posso pagar aqui com cartão?", // nieuw, nalezen
    "be.c.checkout": "Identificação para álcool e tabaco", // = c.checkout
    "be.c.checkout.b": "Não podes vender cerveja ou vinho a menores de 16, nem bebidas fortes ou tabaco a menores de 18: é a lei. Não tens a certeza da idade de um cliente? Pede o documento de identidade (identiteitskaart). Para o tabaco, pede o documento a todos os que pareçam ter menos de 25. Não tem documento, ou é demasiado novo? Então não vendes, e continuas educado. As regras são diferentes em cada empresa: pergunta ao teu chefe quais são as regras onde trabalhas.", // nieuw, nalezen
    "be.c.checkout.p": "Sem identificação não posso vender isto.", // = c.checkout.p
    "be.c.checkout.s": "Um rapaz quer comprar cerveja. Parece ter uns 14 anos. Diz que tem 16, mas não tem documento com ele. O que fazes?", // nieuw, nalezen
    "be.c.checkout.o1": "Dizes que não podes vender sem identificação.", // = c.checkout.o1
    "be.c.checkout.o2": "Vender, porque ele diz que tem 16.", // nieuw, nalezen
    "be.c.checkout.o3": "Vendes, mas só uma lata.", // = c.checkout.o3
    "be.c.checkout.w": "Sem documento não podes saber a idade dele. Vender cerveja a menores de 16 é contra a lei, e a loja pode levar uma multa.", // nieuw, nalezen
};

export const fr: Gloss = {
    "be.w.pinnen": "payer par carte", // nieuw, nalezen
    "be.w.bonnetje": "le ticket de caisse", // nieuw, nalezen
    "be.s.checkout.1": "Vous payez par carte ou en espèces ?", // nieuw, nalezen
    "be.c.checkout.q": "Je peux payer par carte ici ?", // nieuw, nalezen
    "be.c.checkout": "Pièce d’identité pour l’alcool et le tabac", // = c.checkout
    "be.c.checkout.b": "Tu ne peux pas vendre de bière ni de vin aux moins de 16 ans, ni d’alcool fort ni de tabac aux moins de 18 ans : c’est la loi. Tu n’es pas sûr de l’âge d’un client ? Demande sa carte d’identité (identiteitskaart). Pour le tabac, demande une pièce d’identité à tous ceux qui ont l’air d’avoir moins de 25 ans. Pas de pièce d’identité, ou trop jeune ? Alors tu ne vends pas, et tu restes poli. Les règles changent d’une entreprise à l’autre : demande à ton responsable quelles sont les règles là où tu travailles.", // nieuw, nalezen
    "be.c.checkout.p": "Sans pièce d’identité, je n’ai pas le droit de vendre ça.", // = c.checkout.p
    "be.c.checkout.s": "Un jeune homme veut acheter de la bière. Il a l’air d’avoir environ 14 ans. Il dit qu’il a 16 ans, mais il n’a pas de pièce d’identité sur lui. Que fais-tu ?", // nieuw, nalezen
    "be.c.checkout.o1": "Dis que tu ne peux pas vendre sans pièce d’identité.", // = c.checkout.o1
    "be.c.checkout.o2": "Vendre, parce qu’il dit qu’il a 16 ans.", // nieuw, nalezen
    "be.c.checkout.o3": "Vends, mais seulement une canette.", // = c.checkout.o3
    "be.c.checkout.w": "Sans pièce d’identité, tu ne peux pas connaître son âge. Vendre de la bière à un moins de 16 ans est contre la loi, et le magasin peut recevoir une amende.", // nieuw, nalezen
};

export const de: Gloss = {
    "be.w.pinnen": "mit Karte zahlen", // nieuw, nalezen
    "be.w.bonnetje": "der Kassenbon", // nieuw, nalezen
    "be.s.checkout.1": "Zahlen Sie mit Karte oder bar?", // nieuw, nalezen
    "be.c.checkout.q": "Kann ich hier mit Karte zahlen?", // nieuw, nalezen
    "be.c.checkout": "Ausweis für Alkohol und Tabak", // = c.checkout
    "be.c.checkout.b": "Du darfst kein Bier und keinen Wein an Personen unter 16 verkaufen und keine starken Getränke oder Tabak an Personen unter 18: Das ist Gesetz. Du weißt nicht sicher, wie alt ein Kunde ist? Frag nach dem Ausweis (identiteitskaart). Bei Tabak fragst du alle nach dem Ausweis, die jünger als 25 aussehen. Kein Ausweis oder zu jung? Dann verkaufst du es nicht und bleibst höflich. Die Regeln sind in jeder Firma anders: Frag deinen Vorgesetzten, welche Regeln bei dir gelten.", // nieuw, nalezen
    "be.c.checkout.p": "Ohne Ausweis darf ich das nicht verkaufen.", // = c.checkout.p
    "be.c.checkout.s": "Ein junger Mann will Bier kaufen. Er sieht aus wie etwa 14. Er sagt, er ist 16, aber er hat keinen Ausweis dabei. Was machst du?", // nieuw, nalezen
    "be.c.checkout.o1": "Sag, ohne Ausweis geht es nicht.", // = c.checkout.o1
    "be.c.checkout.o2": "Verkaufen, weil er sagt, er ist 16.", // nieuw, nalezen
    "be.c.checkout.o3": "Verkauf es, aber nur eine Dose.", // = c.checkout.o3
    "be.c.checkout.w": "Ohne Ausweis kannst du sein Alter nicht wissen. Bier an jemanden unter 16 zu verkaufen ist gegen das Gesetz, und der Laden kann eine Strafe bekommen.", // nieuw, nalezen
};
