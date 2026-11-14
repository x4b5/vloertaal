import type { CultureTip } from '../content/culture';
import { lawCheckMonth, lawCheckStale } from '../content/lawAge';
import { taalBeActive } from '../content/taalBe';
import { isTaalBeId } from '../content/taalBe/ids';
import { dateLocale } from '../content/updateDate';
import { ABUSE_LINE, ADVICE_LINE } from '../content/workTips';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';

/**
 * The closing lines of the tips in Belgium (docs/taal-belgie.md, "De slotregel"). Most tips end
 * with "… ask your employer, the union or the Juridisch Loket" (ADVICE_LINE) or "… the union, the
 * Juridisch Loket or FairWork" (ABUSE_LINE). In the Belgian course that one line becomes the Belgian
 * one, in English and in the help language (src/i18n/be/base.ts): so a tip whose only Dutch part
 * is that line is the same in both countries (A in the inventory), and needs no Belgian version.
 */
// ⚖️ check: juridische eerstelijnsbijstand: a free first advice from a lawyer, for everyone, at a
// justitiehuis (decreet 26 april 2019; vlaanderen.be "Juridische eerstelijnsbijstand", search
// result of 31 October 2026). Payoke: a recognised centre for victims of exploitation (help.ts).
export const BE_ADVICE_LINE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';
export const BE_ABUSE_LINE = 'General information. For your situation: ask the union, the justitiehuis (free legal advice) or Payoke.';

const swaps: [nl: string, be: string, glossNl: string[], glossBe: string][] = [
  [ADVICE_LINE, BE_ADVICE_LINE, ['be.closing.advice.nl', 'be.closing.advice.nl2'], 'be.closing.advice'],
  [ABUSE_LINE, BE_ABUSE_LINE, ['be.closing.abuse.nl'], 'be.closing.abuse'],
];

/** A text with its Dutch closing line swapped for the Belgian one (the same text when it has none). */
export function beClosing(en: string, help: string | undefined, lang?: HelpLanguage): { en: string; help?: string } {
  for (const [nl, be, glossNl, glossBe] of swaps) {
    if (!en.endsWith(nl)) continue;
    const beHelp = lang?.gloss[glossBe];
    const from = glossNl.map((id) => lang?.gloss[id]).find((x): x is string => Boolean(x && help?.endsWith(x)));
    return { en: en.slice(0, en.length - nl.length) + be, help: help && from && beHelp ? help.slice(0, help.length - from.length) + beHelp : help };
  }
  return { en, help };
}

/** A tip's body as shown, in English and the help language: in the Belgian course with the Belgian closing line. */
export function tipBody(tip: CultureTip, lang?: HelpLanguage): Bilingual {
  const text = gloss(`${tip.id}.b`, tip.body, lang);
  return taalBeActive() ? { ...text, ...beClosing(text.en, text.help, lang) } : text;
}

/** The closing lines a tip can end with (in English) and the ids of their help-language text. */
const CLOSINGS: [en: string, glossIds: string[]][] = [
  [ADVICE_LINE, ['be.closing.advice.nl', 'be.closing.advice.nl2']],
  [ABUSE_LINE, ['be.closing.abuse.nl']],
  [BE_ADVICE_LINE, ['be.closing.advice']],
  [BE_ABUSE_LINE, ['be.closing.abuse']],
];

/**
 * A tip's text without its closing line ("General information. For your situation: ask your
 * employer, the union or the Juridisch Loket."), and that line on its own. In a lesson the tip
 * shows only its first sentences, which cut the closing line off; on its own it goes in the tip's
 * ⓘ, so who can help is always one tap away. When the help language does not end with the same
 * line, the text stays whole (nothing is split wrongly).
 */
export function splitClosing(text: Bilingual, lang?: HelpLanguage): { body: Bilingual; closing?: Bilingual } {
  for (const [en, ids] of CLOSINGS) {
    if (!text.en.endsWith(en)) continue;
    const helpEnd = ids.map((id) => lang?.gloss[id]).find((x): x is string => Boolean(x && text.help?.endsWith(x)));
    if (text.help !== undefined && !helpEnd) return { body: text };
    const body: Bilingual = { ...text, en: text.en.slice(0, text.en.length - en.length).trimEnd() };
    if (text.help !== undefined && helpEnd) body.help = text.help.slice(0, text.help.length - helpEnd.length).trimEnd();
    const closing: Bilingual = { ...text, en };
    if (helpEnd) closing.help = helpEnd; else delete closing.help;
    return { body, closing };
  }
  return { body: text };
}

/**
 * A tip about rights (fase 4, 4 November 2026): one that ends with a legal closing line, as shown
 * (ADVICE_LINE or ABUSE_LINE; in the Belgian course their Belgian twins, BE_ADVICE_LINE and
 * BE_ABUSE_LINE). That is 29 tips of the work units plus c.accident and c.sick, a region's tips with
 * ADVICE_LINE (src/content/regio) and the Belgian tips with a Belgian line. A tip that ends with the
 * house-rules line ("ask your supervisor") or with none is not one. The answer is the country whose
 * places the line names, or null.
 */
export function rightsTipCountry(tip: CultureTip): 'nl' | 'be' | null {
  const en = taalBeActive() ? beClosing(tip.body, undefined).en : tip.body;
  if (en.endsWith(BE_ADVICE_LINE) || en.endsWith(BE_ABUSE_LINE)) return 'be';
  if (en.endsWith(ADVICE_LINE) || en.endsWith(ABUSE_LINE)) return 'nl';
  return null;
}

/** "October 2026" in the English line and in the help language (Dutch: "oktober 2026") of a {month} text. */
function withMonth(text: Bilingual, lang?: HelpLanguage): Bilingual {
  return {
    ...text,
    en: text.en.replace('{month}', lawCheckMonth('en-GB')),
    help: text.help?.replace('{month}', lawCheckMonth(dateLocale(lang?.code ?? 'nl'))),
  };
}

/**
 * The lines with a tip about rights, in the help language:
 *  - `notChecked`: "An expert has not checked this explanation yet." Werkregels says it in its
 *    disclaimer (RULES_BETA) and a Belgian tip in its own BeNote; the Dutch tips said nothing.
 *    Not for a Belgian tip (its BeNote "beta" says it already).
 *  - `stale`, once the law check is more than 90 days old (src/content/lawAge.ts): the month of
 *    the explanation and where to find the latest rules (the Juridisch Loket or Work in NL; in
 *    Belgium the justitiehuis or werk.belgie.be).
 * Nothing for any other tip.
 */
export function rightsTipNotes(tip: CultureTip, lang?: HelpLanguage, today: Date = new Date()): { notChecked?: Bilingual; stale?: Bilingual } {
  const country = rightsTipCountry(tip);
  if (!country) return {};
  return {
    ...(isTaalBeId(tip.id) ? {} : { notChecked: ui('tipsNotChecked', lang) }),
    ...(lawCheckStale(today) ? { stale: withMonth(ui(country === 'be' ? 'lawStaleBe' : 'lawStale', lang), lang) } : {}),
  };
}
