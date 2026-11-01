/**
 * The sums of the group overview (vloertaal.nl/groep, src/lib/groepPage.ts): a coach types, per
 * participant, the numbers of that learner's coach card (src/lib/kaart.ts), and the page makes the
 * group's totals. Participants are numbers, never names; nothing is kept or sent.
 *
 * The page has no app code: these functions are copied into it as they are (groepPage.ts,
 * GROEP_SCRIPT_FUNCTIONS), so each is a function declaration that uses only the others and the
 * language itself (ES2019: no ?. or ??, an old laptop at a taalhuis must run it). tests/groep.test.ts
 * checks the copies do the same.
 */
import type { GroepScore } from './groepCode';

/** One participant: what the coach filled in (a field left empty is not counted). */
export interface GroepRij {
  onderwerpen?: number;
  dagen?: number;
  voor?: GroepScore;
  na?: GroepScore;
}

export interface GroepStat {
  /** How many participants have this number. */
  n: number;
  gemiddelde: number;
  mediaan: number;
}

export interface GroepAandeel {
  n: number;
  van: number;
}

export interface GroepTotaal {
  /** Participants with at least one number. */
  deelnemers: number;
  onderwerpen: GroepStat | null;
  dagen: GroepStat | null;
  /** Came back: practised on 2 or more days (of those with days filled in). */
  terug: GroepAandeel;
  /** Practised on 7 or more days. */
  vaak: GroepAandeel;
  toets: {
    /** The start, in percent right (everyone with a start). */
    voor: GroepStat | null;
    /** The end, in percent right (everyone with an end). */
    na: GroepStat | null;
    /** Everyone with both: the end minus the start, in percentage points. */
    verschil: GroepStat | null;
    beter: number;
    gelijk: number;
    minder: number;
  };
}

/** Below this many participants the page says the numbers say little yet, and to share totals only from this many. */
export const GROEP_KLEIN = 5;

export function gemiddelde(xs: number[]): number {
  if (!xs.length) return NaN;
  var sum = 0;
  for (var i = 0; i < xs.length; i++) sum += xs[i];
  return sum / xs.length;
}

export function mediaan(xs: number[]): number {
  if (!xs.length) return NaN;
  var s = xs.slice().sort(function (a, b) { return a - b; });
  var mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

export function groepStat(xs: number[]): GroepStat | null {
  if (!xs.length) return null;
  return { n: xs.length, gemiddelde: gemiddelde(xs), mediaan: mediaan(xs) };
}

/** Percent right, 0–100. */
export function procent(s: GroepScore): number {
  return (100 * s.goed) / s.van;
}

export function groepTotaal(rijen: GroepRij[]): GroepTotaal {
  var ond: number[] = [], dag: number[] = [], voor: number[] = [], na: number[] = [], verschil: number[] = [];
  var deelnemers = 0, beter = 0, gelijk = 0, minder = 0;
  for (var i = 0; i < rijen.length; i++) {
    var r = rijen[i];
    var any = false;
    if (typeof r.onderwerpen === 'number') { ond.push(r.onderwerpen); any = true; }
    if (typeof r.dagen === 'number') { dag.push(r.dagen); any = true; }
    if (r.voor) { voor.push(procent(r.voor)); any = true; }
    if (r.na) { na.push(procent(r.na)); any = true; }
    if (r.voor && r.na) {
      var d = procent(r.na) - procent(r.voor);
      verschil.push(d);
      // The same share right is "gelijk", also when the start and the end had a different number of questions.
      if (Math.abs(d) < 1e-9) gelijk++;
      else if (d > 0) beter++;
      else minder++;
    }
    if (any) deelnemers++;
  }
  var terug = 0, vaak = 0;
  for (var j = 0; j < dag.length; j++) {
    if (dag[j] >= 2) terug++;
    if (dag[j] >= 7) vaak++;
  }
  return {
    deelnemers: deelnemers,
    onderwerpen: groepStat(ond),
    dagen: groepStat(dag),
    terug: { n: terug, van: dag.length },
    vaak: { n: vaak, van: dag.length },
    toets: { voor: groepStat(voor), na: groepStat(na), verschil: groepStat(verschil), beter: beter, gelijk: gelijk, minder: minder },
  };
}

/** "3,5" (Dutch, one decimal at most). */
export function getal(x: number): string {
  var r = Math.round(x * 10) / 10;
  return String(r).replace('.', ',');
}

/** "+12,5" / "-4" / "0". */
export function plus(x: number): string {
  var t = getal(x);
  return x > 0.05 ? '+' + t : t;
}

/** "gemiddeld 3,5 · mediaan 3 (8 deelnemers)" */
export function statTekst(s: GroepStat | null, eenheid: string, metPlus?: boolean): string {
  if (!s) return 'nog niets ingevuld';
  var f = metPlus ? plus : getal;
  return 'gemiddeld ' + f(s.gemiddelde) + eenheid + ' · mediaan ' + f(s.mediaan) + eenheid + ' (' + s.n + (s.n === 1 ? ' deelnemer)' : ' deelnemers)');
}

export function aandeelTekst(a: GroepAandeel): string {
  if (!a.van) return 'nog niets ingevuld';
  return a.n + ' van ' + a.van + ' (' + Math.round((100 * a.n) / a.van) + '%)';
}

/** The totals as lines of plain Dutch, the same as the page shows (and what "Kopieer" copies). */
export function groepRegels(t: GroepTotaal): { label: string; waarde: string }[] {
  var regels = [
    { label: 'Deelnemers', waarde: String(t.deelnemers) },
    { label: 'Onderwerpen af', waarde: statTekst(t.onderwerpen, '') },
    { label: 'Dagen geoefend (laatste 4 weken)', waarde: statTekst(t.dagen, '') },
    { label: 'Kwamen terug (2 of meer dagen geoefend)', waarde: aandeelTekst(t.terug) },
    { label: 'Oefenden 7 of meer dagen', waarde: aandeelTekst(t.vaak) },
    { label: 'Toets “Wat ken je al?”, instap', waarde: statTekst(t.toets.voor, '% goed') },
    { label: 'Toets “Wat ken je al?”, eind', waarde: statTekst(t.toets.na, '% goed') },
  ];
  if (t.toets.verschil) {
    regels.push({ label: 'Verschil eind min instap', waarde: statTekst(t.toets.verschil, ' procentpunt', true) });
    regels.push({ label: 'Eind tegenover instap', waarde: t.toets.beter + ' beter · ' + t.toets.gelijk + ' gelijk · ' + t.toets.minder + ' minder' });
  }
  return regels;
}

/** A score as the coach types it: "11/18" or "11 van 18". */
export function leesScore(text: string): GroepScore | null {
  var m = /^\s*(\d{1,3})\s*(?:\/|van)\s*(\d{1,3})\s*$/i.exec(String(text == null ? '' : text));
  if (!m) return null;
  var goed = Number(m[1]), van = Number(m[2]);
  if (van < 1 || goed > van) return null;
  return { goed: goed, van: van };
}

/** A whole number from a field, or undefined when empty or not a number (0–max). */
export function leesAantal(text: string, max: number): number | undefined {
  var s = String(text == null ? '' : text).trim();
  if (!/^\d{1,3}$/.test(s)) return undefined;
  var n = Number(s);
  return n > max ? undefined : n;
}

/** CSV for a Dutch spreadsheet (; between the fields): a row per participant, then the totals. */
export function groepCsv(rijen: GroepRij[], datum: string): string {
  var veld = function (x: number | undefined) { return typeof x === 'number' ? String(x) : ''; };
  var lines = ['deelnemer;onderwerpen_af;dagen_geoefend;instap_goed;instap_van;eind_goed;eind_van'];
  for (var i = 0; i < rijen.length; i++) {
    var r = rijen[i];
    lines.push([i + 1, veld(r.onderwerpen), veld(r.dagen), veld(r.voor ? r.voor.goed : undefined), veld(r.voor ? r.voor.van : undefined), veld(r.na ? r.na.goed : undefined), veld(r.na ? r.na.van : undefined)].join(';'));
  }
  lines.push('');
  lines.push('Groepsoverzicht Vloertaal;' + datum);
  var regels = groepRegels(groepTotaal(rijen));
  for (var j = 0; j < regels.length; j++) lines.push('"' + regels[j].label.replace(/"/g, '""') + '";"' + regels[j].waarde.replace(/"/g, '""') + '"');
  return lines.join('\r\n') + '\r\n';
}

/** The rows of a CSV this page made (the totals and anything else are skipped). */
export function leesGroepCsv(text: string): GroepRij[] {
  var out: GroepRij[] = [];
  var lines = String(text == null ? '' : text).split(/\r?\n/);
  for (var i = 0; i < lines.length; i++) {
    var f = lines[i].split(/[;,\t]/);
    if (!/^\s*\d+\s*$/.test(f[0] || '')) continue;
    var num = function (k: number, max: number) { return leesAantal(f[k] || '', max); };
    var r: GroepRij = {};
    var o = num(1, 999), d = num(2, 28), vg = num(3, 999), vv = num(4, 999), ng = num(5, 999), nv = num(6, 999);
    if (o !== undefined) r.onderwerpen = o;
    if (d !== undefined) r.dagen = d;
    if (vg !== undefined && vv !== undefined && vv > 0 && vg <= vv) r.voor = { goed: vg, van: vv };
    if (ng !== undefined && nv !== undefined && nv > 0 && ng <= nv) r.na = { goed: ng, van: nv };
    out.push(r);
  }
  return out;
}

/** The totals and the rows as plain text (to copy into a mail or a report). */
export function groepTekst(rijen: GroepRij[], datum: string): string {
  var regels = groepRegels(groepTotaal(rijen));
  var lines = ['Groepsoverzicht Vloertaal, ' + datum, ''];
  for (var i = 0; i < regels.length; i++) lines.push(regels[i].label + ': ' + regels[i].waarde);
  lines.push('');
  lines.push('Zonder namen. Gemaakt met vloertaal.nl/groep, uit de getallen van de begeleiderskaarten. Geen niveau en geen cijfer: de toets is kort en nog niet nagekeken door een expert.');
  return lines.join('\n') + '\n';
}

