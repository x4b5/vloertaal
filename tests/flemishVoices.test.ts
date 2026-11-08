import { afterEach, describe, expect, it } from 'vitest';
import { clipUrl, recordedVoices, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { setCastCountry, voiceFor } from '../src/lib/voices';

/**
 * Flemish voices for learners who work in Belgium (the owner's request, 8 November 2026): the cast
 * speaks with its Flemish voice there, and a line that voice has not recorded yet is played by the
 * character's Dutch twin, never by another character's voice.
 */

const nl = (key: string, gender: string, said: Record<string, string>) => ({ key, label: key, gender, said });
const be = (key: string, gender: string, twin: string, said: Record<string, string>) => ({ key, label: key, gender, country: 'be' as const, twin, said });

const index: ElevenIndex = {
  voices: [
    nl('thijmen', 'male', { 'w.helm': 'de helm', 'be.w.gsm': 'de gsm' }),
    nl('daniel', 'male', { 'w.helm': 'de helm' }),
    nl('ariel', 'female', { 'w.helm': 'de helm' }),
    nl('noa', 'female', { 'w.helm': 'de helm' }),
    be('philip', 'male', 'thijmen', { 'be.w.gsm': 'de gsm' }),
    be('hans', 'male', 'daniel', { 'be.w.gsm': 'de gsm' }),
  ],
};

describe('Flemish voices (src/lib/voices.ts setCastCountry)', () => {
  afterEach(() => setCastCountry('nl'));

  it('keeps the Dutch cast in the Netherlands', () => {
    setRecordedIndex(index, null);
    setCastCountry('nl');
    expect(voiceFor('bram')).toBe('piper:thijmen');
    expect(voiceFor('henk')).toBe('piper:daniel');
  });

  it('speaks with the Flemish voice in Belgium, once it has recordings', () => {
    setRecordedIndex(index, null);
    setCastCountry('be');
    expect(voiceFor('bram')).toBe('piper:philip');
    expect(voiceFor('henk')).toBe('piper:hans');
    // No Flemish Amina recorded yet: her Dutch voice.
    expect(voiceFor('amina')).toBe('piper:ariel');
  });

  it('plays the Flemish recording when it has the line', () => {
    setRecordedIndex(index, null);
    expect(clipUrl('de gsm', 'piper:hans')).toBe('./audio-el/hans/be.w.gsm.mp3');
  });

  it("falls back to the character's own Dutch twin, not another man's voice", () => {
    setRecordedIndex(index, null);
    expect(clipUrl('de helm', 'piper:hans')).toBe('./audio-el/daniel/w.helm.mp3');
    expect(clipUrl('de helm', 'piper:philip')).toBe('./audio-el/thijmen/w.helm.mp3');
  });

  it('never lets a Dutch voice borrow a Flemish recording while a Dutch one exists', () => {
    setRecordedIndex(index, null);
    expect(clipUrl('de gsm', 'piper:daniel')).toBe('./audio-el/thijmen/be.w.gsm.mp3');
  });

  it('leaves the Flemish voices out of the voice choice in Settings', () => {
    setRecordedIndex(index, null);
    expect(recordedVoices().map((v) => v.key)).toEqual(['thijmen', 'daniel', 'ariel', 'noa']);
  });
});
