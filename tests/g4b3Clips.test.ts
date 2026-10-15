import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, allWords } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { BRAM_HELLO, BRAM_VOICE } from '../src/lib/voices';

/** Lines whose recording is still to be made (the owner re-records them); the device voice says them meanwhile. */
const PENDING_RECORDING = new Set([
  'Zeg het liever direct tegen mij.',
  // x.bram, Bram introducing himself on the first tap (only Thijmen records it, see
  // scripts/list-clips.ts). Until the next "Record ElevenLabs voices" run, sayFirstWord keeps
  // playing the recorded "hallo" instead (src/lib/audio.ts).
  BRAM_HELLO,
]);

describe('recorded clips (G4 b3)', () => {
  it('every sentence, chat line, word and "Zeg het zo" line has a recorded clip', () => {
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    // As lib/audio.ts finds a clip: the exact text, or the same text without its end punctuation.
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const said = new Set(voices.flatMap((v) => Object.values(v.said)).flatMap((t) => [t.trim(), plain(t)]));
    const texts = new Set([
      ...allLessons.flatMap((l) => l.sentences.map((s) => s.nl)),
      ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
      ...allWords.map((w) => w.nl),
      ...cultureTips.map((t) => t.phrase.nl),
      BRAM_HELLO,
    ]);
    const missing = [...texts].filter((t) => !said.has(t.trim()) && !said.has(plain(t)));
    expect(missing.filter((t) => !PENDING_RECORDING.has(t))).toEqual([]);
  });

  it('Bram’s own line is a clip that only his voice records (x.bram, Thijmen)', () => {
    const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8')) as { id: string; text: string; voices?: string[] }[];
    expect(clips.find((c) => c.id === 'x.bram')).toEqual({ id: 'x.bram', text: BRAM_HELLO, voices: [BRAM_VOICE] });
    // Every other clip is recorded in every voice, as before.
    expect(clips.filter((c) => c.voices).map((c) => c.id)).toEqual(['x.bram']);
  });
});
