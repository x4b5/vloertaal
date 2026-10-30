// Writes public/audio/clips.json: every Dutch line the app can speak, keyed by a
// stable id, for the recorded (ElevenLabs) voices: scripts/voices/elevenlabs.mjs records each
// clip in every voice, unless the clip names its voices ("voices": only those record it).
import { mkdirSync, writeFileSync } from 'node:fs';
import { cultureTips } from '../src/content/culture';
import { phrasebookExtras, units as courseUnits } from '../src/content/curriculum';
import { allRegionTips, allRegionUnits, isRegionLoaded, REGIONS, registerRegion, setRegionsOn } from '../src/content/regio';
import zlPack from '../src/content/regio/zuid-limburg-pack';
import { lessonSayings } from '../src/content/sayings';
import { tokenize } from '../src/lib/answers';
import { sayAs } from '../src/lib/sayAs';
import { hasDigitNumber } from '../src/lib/sayNumbers';
import { BRAM_HELLO, BRAM_VOICE, VOICE_SAMPLE } from '../src/lib/voices';

// The app loads a region's file only when a learner chose it (src/content/regio ensureRegion);
// here every region is put in place, so its lines are recorded before the region goes on.
setRegionsOn(true);
registerRegion(zlPack);
const missing = REGIONS.filter((r) => !isRegionLoaded(r.id)).map((r) => r.id);
if (missing.length) throw new Error(`scripts/list-clips.ts: register the region pack of ${missing.join(', ')}`);

// The course, then the regions' language units (src/content/regio): their lines are recorded too.
const units = [...courseUnits, ...allRegionUnits('taal')];

const clips = new Map<string, string>();
/** Clips only some voices record (to save credits): id -> voice keys. */
const onlyVoices = new Map<string, string[]>();
const add = (id: string, text: string, voices?: string[]) => {
  if (clips.has(id)) return;
  clips.set(id, text);
  if (voices) onlyVoices.set(id, voices);
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
for (const t of [...cultureTips, ...allRegionTips()]) {
  add(t.phrase.id, t.phrase.nl);
  // The Dutch quoted in a situation ("Zeg maar je, hoor!"), played beside its text.
  if (t.situation.nl) add(`${t.situation.id}.nl`, t.situation.nl);
}
// The sayings in lessons of other topics ("Hou je een oogje in het zeil?"), said by a colleague on
// the "Zo zeggen ze het" card and in the question after it (src/content/sayings.ts).
for (const s of lessonSayings) add(`${s.id}.s.nl`, s.nl);
// Emergency phrases that only live in the phrasebook ("Bel 112!").
for (const p of phrasebookExtras) add(p.id, p.nl);
add('x.sample', VOICE_SAMPLE);
// Bram introduces himself on the first tap of the app (sayFirstWord in src/lib/audio.ts): only in
// his own voice, Thijmen; the other voices never say it.
add('x.bram', BRAM_HELLO, [BRAM_VOICE]);

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

// How a clip is pronounced where the spelling would mislead the voice (src/lib/sayAs.ts:
// "app" → "ep"). The app shows `text`; the voice is given `say`. `take` re-records clips that
// were made before their `say` existed; take 3: the clips with 112, recorded as "honderdtwaalf" before
// it was said digit by digit ("één één twee").
const SAY_TAKE = 2;
const takeFor = (text: string) => (hasDigitNumber(text) ? 3 : SAY_TAKE);

mkdirSync('public/audio', { recursive: true });
writeFileSync(
  'public/audio/clips.json',
  JSON.stringify(
    [...clips].map(([id, text]) => {
      const say = sayAs(text);
      return {
        id,
        text,
        ...(say !== text ? { say, take: takeFor(text) } : {}),
        ...(onlyVoices.has(id) ? { voices: onlyVoices.get(id) } : {}),
      };
    }),
    null,
    1,
  ),
);
console.log(`${clips.size} clips`);
