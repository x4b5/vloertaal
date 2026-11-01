import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { BridgeOffer } from '../src/components/BridgeOffer';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { allCountriesTaalUnits } from '../src/content/curriculum';
import { niveauLabel, pastBij } from '../src/content/kunJeNu';
import { FRONT_LINES, frontLine } from '../src/content/patterns';
import { proSections } from '../src/content/pro';
import { isMixLesson } from '../src/content/review';
import { mainLessons } from '../src/content/sectors';
import type { Lesson, Sentence } from '../src/content/types';
import { getHelpLanguage } from '../src/i18n/all';
import { LANG_CODES } from '../src/i18n/meta';
import { checkTiles, sentenceOrders, tokenize } from '../src/lib/answers';
import { BRIDGE_SHARE, bridgeDue, seeBridge } from '../src/lib/bridge';
import { coachPage } from '../src/lib/coachPage';
import {
  ALL_MAX_LETTERS, ALL_MAX_WORDS, allTiles, buildLesson, buildTiles, fitsAllTiles, frontExercise, frontSource, frontSteps, nearMiss,
  PROGRESSION, unitIndexOf, withFrontAlt, type Exercise,
} from '../src/lib/exercises';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { createRng } from '../src/lib/random';
import { setRulesTrack } from '../src/lib/track';

/* Stap 3, "groeien en aantonen": niveau. "Zet het vooraan", sentences in full order later on,
 * the bridge to Werkregels, and an honest level. */

const lessonsOf = () => allCountriesTaalUnits().flatMap((u) => u.lessons);
const linesOf = (l: Lesson): Sentence[] => [...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])];
const builds = (xs: Exercise[]) => xs.filter((e): e is Extract<Exercise, { kind: 'build' }> => e.kind === 'build');
const teaching = mainLessons(undefined, 'taal').filter((l) => !isMixLesson(l));

describe('"Zet het vooraan": the lines (src/content/patterns.ts)', () => {
  const lines = new Map(lessonsOf().flatMap(linesOf).map((s) => [s.id, s]));

  it('only lines the course has: the same words, the front words first, then the verb, then the subject', () => {
    expect(FRONT_LINES.length).toBeGreaterThanOrEqual(12);
    for (const f of FRONT_LINES) {
      const src = lines.get(f.id);
      expect(src, f.id).toBeDefined();
      const from = tokenize(src!.nl);
      const to = tokenize(f.nl);
      const front = tokenize(f.front);
      // The same words (no new sentence to translate).
      expect([...to].map((w) => w.toLowerCase()).sort(), f.id).toEqual([...from].map((w) => w.toLowerCase()).sort());
      // The front words stand in the line as it is, after its verb.
      const at = from.findIndex((_, i) => front.every((w, j) => from[i + j]?.toLowerCase() === w));
      expect(at, f.id).toBeGreaterThanOrEqual(2);
      // Inversion: front words, the verb (second in the line), the subject (first), the rest.
      const rest = from.slice(2).filter((_, i) => i + 2 < at || i + 2 >= at + front.length);
      const expected = [...front, from[1], from[0].toLowerCase(), ...rest];
      expect(to.map((w, i) => (i === 0 ? w.toLowerCase() : w)), f.id).toEqual(expected.map((w, i) => (i === 0 ? w.toLowerCase() : w)));
      // A capital first, the line's own full stop at the end, never a question.
      expect(f.nl[0], f.id).toBe(f.nl[0].toUpperCase());
      expect(f.nl.endsWith('.'), f.id).toBe(true);
      expect(src!.nl.endsWith('.'), f.id).toBe(true);
    }
  });

  it('a line is found by its id', () => {
    expect(frontLine('s.email.3')?.nl).toBe('Morgen verstuur ik de mail.');
    expect(frontLine('s.nothing')).toBeUndefined();
  });
});

describe('"Zet het vooraan" in the lessons (PROGRESSION.front)', () => {
  it('comes in every lesson of the second half of the path, in the picture choice\'s place, and never before', () => {
    expect(PROGRESSION.front).toBeGreaterThanOrEqual(Math.floor(new Set(teaching.map((l) => unitIndexOf(l))).size / 2));
    for (const l of teaching) {
      const at = unitIndexOf(l);
      for (const seed of [1, 7]) {
        const ex = buildLesson(l, { review: false, seed, speak: true });
        const fronts = builds(ex).filter((b) => b.front);
        if (at < PROGRESSION.front) { expect(fronts, l.id).toHaveLength(0); continue; }
        expect(fronts, l.id).toHaveLength(1);
        // After the lesson's own sentences, before the chats.
        const k = ex.indexOf(fronts[0]);
        expect(ex.slice(0, k).filter((e) => e.kind === 'build' && !e.front)).toHaveLength(l.sentences.length);
        // The picture choice (a "which one is it" with picture cards) made room for it.
        const without = buildLesson(l, { review: false, seed, speak: true, easy: true });
        expect(builds(without).some((b) => b.front), `${l.id} easy`).toBe(false);
      }
    }
  });

  it('keeps every lesson at 21 at most, and leaves the rest of the lesson as it was', () => {
    for (const l of teaching.filter((x) => unitIndexOf(x) >= PROGRESSION.front)) {
      for (const recorded of [undefined, () => true]) {
        const ex = buildLesson(l, { review: false, seed: 3, speak: true, recorded });
        expect(ex.length - ex.filter((e) => e.kind === 'tip' && e.part === 'say').length, l.id).toBeLessThanOrEqual(21);
      }
    }
  });

  it('uses the lesson\'s own line, else one met before on the path; its meaning is the line\'s own', () => {
    const own = teaching.find((l) => l.sentences.some((s) => s.id === 's.hours.2'))!;
    expect(frontSource(own)?.line.id).toMatch(/^s\.hours\./);
    for (const l of teaching.filter((x) => unitIndexOf(x) >= PROGRESSION.front)) {
      const src = frontSource(l)!;
      const order = mainLessons(undefined, 'taal');
      const here = order.findIndex((x) => x.id === l.id);
      const where = order.findIndex((x) => linesOf(x).some((s) => s.id === src.line.id));
      expect(where, l.id).toBeGreaterThanOrEqual(0);
      expect(where, l.id).toBeLessThanOrEqual(here);
      // The same lesson, the same line.
      expect(frontSource(l)!.line.id).toBe(src.line.id);
      const ex = frontExercise(src, l, createRng(1));
      if (ex.kind !== 'build') throw new Error('not a build');
      expect(ex.sentence.id).toBe(src.line.id);
      expect(ex.sentence.en).toBe(src.line.en);
      expect(ex.front).toEqual({ nl: src.line.nl, phrase: src.front.front });
    }
  });

  it('three words for each place (max 3), the new order right, the old order not', () => {
    const mail = lessonsOf().find((l) => l.id === 'l.email')!;
    const ex = frontExercise(frontSource(mail)!, mail, createRng(4));
    if (ex.kind !== 'build') throw new Error('not a build');
    for (const salt of [0, 1, 2]) {
      const steps = frontSteps(ex.sentence.nl, ex.tiles, ex.front!, salt);
      steps.forEach((s, i) => {
        expect(s.length).toBeLessThanOrEqual(3);
        expect(new Set(s.map((w) => w.toLowerCase())).size).toBe(s.length);
        expect(s.map((w) => w.toLowerCase())).toContain(tokenize(ex.sentence.nl)[i].toLowerCase());
      });
      // The two choices that matter: "Morgen" beside the old start "Ik", then the verb beside the subject.
      expect(steps[0].map((w) => w.toLowerCase())).toEqual(expect.arrayContaining(['morgen', 'ik']));
      expect(steps[1].map((w) => w.toLowerCase())).toEqual(expect.arrayContaining(['verstuur', 'ik']));
    }
    expect(checkTiles(tokenize('Morgen verstuur ik de mail'), ex.sentence)).toBe(true);
    expect(checkTiles(tokenize('Ik verstuur de mail morgen'), ex.sentence)).toBe(false);
  });

  it('every line: the verb comes second, so the subject is offered beside it', () => {
    for (const l of lessonsOf()) {
      for (const line of linesOf(l)) {
        const f = frontLine(line.id);
        if (!f || l.id.endsWith('.mix')) continue;
        const ex = frontExercise({ line, front: f }, l, createRng(2));
        if (ex.kind !== 'build') throw new Error('not a build');
        const words = tokenize(ex.sentence.nl);
        const k = tokenize(f.front).length;
        for (const salt of [0, 1]) {
          const steps = frontSteps(ex.sentence.nl, ex.tiles, ex.front!, salt);
          expect(steps[k].map((w) => w.toLowerCase()), f.id).toEqual(expect.arrayContaining([words[k].toLowerCase(), words[k + 1].toLowerCase()]));
          steps.forEach((s) => expect(s.length).toBeLessThanOrEqual(3));
        }
      }
    }
  });

  it('counts the other right orders (alt) as right', () => {
    const mail = lessonsOf().find((l) => l.id === 'l.email')!;
    const src = frontSource(mail)!;
    const ex = frontExercise({ ...src, front: { ...src.front, alt: ['De mail verstuur ik morgen.', 'Morgen ik verstuur de mail.'] } }, mail, createRng(4));
    if (ex.kind !== 'build') throw new Error('not a build');
    expect(sentenceOrders(ex.sentence)).toHaveLength(3);
    expect(checkTiles(tokenize('Morgen ik verstuur de mail'), ex.sentence)).toBe(true);
  });

  it('a usual build of such a line counts the fronted order as right too', () => {
    const hours = lessonsOf().flatMap((l) => l.sentences).find((s) => s.id === 's.hours.2')!;
    const s = withFrontAlt(hours);
    expect(checkTiles(tokenize('Ik werk vandaag acht uur'), s)).toBe(true);
    expect(checkTiles(tokenize('Vandaag werk ik acht uur'), s)).toBe(true);
    // A line without one stays the same object.
    const other = lessonsOf()[0].sentences[0];
    expect(withFrontAlt(other)).toBe(other);
  });

  it('draws: the line with its front words marked, the prompt, three tiles with a speaker each', () => {
    const mail = lessonsOf().find((l) => l.id === 'l.email')!;
    const ex = frontExercise(frontSource(mail)!, mail, createRng(4));
    const html = renderToStaticMarkup(createElement(LessonPlayer, { lesson: mail, review: false, lang: getHelpLanguage('pl'), exercises: [ex], startAt: 0, onQuit: () => {}, onFinish: () => {} }));
    expect(html).toContain('<mark class="build-front-mark">morgen</mark>');
    expect(html).toContain('Postaw zaznaczone słowo na początku');
    expect(html.match(/class="tile tile-with-say/g)).toHaveLength(3);
    expect(html.match(/class="tile-say"/g)).toHaveLength(3);
  });
});

describe('a sentence in full order later on (PROGRESSION.buildAll)', () => {
  it('all its words and one that does not fit, never in the right order, the same each time', () => {
    const l = lessonsOf().find((x) => x.id === 'l.gear')!;
    const s = l.sentences[0];
    const tiles = buildTiles(s, l, createRng(3));
    for (const salt of [0, 1, 2, 3]) {
      const bank = allTiles(s.nl, tiles, salt);
      const real = tokenize(s.nl);
      expect(bank).toHaveLength(real.length + 1);
      expect(bank.map((w) => w.toLowerCase()).filter((w) => real.some((r) => r.toLowerCase() === w))).toHaveLength(real.length);
      const extra = bank.filter((w) => !real.some((r) => r.toLowerCase() === w.toLowerCase()));
      expect(extra).toHaveLength(1);
      expect(real.some((r) => nearMiss(extra[0], r))).toBe(false);
      expect(bank.slice(0, real.length).join(' ')).not.toBe(real.join(' '));
      expect(allTiles(s.nl, tiles, salt)).toEqual(bank);
    }
  });

  it('only a sentence that fits a small phone', () => {
    expect(fitsAllTiles('Ik ben werkloos.')).toBe(true);
    expect(fitsAllTiles('Ja.')).toBe(false);
    expect(fitsAllTiles('Ik wil graag een afspraak maken bij de huisarts.')).toBe(false);
    for (const l of teaching) {
      for (const b of builds(buildLesson(l, { review: false, seed: 2 })).filter((x) => x.all)) {
        const t = tokenize(b.sentence.nl);
        expect(t.length).toBeLessThanOrEqual(ALL_MAX_WORDS);
        expect(t.join('').length).toBeLessThanOrEqual(ALL_MAX_LETTERS);
      }
    }
  });

  it('from the later units on, never by ear and never "Zet het vooraan"; before them never', () => {
    let all = 0;
    for (const l of teaching) {
      const at = unitIndexOf(l);
      for (const b of builds(buildLesson(l, { review: false, seed: 2 }))) {
        if (!b.all) continue;
        all++;
        expect(at, l.id).toBeGreaterThanOrEqual(PROGRESSION.buildAll);
        expect(b.audio).toBeUndefined();
        expect(b.front).toBeUndefined();
      }
    }
    expect(all).toBeGreaterThan(30);
    expect(PROGRESSION.buildAll).toBeGreaterThan(PROGRESSION.front);
  });

  it('draws as one list: a row per tile, one tap and one speaker in each', () => {
    const l = lessonsOf().find((x) => x.id === 'l.gear')!;
    const s = l.sentences[0];
    const ex: Exercise = { kind: 'build', sentence: s, tiles: buildTiles(s, l, createRng(3)), all: true };
    const html = renderToStaticMarkup(createElement(LessonPlayer, { lesson: l, review: true, lang: getHelpLanguage('ar'), exercises: [ex], startAt: 0, onQuit: () => {}, onFinish: () => {} }));
    const list = html.match(/<ul class="tile-bank tile-steps tile-all"[^>]*>(.*?)<\/ul>/)?.[1] ?? '';
    const rows = list.match(/<li /g) ?? [];
    expect(rows).toHaveLength(tokenize(s.nl).length + 1);
    expect(list.match(/class="tile tile-with-say/g)).toHaveLength(rows.length);
    expect(list.match(/class="tile-say"/g)).toHaveLength(rows.length);
    // Written small, as at the first place: no capital gives the first word away.
    expect(list).not.toMatch(/>Draag</);
  });
});

describe('the bridge to Werkregels (src/lib/bridge.ts)', () => {
  afterEach(() => setRulesTrack(null));
  const learner = (share: number, extra: Partial<Progress> = {}): Progress => {
    const lessons = mainLessons('none', 'taal');
    const done = lessons.slice(0, Math.ceil(lessons.length * share));
    return { ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', completed: Object.fromEntries(done.map((l) => [l.id, { best: 1, times: 1 }])), ...extra };
  };

  it('is offered once most of the course is done, not before', () => {
    expect(bridgeDue(learner(0))).toBe(false);
    expect(bridgeDue(learner(BRIDGE_SHARE - 0.05))).toBe(false);
    expect(bridgeDue(learner(BRIDGE_SHARE))).toBe(true);
    expect(bridgeDue(learner(1))).toBe(true);
  });

  it('once: either answer puts it away for good', () => {
    const p = learner(1);
    expect(bridgeDue(seeBridge(p))).toBe(false);
    expect(seeBridge(p).completed).toBe(p.completed);
  });

  it('only in the language track, and only when Werkregels is there', () => {
    expect(bridgeDue(learner(1, { helpLang: 'nl' }))).toBe(false);
    setRulesTrack(false);
    expect(bridgeDue(learner(1))).toBe(false);
  });

  it('draws a calm card: the line in Dutch and the help language, two buttons', () => {
    const html = renderToStaticMarkup(createElement(BridgeOffer, { lang: getHelpLanguage('pl'), onGo: () => {}, onLater: () => {} }));
    expect(html).toContain('Je kent nu veel Nederlands. Wil je ook de werkregels leren?');
    expect(html).toContain('Znasz już dużo niderlandzkiego.');
    expect(html.match(/<button/g)?.length).toBeLessThanOrEqual(3);
    expect(html).toContain('bridge-go');
    expect(html).toContain('bridge-later');
  });

  it('its texts are in all 13 help languages (and Dutch and English)', () => {
    for (const code of LANG_CODES) {
      const lang = getHelpLanguage(code);
      for (const key of ['bridgeTitle', 'bridgeText', 'bridgeGo', 'buildFront'] as const) expect(lang.ui[key], `${code} ${key}`).toBeTruthy();
    }
  });
});

describe('an honest level (stap 3)', () => {
  it('a language sentence with A2 says "op weg naar A2"; A1 and 1F stay as they are', () => {
    expect(niveauLabel({ niveau: 'A2' })).toBe('op weg naar A2');
    expect(niveauLabel({ niveau: 'A1' })).toBe('A1');
    expect(pastBij({ niveau: 'A2', vaardigheid: 'gesprekken' })).toBe('op weg naar A2 · gesprekken');
    expect(pastBij({ niveau: '1F', vaardigheid: 'lezen' })).toBe('past bij 1F · lezen');
  });

  it('the coaches read that the language route goes from A0 to A1, on the way to A2', () => {
    const pro = proSections.find((s) => s.id === 'p.kunjenu')!.body.join(' ');
    expect(pro).toContain('van A0 naar A1, op weg naar A2');
    expect(pro).not.toMatch(/Bij Taal is dat A1 of A2/);
    const page = coachPage();
    expect(page).toContain('op weg naar A2 · ');
    expect(page).not.toMatch(/<td>A2 · /);
  });
});
