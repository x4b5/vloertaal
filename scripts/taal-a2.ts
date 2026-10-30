// Checks the Dutch-only texts against the A2 yardstick (docs/taal-a2.md) and prints a report:
// the work-rules units, the regional work-rules unit and the Dutch screens (src/i18n/nl.ts).
// A hit is a question for an editor, not an error: the script cannot tell a real passive from
// "ziek worden", or a needed technical word from a hard one. Sentences that belong to a
// `// ⚖️ check:` note are listed apart: those stay as they are (docs/taal-a2.md, "Wat niet verandert").
// The language track (curriculum, work, culture) is not checked: its sentences have translations.
//
// Usage: npm run taal                  (every file)
//        npm run taal -- ziek tijd      (only files whose path contains one of these words)
import { readFileSync } from 'node:fs';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import type { RuleOption, RuleUnit } from '../src/content/regels/types';
import { zlRegelsUnit } from '../src/content/regio/zuid-limburg-regels';
import { modelQuestion } from '../src/content/regels/zegHet';
import { uiNl } from '../src/i18n/nl';

type Text = { file: string; where: string; field: string; text: string };
type Choice = { file: string; where: string; situation: string; options: RuleOption[] };

const SECTOR = new Set(['r.build', 'r.care', 'r.horeca', 'r.clean', 'r.factory', 'r.warehouse']);
const fileOf = (unitId: string) =>
  unitId === zlRegelsUnit.id ? 'src/content/regio/zuid-limburg-regels.ts'
  : SECTOR.has(unitId) ? 'src/content/regels/units/sector.ts'
  : `src/content/regels/units/${unitId.slice(2)}.ts`;

const texts: Text[] = [];
const choices: Choice[] = [];
const units: RuleUnit[] = [...rulesUnits, ...sectorRulesUnits, zlRegelsUnit];
for (const u of units) {
  const file = fileOf(u.id);
  for (const l of u.lessons) {
    const add = (where: string, field: string, text: string) => texts.push({ file, where, field, text });
    add(l.id, 'title', l.title);
    add(l.id, 'goal', l.goal);
    add(l.id, 'remember', l.remember);
    for (const s of l.steps) {
      const at = s.id;
      switch (s.kind) {
        case 'scene': s.lines.forEach((t) => add(at, 'scene', t)); break;
        // A dialect card is read as it is (it teaches the dialect words).
        case 'rule': if (!s.dialect) s.body.forEach((t) => add(at, 'body', t)); break;
        case 'truefalse': add(at, 'statement', s.statement); add(at, 'why', s.why); break;
        case 'whatdo': case 'card': case 'payslip': {
          const situation = s.kind === 'whatdo' ? s.situation : s.question;
          add(at, s.kind === 'whatdo' ? 'situation' : 'question', situation);
          if (s.kind === 'whatdo' && s.quote) add(at, 'quote', s.quote);
          for (const o of s.options) { add(at, `option ${o.id}`, o.text); add(at, `feedback ${o.id}`, o.feedback); }
          add(at, 'why', s.why);
          choices.push({ file, where: at, situation, options: s.options });
          break;
        }
        case 'whoask': add(at, 'question', s.question); s.options.forEach((o) => add(at, `feedback ${o.id}`, o.feedback)); add(at, 'why', s.why); break;
        case 'model': {
          add(at, 'context', s.context); add(at, 'nl', s.nl);
          // Its "Wat zeg je?" in a review (src/content/regels/zegHet.ts): the wrong sentences.
          const q = modelQuestion(s);
          if (q) {
            for (const o of q.options.filter((x) => !x.best)) { add(at, `zeg-het ${o.id}`, o.text); add(at, `zeg-het feedback ${o.id}`, o.feedback); }
            choices.push({ file, where: `${at} (zeg-het)`, situation: q.situation, options: q.options });
          }
          break;
        }
      }
    }
  }
}
for (const [key, value] of Object.entries(uiNl)) {
  for (const t of typeof value === 'string' ? [value] : Object.values(value)) texts.push({ file: 'src/i18n/nl.ts', where: key, field: 'ui', text: t });
}

// ---- ⚖️: the notes of each file. A sentence belongs to one when it repeats a piece of the
// note (3 words or more), or when most of its word pairs are in the notes. ----
const norm = (t: string) => t.toLowerCase().replace(/⚖️/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const pairsOf = (t: string) => { const w = norm(t).split(' '); return w.slice(1).map((x, i) => `${w[i]} ${x}`); };
const legal = new Map<string, { pieces: string[]; pairs: Set<string> }>();
for (const file of new Set(texts.map((t) => t.file))) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const notes: string[] = [];
  lines.forEach((line, i) => {
    if (!line.includes('⚖️') || !/^\s*(\/\/|\*)/.test(line)) return;
    notes.push(line);
    for (let j = i + 1; j < lines.length && /^\s*\/\/\s{2,}/.test(lines[j]); j++) notes.push(lines[j]);
  });
  const note = notes.join(' ').replace(/\/\/|⚖️ check:/g, ' ');
  const pieces = note.split(/⚖️|[;()·]/).map(norm).filter((p) => p.split(' ').length >= 3);
  legal.set(file, { pieces, pairs: new Set(pairsOf(note)) });
}
/** Ids of the steps (and lessons) with a ⚖️ note right above them: some notes are in English
 *  or name the fact in other words, so a sentence of such a step is marked "look again". */
const notedIds = new Set<string>();
for (const file of legal.keys()) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const id = line.match(/^\s*id: '([^']+)'/)?.[1];
    if (!id) return;
    let j = i - 1;
    while (j >= 0 && /^\s*(\{|kind: )/.test(lines[j])) j--;
    for (; j >= 0 && /^\s*\/\//.test(lines[j]); j--) if (lines[j].includes('⚖️')) notedIds.add(id);
  });
}
const isLegal = (file: string, sentence: string) => {
  const { pieces, pairs } = legal.get(file)!;
  const n = norm(sentence);
  if (pieces.some((p) => n.includes(p))) return true;
  const own = pairsOf(sentence);
  return own.length >= 2 && own.filter((p) => pairs.has(p)).length / own.length >= 0.6;
};

// ---- the checks, by rule of the yardstick ----
const sentencesOf = (t: string) => t.split(/(?<=[.!?]["”’]?)\s+/).filter((s) => s.trim());
const wordCount = (s: string) => s.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;
/** Rule 2 and 7: words the yardstick names, or words found above A2 in earlier rounds. */
const HARD: [RegExp, string][] = [
  [/\btwijfel/i, 'twijfelen → "weet (het) niet (zeker)"'],
  [/\bappje/i, 'appje → bericht (regel 7)'],
  [/\b(echter|indien|mits|eventueel|desondanks|betreffende|inzake)\b/i, 'een woord uit de meetlat'],
  [/\b(voortaan|terechtkunt|terecht kunt|nagaan|overkomt|overkomen|kwetsbaar|signalen|signaal|globaal|aanspreekpunt|gewaardeerd|toegestaan|uitstel|ongeopend|in principe|wijziging|instemming)\b/i, 'boven A2?'],
  [/\bwaar (ik|je|hij|ze|zij) aan toe (ben|bent|is)\b|\bsluit de deur\b|\bkomen te staan\b/i, 'uitdrukking'],
];
/** Rule 6: a form of "worden" with a past participle ("wordt betaald"), not "ziek worden". */
const WORDEN = /\b(word|wordt|worden|werd|werden)\b/i;
const PARTICIPLE = /^(\p{L}*ge\p{L}{2,}(d|t|en)|(be|ver|ont|her|er)\p{L}{3,}(d|t))$/iu;
const isPassive = (s: string) => WORDEN.test(s) && norm(s).split(' ').some((w) => PARTICIPLE.test(w) && !/^(geen|gewoon|gezond|genoeg|gelijk|gebeurt|geldt|gelden|gemeente|gesprek)$/.test(w));
/** Rule 4: "nooit" or "geen" with an abstract word ("geen gunst", "nooit zekerheid"). */
const NEGATIVE = /\b(nooit|geen)\s+(\p{L}+\s+){0,2}\p{L}*(heid|schap|isme|luxe|gunst)\b/iu;
const NAMED = /\b(Kevin|Fatima|Esra|Jayden|Mohammed|Piotr|Dewi|Sanne|Malik|Ewa|Oksana|Joep|Mehmet|Nadia|Bogdan|Yonas|Hatice|Linda|Mark|Henk)\b/;

type Hit = Text & { rule: string; legal: boolean };
const hits: Hit[] = [];
for (const t of texts) for (const s of sentencesOf(t.text)) {
  const hit = (rule: string) => hits.push({ ...t, text: s, rule, legal: isLegal(t.file, s) });
  const n = wordCount(s);
  if (n > 12) hit(`1 · ${n} woorden`);
  if (isPassive(s)) hit('6 · lijdende vorm?');
  if (NEGATIVE.test(s)) hit('4 · nooit/geen met een abstract woord?');
  for (const [re, why] of HARD) if (re.test(s)) hit(`2 · ${why}`);
}
for (const c of choices) {
  // Rule 5: a story about someone, but an answer or its feedback talks to the reader.
  const named = NAMED.test(c.situation) && !/\bje\?$|\bjij\b/i.test(c.situation);
  for (const o of c.options) {
    if (named && /^(Je|Jij)\b/.test(o.text)) hits.push({ file: c.file, where: c.where, field: `option ${o.id}`, text: o.text, rule: '5 · antwoord in "je"', legal: false });
    if (named && /\b(jij|jou|jouw)\b/i.test(o.feedback)) hits.push({ file: c.file, where: c.where, field: `feedback ${o.id}`, text: o.feedback, rule: '5 · feedback in "jij/jouw"', legal: isLegal(c.file, o.feedback) });
  }
  // "De vorm van een vraag": a wrong answer much shorter or longer than the best one.
  const best = c.options.find((o) => o.best)!.text.length;
  for (const o of c.options) if (!o.best && (o.text.length < best * 0.65 || o.text.length > best * 1.5))
    hits.push({ file: c.file, where: c.where, field: `option ${o.id} (${o.text.length} tegen ${best} tekens)`, text: o.text, rule: 'vorm · lengte antwoord', legal: false });
}

// ---- the report ----
const only = process.argv.slice(2);
const shown = hits.filter((h) => !only.length || only.some((w) => h.file.includes(w)));
const files = [...new Set(shown.map((h) => h.file))].sort();
const todo = shown.filter((h) => !h.legal);
console.log(`# Taal-A2-controle\n\n${texts.length} teksten · ${todo.length} meldingen · ${shown.length - todo.length} bij ⚖️ (niet veranderen)\n`);
for (const file of files) {
  const list = shown.filter((h) => h.file === file).sort((a, b) => Number(a.legal) - Number(b.legal) || a.rule.localeCompare(b.rule));
  console.log(`## ${file}\n`);
  for (const h of list) {
    const mark = h.legal ? '⚖️ ' : notedIds.has(h.where) ? '(⚖️ in deze stap) ' : '';
    console.log(`- ${mark}[${h.rule}] ${h.where} · ${h.field}: ${h.text}`);
  }
  console.log('');
}
