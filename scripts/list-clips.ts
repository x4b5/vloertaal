// Writes public/audio/clips.json: every Dutch line the app can speak, keyed by a
// stable id, for the recorded (Piper) voices generated in CI.
import { mkdirSync, writeFileSync } from 'node:fs';
import { cultureTips } from '../src/content/culture';
import { units } from '../src/content/curriculum';
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
for (const t of cultureTips) add(t.phrase.id, t.phrase.nl);
add('x.sample', VOICE_SAMPLE);

mkdirSync('public/audio', { recursive: true });
writeFileSync('public/audio/clips.json', JSON.stringify([...clips].map(([id, text]) => ({ id, text })), null, 1));
console.log(`${clips.size} clips`);
