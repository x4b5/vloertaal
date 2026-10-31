import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { linkRows } from '../src/lib/linkRows';
import { PRIVACY_PATH } from '../src/lib/paths';
import { PRIVACY, PRIVACY_DATE, privacyPage } from '../src/lib/privacyPage';
import { PAGES, sitemap } from '../src/lib/sitemap';
import { aboutSection } from '../src/content/about';
import { uiNl } from '../src/i18n/nl';

const text = PRIVACY.flatMap((s) => s.paras).join(' ');

describe('the privacy statement (/privacy/)', () => {
  it('is a page in the sitemap, with its date, and linked from every plain page', () => {
    expect(PAGES).toContain(PRIVACY_PATH);
    expect(sitemap()).toContain(`<loc>https://vloertaal.nl${PRIVACY_PATH}</loc><lastmod>${PRIVACY_DATE}</lastmod>`);
    expect(linkRows()).toContain(`href="${PRIVACY_PATH}"`);
    const html = privacyPage();
    expect(html).toMatch(/<html lang="nl"/);
    expect(html).toContain('Bijgewerkt op 31 oktober 2026');
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

  it('matches what the app itself says: errors are counted too, under the same switch', () => {
    expect(aboutSection('a.free').nl.body).toContain('fout');
    expect(uiNl.countHint).toContain('fout');
    expect(readFileSync('src/lib/errors.ts', 'utf8')).toContain("from './count'");
  });
});
