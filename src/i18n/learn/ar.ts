import type { CultureTranslation } from '../culture/types';

/** Learning mechanics (G4 r1): speaking without a microphone, picture choice, build feedback, and why a chat reply fits (src/content/chatWhy.ts). */
const t: CultureTranslation = {
  ui: {
    sayAloud: { m: "لا حاجة للميكروفون. قلها بصوت عالٍ، ثم تابع.", f: "لا حاجة للميكروفون. قوليها بصوت عالٍ، ثم تابعي." },
    micRetry: { m: "جرّب الميكروفون مرة أخرى", f: "جرّبي الميكروفون مرة أخرى" },
    micFailed: { m: "لم يعمل الميكروفون. قلها بصوت عالٍ، ثم تابع.", f: "لم يعمل الميكروفون. قوليها بصوت عالٍ، ثم تابعي." },
    micRefused: { m: "لا يُسمح للتطبيق باستخدام الميكروفون. يمكنك تشغيله.", f: "لا يُسمح للتطبيق باستخدام الميكروفون. يمكنكِ تشغيله.", x: "لا يُسمح للتطبيق باستخدام الميكروفون. يمكن تشغيله." }, // nieuw, nalezen
    micTurnOn: { m: "شغّل الميكروفون", f: "شغّلي الميكروفون", x: "تشغيل الميكروفون" }, // nieuw, nalezen
    micStepsIos: { m: "اضغط على «•••» أو «aA» في شريط العنوان › إعدادات موقع الويب › الميكروفون › سماح. أو: الإعدادات › التطبيقات › Safari › الميكروفون. ثم اضغط على الزر في الأسفل.", f: "اضغطي على «•••» أو «aA» في شريط العنوان › إعدادات موقع الويب › الميكروفون › سماح. أو: الإعدادات › التطبيقات › Safari › الميكروفون. ثم اضغطي على الزر في الأسفل.", x: "الخطوات: «•••» أو «aA» في شريط العنوان › إعدادات موقع الويب › الميكروفون › سماح. أو: الإعدادات › التطبيقات › Safari › الميكروفون. ثم الزر في الأسفل." }, // nieuw, nalezen
    micStepsIosOther: { m: "اضغط على الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. أو: الإعدادات › التطبيقات › {app} › الميكروفون. ثم اضغط على الزر في الأسفل.", f: "اضغطي على الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. أو: الإعدادات › التطبيقات › {app} › الميكروفون. ثم اضغطي على الزر في الأسفل.", x: "الخطوات: الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. أو: الإعدادات › التطبيقات › {app} › الميكروفون. ثم الزر في الأسفل." }, // nieuw, nalezen
    micStepsAndroid: { m: "اضغط على الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. ثم اضغط على الزر في الأسفل.", f: "اضغطي على الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. ثم اضغطي على الزر في الأسفل.", x: "الخطوات: الرمز بجانب عنوان الموقع › الأذونات › الميكروفون › السماح. ثم الزر في الأسفل." }, // nieuw, nalezen
    micStepsAndroidApp: { m: "اضغط مطولاً على رمز Vloertaal في الشاشة الرئيسية › معلومات التطبيق › الأذونات › الميكروفون › السماح. ثم اضغط على الزر في الأسفل.", f: "اضغطي مطولاً على رمز Vloertaal في الشاشة الرئيسية › معلومات التطبيق › الأذونات › الميكروفون › السماح. ثم اضغطي على الزر في الأسفل.", x: "الخطوات: ضغط مطوّل على رمز Vloertaal في الشاشة الرئيسية › معلومات التطبيق › الأذونات › الميكروفون › السماح. ثم الزر في الأسفل." }, // nieuw, nalezen
    micStepsDesktop: { m: "انقر على الرمز بجانب عنوان الموقع › الميكروفون › السماح. ثم انقر على الزر في الأسفل.", f: "انقري على الرمز بجانب عنوان الموقع › الميكروفون › السماح. ثم انقري على الزر في الأسفل.", x: "الخطوات: الرمز بجانب عنوان الموقع › الميكروفون › السماح. ثم الزر في الأسفل." }, // nieuw, nalezen
    whichPicture: "أيّ صورة هي؟",
    sayAloudInstead: { m: "قلها بصوت عالٍ بدلاً من ذلك", f: "قوليها بصوت عالٍ بدلاً من ذلك" },
    wordsPractised: "كلمات تم التدرّب عليها",
    reviewComplete: "انتهت المراجعة!",
  },
  gloss: {
    'c.hello.a.why': "يُرَدّ على الوداع بالوداع.",
    'c.people.a.why': "السؤال عن الاسم. هذا الرد يذكر اسماً.",
    'c.arrive.a.why': "السؤال عن سبب المجيء. هذا الرد يقول إن اليوم أول يوم عمل.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.understand.a.why': "شيء غير مفهوم؟ طلب التكرار أمر عادي.",
    'c.translate.a.why': "الورقة غير واضحة بعد، لذلك تُترجم أولاً.",
    'c.understood.a.why': "بإعادة قول المهمة يُتأكَّد من أن التعليمات واضحة.",
    'c.keeplearning.a.why': "طلب الهولندية لا بأس به: التمرين يساعد.",
    'c.gear.a.why': "السؤال عن الخوذة: نعم، هي على الرأس.",
    'c.danger.a.why': "عند وقوع حادث يُتصل بالرقم 112 أولاً.",
    'c.alarm.a.why': "السؤال: هل خرج الجميع؟ هذا الرد يقول من لا يزال غائباً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.accident.a.why': "السؤال: ماذا حدث؟ هذا الرد يقول ما حدث وكيف حاله.",
    'c.notyet.a.why': "عند «جرّب فقط»، الرد الآمن هو طلبُ أن يُعرَض العمل أولاً.",
    'c.things.a.why': "السؤال «إلى أين». هذا الرد يذكر مكاناً.",
    'c.directions.a.why': "يسار أم يمين؟ هذا الرد يختار واحداً ويقول أين.",
    'c.shift.a.why': "متى تبدأ النوبة؟ هذا الرد يذكر اليوم والساعة.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.sick.a.why': "المرض يعني البقاء في البيت والإبلاغ بذلك.",
    'd.speakup.a.why': "عند السؤال إن كانت هناك مشكلة، فـ«نعم» الصادقة جيدة.",
    'd.agree.a.why': "الرفض مسموح. واقتراح يوم آخر يساعد.",
    'd.task.a.why': "عند السؤال إن كان العمل قد انتهى، يقول هذا الرد «تقريباً» وكم بقي.",
    'd.clear.a.why': "عند السؤال إن كان الأمر واضحاً: «نعم» أولاً، ثم السؤال الوحيد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.cv.a.why': "المرجع مدير سابق يستطيع أن يتحدث عن العمل.",
    'c.interview.a.why': "في مقابلة العمل، الخبرة في العمل هي المهمة.",
    'c.findwork.a.why': "السؤال عن نوع العمل. هذا الرد يذكره.",
    'c.contract.a.why': "«نعم» مع سؤال عن الوقت رد واضح ويدل على الحماس.",
    'c.agency.a.why': "السؤال عن الساعات: نعم، ومتى وكيف.",
    'c.bsn.a.why': "يجوز لصاحب العمل أن يطلب رؤية إثبات هوية مثل جواز السفر.",
    'c.housing.a.why': "المال المقتطع من الأجر يجب الاتفاق عليه كتابةً.",
    'c.payslip.a.why': "الساعات الناقصة في قسيمة الراتب يجب الإبلاغ عنها.",
    'c.extra.a.why': "العمل الإضافي يُسجَّل حتى يمكن التحقّق منه في قسيمة الراتب.",
    'c.phone.a.why': "لا هاتف قرب الآلات: الرسائل تنتظر الاستراحة.",
    'c.smoking.a.why': "الاستراحات في أوقات محددة، وليس قبلها.",
    'c.clock.a.why': "تسجيل الحضور نيابةً عن شخص آخر غير مسموح.",
    'c.hygiene.a.why': "شبكة الشعر على الرأس والحُليّ منزوعة: قواعد الطعام النظيف.",
    'c.smalltalk.a.why': "السؤال عن عطلة نهاية الأسبوع: شيء واحد يكفي.",
    'c.mistakes.a.why': "يُرَدّ على المديح بالشكر.",
    'c.respect.a.why': "يجب الإبلاغ عن التنمّر، حتى يستطيع أحد أن يساعد.",
    'c.gossip.a.why': "عدم المشاركة في النميمة يحفظ الثقة في الفريق.",
    'c.boundaries.a.why': "المزحة الجارحة يمكن إيقافها بوضوح.",
    'c.health.a.why': "الاستراحة تحمي الصحة، لذلك تُؤخذ.",
    'c.rights.a.why': "ورقة الفصل من العمل لا تُوقَّع فوراً أبداً. الاستشارة أولاً.",
    'c.mustmay.a.why': "اختياري يعني أن لك الخيار: العمل يوم السبت غير ضروري.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.leave.a.why': "متى؟ هذا الرد يذكر شهراً والمدة.",
    'c.illness.a.why': "التفاصيل الطبية لطبيب الشركة، لا للمدير.",
    'c.warning.a.why': "يجوز لصاحب العمل نسخ جواز السفر، لا الاحتفاظ به.",
    'c.gethelp.a.why': "قول المشكلة بوضوح يسمح لهم بالمساعدة.",
    'c.callin.a.why': "موعد العودة؟ هذا الرد يذكر يوماً.",
    'c.texting.a.why': "الرد السريع في التطبيق يساعد التخطيط.",
    'c.certs.a.why': "«لا» صادقة مع الرغبة في التعلّم: جواب جيد.",
    'c.diploma.a.why': "«نعم» للتدريب والسؤال عمّن يدفع أمر عادي.",
    'c.doctor.a.why': "خدمة طبيب العائلة تحتاج أن تعرف من المريض وما مشكلته.",
    'c.insurance.a.why': "اسم شركة التأمين مكتوب على بطاقة التأمين الصحي.",
    'c.letters.a.why': "التصريح الضريبي يُقدَّم حتى 1 مايو.",
    'c.scams.a.why': "البنك لا يطلب الرقم السري أبداً. إنهاء المكالمة هو الصواب.",
    'c.bike.a.why': "كيف؟ هذا الرد يذكر وسيلة النقل والوقت.",
    'c.transit.a.why': "ليس القطار: هذا الرد يذكر الحافلة.",
    'c.ww.a.why': "يجب طلب إعانة البطالة (WW) فوراً.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 22 nov
    'c.newjob.a.why': "رقم الهاتف يسمح لهم بمعاودة الاتصال.",
    'c.tools.a.why': "أين؟ هذا الرد يذكر المكان: في الشاحنة الصغيرة.",
    'c.site.a.why': "على السطح، معدات الحماية من السقوط تأتي أولاً دائماً.",
    'c.line.a.why': "كيف تسير الأمور؟ هذا الرد يقول كيف ويذكر المشكلة.",
    'c.quality.a.why': "لماذا وُضع جانباً؟ هذا الرد يذكر العيب.",
    'c.client.a.why': "المستفيد من الرعاية يطلب المساعدة: «نعم» مهذبة، مع «u».",
    'c.privacy.a.why': "الأدوية للموظفين المدرَّبين: الممرّضة تعطيها.",
    'c.kitchen.a.why': "الحساسية أمر خطير: يجب أن يعرف الطاهي.",
    'c.service.a.why': "طُلبت الفاتورة: موافقة قصيرة، ثم إحضارها.",
    'c.cleaning.a.why': "انتهى؟ هذا الرد يقول تقريباً، وكم بقي.",
    'c.cleansafe.a.why': "الأرضية المبللة زلقة: التحذير يساعد.",
    'c.shelves.a.why': "السؤال «أين». هذا الرد يذكر الممر ويعرض المساعدة.",
    'c.checkout.a.why': "السؤال عن الدفع بالبطاقة: «نعم» قصيرة ولطيفة.",
    'c.counting.a.why': "السؤال: كم؟ هذا الرد يعطي العدد، ويتحقق منه رقماً رقماً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.hours.a.why': "السؤال عن الوقت. هذا الرد يذكر وقتاً.",
    'c.measures.a.why': "السؤال عن الطول. هذا الرد يذكر طولاً.",
    'c.aihelp.a.why': "السؤال عمّن كتبه: «نعم» صادقة تذكر المساعدة.",
    'c.aiprivate.a.why': "يُطلب وضع أسماء في روبوت دردشة: هذا الرد يقول «لا» ويذكر السبب.",
    'c.aifake.a.why': "رقم جديد يطلب مالاً: هذا الرد يتحقق أولاً.",
    'c.aiplan.a.why': "التطبيق وضع جدول العمل: هذا الرد يطلب إنساناً.",
    // In de kas (u.kas, 30 okt 2026): nagelezen (2e lezing).
    'c.harvest.a.why': "السؤال عن عدد الصفوف: هذا الرد يعطي رقماً، وما بقي.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    'c.greensafe.a.why': "رُشّت للتو: هذا الرد يقول ليس بعد، ولماذا.", // nagelezen (2e lezing) // nagelezen AI 22 nov
    // nagelezen (2e lezing): why the chat replies of the new lessons fit (30 October 2026).
    'c.details.a.why': "السؤال عن اسم العائلة: هذا الرد يعطيه ويعرض تهجئته.", // nagelezen AI 22 nov
    'c.dates.a.why': "السؤال عن التاريخ: هذا الرد يعطي اليوم والتاريخ.", // nagelezen AI 22 nov
    'c.permit.a.why': "الرفض مع سبب أمر مقبول. اقتراح يوم آخر يساعد.", // nagelezen AI 22 nov
    'c.kids.a.why': "السؤال لماذا: هذا الرد يعطي السبب، الحضانة اتصلت.", // nagelezen AI 22 nov
    'c.body.a.why': "السؤال أين الألم: هذا الرد يذكر المكان والسبب.", // nagelezen AI 22 nov
    'c.jobends.a.why': "السكن مرتبط بالعمل: هذا الرد يسأل عن مدة الإشعار.", // nagelezen AI 22 nov
    // Entree in the Taal track (30 October 2026), why the chat replies fit: nieuw, nalezen.
    'c.workorder.a.why': "كلمة غير واضحة: السؤال قبل البدء هو الرد الصحيح.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handover.a.why': "السؤال هل انتهى كل شيء: هذا الرد يقول ما لم ينتهِ، ولماذا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.workshop.a.why': "السؤال لماذا: هذا الرد يذكر السبب، العين تحتاج إلى حماية.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.power.a.why': "عمل على مصباح: هذا الرد يسأل أولاً هل فُصلت الكهرباء.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.garage.a.why': "طلب تغيير الإطارات: نعم، وسؤال عن مكانها.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carjob.a.why': "عمل إضافي: يجب أن يوافق الزبون أولاً، لذلك هذا الرد يسأل المسؤول.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.placement.a.why': "السؤال متى: هذا الرد يذكر اليوم، والعقد يأتي أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.review.a.why': "الملاحظة غير واضحة بعد: طلب الشرح بالعرض رد جيد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.council.a.why': "السؤال عن التصويت: نعم، والشيئان اللازم أخذهما.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.police.a.why': "الشرطة تطلب الهوية: إظهارها والسؤال عمّا يحدث.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.login.a.why': "السؤال هل ينجح الدخول: هذا الرد يقول لا، ولماذا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.phish.a.why': "السؤال عن الرابط: نعم صادقة، واتصال بقسم تقنية المعلومات.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mychoice.a.why': "السؤال عن نقاط القوة: هذا الرد يذكر واحدة، مع مثال.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.nextstep.a.why': "السؤال عن الخطة: هذا الرد يذكر bbl ومعناها.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.email.a.why': "السؤال هل أُرسل: ليس بعد، يُراجَع أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.budget.a.why': "عرض «ادفع لاحقاً»: رفض مهذّب، مع السبب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.healthy.a.why': "عرض حبة: رفض مهذّب، مع السبب.", // nieuw, nalezen // nagelezen AI 22 nov
    // 5 nov 2026
    'd.newcolleague.a.why': "«أظن» يعني أنه ليس متأكداً بعد: طلب أن يُريك يتحقّق من أن الأمر يعمل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.food.a.why': "السؤال عن سبب تنظيف الخط: المنتج التالي بدون مكسّرات.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.parcel.a.why': "السؤال هل الطرد له: نعم، ثم التوقيع.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.road.a.why': "طلب جولة أخرى: لا، لأن الاستراحة أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.measure.a.why': "السؤال عن العرض: رقم مع وحدته، ومكتوب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.siteday.a.why': "السؤال أين يوضع الخشب: مكان، وأين هو.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shifts.a.why': "السؤال عمّا حدث: نعم، وماذا، ولأي مدة.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.signals.a.why': "السؤال عن حاله: هذا الرد يقول ما يُرى، وأن الأمر جديد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.transfer.a.why': "طلب رفع شخص: ليس بدون مساعدة، الرافعة أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.dishes.a.why': "السؤال عن كؤوس نظيفة: نعم، ومتى تأتي.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rush.a.why': "طلب من الشيف: تكراره يبيّن له أنه سُمع.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.rounds.a.why': "السؤال هل نُظّف المكتب: لا، مع السبب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.colours.a.why': "السؤال عن قطعة قماش: لا، لأن الحمراء للمرحاض.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shophelp.a.why': "السؤال عن الحليب: ليس «لا»، بل نظرة في المخزن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.shoptrouble.a.why': "زبون غاضب: كلمات هادئة، وزميل يأتي.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plantcare.a.why': "السؤال ماذا يُقطف: اللون يبيّن ما هو ناضج.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.outdoors.a.why': "عاصفة رعدية قادمة: التوقّف والدخول هو الاختيار الآمن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.drawing.a.why': "السؤال هل يناسب: لا، والقياس من جديد قبل استعمال القوة.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.weld.a.why': "السؤال هل يمكن أخذه: ليس بعد، المعدن الساخن يجب أن يبرد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carparts.a.why': "السؤال عمّا يُسمع: أي قطعة، وماذا تفعل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.carsafe.a.why': "السؤال عن بدء العمل: ليس بعد، لأن السيارة كهربائية.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.backtowork.a.why': "السؤال عن الحال: «نعم» قصيرة، وأخذ الأمور بهدوء.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.feelwell.a.why': "السؤال عن الحال: «ليس جيداً» بصدق أمر مقبول.", // nieuw, nalezen // nagelezen AI 22 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'd.explain.a.why': "السؤال عن المشكلة: هذا الرد يقول ما هي، وما المطلوب.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.listen.a.why': "عدم التأكد من المزحة: السؤال أفضل من التخمين.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.calm.a.why': "السؤال لماذا لم ينتهِ العمل: سبب هادئ، وما يأتي أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.talkintime.a.why': "شخص يطلب لحظة: «نعم»، وسؤال حتى يستطيع أن يحكي.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.reachable.a.why': "معاودة الاتصال بعد مكالمة فائتة: تحية، وسبب الاتصال.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.getfeedback.a.why': "عرض ملاحظات: «نعم»، والرغبة في أداء العمل جيداً.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.givefeedback.a.why': "السؤال عن العمل: أولاً ما هو جيد، ثم ما يمكن أن يكون أفضل.", // nieuw, nalezen // nagelezen AI 22 nov
    'd.meeting.a.why': "السؤال عن الأسئلة: هذا الرد يطرح سؤالاً، عن جدول العمل.", // nieuw, nalezen // nagelezen AI 22 nov
    // Logistiek at four lessons per unit (14 November 2026).
    'c.picking.a.why': "السؤال عن الموقع: الممر والخانة.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.loading.a.why': "السؤال هل المنصة جاهزة: لا، وما ينقصها بعد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.vancheck.a.why': "السؤال هل الشاحنة بخير: لا، وما هو المكسور.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.delay.a.why': "السؤال عن المكان: المكان، ومدة التأخير.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Hulp vragen" at four lessons (14 November 2026).
    'c.howto.a.why': "السؤال: هل الطريقة معروفة؟ هذا الرد يقول بصدق: لا، ليس بعد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.mayask.a.why': "السؤال: هل هناك سؤال؟ هذا الرد يقول نعم، ويسأل أولاً إن كان هناك وقت.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.whereis.a.why': "السؤال: هل يمكن إيجاده؟ هذا الرد يقول لا، ويطلب الإشارة إليه.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Instructies", a new basis unit (u.do, 14 November 2026).
    'c.putdown.a.why': "طلب الإمساك بشيء: نعم، وأين يوضع.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.onoff.a.why': "السؤال هل الباب مغلق: لا، وإغلاقه الآن.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fillempty.a.why': "السؤال هل صار ممتلئاً: نعم، وإفراغه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.order.a.why': "طلب فعله الآن: نعم، وماذا يأتي بعده.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Tegels, stuc en verf", a new sector unit of Bouw (u.afbouw, 20 November 2026).
    'c.tiletools.a.why': "السؤال أين الخلّاط: مكان، وما هو قريب منه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tiling.a.why': "السؤال من أين البداية: في الوسط، على الخط الأوسط.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.plaster.a.why': "السؤال هل جفّ الحائط: لا، وكم مدة الانتظار.", // nieuw, nalezen // nagelezen AI 22 nov
    // l.paint, l.prep, "Metselen, hout en vastmaken", three lessons of Rekenen and "Machines en gereedschap" (20-21 November 2026).
    'c.shapes.a.why': "السؤال هل هو مربّع: لا، مستطيل، ولماذا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.angles.a.why': "السؤال كم درجة: العدد، ونصف ماذا هو.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.size.a.why': "السؤال كم حجم الأرضية: الحساب، والجواب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.paint.a.why': "السؤال أيّ فرشاة: العريضة للحائط، والصغيرة للزوايا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.prep.a.why': "السؤال هل يمكن الطلاء: لا، وما الذي يأتي أولاً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brick.a.why': "السؤال كم طوبة بقيت: منصة خشبية واحدة، وأنها تكفي.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wall.a.why': "السؤال كم يجب أن يكون ارتفاع الصف: أين يمكن رؤية ذلك.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.wood.a.why': "السؤال أيّ منشار: منشار الظهر، ولماذا.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.square.a.why': "السؤال هل الزاوية قائمة: نعم، وكيف يُعرف ذلك.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.screw.a.why': "السؤال أين المثقاب: مكان، وأنه ممتلئ تقريباً.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fix.a.why': "السؤال كيف يُثبَّت الرفّ: بماذا، وكم.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.atmachine.a.why': "السؤال لماذا تتوقّف: الحسّاس، وما الذي لا يراه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.inspect.a.why': "السؤال كم مرة: مرة كل ساعة، وأين تُكتب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.packing.a.why': "السؤال كم في الصندوق: العدد، وأين هو مكتوب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.upkeep.a.why': "السؤال متى: يوم الأسبوع، والوقت في ذلك اليوم.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Elektra, leidingen en metaal" (u.install, 21 November 2026).
    'c.wiring.a.why': "السؤال أيّ سلك يذهب إلى أين: كل لون مع اللون نفسه.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.testing.a.why': "السؤال هل يُسمح بفتحها: لا، ومن يفعل ذلك.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pipes.a.why': "السؤال هل ما زالت تسرّب: قليلاً، وما العمل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.metalwork.a.why': "السؤال لماذا هي حادّة: ما زالت عليها زائدة حادّة.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Assemblage en montage" (u.montage, 21 November 2026).
    'c.assembly.a.why': "السؤال أيّ خطوة: الرقم، وأين يُنظر.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.fastening.a.why': "السؤال كم يُشدّ: حتى يُصدر المفتاح طقّته.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.handling.a.why': "السؤال هل يُسمح بالوقوف هناك: لا، أبداً، والسبب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.finalcheck.a.why': "السؤال هل هو جيد: لا، وما الخطأ فيه.", // nieuw, nalezen // nagelezen AI 22 nov
    // "Kweken, sorteren en de kas" (u.kweek) and "Banden, olie en remmen" (u.carservice), 22 November 2026.
    'c.sowing.a.why': "السؤال عن العمق: العمق، وليس أعمق.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.sorting.a.why': "السؤال هل هي ناضجة: لا، خضراء جداً، وما العمل.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.greenhouse.a.why': "السؤال لماذا الجو حار: الستارة والفتحات مغلقة.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.pests.a.why': "السؤال هل يُسمح بقتله: لا، ولماذا يساعد.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.tyres.a.why': "السؤال هل يجب نزعها: نعم، والسبب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.oilchange.a.why': "السؤال كم: اللترات، وطريقة الفحص.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.brakes.a.why': "السؤال هل يجب تغييره: نعم، والسبب.", // nieuw, nalezen // nagelezen AI 22 nov
    'c.diagnosis.a.why': "السؤال ماذا يجب أن يُعمل: النظر في أمر العمل.", // nieuw, nalezen // nagelezen AI 22 nov
    // The new sectors Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
    'c.mowing.a.why': "السؤال هل يُسمح بأخذها: نعم، وما الذي يأتي أولاً.", // nieuw, nalezen
    'c.pruning.a.why': "السؤال أيّ أغصان: الميتة فقط.", // nieuw, nalezen
    'c.hedge.a.why': "السؤال كم الارتفاع: حتى الخطّ، لا أقلّ.", // nieuw, nalezen
    'c.chainsaw.a.why': "السؤال هل يُسمح: ليس بعد، وما الذي يأتي أولاً.", // nieuw, nalezen
    'c.weeding.a.why': "السؤال هل هي عشبة ضارّة: لا، وماذا يُفعل بها.", // nieuw, nalezen
    'c.planting.a.why': "السؤال أين توضع: المكان في حوض الزهور.", // nieuw, nalezen
    'c.roadside.a.why': "السؤال هل يمكن العبور: لا، الانتظار، والسبب.", // nieuw, nalezen
    'c.litter.a.why': "ساكن يسأل متى: الجواب غير معروف، ومن يعرفه.", // nieuw, nalezen
    'c.reception.a.why': "زائر عنده موعد: لحظة، والاتصال به.", // nieuw, nalezen
    'c.visitors.a.why': "السؤال أين يوضع المعطف: المكان، وأين هو.", // nieuw, nalezen
    'c.mailroom.a.why': "السؤال لمن هو: القسم، والطابق.", // nieuw, nalezen
    'c.meetingroom.a.why': "السؤال في أي ساعة: الوقت، وما يجب عمله.", // nieuw, nalezen
    'c.faults.a.why': "السؤال لماذا الجو بارد: ما المعطّل، ومتى تأتي المساعدة.", // nieuw, nalezen
    'c.repairs.a.why': "السؤال هل يصفّر: نعم، والسبب.", // nieuw, nalezen
    'c.moving.a.why': "السؤال إلى أين يذهب: الغرفة، وأين يُنظر.", // nieuw, nalezen
    'c.closing.a.why': "السؤال هل بقي أحد في الداخل: لا، وما يحدث الآن.", // nieuw, nalezen
    'c.patrol.a.why': "السؤال هل كان هناك شيء: نعم، ماذا، وأين.", // nieuw, nalezen
    'c.access.a.why': "طلب الدخول بدون بطاقة: عذراً، ليس بدون بطاقة.", // nieuw, nalezen
    'c.cameras.a.why': "السؤال ماذا يظهر: من، وأين، وما العمل.", // nieuw, nalezen
    'c.report.a.why': "السؤال ماذا يكون في التقرير: ماذا، وأين، ومتى.", // nieuw, nalezen
    'c.evacuation.a.why': "السؤال هل الجميع في الخارج: لا، وكم شخصاً ناقصاً.", // nieuw, nalezen
    'c.firstaid.a.why': "السؤال أين جهاز AED: المكان، وما بجانبه.", // nieuw, nalezen
    'c.shoplifting.a.why': "السؤال هل يُسمح بتفتيش حقيبة: لا، ومن يفعل ذلك.", // nieuw, nalezen
    'c.aggression.a.why': "السؤال لماذا لا: السبب، بهدوء.", // nieuw, nalezen
    'c.hygienelock.a.why': "السؤال عن الساعة: لا، والقاعدة وراء ذلك.", // nieuw, nalezen
    'c.allergens.a.why': "السؤال هل يمكن وضعهما معاً: لا، والسبب.", // nieuw, nalezen
    'c.coldroom.a.why': "السؤال لماذا تصفّر: السبب، وما العمل.", // nieuw, nalezen
    'c.foreignbody.a.why': "السؤال ما العمل: لمن تُعرض.", // nieuw, nalezen
    'c.cutting.a.why': "السؤال كم: الوزن، وأين يُنظر.", // nieuw, nalezen
    'c.labels.a.why': "السؤال أي تاريخ: متى، وأين يُنظر.", // nieuw, nalezen
    'c.linecleaning.a.why': "السؤال هل هو نظيف: ليس بعد، وما الذي بقي.", // nieuw, nalezen
    'c.haccp.a.why': "السؤال لماذا: حتى نعرف أن الطعام آمن.", // nieuw, nalezen
    'c.binlorry.a.why': "السؤال هل يُسمح بالركوب في الخلف: لا، وأين يكون الركوب.", // nieuw, nalezen
    'c.reversing.a.why': "طلب المساعدة: نعم، مكان الوقوف، وما العمل.", // nieuw, nalezen
    'c.wastesorting.a.why': "السؤال أين تذهب: الحاوية، والسبب.", // nieuw, nalezen
    'c.wastesafety.a.why': "السؤال ما العمل بعد الجرح: الغسل، والإخبار.", // nieuw, nalezen
    'c.yard.a.why': "السؤال أين تذهب: الحاوية، وأين هي.", // nieuw, nalezen
    'c.hazardous.a.why': "السؤال ماذا في الداخل: غير معروف، لذلك توضع جانباً.", // nieuw, nalezen
    'c.baler.a.why': "السؤال هل يُسمح بالنظر: لا، وما الذي يأتي أولاً.", // nieuw, nalezen
    'c.shovel.a.why': "السؤال هل يُسمح بالمرور: فقط عندما يرى السائق المارّ.", // nieuw, nalezen
    'c.nappies.a.why': "السؤال متى: الوقت، وأين هو مكتوب.", // nieuw, nalezen
    'c.mealtime.a.why': "السؤال هل يُسمح له: لا، والسبب، وأين يُنظر.", // nieuw, nalezen
    'c.naptime.a.why': "السؤال هل نامت: نعم، منذ متى، وأن هناك نظرة أخرى.", // nieuw, nalezen
    'c.playtime.a.why': "طفل يسأل هل يُسمح له أن يلعب: نعم، أين، وماذا بعد ذلك.", // nieuw, nalezen
    'c.pickup.a.why': "السؤال من يأخذه: الشخص، وأن اسمها في القائمة.", // nieuw, nalezen
    'c.childsafety.a.why': "السؤال هل سقطت: نعم، ما عندها، وبمن يكون الاتصال.", // nieuw, nalezen
    'c.sickchild.a.why': "السؤال كيف حاله: ما يُرى، وما العمل.", // nieuw, nalezen
    'c.grouprules.a.why': "السؤال هل يُسمح بالخروج بشكل فردي: نعم، لكن بعد إخبار زميل.", // nieuw, nalezen
    // Second units for Schoonmaak, Horeca, Zorg and Winkel, and the uitzendbureau (23 November 2026).
    'c.sanitary.a.why': "السؤال هل انتهى العمل: ليس بعد، والسبب.", // nieuw, nalezen
    'c.hotelroom.a.why': "السؤال كم بقي: العدد، ومتى ينتهي العمل.", // nieuw, nalezen
    'c.dosing.a.why': "طلب وضع مادة أكثر: لا، الأكثر ليس أفضل، وما يُستعمل.", // nieuw, nalezen
    'c.officenight.a.why': "السؤال هل العمل بدون أحد آخر: نعم، وستُرسل رسالة.", // nieuw, nalezen
    'c.knives.a.why': "طلب التقطيع: نعم يا شيف، وسؤال عن الطريقة.", // nieuw, nalezen
    'c.rawcooked.a.why': "السؤال هل هي خالية من الغلوتين: لا يقين، لذلك النظر في القائمة.", // nieuw, nalezen
    'c.pass.a.why': "السؤال أين الطعام: على منضدة التقديم، وسيُحضر الآن.", // nieuw, nalezen
    'c.bill.a.why': "طلب الدفع بشكل منفصل: نعم، وإحضار جهاز الدفع.", // nieuw, nalezen
    'c.washing.a.why': "المستفيد من الرعاية يقول لا: لا بأس، وعرض شيء آخر.", // nieuw, nalezen
    'c.observing.a.why': "السؤال هل هناك شيء خاص: نعم، وما هو بالضبط.", // nieuw, nalezen
    'c.homecare.a.why': "السؤال من هناك: تحية، ومن القادم، وطلب الإذن بالدخول.", // nieuw, nalezen
    'c.liftaids.a.why': "طلب القيام بذلك بدون مساعدة: نعم، مع ملاءة الانزلاق، وإحضارها.", // nieuw, nalezen
    'c.returns.a.why': "طلب إرجاع منتج: نعم، وسؤال عن الإيصال.", // nieuw, nalezen
    'c.facing.a.why': "السؤال هل انتهى العمل: تقريباً، وما بقي.", // nieuw, nalezen
    'c.shrink.a.why': "طلب النظر في الحقيبة: نعم، وإظهار الإيصال.", // nieuw, nalezen
    'c.shopclose.a.why': "طلب الدخول: عذراً، مغلق، ومتى يفتح المتجر من جديد.", // nieuw, nalezen
    'c.hirer.a.why': "طلب البدء في مكان جديد: نعم، وسؤال عن الوقت.", // nieuw, nalezen
    'c.phases.a.why': "خبر توقّف العمل: حسناً، وطلب عمل آخر.", // nieuw, nalezen
    'c.deductions.a.why': "خبر عن خصم: السؤال هل هو مسموح، والتحقّق.", // nieuw, nalezen
    'c.agencyhome.a.why': "طلب المغادرة قريباً: هذا قصير، وطلب النصيحة أولاً.", // nieuw, nalezen
    // The basis units at four lessons (23 November 2026).
    'c.roster.a.why': "خبر تغيّر الجدول: حسناً، وأي يوم.", // nieuw, nalezen
    'c.breaks.a.why': "السؤال عن استراحة الغداء: الوقت، وكم تدوم.", // nieuw, nalezen
    'c.wound.a.why': "شخص سيُغمى عليه: جعله يستلقي، وإحضار المساعدة.", // nieuw, nalezen
    'c.callhelp.a.why': "السؤال هل يستجيب: لا، لا يتفاعل.", // nieuw, nalezen
    'c.vacancy.a.why': "السؤال عن سبب الاتصال: الوظيفة الشاغرة، وهل ما زالت متاحة؟", // nieuw, nalezen
    'c.result.a.why': "خبر الرفض: رد هادئ، وسؤال عن السبب.", // nieuw, nalezen
    'c.residence.a.why': "خبر قرب انتهاء التصريح: طلب تصريح جديد فوراً.", // nieuw, nalezen
    'c.newhome.a.why': "السؤال عن السكن: مسكن جديد، والعنوان الجديد.", // nieuw, nalezen
    'c.payparts.a.why': "السؤال عن الرقم الوظيفي: مكانه في قسيمة الراتب.", // nieuw, nalezen
    'c.latepay.a.why': "خبر أن المال يأتي لاحقاً: طلب ذلك على ورق.", // nieuw, nalezen
    'c.holiday.a.why': "طلب الإجازة في مايو: تفضيل يوليو، والسبب.", // nieuw, nalezen
    'c.special.a.why': "السؤال عن إجازة الولادة: نعم، ومتى.", // nieuw, nalezen
    'c.unwell.a.why': "السؤال عن الحال: لا، وطلب الذهاب إلى البيت.", // nieuw, nalezen
    'c.injury.a.why': "طلب إفادة: نعم، ونسخة شخصية.", // nieuw, nalezen
    'c.debt.a.why': "طلب البقاء حتى دفع الدَّين: غير مسموح، وطلب المساعدة.", // nieuw, nalezen
    'c.inspection.a.why': "عرض الكلام: نعم، لكن بعيداً عن سمع المدير.", // nieuw, nalezen
    'c.carpool.a.why': "السؤال عمّن يقود: أنا، ووقت المرور لأخذ الآخر.", // nieuw, nalezen
    'c.train.a.why': "السؤال عن سبب التأخير: القطار، ورسالة أُرسلت.", // nieuw, nalezen
    'c.checklist.a.why': "السؤال عن نسيان شيء: نظرة أخرى في القائمة.", // nieuw, nalezen
    'c.leavesite.a.why': "السؤال عن آخر من يغادر: نعم، كل شيء مطفأ والباب مقفل.", // nieuw, nalezen
    'c.stagedays.a.why': "السؤال عن سبب الغياب: مرض، واتصال بالجهتين.", // nieuw, nalezen
    'c.stageend.a.why': "السؤال عن الخطط: الشهادة أولاً، ثم العمل.", // nieuw, nalezen
    'c.neighbours.a.why': "جارة جديدة تسلّم: سعادة بالتعارف، وذكر الاسم.", // nieuw, nalezen
    'c.join.a.why': "السؤال عن الحضور: نعم، ورغبة في الكلام مع المعلّم.", // nieuw, nalezen
    'c.workphotos.a.why': "طلب صورة للإنترنت: رفض مهذّب.", // nieuw, nalezen
    'c.device.a.why': "السؤال عن تطبيق جديد: سؤال قسم تقنية المعلومات أولاً.", // nieuw, nalezen
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'c.safetysigns.a.why': "السؤال عن معنى لافتة: انتباه، ونوع اللافتة.", // nieuw, nalezen
    'c.substances.a.why': "السؤال هل هي سامّة: لا تخمين، بل بحث عن الجواب.", // nieuw, nalezen
    'c.firefight.a.why': "خبر عن حريق: إنه صغير، لذلك إحضار الطفاية.", // nieuw, nalezen
    'c.permitwork.a.why': "السؤال عمّن يبقى في الخارج: أنا، والمهمّة.", // nieuw, nalezen
    'c.vog.a.why': "السؤال عن VOG: ليس بعد، وما الذي يُنتظر.", // nieuw, nalezen
    // "Operator in de procesindustrie" (23 November 2026).
    'c.plantround.a.why': "السؤال عن الإنذار: ما المرتفع جداً، وأين.", // nieuw, nalezen
    'c.plantfault.a.why': "السؤال هل يمكن التشغيل: لا، ما زال عليه قفل.", // nieuw, nalezen
    'c.shiftwork.a.why': "السؤال عمّا حدث: العطل، وأين هو مكتوب.", // nieuw, nalezen
    'c.heatdust.a.why': "السؤال عن الهاتف: لا، بسبب الخطر هنا.", // nieuw, nalezen
    // eight new lessons (26 November 2026).
    'c.debthelp.a.why': "خبر أن الفاتورة لم تُدفع: نعم، وطلب خطة تقسيط.", // nieuw, nalezen
    'c.taxes.a.why': "خبر عن ظرف أزرق: شكر، وفتحه فوراً.", // nieuw, nalezen
    'c.discrimination.a.why': "السؤال عن الحال: لا، وسيتمّ التبليغ.", // nieuw, nalezen
    'c.union.a.why': "السؤال عن سبب العضوية: النقابة تدافع عن العضو.", // nieuw, nalezen
    'c.kiln.a.why': "السؤال عن التقاط الشظايا باليد: لا، بالفرشاة والمجرفة الصغيرة.", // nieuw, nalezen
    'c.mixlab.a.why': "السؤال هل تمّت الموافقة على الدفعة: ليس بعد، المختبر يفحصها.", // nieuw, nalezen
    'c.firstweeks.a.why': "السؤال عن الجولة التعريفية: تقريباً كل شيء، وسؤال واحد.", // nieuw, nalezen
    'c.orderpick.a.why': "طلب قيادة رافعة reachtruck: لا، لا تدريب عليها.", // nieuw, nalezen
  },
};

export default t;
