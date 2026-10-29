import { describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';

// A story about someone else, then "Wat doe je?", switches person and confuses the learner
// (feedback from an NT2 teacher, 29 okt 2026). Ask about that person: "Wat kan Kevin het beste doen?".
const whatdo = [...rulesUnits, ...sectorRulesUnits]
  .flatMap((u) => u.lessons)
  .flatMap((l) => l.steps ?? [])
  .filter((s): s is Extract<typeof s, { kind: 'whatdo' }> => s.kind === 'whatdo');

/** Sentence openers that are not a person's name. */
const NOT_A_NAME = new Set(['Je', 'Jij', 'Er', 'Een', 'De', 'Het', 'In', 'Op', 'Om', 'Na', 'Bij', 'Wat', 'Hoe']);

describe('"Wat doe je?" steps keep one person', () => {
  it('has whatdo steps to check', () => {
    expect(whatdo.length).toBeGreaterThan(50);
  });

  it('answers about "hij" or "zij" are not asked as "Wat doe je?"', () => {
    for (const s of whatdo) {
      const third = s.options.filter((o) => /^(Hij|Zij|Ze)\b/.test(o.text)).length;
      if (third >= 2) expect(s.situation, s.id).not.toMatch(/\bje\?$/);
    }
  });

  it('a story about a named person does not end in "Wat doe je?"', () => {
    for (const s of whatdo) {
      const first = s.situation.split(/\s/)[0];
      if (/^[A-Z][a-z]+$/.test(first) && !NOT_A_NAME.has(first)) expect(s.situation, s.id).not.toMatch(/Wat doe je\?$/);
    }
  });
});
