import { speak } from '../lib/audio';
import type { VoiceRef } from '../lib/voices';
import { SlowIcon, SpeakerIcon } from './Icons';

export function SpeakButton({ text, size = 'md', slow = false, label, lang = 'nl', glyph = false, voice }: {
  text: string;
  /** Plain blue speaker icon (as inside a speech bubble) instead of a filled button. */
  glyph?: boolean;
  size?: 'md' | 'lg';
  slow?: boolean;
  label?: string;
  /** Spoken language: Dutch by default, English for an English cue. */
  lang?: 'nl' | 'en';
  /** Who says it (a character's voice); default: the learner's chosen voice. */
  voice?: VoiceRef;
}) {
  return (
    <button
      type="button"
      className={glyph ? 'speak-glyph' : `speak speak-${size} ${slow ? 'speak-slow' : ''}`}
      onClick={() => speak(text, slow, lang, voice)}
      aria-label={label ?? `Play: ${text}`}
    >
      {glyph ? <SpeakerIcon size={30} /> : slow ? <SlowIcon size={size === 'lg' ? 40 : 28} /> : <SpeakerIcon size={size === 'lg' ? 44 : 28} />}
    </button>
  );
}
