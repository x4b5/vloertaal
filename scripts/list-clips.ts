// Writes public/audio/clips.json: every Dutch line the app can speak, keyed by a
// stable id, for the recorded (Piper) voices generated in CI.
import { mkdirSync, writeFileSync } from 'node:fs';
import { cultureTips } from '../src/content/culture';
import { phrasebookExtras, units } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import { VOICE_SAMPLE } from '../src/lib/voices';

const clips = new Map<string, string>();
const add = (id: string, text: string) => {
  if (!clips.has(id)) clips.set(id, text);
};
for (const u of units)
  for (const l of u.lessons) {
    for (const w of l.words) add(w.id, w.nl);
    for (const s of l.sentences) add(s.id, s.nl);
    for (const d of l.dialogues ?? []) {
      add(d.prompt.id, d.prompt.nl);
      add(d.reply.id, d.reply.nl);
    }
  }
for (const t of cultureTips) {
  add(t.phrase.id, t.phrase.nl);
  // The Dutch quoted in a situation ("Zeg maar je, hoor!"), played beside its text.
  if (t.situation.nl) add(`${t.situation.id}.nl`, t.situation.nl);
}
// Emergency phrases that only live in the phrasebook ("Bel 112!").
for (const p of phrasebookExtras) add(p.id, p.nl);
add('x.sample', VOICE_SAMPLE);

// Single word tiles of the sentence-building exercise ("ik", "ben"), so a tap on a tile is
// said by the same voice as the rest. Words that already have their own clip are skipped;
// the app matches clips without regard to capitals or closing punctuation.
const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
const said = new Set([...clips.values()].map(plain));
for (const u of units)
  for (const l of u.lessons)
    for (const text of [...l.sentences.map((s) => s.nl), ...l.words.map((w) => w.nl)])
      for (const token of tokenize(text)) {
        const word = token.toLowerCase();
        if (said.has(word)) continue;
        said.add(word);
        add(`t.${word}`, word);
      }

mkdirSync('public/audio', { recursive: true });
writeFileSync('public/audio/clips.json', JSON.stringify([...clips].map(([id, text]) => ({ id, text })), null, 1));
console.log(`${clips.size} clips`);
