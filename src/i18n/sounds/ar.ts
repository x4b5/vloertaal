import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'الأصوات الهولندية',
    'l.shortlong': 'a أو aa، ui أو ei',
    'w.kl.man': 'الرجل',
    'w.kl.maan': 'القمر',
    'w.kl.zak': 'الكيس',
    'w.kl.zaak': 'المحل',
    'w.kl.ui': 'البصلة',
    'w.kl.ei': 'البيضة',
    's.shortlong.1': 'الرجل ينظر إلى القمر.',
    's.shortlong.2': 'ضع البصل في الكيس.',
    's.shortlong.3': 'المحل يفتح في الساعة التاسعة.',
    'c.shortlong.q': { m: 'هل تريد بيضة؟', f: 'هل تريدين بيضة؟' },
    'c.shortlong.a': 'لا، شكراً. لقد أكلت.',
    'c.shortlong.a.why': 'عُرضت بيضة: رفض مهذب، مع سبب.',
    'l.roundsounds': 'uu و oe و eu',
    'w.kl.muur': 'الجدار',
    'w.kl.moer': 'الصامولة (للبرغي)',
    'w.kl.buur': 'الجار، الجارة',
    'w.kl.boer': 'المزارع',
    'w.kl.deur': 'الباب',
    'w.kl.duur': 'غالٍ',
    's.roundsounds.1': 'شدّ الصامولة جيداً.',
    's.roundsounds.2': 'أغلق الباب من فضلك.',
    's.roundsounds.3': 'هذا المعطف غالٍ أكثر من اللازم.',
    'c.roundsounds.q': 'هل الباب مفتوح؟',
    'c.roundsounds.a': 'لا، إنه مغلق.',
    'c.roundsounds.a.why': 'السؤال: هل الباب مفتوح؟ هذا الرد يقول: لا.',
    'l.pbgk': "p أو b، g، k أو h", // nagelezen (2e lezing)
    'w.kl.pak': 'البدلة',
    'w.kl.bak': 'الصندوق، السلة',
    'w.kl.goud': 'الذهب',
    'w.kl.koud': 'بارد',
    'w.kl.hoed': 'القبعة',
    'w.kl.goed': 'جيد',
    's.pbgk.1': 'ارمِ القمامة في السلة.',
    's.pbgk.2': 'الجو بارد في الممر.',
    's.pbgk.3': { m: 'أنت تعمل بشكل جيد!', f: 'أنتِ تعملين بشكل جيد!' },
    'c.pbgk.q': 'كيف حالك؟',
    'c.pbgk.a': 'بخير، لكنني أشعر بالبرد.',
    'c.pbgk.a.why': 'السؤال عن الحال: جواب، ثم وصف الشعور.', // nieuw, nalezen (AI-correctie 2 nov 2026)
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'الفم مفتوح، أقلّ قليلًا من «aa». اللسان إلى الخلف. الصوت قصير.', // nieuw, nalezen
    'k.uitleg.aa': 'الفم مفتوح على وسعه. الشفتان مرتخيتان. اللسان منخفض ومسطّح.', // nieuw, nalezen
    'k.uitleg.e': 'الفم نصف مفتوح، أكثر من «ee». الشفتان مرتخيتان. الصوت قصير.', // nieuw, nalezen
    'k.uitleg.ee': 'الفم نصف مفتوح. الشفتان ممدودتان كما في الابتسامة. طرف اللسان يلمس الأسنان السفلى.', // nieuw, nalezen
    'k.uitleg.i': 'مثل «ie»، لكن الفم مفتوح أكثر قليلًا ومرتخٍ. الصوت قصير.', // nieuw, nalezen
    'k.uitleg.ie': 'الفم شبه مغلق. الشفتان ممدودتان كما في الابتسامة. اللسان مرتفع وإلى الأمام.', // nieuw, nalezen
    'k.uitleg.o': 'الفم مفتوح. الشفتان مستديرتان قليلًا. اللسان إلى الخلف. الصوت قصير.', // nieuw, nalezen
    'k.uitleg.oo': 'الشفتان مستديرتان. الفم نصف مفتوح. في النهاية تصغر الشفتان.', // nieuw, nalezen
    'k.uitleg.u': 'الشفتان مستديرتان قليلًا، غير مشدودتين. اللسان إلى الأمام. الصوت قصير.', // nieuw, nalezen
    'k.uitleg.uu': 'الشفتان مستديرتان ومشدودتان، كما للقُبلة. اللسان إلى الأمام، كما في «ie».', // nieuw, nalezen
    'k.uitleg.oe': 'الشفتان مستديرتان ومشدودتان، إلى الأمام كثيرًا. تبقى فتحة صغيرة فقط. اللسان يبقى في خلف الفم.', // nieuw, nalezen
    'k.uitleg.eu': 'الفم نصف مفتوح. الشفتان مستديرتان، لكن غير مشدودتين. اللسان إلى الأمام، كما في «ee».', // nieuw, nalezen
    'k.uitleg.ui': 'في البداية: الفم نصف مفتوح والشفتان مستديرتان. ثم تصغر الشفتان حتى «uu». تبقى الشفتان مستديرتين.', // nieuw, nalezen
    'k.uitleg.ij': 'في البداية: الفم نصف مفتوح والشفتان ممدودتان. ثم يكاد الفم ينغلق، حتى «ie».', // nieuw, nalezen
    'k.uitleg.ou': 'في البداية: الفم مفتوح. ثم تصبح الشفتان صغيرتين ومستديرتين، حتى «oe».', // nieuw, nalezen
  },
};
export default t;
