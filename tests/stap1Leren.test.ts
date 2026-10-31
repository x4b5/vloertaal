import { afterEach, describe, expect, it, vi } from 'vitest';
import { allWords, teachingLessons } from '../src/content/curriculum';
import { buildLesson, PROGRESSION, unitIndexOf } from '../src/lib/exercises';
import { addDays, applyReview, INTERVALS, MADE_FROM_BOX, needsMade, speakCardId, type Cards } from '../src/lib/spaced';
import { typable } from '../src/lib/typable';
import { typeAsPick } from '../src/lib/writing';

/**
 * Beter leren in de bestaande lessen (31 October 2026): no writing in the first topics
 * (PROGRESSION.type), and from box MADE_FROM_BOX a card moves up only after an answer the learner
 * made (lib/spaced.ts applyReview). The chat's translation after the answer is in
 * components/Exercises.tsx (ChatForward, `locked`); "Probeer het vandaag" in tests/workTry.test.ts.
 */

afterEach(() => vi.unstubAllGlobals());

const TODAY = '2026-10-31';
const word = allWords.find(typable)!;
const longWord = allWords.find((w) => !typable(w));
const sentence = teachingLessons.flatMap((l) => l.sentences)[0];

describe('no writing in the first topics', () => {
  const early = teachingLessons.filter((l) => { const u = unitIndexOf(l); return u >= 0 && u < PROGRESSION.type; });
  const later = teachingLessons.filter((l) => unitIndexOf(l) >= PROGRESSION.type);

  it('"type what you hear" is "hear and pick" in every lesson of the first units', () => {
    expect(early.length).toBeGreaterThan(0);
    for (const lesson of early) {
      for (const seed of [1, 7, 42]) {
        for (const ex of buildLesson(lesson, { review: false, seed, speak: true })) {
          if (ex.kind === 'type' && (ex.options?.length ?? 0) > 1) expect(ex.pick, lesson.id).toBe(true);
        }
      }
    }
  });

  it('later units write again', () => {
    const types = later.flatMap((l) => buildLesson(l, { review: false, seed: 42 })).filter((e) => e.kind === 'type');
    expect(types.length).toBeGreaterThan(0);
    expect(types.every((e) => e.kind === 'type' && !e.pick)).toBe(true);
  });

  it('typeAsPick: picked in the first units, unless the learner wants to write', () => {
    const options = [word, word, word];
    expect(typeAsPick({ options, pick: true }, undefined, false)).toBe(true);
    expect(typeAsPick({ options, pick: true }, undefined, true)).toBe(false);
    expect(typeAsPick({ options }, undefined, false)).toBe(false);
    // Nothing to pick from: always written.
    expect(typeAsPick({ options: [word], pick: true }, undefined, false)).toBe(false);
  });
});

describe('from box MADE_FROM_BOX: only a made answer moves a card up', () => {
  const at = (box: number): Cards => ({ [word.id]: { box, due: TODAY } });

  it('a recognised word keeps its box, and comes back after that box\'s days', () => {
    const after = applyReview(at(MADE_FROM_BOX), { [word.id]: true }, TODAY, []);
    expect(after[word.id]).toEqual({ box: MADE_FROM_BOX, due: addDays(TODAY, INTERVALS[MADE_FROM_BOX - 1]) });
  });

  it('a written word moves up', () => {
    const after = applyReview(at(MADE_FROM_BOX), { [word.id]: true }, TODAY, [word.id]);
    expect(after[word.id].box).toBe(MADE_FROM_BOX + 1);
  });

  it('below MADE_FROM_BOX recognising still moves up', () => {
    const after = applyReview(at(MADE_FROM_BOX - 1), { [word.id]: true }, TODAY, []);
    expect(after[word.id].box).toBe(MADE_FROM_BOX);
  });

  it('wrong is still back to box 1', () => {
    expect(applyReview(at(MADE_FROM_BOX + 1), { [word.id]: false }, TODAY, [])[word.id].box).toBe(1);
  });

  it('without `made` (rules track, or no way to make an answer) the old rule', () => {
    expect(applyReview(at(MADE_FROM_BOX), { [word.id]: true }, TODAY)[word.id].box).toBe(MADE_FROM_BOX + 1);
  });

  it('a word that cannot be written, and a rules question, move up as before', () => {
    if (longWord) {
      expect(needsMade(longWord.id)).toBe(false);
      const after = applyReview({ [longWord.id]: { box: MADE_FROM_BOX, due: TODAY } }, { [longWord.id]: true }, TODAY, []);
      expect(after[longWord.id].box).toBe(MADE_FROM_BOX + 1);
    }
    expect(needsMade('r.some.step')).toBe(false);
  });

  it('sentence cards (built or said) need a made answer', () => {
    expect(needsMade(sentence.id)).toBe(true);
    expect(needsMade(speakCardId(sentence.id))).toBe(true);
  });
});

describe('the chat translation: support that fades (PROGRESSION.chatHint)', () => {
  const chats = (lesson: (typeof teachingLessons)[number]) =>
    buildLesson(lesson, { review: false, seed: 3, speak: true }).filter((e): e is Extract<ReturnType<typeof buildLesson>[number], { kind: 'chat' }> => e.kind === 'chat');
  it('shows the colleague\'s line translated before the answer in the first units', () => {
    const early = teachingLessons.filter((l) => { const u = unitIndexOf(l); return u >= 0 && u < PROGRESSION.chatHint; });
    const withChat = early.flatMap(chats);
    expect(withChat.length).toBeGreaterThan(0);
    for (const ex of withChat) expect(ex.hint, ex.dialogue.prompt.id).toBe(true);
  });
  it('only after the answer from then on', () => {
    const later = teachingLessons.filter((l) => unitIndexOf(l) >= PROGRESSION.chatHint);
    const withChat = later.flatMap(chats);
    expect(withChat.length).toBeGreaterThan(0);
    for (const ex of withChat) expect(ex.hint, ex.dialogue.prompt.id).toBeUndefined();
  });
});
