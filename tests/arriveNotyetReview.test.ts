import { describe, expect, it } from 'vitest';
import { allLessons, findLesson } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { gloss, helpLanguages } from '../src/i18n/all';
import { shortTip, TIP_SENTENCES } from '../src/components/Exercises';
import { checkTiles, nextTileOrder, sentenceOrders, tokenize } from '../src/lib/answers';
import { sentences } from '../src/lib/dutch';
import { buildSteps, buildTiles, unheard, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';

/** The NT2 review of l.arrive and l.notyet (18 October 2026). */
describe('a sentence with another right word order', () => {
  const sentence = (id: string) => allLessons.flatMap((l) => l.sentences).find((s) => s.id === id)!;

  it('has its alternatives made of exactly its own tiles', () => {
    const withAlt = allLessons.flatMap((l) => l.sentences).filter((s) => s.alt?.length);
    expect(withAlt.map((s) => s.id)).toEqual(expect.arrayContaining(['s.arrive.3', 's.notyet.1']));
    for (const s of withAlt) {
      // An alternative with other words would be dropped (and never accepted): none is.
      expect(sentenceOrders(s), s.id).toHaveLength(1 + s.alt!.length);
      for (const a of s.alt!) expect(a, s.id).not.toBe(s.nl);
    }
    expect(sentence('s.arrive.3').alt).toEqual(['Wie is vandaag mijn buddy?']);
    expect(sentence('s.notyet.1').alt).toEqual(['Ik heb dit nog niet geleerd.']);
  });

  it('accepts either order, tile by tile and as a whole', () => {
    const s = sentence('s.arrive.3');
    const orders = sentenceOrders(s);
    // "Wie is" fits both; "vandaag" at the third place goes on in the other order.
    expect(nextTileOrder(orders, ['Wie', 'is'], 'mijn')).toBe(0);
    expect(nextTileOrder(orders, ['Wie', 'is'], 'vandaag')).toBe(1);
    expect(nextTileOrder(orders, ['Wie', 'is', 'vandaag'], 'mijn', 1)).toBe(1);
    expect(nextTileOrder(orders, ['Wie', 'is', 'vandaag'], 'buddy', 1)).toBe(-1);
    expect(nextTileOrder(orders, ['Wie', 'is'], 'kantine')).toBe(-1);
    // The first place is offered with a capital ("Ik" for "ik"): the order still counts.
    const n = sentenceOrders(sentence('s.notyet.1'));
    expect(nextTileOrder(n, [], 'Ik')).toBe(1);
    expect(nextTileOrder(n, [], 'Dit')).toBe(0);
    expect(checkTiles(['Ik', 'heb', 'dit', 'nog', 'niet', 'geleerd'], sentence('s.notyet.1'))).toBe(true);
    expect(checkTiles(['Wie', 'is', 'vandaag', 'mijn', 'buddy'], s)).toBe(true);
    expect(checkTiles(['Wie', 'is', 'buddy', 'mijn', 'vandaag'], s)).toBe(false);
    // Without the sentence's alternatives (a plain text) only its own order counts.
    expect(checkTiles(['Wie', 'is', 'vandaag', 'mijn', 'buddy'], s.nl)).toBe(false);
  });

  it('can be built to the end in the other order, as the sentence builder does it', () => {
    for (const id of ['s.arrive.3', 's.notyet.1']) {
      const s = sentence(id);
      const lesson = allLessons.find((l) => l.sentences.includes(s))!;
      const orders = sentenceOrders(s);
      const alt = orders[1];
      let builtOne = false;
      for (let salt = 0; salt < 40; salt++) {
        const tiles = buildTiles(s, lesson, createRng(salt + 1));
        const steps = orders.map((o, k) => buildSteps(k === 0 ? s.nl : o.join(' '), tiles, 3, salt));
        let path = 0;
        const placed: string[] = [];
        for (let at = 0; at < alt.length; at++) {
          const offered = steps[path][at].find((t) => t.toLowerCase() === alt[at].toLowerCase());
          if (!offered) break; // this time the other order's word is not among the three
          const next = nextTileOrder(orders, placed, offered, path);
          expect(next, `${id} salt ${salt} at ${at}`).toBeGreaterThanOrEqual(0);
          path = next;
          placed.push(offered);
        }
        if (placed.length === alt.length) {
          builtOne = true;
          expect(path).toBe(1);
          expect(checkTiles(placed, s)).toBe(true);
        }
      }
      expect(builtOne, id).toBe(true);
    }
  });
});

describe('a line nothing on the phone can say', () => {
  const { lesson } = findLesson('l.notyet')!;
  const word = lesson.words[0];
  const sentence = lesson.sentences[0];
  const none = () => false;
  const all = () => true;

  it('leaves out a listening or writing exercise, and builds by ear no more', () => {
    const listen: Exercise = { kind: 'listen', word, options: [word] };
    const type: Exercise = { kind: 'type', word };
    const byEar: Exercise = { kind: 'build', sentence, tiles: tokenize(sentence.nl), audio: true };
    for (const ex of [listen, type, byEar]) {
      expect(unheard(ex, none), ex.kind).toBe(true);
      expect(unheard(ex, all), ex.kind).toBe(false);
    }
    // Only the line itself counts (a recording of it, or a Dutch phone voice).
    expect(unheard(listen, (t) => t === word.nl)).toBe(false);
  });

  it('keeps every exercise the learner can see', () => {
    const seen: Exercise[] = [
      { kind: 'meaning', word, options: [word] },
      { kind: 'intro', word },
      { kind: 'build', sentence, tiles: tokenize(sentence.nl) },
    ];
    for (const ex of seen) expect(unheard(ex, none), ex.kind).toBe(false);
  });
});

describe('a tip line is never split inside a quotation', () => {
  it('keeps a quoted message with full stops in one sentence, in every kind of quotation marks', () => {
    const msg = 'Hoi Mark, ik ben 10 minuten te laat. Sorry! Groet, Ali';
    expect(sentences(`For example: "${msg}". Check your roster.`)).toEqual([`For example: "${msg}".`, 'Check your roster.']);
    expect(sentences(`مثلاً: «${msg}». انظر في جدول عملك.`)).toEqual([`مثلاً: «${msg}».`, 'انظر في جدول عملك.']);
    expect(sentences(`Например: „${msg}“. Често проверявай.`)).toEqual([`Например: „${msg}“.`, 'Често проверявай.']);
    expect(sentences(`Na przykład: „${msg}”. Często sprawdzaj.`)).toEqual([`Na przykład: „${msg}”.`, 'Często sprawdzaj.']);
    expect(sentences(`Örneğin: “${msg}”. Sık sık bak.`)).toEqual([`Örneğin: “${msg}”.`, 'Sık sık bak.']);
    expect(sentences(`ንኣብነት፡ «${msg}»። መደብ ርአ።`)).toEqual([`ንኣብነት፡ «${msg}»።`, 'መደብ ርአ።']);
    // A question at the end of a quote still ends the sentence after it.
    expect(sentences('So ask: "Mag ik mijn dienst ruilen?" Rules differ.')).toEqual(['So ask: "Mag ik mijn dienst ruilen?"', 'Rules differ.']);
    // Marks that do not pair up: split as before.
    expect(sentences('He says "Stop. Now.')).toEqual(['He says "Stop.', 'Now.']);
  });

  it('shows the example message of c.texting whole, and the swap question, in every language', () => {
    const t = cultureTips.find((x) => x.id === 'c.texting')!;
    const en = shortTip(gloss(`${t.id}.b`, t.body), TIP_SENTENCES, t.lead, t.phrase.nl).en;
    expect(sentences(en).some((s) => s.includes('Hoi Mark') && s.includes('Groet, Ali'))).toBe(true);
    expect(en).toContain('Mag ik mijn dienst ruilen?');
    expect(en).not.toContain('Vraag het eerst');
    for (const lang of helpLanguages) {
      const help = shortTip(gloss(`${t.id}.b`, t.body, lang), TIP_SENTENCES, t.lead, t.phrase.nl).help!;
      const lines = sentences(help);
      expect(lines.some((s) => s.includes('Hoi Mark') && s.includes('Groet, Ali')), lang.code).toBe(true);
      expect(lines.some((s) => /^(Sorry!|Groet)/.test(s)), lang.code).toBe(false);
      expect(help, lang.code).toContain('Mag ik mijn dienst ruilen?');
    }
  });
});
