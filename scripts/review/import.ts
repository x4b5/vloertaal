/**
 * npm run review:import -- <bestand.csv> [--check] [--taal pl] [--toch] [--datum 2026-11-03]
 *
 * A filled-in list back (docs/nakijken.md):
 *  - a translation list: the better texts go into src/i18n, the approved entries get
 *    "// nagekeken: <taal> <datum>", and review/vertaling-terug-<taal>.md says what happened
 *    (with the list "nog open"). With an error in the file nothing is written, unless --toch.
 *  - a facts list: nothing in the app changes. review/feiten-terug-<land>.md says what is right,
 *    what is not and the corrections.
 * --check: shows what would change, and writes nothing.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { isUtf8, parseCells } from './csv';
import { isLang } from './i18nSource';
import { importTaal, taalReport } from './taal';
import { importFeiten } from './feiten';
import { i18nSources } from './sources';

export function runImport(argv: string[], root: string, log: (s: string) => void = console.log): number {
  const file = argv.find((a, i) => !a.startsWith('--') && !['--taal', '--datum'].includes(argv[i - 1] ?? ''));
  const opt = (name: string) => {
    const i = argv.indexOf(name);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const check = argv.includes('--check');
  if (!file) {
    log('Geef het ingevulde bestand mee: npm run review:import -- review/terug/vertaling-pl.csv [--check]');
    return 2;
  }
  const bytes = readFileSync(file);
  if (!isUtf8(bytes)) {
    log(`${file} is niet opgeslagen als UTF-8: letters kunnen verloren zijn. Open het in Excel en kies "Opslaan als" › "CSV UTF-8", of download het uit Google Sheets als CSV.`);
    return 2;
  }
  const text = bytes.toString('utf8');
  const head = (parseCells(text)[0] ?? []).map((c) => c.trim());
  const outDir = join(root, 'review');
  const save = (name: string, md: string) => {
    if (check) return;
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, name), md);
    log(`Verslag: review/${name}`);
  };

  if (head.includes('klopt?')) {
    const r = importFeiten(text, basename(file));
    log(`Feiten (${r.land}): ${r.kloptNiet.length} klopt niet, ${r.klopt.length} klopt, ${r.zonderAntwoord.length} zonder ja of nee, ${r.leeg} niet beantwoord.`);
    for (const f of r.fouten) log(`  rij ${f.rij}: ${f.melding}`);
    log('In de app verandert niets: verwerk de correcties zelf, met het verslag.');
    if (check) log(r.md);
    save(`feiten-terug-${r.land.replace(/\W+/g, '-')}.md`, r.md);
    return 0;
  }

  const taal = opt('--taal');
  if (taal && !isLang(taal)) {
    log(`Onbekende taal: ${taal}.`);
    return 2;
  }
  const datum = opt('--datum') ?? new Date().toISOString().slice(0, 10);
  const sources = i18nSources(root);
  let r;
  try {
    r = importTaal(text, sources, { lang: taal && isLang(taal) ? taal : undefined, mark: (lang) => `nagekeken: ${lang} ${datum}`, toch: argv.includes('--toch') });
  } catch (e) {
    log((e as Error).message);
    return 2;
  }
  log(`Vertaling ${r.lang}: ${r.veranderd.length} veranderd, ${r.nagekeken.length} nagekeken, ${r.deels.length} deels, ${r.nogOpen.length} nog open, ${r.leeg} niet ingevuld, ${r.fouten.length} fouten.`);
  for (const c of r.veranderd) log(`  ${c.file}:${c.line} ${c.id}${c.vorm ? ` (${c.vorm})` : ''}\n    was: ${c.oud}\n    nu:  ${c.nieuw}`);
  for (const f of r.fouten) log(`  FOUT rij ${f.rij}, ${f.id}${f.vorm ? ` (${f.vorm})` : ''}: ${f.melding}`);
  if (r.tegengehouden) log('Er is niets geschreven, want er staan fouten in het bestand. Verbeter ze, of verwerk de goede rijen toch met --toch.');
  if (check) {
    log(`Droogloop: niets geschreven (${r.files.size} bestand${r.files.size === 1 ? '' : 'en'} zou${r.files.size === 1 ? '' : 'den'} veranderen).`);
    return r.fouten.length ? 1 : 0;
  }
  for (const [f, content] of r.files) writeFileSync(join(root, f), content);
  if (r.files.size) log(`Geschreven: ${[...r.files.keys()].join(', ')}. Draai daarna: npx vitest run tests/i18n.test.ts`);
  save(`vertaling-terug-${r.lang}.md`, taalReport(r, basename(file), false));
  return r.fouten.length ? 1 : 0;
}

if (process.argv[1] && /import\.ts$/.test(process.argv[1])) process.exitCode = runImport(process.argv.slice(2), process.cwd());
