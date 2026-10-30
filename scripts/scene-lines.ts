// Werkvloer-luisteren: zet de zinnen van de geluidsscènes (src/content/geluidsscenes.ts) in het
// formaat dat het opnamescript leest (scripts/voices/elevenlabs.mjs leest public/audio/clips.json).
// Plan en uitleg: docs/geluidsscenes.md. Nodig: geen sleutel; dit script neemt niets op.
//
//   npm run scenes:lines              # schrijft public/audio/scene-lines.json en telt de credits
//   npm run scenes:lines -- --merge   # zet de zinnen ook achter in public/audio/clips.json
//                                     # (eerst npm run clips), zodat elevenlabs.mjs ze opneemt
//   npm run scenes:lines -- --mix     # schrijft public/audio/scene-mix.sh: per scène de ffmpeg-
//                                     # commando's die stem en omgevingsgeluid mengen
//
// Eén clip per beurt: id "<scène-id>.<n>" (g.bouw.steiger.1). Elke clip noemt zijn stem
// ("voices"), dus elevenlabs.mjs neemt hem alleen in die stem op: Henk in Daniel, Jada in Noa,
// Bram in Thijmen, Amina in Ariël (zoals src/lib/voices.ts). Een beurt van de leerling ("ik")
// wordt in Thijmen en in Ariël opgenomen, net als learnerVoice: van zo'n scène komen twee mixen.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { geluidsscenes, type Spreker } from '../src/content/geluidsscenes';
import { sayAs } from '../src/lib/sayAs';

const VOICE: Record<Exclude<Spreker, 'ik'>, string> = { bram: 'thijmen', henk: 'daniel', amina: 'ariel', jada: 'noa' };
const LEARNER = ['thijmen', 'ariel'];
const voicesOf = (wie: Spreker) => (wie === 'ik' ? LEARNER : [VOICE[wie]]);
/** Same take as the other clips with a `say` (scripts/list-clips.ts SAY_TAKE). */
const SAY_TAKE = 2;

type Clip = { id: string; text: string; say?: string; take?: number; voices: string[] };
const clips: Clip[] = geluidsscenes.flatMap((s) =>
  s.beurten.map((b, i) => {
    const say = sayAs(b.nl);
    return { id: `${s.id}.${i + 1}`, text: b.nl, ...(say !== b.nl ? { say, take: SAY_TAKE } : {}), voices: voicesOf(b.wie) };
  }),
);

mkdirSync('public/audio', { recursive: true });
writeFileSync('public/audio/scene-lines.json', JSON.stringify(clips, null, 1));

// Credits: eleven_multilingual_v2 kost 1 credit per teken; elke stem betaalt zijn eigen tekens.
const perVoice = new Map<string, number>();
for (const c of clips) for (const v of c.voices) perVoice.set(v, (perVoice.get(v) ?? 0) + (c.say ?? c.text).length + 1);
const total = [...perVoice.values()].reduce((a, b) => a + b, 0);
console.log(`${geluidsscenes.length} scènes · ${clips.length} clips → public/audio/scene-lines.json`);
for (const [v, n] of perVoice) console.log(`  ${v}: ${n} tekens`);
console.log(`Samen ongeveer ${total} credits voor één opname van elke zin (twee takes: ${total * 2}).`);

if (process.argv.includes('--merge')) {
  const path = 'public/audio/clips.json';
  if (!existsSync(path)) throw new Error(`${path} ontbreekt: draai eerst npm run clips.`);
  const all: Clip[] = JSON.parse(readFileSync(path, 'utf8'));
  const rest = all.filter((c) => !c.id.startsWith('g.'));
  writeFileSync(path, JSON.stringify([...rest, ...clips], null, 1));
  console.log(`${clips.length} scène-clips achter in ${path} gezet (${rest.length} andere clips).`);
}

if (process.argv.includes('--mix')) {
  // Stem op 0 dB, geluid zacht (-24 dB) of midden (-18 dB); 1,5 s geluid voor en na de stem,
  // 0,5 s tussen de beurten; in- en uitfaden; daarna even luid als de andere clips (-16 LUFS).
  const DB = { zacht: -24, midden: -18 } as const;
  const lines = [
    '#!/usr/bin/env bash',
    '# Gemaakt door npm run scenes:lines -- --mix. Draai vanuit de map van de app.',
    '# Nodig: de stemclips in public/audio-el/<stem>/ en per scène public/audio-scenes/geluid/<scène-id>.mp3.',
    'set -euo pipefail',
    'mkdir -p public/audio-scenes',
  ];
  for (const s of geluidsscenes) {
    const variants = s.beurten.some((b) => b.wie === 'ik') ? LEARNER : [''];
    for (const me of variants) {
      const files = s.beurten.map((b, i) => `public/audio-el/${b.wie === 'ik' ? me : VOICE[b.wie]}/${s.id}.${i + 1}.mp3`);
      const n = files.length;
      const pads = files.map((_, i) => `[${i}:a]${i < n - 1 ? 'apad=pad_dur=0.5' : 'anull'}[a${i}]`).join(';');
      const concat = `${files.map((_, i) => `[a${i}]`).join('')}concat=n=${n}:v=0:a=1,adelay=1500:all=1,apad=pad_dur=1.5[v]`;
      const bg = `[${n}:a]volume=${DB[s.geluid.niveau]}dB,afade=t=in:d=1[bg]`;
      const mix = '[v][bg]amix=inputs=2:duration=first:normalize=0,areverse,afade=t=in:d=1,areverse,loudnorm=I=-16:TP=-1.5[out]';
      const out = `public/audio-scenes/${s.id}${me ? `.${me}` : ''}.mp3`;
      lines.push(
        `# ${s.titel}${me ? ` (leerling: ${me})` : ''}`,
        `ffmpeg -y -loglevel error ${files.map((f) => `-i ${f}`).join(' ')} -stream_loop -1 -i public/audio-scenes/geluid/${s.id}.mp3 \\`,
        `  -filter_complex "${pads};${concat};${bg};${mix}" -map "[out]" -ac 1 -ar 44100 -b:a 64k ${out}`,
      );
    }
  }
  writeFileSync('public/audio/scene-mix.sh', `${lines.join('\n')}\n`);
  console.log('public/audio/scene-mix.sh geschreven.');
}
