// Records the Dutch clips with ElevenLabs voices (paid Starter plan: commercial use).
// The clips are committed to public/audio-el/, so every line is paid for only once:
// a clip is (re)made only when it is missing or its text changed.
//
//   node scripts/voices/elevenlabs.mjs check        # voices reachable? cost of what's missing
//   node scripts/voices/elevenlabs.mjs sample       # only the settings sample line, per voice
//   node scripts/voices/elevenlabs.mjs all          # everything that's missing
//
// Needs ELEVENLABS_API_KEY and public/audio/clips.json (npm run clips).
// MAX_CREDITS (default 12000) stops the run before it would spend more than that.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const OUT = 'public/audio-el';
const API = 'https://api.elevenlabs.io/v1';
const key = process.env.ELEVENLABS_API_KEY;
const mode = process.argv[2] ?? 'check';
const maxCredits = Number(process.env.MAX_CREDITS ?? 12000);
const only = (process.env.VOICES ?? '').split(',').map((s) => s.trim()).filter(Boolean);

if (!key) throw new Error('ELEVENLABS_API_KEY is not set.');
const config = JSON.parse(readFileSync('scripts/voices/elevenlabs.json', 'utf8'));
const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8'));
const voices = config.voices.filter((v) => !only.length || only.includes(v.key));

// Index of what has been recorded: per voice, clip id → the exact text it says.
const indexPath = `${OUT}/voices.json`;
const old = existsSync(indexPath) ? JSON.parse(readFileSync(indexPath, 'utf8')) : { voices: [] };
const said = Object.fromEntries(old.voices.map((v) => [v.key, v.said ?? {}]));
// Which recording method ("take") made each clip; raising config.take re-records everything.
const takes = Object.fromEntries(old.voices.map((v) => [v.key, v.takes ?? {}]));
const take = Number(config.take ?? 1);

// sample = a few short lines to judge a voice: the settings sample plus single words and a reply.
const SAMPLE = ['x.sample', 'w.hallo', 'w.ja', 'w.goedemorgen', 'w.collega', 'c.hello.a'];
const wanted = mode === 'sample' ? clips.filter((c) => SAMPLE.includes(c.id)) : clips;
const todo = voices.flatMap((v) =>
  wanted
    .filter(
      (c) =>
        said[v.key]?.[c.id] !== c.text ||
        (takes[v.key]?.[c.id] ?? 1) !== take ||
        !existsSync(`${OUT}/${v.key}/${c.id}.mp3`),
    )
    .map((c) => ({ voice: v, clip: c })),
);
const cost = todo.reduce((n, t) => n + t.clip.text.length, 0);

const headers = { 'xi-api-key': key, 'content-type': 'application/json' };
const sub = await (await fetch(`${API}/user/subscription`, { headers })).json().catch(() => ({}));
const left = Number(sub.character_limit ?? 0) - Number(sub.character_count ?? 0);
console.log(`Plan: ${sub.tier ?? '?'} · credits left: ${left}`);

for (const v of voices) {
  const r = await fetch(`${API}/voices/${v.voiceId}`, { headers });
  console.log(`${v.label} (${v.voiceId}): ${r.ok ? 'reachable' : `NOT reachable (HTTP ${r.status}) - add it to "My Voices" in ElevenLabs`}`);
}
console.log(`${todo.length} clips to record, about ${cost} credits (limit for this run: ${maxCredits}).`);
if (mode === 'check') process.exit(0);
if (cost > maxCredits) throw new Error(`Would spend ${cost} credits, more than MAX_CREDITS=${maxCredits}. Nothing recorded.`);

// A line without closing punctuation ("hallo", "de collega") is read as unfinished and rises
// like a question; a full stop makes it a plain statement. Only the spoken text changes.
const spoken = (text) => (/[.!?…]$/.test(text.trim()) ? text.trim() : `${text.trim()}.`);

async function tts(voice, text) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`${API}/text-to-speech/${voice.voiceId}?output_format=${config.format}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        text: spoken(text),
        model_id: config.model,
        // Context (not spoken) so even one-word clips are read as Dutch; a finished statement,
        // so the clip does not sound like a quoted, unfinished word.
        previous_text: 'Dit is een les Nederlands.',
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true },
      }),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const body = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await new Promise((r) => setTimeout(r, 2000 * 2 ** attempt));
      continue;
    }
    throw new Error(`${voice.label} "${text}": HTTP ${res.status} ${body.slice(0, 300)}`);
  }
}

const save = () => {
  const index = {
    voices: config.voices
      .filter((v) => said[v.key] && Object.keys(said[v.key]).length)
      .map(({ key, label, gender }) => ({
        key, label, gender, license: 'ElevenLabs (paid plan, commercial use)', said: said[key], takes: takes[key] ?? {},
      })),
  };
  writeFileSync(indexPath, JSON.stringify(index, null, 1));
};

let done = 0;
try {
  for (const { voice, clip } of todo) {
    mkdirSync(`${OUT}/${voice.key}`, { recursive: true });
    writeFileSync(`${OUT}/${voice.key}/${clip.id}.mp3`, await tts(voice, clip.text));
    (said[voice.key] ??= {})[clip.id] = clip.text;
    (takes[voice.key] ??= {})[clip.id] = take;
    if (++done % 20 === 0) { save(); console.log(`${done}/${todo.length}`); }
  }
} finally {
  save();
  console.log(`Recorded ${done} of ${todo.length} clips.`);
}
