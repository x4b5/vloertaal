import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { linkRows } from '../src/lib/linkRows';
import { PRIVACY_PATH } from '../src/lib/paths';
import { PRIVACY, PRIVACY_DATE, privacyPage } from '../src/lib/privacyPage';
import { PAGES, sitemap } from '../src/lib/sitemap';
import { aboutSection } from '../src/content/about';
import { uiNl } from '../src/i18n/nl';
import { proSections } from '../src/content/pro';

const text = PRIVACY.flatMap((s) => s.paras).join(' ');

describe('the privacy statement (/privacy/)', () => {
  it('is a page in the sitemap, with its date, and linked from every plain page', () => {
    expect(PAGES).toContain(PRIVACY_PATH);
    expect(sitemap()).toContain(`<loc>https://vloertaal.nl${PRIVACY_PATH}</loc><lastmod>${PRIVACY_DATE}</lastmod>`);
    expect(linkRows()).toContain(`href="${PRIVACY_PATH}"`);
    const html = privacyPage();
    expect(html).toMatch(/<html lang="nl"/);
    expect(html).toContain('Bijgewerkt op 10 november 2026');
  });

  it('names what the code sends, and who sees it', () => {
    // src/lib/count.ts and src/lib/errors.ts: GoatCounter, lessons, the test, errors; the switch and DNT.
    for (const fact of ['GoatCounter', 'geen cookies', 'welke les', 'kwart', 'minuten', 'Niet de uitslag', 'fout', 'Anoniem meetellen', 'Do Not Track', 'Global Privacy Control', 'IP-adres']) {
      expect(text, fact).toContain(fact);
    }
    // The host, speech on the device, mail and the calendar.
    for (const fact of ['Vercel', 'zonder internet', 'je eigen e-mail', 'Google Agenda', 'Voortgang wissen', 'Autoriteit Persoonsgegevens', 'Gegevensbeschermingsautoriteit']) {
      expect(text, fact).toContain(fact);
    }
    expect(text).not.toMatch(/experts kijken|de beste|garantie/i);
  });

  it('says what “Voortgang wissen” keeps, as the reset in src/App.tsx does, and how to wipe everything', () => {
    // The reset keeps the choices and the settings: no "Alles weg?" before it (4 November 2026).
    const reset = readFileSync('src/App.tsx', 'utf8').match(/onReset=\{\(\) => \{([\s\S]*?)tab\('route'\)/)![1];
    const kept: Record<string, string> = { helpLang: 'je hulptaal', country: 'je land', sector: 'waar je werkt', region: 'je regio', gender: 'Vrouw of man?', firstDay: 'de dag waarop je begon', theme: 'je instellingen' };
    for (const [field, words] of Object.entries(kept)) {
      expect(reset, field).toMatch(new RegExp(`\\b${field}: p\\.${field}\\b`));
      expect(text, words).toContain(words);
    }
    expect(text).not.toMatch(/Alles weg\? Kies/);
    for (const fact of ['blijven staan', 'sitegegevens', 'Verwijder de app']) expect(text, fact).toContain(fact);
    // The professionals' page says it the same way.
    const pro = proSections.find((s) => s.id === 'p.privacy')!.body.join(' ');
    expect(pro).not.toContain('is alles weg');
    for (const fact of ['blijven staan', 'sitegegevens']) expect(pro, fact).toContain(fact);
  });

  it('is honest about the old address: vloertaal.vercel.app is Vercel, in the United States', () => {
    const site = PRIVACY.find((s) => s.id === 'website')!.paras.join(' ');
    for (const fact of ['vloertaal.vercel.app', 'Vercel', 'Verenigde Staten', 'IP-adres', 'Gebruik daarom vloertaal.nl']) expect(site, fact).toContain(fact);
    // The EU promise is about vloertaal.nl, and the app does not count on the old address (src/lib/count.ts).
    expect(site).toContain('De website vloertaal.nl staat bij statichost.eu');
    expect(readFileSync('src/lib/count.ts', 'utf8')).toContain('const LIVE = /^(www\\.)?vloertaal\\.nl$/;');
  });

  it('names the legal ground and the rights (AVG article 13): objection and a complaint', () => {
    const why = PRIVACY.find((s) => s.id === 'waarom')!.paras.join(' ');
    expect(why).toContain('gerechtvaardigd belang');
    expect(why).toMatch(/mail[\s\S]*zelf iets vraagt/);
    const rights = PRIVACY.find((s) => s.id === 'rechten')!.paras.join(' ');
    for (const fact of ['bezwaar', 'Anoniem meetellen', 'recht om een klacht', 'Autoriteit Persoonsgegevens', 'hoi@vloertaal.nl']) expect(rights, fact).toContain(fact);
  });

  it('matches what the app itself says: errors are counted too, under the same switch', () => {
    expect(aboutSection('a.free').nl.body).toContain('fout');
    expect(uiNl.countHint).toContain('fout');
    expect(readFileSync('src/lib/errors.ts', 'utf8')).toContain("from './count'");
  });
});
