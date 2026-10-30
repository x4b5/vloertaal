import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { RULES_ABUSE, RULES_ADVICE, RULES_BETA, RULES_CHECKED, RULES_DISCLAIMER, ruleAdvice, ruleAdviceLine } from '../src/content/regels/disclaimer';
import type { RuleLesson, RuleOption, RuleStep, RuleUnit } from '../src/content/regels/types';

/**
 * The Werkregels content (src/content/regels): ids, the shape of every lesson and step, plain
 * Dutch (short sentences), no expert markers, and the advice line under every written rule.
 */

const all: RuleUnit[] = [...rulesUnits, ...sectorRulesUnits];
const lessons: RuleLesson[] = all.flatMap((u) => u.lessons);
const steps: RuleStep[] = lessons.flatMap((l) => l.steps);
const rules = steps.filter((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule');

const GRADED = new Set<RuleStep['kind']>(['truefalse', 'whatdo', 'whoask', 'payslip', 'card']);
const ABBR: Record<RuleStep['kind'], string> = { scene: 'sc', rule: 'ru', truefalse: 'tf', whatdo: 'wd', whoask: 'wa', model: 'mo', payslip: 'ps', card: 'ca' };

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
    case 'card': return [
      s.card.title, ...(s.card.sub ? [s.card.sub] : []), ...s.card.rows.flatMap((r) => [r.label, ...(r.value ? [r.value] : []), ...(r.answer ? [r.answer] : [])]),
      s.question, ...s.options.flatMap((o) => [o.text, o.feedback]), ...(s.sum ?? []), s.why,
    ];
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
 * Sentences allowed to be longer than 16 words. Empty: the lesson goals ("Leerdoel") were split
 * into short sentences too (17 October 2026). Warn-list: a sentence here must still be too long.
 */
const LONG_SENTENCE_OK: string[] = [];

/** Steps that may name a year. None now: les 3.3 states the equal-pay rule without a date. */
const YEAR_OK = new Set<string>([]);

/** The 10 pocket-card lines (curriculum, deel 4), and one per Entree unit (entree-aanvulling.md). */
const KEY_RULES = [
  'Voor echt werk hoef jij zelf niet te betalen.',
  'Eerst lezen, dan tekenen.',
  'Wat op papier staat, telt. Bewaar je contract goed.',
  'Schrijf je uren op. Check elke loonstrook.',
  'Te laat? Bel of app vóór je dienst begint.',
  'Ziek? Bel zelf, vóór je dienst begint.',
  'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
  'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
  'Je paspoort en je bankpas geef je nooit af.',
  'Teken nooit iets over ontslag zonder advies.',
  // The Entree additions (units 11–17): one key rule per unit.
  'Twijfel je over de leeftijd bij alcohol of tabak? Vraag altijd een ID.',
  'Je werktijd is: eindtijd min begintijd, min je pauze.',
  'Klaar? Ruim op en laat het nakijken. Zeg wat klaar is en wat niet.',
  'Eerst de POK tekenen. Dan pas beginnen met je stage.',
  'Je DigiD is alleen van jou. Geef hem aan niemand.',
  'Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.',
  'Scheid je afval. Gevaarlijk afval nooit bij het gewone afval.',
];

describe('rules content: ids', () => {
  it('has the 10 units in path order, the 7 Entree units beside them, and the 6 sector units', () => {
    const FIRST_TEN = ['r.zoeken', 'r.start', 'r.contract', 'r.loon', 'r.tijd', 'r.ziek', 'r.veilig', 'r.samen', 'r.rechten', 'r.geld'];
    expect(rulesUnits.map((u) => u.id)).toEqual([
      'r.zoeken', 'r.start', 'r.afronden', 'r.contract', 'r.stage', 'r.loon', 'r.rekenen', 'r.tijd', 'r.winkel',
      'r.ziek', 'r.veilig', 'r.samen', 'r.rechten', 'r.geld', 'r.digitaal', 'r.meedoen', 'r.duurzaam',
    ]);
    // Only additions: the first ten keep their order among themselves.
    expect(rulesUnits.map((u) => u.id).filter((id) => FIRST_TEN.includes(id))).toEqual(FIRST_TEN);
    // 36 lessons of the path and the 19 of the Entree additions (15.3 "AI op je werk" came later).
    expect(rulesUnits.filter((u) => FIRST_TEN.includes(u.id)).flatMap((u) => u.lessons)).toHaveLength(36);
    expect(rulesUnits.filter((u) => !FIRST_TEN.includes(u.id)).flatMap((u) => u.lessons)).toHaveLength(19);
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
      if (s.kind !== 'whatdo' && s.kind !== 'whoask' && s.kind !== 'payslip' && s.kind !== 'card') continue;
      expect(s.options.length, s.id).toBeGreaterThanOrEqual(2);
      expect(s.options.length, s.id).toBeLessThanOrEqual(3);
      expect(s.options.filter((o) => o.best), s.id).toHaveLength(1);
      for (const o of s.options) expect(o.feedback.trim().length, `${s.id}.${o.id}`).toBeGreaterThan(0);
      if (s.kind === 'whatdo' || s.kind === 'card') expect(s.options, s.id).toHaveLength(3);
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
    // The missing gross wage adds up from the slip's own rows: (hours counted - hours on the slip) x wage.
    const num = (t: string) => Number(t.match(/\d+(?:\.\d{3})*/)![0].replace(/\./g, ''));
    const [slip] = slips;
    const field = (f: string) => num(slip.slip.rows.find((r) => r.field === f)!.value);
    const best = num(slip.options.find((o) => o.best)!.text);
    expect(best).toBe((num(slip.question) - field('uren')) * field('uurloon'));
    expect(new Set(slip.options.map((o) => num(o.text))).size).toBe(slip.options.length);
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
    // Discriminatie on stage (14.3) and outside work (16.2) too.
    expect(abuse).toEqual(['r.l.meedoen.2.ru1', 'r.l.rechten.1.ru1', 'r.l.rechten.2.ru1', 'r.l.rechten.3.ru1', 'r.l.rechten.4.ru1', 'r.l.stage.3.ru1']);
    expect(ruleAdviceLine('r.l.rechten.3.ru1')).toBe(RULES_ABUSE);
    expect(ruleAdviceLine('r.l.loon.1.ru1')).toBe(RULES_ADVICE);
    expect(ruleAdviceLine('r.l.samen.1.ru1')).toBeUndefined();
  });

  it('dates the disclaimer', () => {
    expect(RULES_CHECKED).toBe('oktober 2026');
    // A beta first: experts still check the facts, so it never says "checked" (only "updated").
    // Its last line: the rules are those of the Netherlands (also for a learner in Belgium).
    expect(RULES_DISCLAIMER).toHaveLength(5);
    expect(RULES_DISCLAIMER[4]).toContain('Nederland');
    expect(RULES_DISCLAIMER[0]).toBe(RULES_BETA);
    expect(RULES_BETA).toContain('bètaversie');
    expect(RULES_BETA).toContain('hoi@vloertaal.nl');
    expect(RULES_DISCLAIMER[2]).toContain(RULES_CHECKED);
    expect(RULES_DISCLAIMER.join(' ')).not.toContain('Gecontroleerd');
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

  it('keeps every sentence of a lesson goal at 15 words or fewer', () => {
    const long = lessons.flatMap((l) => sentencesOf(l.goal).filter((s) => wordCount(s) > 15).map((s) => `${l.id}: ${s}`));
    expect(long).toEqual([]);
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

/**
 * "Zo zeg je het" with a recorded clip: the app plays a clip only for the whole text, and its
 * lookup forgives capitals and a closing full stop (lib/audio.ts). So a model sentence that is
 * almost a clip's text would still play the clip while the screen shows other words. Here a
 * model sentence that matches a clip loosely (letters and digits only) must be spelled exactly
 * like it: the same spaces, punctuation and capitals. All other model sentences use the phone's
 * Dutch voice.
 */
describe('rules content: model sentences and recorded clips', () => {
  const eleven = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')) as ElevenIndex;
  const clipTexts = [...new Set(eleven.voices.flatMap((v) => Object.values(v.said)))];
  const models = steps.filter((s): s is Extract<RuleStep, { kind: 'model' }> => s.kind === 'model');
  /** Only letters and digits, lower case: "Stop! Dit is niet veilig." → "stopditisnietveilig". */
  const loose = (t: string) => t.normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
  const byLoose = new Map(clipTexts.map((t) => [loose(t), t]));
  /** Model sentences that come close to a clip's text but are not spelled exactly like it. */
  const slips = (list: { id: string; nl: string }[]) =>
    list.filter((m) => byLoose.has(loose(m.nl)) && byLoose.get(loose(m.nl)) !== m.nl).map((m) => `${m.id}: "${m.nl}" ≠ "${byLoose.get(loose(m.nl))}"`);

  it('spells every model sentence with a clip exactly like the clip (3 today)', () => {
    expect(slips(models)).toEqual([]);
    const withClip = models.filter((m) => clipTexts.includes(m.nl));
    expect(withClip.map((m) => m.id)).toEqual(['r.l.veilig.1.mo1', 'r.l.veilig.2.mo1', 'r.l.digitaal.3.mo1']);
    // Each of them is recorded in every voice, so the voice a learner picks has it too.
    for (const m of withClip) for (const v of eleven.voices) expect(Object.values(v.said), `${m.id} ${v.key}`).toContain(m.nl);
  });

  it('catches a slip of a space, a punctuation mark or a capital', () => {
    const clip = 'Stop! Dit is niet veilig.';
    expect(clipTexts).toContain(clip);
    const wrong = [
      'Stop!  Dit is niet veilig.', // two spaces
      'Stop! Dit is niet veilig', // no full stop
      'Stop. Dit is niet veilig.', // another mark
      'Stop, dit is niet veilig.',
      'Stop! dit is niet veilig.', // a capital
      'Stop ! Dit is niet veilig.', // a space before the mark
      'Stop! Dit is niet veilig. ', // a space at the end
    ];
    expect(slips(wrong.map((nl, i) => ({ id: `slip${i}`, nl })))).toHaveLength(wrong.length);
    expect(slips([{ id: 'ok', nl: clip }])).toEqual([]);
  });

  it('plays the clip for those two, and the phone voice for the rest', () => {
    setRecordedIndex(eleven, null);
    for (const m of models) expect(hasClip(m.nl), m.id).toBe(clipTexts.includes(m.nl));
  });
});

/**
 * The Entree additions (docs/entree-aanvulling.md): the drawn cards add up, the voice reads the
 * card without giving the answer away, and the doc's own tally of right answers still holds.
 */
describe('rules content: the Entree additions and their drawn cards', () => {
  const ENTREE = ['r.winkel', 'r.rekenen', 'r.afronden', 'r.stage', 'r.digitaal', 'r.meedoen', 'r.duurzaam'];
  const entree = rulesUnits.filter((u) => ENTREE.includes(u.id));
  const entreeSteps = entree.flatMap((u) => u.lessons.flatMap((l) => l.steps));
  type Card = Extract<RuleStep, { kind: 'card' }>;
  const cards = steps.filter((s): s is Card => s.kind === 'card');
  const bestOf = (s: Card) => s.options.find((o) => o.best)!.text;
  /** The number in a card row ("13,40 euro" → 13.4, "1.000 euro" → 1000, "5 lagen van 8 dozen" → [5, 8]). */
  const nums = (t: string) => [...t.matchAll(/\d+(?:\.\d{3})*(?:,\d+)?/g)].map((m) => Number(m[0].replace(/\./g, '').replace(',', '.')));
  const row = (s: Card, label: string) => {
    const r = s.card.rows.find((x) => x.label === label);
    expect(r, `${s.id}: row ${label}`).toBeDefined();
    return nums(r!.value);
  };
  const time = (t: string) => { const [h, m] = t.match(/(\d{1,2})[.:](\d{2})/)!.slice(1).map(Number); return h + m / 60; };

  it('has 7 units with 19 lessons, all in the path, with the doc\'s tally (A 13, B 13, C 13; 10 true, 10 false)', () => {
    expect(entree.map((u) => u.id).sort()).toEqual([...ENTREE].sort());
    expect(entree.flatMap((u) => u.lessons)).toHaveLength(19);
    const pos: Record<string, number> = {};
    for (const s of entreeSteps) if (s.kind === 'whatdo' || s.kind === 'card') {
      const id = s.options.find((o) => o.best)!.id;
      pos[id] = (pos[id] ?? 0) + 1;
    }
    expect(pos).toEqual({ a: 13, b: 13, c: 13 });
    const tf = entreeSteps.filter((s): s is Extract<RuleStep, { kind: 'truefalse' }> => s.kind === 'truefalse');
    expect(tf.filter((s) => s.answer)).toHaveLength(10);
    expect(tf.filter((s) => !s.answer)).toHaveLength(10);
  });

  it('has the cards of units 11, 12 and 13, of every kind', () => {
    expect(cards.map((s) => s.id)).toEqual([
      'r.l.afronden.1.ca1', 'r.l.rekenen.1.ca1', 'r.l.rekenen.1.ca2', 'r.l.rekenen.2.ca1', 'r.l.rekenen.2.ca2',
      'r.l.rekenen.3.ca1', 'r.l.rekenen.3.ca2', 'r.l.winkel.3.ca1',
    ]);
    expect(new Set(cards.map((s) => s.card.type))).toEqual(new Set(['rooster', 'kassabon', 'pakbon', 'etiket', 'werkbon', 'loonstrook']));
  });

  it('marks what each card is about, and shows a worked-out row\'s answer only after Check', () => {
    for (const s of cards) {
      expect(s.card.rows.some((r) => r.hit || r.answer), s.id).toBe(true);
      for (const r of s.card.rows) if (r.answer !== undefined) {
        expect(r.value, `${s.id}: ${r.label}`).toBe('?');
        expect(r.answer, `${s.id}: the worked-out row is the best answer`).toBe(bestOf(s));
      }
      // A sum has its steps; reading a card (the werkbon) has none.
      if (s.card.type !== 'werkbon') expect(s.sum?.length, s.id).toBeGreaterThan(0);
      // At most 2 steps of sum (a line can be a check in brackets or the result).
      if (s.sum) expect(s.sum.length, s.id).toBeLessThanOrEqual(3);
    }
  });

  it('adds up: every sum\'s best answer is the value the card gives', () => {
    const card = (id: string) => cards.find((s) => s.id === id)!;
    const check: Record<string, (s: Card) => void> = {
      // Kassabon: betaald − totaal.
      'r.l.winkel.3.ca1': (s) => expect(nums(bestOf(s))[0]).toBeCloseTo(row(s, 'Betaald')[0] - row(s, 'Totaal')[0], 2),
      // Rooster: eindtijd − begintijd − pauze.
      'r.l.rekenen.1.ca1': (s) => {
        const r = (l: string) => s.card.rows.find((x) => x.label === l)!.value;
        expect(nums(bestOf(s))[0]).toBeCloseTo(time(r('Einde')) - time(r('Begin')) - row(s, 'Pauze')[0] / 60, 5);
      },
      // Weekrooster: the days added up, against the contract (in the card's sub line).
      'r.l.rekenen.1.ca2': (s) => {
        const total = s.card.rows.reduce((n, r) => n + nums(r.value)[0], 0);
        const contract = nums(s.card.sub!)[0];
        expect(bestOf(s)).toBe(total === contract ? 'Ja, dat is precies 24 uur.' : `Nee, het is ${Math.abs(total - contract)} uur te ${total > contract ? 'veel' : 'weinig'}.`);
        expect(s.sum!.join(' ')).toContain(`= ${total} uur`);
      },
      // Uren keer uurloon.
      'r.l.rekenen.2.ca1': (s) => expect(nums(bestOf(s))[0]).toBe(row(s, 'Gewerkte uren')[0] * row(s, 'Bruto per uur')[0]),
      // Procent: van elke 100.
      'r.l.rekenen.2.ca2': (s) => expect(nums(bestOf(s))[0]).toBe((row(s, 'Bruto loon')[0] * row(s, 'Vakantiegeld')[0]) / 100),
      // Pakbon: lagen keer dozen per laag, and the same as the pakbon says.
      'r.l.rekenen.3.ca1': (s) => {
        const [lagen, perLaag] = row(s, 'Op de pallet');
        expect(nums(bestOf(s))[0]).toBe(lagen * perLaag);
        expect(nums(bestOf(s))[0]).toBe(row(s, 'Aantal dozen')[0]);
      },
      // Etiket: ml per liter keer de liters in the question.
      'r.l.rekenen.3.ca2': (s) => expect(nums(bestOf(s))[0]).toBe(row(s, 'Gebruik')[0] * nums(s.question)[0]),
    };
    for (const s of cards.filter((c) => c.sum)) {
      expect(check[s.id], `${s.id} has a check`).toBeDefined();
      check[s.id](s);
      // The steps of the sum come to the best answer's number.
      expect(s.sum!.some((line) => nums(line).includes(nums(bestOf(s))[0])), s.id).toBe(true);
      // Wrong options are other numbers (typical mistakes), never the same as the best one.
      const wrong = s.options.filter((o) => !o.best).map((o) => o.text);
      expect(new Set([bestOf(s), ...wrong]).size, s.id).toBe(3);
    }
    expect(card('r.l.afronden.1.ca1').card.rows.find((r) => r.hit)!.label).toBe('Materiaal');
  });
});
