import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, phrasebookExtras } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { gloss } from '../src/i18n';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';
import { tokenize } from '../src/lib/answers';
import { breakable, plain, SEAM_WORDS, SHY, splitQuote } from '../src/lib/dutch';
import { buildSteps, buildTiles, courseNames, tileLabel } from '../src/lib/exercises';
import { registerRegion } from '../src/content/regio';
import zlPack from '../src/content/regio/zuid-limburg-pack';
import { createRng } from '../src/lib/random';

/** Every Dutch text a lesson shows. */
const DUTCH = [
  ...allLessons.flatMap((l) => [...l.sentences.map((s) => s.nl), ...l.words.map((w) => w.nl)]),
  ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
  ...phrasebookExtras.map((s) => s.nl),
  ...cultureTips.flatMap((t) => [t.phrase.nl, t.situation.nl ?? '']),
];

describe('soft hyphens in long Dutch words (display only)', () => {
  it('never changes the visible letters', () => {
    for (const text of DUTCH) {
      const shown = breakable(text);
      expect(plain(shown), text).toBe(text);
      expect(shown.replace(new RegExp(SHY, 'g'), ''), text).toBe(text);
    }
  });

  it('breaks every word of 14 letters or more at a compound seam', () => {
    const long = new Set(DUTCH.flatMap((t) => [...t.matchAll(/\p{L}{14,}/gu)].map((m) => m[0].toLowerCase())));
    const missing = [...long].filter((w) => !SEAM_WORDS.includes(w));
    expect(missing.map((w) => `Zet een naad voor "${w}" in src/lib/dutch.ts SEAMS`)).toEqual([]);
    for (const w of long) {
      const parts = breakable(w).split(SHY);
      expect(parts.length, w).toBeGreaterThan(1);
      // No stub of one or two letters on either side of a seam.
      for (const p of parts) expect(p.length, `${w}: ${parts.join('|')}`).toBeGreaterThanOrEqual(3);
    }
  });

  it('puts the seams where the compound joins', () => {
    expect(breakable('de houdbaarheidsdatum').split(SHY)).toEqual(['de houdbaarheids', 'datum']);
    expect(breakable('de reiskostenvergoeding').split(SHY)).toEqual(['de reis', 'kosten', 'vergoeding']);
    // A capital at the start keeps its seam.
    expect(breakable('Veiligheidsschoenen aan!').split(SHY)).toEqual(['Veiligheids', 'schoenen aan!']);
  });
});

describe('building a sentence: no capital in the middle of it', () => {
  it('writes the options of the first place small, and only the sentence start gets a capital', () => {
    const s = 'Zet de nieuwe producten achteraan.';
    expect(tileLabel('Zet', 0, s)).toBe('zet');
    expect(tileLabel('De', 0, s)).toBe('de');
    expect(tileLabel('Vakken', 0, s)).toBe('vakken');
    // Further on a tile is shown as it is; a name or an abbreviation keeps its capitals.
    expect(tileLabel('vakken', 2, s)).toBe('vakken');
    expect(tileLabel('Ali', 0, s)).toBe('Ali');
    expect(tileLabel('BSN', 0, s)).toBe('BSN');
    // A sentence that starts with a name: its first options keep their capitals (no give-away).
    expect(tileLabel('Morgen', 0, 'Ali werkt morgen.')).toBe('Morgen');
  });

  it('keeps the capital of a name from a region that loads later ("Duitsland")', () => {
    const s = 'Ik woon in Nederland en werk in Duitsland.';
    expect(courseNames().has('Duitsland')).toBe(false);
    registerRegion(zlPack);
    expect(courseNames().has('Duitsland')).toBe(true);
    expect(tileLabel('Duitsland', 0, s)).toBe('Duitsland');
    expect(tileLabel('Ik', 0, s)).toBe('ik');
  });

  it('never shows a capital that gives the first word away, in any lesson', () => {
    for (const lesson of allLessons) {
      for (const sentence of lesson.sentences) {
        const steps = buildSteps(sentence.nl, buildTiles(sentence, lesson, createRng(3)));
        const shown = steps[0].map((t) => tileLabel(t, 0, sentence.nl));
        const caps = shown.filter((t) => /^\p{Lu}/u.test(t));
        // Either no option has a capital, or all of them do (a sentence that starts with a name).
        expect(caps.length === 0 || caps.length === shown.length || !caps.includes(tileLabel(tokenize(sentence.nl)[0], 0, sentence.nl)), `${sentence.nl}: ${shown.join(' / ')}`).toBe(true);
      }
    }
  });
});

describe('a situation quotes its Dutch once', () => {
  it('splits the text around the quoted Dutch, in English and every help language', () => {
    for (const t of cultureTips) {
      const nl = t.situation.nl;
      if (!nl) continue;
      const texts = [t.situation.en, ...helpLanguageSources.flatMap((src) => (['m', 'f'] as const).map((g) => gloss(t.situation.id, t.situation.en, getHelpLanguage(src.code, g)).help ?? ''))];
      for (const text of texts) {
        const parts = splitQuote(text, nl);
        expect(parts, `${t.id}: ${text}`).not.toBeNull();
        // The Dutch is left out of the text around it (it is shown once, on its own line).
        expect(`${parts!.before} ${parts!.after}`, `${t.id}: ${text}`).not.toContain(nl.replace(/[.!?]$/, ''));
      }
    }
  });

  it('keeps the words around the quote', () => {
    expect(splitQuote('Przełożony mówi: „Morgen begin je om half negen.” O której jutro zaczynasz?', 'Morgen begin je om half negen.'))
      .toEqual({ before: 'Przełożony mówi:', after: 'O której jutro zaczynasz?' });
    expect(splitQuote('No Dutch here.', 'Hoi.')).toBeNull();
  });
});

describe('the heading of a situation fits its question', () => {
  it('"What time do you start?" and "What do you say?" are not asked as "What do you do?"', () => {
    const ask = (id: string) => cultureTips.find((t) => t.id === id)!.situation.ask ?? 'whatdo';
    expect(ask('c.hours')).toBe('which');
    expect(ask('c.measures')).toBe('whatsay');
    expect(ask('c.je')).toBe('which');
    expect(ask('c.shelves')).toBe('whatdo');
    // Every situation that does not end in "What do you do?" (or "What can you do?") says so.
    for (const t of cultureTips) {
      const q = t.situation.en.match(/[^.!?"]*\?\s*$/)?.[0]?.trim() ?? '';
      if (/^What (do|can) you do\?$|^What is wise\?$|^What do you put on your CV\?$/.test(q)) continue;
      expect(t.situation.ask, `${t.id}: ${q}`).toBeDefined();
    }
  });

  it('has its labels in every help language', () => {
    for (const src of helpLanguageSources) {
      const lang = getHelpLanguage(src.code)!;
      for (const key of ['whatDoYouDo', 'whatDoYouSay', 'whatIsRight'] as const) expect(lang.ui[key], `${src.code} ${key}`).toBeTruthy();
    }
  });
});
