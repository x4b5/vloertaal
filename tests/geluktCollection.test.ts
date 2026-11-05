import { readFileSync } from 'node:fs';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { GeluktDonePage, GeluktList, geluktDoneNl } from '../src/components/GeluktCard';
import { Settings } from '../src/components/Settings';
import { cultureTips } from '../src/content/culture';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { fillCount, registerPack } from '../src/i18n';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { uiNl } from '../src/i18n/nl';
import {
  backupFile, emptyProgress, mergeAddsNothing, mergeBackup, parseBackup, progressFrom, replaceLoses, replaceWithBackup,
  type GeluktEntry, type Progress,
} from '../src/lib/progress';
import { settingsRows, SETTINGS_LIST_PAGES, SETTINGS_PARENT } from '../src/lib/settingsMenu';
import { addGelukt, geluktCount, workTryLine } from '../src/lib/workTry';

/**
 * "Gelukt op het werk" (the owner's request, 5 November 2026): "Ja, gelukt" keeps the sentence
 * (id, Dutch, meaning, day) in the progress, so the backup and "Voortgang wissen" take it along; a
 * short moment says how many there are; Settings › Taal en ik lists them, the newest on top. A
 * collection that only grows: nothing to lose, no ranking.
 */

const html = (el: ReactElement) => renderToStaticMarkup(el);
const noop = () => {};
const tipLesson = cultureTips.find((t) => workTryLine(t.lessonId)?.en)!.lessonId;
const line = workTryLine(tipLesson)!;
const entry = (id: string, day: string, nl = `Zin ${id}.`): GeluktEntry => ({ id, nl, en: `Sentence ${id}.`, day });
const p0: Progress = { ...emptyProgress, onboarded: true, completed: { 'l.hello': { best: 1, times: 1 } } };

describe('addGelukt: the sentence goes into the collection', () => {
  it('keeps the id, the Dutch, the meaning and the day, each sentence once (its first day)', () => {
    const p1 = addGelukt(p0, line, '2026-11-05');
    expect(p1.gelukt).toEqual([{ id: line.id, nl: line.nl, en: line.en, day: '2026-11-05' }]);
    expect(geluktCount(p1)).toBe(1);
    const again = addGelukt(p1, line, '2026-11-09');
    expect(again).toBe(p1);
    expect(geluktCount(emptyProgress)).toBe(0);
  });

  it('works in the work-rules track too: a Dutch sentence without a translation', () => {
    registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits]));
    const rules = courseUnits('regels').flatMap((u) => u.lessons).map((l) => workTryLine(l.id)).find(Boolean)!;
    expect(rules.en).toBe('');
    const p = addGelukt(p0, rules, '2026-11-05');
    expect(p.gelukt?.[0]).toMatchObject({ id: rules.id, nl: rules.nl, en: '' });
    expect(progressFrom(JSON.parse(JSON.stringify(p))).gelukt).toEqual(p.gelukt);
  });
});

describe('the collection in the progress (FIELDS, the backup, Voortgang wissen)', () => {
  it('is read back as saved; a broken entry is left out, a double one kept once', () => {
    const saved = {
      ...p0,
      gelukt: [entry('a', '2026-11-02'), { id: 'b' }, entry('c', 'gisteren'), entry('a', '2026-11-01', 'Zin a, eerder.'), 'x', entry('d', '2026-11-03')],
    };
    expect(progressFrom(saved).gelukt).toEqual([entry('a', '2026-11-01', 'Zin a, eerder.'), entry('d', '2026-11-03')]);
    expect(progressFrom({ ...p0, gelukt: 'veel' }).gelukt).toBeUndefined();
    expect(progressFrom(p0).gelukt).toBeUndefined();
  });

  it('goes along in the backup file, and back', () => {
    const p = { ...p0, gelukt: [entry('a', '2026-11-01'), entry('b', '2026-11-03')] };
    expect(parseBackup(backupFile(p, new Date(2026, 10, 5)))?.gelukt).toEqual(p.gelukt);
  });

  it('adds both phones\' sentences together, each once, and putting a file in place takes the file\'s', () => {
    const mine = { ...p0, gelukt: [entry('a', '2026-11-01'), entry('b', '2026-11-03')] };
    const file = parseBackup(backupFile({ ...p0, gelukt: [entry('b', '2026-11-02'), entry('c', '2026-11-04')] }, new Date()))!;
    expect(mergeBackup(mine, file).gelukt?.map((e) => [e.id, e.day])).toEqual([['a', '2026-11-01'], ['b', '2026-11-02'], ['c', '2026-11-04']]);
    expect(mergeAddsNothing(mine, mergeBackup(mine, file))).toBe(false);
    expect(mergeAddsNothing(mine, mergeBackup(mine, parseBackup(backupFile(mine, new Date()))!))).toBe(true);
    expect(replaceWithBackup(mine, file).gelukt?.map((e) => e.id)).toEqual(['b', 'c']);
    // Replacing would lose "a": the learner is asked once more.
    expect(replaceLoses(mine, file)).toBe(true);
    expect(replaceLoses(mine, { ...file, completed: mine.completed, gelukt: [...(file.gelukt ?? []), entry('a', '2026-11-01')] })).toBe(false);
    expect(mergeBackup(p0, parseBackup(backupFile(p0, new Date()))!).gelukt).toBeUndefined();
  });

  it('is learning progress: "Voortgang wissen" does not keep it (src/App.tsx onReset)', () => {
    const reset = readFileSync('src/App.tsx', 'utf8').match(/onReset=\{\(\) => \{([\s\S]*?)tab\('route'\)/)![1];
    expect(reset).toContain('...emptyProgress');
    expect(reset).not.toContain('gelukt');
    expect(emptyProgress.gelukt).toBeUndefined();
  });

  it('"Ja, gelukt" in the app keeps the sentence and opens the short moment (src/App.tsx)', () => {
    const app = readFileSync('src/App.tsx', 'utf8');
    expect(app).toMatch(/setProgress\(\(p\) => addGelukt\(p, line, today\)\)/);
    expect(app).toMatch(/replace\(\{ name: 'gelukt-done', n: geluktCount\(addGelukt\(progress, line, today\)\), nl: line\.nl \}\)/);
  });
});

describe('right after "Ja, gelukt": Bram says how many', () => {
  beforeAll(() => registerPack(nlPack));

  it('says the number in Dutch and in the help language (singular and plural)', () => {
    expect(geluktDoneNl(4)).toBe('Goed gedaan! Al 4 zinnen gelukt op het werk.');
    expect(geluktDoneNl(1)).toBe('Goed gedaan! Je eerste zin op het werk is gelukt.');
    expect(fillCount('geluktDoneN', 4).en).toBe('Well done! You have used 4 sentences at work.');
    expect(fillCount('geluktDoneN', 1).en).toBe('Well done! You used your first sentence at work.');
    expect(fillCount('geluktDoneN', 4, getHelpLanguage('pl')).help).toBe('Dobra robota! Już 4 zdania udały się w pracy.');
    expect(fillCount('geluktDoneN', 5, getHelpLanguage('pl')).help).toBe('Dobra robota! Już 5 zdań udało się w pracy.');
    expect(fillCount('geluktDoneN', 2, getHelpLanguage('de')).help).toBe('Gut gemacht! Schon 2 Sätze bei der Arbeit geschafft.');
    // The work-rules track: its own Dutch, the same as the Dutch line.
    expect(uiNl.geluktDoneN).toBe('Goed gedaan! Al {n} zinnen gelukt op het werk.');
    for (const src of helpLanguageSources) {
      const lang = getHelpLanguage(src.code, 'f');
      for (const n of [2, 3, 7, 12, 21]) expect(fillCount('geluktDoneN', n, lang).help, `${src.code} ${n}`).toContain(String(n));
    }
  });

  it('draws with one thing to tap (Verder), Bram, the sentence and where to find it; also right to left', () => {
    for (const [code, gender] of [['pl', undefined], ['ar', 'f'], ['ti', 'm'], ['nl', undefined]] as const) {
      const lang = getHelpLanguage(code, gender);
      const out = html(createElement(GeluktDonePage, { n: 4, nl: line.nl, lang, onDone: noop }));
      expect((out.match(/<button\b/g) ?? []).length, code).toBe(2); // the back arrow (chrome) and Verder
      expect(out).toContain('gelukt-done-go');
      expect(out).toContain(line.nl);
      expect(out).toContain('ch-bram');
      if (code === 'nl') expect(out).toContain('Goed gedaan! Al 4 zinnen gelukt op het werk.');
      if (code === 'ar') expect(out).toMatch(/class="screen gelukt-page gelukt-done-page" dir="rtl"/);
    }
  });
});

describe('Settings › Taal en ik › Gelukt op het werk', () => {
  beforeAll(() => registerPack(nlPack));
  const ctx = { helpLang: true, gender: false, preview: false, install: false, offline: false };

  it('is a row under "Mijn certificaten" only with at least one sentence, and a list page', () => {
    expect(settingsRows('me', ctx)).not.toContain('gelukt');
    const rows = settingsRows('me', { ...ctx, gelukt: true });
    expect(rows.indexOf('gelukt')).toBe(rows.indexOf('certificates') + 1);
    expect(settingsRows('me', { ...ctx, gelukt: true, rules: true })).toContain('gelukt');
    expect(SETTINGS_PARENT.gelukt).toBe('me');
    expect(SETTINGS_LIST_PAGES).toContain('gelukt');
  });

  const settings = (p: Progress, page?: 'me' | 'gelukt') => html(createElement(Settings, {
    progress: p, lang: getHelpLanguage(p.helpLang === 'nl' ? 'nl' : 'pl'), page, onPage: noop, onReturn: noop, onLang: noop, onGender: noop, onSector: noop,
    onTheme: noop, onTextSize: noop, onVoice: noop, onQuiet: noop, onReset: noop, onRestore: noop, onCertificate: noop,
  }));

  it('shows the row with the number in the list, and none without sentences', () => {
    const p = { ...p0, helpLang: 'pl' as const, gelukt: [entry('a', '2026-11-01'), entry('b', '2026-11-02'), entry('c', '2026-11-03')] };
    const me = settings(p, 'me');
    expect(me).toContain('Gelukt op het werk');
    expect(me).toMatch(/Gelukt op het werk[\s\S]*?<span class="set-row-value">3<\/span>/);
    expect(settings({ ...p, gelukt: [] }, 'me')).not.toContain('Gelukt op het werk');
    expect(settings({ ...p, gelukt: undefined }, 'me')).not.toContain('Gelukt op het werk');
  });

  it('lists the sentences newest first, with the meaning and a speaker (Werkregels: Dutch only)', () => {
    const entries = [{ ...entry('a', '2026-11-01'), id: line.id, nl: line.nl, en: line.en }, entry('b', '2026-11-03', 'Zin b.')];
    const pl = getHelpLanguage('pl');
    const out = html(createElement(GeluktList, { entries, lang: pl }));
    expect(out.indexOf('Zin b.')).toBeLessThan(out.indexOf(line.nl));
    expect(out).toContain(pl.gloss[line.id]);
    expect((out.match(/class="gelukt-row"/g) ?? []).length).toBe(2);
    expect((out.match(/<button\b/g) ?? []).length).toBe(2); // one speaker per row, nothing else
    const nl = html(createElement(GeluktList, { entries, lang: getHelpLanguage('nl') }));
    expect(nl).not.toContain(line.en);
    expect(nl).not.toContain('gelukt-row-help');
    expect(nl).toContain('Deze zinnen heb je op je werk gezegd.');
  });
});
