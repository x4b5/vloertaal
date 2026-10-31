/**
 * The ⚖️ facts list per country (docs/nakijken.md): out to a CSV for an expert, and back as a
 * summary in Markdown. The way back never changes the content: changing a fact stays work for a
 * person (or for Claude, with that summary).
 */
import { toCsv, parseCsv, type Row } from './csv';
import { bestSentence, overlap, scanFacts, type Fact, type Land } from './facts';
import { idIndex } from './content';
import { rulesUnits, sectorRulesUnits } from '../../src/content/regels';
import { beRulesUnits, beSectorRulesUnits } from '../../src/content/regels/be';
import { HELP_ROWS, HELP_ROWS_BE } from '../../src/content/regels/help';
import { allRegionUnits } from '../../src/content/regio';
import type { RuleUnit } from '../../src/content/regels/types';
import type { Unit } from '../../src/content/types';
import { answer } from './taal';

export const FEITEN_COLUMNS = ['nr', 'prioriteit', 'land', 'spoor', 'onderwerp', 'bewering', 'tekst in de app', 'bron', 'twijfel van de maker', 'bestand:regel', 'klopt?', 'correctie', 'bron expert'] as const;

/** A point of a "Voor de expert" list in a content report (scripts/review/prioriteit.json). */
export interface ExpertPoint {
  land: Land;
  /** The ids it is about (empty: not linked to a place in the app). */
  ids: string[];
  bewering: string;
  bron: string;
  twijfel: string;
  rapport: string;
}

/** The places of the Werkregels lessons and steps, and the help rows: id → "Werkregels › Loon en loonbrief › Brutoloon en nettoloon". */
function places(): Map<string, string> {
  const map = new Map<string, string>();
  const rules = (units: (RuleUnit | Unit)[]) => {
    for (const u of units) {
      map.set(u.id, `Werkregels › ${u.title}`);
      for (const l of u.lessons) {
        const at = `Werkregels › ${u.title} › ${l.title}`;
        map.set(l.id, at);
        for (const s of (l as { steps?: { id: string }[] }).steps ?? []) map.set(s.id, at);
      }
    }
  };
  rules([...rulesUnits, ...sectorRulesUnits, ...beRulesUnits, ...beSectorRulesUnits, ...allRegionUnits('regels')]);
  for (const r of HELP_ROWS) map.set(r.id, `Hulp › ${r.name}`);
  for (const r of HELP_ROWS_BE) if (!map.has(r.id) || r.id.startsWith('h.be.')) map.set(r.id, `Hulp (België) › ${r.name}`);
  for (const [id, info] of idIndex()) if (!map.has(id)) map.set(id, info.waar.replace(/ › tip, titel$/, ' › tip'));
  return map;
}

/** Where a fact is, in plain words. */
function onderwerpOf(f: Fact, at: Map<string, string>): string {
  const base = f.anker && (at.get(f.anker) ?? at.get(f.anker.replace(/\.[a-z]+\d*$/, '')));
  if (base) return `${base} (${f.anker})`;
  if (f.anker.startsWith('rg.zl.k.')) return `Regio Zuid-Limburg › Sociale kaart (${f.anker})`;
  if (f.spoor === 'help') return f.anker ? `Wie kan je helpen? › ${f.anker}` : 'Wie kan je helpen?';
  if (f.spoor === 'disclaimer') return 'Slotzin onder een regel of tip';
  return f.anker ? `${f.file.replace(/^src\/content\//, '')} (${f.anker})` : f.file.replace(/^src\/content\//, '');
}

/** The ids a report point names: "r.be.l.tijd.3 / loon.3" → r.be.l.tijd.3 and r.be.l.loon.3; "h.112 (BE)" → h.112. */
export function idsOf(cell: string): string[] {
  const parts = cell.split(/\s*[,/]\s*|\s+en\s+/).map((p) => p.replace(/\(.*?\)/g, '').trim()).filter(Boolean);
  const out: string[] = [];
  for (const p of parts) {
    if (!/^[a-z][\w-]*(\.[\w-]+)+$/.test(p)) continue;
    const prev = out[out.length - 1];
    // "loon.3" after "r.be.l.tijd.3": the same start.
    if (prev && p.split('.').length === 2 && prev.split('.').length > 2) out.push(prev.split('.').slice(0, -2).concat(p).join('.'));
    else out.push(p);
  }
  return out;
}

/** The tables "Voor de expert" in a content report (Markdown): one point per row. */
export function parseExpertTables(md: string, rapport: string, land: (ids: string[]) => Land): ExpertPoint[] {
  const out: ExpertPoint[] = [];
  const at = md.search(/^## Voor de expert/m);
  if (at < 0) return out;
  const section = md.slice(at).split(/\n## /)[0];
  const rows = section.split('\n').filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l));
  const head = rows.shift()?.split('|').map((c) => c.trim().toLowerCase()) ?? [];
  const col = (name: RegExp) => head.findIndex((c) => name.test(c));
  const [ci, cb, cs, ct] = [col(/^id$/), col(/^bewering/), col(/^bron$/), col(/^twijfel$/)];
  for (const r of rows) {
    const cells = r.split('|').map((c) => c.trim());
    const ids = idsOf(cells[ci] ?? '');
    out.push({ land: land(ids), ids, bewering: cells[cb] ?? '', bron: cells[cs] ?? '', twijfel: cells[ct] ?? '', rapport: `${rapport}: ${cells[ci]}` });
  }
  return out;
}

/** Every ⚖️ fact in these source files (path → content). */
export const allFacts = (sources: Map<string, string>): Fact[] => [...sources].flatMap(([file, src]) => scanFacts(file, src));

/** The rows for one country: the report points first ("prioriteit"), then every fact in course order of the files. */
export function feitenRows(facts: Fact[], land: Land, points: ExpertPoint[], sources: Map<string, string>): { rows: Row[]; nietGekoppeld: ExpertPoint[] } {
  const at = places();
  // Taal first, then Werkregels, then the help rows and the closing lines; within those, by file and line.
  const SPOOR = ['Taal', 'Werkregels', 'help', 'disclaimer', 'overig'];
  const mine = facts.filter((f) => f.land === land).sort((a, b) => SPOOR.indexOf(a.spoor) - SPOOR.indexOf(b.spoor) || a.file.localeCompare(b.file) || a.line - b.line);
  const rows: Row[] = [];
  const nietGekoppeld: ExpertPoint[] = [];
  const where = (id: string): string => {
    // The content first: a component may name the id too (src/components).
    const files = [...sources.keys()].sort((a, b) => Number(!a.startsWith('src/content/')) - Number(!b.startsWith('src/content/')));
    for (const file of files) {
      const src = sources.get(file)!;
      const i = src.indexOf(`'${id}'`);
      if (i >= 0) return `${file}:${src.slice(0, i).split('\n').length}`;
    }
    return '';
  };
  for (const p of points.filter((x) => x.land === land)) {
    // A Belgian id that does not exist ("be.c.respect"): the tip is the same in both countries, so its Dutch id.
    const known = (id: string) => mine.some((x) => x.anker === id || x.anker.startsWith(`${id}.`)) || !!where(id);
    const ids = p.ids.map((id) => (id.startsWith('be.') && !known(id) ? id.slice(3) : id));
    const linked = ids.flatMap((id) => {
      const f = mine.find((x) => x.anker === id || x.anker.startsWith(`${id}.`));
      const place = f ? `${f.file}:${f.line}` : where(id);
      return place ? [{ id, f, place }] : [];
    });
    if (!linked.length) {
      nietGekoppeld.push(p);
      continue;
    }
    const first = linked[0];
    // The note that says this point best (the report may say it in Dutch, the note in English), and its sentence.
    const near = mine.filter((x) => linked.some((l) => x.anker === l.id || x.anker.startsWith(`${l.id}.`)));
    const best = near.map((x) => ({ x, s: overlap(`${p.bewering} ${p.bron}`, `${x.bewering} ${x.bron}`) })).sort((a, b) => b.s - a.s)[0];
    let tekst = bestSentence(p.bewering, [...new Set(near.flatMap((x) => x.kandidaten))]);
    if (best && best.s >= 3) {
      tekst = best.x.tekst || tekst;
      const i = linked.findIndex((l) => best.x.anker === l.id || best.x.anker.startsWith(`${l.id}.`));
      if (i >= 0) linked[i].place = `${best.x.file}:${best.x.line}`;
    }
    rows.push({
      prioriteit: 'prioriteit',
      land,
      spoor: first.f?.spoor ?? (first.id.startsWith('r.') ? 'Werkregels' : first.id.startsWith('h.') ? 'help' : 'Taal'),
      onderwerp: linked.map((l) => (at.get(l.id) ? `${at.get(l.id)} (${l.id})` : l.id.startsWith('g.') ? `Geluidsscène (${l.id})` : l.id)).join('; '),
      bewering: p.bewering,
      'tekst in de app': tekst,
      bron: p.bron,
      'twijfel van de maker': p.twijfel,
      'bestand:regel': linked.map((l) => l.place).join('; '),
    });
  }
  for (const f of mine) {
    rows.push({
      prioriteit: '',
      land,
      spoor: f.spoor,
      onderwerp: onderwerpOf(f, at),
      bewering: f.bewering,
      'tekst in de app': f.tekst,
      bron: f.bron,
      'twijfel van de maker': '',
      'bestand:regel': `${f.file}:${f.line}`,
    });
  }
  rows.forEach((r, i) => (r.nr = String(i + 1)));
  for (const r of rows) for (const c of ['klopt?', 'correctie', 'bron expert']) r[c] = '';
  return { rows, nietGekoppeld };
}

export const feitenCsv = (rows: Row[]): string => toCsv(FEITEN_COLUMNS, rows);

/* ---- Back in: only a summary ---- */

export interface FeitenImport {
  land: string;
  klopt: Row[];
  kloptNiet: Row[];
  /** A correction or a source, but no ja or nee. */
  zonderAntwoord: Row[];
  leeg: number;
  fouten: { rij: string; melding: string }[];
  md: string;
}

/** Reads a filled-in facts list and writes what the expert said, in Markdown. It changes nothing in the app. */
export function importFeiten(csvText: string, bestand: string): FeitenImport {
  const { columns, rows } = parseCsv(csvText);
  const missing = ['nr', 'bewering', 'klopt?', 'correctie'].filter((c) => !columns.includes(c));
  if (missing.length) throw new Error(`Dit is geen feitenlijst: de kolom${missing.length > 1 ? 'men' : ''} ${missing.map((c) => `"${c}"`).join(', ')} ontbreek${missing.length > 1 ? 'en' : 't'}.`);
  const lands = [...new Set(rows.map((r) => (r.land ?? '').trim()).filter(Boolean))];
  const out: FeitenImport = { land: lands.join('+') || 'onbekend', klopt: [], kloptNiet: [], zonderAntwoord: [], leeg: 0, fouten: [], md: '' };
  for (const r of rows) {
    const a = answer(r['klopt?']);
    const extra = (r.correctie ?? '').trim() || (r['bron expert'] ?? '').trim();
    if (a === null) out.fouten.push({ rij: r._rij, melding: `"${r['klopt?']}" in "klopt?" begrijp ik niet (ja of nee). De rij staat bij "zonder antwoord".` });
    if (a === 'ja') out.klopt.push(r);
    else if (a === 'nee') out.kloptNiet.push(r);
    else if (extra || a === null) out.zonderAntwoord.push(r);
    else out.leeg++;
  }
  const item = (r: Row) => {
    const lines = [`### ${r.nr}. ${r.onderwerp ?? ''}${r.prioriteit ? ' (prioriteit)' : ''}`, '', `- bewering: ${r.bewering}`];
    if (r['tekst in de app']) lines.push(`- tekst in de app: ${r['tekst in de app']}`);
    if (r.bron) lines.push(`- bron in de noot: ${r.bron}`);
    if (r['bestand:regel']) lines.push(`- waar: \`${r['bestand:regel']}\``);
    if ((r.correctie ?? '').trim()) lines.push(`- **correctie:** ${r.correctie.trim()}`);
    if ((r['bron expert'] ?? '').trim()) lines.push(`- **bron expert:** ${r['bron expert'].trim()}`);
    return [...lines, ''].join('\n');
  };
  const md = [
    `# Feiten terug: ${out.land}`,
    '',
    `Bestand: ${bestand}. Er is niets in de app veranderd: verwerk de correcties zelf (of met Claude), en werk dan de ⚖️-noot bij.`,
    '',
    `- klopt niet: ${out.kloptNiet.length}`,
    `- klopt: ${out.klopt.length}`,
    `- zonder ja of nee, met een opmerking: ${out.zonderAntwoord.length}`,
    `- niet beantwoord: ${out.leeg}`,
    '',
  ];
  if (out.fouten.length) md.push('## Meldingen', '', ...out.fouten.map((f) => `- rij ${f.rij}: ${f.melding}`), '');
  if (out.kloptNiet.length) md.push('## Klopt niet', '', ...out.kloptNiet.map(item));
  if (out.zonderAntwoord.length) md.push('## Zonder ja of nee', '', ...out.zonderAntwoord.map(item));
  if (out.klopt.length) {
    md.push('## Klopt', '');
    for (const r of out.klopt) md.push(`- ${r.nr}. ${r.onderwerp ?? ''} \`${r['bestand:regel'] ?? ''}\`${(r.correctie ?? '').trim() ? `: ${r.correctie.trim()}` : ''}${(r['bron expert'] ?? '').trim() ? ` (bron: ${r['bron expert'].trim()})` : ''}`);
    md.push('');
  }
  out.md = md.join('\n');
  return out;
}
