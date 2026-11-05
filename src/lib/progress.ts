import type { Gender, UiCode } from '../i18n/types';
import { LANG_CODES } from '../i18n/meta';
import { rulesTrackOn, trackOf, trackOfLang, type Track } from './track';
import { isSectorId, type SectorChoice } from '../content/sectors';
import { isRegionChoice, isRegionId, regionOf, regionsOn, type RegionChoice } from '../content/regio';
import { findCourseUnit, isRulesLessonAnyCountry, unitOfLesson } from '../content/courses';
import { rulesCourseUnits } from '../content/rulesCourse';
import type { Card, Cards } from './spaced';
import { mergeToets, readToets, type ToetsState } from './toetsState';

/** The country the learner works in (Settings): the work rules are those of the Netherlands. */
export type Country = 'nl' | 'be';
export const isCountry = (x: unknown): x is Country => x === 'nl' || x === 'be';
import { TEXT_SIZES, type TextSize } from './textSize';
import { CALM_CHOICES, type CalmChoice } from './calm';
import { isTempo, type Tempo } from './tempo';
import { readPace, type PaceState } from './pace';
import { SKIPS_KEEP } from './chorus';

export interface LessonRecord {
  /** Best accuracy so far, 0–1. */
  best: number;
  times: number;
  /**
   * Ticked off with a short check ("Ik ken dit al", src/lib/instapCheck.ts), not done: the day
   * (YYYY-MM-DD). Such a record has best 0 and times 0. The lesson counts as done everywhere,
   * but its topic earns no certificate; doing the lesson for real gives a normal record.
   */
  check?: string;
}

/** The look: a colour picked in Settings > Weergave (light = "Zand", the default), or 'auto'
 *  (zand or dark as the device says; still in older saves, no longer offered). */
export type ThemeChoice = 'auto' | 'light' | 'haven' | 'werkjas' | 'dark';
/** The four colours in Settings, in this order. */
export const THEME_COLOURS = ['light', 'haven', 'werkjas', 'dark'] as const;
const isThemeChoice = (t: unknown): t is ThemeChoice => t === 'auto' || (THEME_COLOURS as readonly unknown[]).includes(t);

export interface Progress {
  onboarded: boolean;
  /** The colour (Settings > Weergave); light (Zand) is the default, 'auto' follows the device. */
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
  /** "Rustig scherm" in Settings (src/lib/calm.ts). Missing = auto (as the phone's "less motion"). */
  calm?: CalmChoice;
  /** "Tempo" in Settings (src/lib/tempo.ts): 'calm' ("Rustig") or 'normal' ("Normaal"). Missing in
   *  older saves = calm, the pace from before. */
  tempo?: Tempo;
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
  /** "Welke kleur wil je?" was answered in the first run. That page is gone (5 November 2026; the
   *  colour is only in Settings): kept so older saves still read, no longer used. */
  colourAsked?: boolean;
  /** The learner's sector ('none' = not sure yet); undefined = not asked yet (first run). */
  sector?: SectorChoice;
  /**
   * "Waar woon je?" in Settings (src/content/regio): a region switches its own lessons on in the
   * path; 'none' = "Andere plek / zeg ik liever niet". Undefined = not chosen (the same as 'none').
   * Only on this phone: never sent anywhere, never counted.
   */
  region?: RegionChoice;
  /**
   * "In welk land werk je?" in Settings: 'be' (Vlaanderen) shows that the work rules are about
   * the Netherlands and gives the Belgian help in the Hulp tab (docs/belgie-vlaanderen-plan.md).
   * Undefined = not chosen (the same as 'nl'). Only on this phone: never sent anywhere.
   */
  country?: Country;
  /** "Goed om te weten" (the work rules are general information, about the Netherlands) was
   *  read, on its own page the first time the work-rules track opened. Missing = not yet. */
  rulesNotice?: boolean;
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
  /** The lesson finished last (its id), for the coach card ("Laat zien hoe het gaat",
   *  src/lib/kaart.ts). Only on this phone, like the rest. Missing in older saves. */
  lastLesson?: string;
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
  /** The days practised (YYYY-MM-DD, most recent last, the last DAYS_KEEP), for the week row and
   *  the coach card's "days practised in the last 4 weeks". */
  days?: string[];
  /** The one-time emergency-phrases row on the first lesson's result was shown. */
  phrasesShown?: boolean;
  /**
   * The other track's own place (src/lib/track.ts), put away while this one is on: its block,
   * its day of "Herhaal vandaag", its one-time pointer. Swapped back when the help language
   * switches track (switchTrack), so neither track overwrites the other's.
   */
  parked?: TrackPlace;
  /** "Wat ken je al?" (src/lib/toets.ts): the start and the end, with a version of its own. Missing = not done. */
  toets?: ToetsState;
  /** Lessons at the learner's level (src/lib/pace.ts): "Wil je sneller?" and a shorter lesson
   *  after many mistakes. A setting of this phone: not in the backup. Missing = as before. */
  pace?: PaceState;
  /**
   * The first day this phone used the app (YYYY-MM-DD): a notice (src/lib/notice.ts) only shows
   * when its update is newer, so a new learner never sees old notices. Set on the first open; a
   * save from before it gets the earliest day it knows (firstDayOf), else that day. On this phone only.
   */
  firstDay?: string;
  /** The notices seen ("Er is iets veranderd", their ids). On this phone only: not in the backup. */
  noticesSeen?: string[];
  /** "Wil je ook de werkregels leren?" (src/lib/bridge.ts) was answered: it does not come back. On this phone only. */
  bridgeSeen?: true;
  /**
   * "Zeg het samen" (src/lib/chorus.ts): the first speaking exercise of a lesson was met, so Bram's
   * "Fouten mogen" and the first "Zeg het samen" have been offered, once. On this phone only.
   */
  speakMet?: true;
  /** "Zeg het samen": speaking exercises in a row ended with "Zeg het liever hardop" while the
   *  microphone could record (a recording sets it back to none). On this phone only: not in the backup. */
  speakSkips?: number;
  /**
   * "Gelukt op het werk": the sentences of "Probeer het vandaag op je werk" the learner said at
   * work ("Ja, gelukt", src/lib/workTry.ts addGelukt), oldest first, each once. Shown in Settings ›
   * Taal en ik (src/components/GeluktCard.tsx GeluktList). Learning progress: in the backup, gone
   * with "Voortgang wissen". Only on this phone. Missing = none yet.
   */
  gelukt?: GeluktEntry[];
}

/** A sentence said at work: its id (for the translation), its Dutch, what it means in English
 *  (empty in Werkregels: all Dutch) and the day of "Ja, gelukt" (YYYY-MM-DD). */
export interface GeluktEntry {
  id: string;
  nl: string;
  en: string;
  day: string;
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
  // Light by default, also on a phone set to dark (the owner's choice, 1 November 2026); dark or
  // "follow the phone" is a choice in Settings, and a saved choice is kept (loadProgress).
  theme: 'light',
  themeVersion: 3,
  voice: null,
  helpLang: null,
  xp: 0,
  streak: 0,
  lastDay: null,
  completed: {},
};

const KEY = 'vloertaal:v1';

/* ---- What is saved, read field by field: one check per field, for the progress on this phone
   (loadProgress) and in a backup file (parseBackup) alike. Until 4 November 2026 each had its
   own checks, which drifted apart: a save with `completed: null` or a number as `lastDay` got
   past loadProgress and stopped the app at its start. ---- */

const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
/** A help language this app has ('nl' is the work-rules track). */
const isHelpLang = (v: unknown): v is UiCode => v === 'nl' || (LANG_CODES as readonly unknown[]).includes(v);

/** A field's check: the value as this app reads it, or undefined when it can't be read (then it is left out). */
type Check<T> = (v: unknown) => T | undefined;
const bool: Check<boolean> = (v) => (typeof v === 'boolean' ? v : undefined);
const str: Check<string> = (v) => (typeof v === 'string' ? v : undefined);
const day: Check<string> = (v) => (isDay(v) ? v : undefined);
const count: Check<number> = (v) => (isCount(v) ? Math.floor(v) : undefined);
const oneOf = <T>(values: readonly T[]): Check<T> => (v) => ((values as readonly unknown[]).includes(v) ? (v as T) : undefined);
/** A list of days (YYYY-MM-DD), the last `keep` of them; anything else in the list is left out. */
function dayList(v: unknown, keep: number, sort = false): string[] | undefined {
  if (!Array.isArray(v)) return undefined;
  const list = v.filter(isDay);
  return (sort ? list.sort() : list).slice(-keep);
}
/** An object of id → value: the entries whose value can be read. */
const byId = <T>(check: Check<T>): Check<Record<string, T>> => (v) => {
  if (!isObject(v)) return undefined;
  const out: Record<string, T> = {};
  for (const [id, x] of Object.entries(v)) {
    const y = check(x);
    if (y !== undefined) out[id] = y;
  }
  return out;
};

/** A finished lesson: its best (0–1) and how often. A check's day ("Ik ken dit al") only on a record without lessons done. */
const readRecord: Check<LessonRecord> = (v) => {
  if (!isObject(v) || typeof v.best !== 'number' || !(v.best >= 0 && v.best <= 1) || !isCount(v.times)) return undefined;
  const rec: LessonRecord = { best: v.best, times: Math.floor(v.times) };
  if (isDay(v.check) && !v.times) rec.check = v.check;
  return rec;
};
/** A word's card for "Herhaal vandaag": its box (1–6, src/lib/spaced.ts) and the day it is due. */
const readCard: Check<Card> = (v) => (isObject(v) && isCount(v.box) && v.box >= 1 && v.box <= 6 && isDay(v.due) ? { box: Math.floor(v.box), due: v.due } : undefined);
/** At most this many sentences said at work are kept (the courses have fewer than that). */
export const GELUKT_KEEP = 500;
/** One sentence said at work (GeluktEntry). */
const readGeluktEntry: Check<GeluktEntry> = (v) => (isObject(v) && typeof v.id === 'string' && v.id && typeof v.nl === 'string' && v.nl.trim() && isDay(v.day)
  ? { id: v.id, nl: v.nl, en: typeof v.en === 'string' ? v.en : '', day: v.day }
  : undefined);
/** The sentences said at work: each one once (its first day), oldest first. */
const readGelukt: Check<GeluktEntry[]> = (v) => (Array.isArray(v) ? joinGelukt(v.map(readGeluktEntry).filter((e): e is GeluktEntry => e !== undefined)) : undefined);

/** Sentences said at work, from one list or two: each id once (the earliest day), oldest first. */
export function joinGelukt(...lists: (readonly GeluktEntry[] | undefined)[]): GeluktEntry[] {
  const byId = new Map<string, GeluktEntry>();
  for (const e of lists.flatMap((l) => l ?? [])) {
    const had = byId.get(e.id);
    if (!had || e.day < had.day) byId.set(e.id, e);
  }
  // A stable sort: on the same day, the order they were said in.
  return [...byId.values()].sort((a, b) => (a.day < b.day ? -1 : a.day > b.day ? 1 : 0)).slice(-GELUKT_KEEP);
}

/** The other track's place (switchTrack). */
const readPlace: Check<TrackPlace> = (v) => (isObject(v) ? { currentUnit: str(v.currentUnit), pickedUnit: str(v.pickedUnit), reviewDay: day(v.reviewDay), phrasesShown: v.phrasesShown === true || undefined } : undefined);

/**
 * Every field of Progress with its check (the type asks for one for each field, so a new field
 * cannot be forgotten here). A value that can't be read is left out: an optional field is then
 * missing, a required one gets its default (emptyProgress).
 */
const FIELDS: { [K in keyof Progress]-?: Check<Progress[K]> } = {
  onboarded: bool,
  theme: (v) => (isThemeChoice(v) ? v : undefined),
  themeVersion: count,
  voice: (v) => (v === null || typeof v === 'string' ? v : undefined),
  quiet: bool,
  textSize: oneOf(TEXT_SIZES),
  calm: oneOf(CALM_CHOICES),
  // "Tempo" came later: a missing one is calm (the old pace).
  tempo: (v) => (isTempo(v) ? v : undefined),
  // A help language this app does not know: see progressFrom.
  helpLang: (v) => (v === null || isHelpLang(v) ? v : undefined),
  gender: oneOf<Gender>(['f', 'm', 'x']),
  genderAsked: bool,
  colourAsked: bool,
  // Older saves have no sector (asked once after the password).
  sector: (v) => (v === 'none' || isSectorId(v) ? v : undefined),
  region: (v) => (isRegionChoice(v) ? v : undefined),
  country: (v) => (isCountry(v) ? v : undefined),
  rulesNotice: bool,
  xp: count,
  streak: count,
  lastDay: day,
  completed: byId(readRecord),
  cards: byId(readCard),
  reviewDay: day,
  lessonDay: day,
  lastLesson: str,
  freezes: (v) => (isCount(v) ? Math.min(FREEZE_MAX, Math.floor(v)) : undefined),
  rest: (v) => dayList(v, REST_KEEP),
  bestStreak: count,
  certs: byId(day),
  currentUnit: str,
  pickedUnit: str,
  // Saved before the practised days were kept: none (the week row then counts the streak back).
  days: (v) => dayList(v, DAYS_KEEP, true),
  phrasesShown: bool,
  parked: readPlace,
  // The test's results and the pace (added later): kept when they can be read.
  toets: readToets,
  pace: readPace,
  // (A missing first day is filled in by withFirstDay.)
  firstDay: day,
  noticesSeen: (v) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : undefined),
  bridgeSeen: (v) => (v === true ? true : undefined),
  speakMet: (v) => (v === true ? true : undefined),
  speakSkips: (v) => (isCount(v) && v >= 1 ? Math.min(SKIPS_KEEP, Math.floor(v)) : undefined),
  gelukt: readGelukt,
};

/** The fields asked for that can be read, each checked (FIELDS). */
function readFields<K extends keyof Progress>(src: Record<string, unknown>, keys: readonly K[]): Partial<Pick<Progress, K>> {
  const out: Partial<Pick<Progress, K>> = {};
  for (const k of keys) {
    const v = (FIELDS[k] as Check<Progress[K]>)(src[k]);
    if (v !== undefined) out[k] = v;
  }
  return out;
}

const PROGRESS_FIELDS = Object.keys(FIELDS) as (keyof Progress)[];

/**
 * The progress from what this phone saved: each field checked (FIELDS), one that can't be read
 * restored to its default or left out, everything else kept as it is (also a field this version
 * does not know: a save from a newer version). Then brought up to this version. Something that is
 * not a saved progress at all: a fresh start.
 */
export function progressFrom(saved: unknown): Progress {
  if (!isObject(saved)) return emptyProgress;
  const known = new Set<string>(PROGRESS_FIELDS);
  const s: Partial<Progress> = { ...Object.fromEntries(Object.entries(saved).filter(([k]) => !known.has(k))), ...readFields(saved, PROGRESS_FIELDS) };
  // Light is the default (themeVersion 3, 1 November 2026). An 'auto' saved before then was
  // the default for new learners rather than a choice, so it moves to light. Dark stays; a colour
  // this version does not know (a newer save on an older app) is the default.
  if (s.themeVersion !== 3) {
    s.theme = s.theme === 'dark' ? 'dark' : 'light';
    s.themeVersion = 3;
  }
  // Regions while they are not offered (REGIONS_LIVE off): no region unit, no region map.
  if (s.region !== undefined && !regionsOn()) delete s.region;
  // The work-rules track while it is not offered (RULES_TRACK off): the language page again.
  if (s.helpLang === 'nl' && !rulesTrackOn()) { s.helpLang = null; s.onboarded = false; }
  // A help language this app does not know (a newer save on an older app, a broken save): not
  // chosen yet, so the language page comes again (what else the first run asked stays answered).
  if (saved.helpLang !== undefined && s.helpLang === undefined) { s.helpLang = null; s.onboarded = false; }
  // A phone voice saved before the choice woman / man / automatic (Settings offers only the
  // recordings now): automatic, so these learners hear the recordings and see the choice.
  if (typeof s.voice === 'string' && !s.voice.startsWith('piper:')) s.voice = null;
  return { ...emptyProgress, ...s };
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return progressFrom(JSON.parse(raw));
  } catch {
    // Private mode or blocked storage, or a save that is not even JSON: start fresh, the app still works.
  }
  return emptyProgress;
}

/** What this phone saved, exactly as it is (null: nothing saved, or the storage is blocked). */
export function savedProgressText(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

/**
 * "Opnieuw beginnen" when the app cannot start (src/components/Splash.tsx BootFailed): the saved
 * progress goes, so the app starts as on a new phone. Only that: the small notes beside it stay
 * (among them "Anoniem meetellen" switched off, src/lib/count.ts).
 */
export function forgetProgress(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Blocked storage: nothing was kept.
  }
}

/** Told once when saving fails (src/components/SaveFailedNote.tsx): the progress that was not saved. */
const saveFailedListeners = new Set<(p: Progress) => void>();
let saveFailedTold = false;
/** A failure before anyone listened (the app's first save comes before the note is there). */
let saveFailedEarly: Progress | null = null;

export function onSaveFailed(fn: (p: Progress) => void): () => void {
  saveFailedListeners.add(fn);
  if (saveFailedEarly && !saveFailedTold) {
    saveFailedTold = true;
    fn(saveFailedEarly);
  }
  saveFailedEarly = null;
  return () => saveFailedListeners.delete(fn);
}

/**
 * Keeps the progress on this phone. True when it was kept. When it fails (a full phone, blocked
 * storage, private mode) the app still works, but the progress won't survive a reload: the
 * learner hears about it once per visit (onSaveFailed), with what to do.
 */
export function saveProgress(p: Progress): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
    return true;
  } catch {
    if (saveFailedTold) return false;
    if (!saveFailedListeners.size) saveFailedEarly = p;
    else {
      saveFailedTold = true;
      saveFailedListeners.forEach((fn) => fn(p));
    }
    return false;
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
/** Practised days kept in the save: the week row needs two weeks, the coach card four (only dates,
 *  only on this phone). */
export const DAYS_KEEP = 28;
/** The first free day is earned on this day of the first streak, so it can protect week 1. */
export const FIRST_FREEZE_AT = 3;

/** The best streak so far, also for saves from before the record was kept. */
export function bestStreak(p: Progress): number {
  return Math.max(p.bestStreak ?? 0, p.streak);
}

/**
 * Brings the streak up to date when the app opens (and before practising). Each missed day takes
 * one free day in hand: when there are enough for all the days missed (a weekend off with two),
 * those days become rest days and the streak goes on. When there are not enough, the streak stops
 * (and the free days stay for the next streak); `broken` is the streak that was lost, so the app
 * can say so once. The record (bestStreak) is kept either way.
 */
export function settleStreak(p: Progress, today: Date): { progress: Progress; broken?: number } {
  if (!p.lastDay || p.streak === 0) return { progress: p };
  const key = dayKey(today);
  const gap = daysBetween(p.lastDay, key);
  if (gap <= 1) return { progress: p };
  const freezes = p.freezes ?? 0;
  const missedDays = gap - 1;
  if (missedDays <= freezes) {
    const missed = Array.from({ length: missedDays }, (_, i) => addDay(p.lastDay!, i + 1));
    return {
      progress: {
        ...p,
        freezes: freezes - missedDays,
        rest: [...(p.rest ?? []), ...missed].slice(-REST_KEEP),
        // The rest days count as "kept up", so tomorrow's gap is measured from the last of them.
        lastDay: missed[missed.length - 1],
        bestStreak: bestStreak(p),
      },
    };
  }
  return { progress: { ...p, streak: 0, bestStreak: bestStreak(p) }, broken: p.streak };
}

/** "Je reeks is gestopt bij N" (StreakStopped, components/Milestone.tsx) only for a lost streak of at least this many days. */
export const STOPPED_FROM = 3;
/** … and not while the learner still practised on this many of the 7 days before today. */
export const STOPPED_UNLESS_DAYS = 3;

/**
 * The lost streak to tell about once ("Je reeks is gestopt bij N"), or undefined. The streak itself
 * stops as before (settleStreak); only the screen is for a real break: not for a streak of 1 or 2
 * days, and not while the learner practised on 3 or more of the 7 days before today. The week
 * plan (3 times a week) saw it at 11 of 12 opens (Monday, Wednesday, Friday: "gestopt bij 1"), and
 * Monday to Friday every Monday ("gestopt bij 5"). The owner's request, 4 November 2026.
 * `p`: the progress as saved, before settleStreak.
 */
export function stoppedToTell(p: Progress, today: Date): number | undefined {
  const { broken } = settleStreak(p, today);
  if (!broken || broken < STOPPED_FROM) return undefined;
  const key = dayKey(today);
  const practised = new Set([...(p.days ?? []), ...streakBack(p)]);
  const lately = [...practised].filter((d) => daysBetween(d, key) >= 1 && daysBetween(d, key) <= 7).length;
  return lately >= STOPPED_UNLESS_DAYS ? undefined : broken;
}

/** The days of the streak, counted back from its last day (rest days sit inside it without counting). */
function streakBack(p: Progress): string[] {
  if (!p.lastDay || p.streak <= 0) return [];
  const rest = new Set(p.rest ?? []);
  const days: string[] = [];
  let day = p.lastDay;
  for (let guard = 0; days.length < p.streak && guard < 400; guard++) {
    if (!rest.has(day)) days.push(day);
    day = addDay(day, -1);
  }
  return days;
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
  if (p.lastDay && p.streak > 0 && sinceLast >= 0 && sinceLast <= 1) for (const day of streakBack(p)) done.add(day);
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
    lastLesson: lessonId,
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
  if (unitOfLesson(id) || isRulesLessonAnyCountry(id)) return true;
  const region = /^rg\.([a-z]+)\./.exec(id)?.[1];
  if (region) return isRegionId(region) && !regionOf(region);
  return id.startsWith('r.') && rulesCourseUnits().length === 0;
}

/** How many finished lessons count (the ones this app knows): the backup's numbers. */
export function knownLessons(completed: Record<string, unknown>): number {
  return Object.keys(completed).filter(knownLessonId).length;
}

/**
 * The backup file. Version 2 also says which track the progress was on (`track`): its review day
 * and block are that track's, its `parked` place the other's (see switchTrack).
 */
export function backupFile(p: Progress, now: Date): string {
  return JSON.stringify({ app: BACKUP_APP, version: 2, saved: now.toISOString(), track: trackOf(p), progress: p }, null, 1);
}

/** A backup as read: the progress, and the track it was on (a version-1 file does not say). */
export type Backup = Partial<Progress> & { track?: Track };

/**
 * The backup seen from this phone's track: a file saved on the other track has its review day
 * and the other track's place swapped (as switchTrack would), so a review done in one track
 * never counts as done in the other. A file that does not say its track is taken as it is.
 */
export function backupForTrack(b: Backup, track: Track): Backup {
  if (!b.track || b.track === track) return b;
  const other = b.parked ?? {};
  return { ...b, track, reviewDay: other.reviewDay, parked: { reviewDay: b.reviewDay, currentUnit: b.currentUnit } };
}

/** What a backup file brings: the learning progress (lessons, words, streak, certificates, the test, the sentences said at work), never settings. */
const LEARNED = ['completed', 'xp', 'streak', 'lastDay', 'reviewDay', 'lessonDay', 'lastLesson', 'freezes', 'bestStreak', 'rest', 'days', 'cards', 'certs', 'currentUnit', 'parked', 'toets', 'gelukt'] as const;

/**
 * Reads a backup file. Returns null for anything that is not a Vloertaal backup; keeps only
 * well-formed learning progress (lessons the app knows, words, streak), never settings from
 * another phone. Each field has the same check as the progress on this phone (FIELDS).
 */
export function parseBackup(text: string): Backup | null {
  let data: unknown;
  try { data = JSON.parse(text); } catch { return null; }
  if (!isObject(data) || data.app !== BACKUP_APP || !isObject(data.progress) || !isObject(data.progress.completed)) return null;
  const { parked, ...read } = readFields(data.progress, LEARNED);
  // A lesson the app does not know is neither counted nor merged (nor is it the last lesson).
  const out: Backup = { ...read, completed: Object.fromEntries(Object.entries(read.completed ?? {}).filter(([id]) => knownLessonId(id))) };
  if (out.lastLesson !== undefined && !knownLessonId(out.lastLesson)) delete out.lastLesson;
  if (data.track === 'taal' || data.track === 'regels') out.track = data.track;
  // The block the file was on (only one the app knows), for the other track's place (backupForTrack).
  if (out.currentUnit !== undefined && !findCourseUnit(out.currentUnit)) delete out.currentUnit;
  // The other track's place only from a file that says its track (version 2): in an older file
  // it may be this phone's own track's place. Its review day and its block (one the app knows).
  if (out.track && parked) {
    out.parked = { reviewDay: parked.reviewDay, currentUnit: parked.currentUnit && findCourseUnit(parked.currentUnit) ? parked.currentUnit : undefined };
  }
  return out;
}

/**
 * "Bewaar je voortgang" when the app cannot start (src/components/Splash.tsx BootFailed): the
 * same file as backupFile's, with the progress as this app reads it (so "Zet terug" puts it back
 * later, also when a field of it was broken), and beside it what this phone saved exactly as it
 * was (`raw`), so nothing is lost, even where the app reads it wrong. A save that is not even JSON
 * goes along only as that text ("Zet terug" then says it is not a Vloertaal file).
 */
export function rawBackupFile(raw: string | null, now: Date): string {
  let progress: Progress | undefined;
  try {
    const saved: unknown = raw === null ? null : JSON.parse(raw);
    if (isObject(saved)) progress = progressFrom(saved);
  } catch {
    // Not JSON: the text alone.
  }
  return JSON.stringify({ app: BACKUP_APP, version: 2, saved: now.toISOString(), ...(progress && { track: trackOf(progress), progress }), raw }, null, 1);
}

/**
 * Would putting this backup in place lose something on this phone: a lesson the file does not
 * have, a certificate, a sentence said at work, or the record? (Then the learner is asked once
 * more: a file with as many lessons as the phone can still be missing the ones done here.)
 */
export function replaceLoses(p: Progress, b: Partial<Progress>): boolean {
  const theirs = b.completed ?? {};
  if (Object.keys(p.completed).some((id) => knownLessonId(id) && !theirs[id])) return true;
  if (Object.keys(p.certs ?? {}).some((id) => !b.certs?.[id])) return true;
  // A sentence said at work ("Gelukt op het werk") that the file does not have.
  if ((p.gelukt ?? []).some((e) => !b.gelukt?.some((x) => x.id === e.id))) return true;
  return bestStreak(p) > Math.max(b.bestStreak ?? 0, b.streak ?? 0);
}

/** Puts a backup back in place of the progress on this phone (settings stay as they are). */
export function replaceWithBackup(p: Progress, file: Backup): Progress {
  const b = backupForTrack(file, trackOf(p));
  return {
    ...p,
    xp: b.xp ?? 0,
    streak: b.streak ?? 0,
    lastDay: b.lastDay ?? null,
    completed: b.completed ?? {},
    cards: b.cards ?? {},
    reviewDay: b.reviewDay,
    lessonDay: b.lessonDay,
    lastLesson: b.lastLesson,
    freezes: b.freezes,
    rest: b.rest,
    days: b.days,
    bestStreak: b.bestStreak,
    certs: b.certs,
    // The block follows the progress that was put back (worked out from its lessons); the other
    // track's place is the file's (a version-2 file has it).
    currentUnit: undefined,
    pickedUnit: undefined,
    parked: b.parked?.reviewDay || b.parked?.currentUnit ? { reviewDay: b.parked.reviewDay, currentUnit: b.parked.currentUnit } : undefined,
    toets: b.toets,
    gelukt: b.gelukt,
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

/** A value as text with its keys in order, so two objects built in another order compare equal. */
const canon = (v: unknown): string => JSON.stringify(v, (_, x) => (x && typeof x === 'object' && !Array.isArray(x) ? Object.fromEntries(Object.entries(x).sort(([a], [b]) => (a < b ? -1 : 1))) : x));

/** Did adding a backup change nothing that counts (lessons, words, certificates, streak, days, sentences said at work)? Then "Niets nieuws". */
export function mergeAddsNothing(before: Progress, after: Progress): boolean {
  const learnt = (p: Progress) => canon([p.completed, p.cards ?? {}, p.certs ?? {}, p.xp, p.streak, bestStreak(p), p.lastDay, [...(p.days ?? [])].sort(), [...(p.rest ?? [])].sort(), p.reviewDay, p.parked?.reviewDay, p.toets ?? null, (p.gelukt ?? []).map((e) => e.id).sort()]);
  return learnt(before) === learnt(after);
}

/**
 * One lesson on both sides: the best of both. A lesson done for real on one side wins over a
 * check there ("Ik ken dit al", src/lib/instapCheck.ts); two checks keep the later day.
 */
function mergeRecord(mine: LessonRecord | undefined, theirs: LessonRecord): LessonRecord {
  if (!mine) return theirs;
  if (mine.check && theirs.check) return mine.check >= theirs.check ? mine : theirs;
  if (mine.check) return { best: theirs.best, times: theirs.times };
  if (theirs.check) return mine;
  return { best: Math.max(mine.best, theirs.best), times: Math.max(mine.times, theirs.times) };
}

/** Adds a backup to the progress on this phone: the best of both, nothing is lost. */
export function mergeBackup(p: Progress, file: Backup): Progress {
  const b = backupForTrack(file, trackOf(p));
  const completed = { ...p.completed };
  for (const [id, r] of Object.entries(b.completed ?? {})) {
    completed[id] = mergeRecord(completed[id], r);
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
    // The last lesson of the side that finished a lesson last (this phone's on the same day).
    lastLesson: b.lastLesson && b.lessonDay && (!p.lessonDay || b.lessonDay > p.lessonDay) ? b.lastLesson : p.lastLesson ?? b.lastLesson,
    // The other track: its later review day; its block stays this phone's (the file's if none).
    parked: p.parked || b.parked ? {
      ...p.parked,
      reviewDay: max(p.parked?.reviewDay, b.parked?.reviewDay),
      currentUnit: p.parked?.currentUnit ?? b.parked?.currentUnit,
    } : undefined,
    freezes: later.freezes ?? 0,
    rest,
    days,
    bestStreak: Math.max(bestStreak(p), b.bestStreak ?? 0, b.streak ?? 0, streak),
    // A certificate keeps the date it was first earned, on either side.
    certs: Object.fromEntries(
      [...new Set([...Object.keys(p.certs ?? {}), ...Object.keys(b.certs ?? {})])]
        .map((id) => [id, earlier(p.certs?.[id], b.certs?.[id])]),
    ),
    toets: mergeToets(p.toets, b.toets),
    // The sentences said at work on either phone, each once (its earliest day).
    gelukt: p.gelukt || b.gelukt ? joinGelukt(p.gelukt, b.gelukt) : undefined,
  };
}

/**
 * The earliest day this progress knows of (practised days, rest days, the last lesson or review,
 * certificates, the test): for a save from before `firstDay` was kept. Undefined: nothing yet.
 */
export function firstDayOf(p: Progress): string | undefined {
  const days = [
    ...(p.days ?? []), ...(p.rest ?? []), p.lastDay, p.lessonDay, p.reviewDay, p.parked?.reviewDay,
    ...Object.values(p.certs ?? {}), ...Object.values(p.completed).map((r) => r.check), p.toets?.start,
  ].filter(isDay);
  return days.length ? days.sort()[0] : undefined;
}

/** The progress with its first day: kept; else the earliest day it knows; else today. */
export function withFirstDay(p: Progress, today: Date): Progress {
  if (p.firstDay) return p;
  return { ...p, firstDay: firstDayOf(p) ?? dayKey(today) };
}
