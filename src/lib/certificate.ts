import { findLesson, units } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import type { Unit, Word } from '../content/types';
import type { HelpLanguage } from '../i18n/types';
import { dayKey, type Progress } from './progress';

/**
 * A certificate per finished unit ("Oefencertificaat"): earned when every lesson of the unit,
 * its Mixed review included, is done. The date it was earned is kept in progress.certs; for
 * learners who finished a unit before certificates existed, it is filled in lazily with today.
 */

/** True when every lesson of the unit (with its Mixed review) is done. */
export function unitDone(unit: Unit, completed: Record<string, unknown>): boolean {
  return unit.lessons.length > 0 && unit.lessons.every((l) => completed[l.id]);
}

/**
 * Sets the earned date (today) for every finished unit that has none yet. Returns the same
 * object when nothing changed, so it is safe to run on every change of progress.
 */
export function earnCertificates<P extends Progress>(p: P, now: Date): P {
  const certs = p.certs ?? {};
  const fresh = units.filter((u) => !certs[u.id] && unitDone(u, p.completed));
  if (!fresh.length) return p;
  const today = dayKey(now);
  return { ...p, certs: { ...certs, ...Object.fromEntries(fresh.map((u) => [u.id, today])) } };
}

/** The unit this lesson finished just now (it was not done before, and is now), if any. */
export function unitJustDone(before: Record<string, unknown>, after: Record<string, unknown>, lessonId: string): Unit | undefined {
  const unit = findLesson(lessonId)?.unit;
  return unit && !unitDone(unit, before) && unitDone(unit, after) ? unit : undefined;
}

export interface Earned {
  unit: Unit;
  /** YYYY-MM-DD */
  day: string;
}

/** Every certificate earned, in course order. A finished unit without a date yet counts from today. */
export function earnedCertificates(p: Progress, now = new Date()): Earned[] {
  return units
    .filter((u) => unitDone(u, p.completed))
    .map((unit) => ({ unit, day: p.certs?.[unit.id] ?? dayKey(now) }));
}

export function findUnit(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}

/** The lessons that teach the unit (its Mixed review only repeats). */
const teaching = (unit: Unit) => unit.lessons.filter((l) => !isMixLesson(l));

/** Distinct words taught in the unit. */
export function unitWords(unit: Unit): Word[] {
  const seen = new Set<string>();
  return teaching(unit).flatMap((l) => l.words).filter((w) => !seen.has(w.nl) && (seen.add(w.nl), true));
}

/**
 * Key Dutch words and phrases for the certificate: taken in turn from each lesson (first words
 * first), short ones only, so the list reads well; `n` of them (6–10).
 */
export function keyPhrases(unit: Unit, n = 8): string[] {
  const queues = teaching(unit).map((l) => l.words.filter((w) => w.nl.length <= 22).map((w) => w.nl));
  const out: string[] = [];
  for (let round = 0; out.length < n && queues.some((q) => q.length); round++) {
    for (const q of queues) {
      if (out.length >= n) break;
      const next = q.shift();
      if (next && !out.includes(next)) out.push(next);
    }
  }
  return out;
}

/** "8 oktober 2026" (the certificate is a Dutch document). */
export function certDate(day: string): string {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** The unit's number on the path's full course (01, 02 …). */
export function unitIndex(unit: Unit): number {
  return units.indexOf(unit);
}

/* ---- The learner's name on the certificate: asked once, kept on this device only. ---- */

const NAME_KEY = 'vloertaal:cert-name';

/** The name; '' = asked, and left empty; null = never asked. */
export function loadCertName(): string | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage.getItem(NAME_KEY);
  } catch {
    return null;
  }
}

export function saveCertName(name: string): void {
  try {
    localStorage.setItem(NAME_KEY, name.trim().slice(0, 60));
  } catch {
    // Blocked storage: the name is used for this visit only.
  }
}

/* ---- What a certificate shows (the sheet on screen and the shared picture). ---- */

/** Everything a certificate shows, for the sheet and for the canvas. */
export interface CertData {
  unitNo: string;
  titleNl: string;
  titleEn: string;
  /** The unit's title in the help language, if there is one. */
  titleHelp?: string;
  helpCode?: string;
  helpDir?: 'ltr' | 'rtl';
  /** "8 oktober 2026" */
  date: string;
  name: string;
  phrases: string[];
  lessons: number;
  words: number;
}

export function certData(unit: Unit, day: string, name: string, lang?: HelpLanguage): CertData {
  return {
    unitNo: String(unitIndex(unit) + 1).padStart(2, '0'),
    titleNl: unit.titleNl,
    titleEn: unit.title,
    titleHelp: lang?.gloss[unit.id],
    helpCode: lang?.code,
    helpDir: lang?.dir,
    date: certDate(day),
    name: name.trim(),
    phrases: keyPhrases(unit, 8),
    lessons: unit.lessons.length,
    words: unitWords(unit).length,
  };
}

/** The line under the key words: "Nederlands voor het werk · 3 lessen · 12 woorden". */
export const certMeta = (d: CertData) =>
  `Nederlands voor het werk · ${d.lessons} ${d.lessons === 1 ? 'les' : 'lessen'} · ${d.words} ${d.words === 1 ? 'woord' : 'woorden'}`;
export const CERT_NOTE = 'Oefencertificaat — geen officieel diploma';
/** Around the seal; spread to fill the whole ring exactly (SVG textLength, and the canvas likewise). */
export const SEAL_RING = 'OEFENCERTIFICAAT · VLOERTAAL · NEDERLANDS · ';

