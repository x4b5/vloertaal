import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Coaches } from '../src/components/Coaches';
import { courseUnits } from '../src/content/courses';
import { taalCourseUnits } from '../src/content/curriculum';
import { KUN_REGELS, KUN_TAAL, kunOnderwerpenNu } from '../src/content/kunJeNu';
import { setBeRules } from '../src/content/regels/be/live';
import { rulesCourseUnits, setRulesCountry } from '../src/content/rulesCourse';
import { setBeTaal } from '../src/content/taalBe/live';
import { registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { kaartData } from '../src/lib/kaart';
import { completeLesson, emptyProgress, type Progress } from '../src/lib/progress';

/**
 * The coaches' page (src/components/Coaches.tsx) and the coach card (src/lib/kaart.ts) in Belgium:
 * the Belgian titles ("Meedoen in België") and sentences, not the Dutch ones; in the Netherlands
 * the Dutch ones, as before.
 */
beforeAll(() => registerPack(nlPack));

const inBelgium = () => {
  setRulesCountry('be');
  setBeTaal(true);
  setBeRules(true);
};
afterEach(() => {
  setRulesCountry('nl');
  setBeTaal(null);
  setBeRules(null);
});

const textOf = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
/** The page's topics list and its "Wat kun je nu?" tables (the Entree section is about the Netherlands anyway). */
const page = () => {
  const html = renderToStaticMarkup(createElement(Coaches, { onBack: () => {} }));
  const list = html.match(/<ul class="coach-links[\s\S]*?<\/ul>/)![0];
  const tables = html.match(/<details class="kun-details"[\s\S]*?<\/details>/g)!.join(' ');
  return textOf(`${list} ${tables}`);
};

describe('the coaches’ page follows the learner’s country', () => {
  it('in the Netherlands: the Dutch titles and sentences', () => {
    const text = page();
    expect(text).toContain('Meedoen in Nederland');
    expect(text).not.toContain('Meedoen in België');
    expect(kunOnderwerpenNu(KUN_TAAL, taalCourseUnits())).toEqual(KUN_TAAL);
    expect(kunOnderwerpenNu(KUN_REGELS, rulesCourseUnits())).toEqual(KUN_REGELS);
  });

  it('in Belgium: "Meedoen in België" in the topics and in "Wat kun je nu?", with the Flemish sentences', () => {
    inBelgium();
    const text = page();
    expect(text).toContain('Meedoen in België');
    expect(text).not.toContain('Meedoen in Nederland');
    const taal = kunOnderwerpenNu(KUN_TAAL, taalCourseUnits());
    expect(taal.find((o) => o.unit === 'be.u.society')?.titel).toBe('Meedoen in België');
    expect(taal.some((o) => o.unit === 'u.society')).toBe(false);
    // A B unit keeps its id and title, with its Flemish line.
    expect(taal.find((o) => o.unit === 'u.leave')?.zinnen[1].nl).toBe('Ik kan me ziek melden en zeggen dat ik weer kan werken.');
    expect(text).toContain('Ik kan zeggen dat mijn loonbrief niet klopt.');
    expect(text).not.toContain('Ik kan zeggen dat mijn loonstrook niet klopt.');
    // Werkregels: the Belgian units, with their own titles.
    const regels = kunOnderwerpenNu(KUN_REGELS, rulesCourseUnits());
    expect(regels.find((o) => o.unit === 'r.be.meedoen')?.titel).toBe('Meedoen in België');
    // The share link of a Belgian unit uses the Dutch id (?unit=society).
    expect(renderToStaticMarkup(createElement(Coaches, { onBack: () => {} }))).not.toContain('be.u.');
  });
});

describe('the coach card in Belgium', () => {
  it('names a finished Belgian topic by its Belgian title', () => {
    inBelgium();
    const society = courseUnits('taal').find((u) => u.id === 'be.u.society')!;
    expect(society.titleNl).toBe('Meedoen in België');
    const p: Progress = society.lessons.reduce((q, l, i) => completeLesson(q, l.id, 1, false, new Date(2026, 9, 20 + i, 12)), { ...emptyProgress, onboarded: true });
    const d = kaartData(p, '', new Date(2026, 9, 30, 12));
    expect(d.lastUnits).toEqual(['Meedoen in België']);
    expect(d.lastLesson?.text).toMatch(/^Meedoen in België/);
  });
});
