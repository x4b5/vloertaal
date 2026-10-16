import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, allWords } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';
import { allRegionTips, allRegionUnits } from '../src/content/regio';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';
import { BRAM_HELLO, BRAM_VOICE } from '../src/lib/voices';

/** Lines whose recording is still to be made (the owner re-records them); the device voice says them meanwhile. */
const PENDING_RECORDING = new Set<string>([
  // Add a changed or new line here until the next 'Record ElevenLabs voices' run.
  // More natural Dutch (critic, 16 October 2026):
  'Kunt u langzamer praten?',
  'Ik ben het niet met je eens.',
  'Mag ik jij zeggen?',
  'Waar is dit middel voor?',
]);

describe('recorded clips (G4 b3)', () => {
  it('every sentence, chat line, word and "Zeg het zo" line has a recorded clip', () => {
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    // As lib/audio.ts finds a clip: the exact text, or the same text without its end punctuation.
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const said = new Set(voices.flatMap((v) => Object.values(v.said)).flatMap((t) => [t.trim(), plain(t)]));
    // With the regions' language units and tips (src/content/regio).
    const regionLessons = allRegionUnits('taal').flatMap((u) => u.lessons);
    const texts = new Set([
      ...allLessons.flatMap((l) => l.sentences.map((s) => s.nl)),
      ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
      ...allWords.map((w) => w.nl),
      ...cultureTips.map((t) => t.phrase.nl),
      ...regionLessons.flatMap((l) => [...l.words.map((w) => w.nl), ...l.sentences.map((s) => s.nl), ...(l.dialogues ?? []).flatMap((d) => [d.prompt.nl, d.reply.nl])]),
      ...allRegionTips().map((t) => t.phrase.nl),
      BRAM_HELLO,
    ]);
    const missing = [...texts].filter((t) => !said.has(t.trim()) && !said.has(plain(t)));
    expect(missing.filter((t) => !PENDING_RECORDING.has(t))).toEqual([]);
  });

  it('Bram’s own line is a clip that only his voice records (x.bram, Thijmen)', { timeout: 60_000 }, () => {
    // public/audio/ is not in git: write clips.json afresh, so the script itself is tested too (a
    // copy left from an earlier run would hide a script that no longer runs).
    execSync('npx tsx scripts/list-clips.ts', { stdio: 'ignore' });
    const clips = JSON.parse(readFileSync('public/audio/clips.json', 'utf8')) as { id: string; text: string; voices?: string[] }[];
    // The regions' lines are in it, also while the regions are off (they are recorded before they go on).
    expect(clips.some((c) => c.id.startsWith('rg.'))).toBe(true);
    expect(clips.find((c) => c.id === 'x.bram')).toEqual({ id: 'x.bram', text: BRAM_HELLO, voices: [BRAM_VOICE] });
    // Every other clip is recorded in every voice, as before.
    expect(clips.filter((c) => c.voices).map((c) => c.id)).toEqual(['x.bram']);
  });
});
