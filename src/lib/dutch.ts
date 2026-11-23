import { allMatches } from './matches';

/**
 * Display helpers for Dutch words. Dutch glues words together (veiligheids|schoenen), and on a
 * 320–360 px phone such a compound in a big font is wider than its bubble. Browsers only
 * hyphenate Dutch where they ship a dictionary, so the course's long compounds get a soft
 * hyphen at their seam; anything else falls back to `overflow-wrap: anywhere` in CSS.
 * Only for showing text: speech and answer checking keep using the plain string.
 */
const SEAMS: [whole: string, at: number | number[]][] = [
  ['veiligheidsschoenen', 11],
  ['veiligheidsbril', 11],
  ['leidinggevende', 7],
  ['handschoenen', 4],
  ['snijhandschoen', [4, 8]],
  ['snijhandschoenen', [4, 8]],
  ['goedemorgen', 5],
  ['nooduitgang', 4],
  ['werkkleding', 4],
  ['samenwerken', 5],
  ['overwerken', 4],
  ['vertrouwenspersoon', 11],
  ['arbeidsinspectie', 7],
  ['huisartsenpost', 10],
  ['discriminatie', 6],
  // Every other word of 14 letters or more in the course (tests/dutchBreak.test.ts finds new ones).
  ['houdbaarheidsdatum', 13],
  ['beschermingsmiddelen', 12],
  ['reiskostenvergoeding', [4, 10]],
  ['sollicitatiegesprek', 12],
  ['heftruckcertificaat', 8],
  ['calamiteitenverlof', 12],
  ['schoonmaakmiddelen', 10],
  ['schoonmaakmiddel', 10],
  ['identiteitsbewijs', 11],
  ['zorgverzekering', 4],
  ['belastingdienst', 9],
  ['verpleegkundige', 8],
  ['bedrijfsleider', 8],
  ['valbeveiliging', 3],
  ['ouderschapsverlof', 11],
  ['telefoonnummer', 7],
  ['werkvergunning', 4],
  ['eindafrekening', 4],
  ['gehoorbescherming', 6],
  ['praktijkopleider', 8],
  ['stagebegeleider', 5],
  ['startkwalificatie', 5],
  ['gebruikersnaam', 10],
  // Numbers and the fire alarm (l.counting, l.alarm, 4 November 2026).
  ['zevenenveertig', 7],
  ['vierenzeventig', 6],
  ['verzamelplaats', 8],
  // Tegels, stuc en verf (u.afbouw, 20 November 2026): the tiler's and plasterer's compounds, shown
  // big on a word card.
  ['tegelsnijder', 5],
  ['tegelkruisje', 5],
  ['tegelkruisjes', 5],
  ['hoekprofiel', 4],
  ['sponsspaan', 5],
  ['oplegspaan', 5],
  // Metselen, hout en vastmaken and the shapes of Rekenen (20 November 2026).
  ['schroevendraaier', 9],
  ['kruisschroevendraaier', [5, 14]],
  ['timmermanshamer', 10],
  ['parallellogram', 10],
  ['metseltroffel', 6],
  ['lagenmaatlat', [5, 9]],
  ['inbussleutel', 5],
  ['strijkvaatje', 6],
  ['schuurpapier', 6],
  // Machines en gereedschap (21 November 2026).
  ['bedieningspaneel', 10],
  ['persluchtpistool', [4, 9]],
  // Elektra, leidingen en metaal (21 November 2026).
  ['spanningzoeker', 8],
  ['kolomboormachine', [5, 9]],
  // Assemblage en montage (21 November 2026).
  ['werkinstructie', 4],
  ['schroefmachine', 7],
  ['goedkeursticker', 8],
  // Kweken, sorteren en de kas and Banden, olie en remmen (22 November 2026).
  ['sorteermachine', 7],
  ['ontsmettingsmat', 12],
  ['bandenspanningsmeter', [6, 15]],
  ['slagmoersleutel', [4, 8]],
  ['bandenwisselaar', 6],
  ['diagnosecomputer', 8],
  ['waarschuwingslampje', 13],
  // Groen and Facilitair (23 November 2026).
  ['onkruidbrander', 7],
  ['bezoekerspasje', 9],
  ['koffieautomaat', 6],
  ['gereedschapskist', 12],
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026).
  ['bewegingsmelder', 9],
  ['brandmeldcentrale', 9],
  ['ontruimingsplan', 11],
  ['winkeldiefstal', 6],
  ['detectiepoortje', 8],
  ['kruisbesmetting', 5],
  ['metaaldetector', 6],
  ['kerntemperatuur', 4],
  ['prikthermometer', 4],
  ['kwaliteitsdienst', 10],
  ['achteruitrijden', 9],
  ['gevarensymbool', 7],
  ['vierogenprincipe', [4, 8]],
  // The five units of 23 November 2026 (Schoonmaak, Horeca, Zorg, Winkel, uitzendwerk).
  ['schrobzuigmachine', [6, 10]],
  ['veiligheidsblad', 11],
  ['lichtschakelaar', 5],
  ['allergenenlijst', 10],
  ['wijkverpleegkundige', [4, 12]],
  ['personeelsaankoop', 10],
  ['tassencontrole', 6],
  ['kassamedewerker', [5, 9]],
  ['bedrijfsregels', 8],
  ['contactpersoon', 7],
  // The basis units at four lessons (23 November 2026).
  ['sollicitatiebrief', 12],
  ['personeelsnummer', 10],
  ['verblijfsvergunning', 9],
  ['schadevergoeding', 6],
  ['vrijwilligerswerk', 13],
  ['bedrijfsongeval', 8],
  ['stagevergoeding', 5],
  ['geboorteverlof', 8],
];

export const SHY = '\u00ad';

/** The long compounds that get a soft hyphen (lower case). */
export const SEAM_WORDS: readonly string[] = SEAMS.map(([whole]) => whole);

/**
 * The text with a soft hyphen in the seam(s) of every long compound it contains. Display only:
 * the letters stay the same (plain(breakable(x)) === x), and speech and answer checking keep
 * using the plain string.
 */
export function breakable(nl: string): string {
  return nl.replace(/\p{L}{10,}/gu, (token) => {
    const seam = SEAMS.find(([whole]) => whole === token.toLowerCase());
    if (!seam) return token;
    const cuts = typeof seam[1] === 'number' ? [seam[1]] : seam[1];
    let out = '';
    let from = 0;
    for (const at of cuts) { out += token.slice(from, at) + SHY; from = at; }
    return out + token.slice(from);
  });
}

/** The text without soft hyphens (what was shown, back to what is said and checked). */
export const plain = (text: string): string => text.replace(/\u00ad/g, '');

const OPEN_Q = '«„“"\'‘‹';
const CLOSE_Q = '»”“"\'’›';

/**
 * A situation's text split around the Dutch sentence quoted in it, so the Dutch is shown once
 * (with its speaker) in its own place: 'Przełożony mówi: „Morgen begin je om half negen.” O
 * której …?' gives before 'Przełożony mówi:' and after 'O której …?'. The quote marks go with
 * the Dutch (its own line marks it out). Null when the text does not quote the sentence as it is.
 */
export function splitQuote(text: string, nl: string): { before: string; after: string } | null {
  const bare = nl.replace(/[.!?…]+$/u, '');
  let at = text.indexOf(nl);
  let end = at + nl.length;
  if (at < 0) {
    at = text.indexOf(bare);
    if (at < 0 || !bare) return null;
    end = at + bare.length;
    // The translation may end the quote with other punctuation ("…negen”." or "…negen!»").
    while (end < text.length && /[.!?…]/u.test(text[end])) end++;
  }
  if (at > 0 && OPEN_Q.includes(text[at - 1])) at--;
  if (end < text.length && CLOSE_Q.includes(text[end])) end++;
  const before = text.slice(0, at).trim();
  const after = text.slice(end).replace(/^[\s.,;:،]+/u, '').trim();
  return { before, after };
}

/** Size class for a Dutch word shown big, by its longest word: len-m from 10 letters, len-l from 14. */
export function wordSize(nl: string): string {
  const longest = Math.max(...nl.split(/\s+/).map((t) => t.length));
  return longest > 13 ? 'len-l' : longest > 9 ? 'len-m' : '';
}

/**
 * A text's sentences. One ends with . ! ? (also the Arabic ؟ and the Ethiopic ። ፧ ፨) and a space,
 * and the next one does not start with a small letter, and the dot is not an abbreviation's
 * ("np. w pracy", "напр. так", "bv. een", "(np. FNV)" go on in the same sentence). A sentence
 * may also end in a bracket ("… apply.) Do not …") or, before a capital, a closing quote ("… eerst
 * …?" This …"): a quoted Dutch phrase inside a sentence ("Say «Gefeliciteerd!» to …") does not
 * end it.
 */
/*
 * The places between sentences: a run of white space, by what comes just before it and just after.
 * Written without lookbehind, which iOS before 16.4 cannot make: the text before
 * the run is tested with patterns that end in $ instead (tests/oldPhones.test.ts has the old
 * single regex, and checks this gives the same).
 */
const SPACE_RUN = /\s+/gu;
/** The Ethiopic and Arabic stops always end a sentence ("… rijksoverheid.nl። cao …"). */
const AFTER_STOP_ALWAYS = /[؟።፧፨]$/u;
/** . ! ? … end one when the next does not start with a small letter, */
const AFTER_STOP = /[.!?…]$/u;
/** unless the dot is an abbreviation's. */
const AFTER_ABBREVIATION = /(?:^|[^\p{L}])(?:np|bv|vb|vs|ca|bijv|örn|напр|т\.е|e\.g|i\.e|z\.B|d\.h)\.$/u;
/** A stop and a closing bracket, before no small letter. */
const AFTER_BRACKET = /[.؟።]\)$/u;
/** A stop and a closing quote, before a capital. */
const AFTER_QUOTE = /[.!?…]["”’»“]$/u;
const SMALL_LETTER = /^\p{Ll}/u;
const CAPITAL = /^\p{Lu}/u;

/**
 * How much of the white space at t[at, end) is a sentence break (0: none). Mostly all of it; but
 * before a small letter, a break that only needs "no small letter next" leaves the last white
 * space character out (the next character is then white space), as the one regex this was did.
 */
function breakLength(t: string, at: number, end: number): number {
  // The few characters before are enough (the longest pattern: a character and "bijv."), and a
  // window that starts later than the text cannot make the abbreviation's ^ match.
  const before = t.slice(Math.max(0, at - 12), at);
  const all = end - at;
  if (AFTER_STOP_ALWAYS.test(before)) return all;
  const next = t.slice(end, end + 2);
  const noSmallNext = end < t.length && !SMALL_LETTER.test(next) ? all : all > 1 ? all - 1 : 0;
  if (AFTER_STOP.test(before) && !AFTER_ABBREVIATION.test(before)) return noSmallNext;
  if (AFTER_BRACKET.test(before)) return noSmallNext;
  if (AFTER_QUOTE.test(before) && CAPITAL.test(next)) return all;
  return 0;
}

/**
 * How deep in quotation marks each place of a text is: “…”, "…", «…», „…“ and „…” (a “ after
 * „ closes it, as in Bulgarian). null when the marks do not pair up (then no place counts as
 * quoted).
 */
function quoteDepths(text: string): number[] | null {
  const open: string[] = [];
  const depth: number[] = [];
  for (const ch of text) {
    const top = open[open.length - 1];
    if (ch === '„' || ch === '«') open.push(ch);
    else if (ch === '»') { if (top !== '«') return null; open.pop(); }
    else if (ch === '“') { if (top === '„') open.pop(); else open.push(ch); }
    else if (ch === '”') { if (top !== '„' && top !== '“') return null; open.pop(); }
    else if (ch === '"') { if (top === '"') open.pop(); else open.push(ch); }
    // One entry per UTF-16 unit, so the indices match the regex's.
    for (let k = 0; k < ch.length; k++) depth.push(open.length);
  }
  return open.length ? null : depth;
}

/** A text's sentences, never split inside a quotation ("For example: «… te laat. Sorry! Groet, Ali»." is one). */
export function sentences(text: string): string[] {
  const t = text.trim();
  const depth = quoteDepths(t);
  const out: string[] = [];
  let from = 0;
  for (const m of allMatches(t, SPACE_RUN)) {
    const at = m.index ?? 0;
    const length = breakLength(t, at, at + m[0].length);
    if (!length || (depth && depth[at])) continue;
    out.push(t.slice(from, at));
    from = at + length;
  }
  out.push(t.slice(from));
  return out;
}
