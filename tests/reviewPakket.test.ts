import { describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { parseCsv, toCsv } from '../scripts/review/csv';
import { formStatus, scanSource } from '../scripts/review/i18nSource';
import { allEntries, fileLang } from '../scripts/review/files';
import { importTaal, taalRows, TAAL_COLUMNS } from '../scripts/review/taal';
import { allFacts, feitenLijsten, feitenRows, FEITEN_COLUMNS, importFeiten, lijstOfId, LIJSTEN, type ExpertPoint } from '../scripts/review/feiten';
import { duur, leesmijFeiten, overzichtFeiten, rijenIn, SECONDS_PER_FACT, SECONDS_PER_PRIORITY, tijdVan } from '../scripts/review/leesmij';
import { contentSources, i18nSources } from '../scripts/review/sources';
import { runImport } from '../scripts/review/import';

// The review package (docs/nakijken.md): lists out for the volunteers, and back in.

const root = process.cwd();
const sources = i18nSources(root);
const entries = allEntries(root, sources);
const MARK = 'nagekeken: pl 2026-11-03';

/** The Polish list as a volunteer gets it, with `fill` applied to some rows, as a CSV text. */
function filled(fill: (r: Record<string, string>) => void, rows = taalRows(entries, 'pl')): string {
  const copy = rows.map((r) => ({ ...r }));
  copy.forEach(fill);
  return toCsv(TAAL_COLUMNS, copy);
}

const entry = (files: Map<string, string>, id: string, lang = 'pl') =>
  [...files].flatMap(([f, s]) => scanSource(f, s, fileLang(f))).find((e) => e.id === id && e.lang === lang)!;

describe('review package: the translation lists', { timeout: 60_000 }, () => {
  it('has one row for every marked text (every form), and none for the rest', () => {
    for (const lang of ['pl', 'ar', 'ti'] as const) {
      const rows = taalRows(entries, lang);
      const want = entries
        .filter((e) => e.lang === lang)
        .flatMap((e) => e.forms.filter((f) => ['nieuw, nalezen', 'nagelezen AI'].includes(formStatus(e, f.form))).map((f) => `${e.id}|${f.form}`));
      expect(rows.map((r) => `${r.id}|${r.vorm}`).sort()).toEqual(want.sort());
      expect(rows.length, lang).toBeGreaterThan(500);
      // Every row says what it is: the English, and a place in plain words.
      expect(rows.filter((r) => !r.engels || !r.waar), lang).toEqual([]);
    }
    // With --alles: every text of the language.
    expect(taalRows(entries, 'pl', true).length).toBe(entries.filter((e) => e.lang === 'pl').reduce((n, e) => n + e.forms.length, 0));
  });

  it('puts rights and safety first, and the empty columns stay empty', () => {
    const rows = taalRows(entries, 'pl');
    expect(rows[0].waar).toMatch(/Veilig|Regels en rechten|Taal ›/);
    const firstScreen = rows.findIndex((r) => r.id.startsWith('ui.'));
    const lastSafety = rows.map((r) => r.waar).lastIndexOf('Taal › Veiligheid › woord');
    expect(lastSafety).toBeLessThan(firstScreen);
    expect(rows.every((r) => r['goed?'] === '' && r['beter zo'] === '' && r.opmerking === '')).toBe(true);
  });

  it('writes a CSV that Excel opens: a BOM, semicolons, quotes; and reads back Excel and Google Sheets files', () => {
    const csv = toCsv(['a', 'b'], [{ a: 'x;y', b: 'een "quote"' }]);
    expect(csv.startsWith('﻿"a";"b"\r\n')).toBe(true);
    expect(parseCsv(csv).rows[0]).toMatchObject({ a: 'x;y', b: 'een "quote"' });
    // Google Sheets: commas, no BOM, no quotes where none are needed.
    expect(parseCsv('a,b\n1,"2,3"\n').rows[0]).toMatchObject({ a: '1', b: '2,3' });
  });

  it('round trip: export, one better text, import changes only that text and marks it', () => {
    const target = taalRows(entries, 'pl').find((r) => r.vorm === '' && r.status === 'nieuw, nalezen' && !/\{/.test(r.vertaling))!;
    const csv = filled((r) => {
      if (r.id === target.id) r['beter zo'] = `${target.vertaling} (lepiej)`;
    });
    const r = importTaal(csv, sources, { mark: MARK });
    expect(r.lang).toBe('pl');
    expect(r.fouten).toEqual([]);
    expect(r.veranderd).toHaveLength(1);
    expect(r.nagekeken).toEqual([target.id]);
    const file = r.veranderd[0].file;
    expect([...r.files.keys()]).toEqual([file]);
    const after = entry(r.files, target.id);
    expect(after.forms[0].value).toBe(`${target.vertaling} (lepiej)`);
    expect(formStatus(after, '')).toBe('nagekeken');
    const line = r.files.get(file)!.split('\n')[after.line - 1];
    expect(line).toContain(`// ${MARK}`);
    expect(line).not.toContain('nalezen');
    // Nothing else in the file changed: only that line differs.
    const a = sources.get(file)!.split('\n');
    const b = r.files.get(file)!.split('\n');
    expect(b.length).toBe(a.length);
    expect(a.filter((l, i) => l !== b[i])).toHaveLength(1);
    // The next export leaves it out.
    const next = taalRows([...r.files].flatMap(([f, s]) => scanSource(f, s, fileLang(f))), 'pl');
    expect(next.some((x) => x.id === target.id)).toBe(false);
  });

  it('keeps gender forms whole: one form changes, the others and the braces stay', () => {
    const rows = taalRows(entries, 'pl');
    const id = rows.find((r) => r.vorm === 'f' && rows.some((x) => x.id === r.id && x.vorm === 'm') && rows.some((x) => x.id === r.id && x.vorm === 'x'))!.id;
    const before = entry(sources, id);
    const csv = filled((r) => {
      if (r.id !== id) return;
      r['goed?'] = 'ja';
      if (r.vorm === 'f') r['beter zo'] = `${r.vertaling} Tak.`;
    });
    const r = importTaal(csv, sources, { mark: MARK });
    expect(r.fouten).toEqual([]);
    const after = entry(r.files, id);
    expect(after.forms.map((f) => f.form)).toEqual(before.forms.map((f) => f.form));
    expect(after.forms.find((f) => f.form === 'm')!.value).toBe(before.forms.find((f) => f.form === 'm')!.value);
    expect(after.forms.find((f) => f.form === 'x')!.value).toBe(before.forms.find((f) => f.form === 'x')!.value);
    expect(after.forms.find((f) => f.form === 'f')!.value).toBe(`${before.forms.find((f) => f.form === 'f')!.value} Tak.`);
    expect(r.nagekeken).toEqual([id]);
  });

  it('an x form that alone had a mark gets "x: nagekeken", the other forms stay as they were', () => {
    const rows = taalRows(entries, 'pl');
    const x = rows.find((r) => r.vorm === 'x' && !rows.some((o) => o.id === r.id && o.vorm === 'm'))!;
    const r = importTaal(filled((row) => row.id === x.id && (row['goed?'] = 'ja')), sources, { mark: MARK });
    const after = entry(r.files, x.id);
    expect(formStatus(after, 'x')).toBe('nagekeken');
    expect(formStatus(after, 'm')).toBe('ongemarkeerd');
    expect(after.comments.map((c) => c.text).join(' ')).toContain(`x: ${MARK}`);
  });

  it('keeps placeholders whole: a better text without {n} is refused, and then nothing is written', () => {
    const all = taalRows(entries, 'pl', true);
    const ph = all.find((r) => /\{n\}/.test(r.vertaling))!;
    const ok = all.find((r) => r.id !== ph.id && r.vorm === '')!;
    const csv = filled((r) => {
      if (r.id === ph.id && r.vorm === ph.vorm) r['beter zo'] = r.vertaling.replace('{n}', '5');
      if (r.id === ok.id) r['beter zo'] = `${r.vertaling}!`;
    }, all);
    const r = importTaal(csv, sources, { mark: MARK });
    expect(r.fouten).toHaveLength(1);
    expect(r.fouten[0].melding).toMatch(/plekhouders/);
    expect(r.files.size).toBe(0);
    // With --toch the good row goes in, the bad one not.
    const toch = importTaal(csv, sources, { mark: MARK, toch: true });
    expect(toch.veranderd.map((c) => c.id)).toEqual([ok.id]);
  });

  it('refuses an unknown id, a wrong form and an answer it does not understand', () => {
    const all = taalRows(entries, 'pl');
    const rows = all.slice(0, 40);
    const extra = [
      { ...all[40], id: 'c.bestaatniet', 'beter zo': 'x' },
      { ...all[41], vorm: 'q', 'goed?': 'ja' },
      { ...all[42], 'goed?': 'misschien' },
    ];
    const r = importTaal(toCsv(TAAL_COLUMNS, [...rows, ...extra]), sources, { mark: MARK });
    expect(r.fouten.map((f) => f.melding)).toEqual([
      expect.stringMatching(/c\.bestaatniet.*bestaat niet/),
      expect.stringMatching(/vorm "q" bestaat niet/),
      expect.stringMatching(/begrijp ik niet/),
    ]);
    expect(r.files.size).toBe(0);
  });

  it('"nee" without a better text: the text stays, and it is on the list "nog open"', () => {
    const row = taalRows(entries, 'pl')[3];
    const r = importTaal(filled((x) => x.id === row.id && x.vorm === row.vorm && ((x['goed?'] = 'nee'), (x.opmerking = 'te lang'))), sources, { mark: MARK });
    expect(r.files.size).toBe(0);
    expect(r.nogOpen).toEqual([{ id: row.id, vorm: row.vorm, vertaling: row.vertaling, opmerking: 'te lang' }]);
  });

  it('refuses a row whose text changed in the app since the export', () => {
    const row = taalRows(entries, 'pl')[5];
    const r = importTaal(filled((x) => x.id === row.id && x.vorm === row.vorm && ((x.vertaling = `${x.vertaling} (oud)`), (x['goed?'] = 'ja'))), sources, { mark: MARK });
    expect(r.fouten[0].melding).toMatch(/veranderd sinds/);
  });
});

describe('review package: the ⚖️ facts', { timeout: 60_000 }, () => {
  const content = contentSources(root);
  const facts = allFacts(content);
  const points: ExpertPoint[] = JSON.parse(readFileSync(join(root, 'scripts/review/prioriteit.json'), 'utf8'));

  it('has every ⚖️ note once, per country, with the report points on top', () => {
    const notes = [...content.values()].reduce((n, s) => n + s.split('\n').filter((l) => /(^|[^`])\/\/\s*⚖️\s*check\b/.test(l) && !/^\s*\*/.test(l)).length, 0);
    expect(facts).toHaveLength(notes);
    for (const land of ['NL', 'BE'] as const) {
      const { rows, nietGekoppeld } = feitenRows(facts, land, points, content);
      expect(nietGekoppeld).toEqual([]);
      const prio = rows.filter((r) => r.prioriteit === 'prioriteit').length;
      expect(prio).toBe(points.filter((p) => p.land === land).length);
      expect(rows.slice(0, prio).every((r) => r.prioriteit === 'prioriteit')).toBe(true);
      expect(rows.length - prio).toBe(facts.filter((f) => f.land === land).length);
      expect(rows.every((r) => r.bewering && r['bestand:regel'])).toBe(true);
    }
    // The Belgian ones are in the Belgian list.
    expect(facts.filter((f) => /\/be\/|taalBe/.test(f.file)).every((f) => f.land === 'BE')).toBe(true);
  });

  it('the way back changes no content, and writes a summary with the corrections', () => {
    const { rows } = feitenRows(facts, 'BE', points, content);
    rows[0]['klopt?'] = 'nee';
    rows[0].correctie = 'Sinds 2027 geldt dit niet meer.';
    rows[0]['bron expert'] = 'wet van 1 januari 2027';
    rows[1]['klopt?'] = 'ja';
    const csv = toCsv(FEITEN_COLUMNS, rows);
    const r = importFeiten(csv, 'feiten-BE.csv');
    expect(r.kloptNiet).toHaveLength(1);
    expect(r.klopt).toHaveLength(1);
    expect(r.md).toContain('Sinds 2027 geldt dit niet meer.');
    expect(r.md).toContain('wet van 1 januari 2027');

    // Through the command, on a copy: the content files stay byte for byte the same.
    const dir = mkdtempSync(join(tmpdir(), 'vloertaal-review-'));
    cpSync(join(root, 'src'), join(dir, 'src'), { recursive: true });
    mkdirSync(join(dir, 'terug'));
    writeFileSync(join(dir, 'terug/feiten-BE.csv'), csv);
    const before = contentSources(dir);
    const beforeI18n = i18nSources(dir);
    const log: string[] = [];
    expect(runImport([join(dir, 'terug/feiten-BE.csv')], dir, (s) => log.push(s))).toBe(0);
    expect(contentSources(dir)).toEqual(before);
    expect(i18nSources(dir)).toEqual(beforeI18n);
    expect(existsSync(join(dir, 'review/feiten-terug-BE.md'))).toBe(true);
    expect(readFileSync(join(dir, 'review/feiten-terug-BE.md'), 'utf8')).toContain('Klopt niet');
  });

  it('the command imports a translation list on a copy, and --check writes nothing', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vloertaal-review-'));
    cpSync(join(root, 'src'), join(dir, 'src'), { recursive: true });
    const row = taalRows(entries, 'pl').find((r) => r.vorm === '' && !/\{/.test(r.vertaling))!;
    writeFileSync(join(dir, 'pl.csv'), filled((r) => r.id === row.id && (r['beter zo'] = `${r.vertaling} ok`)));
    const before = i18nSources(dir);
    expect(runImport([join(dir, 'pl.csv'), '--check'], dir, () => {})).toBe(0);
    expect(i18nSources(dir)).toEqual(before);
    expect(existsSync(join(dir, 'review'))).toBe(false);
    expect(runImport([join(dir, 'pl.csv'), '--datum', '2026-11-03'], dir, () => {})).toBe(0);
    const after = i18nSources(dir);
    const changed = [...after].filter(([f, s]) => before.get(f) !== s).map(([f]) => f);
    expect(changed).toHaveLength(1);
    expect(after.get(changed[0])).toContain(`${row.vertaling} ok`);
    expect(after.get(changed[0])).toContain('// nagekeken: pl 2026-11-03');
    expect(existsSync(join(dir, 'review/vertaling-terug-pl.md'))).toBe(true);
  });
});

describe('review package: the facts in three lists, by harm (A, B, C)', { timeout: 120_000 }, () => {
  const content = contentSources(root);
  const facts = allFacts(content);
  const points: ExpertPoint[] = JSON.parse(readFileSync(join(root, 'scripts/review/prioriteit.json'), 'utf8'));
  const A_FILE = /content\/regels\/(help|askWho)\.ts$|content\/regels\/(be\/)?units\/(ziek|rechten|loon|contract|veilig)\.ts$/;
  const firstFile = (r: Record<string, string>) => r['bestand:regel'].split(';')[0].replace(/:\d+$/, '').trim();

  it('puts every fact in exactly one list: A = ziek, rechten, loon, contract, veilig and help; B = the rest of Werkregels; C = tips and Taal', () => {
    for (const land of ['NL', 'BE'] as const) {
      const { rows } = feitenRows(facts, land, points, content);
      const { lijsten, nietGekoppeld } = feitenLijsten(facts, land, points, content);
      expect(nietGekoppeld).toEqual([]);
      // Together exactly the rows of the country, each once.
      const all = LIJSTEN.flatMap((l) => lijsten[l]);
      expect(all).toHaveLength(rows.length);
      expect(new Set(all.map((r) => `${r['bestand:regel']}|${r.bewering}`)).size).toBe(new Set(rows.map((r) => `${r['bestand:regel']}|${r.bewering}`)).size);
      for (const l of LIJSTEN) {
        expect(lijsten[l].length, `${land} ${l}`).toBeGreaterThan(30);
        expect(lijsten[l].every((r) => r.lijst === l && r.land === land)).toBe(true);
        // Numbered from 1 in each list, the points of the reports on top.
        expect(lijsten[l].map((r) => r.nr)).toEqual(lijsten[l].map((_, i) => String(i + 1)));
        const prio = lijsten[l].filter((r) => r.prioriteit).length;
        expect(lijsten[l].slice(0, prio).every((r) => r.prioriteit === 'prioriteit'), `${land} ${l}`).toBe(true);
      }
      // By the file: a fact (not a report point) is in A when its file is one of list A.
      for (const r of all.filter((x) => !x.prioriteit)) {
        const f = firstFile(r);
        const want = A_FILE.test(f) ? 'A' : r.spoor === 'Werkregels' || r.spoor === 'disclaimer' ? 'B' : 'C';
        expect(r.lijst, `${r['bestand:regel']}`).toBe(want);
      }
      expect(lijsten.C.filter((r) => !r.prioriteit).every((r) => r.spoor === 'Taal' || r.spoor === 'overig')).toBe(true);
    }
  });

  it('a report point goes to the list of the most harmful place it names', () => {
    expect(lijstOfId('r.be.l.ziek.2')).toBe('A');
    expect(lijstOfId('r.l.contract.3')).toBe('A');
    expect(lijstOfId('h.be.unia')).toBe('A');
    expect(lijstOfId('r.l.tijd.3')).toBe('B');
    expect(lijstOfId('rg.zl.r.l.5')).toBe('B');
    expect(lijstOfId('c.illness')).toBe('C');
    expect(lijstOfId('g.bouw.steiger')).toBe('C');
    // "r.be.l.tijd.3 / loon.3": tijd is B, loon is A, so the point is in A.
    const { lijsten } = feitenLijsten(facts, 'BE', points, content);
    const p = lijsten.A.find((r) => r.prioriteit && /r\.be\.l\.tijd\.3/.test(r.onderwerp));
    expect(p).toBeDefined();
    expect(lijsten.B.some((r) => r.prioriteit && /r\.be\.l\.tijd\.3/.test(r.onderwerp))).toBe(false);
  });

  it('starts list A with rechten and the help rows, and has the new lessons for labour migrants in A (and U2 in B)', () => {
    for (const land of ['NL', 'BE'] as const) {
      const { lijsten } = feitenLijsten(facts, land, points, content);
      const plain = lijsten.A.filter((r) => !r.prioriteit).map(firstFile);
      const rank = (f: string) => (/rechten\.ts$/.test(f) ? 0 : /(help|askWho)\.ts$/.test(f) ? 1 : /ziek\.ts$/.test(f) ? 2 : /loon\.ts$/.test(f) ? 3 : /contract\.ts$/.test(f) ? 4 : 5);
      const ranks = plain.map(rank);
      expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
      const p = land === 'BE' ? 'r.be.l.' : 'r.l.';
      for (const id of ['ziek.4', 'contract.5', 'loon.4']) expect(lijsten.A.some((r) => r.onderwerp.includes(`(${p}${id}`)), `${land} ${id}`).toBe(true);
      expect(lijsten.B.some((r) => r.onderwerp.includes(`(${p}geld.8`)), `${land} geld.8`).toBe(true);
    }
  });

  it('says per list how many facts and how long, and what fits in 1 hour (the column "uur")', () => {
    for (const land of ['NL', 'BE'] as const) {
      const { lijsten } = feitenLijsten(facts, land, points, content);
      const A = lijsten.A;
      const first = rijenIn(A, 3600);
      expect(first).toBeGreaterThan(20);
      expect(A.filter((r) => r.uur === '1')).toHaveLength(first);
      expect(A.slice(0, first).every((r) => r.uur === '1')).toBe(true);
      // The hours go up from the top, and the last one is about the time of the whole list.
      expect(A.map((r) => Number(r.uur))).toEqual(A.map((r) => Number(r.uur)).sort((a, b) => a - b));
      expect(Number(A.at(-1)!.uur)).toBe(Math.ceil(tijdVan(A) / 3600));
      expect(tijdVan(A)).toBe(A.reduce((t, r) => t + (r.prioriteit ? SECONDS_PER_PRIORITY : SECONDS_PER_FACT), 0));
      const text = leesmijFeiten(land, 'A', `feiten-${land}-A.csv`, lijsten);
      expect(text).toContain(`feiten-${land}-A.csv`);
      expect(text).toContain(`Heb je maar 1 uur?`);
      expect(text).toContain(`de eerste ${first} rijen`);
      for (const l of overzichtFeiten(lijsten)) expect(text).toContain(l);
      expect(overzichtFeiten(lijsten)[0]).toBe(`lijst A: ${A.length} feiten, ${duur(tijdVan(A))}`);
      // List B and C send the expert to A first.
      expect(leesmijFeiten(land, 'B', `feiten-${land}-B.csv`, lijsten)).toContain('Lijst A is belangrijker');
    }
  });

  it('the command writes three lists per country where --uit says, and nothing in review/', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vloertaal-export-'));
    const tsx = join(root, 'node_modules/.bin/tsx');
    const out = execFileSync(tsx, ['scripts/review/export.ts', '--uit', dir, '--taal', 'pl'], { cwd: root, encoding: 'utf8' });
    for (const land of ['NL', 'BE']) {
      for (const l of LIJSTEN) {
        const csv = join(dir, `feiten-${land}-${l}`, `feiten-${land}-${l}.csv`);
        expect(existsSync(csv), csv).toBe(true);
        expect(existsSync(join(dir, `feiten-${land}-${l}`, 'LEESMIJ.txt'))).toBe(true);
        const { columns, rows } = parseCsv(readFileSync(csv, 'utf8'));
        expect(columns).toEqual([...FEITEN_COLUMNS]);
        expect(rows.every((r) => r.lijst === l)).toBe(true);
        expect(out).toMatch(new RegExp(`${land} ${l}\\s+${rows.length} feiten, ongeveer`));
      }
      expect(existsSync(join(dir, `feiten-${land}`))).toBe(false);
    }
    expect(out).toMatch(/NL A .* in 1 uur de eerste \d+/);
  });

  it('a filled-in list A comes back as its own summary, with the list in it', () => {
    const { lijsten } = feitenLijsten(facts, 'NL', points, content);
    const rows = lijsten.A.map((r) => ({ ...r }));
    rows[0]['klopt?'] = 'nee';
    rows[0].correctie = 'Dit is anders.';
    const r = importFeiten(toCsv(FEITEN_COLUMNS, rows), 'feiten-NL-A.csv');
    expect(r.land).toBe('NL');
    expect(r.lijst).toBe('A');
    expect(r.md).toContain('# Feiten terug: NL, lijst A');
    expect(r.md).toContain('### A1.');
    const dir = mkdtempSync(join(tmpdir(), 'vloertaal-review-'));
    writeFileSync(join(dir, 'feiten-NL-A.csv'), toCsv(FEITEN_COLUMNS, rows));
    expect(runImport([join(dir, 'feiten-NL-A.csv')], dir, () => {})).toBe(0);
    expect(existsSync(join(dir, 'review/feiten-terug-NL-A.md'))).toBe(true);
  });
});
