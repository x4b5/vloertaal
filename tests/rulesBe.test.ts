import { readFileSync } from 'node:fs';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { BE_TODO, beCourseUnits, beUnitOf, beUnits, rulesUnitsFor } from '../src/content/regels/be';
import { beId, isBeId, nlId } from '../src/content/regels/be/ids';
import { setBeRules } from '../src/content/regels/be/live';
import { ASK_WHO_BE_ONLY, ASK_WHO_NL_ONLY, askWhoCard, ASK_WHO } from '../src/content/regels/askWho';
import { payslipCard, toCourseUnits } from '../src/content/regels/course';
import { RULES_ADVICE, RULES_ADVICE_BE, RULES_NL_LESSON_NOTE, ruleAdviceBeAll, ruleAdviceLine } from '../src/content/regels/disclaimer';
import type { RuleStep, RuleUnit } from '../src/content/regels/types';
import { modelQuestion } from '../src/content/regels/zegHet';
import { courseUnits, registerRulesCourse, rulesTwinHere } from '../src/content/courses';
import { RULES_STUB } from '../src/dev/rulesStub';
import { kunJeNu } from '../src/content/kunJeNu';
import { rulesCountry, setRulesCountry } from '../src/content/rulesCourse';
import { groupByTheme, themeOf } from '../src/content/themes';
import { coursePlan, unitSector } from '../src/content/sectors';
import { certData, certSub } from '../src/lib/certificate';
import { dailyRuleIds } from '../src/lib/spaced';

/**
 * The Belgian work rules (docs/werkregels-belgie.md): the shape of every Belgian unit (as the Dutch
 * ones, tests/rulesContent.test.ts), a ⚖️ note at every fact, BE_TODO, and the course per country
 * in the route, on the certificate and in today's review.
 */

// The winkel became a sector unit later (31 October 2026); its file kept its name (winkel.ts).
const SECTOR = new Set(sectorRulesUnits.map((u) => u.id).filter((id) => id !== 'r.winkel'));
const fileOf = (u: RuleUnit) => `src/content/regels/be/units/${SECTOR.has(nlId(u.id)) ? 'sector-' : ''}${nlId(u.id).slice(2)}.ts`;
const units = beUnits.map((b) => b.unit);
const lessons = units.flatMap((u) => u.lessons);
const steps = lessons.flatMap((l) => l.steps);
const GRADED = new Set<RuleStep['kind']>(['truefalse', 'whatdo', 'whoask', 'payslip', 'card']);
const ABBR: Record<RuleStep['kind'], string> = { scene: 'sc', rule: 'ru', truefalse: 'tf', whatdo: 'wd', whoask: 'wa', model: 'mo', payslip: 'ps', card: 'ca' };
const sentencesOf = (text: string) => text.split(/(?<=[.!?]"?)\s+/).filter((s) => s.trim());
const wordCount = (s: string) => s.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

function shownTexts(s: RuleStep): string[] {
  switch (s.kind) {
    case 'scene': return s.lines;
    case 'rule': return [s.title, ...s.body];
    case 'truefalse': return [s.statement, s.why];
    case 'whatdo': return [s.situation, ...(s.quote ? [s.quote] : []), ...s.options.flatMap((o) => [o.text, o.feedback]), s.why];
    case 'whoask': return [s.question, ...s.options.map((o) => o.feedback), s.why];
    case 'model': return [s.context, s.nl];
    case 'payslip': return [s.slip.periode, ...s.slip.rows.flatMap((r) => [r.label, r.value]), s.question, ...s.options.flatMap((o) => [o.text, o.feedback]), s.why];
    case 'card': return [s.card.title, ...(s.card.sub ? [s.card.sub] : []), ...s.card.rows.flatMap((r) => [r.label, r.value, ...(r.answer ? [r.answer] : [])]), s.question, ...s.options.flatMap((o) => [o.text, o.feedback]), ...(s.sum ?? []), s.why];
  }
}

describe('Belgian units: the same shape as the Dutch ones', () => {
  it('has at least the example unit (loon)', () => {
    expect(beUnitOf('r.loon')?.unit.id).toBe('r.be.loon');
  });

  it('gives every Belgian unit a Dutch twin, at least its lessons, and well-formed ids', () => {
    const nl = [...rulesUnits, ...sectorRulesUnits];
    for (const u of units) {
      const twin = nl.find((x) => x.id === nlId(u.id));
      expect(twin, u.id).toBeDefined();
      expect(u.id).toMatch(/^r\.be\.[a-z]+$/);
      // The same lessons (ids "r.be.l.<naam>.<n>" for "r.l.<naam>.<n>"); a Belgian unit may add one
      // at the end where Belgium needs more (docs/werkregels-belgie.md), never fewer.
      expect(u.lessons.length, u.id).toBeGreaterThanOrEqual(twin!.lessons.length);
      u.lessons.forEach((l, k) => {
        expect(l.id).toBe(`r.be.l.${u.id.slice(5)}.${k + 1}`);
        const seen: Record<string, number> = {};
        for (const s of l.steps) {
          const n = (seen[s.kind] = (seen[s.kind] ?? 0) + 1);
          expect(s.id).toBe(`${l.id}.${ABBR[s.kind]}${n}`);
        }
      });
    }
    const ids = [...units.map((u) => u.id), ...lessons.map((l) => l.id), ...steps.map((s) => s.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every lesson a scene, one rule, 2+ graded steps and a model sentence, in that order', () => {
    for (const l of lessons) {
      expect(l.steps[0].kind, l.id).toBe('scene');
      expect(l.steps[1].kind, l.id).toBe('rule');
      expect(l.steps.filter((s) => s.kind === 'rule'), l.id).toHaveLength(1);
      expect(l.steps.filter((s) => GRADED.has(s.kind)).length, l.id).toBeGreaterThanOrEqual(2);
      expect(l.steps.at(-1)!.kind, l.id).toBe('model');
      expect((l.steps[1] as Extract<RuleStep, { kind: 'rule' }>).title, l.id).toBe(l.remember);
    }
  });

  it('keeps scenes at 3–5 lines, choices at 2–3 options with one best, and a why', () => {
    for (const s of steps) {
      if (s.kind === 'scene') {
        expect(s.lines.length, s.id).toBeGreaterThanOrEqual(3);
        expect(s.lines.length, s.id).toBeLessThanOrEqual(5);
      }
      if ('options' in s) {
        expect(s.options.length, s.id).toBeGreaterThanOrEqual(2);
        expect(s.options.length, s.id).toBeLessThanOrEqual(3);
        expect(s.options.filter((o) => o.best), s.id).toHaveLength(1);
        if (s.kind === 'whatdo' || s.kind === 'card') expect(s.options, s.id).toHaveLength(3);
      }
      if (GRADED.has(s.kind)) expect(('why' in s ? s.why : '').trim().length, s.id).toBeGreaterThan(0);
    }
  });

  it('asks only Belgian places, and points "Wie vraag je het?" at the lesson\'s help list', () => {
    for (const l of lessons) {
      for (const w of l.help ?? []) expect(ASK_WHO_NL_ONLY, `${l.id}: ${w}`).not.toContain(w);
      for (const s of l.steps) if (s.kind === 'whoask') {
        for (const o of s.options) expect(ASK_WHO_NL_ONLY, `${s.id}: ${o.who}`).not.toContain(o.who);
        expect(l.help ?? [], s.id).toContain(s.options.find((o) => o.best)!.who);
      }
    }
    // And the other way round: the Dutch units never send you to a Belgian place.
    for (const u of [...rulesUnits, ...sectorRulesUnits]) for (const l of u.lessons) {
      for (const w of l.help ?? []) expect(ASK_WHO_BE_ONLY, `${l.id}: ${w}`).not.toContain(w);
      for (const s of l.steps) if (s.kind === 'whoask') for (const o of s.options) expect(ASK_WHO_BE_ONLY, s.id).not.toContain(o.who);
    }
  });

  it('has plain texts: no euro sign, no year, no marker, sentences of 16 words or fewer', () => {
    for (const s of steps) for (const t of shownTexts(s)) {
      expect(t, s.id).not.toContain('€');
      expect(t, s.id).not.toMatch(/\b(2019|202\d|2030)\b/);
      expect(t, s.id).not.toMatch(/⚖|redactie/i);
      expect(t, s.id).not.toMatch(/ {2}|\s[,?!]|\s\.(?!\.)/);
      for (const x of sentencesOf(t)) expect(wordCount(x), `${s.id}: ${x}`).toBeLessThanOrEqual(16);
    }
  });

  it('uses the Flemish words, not the Dutch ones (loonbrief, interimkantoor …)', () => {
    const NL_WORDS = /\b(loonstrook|uitzendbureau|loonheffing|UWV|DigiD|cao's?|Juridisch Loket|bijstand|zzp'?er)\b/i;
    for (const s of steps) for (const t of shownTexts(s)) expect(t, s.id).not.toMatch(NL_WORDS);
  });
});

describe('Belgian units: their tables', () => {
  it('has two wrong sentences for every model step, as long as it, other than it', () => {
    for (const s of steps) if (s.kind === 'model') {
      const q = modelQuestion(s);
      expect(q, s.id).toBeDefined();
      expect(new Set(q!.options.map((o) => o.text)).size, s.id).toBe(3);
      for (const o of q!.options.filter((x) => !x.best)) {
        expect(o.text.length, o.text).toBeGreaterThanOrEqual(Math.floor(s.nl.length * 0.65));
        expect(o.text.length, o.text).toBeLessThanOrEqual(Math.ceil(s.nl.length * 1.5));
        for (const x of [...sentencesOf(o.text), ...sentencesOf(o.feedback)]) expect(wordCount(x), x).toBeLessThanOrEqual(12);
      }
    }
    for (const b of beUnits) {
      const models = new Set(b.unit.lessons.flatMap((l) => l.steps).filter((s) => s.kind === 'model').map((s) => s.id));
      for (const id of Object.keys(b.zegHet)) expect(models.has(id), id).toBe(true);
    }
  });

  it('gives every written rule its advice line (the Belgian one), and only written rules', () => {
    for (const b of beUnits) {
      const rules = b.unit.lessons.flatMap((l) => l.steps).filter((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule');
      for (const r of rules) {
        if (r.rule === 'geschreven') expect(b.advice[r.id], r.id).toBeDefined();
        else expect(b.advice[r.id], r.id).toBeUndefined();
      }
      for (const id of Object.keys(b.advice)) expect(rules.some((r) => r.id === id), id).toBe(true);
    }
    expect(ruleAdviceBeAll()['r.be.l.loon.1.ru1']).toBe('advice');
    expect(ruleAdviceLine('r.be.l.loon.1.ru1')).toBe(RULES_ADVICE_BE);
    expect(ruleAdviceLine('r.l.loon.1.ru1')).toBe(RULES_ADVICE);
    expect(RULES_ADVICE_BE).not.toMatch(/Juridisch Loket/);
  });

  it('shows a shared place by its Belgian name in a Belgian step', () => {
    expect(askWhoCard('hr', 'r.be.l.loon.1.wa1').label).toBe('HR of de personeelsdienst');
    expect(askWhoCard('hr', 'r.l.loon.1.wa1')).toBe(ASK_WHO.hr);
    expect(askWhoCard('vakbond', 'r.be.l.loon.1.wa1')).toBe(ASK_WHO.vakbond);
  });

  it('calls the payslip a loonbrief, and its sums add up', () => {
    const slips = steps.filter((s): s is Extract<RuleStep, { kind: 'payslip' }> => s.kind === 'payslip');
    expect(slips.map((s) => s.id)).toEqual(['r.be.l.loon.2.ps1']);
    const [slip] = slips;
    expect(payslipCard(slip).title).toBe('Loonbrief');
    const num = (t: string) => Number(t.match(/\d+(?:\.\d{3})*(?:,\d+)?/)![0].replace(/\./g, '').replace(',', '.'));
    const field = (f: string) => num(slip.slip.rows.find((r) => r.field === f)!.value);
    expect(slip.slip.rows.map((r) => r.field)).toContain(slip.highlight);
    expect(num(slip.options.find((o) => o.best)!.text)).toBe((num(slip.question) - field('uren')) * field('uurloon'));
    expect(field('bruto')).toBe(field('uren') * field('uurloon'));
    // RSZ: 13,07 procent of the gross wage (a bediende).
    expect(field('rsz')).toBeCloseTo(Math.round(field('bruto') * 13.07) / 100, 2);
    expect(field('netto')).toBeCloseTo(field('bruto') - field('rsz') - field('voorheffing') - field('maaltijdcheques'), 2);
  });

  it('brings its own "Wat kun je nu?", and a unit without one uses the Dutch lines', () => {
    expect(kunJeNu('r.be.loon').map((z) => z.nl)).toContain('Ik kan mijn loonbrief lezen en nakijken.');
    expect(kunJeNu('r.be.zoeken')).toEqual(kunJeNu('r.zoeken'));
  });
});

describe('Belgian units: a ⚖️ note at every fact', () => {
  /** The comment block right above a step (after its "{" and "kind:" lines). */
  const noteAbove = (lines: string[], id: string): string => {
    const at = lines.findIndex((l) => l.includes(`id: '${id}'`));
    let j = at - 1;
    while (j >= 0 && /^\s*(\{|kind: )/.test(lines[j])) j--;
    const notes: string[] = [];
    for (; j >= 0 && /^\s*\/\//.test(lines[j]); j--) notes.push(lines[j]);
    return notes.join('\n');
  };

  it('notes every written rule, every true/false statement and every payslip', () => {
    for (const b of beUnits) {
      const lines = readFileSync(fileOf(b.unit), 'utf8').split('\n');
      for (const s of b.unit.lessons.flatMap((l) => l.steps)) {
        const fact = (s.kind === 'rule' && s.rule === 'geschreven') || s.kind === 'truefalse' || s.kind === 'payslip';
        if (fact) expect(noteAbove(lines, s.id), `${s.id}: no // ⚖️ check: right above it`).toMatch(/⚖️ check:/);
      }
    }
  });

  it('notes every number in a rule or a why (a payslip and a drawn card are examples)', () => {
    for (const b of beUnits) {
      const file = readFileSync(fileOf(b.unit), 'utf8');
      const notes = file.split('\n').filter((l) => /^\s*\/\/.*⚖️ check:/.test(l) || /^\s*\/\/\s{2,}/.test(l)).join(' ');
      for (const s of b.unit.lessons.flatMap((l) => l.steps)) {
        if (s.kind === 'payslip' || s.kind === 'card' || s.kind === 'scene' || s.kind === 'model') continue;
        const texts = s.kind === 'rule' ? s.body : 'why' in s ? [s.why] : [];
        for (const t of texts) for (const n of t.match(/\d+(?:[.,]\d+)?/g) ?? []) expect(notes, `${s.id}: ${n} has no ⚖️ note`).toContain(n);
      }
    }
  });

  it('marks the facts of the shared Belgian tables too', () => {
    const askWho = readFileSync('src/content/regels/askWho.ts', 'utf8').split('\n');
    for (const who of ASK_WHO_BE_ONLY) {
      const at = askWho.findIndex((l) => new RegExp(`^\\s*${who}: \\{`).test(l));
      expect(askWho[at - 1], who).toMatch(/⚖️ check:/);
    }
  });
});

describe('BE_TODO', () => {
  it('lists exactly the Dutch units that have no Belgian version yet, each once', () => {
    const nl = [...rulesUnits, ...sectorRulesUnits].map((u) => u.id);
    expect(new Set(BE_TODO).size).toBe(BE_TODO.length);
    expect([...BE_TODO].sort()).toEqual(nl.filter((id) => !beUnitOf(id)).sort());
  });

  it('gets shorter: loon is done', () => {
    expect(BE_TODO).not.toContain('r.loon');
    expect(BE_TODO.length).toBeLessThan(rulesUnits.length + sectorRulesUnits.length);
  });
});

describe('the course per country', () => {
  const nlCourse = toCourseUnits([...rulesUnits, ...sectorRulesUnits]);
  beforeAll(() => {
    registerRulesCourse(nlCourse, beCourseUnits());
    setBeRules(true);
  });
  afterAll(() => {
    setRulesCountry('nl');
    setBeRules(null);
    registerRulesCourse(toCourseUnits(RULES_STUB));
  });

  it('plays the Belgian course for "be", the Dutch one for "nl" or no country', () => {
    setRulesCountry('be');
    expect(rulesCountry()).toBe('be');
    const be = courseUnits('regels');
    expect(be.map((u) => nlId(u.id))).toEqual(nlCourse.map((u) => u.id));
    expect(be.find((u) => nlId(u.id) === 'r.loon')!.id).toBe('r.be.loon');
    setRulesCountry(undefined);
    expect(courseUnits('regels')).toBe(nlCourse);
    setRulesCountry('nl');
    expect(courseUnits('regels')).toBe(nlCourse);
  });

  it('keeps the Dutch course while the Belgian one is switched off', () => {
    setBeRules(false);
    setRulesCountry('be');
    expect(rulesCountry()).toBe('nl');
    expect(courseUnits('regels')).toBe(nlCourse);
    setBeRules(true);
  });

  it('puts "Deze les gaat nog over Nederland." on a Dutch lesson in the Belgian course, and only there', () => {
    const be = beCourseUnits();
    for (const u of be) for (const l of u.lessons) expect(l.rule?.note, l.id).toBe(isBeId(u.id) ? undefined : RULES_NL_LESSON_NOTE);
    for (const u of nlCourse) for (const l of u.lessons) expect(l.rule?.note, l.id).toBeUndefined();
    expect(rulesUnitsFor('be').length).toBe(rulesUnitsFor('nl').length);
  });

  it('keeps the route: themes, the sector slot and the coach links follow the Dutch twin', () => {
    setRulesCountry('be');
    expect(themeOf('r.be.loon')?.id).toBe(themeOf('r.loon')?.id);
    expect(groupByTheme(courseUnits('regels')).flatMap((g) => g.units).length).toBe(courseUnits('regels').length);
    // A sector: its unit right after r.veilig, as in the Dutch path.
    const main = coursePlan('cleaning', 'regels').main.map((u) => nlId(u.id));
    expect(main[main.indexOf('r.veilig') + 1]).toBe('r.clean');
    expect(unitSector(beId('r.clean'))).toBe('cleaning');
    expect(rulesTwinHere('r.loon')).toBe('r.be.loon');
    // A unit with no Belgian version yet keeps its Dutch id (any unit still in BE_TODO).
    for (const todo of BE_TODO.slice(0, 1)) expect(rulesTwinHere(todo)).toBe(todo);
    expect(rulesTwinHere('r.zoeken')).toBe('r.be.zoeken');
    setRulesCountry('nl');
    expect(rulesTwinHere('r.be.loon')).toBe('r.loon');
  });

  it('gives a Belgian certificate "Werken in België", a Dutch one "Werken in Nederland"', () => {
    setRulesCountry('be');
    const beLoon = courseUnits('regels').find((u) => u.id === 'r.be.loon')!;
    expect(certSub(certData(beLoon, '2026-10-30', 'Nadia'))).toBe('Werken in België');
    expect(certSub(certData(nlCourse.find((u) => u.id === 'r.loon')!, '2026-10-30', 'Nadia'))).toBe('Werken in Nederland');
    setRulesCountry('nl');
  });

  it('keeps today\'s review apart per country', () => {
    const cards = { 'r.be.l.loon.2.ps1': { box: 1, due: '2026-10-01' }, 'r.l.loon.2.ps1': { box: 1, due: '2026-10-01' } };
    setRulesCountry('be');
    expect(dailyRuleIds(cards, '2026-10-30')).toEqual(['r.be.l.loon.2.ps1']);
    setRulesCountry('nl');
    expect(dailyRuleIds(cards, '2026-10-30')).toEqual(['r.l.loon.2.ps1']);
  });
});
