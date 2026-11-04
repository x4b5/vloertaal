import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { DutchExercise, ListenExercise, MeaningExercise, setChoicePickForTest } from '../src/components/Exercises';
import { findLesson } from '../src/content/curriculum';
import { gloss } from '../src/i18n';
import { getHelpLanguage } from '../src/i18n/all';
import type { Exercise } from '../src/lib/exercises';

/**
 * A wrong pick says what that option was (the owner's request, 4 November 2026), as "What do you
 * hear?" already did: on "What does it mean?" the Dutch word of the meaning picked, on "Which one
 * is …?" with text cards the meaning of the Dutch word picked. Only on the wrong card: the right
 * one's Dutch (the word in the bubble) or meaning (the question) is not said again.
 */

const pl = getHelpLanguage('pl');
const words = findLesson('l.hello')!.lesson.words;
const [ja, nee, dank] = ['w.ja', 'w.nee', 'w.dankjewel'].map((id) => words.find((w) => w.id === id)!);
const noop = () => {};
/** The text of each option card (button.choice), in order. */
const cards = (html: string) => [...html.matchAll(/<button[^>]*class="choice [^"]*"[^>]*>([\s\S]*?)<\/button>/g)].map((m) => m[1]);

afterEach(() => setChoicePickForTest(null));

describe('a wrong pick says what it was', () => {
  it('"What does it mean?": the Dutch word of the meaning picked, on that card only', () => {
    const ex: Extract<Exercise, { kind: 'meaning' }> = { kind: 'meaning', word: ja, options: [ja, nee, dank] };
    setChoicePickForTest(nee.id);
    const html = renderToStaticMarkup(createElement(MeaningExercise, { ex, lang: pl, locked: true, onAnswer: noop }));
    const [right, wrong, other] = cards(html);
    expect(wrong).toContain('choice-gloss-nl');
    expect(wrong).toContain('>nee<');
    // The right card and the third one: their meaning only, no Dutch under it.
    expect(right).not.toContain('choice-gloss-nl');
    expect(other).not.toContain('choice-gloss-nl');
    // "ja" is in the bubble, not again on the right card.
    expect(html).toContain('speaker-nl');
    expect(right).not.toContain('>ja<');
  });

  it('"Which one is …?" with text cards: the meaning of the Dutch word picked, on that card only', () => {
    const ex: Extract<Exercise, { kind: 'dutch' }> = { kind: 'dutch', word: ja, options: [ja, nee, dank], textOnly: true };
    setChoicePickForTest(dank.id);
    const html = renderToStaticMarkup(createElement(DutchExercise, { ex, lang: pl, locked: true, onAnswer: noop }));
    const [right, other, wrong] = cards(html);
    const thanks = gloss(dank.id, dank.en, pl).help!;
    expect(wrong).toContain('choice-gloss');
    expect(wrong).toContain(thanks);
    expect(right).not.toContain('choice-gloss');
    expect(other).not.toContain('choice-gloss');
    // The right one's meaning is the question: not again on its card.
    expect(right).not.toContain(gloss(ja.id, ja.en, pl).help!);
  });

  it('shows nothing extra before the answer, or after a right one', () => {
    const meaning: Extract<Exercise, { kind: 'meaning' }> = { kind: 'meaning', word: ja, options: [ja, nee, dank] };
    const dutch: Extract<Exercise, { kind: 'dutch' }> = { kind: 'dutch', word: ja, options: [ja, nee, dank], textOnly: true };
    for (const pick of [null, ja.id]) {
      setChoicePickForTest(pick);
      for (const locked of pick ? [true] : [false, true]) {
        expect(renderToStaticMarkup(createElement(MeaningExercise, { ex: meaning, lang: pl, locked, onAnswer: noop }))).not.toContain('choice-gloss');
        expect(renderToStaticMarkup(createElement(DutchExercise, { ex: dutch, lang: pl, locked, onAnswer: noop }))).not.toContain('choice-gloss');
      }
    }
  });

  it('works as "What do you hear?" did already (every card says its meaning after the answer)', () => {
    const ex: Extract<Exercise, { kind: 'listen' }> = { kind: 'listen', word: ja, options: [ja, nee, dank] };
    setChoicePickForTest(nee.id);
    const html = renderToStaticMarkup(createElement(ListenExercise, { ex, lang: pl, locked: true, onAnswer: noop }));
    for (const card of cards(html)) expect(card).toContain('choice-gloss');
  });
});
