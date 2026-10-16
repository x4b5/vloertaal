import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { AllTopics, Route } from '../src/components/Route';
import { Coaches } from '../src/components/Coaches';
import { CertificatesCard } from '../src/components/Certificate';
import { registerRulesCourse } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { coursePlan, sectors, type SectorChoice } from '../src/content/sectors';
import { EMPTY_ON_PURPOSE, groupByTheme, planGroups, THEME_UNITS, THEMES, themeOf, type ThemeId } from '../src/content/themes';
import { RULES_STUB } from '../src/dev/rulesStub';
import { getHelpLanguage, helpLanguageSources, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { allForms } from '../src/i18n/types';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { routeOrder } from '../src/lib/route';
import type { Track } from '../src/lib/track';
import { REGIONS } from '../src/content/regio';

/** Every unit of both courses: the Dutch course and the real work-rules course (not the stub),
 *  with the regions' units of each track (src/content/regio: only in a region's path). */
const COURSE: Record<Track, string[]> = {
  taal: [...units.map((u) => u.id), ...REGIONS.flatMap((r) => (r.taalUnitId ? [r.taalUnitId] : []))],
  regels: [...[...rulesUnits, ...sectorRulesUnits].map((u) => u.id), ...REGIONS.flatMap((r) => (r.regelsUnitId ? [r.regelsUnitId] : []))],
};
const TRACKS: Track[] = ['taal', 'regels'];
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const done = (...unitIds: string[]) => Object.fromEntries(unitIds.flatMap((id) => [...units, ...toCourseUnits([...rulesUnits, ...sectorRulesUnits])].find((u) => u.id === id)!.lessons.map((l) => [l.id, { best: 1, times: 1 }])));

describe('themes ("hoofdstukken"): every unit in exactly one theme', () => {
  for (const track of TRACKS) {
    it(`${track}: every unit has a theme, and only one`, () => {
      const missing = COURSE[track].filter((id) => !THEMES.some((t) => THEME_UNITS[t.id][track].includes(id)));
      expect(missing.map((id) => `Zet unit ${id} in src/content/themes.ts`)).toEqual([]);
      const twice = COURSE[track].filter((id) => THEMES.filter((t) => THEME_UNITS[t.id][track].includes(id)).length > 1);
      expect(twice.map((id) => `Unit ${id} staat in meer dan één thema in src/content/themes.ts`)).toEqual([]);
      for (const id of COURSE[track]) expect(themeOf(id), id).toBeDefined();
    });

    it(`${track}: no unit in the map that the course does not have (an old or misspelled id)`, () => {
      const stale = THEMES.flatMap((t) => THEME_UNITS[t.id][track]).filter((id) => !COURSE[track].includes(id));
      expect(stale.map((id) => `Unit ${id} bestaat niet (meer): haal hem uit src/content/themes.ts`)).toEqual([]);
    });

    it(`${track}: every theme has topics (unless left empty on purpose)`, () => {
      const empty = THEMES.filter((t) => THEME_UNITS[t.id][track].length === 0 && !EMPTY_ON_PURPOSE[t.id]?.includes(track));
      expect(empty.map((t) => `${t.titleNl} is leeg in ${track}`)).toEqual([]);
    });
  }

  it('the eight themes, in the agreed order', () => {
    expect(THEMES.map((t) => `${t.emoji} ${t.titleNl}`)).toEqual([
      '👋 Starten', '🦺 Veilig werken', '💼 Werk vinden', '🗓️ Je baan', '🤝 Samenwerken', '⚖️ Je rechten', '🏠 Leven in Nederland', '🏭 Jouw sector',
    ]);
    expect(new Set(THEMES.map((t) => t.id)).size).toBe(THEMES.length);
  });

  it('every sector unit is in "Jouw sector", in both tracks', () => {
    for (const s of sectors) for (const id of [...s.units, ...s.rules.units]) expect(themeOf(id)?.id, id).toBe('theme.sector');
  });
});

describe('grouping keeps the course order inside a theme, and changes no route', () => {
  const SECTORS: (SectorChoice | undefined)[] = [undefined, 'none', ...sectors.map((s) => s.id)];
  beforeAll(() => registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits])));
  afterAll(() => registerRulesCourse(toCourseUnits(RULES_STUB)));

  it('the groups hold every unit of the plan once, themes in order, route order within each', () => {
    for (const track of TRACKS) {
      for (const sector of SECTORS) {
        const plan = coursePlan(sector, track);
        const groups = planGroups(plan);
        const flat = groups.flatMap((g) => g.units.map((u) => u.id));
        expect(flat.slice().sort(), `${track} ${sector}`).toEqual([...plan.main, ...plan.other].map((u) => u.id).sort());
        const order = routeOrder(sector, track).map((u) => u.id);
        for (const g of groups) {
          const at = g.units.map((u) => order.indexOf(u.id));
          expect(at, `${track} ${sector} ${g.key}`).toEqual([...at].sort((a, b) => a - b));
        }
        // Themes in THEMES order; the other sectors last, apart.
        const keys = groups.map((g) => g.key);
        const themeKeys = keys.filter((k) => k !== 'other');
        expect(themeKeys).toEqual(THEMES.map((t) => t.id).filter((id) => themeKeys.includes(id)));
        if (plan.other.length) expect(keys[keys.length - 1]).toBe('other');
        else expect(keys).not.toContain('other');
      }
    }
  });

  it('a unit not mapped yet is never lost: it goes to the last group', () => {
    const fake = { ...units[0], id: 'u.nieuw' };
    const groups = groupByTheme([...units, fake]);
    expect(groups[groups.length - 1].units.map((u) => u.id)).toContain('u.nieuw');
  });
});

describe('theme names in every help language', () => {
  for (const src of helpLanguageSources) {
    it(`${src.code}: every theme named, short (at most 3 words)`, () => {
      for (const t of THEMES) {
        const forms = allForms(src.gloss[t.id]);
        expect(forms.length, `${src.code} ${t.id}`).toBeGreaterThan(0);
        for (const f of forms) expect(f.trim().split(/\s+/).length, `${src.code} ${t.id}: ${f}`).toBeLessThanOrEqual(3);
      }
    });
  }
});

describe('the screens show the themes as plain headers (never a button)', () => {
  const pl = () => getHelpLanguage('pl')!;
  const progress = (extra: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', ...extra });
  const headers = (m: string) => [...m.matchAll(/<li class="theme-head[^"]*" data-theme="([^"]+)"/g)].map((x) => x[1]);
  /** No header holds a button or a link. */
  const plain = (m: string) => {
    for (const li of m.match(/<li class="theme-head[\s\S]*?<\/li>/g) ?? []) expect(li).not.toMatch(/<(button|a)\b/);
  };

  it('All topics (pl): one list, the eight headers in order with "x / y", every topic row once', () => {
    const m = html(createElement(AllTopics, { progress: progress({ completed: done('u.firstday', 'u.help') }), lang: pl(), onBack: () => {}, onOpen: () => {} }));
    expect(headers(m)).toEqual(THEMES.map((t) => t.id));
    plain(m);
    expect(m.match(/<ul /g)).toHaveLength(1);
    expect(m.match(/class="topic-row/g)).toHaveLength(units.length);
    expect(m).toContain('Pierwsze kroki');
    expect(m).toContain('aria-label="Pierwsze kroki · Starten · 2 / 3 tematy"');
    // The count is for screen readers only: no "2 / 3" under a header, no check until all are done.
    const start = m.match(/<li class="theme-head[^"]*" data-theme="theme.start"[\s\S]*?<\/li>/)![0];
    expect(start).not.toMatch(/\d+ \/ \d+<|rb-count/);
    expect(start).not.toContain('theme-check');
    // No route numbers in the rows (grouped by theme they would jump: 09, 18, 22).
    expect(m).not.toContain('topic-num');
  });

  it('All topics: a calm check once every topic of a theme is done', () => {
    const m = html(createElement(AllTopics, { progress: progress({ completed: done('u.firstday', 'u.help', 'u.tools') }), lang: pl(), onBack: () => {}, onOpen: () => {} }));
    const start = m.match(/<li class="theme-head[^"]*" data-theme="theme.start"[\s\S]*?<\/li>/)![0];
    expect(start).toContain('theme-head-done');
    expect(start).toContain('theme-check');
    expect(start).toContain('aria-label="Pierwsze kroki · Starten · 3 / 3 tematy"');
  });

  it('"Jouw sector" without a sector: only the sector topics the learner started count', () => {
    const none = (completed: Record<string, unknown>) => {
      const m = html(createElement(AllTopics, { progress: progress({ completed }), lang: pl(), onBack: () => {}, onOpen: () => {} }));
      return m.match(/<li class="theme-head[^"]*" data-theme="theme.sector"[\s\S]*?<\/li>/)![0];
    };
    expect(none({})).not.toContain('theme-check');
    expect(none({})).not.toMatch(/ 6 /);
    const one = none(done('u.warehouse'));
    expect(one).toContain('theme-check');
    expect(one).toMatch(/· 1 \/ 1 /);
    // With a sector, "Jouw sector" holds only the own topic.
    const m = html(createElement(AllTopics, { progress: progress({ sector: 'construction', completed: done('u.build') }), lang: pl(), onBack: () => {}, onOpen: () => {} }));
    expect(m.match(/<li class="theme-head[^"]*" data-theme="theme.sector"[\s\S]*?<\/li>/)![0]).toContain('theme-check');
  });

  it('All topics with a sector: "Jouw sector" holds the own unit, the other sectors stay apart', () => {
    const m = html(createElement(AllTopics, { progress: progress({ sector: 'construction' }), lang: pl(), onBack: () => {}, onOpen: () => {} }));
    expect(headers(m)).toEqual([...THEMES.map((t) => t.id), 'other']);
    expect(m).toContain('Inne branże');
  });

  it('the home: the block’s theme as a small label, no extra tappable', () => {
    const p = progress({ completed: done('u.firstday', 'u.help', 'u.tools', 'u.safety', 'u.warehouse', 'u.time'), currentUnit: 'u.pay' });
    const m = html(createElement(Route, { progress: p, lang: pl(), onStart: () => {}, onPick: () => {}, onAll: () => {} }));
    expect(m).toContain('class="rb-theme"');
    expect(m).toContain('Twoja praca');
    expect(m).toContain('Je baan');
    const label = m.match(/<p class="rb-theme"[\s\S]*?<\/p>/)![0];
    expect(label).not.toMatch(/<(button|a)\b/);
    // No count in the label: the block's own "1 / 3 lessons" is right under it.
    expect(label).not.toMatch(/\d+ \/ \d+/);
    expect(label).toContain('aria-label="Twoja praca · Je baan"');
  });

  it('the certificates: grouped by theme', () => {
    const m = html(createElement(CertificatesCard, { progress: progress({ completed: done('u.firstday', 'u.safety', 'u.pay') }), lang: pl(), onOpen: () => {} }));
    expect(headers(m)).toEqual(['theme.start', 'theme.safe', 'theme.job']);
    plain(m);
    expect(m.match(/class="cert-row"/g)).toHaveLength(3);
    // No route numbers in the rows; the date in its own left-to-right island (Arabic, Persian).
    expect(m).not.toContain('cert-row-no');
    expect(m.match(/class="cert-row-date" lang="nl"><bdi dir="ltr">/g)).toHaveLength(3);
  });

  it('the coaches page: grouped by theme, in Dutch', () => {
    const m = html(createElement(Coaches, { onBack: () => {} }));
    expect(headers(m)).toEqual(THEMES.map((t) => t.id));
    plain(m);
    expect(m.match(/class="coach-share"/g)).toHaveLength(units.length);
    for (const li of m.match(/<li class="theme-head[\s\S]*?<\/li>/g) ?? []) expect(li).not.toContain('lang="en"');
  });

  describe('the work-rules track: the same grouping, in Dutch only', () => {
    beforeAll(() => {
      registerPack(nlPack);
      registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
    });
    afterAll(() => registerRulesCourse(toCourseUnits(RULES_STUB)));
    const nlProgress = (extra: Partial<Progress> = {}) => progress({ helpLang: 'nl', ...extra });

    it('All topics: the eight headers with their Dutch names, no English', () => {
      const m = html(createElement(AllTopics, { progress: nlProgress({ completed: done('r.start') }), lang: getHelpLanguage('nl'), onBack: () => {}, onOpen: () => {} }));
      expect(headers(m)).toEqual(THEMES.map((t) => t.id));
      plain(m);
      for (const t of THEMES) expect(m).toContain(`>${t.titleNl}<`);
      expect(m).toContain('aria-label="Starten · 1 / 1 onderwerp"');
      expect(m).not.toContain('lang="en"');
      expect(m).not.toContain('Getting started');
    });

    it('the home label: the Dutch name only', () => {
      const m = html(createElement(Route, { progress: nlProgress({ completed: done('r.zoeken'), currentUnit: 'r.contract' }), lang: getHelpLanguage('nl'), onStart: () => {}, onPick: () => {}, onAll: () => {} }));
      const label = m.match(/<p class="rb-theme"[\s\S]*?<\/p>/)![0];
      expect(label).toContain('>Werk vinden<');
      expect(label).not.toMatch(/\d+ \/ \d+/);
      expect(label).not.toContain('lang="en"');
    });
  });
});

// The theme ids are typed: a typo in THEME_UNITS fails to compile.
const _typed: ThemeId[] = Object.keys(THEME_UNITS) as ThemeId[];
void _typed;
