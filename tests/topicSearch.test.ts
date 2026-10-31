import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { courseUnits } from '../src/content/courses';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { AllTopics } from '../src/components/Route';
import { getHelpLanguage } from '../src/i18n/all';
import { emptyProgress } from '../src/lib/progress';
import { searchKey, searchTopics } from '../src/lib/topicSearch';

const taal = () => courseUnits('taal');
const ids = (q: string, lang = getHelpLanguage('ar')) => searchTopics(taal(), q, lang).map((u) => u.id);

describe('topic search', () => {
  it('ignores capitals, accents and marks', () => {
    expect(searchKey('  Café  Één ')).toBe('cafe een');
    expect(searchKey('مَوْضُوع')).toBe('موضوع');
  });

  it('finds a topic by its Dutch name, best first', () => {
    expect(ids('veiligheid')[0]).toBe('u.safety');
    expect(ids('VEILIGHEID')[0]).toBe('u.safety');
  });

  it('finds a topic by a Dutch word it teaches', () => {
    expect(ids('helm')).toContain('u.safety');
  });

  it('finds a topic by its name in the help language', () => {
    const ar = getHelpLanguage('ar')!;
    const name = ar.gloss['u.safety'];
    expect(name).toBeTruthy();
    expect(ids(name!)).toContain('u.safety');
  });

  it('finds a topic by its English name', () => {
    expect(ids('safety first')).toContain('u.safety');
  });

  it('says nothing for a too short or unknown search', () => {
    expect(ids('')).toEqual([]);
    expect(ids('v')).toEqual([]);
    expect(ids('qqxzw')).toEqual([]);
  });

  it('lists each topic once', () => {
    const all = searchTopics([...taal(), ...taal()], 'de', getHelpLanguage('ar'));
    expect(new Set(all.map((u) => u.id)).size).toBe(all.length);
  });

  it('finds work rules too', () => {
    const rules = toCourseUnits([...rulesUnits, ...sectorRulesUnits]);
    const hits = searchTopics(rules, 'ziek');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].titleNl.toLowerCase()).toContain('ziek');
  });
});

describe('All topics with the search bar', () => {
  it('shows the search field with its label in the help language and in Dutch', () => {
    const html = renderToStaticMarkup(createElement(AllTopics, { progress: emptyProgress, lang: getHelpLanguage('pl'), onBack: () => {}, onOpen: () => {} }));
    expect(html).toContain('type="search"');
    expect(html).toContain('Szukaj tematu');
    expect(html).toContain('Zoek een onderwerp');
  });
});
