import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'صداهای زبان هالندی',
    'l.shortlong': 'a یا aa، ui یا ei',
    'w.kl.man': 'مرد',
    'w.kl.maan': 'مهتاب (ماه در آسمان)',
    'w.kl.zak': 'خریطه',
    'w.kl.zaak': 'دکان',
    'w.kl.ui': 'پیاز',
    'w.kl.ei': 'تخم مرغ',
    's.shortlong.1': 'مرد به مهتاب نگاه می‌کند.',
    's.shortlong.2': 'پیازها را در خریطه بگذارید.', // nagelezen AI 31 okt
    's.shortlong.3': 'دکان ساعت نه باز می‌شود.',
    'c.shortlong.q': 'تخم مرغ می‌خواهید؟', // nagelezen AI 31 okt
    'c.shortlong.a': 'نی، تشکر. نان خورده‌ام.',
    'c.shortlong.a.why': 'تخم مرغ تعارف می‌شود: یک «نی» مؤدبانه، با دلیل.',
    'l.roundsounds': 'uu، oe و eu',
    'w.kl.muur': 'دیوال',
    'w.kl.moer': 'مهره (برای پیچ)',
    'w.kl.buur': 'همسایه',
    'w.kl.boer': 'دهقان',
    'w.kl.deur': 'دروازه (در)',
    'w.kl.duur': 'قیمت',
    's.roundsounds.1': 'مهره را محکم ببندید.', // nagelezen AI 31 okt
    's.roundsounds.2': 'لطفاً دروازه را ببندید.', // nagelezen AI 31 okt
    's.roundsounds.3': 'آن کرتی بسیار قیمت است.',
    'c.roundsounds.q': 'دروازه باز است؟',
    'c.roundsounds.a': 'نی، بسته است.',
    'c.roundsounds.a.why': 'می‌پرسند دروازه باز است یا نی: این جواب می‌گوید باز نیست.',
    'l.pbgk': "p یا b، g، k یا h", // nagelezen (2e lezing)
    'w.kl.pak': 'دریشی',
    'w.kl.bak': 'صندوق، سطل کثافات',
    'w.kl.goud': 'طلا',
    'w.kl.koud': 'سرد',
    'w.kl.hoed': 'کلاه',
    'w.kl.goed': 'خوب',
    's.pbgk.1': 'کثافات را در سطل بیندازید.', // nagelezen AI 31 okt
    's.pbgk.2': 'در دهلیز سرد است.',
    's.pbgk.3': 'خوب انجامش می‌دهید!', // nagelezen AI 31 okt
    'c.pbgk.q': 'چطور هستید؟', // nagelezen AI 31 okt
    'c.pbgk.a': 'خوب هستم، ولی سردم است.',
    'c.pbgk.a.why': 'حال را می‌پرسند: یک جواب، و این‌که چه احساس دارید.', // nagelezen AI 31 okt
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'دهن را باز کنید، کمی کمتر از «aa». زبان به عقب می‌رود. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.aa': 'دهن را کاملاً باز کنید. لب‌ها آرام هستند. زبان پایین و هموار است.', // nieuw, nalezen
    'k.uitleg.e': 'دهن نیمه‌باز است، بیشتر از «ee». لب‌ها آرام هستند. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.ee': 'دهن نیمه‌باز است. لب‌ها کشیده هستند، مثل خنده. نوک زبان به دندان‌های پایین می‌خورد.', // nieuw, nalezen
    'k.uitleg.i': 'مثل «ie»، اما دهن کمی بازتر و آرام‌تر است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.ie': 'دهن تقریباً بسته است. لب‌ها کشیده هستند، مثل خنده. زبان بالا و پیش است.', // nieuw, nalezen
    'k.uitleg.o': 'دهن باز است. لب‌ها کمی گرد هستند. زبان عقب است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.oo': 'لب‌ها گرد هستند. دهن نیمه‌باز است. در آخر لب‌ها خوردتر می‌شوند.', // nieuw, nalezen
    'k.uitleg.u': 'لب‌ها کمی گرد هستند، نه سخت. زبان پیش است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.uu': 'لب‌ها گرد و سخت، مثل بوسیدن. زبان پیش، مثل «ie».', // nieuw, nalezen
    'k.uitleg.oe': 'لب‌ها را گرد و سخت کنید و بسیار پیش بیاورید. فقط یک سوراخ خورد می‌ماند. زبان در عقب دهن می‌ماند.', // nieuw, nalezen
    'k.uitleg.eu': 'دهن نیمه‌باز است. لب‌ها گرد هستند، اما سخت نیستند. زبان پیش، مثل «ee».', // nieuw, nalezen
    'k.uitleg.ui': 'با دهن نیمه‌باز و لب‌های گرد شروع کنید. بعد لب‌ها را خورد کنید، تا «uu». لب‌ها گرد می‌مانند.', // nieuw, nalezen
    'k.uitleg.ij': 'با دهن نیمه‌باز و لب‌های کشیده شروع کنید. بعد دهن را تقریباً ببندید، تا «ie».', // nieuw, nalezen
    'k.uitleg.ou': 'با دهن باز شروع کنید. بعد لب‌ها را خورد و گرد کنید، تا «oe».', // nieuw, nalezen
  },
};
export default t;
