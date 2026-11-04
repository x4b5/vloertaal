import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'صداهای زبان هلندی',
    'l.shortlong': 'a یا aa، ui یا ei',
    'w.kl.man': 'مرد',
    'w.kl.maan': 'ماه (در آسمان)',
    'w.kl.zak': 'کیسه',
    'w.kl.zaak': 'مغازه',
    'w.kl.ui': 'پیاز',
    'w.kl.ei': 'تخم‌مرغ',
    's.shortlong.1': 'مرد به ماه نگاه می‌کند.',
    's.shortlong.2': 'پیازها را در کیسه بگذار.',
    's.shortlong.3': 'مغازه ساعت نه باز می‌شود.',
    'c.shortlong.q': 'تخم‌مرغ می‌خواهی؟',
    'c.shortlong.a': 'نه، ممنون. غذا خورده‌ام.',
    'c.shortlong.a.why': 'تخم‌مرغ تعارف می‌کنند: یک «نه» مؤدبانه، با دلیل.',
    'l.roundsounds': 'uu، oe و eu',
    'w.kl.muur': 'دیوار',
    'w.kl.moer': 'مهره (برای پیچ)',
    'w.kl.buur': 'همسایه',
    'w.kl.boer': 'کشاورز',
    'w.kl.deur': 'در (درِ خانه)',
    'w.kl.duur': 'گران',
    's.roundsounds.1': 'مهره را محکم ببند.',
    's.roundsounds.2': 'لطفاً در را ببند.',
    's.roundsounds.3': 'آن کت خیلی گران است.',
    'c.roundsounds.q': 'در باز است؟',
    'c.roundsounds.a': 'نه، بسته است.',
    'c.roundsounds.a.why': 'می‌پرسند در باز است یا نه: این جواب می‌گوید باز نیست.',
    'l.pbgk': "p یا b، g، k یا h", // nagelezen (2e lezing)
    'w.kl.pak': 'کت و شلوار',
    'w.kl.bak': 'جعبه، سطل زباله',
    'w.kl.goud': 'طلا',
    'w.kl.koud': 'سرد',
    'w.kl.hoed': 'کلاه',
    'w.kl.goed': 'خوب',
    's.pbgk.1': 'زباله را در سطل بینداز.',
    's.pbgk.2': 'توی راهرو سرد است.',
    's.pbgk.3': 'خوب انجامش می‌دهی!',
    'c.pbgk.q': 'حالت چطور است؟',
    'c.pbgk.a': 'خوبم، ولی سردم است.',
    'c.pbgk.a.why': 'حال را می‌پرسند: یک جواب، و این‌که چه حسی داری.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'دهان را باز کنید، کمی کمتر از «aa». زبان به عقب می‌رود. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.aa': 'دهان را کاملاً باز کنید. لب‌ها شل هستند. زبان پایین و صاف است.', // nieuw, nalezen
    'k.uitleg.e': 'دهان نیمه‌باز است، بیشتر از «ee». لب‌ها شل هستند. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.ee': 'دهان نیمه‌باز است. لب‌ها کشیده‌اند، مثل لبخند. نوک زبان به دندان‌های پایین می‌خورد.', // nieuw, nalezen
    'k.uitleg.i': 'مثل «ie»، ولی دهان کمی بازتر و شل‌تر است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.ie': 'دهان تقریباً بسته است. لب‌ها کشیده‌اند، مثل لبخند. زبان بالا و جلو است.', // nieuw, nalezen
    'k.uitleg.o': 'دهان باز است. لب‌ها کمی گرد هستند. زبان عقب است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.oo': 'لب‌ها گرد هستند. دهان نیمه‌باز است. در آخر لب‌ها کوچک‌تر می‌شوند.', // nieuw, nalezen
    'k.uitleg.u': 'لب‌ها کمی گرد هستند، نه سفت. زبان جلو است. کوتاه بگویید.', // nieuw, nalezen
    'k.uitleg.uu': 'لب‌ها گرد و سفت، مثل بوسیدن. زبان جلو، مثل «ie».', // nieuw, nalezen
    'k.uitleg.oe': 'لب‌ها را گرد و سفت کنید و خیلی جلو بدهید. فقط یک سوراخ کوچک می‌ماند. زبان عقب دهان می‌ماند.', // nieuw, nalezen
    'k.uitleg.eu': 'دهان نیمه‌باز است. لب‌ها گرد هستند، ولی سفت نیستند. زبان جلو، مثل «ee».', // nieuw, nalezen
    'k.uitleg.ui': 'با دهان نیمه‌باز و لب‌های گرد شروع کنید. بعد لب‌ها را کوچک کنید، تا «uu». لب‌ها گرد می‌مانند.', // nieuw, nalezen
    'k.uitleg.ij': 'با دهان نیمه‌باز و لب‌های کشیده شروع کنید. بعد دهان را تقریباً ببندید، تا «ie».', // nieuw, nalezen
    'k.uitleg.ou': 'با دهان باز شروع کنید. بعد لب‌ها را کوچک و گرد کنید، تا «oe».', // nieuw, nalezen
  },
};
export default t;
