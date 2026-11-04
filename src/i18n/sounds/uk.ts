import type { CultureTranslation } from '../culture/types';

/** Dutch sounds (src/content/sounds.ts): the unit, its word pairs, sentences and chats. */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'u.sounds': 'Нідерландські звуки',
    'l.shortlong': 'a чи aa, ui чи ei',
    'w.kl.man': 'чоловік',
    'w.kl.maan': 'місяць (на небі)',
    'w.kl.zak': 'пакет, мішок',
    'w.kl.zaak': 'магазин',
    'w.kl.ui': 'цибуля',
    'w.kl.ei': 'яйце',
    's.shortlong.1': 'Чоловік дивиться на місяць.',
    's.shortlong.2': 'Поклади цибулю в пакет.',
    's.shortlong.3': 'Магазин відкривається о девʼятій.',
    'c.shortlong.q': 'Хочеш яйце?',
    'c.shortlong.a': { m: 'Ні, дякую. Я вже поїв.', f: 'Ні, дякую. Я вже поїла.', x: 'Ні, дякую. Я вже поїв / поїла.' }, // x: nieuw, nalezen
    'c.shortlong.a.why': 'Пропонують яйце: ввічливе «ні» з причиною.',
    'l.roundsounds': 'uu, oe та eu',
    'w.kl.muur': 'стіна',
    'w.kl.moer': 'гайка (для болта)',
    'w.kl.buur': 'сусід',
    'w.kl.boer': 'фермер',
    'w.kl.deur': 'двері',
    'w.kl.duur': 'дорогий',
    's.roundsounds.1': 'Міцно закрути гайку.',
    's.roundsounds.2': 'Зачини двері, будь ласка.',
    's.roundsounds.3': 'Ця куртка занадто дорога.',
    'c.roundsounds.q': 'Двері відчинені?',
    'c.roundsounds.a': 'Ні, вони зачинені.',
    'c.roundsounds.a.why': 'Питають, чи відчинені двері: ця відповідь каже, що ні.',
    'l.pbgk': "p чи b, g, k чи h", // nagelezen (2e lezing) (controle/uitdrukkingen-klanken)
    'w.kl.pak': 'костюм',
    'w.kl.bak': 'ящик, смітник',
    'w.kl.goud': 'золото',
    'w.kl.koud': 'холодний',
    'w.kl.hoed': 'капелюх',
    'w.kl.goed': 'добрий, добре',
    's.pbgk.1': 'Викинь сміття в смітник.',
    's.pbgk.2': 'У коридорі холодно.',
    's.pbgk.3': 'Ти добре це робиш!',
    'c.pbgk.q': 'Як справи?',
    'c.pbgk.a': 'Добре, але мені холодно.',
    'c.pbgk.a.why': 'Питають, як справи: відповідь і як ти почуваєшся.',
    // "Hoe zeg je het?" (src/content/klankMond.ts): how the mouth makes each sound.
    'k.uitleg.a': 'Відкрий рот, трохи менше, ніж для «aa». Язик іде назад. Кажи коротко.', // nieuw, nalezen
    'k.uitleg.aa': 'Широко відкрий рот. Губи розслаблені. Язик лежить низько і рівно.', // nieuw, nalezen
    'k.uitleg.e': 'Рот напіввідкритий, більше, ніж для «ee». Губи розслаблені. Кажи коротко.', // nieuw, nalezen
    'k.uitleg.ee': 'Рот напіввідкритий. Губи широкі, як в усмішці. Кінчик язика торкається нижніх зубів.', // nieuw, nalezen
    'k.uitleg.i': 'Як для «ie», але рот трохи більше відкритий і розслаблений. Кажи коротко.', // nieuw, nalezen
    'k.uitleg.ie': 'Рот майже закритий. Губи широкі, як в усмішці. Язик високо і спереду.', // nieuw, nalezen
    'k.uitleg.o': 'Рот відкритий. Губи трохи круглі. Язик позаду. Кажи коротко.', // nieuw, nalezen
    'k.uitleg.oo': 'Губи круглі. Рот напіввідкритий. У кінці губи стають меншими.', // nieuw, nalezen
    'k.uitleg.u': 'Губи трохи круглі, не напружені. Язик спереду. Кажи коротко.', // nieuw, nalezen
    'k.uitleg.uu': 'Губи круглі й напружені, як для поцілунку. Язик спереду, як для «ie».', // nieuw, nalezen
    'k.uitleg.oe': 'Зроби губи круглими й напруженими, сильно вперед. Лишається тільки маленький отвір. Язик позаду в роті.', // nieuw, nalezen
    'k.uitleg.eu': 'Рот напіввідкритий. Губи круглі, але не напружені. Язик спереду, як для «ee».', // nieuw, nalezen
    'k.uitleg.ui': 'Почни з напіввідкритого рота й круглих губ. Потім зроби губи маленькими, до «uu». Губи лишаються круглими.', // nieuw, nalezen
    'k.uitleg.ij': 'Почни з напіввідкритого рота й широких губ. Потім майже закрий рот, до «ie».', // nieuw, nalezen
    'k.uitleg.ou': 'Почни з відкритого рота. Потім зроби губи маленькими й круглими, до «oe».', // nieuw, nalezen
  },
};
export default t;
