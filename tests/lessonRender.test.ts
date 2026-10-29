import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { registerRulesCourse } from '../src/content/courses';
import { teachingLessons } from '../src/content/curriculum';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import type { Lesson } from '../src/content/types';
import { getHelpLanguage, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import type { HelpLanguage, LangCode } from '../src/i18n/types';
import { buildLesson } from '../src/lib/exercises';

/*
 * Every exercise of every lesson draws, in a left-to-right language, a right-to-left one,
 * Tigrinya and English only: a missing text, a word without a translation or a broken exercise
 * fails here, not on a learner's phone. Drawn on the server (no effects run), one exercise at a
 * time (startAt), as a lesson and as its review.
 */
const LANGS: (LangCode | undefined)[] = ['pl', 'ar', 'ti', undefined];
const rulesCourse = toCourseUnits([...rulesUnits, ...sectorRulesUnits]);

beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(rulesCourse);
});

/** Draws each exercise of each lesson (and its review) once; returns how many. */
function drawAll(lessons: readonly Lesson[], lang: HelpLanguage | undefined): number {
  let drawn = 0;
  for (const lesson of lessons) {
    for (const review of [false, true]) {
      const exercises = buildLesson(lesson, { review, seed: 7 });
      exercises.forEach((ex, startAt) => {
        let html = '';
        try {
          html = renderToStaticMarkup(createElement(LessonPlayer, { lesson, review, lang, exercises, startAt, onQuit: () => {}, onFinish: () => {} }));
        } catch (e) {
          throw new Error(`${lesson.id}${review ? ' (review)' : ''} #${startAt} ${ex.kind}: ${(e as Error).message}`);
        }
        expect(html, `${lesson.id} #${startAt} ${ex.kind}`).toContain('class="player');
        drawn++;
      });
    }
  }
  return drawn;
}

describe('every exercise of every lesson draws', () => {
  for (const code of LANGS) {
    it(`Taal, in ${code ?? 'English only'}`, () => {
      expect(drawAll(teachingLessons, code ? getHelpLanguage(code) : undefined)).toBeGreaterThan(1000);
    });
  }

  it('Werkregels, in Dutch', () => {
    expect(drawAll(rulesCourse.flatMap((u) => u.lessons), getHelpLanguage('nl'))).toBeGreaterThan(300);
  });
});
