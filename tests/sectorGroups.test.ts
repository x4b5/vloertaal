import { afterEach, describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { sectorRulesUnits } from '../src/content/regels';
import {
  coursePlan, isOtherSector, isSectorGroupId, isSectorId, sectorGroups, sectorOwnUnit, sectorPriority, sectors, unitSector,
} from '../src/content/sectors';
import { planGroups, themeOf } from '../src/content/themes';
import { unitIcons } from '../src/content/unitIcons';
import { languageMeta } from '../src/i18n/all';
import { GENDERED_LANGS, uiEn } from '../src/i18n/types';
import { emptyProgress, loadProgress } from '../src/lib/progress';
import { SECTOR_PAGES, sectorPage } from '../src/lib/sectorPages';
import { TOPIC_LINKS, TOPIC_PAGES } from '../src/lib/topicPages';

/**
 * "Waar werk je?" in groups (owner's decision, 30 October 2026): a list of three kinds of work and
 * "Weet ik nog niet", then the three sectors of a group. Techniek and Garage are new sectors.
 */
describe('the sector groups', () => {
  it('cover every sector exactly once', () => {
    const all = sectorGroups.flatMap((g) => g.sectors);
    expect(all.length).toBe(sectors.length);
    expect(new Set(all).size).toBe(all.length);
    for (const s of sectors) expect(sectorGroups.filter((g) => g.sectors.includes(s.id)), s.id).toHaveLength(1);
    expect(sectorGroups.map((g) => [g.nl, g.sectors.map((id) => sectors.find((s) => s.id === id)!.nl)])).toEqual([
      ['Bouw en techniek', ['Bouw', 'Techniek', 'Garage']],
      ['Maken en verplaatsen', ['Productie', 'Logistiek', 'Tuinbouw']],
      ['Zorg en service', ['Zorg', 'Horeca', 'Schoonmaak']],
    ]);
    expect(isSectorGroupId('build')).toBe(true);
    expect(isSectorGroupId('other')).toBe(false);
  });
});

describe('the new sectors Techniek and Garage', () => {
  it('give their own units in both tracks', () => {
    expect(sectorOwnUnit('technical')).toBe('u.tech');
    expect(sectorOwnUnit('technical', 'regels')).toBe('r.techniek');
    expect(sectorOwnUnit('garage')).toBe('u.garage');
    expect(sectorOwnUnit('garage', 'regels')).toBe('r.werkplaats');
    for (const [id, s] of [['u.tech', 'technical'], ['r.techniek', 'technical'], ['u.garage', 'garage'], ['r.werkplaats', 'garage']] as const) {
      expect(unitSector(id), id).toBe(s);
    }
    expect(sectorPriority('technical').slice(0, 2)).toEqual(['u.tech', 'u.safety']);
    expect(sectorPriority('garage', 'regels').slice(0, 2)).toEqual(['r.werkplaats', 'r.veilig']);
    // Every unit they name exists.
    for (const s of sectors.filter((x) => x.id === 'technical' || x.id === 'garage')) {
      for (const id of [...s.units, ...s.focus]) expect(units.some((u) => u.id === id), id).toBe(true);
      for (const id of s.rules.units) expect(sectorRulesUnits.some((u) => u.id === id), id).toBe(true);
    }
  });

  it('put their unit in the own sector slot, and under "Andere sectoren" for the others', () => {
    for (const [sector, own] of [['technical', 'u.tech'], ['garage', 'u.garage']] as const) {
      const { main, other } = coursePlan(sector);
      expect(main[3].id).toBe('u.safety');
      expect(main[4].id, sector).toBe(own);
      expect(other.map((u) => u.id)).not.toContain(own);
      expect(main.length + other.length).toBe(units.length);
    }
    expect(coursePlan('construction').other.map((u) => u.id)).toEqual(expect.arrayContaining(['u.tech', 'u.garage']));
    expect(coursePlan('construction').main.map((u) => u.id)).not.toContain('u.tech');
    expect(isOtherSector('u.tech', 'garage')).toBe(true);
    expect(isOtherSector('u.tech', 'technical')).toBe(false);
    expect(isOtherSector('r.werkplaats', 'care')).toBe(true);
    // With no sector (or "Weet ik nog niet") the whole course, in its own order.
    expect(coursePlan('none').main).toEqual(units);
    expect(isOtherSector('u.tech', 'none')).toBe(false);
  });

  it('sit under "Jouw sector" for their sector and under "Andere sectoren" for another', () => {
    expect(themeOf('u.tech')?.id).toBe('theme.sector');
    expect(themeOf('u.garage')?.id).toBe('theme.sector');
    const own = planGroups(coursePlan('garage'));
    expect(own.find((g) => g.key === 'theme.sector')!.units.map((u) => u.id)).toEqual(['u.garage']);
    expect(own.find((g) => g.key === 'other')!.units.map((u) => u.id)).toContain('u.tech');
    const care = planGroups(coursePlan('care'));
    expect(care.find((g) => g.key === 'other')!.units.map((u) => u.id)).toEqual(expect.arrayContaining(['u.tech', 'u.garage']));
    expect(care.find((g) => g.key === 'theme.job')!.units.map((u) => u.id)).not.toContain('u.tech');
  });

  it('have a sector page, a card picture and a unit icon, like Tuinbouw', () => {
    for (const [id, path] of [['technical', '/techniek/'], ['garage', '/garage/']] as const) {
      expect(SECTOR_PAGES.find((p) => p.id === id)?.path).toBe(path);
      const html = sectorPage(id);
      expect(html).toContain('‘Bouw en techniek’');
    }
    // A sector's own topic has no topic page of its own: the lists link to its sector page.
    expect(TOPIC_PAGES.map((t) => t.unit.id)).not.toContain('u.tech');
    expect(TOPIC_PAGES.map((t) => t.unit.id)).not.toContain('u.garage');
    expect(TOPIC_LINKS.find((t) => t.unit.id === 'u.garage')?.path).toBe('/garage/');
    expect(unitIcons['u.garage']).toBe('w.garage');
    expect(unitIcons['u.tech']).toBe('w.boor');
  });
});

describe('a saved sector after the change', () => {
  const store = new Map<string, string>();
  const saveAndLoad = (sector: unknown) => {
    globalThis.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) } as Storage;
    store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, onboarded: true, sector }));
    return loadProgress().sector;
  };
  afterEach(() => store.clear());

  it('keeps every old choice, "none" as "none", and the new ones', () => {
    for (const s of ['logistics', 'construction', 'production', 'care', 'hospitality', 'cleaning', 'horticulture', 'technical', 'garage', 'none']) {
      expect(saveAndLoad(s), s).toBe(s);
    }
    expect(isSectorId('technical')).toBe(true);
    expect(isSectorId('garage')).toBe(true);
    expect(isSectorId('none')).toBe(false);
  });

  it('drops what is no sector (the old group "Iets anders" was never stored)', () => {
    expect(saveAndLoad('other')).toBeUndefined();
    expect(saveAndLoad('build')).toBeUndefined();
    expect(saveAndLoad(undefined)).toBeUndefined();
  });
});

describe('the new labels', () => {
  const KEYS = ['sectorGroupBuild', 'sectorTechnical', 'sectorGarage'] as const;
  const packs = import.meta.glob('../src/i18n/{ar,ti,fa,prs,uk,tr,pl,ro,bg,es,pt,fr,de}.ts', { eager: true, import: 'default' }) as Record<string, { code: string; ui: Record<string, unknown> }>;

  it('are in English, in Dutch and in all 13 help languages', async () => {
    const { uiNl } = await import('../src/i18n/nl');
    for (const k of KEYS) {
      expect(uiEn[k], k).toBeTruthy();
      expect((uiNl as Record<string, string>)[k], k).toBeTruthy();
    }
    expect(Object.keys(packs)).toHaveLength(13);
    expect(languageMeta).toHaveLength(13);
    for (const [file, pack] of Object.entries(packs)) {
      for (const k of KEYS) {
        const t = pack.ui[k];
        expect(t, `${file} ${k}`).toBeTruthy();
        // A real translation, not the English.
        if (typeof t === 'string') expect(t, `${file} ${k}`).not.toBe(uiEn[k]);
      }
    }
  });

  it('have an x-form in every gendered language (or no gender at all)', () => {
    for (const [file, pack] of Object.entries(packs)) {
      if (!GENDERED_LANGS.includes(pack.code as (typeof GENDERED_LANGS)[number])) continue;
      expect(pack.code, file).toBeTruthy();
      for (const k of KEYS) {
        const t = pack.ui[k];
        if (typeof t === 'string') continue; // a noun: the same for everyone
        expect(t, `${file} ${k}`).toMatchObject({ m: expect.any(String), f: expect.any(String), x: expect.any(String) });
      }
    }
  });
});
