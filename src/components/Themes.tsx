import { gloss, said, ui, uiCount, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Theme, ThemeGroup } from '../content/themes';
import { unitDone } from '../lib/certificate';
import { dutchUi } from '../lib/track';
import { HelpText } from './Bi';
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

/** How many of a group's topics are finished. */
export function groupDone(group: ThemeGroup, completed: Record<string, unknown>): number {
  return group.units.filter((u) => unitDone(u, completed)).length;
}

/**
 * The header row of a group, as an <li> of the list it heads (so the list stays one list with
 * one kind of tappable row). `completed`: show "3 / 5 topics" (finished topics of the group).
 */
export function ThemeHeadRow({ group, lang, completed, dutchOnly = false }: {
  group: ThemeGroup;
  lang?: HelpLanguage;
  completed?: Record<string, unknown>;
  /** A Dutch-only page (the coaches page): the Dutch name only. */
  dutchOnly?: boolean;
}) {
  const { nl, text } = groupNames(group, lang);
  const of = group.units.length;
  const n = completed ? groupDone(group, completed) : 0;
  const word = uiCount('topicsUnit', of, lang);
  const rtl = !dutchOnly && lang?.dir === 'rtl';
  const spoken = `${dutchOnly || dutchUi(lang) ? nl : `${said(text)} · ${nl}`}${completed ? ` · ${n} / ${of} ${dutchOnly ? '' : said(word)}`.trimEnd() : ''}`;
  return (
    <li className={`theme-head ${completed && n === of ? 'theme-head-done' : ''}`} data-theme={group.key}>
      <h2 className="theme-title" aria-label={spoken} dir={rtl ? 'rtl' : undefined}>
        {group.theme && <span className="theme-emoji" aria-hidden>{group.theme.emoji}</span>}
        <span className="theme-names" aria-hidden>
          {dutchOnly ? <span className="theme-nl-only" lang="nl">{nl}</span> : <NlPair nlFirst nl={nl} nlClass="theme-nl" dir={rtl ? 'ltr' : undefined} className="theme-help" text={text} />}
        </span>
        {completed && (
          <span className="theme-count rb-count" aria-hidden>
            <b className="rb-count-n" dir="ltr">{n} / {of}</b>
            {word.help && lang ? <HelpText className="rb-count-word" text={word.help} lang={lang} /> : <span className="rb-count-word" lang={dutchOnly ? 'nl' : 'en'}>{word.en}</span>}
          </span>
        )}
      </h2>
    </li>
  );
}

/**
 * The home's small label above the current block's name: "💼 Twoja praca · Je baan · 2 / 5" (the
 * help language, then the Dutch, as a unit title shows them; the work-rules track: the Dutch only).
 * Not a button.
 */
export function ThemeLabel({ group, lang, completed }: { group: ThemeGroup; lang?: HelpLanguage; completed: Record<string, unknown> }) {
  const { nl, text } = groupNames(group, lang);
  const of = group.units.length;
  const n = groupDone(group, completed);
  const dutch = dutchUi(lang);
  const rtl = lang?.dir === 'rtl';
  const help = !dutch && text.help && lang ? text.help : undefined;
  const spoken = `${dutch ? nl : `${said(text)} · ${nl}`} · ${n} / ${of} ${said(uiCount('topicsUnit', of, lang))}`;
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
        {/* The count keeps its dot: a narrow screen moves both to the next line together. */}
        <span className="rb-theme-tail">
          <span className="rb-theme-sep">·</span>
          <b className="rb-theme-n" dir="ltr">{n} / {of}</b>
        </span>
      </span>
    </p>
  );
}
