import './regionLoaded';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TipCard } from '../src/components/Exercises';
import { RuleCard } from '../src/components/RuleSteps';
import { RulesDisclaimer, RulesHelp, RulesNoticeScreen } from '../src/components/RulesHelp';
import { WordsHub } from '../src/components/Screens';
import { cultureTips } from '../src/content/culture';
import { LAW_STALE_DAYS, lawCheckAge, lawCheckMonth, lawCheckStale } from '../src/content/lawAge';
import { ruleAdviceLine, RULES_CHECKED, RULES_STALE, RULES_STALE_BE, ruleStaleLine } from '../src/content/regels/disclaimer';
import { HELP_ROWS, HELP_ROWS_BE, withSite } from '../src/content/regels/help';
import { allRegionTips } from '../src/content/regio';
import { setRulesCountry } from '../src/content/rulesCourse';
import { beTaalTips, taalBeActive } from '../src/content/taalBe';
import { setBeTaal } from '../src/content/taalBe/live';
import { LAW_CHECKED } from '../src/content/updates';
import { ABUSE_LINE, ADVICE_LINE } from '../src/content/work';
import { getHelpLanguage, registerPack, ui } from '../src/i18n';
import { helpLanguages } from '../src/i18n/all';
import { BE_ABUSE_LINE, BE_ADVICE_LINE, rightsTipCountry, rightsTipNotes } from '../src/lib/tipText';
import nlPack from '../src/i18n/packs/nl';
import plPack from '../src/i18n/packs/pl';

/**
 * Fase 4 (4 November 2026): the information about rights stays honest when nobody updates it.
 */
describe('a 0800 number has a second way: the official site', () => {
  it('every 0800 row, in the Netherlands and in Belgium, shows a site after its number', () => {
    const free = [...HELP_ROWS, ...HELP_ROWS_BE].filter((r) => r.href?.startsWith('tel:0800'));
    expect(free.map((r) => r.id).sort()).toEqual(['h.arbeidsinspectie', 'h.be.unia', 'h.csg', 'h.geldfit', 'h.juridischloket', 'h.meldmisdaad', 'h.veiligthuis']);
    for (const r of free) expect(r.show, r.id).toMatch(/^0800[\d -]+ · [a-z]+\.(nl|be)$/);
    const byId = Object.fromEntries([...HELP_ROWS, ...HELP_ROWS_BE].map((r) => [r.id, r]));
    expect(byId['h.juridischloket'].show).toBe('0800-8020 · juridischloket.nl');
    expect(byId['h.arbeidsinspectie'].show).toBe('0800-5151 · nlarbeidsinspectie.nl');
    expect(byId['h.veiligthuis'].show).toBe('0800-2000 · veiligthuis.nl');
    expect(byId['h.csg'].show).toBe('0800-0188 · centrumseksueelgeweld.nl');
    expect(byId['h.meldmisdaad'].show).toBe('0800-7000 · meldmisdaadanoniem.nl');
    expect(byId['h.geldfit'].show).toBe('0800-8115 · geldfit.nl');
    expect(byId['h.be.unia'].show).toBe('0800 12 800 · unia.be');
    // The tap still calls the number (one tap per row).
    expect(byId['h.juridischloket'].href).toBe('tel:08008020');
    expect(withSite('0800-1', 'x.nl')).toBe('0800-1 · x.nl');
  });

  it('the site is in the row on both Hulp tabs, as text: still one link per row', () => {
    registerPack(nlPack);
    const rules = renderToStaticMarkup(createElement(RulesHelp, { lang: getHelpLanguage('nl'), onShelf: () => {} }));
    expect(rules).toContain('0800-7000 · meldmisdaadanoniem.nl');
    expect(rules).not.toContain('href="https://www.meldmisdaadanoniem.nl"');
    registerPack(plPack);
    const taal = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(taal).toContain('0800-8020 · juridischloket.nl');
    expect(taal).toContain('0800-2000 · veiligthuis.nl');
    expect(taal.match(/class="rh-card rh-link"/g)).toHaveLength(5);
  });
});

describe('docs/juridische-check.md has every Taal tip with a legal closing line', () => {
  const doc = readFileSync('docs/juridische-check.md', 'utf8');
  const legal = cultureTips.flatMap((t) => {
    const end = [ADVICE_LINE, ABUSE_LINE].find((l) => t.body.endsWith(l));
    return end ? [{ t, end }] : [];
  });

  it('32 tips end with the advice or the abuse line (30 of the work units, c.accident and c.sick)', () => {
    // 32 (5 November 2026): c.backtowork, "Back to work after illness" (unit Ziekte).
    expect(legal).toHaveLength(32);
    for (const id of ['c.permit', 'c.kids', 'c.jobends', 'c.harvest', 'c.greensafe', 'c.workshop', 'c.power', 'c.carjob', 'c.backtowork']) expect(legal.map(({ t }) => t.id)).toContain(id);
  });

  it('each one has its own section, with the English text and the closing line as in the app', () => {
    for (const { t, end } of legal) {
      const start = doc.indexOf(`### ${t.id} — `);
      expect(start, t.id).toBeGreaterThan(-1);
      const section = doc.slice(start, doc.indexOf('\n---\n', start));
      expect(section, t.id).toContain(`> ${t.body.slice(0, -end.length).trim()}\n`);
      expect([`> *${end}*`, `> *Slotregel:* ${end}`].some((line) => section.includes(line)), t.id).toBe(true);
      expect(section, t.id).toContain(`„${t.phrase.nl}”`);
      expect(section, t.id).toContain('**Samenvatting (NL):**');
      expect(section, t.id).toContain('**Oordeel deskundige:**');
    }
  });
});

/** A day `days` after the last law check (LAW_CHECKED), at noon on the phone's own clock. */
const afterCheck = (days: number): Date => {
  const [y, m, d] = LAW_CHECKED.split('-').map(Number);
  return new Date(y, m - 1, d + days, 12);
};
/** Runs with the phone's clock set to `days` after the law check (a shifted date). */
function at<T>(days: number, run: () => T): T {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(afterCheck(days));
  try { return run(); } finally { vi.useRealTimers(); }
}

describe('the law check gets old: the app says it itself after 90 days', () => {
  it('counts the days from LAW_CHECKED and is stale from day 91', () => {
    expect(LAW_STALE_DAYS).toBe(90);
    expect(lawCheckAge(new Date(2027, 0, 29, 23, 59), '2026-10-31')).toBe(90);
    expect(lawCheckStale(new Date(2027, 0, 29, 23, 59), '2026-10-31')).toBe(false);
    expect(lawCheckStale(new Date(2027, 0, 30, 0, 1), '2026-10-31')).toBe(true);
    expect(lawCheckStale(afterCheck(0))).toBe(false);
    expect(lawCheckStale(afterCheck(90))).toBe(false);
    expect(lawCheckStale(afterCheck(91))).toBe(true);
    // With the phone's own clock (a shifted date).
    expect(at(10, () => lawCheckStale())).toBe(false);
    expect(at(100, () => lawCheckStale())).toBe(true);
    expect(lawCheckMonth('nl-NL', '2026-10-31')).toBe('oktober 2026');
    expect(lawCheckMonth('en-GB', '2026-10-31')).toBe('October 2026');
  });

  it('Werkregels: one line in the disclaimer card, the first notice and under every written rule, only when stale', () => {
    registerPack(nlPack);
    const nl = getHelpLanguage('nl');
    expect(RULES_STALE).toBe(`Deze uitleg is van ${RULES_CHECKED}. Kijk voor de laatste regels bij het Juridisch Loket of Work in NL.`);
    // The same words as the Dutch UI text (src/i18n/nl.ts).
    expect(ui('lawStale', nl).help!.replace('{month}', RULES_CHECKED)).toBe(RULES_STALE);
    expect(ui('lawStaleBe', nl).help!.replace('{month}', RULES_CHECKED)).toBe(RULES_STALE_BE);
    expect(RULES_STALE_BE).toContain('justitiehuis');
    const help = () => renderToStaticMarkup(createElement(RulesHelp, { lang: nl, onShelf: () => {} }));
    const notice = () => renderToStaticMarkup(createElement(RulesNoticeScreen, { onDone: () => {} }));
    const disclaimerBe = () => renderToStaticMarkup(createElement(RulesDisclaimer, { be: true }));
    expect(at(10, help)).not.toContain(RULES_STALE);
    expect(at(10, notice)).not.toContain(RULES_STALE);
    expect(at(100, help)).toContain(RULES_STALE);
    expect(at(100, help)).toContain(`Bijgewerkt: ${RULES_CHECKED}.`);
    expect(at(100, notice)).toContain(RULES_STALE);
    expect(at(100, disclaimerBe)).toContain(RULES_STALE_BE);
    // Under a written rule, after its advice line; not without an advice line (a custom).
    expect(at(10, () => ruleStaleLine('r.l.loon.1.ru1'))).toBeUndefined();
    expect(at(100, () => ruleStaleLine('r.l.loon.1.ru1'))).toBe(RULES_STALE);
    expect(at(100, () => ruleStaleLine('r.l.nothing.ru1'))).toBeUndefined();
    const step = { kind: 'rule', id: 'r.l.loon.1.ru1', rule: 'geschreven', emoji: '💶', title: 'Loon', body: ['Een regel.'] };
    const card = () => renderToStaticMarkup(createElement(RuleCard, { ex: { kind: 'rule', step }, lang: nl, locked: false, onAnswer: () => {} } as never));
    expect(at(10, card)).not.toContain('Deze uitleg is van');
    const old = at(100, card);
    expect(old).toContain(RULES_STALE);
    expect(old.indexOf(RULES_STALE)).toBeGreaterThan(old.indexOf(ruleAdviceLine('r.l.loon.1.ru1')!));
  });

  it('Taal: a tip about rights says it in the help language, with the month in that language', () => {
    registerPack(plPack);
    const pl = getHelpLanguage('pl');
    const tip = cultureTips.find((t) => t.id === 'c.harvest')!;
    expect(at(10, () => rightsTipNotes(tip, pl)).stale).toBeUndefined();
    const stale = at(100, () => rightsTipNotes(tip, pl)).stale!;
    expect(stale.en).toBe(`This explanation is from ${lawCheckMonth('en-GB')}. For the latest rules, check the Juridisch Loket or Work in NL.`);
    expect(stale.help).toBe(`Data tego wyjaśnienia: ${lawCheckMonth('pl')}. Najnowsze zasady sprawdź w Juridisch Loket albo w Work in NL.`);
    // Every help language has the line, with its own month.
    for (const lang of helpLanguages) {
      const s = at(100, () => rightsTipNotes(tip, lang)).stale!;
      expect(s.help, lang.code).toBeTruthy();
      expect(s.help, lang.code).not.toContain('{month}');
      expect(s.help, lang.code).toContain('Juridisch Loket');
      expect(s.help, lang.code).toContain('Work in NL');
    }
  });

  it('Taal: the lesson tip shows the line in view once stale, and "not checked" behind its ⓘ', () => {
    registerPack(plPack);
    const pl = getHelpLanguage('pl');
    const notChecked = ui('tipsNotChecked', pl).help!;
    const card = (id: string) => () => renderToStaticMarkup(createElement(TipCard, { ex: { kind: 'tip', tip: cultureTips.find((t) => t.id === id)! }, lang: pl, onAnswer: () => {}, locked: false } as never));
    const fresh = at(10, card('c.contract'));
    expect(fresh).not.toContain('tip-law-stale');
    // Inside the ⓘ (a <details>), after who can help.
    const details = fresh.slice(fresh.indexOf('<details'), fresh.indexOf('</details>'));
    expect(details).toContain(notChecked);
    expect(details.indexOf('Juridisch Loket')).toBeLessThan(details.indexOf(notChecked));
    const old = at(100, card('c.contract'));
    expect(old).toContain('tip-law-stale');
    expect(old).toContain(`Data tego wyjaśnienia: ${lawCheckMonth('pl')}.`);
    // In view: before the ⓘ, not inside it. Nothing more to tap.
    expect(old.indexOf('tip-law-stale')).toBeLessThan(old.indexOf('<details'));
    expect((old.match(/<button|<a |<summary/g) ?? []).length).toBe((fresh.match(/<button|<a |<summary/g) ?? []).length);
    // A tip that is not about rights gets neither line.
    const plain = at(100, card('c.je'));
    expect(plain).not.toContain('tip-law-stale');
    expect(plain).not.toContain(notChecked);
  });
});

describe('a Taal tip "about rights": one with a legal closing line', () => {
  afterEach(() => {
    setRulesCountry('nl');
    setBeTaal(null);
  });

  it('is each of the 32 tips with the advice or abuse line, a region tip with one, and no other', () => {
    const rights = cultureTips.filter((t) => rightsTipCountry(t) === 'nl').map((t) => t.id);
    // 32 (5 November 2026): with c.backtowork.
    expect(rights).toHaveLength(32);
    expect(rights).toEqual(expect.arrayContaining(['c.accident', 'c.sick', 'c.permit', 'c.harvest', 'c.carjob', 'c.gethelp']));
    // House rules ("ask your supervisor") and social norms (no line) are not about rights.
    for (const id of ['c.je', 'c.smoking', 'c.clock', 'c.respect']) expect(rightsTipCountry(cultureTips.find((t) => t.id === id)!), id).toBeNull();
    for (const t of cultureTips) expect(rightsTipCountry(t) !== null, t.id).toBe(t.body.endsWith(ADVICE_LINE) || t.body.endsWith(ABUSE_LINE));
    const region = allRegionTips().filter((t) => t.body.endsWith(ADVICE_LINE));
    expect(region.length).toBeGreaterThan(0);
    for (const t of region) expect(rightsTipCountry(t), t.id).toBe('nl');
    // Every one of them says "not checked by an expert yet" (none did before).
    for (const t of cultureTips.filter((x) => rightsTipCountry(x))) expect(rightsTipNotes(t).notChecked?.en, t.id).toBe('An expert has not checked this explanation yet.');
    expect(rightsTipNotes(cultureTips.find((t) => t.id === 'c.je')!)).toEqual({});
  });

  it('in Belgium: the Belgian places; a Belgian tip keeps its own beta note instead of "not checked"', () => {
    setRulesCountry('be');
    setBeTaal(true);
    expect(taalBeActive()).toBe(true);
    // A Dutch tip with the Belgian closing line.
    const dutch = cultureTips.find((t) => t.id === 'c.site')!;
    expect(rightsTipCountry(dutch)).toBe('be');
    const notes = at(100, () => rightsTipNotes(dutch));
    expect(notes.notChecked).toBeDefined();
    expect(notes.stale?.en).toContain('justitiehuis');
    expect(notes.stale?.en).toContain('werk.belgie.be');
    // A Belgian tip with a Belgian closing line.
    const be = beTaalTips.find((t) => t.body.endsWith(BE_ADVICE_LINE) || t.body.endsWith(BE_ABUSE_LINE))!;
    expect(rightsTipCountry(be)).toBe('be');
    expect(at(100, () => rightsTipNotes(be)).notChecked).toBeUndefined();
    expect(at(100, () => rightsTipNotes(be)).stale?.en).toContain('justitiehuis');
  });
});
