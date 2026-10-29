import { allCourseUnits, courseUnits, findCourseUnit, ruleCards } from '../content/courses';
import { findLesson } from '../content/curriculum';
import { trackOf, trackOfId, type Track } from './track';
import { isMixLesson } from '../content/review';
import type { Unit, Word } from '../content/types';
import type { HelpLanguage } from '../i18n/types';
import { coursePlan, type SectorChoice } from '../content/sectors';
import { dayKey, type Progress } from './progress';
import { isRegionUnitId } from '../content/regio';

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
  // Both courses: a learner who switched tracks keeps the certificates of each.
  const fresh = allCourseUnits().filter((u) => !certs[u.id] && unitDone(u, p.completed));
  if (!fresh.length) return p;
  const today = dayKey(now);
  return { ...p, certs: { ...certs, ...Object.fromEntries(fresh.map((u) => [u.id, today])) } };
}

/**
 * The unit this lesson finished just now (it was not done before, and is now), if any. A region's
 * unit (src/content/regio) has no certificate: it does not count, so the certificate is the same
 * for everyone, wherever they live.
 */
export function unitJustDone(before: Record<string, unknown>, after: Record<string, unknown>, lessonId: string, certs: Record<string, string> = {}): Unit | undefined {
  const unit = findLesson(lessonId)?.unit;
  // A unit earned before (a lesson was added to it since): the new lesson finishes it again, but
  // the certificate is the one from then, not a second one.
  return unit && !isRegionUnitId(unit.id) && !certs[unit.id] && !unitDone(unit, before) && unitDone(unit, after) ? unit : undefined;
}

/** Can this unit have a certificate? Not a region's unit (see unitJustDone). */
export const hasCertificate = (unitId: string): boolean => !isRegionUnitId(unitId);

export interface Earned {
  unit: Unit;
  /** YYYY-MM-DD */
  day: string;
}

/**
 * Every certificate earned in the learner's track, in course order. A finished unit without a date
 * yet counts from today. A certificate once earned stays, also when a lesson was added to its unit
 * since (the route offers that lesson; the certificate does not disappear meanwhile).
 */
export function earnedCertificates(p: Progress, now = new Date(), track: Track = trackOf(p)): Earned[] {
  return courseUnits(track)
    .filter((u) => unitDone(u, p.completed) || (hasCertificate(u.id) && Boolean(p.certs?.[u.id])))
    .map((unit) => ({ unit, day: p.certs?.[unit.id] ?? dayKey(now) }));
}

/** A unit by id, in either course (ids never clash). */
export function findUnit(id: string): Unit | undefined {
  return findCourseUnit(id);
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

/**
 * The work-rules track: the unit's key rules (the titles of its rule cards marked `key`, the ones
 * on the pocket card too), in lesson order.
 */
export function keyRules(unit: Unit): string[] {
  const out: string[] = [];
  for (const l of unit.lessons) for (const r of ruleCards(l)) if (r.key && !out.includes(r.title)) out.push(r.title);
  return out;
}

/**
 * What a rules unit's certificate lists: its key rules, or, with fewer than two of them, each
 * lesson's "Onthoud" line (lesson.rule.remember), so the certificate never shows a single line.
 */
export function certRules(unit: Unit, n = 8): string[] {
  const keys = keyRules(unit);
  if (keys.length >= 2) return keys.slice(0, n);
  const out: string[] = [];
  for (const l of unit.lessons) {
    const line = l.rule?.remember;
    if (line && !out.includes(line)) out.push(line);
  }
  return out.slice(0, n);
}

/** The rule cards of a rules unit (one per lesson): the number on its certificate. */
export const unitRuleCount = (unit: Unit): number => new Set(unit.lessons.flatMap((l) => ruleCards(l).map((r) => r.id))).size;

/** "8 oktober 2026" (the certificate is a Dutch document). */
export function certDate(day: string): string {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * The unit's number as the learner's own path shows it (01, 02 …): their course (the basis units
 * with their sector's unit in its place), then the other units (lib/route.ts routeOrder). Without
 * a sector this is the order of the whole course.
 */
export function unitIndex(unit: Unit, sector?: SectorChoice, track: Track = trackOfId(unit.id), learnerRegion?: string): number {
  // A region's unit ("rg.zl.u") has its number in the path of a learner of that region; the
  // units after it, in the path of a learner with a region, count it too.
  const region = /^rg\.([a-z]+)\./.exec(unit.id)?.[1] ?? learnerRegion;
  const { main, other } = coursePlan(sector, track, region);
  const at = [...main, ...other].findIndex((u) => u.id === unit.id);
  return at >= 0 ? at : courseUnits(track).indexOf(unit);
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

/** "Voortgang wissen": the certificates go, and so does the name on them (asked again next time). */
export function forgetCertName(): void {
  try {
    localStorage.removeItem(NAME_KEY);
  } catch {
    // Blocked storage: nothing was kept.
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
  /** Key words (the language course) or key rules (the work-rules track). */
  phrases: string[];
  lessons: number;
  /** Words taught, or in the work-rules track the rules. */
  words: number;
  /**
   * A unit of the work-rules track: the certificate is about knowing how work goes here, not
   * about learning Dutch (its sub-line, the list's label, the meta line and the seal say so), and
   * it has no second title (the unit's title is Dutch already).
   */
  rules?: boolean;
}

/**
 * What the certificate says. With `completed`, it names the lessons actually done: a lesson added
 * to the unit after it was earned is not counted (nor its words) until it is done too.
 */
export function certData(unit: Unit, day: string, name: string, lang?: HelpLanguage, sector?: SectorChoice, region?: string, completed?: Record<string, unknown>): CertData {
  const done = completed ? unit.lessons.filter((l) => completed[l.id]) : unit.lessons;
  const shown = done.length ? { ...unit, lessons: done } : unit;
  if (trackOfId(unit.id) === 'regels') {
    return {
      unitNo: String(unitIndex(unit, sector, undefined, region) + 1).padStart(2, '0'),
      titleNl: unit.titleNl,
      titleEn: '',
      date: certDate(day),
      name: name.trim(),
      phrases: certRules(shown, 8),
      lessons: shown.lessons.length,
      words: unitRuleCount(shown),
      rules: true,
    };
  }
  return {
    unitNo: String(unitIndex(unit, sector, undefined, region) + 1).padStart(2, '0'),
    titleNl: unit.titleNl,
    titleEn: unit.title,
    titleHelp: lang?.gloss[unit.id],
    helpCode: lang?.code,
    helpDir: lang?.dir,
    date: certDate(day),
    name: name.trim(),
    phrases: keyPhrases(shown, 8),
    lessons: shown.lessons.length,
    words: unitWords(shown).length,
  };
}

/** Under the brand: what the certificate is about. */
export const certSub = (d: Pick<CertData, 'rules'>) => (d.rules ? 'Werken in Nederland' : 'Nederlands voor het werk');
/** The label above the list. */
export const certListLabel = (d: Pick<CertData, 'rules'>) => (d.rules ? 'Belangrijkste regels' : 'Kernwoorden');
/** The line under the key words: "Nederlands voor het werk · 3 lessen · 12 woorden"; for the
 *  work-rules track "Werken in Nederland · 3 lessen · 3 regels". */
export const certMeta = (d: CertData) =>
  d.rules
    ? `${certSub(d)} · ${d.lessons} ${d.lessons === 1 ? 'les' : 'lessen'} · ${d.words} ${d.words === 1 ? 'regel' : 'regels'}`
    : `Nederlands voor het werk · ${d.lessons} ${d.lessons === 1 ? 'les' : 'lessen'} · ${d.words} ${d.words === 1 ? 'woord' : 'woorden'}`;
export const CERT_NOTE = 'Oefencertificaat — geen officieel diploma';
/** Around the seal; spread to fill the whole ring exactly (SVG textLength, and the canvas likewise). */
export const SEAL_RING = 'OEFENCERTIFICAAT · VLOERTAAL · NEDERLANDS · ';
/** The seal of the work-rules track: the same ring, about the rules (as long, so it reads the same). */
export const SEAL_RING_RULES = 'OEFENCERTIFICAAT · VLOERTAAL · WERKREGELS · ';
export const sealRing = (d: Pick<CertData, 'rules'>) => (d.rules ? SEAL_RING_RULES : SEAL_RING);

