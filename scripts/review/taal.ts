/**
 * The translation list per help language (docs/nakijken.md): out to a CSV, and back into src/i18n.
 * Everything here works on strings, so the tests can run it without touching the real files.
 */
import { toCsv, parseCsv, type Row } from './csv';
import { idIndex } from './content';
import { applyEdits, formStatus, literal, markChecked, placeholders, scanSource, type Edit, type Entry, type Lang, LANGS } from './i18nSource';
import { fileLang } from './files';

export const TAAL_COLUMNS = ['id', 'waar', 'land', 'nederlands', 'engels', 'vorm', 'vertaling', 'status', 'goed?', 'beter zo', 'opmerking'] as const;

const FORM_ORDER = ['', 'm', 'f', 'x', 'zero', 'one', 'two', 'few', 'many', 'other'];
const formRank = (f: string) => f.split('.').reduce((n, p) => n * 10 + FORM_ORDER.indexOf(p), 0);

/** The rows for one language. Without `alles`: only the texts no person has checked and that carry a mark. */
export function taalRows(entries: Entry[], lang: Lang, alles = false): Row[] {
  const idx = idIndex();
  const rows: (Row & { _rank: number; _order: number; _form: number })[] = [];
  for (const e of entries) {
    if (e.lang !== lang) continue;
    const info = idx.get(e.id);
    for (const f of e.forms) {
      const status = formStatus(e, f.form);
      if (status === 'nagekeken' || (!alles && status === 'ongemarkeerd')) continue;
      rows.push({
        id: e.id,
        waar: (info?.waar ?? 'Overig') + (f.wrapped ? ' (de app zet er de vaste slotzin achter)' : ''),
        land: info?.land ?? 'beide',
        nederlands: info?.nl ?? '',
        engels: info?.en ?? '',
        vorm: f.form,
        vertaling: f.value,
        status,
        'goed?': '',
        'beter zo': '',
        opmerking: '',
        _rank: info?.rank ?? 3,
        _order: info?.order ?? 1e9,
        _form: formRank(f.form),
      });
    }
  }
  rows.sort((a, b) => a._rank - b._rank || a._order - b._order || a.id.localeCompare(b.id) || a._form - b._form);
  return rows.map(({ _rank, _order, _form, ...r }) => r);
}

export const taalCsv = (entries: Entry[], lang: Lang, alles = false): string => toCsv(TAAL_COLUMNS, taalRows(entries, lang, alles));

/* ---- Back in ---- */

const YES = new Set(['ja', 'j', 'yes', 'y', 'ok', 'oké', 'goed', '✓', '✔', '✅', '👍', 'true', 'waar']);
const NO = new Set(['nee', 'n', 'no', 'niet goed', 'fout', '✗', '✘', '❌', '👎', 'false', 'onwaar']);

/** "ja", "nee", "" or null (not understood). */
export function answer(cell: string | undefined): 'ja' | 'nee' | '' | null {
  const a = (cell ?? '').trim().toLowerCase();
  if (!a) return '';
  if (YES.has(a)) return 'ja';
  if (NO.has(a)) return 'nee';
  return null;
}

export interface Problem {
  rij: string;
  id: string;
  vorm: string;
  melding: string;
}

export interface TaalImport {
  lang: Lang;
  /** Texts that change. */
  veranderd: { id: string; vorm: string; oud: string; nieuw: string; file: string; line: number }[];
  /** Entries marked "nagekeken" (all their forms in the file were approved). */
  nagekeken: string[];
  /** Entries with some forms approved, but not all: values changed, the mark stays. */
  deels: string[];
  /** "nee" without a better text. */
  nogOpen: { id: string; vorm: string; vertaling: string; opmerking: string }[];
  /** Remarks on rows, whatever the answer. */
  opmerkingen: { id: string; vorm: string; opmerking: string }[];
  /** Rows not answered. */
  leeg: number;
  /** Rows refused: nothing is written while there is one, unless `toch`. */
  fouten: Problem[];
  /** The new file contents (only the files that change). */
  files: Map<string, string>;
  /** There were errors, so nothing is written (without `toch`). */
  tegengehouden: boolean;
}

/** Which language a filled-in list is in: the one whose texts match most of its "vertaling" cells. */
function detectLang(rows: Row[], entries: Entry[]): { lang: Lang | null; share: number } {
  const byKey = new Map<string, string>();
  for (const e of entries) for (const f of e.forms) byKey.set(`${e.lang}|${e.id}|${f.form}`, f.value);
  let best: Lang | null = null;
  let bestN = 0;
  for (const l of LANGS) {
    const n = rows.filter((r) => byKey.get(`${l}|${(r.id ?? '').trim()}|${(r.vorm ?? '').trim()}`) === (r.vertaling ?? '').trim()).length;
    if (n > bestN) {
      best = l;
      bestN = n;
    }
  }
  return { lang: best, share: rows.length ? bestN / rows.length : 0 };
}

/**
 * Reads a filled-in translation list and works out what changes in src/i18n. `sources`: every
 * translation file (path → content). Writes nothing: the caller writes `files`.
 */
export function importTaal(csvText: string, sources: Map<string, string>, opts: { lang?: Lang; mark: string | ((lang: Lang) => string); toch?: boolean }): TaalImport {
  const { columns, rows } = parseCsv(csvText);
  const missing = ['id', 'vertaling', 'goed?', 'beter zo'].filter((c) => !columns.includes(c));
  if (missing.length) throw new Error(`Dit is geen vertaallijst: de kolom${missing.length > 1 ? 'men' : ''} ${missing.map((c) => `"${c}"`).join(', ')} ontbreek${missing.length > 1 ? 'en' : 't'}.`);
  const entries = [...sources].flatMap(([file, src]) => scanSource(file, src, fileLang(file)));
  let lang = opts.lang;
  if (!lang) {
    const found = detectLang(rows, entries);
    if (!found.lang || found.share < 0.3) {
      throw new Error('Ik kan niet zien welke taal dit is: de kolom "vertaling" lijkt op geen enkele taal. Geef de taal mee, bijvoorbeeld --taal pl.');
    }
    lang = found.lang;
  }
  const mine = new Map(entries.filter((e) => e.lang === lang).map((e) => [e.id, e]));
  const out: TaalImport = { lang, veranderd: [], nagekeken: [], deels: [], nogOpen: [], opmerkingen: [], leeg: 0, fouten: [], files: new Map(), tegengehouden: false };
  const seen = new Set<string>();
  /** Per entry: its forms that the list approves, and its rows. */
  const approved = new Map<string, Set<string>>();
  const touched = new Map<string, Set<string>>();
  const newValue = new Map<string, Map<string, string>>();

  for (const r of rows) {
    const id = (r.id ?? '').trim();
    const vorm = (r.vorm ?? '').trim();
    const fout = (melding: string) => out.fouten.push({ rij: r._rij, id, vorm, melding });
    if (!id) {
      fout('Er staat geen id in deze rij.');
      continue;
    }
    const e = mine.get(id);
    if (!e) {
      fout(`Het id "${id}" bestaat niet in de ${lang}-vertalingen.`);
      continue;
    }
    const form = e.forms.find((f) => f.form === vorm);
    if (!form) {
      fout(`De vorm "${vorm}" bestaat niet bij ${id} (wel: ${e.forms.map((f) => f.form || '(geen)').join(', ')}).`);
      continue;
    }
    if (seen.has(`${id}|${vorm}`)) {
      fout('Deze rij staat twee keer in het bestand.');
      continue;
    }
    seen.add(`${id}|${vorm}`);
    const goed = answer(r['goed?']);
    const beter = (r['beter zo'] ?? '').trim();
    const opmerking = (r.opmerking ?? '').trim();
    if (opmerking) out.opmerkingen.push({ id, vorm, opmerking });
    if (goed === null) {
      fout(`"${r['goed?']}" in de kolom "goed?" begrijp ik niet. Schrijf ja of nee.`);
      continue;
    }
    if (!goed && !beter) {
      out.leeg++;
      continue;
    }
    (touched.get(id) ?? touched.set(id, new Set()).get(id)!).add(vorm);
    if (goed === 'nee' && !beter) {
      out.nogOpen.push({ id, vorm, vertaling: form.value, opmerking });
      continue;
    }
    if (form.value.trim() !== (r.vertaling ?? '').trim()) {
      fout('De tekst in de app is veranderd sinds dit bestand is gemaakt. Maak een nieuwe lijst voor deze rij.');
      continue;
    }
    if (beter && beter !== form.value) {
      if (/[\r\n]/.test(beter)) {
        fout('Er staat een enter in "beter zo". Zet de tekst op één regel.');
        continue;
      }
      const want = placeholders(form.value).join(' ');
      const got = placeholders(beter).join(' ');
      if (want !== got) {
        fout(`"beter zo" moet dezelfde plekhouders hebben als de vertaling: ${want || '(geen)'}, niet ${got || '(geen)'}.`);
        continue;
      }
      (newValue.get(id) ?? newValue.set(id, new Map()).get(id)!).set(vorm, beter);
      out.veranderd.push({ id, vorm, oud: form.value, nieuw: beter, file: e.file, line: form.line });
    }
    (approved.get(id) ?? approved.set(id, new Set()).get(id)!).add(vorm);
  }

  // The edits per file.
  const edits = new Map<string, Edit[]>();
  const push = (file: string, list: Edit[]) => edits.set(file, [...(edits.get(file) ?? []), ...list]);
  for (const [id, forms] of touched) {
    const e = mine.get(id)!;
    const ok = approved.get(id) ?? new Set();
    for (const [vorm, value] of newValue.get(id) ?? []) {
      const f = e.forms.find((x) => x.form === vorm)!;
      push(e.file, [{ start: f.start, end: f.end, text: literal(value, f.quote) }]);
    }
    const marked = e.forms.filter((f) => !['ongemarkeerd', 'nagekeken'].includes(formStatus(e, f.form))).map((f) => f.form);
    const all = [...forms].every((v) => ok.has(v)) && marked.every((v) => ok.has(v));
    const mark = typeof opts.mark === 'function' ? opts.mark(lang!) : opts.mark;
    // Every form approved: the whole entry is checked. Only the x form (the only one with a mark,
    // "// x: nieuw, nalezen"): "// x: nagekeken: …", as the marks say it already.
    const onlyX = [...ok].every((v) => v === 'x' || v.endsWith('.x'));
    if (all && e.forms.every((f) => ok.has(f.form) || formStatus(e, f.form) === 'nagekeken')) {
      out.nagekeken.push(id);
      push(e.file, markChecked(sources.get(e.file)!, e, mark));
    } else if (all && onlyX) {
      out.nagekeken.push(`${id} (x)`);
      push(e.file, markChecked(sources.get(e.file)!, e, `x: ${mark}`));
    } else if (ok.size) out.deels.push(id);
  }
  for (const [file, list] of edits) out.files.set(file, applyEdits(sources.get(file)!, list));

  // Check the result: the same texts in the same files, only the changed values different.
  for (const [file, text] of out.files) {
    const before = scanSource(file, sources.get(file)!, fileLang(file));
    const after = scanSource(file, text, fileLang(file));
    const key = (e: Entry) => `${e.lang}|${e.id}`;
    const afterMap = new Map(after.map((e) => [key(e), e]));
    const bad =
      before.length !== after.length ||
      before.some((b) => {
        const a = afterMap.get(key(b));
        if (!a || a.forms.length !== b.forms.length) return true;
        return b.forms.some((f, i) => {
          const want = b.lang === lang ? (newValue.get(b.id)?.get(f.form) ?? f.value) : f.value;
          return a.forms[i].form !== f.form || a.forms[i].value !== want;
        });
      });
    if (bad) throw new Error(`Interne fout: na het verwerken klopt ${file} niet meer. Er is niets geschreven.`);
  }
  if (out.fouten.length && !opts.toch) {
    out.files = new Map();
    out.tegengehouden = true;
  }
  return out;
}

/** The report of a translation import, in Markdown. */
export function taalReport(r: TaalImport, bestand: string, check: boolean): string {
  const lines = [`# Vertaling terug: ${r.lang}`, '', `Bestand: ${bestand}${check ? ' (droogloop: niets geschreven)' : ''}`, ''];
  lines.push(`- veranderd: ${r.veranderd.length}`, `- nagekeken (gemarkeerd): ${r.nagekeken.length}`, `- deels nagekeken: ${r.deels.length}`, `- nog open: ${r.nogOpen.length}`, `- niet ingevuld: ${r.leeg}`, `- fouten: ${r.fouten.length}`, '');
  if (r.fouten.length) {
    lines.push('## Fouten', '');
    if (r.tegengehouden) lines.push('Er is niets geschreven. Verbeter het bestand, of verwerk de goede rijen toch met --toch.', '');
    for (const f of r.fouten) lines.push(`- rij ${f.rij}, ${f.id}${f.vorm ? ` (${f.vorm})` : ''}: ${f.melding}`);
    lines.push('');
  }
  if (r.veranderd.length) {
    lines.push('## Veranderd', '');
    for (const c of r.veranderd) lines.push(`- ${c.id}${c.vorm ? ` (${c.vorm})` : ''}, ${c.file}:${c.line}`, `  - was: ${c.oud}`, `  - nu: ${c.nieuw}`);
    lines.push('');
  }
  if (r.nogOpen.length) {
    lines.push('## Nog open', '', 'De nakijker vindt dit niet goed, maar gaf geen betere tekst.', '');
    for (const o of r.nogOpen) lines.push(`- ${o.id}${o.vorm ? ` (${o.vorm})` : ''}: ${o.vertaling}${o.opmerking ? `\n  - opmerking: ${o.opmerking}` : ''}`);
    lines.push('');
  }
  if (r.deels.length) lines.push('## Deels nagekeken', '', 'Niet alle vormen zijn goedgekeurd: de markering blijft staan.', '', ...r.deels.map((id) => `- ${id}`), '');
  if (r.opmerkingen.length) {
    lines.push('## Opmerkingen', '');
    for (const o of r.opmerkingen) lines.push(`- ${o.id}${o.vorm ? ` (${o.vorm})` : ''}: ${o.opmerking}`);
    lines.push('');
  }
  return lines.join('\n');
}
