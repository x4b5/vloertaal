import type { ReactNode } from 'react';
import type { Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';

/**
 * Bilingual text. With a help language, that language comes first in the large type and the
 * English sits small underneath: the learner reads their own language, English is support.
 * Without one, it is just the English. (The main line keeps the class bi-en and the small line
 * bi-help, so every screen's sizing keeps working.)
 */
export function Bi({ text, className }: { text: Bilingual; className?: string }) {
  if (text.help && text.lang) {
    // A right-to-left help language makes the whole pair one right-to-left block, so the
    // English line under it starts on the same (right) side and nothing zig-zags. The English
    // keeps its own direction, so its full stop or question mark stays at its end.
    const rtl = text.lang.dir === 'rtl';
    return (
      <span className={`bi bi-swap ${className ?? ''}`} dir={rtl ? 'rtl' : undefined}>
        <HelpText text={text.help} lang={text.lang} className="bi-en" />
        {/* Shown only where a context lays the pair out on one line (see .bi-sep). */}
        <span className="bi-sep" aria-hidden>·</span>
        <span className="bi-help" lang="en" dir={rtl ? 'ltr' : undefined}>{text.en}</span>
      </span>
    );
  }
  return (
    <span className={`bi ${className ?? ''}`}>
      <span className="bi-en">{text.en}</span>
    </span>
  );
}

/** Help languages written in the Latin script: a Dutch phrase in them needs no isolating. */
const LATIN_SCRIPT = new Set(['pl', 'ro', 'tr']);

/** A line in the help language, with its own language and direction. */
export function HelpText({ text, lang, className = 'bi-help' }: { text: string; lang: HelpLanguage; className?: string }) {
  return (
    <span className={className} lang={lang.code} dir={lang.dir}>
      {lang.dir === 'rtl' || !LATIN_SCRIPT.has(lang.code) ? isolateLatin(text) : text}
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
