// Writes public/audio-help/clips.json: the lines of the first pages to record in every help language
// (scripts/help-clips-list.ts). No key needed. Recording: scripts/voices/elevenlabs-help.mjs, or a
// native speaker with a phone (docs/opnames.md). `npm run help:clips -- ti` also prints one language.
import { mkdirSync, writeFileSync } from 'node:fs';
import { helpClipList } from './help-clips-list';

const list = helpClipList();
mkdirSync('public/audio-help', { recursive: true });
writeFileSync('public/audio-help/clips.json', `${JSON.stringify(list, null, 1)}\n`);
const total = Object.values(list).reduce((n, l) => n + l.length, 0);
const chars = Object.values(list).reduce((n, l) => n + l.reduce((m, c) => m + c.text.length, 0), 0);
console.log(`${total} lines in ${Object.keys(list).length} languages, ${chars} characters.`);
const one = process.argv[2] as keyof typeof list | undefined;
if (one) {
  if (!list[one]) throw new Error(`Unknown language ${one}`);
  for (const c of list[one]) console.log(`${c.id}.mp3\t${c.page}\t${c.text}`);
}
