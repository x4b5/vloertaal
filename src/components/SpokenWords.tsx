import { Fragment, useEffect, useState } from 'react';
import { learnerWantsStill } from '../lib/calm';
import { breakable } from '../lib/dutch';
import { followWordLight } from '../lib/followWordLight';
import { wordsOf } from '../lib/wordLight';

/**
 * Word by word light (the owner's request, 17 November 2026): while a Dutch line is said, the word
 * being said gets a coloured background, so a learner can say it along.
 *
 * Two pieces, for every place that shows a Dutch line:
 *  - useWordLight(text): the index of the word lit now (-1: none). For a screen that draws its own
 *    word pieces, such as the tiles of a built sentence.
 *  - <SpokenWords text>: the line written word by word, with the lit one marked.
 * Both follow the sound by its text (src/lib/followWordLight.ts), never by the card it is on: give
 * them the same text the speaker plays. With "Rustig scherm: aan" nothing lights (src/lib/calm.ts),
 * as the mouth of "Hoe zeg je het?" does not move then either.
 */
export function useWordLight(text: string, enabled = true): number {
  const [lit, setLit] = useState(-1);
  useEffect(() => {
    setLit(-1);
    if (!enabled || learnerWantsStill()) return undefined;
    return followWordLight(text, setLit);
  }, [text, enabled]);
  return lit;
}

/** A Dutch line as words, the one being said lit. Reads like the plain line (words and spaces). */
export function SpokenWords({ text }: { text: string }) {
  const lit = useWordLight(text);
  return (
    <>
      {wordsOf(text).map((word, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className={i === lit ? 'spoken-word spoken-lit' : 'spoken-word'}>{breakable(word)}</span>
        </Fragment>
      ))}
    </>
  );
}
