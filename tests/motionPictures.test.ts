import { readFileSync } from 'node:fs';
import { createElement, type JSX } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { allWords, findLesson } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { hasPicture, introPicture } from '../src/lib/wordPicture';
import { loadPictures } from '../src/pictures';

/*
 * Moving word pictures (the owner's trial, 5 November 2026; docs/tekenstijl.md "Beweging"): a few
 * pictures whose meaning is a movement move once on the word's intro card, and nowhere else.
 *  - each trial picture has a moving part (src/pictures/kit.tsx Move: a <g class="mv-…">);
 *  - only a rule under .intro-card animates it: in a choice, on the path, on the pocket cards and
 *    in the lists the same picture stands still;
 *  - the keyframes say only where a part comes from, so its base style is the still picture;
 *  - short and calm: it plays once (at most twice), no step shorter than 0.4 s, no loop;
 *  - "ontruimen" and "bijna" (abstract before) have a moving picture only ('motion'): on the
 *    intro card, never in a picture choice or a match.
 * Less motion and "Rustig scherm" stop it: tests/a11yMotionSound.test.ts.
 */

const MOTION_TRIAL = ['w.glad', 'w.tillen', 'w.ontruimen', 'w.inchecken', 'w.uitchecken', 'w.bijna', 'w.langzaam', 'w.snel', 'w.telaat'];

const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/** Every plain rule (selector + body) of the stylesheet, at any depth of @media. */
function rules(src: string): { sel: string; body: string }[] {
  const out: { sel: string; body: string }[] = [];
  for (const m of src.matchAll(/([^{}]+)\{([^{}]*)\}/g)) out.push({ sel: m[1].trim(), body: m[2] });
  return out;
}
const all = rules(css);
const mvRules = all.filter((r) => /\.mv-/.test(r.sel));
const keyframes = (name: string) => {
  const at = css.indexOf(`@keyframes ${name} `);
  if (at < 0) return undefined;
  let depth = 0;
  for (let i = css.indexOf('{', at); i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) return css.slice(css.indexOf('{', at) + 1, i);
  }
  return undefined;
};

let words: Record<string, () => JSX.Element>;
beforeAll(async () => {
  await loadPictures();
  words = (await import('../src/pictures/words')).default;
});

describe('moving word pictures: the trial', () => {
  it('each trial word has a picture with a moving part', () => {
    for (const id of MOTION_TRIAL) {
      expect(words[id], id).toBeDefined();
      expect(renderToStaticMarkup(createElement(words[id])), id).toMatch(/class="mv-(from|slow|fast|turn|tip|grow|show)"/);
    }
  });

  it('no other picture moves (the trial stays a trial)', () => {
    const moving = Object.entries(words).filter(([, draw]) => /class="mv-/.test(renderToStaticMarkup(createElement(draw)))).map(([id]) => id);
    expect(moving.sort()).toEqual([...MOTION_TRIAL].sort());
  });

  it('"ontruimen" and "bijna" have a moving picture only: on the intro card, never in a choice', () => {
    for (const id of ['w.ontruimen', 'w.bijna']) {
      const w = allWords.find((x) => x.id === id)!;
      expect(w.picture, id).toBe('motion');
      expect(introPicture(w), id).toBe(true);
      expect(hasPicture(w), id).toBe(false);
    }
    for (const [lessonId, id] of [['l.alarm', 'w.ontruimen'], ['l.task', 'w.bijna']]) {
      const { lesson } = findLesson(lessonId)!;
      for (const seed of [1, 2, 3, 7, 42, 99]) {
        for (const review of [false, true]) {
          for (const ex of buildLesson(lesson, { review, seed })) {
            if (ex.kind === 'dutch' && !ex.textOnly) for (const o of ex.options) expect(o.id, `${lessonId} ${seed}`).not.toBe(id);
            if (ex.kind === 'match' && 'pictures' in ex && ex.pictures) for (const p of ex.pairs ?? []) expect(p.id).not.toBe(id);
          }
        }
      }
    }
  });

  it('the intro card shows the moving picture', async () => {
    const { IntroCard } = await import('../src/components/Exercises');
    for (const id of MOTION_TRIAL) {
      const word = allWords.find((x) => x.id === id)!;
      const html = renderToStaticMarkup(createElement(IntroCard as never, { ex: { kind: 'intro', word }, onAnswer: () => {} } as never));
      expect(html, id).toContain('intro-card');
      expect(html, id).toMatch(/class="mv-/);
    }
  });
});

describe('moving word pictures: the motion (styles.css)', () => {
  const animating = mvRules.filter((r) => /\banimation\b/.test(r.body));

  it('only a rule under .intro-card moves a picture', () => {
    expect(animating.length).toBeGreaterThanOrEqual(7);
    for (const r of animating) for (const sel of r.sel.split(',')) expect(sel.trim(), sel).toMatch(/^\.intro-card \.word-pic \.mv-[\w-]+$/);
    // The other .mv- rules only say where a part turns or grows from.
    for (const r of mvRules.filter((x) => !animating.includes(x))) {
      const props = [...r.body.matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(['transform-box', 'transform-origin'], `${r.sel}: ${p}`).toContain(p);
    }
  });

  it('every kind of moving part has its rule', () => {
    for (const kind of ['from', 'slow', 'fast', 'turn', 'tip', 'grow', 'show']) {
      expect(animating.some((r) => r.sel.includes(`.mv-${kind}`)), kind).toBe(true);
    }
  });

  it('plays once (at most twice), never loops, and no step is shorter than 0.4 s', () => {
    for (const r of animating) {
      const decl = /animation\s*:\s*([^;]+)/.exec(r.body)![1];
      expect(decl, r.sel).not.toMatch(/infinite|!important/);
      const times = [...decl.matchAll(/(\d*\.?\d+)(m?s)\b/g)].map((m) => Number(m[1]) * (m[2] === 's' ? 1000 : 1));
      expect(times[0], `${r.sel}: duration`).toBeGreaterThanOrEqual(400);
      expect(times[0], `${r.sel}: duration`).toBeLessThanOrEqual(2000);
      // The count: a bare number outside the timing function's brackets.
      const count = decl.replace(/\([^)]*\)/g, '').split(/\s+/).filter((t) => /^\d*\.?\d+$/.test(t)).map(Number);
      expect(count.length, r.sel).toBe(1);
      expect(count[0], r.sel).toBeLessThanOrEqual(2);
      expect(/animation-iteration-count/.test(r.body), r.sel).toBe(false);
      // Ends on the still picture (no fill "forwards" that would hold the first frame's opposite).
      expect(decl, r.sel).toMatch(/\bbackwards\b/);
    }
  });

  it('the keyframes say only where a part comes from: its base style is the still picture', () => {
    const names = new Set(animating.map((r) => /animation\s*:\s*([\w-]+)/.exec(r.body)![1]));
    for (const name of names) {
      const body = keyframes(name);
      expect(body, name).toBeDefined();
      expect(body!.trim(), name).toMatch(/^from\s*\{[^{}]*\}$/);
      // Only a slide, a turn, a growth or a fade.
      const props = [...body!.matchAll(/([\w-]+)\s*:/g)].map((m) => m[1]);
      for (const p of props) expect(['transform', 'opacity'], `${name}: ${p}`).toContain(p);
    }
  });
});
