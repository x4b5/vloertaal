import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { geluidsscenes, type Geluidsscene, type Spreker } from '../src/content/geluidsscenes';
import { sectors } from '../src/content/sectors';
import { tokenize } from '../src/lib/answers';
import { sentences } from '../src/lib/dutch';

// Werkvloer-luisteren (fase 2, stap 2.3): de teksten van de geluidsscènes. Nog geen scherm; de
// opnames volgen (docs/geluidsscenes.md).

const words = (t: string) => t.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;
const sceneWords = (s: Geluidsscene) => s.beurten.reduce((n, b) => n + words(b.nl), 0);
/** Every Dutch text a learner hears or reads in a scene. */
const textsOf = (s: Geluidsscene) => [
  ...s.beurten.map((b) => b.nl),
  ...s.vragen.flatMap((v) => [v.vraag, ...v.opties.map((o) => o.nl), v.uitleg.nl]),
];
const questions = geluidsscenes.flatMap((s) => s.vragen.map((v) => ({ s, v })));

describe('geluidsscènes (src/content/geluidsscenes.ts)', () => {
  it('has 3 scenes for every sector, with unique ids', () => {
    for (const sector of sectors) expect(geluidsscenes.filter((s) => s.sector === sector.id).length, sector.id).toBe(3);
    expect(geluidsscenes.length).toBe(sectors.length * 3);
    expect(new Set(geluidsscenes.map((s) => s.id)).size).toBe(geluidsscenes.length);
    for (const s of geluidsscenes) expect(s.id).toMatch(/^g\.[a-z]+\.[a-z]+$/);
  });

  it('has 3 to 6 turns and 25 to 60 words per scene', () => {
    for (const s of geluidsscenes) {
      expect(s.beurten.length, s.id).toBeGreaterThanOrEqual(3);
      expect(s.beurten.length, s.id).toBeLessThanOrEqual(6);
      expect(sceneWords(s), s.id).toBeGreaterThanOrEqual(25);
      expect(sceneWords(s), s.id).toBeLessThanOrEqual(60);
    }
  });

  it('has sentences of at most 12 words (docs/taal-a2.md, regel 1)', () => {
    for (const s of geluidsscenes) for (const t of textsOf(s)) for (const z of sentences(t)) expect(words(z), `${s.id}: ${z}`).toBeLessThanOrEqual(12);
  });

  it('places a scene after the sector topic or a topic in the second half of the path', () => {
    const ids = units.map((u) => u.id);
    for (const s of geluidsscenes) {
      expect(ids, s.id).toContain(s.naUnit);
      const own = sectors.find((x) => x.id === s.sector)!.units;
      expect(own.includes(s.naUnit) || ids.indexOf(s.naUnit) >= ids.length / 2, `${s.id}: ${s.naUnit}`).toBe(true);
    }
  });

  it('lets only the cast and the learner speak; with the learner there, never Bram or Amina (their voices are the learner\'s)', () => {
    const cast: Spreker[] = ['bram', 'henk', 'amina', 'jada', 'ik'];
    for (const s of geluidsscenes) {
      for (const b of s.beurten) expect(cast, s.id).toContain(b.wie);
      const who = new Set(s.beurten.map((b) => b.wie));
      if (who.has('ik')) expect([...who].filter((w) => w === 'bram' || w === 'amina'), s.id).toEqual([]);
      // A colleague or supervisor speaks most: the learner says at most a short line or two.
      expect(s.beurten.filter((b) => b.wie !== 'ik').length, s.id).toBeGreaterThan(s.beurten.length / 2);
      for (const b of s.beurten.filter((x) => x.wie === 'ik')) expect(words(b.nl), `${s.id}: ${b.nl}`).toBeLessThanOrEqual(9);
    }
  });

  it('says "hè" in at most a third of the scenes (natural, but not a tic)', () => {
    const he = /(?<!\p{L})hè(?!\p{L})/iu;
    expect(he.test('Wacht even, hè.')).toBe(true);
    expect(he.test('Hè? Wat zeg je?')).toBe(true);
    const met = geluidsscenes.filter((s) => s.beurten.some((b) => he.test(b.nl)));
    expect(met.length, met.map((s) => s.id).join(', ')).toBeLessThanOrEqual(Math.floor(geluidsscenes.length / 3));
  });

  it('describes the background sound for the sound maker, never louder than the voice', () => {
    for (const s of geluidsscenes) {
      expect(s.geluid.nl.length, s.id).toBeGreaterThan(20);
      expect(['zacht', 'midden'], s.id).toContain(s.geluid.niveau);
    }
  });

  it('asks 1 or 2 questions, each with 3 options and 1 right answer, and a one-sentence explanation', () => {
    for (const s of geluidsscenes) {
      expect(s.vragen.length, s.id).toBeGreaterThanOrEqual(1);
      expect(s.vragen.length, s.id).toBeLessThanOrEqual(2);
      for (const v of s.vragen) {
        expect(v.opties.length, `${s.id}: ${v.vraag}`).toBe(3);
        expect(v.opties.filter((o) => o.goed).length, `${s.id}: ${v.vraag}`).toBe(1);
        expect(new Set(v.opties.map((o) => o.nl)).size, `${s.id}: ${v.vraag}`).toBe(3);
        expect(v.vraag, s.id).toMatch(/\?$/);
        expect(sentences(v.uitleg.nl).length, `${s.id}: ${v.uitleg.nl}`).toBe(1);
        expect(v.uitleg.en.length, `${s.id}: en`).toBeGreaterThan(0);
      }
    }
  });

  it('keeps the options about as long as the right one (0.65 to 1.5 times)', () => {
    for (const { s, v } of questions) {
      const best = v.opties.find((o) => o.goed)!.nl.length;
      for (const o of v.opties) {
        expect(o.nl.length / best, `${s.id}: "${o.nl}" tegen ${best} tekens`).toBeGreaterThanOrEqual(0.65);
        expect(o.nl.length / best, `${s.id}: "${o.nl}" tegen ${best} tekens`).toBeLessThanOrEqual(1.5);
      }
    }
  });

  it('does not give the answer away by its length or its place', () => {
    const longest = questions.filter(({ v }) => {
      const best = v.opties.find((o) => o.goed)!.nl.length;
      return v.opties.every((o) => o.goed || o.nl.length < best);
    });
    // The right answer is the (only) longest in at most a quarter of the questions.
    expect(longest.length).toBeLessThanOrEqual(Math.floor(questions.length / 4));
    // A, B and C are each the right answer in at least a quarter of the questions.
    for (const at of [0, 1, 2]) expect(questions.filter(({ v }) => v.opties[at].goed).length, `plek ${at}`).toBeGreaterThanOrEqual(questions.length / 4);
  });

  it('marks the scenes with a safety rule or a right (⚖️), in every sector at least once', () => {
    for (const sector of sectors) {
      const own = geluidsscenes.filter((s) => s.sector === sector.id);
      expect(own.some((s) => s.recht), sector.id).toBe(true);
    }
  });

  it('is in the recording plan (docs/geluidsscenes.md) word for word, and waits there for its screen', () => {
    const plan = readFileSync('docs/geluidsscenes.md', 'utf8');
    for (const s of geluidsscenes) {
      expect(plan, s.id).toContain(`\`${s.id}\``);
      expect(plan, s.id).toContain(s.geluid.nl);
      s.beurten.forEach((b, i) => expect(plan, `${s.id}.${i + 1}`).toContain(`| \`${s.id}.${i + 1}\` | `));
      for (const b of s.beurten) expect(plan, s.id).toContain(b.nl);
    }
    const file = readFileSync('src/content/geluidsscenes.ts', 'utf8');
    expect(file.split('\n')[0]).toBe('// Nog geen scherm; wacht op opnames (docs/geluidsscenes.md)');
  });

  // docs/taal-a2.md, with the checks of scripts/taal-a2.ts (npm run taal), which reads only the
  // work-rules files: the same words (regel 2 en 7) and the passive (regel 6).
  it('passes the A2 checks', () => {
    const HARD: RegExp[] = [
      /\btwijfel/i,
      /\bappje/i,
      /\b(echter|indien|mits|eventueel|desondanks|betreffende|inzake)\b/i,
      /\b(voortaan|terechtkunt|terecht kunt|nagaan|overkomt|overkomen|kwetsbaar|signalen|signaal|globaal|aanspreekpunt|gewaardeerd|toegestaan|uitstel|ongeopend|in principe|wijziging|instemming)\b/i,
      /\bwaar (ik|je|hij|ze|zij) aan toe (ben|bent|is)\b|\bsluit de deur\b|\bkomen te staan\b/i,
    ];
    const PASSIVE = /\b(word|wordt|worden|werd|werden)\b.*\b(ge\p{L}{2,}(d|t|en))\b/iu;
    for (const s of geluidsscenes)
      for (const t of textsOf(s))
        for (const z of sentences(t)) {
          for (const re of HARD) expect(z, s.id).not.toMatch(re);
          expect(z, s.id).not.toMatch(PASSIVE);
        }
  });

  // "Alleen woorden uit de cursus of woorden die bijna iedereen kent": every word is in a lesson
  // of the course (a word, a sentence, a chat line or a tip), or in this short list of everyday
  // words, names and forms of course words. A new word goes on the list only on purpose.
  it('uses only words of the course, or everyday words on the list', () => {
    const GEWOON = new Set([
      // the cast, and sounds people make
      'bram', 'henk', 'jada', 'amina', 'hè', 'hé', 'o', 'top', 'toch',
      // numbers
      'één', 'elf', 'twaalf', 'achttien', 'vijftien', 'dertig', 'tweehonderd', 'driehonderd', 'derde', 'eerste',
      // forms of course words (course: tillen, bestelling, afkeuren, repareren, vervangen, …)
      'tilt', 'bestel', 'bestellen', 'bestelt', 'keur', 'keuren', 'repareer', 'vervangt', 'pakt', 'maakt',
      'meldt', 'leegt', 'haalt', 'vraagt', 'helpt', 'blijft', 'ruimt', 'roep', 'roept', 'drink', 'gebruik', 'wissel',
      'leggen', 'zetten', 'wachten', 'stoppen', 'moeten', 'brengen', 'draait', 'gebeurt', 'slaapt', 'ruikt', 'valt',
      'kabels', 'emmers', 'gasten', 'stukken', 'meters', 'middel', 'middelen', 'natte', 'gevaarlijke',
      'blauwe', 'groene', 'grote', 'slechte', 'ander', 'elk', 'welk', 'jouw', 'haar', 'ze', 'erin', 'erop',
      'zegt', 'goedemiddag', 'onderaan', 'opnieuw', 'straks', 'ongeveer', 'genoeg', 'achter',
      // everyday words
      'kast', 'pot', 'bar', 'soep', 'melk', 'prijs', 'kopje', 'vrachtwagen', 'graden', 'dorst', 'warm', 'droog',
      'druk', 'ogen', 'oren',
    ]);
    const known = new Set<string>();
    const add = (t: string) => tokenize(t).forEach((w) => known.add(w.toLowerCase()));
    for (const u of units)
      for (const l of u.lessons) {
        l.words.forEach((w) => add(w.nl));
        l.sentences.forEach((x) => add(x.nl));
        (l.dialogues ?? []).forEach((d) => { add(d.prompt.nl); add(d.reply.nl); });
      }
    for (const t of cultureTips) { add(t.phrase.nl); if (t.situation.nl) add(t.situation.nl); }
    const unknown = new Set<string>();
    for (const s of geluidsscenes)
      for (const t of textsOf(s))
        for (const w of tokenize(t)) {
          // "Eén" written small is "één".
          const k = w.toLowerCase().replace(/^eén$/, 'één');
          if (!known.has(k) && !GEWOON.has(k)) unknown.add(`${k} (${s.id})`);
        }
    expect([...unknown]).toEqual([]);
  });
});
