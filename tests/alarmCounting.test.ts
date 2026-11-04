import { describe, expect, it } from 'vitest';
import { beTaalUnits, findLesson, units } from '../src/content/curriculum';
import { tipForLesson } from '../src/content/culture';
import { nearSynonyms } from '../src/content/synonyms';
import { TAAL_BE_INVENTORY } from '../src/content/taalBe/inventory';
import { gloss, helpLanguages } from '../src/i18n/all';
import { shortTip } from '../src/components/Exercises';
import { buildLesson } from '../src/lib/exercises';
import { dailyLesson, type Cards } from '../src/lib/spaced';
import { hasPicture } from '../src/lib/wordPicture';

/**
 * Two gaps in the core (the owner's plan, phase 2, 4 November 2026): numbers as words
 * ("Getallen", l.counting in u.data) and the fire alarm with the evacuation ("Brandalarm en
 * ontruimen", l.alarm in u.safety).
 */

const counting = findLesson('l.counting')!;
const alarm = findLesson('l.alarm')!;
const pairs: [string, string, string, string][] = [
  ['w.dertien', 'w.dertig', '13', '30'],
  ['w.zeventien', 'w.zeventig', '17', '70'],
  ['w.zevenenveertig', 'w.vierenzeventig', '47', '74'],
];

describe('Getallen (l.counting)', () => {
  it('is the first lesson of "Getallen en gegevens" in Starten: needed from day 1 (4 November 2026)', () => {
    expect(counting.unit.id).toBe('u.data');
    expect(counting.unit.lessons[0].id).toBe('l.counting');
    expect(counting.lesson.words).toHaveLength(6);
    expect(counting.lesson.sentences).toHaveLength(3);
    expect(counting.lesson.dialogues).toHaveLength(1);
  });

  it('teaches three listening pairs (13/30, 17/70, 47/74): each word knows its partner and shows its digits', () => {
    const byId = new Map(counting.lesson.words.map((w) => [w.id, w]));
    for (const [a, b, da, db] of pairs) {
      expect(byId.get(a)?.pair, a).toBe(b);
      expect(byId.get(b)?.pair, b).toBe(a);
      expect(byId.get(a)!.en, a).toContain(`(${da})`);
      expect(byId.get(b)!.en, b).toContain(`(${db})`);
      // In every help language too: the digits next to the number word.
      for (const lang of helpLanguages) {
        expect(gloss(a, '', lang).help, `${lang.code} ${a}`).toContain(da);
        expect(gloss(b, '', lang).help, `${lang.code} ${b}`).toContain(db);
      }
    }
    // A label with the digits (src/pictures/group35.tsx), so a picture choice is decided by the number.
    expect(counting.lesson.words.every(hasPicture)).toBe(true);
  });

  it('always offers the partner in a choice about a number ("What do you hear?", the meaning, the picture)', () => {
    let asked = 0;
    for (const seed of [1, 2, 3, 4, 5, 6, 7, 8]) {
      for (const quiet of [false, true]) {
        for (const review of [false, true]) {
          for (const e of buildLesson(counting.lesson, { review, seed, quiet })) {
            if (e.kind !== 'listen' && e.kind !== 'meaning' && e.kind !== 'dutch') continue;
            if (!e.word.pair) continue;
            asked++;
            const ids = e.options.map((o) => o.id);
            expect(ids, `${e.kind} ${e.word.id} seed ${seed}`).toContain(e.word.pair);
            expect(ids).toContain(e.word.id);
            expect(new Set(ids).size).toBe(ids.length);
          }
        }
      }
    }
    expect(asked).toBeGreaterThan(40);
  });

  it('its tip gives 0 to 20 and the tens, and in the lesson the order of "vijfentwintig"', () => {
    const tip = tipForLesson('l.counting')!;
    for (const n of ['nul', 'twaalf', 'dertien', 'negentien', 'twintig', 'dertig', 'tachtig', 'negentig']) expect(tip.body, n).toContain(n);
    // The lesson's short tip: the last digit first (25), 47 and 74, dertien or dertig.
    const short = shortTip({ en: tip.body }, 3, tip.lead).en;
    expect(short).toContain('25 is vijfentwintig');
    expect(short).toContain('47 is zevenenveertig, and 74 is vierenzeventig');
    expect(short).toContain('Dertien and dertig');
    // "Wat klopt?": the supervisor says the aisle, the learner picks 47 (not 74).
    expect(tip.situation.nl).toBe('Ga naar gang zevenenveertig.');
    expect(tip.situation.ask).toBe('which');
    expect(tip.options.find((o) => o.best)?.en).toBe('Aisle 47.');
    expect(tip.options.map((o) => o.en)).toContain('Aisle 74.');
  });

  it('comes back in the ear training of today\'s review: two number labels, by ear', () => {
    const day = '2026-11-04';
    const known: Cards = { 'w.zeventien': { box: 2, due: day }, 'w.zeventig': { box: 2, due: '2026-11-06' } };
    const l = dailyLesson(['w.zeventien'], known, day);
    expect([l.ear?.word.id, l.ear?.partner.id].sort()).toEqual(['w.zeventien', 'w.zeventig']);
    const ear = buildLesson(l, { review: true, seed: 1 }).find((e) => e.kind === 'dutch' && e.ear !== undefined);
    expect(ear && ear.kind === 'dutch' && ear.options.every(hasPicture)).toBe(true);
  });
});

describe('Brandalarm en ontruimen (l.alarm)', () => {
  it('is in Veiligheid right after "Danger!", with the evacuation words', () => {
    const ids = alarm.unit.lessons.map((l) => l.id);
    expect(alarm.unit.id).toBe('u.safety');
    expect(ids.indexOf('l.alarm')).toBe(ids.indexOf('l.danger') + 1);
    expect(alarm.lesson.words.map((w) => w.nl)).toEqual(['het alarm', 'ontruimen', 'de vluchtroute', 'de trap', 'de verzamelplaats', 'de brandblusser']);
    expect(alarm.lesson.sentences).toHaveLength(3);
    // The emergency exit and the escape route are never offered as wrong answers for each other.
    expect(nearSynonyms('de nooduitgang', 'de vluchtroute')).toBe(true);
  });

  it('asks "Het alarm gaat. Wat doe je?": stop at once and go to the assembly point', () => {
    const tip = tipForLesson('l.alarm')!;
    expect(tip.situation.en).toMatch(/^The fire alarm goes off\..*What do you do\?$/);
    expect(tip.situation.ask ?? 'whatdo').toBe('whatdo');
    expect(tip.options.find((o) => o.best)?.en).toContain('assembly point');
    // The lesson's short tip (its first three sentences) holds what the answer needs.
    const short = shortTip({ en: tip.body }, 3, tip.lead).en;
    for (const part of ['assembly point', 'stop your work at once', 'Leave your things']) expect(short).toContain(part);
    expect(tip.body).toContain('never the lift');
    // The situation and its tip come in the lesson.
    const kinds = buildLesson(alarm.lesson, { review: false, seed: 1 }).map((e) => e.kind);
    expect(kinds).toContain('situation');
  });

  it('is the same in Belgium: no BHV’er in the lesson or the tip', () => {
    const tip = tipForLesson('l.alarm')!;
    const texts = [...alarm.lesson.words.map((w) => w.nl), ...alarm.lesson.sentences.map((s) => s.nl), tip.body, tip.phrase.nl];
    expect(texts.join(' ')).not.toMatch(/BHV/);
    expect(TAAL_BE_INVENTORY['u.safety'].lessons['l.alarm']).toMatchObject({ items: 'A', tip: 'A' });
    expect(TAAL_BE_INVENTORY['u.data'].lessons['l.counting']).toMatchObject({ items: 'A', tip: 'A' });
    const be = beTaalUnits().flatMap((u) => u.lessons);
    expect(be.find((l) => l.id === 'l.alarm')).toBe(alarm.lesson);
    expect(be.find((l) => l.id === 'l.counting')).toBe(counting.lesson);
  });
});

describe('both lessons', () => {
  it('are in the Dutch course once', () => {
    const all = units.flatMap((u) => u.lessons.map((l) => l.id));
    expect(all.filter((id) => id === 'l.alarm' || id === 'l.counting').sort()).toEqual(['l.alarm', 'l.counting']);
  });
});
