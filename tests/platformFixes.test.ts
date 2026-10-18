import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { swSource } from '../vite.config';
import { failedFile, mayReloadAgain } from '../src/lib/appUpdate';
import { fitName } from '../src/lib/certCanvas';
import { Splash } from '../src/components/Splash';
import { TopicPage } from '../src/components/Route';
import { units } from '../src/content/curriculum';
import { getHelpLanguage } from '../src/i18n/all';
import { emptyProgress } from '../src/lib/progress';
import { unitAllowed } from '../src/lib/access';

describe('a file of an older version, gone after an update', () => {
  it('reloads by itself once, not again within two minutes (no loop on a file that keeps failing)', () => {
    const now = 1_800_000_000_000;
    expect(mayReloadAgain(null, now)).toBe(true);
    expect(mayReloadAgain(now - 5_000, now)).toBe(false);
    expect(mayReloadAgain(now - 119_000, now)).toBe(false);
    expect(mayReloadAgain(now - 121_000, now)).toBe(true);
    // A clock set back: allowed (the guard is about a loop, not the clock).
    expect(mayReloadAgain(now + 60_000, now)).toBe(true);
  });

  it('reads the missing file from the browser\'s message where it names one', () => {
    expect(failedFile(new TypeError('Failed to fetch dynamically imported module: https://vloertaal.nl/assets/uk-C64-uVSE.js'))).toBe('https://vloertaal.nl/assets/uk-C64-uVSE.js');
    expect(failedFile(new TypeError('error loading dynamically imported module: http://localhost:4181/assets/Settings-CcEpzsQG.js'))).toBe('http://localhost:4181/assets/Settings-CcEpzsQG.js');
    expect(failedFile(new TypeError('Importing a module script failed.'))).toBeNull();
  });

  it('the start screen says it in words, in Dutch and the help language, next to the ↻', () => {
    const ar = renderToStaticMarkup(createElement(Splash, { failed: true, onRetry: () => {}, lang: 'ar' }));
    expect(ar).toContain('Niet geladen. Is er internet?');
    expect(ar).toContain('لم يتم التحميل');
    expect(ar).toContain('dir="rtl"');
    expect(ar).toContain('boot-retry');
    // English without a help language; the Dutch track only Dutch.
    expect(renderToStaticMarkup(createElement(Splash, { failed: true, onRetry: () => {}, lang: null }))).toContain('Not loaded. Is the internet on?');
    const nl = renderToStaticMarkup(createElement(Splash, { failed: true, onRetry: () => {}, lang: 'nl' }));
    expect(nl.match(/Niet geladen/g)).toHaveLength(1);
    // While it loads: no words, no button.
    expect(renderToStaticMarkup(createElement(Splash, { lang: 'ar' }))).not.toContain('boot-failed');
  });
});

describe('the service worker of a build', () => {
  const sw = readFileSync('public/sw.js', 'utf8');
  const files = [
    { fileName: 'index.html', source: '<script src="./assets/index-AAAAAAAA.js"></script>' },
    { fileName: 'assets/index-AAAAAAAA.js', source: 'app' },
    { fileName: 'assets/uk-C64-uVSE.js', source: 'uk' },
  ];

  it('gets the build\'s id and its hashed files, so it changes with each deploy', () => {
    const out = swSource(sw, files);
    expect(out).toMatch(/^const BUILD = '[0-9a-f]{12}';$/m);
    expect(out).toContain('const FILES = ["./assets/index-AAAAAAAA.js","./assets/uk-C64-uVSE.js"];');
    expect(out).not.toContain("const BUILD = 'dev'");
    // The same build gives the same worker (no new install, no cache thrown away for nothing).
    expect(swSource(sw, [...files].reverse())).toBe(out);
    const next = swSource(sw, [{ ...files[0], source: '<script src="./assets/index-BBBBBBBB.js"></script>' }, { fileName: 'assets/index-BBBBBBBB.js', source: 'app 2' }, files[2]]);
    expect(next).not.toBe(out);
  });

  it('keeps an app cache per build next to the saved lessons and the clips played lately', () => {
    expect(sw).toContain("const BUILD = 'dev';");
    expect(sw).toContain('const FILES = [];');
    expect(sw).toMatch(/const AUDIO_MAX = \d+;/);
    // Old builds' caches go on activate; the saved lessons (OFFLINE) and AUDIO stay.
    expect(sw).toMatch(/k !== CACHE && k !== OFFLINE && k !== AUDIO/);
  });
});

describe('the name on the certificate picture', () => {
  // A plain font: every letter 0.6 of the size wide.
  const measure = (text: string, size: number) => [...text].length * size * 0.6;

  it('stays as it is when it fits', () => {
    expect(fitName('Ali Hassan', 1000, 60, 40, measure)).toEqual({ size: 60, lines: ['Ali Hassan'] });
  });

  it('gets smaller to fit on one line, never under the minimum', () => {
    const r = fitName('Maria Constantinescu', 1000, 100, 40, measure);
    expect(r.lines).toEqual(['Maria Constantinescu']);
    expect(r.size).toBeLessThan(100);
    expect(r.size).toBeGreaterThanOrEqual(40);
    expect(measure(r.lines[0], r.size)).toBeLessThanOrEqual(1000);
  });

  it('goes to two lines when the minimum is still too wide, Arabic too, never cut at its start', () => {
    const name = 'محمد عبد الرحمن بن عبد العزيز الحسيني القحطاني الشمري العنزي';
    const r = fitName(name, 800, 60, 40, measure);
    expect(r.lines).toHaveLength(2);
    expect(r.lines.join(' ')).toBe(name);
    for (const line of r.lines) expect(measure(line, r.size)).toBeLessThanOrEqual(800);
    expect(r.size).toBeGreaterThanOrEqual(40);
  });

  it('a single word longer than the line keeps its start and ends in an ellipsis, inside the line', () => {
    const r = fitName(`Ab${'w'.repeat(58)}`, 600, 60, 40, measure);
    expect(r.lines).toHaveLength(1);
    expect(r.lines[0].startsWith('Abww')).toBe(true);
    expect(r.lines[0].endsWith('…')).toBe(true);
    expect(measure(r.lines[0], r.size)).toBeLessThanOrEqual(600);
  });
});

describe('a topic the sneak preview does not open', () => {
  const unit = units.find((u) => !unitAllowed(u.id, 'preview'))!;
  const lang = getHelpLanguage('uk', 'm');
  const page = (access: 'preview' | 'full', onUpgrade?: () => void, unlocked = false) => renderToStaticMarkup(createElement(TopicPage, {
    unit, progress: emptyProgress, lang, access, onBack: () => {}, onStart: () => {}, onUpgrade, unlocked,
  }));

  it('opens the unlock card from every lesson row (no dead rows), with a padlock', () => {
    const html = page('preview', () => {});
    const rows = html.match(/<button[^>]*class="bay-card"[^>]*>/g) ?? [];
    expect(rows).toHaveLength(unit.lessons.length);
    for (const row of rows) expect(row).not.toContain('disabled');
    expect(html.match(/bay-full/g)).toHaveLength(unit.lessons.length);
    expect(html).not.toContain('bay-wait');
  });

  it('after unlocking: the code was right, and a lesson after the next one waits with an hourglass, not a padlock', () => {
    const html = page('full', () => {}, true);
    expect(html).toContain('unlocked-note');
    expect(html).toContain('De code is goed');
    expect(html).toContain('bay-wait');
    expect(html).not.toContain('bay-full');
    expect(page('full', () => {})).not.toContain('unlocked-note');
  });
});
