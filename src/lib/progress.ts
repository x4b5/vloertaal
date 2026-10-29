import type { Gender, UiCode } from '../i18n/types';
import { rulesTrackOn, trackOf, trackOfLang } from './track';
import { isSectorId, type SectorChoice } from '../content/sectors';
import { isRegionChoice, isRegionId, regionOf, regionsOn, type RegionChoice } from '../content/regio';
import { unitOfLesson } from '../content/courses';
import { rulesCourseUnits } from '../content/rulesCourse';
import type { Cards } from './spaced';
import type { TextSize } from './textSize';

export interface LessonRecord {
  /** Best accuracy so far, 0–1. */
  best: number;
  times: number;
}

export type ThemeChoice = 'auto' | 'light' | 'dark';

export interface Progress {
  onboarded: boolean;
  /** 'auto' follows the device setting; light is the default. */
  theme: ThemeChoice;
  /** 2 = saved after light became the default (see loadProgress). */
  themeVersion?: number;
  /** voiceURI of the chosen Dutch voice; null = best available. */
  voice: string | null;
  /**
   * "Without sound": no listening exercises, nothing plays by itself, no effect sounds.
   * Speaker buttons still play on tap. Missing in older saves = sound on.
   */
  quiet?: boolean;
  /** "Text size" in Settings (src/lib/textSize.ts). Missing = normal. */
  textSize?: TextSize;
  /** The help language; 'nl' = the screens in Dutch, the work-rules track (src/lib/track.ts). */
  helpLang: UiCode | null;
  /**
   * Woman, man or rather not say ('x'), for the help language's own sentences ("I am sick" in
   * Polish: chory / chora). On this device only. Undefined = not asked (same as 'x').
   */
  gender?: Gender;
  /**
   * "Woman or man?" was answered on its own one-time page (or, in older saves, the home card that
   * page replaced was closed with ✕): it never comes back. Settings can still choose. Missing = not asked.
   */
  genderAsked?: boolean;
  /** The learner's sector ('none' = not sure yet); undefined = not asked yet (first run). */
  sector?: SectorChoice;
  /**
   * "Waar woon je?" in Settings (src/content/regio): a region switches its own lessons on in the
   * path; 'none' = "Andere plek / zeg ik liever niet". Undefined = not chosen (the same as 'none').
   * Only on this phone: never sent anywhere, never counted.
   */
  region?: RegionChoice;
  xp: number;
  streak: number;
  /** Local date (YYYY-MM-DD) of the last finished lesson. */
  lastDay: string | null;
  completed: Record<string, LessonRecord>;
  /** "Herhaal vandaag": a card per word met, with its box and next date (src/lib/spaced.ts). Missing in older saves. */
  cards?: Cards;
  /** Local date of the last finished "Herhaal vandaag", so the card can say it is done for today. */
  reviewDay?: string;
  /** The last day a lesson (not only today's review) was finished: Bram's "done for today". */
  lessonDay?: string;
  /** Free days ("vrije dag") in hand: one is earned per 7 practised days, at most FREEZE_MAX. */
  freezes?: number;
  /** Days a free day was used for (YYYY-MM-DD, most recent last). Shown grey on the week row. */
  rest?: string[];
  /** The longest day streak so far ("Record"). Missing in older saves = the current streak. */
  bestStreak?: number;
  /** Certificates: the local date (YYYY-MM-DD) each finished unit was earned, by unit id. Missing in older saves. */
  certs?: Record<string, string>;
  /**
   * The home's current block ("one block at a time", src/lib/route.ts): the unit the learner chose
   * or was sent to by a coach link. It stays until it is finished. Missing = worked out from the
   * lessons done (older saves, a brand-new learner).
   */
  currentUnit?: string;
  /**
   * A block the learner picked (a suggestion on the home or a coach link) when only its mixed
   * review was left: the home then shows that review and does not go on past it (src/lib/route.ts).
   */
  pickedUnit?: string;
  /** The days practised (YYYY-MM-DD, most recent last, the last DAYS_KEEP), for the week row. */
  days?: string[];
  /** The one-time emergency-phrases row on the first lesson's result was shown. */
  phrasesShown?: boolean;
  /**
   * The other track's own place (src/lib/track.ts), put away while this one is on: its block,
   * its day of "Herhaal vandaag", its one-time pointer. Swapped back when the help language
   * switches track (switchTrack), so neither track overwrites the other's.
   */
  parked?: TrackPlace;
}

/** What each track keeps for itself (Progress.parked). */
export interface TrackPlace {
  currentUnit?: string;
  pickedUnit?: string;
  reviewDay?: string;
  phrasesShown?: boolean;
}

/** A new help language: when it changes track, this track's place is put away and the other's comes back. */
export function switchTrack(p: Progress, helpLang: UiCode | null): Progress {
  if (trackOfLang(helpLang) === trackOf(p)) return { ...p, helpLang };
  const back = p.parked ?? {};
  const away: TrackPlace = { currentUnit: p.currentUnit, pickedUnit: p.pickedUnit, reviewDay: p.reviewDay, phrasesShown: p.phrasesShown };
  return { ...p, helpLang, currentUnit: back.currentUnit, pickedUnit: back.pickedUnit, reviewDay: back.reviewDay, phrasesShown: back.phrasesShown, parked: away };
}

export const emptyProgress: Progress = {
  onboarded: false,
  // A new learner follows the phone (light or dark); a saved choice is kept (loadProgress).
  theme: 'auto',
  themeVersion: 2,
  voice: null,
  helpLang: null,
  xp: 0,
  streak: 0,
  lastDay: null,
  completed: {},
};

const KEY = 'vloertaal:v1';

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      // Light became the default later; an 'auto' saved before then was the old
      // default rather than a choice, so it moves to light. An explicit dark stays.
      if (saved.themeVersion !== 2) {
        saved.theme = saved.theme === 'dark' ? 'dark' : 'light';
        saved.themeVersion = 2;
      }
      // Saved before the automatic default for new learners: they had light, and keep it.
      if (saved.theme === undefined) saved.theme = 'light';
      // Older saves have no sector (asked once after the password); drop anything unknown.
      if (saved.sector !== undefined && saved.sector !== 'none' && !isSectorId(saved.sector)) delete saved.sector;
      if (saved.region !== undefined && !isRegionChoice(saved.region)) delete saved.region;
      // Regions while they are not offered (REGIONS_LIVE off): no region unit, no region map.
      if (saved.region !== undefined && !regionsOn()) delete saved.region;
      // The work-rules track while it is not offered (RULES_TRACK off): the language page again.
      if (saved.helpLang === 'nl' && !rulesTrackOn()) { saved.helpLang = null; saved.onboarded = false; }
      if (saved.gender !== undefined && !['f', 'm', 'x'].includes(saved.gender)) delete saved.gender;
      if (saved.genderAsked !== undefined && typeof saved.genderAsked !== 'boolean') delete saved.genderAsked;
      if (saved.currentUnit !== undefined && typeof saved.currentUnit !== 'string') delete saved.currentUnit;
      if (saved.pickedUnit !== undefined && typeof saved.pickedUnit !== 'string') delete saved.pickedUnit;
      if (saved.parked !== undefined) {
        const k = saved.parked as Record<string, unknown> | null;
        if (!k || typeof k !== 'object') delete saved.parked;
        else saved.parked = {
          currentUnit: typeof k.currentUnit === 'string' ? k.currentUnit : undefined,
          pickedUnit: typeof k.pickedUnit === 'string' ? k.pickedUnit : undefined,
          reviewDay: isDay(k.reviewDay) ? k.reviewDay : undefined,
          phrasesShown: k.phrasesShown === true || undefined,
        };
      }
      // Saved before the practised days were kept: none (the week row then counts the streak back).
      if (saved.days !== undefined) {
        if (Array.isArray(saved.days)) saved.days = saved.days.filter(isDay).slice(-DAYS_KEEP);
        else delete saved.days;
      }
      return { ...emptyProgress, ...saved };
    }
  } catch {
    // Private mode or blocked storage: start fresh, the app still works.
  }
  return emptyProgress;
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // Ignore: progress just won't survive a reload.
  }
}

export function dayKey(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${d}`;
}

export function daysBetween(a: string, b: string): number {
  const [ya, ma, da] = a.split('-').map(Number);
  const [yb, mb, db] = b.split('-').map(Number);
  return Math.round((Date.UTC(yb, mb - 1, db) - Date.UTC(ya, ma - 1, da)) / 86_400_000);
}

/** Streak to display today: it is lost once a whole day was skipped. */
export function currentStreak(p: Progress, today: Date): number {
  // A free day may still carry the streak over a missed day.
  const s = settleStreak(p, today).progress;
  if (!s.lastDay) return 0;
  return daysBetween(s.lastDay, dayKey(today)) <= 1 ? s.streak : 0;
}

export function xpFor(accuracy: number, review: boolean): number {
  const base = review ? 5 : 10;
  return base + (accuracy === 1 ? 5 : 0);
}

/** A free day is earned per this many practised days. */
export const FREEZE_EVERY = 7;
/** At most this many free days are held at once. */
export const FREEZE_MAX = 2;
/** Rest days kept in the save (only the last weeks are ever shown). */
const REST_KEEP = 30;
/** Practised days kept in the save: two weeks cover the week row. */
export const DAYS_KEEP = 14;
/** The first free day is earned on this day of the first streak, so it can protect week 1. */
export const FIRST_FREEZE_AT = 3;

/** The best streak so far, also for saves from before the record was kept. */
export function bestStreak(p: Progress): number {
  return Math.max(p.bestStreak ?? 0, p.streak);
}

/**
 * Brings the streak up to date when the app opens (and before practising). When exactly one day
 * was missed and a free day is in hand, it is used: that day becomes a rest day and the streak
 * goes on. When more was missed, the streak stops; `broken` is the streak that was lost, so the
 * app can say so once. The record (bestStreak) is kept either way.
 */
export function settleStreak(p: Progress, today: Date): { progress: Progress; broken?: number } {
  if (!p.lastDay || p.streak === 0) return { progress: p };
  const key = dayKey(today);
  const gap = daysBetween(p.lastDay, key);
  if (gap <= 1) return { progress: p };
  const freezes = p.freezes ?? 0;
  if (gap === 2 && freezes > 0) {
    const missed = addDay(p.lastDay, 1);
    return {
      progress: {
        ...p,
        freezes: freezes - 1,
        rest: [...(p.rest ?? []), missed].slice(-REST_KEEP),
        // The rest day counts as "kept up", so tomorrow's gap is measured from it.
        lastDay: missed,
        bestStreak: bestStreak(p),
      },
    };
  }
  return { progress: { ...p, streak: 0, bestStreak: bestStreak(p) }, broken: p.streak };
}

/** Adds a practised day to the kept list (sorted, no repeats, the last DAYS_KEEP). */
function addPractised(days: string[] | undefined, key: string): string[] {
  return [...new Set([...(days ?? []), key])].sort().slice(-DAYS_KEEP);
}

function addDay(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}

/** Practising today (a lesson or today's review): the streak, free days and record after it. */
function practise(p: Progress, today: Date): Progress {
  const key = dayKey(today);
  const s = settleStreak(p, today).progress;
  const gap = s.lastDay ? daysBetween(s.lastDay, key) : Infinity;
  if (gap === 0) return s; // already counted today
  // The last practised day is later than today (practised abroad ahead of Dutch time, a phone
  // clock set wrong, a backup from such a phone): the streak stays; today is a practised day too.
  if (gap < 0) return { ...s, days: addPractised(s.days, key) };
  const streak = gap === 1 ? s.streak + 1 : 1;
  // One free day per 7 days in a row, and the very first one early (day 3 of the first streak
  // that gets there), so it can already cover a missed day in the first week.
  const first = streak === FIRST_FREEZE_AT && bestStreak(s) < FIRST_FREEZE_AT;
  const earned = streak % FREEZE_EVERY === 0 || first ? 1 : 0;
  return {
    ...s,
    streak,
    lastDay: key,
    days: addPractised(s.days, key),
    freezes: Math.min(FREEZE_MAX, (s.freezes ?? 0) + earned),
    bestStreak: Math.max(bestStreak(s), streak),
  };
}

/**
 * The moment a finished lesson counts for: the end, or the start when the lesson began the day
 * before and that day has no practice yet (started at 23:58, finished at 00:03: yesterday is kept
 * up, not missed). When yesterday already counts, the lesson counts for today.
 */
export function practisedAt(started: Date, ended: Date, lastDay?: string | null): Date {
  const begun = dayKey(started);
  return daysBetween(begun, dayKey(ended)) === 1 && lastDay !== begun ? started : ended;
}

/** True once today has a finished lesson or review (the flame is lit). */
export function doneToday(p: Progress, today: Date): boolean {
  return p.lastDay === dayKey(today);
}

export type WeekDayState = 'done' | 'rest' | 'open';

/**
 * The work week (Monday to Sunday) around today, for the streak milestone: which days were
 * practised and which were rest days. The practised days are kept in the save (`days`), so a
 * missed day never wipes the days before it; saves from before that also count back from the
 * last day over the current streak (skipping rest days).
 */
export function workWeek(p: Progress, today: Date): { key: string; state: WeekDayState; today: boolean }[] {
  const todayKey = dayKey(today);
  const rest = new Set(p.rest ?? []);
  const done = new Set<string>((p.days ?? []).filter((d) => d <= todayKey));
  const sinceLast = p.lastDay ? daysBetween(p.lastDay, todayKey) : -1;
  // (A last day after today, a clock moved back: no walking back from a day still to come.)
  if (p.lastDay && p.streak > 0 && sinceLast >= 0 && sinceLast <= 1) {
    let day = p.lastDay;
    let left = p.streak;
    // Walk back over the streak; rest days sit inside it without counting.
    for (let guard = 0; left > 0 && guard < 400; guard++) {
      if (!rest.has(day)) { done.add(day); left--; }
      day = addDay(day, -1);
    }
  }
  const monday = addDay(todayKey, -((today.getDay() + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const key = addDay(monday, i);
    return { key, state: done.has(key) ? 'done' : rest.has(key) ? 'rest' : 'open', today: key === todayKey };
  });
}

/** Today's review counts for the day streak like a lesson, but is not a lesson on the path. */
export function completeDaily(p: Progress, accuracy: number, today: Date): Progress {
  return { ...practise(p, today), xp: p.xp + xpFor(accuracy, true), reviewDay: dayKey(today) };
}

export function completeLesson(
  p: Progress,
  lessonId: string,
  accuracy: number,
  review: boolean,
  today: Date,
): Progress {
  const prev = p.completed[lessonId];
  return {
    ...practise(p, today),
    lessonDay: dayKey(today),
    xp: p.xp + xpFor(accuracy, review),
    completed: {
      ...p.completed,
      [lessonId]: { best: Math.max(prev?.best ?? 0, accuracy), times: (prev?.times ?? 0) + 1 },
    },
  };
}

/**
 * True when finishing a lesson made the day streak go up (first lesson of the day),
 * so the milestone screen is shown once per day and not after every lesson.
 */
export function streakWentUp(before: Progress, after: Progress): boolean {
  return after.lastDay !== before.lastDay && after.streak > 0;
}

/** The day-streak tiers that get their own stamp on the milestone. */
export const STREAK_TIERS = [3, 7, 14, 30] as const;

/* ---- Backup ("Bewaar je voortgang"): a .json file the learner keeps, and puts back. ---- */

export const BACKUP_APP = 'vloertaal';
/** A real backup is a few kilobytes; a file this big is something else (and is not read). */
export const BACKUP_MAX_BYTES = 2_000_000;

/**
 * A lesson id this app knows: a lesson of either course or of a region. An id of a course whose
 * file is not on this phone yet (the work-rules course, a region's units) cannot be checked, so
 * it is kept; any other unknown id (a lesson that was removed, a typo) is left out.
 */
export function knownLessonId(id: string): boolean {
  if (unitOfLesson(id)) return true;
  const region = /^rg\.([a-z]+)\./.exec(id)?.[1];
  if (region) return isRegionId(region) && !regionOf(region);
  return id.startsWith('r.') && rulesCourseUnits().length === 0;
}

/** How many finished lessons count (the ones this app knows): the backup's numbers. */
export function knownLessons(completed: Record<string, unknown>): number {
  return Object.keys(completed).filter(knownLessonId).length;
}

export function backupFile(p: Progress, now: Date): string {
  return JSON.stringify({ app: BACKUP_APP, version: 1, saved: now.toISOString(), progress: p }, null, 1);
}

const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;

/**
 * Reads a backup file. Returns null for anything that is not a Vloertaal backup; keeps only
 * well-formed learning progress (lessons the app knows, words, streak), never settings from
 * another phone.
 */
export function parseBackup(text: string): Partial<Progress> | null {
  let data: unknown;
  try { data = JSON.parse(text); } catch { return null; }
  if (!data || typeof data !== 'object') return null;
  const d = data as { app?: unknown; progress?: unknown };
  if (d.app !== BACKUP_APP || !d.progress || typeof d.progress !== 'object') return null;
  const src = d.progress as Record<string, unknown>;
  if (!src.completed || typeof src.completed !== 'object' || Array.isArray(src.completed)) return null;
  const completed: Record<string, LessonRecord> = {};
  for (const [id, r] of Object.entries(src.completed as Record<string, unknown>)) {
    const rec = r as Partial<LessonRecord> | null;
    // A lesson the app does not know is neither counted nor merged.
    if (!knownLessonId(id)) continue;
    if (rec && typeof rec.best === 'number' && rec.best >= 0 && rec.best <= 1 && isCount(rec.times)) {
      completed[id] = { best: rec.best, times: Math.floor(rec.times) };
    }
  }
  const out: Partial<Progress> = { completed };
  if (isCount(src.xp)) out.xp = Math.floor(src.xp);
  if (isCount(src.streak)) out.streak = Math.floor(src.streak);
  if (isDay(src.lastDay)) out.lastDay = src.lastDay;
  if (isDay(src.reviewDay)) out.reviewDay = src.reviewDay;
  if (isDay(src.lessonDay)) out.lessonDay = src.lessonDay;
  if (isCount(src.freezes)) out.freezes = Math.min(FREEZE_MAX, Math.floor(src.freezes));
  if (isCount(src.bestStreak)) out.bestStreak = Math.floor(src.bestStreak);
  if (Array.isArray(src.rest)) out.rest = src.rest.filter(isDay).slice(-REST_KEEP);
  if (Array.isArray(src.days)) out.days = src.days.filter(isDay).sort().slice(-DAYS_KEEP);
  if (src.cards && typeof src.cards === 'object' && !Array.isArray(src.cards)) {
    const cards: Cards = {};
    for (const [id, c] of Object.entries(src.cards as Record<string, unknown>)) {
      const card = c as { box?: unknown; due?: unknown } | null;
      if (card && isCount(card.box) && card.box >= 1 && card.box <= 6 && isDay(card.due)) cards[id] = { box: Math.floor(card.box), due: card.due };
    }
    out.cards = cards;
  }
  if (src.certs && typeof src.certs === 'object' && !Array.isArray(src.certs)) {
    out.certs = Object.fromEntries(Object.entries(src.certs as Record<string, unknown>).filter((e): e is [string, string] => isDay(e[1])));
  }
  return out;
}

/**
 * Would putting this backup in place lose something on this phone: a lesson the file does not
 * have, a certificate, or the record? (Then the learner is asked once more: a file with as many
 * lessons as the phone can still be missing the ones done here.)
 */
export function replaceLoses(p: Progress, b: Partial<Progress>): boolean {
  const theirs = b.completed ?? {};
  if (Object.keys(p.completed).some((id) => knownLessonId(id) && !theirs[id])) return true;
  if (Object.keys(p.certs ?? {}).some((id) => !b.certs?.[id])) return true;
  return bestStreak(p) > Math.max(b.bestStreak ?? 0, b.streak ?? 0);
}

/** Puts a backup back in place of the progress on this phone (settings stay as they are). */
export function replaceWithBackup(p: Progress, b: Partial<Progress>): Progress {
  return {
    ...p,
    xp: b.xp ?? 0,
    streak: b.streak ?? 0,
    lastDay: b.lastDay ?? null,
    completed: b.completed ?? {},
    cards: b.cards ?? {},
    reviewDay: b.reviewDay,
    lessonDay: b.lessonDay,
    freezes: b.freezes,
    rest: b.rest,
    days: b.days,
    bestStreak: b.bestStreak,
    certs: b.certs,
    // The block follows the progress that was put back (worked out from its lessons).
    currentUnit: undefined,
    pickedUnit: undefined,
    parked: undefined,
  };
}

/** The earlier of two dates (either may be missing). */
const earlier = (x?: string, y?: string): string => (!x ? y! : !y ? x : x < y ? x : y);

/**
 * The streak of two phones together: the later side's, walking back over the practised days of
 * both (rest days count as kept up); reaching the earlier side's last day, its streak goes on.
 */
function joinedStreak(later: Partial<Progress>, earlier: Partial<Progress>, days: Set<string>, rest: Set<string>): number {
  const own = later.streak ?? 0;
  if (!later.lastDay || !own) return own;
  let n = 0;
  let day = later.lastDay;
  for (let guard = 0; guard < 400; guard++) {
    if (day === earlier.lastDay && earlier.streak) return Math.max(own, n + earlier.streak);
    if (days.has(day)) n++;
    else if (!rest.has(day)) break;
    day = addDay(day, -1);
  }
  return Math.max(own, n);
}

/** Adds a backup to the progress on this phone: the best of both, nothing is lost. */
export function mergeBackup(p: Progress, b: Partial<Progress>): Progress {
  const completed = { ...p.completed };
  for (const [id, r] of Object.entries(b.completed ?? {})) {
    const mine = completed[id];
    completed[id] = mine ? { best: Math.max(mine.best, r.best), times: Math.max(mine.times, r.times) } : r;
  }
  const cards: Cards = { ...(p.cards ?? {}) };
  for (const [id, c] of Object.entries(b.cards ?? {})) {
    const mine = cards[id];
    if (!mine || c.box > mine.box || (c.box === mine.box && c.due < mine.due)) cards[id] = c;
  }
  // The streak comes from whichever side practised last, carried on by the other side's when
  // the days join up; so do the free days (the max of both would hand out a used one again).
  const theirsLater = Boolean(b.lastDay && (!p.lastDay || b.lastDay > p.lastDay));
  const later = theirsLater ? b : p;
  const earlierSide = theirsLater ? p : b;
  const days = [...new Set([...(p.days ?? []), ...(b.days ?? [])])].sort().slice(-DAYS_KEEP);
  const rest = [...new Set([...(p.rest ?? []), ...(b.rest ?? [])])].sort().slice(-REST_KEEP);
  const streak = joinedStreak(later, earlierSide, new Set(days), new Set(rest));
  const max = (x?: string, y?: string) => (!x ? y : !y ? x : x > y ? x : y);
  return {
    ...p,
    xp: Math.max(p.xp, b.xp ?? 0),
    completed,
    cards,
    streak,
    lastDay: later.lastDay ?? null,
    reviewDay: max(p.reviewDay, b.reviewDay),
    lessonDay: max(p.lessonDay, b.lessonDay),
    freezes: later.freezes ?? 0,
    rest,
    days,
    bestStreak: Math.max(bestStreak(p), b.bestStreak ?? 0, b.streak ?? 0, streak),
    // A certificate keeps the date it was first earned, on either side.
    certs: Object.fromEntries(
      [...new Set([...Object.keys(p.certs ?? {}), ...Object.keys(b.certs ?? {})])]
        .map((id) => [id, earlier(p.certs?.[id], b.certs?.[id])]),
    ),
  };
}
