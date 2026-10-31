/**
 * npm run review:export [-- --alles] [-- --taal pl,ro] [-- --uit <map>]
 *
 * Makes the lists for the volunteers (docs/nakijken.md), in review/ (not in git):
 *   review/vertaling-<taal>/vertaling-<taal>.csv + LEESMIJ.txt   one per help language
 *   review/feiten-<NL|BE>/feiten-<NL|BE>.csv + LEESMIJ.txt         one per country
 * Without --alles a translation list has only the texts with a mark ("nieuw, nalezen",
 * "nagelezen AI"); with --alles also the unmarked ones. Texts checked by a person
 * ("nagekeken: …") never come back.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { allEntries } from './files';
import { LANGS, isLang, type Lang } from './i18nSource';
import { taalRows, TAAL_COLUMNS } from './taal';
import { allFacts, feitenRows, FEITEN_COLUMNS, type ExpertPoint } from './feiten';
import { toCsv } from './csv';
import { leesmijFeiten, leesmijTaal, LANG_NL } from './leesmij';
import { contentSources } from './sources';

const args = process.argv.slice(2);
const opt = (name: string) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const root = process.cwd();
const uit = opt('--uit') ?? join(root, 'review');
const alles = args.includes('--alles');
const talen = (opt('--taal')?.split(',') ?? [...LANGS]).filter((l): l is Lang => {
  if (!isLang(l)) console.error(`Onbekende taal: ${l}. Kies uit: ${LANGS.join(', ')}.`);
  return isLang(l);
});

const write = (dir: string, file: string, text: string) => {
  mkdirSync(join(uit, dir), { recursive: true });
  writeFileSync(join(uit, dir, file), text);
};

const entries = allEntries(root);
console.log(`Vertalingen${alles ? ' (alles)' : ' (alleen gemarkeerd)'}:`);
for (const lang of talen) {
  const rows = taalRows(entries, lang, alles);
  const name = `vertaling-${lang}.csv`;
  write(`vertaling-${lang}`, name, toCsv(TAAL_COLUMNS, rows));
  write(`vertaling-${lang}`, 'LEESMIJ.txt', leesmijTaal(lang, name, rows.length));
  const top = rows.filter((r) => r.status === 'nieuw, nalezen').length;
  console.log(`  ${lang.padEnd(3)} ${String(rows.length).padStart(5)} rijen (${top} nieuw, nalezen) · ${LANG_NL[lang]}`);
}

const sources = contentSources(root);
const facts = allFacts(sources);
const points: ExpertPoint[] = JSON.parse(readFileSync(join(root, 'scripts/review/prioriteit.json'), 'utf8'));
console.log('Feiten:');
for (const land of ['NL', 'BE'] as const) {
  const { rows, nietGekoppeld } = feitenRows(facts, land, points, sources);
  const name = `feiten-${land}.csv`;
  const prio = rows.filter((r) => r.prioriteit).length;
  write(`feiten-${land}`, name, toCsv(FEITEN_COLUMNS, rows));
  write(`feiten-${land}`, 'LEESMIJ.txt', leesmijFeiten(land, name, rows.length, prio));
  console.log(`  ${land} ${String(rows.length).padStart(5)} feiten, waarvan ${prio} met prioriteit`);
  for (const p of nietGekoppeld) console.log(`     niet gekoppeld (geen id in de app): ${p.rapport}`);
}
console.log(`Klaar: ${uit}`);
