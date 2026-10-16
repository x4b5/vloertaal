import { gloss, said, ui, uiCount, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Theme, ThemeGroup } from '../content/themes';
import type { Unit } from '../content/types';
import { unitDone } from '../lib/certificate';
import { dutchUi } from '../lib/track';
import { HelpText } from './Bi';
import { CheckIcon } from './Icons';
import { NlPair } from './NlPair';

/**
 * Theme headers ("hoofdstukken", src/content/themes.ts): a plain, non-tappable row above a
 * theme's topics in a list (All topics, the certificates, the coaches page), and the small label
 * on the home's current block. Never a button: the lists keep one kind of tappable row.
 */

/** A theme's name: the help language (English only: the English); the work-rules track: the Dutch. */
export function themeText(theme: Theme, lang?: HelpLanguage): Bilingual {
  return dutchUi(lang) ? { en: theme.titleNl, lang } : gloss(theme.id, theme.title, lang);
}

/** A group's Dutch name and its help-language name ("Andere sectoren" for the other sectors). */
function groupNames(group: ThemeGroup, lang?: HelpLanguage): { nl: string; text: Bilingual } {
  if (!group.theme) return { nl: 'Andere sectoren', text: ui('otherSectors', lang) };
  return { nl: group.theme.titleNl, text: themeText(group.theme, lang) };
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
        {group.theme && <span className="theme-emoji" aria-hidden>{group.theme.emoji}</span>}
        <span className="theme-names" aria-hidden>
          {dutchOnly ? <span className="theme-nl-only" lang="nl">{nl}</span> : <NlPair nlFirst nl={nl} nlClass="theme-nl" dir={rtl ? 'ltr' : undefined} className="theme-help" text={text} />}
        </span>
        {done && <span className="theme-check" aria-hidden><CheckIcon size={16} /></span>}
      </h2>
    </li>
  );
}

/**
 * The home's small label above the current block's name: "💼 Twoja praca · Je baan" (the help
 * language, then the Dutch, as a unit title shows them; the work-rules track: the Dutch only).
 * No count: the block's own "1 / 3 lessons" sits right under it. Not a button.
 */
export function ThemeLabel({ group, lang }: { group: ThemeGroup; lang?: HelpLanguage }) {
  const { nl, text } = groupNames(group, lang);
  const dutch = dutchUi(lang);
  const rtl = lang?.dir === 'rtl';
  const help = !dutch && text.help && lang ? text.help : undefined;
  const spoken = dutch ? nl : `${said(text)} · ${nl}`;
  return (
    <p className="rb-theme" aria-label={spoken} role="note" dir={rtl ? 'rtl' : undefined}>
      {group.theme && <span className="rb-theme-emoji" aria-hidden>{group.theme.emoji}</span>}
      <span className="rb-theme-text" aria-hidden>
        {dutch ? (
          <span className="rb-theme-main" lang="nl">{nl}</span>
        ) : (
          <>
            {help ? <HelpText className="rb-theme-main" text={help} lang={lang!} /> : <span className="rb-theme-main" lang="en">{text.en}</span>}
            <span className="rb-theme-sep">·</span>
            <span className="rb-theme-nl" lang="nl" dir={rtl ? 'ltr' : undefined}>{nl}</span>
          </>
        )}
      </span>
    </p>
  );
}
