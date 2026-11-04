import type { Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { KlankId } from './klankMond';

/**
 * The pilot's own texts for "Hoe zeg je het?" (src/content/klankMond.ts): one short explanation
 * of the mouth per sound, in Dutch, English and Polish only, until the owner has seen the pilot
 * (4 November 2026). Not UI keys yet: once approved they move to the translation files (see
 * klankText below), like the sounds unit's words do (src/i18n/sounds/<lang>.ts).
 *
 * Short and plain (readers who read little), "je" form, what the learner can do with the mouth:
 * the jaw, the lips, and where the tongue is. Tips that work for Polish learners too: Polish has
 * no uu, eu or ui, so those say which known sound to start from ("as for ie").
 */
export const KLANK_UITLEG: Record<KlankId, { nl: string; en: string; pl: string }> = {
  aa: {
    nl: 'Doe je mond wijd open. Je lippen zijn ontspannen. Je tong ligt plat en laag.',
    en: 'Open your mouth wide. Your lips are relaxed. Your tongue lies low and flat.',
    pl: 'Otwórz szeroko usta. Wargi są rozluźnione. Język leży nisko i płasko.',
  },
  ee: {
    nl: 'Je mond is half open. Je lippen zijn breed, als bij een lach. Je tongpunt zit tegen je ondertanden.',
    en: 'Your mouth is half open. Your lips are wide, as in a smile. The tip of your tongue touches your lower teeth.',
    pl: 'Usta są półotwarte. Wargi szeroko, jak przy uśmiechu. Czubek języka dotyka dolnych zębów.',
  },
  oe: {
    nl: 'Maak je lippen rond en strak, ver naar voren. Er is maar een klein gaatje. Je tong ligt achter in je mond.',
    en: 'Make your lips round and tight, pushed far forward. There is only a small hole. Your tongue stays at the back of your mouth.',
    pl: 'Zaokrąglij wargi i mocno wysuń je do przodu. Zostaje tylko mały otwór. Język jest cofnięty.',
  },
  uu: {
    nl: 'Lippen rond en strak, als voor een kus. Je tong naar voren, zoals bij ie.',
    en: 'Lips round and tight, as for a kiss. Your tongue forward, as for ie.',
    pl: 'Wargi okrągłe i napięte, jak do pocałunku. Język z przodu, jak przy „i”.',
  },
  eu: {
    nl: 'Je mond is half open. Je lippen zijn rond, maar niet strak. Je tong naar voren, zoals bij ee.',
    en: 'Your mouth is half open. Your lips are round, but not tight. Your tongue forward, as for ee.',
    pl: 'Usta są półotwarte. Wargi okrągłe, ale nie napięte. Język z przodu, jak przy „ee”.',
  },
  ui: {
    nl: 'Begin met je mond half open en ronde lippen. Maak je lippen dan klein, tot uu. Je lippen blijven rond.',
    en: 'Start with your mouth half open and round lips. Then make your lips small, to uu. Your lips stay round.',
    pl: 'Zacznij z półotwartymi ustami i okrągłymi wargami. Potem zmniejsz otwór warg aż do „uu”. Wargi cały czas są okrągłe.',
  },
};

/**
 * The explanation in the learner's language (Polish, or Dutch in the work-rules track), with the
 * English, as every text in the app (src/components/Bi.tsx). Other help languages see the English
 * until their translation exists.
 *
 * Later, in i18n: one key per sound in the sounds files (src/i18n/sounds/<lang>.ts, next to
 * w.kl.*, as `k.uitleg.uu`), the English in src/content and the Dutch in src/i18n/sounds/nl.ts;
 * then this function becomes gloss(`k.uitleg.${id}`, en, lang) and this file goes.
 */
export function klankText(id: KlankId, lang?: HelpLanguage): Bilingual {
  const t = KLANK_UITLEG[id];
  const help = lang?.code === 'pl' ? t.pl : lang?.code === 'nl' ? t.nl : undefined;
  return { en: t.en, help, lang };
}
