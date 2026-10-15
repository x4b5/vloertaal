import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, allWords } from '../src/content/curriculum';
import { cultureTips } from '../src/content/culture';

/** Lines whose recording is still to be made (the owner re-records them); the device voice says them meanwhile. */
const PENDING_RECORDING = new Set(['Zeg het liever direct tegen mij.']);

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
    ]);
    const missing = [...texts].filter((t) => !said.has(t.trim()) && !said.has(plain(t)));
    expect(missing.filter((t) => !PENDING_RECORDING.has(t))).toEqual([]);
  });
});
