import type { Gloss } from '../types';

// The translations of the Belgian version of u.data (src/content/taalBe/units/data.ts), one object
// per help language: the sentence about FOD Financiën and the tip about your details
// (rijksregisternummer or bisnummer, loonbrief, interim office). Gendered languages use a form
// without gender where they can (Arabic: the verbal noun; Tigrinya: the polite plural).
// Every line: // nieuw, nalezen

export const ar: Gloss = {
    'be.s.details.3': "هذه الاستمارة لـFOD Financiën (مصلحة الضرائب).", // nieuw, nalezen
    'be.c.details': "البيانات: إعطاؤها بشكل صحيح", // nieuw, nalezen
    'be.c.details.b': "في بداية العمل تُعطى البيانات: الاسم والعنوان ورقم الهاتف وتاريخ الميلاد ورقم السجل الوطني (rijksregisternummer، أو bisnummer). تهجئة الاسم ببطء، حرفاً حرفاً. بعدها فحص الاسم في العقد وفي قسيمة الراتب (loonbrief). خطأ في الاسم أو الرقم قد يسبب مشاكل في الأجر أو الضريبة. عنوان أو رقم هاتف جديد؟ إبلاغ صاحب العمل.", // nieuw, nalezen
    'be.c.details.p': "سأتهجّاه: A، L، I.", // nieuw, nalezen
    'be.c.details.s': "على الهاتف، يكتب مكتب العمل المؤقت (interimkantoor) اسم العائلة. يبدو أنهم يكتبونه خطأ. ما التصرف الصحيح؟", // nieuw, nalezen
    'be.c.details.o1': "تهجئة الاسم ببطء وطلب قراءته مرة أخرى.", // nieuw, nalezen
    'be.c.details.o2': "السكوت: خطأ صغير في الاسم لا يهم.", // nieuw, nalezen
    'be.c.details.o3': "إنهاء المكالمة، والأمل أن يجدوا الخطأ لاحقاً.", // nieuw, nalezen
    'be.c.details.w': "يجب أن يكون الاسم نفسه في العقد وقسيمة الراتب (loonbrief) وبطاقة الهوية أو الإقامة. عندها يكون الأجر والضريبة صحيحين. التهجئة وسماع الاسم مرة أخرى فحص سريع.", // nieuw, nalezen
};

export const ti: Gloss = {
    'be.s.details.3': "እዚ ቅጥዒ ንFOD Financiën (ቤት ጽሕፈት ግብሪ) እዩ።", // nieuw, nalezen
    'be.c.details': "ሓበሬታኹም ብቕኑዕ ሃቡ", // nieuw, nalezen
    'be.c.details.b': "ኣብ መጀመርታ ስራሕ ሓበሬታኹም ትህቡ፡ ስም፡ ኣድራሻ፡ ቁጽሪ ተሌፎን፡ ዕለት ልደትን ቁጽሪ ሃገራዊ መዝገብን (rijksregisternummer ወይ bisnummer)። ስምኩም ቀስ ኢልኩም ፊደል ብፊደል በሉ። ድሕሪኡ ስምኩም ኣብ ውዕልኩምን ኣብ loonbriefኹምን ተቖጻጸሩ። ኣብ ስም ወይ ቁጽሪ ዘሎ ጌጋ ኣብ ደሞዝ ወይ ግብሪ ጸገም ክፈጥር ይኽእል። ሓድሽ ኣድራሻ ወይ ቁጽሪ ተሌፎን? ንኣስራሒኹም ንገሩ።", // nieuw, nalezen
    'be.c.details.p': "ብፊደል ክብሎ፡ A, L, I።", // nieuw, nalezen
    'be.c.details.s': "ብተሌፎን interimkantoor ስም ስድራኹም ይጽሕፎ። ብጌጋ ከም ዝጽሕፍዎ ትሰምዑ። እንታይ ትገብሩ?", // nieuw, nalezen
    'be.c.details.o1': "ስምኩም ቀስ ኢልኩም ፊደል ብፊደል በልዎ፡ ደጊሞም ከንብብዎ ሕተትዎም።", // nieuw, nalezen
    'be.c.details.o2': "ገለ ኣይትበሉ፡ ኣብ ስምኩም ዘሎ ንእሽቶ ጌጋ ጸገም የብሉን።", // nieuw, nalezen
    'be.c.details.o3': "ስልኪ ዕጸዉ፡ ነቲ ጌጋ ደሓር ክረኽብዎ ድማ ተስፋ ግበሩ።", // nieuw, nalezen
    'be.c.details.w': 'ስምኩም ኣብ ውዕልኩም፡ ኣብ loonbriefኹምን ኣብ መንነት ወረቐትኩም ወይ ወረቐት መንበሪኹምን ሓደ ዓይነት ክኸውን ኣለዎ። ሽዑ ደሞዝኩምን ግብርኹምን ብቕኑዕ ይኸዱ። ብፊደል ምባልን ደጊምካ ምስማዕን ቅልጡፍ መረጋገጺ እዩ።', // nieuw, nalezen // nagelezen AI ronde 3
};

export const fa: Gloss = {
    'be.s.details.3': "این فرم برای FOD Financiën (ادارهٔ مالیات) است.", // nieuw, nalezen
    'be.c.details': "اطلاعاتت را درست بده", // nieuw, nalezen
    'be.c.details.b': "در شروع کار، اطلاعاتت را می‌دهی: نام، نشانی، شمارهٔ تلفن، تاریخ تولد و شمارهٔ ثبت ملی (rijksregisternummer، یا bisnummer). نامت را آهسته، حرف به حرف، هجی کن. بعد نامت را در قرارداد و در فیش حقوقی (loonbrief) چک کن. اشتباه در نام یا شماره می‌تواند برای حقوق یا مالیاتت دردسر درست کند. نشانی یا شمارهٔ تلفن تازه؟ به کارفرما بگو.", // nieuw, nalezen
    'be.c.details.p': "هجی‌اش می‌کنم: A، L، I.", // nieuw, nalezen
    'be.c.details.s': "پشت تلفن، دفتر کاریابی موقت (interimkantoor) نام خانوادگی‌ات را می‌نویسد. می‌شنوی که آن را اشتباه می‌نویسند. چه کار می‌کنی؟", // nieuw, nalezen
    'be.c.details.o1': "نامت را آهسته هجی کن و بخواه آن را دوباره بخوانند.", // nieuw, nalezen
    'be.c.details.o2': "چیزی نگو: یک اشتباه کوچک در نامت مهم نیست.", // nieuw, nalezen
    'be.c.details.o3': "تلفن را قطع کن و امیدوار باش بعداً اشتباه را پیدا کنند.", // nieuw, nalezen
    'be.c.details.w': "نامت باید در قرارداد، فیش حقوقی (loonbrief) و کارت شناسایی یا کارت اقامتت یکی باشد. آن‌وقت حقوق و مالیاتت درست می‌شود. هجی کردن و دوباره شنیدن یک بررسی سریع است.", // nieuw, nalezen
};

export const prs: Gloss = {
    'be.s.details.3': "این فورم برای FOD Financiën (ادارهٔ مالیه) است.", // nieuw, nalezen
    'be.c.details': "معلومات خود را درست بدهید", // nieuw, nalezen
    'be.c.details.b': "در شروع کار، معلومات خود را می‌دهید: نام، آدرس، نمبر تیلفون، تاریخ تولد و نمبر ثبت ملی (rijksregisternummer، یا bisnummer). نام خود را آهسته، حرف به حرف، هجی کنید. بعد نام خود را در قرارداد و در ورق معاش (loonbrief) چک کنید. اشتباه در نام یا نمبر می‌تواند برای معاش یا مالیهٔ شما مشکل بسازد. آدرس یا نمبر تیلفون نو؟ به کارفرما بگویید.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.p': "هجی‌اش می‌کنم: A، L، I.", // nieuw, nalezen
    'be.c.details.s': "پشت تیلفون، دفتر کاریابی موقت (interimkantoor) تخلص شما را می‌نویسد. می‌شنوید که آن را غلط می‌نویسند. چه می‌کنید؟", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o1': "نام خود را آهسته هجی کنید و بخواهید آن را دوباره بخوانند.", // nieuw, nalezen
    'be.c.details.o2': "چیزی نگویید: یک اشتباه کوچک در نام تان مهم نیست.", // nieuw, nalezen
    'be.c.details.o3': "تیلفون را قطع کنید و امیدوار باشید بعداً اشتباه را پیدا کنند.", // nieuw, nalezen
    'be.c.details.w': "نام شما باید در قرارداد، ورق معاش (loonbrief) و کارت هویت یا کارت اقامت تان یکی باشد. آن وقت معاش و مالیهٔ شما درست می‌شود. هجی کردن و دوباره شنیدن یک بررسی سریع است.", // nieuw, nalezen // nagelezen AI ronde 3
};

export const uk: Gloss = {
    'be.s.details.3': "Ця форма для FOD Financiën (податкової служби).", // nieuw, nalezen
    'be.c.details': "Твої дані: подавай їх правильно", // nieuw, nalezen
    'be.c.details.b': "На початку роботи ти даєш свої дані: ім’я, адресу, номер телефону, дату народження і номер національного реєстру (rijksregisternummer, або bisnummer). Повільно назви своє ім’я по літерах. Потім перевір своє ім’я в договорі й у розрахунковому листі (loonbrief). Помилка в імені чи номері може створити проблеми із зарплатою чи податком. Нова адреса чи новий номер телефону? Скажи роботодавцю.", // nieuw, nalezen
    'be.c.details.p': "Я скажу по літерах: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "По телефону агентство (interimkantoor) записує твоє прізвище. Ти чуєш, що вони пишуть його неправильно. Що ти зробиш?", // nieuw, nalezen
    'be.c.details.o1': "Повільно назвеш прізвище по літерах і попросиш прочитати його назад.", // nieuw, nalezen
    'be.c.details.o2': "Нічого не скажеш: маленька помилка в імені не важлива.", // nieuw, nalezen
    'be.c.details.o3': "Покладеш слухавку й сподіватимешся, що помилку знайдуть пізніше.", // nieuw, nalezen
    'be.c.details.w': "Твоє ім’я має бути однаковим у договорі, у розрахунковому листі (loonbrief) і на посвідченні особи чи посвідці на проживання. Тоді зарплата й податок будуть правильні. Назвати по літерах і почути ще раз — це швидка перевірка.", // nieuw, nalezen
};

export const tr: Gloss = {
    'be.s.details.3': "Bu form FOD Financiën (vergi dairesi) için.", // nieuw, nalezen
    'be.c.details': "Bilgilerini doğru ver", // nieuw, nalezen
    'be.c.details.b': "İşe başlarken bilgilerini verirsin: adın, adresin, telefon numaran, doğum tarihin ve ulusal sicil numaran (rijksregisternummer ya da bisnummer). Adını yavaşça, harf harf söyle. Sonra adını sözleşmende ve maaş bordronda (loonbrief) kontrol et. Adında ya da numarada bir hata maaşında veya vergide sorun çıkarabilir. Yeni adres ya da telefon numarası mı? İşverenine söyle.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.p': "Harf harf söyleyeyim: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Telefonda geçici iş ajansı (interimkantoor) soyadını yazıyor. Yanlış yazdıklarını duyuyorsun. Ne yaparsın?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o1': "Adını yavaşça harf harf söyler, geri okumalarını istersin.", // nieuw, nalezen
    'be.c.details.o2': "Hiçbir şey demezsin: adında küçük bir hata önemli değil.", // nieuw, nalezen
    'be.c.details.o3': "Telefonu kapatır, hatayı sonra bulmalarını umarsın.", // nieuw, nalezen
    'be.c.details.w': "Adın sözleşmende, maaş bordronda (loonbrief) ve kimlik kartında ya da oturma kartında aynı olmalı. O zaman maaşın ve vergin doğru olur. Harf harf söylemek ve geri dinlemek hızlı bir kontroldür.", // nieuw, nalezen
};

export const pl: Gloss = {
    'be.s.details.3': "Ten formularz jest dla FOD Financiën (urzędu skarbowego).", // nieuw, nalezen
    'be.c.details': "Twoje dane: podawaj je dobrze", // nieuw, nalezen
    'be.c.details.b': "Na początku pracy podajesz swoje dane: imię i nazwisko, adres, numer telefonu, datę urodzenia i numer rejestru krajowego (rijksregisternummer albo bisnummer). Przeliteruj nazwisko powoli, litera po literze. Potem sprawdź swoje nazwisko w umowie i na pasku wypłaty (loonbrief). Błąd w nazwisku albo numerze może dać problemy z wypłatą lub podatkiem. Nowy adres albo numer telefonu? Powiedz pracodawcy.", // nieuw, nalezen
    'be.c.details.p': "Przeliteruję: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Przez telefon agencja pracy tymczasowej (interimkantoor) zapisuje twoje nazwisko. Słyszysz, że piszą je źle. Co robisz?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o1': "Literujesz nazwisko powoli i prosisz, żeby ci je odczytali.", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o2': "Nic nie mówisz: mały błąd w nazwisku nie ma znaczenia.", // nieuw, nalezen
    'be.c.details.o3': "Rozłączasz się i liczysz, że znajdą błąd później.", // nieuw, nalezen
    'be.c.details.w': "Twoje nazwisko musi być takie samo w umowie, na pasku wypłaty (loonbrief) i na dowodzie osobistym albo karcie pobytu. Wtedy wypłata i podatek się zgadzają. Przeliterowanie i prośba o odczytanie to szybka kontrola.", // nieuw, nalezen // nagelezen AI ronde 3
};

export const ro: Gloss = {
    'be.s.details.3': "Acest formular e pentru FOD Financiën (fiscul).", // nieuw, nalezen
    'be.c.details': "Datele tale: dă-le corect", // nieuw, nalezen
    'be.c.details.b': "La începutul unui loc de muncă îți dai datele: numele, adresa, numărul de telefon, data nașterii și numărul de registru național (rijksregisternummer sau bisnummer). Spune-ți numele încet, literă cu literă. Apoi verifică-ți numele în contract și pe fluturașul de salariu (loonbrief). O greșeală în nume sau în număr poate face probleme cu salariul sau impozitul. Adresă sau număr de telefon nou? Spune-i angajatorului.", // nieuw, nalezen
    'be.c.details.p': "Îl spun pe litere: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "La telefon, agenția de muncă temporară (interimkantoor) îți notează numele de familie. Auzi că îl scriu greșit. Ce faci?", // nieuw, nalezen
    'be.c.details.o1': "Îți spui numele încet, pe litere, și le ceri să ți-l citească.", // nieuw, nalezen
    'be.c.details.o2': "Nu spui nimic: o mică greșeală în nume nu contează.", // nieuw, nalezen
    'be.c.details.o3': "Închizi și speri că vor găsi greșeala mai târziu.", // nieuw, nalezen
    'be.c.details.w': "Numele tău trebuie să fie la fel în contract, pe fluturașul de salariu (loonbrief) și pe cartea de identitate sau de rezidență. Atunci salariul și impozitul ies corect. Să spui pe litere și să auzi din nou e o verificare rapidă.", // nieuw, nalezen
};

export const bg: Gloss = {
    'be.s.details.3': "Този формуляр е за FOD Financiën (данъчната служба).", // nieuw, nalezen
    'be.c.details': "Данните ти: давай ги правилно", // nieuw, nalezen
    'be.c.details.b': "В началото на работата даваш данните си: име, адрес, телефонен номер, дата на раждане и номер в националния регистър (rijksregisternummer или bisnummer). Кажи името си бавно, буква по буква. После провери името си в договора и във фиша за заплата (loonbrief). Грешка в името или в номера може да създаде проблеми със заплатата или данъка. Нов адрес или телефонен номер? Кажи на работодателя.", // nieuw, nalezen
    'be.c.details.p': "Ще го кажа по букви: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "По телефона агенцията за временна работа (interimkantoor) записва фамилията ти. Чуваш, че я пишат грешно. Какво правиш?", // nieuw, nalezen
    'be.c.details.o1': "Казваш фамилията бавно по букви и молиш да ти я прочетат.", // nieuw, nalezen
    'be.c.details.o2': "Не казваш нищо: малка грешка в името няма значение.", // nieuw, nalezen
    'be.c.details.o3': "Затваряш и се надяваш, че ще намерят грешката по-късно.", // nieuw, nalezen
    'be.c.details.w': "Името ти трябва да е еднакво в договора, във фиша за заплата (loonbrief) и в личната карта или картата за пребиваване. Тогава заплатата и данъкът са верни. Да кажеш по букви и да чуеш отново е бърза проверка.", // nieuw, nalezen
};

export const es: Gloss = {
    'be.s.details.3': "Este formulario es para FOD Financiën (Hacienda).", // nieuw, nalezen
    'be.c.details': "Tus datos: dalos bien", // nieuw, nalezen
    'be.c.details.b': "Al empezar un trabajo, das tus datos: tu nombre, tu dirección, tu teléfono, tu fecha de nacimiento y tu número del registro nacional (rijksregisternummer, o bisnummer). Deletrea tu nombre despacio, letra a letra. Después revisa tu nombre en el contrato y en la nómina (loonbrief). Un error en tu nombre o en tu número puede dar problemas con el sueldo o los impuestos. ¿Dirección o teléfono nuevos? Díselo a tu empresa.", // nieuw, nalezen
    'be.c.details.p': "Te lo deletreo: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Por teléfono, la agencia de trabajo temporal (interimkantoor) apunta tu apellido. Oyes que lo escriben mal. ¿Qué haces?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o1': "Deletreas tu apellido despacio y pides que te lo lean.", // nieuw, nalezen
    'be.c.details.o2': "No dices nada: un pequeño error en tu nombre no importa.", // nieuw, nalezen
    'be.c.details.o3': "Cuelgas, y esperas que encuentren el error más tarde.", // nieuw, nalezen
    'be.c.details.w': "Tu nombre tiene que ser igual en el contrato, en la nómina (loonbrief) y en tu carné de identidad o tarjeta de residencia. Así el sueldo y los impuestos salen bien. Deletrear y oírlo otra vez es una comprobación rápida.", // nieuw, nalezen
};

export const pt: Gloss = {
    'be.s.details.3': "Este formulário é para FOD Financiën (as Finanças).", // nieuw, nalezen
    'be.c.details': "Os teus dados: dá-os bem", // nieuw, nalezen
    'be.c.details.b': "No início de um trabalho, dás os teus dados: o nome, a morada, o telefone, a data de nascimento e o número do registo nacional (rijksregisternummer, ou bisnummer). Soletra o teu nome devagar, letra a letra. Depois verifica o teu nome no contrato e no recibo de vencimento (loonbrief). Um erro no nome ou no número pode dar problemas com o salário ou os impostos. Morada ou telefone novo? Diz ao teu empregador.", // nieuw, nalezen
    'be.c.details.p': "Vou soletrar: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Ao telefone, a agência de trabalho temporário (interimkantoor) escreve o teu apelido. Ouves que o escrevem mal. O que fazes?", // nieuw, nalezen
    'be.c.details.o1': "Soletras o apelido devagar e pedes que o leiam de volta.", // nieuw, nalezen
    'be.c.details.o2': "Não dizes nada: um pequeno erro no nome não importa.", // nieuw, nalezen
    'be.c.details.o3': "Desligas, e esperas que encontrem o erro mais tarde.", // nieuw, nalezen
    'be.c.details.w': "O teu nome tem de ser igual no contrato, no recibo de vencimento (loonbrief) e no cartão de identidade ou de residência. Assim o salário e os impostos ficam certos. Soletrar e ouvir de novo é uma verificação rápida.", // nieuw, nalezen
};

export const fr: Gloss = {
    'be.s.details.3': "Ce formulaire est pour le SPF Finances (FOD Financiën).", // nieuw, nalezen
    'be.c.details': "Tes données : donne-les correctement", // nieuw, nalezen
    'be.c.details.b': "Au début d’un travail, tu donnes tes données : ton nom, ton adresse, ton numéro de téléphone, ta date de naissance et ton numéro de registre national (rijksregisternummer, ou numéro bis : bisnummer). Épelle ton nom lentement, lettre par lettre. Ensuite, vérifie ton nom sur ton contrat et sur ta fiche de paie (loonbrief). Une erreur dans ton nom ou ton numéro peut créer des problèmes pour ton salaire ou tes impôts. Nouvelle adresse ou nouveau numéro de téléphone ? Dis-le à ton employeur.", // nieuw, nalezen
    'be.c.details.p': "Je l’épelle : A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Au téléphone, l’agence d’intérim (interimkantoor) note ton nom de famille. Tu entends qu’ils l’écrivent mal. Qu’est-ce que tu fais ?", // nieuw, nalezen
    'be.c.details.o1': "Tu épelles ton nom lentement et tu demandes de le relire.", // nieuw, nalezen
    'be.c.details.o2': "Tu ne dis rien : une petite erreur dans ton nom, ce n’est pas grave.", // nieuw, nalezen
    'be.c.details.o3': "Tu raccroches, en espérant qu’ils trouvent l’erreur plus tard.", // nieuw, nalezen
    'be.c.details.w': "Ton nom doit être le même sur ton contrat, ta fiche de paie (loonbrief) et ta carte d’identité ou ta carte de séjour. Alors ton salaire et tes impôts sont justes. Épeler et réentendre, c’est une vérification rapide.", // nieuw, nalezen
};

export const de: Gloss = {
    'be.s.details.3': "Dieses Formular ist für FOD Financiën (das Finanzamt).", // nieuw, nalezen
    'be.c.details': "Deine Daten: Gib sie richtig an", // nieuw, nalezen
    'be.c.details.b': "Am Anfang eines Jobs gibst du deine Daten an: deinen Namen, deine Adresse, deine Telefonnummer, dein Geburtsdatum und deine Nationalregisternummer (rijksregisternummer, oder bisnummer). Buchstabier deinen Namen langsam, Buchstabe für Buchstabe. Prüf danach deinen Namen in deinem Vertrag und auf deiner Lohnabrechnung (loonbrief). Ein Fehler im Namen oder in der Nummer kann Probleme mit deinem Lohn oder der Steuer machen. Neue Adresse oder Telefonnummer? Sag es deinem Arbeitgeber.", // nieuw, nalezen
    'be.c.details.p': "Ich buchstabiere es: A, L, I.", // nieuw, nalezen
    'be.c.details.s': "Am Telefon schreibt die Zeitarbeitsfirma (interimkantoor) deinen Nachnamen auf. Du hörst, dass sie ihn falsch schreiben. Was machst du?", // nieuw, nalezen // nagelezen AI ronde 3
    'be.c.details.o1': "Du buchstabierst deinen Namen langsam und lässt ihn vorlesen.", // nieuw, nalezen
    'be.c.details.o2': "Du sagst nichts: Ein kleiner Fehler im Namen ist egal.", // nieuw, nalezen
    'be.c.details.o3': "Du legst auf und hoffst, dass sie den Fehler später finden.", // nieuw, nalezen
    'be.c.details.w': "Dein Name muss auf deinem Vertrag, deiner Lohnabrechnung (loonbrief) und deinem Ausweis oder deiner Aufenthaltskarte gleich sein. Dann stimmen dein Lohn und deine Steuer. Buchstabieren und noch einmal hören ist ein schneller Check.", // nieuw, nalezen
};
