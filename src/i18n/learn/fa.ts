import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: "میکروفون لازم نیست. آن را بلند بگویید، بعد ادامه بدهید.",
    micRetry: "میکروفون را دوباره امتحان کنید",
    micFailed: "میکروفون کار نکرد. آن را بلند بگویید، بعد ادامه بدهید.",
    micRefused: "برنامه اجازه ندارد از میکروفون شما استفاده کند. می‌توانید آن را روشن کنید.", // nieuw, nalezen // nagelezen AI 28 nov
    micTurnOn: "میکروفون را روشن کنید", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsIos: "در نوار آدرس روی «•••» یا «aA» بزنید › تنظیمات وب‌سایت › میکروفون › اجازه. یا: تنظیمات › برنامه‌ها › Safari › میکروفون. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsIosOther: "روی نماد سمت چپ آدرس وب بزنید › مجوزها › میکروفون › اجازه دادن. یا: تنظیمات › برنامه‌ها › {app} › میکروفون. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsAndroid: "روی نماد سمت چپ آدرس وب بزنید › مجوزها › میکروفون › اجازه دادن. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsAndroidApp: "نماد Vloertaal را در صفحهٔ اصلی نگه دارید › اطلاعات برنامه › مجوزها › میکروفون › اجازه دادن. بعد دکمهٔ پایین را بزنید.", // nieuw, nalezen // nagelezen AI 28 nov
    micStepsDesktop: "روی نماد سمت چپ آدرس وب کلیک کنید › میکروفون › اجازه دادن. بعد روی دکمهٔ پایین کلیک کنید.", // nieuw, nalezen // nagelezen AI 28 nov
    whichPicture: "کدام تصویر است؟",
    sayAloudInstead: "به‌جایش بلند بگویید",
    wordsPractised: "کلمه‌های تمرین‌شده",
    reviewComplete: "مرور تمام شد!",
  },
  gloss: {
    'c.hello.a.why': "به خداحافظی با خداحافظی جواب می‌دهند.",
    'c.people.a.why': "سؤال اسم را می‌پرسد. این جواب یک اسم می‌گوید.",
    'c.arrive.a.why': "سؤال این است که برای چه آمده. این جواب می‌گوید: تازه‌وارد است و امروز شروع می‌کند.",
    'c.understand.a.why': "متوجه نشدی؟ خواستن تکرار عادی است.",
    'c.translate.a.why': "یادداشت هنوز روشن نیست، پس اول ترجمه می‌شود.",
    'c.understood.a.why': "با دوباره گفتنِ کار، معلوم می‌شود که ترتیب کارها درست فهمیده شده یا نه.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.keeplearning.a.why': "خواستن هلندی اشکالی ندارد: تمرین کمک می‌کند.",
    'c.gear.a.why': "سؤال درباره کلاه ایمنی است: بله، روی سر است.",
    'c.danger.a.why': "در حادثه اول به ۱۱۲ زنگ می‌زنند.",
    'c.alarm.a.why': "پرسیده‌اند همه بیرون آمده‌اند یا نه: این جواب می‌گوید چه کسی هنوز نیامده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "پرسیده‌اند چه اتفاقی افتاده: این جواب می‌گوید چه شده و حالش چطور است.",
    'c.notyet.a.why': "وقتی می‌گویند «فقط امتحان کن»، جواب ایمن این است که اول بخواهی نشانت بدهند.",
    'c.things.a.why': "سؤال «کجا» است. این جواب یک جا را می‌گوید.",
    'c.directions.a.why': "چپ یا راست؟ این جواب یکی را انتخاب می‌کند و می‌گوید کجا.",
    'c.shift.a.why': "شیفت کی شروع می‌شود؟ این جواب روز و ساعت را می‌گوید.",
    'c.sick.a.why': "بیماری یعنی در خانه ماندن و خبر دادن.",
    'd.speakup.a.why': "وقتی می‌پرسند مشکلی هست، یک «بله»ی صادقانه خوب است.",
    'd.agree.a.why': "نه گفتن مجاز است. پیشنهاد روز دیگر کمک می‌کند.",
    'd.task.a.why': "می‌پرسند کار تمام شده یا نه: این جواب می‌گوید «تقریباً» و چقدر دیگر مانده.",
    'd.clear.a.why': "می‌پرسند روشن است یا نه: اول «بله»، بعد همان یک سؤال.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "معرّف، رئیس قبلی است که می‌تواند درباره کار بگوید.",
    'c.interview.a.why': "در مصاحبه کاری، تجربه کاری مهم است.",
    'c.findwork.a.why': "سؤال نوع کار را می‌پرسد. این جواب آن را می‌گوید.",
    'c.contract.a.why': "«بله» همراه سؤال درباره ساعت، روشن و مشتاقانه است.",
    'c.agency.a.why': "سؤال دربارهٔ ساعت‌هاست: بله، و می‌گوید کی و چطور.",
    'c.bsn.a.why': "کارفرما می‌تواند بخواهد مدرک شناسایی‌ات، مثلاً پاسپورت، را ببیند.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.housing.a.why': "پولی که از حقوق کم می‌شود باید روی کاغذ توافق شود.",
    'c.payslip.a.why': "ساعت‌های جاافتاده در فیش حقوقی باید گزارش شود.",
    'c.extra.a.why': "اضافه‌کاری یادداشت می‌شود تا بتوان آن را در فیش حقوقی بررسی کرد.",
    'c.phone.a.why': "گوشی کنار دستگاه نه: پیام‌ها تا وقت استراحت صبر می‌کنند.",
    'c.smoking.a.why': "استراحت‌ها ساعت مشخصی دارند، نه زودتر.",
    'c.clock.a.why': "ثبت ورود به جای کس دیگر مجاز نیست.",
    'c.hygiene.a.why': "تور مو روی سر، زیورآلات درآورده: قانون‌های بهداشت غذا.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.smalltalk.a.why': "سؤال درباره آخر هفته است: یک چیز کافی است.",
    'c.mistakes.a.why': "به تعریف با تشکر جواب می‌دهند.",
    'c.respect.a.why': "اذیت و قلدری باید گفته شود تا کسی بتواند کمک کند.",
    'c.gossip.a.why': "شرکت نکردن در غیبت، اعتماد را در تیم نگه می‌دارد.",
    'c.boundaries.a.why': "شوخی‌ای را که آزار می‌دهد، می‌شود واضح متوقف کرد.",
    'c.health.a.why': "استراحت از سلامت محافظت می‌کند، برای همین باید استراحت کرد.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.rights.a.why': "برگه اخراج هرگز فوراً امضا نمی‌شود. اول مشورت.",
    'c.mustmay.a.why': "اختیاری یعنی می‌توانی انتخاب کنی: کار در روز شنبه لازم نیست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "کی؟ این جواب ماه و مدت را می‌گوید.",
    'c.illness.a.why': "جزئیات پزشکی برای پزشک شرکت است، نه برای رئیس.",
    'c.warning.a.why': "کارفرما می‌تواند از پاسپورت کپی بگیرد، نه این‌که آن را نگه دارد.",
    'c.gethelp.a.why': "گفتن روشنِ مشکل به آن‌ها امکان کمک می‌دهد.",
    'c.callin.a.why': "زمان برگشت؟ این جواب یک روز را می‌گوید.",
    'c.texting.a.why': "جواب سریع در اپ به برنامه‌ریزی کمک می‌کند.",
    'c.certs.a.why': "یک «نه»ی صادقانه همراه با میل به یادگیری: جواب خوبی است.",
    'c.diploma.a.why': "«بله» به آموزش و پرسیدن این‌که چه کسی پول می‌دهد، عادی است.",
    'c.doctor.a.why': "پزشک کشیک باید بداند چه کسی بیمار است و چه مشکلی دارد.",
    'c.insurance.a.why': "نام بیمه روی کارت بیمه درمانی است.",
    'c.letters.a.why': "اظهارنامهٔ مالیاتی باید تا ۱ مه داده شود.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.scams.a.why': "بانک هرگز رمز کارت را نمی‌پرسد. قطع کردن تلفن درست است.",
    'c.bike.a.why': "چطور؟ این جواب وسیله و زمان را می‌گوید.",
    'c.transit.a.why': "نه قطار: این جواب اتوبوس را می‌گوید.",
    'c.ww.a.why': "بیمه بیکاری (WW) را باید فوراً درخواست کرد.",
    'c.newjob.a.why': "شماره تلفن به آن‌ها امکان می‌دهد دوباره زنگ بزنند.",
    'c.tools.a.why': "کجا؟ این جواب جا را می‌گوید: در ون.",
    'c.site.a.why': "روی سقف، وسیلهٔ ضد سقوط همیشه اول است.",
    'c.line.a.why': "چطور پیش می‌رود؟ این جواب می‌گوید چطور و مشکل را نام می‌برد.",
    'c.quality.a.why': "چرا کنار گذاشته شده؟ این جواب ایراد را می‌گوید.",
    'c.client.a.why': "مراجع کمک می‌خواهد: یک «بله»ی مؤدبانه، با «u».",
    'c.privacy.a.why': "داروها برای کارکنان آموزش‌دیده است: پرستار آن‌ها را می‌دهد.",
    'c.kitchen.a.why': "حساسیت غذایی جدی است: سرآشپز باید بداند.",
    'c.service.a.why': "صورت‌حساب خواستند: یک «بله»ی کوتاه و «الان می‌آیم».",
    'c.cleaning.a.why': "تمام شد؟ این جواب می‌گوید تقریباً، و چند تا مانده.",
    'c.cleansafe.a.why': "زمین خیس لیز است: هشدار کمک می‌کند.",
    'c.shelves.a.why': "سؤال «کجا» است. این جواب راهرو را می‌گوید و کمک هم می‌کند.",
    'c.checkout.a.why': "سؤال دربارهٔ پرداخت با کارت است: یک «بله» کوتاه و دوستانه.",
    'c.counting.a.why': "پرسیده‌اند چند تا: این جواب عدد را می‌گوید و آن را رقم به رقم چک می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "سؤال دربارهٔ ساعت است. این جواب یک ساعت را می‌گوید.",
    'c.measures.a.why': "سؤال دربارهٔ طول است. این جواب یک طول را می‌گوید.",
    'c.aihelp.a.why': "می‌پرسند چه کسی نوشته: یک «بله» صادقانه که کمک را هم می‌گوید.",
    'c.aiprivate.a.why': "می‌خواهند اسم‌ها را در چت‌بات بگذاری: این جواب «نه» می‌گوید و دلیلش را.",
    'c.aifake.a.why': "یک شمارهٔ جدید پول می‌خواهد: این جواب اول بررسی می‌کند.",
    'c.aiplan.a.why': "برنامهٔ کاری را اپ ساخته: این جواب یک آدم می‌خواهد.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "می‌پرسند چند ردیف: این جواب یک عدد می‌گوید، و اینکه چقدر مانده.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "تازه سم‌پاشی شده: این جواب می‌گوید هنوز نه، و چرا.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "نام خانوادگی را می‌پرسند: این جواب آن را می‌گوید و پیشنهاد می‌کند هجی‌اش کند.", // nagelezen AI 22 nov
    'c.dates.a.why': "تاریخ را می‌پرسند: این جواب روز و تاریخ را می‌گوید.", // nagelezen AI 22 nov
    'c.permit.a.why': "«نه» گفتن با یک دلیل اشکالی ندارد. پیشنهاد یک روز دیگر کمک می‌کند.", // nagelezen AI 22 nov
    'c.kids.a.why': "می‌پرسند چرا: این جواب دلیل را می‌گوید، مهدکودک زنگ زده.", // nagelezen AI 22 nov
    'c.body.a.why': "می‌پرسند کجا درد می‌کند: این جواب جا و علت را می‌گوید.", // nagelezen AI 22 nov
    'c.jobends.a.why': "خانه به کار وابسته است: این جواب مهلت اطلاع قبلی را می‌پرسد.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "کلمه‌ای روشن نیست: پرسیدن پیش از شروع جواب درست است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "پرسیده‌اند همه‌چیز تمام است یا نه: این جواب می‌گوید چه چیزی تمام نشده، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "پرسیده‌اند چرا: این جواب دلیل را می‌گوید، چشم باید محافظت شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "کار روی لامپ: این جواب اول می‌پرسد برق قطع است یا نه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "خواسته‌اند لاستیک‌ها را عوض کند: یک بله، و سؤالی دربارهٔ جای لاستیک‌ها.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "کار اضافه: مشتری باید اول موافقت کند، پس این جواب از سرپرست می‌پرسد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "پرسیده‌اند کِی: این جواب روز را می‌گوید، و قرارداد اول است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "بازخورد هنوز روشن نیست: خواستن اینکه نشان بدهند جواب خوبی است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "دربارهٔ رأی دادن: یک بله، و دو چیزی که باید همراه برد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "پلیس مدرک شناسایی می‌خواهد: نشانش بده و بپرس چه شده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "پرسیده‌اند ورود کار می‌کند یا نه: این جواب نه می‌گوید، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "دربارهٔ لینک: یک بلهٔ صادقانه، و یک تماس با بخش IT.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "پرسیده‌اند نقطهٔ قوت چیست: این جواب یکی را با مثال می‌گوید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "پرسیده‌اند برنامه چیست: این جواب bbl را می‌گوید و معنایش را.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "پرسیده‌اند فرستاده شده یا نه: هنوز نه، اول بررسی می‌شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "پیشنهاد «بعداً بپرداز»: یک نهٔ مؤدبانه، با دلیل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "پیشنهاد قرص: یک نهٔ مؤدبانه، با دلیل.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.newcolleague.a.why': "«فکر کنم» یعنی هنوز مطمئن نیست: وقتی بخواهی نشان بدهد، معلوم می‌شود که درست کار می‌کند یا نه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "پرسیده‌اند چرا خط را تمیز می‌کنند: محصول بعدی آجیل ندارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "پرسیده‌اند بسته مال اوست یا نه: بله، و بعد امضا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "یک سرویس دیگر خواسته‌اند: نه، چون اول استراحت است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "پرسیده‌اند حالت چطور است: یک بلهٔ کوتاه، و اینکه آرام‌آرام پیش می‌روی.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "پرسیده‌اند حالت چطور است: یک «نه چندان» صادقانه اشکالی ندارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "پرسیده‌اند پهنا چقدر: یک عدد با واحدش، و نوشتن آن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "پرسیده‌اند چوب کجا برود: یک جا، و اینکه آن جا کجاست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "پرسیده‌اند چه اتفاقی افتاد: بله، و چه چیزی، و چه مدت.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "پرسیده‌اند حالش چطور است: چیزی که می‌بینی، و اینکه تازه است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "خواسته‌اند کسی را بلند کنی: تنهایی نه، اول بالابر.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "لیوان تمیز خواسته‌اند: بله، و اینکه کِی می‌رسد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "دستور سرآشپز: تکرارش می‌کنی، تا بداند شنیده‌ای.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "پرسیده‌اند دفتر تمیز شده یا نه: نه، با دلیل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "دربارهٔ یک دستمال پرسیده‌اند: نه، چون قرمز برای توالت است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "شیر خواسته‌اند: نه یک «نه»، بلکه نگاه کردن در انبار.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "مشتری عصبانی: کلمه‌های آرام، و یک همکار می‌آید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "پرسیده‌اند کدام را بچینند: رنگ نشان می‌دهد کدام رسیده است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "رعد و برق در راه است: دست کشیدن و داخل رفتن کار ایمن است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "پرسیده‌اند جا می‌رود یا نه: نه، و دوباره اندازه گرفتن قبل از زور زدن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "پرسیده‌اند می‌شود برداشت یا نه: هنوز نه، فلز داغ باید اول خنک شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "پرسیده‌اند چه می‌شنوی: کدام قطعه، و چه می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "پرسیده‌اند می‌شود کار را شروع کرد: هنوز نه، چون ماشین برقی است.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'd.explain.a.why': "پرسیده‌اند چه مشکلی هست: این جواب می‌گوید چه شده، و چه لازم است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "مطمئن نیستی شوخی است یا نه: پرسیدن بهتر از حدس زدن است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "پرسیده‌اند چرا تمام نشده: یک دلیل آرام، و اینکه اول چه کاری است.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "کسی کمی وقت می‌خواهد: یک بله، و یک سؤال تا بتواند تعریف کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "زنگ زدن بعد از یک تماس بی‌پاسخ: یک سلام، و اینکه چرا زنگ می‌زنی.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "پیشنهاد بازخورد: یک بله، و اینکه می‌خواهی کار را خوب انجام بدهی.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "پرسیده‌اند کارش چطور است: اول چیزی که خوب است، بعد چیزی که می‌تواند بهتر شود.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "پرسیده‌اند سؤالی هست: این جواب یک سؤال می‌پرسد، دربارهٔ برنامهٔ کاری.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "پرسیده‌اند کدام محل: راهرو و خانهٔ قفسه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "پرسیده‌اند پالت آماده است یا نه: نه، و اینکه هنوز چه لازم دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "پرسیده‌اند ون خوب است یا نه: نه، و اینکه چه چیزی خراب است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "پرسیده‌اند کجایی: جا، و اینکه چقدر دیر می‌رسی.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "پرسیده‌اند می‌دانی چطور یا نه: نه، هنوز نه، و روراست گفته شده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "پرسیده‌اند سؤالی داری یا نه: بله، و اول اینکه وقت هست یا نه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "پرسیده‌اند می‌توانی پیدایش کنی یا نه: نه، و خواهشِ نشان دادنش.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "خواسته‌اند چیزی را نگه دارد: بله، و می‌پرسد کجا بگذارد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "پرسیده‌اند در بسته است یا نه: نه، و الان آن را می‌بندد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "پرسیده‌اند پر شده یا نه: بله، و آن را خالی می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "خواسته‌اند الان انجامش بدهد: بله، و می‌پرسد بعدش چه.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "پرسیده‌اند همزن کجاست: یک جا، و چیزی که نزدیکش است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "پرسیده‌اند از کجا شروع کند: از وسط، روی خط وسط.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "پرسیده‌اند دیوار خشک شده یا نه: نه، و چقدر باید صبر کرد.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "پرسیده‌اند مربع است یا نه: نه، مستطیل، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "پرسیده‌اند چند درجه: عدد، و اینکه نصفِ چیست.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "پرسیده‌اند کف چقدر بزرگ است: حساب، و جواب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "پرسیده‌اند کدام قلم‌مو: پهن برای دیوار، کوچک برای گوشه‌ها.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "پرسیده‌اند می‌شود رنگ زد یا نه: نه، و اینکه اول چه کاری باید کرد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "پرسیده‌اند چند آجر مانده: یک پالت، و اینکه بس است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "پرسیده‌اند ردیف چقدر باید بلند باشد: جایی که می‌شود آن را دید.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "پرسیده‌اند کدام اره: ارهٔ پشت‌دار، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "پرسیده‌اند زاویه قائمه است یا نه: بله، و از کجا معلوم است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "پرسیده‌اند دریل کجاست: یک جا، و اینکه تقریباً پر است.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "پرسیده‌اند قفسه را چطور محکم کند: با چه چیزی، و چند تا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "پرسیده‌اند چرا می‌ایستد: حسگر، و چیزی که نمی‌بیند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "پرسیده‌اند هر چند وقت یک بار: ساعتی یک بار، و کجا باید نوشت.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "پرسیده‌اند در هر جعبه چند تا: عدد، و جایی که نوشته شده.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "پرسیده‌اند کی: روز هفته، و وقتش در آن روز.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "پرسیده‌اند کدام سیم کجا می‌رود: هر رنگ به همان رنگ.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "پرسیده‌اند اجازه دارد بازش کند یا نه: نه، و اینکه چه کسی این کار را می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "پرسیده‌اند هنوز نشت می‌کند یا نه: کمی، و کاری که برایش انجام می‌دهد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "پرسیده‌اند چرا تیز است: هنوز پلیسه دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "پرسیده‌اند کدام مرحله: شماره‌اش، و کجا باید نگاه کرد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "پرسیده‌اند چقدر سفت: تا وقتی آچار تق صدا بدهد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "پرسیده‌اند اجازه دارد آنجا بایستد یا نه: نه، هیچ‌وقت، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "پرسیده‌اند سالم است یا نه: نه، و چه ایرادی دارد.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "پرسیده‌اند چقدر عمیق: اندازه‌اش، و نه عمیق‌تر.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "پرسیده‌اند رسیده است یا نه: نه، زیادی سبز است، و چه باید کرد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "پرسیده‌اند چرا گرم است: پرده و دریچه‌ها بسته‌اند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "پرسیده‌اند اجازه دارد آن را بکشد یا نه: نه، و چرا کمک می‌کند.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "پرسیده‌اند باید عوض شوند یا نه: بله، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "پرسیده‌اند چقدر: چند لیتر، و طرز بررسی‌اش.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "پرسیده‌اند باید نو شود یا نه: بله، و چرا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "پرسیده‌اند چه کاری باید انجام شود: نگاه کردن به برگهٔ کار.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "پرسیده‌اند اجازه دارد آن را بردارد یا نه: بله، و اول چه باید کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pruning.a.why': "پرسیده‌اند کدام شاخه‌ها: فقط شاخه‌های خشک.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hedge.a.why': "پرسیده‌اند تا چه ارتفاعی: تا خط، نه پایین‌تر.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.chainsaw.a.why': "پرسیده‌اند اجازه دارد یا نه: هنوز نه، و اول چه می‌آید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.weeding.a.why': "پرسیده‌اند علف هرز است یا نه: نه، و با آن چه باید کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.planting.a.why': "پرسیده‌اند کجا می‌رود: جایش در باغچه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.roadside.a.why': "پرسیده‌اند می‌تواند رد شود یا نه: نه، صبر کن، و چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.litter.a.why': "یک ساکن می‌پرسد کی: نمی‌دانی، و چه کسی می‌داند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reception.a.why': "مهمانی قرار ملاقات دارد: یک لحظه، زنگ می‌زنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.visitors.a.why': "پرسیده‌اند کت کجا می‌رود: جایش، و اینکه کجاست.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mailroom.a.why': "پرسیده‌اند برای کیست: بخش، و طبقه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.meetingroom.a.why': "پرسیده‌اند ساعت چند: ساعتش، و چه کاری باید انجام شود.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.faults.a.why': "پرسیده‌اند چرا سرد است: چه چیزی خراب است، و کمک کی می‌آید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.repairs.a.why': "پرسیده‌اند بوق می‌زند یا نه: بله، و چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.moving.a.why': "پرسیده‌اند کجا می‌رود: اتاق، و کجا باید نگاه کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.closing.a.why': "پرسیده‌اند کسی داخل هست یا نه: نه، و الان چه کار می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.patrol.a.why': "پرسیده‌اند چیزی دیدی یا نه: بله، چه چیزی، و کجا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.access.a.why': "خواسته‌اند بدون کارت وارد شوند: ببخشید، بدون کارت نه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cameras.a.why': "پرسیده‌اند چه می‌بینی: چه کسی، کجا، و چه کار می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.report.a.why': "پرسیده‌اند چه چیزی در گزارش می‌آید: چه چیزی، کجا و کی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.evacuation.a.why': "پرسیده‌اند همه بیرون‌اند یا نه: نه، چند نفر نیستند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstaid.a.why': "پرسیده‌اند دستگاه AED کجاست: جایش، و چه چیزی کنارش است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shoplifting.a.why': "پرسیده‌اند اجازه دارد کیف را بگردد یا نه: نه، و چه کسی این کار را می‌کند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.aggression.a.why': "پرسیده‌اند چرا نه: دلیلش، آرام گفته‌شده.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hygienelock.a.why': "دربارهٔ ساعت پرسیده‌اند: نه، و قانونی که پشت آن است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.allergens.a.why': "پرسیده‌اند می‌تواند با هم برود یا نه: نه، و چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.coldroom.a.why': "پرسیده‌اند چرا بوق می‌زند: علتش، و چه باید کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.foreignbody.a.why': "پرسیده‌اند چه کار کند: به چه کسی نشانش بدهد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.cutting.a.why': "پرسیده‌اند چقدر: وزن، و کجا باید نگاه کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.labels.a.why': "پرسیده‌اند چه تاریخی: کی، و کجا باید نگاه کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.linecleaning.a.why': "پرسیده‌اند تمیز است یا نه: هنوز نه، و چه کاری مانده.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.haccp.a.why': "پرسیده‌اند چرا: تا بدانیم غذا سالم است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.binlorry.a.why': "پرسیده‌اند اجازه دارد پشت سوار شود یا نه: نه، و کجا باید سوار شد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.reversing.a.why': "کمک خواسته‌اند: بله، کجا می‌ایستی، و چه باید کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesorting.a.why': "پرسیده‌اند کجا می‌رود: سطل، و چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wastesafety.a.why': "پرسیده‌اند بعد از بریدگی چه کار کند: بشوید، و بگوید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.yard.a.why': "پرسیده‌اند کجا می‌رود: مخزن، و اینکه کجاست.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hazardous.a.why': "پرسیده‌اند داخلش چیست: نمی‌دانی، پس کنارش بگذار.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.baler.a.why': "پرسیده‌اند اجازه دارد نگاه کند یا نه: نه، و اول چه می‌آید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shovel.a.why': "پرسیده‌اند اجازه دارد رد شود یا نه: فقط وقتی راننده او را می‌بیند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.nappies.a.why': "پرسیده‌اند کی: ساعتش، و کجا نوشته شده.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mealtime.a.why': "پرسیده‌اند اجازه دارد بخورد یا نه: نه، چرا، و کجا باید نگاه کرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.naptime.a.why': "پرسیده‌اند خوابیده یا نه: بله، از کی، و اینکه سر می‌زنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.playtime.a.why': "پرسیده‌اند بچه اجازه دارد بازی کند یا نه: بله، کجا، و بعد چه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pickup.a.why': "پرسیده‌اند چه کسی می‌برد: آن آدم، و اینکه اسمش در فهرست است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.childsafety.a.why': "پرسیده‌اند زمین خورده یا نه: بله، چه شده، و به چه کسی زنگ می‌زنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.sickchild.a.why': "پرسیده‌اند حالش چطور است: چه می‌بینی، و چه کار می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.grouprules.a.why': "پرسیده‌اند اجازه دارد تنها برود یا نه: بله، ولی اول به یک همکار بگو.", // nieuw, nalezen // nagelezen AI 28 nov
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "پرسیده‌اند تمام شده یا نه: هنوز نه، و چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hotelroom.a.why': "پرسیده‌اند چند تا مانده: تعدادش، و کی تمام می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dosing.a.why': "گفته‌اند بیشتر بریز: نه، بیشتر بهتر نیست، و از چه استفاده می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.officenight.a.why': "پرسیده‌اند تنها کار می‌کنی یا نه: بله، و پیام می‌دهی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.knives.a.why': "خواسته‌اند ببُری: بله سرآشپز، و یک سؤال دربارهٔ اینکه چطور.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.rawcooked.a.why': "پرسیده‌اند بدون گلوتن است یا نه: مطمئن نیستی، پس فهرست را نگاه می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.pass.a.why': "پرسیده‌اند غذا کجاست: روی پاس، و الان می‌آوری‌اش.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.bill.a.why': "خواسته‌اند جدا حساب کنند: بله، و دستگاه کارت‌خوان را می‌آوری.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.washing.a.why': "مراجع می‌گوید نه: اشکالی ندارد، و چیز دیگری پیشنهاد می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.observing.a.why': "پرسیده‌اند چیز خاصی هست یا نه: بله، و دقیقاً چه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.homecare.a.why': "پرسیده‌اند کیست: سلام، اینکه کی هستی، و اجازه برای داخل آمدن.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.liftaids.a.why': "خواسته‌اند تنهایی انجامش بدهی: بله، با ملافهٔ لغزنده، و آن را می‌آوری.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.returns.a.why': "خواسته‌اند آن را پس بدهند: بله، و یک سؤال دربارهٔ رسید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.facing.a.why': "پرسیده‌اند کارت تمام شده یا نه: تقریباً، و چه چیزی مانده.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shrink.a.why': "خواسته‌اند در کیفت را نگاه کنند: بله، و رسید را نشان می‌دهی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shopclose.a.why': "خواسته‌اند بیایند داخل: ببخشید، بسته است، و کی دوباره باز می‌شود.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.hirer.a.why': "خواسته‌اند جای جدیدی شروع کنی: بله، و یک سؤال دربارهٔ ساعت.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.phases.a.why': "گفته‌اند کار تمام می‌شود: باشه، و کار دیگری می‌خواهی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.deductions.a.why': "از یک کسر خبر داده‌اند: می‌پرسی مجاز است یا نه، و پرس‌وجو می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.agencyhome.a.why': "گفته‌اند زود از خانه بروی: این زود است، و اول مشورت می‌گیری.", // nieuw, nalezen // nagelezen AI 28 nov
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "گفته‌اند برنامهٔ کاری عوض شده: باشه، و کدام روز.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.breaks.a.why': "دربارهٔ استراحت ناهار پرسیده‌اند: ساعتش، و چقدر طول می‌کشد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.wound.a.why': "نزدیک است غش کند: بگذار دراز بکشد، و کمک بیاور.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.callhelp.a.why': "پرسیده‌اند واکنش نشان می‌دهد یا نه: نه، واکنشی ندارد.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vacancy.a.why': "پرسیده‌اند چرا زنگ می‌زنی: آگهی استخدام، و آیا هنوز جای خالی هست؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.result.a.why': "جواب رد داده‌اند: یک جواب آرام، و می‌پرسی چرا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.residence.a.why': "گفته‌اند اجازه به‌زودی منقضی می‌شود: فوراً درخواست می‌دهی.", // nieuw, nalezen (AI-correctie 28 nov 2026)
    'c.newhome.a.why': "پرسیده‌اند کجا زندگی می‌کنی: یک خانهٔ جدید، و آدرس جدید.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.payparts.a.why': "شمارهٔ پرسنلی‌ات را پرسیده‌اند: جای آن در فیش حقوقی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.latepay.a.why': "گفته‌اند پول بعداً می‌آید: می‌خواهی آن را کتبی داشته باشی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.holiday.a.why': "خواسته‌اند ماه مه بروی: ترجیح می‌دهی ژوئیه بروی، و دلیلش را می‌گویی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.special.a.why': "دربارهٔ مرخصی تولد پرسیده‌اند: بله، و کی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.unwell.a.why': "پرسیده‌اند حالت خوب است: نه، و می‌توانی بروی خانه؟", // nieuw, nalezen // nagelezen AI 28 nov
    'c.injury.a.why': "اظهارنامه خواسته‌اند: بله، و یک کپی برای خودت.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.debt.a.why': "گفته‌اند تا صاف شدن بدهی بمانی: مجاز نیست، کمک بگیر.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.inspection.a.why': "پرسیده‌اند می‌خواهی حرف بزنی: بله، ولی نه جایی که رئیس بشنود.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.carpool.a.why': "پرسیده‌اند کی رانندگی می‌کند: تو، و کی دنبالشان می‌روی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.train.a.why': "پرسیده‌اند چرا دیر کردی: قطار، و پیام فرستادی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.checklist.a.why': "پرسیده‌اند چیزی یادت رفته: یک نگاه دیگر به فهرست.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.leavesite.a.why': "پرسیده‌اند نفر آخری: بله، همه‌چیز خاموش و در قفل.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stagedays.a.why': "پرسیده‌اند چرا نبودی: مریض بودی، و به هر دو زنگ زدی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.stageend.a.why': "دربارهٔ برنامه‌هایت پرسیده‌اند: اول مدرک، بعد کار.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.neighbours.a.why': "یک همسایهٔ جدید سلام می‌کند: از آشنایی خوشوقتی، و اسمت.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.join.a.why': "خواسته‌اند بیایی: بله، و می‌خواهی با معلم حرف بزنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.workphotos.a.why': "برای اینترنت عکس خواسته‌اند: یک «نه» مؤدبانه.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.device.a.why': "دربارهٔ یک اپ جدید پرسیده‌اند: اول از بخش IT بپرس.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "پرسیده‌اند یک تابلو یعنی چه: مواظب باش، و کدام تابلو است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.substances.a.why': "پرسیده‌اند سمی است یا نه: حدس نمی‌زنی، نگاه می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firefight.a.why': "گفته‌اند آتش گرفته: کوچک است، پس کپسول را می‌آوری.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.permitwork.a.why': "پرسیده‌اند چه کسی بیرون می‌ماند: تو، و وظیفه‌ات.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.vog.a.why': "دربارهٔ VOG تو پرسیده‌اند: هنوز نه، و منتظر چه هستی.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "دربارهٔ هشدار پرسیده‌اند: چه چیزی خیلی بالاست، و کجا.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.plantfault.a.why': "پرسیده‌اند می‌شود راه انداخت یا نه: نه، هنوز یک قفل رویش است.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.shiftwork.a.why': "پرسیده‌اند چه اتفاقی افتاده: خرابی، و اینکه کجا نوشته شده.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.heatdust.a.why': "دربارهٔ گوشی پرسیده‌اند: نه، به‌خاطر خطری که اینجا هست.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "گفته‌اند صورت‌حساب پرداخت نشده: بله، و قسط‌بندی می‌خواهی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.taxes.a.why': "گفته‌اند یک پاکت آبی آمده: ممنون، و فوراً بازش می‌کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.discrimination.a.why': "پرسیده‌اند حالت خوب است یا نه: نه، و گزارشش می‌دهی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.union.a.why': "پرسیده‌اند چرا عضوی: از تو دفاع می‌کنند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.kiln.a.why': "دربارهٔ جمع کردن خرده‌ها با دست پرسیده‌اند: نه، با جارو و خاک‌انداز.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.mixlab.a.why': "پرسیده‌اند بچ تأیید شده یا نه: هنوز نه، آزمایشگاه دارد آزمایشش می‌کند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.firstweeks.a.why': "دربارهٔ بازدید آشنایی پرسیده‌اند: تقریباً همه چیز، و یک سؤال.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.orderpick.a.why': "خواسته‌اند با ریچ‌تراک کار کنی: نه، برایش آموزش نداری.", // nieuw, nalezen // nagelezen AI 28 nov
    // four new lessons (27 November 2026).
    'd.appraisal.a.why': "دربارهٔ هدفت پرسیده‌اند: یک چیز روشن که می‌خواهی یاد بگیری.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.forms.a.why': "دربارهٔ فرم پرسیده‌اند: تقریباً، و کجا امضا کنی.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.voicemail.a.why': "اسم و شماره‌ات را خواسته‌اند: اسمت، و اینکه دوباره زنگ بزنند.", // nieuw, nalezen // nagelezen AI 28 nov
    'c.dentist.a.why': "دربارهٔ آخرین مراجعه‌ات پرسیده‌اند: کی، و یک معاینه می‌خواهی.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
