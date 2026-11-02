import { describe, expect, it } from 'vitest';
import { voiceCreditLine, voiceCredits } from '../src/lib/voiceCredits';

const el = (label: string) => ({ key: label, label, engine: 'ElevenLabs' as const, license: 'ElevenLabs (paid plan, commercial use)' });

/** Over: the voices said once per maker, as AI voices (the owner's choice, 2 November 2026). */
describe('voice credits', () => {
  it('one line for the ElevenLabs voices, the maker said once', () => {
    const c = voiceCredits([el('Thijmen'), el('Daniel'), el('Ariël'), el('Noa')]);
    expect(c).toHaveLength(1);
    expect(voiceCreditLine(c[0])).toBe('AI voices “Thijmen”, “Daniel”, “Ariël”, “Noa”: ElevenLabs (paid plan, commercial use)');
  });

  it('keeps what a licence asks to be named (dataset, licence, model card) for other voices', () => {
    const piper = { key: 'p', label: 'Mia', engine: 'Piper' as const, dataset: 'nl_NL-mls', license: 'CC BY 4.0', modelCard: 'https://example.org/card' };
    const c = voiceCredits([el('Noa'), piper]);
    expect(c).toHaveLength(2);
    expect(voiceCreditLine(c[1])).toBe('AI voice “Mia”: Piper · nl_NL-mls · CC BY 4.0');
    expect(c[1].modelCard).toBe('https://example.org/card');
  });

  it('in the work-rules track: Dutch, the maker only', () => {
    const c = voiceCredits([el('Thijmen'), el('Noa')], true);
    expect(voiceCreditLine(c[0], true)).toBe('AI-stemmen “Thijmen”, “Noa”: ElevenLabs');
  });
});
