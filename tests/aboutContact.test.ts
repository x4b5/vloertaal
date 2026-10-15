import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { aboutSections, CONTACT_EMAIL } from '../src/content/about';
import { About } from '../src/components/Screens';
import { getHelpLanguage } from '../src/i18n/all';

const HELP = ['ar', 'ti', 'fa', 'prs', 'uk', 'tr', 'pl', 'ro', 'bg'];
const LINK = `<a href="mailto:${CONTACT_EMAIL}" dir="ltr" lang="en"`;
const links = (html: string) => html.match(/<a href="mailto:/g) ?? [];

describe('About: questions or a mistake (contact)', () => {
  const contact = aboutSections.find((s) => s.id === 'a.contact')!;

  it('is the last section, with its address in English and in plain Dutch', () => {
    expect(CONTACT_EMAIL).toBe('hoi@vloertaal.nl');
    expect(aboutSections.at(-1)?.id).toBe('a.contact');
    expect(contact.emoji).toBe('✉️');
    expect(contact.title).toBe('Questions or a mistake?');
    expect(contact.body).toContain(CONTACT_EMAIL);
    expect(contact.nl.title).toBe('Vraag of fout?');
    expect(contact.nl.body).toContain(CONTACT_EMAIL);
    expect(contact.nl.body).not.toBe(contact.body);
  });

  it('has the exact address, in Latin script, in every help language (both genders)', () => {
    for (const code of HELP) {
      for (const g of ['m', 'f'] as const) {
        const lang = getHelpLanguage(code, g)!;
        expect(lang.gloss['a.contact'], `${code} ${g} title`).toBeTruthy();
        const body = lang.gloss['a.contact.b'];
        expect(typeof body, `${code} ${g}`).toBe('string');
        expect(body, `${code} ${g}`).toContain(CONTACT_EMAIL);
        // Once, so the page has one mail link.
        expect(body?.split(CONTACT_EMAIL), `${code} ${g}`).toHaveLength(2);
      }
    }
  });

  it('renders the address as one tappable mail link, left to right, in every language and in Dutch', () => {
    const pages = [
      ['en', renderToStaticMarkup(createElement(About, { dutch: false }))],
      ['nl toggle', renderToStaticMarkup(createElement(About, { lang: getHelpLanguage('ar', 'f'), dutch: true }))],
      ...HELP.map((code) => [code, renderToStaticMarkup(createElement(About, { lang: getHelpLanguage(code, 'm'), dutch: false }))]),
    ];
    for (const [name, html] of pages) {
      expect(html, name).toContain(`href="mailto:${CONTACT_EMAIL}"`);
      expect(html, name).toContain(`${LINK} style="color:inherit;font-weight:700;text-underline-offset:0.15em;white-space:nowrap">${CONTACT_EMAIL}</a>`);
      // One link: in the main line only, not again in the small English line under it.
      expect(links(html), name).toHaveLength(1);
    }
  });
});
