import { readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { clipSrc, clipUrl, setRecordedIndex, voicesIndexUrl, type ElevenIndex } from '../src/lib/audio';
import { packVoices, unpackVoices, type PackedVoices } from '../src/lib/voicesIndex';

/*
 * The recorded-voice index the app downloads is the short form of public/audio-el/voices.json
 * (src/lib/voicesIndex.ts; the build writes it as assets/voices-<hash>.json): each text once, per
 * voice only what differs. It must play exactly the same clip, at the same address, for every line.
 */
const long = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')) as ElevenIndex;

/** For every voice and every recorded text (also without capitals or a full stop): the clip and its address. */
function everyClip(index: ElevenIndex): string[] {
  setRecordedIndex(index, null);
  const out: string[] = [];
  for (const v of long.voices)
    for (const text of Object.values(v.said))
      for (const t of [text, text.toLowerCase(), text.replace(/[.!?]$/, '')]) {
        const url = clipUrl(t, `piper:${v.key}`);
        out.push(`${v.key}|${t}|${url}|${url ? clipSrc(url) : ''}`);
      }
  return out;
}

afterEach(() => vi.unstubAllGlobals());

describe('the short recorded-voice index', () => {
  it('plays the same clip at the same address as the long one, for every line and voice', () => {
    const packed = packVoices(long);
    const before = everyClip(long);
    expect(everyClip(unpackVoices(JSON.parse(JSON.stringify(packed)) as PackedVoices))).toEqual(before);
    // Each voice keeps its own fields, clips and takes.
    const back = unpackVoices(packed);
    expect(back.voices.map((v) => v.key)).toEqual(long.voices.map((v) => v.key));
    for (const [i, v] of long.voices.entries()) {
      expect(back.voices[i].label).toBe(v.label);
      expect(back.voices[i].gender).toBe(v.gender);
      expect(back.voices[i].said).toEqual(v.said);
      for (const id of Object.keys(v.said)) expect(back.voices[i].takes?.[id] ?? 1, `${v.key} ${id}`).toBe(v.takes?.[id] ?? 1);
    }
  });

  it('is a fraction of the long one (each text once)', () => {
    const gz = (o: unknown) => gzipSync(JSON.stringify(o), { level: 9 }).length;
    expect(gz(packVoices(long))).toBeLessThan(gz(long) / 3);
    expect(gz(packVoices(long))).toBeLessThan(30 * 1024);
  });

  it('keeps which clip plays where two clips of a voice say the same text', () => {
    // Two clips with the same text (as Daniel's "herhalen", w.herhalen and t.herhalen): the later
    // one in the voice's own list plays, not the later one in the shared list (voice a's order).
    const index: ElevenIndex = {
      voices: [
        { key: 'a', label: 'A', gender: 'male', said: { 'w.x': 'herhalen', 't.x': 'herhalen', 'w.y': 'Ja.' } },
        { key: 'b', label: 'B', gender: 'male', said: { 't.x': 'herhalen', 'w.x': 'herhalen', 'w.y': 'Ja.', 'w.z': 'ja' } },
      ],
    };
    const pick = (i: ElevenIndex) => (setRecordedIndex(i, null), ['a', 'b'].flatMap((k) => ['herhalen', 'Ja.', 'ja'].map((t) => clipUrl(t, `piper:${k}`))));
    expect(pick(unpackVoices(packVoices(index)))).toEqual(pick(index));
  });

  it('reads a voice kept whole, and the long form as it is (development)', () => {
    const packed: PackedVoices = { packed: 1, said: { 'w.a': 'a' }, take: 2, takes: {}, voices: [{ key: 'k', label: 'K', full: { 'w.b': 'b' } }] };
    expect(unpackVoices(packed).voices[0]).toEqual({ key: 'k', label: 'K', said: { 'w.b': 'b' }, takes: { 'w.b': 2 } });
    expect(unpackVoices(long)).toBe(long);
  });

  it('is the file index.html names, else the long one', () => {
    expect(voicesIndexUrl()).toBe('./audio-el/voices.json');
    vi.stubGlobal('document', { querySelector: (sel: string) => (sel === 'link[rel="vloertaal-voices"]' ? { href: 'https://vloertaal.nl/assets/voices-AbCd1234.json' } : null) });
    expect(voicesIndexUrl()).toBe('https://vloertaal.nl/assets/voices-AbCd1234.json');
  });
});
