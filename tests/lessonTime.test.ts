import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Route } from '../src/components/Route';
import { Result } from '../src/components/Screens';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { findLesson } from '../src/content/curriculum';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { fillCount, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { buildLesson, type Exercise } from '../src/lib/exercises';
import { LESSON_MINUTES_MIN, lessonMinutes, stepsMinutes } from '../src/lib/lessonTime';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { speakingOn } from '../src/lib/speaking';

/**
 * "± 6 min" beside the next lesson (src/lib/lessonTime.ts; the owner's request, 5 November 2026):
 * an estimate from the lesson's steps, whole minutes, at least 2; on a lesson's result and on the
 * home's yellow card; in every help language, also right to left.
 */

const html = (el: ReactElement) => renderToStaticMarkup(el);
const noop = () => {};

describe('lessonMinutes', () => {
  let before: ReturnType<typeof courseUnits>;
  beforeAll(() => {
    before = courseUnits('regels');
    registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
  });
  afterAll(() => registerRulesCourse(before));

  it('rounds to whole minutes and never says less than 2', () => {
    const intro = { kind: 'intro', word: { id: 'w.x', nl: 'x', en: 'x', emoji: '' } } as Exercise;
    expect(stepsMinutes([])).toBe(LESSON_MINUTES_MIN);
    expect(stepsMinutes([intro])).toBe(2);
    // 25 intros of 12 seconds: 300 seconds, 5 minutes.
    expect(stepsMinutes(Array(25).fill(intro))).toBe(5);
    expect(Number.isInteger(stepsMinutes(Array(13).fill(intro)))).toBe(true);
  });

  it('gives every lesson of both tracks a calm, plausible number (a few minutes, as the docs say)', () => {
    for (const track of ['taal', 'regels'] as const) {
      for (const lesson of courseUnits(track).flatMap((u) => u.lessons)) {
        for (const speak of [false, true]) {
          const m = lessonMinutes(lesson, { speak });
          expect(Number.isInteger(m), lesson.id).toBe(true);
          expect(m, lesson.id).toBeGreaterThanOrEqual(LESSON_MINUTES_MIN);
          expect(m, lesson.id).toBeLessThanOrEqual(10);
        }
      }
    }
    // A Werkregels lesson: about 5 minutes (docs/entree-dekking.md: "5 tot 8 minuten").
    const rules = courseUnits('regels').flatMap((u) => u.lessons).map((l) => lessonMinutes(l));
    const middle = [...rules].sort((a, b) => a - b)[rules.length >> 1];
    expect(middle).toBeGreaterThanOrEqual(4);
    expect(middle).toBeLessThanOrEqual(8);
  });

  it('follows how the lesson will be played: more with speaking practice, not more when shorter', () => {
    const lesson = findLesson('l.people')!.lesson;
    expect(lessonMinutes(lesson, { speak: true })).toBeGreaterThanOrEqual(lessonMinutes(lesson));
    expect(lessonMinutes(lesson, { easy: true })).toBeLessThanOrEqual(lessonMinutes(lesson));
    expect(lessonMinutes(lesson, { fast: true })).toBeLessThanOrEqual(lessonMinutes(lesson));
    // The estimate is the built lesson's (its first time, not a review).
    expect(buildLesson(lesson, { review: false, seed: 1 }).length).toBeGreaterThan(10);
  });
});

describe('the next lesson\'s minutes on the screen', () => {
  beforeAll(() => registerPack(nlPack));
  const next = findLesson('l.people')!.lesson;
  const result = (code: 'pl' | 'ar' | 'nl' | null, minutes?: number) => {
    const lang = code ? getHelpLanguage(code) : undefined;
    return html(createElement(Result, {
      right: 9, total: 11, newWords: 6, words: 24, lang, onDone: noop,
      next: { en: next.title, help: lang?.gloss[next.id], lang, id: next.id, minutes },
    }));
  };

  it('stands under the next lesson\'s title on the result, in the line\'s language, not as a button', () => {
    const pl = result('pl', 6);
    expect(pl).toContain('result-next-time');
    expect(pl).toContain('ok. 6 min');
    expect((pl.match(/<button\b/g) ?? []).length).toBe(result('pl').match(/<button\b/g)?.length ?? 0);
    expect(result(null, 6)).toContain('about 6 min');
    expect(result('nl', 5)).toContain('± 5 min');
    // Right to left: the line is a right-to-left block, the number in the Arabic text.
    const ar = result('ar', 6);
    expect(ar).toMatch(/class="result-line result-next" dir="rtl"/);
    // (Its number may sit in its own <bdi>, src/components/Bi.tsx isolateLatin.)
    expect(ar.replace(/<\/?bdi[^>]*>/g, '')).toContain('حوالي 6 دقائق');
    expect(result('pl')).not.toContain('result-next-time');
  });

  it('has a text in every help language, with the number in it (Arabic: its own plural forms)', () => {
    expect(uiNl.nextMinutesN).toBe('± {n} min');
    for (const src of helpLanguageSources) {
      const lang = getHelpLanguage(src.code);
      for (const n of [3, 5, 11]) expect(fillCount('nextMinutesN', n, lang).help, src.code).toContain(String(n));
    }
    expect(fillCount('nextMinutesN', 2, getHelpLanguage('ar')).help).toBe('حوالي دقيقتين');
  });

  it('is on the home\'s yellow card too, but not for a lesson stopped halfway or under "Herhaal vandaag"', () => {
    const p: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', completed: { 'l.hello': { best: 1, times: 1 } } };
    const home = (daily: Parameters<typeof Route>[0]['daily'] = null) =>
      html(createElement(Route, { progress: p, lang: getHelpLanguage('pl'), onStart: noop, onPick: noop, onAll: noop, onDaily: noop, daily }));
    const m = lessonMinutes(next, { speak: speakingOn() });
    expect(home()).toContain(`bay-time`);
    expect(home()).toContain(`ok. ${m} min`);
    // With today's review above it the block is compact: no extra line there.
    expect(home({ state: 'due', due: 6, tomorrow: 0, extra: 0 })).not.toContain('bay-time');
  });
});
