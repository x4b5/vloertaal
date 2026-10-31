// The help-language recordings without a key (public/audio-help, src/lib/helpAudio.ts).
//
//   node scripts/voices/help-manifest.mjs              # per language: how many lines are missing or outdated
//   node scripts/voices/help-manifest.mjs list ti      # the lines of one language, with their file names
//   node scripts/voices/help-manifest.mjs add ti       # a native speaker's mp3s are in public/audio-help/ti/:
//                                                      # put them in the manifest with today's texts
//
// `add` registers every public/audio-help/<lang>/<id>.mp3 whose id is in clips.json, as saying the
// text clips.json has now. So only run it after listening: the file must say exactly that line.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { helpTodo, withRecorded } from './help-todo.mjs';

const OUT = 'public/audio-help';
const [mode = 'missing', lang] = process.argv.slice(2);
if (!existsSync(`${OUT}/clips.json`)) {
  console.error(`${OUT}/clips.json is missing: run \`npm run help:clips\` first (no key needed).`);
  process.exit(1);
}
const clips = JSON.parse(readFileSync(`${OUT}/clips.json`, 'utf8'));
const manifestPath = `${OUT}/manifest.json`;
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : { langs: {} };
const has = (l, id) => existsSync(`${OUT}/${l}/${id}.mp3`);

if ((mode === 'list' || mode === 'add') && !clips[lang]) {
  console.error(`Name a language: ${Object.keys(clips).join(', ')}.`);
  process.exit(1);
}

if (mode === 'list') {
  for (const c of clips[lang]) console.log(`${c.id}.mp3\t${c.page}\t${c.text}`);
} else if (mode === 'add') {
  const found = clips[lang].filter((c) => has(lang, c.id));
  writeFileSync(manifestPath, `${JSON.stringify(withRecorded(manifest, lang, found), null, 1)}\n`);
  console.log(`${lang}: ${found.length} of ${clips[lang].length} lines registered.`);
  const left = clips[lang].filter((c) => !has(lang, c.id));
  for (const c of left) console.log(`  still missing: ${c.id}.mp3  ${c.text}`);
} else {
  const todo = helpTodo(clips, manifest, has);
  for (const [l, list] of Object.entries(todo)) {
    const missing = list.filter((c) => c.why === 'missing').length;
    console.log(`${l}: ${clips[l].length} lines · missing ${missing} · outdated ${list.length - missing}`);
  }
}
