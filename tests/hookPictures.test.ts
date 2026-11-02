import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { allWords, findLesson } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { hasPicture, introPicture } from '../src/lib/wordPicture';

/**
 * Memory pictures (Word.picture 'hook', the owner's question of 2 November 2026: where does a
 * picture still help a hard word?). Shown on the intro card, where the gloss says what the word
 * means; never as the answer of a picture choice or in a match, where it could point to another word.
 */
const HOOKS = ['w.huur', 'w.borg', 'w.boete', 'w.verlof', 'w.wachtdag', 'w.bruto', 'w.netto', 'w.feestdag', 'w.allergie', 'w.belasting', 'w.zorgverzekering'];

describe('memory pictures', () => {
  it('eleven hard words have one, and each has its drawing', async () => {
    const hooks = allWords.filter((w) => w.picture === 'hook').map((w) => w.id);
    expect(new Set(hooks)).toEqual(new Set(HOOKS));
    const words = (await import('../src/pictures/words')).default as Record<string, unknown>;
    for (const id of HOOKS) expect(words[id], id).toBeDefined();
  });

  it('show on the intro card, but do not identify the word', () => {
    const w = allWords.find((x) => x.id === 'w.borg')!;
    expect(introPicture(w)).toBe(true);
    expect(hasPicture(w)).toBe(false);
    const abstract = allWords.find((x) => x.id === 'w.recht')!;
    expect(introPicture(abstract)).toBe(false);
    const helm = allWords.find((x) => x.id === 'w.helm')!;
    expect(introPicture(helm) && hasPicture(helm)).toBe(true);
  });

  it('never stand as a picture in a choice or a match', () => {
    for (const id of ['l.housing', 'l.payslip', 'l.leave', 'l.illness']) {
      const { lesson } = findLesson(id)!;
      for (const seed of [1, 2, 3, 7, 42]) {
        for (const ex of buildLesson(lesson, { review: false, seed })) {
          if (ex.kind === 'dutch' && !ex.textOnly) for (const o of ex.options) expect(HOOKS, `${id} ${seed}`).not.toContain(o.id);
          if (ex.kind === 'match' && 'pictures' in ex && ex.pictures) for (const p of ex.pairs ?? []) expect(HOOKS).not.toContain(p.id);
        }
      }
    }
  });

  it('the intro card of a hard word shows its memory picture', async () => {
    const { IntroCard } = await import('../src/components/Exercises');
    const card = (id: string) => renderToStaticMarkup(createElement(IntroCard as never, { ex: { kind: 'intro', word: allWords.find((x) => x.id === id)! }, onAnswer: () => {} } as never));
    expect(card('w.bruto')).not.toContain('intro-word-only');
    expect(card('w.recht')).toContain('intro-word-only');
  });
});
