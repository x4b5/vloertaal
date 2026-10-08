import type { LangCode } from '../i18n/types';
import { isSectorId, type SectorChoice } from '../content/sectors';
import type { Cards } from './spaced';

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
  helpLang: LangCode | null;
  /** The learner's sector ('none' = not sure yet); undefined = not asked yet (first run). */
  sector?: SectorChoice;
  xp: number;
  streak: number;
  /** Local date (YYYY-MM-DD) of the last finished lesson. */
  lastDay: string | null;
  completed: Record<string, LessonRecord>;
  /** "Herhaal vandaag": a card per word met, with its box and next date (src/lib/spaced.ts). Missing in older saves. */
  cards?: Cards;
  /** Local date of the last finished "Herhaal vandaag", so the card can say it is done for today. */
  reviewDay?: string;
  /** Free days ("vrije dag") in hand: one is earned per 7 practised days, at most FREEZE_MAX. */
  freezes?: number;
  /** Days a free day was used for (YYYY-MM-DD, most recent last). Shown grey on the week row. */
  rest?: string[];
  /** The longest day streak so far ("Record"). Missing in older saves = the current streak. */
  bestStreak?: number;
}

export const emptyProgress: Progress = {
  onboarded: false,
  theme: 'light',
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
      // Older saves have no sector (asked once after the password); drop anything unknown.
      if (saved.sector !== undefined && saved.sector !== 'none' && !isSectorId(saved.sector)) delete saved.sector;
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
  const streak = gap === 1 ? s.streak + 1 : 1;
  const earned = streak % FREEZE_EVERY === 0 ? 1 : 0;
  return {
    ...s,
    streak,
    lastDay: key,
    freezes: Math.min(FREEZE_MAX, (s.freezes ?? 0) + earned),
    bestStreak: Math.max(bestStreak(s), streak),
  };
}

/** True once today has a finished lesson or review (the flame is lit). */
export function doneToday(p: Progress, today: Date): boolean {
  return p.lastDay === dayKey(today);
}

export type WeekDayState = 'done' | 'rest' | 'open';

/**
 * The work week (Monday to Sunday) around today, for the streak milestone: which days were
 * practised (worked back from the last day over the current streak, skipping rest days) and
 * which were rest days.
 */
export function workWeek(p: Progress, today: Date): { key: string; state: WeekDayState; today: boolean }[] {
  const todayKey = dayKey(today);
  const rest = new Set(p.rest ?? []);
  const done = new Set<string>();
  if (p.lastDay && p.streak > 0 && daysBetween(p.lastDay, todayKey) <= 1) {
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

export function backupFile(p: Progress, now: Date): string {
  return JSON.stringify({ app: BACKUP_APP, version: 1, saved: now.toISOString(), progress: p }, null, 1);
}

const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;

/**
 * Reads a backup file. Returns null for anything that is not a Vloertaal backup; keeps only
 * well-formed learning progress (lessons, words, streak), never settings from another phone.
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
    if (rec && typeof rec.best === 'number' && rec.best >= 0 && rec.best <= 1 && isCount(rec.times)) {
      completed[id] = { best: rec.best, times: Math.floor(rec.times) };
    }
  }
  const out: Partial<Progress> = { completed };
  if (isCount(src.xp)) out.xp = Math.floor(src.xp);
  if (isCount(src.streak)) out.streak = Math.floor(src.streak);
  if (isDay(src.lastDay)) out.lastDay = src.lastDay;
  if (isDay(src.reviewDay)) out.reviewDay = src.reviewDay;
  if (isCount(src.freezes)) out.freezes = Math.min(FREEZE_MAX, Math.floor(src.freezes));
  if (isCount(src.bestStreak)) out.bestStreak = Math.floor(src.bestStreak);
  if (Array.isArray(src.rest)) out.rest = src.rest.filter(isDay).slice(-REST_KEEP);
  if (src.cards && typeof src.cards === 'object' && !Array.isArray(src.cards)) {
    const cards: Cards = {};
    for (const [id, c] of Object.entries(src.cards as Record<string, unknown>)) {
      const card = c as { box?: unknown; due?: unknown } | null;
      if (card && isCount(card.box) && card.box >= 1 && card.box <= 6 && isDay(card.due)) cards[id] = { box: Math.floor(card.box), due: card.due };
    }
    out.cards = cards;
  }
  return out;
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
    freezes: b.freezes,
    rest: b.rest,
    bestStreak: b.bestStreak,
  };
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
  // The streak comes from whichever side practised last.
  const theirsLater = Boolean(b.lastDay && (!p.lastDay || b.lastDay > p.lastDay));
  const later = theirsLater ? b : p;
  const max = (x?: string, y?: string) => (!x ? y : !y ? x : x > y ? x : y);
  return {
    ...p,
    xp: Math.max(p.xp, b.xp ?? 0),
    completed,
    cards,
    streak: later.streak ?? 0,
    lastDay: later.lastDay ?? null,
    reviewDay: max(p.reviewDay, b.reviewDay),
    freezes: Math.max(p.freezes ?? 0, b.freezes ?? 0),
    rest: [...new Set([...(p.rest ?? []), ...(b.rest ?? [])])].sort().slice(-REST_KEEP),
    bestStreak: Math.max(bestStreak(p), b.bestStreak ?? 0, b.streak ?? 0),
  };
}
