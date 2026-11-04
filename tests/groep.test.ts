import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { coachPage } from '../src/lib/coachPage';
import { gemiddelde, groepCsv, groepRegels, groepTekst, groepTotaal, leesGroepCsv, leesScore, mediaan, type GroepRij } from '../src/lib/groep';
import { groepCode, readGroepCode } from '../src/lib/groepCode';
import { GROEP_CSP, GROEP_SAFE, groepLibSource, groepPage } from '../src/lib/groepPage';
import { KAART_CODE_LABEL, kaartAlt, kaartCode, kaartData } from '../src/lib/kaart';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { GROEP_PATH } from '../src/lib/paths';
import { sitemap } from '../src/lib/sitemap';
import { proSections } from '../src/content/pro';
import { PRIVACY } from '../src/lib/privacyPage';
import { uiEn } from '../src/i18n/types';
import { helpLanguageSources } from '../src/i18n/all';

/**
 * The group overview for coaches (vloertaal.nl/groep, src/lib/groepPage.ts): the totals of a group
 * from the numbers of the coach cards, without names, and nothing leaves the page.
 */

const r = (onderwerpen?: number, dagen?: number, voor?: [number, number], na?: [number, number]): GroepRij => ({
  ...(onderwerpen !== undefined ? { onderwerpen } : {}),
  ...(dagen !== undefined ? { dagen } : {}),
  ...(voor ? { voor: { goed: voor[0], van: voor[1] } } : {}),
  ...(na ? { na: { goed: na[0], van: na[1] } } : {}),
});

describe('the sums', () => {
  it('mean and median, odd and even, unsorted', () => {
    expect(gemiddelde([1, 2, 3, 10])).toBe(4);
    expect(mediaan([10, 1, 3])).toBe(3);
    expect(mediaan([10, 1, 3, 2])).toBe(2.5);
    expect(Number.isNaN(mediaan([]))).toBe(true);
    // The input is not sorted in place.
    const xs = [3, 1, 2];
    mediaan(xs);
    expect(xs).toEqual([3, 1, 2]);
  });

  it('the group: participants, topics, days, came back, the test in percent', () => {
    const t = groepTotaal([
      r(3, 12, [9, 18], [12, 18]),
      r(1, 1, [6, 18], [6, 18]),
      r(5, 20, [12, 18], [9, 18]),
      r(0, 2),
      r(), // empty: not a participant
    ]);
    expect(t.deelnemers).toBe(4);
    expect(t.onderwerpen).toEqual({ n: 4, gemiddelde: 2.25, mediaan: 2 });
    expect(t.dagen).toEqual({ n: 4, gemiddelde: 8.75, mediaan: 7 });
    expect(t.terug).toEqual({ n: 3, van: 4 });
    expect(t.vaak).toEqual({ n: 2, van: 4 });
    expect(t.toets.voor!.n).toBe(3);
    expect(t.toets.voor!.gemiddelde).toBeCloseTo(50);
    expect(t.toets.na!.mediaan).toBeCloseTo(50);
    expect(t.toets.verschil!.mediaan).toBeCloseTo(0);
    expect(t.toets.verschil!.gemiddelde).toBeCloseTo(0);
    expect([t.toets.beter, t.toets.gelijk, t.toets.minder]).toEqual([1, 1, 1]);
  });

  it('compares the start and the end in percent, also with a different number of questions', () => {
    const t = groepTotaal([r(undefined, undefined, [6, 12], [9, 18]), r(undefined, undefined, [3, 6], [5, 6])]);
    expect([t.toets.beter, t.toets.gelijk, t.toets.minder]).toEqual([1, 1, 0]);
    expect(t.dagen).toBeNull();
    expect(t.terug).toEqual({ n: 0, van: 0 });
  });

  it('only a start or only an end: in its own mean, not in the difference', () => {
    const t = groepTotaal([r(2, 5, [9, 18]), r(2, 5, undefined, [18, 18])]);
    expect(t.toets.voor!.n).toBe(1);
    expect(t.toets.na!.n).toBe(1);
    expect(t.toets.verschil).toBeNull();
    expect(groepRegels(t).map((x) => x.label)).not.toContain('Verschil eind min instap');
  });

  it('says it in plain Dutch, with a comma', () => {
    const regels = groepRegels(groepTotaal([r(3, 12, [9, 18], [12, 18]), r(2, 1, [6, 18], [7, 18])]));
    expect(regels).toEqual([
      { label: 'Deelnemers', waarde: '2' },
      { label: 'Onderwerpen af', waarde: 'gemiddeld 2,5 · mediaan 2,5 (2 deelnemers)' },
      { label: 'Dagen geoefend (laatste 4 weken)', waarde: 'gemiddeld 6,5 · mediaan 6,5 (2 deelnemers)' },
      { label: 'Kwamen terug (2 of meer dagen geoefend)', waarde: '1 van 2 (50%)' },
      { label: 'Oefenden 7 of meer dagen', waarde: '1 van 2 (50%)' },
      { label: 'Toets “Wat ken je al?”, instap', waarde: 'gemiddeld 41,7% goed · mediaan 41,7% goed (2 deelnemers)' },
      { label: 'Toets “Wat ken je al?”, eind', waarde: 'gemiddeld 52,8% goed · mediaan 52,8% goed (2 deelnemers)' },
      { label: 'Verschil eind min instap', waarde: 'gemiddeld +11,1 procentpunt · mediaan +11,1 procentpunt (2 deelnemers)' },
      { label: 'Eind tegenover instap', waarde: '2 beter · 0 gelijk · 0 minder' },
    ]);
    expect(groepRegels(groepTotaal([]))[1].waarde).toBe('nog niets ingevuld');
  });

  it('reads a score as typed: 11/18, 11 van 18; not more right than questions', () => {
    expect(leesScore('11/18')).toEqual({ goed: 11, van: 18 });
    expect(leesScore(' 11 van 18 ')).toEqual({ goed: 11, van: 18 });
    expect(leesScore('19/18')).toBeNull();
    expect(leesScore('11')).toBeNull();
    expect(leesScore('0/0')).toBeNull();
  });

  it('CSV: a row per participant, then the totals; read back, the same rows', () => {
    const rijen = [r(3, 12, [9, 18], [12, 18]), r(1, 1), r(undefined, 4, undefined, [5, 18])];
    const csv = groepCsv(rijen, '1 november 2026');
    expect(csv.split('\r\n').slice(0, 4)).toEqual([
      'deelnemer;onderwerpen_af;dagen_geoefend;instap_goed;instap_van;eind_goed;eind_van',
      '1;3;12;9;18;12;18',
      '2;1;1;;;;',
      '3;;4;;;5;18',
    ]);
    expect(csv).toContain('Groepsoverzicht Vloertaal;1 november 2026');
    expect(csv).toContain('"Deelnemers";"3"');
    expect(leesGroepCsv(csv)).toEqual(rijen);
    // As a spreadsheet saves it again: commas, a BOM is taken off by the page.
    expect(leesGroepCsv('deelnemer,onderwerpen_af\n1,2,3,,,,\n')).toEqual([r(2, 3)]);
  });

  it('the text: the totals, without the rows, with the modest note', () => {
    const tekst = groepTekst([r(3, 12, [9, 18], [12, 18])], '1 november 2026');
    expect(tekst.startsWith('Groepsoverzicht Vloertaal, 1 november 2026\n')).toBe(true);
    expect(tekst).toContain('Deelnemers: 1');
    expect(tekst).toContain('Zonder namen');
    expect(tekst).toContain('nog niet nagekeken door een expert');
  });
});

describe('the code on the coach card', () => {
  const run = (day: string, version: 'A' | 'B', x: [number, number, number]) =>
    ({ day, version, right: { listen: x[0], words: x[1], sentences: x[2] }, of: { listen: 6, words: 6, sentences: 6 } });
  const TODAY = new Date(2026, 9, 30, 12);

  it('is the card’s numbers in one line, and reads back the same', () => {
    expect(groepCode({ onderwerpen: 3, dagen: 12, voor: { goed: 11, van: 18 }, na: { goed: 15, van: 18 } })).toBe('VT1 O3 D12 V11/18 N15/18');
    expect(groepCode({ onderwerpen: 0, dagen: 0 })).toBe('VT1 O0 D0');
    for (const c of [{ onderwerpen: 3, dagen: 12, voor: { goed: 11, van: 18 }, na: { goed: 15, van: 18 } }, { onderwerpen: 7, dagen: 28 }, { onderwerpen: 1, dagen: 2, voor: { goed: 0, van: 18 } }]) {
      expect(readGroepCode(groepCode(c))).toEqual(c);
    }
  });

  it('is read as typed or shared: lower case, dashes, a zero for O, in a line of text', () => {
    const c = { onderwerpen: 3, dagen: 12, voor: { goed: 11, van: 18 }, na: { goed: 15, van: 18 } };
    expect(readGroepCode('vt1-o3-d12-v11/18-n15/18')).toEqual(c);
    expect(readGroepCode('VT1 03 D12 V11 van 18 N15/18')).toEqual(c);
    expect(readGroepCode('Ik leer Nederlands. Code voor het groepsoverzicht: VT1 O3 D12 V11/18 N15/18')).toEqual(c);
    expect(readGroepCode('VT1 O10 D3')).toEqual({ onderwerpen: 10, dagen: 3 });
    for (const bad of ['', 'hallo', 'VT2 O3 D12', 'VT1 O3 D40', 'VT1 O3 D12 V19/18', 'VT1 O3']) expect(readGroepCode(bad), bad).toBeNull();
  });

  it('the card shows it, from its own numbers only (no name)', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run('2026-10-02', 'A', [2, 3, 1]), eind: run('2026-10-29', 'B', [4, 5, 4]), start: '2026-10-02', unitsAt: 0 } };
    const d = kaartData(p, 'Amina Yusuf', TODAY);
    // The test score with the guessing taken out, as the card itself shows it (src/lib/toets.ts:
    // right minus half the wrong picks): 6 right of 18 is 1, 13 right is 10.
    expect(kaartCode(d)).toBe('VT1 O0 D0 V1/18 N10/18');
    expect(kaartCode(kaartData(emptyProgress, '', TODAY))).toBe('VT1 O0 D0');
    expect(kaartCode(d)).not.toMatch(/Amina/);
    expect(kaartAlt(d)).toContain(`${KAART_CODE_LABEL}: VT1 O0 D0 V1/18 N10/18.`);
    expect(readGroepCode(kaartCode(d))).toEqual({ onderwerpen: 0, dagen: 0, voor: { goed: 1, van: 18 }, na: { goed: 10, van: 18 } });
  });

  it('the learner’s screen explains the code in every help language', () => {
    expect(uiEn.coachCode).toMatch(/No name/);
    for (const src of helpLanguageSources) expect((src.ui as Record<string, unknown>).coachCode, src.code).toBeTruthy();
    expect(readFileSync('src/components/Certificate.tsx', 'utf8')).toContain("{ nl: 'Code voor het groepsoverzicht', key: 'coachCode' }");
    expect(KAART_CODE_LABEL).toBe('Code voor het groepsoverzicht');
  });
});

describe('vloertaal.nl/groep: the page', () => {
  const html = groepPage();
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];

  it('says how it stays safe: no names, nothing sent, nothing kept', () => {
    expect(html).toContain('<h1>Groepsoverzicht</h1>');
    const text = GROEP_SAFE.join(' ');
    for (const fact of ['geen namen', 'niets naar een server', 'geen verbinding', 'bewaart niets', 'alleen de totalen']) expect(text, fact).toContain(fact);
    for (const t of GROEP_SAFE) expect(html).toContain(t);
    expect(html).not.toMatch(/experts kijken|de beste|garantie|bewezen/i);
  });

  it('gives the rules for asking to see a card, the same as the professionals’ page (4 November 2026)', () => {
    // Voluntary; never a condition, a judgement, a contract or pay; a list of numbers is personal data.
    const pro = proSections.find((s) => s.id === 'p.privacy')!.body.join(' ');
    for (const text of [GROEP_SAFE.join(' '), pro]) {
      for (const fact of ['vrijwillig', 'nee zeggen', 'beoordeling', 'contract', 'loon', 'wie welk nummer', 'persoonsgegevens', 'AVG']) expect(text, fact).toContain(fact);
    }
    expect(pro).toContain('Vraag of de leerling de begeleiderskaart wil laten zien');
    expect(pro).not.toContain('Vraag de leerling om de begeleiderskaart te laten zien');
  });

  it('sends nothing: its own policy forbids every connection and form', () => {
    expect(html).toContain(`<meta http-equiv="Content-Security-Policy" content="${GROEP_CSP}" />`);
    // Before anything that could load (the policy only covers what comes after it).
    expect(html.indexOf('Content-Security-Policy')).toBeLessThan(html.indexOf('<link'));
    for (const rule of ["default-src 'none'", "connect-src 'none'", "form-action 'none'", "base-uri 'none'"]) expect(GROEP_CSP).toContain(rule);
    expect(GROEP_CSP).not.toMatch(/https?:|\*/);
  });

  it('sends nothing: no network or storage call in its code, no form, no outside file', () => {
    expect(scripts.length).toBe(1);
    expect(scripts[0][1].trim()).toBe(''); // inline, no src
    const code = scripts[0][2];
    for (const call of ['fetch(', 'XMLHttpRequest', 'sendBeacon', 'WebSocket', 'EventSource', 'import(', 'importScripts', 'localStorage', 'sessionStorage', 'indexedDB', 'document.cookie', 'navigator.serviceWorker', 'window.open', 'location.href', '.submit(', 'new Image', 'postMessage']) {
      expect(code, call).not.toContain(call);
    }
    expect(html).not.toMatch(/<form\b|<iframe\b|<img\b[^>]*src="https?:/);
    // Every src= and href= stays on vloertaal.nl (relative), except the mail link.
    const refs = [...html.matchAll(/\s(?:src|href)="([^"]*)"/g)].map((m) => m[1]);
    for (const ref of refs) expect(ref, ref).toMatch(/^\/(?!\/)/);
    // No input is sent anywhere by a name (inputs without a name and outside a form).
    expect(html).not.toMatch(/<input[^>]*\bname=/);
  });

  it('copies the very functions this file tests, and they work in the page', () => {
    const G = new Function(`${groepLibSource()}\nreturn G;`)() as Record<string, (...a: unknown[]) => unknown>;
    const rijen = [r(3, 12, [9, 18], [12, 18]), r(1, 1, [6, 18], [6, 18]), r(0, 2)];
    expect(G.groepTotaal(rijen)).toEqual(groepTotaal(rijen));
    expect(G.groepCsv(rijen, 'x')).toBe(groepCsv(rijen, 'x'));
    expect(G.groepTekst(rijen, 'x')).toBe(groepTekst(rijen, 'x'));
    expect(G.readGroepCode('VT1 O3 D12 V11/18')).toEqual(readGroepCode('VT1 O3 D12 V11/18'));
    expect(G.leesGroepCsv(groepCsv(rijen, 'x'))).toEqual(rijen);
    expect(html).toContain(groepLibSource());
  });

  it('is not for search results, and the professionals’ page links to it', () => {
    expect(html).toContain('<meta name="robots" content="noindex" />');
    expect(sitemap()).not.toContain(GROEP_PATH);
    expect(coachPage()).toContain(`<a href="${GROEP_PATH}">vloertaal.nl/groep</a>`);
    const line = proSections.find((s) => s.id === 'p.weekplan')!.lines!.find((l) => l.lead === 'Voor de hele groep.')!;
    expect(line.text).toContain('vloertaal.nl/groep');
    expect(line.text).toContain('Zonder namen');
    expect(PRIVACY.flatMap((s) => s.paras).join(' ')).toContain('vloertaal.nl/groep');
  });

  it('the build makes it at /groep/', () => {
    expect(readFileSync('vite.config.ts', 'utf8')).toContain("fileName: 'groep/index.html', source: groepPage()");
  });
});
