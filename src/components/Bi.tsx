import type { ReactNode } from 'react';
import { langTag, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { allMatches } from '../lib/matches';

/**
 * Bilingual text. With a help language, that language comes first in the large type and the
 * English sits small underneath: the learner reads their own language, English is support.
 * Without one, it is just the English. (The main line keeps the class bi-en and the small line
 * bi-help, so every screen's sizing keeps working.)
 */
export function Bi({ text, className }: { text: Bilingual; className?: string }) {
  // The work-rules track reads in Dutch only: the Dutch line, and no English in the page at all
  // (not hidden: left out, so a screen reader never reads it either).
  if (text.lang?.code === 'nl') {
    return (
      <span className={`bi ${className ?? ''}`}>
        <span className="bi-en" lang="nl">{text.help ?? text.en}</span>
      </span>
    );
  }
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
      {/* English only: English (the page itself is Dutch, lang="nl"). */}
      <span className="bi-en" lang="en">{text.en}</span>
    </span>
  );
}

/** Help languages written in the Latin script: a Dutch phrase in them needs no isolating. */
const LATIN_SCRIPT = new Set(['pl', 'ro', 'tr', 'nl', 'es', 'pt', 'fr', 'de']);

/** A line in the help language, with its own language and direction. */
export function HelpText({ text, lang, className = 'bi-help' }: { text: string; lang: HelpLanguage; className?: string }) {
  return (
    <span className={className} lang={langTag(lang.code)} dir={lang.dir}>
      {lang.dir === 'rtl' || !LATIN_SCRIPT.has(lang.code) ? isolateLatin(text) : text}
    </span>
  );
}

// A run of Latin-script words (a Dutch phrase quoted in an Arabic or Persian sentence), with
// the "!", "?" or "…" that closes it when a quote mark follows ("«Zeg maar je, hoor!»"). A
// quoted message of a few sentences is one run too ("«… te laat. Sorry! Groet, Ali»").
const L = 'A-Za-z\\u00C0-\\u024F';
const WORD = `[${L}0-9][${L}0-9'’\\-]*`;
// A time or an amount ("8:30", "6,50", "1.200") is one run: isolating "8" and "30" apart would
// show "30:8" in right-to-left text.
const NUM = '[0-9]+(?:[:.,][0-9]+)+';
const TOKEN = `(?:${NUM}|${WORD})`;
const OPEN_QUOTE = '«„“"\'‘';
const CLOSE_QUOTE = '»”“"\'’';
/** Quotes up to this many characters stay on one line. */
const SHORT_QUOTE = 20;
const LATIN_RUN = new RegExp(`${TOKEN}(?:[.,:;!?…]?\\s+${TOKEN})*(?:\\s?(?:…|[!?.])+(?=[»”"“«']))?`, 'g');

/**
 * In right-to-left text the bidi algorithm reorders the punctuation around an embedded
 * left-to-right phrase ("«!Zeg maar je, hoor»"). Isolating each Latin run in a <bdi dir="ltr">
 * keeps the phrase intact and puts it in its place in the sentence. Done at render time so the
 * translation files stay plain text.
 */
export function isolateLatin(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of allMatches(text, LATIN_RUN)) {
    let at = m.index ?? 0;
    let end = at + m[0].length;
    // A quoted phrase takes its quote marks along, so they stay with it (and the right way
    // round) in right-to-left text: «Zeg maar je, hoor!», never «!Zeg … hoor» split up.
    const quoted = at > last && OPEN_QUOTE.includes(text[at - 1]) && CLOSE_QUOTE.includes(text[end] ?? '');
    if (quoted) { at -= 1; end += 1; }
    if (at > last) parts.push(text.slice(last, at));
    const phrase = text.slice(at, end);
    // A short quote is never broken over two lines (a long one still wraps where it must).
    const keep = quoted && m[0].length <= SHORT_QUOTE;
    parts.push(<bdi key={at} dir="ltr" className={keep ? 'nl-quote' : undefined}>{phrase}</bdi>);
    last = end;
  }
  if (!parts.length) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
