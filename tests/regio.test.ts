import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { SocialMap, SocialMapLink } from '../src/components/SocialMap';
import { Settings } from '../src/components/Settings';
import { WordsHub } from '../src/components/Screens';
import { allCourseUnits, findCourseUnit, registerRulesCourse, unitOfLesson } from '../src/content/courses';
import { findLesson, units } from '../src/content/curriculum';
import { tipForLesson } from '../src/content/culture';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { ASK_WHO } from '../src/content/regels/askWho';
import { ruleStepTexts, toCourseUnits } from '../src/content/regels/course';
import { regionRuleAdvice, ruleAdvice, ruleAdviceLine, RULES_BORDER, RULES_CIVIC } from '../src/content/regels/disclaimer';
import type { RuleLesson, RuleStep } from '../src/content/regels/types';
import {
  allRegionUnits, isRegionChoice, mapChecked, mapHref, REGION_SLOT, REGIONS, REGIONS_LIVE, regionIds, regionUnits, setRegionsOn, SOCIAL_CATEGORIES,
} from '../src/content/regio';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';
import { zlRegelsUnit } from '../src/content/regio/zuid-limburg-regels';
import { zlSocialMap, zlTaalTips, zlTaalUnit, zuidLimburg } from '../src/content/regio/zuid-limburg';
import { coursePlan, sectors, type SectorChoice } from '../src/content/sectors';
import { themeOf } from '../src/content/themes';
import { RULES_STUB } from '../src/dev/rulesStub';
import { getHelpLanguage, helpLanguages, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { earnCertificates, earnedCertificates, hasCertificate, unitIndex, unitJustDone } from '../src/lib/certificate';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { currentBlock, routeOrder } from '../src/lib/route';
import { settingsRows, SETTINGS_PARENT } from '../src/lib/settingsMenu';
import { trackOfId, type Track } from '../src/lib/track';

/**
 * The regional module Zuid-Limburg (docs/regio-zuid-limburg.md): the region switches its own
 * units on for the learner's track, changes nothing for anyone else, never earns a certificate;
 * its content follows the course's rules; and the Sociale kaart is kept up to date.
 */

const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const ids = (list: { id: string }[]) => list.map((u) => u.id);
const rec = { best: 1, times: 1 };
const SECTORS: (SectorChoice | undefined)[] = [undefined, 'none', ...sectors.map((s) => s.id)];
const TRACKS: Track[] = ['taal', 'regels'];

beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
});
afterAll(() => registerRulesCourse(toCourseUnits(RULES_STUB)));
afterEach(() => setRegionsOn(null));

describe('regions: the model', () => {
  it('has Zuid-Limburg, with its ids under rg.zl.', () => {
    expect(REGIONS.map((r) => r.id)).toEqual(['zl']);
    expect(zuidLimburg.nl).toBe('Zuid-Limburg');
    expect(isRegionChoice('zl')).toBe(true);
    expect(isRegionChoice('none')).toBe(true);
    expect(isRegionChoice('zuid-limburg')).toBe(false);
    for (const id of regionIds()) expect(id, id).toMatch(/^rg\./);
    expect(zlTaalUnit.id).toBe('rg.zl.u');
    expect(zlRegelsUnit.id).toBe('rg.zl.r');
    expect(zuidLimburg.regelsUnitId).toBe(zlRegelsUnit.id);
  });

  it('counts rg.<region>.r… as the work-rules track, the rest of a region as the language track', () => {
    for (const id of ['rg.zl.r', 'rg.zl.r.l.1', 'rg.zl.r.l.4.ru2', 'r.pay', 'r.l.pay.2']) expect(trackOfId(id), id).toBe('regels');
    for (const id of ['rg.zl.u', 'rg.zl.l.1', 'rg.zl.w.grens', 'rg.zl.c.1.p', 'rg.zl.k.ggd', 'u.pay', 'l.hello']) expect(trackOfId(id), id).toBe('taal');
  });

  it('is offered in Settings only where it is on (off in production until the map is checked)', () => {
    expect(REGIONS_LIVE).toBe(false);
    const ctx = { helpLang: true, gender: true, preview: false, install: false, offline: false };
    expect(settingsRows('me', ctx)).not.toContain('region');
    expect(settingsRows('me', { ...ctx, region: true })).toEqual(['language', 'gender', 'sector', 'region', 'english', 'certificates']);
    expect(settingsRows('me', { ...ctx, rules: true, region: true })).toEqual(['language', 'sector', 'region', 'certificates']);
    expect(SETTINGS_PARENT.region).toBe('me');
  });

  it('keeps a chosen region on the phone, and drops an unknown one', async () => {
    const store = new Map<string, string>();
    (globalThis as { localStorage?: unknown }).localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
    const { loadProgress } = await import('../src/lib/progress');
    const { setRegionsOn } = await import('../src/content/regio');
    setRegionsOn(true);
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, region: 'zl' }));
    expect(loadProgress().region).toBe('zl');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, region: 'none' }));
    expect(loadProgress().region).toBe('none');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, region: 'atlantis' }));
    expect(loadProgress().region).toBeUndefined();
    // While regions are not offered, a saved region is dropped (no region unit or map stays behind).
    setRegionsOn(false);
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, region: 'zl' }));
    expect(loadProgress().region).toBeUndefined();
    setRegionsOn(null);
  });
});

describe('regions: the path', () => {
  it('changes nothing without a region (or with "Andere plek")', () => {
    for (const track of TRACKS) for (const s of SECTORS) {
      expect(ids(routeOrder(s, track, undefined)), `${track} ${s}`).toEqual(ids(routeOrder(s, track)));
      expect(ids(routeOrder(s, track, 'none')), `${track} ${s}`).toEqual(ids(routeOrder(s, track)));
      expect(ids(coursePlan(s, track, 'none').main)).toEqual(ids(coursePlan(s, track).main));
    }
    expect(regionUnits(undefined, 'taal')).toEqual([]);
    expect(regionUnits('none', 'regels')).toEqual([]);
  });

  it('with Zuid-Limburg: the track\'s own region unit, right after its slot, in the own course', () => {
    for (const track of TRACKS) for (const s of SECTORS) {
      const before = ids(routeOrder(s, track));
      const plan = coursePlan(s, track, 'zl');
      const own = track === 'taal' ? 'rg.zl.u' : 'rg.zl.r';
      const other = track === 'taal' ? 'rg.zl.r' : 'rg.zl.u';
      const order = ids([...plan.main, ...plan.other]);
      expect(order.filter((id) => id !== own), `${track} ${s}`).toEqual(before);
      expect(order[order.indexOf(own) - 1], `${track} ${s}`).toBe(REGION_SLOT[track]);
      expect(ids(plan.main)).toContain(own);
      expect(order).not.toContain(other);
    }
    expect(REGION_SLOT).toEqual({ taal: 'u.travel', regels: 'r.geld' });
  });

  it('a block chosen in the region stays the block, and goes when the region goes', () => {
    const p = { ...emptyProgress, onboarded: true, sector: 'none' as SectorChoice, completed: { 'l.hello': rec }, currentUnit: 'rg.zl.u' };
    expect(currentBlock({ ...p, region: 'zl' })?.id).toBe('rg.zl.u');
    expect(currentBlock({ ...p, region: 'none' })?.id).toBe('u.firstday');
    expect(currentBlock({ ...p, helpLang: 'nl', region: 'zl', currentUnit: 'rg.zl.r', completed: {} })?.id).toBe('rg.zl.r');
  });

  it('finds its lessons and tips by id, in both tracks', () => {
    expect(findLesson('rg.zl.l.1')?.unit.id).toBe('rg.zl.u');
    expect(findLesson('rg.zl.r.l.5')?.unit.id).toBe('rg.zl.r');
    expect(unitOfLesson('rg.zl.l.2')?.id).toBe('rg.zl.u');
    expect(findCourseUnit('rg.zl.r')?.lessons).toHaveLength(5);
    expect(tipForLesson('rg.zl.l.1')?.id).toBe('rg.zl.c.1');
    expect(tipForLesson('rg.zl.l.2')?.id).toBe('rg.zl.c.2');
    // Numbered in the region's path (pocket card): right after u.travel.
    const travel = units.findIndex((u) => u.id === 'u.travel');
    expect(unitIndex(zlTaalUnit, 'none')).toBe(travel + 1);
    // A unit after it, for a learner of the region: the number on their path (certificate, pocket card).
    for (const sector of ['none', 'construction'] as const) {
      const order = routeOrder(sector, 'taal', 'zl');
      expect(order.some((x) => x.id === 'rg.zl.u')).toBe(true);
      for (const u of order.filter((x) => !x.id.startsWith('rg.'))) expect(unitIndex(u, sector, 'taal', 'zl'), u.id).toBe(order.indexOf(u));
    }
  });

  it('is in the theme "Leven in Nederland", in both tracks', () => {
    expect(themeOf('rg.zl.u')?.id).toBe('theme.life');
    expect(themeOf('rg.zl.r')?.id).toBe('theme.life');
  });

  it('never gives a certificate: the certificate is the same wherever you live', () => {
    const done = Object.fromEntries([...zlTaalUnit.lessons, ...allRegionUnits('regels')[0].lessons].map((l) => [l.id, rec]));
    expect(unitJustDone({}, done, 'rg.zl.l.2')).toBeUndefined();
    expect(unitJustDone({}, done, 'rg.zl.r.l.5')).toBeUndefined();
    const p: Progress = { ...emptyProgress, completed: done, region: 'zl' };
    expect(earnCertificates(p, new Date()).certs ?? {}).toEqual({});
    expect(earnedCertificates(p)).toEqual([]);
    expect(hasCertificate('rg.zl.u')).toBe(false);
    expect(hasCertificate('u.pay')).toBe(true);
    expect(allCourseUnits().some((u) => u.id.startsWith('rg.'))).toBe(false);
  });
});

/* ---- The Werkregels unit ---- */

const lessons: RuleLesson[] = zlRegelsUnit.lessons;
const steps: RuleStep[] = lessons.flatMap((l) => l.steps);
const ABBR: Record<RuleStep['kind'], string> = { scene: 'sc', rule: 'ru', truefalse: 'tf', whatdo: 'wd', whoask: 'wa', model: 'mo', payslip: 'ps', card: 'ca' };
const GRADED = new Set<RuleStep['kind']>(['truefalse', 'whatdo', 'whoask', 'payslip', 'card']);
const shownTexts = (s: RuleStep): string[] => {
  switch (s.kind) {
    case 'scene': return s.lines;
    case 'rule': return [s.title, ...s.body];
    case 'truefalse': return [s.statement, s.why];
    case 'whatdo': return [s.situation, ...s.options.flatMap((o) => [o.text, o.feedback]), s.why];
    case 'whoask': return [s.question, ...s.options.map((o) => o.feedback), s.why];
    case 'model': return [s.context, s.nl];
    default: return [];
  }
};
const sentencesOf = (text: string) => text.split(/(?<=[.!?]"?)\s+/).filter((s) => s.trim());
const wordCount = (sentence: string) => sentence.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

describe('Werkregels: "Leven in Zuid-Limburg"', () => {
  it('has the doc\'s 5 lessons, with well-formed ids', () => {
    expect(lessons.map((l) => l.title)).toEqual([
      'Je adres en de gemeente', 'Wonen en reizen in de regio', 'Werken over de grens', 'Carnaval, dialect en collega’s', 'Hulp in de buurt: zorg, taal, geld',
    ]);
    lessons.forEach((l, k) => {
      expect(l.id).toBe(`rg.zl.r.l.${k + 1}`);
      const seen: Record<string, number> = {};
      for (const s of l.steps) {
        const n = (seen[s.kind] = (seen[s.kind] ?? 0) + 1);
        expect(s.id).toBe(`${l.id}.${ABBR[s.kind]}${n}`);
      }
    });
    const all = [...lessons.map((l) => l.id), ...steps.map((s) => s.id)];
    expect(new Set(all).size).toBe(all.length);
  });

  it('has a scene, the rule (its "Onthoud" line), 2+ questions and a model sentence in every lesson', () => {
    for (const l of lessons) {
      expect(l.steps[0].kind, l.id).toBe('scene');
      const rule = l.steps[1] as Extract<RuleStep, { kind: 'rule' }>;
      expect(rule.kind, l.id).toBe('rule');
      expect(rule.title, l.id).toBe(l.remember);
      expect(l.steps.filter((s) => GRADED.has(s.kind)).length, l.id).toBeGreaterThanOrEqual(3);
      expect(l.steps.at(-1)!.kind, l.id).toBe('model');
      for (const s of l.steps) if (s.kind === 'scene') {
        expect(s.lines.length, s.id).toBeGreaterThanOrEqual(3);
        expect(s.lines.length, s.id).toBeLessThanOrEqual(5);
      }
    }
  });

  it('keeps the doc\'s tally: A 4, B 3, C 3; 3 true and 2 false', () => {
    const pos: Record<string, number> = {};
    for (const s of steps) if (s.kind === 'whatdo' || s.kind === 'whoask') {
      expect(s.options.filter((o) => o.best), s.id).toHaveLength(1);
      if (s.kind === 'whoask') expect(new Set(s.options.map((o) => o.who)).size, s.id).toBe(s.options.length);
      const best = s.options.find((o) => o.best)!.id;
      pos[best] = (pos[best] ?? 0) + 1;
    }
    expect(pos).toEqual({ a: 4, b: 3, c: 3 });
    const tf = steps.filter((s): s is Extract<RuleStep, { kind: 'truefalse' }> => s.kind === 'truefalse');
    expect(tf.filter((s) => s.answer)).toHaveLength(3);
    expect(tf.filter((s) => !s.answer)).toHaveLength(2);
  });

  it('sends "Waar ga je heen?" to a place of the lesson\'s help list, with the new places', () => {
    for (const l of lessons) for (const s of l.steps) if (s.kind === 'whoask') expect(l.help ?? [], s.id).toContain(s.options.find((o) => o.best)!.who);
    expect(ASK_WHO.grensinfopunt.label).toBe('Het GrensInfoPunt');
    expect(ASK_WHO.woningcorporatie.label).toBe('De woningcorporatie');
    expect(ASK_WHO.bibliotheek.label).toBeTruthy();
  });

  it('marks every written rule with its advice line (the border line for working across the border), and only those', () => {
    const rules = steps.filter((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule');
    for (const r of rules) {
      if (r.rule === 'geschreven') expect(regionRuleAdvice[r.id], r.id).toBeDefined();
      else expect(regionRuleAdvice[r.id], r.id).toBeUndefined();
      expect(ruleAdvice[r.id], `${r.id}: kept apart from the course's own list`).toBeUndefined();
    }
    for (const id of Object.keys(regionRuleAdvice)) expect(rules.some((r) => r.id === id), id).toBe(true);
    expect(ruleAdviceLine('rg.zl.r.l.3.ru1')).toBe(RULES_BORDER);
    expect(ruleAdviceLine('rg.zl.r.l.1.ru1')).toBe(RULES_CIVIC);
    expect(rules.some((r) => r.key)).toBe(false);
  });

  it('is plain Dutch: no expert marker, no editor note, no euro sign or year, short sentences', () => {
    const shown = [
      ...lessons.flatMap((l) => [l.title, l.remember].map((text) => ({ id: l.id, text }))),
      ...steps.flatMap((s) => shownTexts(s).map((text) => ({ id: s.id, text }))),
    ];
    for (const { id, text } of [...shown, ...lessons.map((l) => ({ id: l.id, text: l.goal }))]) {
      expect(text, id).not.toMatch(/⚖|redactie|€/i);
      expect(text, id).not.toMatch(/\b(2019|202\d|2030)\b/);
      expect(text, id).not.toMatch(/ {2}|\s[,?!]|\s\.(?!\.)/);
    }
    const long = shown.flatMap(({ id, text }) => sentencesOf(text).filter((s) => wordCount(s) > 16).map((s) => `${id}: ${s}`));
    expect(long).toEqual([]);
    // No address and no regional phone number in a lesson: those are in the Sociale kaart.
    for (const { id, text } of shown) expect(text, id).not.toMatch(/\b0\d{2}[- ]?\d{3}/);
  });

  it('has the dialect card in les ZL.4: an unwritten rule, no sound, only the fairly sure words', () => {
    const card = lessons[3].steps.find((s) => s.kind === 'rule' && s.dialect) as Extract<RuleStep, { kind: 'rule' }>;
    expect(card.id).toBe('rg.zl.r.l.4.ru2');
    expect(card.rule).toBe('ongeschreven');
    expect(ruleStepTexts(card)).toEqual([card.title]);
    const words = card.body.filter((l) => l.includes(' = ')).map((l) => l.split(' = ')[0]);
    expect(words).toEqual(['Goojemorge', 'Goojendaag', 'Wie is ’t mèt diech?', 'Bedaank', 'Vastelaovend']);
    for (const doubt of [/hoe geit/i, /\bdoeg\b/i, /alaaf/i, /\benne\b/i]) expect(card.body.join(' ')).not.toMatch(doubt);
    expect(steps.filter((s) => s.kind === 'rule' && s.dialect)).toHaveLength(1);
  });
});

/* ---- The language unit ---- */

describe('Taal: "Jouw regio: Zuid-Limburg"', () => {
  const words = zlTaalUnit.lessons.flatMap((l) => l.words);
  it('has 2 lessons of 6 words, 3 sentences and a chat, each with its tip', () => {
    expect(zlTaalUnit.lessons.map((l) => l.id)).toEqual(['rg.zl.l.1', 'rg.zl.l.2']);
    for (const l of zlTaalUnit.lessons) {
      expect(l.words, l.id).toHaveLength(6);
      expect(l.sentences, l.id).toHaveLength(3);
      expect(l.dialogues, l.id).toHaveLength(1);
      expect(zlTaalTips.filter((t) => t.lessonId === l.id), l.id).toHaveLength(1);
    }
    for (const t of zlTaalTips) expect(t.options.filter((o) => o.best), t.id).toHaveLength(1);
  });

  it('has its own word ids: never one of the course\'s (w.grens is "the limit" there)', () => {
    const course = new Set(units.flatMap((u) => u.lessons.flatMap((l) => l.words.map((w) => w.id))));
    for (const w of words) {
      expect(w.id, w.id).toMatch(/^rg\.zl\.w\./);
      expect(course.has(w.id), w.id).toBe(false);
    }
    expect(new Set(regionIds()).size).toBe(regionIds().length);
  });

  it('speaks standard Dutch only (no dialect for the voice)', () => {
    const lines = zlTaalUnit.lessons.flatMap((l) => [...l.words.map((w) => w.nl), ...l.sentences.map((s) => s.nl), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl])]);
    for (const t of [...lines, ...zlTaalTips.map((t) => t.phrase.nl)]) expect(t, t).not.toMatch(/goojemorge|bedaank|vastelaovend|diech/i);
  });

  it('has every text in every help language', () => {
    for (const lang of helpLanguages) for (const id of regionIds()) expect(lang.gloss[id]?.trim(), `${lang.code} ${id}`).toBeTruthy();
  });
});

/* ---- The Sociale kaart ---- */

describe('Sociale kaart Zuid-Limburg', () => {
  it('follows the doc\'s model and its rules for numbers and sites', () => {
    const keys = new Set(SOCIAL_CATEGORIES.map((c) => c.id));
    expect(new Set(zlSocialMap.map((e) => e.id)).size).toBe(zlSocialMap.length);
    for (const e of zlSocialMap) {
      expect(e.id, e.id).toMatch(/^rg\.zl\.k\.[a-z0-9]+$/);
      expect(keys.has(e.category), e.id).toBe(true);
      expect(e.checked, e.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(e.area.length, e.id).toBeGreaterThan(0);
      if (e.url) expect(e.url, e.id).toMatch(/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/[a-z0-9/]*)?$/);
      // Only a national number (0800, 088, 112) or 14 + the area code of a gemeente.
      if (e.tel) expect(e.tel, e.id).toMatch(/^(112|0800-\d{4}|088-\d{3} \d{4}|14 0\d{2})$/);
      expect(e.when, e.id).not.toMatch(/⚖/);
    }
    // Every category has a row.
    for (const c of SOCIAL_CATEGORIES) expect(zlSocialMap.some((e) => e.category === c.id), c.id).toBe(true);
  });

  it('applies the owner\'s answers (15-10-2026)', () => {
    const by = (id: string) => zlSocialMap.find((e) => e.id === id)!;
    expect(by('rg.zl.k.werkcentrum')).toMatchObject({ name: 'Werkcentrum Zuid-Limburg', url: 'https://www.werkcentrumzuidlimburg.nl', area: ['all'] });
    expect(by('rg.zl.k.thuisinlimburg')).toMatchObject({ name: 'Thuis in Limburg', category: 'wonen' });
    expect(by('rg.zl.k.refugeeteam')).toMatchObject({ area: ['mh'] });
    expect(by('rg.zl.k.refugeeteam').when).toContain('Maastricht en het Heuvelland');
    expect(by('rg.zl.k.buurtteamsheerlen').name).toBe('Buurtteams Heerlen');
    expect(by('rg.zl.k.adelante')).toMatchObject({ category: 'zorg' });
    expect(by('rg.zl.k.adelante').when).toMatch(/alleen met een verwijzing/i);
    // No corporation by name (the map sends to thuisinlimburg.nl), no "Werkplein".
    const all = zlSocialMap.map((e) => `${e.name} ${e.when}`).join(' ');
    for (const name of ['Maasvallei', 'Wonen Limburg', 'ZOwonen', 'Woonpunt', 'Servatius', 'HEEMwonen', 'Weller', 'Krijtland', 'Werkplein']) expect(all).not.toContain(name);
    // No regional number for the huisartsenposten until it is checked.
    for (const e of zlSocialMap.filter((x) => x.id.startsWith('rg.zl.k.hap'))) expect(e.tel, e.id).toBeUndefined();
  });

  it('gives each row one tap: its number, else its site, else none', () => {
    expect(mapHref({ tel: '14 045', url: 'https://www.heerlen.nl' })).toBe('tel:14045');
    expect(mapHref({ url: 'https://www.heerlen.nl' })).toBe('https://www.heerlen.nl');
    expect(mapHref({})).toBeUndefined();
  });

  it('Kijk de sociale kaart na: no row was checked longer than 7 months ago', () => {
    const now = new Date();
    const limit = new Date(now.getFullYear(), now.getMonth() - 7, now.getDate());
    const old = zlSocialMap.filter((e) => new Date(`${e.checked}T00:00:00`) < limit);
    expect(
      old.map((e) => `Kijk de sociale kaart na: ${e.name} (${e.id}) is voor het laatst gecontroleerd op ${e.checked}. Open de site, bel het nummer, en zet de nieuwe datum in src/content/regio/zuid-limburg.ts.`),
    ).toEqual([]);
  });

  it('only goes live when every row is checked on its own site', () => {
    if (REGIONS_LIVE) expect(zlSocialMap.filter((e) => e.source !== 'official').map((e) => e.id)).toEqual([]);
    else expect(zlSocialMap.some((e) => e.source === 'other')).toBe(true);
  });
});

describe('the screens', () => {
  const pl = () => getHelpLanguage('pl')!;
  const nl = () => getHelpLanguage('nl')!;

  it('the map: a list of category headers (never a button) and rows of at most one tap, dated at the top', () => {
    for (const lang of [pl(), nl()]) {
      const m = html(createElement(SocialMap, { region: zuidLimburg, lang, onBack: () => {} }));
      expect(m).toContain(`Gecontroleerd: 15 oktober 2026`);
      expect(mapChecked(zuidLimburg)).toBe('2026-10-15');
      expect(m.match(/<ul /g)).toHaveLength(1);
      for (const li of m.match(/<li class="sm-head[\s\S]*?<\/li>/g) ?? []) expect(li).not.toMatch(/<(button|a)\b/);
      expect(m.match(/<li class="sm-head/g)).toHaveLength(SOCIAL_CATEGORIES.length);
      const rows = m.match(/<li class="rh-row sm-row">[\s\S]*?<\/li>/g) ?? [];
      expect(rows).toHaveLength(zlSocialMap.length);
      for (const row of rows) expect((row.match(/<a\b/g) ?? []).length).toBeLessThanOrEqual(1);
      expect(m).toContain('href="tel:14045"');
      expect(m).toContain('href="mailto:hoi@vloertaal.nl"');
    }
    const p = html(createElement(SocialMap, { region: zuidLimburg, lang: pl(), onBack: () => {} }));
    expect(p).toContain('Przemoc domowa');
    expect(p).toContain('>Huiselijk geweld<');
    const d = html(createElement(SocialMap, { region: zuidLimburg, lang: nl(), onBack: () => {} }));
    expect(d).not.toContain('lang="en"');
    expect(d).not.toContain('Domestic violence');
  });

  it('the Hulp tab of the language track: two links at most (the tips and the map)', () => {
    const m = html(createElement(WordsHub, { lang: pl(), onTips: () => {}, after: createElement(SocialMapLink, { region: zuidLimburg, lang: pl(), onOpen: () => {} }) }));
    expect(m.match(/class="hub-card/g)).toHaveLength(2);
    expect(m).toMatch(/Sociale kaart <span class="sm-nobr">Zuid-Limburg<\/span>/);
    expect(m).toContain('Gdzie szukać pomocy');
  });

  it('Settings › "Waar woon je?": two cards, the name never translated', () => {
    setRegionsOn(true);
    const page = (lang = pl(), region?: Progress['region']) => html(createElement(Settings, {
      progress: { ...emptyProgress, onboarded: true, helpLang: lang.code, sector: 'none', region },
      lang, page: 'region', onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
      onRegion: () => {}, onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {},
      onRestore: () => {}, onCertificate: () => {},
    }));
    const m = page(pl(), 'zl');
    expect(m.match(/class="max3-card /g)).toHaveLength(2);
    expect(m).toContain('Gdzie mieszkasz?');
    expect(m).toContain('>Zuid-Limburg<');
    expect(m).toContain('Gdzie indziej / wolę nie mówić');
    expect(m).toMatch(/aria-checked="true"[^>]*>[\s\S]*?Zuid-Limburg/);
    const d = page(nl());
    expect(d).toContain('Andere plek / zeg ik liever niet');
    expect(d).not.toContain('lang="en"');
    const list = html(createElement(Settings, {
      progress: { ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', region: 'zl' },
      lang: pl(), page: 'me', onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
      onRegion: () => {}, onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {},
      onRestore: () => {}, onCertificate: () => {},
    }));
    expect(list).toContain('Waar woon je?');
    expect(list).toContain('>Zuid-Limburg<');
  });
});
