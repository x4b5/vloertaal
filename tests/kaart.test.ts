import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { CoachCardScreen } from '../src/components/Certificate';
import { courseUnits } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { getHelpLanguage, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { GENDERED_LANGS, uiEn } from '../src/i18n/types';
import { helpLanguageSources } from '../src/i18n/all';
import { KAART_NOTE, kaartAlt, kaartData, kaartRows, lessonText, practisedDays } from '../src/lib/kaart';
import { completeDaily, completeLesson, emptyProgress, parseBackup, backupFile, mergeBackup, replaceWithBackup, DAYS_KEEP, type Progress } from '../src/lib/progress';
import { settingsRows } from '../src/lib/settingsMenu';
import type { ToetsRun } from '../src/lib/toetsState';

/**
 * The coach card ("Laat zien hoe het gaat", src/lib/kaart.ts): what it shows is made from the
 * progress on this phone only, in Dutch, without a judgement.
 */

beforeAll(() => registerPack(nlPack));

const day = (d: number, m = 9) => new Date(2026, m, d, 12);
const TODAY = day(30);
const run = (dayKey: string, version: 'A' | 'B', r: [number, number, number]): ToetsRun =>
  ({ day: dayKey, version, right: { listen: r[0], words: r[1], sentences: r[2] }, of: { listen: 6, words: 6, sentences: 6 } });
const finishUnit = (p: Progress, unitIndex: number, d: number, course = units) =>
  course[unitIndex].lessons.reduce((q, l) => completeLesson(q, l.id, 1, false, day(d)), p);
const withCerts = (p: Progress, ids: [string, string][]): Progress => ({ ...p, certs: { ...p.certs, ...Object.fromEntries(ids) } });

describe('coach card: its fields', () => {
  it('a new learner: nothing done, no test, today’s date', () => {
    const d = kaartData(emptyProgress, '', TODAY);
    expect(d).toMatchObject({ name: '', track: 'taal', unitsDone: 0, lastUnits: [], days: 0, date: '30 oktober 2026' });
    expect(d.lastLesson).toBeUndefined();
    expect(d.toets).toBeUndefined();
    expect(kaartRows(d).map((r) => r.label)).toEqual(['Spoor', 'Onderwerpen af', 'Dagen geoefend', 'Laatste les']);
    expect(kaartRows(d).find((r) => r.label === 'Laatste les')!.value).toBe('nog geen');
  });

  it('counts the topics done and names the last three, the latest first', () => {
    let p = emptyProgress;
    for (const [i, d] of [[0, 3], [1, 8], [2, 15], [3, 22]] as const) p = finishUnit(p, i, d);
    p = withCerts(p, units.slice(0, 4).map((u, i) => [u.id, ['2026-10-03', '2026-10-08', '2026-10-15', '2026-10-22'][i]]));
    const d = kaartData(p, '  Amina Yusuf ', TODAY);
    expect(d.name).toBe('Amina Yusuf');
    expect(d.unitsDone).toBe(4);
    expect(d.lastUnits).toEqual([units[3].titleNl, units[2].titleNl, units[1].titleNl]);
    expect(kaartRows(d)[1]).toEqual({ label: 'Onderwerpen af', value: '4', more: [`De laatste 3: ${units[3].titleNl}, ${units[2].titleNl}, ${units[1].titleNl}`] });
  });

  it('the last lesson: the topic and its number, with the date', () => {
    const lesson = units[0].lessons[1];
    const p = completeLesson(emptyProgress, lesson.id, 1, false, day(29));
    const d = kaartData(p, '', TODAY);
    expect(d.lastLesson).toEqual({ text: `${units[0].titleNl}, les 2`, date: '29 oktober 2026' });
    expect(lessonText(units[0].lessons.at(-1)!.id)).toBe(`${units[0].titleNl}, herhaling`);
    // Today's review is not a lesson: the last lesson stays.
    expect(kaartData(completeDaily(p, 1, day(30)), '', TODAY).lastLesson?.date).toBe('29 oktober 2026');
    // A save from before lastLesson: the date only.
    const { lastLesson: _, ...old } = p;
    expect(kaartData(old as Progress, '', TODAY).lastLesson).toEqual({ text: undefined, date: '29 oktober 2026' });
  });

  it('with the test: the start and the end, X/6 per part, in Dutch', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run('2026-10-02', 'A', [2, 3, 1]), eind: run('2026-10-29', 'B', [4, 5, 4]), start: '2026-10-02', unitsAt: 0 } };
    const d = kaartData(p, '', TODAY);
    expect(d.toets?.instap?.date).toBe('2 oktober 2026');
    const row = kaartRows(d).at(-1)!;
    expect(row.label).toBe('Toets “Wat ken je al?”');
    expect(row.sub).toEqual([
      { head: 'Instap · 2 oktober 2026', text: 'Luisteren 2/6 · Woorden 3/6 · Zinnen 1/6' },
      { head: 'Eind · 29 oktober 2026', text: 'Luisteren 4/6 · Woorden 5/6 · Zinnen 4/6' },
    ]);
    expect(kaartAlt(d)).toContain('Toets “Wat ken je al?”: Instap, 2 oktober 2026: Luisteren 2/6 · Woorden 3/6 · Zinnen 1/6. Eind, 29 oktober 2026: Luisteren 4/6');
  });

  it('with only the start of the test: only that line; without the test: no test row', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run('2026-10-02', 'A', [6, 6, 6]), start: '2026-10-02' } };
    expect(kaartRows(kaartData(p, '', TODAY)).at(-1)!.sub).toEqual([{ head: 'Instap · 2 oktober 2026', text: 'Luisteren 6/6 · Woorden 6/6 · Zinnen 6/6' }]);
    // Passed over ("Later"): nothing to show.
    const skipped: Progress = { ...emptyProgress, toets: { v: 1, skipped: '2026-10-02', start: '2026-10-02' } };
    expect(kaartData(skipped, '', TODAY).toets).toBeUndefined();
  });

  it('says no judgement and no level, and ends with the note', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run('2026-10-02', 'A', [0, 1, 6]), start: '2026-10-02' } };
    const alt = kaartAlt(kaartData(finishUnit(p, 0, 29), 'Ali', TODAY));
    expect(alt).not.toMatch(/\b(goed|slecht|geslaagd|gezakt|niveau|A1|A2|B1|ERK)\b/i);
    expect(alt.endsWith(KAART_NOTE)).toBe(true);
    expect(alt).toContain('Naam: Ali.');
    expect(alt).toContain('Voortgang Vloertaal, 30 oktober 2026.');
    expect(KAART_NOTE).toBe('Gemaakt op deze telefoon. Vloertaal bewaart niets.');
  });
});

describe('coach card: days practised in the last 4 weeks', () => {
  it('counts the practised days in the last 28 days, today included, each day once', () => {
    let p = emptyProgress;
    // Lessons on the 1st of October (29 days ago: outside), twice on the 3rd, on the 10th and today.
    for (const d of [1, 1, 3, 3, 10, 30]) p = completeLesson(p, 'l.hello', 1, false, day(d));
    expect(practisedDays(p, TODAY)).toBe(3);
    // A day later the 3rd falls out of the 4 weeks.
    expect(practisedDays(p, day(31))).toBe(2);
    expect(practisedDays(p, day(29, 8))).toBe(0);
  });

  it('counts today’s review, but not rest days (a free day kept the streak)', () => {
    let p = completeDaily(emptyProgress, 1, day(20));
    p = { ...p, rest: ['2026-10-21'] };
    p = completeDaily(p, 1, day(22));
    expect(practisedDays(p, TODAY)).toBe(2);
  });

  it('a save from before the practised days were kept: the streak counted back, and the certificates’ days', () => {
    const old: Progress = { ...emptyProgress, streak: 3, lastDay: '2026-10-29', certs: { 'u.firstday': '2026-10-10' } };
    expect(practisedDays(old, TODAY)).toBe(4);
  });

  it('keeps enough practised days in the save for 4 weeks (dates only, on this phone)', () => {
    expect(DAYS_KEEP).toBeGreaterThanOrEqual(28);
    let p = emptyProgress;
    for (let d = 1; d <= 30; d++) p = completeLesson(p, 'l.hello', 1, false, day(d));
    expect(practisedDays(p, TODAY)).toBe(28);
  });

  it('the last lesson travels with a backup', () => {
    const p = completeLesson(emptyProgress, units[0].lessons[0].id, 1, false, day(29));
    const b = parseBackup(backupFile(p, TODAY))!;
    expect(b.lastLesson).toBe(units[0].lessons[0].id);
    expect(replaceWithBackup(emptyProgress, b).lastLesson).toBe(units[0].lessons[0].id);
    // Added together: the side that finished a lesson last.
    const mine = completeLesson(emptyProgress, units[1].lessons[0].id, 1, false, day(20));
    expect(mergeBackup(mine, b).lastLesson).toBe(units[0].lessons[0].id);
    expect(mergeBackup(p, parseBackup(backupFile(mine, TODAY))!).lastLesson).toBe(units[0].lessons[0].id);
  });
});

describe('coach card: Werkregels', () => {
  it('the track, its topics and its last lesson; never the test', () => {
    const rules = courseUnits('regels');
    expect(rules.length).toBeGreaterThan(1);
    let p: Progress = { ...emptyProgress, helpLang: 'nl' };
    p = finishUnit(p, 0, 20, rules);
    p = completeLesson(p, rules[1].lessons[0].id, 1, false, day(29));
    // A test done once in the language track (the learner switched): not on this card.
    p = { ...p, toets: { v: 1, instap: run('2026-10-02', 'A', [2, 3, 1]), start: '2026-10-02' } };
    const d = kaartData(p, '', TODAY);
    expect(d.track).toBe('regels');
    expect(d.unitsDone).toBe(1);
    expect(d.lastUnits).toEqual([rules[0].titleNl]);
    expect(d.lastLesson?.text).toBe(`${rules[1].titleNl}: ${rules[1].lessons[0].title}`);
    expect(d.toets).toBeUndefined();
    expect(kaartRows(d)[0].value).toBe('Werkregels (werken in Nederland)');
    expect(kaartRows(d).map((r) => r.label)).not.toContain('Toets “Wat ken je al?”');
  });

  it('the last lesson of the other track is not named on this one', () => {
    const p: Progress = { ...completeLesson(emptyProgress, units[0].lessons[0].id, 1, false, day(29)), helpLang: 'nl' };
    expect(kaartData(p, '', TODAY).lastLesson).toBeUndefined();
  });

  it('is in Settings › Taal en ik, under “Mijn certificaten”, in both tracks', () => {
    const ctx = { helpLang: true, gender: true, preview: false, install: false, offline: false };
    expect(settingsRows('me', ctx).slice(-2)).toEqual(['certificates', 'kaart']);
    expect(settingsRows('me', { ...ctx, rules: true }).slice(-2)).toEqual(['certificates', 'kaart']);
  });
});

describe('coach card: the screen', () => {
  const g = globalThis as { localStorage?: unknown };
  const before = g.localStorage;
  afterEach(() => { g.localStorage = before; });
  const named = (name: string | null) => {
    g.localStorage = { getItem: (k: string) => (k === 'vloertaal:cert-name' ? name : null), setItem: () => {}, removeItem: () => {} };
  };
  const render = (p: Progress, code: Parameters<typeof getHelpLanguage>[0]) =>
    renderToStaticMarkup(createElement(CoachCardScreen, { progress: p, lang: getHelpLanguage(code, 'f'), onBack: () => {}, today: TODAY }));

  it('has the card’s text alternative (in Dutch), the help language around it, two taps and Back', () => {
    named('Amina');
    const p: Progress = { ...emptyProgress, helpLang: 'ar', toets: { v: 1, instap: run('2026-10-02', 'A', [2, 3, 1]), start: '2026-10-02' } };
    const html = render(p, 'ar');
    expect(html).toContain(`aria-label="${kaartAlt(kaartData(p, 'Amina', TODAY)).replace(/"/g, '&quot;')}" lang="nl"`);
    expect(html).toContain('dir="rtl"');
    expect(html).toContain('lang="ar"');
    expect(html).toContain('Toets “Wat ken je al?”');
    expect(html.match(/<button\b/g)).toHaveLength(3); // Back (chrome), Bewaar of deel, Naam wijzigen
    expect(html).toContain('chrome-back');
  });

  it('Werkregels: Dutch only, without the test', () => {
    named('');
    const html = render({ ...emptyProgress, helpLang: 'nl' }, 'nl');
    expect(html).not.toContain('Wat ken je al?');
    expect(html).toContain('Laat zien hoe het gaat');
    expect(html).not.toMatch(/lang="(en|ar|pl)"/);
  });

  it('asks for the name first when it was never asked (the certificate’s name)', () => {
    named(null);
    expect(render(emptyProgress, 'pl')).toContain('Je naam op de kaart?');
  });
});

describe('coach card: the texts', () => {
  const KEYS = ['coachCard', 'coachCardIntro', 'coachCardKeep', 'coachCardWhat', 'coachTopics', 'coachDays', 'coachLast', 'coachNameAsk'] as const;
  it('are in English and in every help language', () => {
    for (const k of KEYS) expect(uiEn[k], k).toBeTruthy();
    for (const src of helpLanguageSources) for (const k of KEYS) expect(src.ui[k], `${src.code} ${k}`).toBeTruthy();
  });

  it('a gendered language has a form for “Zeg ik liever niet” (x) wherever it has m and f', () => {
    for (const src of helpLanguageSources.filter((s) => (GENDERED_LANGS as readonly string[]).includes(s.code))) {
      for (const k of KEYS) {
        const v = src.ui[k] as unknown;
        if (typeof v === 'object' && v) expect((v as { x?: string }).x, `${src.code} ${k}`).toBeTruthy();
      }
    }
    // Arabic and Tigrinya speak to the learner: m, f and x.
    for (const code of ['ar', 'ti']) {
      const src = helpLanguageSources.find((s) => s.code === code)!;
      for (const k of ['coachCard', 'coachCardIntro', 'coachNameAsk'] as const) expect(typeof src.ui[k], `${code} ${k}`).toBe('object');
    }
  });
});
