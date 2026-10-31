import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Dari (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of the first four themes (TODO: the other four). */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "حالا چه کار کرده می‌توانید؟", // nieuw, nalezen // nagelezen AI 31 okt
    kunNote: "سطح کنار هر جمله فقط رهنما است، نه یک سطح رسمی.", // nieuw, nalezen
    coachCanDo: "تعداد جمله‌های «می‌توانم …» از موضوع‌هایی که تمام کرده‌اید", // nieuw, nalezen // nagelezen AI 31 okt
  },
  gloss: {
    'kjn.u.firstday.1': "می‌توانم خود را به یک همکار معرفی کنم.", // nieuw, nalezen
    'kjn.u.firstday.2': "می‌توانم بپرسم که نزد چه کسی خود را معرفی کنم.", // nieuw, nalezen
    'kjn.u.help.1': "می‌توانم بگویم که نمی‌فهمم.", // nieuw, nalezen
    'kjn.u.help.2': "می‌توانم از کسی بخواهم که آهسته‌تر گپ بزند.", // nieuw, nalezen
    'kjn.u.tools.1': "می‌توانم از کسی بخواهم که آن را بنویسد یا نشانم بدهد.", // nieuw, nalezen
    'kjn.u.tools.2': "می‌توانم یک وظیفه را تکرار کنم تا مطمئن شوم که درست فهمیده‌ام.", // nieuw, nalezen
    'kjn.u.tools.3': "می‌توانم بگویم که می‌خواهم هالندی تمرین کنم.", // nieuw, nalezen
    'kjn.u.data.1': "می‌توانم نام خود را حرف به حرف بگویم.", // nieuw, nalezen
    'kjn.u.data.2': "می‌توانم بگویم که در کدام روزها کار کرده می‌توانم.", // nieuw, nalezen
    'kjn.u.data.3': "می‌توانم یک تاریخ را وقتی می‌شنوم، بفهمم.", // nieuw, nalezen
    'kjn.u.sounds.1': "می‌توانم کلمه‌هایی مانند man و maan را از هم فرق کنم.", // nieuw, nalezen
    'kjn.u.sounds.2': "می‌توانم جمله‌های کوتاه با صداهای مشکل را تکرار کنم.", // nieuw, nalezen
    'kjn.u.safety.1': "می‌توانم هشداری مانند «Pas op!» را بفهمم.", // nieuw, nalezen
    'kjn.u.safety.2': "می‌توانم یک حادثه را گزارش بدهم.", // nieuw, nalezen
    'kjn.u.safety.3': "می‌توانم بگویم که چیزی را هنوز یاد نگرفته‌ام.", // nieuw, nalezen
    'kjn.u.apply.1': "می‌توانم بگویم که چه تجربه دارم.", // nieuw, nalezen
    'kjn.u.apply.2': "می‌توانم در مصاحبهٔ کاری دربارهٔ خود گپ بزنم.", // nieuw, nalezen
    'kjn.u.contract.1': "می‌توانم بپرسم که در هفته چند ساعت کار می‌کنم.", // nieuw, nalezen
    'kjn.u.contract.2': "می‌توانم بپرسم که قراردادم موقت است یا دایمی.", // nieuw, nalezen
    'kjn.u.contract.3': "می‌توانم بگویم که چه وقت کار کرده می‌توانم و چه وقت نه.", // nieuw, nalezen
    'kjn.u.grow.1': "می‌توانم بگویم که چه دیپلوم‌ها و تصدیق‌نامه‌ها دارم.", // nieuw, nalezen
    'kjn.u.grow.2': "می‌توانم بگویم که در چه کاری خوب هستم.", // nieuw, nalezen
    'kjn.u.lost.1': "می‌توانم بگویم که قراردادم ختم می‌شود.", // nieuw, nalezen
    'kjn.u.lost.2': "می‌توانم بپرسم که پول رخصتی‌ام پرداخت می‌شود یا نه.", // nieuw, nalezen
    'kjn.u.stage.1': "می‌توانم بپرسم که مربی کارآموزی‌ام در کمپنی کیست.", // nieuw, nalezen
    'kjn.u.stage.2': "می‌توانم نظر و یک مثال بخواهم.", // nieuw, nalezen
    'kjn.u.time.1': "می‌توانم بگویم که نوبت کاری‌ام ساعت چند شروع می‌شود.", // nieuw, nalezen
    'kjn.u.time.2': "می‌توانم بگویم که مریض هستم.", // nieuw, nalezen
    'kjn.u.pay.1': "می‌توانم بگویم که ورق معاشم درست نیست.", // nieuw, nalezen
    'kjn.u.pay.2': "می‌توانم کلمه‌هایی مانند bruto و netto را بخوانم.", // nieuw, nalezen
    'kjn.u.leave.1': "می‌توانم رخصتی درخواست کنم.", // nieuw, nalezen
    'kjn.u.leave.2': "می‌توانم مریضی و دوباره آمدنم به کار را اطلاع بدهم.", // nieuw, nalezen
    'kjn.u.contact.1': "می‌توانم تیلفون کنم و بگویم که کی هستم.", // nieuw, nalezen
    'kjn.u.contact.2': "می‌توانم از کسی بخواهم که دوباره به من تیلفون کند.", // nieuw, nalezen
    'kjn.u.contact.3': "می‌توانم یک پیام کوتاه از کارم را بخوانم.", // nieuw, nalezen
    'kjn.u.house.1': "می‌توانم قاعده‌هایی مانند «Roken verboden» را بخوانم.", // nieuw, nalezen
    'kjn.u.house.2': "می‌توانم بپرسم که سگرت را کجا کشیده می‌توانم.", // nieuw, nalezen
    'kjn.u.house.3': "می‌توانم بگویم که کاری اجازه نیست.", // nieuw, nalezen
    'kjn.u.numbers.1': "می‌توانم وقت‌هایی مانند «kwart over vier» را بفهمم.", // nieuw, nalezen
    'kjn.u.numbers.2': "می‌توانم بگویم که قیمت یا وزن چیزی چقدر است.", // nieuw, nalezen
    'kjn.u.shop.1': "می‌توانم از مشتری بپرسم که با کارت پول می‌دهد یا نه.", // nieuw, nalezen
    'kjn.u.shop.2': "می‌توانم راه را در دوکان به مشتری نشان بدهم.", // nieuw, nalezen
    'kjn.u.ai.1': "می‌توانم بپرسم که یک جواب درست است یا نه.", // nieuw, nalezen
    'kjn.u.ai.2': "می‌توانم بگویم که می‌خواهم با یک انسان گپ بزنم.", // nieuw, nalezen
    'kjn.u.finish.1': "می‌توانم بپرسم که یک کلمه در ورق کار چه معنی دارد.", // nieuw, nalezen
    'kjn.u.finish.2': "می‌توانم بگویم که چه چیز تمام شده و چه چیز نه.", // nieuw, nalezen
    'kjn.u.online.1': "می‌توانم بگویم که رمزم کار نمی‌کند.", // nieuw, nalezen
    'kjn.u.online.2': "می‌توانم یک ایمیل مشکوک را بشناسم.", // nieuw, nalezen
  },
};

export default t;
