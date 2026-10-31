import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { Coaches } from '../src/components/Coaches';
import { About } from '../src/components/Screens';
import { aboutIds, aboutSection, aboutRules, aboutSections, CONTACT_EMAIL, PRO_TITLE, siteSections } from '../src/content/about';
import { COACH_FACTS } from '../src/content/facts';
import { ENTREE_UNITS, PRO_LEAD, proSections } from '../src/content/pro';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { getHelpLanguage, helpLanguageSources, registerPack, ui } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { coachPage } from '../src/lib/coachPage';

/**
 * Over for the learner, and a page of its own for coaches, teachers, employers and organisations
 * ("Voor begeleiders en werkgevers"), in the app and on vloertaal.nl/voor-begeleiders, made from
 * one source (src/content/pro.ts). Which section is where.
 */
beforeAll(() => registerPack(nlPack));

const unescape = (html: string) => html.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
const textOf = (html: string) => unescape(html.replace(/<[^>]+>/g, ''));
const about = (code?: string, dutch = false) => renderToStaticMarkup(createElement(About, { lang: code ? getHelpLanguage(code, 'f') : undefined, dutch, onCoaches: code === 'nl' ? undefined : () => {} }));
const coaches = () => renderToStaticMarkup(createElement(Coaches, { onBack: () => {} }));

describe('the learner’s Over: short, in the learner’s language', () => {
  it('has only what a learner needs, in this order', () => {
    expect(aboutSections.map((s) => s.id)).toEqual(['a.what', 'a.story', 'a.beta', 'a.how', 'a.bram', 'a.culture', 'a.free', 'a.disclaimer', 'a.contact']);
    // The work-rules track: the same, without "Zo werkt het hier" (the track is that, all through).
    expect(aboutRules.map((s) => s.id)).toEqual(['a.what', 'a.story', 'a.beta', 'a.how', 'a.bram', 'a.free', 'a.disclaimer', 'a.contact']);
  });

  it('leaves the professionals’ sections out, in the help language and in Dutch', () => {
    for (const html of [about('pl'), about('pl', true), about('ar'), about('nl')]) {
      const text = textOf(html);
      for (const s of siteSections) {
        expect(text, s.id).not.toContain(s.nl.body);
        expect(text, s.id).not.toContain(s.nl.title);
      }
      expect(text).not.toContain('ElevenLabs.');
      expect(text).not.toContain(COACH_FACTS[0].text);
    }
    expect(textOf(about('pl'))).not.toContain(getHelpLanguage('pl', 'f').gloss['a.mission'] as string);
  });

  it('keeps one h1, the NL toggle, one button to the professionals’ page and one mail link', () => {
    const pl = about('pl');
    expect(pl.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(pl.match(/class="about-nl"/g)).toHaveLength(1);
    expect(pl.match(/<button [^>]*class="phrase-banner about-banner coach-link"/g)).toHaveLength(1);
    expect(pl.match(/href="mailto:/g)).toHaveLength(1);
    // Its Dutch name, as on that page, over the help language's.
    const button = pl.match(/<button [^>]*coach-link"[\s\S]*?<\/button>/)![0];
    expect(button).toContain(`<span class="coach-link-nl" lang="nl">${PRO_TITLE}</span>`);
    expect(button).toContain(ui('forCoaches', getHelpLanguage('pl', 'f')).help!);
    expect(button).toContain('lang="pl"');
  });

  it('the button’s name is translated in every help language', () => {
    for (const src of helpLanguageSources) expect(src.ui.forCoaches, src.code).toBeTruthy();
  });

  it('the work-rules track keeps its Over in Dutch, one h1, without the button (as before)', () => {
    const nl = about('nl');
    expect(nl.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(nl).not.toContain('coach-link');
    expect(nl).not.toContain('class="about-nl"');
  });
});

describe('Voor begeleiders en werkgevers: in the app and on the site, from one source', () => {
  const app = coaches();
  const site = coachPage();

  it('has the professionals’ sections, in this order', () => {
    expect(proSections.map((s) => s.id)).toEqual(['p.mission', 'p.story', 'p.beta', 'p.who', 'p.voices', 'p.privacy', 'p.facts', 'p.group', 'p.weekplan', 'p.kunjenu', 'p.entree', 'p.contact']);
    // In their Dutch: the mission and for whom (both tracks), not on Over; the story and the test version, as on Over.
    const body = (id: string) => proSections.find((s) => s.id === id)!.body.join(' ') + (proSections.find((s) => s.id === id)!.lines ?? []).map((l) => l.text).join(' ');
    expect(body('p.mission')).toContain(siteSections.find((s) => s.id === 'a.mission')!.nl.body);
    expect(body('p.beta')).toContain(aboutSection('a.beta').nl.body);
    expect(body('p.beta')).toContain('Melden');
    expect(body('p.who')).toContain(siteSections.find((s) => s.id === 'a.who')!.nl.body);
    expect(body('p.who')).toContain(siteSections.find((s) => s.id === 'a.who')!.nlRules!.body);
    expect(body('p.voices')).toContain('ElevenLabs');
    expect(body('p.privacy')).toMatch(/geen account|account nodig/);
    expect(body('p.privacy')).toContain('GoatCounter');
    expect(body('p.contact')).toContain(CONTACT_EMAIL);
    // The contact comes last ("Ons adres staat onderaan deze pagina" in the test version's text).
    expect(proSections.at(-1)!.id).toBe('p.contact');
  });

  it('shows every title, paragraph and line on both, and the facts with their sources', () => {
    const a = textOf(app);
    const s = textOf(site);
    for (const page of [a, s]) {
      expect(page).toContain(PRO_LEAD);
      for (const sec of proSections) {
        expect(page, sec.id).toContain(sec.title);
        for (const p of sec.body) expect(page, sec.id).toContain(p);
        for (const l of sec.lines ?? []) expect(page, sec.id).toContain(`${l.lead} ${l.text}`);
      }
      for (const f of COACH_FACTS) expect(page).toContain(`Bron: ${f.source}`);
    }
  });

  it('the app: Dutch, one h1 ready for the focus, one mail link, the rest of the taps in the topic list', () => {
    expect(app).toMatch(/^<div class="screen coaches" lang="nl" dir="ltr">/);
    expect(app.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(app).toContain(`<h1 tabindex="-1">${PRO_TITLE}</h1>`);
    expect(app.match(/href="mailto:/g)).toHaveLength(1);
    // Outside the topic list: no other links or buttons (the back arrow is chrome).
    const outside = app.replace(/<ul class="coach-links[\s\S]*?<\/ul>(?=<\/section>)/, '');
    expect(outside.match(/<a\b/g)).toHaveLength(1);
    expect(outside.match(/<button\b/g) ?? []).toHaveLength(1);
    expect(outside).toContain('chrome-back');
  });

  it('the site: the same page with its links (Werkregels, a language page, the sectors, every topic)', () => {
    expect(site.match(/<h1>/g)).toHaveLength(1);
    expect(site).toContain('<h1>Vloertaal voor begeleiders en werkgevers</h1>');
    expect(site).toContain('<a href="/werkregels/">Werkregels.</a>');
    expect(site).toContain('<a href="/pl/">vloertaal.nl/pl</a>');
    expect(site).toContain(`<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`);
    expect(site).toContain('href="/bouw/"');
  });

  it('names Werkregels lessons for Entree that are in the app', () => {
    const titles = new Set([...rulesUnits, ...sectorRulesUnits].map((u) => u.title));
    for (const t of ENTREE_UNITS) expect(titles.has(t), t).toBe(true);
  });
});

describe('translations: what left Over', () => {
  it('keeps the texts the language pages still show (mission, test version, for whom), drops the voices', () => {
    expect(aboutIds).toEqual(expect.arrayContaining(['a.mission', 'a.mission.b', 'a.beta', 'a.beta.b', 'a.who', 'a.who.b']));
    expect(aboutIds).not.toContain('a.voices');
    for (const src of helpLanguageSources) {
      expect(src.gloss['a.mission.b'], src.code).toBeTruthy();
      expect(src.gloss['a.voices.b'], src.code).toBeUndefined();
    }
  });
});
