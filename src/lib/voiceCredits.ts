import type { RecordedVoice } from './audio';

/**
 * The voice credits on Over: one line per maker and licence, the voices' names together, said to
 * be AI voices ("AI voices “Thijmen”, “Daniel”: ElevenLabs (paid plan, commercial use)"). Four
 * near-identical English lines that each said "ElevenLabs" twice were too much (the owner's
 * choice, 2 November 2026); what a licence asks to be named (dataset, licence, model card) stays.
 */
export interface VoiceCredit {
  key: string;
  names: string[];
  /** The maker and the licence, once ("ElevenLabs (paid plan, commercial use)"). */
  source: string;
  modelCard?: string;
}

export function voiceCredits(voices: readonly RecordedVoice[], dutch = false): VoiceCredit[] {
  const groups = new Map<string, VoiceCredit>();
  for (const v of voices) {
    const engine = v.engine ?? 'Piper';
    // The licence often starts with the maker's name: then it is said once.
    const parts = dutch
      ? [engine]
      : [v.license?.startsWith(engine) ? v.license : engine, v.dataset, v.license?.startsWith(engine) ? undefined : v.license];
    const source = parts.filter(Boolean).join(' · ');
    const key = `${source}|${dutch ? '' : v.modelCard ?? ''}`;
    const g = groups.get(key) ?? { key, names: [], source, ...(!dutch && v.modelCard ? { modelCard: v.modelCard } : {}) };
    if (!g.names.includes(v.label)) g.names.push(v.label);
    groups.set(key, g);
  }
  return [...groups.values()];
}

/** "AI voices “A”, “B”: …" (Dutch in the work-rules track: "AI-stemmen"). */
export function voiceCreditLine(c: VoiceCredit, dutch = false): string {
  const word = dutch ? (c.names.length === 1 ? 'AI-stem' : 'AI-stemmen') : c.names.length === 1 ? 'AI voice' : 'AI voices';
  return `${word} ${c.names.map((n) => `“${n}”`).join(', ')}: ${c.source}`;
}
