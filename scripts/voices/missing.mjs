// Which Dutch lines (sentences, words, chat lines, tiles) still have no ElevenLabs recording,
// per voice. Needs no API key: it only compares public/audio/clips.json (npm run clips) with the
// files in public/audio-el/<voice>/ and the index public/audio-el/voices.json.
//
//   npm run voices:missing                  # writes clips.json afresh, then the counts and the lists
//   node scripts/voices/missing.mjs         # the same, with the clips.json that is there
//   node scripts/voices/missing.mjs --counts            # only the counts per voice
//   node scripts/voices/missing.mjs --voice thijmen     # one voice
//   node scripts/voices/missing.mjs --json              # everything as JSON
//
// "missing": there is no mp3 for the clip. "outdated": there is an mp3, but its text changed (or
// the recording method, "take", did): scripts/voices/elevenlabs.mjs records both again.
// Work-rules lines are not in clips.json (the work-rules track uses the phone's voice).
import { existsSync, readFileSync } from 'node:fs';

const OUT = 'public/audio-el';
const args = process.argv.slice(2);
const countsOnly = args.includes('--counts');
const asJson = args.includes('--json');
const vi = args.indexOf('--voice');
const onlyVoice = vi >= 0 ? (args[vi + 1] ?? '').toLowerCase() : '';

if (!existsSync('public/audio/clips.json')) {
  console.error('public/audio/clips.json is missing: run `npm run clips` first (no key needed).');
  process.exit(1);
}
const config = JSON.parse(readFileSync('scripts/voices/elevenlabs.json', 'utf8'));
const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8'));
const index = existsSync(`${OUT}/voices.json`) ? JSON.parse(readFileSync(`${OUT}/voices.json`, 'utf8')) : { voices: [] };
const said = Object.fromEntries(index.voices.map((v) => [v.key, v.said ?? {}]));
const takes = Object.fromEntries(index.voices.map((v) => [v.key, v.takes ?? {}]));
const take = Number(config.take ?? 1);

const voices = config.voices.filter((v) => !onlyVoice || v.key.toLowerCase() === onlyVoice || v.label.toLowerCase() === onlyVoice);
if (!voices.length) {
  console.error(`No voice "${onlyVoice}". Known voices: ${config.voices.map((v) => v.key).join(', ')}.`);
  process.exit(1);
}

/** What a clip is: a single tile word (t.), a word (w.), or a sentence / chat line / tip. */
const kindOf = (c) => (c.id.startsWith('t.') ? 'tile' : c.id.startsWith('w.') || !/\s/.test(c.text.trim()) ? 'word' : 'sentence');
// As in elevenlabs.mjs: a clip may name the voices that record it (x.bram: only Thijmen).
const forVoice = (c, v) => !Array.isArray(c.voices) || c.voices.includes(v.key);

const report = voices.map((v) => {
  const mine = clips.filter((c) => forVoice(c, v));
  const missing = mine.filter((c) => !existsSync(`${OUT}/${v.key}/${c.id}.mp3`));
  const outdated = mine.filter(
    (c) =>
      existsSync(`${OUT}/${v.key}/${c.id}.mp3`) &&
      (said[v.key]?.[c.id] !== c.text || (takes[v.key]?.[c.id] ?? 1) !== Math.max(take, c.take ?? 0)),
  );
  const byKind = (list) => ({
    sentence: list.filter((c) => kindOf(c) === 'sentence').length,
    word: list.filter((c) => kindOf(c) === 'word').length,
    tile: list.filter((c) => kindOf(c) === 'tile').length,
  });
  return {
    voice: v.key,
    label: v.label,
    clips: mine.length,
    missing: missing.length,
    missingByKind: byKind(missing),
    outdated: outdated.length,
    credits: [...missing, ...outdated].reduce((n, c) => n + (c.say ?? c.text).length, 0),
    missingList: missing.map((c) => ({ id: c.id, text: c.text })),
    outdatedList: outdated.map((c) => ({ id: c.id, text: c.text, was: said[v.key]?.[c.id] })),
  };
});

if (asJson) {
  console.log(JSON.stringify(report, null, 1));
  process.exit(0);
}

console.log(`${clips.length} clips in public/audio/clips.json\n`);
console.log('voice     clips  missing (sentences / words / tiles)  outdated  about credits');
for (const r of report) {
  const k = r.missingByKind;
  console.log(
    `${r.label.padEnd(9)} ${String(r.clips).padStart(5)}  ${String(r.missing).padStart(7)} (${k.sentence} / ${k.word} / ${k.tile})`.padEnd(46) +
      `${String(r.outdated).padStart(8)}  ${String(r.credits).padStart(13)}`,
  );
}
if (!countsOnly) {
  for (const r of report) {
    if (!r.missing && !r.outdated) continue;
    console.log(`\n== ${r.label}: ${r.missing} missing${r.outdated ? `, ${r.outdated} outdated` : ''}`);
    for (const c of r.missingList) console.log(`  missing   ${c.id.padEnd(28)} ${c.text}`);
    for (const c of r.outdatedList) console.log(`  outdated  ${c.id.padEnd(28)} ${c.text}   (was: ${c.was ?? '-'})`);
  }
}
const total = report.reduce((n, r) => n + r.missing + r.outdated, 0);
console.log(total ? `\nRecord them: see docs/opnames.md.` : '\nEvery clip is recorded in every voice.');
