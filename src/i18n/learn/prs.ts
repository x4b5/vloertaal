import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "مایکروفون لازم نیست. آن را بلند بگویید، بعد ادامه بدهید.",
    micRetry: "مایکروفون را دوباره امتحان کنید",
    micFailed: "مایکروفون کار نکرد. آن را بلند بگویید، بعد ادامه بدهید.",
    micRefused: "اپ اجازه ندارد از مایکروفون شما استفاده کند. می‌توانید آن را روشن کنید.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    micTurnOn: "مایکروفون را روشن کنید", // nieuw, nalezen (AI-correctie 2 nov 2026)
    micStepsIos: "در نوار آدرس روی «•••» یا «aA» بزنید › تنظیمات وب‌سایت › میکروفون › اجازه. یا: تنظیمات › برنامه‌ها › Safari › میکروفون. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen
    micStepsIosOther: "روی نشانهٔ سمت چپ آدرس ویب بزنید › مجوزها › میکروفون › اجازه دادن. یا: تنظیمات › برنامه‌ها › {app} › میکروفون. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen
    micStepsAndroid: "روی نشانهٔ سمت چپ آدرس ویب بزنید › مجوزها › میکروفون › اجازه دادن. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen
    micStepsAndroidApp: "نشانهٔ Vloertaal را در صفحهٔ اصلی نگه دارید › معلومات برنامه › مجوزها › میکروفون › اجازه دادن. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen
    micStepsDesktop: "روی نشانهٔ سمت چپ آدرس ویب کلیک کنید › میکروفون › اجازه دادن. بعد روی دکمهٔ پایین کلیک کنید.", // nieuw, nalezen
    whichPicture: "کدام عکس است؟",
    sayAloudInstead: "به عوضش بلند بگویید",
    wordsPractised: "کلمه‌های تمرین‌شده",
    reviewComplete: "مرور خلاص شد!",
  },
  gloss: {
    'c.hello.a.why': "به خداحافظی با خداحافظی جواب می‌دهند.",
    'c.people.a.why': "سوال نام را می‌پرسد. این جواب یک نام را می‌گوید.",
    'c.arrive.a.why': "سوال این است که برای چه آمده. این جواب می‌گوید: نو است و امروز شروع می‌کند.",
    'c.understand.a.why': "نفهمیدید؟ عادی است که بخواهید دوباره بگویند.",
    'c.translate.a.why': "یادداشت هنوز روشن نیست، پس اول ترجمه می‌شود.",
    'c.understood.a.why': "با دوباره گفتن کار، کنترول می‌کنید که هدایت را درست فهمیده‌اید.",
    'c.keeplearning.a.why': "هالندی خواستن مشکلی نیست: تمرین کمک می‌کند.",
    'c.gear.a.why': "سوال دربارهٔ کلاه ایمنی است: بلی، کلاه سرش است.",
    'c.danger.a.why': "در وقت حادثه، اول به ۱۱۲ زنگ می‌زنند.",
    'c.alarm.a.why': "پرسیده‌اند که همه بیرون شده‌اند یا نه: این جواب می‌گوید چه کسی هنوز نیامده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "پرسیده شد چه شده: این جواب می‌گوید چه شده و حالش چطور است.",
    'c.notyet.a.why': "وقتی گفته می‌شود «فقط امتحان کنید»، جواب مصئون این است که بخواهید اول برای شما نشان بدهند.",
    'c.things.a.why': "سوال «کجا» است. این جواب یک جا را نام می‌برد.",
    'c.directions.a.why': "چپ یا راست؟ این جواب یکی را انتخاب می‌کند و می‌گوید کجا.",
    'c.shift.a.why': "نوبت کاری چه وقت شروع می‌شود؟ این جواب روز و ساعت را می‌گوید.",
    'c.sick.a.why': "مریض بودن یعنی در خانه ماندن و خبر دادن.",
    'd.speakup.a.why': "وقتی می‌پرسند که مشکلی هست، یک «بلی» صادقانه خوب است.",
    'd.agree.a.why': "«نی» گفتن اجازه است. پیشنهاد یک روز دیگر کمک می‌کند.",
    'd.task.a.why': "پرسیدند که کار خلاص شده یا نی: این جواب می‌گوید «نزدیک است» و چقدر وقت دیگر.",
    'd.clear.a.why': "پرسیدند که واضح است یا نی: اول «بلی»، بعد همان یک سوال.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "معرف، آمر قبلی است که دربارهٔ کار شما گفته می‌تواند.",
    'c.interview.a.why': "در مصاحبهٔ کاری، تجربهٔ کاری مهم است.",
    'c.findwork.a.why': "سوال نوع کار را می‌پرسد. این جواب آن را نام می‌برد.",
    'c.contract.a.why': "یک «بلی» همراه با سوال دربارهٔ ساعت، روشن است و نشان می‌دهد که علاقه دارید.",
    'c.agency.a.why': "سوال دربارهٔ ساعت‌ها است: بلی، و می‌گوید چه وقت و چطور.",
    'c.bsn.a.why': "کارفرما اجازه دارد سند هویت شما، مثلاً پاسپورت، را ببیند.",
    'c.housing.a.why': "پولی که از معاش کم می‌شود، باید بالای کاغذ موافقه شود.",
    'c.payslip.a.why': "اگر در ورق معاش ساعت‌ها کم باشد، باید خبر بدهید.",
    'c.extra.a.why': "اضافه‌کاری یادداشت می‌شود تا بتوان آن را در ورق معاش کنترول کرد.",
    'c.phone.a.why': "نزدیک ماشین تیلفون نی: پیام‌ها تا وقت تفریح صبر می‌کنند.",
    'c.smoking.a.why': "تفریح وقت معین دارد، پیش از آن نی.",
    'c.clock.a.why': "ثبت حاضری به جای کس دیگر اجازه نیست.",
    'c.hygiene.a.why': "جالی موی به سر، زیورات کشیده: این‌ها مقررات حفظ‌الصحهٔ غذا است.",
    'c.smalltalk.a.why': "سوال دربارهٔ آخر هفته است: گفتن یک چیز کافی است.",
    'c.mistakes.a.why': "به تعریف با تشکر جواب می‌دهند.",
    'c.respect.a.why': "آزار و اذیت را باید گفت تا کسی کمک کرده بتواند.",
    'c.gossip.a.why': "سهم نگرفتن در غیبت، اعتماد را در تیم نگه می‌دارد.",
    'c.boundaries.a.why': "شوخی‌ای را که آزار می‌دهد، می‌توانید به روشنی بس کنید.",
    'c.health.a.why': "تفریح از صحت محافظت می‌کند، پس گرفته می‌شود.",
    'c.rights.a.why': "ورق برطرفی را هیچ وقت فوراً امضا نکنید. اول مشوره بگیرید.",
    'c.mustmay.a.why': "داوطلبانه یعنی خود تان انتخاب می‌کنید: کار روز شنبه لازم نیست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "چه وقت؟ این جواب ماه و مدت را می‌گوید.",
    'c.illness.a.why': "جزئیات صحی برای داکتر کمپنی است، برای آمر نی.",
    'c.warning.a.why': "کارفرما می‌تواند از پاسپورت کاپی بگیرد، اما نمی‌تواند آن را نگه دارد.",
    'c.gethelp.a.why': "وقتی مشکل را روشن بگویید، آن‌ها کمک کرده می‌توانند.",
    'c.callin.a.why': "چه وقت برمی‌گردید؟ این جواب یک روز را می‌گوید.",
    'c.texting.a.why': "جواب زود در اپ به پلان کار کمک می‌کند.",
    'c.certs.a.why': "یک «نی» صادقانه همراه با علاقه به یاد گرفتن: این جواب خوب است.",
    'c.diploma.a.why': "«بلی» گفتن به آموزش و پرسیدن این‌که پولش را کی می‌دهد، عادی است.",
    'c.doctor.a.why': "مرکز داکتر خانوادگی باید بداند کی مریض است و چه مشکل دارد.",
    'c.insurance.a.why': "نام کمپنی بیمه بالای کارت بیمهٔ صحی نوشته است.",
    'c.letters.a.why': "اظهارنامهٔ مالیه باید تا اول ماه مِی داده شود.",
    'c.scams.a.why': "بانک هیچ وقت رمز کارت شما را نمی‌پرسد. قطع کردن تیلفون درست است.",
    'c.bike.a.why': "چطور؟ این جواب وسیله و وقت را می‌گوید.",
    'c.transit.a.why': "ریل نی: این جواب می‌گوید که با بس می‌آید.",
    'c.ww.a.why': "برای کمک‌پول بیکاری (WW) باید فوراً درخواست بدهید.",
    'c.newjob.a.why': "با نمبر تیلفون، آن‌ها دوباره زنگ زده می‌توانند.",
    'c.tools.a.why': "کجا؟ این جواب جا را می‌گوید: در موتر.",
    'c.site.a.why': "بالای بام، وسیلهٔ ضد افتادن همیشه اول است.",
    'c.line.a.why': "چطور پیش می‌رود؟ این جواب می‌گوید چطور، و مشکل را نام می‌برد.",
    'c.quality.a.why': "چرا یک طرف گذاشته شده؟ این جواب عیب را می‌گوید.",
    'c.client.a.why': "مراجع کمک می‌خواهد: یک «بلی» با ادب، با «u».",
    'c.privacy.a.why': "دواها کار کارمندان آموزش‌دیده است: نرس آن‌ها را می‌دهد.",
    'c.kitchen.a.why': "حساسیت جدی است: سرآشپز باید بداند.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.service.a.why': "بل را خواستند: یک «البته» کوتاه و «می‌آیم».",
    'c.cleaning.a.why': "خلاص شد؟ این جواب می‌گوید نزدیک است، و چند تا مانده.",
    'c.cleansafe.a.why': "زمین تر لشم است: هوشدار کمک می‌کند.",
    'c.shelves.a.why': "سوال «کجا» است. این جواب راهرو را می‌گوید و کمک می‌کند.",
    'c.checkout.a.why': "سوال دربارهٔ پرداخت با کارت است: یک «بلی» کوتاه و مهربان.",
    'c.counting.a.why': "پرسیده‌اند چند تا: این جواب عدد را می‌گوید و آن را رقم به رقم چک می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "سوال دربارهٔ ساعت است. این جواب یک ساعت را می‌گوید.",
    'c.measures.a.why': "سوال دربارهٔ درازی است. این جواب یک اندازه را می‌گوید.",
    'c.aihelp.a.why': "سوال این است که کی نوشته: یک «بلی» صادقانه که کمک را هم می‌گوید.",
    'c.aiprivate.a.why': "از شما می‌خواهند نام‌ها را در چت‌بات بگذارید: این جواب «نی» می‌گوید و دلیل آن را.",
    'c.aifake.a.why': "یک نمبر نو پول می‌خواهد: این جواب اول کنترول می‌کند.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.aiplan.a.why': "تقسیم اوقات را اپ ساخته: این جواب یک انسان می‌خواهد.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "می‌پرسند چند قطار: این جواب یک عدد می‌گوید، و اینکه چقدر مانده.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "تازه دواپاشی شده: این جواب می‌گوید هنوز نی، و چرا.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "تخلص را می‌پرسند: این جواب آن را می‌گوید و پیشنهاد می‌کند که هجی کند.", // nagelezen AI 22 nov
    'c.dates.a.why': "تاریخ را می‌پرسند: این جواب روز و تاریخ را می‌گوید.", // nagelezen AI 22 nov
    'c.permit.a.why': "«نی» گفتن با یک دلیل مشکلی ندارد. پیشنهاد یک روز دیگر کمک می‌کند.", // nagelezen AI 22 nov
    'c.kids.a.why': "می‌پرسند چرا: این جواب دلیل را می‌گوید، از کودکستان زنگ زدند.", // nagelezen AI 22 nov
    'c.body.a.why': "می‌پرسند کجا درد می‌کند: این جواب جا و علت را می‌گوید.", // nagelezen AI 22 nov
    'c.jobends.a.why': "خانه به کار بسته است: این جواب مهلت خبر دادن را می‌پرسد.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "کلمه‌ای روشن نیست: پرسیدن پیش از شروع جواب درست است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "پرسیده‌اند همه چیز تمام است یا نی: این جواب می‌گوید چه تمام نشده، و چرا.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.workshop.a.why': "پرسیده‌اند چرا: این جواب دلیل را می‌گوید، چشم باید محافظت شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "کار روی چراغ: این جواب اول می‌پرسد که برق قطع است یا نی.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.garage.a.why': "خواسته‌اند تایرها عوض شود: یک بلی، و یک سوال که تایرها کجاست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "کار اضافی: مشتری باید اول موافقه کند، پس این جواب از سرپرست می‌پرسد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "پرسیده‌اند چه وقت: این جواب روز را می‌گوید، و قرارداد اول است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "نظر هنوز روشن نیست: خواستن اینکه نشان بدهند جواب خوب است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "دربارهٔ رأی دادن: یک بلی، و دو چیزی که باید همراه برد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "پولیس سند هویت می‌خواهد: نشانش بدهید و بپرسید چه گپ است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "پرسیده‌اند ورود کار می‌کند یا نی: این جواب نی می‌گوید، و چرا.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.phish.a.why': "دربارهٔ لینک: یک بلی صادقانه، و یک تماس با بخش IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "پرسیده‌اند نقطهٔ قوت چیست: این جواب یکی را با مثال می‌گوید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "پرسیده‌اند پلان چیست: این جواب bbl را می‌گوید و معنایش را.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "پرسیده‌اند فرستاده شده یا نی: هنوز نی، اول کنترول می‌شود.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.budget.a.why': "پیشنهاد «بعداً بپردازید»: یک «نی» با ادب، با دلیل.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'c.healthy.a.why': "پیشنهاد تابلیت: یک «نی» با ادب، با دلیل.", // nieuw, nalezen // nagelezen AI ronde 3 // nagelezen AI 22 nov
    'd.newcolleague.a.why': "«فکر می‌کنم» یعنی هنوز مطمئن نیست: وقتی بخواهید نشان بدهد، معلوم می‌شود که درست است یا نی.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "پرسیده‌اند چرا خط پاک می‌شود: محصول بعدی مغزیات ندارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "پرسیده‌اند که بسته از اوست یا نی: بلی، و بعد امضا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "یک دور دیگر خواسته‌اند: نی، چون اول وقت تفریح است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "پرسیده‌اند حال تان چطور است: یک بلی کوتاه، و اینکه آهسته آهسته پیش می‌روید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "پرسیده‌اند حال تان چطور است: یک «زیاد خوب نی» صادقانه مشکلی ندارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "پرسیده‌اند بر آن چقدر است: یک عدد با واحدش، و نوشته کردن آن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "پرسیده‌اند چوب کجا برود: یک جای، و اینکه آن کجاست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "پرسیده‌اند چه شد: بلی، و چه، و چقدر وقت.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "پرسیده‌اند حالش چطور است: چیزی که می‌بینید، و اینکه این نو است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "خواسته‌اند یک نفر را بلند کنید: به تنهایی نی، اول لیفت.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "گیلاس پاک خواسته‌اند: بلی، و اینکه چه وقت می‌آید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "یک فرمایش از سرآشپز: دوباره گفتن، تا بداند که شنیدید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "پرسیده‌اند دفتر پاک شده یا نی: نی، با دلیلش.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "دربارهٔ یک تکه پرسیده‌اند: نی، چون سرخ برای تشناب است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "شیر خواسته‌اند: نه یک «نی»، بلکه دیدن در گدام.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "یک مشتری قهر: کلمه‌های آرام، و یک همکار می‌آید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "پرسیده‌اند کدام را بچینند: رنگ می‌گوید که کدام پخته است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "رعد و برق می‌آید: بس کردن کار و داخل رفتن انتخاب مصئون است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "پرسیده‌اند جور می‌آید یا نی: نی، و دوباره اندازه کردن پیش از زور زدن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "خواسته‌اند آن را بردارند: هنوز نی، فلز داغ اول باید سرد شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "پرسیده‌اند چه می‌شنوید: کدام پرزه، و چه می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "خواسته‌اند کار را شروع کنند: هنوز نی، چون موتر برقی است.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'd.explain.a.why': "پرسیده‌اند که چه مشکل است: این جواب می‌گوید چه شده، و به چه ضرورت است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "مطمئن نیستید که شوخی است یا نی: پرسیدن از حدس زدن بهتر است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "پرسیده‌اند چرا تمام نشده: یک دلیل آرام، و اینکه اول چه کار است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "کسی کمی وقت می‌خواهد: یک بلی، و یک سوال تا بتواند قصه کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "دوباره زنگ زدن بعد از یک زنگ بی‌جواب: یک سلام، و اینکه چرا زنگ می‌زنید.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "پیشنهاد نظر دربارهٔ کار: یک بلی، و اینکه می‌خواهید کار را خوب انجام بدهید.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "پرسیده‌اند که کار چطور است: اول چیزی که خوب است، بعد چیزی که می‌تواند بهتر شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "پرسیده‌اند که سوالی هست: این جواب یک سوال می‌پرسد، دربارهٔ تقسیم اوقات کار.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "پرسیده‌اند کدام موقعیت: راهرو و خانهٔ رف.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "پرسیده‌اند پالت آماده است یا نی: نی، و اینکه هنوز به چه ضرورت دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "پرسیده‌اند موتر خوب است یا نی: نی، و اینکه چه خراب است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "پرسیده‌اند کجا هستید: جای، و اینکه چقدر ناوقت می‌رسید.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "پرسیده‌اند می‌دانید چطور یا نی: نی، هنوز نی، و راست گفته شده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "پرسیده‌اند سوال دارید یا نی: بلی، و اول اینکه وقت هست یا نی.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "پرسیده‌اند پیدا کرده می‌توانید یا نی: نی، و خواهش اینکه نشان بدهند.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "خواستند که چیزی را بگیرد: بلی، و می‌پرسد کجا بگذارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "پرسیدند که دروازه بسته است یا نی: نی، و حالا آن را بسته می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "پرسیدند که پر شده یا نی: بلی، و آن را خالی می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "خواستند که حالا انجامش بدهد: بلی، و می‌پرسد بعد از آن چه.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "پرسیده‌اند مکسر کجاست: یک جای، و چیزی که نزدیک آن است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "پرسیده‌اند از کجا شروع کند: در وسط، بالای خط وسط.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "پرسیده‌اند دیوار خشک شده یا نی: نی، و چقدر صبر کند.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "پرسیده‌اند که مربع است یا نی: نی، مستطیل، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "پرسیده‌اند چند درجه است: عدد، و نیم چه چیز است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "پرسیده‌اند فرش چقدر کلان است: حساب، و جواب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "پرسیده‌اند کدام برس: پهن برای دیوار، خورد برای کنج‌ها.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "پرسیده‌اند رنگ کرده می‌تواند یا نی: نی، و اول چه کار است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "پرسیده‌اند چند خشت مانده: یک پالت، و اینکه بس است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "پرسیده‌اند ردیف چقدر بلند باشد: جایی که آن را دیده می‌تواند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "پرسیده‌اند کدام اره: ارهٔ پشت‌دار، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "پرسیده‌اند زاویه راست است یا نی: بلی، و از کجا می‌داند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "پرسیده‌اند برمه کجاست: یک جای، و اینکه تقریباً پر است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "پرسیده‌اند رف را چطور محکم کند: با چه چیز، و چند تا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "پرسیده‌اند چرا ایستاد می‌شود: سنسور، و چه چیز را نمی‌بیند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "پرسیده‌اند چند وقت یک بار: ساعتی یک بار، و کجا نوشته کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "پرسیده‌اند در هر قطی چند تا: عدد، و کجا نوشته است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "پرسیده‌اند کی: روز هفته، و وقت آن در همان روز.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "پرسیده‌اند کدام سیم کجا می‌رود: هر رنگ به همان رنگ.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "پرسیده‌اند اجازه دارد آن را باز کند یا نی: نی، و چه کسی این کار را می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "پرسیده‌اند هنوز چکه می‌کند یا نی: کمی، و چه کاری برایش می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "پرسیده‌اند چرا تیز است: هنوز پلیسه دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "پرسیده‌اند کدام مرحله: نمبر آن، و کجا نگاه کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "پرسیده‌اند چقدر محکم: تا وقتی آچار کلیک کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "پرسیده‌اند اجازه دارد آنجا ایستاد شود یا نی: نی، هیچ وقت، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "پرسیده‌اند خوب است یا نی: نی، و چه عیبی دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "پرسیده‌اند چقدر عمیق: اندازه‌اش، و نه عمیق‌تر.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "پرسیده‌اند پخته است یا نی: نی، زیاد سبز است، و چه باید کرد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "پرسیده‌اند چرا گرم است: پرده و کلکین‌ها بسته است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "پرسیده‌اند اجازه دارد آن را بکشد یا نی: نی، و چرا کمک می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "پرسیده‌اند باید کشیده شوند یا نی: بلی، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "پرسیده‌اند چقدر: چند لیتر، و طریقهٔ کنترول آن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "پرسیده‌اند باید نو شود یا نی: بلی، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "پرسیده‌اند چه کار باید شود: نگاه کردن به ورقهٔ کار.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "پرسیده‌اند اجازه دارد آن را بگیرد یا نی: بلی، و اول چه کار کند.", // nieuw, nalezen
    'c.pruning.a.why': "پرسیده‌اند کدام شاخه‌ها: فقط شاخه‌های خشک.", // nieuw, nalezen
    'c.hedge.a.why': "پرسیده‌اند چقدر بلند: تا خط، نه پایین‌تر.", // nieuw, nalezen
    'c.chainsaw.a.why': "پرسیده‌اند اجازه دارد یا نی: هنوز نی، و اول چه می‌آید.", // nieuw, nalezen
    'c.weeding.a.why': "پرسیده‌اند علف هرزه است یا نی: نی، و با آن چه کند.", // nieuw, nalezen
    'c.planting.a.why': "پرسیده‌اند کجا می‌رود: جای آن در کرد گل.", // nieuw, nalezen
    'c.roadside.a.why': "پرسیده‌اند از سرک تیر شده می‌تواند یا نی: نی، صبر، و چرا.", // nieuw, nalezen
    'c.litter.a.why': "یک باشنده می‌پرسد کی: نمی‌داند، و چه کسی می‌داند.", // nieuw, nalezen
    'c.reception.a.why': "یک مراجعه‌کننده وقت ملاقات دارد: یک لحظه، زنگ زده می‌شود.", // nieuw, nalezen
    'c.visitors.a.why': "پرسیده‌اند کرتی کجا برود: جای آن، و کجاست.", // nieuw, nalezen
    'c.mailroom.a.why': "پرسیده‌اند برای کیست: شعبه، و منزل آن.", // nieuw, nalezen
    'c.meetingroom.a.why': "پرسیده‌اند چه وقت: ساعت آن، و چه باید شود.", // nieuw, nalezen
    'c.faults.a.why': "پرسیده‌اند چرا سرد است: چه خراب است، و کمک کی می‌آید.", // nieuw, nalezen
    'c.repairs.a.why': "پرسیده‌اند بیپ می‌زند یا نی: بلی، و چرا.", // nieuw, nalezen
    'c.moving.a.why': "پرسیده‌اند کجا می‌رود: اتاق آن، و کجا نگاه کند.", // nieuw, nalezen
    'c.closing.a.why': "پرسیده‌اند کسی داخل است یا نی: نی، و حالا چه کار می‌شود.", // nieuw, nalezen
    'c.patrol.a.why': "پرسیده‌اند چیزی دیده یا نی: بلی، چه چیز، و کجا.", // nieuw, nalezen
    'c.access.a.why': "پرسیده‌اند بدون کارت داخل شده می‌تواند یا نی: ببخشید، بدون کارت نی.", // nieuw, nalezen
    'c.cameras.a.why': "پرسیده‌اند چه دیده می‌شود: چه کسی، کجا، و چه کار می‌شود.", // nieuw, nalezen
    'c.report.a.why': "پرسیده‌اند در گزارش چه برود: چه، کجا و کی.", // nieuw, nalezen
    'c.evacuation.a.why': "پرسیده‌اند همه بیرون هستند یا نی: نی، چند نفر کم است.", // nieuw, nalezen
    'c.firstaid.a.why': "پرسیده‌اند AED کجاست: جای آن، و پهلوی چه است.", // nieuw, nalezen
    'c.shoplifting.a.why': "پرسیده‌اند اجازه دارد بکس را تلاشی کند یا نی: نی، و چه کسی این کار را می‌کند.", // nieuw, nalezen
    'c.aggression.a.why': "پرسیده‌اند چرا نی: دلیل آن، آرام گفته شده.", // nieuw, nalezen
    'c.hygienelock.a.why': "پرسیده‌اند دربارهٔ ساعت: نی، و قاعدهٔ پشت آن.", // nieuw, nalezen
    'c.allergens.a.why': "پرسیده‌اند یک جا شده می‌تواند یا نی: نی، و چرا.", // nieuw, nalezen
    'c.coldroom.a.why': "پرسیده‌اند چرا بیپ می‌زند: علت آن، و چه باید کرد.", // nieuw, nalezen
    'c.foreignbody.a.why': "پرسیده‌اند چه کند: به چه کسی نشانش بدهد.", // nieuw, nalezen
    'c.cutting.a.why': "پرسیده‌اند چقدر: وزن آن، و کجا نگاه کند.", // nieuw, nalezen
    'c.labels.a.why': "پرسیده‌اند کدام تاریخ: کی، و کجا نگاه کند.", // nieuw, nalezen
    'c.linecleaning.a.why': "پرسیده‌اند پاک است یا نی: هنوز نی، و چه کار باقی مانده.", // nieuw, nalezen
    'c.haccp.a.why': "پرسیده‌اند چرا: تا بدانیم که غذا مصئون است.", // nieuw, nalezen
    'c.binlorry.a.why': "پرسیده‌اند اجازه دارد در عقب سوار شود یا نی: نی، و کجا سوار شود.", // nieuw, nalezen
    'c.reversing.a.why': "برای کمک خواسته‌اند: بلی، کجا ایستاده، و چه باید کرد.", // nieuw, nalezen
    'c.wastesorting.a.why': "پرسیده‌اند کجا می‌رود: سطل آن، و چرا.", // nieuw, nalezen
    'c.wastesafety.a.why': "پرسیده‌اند بعد از بریدگی چه کند: آن را بشوید، و بگوید.", // nieuw, nalezen
    'c.yard.a.why': "پرسیده‌اند کجا می‌رود: کانتینر آن، و کجاست.", // nieuw, nalezen
    'c.hazardous.a.why': "پرسیده‌اند در داخل چه است: معلوم نیست، پس یک طرف گذاشته شود.", // nieuw, nalezen
    'c.baler.a.why': "پرسیده‌اند اجازه دارد نگاه کند یا نی: نی، و اول چه می‌آید.", // nieuw, nalezen
    'c.shovel.a.why': "پرسیده‌اند اجازه دارد تیر شود یا نی: فقط وقتی راننده او را ببیند.", // nieuw, nalezen
    'c.nappies.a.why': "پرسیده‌اند کی: ساعت آن، و کجا نوشته شده.", // nieuw, nalezen
    'c.mealtime.a.why': "پرسیده‌اند او اجازه دارد آن را بخورد یا نی: نی، چرا، و کجا نگاه شود.", // nieuw, nalezen
    'c.naptime.a.why': "پرسیده‌اند خواب است یا نی: بلی، از کی، و اینکه باز نگاه می‌شود.", // nieuw, nalezen
    'c.playtime.a.why': "پرسیده‌اند طفل اجازه دارد بازی کند یا نی: بلی، کجا، و بعد چه.", // nieuw, nalezen
    'c.pickup.a.why': "پرسیده‌اند چه کسی می‌برد: آن نفر، و اینکه او در لست است.", // nieuw, nalezen
    'c.childsafety.a.why': "پرسیده‌اند افتاده یا نی: بلی، چه شده، و به چه کسی زنگ زده می‌شود.", // nieuw, nalezen
    'c.sickchild.a.why': "پرسیده‌اند حالش چطور است: چه دیده می‌شود، و چه کار می‌شود.", // nieuw, nalezen
    'c.grouprules.a.why': "پرسیده‌اند اجازه دارد تنها برود یا نی: بلی، اما اول به یک همکار بگوید.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "پرسیده‌اند خلاص شده یا نی: هنوز نی، و چرا.", // nieuw, nalezen
    'c.hotelroom.a.why': "پرسیده‌اند چند تا مانده: تعداد، و چه وقت خلاص می‌شود.", // nieuw, nalezen
    'c.dosing.a.why': "گفته‌اند بیشتر بریزد: نی، بیشتر بهتر نیست، و از چه استفاده می‌شود.", // nieuw, nalezen
    'c.officenight.a.why': "پرسیده‌اند تنها کار می‌کند یا نی: بلی، و پیام فرستاده می‌شود.", // nieuw, nalezen
    'c.knives.a.why': "خواسته‌اند ببرد: بلی آشپز صاحب، و یک سوال دربارهٔ اینکه چطور.", // nieuw, nalezen
    'c.rawcooked.a.why': "پرسیده‌اند بدون گلوتن است یا نی: مطمئن نیست، پس لست دیده می‌شود.", // nieuw, nalezen
    'c.pass.a.why': "پرسیده‌اند غذا کجاست: بالای پاس، و حالا آورده می‌شود.", // nieuw, nalezen
    'c.bill.a.why': "خواسته‌اند جدا پول بدهند: بلی، و ماشین کارت آورده می‌شود.", // nieuw, nalezen
    'c.washing.a.why': "مراجع نی می‌گوید: خیر است، و چیز دیگری پیشنهاد می‌شود.", // nieuw, nalezen
    'c.observing.a.why': "پرسیده‌اند چیز خاصی است یا نی: بلی، و دقیقاً چه.", // nieuw, nalezen
    'c.homecare.a.why': "پرسیده‌اند کیست: سلام، اینکه کیست، و اجازه برای داخل آمدن.", // nieuw, nalezen
    'c.liftaids.a.why': "خواسته‌اند تنها بکند: بلی، با روجایی لشم، و آن آورده می‌شود.", // nieuw, nalezen
    'c.returns.a.why': "خواسته‌اند آن را پس بیاورند: بلی، و یک سوال دربارهٔ رسید.", // nieuw, nalezen
    'c.facing.a.why': "پرسیده‌اند کار خلاص شده یا نی: نزدیک است، و چه چیز مانده.", // nieuw, nalezen
    'c.shrink.a.why': "خواسته‌اند در بکس را ببینند: بلی، و رسید نشان داده می‌شود.", // nieuw, nalezen
    'c.shopclose.a.why': "خواسته‌اند داخل بیایند: ببخشید، بسته است، و چه وقت دوباره باز می‌شود.", // nieuw, nalezen
    'c.hirer.a.why': "خواسته‌اند در جای نو شروع کند: بلی، و یک سوال دربارهٔ ساعت.", // nieuw, nalezen
    'c.phases.a.why': "گفته‌اند کار ختم می‌شود: خوب، و کار دیگر خواسته می‌شود.", // nieuw, nalezen
    'c.deductions.a.why': "از یک کسر خبر داده‌اند: پرسیده می‌شود که اجازه است یا نی، و پرسان می‌شود.", // nieuw, nalezen
    'c.agencyhome.a.why': "گفته‌اند زود از خانه برود: این زود است، و اول مشوره گرفته می‌شود.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "گفته‌اند تقسیم اوقات تغییر کرده: خوب، و کدام روز.", // nieuw, nalezen
    'c.breaks.a.why': "دربارهٔ وقت نان چاشت پرسیده شد: ساعت آن، و چقدر وقت.", // nieuw, nalezen
    'c.wound.a.why': "نزدیک است بیهوش شود: بگذارید دراز بکشد، و کمک بیاورید.", // nieuw, nalezen
    'c.callhelp.a.why': "پرسیده شد که واکنش نشان می‌دهد یا نی: نی، واکنش نشان نمی‌دهد.", // nieuw, nalezen
    'c.vacancy.a.why': "پرسیده شد چرا زنگ زده: اعلان کار، و آیا هنوز جای خالی است؟", // nieuw, nalezen
    'c.result.a.why': "جواب رد داده‌اند: یک جواب آرام، و پرسیده می‌شود که چرا.", // nieuw, nalezen
    'c.residence.a.why': "گفته‌اند اجازه تقریباً ختم شده: فوراً درخواست داده می‌شود.", // nieuw, nalezen
    'c.newhome.a.why': "پرسیده شد کجا زندگی می‌کند: یک خانهٔ نو، و آدرس نو.", // nieuw, nalezen
    'c.payparts.a.why': "نمبر کارمند پرسیده شد: جای آن در ورق معاش.", // nieuw, nalezen
    'c.latepay.a.why': "گفته‌اند پول بعداً می‌آید: آن را به شکل نوشته‌شده می‌خواهد.", // nieuw, nalezen
    'c.holiday.a.why': "خواسته‌اند در ماه می برود: بهتر است در جولای برود، و دلیل آن.", // nieuw, nalezen
    'c.special.a.why': "دربارهٔ رخصتی تولد پرسیده شد: بلی، و چه وقت.", // nieuw, nalezen
    'c.unwell.a.why': "پرسیده شد که خوب است: نی، و آیا به خانه رفته می‌تواند؟", // nieuw, nalezen
    'c.injury.a.why': "اظهارنامه خواسته‌اند: بلی، و یک کاپی برای خودش.", // nieuw, nalezen
    'c.debt.a.why': "گفته‌اند تا پرداخت قرض بماند: اجازه نیست، کمک بگیرید.", // nieuw, nalezen
    'c.inspection.a.why': "پرسیده شد که می‌خواهد گپ بزند: بلی، اما نه جایی که آمر بشنود.", // nieuw, nalezen
    'c.carpool.a.why': "پرسیده شد کی موتر می‌راند: خودش، و چه وقت آن‌ها را می‌گیرد.", // nieuw, nalezen
    'c.train.a.why': "پرسیده شد چرا ناوقت آمده: ریل، و پیام فرستاده است.", // nieuw, nalezen
    'c.checklist.a.why': "پرسیده شد که چیزی را فراموش کرده: یک نگاه دیگر به لست.", // nieuw, nalezen
    'c.leavesite.a.why': "پرسیده شد که نفر آخر است: بلی، همه چیز خاموش و دروازه قفل.", // nieuw, nalezen
    'c.stagedays.a.why': "پرسیده شد چرا نبود: مریض بود، و به هر دو زنگ زد.", // nieuw, nalezen
    'c.stageend.a.why': "دربارهٔ پلان‌ها پرسیده شد: اول دیپلوم، بعد کار.", // nieuw, nalezen
    'c.neighbours.a.why': "یک همسایهٔ نو سلام می‌دهد: از آشنایی خوشحال است، و نام خود.", // nieuw, nalezen
    'c.join.a.why': "خواسته‌اند که بیاید: بلی، و می‌خواهد با معلم گپ بزند.", // nieuw, nalezen
    'c.workphotos.a.why': "برای انترنت عکس خواسته‌اند: یک «نی» با احترام.", // nieuw, nalezen
    'c.device.a.why': "دربارهٔ یک اپ نو پرسیده شد: اول از بخش IT بپرسید.", // nieuw, nalezen
  },
};

export default t;
