import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Arabic (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of all eight themes. */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "ماذا أستطيع الآن؟", // nieuw, nalezen // nagelezen AI 28 nov
    kunNote: "المستوى بجانب كل جملة إرشاد فقط، وليس مستوى رسميًا.", // nieuw, nalezen // nagelezen AI 28 nov
    coachCanDo: "عدد جمل «أستطيع…» من المواضيع المنتهية", // nieuw, nalezen // nagelezen AI 28 nov
    kunLuisteren: "الاستماع", // nieuw, nalezen // nagelezen AI 28 nov
    kunSpreken: "التحدث", // nieuw, nalezen // nagelezen AI 28 nov
    kunLezen: "القراءة", // nieuw, nalezen // nagelezen AI 28 nov
    kunSchrijven: "الكتابة", // nieuw, nalezen // nagelezen AI 28 nov
    kunGesprekken: "المحادثة", // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    'kjn.u.firstday.1': "أستطيع أن أعرّف بنفسي لزميل في العمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.firstday.2': "أستطيع أن أسأل إلى من يجب أن أتوجه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.1': "أستطيع أن أقول إنني لا أفهم.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.help.2': "أستطيع أن أطلب من شخص أن يتكلم ببطء أكثر.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.1': "أستطيع أن أفهم تعليمات قصيرة مثل «Zet het neer».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.do.2': "أستطيع أن أقول إنني انتهيت من مهمة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.1': "أستطيع أن أطلب من شخص أن يكتبه أو يريني إياه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tools.2': "أستطيع أن أكرر التعليمات لأتأكد من أنني فهمتها.", // nieuw, nalezen (AI-correctie 2 nov 2026) // nagelezen AI 28 nov
    'kjn.u.tools.3': "أستطيع أن أقول إنني أريد التدرب على الهولندية.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.1': "أستطيع أن أتهجى اسمي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.2': "أستطيع أن أقول في أي أيام أستطيع العمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.data.3': "أستطيع أن أفهم تاريخًا عندما أسمعه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.1': "أستطيع أن أميز بين كلمات مثل man و maan.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sounds.2': "أستطيع أن أكرر جملًا قصيرة فيها أصوات صعبة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.1': "أستطيع أن أفهم تحذيرًا مثل «Pas op!».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safety.2': "أستطيع أن أقول إنني لم أتعلم هذا الشيء بعد.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.1': "أستطيع أن أسأل أين طفاية الحريق.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.emergency.2': "أستطيع أن أبلغ عن حادث.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.1': "أستطيع أن أقول ما هي خبرتي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.apply.2': "أستطيع أن أتحدث عن نفسي في مقابلة عمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.1': "أستطيع أن أسأل كم ساعة أعمل في الأسبوع.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.2': "أستطيع أن أسأل هل عقدي مؤقت أم دائم.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contract.3': "أستطيع أن أقول متى أستطيع العمل ومتى لا أستطيع.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.1': "أستطيع أن أقول ما لدي من شهادات ودبلومات.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.grow.2': "أستطيع أن أقول ما أجيده.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.1': "أستطيع أن أقول إن عقدي سينتهي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.lost.2': "أستطيع أن أسأل هل سيُدفع لي بدل العطلة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.stage.1': "أستطيع أن أسأل من هو مدرّبي في الشركة.", // nieuw, nalezen // nagelezen AI 31 okt
    'kjn.u.stage.2': "أستطيع أن أطلب ملاحظات ومثالًا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.1': "أستطيع أن أقول متى تبدأ نوبتي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.time.2': "أستطيع أن أبلغ عن مرضي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.1': "أستطيع أن أقول إن قسيمة راتبي غير صحيحة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.pay.2': "أستطيع أن أقرأ كلمات مثل bruto و netto.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.1': "أستطيع أن أطلب إجازة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.leave.2': "أستطيع أن أقول إن طفلي مريض.", // nieuw, nalezen (5 nov 2026: nieuwe zin; de oude staat nu bij kjn.u.sick.1) // nagelezen AI 28 nov
    'kjn.u.sick.1': "أستطيع أن أبلغ عن مرضي وعن عودتي إلى العمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.2': "أستطيع أن أقول ما لا أستطيع فعله بعد.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sick.3': "أستطيع أن أقول إنني أعمل أنصاف أيام في البداية.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.1': "أستطيع أن أتصل وأقول من أنا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.2': "أستطيع أن أطلب من شخص أن يعاود الاتصال بي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.contact.3': "أستطيع أن أكتب رسالة قصيرة إلى العمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.1': "أستطيع أن أقرأ قواعد مثل «Roken verboden».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.2': "أستطيع أن أسأل أين يُسمح بالتدخين.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.house.3': "أستطيع أن أقول إن شيئًا غير مسموح.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.1': "أستطيع أن أفهم أوقاتًا مثل «kwart over vier».", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.2': "أستطيع أن أقول كم سعر شيء أو كم وزنه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.numbers.3': "أستطيع أن أميّز بين أعداد مثل 13 و30.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.1': "أستطيع أن أسأل زبونًا هل يريد الدفع بالبطاقة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shop.2': "أستطيع أن أدل زبونًا على الطريق في المتجر.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.1': "أستطيع أن أسأل هل الجواب صحيح.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ai.2': "أستطيع أن أقول إنني أريد التحدث مع إنسان.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.1': "أستطيع أن أسأل ما معنى كلمة في أمر العمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.finish.2': "أستطيع أن أقول ما الذي انتهى وما الذي لم ينتهِ.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.1': "أستطيع أن أقول إن كلمة المرور لا تعمل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.online.2': "أستطيع أن أتعرف على بريد إلكتروني مشبوه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.1': "أستطيع أن أقول إن هناك شيئًا يزعجني.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.2': "أستطيع أن أرفض العمل الإضافي بهدوء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.teamwork.3': "أستطيع أن أسأل ماذا يجب أن أفعل أولاً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.1': "أستطيع أن أدردش قليلًا في الاستراحة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.2': "أستطيع أن أقول إنني ارتكبت خطأ.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.social.3': "أستطيع أن أقول إن شيئًا يتجاوز حدّي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.1': "أستطيع أن أفهم بعض التعابير الشائعة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.sayings.2': "أستطيع أن أقول إن شيئًا سهل جدًا (een eitje).", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.1': "أستطيع أن أقول إن من حقي أن آخذ استراحة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.2': "أستطيع أن أقول إنني أريد أن أقدّم شكوى.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.1': "أستطيع أن أقول إن جواز سفري يبقى معي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.exploit.2': "أستطيع أن أسأل هل أستطيع أن أبلغ عن شيء بدون اسمي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.1': "أستطيع أن أقول إن عنواني تغيّر.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.papers.2': "أستطيع أن أسأل كم الإيجار.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.1': "أستطيع أن أقول أين أشعر بالألم.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.2': "أستطيع أن أطلب موعدًا مع طبيب العائلة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.health.3': "أستطيع أن أقول إن العمل أصبح أكثر من طاقتي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.1': "أستطيع أن أقول إنني لا أفهم رسالة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.2': "أستطيع أن أقول لا لمحتال على الهاتف.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.1': "أستطيع أن أقول كيف أذهب إلى عملي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.travel.2': "أستطيع أن أسأل أين موقف الحافلة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.1': "أستطيع أن أسأل هل يحق لي أن أصوّت.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.society.2': "أستطيع أن أقول إنني أريد أن أقدّم اعتراضًا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.1': "أستطيع أن أفهم تعليمات قصيرة في المستودع.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.2': "أستطيع أن أقول أين يوجد شيء: على اليسار أم على اليمين.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.1': "أستطيع أن أفهم تحذيرًا في موقع البناء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.build.2': "أستطيع أن أطلب أدوات.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.1': "أستطيع أن أقول إن هناك عطلًا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.2': "أستطيع أن أقول ما المشكلة في منتج.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.factory.3': "أستطيع أن أبلغ أن عندي جرحاً صغيراً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.1': "أستطيع أن أسأل المستفيد من الرعاية هل يمكنني مساعدته.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.care.2': "أستطيع أن أنقل شيئًا إلى الممرّضة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.1': "أستطيع أن أسأل الضيوف ماذا يحبون أن يشربوا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.horeca.2': "أستطيع أن أقول إنني سأسأل الطاهي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.1': "أستطيع أن أسأل أين أدوات التنظيف.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.clean.2': "أستطيع أن أنبّه شخصًا إلى أن الأرض زلقة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.1': "أستطيع أن أسأل في أي صف أبدأ.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kas.2': "أستطيع أن أسأل هل رُشّت الدفيئة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.1': "أستطيع أن أسأل هل ما زالت هناك كهرباء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.tech.2': "أستطيع أن أقول إن الكابل معطّل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.1': "أستطيع أن أقول إن الإطار مثقوب.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.garage.2': "أستطيع أن أقول إن الزبون يجب أن يوافق أولاً.", // nieuw, nalezen // nagelezen AI 28 nov
    // Vervoer en bezorging (5 nov 2026)
    'kjn.u.delivery.1': "أستطيع أن أقول إن الزبون ليس في البيت.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.2': "أستطيع أن أطلب من الجيران أن يستلموا طرداً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.delivery.3': "أستطيع أن أسأل من يقرّر مساري وأوقاتي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.1': "أستطيع أن أطلب المسطرين المسنّن أو المسطرين.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.2': "أستطيع أن أسأل من أين أبدأ بالبلاط.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.afbouw.3': "أستطيع أن أقول إن الحائط لم يجفّ بعد.", // nieuw, nalezen // nagelezen AI 28 nov
    // Goed communiceren en Feedback en overleg (5 nov 2026)
    'kjn.u.communicate.1': "أستطيع أن أشرح ما المشكلة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.2': "أستطيع أن أقول ما سمعته.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.communicate.3': "أستطيع أن أطلب حديثاً في الوقت المناسب.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.1': "أستطيع أن أطلب مثالاً عندما أتلقى ملاحظات.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.2': "أستطيع أن أقول بلطف ما يمكن أن يكون أفضل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.feedback.3': "أستطيع أن أطرح سؤالاً في اجتماع الفريق.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Metselen, hout en vastmaken" and "Machines en gereedschap" (20-21 November 2026).
    'kjn.u.ruwbouw.1': "أستطيع أن أطلب المنشار اليدوي أو المثقاب اللاسلكي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.ruwbouw.2': "أستطيع أن أسأل كيف أثبّت لوحاً خشبياً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.1': "أستطيع أن أقول إن الغطاء الواقي مكسور.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.machines.2': "أستطيع أن أسأل كم مرة آخذ عيّنة.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Elektra, leidingen en metaal" (21 November 2026).
    'kjn.u.install.1': "أستطيع أن أسأل هل يمكنني أن أفتح لوحة الكهرباء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.install.2': "أستطيع أن أقول إن وصلة تسرّب.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Assemblage en montage" (21 November 2026).
    'kjn.u.montage.1': "أستطيع أن أقول إن صندوق القطع شبه فارغ.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.montage.2': "أستطيع أن أسأل كم يجب أن يكون المسمار الملولب مشدوداً.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Kweken, sorteren en de kas" and "Banden, olie en remmen" (22 November 2026).
    'kjn.u.kweek.1': "أستطيع أن أقول إن على نبتة عفناً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.kweek.2': "أستطيع أن أسأل هل حبة الطماطم ناضجة بما يكفي.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.1': "أستطيع أن أقول إن ضوء التحذير مضاء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carservice.2': "أستطيع أن أسأل كم من الزيت يجب أن يدخل.", // nieuw, nalezen // nagelezen AI 28 nov
    // The new sectors (23 November 2026).
    'kjn.u.mowing.1': "أستطيع أن أقول إن العشب مبلّل جداً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.mowing.2': "أستطيع أن أسأل أيّ أغصان يجب أن تُقطع.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.1': "أستطيع أن أقول إن هناك زجاجاً مكسوراً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.planting.2': "أستطيع أن أسأل هل يُسمح لي أن أعبر الطريق.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.1': "أستطيع أن أرحّب بزائر وأساعده.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.frontdesk.2': "أستطيع أن أسأل لمن الطرد.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.1': "أستطيع أن أبلّغ عن عطل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.maintenance.2': "أستطيع أن أسأل إلى أين يجب أن يذهب مكتب.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.1': "أستطيع أن أطلب رؤية هوية شخص.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.guarding.2': "أستطيع أن أقول عبر جهاز اللاسلكي ما أراه.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.1': "أستطيع أن أتصل بـ112 وأقول ماذا حدث.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.incidents.2': "أستطيع أن أكلّم زبوناً غاضباً بهدوء.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.1': "أستطيع أن أقول إن غرفة التبريد حارّة جداً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodhygiene.2': "أستطيع أن أسأل هل فيه مكسّرات.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.1': "أستطيع أن أقول إن الملصق غير صحيح.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.foodline.2': "أستطيع أن أسأل كم يجب أن يكون في العلبة.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.1': "أستطيع أن أساعد السائق في الرجوع إلى الخلف.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.collection.2': "أستطيع أن أقول إن حاوية النفايات ثقيلة جداً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.1': "أستطيع أن أقول لزائر أين تذهب نفاياته.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.recycling.2': "أستطيع أن أقول إن المكبس عالق.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.1': "أستطيع أن أقول إنني سأغيّر حفاض طفل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.toddlers.2': "أستطيع أن أسأل هل نام الطفل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.1': "أستطيع أن أخبر أحد الوالدين كيف كان اليوم.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.daycare.2': "أستطيع أن أسأل من سيأتي ليأخذ الطفل.", // nieuw, nalezen // nagelezen AI 28 nov
    // Five new units (23 November 2026).
    'kjn.u.uitzend.1': "أستطيع أن أسأل في أي مرحلة أنا.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.uitzend.2': "أستطيع أن أسأل لماذا يوجد خصم من أجري.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.1': "أستطيع أن أقول إن المرحاض مسدود.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.housekeeping.2': "أستطيع أن أسأل كم من المادة توضع في الدلو.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.1': "أستطيع أن أسأل الشيف كيف أقطّع شيئاً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.cooking.2': "أستطيع أن أسأل ضيفاً هل يريد أن يدفع بشكل منفصل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.1': "أستطيع أن أسأل المستفيد من الرعاية ماذا يريد أن يلبس.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.carework.2': "أستطيع أن أخبر الممرّضة بما رأيته.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.1': "أستطيع أن أطلب الإيصال من العميل.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.shopfloor.2': "أستطيع أن أقول إن المتجر سيغلق قريباً.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Veiligheid op het werk" and the VOG (23 November 2026).
    'kjn.u.safework.1': "أستطيع أن أتعرّف على بعض الكلمات عن لافتات السلامة والحريق.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.safework.2': "أستطيع أن أسأل هل المادة سامّة.", // nieuw, nalezen // nagelezen AI 28 nov
    // "Operator in de procesindustrie" (23 November 2026).
    'kjn.u.process.1': "أستطيع أن أقول إن الضغط مرتفع جداً.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.2': "أستطيع أن أحكي عند التسليم ما الذي حدث.", // nieuw, nalezen // nagelezen AI 28 nov
    // eight new lessons (26 November 2026).
    'kjn.u.firstday.3': "أستطيع أن أطلب من شخص أن يريني الشيء مرة أخرى.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.rights.3': "أستطيع أن أقول إنني أُعامَل بشكل مختلف.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.money.3': "أستطيع أن أطلب خطة تقسيط.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.warehouse.3': "أستطيع أن أقول إنني لا أقود رافعة reachtruck بدون تدريب.", // nieuw, nalezen // nagelezen AI 28 nov
    'kjn.u.process.3': "أستطيع أن أسأل كم يجب أن نضع من مادة خام.", // nieuw, nalezen // nagelezen AI 28 nov
  },
};

export default t;
