import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { RulesNoticeScreen } from '../src/components/RulesHelp';
import { CardStep, ModelLine, PayslipStep, RuleCard, RuleFeedbackBody, ruleVerdict, SAY_OPTION_WORDS, WhatDo, WhoAsk, whoSpeech } from '../src/components/RuleSteps';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { ASK_WHO } from '../src/content/regels/askWho';
import { toCourseUnits } from '../src/content/regels/course';
import { RULES_NOTICE, ruleAdviceLine } from '../src/content/regels/disclaimer';
import type { RuleStep } from '../src/content/regels/types';
import { getHelpLanguage, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';

/**
 * Werkregels, read aloud (the UX evaluation, 4 November 2026): every Dutch text block of a lesson
 * screen has one speaker, read by the phone's Dutch voice at the track's own pace (SpeakButton
 * `long`): answers that are sentences (not "300 euro"), the situation of "Zo zeg je het", the
 * advice line under a rule, the picked answer's own line, "Meer uitleg", and "Goed om te weten"
 * before the first lesson. One per block, never one per sentence, beside an answer and never in
 * its tap area; none without a Dutch voice (Dutch is never read by another voice).
 */

// Whether "the phone" has a Dutch voice.
const phone = vi.hoisted(() => ({ nl: true }));
vi.mock('../src/lib/audio', async (orig) => ({ ...(await orig<typeof import('../src/lib/audio')>()), canSay: () => phone.nl }));

beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
});
beforeEach(() => {
  phone.nl = true;
});

const html = (el: ReactElement) => renderToStaticMarkup(el);
const decode = (s: string) => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const nl = () => getHelpLanguage('nl')!;
/** The Dutch speakers of a page: their screen-reader names ("Afspelen: <text>"). */
const speakers = (m: string) => [...m.matchAll(/<button[^>]*class="speak-glyph[^"]*"[^>]*>(.*?)<\/button>/g)].map((x) => decode(x[1].replace(/<[^>]+>/g, '')));
const steps = () => courseUnits('regels').flatMap((u) => u.lessons).flatMap((l) => l.steps ?? []);
const words = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;

describe('Werkregels: every Dutch text block can be heard, one speaker per block', () => {
  const ex = <K extends RuleStep['kind']>(step: Extract<RuleStep, { kind: K }>) => ({ kind: step.kind, step }) as never;

  it('"Wat doe je?": a speaker beside every answer, reading that answer (said lines in "your" voice)', () => {
    let n = 0;
    for (const step of steps()) {
      if (step.kind !== 'whatdo') continue;
      const m = html(createElement(WhatDo, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} }));
      if (!step.options.some((o) => words(o.text) >= SAY_OPTION_WORDS || o.say)) continue;
      const names = speakers(m);
      for (const o of step.options) expect(names, step.id).toContain(`Afspelen: ${o.text}`);
      // Beside the card, never inside it.
      for (const card of m.match(/<button[^>]*class="choice [^"]*"[^>]*>.*?<\/button>/g)!) expect(card, step.id).not.toContain('speak');
      n++;
    }
    expect(n).toBeGreaterThan(100);
  });

  it('"Wie vraag je het?": a speaker per place, its name and then what it is', () => {
    expect(whoSpeech(ASK_WHO.hr)).toBe('HR of de loonadministratie. Contract, loon en vrije dagen.');
    const step = steps().find((s): s is Extract<RuleStep, { kind: 'whoask' }> => s.kind === 'whoask')!;
    const names = speakers(html(createElement(WhoAsk, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} })));
    for (const o of step.options) expect(names).toContain(`Afspelen: ${whoSpeech(ASK_WHO[o.who])}`);
  });

  it('a card or a payslip: speakers beside the answers only when they are sentences ("300 euro" has none)', () => {
    let withSay = 0;
    let without = 0;
    for (const step of steps()) {
      if (step.kind !== 'card' && step.kind !== 'payslip') continue;
      const m = step.kind === 'card'
        ? html(createElement(CardStep, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} }))
        : html(createElement(PayslipStep, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} }));
      const said = step.options.filter((o) => speakers(m).includes(`Afspelen: ${o.text}`)).length;
      const sentences = step.options.some((o) => words(o.text) >= SAY_OPTION_WORDS);
      expect(said, step.id).toBe(sentences ? step.options.length : 0);
      if (sentences) withSay++; else without++;
    }
    expect(withSay).toBeGreaterThan(0);
    expect(without).toBeGreaterThan(5);
  });

  it('"Zo zeg je het": the situation has its own speaker, beside the sentence\'s', () => {
    const step = steps().find((s): s is Extract<RuleStep, { kind: 'model' }> => s.kind === 'model')!;
    const names = speakers(html(createElement(ModelLine, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} })));
    expect(names).toEqual([`Afspelen: ${step.context}`, `Afspelen: ${step.nl}`]);
  });

  it('a written rule: the rule and its advice line, one speaker each', () => {
    const step = steps().find((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule' && s.rule === 'geschreven' && !s.dialect)!;
    const names = speakers(html(createElement(RuleCard, { ex: ex(step), lang: nl(), locked: false, onAnswer: () => {} })));
    expect(names).toEqual([`Afspelen: ${step.body.join(' ')}`, `Afspelen: ${ruleAdviceLine(step.id)}`]);
  });

  it('the feedback after another pick: the own line, the why and "Meer uitleg", one speaker each (not one per sentence)', () => {
    const step = steps().find((s): s is Extract<RuleStep, { kind: 'whatdo' }> => s.kind === 'whatdo' && Boolean(s.whyMore) && (s.whyMore?.split('. ').length ?? 0) > 1)!;
    const wrong = step.options.find((o) => !o.best)!;
    const v = ruleVerdict({ kind: 'whatdo', step }, false, wrong.id)!;
    const m = html(createElement(RuleFeedbackBody, { v, lang: nl() }));
    expect(speakers(m)).toEqual([`Afspelen: ${wrong.feedback}`, `Afspelen: ${step.why}`, `Afspelen: ${step.whyMore}`]);
    expect(m).toMatch(/<div class="info-more-body rule-fb-more-body"><p>[^<]*<\/p><button/);
    // Right: no own line, so only the why and "Meer uitleg".
    const right = html(createElement(RuleFeedbackBody, { v: ruleVerdict({ kind: 'whatdo', step }, true)!, lang: nl() }));
    expect(speakers(right)).toEqual([`Afspelen: ${step.why}`, `Afspelen: ${step.whyMore}`]);
  });

  it('"Goed om te weten" (before the first lesson): one speaker for the whole card, named after it', () => {
    const m = html(createElement(RulesNoticeScreen, { lang: nl(), onDone: () => {} }));
    expect(m.match(/class="speak-glyph/g)).toHaveLength(1);
    expect(m).toContain('aria-label="Afspelen: Goed om te weten"');
    expect(RULES_NOTICE.join(' ').length).toBeGreaterThan(150);
  });

  it('without a Dutch voice and without a recording: no speaker anywhere (Dutch is never read by another voice)', () => {
    phone.nl = false;
    for (const step of steps().slice(0, 120)) {
      const props = { ex: ex(step as never), lang: nl(), locked: false, onAnswer: () => {} };
      const el = step.kind === 'whatdo' ? createElement(WhatDo, props) : step.kind === 'whoask' ? createElement(WhoAsk, props)
        : step.kind === 'model' ? createElement(ModelLine, props) : step.kind === 'rule' ? createElement(RuleCard, props) : null;
      if (el) expect(html(el), step.id).not.toContain('class="speak-glyph');
    }
    expect(html(createElement(RulesNoticeScreen, { lang: nl(), onDone: () => {} }))).not.toContain('speak-glyph');
  });
});
