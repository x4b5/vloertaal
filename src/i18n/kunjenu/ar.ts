import type { CultureTranslation } from '../culture/types';

/** "Wat kun je nu?" in Arabic (src/content/kunJeNu.ts): the heading, the note, the coach card's line and
 *  the can-do sentences of the first four themes (TODO: the other four). */
const t: CultureTranslation = {
  ui: {
    kunJeNu: "ماذا أستطيع الآن؟", // nieuw, nalezen
    kunNote: "المستوى بجانب كل جملة إرشاد فقط، وليس مستوى رسميًا.", // nieuw, nalezen
    coachCanDo: "عدد جمل «أستطيع…» من المواضيع المنتهية", // nieuw, nalezen
  },
  gloss: {
    'kjn.u.firstday.1': "أستطيع أن أعرّف بنفسي لزميل في العمل.", // nieuw, nalezen
    'kjn.u.firstday.2': "أستطيع أن أسأل إلى من يجب أن أتوجه.", // nieuw, nalezen
    'kjn.u.help.1': "أستطيع أن أقول إنني لا أفهم.", // nieuw, nalezen
    'kjn.u.help.2': "أستطيع أن أطلب من شخص أن يتكلم ببطء أكثر.", // nieuw, nalezen
    'kjn.u.tools.1': "أستطيع أن أطلب من شخص أن يكتبه أو يريني إياه.", // nieuw, nalezen
    'kjn.u.tools.2': "أستطيع أن أكرر مهمة لأتأكد من أنني فهمتها.", // nieuw, nalezen
    'kjn.u.tools.3': "أستطيع أن أقول إنني أريد التدرب على الهولندية.", // nieuw, nalezen
    'kjn.u.data.1': "أستطيع أن أتهجى اسمي.", // nieuw, nalezen
    'kjn.u.data.2': "أستطيع أن أقول في أي أيام أستطيع العمل.", // nieuw, nalezen
    'kjn.u.data.3': "أستطيع أن أفهم تاريخًا عندما أسمعه.", // nieuw, nalezen
    'kjn.u.sounds.1': "أستطيع أن أميز بين كلمات مثل man و maan.", // nieuw, nalezen
    'kjn.u.sounds.2': "أستطيع أن أكرر جملًا قصيرة فيها أصوات صعبة.", // nieuw, nalezen
    'kjn.u.safety.1': "أستطيع أن أفهم تحذيرًا مثل «Pas op!».", // nieuw, nalezen
    'kjn.u.safety.2': "أستطيع أن أبلغ عن حادث.", // nieuw, nalezen
    'kjn.u.safety.3': "أستطيع أن أقول إنني لم أتعلم هذا الشيء بعد.", // nieuw, nalezen
    'kjn.u.apply.1': "أستطيع أن أقول ما هي خبرتي.", // nieuw, nalezen
    'kjn.u.apply.2': "أستطيع أن أتحدث عن نفسي في مقابلة عمل.", // nieuw, nalezen
    'kjn.u.contract.1': "أستطيع أن أسأل كم ساعة أعمل في الأسبوع.", // nieuw, nalezen
    'kjn.u.contract.2': "أستطيع أن أسأل هل عقدي مؤقت أم دائم.", // nieuw, nalezen
    'kjn.u.contract.3': "أستطيع أن أقول متى أستطيع العمل ومتى لا أستطيع.", // nieuw, nalezen
    'kjn.u.grow.1': "أستطيع أن أقول ما لدي من شهادات ودبلومات.", // nieuw, nalezen
    'kjn.u.grow.2': "أستطيع أن أقول ما أجيده.", // nieuw, nalezen
    'kjn.u.lost.1': "أستطيع أن أقول إن عقدي سينتهي.", // nieuw, nalezen
    'kjn.u.lost.2': "أستطيع أن أسأل هل سيُدفع لي بدل العطلة.", // nieuw, nalezen
    'kjn.u.stage.1': "أستطيع أن أسأل من هو مشرف تدريبي في الشركة.", // nieuw, nalezen
    'kjn.u.stage.2': "أستطيع أن أطلب ملاحظات ومثالًا.", // nieuw, nalezen
    'kjn.u.time.1': "أستطيع أن أقول متى تبدأ نوبتي.", // nieuw, nalezen
    'kjn.u.time.2': "أستطيع أن أبلغ عن مرضي.", // nieuw, nalezen
    'kjn.u.pay.1': "أستطيع أن أقول إن قسيمة راتبي غير صحيحة.", // nieuw, nalezen
    'kjn.u.pay.2': "أستطيع أن أقرأ كلمات مثل bruto و netto.", // nieuw, nalezen
    'kjn.u.leave.1': "أستطيع أن أطلب إجازة.", // nieuw, nalezen
    'kjn.u.leave.2': "أستطيع أن أبلغ عن مرضي وعن عودتي إلى العمل.", // nieuw, nalezen
    'kjn.u.contact.1': "أستطيع أن أتصل وأقول من أنا.", // nieuw, nalezen
    'kjn.u.contact.2': "أستطيع أن أطلب من شخص أن يعاود الاتصال بي.", // nieuw, nalezen
    'kjn.u.contact.3': "أستطيع أن أقرأ رسالة قصيرة من العمل.", // nieuw, nalezen
    'kjn.u.house.1': "أستطيع أن أقرأ قواعد مثل «Roken verboden».", // nieuw, nalezen
    'kjn.u.house.2': "أستطيع أن أسأل أين يُسمح بالتدخين.", // nieuw, nalezen
    'kjn.u.house.3': "أستطيع أن أقول إن شيئًا غير مسموح.", // nieuw, nalezen
    'kjn.u.numbers.1': "أستطيع أن أفهم أوقاتًا مثل «kwart over vier».", // nieuw, nalezen
    'kjn.u.numbers.2': "أستطيع أن أقول كم سعر شيء أو كم وزنه.", // nieuw, nalezen
    'kjn.u.shop.1': "أستطيع أن أسأل زبونًا هل يريد الدفع بالبطاقة.", // nieuw, nalezen
    'kjn.u.shop.2': "أستطيع أن أدل زبونًا على الطريق في المتجر.", // nieuw, nalezen
    'kjn.u.ai.1': "أستطيع أن أسأل هل الجواب صحيح.", // nieuw, nalezen
    'kjn.u.ai.2': "أستطيع أن أقول إنني أريد التحدث مع إنسان.", // nieuw, nalezen
    'kjn.u.finish.1': "أستطيع أن أسأل ما معنى كلمة في أمر العمل.", // nieuw, nalezen
    'kjn.u.finish.2': "أستطيع أن أقول ما الذي انتهى وما الذي لم ينتهِ.", // nieuw, nalezen
    'kjn.u.online.1': "أستطيع أن أقول إن كلمة المرور لا تعمل.", // nieuw, nalezen
    'kjn.u.online.2': "أستطيع أن أتعرف على بريد إلكتروني مشبوه.", // nieuw, nalezen
  },
};

export default t;
