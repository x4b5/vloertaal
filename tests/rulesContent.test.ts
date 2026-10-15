import { describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { RULES_ABUSE, RULES_ADVICE, RULES_CHECKED, RULES_DISCLAIMER, ruleAdvice, ruleAdviceLine } from '../src/content/regels/disclaimer';
import type { RuleLesson, RuleOption, RuleStep, RuleUnit } from '../src/content/regels/types';

/**
 * The Werkregels content (src/content/regels): ids, the shape of every lesson and step, plain
 * Dutch (short sentences), no expert markers, and the advice line under every written rule.
 */

const all: RuleUnit[] = [...rulesUnits, ...sectorRulesUnits];
const lessons: RuleLesson[] = all.flatMap((u) => u.lessons);
const steps: RuleStep[] = lessons.flatMap((l) => l.steps);
const rules = steps.filter((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule');

const GRADED = new Set<RuleStep['kind']>(['truefalse', 'whatdo', 'whoask', 'payslip']);
const ABBR: Record<RuleStep['kind'], string> = { scene: 'sc', rule: 'ru', truefalse: 'tf', whatdo: 'wd', whoask: 'wa', model: 'mo', payslip: 'ps' };

/** Every text a learner sees or hears in a step (the picture idea is for the illustrator). */
function shownTexts(s: RuleStep): string[] {
  switch (s.kind) {
    case 'scene': return s.lines;
    case 'rule': return [s.title, ...s.body];
    case 'truefalse': return [s.statement, s.why];
    case 'whatdo': return [s.situation, ...(s.quote ? [s.quote] : []), ...s.options.flatMap((o) => [o.text, o.feedback]), s.why];
    case 'whoask': return [s.question, ...s.options.map((o) => o.feedback), s.why];
    case 'model': return [s.context, s.nl];
    case 'payslip': return [s.slip.periode, ...s.slip.rows.flatMap((r) => [r.label, r.value]), s.question, ...s.options.flatMap((o) => [o.text, o.feedback]), s.why];
  }
}
const stepTexts = (s: RuleStep) => [...shownTexts(s), ...('picture' in s ? [s.picture] : []), ...('emoji' in s ? [s.emoji] : [])];
const lessonTexts = (l: RuleLesson) => [l.title, l.goal, l.remember];

/** All texts with the id of the step (or lesson/unit) they belong to. */
const everyText: { id: string; text: string }[] = [
  ...all.flatMap((u) => [u.title, u.emoji].map((text) => ({ id: u.id, text }))),
  ...lessons.flatMap((l) => lessonTexts(l).map((text) => ({ id: l.id, text }))),
  ...steps.flatMap((s) => stepTexts(s).map((text) => ({ id: s.id, text }))),
];
const shown: { id: string; text: string }[] = [
  ...all.map((u) => ({ id: u.id, text: u.title })),
  ...lessons.flatMap((l) => lessonTexts(l).map((text) => ({ id: l.id, text }))),
  ...steps.flatMap((s) => shownTexts(s).map((text) => ({ id: s.id, text }))),
];

/** Sentences of a text: split after . ! ? (quotes stay with their words). */
const sentencesOf = (text: string) => text.split(/(?<=[.!?]"?)\s+/).filter((s) => s.trim());
const wordCount = (sentence: string) => sentence.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

/**
 * Sentences allowed to be longer than 16 words: the lesson goals ("Leerdoel") of the
 * owner-approved curriculum, kept word for word. A goal is a list of what you can do, not a
 * sentence from the story. Warn-list: shorten them in the curriculum first, then remove them here.
 */
const LONG_SENTENCE_OK = [
  'r.l.zoeken.3: Je weet wat je in een gesprek kunt vragen, en welke vragen je niet hoeft te beantwoorden.',
  'r.l.start.1: Je weet wat je meeneemt, wat "op tijd" hier betekent, en wat je doet als je te laat bent.',
  'r.l.start.2: Je weet hoe je je voorstelt, wanneer je "je" zegt, en dat je zelf kiest over aanraken.',
  'r.l.start.3: Je durft te zeggen dat je iets niet snapt, en je checkt het door terug te zeggen.',
  'r.l.contract.2: Je weet wat een proeftijd is, en wat er gebeurt aan het eind van een tijdelijk contract.',
  'r.l.tijd.1: Je kent de grenzen voor werktijden, ook voor jongeren, en je weet dat het rooster op tijd moet komen.',
  'r.l.tijd.4: Je vraagt vrij op tijd en op papier, en je weet wat je doet bij een noodgeval.',
  'r.l.ziek.1: Je meldt je zelf ziek, op tijd, en je weet wat je wel en niet hoeft te zeggen.',
  'r.l.ziek.3: Je weet wat de bedrijfsarts doet, dat je meewerkt aan herstel, en dat je je beter meldt.',
  'r.l.samen.4: Je kent de gewoontes bij koffie en verjaardagen, en de regels voor je telefoon en de groepsapp.',
  'r.l.rechten.2: Je herkent gedrag dat over je grens gaat, je zegt stop, en je weet bij wie je terechtkunt.',
  'r.l.rechten.3: Je herkent de signalen van uitbuiting en van een geldezel-trucje, en je weet waar je hulp krijgt.',
];

/** Steps that may name a year: the uitzend-cao started on 1 January 2026 (les 3.3). */
const YEAR_OK = new Set(['r.l.contract.3.tf2']);

/** The 10 pocket-card lines (curriculum, deel 4). */
const KEY_RULES = [
  'Echt werk kost jou nooit geld.',
  'Eerst lezen, dan tekenen.',
  'Wat op papier staat, telt. Bewaar je contract goed.',
  'Schrijf je uren op. Check elke loonstrook.',
  'Te laat? Bel of app vóór je dienst begint.',
  'Ziek? Bel zelf, vóór je dienst begint.',
  'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
  'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
  'Je paspoort en je bankpas geef je nooit af.',
  'Teken nooit iets over ontslag zonder advies.',
];

describe('rules content: ids', () => {
  it('has the 10 units in path order and the 6 sector units', () => {
    expect(rulesUnits.map((u) => u.id)).toEqual(['r.zoeken', 'r.start', 'r.contract', 'r.loon', 'r.tijd', 'r.ziek', 'r.veilig', 'r.samen', 'r.rechten', 'r.geld']);
    expect(rulesUnits.flatMap((u) => u.lessons)).toHaveLength(36);
    expect(sectorRulesUnits.map((u) => u.id).sort()).toEqual(['r.build', 'r.care', 'r.clean', 'r.factory', 'r.horeca', 'r.warehouse']);
    for (const u of sectorRulesUnits) expect(u.lessons, u.id).toHaveLength(2);
  });

  it('gives every unit, lesson, step and option a unique, well-formed id', () => {
    const ids = [...all.map((u) => u.id), ...lessons.map((l) => l.id), ...steps.map((s) => s.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const u of all) {
      expect(u.id).toMatch(/^r\.[a-z]+$/);
      u.lessons.forEach((l, k) => {
        expect(l.id).toBe(`r.l.${u.id.slice(2)}.${k + 1}`);
        const seen: Record<string, number> = {};
        for (const s of l.steps) {
          const n = (seen[s.kind] = (seen[s.kind] ?? 0) + 1);
          expect(s.id).toBe(`${l.id}.${ABBR[s.kind]}${n}`);
          if ('options' in s) {
            const oids = (s.options as { id: string }[]).map((o) => o.id);
            expect(new Set(oids).size, s.id).toBe(oids.length);
          }
        }
      });
    }
  });
});

describe('rules content: lessons and steps', () => {
  it('gives every lesson a scene, one rule, 2+ graded steps and a model sentence, in that order', () => {
    for (const l of lessons) {
      expect(l.steps[0].kind, l.id).toBe('scene');
      expect(l.steps[1].kind, l.id).toBe('rule');
      expect(l.steps.filter((s) => s.kind === 'rule'), l.id).toHaveLength(1);
      expect(l.steps.filter((s) => GRADED.has(s.kind)).length, l.id).toBeGreaterThanOrEqual(2);
      expect(l.steps.at(-1)!.kind, l.id).toBe('model');
      const rule = l.steps[1] as Extract<RuleStep, { kind: 'rule' }>;
      expect(rule.title, l.id).toBe(l.remember);
      expect(rule.body.length, l.id).toBeGreaterThan(0);
      expect(l.goal.length, l.id).toBeGreaterThan(0);
    }
  });

  it('keeps scenes short: 3 to 5 lines with a picture idea', () => {
    for (const s of steps) if (s.kind === 'scene') {
      expect(s.lines.length, s.id).toBeGreaterThanOrEqual(3);
      expect(s.lines.length, s.id).toBeLessThanOrEqual(5);
      expect(s.picture.length, s.id).toBeGreaterThan(0);
    }
  });

  it('gives every choice step 2–3 options with exactly one best, each with feedback', () => {
    for (const s of steps) {
      if (s.kind !== 'whatdo' && s.kind !== 'whoask' && s.kind !== 'payslip') continue;
      expect(s.options.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.options.length, s.id).toBeLessThanOrEqual(3);
      expect(s.options.filter((o) => o.best), s.id).toHaveLength(1);
      for (const o of s.options) expect(o.feedback.trim().length, `${s.id}.${o.id}`).toBeGreaterThan(0);
      if (s.kind === 'whatdo') expect(s.options, s.id).toHaveLength(3);
      if (s.kind === 'whoask') expect(new Set(s.options.map((o) => o.who)).size, s.id).toBe(s.options.length);
    }
  });

  it('gives every graded step a why', () => {
    for (const s of steps) if (GRADED.has(s.kind)) expect(('why' in s ? s.why : '').trim().length, s.id).toBeGreaterThan(0);
  });

  it('points a "Wie vraag je het?" step at a place from the lesson\'s help list', () => {
    for (const l of lessons) for (const s of l.steps) if (s.kind === 'whoask') {
      expect(l.help ?? [], s.id).toContain(s.options.find((o) => o.best)!.who);
    }
  });

  it('has a payslip in les 4.2 that highlights one of its own rows', () => {
    const slips = steps.filter((s): s is Extract<RuleStep, { kind: 'payslip' }> => s.kind === 'payslip');
    expect(slips.map((s) => s.id)).toEqual(['r.l.loon.2.ps1']);
    for (const s of slips) expect(s.slip.rows.map((r) => r.field), s.id).toContain(s.highlight);
  });

  it('does not make the best answer the longest option in more than half of the steps', () => {
    const withText = steps.filter((s): s is Extract<RuleStep, { kind: 'whatdo' | 'payslip' }> => s.kind === 'whatdo' || s.kind === 'payslip');
    const longestIsBest = (opts: RuleOption[]) => {
      const best = opts.find((o) => o.best)!;
      return opts.every((o) => o === best || o.text.length < best.text.length);
    };
    const share = withText.filter((s) => longestIsBest(s.options)).length / withText.length;
    expect(share).toBeLessThanOrEqual(0.5);
  });
});

describe('rules content: key rules and advice', () => {
  it('has the 10 pocket-card rules as key rules, and no others', () => {
    const keyRules = rules.filter((r) => r.key);
    expect(keyRules.map((r) => r.title).sort()).toEqual([...KEY_RULES].sort());
    for (const r of keyRules) expect(rulesUnits.some((u) => u.lessons.some((l) => l.steps.includes(r))), r.id).toBe(true);
  });

  it('marks every written rule with an advice line, and only written rules', () => {
    for (const r of rules) {
      if (r.rule === 'geschreven') expect(ruleAdvice[r.id], r.id).toBeDefined();
      else expect(ruleAdvice[r.id], r.id).toBeUndefined();
    }
    const ruleIds = new Set(rules.map((r) => r.id));
    for (const id of Object.keys(ruleAdvice)) expect(ruleIds.has(id), id).toBe(true);
  });

  it('uses the abuse line for discriminatie, grensoverschrijdend gedrag, uitbuiting and ontslag', () => {
    const abuse = Object.entries(ruleAdvice).filter(([, v]) => v === 'abuse').map(([k]) => k).sort();
    expect(abuse).toEqual(['r.l.rechten.1.ru1', 'r.l.rechten.2.ru1', 'r.l.rechten.3.ru1', 'r.l.rechten.4.ru1']);
    expect(ruleAdviceLine('r.l.rechten.3.ru1')).toBe(RULES_ABUSE);
    expect(ruleAdviceLine('r.l.loon.1.ru1')).toBe(RULES_ADVICE);
    expect(ruleAdviceLine('r.l.samen.1.ru1')).toBeUndefined();
  });

  it('dates the disclaimer', () => {
    expect(RULES_CHECKED).toBe('oktober 2026');
    expect(RULES_DISCLAIMER).toHaveLength(3);
    expect(RULES_DISCLAIMER[1]).toContain(RULES_CHECKED);
  });
});

describe('rules content: plain Dutch', () => {
  it('has no euro sign and no year 2019–2030 (except where allowed)', () => {
    for (const { id, text } of everyText) {
      expect(text, id).not.toContain('€');
      if (!YEAR_OK.has(id)) expect(text, id).not.toMatch(/\b(2019|202\d|2030)\b/);
    }
  });

  it('never shows the expert marker or an editor note', () => {
    for (const { id, text } of everyText) {
      expect(text, id).not.toMatch(/⚖/);
      expect(text, id).not.toMatch(/redactie/i);
    }
  });

  it('keeps every sentence at 16 words or fewer', () => {
    const long = shown.flatMap(({ id, text }) => sentencesOf(text).filter((s) => wordCount(s) > 16).map((s) => `${id}: ${s}`));
    expect(long.filter((l) => !LONG_SENTENCE_OK.includes(l))).toEqual([]);
    // The warn-list holds only sentences that are still too long.
    for (const ok of LONG_SENTENCE_OK) expect(long, ok).toContain(ok);
  });

  it('never uses the name Ali', () => {
    for (const { id, text } of everyText) expect(text, id).not.toMatch(/\bAli\b/);
  });

  it('has no empty texts and no double spaces', () => {
    for (const { id, text } of everyText) {
      expect(text.trim().length, id).toBeGreaterThan(0);
      expect(text, id).not.toMatch(/ {2}|\s[,?!]|\s\.(?!\.)/);
    }
  });
});
