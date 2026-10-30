import { findLesson } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import { TOETS_PARTS, type ToetsPart } from '../content/toets';
import { certDate, earnedCertificates } from './certificate';
import { dayKey, type Progress } from './progress';
import { trackOf, trackOfId, type Track } from './track';
import type { ToetsRun } from './toetsState';

/**
 * The coach card ("begeleiderskaart", Settings › "Laat zien hoe het gaat"): a picture the phone
 * makes itself (src/lib/kaartCanvas.ts) and the learner shows to a coach, teacher or employer. No
 * account, nothing leaves the phone: the card is only what the progress on this phone already
 * holds, counted. The texts are Dutch (for the coach); the screen around it explains it in the
 * help language. No judgement ("goed", "slecht") and no CEFR level, on purpose.
 *
 * Pure: kaartData makes the fields from the progress, kaartRows the lines the picture and its text
 * alternative both show (one source, so they cannot say different things).
 */

/** The window of "days practised": the last 4 weeks, today included. */
export const KAART_DAYS = 28;

/** The line at the bottom, small. */
export const KAART_NOTE = 'Gemaakt op deze telefoon. Vloertaal bewaart niets.';

export interface KaartToets {
  /** "2 oktober 2026" */
  date: string;
  /** Right out of how many, per part, in the order of TOETS_PARTS. */
  parts: { part: ToetsPart; nl: string; right: number; of: number }[];
}

export interface KaartData {
  /** The learner's own name (as on the certificates), '' = none. */
  name: string;
  track: Track;
  /** Finished topics of this track. */
  unitsDone: number;
  /** The last (at most) three finished topics, by their Dutch title, the latest first. */
  lastUnits: string[];
  /** Days practised in the last KAART_DAYS days (today included). */
  days: number;
  /** The lesson finished last: what it was (Dutch) and when ("28 oktober 2026"). */
  lastLesson?: { text?: string; date: string };
  /** "Wat ken je al?" (the language track only): the start and/or the end, when done. */
  toets?: { instap?: KaartToets; eind?: KaartToets };
  /** Today, "30 oktober 2026". */
  date: string;
}

const PART_NL: Record<ToetsPart, string> = { listen: 'Luisteren', words: 'Woorden', sentences: 'Zinnen' };

function addDay(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}

/**
 * The days practised in the last `window` days, today included, from what the progress already
 * keeps: the practised days (`days`), the streak counted back from its last day (saves from
 * before `days`; rest days do not count), and the days a lesson, a review or a certificate was
 * done. Only a count of dates on this phone.
 */
export function practisedDays(p: Progress, today: Date, window = KAART_DAYS): number {
  const key = dayKey(today);
  const from = addDay(key, -(window - 1));
  const rest = new Set(p.rest ?? []);
  const seen = new Set<string>(p.days ?? []);
  for (const d of [p.lastDay, p.lessonDay, p.reviewDay, ...Object.values(p.certs ?? {})]) if (d) seen.add(d);
  if (p.lastDay && p.streak > 0) {
    let day = p.lastDay;
    let left = p.streak;
    for (let guard = 0; left > 0 && guard < 400 && day >= from; guard++) {
      if (!rest.has(day)) { seen.add(day); left--; }
      day = addDay(day, -1);
    }
  }
  return [...seen].filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !rest.has(d) && d >= from && d <= key).length;
}

/** "Eerste werkdag, les 2"; a mixed review: "Eerste werkdag, herhaling"; Werkregels: "Loon: Je loonstrook". */
export function lessonText(lessonId: string): string | undefined {
  const found = findLesson(lessonId);
  if (!found) return undefined;
  const { unit, lesson } = found;
  if (trackOfId(unit.id) === 'regels') return isMixLesson(lesson) ? `${unit.titleNl}, herhaling` : `${unit.titleNl}: ${lesson.title}`;
  if (isMixLesson(lesson)) return `${unit.titleNl}, herhaling`;
  const n = unit.lessons.filter((l) => !isMixLesson(l)).indexOf(lesson) + 1;
  return n > 0 ? `${unit.titleNl}, les ${n}` : unit.titleNl;
}

function toetsOf(run: ToetsRun): KaartToets {
  return { date: certDate(run.day), parts: TOETS_PARTS.map((part) => ({ part, nl: PART_NL[part], right: run.right[part], of: run.of[part] })) };
}

/** The card's fields, from the progress on this phone, the learner's name and today. */
export function kaartData(p: Progress, name: string, today: Date): KaartData {
  const track = trackOf(p);
  const earned = earnedCertificates(p, today, track);
  // The latest first; on the same day, the later topic of the course first.
  const latest = earned.map((e, i) => ({ ...e, i })).sort((a, b) => (a.day === b.day ? b.i - a.i : a.day < b.day ? 1 : -1));
  const last = p.lastLesson && trackOfId(p.lastLesson) === track ? p.lastLesson : undefined;
  const lastLesson = p.lessonDay && (last || !p.lastLesson)
    ? { text: last ? lessonText(last) : undefined, date: certDate(p.lessonDay) }
    : undefined;
  const t = track === 'taal' ? p.toets : undefined;
  const toets = t?.instap || t?.eind
    ? { ...(t.instap ? { instap: toetsOf(t.instap) } : {}), ...(t.eind ? { eind: toetsOf(t.eind) } : {}) }
    : undefined;
  return {
    name: name.trim(),
    track,
    unitsDone: earned.length,
    lastUnits: latest.slice(0, 3).map((e) => e.unit.titleNl),
    days: practisedDays(p, today),
    ...(lastLesson ? { lastLesson } : {}),
    ...(toets ? { toets } : {}),
    date: certDate(dayKey(today)),
  };
}

/** The track, on the card's first line. */
export const kaartTrack = (d: Pick<KaartData, 'track'>): string => (d.track === 'regels' ? 'Werkregels (werken in Nederland)' : 'Taal (Nederlands voor het werk)');

/** "Luisteren 4/6 · Woorden 5/6 · Zinnen 4/6" */
export const toetsLineNl = (t: KaartToets): string => t.parts.map((x) => `${x.nl} ${x.right}/${x.of}`).join(' · ');

export interface KaartRow {
  label: string;
  /** The value on the label's line. */
  value: string;
  /** A line under it (the topics' names). */
  more?: string[];
  /** Blocks under it, each a small head and its line (the test: the moment, then its parts). */
  sub?: { head: string; text: string }[];
}

/** The lines of the card, in order (the picture and its text alternative). */
export function kaartRows(d: KaartData): KaartRow[] {
  const rows: KaartRow[] = [
    { label: 'Spoor', value: kaartTrack(d) },
    {
      label: 'Onderwerpen af',
      value: String(d.unitsDone),
      more: d.lastUnits.length ? [d.unitsDone > d.lastUnits.length ? `De laatste ${d.lastUnits.length}: ${d.lastUnits.join(', ')}` : d.lastUnits.join(', ')] : undefined,
    },
    { label: 'Dagen geoefend', value: `${d.days} ${d.days === 1 ? 'dag' : 'dagen'} in de laatste 4 weken` },
    {
      label: 'Laatste les',
      value: d.lastLesson ? [d.lastLesson.text, d.lastLesson.date].filter(Boolean).join(' · ') : 'nog geen',
    },
  ];
  if (d.toets) {
    const sub: { head: string; text: string }[] = [];
    if (d.toets.instap) sub.push({ head: `Instap · ${d.toets.instap.date}`, text: toetsLineNl(d.toets.instap) });
    if (d.toets.eind) sub.push({ head: `Eind · ${d.toets.eind.date}`, text: toetsLineNl(d.toets.eind) });
    rows.push({ label: 'Toets “Wat ken je al?”', value: '', sub });
  }
  return rows;
}

/** What a screen reader hears for the card (one picture): everything on it, in its order, in Dutch. */
export function kaartAlt(d: KaartData): string {
  const end = (t: string) => (/[.!?]$/.test(t) ? t : `${t}.`);
  const parts = [`Voortgang Vloertaal, ${d.date}.`];
  if (d.name) parts.push(`Naam: ${end(d.name)}`);
  for (const r of kaartRows(d)) {
    parts.push(r.value ? end(`${r.label}: ${r.value}`) : `${r.label}:`);
    for (const m of r.more ?? []) parts.push(end(m));
    for (const b of r.sub ?? []) parts.push(end(`${b.head.replace(' · ', ', ')}: ${b.text}`));
  }
  parts.push(KAART_NOTE);
  return parts.join(' ');
}
