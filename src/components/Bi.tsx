import type { ReactNode } from 'react';
import type { Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';

/** English text with the help-language version underneath (right-to-left aware). */
export function Bi({ text, className }: { text: Bilingual; className?: string }) {
  return (
    <span className={`bi ${className ?? ''}`}>
      <span className="bi-en">{text.en}</span>
      {text.help && text.lang && <HelpText text={text.help} lang={text.lang} />}
    </span>
  );
}

/** A line in the help language, with its own language and direction. */
export function HelpText({ text, lang, className = 'bi-help' }: { text: string; lang: HelpLanguage; className?: string }) {
  return (
    <span className={className} lang={lang.code} dir={lang.dir}>
      {lang.dir === 'rtl' ? isolateLatin(text) : text}
    </span>
  );
}

// A run of Latin-script words (a Dutch phrase quoted in an Arabic or Persian sentence), with
// the "!", "?" or "…" that closes it when a quote mark follows ("«Zeg maar je, hoor!»").
const L = 'A-Za-z\\u00C0-\\u024F';
const WORD = `[${L}0-9][${L}0-9'’\\-]*`;
const LATIN_RUN = new RegExp(`${WORD}(?:[.,:;]?\\s+${WORD})*(?:\\s?(?:…|[!?.])+(?=[»”"“«']))?`, 'g');

/**
 * In right-to-left text the bidi algorithm reorders the punctuation around an embedded
 * left-to-right phrase ("«!Zeg maar je, hoor»"). Isolating each Latin run in a <bdi dir="ltr">
 * keeps the phrase intact and puts it in its place in the sentence. Done at render time so the
 * translation files stay plain text.
 */
export function isolateLatin(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LATIN_RUN)) {
    const at = m.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(<bdi key={at} dir="ltr">{m[0]}</bdi>);
    last = at + m[0].length;
  }
  if (!parts.length) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
