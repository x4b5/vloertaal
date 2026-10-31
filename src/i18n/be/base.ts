import type { CultureTranslation } from '../culture/types';

/**
 * The shared texts of the Belgian language track (docs/taal-belgie.md), one object per help
 * language (each pack takes only its own: src/i18n/be/<lang>.ts):
 *  - ui: the line "Dit gaat over Nederland. In België is het anders." (beNlOnly), the beta line
 *    (beTaalBeta) and the Belgian lines of "Problems at work? Who can help" (who…Be);
 *  - gloss: the theme name "Leven in België" (be.theme.life) and the closing lines of the tips:
 *    the Dutch one as this language writes it (be.closing.*.nl, .nl2 where a few tips say it
 *    another way) and the Belgian one that takes its place (src/lib/tipText.ts).
 * All new: // nieuw, nalezen.
 */

export const ar: CultureTranslation = {
  ui: {
    beNlOnly: 'هذا عن هولندا. في بلجيكا الأمر مختلف.', // nieuw, nalezen
    beTaalBeta: 'الدروس البلجيكية جديدة، ولم يراجعها خبير بعد.', // nieuw, nalezen
    whoLegalBe: 'استشارة أولى مجانية من محامٍ حول العقد أو الأجر أو الفصل من العمل.', // nieuw, nalezen
    whoInspectionBe: 'للإبلاغ عن أجر قليل جداً أو عمل بدون عقد.', // nieuw, nalezen
    whoExploitBe: 'عند الاستغلال في العمل، أو الشك في ذلك.', // nieuw, nalezen
    whoUnionBe: 'مساعدة في الأجر أو العقد أو عند انتهاء العمل. الأعضاء يحصلون على مساعدة أكثر.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'الحياة في بلجيكا', // nieuw, nalezen
    'be.closing.advice': 'معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو justitiehuis (استشارة قانونية مجانية).', // nieuw, nalezen
    'be.closing.abuse': 'معلومات عامة. لوضعك أنت: اسأل النقابة أو justitiehuis (استشارة قانونية مجانية) أو Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'معلومات عامة. لوضعك أنت: اسأل صاحب العمل أو النقابة أو Juridisch Loket.',
    'be.closing.advice.nl2': 'معلومات عامة. للوضع الشخصي: السؤال عند صاحب العمل أو النقابة أو Juridisch Loket.',
    'be.closing.abuse.nl': 'معلومات عامة. لوضعك أنت: اسأل النقابة أو Juridisch Loket أو FairWork.',
  },
};

export const ti: CultureTranslation = {
  ui: {
    beNlOnly: 'እዚ ብዛዕባ ሆላንድ እዩ። ኣብ ቤልጅዩም ካልእ እዩ።', // nieuw, nalezen
    beTaalBeta: 'እቶም ናይ ቤልጅዩም ትምህርትታት ሓደሽቲ እዮም፡ ገና ብክኢላ ኣይተፈተሹን።', // nieuw, nalezen
    whoLegalBe: 'ብዛዕባ ውዕል፡ ደሞዝ ወይ ካብ ስራሕ ምስጓግ ካብ ጠበቓ ናይ መጀመርታ ምኽሪ ብናጻ።', // nieuw, nalezen
    whoInspectionBe: 'ዝወሓደ ደሞዝ ወይ ብዘይ ውዕል ምስራሕ ንምሕባር።', // nieuw, nalezen
    whoExploitBe: 'ኣብ ስራሕ ምዝመዛ ምስ ዘሎ፡ ወይ ጥርጣረ ምስ ዘሎ።', // nieuw, nalezen
    whoUnionBe: 'ሓገዝ ብዛዕባ ደሞዝ፡ ውዕል ወይ ስራሕ ምስ ዝውዳእ። ኣባላት ዝያዳ ሓገዝ ይረኽቡ።', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'ህይወት ኣብ ቤልጅዩም', // nieuw, nalezen
    'be.closing.advice': { m: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተት።', f: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኪ፡ ንኣስራሒኺ፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቲ።', x: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ሕተቱ።' }, // nieuw, nalezen
    'be.closing.abuse': { m: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ወይ ንPayoke ሕተት።', f: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኪ፡ ንማሕበር ሰራሕተኛታት፡ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ወይ ንPayoke ሕተቲ።', x: 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንማሕበር ሰራሕተኛታት፡ ንjustitiehuis (ናጻ ሕጋዊ ምኽሪ) ወይ ንPayoke ሕተቱ።' }, // nieuw, nalezen
    'be.closing.advice.nl': 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትካ፡ ንኣስራሒኻ፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተት።',
    'be.closing.advice.nl2': 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትኩም፡ ንኣስራሒኹም፡ ንማሕበር ሰራሕተኛታት ወይ ንJuridisch Loket ሕተቱ።',
    'be.closing.abuse.nl': 'ሓፈሻዊ ሓበሬታ እዩ። ንኹነታትካ፡ ንማሕበር ሰራሕተኛታት፡ ንJuridisch Loket ወይ ንFairWork ሕተት።',
  },
};

export const fa: CultureTranslation = {
  ui: {
    beNlOnly: 'این دربارهٔ هلند است. در بلژیک فرق دارد.', // nieuw, nalezen
    beTaalBeta: 'درس‌های بلژیکی تازه هستند و هنوز یک متخصص آن‌ها را بررسی نکرده است.', // nieuw, nalezen
    whoLegalBe: 'اولین مشاورهٔ رایگان با وکیل دربارهٔ قرارداد، حقوق یا اخراج.', // nieuw, nalezen
    whoInspectionBe: 'گزارش حقوق خیلی کم یا کار بدون قرارداد.', // nieuw, nalezen
    whoExploitBe: 'در کار از شما سوءاستفاده می‌شود، یا فکر می‌کنید این‌طور است.', // nieuw, nalezen
    whoUnionBe: 'کمک دربارهٔ حقوق، قرارداد یا وقتی کارتان تمام می‌شود. اعضا کمک بیشتری می‌گیرند.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'زندگی در بلژیک', // nieuw, nalezen
    'be.closing.advice': 'اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشاورهٔ حقوقی رایگان) بپرس.', // nieuw, nalezen
    'be.closing.abuse': 'اطلاعات کلی. برای وضعیت خودت: از اتحادیهٔ کارگری، justitiehuis (مشاورهٔ حقوقی رایگان) یا Payoke بپرس.', // nieuw, nalezen
    'be.closing.advice.nl': 'اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا Juridisch Loket بپرس.',
    'be.closing.advice.nl2': 'اطلاعات کلی. برای وضعیت خودت: از کارفرما، اتحادیهٔ کارگری یا Juridisch Loket بپرس.',
    'be.closing.abuse.nl': 'اطلاعات کلی. برای وضعیت خودت: از اتحادیهٔ کارگری، Juridisch Loket یا FairWork بپرس.',
  },
};

export const prs: CultureTranslation = {
  ui: {
    beNlOnly: 'این دربارهٔ هالند است. در بلجیم فرق دارد.', // nieuw, nalezen
    beTaalBeta: 'درس‌های بلجیمی تازه هستند و هنوز یک متخصص آن‌ها را بررسی نکرده است.', // nieuw, nalezen
    whoLegalBe: 'اولین مشورهٔ رایگان با وکیل دربارهٔ قرارداد، معاش یا برطرفی.', // nieuw, nalezen
    whoInspectionBe: 'گزارش معاش خیلی کم یا کار بدون قرارداد.', // nieuw, nalezen
    whoExploitBe: 'در کار از شما سوءاستفاده می‌شود، یا فکر می‌کنید که این‌طور است.', // nieuw, nalezen
    whoUnionBe: 'کمک دربارهٔ معاش، قرارداد یا وقتی کار تان ختم می‌شود. اعضا کمک بیشتر می‌گیرند.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'زندگی در بلجیم', // nieuw, nalezen
    'be.closing.advice': 'معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا justitiehuis (مشورهٔ حقوقی رایگان) بپرسید.', // nieuw, nalezen
    'be.closing.abuse': 'معلومات عمومی. برای وضعیت خود تان: از اتحادیهٔ کارگری، justitiehuis (مشورهٔ حقوقی رایگان) یا Payoke بپرسید.', // nieuw, nalezen
    'be.closing.advice.nl': 'معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا Juridisch Loket بپرسید.',
    'be.closing.advice.nl2': 'معلومات عمومی. برای وضعیت خود تان: از کارفرما، اتحادیهٔ کارگری یا Juridisch Loket بپرسید.',
    'be.closing.abuse.nl': 'معلومات عمومی. برای وضعیت خود تان: از اتحادیهٔ کارگری، Juridisch Loket یا FairWork بپرسید.',
  },
};

export const uk: CultureTranslation = {
  ui: {
    beNlOnly: 'Це про Нідерланди. У Бельгії інакше.', // nieuw, nalezen
    beTaalBeta: 'Бельгійські уроки нові, і експерт їх ще не перевірив.', // nieuw, nalezen
    whoLegalBe: 'Перша безкоштовна порада адвоката щодо контракту, зарплати чи звільнення.', // nieuw, nalezen
    whoInspectionBe: 'Повідом про замалу зарплату чи роботу без контракту.', // nieuw, nalezen
    whoExploitBe: 'Тебе експлуатують на роботі, або ти так думаєш.', // nieuw, nalezen
    whoUnionBe: 'Допомога щодо зарплати, контракту або коли робота закінчується. Члени отримують більше допомоги.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Життя в Бельгії', // nieuw, nalezen
    'be.closing.advice': 'Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або justitiehuis (безкоштовна юридична порада).', // nieuw, nalezen
    'be.closing.abuse': 'Це загальна інформація. Щодо твоєї ситуації запитай профспілку, justitiehuis (безкоштовна юридична порада) або Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або Juridisch Loket.',
    'be.closing.advice.nl2': 'Це загальна інформація. Щодо твоєї ситуації запитай роботодавця, профспілку або Juridisch Loket.',
    'be.closing.abuse.nl': 'Це загальна інформація. Щодо твоєї ситуації запитай профспілку, Juridisch Loket або FairWork.',
  },
};

export const tr: CultureTranslation = {
  ui: {
    beNlOnly: 'Bu Hollanda ile ilgili. Belçika’da durum farklı.', // nieuw, nalezen
    beTaalBeta: 'Belçika dersleri yeni ve henüz bir uzman tarafından kontrol edilmedi.', // nieuw, nalezen
    whoLegalBe: 'Sözleşmen, maaşın veya işten çıkarılman hakkında bir avukattan ücretsiz ilk danışmanlık.', // nieuw, nalezen
    whoInspectionBe: 'Çok düşük maaşı veya sözleşmesiz çalışmayı bildir.', // nieuw, nalezen
    whoExploitBe: 'İşte sömürülüyorsun ya da öyle düşünüyorsun.', // nieuw, nalezen
    whoUnionBe: 'Maaşın, sözleşmen konusunda veya işin bittiğinde yardım. Üyeler daha çok yardım alır.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Belçika’da yaşam', // nieuw, nalezen
    'be.closing.advice': 'Genel bilgi. Kendi durumun için işverenine, sendikaya veya justitiehuis’e (ücretsiz hukuki danışmanlık) sor.', // nieuw, nalezen
    'be.closing.abuse': 'Genel bilgi. Kendi durumun için sendikaya, justitiehuis’e (ücretsiz hukuki danışmanlık) veya Payoke’ye sor.', // nieuw, nalezen
    'be.closing.advice.nl': 'Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'be.closing.advice.nl2': 'Genel bilgi. Kendi durumun için işverenine, sendikaya veya Juridisch Loket’e sor.',
    'be.closing.abuse.nl': 'Genel bilgi. Kendi durumun için sendikaya, Juridisch Loket’e veya FairWork’e sor.',
  },
};

export const pl: CultureTranslation = {
  ui: {
    beNlOnly: 'To dotyczy Holandii. W Belgii jest inaczej.', // nieuw, nalezen
    beTaalBeta: 'Belgijskie lekcje są nowe i ekspert jeszcze ich nie sprawdził.', // nieuw, nalezen
    whoLegalBe: 'Pierwsza bezpłatna porada adwokata w sprawie umowy, wynagrodzenia lub zwolnienia.', // nieuw, nalezen
    whoInspectionBe: 'Zgłoś za niską pensję albo pracę bez umowy.', // nieuw, nalezen
    whoExploitBe: 'Ktoś cię wyzyskuje w pracy albo tak myślisz.', // nieuw, nalezen
    whoUnionBe: 'Pomoc w sprawie wynagrodzenia, umowy albo gdy praca się kończy. Członkowie dostają więcej pomocy.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Życie w Belgii', // nieuw, nalezen
    'be.closing.advice': 'To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo justitiehuis (bezpłatna porada prawna).', // nieuw, nalezen
    'be.closing.abuse': 'To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, justitiehuis (bezpłatna porada prawna) albo Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'be.closing.advice.nl2': 'To ogólne informacje. W twojej sytuacji zapytaj pracodawcę, związek zawodowy albo Juridisch Loket.',
    'be.closing.abuse.nl': 'To ogólne informacje. W twojej sytuacji zapytaj związek zawodowy, Juridisch Loket albo FairWork.',
  },
};

export const ro: CultureTranslation = {
  ui: {
    beNlOnly: 'Aici e vorba despre Olanda. În Belgia este altfel.', // nieuw, nalezen
    beTaalBeta: 'Lecțiile belgiene sunt noi și încă nu au fost verificate de un expert.', // nieuw, nalezen
    whoLegalBe: 'Un prim sfat gratuit de la un avocat despre contract, salariu sau concediere.', // nieuw, nalezen
    whoInspectionBe: 'Raportează salariul prea mic sau munca fără contract.', // nieuw, nalezen
    whoExploitBe: 'Cineva te exploatează la muncă, sau crezi că așa e.', // nieuw, nalezen
    whoUnionBe: 'Ajutor cu salariul, contractul sau când munca se termină. Membrii primesc mai mult ajutor.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Viața în Belgia', // nieuw, nalezen
    'be.closing.advice': 'Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau justitiehuis (sfat juridic gratuit).', // nieuw, nalezen
    'be.closing.abuse': 'Informații generale. Pentru situația ta: întreabă sindicatul, justitiehuis (sfat juridic gratuit) sau Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'be.closing.advice.nl2': 'Informații generale. Pentru situația ta: întreabă angajatorul, sindicatul sau Juridisch Loket.',
    'be.closing.abuse.nl': 'Informații generale. Pentru situația ta: întreabă sindicatul, Juridisch Loket sau FairWork.',
  },
};

export const bg: CultureTranslation = {
  ui: {
    beNlOnly: 'Това е за Нидерландия. В Белгия е различно.', // nieuw, nalezen
    beTaalBeta: 'Белгийските уроци са нови и още не са проверени от експерт.', // nieuw, nalezen
    whoLegalBe: 'Първи безплатен съвет от адвокат за договора, заплатата или уволнението.', // nieuw, nalezen
    whoInspectionBe: 'Съобщи за твърде ниска заплата или работа без договор.', // nieuw, nalezen
    whoExploitBe: 'Някой те експлоатира на работа, или мислиш, че е така.', // nieuw, nalezen
    whoUnionBe: 'Помощ за заплатата, договора или когато работата свършва. Членовете получават повече помощ.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Живот в Белгия', // nieuw, nalezen
    'be.closing.advice': 'Това е обща информация. За твоя случай питай работодателя, синдиката или justitiehuis (безплатен правен съвет).', // nieuw, nalezen
    'be.closing.abuse': 'Това е обща информация. За твоя случай питай синдиката, justitiehuis (безплатен правен съвет) или Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Това е обща информация. За твоя случай питай работодателя, синдиката или Juridisch Loket.',
    'be.closing.advice.nl2': 'Това е обща информация. За твоя случай питай работодателя, синдиката или Juridisch Loket.',
    'be.closing.abuse.nl': 'Това е обща информация. За твоя случай питай синдиката, Juridisch Loket или FairWork.',
  },
};

export const es: CultureTranslation = {
  ui: {
    beNlOnly: 'Esto trata de los Países Bajos. En Bélgica es diferente.', // nieuw, nalezen
    beTaalBeta: 'Las lecciones belgas son nuevas y un experto todavía no las ha revisado.', // nieuw, nalezen
    whoLegalBe: 'Un primer consejo gratis de un abogado sobre tu contrato, tu sueldo o un despido.', // nieuw, nalezen
    whoInspectionBe: 'Denuncia un sueldo demasiado bajo o un trabajo sin contrato.', // nieuw, nalezen
    whoExploitBe: 'Te explotan en el trabajo, o crees que te explotan.', // nieuw, nalezen
    whoUnionBe: 'Ayuda con tu sueldo, tu contrato o cuando termina tu trabajo. Los miembros reciben más ayuda.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Vivir en Bélgica', // nieuw, nalezen
    'be.closing.advice': 'Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al justitiehuis (consejo legal gratis).', // nieuw, nalezen
    'be.closing.abuse': 'Es información general. Para tu situación: pregunta al sindicato, al justitiehuis (consejo legal gratis) o a Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'be.closing.advice.nl2': 'Es información general. Para tu situación: pregunta a tu empresa, al sindicato o al Juridisch Loket.',
    'be.closing.abuse.nl': 'Es información general. Para tu situación: pregunta al sindicato, al Juridisch Loket o a FairWork.',
  },
};

export const pt: CultureTranslation = {
  ui: {
    beNlOnly: 'Isto é sobre os Países Baixos. Na Bélgica é diferente.', // nieuw, nalezen
    beTaalBeta: 'As lições belgas são novas e ainda não foram verificadas por um especialista.', // nieuw, nalezen
    whoLegalBe: 'Um primeiro conselho grátis de um advogado sobre o teu contrato, o teu salário ou um despedimento.', // nieuw, nalezen
    whoInspectionBe: 'Denuncia salário baixo demais ou trabalho sem contrato.', // nieuw, nalezen
    whoExploitBe: { m: 'Estás a ser explorado no trabalho, ou achas que sim.', f: 'Estás a ser explorada no trabalho, ou achas que sim.', x: 'Estás a ser explorado/a no trabalho, ou achas que sim.' }, // nieuw, nalezen
    whoUnionBe: 'Ajuda com o teu salário, o teu contrato ou quando o trabalho acaba. Os sócios recebem mais ajuda.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Viver na Bélgica', // nieuw, nalezen
    'be.closing.advice': 'Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao justitiehuis (conselho jurídico grátis).', // nieuw, nalezen
    'be.closing.abuse': 'Informação geral. Para a tua situação: pergunta ao sindicato, ao justitiehuis (conselho jurídico grátis) ou à Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'be.closing.advice.nl2': 'Informação geral. Para a tua situação: pergunta ao teu empregador, ao sindicato ou ao Juridisch Loket.',
    'be.closing.abuse.nl': 'Informação geral. Para a tua situação: pergunta ao sindicato, ao Juridisch Loket ou à FairWork.',
  },
};

export const fr: CultureTranslation = {
  ui: {
    beNlOnly: 'Ceci concerne les Pays-Bas. En Belgique, c’est différent.', // nieuw, nalezen
    beTaalBeta: 'Les leçons belges sont nouvelles et pas encore vérifiées par un expert.', // nieuw, nalezen
    whoLegalBe: 'Un premier conseil gratuit d’un avocat sur ton contrat, ton salaire ou un licenciement.', // nieuw, nalezen
    whoInspectionBe: 'Signale un salaire trop bas ou un travail sans contrat.', // nieuw, nalezen
    whoExploitBe: 'On t’exploite au travail, ou tu penses que c’est le cas.', // nieuw, nalezen
    whoUnionBe: 'De l’aide pour ton salaire, ton contrat ou quand ton travail s’arrête. Les membres reçoivent plus d’aide.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Vivre en Belgique', // nieuw, nalezen
    'be.closing.advice': 'Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au justitiehuis (maison de justice : conseil juridique gratuit).', // nieuw, nalezen
    'be.closing.abuse': 'Informations générales. Pour ta situation : demande au syndicat, au justitiehuis (maison de justice : conseil juridique gratuit) ou à Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'be.closing.advice.nl2': 'Informations générales. Pour ta situation : demande à ton employeur, au syndicat ou au Juridisch Loket.',
    'be.closing.abuse.nl': 'Informations générales. Pour ta situation : demande au syndicat, au Juridisch Loket ou à FairWork.',
  },
};

export const de: CultureTranslation = {
  ui: {
    beNlOnly: 'Hier geht es um die Niederlande. In Belgien ist es anders.', // nieuw, nalezen
    beTaalBeta: 'Die belgischen Lektionen sind neu und noch nicht von einer Fachperson geprüft.', // nieuw, nalezen
    whoLegalBe: 'Kostenlose erste Beratung durch einen Anwalt zu deinem Vertrag, deinem Lohn oder einer Kündigung.', // nieuw, nalezen
    whoInspectionBe: 'Melde zu wenig Lohn oder Arbeit ohne Vertrag.', // nieuw, nalezen
    whoExploitBe: 'Du wirst bei der Arbeit ausgebeutet, oder du glaubst das.', // nieuw, nalezen
    whoUnionBe: 'Hilfe bei deinem Lohn, deinem Vertrag oder wenn deine Arbeit endet. Mitglieder bekommen mehr Hilfe.', // nieuw, nalezen
  },
  gloss: {
    'be.theme.life': 'Leben in Belgien', // nieuw, nalezen
    'be.closing.advice': 'Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Justitiehuis (kostenlose Rechtsberatung).', // nieuw, nalezen
    'be.closing.abuse': 'Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Justitiehuis (kostenlose Rechtsberatung) oder Payoke.', // nieuw, nalezen
    'be.closing.advice.nl': 'Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'be.closing.advice.nl2': 'Allgemeine Informationen. Für deine Situation: Frag deinen Arbeitgeber, die Gewerkschaft oder das Juridisch Loket.',
    'be.closing.abuse.nl': 'Allgemeine Informationen. Für deine Situation: Frag die Gewerkschaft, das Juridisch Loket oder FairWork.',
  },
};
