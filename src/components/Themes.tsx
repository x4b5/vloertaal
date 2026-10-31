import { WordPicture } from '../pictures';
import { gloss, said, ui, uiCount, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Theme, ThemeGroup } from '../content/themes';
import type { Unit } from '../content/types';
import { unitDone } from '../lib/certificate';
import { dutchUi } from '../lib/track';
import { CheckIcon } from './Icons';
import { NlPair } from './NlPair';
import { BeNote } from './BeNote';
import { lifeThemeHere } from '../content/taalBe';

/**
 * Theme headers ("hoofdstukken", src/content/themes.ts): a plain, non-tappable row above a
 * theme's topics in a list (All topics, the certificates, the coaches page), and the small label
 * on the home's current block. Never a button: the lists keep one kind of tappable row.
 */

/** A theme's name: the help language (English only: the English); the work-rules track: the Dutch. */
export function themeText(theme: Theme, lang?: HelpLanguage): Bilingual {
  // "Leven in België" in the Belgian language course (docs/taal-belgie.md); the work-rules track keeps its name.
  if (theme.id === 'theme.life' && !dutchUi(lang) && lifeThemeHere() === 'be') return gloss('be.theme.life', BE_LIFE.title, lang);
  return dutchUi(lang) ? { en: theme.titleNl, lang } : gloss(theme.id, theme.title, lang);
}

/** The theme "Leven in Nederland" in the Belgian language course. */
export const BE_LIFE = { title: 'Life in Belgium', titleNl: 'Leven in België' } as const;

/** A theme's Dutch name, as the learner's course has it ("Leven in België" in Belgium). */
export function themeNl(theme: Theme, lang?: HelpLanguage): string {
  return theme.id === 'theme.life' && !dutchUi(lang) && lifeThemeHere() === 'be' ? BE_LIFE.titleNl : theme.titleNl;
}

/** A group's Dutch name and its help-language name ("Andere sectoren" for the other sectors). */
function groupNames(group: ThemeGroup, lang?: HelpLanguage): { nl: string; text: Bilingual } {
  if (!group.theme) return { nl: 'Andere sectoren', text: ui('otherSectors', lang) };
  return { nl: themeNl(group.theme, lang), text: themeText(group.theme, lang) };
}

/** How many of these topics are finished. */
export function groupDone(units: readonly Unit[], completed: Record<string, unknown>): number {
  return units.filter((u) => unitDone(u, completed)).length;
}

/**
 * The header row of a group, as an <li> of the list it heads (so the list stays one list with
 * one kind of tappable row). `completed`: a calm ✓ once every topic of the group is finished
 * (nothing before that: the rows under it show their own progress); the count ("3 / 5
 * topics") is for screen readers only. `counted`: the topics that count (default: all of the
 * group; see countedUnits in src/content/themes.ts).
 */
export function ThemeHeadRow({ group, lang, completed, counted = group.units, dutchOnly = false }: {
  group: ThemeGroup;
  lang?: HelpLanguage;
  completed?: Record<string, unknown>;
  counted?: readonly Unit[];
  /** A Dutch-only page (the coaches page): the Dutch name only. */
  dutchOnly?: boolean;
}) {
  const { nl, text } = groupNames(group, lang);
  const of = counted.length;
  const n = completed ? groupDone(counted, completed) : 0;
  const done = Boolean(completed) && of > 0 && n === of;
  const word = uiCount('topicsUnit', of, lang);
  const rtl = !dutchOnly && lang?.dir === 'rtl';
  const spoken = `${dutchOnly || dutchUi(lang) ? nl : `${said(text)} · ${nl}`}${completed && of ? ` · ${n} / ${of} ${dutchOnly ? '' : said(word)}`.trimEnd() : ''}`;
  return (
    <li className={`theme-head ${done ? 'theme-head-done' : ''}`} data-theme={group.key}>
      <h2 className="theme-title" aria-label={spoken} dir={rtl ? 'rtl' : undefined}>
        {group.theme && <span className="theme-emoji" aria-hidden><WordPicture id="" emoji={group.theme.emoji} size={28} /></span>}
        <span className="theme-names" aria-hidden>
          {dutchOnly ? <span className="theme-nl-only" lang="nl">{nl}</span> : <NlPair nlFirst nl={nl} nlClass="theme-nl" dir={rtl ? 'ltr' : undefined} className="theme-help" text={text} />}
        </span>
        {done && <span className="theme-check" aria-hidden><CheckIcon size={16} /></span>}
      </h2>
      {/* In Belgium with the Belgian course off: "Leven in Nederland" says it is about the Netherlands. */}
      {group.key === 'theme.life' && !dutchOnly && !dutchUi(lang) && lifeThemeHere() === 'nl-marked' && <BeNote lang={lang} className="theme-be-note" />}
    </li>
  );
}

