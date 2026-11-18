import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BuildExercise } from '../src/components/Exercises';
import { allLessons } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import type { Exercise } from '../src/lib/exercises';

/*
 * "Make this sentence in Dutch" (BuildExercise): the speaker plays the Dutch sentence, so it stands
 * with the Dutch (the end of the answer line, where the tiles are and the word light runs), not
 * beside the English meaning in the bubble (the owner, 17 November 2026). Built by ear, the large
 * speaker is the task itself and stays first in the bubble.
 */

const sentence = allLessons.flatMap((l) => l.sentences)[0];

const render = (extra: Partial<Extract<Exercise, { kind: 'build' }>> = {}) =>
  renderToStaticMarkup(createElement(BuildExercise as never, {
    ex: { kind: 'build', sentence, tiles: tokenize(sentence.nl), ...extra },
    locked: true,
    onAnswer: () => {},
  } as never));

/** The bubble with the meaning, and the answer line with the Dutch tiles. */
function parts(html: string) {
  const answer = html.indexOf('class="answer-line');
  expect(answer).toBeGreaterThan(0);
  const bubble = html.indexOf('speaker-bubble');
  expect(bubble).toBeGreaterThan(0);
  return { bubble: html.slice(bubble, answer), answer: html.slice(answer) };
}

describe('the speaker of "Make this sentence in Dutch"', () => {
  it('stands in the answer line, with the Dutch, not in the bubble with the English', () => {
    const { bubble, answer } = parts(render());
    expect(answer).toContain('speak-glyph');
    expect(bubble).not.toContain('speak-glyph');
    expect(bubble).not.toContain('<button');
  });

  it('is kept out of the live region reading of the answer line (a speaker is no answer)', () => {
    expect(parts(render()).answer).toContain('class="answer-say" aria-live="off"');
  });

  it('is not there before it is needed (no wrong tap, not done): the Dutch is not given away', () => {
    const html = renderToStaticMarkup(createElement(BuildExercise as never, {
      ex: { kind: 'build', sentence, tiles: tokenize(sentence.nl) },
      locked: false,
      onAnswer: () => {},
    } as never));
    expect(html).not.toContain('speak-glyph');
  });

  it('built by ear: the large speaker stays first in the bubble, none in the answer line', () => {
    const { bubble, answer } = parts(render({ audio: true }));
    expect(bubble).toContain('speak-lg');
    expect(answer).not.toContain('speak-glyph');
    expect(answer).not.toContain('answer-say');
  });
});
