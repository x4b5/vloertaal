import type { LangCode } from '../i18n/types';

export interface LessonRecord {
  /** Best accuracy so far, 0–1. */
  best: number;
  times: number;
}

export type ThemeChoice = 'auto' | 'light' | 'dark';

export interface Progress {
  onboarded: boolean;
  /** 'auto' follows the device setting. */
  theme: ThemeChoice;
  /** voiceURI of the chosen Dutch voice; null = best available. */
  voice: string | null;
  helpLang: LangCode | null;
  xp: number;
  streak: number;
  /** Local date (YYYY-MM-DD) of the last finished lesson. */
  lastDay: string | null;
  completed: Record<string, LessonRecord>;
}

export const emptyProgress: Progress = {
  onboarded: false,
  theme: 'auto',
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
    if (raw) return { ...emptyProgress, ...JSON.parse(raw) };
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

function daysBetween(a: string, b: string): number {
  const [ya, ma, da] = a.split('-').map(Number);
  const [yb, mb, db] = b.split('-').map(Number);
  return Math.round((Date.UTC(yb, mb - 1, db) - Date.UTC(ya, ma - 1, da)) / 86_400_000);
}

/** Streak to display today: it is lost once a whole day was skipped. */
export function currentStreak(p: Progress, today: Date): number {
  if (!p.lastDay) return 0;
  return daysBetween(p.lastDay, dayKey(today)) <= 1 ? p.streak : 0;
}

export function xpFor(accuracy: number, review: boolean): number {
  const base = review ? 5 : 10;
  return base + (accuracy === 1 ? 5 : 0);
}

export function completeLesson(
  p: Progress,
  lessonId: string,
  accuracy: number,
  review: boolean,
  today: Date,
): Progress {
  const key = dayKey(today);
  let streak = p.streak;
  if (!p.lastDay) streak = 1;
  else {
    const gap = daysBetween(p.lastDay, key);
    if (gap === 1) streak += 1;
    else if (gap > 1) streak = 1;
  }
  const prev = p.completed[lessonId];
  return {
    ...p,
    xp: p.xp + xpFor(accuracy, review),
    streak,
    lastDay: key,
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
