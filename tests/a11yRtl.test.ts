import { createElement, isValidElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import fs from 'fs';
import { HelpText, isolateLatin } from '../src/components/Bi';
import { Route } from '../src/components/Route';
import { getHelpLanguage } from '../src/i18n/all';
import { ui } from '../src/i18n';
import { emptyProgress, type Progress } from '../src/lib/progress';

/** Right-to-left help languages (ar, fa, prs) and other scripts: direction, isolation and lang. */
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const ar = () => getHelpLanguage('ar')!;
type Bdi = ReactElement<{ children: string; dir?: string; lang?: string }>;
const bdis = (t: string) => ([] as unknown[]).concat(isolateLatin(t)).filter(isValidElement) as Bdi[];

describe('Dutch inside Arabic or Persian text', () => {
  it('is isolated left to right and marked Dutch, so a screen reader uses a Dutch voice', () => {
    const [q] = bdis('مشرفتك الجديدة تقول: «Zeg maar je, hoor!» ماذا تقصد؟');
    expect(q.props.dir).toBe('ltr');
    expect(q.props.lang).toBe('nl');
    const [w] = bdis('كلمة helm هنا');
    expect(w.props.lang).toBe('nl');
  });

  it('a time or an amount alone stays in the sentence’s language (read as part of it)', () => {
    const [t] = bdis('في الساعة 8:30.');
    expect(t.props.children).toBe('8:30');
    expect(t.props.dir).toBe('ltr');
    expect(t.props.lang).toBeUndefined();
  });

  it('HelpText: the help line has its lang and dir, the Dutch run inside it lang="nl"', () => {
    const m = html(createElement(HelpText, { text: 'قل: «Goedemorgen!» لزميلك', lang: ar() }));
    expect(m).toMatch(/^<span class="bi-help" lang="ar" dir="rtl">/);
    expect(m).toContain('<bdi dir="ltr" lang="nl" class="nl-quote">«Goedemorgen!»</bdi>');
  });
});

describe('the path in Arabic: what a screen reader hears is in its own language', () => {
  const progress = (extra: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'ar', sector: 'none', ...extra });
  const m = html(createElement(Route, { progress: progress({ currentUnit: 'u.firstday', completed: { 'l.hello': { best: 1, times: 1 } } }), lang: ar(), onStart: () => {}, onPick: () => {}, onAll: () => {} }));

  it('done and not-yet notes are lang="ar" (a Dutch page would read them with a Dutch voice)', () => {
    expect(m).toContain(`<span class="sr-only" lang="ar"> · ${ui('stampDone', ar()).help}</span>`);
    expect(m).toContain(`<span class="sr-only" lang="ar"> · ${ui('locked', ar()).help}</span>`);
  });

  it('the path is mirrored, the Dutch unit title inside it reads left to right', () => {
    expect(m).toMatch(/class="path route home3"[^>]*dir="rtl"/);
    expect(m).toMatch(/class="rb-sub rb-nl" lang="nl" dir="ltr"/);
  });
});

describe('mirrored arrows on old phones (styles.css)', () => {
  const css = fs.readFileSync('src/styles.css', 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((r) => ({ sel: r[1].trim(), body: r[2] }));

  it('mirror with transform: scaleX(-1), not the `scale` property (iOS < 14.5, Chrome < 104)', () => {
    expect(css).not.toMatch(/\bscale:\s*-1/);
    for (const sel of ["[dir='rtl'] .icon-fwd", "[dir='rtl'] .chrome-back .icon", '.icon-fwd:dir(rtl)']) {
      const r = rules.find((x) => x.sel === sel);
      expect(r?.body, sel).toMatch(/transform:\s*scaleX\(-1\)/);
    }
  });

  it(':dir() stands in a rule of its own (an unknown selector drops the whole selector list)', () => {
    for (const r of rules.filter((x) => x.sel.includes(':dir('))) expect(r.sel, r.sel).not.toContain(',');
  });
});
