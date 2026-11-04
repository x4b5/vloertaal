import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SpeakExercise } from '../src/components/Speaking';
import { allLessons, findLesson } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { gloss } from '../src/i18n';
import { getHelpLanguage } from '../src/i18n/all';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { dropAsk } from '../src/lib/dropAsk';
import { buildLesson, workTurn, type Exercise } from '../src/lib/exercises';
import { addDays, addLessonSentences, dailyLesson, dailySpeakIds, speakCardId } from '../src/lib/spaced';
import { workTryLine } from '../src/lib/workTry';
import index from '../public/audio-el/voices.json';

/**
 * "Wat zeg je?" on the sentence of "Probeer het vandaag" (the owner's request, 4 November 2026):
 * the last exercise of a lesson, right before the result with that card. The learner says the
 * sentence from memory with the card's moment as the question, then hears it (never graded). It
 * is exactly the card's sentence (lib/workTry.ts workTryLine), and takes the place of the
 * lesson's "say it", so the lesson keeps its length.
 */

setRecordedIndex(index as ElevenIndex, null);
const all = () => true;
type Speak = Extract<Exercise, { kind: 'speak' }>;
const workOf = (list: Exercise[]) => list.filter((e): e is Speak => e.kind === 'speak' && Boolean(e.work));
const own = allLessons.filter((l) => !l.steps?.length && !isMixLesson(l) && !l.repeat);
const pl = getHelpLanguage('pl');

describe('the sentence of "Probeer het vandaag" said at the end of its lesson', () => {
  it('is the last exercise, exactly the card\'s sentence with the card\'s moment, instead of the "say it"', () => {
    let some = 0;
    for (const lesson of own) {
      for (const seed of [1, 42]) {
        const list = buildLesson(lesson, { review: false, seed, speak: true, recorded: all });
        const line = workTryLine(lesson.id);
        const work = workOf(list);
        if (!line) { expect(work, lesson.id).toHaveLength(0); continue; }
        some++;
        expect(work, lesson.id).toHaveLength(1);
        expect(list.at(-1)).toBe(work[0]);
        expect(work[0].item).toEqual({ id: line.id, nl: line.nl, en: line.en });
        expect(work[0].work!.when).toEqual(line.when);
        // No plain "say it" next to it, and the lesson keeps its 21 (plus the tip's second page).
        expect(list.filter((e) => e.kind === 'speak' && !e.turn && !e.work), lesson.id).toHaveLength(0);
        expect(list.length - list.filter((e) => e.kind === 'tip' && e.part === 'say').length).toBeLessThanOrEqual(21);
        const before = buildLesson(lesson, { review: false, seed, speak: true });
        expect(list.length - (list.some((e) => e.kind === 'speak' && e.turn) ? 1 : 0)).toBeLessThanOrEqual(before.length);
        // Never two speaking exercises in a row.
        list.forEach((e, i) => { if (e.kind === 'speak') expect(list[i + 1]?.kind, lesson.id).not.toBe('speak'); });
      }
    }
    expect(some).toBeGreaterThan(150);
  });

  it('comes after the tip taught the sentence (its "Zeg het zo"), or in a lesson with a name in the tip after the line itself', () => {
    for (const lesson of own) {
      const list = buildLesson(lesson, { review: false, seed: 3, speak: true, recorded: all });
      const [work] = workOf(list);
      if (!work) continue;
      const taught = list.slice(0, -1).some((e) => (e.kind === 'tip' && e.part === 'say' && e.tip.phrase.nl === work.item.nl)
        || (e.kind === 'build' && e.sentence.nl === work.item.nl) || (e.kind === 'chat' && e.dialogue.reply.nl === work.item.nl));
      expect(taught, lesson.id).toBe(true);
    }
  });

  it('only with speaking and sound on, the sentence recorded, in a lesson of its own (not the shorter one)', () => {
    const gear = findLesson('l.gear')!.lesson;
    for (const opts of [{ speak: true }, { speak: false, recorded: all }, { speak: true, quiet: true, recorded: all }, { speak: true, easy: true, recorded: all }]) {
      expect(workOf(buildLesson(gear, { review: false, seed: 1, ...opts }))).toHaveLength(0);
    }
    // Not recorded in "your" voice: the usual "say it" stays.
    const line = workTryLine('l.gear')!;
    const without = buildLesson(gear, { review: false, seed: 1, speak: true, recorded: (t) => t !== line.nl });
    expect(workOf(without)).toHaveLength(0);
    expect(without.some((e) => e.kind === 'speak' && !e.turn)).toBe(true);
    const daily = dailyLesson(gear.words.map((w) => w.id));
    expect(workOf(buildLesson(daily, { review: true, seed: 1, speak: true, recorded: all }))).toHaveLength(0);
    for (const mix of allLessons.filter((l) => !l.steps?.length && isMixLesson(l))) {
      expect(workOf(buildLesson(mix, { review: true, seed: 1, speak: true, recorded: all })), mix.id).toHaveLength(0);
    }
  });

  it('is there for most lessons with the recordings of today (public/audio-el/voices.json)', () => {
    const recorded = (t: string) => hasClip(t, 'piper:ariel') && hasClip(t, 'piper:thijmen');
    const lines = own.filter((l) => workTryLine(l.id));
    const got = lines.filter((l) => workTurn(l, recorded));
    // 4 November 2026: 73 of the 96 sentences (the rest need a recording; then they come by themselves).
    expect(got.length / lines.length).toBeGreaterThan(0.7);
  });

  it('gets a spoken-sentence card, so it is said again in "Herhaal vandaag"', () => {
    const today = '2026-11-04';
    const line = workTryLine('l.gear')!;
    const cards = addLessonSentences({}, [], { [speakCardId(line.id)]: true }, today);
    expect(cards[speakCardId(line.id)]).toEqual({ box: 1, due: addDays(today, 1) });
    const tomorrow = addDays(today, 1);
    expect(dailySpeakIds(cards, tomorrow)).toEqual([speakCardId(line.id)]);
    const gear = findLesson('l.gear')!.lesson;
    expect(dailyLesson([...gear.words.map((w) => w.id), speakCardId(line.id)], cards, tomorrow).say).toEqual({ id: line.id, nl: line.nl, en: line.en });
  });
});

describe('on screen (Speaking.tsx)', () => {
  const render = (lessonId: string, phase: 'idle' | 'review' | 'off') => {
    const ex = workTurn(findLesson(lessonId)!.lesson, all)!;
    return { ex, html: renderToStaticMarkup(createElement(SpeakExercise, { ex, lang: pl, onAnswer: () => {}, phaseForShot: phase })) };
  };

  it('asks "Wat zeg je?" with the moment of the card, and keeps the sentence hidden until it is said', () => {
    const { ex, html } = render('l.gear', 'idle');
    expect(html).toContain('Co mówisz?');
    expect(html).toContain('say-work');
    expect(html).toContain(pl.ui.workTryWhen as string);
    const moment = gloss(ex.work!.when!.id, ex.work!.when!.en, pl).help!;
    expect(html).toContain(dropAsk(moment));
    expect(html).not.toContain(ex.item.nl);
    expect(html).toContain('say-mic');
    const off = render('l.gear', 'off').html;
    expect(off).not.toContain(ex.item.nl);
    expect(off).toContain('say-reveal');
  });

  it('shows the sentence with its meaning after it was said', () => {
    const { ex, html } = render('l.gear', 'review');
    expect(html).toContain(ex.item.nl);
    expect(html).toContain(gloss(ex.item.id, ex.item.en, pl).help!);
    expect(html).toContain('say-again-one');
  });

  it('has the Dutch quote of the situation with its speaker (l.people: "Hoi, ik ben Mark.")', () => {
    const { ex, html } = render('l.people', 'idle');
    expect(ex.work!.said).toBe('Hoi, ik ben Mark.');
    expect(html).toContain('situation-quote');
    expect(html).not.toContain(ex.item.nl);
  });

  it('without a moment (a tip that asks what a line means): its meaning is the question, said once', () => {
    const idle = render('l.hello', 'idle');
    expect(idle.ex.work!.when).toBeUndefined();
    const meaning = gloss(idle.ex.item.id, idle.ex.item.en, pl).help!;
    expect(idle.html).toContain('say-work-meaning');
    expect(idle.html).toContain(meaning);
    expect(idle.html).not.toContain(idle.ex.item.nl);
    const review = render('l.hello', 'review').html;
    expect(review).toContain(idle.ex.item.nl);
    expect(review.split(meaning).length - 1).toBe(1);
  });
});
