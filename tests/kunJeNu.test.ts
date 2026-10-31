import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { CertificateScreen, certAlt } from '../src/components/Certificate';
import { Coaches } from '../src/components/Coaches';
import { courseUnits } from '../src/content/courses';
import { units } from '../src/content/curriculum';
import { KUN_REGELS, KUN_TAAL, KUN_VAARDIGHEID_UI, KUN_VERTAALD, kunAantal, kunGlossIds, kunJeNu, pastBij } from '../src/content/kunJeNu';
import { proSections } from '../src/content/pro';
import { THEME_UNITS, THEMES } from '../src/content/themes';
import { getHelpLanguage, helpLanguageSources, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { allForms, GENDERED_LANGS, uiEn } from '../src/i18n/types';
import { certData } from '../src/lib/certificate';
import { coachPage } from '../src/lib/coachPage';
import { kaartAlt, kaartData, kaartRows } from '../src/lib/kaart';
import { kunJeNuMarkdown } from '../src/lib/kunJeNuDoc';
import { completeLesson, emptyProgress, type Progress } from '../src/lib/progress';

/**
 * "Wat kun je nu?" (src/content/kunJeNu.ts, werkplan stap 2.6): 2 or 3 short can-do sentences per
 * topic, in the first person, each with the level and skill it fits; translated where required;
 * on the certificate screen, the certificate (when it fits), the coach card and the coaches' page.
 */
beforeAll(() => registerPack(nlPack));

const ALL = [...KUN_TAAL, ...KUN_REGELS];
const words = (s: string) => s.replace(/["“”„]/g, '').split(/\s+/).filter(Boolean).length;
const textOf = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');

describe('every topic has 2 or 3 sentences', () => {
  it('every topic of the language course (with a certificate), with its own title', () => {
    expect(KUN_TAAL.map((o) => o.unit).sort()).toEqual(units.map((u) => u.id).sort());
    for (const u of units) expect(KUN_TAAL.find((o) => o.unit === u.id)!.titel, u.id).toBe(u.titleNl);
  });

  it('every topic of Werkregels, with its own title', () => {
    const rules = courseUnits('regels');
    expect(rules.length).toBeGreaterThan(20);
    expect(KUN_REGELS.map((o) => o.unit).sort()).toEqual(rules.map((u) => u.id).sort());
    for (const u of rules) expect(KUN_REGELS.find((o) => o.unit === u.id)!.titel, u.id).toBe(u.titleNl);
  });

  it('2 or 3 per topic, unique ids', () => {
    for (const o of ALL) {
      expect(o.zinnen.length, o.unit).toBeGreaterThanOrEqual(2);
      expect(o.zinnen.length, o.unit).toBeLessThanOrEqual(3);
    }
    const ids = ALL.flatMap((o) => o.zinnen.map((z) => z.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(kunJeNu('u.time')).toHaveLength(2);
    expect(kunJeNu('rg.zl.u')).toEqual([]);
  });
});

describe('every sentence: a level and a skill it fits', () => {
  it('Taal: A1 or A2; Werkregels: 1F; a skill of five', () => {
    const skills = ['luisteren', 'spreken', 'lezen', 'schrijven', 'gesprekken'];
    for (const z of KUN_TAAL.flatMap((o) => o.zinnen)) {
      expect(['A1', 'A2'], z.id).toContain(z.niveau);
      expect(skills, z.id).toContain(z.vaardigheid);
    }
    for (const z of KUN_REGELS.flatMap((o) => o.zinnen)) {
      expect(z.niveau, z.id).toBe('1F');
      expect(skills, z.id).toContain(z.vaardigheid);
    }
  });

  it('says "past bij", never that it is official', () => {
    expect(pastBij({ niveau: 'A2', vaardigheid: 'spreken' })).toBe('past bij A2 · spreken');
    for (const z of ALL.flatMap((o) => o.zinnen)) expect(z.nl.toLowerCase(), z.id).not.toMatch(/officieel|erkend|diploma a2/);
    const pro = proSections.find((s) => s.id === 'p.kunjenu')!;
    expect(pro.body.join(' ')).toContain('geen officieel niveau');
    expect(pro.body.join(' ')).toContain('NT2-docent');
  });
});

describe('the sentences: first person, short', () => {
  it('start with "Ik kan", end with a full stop, at most 10 words', () => {
    for (const z of ALL.flatMap((o) => o.zinnen)) {
      expect(z.nl, z.id).toMatch(/^Ik kan /);
      expect(z.nl, z.id).toMatch(/\.$/);
      expect(words(z.nl), z.nl).toBeLessThanOrEqual(10);
    }
  });

  it('Taal has an English sentence ("I can"); Werkregels is Dutch only', () => {
    for (const z of KUN_TAAL.flatMap((o) => o.zinnen)) expect(z.en, z.id).toMatch(/^I can .+\.$/);
    for (const z of KUN_REGELS.flatMap((o) => o.zinnen)) expect(z.en, z.id).toBeUndefined();
  });
});

describe('translations where required', () => {
  const required = kunGlossIds();

  it('all eight themes are required: every sentence of Taal', () => {
    expect(KUN_VERTAALD).toEqual(THEMES.map((t) => t.id));
    const ids = new Set(KUN_VERTAALD.flatMap((t) => THEME_UNITS[t].taal));
    expect(KUN_TAAL.every((o) => ids.has(o.unit)), 'every topic of Taal is in a theme').toBe(true);
    expect(required).toEqual(KUN_TAAL.flatMap((o) => o.zinnen.map((z) => z.id)));
    expect(required.length).toBeGreaterThan(80);
  });

  it('13 help languages: every required sentence and the screen texts (with the five skills), nothing else', () => {
    expect(helpLanguageSources).toHaveLength(13);
    for (const lang of helpLanguageSources) {
      for (const id of required) {
        const forms = allForms(lang.gloss[id]);
        expect(forms.length, `${lang.code} ${id}`).toBeGreaterThan(0);
        for (const f of forms) expect(f.trim(), `${lang.code} ${id}`).toBeTruthy();
      }
      const extra = Object.keys(lang.gloss).filter((id) => id.startsWith('kjn.') && !required.includes(id));
      expect(extra, lang.code).toEqual([]);
      for (const key of ['kunJeNu', 'kunNote', 'coachCanDo', ...Object.values(KUN_VAARDIGHEID_UI)] as const) expect(allForms(lang.ui[key]).length, `${lang.code} ${key}`).toBeGreaterThan(0);
    }
  });

  it('a gendered sentence has an x form in every gendered language', () => {
    for (const lang of helpLanguageSources.filter((l) => GENDERED_LANGS.includes(l.code as never))) {
      for (const id of required) {
        const t = lang.gloss[id];
        if (t && typeof t !== 'string') expect(t.x, `${lang.code} ${id}`).toBeTruthy();
      }
    }
    expect(getHelpLanguage('ro', 'x')!.gloss['kjn.u.time.2']).toBe('Pot să spun că sunt bolnav / bolnavă.');
    expect(getHelpLanguage('ro', 'f')!.gloss['kjn.u.time.2']).toBe('Pot să spun că sunt bolnavă.');
  });

  it('the English and Dutch screen texts', () => {
    expect(uiEn.kunJeNu).toBe('What can you do now?');
    expect(getHelpLanguage('nl')!.ui.kunJeNu).toBe('Wat kun je nu?');
  });
});

describe('where it shows', () => {
  const unit = units.find((u) => u.id === 'u.time')!;

  it('the certificate screen: the heading, each sentence in Dutch and in the help language, and what it fits', () => {
    // The name page shows first when no name was ever asked: a name is kept (a stub of the storage).
    const g = globalThis as { localStorage?: unknown };
    const before = g.localStorage;
    g.localStorage = { getItem: () => 'Ali', setItem: () => {}, removeItem: () => {} };
    let html = '';
    try {
      html = renderToStaticMarkup(createElement(CertificateScreen, { unit, day: '2026-10-08', lang: getHelpLanguage('pl'), onBack: () => {} }));
    } finally {
      g.localStorage = before;
    }
    const text = textOf(html);
    expect(text).not.toContain('Je naam op het certificaat?');
    expect(text).toContain('Wat kun je nu?');
    expect(text).toContain('Ik kan zeggen dat ik ziek ben.');
    expect(text).toContain('Umiem powiedzieć, że choruję.');
    expect(text).toContain('past bij A1 · spreken (mówienie)');
  });

  it('the skill "schrijven": on the writing lessons, with its name in the help language', () => {
    expect(kunJeNu('u.contact').find((z) => z.id === 'kjn.u.contact.3')?.vaardigheid).toBe('schrijven');
    expect(kunJeNu('r.schrijven').every((z) => z.vaardigheid === 'schrijven')).toBe(true);
    expect(uiEn[KUN_VAARDIGHEID_UI.schrijven]).toBe('writing');
    expect(getHelpLanguage('pl')!.ui[KUN_VAARDIGHEID_UI.schrijven]).toBe('pisanie');
    expect(getHelpLanguage('nl')!.ui[KUN_VAARDIGHEID_UI.schrijven]).toBe('schrijven');
  });

  it('the certificate itself: the lines in its text alternative only when they are on it', () => {
    const d = certData(unit, '2026-10-08', 'Ali', undefined);
    expect(certAlt(d)).not.toContain('Wat kun je nu?');
    expect(certAlt({ ...d, kun: kunJeNu(unit.id).map((z) => z.nl) })).toContain('Wat kun je nu? Ik kan zeggen hoe laat mijn dienst begint.');
  });

  it('the coach card: the number of sentences of the finished topics, and one example', () => {
    const done = (p: Progress, i: number) => units[i].lessons.reduce((q, l) => completeLesson(q, l.id, 1, false, new Date(2026, 9, 20 + i, 12)), p);
    const p = done(done({ ...emptyProgress, onboarded: true }, 0), 1);
    const d = kaartData(p, '', new Date(2026, 9, 30, 12));
    expect(d.kunZinnen).toBe(kunAantal([units[0].id, units[1].id]));
    const row = kaartRows(d).find((r) => r.label === 'Wat kun je nu?')!;
    expect(row.value).toBe(`${d.kunZinnen} zinnen “Ik kan …”`);
    expect(row.more![0]).toContain(kunJeNu(units[1].id)[0].nl);
    expect(kaartAlt(d)).toContain('Wat kun je nu?');
    // Nothing finished: no line.
    expect(kaartRows(kaartData(emptyProgress, '', new Date(2026, 9, 30, 12))).some((r) => r.label === 'Wat kun je nu?')).toBe(false);
  });

  it('the coaches’ page, in the app and on the site: a table, topic | sentences | fits', () => {
    const app = textOf(renderToStaticMarkup(createElement(Coaches, { onBack: () => {} })));
    const site = textOf(coachPage());
    for (const text of [app, site]) {
      expect(text).toContain('OnderwerpZinnenPast bij');
      expect(text).toContain('Ik kan mijn loonstrook lezen en checken.');
      expect(text).toContain('1F · lezen');
      expect(text).toContain('Ik kan zeggen dat ik ziek ben.');
    }
  });

  it('docs/kun-je-nu.md is made from the same sentences (npm run kunjenu)', () => {
    const doc = readFileSync(new URL('../docs/kun-je-nu.md', import.meta.url), 'utf8');
    expect(doc).toBe(kunJeNuMarkdown());
    for (const z of ALL.flatMap((o) => o.zinnen)) expect(doc).toContain(z.nl);
  });
});
