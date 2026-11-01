// Records the short lines of the first pages in the help languages with ElevenLabs (AI voices):
// public/audio-help/<lang>/<id>.mp3, and public/audio-help/manifest.json (what each file says).
// A line is (re)made only when its mp3 is missing or its text changed, so each is paid once.
//
//   npm run help:clips                                   # the list (no key needed)
//   node scripts/voices/elevenlabs-help.mjs check        # models know the languages? the cost
//   node scripts/voices/elevenlabs-help.mjs sample       # one line per language: listen first
//   node scripts/voices/elevenlabs-help.mjs all          # everything missing or outdated
//
// Needs ELEVENLABS_API_KEY. LANGS=ar,fa records some languages only. MAX_CREDITS (default 8000)
// stops the run before it would spend more. Languages marked "human" in elevenlabs-help.json
// (Tigrinya) are never sent: a native speaker records those (docs/opnames.md).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { helpCredits, helpTodo, withRecorded } from './help-todo.mjs';

const OUT = 'public/audio-help';
const API = 'https://api.elevenlabs.io/v1';
const key = process.env.ELEVENLABS_API_KEY;
const mode = process.argv[2] ?? 'check';
const maxCredits = Number(process.env.MAX_CREDITS ?? 8000);
const only = (process.env.LANGS ?? '').split(',').map((s) => s.trim()).filter(Boolean);

if (!key) throw new Error('ELEVENLABS_API_KEY is not set.');
if (!existsSync(`${OUT}/clips.json`)) throw new Error(`${OUT}/clips.json is missing: run \`npm run help:clips\` first.`);
const config = JSON.parse(readFileSync('scripts/voices/elevenlabs-help.json', 'utf8'));
const clips = JSON.parse(readFileSync(`${OUT}/clips.json`, 'utf8'));
const manifestPath = `${OUT}/manifest.json`;
let manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : { langs: {} };

const all = Object.keys(clips);
const unknown = only.filter((l) => !all.includes(l));
if (unknown.length) throw new Error(`Unknown language ${unknown.join(', ')}. Known: ${all.join(', ')}.`);
const human = all.filter((l) => config.langs[l]?.human);
const langs = (only.length ? only : all).filter((l) => !config.langs[l]?.human);

const has = (lang, id) => existsSync(`${OUT}/${lang}/${id}.mp3`);
let todo = helpTodo(clips, manifest, has, langs);
// sample: the first line of each language ("Wat wil je leren?"), to hear the voice before paying for all.
if (mode === 'sample') todo = Object.fromEntries(langs.map((l) => [l, (clips[l] ?? []).slice(0, 1)]));
const cost = helpCredits(todo);

const headers = { 'xi-api-key': key, 'content-type': 'application/json' };
const sub = await (await fetch(`${API}/user/subscription`, { headers })).json().catch(() => ({}));
console.log(`Plan: ${sub.tier ?? '?'} · credits left: ${Number(sub.character_limit ?? 0) - Number(sub.character_count ?? 0)}`);

// Does each model say it knows the language? (GET /v1/models lists every model's languages.)
const models = await (await fetch(`${API}/models`, { headers })).json().catch(() => []);
const knows = (modelId, lang) => {
  const m = Array.isArray(models) ? models.find((x) => x.model_id === modelId) : undefined;
  if (!m) return '?';
  const want = lang === 'prs' ? ['prs', 'fa', 'fas', 'per'] : [lang];
  return (m.languages ?? []).some((l) => want.some((w) => String(l.language_id).toLowerCase().startsWith(w))) ? 'yes' : 'NO';
};
for (const l of langs) {
  const c = config.langs[l] ?? {};
  const voice = c.voiceId ?? config.defaultVoiceId;
  const n = todo[l]?.length ?? 0;
  console.log(`${l}: ${c.model} knows it: ${knows(c.model, l)} · voice ${voice}${c.voiceId ? '' : ' (default)'}${c.listen ? ' · LISTEN FIRST' : ''} · ${n} to record`);
}
if (human.length) console.log(`By a native speaker (not sent to ElevenLabs): ${human.join(', ')}. See docs/opnames.md.`);
console.log(`About ${cost} credits for this run (limit: ${maxCredits}).`);
if (mode === 'check') process.exit(0);
if (cost > maxCredits) throw new Error(`Would spend ${cost} credits, more than MAX_CREDITS=${maxCredits}. Nothing recorded.`);

async function tts(lang, text) {
  const c = config.langs[lang];
  const voice = c.voiceId ?? config.defaultVoiceId;
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`${API}/text-to-speech/${voice}?output_format=${config.format}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        text,
        model_id: c.model,
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true },
      }),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const body = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await new Promise((r) => setTimeout(r, 2000 * 2 ** attempt));
      continue;
    }
    throw new Error(`${lang} "${text}": HTTP ${res.status} ${body.slice(0, 300)}`);
  }
}

let done = 0;
const save = () => writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 1)}\n`);
try {
  for (const [lang, list] of Object.entries(todo)) {
    mkdirSync(`${OUT}/${lang}`, { recursive: true });
    for (const clip of list) {
      writeFileSync(`${OUT}/${lang}/${clip.id}.mp3`, await tts(lang, clip.text));
      manifest = withRecorded(manifest, lang, [clip]);
      done++;
    }
    save();
  }
} finally {
  save();
  console.log(`Recorded ${done} lines.`);
}
