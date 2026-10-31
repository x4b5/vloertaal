import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { NoticeCard } from '../src/components/NoticeCard';
import { UPDATES, type Update } from '../src/content/updates';
import { EXAMPLE_NOTICE_TEXTS, EXAMPLE_NOTICE_UPDATE, withExampleNotice } from '../src/dev/noticeExample';
import { getHelpLanguage, helpLanguageSources, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { allForms, GENDERED_LANGS, uiEn } from '../src/i18n/types';
import { LANG_CODES } from '../src/i18n/meta';
import { uiNl } from '../src/i18n/nl';
import { allNotices, noticeFits, noticeFor, noticeGlossId, seeNotice } from '../src/lib/notice';
import { emptyProgress, firstDayOf, loadProgress, parseBackup, backupFile, withFirstDay, type Progress } from '../src/lib/progress';

/**
 * "Er is iets veranderd" (src/lib/notice.ts, src/components/NoticeCard.tsx): a notice of an update
 * that touches the learner, shown once, to the right country and track, only to learners who
 * started before it. The example (src/dev/noticeExample.ts) is never in UPDATES.
 */
beforeAll(() => registerPack(nlPack));

const day = (s: string) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d, 12); };
const TODAY = day('2026-11-15');

/** A notice update of a day, for a country and track. */
const upd = (id: string, date: string, country: 'nl' | 'be' | 'both' = 'nl', track: 'taal' | 'regels' | 'both' = 'both'): Update => ({
  date, items: [`${id}.`], notice: { id, country, track, nl: 'Er is iets veranderd.', en: 'Something has changed.' },
});

const learner = (x: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'pl', firstDay: '2026-10-01', ...x });

describe('for whom: country and track', () => {
  it('a notice for the Netherlands: not for a learner in Belgium; "both": for everyone', () => {
    const nl = upd('a', '2026-11-01', 'nl').notice!;
    const be = upd('b', '2026-11-01', 'be').notice!;
    const both = upd('c', '2026-11-01', 'both').notice!;
    expect(noticeFits(nl, learner())).toBe(true);
    // No country chosen = the Netherlands.
    expect(noticeFits(nl, learner({ country: undefined }))).toBe(true);
    expect(noticeFits(nl, learner({ country: 'be' }))).toBe(false);
    expect(noticeFits(be, learner({ country: 'be' }))).toBe(true);
    expect(noticeFits(be, learner())).toBe(false);
    expect(noticeFits(both, learner({ country: 'be' }))).toBe(true);
    expect(noticeFits(both, learner({ country: 'nl' }))).toBe(true);
  });

  it('a notice for one track: the help language decides (nl = Werkregels)', () => {
    const taal = upd('a', '2026-11-01', 'both', 'taal').notice!;
    const regels = upd('b', '2026-11-01', 'both', 'regels').notice!;
    expect(noticeFits(taal, learner({ helpLang: 'ar' }))).toBe(true);
    expect(noticeFits(taal, learner({ helpLang: null }))).toBe(true);
    expect(noticeFits(taal, learner({ helpLang: 'nl' }))).toBe(false);
    expect(noticeFits(regels, learner({ helpLang: 'nl' }))).toBe(true);
    expect(noticeFits(regels, learner({ helpLang: 'pl' }))).toBe(false);
  });

  it('noticeFor leaves out the other country and track', () => {
    const list = [upd('be-only', '2026-11-03', 'be'), upd('rules-only', '2026-11-02', 'both', 'regels'), upd('mine', '2026-11-01', 'nl', 'taal')];
    expect(noticeFor(learner(), TODAY, list)?.id).toBe('mine');
    expect(noticeFor(learner({ country: 'be' }), TODAY, list)?.id).toBe('be-only');
    expect(noticeFor(learner({ helpLang: 'nl' }), TODAY, list)?.id).toBe('rules-only');
    expect(noticeFor(learner({ helpLang: 'nl', country: 'be' }), TODAY, [list[2]])).toBeNull();
  });
});

describe('once, one at a time, the newest', () => {
  const list = [upd('new', '2026-11-10'), upd('old', '2026-11-01')];

  it('shows the newest; after Oké neither comes back (the older one is in "Wat is er nieuw?")', () => {
    const p = learner();
    expect(noticeFor(p, TODAY, list)?.id).toBe('new');
    const seen = seeNotice(p, 'new', TODAY, list);
    expect(seen.noticesSeen).toEqual(['new', 'old']);
    expect(noticeFor(seen, TODAY, list)).toBeNull();
    // Seeing it again changes nothing.
    expect(seeNotice(seen, 'new', TODAY, list).noticesSeen).toEqual(['new', 'old']);
  });

  it('a notice that comes later shows by itself, once', () => {
    const p = seeNotice(learner(), 'new', TODAY, list);
    const later = [upd('later', '2026-11-20'), ...list];
    expect(noticeFor(p, day('2026-11-19'), later)).toBeNull(); // not before its day
    expect(noticeFor(p, day('2026-11-20'), later)?.id).toBe('later');
    expect(noticeFor(seeNotice(p, 'later', day('2026-11-20'), later), day('2026-11-21'), later)).toBeNull();
  });

  it('one seen on this phone stays seen; the newest of those not seen shows', () => {
    expect(noticeFor(learner({ noticesSeen: ['new'] }), TODAY, list)?.id).toBe('old');
  });
});

describe('new learners never see old notices', () => {
  const list = [upd('n', '2026-10-20')];

  it('only notices newer than the first day', () => {
    expect(noticeFor(learner({ firstDay: '2026-10-01' }), TODAY, list)?.id).toBe('n');
    expect(noticeFor(learner({ firstDay: '2026-10-20' }), TODAY, list)).toBeNull();
    expect(noticeFor(learner({ firstDay: '2026-11-15' }), TODAY, list)).toBeNull();
    // Without a first day nothing shows (App sets it on the first open).
    expect(noticeFor(learner({ firstDay: undefined }), TODAY, list)).toBeNull();
  });

  it('a brand-new learner gets today as the first day, so no notice of before', () => {
    const p = withFirstDay({ ...emptyProgress, onboarded: true, helpLang: 'pl' }, TODAY);
    expect(p.firstDay).toBe('2026-11-15');
    expect(noticeFor(p, TODAY, [upd('x', '2026-11-14'), upd('y', '2026-11-15')])).toBeNull();
    expect(noticeFor(p, day('2026-11-16'), [upd('z', '2026-11-16')])?.id).toBe('z');
  });
});

describe('migration: a save from before', () => {
  const store = new Map<string, string>();
  const ls = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
  afterEach(() => store.clear());

  it('a save without a first day gets the earliest day it knows, else today', () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    store.set('vloertaal:v1', JSON.stringify({
      onboarded: true, helpLang: 'pl', completed: { 'l.hello': { best: 1, times: 1 } },
      lastDay: '2026-10-20', days: ['2026-10-18', '2026-10-20'], certs: { 'u.firstday': '2026-10-16' },
    }));
    const p = loadProgress();
    expect(p.firstDay).toBeUndefined();
    expect(p.noticesSeen).toBeUndefined();
    expect(firstDayOf(p)).toBe('2026-10-16');
    const ready = withFirstDay(p, TODAY);
    expect(ready.firstDay).toBe('2026-10-16');
    // An older learner sees a notice of after that day.
    expect(noticeFor(ready, TODAY, [upd('n', '2026-11-01')])?.id).toBe('n');
    // Nothing known: today.
    expect(withFirstDay({ ...emptyProgress, onboarded: true }, TODAY).firstDay).toBe('2026-11-15');
    // A first day once set stays.
    expect(withFirstDay(ready, day('2027-01-01')).firstDay).toBe('2026-10-16');
  });

  it('keeps what can be read and drops the rest', () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, firstDay: '2026-10-05', noticesSeen: ['a', 7, 'b'] }));
    expect(loadProgress()).toMatchObject({ firstDay: '2026-10-05', noticesSeen: ['a', 'b'] });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, firstDay: 'gisteren', noticesSeen: 'a' }));
    const p = loadProgress();
    expect(p.firstDay).toBeUndefined();
    expect(p.noticesSeen).toBeUndefined();
  });

  it('the notices seen stay on this phone: not taken from a backup', () => {
    const p = learner({ noticesSeen: ['a'] });
    const back = parseBackup(backupFile(p, TODAY))!;
    expect(back).not.toHaveProperty('noticesSeen');
    expect(back).not.toHaveProperty('firstDay');
  });

  it('App sets the first day on the first open and keeps it (and the notices seen) on "Voortgang wissen"', () => {
    const app = readFileSync('src/App.tsx', 'utf8');
    expect(app).toContain('withFirstDay(progress, new Date())');
    expect(app).toContain('firstDay: p.firstDay, noticesSeen: p.noticesSeen');
  });
});

describe('the notices in UPDATES', () => {
  const notices = allNotices();

  it('each: a unique id, a country and track, Dutch of at most 2 sentences and 25 words, English', () => {
    const ids = notices.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const n of notices) {
      expect(n.id, n.id).toMatch(/^[a-z0-9-]+$/);
      expect(['nl', 'be', 'both']).toContain(n.country);
      expect(['taal', 'regels', 'both']).toContain(n.track);
      expect(n.nl.split(/(?<=[.!?])\s+/).filter(Boolean).length, n.id).toBeLessThanOrEqual(2);
      expect(n.nl.split(/\s+/).length, n.id).toBeLessThanOrEqual(25);
      expect(n.en.trim(), n.id).toBeTruthy();
    }
  });

  it('the example is not one of them', () => {
    expect(UPDATES).not.toContain(EXAMPLE_NOTICE_UPDATE);
    expect(notices.map((n) => n.id)).not.toContain(EXAMPLE_NOTICE_UPDATE.notice!.id);
    // ...but it follows the same rules.
    const ex = EXAMPLE_NOTICE_UPDATE.notice!;
    expect(ex.nl.split(/(?<=[.!?])\s+/)).toHaveLength(2);
    expect(allNotices([EXAMPLE_NOTICE_UPDATE])[0]).toMatchObject({ id: ex.id, date: EXAMPLE_NOTICE_UPDATE.date });
  });
});

describe('the translations are complete', () => {
  const required = allNotices().filter((n) => n.track !== 'regels').map((n) => noticeGlossId(n.id));

  it('13 help languages: the card\'s texts and every notice (not only for Werkregels), nothing else', () => {
    expect(helpLanguageSources).toHaveLength(13);
    for (const lang of helpLanguageSources) {
      for (const key of ['noticeTitle', 'noticeMore', 'noticeOk'] as const) {
        expect(allForms(lang.ui[key]).filter((f) => f.trim()).length, `${lang.code} ${key}`).toBeGreaterThan(0);
      }
      for (const id of required) {
        const forms = allForms(lang.gloss[id]);
        expect(forms.length, `${lang.code} ${id}`).toBeGreaterThan(0);
        for (const f of forms) expect(f.trim(), `${lang.code} ${id}`).toBeTruthy();
      }
      const known = new Set(allNotices().map((n) => noticeGlossId(n.id)));
      const extra = Object.keys(lang.gloss).filter((id) => id.startsWith('notice.') && !known.has(id));
      expect(extra, lang.code).toEqual([]);
    }
  });

  it('a gendered text has an x form', () => {
    for (const code of GENDERED_LANGS) {
      for (const key of ['noticeTitle', 'noticeMore', 'noticeOk'] as const) {
        const t = getHelpLanguage(code, 'x')!.ui[key];
        expect(t, `${code} ${key}`).toBeTruthy();
      }
      const ex = EXAMPLE_NOTICE_TEXTS[code];
      if (typeof ex !== 'string') expect(ex.x, code).toBeTruthy();
    }
  });

  it('English and Dutch', () => {
    expect([uiEn.noticeTitle, uiEn.noticeMore, uiEn.noticeOk]).toEqual(['Something has changed', 'Read more', 'OK']);
    expect([uiNl.noticeTitle, uiNl.noticeMore, uiNl.noticeOk]).toEqual(['Er is iets veranderd', 'Lees meer', 'Oké']);
  });

  it('the example in all 13 languages (for the screenshots)', () => {
    expect(Object.keys(EXAMPLE_NOTICE_TEXTS).sort()).toEqual([...LANG_CODES].sort());
    for (const code of LANG_CODES) for (const f of allForms(EXAMPLE_NOTICE_TEXTS[code])) expect(f.trim(), code).toBeTruthy();
  });
});

describe('the card', () => {
  const notice = allNotices([EXAMPLE_NOTICE_UPDATE])[0];
  const card = (code: string | null) => renderToStaticMarkup(createElement(NoticeCard, {
    notice, lang: code ? withExampleNotice(getHelpLanguage(code as never, 'f')) : undefined, onMore: () => {}, onOk: () => {},
  }));

  it('Dutch and the help language, each with its lang; two buttons', () => {
    const pl = card('pl');
    expect(pl).toContain('<span class="notice-nl" lang="nl">Er is iets veranderd</span>');
    expect(pl).toContain('Coś się zmieniło');
    expect(pl).toContain(`lang="nl" dir="ltr">${notice.nl}</span>`);
    expect(pl).toContain('lang="pl"');
    expect(pl).toContain('Płaca minimalna rośnie.');
    expect(pl.match(/<button type="button" class="btn[^"]*notice-(more|ok)"/g)).toHaveLength(2);
    expect(pl).toContain('Lees meer');
    expect(pl).toContain('Oké');
    // A section with a heading, not a dialog: no pop-up.
    expect(pl).toMatch(/^<section class="notice-card" aria-labelledby="notice-title"/);
    expect(pl).not.toContain('role="dialog"');
  });

  it('right to left in Arabic, the Dutch kept left to right', () => {
    const ar = card('ar');
    expect(ar).toMatch(/^<section [^>]*dir="rtl"/);
    expect(ar).toContain('lang="ar" dir="rtl"');
    expect(ar).toContain(`lang="nl" dir="ltr">${notice.nl}</span>`);
  });

  it('Werkregels: Dutch only, no English or translation', () => {
    const nl = card('nl');
    expect(nl).toContain('Er is iets veranderd');
    expect(nl).toContain(notice.nl);
    expect(nl).not.toContain(notice.en);
    expect(nl).not.toContain('Something has changed');
    expect(nl).not.toContain('lang="en"');
  });

  it('English only: the English line under the Dutch', () => {
    const en = card(null);
    expect(en).toContain(notice.nl);
    expect(en).toContain(notice.en);
  });

  it('targets of at least 44 px', () => {
    const css = readFileSync('src/melding.css', 'utf8');
    expect(css).toMatch(/\.notice-more, \.notice-ok \{[^}]*min-height: 52px/);
  });
});
