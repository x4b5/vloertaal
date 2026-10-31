import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { CardStep, PayslipStep, RuleFeedbackBody, ruleVerdict, WhoAsk } from '../src/components/RuleSteps';
import { digitsApart, RulesHelp, RulesNoticeScreen } from '../src/components/RulesHelp';
import { certAlt } from '../src/components/Certificate';
import { courseUnits } from '../src/content/courses';
import { ASK_WHO } from '../src/content/regels/askWho';
import { payslipCard } from '../src/content/regels/course';
import { HELP_ROWS } from '../src/content/regels/help';
import { getHelpLanguage, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { certData } from '../src/lib/certificate';

/**
 * The work-rules track with a screen reader (docs: the a11y round, WCAG 2.2 AA): every speaker has
 * a name that says what it reads, phone numbers are said digit by digit, a place to ask is read
 * with a pause between its name and what it is, and the certificate's picture says all it shows.
 */

// A phone with a Dutch voice: every speaker is on screen (in node nothing can speak).
vi.mock('../src/lib/audio', async (orig) => ({ ...(await orig<typeof import('../src/lib/audio')>()), canSay: () => true }));

beforeAll(() => registerPack(nlPack));

const nl = () => getHelpLanguage('nl')!;
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const steps = () => courseUnits('regels').flatMap((u) => u.lessons).flatMap((l) => l.steps ?? []);
const labels = (m: string) => [...m.matchAll(/aria-label="([^"]*)"/g)].map((x) => x[1]);

describe('the work-rules track with a screen reader', () => {
  it('says a phone number digit by digit, and leaves other text alone', () => {
    expect(digitsApart('0800-8020 (gratis)')).toBe('0 8 0 0, 8 0 2 0 (gratis)');
    expect(digitsApart('112')).toBe('1 1 2');
    expect(digitsApart('1733')).toBe('1 7 3 3');
    expect(digitsApart('Vakbond (FNV of CNV)')).toBe('Vakbond (FNV of CNV)');
    expect(digitsApart('uwv.nl')).toBe('uwv.nl');
  });

  it('names every tel: link with its number digit by digit, starting with the visible name', () => {
    const m = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    for (const r of HELP_ROWS.filter((x) => x.href?.startsWith('tel:'))) {
      // A number in the name ("113 Zelfmoordpreventie") is said digit by digit too.
      const label = labels(m).find((l) => l.startsWith(`${digitsApart(r.name)}: bel`));
      expect(label, r.id).toBeDefined();
      expect(label, r.id).toContain(digitsApart(r.show));
      expect(label, r.id).not.toMatch(/\d{2}/);
    }
  });

  it('reads 112 as "1 1 2" (shown as 112), and names a row speaker after its row', () => {
    const m = html(createElement(RulesHelp, { lang: nl(), onShelf: () => {} }));
    const row112 = m.slice(m.indexOf('<li class="rh-row">'), m.indexOf('</li>'));
    expect(row112).toContain('<span aria-hidden="true">112</span><span class="sr-only">1 1 2</span>');
    expect(labels(row112)).toEqual(['Afspelen: 1 1 2']);
    expect(labels(m)).toContain('Afspelen: Vertrouwenspersoon');
  });

  it('names the speaker of a drawn card after the card (its rows are read as a list, not twice)', () => {
    let n = 0;
    for (const step of steps()) {
      if (step.kind !== 'card' && step.kind !== 'payslip') continue;
      const card = step.kind === 'card' ? step.card : payslipCard(step);
      const m = step.kind === 'card'
        ? html(createElement(CardStep, { ex: { kind: 'card', step }, lang: nl(), locked: false, onAnswer: () => {} }))
        : html(createElement(PayslipStep, { ex: { kind: 'payslip', step }, lang: nl(), locked: true, onAnswer: () => {} }));
      const figure = m.slice(m.indexOf('<figure'), m.indexOf('</figure>'));
      const name = card.sub ? `${card.title}, ${card.sub}` : card.title;
      expect(figure, step.id).toContain(`aria-label="${name}"`);
      expect(labels(figure), step.id).toContain(`Afspelen: ${name}`);
      // The numbers are text in a list of terms and values, not only a picture.
      expect(figure, step.id).toMatch(/<dl class="slip-rows"><div[^>]*><dt>/);
      n++;
    }
    expect(n).toBeGreaterThan(5);
  });

  it('puts a pause between a place to ask and what it is, on the card and in the feedback', () => {
    const step = steps().find((s) => s.kind === 'whoask')!;
    if (step.kind !== 'whoask') throw new Error('no whoask');
    const m = html(createElement(WhoAsk, { ex: { kind: 'whoask', step }, lang: nl(), locked: false, onAnswer: () => {} }));
    for (const o of step.options) expect(m).toContain(`${ASK_WHO[o.who].label}</span><span class="sr-only">, </span><span class="rule-who-what">`);
    const v = ruleVerdict({ kind: 'whoask', step }, false, step.options.find((o) => !o.best)!.id)!;
    expect(html(createElement(RuleFeedbackBody, { v, lang: nl() }))).toContain('</strong><span class="sr-only">, </span><span class="rule-who-what">');
  });

  it('"Goed om te weten" has its heading ready for focus (it comes after a tap elsewhere)', () => {
    const m = html(createElement(RulesNoticeScreen, { onDone: () => {} }));
    expect(m).toContain('<h1 class="onboarding-title" tabindex="-1">Goed om te weten</h1>');
  });

  it('the certificate picture says its name, its rules and its date', () => {
    const unit = courseUnits('regels')[0];
    const d = certData(unit, '2026-10-08', 'Fatima Amrani', nl());
    const alt = certAlt(d);
    expect(alt).toContain(`Certificaat Vloertaal: ${d.titleNl}.`);
    expect(alt).toContain('Uitgereikt aan Fatima Amrani.');
    expect(alt).toContain(`Behaald op ${d.date}.`);
    for (const p of d.phrases) expect(alt).toContain(p);
    expect(alt).not.toContain(' · ');
    expect(alt).not.toMatch(/\.[.;]/);
    expect(certAlt(certData(unit, '2026-10-08', '', nl()))).not.toContain('Uitgereikt');
  });
});
