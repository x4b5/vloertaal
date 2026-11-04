import type { CultureTranslation } from '../culture/types';

/**
 * The Dutch of the sounds unit's own texts (src/content/sounds.ts) where there is Dutch to show:
 * "Hoe zeg je het?" (src/content/klankMond.ts), how the mouth makes each sound, in plain Dutch
 * for the Dutch screens (src/i18n/packs/nl.ts). The words, sentences and chats of the unit are
 * Dutch already. Written in Dutch, not translated.
 */
const t: CultureTranslation = {
  ui: {},
  gloss: {
    'k.uitleg.a': 'Doe je mond open, iets minder dan bij aa. Je tong gaat naar achteren. Zeg het kort.',
    'k.uitleg.aa': 'Doe je mond wijd open. Je lippen zijn ontspannen. Je tong ligt plat en laag.',
    'k.uitleg.e': 'Je mond is half open, meer dan bij ee. Je lippen zijn ontspannen. Zeg het kort.',
    'k.uitleg.ee': 'Je mond is half open. Je lippen zijn breed, als bij een lach. Je tongpunt zit tegen je ondertanden.',
    'k.uitleg.i': 'Net als bij ie, maar je mond is iets meer open en ontspannen. Zeg het kort.',
    'k.uitleg.ie': 'Je mond is bijna dicht. Je lippen zijn breed, als bij een lach. Je tong is hoog en voor.',
    'k.uitleg.o': 'Je mond is open. Je lippen zijn een beetje rond. Je tong ligt achter. Zeg het kort.',
    'k.uitleg.oo': 'Je lippen zijn rond. Je mond is half open. Aan het eind worden je lippen kleiner.',
    'k.uitleg.u': 'Je lippen zijn een beetje rond, niet strak. Je tong is voor. Zeg het kort.',
    'k.uitleg.uu': 'Lippen rond en strak, als voor een kus. Je tong naar voren, zoals bij ie.',
    'k.uitleg.oe': 'Maak je lippen rond en strak, ver naar voren. Er is maar een klein gaatje. Je tong ligt achter in je mond.',
    'k.uitleg.eu': 'Je mond is half open. Je lippen zijn rond, maar niet strak. Je tong naar voren, zoals bij ee.',
    'k.uitleg.ui': 'Begin met je mond half open en ronde lippen. Maak je lippen dan klein, tot uu. Je lippen blijven rond.',
    'k.uitleg.ij': 'Begin met je mond half open en brede lippen. Doe je mond dan bijna dicht, tot ie.',
    'k.uitleg.ou': 'Begin met je mond open. Maak je lippen dan klein en rond, tot oe.',
  },
};
export default t;
