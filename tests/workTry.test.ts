import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Word } from '../src/content/types';
import { cultureTips } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { TYPE_MAX_LETTERS, typable } from '../src/lib/typable';

/**
 * "Probeer het vandaag op je werk" (src/lib/workTry.ts): first time only, a lesson with a tip of
 * its own and a short sentence, at most once a day, and still once a day without storage. And
 * the typable rule (src/lib/typable.ts) it was split out with.
 */

const store = new Map<string, string>();
function storage(broken = false) {
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => { if (broken) throw new Error('blocked'); return store.get(k) ?? null; },
    setItem: (k: string, v: string) => { if (broken) throw new Error('blocked'); store.set(k, v); },
    removeItem: (k: string) => void store.delete(k),
  });
}

/** A fresh module each test: the day kept in memory (no storage) starts empty. */
async function load() {
  vi.resetModules();
  return import('../src/lib/workTry');
}

beforeEach(() => storage());
afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

const word = (nl: string): Word => ({ id: 'w.test', nl, en: 'test', emoji: '' }) as Word;

describe('typable', () => {
  it('takes a plain lower-case word, with or without its article', () => {
    expect(typable(word('de bus'))).toBe(true);
    expect(typable(word('het werk'))).toBe(true);
    expect(typable(word('pauze'))).toBe(true);
  });

  it('refuses capitals, hyphens and digits', () => {
    expect(typable(word('BSN'))).toBe(false);
    expect(typable(word('DigiD'))).toBe(false);
    expect(typable(word('de e-sigaret'))).toBe(false);
    expect(typable(word('24 uur'))).toBe(false);
  });

  it('counts letters without the article, up to TYPE_MAX_LETTERS', () => {
    const max = 'a'.repeat(TYPE_MAX_LETTERS);
    expect(typable(word(`de ${max}`))).toBe(true);
    expect(typable(word(`het ${max}`))).toBe(true);
    expect(typable(word(`${max}a`))).toBe(false);
  });
});

describe('workTryLine', () => {
  const lessonIds = units.flatMap((u) => u.lessons.map((l) => l.id));

  it('gives the lesson\'s own "Zeg het zo" sentence, when short enough (and without a name)', async () => {
    const { hasName, workTryLine, WORK_TRY_MAX_WORDS } = await load();
    const short = cultureTips.filter((t) => t.phrase.nl.trim().split(/\s+/).length <= WORK_TRY_MAX_WORDS && !hasName(t.phrase.nl));
    expect(short.length).toBeGreaterThan(0);
    for (const tip of short) {
      const when = tip.situation.ask === 'which' ? {} : { when: { id: tip.situation.id, en: tip.situation.en } };
      expect(workTryLine(tip.lessonId)).toEqual({ id: tip.phrase.id, nl: tip.phrase.nl, en: tip.phrase.en, ...when });
    }
  });

  it('gives the moment as "Als", so it is an if-then plan (not for a "which is right?" situation)', async () => {
    const { workTryLine } = await load();
    const tip = cultureTips.find((t) => t.lessonId === 'l.speakup')!;
    expect(workTryLine('l.speakup')?.when).toEqual({ id: tip.situation.id, en: tip.situation.en });
    const which = cultureTips.find((t) => t.situation.ask === 'which' && t.phrase.nl.trim().split(/\s+/).length <= 12);
    if (which) expect(workTryLine(which.lessonId)?.when).toBeUndefined();
  });

  it('gives a Werkregels lesson its "Zo zeg je het" sentence, with its context as the moment (W1)', async () => {
    await import('../src/i18n/packs/nl');
    const { workTryLine } = await import('../src/lib/workTry');
    expect(workTryLine('r.l.ziek.3')).toEqual({ id: 'r.l.ziek.3.mo1', nl: 'Ik ben weer beter. Ik kan morgen weer komen werken.', en: '', whenNl: 'Je meldt je beter bij je leidinggevende.' });
    // A sentence with a character's name in it is not one to say yourself.
    expect(workTryLine('r.l.ziek.1')).toBeUndefined();
    // Also a name you speak to ("Henk, er zit een doos vast."), not only "ik ben …" (4 November 2026).
    expect(workTryLine('r.l.factory.1')).toBeUndefined();
    // Too long (13 words).
    expect(workTryLine('r.l.ziek.2')).toBeUndefined();
  });

  it('gives a tip with a name in it another line of its own lesson, for the same moment, or no card (4 November 2026)', async () => {
    const { workTryLine } = await load();
    const when = (lessonId: string) => {
      const { situation } = cultureTips.find((t) => t.lessonId === lessonId)!;
      return { id: situation.id, en: situation.en };
    };
    // "Hoi, ik ben Ali. Ik ben nieuw hier.", "Goedemorgen, ik ben Ali. …", "Hallo, met Ali. …": a learner
    // who reads little would say "Ali".
    expect(workTryLine('l.people')).toEqual({ id: 's.people.3', nl: 'Ik ben een nieuwe collega.', en: 'I am a new colleague.', when: when('l.people') });
    expect(workTryLine('l.arrive')).toEqual({ id: 'c.arrive.a', nl: 'Ik ben nieuw. Ik begin vandaag.', en: 'I am new. I start today.', when: when('l.arrive') });
    expect(workTryLine('l.callin')).toEqual({ id: 's.callin.2', nl: 'Ik denk dat ik overmorgen weer kom.', en: 'I think I will be back the day after tomorrow.', when: when('l.callin') });
    // A written message with names in it, and Ali's name spelled out: no line of the lesson fits.
    expect(workTryLine('l.email')).toBeUndefined();
    expect(workTryLine('l.texting')).toBeUndefined();
    expect(workTryLine('l.details')).toBeUndefined();
  });

  it('takes those lines from what is there already: recorded in every voice, translated in every help language', async () => {
    const { workTryLine } = await load();
    const { helpLanguages } = await import('../src/i18n/all');
    expect(helpLanguages).toHaveLength(14);
    // The Dutch cast: a Flemish voice (country) records only what it is asked to.
    const voices = (JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { key: string; country?: string; said: Record<string, string> }[]).filter((v) => !v.country);
    for (const lessonId of ['l.people', 'l.arrive', 'l.callin']) {
      const line = workTryLine(lessonId)!;
      for (const v of voices) expect(Object.values(v.said), `${v.key}: ${line.nl}`).toContain(line.nl);
      for (const lang of helpLanguages) expect(lang.gloss[line.id], `${lang.code}: ${line.id}`).toBeTruthy();
    }
  });

  it('gives nothing for a lesson without a tip, or with a long sentence', async () => {
    const { workTryLine, WORK_TRY_MAX_WORDS } = await load();
    const withTip = new Set(cultureTips.map((t) => t.lessonId));
    for (const id of lessonIds.filter((i) => !withTip.has(i))) expect(workTryLine(id)).toBeUndefined();
    for (const tip of cultureTips.filter((t) => t.phrase.nl.trim().split(/\s+/).length > WORK_TRY_MAX_WORDS)) {
      expect(workTryLine(tip.lessonId)).toBeUndefined();
    }
    expect(workTryLine('l.does-not-exist')).toBeUndefined();
  });
});

describe('"Probeer het vandaag" never has a name in it (4 November 2026)', () => {
  /** Every text in a value (the steps of a rules lesson). */
  const strings = (x: unknown): string[] =>
    typeof x === 'string' ? [x] : Array.isArray(x) ? x.flatMap(strings) : x && typeof x === 'object' ? Object.values(x).flatMap(strings) : [];

  it('in both tracks, both countries and a region: no name of the cast or of anyone the lessons name', async () => {
    vi.resetModules();
    await import('./regionLoaded');
    await import('../src/i18n/packs/nl');
    const { allRegionTips, allRegionUnits, setRegionsOn } = await import('../src/content/regio');
    const { setBeTaal } = await import('../src/content/taalBe/live');
    const { beTaalTips } = await import('../src/content/taalBe');
    const { setBeRules } = await import('../src/content/regels/be/live');
    const { allCountriesRulesUnits, setRulesCountry } = await import('../src/content/rulesCourse');
    const { allCountriesTaalUnits } = await import('../src/content/curriculum');
    const tips = (await import('../src/content/culture')).cultureTips;
    const { CAST } = await import('../src/components/Characters');
    const { workTryLine } = await import('../src/lib/workTry');
    setRegionsOn(true);
    try {
      const taal = [...allCountriesTaalUnits(), ...allRegionUnits('taal')].flatMap((u) => u.lessons);
      const regels = [...allCountriesRulesUnits(), ...allRegionUnits('regels')].flatMap((u) => u.lessons);

      // The names, found in the course's own Dutch: how a chat, a story or a question names someone
      // ("ik ben Ali", "Beste Karin", "Groet, Ali Haddad", "ploegbaas Jan", "Henk vraagt", "Wat kan
      // Fatima het beste doen?"), and the cast.
      const texts = [
        ...taal.flatMap((l) => [...l.words.map((w) => w.nl), ...l.sentences.map((s) => s.nl), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl])]),
        ...[...tips, ...beTaalTips, ...allRegionTips()].flatMap((t) => [t.phrase.nl, t.situation.nl ?? '']),
        ...regels.flatMap((l) => strings(l.steps ?? [])),
      ];
      // Written with a capital in the middle of a sentence somewhere ("Dan zegt" is not a name).
      const midSentence = new Set(texts.flatMap((text) => {
        const raw = text.split(/\s+/);
        return raw.flatMap((r, i) => (i > 0 && !/[.!?…:]["”’]?$/.test(raw[i - 1]) ? [r.replace(/[^\p{L}'-]/gu, '')] : []));
      }));
      const NAME = '(\\p{Lu}\\p{Ll}{2,})';
      const asName = [
        new RegExp(`(?<!\\p{L})(?:[Ii]k ben|[Ii]k heet|heet|naam is|meneer|mevrouw|collega|ploegbaas|leidinggevende|eigenaar|Hoi|Hallo|Beste|Dag|Groet,|Groeten,) ${NAME}`, 'gu'),
        new RegExp(`(?:Groet|Groeten), \\p{Lu}\\p{Ll}+ ${NAME}`, 'gu'),
        new RegExp(`(?<!\\p{L})(?<!(?:in|voor|uit|naar) )${NAME} (?:zegt|vraagt|roept|antwoordt|schrijft|appt)(?!\\p{L})`, 'gu'),
        new RegExp(`(?<!\\p{L})Wat (?:kan|moet|doet|zegt) ${NAME}`, 'gu'),
      ];
      const found = texts.flatMap((text) => asName.flatMap((p) => [...text.matchAll(p)].map((m) => m[1]))).filter((w) => midSentence.has(w));
      const names = [...new Set([...CAST.map((c) => c.charAt(0).toUpperCase() + c.slice(1)), ...found])];
      expect(names).toEqual(expect.arrayContaining(['Bram', 'Amina', 'Henk', 'Jada', 'Ali', 'Haddad', 'Mark', 'Karin', 'Sara', 'Jan', 'Fatima', 'Jayden', 'Sanne']));
      const named = new RegExp(`(?<!\\p{L})(?:${names.join('|')})(?:'?s)?(?!\\p{L})`, 'u');
      // A name spelled out letter by letter ("A, L, I").
      const spelled = (nl: string) => [...nl.matchAll(/(?<!\p{L})\p{Lu}(?:, \p{Lu}(?!\p{L}))+/gu)].map((m) => m[0].replace(/, /g, ''));
      const isName = (w: string) => names.some((n) => n.toLowerCase() === w.toLowerCase());

      let taalLines = 0;
      let regelsLines = 0;
      for (const country of ['nl', 'be'] as const) {
        setRulesCountry(country);
        setBeTaal(country === 'be');
        setBeRules(country === 'be');
        for (const [lessons, track] of [[taal, 'taal'], [regels, 'regels']] as const) {
          for (const lesson of lessons) {
            const line = workTryLine(lesson.id);
            if (!line) continue;
            if (track === 'taal') taalLines++;
            else regelsLines++;
            expect(line.nl, `${country} ${lesson.id}`).not.toMatch(named);
            expect(spelled(line.nl).filter(isName), `${country} ${lesson.id}: ${line.nl}`).toEqual([]);
          }
        }
      }
      // Both tracks have their cards (each country counted).
      expect(taalLines).toBeGreaterThan(100);
      expect(regelsLines).toBeGreaterThan(100);
    } finally {
      setRulesCountry('nl');
      setBeTaal(null);
      setBeRules(null);
      setRegionsOn(null);
    }
  });
});

describe('workTryFor', () => {
  const lesson = 'l.hello';
  const other = 'l.people';

  it('shows on a lesson\'s first time only, not on a review', async () => {
    const { workTryFor } = await load();
    expect(workTryFor(lesson, false, '2026-10-31')).toBeUndefined();
    expect(workTryFor(lesson, true, '2026-10-31')?.nl).toBeTruthy();
  });

  it('shows at most once a day, and again the next day', async () => {
    const { workTryFor } = await load();
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
    expect(store.get('vloertaal:work-try')).toBe('2026-10-31');
    expect(workTryFor(other, true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(other, true, '2026-11-01')).toBeDefined();
  });

  it('does not use up the day on a lesson without a card', async () => {
    const { workTryFor } = await load();
    expect(workTryFor('l.does-not-exist', true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(lesson, false, '2026-10-31')).toBeUndefined();
    expect(store.has('vloertaal:work-try')).toBe(false);
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
  });

  it('without storage (private mode) still shows once a day, for this visit', async () => {
    storage(true);
    const { workTryFor } = await load();
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
    expect(workTryFor(other, true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(other, true, '2026-11-01')).toBeDefined();
  });
});

describe('Gelukt? (a day after "Probeer het vandaag op je werk")', () => {
  const lessonWithLine = () => cultureTips.find((t) => t.phrase && t.phrase.nl.trim().split(/\s+/).length <= 12)!.lessonId;

  it('asks on a later day, not the same day, and only once', async () => {
    const m = await load();
    const lesson = lessonWithLine();
    const line = m.workTryFor(lesson, true, '2026-11-01');
    expect(line).toBeDefined();
    expect(m.geluktDue('2026-11-01')).toBeUndefined();
    expect(m.geluktDue('2026-11-02')?.nl).toBe(line!.nl);
    m.answerGelukt('ja');
    expect(m.geluktDue('2026-11-03')).toBeUndefined();
  });

  it('"Nog niet" asks once more the next day, then closes', async () => {
    const m = await load();
    const line = m.workTryFor(lessonWithLine(), true, '2026-11-01');
    expect(m.geluktDue('2026-11-02')?.nl).toBe(line!.nl);
    m.answerGelukt('nog-niet', '2026-11-02');
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
    expect(m.geluktDue('2026-11-03')?.nl).toBe(line!.nl);
    m.answerGelukt('nog-niet', '2026-11-03');
    expect(m.geluktDue('2026-11-04')).toBeUndefined();
  });

  it('"Ja, gelukt" after a second chance closes it too', async () => {
    const m = await load();
    m.workTryFor(lessonWithLine(), true, '2026-11-01');
    m.answerGelukt('nog-niet', '2026-11-02');
    m.answerGelukt('ja', '2026-11-03');
    expect(m.geluktDue('2026-11-04')).toBeUndefined();
  });

  it('asks nothing without a card, or without storage', async () => {
    const m = await load();
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
    storage(true);
    const n = await load();
    n.workTryFor(lessonWithLine(), true, '2026-11-01');
    expect(n.geluktDue('2026-11-02')).toBeUndefined();
  });

  it('ignores a damaged value', async () => {
    store.set('vloertaal:work-try-ask', '{not json');
    const m = await load();
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
  });
});
