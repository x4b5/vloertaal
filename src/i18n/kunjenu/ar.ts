import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Arabic (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "ماذا أستطيع الآن؟", // nieuw, nalezen
    kunNote: "المستوى بجانب كل جملة إرشاد فقط، وليس مستوى رسميًا.", // nieuw, nalezen
    coachCanDo: "عدد جمل «أستطيع…» من المواضيع المنتهية", // nieuw, nalezen
    kunLuisteren: "الاستماع", // nieuw, nalezen
    kunSpreken: "التحدث", // nieuw, nalezen
    kunLezen: "القراءة", // nieuw, nalezen
    kunSchrijven: "الكتابة", // nieuw, nalezen
    kunGesprekken: "المحادثة", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "أستطيع أن أعرّف بنفسي لزميل في العمل.", // nieuw, nalezen
    'kjn.u.firstday.2': "أستطيع أن أسأل إلى من يجب أن أتوجه.", // nieuw, nalezen
    'kjn.u.help.1': "أستطيع أن أقول إنني لا أفهم.", // nieuw, nalezen
    'kjn.u.help.2': "أستطيع أن أطلب من شخص أن يتكلم ببطء أكثر.", // nieuw, nalezen
    'kjn.u.do.1': "أستطيع أن أفهم تعليمات قصيرة مثل «Zet het neer».", // nieuw, nalezen
    'kjn.u.do.2': "أستطيع أن أقول إنني انتهيت من مهمة.", // nieuw, nalezen
    'kjn.u.tools.1': "أستطيع أن أطلب من شخص أن يكتبه أو يريني إياه.", // nieuw, nalezen
    'kjn.u.tools.2': "أستطيع أن أكرر التعليمات لأتأكد من أنني فهمتها.", // nieuw, nalezen (AI-correctie 2 nov 2026)
    'kjn.u.tools.3': "أستطيع أن أقول إنني أريد التدرب على الهولندية.", // nieuw, nalezen
    'kjn.u.data.1': "أستطيع أن أتهجى اسمي.", // nieuw, nalezen
    'kjn.u.data.2': "أستطيع أن أقول في أي أيام أستطيع العمل.", // nieuw, nalezen
    'kjn.u.data.3': "أستطيع أن أفهم تاريخًا عندما أسمعه.", // nieuw, nalezen
    'kjn.u.sounds.1': "أستطيع أن أميز بين كلمات مثل man و maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "أستطيع أن أكرر جملًا قصيرة فيها أصوات صعبة.", // nieuw, nalezen
    'kjn.u.safety.1': "أستطيع أن أفهم تحذيرًا مثل «Pas op!».", // nieuw, nalezen
    'kjn.u.safety.2': "أستطيع أن أقول إنني لم أتعلم هذا الشيء بعد.", // nieuw, nalezen
    'kjn.u.emergency.1': "أستطيع أن أسأل أين طفاية الحريق.", // nieuw, nalezen
    'kjn.u.emergency.2': "أستطيع أن أبلغ عن حادث.", // nieuw, nalezen
    'kjn.u.apply.1': "أستطيع أن أقول ما هي خبرتي.", // nieuw, nalezen
    'kjn.u.apply.2': "أستطيع أن أتحدث عن نفسي في مقابلة عمل.", // nieuw, nalezen
    'kjn.u.contract.1': "أستطيع أن أسأل كم ساعة أعمل في الأسبوع.", // nieuw, nalezen
    'kjn.u.contract.2': "أستطيع أن أسأل هل عقدي مؤقت أم دائم.", // nieuw, nalezen
    'kjn.u.contract.3': "أستطيع أن أقول متى أستطيع العمل ومتى لا أستطيع.", // nieuw, nalezen
    'kjn.u.grow.1': "أستطيع أن أقول ما لدي من شهادات ودبلومات.", // nieuw, nalezen
    'kjn.u.grow.2': "أستطيع أن أقول ما أجيده.", // nieuw, nalezen
    'kjn.u.lost.1': "أستطيع أن أقول إن عقدي سينتهي.", // nieuw, nalezen
    'kjn.u.lost.2': "أستطيع أن أسأل هل سيُدفع لي بدل العطلة.", // nieuw, nalezen
    'kjn.u.stage.1': "أستطيع أن أسأل من هو مدرّبي في الشركة.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "أستطيع أن أطلب ملاحظات ومثالًا.", // nieuw, nalezen
    'kjn.u.time.1': "أستطيع أن أقول متى تبدأ نوبتي.", // nieuw, nalezen
    'kjn.u.time.2': "أستطيع أن أبلغ عن مرضي.", // nieuw, nalezen
    'kjn.u.pay.1': "أستطيع أن أقول إن قسيمة راتبي غير صحيحة.", // nieuw, nalezen
    'kjn.u.pay.2': "أستطيع أن أقرأ كلمات مثل bruto و netto.", // nieuw, nalezen
    'kjn.u.leave.1': "أستطيع أن أطلب إجازة.", // nieuw, nalezen
    'kjn.u.leave.2': "أستطيع أن أقول إن طفلي مريض.", // nieuw, nalezen (5 nov 2026: nieuwe zin; de oude staat nu bij kjn.u.sick.1)
    'kjn.u.sick.1': "أستطيع أن أبلغ عن مرضي وعن عودتي إلى العمل.", // nieuw, nalezen
    'kjn.u.sick.2': "أستطيع أن أقول ما لا أستطيع فعله بعد.", // nieuw, nalezen
    'kjn.u.sick.3': "أستطيع أن أقول إنني أعمل أنصاف أيام في البداية.", // nieuw, nalezen
    'kjn.u.contact.1': "أستطيع أن أتصل وأقول من أنا.", // nieuw, nalezen
    'kjn.u.contact.2': "أستطيع أن أطلب من شخص أن يعاود الاتصال بي.", // nieuw, nalezen
    'kjn.u.contact.3': "أستطيع أن أكتب رسالة قصيرة إلى العمل.", // nieuw, nalezen
    'kjn.u.house.1': "أستطيع أن أقرأ قواعد مثل «Roken verboden».", // nieuw, nalezen
    'kjn.u.house.2': "أستطيع أن أسأل أين يُسمح بالتدخين.", // nieuw, nalezen
    'kjn.u.house.3': "أستطيع أن أقول إن شيئًا غير مسموح.", // nieuw, nalezen
    'kjn.u.numbers.1': "أستطيع أن أفهم أوقاتًا مثل «kwart over vier».", // nieuw, nalezen
    'kjn.u.numbers.2': "أستطيع أن أقول كم سعر شيء أو كم وزنه.", // nieuw, nalezen
    'kjn.u.numbers.3': "أستطيع أن أميّز بين أعداد مثل 13 و30.", // nieuw, nalezen
    'kjn.u.shop.1': "أستطيع أن أسأل زبونًا هل يريد الدفع بالبطاقة.", // nieuw, nalezen
    'kjn.u.shop.2': "أستطيع أن أدل زبونًا على الطريق في المتجر.", // nieuw, nalezen
    'kjn.u.ai.1': "أستطيع أن أسأل هل الجواب صحيح.", // nieuw, nalezen
    'kjn.u.ai.2': "أستطيع أن أقول إنني أريد التحدث مع إنسان.", // nieuw, nalezen
    'kjn.u.finish.1': "أستطيع أن أسأل ما معنى كلمة في أمر العمل.", // nieuw, nalezen
    'kjn.u.finish.2': "أستطيع أن أقول ما الذي انتهى وما الذي لم ينتهِ.", // nieuw, nalezen
    'kjn.u.online.1': "أستطيع أن أقول إن كلمة المرور لا تعمل.", // nieuw, nalezen
    'kjn.u.online.2': "أستطيع أن أتعرف على بريد إلكتروني مشبوه.", // nieuw, nalezen
    'kjn.u.teamwork.1': "أستطيع أن أقول إن هناك شيئًا يزعجني.", // nieuw, nalezen
    'kjn.u.teamwork.2': "أستطيع أن أرفض العمل الإضافي بهدوء.", // nieuw, nalezen
    'kjn.u.teamwork.3': "أستطيع أن أسأل ماذا يجب أن أفعل أولاً.", // nieuw, nalezen
    'kjn.u.social.1': "أستطيع أن أدردش قليلًا في الاستراحة.", // nieuw, nalezen
    'kjn.u.social.2': "أستطيع أن أقول إنني ارتكبت خطأ.", // nieuw, nalezen
    'kjn.u.social.3': "أستطيع أن أقول إن شيئًا يتجاوز حدّي.", // nieuw, nalezen
    'kjn.u.sayings.1': "أستطيع أن أفهم بعض التعابير الشائعة.", // nieuw, nalezen
    'kjn.u.sayings.2': "أستطيع أن أقول إن شيئًا سهل جدًا (een eitje).", // nieuw, nalezen
    'kjn.u.rights.1': "أستطيع أن أقول إن من حقي أن آخذ استراحة.", // nieuw, nalezen
    'kjn.u.rights.2': "أستطيع أن أقول إنني أريد أن أقدّم شكوى.", // nieuw, nalezen
    'kjn.u.exploit.1': "أستطيع أن أقول إن جواز سفري يبقى معي.", // nieuw, nalezen
    'kjn.u.exploit.2': "أستطيع أن أسأل هل أستطيع أن أبلغ عن شيء بدون اسمي.", // nieuw, nalezen
    'kjn.u.papers.1': "أستطيع أن أقول إن عنواني تغيّر.", // nieuw, nalezen
    'kjn.u.papers.2': "أستطيع أن أسأل كم الإيجار.", // nieuw, nalezen
    'kjn.u.health.1': "أستطيع أن أقول أين أشعر بالألم.", // nieuw, nalezen
    'kjn.u.health.2': "أستطيع أن أطلب موعدًا مع طبيب العائلة.", // nieuw, nalezen
    'kjn.u.health.3': "أستطيع أن أقول إن العمل أصبح أكثر من طاقتي.", // nieuw, nalezen
    'kjn.u.money.1': "أستطيع أن أقول إنني لا أفهم رسالة.", // nieuw, nalezen
    'kjn.u.money.2': "أستطيع أن أقول لا لمحتال على الهاتف.", // nieuw, nalezen
    'kjn.u.travel.1': "أستطيع أن أقول كيف أذهب إلى عملي.", // nieuw, nalezen
    'kjn.u.travel.2': "أستطيع أن أسأل أين موقف الحافلة.", // nieuw, nalezen
    'kjn.u.society.1': "أستطيع أن أسأل هل يحق لي أن أصوّت.", // nieuw, nalezen
    'kjn.u.society.2': "أستطيع أن أقول إنني أريد أن أقدّم اعتراضًا.", // nieuw, nalezen
    'kjn.u.warehouse.1': "أستطيع أن أفهم تعليمات قصيرة في المستودع.", // nieuw, nalezen
    'kjn.u.warehouse.2': "أستطيع أن أقول أين يوجد شيء: على اليسار أم على اليمين.", // nieuw, nalezen
    'kjn.u.build.1': "أستطيع أن أفهم تحذيرًا في موقع البناء.", // nieuw, nalezen
    'kjn.u.build.2': "أستطيع أن أطلب أدوات.", // nieuw, nalezen
    'kjn.u.factory.1': "أستطيع أن أقول إن هناك عطلًا.", // nieuw, nalezen
    'kjn.u.factory.2': "أستطيع أن أقول ما المشكلة في منتج.", // nieuw, nalezen
    'kjn.u.factory.3': "أستطيع أن أبلغ أن عندي جرحاً صغيراً.", // nieuw, nalezen
    'kjn.u.care.1': "أستطيع أن أسأل المستفيد من الرعاية هل يمكنني مساعدته.", // nieuw, nalezen
    'kjn.u.care.2': "أستطيع أن أنقل شيئًا إلى الممرّضة.", // nieuw, nalezen
    'kjn.u.horeca.1': "أستطيع أن أسأل الضيوف ماذا يحبون أن يشربوا.", // nieuw, nalezen
    'kjn.u.horeca.2': "أستطيع أن أقول إنني سأسأل الطاهي.", // nieuw, nalezen
    'kjn.u.clean.1': "أستطيع أن أسأل أين أدوات التنظيف.", // nieuw, nalezen
    'kjn.u.clean.2': "أستطيع أن أنبّه شخصًا إلى أن الأرض زلقة.", // nieuw, nalezen
    'kjn.u.kas.1': "أستطيع أن أسأل في أي صف أبدأ.", // nieuw, nalezen
    'kjn.u.kas.2': "أستطيع أن أسأل هل رُشّت الدفيئة.", // nieuw, nalezen
    'kjn.u.tech.1': "أستطيع أن أسأل هل ما زالت هناك كهرباء.", // nieuw, nalezen
    'kjn.u.tech.2': "أستطيع أن أقول إن الكابل معطّل.", // nieuw, nalezen
    'kjn.u.garage.1': "أستطيع أن أقول إن الإطار مثقوب.", // nieuw, nalezen
    'kjn.u.garage.2': "أستطيع أن أقول إن الزبون يجب أن يوافق أولاً.", // nieuw, nalezen
    // Vervoer en bezorging (5 nov 2026)
    'kjn.u.delivery.1': "أستطيع أن أقول إن الزبون ليس في البيت.", // nieuw, nalezen
    'kjn.u.delivery.2': "أستطيع أن أطلب من الجيران أن يستلموا طرداً.", // nieuw, nalezen
    'kjn.u.delivery.3': "أستطيع أن أسأل من يقرّر مساري وأوقاتي.", // nieuw, nalezen
    'kjn.u.afbouw.1': "أستطيع أن أطلب المسطرين المسنّن أو المسطرين.", // nieuw, nalezen
    'kjn.u.afbouw.2': "أستطيع أن أسأل من أين أبدأ بالبلاط.", // nieuw, nalezen
    'kjn.u.afbouw.3': "أستطيع أن أقول إن الحائط لم يجفّ بعد.", // nieuw, nalezen
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'kjn.u.communicate.1': "أستطيع أن أشرح ما المشكلة.", // nieuw, nalezen
    'kjn.u.communicate.2': "أستطيع أن أقول ما سمعته.", // nieuw, nalezen
    'kjn.u.communicate.3': "أستطيع أن أطلب حديثاً في الوقت المناسب.", // nieuw, nalezen
    'kjn.u.feedback.1': "أستطيع أن أطلب مثالاً عندما أتلقى ملاحظات.", // nieuw, nalezen
    'kjn.u.feedback.2': "أستطيع أن أقول بلطف ما يمكن أن يكون أفضل.", // nieuw, nalezen
    'kjn.u.feedback.3': "أستطيع أن أطرح سؤالاً في اجتماع الفريق.", // nieuw, nalezen
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "أستطيع أن أطلب المنشار اليدوي أو المثقاب اللاسلكي.", // nieuw, nalezen
    'kjn.u.ruwbouw.2': "أستطيع أن أسأل كيف أثبّت لوحاً خشبياً.", // nieuw, nalezen
    'kjn.u.machines.1': "أستطيع أن أقول إن الغطاء الواقي مكسور.", // nieuw, nalezen
    'kjn.u.machines.2': "أستطيع أن أسأل كم مرة آخذ عيّنة.", // nieuw, nalezen
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "أستطيع أن أسأل هل يمكنني أن أفتح لوحة الكهرباء.", // nieuw, nalezen
    'kjn.u.install.2': "أستطيع أن أقول إن وصلة تسرّب.", // nieuw, nalezen
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "أستطيع أن أقول إن صندوق القطع شبه فارغ.", // nieuw, nalezen
    'kjn.u.montage.2': "أستطيع أن أسأل كم يجب أن يكون المسمار الملولب مشدوداً.", // nieuw, nalezen
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "أستطيع أن أقول إن على نبتة عفناً.", // nieuw, nalezen
    'kjn.u.kweek.2': "أستطيع أن أسأل هل حبة الطماطم ناضجة بما يكفي.", // nieuw, nalezen
    'kjn.u.carservice.1': "أستطيع أن أقول إن ضوء التحذير مضاء.", // nieuw, nalezen
    'kjn.u.carservice.2': "أستطيع أن أسأل كم من الزيت يجب أن يدخل.", // nieuw, nalezen
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "أستطيع أن أقول إن العشب مبلّل جداً.", // nieuw, nalezen
    'kjn.u.mowing.2': "أستطيع أن أسأل أيّ أغصان يجب أن تُقطع.", // nieuw, nalezen
    'kjn.u.planting.1': "أستطيع أن أقول إن هناك زجاجاً مكسوراً.", // nieuw, nalezen
    'kjn.u.planting.2': "أستطيع أن أسأل هل يُسمح لي أن أعبر الطريق.", // nieuw, nalezen
    'kjn.u.frontdesk.1': "أستطيع أن أرحّب بزائر وأساعده.", // nieuw, nalezen
    'kjn.u.frontdesk.2': "أستطيع أن أسأل لمن الطرد.", // nieuw, nalezen
    'kjn.u.maintenance.1': "أستطيع أن أبلّغ عن عطل.", // nieuw, nalezen
    'kjn.u.maintenance.2': "أستطيع أن أسأل إلى أين يجب أن يذهب مكتب.", // nieuw, nalezen
    'kjn.u.guarding.1': "أستطيع أن أطلب رؤية هوية شخص.", // nieuw, nalezen
    'kjn.u.guarding.2': "أستطيع أن أقول عبر جهاز اللاسلكي ما أراه.", // nieuw, nalezen
    'kjn.u.incidents.1': "أستطيع أن أتصل بـ112 وأقول ماذا حدث.", // nieuw, nalezen
    'kjn.u.incidents.2': "أستطيع أن أكلّم زبوناً غاضباً بهدوء.", // nieuw, nalezen
    'kjn.u.foodhygiene.1': "أستطيع أن أقول إن غرفة التبريد حارّة جداً.", // nieuw, nalezen
    'kjn.u.foodhygiene.2': "أستطيع أن أسأل هل فيه مكسّرات.", // nieuw, nalezen
    'kjn.u.foodline.1': "أستطيع أن أقول إن الملصق غير صحيح.", // nieuw, nalezen
    'kjn.u.foodline.2': "أستطيع أن أسأل كم يجب أن يكون في العلبة.", // nieuw, nalezen
    'kjn.u.collection.1': "أستطيع أن أساعد السائق في الرجوع إلى الخلف.", // nieuw, nalezen
    'kjn.u.collection.2': "أستطيع أن أقول إن حاوية النفايات ثقيلة جداً.", // nieuw, nalezen
    'kjn.u.recycling.1': "أستطيع أن أقول لزائر أين تذهب نفاياته.", // nieuw, nalezen
    'kjn.u.recycling.2': "أستطيع أن أقول إن المكبس عالق.", // nieuw, nalezen
    'kjn.u.toddlers.1': "أستطيع أن أقول إنني سأغيّر حفاض طفل.", // nieuw, nalezen
    'kjn.u.toddlers.2': "أستطيع أن أسأل هل نام الطفل.", // nieuw, nalezen
    'kjn.u.daycare.1': "أستطيع أن أخبر أحد الوالدين كيف كان اليوم.", // nieuw, nalezen
    'kjn.u.daycare.2': "أستطيع أن أسأل من سيأتي ليأخذ الطفل.", // nieuw, nalezen
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "أستطيع أن أسأل في أي مرحلة أنا.", // nieuw, nalezen
    'kjn.u.uitzend.2': "أستطيع أن أسأل لماذا يوجد خصم من أجري.", // nieuw, nalezen
    'kjn.u.housekeeping.1': "أستطيع أن أقول إن المرحاض مسدود.", // nieuw, nalezen
    'kjn.u.housekeeping.2': "أستطيع أن أسأل كم من المادة توضع في الدلو.", // nieuw, nalezen
    'kjn.u.cooking.1': "أستطيع أن أسأل الشيف كيف أقطّع شيئاً.", // nieuw, nalezen
    'kjn.u.cooking.2': "أستطيع أن أسأل ضيفاً هل يريد أن يدفع بشكل منفصل.", // nieuw, nalezen
    'kjn.u.carework.1': "أستطيع أن أسأل المستفيد من الرعاية ماذا يريد أن يلبس.", // nieuw, nalezen
    'kjn.u.carework.2': "أستطيع أن أخبر الممرّضة بما رأيته.", // nieuw, nalezen
    'kjn.u.shopfloor.1': "أستطيع أن أطلب الإيصال من العميل.", // nieuw, nalezen
    'kjn.u.shopfloor.2': "أستطيع أن أقول إن المتجر سيغلق قريباً.", // nieuw, nalezen
  },
};

export default t;
