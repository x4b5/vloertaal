/**
 * How times, amounts and sums are said aloud (docs/entree-aanvulling.md, "De stem"). The screen
 * shows "7.30 uur", "6,60 euro" and "8 + 6 = 14"; a phone voice would read "zeven punt dertig",
 * "zes komma zestig" and skip the signs. So the voice gets the spoken form instead:
 *
 * - a time ("7.30 uur", "07:30", "16.00 uur") the way people say it: "half acht", "kwart over
 *   drie", "zestien uur"; another minute "zeven uur 10". A trailing "uur" is part of the time;
 * - an amount ("6,60 euro", "€ 7,50", "€7", "1.000 euro") as "6 euro 60", "7 euro 50", "7 euro",
 *   "1000 euro"; below one euro "60 cent";
 * - the signs of a sum (× − + =) as "keer", "min", "plus", "is";
 * - ml, kg and cm after a number as "milliliter", "kilo", "centimeter";
 * - the emergency number 112 digit by digit, "één één twee", the way it is said in the Netherlands
 *   (a voice would read "honderdtwaalf").
 *
 * Anything else stays as it is: a decimal ("8,5 uur" is "acht komma vijf uur", which is what a
 * learner must learn to read), a phone number ("0900-8844"), a year, a big count ("12.000 gram").
 * Only what a voice is given changes (src/lib/sayAs.ts); the app always shows the written text.
 */

/** 0–23 in words, for a time on the hour ("16.00 uur" → "zestien uur"); 0 is said "twaalf". */
const HOUR_WORDS = [
  'twaalf', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf',
  'dertien', 'veertien', 'vijftien', 'zestien', 'zeventien', 'achttien', 'negentien', 'twintig',
  'eenentwintig', 'tweeëntwintig', 'drieëntwintig',
];

/** The hour on a 12-hour clock in words (13 → "één", 0 and 12 → "twaalf"). */
const clock12 = (h: number) => HOUR_WORDS[h % 12 || 12];

/** A time as said aloud: 7, 30 → "half acht"; 16, 0 → "zestien uur"; 7, 10 → "zeven uur 10". */
export function sayTime(h: number, m: number): string {
  if (m === 0) return `${HOUR_WORDS[h]} uur`;
  if (m === 30) return `half ${clock12(h + 1)}`;
  if (m === 15) return `kwart over ${clock12(h)}`;
  if (m === 45) return `kwart voor ${clock12(h + 1)}`;
  return `${HOUR_WORDS[h]} uur ${m}`;
}

/** An amount as said aloud: "6", "60" → "6 euro 60"; "0", "60" → "60 cent"; "1.000" → "1000 euro". */
export function sayEuro(whole: string, cents?: string): string {
  const euros = whole.replace(/\./g, '').replace(/^0+(?=\d)/, '');
  // "7,5" is 7 euro 50 (a single decimal is tens of cents).
  const c = cents === undefined ? 0 : Number(cents.length === 1 ? `${cents}0` : cents);
  if (!c) return `${euros} euro`;
  if (euros === '0') return `${c} cent`;
  return `${euros} euro ${c}`;
}

/*
 * No lookbehind in these patterns: iOS before 16.4 cannot make such a regex, and
 * as the voice's rules are made when the app's main file loads, the whole app would not start
 * there (tests/oldPhones.test.ts). "Not right after a digit" is checked in code instead
 * (replaceNotAfter), and "right after a digit" is a captured digit put back.
 */

/**
 * text.replace(re, fn) for the matches whose character before is not one of `notAfter` (what a
 * negative lookbehind in front of `re` did): a match that is refused is tried again one place further on,
 * as the regex itself would. `re` has the g flag.
 */
function replaceNotAfter(text: string, re: RegExp, notAfter: RegExp, fn: (m: RegExpExecArray) => string): string {
  let out = '';
  let last = 0;
  re.lastIndex = 0;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > 0 && notAfter.test(text[m.index - 1])) {
      re.lastIndex = m.index + 1;
      continue;
    }
    out += text.slice(last, m.index) + fn(m);
    last = m.index + m[0].length;
    if (!m[0].length) re.lastIndex++;
  }
  return out + text.slice(last);
}

/** A time: H.MM or HH:MM (hours 0–23), not part of a longer number (not after [\d.,:]), with an optional "uur". */
const TIME = /([01]?\d|2[0-3])[.:]([0-5]\d)(?!\d)(?![.,:]\d)(\s+uur\b)?/g;
const NOT_AFTER_TIME = /[\d.,:]/;
/** A whole number with thousand dots ("1.000") or without, and an optional ",50". */
const NUM = String.raw`(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d{1,2}))?`;
const EURO_BEFORE = new RegExp(String.raw`€\s?${NUM}(?![\d,])`, 'g');
/** An amount before "euro" (not after [\d.,]). */
const EURO_AFTER = new RegExp(String.raw`${NUM}\s?euro\b`, 'g');
const NOT_AFTER_NUMBER = /[\d.,]/;
/** After a digit, kept as $1. */
const SIGNS: [RegExp, string][] = [
  [/\s*×\s*/g, ' keer '],
  [/\s*−\s*(?=\d)/g, ' min '],
  [/(\d)\s*\+\s*(?=\d)/g, '$1 plus '],
  [/(\d)\s*=\s*(?=\d)/g, '$1 is '],
];
const UNITS: [RegExp, string][] = [
  [/(\d)\s?ml\b/g, '$1 milliliter'],
  [/(\d)\s?kg\b/g, '$1 kilo'],
  [/(\d)\s?cm\b/g, '$1 centimeter'],
];

/** Numbers said digit by digit: the emergency number 112 ("één één twee"), not an amount of 112
 *  euro (the euro rules have run by then: "€ 112" is "112 euro"), and not after [\d.,-]. */
const DIGIT_NUMBERS = /112(?![\d,]|\.\d|\s?euro\b)/g;
const NOT_AFTER_DIGITS = /[\d.,-]/;

/** Does the text have a number said digit by digit (112)? Also used by scripts/list-clips.ts to
 *  re-record the clips made before this rule. */
export function hasDigitNumber(text: string): boolean {
  let found = false;
  replaceNotAfter(text, DIGIT_NUMBERS, NOT_AFTER_DIGITS, (m) => { found = true; return m[0]; });
  return found;
}

/** The spoken form of a Dutch text: times, amounts, signs and units as words (see above). */
export function sayNumbers(text: string): string {
  let out = replaceNotAfter(text, TIME, NOT_AFTER_TIME, (m) => sayTime(Number(m[1]), Number(m[2])));
  out = out.replace(EURO_BEFORE, (_m, whole: string, cents?: string) => sayEuro(whole, cents));
  out = replaceNotAfter(out, EURO_AFTER, NOT_AFTER_NUMBER, (m) => sayEuro(m[1], m[2]));
  for (const [re, word] of [...SIGNS, ...UNITS]) out = out.replace(re, word);
  out = replaceNotAfter(out, DIGIT_NUMBERS, NOT_AFTER_DIGITS, () => 'één één twee');
  return out.replace(/ {2,}/g, ' ');
}
