import { useSyncExternalStore } from 'react';
import type { Dialogue, Lesson, Sentence, Unit, Word } from './types';
import type { SkeletonUnit } from './workSkeleton';

/**
 * The lesson texts of the work, sector and culture units (the owner's choice, 22 November 2026):
 * their words, sentences and chats are the biggest part of the course and grew with every sector
 * unit, while the first screen only needs the units' and lessons' names and ids. So the start file
 * holds the skeleton (./workSkeleton.ts, made from ./work.ts by `npm run skeleton`), and the texts
 * come in a file of their own (./work.ts), loaded right after the start (loadLessonTexts, from
 * src/main.tsx) next to the tips and the word pictures (src/lib/tips.ts, src/pictures/index.ts, the
 * same pattern). The app waits for them before any screen after the language page (App.tsx).
 *
 * A skeleton lesson asks for its words, sentences and chats here when they are read (getters), so
 * every file keeps reading `lesson.words` as before. Read before the texts are here, they are
 * empty, and in development and tests that throws (tests/lessonTexts.test.ts imports the app
 * without them: a file that reads a lesson's texts while it is being read fails there).
 *
 * No screen or lib file imports ./work.ts directly: that would put the texts back in the start
 * file (tests/lessonTexts.test.ts).
 */
type Texts = typeof import('./work');

let texts: Texts | undefined;
let textsUrl: string | undefined;
let loading: Promise<void> | undefined;
const byId = new Map<string, Lesson>();
const waiting = new Set<() => void>();
const onLoad: (() => void)[] = [];

/** Throw instead of answering empty when the texts are read too early (development and tests). */
// import.meta.env is not there when the build config reads the course in Node (vite.config.ts).
const env = (import.meta as { env?: { DEV?: boolean; MODE?: string } }).env;
let strict = Boolean(env?.DEV || env?.MODE === 'test');

export function lessonTextsLoaded(): boolean {
  return texts !== undefined;
}

/** Registers the loaded texts (the app: loadLessonTexts; Node: ./lessonTextsNode.ts). */
export function registerLessonTexts(m: Texts): void {
  if (texts !== undefined) return;
  for (const u of [m.doUnit, m.toolsUnit, m.dataUnit, ...m.workUnits]) for (const l of u.lessons) byId.set(l.id, l);
  texts = m;
  textsUrl = m.url;
  onLoad.splice(0).forEach((fn) => fn());
  waiting.forEach((fn) => fn());
}

/** Loads the lesson texts (once; again after a failure). */
export function loadLessonTexts(): Promise<void> {
  if (texts !== undefined) return Promise.resolve();
  loading ??= import('./work').then(registerLessonTexts, (e: unknown) => {
    loading = undefined;
    throw e;
  });
  return loading;
}

/** Runs `fn` once the texts are here (at once when they already are). */
export function whenLessonTexts(fn: () => void): void {
  if (texts !== undefined) fn();
  else onLoad.push(fn);
}

/** The texts' file, when loaded on this visit (saved with the app for offline use). */
export function loadedLessonTextsUrl(): string | undefined {
  return textsUrl && /^https?:/.test(textsUrl) ? textsUrl : undefined;
}

const subscribe = (fn: () => void) => {
  waiting.add(fn);
  return () => {
    waiting.delete(fn);
  };
};

/** Re-renders when the lesson texts arrive. */
export function useLessonTextsLoaded(): boolean {
  return useSyncExternalStore(subscribe, lessonTextsLoaded, lessonTextsLoaded);
}

/** The full lesson (with its texts) of a skeleton lesson id; throws in strict mode before the load. */
function full(id: string): Lesson | undefined {
  const l = byId.get(id);
  if (l) return l;
  if (strict) throw new Error(`lessonTexts: the texts of ${id} are read before they are loaded (src/content/lessonTexts.ts)`);
  return undefined;
}

const NONE: never[] = [];

/** A lesson of the skeleton whose words, sentences and chats come from the loaded texts. */
export function skeletonLesson(s: { id: string; title: string; titleId?: string }): Lesson {
  return {
    ...s,
    get words(): Word[] {
      return full(s.id)?.words ?? NONE;
    },
    get sentences(): Sentence[] {
      return full(s.id)?.sentences ?? NONE;
    },
    get dialogues(): Dialogue[] | undefined {
      return full(s.id)?.dialogues;
    },
  };
}

/** A unit of the skeleton, with skeleton lessons. */
export function skeletonUnit(u: SkeletonUnit): Unit {
  return { ...u, lessons: u.lessons.map(skeletonLesson) };
}

/** Tests only: answer empty instead of throwing before the load (as the app does in production). */
export function setLessonTextsStrict(on: boolean): void {
  strict = on;
}
