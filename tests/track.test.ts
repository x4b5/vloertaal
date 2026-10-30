import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { allCourseUnits, courseUnits, findLessonIn, isPlayable, registerRulesCourse } from '../src/content/courses';
import { findLesson } from '../src/content/curriculum';
import { toCourseUnits } from '../src/content/regels/course';
import { coursePlan, sectors, type SectorChoice } from '../src/content/sectors';
import { RULES_STUB } from '../src/dev/rulesStub';
import { lessonAllowed, OPEN_TO_ALL, previewUnits, unitAllowed } from '../src/lib/access';
import { earnCertificates, earnedCertificates, unitIndex } from '../src/lib/certificate';
import { isNextInCourse, isUnlocked, unitIndexOf } from '../src/lib/exercises';
import { unitTexts } from '../src/lib/offline';
import { onboardingStep, previousStep, trialLessonAllowed, tryLessonId, TRY_LESSON_ID } from '../src/lib/onboarding';
import { emptyProgress } from '../src/lib/progress';
import { currentBlock, homeSuggestions, nextChoices, routeNextLesson, routeOrder } from '../src/lib/route';
import { trackOf, trackOfId } from '../src/lib/track';
import { unitFromSearch } from '../src/lib/unitLink';
import { hasGender } from '../src/i18n';

const SECTORS: (SectorChoice | undefined)[] = [undefined, 'none', ...sectors.map((s) => s.id)];
const ids = (list: { id: string }[]) => list.map((u) => u.id);
const rec = { best: 1, times: 1 };
const doneUnits = (...unitIds: string[]) =>
  Object.fromEntries(unitIds.flatMap((id) => allCourseUnits().find((u) => u.id === id)!.lessons.map((l) => [l.id, rec])));

/**
 * The basis course order, as before the tracks: the sector's unit takes the warehouse's slot.
 * "Getallen en gegevens" (u.data, 30 October 2026) is put in right before "Tijd en rooster", which
 * needs its numbers and dates (as "Klanken" was put in after it).
 */
const BASIS = ['u.firstday', 'u.help', 'u.tools', 'u.safety', '<own>', 'u.data', 'u.time', 'u.sounds', 'u.teamwork', 'u.apply', 'u.contract', 'u.papers', 'u.pay', 'u.house', 'u.social', 'u.sayings', 'u.rights', 'u.leave', 'u.exploit', 'u.contact', 'u.grow', 'u.health', 'u.money', 'u.travel', 'u.lost'];
const SECTOR_UNITS = ['u.warehouse', 'u.build', 'u.factory', 'u.care', 'u.horeca', 'u.clean'];
/**
 * Basis units added after the sector units ("In de winkel", "Rekenen"): appended, so every unit
 * above keeps its place. With a sector they end the learner's own course (before the other
 * sectors' units); with none, they come after the sector units.
 */
const APPENDED = ['u.shop', 'u.numbers', 'u.ai'];
/** A sector unit added after those ("In de kas", 30 October 2026): at the very end of the course. */
const LATE_SECTOR_UNITS = ['u.kas'];
/**
 * Basis units appended after "In de kas" (Entree in the Taal track, 30 October 2026): with a
 * sector they end the learner's own course, after the other appended units (before the other
 * sectors' units); with none, they come at the very end.
 */
const LATE_BASIS = ['u.finish', 'u.tech', 'u.garage', 'u.stage', 'u.society', 'u.online'];
const expectedOrder = (own: string | null) => {
  const main = BASIS.map((id) => (id === '<own>' ? own ?? 'u.warehouse' : id));
  const rest = SECTOR_UNITS.filter((id) => !main.includes(id));
  const late = LATE_SECTOR_UNITS.filter((id) => !main.includes(id));
  return own ? [...main, ...APPENDED, ...LATE_BASIS, ...rest, ...late] : [...main, ...rest, ...APPENDED, ...late, ...LATE_BASIS];
};

/** routeOrder for every sector, written out from the course as it was before the work-rules track. */
const TAAL_ORDER: Record<string, string[]> = {
  undefined: expectedOrder(null),
  none: expectedOrder(null),
  logistics: expectedOrder('u.warehouse'),
  construction: expectedOrder('u.build'),
  production: expectedOrder('u.factory'),
  care: expectedOrder('u.care'),
  hospitality: expectedOrder('u.horeca'),
  cleaning: expectedOrder('u.clean'),
  horticulture: expectedOrder('u.kas'),
};

/** The 3 choices after lesson 1.1, as before the tracks. */
const TAAL_CHOICES: Record<string, string[]> = {
  undefined: ['u.firstday', 'u.help', 'u.tools'],
  none: ['u.firstday', 'u.help', 'u.tools'],
  logistics: ['u.safety', 'u.firstday', 'u.warehouse'],
  construction: ['u.safety', 'u.firstday', 'u.build'],
  production: ['u.safety', 'u.firstday', 'u.factory'],
  care: ['u.teamwork', 'u.firstday', 'u.care'],
  hospitality: ['u.teamwork', 'u.firstday', 'u.horeca'],
  cleaning: ['u.time', 'u.firstday', 'u.clean'],
  horticulture: ['u.safety', 'u.firstday', 'u.kas'],
};

describe("the Dutch course ('taal') is exactly as before", () => {
  // The rules course is registered for these checks too: it must change nothing in 'taal'.
  beforeAll(() => registerRulesCourse(toCourseUnits(RULES_STUB)));
  afterEach(() => registerRulesCourse(toCourseUnits(RULES_STUB)));

  it('snapshots routeOrder for every sector, with and without the track argument', () => {
    for (const s of SECTORS) {
      expect(ids(routeOrder(s)), String(s)).toEqual(TAAL_ORDER[String(s)]);
      expect(ids(routeOrder(s, 'taal')), String(s)).toEqual(TAAL_ORDER[String(s)]);
      expect(ids(routeOrder(s)), String(s)).toMatchSnapshot(`routeOrder ${String(s)}`);
    }
  });

  it('keeps the choices, the current block and the next lesson for every sector', () => {
    for (const s of SECTORS) {
      const completed = { 'l.hello': rec };
      expect(ids(nextChoices(s, completed)), String(s)).toEqual(TAAL_CHOICES[String(s)]);
      expect(currentBlock({ sector: s, completed })?.id).toBe('u.firstday');
      expect(routeNextLesson({ sector: s, completed })?.id).toBe('l.people');
      // A learner with a help language (progress passed as it is) is in the same course.
      expect(currentBlock({ ...emptyProgress, helpLang: 'pl', sector: s, completed })?.id).toBe('u.firstday');
      expect(ids(homeSuggestions(s, doneUnits('u.firstday')))).toEqual(ids(nextChoices(s, doneUnits('u.firstday'), undefined, 2)));
    }
  });

  it('keeps unlocking, the course highlight and the unit numbers', () => {
    for (const s of SECTORS) {
      const order = coursePlan(s).main.flatMap((u) => u.lessons);
      expect(isNextInCourse(order[0].id, {}, 'full', s)).toBe(true);
      expect(isNextInCourse(order[1].id, {}, 'full', s)).toBe(false);
      for (const [i, u] of routeOrder(s).entries()) {
        expect(unitIndexOf(u.lessons[0], s)).toBe(i);
        expect(unitIndex(u, s)).toBe(i);
      }
    }
    for (const u of units) {
      expect(isUnlocked(u.lessons[0].id, {})).toBe(true);
      expect(isUnlocked(u.lessons[1].id, {})).toBe(false);
      expect(isUnlocked(u.lessons[1].id, { [u.lessons[0].id]: rec })).toBe(true);
    }
  });

  it('keeps the preview, the trial lesson and the coach links', () => {
    expect(previewUnits()).toEqual(['u.firstday']);
    expect(unitAllowed('u.firstday', 'preview')).toBe(true);
    expect(unitAllowed('u.help', 'preview')).toBe(false);
    expect(lessonAllowed('l.hello', 'preview')).toBe(true);
    expect(lessonAllowed('l.understand', 'preview')).toBe(false);
    expect(tryLessonId()).toBe(TRY_LESSON_ID);
    expect(TRY_LESSON_ID).toBe('l.hello');
    expect(trialLessonAllowed('l.hello')).toBe(true);
    expect(unitFromSearch('?unit=pay')).toBe('u.pay');
    expect(trackOf({ helpLang: 'pl' })).toBe('taal');
    expect(trackOf({ helpLang: null })).toBe('taal');
    expect(courseUnits()).toBe(units);
  });

  it('earns certificates as before, and lists only the learner’s own track', () => {
    const p = { ...emptyProgress, completed: doneUnits('u.firstday', 'r.start') };
    const now = new Date(2026, 9, 15);
    const earned = earnCertificates(p, now);
    expect(Object.keys(earned.certs ?? {})).toEqual(['u.firstday', 'r.start']);
    expect(earnedCertificates(earned, now).map((e) => e.unit.id)).toEqual(['u.firstday']);
    expect(earnedCertificates({ ...earned, helpLang: 'nl' }, now).map((e) => e.unit.id)).toEqual(['r.start']);
  });
});

describe("the work-rules track ('regels')", () => {
  beforeAll(() => registerRulesCourse(toCourseUnits(RULES_STUB)));

  it('is chosen with the Dutch screens (helpLang "nl"), and ids tell the track', () => {
    expect(trackOf({ helpLang: 'nl' })).toBe('regels');
    expect(trackOfId('r.loon')).toBe('regels');
    expect(trackOfId('r.l.loon.1')).toBe('regels');
    expect(trackOfId('u.pay')).toBe('taal');
  });

  it('turns RuleUnits into playable Units and Lessons', () => {
    const course = courseUnits('regels');
    expect(ids(course)).toEqual(['r.start', 'r.veilig', 'r.build', 'r.loon']);
    const lesson = course[0].lessons[0];
    expect(lesson).toMatchObject({ id: 'r.l.start.1', words: [], sentences: [], rule: { remember: 'Neem je ID-bewijs mee. Wees op tijd.' } });
    expect(lesson.steps?.length).toBe(3);
    expect(course[0].titleNl).toBe(course[0].title);
    expect(isPlayable(lesson)).toBe(true);
    expect(isPlayable({ id: 'x', title: 'x', words: [], sentences: [] })).toBe(false);
    expect(findLessonIn('regels', 'r.l.loon.1')?.unit.id).toBe('r.loon');
    expect(findLessonIn('taal', 'r.l.loon.1')).toBeUndefined();
    expect(findLesson('r.l.loon.1')?.unit.id).toBe('r.loon');
    expect(findLesson('r.l.loon.1', 'taal')).toBeUndefined();
    expect(findLesson('l.hello')?.unit.id).toBe('u.firstday');
  });

  it('opens the first rules unit in the preview, next to the first Dutch-course unit', () => {
    expect(previewUnits('regels')).toEqual(['r.start']);
    expect(unitAllowed('r.start', 'preview')).toBe(true);
    expect(lessonAllowed('r.l.start.2', 'preview')).toBe(true);
    // Beyond the first unit: what the sneak preview opens, no more (a preview code never opens less than no code).
    expect(unitAllowed('r.loon', 'preview')).toBe(unitAllowed('r.loon', 'sample'));
    expect(lessonAllowed('r.l.loon.1', 'preview')).toBe(lessonAllowed('r.l.loon.1', 'sample'));
    expect(lessonAllowed('r.l.loon.2', 'preview')).toBe(false);
    expect(unitAllowed('u.firstday', 'preview')).toBe(true);
  });

  it('has its own trial lesson: r.l.start.1', () => {
    expect(tryLessonId('regels')).toBe('r.l.start.1');
    expect(trialLessonAllowed('r.l.start.1', 'regels')).toBe(true);
    expect(trialLessonAllowed('l.hello', 'regels')).toBe(false);
    expect(trialLessonAllowed('r.l.start.1')).toBe(false);
    // While the rules course is not here: the first lesson of its first unit ("Werk zoeken" 1).
    registerRulesCourse([]);
    expect(tryLessonId('regels')).toBe('r.l.zoeken.1');
    registerRulesCourse(toCourseUnits(RULES_STUB));
  });

  it('puts the own sector unit right after r.veilig, the other sectors at the end', () => {
    expect(ids(routeOrder('construction', 'regels'))).toEqual(['r.start', 'r.veilig', 'r.build', 'r.loon']);
    expect(coursePlan('construction', 'regels').other).toEqual([]);
    // Another sector: r.build goes to "Andere sectoren".
    expect(ids(coursePlan('care', 'regels').main)).toEqual(['r.start', 'r.veilig', 'r.loon']);
    expect(ids(coursePlan('care', 'regels').other)).toEqual(['r.build']);
    // No sector: the course in its own order.
    expect(ids(routeOrder('none', 'regels'))).toEqual(['r.start', 'r.veilig', 'r.build', 'r.loon']);
    expect(unitIndex(courseUnits('regels')[3], 'care')).toBe(2);
  });

  it('handles sector and focus units that are not written yet', () => {
    // r.care, r.samen and r.ziek are not in the stub: care's path is the basis, its choices skip them.
    const p = { ...emptyProgress, helpLang: 'nl' as const, sector: 'care' as const, completed: doneUnits('r.start') };
    expect(ids(nextChoices('care', p.completed, undefined, 3, 'regels'))).toEqual(['r.veilig', 'r.loon', 'r.build']);
    expect(currentBlock(p)).toBeNull();
    expect(ids(homeSuggestions('care', p.completed, 'regels'))).toEqual(['r.veilig', 'r.loon']);
    // Construction recommends r.veilig first, then its own unit.
    expect(ids(nextChoices('construction', p.completed, undefined, 3, 'regels'))).toEqual(['r.veilig', 'r.build', 'r.loon']);
  });

  it('runs the home on the rules course for a Dutch-screens learner', () => {
    const p = { ...emptyProgress, helpLang: 'nl' as const, sector: 'none' as const, completed: {} };
    expect(currentBlock(p)?.id).toBe('r.start');
    expect(routeNextLesson(p)?.id).toBe('r.l.start.1');
    expect(routeNextLesson({ ...p, completed: { 'r.l.start.1': rec } })?.id).toBe('r.l.start.2');
    // A current block saved in the other track does not count here.
    expect(currentBlock({ ...p, currentUnit: 'u.pay' })?.id).toBe('r.start');
    expect(isNextInCourse('r.l.start.1', {}, 'full', 'none', 'regels')).toBe(true);
    expect(isNextInCourse('r.l.start.1', {}, 'full', 'none')).toBe(false);
    expect(isUnlocked('r.l.start.2', {})).toBe(false);
    expect(isUnlocked('r.l.start.2', { 'r.l.start.1': rec })).toBe(true);
    expect(unitIndexOf(courseUnits('regels')[1].lessons[0])).toBe(1);
  });

  it('shows an empty course calmly while no rules units exist', () => {
    registerRulesCourse([]);
    try {
      const p = { ...emptyProgress, helpLang: 'nl' as const, sector: 'care' as const, completed: {} };
      expect(currentBlock(p)).toBeNull();
      expect(routeNextLesson(p)).toBeUndefined();
      expect(previewUnits('regels')).toEqual([]);
      expect(unitAllowed('u.firstday', 'preview')).toBe(true);
      expect(ids(routeOrder('care'))).toEqual(TAAL_ORDER.care);
    } finally {
      registerRulesCourse(toCourseUnits(RULES_STUB));
    }
  });

  it('saves a rules unit offline with its step texts, and links to it by its whole id', () => {
    const texts = unitTexts(courseUnits('regels')[0]);
    expect(texts).toContain('Het is je eerste werkdag. Bram wacht bij de ingang.');
    expect(texts).toContain('Je werkgever mag je ID-bewijs bekijken.');
    expect(unitTexts(courseUnits('regels')[2])).toEqual(['Kun je dat nog een keer uitleggen?']);
    expect(unitFromSearch('?unit=r.loon')).toBe('r.loon');
    expect(unitFromSearch('?unit=r.../x')).toBeNull();
  });

  it('skips the gender page: Dutch has no gender question', () => {
    expect(hasGender('nl')).toBe(false);
    const nl = { onboarded: true, helpLang: 'nl' as const, gender: undefined, genderAsked: false, sector: undefined };
    expect(onboardingStep(nl, null)).toBe('gate');
    expect(previousStep('gate', nl)).toBe('language');
    expect(onboardingStep(nl, 'preview')).toBe('sector');
    expect(previousStep('sector', nl)).toBe(OPEN_TO_ALL ? 'language' : 'gate');
  });

  it('works with the real course as the Dutch pack registers it', async () => {
    await import('../src/i18n/packs/nl');
    try {
      const { rulesUnits, sectorRulesUnits } = await import('../src/content/regels');
      const course = courseUnits('regels');
      expect(course.length).toBe(new Set([...rulesUnits, ...sectorRulesUnits].filter((u) => u.lessons.length).map((u) => u.id)).size);
      // Every sector's own unit sits right after "Veilig werken" (or at the end of the basis without it).
      for (const s of sectors) {
        const main = ids(coursePlan(s.id, 'regels').main);
        for (const own of s.rules.units.filter((id) => course.some((u) => u.id === id))) {
          const at = main.indexOf('r.veilig');
          expect(main.indexOf(own), `${s.id} ${own}`).toBe(at >= 0 ? at + 1 : main.length - 1);
        }
        expect(ids(coursePlan(s.id, 'regels').other).every((id) => !s.rules.units.includes(id))).toBe(true);
      }
      // The preview and the trial lesson follow the course's first unit.
      expect(previewUnits('regels')).toEqual([course[0].id]);
      expect(tryLessonId('regels')).toBe(course[0].lessons[0].id);
      expect(lessonAllowed(tryLessonId('regels'), 'preview')).toBe(true);
      expect(course.every((u) => u.lessons.every(isPlayable))).toBe(true);
      // And the Dutch course is still the same.
      expect(ids(routeOrder('construction'))).toEqual(TAAL_ORDER.construction);
    } finally {
      registerRulesCourse(toCourseUnits(RULES_STUB));
    }
  });
});
